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
___CSS_LOADER_EXPORT___.push([module.id, "/* Styles for Runestone poll directive */\r\n.poll .poll-question {\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.poll-options > label {\r\n    margin-right: 5px;\r\n}\r\n\r\n.poll .progress {\r\n    width: 350px;\r\n    height: 25px;\r\n    margin-top: -20px;\r\n}\r\n\r\n.poll .progress .progress-bar {\r\n    height: 30px;\r\n    color: #333;\r\n}\r\n\r\n.poll-text {\r\n    line-height: 22px;\r\n    display: inline-block;\r\n    vertical-align: text-bottom;\r\n}\r\n\r\n.results-container {\r\n    display: grid;\r\n    grid-template-columns: 2em 90%;\r\n}\r\n", "",{"version":3,"sources":["webpack://./runestone/poll/css/poll.css"],"names":[],"mappings":"AAAA,wCAAwC;AACxC;IACI,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;IACrB,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC","sourcesContent":["/* Styles for Runestone poll directive */\r\n.poll .poll-question {\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.poll-options > label {\r\n    margin-right: 5px;\r\n}\r\n\r\n.poll .progress {\r\n    width: 350px;\r\n    height: 25px;\r\n    margin-top: -20px;\r\n}\r\n\r\n.poll .progress .progress-bar {\r\n    height: 30px;\r\n    color: #333;\r\n}\r\n\r\n.poll-text {\r\n    line-height: 22px;\r\n    display: inline-block;\r\n    vertical-align: text-bottom;\r\n}\r\n\r\n.results-container {\r\n    display: grid;\r\n    grid-template-columns: 2em 90%;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3BvbGwvY3NzL3BvbGwuY3NzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvcG9sbC9jc3MvcG9sbC5jc3M/MWVmOCIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3BvbGwvanMvcG9sbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSw2R0FBNkcsNkJBQTZCLEtBQUssK0JBQStCLDBCQUEwQixLQUFLLHlCQUF5QixxQkFBcUIscUJBQXFCLDBCQUEwQixLQUFLLHVDQUF1QyxxQkFBcUIsb0JBQW9CLEtBQUssb0JBQW9CLDBCQUEwQiw4QkFBOEIsb0NBQW9DLEtBQUssNEJBQTRCLHNCQUFzQix1Q0FBdUMsS0FBSyxXQUFXLHFHQUFxRyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksNkZBQTZGLDZCQUE2QixLQUFLLCtCQUErQiwwQkFBMEIsS0FBSyx5QkFBeUIscUJBQXFCLHFCQUFxQiwwQkFBMEIsS0FBSyx1Q0FBdUMscUJBQXFCLG9CQUFvQixLQUFLLG9CQUFvQiwwQkFBMEIsOEJBQThCLG9DQUFvQyxLQUFLLDRCQUE0QixzQkFBc0IsdUNBQXVDLEtBQUssdUJBQXVCO0FBQzkrQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHdEO0FBQy9GLFlBQTRGOztBQUU1Rjs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyxrRkFBTzs7OztBQUl4QixpRUFBZSx5RkFBYyxNQUFNLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1puQztBQUNBO0FBQ0E7QUFDYTs7QUFFNkM7QUFDakM7O0FBRWxCOztBQUVRLG1CQUFtQiw2REFBYTtBQUMvQztBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwQkFBMEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMEJBQTBCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLFNBQVM7QUFDVDtBQUNBLHVCQUF1Qiw0QkFBNEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBLDRCQUE0QixXQUFXO0FBQ3ZDO0FBQ0EsU0FBUztBQUNULGtCQUFrQixXQUFXO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLE1BQU07QUFDekM7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDRCQUE0QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLCtFQUErRTtBQUMvRTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsTUFBTTtBQUM5RDtBQUNBO0FBQ0EseUNBQXlDLFFBQVEsRUFBRSxnQkFBZ0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0Esd0RBQXdELE1BQU07QUFDOUQ7QUFDQTtBQUNBLHlDQUF5QyxRQUFRLEVBQUUsZ0JBQWdCO0FBQ25FLDJFQUEyRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxhQUFhO0FBQ3ZELFNBQVM7QUFDVCx3REFBd0Q7QUFDeEQsb0NBQW9DLElBQUk7QUFDeEM7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJydW5lc3RvbmVfcG9sbF9qc19wb2xsX2pzLmJ1bmRsZS5qcz92PWFiZDk1ZGMxMzE3MTJhZTdjNjU1Iiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBTdHlsZXMgZm9yIFJ1bmVzdG9uZSBwb2xsIGRpcmVjdGl2ZSAqL1xcclxcbi5wb2xsIC5wb2xsLXF1ZXN0aW9uIHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb2xsLW9wdGlvbnMgPiBsYWJlbCB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9sbCAucHJvZ3Jlc3Mge1xcclxcbiAgICB3aWR0aDogMzUwcHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb2xsIC5wcm9ncmVzcyAucHJvZ3Jlc3MtYmFyIHtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLnBvbGwtdGV4dCB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3VsdHMtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZW0gOTAlO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ydW5lc3RvbmUvcG9sbC9jc3MvcG9sbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsd0NBQXdDO0FBQ3hDO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFN0eWxlcyBmb3IgUnVuZXN0b25lIHBvbGwgZGlyZWN0aXZlICovXFxyXFxuLnBvbGwgLnBvbGwtcXVlc3Rpb24ge1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvbGwtb3B0aW9ucyA+IGxhYmVsIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wb2xsIC5wcm9ncmVzcyB7XFxyXFxuICAgIHdpZHRoOiAzNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvbGwgLnByb2dyZXNzIC5wcm9ncmVzcy1iYXIge1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9sbC10ZXh0IHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdWx0cy1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJlbSA5MCU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvbGwuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiLypcclxuX19hdXRob3JfXyA9IEtpcmJ5IE9sc29uXHJcbl9fZGF0ZV9fID0gNi8xMi8yMDE1ICAqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBSdW5lc3RvbmVCYXNlIGZyb20gXCIuLi8uLi9jb21tb24vanMvcnVuZXN0b25lYmFzZVwiO1xyXG5pbXBvcnQgXCIuLi9jc3MvcG9sbC5jc3NcIjtcclxuXHJcbmV4cG9ydCB2YXIgcG9sbExpc3QgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbGwgZXh0ZW5kcyBSdW5lc3RvbmVCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcclxuICAgICAgICBzdXBlcihvcHRzKTtcclxuICAgICAgICB2YXIgb3JpZyA9IG9wdHMub3JpZzsgLy9lbnRpcmUgPHA+IGVsZW1lbnRcclxuICAgICAgICB0aGlzLm9yaWdFbGVtID0gb3JpZztcclxuICAgICAgICB0aGlzLmRpdmlkID0gb3JpZy5pZDtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuID0gdGhpcy5vcmlnRWxlbS5jaGlsZE5vZGVzO1xyXG4gICAgICAgIHRoaXMub3B0aW9uTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMub3B0c0FycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5jb21tZW50ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbSkuaXMoXCJbZGF0YS1jb21tZW50XVwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc3VsdHNWaWV3ZXIgPSAkKG9yaWcpLmRhdGEoXCJyZXN1bHRzXCIpO1xyXG4gICAgICAgIHRoaXMuZ2V0UXVlc3Rpb25UZXh0KCk7XHJcbiAgICAgICAgdGhpcy5nZXRPcHRpb25UZXh0KCk7IC8vcG9wdWxhdGVzIG9wdGlvbkxpc3RcclxuICAgICAgICB0aGlzLnJlbmRlclBvbGwoKTsgLy9nZW5lcmF0ZXMgSFRNTFxyXG4gICAgICAgIC8vIENoZWNrcyBsb2NhbFN0b3JhZ2UgdG8gc2VlIGlmIHRoaXMgcG9sbCBoYXMgYWxyZWFkeSBiZWVuIGNvbXBsZXRlZCBieSB0aGlzIHVzZXIuXHJcbiAgICAgICAgdGhpcy5jaGVja1BvbGxTdG9yYWdlKCk7XHJcbiAgICAgICAgdGhpcy5jYXB0aW9uID0gXCJQb2xsXCI7XHJcbiAgICAgICAgdGhpcy5hZGRDYXB0aW9uKFwicnVuZXN0b25lXCIpO1xyXG4gICAgfVxyXG4gICAgZ2V0UXVlc3Rpb25UZXh0KCkge1xyXG4gICAgICAgIC8vZmluZHMgdGhlIHRleHQgaW5zaWRlIHRoZSBwYXJlbnQgdGFnLCBidXQgYmVmb3JlIHRoZSBmaXJzdCA8bGk+IHRhZyBhbmQgc2V0cyBpdCBhcyB0aGUgcXVlc3Rpb25cclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBmaXJzdEFuc3dlcjtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW5baV0udGFnTmFtZSA9PSBcIkxJXCIpIHtcclxuICAgICAgICAgICAgICAgIGZpcnN0QW5zd2VyID0gX3RoaXMuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZGVsaW1pdGVyID0gZmlyc3RBbnN3ZXIub3V0ZXJIVE1MO1xyXG4gICAgICAgIHZhciBmdWxsdGV4dCA9ICQodGhpcy5vcmlnRWxlbSkuaHRtbCgpO1xyXG4gICAgICAgIHZhciB0ZW1wID0gZnVsbHRleHQuc3BsaXQoZGVsaW1pdGVyKTtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gdGVtcFswXTtcclxuICAgIH1cclxuICAgIGdldE9wdGlvblRleHQoKSB7XHJcbiAgICAgICAgLy9HZXRzIHRoZSB0ZXh0IGZyb20gZWFjaCA8bGk+IHRhZyBhbmQgcGxhY2VzIGl0IGluIHRoaXMub3B0aW9uTGlzdFxyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5jaGlsZHJlbltpXS50YWdOYW1lID09IFwiTElcIikge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMub3B0aW9uTGlzdC5wdXNoKCQoX3RoaXMuY2hpbGRyZW5baV0pLnRleHQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXJQb2xsKCkge1xyXG4gICAgICAgIC8vZ2VuZXJhdGVzIHRoZSBIVE1MIHRoYXQgdGhlIHVzZXIgaW50ZXJhY3RzIHdpdGhcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLnBvbGxGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5pZCA9IHRoaXMuZGl2aWQ7XHJcbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lckRpdikuYWRkQ2xhc3ModGhpcy5vcmlnRWxlbS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSk7XHJcbiAgICAgICAgJCh0aGlzLnBvbGxGb3JtKS5odG1sKFxyXG4gICAgICAgICAgICBgPHNwYW4gc3R5bGU9J2ZvbnQtc2l6ZTogTGFyZ2UnPiR7dGhpcy5xdWVzdGlvbn08L3NwYW4+YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgJCh0aGlzLnBvbGxGb3JtKS5hdHRyKHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuZGl2aWQgKyBcIl9mb3JtXCIsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgICAgICAgICAgYWN0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICBvbnN1Ym1pdDogXCJyZXR1cm4gZmFsc2U7XCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wb2xsRm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vcHRpb25MaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgdmFyIHRtcGlkID0gX3RoaXMuZGl2aWQgKyBcIl9vcHRfXCIgKyBpO1xyXG4gICAgICAgICAgICAkKHJhZGlvKS5hdHRyKHtcclxuICAgICAgICAgICAgICAgIGlkOiB0bXBpZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZGl2aWQgKyBcIl9ncm91cDFcIixcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwicmFkaW9cIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJChyYWRpbykuY2xpY2sodGhpcy5zdWJtaXRQb2xsLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgICQobGFiZWwpLmF0dHIoXCJmb3JcIiwgdG1waWQpO1xyXG4gICAgICAgICAgICAkKGxhYmVsKS50ZXh0KHRoaXMub3B0aW9uTGlzdFtpXSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9sbEZvcm0uYXBwZW5kQ2hpbGQocmFkaW8pO1xyXG4gICAgICAgICAgICB0aGlzLm9wdHNBcnJheS5wdXNoKHJhZGlvKTtcclxuICAgICAgICAgICAgdGhpcy5wb2xsRm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9sbEZvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY29tbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlclRleHRGaWVsZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc3VsdHNEaXYuaWQgPSB0aGlzLmRpdmlkICsgXCJfcmVzdWx0c1wiO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRoaXMucG9sbEZvcm0pO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRoaXMucmVzdWx0c0Rpdik7XHJcbiAgICAgICAgJCh0aGlzLm9yaWdFbGVtKS5yZXBsYWNlV2l0aCh0aGlzLmNvbnRhaW5lckRpdik7XHJcbiAgICB9XHJcbiAgICByZW5kZXJUZXh0RmllbGQoKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGhpcy50ZXh0ZmllbGQudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgICQodGhpcy50ZXh0ZmllbGQpLmFkZENsYXNzKFwiZm9ybS1jb250cm9sXCIpO1xyXG4gICAgICAgIHRoaXMudGV4dGZpZWxkLnN0eWxlLndpZHRoID0gXCIzMDBweFwiO1xyXG4gICAgICAgIHRoaXMudGV4dGZpZWxkLm5hbWUgPSB0aGlzLmRpdmlkICsgXCJfY29tbWVudFwiO1xyXG4gICAgICAgIHRoaXMudGV4dGZpZWxkLnBsYWNlaG9sZGVyID0gXCJBbnkgY29tbWVudHM/XCI7XHJcbiAgICAgICAgdGhpcy5wb2xsRm9ybS5hcHBlbmRDaGlsZCh0aGlzLnRleHRmaWVsZCk7XHJcbiAgICAgICAgdGhpcy5wb2xsRm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgfVxyXG4gICAgc3VibWl0UG9sbCgpIHtcclxuICAgICAgICAvL2NoZWNrcyB0aGUgcG9sbCwgc2V0cyBsb2NhbHN0b3JhZ2UgYW5kIHN1Ym1pdHMgdG8gdGhlIHNlcnZlclxyXG4gICAgICAgIHZhciBwb2xsX3ZhbCA9IG51bGw7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9wdHNBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRzQXJyYXlbaV0uY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgcG9sbF92YWwgPSB0aGlzLm9wdHNBcnJheVtpXS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwb2xsX3ZhbCA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIHZhciBjb21tZW50X3ZhbCA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tbWVudCkge1xyXG4gICAgICAgICAgICBjb21tZW50X3ZhbCA9IHRoaXMudGV4dGZpZWxkLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYWN0ID0gXCJcIjtcclxuICAgICAgICBpZiAoY29tbWVudF92YWwgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgYWN0ID0gcG9sbF92YWwgKyBcIjpcIiArIGNvbW1lbnRfdmFsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFjdCA9IHBvbGxfdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZXZlbnRJbmZvID0geyBldmVudDogXCJwb2xsXCIsIGFjdDogYWN0LCBkaXZfaWQ6IHRoaXMuZGl2aWQgfTtcclxuICAgICAgICAvLyBsb2cgdGhlIHJlc3BvbnNlIHRvIHRoZSBkYXRhYmFzZVxyXG4gICAgICAgIHRoaXMubG9nQm9va0V2ZW50KGV2ZW50SW5mbyk7IC8vIGluIGJvb2tmdW5jcy5qc1xyXG4gICAgICAgIC8vIGxvZyB0aGUgZmFjdCB0aGF0IHRoZSB1c2VyIGhhcyBhbnN3ZXJlZCB0aGUgcG9sbCB0byBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5kaXZpZCwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5kaXZpZH1fc2VudGApKSB7XHJcbiAgICAgICAgICAgICQodGhpcy5wb2xsRm9ybSkuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxzcGFuIGlkPSR7dGhpcy5kaXZpZH1fc2VudD48c3Ryb25nPlRoYW5rcywgeW91ciByZXNwb25zZSBoYXMgYmVlbiByZWNvcmRlZDwvc3Ryb25nPjwvc3Bhbj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChgIyR7dGhpcy5kaXZpZH1fc2VudGApLmh0bWwoXHJcbiAgICAgICAgICAgICAgICBcIjxzdHJvbmc+T25seSBZb3VyIGxhc3QgcmVwb25zZSBpcyByZWNvcmRlZDwvc3Ryb25nPlwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNob3cgdGhlIHJlc3VsdHMgb2YgdGhlIHBvbGxcclxuICAgICAgICBpZiAodGhpcy5yZXN1bHRzVmlld2VyID09PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0ge307XHJcbiAgICAgICAgICAgIGRhdGEuZGl2X2lkID0gdGhpcy5kaXZpZDtcclxuICAgICAgICAgICAgZGF0YS5jb3Vyc2UgPSBlQm9va0NvbmZpZy5jb3Vyc2U7XHJcbiAgICAgICAgICAgIGpRdWVyeS5nZXQoXHJcbiAgICAgICAgICAgICAgICBlQm9va0NvbmZpZy5hamF4VVJMICsgXCJnZXRwb2xscmVzdWx0c1wiLFxyXG4gICAgICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BvbGxSZXN1bHRzXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hvd1BvbGxSZXN1bHRzKGRhdGEpIHtcclxuICAgICAgICAvL2Rpc3BsYXlzIHRoZSByZXN1bHRzIHJldHVybmVkIGJ5IHRoZSBzZXJ2ZXJcclxuICAgICAgICB2YXIgcmVzdWx0cyA9IGV2YWwoZGF0YSk7XHJcbiAgICAgICAgdmFyIHRvdGFsID0gcmVzdWx0c1swXTtcclxuICAgICAgICB2YXIgb3B0X2xpc3QgPSByZXN1bHRzWzFdO1xyXG4gICAgICAgIHZhciBjb3VudF9saXN0ID0gcmVzdWx0c1syXTtcclxuICAgICAgICB2YXIgZGl2X2lkID0gcmVzdWx0c1szXTtcclxuICAgICAgICB2YXIgbXlfdm90ZSA9IHJlc3VsdHNbNF07XHJcbiAgICAgICAgLy8gcmVzdHVyZSBjdXJyZW50IHVzZXJzIHZvdGVcclxuICAgICAgICBpZiAobXlfdm90ZSA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0c0FycmF5W215X3ZvdGVdLmNoZWNrZWQgPSBcImNoZWNrZWRcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2hvdyByZXN1bHRzIHN1bW1hcnkgaWYgYXBwcm9wcmlhdGVcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICh0aGlzLnJlc3VsdHNWaWV3ZXIgPT09IFwiYWxsXCIgJiZcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuZGl2aWQgPT09IFwidHJ1ZVwiKSkgfHxcclxuICAgICAgICAgICAgZUJvb2tDb25maWcuaXNJbnN0cnVjdG9yXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICQodGhpcy5yZXN1bHRzRGl2KS5odG1sKFxyXG4gICAgICAgICAgICAgICAgYDxiPlJlc3VsdHM6PC9iPiAke3RvdGFsfSByZXNwb25zZXMgPGJyPjxicj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcclxuICAgICAgICAgICAgJChsaXN0KS5hZGRDbGFzcyhcInJlc3VsdHMtY29udGFpbmVyXCIpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3B0aW9uTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvdW50O1xyXG4gICAgICAgICAgICAgICAgdmFyIHBlcmNlbnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnRfbGlzdFtpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ID0gY291bnRfbGlzdFtpXTtcclxuICAgICAgICAgICAgICAgICAgICBwZXJjZW50ID0gKGNvdW50IC8gdG90YWwpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IGNvdW50ICsgXCIgKFwiICsgTWF0aC5yb3VuZCgxMCAqIHBlcmNlbnQpIC8gMTAgKyBcIiUpXCI7IC8vIHJvdW5kIHBlcmNlbnQgdG8gMTB0aHNcclxuICAgICAgICAgICAgICAgIHZhciBodG1sO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBlcmNlbnQgPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cInByb2dyZXNzY291bnRlclwiPiR7aSArIDF9LiA8L2Rpdj5gICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPSdwcm9ncmVzcyc+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9J3Byb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItc3VjY2VzcydcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBzdHlsZT1cIndpZHRoOiAke3BlcmNlbnR9JTsgbWluLXdpZHRoOiAyZW07XCI+YCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPHNwYW4gY2xhc3M9J3BvbGwtdGV4dCc+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCI8L3NwYW4+PC9kaXY+PC9kaXY+XCI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cInByb2dyZXNzY291bnRlclwiPiR7aSArIDF9LiA8L2Rpdj5gICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPSdwcm9ncmVzcyc+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9J3Byb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItc3VjY2VzcydcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBzdHlsZT1cIndpZHRoOiAke3BlcmNlbnR9JTsgbWluLXdpZHRoOiAyZW07XCI+PC9kaXY+YCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPHNwYW4gY2xhc3M9J3BvbGwtdGV4dCcgc3R5bGU9J21hcmdpbjogMCAwIDAgMTBweDsnPlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPC9zcGFuPjwvZGl2PlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJChodG1sKTtcclxuICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kKGVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKHRoaXMucmVzdWx0c0RpdikuYXBwZW5kKGxpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluZGljYXRlX2NvbXBvbmVudF9yZWFkeSgpO1xyXG4gICAgfVxyXG4gICAgZGlzYWJsZU9wdGlvbnMoKSB7fVxyXG4gICAgY2hlY2tQb2xsU3RvcmFnZSgpIHtcclxuICAgICAgICAvL2NoZWNrcyB0aGUgbG9jYWxzdG9yYWdlIHRvIHNlZSBpZiB0aGUgcG9sbCBoYXMgYmVlbiBjb21wbGV0ZWQgYWxyZWFkeVxyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGxlbiA9IGxvY2FsU3RvcmFnZS5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGxlbiA+IDApIHtcclxuICAgICAgICAgICAgLy9JZiB0aGUgcG9sbCBoYXMgYWxyZWFkeSBiZWVuIGNvbXBsZXRlZCwgc2hvdyB0aGUgcmVzdWx0c1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICBkYXRhLmRpdl9pZCA9IHRoaXMuZGl2aWQ7XHJcbiAgICAgICAgICAgIGRhdGEuY291cnNlID0gZUJvb2tDb25maWcuY291cnNlO1xyXG4gICAgICAgICAgICBqUXVlcnkuZ2V0KFxyXG4gICAgICAgICAgICAgICAgZUJvb2tDb25maWcuYWpheFVSTCArIFwiZ2V0cG9sbHJlc3VsdHNcIixcclxuICAgICAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQb2xsUmVzdWx0cy5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgICkuZmFpbCh0aGlzLmluZGljYXRlX2NvbXBvbmVudF9yZWFkeS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmluZGljYXRlX2NvbXBvbmVudF9yZWFkeSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gRG8gbm90IHJlbmRlciBwb2xsIGRhdGEgdW50aWwgbG9naW4tY29tcGxldGUgZXZlbnQgc28gd2Uga25vdyBpbnN0cnVjdG9yIHN0YXR1c1xyXG4kKGRvY3VtZW50KS5iaW5kKFwicnVuZXN0b25lOmxvZ2luLWNvbXBsZXRlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCJbZGF0YS1jb21wb25lbnQ9cG9sbF1cIikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBwb2xsTGlzdFt0aGlzLmlkXSA9IG5ldyBQb2xsKHsgb3JpZzogdGhpcyB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yIHJlbmRlcmluZyBQb2xsIFByb2JsZW0gJHt0aGlzLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgRGV0YWlsczogJHtlcnJ9YCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9IHt9O1xyXG59XHJcbndpbmRvdy5jb21wb25lbnRfZmFjdG9yeS5wb2xsID0gZnVuY3Rpb24gKG9wdHMpIHtcclxuICAgIHJldHVybiBuZXcgUG9sbChvcHRzKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==