(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_shortanswer_js_timed_shortanswer_js"],{

/***/ 76199:
/*!***************************************************!*\
  !*** ./runestone/shortanswer/css/shortanswer.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/* harmony import */ var _css_shortanswer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../css/shortanswer.css */ 76199);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3Nob3J0YW5zd2VyL2Nzcy9zaG9ydGFuc3dlci5jc3M/Y2FhZiIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3Nob3J0YW5zd2VyL2pzL3Nob3J0YW5zd2VyLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvc2hvcnRhbnN3ZXIvanMvdGltZWRfc2hvcnRhbnN3ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU2RDtBQUMzQjs7QUFFM0I7QUFDUCxzQ0FBc0M7O0FBRXZCLDBCQUEwQixnRUFBYTtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxrQkFBa0I7QUFDOUQ7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsV0FBVztBQUMvQztBQUNBO0FBQ0Esa0NBQWtDLGFBQWE7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixxRUFBcUU7QUFDckUsMkJBQTJCLElBQUk7QUFDL0I7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pTMEM7O0FBRTVCLCtCQUErQixvREFBVztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0RBQVc7QUFDMUIiLCJmaWxlIjoicnVuZXN0b25lX3Nob3J0YW5zd2VyX2pzX3RpbWVkX3Nob3J0YW5zd2VyX2pzLmJ1bmRsZS5qcz92PTE5ZTE2YTEyOTFkOTczZGEzMjM1Iiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09PT09PSAgICBNYXN0ZXIgc2hvcnRhbnN3ZXIuanMgICAgPT09PT09PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09ICAgICBUaGlzIGZpbGUgY29udGFpbnMgdGhlIEpTIGZvciAgICA9PT1cclxuPT09IHRoZSBSdW5lc3RvbmUgc2hvcnRhbnN3ZXIgY29tcG9uZW50LiA9PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09ICAgICAgICAgICAgICBDcmVhdGVkIGJ5ICAgICAgICAgICAgICA9PT1cclxuPT09ICAgICAgICAgICBJc2FpYWggTWF5ZXJjaGFrICAgICAgICAgICA9PT1cclxuPT09ICAgICAgICAgICAgICAgIDcvMi8xNSAgICAgICAgICAgICAgICA9PT1cclxuPT09ICAgICAgICAgICAgICBCcmFkIE1pbGxlciAgICAgICAgICAgICA9PT1cclxuPT09ICAgICAgICAgICAgICAgIDIwMTkgICAgICAgICAgICAgICAgICA9PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbmltcG9ydCBSdW5lc3RvbmVCYXNlIGZyb20gXCIuLi8uLi9jb21tb24vanMvcnVuZXN0b25lYmFzZS5qc1wiO1xyXG5pbXBvcnQgXCIuLy4uL2Nzcy9zaG9ydGFuc3dlci5jc3NcIjtcclxuXHJcbmV4cG9ydCB2YXIgc2FMaXN0O1xyXG5pZiAoc2FMaXN0ID09PSB1bmRlZmluZWQpIHNhTGlzdCA9IHt9OyAvLyBEaWN0aW9uYXJ5IHRoYXQgY29udGFpbnMgYWxsIGluc3RhbmNlcyBvZiBzaG9ydGFuc3dlciBvYmplY3RzXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9ydEFuc3dlciBleHRlbmRzIFJ1bmVzdG9uZUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xyXG4gICAgICAgIHN1cGVyKG9wdHMpO1xyXG4gICAgICAgIGlmIChvcHRzKSB7XHJcbiAgICAgICAgICAgIHZhciBvcmlnID0gb3B0cy5vcmlnOyAvLyBlbnRpcmUgPHA+IGVsZW1lbnQgdGhhdCB3aWxsIGJlIHJlcGxhY2VkIGJ5IG5ldyBIVE1MXHJcbiAgICAgICAgICAgIHRoaXMudXNlUnVuZXN0b25lU2VydmljZXMgPVxyXG4gICAgICAgICAgICAgICAgb3B0cy51c2VSdW5lc3RvbmVTZXJ2aWNlcyB8fCBlQm9va0NvbmZpZy51c2VSdW5lc3RvbmVTZXJ2aWNlcztcclxuICAgICAgICAgICAgdGhpcy5vcmlnRWxlbSA9IG9yaWc7XHJcbiAgICAgICAgICAgIHRoaXMuZGl2aWQgPSBvcmlnLmlkO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uID0gdGhpcy5vcmlnRWxlbS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbSkuaXMoXCJbZGF0YS1vcHRpb25hbF1cIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMub3JpZ0VsZW0pLmlzKFwiW2RhdGEtbWF0aGpheF1cIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWF0aGpheCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJIVE1MKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FwdGlvbiA9IFwic2hvcnRhbnN3ZXJcIjtcclxuICAgICAgICAgICAgdGhpcy5hZGRDYXB0aW9uKFwicnVuZXN0b25lXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrU2VydmVyKFwic2hvcnRhbnN3ZXJcIiwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckhUTUwoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmlkID0gdGhpcy5kaXZpZDtcclxuICAgICAgICAkKHRoaXMuY29udGFpbmVyRGl2KS5hZGRDbGFzcyh0aGlzLm9yaWdFbGVtLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpKTtcclxuICAgICAgICB0aGlzLm5ld0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgICAgICB0aGlzLm5ld0Zvcm0uaWQgPSB0aGlzLmRpdmlkICsgXCJfam91cm5hbFwiO1xyXG4gICAgICAgIHRoaXMubmV3Rm9ybS5uYW1lID0gdGhpcy5uZXdGb3JtLmlkO1xyXG4gICAgICAgIHRoaXMubmV3Rm9ybS5hY3Rpb24gPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRoaXMubmV3Rm9ybSk7XHJcbiAgICAgICAgdGhpcy5maWVsZFNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcclxuICAgICAgICB0aGlzLm5ld0Zvcm0uYXBwZW5kQ2hpbGQodGhpcy5maWVsZFNldCk7XHJcbiAgICAgICAgdGhpcy5sZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xyXG4gICAgICAgIHRoaXMubGVnZW5kLmlubmVySFRNTCA9IFwiU2hvcnQgQW5zd2VyXCI7XHJcbiAgICAgICAgdGhpcy5maWVsZFNldC5hcHBlbmRDaGlsZCh0aGlzLmxlZ2VuZCk7XHJcbiAgICAgICAgdGhpcy5maXJzdExlZ2VuZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5maXJzdExlZ2VuZERpdi5pbm5lckhUTUwgPSB0aGlzLnF1ZXN0aW9uO1xyXG4gICAgICAgICQodGhpcy5maXJzdExlZ2VuZERpdikuYWRkQ2xhc3MoXCJqb3VybmFsLXF1ZXN0aW9uXCIpO1xyXG4gICAgICAgIHRoaXMuZmllbGRTZXQuYXBwZW5kQ2hpbGQodGhpcy5maXJzdExlZ2VuZERpdik7XHJcbiAgICAgICAgdGhpcy5qSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuaklucHV0RGl2LmlkID0gdGhpcy5kaXZpZCArIFwiX2pvdXJuYWxfaW5wdXRcIjtcclxuICAgICAgICB0aGlzLmZpZWxkU2V0LmFwcGVuZENoaWxkKHRoaXMuaklucHV0RGl2KTtcclxuICAgICAgICB0aGlzLmpPcHRpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAkKHRoaXMuak9wdGlvbnNEaXYpLmFkZENsYXNzKFwiam91cm5hbC1vcHRpb25zXCIpO1xyXG4gICAgICAgIHRoaXMuaklucHV0RGl2LmFwcGVuZENoaWxkKHRoaXMuak9wdGlvbnNEaXYpO1xyXG4gICAgICAgIHRoaXMuakxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICQodGhpcy5qTGFiZWwpLmFkZENsYXNzKFwicmFkaW8taW5saW5lXCIpO1xyXG4gICAgICAgIHRoaXMuak9wdGlvbnNEaXYuYXBwZW5kQ2hpbGQodGhpcy5qTGFiZWwpO1xyXG4gICAgICAgIHRoaXMualRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmpUZXh0QXJlYS5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5pc0Fuc3dlcmVkID0gdHJ1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMualRleHRBcmVhLmlkID0gdGhpcy5kaXZpZCArIFwiX3NvbHV0aW9uXCI7XHJcbiAgICAgICAgJCh0aGlzLmpUZXh0QXJlYSkuYXR0cihcImFyaWEtbGFiZWxcIiwgXCJ0ZXh0YXJlYVwiKTtcclxuICAgICAgICAkKHRoaXMualRleHRBcmVhKS5jc3MoXCJkaXNwbGF5OmlubGluZSwgd2lkdGg6NTMwcHhcIik7XHJcbiAgICAgICAgJCh0aGlzLmpUZXh0QXJlYSkuYWRkQ2xhc3MoXCJmb3JtLWNvbnRyb2xcIik7XHJcbiAgICAgICAgdGhpcy5qVGV4dEFyZWEucm93cyA9IDQ7XHJcbiAgICAgICAgdGhpcy5qVGV4dEFyZWEuY29scyA9IDUwO1xyXG4gICAgICAgIHRoaXMuakxhYmVsLmFwcGVuZENoaWxkKHRoaXMualRleHRBcmVhKTtcclxuICAgICAgICB0aGlzLmpUZXh0QXJlYS5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5mZWVkYmFja0Rpdi5pbm5lckhUTUwgPSBcIllvdXIgYW5zd2VyIGhhcyBub3QgYmVlbiBzYXZlZCB5ZXQhXCI7XHJcbiAgICAgICAgICAgICQodGhpcy5mZWVkYmFja0RpdikucmVtb3ZlQ2xhc3MoXCJhbGVydC1zdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMuZmVlZGJhY2tEaXYpLmFkZENsYXNzKFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmZpZWxkU2V0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0aGpheCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkQW5zd2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgJCh0aGlzLnJlbmRlcmVkQW5zd2VyKS5hZGRDbGFzcyhcImxhdGV4b3V0cHV0XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkU2V0LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZWRBbnN3ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5maWVsZFNldC5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbkRpdik7XHJcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICQodGhpcy5zdWJtaXRCdXR0b24pLmFkZENsYXNzKFwiYnRuIGJ0bi1zdWNjZXNzXCIpO1xyXG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTYXZlXCI7XHJcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0N1cnJlbnRBbnN3ZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5sb2dDdXJyZW50QW5zd2VyKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyRmVlZGJhY2soKTtcclxuICAgICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5idXR0b25EaXYuYXBwZW5kQ2hpbGQodGhpcy5zdWJtaXRCdXR0b24pO1xyXG4gICAgICAgIHRoaXMucmFuZG9tU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHRoaXMucmFuZG9tU3Bhbi5pbm5lckhUTUwgPSBcIkluc3RydWN0b3IncyBGZWVkYmFja1wiO1xyXG4gICAgICAgIHRoaXMuZmllbGRTZXQuYXBwZW5kQ2hpbGQodGhpcy5yYW5kb21TcGFuKTtcclxuICAgICAgICB0aGlzLm90aGVyT3B0aW9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgJCh0aGlzLm90aGVyT3B0aW9uc0RpdikuY3NzKFwicGFkZGluZy1sZWZ0OjIwcHhcIik7XHJcbiAgICAgICAgJCh0aGlzLm90aGVyT3B0aW9uc0RpdikuYWRkQ2xhc3MoXCJqb3VybmFsLW9wdGlvbnNcIik7XHJcbiAgICAgICAgdGhpcy5maWVsZFNldC5hcHBlbmRDaGlsZCh0aGlzLm90aGVyT3B0aW9uc0Rpdik7XHJcbiAgICAgICAgLy8gYWRkIGEgZmVlZGJhY2sgZGl2IHRvIGdpdmUgdXNlciBmZWVkYmFja1xyXG4gICAgICAgIHRoaXMuZmVlZGJhY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIC8vJCh0aGlzLmZlZWRiYWNrRGl2KS5hZGRDbGFzcyhcImJnLWluZm8gZm9ybS1jb250cm9sXCIpO1xyXG4gICAgICAgIC8vJCh0aGlzLmZlZWRiYWNrRGl2KS5jc3MoXCJ3aWR0aDo1MzBweCwgYmFja2dyb3VuZC1jb2xvcjojZWVlLCBmb250LXN0eWxlOml0YWxpY1wiKTtcclxuICAgICAgICAkKHRoaXMuZmVlZGJhY2tEaXYpLmNzcyhcIndpZHRoOjUzMHB4LCBmb250LXN0eWxlOml0YWxpY1wiKTtcclxuICAgICAgICB0aGlzLmZlZWRiYWNrRGl2LmlkID0gdGhpcy5kaXZpZCArIFwiX2ZlZWRiYWNrXCI7XHJcbiAgICAgICAgdGhpcy5mZWVkYmFja0Rpdi5pbm5lckhUTUwgPSBcIllvdSBoYXZlIG5vdCBhbnN3ZXJlZCB0aGlzIHF1ZXN0aW9uIHlldC5cIjtcclxuICAgICAgICAkKHRoaXMuZmVlZGJhY2tEaXYpLmFkZENsYXNzKFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIpO1xyXG4gICAgICAgIC8vdGhpcy5vdGhlck9wdGlvbnNEaXYuYXBwZW5kQ2hpbGQodGhpcy5mZWVkYmFja0Rpdik7XHJcbiAgICAgICAgdGhpcy5maWVsZFNldC5hcHBlbmRDaGlsZCh0aGlzLmZlZWRiYWNrRGl2KTtcclxuICAgICAgICAvL3RoaXMuZmllbGRTZXQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgICAkKHRoaXMub3JpZ0VsZW0pLnJlcGxhY2VXaXRoKHRoaXMuY29udGFpbmVyRGl2KTtcclxuICAgICAgICAvLyBUaGlzIGlzIGEgc3RvcGdhcCBtZWFzdXJlIGZvciB3aGVuIE1hdGhKYXggaXMgbm90IGxvYWRlZCBhdCBhbGwuICBUaGVyZSBpcyBhbm90aGVyXHJcbiAgICAgICAgLy8gbW9yZSBkaWZmaWN1bHQgY2FzZSB0aGF0IHdoZW4gTWF0aEpheCBpcyBsb2FkZWQgYXN5bmNocm9ub3VzbHkgd2Ugd2lsbCBnZXQgaGVyZVxyXG4gICAgICAgIC8vIGJlZm9yZSBNYXRoSmF4IGlzIGxvYWRlZC4gIEluIHRoYXQgY2FzZSB3ZSB3aWxsIG5lZWQgdG8gaW1wbGVtZW50IHNvbWV0aGluZ1xyXG4gICAgICAgIC8vIGxpa2UgYHRoZSBzb2x1dGlvbiBkZXNjcmliZWQgaGVyZSA8aHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzAxNDAxOC9ob3ctdG8tZGV0ZWN0LXdoZW4tbWF0aGpheC1pcy1mdWxseS1sb2FkZWQ+YF9cclxuICAgICAgICBpZiAodHlwZW9mIE1hdGhKYXggIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgTWF0aEpheC5IdWIuUXVldWUoW1wiVHlwZXNldFwiLCBNYXRoSmF4Lkh1YiwgdGhpcy5jb250YWluZXJEaXZdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyTWF0aCh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGhqYXgpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXCRcXCQoLio/KVxcJFxcJC9nLCBcIlxcXFxbICQxIFxcXFxdXCIpO1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcJCguKj8pXFwkL2csIFwiXFxcXCggJDEgXFxcXClcIik7XHJcbiAgICAgICAgICAgICQodGhpcy5yZW5kZXJlZEFuc3dlcikudGV4dCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIE1hdGhKYXguSHViLlF1ZXVlKFtcIlR5cGVzZXRcIiwgTWF0aEpheC5IdWIsIHRoaXMucmVuZGVyZWRBbnN3ZXJdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tDdXJyZW50QW5zd2VyKCkge31cclxuXHJcbiAgICBsb2dDdXJyZW50QW5zd2VyKCkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9ICQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kaXZpZCArIFwiX3NvbHV0aW9uXCIpKS52YWwoKTtcclxuICAgICAgICB0aGlzLnJlbmRlck1hdGgodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0TG9jYWxTdG9yYWdlKHtcclxuICAgICAgICAgICAgYW5zd2VyOiB2YWx1ZSxcclxuICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubG9nQm9va0V2ZW50KHtcclxuICAgICAgICAgICAgZXZlbnQ6IFwic2hvcnRhbnN3ZXJcIixcclxuICAgICAgICAgICAgYWN0OiB2YWx1ZSxcclxuICAgICAgICAgICAgZGl2X2lkOiB0aGlzLmRpdmlkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckZlZWRiYWNrKCkge1xyXG4gICAgICAgIHRoaXMuZmVlZGJhY2tEaXYuaW5uZXJIVE1MID0gXCJZb3VyIGFuc3dlciBoYXMgYmVlbiBzYXZlZC5cIjtcclxuICAgICAgICAkKHRoaXMuZmVlZGJhY2tEaXYpLnJlbW92ZUNsYXNzKFwiYWxlcnQtZGFuZ2VyXCIpO1xyXG4gICAgICAgICQodGhpcy5mZWVkYmFja0RpdikuYWRkQ2xhc3MoXCJhbGVydCBhbGVydC1zdWNjZXNzXCIpO1xyXG4gICAgfVxyXG4gICAgc2V0TG9jYWxTdG9yYWdlKGRhdGEpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZ3JhZGVyYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGxldCBrZXkgPSB0aGlzLmxvY2FsU3RvcmFnZUtleSgpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGVja0xvY2FsU3RvcmFnZSgpIHtcclxuICAgICAgICAvLyBSZXBvcHVsYXRlcyB0aGUgc2hvcnQgYW5zd2VyIHRleHRcclxuICAgICAgICAvLyB3aGljaCB3YXMgc3RvcmVkIGludG8gbG9jYWwgc3RvcmFnZS5cclxuICAgICAgICB2YXIgYW5zd2VyID0gXCJcIjtcclxuICAgICAgICBpZiAodGhpcy5ncmFkZXJhY3RpdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbGVuID0gbG9jYWxTdG9yYWdlLmxlbmd0aDtcclxuICAgICAgICBpZiAobGVuID4gMCkge1xyXG4gICAgICAgICAgICB2YXIgZXggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSgpKTtcclxuICAgICAgICAgICAgaWYgKGV4ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZWREYXRhID0gSlNPTi5wYXJzZShleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5zd2VyID0gc3RvcmVkRGF0YS5hbnN3ZXI7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBlcnJvciB3aGlsZSBwYXJzaW5nOyBsaWtlbHkgZHVlIHRvIGJhZCB2YWx1ZSBzdG9yZWQgaW4gc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSgpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgc29sdXRpb24gPSAkKFwiI1wiICsgdGhpcy5kaXZpZCArIFwiX3NvbHV0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgc29sdXRpb24udGV4dChhbnN3ZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJNYXRoKGFuc3dlcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWRiYWNrRGl2LmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICAgICAgICAgXCJZb3VyIGN1cnJlbnQgc2F2ZWQgYW5zd2VyIGlzIHNob3duIGFib3ZlLlwiO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzLmZlZWRiYWNrRGl2KS5yZW1vdmVDbGFzcyhcImFsZXJ0LWRhbmdlclwiKTtcclxuICAgICAgICAgICAgICAgICQodGhpcy5mZWVkYmFja0RpdikuYWRkQ2xhc3MoXCJhbGVydCBhbGVydC1zdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzdG9yZUFuc3dlcnMoZGF0YSkge1xyXG4gICAgICAgIC8vIFJlc3RvcmUgYW5zd2VycyBmcm9tIHN0b3JhZ2UgcmV0cmlldmFsIGRvbmUgaW4gUnVuZXN0b25lQmFzZVxyXG4gICAgICAgIC8vIHNvbWV0aW1lcyBkYXRhLmFuc3dlciBjYW4gYmUgbnVsbFxyXG4gICAgICAgIGlmICghZGF0YS5hbnN3ZXIpIHtcclxuICAgICAgICAgICAgZGF0YS5hbnN3ZXIgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFuc3dlciA9IGRhdGEuYW5zd2VyO1xyXG4gICAgICAgIHRoaXMualRleHRBcmVhLnZhbHVlID0gdGhpcy5hbnN3ZXI7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJNYXRoKHRoaXMuYW5zd2VyKTtcclxuXHJcbiAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICB0aGlzLmpJbnB1dERpdi5hcHBlbmRDaGlsZChwKTtcclxuICAgICAgICB2YXIgdHNTdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIGlmIChkYXRhLnRpbWVzdGFtcCkge1xyXG4gICAgICAgICAgICB0c1N0cmluZyA9IG5ldyBEYXRlKGRhdGEudGltZXN0YW1wKS50b0xvY2FsZVN0cmluZygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRzU3RyaW5nID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChwKS50ZXh0KHRzU3RyaW5nKTtcclxuICAgICAgICBpZiAoZGF0YS5sYXN0X2Fuc3dlcikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRfYW5zd2VyID0gXCJvbnRpbWVcIjtcclxuICAgICAgICAgICAgbGV0IHRvZ2dsZV9hbnN3ZXJfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgdG9nZ2xlX2Fuc3dlcl9idXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICAgICAgICAgICQodG9nZ2xlX2Fuc3dlcl9idXR0b24pLnRleHQoXCJTaG93IExhdGUgQW5zd2VyXCIpO1xyXG4gICAgICAgICAgICAkKHRvZ2dsZV9hbnN3ZXJfYnV0dG9uKS5hZGRDbGFzcyhcImJ0biBidG4td2FybmluZ1wiKTtcclxuICAgICAgICAgICAgJCh0b2dnbGVfYW5zd2VyX2J1dHRvbikuY3NzKFwibWFyZ2luLWxlZnRcIiwgXCI1cHhcIik7XHJcblxyXG4gICAgICAgICAgICAkKHRvZ2dsZV9hbnN3ZXJfYnV0dG9uKS5jbGljayhcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGlzcGxheV90aW1lc3RhbXAsIGJ1dHRvbl90ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRfYW5zd2VyID09PSBcIm9udGltZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMualRleHRBcmVhLnZhbHVlID0gZGF0YS5sYXN0X2Fuc3dlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXIgPSBkYXRhLmxhc3RfYW5zd2VyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X3RpbWVzdGFtcCA9IG5ldyBEYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5sYXN0X3RpbWVzdGFtcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApLnRvTG9jYWxlU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbl90ZXh0ID0gXCJTaG93IG9uLVRpbWUgQW5zd2VyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudF9hbnN3ZXIgPSBcImxhdGVcIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmpUZXh0QXJlYS52YWx1ZSA9IGRhdGEuYW5zd2VyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuc3dlciA9IGRhdGEuYW5zd2VyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X3RpbWVzdGFtcCA9IHRzU3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25fdGV4dCA9IFwiU2hvdyBMYXRlIEFuc3dlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRfYW5zd2VyID0gXCJvbnRpbWVcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJNYXRoKHRoaXMuYW5zd2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHApLnRleHQoYFN1Ym1pdHRlZDogJHtkaXNwbGF5X3RpbWVzdGFtcH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHRvZ2dsZV9hbnN3ZXJfYnV0dG9uKS50ZXh0KGJ1dHRvbl90ZXh0KTtcclxuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5idXR0b25EaXYuYXBwZW5kQ2hpbGQodG9nZ2xlX2Fuc3dlcl9idXR0b24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZmVlZGJhY2tTdHIgPSBcIllvdXIgY3VycmVudCBzYXZlZCBhbnN3ZXIgaXMgc2hvd24gYWJvdmUuXCI7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhLnNjb3JlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGZlZWRiYWNrU3RyID0gYFNjb3JlOiAke2RhdGEuc2NvcmV9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGEuY29tbWVudCkge1xyXG4gICAgICAgICAgICBmZWVkYmFja1N0ciArPSBgIC0tICR7ZGF0YS5jb21tZW50fWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmVlZGJhY2tEaXYuaW5uZXJIVE1MID0gZmVlZGJhY2tTdHI7XHJcblxyXG4gICAgICAgICQodGhpcy5mZWVkYmFja0RpdikucmVtb3ZlQ2xhc3MoXCJhbGVydC1kYW5nZXJcIik7XHJcbiAgICAgICAgJCh0aGlzLmZlZWRiYWNrRGl2KS5hZGRDbGFzcyhcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZUludGVyYWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMualRleHRBcmVhLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT0gRmluZCB0aGUgY3VzdG9tIEhUTUwgdGFncyBhbmQgPT1cclxuPT0gICBleGVjdXRlIG91ciBjb2RlIG9uIHRoZW0gICAgPT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuJChkb2N1bWVudCkuYmluZChcInJ1bmVzdG9uZTpsb2dpbi1jb21wbGV0ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiW2RhdGEtY29tcG9uZW50PXNob3J0YW5zd2VyXVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5jbG9zZXN0KFwiW2RhdGEtY29tcG9uZW50PXRpbWVkQXNzZXNzbWVudF1cIikubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgLy8gSWYgdGhpcyBlbGVtZW50IGV4aXN0cyB3aXRoaW4gYSB0aW1lZCBjb21wb25lbnQsIGRvbid0IHJlbmRlciBpdCBoZXJlXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBzYUxpc3RbdGhpcy5pZF0gPSBuZXcgU2hvcnRBbnN3ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIG9yaWc6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlUnVuZXN0b25lU2VydmljZXM6IGVCb29rQ29uZmlnLnVzZVJ1bmVzdG9uZVNlcnZpY2VzLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yIHJlbmRlcmluZyBDbGlja2FibGVBcmVhIFByb2JsZW0gJHt0aGlzLmlkfVxyXG4gICAgICAgICAgICAgICAgRGV0YWlsczogJHtlcnJ9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbiIsImltcG9ydCBTaG9ydEFuc3dlciBmcm9tIFwiLi9zaG9ydGFuc3dlci5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZWRTaG9ydEFuc3dlciBleHRlbmRzIFNob3J0QW5zd2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcclxuICAgICAgICBzdXBlcihvcHRzKTtcclxuICAgICAgICB0aGlzLnJlbmRlclRpbWVkSWNvbih0aGlzLmNvbnRhaW5lckRpdik7XHJcbiAgICAgICAgdGhpcy5oaWRlQnV0dG9ucygpO1xyXG4gICAgfVxyXG4gICAgaGlkZUJ1dHRvbnMoKSB7XHJcbiAgICAgICAgJCh0aGlzLnN1Ym1pdEJ1dHRvbikuaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyVGltZWRJY29uKGNvbXBvbmVudCkge1xyXG4gICAgICAgIC8vIHJlbmRlcnMgdGhlIGNsb2NrIGljb24gb24gdGltZWQgY29tcG9uZW50cy4gICAgVGhlIGNvbXBvbmVudCBwYXJhbWV0ZXJcclxuICAgICAgICAvLyBpcyB0aGUgZWxlbWVudCB0aGF0IHRoZSBpY29uIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cclxuICAgICAgICB2YXIgdGltZUljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHZhciB0aW1lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgJCh0aW1lSWNvbikuYXR0cih7XHJcbiAgICAgICAgICAgIHNyYzogXCIuLi9fc3RhdGljL2Nsb2NrLnBuZ1wiLFxyXG4gICAgICAgICAgICBzdHlsZTogXCJ3aWR0aDoxNXB4O2hlaWdodDoxNXB4XCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGltZUljb25EaXYuY2xhc3NOYW1lID0gXCJ0aW1lVGlwXCI7XHJcbiAgICAgICAgdGltZUljb25EaXYudGl0bGUgPSBcIlwiO1xyXG4gICAgICAgIHRpbWVJY29uRGl2LmFwcGVuZENoaWxkKHRpbWVJY29uKTtcclxuICAgICAgICAkKGNvbXBvbmVudCkucHJlcGVuZCh0aW1lSWNvbkRpdik7XHJcbiAgICB9XHJcbiAgICBjaGVja0NvcnJlY3RUaW1lZCgpIHtcclxuICAgICAgICByZXR1cm4gXCJJXCI7IC8vIHdlIGlnbm9yZSB0aGlzIGluIHRoZSBncmFkaW5nXHJcbiAgICB9XHJcbiAgICBoaWRlRmVlZGJhY2soKSB7XHJcbiAgICAgICAgJCh0aGlzLmZlZWRiYWNrRGl2KS5oaWRlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlmICh0eXBlb2Ygd2luZG93LmNvbXBvbmVudF9mYWN0b3J5ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPSB7fTtcclxufVxyXG5cclxud2luZG93LmNvbXBvbmVudF9mYWN0b3J5LnNob3J0YW5zd2VyID0gZnVuY3Rpb24gKG9wdHMpIHtcclxuICAgIGlmIChvcHRzLnRpbWVkKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUaW1lZFNob3J0QW5zd2VyKG9wdHMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBTaG9ydEFuc3dlcihvcHRzKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
