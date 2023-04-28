(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_common_js_runestonebase_js"],{

/***/ 2568:
/*!**********************************************!*\
  !*** ./runestone/common/js/runestonebase.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RunestoneBase)
/* harmony export */ });
/* harmony import */ var _bookfuncs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookfuncs.js */ 21294);
/* ********************************
 * |docname| - Runestone Base Class
 * ********************************
 * All runestone components should inherit from RunestoneBase. In addition all runestone components should do the following things:
 *
 * 1.   Ensure that they are wrapped in a div with the class runestone
 * 2.   Write their source AND their generated html to the database if the database is configured
 * 3.   Properly save and restore their answers using the checkServer mechanism in this base class. Each component must provide an implementation of:
 *
 *      -    checkLocalStorage
 *      -    setLocalStorage
 *      -    restoreAnswers
 *      -    disableInteraction
 *
 * 4.   provide a Selenium based unit test
 */


//import "./../styles/runestone-custom-sphinx-bootstrap.css";

class RunestoneBase {
    constructor(opts) {
        this.component_ready_promise = new Promise(resolve => this._component_ready_resolve_fn = resolve)
        this.optional = false;
        if (opts) {
            this.sid = opts.sid;
            this.graderactive = opts.graderactive;
            this.showfeedback = true;
            if (opts.timed) {
                this.isTimed = true;
            }
            if (opts.enforceDeadline) {
                this.deadline = opts.deadline;
            }
            if ($(opts.orig).data("optional")) {
                this.optional = true;
            } else {
                this.optional = false;
            }
            if (opts.selector_id) {
                this.selector_id = opts.selector_id;
            }
            if (typeof opts.assessmentTaken !== "undefined") {
                this.assessmentTaken = opts.assessmentTaken;
            } else {
                // default to true as this opt is only provided from a timedAssessment
                this.assessmentTaken = true;
            }
            // This is for the selectquestion points
            // If a selectquestion is part of a timed exam it will get
            // the timedWrapper options.
            if (typeof opts.timedWrapper !== "undefined") {
                this.timedWrapper = opts.timedWrapper;
            } else {
                // However sometimes selectquestions
                // are used in regular assignments.  The hacky way to detect this
                // is to look for doAssignment in the URL and then grab
                // the assignment name from the heading.
                if (location.href.indexOf("doAssignment") >= 0) {
                    this.timedWrapper = $("h1#assignment_name").text()
                } else {
                    this.timedWrapper = null;
                }
            }
            if ($(opts.orig).data("question_label")) {
                this.question_label = $(opts.orig).data("question_label");
            }
        }
        this.jsonHeaders = new Headers({
            "Content-type": "application/json; charset=utf-8",
            Accept: "application/json",
        });
    }

    // .. _logBookEvent:
    //
    // logBookEvent
    // ------------
    // This function sends the provided ``eventInfo`` to the `hsblog endpoint` of the server. Awaiting this function returns either ``undefined`` (if Runestone services are not available) or the data returned by the server as a JavaScript object (already JSON-decoded).
    async logBookEvent(eventInfo) {
        if (this.graderactive) {
            return;
        }
        let post_return;
        eventInfo.course = eBookConfig.course;
        eventInfo.clientLoginStatus = eBookConfig.isLoggedIn;
        eventInfo.timezoneoffset = new Date().getTimezoneOffset() / 60;
        if (this.percent) {
            eventInfo.percent = this.percent;
        }
        if (eBookConfig.useRunestoneServices && eBookConfig.logLevel > 0) {
            let request = new Request(eBookConfig.ajaxURL + "hsblog", {
                method: "POST",
                headers: this.jsonHeaders,
                body: JSON.stringify(eventInfo),
            });
            try {
                let response = await fetch(request);
                if (!response.ok) {
                    throw new Error("Failed to save the log entry");
                }
                post_return = response.json();
            } catch (e) {
                if (this.isTimed) {
                    alert(`Error: Your action was not saved! The error was ${e}`);
                }
                console.log(`Error: ${e}`);
            }
        }
        if (!this.isTimed || eBookConfig.debug) {
            console.log("logging event " + JSON.stringify(eventInfo));
        }
        if (
            typeof _bookfuncs_js__WEBPACK_IMPORTED_MODULE_0__.pageProgressTracker.updateProgress === "function" &&
            eventInfo.act != "edit" &&
            this.optional == false
        ) {
            _bookfuncs_js__WEBPACK_IMPORTED_MODULE_0__.pageProgressTracker.updateProgress(eventInfo.div_id);
        }
        return post_return;
    }

    // .. _logRunEvent:
    //
    // logRunEvent
    // -----------
    // This function sends the provided ``eventInfo`` to the `runlog endpoint`. When awaited, this function returns the data (decoded from JSON) the server sent back.
    async logRunEvent(eventInfo) {
        let post_promise = "done";
        if (this.graderactive) {
            return;
        }
        eventInfo.course = eBookConfig.course;
        eventInfo.clientLoginStatus = eBookConfig.isLoggedIn;
        eventInfo.timezoneoffset = new Date().getTimezoneOffset() / 60;
        if (this.forceSave || "to_save" in eventInfo === false) {
            eventInfo.save_code = "True";
        }
        if (eBookConfig.useRunestoneServices && eBookConfig.logLevel > 0) {
            let request = new Request(eBookConfig.ajaxURL + "runlog.json", {
                method: "POST",
                headers: this.jsonHeaders,
                body: JSON.stringify(eventInfo),
            });
            let response = await fetch(request);
            if (!response.ok) {
                throw new Error("Failed to log the run");
            }
            post_promise = await response.json();
        }
        if (!this.isTimed || eBookConfig.debug) {
            console.log("running " + JSON.stringify(eventInfo));
        }
        if (
            typeof _bookfuncs_js__WEBPACK_IMPORTED_MODULE_0__.pageProgressTracker.updateProgress === "function" &&
            this.optional == false
        ) {
            _bookfuncs_js__WEBPACK_IMPORTED_MODULE_0__.pageProgressTracker.updateProgress(eventInfo.div_id);
        }
        return post_promise;
    }
    /* Checking/loading from storage
    **WARNING:**  DO NOT `await` this function!
    This function, although async, does not explicitly resolve its promise by returning a value.  The reason for this is because it is called by the constructor for nearly every component.  In Javascript constructors cannot be async!

    One of the recommended ways to handle the async requirements from within a constructor is to use an attribute as a promise and resolve that attribute at the appropriate time.
    */
    async checkServer(
        // A string specifying the event name to use for querying the :ref:`getAssessResults` endpoint.
        eventInfo,
        // If true, this function will invoke ``indicate_component_ready()`` just before it returns. This is provided since most components are ready after this function completes its work.
        //
        // TODO: This defaults to false, to avoid causing problems with any components that haven't been updated and tested. After all Runestone components have been updated, default this to true and remove the extra parameter from most calls to this function.
        will_be_ready = false
    ) {
        // Check if the server has stored answer
        let self = this;
        this.checkServerComplete = new Promise(function (resolve, reject) {
            self.csresolver = resolve;
        });
        if (this.useRunestoneServices || this.graderactive) {
            let data = {};
            data.div_id = this.divid;
            data.course = eBookConfig.course;
            data.event = eventInfo;
            if (this.graderactive && this.deadline) {
                data.deadline = this.deadline;
                data.rawdeadline = this.rawdeadline;
                data.tzoff = this.tzoff;
            }
            if (this.sid) {
                data.sid = this.sid;
            }
            if (!eBookConfig.practice_mode && this.assessmentTaken) {
                let request = new Request(
                    eBookConfig.ajaxURL + "getAssessResults",
                    {
                        method: "POST",
                        body: JSON.stringify(data),
                        headers: this.jsonHeaders,
                    }
                );
                try {
                    let response = await fetch(request);
                    data = await response.json();
                    this.repopulateFromStorage(data);
                    this.csresolver("server");
                } catch (err) {
                    try {
                        this.checkLocalStorage();
                    } catch (err) {
                        console.log(err);
                    }
                }
            } else {
                this.loadData({});
                this.csresolver("not taken");
            }
        } else {
            this.checkLocalStorage(); // just go right to local storage
            this.csresolver("local");
        }

        if (will_be_ready) {
            this.indicate_component_ready();
        }
    }

    // This method assumes that ``this.componentDiv`` refers to the ``div`` containing the component, and that this component's ID is set.
    indicate_component_ready() {
        // Add a class to indicate the component is now ready.
        this.containerDiv.classList.add("runestone-component-ready");
        // Resolve the ``this.component_ready_promise``.
        this._component_ready_resolve_fn();
    }

    loadData(data) {
        // for most classes, loadData doesn't do anything. But for Parsons, and perhaps others in the future,
        // initialization can happen even when there's no history to be loaded
        return null;
    }

    /**
     * repopulateFromStorage is called after a successful API call is made to ``getAssessResults`` in
     * the checkServer method in this class
     *
     * ``restoreAnswers,`` ``setLocalStorage`` and ``checkLocalStorage`` are defined in the child classes.
     *
     * @param {*} data - a JSON object representing the data needed to restore a previous answer for a component
     * @param {*} status - the http status
     * @param {*} whatever - ignored
     */
    repopulateFromStorage(data) {
        // decide whether to use the server's answer (if there is one) or to load from storage
        if (data !== null && this.shouldUseServer(data)) {
            this.restoreAnswers(data);
            this.setLocalStorage(data);
        } else {
            this.checkLocalStorage();
        }
    }
    shouldUseServer(data) {
        // returns true if server data is more recent than local storage or if server storage is correct
        if (
            data.correct === "T" ||
            localStorage.length === 0 ||
            this.graderactive === true ||
            this.isTimed
        ) {
            return true;
        }
        let ex = localStorage.getItem(this.localStorageKey());
        if (ex === null) {
            return true;
        }
        let storedData;
        try {
            storedData = JSON.parse(ex);
        } catch (err) {
            // error while parsing; likely due to bad value stored in storage
            console.log(err.message);
            localStorage.removeItem(this.localStorageKey());
            // definitely don't want to use local storage here
            return true;
        }
        if (data.answer == storedData.answer) return true;
        let storageDate = new Date(storedData.timestamp);
        let serverDate = new Date(data.timestamp);
        return serverDate >= storageDate;
    }
    // Return the key which to be used when accessing local storage.
    localStorageKey() {
        return (
            eBookConfig.email +
            ":" +
            eBookConfig.course +
            ":" +
            this.divid +
            "-given"
        );
    }
    addCaption(elType) {
        //someElement.parentNode.insertBefore(newElement, someElement.nextSibling);
        if (!this.isTimed) {
            var capDiv = document.createElement("p");
            if (this.question_label) {
                this.caption = `Activity: ${this.question_label} ${this.caption}  <span class="runestone_caption_divid">(${this.divid})</span>`;
                $(capDiv).html(this.caption);
                $(capDiv).addClass(`${elType}_caption`);
            } else {
                $(capDiv).html(this.caption + " (" + this.divid + ")");
                $(capDiv).addClass(`${elType}_caption`);
                $(capDiv).addClass(`${elType}_caption_text`);
            }
            this.capDiv = capDiv;
            //this.outerDiv.parentNode.insertBefore(capDiv, this.outerDiv.nextSibling);
            this.containerDiv.appendChild(capDiv);
        }
    }

    hasUserActivity() {
        return this.isAnswered;
    }

    checkCurrentAnswer() {
        console.log(
            "Each component should provide an implementation of checkCurrentAnswer"
        );
    }

    async logCurrentAnswer() {
        console.log(
            "Each component should provide an implementation of logCurrentAnswer"
        );
    }
    renderFeedback() {
        console.log(
            "Each component should provide an implementation of renderFeedback"
        );
    }
    disableInteraction() {
        console.log(
            "Each component should provide an implementation of disableInteraction"
        );
    }
}

window.RunestoneBase = RunestoneBase;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NvbW1vbi9qcy9ydW5lc3RvbmViYXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFEO0FBQ3JEOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDZFQUE2RSxFQUFFO0FBQy9FO0FBQ0Esc0NBQXNDLEVBQUU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZFQUFrQztBQUNyRDtBQUNBO0FBQ0E7QUFDQSxZQUFZLDZFQUFrQztBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZFQUFrQztBQUNyRDtBQUNBO0FBQ0EsWUFBWSw2RUFBa0M7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQztBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCLGVBQWUsRUFBRTtBQUNqQixlQUFlLEVBQUU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsb0JBQW9CLEdBQUcsYUFBYSwyQ0FBMkMsV0FBVztBQUN0STtBQUNBLHNDQUFzQyxPQUFPO0FBQzdDLGFBQWE7QUFDYjtBQUNBLHNDQUFzQyxPQUFPO0FBQzdDLHNDQUFzQyxPQUFPO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJydW5lc3RvbmVfY29tbW9uX2pzX3J1bmVzdG9uZWJhc2VfanMuYnVuZGxlLmpzP3Y9ZTk5YjE0MDYzODZkYzRjMDU3MzEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiB8ZG9jbmFtZXwgLSBSdW5lc3RvbmUgQmFzZSBDbGFzc1xyXG4gKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBBbGwgcnVuZXN0b25lIGNvbXBvbmVudHMgc2hvdWxkIGluaGVyaXQgZnJvbSBSdW5lc3RvbmVCYXNlLiBJbiBhZGRpdGlvbiBhbGwgcnVuZXN0b25lIGNvbXBvbmVudHMgc2hvdWxkIGRvIHRoZSBmb2xsb3dpbmcgdGhpbmdzOlxyXG4gKlxyXG4gKiAxLiAgIEVuc3VyZSB0aGF0IHRoZXkgYXJlIHdyYXBwZWQgaW4gYSBkaXYgd2l0aCB0aGUgY2xhc3MgcnVuZXN0b25lXHJcbiAqIDIuICAgV3JpdGUgdGhlaXIgc291cmNlIEFORCB0aGVpciBnZW5lcmF0ZWQgaHRtbCB0byB0aGUgZGF0YWJhc2UgaWYgdGhlIGRhdGFiYXNlIGlzIGNvbmZpZ3VyZWRcclxuICogMy4gICBQcm9wZXJseSBzYXZlIGFuZCByZXN0b3JlIHRoZWlyIGFuc3dlcnMgdXNpbmcgdGhlIGNoZWNrU2VydmVyIG1lY2hhbmlzbSBpbiB0aGlzIGJhc2UgY2xhc3MuIEVhY2ggY29tcG9uZW50IG11c3QgcHJvdmlkZSBhbiBpbXBsZW1lbnRhdGlvbiBvZjpcclxuICpcclxuICogICAgICAtICAgIGNoZWNrTG9jYWxTdG9yYWdlXHJcbiAqICAgICAgLSAgICBzZXRMb2NhbFN0b3JhZ2VcclxuICogICAgICAtICAgIHJlc3RvcmVBbnN3ZXJzXHJcbiAqICAgICAgLSAgICBkaXNhYmxlSW50ZXJhY3Rpb25cclxuICpcclxuICogNC4gICBwcm92aWRlIGEgU2VsZW5pdW0gYmFzZWQgdW5pdCB0ZXN0XHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgcGFnZVByb2dyZXNzVHJhY2tlciB9IGZyb20gXCIuL2Jvb2tmdW5jcy5qc1wiO1xyXG4vL2ltcG9ydCBcIi4vLi4vc3R5bGVzL3J1bmVzdG9uZS1jdXN0b20tc3BoaW54LWJvb3RzdHJhcC5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bmVzdG9uZUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50X3JlYWR5X3Byb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHRoaXMuX2NvbXBvbmVudF9yZWFkeV9yZXNvbHZlX2ZuID0gcmVzb2x2ZSlcclxuICAgICAgICB0aGlzLm9wdGlvbmFsID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKG9wdHMpIHtcclxuICAgICAgICAgICAgdGhpcy5zaWQgPSBvcHRzLnNpZDtcclxuICAgICAgICAgICAgdGhpcy5ncmFkZXJhY3RpdmUgPSBvcHRzLmdyYWRlcmFjdGl2ZTtcclxuICAgICAgICAgICAgdGhpcy5zaG93ZmVlZGJhY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAob3B0cy50aW1lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RpbWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob3B0cy5lbmZvcmNlRGVhZGxpbmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVhZGxpbmUgPSBvcHRzLmRlYWRsaW5lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgkKG9wdHMub3JpZykuZGF0YShcIm9wdGlvbmFsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbmFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob3B0cy5zZWxlY3Rvcl9pZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rvcl9pZCA9IG9wdHMuc2VsZWN0b3JfaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRzLmFzc2Vzc21lbnRUYWtlbiAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hc3Nlc3NtZW50VGFrZW4gPSBvcHRzLmFzc2Vzc21lbnRUYWtlbjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHQgdG8gdHJ1ZSBhcyB0aGlzIG9wdCBpcyBvbmx5IHByb3ZpZGVkIGZyb20gYSB0aW1lZEFzc2Vzc21lbnRcclxuICAgICAgICAgICAgICAgIHRoaXMuYXNzZXNzbWVudFRha2VuID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGZvciB0aGUgc2VsZWN0cXVlc3Rpb24gcG9pbnRzXHJcbiAgICAgICAgICAgIC8vIElmIGEgc2VsZWN0cXVlc3Rpb24gaXMgcGFydCBvZiBhIHRpbWVkIGV4YW0gaXQgd2lsbCBnZXRcclxuICAgICAgICAgICAgLy8gdGhlIHRpbWVkV3JhcHBlciBvcHRpb25zLlxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdHMudGltZWRXcmFwcGVyICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVkV3JhcHBlciA9IG9wdHMudGltZWRXcmFwcGVyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gSG93ZXZlciBzb21ldGltZXMgc2VsZWN0cXVlc3Rpb25zXHJcbiAgICAgICAgICAgICAgICAvLyBhcmUgdXNlZCBpbiByZWd1bGFyIGFzc2lnbm1lbnRzLiAgVGhlIGhhY2t5IHdheSB0byBkZXRlY3QgdGhpc1xyXG4gICAgICAgICAgICAgICAgLy8gaXMgdG8gbG9vayBmb3IgZG9Bc3NpZ25tZW50IGluIHRoZSBVUkwgYW5kIHRoZW4gZ3JhYlxyXG4gICAgICAgICAgICAgICAgLy8gdGhlIGFzc2lnbm1lbnQgbmFtZSBmcm9tIHRoZSBoZWFkaW5nLlxyXG4gICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uLmhyZWYuaW5kZXhPZihcImRvQXNzaWdubWVudFwiKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lZFdyYXBwZXIgPSAkKFwiaDEjYXNzaWdubWVudF9uYW1lXCIpLnRleHQoKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVkV3JhcHBlciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCQob3B0cy5vcmlnKS5kYXRhKFwicXVlc3Rpb25fbGFiZWxcIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25fbGFiZWwgPSAkKG9wdHMub3JpZykuZGF0YShcInF1ZXN0aW9uX2xhYmVsXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuanNvbkhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC4uIF9sb2dCb29rRXZlbnQ6XHJcbiAgICAvL1xyXG4gICAgLy8gbG9nQm9va0V2ZW50XHJcbiAgICAvLyAtLS0tLS0tLS0tLS1cclxuICAgIC8vIFRoaXMgZnVuY3Rpb24gc2VuZHMgdGhlIHByb3ZpZGVkIGBgZXZlbnRJbmZvYGAgdG8gdGhlIGBoc2Jsb2cgZW5kcG9pbnRgIG9mIHRoZSBzZXJ2ZXIuIEF3YWl0aW5nIHRoaXMgZnVuY3Rpb24gcmV0dXJucyBlaXRoZXIgYGB1bmRlZmluZWRgYCAoaWYgUnVuZXN0b25lIHNlcnZpY2VzIGFyZSBub3QgYXZhaWxhYmxlKSBvciB0aGUgZGF0YSByZXR1cm5lZCBieSB0aGUgc2VydmVyIGFzIGEgSmF2YVNjcmlwdCBvYmplY3QgKGFscmVhZHkgSlNPTi1kZWNvZGVkKS5cclxuICAgIGFzeW5jIGxvZ0Jvb2tFdmVudChldmVudEluZm8pIHtcclxuICAgICAgICBpZiAodGhpcy5ncmFkZXJhY3RpdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcG9zdF9yZXR1cm47XHJcbiAgICAgICAgZXZlbnRJbmZvLmNvdXJzZSA9IGVCb29rQ29uZmlnLmNvdXJzZTtcclxuICAgICAgICBldmVudEluZm8uY2xpZW50TG9naW5TdGF0dXMgPSBlQm9va0NvbmZpZy5pc0xvZ2dlZEluO1xyXG4gICAgICAgIGV2ZW50SW5mby50aW1lem9uZW9mZnNldCA9IG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAvIDYwO1xyXG4gICAgICAgIGlmICh0aGlzLnBlcmNlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnRJbmZvLnBlcmNlbnQgPSB0aGlzLnBlcmNlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlQm9va0NvbmZpZy51c2VSdW5lc3RvbmVTZXJ2aWNlcyAmJiBlQm9va0NvbmZpZy5sb2dMZXZlbCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdChlQm9va0NvbmZpZy5hamF4VVJMICsgXCJoc2Jsb2dcIiwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuanNvbkhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShldmVudEluZm8pLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBzYXZlIHRoZSBsb2cgZW50cnlcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwb3N0X3JldHVybiA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNUaW1lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGBFcnJvcjogWW91ciBhY3Rpb24gd2FzIG5vdCBzYXZlZCEgVGhlIGVycm9yIHdhcyAke2V9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7ZX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuaXNUaW1lZCB8fCBlQm9va0NvbmZpZy5kZWJ1Zykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2dpbmcgZXZlbnQgXCIgKyBKU09OLnN0cmluZ2lmeShldmVudEluZm8pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0eXBlb2YgcGFnZVByb2dyZXNzVHJhY2tlci51cGRhdGVQcm9ncmVzcyA9PT0gXCJmdW5jdGlvblwiICYmXHJcbiAgICAgICAgICAgIGV2ZW50SW5mby5hY3QgIT0gXCJlZGl0XCIgJiZcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25hbCA9PSBmYWxzZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBwYWdlUHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZVByb2dyZXNzKGV2ZW50SW5mby5kaXZfaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zdF9yZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLi4gX2xvZ1J1bkV2ZW50OlxyXG4gICAgLy9cclxuICAgIC8vIGxvZ1J1bkV2ZW50XHJcbiAgICAvLyAtLS0tLS0tLS0tLVxyXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBzZW5kcyB0aGUgcHJvdmlkZWQgYGBldmVudEluZm9gYCB0byB0aGUgYHJ1bmxvZyBlbmRwb2ludGAuIFdoZW4gYXdhaXRlZCwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBkYXRhIChkZWNvZGVkIGZyb20gSlNPTikgdGhlIHNlcnZlciBzZW50IGJhY2suXHJcbiAgICBhc3luYyBsb2dSdW5FdmVudChldmVudEluZm8pIHtcclxuICAgICAgICBsZXQgcG9zdF9wcm9taXNlID0gXCJkb25lXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuZ3JhZGVyYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZlbnRJbmZvLmNvdXJzZSA9IGVCb29rQ29uZmlnLmNvdXJzZTtcclxuICAgICAgICBldmVudEluZm8uY2xpZW50TG9naW5TdGF0dXMgPSBlQm9va0NvbmZpZy5pc0xvZ2dlZEluO1xyXG4gICAgICAgIGV2ZW50SW5mby50aW1lem9uZW9mZnNldCA9IG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAvIDYwO1xyXG4gICAgICAgIGlmICh0aGlzLmZvcmNlU2F2ZSB8fCBcInRvX3NhdmVcIiBpbiBldmVudEluZm8gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGV2ZW50SW5mby5zYXZlX2NvZGUgPSBcIlRydWVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVCb29rQ29uZmlnLnVzZVJ1bmVzdG9uZVNlcnZpY2VzICYmIGVCb29rQ29uZmlnLmxvZ0xldmVsID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGVCb29rQ29uZmlnLmFqYXhVUkwgKyBcInJ1bmxvZy5qc29uXCIsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmpzb25IZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZXZlbnRJbmZvKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3QpO1xyXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gbG9nIHRoZSBydW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcG9zdF9wcm9taXNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuaXNUaW1lZCB8fCBlQm9va0NvbmZpZy5kZWJ1Zykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJ1bm5pbmcgXCIgKyBKU09OLnN0cmluZ2lmeShldmVudEluZm8pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0eXBlb2YgcGFnZVByb2dyZXNzVHJhY2tlci51cGRhdGVQcm9ncmVzcyA9PT0gXCJmdW5jdGlvblwiICYmXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uYWwgPT0gZmFsc2VcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcGFnZVByb2dyZXNzVHJhY2tlci51cGRhdGVQcm9ncmVzcyhldmVudEluZm8uZGl2X2lkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvc3RfcHJvbWlzZTtcclxuICAgIH1cclxuICAgIC8qIENoZWNraW5nL2xvYWRpbmcgZnJvbSBzdG9yYWdlXHJcbiAgICAqKldBUk5JTkc6KiogIERPIE5PVCBgYXdhaXRgIHRoaXMgZnVuY3Rpb24hXHJcbiAgICBUaGlzIGZ1bmN0aW9uLCBhbHRob3VnaCBhc3luYywgZG9lcyBub3QgZXhwbGljaXRseSByZXNvbHZlIGl0cyBwcm9taXNlIGJ5IHJldHVybmluZyBhIHZhbHVlLiAgVGhlIHJlYXNvbiBmb3IgdGhpcyBpcyBiZWNhdXNlIGl0IGlzIGNhbGxlZCBieSB0aGUgY29uc3RydWN0b3IgZm9yIG5lYXJseSBldmVyeSBjb21wb25lbnQuICBJbiBKYXZhc2NyaXB0IGNvbnN0cnVjdG9ycyBjYW5ub3QgYmUgYXN5bmMhXHJcblxyXG4gICAgT25lIG9mIHRoZSByZWNvbW1lbmRlZCB3YXlzIHRvIGhhbmRsZSB0aGUgYXN5bmMgcmVxdWlyZW1lbnRzIGZyb20gd2l0aGluIGEgY29uc3RydWN0b3IgaXMgdG8gdXNlIGFuIGF0dHJpYnV0ZSBhcyBhIHByb21pc2UgYW5kIHJlc29sdmUgdGhhdCBhdHRyaWJ1dGUgYXQgdGhlIGFwcHJvcHJpYXRlIHRpbWUuXHJcbiAgICAqL1xyXG4gICAgYXN5bmMgY2hlY2tTZXJ2ZXIoXHJcbiAgICAgICAgLy8gQSBzdHJpbmcgc3BlY2lmeWluZyB0aGUgZXZlbnQgbmFtZSB0byB1c2UgZm9yIHF1ZXJ5aW5nIHRoZSA6cmVmOmBnZXRBc3Nlc3NSZXN1bHRzYCBlbmRwb2ludC5cclxuICAgICAgICBldmVudEluZm8sXHJcbiAgICAgICAgLy8gSWYgdHJ1ZSwgdGhpcyBmdW5jdGlvbiB3aWxsIGludm9rZSBgYGluZGljYXRlX2NvbXBvbmVudF9yZWFkeSgpYGAganVzdCBiZWZvcmUgaXQgcmV0dXJucy4gVGhpcyBpcyBwcm92aWRlZCBzaW5jZSBtb3N0IGNvbXBvbmVudHMgYXJlIHJlYWR5IGFmdGVyIHRoaXMgZnVuY3Rpb24gY29tcGxldGVzIGl0cyB3b3JrLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gVE9ETzogVGhpcyBkZWZhdWx0cyB0byBmYWxzZSwgdG8gYXZvaWQgY2F1c2luZyBwcm9ibGVtcyB3aXRoIGFueSBjb21wb25lbnRzIHRoYXQgaGF2ZW4ndCBiZWVuIHVwZGF0ZWQgYW5kIHRlc3RlZC4gQWZ0ZXIgYWxsIFJ1bmVzdG9uZSBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLCBkZWZhdWx0IHRoaXMgdG8gdHJ1ZSBhbmQgcmVtb3ZlIHRoZSBleHRyYSBwYXJhbWV0ZXIgZnJvbSBtb3N0IGNhbGxzIHRvIHRoaXMgZnVuY3Rpb24uXHJcbiAgICAgICAgd2lsbF9iZV9yZWFkeSA9IGZhbHNlXHJcbiAgICApIHtcclxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgc2VydmVyIGhhcyBzdG9yZWQgYW5zd2VyXHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY2hlY2tTZXJ2ZXJDb21wbGV0ZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgc2VsZi5jc3Jlc29sdmVyID0gcmVzb2x2ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy51c2VSdW5lc3RvbmVTZXJ2aWNlcyB8fCB0aGlzLmdyYWRlcmFjdGl2ZSkge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICBkYXRhLmRpdl9pZCA9IHRoaXMuZGl2aWQ7XHJcbiAgICAgICAgICAgIGRhdGEuY291cnNlID0gZUJvb2tDb25maWcuY291cnNlO1xyXG4gICAgICAgICAgICBkYXRhLmV2ZW50ID0gZXZlbnRJbmZvO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ncmFkZXJhY3RpdmUgJiYgdGhpcy5kZWFkbGluZSkge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5kZWFkbGluZSA9IHRoaXMuZGVhZGxpbmU7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnJhd2RlYWRsaW5lID0gdGhpcy5yYXdkZWFkbGluZTtcclxuICAgICAgICAgICAgICAgIGRhdGEudHpvZmYgPSB0aGlzLnR6b2ZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNpZCkge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5zaWQgPSB0aGlzLnNpZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWVCb29rQ29uZmlnLnByYWN0aWNlX21vZGUgJiYgdGhpcy5hc3Nlc3NtZW50VGFrZW4pIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoXHJcbiAgICAgICAgICAgICAgICAgICAgZUJvb2tDb25maWcuYWpheFVSTCArIFwiZ2V0QXNzZXNzUmVzdWx0c1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuanNvbkhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcG9wdWxhdGVGcm9tU3RvcmFnZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNzcmVzb2x2ZXIoXCJzZXJ2ZXJcIik7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSh7fSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNzcmVzb2x2ZXIoXCJub3QgdGFrZW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrTG9jYWxTdG9yYWdlKCk7IC8vIGp1c3QgZ28gcmlnaHQgdG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgICAgICB0aGlzLmNzcmVzb2x2ZXIoXCJsb2NhbFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh3aWxsX2JlX3JlYWR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kaWNhdGVfY29tcG9uZW50X3JlYWR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoaXMgbWV0aG9kIGFzc3VtZXMgdGhhdCBgYHRoaXMuY29tcG9uZW50RGl2YGAgcmVmZXJzIHRvIHRoZSBgYGRpdmBgIGNvbnRhaW5pbmcgdGhlIGNvbXBvbmVudCwgYW5kIHRoYXQgdGhpcyBjb21wb25lbnQncyBJRCBpcyBzZXQuXHJcbiAgICBpbmRpY2F0ZV9jb21wb25lbnRfcmVhZHkoKSB7XHJcbiAgICAgICAgLy8gQWRkIGEgY2xhc3MgdG8gaW5kaWNhdGUgdGhlIGNvbXBvbmVudCBpcyBub3cgcmVhZHkuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZChcInJ1bmVzdG9uZS1jb21wb25lbnQtcmVhZHlcIik7XHJcbiAgICAgICAgLy8gUmVzb2x2ZSB0aGUgYGB0aGlzLmNvbXBvbmVudF9yZWFkeV9wcm9taXNlYGAuXHJcbiAgICAgICAgdGhpcy5fY29tcG9uZW50X3JlYWR5X3Jlc29sdmVfZm4oKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkRGF0YShkYXRhKSB7XHJcbiAgICAgICAgLy8gZm9yIG1vc3QgY2xhc3NlcywgbG9hZERhdGEgZG9lc24ndCBkbyBhbnl0aGluZy4gQnV0IGZvciBQYXJzb25zLCBhbmQgcGVyaGFwcyBvdGhlcnMgaW4gdGhlIGZ1dHVyZSxcclxuICAgICAgICAvLyBpbml0aWFsaXphdGlvbiBjYW4gaGFwcGVuIGV2ZW4gd2hlbiB0aGVyZSdzIG5vIGhpc3RvcnkgdG8gYmUgbG9hZGVkXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXBvcHVsYXRlRnJvbVN0b3JhZ2UgaXMgY2FsbGVkIGFmdGVyIGEgc3VjY2Vzc2Z1bCBBUEkgY2FsbCBpcyBtYWRlIHRvIGBgZ2V0QXNzZXNzUmVzdWx0c2BgIGluXHJcbiAgICAgKiB0aGUgY2hlY2tTZXJ2ZXIgbWV0aG9kIGluIHRoaXMgY2xhc3NcclxuICAgICAqXHJcbiAgICAgKiBgYHJlc3RvcmVBbnN3ZXJzLGBgIGBgc2V0TG9jYWxTdG9yYWdlYGAgYW5kIGBgY2hlY2tMb2NhbFN0b3JhZ2VgYCBhcmUgZGVmaW5lZCBpbiB0aGUgY2hpbGQgY2xhc3Nlcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0geyp9IGRhdGEgLSBhIEpTT04gb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgZGF0YSBuZWVkZWQgdG8gcmVzdG9yZSBhIHByZXZpb3VzIGFuc3dlciBmb3IgYSBjb21wb25lbnRcclxuICAgICAqIEBwYXJhbSB7Kn0gc3RhdHVzIC0gdGhlIGh0dHAgc3RhdHVzXHJcbiAgICAgKiBAcGFyYW0geyp9IHdoYXRldmVyIC0gaWdub3JlZFxyXG4gICAgICovXHJcbiAgICByZXBvcHVsYXRlRnJvbVN0b3JhZ2UoZGF0YSkge1xyXG4gICAgICAgIC8vIGRlY2lkZSB3aGV0aGVyIHRvIHVzZSB0aGUgc2VydmVyJ3MgYW5zd2VyIChpZiB0aGVyZSBpcyBvbmUpIG9yIHRvIGxvYWQgZnJvbSBzdG9yYWdlXHJcbiAgICAgICAgaWYgKGRhdGEgIT09IG51bGwgJiYgdGhpcy5zaG91bGRVc2VTZXJ2ZXIoZGF0YSkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXN0b3JlQW5zd2VycyhkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UoZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNob3VsZFVzZVNlcnZlcihkYXRhKSB7XHJcbiAgICAgICAgLy8gcmV0dXJucyB0cnVlIGlmIHNlcnZlciBkYXRhIGlzIG1vcmUgcmVjZW50IHRoYW4gbG9jYWwgc3RvcmFnZSBvciBpZiBzZXJ2ZXIgc3RvcmFnZSBpcyBjb3JyZWN0XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBkYXRhLmNvcnJlY3QgPT09IFwiVFwiIHx8XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5sZW5ndGggPT09IDAgfHxcclxuICAgICAgICAgICAgdGhpcy5ncmFkZXJhY3RpdmUgPT09IHRydWUgfHxcclxuICAgICAgICAgICAgdGhpcy5pc1RpbWVkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZXggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSgpKTtcclxuICAgICAgICBpZiAoZXggPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzdG9yZWREYXRhO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHN0b3JlZERhdGEgPSBKU09OLnBhcnNlKGV4KTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgLy8gZXJyb3Igd2hpbGUgcGFyc2luZzsgbGlrZWx5IGR1ZSB0byBiYWQgdmFsdWUgc3RvcmVkIGluIHN0b3JhZ2VcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSgpKTtcclxuICAgICAgICAgICAgLy8gZGVmaW5pdGVseSBkb24ndCB3YW50IHRvIHVzZSBsb2NhbCBzdG9yYWdlIGhlcmVcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhLmFuc3dlciA9PSBzdG9yZWREYXRhLmFuc3dlcikgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgbGV0IHN0b3JhZ2VEYXRlID0gbmV3IERhdGUoc3RvcmVkRGF0YS50aW1lc3RhbXApO1xyXG4gICAgICAgIGxldCBzZXJ2ZXJEYXRlID0gbmV3IERhdGUoZGF0YS50aW1lc3RhbXApO1xyXG4gICAgICAgIHJldHVybiBzZXJ2ZXJEYXRlID49IHN0b3JhZ2VEYXRlO1xyXG4gICAgfVxyXG4gICAgLy8gUmV0dXJuIHRoZSBrZXkgd2hpY2ggdG8gYmUgdXNlZCB3aGVuIGFjY2Vzc2luZyBsb2NhbCBzdG9yYWdlLlxyXG4gICAgbG9jYWxTdG9yYWdlS2V5KCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGVCb29rQ29uZmlnLmVtYWlsICtcclxuICAgICAgICAgICAgXCI6XCIgK1xyXG4gICAgICAgICAgICBlQm9va0NvbmZpZy5jb3Vyc2UgK1xyXG4gICAgICAgICAgICBcIjpcIiArXHJcbiAgICAgICAgICAgIHRoaXMuZGl2aWQgK1xyXG4gICAgICAgICAgICBcIi1naXZlblwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGFkZENhcHRpb24oZWxUeXBlKSB7XHJcbiAgICAgICAgLy9zb21lRWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdFbGVtZW50LCBzb21lRWxlbWVudC5uZXh0U2libGluZyk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVGltZWQpIHtcclxuICAgICAgICAgICAgdmFyIGNhcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5xdWVzdGlvbl9sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXB0aW9uID0gYEFjdGl2aXR5OiAke3RoaXMucXVlc3Rpb25fbGFiZWx9ICR7dGhpcy5jYXB0aW9ufSAgPHNwYW4gY2xhc3M9XCJydW5lc3RvbmVfY2FwdGlvbl9kaXZpZFwiPigke3RoaXMuZGl2aWR9KTwvc3Bhbj5gO1xyXG4gICAgICAgICAgICAgICAgJChjYXBEaXYpLmh0bWwodGhpcy5jYXB0aW9uKTtcclxuICAgICAgICAgICAgICAgICQoY2FwRGl2KS5hZGRDbGFzcyhgJHtlbFR5cGV9X2NhcHRpb25gKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoY2FwRGl2KS5odG1sKHRoaXMuY2FwdGlvbiArIFwiIChcIiArIHRoaXMuZGl2aWQgKyBcIilcIik7XHJcbiAgICAgICAgICAgICAgICAkKGNhcERpdikuYWRkQ2xhc3MoYCR7ZWxUeXBlfV9jYXB0aW9uYCk7XHJcbiAgICAgICAgICAgICAgICAkKGNhcERpdikuYWRkQ2xhc3MoYCR7ZWxUeXBlfV9jYXB0aW9uX3RleHRgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNhcERpdiA9IGNhcERpdjtcclxuICAgICAgICAgICAgLy90aGlzLm91dGVyRGl2LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNhcERpdiwgdGhpcy5vdXRlckRpdi5uZXh0U2libGluZyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGNhcERpdik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhc1VzZXJBY3Rpdml0eSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0Fuc3dlcmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQ3VycmVudEFuc3dlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgXCJFYWNoIGNvbXBvbmVudCBzaG91bGQgcHJvdmlkZSBhbiBpbXBsZW1lbnRhdGlvbiBvZiBjaGVja0N1cnJlbnRBbnN3ZXJcIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbG9nQ3VycmVudEFuc3dlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgXCJFYWNoIGNvbXBvbmVudCBzaG91bGQgcHJvdmlkZSBhbiBpbXBsZW1lbnRhdGlvbiBvZiBsb2dDdXJyZW50QW5zd2VyXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyRmVlZGJhY2soKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIFwiRWFjaCBjb21wb25lbnQgc2hvdWxkIHByb3ZpZGUgYW4gaW1wbGVtZW50YXRpb24gb2YgcmVuZGVyRmVlZGJhY2tcIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBkaXNhYmxlSW50ZXJhY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIFwiRWFjaCBjb21wb25lbnQgc2hvdWxkIHByb3ZpZGUgYW4gaW1wbGVtZW50YXRpb24gb2YgZGlzYWJsZUludGVyYWN0aW9uXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cuUnVuZXN0b25lQmFzZSA9IFJ1bmVzdG9uZUJhc2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=