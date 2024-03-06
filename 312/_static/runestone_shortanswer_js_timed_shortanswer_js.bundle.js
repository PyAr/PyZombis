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
___CSS_LOADER_EXPORT___.push([module.id, "div.journal div.latexoutput {\n    background-color: #eeeeee;\n    padding: 1em;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n", "",{"version":3,"sources":["webpack://./runestone/shortanswer/css/shortanswer.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;AACtB","sourcesContent":["div.journal div.latexoutput {\n    background-color: #eeeeee;\n    padding: 1em;\n    margin-bottom: 10px;\n    border-radius: 5px;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3Nob3J0YW5zd2VyL2Nzcy9zaG9ydGFuc3dlci5jc3MiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9zaG9ydGFuc3dlci9jc3Mvc2hvcnRhbnN3ZXIuY3NzP2U1NWYiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9zaG9ydGFuc3dlci9qcy9zaG9ydGFuc3dlci5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3Nob3J0YW5zd2VyL2pzL3RpbWVkX3Nob3J0YW5zd2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNEg7QUFDN0I7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLHVFQUF1RSxnQ0FBZ0MsbUJBQW1CLDBCQUEwQix5QkFBeUIsR0FBRyxTQUFTLDRHQUE0RyxZQUFZLFdBQVcsWUFBWSxhQUFhLHVEQUF1RCxnQ0FBZ0MsbUJBQW1CLDBCQUEwQix5QkFBeUIsR0FBRyxxQkFBcUI7QUFDMWdCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQd0Q7QUFDL0YsWUFBbUc7O0FBRW5HOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLHlGQUFPOzs7O0FBSXhCLGlFQUFlLGdHQUFjLE1BQU0sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWm5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkQ7QUFDM0I7O0FBRTNCO0FBQ1Asc0NBQXNDOztBQUV2QiwwQkFBMEIsZ0VBQWE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQiwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsa0JBQWtCO0FBQzlEO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFdBQVc7QUFDL0M7QUFDQTtBQUNBLGtDQUFrQyxhQUFhO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IscUVBQXFFO0FBQ3JFLDJCQUEyQixJQUFJO0FBQy9CO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqUzBDOztBQUU1QiwrQkFBK0Isb0RBQVc7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9EQUFXO0FBQzFCIiwiZmlsZSI6InJ1bmVzdG9uZV9zaG9ydGFuc3dlcl9qc190aW1lZF9zaG9ydGFuc3dlcl9qcy5idW5kbGUuanM/dj1mMjI1YWE1NWQ0YzI2MzBiMzZhNyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmpvdXJuYWwgZGl2LmxhdGV4b3V0cHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3J1bmVzdG9uZS9zaG9ydGFuc3dlci9jc3Mvc2hvcnRhbnN3ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImRpdi5qb3VybmFsIGRpdi5sYXRleG91dHB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaG9ydGFuc3dlci5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09PT09PSAgICBNYXN0ZXIgc2hvcnRhbnN3ZXIuanMgICAgPT09PT09PT1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT0gICAgIFRoaXMgZmlsZSBjb250YWlucyB0aGUgSlMgZm9yICAgID09PVxuPT09IHRoZSBSdW5lc3RvbmUgc2hvcnRhbnN3ZXIgY29tcG9uZW50LiA9PT1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT0gICAgICAgICAgICAgIENyZWF0ZWQgYnkgICAgICAgICAgICAgID09PVxuPT09ICAgICAgICAgICBJc2FpYWggTWF5ZXJjaGFrICAgICAgICAgICA9PT1cbj09PSAgICAgICAgICAgICAgICA3LzIvMTUgICAgICAgICAgICAgICAgPT09XG49PT0gICAgICAgICAgICAgIEJyYWQgTWlsbGVyICAgICAgICAgICAgID09PVxuPT09ICAgICAgICAgICAgICAgIDIwMTkgICAgICAgICAgICAgICAgICA9PT1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbmltcG9ydCBSdW5lc3RvbmVCYXNlIGZyb20gXCIuLi8uLi9jb21tb24vanMvcnVuZXN0b25lYmFzZS5qc1wiO1xuaW1wb3J0IFwiLi8uLi9jc3Mvc2hvcnRhbnN3ZXIuY3NzXCI7XG5cbmV4cG9ydCB2YXIgc2FMaXN0O1xuaWYgKHNhTGlzdCA9PT0gdW5kZWZpbmVkKSBzYUxpc3QgPSB7fTsgLy8gRGljdGlvbmFyeSB0aGF0IGNvbnRhaW5zIGFsbCBpbnN0YW5jZXMgb2Ygc2hvcnRhbnN3ZXIgb2JqZWN0c1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9ydEFuc3dlciBleHRlbmRzIFJ1bmVzdG9uZUJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIob3B0cyk7XG4gICAgICAgIGlmIChvcHRzKSB7XG4gICAgICAgICAgICB2YXIgb3JpZyA9IG9wdHMub3JpZzsgLy8gZW50aXJlIDxwPiBlbGVtZW50IHRoYXQgd2lsbCBiZSByZXBsYWNlZCBieSBuZXcgSFRNTFxuICAgICAgICAgICAgdGhpcy51c2VSdW5lc3RvbmVTZXJ2aWNlcyA9XG4gICAgICAgICAgICAgICAgb3B0cy51c2VSdW5lc3RvbmVTZXJ2aWNlcyB8fCBlQm9va0NvbmZpZy51c2VSdW5lc3RvbmVTZXJ2aWNlcztcbiAgICAgICAgICAgIHRoaXMub3JpZ0VsZW0gPSBvcmlnO1xuICAgICAgICAgICAgdGhpcy5kaXZpZCA9IG9yaWcuaWQ7XG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uID0gdGhpcy5vcmlnRWxlbS5pbm5lckhUTUw7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbmFsID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoJCh0aGlzLm9yaWdFbGVtKS5pcyhcIltkYXRhLW9wdGlvbmFsXVwiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uYWwgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbSkuaXMoXCJbZGF0YS1tYXRoamF4XVwiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0aGpheCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlbmRlckhUTUwoKTtcbiAgICAgICAgICAgIHRoaXMuY2FwdGlvbiA9IFwic2hvcnRhbnN3ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FwdGlvbihcInJ1bmVzdG9uZVwiKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tTZXJ2ZXIoXCJzaG9ydGFuc3dlclwiLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlckhUTUwoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuaWQgPSB0aGlzLmRpdmlkO1xuICAgICAgICAkKHRoaXMuY29udGFpbmVyRGl2KS5hZGRDbGFzcyh0aGlzLm9yaWdFbGVtLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpKTtcbiAgICAgICAgdGhpcy5uZXdGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICAgIHRoaXMubmV3Rm9ybS5pZCA9IHRoaXMuZGl2aWQgKyBcIl9qb3VybmFsXCI7XG4gICAgICAgIHRoaXMubmV3Rm9ybS5uYW1lID0gdGhpcy5uZXdGb3JtLmlkO1xuICAgICAgICB0aGlzLm5ld0Zvcm0uYWN0aW9uID0gXCJcIjtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5uZXdGb3JtKTtcbiAgICAgICAgdGhpcy5maWVsZFNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcbiAgICAgICAgdGhpcy5uZXdGb3JtLmFwcGVuZENoaWxkKHRoaXMuZmllbGRTZXQpO1xuICAgICAgICB0aGlzLmxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIik7XG4gICAgICAgIHRoaXMubGVnZW5kLmlubmVySFRNTCA9IFwiU2hvcnQgQW5zd2VyXCI7XG4gICAgICAgIHRoaXMuZmllbGRTZXQuYXBwZW5kQ2hpbGQodGhpcy5sZWdlbmQpO1xuICAgICAgICB0aGlzLmZpcnN0TGVnZW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5maXJzdExlZ2VuZERpdi5pbm5lckhUTUwgPSB0aGlzLnF1ZXN0aW9uO1xuICAgICAgICAkKHRoaXMuZmlyc3RMZWdlbmREaXYpLmFkZENsYXNzKFwiam91cm5hbC1xdWVzdGlvblwiKTtcbiAgICAgICAgdGhpcy5maWVsZFNldC5hcHBlbmRDaGlsZCh0aGlzLmZpcnN0TGVnZW5kRGl2KTtcbiAgICAgICAgdGhpcy5qSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmpJbnB1dERpdi5pZCA9IHRoaXMuZGl2aWQgKyBcIl9qb3VybmFsX2lucHV0XCI7XG4gICAgICAgIHRoaXMuZmllbGRTZXQuYXBwZW5kQ2hpbGQodGhpcy5qSW5wdXREaXYpO1xuICAgICAgICB0aGlzLmpPcHRpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgJCh0aGlzLmpPcHRpb25zRGl2KS5hZGRDbGFzcyhcImpvdXJuYWwtb3B0aW9uc1wiKTtcbiAgICAgICAgdGhpcy5qSW5wdXREaXYuYXBwZW5kQ2hpbGQodGhpcy5qT3B0aW9uc0Rpdik7XG4gICAgICAgIHRoaXMuakxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAkKHRoaXMuakxhYmVsKS5hZGRDbGFzcyhcInJhZGlvLWlubGluZVwiKTtcbiAgICAgICAgdGhpcy5qT3B0aW9uc0Rpdi5hcHBlbmRDaGlsZCh0aGlzLmpMYWJlbCk7XG4gICAgICAgIHRoaXMualRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMualRleHRBcmVhLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5pc0Fuc3dlcmVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5qVGV4dEFyZWEuaWQgPSB0aGlzLmRpdmlkICsgXCJfc29sdXRpb25cIjtcbiAgICAgICAgJCh0aGlzLmpUZXh0QXJlYSkuYXR0cihcImFyaWEtbGFiZWxcIiwgXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgJCh0aGlzLmpUZXh0QXJlYSkuY3NzKFwiZGlzcGxheTppbmxpbmUsIHdpZHRoOjUzMHB4XCIpO1xuICAgICAgICAkKHRoaXMualRleHRBcmVhKS5hZGRDbGFzcyhcImZvcm0tY29udHJvbFwiKTtcbiAgICAgICAgdGhpcy5qVGV4dEFyZWEucm93cyA9IDQ7XG4gICAgICAgIHRoaXMualRleHRBcmVhLmNvbHMgPSA1MDtcbiAgICAgICAgdGhpcy5qTGFiZWwuYXBwZW5kQ2hpbGQodGhpcy5qVGV4dEFyZWEpO1xuICAgICAgICB0aGlzLmpUZXh0QXJlYS5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuZmVlZGJhY2tEaXYuaW5uZXJIVE1MID0gXCJZb3VyIGFuc3dlciBoYXMgbm90IGJlZW4gc2F2ZWQgeWV0IVwiO1xuICAgICAgICAgICAgJCh0aGlzLmZlZWRiYWNrRGl2KS5yZW1vdmVDbGFzcyhcImFsZXJ0LXN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAkKHRoaXMuZmVlZGJhY2tEaXYpLmFkZENsYXNzKFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIpO1xuICAgICAgICB9LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZmllbGRTZXQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcbiAgICAgICAgaWYgKHRoaXMubWF0aGpheCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZEFuc3dlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAkKHRoaXMucmVuZGVyZWRBbnN3ZXIpLmFkZENsYXNzKFwibGF0ZXhvdXRwdXRcIik7XG4gICAgICAgICAgICB0aGlzLmZpZWxkU2V0LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZWRBbnN3ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5maWVsZFNldC5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbkRpdik7XG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgJCh0aGlzLnN1Ym1pdEJ1dHRvbikuYWRkQ2xhc3MoXCJidG4gYnRuLXN1Y2Nlc3NcIik7XG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2F2ZVwiO1xuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja0N1cnJlbnRBbnN3ZXIoKTtcbiAgICAgICAgICAgIHRoaXMubG9nQ3VycmVudEFuc3dlcigpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJGZWVkYmFjaygpO1xuICAgICAgICB9LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYnV0dG9uRGl2LmFwcGVuZENoaWxkKHRoaXMuc3VibWl0QnV0dG9uKTtcbiAgICAgICAgdGhpcy5yYW5kb21TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHRoaXMucmFuZG9tU3Bhbi5pbm5lckhUTUwgPSBcIkluc3RydWN0b3IncyBGZWVkYmFja1wiO1xuICAgICAgICB0aGlzLmZpZWxkU2V0LmFwcGVuZENoaWxkKHRoaXMucmFuZG9tU3Bhbik7XG4gICAgICAgIHRoaXMub3RoZXJPcHRpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgJCh0aGlzLm90aGVyT3B0aW9uc0RpdikuY3NzKFwicGFkZGluZy1sZWZ0OjIwcHhcIik7XG4gICAgICAgICQodGhpcy5vdGhlck9wdGlvbnNEaXYpLmFkZENsYXNzKFwiam91cm5hbC1vcHRpb25zXCIpO1xuICAgICAgICB0aGlzLmZpZWxkU2V0LmFwcGVuZENoaWxkKHRoaXMub3RoZXJPcHRpb25zRGl2KTtcbiAgICAgICAgLy8gYWRkIGEgZmVlZGJhY2sgZGl2IHRvIGdpdmUgdXNlciBmZWVkYmFja1xuICAgICAgICB0aGlzLmZlZWRiYWNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgLy8kKHRoaXMuZmVlZGJhY2tEaXYpLmFkZENsYXNzKFwiYmctaW5mbyBmb3JtLWNvbnRyb2xcIik7XG4gICAgICAgIC8vJCh0aGlzLmZlZWRiYWNrRGl2KS5jc3MoXCJ3aWR0aDo1MzBweCwgYmFja2dyb3VuZC1jb2xvcjojZWVlLCBmb250LXN0eWxlOml0YWxpY1wiKTtcbiAgICAgICAgJCh0aGlzLmZlZWRiYWNrRGl2KS5jc3MoXCJ3aWR0aDo1MzBweCwgZm9udC1zdHlsZTppdGFsaWNcIik7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tEaXYuaWQgPSB0aGlzLmRpdmlkICsgXCJfZmVlZGJhY2tcIjtcbiAgICAgICAgdGhpcy5mZWVkYmFja0Rpdi5pbm5lckhUTUwgPSBcIllvdSBoYXZlIG5vdCBhbnN3ZXJlZCB0aGlzIHF1ZXN0aW9uIHlldC5cIjtcbiAgICAgICAgJCh0aGlzLmZlZWRiYWNrRGl2KS5hZGRDbGFzcyhcImFsZXJ0IGFsZXJ0LWRhbmdlclwiKTtcbiAgICAgICAgLy90aGlzLm90aGVyT3B0aW9uc0Rpdi5hcHBlbmRDaGlsZCh0aGlzLmZlZWRiYWNrRGl2KTtcbiAgICAgICAgdGhpcy5maWVsZFNldC5hcHBlbmRDaGlsZCh0aGlzLmZlZWRiYWNrRGl2KTtcbiAgICAgICAgLy90aGlzLmZpZWxkU2V0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gICAgICAgICQodGhpcy5vcmlnRWxlbSkucmVwbGFjZVdpdGgodGhpcy5jb250YWluZXJEaXYpO1xuICAgICAgICAvLyBUaGlzIGlzIGEgc3RvcGdhcCBtZWFzdXJlIGZvciB3aGVuIE1hdGhKYXggaXMgbm90IGxvYWRlZCBhdCBhbGwuICBUaGVyZSBpcyBhbm90aGVyXG4gICAgICAgIC8vIG1vcmUgZGlmZmljdWx0IGNhc2UgdGhhdCB3aGVuIE1hdGhKYXggaXMgbG9hZGVkIGFzeW5jaHJvbm91c2x5IHdlIHdpbGwgZ2V0IGhlcmVcbiAgICAgICAgLy8gYmVmb3JlIE1hdGhKYXggaXMgbG9hZGVkLiAgSW4gdGhhdCBjYXNlIHdlIHdpbGwgbmVlZCB0byBpbXBsZW1lbnQgc29tZXRoaW5nXG4gICAgICAgIC8vIGxpa2UgYHRoZSBzb2x1dGlvbiBkZXNjcmliZWQgaGVyZSA8aHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzAxNDAxOC9ob3ctdG8tZGV0ZWN0LXdoZW4tbWF0aGpheC1pcy1mdWxseS1sb2FkZWQ+YF9cbiAgICAgICAgaWYgKHR5cGVvZiBNYXRoSmF4ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBNYXRoSmF4Lkh1Yi5RdWV1ZShbXCJUeXBlc2V0XCIsIE1hdGhKYXguSHViLCB0aGlzLmNvbnRhaW5lckRpdl0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyTWF0aCh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5tYXRoamF4KSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcJFxcJCguKj8pXFwkXFwkL2csIFwiXFxcXFsgJDEgXFxcXF1cIik7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcJCguKj8pXFwkL2csIFwiXFxcXCggJDEgXFxcXClcIik7XG4gICAgICAgICAgICAkKHRoaXMucmVuZGVyZWRBbnN3ZXIpLnRleHQodmFsdWUpO1xuICAgICAgICAgICAgTWF0aEpheC5IdWIuUXVldWUoW1wiVHlwZXNldFwiLCBNYXRoSmF4Lkh1YiwgdGhpcy5yZW5kZXJlZEFuc3dlcl0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tDdXJyZW50QW5zd2VyKCkge31cblxuICAgIGxvZ0N1cnJlbnRBbnN3ZXIoKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9ICQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kaXZpZCArIFwiX3NvbHV0aW9uXCIpKS52YWwoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJNYXRoKHZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2Uoe1xuICAgICAgICAgICAgYW5zd2VyOiB2YWx1ZSxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubG9nQm9va0V2ZW50KHtcbiAgICAgICAgICAgIGV2ZW50OiBcInNob3J0YW5zd2VyXCIsXG4gICAgICAgICAgICBhY3Q6IHZhbHVlLFxuICAgICAgICAgICAgZGl2X2lkOiB0aGlzLmRpdmlkLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXJGZWVkYmFjaygpIHtcbiAgICAgICAgdGhpcy5mZWVkYmFja0Rpdi5pbm5lckhUTUwgPSBcIllvdXIgYW5zd2VyIGhhcyBiZWVuIHNhdmVkLlwiO1xuICAgICAgICAkKHRoaXMuZmVlZGJhY2tEaXYpLnJlbW92ZUNsYXNzKFwiYWxlcnQtZGFuZ2VyXCIpO1xuICAgICAgICAkKHRoaXMuZmVlZGJhY2tEaXYpLmFkZENsYXNzKFwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiKTtcbiAgICB9XG4gICAgc2V0TG9jYWxTdG9yYWdlKGRhdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLmdyYWRlcmFjdGl2ZSkge1xuICAgICAgICAgICAgbGV0IGtleSA9IHRoaXMubG9jYWxTdG9yYWdlS2V5KCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGVja0xvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgLy8gUmVwb3B1bGF0ZXMgdGhlIHNob3J0IGFuc3dlciB0ZXh0XG4gICAgICAgIC8vIHdoaWNoIHdhcyBzdG9yZWQgaW50byBsb2NhbCBzdG9yYWdlLlxuICAgICAgICB2YXIgYW5zd2VyID0gXCJcIjtcbiAgICAgICAgaWYgKHRoaXMuZ3JhZGVyYWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxlbiA9IGxvY2FsU3RvcmFnZS5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgICAgICB2YXIgZXggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSgpKTtcbiAgICAgICAgICAgIGlmIChleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZWREYXRhID0gSlNPTi5wYXJzZShleCk7XG4gICAgICAgICAgICAgICAgICAgIGFuc3dlciA9IHN0b3JlZERhdGEuYW5zd2VyO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBlcnJvciB3aGlsZSBwYXJzaW5nOyBsaWtlbHkgZHVlIHRvIGJhZCB2YWx1ZSBzdG9yZWQgaW4gc3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KCkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBzb2x1dGlvbiA9ICQoXCIjXCIgKyB0aGlzLmRpdmlkICsgXCJfc29sdXRpb25cIik7XG4gICAgICAgICAgICAgICAgc29sdXRpb24udGV4dChhbnN3ZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyTWF0aChhbnN3ZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmVlZGJhY2tEaXYuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgICAgXCJZb3VyIGN1cnJlbnQgc2F2ZWQgYW5zd2VyIGlzIHNob3duIGFib3ZlLlwiO1xuICAgICAgICAgICAgICAgICQodGhpcy5mZWVkYmFja0RpdikucmVtb3ZlQ2xhc3MoXCJhbGVydC1kYW5nZXJcIik7XG4gICAgICAgICAgICAgICAgJCh0aGlzLmZlZWRiYWNrRGl2KS5hZGRDbGFzcyhcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzdG9yZUFuc3dlcnMoZGF0YSkge1xuICAgICAgICAvLyBSZXN0b3JlIGFuc3dlcnMgZnJvbSBzdG9yYWdlIHJldHJpZXZhbCBkb25lIGluIFJ1bmVzdG9uZUJhc2VcbiAgICAgICAgLy8gc29tZXRpbWVzIGRhdGEuYW5zd2VyIGNhbiBiZSBudWxsXG4gICAgICAgIGlmICghZGF0YS5hbnN3ZXIpIHtcbiAgICAgICAgICAgIGRhdGEuYW5zd2VyID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFuc3dlciA9IGRhdGEuYW5zd2VyO1xuICAgICAgICB0aGlzLmpUZXh0QXJlYS52YWx1ZSA9IHRoaXMuYW5zd2VyO1xuICAgICAgICB0aGlzLnJlbmRlck1hdGgodGhpcy5hbnN3ZXIpO1xuXG4gICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHRoaXMuaklucHV0RGl2LmFwcGVuZENoaWxkKHApO1xuICAgICAgICB2YXIgdHNTdHJpbmcgPSBcIlwiO1xuICAgICAgICBpZiAoZGF0YS50aW1lc3RhbXApIHtcbiAgICAgICAgICAgIHRzU3RyaW5nID0gbmV3IERhdGUoZGF0YS50aW1lc3RhbXApLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0c1N0cmluZyA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgJChwKS50ZXh0KHRzU3RyaW5nKTtcbiAgICAgICAgaWYgKGRhdGEubGFzdF9hbnN3ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudF9hbnN3ZXIgPSBcIm9udGltZVwiO1xuICAgICAgICAgICAgbGV0IHRvZ2dsZV9hbnN3ZXJfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIHRvZ2dsZV9hbnN3ZXJfYnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICAgICAgJCh0b2dnbGVfYW5zd2VyX2J1dHRvbikudGV4dChcIlNob3cgTGF0ZSBBbnN3ZXJcIik7XG4gICAgICAgICAgICAkKHRvZ2dsZV9hbnN3ZXJfYnV0dG9uKS5hZGRDbGFzcyhcImJ0biBidG4td2FybmluZ1wiKTtcbiAgICAgICAgICAgICQodG9nZ2xlX2Fuc3dlcl9idXR0b24pLmNzcyhcIm1hcmdpbi1sZWZ0XCIsIFwiNXB4XCIpO1xuXG4gICAgICAgICAgICAkKHRvZ2dsZV9hbnN3ZXJfYnV0dG9uKS5jbGljayhcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXNwbGF5X3RpbWVzdGFtcCwgYnV0dG9uX3RleHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRfYW5zd2VyID09PSBcIm9udGltZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmpUZXh0QXJlYS52YWx1ZSA9IGRhdGEubGFzdF9hbnN3ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuc3dlciA9IGRhdGEubGFzdF9hbnN3ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X3RpbWVzdGFtcCA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEubGFzdF90aW1lc3RhbXBcbiAgICAgICAgICAgICAgICAgICAgICAgICkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbl90ZXh0ID0gXCJTaG93IG9uLVRpbWUgQW5zd2VyXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRfYW5zd2VyID0gXCJsYXRlXCI7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmpUZXh0QXJlYS52YWx1ZSA9IGRhdGEuYW5zd2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXIgPSBkYXRhLmFuc3dlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfdGltZXN0YW1wID0gdHNTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25fdGV4dCA9IFwiU2hvdyBMYXRlIEFuc3dlclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50X2Fuc3dlciA9IFwib250aW1lXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJNYXRoKHRoaXMuYW5zd2VyKTtcbiAgICAgICAgICAgICAgICAgICAgJChwKS50ZXh0KGBTdWJtaXR0ZWQ6ICR7ZGlzcGxheV90aW1lc3RhbXB9YCk7XG4gICAgICAgICAgICAgICAgICAgICQodG9nZ2xlX2Fuc3dlcl9idXR0b24pLnRleHQoYnV0dG9uX3RleHQpO1xuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdGhpcy5idXR0b25EaXYuYXBwZW5kQ2hpbGQodG9nZ2xlX2Fuc3dlcl9idXR0b24pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmZWVkYmFja1N0ciA9IFwiWW91ciBjdXJyZW50IHNhdmVkIGFuc3dlciBpcyBzaG93biBhYm92ZS5cIjtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhLnNjb3JlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBmZWVkYmFja1N0ciA9IGBTY29yZTogJHtkYXRhLnNjb3JlfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEuY29tbWVudCkge1xuICAgICAgICAgICAgZmVlZGJhY2tTdHIgKz0gYCAtLSAke2RhdGEuY29tbWVudH1gO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmVlZGJhY2tEaXYuaW5uZXJIVE1MID0gZmVlZGJhY2tTdHI7XG5cbiAgICAgICAgJCh0aGlzLmZlZWRiYWNrRGl2KS5yZW1vdmVDbGFzcyhcImFsZXJ0LWRhbmdlclwiKTtcbiAgICAgICAgJCh0aGlzLmZlZWRiYWNrRGl2KS5hZGRDbGFzcyhcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIik7XG4gICAgfVxuXG4gICAgZGlzYWJsZUludGVyYWN0aW9uKCkge1xuICAgICAgICB0aGlzLmpUZXh0QXJlYS5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxufVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT0gRmluZCB0aGUgY3VzdG9tIEhUTUwgdGFncyBhbmQgPT1cbj09ICAgZXhlY3V0ZSBvdXIgY29kZSBvbiB0aGVtICAgID09XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuJChkb2N1bWVudCkuYmluZChcInJ1bmVzdG9uZTpsb2dpbi1jb21wbGV0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIltkYXRhLWNvbXBvbmVudD1zaG9ydGFuc3dlcl1cIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmNsb3Nlc3QoXCJbZGF0YS1jb21wb25lbnQ9dGltZWRBc3Nlc3NtZW50XVwiKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgLy8gSWYgdGhpcyBlbGVtZW50IGV4aXN0cyB3aXRoaW4gYSB0aW1lZCBjb21wb25lbnQsIGRvbid0IHJlbmRlciBpdCBoZXJlXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHNhTGlzdFt0aGlzLmlkXSA9IG5ldyBTaG9ydEFuc3dlcih7XG4gICAgICAgICAgICAgICAgICAgIG9yaWc6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIHVzZVJ1bmVzdG9uZVNlcnZpY2VzOiBlQm9va0NvbmZpZy51c2VSdW5lc3RvbmVTZXJ2aWNlcyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciByZW5kZXJpbmcgQ2xpY2thYmxlQXJlYSBQcm9ibGVtICR7dGhpcy5pZH1cbiAgICAgICAgICAgICAgICBEZXRhaWxzOiAke2Vycn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG4iLCJpbXBvcnQgU2hvcnRBbnN3ZXIgZnJvbSBcIi4vc2hvcnRhbnN3ZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZWRTaG9ydEFuc3dlciBleHRlbmRzIFNob3J0QW5zd2VyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKG9wdHMpO1xuICAgICAgICB0aGlzLnJlbmRlclRpbWVkSWNvbih0aGlzLmNvbnRhaW5lckRpdik7XG4gICAgICAgIHRoaXMuaGlkZUJ1dHRvbnMoKTtcbiAgICB9XG4gICAgaGlkZUJ1dHRvbnMoKSB7XG4gICAgICAgICQodGhpcy5zdWJtaXRCdXR0b24pLmhpZGUoKTtcbiAgICB9XG4gICAgcmVuZGVyVGltZWRJY29uKGNvbXBvbmVudCkge1xuICAgICAgICAvLyByZW5kZXJzIHRoZSBjbG9jayBpY29uIG9uIHRpbWVkIGNvbXBvbmVudHMuICAgIFRoZSBjb21wb25lbnQgcGFyYW1ldGVyXG4gICAgICAgIC8vIGlzIHRoZSBlbGVtZW50IHRoYXQgdGhlIGljb24gc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxuICAgICAgICB2YXIgdGltZUljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgdGltZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAkKHRpbWVJY29uKS5hdHRyKHtcbiAgICAgICAgICAgIHNyYzogXCIuLi9fc3RhdGljL2Nsb2NrLnBuZ1wiLFxuICAgICAgICAgICAgc3R5bGU6IFwid2lkdGg6MTVweDtoZWlnaHQ6MTVweFwiLFxuICAgICAgICB9KTtcbiAgICAgICAgdGltZUljb25EaXYuY2xhc3NOYW1lID0gXCJ0aW1lVGlwXCI7XG4gICAgICAgIHRpbWVJY29uRGl2LnRpdGxlID0gXCJcIjtcbiAgICAgICAgdGltZUljb25EaXYuYXBwZW5kQ2hpbGQodGltZUljb24pO1xuICAgICAgICAkKGNvbXBvbmVudCkucHJlcGVuZCh0aW1lSWNvbkRpdik7XG4gICAgfVxuICAgIGNoZWNrQ29ycmVjdFRpbWVkKCkge1xuICAgICAgICByZXR1cm4gXCJJXCI7IC8vIHdlIGlnbm9yZSB0aGlzIGluIHRoZSBncmFkaW5nXG4gICAgfVxuICAgIGhpZGVGZWVkYmFjaygpIHtcbiAgICAgICAgJCh0aGlzLmZlZWRiYWNrRGl2KS5oaWRlKCk7XG4gICAgfVxufVxuXG5pZiAodHlwZW9mIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9IHt9O1xufVxuXG53aW5kb3cuY29tcG9uZW50X2ZhY3Rvcnkuc2hvcnRhbnN3ZXIgPSBmdW5jdGlvbiAob3B0cykge1xuICAgIGlmIChvcHRzLnRpbWVkKSB7XG4gICAgICAgIHJldHVybiBuZXcgVGltZWRTaG9ydEFuc3dlcihvcHRzKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBTaG9ydEFuc3dlcihvcHRzKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9