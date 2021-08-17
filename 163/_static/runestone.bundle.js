(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone"],{

/***/ 88288:
/*!*************************************************!*\
  !*** ./runestone/common/css/presenter_mode.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 64778:
/*!********************************************************************!*\
  !*** ./runestone/common/css/runestone-custom-sphinx-bootstrap.css ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 88874:
/*!**************************************************!*\
  !*** ./runestone/common/css/user-highlights.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 23746:
/*!*********************************************!*\
  !*** ./runestone/matrixeq/css/matrixeq.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 86324:
/*!******************************************************!*\
  !*** ./runestone/webgldemo/css/webglinteractive.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

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
$(function () {
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
window.addEventListener("load", function () {
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

/***/ 26886:
/*!**************************************************!*\
  !*** ./runestone/common/js/jquery.idle-timer.js ***!
  \**************************************************/
/***/ (() => {

/*!
 * jQuery idleTimer plugin
 * version 0.9.100511
 * by Paul Irish.
 *   http://github.com/paulirish/yui-misc/tree/
 * MIT license

 * adapted from YUI idle timer by nzakas:
 *   http://github.com/nzakas/yui-misc/
*/
/*
 * Copyright (c) 2009 Nicholas C. Zakas
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* updated to fix Chrome setTimeout issue by Zaid Zawaideh */

 // API available in <= v0.8
 /*******************************

 // idleTimer() takes an optional argument that defines the idle timeout
 // timeout is in milliseconds; defaults to 30000
 $.idleTimer(10000);


 $(document).bind("idle.idleTimer", function(){
    // function you want to fire when the user goes idle
 });


 $(document).bind("active.idleTimer", function(){
  // function you want to fire when the user becomes active again
 });

 // pass the string 'destroy' to stop the timer
 $.idleTimer('destroy');

 // you can query if the user is idle or not with data()
 $.data(document,'idleTimer');  // 'idle'  or 'active'

 // you can get time elapsed since user when idle/active
 $.idleTimer('getElapsedTime'); // time since state change in ms

 ********/



 // API available in >= v0.9
 /*************************

 // bind to specific elements, allows for multiple timer instances
 $(elem).idleTimer(timeout|'destroy'|'getElapsedTime');
 $.data(elem,'idleTimer');  // 'idle'  or 'active'

 // if you're using the old $.idleTimer api, you should not do $(document).idleTimer(...)

 // element bound timers will only watch for events inside of them.
 // you may just want page-level activity, in which case you may set up
 //   your timers on document, document.documentElement, and document.body

 // You can optionally provide a second argument to override certain options.
 // Here are the defaults, so you can omit any or all of them.
 $(elem).idleTimer(timeout, {
   startImmediately: true, //starts a timeout as soon as the timer is set up; otherwise it waits for the first event.
   idle:    false,         //indicates if the user is idle
   enabled: true,          //indicates if the idle timer is enabled
   events:  'mousemove keydown DOMMouseScroll mousewheel mousedown touchstart touchmove' // activity is one of these events
 });

 ********/

(function($){

$.idleTimer = function(newTimeout, elem, opts){

    // defaults that are to be stored as instance props on the elem

	opts = $.extend({
		startImmediately: true, //starts a timeout as soon as the timer is set up
		idle:    false,         //indicates if the user is idle
		enabled: true,          //indicates if the idle timer is enabled
		timeout: 30000,         //the amount of time (ms) before the user is considered idle
		events:  'mousemove keydown DOMMouseScroll mousewheel mousedown touchstart touchmove' // activity is one of these events
	}, opts);


    elem = elem || document;

    /* (intentionally not documented)
     * Toggles the idle state and fires an appropriate event.
     * @return {void}
     */
    var toggleIdleState = function(myelem){

        // curse you, mozilla setTimeout lateness bug!
        if (typeof myelem === 'number'){
            myelem = undefined;
        }

        var obj = $.data(myelem || elem,'idleTimerObj');

        //toggle the state
        obj.idle = !obj.idle;

        // reset timeout 
        var elapsed = (+new Date()) - obj.olddate;
        obj.olddate = +new Date();

        // handle Chrome always triggering idle after js alert or comfirm popup
        if (obj.idle && (elapsed < opts.timeout)) {
                obj.idle = false;
                clearTimeout($.idleTimer.tId);
                if (opts.enabled)
                  $.idleTimer.tId = setTimeout(toggleIdleState, opts.timeout);
                return;
        }
        
        //fire appropriate event

        // create a custom event, but first, store the new state on the element
        // and then append that string to a namespace
        var event = jQuery.Event( $.data(elem,'idleTimer', obj.idle ? "idle" : "active" )  + '.idleTimer'   );

        // we do want this to bubble, at least as a temporary fix for jQuery 1.7
        // event.stopPropagation();
        $(elem).trigger(event);
    },

    /**
     * Stops the idle timer. This removes appropriate event handlers
     * and cancels any pending timeouts.
     * @return {void}
     * @method stop
     * @static
     */
    stop = function(elem){

        var obj = $.data(elem,'idleTimerObj') || {};

        //set to disabled
        obj.enabled = false;

        //clear any pending timeouts
        clearTimeout(obj.tId);

        //detach the event handlers
        $(elem).off('.idleTimer');
    },


    /* (intentionally not documented)
     * Handles a user event indicating that the user isn't idle.
     * @param {Event} event A DOM2-normalized event object.
     * @return {void}
     */
    handleUserEvent = function(){

        var obj = $.data(this,'idleTimerObj');

        //clear any existing timeout
        clearTimeout(obj.tId);



        //if the idle timer is enabled
        if (obj.enabled){


            //if it's idle, that means the user is no longer idle
            if (obj.idle){
                toggleIdleState(this);
            }

            //set a new timeout
            obj.tId = setTimeout(toggleIdleState, obj.timeout);

        }
     };


    /**
     * Starts the idle timer. This adds appropriate event handlers
     * and starts the first timeout.
     * @param {int} newTimeout (Optional) A new value for the timeout period in ms.
     * @return {void}
     * @method $.idleTimer
     * @static
     */


    var obj = $.data(elem,'idleTimerObj') || {};

    obj.olddate = obj.olddate || +new Date();

    //assign a new timeout if necessary
    if (typeof newTimeout === "number"){
        opts.timeout = newTimeout;
    } else if (newTimeout === 'destroy') {
        stop(elem);
        return this;
    } else if (newTimeout === 'getElapsedTime'){
        return (+new Date()) - obj.olddate;
    }

    //assign appropriate event handlers
    $(elem).on($.trim((opts.events+' ').split(' ').join('.idleTimer ')),handleUserEvent);


    obj.idle    = opts.idle;
    obj.enabled = opts.enabled;
    obj.timeout = opts.timeout;


    //set a timeout to toggle state. May wish to omit this in some situations
	if (opts.startImmediately) {
	    obj.tId = setTimeout(toggleIdleState, obj.timeout);
	}

    // assume the user is active for the first x seconds.
    $.data(elem,'idleTimer',"active");

    // store our instance on the object
    $.data(elem,'idleTimerObj',obj);



}; // end of $.idleTimer()


// v0.9 API for defining multiple timers.
$.fn.idleTimer = function(newTimeout,opts){
	// Allow omission of opts for backward compatibility
	if (!opts) {
		opts = {};
	}

    if(this[0]){
        $.idleTimer(newTimeout,this[0],opts);
    }

    return this;
};


})(jQuery);


/***/ }),

/***/ 43793:
/*!*********************************************************************!*\
  !*** ./runestone/common/js/jquery_i18n/jquery.i18n.emitter.bidi.js ***!
  \*********************************************************************/
/***/ (() => {

/*!
 * BIDI embedding support for jQuery.i18n
 *
 * Copyright (C) 2015, David Chan
 *
 * This code is dual licensed GPLv2 or later and MIT. You don't have to do
 * anything special to choose one license or the other and you don't have to
 * notify anyone which license you are using. You are free to use this code
 * in commercial projects as long as the copyright header is left intact.
 * See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */

( function ( $ ) {
	'use strict';
	var strongDirRegExp;

	/**
	 * Matches the first strong directionality codepoint:
	 * - in group 1 if it is LTR
	 * - in group 2 if it is RTL
	 * Does not match if there is no strong directionality codepoint.
	 *
	 * Generated by UnicodeJS (see tools/strongDir) from the UCD; see
	 * https://phabricator.wikimedia.org/diffusion/GUJS/ .
	 */
	strongDirRegExp = new RegExp(
		'(?:' +
			'(' +
				'[\u0041-\u005a\u0061-\u007a\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u02bb-\u02c1\u02d0\u02d1\u02e0-\u02e4\u02ee\u0370-\u0373\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0482\u048a-\u052f\u0531-\u0556\u0559-\u055f\u0561-\u0587\u0589\u0903-\u0939\u093b\u093d-\u0940\u0949-\u094c\u094e-\u0950\u0958-\u0961\u0964-\u0980\u0982\u0983\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd-\u09c0\u09c7\u09c8\u09cb\u09cc\u09ce\u09d7\u09dc\u09dd\u09df-\u09e1\u09e6-\u09f1\u09f4-\u09fa\u0a03\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a3e-\u0a40\u0a59-\u0a5c\u0a5e\u0a66-\u0a6f\u0a72-\u0a74\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd-\u0ac0\u0ac9\u0acb\u0acc\u0ad0\u0ae0\u0ae1\u0ae6-\u0af0\u0af9\u0b02\u0b03\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b3e\u0b40\u0b47\u0b48\u0b4b\u0b4c\u0b57\u0b5c\u0b5d\u0b5f-\u0b61\u0b66-\u0b77\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe\u0bbf\u0bc1\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcc\u0bd0\u0bd7\u0be6-\u0bf2\u0c01-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c41-\u0c44\u0c58-\u0c5a\u0c60\u0c61\u0c66-\u0c6f\u0c7f\u0c82\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd-\u0cc4\u0cc6-\u0cc8\u0cca\u0ccb\u0cd5\u0cd6\u0cde\u0ce0\u0ce1\u0ce6-\u0cef\u0cf1\u0cf2\u0d02\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d40\u0d46-\u0d48\u0d4a-\u0d4c\u0d4e\u0d57\u0d5f-\u0d61\u0d66-\u0d75\u0d79-\u0d7f\u0d82\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dcf-\u0dd1\u0dd8-\u0ddf\u0de6-\u0def\u0df2-\u0df4\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e4f-\u0e5b\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0ed0-\u0ed9\u0edc-\u0edf\u0f00-\u0f17\u0f1a-\u0f34\u0f36\u0f38\u0f3e-\u0f47\u0f49-\u0f6c\u0f7f\u0f85\u0f88-\u0f8c\u0fbe-\u0fc5\u0fc7-\u0fcc\u0fce-\u0fda\u1000-\u102c\u1031\u1038\u103b\u103c\u103f-\u1057\u105a-\u105d\u1061-\u1070\u1075-\u1081\u1083\u1084\u1087-\u108c\u108e-\u109c\u109e-\u10c5\u10c7\u10cd\u10d0-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1360-\u137c\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u167f\u1681-\u169a\u16a0-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1735\u1736\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17b6\u17be-\u17c5\u17c7\u17c8\u17d4-\u17da\u17dc\u17e0-\u17e9\u1810-\u1819\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1923-\u1926\u1929-\u192b\u1930\u1931\u1933-\u1938\u1946-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u19d0-\u19da\u1a00-\u1a16\u1a19\u1a1a\u1a1e-\u1a55\u1a57\u1a61\u1a63\u1a64\u1a6d-\u1a72\u1a80-\u1a89\u1a90-\u1a99\u1aa0-\u1aad\u1b04-\u1b33\u1b35\u1b3b\u1b3d-\u1b41\u1b43-\u1b4b\u1b50-\u1b6a\u1b74-\u1b7c\u1b82-\u1ba1\u1ba6\u1ba7\u1baa\u1bae-\u1be5\u1be7\u1bea-\u1bec\u1bee\u1bf2\u1bf3\u1bfc-\u1c2b\u1c34\u1c35\u1c3b-\u1c49\u1c4d-\u1c7f\u1cc0-\u1cc7\u1cd3\u1ce1\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u200e\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u214f\u2160-\u2188\u2336-\u237a\u2395\u249c-\u24e9\u26ac\u2800-\u28ff\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d70\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u302e\u302f\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u3190-\u31ba\u31f0-\u321c\u3220-\u324f\u3260-\u327b\u327f-\u32b0\u32c0-\u32cb\u32d0-\u32fe\u3300-\u3376\u337b-\u33dd\u33e0-\u33fe\u3400-\u4db5\u4e00-\u9fd5\ua000-\ua48c\ua4d0-\ua60c\ua610-\ua62b\ua640-\ua66e\ua680-\ua69d\ua6a0-\ua6ef\ua6f2-\ua6f7\ua722-\ua787\ua789-\ua7ad\ua7b0-\ua7b7\ua7f7-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua824\ua827\ua830-\ua837\ua840-\ua873\ua880-\ua8c3\ua8ce-\ua8d9\ua8f2-\ua8fd\ua900-\ua925\ua92e-\ua946\ua952\ua953\ua95f-\ua97c\ua983-\ua9b2\ua9b4\ua9b5\ua9ba\ua9bb\ua9bd-\ua9cd\ua9cf-\ua9d9\ua9de-\ua9e4\ua9e6-\ua9fe\uaa00-\uaa28\uaa2f\uaa30\uaa33\uaa34\uaa40-\uaa42\uaa44-\uaa4b\uaa4d\uaa50-\uaa59\uaa5c-\uaa7b\uaa7d-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaaeb\uaaee-\uaaf5\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab65\uab70-\uabe4\uabe6\uabe7\uabe9-\uabec\uabf0-\uabf9\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\ue000-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]|\ud800[\udc00-\udc0b]|\ud800[\udc0d-\udc26]|\ud800[\udc28-\udc3a]|\ud800\udc3c|\ud800\udc3d|\ud800[\udc3f-\udc4d]|\ud800[\udc50-\udc5d]|\ud800[\udc80-\udcfa]|\ud800\udd00|\ud800\udd02|\ud800[\udd07-\udd33]|\ud800[\udd37-\udd3f]|\ud800[\uddd0-\uddfc]|\ud800[\ude80-\ude9c]|\ud800[\udea0-\uded0]|\ud800[\udf00-\udf23]|\ud800[\udf30-\udf4a]|\ud800[\udf50-\udf75]|\ud800[\udf80-\udf9d]|\ud800[\udf9f-\udfc3]|\ud800[\udfc8-\udfd5]|\ud801[\udc00-\udc9d]|\ud801[\udca0-\udca9]|\ud801[\udd00-\udd27]|\ud801[\udd30-\udd63]|\ud801\udd6f|\ud801[\ude00-\udf36]|\ud801[\udf40-\udf55]|\ud801[\udf60-\udf67]|\ud804\udc00|\ud804[\udc02-\udc37]|\ud804[\udc47-\udc4d]|\ud804[\udc66-\udc6f]|\ud804[\udc82-\udcb2]|\ud804\udcb7|\ud804\udcb8|\ud804[\udcbb-\udcc1]|\ud804[\udcd0-\udce8]|\ud804[\udcf0-\udcf9]|\ud804[\udd03-\udd26]|\ud804\udd2c|\ud804[\udd36-\udd43]|\ud804[\udd50-\udd72]|\ud804[\udd74-\udd76]|\ud804[\udd82-\uddb5]|\ud804[\uddbf-\uddc9]|\ud804\uddcd|\ud804[\uddd0-\udddf]|\ud804[\udde1-\uddf4]|\ud804[\ude00-\ude11]|\ud804[\ude13-\ude2e]|\ud804\ude32|\ud804\ude33|\ud804\ude35|\ud804[\ude38-\ude3d]|\ud804[\ude80-\ude86]|\ud804\ude88|\ud804[\ude8a-\ude8d]|\ud804[\ude8f-\ude9d]|\ud804[\ude9f-\udea9]|\ud804[\udeb0-\udede]|\ud804[\udee0-\udee2]|\ud804[\udef0-\udef9]|\ud804\udf02|\ud804\udf03|\ud804[\udf05-\udf0c]|\ud804\udf0f|\ud804\udf10|\ud804[\udf13-\udf28]|\ud804[\udf2a-\udf30]|\ud804\udf32|\ud804\udf33|\ud804[\udf35-\udf39]|\ud804[\udf3d-\udf3f]|\ud804[\udf41-\udf44]|\ud804\udf47|\ud804\udf48|\ud804[\udf4b-\udf4d]|\ud804\udf50|\ud804\udf57|\ud804[\udf5d-\udf63]|\ud805[\udc80-\udcb2]|\ud805\udcb9|\ud805[\udcbb-\udcbe]|\ud805\udcc1|\ud805[\udcc4-\udcc7]|\ud805[\udcd0-\udcd9]|\ud805[\udd80-\uddb1]|\ud805[\uddb8-\uddbb]|\ud805\uddbe|\ud805[\uddc1-\udddb]|\ud805[\ude00-\ude32]|\ud805\ude3b|\ud805\ude3c|\ud805\ude3e|\ud805[\ude41-\ude44]|\ud805[\ude50-\ude59]|\ud805[\ude80-\udeaa]|\ud805\udeac|\ud805\udeae|\ud805\udeaf|\ud805\udeb6|\ud805[\udec0-\udec9]|\ud805[\udf00-\udf19]|\ud805\udf20|\ud805\udf21|\ud805\udf26|\ud805[\udf30-\udf3f]|\ud806[\udca0-\udcf2]|\ud806\udcff|\ud806[\udec0-\udef8]|\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e]|\ud809[\udc70-\udc74]|\ud809[\udc80-\udd43]|\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38]|\ud81a[\ude40-\ude5e]|\ud81a[\ude60-\ude69]|\ud81a\ude6e|\ud81a\ude6f|\ud81a[\uded0-\udeed]|\ud81a\udef5|\ud81a[\udf00-\udf2f]|\ud81a[\udf37-\udf45]|\ud81a[\udf50-\udf59]|\ud81a[\udf5b-\udf61]|\ud81a[\udf63-\udf77]|\ud81a[\udf7d-\udf8f]|\ud81b[\udf00-\udf44]|\ud81b[\udf50-\udf7e]|\ud81b[\udf93-\udf9f]|\ud82c\udc00|\ud82c\udc01|\ud82f[\udc00-\udc6a]|\ud82f[\udc70-\udc7c]|\ud82f[\udc80-\udc88]|\ud82f[\udc90-\udc99]|\ud82f\udc9c|\ud82f\udc9f|\ud834[\udc00-\udcf5]|\ud834[\udd00-\udd26]|\ud834[\udd29-\udd66]|\ud834[\udd6a-\udd72]|\ud834\udd83|\ud834\udd84|\ud834[\udd8c-\udda9]|\ud834[\uddae-\udde8]|\ud834[\udf60-\udf71]|\ud835[\udc00-\udc54]|\ud835[\udc56-\udc9c]|\ud835\udc9e|\ud835\udc9f|\ud835\udca2|\ud835\udca5|\ud835\udca6|\ud835[\udca9-\udcac]|\ud835[\udcae-\udcb9]|\ud835\udcbb|\ud835[\udcbd-\udcc3]|\ud835[\udcc5-\udd05]|\ud835[\udd07-\udd0a]|\ud835[\udd0d-\udd14]|\ud835[\udd16-\udd1c]|\ud835[\udd1e-\udd39]|\ud835[\udd3b-\udd3e]|\ud835[\udd40-\udd44]|\ud835\udd46|\ud835[\udd4a-\udd50]|\ud835[\udd52-\udea5]|\ud835[\udea8-\udeda]|\ud835[\udedc-\udf14]|\ud835[\udf16-\udf4e]|\ud835[\udf50-\udf88]|\ud835[\udf8a-\udfc2]|\ud835[\udfc4-\udfcb]|\ud836[\udc00-\uddff]|\ud836[\ude37-\ude3a]|\ud836[\ude6d-\ude74]|\ud836[\ude76-\ude83]|\ud836[\ude85-\ude8b]|\ud83c[\udd10-\udd2e]|\ud83c[\udd30-\udd69]|\ud83c[\udd70-\udd9a]|\ud83c[\udde6-\ude02]|\ud83c[\ude10-\ude3a]|\ud83c[\ude40-\ude48]|\ud83c\ude50|\ud83c\ude51|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6]|\ud869[\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34]|\ud86d[\udf40-\udfff]|\ud86e[\udc00-\udc1d]|\ud86e[\udc20-\udfff]|[\ud86f-\ud872][\udc00-\udfff]|\ud873[\udc00-\udea1]|\ud87e[\udc00-\ude1d]|[\udb80-\udbbe][\udc00-\udfff]|\udbbf[\udc00-\udffd]|[\udbc0-\udbfe][\udc00-\udfff]|\udbff[\udc00-\udffd]' +
			')|(' +
				'[\u0590\u05be\u05c0\u05c3\u05c6\u05c8-\u05ff\u07c0-\u07ea\u07f4\u07f5\u07fa-\u0815\u081a\u0824\u0828\u082e-\u0858\u085c-\u089f\u200f\ufb1d\ufb1f-\ufb28\ufb2a-\ufb4f\u0608\u060b\u060d\u061b-\u064a\u066d-\u066f\u0671-\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u0710\u0712-\u072f\u074b-\u07a5\u07b1-\u07bf\u08a0-\u08e2\ufb50-\ufd3d\ufd40-\ufdcf\ufdf0-\ufdfc\ufdfe\ufdff\ufe70-\ufefe]|\ud802[\udc00-\udd1e]|\ud802[\udd20-\ude00]|\ud802\ude04|\ud802[\ude07-\ude0b]|\ud802[\ude10-\ude37]|\ud802[\ude3b-\ude3e]|\ud802[\ude40-\udee4]|\ud802[\udee7-\udf38]|\ud802[\udf40-\udfff]|\ud803[\udc00-\ude5f]|\ud803[\ude7f-\udfff]|\ud83a[\udc00-\udccf]|\ud83a[\udcd7-\udfff]|\ud83b[\udc00-\uddff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\ude00-\udeef]|\ud83b[\udef2-\udeff]' +
			')' +
		')'
	);

	/**
	 * Gets directionality of the first strongly directional codepoint
	 *
	 * This is the rule the BIDI algorithm uses to determine the directionality of
	 * paragraphs ( http://unicode.org/reports/tr9/#The_Paragraph_Level ) and
	 * FSI isolates ( http://unicode.org/reports/tr9/#Explicit_Directional_Isolates ).
	 *
	 * TODO: Does not handle BIDI control characters inside the text.
	 * TODO: Does not handle unallocated characters.
	 *
	 * @param {string} text The text from which to extract initial directionality.
	 * @return {string} Directionality (either 'ltr' or 'rtl')
	 */
	function strongDirFromContent( text ) {
		var m = text.match( strongDirRegExp );
		if ( !m ) {
			return null;
		}
		if ( m[ 2 ] === undefined ) {
			return 'ltr';
		}
		return 'rtl';
	}

	$.extend( $.i18n.parser.emitter, {
		/**
		 * Wraps argument with unicode control characters for directionality safety
		 *
		 * This solves the problem where directionality-neutral characters at the edge of
		 * the argument string get interpreted with the wrong directionality from the
		 * enclosing context, giving renderings that look corrupted like "(Ben_(WMF".
		 *
		 * The wrapping is LRE...PDF or RLE...PDF, depending on the detected
		 * directionality of the argument string, using the BIDI algorithm's own "First
		 * strong directional codepoint" rule. Essentially, this works round the fact that
		 * there is no embedding equivalent of U+2068 FSI (isolation with heuristic
		 * direction inference). The latter is cleaner but still not widely supported.
		 *
		 * @param {string[]} nodes The text nodes from which to take the first item.
		 * @return {string} Wrapped String of content as needed.
		 */
		bidi: function ( nodes ) {
			var dir = strongDirFromContent( nodes[ 0 ] );
			if ( dir === 'ltr' ) {
				// Wrap in LEFT-TO-RIGHT EMBEDDING ... POP DIRECTIONAL FORMATTING
				return '\u202A' + nodes[ 0 ] + '\u202C';
			}
			if ( dir === 'rtl' ) {
				// Wrap in RIGHT-TO-LEFT EMBEDDING ... POP DIRECTIONAL FORMATTING
				return '\u202B' + nodes[ 0 ] + '\u202C';
			}
			// No strong directionality: do not wrap
			return nodes[ 0 ];
		}
	} );
}( jQuery ) );


/***/ }),

/***/ 30423:
/*!****************************************************************!*\
  !*** ./runestone/common/js/jquery_i18n/jquery.i18n.emitter.js ***!
  \****************************************************************/
/***/ (() => {

/*!
 * jQuery Internationalization library
 *
 * Copyright (C) 2011-2013 Santhosh Thottingal, Neil Kandalgaonkar
 *
 * jquery.i18n is dual licensed GPLv2 or later and MIT. You don't have to do
 * anything special to choose one license or the other and you don't have to
 * notify anyone which license you are using. You are free to use
 * UniversalLanguageSelector in commercial projects as long as the copyright
 * header is left intact. See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */

( function ( $ ) {
	'use strict';

	var MessageParserEmitter = function () {
		this.language = $.i18n.languages[ String.locale ] || $.i18n.languages[ 'default' ];
	};

	MessageParserEmitter.prototype = {
		constructor: MessageParserEmitter,

		/**
		 * (We put this method definition here, and not in prototype, to make
		 * sure it's not overwritten by any magic.) Walk entire node structure,
		 * applying replacements and template functions when appropriate
		 *
		 * @param {Mixed} node abstract syntax tree (top node or subnode)
		 * @param {Array} replacements for $1, $2, ... $n
		 * @return {Mixed} single-string node or array of nodes suitable for
		 *  jQuery appending.
		 */
		emit: function ( node, replacements ) {
			var ret, subnodes, operation,
				messageParserEmitter = this;

			switch ( typeof node ) {
				case 'string':
				case 'number':
					ret = node;
					break;
				case 'object':
				// node is an array of nodes
					subnodes = $.map( node.slice( 1 ), function ( n ) {
						return messageParserEmitter.emit( n, replacements );
					} );

					operation = node[ 0 ].toLowerCase();

					if ( typeof messageParserEmitter[ operation ] === 'function' ) {
						ret = messageParserEmitter[ operation ]( subnodes, replacements );
					} else {
						throw new Error( 'unknown operation "' + operation + '"' );
					}

					break;
				case 'undefined':
				// Parsing the empty string (as an entire expression, or as a
				// paramExpression in a template) results in undefined
				// Perhaps a more clever parser can detect this, and return the
				// empty string? Or is that useful information?
				// The logical thing is probably to return the empty string here
				// when we encounter undefined.
					ret = '';
					break;
				default:
					throw new Error( 'unexpected type in AST: ' + typeof node );
			}

			return ret;
		},

		/**
		 * Parsing has been applied depth-first we can assume that all nodes
		 * here are single nodes Must return a single node to parents -- a
		 * jQuery with synthetic span However, unwrap any other synthetic spans
		 * in our children and pass them upwards
		 *
		 * @param {Array} nodes Mixed, some single nodes, some arrays of nodes.
		 * @return {string}
		 */
		concat: function ( nodes ) {
			var result = '';

			$.each( nodes, function ( i, node ) {
				// strings, integers, anything else
				result += node;
			} );

			return result;
		},

		/**
		 * Return escaped replacement of correct index, or string if
		 * unavailable. Note that we expect the parsed parameter to be
		 * zero-based. i.e. $1 should have become [ 0 ]. if the specified
		 * parameter is not found return the same string (e.g. "$99" ->
		 * parameter 98 -> not found -> return "$99" ) TODO throw error if
		 * nodes.length > 1 ?
		 *
		 * @param {Array} nodes One element, integer, n >= 0
		 * @param {Array} replacements for $1, $2, ... $n
		 * @return {string} replacement
		 */
		replace: function ( nodes, replacements ) {
			var index = parseInt( nodes[ 0 ], 10 );

			if ( index < replacements.length ) {
				// replacement is not a string, don't touch!
				return replacements[ index ];
			} else {
				// index not found, fallback to displaying variable
				return '$' + ( index + 1 );
			}
		},

		/**
		 * Transform parsed structure into pluralization n.b. The first node may
		 * be a non-integer (for instance, a string representing an Arabic
		 * number). So convert it back with the current language's
		 * convertNumber.
		 *
		 * @param {Array} nodes List [ {String|Number}, {String}, {String} ... ]
		 * @return {string} selected pluralized form according to current
		 *  language.
		 */
		plural: function ( nodes ) {
			var count = parseFloat( this.language.convertNumber( nodes[ 0 ], 10 ) ),
				forms = nodes.slice( 1 );

			return forms.length ? this.language.convertPlural( count, forms ) : '';
		},

		/**
		 * Transform parsed structure into gender Usage
		 * {{gender:gender|masculine|feminine|neutral}}.
		 *
		 * @param {Array} nodes List [ {String}, {String}, {String} , {String} ]
		 * @return {string} selected gender form according to current language
		 */
		gender: function ( nodes ) {
			var gender = nodes[ 0 ],
				forms = nodes.slice( 1 );

			return this.language.gender( gender, forms );
		},

		/**
		 * Transform parsed structure into grammar conversion. Invoked by
		 * putting {{grammar:form|word}} in a message
		 *
		 * @param {Array} nodes List [{Grammar case eg: genitive}, {String word}]
		 * @return {string} selected grammatical form according to current
		 *  language.
		 */
		grammar: function ( nodes ) {
			var form = nodes[ 0 ],
				word = nodes[ 1 ];

			return word && form && this.language.convertGrammar( word, form );
		}
	};

	$.extend( $.i18n.parser.emitter, new MessageParserEmitter() );
}( jQuery ) );


/***/ }),

/***/ 9001:
/*!******************************************************************!*\
  !*** ./runestone/common/js/jquery_i18n/jquery.i18n.fallbacks.js ***!
  \******************************************************************/
/***/ (() => {

/*!
 * jQuery Internationalization library
 *
 * Copyright (C) 2012 Santhosh Thottingal
 *
 * jquery.i18n is dual licensed GPLv2 or later and MIT. You don't have to do anything special to
 * choose one license or the other and you don't have to notify anyone which license you are using.
 * You are free to use UniversalLanguageSelector in commercial projects as long as the copyright
 * header is left intact. See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */
( function ( $ ) {
	'use strict';

	$.i18n = $.i18n || {};
	$.extend( $.i18n.fallbacks, {
		ab: [ 'ru' ],
		ace: [ 'id' ],
		aln: [ 'sq' ],
		// Not so standard - als is supposed to be Tosk Albanian,
		// but in Wikipedia it's used for a Germanic language.
		als: [ 'gsw', 'de' ],
		an: [ 'es' ],
		anp: [ 'hi' ],
		arn: [ 'es' ],
		arz: [ 'ar' ],
		av: [ 'ru' ],
		ay: [ 'es' ],
		ba: [ 'ru' ],
		bar: [ 'de' ],
		'bat-smg': [ 'sgs', 'lt' ],
		bcc: [ 'fa' ],
		'be-x-old': [ 'be-tarask' ],
		bh: [ 'bho' ],
		bjn: [ 'id' ],
		bm: [ 'fr' ],
		bpy: [ 'bn' ],
		bqi: [ 'fa' ],
		bug: [ 'id' ],
		'cbk-zam': [ 'es' ],
		ce: [ 'ru' ],
		crh: [ 'crh-latn' ],
		'crh-cyrl': [ 'ru' ],
		csb: [ 'pl' ],
		cv: [ 'ru' ],
		'de-at': [ 'de' ],
		'de-ch': [ 'de' ],
		'de-formal': [ 'de' ],
		dsb: [ 'de' ],
		dtp: [ 'ms' ],
		egl: [ 'it' ],
		eml: [ 'it' ],
		ff: [ 'fr' ],
		fit: [ 'fi' ],
		'fiu-vro': [ 'vro', 'et' ],
		frc: [ 'fr' ],
		frp: [ 'fr' ],
		frr: [ 'de' ],
		fur: [ 'it' ],
		gag: [ 'tr' ],
		gan: [ 'gan-hant', 'zh-hant', 'zh-hans' ],
		'gan-hans': [ 'zh-hans' ],
		'gan-hant': [ 'zh-hant', 'zh-hans' ],
		gl: [ 'pt' ],
		glk: [ 'fa' ],
		gn: [ 'es' ],
		gsw: [ 'de' ],
		hif: [ 'hif-latn' ],
		hsb: [ 'de' ],
		ht: [ 'fr' ],
		ii: [ 'zh-cn', 'zh-hans' ],
		inh: [ 'ru' ],
		iu: [ 'ike-cans' ],
		jut: [ 'da' ],
		jv: [ 'id' ],
		kaa: [ 'kk-latn', 'kk-cyrl' ],
		kbd: [ 'kbd-cyrl' ],
		khw: [ 'ur' ],
		kiu: [ 'tr' ],
		kk: [ 'kk-cyrl' ],
		'kk-arab': [ 'kk-cyrl' ],
		'kk-latn': [ 'kk-cyrl' ],
		'kk-cn': [ 'kk-arab', 'kk-cyrl' ],
		'kk-kz': [ 'kk-cyrl' ],
		'kk-tr': [ 'kk-latn', 'kk-cyrl' ],
		kl: [ 'da' ],
		'ko-kp': [ 'ko' ],
		koi: [ 'ru' ],
		krc: [ 'ru' ],
		ks: [ 'ks-arab' ],
		ksh: [ 'de' ],
		ku: [ 'ku-latn' ],
		'ku-arab': [ 'ckb' ],
		kv: [ 'ru' ],
		lad: [ 'es' ],
		lb: [ 'de' ],
		lbe: [ 'ru' ],
		lez: [ 'ru' ],
		li: [ 'nl' ],
		lij: [ 'it' ],
		liv: [ 'et' ],
		lmo: [ 'it' ],
		ln: [ 'fr' ],
		ltg: [ 'lv' ],
		lzz: [ 'tr' ],
		mai: [ 'hi' ],
		'map-bms': [ 'jv', 'id' ],
		mg: [ 'fr' ],
		mhr: [ 'ru' ],
		min: [ 'id' ],
		mo: [ 'ro' ],
		mrj: [ 'ru' ],
		mwl: [ 'pt' ],
		myv: [ 'ru' ],
		mzn: [ 'fa' ],
		nah: [ 'es' ],
		nap: [ 'it' ],
		nds: [ 'de' ],
		'nds-nl': [ 'nl' ],
		'nl-informal': [ 'nl' ],
		no: [ 'nb' ],
		os: [ 'ru' ],
		pcd: [ 'fr' ],
		pdc: [ 'de' ],
		pdt: [ 'de' ],
		pfl: [ 'de' ],
		pms: [ 'it' ],
		pt: [ 'pt-br' ],
		'pt-br': [ 'pt' ],
		qu: [ 'es' ],
		qug: [ 'qu', 'es' ],
		rgn: [ 'it' ],
		rmy: [ 'ro' ],
		'roa-rup': [ 'rup' ],
		rue: [ 'uk', 'ru' ],
		ruq: [ 'ruq-latn', 'ro' ],
		'ruq-cyrl': [ 'mk' ],
		'ruq-latn': [ 'ro' ],
		sa: [ 'hi' ],
		sah: [ 'ru' ],
		scn: [ 'it' ],
		sg: [ 'fr' ],
		sgs: [ 'lt' ],
		sli: [ 'de' ],
		sr: [ 'sr-ec' ],
		srn: [ 'nl' ],
		stq: [ 'de' ],
		su: [ 'id' ],
		szl: [ 'pl' ],
		tcy: [ 'kn' ],
		tg: [ 'tg-cyrl' ],
		tt: [ 'tt-cyrl', 'ru' ],
		'tt-cyrl': [ 'ru' ],
		ty: [ 'fr' ],
		udm: [ 'ru' ],
		ug: [ 'ug-arab' ],
		uk: [ 'ru' ],
		vec: [ 'it' ],
		vep: [ 'et' ],
		vls: [ 'nl' ],
		vmf: [ 'de' ],
		vot: [ 'fi' ],
		vro: [ 'et' ],
		wa: [ 'fr' ],
		wo: [ 'fr' ],
		wuu: [ 'zh-hans' ],
		xal: [ 'ru' ],
		xmf: [ 'ka' ],
		yi: [ 'he' ],
		za: [ 'zh-hans' ],
		zea: [ 'nl' ],
		zh: [ 'zh-hans' ],
		'zh-classical': [ 'lzh' ],
		'zh-cn': [ 'zh-hans' ],
		'zh-hant': [ 'zh-hans' ],
		'zh-hk': [ 'zh-hant', 'zh-hans' ],
		'zh-min-nan': [ 'nan' ],
		'zh-mo': [ 'zh-hk', 'zh-hant', 'zh-hans' ],
		'zh-my': [ 'zh-sg', 'zh-hans' ],
		'zh-sg': [ 'zh-hans' ],
		'zh-tw': [ 'zh-hant', 'zh-hans' ],
		'zh-yue': [ 'yue' ]
	} );
}( jQuery ) );


/***/ }),

/***/ 99283:
/*!********************************************************!*\
  !*** ./runestone/common/js/jquery_i18n/jquery.i18n.js ***!
  \********************************************************/
/***/ (() => {

/*!
 * jQuery Internationalization library
 *
 * Copyright (C) 2012 Santhosh Thottingal
 *
 * jquery.i18n is dual licensed GPLv2 or later and MIT. You don't have to do
 * anything special to choose one license or the other and you don't have to
 * notify anyone which license you are using. You are free to use
 * UniversalLanguageSelector in commercial projects as long as the copyright
 * header is left intact. See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */

( function ( $ ) {
	'use strict';

	var I18N,
		slice = Array.prototype.slice;
	/**
	 * @constructor
	 * @param {Object} options
	 */
	I18N = function ( options ) {
		// Load defaults
		this.options = $.extend( {}, I18N.defaults, options );

		this.parser = this.options.parser;
		this.locale = this.options.locale;
		this.messageStore = this.options.messageStore;
		this.languages = {};
	};

	I18N.prototype = {
		/**
		 * Localize a given messageKey to a locale.
		 * @param {String} messageKey
		 * @return {String} Localized message
		 */
		localize: function ( messageKey ) {
			var localeParts, localePartIndex, locale, fallbackIndex,
				tryingLocale, message;

			locale = this.locale;
			fallbackIndex = 0;

			while ( locale ) {
				// Iterate through locales starting at most-specific until
				// localization is found. As in fi-Latn-FI, fi-Latn and fi.
				localeParts = locale.split( '-' );
				localePartIndex = localeParts.length;

				do {
					tryingLocale = localeParts.slice( 0, localePartIndex ).join( '-' );
					message = this.messageStore.get( tryingLocale, messageKey );

					if ( message ) {
						return message;
					}

					localePartIndex--;
				} while ( localePartIndex );

				if ( locale === 'en' ) {
					break;
				}

				locale = ( $.i18n.fallbacks[ this.locale ] &&
						$.i18n.fallbacks[ this.locale ][ fallbackIndex ] ) ||
						this.options.fallbackLocale;
				$.i18n.log( 'Trying fallback locale for ' + this.locale + ': ' + locale + ' (' + messageKey + ')' );

				fallbackIndex++;
			}

			// key not found
			return '';
		},

		/*
		 * Destroy the i18n instance.
		 */
		destroy: function () {
			$.removeData( document, 'i18n' );
		},

		/**
		 * General message loading API This can take a URL string for
		 * the json formatted messages. Example:
		 * <code>load('path/to/all_localizations.json');</code>
		 *
		 * To load a localization file for a locale:
		 * <code>
		 * load('path/to/de-messages.json', 'de' );
		 * </code>
		 *
		 * To load a localization file from a directory:
		 * <code>
		 * load('path/to/i18n/directory', 'de' );
		 * </code>
		 * The above method has the advantage of fallback resolution.
		 * ie, it will automatically load the fallback locales for de.
		 * For most usecases, this is the recommended method.
		 * It is optional to have trailing slash at end.
		 *
		 * A data object containing message key- message translation mappings
		 * can also be passed. Example:
		 * <code>
		 * load( { 'hello' : 'Hello' }, optionalLocale );
		 * </code>
		 *
		 * A source map containing key-value pair of languagename and locations
		 * can also be passed. Example:
		 * <code>
		 * load( {
		 * bn: 'i18n/bn.json',
		 * he: 'i18n/he.json',
		 * en: 'i18n/en.json'
		 * } )
		 * </code>
		 *
		 * If the data argument is null/undefined/false,
		 * all cached messages for the i18n instance will get reset.
		 *
		 * @param {string|Object} source
		 * @param {string} locale Language tag
		 * @return {jQuery.Promise}
		 */
		load: function ( source, locale ) {
			var fallbackLocales, locIndex, fallbackLocale, sourceMap = {};
			if ( !source && !locale ) {
				source = 'i18n/' + $.i18n().locale + '.json';
				locale = $.i18n().locale;
			}
			if ( typeof source === 'string' &&
				// source extension should be json, but can have query params after that.
				source.split( '?' )[ 0 ].split( '.' ).pop() !== 'json'
			) {
				// Load specified locale then check for fallbacks when directory is
				// specified in load()
				sourceMap[ locale ] = source + '/' + locale + '.json';
				fallbackLocales = ( $.i18n.fallbacks[ locale ] || [] )
					.concat( this.options.fallbackLocale );
				for ( locIndex = 0; locIndex < fallbackLocales.length; locIndex++ ) {
					fallbackLocale = fallbackLocales[ locIndex ];
					sourceMap[ fallbackLocale ] = source + '/' + fallbackLocale + '.json';
				}
				return this.load( sourceMap );
			} else {
				return this.messageStore.load( source, locale );
			}

		},

		/**
		 * Does parameter and magic word substitution.
		 *
		 * @param {string} key Message key
		 * @param {Array} parameters Message parameters
		 * @return {string}
		 */
		parse: function ( key, parameters ) {
			var message = this.localize( key );
			// FIXME: This changes the state of the I18N object,
			// should probably not change the 'this.parser' but just
			// pass it to the parser.
			this.parser.language = $.i18n.languages[ $.i18n().locale ] || $.i18n.languages[ 'default' ];
			if ( message === '' ) {
				message = key;
			}
			return this.parser.parse( message, parameters );
		}
	};

	/**
	 * Process a message from the $.I18N instance
	 * for the current document, stored in jQuery.data(document).
	 *
	 * @param {string} key Key of the message.
	 * @param {string} param1 [param...] Variadic list of parameters for {key}.
	 * @return {string|$.I18N} Parsed message, or if no key was given
	 * the instance of $.I18N is returned.
	 */
	$.i18n = function ( key, param1 ) {
		var parameters,
			i18n = $.data( document, 'i18n' ),
			options = typeof key === 'object' && key;

		// If the locale option for this call is different then the setup so far,
		// update it automatically. This doesn't just change the context for this
		// call but for all future call as well.
		// If there is no i18n setup yet, don't do this. It will be taken care of
		// by the `new I18N` construction below.
		// NOTE: It should only change language for this one call.
		// Then cache instances of I18N somewhere.
		if ( options && options.locale && i18n && i18n.locale !== options.locale ) {
			i18n.locale = options.locale;
		}

		if ( !i18n ) {
			i18n = new I18N( options );
			$.data( document, 'i18n', i18n );
		}

		if ( typeof key === 'string' ) {
			if ( param1 !== undefined ) {
				parameters = slice.call( arguments, 1 );
			} else {
				parameters = [];
			}

			return i18n.parse( key, parameters );
		} else {
			// FIXME: remove this feature/bug.
			return i18n;
		}
	};

	$.fn.i18n = function () {
		var i18n = $.data( document, 'i18n' );

		if ( !i18n ) {
			i18n = new I18N();
			$.data( document, 'i18n', i18n );
		}

		return this.each( function () {
			var $this = $( this ),
				messageKey = $this.data( 'i18n' ),
				lBracket, rBracket, type, key;

			if ( messageKey ) {
				lBracket = messageKey.indexOf( '[' );
				rBracket = messageKey.indexOf( ']' );
				if ( lBracket !== -1 && rBracket !== -1 && lBracket < rBracket ) {
					type = messageKey.slice( lBracket + 1, rBracket );
					key = messageKey.slice( rBracket + 1 );
					if ( type === 'html' ) {
						$this.html( i18n.parse( key ) );
					} else {
						$this.attr( type, i18n.parse( key ) );
					}
				} else {
					$this.text( i18n.parse( messageKey ) );
				}
			} else {
				$this.find( '[data-i18n]' ).i18n();
			}
		} );
	};

	function getDefaultLocale() {
		var nav, locale = $( 'html' ).attr( 'lang' );

		if ( !locale ) {
			if ( typeof window.navigator !== undefined ) {
				nav = window.navigator;
				locale = nav.language || nav.userLanguage || '';
			} else {
				locale = '';
			}
		}
		return locale;
	}

	$.i18n.languages = {};
	$.i18n.messageStore = $.i18n.messageStore || {};
	$.i18n.parser = {
		// The default parser only handles variable substitution
		parse: function ( message, parameters ) {
			return message.replace( /\$(\d+)/g, function ( str, match ) {
				var index = parseInt( match, 10 ) - 1;
				return parameters[ index ] !== undefined ? parameters[ index ] : '$' + match;
			} );
		},
		emitter: {}
	};
	$.i18n.fallbacks = {};
	$.i18n.debug = false;
	$.i18n.log = function ( /* arguments */ ) {
		if ( window.console && $.i18n.debug ) {
			window.console.log.apply( window.console, arguments );
		}
	};
	/* Static members */
	I18N.defaults = {
		locale: getDefaultLocale(),
		fallbackLocale: 'en',
		parser: $.i18n.parser,
		messageStore: $.i18n.messageStore
	};

	// Expose constructor
	$.i18n.constructor = I18N;
}( jQuery ) );

/***/ }),

/***/ 64793:
/*!*****************************************************************!*\
  !*** ./runestone/common/js/jquery_i18n/jquery.i18n.language.js ***!
  \*****************************************************************/
/***/ (() => {

/* global pluralRuleParser */
( function ( $ ) {
	'use strict';

	// jscs:disable
	var language = {
		// CLDR plural rules generated using
		// libs/CLDRPluralRuleParser/tools/PluralXML2JSON.html
		pluralRules: {
			ak: {
				one: 'n = 0..1'
			},
			am: {
				one: 'i = 0 or n = 1'
			},
			ar: {
				zero: 'n = 0',
				one: 'n = 1',
				two: 'n = 2',
				few: 'n % 100 = 3..10',
				many: 'n % 100 = 11..99'
			},
			ars: {
				zero: 'n = 0',
				one: 'n = 1',
				two: 'n = 2',
				few: 'n % 100 = 3..10',
				many: 'n % 100 = 11..99'
			},
			as: {
				one: 'i = 0 or n = 1'
			},
			be: {
				one: 'n % 10 = 1 and n % 100 != 11',
				few: 'n % 10 = 2..4 and n % 100 != 12..14',
				many: 'n % 10 = 0 or n % 10 = 5..9 or n % 100 = 11..14'
			},
			bh: {
				one: 'n = 0..1'
			},
			bn: {
				one: 'i = 0 or n = 1'
			},
			br: {
				one: 'n % 10 = 1 and n % 100 != 11,71,91',
				two: 'n % 10 = 2 and n % 100 != 12,72,92',
				few: 'n % 10 = 3..4,9 and n % 100 != 10..19,70..79,90..99',
				many: 'n != 0 and n % 1000000 = 0'
			},
			bs: {
				one: 'v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11',
				few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14'
			},
			cs: {
				one: 'i = 1 and v = 0',
				few: 'i = 2..4 and v = 0',
				many: 'v != 0'
			},
			cy: {
				zero: 'n = 0',
				one: 'n = 1',
				two: 'n = 2',
				few: 'n = 3',
				many: 'n = 6'
			},
			da: {
				one: 'n = 1 or t != 0 and i = 0,1'
			},
			dsb: {
				one: 'v = 0 and i % 100 = 1 or f % 100 = 1',
				two: 'v = 0 and i % 100 = 2 or f % 100 = 2',
				few: 'v = 0 and i % 100 = 3..4 or f % 100 = 3..4'
			},
			fa: {
				one: 'i = 0 or n = 1'
			},
			ff: {
				one: 'i = 0,1'
			},
			fil: {
				one: 'v = 0 and i = 1,2,3 or v = 0 and i % 10 != 4,6,9 or v != 0 and f % 10 != 4,6,9'
			},
			fr: {
				one: 'i = 0,1'
			},
			ga: {
				one: 'n = 1',
				two: 'n = 2',
				few: 'n = 3..6',
				many: 'n = 7..10'
			},
			gd: {
				one: 'n = 1,11',
				two: 'n = 2,12',
				few: 'n = 3..10,13..19'
			},
			gu: {
				one: 'i = 0 or n = 1'
			},
			guw: {
				one: 'n = 0..1'
			},
			gv: {
				one: 'v = 0 and i % 10 = 1',
				two: 'v = 0 and i % 10 = 2',
				few: 'v = 0 and i % 100 = 0,20,40,60,80',
				many: 'v != 0'
			},
			he: {
				one: 'i = 1 and v = 0',
				two: 'i = 2 and v = 0',
				many: 'v = 0 and n != 0..10 and n % 10 = 0'
			},
			hi: {
				one: 'i = 0 or n = 1'
			},
			hr: {
				one: 'v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11',
				few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14'
			},
			hsb: {
				one: 'v = 0 and i % 100 = 1 or f % 100 = 1',
				two: 'v = 0 and i % 100 = 2 or f % 100 = 2',
				few: 'v = 0 and i % 100 = 3..4 or f % 100 = 3..4'
			},
			hy: {
				one: 'i = 0,1'
			},
			is: {
				one: 't = 0 and i % 10 = 1 and i % 100 != 11 or t != 0'
			},
			iu: {
				one: 'n = 1',
				two: 'n = 2'
			},
			iw: {
				one: 'i = 1 and v = 0',
				two: 'i = 2 and v = 0',
				many: 'v = 0 and n != 0..10 and n % 10 = 0'
			},
			kab: {
				one: 'i = 0,1'
			},
			kn: {
				one: 'i = 0 or n = 1'
			},
			kw: {
				one: 'n = 1',
				two: 'n = 2'
			},
			lag: {
				zero: 'n = 0',
				one: 'i = 0,1 and n != 0'
			},
			ln: {
				one: 'n = 0..1'
			},
			lt: {
				one: 'n % 10 = 1 and n % 100 != 11..19',
				few: 'n % 10 = 2..9 and n % 100 != 11..19',
				many: 'f != 0'
			},
			lv: {
				zero: 'n % 10 = 0 or n % 100 = 11..19 or v = 2 and f % 100 = 11..19',
				one: 'n % 10 = 1 and n % 100 != 11 or v = 2 and f % 10 = 1 and f % 100 != 11 or v != 2 and f % 10 = 1'
			},
			mg: {
				one: 'n = 0..1'
			},
			mk: {
				one: 'v = 0 and i % 10 = 1 or f % 10 = 1'
			},
			mo: {
				one: 'i = 1 and v = 0',
				few: 'v != 0 or n = 0 or n != 1 and n % 100 = 1..19'
			},
			mr: {
				one: 'i = 0 or n = 1'
			},
			mt: {
				one: 'n = 1',
				few: 'n = 0 or n % 100 = 2..10',
				many: 'n % 100 = 11..19'
			},
			naq: {
				one: 'n = 1',
				two: 'n = 2'
			},
			nso: {
				one: 'n = 0..1'
			},
			pa: {
				one: 'n = 0..1'
			},
			pl: {
				one: 'i = 1 and v = 0',
				few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14',
				many: 'v = 0 and i != 1 and i % 10 = 0..1 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 12..14'
			},
			prg: {
				zero: 'n % 10 = 0 or n % 100 = 11..19 or v = 2 and f % 100 = 11..19',
				one: 'n % 10 = 1 and n % 100 != 11 or v = 2 and f % 10 = 1 and f % 100 != 11 or v != 2 and f % 10 = 1'
			},
			pt: {
				one: 'i = 0..1'
			},
			ro: {
				one: 'i = 1 and v = 0',
				few: 'v != 0 or n = 0 or n != 1 and n % 100 = 1..19'
			},
			ru: {
				one: 'v = 0 and i % 10 = 1 and i % 100 != 11',
				few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14',
				many: 'v = 0 and i % 10 = 0 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 11..14'
			},
			se: {
				one: 'n = 1',
				two: 'n = 2'
			},
			sh: {
				one: 'v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11',
				few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14'
			},
			shi: {
				one: 'i = 0 or n = 1',
				few: 'n = 2..10'
			},
			si: {
				one: 'n = 0,1 or i = 0 and f = 1'
			},
			sk: {
				one: 'i = 1 and v = 0',
				few: 'i = 2..4 and v = 0',
				many: 'v != 0'
			},
			sl: {
				one: 'v = 0 and i % 100 = 1',
				two: 'v = 0 and i % 100 = 2',
				few: 'v = 0 and i % 100 = 3..4 or v != 0'
			},
			sma: {
				one: 'n = 1',
				two: 'n = 2'
			},
			smi: {
				one: 'n = 1',
				two: 'n = 2'
			},
			smj: {
				one: 'n = 1',
				two: 'n = 2'
			},
			smn: {
				one: 'n = 1',
				two: 'n = 2'
			},
			sms: {
				one: 'n = 1',
				two: 'n = 2'
			},
			sr: {
				one: 'v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11',
				few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14'
			},
			ti: {
				one: 'n = 0..1'
			},
			tl: {
				one: 'v = 0 and i = 1,2,3 or v = 0 and i % 10 != 4,6,9 or v != 0 and f % 10 != 4,6,9'
			},
			tzm: {
				one: 'n = 0..1 or n = 11..99'
			},
			uk: {
				one: 'v = 0 and i % 10 = 1 and i % 100 != 11',
				few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14',
				many: 'v = 0 and i % 10 = 0 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 11..14'
			},
			wa: {
				one: 'n = 0..1'
			},
			zu: {
				one: 'i = 0 or n = 1'
			}
		},
		// jscs:enable

		/**
		 * Plural form transformations, needed for some languages.
		 *
		 * @param {integer} count
		 *            Non-localized quantifier
		 * @param {Array} forms
		 *            List of plural forms
		 * @return {string} Correct form for quantifier in this language
		 */
		convertPlural: function ( count, forms ) {
			var pluralRules,
				pluralFormIndex,
				index,
				explicitPluralPattern = new RegExp( '\\d+=', 'i' ),
				formCount,
				form;

			if ( !forms || forms.length === 0 ) {
				return '';
			}

			// Handle for Explicit 0= & 1= values
			for ( index = 0; index < forms.length; index++ ) {
				form = forms[ index ];
				if ( explicitPluralPattern.test( form ) ) {
					formCount = parseInt( form.slice( 0, form.indexOf( '=' ) ), 10 );
					if ( formCount === count ) {
						return ( form.slice( form.indexOf( '=' ) + 1 ) );
					}
					forms[ index ] = undefined;
				}
			}

			forms = $.map( forms, function ( form ) {
				if ( form !== undefined ) {
					return form;
				}
			} );

			pluralRules = this.pluralRules[ $.i18n().locale ];

			if ( !pluralRules ) {
				// default fallback.
				return ( count === 1 ) ? forms[ 0 ] : forms[ 1 ];
			}

			pluralFormIndex = this.getPluralForm( count, pluralRules );
			pluralFormIndex = Math.min( pluralFormIndex, forms.length - 1 );

			return forms[ pluralFormIndex ];
		},

		/**
		 * For the number, get the plural for index
		 *
		 * @param {integer} number
		 * @param {Object} pluralRules
		 * @return {integer} plural form index
		 */
		getPluralForm: function ( number, pluralRules ) {
			var i,
				pluralForms = [ 'zero', 'one', 'two', 'few', 'many', 'other' ],
				pluralFormIndex = 0;

			for ( i = 0; i < pluralForms.length; i++ ) {
				if ( pluralRules[ pluralForms[ i ] ] ) {
					if ( pluralRuleParser( pluralRules[ pluralForms[ i ] ], number ) ) {
						return pluralFormIndex;
					}

					pluralFormIndex++;
				}
			}

			return pluralFormIndex;
		},

		/**
		 * Converts a number using digitTransformTable.
		 *
		 * @param {number} num Value to be converted
		 * @param {boolean} integer Convert the return value to an integer
		 * @return {string} The number converted into a String.
		 */
		convertNumber: function ( num, integer ) {
			var tmp, item, i,
				transformTable, numberString, convertedNumber;

			// Set the target Transform table:
			transformTable = this.digitTransformTable( $.i18n().locale );
			numberString = String( num );
			convertedNumber = '';

			if ( !transformTable ) {
				return num;
			}

			// Check if the restore to Latin number flag is set:
			if ( integer ) {
				if ( parseFloat( num, 10 ) === num ) {
					return num;
				}

				tmp = [];

				for ( item in transformTable ) {
					tmp[ transformTable[ item ] ] = item;
				}

				transformTable = tmp;
			}

			for ( i = 0; i < numberString.length; i++ ) {
				if ( transformTable[ numberString[ i ] ] ) {
					convertedNumber += transformTable[ numberString[ i ] ];
				} else {
					convertedNumber += numberString[ i ];
				}
			}

			return integer ? parseFloat( convertedNumber, 10 ) : convertedNumber;
		},

		/**
		 * Grammatical transformations, needed for inflected languages.
		 * Invoked by putting {{grammar:form|word}} in a message.
		 * Override this method for languages that need special grammar rules
		 * applied dynamically.
		 *
		 * @param {string} word
		 * @param {string} form
		 * @return {string}
		 */
		// eslint-disable-next-line no-unused-vars
		convertGrammar: function ( word, form ) {
			return word;
		},

		/**
		 * Provides an alternative text depending on specified gender. Usage
		 * {{gender:[gender|user object]|masculine|feminine|neutral}}. If second
		 * or third parameter are not specified, masculine is used.
		 *
		 * These details may be overriden per language.
		 *
		 * @param {string} gender
		 *      male, female, or anything else for neutral.
		 * @param {Array} forms
		 *      List of gender forms
		 *
		 * @return {string}
		 */
		gender: function ( gender, forms ) {
			if ( !forms || forms.length === 0 ) {
				return '';
			}

			while ( forms.length < 2 ) {
				forms.push( forms[ forms.length - 1 ] );
			}

			if ( gender === 'male' ) {
				return forms[ 0 ];
			}

			if ( gender === 'female' ) {
				return forms[ 1 ];
			}

			return ( forms.length === 3 ) ? forms[ 2 ] : forms[ 0 ];
		},

		/**
		 * Get the digit transform table for the given language
		 * See http://cldr.unicode.org/translation/numbering-systems
		 *
		 * @param {string} language
		 * @return {Array|boolean} List of digits in the passed language or false
		 * representation, or boolean false if there is no information.
		 */
		digitTransformTable: function ( language ) {
			var tables = {
				ar: '٠١٢٣٤٥٦٧٨٩',
				fa: '۰۱۲۳۴۵۶۷۸۹',
				ml: '൦൧൨൩൪൫൬൭൮൯',
				kn: '೦೧೨೩೪೫೬೭೮೯',
				lo: '໐໑໒໓໔໕໖໗໘໙',
				or: '୦୧୨୩୪୫୬୭୮୯',
				kh: '០១២៣៤៥៦៧៨៩',
				pa: '੦੧੨੩੪੫੬੭੮੯',
				gu: '૦૧૨૩૪૫૬૭૮૯',
				hi: '०१२३४५६७८९',
				my: '၀၁၂၃၄၅၆၇၈၉',
				ta: '௦௧௨௩௪௫௬௭௮௯',
				te: '౦౧౨౩౪౫౬౭౮౯',
				th: '๐๑๒๓๔๕๖๗๘๙', // FIXME use iso 639 codes
				bo: '༠༡༢༣༤༥༦༧༨༩' // FIXME use iso 639 codes
			};

			if ( !tables[ language ] ) {
				return false;
			}

			return tables[ language ].split( '' );
		}
	};

	$.extend( $.i18n.languages, {
		'default': language
	} );
}( jQuery ) );


/***/ }),

/***/ 34517:
/*!*********************************************************************!*\
  !*** ./runestone/common/js/jquery_i18n/jquery.i18n.messagestore.js ***!
  \*********************************************************************/
/***/ (() => {

/*!
 * jQuery Internationalization library - Message Store
 *
 * Copyright (C) 2012 Santhosh Thottingal
 *
 * jquery.i18n is dual licensed GPLv2 or later and MIT. You don't have to do anything special to
 * choose one license or the other and you don't have to notify anyone which license you are using.
 * You are free to use UniversalLanguageSelector in commercial projects as long as the copyright
 * header is left intact. See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */

( function ( $ ) {
	'use strict';

	var MessageStore = function () {
		this.messages = {};
		this.sources = {};
	};

	function jsonMessageLoader( url ) {
		var deferred = $.Deferred();

		$.getJSON( url )
			.done( deferred.resolve )
			.fail( function ( jqxhr, settings, exception ) {
				$.i18n.log( 'Error in loading messages from ' + url + ' Exception: ' + exception );
				// Ignore 404 exception, because we are handling fallabacks explicitly
				deferred.resolve();
			} );

		return deferred.promise();
	}

	/**
	 * See https://github.com/wikimedia/jquery.i18n/wiki/Specification#wiki-Message_File_Loading
	 */
	MessageStore.prototype = {

		/**
		 * General message loading API This can take a URL string for
		 * the json formatted messages.
		 * <code>load('path/to/all_localizations.json');</code>
		 *
		 * This can also load a localization file for a locale <code>
		 * load( 'path/to/de-messages.json', 'de' );
		 * </code>
		 * A data object containing message key- message translation mappings
		 * can also be passed Eg:
		 * <code>
		 * load( { 'hello' : 'Hello' }, optionalLocale );
		 * </code> If the data argument is
		 * null/undefined/false,
		 * all cached messages for the i18n instance will get reset.
		 *
		 * @param {string|Object} source
		 * @param {string} locale Language tag
		 * @return {jQuery.Promise}
		 */
		load: function ( source, locale ) {
			var key = null,
				deferred = null,
				deferreds = [],
				messageStore = this;

			if ( typeof source === 'string' ) {
				// This is a URL to the messages file.
				$.i18n.log( 'Loading messages from: ' + source );
				deferred = jsonMessageLoader( source )
					.done( function ( localization ) {
						messageStore.set( locale, localization );
					} );

				return deferred.promise();
			}

			if ( locale ) {
				// source is an key-value pair of messages for given locale
				messageStore.set( locale, source );

				return $.Deferred().resolve();
			} else {
				// source is a key-value pair of locales and their source
				for ( key in source ) {
					if ( Object.prototype.hasOwnProperty.call( source, key ) ) {
						locale = key;
						// No {locale} given, assume data is a group of languages,
						// call this function again for each language.
						deferreds.push( messageStore.load( source[ key ], locale ) );
					}
				}
				return $.when.apply( $, deferreds );
			}

		},

		/**
		 * Set messages to the given locale.
		 * If locale exists, add messages to the locale.
		 *
		 * @param {string} locale
		 * @param {Object} messages
		 */
		set: function ( locale, messages ) {
			if ( !this.messages[ locale ] ) {
				this.messages[ locale ] = messages;
			} else {
				this.messages[ locale ] = $.extend( this.messages[ locale ], messages );
			}
		},

		/**
		 *
		 * @param {string} locale
		 * @param {string} messageKey
		 * @return {boolean}
		 */
		get: function ( locale, messageKey ) {
			return this.messages[ locale ] && this.messages[ locale ][ messageKey ];
		}
	};

	$.extend( $.i18n.messageStore, new MessageStore() );
}( jQuery ) );


/***/ }),

/***/ 25252:
/*!***************************************************************!*\
  !*** ./runestone/common/js/jquery_i18n/jquery.i18n.parser.js ***!
  \***************************************************************/
/***/ (() => {

/*!
 * jQuery Internationalization library
 *
 * Copyright (C) 2011-2013 Santhosh Thottingal, Neil Kandalgaonkar
 *
 * jquery.i18n is dual licensed GPLv2 or later and MIT. You don't have to do
 * anything special to choose one license or the other and you don't have to
 * notify anyone which license you are using. You are free to use
 * UniversalLanguageSelector in commercial projects as long as the copyright
 * header is left intact. See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */

( function ( $ ) {
	'use strict';

	var MessageParser = function ( options ) {
		this.options = $.extend( {}, $.i18n.parser.defaults, options );
		this.language = $.i18n.languages[ String.locale ] || $.i18n.languages[ 'default' ];
		this.emitter = $.i18n.parser.emitter;
	};

	MessageParser.prototype = {

		constructor: MessageParser,

		simpleParse: function ( message, parameters ) {
			return message.replace( /\$(\d+)/g, function ( str, match ) {
				var index = parseInt( match, 10 ) - 1;

				return parameters[ index ] !== undefined ? parameters[ index ] : '$' + match;
			} );
		},

		parse: function ( message, replacements ) {
			if ( message.indexOf( '{{' ) < 0 ) {
				return this.simpleParse( message, replacements );
			}

			this.emitter.language = $.i18n.languages[ $.i18n().locale ] ||
				$.i18n.languages[ 'default' ];

			return this.emitter.emit( this.ast( message ), replacements );
		},

		ast: function ( message ) {
			var pipe, colon, backslash, anyCharacter, dollar, digits, regularLiteral,
				regularLiteralWithoutBar, regularLiteralWithoutSpace, escapedOrLiteralWithoutBar,
				escapedOrRegularLiteral, templateContents, templateName, openTemplate,
				closeTemplate, expression, paramExpression, result,
				pos = 0;

			// Try parsers until one works, if none work return null
			function choice( parserSyntax ) {
				return function () {
					var i, result;

					for ( i = 0; i < parserSyntax.length; i++ ) {
						result = parserSyntax[ i ]();

						if ( result !== null ) {
							return result;
						}
					}

					return null;
				};
			}

			// Try several parserSyntax-es in a row.
			// All must succeed; otherwise, return null.
			// This is the only eager one.
			function sequence( parserSyntax ) {
				var i, res,
					originalPos = pos,
					result = [];

				for ( i = 0; i < parserSyntax.length; i++ ) {
					res = parserSyntax[ i ]();

					if ( res === null ) {
						pos = originalPos;

						return null;
					}

					result.push( res );
				}

				return result;
			}

			// Run the same parser over and over until it fails.
			// Must succeed a minimum of n times; otherwise, return null.
			function nOrMore( n, p ) {
				return function () {
					var originalPos = pos,
						result = [],
						parsed = p();

					while ( parsed !== null ) {
						result.push( parsed );
						parsed = p();
					}

					if ( result.length < n ) {
						pos = originalPos;

						return null;
					}

					return result;
				};
			}

			// Helpers -- just make parserSyntax out of simpler JS builtin types

			function makeStringParser( s ) {
				var len = s.length;

				return function () {
					var result = null;

					if ( message.slice( pos, pos + len ) === s ) {
						result = s;
						pos += len;
					}

					return result;
				};
			}

			function makeRegexParser( regex ) {
				return function () {
					var matches = message.slice( pos ).match( regex );

					if ( matches === null ) {
						return null;
					}

					pos += matches[ 0 ].length;

					return matches[ 0 ];
				};
			}

			pipe = makeStringParser( '|' );
			colon = makeStringParser( ':' );
			backslash = makeStringParser( '\\' );
			anyCharacter = makeRegexParser( /^./ );
			dollar = makeStringParser( '$' );
			digits = makeRegexParser( /^\d+/ );
			regularLiteral = makeRegexParser( /^[^{}[\]$\\]/ );
			regularLiteralWithoutBar = makeRegexParser( /^[^{}[\]$\\|]/ );
			regularLiteralWithoutSpace = makeRegexParser( /^[^{}[\]$\s]/ );

			// There is a general pattern:
			// parse a thing;
			// if it worked, apply transform,
			// otherwise return null.
			// But using this as a combinator seems to cause problems
			// when combined with nOrMore().
			// May be some scoping issue.
			function transform( p, fn ) {
				return function () {
					var result = p();

					return result === null ? null : fn( result );
				};
			}

			// Used to define "literals" within template parameters. The pipe
			// character is the parameter delimeter, so by default
			// it is not a literal in the parameter
			function literalWithoutBar() {
				var result = nOrMore( 1, escapedOrLiteralWithoutBar )();

				return result === null ? null : result.join( '' );
			}

			function literal() {
				var result = nOrMore( 1, escapedOrRegularLiteral )();

				return result === null ? null : result.join( '' );
			}

			function escapedLiteral() {
				var result = sequence( [ backslash, anyCharacter ] );

				return result === null ? null : result[ 1 ];
			}

			choice( [ escapedLiteral, regularLiteralWithoutSpace ] );
			escapedOrLiteralWithoutBar = choice( [ escapedLiteral, regularLiteralWithoutBar ] );
			escapedOrRegularLiteral = choice( [ escapedLiteral, regularLiteral ] );

			function replacement() {
				var result = sequence( [ dollar, digits ] );

				if ( result === null ) {
					return null;
				}

				return [ 'REPLACE', parseInt( result[ 1 ], 10 ) - 1 ];
			}

			templateName = transform(
				// see $wgLegalTitleChars
				// not allowing : due to the need to catch "PLURAL:$1"
				makeRegexParser( /^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/ ),

				function ( result ) {
					return result.toString();
				}
			);

			function templateParam() {
				var expr,
					result = sequence( [ pipe, nOrMore( 0, paramExpression ) ] );

				if ( result === null ) {
					return null;
				}

				expr = result[ 1 ];

				// use a "CONCAT" operator if there are multiple nodes,
				// otherwise return the first node, raw.
				return expr.length > 1 ? [ 'CONCAT' ].concat( expr ) : expr[ 0 ];
			}

			function templateWithReplacement() {
				var result = sequence( [ templateName, colon, replacement ] );

				return result === null ? null : [ result[ 0 ], result[ 2 ] ];
			}

			function templateWithOutReplacement() {
				var result = sequence( [ templateName, colon, paramExpression ] );

				return result === null ? null : [ result[ 0 ], result[ 2 ] ];
			}

			templateContents = choice( [
				function () {
					var res = sequence( [
						// templates can have placeholders for dynamic
						// replacement eg: {{PLURAL:$1|one car|$1 cars}}
						// or no placeholders eg:
						// {{GRAMMAR:genitive|{{SITENAME}}}
						choice( [ templateWithReplacement, templateWithOutReplacement ] ),
						nOrMore( 0, templateParam )
					] );

					return res === null ? null : res[ 0 ].concat( res[ 1 ] );
				},
				function () {
					var res = sequence( [ templateName, nOrMore( 0, templateParam ) ] );

					if ( res === null ) {
						return null;
					}

					return [ res[ 0 ] ].concat( res[ 1 ] );
				}
			] );

			openTemplate = makeStringParser( '{{' );
			closeTemplate = makeStringParser( '}}' );

			function template() {
				var result = sequence( [ openTemplate, templateContents, closeTemplate ] );

				return result === null ? null : result[ 1 ];
			}

			expression = choice( [ template, replacement, literal ] );
			paramExpression = choice( [ template, replacement, literalWithoutBar ] );

			function start() {
				var result = nOrMore( 0, expression )();

				if ( result === null ) {
					return null;
				}

				return [ 'CONCAT' ].concat( result );
			}

			result = start();

			/*
			 * For success, the pos must have gotten to the end of the input
			 * and returned a non-null.
			 * n.b. This is part of language infrastructure, so we do not throw an
			 * internationalizable message.
			 */
			if ( result === null || pos !== message.length ) {
				throw new Error( 'Parse error at position ' + pos.toString() + ' in input: ' + message );
			}

			return result;
		}

	};

	$.extend( $.i18n.parser, new MessageParser() );
}( jQuery ) );

/***/ }),

/***/ 66563:
/*!***********************************************!*\
  !*** ./runestone/common/js/presenter_mode.js ***!
  \***********************************************/
/***/ (() => {

var codeExercises;
var presenterCssLink;
var presentModeInitialized = false;

function presentToggle() {
    if (!presentModeInitialized) {
        presentModeSetup();
        presentModeInitialized = true;
    }
    let bod = $("body");
    let presentClass = "present";
    let fullHeightClass = "full-height";
    let bottomClass = "bottom";
    if (bod.hasClass(presentClass)) {
        $(".section *")
            .not(
                "h1, .presentation-title, .btn-presenter, .runestone, .runestone *, .section, .pre, code"
            )
            .removeClass("hidden"); //show everything
        $("#completionButton").removeClass("hidden");
        bod.removeClass(presentClass);
        $("." + fullHeightClass).removeClass(fullHeightClass);
        $("." + bottomClass).removeClass(bottomClass);
        localStorage.setItem("presentMode", "text");
        codeExercises.removeClass("hidden");
        presenterCssLink.disabled = true; // disable present_mode.css
    } else {
        $(".section *")
            .not(
                "h1, .presentation-title, .btn-presenter, .runestone, .runestone *, .section, .pre, code"
            )
            .addClass("hidden"); // hide extraneous stuff
        $("#completionButton").addClass("hidden");
        bod.addClass(presentClass);
        bod.addClass(fullHeightClass);
        $("html").addClass(fullHeightClass);
        $(".section .runestone").addClass(fullHeightClass);
        $(".ac-caption").addClass(bottomClass);
        localStorage.setItem("presentMode", presentClass);
        loadPresenterCss(); // present_mode.css should only apply when in presenter mode.
        activateExercise();
    }
}

function loadPresenterCss() {
    presenterCssLink = document.createElement("link");
    presenterCssLink.type = "text/css";
    presenterCssLink.href = "../_static/presenter_mode.css";
    presenterCssLink.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(presenterCssLink);
}

function presentModeSetup() {
    // moved this out of configure
    let dataComponent = $("[data-childcomponent]");

    // this still leaves some things semi-messed up when you exit presenter mode.
    // but instructors will probably just learn to refresh the page.
    dataComponent.addClass("runestone");
    dataComponent.parent().closest("div").not(".section").addClass("runestone");
    dataComponent.parent().closest("div").css("max-width", "none");

    dataComponent.each(function (index) {
        let me = $(this);
        $(this)
            .find(".ac_code_div, .ac_output")
            .wrapAll("<div class='ac-block' style='width: 100%;'></div>");
    });

    codelensListener(500);
    $(".section img").wrap('<div class="runestone">');
    codeExercises = $(".runestone").not(".runestone .runestone");
    // codeExercises.each(function(){
    $("h1").before(
        "<div class='presentation-title'> \
        <button class='prev-exercise btn-presenter btn-grey-outline' onclick='prevExercise()'>Back</button> \
        <button class='next-exercise btn-presenter btn-grey-solid' onclick='nextExercise()'>Next</button> \
      </div>"
    );
}
function getActiveExercise() {
    return (active = codeExercises.filter(".active"));
}

function activateExercise(index) {
    if (typeof index == "undefined") {
        index = 0;
    }

    let active = getActiveExercise();

    if (codeExercises.length) {
        active.removeClass("active");
        active = $(codeExercises[index]).addClass("active");
        active.removeClass("hidden");
        codeExercises.not(codeExercises.filter(".active")).addClass("hidden");
    }
}

function nextExercise() {
    let active = getActiveExercise();
    let nextIndex = codeExercises.index(active) + 1;
    if (nextIndex < codeExercises.length) {
        activateExercise(nextIndex);
    }
}

function prevExercise() {
    let active = getActiveExercise();
    let prevIndex = codeExercises.index(active) - 1;
    if (prevIndex >= 0) {
        activateExercise(prevIndex);
    }
}

function configure() {
    let rightNav = $(".navbar-right");
    rightNav.prepend(
        "<li class='dropdown view-toggle'> \
      <label>View: \
        <select class='mode-select'> \
          <option value='text'>Textbook</option> \
          <option value='present'>Code Presenter</option> \
        </select> \
      </label> \
    </li>"
    );

    let modeSelect = $(".mode-select").change(presentToggle);
}

function codelensListener(duration) {
    // $(".ExecutionVisualizer").length ? configureCodelens() : setTimeout(codelensListener, duration);
    // configureCodelens();
}

function configureCodelens() {
    let acCodeTitle = document.createElement("h4");
    acCodeTitle.textContent = "Active Code Window";
    let acCode = $(".ac_code_div").removeClass("col-md-12");
    $(".ac_code_div").addClass("col-md-6");
    acCode.prepend(acCodeTitle);

    acOutTitle = document.createElement("h4");
    acOutTitle.textContent = "Output Window";
    let acOut = $(".ac_output").addClass("col-md-6");
    $(".ac_output").prepend(acOutTitle);

    let sketchpadTitle = document.createElement("h4");
    sketchpadTitle.textContent = "Sketchpad";
    let sketchpad = document.createElement("span");
    $(sketchpad).addClass("sketchpad");
    let sketchpadContainer = document.createElement("div");
    $(sketchpadContainer).addClass("sketchpad-container");
    sketchpadContainer.appendChild(sketchpadTitle);
    sketchpadContainer.appendChild(sketchpad);
    //$('.ac_output').append(sketchpadContainer);

    let visualizers = $(".ExecutionVisualizer");

    console.log("Econtainer: ", this.eContainer);

    $("[data-childcomponent]").on("click", "button.row-mode", function () {
        $(this).closest("[data-childcomponent]").removeClass("card-mode");
        $(this).closest("[data-childcomponent]").addClass("row-mode");
        $(this).next(".card-mode").removeClass("active-layout");
        $(this).addClass("active-layout");
    });

    $("[data-childcomponent]").on("click", "button.card-mode", function () {
        $(this).closest("[data-childcomponent]").removeClass("row-mode");
        $(this).closest("[data-childcomponent]").addClass("card-mode");
        $(this).prev(".row-mode").removeClass("active-layout");
        $(this).addClass("active-layout");
    });

    $("[data-childcomponent] .ac_section").each(function () {
        $(this).prepend(
            '<div class="presentation-options"><button class="row-mode layout-btn"><img src="../_images/row-btn-content.png" alt="Rows"></button><button class="card-mode layout-btn"><img src="../_images/card-btn-content.png" alt="Card"></button></div>'
        );
    });

    visualizers.each(function (index) {
        let me = $(this);
        let col1 = me.find("#vizLayoutTdFirst");
        let col2 = me.find("#vizLayoutTdSecond");
        let dataVis = me.find("#dataViz");
        let stackHeapTable = me.find("#stackHeapTable");
        let output = me.find("#progOutputs");
        output.css("display", "block");
        me.parent().prepend(
            "<div class='presentation-title'><div class='title-text'> Example " +
                (Number(index) + 1) +
                "</div></div>"
        );
    });

    acCode.each(function () {
        let section = $(this).closest(".ac-block").parent();
        console.log(section, section.length);
        section.append(sketchpadContainer);
    });

    $("button.card-mode").click();

    let modeSelect = $(".mode-select");
    let mode = localStorage.getItem("presentMode");
    if (mode == "present") {
        modeSelect.val("present");
        modeSelect.change();
    }
}

$(document).bind("runestone:login-complete", function () {
    // if user is instructor, enable presenter mode
    if (eBookConfig.isInstructor) {
        configure();
    }
});


/***/ }),

/***/ 75106:
/*!**************************************!*\
  !*** ./runestone/common/js/theme.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSwitch": () => (/* binding */ getSwitch),
/* harmony export */   "switchTheme": () => (/* binding */ switchTheme)
/* harmony export */ });
function getSwitch() {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }
}

function switchTheme() {

	var checkBox = document.getElementById("checkbox");
    if (checkBox.checked == true) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }
}


/***/ }),

/***/ 70114:
/*!************************************************!*\
  !*** ./runestone/common/js/user-highlights.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_user_highlights_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/user-highlights.css */ 88874);
/*global variable declarations*/






function getCompletions() {
    // Get the completion status
    if (
        window.location.href.match(
            /(index.html|toctree.html|genindex.html|navhelp.html|toc.html|assignments.html|Exercises.html)/
        )
    ) {
        return;
    }

    var currentPathname = window.location.pathname;
    if (currentPathname.indexOf("?") !== -1) {
        currentPathname = currentPathname.substring(
            0,
            currentPathname.lastIndexOf("?")
        );
    }
    var data = { lastPageUrl: currentPathname };
    jQuery
        .ajax({
            url: eBookConfig.ajaxURL + "getCompletionStatus",
            data: data,
            async: false,
        })
        .done(function (data) {
            if (data != "None") {
                var completionData = $.parseJSON(data);
                var completionClass, completionMsg;
                if (completionData[0].completionStatus == 1) {
                    completionClass = "buttonConfirmCompletion";
                    completionMsg =
                        "<i class='glyphicon glyphicon-ok'></i> Completed. Well Done!";
                } else {
                    completionClass = "buttonAskCompletion";
                    completionMsg = "Mark as Completed";
                }
                $("#main-content").append(
                    '<div style="text-align:center"><button class="btn btn-lg ' +
                        completionClass +
                        '" id="completionButton">' +
                        completionMsg +
                        "</button></div>"
                );
            }
        });
}

function showLastPositionBanner() {
    var lastPositionVal = $.getUrlVar("lastPosition");
    if (typeof lastPositionVal !== "undefined") {
        $("body").append(
            '<img src="../_static/last-point.png" style="position:absolute; padding-top:55px; left: 10px; top: ' +
                parseInt(lastPositionVal) +
                'px;"/>'
        );
        $("html, body").animate({ scrollTop: parseInt(lastPositionVal) }, 1000);
    }
}

function addNavigationAndCompletionButtons() {
    if (
        window.location.href.match(
            /(index.html|genindex.html|navhelp.html|toc.html|assignments.html|Exercises.html|toctree.html)/
        )
    ) {
        return;
    }
    var navLinkBgRightHiddenPosition = -$("#navLinkBgRight").outerWidth() - 5;
    var navLinkBgRightHalfOpen;
    var navLinkBgRightFullOpen = 0;

    if ($("#completionButton").hasClass("buttonAskCompletion")) {
        navLinkBgRightHalfOpen = navLinkBgRightHiddenPosition + 70;
    } else if ($("#completionButton").hasClass("buttonConfirmCompletion")) {
        navLinkBgRightHalfOpen = 0;
    }
    var relationsNextIconInitialPosition = $("#relations-next").css("right");
    var relationsNextIconNewPosition = -(navLinkBgRightHiddenPosition + 35);

    $("#navLinkBgRight").css("right", navLinkBgRightHiddenPosition).show();
    var navBgShown = false;
    $(window).scroll(function () {
        if (
            $(window).scrollTop() + $(window).height() ==
            $(document).height()
        ) {
            $("#navLinkBgRight").animate(
                { right: navLinkBgRightHalfOpen },
                200
            );
            $("#navLinkBgLeft").animate({ left: "0px" }, 200);
            if ($("#completionButton").hasClass("buttonConfirmCompletion")) {
                $("#relations-next").animate(
                    { right: relationsNextIconNewPosition },
                    200
                );
            }
            navBgShown = true;
        } else if (navBgShown) {
            $("#navLinkBgRight").animate(
                { right: navLinkBgRightHiddenPosition },
                200
            );
            $("#navLinkBgLeft").animate({ left: "-65px" }, 200);
            $("#relations-next").animate({
                right: relationsNextIconInitialPosition,
            });
            navBgShown = false;
        }
    });

    var completionFlag = 0;
    if ($("#completionButton").hasClass("buttonAskCompletion")) {
        completionFlag = 0;
    } else {
        completionFlag = 1;
    }
    $("#completionButton").on("click", function () {
        if ($(this).hasClass("buttonAskCompletion")) {
            $(this)
                .removeClass("buttonAskCompletion")
                .addClass("buttonConfirmCompletion")
                .html(
                    "<i class='glyphicon glyphicon-ok'></i> Completed. Well Done!"
                );
            $("#navLinkBgRight").animate({ right: navLinkBgRightFullOpen });
            $("#relations-next").animate({
                right: relationsNextIconNewPosition,
            });
            navLinkBgRightHalfOpen = 0;
            completionFlag = 1;
        } else if ($(this).hasClass("buttonConfirmCompletion")) {
            $(this)
                .removeClass("buttonConfirmCompletion")
                .addClass("buttonAskCompletion")
                .html("Mark as Completed");
            navLinkBgRightHalfOpen = navLinkBgRightHiddenPosition + 70;
            $("#navLinkBgRight").animate({ right: navLinkBgRightHalfOpen });
            $("#relations-next").animate({
                right: relationsNextIconInitialPosition,
            });
            completionFlag = 0;
        }
        processPageState(completionFlag);
    });

    $(window).on("beforeunload", function (e) {
        if (completionFlag == 0) {
            processPageState(completionFlag);
        }
    });
}

function decorateTableOfContents() {
    if (
        window.location.href.toLowerCase().indexOf("toc.html") != -1 ||
        window.location.href.toLowerCase().indexOf("index.html") != -1
    ) {
        jQuery.get(eBookConfig.ajaxURL + "getAllCompletionStatus", function (
            data
        ) {
            var subChapterList;
            if (data != "None") {
                subChapterList = $.parseJSON(data);

                var allSubChapterURLs = $("#main-content div li a");
                $.each(subChapterList, function (index, item) {
                    for (var s = 0; s < allSubChapterURLs.length; s++) {
                        if (
                            allSubChapterURLs[s].href.indexOf(
                                item.chapterName + "/" + item.subChapterName
                            ) != -1
                        ) {
                            if (item.completionStatus == 1) {
                                $(allSubChapterURLs[s].parentElement)
                                    .addClass("completed")
                                    .append(
                                        '<span class="infoTextCompleted">- Completed this topic on ' +
                                            item.endDate +
                                            "</span>"
                                    )
                                    .children()
                                    .first()
                                    .hover(
                                        function () {
                                            $(this)
                                                .next(".infoTextCompleted")
                                                .show();
                                        },
                                        function () {
                                            $(this)
                                                .next(".infoTextCompleted")
                                                .hide();
                                        }
                                    );
                            } else if (item.completionStatus == 0) {
                                $(allSubChapterURLs[s].parentElement)
                                    .addClass("active")
                                    .append(
                                        '<span class="infoTextActive">Last read this topic on ' +
                                            item.endDate +
                                            "</span>"
                                    )
                                    .children()
                                    .first()
                                    .hover(
                                        function () {
                                            $(this)
                                                .next(".infoTextActive")
                                                .show();
                                        },
                                        function () {
                                            $(this)
                                                .next(".infoTextActive")
                                                .hide();
                                        }
                                    );
                            }
                        }
                    }
                });
            }
        });
        var data = { course: eBookConfig.course };
        jQuery.get(eBookConfig.ajaxURL + "getlastpage", data, function (data) {
            var lastPageData;
            if (data != "None") {
                lastPageData = $.parseJSON(data);
                if (lastPageData[0].lastPageChapter != null) {
                    $("#continue-reading")
                        .show()
                        .html(
                            '<div id="jump-to-chapter" class="alert alert-info" ><strong>You were Last Reading:</strong> ' +
                                lastPageData[0].lastPageChapter +
                                (lastPageData[0].lastPageSubchapter
                                    ? " &gt; " +
                                      lastPageData[0].lastPageSubchapter
                                    : "") +
                                ' <a href="' +
                                lastPageData[0].lastPageUrl +
                                "?lastPosition=" +
                                lastPageData[0].lastPageScrollLocation +
                                '">Continue Reading</a></div>'
                        );
                }
            }
        });
    }
}

function enableCompletions() {
    getCompletions();
    showLastPositionBanner();
    addNavigationAndCompletionButtons();
    decorateTableOfContents();
}

// call enable user highlights after login
$(document).bind("runestone:login", enableCompletions);

function processPageState(completionFlag) {
    /*Log last page visited*/
    var currentPathname = window.location.pathname;
    if (currentPathname.indexOf("?") !== -1) {
        currentPathname = currentPathname.substring(
            0,
            currentPathname.lastIndexOf("?")
        );
    }
    var data = {
        lastPageUrl: currentPathname,
        lastPageScrollLocation: $(window).scrollTop(),
        completionFlag: completionFlag,
        course: eBookConfig.course,
    };
    $(document).ajaxError(function (e, jqhxr, settings, exception) {
        console.log("Request Failed for " + settings.url);
        console.log(e);
    });
    jQuery.ajax({
        url: eBookConfig.ajaxURL + "updatelastpage",
        data: data,
        async: true,
    });
}

$.extend({
    getUrlVars: function () {
        var vars = [],
            hash;
        var hashes = window.location.search
            .slice(window.location.search.indexOf("?") + 1)
            .split("&");
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split("=");
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function (name) {
        return $.getUrlVars()[name];
    },
});


/***/ }),

/***/ 11968:
/*!*****************************************************************************************************************!*\
  !*** ./runestone/common/project_template/_templates/plugin_layouts/sphinx_bootstrap/static/bootstrap-sphinx.js ***!
  \*****************************************************************************************************************/
/***/ (() => {

(function ($) {
  /**
   * Patch TOC list.
   *
   * Will mutate the underlying span to have a correct ul for nav.
   *
   * @param $span: Span containing nested UL's to mutate.
   * @param minLevel: Starting level for nested lists. (1: global, 2: local).
   */
  var patchToc = function ($ul, minLevel) {
    var findA,
      patchTables,
      $localLi;

    // Find all a "internal" tags, traversing recursively.
    findA = function ($elem, level) {
      level = level || 0;
      var $items = $elem.find("> li > a.internal, > ul, > li > ul");

      // Iterate everything in order.
      $items.each(function (index, item) {
        var $item = $(item),
          tag = item.tagName.toLowerCase(),
          $childrenLi = $item.children('li'),
          $parentLi = $($item.parent('li'), $item.parent().parent('li'));

        // Add dropdowns if more children and above minimum level.
        if (tag === 'ul' && level >= minLevel && $childrenLi.length > 0) {
          $parentLi
            .addClass('dropdown-submenu')
            .children('a').first().attr('tabindex', -1);

          $item.addClass('dropdown-menu');
        }

        findA($item, level + 1);
      });
    };

    findA($ul);
  };

  /**
   * Patch all tables to remove ``docutils`` class and add Bootstrap base
   * ``table`` class.
   */
  patchTables = function () {
    $("table.docutils")
      .removeClass("docutils")
      .addClass("table")
      .attr("border", 0);
  };

$(function () {

    /*
     * Scroll the window to avoid the topnav bar
     * https://github.com/twitter/bootstrap/issues/1768
     */
    if ($("#navbar.navbar-fixed-top").length > 0) {
      var navHeight = $("#navbar").height(),
        shiftWindow = function() { scrollBy(0, -navHeight - 10); };

      if (location.hash) {
        shiftWindow();
      }

      window.addEventListener("hashchange", shiftWindow);
    }

    // Add styling, structure to TOC's.
    $(".dropdown-menu").each(function () {
      $(this).find("ul").each(function (index, item){
        var $item = $(item);
        $item.addClass('unstyled');
      });
    });

    // Global TOC.
    if ($("ul.globaltoc li").length) {
      patchToc($("ul.globaltoc"), 1);
    } else {
      // Remove Global TOC.
      $(".globaltoc-container").remove();
    }

    // Local TOC.
    patchToc($("ul.localtoc"), 2);

    // Mutate sub-lists (for bs-2.3.0).
    $(".dropdown-menu ul").not(".dropdown-menu").each(function () {
      var $ul = $(this),
        $parent = $ul.parent(),
        tag = $parent[0].tagName.toLowerCase(),
        $kids = $ul.children().detach();

      // Replace list with items if submenu header.
      if (tag === "ul") {
        $ul.replaceWith($kids);
      } else if (tag === "li") {
        // Insert into previous list.
        $parent.after($kids);
        $ul.remove();
      }
    });

    // Add divider in page TOC.
    $localLi = $("ul.localtoc li");
    if ($localLi.length > 2) {
      $localLi.first().after('<li class="divider"></li>');
    }

    // Enable dropdown.
    $('.dropdown-toggle').dropdown();

    // Patch tables.
    patchTables();

    // Add Note, Warning styles.
    $('div.note').addClass('alert').addClass('alert-info');
    $('div.warning').addClass('alert').addClass('alert-warning');

    // Inline code styles to Bootstrap style.
    $('tt.docutils.literal').not(".xref").each(function (i, e) {
      // ignore references
      if (!$(e).parent().hasClass("reference")) {
        $(e).replaceWith(function () {
          return $("<code />").text($(this).text());
        });
      }});
  });
}(window.jQuery));


/***/ }),

/***/ 36350:
/*!**************************!*\
  !*** ./webpack.index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "runestone_auto_import": () => (/* binding */ runestone_auto_import),
/* harmony export */   "runestone_import": () => (/* binding */ runestone_import)
/* harmony export */ });
/* harmony import */ var jquery_ui_jquery_ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-ui/jquery-ui.js */ 86301);
/* harmony import */ var jquery_ui_jquery_ui_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_jquery_ui_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_ui_themes_base_jquery_ui_all_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-ui/themes/base/jquery.ui.all.css */ 47581);
/* harmony import */ var _runestone_common_js_jquery_idle_timer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./runestone/common/js/jquery.idle-timer.js */ 26886);
/* harmony import */ var _runestone_common_js_jquery_idle_timer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_js_jquery_idle_timer_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./runestone/common/js/jquery_i18n/jquery.i18n.js */ 99283);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_js_jquery_i18n_jquery_i18n_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_emitter_bidi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./runestone/common/js/jquery_i18n/jquery.i18n.emitter.bidi.js */ 43793);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_emitter_bidi_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_js_jquery_i18n_jquery_i18n_emitter_bidi_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_emitter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./runestone/common/js/jquery_i18n/jquery.i18n.emitter.js */ 30423);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_emitter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_js_jquery_i18n_jquery_i18n_emitter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_fallbacks_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./runestone/common/js/jquery_i18n/jquery.i18n.fallbacks.js */ 9001);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_fallbacks_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_js_jquery_i18n_jquery_i18n_fallbacks_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_messagestore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./runestone/common/js/jquery_i18n/jquery.i18n.messagestore.js */ 34517);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_messagestore_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_js_jquery_i18n_jquery_i18n_messagestore_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_parser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./runestone/common/js/jquery_i18n/jquery.i18n.parser.js */ 25252);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_parser_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_js_jquery_i18n_jquery_i18n_parser_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_language_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./runestone/common/js/jquery_i18n/jquery.i18n.language.js */ 64793);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_language_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_js_jquery_i18n_jquery_i18n_language_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.js */ 43734);
/* harmony import */ var bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ 97318);
/* harmony import */ var _runestone_common_project_template_templates_plugin_layouts_sphinx_bootstrap_static_bootstrap_sphinx_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./runestone/common/project_template/_templates/plugin_layouts/sphinx_bootstrap/static/bootstrap-sphinx.js */ 11968);
/* harmony import */ var _runestone_common_project_template_templates_plugin_layouts_sphinx_bootstrap_static_bootstrap_sphinx_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_project_template_templates_plugin_layouts_sphinx_bootstrap_static_bootstrap_sphinx_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _runestone_common_css_runestone_custom_sphinx_bootstrap_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./runestone/common/css/runestone-custom-sphinx-bootstrap.css */ 64778);
/* harmony import */ var _runestone_common_js_bookfuncs_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./runestone/common/js/bookfuncs.js */ 21294);
/* harmony import */ var _runestone_common_js_user_highlights_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./runestone/common/js/user-highlights.js */ 70114);
/* harmony import */ var _runestone_matrixeq_css_matrixeq_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./runestone/matrixeq/css/matrixeq.css */ 23746);
/* harmony import */ var _runestone_webgldemo_css_webglinteractive_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./runestone/webgldemo/css/webglinteractive.css */ 86324);
/* harmony import */ var _runestone_common_js_theme_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./runestone/common/js/theme.js */ 75106);
/* harmony import */ var _runestone_common_js_presenter_mode_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./runestone/common/js/presenter_mode.js */ 66563);
/* harmony import */ var _runestone_common_js_presenter_mode_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_js_presenter_mode_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _runestone_common_css_presenter_mode_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./runestone/common/css/presenter_mode.css */ 88288);
// ***********************************************************************************
// |docname| - A framework allowing a Runestone component to load only the JS it needs
// ***********************************************************************************
// The JavaScript required by all Runestone components is quite large and results in slow page loads. This approach enables a Runestone component to load only the JavaScript it needs, rather than loading JavaScript for all the components regardless of which are actually used.
//
// To accomplish this, webpack's split-chunks ability analyzes all JS, starting from this file. The dynamic imports below are transformed by webpack into the dynamic fetches of just the JS required by each file and all its dependencies. (If using static imports, webpack will assume that all files are already statically loaded via script tags, defeating the purpose of this framework.)
//
// However, this approach leads to complexity:
//
// -    The ``data-component`` attribute of each component must be kept in sync with the keys of the ``module_map`` below.
// -    The values in the ``module_map`` must be kept in sync with the JavaScript files which implement each of the components.




// Static imports
// ==============
// These imports are (we assume) needed by all pages. However, it would be much better to load these in the modules that actually use them.
//
// These are static imports; code in `dynamically loaded components`_ deals with dynamic imports.
//
// jQuery-related imports.











// Bootstrap





// Misc



// These belong in dynamic imports for the obvious component; however, these components don't include a ``data-component`` attribute.



// These are only needed for the Runestone book, but not in a library mode (such as pretext). I would prefer to dynamically load them. However, these scripts are so small I haven't bothered to do so.





// Dynamically loaded components
// =============================
// This provides a list of modules that components can dynamically import. Webpack will create a list of imports for each based on its analysis.
const module_map = {
    // Wrap each import in a function, so that it won't occur until the function is called. While something cleaner would be nice, webpack can't analyze things like ``import(expression)``.
    //
    // The keys must match the value of each component's ``data-component`` attribute -- the ``runestone_import`` and ``runestone_auto_import`` functions assume this.
    activecode: () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_codemirror_mode_clike_clike_js-node_modules_codemirror_mode_javascript_j-ea0e03"), __webpack_require__.e("vendors-node_modules_codemirror_mode_htmlmixed_htmlmixed_js-node_modules_handsontable_es_inde-2e0505"), __webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_codelens_js_pytutor-embed_bundle_js"), __webpack_require__.e("node_modules_moment_locale_sync_recursive_-runestone_activecode_js_acfactory_js"), __webpack_require__.e("runestone_activecode_css_activecode_css")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/activecode/js/acfactory.js */ 86902)),
    ble: () => __webpack_require__.e(/*! import() */ "runestone_cellbotics_js_ble_js").then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/cellbotics/js/ble.js */ 14818)),
    // Always import the timed version of a component if available, since the timed components also define the component's factory and include the component as well. Note that ``acfactory`` imports the timed components of ActiveCode, so it follows this pattern.
    clickablearea: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_clickableArea_js_timedclickable_js"), __webpack_require__.e("runestone_clickableArea_css_clickable_css")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/clickableArea/js/timedclickable.js */ 61581)),
    codelens: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_codelens_js_pytutor-embed_bundle_js"), __webpack_require__.e("runestone_codelens_js_codelens_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/codelens/js/codelens.js */ 12882)),
    datafile: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_datafile_js_datafile_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/datafile/js/datafile.js */ 55789)),
    dragndrop: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_dragndrop_js_timeddnd_js"), __webpack_require__.e("runestone_dragndrop_css_dragndrop_css")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/dragndrop/js/timeddnd.js */ 47496)),
    fillintheblank: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_fitb_js_timedfitb_js"), __webpack_require__.e("runestone_fitb_css_fitb_css")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/fitb/js/timedfitb.js */ 74309)),
    khanex: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_khanex_js_khanex_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/khanex/js/khanex.js */ 13435)),
    lp_build: () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_codemirror_mode_clike_clike_js-node_modules_codemirror_mode_javascript_j-ea0e03"), __webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_lp_js_lp_js-node_modules_codemirror_lib_codemirror_css")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/lp/js/lp.js */ 2013)),
    multiplechoice: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_mchoice_js_timedmc_js"), __webpack_require__.e("runestone_mchoice_css_mchoice_css")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/mchoice/js/timedmc.js */ 95983)),
    parsons: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_parsons_js_timedparsons_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/parsons/js/timedparsons.js */ 79661)),
    poll: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_poll_js_poll_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/poll/js/poll.js */ 37350)),
    quizly: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_quizly_js_quizly_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/quizly/js/quizly.js */ 16207)),
    reveal: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_reveal_js_reveal_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/reveal/js/reveal.js */ 12632)),
    selectquestion: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_selectquestion_js_selectone_js"), __webpack_require__.e("runestone_selectquestion_css_selectquestion_css")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/selectquestion/js/selectone.js */ 63931)),
    shortanswer: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_shortanswer_js_timed_shortanswer_js"), __webpack_require__.e("runestone_shortanswer_css_shortanswer_css")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/shortanswer/js/timed_shortanswer.js */ 87483)),
    showeval: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_showeval_js_showEval_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/showeval/js/showEval.js */ 6224)),
    simple_sensor: () => __webpack_require__.e(/*! import() */ "runestone_cellbotics_js_simple_sensor_js").then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/cellbotics/js/simple_sensor.js */ 72389)),
    spreadsheet: () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_jexcel_dist_jexcel_js-node_modules_jexcel_dist_jexcel_css"), __webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_spreadsheet_js_spreadsheet_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/spreadsheet/js/spreadsheet.js */ 60611)),
    tabbedStuff: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_tabbedStuff_js_tabbedstuff_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/tabbedStuff/js/tabbedstuff.js */ 97887)),
    timedAssessment: () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_codemirror_mode_clike_clike_js-node_modules_codemirror_mode_javascript_j-ea0e03"), __webpack_require__.e("vendors-node_modules_codemirror_mode_htmlmixed_htmlmixed_js-node_modules_handsontable_es_inde-2e0505"), __webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_codelens_js_pytutor-embed_bundle_js"), __webpack_require__.e("node_modules_moment_locale_sync_recursive_-runestone_activecode_js_acfactory_js"), __webpack_require__.e("runestone_parsons_js_timedparsons_js"), __webpack_require__.e("runestone_mchoice_js_timedmc_js"), __webpack_require__.e("runestone_selectquestion_js_selectone_js"), __webpack_require__.e("runestone_dragndrop_js_timeddnd_js"), __webpack_require__.e("runestone_clickableArea_js_timedclickable_js"), __webpack_require__.e("runestone_fitb_js_timedfitb_js"), __webpack_require__.e("runestone_shortanswer_js_timed_shortanswer_js"), __webpack_require__.e("runestone_timed_js_timed_js-runestone_activecode_css_activecode_css-runestone_clickableArea_c-c2e17e")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/timed/js/timed.js */ 58707)),
    wavedrom: () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_wavedrom_lib_process-all_js-node_modules_wavedrom_lib_wave-skin_js"), __webpack_require__.e("runestone_wavedrom_js_wavedrom_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/wavedrom/js/wavedrom.js */ 32405)),
    // TODO: since this isn't in a ``data-component``, need to trigger an import of this code manually.
    webwork: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_webwork_js_webwork_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/webwork/js/webwork.js */ 66142)),
    youtube: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_video_js_runestonevideo_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/video/js/runestonevideo.js */ 48657)),
}

// .. _dynamic import machinery:
//
// Dynamic import machinery
// ========================
// Fulfill a promise when the Runestone pre-login complete event occurs.
let pre_login_complete_promise = new Promise(resolve => $(document).bind("runestone:pre-login-complete", resolve));

// Provide a simple function to import the JS for all components on the page.
function runestone_auto_import() {
    // Create a set of ``data-component`` values, to avoid duplication.
    const s = new Set(
        // All Runestone components have a ``data-component`` attribute.
        $("[data-component]").map(
            // Extract the value of the data-component attribute.
            (index, element) => $(element).attr("data-component")
            // Switch from a jQuery object back to an array, passing that to the Set constructor.
        ).get()
    );

    // Load JS for each of the components found.
    const a = [...s].map(value =>
        // If there's no JS for this component, return an empty Promise.
        (module_map[value] || (() => Promise.resolve()))()
    );

    // Send the Runestone login complete event when all JS is loaded and the pre-login is also complete.
    Promise.all([pre_login_complete_promise, ...a]).then(() => $(document).trigger("runestone:login-complete"));
}

// Load component JS when the document is ready.
$(document).ready(runestone_auto_import);

// Provide a function to import one specific Runestone component.
// the import function inside module_map is async -- runestone_import
// should be awaited when necessary to ensure the import completes
async function runestone_import(component_name) {
    return module_map[component_name]();
}

async function popupScratchAC() {
    // load the activecode bundle
    await runestone_import("activecode");
    // scratchDiv will be defined if we have already created a scratch
    // activecode.  If its not defined then we need to get it ready to toggle
    if (!eBookConfig.scratchDiv) {
        window.ACFactory.createScratchActivecode();
        let divid = eBookConfig.scratchDiv
        window.edList[divid] = ACFactory.createActiveCode($(`#${divid}`)[0],
            eBookConfig.acDefaultLanguage);
        if (eBookConfig.isLoggedIn) {
            window.edList[divid].enableSaveLoad();
        }
    }
    window.ACFactory.toggleScratchActivecode();
}

// Set the directory containing this script as the `path <https://webpack.js.org/guides/public-path/#on-the-fly>`_ for all webpacked scripts.
const script_src = document.currentScript.src;
__webpack_require__.p = script_src.substring(0, script_src.lastIndexOf('/') + 1);


// Manual exports
// ==============
// Webpack's ``output.library`` setting doesn't seem to work with the split chunks plugin; do all exports manually through the ``window`` object instead.
const rc = {};
rc.runestone_import = runestone_import;
rc.runestone_auto_import = runestone_auto_import;
rc.getSwitch = _runestone_common_js_theme_js__WEBPACK_IMPORTED_MODULE_18__.getSwitch;
rc.switchTheme = _runestone_common_js_theme_js__WEBPACK_IMPORTED_MODULE_18__.switchTheme;
rc.popupScratchAC = popupScratchAC;
window.runestoneComponents = rc;


/***/ }),

/***/ 73609:
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = jQuery;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_js-node_modules_jquery-ui_jquery-ui_js-node_-e60694"], () => (__webpack_exec__(36350)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NvbW1vbi9jc3MvcHJlc2VudGVyX21vZGUuY3NzPzFkZTciLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vY3NzL3J1bmVzdG9uZS1jdXN0b20tc3BoaW54LWJvb3RzdHJhcC5jc3M/YWUyOCIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NvbW1vbi9jc3MvdXNlci1oaWdobGlnaHRzLmNzcz80N2I0Iiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvbWF0cml4ZXEvY3NzL21hdHJpeGVxLmNzcz9kZmU4Iiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvd2ViZ2xkZW1vL2Nzcy93ZWJnbGludGVyYWN0aXZlLmNzcz82Y2M3Iiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY29tbW9uL2pzL2Jvb2tmdW5jcy5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NvbW1vbi9qcy9qcXVlcnkuaWRsZS10aW1lci5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NvbW1vbi9qcy9qcXVlcnlfaTE4bi9qcXVlcnkuaTE4bi5lbWl0dGVyLmJpZGkuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vanMvanF1ZXJ5X2kxOG4vanF1ZXJ5LmkxOG4uZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NvbW1vbi9qcy9qcXVlcnlfaTE4bi9qcXVlcnkuaTE4bi5mYWxsYmFja3MuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vanMvanF1ZXJ5X2kxOG4vanF1ZXJ5LmkxOG4uanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vanMvanF1ZXJ5X2kxOG4vanF1ZXJ5LmkxOG4ubGFuZ3VhZ2UuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vanMvanF1ZXJ5X2kxOG4vanF1ZXJ5LmkxOG4ubWVzc2FnZXN0b3JlLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY29tbW9uL2pzL2pxdWVyeV9pMThuL2pxdWVyeS5pMThuLnBhcnNlci5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NvbW1vbi9qcy9wcmVzZW50ZXJfbW9kZS5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NvbW1vbi9qcy90aGVtZS5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NvbW1vbi9qcy91c2VyLWhpZ2hsaWdodHMuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vcHJvamVjdF90ZW1wbGF0ZS9fdGVtcGxhdGVzL3BsdWdpbl9sYXlvdXRzL3NwaGlueF9ib290c3RyYXAvc3RhdGljL2Jvb3RzdHJhcC1zcGhpbnguanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3dlYnBhY2suaW5kZXguanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGFBQWEsTUFBTSxhQUFhO0FBQzNGLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixNQUFNLGFBQWE7QUFDcEMsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsNEJBQTRCLHFCQUFxQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNENBQTRDO0FBQ2hFO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7QUNoUUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9COzs7QUFHQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qjs7QUFFOUI7QUFDQSwrQkFBK0I7O0FBRS9COzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCOztBQUUxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQixnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLElBQUk7QUFDbkIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNyUUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOzs7Ozs7Ozs7OztBQzdGRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQixhQUFhLE1BQU07QUFDbkIsY0FBYyxNQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQixjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkIsYUFBYSxNQUFNO0FBQ25CLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNLGVBQWUsY0FBYyxHQUFHLE9BQU8sR0FBRyxPQUFPO0FBQ3BFLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsT0FBTywwQ0FBMEM7QUFDakQ7QUFDQSxhQUFhLE1BQU0sZUFBZSxPQUFPLEdBQUcsT0FBTyxHQUFHLE9BQU8sSUFBSSxPQUFPO0FBQ3hFLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDO0FBQ0EsYUFBYSxNQUFNLGNBQWMsMEJBQTBCLEdBQUcsWUFBWTtBQUMxRSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ3ZLRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7Ozs7Ozs7Ozs7O0FDekxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxjQUFjO0FBQzNCLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUNBQW1DO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxNQUFNO0FBQ25CLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU8sb0RBQW9ELElBQUk7QUFDM0UsYUFBYSxjQUFjO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLGE7Ozs7Ozs7Ozs7QUN2U0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsT0FBTztBQUNwQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLHdCQUF3QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGVBQWUseUJBQXlCO0FBQ3hDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsMEJBQTBCLG1CQUFtQjtBQUM3QztBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLE9BQU8sd0RBQXdEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsY0FBYyxjQUFjO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7Ozs7Ozs7Ozs7O0FDamZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvQkFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0IsYUFBYSxPQUFPO0FBQ3BCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQzdIRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQix5QkFBeUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLHlCQUF5QjtBQUN6Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQyxxREFBcUQ7QUFDckQsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVDQUF1QztBQUN2Qyx3Q0FBd0M7O0FBRXhDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDLGE7Ozs7Ozs7Ozs7QUNyVEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMU5NO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hCQTs7QUFFYTs7QUFFdUI7OztBQUdwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsa0JBQWtCLFlBQVk7QUFDekc7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSxpQ0FBaUMsdUNBQXVDO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0NBQWdDO0FBQ2pEO0FBQ0E7QUFDQSx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBO0FBQ0EscUJBQXFCLHNDQUFzQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGlCQUFpQixzQ0FBc0M7QUFDdkQ7QUFDQTtBQUNBLHlDQUF5QyxnQkFBZ0I7QUFDekQ7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGdDQUFnQztBQUMxRTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLDhCQUE4QjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVCxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7Ozs7Ozs7Ozs7O0FDdFREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsOEJBQThCOztBQUVoRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25JRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOzs7QUFHYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ2dDO0FBQ2lCO0FBQ0c7QUFDTTtBQUNhO0FBQ0w7QUFDRTtBQUNHO0FBQ047QUFDRTs7QUFFbkU7QUFDd0M7QUFDRTtBQUN5RTtBQUM3Qzs7QUFFdEU7QUFDNEM7QUFDTTs7QUFFbEQsNkRBQTZEO0FBQ2Q7QUFDUzs7QUFFeEQ7QUFDd0U7QUFDdkI7QUFDRTs7O0FBR25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNyQkFBZ0Q7QUFDdEUsZUFBZSwwS0FBMEM7QUFDekQ7QUFDQSx5QkFBeUIsdVZBQXdEO0FBQ2pGLG9CQUFvQixxVUFBNkM7QUFDakUsb0JBQW9CLDZQQUE2QztBQUNqRSxxQkFBcUIsK1RBQThDO0FBQ25FLDBCQUEwQiw2U0FBMEM7QUFDcEUsa0JBQWtCLHFQQUF5QztBQUMzRCxvQkFBb0IsOFlBQWlDO0FBQ3JELDBCQUEwQixxVEFBMkM7QUFDckUsbUJBQW1CLG1RQUFnRDtBQUNuRSxnQkFBZ0IsNk9BQXFDO0FBQ3JELGtCQUFrQixxUEFBeUM7QUFDM0Qsa0JBQWtCLHFQQUF5QztBQUMzRCwwQkFBMEIscVZBQW9EO0FBQzlFLHVCQUF1Qix5VkFBeUQ7QUFDaEYsb0JBQW9CLDRQQUE2QztBQUNqRSx5QkFBeUIsOExBQW9EO0FBQzdFLHVCQUF1QixrWEFBbUQ7QUFDMUUsdUJBQXVCLHlRQUFtRDtBQUMxRSwyQkFBMkIsMnFDQUF1QztBQUNsRSxvQkFBb0IsZ1RBQTZDO0FBQ2pFO0FBQ0EsbUJBQW1CLHlQQUEyQztBQUM5RCxtQkFBbUIsbVFBQWdEO0FBQ25FOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsTUFBTTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXVCOzs7QUFHdkI7QUFDQTtBQUNBLDBGQUEwRjtBQUMxRjtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFTO0FBQ3hCLGlCQUFpQix1RUFBVztBQUM1QjtBQUNBOzs7Ozs7Ozs7Ozs7QUM5SkEsd0IiLCJmaWxlIjoicnVuZXN0b25lLmJ1bmRsZS5qcz92PWRhYzkwNGVlYzhiNDQ1NjMwNWI5Iiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyoqXHJcbiAqXHJcbiAqIFVzZXI6IGJtaWxsZXJcclxuICogT3JpZ2luYWw6IDIwMTEtMDQtMjBcclxuICogRGF0ZTogMjAxOS0wNi0xNFxyXG4gKiBUaW1lOiAyOjAxIFBNXHJcbiAqIFRoaXMgY2hhbmdlIG1hcmtzIHRoZSBiZWdpbm5pbmcgb2YgdmVyc2lvbiA0LjAgb2YgdGhlIHJ1bmVzdG9uZSBjb21wb25lbnRzXHJcbiAqIExvZ2luL2xvZ291dCBpcyBubyBsb25nZXIgaGFuZGxlZCB0aHJvdWdoIGphdmFzY3JpcHQgYnV0IHJhdGhlciBzZXJ2ZXIgc2lkZS5cclxuICogTWFueSBvZiB0aGUgY29tcG9uZW50cyBkZXBlbmQgb24gdGhlIHJ1bmVzdG9uZTpsb2dpbiBldmVudCBzbyB3ZSB3aWxsIGtlZXAgdGhhdFxyXG4gKiBmb3Igbm93IHRvIGtlZXAgdGhlIGNodXJuIGZhaXJseSBtaW5pbWFsLlxyXG4gKi9cclxuXHJcbi8qXHJcblxyXG4gQ29weXJpZ2h0IChDKSAyMDExICBCcmFkIE1pbGxlciAgYm9uZWxha2VAZ21haWwuY29tXHJcblxyXG4gVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcclxuIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XHJcbiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxyXG4gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cclxuXHJcbiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcclxuIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXHJcbiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXHJcbiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG5cclxuIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXHJcbiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cclxuXHJcbiAqL1xyXG5cclxuLy9cclxuLy8gUGFnZSBkZWNvcmF0aW9uIGZ1bmN0aW9uc1xyXG4vL1xyXG5cclxuZnVuY3Rpb24gYWRkUmVhZGluZ0xpc3QoKSB7XHJcbiAgICBpZiAoZUJvb2tDb25maWcucmVhZGluZ3MpIHtcclxuICAgICAgICB2YXIgbCwgbnh0LCBwYXRoX3BhcnRzLCBueHRfbGluaztcclxuICAgICAgICBsZXQgY3VyX3BhdGhfcGFydHMgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpO1xyXG4gICAgICAgIGxldCBuYW1lID1cclxuICAgICAgICAgICAgY3VyX3BhdGhfcGFydHNbY3VyX3BhdGhfcGFydHMubGVuZ3RoIC0gMl0gK1xyXG4gICAgICAgICAgICBcIi9cIiArXHJcbiAgICAgICAgICAgIGN1cl9wYXRoX3BhcnRzW2N1cl9wYXRoX3BhcnRzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGxldCBwb3NpdGlvbiA9IGVCb29rQ29uZmlnLnJlYWRpbmdzLmluZGV4T2YobmFtZSk7XHJcbiAgICAgICAgbGV0IG51bV9yZWFkaW5ncyA9IGVCb29rQ29uZmlnLnJlYWRpbmdzLmxlbmd0aDtcclxuICAgICAgICBpZiAocG9zaXRpb24gPT0gZUJvb2tDb25maWcucmVhZGluZ3MubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAvLyBubyBtb3JlIHJlYWRpbmdzXHJcbiAgICAgICAgICAgIGwgPSAkKFwiPGRpdiAvPlwiLCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBgRmluaXNoZWQgcmVhZGluZyBhc3NpZ25tZW50LiBQYWdlICR7bnVtX3JlYWRpbmdzfSBvZiAke251bV9yZWFkaW5nc30uYCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbiA+PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIGdldCBuZXh0IG5hbWVcclxuICAgICAgICAgICAgbnh0ID0gZUJvb2tDb25maWcucmVhZGluZ3NbcG9zaXRpb24gKyAxXTtcclxuICAgICAgICAgICAgcGF0aF9wYXJ0cyA9IGN1cl9wYXRoX3BhcnRzLnNsaWNlKDAsIGN1cl9wYXRoX3BhcnRzLmxlbmd0aCAtIDIpO1xyXG4gICAgICAgICAgICBwYXRoX3BhcnRzLnB1c2gobnh0KTtcclxuICAgICAgICAgICAgbnh0X2xpbmsgPSBwYXRoX3BhcnRzLmpvaW4oXCIvXCIpO1xyXG4gICAgICAgICAgICBsID0gJChcIjxhIC8+XCIsIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwibGlua1wiLFxyXG4gICAgICAgICAgICAgICAgY2xhc3M6IFwiYnRuIGJ0bi1sZyAnICsgJ2J1dHRvbkNvbmZpcm1Db21wbGV0aW9uJ1wiLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogbnh0X2xpbmssXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBgQ29udGludWUgdG8gcGFnZSAke1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uICsgMlxyXG4gICAgICAgICAgICAgICAgfSBvZiAke251bV9yZWFkaW5nc30gaW4gdGhlIHJlYWRpbmcgYXNzaWdubWVudC5gLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsID0gJChcIjxkaXYgLz5cIiwge1xyXG4gICAgICAgICAgICAgICAgdGV4dDpcclxuICAgICAgICAgICAgICAgICAgICBcIlRoaXMgcGFnZSBpcyBub3QgcGFydCBvZiB0aGUgbGFzdCByZWFkaW5nIGFzc2lnbm1lbnQgeW91IHZpc2l0ZWQuXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI21haW4tY29udGVudFwiKS5hcHBlbmQobCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRpbWVkUmVmcmVzaCgpIHtcclxuICAgIHZhciB0aW1lb3V0UGVyaW9kID0gOTAwMDAwOyAvLyA3NSBtaW51dGVzXHJcbiAgICAkKGRvY3VtZW50KS5iaW5kKFwiaWRsZS5pZGxlVGltZXJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIEFmdGVyIHRpbWVvdXQgcGVyaW9kIHNlbmQgdGhlIHVzZXIgYmFjayB0byB0aGUgaW5kZXguICBUaGlzIHdpbGwgZm9yY2UgYSBsb2dpblxyXG4gICAgICAgIC8vIGlmIG5lZWRlZCB3aGVuIHRoZXkgd2FudCB0byBnbyB0byBhIHBhcnRpY3VsYXIgcGFnZS4gIFRoaXMgbWF5IG5vdCBiZSBwZXJmZWN0XHJcbiAgICAgICAgLy8gYnV0IGl0cyBhbiBlYXN5IHdheSB0byBtYWtlIHN1cmUgbGFwdG9wIHVzZXJzIGFyZSBwcm9wZXJseSBsb2dnZWQgaW4gd2hlbiB0aGV5XHJcbiAgICAgICAgLy8gdGFrZSBxdWl6emVzIGFuZCBzYXZlIHN0dWZmLlxyXG4gICAgICAgIGlmIChsb2NhdGlvbi5ocmVmLmluZGV4T2YoXCJpbmRleC5odG1sXCIpIDwgMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIklkbGUgdGltZXIgLSBcIiArIGxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9XHJcbiAgICAgICAgICAgICAgICBlQm9va0NvbmZpZy5hcHAgK1xyXG4gICAgICAgICAgICAgICAgXCIvZGVmYXVsdC91c2VyL2xvZ2luP19uZXh0PVwiICtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lICtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnNlYXJjaDtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQuaWRsZVRpbWVyKHRpbWVvdXRQZXJpb2QpO1xyXG59XHJcblxyXG5jbGFzcyBQYWdlUHJvZ3Jlc3NCYXIge1xyXG4gICAgY29uc3RydWN0b3IoYWN0RGljdCkge1xyXG4gICAgICAgIHRoaXMucG9zc2libGUgPSAwO1xyXG4gICAgICAgIHRoaXMudG90YWwgPSAxO1xyXG4gICAgICAgIGlmIChhY3REaWN0ICYmIE9iamVjdC5rZXlzKGFjdERpY3QpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpdml0aWVzID0gYWN0RGljdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZpdGllcyA9IHsgcGFnZTogMCB9O1xyXG4gICAgICAgICAgICAkKFwiLnJ1bmVzdG9uZVwiKS5lYWNoKGZ1bmN0aW9uIChpZHgsIGUpIHtcclxuICAgICAgICAgICAgICAgIGFjdGl2aXRpZXNbZS5maXJzdEVsZW1lbnRDaGlsZC5pZF0gPSAwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpdml0aWVzID0gYWN0aXZpdGllcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVQcm9ncmVzcygpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLm1hdGNoKFxyXG4gICAgICAgICAgICAgICAgLy4qKGluZGV4Lmh0bWx8dG9jdHJlZS5odG1sfEV4ZXJjaXNlcy5odG1sfEdsb3NzYXJ5Lmh0bWx8c2VhcmNoLmh0bWwpJC9pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgJChcIiNzY3Byb2dyZXNzY29udGFpbmVyXCIpLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9ncmVzcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZVByb2dyZXNzKCkge1xyXG4gICAgICAgIGZvciAobGV0IGsgaW4gdGhpcy5hY3Rpdml0aWVzKSB7XHJcbiAgICAgICAgICAgIGlmIChrICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zc2libGUrKztcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2aXRpZXNba10gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclByb2dyZXNzKCkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IDA7XHJcbiAgICAgICAgJChcIiNzY3Byb2dyZXNzdG90YWxcIikudGV4dCh0aGlzLnRvdGFsKTtcclxuICAgICAgICAkKFwiI3NjcHJvZ3Jlc3Nwb3NzXCIpLnRleHQodGhpcy5wb3NzaWJsZSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFsdWUgPSAoMTAwICogdGhpcy50b3RhbCkgLyB0aGlzLnBvc3NpYmxlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI3N1YmNoYXB0ZXJwcm9ncmVzc1wiKS5wcm9ncmVzc2Jhcih7XHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIWVCb29rQ29uZmlnLmlzTG9nZ2VkSW4pIHtcclxuICAgICAgICAgICAgJChcIiNzdWJjaGFwdGVycHJvZ3Jlc3M+ZGl2XCIpLmFkZENsYXNzKFwibG9nZ2Vkb3V0XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQcm9ncmVzcyhkaXZfaWQpIHtcclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXNbZGl2X2lkXSsrO1xyXG4gICAgICAgIC8vIE9ubHkgdXBkYXRlIHRoZSBwcm9ncmVzcyBiYXIgb24gdGhlIGZpcnN0IGludGVyYWN0aW9uIHdpdGggYW4gb2JqZWN0LlxyXG4gICAgICAgIGlmICh0aGlzLmFjdGl2aXRpZXNbZGl2X2lkXSA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsKys7XHJcbiAgICAgICAgICAgIGxldCB2YWwgPSAoMTAwICogdGhpcy50b3RhbCkgLyB0aGlzLnBvc3NpYmxlO1xyXG4gICAgICAgICAgICAkKFwiI3NjcHJvZ3Jlc3N0b3RhbFwiKS50ZXh0KHRoaXMudG90YWwpO1xyXG4gICAgICAgICAgICAkKFwiI3NjcHJvZ3Jlc3Nwb3NzXCIpLnRleHQodGhpcy5wb3NzaWJsZSk7XHJcbiAgICAgICAgICAgICQoXCIjc3ViY2hhcHRlcnByb2dyZXNzXCIpLnByb2dyZXNzYmFyKFwib3B0aW9uXCIsIFwidmFsdWVcIiwgdmFsKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdmFsID09IDEwMC4wICYmXHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBsZXRpb25CdXR0b25cIikudGV4dCgpLnRvTG93ZXJDYXNlKCkgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgXCJtYXJrIGFzIGNvbXBsZXRlZFwiXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wbGV0aW9uQnV0dG9uXCIpLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgcGFnZVByb2dyZXNzVHJhY2tlciA9IHt9O1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlUGFnZVNldHVwKCkge1xyXG4gICAgdmFyIG1lc3M7XHJcbiAgICBpZiAoZUJvb2tDb25maWcudXNlUnVuZXN0b25lU2VydmljZXMpIHtcclxuICAgICAgICBqUXVlcnkuZ2V0KGVCb29rQ29uZmlnLmFqYXhVUkwgKyBcInNldF90el9vZmZzZXRcIiwge1xyXG4gICAgICAgICAgICB0aW1lem9uZW9mZnNldDogbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpIC8gNjAsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVCb29rQ29uZmlnLmlzTG9nZ2VkSW4pIHtcclxuICAgICAgICBtZXNzID0gYHVzZXJuYW1lOiAke2VCb29rQ29uZmlnLnVzZXJuYW1lfWA7XHJcbiAgICAgICAgaWYgKCFlQm9va0NvbmZpZy5pc0luc3RydWN0b3IpIHtcclxuICAgICAgICAgICAgJChcIiNpcF9kcm9wZG93bl9saW5rXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKFwicnVuZXN0b25lOmxvZ2luXCIpO1xyXG4gICAgICAgIGFkZFJlYWRpbmdMaXN0KCk7XHJcbiAgICAgICAgdGltZWRSZWZyZXNoKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3MgPSBcIk5vdCBsb2dnZWQgaW5cIjtcclxuICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKFwicnVuZXN0b25lOmxvZ291dFwiKTtcclxuICAgIH1cclxuICAgICQoXCIubG9nZ2VkaW51c2VyXCIpLmh0bWwobWVzcyk7XHJcblxyXG4gICAgcGFnZVByb2dyZXNzVHJhY2tlciA9IG5ldyBQYWdlUHJvZ3Jlc3NCYXIoZUJvb2tDb25maWcuYWN0aXZpdGllcyk7XHJcbiAgICBub3RpZnlSdW5lc3RvbmVDb21wb25lbnRzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwTmF2YmFyTG9nZ2VkSW4oKSB7XHJcbiAgICAkKFwiI3Byb2ZpbGVsaW5rXCIpLnNob3coKTtcclxuICAgICQoXCIjcGFzc3dvcmRsaW5rXCIpLnNob3coKTtcclxuICAgICQoXCIjcmVnaXN0ZXJsaW5rXCIpLmhpZGUoKTtcclxuICAgICQoXCJsaS5sb2dpbm91dFwiKS5odG1sKFxyXG4gICAgICAgICc8YSBocmVmPVwiJyArIGVCb29rQ29uZmlnLmFwcCArICcvZGVmYXVsdC91c2VyL2xvZ291dFwiPkxvZyBPdXQ8L2E+J1xyXG4gICAgKTtcclxufVxyXG4kKGRvY3VtZW50KS5iaW5kKFwicnVuZXN0b25lOmxvZ2luXCIsIHNldHVwTmF2YmFyTG9nZ2VkSW4pO1xyXG5cclxuZnVuY3Rpb24gc2V0dXBOYXZiYXJMb2dnZWRPdXQoKSB7XHJcbiAgICBpZiAoZUJvb2tDb25maWcudXNlUnVuZXN0b25lU2VydmljZXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNldHVwIG5hdmJhciBmb3IgbG9nZ2VkIG91dFwiKTtcclxuICAgICAgICAkKFwiI3JlZ2lzdGVybGlua1wiKS5zaG93KCk7XHJcbiAgICAgICAgJChcIiNwcm9maWxlbGlua1wiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIiNwYXNzd29yZGxpbmtcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIjaXBfZHJvcGRvd25fbGlua1wiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcImxpLmxvZ2lub3V0XCIpLmh0bWwoXHJcbiAgICAgICAgICAgICc8YSBocmVmPVwiJyArIGVCb29rQ29uZmlnLmFwcCArICcvZGVmYXVsdC91c2VyL2xvZ2luXCI+TG9naW48L2E+J1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgJChcIi5mb290ZXJcIikuaHRtbChcInVzZXIgbm90IGxvZ2dlZCBpblwiKTtcclxuICAgIH1cclxufVxyXG4kKGRvY3VtZW50KS5iaW5kKFwicnVuZXN0b25lOmxvZ291dFwiLCBzZXR1cE5hdmJhckxvZ2dlZE91dCk7XHJcblxyXG5mdW5jdGlvbiBub3RpZnlSdW5lc3RvbmVDb21wb25lbnRzKCkge1xyXG4gICAgLy8gUnVuZXN0b25lIGNvbXBvbmVudHMgd2FpdCB1bnRpbCBsb2dpbiBwcm9jZXNzIGlzIG92ZXIgdG8gbG9hZCBjb21wb25lbnRzIGJlY2F1c2Ugb2Ygc3RvcmFnZSBpc3N1ZXMuIFRoaXMgdHJpZ2dlcnMgdGhlIGBkeW5hbWljIGltcG9ydCBtYWNoaW5lcnlgLCB3aGljaCB0aGVuIHNlbmRzIHRoZSBsb2dpbiBjb21wbGV0ZSBzaWduYWwgd2hlbiB0aGlzIGFuZCBhbGwgZHluYW1pYyBpbXBvcnRzIGFyZSBmaW5pc2hlZC5cclxuICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoXCJydW5lc3RvbmU6cHJlLWxvZ2luLWNvbXBsZXRlXCIpO1xyXG59XHJcblxyXG4vLyBpbml0aWFsaXplIHN0dWZmXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGVCb29rQ29uZmlnKSB7XHJcbiAgICAgICAgaGFuZGxlUGFnZVNldHVwKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZUJvb2tDb25maWcgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICBcImVCb29rQ29uZmlnIGlzIG5vdCBkZWZpbmVkLiAgVGhpcyBwYWdlIG11c3Qgbm90IGJlIHNldCB1cCBmb3IgUnVuZXN0b25lXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gbWlzYyBzdHVmZlxyXG4vLyB0b2RvOiAgVGhpcyBjb3VsZCBiZSBmdXJ0aGVyIGRpc3RyaWJ1dGVkIGJ1dCBtYWtpbmcgYSB2aWRlby5qcyBmaWxlIGp1c3QgZm9yIG9uZSBmdW5jdGlvbiBzZWVtcyBkdW1iLlxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gYWRkIHRoZSB2aWRlbyBwbGF5IGJ1dHRvbiBvdmVybGF5IGltYWdlXHJcbiAgICAkKFwiLnZpZGVvLXBsYXktb3ZlcmxheVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmNzcyhcclxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWltYWdlXCIsXHJcbiAgICAgICAgICAgIFwidXJsKCd7e3BhdGh0bygnX3N0YXRpYy9wbGF5X292ZXJsYXlfaWNvbi5wbmcnLCAxKX19JylcIlxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIG5lZWRlZCB0byBhbGxvdyB0aGUgZHJvcGRvd24gc2VhcmNoIGJhciB0byB3b3JrO1xyXG4gICAgLy8gVGhlIGRlZmF1bHQgYmVoYXZpb3VyIGlzIHRoYXQgdGhlIGRyb3Bkb3duIG1lbnUgY2xvc2VzIHdoZW4gc29tZXRoaW5nIGluXHJcbiAgICAvLyBpdCAobGlrZSB0aGUgc2VhcmNoIGJhcikgaXMgY2xpY2tlZFxyXG4gICAgJChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gRml4IGlucHV0IGVsZW1lbnQgY2xpY2sgcHJvYmxlbVxyXG4gICAgICAgICQoXCIuZHJvcGRvd24gaW5wdXQsIC5kcm9wZG93biBsYWJlbFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCIvKiFcclxuICogalF1ZXJ5IGlkbGVUaW1lciBwbHVnaW5cclxuICogdmVyc2lvbiAwLjkuMTAwNTExXHJcbiAqIGJ5IFBhdWwgSXJpc2guXHJcbiAqICAgaHR0cDovL2dpdGh1Yi5jb20vcGF1bGlyaXNoL3l1aS1taXNjL3RyZWUvXHJcbiAqIE1JVCBsaWNlbnNlXHJcblxyXG4gKiBhZGFwdGVkIGZyb20gWVVJIGlkbGUgdGltZXIgYnkgbnpha2FzOlxyXG4gKiAgIGh0dHA6Ly9naXRodWIuY29tL256YWthcy95dWktbWlzYy9cclxuKi9cclxuLypcclxuICogQ29weXJpZ2h0IChjKSAyMDA5IE5pY2hvbGFzIEMuIFpha2FzXHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiAqIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG4vKiB1cGRhdGVkIHRvIGZpeCBDaHJvbWUgc2V0VGltZW91dCBpc3N1ZSBieSBaYWlkIFphd2FpZGVoICovXHJcblxyXG4gLy8gQVBJIGF2YWlsYWJsZSBpbiA8PSB2MC44XHJcbiAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuIC8vIGlkbGVUaW1lcigpIHRha2VzIGFuIG9wdGlvbmFsIGFyZ3VtZW50IHRoYXQgZGVmaW5lcyB0aGUgaWRsZSB0aW1lb3V0XHJcbiAvLyB0aW1lb3V0IGlzIGluIG1pbGxpc2Vjb25kczsgZGVmYXVsdHMgdG8gMzAwMDBcclxuICQuaWRsZVRpbWVyKDEwMDAwKTtcclxuXHJcblxyXG4gJChkb2N1bWVudCkuYmluZChcImlkbGUuaWRsZVRpbWVyXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyBmdW5jdGlvbiB5b3Ugd2FudCB0byBmaXJlIHdoZW4gdGhlIHVzZXIgZ29lcyBpZGxlXHJcbiB9KTtcclxuXHJcblxyXG4gJChkb2N1bWVudCkuYmluZChcImFjdGl2ZS5pZGxlVGltZXJcIiwgZnVuY3Rpb24oKXtcclxuICAvLyBmdW5jdGlvbiB5b3Ugd2FudCB0byBmaXJlIHdoZW4gdGhlIHVzZXIgYmVjb21lcyBhY3RpdmUgYWdhaW5cclxuIH0pO1xyXG5cclxuIC8vIHBhc3MgdGhlIHN0cmluZyAnZGVzdHJveScgdG8gc3RvcCB0aGUgdGltZXJcclxuICQuaWRsZVRpbWVyKCdkZXN0cm95Jyk7XHJcblxyXG4gLy8geW91IGNhbiBxdWVyeSBpZiB0aGUgdXNlciBpcyBpZGxlIG9yIG5vdCB3aXRoIGRhdGEoKVxyXG4gJC5kYXRhKGRvY3VtZW50LCdpZGxlVGltZXInKTsgIC8vICdpZGxlJyAgb3IgJ2FjdGl2ZSdcclxuXHJcbiAvLyB5b3UgY2FuIGdldCB0aW1lIGVsYXBzZWQgc2luY2UgdXNlciB3aGVuIGlkbGUvYWN0aXZlXHJcbiAkLmlkbGVUaW1lcignZ2V0RWxhcHNlZFRpbWUnKTsgLy8gdGltZSBzaW5jZSBzdGF0ZSBjaGFuZ2UgaW4gbXNcclxuXHJcbiAqKioqKioqKi9cclxuXHJcblxyXG5cclxuIC8vIEFQSSBhdmFpbGFibGUgaW4gPj0gdjAuOVxyXG4gLyoqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbiAvLyBiaW5kIHRvIHNwZWNpZmljIGVsZW1lbnRzLCBhbGxvd3MgZm9yIG11bHRpcGxlIHRpbWVyIGluc3RhbmNlc1xyXG4gJChlbGVtKS5pZGxlVGltZXIodGltZW91dHwnZGVzdHJveSd8J2dldEVsYXBzZWRUaW1lJyk7XHJcbiAkLmRhdGEoZWxlbSwnaWRsZVRpbWVyJyk7ICAvLyAnaWRsZScgIG9yICdhY3RpdmUnXHJcblxyXG4gLy8gaWYgeW91J3JlIHVzaW5nIHRoZSBvbGQgJC5pZGxlVGltZXIgYXBpLCB5b3Ugc2hvdWxkIG5vdCBkbyAkKGRvY3VtZW50KS5pZGxlVGltZXIoLi4uKVxyXG5cclxuIC8vIGVsZW1lbnQgYm91bmQgdGltZXJzIHdpbGwgb25seSB3YXRjaCBmb3IgZXZlbnRzIGluc2lkZSBvZiB0aGVtLlxyXG4gLy8geW91IG1heSBqdXN0IHdhbnQgcGFnZS1sZXZlbCBhY3Rpdml0eSwgaW4gd2hpY2ggY2FzZSB5b3UgbWF5IHNldCB1cFxyXG4gLy8gICB5b3VyIHRpbWVycyBvbiBkb2N1bWVudCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBhbmQgZG9jdW1lbnQuYm9keVxyXG5cclxuIC8vIFlvdSBjYW4gb3B0aW9uYWxseSBwcm92aWRlIGEgc2Vjb25kIGFyZ3VtZW50IHRvIG92ZXJyaWRlIGNlcnRhaW4gb3B0aW9ucy5cclxuIC8vIEhlcmUgYXJlIHRoZSBkZWZhdWx0cywgc28geW91IGNhbiBvbWl0IGFueSBvciBhbGwgb2YgdGhlbS5cclxuICQoZWxlbSkuaWRsZVRpbWVyKHRpbWVvdXQsIHtcclxuICAgc3RhcnRJbW1lZGlhdGVseTogdHJ1ZSwgLy9zdGFydHMgYSB0aW1lb3V0IGFzIHNvb24gYXMgdGhlIHRpbWVyIGlzIHNldCB1cDsgb3RoZXJ3aXNlIGl0IHdhaXRzIGZvciB0aGUgZmlyc3QgZXZlbnQuXHJcbiAgIGlkbGU6ICAgIGZhbHNlLCAgICAgICAgIC8vaW5kaWNhdGVzIGlmIHRoZSB1c2VyIGlzIGlkbGVcclxuICAgZW5hYmxlZDogdHJ1ZSwgICAgICAgICAgLy9pbmRpY2F0ZXMgaWYgdGhlIGlkbGUgdGltZXIgaXMgZW5hYmxlZFxyXG4gICBldmVudHM6ICAnbW91c2Vtb3ZlIGtleWRvd24gRE9NTW91c2VTY3JvbGwgbW91c2V3aGVlbCBtb3VzZWRvd24gdG91Y2hzdGFydCB0b3VjaG1vdmUnIC8vIGFjdGl2aXR5IGlzIG9uZSBvZiB0aGVzZSBldmVudHNcclxuIH0pO1xyXG5cclxuICoqKioqKioqL1xyXG5cclxuKGZ1bmN0aW9uKCQpe1xyXG5cclxuJC5pZGxlVGltZXIgPSBmdW5jdGlvbihuZXdUaW1lb3V0LCBlbGVtLCBvcHRzKXtcclxuXHJcbiAgICAvLyBkZWZhdWx0cyB0aGF0IGFyZSB0byBiZSBzdG9yZWQgYXMgaW5zdGFuY2UgcHJvcHMgb24gdGhlIGVsZW1cclxuXHJcblx0b3B0cyA9ICQuZXh0ZW5kKHtcclxuXHRcdHN0YXJ0SW1tZWRpYXRlbHk6IHRydWUsIC8vc3RhcnRzIGEgdGltZW91dCBhcyBzb29uIGFzIHRoZSB0aW1lciBpcyBzZXQgdXBcclxuXHRcdGlkbGU6ICAgIGZhbHNlLCAgICAgICAgIC8vaW5kaWNhdGVzIGlmIHRoZSB1c2VyIGlzIGlkbGVcclxuXHRcdGVuYWJsZWQ6IHRydWUsICAgICAgICAgIC8vaW5kaWNhdGVzIGlmIHRoZSBpZGxlIHRpbWVyIGlzIGVuYWJsZWRcclxuXHRcdHRpbWVvdXQ6IDMwMDAwLCAgICAgICAgIC8vdGhlIGFtb3VudCBvZiB0aW1lIChtcykgYmVmb3JlIHRoZSB1c2VyIGlzIGNvbnNpZGVyZWQgaWRsZVxyXG5cdFx0ZXZlbnRzOiAgJ21vdXNlbW92ZSBrZXlkb3duIERPTU1vdXNlU2Nyb2xsIG1vdXNld2hlZWwgbW91c2Vkb3duIHRvdWNoc3RhcnQgdG91Y2htb3ZlJyAvLyBhY3Rpdml0eSBpcyBvbmUgb2YgdGhlc2UgZXZlbnRzXHJcblx0fSwgb3B0cyk7XHJcblxyXG5cclxuICAgIGVsZW0gPSBlbGVtIHx8IGRvY3VtZW50O1xyXG5cclxuICAgIC8qIChpbnRlbnRpb25hbGx5IG5vdCBkb2N1bWVudGVkKVxyXG4gICAgICogVG9nZ2xlcyB0aGUgaWRsZSBzdGF0ZSBhbmQgZmlyZXMgYW4gYXBwcm9wcmlhdGUgZXZlbnQuXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICB2YXIgdG9nZ2xlSWRsZVN0YXRlID0gZnVuY3Rpb24obXllbGVtKXtcclxuXHJcbiAgICAgICAgLy8gY3Vyc2UgeW91LCBtb3ppbGxhIHNldFRpbWVvdXQgbGF0ZW5lc3MgYnVnIVxyXG4gICAgICAgIGlmICh0eXBlb2YgbXllbGVtID09PSAnbnVtYmVyJyl7XHJcbiAgICAgICAgICAgIG15ZWxlbSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBvYmogPSAkLmRhdGEobXllbGVtIHx8IGVsZW0sJ2lkbGVUaW1lck9iaicpO1xyXG5cclxuICAgICAgICAvL3RvZ2dsZSB0aGUgc3RhdGVcclxuICAgICAgICBvYmouaWRsZSA9ICFvYmouaWRsZTtcclxuXHJcbiAgICAgICAgLy8gcmVzZXQgdGltZW91dCBcclxuICAgICAgICB2YXIgZWxhcHNlZCA9ICgrbmV3IERhdGUoKSkgLSBvYmoub2xkZGF0ZTtcclxuICAgICAgICBvYmoub2xkZGF0ZSA9ICtuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAvLyBoYW5kbGUgQ2hyb21lIGFsd2F5cyB0cmlnZ2VyaW5nIGlkbGUgYWZ0ZXIganMgYWxlcnQgb3IgY29tZmlybSBwb3B1cFxyXG4gICAgICAgIGlmIChvYmouaWRsZSAmJiAoZWxhcHNlZCA8IG9wdHMudGltZW91dCkpIHtcclxuICAgICAgICAgICAgICAgIG9iai5pZGxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoJC5pZGxlVGltZXIudElkKTtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRzLmVuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICAgICQuaWRsZVRpbWVyLnRJZCA9IHNldFRpbWVvdXQodG9nZ2xlSWRsZVN0YXRlLCBvcHRzLnRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvL2ZpcmUgYXBwcm9wcmlhdGUgZXZlbnRcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIGEgY3VzdG9tIGV2ZW50LCBidXQgZmlyc3QsIHN0b3JlIHRoZSBuZXcgc3RhdGUgb24gdGhlIGVsZW1lbnRcclxuICAgICAgICAvLyBhbmQgdGhlbiBhcHBlbmQgdGhhdCBzdHJpbmcgdG8gYSBuYW1lc3BhY2VcclxuICAgICAgICB2YXIgZXZlbnQgPSBqUXVlcnkuRXZlbnQoICQuZGF0YShlbGVtLCdpZGxlVGltZXInLCBvYmouaWRsZSA/IFwiaWRsZVwiIDogXCJhY3RpdmVcIiApICArICcuaWRsZVRpbWVyJyAgICk7XHJcblxyXG4gICAgICAgIC8vIHdlIGRvIHdhbnQgdGhpcyB0byBidWJibGUsIGF0IGxlYXN0IGFzIGEgdGVtcG9yYXJ5IGZpeCBmb3IgalF1ZXJ5IDEuN1xyXG4gICAgICAgIC8vIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICQoZWxlbSkudHJpZ2dlcihldmVudCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcHMgdGhlIGlkbGUgdGltZXIuIFRoaXMgcmVtb3ZlcyBhcHByb3ByaWF0ZSBldmVudCBoYW5kbGVyc1xyXG4gICAgICogYW5kIGNhbmNlbHMgYW55IHBlbmRpbmcgdGltZW91dHMuXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICogQG1ldGhvZCBzdG9wXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKi9cclxuICAgIHN0b3AgPSBmdW5jdGlvbihlbGVtKXtcclxuXHJcbiAgICAgICAgdmFyIG9iaiA9ICQuZGF0YShlbGVtLCdpZGxlVGltZXJPYmonKSB8fCB7fTtcclxuXHJcbiAgICAgICAgLy9zZXQgdG8gZGlzYWJsZWRcclxuICAgICAgICBvYmouZW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvL2NsZWFyIGFueSBwZW5kaW5nIHRpbWVvdXRzXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KG9iai50SWQpO1xyXG5cclxuICAgICAgICAvL2RldGFjaCB0aGUgZXZlbnQgaGFuZGxlcnNcclxuICAgICAgICAkKGVsZW0pLm9mZignLmlkbGVUaW1lcicpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLyogKGludGVudGlvbmFsbHkgbm90IGRvY3VtZW50ZWQpXHJcbiAgICAgKiBIYW5kbGVzIGEgdXNlciBldmVudCBpbmRpY2F0aW5nIHRoYXQgdGhlIHVzZXIgaXNuJ3QgaWRsZS5cclxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IEEgRE9NMi1ub3JtYWxpemVkIGV2ZW50IG9iamVjdC5cclxuICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIGhhbmRsZVVzZXJFdmVudCA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciBvYmogPSAkLmRhdGEodGhpcywnaWRsZVRpbWVyT2JqJyk7XHJcblxyXG4gICAgICAgIC8vY2xlYXIgYW55IGV4aXN0aW5nIHRpbWVvdXRcclxuICAgICAgICBjbGVhclRpbWVvdXQob2JqLnRJZCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy9pZiB0aGUgaWRsZSB0aW1lciBpcyBlbmFibGVkXHJcbiAgICAgICAgaWYgKG9iai5lbmFibGVkKXtcclxuXHJcblxyXG4gICAgICAgICAgICAvL2lmIGl0J3MgaWRsZSwgdGhhdCBtZWFucyB0aGUgdXNlciBpcyBubyBsb25nZXIgaWRsZVxyXG4gICAgICAgICAgICBpZiAob2JqLmlkbGUpe1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlSWRsZVN0YXRlKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL3NldCBhIG5ldyB0aW1lb3V0XHJcbiAgICAgICAgICAgIG9iai50SWQgPSBzZXRUaW1lb3V0KHRvZ2dsZUlkbGVTdGF0ZSwgb2JqLnRpbWVvdXQpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgfTtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydHMgdGhlIGlkbGUgdGltZXIuIFRoaXMgYWRkcyBhcHByb3ByaWF0ZSBldmVudCBoYW5kbGVyc1xyXG4gICAgICogYW5kIHN0YXJ0cyB0aGUgZmlyc3QgdGltZW91dC5cclxuICAgICAqIEBwYXJhbSB7aW50fSBuZXdUaW1lb3V0IChPcHRpb25hbCkgQSBuZXcgdmFsdWUgZm9yIHRoZSB0aW1lb3V0IHBlcmlvZCBpbiBtcy5cclxuICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgKiBAbWV0aG9kICQuaWRsZVRpbWVyXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKi9cclxuXHJcblxyXG4gICAgdmFyIG9iaiA9ICQuZGF0YShlbGVtLCdpZGxlVGltZXJPYmonKSB8fCB7fTtcclxuXHJcbiAgICBvYmoub2xkZGF0ZSA9IG9iai5vbGRkYXRlIHx8ICtuZXcgRGF0ZSgpO1xyXG5cclxuICAgIC8vYXNzaWduIGEgbmV3IHRpbWVvdXQgaWYgbmVjZXNzYXJ5XHJcbiAgICBpZiAodHlwZW9mIG5ld1RpbWVvdXQgPT09IFwibnVtYmVyXCIpe1xyXG4gICAgICAgIG9wdHMudGltZW91dCA9IG5ld1RpbWVvdXQ7XHJcbiAgICB9IGVsc2UgaWYgKG5ld1RpbWVvdXQgPT09ICdkZXN0cm95Jykge1xyXG4gICAgICAgIHN0b3AoZWxlbSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9IGVsc2UgaWYgKG5ld1RpbWVvdXQgPT09ICdnZXRFbGFwc2VkVGltZScpe1xyXG4gICAgICAgIHJldHVybiAoK25ldyBEYXRlKCkpIC0gb2JqLm9sZGRhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy9hc3NpZ24gYXBwcm9wcmlhdGUgZXZlbnQgaGFuZGxlcnNcclxuICAgICQoZWxlbSkub24oJC50cmltKChvcHRzLmV2ZW50cysnICcpLnNwbGl0KCcgJykuam9pbignLmlkbGVUaW1lciAnKSksaGFuZGxlVXNlckV2ZW50KTtcclxuXHJcblxyXG4gICAgb2JqLmlkbGUgICAgPSBvcHRzLmlkbGU7XHJcbiAgICBvYmouZW5hYmxlZCA9IG9wdHMuZW5hYmxlZDtcclxuICAgIG9iai50aW1lb3V0ID0gb3B0cy50aW1lb3V0O1xyXG5cclxuXHJcbiAgICAvL3NldCBhIHRpbWVvdXQgdG8gdG9nZ2xlIHN0YXRlLiBNYXkgd2lzaCB0byBvbWl0IHRoaXMgaW4gc29tZSBzaXR1YXRpb25zXHJcblx0aWYgKG9wdHMuc3RhcnRJbW1lZGlhdGVseSkge1xyXG5cdCAgICBvYmoudElkID0gc2V0VGltZW91dCh0b2dnbGVJZGxlU3RhdGUsIG9iai50aW1lb3V0KTtcclxuXHR9XHJcblxyXG4gICAgLy8gYXNzdW1lIHRoZSB1c2VyIGlzIGFjdGl2ZSBmb3IgdGhlIGZpcnN0IHggc2Vjb25kcy5cclxuICAgICQuZGF0YShlbGVtLCdpZGxlVGltZXInLFwiYWN0aXZlXCIpO1xyXG5cclxuICAgIC8vIHN0b3JlIG91ciBpbnN0YW5jZSBvbiB0aGUgb2JqZWN0XHJcbiAgICAkLmRhdGEoZWxlbSwnaWRsZVRpbWVyT2JqJyxvYmopO1xyXG5cclxuXHJcblxyXG59OyAvLyBlbmQgb2YgJC5pZGxlVGltZXIoKVxyXG5cclxuXHJcbi8vIHYwLjkgQVBJIGZvciBkZWZpbmluZyBtdWx0aXBsZSB0aW1lcnMuXHJcbiQuZm4uaWRsZVRpbWVyID0gZnVuY3Rpb24obmV3VGltZW91dCxvcHRzKXtcclxuXHQvLyBBbGxvdyBvbWlzc2lvbiBvZiBvcHRzIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcblx0aWYgKCFvcHRzKSB7XHJcblx0XHRvcHRzID0ge307XHJcblx0fVxyXG5cclxuICAgIGlmKHRoaXNbMF0pe1xyXG4gICAgICAgICQuaWRsZVRpbWVyKG5ld1RpbWVvdXQsdGhpc1swXSxvcHRzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcblxyXG59KShqUXVlcnkpO1xyXG4iLCIvKiFcclxuICogQklESSBlbWJlZGRpbmcgc3VwcG9ydCBmb3IgalF1ZXJ5LmkxOG5cclxuICpcclxuICogQ29weXJpZ2h0IChDKSAyMDE1LCBEYXZpZCBDaGFuXHJcbiAqXHJcbiAqIFRoaXMgY29kZSBpcyBkdWFsIGxpY2Vuc2VkIEdQTHYyIG9yIGxhdGVyIGFuZCBNSVQuIFlvdSBkb24ndCBoYXZlIHRvIGRvXHJcbiAqIGFueXRoaW5nIHNwZWNpYWwgdG8gY2hvb3NlIG9uZSBsaWNlbnNlIG9yIHRoZSBvdGhlciBhbmQgeW91IGRvbid0IGhhdmUgdG9cclxuICogbm90aWZ5IGFueW9uZSB3aGljaCBsaWNlbnNlIHlvdSBhcmUgdXNpbmcuIFlvdSBhcmUgZnJlZSB0byB1c2UgdGhpcyBjb2RlXHJcbiAqIGluIGNvbW1lcmNpYWwgcHJvamVjdHMgYXMgbG9uZyBhcyB0aGUgY29weXJpZ2h0IGhlYWRlciBpcyBsZWZ0IGludGFjdC5cclxuICogU2VlIGZpbGVzIEdQTC1MSUNFTlNFIGFuZCBNSVQtTElDRU5TRSBmb3IgZGV0YWlscy5cclxuICpcclxuICogQGxpY2VuY2UgR05VIEdlbmVyYWwgUHVibGljIExpY2VuY2UgMi4wIG9yIGxhdGVyXHJcbiAqIEBsaWNlbmNlIE1JVCBMaWNlbnNlXHJcbiAqL1xyXG5cclxuKCBmdW5jdGlvbiAoICQgKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdHZhciBzdHJvbmdEaXJSZWdFeHA7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE1hdGNoZXMgdGhlIGZpcnN0IHN0cm9uZyBkaXJlY3Rpb25hbGl0eSBjb2RlcG9pbnQ6XHJcblx0ICogLSBpbiBncm91cCAxIGlmIGl0IGlzIExUUlxyXG5cdCAqIC0gaW4gZ3JvdXAgMiBpZiBpdCBpcyBSVExcclxuXHQgKiBEb2VzIG5vdCBtYXRjaCBpZiB0aGVyZSBpcyBubyBzdHJvbmcgZGlyZWN0aW9uYWxpdHkgY29kZXBvaW50LlxyXG5cdCAqXHJcblx0ICogR2VuZXJhdGVkIGJ5IFVuaWNvZGVKUyAoc2VlIHRvb2xzL3N0cm9uZ0RpcikgZnJvbSB0aGUgVUNEOyBzZWVcclxuXHQgKiBodHRwczovL3BoYWJyaWNhdG9yLndpa2ltZWRpYS5vcmcvZGlmZnVzaW9uL0dVSlMvIC5cclxuXHQgKi9cclxuXHRzdHJvbmdEaXJSZWdFeHAgPSBuZXcgUmVnRXhwKFxyXG5cdFx0Jyg/OicgK1xyXG5cdFx0XHQnKCcgK1xyXG5cdFx0XHRcdCdbXFx1MDA0MS1cXHUwMDVhXFx1MDA2MS1cXHUwMDdhXFx1MDBhYVxcdTAwYjVcXHUwMGJhXFx1MDBjMC1cXHUwMGQ2XFx1MDBkOC1cXHUwMGY2XFx1MDBmOC1cXHUwMmI4XFx1MDJiYi1cXHUwMmMxXFx1MDJkMFxcdTAyZDFcXHUwMmUwLVxcdTAyZTRcXHUwMmVlXFx1MDM3MC1cXHUwMzczXFx1MDM3NlxcdTAzNzdcXHUwMzdhLVxcdTAzN2RcXHUwMzdmXFx1MDM4NlxcdTAzODgtXFx1MDM4YVxcdTAzOGNcXHUwMzhlLVxcdTAzYTFcXHUwM2EzLVxcdTAzZjVcXHUwM2Y3LVxcdTA0ODJcXHUwNDhhLVxcdTA1MmZcXHUwNTMxLVxcdTA1NTZcXHUwNTU5LVxcdTA1NWZcXHUwNTYxLVxcdTA1ODdcXHUwNTg5XFx1MDkwMy1cXHUwOTM5XFx1MDkzYlxcdTA5M2QtXFx1MDk0MFxcdTA5NDktXFx1MDk0Y1xcdTA5NGUtXFx1MDk1MFxcdTA5NTgtXFx1MDk2MVxcdTA5NjQtXFx1MDk4MFxcdTA5ODJcXHUwOTgzXFx1MDk4NS1cXHUwOThjXFx1MDk4ZlxcdTA5OTBcXHUwOTkzLVxcdTA5YThcXHUwOWFhLVxcdTA5YjBcXHUwOWIyXFx1MDliNi1cXHUwOWI5XFx1MDliZC1cXHUwOWMwXFx1MDljN1xcdTA5YzhcXHUwOWNiXFx1MDljY1xcdTA5Y2VcXHUwOWQ3XFx1MDlkY1xcdTA5ZGRcXHUwOWRmLVxcdTA5ZTFcXHUwOWU2LVxcdTA5ZjFcXHUwOWY0LVxcdTA5ZmFcXHUwYTAzXFx1MGEwNS1cXHUwYTBhXFx1MGEwZlxcdTBhMTBcXHUwYTEzLVxcdTBhMjhcXHUwYTJhLVxcdTBhMzBcXHUwYTMyXFx1MGEzM1xcdTBhMzVcXHUwYTM2XFx1MGEzOFxcdTBhMzlcXHUwYTNlLVxcdTBhNDBcXHUwYTU5LVxcdTBhNWNcXHUwYTVlXFx1MGE2Ni1cXHUwYTZmXFx1MGE3Mi1cXHUwYTc0XFx1MGE4M1xcdTBhODUtXFx1MGE4ZFxcdTBhOGYtXFx1MGE5MVxcdTBhOTMtXFx1MGFhOFxcdTBhYWEtXFx1MGFiMFxcdTBhYjJcXHUwYWIzXFx1MGFiNS1cXHUwYWI5XFx1MGFiZC1cXHUwYWMwXFx1MGFjOVxcdTBhY2JcXHUwYWNjXFx1MGFkMFxcdTBhZTBcXHUwYWUxXFx1MGFlNi1cXHUwYWYwXFx1MGFmOVxcdTBiMDJcXHUwYjAzXFx1MGIwNS1cXHUwYjBjXFx1MGIwZlxcdTBiMTBcXHUwYjEzLVxcdTBiMjhcXHUwYjJhLVxcdTBiMzBcXHUwYjMyXFx1MGIzM1xcdTBiMzUtXFx1MGIzOVxcdTBiM2RcXHUwYjNlXFx1MGI0MFxcdTBiNDdcXHUwYjQ4XFx1MGI0YlxcdTBiNGNcXHUwYjU3XFx1MGI1Y1xcdTBiNWRcXHUwYjVmLVxcdTBiNjFcXHUwYjY2LVxcdTBiNzdcXHUwYjgzXFx1MGI4NS1cXHUwYjhhXFx1MGI4ZS1cXHUwYjkwXFx1MGI5Mi1cXHUwYjk1XFx1MGI5OVxcdTBiOWFcXHUwYjljXFx1MGI5ZVxcdTBiOWZcXHUwYmEzXFx1MGJhNFxcdTBiYTgtXFx1MGJhYVxcdTBiYWUtXFx1MGJiOVxcdTBiYmVcXHUwYmJmXFx1MGJjMVxcdTBiYzJcXHUwYmM2LVxcdTBiYzhcXHUwYmNhLVxcdTBiY2NcXHUwYmQwXFx1MGJkN1xcdTBiZTYtXFx1MGJmMlxcdTBjMDEtXFx1MGMwM1xcdTBjMDUtXFx1MGMwY1xcdTBjMGUtXFx1MGMxMFxcdTBjMTItXFx1MGMyOFxcdTBjMmEtXFx1MGMzOVxcdTBjM2RcXHUwYzQxLVxcdTBjNDRcXHUwYzU4LVxcdTBjNWFcXHUwYzYwXFx1MGM2MVxcdTBjNjYtXFx1MGM2ZlxcdTBjN2ZcXHUwYzgyXFx1MGM4M1xcdTBjODUtXFx1MGM4Y1xcdTBjOGUtXFx1MGM5MFxcdTBjOTItXFx1MGNhOFxcdTBjYWEtXFx1MGNiM1xcdTBjYjUtXFx1MGNiOVxcdTBjYmQtXFx1MGNjNFxcdTBjYzYtXFx1MGNjOFxcdTBjY2FcXHUwY2NiXFx1MGNkNVxcdTBjZDZcXHUwY2RlXFx1MGNlMFxcdTBjZTFcXHUwY2U2LVxcdTBjZWZcXHUwY2YxXFx1MGNmMlxcdTBkMDJcXHUwZDAzXFx1MGQwNS1cXHUwZDBjXFx1MGQwZS1cXHUwZDEwXFx1MGQxMi1cXHUwZDNhXFx1MGQzZC1cXHUwZDQwXFx1MGQ0Ni1cXHUwZDQ4XFx1MGQ0YS1cXHUwZDRjXFx1MGQ0ZVxcdTBkNTdcXHUwZDVmLVxcdTBkNjFcXHUwZDY2LVxcdTBkNzVcXHUwZDc5LVxcdTBkN2ZcXHUwZDgyXFx1MGQ4M1xcdTBkODUtXFx1MGQ5NlxcdTBkOWEtXFx1MGRiMVxcdTBkYjMtXFx1MGRiYlxcdTBkYmRcXHUwZGMwLVxcdTBkYzZcXHUwZGNmLVxcdTBkZDFcXHUwZGQ4LVxcdTBkZGZcXHUwZGU2LVxcdTBkZWZcXHUwZGYyLVxcdTBkZjRcXHUwZTAxLVxcdTBlMzBcXHUwZTMyXFx1MGUzM1xcdTBlNDAtXFx1MGU0NlxcdTBlNGYtXFx1MGU1YlxcdTBlODFcXHUwZTgyXFx1MGU4NFxcdTBlODdcXHUwZTg4XFx1MGU4YVxcdTBlOGRcXHUwZTk0LVxcdTBlOTdcXHUwZTk5LVxcdTBlOWZcXHUwZWExLVxcdTBlYTNcXHUwZWE1XFx1MGVhN1xcdTBlYWFcXHUwZWFiXFx1MGVhZC1cXHUwZWIwXFx1MGViMlxcdTBlYjNcXHUwZWJkXFx1MGVjMC1cXHUwZWM0XFx1MGVjNlxcdTBlZDAtXFx1MGVkOVxcdTBlZGMtXFx1MGVkZlxcdTBmMDAtXFx1MGYxN1xcdTBmMWEtXFx1MGYzNFxcdTBmMzZcXHUwZjM4XFx1MGYzZS1cXHUwZjQ3XFx1MGY0OS1cXHUwZjZjXFx1MGY3ZlxcdTBmODVcXHUwZjg4LVxcdTBmOGNcXHUwZmJlLVxcdTBmYzVcXHUwZmM3LVxcdTBmY2NcXHUwZmNlLVxcdTBmZGFcXHUxMDAwLVxcdTEwMmNcXHUxMDMxXFx1MTAzOFxcdTEwM2JcXHUxMDNjXFx1MTAzZi1cXHUxMDU3XFx1MTA1YS1cXHUxMDVkXFx1MTA2MS1cXHUxMDcwXFx1MTA3NS1cXHUxMDgxXFx1MTA4M1xcdTEwODRcXHUxMDg3LVxcdTEwOGNcXHUxMDhlLVxcdTEwOWNcXHUxMDllLVxcdTEwYzVcXHUxMGM3XFx1MTBjZFxcdTEwZDAtXFx1MTI0OFxcdTEyNGEtXFx1MTI0ZFxcdTEyNTAtXFx1MTI1NlxcdTEyNThcXHUxMjVhLVxcdTEyNWRcXHUxMjYwLVxcdTEyODhcXHUxMjhhLVxcdTEyOGRcXHUxMjkwLVxcdTEyYjBcXHUxMmIyLVxcdTEyYjVcXHUxMmI4LVxcdTEyYmVcXHUxMmMwXFx1MTJjMi1cXHUxMmM1XFx1MTJjOC1cXHUxMmQ2XFx1MTJkOC1cXHUxMzEwXFx1MTMxMi1cXHUxMzE1XFx1MTMxOC1cXHUxMzVhXFx1MTM2MC1cXHUxMzdjXFx1MTM4MC1cXHUxMzhmXFx1MTNhMC1cXHUxM2Y1XFx1MTNmOC1cXHUxM2ZkXFx1MTQwMS1cXHUxNjdmXFx1MTY4MS1cXHUxNjlhXFx1MTZhMC1cXHUxNmY4XFx1MTcwMC1cXHUxNzBjXFx1MTcwZS1cXHUxNzExXFx1MTcyMC1cXHUxNzMxXFx1MTczNVxcdTE3MzZcXHUxNzQwLVxcdTE3NTFcXHUxNzYwLVxcdTE3NmNcXHUxNzZlLVxcdTE3NzBcXHUxNzgwLVxcdTE3YjNcXHUxN2I2XFx1MTdiZS1cXHUxN2M1XFx1MTdjN1xcdTE3YzhcXHUxN2Q0LVxcdTE3ZGFcXHUxN2RjXFx1MTdlMC1cXHUxN2U5XFx1MTgxMC1cXHUxODE5XFx1MTgyMC1cXHUxODc3XFx1MTg4MC1cXHUxOGE4XFx1MThhYVxcdTE4YjAtXFx1MThmNVxcdTE5MDAtXFx1MTkxZVxcdTE5MjMtXFx1MTkyNlxcdTE5MjktXFx1MTkyYlxcdTE5MzBcXHUxOTMxXFx1MTkzMy1cXHUxOTM4XFx1MTk0Ni1cXHUxOTZkXFx1MTk3MC1cXHUxOTc0XFx1MTk4MC1cXHUxOWFiXFx1MTliMC1cXHUxOWM5XFx1MTlkMC1cXHUxOWRhXFx1MWEwMC1cXHUxYTE2XFx1MWExOVxcdTFhMWFcXHUxYTFlLVxcdTFhNTVcXHUxYTU3XFx1MWE2MVxcdTFhNjNcXHUxYTY0XFx1MWE2ZC1cXHUxYTcyXFx1MWE4MC1cXHUxYTg5XFx1MWE5MC1cXHUxYTk5XFx1MWFhMC1cXHUxYWFkXFx1MWIwNC1cXHUxYjMzXFx1MWIzNVxcdTFiM2JcXHUxYjNkLVxcdTFiNDFcXHUxYjQzLVxcdTFiNGJcXHUxYjUwLVxcdTFiNmFcXHUxYjc0LVxcdTFiN2NcXHUxYjgyLVxcdTFiYTFcXHUxYmE2XFx1MWJhN1xcdTFiYWFcXHUxYmFlLVxcdTFiZTVcXHUxYmU3XFx1MWJlYS1cXHUxYmVjXFx1MWJlZVxcdTFiZjJcXHUxYmYzXFx1MWJmYy1cXHUxYzJiXFx1MWMzNFxcdTFjMzVcXHUxYzNiLVxcdTFjNDlcXHUxYzRkLVxcdTFjN2ZcXHUxY2MwLVxcdTFjYzdcXHUxY2QzXFx1MWNlMVxcdTFjZTktXFx1MWNlY1xcdTFjZWUtXFx1MWNmM1xcdTFjZjVcXHUxY2Y2XFx1MWQwMC1cXHUxZGJmXFx1MWUwMC1cXHUxZjE1XFx1MWYxOC1cXHUxZjFkXFx1MWYyMC1cXHUxZjQ1XFx1MWY0OC1cXHUxZjRkXFx1MWY1MC1cXHUxZjU3XFx1MWY1OVxcdTFmNWJcXHUxZjVkXFx1MWY1Zi1cXHUxZjdkXFx1MWY4MC1cXHUxZmI0XFx1MWZiNi1cXHUxZmJjXFx1MWZiZVxcdTFmYzItXFx1MWZjNFxcdTFmYzYtXFx1MWZjY1xcdTFmZDAtXFx1MWZkM1xcdTFmZDYtXFx1MWZkYlxcdTFmZTAtXFx1MWZlY1xcdTFmZjItXFx1MWZmNFxcdTFmZjYtXFx1MWZmY1xcdTIwMGVcXHUyMDcxXFx1MjA3ZlxcdTIwOTAtXFx1MjA5Y1xcdTIxMDJcXHUyMTA3XFx1MjEwYS1cXHUyMTEzXFx1MjExNVxcdTIxMTktXFx1MjExZFxcdTIxMjRcXHUyMTI2XFx1MjEyOFxcdTIxMmEtXFx1MjEyZFxcdTIxMmYtXFx1MjEzOVxcdTIxM2MtXFx1MjEzZlxcdTIxNDUtXFx1MjE0OVxcdTIxNGVcXHUyMTRmXFx1MjE2MC1cXHUyMTg4XFx1MjMzNi1cXHUyMzdhXFx1MjM5NVxcdTI0OWMtXFx1MjRlOVxcdTI2YWNcXHUyODAwLVxcdTI4ZmZcXHUyYzAwLVxcdTJjMmVcXHUyYzMwLVxcdTJjNWVcXHUyYzYwLVxcdTJjZTRcXHUyY2ViLVxcdTJjZWVcXHUyY2YyXFx1MmNmM1xcdTJkMDAtXFx1MmQyNVxcdTJkMjdcXHUyZDJkXFx1MmQzMC1cXHUyZDY3XFx1MmQ2ZlxcdTJkNzBcXHUyZDgwLVxcdTJkOTZcXHUyZGEwLVxcdTJkYTZcXHUyZGE4LVxcdTJkYWVcXHUyZGIwLVxcdTJkYjZcXHUyZGI4LVxcdTJkYmVcXHUyZGMwLVxcdTJkYzZcXHUyZGM4LVxcdTJkY2VcXHUyZGQwLVxcdTJkZDZcXHUyZGQ4LVxcdTJkZGVcXHUzMDA1LVxcdTMwMDdcXHUzMDIxLVxcdTMwMjlcXHUzMDJlXFx1MzAyZlxcdTMwMzEtXFx1MzAzNVxcdTMwMzgtXFx1MzAzY1xcdTMwNDEtXFx1MzA5NlxcdTMwOWQtXFx1MzA5ZlxcdTMwYTEtXFx1MzBmYVxcdTMwZmMtXFx1MzBmZlxcdTMxMDUtXFx1MzEyZFxcdTMxMzEtXFx1MzE4ZVxcdTMxOTAtXFx1MzFiYVxcdTMxZjAtXFx1MzIxY1xcdTMyMjAtXFx1MzI0ZlxcdTMyNjAtXFx1MzI3YlxcdTMyN2YtXFx1MzJiMFxcdTMyYzAtXFx1MzJjYlxcdTMyZDAtXFx1MzJmZVxcdTMzMDAtXFx1MzM3NlxcdTMzN2ItXFx1MzNkZFxcdTMzZTAtXFx1MzNmZVxcdTM0MDAtXFx1NGRiNVxcdTRlMDAtXFx1OWZkNVxcdWEwMDAtXFx1YTQ4Y1xcdWE0ZDAtXFx1YTYwY1xcdWE2MTAtXFx1YTYyYlxcdWE2NDAtXFx1YTY2ZVxcdWE2ODAtXFx1YTY5ZFxcdWE2YTAtXFx1YTZlZlxcdWE2ZjItXFx1YTZmN1xcdWE3MjItXFx1YTc4N1xcdWE3ODktXFx1YTdhZFxcdWE3YjAtXFx1YTdiN1xcdWE3ZjctXFx1YTgwMVxcdWE4MDMtXFx1YTgwNVxcdWE4MDctXFx1YTgwYVxcdWE4MGMtXFx1YTgyNFxcdWE4MjdcXHVhODMwLVxcdWE4MzdcXHVhODQwLVxcdWE4NzNcXHVhODgwLVxcdWE4YzNcXHVhOGNlLVxcdWE4ZDlcXHVhOGYyLVxcdWE4ZmRcXHVhOTAwLVxcdWE5MjVcXHVhOTJlLVxcdWE5NDZcXHVhOTUyXFx1YTk1M1xcdWE5NWYtXFx1YTk3Y1xcdWE5ODMtXFx1YTliMlxcdWE5YjRcXHVhOWI1XFx1YTliYVxcdWE5YmJcXHVhOWJkLVxcdWE5Y2RcXHVhOWNmLVxcdWE5ZDlcXHVhOWRlLVxcdWE5ZTRcXHVhOWU2LVxcdWE5ZmVcXHVhYTAwLVxcdWFhMjhcXHVhYTJmXFx1YWEzMFxcdWFhMzNcXHVhYTM0XFx1YWE0MC1cXHVhYTQyXFx1YWE0NC1cXHVhYTRiXFx1YWE0ZFxcdWFhNTAtXFx1YWE1OVxcdWFhNWMtXFx1YWE3YlxcdWFhN2QtXFx1YWFhZlxcdWFhYjFcXHVhYWI1XFx1YWFiNlxcdWFhYjktXFx1YWFiZFxcdWFhYzBcXHVhYWMyXFx1YWFkYi1cXHVhYWViXFx1YWFlZS1cXHVhYWY1XFx1YWIwMS1cXHVhYjA2XFx1YWIwOS1cXHVhYjBlXFx1YWIxMS1cXHVhYjE2XFx1YWIyMC1cXHVhYjI2XFx1YWIyOC1cXHVhYjJlXFx1YWIzMC1cXHVhYjY1XFx1YWI3MC1cXHVhYmU0XFx1YWJlNlxcdWFiZTdcXHVhYmU5LVxcdWFiZWNcXHVhYmYwLVxcdWFiZjlcXHVhYzAwLVxcdWQ3YTNcXHVkN2IwLVxcdWQ3YzZcXHVkN2NiLVxcdWQ3ZmJcXHVlMDAwLVxcdWZhNmRcXHVmYTcwLVxcdWZhZDlcXHVmYjAwLVxcdWZiMDZcXHVmYjEzLVxcdWZiMTdcXHVmZjIxLVxcdWZmM2FcXHVmZjQxLVxcdWZmNWFcXHVmZjY2LVxcdWZmYmVcXHVmZmMyLVxcdWZmYzdcXHVmZmNhLVxcdWZmY2ZcXHVmZmQyLVxcdWZmZDdcXHVmZmRhLVxcdWZmZGNdfFxcdWQ4MDBbXFx1ZGMwMC1cXHVkYzBiXXxcXHVkODAwW1xcdWRjMGQtXFx1ZGMyNl18XFx1ZDgwMFtcXHVkYzI4LVxcdWRjM2FdfFxcdWQ4MDBcXHVkYzNjfFxcdWQ4MDBcXHVkYzNkfFxcdWQ4MDBbXFx1ZGMzZi1cXHVkYzRkXXxcXHVkODAwW1xcdWRjNTAtXFx1ZGM1ZF18XFx1ZDgwMFtcXHVkYzgwLVxcdWRjZmFdfFxcdWQ4MDBcXHVkZDAwfFxcdWQ4MDBcXHVkZDAyfFxcdWQ4MDBbXFx1ZGQwNy1cXHVkZDMzXXxcXHVkODAwW1xcdWRkMzctXFx1ZGQzZl18XFx1ZDgwMFtcXHVkZGQwLVxcdWRkZmNdfFxcdWQ4MDBbXFx1ZGU4MC1cXHVkZTljXXxcXHVkODAwW1xcdWRlYTAtXFx1ZGVkMF18XFx1ZDgwMFtcXHVkZjAwLVxcdWRmMjNdfFxcdWQ4MDBbXFx1ZGYzMC1cXHVkZjRhXXxcXHVkODAwW1xcdWRmNTAtXFx1ZGY3NV18XFx1ZDgwMFtcXHVkZjgwLVxcdWRmOWRdfFxcdWQ4MDBbXFx1ZGY5Zi1cXHVkZmMzXXxcXHVkODAwW1xcdWRmYzgtXFx1ZGZkNV18XFx1ZDgwMVtcXHVkYzAwLVxcdWRjOWRdfFxcdWQ4MDFbXFx1ZGNhMC1cXHVkY2E5XXxcXHVkODAxW1xcdWRkMDAtXFx1ZGQyN118XFx1ZDgwMVtcXHVkZDMwLVxcdWRkNjNdfFxcdWQ4MDFcXHVkZDZmfFxcdWQ4MDFbXFx1ZGUwMC1cXHVkZjM2XXxcXHVkODAxW1xcdWRmNDAtXFx1ZGY1NV18XFx1ZDgwMVtcXHVkZjYwLVxcdWRmNjddfFxcdWQ4MDRcXHVkYzAwfFxcdWQ4MDRbXFx1ZGMwMi1cXHVkYzM3XXxcXHVkODA0W1xcdWRjNDctXFx1ZGM0ZF18XFx1ZDgwNFtcXHVkYzY2LVxcdWRjNmZdfFxcdWQ4MDRbXFx1ZGM4Mi1cXHVkY2IyXXxcXHVkODA0XFx1ZGNiN3xcXHVkODA0XFx1ZGNiOHxcXHVkODA0W1xcdWRjYmItXFx1ZGNjMV18XFx1ZDgwNFtcXHVkY2QwLVxcdWRjZThdfFxcdWQ4MDRbXFx1ZGNmMC1cXHVkY2Y5XXxcXHVkODA0W1xcdWRkMDMtXFx1ZGQyNl18XFx1ZDgwNFxcdWRkMmN8XFx1ZDgwNFtcXHVkZDM2LVxcdWRkNDNdfFxcdWQ4MDRbXFx1ZGQ1MC1cXHVkZDcyXXxcXHVkODA0W1xcdWRkNzQtXFx1ZGQ3Nl18XFx1ZDgwNFtcXHVkZDgyLVxcdWRkYjVdfFxcdWQ4MDRbXFx1ZGRiZi1cXHVkZGM5XXxcXHVkODA0XFx1ZGRjZHxcXHVkODA0W1xcdWRkZDAtXFx1ZGRkZl18XFx1ZDgwNFtcXHVkZGUxLVxcdWRkZjRdfFxcdWQ4MDRbXFx1ZGUwMC1cXHVkZTExXXxcXHVkODA0W1xcdWRlMTMtXFx1ZGUyZV18XFx1ZDgwNFxcdWRlMzJ8XFx1ZDgwNFxcdWRlMzN8XFx1ZDgwNFxcdWRlMzV8XFx1ZDgwNFtcXHVkZTM4LVxcdWRlM2RdfFxcdWQ4MDRbXFx1ZGU4MC1cXHVkZTg2XXxcXHVkODA0XFx1ZGU4OHxcXHVkODA0W1xcdWRlOGEtXFx1ZGU4ZF18XFx1ZDgwNFtcXHVkZThmLVxcdWRlOWRdfFxcdWQ4MDRbXFx1ZGU5Zi1cXHVkZWE5XXxcXHVkODA0W1xcdWRlYjAtXFx1ZGVkZV18XFx1ZDgwNFtcXHVkZWUwLVxcdWRlZTJdfFxcdWQ4MDRbXFx1ZGVmMC1cXHVkZWY5XXxcXHVkODA0XFx1ZGYwMnxcXHVkODA0XFx1ZGYwM3xcXHVkODA0W1xcdWRmMDUtXFx1ZGYwY118XFx1ZDgwNFxcdWRmMGZ8XFx1ZDgwNFxcdWRmMTB8XFx1ZDgwNFtcXHVkZjEzLVxcdWRmMjhdfFxcdWQ4MDRbXFx1ZGYyYS1cXHVkZjMwXXxcXHVkODA0XFx1ZGYzMnxcXHVkODA0XFx1ZGYzM3xcXHVkODA0W1xcdWRmMzUtXFx1ZGYzOV18XFx1ZDgwNFtcXHVkZjNkLVxcdWRmM2ZdfFxcdWQ4MDRbXFx1ZGY0MS1cXHVkZjQ0XXxcXHVkODA0XFx1ZGY0N3xcXHVkODA0XFx1ZGY0OHxcXHVkODA0W1xcdWRmNGItXFx1ZGY0ZF18XFx1ZDgwNFxcdWRmNTB8XFx1ZDgwNFxcdWRmNTd8XFx1ZDgwNFtcXHVkZjVkLVxcdWRmNjNdfFxcdWQ4MDVbXFx1ZGM4MC1cXHVkY2IyXXxcXHVkODA1XFx1ZGNiOXxcXHVkODA1W1xcdWRjYmItXFx1ZGNiZV18XFx1ZDgwNVxcdWRjYzF8XFx1ZDgwNVtcXHVkY2M0LVxcdWRjYzddfFxcdWQ4MDVbXFx1ZGNkMC1cXHVkY2Q5XXxcXHVkODA1W1xcdWRkODAtXFx1ZGRiMV18XFx1ZDgwNVtcXHVkZGI4LVxcdWRkYmJdfFxcdWQ4MDVcXHVkZGJlfFxcdWQ4MDVbXFx1ZGRjMS1cXHVkZGRiXXxcXHVkODA1W1xcdWRlMDAtXFx1ZGUzMl18XFx1ZDgwNVxcdWRlM2J8XFx1ZDgwNVxcdWRlM2N8XFx1ZDgwNVxcdWRlM2V8XFx1ZDgwNVtcXHVkZTQxLVxcdWRlNDRdfFxcdWQ4MDVbXFx1ZGU1MC1cXHVkZTU5XXxcXHVkODA1W1xcdWRlODAtXFx1ZGVhYV18XFx1ZDgwNVxcdWRlYWN8XFx1ZDgwNVxcdWRlYWV8XFx1ZDgwNVxcdWRlYWZ8XFx1ZDgwNVxcdWRlYjZ8XFx1ZDgwNVtcXHVkZWMwLVxcdWRlYzldfFxcdWQ4MDVbXFx1ZGYwMC1cXHVkZjE5XXxcXHVkODA1XFx1ZGYyMHxcXHVkODA1XFx1ZGYyMXxcXHVkODA1XFx1ZGYyNnxcXHVkODA1W1xcdWRmMzAtXFx1ZGYzZl18XFx1ZDgwNltcXHVkY2EwLVxcdWRjZjJdfFxcdWQ4MDZcXHVkY2ZmfFxcdWQ4MDZbXFx1ZGVjMC1cXHVkZWY4XXxcXHVkODA4W1xcdWRjMDAtXFx1ZGY5OV18XFx1ZDgwOVtcXHVkYzAwLVxcdWRjNmVdfFxcdWQ4MDlbXFx1ZGM3MC1cXHVkYzc0XXxcXHVkODA5W1xcdWRjODAtXFx1ZGQ0M118XFx1ZDgwY1tcXHVkYzAwLVxcdWRmZmZdfFxcdWQ4MGRbXFx1ZGMwMC1cXHVkYzJlXXxcXHVkODExW1xcdWRjMDAtXFx1ZGU0Nl18XFx1ZDgxYVtcXHVkYzAwLVxcdWRlMzhdfFxcdWQ4MWFbXFx1ZGU0MC1cXHVkZTVlXXxcXHVkODFhW1xcdWRlNjAtXFx1ZGU2OV18XFx1ZDgxYVxcdWRlNmV8XFx1ZDgxYVxcdWRlNmZ8XFx1ZDgxYVtcXHVkZWQwLVxcdWRlZWRdfFxcdWQ4MWFcXHVkZWY1fFxcdWQ4MWFbXFx1ZGYwMC1cXHVkZjJmXXxcXHVkODFhW1xcdWRmMzctXFx1ZGY0NV18XFx1ZDgxYVtcXHVkZjUwLVxcdWRmNTldfFxcdWQ4MWFbXFx1ZGY1Yi1cXHVkZjYxXXxcXHVkODFhW1xcdWRmNjMtXFx1ZGY3N118XFx1ZDgxYVtcXHVkZjdkLVxcdWRmOGZdfFxcdWQ4MWJbXFx1ZGYwMC1cXHVkZjQ0XXxcXHVkODFiW1xcdWRmNTAtXFx1ZGY3ZV18XFx1ZDgxYltcXHVkZjkzLVxcdWRmOWZdfFxcdWQ4MmNcXHVkYzAwfFxcdWQ4MmNcXHVkYzAxfFxcdWQ4MmZbXFx1ZGMwMC1cXHVkYzZhXXxcXHVkODJmW1xcdWRjNzAtXFx1ZGM3Y118XFx1ZDgyZltcXHVkYzgwLVxcdWRjODhdfFxcdWQ4MmZbXFx1ZGM5MC1cXHVkYzk5XXxcXHVkODJmXFx1ZGM5Y3xcXHVkODJmXFx1ZGM5ZnxcXHVkODM0W1xcdWRjMDAtXFx1ZGNmNV18XFx1ZDgzNFtcXHVkZDAwLVxcdWRkMjZdfFxcdWQ4MzRbXFx1ZGQyOS1cXHVkZDY2XXxcXHVkODM0W1xcdWRkNmEtXFx1ZGQ3Ml18XFx1ZDgzNFxcdWRkODN8XFx1ZDgzNFxcdWRkODR8XFx1ZDgzNFtcXHVkZDhjLVxcdWRkYTldfFxcdWQ4MzRbXFx1ZGRhZS1cXHVkZGU4XXxcXHVkODM0W1xcdWRmNjAtXFx1ZGY3MV18XFx1ZDgzNVtcXHVkYzAwLVxcdWRjNTRdfFxcdWQ4MzVbXFx1ZGM1Ni1cXHVkYzljXXxcXHVkODM1XFx1ZGM5ZXxcXHVkODM1XFx1ZGM5ZnxcXHVkODM1XFx1ZGNhMnxcXHVkODM1XFx1ZGNhNXxcXHVkODM1XFx1ZGNhNnxcXHVkODM1W1xcdWRjYTktXFx1ZGNhY118XFx1ZDgzNVtcXHVkY2FlLVxcdWRjYjldfFxcdWQ4MzVcXHVkY2JifFxcdWQ4MzVbXFx1ZGNiZC1cXHVkY2MzXXxcXHVkODM1W1xcdWRjYzUtXFx1ZGQwNV18XFx1ZDgzNVtcXHVkZDA3LVxcdWRkMGFdfFxcdWQ4MzVbXFx1ZGQwZC1cXHVkZDE0XXxcXHVkODM1W1xcdWRkMTYtXFx1ZGQxY118XFx1ZDgzNVtcXHVkZDFlLVxcdWRkMzldfFxcdWQ4MzVbXFx1ZGQzYi1cXHVkZDNlXXxcXHVkODM1W1xcdWRkNDAtXFx1ZGQ0NF18XFx1ZDgzNVxcdWRkNDZ8XFx1ZDgzNVtcXHVkZDRhLVxcdWRkNTBdfFxcdWQ4MzVbXFx1ZGQ1Mi1cXHVkZWE1XXxcXHVkODM1W1xcdWRlYTgtXFx1ZGVkYV18XFx1ZDgzNVtcXHVkZWRjLVxcdWRmMTRdfFxcdWQ4MzVbXFx1ZGYxNi1cXHVkZjRlXXxcXHVkODM1W1xcdWRmNTAtXFx1ZGY4OF18XFx1ZDgzNVtcXHVkZjhhLVxcdWRmYzJdfFxcdWQ4MzVbXFx1ZGZjNC1cXHVkZmNiXXxcXHVkODM2W1xcdWRjMDAtXFx1ZGRmZl18XFx1ZDgzNltcXHVkZTM3LVxcdWRlM2FdfFxcdWQ4MzZbXFx1ZGU2ZC1cXHVkZTc0XXxcXHVkODM2W1xcdWRlNzYtXFx1ZGU4M118XFx1ZDgzNltcXHVkZTg1LVxcdWRlOGJdfFxcdWQ4M2NbXFx1ZGQxMC1cXHVkZDJlXXxcXHVkODNjW1xcdWRkMzAtXFx1ZGQ2OV18XFx1ZDgzY1tcXHVkZDcwLVxcdWRkOWFdfFxcdWQ4M2NbXFx1ZGRlNi1cXHVkZTAyXXxcXHVkODNjW1xcdWRlMTAtXFx1ZGUzYV18XFx1ZDgzY1tcXHVkZTQwLVxcdWRlNDhdfFxcdWQ4M2NcXHVkZTUwfFxcdWQ4M2NcXHVkZTUxfFtcXHVkODQwLVxcdWQ4NjhdW1xcdWRjMDAtXFx1ZGZmZl18XFx1ZDg2OVtcXHVkYzAwLVxcdWRlZDZdfFxcdWQ4NjlbXFx1ZGYwMC1cXHVkZmZmXXxbXFx1ZDg2YS1cXHVkODZjXVtcXHVkYzAwLVxcdWRmZmZdfFxcdWQ4NmRbXFx1ZGMwMC1cXHVkZjM0XXxcXHVkODZkW1xcdWRmNDAtXFx1ZGZmZl18XFx1ZDg2ZVtcXHVkYzAwLVxcdWRjMWRdfFxcdWQ4NmVbXFx1ZGMyMC1cXHVkZmZmXXxbXFx1ZDg2Zi1cXHVkODcyXVtcXHVkYzAwLVxcdWRmZmZdfFxcdWQ4NzNbXFx1ZGMwMC1cXHVkZWExXXxcXHVkODdlW1xcdWRjMDAtXFx1ZGUxZF18W1xcdWRiODAtXFx1ZGJiZV1bXFx1ZGMwMC1cXHVkZmZmXXxcXHVkYmJmW1xcdWRjMDAtXFx1ZGZmZF18W1xcdWRiYzAtXFx1ZGJmZV1bXFx1ZGMwMC1cXHVkZmZmXXxcXHVkYmZmW1xcdWRjMDAtXFx1ZGZmZF0nICtcclxuXHRcdFx0Jyl8KCcgK1xyXG5cdFx0XHRcdCdbXFx1MDU5MFxcdTA1YmVcXHUwNWMwXFx1MDVjM1xcdTA1YzZcXHUwNWM4LVxcdTA1ZmZcXHUwN2MwLVxcdTA3ZWFcXHUwN2Y0XFx1MDdmNVxcdTA3ZmEtXFx1MDgxNVxcdTA4MWFcXHUwODI0XFx1MDgyOFxcdTA4MmUtXFx1MDg1OFxcdTA4NWMtXFx1MDg5ZlxcdTIwMGZcXHVmYjFkXFx1ZmIxZi1cXHVmYjI4XFx1ZmIyYS1cXHVmYjRmXFx1MDYwOFxcdTA2MGJcXHUwNjBkXFx1MDYxYi1cXHUwNjRhXFx1MDY2ZC1cXHUwNjZmXFx1MDY3MS1cXHUwNmQ1XFx1MDZlNVxcdTA2ZTZcXHUwNmVlXFx1MDZlZlxcdTA2ZmEtXFx1MDcxMFxcdTA3MTItXFx1MDcyZlxcdTA3NGItXFx1MDdhNVxcdTA3YjEtXFx1MDdiZlxcdTA4YTAtXFx1MDhlMlxcdWZiNTAtXFx1ZmQzZFxcdWZkNDAtXFx1ZmRjZlxcdWZkZjAtXFx1ZmRmY1xcdWZkZmVcXHVmZGZmXFx1ZmU3MC1cXHVmZWZlXXxcXHVkODAyW1xcdWRjMDAtXFx1ZGQxZV18XFx1ZDgwMltcXHVkZDIwLVxcdWRlMDBdfFxcdWQ4MDJcXHVkZTA0fFxcdWQ4MDJbXFx1ZGUwNy1cXHVkZTBiXXxcXHVkODAyW1xcdWRlMTAtXFx1ZGUzN118XFx1ZDgwMltcXHVkZTNiLVxcdWRlM2VdfFxcdWQ4MDJbXFx1ZGU0MC1cXHVkZWU0XXxcXHVkODAyW1xcdWRlZTctXFx1ZGYzOF18XFx1ZDgwMltcXHVkZjQwLVxcdWRmZmZdfFxcdWQ4MDNbXFx1ZGMwMC1cXHVkZTVmXXxcXHVkODAzW1xcdWRlN2YtXFx1ZGZmZl18XFx1ZDgzYVtcXHVkYzAwLVxcdWRjY2ZdfFxcdWQ4M2FbXFx1ZGNkNy1cXHVkZmZmXXxcXHVkODNiW1xcdWRjMDAtXFx1ZGRmZl18XFx1ZDgzYltcXHVkZjAwLVxcdWRmZmZdfFxcdWQ4M2JbXFx1ZGYwMC1cXHVkZmZmXXxcXHVkODNiW1xcdWRmMDAtXFx1ZGZmZl18XFx1ZDgzYltcXHVkZjAwLVxcdWRmZmZdfFxcdWQ4M2JbXFx1ZGYwMC1cXHVkZmZmXXxcXHVkODNiW1xcdWRmMDAtXFx1ZGZmZl18XFx1ZDgzYltcXHVkZjAwLVxcdWRmZmZdfFxcdWQ4M2JbXFx1ZGYwMC1cXHVkZmZmXXxcXHVkODNiW1xcdWRmMDAtXFx1ZGZmZl18XFx1ZDgzYltcXHVkZjAwLVxcdWRmZmZdfFxcdWQ4M2JbXFx1ZGYwMC1cXHVkZmZmXXxcXHVkODNiW1xcdWRmMDAtXFx1ZGZmZl18XFx1ZDgzYltcXHVkZjAwLVxcdWRmZmZdfFxcdWQ4M2JbXFx1ZGUwMC1cXHVkZWVmXXxcXHVkODNiW1xcdWRlZjItXFx1ZGVmZl0nICtcclxuXHRcdFx0JyknICtcclxuXHRcdCcpJ1xyXG5cdCk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldHMgZGlyZWN0aW9uYWxpdHkgb2YgdGhlIGZpcnN0IHN0cm9uZ2x5IGRpcmVjdGlvbmFsIGNvZGVwb2ludFxyXG5cdCAqXHJcblx0ICogVGhpcyBpcyB0aGUgcnVsZSB0aGUgQklESSBhbGdvcml0aG0gdXNlcyB0byBkZXRlcm1pbmUgdGhlIGRpcmVjdGlvbmFsaXR5IG9mXHJcblx0ICogcGFyYWdyYXBocyAoIGh0dHA6Ly91bmljb2RlLm9yZy9yZXBvcnRzL3RyOS8jVGhlX1BhcmFncmFwaF9MZXZlbCApIGFuZFxyXG5cdCAqIEZTSSBpc29sYXRlcyAoIGh0dHA6Ly91bmljb2RlLm9yZy9yZXBvcnRzL3RyOS8jRXhwbGljaXRfRGlyZWN0aW9uYWxfSXNvbGF0ZXMgKS5cclxuXHQgKlxyXG5cdCAqIFRPRE86IERvZXMgbm90IGhhbmRsZSBCSURJIGNvbnRyb2wgY2hhcmFjdGVycyBpbnNpZGUgdGhlIHRleHQuXHJcblx0ICogVE9ETzogRG9lcyBub3QgaGFuZGxlIHVuYWxsb2NhdGVkIGNoYXJhY3RlcnMuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUaGUgdGV4dCBmcm9tIHdoaWNoIHRvIGV4dHJhY3QgaW5pdGlhbCBkaXJlY3Rpb25hbGl0eS5cclxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9IERpcmVjdGlvbmFsaXR5IChlaXRoZXIgJ2x0cicgb3IgJ3J0bCcpXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gc3Ryb25nRGlyRnJvbUNvbnRlbnQoIHRleHQgKSB7XHJcblx0XHR2YXIgbSA9IHRleHQubWF0Y2goIHN0cm9uZ0RpclJlZ0V4cCApO1xyXG5cdFx0aWYgKCAhbSApIHtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0XHRpZiAoIG1bIDIgXSA9PT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRyZXR1cm4gJ2x0cic7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gJ3J0bCc7XHJcblx0fVxyXG5cclxuXHQkLmV4dGVuZCggJC5pMThuLnBhcnNlci5lbWl0dGVyLCB7XHJcblx0XHQvKipcclxuXHRcdCAqIFdyYXBzIGFyZ3VtZW50IHdpdGggdW5pY29kZSBjb250cm9sIGNoYXJhY3RlcnMgZm9yIGRpcmVjdGlvbmFsaXR5IHNhZmV0eVxyXG5cdFx0ICpcclxuXHRcdCAqIFRoaXMgc29sdmVzIHRoZSBwcm9ibGVtIHdoZXJlIGRpcmVjdGlvbmFsaXR5LW5ldXRyYWwgY2hhcmFjdGVycyBhdCB0aGUgZWRnZSBvZlxyXG5cdFx0ICogdGhlIGFyZ3VtZW50IHN0cmluZyBnZXQgaW50ZXJwcmV0ZWQgd2l0aCB0aGUgd3JvbmcgZGlyZWN0aW9uYWxpdHkgZnJvbSB0aGVcclxuXHRcdCAqIGVuY2xvc2luZyBjb250ZXh0LCBnaXZpbmcgcmVuZGVyaW5ncyB0aGF0IGxvb2sgY29ycnVwdGVkIGxpa2UgXCIoQmVuXyhXTUZcIi5cclxuXHRcdCAqXHJcblx0XHQgKiBUaGUgd3JhcHBpbmcgaXMgTFJFLi4uUERGIG9yIFJMRS4uLlBERiwgZGVwZW5kaW5nIG9uIHRoZSBkZXRlY3RlZFxyXG5cdFx0ICogZGlyZWN0aW9uYWxpdHkgb2YgdGhlIGFyZ3VtZW50IHN0cmluZywgdXNpbmcgdGhlIEJJREkgYWxnb3JpdGhtJ3Mgb3duIFwiRmlyc3RcclxuXHRcdCAqIHN0cm9uZyBkaXJlY3Rpb25hbCBjb2RlcG9pbnRcIiBydWxlLiBFc3NlbnRpYWxseSwgdGhpcyB3b3JrcyByb3VuZCB0aGUgZmFjdCB0aGF0XHJcblx0XHQgKiB0aGVyZSBpcyBubyBlbWJlZGRpbmcgZXF1aXZhbGVudCBvZiBVKzIwNjggRlNJIChpc29sYXRpb24gd2l0aCBoZXVyaXN0aWNcclxuXHRcdCAqIGRpcmVjdGlvbiBpbmZlcmVuY2UpLiBUaGUgbGF0dGVyIGlzIGNsZWFuZXIgYnV0IHN0aWxsIG5vdCB3aWRlbHkgc3VwcG9ydGVkLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nW119IG5vZGVzIFRoZSB0ZXh0IG5vZGVzIGZyb20gd2hpY2ggdG8gdGFrZSB0aGUgZmlyc3QgaXRlbS5cclxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ30gV3JhcHBlZCBTdHJpbmcgb2YgY29udGVudCBhcyBuZWVkZWQuXHJcblx0XHQgKi9cclxuXHRcdGJpZGk6IGZ1bmN0aW9uICggbm9kZXMgKSB7XHJcblx0XHRcdHZhciBkaXIgPSBzdHJvbmdEaXJGcm9tQ29udGVudCggbm9kZXNbIDAgXSApO1xyXG5cdFx0XHRpZiAoIGRpciA9PT0gJ2x0cicgKSB7XHJcblx0XHRcdFx0Ly8gV3JhcCBpbiBMRUZULVRPLVJJR0hUIEVNQkVERElORyAuLi4gUE9QIERJUkVDVElPTkFMIEZPUk1BVFRJTkdcclxuXHRcdFx0XHRyZXR1cm4gJ1xcdTIwMkEnICsgbm9kZXNbIDAgXSArICdcXHUyMDJDJztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIGRpciA9PT0gJ3J0bCcgKSB7XHJcblx0XHRcdFx0Ly8gV3JhcCBpbiBSSUdIVC1UTy1MRUZUIEVNQkVERElORyAuLi4gUE9QIERJUkVDVElPTkFMIEZPUk1BVFRJTkdcclxuXHRcdFx0XHRyZXR1cm4gJ1xcdTIwMkInICsgbm9kZXNbIDAgXSArICdcXHUyMDJDJztcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBObyBzdHJvbmcgZGlyZWN0aW9uYWxpdHk6IGRvIG5vdCB3cmFwXHJcblx0XHRcdHJldHVybiBub2Rlc1sgMCBdO1xyXG5cdFx0fVxyXG5cdH0gKTtcclxufSggalF1ZXJ5ICkgKTtcclxuIiwiLyohXHJcbiAqIGpRdWVyeSBJbnRlcm5hdGlvbmFsaXphdGlvbiBsaWJyYXJ5XHJcbiAqXHJcbiAqIENvcHlyaWdodCAoQykgMjAxMS0yMDEzIFNhbnRob3NoIFRob3R0aW5nYWwsIE5laWwgS2FuZGFsZ2FvbmthclxyXG4gKlxyXG4gKiBqcXVlcnkuaTE4biBpcyBkdWFsIGxpY2Vuc2VkIEdQTHYyIG9yIGxhdGVyIGFuZCBNSVQuIFlvdSBkb24ndCBoYXZlIHRvIGRvXHJcbiAqIGFueXRoaW5nIHNwZWNpYWwgdG8gY2hvb3NlIG9uZSBsaWNlbnNlIG9yIHRoZSBvdGhlciBhbmQgeW91IGRvbid0IGhhdmUgdG9cclxuICogbm90aWZ5IGFueW9uZSB3aGljaCBsaWNlbnNlIHlvdSBhcmUgdXNpbmcuIFlvdSBhcmUgZnJlZSB0byB1c2VcclxuICogVW5pdmVyc2FsTGFuZ3VhZ2VTZWxlY3RvciBpbiBjb21tZXJjaWFsIHByb2plY3RzIGFzIGxvbmcgYXMgdGhlIGNvcHlyaWdodFxyXG4gKiBoZWFkZXIgaXMgbGVmdCBpbnRhY3QuIFNlZSBmaWxlcyBHUEwtTElDRU5TRSBhbmQgTUlULUxJQ0VOU0UgZm9yIGRldGFpbHMuXHJcbiAqXHJcbiAqIEBsaWNlbmNlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbmNlIDIuMCBvciBsYXRlclxyXG4gKiBAbGljZW5jZSBNSVQgTGljZW5zZVxyXG4gKi9cclxuXHJcbiggZnVuY3Rpb24gKCAkICkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0dmFyIE1lc3NhZ2VQYXJzZXJFbWl0dGVyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5sYW5ndWFnZSA9ICQuaTE4bi5sYW5ndWFnZXNbIFN0cmluZy5sb2NhbGUgXSB8fCAkLmkxOG4ubGFuZ3VhZ2VzWyAnZGVmYXVsdCcgXTtcclxuXHR9O1xyXG5cclxuXHRNZXNzYWdlUGFyc2VyRW1pdHRlci5wcm90b3R5cGUgPSB7XHJcblx0XHRjb25zdHJ1Y3RvcjogTWVzc2FnZVBhcnNlckVtaXR0ZXIsXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAoV2UgcHV0IHRoaXMgbWV0aG9kIGRlZmluaXRpb24gaGVyZSwgYW5kIG5vdCBpbiBwcm90b3R5cGUsIHRvIG1ha2VcclxuXHRcdCAqIHN1cmUgaXQncyBub3Qgb3ZlcndyaXR0ZW4gYnkgYW55IG1hZ2ljLikgV2FsayBlbnRpcmUgbm9kZSBzdHJ1Y3R1cmUsXHJcblx0XHQgKiBhcHBseWluZyByZXBsYWNlbWVudHMgYW5kIHRlbXBsYXRlIGZ1bmN0aW9ucyB3aGVuIGFwcHJvcHJpYXRlXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtNaXhlZH0gbm9kZSBhYnN0cmFjdCBzeW50YXggdHJlZSAodG9wIG5vZGUgb3Igc3Vibm9kZSlcclxuXHRcdCAqIEBwYXJhbSB7QXJyYXl9IHJlcGxhY2VtZW50cyBmb3IgJDEsICQyLCAuLi4gJG5cclxuXHRcdCAqIEByZXR1cm4ge01peGVkfSBzaW5nbGUtc3RyaW5nIG5vZGUgb3IgYXJyYXkgb2Ygbm9kZXMgc3VpdGFibGUgZm9yXHJcblx0XHQgKiAgalF1ZXJ5IGFwcGVuZGluZy5cclxuXHRcdCAqL1xyXG5cdFx0ZW1pdDogZnVuY3Rpb24gKCBub2RlLCByZXBsYWNlbWVudHMgKSB7XHJcblx0XHRcdHZhciByZXQsIHN1Ym5vZGVzLCBvcGVyYXRpb24sXHJcblx0XHRcdFx0bWVzc2FnZVBhcnNlckVtaXR0ZXIgPSB0aGlzO1xyXG5cclxuXHRcdFx0c3dpdGNoICggdHlwZW9mIG5vZGUgKSB7XHJcblx0XHRcdFx0Y2FzZSAnc3RyaW5nJzpcclxuXHRcdFx0XHRjYXNlICdudW1iZXInOlxyXG5cdFx0XHRcdFx0cmV0ID0gbm9kZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ29iamVjdCc6XHJcblx0XHRcdFx0Ly8gbm9kZSBpcyBhbiBhcnJheSBvZiBub2Rlc1xyXG5cdFx0XHRcdFx0c3Vibm9kZXMgPSAkLm1hcCggbm9kZS5zbGljZSggMSApLCBmdW5jdGlvbiAoIG4gKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBtZXNzYWdlUGFyc2VyRW1pdHRlci5lbWl0KCBuLCByZXBsYWNlbWVudHMgKTtcclxuXHRcdFx0XHRcdH0gKTtcclxuXHJcblx0XHRcdFx0XHRvcGVyYXRpb24gPSBub2RlWyAwIF0udG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIHR5cGVvZiBtZXNzYWdlUGFyc2VyRW1pdHRlclsgb3BlcmF0aW9uIF0gPT09ICdmdW5jdGlvbicgKSB7XHJcblx0XHRcdFx0XHRcdHJldCA9IG1lc3NhZ2VQYXJzZXJFbWl0dGVyWyBvcGVyYXRpb24gXSggc3Vibm9kZXMsIHJlcGxhY2VtZW50cyApO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAndW5rbm93biBvcGVyYXRpb24gXCInICsgb3BlcmF0aW9uICsgJ1wiJyApO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ3VuZGVmaW5lZCc6XHJcblx0XHRcdFx0Ly8gUGFyc2luZyB0aGUgZW1wdHkgc3RyaW5nIChhcyBhbiBlbnRpcmUgZXhwcmVzc2lvbiwgb3IgYXMgYVxyXG5cdFx0XHRcdC8vIHBhcmFtRXhwcmVzc2lvbiBpbiBhIHRlbXBsYXRlKSByZXN1bHRzIGluIHVuZGVmaW5lZFxyXG5cdFx0XHRcdC8vIFBlcmhhcHMgYSBtb3JlIGNsZXZlciBwYXJzZXIgY2FuIGRldGVjdCB0aGlzLCBhbmQgcmV0dXJuIHRoZVxyXG5cdFx0XHRcdC8vIGVtcHR5IHN0cmluZz8gT3IgaXMgdGhhdCB1c2VmdWwgaW5mb3JtYXRpb24/XHJcblx0XHRcdFx0Ly8gVGhlIGxvZ2ljYWwgdGhpbmcgaXMgcHJvYmFibHkgdG8gcmV0dXJuIHRoZSBlbXB0eSBzdHJpbmcgaGVyZVxyXG5cdFx0XHRcdC8vIHdoZW4gd2UgZW5jb3VudGVyIHVuZGVmaW5lZC5cclxuXHRcdFx0XHRcdHJldCA9ICcnO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggJ3VuZXhwZWN0ZWQgdHlwZSBpbiBBU1Q6ICcgKyB0eXBlb2Ygbm9kZSApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcmV0O1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFBhcnNpbmcgaGFzIGJlZW4gYXBwbGllZCBkZXB0aC1maXJzdCB3ZSBjYW4gYXNzdW1lIHRoYXQgYWxsIG5vZGVzXHJcblx0XHQgKiBoZXJlIGFyZSBzaW5nbGUgbm9kZXMgTXVzdCByZXR1cm4gYSBzaW5nbGUgbm9kZSB0byBwYXJlbnRzIC0tIGFcclxuXHRcdCAqIGpRdWVyeSB3aXRoIHN5bnRoZXRpYyBzcGFuIEhvd2V2ZXIsIHVud3JhcCBhbnkgb3RoZXIgc3ludGhldGljIHNwYW5zXHJcblx0XHQgKiBpbiBvdXIgY2hpbGRyZW4gYW5kIHBhc3MgdGhlbSB1cHdhcmRzXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gbm9kZXMgTWl4ZWQsIHNvbWUgc2luZ2xlIG5vZGVzLCBzb21lIGFycmF5cyBvZiBub2Rlcy5cclxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ31cclxuXHRcdCAqL1xyXG5cdFx0Y29uY2F0OiBmdW5jdGlvbiAoIG5vZGVzICkge1xyXG5cdFx0XHR2YXIgcmVzdWx0ID0gJyc7XHJcblxyXG5cdFx0XHQkLmVhY2goIG5vZGVzLCBmdW5jdGlvbiAoIGksIG5vZGUgKSB7XHJcblx0XHRcdFx0Ly8gc3RyaW5ncywgaW50ZWdlcnMsIGFueXRoaW5nIGVsc2VcclxuXHRcdFx0XHRyZXN1bHQgKz0gbm9kZTtcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm4gZXNjYXBlZCByZXBsYWNlbWVudCBvZiBjb3JyZWN0IGluZGV4LCBvciBzdHJpbmcgaWZcclxuXHRcdCAqIHVuYXZhaWxhYmxlLiBOb3RlIHRoYXQgd2UgZXhwZWN0IHRoZSBwYXJzZWQgcGFyYW1ldGVyIHRvIGJlXHJcblx0XHQgKiB6ZXJvLWJhc2VkLiBpLmUuICQxIHNob3VsZCBoYXZlIGJlY29tZSBbIDAgXS4gaWYgdGhlIHNwZWNpZmllZFxyXG5cdFx0ICogcGFyYW1ldGVyIGlzIG5vdCBmb3VuZCByZXR1cm4gdGhlIHNhbWUgc3RyaW5nIChlLmcuIFwiJDk5XCIgLT5cclxuXHRcdCAqIHBhcmFtZXRlciA5OCAtPiBub3QgZm91bmQgLT4gcmV0dXJuIFwiJDk5XCIgKSBUT0RPIHRocm93IGVycm9yIGlmXHJcblx0XHQgKiBub2Rlcy5sZW5ndGggPiAxID9cclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBub2RlcyBPbmUgZWxlbWVudCwgaW50ZWdlciwgbiA+PSAwXHJcblx0XHQgKiBAcGFyYW0ge0FycmF5fSByZXBsYWNlbWVudHMgZm9yICQxLCAkMiwgLi4uICRuXHJcblx0XHQgKiBAcmV0dXJuIHtzdHJpbmd9IHJlcGxhY2VtZW50XHJcblx0XHQgKi9cclxuXHRcdHJlcGxhY2U6IGZ1bmN0aW9uICggbm9kZXMsIHJlcGxhY2VtZW50cyApIHtcclxuXHRcdFx0dmFyIGluZGV4ID0gcGFyc2VJbnQoIG5vZGVzWyAwIF0sIDEwICk7XHJcblxyXG5cdFx0XHRpZiAoIGluZGV4IDwgcmVwbGFjZW1lbnRzLmxlbmd0aCApIHtcclxuXHRcdFx0XHQvLyByZXBsYWNlbWVudCBpcyBub3QgYSBzdHJpbmcsIGRvbid0IHRvdWNoIVxyXG5cdFx0XHRcdHJldHVybiByZXBsYWNlbWVudHNbIGluZGV4IF07XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gaW5kZXggbm90IGZvdW5kLCBmYWxsYmFjayB0byBkaXNwbGF5aW5nIHZhcmlhYmxlXHJcblx0XHRcdFx0cmV0dXJuICckJyArICggaW5kZXggKyAxICk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUcmFuc2Zvcm0gcGFyc2VkIHN0cnVjdHVyZSBpbnRvIHBsdXJhbGl6YXRpb24gbi5iLiBUaGUgZmlyc3Qgbm9kZSBtYXlcclxuXHRcdCAqIGJlIGEgbm9uLWludGVnZXIgKGZvciBpbnN0YW5jZSwgYSBzdHJpbmcgcmVwcmVzZW50aW5nIGFuIEFyYWJpY1xyXG5cdFx0ICogbnVtYmVyKS4gU28gY29udmVydCBpdCBiYWNrIHdpdGggdGhlIGN1cnJlbnQgbGFuZ3VhZ2Unc1xyXG5cdFx0ICogY29udmVydE51bWJlci5cclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBub2RlcyBMaXN0IFsge1N0cmluZ3xOdW1iZXJ9LCB7U3RyaW5nfSwge1N0cmluZ30gLi4uIF1cclxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ30gc2VsZWN0ZWQgcGx1cmFsaXplZCBmb3JtIGFjY29yZGluZyB0byBjdXJyZW50XHJcblx0XHQgKiAgbGFuZ3VhZ2UuXHJcblx0XHQgKi9cclxuXHRcdHBsdXJhbDogZnVuY3Rpb24gKCBub2RlcyApIHtcclxuXHRcdFx0dmFyIGNvdW50ID0gcGFyc2VGbG9hdCggdGhpcy5sYW5ndWFnZS5jb252ZXJ0TnVtYmVyKCBub2Rlc1sgMCBdLCAxMCApICksXHJcblx0XHRcdFx0Zm9ybXMgPSBub2Rlcy5zbGljZSggMSApO1xyXG5cclxuXHRcdFx0cmV0dXJuIGZvcm1zLmxlbmd0aCA/IHRoaXMubGFuZ3VhZ2UuY29udmVydFBsdXJhbCggY291bnQsIGZvcm1zICkgOiAnJztcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUcmFuc2Zvcm0gcGFyc2VkIHN0cnVjdHVyZSBpbnRvIGdlbmRlciBVc2FnZVxyXG5cdFx0ICoge3tnZW5kZXI6Z2VuZGVyfG1hc2N1bGluZXxmZW1pbmluZXxuZXV0cmFsfX0uXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gbm9kZXMgTGlzdCBbIHtTdHJpbmd9LCB7U3RyaW5nfSwge1N0cmluZ30gLCB7U3RyaW5nfSBdXHJcblx0XHQgKiBAcmV0dXJuIHtzdHJpbmd9IHNlbGVjdGVkIGdlbmRlciBmb3JtIGFjY29yZGluZyB0byBjdXJyZW50IGxhbmd1YWdlXHJcblx0XHQgKi9cclxuXHRcdGdlbmRlcjogZnVuY3Rpb24gKCBub2RlcyApIHtcclxuXHRcdFx0dmFyIGdlbmRlciA9IG5vZGVzWyAwIF0sXHJcblx0XHRcdFx0Zm9ybXMgPSBub2Rlcy5zbGljZSggMSApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXMubGFuZ3VhZ2UuZ2VuZGVyKCBnZW5kZXIsIGZvcm1zICk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVHJhbnNmb3JtIHBhcnNlZCBzdHJ1Y3R1cmUgaW50byBncmFtbWFyIGNvbnZlcnNpb24uIEludm9rZWQgYnlcclxuXHRcdCAqIHB1dHRpbmcge3tncmFtbWFyOmZvcm18d29yZH19IGluIGEgbWVzc2FnZVxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7QXJyYXl9IG5vZGVzIExpc3QgW3tHcmFtbWFyIGNhc2UgZWc6IGdlbml0aXZlfSwge1N0cmluZyB3b3JkfV1cclxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ30gc2VsZWN0ZWQgZ3JhbW1hdGljYWwgZm9ybSBhY2NvcmRpbmcgdG8gY3VycmVudFxyXG5cdFx0ICogIGxhbmd1YWdlLlxyXG5cdFx0ICovXHJcblx0XHRncmFtbWFyOiBmdW5jdGlvbiAoIG5vZGVzICkge1xyXG5cdFx0XHR2YXIgZm9ybSA9IG5vZGVzWyAwIF0sXHJcblx0XHRcdFx0d29yZCA9IG5vZGVzWyAxIF07XHJcblxyXG5cdFx0XHRyZXR1cm4gd29yZCAmJiBmb3JtICYmIHRoaXMubGFuZ3VhZ2UuY29udmVydEdyYW1tYXIoIHdvcmQsIGZvcm0gKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQkLmV4dGVuZCggJC5pMThuLnBhcnNlci5lbWl0dGVyLCBuZXcgTWVzc2FnZVBhcnNlckVtaXR0ZXIoKSApO1xyXG59KCBqUXVlcnkgKSApO1xyXG4iLCIvKiFcclxuICogalF1ZXJ5IEludGVybmF0aW9uYWxpemF0aW9uIGxpYnJhcnlcclxuICpcclxuICogQ29weXJpZ2h0IChDKSAyMDEyIFNhbnRob3NoIFRob3R0aW5nYWxcclxuICpcclxuICoganF1ZXJ5LmkxOG4gaXMgZHVhbCBsaWNlbnNlZCBHUEx2MiBvciBsYXRlciBhbmQgTUlULiBZb3UgZG9uJ3QgaGF2ZSB0byBkbyBhbnl0aGluZyBzcGVjaWFsIHRvXHJcbiAqIGNob29zZSBvbmUgbGljZW5zZSBvciB0aGUgb3RoZXIgYW5kIHlvdSBkb24ndCBoYXZlIHRvIG5vdGlmeSBhbnlvbmUgd2hpY2ggbGljZW5zZSB5b3UgYXJlIHVzaW5nLlxyXG4gKiBZb3UgYXJlIGZyZWUgdG8gdXNlIFVuaXZlcnNhbExhbmd1YWdlU2VsZWN0b3IgaW4gY29tbWVyY2lhbCBwcm9qZWN0cyBhcyBsb25nIGFzIHRoZSBjb3B5cmlnaHRcclxuICogaGVhZGVyIGlzIGxlZnQgaW50YWN0LiBTZWUgZmlsZXMgR1BMLUxJQ0VOU0UgYW5kIE1JVC1MSUNFTlNFIGZvciBkZXRhaWxzLlxyXG4gKlxyXG4gKiBAbGljZW5jZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5jZSAyLjAgb3IgbGF0ZXJcclxuICogQGxpY2VuY2UgTUlUIExpY2Vuc2VcclxuICovXHJcbiggZnVuY3Rpb24gKCAkICkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0JC5pMThuID0gJC5pMThuIHx8IHt9O1xyXG5cdCQuZXh0ZW5kKCAkLmkxOG4uZmFsbGJhY2tzLCB7XHJcblx0XHRhYjogWyAncnUnIF0sXHJcblx0XHRhY2U6IFsgJ2lkJyBdLFxyXG5cdFx0YWxuOiBbICdzcScgXSxcclxuXHRcdC8vIE5vdCBzbyBzdGFuZGFyZCAtIGFscyBpcyBzdXBwb3NlZCB0byBiZSBUb3NrIEFsYmFuaWFuLFxyXG5cdFx0Ly8gYnV0IGluIFdpa2lwZWRpYSBpdCdzIHVzZWQgZm9yIGEgR2VybWFuaWMgbGFuZ3VhZ2UuXHJcblx0XHRhbHM6IFsgJ2dzdycsICdkZScgXSxcclxuXHRcdGFuOiBbICdlcycgXSxcclxuXHRcdGFucDogWyAnaGknIF0sXHJcblx0XHRhcm46IFsgJ2VzJyBdLFxyXG5cdFx0YXJ6OiBbICdhcicgXSxcclxuXHRcdGF2OiBbICdydScgXSxcclxuXHRcdGF5OiBbICdlcycgXSxcclxuXHRcdGJhOiBbICdydScgXSxcclxuXHRcdGJhcjogWyAnZGUnIF0sXHJcblx0XHQnYmF0LXNtZyc6IFsgJ3NncycsICdsdCcgXSxcclxuXHRcdGJjYzogWyAnZmEnIF0sXHJcblx0XHQnYmUteC1vbGQnOiBbICdiZS10YXJhc2snIF0sXHJcblx0XHRiaDogWyAnYmhvJyBdLFxyXG5cdFx0YmpuOiBbICdpZCcgXSxcclxuXHRcdGJtOiBbICdmcicgXSxcclxuXHRcdGJweTogWyAnYm4nIF0sXHJcblx0XHRicWk6IFsgJ2ZhJyBdLFxyXG5cdFx0YnVnOiBbICdpZCcgXSxcclxuXHRcdCdjYmstemFtJzogWyAnZXMnIF0sXHJcblx0XHRjZTogWyAncnUnIF0sXHJcblx0XHRjcmg6IFsgJ2NyaC1sYXRuJyBdLFxyXG5cdFx0J2NyaC1jeXJsJzogWyAncnUnIF0sXHJcblx0XHRjc2I6IFsgJ3BsJyBdLFxyXG5cdFx0Y3Y6IFsgJ3J1JyBdLFxyXG5cdFx0J2RlLWF0JzogWyAnZGUnIF0sXHJcblx0XHQnZGUtY2gnOiBbICdkZScgXSxcclxuXHRcdCdkZS1mb3JtYWwnOiBbICdkZScgXSxcclxuXHRcdGRzYjogWyAnZGUnIF0sXHJcblx0XHRkdHA6IFsgJ21zJyBdLFxyXG5cdFx0ZWdsOiBbICdpdCcgXSxcclxuXHRcdGVtbDogWyAnaXQnIF0sXHJcblx0XHRmZjogWyAnZnInIF0sXHJcblx0XHRmaXQ6IFsgJ2ZpJyBdLFxyXG5cdFx0J2ZpdS12cm8nOiBbICd2cm8nLCAnZXQnIF0sXHJcblx0XHRmcmM6IFsgJ2ZyJyBdLFxyXG5cdFx0ZnJwOiBbICdmcicgXSxcclxuXHRcdGZycjogWyAnZGUnIF0sXHJcblx0XHRmdXI6IFsgJ2l0JyBdLFxyXG5cdFx0Z2FnOiBbICd0cicgXSxcclxuXHRcdGdhbjogWyAnZ2FuLWhhbnQnLCAnemgtaGFudCcsICd6aC1oYW5zJyBdLFxyXG5cdFx0J2dhbi1oYW5zJzogWyAnemgtaGFucycgXSxcclxuXHRcdCdnYW4taGFudCc6IFsgJ3poLWhhbnQnLCAnemgtaGFucycgXSxcclxuXHRcdGdsOiBbICdwdCcgXSxcclxuXHRcdGdsazogWyAnZmEnIF0sXHJcblx0XHRnbjogWyAnZXMnIF0sXHJcblx0XHRnc3c6IFsgJ2RlJyBdLFxyXG5cdFx0aGlmOiBbICdoaWYtbGF0bicgXSxcclxuXHRcdGhzYjogWyAnZGUnIF0sXHJcblx0XHRodDogWyAnZnInIF0sXHJcblx0XHRpaTogWyAnemgtY24nLCAnemgtaGFucycgXSxcclxuXHRcdGluaDogWyAncnUnIF0sXHJcblx0XHRpdTogWyAnaWtlLWNhbnMnIF0sXHJcblx0XHRqdXQ6IFsgJ2RhJyBdLFxyXG5cdFx0anY6IFsgJ2lkJyBdLFxyXG5cdFx0a2FhOiBbICdray1sYXRuJywgJ2trLWN5cmwnIF0sXHJcblx0XHRrYmQ6IFsgJ2tiZC1jeXJsJyBdLFxyXG5cdFx0a2h3OiBbICd1cicgXSxcclxuXHRcdGtpdTogWyAndHInIF0sXHJcblx0XHRrazogWyAna2stY3lybCcgXSxcclxuXHRcdCdray1hcmFiJzogWyAna2stY3lybCcgXSxcclxuXHRcdCdray1sYXRuJzogWyAna2stY3lybCcgXSxcclxuXHRcdCdray1jbic6IFsgJ2trLWFyYWInLCAna2stY3lybCcgXSxcclxuXHRcdCdray1reic6IFsgJ2trLWN5cmwnIF0sXHJcblx0XHQna2stdHInOiBbICdray1sYXRuJywgJ2trLWN5cmwnIF0sXHJcblx0XHRrbDogWyAnZGEnIF0sXHJcblx0XHQna28ta3AnOiBbICdrbycgXSxcclxuXHRcdGtvaTogWyAncnUnIF0sXHJcblx0XHRrcmM6IFsgJ3J1JyBdLFxyXG5cdFx0a3M6IFsgJ2tzLWFyYWInIF0sXHJcblx0XHRrc2g6IFsgJ2RlJyBdLFxyXG5cdFx0a3U6IFsgJ2t1LWxhdG4nIF0sXHJcblx0XHQna3UtYXJhYic6IFsgJ2NrYicgXSxcclxuXHRcdGt2OiBbICdydScgXSxcclxuXHRcdGxhZDogWyAnZXMnIF0sXHJcblx0XHRsYjogWyAnZGUnIF0sXHJcblx0XHRsYmU6IFsgJ3J1JyBdLFxyXG5cdFx0bGV6OiBbICdydScgXSxcclxuXHRcdGxpOiBbICdubCcgXSxcclxuXHRcdGxpajogWyAnaXQnIF0sXHJcblx0XHRsaXY6IFsgJ2V0JyBdLFxyXG5cdFx0bG1vOiBbICdpdCcgXSxcclxuXHRcdGxuOiBbICdmcicgXSxcclxuXHRcdGx0ZzogWyAnbHYnIF0sXHJcblx0XHRseno6IFsgJ3RyJyBdLFxyXG5cdFx0bWFpOiBbICdoaScgXSxcclxuXHRcdCdtYXAtYm1zJzogWyAnanYnLCAnaWQnIF0sXHJcblx0XHRtZzogWyAnZnInIF0sXHJcblx0XHRtaHI6IFsgJ3J1JyBdLFxyXG5cdFx0bWluOiBbICdpZCcgXSxcclxuXHRcdG1vOiBbICdybycgXSxcclxuXHRcdG1yajogWyAncnUnIF0sXHJcblx0XHRtd2w6IFsgJ3B0JyBdLFxyXG5cdFx0bXl2OiBbICdydScgXSxcclxuXHRcdG16bjogWyAnZmEnIF0sXHJcblx0XHRuYWg6IFsgJ2VzJyBdLFxyXG5cdFx0bmFwOiBbICdpdCcgXSxcclxuXHRcdG5kczogWyAnZGUnIF0sXHJcblx0XHQnbmRzLW5sJzogWyAnbmwnIF0sXHJcblx0XHQnbmwtaW5mb3JtYWwnOiBbICdubCcgXSxcclxuXHRcdG5vOiBbICduYicgXSxcclxuXHRcdG9zOiBbICdydScgXSxcclxuXHRcdHBjZDogWyAnZnInIF0sXHJcblx0XHRwZGM6IFsgJ2RlJyBdLFxyXG5cdFx0cGR0OiBbICdkZScgXSxcclxuXHRcdHBmbDogWyAnZGUnIF0sXHJcblx0XHRwbXM6IFsgJ2l0JyBdLFxyXG5cdFx0cHQ6IFsgJ3B0LWJyJyBdLFxyXG5cdFx0J3B0LWJyJzogWyAncHQnIF0sXHJcblx0XHRxdTogWyAnZXMnIF0sXHJcblx0XHRxdWc6IFsgJ3F1JywgJ2VzJyBdLFxyXG5cdFx0cmduOiBbICdpdCcgXSxcclxuXHRcdHJteTogWyAncm8nIF0sXHJcblx0XHQncm9hLXJ1cCc6IFsgJ3J1cCcgXSxcclxuXHRcdHJ1ZTogWyAndWsnLCAncnUnIF0sXHJcblx0XHRydXE6IFsgJ3J1cS1sYXRuJywgJ3JvJyBdLFxyXG5cdFx0J3J1cS1jeXJsJzogWyAnbWsnIF0sXHJcblx0XHQncnVxLWxhdG4nOiBbICdybycgXSxcclxuXHRcdHNhOiBbICdoaScgXSxcclxuXHRcdHNhaDogWyAncnUnIF0sXHJcblx0XHRzY246IFsgJ2l0JyBdLFxyXG5cdFx0c2c6IFsgJ2ZyJyBdLFxyXG5cdFx0c2dzOiBbICdsdCcgXSxcclxuXHRcdHNsaTogWyAnZGUnIF0sXHJcblx0XHRzcjogWyAnc3ItZWMnIF0sXHJcblx0XHRzcm46IFsgJ25sJyBdLFxyXG5cdFx0c3RxOiBbICdkZScgXSxcclxuXHRcdHN1OiBbICdpZCcgXSxcclxuXHRcdHN6bDogWyAncGwnIF0sXHJcblx0XHR0Y3k6IFsgJ2tuJyBdLFxyXG5cdFx0dGc6IFsgJ3RnLWN5cmwnIF0sXHJcblx0XHR0dDogWyAndHQtY3lybCcsICdydScgXSxcclxuXHRcdCd0dC1jeXJsJzogWyAncnUnIF0sXHJcblx0XHR0eTogWyAnZnInIF0sXHJcblx0XHR1ZG06IFsgJ3J1JyBdLFxyXG5cdFx0dWc6IFsgJ3VnLWFyYWInIF0sXHJcblx0XHR1azogWyAncnUnIF0sXHJcblx0XHR2ZWM6IFsgJ2l0JyBdLFxyXG5cdFx0dmVwOiBbICdldCcgXSxcclxuXHRcdHZsczogWyAnbmwnIF0sXHJcblx0XHR2bWY6IFsgJ2RlJyBdLFxyXG5cdFx0dm90OiBbICdmaScgXSxcclxuXHRcdHZybzogWyAnZXQnIF0sXHJcblx0XHR3YTogWyAnZnInIF0sXHJcblx0XHR3bzogWyAnZnInIF0sXHJcblx0XHR3dXU6IFsgJ3poLWhhbnMnIF0sXHJcblx0XHR4YWw6IFsgJ3J1JyBdLFxyXG5cdFx0eG1mOiBbICdrYScgXSxcclxuXHRcdHlpOiBbICdoZScgXSxcclxuXHRcdHphOiBbICd6aC1oYW5zJyBdLFxyXG5cdFx0emVhOiBbICdubCcgXSxcclxuXHRcdHpoOiBbICd6aC1oYW5zJyBdLFxyXG5cdFx0J3poLWNsYXNzaWNhbCc6IFsgJ2x6aCcgXSxcclxuXHRcdCd6aC1jbic6IFsgJ3poLWhhbnMnIF0sXHJcblx0XHQnemgtaGFudCc6IFsgJ3poLWhhbnMnIF0sXHJcblx0XHQnemgtaGsnOiBbICd6aC1oYW50JywgJ3poLWhhbnMnIF0sXHJcblx0XHQnemgtbWluLW5hbic6IFsgJ25hbicgXSxcclxuXHRcdCd6aC1tbyc6IFsgJ3poLWhrJywgJ3poLWhhbnQnLCAnemgtaGFucycgXSxcclxuXHRcdCd6aC1teSc6IFsgJ3poLXNnJywgJ3poLWhhbnMnIF0sXHJcblx0XHQnemgtc2cnOiBbICd6aC1oYW5zJyBdLFxyXG5cdFx0J3poLXR3JzogWyAnemgtaGFudCcsICd6aC1oYW5zJyBdLFxyXG5cdFx0J3poLXl1ZSc6IFsgJ3l1ZScgXVxyXG5cdH0gKTtcclxufSggalF1ZXJ5ICkgKTtcclxuIiwiLyohXHJcbiAqIGpRdWVyeSBJbnRlcm5hdGlvbmFsaXphdGlvbiBsaWJyYXJ5XHJcbiAqXHJcbiAqIENvcHlyaWdodCAoQykgMjAxMiBTYW50aG9zaCBUaG90dGluZ2FsXHJcbiAqXHJcbiAqIGpxdWVyeS5pMThuIGlzIGR1YWwgbGljZW5zZWQgR1BMdjIgb3IgbGF0ZXIgYW5kIE1JVC4gWW91IGRvbid0IGhhdmUgdG8gZG9cclxuICogYW55dGhpbmcgc3BlY2lhbCB0byBjaG9vc2Ugb25lIGxpY2Vuc2Ugb3IgdGhlIG90aGVyIGFuZCB5b3UgZG9uJ3QgaGF2ZSB0b1xyXG4gKiBub3RpZnkgYW55b25lIHdoaWNoIGxpY2Vuc2UgeW91IGFyZSB1c2luZy4gWW91IGFyZSBmcmVlIHRvIHVzZVxyXG4gKiBVbml2ZXJzYWxMYW5ndWFnZVNlbGVjdG9yIGluIGNvbW1lcmNpYWwgcHJvamVjdHMgYXMgbG9uZyBhcyB0aGUgY29weXJpZ2h0XHJcbiAqIGhlYWRlciBpcyBsZWZ0IGludGFjdC4gU2VlIGZpbGVzIEdQTC1MSUNFTlNFIGFuZCBNSVQtTElDRU5TRSBmb3IgZGV0YWlscy5cclxuICpcclxuICogQGxpY2VuY2UgR05VIEdlbmVyYWwgUHVibGljIExpY2VuY2UgMi4wIG9yIGxhdGVyXHJcbiAqIEBsaWNlbmNlIE1JVCBMaWNlbnNlXHJcbiAqL1xyXG5cclxuKCBmdW5jdGlvbiAoICQgKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHR2YXIgSTE4TixcclxuXHRcdHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xyXG5cdC8qKlxyXG5cdCAqIEBjb25zdHJ1Y3RvclxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcblx0ICovXHJcblx0STE4TiA9IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcclxuXHRcdC8vIExvYWQgZGVmYXVsdHNcclxuXHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKCB7fSwgSTE4Ti5kZWZhdWx0cywgb3B0aW9ucyApO1xyXG5cclxuXHRcdHRoaXMucGFyc2VyID0gdGhpcy5vcHRpb25zLnBhcnNlcjtcclxuXHRcdHRoaXMubG9jYWxlID0gdGhpcy5vcHRpb25zLmxvY2FsZTtcclxuXHRcdHRoaXMubWVzc2FnZVN0b3JlID0gdGhpcy5vcHRpb25zLm1lc3NhZ2VTdG9yZTtcclxuXHRcdHRoaXMubGFuZ3VhZ2VzID0ge307XHJcblx0fTtcclxuXHJcblx0STE4Ti5wcm90b3R5cGUgPSB7XHJcblx0XHQvKipcclxuXHRcdCAqIExvY2FsaXplIGEgZ2l2ZW4gbWVzc2FnZUtleSB0byBhIGxvY2FsZS5cclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlS2V5XHJcblx0XHQgKiBAcmV0dXJuIHtTdHJpbmd9IExvY2FsaXplZCBtZXNzYWdlXHJcblx0XHQgKi9cclxuXHRcdGxvY2FsaXplOiBmdW5jdGlvbiAoIG1lc3NhZ2VLZXkgKSB7XHJcblx0XHRcdHZhciBsb2NhbGVQYXJ0cywgbG9jYWxlUGFydEluZGV4LCBsb2NhbGUsIGZhbGxiYWNrSW5kZXgsXHJcblx0XHRcdFx0dHJ5aW5nTG9jYWxlLCBtZXNzYWdlO1xyXG5cclxuXHRcdFx0bG9jYWxlID0gdGhpcy5sb2NhbGU7XHJcblx0XHRcdGZhbGxiYWNrSW5kZXggPSAwO1xyXG5cclxuXHRcdFx0d2hpbGUgKCBsb2NhbGUgKSB7XHJcblx0XHRcdFx0Ly8gSXRlcmF0ZSB0aHJvdWdoIGxvY2FsZXMgc3RhcnRpbmcgYXQgbW9zdC1zcGVjaWZpYyB1bnRpbFxyXG5cdFx0XHRcdC8vIGxvY2FsaXphdGlvbiBpcyBmb3VuZC4gQXMgaW4gZmktTGF0bi1GSSwgZmktTGF0biBhbmQgZmkuXHJcblx0XHRcdFx0bG9jYWxlUGFydHMgPSBsb2NhbGUuc3BsaXQoICctJyApO1xyXG5cdFx0XHRcdGxvY2FsZVBhcnRJbmRleCA9IGxvY2FsZVBhcnRzLmxlbmd0aDtcclxuXHJcblx0XHRcdFx0ZG8ge1xyXG5cdFx0XHRcdFx0dHJ5aW5nTG9jYWxlID0gbG9jYWxlUGFydHMuc2xpY2UoIDAsIGxvY2FsZVBhcnRJbmRleCApLmpvaW4oICctJyApO1xyXG5cdFx0XHRcdFx0bWVzc2FnZSA9IHRoaXMubWVzc2FnZVN0b3JlLmdldCggdHJ5aW5nTG9jYWxlLCBtZXNzYWdlS2V5ICk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBtZXNzYWdlICkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gbWVzc2FnZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRsb2NhbGVQYXJ0SW5kZXgtLTtcclxuXHRcdFx0XHR9IHdoaWxlICggbG9jYWxlUGFydEluZGV4ICk7XHJcblxyXG5cdFx0XHRcdGlmICggbG9jYWxlID09PSAnZW4nICkge1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRsb2NhbGUgPSAoICQuaTE4bi5mYWxsYmFja3NbIHRoaXMubG9jYWxlIF0gJiZcclxuXHRcdFx0XHRcdFx0JC5pMThuLmZhbGxiYWNrc1sgdGhpcy5sb2NhbGUgXVsgZmFsbGJhY2tJbmRleCBdICkgfHxcclxuXHRcdFx0XHRcdFx0dGhpcy5vcHRpb25zLmZhbGxiYWNrTG9jYWxlO1xyXG5cdFx0XHRcdCQuaTE4bi5sb2coICdUcnlpbmcgZmFsbGJhY2sgbG9jYWxlIGZvciAnICsgdGhpcy5sb2NhbGUgKyAnOiAnICsgbG9jYWxlICsgJyAoJyArIG1lc3NhZ2VLZXkgKyAnKScgKTtcclxuXHJcblx0XHRcdFx0ZmFsbGJhY2tJbmRleCsrO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBrZXkgbm90IGZvdW5kXHJcblx0XHRcdHJldHVybiAnJztcclxuXHRcdH0sXHJcblxyXG5cdFx0LypcclxuXHRcdCAqIERlc3Ryb3kgdGhlIGkxOG4gaW5zdGFuY2UuXHJcblx0XHQgKi9cclxuXHRcdGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0JC5yZW1vdmVEYXRhKCBkb2N1bWVudCwgJ2kxOG4nICk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogR2VuZXJhbCBtZXNzYWdlIGxvYWRpbmcgQVBJIFRoaXMgY2FuIHRha2UgYSBVUkwgc3RyaW5nIGZvclxyXG5cdFx0ICogdGhlIGpzb24gZm9ybWF0dGVkIG1lc3NhZ2VzLiBFeGFtcGxlOlxyXG5cdFx0ICogPGNvZGU+bG9hZCgncGF0aC90by9hbGxfbG9jYWxpemF0aW9ucy5qc29uJyk7PC9jb2RlPlxyXG5cdFx0ICpcclxuXHRcdCAqIFRvIGxvYWQgYSBsb2NhbGl6YXRpb24gZmlsZSBmb3IgYSBsb2NhbGU6XHJcblx0XHQgKiA8Y29kZT5cclxuXHRcdCAqIGxvYWQoJ3BhdGgvdG8vZGUtbWVzc2FnZXMuanNvbicsICdkZScgKTtcclxuXHRcdCAqIDwvY29kZT5cclxuXHRcdCAqXHJcblx0XHQgKiBUbyBsb2FkIGEgbG9jYWxpemF0aW9uIGZpbGUgZnJvbSBhIGRpcmVjdG9yeTpcclxuXHRcdCAqIDxjb2RlPlxyXG5cdFx0ICogbG9hZCgncGF0aC90by9pMThuL2RpcmVjdG9yeScsICdkZScgKTtcclxuXHRcdCAqIDwvY29kZT5cclxuXHRcdCAqIFRoZSBhYm92ZSBtZXRob2QgaGFzIHRoZSBhZHZhbnRhZ2Ugb2YgZmFsbGJhY2sgcmVzb2x1dGlvbi5cclxuXHRcdCAqIGllLCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgbG9hZCB0aGUgZmFsbGJhY2sgbG9jYWxlcyBmb3IgZGUuXHJcblx0XHQgKiBGb3IgbW9zdCB1c2VjYXNlcywgdGhpcyBpcyB0aGUgcmVjb21tZW5kZWQgbWV0aG9kLlxyXG5cdFx0ICogSXQgaXMgb3B0aW9uYWwgdG8gaGF2ZSB0cmFpbGluZyBzbGFzaCBhdCBlbmQuXHJcblx0XHQgKlxyXG5cdFx0ICogQSBkYXRhIG9iamVjdCBjb250YWluaW5nIG1lc3NhZ2Uga2V5LSBtZXNzYWdlIHRyYW5zbGF0aW9uIG1hcHBpbmdzXHJcblx0XHQgKiBjYW4gYWxzbyBiZSBwYXNzZWQuIEV4YW1wbGU6XHJcblx0XHQgKiA8Y29kZT5cclxuXHRcdCAqIGxvYWQoIHsgJ2hlbGxvJyA6ICdIZWxsbycgfSwgb3B0aW9uYWxMb2NhbGUgKTtcclxuXHRcdCAqIDwvY29kZT5cclxuXHRcdCAqXHJcblx0XHQgKiBBIHNvdXJjZSBtYXAgY29udGFpbmluZyBrZXktdmFsdWUgcGFpciBvZiBsYW5ndWFnZW5hbWUgYW5kIGxvY2F0aW9uc1xyXG5cdFx0ICogY2FuIGFsc28gYmUgcGFzc2VkLiBFeGFtcGxlOlxyXG5cdFx0ICogPGNvZGU+XHJcblx0XHQgKiBsb2FkKCB7XHJcblx0XHQgKiBibjogJ2kxOG4vYm4uanNvbicsXHJcblx0XHQgKiBoZTogJ2kxOG4vaGUuanNvbicsXHJcblx0XHQgKiBlbjogJ2kxOG4vZW4uanNvbidcclxuXHRcdCAqIH0gKVxyXG5cdFx0ICogPC9jb2RlPlxyXG5cdFx0ICpcclxuXHRcdCAqIElmIHRoZSBkYXRhIGFyZ3VtZW50IGlzIG51bGwvdW5kZWZpbmVkL2ZhbHNlLFxyXG5cdFx0ICogYWxsIGNhY2hlZCBtZXNzYWdlcyBmb3IgdGhlIGkxOG4gaW5zdGFuY2Ugd2lsbCBnZXQgcmVzZXQuXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzb3VyY2VcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbGUgTGFuZ3VhZ2UgdGFnXHJcblx0XHQgKiBAcmV0dXJuIHtqUXVlcnkuUHJvbWlzZX1cclxuXHRcdCAqL1xyXG5cdFx0bG9hZDogZnVuY3Rpb24gKCBzb3VyY2UsIGxvY2FsZSApIHtcclxuXHRcdFx0dmFyIGZhbGxiYWNrTG9jYWxlcywgbG9jSW5kZXgsIGZhbGxiYWNrTG9jYWxlLCBzb3VyY2VNYXAgPSB7fTtcclxuXHRcdFx0aWYgKCAhc291cmNlICYmICFsb2NhbGUgKSB7XHJcblx0XHRcdFx0c291cmNlID0gJ2kxOG4vJyArICQuaTE4bigpLmxvY2FsZSArICcuanNvbic7XHJcblx0XHRcdFx0bG9jYWxlID0gJC5pMThuKCkubG9jYWxlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICggdHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycgJiZcclxuXHRcdFx0XHQvLyBzb3VyY2UgZXh0ZW5zaW9uIHNob3VsZCBiZSBqc29uLCBidXQgY2FuIGhhdmUgcXVlcnkgcGFyYW1zIGFmdGVyIHRoYXQuXHJcblx0XHRcdFx0c291cmNlLnNwbGl0KCAnPycgKVsgMCBdLnNwbGl0KCAnLicgKS5wb3AoKSAhPT0gJ2pzb24nXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdC8vIExvYWQgc3BlY2lmaWVkIGxvY2FsZSB0aGVuIGNoZWNrIGZvciBmYWxsYmFja3Mgd2hlbiBkaXJlY3RvcnkgaXNcclxuXHRcdFx0XHQvLyBzcGVjaWZpZWQgaW4gbG9hZCgpXHJcblx0XHRcdFx0c291cmNlTWFwWyBsb2NhbGUgXSA9IHNvdXJjZSArICcvJyArIGxvY2FsZSArICcuanNvbic7XHJcblx0XHRcdFx0ZmFsbGJhY2tMb2NhbGVzID0gKCAkLmkxOG4uZmFsbGJhY2tzWyBsb2NhbGUgXSB8fCBbXSApXHJcblx0XHRcdFx0XHQuY29uY2F0KCB0aGlzLm9wdGlvbnMuZmFsbGJhY2tMb2NhbGUgKTtcclxuXHRcdFx0XHRmb3IgKCBsb2NJbmRleCA9IDA7IGxvY0luZGV4IDwgZmFsbGJhY2tMb2NhbGVzLmxlbmd0aDsgbG9jSW5kZXgrKyApIHtcclxuXHRcdFx0XHRcdGZhbGxiYWNrTG9jYWxlID0gZmFsbGJhY2tMb2NhbGVzWyBsb2NJbmRleCBdO1xyXG5cdFx0XHRcdFx0c291cmNlTWFwWyBmYWxsYmFja0xvY2FsZSBdID0gc291cmNlICsgJy8nICsgZmFsbGJhY2tMb2NhbGUgKyAnLmpzb24nO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5sb2FkKCBzb3VyY2VNYXAgKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5tZXNzYWdlU3RvcmUubG9hZCggc291cmNlLCBsb2NhbGUgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBEb2VzIHBhcmFtZXRlciBhbmQgbWFnaWMgd29yZCBzdWJzdGl0dXRpb24uXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBNZXNzYWdlIGtleVxyXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gcGFyYW1ldGVycyBNZXNzYWdlIHBhcmFtZXRlcnNcclxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ31cclxuXHRcdCAqL1xyXG5cdFx0cGFyc2U6IGZ1bmN0aW9uICgga2V5LCBwYXJhbWV0ZXJzICkge1xyXG5cdFx0XHR2YXIgbWVzc2FnZSA9IHRoaXMubG9jYWxpemUoIGtleSApO1xyXG5cdFx0XHQvLyBGSVhNRTogVGhpcyBjaGFuZ2VzIHRoZSBzdGF0ZSBvZiB0aGUgSTE4TiBvYmplY3QsXHJcblx0XHRcdC8vIHNob3VsZCBwcm9iYWJseSBub3QgY2hhbmdlIHRoZSAndGhpcy5wYXJzZXInIGJ1dCBqdXN0XHJcblx0XHRcdC8vIHBhc3MgaXQgdG8gdGhlIHBhcnNlci5cclxuXHRcdFx0dGhpcy5wYXJzZXIubGFuZ3VhZ2UgPSAkLmkxOG4ubGFuZ3VhZ2VzWyAkLmkxOG4oKS5sb2NhbGUgXSB8fCAkLmkxOG4ubGFuZ3VhZ2VzWyAnZGVmYXVsdCcgXTtcclxuXHRcdFx0aWYgKCBtZXNzYWdlID09PSAnJyApIHtcclxuXHRcdFx0XHRtZXNzYWdlID0ga2V5O1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzLnBhcnNlci5wYXJzZSggbWVzc2FnZSwgcGFyYW1ldGVycyApO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFByb2Nlc3MgYSBtZXNzYWdlIGZyb20gdGhlICQuSTE4TiBpbnN0YW5jZVxyXG5cdCAqIGZvciB0aGUgY3VycmVudCBkb2N1bWVudCwgc3RvcmVkIGluIGpRdWVyeS5kYXRhKGRvY3VtZW50KS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgS2V5IG9mIHRoZSBtZXNzYWdlLlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbTEgW3BhcmFtLi4uXSBWYXJpYWRpYyBsaXN0IG9mIHBhcmFtZXRlcnMgZm9yIHtrZXl9LlxyXG5cdCAqIEByZXR1cm4ge3N0cmluZ3wkLkkxOE59IFBhcnNlZCBtZXNzYWdlLCBvciBpZiBubyBrZXkgd2FzIGdpdmVuXHJcblx0ICogdGhlIGluc3RhbmNlIG9mICQuSTE4TiBpcyByZXR1cm5lZC5cclxuXHQgKi9cclxuXHQkLmkxOG4gPSBmdW5jdGlvbiAoIGtleSwgcGFyYW0xICkge1xyXG5cdFx0dmFyIHBhcmFtZXRlcnMsXHJcblx0XHRcdGkxOG4gPSAkLmRhdGEoIGRvY3VtZW50LCAnaTE4bicgKSxcclxuXHRcdFx0b3B0aW9ucyA9IHR5cGVvZiBrZXkgPT09ICdvYmplY3QnICYmIGtleTtcclxuXHJcblx0XHQvLyBJZiB0aGUgbG9jYWxlIG9wdGlvbiBmb3IgdGhpcyBjYWxsIGlzIGRpZmZlcmVudCB0aGVuIHRoZSBzZXR1cCBzbyBmYXIsXHJcblx0XHQvLyB1cGRhdGUgaXQgYXV0b21hdGljYWxseS4gVGhpcyBkb2Vzbid0IGp1c3QgY2hhbmdlIHRoZSBjb250ZXh0IGZvciB0aGlzXHJcblx0XHQvLyBjYWxsIGJ1dCBmb3IgYWxsIGZ1dHVyZSBjYWxsIGFzIHdlbGwuXHJcblx0XHQvLyBJZiB0aGVyZSBpcyBubyBpMThuIHNldHVwIHlldCwgZG9uJ3QgZG8gdGhpcy4gSXQgd2lsbCBiZSB0YWtlbiBjYXJlIG9mXHJcblx0XHQvLyBieSB0aGUgYG5ldyBJMThOYCBjb25zdHJ1Y3Rpb24gYmVsb3cuXHJcblx0XHQvLyBOT1RFOiBJdCBzaG91bGQgb25seSBjaGFuZ2UgbGFuZ3VhZ2UgZm9yIHRoaXMgb25lIGNhbGwuXHJcblx0XHQvLyBUaGVuIGNhY2hlIGluc3RhbmNlcyBvZiBJMThOIHNvbWV3aGVyZS5cclxuXHRcdGlmICggb3B0aW9ucyAmJiBvcHRpb25zLmxvY2FsZSAmJiBpMThuICYmIGkxOG4ubG9jYWxlICE9PSBvcHRpb25zLmxvY2FsZSApIHtcclxuXHRcdFx0aTE4bi5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoICFpMThuICkge1xyXG5cdFx0XHRpMThuID0gbmV3IEkxOE4oIG9wdGlvbnMgKTtcclxuXHRcdFx0JC5kYXRhKCBkb2N1bWVudCwgJ2kxOG4nLCBpMThuICk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCB0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyApIHtcclxuXHRcdFx0aWYgKCBwYXJhbTEgIT09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0XHRwYXJhbWV0ZXJzID0gc2xpY2UuY2FsbCggYXJndW1lbnRzLCAxICk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cGFyYW1ldGVycyA9IFtdO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gaTE4bi5wYXJzZSgga2V5LCBwYXJhbWV0ZXJzICk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyBGSVhNRTogcmVtb3ZlIHRoaXMgZmVhdHVyZS9idWcuXHJcblx0XHRcdHJldHVybiBpMThuO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdCQuZm4uaTE4biA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHZhciBpMThuID0gJC5kYXRhKCBkb2N1bWVudCwgJ2kxOG4nICk7XHJcblxyXG5cdFx0aWYgKCAhaTE4biApIHtcclxuXHRcdFx0aTE4biA9IG5ldyBJMThOKCk7XHJcblx0XHRcdCQuZGF0YSggZG9jdW1lbnQsICdpMThuJywgaTE4biApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gJCggdGhpcyApLFxyXG5cdFx0XHRcdG1lc3NhZ2VLZXkgPSAkdGhpcy5kYXRhKCAnaTE4bicgKSxcclxuXHRcdFx0XHRsQnJhY2tldCwgckJyYWNrZXQsIHR5cGUsIGtleTtcclxuXHJcblx0XHRcdGlmICggbWVzc2FnZUtleSApIHtcclxuXHRcdFx0XHRsQnJhY2tldCA9IG1lc3NhZ2VLZXkuaW5kZXhPZiggJ1snICk7XHJcblx0XHRcdFx0ckJyYWNrZXQgPSBtZXNzYWdlS2V5LmluZGV4T2YoICddJyApO1xyXG5cdFx0XHRcdGlmICggbEJyYWNrZXQgIT09IC0xICYmIHJCcmFja2V0ICE9PSAtMSAmJiBsQnJhY2tldCA8IHJCcmFja2V0ICkge1xyXG5cdFx0XHRcdFx0dHlwZSA9IG1lc3NhZ2VLZXkuc2xpY2UoIGxCcmFja2V0ICsgMSwgckJyYWNrZXQgKTtcclxuXHRcdFx0XHRcdGtleSA9IG1lc3NhZ2VLZXkuc2xpY2UoIHJCcmFja2V0ICsgMSApO1xyXG5cdFx0XHRcdFx0aWYgKCB0eXBlID09PSAnaHRtbCcgKSB7XHJcblx0XHRcdFx0XHRcdCR0aGlzLmh0bWwoIGkxOG4ucGFyc2UoIGtleSApICk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQkdGhpcy5hdHRyKCB0eXBlLCBpMThuLnBhcnNlKCBrZXkgKSApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkdGhpcy50ZXh0KCBpMThuLnBhcnNlKCBtZXNzYWdlS2V5ICkgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JHRoaXMuZmluZCggJ1tkYXRhLWkxOG5dJyApLmkxOG4oKTtcclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cdH07XHJcblxyXG5cdGZ1bmN0aW9uIGdldERlZmF1bHRMb2NhbGUoKSB7XHJcblx0XHR2YXIgbmF2LCBsb2NhbGUgPSAkKCAnaHRtbCcgKS5hdHRyKCAnbGFuZycgKTtcclxuXHJcblx0XHRpZiAoICFsb2NhbGUgKSB7XHJcblx0XHRcdGlmICggdHlwZW9mIHdpbmRvdy5uYXZpZ2F0b3IgIT09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0XHRuYXYgPSB3aW5kb3cubmF2aWdhdG9yO1xyXG5cdFx0XHRcdGxvY2FsZSA9IG5hdi5sYW5ndWFnZSB8fCBuYXYudXNlckxhbmd1YWdlIHx8ICcnO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGxvY2FsZSA9ICcnO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbG9jYWxlO1xyXG5cdH1cclxuXHJcblx0JC5pMThuLmxhbmd1YWdlcyA9IHt9O1xyXG5cdCQuaTE4bi5tZXNzYWdlU3RvcmUgPSAkLmkxOG4ubWVzc2FnZVN0b3JlIHx8IHt9O1xyXG5cdCQuaTE4bi5wYXJzZXIgPSB7XHJcblx0XHQvLyBUaGUgZGVmYXVsdCBwYXJzZXIgb25seSBoYW5kbGVzIHZhcmlhYmxlIHN1YnN0aXR1dGlvblxyXG5cdFx0cGFyc2U6IGZ1bmN0aW9uICggbWVzc2FnZSwgcGFyYW1ldGVycyApIHtcclxuXHRcdFx0cmV0dXJuIG1lc3NhZ2UucmVwbGFjZSggL1xcJChcXGQrKS9nLCBmdW5jdGlvbiAoIHN0ciwgbWF0Y2ggKSB7XHJcblx0XHRcdFx0dmFyIGluZGV4ID0gcGFyc2VJbnQoIG1hdGNoLCAxMCApIC0gMTtcclxuXHRcdFx0XHRyZXR1cm4gcGFyYW1ldGVyc1sgaW5kZXggXSAhPT0gdW5kZWZpbmVkID8gcGFyYW1ldGVyc1sgaW5kZXggXSA6ICckJyArIG1hdGNoO1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9LFxyXG5cdFx0ZW1pdHRlcjoge31cclxuXHR9O1xyXG5cdCQuaTE4bi5mYWxsYmFja3MgPSB7fTtcclxuXHQkLmkxOG4uZGVidWcgPSBmYWxzZTtcclxuXHQkLmkxOG4ubG9nID0gZnVuY3Rpb24gKCAvKiBhcmd1bWVudHMgKi8gKSB7XHJcblx0XHRpZiAoIHdpbmRvdy5jb25zb2xlICYmICQuaTE4bi5kZWJ1ZyApIHtcclxuXHRcdFx0d2luZG93LmNvbnNvbGUubG9nLmFwcGx5KCB3aW5kb3cuY29uc29sZSwgYXJndW1lbnRzICk7XHJcblx0XHR9XHJcblx0fTtcclxuXHQvKiBTdGF0aWMgbWVtYmVycyAqL1xyXG5cdEkxOE4uZGVmYXVsdHMgPSB7XHJcblx0XHRsb2NhbGU6IGdldERlZmF1bHRMb2NhbGUoKSxcclxuXHRcdGZhbGxiYWNrTG9jYWxlOiAnZW4nLFxyXG5cdFx0cGFyc2VyOiAkLmkxOG4ucGFyc2VyLFxyXG5cdFx0bWVzc2FnZVN0b3JlOiAkLmkxOG4ubWVzc2FnZVN0b3JlXHJcblx0fTtcclxuXHJcblx0Ly8gRXhwb3NlIGNvbnN0cnVjdG9yXHJcblx0JC5pMThuLmNvbnN0cnVjdG9yID0gSTE4TjtcclxufSggalF1ZXJ5ICkgKTsiLCIvKiBnbG9iYWwgcGx1cmFsUnVsZVBhcnNlciAqL1xyXG4oIGZ1bmN0aW9uICggJCApIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdC8vIGpzY3M6ZGlzYWJsZVxyXG5cdHZhciBsYW5ndWFnZSA9IHtcclxuXHRcdC8vIENMRFIgcGx1cmFsIHJ1bGVzIGdlbmVyYXRlZCB1c2luZ1xyXG5cdFx0Ly8gbGlicy9DTERSUGx1cmFsUnVsZVBhcnNlci90b29scy9QbHVyYWxYTUwySlNPTi5odG1sXHJcblx0XHRwbHVyYWxSdWxlczoge1xyXG5cdFx0XHRhazoge1xyXG5cdFx0XHRcdG9uZTogJ24gPSAwLi4xJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhbToge1xyXG5cdFx0XHRcdG9uZTogJ2kgPSAwIG9yIG4gPSAxJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhcjoge1xyXG5cdFx0XHRcdHplcm86ICduID0gMCcsXHJcblx0XHRcdFx0b25lOiAnbiA9IDEnLFxyXG5cdFx0XHRcdHR3bzogJ24gPSAyJyxcclxuXHRcdFx0XHRmZXc6ICduICUgMTAwID0gMy4uMTAnLFxyXG5cdFx0XHRcdG1hbnk6ICduICUgMTAwID0gMTEuLjk5J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhcnM6IHtcclxuXHRcdFx0XHR6ZXJvOiAnbiA9IDAnLFxyXG5cdFx0XHRcdG9uZTogJ24gPSAxJyxcclxuXHRcdFx0XHR0d286ICduID0gMicsXHJcblx0XHRcdFx0ZmV3OiAnbiAlIDEwMCA9IDMuLjEwJyxcclxuXHRcdFx0XHRtYW55OiAnbiAlIDEwMCA9IDExLi45OSdcclxuXHRcdFx0fSxcclxuXHRcdFx0YXM6IHtcclxuXHRcdFx0XHRvbmU6ICdpID0gMCBvciBuID0gMSdcclxuXHRcdFx0fSxcclxuXHRcdFx0YmU6IHtcclxuXHRcdFx0XHRvbmU6ICduICUgMTAgPSAxIGFuZCBuICUgMTAwICE9IDExJyxcclxuXHRcdFx0XHRmZXc6ICduICUgMTAgPSAyLi40IGFuZCBuICUgMTAwICE9IDEyLi4xNCcsXHJcblx0XHRcdFx0bWFueTogJ24gJSAxMCA9IDAgb3IgbiAlIDEwID0gNS4uOSBvciBuICUgMTAwID0gMTEuLjE0J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRiaDoge1xyXG5cdFx0XHRcdG9uZTogJ24gPSAwLi4xJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRibjoge1xyXG5cdFx0XHRcdG9uZTogJ2kgPSAwIG9yIG4gPSAxJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRicjoge1xyXG5cdFx0XHRcdG9uZTogJ24gJSAxMCA9IDEgYW5kIG4gJSAxMDAgIT0gMTEsNzEsOTEnLFxyXG5cdFx0XHRcdHR3bzogJ24gJSAxMCA9IDIgYW5kIG4gJSAxMDAgIT0gMTIsNzIsOTInLFxyXG5cdFx0XHRcdGZldzogJ24gJSAxMCA9IDMuLjQsOSBhbmQgbiAlIDEwMCAhPSAxMC4uMTksNzAuLjc5LDkwLi45OScsXHJcblx0XHRcdFx0bWFueTogJ24gIT0gMCBhbmQgbiAlIDEwMDAwMDAgPSAwJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRiczoge1xyXG5cdFx0XHRcdG9uZTogJ3YgPSAwIGFuZCBpICUgMTAgPSAxIGFuZCBpICUgMTAwICE9IDExIG9yIGYgJSAxMCA9IDEgYW5kIGYgJSAxMDAgIT0gMTEnLFxyXG5cdFx0XHRcdGZldzogJ3YgPSAwIGFuZCBpICUgMTAgPSAyLi40IGFuZCBpICUgMTAwICE9IDEyLi4xNCBvciBmICUgMTAgPSAyLi40IGFuZCBmICUgMTAwICE9IDEyLi4xNCdcclxuXHRcdFx0fSxcclxuXHRcdFx0Y3M6IHtcclxuXHRcdFx0XHRvbmU6ICdpID0gMSBhbmQgdiA9IDAnLFxyXG5cdFx0XHRcdGZldzogJ2kgPSAyLi40IGFuZCB2ID0gMCcsXHJcblx0XHRcdFx0bWFueTogJ3YgIT0gMCdcclxuXHRcdFx0fSxcclxuXHRcdFx0Y3k6IHtcclxuXHRcdFx0XHR6ZXJvOiAnbiA9IDAnLFxyXG5cdFx0XHRcdG9uZTogJ24gPSAxJyxcclxuXHRcdFx0XHR0d286ICduID0gMicsXHJcblx0XHRcdFx0ZmV3OiAnbiA9IDMnLFxyXG5cdFx0XHRcdG1hbnk6ICduID0gNidcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGE6IHtcclxuXHRcdFx0XHRvbmU6ICduID0gMSBvciB0ICE9IDAgYW5kIGkgPSAwLDEnXHJcblx0XHRcdH0sXHJcblx0XHRcdGRzYjoge1xyXG5cdFx0XHRcdG9uZTogJ3YgPSAwIGFuZCBpICUgMTAwID0gMSBvciBmICUgMTAwID0gMScsXHJcblx0XHRcdFx0dHdvOiAndiA9IDAgYW5kIGkgJSAxMDAgPSAyIG9yIGYgJSAxMDAgPSAyJyxcclxuXHRcdFx0XHRmZXc6ICd2ID0gMCBhbmQgaSAlIDEwMCA9IDMuLjQgb3IgZiAlIDEwMCA9IDMuLjQnXHJcblx0XHRcdH0sXHJcblx0XHRcdGZhOiB7XHJcblx0XHRcdFx0b25lOiAnaSA9IDAgb3IgbiA9IDEnXHJcblx0XHRcdH0sXHJcblx0XHRcdGZmOiB7XHJcblx0XHRcdFx0b25lOiAnaSA9IDAsMSdcclxuXHRcdFx0fSxcclxuXHRcdFx0ZmlsOiB7XHJcblx0XHRcdFx0b25lOiAndiA9IDAgYW5kIGkgPSAxLDIsMyBvciB2ID0gMCBhbmQgaSAlIDEwICE9IDQsNiw5IG9yIHYgIT0gMCBhbmQgZiAlIDEwICE9IDQsNiw5J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmcjoge1xyXG5cdFx0XHRcdG9uZTogJ2kgPSAwLDEnXHJcblx0XHRcdH0sXHJcblx0XHRcdGdhOiB7XHJcblx0XHRcdFx0b25lOiAnbiA9IDEnLFxyXG5cdFx0XHRcdHR3bzogJ24gPSAyJyxcclxuXHRcdFx0XHRmZXc6ICduID0gMy4uNicsXHJcblx0XHRcdFx0bWFueTogJ24gPSA3Li4xMCdcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2Q6IHtcclxuXHRcdFx0XHRvbmU6ICduID0gMSwxMScsXHJcblx0XHRcdFx0dHdvOiAnbiA9IDIsMTInLFxyXG5cdFx0XHRcdGZldzogJ24gPSAzLi4xMCwxMy4uMTknXHJcblx0XHRcdH0sXHJcblx0XHRcdGd1OiB7XHJcblx0XHRcdFx0b25lOiAnaSA9IDAgb3IgbiA9IDEnXHJcblx0XHRcdH0sXHJcblx0XHRcdGd1dzoge1xyXG5cdFx0XHRcdG9uZTogJ24gPSAwLi4xJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRndjoge1xyXG5cdFx0XHRcdG9uZTogJ3YgPSAwIGFuZCBpICUgMTAgPSAxJyxcclxuXHRcdFx0XHR0d286ICd2ID0gMCBhbmQgaSAlIDEwID0gMicsXHJcblx0XHRcdFx0ZmV3OiAndiA9IDAgYW5kIGkgJSAxMDAgPSAwLDIwLDQwLDYwLDgwJyxcclxuXHRcdFx0XHRtYW55OiAndiAhPSAwJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRoZToge1xyXG5cdFx0XHRcdG9uZTogJ2kgPSAxIGFuZCB2ID0gMCcsXHJcblx0XHRcdFx0dHdvOiAnaSA9IDIgYW5kIHYgPSAwJyxcclxuXHRcdFx0XHRtYW55OiAndiA9IDAgYW5kIG4gIT0gMC4uMTAgYW5kIG4gJSAxMCA9IDAnXHJcblx0XHRcdH0sXHJcblx0XHRcdGhpOiB7XHJcblx0XHRcdFx0b25lOiAnaSA9IDAgb3IgbiA9IDEnXHJcblx0XHRcdH0sXHJcblx0XHRcdGhyOiB7XHJcblx0XHRcdFx0b25lOiAndiA9IDAgYW5kIGkgJSAxMCA9IDEgYW5kIGkgJSAxMDAgIT0gMTEgb3IgZiAlIDEwID0gMSBhbmQgZiAlIDEwMCAhPSAxMScsXHJcblx0XHRcdFx0ZmV3OiAndiA9IDAgYW5kIGkgJSAxMCA9IDIuLjQgYW5kIGkgJSAxMDAgIT0gMTIuLjE0IG9yIGYgJSAxMCA9IDIuLjQgYW5kIGYgJSAxMDAgIT0gMTIuLjE0J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRoc2I6IHtcclxuXHRcdFx0XHRvbmU6ICd2ID0gMCBhbmQgaSAlIDEwMCA9IDEgb3IgZiAlIDEwMCA9IDEnLFxyXG5cdFx0XHRcdHR3bzogJ3YgPSAwIGFuZCBpICUgMTAwID0gMiBvciBmICUgMTAwID0gMicsXHJcblx0XHRcdFx0ZmV3OiAndiA9IDAgYW5kIGkgJSAxMDAgPSAzLi40IG9yIGYgJSAxMDAgPSAzLi40J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRoeToge1xyXG5cdFx0XHRcdG9uZTogJ2kgPSAwLDEnXHJcblx0XHRcdH0sXHJcblx0XHRcdGlzOiB7XHJcblx0XHRcdFx0b25lOiAndCA9IDAgYW5kIGkgJSAxMCA9IDEgYW5kIGkgJSAxMDAgIT0gMTEgb3IgdCAhPSAwJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRpdToge1xyXG5cdFx0XHRcdG9uZTogJ24gPSAxJyxcclxuXHRcdFx0XHR0d286ICduID0gMidcclxuXHRcdFx0fSxcclxuXHRcdFx0aXc6IHtcclxuXHRcdFx0XHRvbmU6ICdpID0gMSBhbmQgdiA9IDAnLFxyXG5cdFx0XHRcdHR3bzogJ2kgPSAyIGFuZCB2ID0gMCcsXHJcblx0XHRcdFx0bWFueTogJ3YgPSAwIGFuZCBuICE9IDAuLjEwIGFuZCBuICUgMTAgPSAwJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRrYWI6IHtcclxuXHRcdFx0XHRvbmU6ICdpID0gMCwxJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRrbjoge1xyXG5cdFx0XHRcdG9uZTogJ2kgPSAwIG9yIG4gPSAxJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRrdzoge1xyXG5cdFx0XHRcdG9uZTogJ24gPSAxJyxcclxuXHRcdFx0XHR0d286ICduID0gMidcclxuXHRcdFx0fSxcclxuXHRcdFx0bGFnOiB7XHJcblx0XHRcdFx0emVybzogJ24gPSAwJyxcclxuXHRcdFx0XHRvbmU6ICdpID0gMCwxIGFuZCBuICE9IDAnXHJcblx0XHRcdH0sXHJcblx0XHRcdGxuOiB7XHJcblx0XHRcdFx0b25lOiAnbiA9IDAuLjEnXHJcblx0XHRcdH0sXHJcblx0XHRcdGx0OiB7XHJcblx0XHRcdFx0b25lOiAnbiAlIDEwID0gMSBhbmQgbiAlIDEwMCAhPSAxMS4uMTknLFxyXG5cdFx0XHRcdGZldzogJ24gJSAxMCA9IDIuLjkgYW5kIG4gJSAxMDAgIT0gMTEuLjE5JyxcclxuXHRcdFx0XHRtYW55OiAnZiAhPSAwJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRsdjoge1xyXG5cdFx0XHRcdHplcm86ICduICUgMTAgPSAwIG9yIG4gJSAxMDAgPSAxMS4uMTkgb3IgdiA9IDIgYW5kIGYgJSAxMDAgPSAxMS4uMTknLFxyXG5cdFx0XHRcdG9uZTogJ24gJSAxMCA9IDEgYW5kIG4gJSAxMDAgIT0gMTEgb3IgdiA9IDIgYW5kIGYgJSAxMCA9IDEgYW5kIGYgJSAxMDAgIT0gMTEgb3IgdiAhPSAyIGFuZCBmICUgMTAgPSAxJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRtZzoge1xyXG5cdFx0XHRcdG9uZTogJ24gPSAwLi4xJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRtazoge1xyXG5cdFx0XHRcdG9uZTogJ3YgPSAwIGFuZCBpICUgMTAgPSAxIG9yIGYgJSAxMCA9IDEnXHJcblx0XHRcdH0sXHJcblx0XHRcdG1vOiB7XHJcblx0XHRcdFx0b25lOiAnaSA9IDEgYW5kIHYgPSAwJyxcclxuXHRcdFx0XHRmZXc6ICd2ICE9IDAgb3IgbiA9IDAgb3IgbiAhPSAxIGFuZCBuICUgMTAwID0gMS4uMTknXHJcblx0XHRcdH0sXHJcblx0XHRcdG1yOiB7XHJcblx0XHRcdFx0b25lOiAnaSA9IDAgb3IgbiA9IDEnXHJcblx0XHRcdH0sXHJcblx0XHRcdG10OiB7XHJcblx0XHRcdFx0b25lOiAnbiA9IDEnLFxyXG5cdFx0XHRcdGZldzogJ24gPSAwIG9yIG4gJSAxMDAgPSAyLi4xMCcsXHJcblx0XHRcdFx0bWFueTogJ24gJSAxMDAgPSAxMS4uMTknXHJcblx0XHRcdH0sXHJcblx0XHRcdG5hcToge1xyXG5cdFx0XHRcdG9uZTogJ24gPSAxJyxcclxuXHRcdFx0XHR0d286ICduID0gMidcclxuXHRcdFx0fSxcclxuXHRcdFx0bnNvOiB7XHJcblx0XHRcdFx0b25lOiAnbiA9IDAuLjEnXHJcblx0XHRcdH0sXHJcblx0XHRcdHBhOiB7XHJcblx0XHRcdFx0b25lOiAnbiA9IDAuLjEnXHJcblx0XHRcdH0sXHJcblx0XHRcdHBsOiB7XHJcblx0XHRcdFx0b25lOiAnaSA9IDEgYW5kIHYgPSAwJyxcclxuXHRcdFx0XHRmZXc6ICd2ID0gMCBhbmQgaSAlIDEwID0gMi4uNCBhbmQgaSAlIDEwMCAhPSAxMi4uMTQnLFxyXG5cdFx0XHRcdG1hbnk6ICd2ID0gMCBhbmQgaSAhPSAxIGFuZCBpICUgMTAgPSAwLi4xIG9yIHYgPSAwIGFuZCBpICUgMTAgPSA1Li45IG9yIHYgPSAwIGFuZCBpICUgMTAwID0gMTIuLjE0J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRwcmc6IHtcclxuXHRcdFx0XHR6ZXJvOiAnbiAlIDEwID0gMCBvciBuICUgMTAwID0gMTEuLjE5IG9yIHYgPSAyIGFuZCBmICUgMTAwID0gMTEuLjE5JyxcclxuXHRcdFx0XHRvbmU6ICduICUgMTAgPSAxIGFuZCBuICUgMTAwICE9IDExIG9yIHYgPSAyIGFuZCBmICUgMTAgPSAxIGFuZCBmICUgMTAwICE9IDExIG9yIHYgIT0gMiBhbmQgZiAlIDEwID0gMSdcclxuXHRcdFx0fSxcclxuXHRcdFx0cHQ6IHtcclxuXHRcdFx0XHRvbmU6ICdpID0gMC4uMSdcclxuXHRcdFx0fSxcclxuXHRcdFx0cm86IHtcclxuXHRcdFx0XHRvbmU6ICdpID0gMSBhbmQgdiA9IDAnLFxyXG5cdFx0XHRcdGZldzogJ3YgIT0gMCBvciBuID0gMCBvciBuICE9IDEgYW5kIG4gJSAxMDAgPSAxLi4xOSdcclxuXHRcdFx0fSxcclxuXHRcdFx0cnU6IHtcclxuXHRcdFx0XHRvbmU6ICd2ID0gMCBhbmQgaSAlIDEwID0gMSBhbmQgaSAlIDEwMCAhPSAxMScsXHJcblx0XHRcdFx0ZmV3OiAndiA9IDAgYW5kIGkgJSAxMCA9IDIuLjQgYW5kIGkgJSAxMDAgIT0gMTIuLjE0JyxcclxuXHRcdFx0XHRtYW55OiAndiA9IDAgYW5kIGkgJSAxMCA9IDAgb3IgdiA9IDAgYW5kIGkgJSAxMCA9IDUuLjkgb3IgdiA9IDAgYW5kIGkgJSAxMDAgPSAxMS4uMTQnXHJcblx0XHRcdH0sXHJcblx0XHRcdHNlOiB7XHJcblx0XHRcdFx0b25lOiAnbiA9IDEnLFxyXG5cdFx0XHRcdHR3bzogJ24gPSAyJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaDoge1xyXG5cdFx0XHRcdG9uZTogJ3YgPSAwIGFuZCBpICUgMTAgPSAxIGFuZCBpICUgMTAwICE9IDExIG9yIGYgJSAxMCA9IDEgYW5kIGYgJSAxMDAgIT0gMTEnLFxyXG5cdFx0XHRcdGZldzogJ3YgPSAwIGFuZCBpICUgMTAgPSAyLi40IGFuZCBpICUgMTAwICE9IDEyLi4xNCBvciBmICUgMTAgPSAyLi40IGFuZCBmICUgMTAwICE9IDEyLi4xNCdcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hpOiB7XHJcblx0XHRcdFx0b25lOiAnaSA9IDAgb3IgbiA9IDEnLFxyXG5cdFx0XHRcdGZldzogJ24gPSAyLi4xMCdcclxuXHRcdFx0fSxcclxuXHRcdFx0c2k6IHtcclxuXHRcdFx0XHRvbmU6ICduID0gMCwxIG9yIGkgPSAwIGFuZCBmID0gMSdcclxuXHRcdFx0fSxcclxuXHRcdFx0c2s6IHtcclxuXHRcdFx0XHRvbmU6ICdpID0gMSBhbmQgdiA9IDAnLFxyXG5cdFx0XHRcdGZldzogJ2kgPSAyLi40IGFuZCB2ID0gMCcsXHJcblx0XHRcdFx0bWFueTogJ3YgIT0gMCdcclxuXHRcdFx0fSxcclxuXHRcdFx0c2w6IHtcclxuXHRcdFx0XHRvbmU6ICd2ID0gMCBhbmQgaSAlIDEwMCA9IDEnLFxyXG5cdFx0XHRcdHR3bzogJ3YgPSAwIGFuZCBpICUgMTAwID0gMicsXHJcblx0XHRcdFx0ZmV3OiAndiA9IDAgYW5kIGkgJSAxMDAgPSAzLi40IG9yIHYgIT0gMCdcclxuXHRcdFx0fSxcclxuXHRcdFx0c21hOiB7XHJcblx0XHRcdFx0b25lOiAnbiA9IDEnLFxyXG5cdFx0XHRcdHR3bzogJ24gPSAyJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzbWk6IHtcclxuXHRcdFx0XHRvbmU6ICduID0gMScsXHJcblx0XHRcdFx0dHdvOiAnbiA9IDInXHJcblx0XHRcdH0sXHJcblx0XHRcdHNtajoge1xyXG5cdFx0XHRcdG9uZTogJ24gPSAxJyxcclxuXHRcdFx0XHR0d286ICduID0gMidcclxuXHRcdFx0fSxcclxuXHRcdFx0c21uOiB7XHJcblx0XHRcdFx0b25lOiAnbiA9IDEnLFxyXG5cdFx0XHRcdHR3bzogJ24gPSAyJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzbXM6IHtcclxuXHRcdFx0XHRvbmU6ICduID0gMScsXHJcblx0XHRcdFx0dHdvOiAnbiA9IDInXHJcblx0XHRcdH0sXHJcblx0XHRcdHNyOiB7XHJcblx0XHRcdFx0b25lOiAndiA9IDAgYW5kIGkgJSAxMCA9IDEgYW5kIGkgJSAxMDAgIT0gMTEgb3IgZiAlIDEwID0gMSBhbmQgZiAlIDEwMCAhPSAxMScsXHJcblx0XHRcdFx0ZmV3OiAndiA9IDAgYW5kIGkgJSAxMCA9IDIuLjQgYW5kIGkgJSAxMDAgIT0gMTIuLjE0IG9yIGYgJSAxMCA9IDIuLjQgYW5kIGYgJSAxMDAgIT0gMTIuLjE0J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aToge1xyXG5cdFx0XHRcdG9uZTogJ24gPSAwLi4xJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0bDoge1xyXG5cdFx0XHRcdG9uZTogJ3YgPSAwIGFuZCBpID0gMSwyLDMgb3IgdiA9IDAgYW5kIGkgJSAxMCAhPSA0LDYsOSBvciB2ICE9IDAgYW5kIGYgJSAxMCAhPSA0LDYsOSdcclxuXHRcdFx0fSxcclxuXHRcdFx0dHptOiB7XHJcblx0XHRcdFx0b25lOiAnbiA9IDAuLjEgb3IgbiA9IDExLi45OSdcclxuXHRcdFx0fSxcclxuXHRcdFx0dWs6IHtcclxuXHRcdFx0XHRvbmU6ICd2ID0gMCBhbmQgaSAlIDEwID0gMSBhbmQgaSAlIDEwMCAhPSAxMScsXHJcblx0XHRcdFx0ZmV3OiAndiA9IDAgYW5kIGkgJSAxMCA9IDIuLjQgYW5kIGkgJSAxMDAgIT0gMTIuLjE0JyxcclxuXHRcdFx0XHRtYW55OiAndiA9IDAgYW5kIGkgJSAxMCA9IDAgb3IgdiA9IDAgYW5kIGkgJSAxMCA9IDUuLjkgb3IgdiA9IDAgYW5kIGkgJSAxMDAgPSAxMS4uMTQnXHJcblx0XHRcdH0sXHJcblx0XHRcdHdhOiB7XHJcblx0XHRcdFx0b25lOiAnbiA9IDAuLjEnXHJcblx0XHRcdH0sXHJcblx0XHRcdHp1OiB7XHJcblx0XHRcdFx0b25lOiAnaSA9IDAgb3IgbiA9IDEnXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHQvLyBqc2NzOmVuYWJsZVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUGx1cmFsIGZvcm0gdHJhbnNmb3JtYXRpb25zLCBuZWVkZWQgZm9yIHNvbWUgbGFuZ3VhZ2VzLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7aW50ZWdlcn0gY291bnRcclxuXHRcdCAqICAgICAgICAgICAgTm9uLWxvY2FsaXplZCBxdWFudGlmaWVyXHJcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBmb3Jtc1xyXG5cdFx0ICogICAgICAgICAgICBMaXN0IG9mIHBsdXJhbCBmb3Jtc1xyXG5cdFx0ICogQHJldHVybiB7c3RyaW5nfSBDb3JyZWN0IGZvcm0gZm9yIHF1YW50aWZpZXIgaW4gdGhpcyBsYW5ndWFnZVxyXG5cdFx0ICovXHJcblx0XHRjb252ZXJ0UGx1cmFsOiBmdW5jdGlvbiAoIGNvdW50LCBmb3JtcyApIHtcclxuXHRcdFx0dmFyIHBsdXJhbFJ1bGVzLFxyXG5cdFx0XHRcdHBsdXJhbEZvcm1JbmRleCxcclxuXHRcdFx0XHRpbmRleCxcclxuXHRcdFx0XHRleHBsaWNpdFBsdXJhbFBhdHRlcm4gPSBuZXcgUmVnRXhwKCAnXFxcXGQrPScsICdpJyApLFxyXG5cdFx0XHRcdGZvcm1Db3VudCxcclxuXHRcdFx0XHRmb3JtO1xyXG5cclxuXHRcdFx0aWYgKCAhZm9ybXMgfHwgZm9ybXMubGVuZ3RoID09PSAwICkge1xyXG5cdFx0XHRcdHJldHVybiAnJztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gSGFuZGxlIGZvciBFeHBsaWNpdCAwPSAmIDE9IHZhbHVlc1xyXG5cdFx0XHRmb3IgKCBpbmRleCA9IDA7IGluZGV4IDwgZm9ybXMubGVuZ3RoOyBpbmRleCsrICkge1xyXG5cdFx0XHRcdGZvcm0gPSBmb3Jtc1sgaW5kZXggXTtcclxuXHRcdFx0XHRpZiAoIGV4cGxpY2l0UGx1cmFsUGF0dGVybi50ZXN0KCBmb3JtICkgKSB7XHJcblx0XHRcdFx0XHRmb3JtQ291bnQgPSBwYXJzZUludCggZm9ybS5zbGljZSggMCwgZm9ybS5pbmRleE9mKCAnPScgKSApLCAxMCApO1xyXG5cdFx0XHRcdFx0aWYgKCBmb3JtQ291bnQgPT09IGNvdW50ICkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gKCBmb3JtLnNsaWNlKCBmb3JtLmluZGV4T2YoICc9JyApICsgMSApICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRmb3Jtc1sgaW5kZXggXSA9IHVuZGVmaW5lZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZvcm1zID0gJC5tYXAoIGZvcm1zLCBmdW5jdGlvbiAoIGZvcm0gKSB7XHJcblx0XHRcdFx0aWYgKCBmb3JtICE9PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZm9ybTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHRcdHBsdXJhbFJ1bGVzID0gdGhpcy5wbHVyYWxSdWxlc1sgJC5pMThuKCkubG9jYWxlIF07XHJcblxyXG5cdFx0XHRpZiAoICFwbHVyYWxSdWxlcyApIHtcclxuXHRcdFx0XHQvLyBkZWZhdWx0IGZhbGxiYWNrLlxyXG5cdFx0XHRcdHJldHVybiAoIGNvdW50ID09PSAxICkgPyBmb3Jtc1sgMCBdIDogZm9ybXNbIDEgXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cGx1cmFsRm9ybUluZGV4ID0gdGhpcy5nZXRQbHVyYWxGb3JtKCBjb3VudCwgcGx1cmFsUnVsZXMgKTtcclxuXHRcdFx0cGx1cmFsRm9ybUluZGV4ID0gTWF0aC5taW4oIHBsdXJhbEZvcm1JbmRleCwgZm9ybXMubGVuZ3RoIC0gMSApO1xyXG5cclxuXHRcdFx0cmV0dXJuIGZvcm1zWyBwbHVyYWxGb3JtSW5kZXggXTtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBGb3IgdGhlIG51bWJlciwgZ2V0IHRoZSBwbHVyYWwgZm9yIGluZGV4XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtpbnRlZ2VyfSBudW1iZXJcclxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBwbHVyYWxSdWxlc1xyXG5cdFx0ICogQHJldHVybiB7aW50ZWdlcn0gcGx1cmFsIGZvcm0gaW5kZXhcclxuXHRcdCAqL1xyXG5cdFx0Z2V0UGx1cmFsRm9ybTogZnVuY3Rpb24gKCBudW1iZXIsIHBsdXJhbFJ1bGVzICkge1xyXG5cdFx0XHR2YXIgaSxcclxuXHRcdFx0XHRwbHVyYWxGb3JtcyA9IFsgJ3plcm8nLCAnb25lJywgJ3R3bycsICdmZXcnLCAnbWFueScsICdvdGhlcicgXSxcclxuXHRcdFx0XHRwbHVyYWxGb3JtSW5kZXggPSAwO1xyXG5cclxuXHRcdFx0Zm9yICggaSA9IDA7IGkgPCBwbHVyYWxGb3Jtcy5sZW5ndGg7IGkrKyApIHtcclxuXHRcdFx0XHRpZiAoIHBsdXJhbFJ1bGVzWyBwbHVyYWxGb3Jtc1sgaSBdIF0gKSB7XHJcblx0XHRcdFx0XHRpZiAoIHBsdXJhbFJ1bGVQYXJzZXIoIHBsdXJhbFJ1bGVzWyBwbHVyYWxGb3Jtc1sgaSBdIF0sIG51bWJlciApICkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcGx1cmFsRm9ybUluZGV4O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHBsdXJhbEZvcm1JbmRleCsrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHBsdXJhbEZvcm1JbmRleDtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBDb252ZXJ0cyBhIG51bWJlciB1c2luZyBkaWdpdFRyYW5zZm9ybVRhYmxlLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBudW0gVmFsdWUgdG8gYmUgY29udmVydGVkXHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IGludGVnZXIgQ29udmVydCB0aGUgcmV0dXJuIHZhbHVlIHRvIGFuIGludGVnZXJcclxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ30gVGhlIG51bWJlciBjb252ZXJ0ZWQgaW50byBhIFN0cmluZy5cclxuXHRcdCAqL1xyXG5cdFx0Y29udmVydE51bWJlcjogZnVuY3Rpb24gKCBudW0sIGludGVnZXIgKSB7XHJcblx0XHRcdHZhciB0bXAsIGl0ZW0sIGksXHJcblx0XHRcdFx0dHJhbnNmb3JtVGFibGUsIG51bWJlclN0cmluZywgY29udmVydGVkTnVtYmVyO1xyXG5cclxuXHRcdFx0Ly8gU2V0IHRoZSB0YXJnZXQgVHJhbnNmb3JtIHRhYmxlOlxyXG5cdFx0XHR0cmFuc2Zvcm1UYWJsZSA9IHRoaXMuZGlnaXRUcmFuc2Zvcm1UYWJsZSggJC5pMThuKCkubG9jYWxlICk7XHJcblx0XHRcdG51bWJlclN0cmluZyA9IFN0cmluZyggbnVtICk7XHJcblx0XHRcdGNvbnZlcnRlZE51bWJlciA9ICcnO1xyXG5cclxuXHRcdFx0aWYgKCAhdHJhbnNmb3JtVGFibGUgKSB7XHJcblx0XHRcdFx0cmV0dXJuIG51bTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIHJlc3RvcmUgdG8gTGF0aW4gbnVtYmVyIGZsYWcgaXMgc2V0OlxyXG5cdFx0XHRpZiAoIGludGVnZXIgKSB7XHJcblx0XHRcdFx0aWYgKCBwYXJzZUZsb2F0KCBudW0sIDEwICkgPT09IG51bSApIHtcclxuXHRcdFx0XHRcdHJldHVybiBudW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0bXAgPSBbXTtcclxuXHJcblx0XHRcdFx0Zm9yICggaXRlbSBpbiB0cmFuc2Zvcm1UYWJsZSApIHtcclxuXHRcdFx0XHRcdHRtcFsgdHJhbnNmb3JtVGFibGVbIGl0ZW0gXSBdID0gaXRlbTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRyYW5zZm9ybVRhYmxlID0gdG1wO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmb3IgKCBpID0gMDsgaSA8IG51bWJlclN0cmluZy5sZW5ndGg7IGkrKyApIHtcclxuXHRcdFx0XHRpZiAoIHRyYW5zZm9ybVRhYmxlWyBudW1iZXJTdHJpbmdbIGkgXSBdICkge1xyXG5cdFx0XHRcdFx0Y29udmVydGVkTnVtYmVyICs9IHRyYW5zZm9ybVRhYmxlWyBudW1iZXJTdHJpbmdbIGkgXSBdO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjb252ZXJ0ZWROdW1iZXIgKz0gbnVtYmVyU3RyaW5nWyBpIF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gaW50ZWdlciA/IHBhcnNlRmxvYXQoIGNvbnZlcnRlZE51bWJlciwgMTAgKSA6IGNvbnZlcnRlZE51bWJlcjtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBHcmFtbWF0aWNhbCB0cmFuc2Zvcm1hdGlvbnMsIG5lZWRlZCBmb3IgaW5mbGVjdGVkIGxhbmd1YWdlcy5cclxuXHRcdCAqIEludm9rZWQgYnkgcHV0dGluZyB7e2dyYW1tYXI6Zm9ybXx3b3JkfX0gaW4gYSBtZXNzYWdlLlxyXG5cdFx0ICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgZm9yIGxhbmd1YWdlcyB0aGF0IG5lZWQgc3BlY2lhbCBncmFtbWFyIHJ1bGVzXHJcblx0XHQgKiBhcHBsaWVkIGR5bmFtaWNhbGx5LlxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB3b3JkXHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gZm9ybVxyXG5cdFx0ICogQHJldHVybiB7c3RyaW5nfVxyXG5cdFx0ICovXHJcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcclxuXHRcdGNvbnZlcnRHcmFtbWFyOiBmdW5jdGlvbiAoIHdvcmQsIGZvcm0gKSB7XHJcblx0XHRcdHJldHVybiB3b3JkO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFByb3ZpZGVzIGFuIGFsdGVybmF0aXZlIHRleHQgZGVwZW5kaW5nIG9uIHNwZWNpZmllZCBnZW5kZXIuIFVzYWdlXHJcblx0XHQgKiB7e2dlbmRlcjpbZ2VuZGVyfHVzZXIgb2JqZWN0XXxtYXNjdWxpbmV8ZmVtaW5pbmV8bmV1dHJhbH19LiBJZiBzZWNvbmRcclxuXHRcdCAqIG9yIHRoaXJkIHBhcmFtZXRlciBhcmUgbm90IHNwZWNpZmllZCwgbWFzY3VsaW5lIGlzIHVzZWQuXHJcblx0XHQgKlxyXG5cdFx0ICogVGhlc2UgZGV0YWlscyBtYXkgYmUgb3ZlcnJpZGVuIHBlciBsYW5ndWFnZS5cclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gZ2VuZGVyXHJcblx0XHQgKiAgICAgIG1hbGUsIGZlbWFsZSwgb3IgYW55dGhpbmcgZWxzZSBmb3IgbmV1dHJhbC5cclxuXHRcdCAqIEBwYXJhbSB7QXJyYXl9IGZvcm1zXHJcblx0XHQgKiAgICAgIExpc3Qgb2YgZ2VuZGVyIGZvcm1zXHJcblx0XHQgKlxyXG5cdFx0ICogQHJldHVybiB7c3RyaW5nfVxyXG5cdFx0ICovXHJcblx0XHRnZW5kZXI6IGZ1bmN0aW9uICggZ2VuZGVyLCBmb3JtcyApIHtcclxuXHRcdFx0aWYgKCAhZm9ybXMgfHwgZm9ybXMubGVuZ3RoID09PSAwICkge1xyXG5cdFx0XHRcdHJldHVybiAnJztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0d2hpbGUgKCBmb3Jtcy5sZW5ndGggPCAyICkge1xyXG5cdFx0XHRcdGZvcm1zLnB1c2goIGZvcm1zWyBmb3Jtcy5sZW5ndGggLSAxIF0gKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBnZW5kZXIgPT09ICdtYWxlJyApIHtcclxuXHRcdFx0XHRyZXR1cm4gZm9ybXNbIDAgXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBnZW5kZXIgPT09ICdmZW1hbGUnICkge1xyXG5cdFx0XHRcdHJldHVybiBmb3Jtc1sgMSBdO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gKCBmb3Jtcy5sZW5ndGggPT09IDMgKSA/IGZvcm1zWyAyIF0gOiBmb3Jtc1sgMCBdO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEdldCB0aGUgZGlnaXQgdHJhbnNmb3JtIHRhYmxlIGZvciB0aGUgZ2l2ZW4gbGFuZ3VhZ2VcclxuXHRcdCAqIFNlZSBodHRwOi8vY2xkci51bmljb2RlLm9yZy90cmFuc2xhdGlvbi9udW1iZXJpbmctc3lzdGVtc1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZVxyXG5cdFx0ICogQHJldHVybiB7QXJyYXl8Ym9vbGVhbn0gTGlzdCBvZiBkaWdpdHMgaW4gdGhlIHBhc3NlZCBsYW5ndWFnZSBvciBmYWxzZVxyXG5cdFx0ICogcmVwcmVzZW50YXRpb24sIG9yIGJvb2xlYW4gZmFsc2UgaWYgdGhlcmUgaXMgbm8gaW5mb3JtYXRpb24uXHJcblx0XHQgKi9cclxuXHRcdGRpZ2l0VHJhbnNmb3JtVGFibGU6IGZ1bmN0aW9uICggbGFuZ3VhZ2UgKSB7XHJcblx0XHRcdHZhciB0YWJsZXMgPSB7XHJcblx0XHRcdFx0YXI6ICfZoNmh2aLZo9mk2aXZptmn2ajZqScsXHJcblx0XHRcdFx0ZmE6ICfbsNux27Lbs9u027Xbttu327jbuScsXHJcblx0XHRcdFx0bWw6ICfgtabgtafgtajgtangtargtavgtazgta3gta7gta8nLFxyXG5cdFx0XHRcdGtuOiAn4LOm4LOn4LOo4LOp4LOq4LOr4LOs4LOt4LOu4LOvJyxcclxuXHRcdFx0XHRsbzogJ+C7kOC7keC7kuC7k+C7lOC7leC7luC7l+C7mOC7mScsXHJcblx0XHRcdFx0b3I6ICfgrabgrafgrajgrangrargravgrazgra3gra7gra8nLFxyXG5cdFx0XHRcdGtoOiAn4Z+g4Z+h4Z+i4Z+j4Z+k4Z+l4Z+m4Z+n4Z+o4Z+pJyxcclxuXHRcdFx0XHRwYTogJ+CppuCpp+CpqOCpqeCpquCpq+CprOCpreCpruCprycsXHJcblx0XHRcdFx0Z3U6ICfgq6bgq6fgq6jgq6ngq6rgq6vgq6zgq63gq67gq68nLFxyXG5cdFx0XHRcdGhpOiAn4KWm4KWn4KWo4KWp4KWq4KWr4KWs4KWt4KWu4KWvJyxcclxuXHRcdFx0XHRteTogJ+GBgOGBgeGBguGBg+GBhOGBheGBhuGBh+GBiOGBiScsXHJcblx0XHRcdFx0dGE6ICfgr6bgr6fgr6jgr6ngr6rgr6vgr6zgr63gr67gr68nLFxyXG5cdFx0XHRcdHRlOiAn4LGm4LGn4LGo4LGp4LGq4LGr4LGs4LGt4LGu4LGvJyxcclxuXHRcdFx0XHR0aDogJ+C5kOC5keC5kuC5k+C5lOC5leC5luC5l+C5mOC5mScsIC8vIEZJWE1FIHVzZSBpc28gNjM5IGNvZGVzXHJcblx0XHRcdFx0Ym86ICfgvKDgvKHgvKLgvKPgvKTgvKXgvKbgvKfgvKjgvKknIC8vIEZJWE1FIHVzZSBpc28gNjM5IGNvZGVzXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRpZiAoICF0YWJsZXNbIGxhbmd1YWdlIF0gKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdGFibGVzWyBsYW5ndWFnZSBdLnNwbGl0KCAnJyApO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdCQuZXh0ZW5kKCAkLmkxOG4ubGFuZ3VhZ2VzLCB7XHJcblx0XHQnZGVmYXVsdCc6IGxhbmd1YWdlXHJcblx0fSApO1xyXG59KCBqUXVlcnkgKSApO1xyXG4iLCIvKiFcclxuICogalF1ZXJ5IEludGVybmF0aW9uYWxpemF0aW9uIGxpYnJhcnkgLSBNZXNzYWdlIFN0b3JlXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoQykgMjAxMiBTYW50aG9zaCBUaG90dGluZ2FsXHJcbiAqXHJcbiAqIGpxdWVyeS5pMThuIGlzIGR1YWwgbGljZW5zZWQgR1BMdjIgb3IgbGF0ZXIgYW5kIE1JVC4gWW91IGRvbid0IGhhdmUgdG8gZG8gYW55dGhpbmcgc3BlY2lhbCB0b1xyXG4gKiBjaG9vc2Ugb25lIGxpY2Vuc2Ugb3IgdGhlIG90aGVyIGFuZCB5b3UgZG9uJ3QgaGF2ZSB0byBub3RpZnkgYW55b25lIHdoaWNoIGxpY2Vuc2UgeW91IGFyZSB1c2luZy5cclxuICogWW91IGFyZSBmcmVlIHRvIHVzZSBVbml2ZXJzYWxMYW5ndWFnZVNlbGVjdG9yIGluIGNvbW1lcmNpYWwgcHJvamVjdHMgYXMgbG9uZyBhcyB0aGUgY29weXJpZ2h0XHJcbiAqIGhlYWRlciBpcyBsZWZ0IGludGFjdC4gU2VlIGZpbGVzIEdQTC1MSUNFTlNFIGFuZCBNSVQtTElDRU5TRSBmb3IgZGV0YWlscy5cclxuICpcclxuICogQGxpY2VuY2UgR05VIEdlbmVyYWwgUHVibGljIExpY2VuY2UgMi4wIG9yIGxhdGVyXHJcbiAqIEBsaWNlbmNlIE1JVCBMaWNlbnNlXHJcbiAqL1xyXG5cclxuKCBmdW5jdGlvbiAoICQgKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHR2YXIgTWVzc2FnZVN0b3JlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5tZXNzYWdlcyA9IHt9O1xyXG5cdFx0dGhpcy5zb3VyY2VzID0ge307XHJcblx0fTtcclxuXHJcblx0ZnVuY3Rpb24ganNvbk1lc3NhZ2VMb2FkZXIoIHVybCApIHtcclxuXHRcdHZhciBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcclxuXHJcblx0XHQkLmdldEpTT04oIHVybCApXHJcblx0XHRcdC5kb25lKCBkZWZlcnJlZC5yZXNvbHZlIClcclxuXHRcdFx0LmZhaWwoIGZ1bmN0aW9uICgganF4aHIsIHNldHRpbmdzLCBleGNlcHRpb24gKSB7XHJcblx0XHRcdFx0JC5pMThuLmxvZyggJ0Vycm9yIGluIGxvYWRpbmcgbWVzc2FnZXMgZnJvbSAnICsgdXJsICsgJyBFeGNlcHRpb246ICcgKyBleGNlcHRpb24gKTtcclxuXHRcdFx0XHQvLyBJZ25vcmUgNDA0IGV4Y2VwdGlvbiwgYmVjYXVzZSB3ZSBhcmUgaGFuZGxpbmcgZmFsbGFiYWNrcyBleHBsaWNpdGx5XHJcblx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vd2lraW1lZGlhL2pxdWVyeS5pMThuL3dpa2kvU3BlY2lmaWNhdGlvbiN3aWtpLU1lc3NhZ2VfRmlsZV9Mb2FkaW5nXHJcblx0ICovXHJcblx0TWVzc2FnZVN0b3JlLnByb3RvdHlwZSA9IHtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEdlbmVyYWwgbWVzc2FnZSBsb2FkaW5nIEFQSSBUaGlzIGNhbiB0YWtlIGEgVVJMIHN0cmluZyBmb3JcclxuXHRcdCAqIHRoZSBqc29uIGZvcm1hdHRlZCBtZXNzYWdlcy5cclxuXHRcdCAqIDxjb2RlPmxvYWQoJ3BhdGgvdG8vYWxsX2xvY2FsaXphdGlvbnMuanNvbicpOzwvY29kZT5cclxuXHRcdCAqXHJcblx0XHQgKiBUaGlzIGNhbiBhbHNvIGxvYWQgYSBsb2NhbGl6YXRpb24gZmlsZSBmb3IgYSBsb2NhbGUgPGNvZGU+XHJcblx0XHQgKiBsb2FkKCAncGF0aC90by9kZS1tZXNzYWdlcy5qc29uJywgJ2RlJyApO1xyXG5cdFx0ICogPC9jb2RlPlxyXG5cdFx0ICogQSBkYXRhIG9iamVjdCBjb250YWluaW5nIG1lc3NhZ2Uga2V5LSBtZXNzYWdlIHRyYW5zbGF0aW9uIG1hcHBpbmdzXHJcblx0XHQgKiBjYW4gYWxzbyBiZSBwYXNzZWQgRWc6XHJcblx0XHQgKiA8Y29kZT5cclxuXHRcdCAqIGxvYWQoIHsgJ2hlbGxvJyA6ICdIZWxsbycgfSwgb3B0aW9uYWxMb2NhbGUgKTtcclxuXHRcdCAqIDwvY29kZT4gSWYgdGhlIGRhdGEgYXJndW1lbnQgaXNcclxuXHRcdCAqIG51bGwvdW5kZWZpbmVkL2ZhbHNlLFxyXG5cdFx0ICogYWxsIGNhY2hlZCBtZXNzYWdlcyBmb3IgdGhlIGkxOG4gaW5zdGFuY2Ugd2lsbCBnZXQgcmVzZXQuXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzb3VyY2VcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbGUgTGFuZ3VhZ2UgdGFnXHJcblx0XHQgKiBAcmV0dXJuIHtqUXVlcnkuUHJvbWlzZX1cclxuXHRcdCAqL1xyXG5cdFx0bG9hZDogZnVuY3Rpb24gKCBzb3VyY2UsIGxvY2FsZSApIHtcclxuXHRcdFx0dmFyIGtleSA9IG51bGwsXHJcblx0XHRcdFx0ZGVmZXJyZWQgPSBudWxsLFxyXG5cdFx0XHRcdGRlZmVycmVkcyA9IFtdLFxyXG5cdFx0XHRcdG1lc3NhZ2VTdG9yZSA9IHRoaXM7XHJcblxyXG5cdFx0XHRpZiAoIHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnICkge1xyXG5cdFx0XHRcdC8vIFRoaXMgaXMgYSBVUkwgdG8gdGhlIG1lc3NhZ2VzIGZpbGUuXHJcblx0XHRcdFx0JC5pMThuLmxvZyggJ0xvYWRpbmcgbWVzc2FnZXMgZnJvbTogJyArIHNvdXJjZSApO1xyXG5cdFx0XHRcdGRlZmVycmVkID0ganNvbk1lc3NhZ2VMb2FkZXIoIHNvdXJjZSApXHJcblx0XHRcdFx0XHQuZG9uZSggZnVuY3Rpb24gKCBsb2NhbGl6YXRpb24gKSB7XHJcblx0XHRcdFx0XHRcdG1lc3NhZ2VTdG9yZS5zZXQoIGxvY2FsZSwgbG9jYWxpemF0aW9uICk7XHJcblx0XHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggbG9jYWxlICkge1xyXG5cdFx0XHRcdC8vIHNvdXJjZSBpcyBhbiBrZXktdmFsdWUgcGFpciBvZiBtZXNzYWdlcyBmb3IgZ2l2ZW4gbG9jYWxlXHJcblx0XHRcdFx0bWVzc2FnZVN0b3JlLnNldCggbG9jYWxlLCBzb3VyY2UgKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZXNvbHZlKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gc291cmNlIGlzIGEga2V5LXZhbHVlIHBhaXIgb2YgbG9jYWxlcyBhbmQgdGhlaXIgc291cmNlXHJcblx0XHRcdFx0Zm9yICgga2V5IGluIHNvdXJjZSApIHtcclxuXHRcdFx0XHRcdGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBzb3VyY2UsIGtleSApICkge1xyXG5cdFx0XHRcdFx0XHRsb2NhbGUgPSBrZXk7XHJcblx0XHRcdFx0XHRcdC8vIE5vIHtsb2NhbGV9IGdpdmVuLCBhc3N1bWUgZGF0YSBpcyBhIGdyb3VwIG9mIGxhbmd1YWdlcyxcclxuXHRcdFx0XHRcdFx0Ly8gY2FsbCB0aGlzIGZ1bmN0aW9uIGFnYWluIGZvciBlYWNoIGxhbmd1YWdlLlxyXG5cdFx0XHRcdFx0XHRkZWZlcnJlZHMucHVzaCggbWVzc2FnZVN0b3JlLmxvYWQoIHNvdXJjZVsga2V5IF0sIGxvY2FsZSApICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiAkLndoZW4uYXBwbHkoICQsIGRlZmVycmVkcyApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNldCBtZXNzYWdlcyB0byB0aGUgZ2l2ZW4gbG9jYWxlLlxyXG5cdFx0ICogSWYgbG9jYWxlIGV4aXN0cywgYWRkIG1lc3NhZ2VzIHRvIHRoZSBsb2NhbGUuXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsZVxyXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2VzXHJcblx0XHQgKi9cclxuXHRcdHNldDogZnVuY3Rpb24gKCBsb2NhbGUsIG1lc3NhZ2VzICkge1xyXG5cdFx0XHRpZiAoICF0aGlzLm1lc3NhZ2VzWyBsb2NhbGUgXSApIHtcclxuXHRcdFx0XHR0aGlzLm1lc3NhZ2VzWyBsb2NhbGUgXSA9IG1lc3NhZ2VzO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMubWVzc2FnZXNbIGxvY2FsZSBdID0gJC5leHRlbmQoIHRoaXMubWVzc2FnZXNbIGxvY2FsZSBdLCBtZXNzYWdlcyApO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbGVcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlS2V5XHJcblx0XHQgKiBAcmV0dXJuIHtib29sZWFufVxyXG5cdFx0ICovXHJcblx0XHRnZXQ6IGZ1bmN0aW9uICggbG9jYWxlLCBtZXNzYWdlS2V5ICkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5tZXNzYWdlc1sgbG9jYWxlIF0gJiYgdGhpcy5tZXNzYWdlc1sgbG9jYWxlIF1bIG1lc3NhZ2VLZXkgXTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQkLmV4dGVuZCggJC5pMThuLm1lc3NhZ2VTdG9yZSwgbmV3IE1lc3NhZ2VTdG9yZSgpICk7XHJcbn0oIGpRdWVyeSApICk7XHJcbiIsIi8qIVxyXG4gKiBqUXVlcnkgSW50ZXJuYXRpb25hbGl6YXRpb24gbGlicmFyeVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTEtMjAxMyBTYW50aG9zaCBUaG90dGluZ2FsLCBOZWlsIEthbmRhbGdhb25rYXJcclxuICpcclxuICoganF1ZXJ5LmkxOG4gaXMgZHVhbCBsaWNlbnNlZCBHUEx2MiBvciBsYXRlciBhbmQgTUlULiBZb3UgZG9uJ3QgaGF2ZSB0byBkb1xyXG4gKiBhbnl0aGluZyBzcGVjaWFsIHRvIGNob29zZSBvbmUgbGljZW5zZSBvciB0aGUgb3RoZXIgYW5kIHlvdSBkb24ndCBoYXZlIHRvXHJcbiAqIG5vdGlmeSBhbnlvbmUgd2hpY2ggbGljZW5zZSB5b3UgYXJlIHVzaW5nLiBZb3UgYXJlIGZyZWUgdG8gdXNlXHJcbiAqIFVuaXZlcnNhbExhbmd1YWdlU2VsZWN0b3IgaW4gY29tbWVyY2lhbCBwcm9qZWN0cyBhcyBsb25nIGFzIHRoZSBjb3B5cmlnaHRcclxuICogaGVhZGVyIGlzIGxlZnQgaW50YWN0LiBTZWUgZmlsZXMgR1BMLUxJQ0VOU0UgYW5kIE1JVC1MSUNFTlNFIGZvciBkZXRhaWxzLlxyXG4gKlxyXG4gKiBAbGljZW5jZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5jZSAyLjAgb3IgbGF0ZXJcclxuICogQGxpY2VuY2UgTUlUIExpY2Vuc2VcclxuICovXHJcblxyXG4oIGZ1bmN0aW9uICggJCApIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdHZhciBNZXNzYWdlUGFyc2VyID0gZnVuY3Rpb24gKCBvcHRpb25zICkge1xyXG5cdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoIHt9LCAkLmkxOG4ucGFyc2VyLmRlZmF1bHRzLCBvcHRpb25zICk7XHJcblx0XHR0aGlzLmxhbmd1YWdlID0gJC5pMThuLmxhbmd1YWdlc1sgU3RyaW5nLmxvY2FsZSBdIHx8ICQuaTE4bi5sYW5ndWFnZXNbICdkZWZhdWx0JyBdO1xyXG5cdFx0dGhpcy5lbWl0dGVyID0gJC5pMThuLnBhcnNlci5lbWl0dGVyO1xyXG5cdH07XHJcblxyXG5cdE1lc3NhZ2VQYXJzZXIucHJvdG90eXBlID0ge1xyXG5cclxuXHRcdGNvbnN0cnVjdG9yOiBNZXNzYWdlUGFyc2VyLFxyXG5cclxuXHRcdHNpbXBsZVBhcnNlOiBmdW5jdGlvbiAoIG1lc3NhZ2UsIHBhcmFtZXRlcnMgKSB7XHJcblx0XHRcdHJldHVybiBtZXNzYWdlLnJlcGxhY2UoIC9cXCQoXFxkKykvZywgZnVuY3Rpb24gKCBzdHIsIG1hdGNoICkge1xyXG5cdFx0XHRcdHZhciBpbmRleCA9IHBhcnNlSW50KCBtYXRjaCwgMTAgKSAtIDE7XHJcblxyXG5cdFx0XHRcdHJldHVybiBwYXJhbWV0ZXJzWyBpbmRleCBdICE9PSB1bmRlZmluZWQgPyBwYXJhbWV0ZXJzWyBpbmRleCBdIDogJyQnICsgbWF0Y2g7XHJcblx0XHRcdH0gKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0cGFyc2U6IGZ1bmN0aW9uICggbWVzc2FnZSwgcmVwbGFjZW1lbnRzICkge1xyXG5cdFx0XHRpZiAoIG1lc3NhZ2UuaW5kZXhPZiggJ3t7JyApIDwgMCApIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zaW1wbGVQYXJzZSggbWVzc2FnZSwgcmVwbGFjZW1lbnRzICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuZW1pdHRlci5sYW5ndWFnZSA9ICQuaTE4bi5sYW5ndWFnZXNbICQuaTE4bigpLmxvY2FsZSBdIHx8XHJcblx0XHRcdFx0JC5pMThuLmxhbmd1YWdlc1sgJ2RlZmF1bHQnIF07XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcy5lbWl0dGVyLmVtaXQoIHRoaXMuYXN0KCBtZXNzYWdlICksIHJlcGxhY2VtZW50cyApO1xyXG5cdFx0fSxcclxuXHJcblx0XHRhc3Q6IGZ1bmN0aW9uICggbWVzc2FnZSApIHtcclxuXHRcdFx0dmFyIHBpcGUsIGNvbG9uLCBiYWNrc2xhc2gsIGFueUNoYXJhY3RlciwgZG9sbGFyLCBkaWdpdHMsIHJlZ3VsYXJMaXRlcmFsLFxyXG5cdFx0XHRcdHJlZ3VsYXJMaXRlcmFsV2l0aG91dEJhciwgcmVndWxhckxpdGVyYWxXaXRob3V0U3BhY2UsIGVzY2FwZWRPckxpdGVyYWxXaXRob3V0QmFyLFxyXG5cdFx0XHRcdGVzY2FwZWRPclJlZ3VsYXJMaXRlcmFsLCB0ZW1wbGF0ZUNvbnRlbnRzLCB0ZW1wbGF0ZU5hbWUsIG9wZW5UZW1wbGF0ZSxcclxuXHRcdFx0XHRjbG9zZVRlbXBsYXRlLCBleHByZXNzaW9uLCBwYXJhbUV4cHJlc3Npb24sIHJlc3VsdCxcclxuXHRcdFx0XHRwb3MgPSAwO1xyXG5cclxuXHRcdFx0Ly8gVHJ5IHBhcnNlcnMgdW50aWwgb25lIHdvcmtzLCBpZiBub25lIHdvcmsgcmV0dXJuIG51bGxcclxuXHRcdFx0ZnVuY3Rpb24gY2hvaWNlKCBwYXJzZXJTeW50YXggKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdHZhciBpLCByZXN1bHQ7XHJcblxyXG5cdFx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBwYXJzZXJTeW50YXgubGVuZ3RoOyBpKysgKSB7XHJcblx0XHRcdFx0XHRcdHJlc3VsdCA9IHBhcnNlclN5bnRheFsgaSBdKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIHJlc3VsdCAhPT0gbnVsbCApIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gVHJ5IHNldmVyYWwgcGFyc2VyU3ludGF4LWVzIGluIGEgcm93LlxyXG5cdFx0XHQvLyBBbGwgbXVzdCBzdWNjZWVkOyBvdGhlcndpc2UsIHJldHVybiBudWxsLlxyXG5cdFx0XHQvLyBUaGlzIGlzIHRoZSBvbmx5IGVhZ2VyIG9uZS5cclxuXHRcdFx0ZnVuY3Rpb24gc2VxdWVuY2UoIHBhcnNlclN5bnRheCApIHtcclxuXHRcdFx0XHR2YXIgaSwgcmVzLFxyXG5cdFx0XHRcdFx0b3JpZ2luYWxQb3MgPSBwb3MsXHJcblx0XHRcdFx0XHRyZXN1bHQgPSBbXTtcclxuXHJcblx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBwYXJzZXJTeW50YXgubGVuZ3RoOyBpKysgKSB7XHJcblx0XHRcdFx0XHRyZXMgPSBwYXJzZXJTeW50YXhbIGkgXSgpO1xyXG5cclxuXHRcdFx0XHRcdGlmICggcmVzID09PSBudWxsICkge1xyXG5cdFx0XHRcdFx0XHRwb3MgPSBvcmlnaW5hbFBvcztcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKCByZXMgKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIFJ1biB0aGUgc2FtZSBwYXJzZXIgb3ZlciBhbmQgb3ZlciB1bnRpbCBpdCBmYWlscy5cclxuXHRcdFx0Ly8gTXVzdCBzdWNjZWVkIGEgbWluaW11bSBvZiBuIHRpbWVzOyBvdGhlcndpc2UsIHJldHVybiBudWxsLlxyXG5cdFx0XHRmdW5jdGlvbiBuT3JNb3JlKCBuLCBwICkge1xyXG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHR2YXIgb3JpZ2luYWxQb3MgPSBwb3MsXHJcblx0XHRcdFx0XHRcdHJlc3VsdCA9IFtdLFxyXG5cdFx0XHRcdFx0XHRwYXJzZWQgPSBwKCk7XHJcblxyXG5cdFx0XHRcdFx0d2hpbGUgKCBwYXJzZWQgIT09IG51bGwgKSB7XHJcblx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKCBwYXJzZWQgKTtcclxuXHRcdFx0XHRcdFx0cGFyc2VkID0gcCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmICggcmVzdWx0Lmxlbmd0aCA8IG4gKSB7XHJcblx0XHRcdFx0XHRcdHBvcyA9IG9yaWdpbmFsUG9zO1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBIZWxwZXJzIC0tIGp1c3QgbWFrZSBwYXJzZXJTeW50YXggb3V0IG9mIHNpbXBsZXIgSlMgYnVpbHRpbiB0eXBlc1xyXG5cclxuXHRcdFx0ZnVuY3Rpb24gbWFrZVN0cmluZ1BhcnNlciggcyApIHtcclxuXHRcdFx0XHR2YXIgbGVuID0gcy5sZW5ndGg7XHJcblxyXG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHR2YXIgcmVzdWx0ID0gbnVsbDtcclxuXHJcblx0XHRcdFx0XHRpZiAoIG1lc3NhZ2Uuc2xpY2UoIHBvcywgcG9zICsgbGVuICkgPT09IHMgKSB7XHJcblx0XHRcdFx0XHRcdHJlc3VsdCA9IHM7XHJcblx0XHRcdFx0XHRcdHBvcyArPSBsZW47XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBtYWtlUmVnZXhQYXJzZXIoIHJlZ2V4ICkge1xyXG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHR2YXIgbWF0Y2hlcyA9IG1lc3NhZ2Uuc2xpY2UoIHBvcyApLm1hdGNoKCByZWdleCApO1xyXG5cclxuXHRcdFx0XHRcdGlmICggbWF0Y2hlcyA9PT0gbnVsbCApIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cG9zICs9IG1hdGNoZXNbIDAgXS5sZW5ndGg7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIG1hdGNoZXNbIDAgXTtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwaXBlID0gbWFrZVN0cmluZ1BhcnNlciggJ3wnICk7XHJcblx0XHRcdGNvbG9uID0gbWFrZVN0cmluZ1BhcnNlciggJzonICk7XHJcblx0XHRcdGJhY2tzbGFzaCA9IG1ha2VTdHJpbmdQYXJzZXIoICdcXFxcJyApO1xyXG5cdFx0XHRhbnlDaGFyYWN0ZXIgPSBtYWtlUmVnZXhQYXJzZXIoIC9eLi8gKTtcclxuXHRcdFx0ZG9sbGFyID0gbWFrZVN0cmluZ1BhcnNlciggJyQnICk7XHJcblx0XHRcdGRpZ2l0cyA9IG1ha2VSZWdleFBhcnNlciggL15cXGQrLyApO1xyXG5cdFx0XHRyZWd1bGFyTGl0ZXJhbCA9IG1ha2VSZWdleFBhcnNlciggL15bXnt9W1xcXSRcXFxcXS8gKTtcclxuXHRcdFx0cmVndWxhckxpdGVyYWxXaXRob3V0QmFyID0gbWFrZVJlZ2V4UGFyc2VyKCAvXltee31bXFxdJFxcXFx8XS8gKTtcclxuXHRcdFx0cmVndWxhckxpdGVyYWxXaXRob3V0U3BhY2UgPSBtYWtlUmVnZXhQYXJzZXIoIC9eW157fVtcXF0kXFxzXS8gKTtcclxuXHJcblx0XHRcdC8vIFRoZXJlIGlzIGEgZ2VuZXJhbCBwYXR0ZXJuOlxyXG5cdFx0XHQvLyBwYXJzZSBhIHRoaW5nO1xyXG5cdFx0XHQvLyBpZiBpdCB3b3JrZWQsIGFwcGx5IHRyYW5zZm9ybSxcclxuXHRcdFx0Ly8gb3RoZXJ3aXNlIHJldHVybiBudWxsLlxyXG5cdFx0XHQvLyBCdXQgdXNpbmcgdGhpcyBhcyBhIGNvbWJpbmF0b3Igc2VlbXMgdG8gY2F1c2UgcHJvYmxlbXNcclxuXHRcdFx0Ly8gd2hlbiBjb21iaW5lZCB3aXRoIG5Pck1vcmUoKS5cclxuXHRcdFx0Ly8gTWF5IGJlIHNvbWUgc2NvcGluZyBpc3N1ZS5cclxuXHRcdFx0ZnVuY3Rpb24gdHJhbnNmb3JtKCBwLCBmbiApIHtcclxuXHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0dmFyIHJlc3VsdCA9IHAoKTtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0ID09PSBudWxsID8gbnVsbCA6IGZuKCByZXN1bHQgKTtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBVc2VkIHRvIGRlZmluZSBcImxpdGVyYWxzXCIgd2l0aGluIHRlbXBsYXRlIHBhcmFtZXRlcnMuIFRoZSBwaXBlXHJcblx0XHRcdC8vIGNoYXJhY3RlciBpcyB0aGUgcGFyYW1ldGVyIGRlbGltZXRlciwgc28gYnkgZGVmYXVsdFxyXG5cdFx0XHQvLyBpdCBpcyBub3QgYSBsaXRlcmFsIGluIHRoZSBwYXJhbWV0ZXJcclxuXHRcdFx0ZnVuY3Rpb24gbGl0ZXJhbFdpdGhvdXRCYXIoKSB7XHJcblx0XHRcdFx0dmFyIHJlc3VsdCA9IG5Pck1vcmUoIDEsIGVzY2FwZWRPckxpdGVyYWxXaXRob3V0QmFyICkoKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IG51bGwgOiByZXN1bHQuam9pbiggJycgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gbGl0ZXJhbCgpIHtcclxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gbk9yTW9yZSggMSwgZXNjYXBlZE9yUmVndWxhckxpdGVyYWwgKSgpO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0ID09PSBudWxsID8gbnVsbCA6IHJlc3VsdC5qb2luKCAnJyApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBlc2NhcGVkTGl0ZXJhbCgpIHtcclxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gc2VxdWVuY2UoIFsgYmFja3NsYXNoLCBhbnlDaGFyYWN0ZXIgXSApO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0ID09PSBudWxsID8gbnVsbCA6IHJlc3VsdFsgMSBdO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjaG9pY2UoIFsgZXNjYXBlZExpdGVyYWwsIHJlZ3VsYXJMaXRlcmFsV2l0aG91dFNwYWNlIF0gKTtcclxuXHRcdFx0ZXNjYXBlZE9yTGl0ZXJhbFdpdGhvdXRCYXIgPSBjaG9pY2UoIFsgZXNjYXBlZExpdGVyYWwsIHJlZ3VsYXJMaXRlcmFsV2l0aG91dEJhciBdICk7XHJcblx0XHRcdGVzY2FwZWRPclJlZ3VsYXJMaXRlcmFsID0gY2hvaWNlKCBbIGVzY2FwZWRMaXRlcmFsLCByZWd1bGFyTGl0ZXJhbCBdICk7XHJcblxyXG5cdFx0XHRmdW5jdGlvbiByZXBsYWNlbWVudCgpIHtcclxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gc2VxdWVuY2UoIFsgZG9sbGFyLCBkaWdpdHMgXSApO1xyXG5cclxuXHRcdFx0XHRpZiAoIHJlc3VsdCA9PT0gbnVsbCApIHtcclxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIFsgJ1JFUExBQ0UnLCBwYXJzZUludCggcmVzdWx0WyAxIF0sIDEwICkgLSAxIF07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRlbXBsYXRlTmFtZSA9IHRyYW5zZm9ybShcclxuXHRcdFx0XHQvLyBzZWUgJHdnTGVnYWxUaXRsZUNoYXJzXHJcblx0XHRcdFx0Ly8gbm90IGFsbG93aW5nIDogZHVlIHRvIHRoZSBuZWVkIHRvIGNhdGNoIFwiUExVUkFMOiQxXCJcclxuXHRcdFx0XHRtYWtlUmVnZXhQYXJzZXIoIC9eWyAhXCIkJicoKSosLi8wLTk7PT9AQS1aXl9gYS16flxceDgwLVxceEZGKy1dKy8gKSxcclxuXHJcblx0XHRcdFx0ZnVuY3Rpb24gKCByZXN1bHQgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0LnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0ZnVuY3Rpb24gdGVtcGxhdGVQYXJhbSgpIHtcclxuXHRcdFx0XHR2YXIgZXhwcixcclxuXHRcdFx0XHRcdHJlc3VsdCA9IHNlcXVlbmNlKCBbIHBpcGUsIG5Pck1vcmUoIDAsIHBhcmFtRXhwcmVzc2lvbiApIF0gKTtcclxuXHJcblx0XHRcdFx0aWYgKCByZXN1bHQgPT09IG51bGwgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGV4cHIgPSByZXN1bHRbIDEgXTtcclxuXHJcblx0XHRcdFx0Ly8gdXNlIGEgXCJDT05DQVRcIiBvcGVyYXRvciBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgbm9kZXMsXHJcblx0XHRcdFx0Ly8gb3RoZXJ3aXNlIHJldHVybiB0aGUgZmlyc3Qgbm9kZSwgcmF3LlxyXG5cdFx0XHRcdHJldHVybiBleHByLmxlbmd0aCA+IDEgPyBbICdDT05DQVQnIF0uY29uY2F0KCBleHByICkgOiBleHByWyAwIF07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZ1bmN0aW9uIHRlbXBsYXRlV2l0aFJlcGxhY2VtZW50KCkge1xyXG5cdFx0XHRcdHZhciByZXN1bHQgPSBzZXF1ZW5jZSggWyB0ZW1wbGF0ZU5hbWUsIGNvbG9uLCByZXBsYWNlbWVudCBdICk7XHJcblxyXG5cdFx0XHRcdHJldHVybiByZXN1bHQgPT09IG51bGwgPyBudWxsIDogWyByZXN1bHRbIDAgXSwgcmVzdWx0WyAyIF0gXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gdGVtcGxhdGVXaXRoT3V0UmVwbGFjZW1lbnQoKSB7XHJcblx0XHRcdFx0dmFyIHJlc3VsdCA9IHNlcXVlbmNlKCBbIHRlbXBsYXRlTmFtZSwgY29sb24sIHBhcmFtRXhwcmVzc2lvbiBdICk7XHJcblxyXG5cdFx0XHRcdHJldHVybiByZXN1bHQgPT09IG51bGwgPyBudWxsIDogWyByZXN1bHRbIDAgXSwgcmVzdWx0WyAyIF0gXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGVtcGxhdGVDb250ZW50cyA9IGNob2ljZSggW1xyXG5cdFx0XHRcdGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdHZhciByZXMgPSBzZXF1ZW5jZSggW1xyXG5cdFx0XHRcdFx0XHQvLyB0ZW1wbGF0ZXMgY2FuIGhhdmUgcGxhY2Vob2xkZXJzIGZvciBkeW5hbWljXHJcblx0XHRcdFx0XHRcdC8vIHJlcGxhY2VtZW50IGVnOiB7e1BMVVJBTDokMXxvbmUgY2FyfCQxIGNhcnN9fVxyXG5cdFx0XHRcdFx0XHQvLyBvciBubyBwbGFjZWhvbGRlcnMgZWc6XHJcblx0XHRcdFx0XHRcdC8vIHt7R1JBTU1BUjpnZW5pdGl2ZXx7e1NJVEVOQU1FfX19XHJcblx0XHRcdFx0XHRcdGNob2ljZSggWyB0ZW1wbGF0ZVdpdGhSZXBsYWNlbWVudCwgdGVtcGxhdGVXaXRoT3V0UmVwbGFjZW1lbnQgXSApLFxyXG5cdFx0XHRcdFx0XHRuT3JNb3JlKCAwLCB0ZW1wbGF0ZVBhcmFtIClcclxuXHRcdFx0XHRcdF0gKTtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzID09PSBudWxsID8gbnVsbCA6IHJlc1sgMCBdLmNvbmNhdCggcmVzWyAxIF0gKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdHZhciByZXMgPSBzZXF1ZW5jZSggWyB0ZW1wbGF0ZU5hbWUsIG5Pck1vcmUoIDAsIHRlbXBsYXRlUGFyYW0gKSBdICk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCByZXMgPT09IG51bGwgKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJldHVybiBbIHJlc1sgMCBdIF0uY29uY2F0KCByZXNbIDEgXSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XSApO1xyXG5cclxuXHRcdFx0b3BlblRlbXBsYXRlID0gbWFrZVN0cmluZ1BhcnNlciggJ3t7JyApO1xyXG5cdFx0XHRjbG9zZVRlbXBsYXRlID0gbWFrZVN0cmluZ1BhcnNlciggJ319JyApO1xyXG5cclxuXHRcdFx0ZnVuY3Rpb24gdGVtcGxhdGUoKSB7XHJcblx0XHRcdFx0dmFyIHJlc3VsdCA9IHNlcXVlbmNlKCBbIG9wZW5UZW1wbGF0ZSwgdGVtcGxhdGVDb250ZW50cywgY2xvc2VUZW1wbGF0ZSBdICk7XHJcblxyXG5cdFx0XHRcdHJldHVybiByZXN1bHQgPT09IG51bGwgPyBudWxsIDogcmVzdWx0WyAxIF07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGV4cHJlc3Npb24gPSBjaG9pY2UoIFsgdGVtcGxhdGUsIHJlcGxhY2VtZW50LCBsaXRlcmFsIF0gKTtcclxuXHRcdFx0cGFyYW1FeHByZXNzaW9uID0gY2hvaWNlKCBbIHRlbXBsYXRlLCByZXBsYWNlbWVudCwgbGl0ZXJhbFdpdGhvdXRCYXIgXSApO1xyXG5cclxuXHRcdFx0ZnVuY3Rpb24gc3RhcnQoKSB7XHJcblx0XHRcdFx0dmFyIHJlc3VsdCA9IG5Pck1vcmUoIDAsIGV4cHJlc3Npb24gKSgpO1xyXG5cclxuXHRcdFx0XHRpZiAoIHJlc3VsdCA9PT0gbnVsbCApIHtcclxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIFsgJ0NPTkNBVCcgXS5jb25jYXQoIHJlc3VsdCApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXN1bHQgPSBzdGFydCgpO1xyXG5cclxuXHRcdFx0LypcclxuXHRcdFx0ICogRm9yIHN1Y2Nlc3MsIHRoZSBwb3MgbXVzdCBoYXZlIGdvdHRlbiB0byB0aGUgZW5kIG9mIHRoZSBpbnB1dFxyXG5cdFx0XHQgKiBhbmQgcmV0dXJuZWQgYSBub24tbnVsbC5cclxuXHRcdFx0ICogbi5iLiBUaGlzIGlzIHBhcnQgb2YgbGFuZ3VhZ2UgaW5mcmFzdHJ1Y3R1cmUsIHNvIHdlIGRvIG5vdCB0aHJvdyBhblxyXG5cdFx0XHQgKiBpbnRlcm5hdGlvbmFsaXphYmxlIG1lc3NhZ2UuXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRpZiAoIHJlc3VsdCA9PT0gbnVsbCB8fCBwb3MgIT09IG1lc3NhZ2UubGVuZ3RoICkge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggJ1BhcnNlIGVycm9yIGF0IHBvc2l0aW9uICcgKyBwb3MudG9TdHJpbmcoKSArICcgaW4gaW5wdXQ6ICcgKyBtZXNzYWdlICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cdCQuZXh0ZW5kKCAkLmkxOG4ucGFyc2VyLCBuZXcgTWVzc2FnZVBhcnNlcigpICk7XHJcbn0oIGpRdWVyeSApICk7IiwidmFyIGNvZGVFeGVyY2lzZXM7XHJcbnZhciBwcmVzZW50ZXJDc3NMaW5rO1xyXG52YXIgcHJlc2VudE1vZGVJbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gcHJlc2VudFRvZ2dsZSgpIHtcclxuICAgIGlmICghcHJlc2VudE1vZGVJbml0aWFsaXplZCkge1xyXG4gICAgICAgIHByZXNlbnRNb2RlU2V0dXAoKTtcclxuICAgICAgICBwcmVzZW50TW9kZUluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGxldCBib2QgPSAkKFwiYm9keVwiKTtcclxuICAgIGxldCBwcmVzZW50Q2xhc3MgPSBcInByZXNlbnRcIjtcclxuICAgIGxldCBmdWxsSGVpZ2h0Q2xhc3MgPSBcImZ1bGwtaGVpZ2h0XCI7XHJcbiAgICBsZXQgYm90dG9tQ2xhc3MgPSBcImJvdHRvbVwiO1xyXG4gICAgaWYgKGJvZC5oYXNDbGFzcyhwcmVzZW50Q2xhc3MpKSB7XHJcbiAgICAgICAgJChcIi5zZWN0aW9uICpcIilcclxuICAgICAgICAgICAgLm5vdChcclxuICAgICAgICAgICAgICAgIFwiaDEsIC5wcmVzZW50YXRpb24tdGl0bGUsIC5idG4tcHJlc2VudGVyLCAucnVuZXN0b25lLCAucnVuZXN0b25lICosIC5zZWN0aW9uLCAucHJlLCBjb2RlXCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7IC8vc2hvdyBldmVyeXRoaW5nXHJcbiAgICAgICAgJChcIiNjb21wbGV0aW9uQnV0dG9uXCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGJvZC5yZW1vdmVDbGFzcyhwcmVzZW50Q2xhc3MpO1xyXG4gICAgICAgICQoXCIuXCIgKyBmdWxsSGVpZ2h0Q2xhc3MpLnJlbW92ZUNsYXNzKGZ1bGxIZWlnaHRDbGFzcyk7XHJcbiAgICAgICAgJChcIi5cIiArIGJvdHRvbUNsYXNzKS5yZW1vdmVDbGFzcyhib3R0b21DbGFzcyk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcmVzZW50TW9kZVwiLCBcInRleHRcIik7XHJcbiAgICAgICAgY29kZUV4ZXJjaXNlcy5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICBwcmVzZW50ZXJDc3NMaW5rLmRpc2FibGVkID0gdHJ1ZTsgLy8gZGlzYWJsZSBwcmVzZW50X21vZGUuY3NzXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIuc2VjdGlvbiAqXCIpXHJcbiAgICAgICAgICAgIC5ub3QoXHJcbiAgICAgICAgICAgICAgICBcImgxLCAucHJlc2VudGF0aW9uLXRpdGxlLCAuYnRuLXByZXNlbnRlciwgLnJ1bmVzdG9uZSwgLnJ1bmVzdG9uZSAqLCAuc2VjdGlvbiwgLnByZSwgY29kZVwiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmFkZENsYXNzKFwiaGlkZGVuXCIpOyAvLyBoaWRlIGV4dHJhbmVvdXMgc3R1ZmZcclxuICAgICAgICAkKFwiI2NvbXBsZXRpb25CdXR0b25cIikuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgYm9kLmFkZENsYXNzKHByZXNlbnRDbGFzcyk7XHJcbiAgICAgICAgYm9kLmFkZENsYXNzKGZ1bGxIZWlnaHRDbGFzcyk7XHJcbiAgICAgICAgJChcImh0bWxcIikuYWRkQ2xhc3MoZnVsbEhlaWdodENsYXNzKTtcclxuICAgICAgICAkKFwiLnNlY3Rpb24gLnJ1bmVzdG9uZVwiKS5hZGRDbGFzcyhmdWxsSGVpZ2h0Q2xhc3MpO1xyXG4gICAgICAgICQoXCIuYWMtY2FwdGlvblwiKS5hZGRDbGFzcyhib3R0b21DbGFzcyk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcmVzZW50TW9kZVwiLCBwcmVzZW50Q2xhc3MpO1xyXG4gICAgICAgIGxvYWRQcmVzZW50ZXJDc3MoKTsgLy8gcHJlc2VudF9tb2RlLmNzcyBzaG91bGQgb25seSBhcHBseSB3aGVuIGluIHByZXNlbnRlciBtb2RlLlxyXG4gICAgICAgIGFjdGl2YXRlRXhlcmNpc2UoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFByZXNlbnRlckNzcygpIHtcclxuICAgIHByZXNlbnRlckNzc0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuICAgIHByZXNlbnRlckNzc0xpbmsudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuICAgIHByZXNlbnRlckNzc0xpbmsuaHJlZiA9IFwiLi4vX3N0YXRpYy9wcmVzZW50ZXJfbW9kZS5jc3NcIjtcclxuICAgIHByZXNlbnRlckNzc0xpbmsucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQocHJlc2VudGVyQ3NzTGluayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXNlbnRNb2RlU2V0dXAoKSB7XHJcbiAgICAvLyBtb3ZlZCB0aGlzIG91dCBvZiBjb25maWd1cmVcclxuICAgIGxldCBkYXRhQ29tcG9uZW50ID0gJChcIltkYXRhLWNoaWxkY29tcG9uZW50XVwiKTtcclxuXHJcbiAgICAvLyB0aGlzIHN0aWxsIGxlYXZlcyBzb21lIHRoaW5ncyBzZW1pLW1lc3NlZCB1cCB3aGVuIHlvdSBleGl0IHByZXNlbnRlciBtb2RlLlxyXG4gICAgLy8gYnV0IGluc3RydWN0b3JzIHdpbGwgcHJvYmFibHkganVzdCBsZWFybiB0byByZWZyZXNoIHRoZSBwYWdlLlxyXG4gICAgZGF0YUNvbXBvbmVudC5hZGRDbGFzcyhcInJ1bmVzdG9uZVwiKTtcclxuICAgIGRhdGFDb21wb25lbnQucGFyZW50KCkuY2xvc2VzdChcImRpdlwiKS5ub3QoXCIuc2VjdGlvblwiKS5hZGRDbGFzcyhcInJ1bmVzdG9uZVwiKTtcclxuICAgIGRhdGFDb21wb25lbnQucGFyZW50KCkuY2xvc2VzdChcImRpdlwiKS5jc3MoXCJtYXgtd2lkdGhcIiwgXCJub25lXCIpO1xyXG5cclxuICAgIGRhdGFDb21wb25lbnQuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICBsZXQgbWUgPSAkKHRoaXMpO1xyXG4gICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgLmZpbmQoXCIuYWNfY29kZV9kaXYsIC5hY19vdXRwdXRcIilcclxuICAgICAgICAgICAgLndyYXBBbGwoXCI8ZGl2IGNsYXNzPSdhYy1ibG9jaycgc3R5bGU9J3dpZHRoOiAxMDAlOyc+PC9kaXY+XCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29kZWxlbnNMaXN0ZW5lcig1MDApO1xyXG4gICAgJChcIi5zZWN0aW9uIGltZ1wiKS53cmFwKCc8ZGl2IGNsYXNzPVwicnVuZXN0b25lXCI+Jyk7XHJcbiAgICBjb2RlRXhlcmNpc2VzID0gJChcIi5ydW5lc3RvbmVcIikubm90KFwiLnJ1bmVzdG9uZSAucnVuZXN0b25lXCIpO1xyXG4gICAgLy8gY29kZUV4ZXJjaXNlcy5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAkKFwiaDFcIikuYmVmb3JlKFxyXG4gICAgICAgIFwiPGRpdiBjbGFzcz0ncHJlc2VudGF0aW9uLXRpdGxlJz4gXFxcclxuICAgICAgICA8YnV0dG9uIGNsYXNzPSdwcmV2LWV4ZXJjaXNlIGJ0bi1wcmVzZW50ZXIgYnRuLWdyZXktb3V0bGluZScgb25jbGljaz0ncHJldkV4ZXJjaXNlKCknPkJhY2s8L2J1dHRvbj4gXFxcclxuICAgICAgICA8YnV0dG9uIGNsYXNzPSduZXh0LWV4ZXJjaXNlIGJ0bi1wcmVzZW50ZXIgYnRuLWdyZXktc29saWQnIG9uY2xpY2s9J25leHRFeGVyY2lzZSgpJz5OZXh0PC9idXR0b24+IFxcXHJcbiAgICAgIDwvZGl2PlwiXHJcbiAgICApO1xyXG59XHJcbmZ1bmN0aW9uIGdldEFjdGl2ZUV4ZXJjaXNlKCkge1xyXG4gICAgcmV0dXJuIChhY3RpdmUgPSBjb2RlRXhlcmNpc2VzLmZpbHRlcihcIi5hY3RpdmVcIikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhY3RpdmF0ZUV4ZXJjaXNlKGluZGV4KSB7XHJcbiAgICBpZiAodHlwZW9mIGluZGV4ID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBpbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGFjdGl2ZSA9IGdldEFjdGl2ZUV4ZXJjaXNlKCk7XHJcblxyXG4gICAgaWYgKGNvZGVFeGVyY2lzZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgYWN0aXZlLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGFjdGl2ZSA9ICQoY29kZUV4ZXJjaXNlc1tpbmRleF0pLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGFjdGl2ZS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICBjb2RlRXhlcmNpc2VzLm5vdChjb2RlRXhlcmNpc2VzLmZpbHRlcihcIi5hY3RpdmVcIikpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBuZXh0RXhlcmNpc2UoKSB7XHJcbiAgICBsZXQgYWN0aXZlID0gZ2V0QWN0aXZlRXhlcmNpc2UoKTtcclxuICAgIGxldCBuZXh0SW5kZXggPSBjb2RlRXhlcmNpc2VzLmluZGV4KGFjdGl2ZSkgKyAxO1xyXG4gICAgaWYgKG5leHRJbmRleCA8IGNvZGVFeGVyY2lzZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgYWN0aXZhdGVFeGVyY2lzZShuZXh0SW5kZXgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcmV2RXhlcmNpc2UoKSB7XHJcbiAgICBsZXQgYWN0aXZlID0gZ2V0QWN0aXZlRXhlcmNpc2UoKTtcclxuICAgIGxldCBwcmV2SW5kZXggPSBjb2RlRXhlcmNpc2VzLmluZGV4KGFjdGl2ZSkgLSAxO1xyXG4gICAgaWYgKHByZXZJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgYWN0aXZhdGVFeGVyY2lzZShwcmV2SW5kZXgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb25maWd1cmUoKSB7XHJcbiAgICBsZXQgcmlnaHROYXYgPSAkKFwiLm5hdmJhci1yaWdodFwiKTtcclxuICAgIHJpZ2h0TmF2LnByZXBlbmQoXHJcbiAgICAgICAgXCI8bGkgY2xhc3M9J2Ryb3Bkb3duIHZpZXctdG9nZ2xlJz4gXFxcclxuICAgICAgPGxhYmVsPlZpZXc6IFxcXHJcbiAgICAgICAgPHNlbGVjdCBjbGFzcz0nbW9kZS1zZWxlY3QnPiBcXFxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT0ndGV4dCc+VGV4dGJvb2s8L29wdGlvbj4gXFxcclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9J3ByZXNlbnQnPkNvZGUgUHJlc2VudGVyPC9vcHRpb24+IFxcXHJcbiAgICAgICAgPC9zZWxlY3Q+IFxcXHJcbiAgICAgIDwvbGFiZWw+IFxcXHJcbiAgICA8L2xpPlwiXHJcbiAgICApO1xyXG5cclxuICAgIGxldCBtb2RlU2VsZWN0ID0gJChcIi5tb2RlLXNlbGVjdFwiKS5jaGFuZ2UocHJlc2VudFRvZ2dsZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvZGVsZW5zTGlzdGVuZXIoZHVyYXRpb24pIHtcclxuICAgIC8vICQoXCIuRXhlY3V0aW9uVmlzdWFsaXplclwiKS5sZW5ndGggPyBjb25maWd1cmVDb2RlbGVucygpIDogc2V0VGltZW91dChjb2RlbGVuc0xpc3RlbmVyLCBkdXJhdGlvbik7XHJcbiAgICAvLyBjb25maWd1cmVDb2RlbGVucygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb25maWd1cmVDb2RlbGVucygpIHtcclxuICAgIGxldCBhY0NvZGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIGFjQ29kZVRpdGxlLnRleHRDb250ZW50ID0gXCJBY3RpdmUgQ29kZSBXaW5kb3dcIjtcclxuICAgIGxldCBhY0NvZGUgPSAkKFwiLmFjX2NvZGVfZGl2XCIpLnJlbW92ZUNsYXNzKFwiY29sLW1kLTEyXCIpO1xyXG4gICAgJChcIi5hY19jb2RlX2RpdlwiKS5hZGRDbGFzcyhcImNvbC1tZC02XCIpO1xyXG4gICAgYWNDb2RlLnByZXBlbmQoYWNDb2RlVGl0bGUpO1xyXG5cclxuICAgIGFjT3V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBhY091dFRpdGxlLnRleHRDb250ZW50ID0gXCJPdXRwdXQgV2luZG93XCI7XHJcbiAgICBsZXQgYWNPdXQgPSAkKFwiLmFjX291dHB1dFwiKS5hZGRDbGFzcyhcImNvbC1tZC02XCIpO1xyXG4gICAgJChcIi5hY19vdXRwdXRcIikucHJlcGVuZChhY091dFRpdGxlKTtcclxuXHJcbiAgICBsZXQgc2tldGNocGFkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBza2V0Y2hwYWRUaXRsZS50ZXh0Q29udGVudCA9IFwiU2tldGNocGFkXCI7XHJcbiAgICBsZXQgc2tldGNocGFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAkKHNrZXRjaHBhZCkuYWRkQ2xhc3MoXCJza2V0Y2hwYWRcIik7XHJcbiAgICBsZXQgc2tldGNocGFkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICQoc2tldGNocGFkQ29udGFpbmVyKS5hZGRDbGFzcyhcInNrZXRjaHBhZC1jb250YWluZXJcIik7XHJcbiAgICBza2V0Y2hwYWRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2tldGNocGFkVGl0bGUpO1xyXG4gICAgc2tldGNocGFkQ29udGFpbmVyLmFwcGVuZENoaWxkKHNrZXRjaHBhZCk7XHJcbiAgICAvLyQoJy5hY19vdXRwdXQnKS5hcHBlbmQoc2tldGNocGFkQ29udGFpbmVyKTtcclxuXHJcbiAgICBsZXQgdmlzdWFsaXplcnMgPSAkKFwiLkV4ZWN1dGlvblZpc3VhbGl6ZXJcIik7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJFY29udGFpbmVyOiBcIiwgdGhpcy5lQ29udGFpbmVyKTtcclxuXHJcbiAgICAkKFwiW2RhdGEtY2hpbGRjb21wb25lbnRdXCIpLm9uKFwiY2xpY2tcIiwgXCJidXR0b24ucm93LW1vZGVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdChcIltkYXRhLWNoaWxkY29tcG9uZW50XVwiKS5yZW1vdmVDbGFzcyhcImNhcmQtbW9kZVwiKTtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoXCJbZGF0YS1jaGlsZGNvbXBvbmVudF1cIikuYWRkQ2xhc3MoXCJyb3ctbW9kZVwiKTtcclxuICAgICAgICAkKHRoaXMpLm5leHQoXCIuY2FyZC1tb2RlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlLWxheW91dFwiKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlLWxheW91dFwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCJbZGF0YS1jaGlsZGNvbXBvbmVudF1cIikub24oXCJjbGlja1wiLCBcImJ1dHRvbi5jYXJkLW1vZGVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdChcIltkYXRhLWNoaWxkY29tcG9uZW50XVwiKS5yZW1vdmVDbGFzcyhcInJvdy1tb2RlXCIpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdChcIltkYXRhLWNoaWxkY29tcG9uZW50XVwiKS5hZGRDbGFzcyhcImNhcmQtbW9kZVwiKTtcclxuICAgICAgICAkKHRoaXMpLnByZXYoXCIucm93LW1vZGVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmUtbGF5b3V0XCIpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmUtbGF5b3V0XCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIltkYXRhLWNoaWxkY29tcG9uZW50XSAuYWNfc2VjdGlvblwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicHJlc2VudGF0aW9uLW9wdGlvbnNcIj48YnV0dG9uIGNsYXNzPVwicm93LW1vZGUgbGF5b3V0LWJ0blwiPjxpbWcgc3JjPVwiLi4vX2ltYWdlcy9yb3ctYnRuLWNvbnRlbnQucG5nXCIgYWx0PVwiUm93c1wiPjwvYnV0dG9uPjxidXR0b24gY2xhc3M9XCJjYXJkLW1vZGUgbGF5b3V0LWJ0blwiPjxpbWcgc3JjPVwiLi4vX2ltYWdlcy9jYXJkLWJ0bi1jb250ZW50LnBuZ1wiIGFsdD1cIkNhcmRcIj48L2J1dHRvbj48L2Rpdj4nXHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZpc3VhbGl6ZXJzLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgbGV0IG1lID0gJCh0aGlzKTtcclxuICAgICAgICBsZXQgY29sMSA9IG1lLmZpbmQoXCIjdml6TGF5b3V0VGRGaXJzdFwiKTtcclxuICAgICAgICBsZXQgY29sMiA9IG1lLmZpbmQoXCIjdml6TGF5b3V0VGRTZWNvbmRcIik7XHJcbiAgICAgICAgbGV0IGRhdGFWaXMgPSBtZS5maW5kKFwiI2RhdGFWaXpcIik7XHJcbiAgICAgICAgbGV0IHN0YWNrSGVhcFRhYmxlID0gbWUuZmluZChcIiNzdGFja0hlYXBUYWJsZVwiKTtcclxuICAgICAgICBsZXQgb3V0cHV0ID0gbWUuZmluZChcIiNwcm9nT3V0cHV0c1wiKTtcclxuICAgICAgICBvdXRwdXQuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgIG1lLnBhcmVudCgpLnByZXBlbmQoXHJcbiAgICAgICAgICAgIFwiPGRpdiBjbGFzcz0ncHJlc2VudGF0aW9uLXRpdGxlJz48ZGl2IGNsYXNzPSd0aXRsZS10ZXh0Jz4gRXhhbXBsZSBcIiArXHJcbiAgICAgICAgICAgICAgICAoTnVtYmVyKGluZGV4KSArIDEpICtcclxuICAgICAgICAgICAgICAgIFwiPC9kaXY+PC9kaXY+XCJcclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYWNDb2RlLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBzZWN0aW9uID0gJCh0aGlzKS5jbG9zZXN0KFwiLmFjLWJsb2NrXCIpLnBhcmVudCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlY3Rpb24sIHNlY3Rpb24ubGVuZ3RoKTtcclxuICAgICAgICBzZWN0aW9uLmFwcGVuZChza2V0Y2hwYWRDb250YWluZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcImJ1dHRvbi5jYXJkLW1vZGVcIikuY2xpY2soKTtcclxuXHJcbiAgICBsZXQgbW9kZVNlbGVjdCA9ICQoXCIubW9kZS1zZWxlY3RcIik7XHJcbiAgICBsZXQgbW9kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJlc2VudE1vZGVcIik7XHJcbiAgICBpZiAobW9kZSA9PSBcInByZXNlbnRcIikge1xyXG4gICAgICAgIG1vZGVTZWxlY3QudmFsKFwicHJlc2VudFwiKTtcclxuICAgICAgICBtb2RlU2VsZWN0LmNoYW5nZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4kKGRvY3VtZW50KS5iaW5kKFwicnVuZXN0b25lOmxvZ2luLWNvbXBsZXRlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIGlmIHVzZXIgaXMgaW5zdHJ1Y3RvciwgZW5hYmxlIHByZXNlbnRlciBtb2RlXHJcbiAgICBpZiAoZUJvb2tDb25maWcuaXNJbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgY29uZmlndXJlKCk7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0U3dpdGNoKCkge1xyXG4gICAgY29uc3QgdG9nZ2xlU3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoZW1lLXN3aXRjaCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcclxuICAgIGNvbnN0IGN1cnJlbnRUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgOiBudWxsO1xyXG5cclxuICAgIGlmIChjdXJyZW50VGhlbWUpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgY3VycmVudFRoZW1lKTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRUaGVtZSA9PT0gJ2RhcmsnKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZVN3aXRjaC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzd2l0Y2hUaGVtZSgpIHtcclxuXHJcblx0dmFyIGNoZWNrQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVja2JveFwiKTtcclxuICAgIGlmIChjaGVja0JveC5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2RhcmsnKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnZGFyaycpOyAvL2FkZCB0aGlzXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2xpZ2h0Jyk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2xpZ2h0Jyk7IC8vYWRkIHRoaXNcclxuICAgIH1cclxufVxyXG4iLCIvKmdsb2JhbCB2YXJpYWJsZSBkZWNsYXJhdGlvbnMqL1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgXCIuLi9jc3MvdXNlci1oaWdobGlnaHRzLmNzc1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldENvbXBsZXRpb25zKCkge1xyXG4gICAgLy8gR2V0IHRoZSBjb21wbGV0aW9uIHN0YXR1c1xyXG4gICAgaWYgKFxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLm1hdGNoKFxyXG4gICAgICAgICAgICAvKGluZGV4Lmh0bWx8dG9jdHJlZS5odG1sfGdlbmluZGV4Lmh0bWx8bmF2aGVscC5odG1sfHRvYy5odG1sfGFzc2lnbm1lbnRzLmh0bWx8RXhlcmNpc2VzLmh0bWwpL1xyXG4gICAgICAgIClcclxuICAgICkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY3VycmVudFBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgaWYgKGN1cnJlbnRQYXRobmFtZS5pbmRleE9mKFwiP1wiKSAhPT0gLTEpIHtcclxuICAgICAgICBjdXJyZW50UGF0aG5hbWUgPSBjdXJyZW50UGF0aG5hbWUuc3Vic3RyaW5nKFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICBjdXJyZW50UGF0aG5hbWUubGFzdEluZGV4T2YoXCI/XCIpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHZhciBkYXRhID0geyBsYXN0UGFnZVVybDogY3VycmVudFBhdGhuYW1lIH07XHJcbiAgICBqUXVlcnlcclxuICAgICAgICAuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogZUJvb2tDb25maWcuYWpheFVSTCArIFwiZ2V0Q29tcGxldGlvblN0YXR1c1wiLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBhc3luYzogZmFsc2UsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSAhPSBcIk5vbmVcIikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbXBsZXRpb25EYXRhID0gJC5wYXJzZUpTT04oZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29tcGxldGlvbkNsYXNzLCBjb21wbGV0aW9uTXNnO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRpb25EYXRhWzBdLmNvbXBsZXRpb25TdGF0dXMgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRpb25DbGFzcyA9IFwiYnV0dG9uQ29uZmlybUNvbXBsZXRpb25cIjtcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0aW9uTXNnID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXCI8aSBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1vayc+PC9pPiBDb21wbGV0ZWQuIFdlbGwgRG9uZSFcIjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGlvbkNsYXNzID0gXCJidXR0b25Bc2tDb21wbGV0aW9uXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGlvbk1zZyA9IFwiTWFyayBhcyBDb21wbGV0ZWRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICQoXCIjbWFpbi1jb250ZW50XCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbGcgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRpb25DbGFzcyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdcIiBpZD1cImNvbXBsZXRpb25CdXR0b25cIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGlvbk1zZyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPC9idXR0b24+PC9kaXY+XCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0xhc3RQb3NpdGlvbkJhbm5lcigpIHtcclxuICAgIHZhciBsYXN0UG9zaXRpb25WYWwgPSAkLmdldFVybFZhcihcImxhc3RQb3NpdGlvblwiKTtcclxuICAgIGlmICh0eXBlb2YgbGFzdFBvc2l0aW9uVmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgJChcImJvZHlcIikuYXBwZW5kKFxyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCIuLi9fc3RhdGljL2xhc3QtcG9pbnQucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTsgcGFkZGluZy10b3A6NTVweDsgbGVmdDogMTBweDsgdG9wOiAnICtcclxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGxhc3RQb3NpdGlvblZhbCkgK1xyXG4gICAgICAgICAgICAgICAgJ3B4O1wiLz4nXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBwYXJzZUludChsYXN0UG9zaXRpb25WYWwpIH0sIDEwMDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGROYXZpZ2F0aW9uQW5kQ29tcGxldGlvbkJ1dHRvbnMoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYubWF0Y2goXHJcbiAgICAgICAgICAgIC8oaW5kZXguaHRtbHxnZW5pbmRleC5odG1sfG5hdmhlbHAuaHRtbHx0b2MuaHRtbHxhc3NpZ25tZW50cy5odG1sfEV4ZXJjaXNlcy5odG1sfHRvY3RyZWUuaHRtbCkvXHJcbiAgICAgICAgKVxyXG4gICAgKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIG5hdkxpbmtCZ1JpZ2h0SGlkZGVuUG9zaXRpb24gPSAtJChcIiNuYXZMaW5rQmdSaWdodFwiKS5vdXRlcldpZHRoKCkgLSA1O1xyXG4gICAgdmFyIG5hdkxpbmtCZ1JpZ2h0SGFsZk9wZW47XHJcbiAgICB2YXIgbmF2TGlua0JnUmlnaHRGdWxsT3BlbiA9IDA7XHJcblxyXG4gICAgaWYgKCQoXCIjY29tcGxldGlvbkJ1dHRvblwiKS5oYXNDbGFzcyhcImJ1dHRvbkFza0NvbXBsZXRpb25cIikpIHtcclxuICAgICAgICBuYXZMaW5rQmdSaWdodEhhbGZPcGVuID0gbmF2TGlua0JnUmlnaHRIaWRkZW5Qb3NpdGlvbiArIDcwO1xyXG4gICAgfSBlbHNlIGlmICgkKFwiI2NvbXBsZXRpb25CdXR0b25cIikuaGFzQ2xhc3MoXCJidXR0b25Db25maXJtQ29tcGxldGlvblwiKSkge1xyXG4gICAgICAgIG5hdkxpbmtCZ1JpZ2h0SGFsZk9wZW4gPSAwO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlbGF0aW9uc05leHRJY29uSW5pdGlhbFBvc2l0aW9uID0gJChcIiNyZWxhdGlvbnMtbmV4dFwiKS5jc3MoXCJyaWdodFwiKTtcclxuICAgIHZhciByZWxhdGlvbnNOZXh0SWNvbk5ld1Bvc2l0aW9uID0gLShuYXZMaW5rQmdSaWdodEhpZGRlblBvc2l0aW9uICsgMzUpO1xyXG5cclxuICAgICQoXCIjbmF2TGlua0JnUmlnaHRcIikuY3NzKFwicmlnaHRcIiwgbmF2TGlua0JnUmlnaHRIaWRkZW5Qb3NpdGlvbikuc2hvdygpO1xyXG4gICAgdmFyIG5hdkJnU2hvd24gPSBmYWxzZTtcclxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJCh3aW5kb3cpLmhlaWdodCgpID09XHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmhlaWdodCgpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICQoXCIjbmF2TGlua0JnUmlnaHRcIikuYW5pbWF0ZShcclxuICAgICAgICAgICAgICAgIHsgcmlnaHQ6IG5hdkxpbmtCZ1JpZ2h0SGFsZk9wZW4gfSxcclxuICAgICAgICAgICAgICAgIDIwMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAkKFwiI25hdkxpbmtCZ0xlZnRcIikuYW5pbWF0ZSh7IGxlZnQ6IFwiMHB4XCIgfSwgMjAwKTtcclxuICAgICAgICAgICAgaWYgKCQoXCIjY29tcGxldGlvbkJ1dHRvblwiKS5oYXNDbGFzcyhcImJ1dHRvbkNvbmZpcm1Db21wbGV0aW9uXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3JlbGF0aW9ucy1uZXh0XCIpLmFuaW1hdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgeyByaWdodDogcmVsYXRpb25zTmV4dEljb25OZXdQb3NpdGlvbiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIDIwMFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYXZCZ1Nob3duID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG5hdkJnU2hvd24pIHtcclxuICAgICAgICAgICAgJChcIiNuYXZMaW5rQmdSaWdodFwiKS5hbmltYXRlKFxyXG4gICAgICAgICAgICAgICAgeyByaWdodDogbmF2TGlua0JnUmlnaHRIaWRkZW5Qb3NpdGlvbiB9LFxyXG4gICAgICAgICAgICAgICAgMjAwXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICQoXCIjbmF2TGlua0JnTGVmdFwiKS5hbmltYXRlKHsgbGVmdDogXCItNjVweFwiIH0sIDIwMCk7XHJcbiAgICAgICAgICAgICQoXCIjcmVsYXRpb25zLW5leHRcIikuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICByaWdodDogcmVsYXRpb25zTmV4dEljb25Jbml0aWFsUG9zaXRpb24sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBuYXZCZ1Nob3duID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIGNvbXBsZXRpb25GbGFnID0gMDtcclxuICAgIGlmICgkKFwiI2NvbXBsZXRpb25CdXR0b25cIikuaGFzQ2xhc3MoXCJidXR0b25Bc2tDb21wbGV0aW9uXCIpKSB7XHJcbiAgICAgICAgY29tcGxldGlvbkZsYWcgPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb21wbGV0aW9uRmxhZyA9IDE7XHJcbiAgICB9XHJcbiAgICAkKFwiI2NvbXBsZXRpb25CdXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJidXR0b25Bc2tDb21wbGV0aW9uXCIpKSB7XHJcbiAgICAgICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImJ1dHRvbkFza0NvbXBsZXRpb25cIilcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImJ1dHRvbkNvbmZpcm1Db21wbGV0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICAuaHRtbChcclxuICAgICAgICAgICAgICAgICAgICBcIjxpIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLW9rJz48L2k+IENvbXBsZXRlZC4gV2VsbCBEb25lIVwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAkKFwiI25hdkxpbmtCZ1JpZ2h0XCIpLmFuaW1hdGUoeyByaWdodDogbmF2TGlua0JnUmlnaHRGdWxsT3BlbiB9KTtcclxuICAgICAgICAgICAgJChcIiNyZWxhdGlvbnMtbmV4dFwiKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiByZWxhdGlvbnNOZXh0SWNvbk5ld1Bvc2l0aW9uLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbmF2TGlua0JnUmlnaHRIYWxmT3BlbiA9IDA7XHJcbiAgICAgICAgICAgIGNvbXBsZXRpb25GbGFnID0gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJidXR0b25Db25maXJtQ29tcGxldGlvblwiKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJidXR0b25Db25maXJtQ29tcGxldGlvblwiKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiYnV0dG9uQXNrQ29tcGxldGlvblwiKVxyXG4gICAgICAgICAgICAgICAgLmh0bWwoXCJNYXJrIGFzIENvbXBsZXRlZFwiKTtcclxuICAgICAgICAgICAgbmF2TGlua0JnUmlnaHRIYWxmT3BlbiA9IG5hdkxpbmtCZ1JpZ2h0SGlkZGVuUG9zaXRpb24gKyA3MDtcclxuICAgICAgICAgICAgJChcIiNuYXZMaW5rQmdSaWdodFwiKS5hbmltYXRlKHsgcmlnaHQ6IG5hdkxpbmtCZ1JpZ2h0SGFsZk9wZW4gfSk7XHJcbiAgICAgICAgICAgICQoXCIjcmVsYXRpb25zLW5leHRcIikuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICByaWdodDogcmVsYXRpb25zTmV4dEljb25Jbml0aWFsUG9zaXRpb24sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb21wbGV0aW9uRmxhZyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb2Nlc3NQYWdlU3RhdGUoY29tcGxldGlvbkZsYWcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCh3aW5kb3cpLm9uKFwiYmVmb3JldW5sb2FkXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGNvbXBsZXRpb25GbGFnID09IDApIHtcclxuICAgICAgICAgICAgcHJvY2Vzc1BhZ2VTdGF0ZShjb21wbGV0aW9uRmxhZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlY29yYXRlVGFibGVPZkNvbnRlbnRzKCkge1xyXG4gICAgaWYgKFxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcInRvYy5odG1sXCIpICE9IC0xIHx8XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiaW5kZXguaHRtbFwiKSAhPSAtMVxyXG4gICAgKSB7XHJcbiAgICAgICAgalF1ZXJ5LmdldChlQm9va0NvbmZpZy5hamF4VVJMICsgXCJnZXRBbGxDb21wbGV0aW9uU3RhdHVzXCIsIGZ1bmN0aW9uIChcclxuICAgICAgICAgICAgZGF0YVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB2YXIgc3ViQ2hhcHRlckxpc3Q7XHJcbiAgICAgICAgICAgIGlmIChkYXRhICE9IFwiTm9uZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJDaGFwdGVyTGlzdCA9ICQucGFyc2VKU09OKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBhbGxTdWJDaGFwdGVyVVJMcyA9ICQoXCIjbWFpbi1jb250ZW50IGRpdiBsaSBhXCIpO1xyXG4gICAgICAgICAgICAgICAgJC5lYWNoKHN1YkNoYXB0ZXJMaXN0LCBmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IGFsbFN1YkNoYXB0ZXJVUkxzLmxlbmd0aDsgcysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFN1YkNoYXB0ZXJVUkxzW3NdLmhyZWYuaW5kZXhPZihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNoYXB0ZXJOYW1lICsgXCIvXCIgKyBpdGVtLnN1YkNoYXB0ZXJOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApICE9IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uY29tcGxldGlvblN0YXR1cyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChhbGxTdWJDaGFwdGVyVVJMc1tzXS5wYXJlbnRFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJjb21wbGV0ZWRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImluZm9UZXh0Q29tcGxldGVkXCI+LSBDb21wbGV0ZWQgdGhpcyB0b3BpYyBvbiAnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmVuZERhdGUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPC9zcGFuPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNoaWxkcmVuKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpcnN0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmhvdmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5leHQoXCIuaW5mb1RleHRDb21wbGV0ZWRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmV4dChcIi5pbmZvVGV4dENvbXBsZXRlZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmNvbXBsZXRpb25TdGF0dXMgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoYWxsU3ViQ2hhcHRlclVSTHNbc10ucGFyZW50RWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiYWN0aXZlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJpbmZvVGV4dEFjdGl2ZVwiPkxhc3QgcmVhZCB0aGlzIHRvcGljIG9uICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZW5kRGF0ZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8L3NwYW4+XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2hpbGRyZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlyc3QoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaG92ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmV4dChcIi5pbmZvVGV4dEFjdGl2ZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uZXh0KFwiLmluZm9UZXh0QWN0aXZlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBkYXRhID0geyBjb3Vyc2U6IGVCb29rQ29uZmlnLmNvdXJzZSB9O1xyXG4gICAgICAgIGpRdWVyeS5nZXQoZUJvb2tDb25maWcuYWpheFVSTCArIFwiZ2V0bGFzdHBhZ2VcIiwgZGF0YSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgdmFyIGxhc3RQYWdlRGF0YTtcclxuICAgICAgICAgICAgaWYgKGRhdGEgIT0gXCJOb25lXCIpIHtcclxuICAgICAgICAgICAgICAgIGxhc3RQYWdlRGF0YSA9ICQucGFyc2VKU09OKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxhc3RQYWdlRGF0YVswXS5sYXN0UGFnZUNoYXB0ZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjY29udGludWUtcmVhZGluZ1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2hvdygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5odG1sKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgaWQ9XCJqdW1wLXRvLWNoYXB0ZXJcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm9cIiA+PHN0cm9uZz5Zb3Ugd2VyZSBMYXN0IFJlYWRpbmc6PC9zdHJvbmc+ICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RQYWdlRGF0YVswXS5sYXN0UGFnZUNoYXB0ZXIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsYXN0UGFnZURhdGFbMF0ubGFzdFBhZ2VTdWJjaGFwdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIgJmd0OyBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFBhZ2VEYXRhWzBdLmxhc3RQYWdlU3ViY2hhcHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIDxhIGhyZWY9XCInICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0UGFnZURhdGFbMF0ubGFzdFBhZ2VVcmwgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiP2xhc3RQb3NpdGlvbj1cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFBhZ2VEYXRhWzBdLmxhc3RQYWdlU2Nyb2xsTG9jYXRpb24gK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcIj5Db250aW51ZSBSZWFkaW5nPC9hPjwvZGl2PidcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbmFibGVDb21wbGV0aW9ucygpIHtcclxuICAgIGdldENvbXBsZXRpb25zKCk7XHJcbiAgICBzaG93TGFzdFBvc2l0aW9uQmFubmVyKCk7XHJcbiAgICBhZGROYXZpZ2F0aW9uQW5kQ29tcGxldGlvbkJ1dHRvbnMoKTtcclxuICAgIGRlY29yYXRlVGFibGVPZkNvbnRlbnRzKCk7XHJcbn1cclxuXHJcbi8vIGNhbGwgZW5hYmxlIHVzZXIgaGlnaGxpZ2h0cyBhZnRlciBsb2dpblxyXG4kKGRvY3VtZW50KS5iaW5kKFwicnVuZXN0b25lOmxvZ2luXCIsIGVuYWJsZUNvbXBsZXRpb25zKTtcclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NQYWdlU3RhdGUoY29tcGxldGlvbkZsYWcpIHtcclxuICAgIC8qTG9nIGxhc3QgcGFnZSB2aXNpdGVkKi9cclxuICAgIHZhciBjdXJyZW50UGF0aG5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICBpZiAoY3VycmVudFBhdGhuYW1lLmluZGV4T2YoXCI/XCIpICE9PSAtMSkge1xyXG4gICAgICAgIGN1cnJlbnRQYXRobmFtZSA9IGN1cnJlbnRQYXRobmFtZS5zdWJzdHJpbmcoXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIGN1cnJlbnRQYXRobmFtZS5sYXN0SW5kZXhPZihcIj9cIilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgbGFzdFBhZ2VVcmw6IGN1cnJlbnRQYXRobmFtZSxcclxuICAgICAgICBsYXN0UGFnZVNjcm9sbExvY2F0aW9uOiAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXHJcbiAgICAgICAgY29tcGxldGlvbkZsYWc6IGNvbXBsZXRpb25GbGFnLFxyXG4gICAgICAgIGNvdXJzZTogZUJvb2tDb25maWcuY291cnNlLFxyXG4gICAgfTtcclxuICAgICQoZG9jdW1lbnQpLmFqYXhFcnJvcihmdW5jdGlvbiAoZSwganFoeHIsIHNldHRpbmdzLCBleGNlcHRpb24pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlcXVlc3QgRmFpbGVkIGZvciBcIiArIHNldHRpbmdzLnVybCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9KTtcclxuICAgIGpRdWVyeS5hamF4KHtcclxuICAgICAgICB1cmw6IGVCb29rQ29uZmlnLmFqYXhVUkwgKyBcInVwZGF0ZWxhc3RwYWdlXCIsXHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgIH0pO1xyXG59XHJcblxyXG4kLmV4dGVuZCh7XHJcbiAgICBnZXRVcmxWYXJzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhcnMgPSBbXSxcclxuICAgICAgICAgICAgaGFzaDtcclxuICAgICAgICB2YXIgaGFzaGVzID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaFxyXG4gICAgICAgICAgICAuc2xpY2Uod2luZG93LmxvY2F0aW9uLnNlYXJjaC5pbmRleE9mKFwiP1wiKSArIDEpXHJcbiAgICAgICAgICAgIC5zcGxpdChcIiZcIik7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYXNoZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaGFzaCA9IGhhc2hlc1tpXS5zcGxpdChcIj1cIik7XHJcbiAgICAgICAgICAgIHZhcnMucHVzaChoYXNoWzBdKTtcclxuICAgICAgICAgICAgdmFyc1toYXNoWzBdXSA9IGhhc2hbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YXJzO1xyXG4gICAgfSxcclxuICAgIGdldFVybFZhcjogZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gJC5nZXRVcmxWYXJzKClbbmFtZV07XHJcbiAgICB9LFxyXG59KTtcclxuIiwiKGZ1bmN0aW9uICgkKSB7XHJcbiAgLyoqXHJcbiAgICogUGF0Y2ggVE9DIGxpc3QuXHJcbiAgICpcclxuICAgKiBXaWxsIG11dGF0ZSB0aGUgdW5kZXJseWluZyBzcGFuIHRvIGhhdmUgYSBjb3JyZWN0IHVsIGZvciBuYXYuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gJHNwYW46IFNwYW4gY29udGFpbmluZyBuZXN0ZWQgVUwncyB0byBtdXRhdGUuXHJcbiAgICogQHBhcmFtIG1pbkxldmVsOiBTdGFydGluZyBsZXZlbCBmb3IgbmVzdGVkIGxpc3RzLiAoMTogZ2xvYmFsLCAyOiBsb2NhbCkuXHJcbiAgICovXHJcbiAgdmFyIHBhdGNoVG9jID0gZnVuY3Rpb24gKCR1bCwgbWluTGV2ZWwpIHtcclxuICAgIHZhciBmaW5kQSxcclxuICAgICAgcGF0Y2hUYWJsZXMsXHJcbiAgICAgICRsb2NhbExpO1xyXG5cclxuICAgIC8vIEZpbmQgYWxsIGEgXCJpbnRlcm5hbFwiIHRhZ3MsIHRyYXZlcnNpbmcgcmVjdXJzaXZlbHkuXHJcbiAgICBmaW5kQSA9IGZ1bmN0aW9uICgkZWxlbSwgbGV2ZWwpIHtcclxuICAgICAgbGV2ZWwgPSBsZXZlbCB8fCAwO1xyXG4gICAgICB2YXIgJGl0ZW1zID0gJGVsZW0uZmluZChcIj4gbGkgPiBhLmludGVybmFsLCA+IHVsLCA+IGxpID4gdWxcIik7XHJcblxyXG4gICAgICAvLyBJdGVyYXRlIGV2ZXJ5dGhpbmcgaW4gb3JkZXIuXHJcbiAgICAgICRpdGVtcy5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xyXG4gICAgICAgIHZhciAkaXRlbSA9ICQoaXRlbSksXHJcbiAgICAgICAgICB0YWcgPSBpdGVtLnRhZ05hbWUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICRjaGlsZHJlbkxpID0gJGl0ZW0uY2hpbGRyZW4oJ2xpJyksXHJcbiAgICAgICAgICAkcGFyZW50TGkgPSAkKCRpdGVtLnBhcmVudCgnbGknKSwgJGl0ZW0ucGFyZW50KCkucGFyZW50KCdsaScpKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIGRyb3Bkb3ducyBpZiBtb3JlIGNoaWxkcmVuIGFuZCBhYm92ZSBtaW5pbXVtIGxldmVsLlxyXG4gICAgICAgIGlmICh0YWcgPT09ICd1bCcgJiYgbGV2ZWwgPj0gbWluTGV2ZWwgJiYgJGNoaWxkcmVuTGkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgJHBhcmVudExpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcygnZHJvcGRvd24tc3VibWVudScpXHJcbiAgICAgICAgICAgIC5jaGlsZHJlbignYScpLmZpcnN0KCkuYXR0cigndGFiaW5kZXgnLCAtMSk7XHJcblxyXG4gICAgICAgICAgJGl0ZW0uYWRkQ2xhc3MoJ2Ryb3Bkb3duLW1lbnUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZpbmRBKCRpdGVtLCBsZXZlbCArIDEpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgZmluZEEoJHVsKTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBQYXRjaCBhbGwgdGFibGVzIHRvIHJlbW92ZSBgYGRvY3V0aWxzYGAgY2xhc3MgYW5kIGFkZCBCb290c3RyYXAgYmFzZVxyXG4gICAqIGBgdGFibGVgYCBjbGFzcy5cclxuICAgKi9cclxuICBwYXRjaFRhYmxlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCJ0YWJsZS5kb2N1dGlsc1wiKVxyXG4gICAgICAucmVtb3ZlQ2xhc3MoXCJkb2N1dGlsc1wiKVxyXG4gICAgICAuYWRkQ2xhc3MoXCJ0YWJsZVwiKVxyXG4gICAgICAuYXR0cihcImJvcmRlclwiLCAwKTtcclxuICB9O1xyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLypcclxuICAgICAqIFNjcm9sbCB0aGUgd2luZG93IHRvIGF2b2lkIHRoZSB0b3BuYXYgYmFyXHJcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vdHdpdHRlci9ib290c3RyYXAvaXNzdWVzLzE3NjhcclxuICAgICAqL1xyXG4gICAgaWYgKCQoXCIjbmF2YmFyLm5hdmJhci1maXhlZC10b3BcIikubGVuZ3RoID4gMCkge1xyXG4gICAgICB2YXIgbmF2SGVpZ2h0ID0gJChcIiNuYXZiYXJcIikuaGVpZ2h0KCksXHJcbiAgICAgICAgc2hpZnRXaW5kb3cgPSBmdW5jdGlvbigpIHsgc2Nyb2xsQnkoMCwgLW5hdkhlaWdodCAtIDEwKTsgfTtcclxuXHJcbiAgICAgIGlmIChsb2NhdGlvbi5oYXNoKSB7XHJcbiAgICAgICAgc2hpZnRXaW5kb3coKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIHNoaWZ0V2luZG93KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgc3R5bGluZywgc3RydWN0dXJlIHRvIFRPQydzLlxyXG4gICAgJChcIi5kcm9wZG93bi1tZW51XCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKHRoaXMpLmZpbmQoXCJ1bFwiKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaXRlbSl7XHJcbiAgICAgICAgdmFyICRpdGVtID0gJChpdGVtKTtcclxuICAgICAgICAkaXRlbS5hZGRDbGFzcygndW5zdHlsZWQnKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBHbG9iYWwgVE9DLlxyXG4gICAgaWYgKCQoXCJ1bC5nbG9iYWx0b2MgbGlcIikubGVuZ3RoKSB7XHJcbiAgICAgIHBhdGNoVG9jKCQoXCJ1bC5nbG9iYWx0b2NcIiksIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gUmVtb3ZlIEdsb2JhbCBUT0MuXHJcbiAgICAgICQoXCIuZ2xvYmFsdG9jLWNvbnRhaW5lclwiKS5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBMb2NhbCBUT0MuXHJcbiAgICBwYXRjaFRvYygkKFwidWwubG9jYWx0b2NcIiksIDIpO1xyXG5cclxuICAgIC8vIE11dGF0ZSBzdWItbGlzdHMgKGZvciBicy0yLjMuMCkuXHJcbiAgICAkKFwiLmRyb3Bkb3duLW1lbnUgdWxcIikubm90KFwiLmRyb3Bkb3duLW1lbnVcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciAkdWwgPSAkKHRoaXMpLFxyXG4gICAgICAgICRwYXJlbnQgPSAkdWwucGFyZW50KCksXHJcbiAgICAgICAgdGFnID0gJHBhcmVudFswXS50YWdOYW1lLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgJGtpZHMgPSAkdWwuY2hpbGRyZW4oKS5kZXRhY2goKTtcclxuXHJcbiAgICAgIC8vIFJlcGxhY2UgbGlzdCB3aXRoIGl0ZW1zIGlmIHN1Ym1lbnUgaGVhZGVyLlxyXG4gICAgICBpZiAodGFnID09PSBcInVsXCIpIHtcclxuICAgICAgICAkdWwucmVwbGFjZVdpdGgoJGtpZHMpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRhZyA9PT0gXCJsaVwiKSB7XHJcbiAgICAgICAgLy8gSW5zZXJ0IGludG8gcHJldmlvdXMgbGlzdC5cclxuICAgICAgICAkcGFyZW50LmFmdGVyKCRraWRzKTtcclxuICAgICAgICAkdWwucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEFkZCBkaXZpZGVyIGluIHBhZ2UgVE9DLlxyXG4gICAgJGxvY2FsTGkgPSAkKFwidWwubG9jYWx0b2MgbGlcIik7XHJcbiAgICBpZiAoJGxvY2FsTGkubGVuZ3RoID4gMikge1xyXG4gICAgICAkbG9jYWxMaS5maXJzdCgpLmFmdGVyKCc8bGkgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFbmFibGUgZHJvcGRvd24uXHJcbiAgICAkKCcuZHJvcGRvd24tdG9nZ2xlJykuZHJvcGRvd24oKTtcclxuXHJcbiAgICAvLyBQYXRjaCB0YWJsZXMuXHJcbiAgICBwYXRjaFRhYmxlcygpO1xyXG5cclxuICAgIC8vIEFkZCBOb3RlLCBXYXJuaW5nIHN0eWxlcy5cclxuICAgICQoJ2Rpdi5ub3RlJykuYWRkQ2xhc3MoJ2FsZXJ0JykuYWRkQ2xhc3MoJ2FsZXJ0LWluZm8nKTtcclxuICAgICQoJ2Rpdi53YXJuaW5nJykuYWRkQ2xhc3MoJ2FsZXJ0JykuYWRkQ2xhc3MoJ2FsZXJ0LXdhcm5pbmcnKTtcclxuXHJcbiAgICAvLyBJbmxpbmUgY29kZSBzdHlsZXMgdG8gQm9vdHN0cmFwIHN0eWxlLlxyXG4gICAgJCgndHQuZG9jdXRpbHMubGl0ZXJhbCcpLm5vdChcIi54cmVmXCIpLmVhY2goZnVuY3Rpb24gKGksIGUpIHtcclxuICAgICAgLy8gaWdub3JlIHJlZmVyZW5jZXNcclxuICAgICAgaWYgKCEkKGUpLnBhcmVudCgpLmhhc0NsYXNzKFwicmVmZXJlbmNlXCIpKSB7XHJcbiAgICAgICAgJChlKS5yZXBsYWNlV2l0aChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gJChcIjxjb2RlIC8+XCIpLnRleHQoJCh0aGlzKS50ZXh0KCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9fSk7XHJcbiAgfSk7XHJcbn0od2luZG93LmpRdWVyeSkpO1xyXG4iLCIvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyB8ZG9jbmFtZXwgLSBBIGZyYW1ld29yayBhbGxvd2luZyBhIFJ1bmVzdG9uZSBjb21wb25lbnQgdG8gbG9hZCBvbmx5IHRoZSBKUyBpdCBuZWVkc1xyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyBUaGUgSmF2YVNjcmlwdCByZXF1aXJlZCBieSBhbGwgUnVuZXN0b25lIGNvbXBvbmVudHMgaXMgcXVpdGUgbGFyZ2UgYW5kIHJlc3VsdHMgaW4gc2xvdyBwYWdlIGxvYWRzLiBUaGlzIGFwcHJvYWNoIGVuYWJsZXMgYSBSdW5lc3RvbmUgY29tcG9uZW50IHRvIGxvYWQgb25seSB0aGUgSmF2YVNjcmlwdCBpdCBuZWVkcywgcmF0aGVyIHRoYW4gbG9hZGluZyBKYXZhU2NyaXB0IGZvciBhbGwgdGhlIGNvbXBvbmVudHMgcmVnYXJkbGVzcyBvZiB3aGljaCBhcmUgYWN0dWFsbHkgdXNlZC5cclxuLy9cclxuLy8gVG8gYWNjb21wbGlzaCB0aGlzLCB3ZWJwYWNrJ3Mgc3BsaXQtY2h1bmtzIGFiaWxpdHkgYW5hbHl6ZXMgYWxsIEpTLCBzdGFydGluZyBmcm9tIHRoaXMgZmlsZS4gVGhlIGR5bmFtaWMgaW1wb3J0cyBiZWxvdyBhcmUgdHJhbnNmb3JtZWQgYnkgd2VicGFjayBpbnRvIHRoZSBkeW5hbWljIGZldGNoZXMgb2YganVzdCB0aGUgSlMgcmVxdWlyZWQgYnkgZWFjaCBmaWxlIGFuZCBhbGwgaXRzIGRlcGVuZGVuY2llcy4gKElmIHVzaW5nIHN0YXRpYyBpbXBvcnRzLCB3ZWJwYWNrIHdpbGwgYXNzdW1lIHRoYXQgYWxsIGZpbGVzIGFyZSBhbHJlYWR5IHN0YXRpY2FsbHkgbG9hZGVkIHZpYSBzY3JpcHQgdGFncywgZGVmZWF0aW5nIHRoZSBwdXJwb3NlIG9mIHRoaXMgZnJhbWV3b3JrLilcclxuLy9cclxuLy8gSG93ZXZlciwgdGhpcyBhcHByb2FjaCBsZWFkcyB0byBjb21wbGV4aXR5OlxyXG4vL1xyXG4vLyAtICAgIFRoZSBgYGRhdGEtY29tcG9uZW50YGAgYXR0cmlidXRlIG9mIGVhY2ggY29tcG9uZW50IG11c3QgYmUga2VwdCBpbiBzeW5jIHdpdGggdGhlIGtleXMgb2YgdGhlIGBgbW9kdWxlX21hcGBgIGJlbG93LlxyXG4vLyAtICAgIFRoZSB2YWx1ZXMgaW4gdGhlIGBgbW9kdWxlX21hcGBgIG11c3QgYmUga2VwdCBpbiBzeW5jIHdpdGggdGhlIEphdmFTY3JpcHQgZmlsZXMgd2hpY2ggaW1wbGVtZW50IGVhY2ggb2YgdGhlIGNvbXBvbmVudHMuXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG4vLyBTdGF0aWMgaW1wb3J0c1xyXG4vLyA9PT09PT09PT09PT09PVxyXG4vLyBUaGVzZSBpbXBvcnRzIGFyZSAod2UgYXNzdW1lKSBuZWVkZWQgYnkgYWxsIHBhZ2VzLiBIb3dldmVyLCBpdCB3b3VsZCBiZSBtdWNoIGJldHRlciB0byBsb2FkIHRoZXNlIGluIHRoZSBtb2R1bGVzIHRoYXQgYWN0dWFsbHkgdXNlIHRoZW0uXHJcbi8vXHJcbi8vIFRoZXNlIGFyZSBzdGF0aWMgaW1wb3J0czsgY29kZSBpbiBgZHluYW1pY2FsbHkgbG9hZGVkIGNvbXBvbmVudHNgXyBkZWFscyB3aXRoIGR5bmFtaWMgaW1wb3J0cy5cclxuLy9cclxuLy8galF1ZXJ5LXJlbGF0ZWQgaW1wb3J0cy5cclxuaW1wb3J0IFwianF1ZXJ5LXVpL2pxdWVyeS11aS5qc1wiO1xyXG5pbXBvcnQgXCJqcXVlcnktdWkvdGhlbWVzL2Jhc2UvanF1ZXJ5LnVpLmFsbC5jc3NcIjtcclxuaW1wb3J0IFwiLi9ydW5lc3RvbmUvY29tbW9uL2pzL2pxdWVyeS5pZGxlLXRpbWVyLmpzXCI7XHJcbmltcG9ydCBcIi4vcnVuZXN0b25lL2NvbW1vbi9qcy9qcXVlcnlfaTE4bi9qcXVlcnkuaTE4bi5qc1wiO1xyXG5pbXBvcnQgXCIuL3J1bmVzdG9uZS9jb21tb24vanMvanF1ZXJ5X2kxOG4vanF1ZXJ5LmkxOG4uZW1pdHRlci5iaWRpLmpzXCI7XHJcbmltcG9ydCBcIi4vcnVuZXN0b25lL2NvbW1vbi9qcy9qcXVlcnlfaTE4bi9qcXVlcnkuaTE4bi5lbWl0dGVyLmpzXCI7XHJcbmltcG9ydCBcIi4vcnVuZXN0b25lL2NvbW1vbi9qcy9qcXVlcnlfaTE4bi9qcXVlcnkuaTE4bi5mYWxsYmFja3MuanNcIjtcclxuaW1wb3J0IFwiLi9ydW5lc3RvbmUvY29tbW9uL2pzL2pxdWVyeV9pMThuL2pxdWVyeS5pMThuLm1lc3NhZ2VzdG9yZS5qc1wiO1xyXG5pbXBvcnQgXCIuL3J1bmVzdG9uZS9jb21tb24vanMvanF1ZXJ5X2kxOG4vanF1ZXJ5LmkxOG4ucGFyc2VyLmpzXCI7XHJcbmltcG9ydCBcIi4vcnVuZXN0b25lL2NvbW1vbi9qcy9qcXVlcnlfaTE4bi9qcXVlcnkuaTE4bi5sYW5ndWFnZS5qc1wiO1xyXG5cclxuLy8gQm9vdHN0cmFwXHJcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5qc1wiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiO1xyXG5pbXBvcnQgXCIuL3J1bmVzdG9uZS9jb21tb24vcHJvamVjdF90ZW1wbGF0ZS9fdGVtcGxhdGVzL3BsdWdpbl9sYXlvdXRzL3NwaGlueF9ib290c3RyYXAvc3RhdGljL2Jvb3RzdHJhcC1zcGhpbnguanNcIjtcclxuaW1wb3J0IFwiLi9ydW5lc3RvbmUvY29tbW9uL2Nzcy9ydW5lc3RvbmUtY3VzdG9tLXNwaGlueC1ib290c3RyYXAuY3NzXCI7XHJcblxyXG4vLyBNaXNjXHJcbmltcG9ydCBcIi4vcnVuZXN0b25lL2NvbW1vbi9qcy9ib29rZnVuY3MuanNcIjtcclxuaW1wb3J0IFwiLi9ydW5lc3RvbmUvY29tbW9uL2pzL3VzZXItaGlnaGxpZ2h0cy5qc1wiO1xyXG5cclxuLy8gVGhlc2UgYmVsb25nIGluIGR5bmFtaWMgaW1wb3J0cyBmb3IgdGhlIG9idmlvdXMgY29tcG9uZW50OyBob3dldmVyLCB0aGVzZSBjb21wb25lbnRzIGRvbid0IGluY2x1ZGUgYSBgYGRhdGEtY29tcG9uZW50YGAgYXR0cmlidXRlLlxyXG5pbXBvcnQgXCIuL3J1bmVzdG9uZS9tYXRyaXhlcS9jc3MvbWF0cml4ZXEuY3NzXCI7XHJcbmltcG9ydCBcIi4vcnVuZXN0b25lL3dlYmdsZGVtby9jc3Mvd2ViZ2xpbnRlcmFjdGl2ZS5jc3NcIjtcclxuXHJcbi8vIFRoZXNlIGFyZSBvbmx5IG5lZWRlZCBmb3IgdGhlIFJ1bmVzdG9uZSBib29rLCBidXQgbm90IGluIGEgbGlicmFyeSBtb2RlIChzdWNoIGFzIHByZXRleHQpLiBJIHdvdWxkIHByZWZlciB0byBkeW5hbWljYWxseSBsb2FkIHRoZW0uIEhvd2V2ZXIsIHRoZXNlIHNjcmlwdHMgYXJlIHNvIHNtYWxsIEkgaGF2ZW4ndCBib3RoZXJlZCB0byBkbyBzby5cclxuaW1wb3J0IHsgZ2V0U3dpdGNoLCBzd2l0Y2hUaGVtZSB9IGZyb20gXCIuL3J1bmVzdG9uZS9jb21tb24vanMvdGhlbWUuanNcIjtcclxuaW1wb3J0IFwiLi9ydW5lc3RvbmUvY29tbW9uL2pzL3ByZXNlbnRlcl9tb2RlLmpzXCI7XHJcbmltcG9ydCBcIi4vcnVuZXN0b25lL2NvbW1vbi9jc3MvcHJlc2VudGVyX21vZGUuY3NzXCI7XHJcblxyXG5cclxuLy8gRHluYW1pY2FsbHkgbG9hZGVkIGNvbXBvbmVudHNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVGhpcyBwcm92aWRlcyBhIGxpc3Qgb2YgbW9kdWxlcyB0aGF0IGNvbXBvbmVudHMgY2FuIGR5bmFtaWNhbGx5IGltcG9ydC4gV2VicGFjayB3aWxsIGNyZWF0ZSBhIGxpc3Qgb2YgaW1wb3J0cyBmb3IgZWFjaCBiYXNlZCBvbiBpdHMgYW5hbHlzaXMuXHJcbmNvbnN0IG1vZHVsZV9tYXAgPSB7XHJcbiAgICAvLyBXcmFwIGVhY2ggaW1wb3J0IGluIGEgZnVuY3Rpb24sIHNvIHRoYXQgaXQgd29uJ3Qgb2NjdXIgdW50aWwgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZC4gV2hpbGUgc29tZXRoaW5nIGNsZWFuZXIgd291bGQgYmUgbmljZSwgd2VicGFjayBjYW4ndCBhbmFseXplIHRoaW5ncyBsaWtlIGBgaW1wb3J0KGV4cHJlc3Npb24pYGAuXHJcbiAgICAvL1xyXG4gICAgLy8gVGhlIGtleXMgbXVzdCBtYXRjaCB0aGUgdmFsdWUgb2YgZWFjaCBjb21wb25lbnQncyBgYGRhdGEtY29tcG9uZW50YGAgYXR0cmlidXRlIC0tIHRoZSBgYHJ1bmVzdG9uZV9pbXBvcnRgYCBhbmQgYGBydW5lc3RvbmVfYXV0b19pbXBvcnRgYCBmdW5jdGlvbnMgYXNzdW1lIHRoaXMuXHJcbiAgICBhY3RpdmVjb2RlOiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS9hY3RpdmVjb2RlL2pzL2FjZmFjdG9yeS5qc1wiKSxcclxuICAgIGJsZTogKCkgPT4gaW1wb3J0KFwiLi9ydW5lc3RvbmUvY2VsbGJvdGljcy9qcy9ibGUuanNcIiksXHJcbiAgICAvLyBBbHdheXMgaW1wb3J0IHRoZSB0aW1lZCB2ZXJzaW9uIG9mIGEgY29tcG9uZW50IGlmIGF2YWlsYWJsZSwgc2luY2UgdGhlIHRpbWVkIGNvbXBvbmVudHMgYWxzbyBkZWZpbmUgdGhlIGNvbXBvbmVudCdzIGZhY3RvcnkgYW5kIGluY2x1ZGUgdGhlIGNvbXBvbmVudCBhcyB3ZWxsLiBOb3RlIHRoYXQgYGBhY2ZhY3RvcnlgYCBpbXBvcnRzIHRoZSB0aW1lZCBjb21wb25lbnRzIG9mIEFjdGl2ZUNvZGUsIHNvIGl0IGZvbGxvd3MgdGhpcyBwYXR0ZXJuLlxyXG4gICAgY2xpY2thYmxlYXJlYTogKCkgPT4gaW1wb3J0KFwiLi9ydW5lc3RvbmUvY2xpY2thYmxlQXJlYS9qcy90aW1lZGNsaWNrYWJsZS5qc1wiKSxcclxuICAgIGNvZGVsZW5zOiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS9jb2RlbGVucy9qcy9jb2RlbGVucy5qc1wiKSxcclxuICAgIGRhdGFmaWxlOiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS9kYXRhZmlsZS9qcy9kYXRhZmlsZS5qc1wiKSxcclxuICAgIGRyYWduZHJvcDogKCkgPT4gaW1wb3J0KFwiLi9ydW5lc3RvbmUvZHJhZ25kcm9wL2pzL3RpbWVkZG5kLmpzXCIpLFxyXG4gICAgZmlsbGludGhlYmxhbms6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL2ZpdGIvanMvdGltZWRmaXRiLmpzXCIpLFxyXG4gICAga2hhbmV4OiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS9raGFuZXgvanMva2hhbmV4LmpzXCIpLFxyXG4gICAgbHBfYnVpbGQ6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL2xwL2pzL2xwLmpzXCIpLFxyXG4gICAgbXVsdGlwbGVjaG9pY2U6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL21jaG9pY2UvanMvdGltZWRtYy5qc1wiKSxcclxuICAgIHBhcnNvbnM6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL3BhcnNvbnMvanMvdGltZWRwYXJzb25zLmpzXCIpLFxyXG4gICAgcG9sbDogKCkgPT4gaW1wb3J0KFwiLi9ydW5lc3RvbmUvcG9sbC9qcy9wb2xsLmpzXCIpLFxyXG4gICAgcXVpemx5OiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS9xdWl6bHkvanMvcXVpemx5LmpzXCIpLFxyXG4gICAgcmV2ZWFsOiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS9yZXZlYWwvanMvcmV2ZWFsLmpzXCIpLFxyXG4gICAgc2VsZWN0cXVlc3Rpb246ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL3NlbGVjdHF1ZXN0aW9uL2pzL3NlbGVjdG9uZS5qc1wiKSxcclxuICAgIHNob3J0YW5zd2VyOiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS9zaG9ydGFuc3dlci9qcy90aW1lZF9zaG9ydGFuc3dlci5qc1wiKSxcclxuICAgIHNob3dldmFsOiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS9zaG93ZXZhbC9qcy9zaG93RXZhbC5qc1wiKSxcclxuICAgIHNpbXBsZV9zZW5zb3I6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL2NlbGxib3RpY3MvanMvc2ltcGxlX3NlbnNvci5qc1wiKSxcclxuICAgIHNwcmVhZHNoZWV0OiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS9zcHJlYWRzaGVldC9qcy9zcHJlYWRzaGVldC5qc1wiKSxcclxuICAgIHRhYmJlZFN0dWZmOiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS90YWJiZWRTdHVmZi9qcy90YWJiZWRzdHVmZi5qc1wiKSxcclxuICAgIHRpbWVkQXNzZXNzbWVudDogKCkgPT4gaW1wb3J0KFwiLi9ydW5lc3RvbmUvdGltZWQvanMvdGltZWQuanNcIiksXHJcbiAgICB3YXZlZHJvbTogKCkgPT4gaW1wb3J0KFwiLi9ydW5lc3RvbmUvd2F2ZWRyb20vanMvd2F2ZWRyb20uanNcIiksXHJcbiAgICAvLyBUT0RPOiBzaW5jZSB0aGlzIGlzbid0IGluIGEgYGBkYXRhLWNvbXBvbmVudGBgLCBuZWVkIHRvIHRyaWdnZXIgYW4gaW1wb3J0IG9mIHRoaXMgY29kZSBtYW51YWxseS5cclxuICAgIHdlYndvcms6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL3dlYndvcmsvanMvd2Vid29yay5qc1wiKSxcclxuICAgIHlvdXR1YmU6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL3ZpZGVvL2pzL3J1bmVzdG9uZXZpZGVvLmpzXCIpLFxyXG59XHJcblxyXG4vLyAuLiBfZHluYW1pYyBpbXBvcnQgbWFjaGluZXJ5OlxyXG4vL1xyXG4vLyBEeW5hbWljIGltcG9ydCBtYWNoaW5lcnlcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEZ1bGZpbGwgYSBwcm9taXNlIHdoZW4gdGhlIFJ1bmVzdG9uZSBwcmUtbG9naW4gY29tcGxldGUgZXZlbnQgb2NjdXJzLlxyXG5sZXQgcHJlX2xvZ2luX2NvbXBsZXRlX3Byb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+ICQoZG9jdW1lbnQpLmJpbmQoXCJydW5lc3RvbmU6cHJlLWxvZ2luLWNvbXBsZXRlXCIsIHJlc29sdmUpKTtcclxuXHJcbi8vIFByb3ZpZGUgYSBzaW1wbGUgZnVuY3Rpb24gdG8gaW1wb3J0IHRoZSBKUyBmb3IgYWxsIGNvbXBvbmVudHMgb24gdGhlIHBhZ2UuXHJcbmV4cG9ydCBmdW5jdGlvbiBydW5lc3RvbmVfYXV0b19pbXBvcnQoKSB7XHJcbiAgICAvLyBDcmVhdGUgYSBzZXQgb2YgYGBkYXRhLWNvbXBvbmVudGBgIHZhbHVlcywgdG8gYXZvaWQgZHVwbGljYXRpb24uXHJcbiAgICBjb25zdCBzID0gbmV3IFNldChcclxuICAgICAgICAvLyBBbGwgUnVuZXN0b25lIGNvbXBvbmVudHMgaGF2ZSBhIGBgZGF0YS1jb21wb25lbnRgYCBhdHRyaWJ1dGUuXHJcbiAgICAgICAgJChcIltkYXRhLWNvbXBvbmVudF1cIikubWFwKFxyXG4gICAgICAgICAgICAvLyBFeHRyYWN0IHRoZSB2YWx1ZSBvZiB0aGUgZGF0YS1jb21wb25lbnQgYXR0cmlidXRlLlxyXG4gICAgICAgICAgICAoaW5kZXgsIGVsZW1lbnQpID0+ICQoZWxlbWVudCkuYXR0cihcImRhdGEtY29tcG9uZW50XCIpXHJcbiAgICAgICAgICAgIC8vIFN3aXRjaCBmcm9tIGEgalF1ZXJ5IG9iamVjdCBiYWNrIHRvIGFuIGFycmF5LCBwYXNzaW5nIHRoYXQgdG8gdGhlIFNldCBjb25zdHJ1Y3Rvci5cclxuICAgICAgICApLmdldCgpXHJcbiAgICApO1xyXG5cclxuICAgIC8vIExvYWQgSlMgZm9yIGVhY2ggb2YgdGhlIGNvbXBvbmVudHMgZm91bmQuXHJcbiAgICBjb25zdCBhID0gWy4uLnNdLm1hcCh2YWx1ZSA9PlxyXG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gSlMgZm9yIHRoaXMgY29tcG9uZW50LCByZXR1cm4gYW4gZW1wdHkgUHJvbWlzZS5cclxuICAgICAgICAobW9kdWxlX21hcFt2YWx1ZV0gfHwgKCgpID0+IFByb21pc2UucmVzb2x2ZSgpKSkoKVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBTZW5kIHRoZSBSdW5lc3RvbmUgbG9naW4gY29tcGxldGUgZXZlbnQgd2hlbiBhbGwgSlMgaXMgbG9hZGVkIGFuZCB0aGUgcHJlLWxvZ2luIGlzIGFsc28gY29tcGxldGUuXHJcbiAgICBQcm9taXNlLmFsbChbcHJlX2xvZ2luX2NvbXBsZXRlX3Byb21pc2UsIC4uLmFdKS50aGVuKCgpID0+ICQoZG9jdW1lbnQpLnRyaWdnZXIoXCJydW5lc3RvbmU6bG9naW4tY29tcGxldGVcIikpO1xyXG59XHJcblxyXG4vLyBMb2FkIGNvbXBvbmVudCBKUyB3aGVuIHRoZSBkb2N1bWVudCBpcyByZWFkeS5cclxuJChkb2N1bWVudCkucmVhZHkocnVuZXN0b25lX2F1dG9faW1wb3J0KTtcclxuXHJcbi8vIFByb3ZpZGUgYSBmdW5jdGlvbiB0byBpbXBvcnQgb25lIHNwZWNpZmljIFJ1bmVzdG9uZSBjb21wb25lbnQuXHJcbi8vIHRoZSBpbXBvcnQgZnVuY3Rpb24gaW5zaWRlIG1vZHVsZV9tYXAgaXMgYXN5bmMgLS0gcnVuZXN0b25lX2ltcG9ydFxyXG4vLyBzaG91bGQgYmUgYXdhaXRlZCB3aGVuIG5lY2Vzc2FyeSB0byBlbnN1cmUgdGhlIGltcG9ydCBjb21wbGV0ZXNcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJ1bmVzdG9uZV9pbXBvcnQoY29tcG9uZW50X25hbWUpIHtcclxuICAgIHJldHVybiBtb2R1bGVfbWFwW2NvbXBvbmVudF9uYW1lXSgpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwb3B1cFNjcmF0Y2hBQygpIHtcclxuICAgIC8vIGxvYWQgdGhlIGFjdGl2ZWNvZGUgYnVuZGxlXHJcbiAgICBhd2FpdCBydW5lc3RvbmVfaW1wb3J0KFwiYWN0aXZlY29kZVwiKTtcclxuICAgIC8vIHNjcmF0Y2hEaXYgd2lsbCBiZSBkZWZpbmVkIGlmIHdlIGhhdmUgYWxyZWFkeSBjcmVhdGVkIGEgc2NyYXRjaFxyXG4gICAgLy8gYWN0aXZlY29kZS4gIElmIGl0cyBub3QgZGVmaW5lZCB0aGVuIHdlIG5lZWQgdG8gZ2V0IGl0IHJlYWR5IHRvIHRvZ2dsZVxyXG4gICAgaWYgKCFlQm9va0NvbmZpZy5zY3JhdGNoRGl2KSB7XHJcbiAgICAgICAgd2luZG93LkFDRmFjdG9yeS5jcmVhdGVTY3JhdGNoQWN0aXZlY29kZSgpO1xyXG4gICAgICAgIGxldCBkaXZpZCA9IGVCb29rQ29uZmlnLnNjcmF0Y2hEaXZcclxuICAgICAgICB3aW5kb3cuZWRMaXN0W2RpdmlkXSA9IEFDRmFjdG9yeS5jcmVhdGVBY3RpdmVDb2RlKCQoYCMke2RpdmlkfWApWzBdLFxyXG4gICAgICAgICAgICBlQm9va0NvbmZpZy5hY0RlZmF1bHRMYW5ndWFnZSk7XHJcbiAgICAgICAgaWYgKGVCb29rQ29uZmlnLmlzTG9nZ2VkSW4pIHtcclxuICAgICAgICAgICAgd2luZG93LmVkTGlzdFtkaXZpZF0uZW5hYmxlU2F2ZUxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuQUNGYWN0b3J5LnRvZ2dsZVNjcmF0Y2hBY3RpdmVjb2RlKCk7XHJcbn1cclxuXHJcbi8vIFNldCB0aGUgZGlyZWN0b3J5IGNvbnRhaW5pbmcgdGhpcyBzY3JpcHQgYXMgdGhlIGBwYXRoIDxodHRwczovL3dlYnBhY2suanMub3JnL2d1aWRlcy9wdWJsaWMtcGF0aC8jb24tdGhlLWZseT5gXyBmb3IgYWxsIHdlYnBhY2tlZCBzY3JpcHRzLlxyXG5jb25zdCBzY3JpcHRfc3JjID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gc2NyaXB0X3NyYy5zdWJzdHJpbmcoMCwgc2NyaXB0X3NyYy5sYXN0SW5kZXhPZignLycpICsgMSk7XHJcblxyXG5cclxuLy8gTWFudWFsIGV4cG9ydHNcclxuLy8gPT09PT09PT09PT09PT1cclxuLy8gV2VicGFjaydzIGBgb3V0cHV0LmxpYnJhcnlgYCBzZXR0aW5nIGRvZXNuJ3Qgc2VlbSB0byB3b3JrIHdpdGggdGhlIHNwbGl0IGNodW5rcyBwbHVnaW47IGRvIGFsbCBleHBvcnRzIG1hbnVhbGx5IHRocm91Z2ggdGhlIGBgd2luZG93YGAgb2JqZWN0IGluc3RlYWQuXHJcbmNvbnN0IHJjID0ge307XHJcbnJjLnJ1bmVzdG9uZV9pbXBvcnQgPSBydW5lc3RvbmVfaW1wb3J0O1xyXG5yYy5ydW5lc3RvbmVfYXV0b19pbXBvcnQgPSBydW5lc3RvbmVfYXV0b19pbXBvcnQ7XHJcbnJjLmdldFN3aXRjaCA9IGdldFN3aXRjaDtcclxucmMuc3dpdGNoVGhlbWUgPSBzd2l0Y2hUaGVtZTtcclxucmMucG9wdXBTY3JhdGNoQUMgPSBwb3B1cFNjcmF0Y2hBQztcclxud2luZG93LnJ1bmVzdG9uZUNvbXBvbmVudHMgPSByYztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==
