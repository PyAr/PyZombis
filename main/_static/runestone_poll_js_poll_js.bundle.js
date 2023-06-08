(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_poll_js_poll_js"],{

/***/ 42935:
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./runestone/poll/css/poll.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ 94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Styles for Runestone poll directive */\n.poll .poll-question {\n    padding-bottom: 10px;\n}\n\n.poll-options > label {\n    margin-right: 5px;\n}\n\n.poll .progress {\n    width: 350px;\n    height: 25px;\n    margin-top: -20px;\n}\n\n.poll .progress .progress-bar {\n    height: 30px;\n    color: #333;\n}\n\n.poll-text {\n    line-height: 22px;\n    display: inline-block;\n    vertical-align: text-bottom;\n}\n\n.results-container {\n    display: grid;\n    grid-template-columns: 2em 90%;\n}\n", "",{"version":3,"sources":["webpack://./runestone/poll/css/poll.css"],"names":[],"mappings":"AAAA,wCAAwC;AACxC;IACI,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;IACrB,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC","sourcesContent":["/* Styles for Runestone poll directive */\n.poll .poll-question {\n    padding-bottom: 10px;\n}\n\n.poll-options > label {\n    margin-right: 5px;\n}\n\n.poll .progress {\n    width: 350px;\n    height: 25px;\n    margin-top: -20px;\n}\n\n.poll .progress .progress-bar {\n    height: 30px;\n    color: #333;\n}\n\n.poll-text {\n    line-height: 22px;\n    display: inline-block;\n    vertical-align: text-bottom;\n}\n\n.results-container {\n    display: grid;\n    grid-template-columns: 2em 90%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 15650:
/*!*************************************!*\
  !*** ./runestone/poll/css/poll.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_poll_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./poll.css */ 42935);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_poll_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_poll_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ 37350:
/*!***********************************!*\
  !*** ./runestone/poll/js/poll.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pollList": () => (/* binding */ pollList),
/* harmony export */   "default": () => (/* binding */ Poll)
/* harmony export */ });
/* harmony import */ var _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase */ 2568);
/* harmony import */ var _css_poll_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/poll.css */ 15650);
/*
__author__ = Kirby Olson
__date__ = 6/12/2015  */





var pollList = {};

class Poll extends _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(opts) {
        super(opts);
        var orig = opts.orig; //entire <p> element
        this.origElem = orig;
        this.divid = orig.id;
        this.children = this.origElem.childNodes;
        this.optionList = [];
        this.optsArray = [];
        this.comment = false;
        if ($(this.origElem).is("[data-comment]")) {
            this.comment = true;
        }
        this.resultsViewer = $(orig).data("results");
        this.getQuestionText();
        this.getOptionText(); //populates optionList
        this.renderPoll(); //generates HTML
        // Checks localStorage to see if this poll has already been completed by this user.
        this.checkPollStorage();
        this.caption = "Poll";
        this.addCaption("runestone");
    }
    getQuestionText() {
        //finds the text inside the parent tag, but before the first <li> tag and sets it as the question
        var _this = this;
        var firstAnswer;
        for (var i = 0; i < this.children.length; i++) {
            if (this.children[i].tagName == "LI") {
                firstAnswer = _this.children[i];
                break;
            }
        }
        var delimiter = firstAnswer.outerHTML;
        var fulltext = $(this.origElem).html();
        var temp = fulltext.split(delimiter);
        this.question = temp[0];
    }
    getOptionText() {
        //Gets the text from each <li> tag and places it in this.optionList
        var _this = this;
        for (var i = 0; i < this.children.length; i++) {
            if (_this.children[i].tagName == "LI") {
                _this.optionList.push($(_this.children[i]).text());
            }
        }
    }
    renderPoll() {
        //generates the HTML that the user interacts with
        var _this = this;
        this.containerDiv = document.createElement("div");
        this.pollForm = document.createElement("form");
        this.resultsDiv = document.createElement("div");
        this.containerDiv.id = this.divid;
        $(this.containerDiv).addClass(this.origElem.getAttribute("class"));
        $(this.pollForm).html(
            `<span style='font-size: Large'>${this.question}</span>`
        );
        $(this.pollForm).attr({
            id: this.divid + "_form",
            method: "get",
            action: "",
            onsubmit: "return false;",
        });
        this.pollForm.appendChild(document.createElement("br"));
        for (var i = 0; i < this.optionList.length; i++) {
            var radio = document.createElement("input");
            var tmpid = _this.divid + "_opt_" + i;
            $(radio).attr({
                id: tmpid,
                name: this.divid + "_group1",
                type: "radio",
                value: i,
            });
            $(radio).click(this.submitPoll.bind(this));
            var label = document.createElement("label");
            $(label).attr("for", tmpid);
            $(label).text(this.optionList[i]);
            this.pollForm.appendChild(radio);
            this.optsArray.push(radio);
            this.pollForm.appendChild(label);
            this.pollForm.appendChild(document.createElement("br"));
        }
        if (this.comment) {
            this.renderTextField();
        }
        this.resultsDiv.id = this.divid + "_results";
        this.containerDiv.appendChild(this.pollForm);
        this.containerDiv.appendChild(this.resultsDiv);
        $(this.origElem).replaceWith(this.containerDiv);
    }
    renderTextField() {
        this.textfield = document.createElement("input");
        this.textfield.type = "text";
        $(this.textfield).addClass("form-control");
        this.textfield.style.width = "300px";
        this.textfield.name = this.divid + "_comment";
        this.textfield.placeholder = "Any comments?";
        this.pollForm.appendChild(this.textfield);
        this.pollForm.appendChild(document.createElement("br"));
    }
    submitPoll() {
        //checks the poll, sets localstorage and submits to the server
        var poll_val = null;
        for (var i = 0; i < this.optsArray.length; i++) {
            if (this.optsArray[i].checked) {
                poll_val = this.optsArray[i].value;
                break;
            }
        }
        if (poll_val === null) return;
        var comment_val = "";
        if (this.comment) {
            comment_val = this.textfield.value;
        }
        var act = "";
        if (comment_val !== "") {
            act = poll_val + ":" + comment_val;
        } else {
            act = poll_val;
        }
        var eventInfo = { event: "poll", act: act, div_id: this.divid };
        // log the response to the database
        this.logBookEvent(eventInfo); // in bookfuncs.js
        // log the fact that the user has answered the poll to local storage
        localStorage.setItem(this.divid, "true");
        if (!document.getElementById(`${this.divid}_sent`)) {
            $(this.pollForm).append(
                `<span id=${this.divid}_sent><strong>Thanks, your response has been recorded</strong></span>`
            );
        } else {
            $(`#${this.divid}_sent`).html(
                "<strong>Only Your last reponse is recorded</strong>"
            );
        }
        // show the results of the poll
        if (this.resultsViewer === "all") {
            var data = {};
            data.div_id = this.divid;
            data.course = eBookConfig.course;
            jQuery.get(
                eBookConfig.ajaxURL + "getpollresults",
                data,
                this.showPollResults
            );
        }
    }
    showPollResults(data) {
        //displays the results returned by the server
        var results = eval(data);
        var total = results[0];
        var opt_list = results[1];
        var count_list = results[2];
        var div_id = results[3];
        var my_vote = results[4];
        // resture current users vote
        if (my_vote > -1) {
            this.optsArray[my_vote].checked = "checked";
        }
        // show results summary if appropriate
        if (
            (this.resultsViewer === "all" &&
                localStorage.getItem(this.divid === "true")) ||
            eBookConfig.isInstructor
        ) {
            $(this.resultsDiv).html(
                `<b>Results:</b> ${total} responses <br><br>`
            );
            var list = $(document.createElement("div"));
            $(list).addClass("results-container");
            for (var i = 0; i < this.optionList.length; i++) {
                var count;
                var percent;
                if (count_list[i]) {
                    count = count_list[i];
                    percent = (count / total) * 100;
                } else {
                    count = 0;
                    percent = 0;
                }
                var text = count + " (" + Math.round(10 * percent) / 10 + "%)"; // round percent to 10ths
                var html;
                if (percent > 10) {
                    html =
                        `<div class="progresscounter">${i + 1}. </div>` +
                        "<div class='progress'>" +
                        "<div class='progress-bar progress-bar-success'" +
                        `style="width: ${percent}%; min-width: 2em;">` +
                        "<span class='poll-text'>" +
                        text +
                        "</span></div></div>";
                } else {
                    html =
                        `<div class="progresscounter">${i + 1}. </div>` +
                        "<div class='progress'>" +
                        "<div class='progress-bar progress-bar-success'" +
                        `style="width: ${percent}%; min-width: 2em;"></div>` +
                        "<span class='poll-text' style='margin: 0 0 0 10px;'>" +
                        text +
                        "</span></div>";
                }
                var el = $(html);
                list.append(el);
            }
            $(this.resultsDiv).append(list);
        }
        this.indicate_component_ready();
    }
    disableOptions() {}
    checkPollStorage() {
        //checks the localstorage to see if the poll has been completed already
        var _this = this;
        var len = localStorage.length;
        if (len > 0) {
            //If the poll has already been completed, show the results
            var data = {};
            data.div_id = this.divid;
            data.course = eBookConfig.course;
            jQuery.get(
                eBookConfig.ajaxURL + "getpollresults",
                data,
                this.showPollResults.bind(this)
            ).fail(this.indicate_component_ready.bind(this));
        } else {
            this.indicate_component_ready();
        }
    }
}

// Do not render poll data until login-complete event so we know instructor status
$(document).bind("runestone:login-complete", function () {
    $("[data-component=poll]").each(function (index) {
        try {
            pollList[this.id] = new Poll({ orig: this });
        } catch (err) {
            console.log(`Error rendering Poll Problem ${this.id}
                         Details: ${err}`);
            console.log(err.stack);
        }
    });
});

if (typeof window.component_factory === "undefined") {
    window.component_factory = {};
}
window.component_factory.poll = function (opts) {
    return new Poll(opts);
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3BvbGwvY3NzL3BvbGwuY3NzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvcG9sbC9jc3MvcG9sbC5jc3M/MWVmOCIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3BvbGwvanMvcG9sbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSwyR0FBMkcsMkJBQTJCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLHFCQUFxQixtQkFBbUIsbUJBQW1CLHdCQUF3QixHQUFHLG1DQUFtQyxtQkFBbUIsa0JBQWtCLEdBQUcsZ0JBQWdCLHdCQUF3Qiw0QkFBNEIsa0NBQWtDLEdBQUcsd0JBQXdCLG9CQUFvQixxQ0FBcUMsR0FBRyxTQUFTLHFHQUFxRyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksMkZBQTJGLDJCQUEyQixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyxxQkFBcUIsbUJBQW1CLG1CQUFtQix3QkFBd0IsR0FBRyxtQ0FBbUMsbUJBQW1CLGtCQUFrQixHQUFHLGdCQUFnQix3QkFBd0IsNEJBQTRCLGtDQUFrQyxHQUFHLHdCQUF3QixvQkFBb0IscUNBQXFDLEdBQUcscUJBQXFCO0FBQ3QzQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHdEO0FBQy9GLFlBQTRGOztBQUU1Rjs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyxrRkFBTzs7OztBQUl4QixpRUFBZSx5RkFBYyxNQUFNLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1puQztBQUNBO0FBQ0E7QUFDYTs7QUFFNkM7QUFDakM7O0FBRWxCOztBQUVRLG1CQUFtQiw2REFBYTtBQUMvQztBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwQkFBMEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMEJBQTBCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLFNBQVM7QUFDVDtBQUNBLHVCQUF1Qiw0QkFBNEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBLDRCQUE0QixXQUFXO0FBQ3ZDO0FBQ0EsU0FBUztBQUNULGtCQUFrQixXQUFXO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLE1BQU07QUFDekM7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDRCQUE0QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLCtFQUErRTtBQUMvRTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsTUFBTTtBQUM5RDtBQUNBO0FBQ0EseUNBQXlDLFFBQVEsRUFBRSxnQkFBZ0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0Esd0RBQXdELE1BQU07QUFDOUQ7QUFDQTtBQUNBLHlDQUF5QyxRQUFRLEVBQUUsZ0JBQWdCO0FBQ25FLDJFQUEyRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxhQUFhO0FBQ3ZELFNBQVM7QUFDVCx3REFBd0Q7QUFDeEQsb0NBQW9DLElBQUk7QUFDeEM7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJydW5lc3RvbmVfcG9sbF9qc19wb2xsX2pzLmJ1bmRsZS5qcz92PTY4NDc0YjhhZjNjMWQyMDEzNGFlIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBTdHlsZXMgZm9yIFJ1bmVzdG9uZSBwb2xsIGRpcmVjdGl2ZSAqL1xcbi5wb2xsIC5wb2xsLXF1ZXN0aW9uIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5wb2xsLW9wdGlvbnMgPiBsYWJlbCB7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4ucG9sbCAucHJvZ3Jlc3Mge1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XFxufVxcblxcbi5wb2xsIC5wcm9ncmVzcyAucHJvZ3Jlc3MtYmFyIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBjb2xvcjogIzMzMztcXG59XFxuXFxuLnBvbGwtdGV4dCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcXG59XFxuXFxuLnJlc3VsdHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZW0gOTAlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ydW5lc3RvbmUvcG9sbC9jc3MvcG9sbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsd0NBQXdDO0FBQ3hDO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFN0eWxlcyBmb3IgUnVuZXN0b25lIHBvbGwgZGlyZWN0aXZlICovXFxuLnBvbGwgLnBvbGwtcXVlc3Rpb24ge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnBvbGwtb3B0aW9ucyA+IGxhYmVsIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5wb2xsIC5wcm9ncmVzcyB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcXG59XFxuXFxuLnBvbGwgLnByb2dyZXNzIC5wcm9ncmVzcy1iYXIge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG4ucG9sbC10ZXh0IHtcXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xcbn1cXG5cXG4ucmVzdWx0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJlbSA5MCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvbGwuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiLypcbl9fYXV0aG9yX18gPSBLaXJieSBPbHNvblxuX19kYXRlX18gPSA2LzEyLzIwMTUgICovXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bmVzdG9uZUJhc2UgZnJvbSBcIi4uLy4uL2NvbW1vbi9qcy9ydW5lc3RvbmViYXNlXCI7XG5pbXBvcnQgXCIuLi9jc3MvcG9sbC5jc3NcIjtcblxuZXhwb3J0IHZhciBwb2xsTGlzdCA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2xsIGV4dGVuZHMgUnVuZXN0b25lQmFzZSB7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcihvcHRzKTtcbiAgICAgICAgdmFyIG9yaWcgPSBvcHRzLm9yaWc7IC8vZW50aXJlIDxwPiBlbGVtZW50XG4gICAgICAgIHRoaXMub3JpZ0VsZW0gPSBvcmlnO1xuICAgICAgICB0aGlzLmRpdmlkID0gb3JpZy5pZDtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMub3JpZ0VsZW0uY2hpbGROb2RlcztcbiAgICAgICAgdGhpcy5vcHRpb25MaXN0ID0gW107XG4gICAgICAgIHRoaXMub3B0c0FycmF5ID0gW107XG4gICAgICAgIHRoaXMuY29tbWVudCA9IGZhbHNlO1xuICAgICAgICBpZiAoJCh0aGlzLm9yaWdFbGVtKS5pcyhcIltkYXRhLWNvbW1lbnRdXCIpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbW1lbnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0c1ZpZXdlciA9ICQob3JpZykuZGF0YShcInJlc3VsdHNcIik7XG4gICAgICAgIHRoaXMuZ2V0UXVlc3Rpb25UZXh0KCk7XG4gICAgICAgIHRoaXMuZ2V0T3B0aW9uVGV4dCgpOyAvL3BvcHVsYXRlcyBvcHRpb25MaXN0XG4gICAgICAgIHRoaXMucmVuZGVyUG9sbCgpOyAvL2dlbmVyYXRlcyBIVE1MXG4gICAgICAgIC8vIENoZWNrcyBsb2NhbFN0b3JhZ2UgdG8gc2VlIGlmIHRoaXMgcG9sbCBoYXMgYWxyZWFkeSBiZWVuIGNvbXBsZXRlZCBieSB0aGlzIHVzZXIuXG4gICAgICAgIHRoaXMuY2hlY2tQb2xsU3RvcmFnZSgpO1xuICAgICAgICB0aGlzLmNhcHRpb24gPSBcIlBvbGxcIjtcbiAgICAgICAgdGhpcy5hZGRDYXB0aW9uKFwicnVuZXN0b25lXCIpO1xuICAgIH1cbiAgICBnZXRRdWVzdGlvblRleHQoKSB7XG4gICAgICAgIC8vZmluZHMgdGhlIHRleHQgaW5zaWRlIHRoZSBwYXJlbnQgdGFnLCBidXQgYmVmb3JlIHRoZSBmaXJzdCA8bGk+IHRhZyBhbmQgc2V0cyBpdCBhcyB0aGUgcXVlc3Rpb25cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGZpcnN0QW5zd2VyO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoaWxkcmVuW2ldLnRhZ05hbWUgPT0gXCJMSVwiKSB7XG4gICAgICAgICAgICAgICAgZmlyc3RBbnN3ZXIgPSBfdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgZGVsaW1pdGVyID0gZmlyc3RBbnN3ZXIub3V0ZXJIVE1MO1xuICAgICAgICB2YXIgZnVsbHRleHQgPSAkKHRoaXMub3JpZ0VsZW0pLmh0bWwoKTtcbiAgICAgICAgdmFyIHRlbXAgPSBmdWxsdGV4dC5zcGxpdChkZWxpbWl0ZXIpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gdGVtcFswXTtcbiAgICB9XG4gICAgZ2V0T3B0aW9uVGV4dCgpIHtcbiAgICAgICAgLy9HZXRzIHRoZSB0ZXh0IGZyb20gZWFjaCA8bGk+IHRhZyBhbmQgcGxhY2VzIGl0IGluIHRoaXMub3B0aW9uTGlzdFxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5jaGlsZHJlbltpXS50YWdOYW1lID09IFwiTElcIikge1xuICAgICAgICAgICAgICAgIF90aGlzLm9wdGlvbkxpc3QucHVzaCgkKF90aGlzLmNoaWxkcmVuW2ldKS50ZXh0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlclBvbGwoKSB7XG4gICAgICAgIC8vZ2VuZXJhdGVzIHRoZSBIVE1MIHRoYXQgdGhlIHVzZXIgaW50ZXJhY3RzIHdpdGhcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLnBvbGxGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICAgIHRoaXMucmVzdWx0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmlkID0gdGhpcy5kaXZpZDtcbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lckRpdikuYWRkQ2xhc3ModGhpcy5vcmlnRWxlbS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSk7XG4gICAgICAgICQodGhpcy5wb2xsRm9ybSkuaHRtbChcbiAgICAgICAgICAgIGA8c3BhbiBzdHlsZT0nZm9udC1zaXplOiBMYXJnZSc+JHt0aGlzLnF1ZXN0aW9ufTwvc3Bhbj5gXG4gICAgICAgICk7XG4gICAgICAgICQodGhpcy5wb2xsRm9ybSkuYXR0cih7XG4gICAgICAgICAgICBpZDogdGhpcy5kaXZpZCArIFwiX2Zvcm1cIixcbiAgICAgICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgICAgIGFjdGlvbjogXCJcIixcbiAgICAgICAgICAgIG9uc3VibWl0OiBcInJldHVybiBmYWxzZTtcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucG9sbEZvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIHZhciB0bXBpZCA9IF90aGlzLmRpdmlkICsgXCJfb3B0X1wiICsgaTtcbiAgICAgICAgICAgICQocmFkaW8pLmF0dHIoe1xuICAgICAgICAgICAgICAgIGlkOiB0bXBpZCxcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmRpdmlkICsgXCJfZ3JvdXAxXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKHJhZGlvKS5jbGljayh0aGlzLnN1Ym1pdFBvbGwuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgICAkKGxhYmVsKS5hdHRyKFwiZm9yXCIsIHRtcGlkKTtcbiAgICAgICAgICAgICQobGFiZWwpLnRleHQodGhpcy5vcHRpb25MaXN0W2ldKTtcbiAgICAgICAgICAgIHRoaXMucG9sbEZvcm0uYXBwZW5kQ2hpbGQocmFkaW8pO1xuICAgICAgICAgICAgdGhpcy5vcHRzQXJyYXkucHVzaChyYWRpbyk7XG4gICAgICAgICAgICB0aGlzLnBvbGxGb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgIHRoaXMucG9sbEZvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb21tZW50KSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclRleHRGaWVsZCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0c0Rpdi5pZCA9IHRoaXMuZGl2aWQgKyBcIl9yZXN1bHRzXCI7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRoaXMucG9sbEZvcm0pO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLnJlc3VsdHNEaXYpO1xuICAgICAgICAkKHRoaXMub3JpZ0VsZW0pLnJlcGxhY2VXaXRoKHRoaXMuY29udGFpbmVyRGl2KTtcbiAgICB9XG4gICAgcmVuZGVyVGV4dEZpZWxkKCkge1xuICAgICAgICB0aGlzLnRleHRmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGhpcy50ZXh0ZmllbGQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICAkKHRoaXMudGV4dGZpZWxkKS5hZGRDbGFzcyhcImZvcm0tY29udHJvbFwiKTtcbiAgICAgICAgdGhpcy50ZXh0ZmllbGQuc3R5bGUud2lkdGggPSBcIjMwMHB4XCI7XG4gICAgICAgIHRoaXMudGV4dGZpZWxkLm5hbWUgPSB0aGlzLmRpdmlkICsgXCJfY29tbWVudFwiO1xuICAgICAgICB0aGlzLnRleHRmaWVsZC5wbGFjZWhvbGRlciA9IFwiQW55IGNvbW1lbnRzP1wiO1xuICAgICAgICB0aGlzLnBvbGxGb3JtLmFwcGVuZENoaWxkKHRoaXMudGV4dGZpZWxkKTtcbiAgICAgICAgdGhpcy5wb2xsRm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuICAgIH1cbiAgICBzdWJtaXRQb2xsKCkge1xuICAgICAgICAvL2NoZWNrcyB0aGUgcG9sbCwgc2V0cyBsb2NhbHN0b3JhZ2UgYW5kIHN1Ym1pdHMgdG8gdGhlIHNlcnZlclxuICAgICAgICB2YXIgcG9sbF92YWwgPSBudWxsO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3B0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRzQXJyYXlbaV0uY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHBvbGxfdmFsID0gdGhpcy5vcHRzQXJyYXlbaV0udmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvbGxfdmFsID09PSBudWxsKSByZXR1cm47XG4gICAgICAgIHZhciBjb21tZW50X3ZhbCA9IFwiXCI7XG4gICAgICAgIGlmICh0aGlzLmNvbW1lbnQpIHtcbiAgICAgICAgICAgIGNvbW1lbnRfdmFsID0gdGhpcy50ZXh0ZmllbGQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFjdCA9IFwiXCI7XG4gICAgICAgIGlmIChjb21tZW50X3ZhbCAhPT0gXCJcIikge1xuICAgICAgICAgICAgYWN0ID0gcG9sbF92YWwgKyBcIjpcIiArIGNvbW1lbnRfdmFsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0ID0gcG9sbF92YWw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGV2ZW50SW5mbyA9IHsgZXZlbnQ6IFwicG9sbFwiLCBhY3Q6IGFjdCwgZGl2X2lkOiB0aGlzLmRpdmlkIH07XG4gICAgICAgIC8vIGxvZyB0aGUgcmVzcG9uc2UgdG8gdGhlIGRhdGFiYXNlXG4gICAgICAgIHRoaXMubG9nQm9va0V2ZW50KGV2ZW50SW5mbyk7IC8vIGluIGJvb2tmdW5jcy5qc1xuICAgICAgICAvLyBsb2cgdGhlIGZhY3QgdGhhdCB0aGUgdXNlciBoYXMgYW5zd2VyZWQgdGhlIHBvbGwgdG8gbG9jYWwgc3RvcmFnZVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmRpdmlkLCBcInRydWVcIik7XG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5kaXZpZH1fc2VudGApKSB7XG4gICAgICAgICAgICAkKHRoaXMucG9sbEZvcm0pLmFwcGVuZChcbiAgICAgICAgICAgICAgICBgPHNwYW4gaWQ9JHt0aGlzLmRpdmlkfV9zZW50PjxzdHJvbmc+VGhhbmtzLCB5b3VyIHJlc3BvbnNlIGhhcyBiZWVuIHJlY29yZGVkPC9zdHJvbmc+PC9zcGFuPmBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKGAjJHt0aGlzLmRpdmlkfV9zZW50YCkuaHRtbChcbiAgICAgICAgICAgICAgICBcIjxzdHJvbmc+T25seSBZb3VyIGxhc3QgcmVwb25zZSBpcyByZWNvcmRlZDwvc3Ryb25nPlwiXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNob3cgdGhlIHJlc3VsdHMgb2YgdGhlIHBvbGxcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0c1ZpZXdlciA9PT0gXCJhbGxcIikge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7fTtcbiAgICAgICAgICAgIGRhdGEuZGl2X2lkID0gdGhpcy5kaXZpZDtcbiAgICAgICAgICAgIGRhdGEuY291cnNlID0gZUJvb2tDb25maWcuY291cnNlO1xuICAgICAgICAgICAgalF1ZXJ5LmdldChcbiAgICAgICAgICAgICAgICBlQm9va0NvbmZpZy5hamF4VVJMICsgXCJnZXRwb2xscmVzdWx0c1wiLFxuICAgICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UG9sbFJlc3VsdHNcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2hvd1BvbGxSZXN1bHRzKGRhdGEpIHtcbiAgICAgICAgLy9kaXNwbGF5cyB0aGUgcmVzdWx0cyByZXR1cm5lZCBieSB0aGUgc2VydmVyXG4gICAgICAgIHZhciByZXN1bHRzID0gZXZhbChkYXRhKTtcbiAgICAgICAgdmFyIHRvdGFsID0gcmVzdWx0c1swXTtcbiAgICAgICAgdmFyIG9wdF9saXN0ID0gcmVzdWx0c1sxXTtcbiAgICAgICAgdmFyIGNvdW50X2xpc3QgPSByZXN1bHRzWzJdO1xuICAgICAgICB2YXIgZGl2X2lkID0gcmVzdWx0c1szXTtcbiAgICAgICAgdmFyIG15X3ZvdGUgPSByZXN1bHRzWzRdO1xuICAgICAgICAvLyByZXN0dXJlIGN1cnJlbnQgdXNlcnMgdm90ZVxuICAgICAgICBpZiAobXlfdm90ZSA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLm9wdHNBcnJheVtteV92b3RlXS5jaGVja2VkID0gXCJjaGVja2VkXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2hvdyByZXN1bHRzIHN1bW1hcnkgaWYgYXBwcm9wcmlhdGVcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHRoaXMucmVzdWx0c1ZpZXdlciA9PT0gXCJhbGxcIiAmJlxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuZGl2aWQgPT09IFwidHJ1ZVwiKSkgfHxcbiAgICAgICAgICAgIGVCb29rQ29uZmlnLmlzSW5zdHJ1Y3RvclxuICAgICAgICApIHtcbiAgICAgICAgICAgICQodGhpcy5yZXN1bHRzRGl2KS5odG1sKFxuICAgICAgICAgICAgICAgIGA8Yj5SZXN1bHRzOjwvYj4gJHt0b3RhbH0gcmVzcG9uc2VzIDxicj48YnI+YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbiAgICAgICAgICAgICQobGlzdCkuYWRkQ2xhc3MoXCJyZXN1bHRzLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vcHRpb25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvdW50O1xuICAgICAgICAgICAgICAgIHZhciBwZXJjZW50O1xuICAgICAgICAgICAgICAgIGlmIChjb3VudF9saXN0W2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ID0gY291bnRfbGlzdFtpXTtcbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudCA9IChjb3VudCAvIHRvdGFsKSAqIDEwMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnQgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IGNvdW50ICsgXCIgKFwiICsgTWF0aC5yb3VuZCgxMCAqIHBlcmNlbnQpIC8gMTAgKyBcIiUpXCI7IC8vIHJvdW5kIHBlcmNlbnQgdG8gMTB0aHNcbiAgICAgICAgICAgICAgICB2YXIgaHRtbDtcbiAgICAgICAgICAgICAgICBpZiAocGVyY2VudCA+IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIGh0bWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJwcm9ncmVzc2NvdW50ZXJcIj4ke2kgKyAxfS4gPC9kaXY+YCArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9J3Byb2dyZXNzJz5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9J3Byb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItc3VjY2VzcydcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBgc3R5bGU9XCJ3aWR0aDogJHtwZXJjZW50fSU7IG1pbi13aWR0aDogMmVtO1wiPmAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0ncG9sbC10ZXh0Jz5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPC9zcGFuPjwvZGl2PjwvZGl2PlwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGh0bWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJwcm9ncmVzc2NvdW50ZXJcIj4ke2kgKyAxfS4gPC9kaXY+YCArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9J3Byb2dyZXNzJz5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9J3Byb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItc3VjY2VzcydcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBgc3R5bGU9XCJ3aWR0aDogJHtwZXJjZW50fSU7IG1pbi13aWR0aDogMmVtO1wiPjwvZGl2PmAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0ncG9sbC10ZXh0JyBzdHlsZT0nbWFyZ2luOiAwIDAgMCAxMHB4Oyc+XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjwvc3Bhbj48L2Rpdj5cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJChodG1sKTtcbiAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZChlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKHRoaXMucmVzdWx0c0RpdikuYXBwZW5kKGxpc3QpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5kaWNhdGVfY29tcG9uZW50X3JlYWR5KCk7XG4gICAgfVxuICAgIGRpc2FibGVPcHRpb25zKCkge31cbiAgICBjaGVja1BvbGxTdG9yYWdlKCkge1xuICAgICAgICAvL2NoZWNrcyB0aGUgbG9jYWxzdG9yYWdlIHRvIHNlZSBpZiB0aGUgcG9sbCBoYXMgYmVlbiBjb21wbGV0ZWQgYWxyZWFkeVxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbGVuID0gbG9jYWxTdG9yYWdlLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbiA+IDApIHtcbiAgICAgICAgICAgIC8vSWYgdGhlIHBvbGwgaGFzIGFscmVhZHkgYmVlbiBjb21wbGV0ZWQsIHNob3cgdGhlIHJlc3VsdHNcbiAgICAgICAgICAgIHZhciBkYXRhID0ge307XG4gICAgICAgICAgICBkYXRhLmRpdl9pZCA9IHRoaXMuZGl2aWQ7XG4gICAgICAgICAgICBkYXRhLmNvdXJzZSA9IGVCb29rQ29uZmlnLmNvdXJzZTtcbiAgICAgICAgICAgIGpRdWVyeS5nZXQoXG4gICAgICAgICAgICAgICAgZUJvb2tDb25maWcuYWpheFVSTCArIFwiZ2V0cG9sbHJlc3VsdHNcIixcbiAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BvbGxSZXN1bHRzLmJpbmQodGhpcylcbiAgICAgICAgICAgICkuZmFpbCh0aGlzLmluZGljYXRlX2NvbXBvbmVudF9yZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5kaWNhdGVfY29tcG9uZW50X3JlYWR5KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIERvIG5vdCByZW5kZXIgcG9sbCBkYXRhIHVudGlsIGxvZ2luLWNvbXBsZXRlIGV2ZW50IHNvIHdlIGtub3cgaW5zdHJ1Y3RvciBzdGF0dXNcbiQoZG9jdW1lbnQpLmJpbmQoXCJydW5lc3RvbmU6bG9naW4tY29tcGxldGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICQoXCJbZGF0YS1jb21wb25lbnQ9cG9sbF1cIikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBvbGxMaXN0W3RoaXMuaWRdID0gbmV3IFBvbGwoeyBvcmlnOiB0aGlzIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciByZW5kZXJpbmcgUG9sbCBQcm9ibGVtICR7dGhpcy5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBEZXRhaWxzOiAke2Vycn1gKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuXG5pZiAodHlwZW9mIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9IHt9O1xufVxud2luZG93LmNvbXBvbmVudF9mYWN0b3J5LnBvbGwgPSBmdW5jdGlvbiAob3B0cykge1xuICAgIHJldHVybiBuZXcgUG9sbChvcHRzKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9