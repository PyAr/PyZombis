(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_cellbotics_js_ble_js"],{

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

/***/ 14818:
/*!****************************************!*\
  !*** ./runestone/cellbotics/js/ble.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cell_bot_ble_gui": () => (/* binding */ cell_bot_ble_gui)
/* harmony export */ });
/* harmony import */ var _auto_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auto-bind.js */ 34630);
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
// *************************************************************
// |docname| - JavaScript code to connect with a CellBot via BLE
// *************************************************************





// CellBotBle
// ==========
// This sends and receives data to the CellBot via Bluetooth.
class CellBotBle {
    constructor() {
        (0,_auto_bind_js__WEBPACK_IMPORTED_MODULE_0__.auto_bind)(this);

        this.clear_connection();
        // If true, the server (BLE device / CellBot) is little-endian; if false, big-endian.
        this.is_little_endian = true;
        // If true, expect verbose returns (the CellBot was compiled with ``VERBOSE_RETURN`` defined).
        this.verbose_return = true;
        // If true, return dummy values instead of talking to the hardware.
        this.is_sim = false;

        // #defines from Arduino headers.
        this.INPUT = 1;
        this.OUTPUT = 2;

        // UUIDs for each characteristic.
        this.uuid = {
            resetHardware: "60cb180e-838d-4f65-aff4-20b609b453f3",
            pinMode: "6ea6d9b6-7b7e-451c-ab45-221298e43562",
            digitalWrite: "d3423cf6-6da7-4dd8-a5ba-3c980c74bd6d",
            digitalRead: "c370bc79-11c1-4530-9f69-ab9d961aa497",
            ledcSetup: "6be57cea-3c46-4687-972b-03429d2acf9b",
            ledcAttachPin: "2cd63861-078f-436f-9ed9-79e57ec8b638",
            ledcDetachPin: "b9b0cabe-25d8-4965-9259-7d3b6330e940",
            ledcWrite: "40698030-a343-448f-a9ea-54b39b03bf81"
        };
    }

    // Clear Bluetooth connection-related objects.
    clear_connection() {
        this.server && this.server.disconnect();
        this.server = undefined;
        this.service = undefined;
        // A dict of name: ``BluetoothRemoteGATTCharacteristic``.
        this.characteristic = {};
    }

    // Return true if BLE is supported by this browser. Even if it is supported, it may not be available.
    is_ble_supported() {
        return Boolean(navigator.bluetooth);
    }

    // Return true is BLE is supported. If so, register the provided event handler.
    async has_ble(on_availability_changed) {
        if (this.is_sim) {
            return true;
        }

        if (this.is_ble_supported() && await navigator.bluetooth.getAvailability()) {
            navigator.bluetooth.addEventListener("availabilitychanged", on_availability_changed);
            return true;
        } else {
            return false;
        }
    }

    // Returns true if the Bluetooth device (server) is connected.
    paired() {
        return this.is_sim || (this.server && this.server.connected);
    }

    // Pair with a CellBot and return the characteristic used to control the device.
    async pair(disconnect_callback)
    {
        if (this.is_sim) {
            return;
        }

        // Skip connecting if we're already connected.
        if (this.paired()) {
            return;
        }

        // Shut down any remnants of a previous connection.
        this.clear_connection();

        // Request a device with service `UUIDs`. See the `Bluetooth API <https://developer.mozilla.org/en-US/docs/Web/API/Bluetooth>`_.
        let cellBot_service = "6c533793-9bd6-47d6-8d3b-c10a704b6b97";
        this.device = await navigator.bluetooth.requestDevice({
            filters: [{
                services: [cellBot_service]
            }]
        });

        // Notify on a disconnect. I can't find any docs on this, but it does work.
        this.device.addEventListener('gattserverdisconnected', disconnect_callback);
        this.device.addEventListener('gattserverdisconnected', this.clear_connection);

        // Connect to its server.
        this.server = await this.device.gatt.connect();

        // Get the service for our server.
        this.service = await this.server.getPrimaryService(cellBot_service);
    }

    // Generic access function for calling a function on the Arduino. It returns (value returned after invoking the function, message).
    async invoke_Arduino(
        // The Bluetooth characteristic to use for this call.
        characteristic,
        // The number of bytes in the return value:
        //
        // -    0: void
        // -    +1/-1: unsigned/signed 8-bit value
        // -    +2/-2: unsigned/signed 16-bit value
        // -    +4/-4: unsigned/signed 32-bit value
        // -    0.4/0.8: 32-bit/64-bit float
        return_bytes,
        // An ArrayBuffer or compatible type of data containing encoded parameters to send.
        param_array
    ) {
        if (this.is_sim) {
            return [0, ""];
        }

        await characteristic.writeValue(param_array);
        // Read the returned data.
        let return_data = await characteristic.readValue();
        // Interpret the return value.
        let return_value;
        switch (return_bytes) {
            case 0:
            return_value = undefined;
            break;

            case 1:
            return_value = return_data.getUint8(0);
            break;

            case -1:
            return_value = return_data.getInt8(0);
            break;

            case 2:
            return_value = return_data.getUint16(0);
            break;

            case -2:
            return_value = return_data.getInt16(0, this.is_little_endian);
            break;

            case 4:
            return_value = return_data.getUint32(0, this.is_little_endian);
            break;

            case -4:
            return_value = return_data.getInt32(0, this.is_little_endian);
            break;

            case 0.4:
            return_value = return_data.getFloat32(0, this.is_little_endian);
            return_bytes = 4;
            break;

            case 0.8:
            return_value = return_data.getFloat64(0, this.is_little_endian);
            return_bytes = 8;
            break;

        }

        let message = return_data.buffer.slice(return_bytes);
        message = String.fromCharCode.apply(null, new Uint8Array(message));
        if (!this.verbose_return) {
            throw `BLE protocol error: ${message}`
        }
        return [return_value, message];
    }

    // Return an existing instance of a ``BluetoothRemoteGATTCharacteristic`` or create a new one.
    async get_characteristic(name) {
        if (this.is_sim) {
            return name;
        }

        if (name in this.characteristic) {
            return this.characteristic[name];
        }
        return this.characteristic[name] = await this.service.getCharacteristic(this.uuid[name]);
    }

    // Reset the hardware on the connected device.
    async resetHardware() {
        // Any write is fine -- just send 1 byte.
        return this.invoke_Arduino(await this.get_characteristic("resetHardware"), 0, new Uint8Array([1]));
    }

    // Invoke `pinMode <https://www.arduino.cc/reference/en/language/functions/digital-io/pinmode/>`_ on the Arduino.
    async pinMode(u8_pin, u8_mode) {
        return this.invoke_Arduino(await this.get_characteristic("pinMode"), 0, new Uint8Array([u8_pin, u8_mode]));
    }

    // Invoke `digitalWrite <https://www.arduino.cc/reference/en/language/functions/digital-io/digitalwrite/>`_ on the Arduino.
    async digitalWrite(u8_pin, u8_value) {
        return this.invoke_Arduino(await this.get_characteristic("digitalWrite"), 0, new Uint8Array([u8_pin, u8_value]));
    }

    // Invoke `digitalRead <https://www.arduino.cc/reference/en/language/functions/digital-io/digitalread/>`_ on the Arduino.
    async digitalRead(u8_pin) {
        return this.invoke_Arduino(await this.get_characteristic("digitalRead"), 1, new Uint8Array([u8_pin]));
    }

    // Invoke ``ledcSetup`` on the Arduino.
    //
    // Note that the LEDC control on the ESP32 Arduino port isn't documented. Here's my attempts. The best reference is the `LED_PWM chapter of the ESP32 Technical Reference Manual <https://www.espressif.com/sites/default/files/documentation/esp32_technical_reference_manual_en.pdf#page=384>`_. To set up PWM, you need to select:
    //
    // -    A channel (channels 0-7 auto-update new PWM periods, channels 8-15 don't).
    // -    The frequency to do the PWM, in Hz.
    // -    A number of bits used to do the PWM. The maximum possible value is floor(log2(processor clock frequency/PWM frequency)); this cannot exceed 20. The processor clock frequency is either 80 MHz or 1 MHz.
    //
    // The function returns the actual PWM frequency, due to the limitations of the available clock divisor.
    async ledcSetup(u8_channel, d_freq, u8_resolution_bits) {
        let param_array = new ArrayBuffer(11);
        let dv = new DataView(param_array);
        dv.setUint8(0, u8_channel);
        dv.setFloat64(1, d_freq, this.is_little_endian);
        dv.setUint8(10, u8_resolution_bits);
        return this.invoke_Arduino(await this.get_characteristic("ledcSetup"), 0.8, param_array);
    }

    // Invoke ``ledcAttachPin`` on the Arduino.
    //
    // Next, attach this channel to a specific pin on the Arduino.
    async ledcAttachPin(u8_pin, u8_channel) {
        return this.invoke_Arduino(await this.get_characteristic("ledcAttachPin"), 0, new Uint8Array([u8_pin, u8_channel]));
    }

    // Invoke ``ledcWrite`` on the Arduino.
    //
    // Finally, select a duty cycle for that channel, from 2^num_bits to 1.
    async ledcWrite(u8_channel, u32_duty) {
        let param_array = new ArrayBuffer(5);
        let dv = new DataView(param_array);
        dv.setUint8(0, u8_channel);
        dv.setUint32(1, u32_duty, this.is_little_endian);
        return this.invoke_Arduino(await this.get_characteristic("ledcWrite"), 0, param_array);
    }

    // Invoke ``ledcDetachPin`` on the Arduino.
    //
    // Next, attach this channel to a specific pin on the Arduino.
    async ledcDetachPin(u8_pin) {
        return this.invoke_Arduino(await this.get_characteristic("ledcDetachPin"), 0, new Uint8Array([u8_pin]));
    }
}


// CellBotBleGui
// =============
// Provide a simple pair/disconnect GUI for the CellBot Bluetooth connection.
class CellBotBleGui {
    constructor(pair_button_id, pair_status_id) {
        (0,_auto_bind_js__WEBPACK_IMPORTED_MODULE_0__.auto_bind)(this);

        this.ble_pair_button = document.getElementById(pair_button_id);
        this.ble_pair_status = document.getElementById(pair_status_id);

        // If the GUI isn't available, give up.
        if (!this.ble_pair_button || !this.ble_pair_status) {
            return;
        }

        this.cell_bot_ble = new CellBotBle();
        // Update the pair button based on BLE availability.
        this.cell_bot_ble.has_ble(this.on_availability_changed).then(this.on_ble_available);
        // Respond to button clicks.
        this.ble_pair_button.addEventListener("click", event => {
            this.async_on_pair_clicked();
        })
    }

    async async_on_pair_clicked() {
        if (!this.cell_bot_ble.paired()) {
            this.ble_pair_button.disabled = true;
            this.ble_pair_status.innerHTML = "Pairing...";
            try {
                await this.cell_bot_ble.pair(this.on_disconnect);
                this.ble_pair_status.innerHTML = `Paired to ${this.cell_bot_ble.device.name}.`;
                this.ble_pair_button.innerHTML = "Disconnect";

            } catch (err) {
                this.ble_pair_status.innerHTML = "Unable to pair.";
                throw err;
            } finally {
                this.ble_pair_button.disabled = false;
            }

        } else {
            this.cell_bot_ble.server.disconnect();
        }
    }

    on_availability_changed(event) {
        // TODO: I don't know what the structure of this event is.
        console.log(event);
    }

    on_ble_available(has_ble) {
        this.ble_pair_button.disabled = !has_ble;
        if (has_ble) {
            this.ble_pair_status.innerHTML = "Not connected.";
        } else {
            this.ble_pair_status.innerHTML = "Not available.";
        }
    }

    on_disconnect() {
        this.ble_pair_status.innerHTML = "Disconnected.";
        this.ble_pair_button.innerHTML = "Pair";
    }
}


// An instance of this class.
let cell_bot_ble_gui;

// Handler
// =======
// This must be invoked when the DOM is ready, before calling any other function in this file.
$(document).ready(function () {
    cell_bot_ble_gui = new CellBotBleGui("ble_pair_button", "ble_pair_status");
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NlbGxib3RpY3MvanMvYXV0by1iaW5kLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY2VsbGJvdGljcy9qcy9ibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOzs7QUFHYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOzs7QUFHQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFOEI7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFTOztBQUVqQjtBQUNBLHVFQUF1RTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxRQUFRO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvSUFBb0k7QUFDcEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBUzs7QUFFakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELDhCQUE4QjtBQUM1Rjs7QUFFQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoicnVuZXN0b25lX2NlbGxib3RpY3NfanNfYmxlX2pzLmJ1bmRsZS5qcz92PTM1ODNhNTZmZjg1NTc0MTZhYzRhIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLi4gQ29weXJpZ2h0IChDKSAyMDEyLTIwMjAgQnJ5YW4gQS4gSm9uZXMuXHJcbi8vXHJcbi8vICBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgQ2VsbEJvdGljcyBzeXN0ZW0uXHJcbi8vXHJcbi8vICBUaGUgQ2VsbEJvdGljcyBzeXN0ZW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXHJcbi8vICBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhc1xyXG4vLyAgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlXHJcbi8vICBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxyXG4vL1xyXG4vLyAgVGhlIENlbGxCb3RpY3Mgc3lzdGVtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZVxyXG4vLyAgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eVxyXG4vLyAgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlVcclxuLy8gIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuLy9cclxuLy8gIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXHJcbi8vICBhbG9uZyB3aXRoIHRoZSBDZWxsQm90aWNzIHN5c3RlbS4gIElmIG5vdCwgc2VlXHJcbi8vICA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXHJcbi8vXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyB8ZG9jbmFtZXwgLSBBdXRvbWF0aWNhbGx5IGJpbmQgbWV0aG9kcyB0byB0aGVpciBpbnN0YW5jZXNcclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG4vLyBUaGUgZm9sbG93aW5nIHR3byBmdW5jdGlvbnMgd2VyZSB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvYXV0by1iaW5kL2Jsb2IvbWFzdGVyL2luZGV4LmpzIGFuZCBsaWdodGx5IG1vZGlmaWVkLiBUaGV5IHByb3ZpZGUgYW4gZWFzeSB3YXkgdG8gYmluZCBhbGwgY2FsbGFibGUgbWV0aG9kcyB0byB0aGVpciBpbnN0YW5jZS4gU2VlIGBCaW5kaW5nIE1ldGhvZHMgdG8gQ2xhc3MgSW5zdGFuY2UgT2JqZWN0cyA8aHR0cHM6Ly9wb255Zm9vLmNvbS9hcnRpY2xlcy9iaW5kaW5nLW1ldGhvZHMtdG8tY2xhc3MtaW5zdGFuY2Utb2JqZWN0cz5gXyBmb3IgbW9yZSBkaXNjdXNzaW9uIG9uIHRoaXMgY3JhenkgSmF2YVNjcmlwdCBuZWNlc3NpdHkuXHJcbi8vXHJcbi8vIEdldHMgYWxsIG5vbi1idWlsdGluIHByb3BlcnRpZXMgdXAgdGhlIHByb3RvdHlwZSBjaGFpblxyXG5jb25zdCBnZXRBbGxQcm9wZXJ0aWVzID0gb2JqZWN0ID0+IHtcclxuXHRjb25zdCBwcm9wZXJ0aWVzID0gbmV3IFNldCgpO1xyXG5cclxuXHRkbyB7XHJcblx0XHRmb3IgKGNvbnN0IGtleSBvZiBSZWZsZWN0Lm93bktleXMob2JqZWN0KSkge1xyXG5cdFx0XHRwcm9wZXJ0aWVzLmFkZChbb2JqZWN0LCBrZXldKTtcclxuXHRcdH1cclxuXHR9IHdoaWxlICgob2JqZWN0ID0gUmVmbGVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpKSAmJiBvYmplY3QgIT09IE9iamVjdC5wcm90b3R5cGUpO1xyXG5cclxuXHRyZXR1cm4gcHJvcGVydGllcztcclxufTtcclxuXHJcblxyXG4vLyBJbnZva2UgdGhpcyBpbiB0aGUgY29uc3RydWN0b3Igb2YgYW4gb2JqZWN0LlxyXG5leHBvcnQgZnVuY3Rpb24gYXV0b19iaW5kKHNlbGYpIHtcclxuICAgIGZvciAoY29uc3QgW29iamVjdCwga2V5XSBvZiBnZXRBbGxQcm9wZXJ0aWVzKHNlbGYuY29uc3RydWN0b3IucHJvdG90eXBlKSkge1xyXG4gICAgICAgIGlmIChrZXkgPT09ICdjb25zdHJ1Y3RvcicpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBrZXkpO1xyXG4gICAgICAgIGlmIChkZXNjcmlwdG9yICYmIHR5cGVvZiBkZXNjcmlwdG9yLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHNlbGZba2V5XSA9IHNlbGZba2V5XS5iaW5kKHNlbGYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyAuLiBDb3B5cmlnaHQgKEMpIDIwMTItMjAyMCBCcnlhbiBBLiBKb25lcy5cclxuLy9cclxuLy8gIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBDZWxsQm90aWNzIHN5c3RlbS5cclxuLy9cclxuLy8gIFRoZSBDZWxsQm90aWNzIHN5c3RlbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcclxuLy8gIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzXHJcbi8vICBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGVcclxuLy8gIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXHJcbi8vXHJcbi8vICBUaGUgQ2VsbEJvdGljcyBzeXN0ZW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlXHJcbi8vICB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5XHJcbi8vICBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlIEdOVVxyXG4vLyAgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4vL1xyXG4vLyAgWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcclxuLy8gIGFsb25nIHdpdGggdGhlIENlbGxCb3RpY3Mgc3lzdGVtLiAgSWYgbm90LCBzZWVcclxuLy8gIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cclxuLy9cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyB8ZG9jbmFtZXwgLSBKYXZhU2NyaXB0IGNvZGUgdG8gY29ubmVjdCB3aXRoIGEgQ2VsbEJvdCB2aWEgQkxFXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgYXV0b19iaW5kIH0gZnJvbSBcIi4vYXV0by1iaW5kLmpzXCI7XHJcblxyXG4vLyBDZWxsQm90QmxlXHJcbi8vID09PT09PT09PT1cclxuLy8gVGhpcyBzZW5kcyBhbmQgcmVjZWl2ZXMgZGF0YSB0byB0aGUgQ2VsbEJvdCB2aWEgQmx1ZXRvb3RoLlxyXG5jbGFzcyBDZWxsQm90QmxlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGF1dG9fYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5jbGVhcl9jb25uZWN0aW9uKCk7XHJcbiAgICAgICAgLy8gSWYgdHJ1ZSwgdGhlIHNlcnZlciAoQkxFIGRldmljZSAvIENlbGxCb3QpIGlzIGxpdHRsZS1lbmRpYW47IGlmIGZhbHNlLCBiaWctZW5kaWFuLlxyXG4gICAgICAgIHRoaXMuaXNfbGl0dGxlX2VuZGlhbiA9IHRydWU7XHJcbiAgICAgICAgLy8gSWYgdHJ1ZSwgZXhwZWN0IHZlcmJvc2UgcmV0dXJucyAodGhlIENlbGxCb3Qgd2FzIGNvbXBpbGVkIHdpdGggYGBWRVJCT1NFX1JFVFVSTmBgIGRlZmluZWQpLlxyXG4gICAgICAgIHRoaXMudmVyYm9zZV9yZXR1cm4gPSB0cnVlO1xyXG4gICAgICAgIC8vIElmIHRydWUsIHJldHVybiBkdW1teSB2YWx1ZXMgaW5zdGVhZCBvZiB0YWxraW5nIHRvIHRoZSBoYXJkd2FyZS5cclxuICAgICAgICB0aGlzLmlzX3NpbSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyAjZGVmaW5lcyBmcm9tIEFyZHVpbm8gaGVhZGVycy5cclxuICAgICAgICB0aGlzLklOUFVUID0gMTtcclxuICAgICAgICB0aGlzLk9VVFBVVCA9IDI7XHJcblxyXG4gICAgICAgIC8vIFVVSURzIGZvciBlYWNoIGNoYXJhY3RlcmlzdGljLlxyXG4gICAgICAgIHRoaXMudXVpZCA9IHtcclxuICAgICAgICAgICAgcmVzZXRIYXJkd2FyZTogXCI2MGNiMTgwZS04MzhkLTRmNjUtYWZmNC0yMGI2MDliNDUzZjNcIixcclxuICAgICAgICAgICAgcGluTW9kZTogXCI2ZWE2ZDliNi03YjdlLTQ1MWMtYWI0NS0yMjEyOThlNDM1NjJcIixcclxuICAgICAgICAgICAgZGlnaXRhbFdyaXRlOiBcImQzNDIzY2Y2LTZkYTctNGRkOC1hNWJhLTNjOTgwYzc0YmQ2ZFwiLFxyXG4gICAgICAgICAgICBkaWdpdGFsUmVhZDogXCJjMzcwYmM3OS0xMWMxLTQ1MzAtOWY2OS1hYjlkOTYxYWE0OTdcIixcclxuICAgICAgICAgICAgbGVkY1NldHVwOiBcIjZiZTU3Y2VhLTNjNDYtNDY4Ny05NzJiLTAzNDI5ZDJhY2Y5YlwiLFxyXG4gICAgICAgICAgICBsZWRjQXR0YWNoUGluOiBcIjJjZDYzODYxLTA3OGYtNDM2Zi05ZWQ5LTc5ZTU3ZWM4YjYzOFwiLFxyXG4gICAgICAgICAgICBsZWRjRGV0YWNoUGluOiBcImI5YjBjYWJlLTI1ZDgtNDk2NS05MjU5LTdkM2I2MzMwZTk0MFwiLFxyXG4gICAgICAgICAgICBsZWRjV3JpdGU6IFwiNDA2OTgwMzAtYTM0My00NDhmLWE5ZWEtNTRiMzliMDNiZjgxXCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENsZWFyIEJsdWV0b290aCBjb25uZWN0aW9uLXJlbGF0ZWQgb2JqZWN0cy5cclxuICAgIGNsZWFyX2Nvbm5lY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXIgJiYgdGhpcy5zZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIHRoaXMuc2VydmVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAvLyBBIGRpY3Qgb2YgbmFtZTogYGBCbHVldG9vdGhSZW1vdGVHQVRUQ2hhcmFjdGVyaXN0aWNgYC5cclxuICAgICAgICB0aGlzLmNoYXJhY3RlcmlzdGljID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRydWUgaWYgQkxFIGlzIHN1cHBvcnRlZCBieSB0aGlzIGJyb3dzZXIuIEV2ZW4gaWYgaXQgaXMgc3VwcG9ydGVkLCBpdCBtYXkgbm90IGJlIGF2YWlsYWJsZS5cclxuICAgIGlzX2JsZV9zdXBwb3J0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4obmF2aWdhdG9yLmJsdWV0b290aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRydWUgaXMgQkxFIGlzIHN1cHBvcnRlZC4gSWYgc28sIHJlZ2lzdGVyIHRoZSBwcm92aWRlZCBldmVudCBoYW5kbGVyLlxyXG4gICAgYXN5bmMgaGFzX2JsZShvbl9hdmFpbGFiaWxpdHlfY2hhbmdlZCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzX3NpbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzX2JsZV9zdXBwb3J0ZWQoKSAmJiBhd2FpdCBuYXZpZ2F0b3IuYmx1ZXRvb3RoLmdldEF2YWlsYWJpbGl0eSgpKSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5ibHVldG9vdGguYWRkRXZlbnRMaXN0ZW5lcihcImF2YWlsYWJpbGl0eWNoYW5nZWRcIiwgb25fYXZhaWxhYmlsaXR5X2NoYW5nZWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybnMgdHJ1ZSBpZiB0aGUgQmx1ZXRvb3RoIGRldmljZSAoc2VydmVyKSBpcyBjb25uZWN0ZWQuXHJcbiAgICBwYWlyZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNfc2ltIHx8ICh0aGlzLnNlcnZlciAmJiB0aGlzLnNlcnZlci5jb25uZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhaXIgd2l0aCBhIENlbGxCb3QgYW5kIHJldHVybiB0aGUgY2hhcmFjdGVyaXN0aWMgdXNlZCB0byBjb250cm9sIHRoZSBkZXZpY2UuXHJcbiAgICBhc3luYyBwYWlyKGRpc2Nvbm5lY3RfY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNfc2ltKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNraXAgY29ubmVjdGluZyBpZiB3ZSdyZSBhbHJlYWR5IGNvbm5lY3RlZC5cclxuICAgICAgICBpZiAodGhpcy5wYWlyZWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTaHV0IGRvd24gYW55IHJlbW5hbnRzIG9mIGEgcHJldmlvdXMgY29ubmVjdGlvbi5cclxuICAgICAgICB0aGlzLmNsZWFyX2Nvbm5lY3Rpb24oKTtcclxuXHJcbiAgICAgICAgLy8gUmVxdWVzdCBhIGRldmljZSB3aXRoIHNlcnZpY2UgYFVVSURzYC4gU2VlIHRoZSBgQmx1ZXRvb3RoIEFQSSA8aHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0JsdWV0b290aD5gXy5cclxuICAgICAgICBsZXQgY2VsbEJvdF9zZXJ2aWNlID0gXCI2YzUzMzc5My05YmQ2LTQ3ZDYtOGQzYi1jMTBhNzA0YjZiOTdcIjtcclxuICAgICAgICB0aGlzLmRldmljZSA9IGF3YWl0IG5hdmlnYXRvci5ibHVldG9vdGgucmVxdWVzdERldmljZSh7XHJcbiAgICAgICAgICAgIGZpbHRlcnM6IFt7XHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlczogW2NlbGxCb3Rfc2VydmljZV1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gTm90aWZ5IG9uIGEgZGlzY29ubmVjdC4gSSBjYW4ndCBmaW5kIGFueSBkb2NzIG9uIHRoaXMsIGJ1dCBpdCBkb2VzIHdvcmsuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UuYWRkRXZlbnRMaXN0ZW5lcignZ2F0dHNlcnZlcmRpc2Nvbm5lY3RlZCcsIGRpc2Nvbm5lY3RfY2FsbGJhY2spO1xyXG4gICAgICAgIHRoaXMuZGV2aWNlLmFkZEV2ZW50TGlzdGVuZXIoJ2dhdHRzZXJ2ZXJkaXNjb25uZWN0ZWQnLCB0aGlzLmNsZWFyX2Nvbm5lY3Rpb24pO1xyXG5cclxuICAgICAgICAvLyBDb25uZWN0IHRvIGl0cyBzZXJ2ZXIuXHJcbiAgICAgICAgdGhpcy5zZXJ2ZXIgPSBhd2FpdCB0aGlzLmRldmljZS5nYXR0LmNvbm5lY3QoKTtcclxuXHJcbiAgICAgICAgLy8gR2V0IHRoZSBzZXJ2aWNlIGZvciBvdXIgc2VydmVyLlxyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IGF3YWl0IHRoaXMuc2VydmVyLmdldFByaW1hcnlTZXJ2aWNlKGNlbGxCb3Rfc2VydmljZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2VuZXJpYyBhY2Nlc3MgZnVuY3Rpb24gZm9yIGNhbGxpbmcgYSBmdW5jdGlvbiBvbiB0aGUgQXJkdWluby4gSXQgcmV0dXJucyAodmFsdWUgcmV0dXJuZWQgYWZ0ZXIgaW52b2tpbmcgdGhlIGZ1bmN0aW9uLCBtZXNzYWdlKS5cclxuICAgIGFzeW5jIGludm9rZV9BcmR1aW5vKFxyXG4gICAgICAgIC8vIFRoZSBCbHVldG9vdGggY2hhcmFjdGVyaXN0aWMgdG8gdXNlIGZvciB0aGlzIGNhbGwuXHJcbiAgICAgICAgY2hhcmFjdGVyaXN0aWMsXHJcbiAgICAgICAgLy8gVGhlIG51bWJlciBvZiBieXRlcyBpbiB0aGUgcmV0dXJuIHZhbHVlOlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gLSAgICAwOiB2b2lkXHJcbiAgICAgICAgLy8gLSAgICArMS8tMTogdW5zaWduZWQvc2lnbmVkIDgtYml0IHZhbHVlXHJcbiAgICAgICAgLy8gLSAgICArMi8tMjogdW5zaWduZWQvc2lnbmVkIDE2LWJpdCB2YWx1ZVxyXG4gICAgICAgIC8vIC0gICAgKzQvLTQ6IHVuc2lnbmVkL3NpZ25lZCAzMi1iaXQgdmFsdWVcclxuICAgICAgICAvLyAtICAgIDAuNC8wLjg6IDMyLWJpdC82NC1iaXQgZmxvYXRcclxuICAgICAgICByZXR1cm5fYnl0ZXMsXHJcbiAgICAgICAgLy8gQW4gQXJyYXlCdWZmZXIgb3IgY29tcGF0aWJsZSB0eXBlIG9mIGRhdGEgY29udGFpbmluZyBlbmNvZGVkIHBhcmFtZXRlcnMgdG8gc2VuZC5cclxuICAgICAgICBwYXJhbV9hcnJheVxyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNfc2ltKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbMCwgXCJcIl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBjaGFyYWN0ZXJpc3RpYy53cml0ZVZhbHVlKHBhcmFtX2FycmF5KTtcclxuICAgICAgICAvLyBSZWFkIHRoZSByZXR1cm5lZCBkYXRhLlxyXG4gICAgICAgIGxldCByZXR1cm5fZGF0YSA9IGF3YWl0IGNoYXJhY3RlcmlzdGljLnJlYWRWYWx1ZSgpO1xyXG4gICAgICAgIC8vIEludGVycHJldCB0aGUgcmV0dXJuIHZhbHVlLlxyXG4gICAgICAgIGxldCByZXR1cm5fdmFsdWU7XHJcbiAgICAgICAgc3dpdGNoIChyZXR1cm5fYnl0ZXMpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICByZXR1cm5fdmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICByZXR1cm5fdmFsdWUgPSByZXR1cm5fZGF0YS5nZXRVaW50OCgwKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIC0xOlxyXG4gICAgICAgICAgICByZXR1cm5fdmFsdWUgPSByZXR1cm5fZGF0YS5nZXRJbnQ4KDApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgcmV0dXJuX3ZhbHVlID0gcmV0dXJuX2RhdGEuZ2V0VWludDE2KDApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgLTI6XHJcbiAgICAgICAgICAgIHJldHVybl92YWx1ZSA9IHJldHVybl9kYXRhLmdldEludDE2KDAsIHRoaXMuaXNfbGl0dGxlX2VuZGlhbik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICByZXR1cm5fdmFsdWUgPSByZXR1cm5fZGF0YS5nZXRVaW50MzIoMCwgdGhpcy5pc19saXR0bGVfZW5kaWFuKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIC00OlxyXG4gICAgICAgICAgICByZXR1cm5fdmFsdWUgPSByZXR1cm5fZGF0YS5nZXRJbnQzMigwLCB0aGlzLmlzX2xpdHRsZV9lbmRpYW4pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgMC40OlxyXG4gICAgICAgICAgICByZXR1cm5fdmFsdWUgPSByZXR1cm5fZGF0YS5nZXRGbG9hdDMyKDAsIHRoaXMuaXNfbGl0dGxlX2VuZGlhbik7XHJcbiAgICAgICAgICAgIHJldHVybl9ieXRlcyA9IDQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAwLjg6XHJcbiAgICAgICAgICAgIHJldHVybl92YWx1ZSA9IHJldHVybl9kYXRhLmdldEZsb2F0NjQoMCwgdGhpcy5pc19saXR0bGVfZW5kaWFuKTtcclxuICAgICAgICAgICAgcmV0dXJuX2J5dGVzID0gODtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSByZXR1cm5fZGF0YS5idWZmZXIuc2xpY2UocmV0dXJuX2J5dGVzKTtcclxuICAgICAgICBtZXNzYWdlID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBuZXcgVWludDhBcnJheShtZXNzYWdlKSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZlcmJvc2VfcmV0dXJuKSB7XHJcbiAgICAgICAgICAgIHRocm93IGBCTEUgcHJvdG9jb2wgZXJyb3I6ICR7bWVzc2FnZX1gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbcmV0dXJuX3ZhbHVlLCBtZXNzYWdlXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gYW4gZXhpc3RpbmcgaW5zdGFuY2Ugb2YgYSBgYEJsdWV0b290aFJlbW90ZUdBVFRDaGFyYWN0ZXJpc3RpY2BgIG9yIGNyZWF0ZSBhIG5ldyBvbmUuXHJcbiAgICBhc3luYyBnZXRfY2hhcmFjdGVyaXN0aWMobmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzX3NpbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuYW1lIGluIHRoaXMuY2hhcmFjdGVyaXN0aWMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhcmFjdGVyaXN0aWNbbmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNoYXJhY3RlcmlzdGljW25hbWVdID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldENoYXJhY3RlcmlzdGljKHRoaXMudXVpZFtuYW1lXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVzZXQgdGhlIGhhcmR3YXJlIG9uIHRoZSBjb25uZWN0ZWQgZGV2aWNlLlxyXG4gICAgYXN5bmMgcmVzZXRIYXJkd2FyZSgpIHtcclxuICAgICAgICAvLyBBbnkgd3JpdGUgaXMgZmluZSAtLSBqdXN0IHNlbmQgMSBieXRlLlxyXG4gICAgICAgIHJldHVybiB0aGlzLmludm9rZV9BcmR1aW5vKGF3YWl0IHRoaXMuZ2V0X2NoYXJhY3RlcmlzdGljKFwicmVzZXRIYXJkd2FyZVwiKSwgMCwgbmV3IFVpbnQ4QXJyYXkoWzFdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW52b2tlIGBwaW5Nb2RlIDxodHRwczovL3d3dy5hcmR1aW5vLmNjL3JlZmVyZW5jZS9lbi9sYW5ndWFnZS9mdW5jdGlvbnMvZGlnaXRhbC1pby9waW5tb2RlLz5gXyBvbiB0aGUgQXJkdWluby5cclxuICAgIGFzeW5jIHBpbk1vZGUodThfcGluLCB1OF9tb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW52b2tlX0FyZHVpbm8oYXdhaXQgdGhpcy5nZXRfY2hhcmFjdGVyaXN0aWMoXCJwaW5Nb2RlXCIpLCAwLCBuZXcgVWludDhBcnJheShbdThfcGluLCB1OF9tb2RlXSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEludm9rZSBgZGlnaXRhbFdyaXRlIDxodHRwczovL3d3dy5hcmR1aW5vLmNjL3JlZmVyZW5jZS9lbi9sYW5ndWFnZS9mdW5jdGlvbnMvZGlnaXRhbC1pby9kaWdpdGFsd3JpdGUvPmBfIG9uIHRoZSBBcmR1aW5vLlxyXG4gICAgYXN5bmMgZGlnaXRhbFdyaXRlKHU4X3BpbiwgdThfdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnZva2VfQXJkdWlubyhhd2FpdCB0aGlzLmdldF9jaGFyYWN0ZXJpc3RpYyhcImRpZ2l0YWxXcml0ZVwiKSwgMCwgbmV3IFVpbnQ4QXJyYXkoW3U4X3BpbiwgdThfdmFsdWVdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW52b2tlIGBkaWdpdGFsUmVhZCA8aHR0cHM6Ly93d3cuYXJkdWluby5jYy9yZWZlcmVuY2UvZW4vbGFuZ3VhZ2UvZnVuY3Rpb25zL2RpZ2l0YWwtaW8vZGlnaXRhbHJlYWQvPmBfIG9uIHRoZSBBcmR1aW5vLlxyXG4gICAgYXN5bmMgZGlnaXRhbFJlYWQodThfcGluKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW52b2tlX0FyZHVpbm8oYXdhaXQgdGhpcy5nZXRfY2hhcmFjdGVyaXN0aWMoXCJkaWdpdGFsUmVhZFwiKSwgMSwgbmV3IFVpbnQ4QXJyYXkoW3U4X3Bpbl0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbnZva2UgYGBsZWRjU2V0dXBgYCBvbiB0aGUgQXJkdWluby5cclxuICAgIC8vXHJcbiAgICAvLyBOb3RlIHRoYXQgdGhlIExFREMgY29udHJvbCBvbiB0aGUgRVNQMzIgQXJkdWlubyBwb3J0IGlzbid0IGRvY3VtZW50ZWQuIEhlcmUncyBteSBhdHRlbXB0cy4gVGhlIGJlc3QgcmVmZXJlbmNlIGlzIHRoZSBgTEVEX1BXTSBjaGFwdGVyIG9mIHRoZSBFU1AzMiBUZWNobmljYWwgUmVmZXJlbmNlIE1hbnVhbCA8aHR0cHM6Ly93d3cuZXNwcmVzc2lmLmNvbS9zaXRlcy9kZWZhdWx0L2ZpbGVzL2RvY3VtZW50YXRpb24vZXNwMzJfdGVjaG5pY2FsX3JlZmVyZW5jZV9tYW51YWxfZW4ucGRmI3BhZ2U9Mzg0PmBfLiBUbyBzZXQgdXAgUFdNLCB5b3UgbmVlZCB0byBzZWxlY3Q6XHJcbiAgICAvL1xyXG4gICAgLy8gLSAgICBBIGNoYW5uZWwgKGNoYW5uZWxzIDAtNyBhdXRvLXVwZGF0ZSBuZXcgUFdNIHBlcmlvZHMsIGNoYW5uZWxzIDgtMTUgZG9uJ3QpLlxyXG4gICAgLy8gLSAgICBUaGUgZnJlcXVlbmN5IHRvIGRvIHRoZSBQV00sIGluIEh6LlxyXG4gICAgLy8gLSAgICBBIG51bWJlciBvZiBiaXRzIHVzZWQgdG8gZG8gdGhlIFBXTS4gVGhlIG1heGltdW0gcG9zc2libGUgdmFsdWUgaXMgZmxvb3IobG9nMihwcm9jZXNzb3IgY2xvY2sgZnJlcXVlbmN5L1BXTSBmcmVxdWVuY3kpKTsgdGhpcyBjYW5ub3QgZXhjZWVkIDIwLiBUaGUgcHJvY2Vzc29yIGNsb2NrIGZyZXF1ZW5jeSBpcyBlaXRoZXIgODAgTUh6IG9yIDEgTUh6LlxyXG4gICAgLy9cclxuICAgIC8vIFRoZSBmdW5jdGlvbiByZXR1cm5zIHRoZSBhY3R1YWwgUFdNIGZyZXF1ZW5jeSwgZHVlIHRvIHRoZSBsaW1pdGF0aW9ucyBvZiB0aGUgYXZhaWxhYmxlIGNsb2NrIGRpdmlzb3IuXHJcbiAgICBhc3luYyBsZWRjU2V0dXAodThfY2hhbm5lbCwgZF9mcmVxLCB1OF9yZXNvbHV0aW9uX2JpdHMpIHtcclxuICAgICAgICBsZXQgcGFyYW1fYXJyYXkgPSBuZXcgQXJyYXlCdWZmZXIoMTEpO1xyXG4gICAgICAgIGxldCBkdiA9IG5ldyBEYXRhVmlldyhwYXJhbV9hcnJheSk7XHJcbiAgICAgICAgZHYuc2V0VWludDgoMCwgdThfY2hhbm5lbCk7XHJcbiAgICAgICAgZHYuc2V0RmxvYXQ2NCgxLCBkX2ZyZXEsIHRoaXMuaXNfbGl0dGxlX2VuZGlhbik7XHJcbiAgICAgICAgZHYuc2V0VWludDgoMTAsIHU4X3Jlc29sdXRpb25fYml0cyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW52b2tlX0FyZHVpbm8oYXdhaXQgdGhpcy5nZXRfY2hhcmFjdGVyaXN0aWMoXCJsZWRjU2V0dXBcIiksIDAuOCwgcGFyYW1fYXJyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEludm9rZSBgYGxlZGNBdHRhY2hQaW5gYCBvbiB0aGUgQXJkdWluby5cclxuICAgIC8vXHJcbiAgICAvLyBOZXh0LCBhdHRhY2ggdGhpcyBjaGFubmVsIHRvIGEgc3BlY2lmaWMgcGluIG9uIHRoZSBBcmR1aW5vLlxyXG4gICAgYXN5bmMgbGVkY0F0dGFjaFBpbih1OF9waW4sIHU4X2NoYW5uZWwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnZva2VfQXJkdWlubyhhd2FpdCB0aGlzLmdldF9jaGFyYWN0ZXJpc3RpYyhcImxlZGNBdHRhY2hQaW5cIiksIDAsIG5ldyBVaW50OEFycmF5KFt1OF9waW4sIHU4X2NoYW5uZWxdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW52b2tlIGBgbGVkY1dyaXRlYGAgb24gdGhlIEFyZHVpbm8uXHJcbiAgICAvL1xyXG4gICAgLy8gRmluYWxseSwgc2VsZWN0IGEgZHV0eSBjeWNsZSBmb3IgdGhhdCBjaGFubmVsLCBmcm9tIDJebnVtX2JpdHMgdG8gMS5cclxuICAgIGFzeW5jIGxlZGNXcml0ZSh1OF9jaGFubmVsLCB1MzJfZHV0eSkge1xyXG4gICAgICAgIGxldCBwYXJhbV9hcnJheSA9IG5ldyBBcnJheUJ1ZmZlcig1KTtcclxuICAgICAgICBsZXQgZHYgPSBuZXcgRGF0YVZpZXcocGFyYW1fYXJyYXkpO1xyXG4gICAgICAgIGR2LnNldFVpbnQ4KDAsIHU4X2NoYW5uZWwpO1xyXG4gICAgICAgIGR2LnNldFVpbnQzMigxLCB1MzJfZHV0eSwgdGhpcy5pc19saXR0bGVfZW5kaWFuKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnZva2VfQXJkdWlubyhhd2FpdCB0aGlzLmdldF9jaGFyYWN0ZXJpc3RpYyhcImxlZGNXcml0ZVwiKSwgMCwgcGFyYW1fYXJyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEludm9rZSBgYGxlZGNEZXRhY2hQaW5gYCBvbiB0aGUgQXJkdWluby5cclxuICAgIC8vXHJcbiAgICAvLyBOZXh0LCBhdHRhY2ggdGhpcyBjaGFubmVsIHRvIGEgc3BlY2lmaWMgcGluIG9uIHRoZSBBcmR1aW5vLlxyXG4gICAgYXN5bmMgbGVkY0RldGFjaFBpbih1OF9waW4pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnZva2VfQXJkdWlubyhhd2FpdCB0aGlzLmdldF9jaGFyYWN0ZXJpc3RpYyhcImxlZGNEZXRhY2hQaW5cIiksIDAsIG5ldyBVaW50OEFycmF5KFt1OF9waW5dKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBDZWxsQm90QmxlR3VpXHJcbi8vID09PT09PT09PT09PT1cclxuLy8gUHJvdmlkZSBhIHNpbXBsZSBwYWlyL2Rpc2Nvbm5lY3QgR1VJIGZvciB0aGUgQ2VsbEJvdCBCbHVldG9vdGggY29ubmVjdGlvbi5cclxuY2xhc3MgQ2VsbEJvdEJsZUd1aSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYWlyX2J1dHRvbl9pZCwgcGFpcl9zdGF0dXNfaWQpIHtcclxuICAgICAgICBhdXRvX2JpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuYmxlX3BhaXJfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFpcl9idXR0b25faWQpO1xyXG4gICAgICAgIHRoaXMuYmxlX3BhaXJfc3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFpcl9zdGF0dXNfaWQpO1xyXG5cclxuICAgICAgICAvLyBJZiB0aGUgR1VJIGlzbid0IGF2YWlsYWJsZSwgZ2l2ZSB1cC5cclxuICAgICAgICBpZiAoIXRoaXMuYmxlX3BhaXJfYnV0dG9uIHx8ICF0aGlzLmJsZV9wYWlyX3N0YXR1cykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNlbGxfYm90X2JsZSA9IG5ldyBDZWxsQm90QmxlKCk7XHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBwYWlyIGJ1dHRvbiBiYXNlZCBvbiBCTEUgYXZhaWxhYmlsaXR5LlxyXG4gICAgICAgIHRoaXMuY2VsbF9ib3RfYmxlLmhhc19ibGUodGhpcy5vbl9hdmFpbGFiaWxpdHlfY2hhbmdlZCkudGhlbih0aGlzLm9uX2JsZV9hdmFpbGFibGUpO1xyXG4gICAgICAgIC8vIFJlc3BvbmQgdG8gYnV0dG9uIGNsaWNrcy5cclxuICAgICAgICB0aGlzLmJsZV9wYWlyX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFzeW5jX29uX3BhaXJfY2xpY2tlZCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYXN5bmNfb25fcGFpcl9jbGlja2VkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jZWxsX2JvdF9ibGUucGFpcmVkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5ibGVfcGFpcl9idXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJsZV9wYWlyX3N0YXR1cy5pbm5lckhUTUwgPSBcIlBhaXJpbmcuLi5cIjtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY2VsbF9ib3RfYmxlLnBhaXIodGhpcy5vbl9kaXNjb25uZWN0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmxlX3BhaXJfc3RhdHVzLmlubmVySFRNTCA9IGBQYWlyZWQgdG8gJHt0aGlzLmNlbGxfYm90X2JsZS5kZXZpY2UubmFtZX0uYDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmxlX3BhaXJfYnV0dG9uLmlubmVySFRNTCA9IFwiRGlzY29ubmVjdFwiO1xyXG5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJsZV9wYWlyX3N0YXR1cy5pbm5lckhUTUwgPSBcIlVuYWJsZSB0byBwYWlyLlwiO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ibGVfcGFpcl9idXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNlbGxfYm90X2JsZS5zZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbl9hdmFpbGFiaWxpdHlfY2hhbmdlZChldmVudCkge1xyXG4gICAgICAgIC8vIFRPRE86IEkgZG9uJ3Qga25vdyB3aGF0IHRoZSBzdHJ1Y3R1cmUgb2YgdGhpcyBldmVudCBpcy5cclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25fYmxlX2F2YWlsYWJsZShoYXNfYmxlKSB7XHJcbiAgICAgICAgdGhpcy5ibGVfcGFpcl9idXR0b24uZGlzYWJsZWQgPSAhaGFzX2JsZTtcclxuICAgICAgICBpZiAoaGFzX2JsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJsZV9wYWlyX3N0YXR1cy5pbm5lckhUTUwgPSBcIk5vdCBjb25uZWN0ZWQuXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ibGVfcGFpcl9zdGF0dXMuaW5uZXJIVE1MID0gXCJOb3QgYXZhaWxhYmxlLlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbl9kaXNjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMuYmxlX3BhaXJfc3RhdHVzLmlubmVySFRNTCA9IFwiRGlzY29ubmVjdGVkLlwiO1xyXG4gICAgICAgIHRoaXMuYmxlX3BhaXJfYnV0dG9uLmlubmVySFRNTCA9IFwiUGFpclwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gQW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcy5cclxuZXhwb3J0IGxldCBjZWxsX2JvdF9ibGVfZ3VpO1xyXG5cclxuLy8gSGFuZGxlclxyXG4vLyA9PT09PT09XHJcbi8vIFRoaXMgbXVzdCBiZSBpbnZva2VkIHdoZW4gdGhlIERPTSBpcyByZWFkeSwgYmVmb3JlIGNhbGxpbmcgYW55IG90aGVyIGZ1bmN0aW9uIGluIHRoaXMgZmlsZS5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgY2VsbF9ib3RfYmxlX2d1aSA9IG5ldyBDZWxsQm90QmxlR3VpKFwiYmxlX3BhaXJfYnV0dG9uXCIsIFwiYmxlX3BhaXJfc3RhdHVzXCIpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==