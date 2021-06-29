(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_common_js_runestonebase_js"],{

/***/ 21294:
/*!******************************************!*\
  !*** ./runestone/common/js/bookfuncs.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageProgressTracker": () => (/* binding */ pageProgressTracker)
/* harmony export */ });
/**
 *
 * User: bmiller
 * Original: 2011-04-20
 * Date: 2019-06-14
 * Time: 2:01 PM
 * This change marks the beginning of version 4.0 of the runestone components
 * Login/logout is no longer handled through javascript but rather server side.
 * Many of the components depend on the runestone:login event so we will keep that
 * for now to keep the churn fairly minimal.
 */

/*

 Copyright (C) 2011  Brad Miller  bonelake@gmail.com

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.

 */

//
// Chevron functions - Must correspond with width in runestone-custom-sphinx-bootstrap.css
//
$(function () {
    var resizeWindow = false;
    var resizeWidth = 600;
    $(window)
        .on("resize", function (event) {
            if ($(window).width() <= resizeWidth && resizeWindow == false) {
                resizeWindow = true;
                var topPrev = $("#relations-prev")
                    .clone()
                    .attr("id", "top-relations-prev");
                var topNext = $("#relations-next")
                    .clone()
                    .attr("id", "top-relations-next");
                $("#relations-prev, #relations-next").hide();
                var bottomPrev = topPrev
                    .clone()
                    .attr("id", "bottom-relations-prev");
                var bottomNext = topNext
                    .clone()
                    .attr("id", "bottom-relations-next");
                $("div#main-content > div").prepend(topPrev, topNext);
                $("#top-relations-prev, #top-relations-next").wrapAll(
                    '<ul id="top-relations-console"></ul>'
                );
                $("div#main-content > div").append(bottomPrev, bottomNext);
                $("#bottom-relations-prev, #bottom-relations-next").wrapAll(
                    '<ul id="bottom-relations-console"></ul>'
                );
            }
            if ($(window).width() >= resizeWidth + 1 && resizeWindow == true) {
                resizeWindow = false;
                $("#top-relations-console, #bottom-relations-console").remove();
                $("#relations-prev, #relations-next").show();
            }
        })
        .resize();
});

//
// Page decoration functions
//

function addReadingList() {
    if (eBookConfig.readings) {
        var l, nxt, path_parts, nxt_link;
        let cur_path_parts = window.location.pathname.split("/");
        let name =
            cur_path_parts[cur_path_parts.length - 2] +
            "/" +
            cur_path_parts[cur_path_parts.length - 1];
        let position = eBookConfig.readings.indexOf(name);
        let num_readings = eBookConfig.readings.length;
        if (position == eBookConfig.readings.length - 1) {
            // no more readings
            l = $("<div />", {
                text: `Finished reading assignment. Page ${num_readings} of ${num_readings}.`,
            });
        } else if (position >= 0) {
            // get next name
            nxt = eBookConfig.readings[position + 1];
            path_parts = cur_path_parts.slice(0, cur_path_parts.length - 2);
            path_parts.push(nxt);
            nxt_link = path_parts.join("/");
            l = $("<a />", {
                name: "link",
                class: "btn btn-lg ' + 'buttonConfirmCompletion'",
                href: nxt_link,
                text: `Continue to page ${
                    position + 2
                } of ${num_readings} in the reading assignment.`,
            });
        } else {
            l = $("<div />", {
                text:
                    "This page is not part of the last reading assignment you visited.",
            });
        }
        $("#main-content").append(l);
    }
}

function timedRefresh() {
    var timeoutPeriod = 900000; // 75 minutes
    $(document).bind("idle.idleTimer", function () {
        // After timeout period send the user back to the index.  This will force a login
        // if needed when they want to go to a particular page.  This may not be perfect
        // but its an easy way to make sure laptop users are properly logged in when they
        // take quizzes and save stuff.
        if (location.href.indexOf("index.html") < 0) {
            console.log("Idle timer - " + location.pathname);
            location.href =
                eBookConfig.app +
                "/default/user/login?_next=" +
                location.pathname +
                location.search;
        }
    });
    $.idleTimer(timeoutPeriod);
}

class PageProgressBar {
    constructor(actDict) {
        this.possible = 0;
        this.total = 1;
        if (actDict && Object.keys(actDict).length > 0) {
            this.activities = actDict;
        } else {
            let activities = { page: 0 };
            $(".runestone").each(function (idx, e) {
                activities[e.firstElementChild.id] = 0;
            });
            this.activities = activities;
        }
        this.calculateProgress();
        if (
            window.location.pathname.match(
                /.*(index.html|toctree.html|Exercises.html|Glossary.html|search.html)$/i
            )
        ) {
            $("#scprogresscontainer").hide();
        }
        this.renderProgress();
    }

    calculateProgress() {
        for (let k in this.activities) {
            if (k !== undefined) {
                this.possible++;
                if (this.activities[k] > 0) {
                    this.total++;
                }
            }
        }
    }

    renderProgress() {
        let value = 0;
        $("#scprogresstotal").text(this.total);
        $("#scprogressposs").text(this.possible);
        try {
            value = (100 * this.total) / this.possible;
        } catch (e) {
            value = 0;
        }
        $("#subchapterprogress").progressbar({
            value: value,
        });
        if (!eBookConfig.isLoggedIn) {
            $("#subchapterprogress>div").addClass("loggedout");
        }
    }

    updateProgress(div_id) {
        this.activities[div_id]++;
        // Only update the progress bar on the first interaction with an object.
        if (this.activities[div_id] === 1) {
            this.total++;
            let val = (100 * this.total) / this.possible;
            $("#scprogresstotal").text(this.total);
            $("#scprogressposs").text(this.possible);
            $("#subchapterprogress").progressbar("option", "value", val);
            if (
                val == 100.0 &&
                $("#completionButton").text().toLowerCase() ===
                    "mark as completed"
            ) {
                $("#completionButton").click();
            }
        }
    }
}

var pageProgressTracker = {};

function handlePageSetup() {
    var mess;
    if (eBookConfig.useRunestoneServices) {
        jQuery.get(eBookConfig.ajaxURL + "set_tz_offset", {
            timezoneoffset: new Date().getTimezoneOffset() / 60,
        });
    }

    if (eBookConfig.isLoggedIn) {
        mess = `username: ${eBookConfig.username}`;
        if (!eBookConfig.isInstructor) {
            $("#ip_dropdown_link").remove();
        }
        $(document).trigger("runestone:login");
        addReadingList();
        timedRefresh();
    } else {
        mess = "Not logged in";
        $(document).trigger("runestone:logout");
    }
    $(".loggedinuser").html(mess);

    pageProgressTracker = new PageProgressBar(eBookConfig.activities);
    notifyRunestoneComponents();
}

function setupNavbarLoggedIn() {
    $("#profilelink").show();
    $("#passwordlink").show();
    $("#registerlink").hide();
    $("li.loginout").html(
        '<a href="' + eBookConfig.app + '/default/user/logout">Log Out</a>'
    );
}
$(document).bind("runestone:login", setupNavbarLoggedIn);

function setupNavbarLoggedOut() {
    if (eBookConfig.useRunestoneServices) {
        console.log("setup navbar for logged out");
        $("#registerlink").show();
        $("#profilelink").hide();
        $("#passwordlink").hide();
        $("#ip_dropdown_link").hide();
        $("li.loginout").html(
            '<a href="' + eBookConfig.app + '/default/user/login">Login</a>'
        );
        $(".footer").html("user not logged in");
    }
}
$(document).bind("runestone:logout", setupNavbarLoggedOut);

function notifyRunestoneComponents() {
    // Runestone components wait until login process is over to load components because of storage issues. This triggers the `dynamic import machinery`, which then sends the login complete signal when this and all dynamic imports are finished.
    $(document).trigger("runestone:pre-login-complete");
}

// initialize stuff
$(document).ready(function () {
    if (eBookConfig) {
        handlePageSetup();
    } else {
        if (typeof eBookConfig === "undefined") {
            console.log(
                "eBookConfig is not defined.  This page must not be set up for Runestone"
            );
        }
    }
});

// misc stuff
// todo:  This could be further distributed but making a video.js file just for one function seems dumb.
$(document).ready(function () {
    // add the video play button overlay image
    $(".video-play-overlay").each(function () {
        $(this).css(
            "background-image",
            "url('{{pathto('_static/play_overlay_icon.png', 1)}}')"
        );
    });

    // This function is needed to allow the dropdown search bar to work;
    // The default behaviour is that the dropdown menu closes when something in
    // it (like the search bar) is clicked
    $(function () {
        // Fix input element click problem
        $(".dropdown input, .dropdown label").click(function (e) {
            e.stopPropagation();
        });
    });
});


/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NvbW1vbi9qcy9ib29rZnVuY3MuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vanMvcnVuZXN0b25lYmFzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxhQUFhLE1BQU0sYUFBYTtBQUMzRixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTSxhQUFhO0FBQ3BDLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztB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QUFDQSxzQ0FBc0MsT0FBTztBQUM3QyxzQ0FBc0MsT0FBTztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoicnVuZXN0b25lX2NvbW1vbl9qc19ydW5lc3RvbmViYXNlX2pzLmJ1bmRsZS5qcz92PWIwMWFhZGIwMDAwODBkOWQxN2UxIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqXHJcbiAqIFVzZXI6IGJtaWxsZXJcclxuICogT3JpZ2luYWw6IDIwMTEtMDQtMjBcclxuICogRGF0ZTogMjAxOS0wNi0xNFxyXG4gKiBUaW1lOiAyOjAxIFBNXHJcbiAqIFRoaXMgY2hhbmdlIG1hcmtzIHRoZSBiZWdpbm5pbmcgb2YgdmVyc2lvbiA0LjAgb2YgdGhlIHJ1bmVzdG9uZSBjb21wb25lbnRzXHJcbiAqIExvZ2luL2xvZ291dCBpcyBubyBsb25nZXIgaGFuZGxlZCB0aHJvdWdoIGphdmFzY3JpcHQgYnV0IHJhdGhlciBzZXJ2ZXIgc2lkZS5cclxuICogTWFueSBvZiB0aGUgY29tcG9uZW50cyBkZXBlbmQgb24gdGhlIHJ1bmVzdG9uZTpsb2dpbiBldmVudCBzbyB3ZSB3aWxsIGtlZXAgdGhhdFxyXG4gKiBmb3Igbm93IHRvIGtlZXAgdGhlIGNodXJuIGZhaXJseSBtaW5pbWFsLlxyXG4gKi9cclxuXHJcbi8qXHJcblxyXG4gQ29weXJpZ2h0IChDKSAyMDExICBCcmFkIE1pbGxlciAgYm9uZWxha2VAZ21haWwuY29tXHJcblxyXG4gVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcclxuIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XHJcbiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxyXG4gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cclxuXHJcbiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcclxuIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXHJcbiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXHJcbiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG5cclxuIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXHJcbiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cclxuXHJcbiAqL1xyXG5cclxuLy9cclxuLy8gQ2hldnJvbiBmdW5jdGlvbnMgLSBNdXN0IGNvcnJlc3BvbmQgd2l0aCB3aWR0aCBpbiBydW5lc3RvbmUtY3VzdG9tLXNwaGlueC1ib290c3RyYXAuY3NzXHJcbi8vXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHJlc2l6ZVdpbmRvdyA9IGZhbHNlO1xyXG4gICAgdmFyIHJlc2l6ZVdpZHRoID0gNjAwO1xyXG4gICAgJCh3aW5kb3cpXHJcbiAgICAgICAgLm9uKFwicmVzaXplXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gcmVzaXplV2lkdGggJiYgcmVzaXplV2luZG93ID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXNpemVXaW5kb3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvcFByZXYgPSAkKFwiI3JlbGF0aW9ucy1wcmV2XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNsb25lKClcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcImlkXCIsIFwidG9wLXJlbGF0aW9ucy1wcmV2XCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvcE5leHQgPSAkKFwiI3JlbGF0aW9ucy1uZXh0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNsb25lKClcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcImlkXCIsIFwidG9wLXJlbGF0aW9ucy1uZXh0XCIpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNyZWxhdGlvbnMtcHJldiwgI3JlbGF0aW9ucy1uZXh0XCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIHZhciBib3R0b21QcmV2ID0gdG9wUHJldlxyXG4gICAgICAgICAgICAgICAgICAgIC5jbG9uZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCBcImJvdHRvbS1yZWxhdGlvbnMtcHJldlwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBib3R0b21OZXh0ID0gdG9wTmV4dFxyXG4gICAgICAgICAgICAgICAgICAgIC5jbG9uZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCBcImJvdHRvbS1yZWxhdGlvbnMtbmV4dFwiKTtcclxuICAgICAgICAgICAgICAgICQoXCJkaXYjbWFpbi1jb250ZW50ID4gZGl2XCIpLnByZXBlbmQodG9wUHJldiwgdG9wTmV4dCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3RvcC1yZWxhdGlvbnMtcHJldiwgI3RvcC1yZWxhdGlvbnMtbmV4dFwiKS53cmFwQWxsKFxyXG4gICAgICAgICAgICAgICAgICAgICc8dWwgaWQ9XCJ0b3AtcmVsYXRpb25zLWNvbnNvbGVcIj48L3VsPidcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAkKFwiZGl2I21haW4tY29udGVudCA+IGRpdlwiKS5hcHBlbmQoYm90dG9tUHJldiwgYm90dG9tTmV4dCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2JvdHRvbS1yZWxhdGlvbnMtcHJldiwgI2JvdHRvbS1yZWxhdGlvbnMtbmV4dFwiKS53cmFwQWxsKFxyXG4gICAgICAgICAgICAgICAgICAgICc8dWwgaWQ9XCJib3R0b20tcmVsYXRpb25zLWNvbnNvbGVcIj48L3VsPidcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID49IHJlc2l6ZVdpZHRoICsgMSAmJiByZXNpemVXaW5kb3cgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzaXplV2luZG93ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3RvcC1yZWxhdGlvbnMtY29uc29sZSwgI2JvdHRvbS1yZWxhdGlvbnMtY29uc29sZVwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICQoXCIjcmVsYXRpb25zLXByZXYsICNyZWxhdGlvbnMtbmV4dFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5yZXNpemUoKTtcclxufSk7XHJcblxyXG4vL1xyXG4vLyBQYWdlIGRlY29yYXRpb24gZnVuY3Rpb25zXHJcbi8vXHJcblxyXG5mdW5jdGlvbiBhZGRSZWFkaW5nTGlzdCgpIHtcclxuICAgIGlmIChlQm9va0NvbmZpZy5yZWFkaW5ncykge1xyXG4gICAgICAgIHZhciBsLCBueHQsIHBhdGhfcGFydHMsIG54dF9saW5rO1xyXG4gICAgICAgIGxldCBjdXJfcGF0aF9wYXJ0cyA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIik7XHJcbiAgICAgICAgbGV0IG5hbWUgPVxyXG4gICAgICAgICAgICBjdXJfcGF0aF9wYXJ0c1tjdXJfcGF0aF9wYXJ0cy5sZW5ndGggLSAyXSArXHJcbiAgICAgICAgICAgIFwiL1wiICtcclxuICAgICAgICAgICAgY3VyX3BhdGhfcGFydHNbY3VyX3BhdGhfcGFydHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gZUJvb2tDb25maWcucmVhZGluZ3MuaW5kZXhPZihuYW1lKTtcclxuICAgICAgICBsZXQgbnVtX3JlYWRpbmdzID0gZUJvb2tDb25maWcucmVhZGluZ3MubGVuZ3RoO1xyXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PSBlQm9va0NvbmZpZy5yZWFkaW5ncy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIC8vIG5vIG1vcmUgcmVhZGluZ3NcclxuICAgICAgICAgICAgbCA9ICQoXCI8ZGl2IC8+XCIsIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IGBGaW5pc2hlZCByZWFkaW5nIGFzc2lnbm1lbnQuIFBhZ2UgJHtudW1fcmVhZGluZ3N9IG9mICR7bnVtX3JlYWRpbmdzfS5gLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID49IDApIHtcclxuICAgICAgICAgICAgLy8gZ2V0IG5leHQgbmFtZVxyXG4gICAgICAgICAgICBueHQgPSBlQm9va0NvbmZpZy5yZWFkaW5nc1twb3NpdGlvbiArIDFdO1xyXG4gICAgICAgICAgICBwYXRoX3BhcnRzID0gY3VyX3BhdGhfcGFydHMuc2xpY2UoMCwgY3VyX3BhdGhfcGFydHMubGVuZ3RoIC0gMik7XHJcbiAgICAgICAgICAgIHBhdGhfcGFydHMucHVzaChueHQpO1xyXG4gICAgICAgICAgICBueHRfbGluayA9IHBhdGhfcGFydHMuam9pbihcIi9cIik7XHJcbiAgICAgICAgICAgIGwgPSAkKFwiPGEgLz5cIiwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJsaW5rXCIsXHJcbiAgICAgICAgICAgICAgICBjbGFzczogXCJidG4gYnRuLWxnICcgKyAnYnV0dG9uQ29uZmlybUNvbXBsZXRpb24nXCIsXHJcbiAgICAgICAgICAgICAgICBocmVmOiBueHRfbGluayxcclxuICAgICAgICAgICAgICAgIHRleHQ6IGBDb250aW51ZSB0byBwYWdlICR7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gKyAyXHJcbiAgICAgICAgICAgICAgICB9IG9mICR7bnVtX3JlYWRpbmdzfSBpbiB0aGUgcmVhZGluZyBhc3NpZ25tZW50LmAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGwgPSAkKFwiPGRpdiAvPlwiLCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OlxyXG4gICAgICAgICAgICAgICAgICAgIFwiVGhpcyBwYWdlIGlzIG5vdCBwYXJ0IG9mIHRoZSBsYXN0IHJlYWRpbmcgYXNzaWdubWVudCB5b3UgdmlzaXRlZC5cIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjbWFpbi1jb250ZW50XCIpLmFwcGVuZChsKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdGltZWRSZWZyZXNoKCkge1xyXG4gICAgdmFyIHRpbWVvdXRQZXJpb2QgPSA5MDAwMDA7IC8vIDc1IG1pbnV0ZXNcclxuICAgICQoZG9jdW1lbnQpLmJpbmQoXCJpZGxlLmlkbGVUaW1lclwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gQWZ0ZXIgdGltZW91dCBwZXJpb2Qgc2VuZCB0aGUgdXNlciBiYWNrIHRvIHRoZSBpbmRleC4gIFRoaXMgd2lsbCBmb3JjZSBhIGxvZ2luXHJcbiAgICAgICAgLy8gaWYgbmVlZGVkIHdoZW4gdGhleSB3YW50IHRvIGdvIHRvIGEgcGFydGljdWxhciBwYWdlLiAgVGhpcyBtYXkgbm90IGJlIHBlcmZlY3RcclxuICAgICAgICAvLyBidXQgaXRzIGFuIGVhc3kgd2F5IHRvIG1ha2Ugc3VyZSBsYXB0b3AgdXNlcnMgYXJlIHByb3Blcmx5IGxvZ2dlZCBpbiB3aGVuIHRoZXlcclxuICAgICAgICAvLyB0YWtlIHF1aXp6ZXMgYW5kIHNhdmUgc3R1ZmYuXHJcbiAgICAgICAgaWYgKGxvY2F0aW9uLmhyZWYuaW5kZXhPZihcImluZGV4Lmh0bWxcIikgPCAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSWRsZSB0aW1lciAtIFwiICsgbG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID1cclxuICAgICAgICAgICAgICAgIGVCb29rQ29uZmlnLmFwcCArXHJcbiAgICAgICAgICAgICAgICBcIi9kZWZhdWx0L3VzZXIvbG9naW4/X25leHQ9XCIgK1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgK1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24uc2VhcmNoO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJC5pZGxlVGltZXIodGltZW91dFBlcmlvZCk7XHJcbn1cclxuXHJcbmNsYXNzIFBhZ2VQcm9ncmVzc0JhciB7XHJcbiAgICBjb25zdHJ1Y3RvcihhY3REaWN0KSB7XHJcbiAgICAgICAgdGhpcy5wb3NzaWJsZSA9IDA7XHJcbiAgICAgICAgdGhpcy50b3RhbCA9IDE7XHJcbiAgICAgICAgaWYgKGFjdERpY3QgJiYgT2JqZWN0LmtleXMoYWN0RGljdCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2aXRpZXMgPSBhY3REaWN0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBhY3Rpdml0aWVzID0geyBwYWdlOiAwIH07XHJcbiAgICAgICAgICAgICQoXCIucnVuZXN0b25lXCIpLmVhY2goZnVuY3Rpb24gKGlkeCwgZSkge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZpdGllc1tlLmZpcnN0RWxlbWVudENoaWxkLmlkXSA9IDA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2aXRpZXMgPSBhY3Rpdml0aWVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVByb2dyZXNzKCk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUubWF0Y2goXHJcbiAgICAgICAgICAgICAgICAvLiooaW5kZXguaHRtbHx0b2N0cmVlLmh0bWx8RXhlcmNpc2VzLmh0bWx8R2xvc3NhcnkuaHRtbHxzZWFyY2guaHRtbCkkL2lcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICAkKFwiI3NjcHJvZ3Jlc3Njb250YWluZXJcIikuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbmRlclByb2dyZXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlUHJvZ3Jlc3MoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgayBpbiB0aGlzLmFjdGl2aXRpZXMpIHtcclxuICAgICAgICAgICAgaWYgKGsgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NzaWJsZSsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZpdGllc1trXSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUHJvZ3Jlc3MoKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gMDtcclxuICAgICAgICAkKFwiI3NjcHJvZ3Jlc3N0b3RhbFwiKS50ZXh0KHRoaXMudG90YWwpO1xyXG4gICAgICAgICQoXCIjc2Nwcm9ncmVzc3Bvc3NcIikudGV4dCh0aGlzLnBvc3NpYmxlKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9ICgxMDAgKiB0aGlzLnRvdGFsKSAvIHRoaXMucG9zc2libGU7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjc3ViY2hhcHRlcnByb2dyZXNzXCIpLnByb2dyZXNzYmFyKHtcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghZUJvb2tDb25maWcuaXNMb2dnZWRJbikge1xyXG4gICAgICAgICAgICAkKFwiI3N1YmNoYXB0ZXJwcm9ncmVzcz5kaXZcIikuYWRkQ2xhc3MoXCJsb2dnZWRvdXRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVByb2dyZXNzKGRpdl9pZCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc1tkaXZfaWRdKys7XHJcbiAgICAgICAgLy8gT25seSB1cGRhdGUgdGhlIHByb2dyZXNzIGJhciBvbiB0aGUgZmlyc3QgaW50ZXJhY3Rpb24gd2l0aCBhbiBvYmplY3QuXHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZpdGllc1tkaXZfaWRdID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG90YWwrKztcclxuICAgICAgICAgICAgbGV0IHZhbCA9ICgxMDAgKiB0aGlzLnRvdGFsKSAvIHRoaXMucG9zc2libGU7XHJcbiAgICAgICAgICAgICQoXCIjc2Nwcm9ncmVzc3RvdGFsXCIpLnRleHQodGhpcy50b3RhbCk7XHJcbiAgICAgICAgICAgICQoXCIjc2Nwcm9ncmVzc3Bvc3NcIikudGV4dCh0aGlzLnBvc3NpYmxlKTtcclxuICAgICAgICAgICAgJChcIiNzdWJjaGFwdGVycHJvZ3Jlc3NcIikucHJvZ3Jlc3NiYXIoXCJvcHRpb25cIiwgXCJ2YWx1ZVwiLCB2YWwpO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB2YWwgPT0gMTAwLjAgJiZcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcGxldGlvbkJ1dHRvblwiKS50ZXh0KCkudG9Mb3dlckNhc2UoKSA9PT1cclxuICAgICAgICAgICAgICAgICAgICBcIm1hcmsgYXMgY29tcGxldGVkXCJcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBsZXRpb25CdXR0b25cIikuY2xpY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBwYWdlUHJvZ3Jlc3NUcmFja2VyID0ge307XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVQYWdlU2V0dXAoKSB7XHJcbiAgICB2YXIgbWVzcztcclxuICAgIGlmIChlQm9va0NvbmZpZy51c2VSdW5lc3RvbmVTZXJ2aWNlcykge1xyXG4gICAgICAgIGpRdWVyeS5nZXQoZUJvb2tDb25maWcuYWpheFVSTCArIFwic2V0X3R6X29mZnNldFwiLCB7XHJcbiAgICAgICAgICAgIHRpbWV6b25lb2Zmc2V0OiBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgLyA2MCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZUJvb2tDb25maWcuaXNMb2dnZWRJbikge1xyXG4gICAgICAgIG1lc3MgPSBgdXNlcm5hbWU6ICR7ZUJvb2tDb25maWcudXNlcm5hbWV9YDtcclxuICAgICAgICBpZiAoIWVCb29rQ29uZmlnLmlzSW5zdHJ1Y3Rvcikge1xyXG4gICAgICAgICAgICAkKFwiI2lwX2Ryb3Bkb3duX2xpbmtcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoXCJydW5lc3RvbmU6bG9naW5cIik7XHJcbiAgICAgICAgYWRkUmVhZGluZ0xpc3QoKTtcclxuICAgICAgICB0aW1lZFJlZnJlc2goKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzcyA9IFwiTm90IGxvZ2dlZCBpblwiO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoXCJydW5lc3RvbmU6bG9nb3V0XCIpO1xyXG4gICAgfVxyXG4gICAgJChcIi5sb2dnZWRpbnVzZXJcIikuaHRtbChtZXNzKTtcclxuXHJcbiAgICBwYWdlUHJvZ3Jlc3NUcmFja2VyID0gbmV3IFBhZ2VQcm9ncmVzc0JhcihlQm9va0NvbmZpZy5hY3Rpdml0aWVzKTtcclxuICAgIG5vdGlmeVJ1bmVzdG9uZUNvbXBvbmVudHMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0dXBOYXZiYXJMb2dnZWRJbigpIHtcclxuICAgICQoXCIjcHJvZmlsZWxpbmtcIikuc2hvdygpO1xyXG4gICAgJChcIiNwYXNzd29yZGxpbmtcIikuc2hvdygpO1xyXG4gICAgJChcIiNyZWdpc3RlcmxpbmtcIikuaGlkZSgpO1xyXG4gICAgJChcImxpLmxvZ2lub3V0XCIpLmh0bWwoXHJcbiAgICAgICAgJzxhIGhyZWY9XCInICsgZUJvb2tDb25maWcuYXBwICsgJy9kZWZhdWx0L3VzZXIvbG9nb3V0XCI+TG9nIE91dDwvYT4nXHJcbiAgICApO1xyXG59XHJcbiQoZG9jdW1lbnQpLmJpbmQoXCJydW5lc3RvbmU6bG9naW5cIiwgc2V0dXBOYXZiYXJMb2dnZWRJbik7XHJcblxyXG5mdW5jdGlvbiBzZXR1cE5hdmJhckxvZ2dlZE91dCgpIHtcclxuICAgIGlmIChlQm9va0NvbmZpZy51c2VSdW5lc3RvbmVTZXJ2aWNlcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0dXAgbmF2YmFyIGZvciBsb2dnZWQgb3V0XCIpO1xyXG4gICAgICAgICQoXCIjcmVnaXN0ZXJsaW5rXCIpLnNob3coKTtcclxuICAgICAgICAkKFwiI3Byb2ZpbGVsaW5rXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiI3Bhc3N3b3JkbGlua1wiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIiNpcF9kcm9wZG93bl9saW5rXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwibGkubG9naW5vdXRcIikuaHRtbChcclxuICAgICAgICAgICAgJzxhIGhyZWY9XCInICsgZUJvb2tDb25maWcuYXBwICsgJy9kZWZhdWx0L3VzZXIvbG9naW5cIj5Mb2dpbjwvYT4nXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKFwiLmZvb3RlclwiKS5odG1sKFwidXNlciBub3QgbG9nZ2VkIGluXCIpO1xyXG4gICAgfVxyXG59XHJcbiQoZG9jdW1lbnQpLmJpbmQoXCJydW5lc3RvbmU6bG9nb3V0XCIsIHNldHVwTmF2YmFyTG9nZ2VkT3V0KTtcclxuXHJcbmZ1bmN0aW9uIG5vdGlmeVJ1bmVzdG9uZUNvbXBvbmVudHMoKSB7XHJcbiAgICAvLyBSdW5lc3RvbmUgY29tcG9uZW50cyB3YWl0IHVudGlsIGxvZ2luIHByb2Nlc3MgaXMgb3ZlciB0byBsb2FkIGNvbXBvbmVudHMgYmVjYXVzZSBvZiBzdG9yYWdlIGlzc3Vlcy4gVGhpcyB0cmlnZ2VycyB0aGUgYGR5bmFtaWMgaW1wb3J0IG1hY2hpbmVyeWAsIHdoaWNoIHRoZW4gc2VuZHMgdGhlIGxvZ2luIGNvbXBsZXRlIHNpZ25hbCB3aGVuIHRoaXMgYW5kIGFsbCBkeW5hbWljIGltcG9ydHMgYXJlIGZpbmlzaGVkLlxyXG4gICAgJChkb2N1bWVudCkudHJpZ2dlcihcInJ1bmVzdG9uZTpwcmUtbG9naW4tY29tcGxldGVcIik7XHJcbn1cclxuXHJcbi8vIGluaXRpYWxpemUgc3R1ZmZcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGVCb29rQ29uZmlnKSB7XHJcbiAgICAgICAgaGFuZGxlUGFnZVNldHVwKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZUJvb2tDb25maWcgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICBcImVCb29rQ29uZmlnIGlzIG5vdCBkZWZpbmVkLiAgVGhpcyBwYWdlIG11c3Qgbm90IGJlIHNldCB1cCBmb3IgUnVuZXN0b25lXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gbWlzYyBzdHVmZlxyXG4vLyB0b2RvOiAgVGhpcyBjb3VsZCBiZSBmdXJ0aGVyIGRpc3RyaWJ1dGVkIGJ1dCBtYWtpbmcgYSB2aWRlby5qcyBmaWxlIGp1c3QgZm9yIG9uZSBmdW5jdGlvbiBzZWVtcyBkdW1iLlxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBhZGQgdGhlIHZpZGVvIHBsYXkgYnV0dG9uIG92ZXJsYXkgaW1hZ2VcclxuICAgICQoXCIudmlkZW8tcGxheS1vdmVybGF5XCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY3NzKFxyXG4gICAgICAgICAgICBcImJhY2tncm91bmQtaW1hZ2VcIixcclxuICAgICAgICAgICAgXCJ1cmwoJ3t7cGF0aHRvKCdfc3RhdGljL3BsYXlfb3ZlcmxheV9pY29uLnBuZycsIDEpfX0nKVwiXHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFRoaXMgZnVuY3Rpb24gaXMgbmVlZGVkIHRvIGFsbG93IHRoZSBkcm9wZG93biBzZWFyY2ggYmFyIHRvIHdvcms7XHJcbiAgICAvLyBUaGUgZGVmYXVsdCBiZWhhdmlvdXIgaXMgdGhhdCB0aGUgZHJvcGRvd24gbWVudSBjbG9zZXMgd2hlbiBzb21ldGhpbmcgaW5cclxuICAgIC8vIGl0IChsaWtlIHRoZSBzZWFyY2ggYmFyKSBpcyBjbGlja2VkXHJcbiAgICAkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBGaXggaW5wdXQgZWxlbWVudCBjbGljayBwcm9ibGVtXHJcbiAgICAgICAgJChcIi5kcm9wZG93biBpbnB1dCwgLmRyb3Bkb3duIGxhYmVsXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcbiIsIi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIHxkb2NuYW1lfCAtIFJ1bmVzdG9uZSBCYXNlIENsYXNzXHJcbiAqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIEFsbCBydW5lc3RvbmUgY29tcG9uZW50cyBzaG91bGQgaW5oZXJpdCBmcm9tIFJ1bmVzdG9uZUJhc2UuIEluIGFkZGl0aW9uIGFsbCBydW5lc3RvbmUgY29tcG9uZW50cyBzaG91bGQgZG8gdGhlIGZvbGxvd2luZyB0aGluZ3M6XHJcbiAqXHJcbiAqIDEuICAgRW5zdXJlIHRoYXQgdGhleSBhcmUgd3JhcHBlZCBpbiBhIGRpdiB3aXRoIHRoZSBjbGFzcyBydW5lc3RvbmVcclxuICogMi4gICBXcml0ZSB0aGVpciBzb3VyY2UgQU5EIHRoZWlyIGdlbmVyYXRlZCBodG1sIHRvIHRoZSBkYXRhYmFzZSBpZiB0aGUgZGF0YWJhc2UgaXMgY29uZmlndXJlZFxyXG4gKiAzLiAgIFByb3Blcmx5IHNhdmUgYW5kIHJlc3RvcmUgdGhlaXIgYW5zd2VycyB1c2luZyB0aGUgY2hlY2tTZXJ2ZXIgbWVjaGFuaXNtIGluIHRoaXMgYmFzZSBjbGFzcy4gRWFjaCBjb21wb25lbnQgbXVzdCBwcm92aWRlIGFuIGltcGxlbWVudGF0aW9uIG9mOlxyXG4gKlxyXG4gKiAgICAgIC0gICAgY2hlY2tMb2NhbFN0b3JhZ2VcclxuICogICAgICAtICAgIHNldExvY2FsU3RvcmFnZVxyXG4gKiAgICAgIC0gICAgcmVzdG9yZUFuc3dlcnNcclxuICogICAgICAtICAgIGRpc2FibGVJbnRlcmFjdGlvblxyXG4gKlxyXG4gKiA0LiAgIHByb3ZpZGUgYSBTZWxlbml1bSBiYXNlZCB1bml0IHRlc3RcclxuICovXHJcblxyXG5pbXBvcnQgeyBwYWdlUHJvZ3Jlc3NUcmFja2VyIH0gZnJvbSBcIi4vYm9va2Z1bmNzLmpzXCI7XHJcbi8vaW1wb3J0IFwiLi8uLi9zdHlsZXMvcnVuZXN0b25lLWN1c3RvbS1zcGhpbngtYm9vdHN0cmFwLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVuZXN0b25lQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRfcmVhZHlfcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gdGhpcy5fY29tcG9uZW50X3JlYWR5X3Jlc29sdmVfZm4gPSByZXNvbHZlKVxyXG4gICAgICAgIHRoaXMub3B0aW9uYWwgPSBmYWxzZTtcclxuICAgICAgICBpZiAob3B0cykge1xyXG4gICAgICAgICAgICB0aGlzLnNpZCA9IG9wdHMuc2lkO1xyXG4gICAgICAgICAgICB0aGlzLmdyYWRlcmFjdGl2ZSA9IG9wdHMuZ3JhZGVyYWN0aXZlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dmZWVkYmFjayA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChvcHRzLnRpbWVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGltZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvcHRzLmVuZm9yY2VEZWFkbGluZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWFkbGluZSA9IG9wdHMuZGVhZGxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCQob3B0cy5vcmlnKS5kYXRhKFwib3B0aW9uYWxcIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25hbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvcHRzLnNlbGVjdG9yX2lkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdG9yX2lkID0gb3B0cy5zZWxlY3Rvcl9pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdHMuYXNzZXNzbWVudFRha2VuICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFzc2Vzc21lbnRUYWtlbiA9IG9wdHMuYXNzZXNzbWVudFRha2VuO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gZGVmYXVsdCB0byB0cnVlIGFzIHRoaXMgb3B0IGlzIG9ubHkgcHJvdmlkZWQgZnJvbSBhIHRpbWVkQXNzZXNzbWVudFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hc3Nlc3NtZW50VGFrZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgZm9yIHRoZSBzZWxlY3RxdWVzdGlvbiBwb2ludHNcclxuICAgICAgICAgICAgLy8gSWYgYSBzZWxlY3RxdWVzdGlvbiBpcyBwYXJ0IG9mIGEgdGltZWQgZXhhbSBpdCB3aWxsIGdldFxyXG4gICAgICAgICAgICAvLyB0aGUgdGltZWRXcmFwcGVyIG9wdGlvbnMuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0cy50aW1lZFdyYXBwZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZWRXcmFwcGVyID0gb3B0cy50aW1lZFdyYXBwZXI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBIb3dldmVyIHNvbWV0aW1lcyBzZWxlY3RxdWVzdGlvbnNcclxuICAgICAgICAgICAgICAgIC8vIGFyZSB1c2VkIGluIHJlZ3VsYXIgYXNzaWdubWVudHMuICBUaGUgaGFja3kgd2F5IHRvIGRldGVjdCB0aGlzXHJcbiAgICAgICAgICAgICAgICAvLyBpcyB0byBsb29rIGZvciBkb0Fzc2lnbm1lbnQgaW4gdGhlIFVSTCBhbmQgdGhlbiBncmFiXHJcbiAgICAgICAgICAgICAgICAvLyB0aGUgYXNzaWdubWVudCBuYW1lIGZyb20gdGhlIGhlYWRpbmcuXHJcbiAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24uaHJlZi5pbmRleE9mKFwiZG9Bc3NpZ25tZW50XCIpID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVkV3JhcHBlciA9ICQoXCJoMSNhc3NpZ25tZW50X25hbWVcIikudGV4dCgpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZWRXcmFwcGVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoJChvcHRzLm9yaWcpLmRhdGEoXCJxdWVzdGlvbl9sYWJlbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbl9sYWJlbCA9ICQob3B0cy5vcmlnKS5kYXRhKFwicXVlc3Rpb25fbGFiZWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5qc29uSGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcclxuICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLi4gX2xvZ0Jvb2tFdmVudDpcclxuICAgIC8vXHJcbiAgICAvLyBsb2dCb29rRXZlbnRcclxuICAgIC8vIC0tLS0tLS0tLS0tLVxyXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBzZW5kcyB0aGUgcHJvdmlkZWQgYGBldmVudEluZm9gYCB0byB0aGUgYGhzYmxvZyBlbmRwb2ludGAgb2YgdGhlIHNlcnZlci4gQXdhaXRpbmcgdGhpcyBmdW5jdGlvbiByZXR1cm5zIGVpdGhlciBgYHVuZGVmaW5lZGBgIChpZiBSdW5lc3RvbmUgc2VydmljZXMgYXJlIG5vdCBhdmFpbGFibGUpIG9yIHRoZSBkYXRhIHJldHVybmVkIGJ5IHRoZSBzZXJ2ZXIgYXMgYSBKYXZhU2NyaXB0IG9iamVjdCAoYWxyZWFkeSBKU09OLWRlY29kZWQpLlxyXG4gICAgYXN5bmMgbG9nQm9va0V2ZW50KGV2ZW50SW5mbykge1xyXG4gICAgICAgIGlmICh0aGlzLmdyYWRlcmFjdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwb3N0X3JldHVybjtcclxuICAgICAgICBldmVudEluZm8uY291cnNlID0gZUJvb2tDb25maWcuY291cnNlO1xyXG4gICAgICAgIGV2ZW50SW5mby5jbGllbnRMb2dpblN0YXR1cyA9IGVCb29rQ29uZmlnLmlzTG9nZ2VkSW47XHJcbiAgICAgICAgZXZlbnRJbmZvLnRpbWV6b25lb2Zmc2V0ID0gbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpIC8gNjA7XHJcbiAgICAgICAgaWYgKHRoaXMucGVyY2VudCkge1xyXG4gICAgICAgICAgICBldmVudEluZm8ucGVyY2VudCA9IHRoaXMucGVyY2VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVCb29rQ29uZmlnLnVzZVJ1bmVzdG9uZVNlcnZpY2VzICYmIGVCb29rQ29uZmlnLmxvZ0xldmVsID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGVCb29rQ29uZmlnLmFqYXhVUkwgKyBcImhzYmxvZ1wiLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogdGhpcy5qc29uSGVhZGVycyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGV2ZW50SW5mbyksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHNhdmUgdGhlIGxvZyBlbnRyeVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBvc3RfcmV0dXJuID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1RpbWVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoYEVycm9yOiBZb3VyIGFjdGlvbiB3YXMgbm90IHNhdmVkISBUaGUgZXJyb3Igd2FzICR7ZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHtlfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5pc1RpbWVkIHx8IGVCb29rQ29uZmlnLmRlYnVnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9nZ2luZyBldmVudCBcIiArIEpTT04uc3RyaW5naWZ5KGV2ZW50SW5mbykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHR5cGVvZiBwYWdlUHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZVByb2dyZXNzID09PSBcImZ1bmN0aW9uXCIgJiZcclxuICAgICAgICAgICAgZXZlbnRJbmZvLmFjdCAhPSBcImVkaXRcIiAmJlxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbmFsID09IGZhbHNlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHBhZ2VQcm9ncmVzc1RyYWNrZXIudXBkYXRlUHJvZ3Jlc3MoZXZlbnRJbmZvLmRpdl9pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3N0X3JldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyAuLiBfbG9nUnVuRXZlbnQ6XHJcbiAgICAvL1xyXG4gICAgLy8gbG9nUnVuRXZlbnRcclxuICAgIC8vIC0tLS0tLS0tLS0tXHJcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHNlbmRzIHRoZSBwcm92aWRlZCBgYGV2ZW50SW5mb2BgIHRvIHRoZSBgcnVubG9nIGVuZHBvaW50YC4gV2hlbiBhd2FpdGVkLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIGRhdGEgKGRlY29kZWQgZnJvbSBKU09OKSB0aGUgc2VydmVyIHNlbnQgYmFjay5cclxuICAgIGFzeW5jIGxvZ1J1bkV2ZW50KGV2ZW50SW5mbykge1xyXG4gICAgICAgIGxldCBwb3N0X3Byb21pc2UgPSBcImRvbmVcIjtcclxuICAgICAgICBpZiAodGhpcy5ncmFkZXJhY3RpdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBldmVudEluZm8uY291cnNlID0gZUJvb2tDb25maWcuY291cnNlO1xyXG4gICAgICAgIGV2ZW50SW5mby5jbGllbnRMb2dpblN0YXR1cyA9IGVCb29rQ29uZmlnLmlzTG9nZ2VkSW47XHJcbiAgICAgICAgZXZlbnRJbmZvLnRpbWV6b25lb2Zmc2V0ID0gbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpIC8gNjA7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9yY2VTYXZlIHx8IFwidG9fc2F2ZVwiIGluIGV2ZW50SW5mbyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgZXZlbnRJbmZvLnNhdmVfY29kZSA9IFwiVHJ1ZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZUJvb2tDb25maWcudXNlUnVuZXN0b25lU2VydmljZXMgJiYgZUJvb2tDb25maWcubG9nTGV2ZWwgPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoZUJvb2tDb25maWcuYWpheFVSTCArIFwicnVubG9nLmpzb25cIiwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuanNvbkhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShldmVudEluZm8pLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCk7XHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBsb2cgdGhlIHJ1blwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwb3N0X3Byb21pc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5pc1RpbWVkIHx8IGVCb29rQ29uZmlnLmRlYnVnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicnVubmluZyBcIiArIEpTT04uc3RyaW5naWZ5KGV2ZW50SW5mbykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHR5cGVvZiBwYWdlUHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZVByb2dyZXNzID09PSBcImZ1bmN0aW9uXCIgJiZcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25hbCA9PSBmYWxzZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBwYWdlUHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZVByb2dyZXNzKGV2ZW50SW5mby5kaXZfaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zdF9wcm9taXNlO1xyXG4gICAgfVxyXG4gICAgLyogQ2hlY2tpbmcvbG9hZGluZyBmcm9tIHN0b3JhZ2VcclxuICAgICoqV0FSTklORzoqKiAgRE8gTk9UIGBhd2FpdGAgdGhpcyBmdW5jdGlvbiFcclxuICAgIFRoaXMgZnVuY3Rpb24sIGFsdGhvdWdoIGFzeW5jLCBkb2VzIG5vdCBleHBsaWNpdGx5IHJlc29sdmUgaXRzIHByb21pc2UgYnkgcmV0dXJuaW5nIGEgdmFsdWUuICBUaGUgcmVhc29uIGZvciB0aGlzIGlzIGJlY2F1c2UgaXQgaXMgY2FsbGVkIGJ5IHRoZSBjb25zdHJ1Y3RvciBmb3IgbmVhcmx5IGV2ZXJ5IGNvbXBvbmVudC4gIEluIEphdmFzY3JpcHQgY29uc3RydWN0b3JzIGNhbm5vdCBiZSBhc3luYyFcclxuXHJcbiAgICBPbmUgb2YgdGhlIHJlY29tbWVuZGVkIHdheXMgdG8gaGFuZGxlIHRoZSBhc3luYyByZXF1aXJlbWVudHMgZnJvbSB3aXRoaW4gYSBjb25zdHJ1Y3RvciBpcyB0byB1c2UgYW4gYXR0cmlidXRlIGFzIGEgcHJvbWlzZSBhbmQgcmVzb2x2ZSB0aGF0IGF0dHJpYnV0ZSBhdCB0aGUgYXBwcm9wcmlhdGUgdGltZS5cclxuICAgICovXHJcbiAgICBhc3luYyBjaGVja1NlcnZlcihcclxuICAgICAgICAvLyBBIHN0cmluZyBzcGVjaWZ5aW5nIHRoZSBldmVudCBuYW1lIHRvIHVzZSBmb3IgcXVlcnlpbmcgdGhlIDpyZWY6YGdldEFzc2Vzc1Jlc3VsdHNgIGVuZHBvaW50LlxyXG4gICAgICAgIGV2ZW50SW5mbyxcclxuICAgICAgICAvLyBJZiB0cnVlLCB0aGlzIGZ1bmN0aW9uIHdpbGwgaW52b2tlIGBgaW5kaWNhdGVfY29tcG9uZW50X3JlYWR5KClgYCBqdXN0IGJlZm9yZSBpdCByZXR1cm5zLiBUaGlzIGlzIHByb3ZpZGVkIHNpbmNlIG1vc3QgY29tcG9uZW50cyBhcmUgcmVhZHkgYWZ0ZXIgdGhpcyBmdW5jdGlvbiBjb21wbGV0ZXMgaXRzIHdvcmsuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBUT0RPOiBUaGlzIGRlZmF1bHRzIHRvIGZhbHNlLCB0byBhdm9pZCBjYXVzaW5nIHByb2JsZW1zIHdpdGggYW55IGNvbXBvbmVudHMgdGhhdCBoYXZlbid0IGJlZW4gdXBkYXRlZCBhbmQgdGVzdGVkLiBBZnRlciBhbGwgUnVuZXN0b25lIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQsIGRlZmF1bHQgdGhpcyB0byB0cnVlIGFuZCByZW1vdmUgdGhlIGV4dHJhIHBhcmFtZXRlciBmcm9tIG1vc3QgY2FsbHMgdG8gdGhpcyBmdW5jdGlvbi5cclxuICAgICAgICB3aWxsX2JlX3JlYWR5ID0gZmFsc2VcclxuICAgICkge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBzZXJ2ZXIgaGFzIHN0b3JlZCBhbnN3ZXJcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jaGVja1NlcnZlckNvbXBsZXRlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBzZWxmLmNzcmVzb2x2ZXIgPSByZXNvbHZlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnVzZVJ1bmVzdG9uZVNlcnZpY2VzIHx8IHRoaXMuZ3JhZGVyYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0ge307XHJcbiAgICAgICAgICAgIGRhdGEuZGl2X2lkID0gdGhpcy5kaXZpZDtcclxuICAgICAgICAgICAgZGF0YS5jb3Vyc2UgPSBlQm9va0NvbmZpZy5jb3Vyc2U7XHJcbiAgICAgICAgICAgIGRhdGEuZXZlbnQgPSBldmVudEluZm87XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdyYWRlcmFjdGl2ZSAmJiB0aGlzLmRlYWRsaW5lKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmRlYWRsaW5lID0gdGhpcy5kZWFkbGluZTtcclxuICAgICAgICAgICAgICAgIGRhdGEucmF3ZGVhZGxpbmUgPSB0aGlzLnJhd2RlYWRsaW5lO1xyXG4gICAgICAgICAgICAgICAgZGF0YS50em9mZiA9IHRoaXMudHpvZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2lkKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnNpZCA9IHRoaXMuc2lkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZUJvb2tDb25maWcucHJhY3RpY2VfbW9kZSAmJiB0aGlzLmFzc2Vzc21lbnRUYWtlbikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdChcclxuICAgICAgICAgICAgICAgICAgICBlQm9va0NvbmZpZy5hamF4VVJMICsgXCJnZXRBc3Nlc3NSZXN1bHRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogdGhpcy5qc29uSGVhZGVycyxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwb3B1bGF0ZUZyb21TdG9yYWdlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3NyZXNvbHZlcihcInNlcnZlclwiKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tMb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWREYXRhKHt9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3NyZXNvbHZlcihcIm5vdCB0YWtlblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tMb2NhbFN0b3JhZ2UoKTsgLy8ganVzdCBnbyByaWdodCB0byBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgICAgIHRoaXMuY3NyZXNvbHZlcihcImxvY2FsXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHdpbGxfYmVfcmVhZHkpIHtcclxuICAgICAgICAgICAgdGhpcy5pbmRpY2F0ZV9jb21wb25lbnRfcmVhZHkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhpcyBtZXRob2QgYXNzdW1lcyB0aGF0IGBgdGhpcy5jb21wb25lbnREaXZgYCByZWZlcnMgdG8gdGhlIGBgZGl2YGAgY29udGFpbmluZyB0aGUgY29tcG9uZW50LCBhbmQgdGhhdCB0aGlzIGNvbXBvbmVudCdzIElEIGlzIHNldC5cclxuICAgIGluZGljYXRlX2NvbXBvbmVudF9yZWFkeSgpIHtcclxuICAgICAgICAvLyBBZGQgYSBjbGFzcyB0byBpbmRpY2F0ZSB0aGUgY29tcG9uZW50IGlzIG5vdyByZWFkeS5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKFwicnVuZXN0b25lLWNvbXBvbmVudC1yZWFkeVwiKTtcclxuICAgICAgICAvLyBSZXNvbHZlIHRoZSBgYHRoaXMuY29tcG9uZW50X3JlYWR5X3Byb21pc2VgYC5cclxuICAgICAgICB0aGlzLl9jb21wb25lbnRfcmVhZHlfcmVzb2x2ZV9mbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWREYXRhKGRhdGEpIHtcclxuICAgICAgICAvLyBmb3IgbW9zdCBjbGFzc2VzLCBsb2FkRGF0YSBkb2Vzbid0IGRvIGFueXRoaW5nLiBCdXQgZm9yIFBhcnNvbnMsIGFuZCBwZXJoYXBzIG90aGVycyBpbiB0aGUgZnV0dXJlLFxyXG4gICAgICAgIC8vIGluaXRpYWxpemF0aW9uIGNhbiBoYXBwZW4gZXZlbiB3aGVuIHRoZXJlJ3Mgbm8gaGlzdG9yeSB0byBiZSBsb2FkZWRcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJlcG9wdWxhdGVGcm9tU3RvcmFnZSBpcyBjYWxsZWQgYWZ0ZXIgYSBzdWNjZXNzZnVsIEFQSSBjYWxsIGlzIG1hZGUgdG8gYGBnZXRBc3Nlc3NSZXN1bHRzYGAgaW5cclxuICAgICAqIHRoZSBjaGVja1NlcnZlciBtZXRob2QgaW4gdGhpcyBjbGFzc1xyXG4gICAgICpcclxuICAgICAqIGBgcmVzdG9yZUFuc3dlcnMsYGAgYGBzZXRMb2NhbFN0b3JhZ2VgYCBhbmQgYGBjaGVja0xvY2FsU3RvcmFnZWBgIGFyZSBkZWZpbmVkIGluIHRoZSBjaGlsZCBjbGFzc2VzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Kn0gZGF0YSAtIGEgSlNPTiBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBkYXRhIG5lZWRlZCB0byByZXN0b3JlIGEgcHJldmlvdXMgYW5zd2VyIGZvciBhIGNvbXBvbmVudFxyXG4gICAgICogQHBhcmFtIHsqfSBzdGF0dXMgLSB0aGUgaHR0cCBzdGF0dXNcclxuICAgICAqIEBwYXJhbSB7Kn0gd2hhdGV2ZXIgLSBpZ25vcmVkXHJcbiAgICAgKi9cclxuICAgIHJlcG9wdWxhdGVGcm9tU3RvcmFnZShkYXRhKSB7XHJcbiAgICAgICAgLy8gZGVjaWRlIHdoZXRoZXIgdG8gdXNlIHRoZSBzZXJ2ZXIncyBhbnN3ZXIgKGlmIHRoZXJlIGlzIG9uZSkgb3IgdG8gbG9hZCBmcm9tIHN0b3JhZ2VcclxuICAgICAgICBpZiAoZGF0YSAhPT0gbnVsbCAmJiB0aGlzLnNob3VsZFVzZVNlcnZlcihkYXRhKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RvcmVBbnN3ZXJzKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLnNldExvY2FsU3RvcmFnZShkYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hvdWxkVXNlU2VydmVyKGRhdGEpIHtcclxuICAgICAgICAvLyByZXR1cm5zIHRydWUgaWYgc2VydmVyIGRhdGEgaXMgbW9yZSByZWNlbnQgdGhhbiBsb2NhbCBzdG9yYWdlIG9yIGlmIHNlcnZlciBzdG9yYWdlIGlzIGNvcnJlY3RcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGRhdGEuY29ycmVjdCA9PT0gXCJUXCIgfHxcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmxlbmd0aCA9PT0gMCB8fFxyXG4gICAgICAgICAgICB0aGlzLmdyYWRlcmFjdGl2ZSA9PT0gdHJ1ZSB8fFxyXG4gICAgICAgICAgICB0aGlzLmlzVGltZWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBleCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KCkpO1xyXG4gICAgICAgIGlmIChleCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHN0b3JlZERhdGE7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc3RvcmVkRGF0YSA9IEpTT04ucGFyc2UoZXgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAvLyBlcnJvciB3aGlsZSBwYXJzaW5nOyBsaWtlbHkgZHVlIHRvIGJhZCB2YWx1ZSBzdG9yZWQgaW4gc3RvcmFnZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KCkpO1xyXG4gICAgICAgICAgICAvLyBkZWZpbml0ZWx5IGRvbid0IHdhbnQgdG8gdXNlIGxvY2FsIHN0b3JhZ2UgaGVyZVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGEuYW5zd2VyID09IHN0b3JlZERhdGEuYW5zd2VyKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBsZXQgc3RvcmFnZURhdGUgPSBuZXcgRGF0ZShzdG9yZWREYXRhLnRpbWVzdGFtcCk7XHJcbiAgICAgICAgbGV0IHNlcnZlckRhdGUgPSBuZXcgRGF0ZShkYXRhLnRpbWVzdGFtcCk7XHJcbiAgICAgICAgcmV0dXJuIHNlcnZlckRhdGUgPj0gc3RvcmFnZURhdGU7XHJcbiAgICB9XHJcbiAgICAvLyBSZXR1cm4gdGhlIGtleSB3aGljaCB0byBiZSB1c2VkIHdoZW4gYWNjZXNzaW5nIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICBsb2NhbFN0b3JhZ2VLZXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgZUJvb2tDb25maWcuZW1haWwgK1xyXG4gICAgICAgICAgICBcIjpcIiArXHJcbiAgICAgICAgICAgIGVCb29rQ29uZmlnLmNvdXJzZSArXHJcbiAgICAgICAgICAgIFwiOlwiICtcclxuICAgICAgICAgICAgdGhpcy5kaXZpZCArXHJcbiAgICAgICAgICAgIFwiLWdpdmVuXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgYWRkQ2FwdGlvbihlbFR5cGUpIHtcclxuICAgICAgICAvL3NvbWVFbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0VsZW1lbnQsIHNvbWVFbGVtZW50Lm5leHRTaWJsaW5nKTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNUaW1lZCkge1xyXG4gICAgICAgICAgICB2YXIgY2FwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnF1ZXN0aW9uX2xhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcHRpb24gPSBgQWN0aXZpdHk6ICR7dGhpcy5xdWVzdGlvbl9sYWJlbH0gJHt0aGlzLmNhcHRpb259ICA8c3BhbiBjbGFzcz1cInJ1bmVzdG9uZV9jYXB0aW9uX2RpdmlkXCI+KCR7dGhpcy5kaXZpZH0pPC9zcGFuPmA7XHJcbiAgICAgICAgICAgICAgICAkKGNhcERpdikuaHRtbCh0aGlzLmNhcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgJChjYXBEaXYpLmFkZENsYXNzKGAke2VsVHlwZX1fY2FwdGlvbmApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChjYXBEaXYpLmh0bWwodGhpcy5jYXB0aW9uICsgXCIgKFwiICsgdGhpcy5kaXZpZCArIFwiKVwiKTtcclxuICAgICAgICAgICAgICAgICQoY2FwRGl2KS5hZGRDbGFzcyhgJHtlbFR5cGV9X2NhcHRpb25gKTtcclxuICAgICAgICAgICAgICAgICQoY2FwRGl2KS5hZGRDbGFzcyhgJHtlbFR5cGV9X2NhcHRpb25fdGV4dGApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2FwRGl2ID0gY2FwRGl2O1xyXG4gICAgICAgICAgICAvL3RoaXMub3V0ZXJEaXYucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2FwRGl2LCB0aGlzLm91dGVyRGl2Lm5leHRTaWJsaW5nKTtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoY2FwRGl2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFzVXNlckFjdGl2aXR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzQW5zd2VyZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tDdXJyZW50QW5zd2VyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICBcIkVhY2ggY29tcG9uZW50IHNob3VsZCBwcm92aWRlIGFuIGltcGxlbWVudGF0aW9uIG9mIGNoZWNrQ3VycmVudEFuc3dlclwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBsb2dDdXJyZW50QW5zd2VyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICBcIkVhY2ggY29tcG9uZW50IHNob3VsZCBwcm92aWRlIGFuIGltcGxlbWVudGF0aW9uIG9mIGxvZ0N1cnJlbnRBbnN3ZXJcIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJGZWVkYmFjaygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgXCJFYWNoIGNvbXBvbmVudCBzaG91bGQgcHJvdmlkZSBhbiBpbXBsZW1lbnRhdGlvbiBvZiByZW5kZXJGZWVkYmFja1wiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGRpc2FibGVJbnRlcmFjdGlvbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgXCJFYWNoIGNvbXBvbmVudCBzaG91bGQgcHJvdmlkZSBhbiBpbXBsZW1lbnRhdGlvbiBvZiBkaXNhYmxlSW50ZXJhY3Rpb25cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5SdW5lc3RvbmVCYXNlID0gUnVuZXN0b25lQmFzZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==