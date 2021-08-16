(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_shortanswer_js_timed_shortanswer_js"],{

/***/ 41931:
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./runestone/shortanswer/css/shortanswer.css ***!
  \*****************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "div.journal div.latexoutput {\r\n    background-color: #eeeeee;\r\n    padding: 1em;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./runestone/shortanswer/css/shortanswer.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;AACtB","sourcesContent":["div.journal div.latexoutput {\r\n    background-color: #eeeeee;\r\n    padding: 1em;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 13651:
/*!***************************************************!*\
  !*** ./runestone/shortanswer/css/shortanswer.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_shortanswer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./shortanswer.css */ 41931);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_shortanswer_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_shortanswer_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ 67230:
/*!*************************************************!*\
  !*** ./runestone/shortanswer/js/shortanswer.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saList": () => (/* binding */ saList),
/* harmony export */   "default": () => (/* binding */ ShortAnswer)
/* harmony export */ });
/* harmony import */ var _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase.js */ 2568);
/* harmony import */ var _css_shortanswer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../css/shortanswer.css */ 13651);
/*==========================================
=======    Master shortanswer.js    ========
============================================
===     This file contains the JS for    ===
=== the Runestone shortanswer component. ===
============================================
===              Created by              ===
===           Isaiah Mayerchak           ===
===                7/2/15                ===
===              Brad Miller             ===
===                2019                  ===
==========================================*/




var saList;
if (saList === undefined) saList = {}; // Dictionary that contains all instances of shortanswer objects

class ShortAnswer extends _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(opts) {
        super(opts);
        if (opts) {
            var orig = opts.orig; // entire <p> element that will be replaced by new HTML
            this.useRunestoneServices =
                opts.useRunestoneServices || eBookConfig.useRunestoneServices;
            this.origElem = orig;
            this.divid = orig.id;
            this.question = this.origElem.innerHTML;
            this.optional = false;
            if ($(this.origElem).is("[data-optional]")) {
                this.optional = true;
            }
            if ($(this.origElem).is("[data-mathjax]")) {
                this.mathjax = true;
            }
            this.renderHTML();
            this.caption = "shortanswer";
            this.addCaption("runestone");
            this.checkServer("shortanswer", true);
        }
    }

    renderHTML() {
        this.containerDiv = document.createElement("div");
        this.containerDiv.id = this.divid;
        $(this.containerDiv).addClass(this.origElem.getAttribute("class"));
        this.newForm = document.createElement("form");
        this.newForm.id = this.divid + "_journal";
        this.newForm.name = this.newForm.id;
        this.newForm.action = "";
        this.containerDiv.appendChild(this.newForm);
        this.fieldSet = document.createElement("fieldset");
        this.newForm.appendChild(this.fieldSet);
        this.legend = document.createElement("legend");
        this.legend.innerHTML = "Short Answer";
        this.fieldSet.appendChild(this.legend);
        this.firstLegendDiv = document.createElement("div");
        this.firstLegendDiv.innerHTML = this.question;
        $(this.firstLegendDiv).addClass("journal-question");
        this.fieldSet.appendChild(this.firstLegendDiv);
        this.jInputDiv = document.createElement("div");
        this.jInputDiv.id = this.divid + "_journal_input";
        this.fieldSet.appendChild(this.jInputDiv);
        this.jOptionsDiv = document.createElement("div");
        $(this.jOptionsDiv).addClass("journal-options");
        this.jInputDiv.appendChild(this.jOptionsDiv);
        this.jLabel = document.createElement("label");
        $(this.jLabel).addClass("radio-inline");
        this.jOptionsDiv.appendChild(this.jLabel);
        this.jTextArea = document.createElement("textarea");
        let self = this;
        this.jTextArea.onchange = function () {
            self.isAnswered = true;
        };
        this.jTextArea.id = this.divid + "_solution";
        $(this.jTextArea).attr("aria-label", "textarea");
        $(this.jTextArea).css("display:inline, width:530px");
        $(this.jTextArea).addClass("form-control");
        this.jTextArea.rows = 4;
        this.jTextArea.cols = 50;
        this.jLabel.appendChild(this.jTextArea);
        this.jTextArea.onchange = function () {
            this.feedbackDiv.innerHTML = "Your answer has not been saved yet!";
            $(this.feedbackDiv).removeClass("alert-success");
            $(this.feedbackDiv).addClass("alert alert-danger");
        }.bind(this);
        this.fieldSet.appendChild(document.createElement("br"));
        if (this.mathjax) {
            this.renderedAnswer = document.createElement("div");
            $(this.renderedAnswer).addClass("latexoutput");
            this.fieldSet.appendChild(this.renderedAnswer);
        }
        this.buttonDiv = document.createElement("div");
        this.fieldSet.appendChild(this.buttonDiv);
        this.submitButton = document.createElement("button");
        $(this.submitButton).addClass("btn btn-success");
        this.submitButton.type = "button";
        this.submitButton.textContent = "Save";
        this.submitButton.onclick = function () {
            this.checkCurrentAnswer();
            this.logCurrentAnswer();
            this.renderFeedback();
        }.bind(this);
        this.buttonDiv.appendChild(this.submitButton);
        this.randomSpan = document.createElement("span");
        this.randomSpan.innerHTML = "Instructor's Feedback";
        this.fieldSet.appendChild(this.randomSpan);
        this.otherOptionsDiv = document.createElement("div");
        $(this.otherOptionsDiv).css("padding-left:20px");
        $(this.otherOptionsDiv).addClass("journal-options");
        this.fieldSet.appendChild(this.otherOptionsDiv);
        // add a feedback div to give user feedback
        this.feedbackDiv = document.createElement("div");
        //$(this.feedbackDiv).addClass("bg-info form-control");
        //$(this.feedbackDiv).css("width:530px, background-color:#eee, font-style:italic");
        $(this.feedbackDiv).css("width:530px, font-style:italic");
        this.feedbackDiv.id = this.divid + "_feedback";
        this.feedbackDiv.innerHTML = "You have not answered this question yet.";
        $(this.feedbackDiv).addClass("alert alert-danger");
        //this.otherOptionsDiv.appendChild(this.feedbackDiv);
        this.fieldSet.appendChild(this.feedbackDiv);
        //this.fieldSet.appendChild(document.createElement("br"));
        $(this.origElem).replaceWith(this.containerDiv);
        // This is a stopgap measure for when MathJax is not loaded at all.  There is another
        // more difficult case that when MathJax is loaded asynchronously we will get here
        // before MathJax is loaded.  In that case we will need to implement something
        // like `the solution described here <https://stackoverflow.com/questions/3014018/how-to-detect-when-mathjax-is-fully-loaded>`_
        if (typeof MathJax !== "undefined") {
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.containerDiv]);
        }
    }

    renderMath(value) {
        if (this.mathjax) {
            value = value.replace(/\$\$(.*?)\$\$/g, "\\[ $1 \\]");
            value = value.replace(/\$(.*?)\$/g, "\\( $1 \\)");
            $(this.renderedAnswer).text(value);
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.renderedAnswer]);
        }
    }

    checkCurrentAnswer() {}

    logCurrentAnswer() {
        let value = $(document.getElementById(this.divid + "_solution")).val();
        this.renderMath(value);
        this.setLocalStorage({
            answer: value,
            timestamp: new Date(),
        });
        this.logBookEvent({
            event: "shortanswer",
            act: value,
            div_id: this.divid,
        });
    }

    renderFeedback() {
        this.feedbackDiv.innerHTML = "Your answer has been saved.";
        $(this.feedbackDiv).removeClass("alert-danger");
        $(this.feedbackDiv).addClass("alert alert-success");
    }
    setLocalStorage(data) {
        if (!this.graderactive) {
            let key = this.localStorageKey();
            localStorage.setItem(key, JSON.stringify(data));
        }
    }
    checkLocalStorage() {
        // Repopulates the short answer text
        // which was stored into local storage.
        var answer = "";
        if (this.graderactive) {
            return;
        }
        var len = localStorage.length;
        if (len > 0) {
            var ex = localStorage.getItem(this.localStorageKey());
            if (ex !== null) {
                try {
                    var storedData = JSON.parse(ex);
                    answer = storedData.answer;
                } catch (err) {
                    // error while parsing; likely due to bad value stored in storage
                    console.log(err.message);
                    localStorage.removeItem(this.localStorageKey());
                    return;
                }
                let solution = $("#" + this.divid + "_solution");
                solution.text(answer);
                this.renderMath(answer);
                this.feedbackDiv.innerHTML =
                    "Your current saved answer is shown above.";
                $(this.feedbackDiv).removeClass("alert-danger");
                $(this.feedbackDiv).addClass("alert alert-success");
            }
        }
    }
    restoreAnswers(data) {
        // Restore answers from storage retrieval done in RunestoneBase
        // sometimes data.answer can be null
        if (!data.answer) {
            data.answer = "";
        }
        this.answer = data.answer;
        this.jTextArea.value = this.answer;
        this.renderMath(this.answer);

        let p = document.createElement("p");
        this.jInputDiv.appendChild(p);
        var tsString = "";
        if (data.timestamp) {
            tsString = new Date(data.timestamp).toLocaleString();
        } else {
            tsString = "";
        }
        $(p).text(tsString);
        if (data.last_answer) {
            this.current_answer = "ontime";
            let toggle_answer_button = document.createElement("button");
            toggle_answer_button.type = "button";
            $(toggle_answer_button).text("Show Late Answer");
            $(toggle_answer_button).addClass("btn btn-warning");
            $(toggle_answer_button).css("margin-left", "5px");

            $(toggle_answer_button).click(
                function () {
                    var display_timestamp, button_text;
                    if (this.current_answer === "ontime") {
                        this.jTextArea.value = data.last_answer;
                        this.answer = data.last_answer;
                        display_timestamp = new Date(
                            data.last_timestamp
                        ).toLocaleString();
                        button_text = "Show on-Time Answer";
                        this.current_answer = "late";
                    } else {
                        this.jTextArea.value = data.answer;
                        this.answer = data.answer;
                        display_timestamp = tsString;
                        button_text = "Show Late Answer";
                        this.current_answer = "ontime";
                    }
                    this.renderMath(this.answer);
                    $(p).text(`Submitted: ${display_timestamp}`);
                    $(toggle_answer_button).text(button_text);
                }.bind(this)
            );

            this.buttonDiv.appendChild(toggle_answer_button);
        }
        let feedbackStr = "Your current saved answer is shown above.";
        if (typeof data.score !== "undefined") {
            feedbackStr = `Score: ${data.score}`;
        }
        if (data.comment) {
            feedbackStr += ` -- ${data.comment}`;
        }
        this.feedbackDiv.innerHTML = feedbackStr;

        $(this.feedbackDiv).removeClass("alert-danger");
        $(this.feedbackDiv).addClass("alert alert-success");
    }

    disableInteraction() {
        this.jTextArea.disabled = true;
    }
}

/*=================================
== Find the custom HTML tags and ==
==   execute our code on them    ==
=================================*/
$(document).bind("runestone:login-complete", function () {
    $("[data-component=shortanswer]").each(function () {
        if ($(this).closest("[data-component=timedAssessment]").length == 0) {
            // If this element exists within a timed component, don't render it here
            try {
                saList[this.id] = new ShortAnswer({
                    orig: this,
                    useRunestoneServices: eBookConfig.useRunestoneServices,
                });
            } catch (err) {
                console.log(`Error rendering ClickableArea Problem ${this.id}
                Details: ${err}`);
            }
        }
    });
});


/***/ }),

/***/ 87483:
/*!*******************************************************!*\
  !*** ./runestone/shortanswer/js/timed_shortanswer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TimedShortAnswer)
/* harmony export */ });
/* harmony import */ var _shortanswer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shortanswer.js */ 67230);


class TimedShortAnswer extends _shortanswer_js__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(opts) {
        super(opts);
        this.renderTimedIcon(this.containerDiv);
        this.hideButtons();
    }
    hideButtons() {
        $(this.submitButton).hide();
    }
    renderTimedIcon(component) {
        // renders the clock icon on timed components.    The component parameter
        // is the element that the icon should be appended to.
        var timeIconDiv = document.createElement("div");
        var timeIcon = document.createElement("img");
        $(timeIcon).attr({
            src: "../_static/clock.png",
            style: "width:15px;height:15px",
        });
        timeIconDiv.className = "timeTip";
        timeIconDiv.title = "";
        timeIconDiv.appendChild(timeIcon);
        $(component).prepend(timeIconDiv);
    }
    checkCorrectTimed() {
        return "I"; // we ignore this in the grading
    }
    hideFeedback() {
        $(this.feedbackDiv).hide();
    }
}

if (typeof window.component_factory === "undefined") {
    window.component_factory = {};
}

window.component_factory.shortanswer = function (opts) {
    if (opts.timed) {
        return new TimedShortAnswer(opts);
    }
    return new _shortanswer_js__WEBPACK_IMPORTED_MODULE_0__.default(opts);
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3Nob3J0YW5zd2VyL2Nzcy9zaG9ydGFuc3dlci5jc3MiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9zaG9ydGFuc3dlci9jc3Mvc2hvcnRhbnN3ZXIuY3NzP2U1NWYiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9zaG9ydGFuc3dlci9qcy9zaG9ydGFuc3dlci5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3Nob3J0YW5zd2VyL2pzL3RpbWVkX3Nob3J0YW5zd2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNEg7QUFDN0I7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLHVFQUF1RSxrQ0FBa0MscUJBQXFCLDRCQUE0QiwyQkFBMkIsS0FBSyxXQUFXLDRHQUE0RyxZQUFZLFdBQVcsWUFBWSxhQUFhLHVEQUF1RCxrQ0FBa0MscUJBQXFCLDRCQUE0QiwyQkFBMkIsS0FBSyx1QkFBdUI7QUFDbGlCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQd0Q7QUFDL0YsWUFBbUc7O0FBRW5HOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLHlGQUFPOzs7O0FBSXhCLGlFQUFlLGdHQUFjLE1BQU0sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWm5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkQ7QUFDM0I7O0FBRTNCO0FBQ1Asc0NBQXNDOztBQUV2QiwwQkFBMEIsZ0VBQWE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQiwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsa0JBQWtCO0FBQzlEO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFdBQVc7QUFDL0M7QUFDQTtBQUNBLGtDQUFrQyxhQUFhO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IscUVBQXFFO0FBQ3JFLDJCQUEyQixJQUFJO0FBQy9CO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqUzBDOztBQUU1QiwrQkFBK0Isb0RBQVc7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9EQUFXO0FBQzFCIiwiZmlsZSI6InJ1bmVzdG9uZV9zaG9ydGFuc3dlcl9qc190aW1lZF9zaG9ydGFuc3dlcl9qcy5idW5kbGUuanM/dj03ZmEzZWY0M2M1ZGYxZTIzM2QxYiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmpvdXJuYWwgZGl2LmxhdGV4b3V0cHV0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3J1bmVzdG9uZS9zaG9ydGFuc3dlci9jc3Mvc2hvcnRhbnN3ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImRpdi5qb3VybmFsIGRpdi5sYXRleG91dHB1dCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaG9ydGFuc3dlci5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PT09PT09ICAgIE1hc3RlciBzaG9ydGFuc3dlci5qcyAgICA9PT09PT09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PT0gICAgIFRoaXMgZmlsZSBjb250YWlucyB0aGUgSlMgZm9yICAgID09PVxyXG49PT0gdGhlIFJ1bmVzdG9uZSBzaG9ydGFuc3dlciBjb21wb25lbnQuID09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PT0gICAgICAgICAgICAgIENyZWF0ZWQgYnkgICAgICAgICAgICAgID09PVxyXG49PT0gICAgICAgICAgIElzYWlhaCBNYXllcmNoYWsgICAgICAgICAgID09PVxyXG49PT0gICAgICAgICAgICAgICAgNy8yLzE1ICAgICAgICAgICAgICAgID09PVxyXG49PT0gICAgICAgICAgICAgIEJyYWQgTWlsbGVyICAgICAgICAgICAgID09PVxyXG49PT0gICAgICAgICAgICAgICAgMjAxOSAgICAgICAgICAgICAgICAgID09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuaW1wb3J0IFJ1bmVzdG9uZUJhc2UgZnJvbSBcIi4uLy4uL2NvbW1vbi9qcy9ydW5lc3RvbmViYXNlLmpzXCI7XHJcbmltcG9ydCBcIi4vLi4vY3NzL3Nob3J0YW5zd2VyLmNzc1wiO1xyXG5cclxuZXhwb3J0IHZhciBzYUxpc3Q7XHJcbmlmIChzYUxpc3QgPT09IHVuZGVmaW5lZCkgc2FMaXN0ID0ge307IC8vIERpY3Rpb25hcnkgdGhhdCBjb250YWlucyBhbGwgaW5zdGFuY2VzIG9mIHNob3J0YW5zd2VyIG9iamVjdHNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3J0QW5zd2VyIGV4dGVuZHMgUnVuZXN0b25lQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XHJcbiAgICAgICAgc3VwZXIob3B0cyk7XHJcbiAgICAgICAgaWYgKG9wdHMpIHtcclxuICAgICAgICAgICAgdmFyIG9yaWcgPSBvcHRzLm9yaWc7IC8vIGVudGlyZSA8cD4gZWxlbWVudCB0aGF0IHdpbGwgYmUgcmVwbGFjZWQgYnkgbmV3IEhUTUxcclxuICAgICAgICAgICAgdGhpcy51c2VSdW5lc3RvbmVTZXJ2aWNlcyA9XHJcbiAgICAgICAgICAgICAgICBvcHRzLnVzZVJ1bmVzdG9uZVNlcnZpY2VzIHx8IGVCb29rQ29uZmlnLnVzZVJ1bmVzdG9uZVNlcnZpY2VzO1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdFbGVtID0gb3JpZztcclxuICAgICAgICAgICAgdGhpcy5kaXZpZCA9IG9yaWcuaWQ7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb24gPSB0aGlzLm9yaWdFbGVtLmlubmVySFRNTDtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25hbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzLm9yaWdFbGVtKS5pcyhcIltkYXRhLW9wdGlvbmFsXVwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25hbCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbSkuaXMoXCJbZGF0YS1tYXRoamF4XVwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRoamF4ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlckhUTUwoKTtcclxuICAgICAgICAgICAgdGhpcy5jYXB0aW9uID0gXCJzaG9ydGFuc3dlclwiO1xyXG4gICAgICAgICAgICB0aGlzLmFkZENhcHRpb24oXCJydW5lc3RvbmVcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tTZXJ2ZXIoXCJzaG9ydGFuc3dlclwiLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySFRNTCgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuaWQgPSB0aGlzLmRpdmlkO1xyXG4gICAgICAgICQodGhpcy5jb250YWluZXJEaXYpLmFkZENsYXNzKHRoaXMub3JpZ0VsZW0uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikpO1xyXG4gICAgICAgIHRoaXMubmV3Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgICAgIHRoaXMubmV3Rm9ybS5pZCA9IHRoaXMuZGl2aWQgKyBcIl9qb3VybmFsXCI7XHJcbiAgICAgICAgdGhpcy5uZXdGb3JtLm5hbWUgPSB0aGlzLm5ld0Zvcm0uaWQ7XHJcbiAgICAgICAgdGhpcy5uZXdGb3JtLmFjdGlvbiA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5uZXdGb3JtKTtcclxuICAgICAgICB0aGlzLmZpZWxkU2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xyXG4gICAgICAgIHRoaXMubmV3Rm9ybS5hcHBlbmRDaGlsZCh0aGlzLmZpZWxkU2V0KTtcclxuICAgICAgICB0aGlzLmxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIik7XHJcbiAgICAgICAgdGhpcy5sZWdlbmQuaW5uZXJIVE1MID0gXCJTaG9ydCBBbnN3ZXJcIjtcclxuICAgICAgICB0aGlzLmZpZWxkU2V0LmFwcGVuZENoaWxkKHRoaXMubGVnZW5kKTtcclxuICAgICAgICB0aGlzLmZpcnN0TGVnZW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLmZpcnN0TGVnZW5kRGl2LmlubmVySFRNTCA9IHRoaXMucXVlc3Rpb247XHJcbiAgICAgICAgJCh0aGlzLmZpcnN0TGVnZW5kRGl2KS5hZGRDbGFzcyhcImpvdXJuYWwtcXVlc3Rpb25cIik7XHJcbiAgICAgICAgdGhpcy5maWVsZFNldC5hcHBlbmRDaGlsZCh0aGlzLmZpcnN0TGVnZW5kRGl2KTtcclxuICAgICAgICB0aGlzLmpJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5qSW5wdXREaXYuaWQgPSB0aGlzLmRpdmlkICsgXCJfam91cm5hbF9pbnB1dFwiO1xyXG4gICAgICAgIHRoaXMuZmllbGRTZXQuYXBwZW5kQ2hpbGQodGhpcy5qSW5wdXREaXYpO1xyXG4gICAgICAgIHRoaXMuak9wdGlvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICQodGhpcy5qT3B0aW9uc0RpdikuYWRkQ2xhc3MoXCJqb3VybmFsLW9wdGlvbnNcIik7XHJcbiAgICAgICAgdGhpcy5qSW5wdXREaXYuYXBwZW5kQ2hpbGQodGhpcy5qT3B0aW9uc0Rpdik7XHJcbiAgICAgICAgdGhpcy5qTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgJCh0aGlzLmpMYWJlbCkuYWRkQ2xhc3MoXCJyYWRpby1pbmxpbmVcIik7XHJcbiAgICAgICAgdGhpcy5qT3B0aW9uc0Rpdi5hcHBlbmRDaGlsZCh0aGlzLmpMYWJlbCk7XHJcbiAgICAgICAgdGhpcy5qVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMualRleHRBcmVhLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLmlzQW5zd2VyZWQgPSB0cnVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5qVGV4dEFyZWEuaWQgPSB0aGlzLmRpdmlkICsgXCJfc29sdXRpb25cIjtcclxuICAgICAgICAkKHRoaXMualRleHRBcmVhKS5hdHRyKFwiYXJpYS1sYWJlbFwiLCBcInRleHRhcmVhXCIpO1xyXG4gICAgICAgICQodGhpcy5qVGV4dEFyZWEpLmNzcyhcImRpc3BsYXk6aW5saW5lLCB3aWR0aDo1MzBweFwiKTtcclxuICAgICAgICAkKHRoaXMualRleHRBcmVhKS5hZGRDbGFzcyhcImZvcm0tY29udHJvbFwiKTtcclxuICAgICAgICB0aGlzLmpUZXh0QXJlYS5yb3dzID0gNDtcclxuICAgICAgICB0aGlzLmpUZXh0QXJlYS5jb2xzID0gNTA7XHJcbiAgICAgICAgdGhpcy5qTGFiZWwuYXBwZW5kQ2hpbGQodGhpcy5qVGV4dEFyZWEpO1xyXG4gICAgICAgIHRoaXMualRleHRBcmVhLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmZlZWRiYWNrRGl2LmlubmVySFRNTCA9IFwiWW91ciBhbnN3ZXIgaGFzIG5vdCBiZWVuIHNhdmVkIHlldCFcIjtcclxuICAgICAgICAgICAgJCh0aGlzLmZlZWRiYWNrRGl2KS5yZW1vdmVDbGFzcyhcImFsZXJ0LXN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgICQodGhpcy5mZWVkYmFja0RpdikuYWRkQ2xhc3MoXCJhbGVydCBhbGVydC1kYW5nZXJcIik7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZmllbGRTZXQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgICBpZiAodGhpcy5tYXRoamF4KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRBbnN3ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMucmVuZGVyZWRBbnN3ZXIpLmFkZENsYXNzKFwibGF0ZXhvdXRwdXRcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGRTZXQuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlZEFuc3dlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLmZpZWxkU2V0LmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uRGl2KTtcclxuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgJCh0aGlzLnN1Ym1pdEJ1dHRvbikuYWRkQ2xhc3MoXCJidG4gYnRuLXN1Y2Nlc3NcIik7XHJcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlNhdmVcIjtcclxuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrQ3VycmVudEFuc3dlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ0N1cnJlbnRBbnN3ZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJGZWVkYmFjaygpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkRpdi5hcHBlbmRDaGlsZCh0aGlzLnN1Ym1pdEJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy5yYW5kb21TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgdGhpcy5yYW5kb21TcGFuLmlubmVySFRNTCA9IFwiSW5zdHJ1Y3RvcidzIEZlZWRiYWNrXCI7XHJcbiAgICAgICAgdGhpcy5maWVsZFNldC5hcHBlbmRDaGlsZCh0aGlzLnJhbmRvbVNwYW4pO1xyXG4gICAgICAgIHRoaXMub3RoZXJPcHRpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAkKHRoaXMub3RoZXJPcHRpb25zRGl2KS5jc3MoXCJwYWRkaW5nLWxlZnQ6MjBweFwiKTtcclxuICAgICAgICAkKHRoaXMub3RoZXJPcHRpb25zRGl2KS5hZGRDbGFzcyhcImpvdXJuYWwtb3B0aW9uc1wiKTtcclxuICAgICAgICB0aGlzLmZpZWxkU2V0LmFwcGVuZENoaWxkKHRoaXMub3RoZXJPcHRpb25zRGl2KTtcclxuICAgICAgICAvLyBhZGQgYSBmZWVkYmFjayBkaXYgdG8gZ2l2ZSB1c2VyIGZlZWRiYWNrXHJcbiAgICAgICAgdGhpcy5mZWVkYmFja0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgLy8kKHRoaXMuZmVlZGJhY2tEaXYpLmFkZENsYXNzKFwiYmctaW5mbyBmb3JtLWNvbnRyb2xcIik7XHJcbiAgICAgICAgLy8kKHRoaXMuZmVlZGJhY2tEaXYpLmNzcyhcIndpZHRoOjUzMHB4LCBiYWNrZ3JvdW5kLWNvbG9yOiNlZWUsIGZvbnQtc3R5bGU6aXRhbGljXCIpO1xyXG4gICAgICAgICQodGhpcy5mZWVkYmFja0RpdikuY3NzKFwid2lkdGg6NTMwcHgsIGZvbnQtc3R5bGU6aXRhbGljXCIpO1xyXG4gICAgICAgIHRoaXMuZmVlZGJhY2tEaXYuaWQgPSB0aGlzLmRpdmlkICsgXCJfZmVlZGJhY2tcIjtcclxuICAgICAgICB0aGlzLmZlZWRiYWNrRGl2LmlubmVySFRNTCA9IFwiWW91IGhhdmUgbm90IGFuc3dlcmVkIHRoaXMgcXVlc3Rpb24geWV0LlwiO1xyXG4gICAgICAgICQodGhpcy5mZWVkYmFja0RpdikuYWRkQ2xhc3MoXCJhbGVydCBhbGVydC1kYW5nZXJcIik7XHJcbiAgICAgICAgLy90aGlzLm90aGVyT3B0aW9uc0Rpdi5hcHBlbmRDaGlsZCh0aGlzLmZlZWRiYWNrRGl2KTtcclxuICAgICAgICB0aGlzLmZpZWxkU2V0LmFwcGVuZENoaWxkKHRoaXMuZmVlZGJhY2tEaXYpO1xyXG4gICAgICAgIC8vdGhpcy5maWVsZFNldC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgICQodGhpcy5vcmlnRWxlbSkucmVwbGFjZVdpdGgodGhpcy5jb250YWluZXJEaXYpO1xyXG4gICAgICAgIC8vIFRoaXMgaXMgYSBzdG9wZ2FwIG1lYXN1cmUgZm9yIHdoZW4gTWF0aEpheCBpcyBub3QgbG9hZGVkIGF0IGFsbC4gIFRoZXJlIGlzIGFub3RoZXJcclxuICAgICAgICAvLyBtb3JlIGRpZmZpY3VsdCBjYXNlIHRoYXQgd2hlbiBNYXRoSmF4IGlzIGxvYWRlZCBhc3luY2hyb25vdXNseSB3ZSB3aWxsIGdldCBoZXJlXHJcbiAgICAgICAgLy8gYmVmb3JlIE1hdGhKYXggaXMgbG9hZGVkLiAgSW4gdGhhdCBjYXNlIHdlIHdpbGwgbmVlZCB0byBpbXBsZW1lbnQgc29tZXRoaW5nXHJcbiAgICAgICAgLy8gbGlrZSBgdGhlIHNvbHV0aW9uIGRlc2NyaWJlZCBoZXJlIDxodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zMDE0MDE4L2hvdy10by1kZXRlY3Qtd2hlbi1tYXRoamF4LWlzLWZ1bGx5LWxvYWRlZD5gX1xyXG4gICAgICAgIGlmICh0eXBlb2YgTWF0aEpheCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBNYXRoSmF4Lkh1Yi5RdWV1ZShbXCJUeXBlc2V0XCIsIE1hdGhKYXguSHViLCB0aGlzLmNvbnRhaW5lckRpdl0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJNYXRoKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0aGpheCkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcJFxcJCguKj8pXFwkXFwkL2csIFwiXFxcXFsgJDEgXFxcXF1cIik7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFwkKC4qPylcXCQvZywgXCJcXFxcKCAkMSBcXFxcKVwiKTtcclxuICAgICAgICAgICAgJCh0aGlzLnJlbmRlcmVkQW5zd2VyKS50ZXh0KHZhbHVlKTtcclxuICAgICAgICAgICAgTWF0aEpheC5IdWIuUXVldWUoW1wiVHlwZXNldFwiLCBNYXRoSmF4Lkh1YiwgdGhpcy5yZW5kZXJlZEFuc3dlcl0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja0N1cnJlbnRBbnN3ZXIoKSB7fVxyXG5cclxuICAgIGxvZ0N1cnJlbnRBbnN3ZXIoKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gJChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRpdmlkICsgXCJfc29sdXRpb25cIikpLnZhbCgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyTWF0aCh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBhbnN3ZXI6IHZhbHVlLFxyXG4gICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5sb2dCb29rRXZlbnQoe1xyXG4gICAgICAgICAgICBldmVudDogXCJzaG9ydGFuc3dlclwiLFxyXG4gICAgICAgICAgICBhY3Q6IHZhbHVlLFxyXG4gICAgICAgICAgICBkaXZfaWQ6IHRoaXMuZGl2aWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRmVlZGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5mZWVkYmFja0Rpdi5pbm5lckhUTUwgPSBcIllvdXIgYW5zd2VyIGhhcyBiZWVuIHNhdmVkLlwiO1xyXG4gICAgICAgICQodGhpcy5mZWVkYmFja0RpdikucmVtb3ZlQ2xhc3MoXCJhbGVydC1kYW5nZXJcIik7XHJcbiAgICAgICAgJCh0aGlzLmZlZWRiYWNrRGl2KS5hZGRDbGFzcyhcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIik7XHJcbiAgICB9XHJcbiAgICBzZXRMb2NhbFN0b3JhZ2UoZGF0YSkge1xyXG4gICAgICAgIGlmICghdGhpcy5ncmFkZXJhY3RpdmUpIHtcclxuICAgICAgICAgICAgbGV0IGtleSA9IHRoaXMubG9jYWxTdG9yYWdlS2V5KCk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoZWNrTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgICAgIC8vIFJlcG9wdWxhdGVzIHRoZSBzaG9ydCBhbnN3ZXIgdGV4dFxyXG4gICAgICAgIC8vIHdoaWNoIHdhcyBzdG9yZWQgaW50byBsb2NhbCBzdG9yYWdlLlxyXG4gICAgICAgIHZhciBhbnN3ZXIgPSBcIlwiO1xyXG4gICAgICAgIGlmICh0aGlzLmdyYWRlcmFjdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBsZW4gPSBsb2NhbFN0b3JhZ2UubGVuZ3RoO1xyXG4gICAgICAgIGlmIChsZW4gPiAwKSB7XHJcbiAgICAgICAgICAgIHZhciBleCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KCkpO1xyXG4gICAgICAgICAgICBpZiAoZXggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlZERhdGEgPSBKU09OLnBhcnNlKGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBhbnN3ZXIgPSBzdG9yZWREYXRhLmFuc3dlcjtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVycm9yIHdoaWxlIHBhcnNpbmc7IGxpa2VseSBkdWUgdG8gYmFkIHZhbHVlIHN0b3JlZCBpbiBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBzb2x1dGlvbiA9ICQoXCIjXCIgKyB0aGlzLmRpdmlkICsgXCJfc29sdXRpb25cIik7XHJcbiAgICAgICAgICAgICAgICBzb2x1dGlvbi50ZXh0KGFuc3dlcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlck1hdGgoYW5zd2VyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmVlZGJhY2tEaXYuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgICAgICAgICBcIllvdXIgY3VycmVudCBzYXZlZCBhbnN3ZXIgaXMgc2hvd24gYWJvdmUuXCI7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMuZmVlZGJhY2tEaXYpLnJlbW92ZUNsYXNzKFwiYWxlcnQtZGFuZ2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzLmZlZWRiYWNrRGl2KS5hZGRDbGFzcyhcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXN0b3JlQW5zd2VycyhkYXRhKSB7XHJcbiAgICAgICAgLy8gUmVzdG9yZSBhbnN3ZXJzIGZyb20gc3RvcmFnZSByZXRyaWV2YWwgZG9uZSBpbiBSdW5lc3RvbmVCYXNlXHJcbiAgICAgICAgLy8gc29tZXRpbWVzIGRhdGEuYW5zd2VyIGNhbiBiZSBudWxsXHJcbiAgICAgICAgaWYgKCFkYXRhLmFuc3dlcikge1xyXG4gICAgICAgICAgICBkYXRhLmFuc3dlciA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYW5zd2VyID0gZGF0YS5hbnN3ZXI7XHJcbiAgICAgICAgdGhpcy5qVGV4dEFyZWEudmFsdWUgPSB0aGlzLmFuc3dlcjtcclxuICAgICAgICB0aGlzLnJlbmRlck1hdGgodGhpcy5hbnN3ZXIpO1xyXG5cclxuICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHRoaXMuaklucHV0RGl2LmFwcGVuZENoaWxkKHApO1xyXG4gICAgICAgIHZhciB0c1N0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgaWYgKGRhdGEudGltZXN0YW1wKSB7XHJcbiAgICAgICAgICAgIHRzU3RyaW5nID0gbmV3IERhdGUoZGF0YS50aW1lc3RhbXApLnRvTG9jYWxlU3RyaW5nKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdHNTdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKHApLnRleHQodHNTdHJpbmcpO1xyXG4gICAgICAgIGlmIChkYXRhLmxhc3RfYW5zd2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudF9hbnN3ZXIgPSBcIm9udGltZVwiO1xyXG4gICAgICAgICAgICBsZXQgdG9nZ2xlX2Fuc3dlcl9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICB0b2dnbGVfYW5zd2VyX2J1dHRvbi50eXBlID0gXCJidXR0b25cIjtcclxuICAgICAgICAgICAgJCh0b2dnbGVfYW5zd2VyX2J1dHRvbikudGV4dChcIlNob3cgTGF0ZSBBbnN3ZXJcIik7XHJcbiAgICAgICAgICAgICQodG9nZ2xlX2Fuc3dlcl9idXR0b24pLmFkZENsYXNzKFwiYnRuIGJ0bi13YXJuaW5nXCIpO1xyXG4gICAgICAgICAgICAkKHRvZ2dsZV9hbnN3ZXJfYnV0dG9uKS5jc3MoXCJtYXJnaW4tbGVmdFwiLCBcIjVweFwiKTtcclxuXHJcbiAgICAgICAgICAgICQodG9nZ2xlX2Fuc3dlcl9idXR0b24pLmNsaWNrKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXNwbGF5X3RpbWVzdGFtcCwgYnV0dG9uX3RleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudF9hbnN3ZXIgPT09IFwib250aW1lXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qVGV4dEFyZWEudmFsdWUgPSBkYXRhLmxhc3RfYW5zd2VyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuc3dlciA9IGRhdGEubGFzdF9hbnN3ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfdGltZXN0YW1wID0gbmV3IERhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmxhc3RfdGltZXN0YW1wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkudG9Mb2NhbGVTdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uX3RleHQgPSBcIlNob3cgb24tVGltZSBBbnN3ZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50X2Fuc3dlciA9IFwibGF0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMualRleHRBcmVhLnZhbHVlID0gZGF0YS5hbnN3ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyID0gZGF0YS5hbnN3ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfdGltZXN0YW1wID0gdHNTdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbl90ZXh0ID0gXCJTaG93IExhdGUgQW5zd2VyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudF9hbnN3ZXIgPSBcIm9udGltZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlck1hdGgodGhpcy5hbnN3ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQocCkudGV4dChgU3VibWl0dGVkOiAke2Rpc3BsYXlfdGltZXN0YW1wfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICQodG9nZ2xlX2Fuc3dlcl9idXR0b24pLnRleHQoYnV0dG9uX3RleHQpO1xyXG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkRpdi5hcHBlbmRDaGlsZCh0b2dnbGVfYW5zd2VyX2J1dHRvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBmZWVkYmFja1N0ciA9IFwiWW91ciBjdXJyZW50IHNhdmVkIGFuc3dlciBpcyBzaG93biBhYm92ZS5cIjtcclxuICAgICAgICBpZiAodHlwZW9mIGRhdGEuc2NvcmUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgZmVlZGJhY2tTdHIgPSBgU2NvcmU6ICR7ZGF0YS5zY29yZX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0YS5jb21tZW50KSB7XHJcbiAgICAgICAgICAgIGZlZWRiYWNrU3RyICs9IGAgLS0gJHtkYXRhLmNvbW1lbnR9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5mZWVkYmFja0Rpdi5pbm5lckhUTUwgPSBmZWVkYmFja1N0cjtcclxuXHJcbiAgICAgICAgJCh0aGlzLmZlZWRiYWNrRGl2KS5yZW1vdmVDbGFzcyhcImFsZXJ0LWRhbmdlclwiKTtcclxuICAgICAgICAkKHRoaXMuZmVlZGJhY2tEaXYpLmFkZENsYXNzKFwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNhYmxlSW50ZXJhY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5qVGV4dEFyZWEuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PSBGaW5kIHRoZSBjdXN0b20gSFRNTCB0YWdzIGFuZCA9PVxyXG49PSAgIGV4ZWN1dGUgb3VyIGNvZGUgb24gdGhlbSAgICA9PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4kKGRvY3VtZW50KS5iaW5kKFwicnVuZXN0b25lOmxvZ2luLWNvbXBsZXRlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCJbZGF0YS1jb21wb25lbnQ9c2hvcnRhbnN3ZXJdXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmNsb3Nlc3QoXCJbZGF0YS1jb21wb25lbnQ9dGltZWRBc3Nlc3NtZW50XVwiKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGVsZW1lbnQgZXhpc3RzIHdpdGhpbiBhIHRpbWVkIGNvbXBvbmVudCwgZG9uJ3QgcmVuZGVyIGl0IGhlcmVcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHNhTGlzdFt0aGlzLmlkXSA9IG5ldyBTaG9ydEFuc3dlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZzogdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICB1c2VSdW5lc3RvbmVTZXJ2aWNlczogZUJvb2tDb25maWcudXNlUnVuZXN0b25lU2VydmljZXMsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3IgcmVuZGVyaW5nIENsaWNrYWJsZUFyZWEgUHJvYmxlbSAke3RoaXMuaWR9XHJcbiAgICAgICAgICAgICAgICBEZXRhaWxzOiAke2Vycn1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuIiwiaW1wb3J0IFNob3J0QW5zd2VyIGZyb20gXCIuL3Nob3J0YW5zd2VyLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lZFNob3J0QW5zd2VyIGV4dGVuZHMgU2hvcnRBbnN3ZXIge1xyXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xyXG4gICAgICAgIHN1cGVyKG9wdHMpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyVGltZWRJY29uKHRoaXMuY29udGFpbmVyRGl2KTtcclxuICAgICAgICB0aGlzLmhpZGVCdXR0b25zKCk7XHJcbiAgICB9XHJcbiAgICBoaWRlQnV0dG9ucygpIHtcclxuICAgICAgICAkKHRoaXMuc3VibWl0QnV0dG9uKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJUaW1lZEljb24oY29tcG9uZW50KSB7XHJcbiAgICAgICAgLy8gcmVuZGVycyB0aGUgY2xvY2sgaWNvbiBvbiB0aW1lZCBjb21wb25lbnRzLiAgICBUaGUgY29tcG9uZW50IHBhcmFtZXRlclxyXG4gICAgICAgIC8vIGlzIHRoZSBlbGVtZW50IHRoYXQgdGhlIGljb24gc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxyXG4gICAgICAgIHZhciB0aW1lSWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdmFyIHRpbWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAkKHRpbWVJY29uKS5hdHRyKHtcclxuICAgICAgICAgICAgc3JjOiBcIi4uL19zdGF0aWMvY2xvY2sucG5nXCIsXHJcbiAgICAgICAgICAgIHN0eWxlOiBcIndpZHRoOjE1cHg7aGVpZ2h0OjE1cHhcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aW1lSWNvbkRpdi5jbGFzc05hbWUgPSBcInRpbWVUaXBcIjtcclxuICAgICAgICB0aW1lSWNvbkRpdi50aXRsZSA9IFwiXCI7XHJcbiAgICAgICAgdGltZUljb25EaXYuYXBwZW5kQ2hpbGQodGltZUljb24pO1xyXG4gICAgICAgICQoY29tcG9uZW50KS5wcmVwZW5kKHRpbWVJY29uRGl2KTtcclxuICAgIH1cclxuICAgIGNoZWNrQ29ycmVjdFRpbWVkKCkge1xyXG4gICAgICAgIHJldHVybiBcIklcIjsgLy8gd2UgaWdub3JlIHRoaXMgaW4gdGhlIGdyYWRpbmdcclxuICAgIH1cclxuICAgIGhpZGVGZWVkYmFjaygpIHtcclxuICAgICAgICAkKHRoaXMuZmVlZGJhY2tEaXYpLmhpZGUoKTtcclxuICAgIH1cclxufVxyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9IHt9O1xyXG59XHJcblxyXG53aW5kb3cuY29tcG9uZW50X2ZhY3Rvcnkuc2hvcnRhbnN3ZXIgPSBmdW5jdGlvbiAob3B0cykge1xyXG4gICAgaWYgKG9wdHMudGltZWQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFRpbWVkU2hvcnRBbnN3ZXIob3B0cyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IFNob3J0QW5zd2VyKG9wdHMpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9