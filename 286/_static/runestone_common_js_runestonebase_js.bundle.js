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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NvbW1vbi9qcy9ydW5lc3RvbmViYXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFEO0FBQ3JEOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDZFQUE2RSxFQUFFO0FBQy9FO0FBQ0Esc0NBQXNDLEVBQUU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZFQUFrQztBQUNyRDtBQUNBO0FBQ0E7QUFDQSxZQUFZLDZFQUFrQztBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZFQUFrQztBQUNyRDtBQUNBO0FBQ0EsWUFBWSw2RUFBa0M7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQztBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCLGVBQWUsRUFBRTtBQUNqQixlQUFlLEVBQUU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsb0JBQW9CLEdBQUcsYUFBYSwyQ0FBMkMsV0FBVztBQUN0STtBQUNBLHNDQUFzQyxPQUFPO0FBQzdDLGFBQWE7QUFDYjtBQUNBLHNDQUFzQyxPQUFPO0FBQzdDLHNDQUFzQyxPQUFPO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJydW5lc3RvbmVfY29tbW9uX2pzX3J1bmVzdG9uZWJhc2VfanMuYnVuZGxlLmpzP3Y9Yzc1MjUwYWQwZGNjZWExOWJlYmYiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogfGRvY25hbWV8IC0gUnVuZXN0b25lIEJhc2UgQ2xhc3NcbiAqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBBbGwgcnVuZXN0b25lIGNvbXBvbmVudHMgc2hvdWxkIGluaGVyaXQgZnJvbSBSdW5lc3RvbmVCYXNlLiBJbiBhZGRpdGlvbiBhbGwgcnVuZXN0b25lIGNvbXBvbmVudHMgc2hvdWxkIGRvIHRoZSBmb2xsb3dpbmcgdGhpbmdzOlxuICpcbiAqIDEuICAgRW5zdXJlIHRoYXQgdGhleSBhcmUgd3JhcHBlZCBpbiBhIGRpdiB3aXRoIHRoZSBjbGFzcyBydW5lc3RvbmVcbiAqIDIuICAgV3JpdGUgdGhlaXIgc291cmNlIEFORCB0aGVpciBnZW5lcmF0ZWQgaHRtbCB0byB0aGUgZGF0YWJhc2UgaWYgdGhlIGRhdGFiYXNlIGlzIGNvbmZpZ3VyZWRcbiAqIDMuICAgUHJvcGVybHkgc2F2ZSBhbmQgcmVzdG9yZSB0aGVpciBhbnN3ZXJzIHVzaW5nIHRoZSBjaGVja1NlcnZlciBtZWNoYW5pc20gaW4gdGhpcyBiYXNlIGNsYXNzLiBFYWNoIGNvbXBvbmVudCBtdXN0IHByb3ZpZGUgYW4gaW1wbGVtZW50YXRpb24gb2Y6XG4gKlxuICogICAgICAtICAgIGNoZWNrTG9jYWxTdG9yYWdlXG4gKiAgICAgIC0gICAgc2V0TG9jYWxTdG9yYWdlXG4gKiAgICAgIC0gICAgcmVzdG9yZUFuc3dlcnNcbiAqICAgICAgLSAgICBkaXNhYmxlSW50ZXJhY3Rpb25cbiAqXG4gKiA0LiAgIHByb3ZpZGUgYSBTZWxlbml1bSBiYXNlZCB1bml0IHRlc3RcbiAqL1xuXG5pbXBvcnQgeyBwYWdlUHJvZ3Jlc3NUcmFja2VyIH0gZnJvbSBcIi4vYm9va2Z1bmNzLmpzXCI7XG4vL2ltcG9ydCBcIi4vLi4vc3R5bGVzL3J1bmVzdG9uZS1jdXN0b20tc3BoaW54LWJvb3RzdHJhcC5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVuZXN0b25lQmFzZSB7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICB0aGlzLmNvbXBvbmVudF9yZWFkeV9wcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB0aGlzLl9jb21wb25lbnRfcmVhZHlfcmVzb2x2ZV9mbiA9IHJlc29sdmUpXG4gICAgICAgIHRoaXMub3B0aW9uYWwgPSBmYWxzZTtcbiAgICAgICAgaWYgKG9wdHMpIHtcbiAgICAgICAgICAgIHRoaXMuc2lkID0gb3B0cy5zaWQ7XG4gICAgICAgICAgICB0aGlzLmdyYWRlcmFjdGl2ZSA9IG9wdHMuZ3JhZGVyYWN0aXZlO1xuICAgICAgICAgICAgdGhpcy5zaG93ZmVlZGJhY2sgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKG9wdHMudGltZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGltZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdHMuZW5mb3JjZURlYWRsaW5lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWFkbGluZSA9IG9wdHMuZGVhZGxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJChvcHRzLm9yaWcpLmRhdGEoXCJvcHRpb25hbFwiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uYWwgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbmFsID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0cy5zZWxlY3Rvcl9pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0b3JfaWQgPSBvcHRzLnNlbGVjdG9yX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRzLmFzc2Vzc21lbnRUYWtlbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuYXNzZXNzbWVudFRha2VuID0gb3B0cy5hc3Nlc3NtZW50VGFrZW47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHQgdG8gdHJ1ZSBhcyB0aGlzIG9wdCBpcyBvbmx5IHByb3ZpZGVkIGZyb20gYSB0aW1lZEFzc2Vzc21lbnRcbiAgICAgICAgICAgICAgICB0aGlzLmFzc2Vzc21lbnRUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUaGlzIGlzIGZvciB0aGUgc2VsZWN0cXVlc3Rpb24gcG9pbnRzXG4gICAgICAgICAgICAvLyBJZiBhIHNlbGVjdHF1ZXN0aW9uIGlzIHBhcnQgb2YgYSB0aW1lZCBleGFtIGl0IHdpbGwgZ2V0XG4gICAgICAgICAgICAvLyB0aGUgdGltZWRXcmFwcGVyIG9wdGlvbnMuXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdHMudGltZWRXcmFwcGVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lZFdyYXBwZXIgPSBvcHRzLnRpbWVkV3JhcHBlcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSG93ZXZlciBzb21ldGltZXMgc2VsZWN0cXVlc3Rpb25zXG4gICAgICAgICAgICAgICAgLy8gYXJlIHVzZWQgaW4gcmVndWxhciBhc3NpZ25tZW50cy4gIFRoZSBoYWNreSB3YXkgdG8gZGV0ZWN0IHRoaXNcbiAgICAgICAgICAgICAgICAvLyBpcyB0byBsb29rIGZvciBkb0Fzc2lnbm1lbnQgaW4gdGhlIFVSTCBhbmQgdGhlbiBncmFiXG4gICAgICAgICAgICAgICAgLy8gdGhlIGFzc2lnbm1lbnQgbmFtZSBmcm9tIHRoZSBoZWFkaW5nLlxuICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbi5ocmVmLmluZGV4T2YoXCJkb0Fzc2lnbm1lbnRcIikgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVkV3JhcHBlciA9ICQoXCJoMSNhc3NpZ25tZW50X25hbWVcIikudGV4dCgpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lZFdyYXBwZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgkKG9wdHMub3JpZykuZGF0YShcInF1ZXN0aW9uX2xhYmVsXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbl9sYWJlbCA9ICQob3B0cy5vcmlnKS5kYXRhKFwicXVlc3Rpb25fbGFiZWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5qc29uSGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gLi4gX2xvZ0Jvb2tFdmVudDpcbiAgICAvL1xuICAgIC8vIGxvZ0Jvb2tFdmVudFxuICAgIC8vIC0tLS0tLS0tLS0tLVxuICAgIC8vIFRoaXMgZnVuY3Rpb24gc2VuZHMgdGhlIHByb3ZpZGVkIGBgZXZlbnRJbmZvYGAgdG8gdGhlIGBoc2Jsb2cgZW5kcG9pbnRgIG9mIHRoZSBzZXJ2ZXIuIEF3YWl0aW5nIHRoaXMgZnVuY3Rpb24gcmV0dXJucyBlaXRoZXIgYGB1bmRlZmluZWRgYCAoaWYgUnVuZXN0b25lIHNlcnZpY2VzIGFyZSBub3QgYXZhaWxhYmxlKSBvciB0aGUgZGF0YSByZXR1cm5lZCBieSB0aGUgc2VydmVyIGFzIGEgSmF2YVNjcmlwdCBvYmplY3QgKGFscmVhZHkgSlNPTi1kZWNvZGVkKS5cbiAgICBhc3luYyBsb2dCb29rRXZlbnQoZXZlbnRJbmZvKSB7XG4gICAgICAgIGlmICh0aGlzLmdyYWRlcmFjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwb3N0X3JldHVybjtcbiAgICAgICAgZXZlbnRJbmZvLmNvdXJzZSA9IGVCb29rQ29uZmlnLmNvdXJzZTtcbiAgICAgICAgZXZlbnRJbmZvLmNsaWVudExvZ2luU3RhdHVzID0gZUJvb2tDb25maWcuaXNMb2dnZWRJbjtcbiAgICAgICAgZXZlbnRJbmZvLnRpbWV6b25lb2Zmc2V0ID0gbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpIC8gNjA7XG4gICAgICAgIGlmICh0aGlzLnBlcmNlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50SW5mby5wZXJjZW50ID0gdGhpcy5wZXJjZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlQm9va0NvbmZpZy51c2VSdW5lc3RvbmVTZXJ2aWNlcyAmJiBlQm9va0NvbmZpZy5sb2dMZXZlbCA+IDApIHtcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoZUJvb2tDb25maWcuYWpheFVSTCArIFwiaHNibG9nXCIsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuanNvbkhlYWRlcnMsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZXZlbnRJbmZvKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBzYXZlIHRoZSBsb2cgZW50cnlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBvc3RfcmV0dXJuID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVGltZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoYEVycm9yOiBZb3VyIGFjdGlvbiB3YXMgbm90IHNhdmVkISBUaGUgZXJyb3Igd2FzICR7ZX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiAke2V9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzVGltZWQgfHwgZUJvb2tDb25maWcuZGVidWcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9nZ2luZyBldmVudCBcIiArIEpTT04uc3RyaW5naWZ5KGV2ZW50SW5mbykpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBwYWdlUHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZVByb2dyZXNzID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgICAgIGV2ZW50SW5mby5hY3QgIT0gXCJlZGl0XCIgJiZcbiAgICAgICAgICAgIHRoaXMub3B0aW9uYWwgPT0gZmFsc2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBwYWdlUHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZVByb2dyZXNzKGV2ZW50SW5mby5kaXZfaWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3N0X3JldHVybjtcbiAgICB9XG5cbiAgICAvLyAuLiBfbG9nUnVuRXZlbnQ6XG4gICAgLy9cbiAgICAvLyBsb2dSdW5FdmVudFxuICAgIC8vIC0tLS0tLS0tLS0tXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBzZW5kcyB0aGUgcHJvdmlkZWQgYGBldmVudEluZm9gYCB0byB0aGUgYHJ1bmxvZyBlbmRwb2ludGAuIFdoZW4gYXdhaXRlZCwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBkYXRhIChkZWNvZGVkIGZyb20gSlNPTikgdGhlIHNlcnZlciBzZW50IGJhY2suXG4gICAgYXN5bmMgbG9nUnVuRXZlbnQoZXZlbnRJbmZvKSB7XG4gICAgICAgIGxldCBwb3N0X3Byb21pc2UgPSBcImRvbmVcIjtcbiAgICAgICAgaWYgKHRoaXMuZ3JhZGVyYWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnRJbmZvLmNvdXJzZSA9IGVCb29rQ29uZmlnLmNvdXJzZTtcbiAgICAgICAgZXZlbnRJbmZvLmNsaWVudExvZ2luU3RhdHVzID0gZUJvb2tDb25maWcuaXNMb2dnZWRJbjtcbiAgICAgICAgZXZlbnRJbmZvLnRpbWV6b25lb2Zmc2V0ID0gbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpIC8gNjA7XG4gICAgICAgIGlmICh0aGlzLmZvcmNlU2F2ZSB8fCBcInRvX3NhdmVcIiBpbiBldmVudEluZm8gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBldmVudEluZm8uc2F2ZV9jb2RlID0gXCJUcnVlXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVCb29rQ29uZmlnLnVzZVJ1bmVzdG9uZVNlcnZpY2VzICYmIGVCb29rQ29uZmlnLmxvZ0xldmVsID4gMCkge1xuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdChlQm9va0NvbmZpZy5hamF4VVJMICsgXCJydW5sb2cuanNvblwiLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmpzb25IZWFkZXJzLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGV2ZW50SW5mbyksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3QpO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBsb2cgdGhlIHJ1blwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvc3RfcHJvbWlzZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNUaW1lZCB8fCBlQm9va0NvbmZpZy5kZWJ1Zykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJydW5uaW5nIFwiICsgSlNPTi5zdHJpbmdpZnkoZXZlbnRJbmZvKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIHBhZ2VQcm9ncmVzc1RyYWNrZXIudXBkYXRlUHJvZ3Jlc3MgPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICAgICAgdGhpcy5vcHRpb25hbCA9PSBmYWxzZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHBhZ2VQcm9ncmVzc1RyYWNrZXIudXBkYXRlUHJvZ3Jlc3MoZXZlbnRJbmZvLmRpdl9pZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvc3RfcHJvbWlzZTtcbiAgICB9XG4gICAgLyogQ2hlY2tpbmcvbG9hZGluZyBmcm9tIHN0b3JhZ2VcbiAgICAqKldBUk5JTkc6KiogIERPIE5PVCBgYXdhaXRgIHRoaXMgZnVuY3Rpb24hXG4gICAgVGhpcyBmdW5jdGlvbiwgYWx0aG91Z2ggYXN5bmMsIGRvZXMgbm90IGV4cGxpY2l0bHkgcmVzb2x2ZSBpdHMgcHJvbWlzZSBieSByZXR1cm5pbmcgYSB2YWx1ZS4gIFRoZSByZWFzb24gZm9yIHRoaXMgaXMgYmVjYXVzZSBpdCBpcyBjYWxsZWQgYnkgdGhlIGNvbnN0cnVjdG9yIGZvciBuZWFybHkgZXZlcnkgY29tcG9uZW50LiAgSW4gSmF2YXNjcmlwdCBjb25zdHJ1Y3RvcnMgY2Fubm90IGJlIGFzeW5jIVxuXG4gICAgT25lIG9mIHRoZSByZWNvbW1lbmRlZCB3YXlzIHRvIGhhbmRsZSB0aGUgYXN5bmMgcmVxdWlyZW1lbnRzIGZyb20gd2l0aGluIGEgY29uc3RydWN0b3IgaXMgdG8gdXNlIGFuIGF0dHJpYnV0ZSBhcyBhIHByb21pc2UgYW5kIHJlc29sdmUgdGhhdCBhdHRyaWJ1dGUgYXQgdGhlIGFwcHJvcHJpYXRlIHRpbWUuXG4gICAgKi9cbiAgICBhc3luYyBjaGVja1NlcnZlcihcbiAgICAgICAgLy8gQSBzdHJpbmcgc3BlY2lmeWluZyB0aGUgZXZlbnQgbmFtZSB0byB1c2UgZm9yIHF1ZXJ5aW5nIHRoZSA6cmVmOmBnZXRBc3Nlc3NSZXN1bHRzYCBlbmRwb2ludC5cbiAgICAgICAgZXZlbnRJbmZvLFxuICAgICAgICAvLyBJZiB0cnVlLCB0aGlzIGZ1bmN0aW9uIHdpbGwgaW52b2tlIGBgaW5kaWNhdGVfY29tcG9uZW50X3JlYWR5KClgYCBqdXN0IGJlZm9yZSBpdCByZXR1cm5zLiBUaGlzIGlzIHByb3ZpZGVkIHNpbmNlIG1vc3QgY29tcG9uZW50cyBhcmUgcmVhZHkgYWZ0ZXIgdGhpcyBmdW5jdGlvbiBjb21wbGV0ZXMgaXRzIHdvcmsuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFRPRE86IFRoaXMgZGVmYXVsdHMgdG8gZmFsc2UsIHRvIGF2b2lkIGNhdXNpbmcgcHJvYmxlbXMgd2l0aCBhbnkgY29tcG9uZW50cyB0aGF0IGhhdmVuJ3QgYmVlbiB1cGRhdGVkIGFuZCB0ZXN0ZWQuIEFmdGVyIGFsbCBSdW5lc3RvbmUgY29tcG9uZW50cyBoYXZlIGJlZW4gdXBkYXRlZCwgZGVmYXVsdCB0aGlzIHRvIHRydWUgYW5kIHJlbW92ZSB0aGUgZXh0cmEgcGFyYW1ldGVyIGZyb20gbW9zdCBjYWxscyB0byB0aGlzIGZ1bmN0aW9uLlxuICAgICAgICB3aWxsX2JlX3JlYWR5ID0gZmFsc2VcbiAgICApIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHNlcnZlciBoYXMgc3RvcmVkIGFuc3dlclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2hlY2tTZXJ2ZXJDb21wbGV0ZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHNlbGYuY3NyZXNvbHZlciA9IHJlc29sdmU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy51c2VSdW5lc3RvbmVTZXJ2aWNlcyB8fCB0aGlzLmdyYWRlcmFjdGl2ZSkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgICAgIGRhdGEuZGl2X2lkID0gdGhpcy5kaXZpZDtcbiAgICAgICAgICAgIGRhdGEuY291cnNlID0gZUJvb2tDb25maWcuY291cnNlO1xuICAgICAgICAgICAgZGF0YS5ldmVudCA9IGV2ZW50SW5mbztcbiAgICAgICAgICAgIGlmICh0aGlzLmdyYWRlcmFjdGl2ZSAmJiB0aGlzLmRlYWRsaW5lKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5kZWFkbGluZSA9IHRoaXMuZGVhZGxpbmU7XG4gICAgICAgICAgICAgICAgZGF0YS5yYXdkZWFkbGluZSA9IHRoaXMucmF3ZGVhZGxpbmU7XG4gICAgICAgICAgICAgICAgZGF0YS50em9mZiA9IHRoaXMudHpvZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zaWQpIHtcbiAgICAgICAgICAgICAgICBkYXRhLnNpZCA9IHRoaXMuc2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlQm9va0NvbmZpZy5wcmFjdGljZV9tb2RlICYmIHRoaXMuYXNzZXNzbWVudFRha2VuKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdChcbiAgICAgICAgICAgICAgICAgICAgZUJvb2tDb25maWcuYWpheFVSTCArIFwiZ2V0QXNzZXNzUmVzdWx0c1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmpzb25IZWFkZXJzLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBvcHVsYXRlRnJvbVN0b3JhZ2UoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3NyZXNvbHZlcihcInNlcnZlclwiKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWREYXRhKHt9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNzcmVzb2x2ZXIoXCJub3QgdGFrZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrTG9jYWxTdG9yYWdlKCk7IC8vIGp1c3QgZ28gcmlnaHQgdG8gbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgdGhpcy5jc3Jlc29sdmVyKFwibG9jYWxcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2lsbF9iZV9yZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5pbmRpY2F0ZV9jb21wb25lbnRfcmVhZHkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoaXMgbWV0aG9kIGFzc3VtZXMgdGhhdCBgYHRoaXMuY29tcG9uZW50RGl2YGAgcmVmZXJzIHRvIHRoZSBgYGRpdmBgIGNvbnRhaW5pbmcgdGhlIGNvbXBvbmVudCwgYW5kIHRoYXQgdGhpcyBjb21wb25lbnQncyBJRCBpcyBzZXQuXG4gICAgaW5kaWNhdGVfY29tcG9uZW50X3JlYWR5KCkge1xuICAgICAgICAvLyBBZGQgYSBjbGFzcyB0byBpbmRpY2F0ZSB0aGUgY29tcG9uZW50IGlzIG5vdyByZWFkeS5cbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZChcInJ1bmVzdG9uZS1jb21wb25lbnQtcmVhZHlcIik7XG4gICAgICAgIC8vIFJlc29sdmUgdGhlIGBgdGhpcy5jb21wb25lbnRfcmVhZHlfcHJvbWlzZWBgLlxuICAgICAgICB0aGlzLl9jb21wb25lbnRfcmVhZHlfcmVzb2x2ZV9mbigpO1xuICAgIH1cblxuICAgIGxvYWREYXRhKGRhdGEpIHtcbiAgICAgICAgLy8gZm9yIG1vc3QgY2xhc3NlcywgbG9hZERhdGEgZG9lc24ndCBkbyBhbnl0aGluZy4gQnV0IGZvciBQYXJzb25zLCBhbmQgcGVyaGFwcyBvdGhlcnMgaW4gdGhlIGZ1dHVyZSxcbiAgICAgICAgLy8gaW5pdGlhbGl6YXRpb24gY2FuIGhhcHBlbiBldmVuIHdoZW4gdGhlcmUncyBubyBoaXN0b3J5IHRvIGJlIGxvYWRlZFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXBvcHVsYXRlRnJvbVN0b3JhZ2UgaXMgY2FsbGVkIGFmdGVyIGEgc3VjY2Vzc2Z1bCBBUEkgY2FsbCBpcyBtYWRlIHRvIGBgZ2V0QXNzZXNzUmVzdWx0c2BgIGluXG4gICAgICogdGhlIGNoZWNrU2VydmVyIG1ldGhvZCBpbiB0aGlzIGNsYXNzXG4gICAgICpcbiAgICAgKiBgYHJlc3RvcmVBbnN3ZXJzLGBgIGBgc2V0TG9jYWxTdG9yYWdlYGAgYW5kIGBgY2hlY2tMb2NhbFN0b3JhZ2VgYCBhcmUgZGVmaW5lZCBpbiB0aGUgY2hpbGQgY2xhc3Nlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gZGF0YSAtIGEgSlNPTiBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBkYXRhIG5lZWRlZCB0byByZXN0b3JlIGEgcHJldmlvdXMgYW5zd2VyIGZvciBhIGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7Kn0gc3RhdHVzIC0gdGhlIGh0dHAgc3RhdHVzXG4gICAgICogQHBhcmFtIHsqfSB3aGF0ZXZlciAtIGlnbm9yZWRcbiAgICAgKi9cbiAgICByZXBvcHVsYXRlRnJvbVN0b3JhZ2UoZGF0YSkge1xuICAgICAgICAvLyBkZWNpZGUgd2hldGhlciB0byB1c2UgdGhlIHNlcnZlcidzIGFuc3dlciAoaWYgdGhlcmUgaXMgb25lKSBvciB0byBsb2FkIGZyb20gc3RvcmFnZVxuICAgICAgICBpZiAoZGF0YSAhPT0gbnVsbCAmJiB0aGlzLnNob3VsZFVzZVNlcnZlcihkYXRhKSkge1xuICAgICAgICAgICAgdGhpcy5yZXN0b3JlQW5zd2VycyhkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxTdG9yYWdlKGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGVja0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNob3VsZFVzZVNlcnZlcihkYXRhKSB7XG4gICAgICAgIC8vIHJldHVybnMgdHJ1ZSBpZiBzZXJ2ZXIgZGF0YSBpcyBtb3JlIHJlY2VudCB0aGFuIGxvY2FsIHN0b3JhZ2Ugb3IgaWYgc2VydmVyIHN0b3JhZ2UgaXMgY29ycmVjdFxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBkYXRhLmNvcnJlY3QgPT09IFwiVFwiIHx8XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UubGVuZ3RoID09PSAwIHx8XG4gICAgICAgICAgICB0aGlzLmdyYWRlcmFjdGl2ZSA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAgdGhpcy5pc1RpbWVkXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGV4ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSk7XG4gICAgICAgIGlmIChleCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN0b3JlZERhdGE7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdG9yZWREYXRhID0gSlNPTi5wYXJzZShleCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLy8gZXJyb3Igd2hpbGUgcGFyc2luZzsgbGlrZWx5IGR1ZSB0byBiYWQgdmFsdWUgc3RvcmVkIGluIHN0b3JhZ2VcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KCkpO1xuICAgICAgICAgICAgLy8gZGVmaW5pdGVseSBkb24ndCB3YW50IHRvIHVzZSBsb2NhbCBzdG9yYWdlIGhlcmVcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmFuc3dlciA9PSBzdG9yZWREYXRhLmFuc3dlcikgcmV0dXJuIHRydWU7XG4gICAgICAgIGxldCBzdG9yYWdlRGF0ZSA9IG5ldyBEYXRlKHN0b3JlZERhdGEudGltZXN0YW1wKTtcbiAgICAgICAgbGV0IHNlcnZlckRhdGUgPSBuZXcgRGF0ZShkYXRhLnRpbWVzdGFtcCk7XG4gICAgICAgIHJldHVybiBzZXJ2ZXJEYXRlID49IHN0b3JhZ2VEYXRlO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gdGhlIGtleSB3aGljaCB0byBiZSB1c2VkIHdoZW4gYWNjZXNzaW5nIGxvY2FsIHN0b3JhZ2UuXG4gICAgbG9jYWxTdG9yYWdlS2V5KCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgZUJvb2tDb25maWcuZW1haWwgK1xuICAgICAgICAgICAgXCI6XCIgK1xuICAgICAgICAgICAgZUJvb2tDb25maWcuY291cnNlICtcbiAgICAgICAgICAgIFwiOlwiICtcbiAgICAgICAgICAgIHRoaXMuZGl2aWQgK1xuICAgICAgICAgICAgXCItZ2l2ZW5cIlxuICAgICAgICApO1xuICAgIH1cbiAgICBhZGRDYXB0aW9uKGVsVHlwZSkge1xuICAgICAgICAvL3NvbWVFbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0VsZW1lbnQsIHNvbWVFbGVtZW50Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzVGltZWQpIHtcbiAgICAgICAgICAgIHZhciBjYXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnF1ZXN0aW9uX2xhYmVsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXB0aW9uID0gYEFjdGl2aXR5OiAke3RoaXMucXVlc3Rpb25fbGFiZWx9ICR7dGhpcy5jYXB0aW9ufSAgPHNwYW4gY2xhc3M9XCJydW5lc3RvbmVfY2FwdGlvbl9kaXZpZFwiPigke3RoaXMuZGl2aWR9KTwvc3Bhbj5gO1xuICAgICAgICAgICAgICAgICQoY2FwRGl2KS5odG1sKHRoaXMuY2FwdGlvbik7XG4gICAgICAgICAgICAgICAgJChjYXBEaXYpLmFkZENsYXNzKGAke2VsVHlwZX1fY2FwdGlvbmApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGNhcERpdikuaHRtbCh0aGlzLmNhcHRpb24gKyBcIiAoXCIgKyB0aGlzLmRpdmlkICsgXCIpXCIpO1xuICAgICAgICAgICAgICAgICQoY2FwRGl2KS5hZGRDbGFzcyhgJHtlbFR5cGV9X2NhcHRpb25gKTtcbiAgICAgICAgICAgICAgICAkKGNhcERpdikuYWRkQ2xhc3MoYCR7ZWxUeXBlfV9jYXB0aW9uX3RleHRgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2FwRGl2ID0gY2FwRGl2O1xuICAgICAgICAgICAgLy90aGlzLm91dGVyRGl2LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNhcERpdiwgdGhpcy5vdXRlckRpdi5uZXh0U2libGluZyk7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChjYXBEaXYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzVXNlckFjdGl2aXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0Fuc3dlcmVkO1xuICAgIH1cblxuICAgIGNoZWNrQ3VycmVudEFuc3dlcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBcIkVhY2ggY29tcG9uZW50IHNob3VsZCBwcm92aWRlIGFuIGltcGxlbWVudGF0aW9uIG9mIGNoZWNrQ3VycmVudEFuc3dlclwiXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9nQ3VycmVudEFuc3dlcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBcIkVhY2ggY29tcG9uZW50IHNob3VsZCBwcm92aWRlIGFuIGltcGxlbWVudGF0aW9uIG9mIGxvZ0N1cnJlbnRBbnN3ZXJcIlxuICAgICAgICApO1xuICAgIH1cbiAgICByZW5kZXJGZWVkYmFjaygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBcIkVhY2ggY29tcG9uZW50IHNob3VsZCBwcm92aWRlIGFuIGltcGxlbWVudGF0aW9uIG9mIHJlbmRlckZlZWRiYWNrXCJcbiAgICAgICAgKTtcbiAgICB9XG4gICAgZGlzYWJsZUludGVyYWN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIFwiRWFjaCBjb21wb25lbnQgc2hvdWxkIHByb3ZpZGUgYW4gaW1wbGVtZW50YXRpb24gb2YgZGlzYWJsZUludGVyYWN0aW9uXCJcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbndpbmRvdy5SdW5lc3RvbmVCYXNlID0gUnVuZXN0b25lQmFzZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=