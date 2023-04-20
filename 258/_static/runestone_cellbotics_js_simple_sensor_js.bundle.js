(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_cellbotics_js_simple_sensor_js"],{

/***/ 34630:
/*!**********************************************!*\
  !*** ./runestone/cellbotics/js/auto-bind.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auto_bind": () => (/* binding */ auto_bind)
/* harmony export */ });
// .. Copyright (C) 2012-2020 Bryan A. Jones.
//
//  This file is part of the CellBotics system.
//
//  The CellBotics system is free software: you can redistribute it and/or
//  modify it under the terms of the GNU General Public License as
//  published by the Free Software Foundation, either version 3 of the
//  License, or (at your option) any later version.
//
//  The CellBotics system is distributed in the hope that it will be
//  useful, but WITHOUT ANY WARRANTY; without even the implied warranty
//  of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
//  General Public License for more details.
//
//  You should have received a copy of the GNU General Public License
//  along with the CellBotics system.  If not, see
//  <http://www.gnu.org/licenses/>.
//
// *********************************************************
// |docname| - Automatically bind methods to their instances
// *********************************************************




// The following two functions were taken from https://github.com/sindresorhus/auto-bind/blob/master/index.js and lightly modified. They provide an easy way to bind all callable methods to their instance. See `Binding Methods to Class Instance Objects <https://ponyfoo.com/articles/binding-methods-to-class-instance-objects>`_ for more discussion on this crazy JavaScript necessity.
//
// Gets all non-builtin properties up the prototype chain
const getAllProperties = object => {
	const properties = new Set();

	do {
		for (const key of Reflect.ownKeys(object)) {
			properties.add([object, key]);
		}
	} while ((object = Reflect.getPrototypeOf(object)) && object !== Object.prototype);

	return properties;
};


// Invoke this in the constructor of an object.
function auto_bind(self) {
    for (const [object, key] of getAllProperties(self.constructor.prototype)) {
        if (key === 'constructor') {
            continue;
        }

        const descriptor = Reflect.getOwnPropertyDescriptor(object, key);
        if (descriptor && typeof descriptor.value === 'function') {
            self[key] = self[key].bind(self);
        }
    }
}


/***/ }),

/***/ 64617:
/*!*********************************************************!*\
  !*** ./runestone/cellbotics/js/permissions_polyfill.js ***!
  \*********************************************************/
/***/ (() => {

"use strict";
// .. Copyright (C) 2012-2020 Bryan A. Jones.
//
//  This file is part of the CellBotics system.
//
//  The CellBotics system is free software: you can redistribute it and/or
//  modify it under the terms of the GNU General Public License as
//  published by the Free Software Foundation, either version 3 of the
//  License, or (at your option) any later version.
//
//  The CellBotics system is distributed in the hope that it will be
//  useful, but WITHOUT ANY WARRANTY; without even the implied warranty
//  of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
//  General Public License for more details.
//
//  You should have received a copy of the GNU General Public License
//  along with the CellBotics system.  If not, see
//  <http://www.gnu.org/licenses/>.
//
// ********************************************
// |docname| - Polyfill for the Permissions API
// ********************************************
// This is primarily for iOS devices that don't provide Permissions, but use another method to allow access to various sensors.



// Only supply this if there's not Permissions and we have tne iOS flavor available. See sample code in https://dev.to/li/how-to-requestpermission-for-devicemotion-and-deviceorientation-events-in-ios-13-46g2 or the `W3C working draft <https://www.w3.org/TR/orientation-event/#deviceorientation>`_.
if (
    !navigator.permissions &&
    (typeof DeviceMotionEvent.requestPermission === "function") &&
    (typeof DeviceOrientationEvent.requestPermission === "function")
) {
    navigator.permissions = {
        query: options => {
            // Ignore everything but the name, since our use case is only for SimpleSensor.
            switch (options.name) {
                case "accelerometer":
                case "gyroscope":
                // The requested permissions doesn't allow us to determine which of the following two permissions we need, so ask for both.
                return new Promise((resolve, reject) => {
                    Promise.all([
                        // The polyfill for the accelerometer, gyro, and related classes needs just this.
                        DeviceMotionEvent.requestPermission(),
                        // The polyfill for the orientation sensors needs just this.
                        DeviceOrientationEvent.requestPermission()
                    ]).then(
                        // We now have an array of strings, the result of the requestPermission calls. If all are "granted", then return {state: "granted"}, else return {state: "denied"}.
                        vals => resolve({state:
                            (vals.every(x => x === "granted") ? "granted" : "denied")
                        })
                    )
                });

                // There's nothing else that needs permission to work.
                default:
                return Promise.resolve({state: "granted"});
            }
        }
    };
}


/***/ }),

/***/ 6713:
/*!***********************************************************************!*\
  !*** ./runestone/cellbotics/js/sensor_polyfill/geolocation-sensor.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sensor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sensor.js */ 28660);
/* harmony import */ var _sensor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sensor_js__WEBPACK_IMPORTED_MODULE_0__);
// ***************************************
// |docname| - Geolocation sensor polyfill
// ***************************************
// @ts-check




//const slot = __sensor__;

class GeolocationSensorSingleton {
  constructor() {
    if (!this.constructor.instance) {
      this.constructor.instance = this;
    }

    this.sensors = new Set();
    this.watchId = null;
    this.accuracy = null;
    this.lastPosition = null;

    return this.constructor.instance;
  }

  async obtainPermission() {
    let state = "prompt"; // Default for geolocation.
    // @ts-ignore
    if (navigator.permissions) {
      // @ts-ignore
      const permission = await navigator.permissions.query({ name:"geolocation"});
      state = permission.state;
    }

    return new Promise(resolve => {
      const successFn = position => {
        this.lastPosition = position;
        resolve("granted");
      }

      const errorFn = err => {
        if (err.code === err.PERMISSION_DENIED) {
          resolve("denied");
        } else {
          resolve(state);
        }
      }

      const options = { maximumAge: Infinity, timeout: 10 };
      navigator.geolocation.getCurrentPosition(successFn, errorFn, options);
    });
  }

  calculateAccuracy() {
    let enableHighAccuracy = false;

    for (const sensor of this.sensors) {
      if (sensor[slot].options.accuracy === "high") {
        enableHighAccuracy = true;
        break;
      }
    }
    return enableHighAccuracy;
  }

  async register(sensor) {
    const permission = await this.obtainPermission();
    if (permission !== "granted") {
      sensor[slot].notifyError("Permission denied.", "NowAllowedError");
      return;
    }

    if (this.lastPosition) {
      const age = performance.now() - this.lastPosition.timeStamp;
      const maxAge = sensor[slot].options.maxAge;
      if (maxAge == null || age <= maxAge) {
        sensor[slot].handleEvent(age, this.lastPosition.coords);
      }
    }

    this.sensors.add(sensor);

    // Check whether we need to reconfigure our navigation.geolocation
    // watch, ie. tear it down and recreate.
    const accuracy = this.calculateAccuracy();
    if (this.watchId && this.accuracy === accuracy) {
      // We don't need to reset, return.
      return;
    }

    if (this.watchId) {
      navigator.geolocation.clearWatch(this.watchId);
    }

    const handleEvent = position => {
      this.lastPosition = position;

      const timestamp = position.timestamp - performance.timing.navigationStart;
      const coords = position.coords;

      for (const sensor of this.sensors) {
        sensor[slot].handleEvent(timestamp, coords);
      }
    }

    const handleError = error => {
      let type;
      switch(error.code) {
        case error.TIMEOUT:
          type = "TimeoutError";
          break;
        case error.PERMISSION_DENIED:
          type = "NotAllowedError";
          break;
        case error.POSITION_UNAVAILABLE:
          type = "NotReadableError";
          break;
        default:
          type = "UnknownError";
      }
      for (const sensor of this.sensors) {
        sensor[slot].handleError(error.message, type);
      }
    }

    const options = {
      enableHighAccuracy: accuracy,
      maximumAge: 0,
      timeout: Infinity
    }

    this.watchId = navigator.geolocation.watchPosition(
      handleEvent, handleError, options
    );
  }

  deregister(sensor) {
    this.sensors.delete(sensor);
    if (!this.sensors.size && this.watchId) {
      navigator.geolocation.clearWatch(this.watchId);
      this.watchId = null;
    }
  }
}

// @ts-ignore
const GeolocationSensor = window.GeolocationSensor ||
class GeolocationSensor extends Sensor {
  constructor(options = {}) {
    super(options);

    this[slot].options = options;

    const props = {
      latitude: null,
      longitude: null,
      altitude: null,
      accuracy: null,
      altitudeAccuracy: null,
      heading: null,
      speed: null
    }

    const propertyBag = this[slot];
    for (const propName in props) {
      propertyBag[propName] = props[propName];
      Object.defineProperty(this, propName, {
        get: () => propertyBag[propName]
      });
    }

    this[slot].handleEvent = (timestamp, coords) => {
      if (!this[slot].activated) {
        this[slot].notifyActivatedState();
      }

      this[slot].timestamp = timestamp;

      this[slot].accuracy = coords.accuracy;
      this[slot].altitude = coords.altitude;
      this[slot].altitudeAccuracy = coords.altitudeAccuracy;
      this[slot].heading = coords.heading;
      this[slot].latitude = coords.latitude;
      this[slot].longitude = coords.longitude;
      this[slot].speed = coords.speed;

      this[slot].hasReading = true;
      this.dispatchEvent(new Event("reading"));
    }

    this[slot].handleError = (message, type) => {
      this[slot].notifyError(message, type);
    }

    this[slot].activateCallback = () => {
      (new GeolocationSensorSingleton()).register(this);
    }

    this[slot].deactivateCallback = () => {
      (new GeolocationSensorSingleton()).deregister(this);
    }
  }
}

/***/ }),

/***/ 1981:
/*!*******************************************************************!*\
  !*** ./runestone/cellbotics/js/sensor_polyfill/motion-sensors.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sensor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sensor.js */ 28660);
/* harmony import */ var _sensor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sensor_js__WEBPACK_IMPORTED_MODULE_0__);
// ***********************************
// |docname| - Motion sensors polyfill
// ***********************************
// @ts-check




//const slot = __sensor__;

let orientation;

// @ts-ignore
if (screen.orientation) {
  // @ts-ignore
  orientation = screen.orientation;
} else if (screen.msOrientation) {
  orientation = screen.msOrientation;
} else {
  orientation = {};
  Object.defineProperty(orientation, "angle", {
    get: () => { return (window.orientation || 0) }
  });
}

const DeviceOrientationMixin = (superclass, ...eventNames) => class extends superclass {
  constructor(...args) {
    // @ts-ignore
    super(args);

    for (const eventName of eventNames) {
      if (`on${eventName}` in window) {
        this[slot].eventName = eventName;
        break;
      }
    }

    this[slot].activateCallback = () => {
      window.addEventListener(this[slot].eventName, this[slot].handleEvent, { capture: true });
    }

    this[slot].deactivateCallback = () => {
      window.removeEventListener(this[slot].eventName, this[slot].handleEvent, { capture: true });
    }
  }
};

function toQuaternionFromEuler(alpha, beta, gamma) {
  const degToRad = Math.PI / 180

  const x = (beta || 0) * degToRad;
  const y = (gamma || 0) * degToRad;
  const z = (alpha || 0) * degToRad;

  const cZ = Math.cos(z * 0.5);
  const sZ = Math.sin(z * 0.5);
  const cY = Math.cos(y * 0.5);
  const sY = Math.sin(y * 0.5);
  const cX = Math.cos(x * 0.5);
  const sX = Math.sin(x * 0.5);

  const qx = sX * cY * cZ - cX * sY * sZ;
  const qy = cX * sY * cZ + sX * cY * sZ;
  const qz = cX * cY * sZ + sX * sY * cZ;
  const qw = cX * cY * cZ - sX * sY * sZ;

  return [qx, qy, qz, qw];
}

function rotateQuaternionByAxisAngle(quat, axis, angle) {
  const sHalfAngle = Math.sin(angle / 2);
  const cHalfAngle = Math.cos(angle / 2);

  const transformQuat = [
    axis[0] * sHalfAngle,
    axis[1] * sHalfAngle,
    axis[2] * sHalfAngle,
    cHalfAngle
  ];

  function multiplyQuaternion(a, b) {
    const qx = a[0] * b[3] + a[3] * b[0] + a[1] * b[2] - a[2] * b[1];
    const qy = a[1] * b[3] + a[3] * b[1] + a[2] * b[0] - a[0] * b[2];
    const qz = a[2] * b[3] + a[3] * b[2] + a[0] * b[1] - a[1] * b[0];
    const qw = a[3] * b[3] - a[0] * b[0] - a[1] * b[1] - a[2] * b[2];

    return [qx, qy, qz, qw];
  }

  function normalizeQuaternion(quat) {
    const length = Math.sqrt(quat[0] ** 2 + quat[1] ** 2 + quat[2] ** 2 + quat[3] ** 2);
    if (length === 0) {
      return [0, 0, 0, 1];
    }

    return quat.map(v => v / length);
  }

  return normalizeQuaternion(multiplyQuaternion(quat, transformQuat));
}

function toMat4FromQuat(mat, q) {
  const typed = mat instanceof Float32Array || mat instanceof Float64Array;

  if (typed && mat.length >= 16) {
    mat[0] = 1 - 2 * (q[1] ** 2 + q[2] ** 2);
    mat[1] = 2 * (q[0] * q[1] - q[2] * q[3]);
    mat[2] = 2 * (q[0] * q[2] + q[1] * q[3]);
    mat[3] = 0;

    mat[4] = 2 * (q[0] * q[1] + q[2] * q[3]);
    mat[5] = 1 - 2 * (q[0] ** 2 + q[2] ** 2);
    mat[6] = 2 * (q[1] * q[2] - q[0] * q[3]);
    mat[7] = 0;

    mat[8] = 2 * (q[0] * q[2] - q[1] * q[3]);
    mat[9] = 2 * (q[1] * q[2] + q[0] * q[3]);
    mat[10] = 1 - 2 * (q[0] ** 2 + q[1] ** 2);
    mat[11] = 0;

    mat[12] = 0;
    mat[13] = 0;
    mat[14] = 0;
    mat[15] = 1;
  }

  return mat;
}

function worldToScreen(quaternion) {
  return !quaternion ? null :
    rotateQuaternionByAxisAngle(
      quaternion,
      [0, 0, 1],
      - orientation.angle * Math.PI / 180
    );
}

// @ts-ignore
const RelativeOrientationSensor = window.RelativeOrientationSensor ||
class RelativeOrientationSensor extends DeviceOrientationMixin(Sensor, "deviceorientation") {
  constructor(options = {}) {
    super(options);

    switch (options.coordinateSystem || 'world') {
      case 'screen':
        Object.defineProperty(this, "quaternion", {
          get: () => worldToScreen(this[slot].quaternion)
        });
        break;
      case 'world':
      default:
        Object.defineProperty(this, "quaternion", {
          get: () => this[slot].quaternion
        });
    }

    this[slot].handleEvent = event => {
      // If there is no sensor we will get values equal to null.
      if (event.absolute || event.alpha === null) {
        // Spec: The implementation can still decide to provide
        // absolute orientation if relative is not available or
        // the resulting data is more accurate. In either case,
        // the absolute property must be set accordingly to reflect
        // the choice.
        this[slot].notifyError("Could not connect to a sensor", "NotReadableError");
        return;
      }

      if (!this[slot].activated) {
        this[slot].notifyActivatedState();
      }

      this[slot].timestamp = performance.now();

      this[slot].quaternion = toQuaternionFromEuler(
        event.alpha,
        event.beta,
        event.gamma
      );

      this[slot].hasReading = true;
      this.dispatchEvent(new Event("reading"));
    }

    this[slot].deactivateCallback = () => {
      this[slot].quaternion = null;
    }
  }

  populateMatrix(mat) {
    toMat4FromQuat(mat, this.quaternion);
  }
}

// @ts-ignore
const AbsoluteOrientationSensor = window.AbsoluteOrientationSensor ||
class AbsoluteOrientationSensor extends DeviceOrientationMixin(
  Sensor, "deviceorientationabsolute", "deviceorientation") {
  constructor(options = {}) {
    super(options);

    switch (options.coordinateSystem || 'world') {
      case 'screen':
        Object.defineProperty(this, "quaternion", {
          get: () => worldToScreen(this[slot].quaternion)
        });
        break;
      case 'world':
      default:
        Object.defineProperty(this, "quaternion", {
          get: () => this[slot].quaternion
        });
    }

    this[slot].handleEvent = event => {
      // If absolute is set, or webkitCompassHeading exists,
      // absolute values should be available.
      const isAbsolute = event.absolute === true || "webkitCompassHeading" in event;
      const hasValue = event.alpha !== null || event.webkitCompassHeading !== undefined;

      if (!isAbsolute || !hasValue) {
        // Spec: If an implementation can never provide absolute
        // orientation information, the event should be fired with
        // the alpha, beta and gamma attributes set to null.
        this[slot].notifyError("Could not connect to a sensor", "NotReadableError");
        return;
      }

      if (!this[slot].activated) {
        this[slot].notifyActivatedState();
      }

      this[slot].hasReading = true;
      this[slot].timestamp = performance.now();

      const heading = event.webkitCompassHeading != null ? 360 - event.webkitCompassHeading : event.alpha;

      this[slot].quaternion = toQuaternionFromEuler(
        heading,
        event.beta,
        event.gamma
      );

      this.dispatchEvent(new Event("reading"));
    }

    this[slot].deactivateCallback = () => {
      this[slot].quaternion = null;
    }
  }

  populateMatrix(mat) {
    toMat4FromQuat(mat, this.quaternion);
  }
}

// @ts-ignore
const Gyroscope = window.Gyroscope ||
class Gyroscope extends DeviceOrientationMixin(Sensor, "devicemotion") {
  constructor(options) {
    super(options);
    this[slot].handleEvent = event => {
      // If there is no sensor we will get values equal to null.
      if (event.rotationRate.alpha === null) {
        this[slot].notifyError("Could not connect to a sensor", "NotReadableError");
        return;
      }

      if (!this[slot].activated) {
        this[slot].notifyActivatedState();
      }

      this[slot].timestamp = performance.now();

      this[slot].x = event.rotationRate.alpha;
      this[slot].y = event.rotationRate.beta;
      this[slot].z = event.rotationRate.gamma;

      this[slot].hasReading = true;
      this.dispatchEvent(new Event("reading"));
    }

    defineReadonlyProperties(this, slot, {
      x: null,
      y: null,
      z: null
    });

    this[slot].deactivateCallback = () => {
      this[slot].x = null;
      this[slot].y = null;
      this[slot].z = null;
    }
  }
}

// @ts-ignore
const Accelerometer = window.Accelerometer ||
class Accelerometer extends DeviceOrientationMixin(Sensor, "devicemotion") {
  constructor(options) {
    super(options);
    this[slot].handleEvent = event => {
      // If there is no sensor we will get values equal to null.
      if (event.accelerationIncludingGravity.x === null) {
        this[slot].notifyError("Could not connect to a sensor", "NotReadableError");
        return;
      }

      if (!this[slot].activated) {
        this[slot].notifyActivatedState();
      }

      this[slot].timestamp = performance.now();

      this[slot].x = event.accelerationIncludingGravity.x;
      this[slot].y = event.accelerationIncludingGravity.y;
      this[slot].z = event.accelerationIncludingGravity.z;

      this[slot].hasReading = true;
      this.dispatchEvent(new Event("reading"));
    }

    defineReadonlyProperties(this, slot, {
      x: null,
      y: null,
      z: null
    });

    this[slot].deactivateCallback = () => {
      this[slot].x = null;
      this[slot].y = null;
      this[slot].z = null;
    }
  }
}

// @ts-ignore
const LinearAccelerationSensor = window.LinearAccelerationSensor ||
class LinearAccelerationSensor extends DeviceOrientationMixin(Sensor, "devicemotion") {
  constructor(options) {
    super(options);
    this[slot].handleEvent = event => {
      // If there is no sensor we will get values equal to null.
      if (event.acceleration.x === null) {
        this[slot].notifyError("Could not connect to a sensor", "NotReadableError");
        return;
      }

      if (!this[slot].activated) {
        this[slot].notifyActivatedState();
      }

      this[slot].timestamp = performance.now();

      this[slot].x = event.acceleration.x;
      this[slot].y = event.acceleration.y;
      this[slot].z = event.acceleration.z;

      this[slot].hasReading = true;
      this.dispatchEvent(new Event("reading"));
    }

    defineReadonlyProperties(this, slot, {
      x: null,
      y: null,
      z: null
    });

    this[slot].deactivateCallback = () => {
      this[slot].x = null;
      this[slot].y = null;
      this[slot].z = null;
    }
  }
}

// @ts-ignore
const GravitySensor = window.GravitySensor ||
 class GravitySensor extends DeviceOrientationMixin(Sensor, "devicemotion") {
  constructor(options) {
    super(options);
    this[slot].handleEvent = event => {
      // If there is no sensor we will get values equal to null.
      if (event.acceleration.x === null || event.accelerationIncludingGravity.x === null) {
        this[slot].notifyError("Could not connect to a sensor", "NotReadableError");
        return;
      }

      if (!this[slot].activated) {
        this[slot].notifyActivatedState();
      }

      this[slot].timestamp = performance.now();

      this[slot].x = event.accelerationIncludingGravity.x - event.acceleration.x;
      this[slot].y = event.accelerationIncludingGravity.y - event.acceleration.y;
      this[slot].z = event.accelerationIncludingGravity.z - event.acceleration.z;

      this[slot].hasReading = true;
      this.dispatchEvent(new Event("reading"));
    }

    defineReadonlyProperties(this, slot, {
      x: null,
      y: null,
      z: null
    });

    this[slot].deactivateCallback = () => {
      this[slot].x = null;
      this[slot].y = null;
      this[slot].z = null;
    }
  }
}

/***/ }),

/***/ 28660:
/*!***********************************************************!*\
  !*** ./runestone/cellbotics/js/sensor_polyfill/sensor.js ***!
  \***********************************************************/
/***/ (() => {

"use strict";
// ********************************
// |docname| - Base Sensor polyfill
// ********************************
// The `geolocation-sensor.js` and `motion-sensors.js` files depend on this.



// @ts-check
const __sensor__ = Symbol("__sensor__");

const slot = __sensor__;

function defineProperties(target, descriptions) {
  for (const property in descriptions) {
    Object.defineProperty(target, property, {
      configurable: true,
      value: descriptions[property]
    });
  }
}

const EventTargetMixin = (superclass, ...eventNames) => class extends superclass {
  constructor(...args) {
    // @ts-ignore
    super(args);
    const eventTarget = document.createDocumentFragment();

    this.addEventListener = (type, ...args) => {
      return eventTarget.addEventListener(type, ...args);
    }

    this.removeEventListener = (...args) => {
      // @ts-ignore
      return eventTarget.removeEventListener(...args);
    }

    this.dispatchEvent = (event) => {
      defineProperties(event, { currentTarget: this });
      if (!event.target) {
        defineProperties(event, { target: this });
      }

      const methodName = `on${event.type}`;
      if (typeof this[methodName] == "function") {
          this[methodName](event);
      }

      const retValue = eventTarget.dispatchEvent(event);

      if (retValue && this.parentNode) {
        this.parentNode.dispatchEvent(event);
      }

      defineProperties(event, { currentTarget: null, target: null });

      return retValue;
    }
  }
};

class EventTarget extends EventTargetMixin(Object) {};

function defineReadonlyProperties(target, slot, descriptions) {
  const propertyBag = target[slot];
  for (const property in descriptions) {
    propertyBag[property] = descriptions[property];
    Object.defineProperty(target, property, {
      get: () => propertyBag[property]
    });
  }
}

class SensorErrorEvent extends Event {
  constructor(type, errorEventInitDict) {
    super(type, errorEventInitDict);

    if (!errorEventInitDict || !(errorEventInitDict.error instanceof DOMException)) {
      throw TypeError(
        "Failed to construct 'SensorErrorEvent':" +
        "2nd argument much contain 'error' property"
      );
    }

    Object.defineProperty(this, "error", {
      configurable: false,
      writable: false,
      value: errorEventInitDict.error
    });
  }
};

function defineOnEventListener(target, name) {
  Object.defineProperty(target, `on${name}`, {
    enumerable: true,
    configurable: false,
    writable: true,
    value: null
  });
}

const SensorState = {
  IDLE: 1,
  ACTIVATING: 2,
  ACTIVE: 3,
}

class Sensor extends EventTarget {
  constructor(options) {
    super();
    this[slot] = new WeakMap;

    defineOnEventListener(this, "reading");
    defineOnEventListener(this, "activate");
    defineOnEventListener(this, "error");

    defineReadonlyProperties(this, slot, {
      activated: false,
      hasReading: false,
      timestamp: null
    })

    this[slot].state = SensorState.IDLE;

    this[slot].notifyError = (message, name) => {
      let error = new SensorErrorEvent("error", {
        error: new DOMException(message, name)
      });
      this.dispatchEvent(error);
      this.stop();
    }

    this[slot].notifyActivatedState = () => {
      let activate = new Event("activate");
      this[slot].activated = true;
      this.dispatchEvent(activate);
      this[slot].state = SensorState.ACTIVE;
    }

    this[slot].activateCallback = () => {};
    this[slot].deactivateCallback = () => {};

    this[slot].frequency = null;

    if (window && window.parent != window.top) {
      throw new DOMException("Only instantiable in a top-level browsing context", "SecurityError");
    }

    if (options && typeof(options.frequency) == "number") {
      if (options.frequency > 60) {
        this.frequency = options.frequency;
      }
    }
  }

  start() {
    if (this[slot].state === SensorState.ACTIVATING || this[slot].state === SensorState.ACTIVE) {
      return;
    }
    this[slot].state = SensorState.ACTIVATING;
    this[slot].activateCallback();
  }

  stop() {
    if (this[slot].state === SensorState.IDLE) {
      return;
    }
    this[slot].activated = false;
    this[slot].hasReading = false;
    this[slot].timestamp = null;
    this[slot].deactivateCallback();

    this[slot].state = SensorState.IDLE;
  }
}

/***/ }),

/***/ 72389:
/*!**************************************************!*\
  !*** ./runestone/cellbotics/js/simple_sensor.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimpleAmbientLightSensor": () => (/* binding */ SimpleAmbientLightSensor),
/* harmony export */   "SimpleGeolocationSensor": () => (/* binding */ SimpleGeolocationSensor),
/* harmony export */   "SimpleAccelerometer": () => (/* binding */ SimpleAccelerometer),
/* harmony export */   "SimpleGyroscope": () => (/* binding */ SimpleGyroscope),
/* harmony export */   "SimpleLinearAccelerationSensor": () => (/* binding */ SimpleLinearAccelerationSensor),
/* harmony export */   "SimpleGravitySensor": () => (/* binding */ SimpleGravitySensor),
/* harmony export */   "SimpleMagnetometer": () => (/* binding */ SimpleMagnetometer),
/* harmony export */   "SimpleAbsoluteOrientationSensor": () => (/* binding */ SimpleAbsoluteOrientationSensor),
/* harmony export */   "SimpleRelativeOrientationSensor": () => (/* binding */ SimpleRelativeOrientationSensor)
/* harmony export */ });
/* harmony import */ var _permissions_polyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./permissions_polyfill.js */ 64617);
/* harmony import */ var _permissions_polyfill_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_permissions_polyfill_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sensor_polyfill_geolocation_sensor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sensor_polyfill/geolocation-sensor.js */ 6713);
/* harmony import */ var _sensor_polyfill_motion_sensors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sensor_polyfill/motion-sensors.js */ 1981);
/* harmony import */ var _auto_bind_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auto-bind.js */ 34630);
// .. Copyright (C) 2012-2020 Bryan A. Jones.
//
//  This file is part of the CellBotics system.
//
//  The CellBotics system is free software: you can redistribute it and/or
//  modify it under the terms of the GNU General Public License as
//  published by the Free Software Foundation, either version 3 of the
//  License, or (at your option) any later version.
//
//  The CellBotics system is distributed in the hope that it will be
//  useful, but WITHOUT ANY WARRANTY; without even the implied warranty
//  of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
//  General Public License for more details.
//
//  You should have received a copy of the GNU General Public License
//  along with the CellBotics system.  If not, see
//  <http://www.gnu.org/licenses/>.
//
// **********************************
// |docname| - Interface with sensors
// **********************************
// This provides code to access `sensor APIs <https://developer.mozilla.org/en-US/docs/Web/API/Sensor_APIs>`_.







// SimpleSensor
// ============
// This class wraps a `Sensor <https://developer.mozilla.org/en-US/docs/Web/API/Sensor>`_ with simple ``start``, ``ready``, and ``stop`` functions.
class SimpleSensor {
    constructor() {
        (0,_auto_bind_js__WEBPACK_IMPORTED_MODULE_3__.auto_bind)(this);

        this.sensor = null;
    }

    // This was initially based on the MDN Sensor API docs.
    async start(
        // The class to use for the sensor to start. It must be based on the Sensor interface.
        sensor_class,
        // An array of strings, giving the name of the API to ask permissions of for this sensor. See https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query.
        sensor_permission,
        // Options to pass to this sensor's constructor.
        sensor_options
    ) {
        if (this.sensor) {
            throw "In use. Stop the sensor before starting another.";
        }
        if (typeof sensor_class !== "function") {
            throw "Not available.";
        }

        // Get permission to use these sensors, if the API is supported.
        if (navigator.permissions) {
            let result = await Promise.all(sensor_permission.map(x => navigator.permissions.query({ name: x })));
            if (!result.every(val => val.state === "granted")) {
                throw `Permission to use the ${sensor_permission} sensor was denied.`;
            }
        }

        // To access a sensor:
        //
        // #.   Create it, then start it, synchronously checking for errors in this process.
        // #.   Await for a response from the sensor: an acceptance indicating the sensor works, or a rejection indicating a failure.
        //
        // Since the event handlers to accept or reject the promise must be set up in the synchronous phase, wrap everything in a promise. All the operations above therefore start when the promise is awaited.
        this.sensor = null;
        let on_error;
        let on_reading;
        let p = new Promise((resolve, reject) => {
            try {
                this.sensor = new sensor_class(sensor_options);

                // Handle callback errors by rejecting the promise.
                let that = this;
                on_error = event => {
                    that.sensor.removeEventListener("error", on_error);
                    // Handle runtime errors.
                    if (event.error.name === 'NotAllowedError') {
                        reject("Access to this sensor is not allowed.");
                    } else if (event.error.name === 'NotReadableError' ) {
                        reject('Cannot connect to the sensor.');
                    }
                    reject(`Unknown error: ${event.error.name}`);

                }
                this.sensor.addEventListener('error', on_error);

                // Wait for the first sensor reading to accept the promise.
                on_reading = event => {

                    that.sensor.removeEventListener("reading", on_reading);
                    resolve();
                }
                this.sensor.addEventListener("reading", on_reading);

                this.sensor.start();
            } catch (error) {
                // Handle construction errors.
                if (error.name === 'SecurityError') {
                    // See the note above about feature policy.
                    reject("Sensor construction was blocked by a feature policy.");
                } else if (error.name === 'ReferenceError') {
                    reject("Sensor is not supported by the User Agent.");
                } else {
                    reject(error);
                }
            }
        });

        // Start the sensor, waiting until it produces a reading or an error.
        try {
            console.log(`Await ${new Date()}`);
            await p;
        } catch (err) {
            this.stop();
            throw err;
        } finally {
            console.log(`Done ${new Date()}`);
            this.sensor.removeEventListener("error", on_error);
            this.sensor.removeEventListener("reading", on_reading);
        }
    }

    // True if the sensor is activated and has a reading.
    get ready() {
        return this.sensor && this.sensor.activated && this.sensor.hasReading;
    }

    // To save device power, be sure to stop the sensor as soon as the readings are no longer needed.
    stop() {
        this.sensor && this.sensor.stop();
        this.sensor = null;
    }
}


// Abstract helper classes
// =======================
// Several sensors return x, y, and z values. Collect the common code here.
class SimpleXYZSensor extends SimpleSensor {
    get x() {
        return this.sensor.x;
    }

    get y() {
        return this.sensor.y;
    }

    get z() {
        return this.sensor.z;
    }
}


// Two sensors return a quaternion or rotation matrix.
class SimpleOrientationSensor extends SimpleSensor {
    get quaternion() {
        return this.sensor.quaternion;
    }

    populateMatrix(targetMatrix) {
        return this.sensor.populateMatrix(targetMatrix);
    }
}


// Concrete classes
// ================
// Note the use of ``window.SensorName`` instead of ``SensorName`` for non-polyfills. This avoids exceptions if the particular sensor isn't defined, producing an ``undefined`` instead. For polyfills, we must use ``SensorName`` instead of ``window.SensorName``.
class SimpleAmbientLightSensor extends SimpleSensor {
    async start(als_options) {
        return super.start(window.AmbientLightSensor, ["ambient-light-sensor"], als_options);
    }

    get illuminance() {
        return this.sensor.illuminance;
    }
}


// See the `W3C draft spec <https://w3c.github.io/geolocation-sensor/#geolocationsensor-interface>`_.
class SimpleGeolocationSensor extends SimpleSensor {
    async start(geo_options) {
        return super.start(GeolocationSensor, ["geolocation"], geo_options);
    }

    get latitude() {
        return this.sensor.latitude;
    }

    get longitude() {
        return this.sensor.longitude;
    }

    get altitude() {
        return this.sensor.altitude;
    }

    get accuracy() {
        return this.sensor.accuracy;
    }

    get altitudeAccuracy() {
        return this.sensor.altitudeAccuracy;
    }

    get heading() {
        return this.sensor.heading;
    }

    get speed() {
        return this.sensor.speed;
    }
}


class SimpleAccelerometer extends SimpleXYZSensor {
    async start(accelerometer_options) {
        return super.start(Accelerometer, ["accelerometer"], accelerometer_options);
    }
}


class SimpleGyroscope extends SimpleXYZSensor {
    async start(gyro_options) {
        return super.start(Gyroscope, ["gyroscope"], gyro_options);
    }
}


class SimpleLinearAccelerationSensor extends SimpleXYZSensor {
    async start(accel_options) {
        return super.start(LinearAccelerationSensor, ["accelerometer"], accel_options);
    }
}


class SimpleGravitySensor extends SimpleXYZSensor {
    async start(grav_options) {
        return super.start(GravitySensor, ["accelerometer"], grav_options);
    }
}


class SimpleMagnetometer extends SimpleXYZSensor {
    async start(mag_options) {
        return super.start(window.Magnetometer, ["magnetometer"], mag_options);
    }
}


class SimpleAbsoluteOrientationSensor extends SimpleOrientationSensor {
    async start(orient_options) {
        return super.start(AbsoluteOrientationSensor, ["accelerometer", "gyroscope", "magnetometer"], orient_options);
    }
}


class SimpleRelativeOrientationSensor extends SimpleOrientationSensor {
    async start(orient_options) {
        return super.start(RelativeOrientationSensor, ["accelerometer", "gyroscope"], orient_options);
    }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NlbGxib3RpY3MvanMvYXV0by1iaW5kLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY2VsbGJvdGljcy9qcy9wZXJtaXNzaW9uc19wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NlbGxib3RpY3MvanMvc2Vuc29yX3BvbHlmaWxsL2dlb2xvY2F0aW9uLXNlbnNvci5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NlbGxib3RpY3MvanMvc2Vuc29yX3BvbHlmaWxsL21vdGlvbi1zZW5zb3JzLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY2VsbGJvdGljcy9qcy9zZW5zb3JfcG9seWZpbGwvc2Vuc29yLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY2VsbGJvdGljcy9qcy9zaW1wbGVfc2Vuc29yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7O0FBR2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7O0FBR0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsaUNBQWlDLFdBQVc7QUFDNUM7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxnQ0FBZ0MsV0FBVztBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicnVuZXN0b25lX2NlbGxib3RpY3NfanNfc2ltcGxlX3NlbnNvcl9qcy5idW5kbGUuanM/dj0yMWMyOTJhYzMzNDJhYWQ5YTA4ZSIsInNvdXJjZXNDb250ZW50IjpbIi8vIC4uIENvcHlyaWdodCAoQykgMjAxMi0yMDIwIEJyeWFuIEEuIEpvbmVzLlxyXG4vL1xyXG4vLyAgVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIENlbGxCb3RpY3Mgc3lzdGVtLlxyXG4vL1xyXG4vLyAgVGhlIENlbGxCb3RpY3Mgc3lzdGVtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxyXG4vLyAgbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcclxuLy8gIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZVxyXG4vLyAgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cclxuLy9cclxuLy8gIFRoZSBDZWxsQm90aWNzIHN5c3RlbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmVcclxuLy8gIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHlcclxuLy8gIG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGUgR05VXHJcbi8vICBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbi8vXHJcbi8vICBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxyXG4vLyAgYWxvbmcgd2l0aCB0aGUgQ2VsbEJvdGljcyBzeXN0ZW0uICBJZiBub3QsIHNlZVxyXG4vLyAgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxyXG4vL1xyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gfGRvY25hbWV8IC0gQXV0b21hdGljYWxseSBiaW5kIG1ldGhvZHMgdG8gdGhlaXIgaW5zdGFuY2VzXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuLy8gVGhlIGZvbGxvd2luZyB0d28gZnVuY3Rpb25zIHdlcmUgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL2F1dG8tYmluZC9ibG9iL21hc3Rlci9pbmRleC5qcyBhbmQgbGlnaHRseSBtb2RpZmllZC4gVGhleSBwcm92aWRlIGFuIGVhc3kgd2F5IHRvIGJpbmQgYWxsIGNhbGxhYmxlIG1ldGhvZHMgdG8gdGhlaXIgaW5zdGFuY2UuIFNlZSBgQmluZGluZyBNZXRob2RzIHRvIENsYXNzIEluc3RhbmNlIE9iamVjdHMgPGh0dHBzOi8vcG9ueWZvby5jb20vYXJ0aWNsZXMvYmluZGluZy1tZXRob2RzLXRvLWNsYXNzLWluc3RhbmNlLW9iamVjdHM+YF8gZm9yIG1vcmUgZGlzY3Vzc2lvbiBvbiB0aGlzIGNyYXp5IEphdmFTY3JpcHQgbmVjZXNzaXR5LlxyXG4vL1xyXG4vLyBHZXRzIGFsbCBub24tYnVpbHRpbiBwcm9wZXJ0aWVzIHVwIHRoZSBwcm90b3R5cGUgY2hhaW5cclxuY29uc3QgZ2V0QWxsUHJvcGVydGllcyA9IG9iamVjdCA9PiB7XHJcblx0Y29uc3QgcHJvcGVydGllcyA9IG5ldyBTZXQoKTtcclxuXHJcblx0ZG8ge1xyXG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgUmVmbGVjdC5vd25LZXlzKG9iamVjdCkpIHtcclxuXHRcdFx0cHJvcGVydGllcy5hZGQoW29iamVjdCwga2V5XSk7XHJcblx0XHR9XHJcblx0fSB3aGlsZSAoKG9iamVjdCA9IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KSkgJiYgb2JqZWN0ICE9PSBPYmplY3QucHJvdG90eXBlKTtcclxuXHJcblx0cmV0dXJuIHByb3BlcnRpZXM7XHJcbn07XHJcblxyXG5cclxuLy8gSW52b2tlIHRoaXMgaW4gdGhlIGNvbnN0cnVjdG9yIG9mIGFuIG9iamVjdC5cclxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9fYmluZChzZWxmKSB7XHJcbiAgICBmb3IgKGNvbnN0IFtvYmplY3QsIGtleV0gb2YgZ2V0QWxsUHJvcGVydGllcyhzZWxmLmNvbnN0cnVjdG9yLnByb3RvdHlwZSkpIHtcclxuICAgICAgICBpZiAoa2V5ID09PSAnY29uc3RydWN0b3InKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwga2V5KTtcclxuICAgICAgICBpZiAoZGVzY3JpcHRvciAmJiB0eXBlb2YgZGVzY3JpcHRvci52YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBzZWxmW2tleV0gPSBzZWxmW2tleV0uYmluZChzZWxmKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gLi4gQ29weXJpZ2h0IChDKSAyMDEyLTIwMjAgQnJ5YW4gQS4gSm9uZXMuXHJcbi8vXHJcbi8vICBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgQ2VsbEJvdGljcyBzeXN0ZW0uXHJcbi8vXHJcbi8vICBUaGUgQ2VsbEJvdGljcyBzeXN0ZW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXHJcbi8vICBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xyXG4vLyAgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlXHJcbi8vICBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxyXG4vL1xyXG4vLyAgVGhlIENlbGxCb3RpY3Mgc3lzdGVtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZVxyXG4vLyAgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eVxyXG4vLyAgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlVcclxuLy8gIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuLy9cclxuLy8gIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXHJcbi8vICBhbG9uZyB3aXRoIHRoZSBDZWxsQm90aWNzIHN5c3RlbS4gIElmIG5vdCwgc2VlXHJcbi8vICA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXHJcbi8vXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vIHxkb2NuYW1lfCAtIFBvbHlmaWxsIGZvciB0aGUgUGVybWlzc2lvbnMgQVBJXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vIFRoaXMgaXMgcHJpbWFyaWx5IGZvciBpT1MgZGV2aWNlcyB0aGF0IGRvbid0IHByb3ZpZGUgUGVybWlzc2lvbnMsIGJ1dCB1c2UgYW5vdGhlciBtZXRob2QgdG8gYWxsb3cgYWNjZXNzIHRvIHZhcmlvdXMgc2Vuc29ycy5cclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gT25seSBzdXBwbHkgdGhpcyBpZiB0aGVyZSdzIG5vdCBQZXJtaXNzaW9ucyBhbmQgd2UgaGF2ZSB0bmUgaU9TIGZsYXZvciBhdmFpbGFibGUuIFNlZSBzYW1wbGUgY29kZSBpbiBodHRwczovL2Rldi50by9saS9ob3ctdG8tcmVxdWVzdHBlcm1pc3Npb24tZm9yLWRldmljZW1vdGlvbi1hbmQtZGV2aWNlb3JpZW50YXRpb24tZXZlbnRzLWluLWlvcy0xMy00NmcyIG9yIHRoZSBgVzNDIHdvcmtpbmcgZHJhZnQgPGh0dHBzOi8vd3d3LnczLm9yZy9UUi9vcmllbnRhdGlvbi1ldmVudC8jZGV2aWNlb3JpZW50YXRpb24+YF8uXHJcbmlmIChcclxuICAgICFuYXZpZ2F0b3IucGVybWlzc2lvbnMgJiZcclxuICAgICh0eXBlb2YgRGV2aWNlTW90aW9uRXZlbnQucmVxdWVzdFBlcm1pc3Npb24gPT09IFwiZnVuY3Rpb25cIikgJiZcclxuICAgICh0eXBlb2YgRGV2aWNlT3JpZW50YXRpb25FdmVudC5yZXF1ZXN0UGVybWlzc2lvbiA9PT0gXCJmdW5jdGlvblwiKVxyXG4pIHtcclxuICAgIG5hdmlnYXRvci5wZXJtaXNzaW9ucyA9IHtcclxuICAgICAgICBxdWVyeTogb3B0aW9ucyA9PiB7XHJcbiAgICAgICAgICAgIC8vIElnbm9yZSBldmVyeXRoaW5nIGJ1dCB0aGUgbmFtZSwgc2luY2Ugb3VyIHVzZSBjYXNlIGlzIG9ubHkgZm9yIFNpbXBsZVNlbnNvci5cclxuICAgICAgICAgICAgc3dpdGNoIChvcHRpb25zLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJhY2NlbGVyb21ldGVyXCI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZ3lyb3Njb3BlXCI6XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgcmVxdWVzdGVkIHBlcm1pc3Npb25zIGRvZXNuJ3QgYWxsb3cgdXMgdG8gZGV0ZXJtaW5lIHdoaWNoIG9mIHRoZSBmb2xsb3dpbmcgdHdvIHBlcm1pc3Npb25zIHdlIG5lZWQsIHNvIGFzayBmb3IgYm90aC5cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcG9seWZpbGwgZm9yIHRoZSBhY2NlbGVyb21ldGVyLCBneXJvLCBhbmQgcmVsYXRlZCBjbGFzc2VzIG5lZWRzIGp1c3QgdGhpcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRGV2aWNlTW90aW9uRXZlbnQucmVxdWVzdFBlcm1pc3Npb24oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHBvbHlmaWxsIGZvciB0aGUgb3JpZW50YXRpb24gc2Vuc29ycyBuZWVkcyBqdXN0IHRoaXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERldmljZU9yaWVudGF0aW9uRXZlbnQucmVxdWVzdFBlcm1pc3Npb24oKVxyXG4gICAgICAgICAgICAgICAgICAgIF0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIG5vdyBoYXZlIGFuIGFycmF5IG9mIHN0cmluZ3MsIHRoZSByZXN1bHQgb2YgdGhlIHJlcXVlc3RQZXJtaXNzaW9uIGNhbGxzLiBJZiBhbGwgYXJlIFwiZ3JhbnRlZFwiLCB0aGVuIHJldHVybiB7c3RhdGU6IFwiZ3JhbnRlZFwifSwgZWxzZSByZXR1cm4ge3N0YXRlOiBcImRlbmllZFwifS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFscyA9PiByZXNvbHZlKHtzdGF0ZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWxzLmV2ZXJ5KHggPT4geCA9PT0gXCJncmFudGVkXCIpID8gXCJncmFudGVkXCIgOiBcImRlbmllZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRoZXJlJ3Mgbm90aGluZyBlbHNlIHRoYXQgbmVlZHMgcGVybWlzc2lvbiB0byB3b3JrLlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe3N0YXRlOiBcImdyYW50ZWRcIn0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4iLCIvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gfGRvY25hbWV8IC0gR2VvbG9jYXRpb24gc2Vuc29yIHBvbHlmaWxsXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyBAdHMtY2hlY2tcclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgXCIuL3NlbnNvci5qc1wiO1xyXG5cclxuLy9jb25zdCBzbG90ID0gX19zZW5zb3JfXztcclxuXHJcbmNsYXNzIEdlb2xvY2F0aW9uU2Vuc29yU2luZ2xldG9uIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGlmICghdGhpcy5jb25zdHJ1Y3Rvci5pbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLmNvbnN0cnVjdG9yLmluc3RhbmNlID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNlbnNvcnMgPSBuZXcgU2V0KCk7XHJcbiAgICB0aGlzLndhdGNoSWQgPSBudWxsO1xyXG4gICAgdGhpcy5hY2N1cmFjeSA9IG51bGw7XHJcbiAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IuaW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICBhc3luYyBvYnRhaW5QZXJtaXNzaW9uKCkge1xyXG4gICAgbGV0IHN0YXRlID0gXCJwcm9tcHRcIjsgLy8gRGVmYXVsdCBmb3IgZ2VvbG9jYXRpb24uXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBpZiAobmF2aWdhdG9yLnBlcm1pc3Npb25zKSB7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgY29uc3QgcGVybWlzc2lvbiA9IGF3YWl0IG5hdmlnYXRvci5wZXJtaXNzaW9ucy5xdWVyeSh7IG5hbWU6XCJnZW9sb2NhdGlvblwifSk7XHJcbiAgICAgIHN0YXRlID0gcGVybWlzc2lvbi5zdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIGNvbnN0IHN1Y2Nlc3NGbiA9IHBvc2l0aW9uID0+IHtcclxuICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHJlc29sdmUoXCJncmFudGVkXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBlcnJvckZuID0gZXJyID0+IHtcclxuICAgICAgICBpZiAoZXJyLmNvZGUgPT09IGVyci5QRVJNSVNTSU9OX0RFTklFRCkge1xyXG4gICAgICAgICAgcmVzb2x2ZShcImRlbmllZFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzb2x2ZShzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBvcHRpb25zID0geyBtYXhpbXVtQWdlOiBJbmZpbml0eSwgdGltZW91dDogMTAgfTtcclxuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihzdWNjZXNzRm4sIGVycm9yRm4sIG9wdGlvbnMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjYWxjdWxhdGVBY2N1cmFjeSgpIHtcclxuICAgIGxldCBlbmFibGVIaWdoQWNjdXJhY3kgPSBmYWxzZTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHNlbnNvciBvZiB0aGlzLnNlbnNvcnMpIHtcclxuICAgICAgaWYgKHNlbnNvcltzbG90XS5vcHRpb25zLmFjY3VyYWN5ID09PSBcImhpZ2hcIikge1xyXG4gICAgICAgIGVuYWJsZUhpZ2hBY2N1cmFjeSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBlbmFibGVIaWdoQWNjdXJhY3k7XHJcbiAgfVxyXG5cclxuICBhc3luYyByZWdpc3RlcihzZW5zb3IpIHtcclxuICAgIGNvbnN0IHBlcm1pc3Npb24gPSBhd2FpdCB0aGlzLm9idGFpblBlcm1pc3Npb24oKTtcclxuICAgIGlmIChwZXJtaXNzaW9uICE9PSBcImdyYW50ZWRcIikge1xyXG4gICAgICBzZW5zb3Jbc2xvdF0ubm90aWZ5RXJyb3IoXCJQZXJtaXNzaW9uIGRlbmllZC5cIiwgXCJOb3dBbGxvd2VkRXJyb3JcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5sYXN0UG9zaXRpb24pIHtcclxuICAgICAgY29uc3QgYWdlID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLmxhc3RQb3NpdGlvbi50aW1lU3RhbXA7XHJcbiAgICAgIGNvbnN0IG1heEFnZSA9IHNlbnNvcltzbG90XS5vcHRpb25zLm1heEFnZTtcclxuICAgICAgaWYgKG1heEFnZSA9PSBudWxsIHx8IGFnZSA8PSBtYXhBZ2UpIHtcclxuICAgICAgICBzZW5zb3Jbc2xvdF0uaGFuZGxlRXZlbnQoYWdlLCB0aGlzLmxhc3RQb3NpdGlvbi5jb29yZHMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZW5zb3JzLmFkZChzZW5zb3IpO1xyXG5cclxuICAgIC8vIENoZWNrIHdoZXRoZXIgd2UgbmVlZCB0byByZWNvbmZpZ3VyZSBvdXIgbmF2aWdhdGlvbi5nZW9sb2NhdGlvblxyXG4gICAgLy8gd2F0Y2gsIGllLiB0ZWFyIGl0IGRvd24gYW5kIHJlY3JlYXRlLlxyXG4gICAgY29uc3QgYWNjdXJhY3kgPSB0aGlzLmNhbGN1bGF0ZUFjY3VyYWN5KCk7XHJcbiAgICBpZiAodGhpcy53YXRjaElkICYmIHRoaXMuYWNjdXJhY3kgPT09IGFjY3VyYWN5KSB7XHJcbiAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gcmVzZXQsIHJldHVybi5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLndhdGNoSWQpIHtcclxuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmNsZWFyV2F0Y2godGhpcy53YXRjaElkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVFdmVudCA9IHBvc2l0aW9uID0+IHtcclxuICAgICAgdGhpcy5sYXN0UG9zaXRpb24gPSBwb3NpdGlvbjtcclxuXHJcbiAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IHBvc2l0aW9uLnRpbWVzdGFtcCAtIHBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnQ7XHJcbiAgICAgIGNvbnN0IGNvb3JkcyA9IHBvc2l0aW9uLmNvb3JkcztcclxuXHJcbiAgICAgIGZvciAoY29uc3Qgc2Vuc29yIG9mIHRoaXMuc2Vuc29ycykge1xyXG4gICAgICAgIHNlbnNvcltzbG90XS5oYW5kbGVFdmVudCh0aW1lc3RhbXAsIGNvb3Jkcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IGVycm9yID0+IHtcclxuICAgICAgbGV0IHR5cGU7XHJcbiAgICAgIHN3aXRjaChlcnJvci5jb2RlKSB7XHJcbiAgICAgICAgY2FzZSBlcnJvci5USU1FT1VUOlxyXG4gICAgICAgICAgdHlwZSA9IFwiVGltZW91dEVycm9yXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGVycm9yLlBFUk1JU1NJT05fREVOSUVEOlxyXG4gICAgICAgICAgdHlwZSA9IFwiTm90QWxsb3dlZEVycm9yXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGVycm9yLlBPU0lUSU9OX1VOQVZBSUxBQkxFOlxyXG4gICAgICAgICAgdHlwZSA9IFwiTm90UmVhZGFibGVFcnJvclwiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHR5cGUgPSBcIlVua25vd25FcnJvclwiO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAoY29uc3Qgc2Vuc29yIG9mIHRoaXMuc2Vuc29ycykge1xyXG4gICAgICAgIHNlbnNvcltzbG90XS5oYW5kbGVFcnJvcihlcnJvci5tZXNzYWdlLCB0eXBlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGVuYWJsZUhpZ2hBY2N1cmFjeTogYWNjdXJhY3ksXHJcbiAgICAgIG1heGltdW1BZ2U6IDAsXHJcbiAgICAgIHRpbWVvdXQ6IEluZmluaXR5XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy53YXRjaElkID0gbmF2aWdhdG9yLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24oXHJcbiAgICAgIGhhbmRsZUV2ZW50LCBoYW5kbGVFcnJvciwgb3B0aW9uc1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGRlcmVnaXN0ZXIoc2Vuc29yKSB7XHJcbiAgICB0aGlzLnNlbnNvcnMuZGVsZXRlKHNlbnNvcik7XHJcbiAgICBpZiAoIXRoaXMuc2Vuc29ycy5zaXplICYmIHRoaXMud2F0Y2hJZCkge1xyXG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uY2xlYXJXYXRjaCh0aGlzLndhdGNoSWQpO1xyXG4gICAgICB0aGlzLndhdGNoSWQgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5jb25zdCBHZW9sb2NhdGlvblNlbnNvciA9IHdpbmRvdy5HZW9sb2NhdGlvblNlbnNvciB8fFxyXG5jbGFzcyBHZW9sb2NhdGlvblNlbnNvciBleHRlbmRzIFNlbnNvciB7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzW3Nsb3RdLm9wdGlvbnMgPSBvcHRpb25zO1xyXG5cclxuICAgIGNvbnN0IHByb3BzID0ge1xyXG4gICAgICBsYXRpdHVkZTogbnVsbCxcclxuICAgICAgbG9uZ2l0dWRlOiBudWxsLFxyXG4gICAgICBhbHRpdHVkZTogbnVsbCxcclxuICAgICAgYWNjdXJhY3k6IG51bGwsXHJcbiAgICAgIGFsdGl0dWRlQWNjdXJhY3k6IG51bGwsXHJcbiAgICAgIGhlYWRpbmc6IG51bGwsXHJcbiAgICAgIHNwZWVkOiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvcGVydHlCYWcgPSB0aGlzW3Nsb3RdO1xyXG4gICAgZm9yIChjb25zdCBwcm9wTmFtZSBpbiBwcm9wcykge1xyXG4gICAgICBwcm9wZXJ0eUJhZ1twcm9wTmFtZV0gPSBwcm9wc1twcm9wTmFtZV07XHJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwcm9wTmFtZSwge1xyXG4gICAgICAgIGdldDogKCkgPT4gcHJvcGVydHlCYWdbcHJvcE5hbWVdXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXNbc2xvdF0uaGFuZGxlRXZlbnQgPSAodGltZXN0YW1wLCBjb29yZHMpID0+IHtcclxuICAgICAgaWYgKCF0aGlzW3Nsb3RdLmFjdGl2YXRlZCkge1xyXG4gICAgICAgIHRoaXNbc2xvdF0ubm90aWZ5QWN0aXZhdGVkU3RhdGUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpc1tzbG90XS50aW1lc3RhbXAgPSB0aW1lc3RhbXA7XHJcblxyXG4gICAgICB0aGlzW3Nsb3RdLmFjY3VyYWN5ID0gY29vcmRzLmFjY3VyYWN5O1xyXG4gICAgICB0aGlzW3Nsb3RdLmFsdGl0dWRlID0gY29vcmRzLmFsdGl0dWRlO1xyXG4gICAgICB0aGlzW3Nsb3RdLmFsdGl0dWRlQWNjdXJhY3kgPSBjb29yZHMuYWx0aXR1ZGVBY2N1cmFjeTtcclxuICAgICAgdGhpc1tzbG90XS5oZWFkaW5nID0gY29vcmRzLmhlYWRpbmc7XHJcbiAgICAgIHRoaXNbc2xvdF0ubGF0aXR1ZGUgPSBjb29yZHMubGF0aXR1ZGU7XHJcbiAgICAgIHRoaXNbc2xvdF0ubG9uZ2l0dWRlID0gY29vcmRzLmxvbmdpdHVkZTtcclxuICAgICAgdGhpc1tzbG90XS5zcGVlZCA9IGNvb3Jkcy5zcGVlZDtcclxuXHJcbiAgICAgIHRoaXNbc2xvdF0uaGFzUmVhZGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJyZWFkaW5nXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzW3Nsb3RdLmhhbmRsZUVycm9yID0gKG1lc3NhZ2UsIHR5cGUpID0+IHtcclxuICAgICAgdGhpc1tzbG90XS5ub3RpZnlFcnJvcihtZXNzYWdlLCB0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzW3Nsb3RdLmFjdGl2YXRlQ2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgIChuZXcgR2VvbG9jYXRpb25TZW5zb3JTaW5nbGV0b24oKSkucmVnaXN0ZXIodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpc1tzbG90XS5kZWFjdGl2YXRlQ2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgIChuZXcgR2VvbG9jYXRpb25TZW5zb3JTaW5nbGV0b24oKSkuZGVyZWdpc3Rlcih0aGlzKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCIvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyB8ZG9jbmFtZXwgLSBNb3Rpb24gc2Vuc29ycyBwb2x5ZmlsbFxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyBAdHMtY2hlY2tcclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgXCIuL3NlbnNvci5qc1wiO1xyXG5cclxuLy9jb25zdCBzbG90ID0gX19zZW5zb3JfXztcclxuXHJcbmxldCBvcmllbnRhdGlvbjtcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaWYgKHNjcmVlbi5vcmllbnRhdGlvbikge1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBvcmllbnRhdGlvbiA9IHNjcmVlbi5vcmllbnRhdGlvbjtcclxufSBlbHNlIGlmIChzY3JlZW4ubXNPcmllbnRhdGlvbikge1xyXG4gIG9yaWVudGF0aW9uID0gc2NyZWVuLm1zT3JpZW50YXRpb247XHJcbn0gZWxzZSB7XHJcbiAgb3JpZW50YXRpb24gPSB7fTtcclxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob3JpZW50YXRpb24sIFwiYW5nbGVcIiwge1xyXG4gICAgZ2V0OiAoKSA9PiB7IHJldHVybiAod2luZG93Lm9yaWVudGF0aW9uIHx8IDApIH1cclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgRGV2aWNlT3JpZW50YXRpb25NaXhpbiA9IChzdXBlcmNsYXNzLCAuLi5ldmVudE5hbWVzKSA9PiBjbGFzcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xyXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHN1cGVyKGFyZ3MpO1xyXG5cclxuICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50TmFtZXMpIHtcclxuICAgICAgaWYgKGBvbiR7ZXZlbnROYW1lfWAgaW4gd2luZG93KSB7XHJcbiAgICAgICAgdGhpc1tzbG90XS5ldmVudE5hbWUgPSBldmVudE5hbWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzW3Nsb3RdLmFjdGl2YXRlQ2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKHRoaXNbc2xvdF0uZXZlbnROYW1lLCB0aGlzW3Nsb3RdLmhhbmRsZUV2ZW50LCB7IGNhcHR1cmU6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpc1tzbG90XS5kZWFjdGl2YXRlQ2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXNbc2xvdF0uZXZlbnROYW1lLCB0aGlzW3Nsb3RdLmhhbmRsZUV2ZW50LCB7IGNhcHR1cmU6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gdG9RdWF0ZXJuaW9uRnJvbUV1bGVyKGFscGhhLCBiZXRhLCBnYW1tYSkge1xyXG4gIGNvbnN0IGRlZ1RvUmFkID0gTWF0aC5QSSAvIDE4MFxyXG5cclxuICBjb25zdCB4ID0gKGJldGEgfHwgMCkgKiBkZWdUb1JhZDtcclxuICBjb25zdCB5ID0gKGdhbW1hIHx8IDApICogZGVnVG9SYWQ7XHJcbiAgY29uc3QgeiA9IChhbHBoYSB8fCAwKSAqIGRlZ1RvUmFkO1xyXG5cclxuICBjb25zdCBjWiA9IE1hdGguY29zKHogKiAwLjUpO1xyXG4gIGNvbnN0IHNaID0gTWF0aC5zaW4oeiAqIDAuNSk7XHJcbiAgY29uc3QgY1kgPSBNYXRoLmNvcyh5ICogMC41KTtcclxuICBjb25zdCBzWSA9IE1hdGguc2luKHkgKiAwLjUpO1xyXG4gIGNvbnN0IGNYID0gTWF0aC5jb3MoeCAqIDAuNSk7XHJcbiAgY29uc3Qgc1ggPSBNYXRoLnNpbih4ICogMC41KTtcclxuXHJcbiAgY29uc3QgcXggPSBzWCAqIGNZICogY1ogLSBjWCAqIHNZICogc1o7XHJcbiAgY29uc3QgcXkgPSBjWCAqIHNZICogY1ogKyBzWCAqIGNZICogc1o7XHJcbiAgY29uc3QgcXogPSBjWCAqIGNZICogc1ogKyBzWCAqIHNZICogY1o7XHJcbiAgY29uc3QgcXcgPSBjWCAqIGNZICogY1ogLSBzWCAqIHNZICogc1o7XHJcblxyXG4gIHJldHVybiBbcXgsIHF5LCBxeiwgcXddO1xyXG59XHJcblxyXG5mdW5jdGlvbiByb3RhdGVRdWF0ZXJuaW9uQnlBeGlzQW5nbGUocXVhdCwgYXhpcywgYW5nbGUpIHtcclxuICBjb25zdCBzSGFsZkFuZ2xlID0gTWF0aC5zaW4oYW5nbGUgLyAyKTtcclxuICBjb25zdCBjSGFsZkFuZ2xlID0gTWF0aC5jb3MoYW5nbGUgLyAyKTtcclxuXHJcbiAgY29uc3QgdHJhbnNmb3JtUXVhdCA9IFtcclxuICAgIGF4aXNbMF0gKiBzSGFsZkFuZ2xlLFxyXG4gICAgYXhpc1sxXSAqIHNIYWxmQW5nbGUsXHJcbiAgICBheGlzWzJdICogc0hhbGZBbmdsZSxcclxuICAgIGNIYWxmQW5nbGVcclxuICBdO1xyXG5cclxuICBmdW5jdGlvbiBtdWx0aXBseVF1YXRlcm5pb24oYSwgYikge1xyXG4gICAgY29uc3QgcXggPSBhWzBdICogYlszXSArIGFbM10gKiBiWzBdICsgYVsxXSAqIGJbMl0gLSBhWzJdICogYlsxXTtcclxuICAgIGNvbnN0IHF5ID0gYVsxXSAqIGJbM10gKyBhWzNdICogYlsxXSArIGFbMl0gKiBiWzBdIC0gYVswXSAqIGJbMl07XHJcbiAgICBjb25zdCBxeiA9IGFbMl0gKiBiWzNdICsgYVszXSAqIGJbMl0gKyBhWzBdICogYlsxXSAtIGFbMV0gKiBiWzBdO1xyXG4gICAgY29uc3QgcXcgPSBhWzNdICogYlszXSAtIGFbMF0gKiBiWzBdIC0gYVsxXSAqIGJbMV0gLSBhWzJdICogYlsyXTtcclxuXHJcbiAgICByZXR1cm4gW3F4LCBxeSwgcXosIHF3XTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVF1YXRlcm5pb24ocXVhdCkge1xyXG4gICAgY29uc3QgbGVuZ3RoID0gTWF0aC5zcXJ0KHF1YXRbMF0gKiogMiArIHF1YXRbMV0gKiogMiArIHF1YXRbMl0gKiogMiArIHF1YXRbM10gKiogMik7XHJcbiAgICBpZiAobGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBbMCwgMCwgMCwgMV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHF1YXQubWFwKHYgPT4gdiAvIGxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbm9ybWFsaXplUXVhdGVybmlvbihtdWx0aXBseVF1YXRlcm5pb24ocXVhdCwgdHJhbnNmb3JtUXVhdCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b01hdDRGcm9tUXVhdChtYXQsIHEpIHtcclxuICBjb25zdCB0eXBlZCA9IG1hdCBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSB8fCBtYXQgaW5zdGFuY2VvZiBGbG9hdDY0QXJyYXk7XHJcblxyXG4gIGlmICh0eXBlZCAmJiBtYXQubGVuZ3RoID49IDE2KSB7XHJcbiAgICBtYXRbMF0gPSAxIC0gMiAqIChxWzFdICoqIDIgKyBxWzJdICoqIDIpO1xyXG4gICAgbWF0WzFdID0gMiAqIChxWzBdICogcVsxXSAtIHFbMl0gKiBxWzNdKTtcclxuICAgIG1hdFsyXSA9IDIgKiAocVswXSAqIHFbMl0gKyBxWzFdICogcVszXSk7XHJcbiAgICBtYXRbM10gPSAwO1xyXG5cclxuICAgIG1hdFs0XSA9IDIgKiAocVswXSAqIHFbMV0gKyBxWzJdICogcVszXSk7XHJcbiAgICBtYXRbNV0gPSAxIC0gMiAqIChxWzBdICoqIDIgKyBxWzJdICoqIDIpO1xyXG4gICAgbWF0WzZdID0gMiAqIChxWzFdICogcVsyXSAtIHFbMF0gKiBxWzNdKTtcclxuICAgIG1hdFs3XSA9IDA7XHJcblxyXG4gICAgbWF0WzhdID0gMiAqIChxWzBdICogcVsyXSAtIHFbMV0gKiBxWzNdKTtcclxuICAgIG1hdFs5XSA9IDIgKiAocVsxXSAqIHFbMl0gKyBxWzBdICogcVszXSk7XHJcbiAgICBtYXRbMTBdID0gMSAtIDIgKiAocVswXSAqKiAyICsgcVsxXSAqKiAyKTtcclxuICAgIG1hdFsxMV0gPSAwO1xyXG5cclxuICAgIG1hdFsxMl0gPSAwO1xyXG4gICAgbWF0WzEzXSA9IDA7XHJcbiAgICBtYXRbMTRdID0gMDtcclxuICAgIG1hdFsxNV0gPSAxO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1hdDtcclxufVxyXG5cclxuZnVuY3Rpb24gd29ybGRUb1NjcmVlbihxdWF0ZXJuaW9uKSB7XHJcbiAgcmV0dXJuICFxdWF0ZXJuaW9uID8gbnVsbCA6XHJcbiAgICByb3RhdGVRdWF0ZXJuaW9uQnlBeGlzQW5nbGUoXHJcbiAgICAgIHF1YXRlcm5pb24sXHJcbiAgICAgIFswLCAwLCAxXSxcclxuICAgICAgLSBvcmllbnRhdGlvbi5hbmdsZSAqIE1hdGguUEkgLyAxODBcclxuICAgICk7XHJcbn1cclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuY29uc3QgUmVsYXRpdmVPcmllbnRhdGlvblNlbnNvciA9IHdpbmRvdy5SZWxhdGl2ZU9yaWVudGF0aW9uU2Vuc29yIHx8XHJcbmNsYXNzIFJlbGF0aXZlT3JpZW50YXRpb25TZW5zb3IgZXh0ZW5kcyBEZXZpY2VPcmllbnRhdGlvbk1peGluKFNlbnNvciwgXCJkZXZpY2VvcmllbnRhdGlvblwiKSB7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICBzd2l0Y2ggKG9wdGlvbnMuY29vcmRpbmF0ZVN5c3RlbSB8fCAnd29ybGQnKSB7XHJcbiAgICAgIGNhc2UgJ3NjcmVlbic6XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwicXVhdGVybmlvblwiLCB7XHJcbiAgICAgICAgICBnZXQ6ICgpID0+IHdvcmxkVG9TY3JlZW4odGhpc1tzbG90XS5xdWF0ZXJuaW9uKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd3b3JsZCc6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwicXVhdGVybmlvblwiLCB7XHJcbiAgICAgICAgICBnZXQ6ICgpID0+IHRoaXNbc2xvdF0ucXVhdGVybmlvblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXNbc2xvdF0uaGFuZGxlRXZlbnQgPSBldmVudCA9PiB7XHJcbiAgICAgIC8vIElmIHRoZXJlIGlzIG5vIHNlbnNvciB3ZSB3aWxsIGdldCB2YWx1ZXMgZXF1YWwgdG8gbnVsbC5cclxuICAgICAgaWYgKGV2ZW50LmFic29sdXRlIHx8IGV2ZW50LmFscGhhID09PSBudWxsKSB7XHJcbiAgICAgICAgLy8gU3BlYzogVGhlIGltcGxlbWVudGF0aW9uIGNhbiBzdGlsbCBkZWNpZGUgdG8gcHJvdmlkZVxyXG4gICAgICAgIC8vIGFic29sdXRlIG9yaWVudGF0aW9uIGlmIHJlbGF0aXZlIGlzIG5vdCBhdmFpbGFibGUgb3JcclxuICAgICAgICAvLyB0aGUgcmVzdWx0aW5nIGRhdGEgaXMgbW9yZSBhY2N1cmF0ZS4gSW4gZWl0aGVyIGNhc2UsXHJcbiAgICAgICAgLy8gdGhlIGFic29sdXRlIHByb3BlcnR5IG11c3QgYmUgc2V0IGFjY29yZGluZ2x5IHRvIHJlZmxlY3RcclxuICAgICAgICAvLyB0aGUgY2hvaWNlLlxyXG4gICAgICAgIHRoaXNbc2xvdF0ubm90aWZ5RXJyb3IoXCJDb3VsZCBub3QgY29ubmVjdCB0byBhIHNlbnNvclwiLCBcIk5vdFJlYWRhYmxlRXJyb3JcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXRoaXNbc2xvdF0uYWN0aXZhdGVkKSB7XHJcbiAgICAgICAgdGhpc1tzbG90XS5ub3RpZnlBY3RpdmF0ZWRTdGF0ZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzW3Nsb3RdLnRpbWVzdGFtcCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgICAgdGhpc1tzbG90XS5xdWF0ZXJuaW9uID0gdG9RdWF0ZXJuaW9uRnJvbUV1bGVyKFxyXG4gICAgICAgIGV2ZW50LmFscGhhLFxyXG4gICAgICAgIGV2ZW50LmJldGEsXHJcbiAgICAgICAgZXZlbnQuZ2FtbWFcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXNbc2xvdF0uaGFzUmVhZGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJyZWFkaW5nXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzW3Nsb3RdLmRlYWN0aXZhdGVDYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgdGhpc1tzbG90XS5xdWF0ZXJuaW9uID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBvcHVsYXRlTWF0cml4KG1hdCkge1xyXG4gICAgdG9NYXQ0RnJvbVF1YXQobWF0LCB0aGlzLnF1YXRlcm5pb24pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5jb25zdCBBYnNvbHV0ZU9yaWVudGF0aW9uU2Vuc29yID0gd2luZG93LkFic29sdXRlT3JpZW50YXRpb25TZW5zb3IgfHxcclxuY2xhc3MgQWJzb2x1dGVPcmllbnRhdGlvblNlbnNvciBleHRlbmRzIERldmljZU9yaWVudGF0aW9uTWl4aW4oXHJcbiAgU2Vuc29yLCBcImRldmljZW9yaWVudGF0aW9uYWJzb2x1dGVcIiwgXCJkZXZpY2VvcmllbnRhdGlvblwiKSB7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICBzd2l0Y2ggKG9wdGlvbnMuY29vcmRpbmF0ZVN5c3RlbSB8fCAnd29ybGQnKSB7XHJcbiAgICAgIGNhc2UgJ3NjcmVlbic6XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwicXVhdGVybmlvblwiLCB7XHJcbiAgICAgICAgICBnZXQ6ICgpID0+IHdvcmxkVG9TY3JlZW4odGhpc1tzbG90XS5xdWF0ZXJuaW9uKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd3b3JsZCc6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwicXVhdGVybmlvblwiLCB7XHJcbiAgICAgICAgICBnZXQ6ICgpID0+IHRoaXNbc2xvdF0ucXVhdGVybmlvblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXNbc2xvdF0uaGFuZGxlRXZlbnQgPSBldmVudCA9PiB7XHJcbiAgICAgIC8vIElmIGFic29sdXRlIGlzIHNldCwgb3Igd2Via2l0Q29tcGFzc0hlYWRpbmcgZXhpc3RzLFxyXG4gICAgICAvLyBhYnNvbHV0ZSB2YWx1ZXMgc2hvdWxkIGJlIGF2YWlsYWJsZS5cclxuICAgICAgY29uc3QgaXNBYnNvbHV0ZSA9IGV2ZW50LmFic29sdXRlID09PSB0cnVlIHx8IFwid2Via2l0Q29tcGFzc0hlYWRpbmdcIiBpbiBldmVudDtcclxuICAgICAgY29uc3QgaGFzVmFsdWUgPSBldmVudC5hbHBoYSAhPT0gbnVsbCB8fCBldmVudC53ZWJraXRDb21wYXNzSGVhZGluZyAhPT0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgaWYgKCFpc0Fic29sdXRlIHx8ICFoYXNWYWx1ZSkge1xyXG4gICAgICAgIC8vIFNwZWM6IElmIGFuIGltcGxlbWVudGF0aW9uIGNhbiBuZXZlciBwcm92aWRlIGFic29sdXRlXHJcbiAgICAgICAgLy8gb3JpZW50YXRpb24gaW5mb3JtYXRpb24sIHRoZSBldmVudCBzaG91bGQgYmUgZmlyZWQgd2l0aFxyXG4gICAgICAgIC8vIHRoZSBhbHBoYSwgYmV0YSBhbmQgZ2FtbWEgYXR0cmlidXRlcyBzZXQgdG8gbnVsbC5cclxuICAgICAgICB0aGlzW3Nsb3RdLm5vdGlmeUVycm9yKFwiQ291bGQgbm90IGNvbm5lY3QgdG8gYSBzZW5zb3JcIiwgXCJOb3RSZWFkYWJsZUVycm9yXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF0aGlzW3Nsb3RdLmFjdGl2YXRlZCkge1xyXG4gICAgICAgIHRoaXNbc2xvdF0ubm90aWZ5QWN0aXZhdGVkU3RhdGUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpc1tzbG90XS5oYXNSZWFkaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpc1tzbG90XS50aW1lc3RhbXAgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHJcbiAgICAgIGNvbnN0IGhlYWRpbmcgPSBldmVudC53ZWJraXRDb21wYXNzSGVhZGluZyAhPSBudWxsID8gMzYwIC0gZXZlbnQud2Via2l0Q29tcGFzc0hlYWRpbmcgOiBldmVudC5hbHBoYTtcclxuXHJcbiAgICAgIHRoaXNbc2xvdF0ucXVhdGVybmlvbiA9IHRvUXVhdGVybmlvbkZyb21FdWxlcihcclxuICAgICAgICBoZWFkaW5nLFxyXG4gICAgICAgIGV2ZW50LmJldGEsXHJcbiAgICAgICAgZXZlbnQuZ2FtbWFcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJyZWFkaW5nXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzW3Nsb3RdLmRlYWN0aXZhdGVDYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgdGhpc1tzbG90XS5xdWF0ZXJuaW9uID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBvcHVsYXRlTWF0cml4KG1hdCkge1xyXG4gICAgdG9NYXQ0RnJvbVF1YXQobWF0LCB0aGlzLnF1YXRlcm5pb24pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5jb25zdCBHeXJvc2NvcGUgPSB3aW5kb3cuR3lyb3Njb3BlIHx8XHJcbmNsYXNzIEd5cm9zY29wZSBleHRlbmRzIERldmljZU9yaWVudGF0aW9uTWl4aW4oU2Vuc29yLCBcImRldmljZW1vdGlvblwiKSB7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICB0aGlzW3Nsb3RdLmhhbmRsZUV2ZW50ID0gZXZlbnQgPT4ge1xyXG4gICAgICAvLyBJZiB0aGVyZSBpcyBubyBzZW5zb3Igd2Ugd2lsbCBnZXQgdmFsdWVzIGVxdWFsIHRvIG51bGwuXHJcbiAgICAgIGlmIChldmVudC5yb3RhdGlvblJhdGUuYWxwaGEgPT09IG51bGwpIHtcclxuICAgICAgICB0aGlzW3Nsb3RdLm5vdGlmeUVycm9yKFwiQ291bGQgbm90IGNvbm5lY3QgdG8gYSBzZW5zb3JcIiwgXCJOb3RSZWFkYWJsZUVycm9yXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF0aGlzW3Nsb3RdLmFjdGl2YXRlZCkge1xyXG4gICAgICAgIHRoaXNbc2xvdF0ubm90aWZ5QWN0aXZhdGVkU3RhdGUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpc1tzbG90XS50aW1lc3RhbXAgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHJcbiAgICAgIHRoaXNbc2xvdF0ueCA9IGV2ZW50LnJvdGF0aW9uUmF0ZS5hbHBoYTtcclxuICAgICAgdGhpc1tzbG90XS55ID0gZXZlbnQucm90YXRpb25SYXRlLmJldGE7XHJcbiAgICAgIHRoaXNbc2xvdF0ueiA9IGV2ZW50LnJvdGF0aW9uUmF0ZS5nYW1tYTtcclxuXHJcbiAgICAgIHRoaXNbc2xvdF0uaGFzUmVhZGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJyZWFkaW5nXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWZpbmVSZWFkb25seVByb3BlcnRpZXModGhpcywgc2xvdCwge1xyXG4gICAgICB4OiBudWxsLFxyXG4gICAgICB5OiBudWxsLFxyXG4gICAgICB6OiBudWxsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzW3Nsb3RdLmRlYWN0aXZhdGVDYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgdGhpc1tzbG90XS54ID0gbnVsbDtcclxuICAgICAgdGhpc1tzbG90XS55ID0gbnVsbDtcclxuICAgICAgdGhpc1tzbG90XS56ID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuY29uc3QgQWNjZWxlcm9tZXRlciA9IHdpbmRvdy5BY2NlbGVyb21ldGVyIHx8XHJcbmNsYXNzIEFjY2VsZXJvbWV0ZXIgZXh0ZW5kcyBEZXZpY2VPcmllbnRhdGlvbk1peGluKFNlbnNvciwgXCJkZXZpY2Vtb3Rpb25cIikge1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG4gICAgdGhpc1tzbG90XS5oYW5kbGVFdmVudCA9IGV2ZW50ID0+IHtcclxuICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gc2Vuc29yIHdlIHdpbGwgZ2V0IHZhbHVlcyBlcXVhbCB0byBudWxsLlxyXG4gICAgICBpZiAoZXZlbnQuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eS54ID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpc1tzbG90XS5ub3RpZnlFcnJvcihcIkNvdWxkIG5vdCBjb25uZWN0IHRvIGEgc2Vuc29yXCIsIFwiTm90UmVhZGFibGVFcnJvclwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghdGhpc1tzbG90XS5hY3RpdmF0ZWQpIHtcclxuICAgICAgICB0aGlzW3Nsb3RdLm5vdGlmeUFjdGl2YXRlZFN0YXRlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXNbc2xvdF0udGltZXN0YW1wID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICAgICB0aGlzW3Nsb3RdLnggPSBldmVudC5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5Lng7XHJcbiAgICAgIHRoaXNbc2xvdF0ueSA9IGV2ZW50LmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkueTtcclxuICAgICAgdGhpc1tzbG90XS56ID0gZXZlbnQuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eS56O1xyXG5cclxuICAgICAgdGhpc1tzbG90XS5oYXNSZWFkaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInJlYWRpbmdcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmluZVJlYWRvbmx5UHJvcGVydGllcyh0aGlzLCBzbG90LCB7XHJcbiAgICAgIHg6IG51bGwsXHJcbiAgICAgIHk6IG51bGwsXHJcbiAgICAgIHo6IG51bGxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXNbc2xvdF0uZGVhY3RpdmF0ZUNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICB0aGlzW3Nsb3RdLnggPSBudWxsO1xyXG4gICAgICB0aGlzW3Nsb3RdLnkgPSBudWxsO1xyXG4gICAgICB0aGlzW3Nsb3RdLnogPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5jb25zdCBMaW5lYXJBY2NlbGVyYXRpb25TZW5zb3IgPSB3aW5kb3cuTGluZWFyQWNjZWxlcmF0aW9uU2Vuc29yIHx8XHJcbmNsYXNzIExpbmVhckFjY2VsZXJhdGlvblNlbnNvciBleHRlbmRzIERldmljZU9yaWVudGF0aW9uTWl4aW4oU2Vuc29yLCBcImRldmljZW1vdGlvblwiKSB7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICB0aGlzW3Nsb3RdLmhhbmRsZUV2ZW50ID0gZXZlbnQgPT4ge1xyXG4gICAgICAvLyBJZiB0aGVyZSBpcyBubyBzZW5zb3Igd2Ugd2lsbCBnZXQgdmFsdWVzIGVxdWFsIHRvIG51bGwuXHJcbiAgICAgIGlmIChldmVudC5hY2NlbGVyYXRpb24ueCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXNbc2xvdF0ubm90aWZ5RXJyb3IoXCJDb3VsZCBub3QgY29ubmVjdCB0byBhIHNlbnNvclwiLCBcIk5vdFJlYWRhYmxlRXJyb3JcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXRoaXNbc2xvdF0uYWN0aXZhdGVkKSB7XHJcbiAgICAgICAgdGhpc1tzbG90XS5ub3RpZnlBY3RpdmF0ZWRTdGF0ZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzW3Nsb3RdLnRpbWVzdGFtcCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgICAgdGhpc1tzbG90XS54ID0gZXZlbnQuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgIHRoaXNbc2xvdF0ueSA9IGV2ZW50LmFjY2VsZXJhdGlvbi55O1xyXG4gICAgICB0aGlzW3Nsb3RdLnogPSBldmVudC5hY2NlbGVyYXRpb24uejtcclxuXHJcbiAgICAgIHRoaXNbc2xvdF0uaGFzUmVhZGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJyZWFkaW5nXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWZpbmVSZWFkb25seVByb3BlcnRpZXModGhpcywgc2xvdCwge1xyXG4gICAgICB4OiBudWxsLFxyXG4gICAgICB5OiBudWxsLFxyXG4gICAgICB6OiBudWxsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzW3Nsb3RdLmRlYWN0aXZhdGVDYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgdGhpc1tzbG90XS54ID0gbnVsbDtcclxuICAgICAgdGhpc1tzbG90XS55ID0gbnVsbDtcclxuICAgICAgdGhpc1tzbG90XS56ID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuY29uc3QgR3Jhdml0eVNlbnNvciA9IHdpbmRvdy5HcmF2aXR5U2Vuc29yIHx8XHJcbiBjbGFzcyBHcmF2aXR5U2Vuc29yIGV4dGVuZHMgRGV2aWNlT3JpZW50YXRpb25NaXhpbihTZW5zb3IsIFwiZGV2aWNlbW90aW9uXCIpIHtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuICAgIHRoaXNbc2xvdF0uaGFuZGxlRXZlbnQgPSBldmVudCA9PiB7XHJcbiAgICAgIC8vIElmIHRoZXJlIGlzIG5vIHNlbnNvciB3ZSB3aWxsIGdldCB2YWx1ZXMgZXF1YWwgdG8gbnVsbC5cclxuICAgICAgaWYgKGV2ZW50LmFjY2VsZXJhdGlvbi54ID09PSBudWxsIHx8IGV2ZW50LmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkueCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXNbc2xvdF0ubm90aWZ5RXJyb3IoXCJDb3VsZCBub3QgY29ubmVjdCB0byBhIHNlbnNvclwiLCBcIk5vdFJlYWRhYmxlRXJyb3JcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXRoaXNbc2xvdF0uYWN0aXZhdGVkKSB7XHJcbiAgICAgICAgdGhpc1tzbG90XS5ub3RpZnlBY3RpdmF0ZWRTdGF0ZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzW3Nsb3RdLnRpbWVzdGFtcCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgICAgdGhpc1tzbG90XS54ID0gZXZlbnQuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eS54IC0gZXZlbnQuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgIHRoaXNbc2xvdF0ueSA9IGV2ZW50LmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkueSAtIGV2ZW50LmFjY2VsZXJhdGlvbi55O1xyXG4gICAgICB0aGlzW3Nsb3RdLnogPSBldmVudC5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LnogLSBldmVudC5hY2NlbGVyYXRpb24uejtcclxuXHJcbiAgICAgIHRoaXNbc2xvdF0uaGFzUmVhZGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJyZWFkaW5nXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWZpbmVSZWFkb25seVByb3BlcnRpZXModGhpcywgc2xvdCwge1xyXG4gICAgICB4OiBudWxsLFxyXG4gICAgICB5OiBudWxsLFxyXG4gICAgICB6OiBudWxsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzW3Nsb3RdLmRlYWN0aXZhdGVDYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgdGhpc1tzbG90XS54ID0gbnVsbDtcclxuICAgICAgdGhpc1tzbG90XS55ID0gbnVsbDtcclxuICAgICAgdGhpc1tzbG90XS56ID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn0iLCIvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyB8ZG9jbmFtZXwgLSBCYXNlIFNlbnNvciBwb2x5ZmlsbFxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyBUaGUgYGdlb2xvY2F0aW9uLXNlbnNvci5qc2AgYW5kIGBtb3Rpb24tc2Vuc29ycy5qc2AgZmlsZXMgZGVwZW5kIG9uIHRoaXMuXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIEB0cy1jaGVja1xyXG5jb25zdCBfX3NlbnNvcl9fID0gU3ltYm9sKFwiX19zZW5zb3JfX1wiKTtcclxuXHJcbmNvbnN0IHNsb3QgPSBfX3NlbnNvcl9fO1xyXG5cclxuZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIGRlc2NyaXB0aW9ucykge1xyXG4gIGZvciAoY29uc3QgcHJvcGVydHkgaW4gZGVzY3JpcHRpb25zKSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwge1xyXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgIHZhbHVlOiBkZXNjcmlwdGlvbnNbcHJvcGVydHldXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IEV2ZW50VGFyZ2V0TWl4aW4gPSAoc3VwZXJjbGFzcywgLi4uZXZlbnROYW1lcykgPT4gY2xhc3MgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcclxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBzdXBlcihhcmdzKTtcclxuICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5cclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciA9ICh0eXBlLCAuLi5hcmdzKSA9PiB7XHJcbiAgICAgIHJldHVybiBldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIC4uLmFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgcmV0dXJuIGV2ZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoLi4uYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGRlZmluZVByb3BlcnRpZXMoZXZlbnQsIHsgY3VycmVudFRhcmdldDogdGhpcyB9KTtcclxuICAgICAgaWYgKCFldmVudC50YXJnZXQpIHtcclxuICAgICAgICBkZWZpbmVQcm9wZXJ0aWVzKGV2ZW50LCB7IHRhcmdldDogdGhpcyB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbWV0aG9kTmFtZSA9IGBvbiR7ZXZlbnQudHlwZX1gO1xyXG4gICAgICBpZiAodHlwZW9mIHRoaXNbbWV0aG9kTmFtZV0gPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICB0aGlzW21ldGhvZE5hbWVdKGV2ZW50KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcmV0VmFsdWUgPSBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuXHJcbiAgICAgIGlmIChyZXRWYWx1ZSAmJiB0aGlzLnBhcmVudE5vZGUpIHtcclxuICAgICAgICB0aGlzLnBhcmVudE5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRlZmluZVByb3BlcnRpZXMoZXZlbnQsIHsgY3VycmVudFRhcmdldDogbnVsbCwgdGFyZ2V0OiBudWxsIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJldFZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmNsYXNzIEV2ZW50VGFyZ2V0IGV4dGVuZHMgRXZlbnRUYXJnZXRNaXhpbihPYmplY3QpIHt9O1xyXG5cclxuZnVuY3Rpb24gZGVmaW5lUmVhZG9ubHlQcm9wZXJ0aWVzKHRhcmdldCwgc2xvdCwgZGVzY3JpcHRpb25zKSB7XHJcbiAgY29uc3QgcHJvcGVydHlCYWcgPSB0YXJnZXRbc2xvdF07XHJcbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBkZXNjcmlwdGlvbnMpIHtcclxuICAgIHByb3BlcnR5QmFnW3Byb3BlcnR5XSA9IGRlc2NyaXB0aW9uc1twcm9wZXJ0eV07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwge1xyXG4gICAgICBnZXQ6ICgpID0+IHByb3BlcnR5QmFnW3Byb3BlcnR5XVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBTZW5zb3JFcnJvckV2ZW50IGV4dGVuZHMgRXZlbnQge1xyXG4gIGNvbnN0cnVjdG9yKHR5cGUsIGVycm9yRXZlbnRJbml0RGljdCkge1xyXG4gICAgc3VwZXIodHlwZSwgZXJyb3JFdmVudEluaXREaWN0KTtcclxuXHJcbiAgICBpZiAoIWVycm9yRXZlbnRJbml0RGljdCB8fCAhKGVycm9yRXZlbnRJbml0RGljdC5lcnJvciBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbikpIHtcclxuICAgICAgdGhyb3cgVHlwZUVycm9yKFxyXG4gICAgICAgIFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnU2Vuc29yRXJyb3JFdmVudCc6XCIgK1xyXG4gICAgICAgIFwiMm5kIGFyZ3VtZW50IG11Y2ggY29udGFpbiAnZXJyb3InIHByb3BlcnR5XCJcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJlcnJvclwiLCB7XHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgICAgdmFsdWU6IGVycm9yRXZlbnRJbml0RGljdC5lcnJvclxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZGVmaW5lT25FdmVudExpc3RlbmVyKHRhcmdldCwgbmFtZSkge1xyXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGBvbiR7bmFtZX1gLCB7XHJcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgY29uZmlndXJhYmxlOiBmYWxzZSxcclxuICAgIHdyaXRhYmxlOiB0cnVlLFxyXG4gICAgdmFsdWU6IG51bGxcclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgU2Vuc29yU3RhdGUgPSB7XHJcbiAgSURMRTogMSxcclxuICBBQ1RJVkFUSU5HOiAyLFxyXG4gIEFDVElWRTogMyxcclxufVxyXG5cclxuY2xhc3MgU2Vuc29yIGV4dGVuZHMgRXZlbnRUYXJnZXQge1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzW3Nsb3RdID0gbmV3IFdlYWtNYXA7XHJcblxyXG4gICAgZGVmaW5lT25FdmVudExpc3RlbmVyKHRoaXMsIFwicmVhZGluZ1wiKTtcclxuICAgIGRlZmluZU9uRXZlbnRMaXN0ZW5lcih0aGlzLCBcImFjdGl2YXRlXCIpO1xyXG4gICAgZGVmaW5lT25FdmVudExpc3RlbmVyKHRoaXMsIFwiZXJyb3JcIik7XHJcblxyXG4gICAgZGVmaW5lUmVhZG9ubHlQcm9wZXJ0aWVzKHRoaXMsIHNsb3QsIHtcclxuICAgICAgYWN0aXZhdGVkOiBmYWxzZSxcclxuICAgICAgaGFzUmVhZGluZzogZmFsc2UsXHJcbiAgICAgIHRpbWVzdGFtcDogbnVsbFxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzW3Nsb3RdLnN0YXRlID0gU2Vuc29yU3RhdGUuSURMRTtcclxuXHJcbiAgICB0aGlzW3Nsb3RdLm5vdGlmeUVycm9yID0gKG1lc3NhZ2UsIG5hbWUpID0+IHtcclxuICAgICAgbGV0IGVycm9yID0gbmV3IFNlbnNvckVycm9yRXZlbnQoXCJlcnJvclwiLCB7XHJcbiAgICAgICAgZXJyb3I6IG5ldyBET01FeGNlcHRpb24obWVzc2FnZSwgbmFtZSlcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChlcnJvcik7XHJcbiAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXNbc2xvdF0ubm90aWZ5QWN0aXZhdGVkU3RhdGUgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBhY3RpdmF0ZSA9IG5ldyBFdmVudChcImFjdGl2YXRlXCIpO1xyXG4gICAgICB0aGlzW3Nsb3RdLmFjdGl2YXRlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChhY3RpdmF0ZSk7XHJcbiAgICAgIHRoaXNbc2xvdF0uc3RhdGUgPSBTZW5zb3JTdGF0ZS5BQ1RJVkU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpc1tzbG90XS5hY3RpdmF0ZUNhbGxiYWNrID0gKCkgPT4ge307XHJcbiAgICB0aGlzW3Nsb3RdLmRlYWN0aXZhdGVDYWxsYmFjayA9ICgpID0+IHt9O1xyXG5cclxuICAgIHRoaXNbc2xvdF0uZnJlcXVlbmN5ID0gbnVsbDtcclxuXHJcbiAgICBpZiAod2luZG93ICYmIHdpbmRvdy5wYXJlbnQgIT0gd2luZG93LnRvcCkge1xyXG4gICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKFwiT25seSBpbnN0YW50aWFibGUgaW4gYSB0b3AtbGV2ZWwgYnJvd3NpbmcgY29udGV4dFwiLCBcIlNlY3VyaXR5RXJyb3JcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mKG9wdGlvbnMuZnJlcXVlbmN5KSA9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgIGlmIChvcHRpb25zLmZyZXF1ZW5jeSA+IDYwKSB7XHJcbiAgICAgICAgdGhpcy5mcmVxdWVuY3kgPSBvcHRpb25zLmZyZXF1ZW5jeTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBpZiAodGhpc1tzbG90XS5zdGF0ZSA9PT0gU2Vuc29yU3RhdGUuQUNUSVZBVElORyB8fCB0aGlzW3Nsb3RdLnN0YXRlID09PSBTZW5zb3JTdGF0ZS5BQ1RJVkUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpc1tzbG90XS5zdGF0ZSA9IFNlbnNvclN0YXRlLkFDVElWQVRJTkc7XHJcbiAgICB0aGlzW3Nsb3RdLmFjdGl2YXRlQ2FsbGJhY2soKTtcclxuICB9XHJcblxyXG4gIHN0b3AoKSB7XHJcbiAgICBpZiAodGhpc1tzbG90XS5zdGF0ZSA9PT0gU2Vuc29yU3RhdGUuSURMRSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzW3Nsb3RdLmFjdGl2YXRlZCA9IGZhbHNlO1xyXG4gICAgdGhpc1tzbG90XS5oYXNSZWFkaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzW3Nsb3RdLnRpbWVzdGFtcCA9IG51bGw7XHJcbiAgICB0aGlzW3Nsb3RdLmRlYWN0aXZhdGVDYWxsYmFjaygpO1xyXG5cclxuICAgIHRoaXNbc2xvdF0uc3RhdGUgPSBTZW5zb3JTdGF0ZS5JRExFO1xyXG4gIH1cclxufSIsIi8vIC4uIENvcHlyaWdodCAoQykgMjAxMi0yMDIwIEJyeWFuIEEuIEpvbmVzLlxyXG4vL1xyXG4vLyAgVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIENlbGxCb3RpY3Mgc3lzdGVtLlxyXG4vL1xyXG4vLyAgVGhlIENlbGxCb3RpY3Mgc3lzdGVtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxyXG4vLyAgbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXNcclxuLy8gIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZVxyXG4vLyAgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cclxuLy9cclxuLy8gIFRoZSBDZWxsQm90aWNzIHN5c3RlbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmVcclxuLy8gIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHlcclxuLy8gIG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGUgR05VXHJcbi8vICBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbi8vXHJcbi8vICBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxyXG4vLyAgYWxvbmcgd2l0aCB0aGUgQ2VsbEJvdGljcyBzeXN0ZW0uICBJZiBub3QsIHNlZVxyXG4vLyAgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxyXG4vL1xyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vIHxkb2NuYW1lfCAtIEludGVyZmFjZSB3aXRoIHNlbnNvcnNcclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyBUaGlzIHByb3ZpZGVzIGNvZGUgdG8gYWNjZXNzIGBzZW5zb3IgQVBJcyA8aHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1NlbnNvcl9BUElzPmBfLlxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBcIi4vcGVybWlzc2lvbnNfcG9seWZpbGwuanNcIjtcclxuaW1wb3J0IFwiLi9zZW5zb3JfcG9seWZpbGwvZ2VvbG9jYXRpb24tc2Vuc29yLmpzXCI7XHJcbmltcG9ydCBcIi4vc2Vuc29yX3BvbHlmaWxsL21vdGlvbi1zZW5zb3JzLmpzXCI7XHJcbmltcG9ydCB7IGF1dG9fYmluZCB9IGZyb20gXCIuL2F1dG8tYmluZC5qc1wiO1xyXG5cclxuLy8gU2ltcGxlU2Vuc29yXHJcbi8vID09PT09PT09PT09PVxyXG4vLyBUaGlzIGNsYXNzIHdyYXBzIGEgYFNlbnNvciA8aHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1NlbnNvcj5gXyB3aXRoIHNpbXBsZSBgYHN0YXJ0YGAsIGBgcmVhZHlgYCwgYW5kIGBgc3RvcGBgIGZ1bmN0aW9ucy5cclxuY2xhc3MgU2ltcGxlU2Vuc29yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGF1dG9fYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZW5zb3IgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoaXMgd2FzIGluaXRpYWxseSBiYXNlZCBvbiB0aGUgTUROIFNlbnNvciBBUEkgZG9jcy5cclxuICAgIGFzeW5jIHN0YXJ0KFxyXG4gICAgICAgIC8vIFRoZSBjbGFzcyB0byB1c2UgZm9yIHRoZSBzZW5zb3IgdG8gc3RhcnQuIEl0IG11c3QgYmUgYmFzZWQgb24gdGhlIFNlbnNvciBpbnRlcmZhY2UuXHJcbiAgICAgICAgc2Vuc29yX2NsYXNzLFxyXG4gICAgICAgIC8vIEFuIGFycmF5IG9mIHN0cmluZ3MsIGdpdmluZyB0aGUgbmFtZSBvZiB0aGUgQVBJIHRvIGFzayBwZXJtaXNzaW9ucyBvZiBmb3IgdGhpcyBzZW5zb3IuIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUGVybWlzc2lvbnMvcXVlcnkuXHJcbiAgICAgICAgc2Vuc29yX3Blcm1pc3Npb24sXHJcbiAgICAgICAgLy8gT3B0aW9ucyB0byBwYXNzIHRvIHRoaXMgc2Vuc29yJ3MgY29uc3RydWN0b3IuXHJcbiAgICAgICAgc2Vuc29yX29wdGlvbnNcclxuICAgICkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbnNvcikge1xyXG4gICAgICAgICAgICB0aHJvdyBcIkluIHVzZS4gU3RvcCB0aGUgc2Vuc29yIGJlZm9yZSBzdGFydGluZyBhbm90aGVyLlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHNlbnNvcl9jbGFzcyAhPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiTm90IGF2YWlsYWJsZS5cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEdldCBwZXJtaXNzaW9uIHRvIHVzZSB0aGVzZSBzZW5zb3JzLCBpZiB0aGUgQVBJIGlzIHN1cHBvcnRlZC5cclxuICAgICAgICBpZiAobmF2aWdhdG9yLnBlcm1pc3Npb25zKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFsbChzZW5zb3JfcGVybWlzc2lvbi5tYXAoeCA9PiBuYXZpZ2F0b3IucGVybWlzc2lvbnMucXVlcnkoeyBuYW1lOiB4IH0pKSk7XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0LmV2ZXJ5KHZhbCA9PiB2YWwuc3RhdGUgPT09IFwiZ3JhbnRlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgYFBlcm1pc3Npb24gdG8gdXNlIHRoZSAke3NlbnNvcl9wZXJtaXNzaW9ufSBzZW5zb3Igd2FzIGRlbmllZC5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUbyBhY2Nlc3MgYSBzZW5zb3I6XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAjLiAgIENyZWF0ZSBpdCwgdGhlbiBzdGFydCBpdCwgc3luY2hyb25vdXNseSBjaGVja2luZyBmb3IgZXJyb3JzIGluIHRoaXMgcHJvY2Vzcy5cclxuICAgICAgICAvLyAjLiAgIEF3YWl0IGZvciBhIHJlc3BvbnNlIGZyb20gdGhlIHNlbnNvcjogYW4gYWNjZXB0YW5jZSBpbmRpY2F0aW5nIHRoZSBzZW5zb3Igd29ya3MsIG9yIGEgcmVqZWN0aW9uIGluZGljYXRpbmcgYSBmYWlsdXJlLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gU2luY2UgdGhlIGV2ZW50IGhhbmRsZXJzIHRvIGFjY2VwdCBvciByZWplY3QgdGhlIHByb21pc2UgbXVzdCBiZSBzZXQgdXAgaW4gdGhlIHN5bmNocm9ub3VzIHBoYXNlLCB3cmFwIGV2ZXJ5dGhpbmcgaW4gYSBwcm9taXNlLiBBbGwgdGhlIG9wZXJhdGlvbnMgYWJvdmUgdGhlcmVmb3JlIHN0YXJ0IHdoZW4gdGhlIHByb21pc2UgaXMgYXdhaXRlZC5cclxuICAgICAgICB0aGlzLnNlbnNvciA9IG51bGw7XHJcbiAgICAgICAgbGV0IG9uX2Vycm9yO1xyXG4gICAgICAgIGxldCBvbl9yZWFkaW5nO1xyXG4gICAgICAgIGxldCBwID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZW5zb3IgPSBuZXcgc2Vuc29yX2NsYXNzKHNlbnNvcl9vcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgY2FsbGJhY2sgZXJyb3JzIGJ5IHJlamVjdGluZyB0aGUgcHJvbWlzZS5cclxuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgICAgIG9uX2Vycm9yID0gZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuc2Vuc29yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBvbl9lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIHJ1bnRpbWUgZXJyb3JzLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5lcnJvci5uYW1lID09PSAnTm90QWxsb3dlZEVycm9yJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJBY2Nlc3MgdG8gdGhpcyBzZW5zb3IgaXMgbm90IGFsbG93ZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZXJyb3IubmFtZSA9PT0gJ05vdFJlYWRhYmxlRXJyb3InICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoJ0Nhbm5vdCBjb25uZWN0IHRvIHRoZSBzZW5zb3IuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChgVW5rbm93biBlcnJvcjogJHtldmVudC5lcnJvci5uYW1lfWApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2Vuc29yLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25fZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFdhaXQgZm9yIHRoZSBmaXJzdCBzZW5zb3IgcmVhZGluZyB0byBhY2NlcHQgdGhlIHByb21pc2UuXHJcbiAgICAgICAgICAgICAgICBvbl9yZWFkaW5nID0gZXZlbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnNlbnNvci5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVhZGluZ1wiLCBvbl9yZWFkaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbnNvci5hZGRFdmVudExpc3RlbmVyKFwicmVhZGluZ1wiLCBvbl9yZWFkaW5nKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbnNvci5zdGFydCgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIGNvbnN0cnVjdGlvbiBlcnJvcnMuXHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IubmFtZSA9PT0gJ1NlY3VyaXR5RXJyb3InKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2VlIHRoZSBub3RlIGFib3ZlIGFib3V0IGZlYXR1cmUgcG9saWN5LlxyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIlNlbnNvciBjb25zdHJ1Y3Rpb24gd2FzIGJsb2NrZWQgYnkgYSBmZWF0dXJlIHBvbGljeS5cIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLm5hbWUgPT09ICdSZWZlcmVuY2VFcnJvcicpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJTZW5zb3IgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgVXNlciBBZ2VudC5cIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU3RhcnQgdGhlIHNlbnNvciwgd2FpdGluZyB1bnRpbCBpdCBwcm9kdWNlcyBhIHJlYWRpbmcgb3IgYW4gZXJyb3IuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEF3YWl0ICR7bmV3IERhdGUoKX1gKTtcclxuICAgICAgICAgICAgYXdhaXQgcDtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRG9uZSAke25ldyBEYXRlKCl9YCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vuc29yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBvbl9lcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vuc29yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZWFkaW5nXCIsIG9uX3JlYWRpbmcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUcnVlIGlmIHRoZSBzZW5zb3IgaXMgYWN0aXZhdGVkIGFuZCBoYXMgYSByZWFkaW5nLlxyXG4gICAgZ2V0IHJlYWR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbnNvciAmJiB0aGlzLnNlbnNvci5hY3RpdmF0ZWQgJiYgdGhpcy5zZW5zb3IuaGFzUmVhZGluZztcclxuICAgIH1cclxuXHJcbiAgICAvLyBUbyBzYXZlIGRldmljZSBwb3dlciwgYmUgc3VyZSB0byBzdG9wIHRoZSBzZW5zb3IgYXMgc29vbiBhcyB0aGUgcmVhZGluZ3MgYXJlIG5vIGxvbmdlciBuZWVkZWQuXHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIHRoaXMuc2Vuc29yICYmIHRoaXMuc2Vuc29yLnN0b3AoKTtcclxuICAgICAgICB0aGlzLnNlbnNvciA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBBYnN0cmFjdCBoZWxwZXIgY2xhc3Nlc1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTZXZlcmFsIHNlbnNvcnMgcmV0dXJuIHgsIHksIGFuZCB6IHZhbHVlcy4gQ29sbGVjdCB0aGUgY29tbW9uIGNvZGUgaGVyZS5cclxuY2xhc3MgU2ltcGxlWFlaU2Vuc29yIGV4dGVuZHMgU2ltcGxlU2Vuc29yIHtcclxuICAgIGdldCB4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbnNvci54O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbnNvci55O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB6KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbnNvci56O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gVHdvIHNlbnNvcnMgcmV0dXJuIGEgcXVhdGVybmlvbiBvciByb3RhdGlvbiBtYXRyaXguXHJcbmNsYXNzIFNpbXBsZU9yaWVudGF0aW9uU2Vuc29yIGV4dGVuZHMgU2ltcGxlU2Vuc29yIHtcclxuICAgIGdldCBxdWF0ZXJuaW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbnNvci5xdWF0ZXJuaW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHBvcHVsYXRlTWF0cml4KHRhcmdldE1hdHJpeCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbnNvci5wb3B1bGF0ZU1hdHJpeCh0YXJnZXRNYXRyaXgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gQ29uY3JldGUgY2xhc3Nlc1xyXG4vLyA9PT09PT09PT09PT09PT09XHJcbi8vIE5vdGUgdGhlIHVzZSBvZiBgYHdpbmRvdy5TZW5zb3JOYW1lYGAgaW5zdGVhZCBvZiBgYFNlbnNvck5hbWVgYCBmb3Igbm9uLXBvbHlmaWxscy4gVGhpcyBhdm9pZHMgZXhjZXB0aW9ucyBpZiB0aGUgcGFydGljdWxhciBzZW5zb3IgaXNuJ3QgZGVmaW5lZCwgcHJvZHVjaW5nIGFuIGBgdW5kZWZpbmVkYGAgaW5zdGVhZC4gRm9yIHBvbHlmaWxscywgd2UgbXVzdCB1c2UgYGBTZW5zb3JOYW1lYGAgaW5zdGVhZCBvZiBgYHdpbmRvdy5TZW5zb3JOYW1lYGAuXHJcbmV4cG9ydCBjbGFzcyBTaW1wbGVBbWJpZW50TGlnaHRTZW5zb3IgZXh0ZW5kcyBTaW1wbGVTZW5zb3Ige1xyXG4gICAgYXN5bmMgc3RhcnQoYWxzX29wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuc3RhcnQod2luZG93LkFtYmllbnRMaWdodFNlbnNvciwgW1wiYW1iaWVudC1saWdodC1zZW5zb3JcIl0sIGFsc19vcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaWxsdW1pbmFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Vuc29yLmlsbHVtaW5hbmNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gU2VlIHRoZSBgVzNDIGRyYWZ0IHNwZWMgPGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9nZW9sb2NhdGlvbi1zZW5zb3IvI2dlb2xvY2F0aW9uc2Vuc29yLWludGVyZmFjZT5gXy5cclxuZXhwb3J0IGNsYXNzIFNpbXBsZUdlb2xvY2F0aW9uU2Vuc29yIGV4dGVuZHMgU2ltcGxlU2Vuc29yIHtcclxuICAgIGFzeW5jIHN0YXJ0KGdlb19vcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLnN0YXJ0KEdlb2xvY2F0aW9uU2Vuc29yLCBbXCJnZW9sb2NhdGlvblwiXSwgZ2VvX29wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsYXRpdHVkZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZW5zb3IubGF0aXR1ZGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxvbmdpdHVkZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZW5zb3IubG9uZ2l0dWRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhbHRpdHVkZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZW5zb3IuYWx0aXR1ZGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFjY3VyYWN5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbnNvci5hY2N1cmFjeTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWx0aXR1ZGVBY2N1cmFjeSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZW5zb3IuYWx0aXR1ZGVBY2N1cmFjeTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGVhZGluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZW5zb3IuaGVhZGluZztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3BlZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Vuc29yLnNwZWVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNpbXBsZUFjY2VsZXJvbWV0ZXIgZXh0ZW5kcyBTaW1wbGVYWVpTZW5zb3Ige1xyXG4gICAgYXN5bmMgc3RhcnQoYWNjZWxlcm9tZXRlcl9vcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLnN0YXJ0KEFjY2VsZXJvbWV0ZXIsIFtcImFjY2VsZXJvbWV0ZXJcIl0sIGFjY2VsZXJvbWV0ZXJfb3B0aW9ucyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU2ltcGxlR3lyb3Njb3BlIGV4dGVuZHMgU2ltcGxlWFlaU2Vuc29yIHtcclxuICAgIGFzeW5jIHN0YXJ0KGd5cm9fb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5zdGFydChHeXJvc2NvcGUsIFtcImd5cm9zY29wZVwiXSwgZ3lyb19vcHRpb25zKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTaW1wbGVMaW5lYXJBY2NlbGVyYXRpb25TZW5zb3IgZXh0ZW5kcyBTaW1wbGVYWVpTZW5zb3Ige1xyXG4gICAgYXN5bmMgc3RhcnQoYWNjZWxfb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5zdGFydChMaW5lYXJBY2NlbGVyYXRpb25TZW5zb3IsIFtcImFjY2VsZXJvbWV0ZXJcIl0sIGFjY2VsX29wdGlvbnMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNpbXBsZUdyYXZpdHlTZW5zb3IgZXh0ZW5kcyBTaW1wbGVYWVpTZW5zb3Ige1xyXG4gICAgYXN5bmMgc3RhcnQoZ3Jhdl9vcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLnN0YXJ0KEdyYXZpdHlTZW5zb3IsIFtcImFjY2VsZXJvbWV0ZXJcIl0sIGdyYXZfb3B0aW9ucyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU2ltcGxlTWFnbmV0b21ldGVyIGV4dGVuZHMgU2ltcGxlWFlaU2Vuc29yIHtcclxuICAgIGFzeW5jIHN0YXJ0KG1hZ19vcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLnN0YXJ0KHdpbmRvdy5NYWduZXRvbWV0ZXIsIFtcIm1hZ25ldG9tZXRlclwiXSwgbWFnX29wdGlvbnMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNpbXBsZUFic29sdXRlT3JpZW50YXRpb25TZW5zb3IgZXh0ZW5kcyBTaW1wbGVPcmllbnRhdGlvblNlbnNvciB7XHJcbiAgICBhc3luYyBzdGFydChvcmllbnRfb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5zdGFydChBYnNvbHV0ZU9yaWVudGF0aW9uU2Vuc29yLCBbXCJhY2NlbGVyb21ldGVyXCIsIFwiZ3lyb3Njb3BlXCIsIFwibWFnbmV0b21ldGVyXCJdLCBvcmllbnRfb3B0aW9ucyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU2ltcGxlUmVsYXRpdmVPcmllbnRhdGlvblNlbnNvciBleHRlbmRzIFNpbXBsZU9yaWVudGF0aW9uU2Vuc29yIHtcclxuICAgIGFzeW5jIHN0YXJ0KG9yaWVudF9vcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLnN0YXJ0KFJlbGF0aXZlT3JpZW50YXRpb25TZW5zb3IsIFtcImFjY2VsZXJvbWV0ZXJcIiwgXCJneXJvc2NvcGVcIl0sIG9yaWVudF9vcHRpb25zKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9