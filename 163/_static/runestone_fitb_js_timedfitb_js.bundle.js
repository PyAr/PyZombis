(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_fitb_js_timedfitb_js"],{

/***/ 68007:
/*!*************************************!*\
  !*** ./runestone/fitb/css/fitb.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 86151:
/*!*******************************************!*\
  !*** ./runestone/fitb/js/fitb-i18n.en.js ***!
  \*******************************************/
/***/ (() => {

$.i18n().load({
    en: {
        msg_no_answer: "No answer provided.",
        msg_fitb_check_me: "Check me",
        msg_fitb_compare_me: "Compare me",
    },
});


/***/ }),

/***/ 61353:
/*!**********************************************!*\
  !*** ./runestone/fitb/js/fitb-i18n.pt-br.js ***!
  \**********************************************/
/***/ (() => {

$.i18n().load({
    "pt-br": {
        msg_no_answer: "Nenhuma resposta dada.",
        msg_fitb_check_me: "Verificar",
        msg_fitb_compare_me: "Comparar"
    },
});


/***/ }),

/***/ 99184:
/*!***********************************!*\
  !*** ./runestone/fitb/js/fitb.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FITBList": () => (/* binding */ FITBList),
/* harmony export */   "default": () => (/* binding */ FITB)
/* harmony export */ });
/* harmony import */ var _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase.js */ 2568);
/* harmony import */ var _fitb_i18n_en_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fitb-i18n.en.js */ 86151);
/* harmony import */ var _fitb_i18n_en_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fitb_i18n_en_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fitb_i18n_pt_br_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fitb-i18n.pt-br.js */ 61353);
/* harmony import */ var _fitb_i18n_pt_br_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fitb_i18n_pt_br_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_fitb_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/fitb.css */ 68007);
// *********
// |docname|
// *********
// This file contains the JS for the Runestone fillintheblank component. It was created By Isaiah Mayerchak and Kirby Olson, 6/4/15 then revised by Brad Miller, 2/7/20.







var FITBList = {}; // Object containing all instances of FITB that aren't a child of a timed assessment.

// FITB constructor
class FITB extends _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(opts) {
        super(opts);
        var orig = opts.orig; // entire <p> element
        this.useRunestoneServices = opts.useRunestoneServices;
        this.origElem = orig;
        this.divid = orig.id;
        this.correct = null;
        // See comments in fitb.py for the format of ``feedbackArray`` (which is identical in both files).
        //
        // Find the script tag containing JSON and parse it. See `SO <https://stackoverflow.com/questions/9320427/best-practice-for-embedding-arbitrary-json-in-the-dom>`_. If this parses to ``false``, then no feedback is available; server-side grading will be performed.
        this.feedbackArray = JSON.parse(
            this.scriptSelector(this.origElem).html()
        );
        this.createFITBElement();
        this.caption = "Fill in the Blank";
        this.addCaption("runestone");
        this.checkServer("fillb", true);
    }
    // Find the script tag containing JSON in a given root DOM node.
    scriptSelector(root_node) {
        return $(root_node).find(`script[type="application/json"]`);
    }
    /*===========================================
    ====   Functions generating final HTML   ====
    ===========================================*/
    createFITBElement() {
        this.renderFITBInput();
        this.renderFITBButtons();
        this.renderFITBFeedbackDiv();
        // replaces the intermediate HTML for this component with the rendered HTML of this component
        $(this.origElem).replaceWith(this.containerDiv);
    }
    renderFITBInput() {
        // The text [input] elements are created by the template.
        this.containerDiv = document.createElement("div");
        $(this.containerDiv).addClass("alert alert-warning");
        this.containerDiv.id = this.divid;
        // Copy the original elements to the container holding what the user will see.
        $(this.origElem).children().clone().appendTo(this.containerDiv);
        // Remove the script tag.
        this.scriptSelector(this.containerDiv).remove();
        // Set the class for the text inputs, then store references to them.
        let ba = $(this.containerDiv).find(":input");
        ba.attr("class", "form form-control selectwidthauto");
        ba.attr("aria-label", "input area");
        this.blankArray = ba.toArray();
        // When a blank is changed mark this component as interacted with.
        // And set a class on the component in case we want to render components that have been used
        // differently
        for (let blank of this.blankArray) {
            $(blank).change(this.recordAnswered.bind(this));
        }
    }

    recordAnswered() {
        this.isAnswered = true;
        //let rcontainer = this.containerDiv.closest(".runestone");
        //rcontainer.addClass("answered");
    }

    renderFITBButtons() {
        // "submit" button and "compare me" button
        this.submitButton = document.createElement("button");
        this.submitButton.textContent = $.i18n("msg_fitb_check_me");
        $(this.submitButton).attr({
            class: "btn btn-success",
            name: "do answer",
            type: "button",
        });
        this.submitButton.addEventListener(
            "click",
            function () {
                this.checkCurrentAnswer();
                this.logCurrentAnswer();
            }.bind(this),
            false
        );
        this.containerDiv.appendChild(document.createElement("br"));
        this.containerDiv.appendChild(document.createElement("br"));
        this.containerDiv.appendChild(this.submitButton);
        if (this.useRunestoneServices) {
            this.compareButton = document.createElement("button");
            $(this.compareButton).attr({
                class: "btn btn-default",
                id: this.origElem.id + "_bcomp",
                disabled: "",
                name: "compare",
            });
            this.compareButton.textContent = $.i18n("msg_fitb_compare_me");
            this.compareButton.addEventListener(
                "click",
                function () {
                    this.compareFITBAnswers();
                }.bind(this),
                false
            );
            this.containerDiv.appendChild(this.compareButton);
        }
        this.containerDiv.appendChild(document.createElement("div"));
    }
    renderFITBFeedbackDiv() {
        this.feedBackDiv = document.createElement("div");
        this.feedBackDiv.id = this.divid + "_feedback";
        this.containerDiv.appendChild(document.createElement("br"));
        this.containerDiv.appendChild(this.feedBackDiv);
    }
    /*===================================
    === Checking/loading from storage ===
    ===================================*/
    restoreAnswers(data) {
        var arr;
        // Restore answers from storage retrieval done in RunestoneBase.
        try {
            // The newer format encodes data as a JSON object.
            arr = JSON.parse(data.answer);
            // The result should be an array. If not, try comma parsing instead.
            if (!Array.isArray(arr)) {
                throw new Error();
            }
        } catch (err) {
            // The old format didn't.
            arr = data.answer.split(",");
        }
        for (var i = 0; i < this.blankArray.length; i++) {
            $(this.blankArray[i]).attr("value", arr[i]);
        }
        // Use the feedback from the server, or recompute it locally.
        if (!this.feedbackArray) {
            this.displayFeed = data.displayFeed;
            this.correct = data.correct;
            this.isCorrectArray = data.isCorrectArray;
            // Only render if all the data is present; local storage might have old data missing some of these items.
            if (
                typeof this.displayFeed !== "undefined" &&
                typeof this.correct !== "undefined" &&
                typeof this.isCorrectArray !== "undefined"
            ) {
                this.renderFeedback();
            }
        } else {
            this.checkCurrentAnswer();
        }
    }
    checkLocalStorage() {
        // Loads previous answers from local storage if they exist
        var storedData;
        if (this.graderactive) {
            return;
        }
        var len = localStorage.length;
        if (len > 0) {
            var ex = localStorage.getItem(this.localStorageKey());
            if (ex !== null) {
                try {
                    storedData = JSON.parse(ex);
                    var arr = storedData.answer;
                } catch (err) {
                    // error while parsing; likely due to bad value stored in storage
                    console.log(err.message);
                    localStorage.removeItem(this.localStorageKey());
                    return;
                }
                this.restoreAnswers(storedData);
            }
        }
    }
    setLocalStorage(data) {
        let key = this.localStorageKey();
        localStorage.setItem(key, JSON.stringify(data));
    }

    checkCurrentAnswer() {
        // Start of the evaluation chain
        this.isCorrectArray = [];
        this.displayFeed = [];
        this.given_arr = [];
        for (var i = 0; i < this.blankArray.length; i++)
            this.given_arr.push(this.blankArray[i].value);
        if (this.useRunestoneServices) {
            if (eBookConfig.enableCompareMe) {
                this.enableCompareButton();
            }
        }
        // Grade locally if we can't ask the server to grade.
        if (this.feedbackArray) {
            this.evaluateAnswers();
            this.renderFeedback();
        }
    }

    async logCurrentAnswer() {
        let answer = JSON.stringify(this.given_arr);
        // Save the answer locally.
        this.setLocalStorage({
            answer: answer,
            timestamp: new Date(),
        });
        let data = await this.logBookEvent({
            event: "fillb",
            act: answer,
            answer: answer,
            correct: this.correct ? "T" : "F",
            div_id: this.divid,
        });
        if (!this.feedbackArray) {
            // On success, update the feedback from the server's grade.
            this.setLocalStorage({
                answer: answer,
                timestamp: data.timestamp,
            });
            this.correct = data.correct;
            this.displayFeed = data.displayFeed;
            this.isCorrectArray = data.isCorrectArray;
            this.renderFeedback();
        }
        return data;
}

    /*==============================
    === Evaluation of answer and ===
    ===     display feedback     ===
    ==============================*/
    // Inputs:
    //
    // - Strings entered by the student in ``this.blankArray[i].value``.
    // - Feedback in ``this.feedbackArray``.
    //
    // Outputs:
    //
    // - ``this.displayFeed`` is an array of HTML feedback.
    // - ``this.isCorrectArray`` is an array of true, false, or null (the question wasn't answered).
    // - ``this.correct`` is true, false, or null (the question wasn't answered).
    evaluateAnswers() {
        // Keep track if all answers are correct or not.
        this.correct = true;
        for (var i = 0; i < this.blankArray.length; i++) {
            var given = this.blankArray[i].value;
            // If this blank is empty, provide no feedback for it.
            if (given === "") {
                this.isCorrectArray.push(null);
                this.displayFeed.push($.i18n("msg_no_answer"));
                this.correct = false;
            } else {
                // Look through all feedback for this blank. The last element in the array always matches. If no feedback for this blank exists, use an empty list.
                var fbl = this.feedbackArray[i] || [];
                for (var j = 0; j < fbl.length; j++) {
                    // The last item of feedback always matches.
                    if (j === fbl.length - 1) {
                        this.displayFeed.push(fbl[j]["feedback"]);
                        break;
                    }
                    // If this is a regexp...
                    if ("regex" in fbl[j]) {
                        var patt = RegExp(
                            fbl[j]["regex"],
                            fbl[j]["regexFlags"]
                        );
                        if (patt.test(given)) {
                            this.displayFeed.push(fbl[j]["feedback"]);
                            break;
                        }
                    } else {
                        // This is a number.
                        console.assert("number" in fbl[j]);
                        var [min, max] = fbl[j]["number"];
                        // Convert the given string to a number. While there are `lots of ways <https://coderwall.com/p/5tlhmw/converting-strings-to-number-in-javascript-pitfalls>`_ to do this; this version supports other bases (hex/binary/octal) as well as floats.
                        var actual = +given;
                        if (actual >= min && actual <= max) {
                            this.displayFeed.push(fbl[j]["feedback"]);
                            break;
                        }
                    }
                }
                // The answer is correct if it matched the first element in the array. A special case: if only one answer is provided, count it wrong; this is a misformed problem.
                let is_correct = j === 0 && fbl.length > 1;
                this.isCorrectArray.push(is_correct);
                if (!is_correct) {
                    this.correct = false;
                }
            }
        }
        this.percent =
            this.isCorrectArray.filter(Boolean).length / this.blankArray.length;
    }

    renderFeedback() {
        if (this.correct) {
            $(this.feedBackDiv).attr("class", "alert alert-info");
            for (let j = 0; j < this.blankArray.length; j++) {
                $(this.blankArray[j]).removeClass("input-validation-error");
            }
        } else {
            if (this.displayFeed === null) {
                this.displayFeed = "";
            }
            for (let j = 0; j < this.blankArray.length; j++) {
                if (this.isCorrectArray[j] !== true) {
                    $(this.blankArray[j]).addClass("input-validation-error");
                } else {
                    $(this.blankArray[j]).removeClass("input-validation-error");
                }
            }
            $(this.feedBackDiv).attr("class", "alert alert-danger");
        }
        var feedback_html = "<ul>";
        for (var i = 0; i < this.displayFeed.length; i++) {
            feedback_html += "<li>" + this.displayFeed[i] + "</li>";
        }
        feedback_html += "</ul>";
        // Remove the list if it's just one element.
        if (this.displayFeed.length == 1) {
            feedback_html = feedback_html.slice(
                "<ul><li>".length,
                -"</li></ul>".length
            );
        }
        this.feedBackDiv.innerHTML = feedback_html;
        if (typeof MathJax !== "undefined") {
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
        }
    }

    /*==================================
    === Functions for compare button ===
    ==================================*/
    enableCompareButton() {
        this.compareButton.disabled = false;
    }
    compareFITBAnswers() {
        var data = {};
        data.div_id = this.divid;
        data.course = eBookConfig.course;
        jQuery.get(
            eBookConfig.ajaxURL + "gettop10Answers",
            data,
            this.compareFITB
        );
    }
    compareFITB(data, status, whatever) {
        var answers = eval(data)[0];
        var misc = eval(data)[1];
        var body = "<table>";
        body += "<tr><th>Answer</th><th>Count</th></tr>";
        for (var row in answers) {
            body +=
                "<tr><td>" +
                answers[row].answer +
                "</td><td>" +
                answers[row].count +
                " times</td></tr>";
        }
        body += "</table>";
        if (misc["yourpct"] !== "unavailable") {
            body +=
                "<br /><p>You have " +
                misc["yourpct"] +
                "% correct for all questions</p>";
        }
        var html =
            "<div class='modal fade'>" +
            "    <div class='modal-dialog compare-modal'>" +
            "        <div class='modal-content'>" +
            "            <div class='modal-header'>" +
            "                <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>" +
            "                <h4 class='modal-title'>Top Answers</h4>" +
            "            </div>" +
            "            <div class='modal-body'>" +
            body +
            "            </div>" +
            "        </div>" +
            "    </div>" +
            "</div>";
        var el = $(html);
        el.modal();
    }

    disableInteraction() {
        for (var i = 0; i < this.blankArray.length; i++) {
            this.blankArray[i].disabled = true;
        }
    }
}

/*=================================
== Find the custom HTML tags and ==
==   execute our code on them    ==
=================================*/
$(document).bind("runestone:login-complete", function () {
    $("[data-component=fillintheblank]").each(function (index) {
        var opts = {
            orig: this,
            useRunestoneServices: eBookConfig.useRunestoneServices,
        };
        if ($(this).closest("[data-component=timedAssessment]").length == 0) {
            // If this element exists within a timed component, don't render it here
            try {
                FITBList[this.id] = new FITB(opts);
            } catch (err) {
                console.log(
                    `Error rendering Fill in the Blank Problem ${this.id}
                     Details: ${err}`
                );
            }
        }
    });
});


/***/ }),

/***/ 74309:
/*!****************************************!*\
  !*** ./runestone/fitb/js/timedfitb.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TimedFITB)
/* harmony export */ });
/* harmony import */ var _fitb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fitb.js */ 99184);

class TimedFITB extends _fitb_js__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(opts) {
        super(opts);
        this.renderTimedIcon(this.inputDiv);
        this.hideButtons();
        this.needsReinitialization = true;
    }
    hideButtons() {
        $(this.submitButton).hide();
        $(this.compareButton).hide();
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
        // Returns if the question was correct, incorrect, or skipped (return null in the last case)
        switch (this.correct) {
            case true:
                return "T";
            case false:
                return "F";
            default:
                return null;
        }
    }
    hideFeedback() {
        for (var i = 0; i < this.blankArray.length; i++) {
            $(this.blankArray[i]).removeClass("input-validation-error");
        }
        this.feedBackDiv.style.display = "none";
    }

    reinitializeListeners() {
        for (let blank of this.blankArray) {
            $(blank).change(this.recordAnswered.bind(this));
        }
    }
}

if (typeof window.component_factory === "undefined") {
    window.component_factory = {};
}
window.component_factory.fillintheblank = function (opts) {
    if (opts.timed) {
        return new TimedFITB(opts);
    }
    return new _fitb_js__WEBPACK_IMPORTED_MODULE_0__.default(opts);
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2ZpdGIvY3NzL2ZpdGIuY3NzP2MxNjkiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9maXRiL2pzL2ZpdGItaTE4bi5lbi5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2ZpdGIvanMvZml0Yi1pMThuLnB0LWJyLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvZml0Yi9qcy9maXRiLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvZml0Yi9qcy90aW1lZGZpdGIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7QUNORDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkQ7QUFDQTtBQUNBO0FBQ0E7QUFDYTs7QUFFZ0Q7QUFDbEM7QUFDRztBQUNMOztBQUVsQixrQkFBa0I7O0FBRXpCO0FBQ2UsbUJBQW1CLGdFQUFhO0FBQy9DO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdU9BQXVPO0FBQ3ZPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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QUNuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsaUVBQWlFO0FBQ2pFLGdDQUFnQyxJQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BhNEI7QUFDZCx3QkFBd0IsNkNBQUk7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw0QkFBNEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw2Q0FBSTtBQUNuQiIsImZpbGUiOiJydW5lc3RvbmVfZml0Yl9qc190aW1lZGZpdGJfanMuYnVuZGxlLmpzP3Y9NTU2NzFjMjAyOWJjMmQ5ZjU3NWQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIkLmkxOG4oKS5sb2FkKHtcclxuICAgIGVuOiB7XHJcbiAgICAgICAgbXNnX25vX2Fuc3dlcjogXCJObyBhbnN3ZXIgcHJvdmlkZWQuXCIsXHJcbiAgICAgICAgbXNnX2ZpdGJfY2hlY2tfbWU6IFwiQ2hlY2sgbWVcIixcclxuICAgICAgICBtc2dfZml0Yl9jb21wYXJlX21lOiBcIkNvbXBhcmUgbWVcIixcclxuICAgIH0sXHJcbn0pO1xyXG4iLCIkLmkxOG4oKS5sb2FkKHtcclxuICAgIFwicHQtYnJcIjoge1xyXG4gICAgICAgIG1zZ19ub19hbnN3ZXI6IFwiTmVuaHVtYSByZXNwb3N0YSBkYWRhLlwiLFxyXG4gICAgICAgIG1zZ19maXRiX2NoZWNrX21lOiBcIlZlcmlmaWNhclwiLFxyXG4gICAgICAgIG1zZ19maXRiX2NvbXBhcmVfbWU6IFwiQ29tcGFyYXJcIlxyXG4gICAgfSxcclxufSk7XHJcbiIsIi8vICoqKioqKioqKlxyXG4vLyB8ZG9jbmFtZXxcclxuLy8gKioqKioqKioqXHJcbi8vIFRoaXMgZmlsZSBjb250YWlucyB0aGUgSlMgZm9yIHRoZSBSdW5lc3RvbmUgZmlsbGludGhlYmxhbmsgY29tcG9uZW50LiBJdCB3YXMgY3JlYXRlZCBCeSBJc2FpYWggTWF5ZXJjaGFrIGFuZCBLaXJieSBPbHNvbiwgNi80LzE1IHRoZW4gcmV2aXNlZCBieSBCcmFkIE1pbGxlciwgMi83LzIwLlxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBSdW5lc3RvbmVCYXNlIGZyb20gXCIuLi8uLi9jb21tb24vanMvcnVuZXN0b25lYmFzZS5qc1wiO1xyXG5pbXBvcnQgXCIuL2ZpdGItaTE4bi5lbi5qc1wiO1xyXG5pbXBvcnQgXCIuL2ZpdGItaTE4bi5wdC1ici5qc1wiO1xyXG5pbXBvcnQgXCIuLi9jc3MvZml0Yi5jc3NcIjtcclxuXHJcbmV4cG9ydCB2YXIgRklUQkxpc3QgPSB7fTsgLy8gT2JqZWN0IGNvbnRhaW5pbmcgYWxsIGluc3RhbmNlcyBvZiBGSVRCIHRoYXQgYXJlbid0IGEgY2hpbGQgb2YgYSB0aW1lZCBhc3Nlc3NtZW50LlxyXG5cclxuLy8gRklUQiBjb25zdHJ1Y3RvclxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGSVRCIGV4dGVuZHMgUnVuZXN0b25lQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XHJcbiAgICAgICAgc3VwZXIob3B0cyk7XHJcbiAgICAgICAgdmFyIG9yaWcgPSBvcHRzLm9yaWc7IC8vIGVudGlyZSA8cD4gZWxlbWVudFxyXG4gICAgICAgIHRoaXMudXNlUnVuZXN0b25lU2VydmljZXMgPSBvcHRzLnVzZVJ1bmVzdG9uZVNlcnZpY2VzO1xyXG4gICAgICAgIHRoaXMub3JpZ0VsZW0gPSBvcmlnO1xyXG4gICAgICAgIHRoaXMuZGl2aWQgPSBvcmlnLmlkO1xyXG4gICAgICAgIHRoaXMuY29ycmVjdCA9IG51bGw7XHJcbiAgICAgICAgLy8gU2VlIGNvbW1lbnRzIGluIGZpdGIucHkgZm9yIHRoZSBmb3JtYXQgb2YgYGBmZWVkYmFja0FycmF5YGAgKHdoaWNoIGlzIGlkZW50aWNhbCBpbiBib3RoIGZpbGVzKS5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIEZpbmQgdGhlIHNjcmlwdCB0YWcgY29udGFpbmluZyBKU09OIGFuZCBwYXJzZSBpdC4gU2VlIGBTTyA8aHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvOTMyMDQyNy9iZXN0LXByYWN0aWNlLWZvci1lbWJlZGRpbmctYXJiaXRyYXJ5LWpzb24taW4tdGhlLWRvbT5gXy4gSWYgdGhpcyBwYXJzZXMgdG8gYGBmYWxzZWBgLCB0aGVuIG5vIGZlZWRiYWNrIGlzIGF2YWlsYWJsZTsgc2VydmVyLXNpZGUgZ3JhZGluZyB3aWxsIGJlIHBlcmZvcm1lZC5cclxuICAgICAgICB0aGlzLmZlZWRiYWNrQXJyYXkgPSBKU09OLnBhcnNlKFxyXG4gICAgICAgICAgICB0aGlzLnNjcmlwdFNlbGVjdG9yKHRoaXMub3JpZ0VsZW0pLmh0bWwoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVGSVRCRWxlbWVudCgpO1xyXG4gICAgICAgIHRoaXMuY2FwdGlvbiA9IFwiRmlsbCBpbiB0aGUgQmxhbmtcIjtcclxuICAgICAgICB0aGlzLmFkZENhcHRpb24oXCJydW5lc3RvbmVcIik7XHJcbiAgICAgICAgdGhpcy5jaGVja1NlcnZlcihcImZpbGxiXCIsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgLy8gRmluZCB0aGUgc2NyaXB0IHRhZyBjb250YWluaW5nIEpTT04gaW4gYSBnaXZlbiByb290IERPTSBub2RlLlxyXG4gICAgc2NyaXB0U2VsZWN0b3Iocm9vdF9ub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuICQocm9vdF9ub2RlKS5maW5kKGBzY3JpcHRbdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIl1gKTtcclxuICAgIH1cclxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgPT09PSAgIEZ1bmN0aW9ucyBnZW5lcmF0aW5nIGZpbmFsIEhUTUwgICA9PT09XHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgIGNyZWF0ZUZJVEJFbGVtZW50KCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyRklUQklucHV0KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJGSVRCQnV0dG9ucygpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyRklUQkZlZWRiYWNrRGl2KCk7XHJcbiAgICAgICAgLy8gcmVwbGFjZXMgdGhlIGludGVybWVkaWF0ZSBIVE1MIGZvciB0aGlzIGNvbXBvbmVudCB3aXRoIHRoZSByZW5kZXJlZCBIVE1MIG9mIHRoaXMgY29tcG9uZW50XHJcbiAgICAgICAgJCh0aGlzLm9yaWdFbGVtKS5yZXBsYWNlV2l0aCh0aGlzLmNvbnRhaW5lckRpdik7XHJcbiAgICB9XHJcbiAgICByZW5kZXJGSVRCSW5wdXQoKSB7XHJcbiAgICAgICAgLy8gVGhlIHRleHQgW2lucHV0XSBlbGVtZW50cyBhcmUgY3JlYXRlZCBieSB0aGUgdGVtcGxhdGUuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICQodGhpcy5jb250YWluZXJEaXYpLmFkZENsYXNzKFwiYWxlcnQgYWxlcnQtd2FybmluZ1wiKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5pZCA9IHRoaXMuZGl2aWQ7XHJcbiAgICAgICAgLy8gQ29weSB0aGUgb3JpZ2luYWwgZWxlbWVudHMgdG8gdGhlIGNvbnRhaW5lciBob2xkaW5nIHdoYXQgdGhlIHVzZXIgd2lsbCBzZWUuXHJcbiAgICAgICAgJCh0aGlzLm9yaWdFbGVtKS5jaGlsZHJlbigpLmNsb25lKCkuYXBwZW5kVG8odGhpcy5jb250YWluZXJEaXYpO1xyXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgc2NyaXB0IHRhZy5cclxuICAgICAgICB0aGlzLnNjcmlwdFNlbGVjdG9yKHRoaXMuY29udGFpbmVyRGl2KS5yZW1vdmUoKTtcclxuICAgICAgICAvLyBTZXQgdGhlIGNsYXNzIGZvciB0aGUgdGV4dCBpbnB1dHMsIHRoZW4gc3RvcmUgcmVmZXJlbmNlcyB0byB0aGVtLlxyXG4gICAgICAgIGxldCBiYSA9ICQodGhpcy5jb250YWluZXJEaXYpLmZpbmQoXCI6aW5wdXRcIik7XHJcbiAgICAgICAgYmEuYXR0cihcImNsYXNzXCIsIFwiZm9ybSBmb3JtLWNvbnRyb2wgc2VsZWN0d2lkdGhhdXRvXCIpO1xyXG4gICAgICAgIGJhLmF0dHIoXCJhcmlhLWxhYmVsXCIsIFwiaW5wdXQgYXJlYVwiKTtcclxuICAgICAgICB0aGlzLmJsYW5rQXJyYXkgPSBiYS50b0FycmF5KCk7XHJcbiAgICAgICAgLy8gV2hlbiBhIGJsYW5rIGlzIGNoYW5nZWQgbWFyayB0aGlzIGNvbXBvbmVudCBhcyBpbnRlcmFjdGVkIHdpdGguXHJcbiAgICAgICAgLy8gQW5kIHNldCBhIGNsYXNzIG9uIHRoZSBjb21wb25lbnQgaW4gY2FzZSB3ZSB3YW50IHRvIHJlbmRlciBjb21wb25lbnRzIHRoYXQgaGF2ZSBiZWVuIHVzZWRcclxuICAgICAgICAvLyBkaWZmZXJlbnRseVxyXG4gICAgICAgIGZvciAobGV0IGJsYW5rIG9mIHRoaXMuYmxhbmtBcnJheSkge1xyXG4gICAgICAgICAgICAkKGJsYW5rKS5jaGFuZ2UodGhpcy5yZWNvcmRBbnN3ZXJlZC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVjb3JkQW5zd2VyZWQoKSB7XHJcbiAgICAgICAgdGhpcy5pc0Fuc3dlcmVkID0gdHJ1ZTtcclxuICAgICAgICAvL2xldCByY29udGFpbmVyID0gdGhpcy5jb250YWluZXJEaXYuY2xvc2VzdChcIi5ydW5lc3RvbmVcIik7XHJcbiAgICAgICAgLy9yY29udGFpbmVyLmFkZENsYXNzKFwiYW5zd2VyZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRklUQkJ1dHRvbnMoKSB7XHJcbiAgICAgICAgLy8gXCJzdWJtaXRcIiBidXR0b24gYW5kIFwiY29tcGFyZSBtZVwiIGJ1dHRvblxyXG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICQuaTE4bihcIm1zZ19maXRiX2NoZWNrX21lXCIpO1xyXG4gICAgICAgICQodGhpcy5zdWJtaXRCdXR0b24pLmF0dHIoe1xyXG4gICAgICAgICAgICBjbGFzczogXCJidG4gYnRuLXN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgbmFtZTogXCJkbyBhbnN3ZXJcIixcclxuICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcImNsaWNrXCIsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tDdXJyZW50QW5zd2VyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ0N1cnJlbnRBbnN3ZXIoKTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRoaXMuc3VibWl0QnV0dG9uKTtcclxuICAgICAgICBpZiAodGhpcy51c2VSdW5lc3RvbmVTZXJ2aWNlcykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBhcmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMuY29tcGFyZUJ1dHRvbikuYXR0cih7XHJcbiAgICAgICAgICAgICAgICBjbGFzczogXCJidG4gYnRuLWRlZmF1bHRcIixcclxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLm9yaWdFbGVtLmlkICsgXCJfYmNvbXBcIixcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJjb21wYXJlXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBhcmVCdXR0b24udGV4dENvbnRlbnQgPSAkLmkxOG4oXCJtc2dfZml0Yl9jb21wYXJlX21lXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBhcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBhcmVGSVRCQW5zd2VycygpO1xyXG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5jb21wYXJlQnV0dG9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJGSVRCRmVlZGJhY2tEaXYoKSB7XHJcbiAgICAgICAgdGhpcy5mZWVkQmFja0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5mZWVkQmFja0Rpdi5pZCA9IHRoaXMuZGl2aWQgKyBcIl9mZWVkYmFja1wiO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5mZWVkQmFja0Rpdik7XHJcbiAgICB9XHJcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICA9PT0gQ2hlY2tpbmcvbG9hZGluZyBmcm9tIHN0b3JhZ2UgPT09XHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICByZXN0b3JlQW5zd2VycyhkYXRhKSB7XHJcbiAgICAgICAgdmFyIGFycjtcclxuICAgICAgICAvLyBSZXN0b3JlIGFuc3dlcnMgZnJvbSBzdG9yYWdlIHJldHJpZXZhbCBkb25lIGluIFJ1bmVzdG9uZUJhc2UuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gVGhlIG5ld2VyIGZvcm1hdCBlbmNvZGVzIGRhdGEgYXMgYSBKU09OIG9iamVjdC5cclxuICAgICAgICAgICAgYXJyID0gSlNPTi5wYXJzZShkYXRhLmFuc3dlcik7XHJcbiAgICAgICAgICAgIC8vIFRoZSByZXN1bHQgc2hvdWxkIGJlIGFuIGFycmF5LiBJZiBub3QsIHRyeSBjb21tYSBwYXJzaW5nIGluc3RlYWQuXHJcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAvLyBUaGUgb2xkIGZvcm1hdCBkaWRuJ3QuXHJcbiAgICAgICAgICAgIGFyciA9IGRhdGEuYW5zd2VyLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJsYW5rQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgJCh0aGlzLmJsYW5rQXJyYXlbaV0pLmF0dHIoXCJ2YWx1ZVwiLCBhcnJbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBVc2UgdGhlIGZlZWRiYWNrIGZyb20gdGhlIHNlcnZlciwgb3IgcmVjb21wdXRlIGl0IGxvY2FsbHkuXHJcbiAgICAgICAgaWYgKCF0aGlzLmZlZWRiYWNrQXJyYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5RmVlZCA9IGRhdGEuZGlzcGxheUZlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdCA9IGRhdGEuY29ycmVjdDtcclxuICAgICAgICAgICAgdGhpcy5pc0NvcnJlY3RBcnJheSA9IGRhdGEuaXNDb3JyZWN0QXJyYXk7XHJcbiAgICAgICAgICAgIC8vIE9ubHkgcmVuZGVyIGlmIGFsbCB0aGUgZGF0YSBpcyBwcmVzZW50OyBsb2NhbCBzdG9yYWdlIG1pZ2h0IGhhdmUgb2xkIGRhdGEgbWlzc2luZyBzb21lIG9mIHRoZXNlIGl0ZW1zLlxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgdGhpcy5kaXNwbGF5RmVlZCAhPT0gXCJ1bmRlZmluZWRcIiAmJlxyXG4gICAgICAgICAgICAgICAgdHlwZW9mIHRoaXMuY29ycmVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJlxyXG4gICAgICAgICAgICAgICAgdHlwZW9mIHRoaXMuaXNDb3JyZWN0QXJyYXkgIT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckZlZWRiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrQ3VycmVudEFuc3dlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoZWNrTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgICAgIC8vIExvYWRzIHByZXZpb3VzIGFuc3dlcnMgZnJvbSBsb2NhbCBzdG9yYWdlIGlmIHRoZXkgZXhpc3RcclxuICAgICAgICB2YXIgc3RvcmVkRGF0YTtcclxuICAgICAgICBpZiAodGhpcy5ncmFkZXJhY3RpdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbGVuID0gbG9jYWxTdG9yYWdlLmxlbmd0aDtcclxuICAgICAgICBpZiAobGVuID4gMCkge1xyXG4gICAgICAgICAgICB2YXIgZXggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSgpKTtcclxuICAgICAgICAgICAgaWYgKGV4ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlZERhdGEgPSBKU09OLnBhcnNlKGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0gc3RvcmVkRGF0YS5hbnN3ZXI7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBlcnJvciB3aGlsZSBwYXJzaW5nOyBsaWtlbHkgZHVlIHRvIGJhZCB2YWx1ZSBzdG9yZWQgaW4gc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSgpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RvcmVBbnN3ZXJzKHN0b3JlZERhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0TG9jYWxTdG9yYWdlKGRhdGEpIHtcclxuICAgICAgICBsZXQga2V5ID0gdGhpcy5sb2NhbFN0b3JhZ2VLZXkoKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0N1cnJlbnRBbnN3ZXIoKSB7XHJcbiAgICAgICAgLy8gU3RhcnQgb2YgdGhlIGV2YWx1YXRpb24gY2hhaW5cclxuICAgICAgICB0aGlzLmlzQ29ycmVjdEFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5RmVlZCA9IFtdO1xyXG4gICAgICAgIHRoaXMuZ2l2ZW5fYXJyID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJsYW5rQXJyYXkubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHRoaXMuZ2l2ZW5fYXJyLnB1c2godGhpcy5ibGFua0FycmF5W2ldLnZhbHVlKTtcclxuICAgICAgICBpZiAodGhpcy51c2VSdW5lc3RvbmVTZXJ2aWNlcykge1xyXG4gICAgICAgICAgICBpZiAoZUJvb2tDb25maWcuZW5hYmxlQ29tcGFyZU1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZUNvbXBhcmVCdXR0b24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBHcmFkZSBsb2NhbGx5IGlmIHdlIGNhbid0IGFzayB0aGUgc2VydmVyIHRvIGdyYWRlLlxyXG4gICAgICAgIGlmICh0aGlzLmZlZWRiYWNrQXJyYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5ldmFsdWF0ZUFuc3dlcnMoKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJGZWVkYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBsb2dDdXJyZW50QW5zd2VyKCkge1xyXG4gICAgICAgIGxldCBhbnN3ZXIgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdpdmVuX2Fycik7XHJcbiAgICAgICAgLy8gU2F2ZSB0aGUgYW5zd2VyIGxvY2FsbHkuXHJcbiAgICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBhbnN3ZXI6IGFuc3dlcixcclxuICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy5sb2dCb29rRXZlbnQoe1xyXG4gICAgICAgICAgICBldmVudDogXCJmaWxsYlwiLFxyXG4gICAgICAgICAgICBhY3Q6IGFuc3dlcixcclxuICAgICAgICAgICAgYW5zd2VyOiBhbnN3ZXIsXHJcbiAgICAgICAgICAgIGNvcnJlY3Q6IHRoaXMuY29ycmVjdCA/IFwiVFwiIDogXCJGXCIsXHJcbiAgICAgICAgICAgIGRpdl9pZDogdGhpcy5kaXZpZCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIXRoaXMuZmVlZGJhY2tBcnJheSkge1xyXG4gICAgICAgICAgICAvLyBPbiBzdWNjZXNzLCB1cGRhdGUgdGhlIGZlZWRiYWNrIGZyb20gdGhlIHNlcnZlcidzIGdyYWRlLlxyXG4gICAgICAgICAgICB0aGlzLnNldExvY2FsU3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBhbnN3ZXI6IGFuc3dlcixcclxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogZGF0YS50aW1lc3RhbXAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNvcnJlY3QgPSBkYXRhLmNvcnJlY3Q7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUZlZWQgPSBkYXRhLmRpc3BsYXlGZWVkO1xyXG4gICAgICAgICAgICB0aGlzLmlzQ29ycmVjdEFycmF5ID0gZGF0YS5pc0NvcnJlY3RBcnJheTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJGZWVkYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICA9PT0gRXZhbHVhdGlvbiBvZiBhbnN3ZXIgYW5kID09PVxyXG4gICAgPT09ICAgICBkaXNwbGF5IGZlZWRiYWNrICAgICA9PT1cclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICAvLyBJbnB1dHM6XHJcbiAgICAvL1xyXG4gICAgLy8gLSBTdHJpbmdzIGVudGVyZWQgYnkgdGhlIHN0dWRlbnQgaW4gYGB0aGlzLmJsYW5rQXJyYXlbaV0udmFsdWVgYC5cclxuICAgIC8vIC0gRmVlZGJhY2sgaW4gYGB0aGlzLmZlZWRiYWNrQXJyYXlgYC5cclxuICAgIC8vXHJcbiAgICAvLyBPdXRwdXRzOlxyXG4gICAgLy9cclxuICAgIC8vIC0gYGB0aGlzLmRpc3BsYXlGZWVkYGAgaXMgYW4gYXJyYXkgb2YgSFRNTCBmZWVkYmFjay5cclxuICAgIC8vIC0gYGB0aGlzLmlzQ29ycmVjdEFycmF5YGAgaXMgYW4gYXJyYXkgb2YgdHJ1ZSwgZmFsc2UsIG9yIG51bGwgKHRoZSBxdWVzdGlvbiB3YXNuJ3QgYW5zd2VyZWQpLlxyXG4gICAgLy8gLSBgYHRoaXMuY29ycmVjdGBgIGlzIHRydWUsIGZhbHNlLCBvciBudWxsICh0aGUgcXVlc3Rpb24gd2Fzbid0IGFuc3dlcmVkKS5cclxuICAgIGV2YWx1YXRlQW5zd2VycygpIHtcclxuICAgICAgICAvLyBLZWVwIHRyYWNrIGlmIGFsbCBhbnN3ZXJzIGFyZSBjb3JyZWN0IG9yIG5vdC5cclxuICAgICAgICB0aGlzLmNvcnJlY3QgPSB0cnVlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ibGFua0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBnaXZlbiA9IHRoaXMuYmxhbmtBcnJheVtpXS52YWx1ZTtcclxuICAgICAgICAgICAgLy8gSWYgdGhpcyBibGFuayBpcyBlbXB0eSwgcHJvdmlkZSBubyBmZWVkYmFjayBmb3IgaXQuXHJcbiAgICAgICAgICAgIGlmIChnaXZlbiA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvcnJlY3RBcnJheS5wdXNoKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RmVlZC5wdXNoKCQuaTE4bihcIm1zZ19ub19hbnN3ZXJcIikpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBMb29rIHRocm91Z2ggYWxsIGZlZWRiYWNrIGZvciB0aGlzIGJsYW5rLiBUaGUgbGFzdCBlbGVtZW50IGluIHRoZSBhcnJheSBhbHdheXMgbWF0Y2hlcy4gSWYgbm8gZmVlZGJhY2sgZm9yIHRoaXMgYmxhbmsgZXhpc3RzLCB1c2UgYW4gZW1wdHkgbGlzdC5cclxuICAgICAgICAgICAgICAgIHZhciBmYmwgPSB0aGlzLmZlZWRiYWNrQXJyYXlbaV0gfHwgW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGZibC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSBsYXN0IGl0ZW0gb2YgZmVlZGJhY2sgYWx3YXlzIG1hdGNoZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGogPT09IGZibC5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUZlZWQucHVzaChmYmxbal1bXCJmZWVkYmFja1wiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgcmVnZXhwLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwicmVnZXhcIiBpbiBmYmxbal0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhdHQgPSBSZWdFeHAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYmxbal1bXCJyZWdleFwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZibFtqXVtcInJlZ2V4RmxhZ3NcIl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhdHQudGVzdChnaXZlbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUZlZWQucHVzaChmYmxbal1bXCJmZWVkYmFja1wiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBudW1iZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KFwibnVtYmVyXCIgaW4gZmJsW2pdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFttaW4sIG1heF0gPSBmYmxbal1bXCJudW1iZXJcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIGdpdmVuIHN0cmluZyB0byBhIG51bWJlci4gV2hpbGUgdGhlcmUgYXJlIGBsb3RzIG9mIHdheXMgPGh0dHBzOi8vY29kZXJ3YWxsLmNvbS9wLzV0bGhtdy9jb252ZXJ0aW5nLXN0cmluZ3MtdG8tbnVtYmVyLWluLWphdmFzY3JpcHQtcGl0ZmFsbHM+YF8gdG8gZG8gdGhpczsgdGhpcyB2ZXJzaW9uIHN1cHBvcnRzIG90aGVyIGJhc2VzIChoZXgvYmluYXJ5L29jdGFsKSBhcyB3ZWxsIGFzIGZsb2F0cy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdHVhbCA9ICtnaXZlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdHVhbCA+PSBtaW4gJiYgYWN0dWFsIDw9IG1heCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RmVlZC5wdXNoKGZibFtqXVtcImZlZWRiYWNrXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gVGhlIGFuc3dlciBpcyBjb3JyZWN0IGlmIGl0IG1hdGNoZWQgdGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhlIGFycmF5LiBBIHNwZWNpYWwgY2FzZTogaWYgb25seSBvbmUgYW5zd2VyIGlzIHByb3ZpZGVkLCBjb3VudCBpdCB3cm9uZzsgdGhpcyBpcyBhIG1pc2Zvcm1lZCBwcm9ibGVtLlxyXG4gICAgICAgICAgICAgICAgbGV0IGlzX2NvcnJlY3QgPSBqID09PSAwICYmIGZibC5sZW5ndGggPiAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvcnJlY3RBcnJheS5wdXNoKGlzX2NvcnJlY3QpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc19jb3JyZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wZXJjZW50ID1cclxuICAgICAgICAgICAgdGhpcy5pc0NvcnJlY3RBcnJheS5maWx0ZXIoQm9vbGVhbikubGVuZ3RoIC8gdGhpcy5ibGFua0FycmF5Lmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJGZWVkYmFjaygpIHtcclxuICAgICAgICBpZiAodGhpcy5jb3JyZWN0KSB7XHJcbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuYXR0cihcImNsYXNzXCIsIFwiYWxlcnQgYWxlcnQtaW5mb1wiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJsYW5rQXJyYXkubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICQodGhpcy5ibGFua0FycmF5W2pdKS5yZW1vdmVDbGFzcyhcImlucHV0LXZhbGlkYXRpb24tZXJyb3JcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXNwbGF5RmVlZCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RmVlZCA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJsYW5rQXJyYXkubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ29ycmVjdEFycmF5W2pdICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLmJsYW5rQXJyYXlbal0pLmFkZENsYXNzKFwiaW5wdXQtdmFsaWRhdGlvbi1lcnJvclwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLmJsYW5rQXJyYXlbal0pLnJlbW92ZUNsYXNzKFwiaW5wdXQtdmFsaWRhdGlvbi1lcnJvclwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKHRoaXMuZmVlZEJhY2tEaXYpLmF0dHIoXCJjbGFzc1wiLCBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGZlZWRiYWNrX2h0bWwgPSBcIjx1bD5cIjtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGlzcGxheUZlZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZmVlZGJhY2tfaHRtbCArPSBcIjxsaT5cIiArIHRoaXMuZGlzcGxheUZlZWRbaV0gKyBcIjwvbGk+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZlZWRiYWNrX2h0bWwgKz0gXCI8L3VsPlwiO1xyXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgbGlzdCBpZiBpdCdzIGp1c3Qgb25lIGVsZW1lbnQuXHJcbiAgICAgICAgaWYgKHRoaXMuZGlzcGxheUZlZWQubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgZmVlZGJhY2tfaHRtbCA9IGZlZWRiYWNrX2h0bWwuc2xpY2UoXHJcbiAgICAgICAgICAgICAgICBcIjx1bD48bGk+XCIubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgLVwiPC9saT48L3VsPlwiLmxlbmd0aFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZlZWRCYWNrRGl2LmlubmVySFRNTCA9IGZlZWRiYWNrX2h0bWw7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBNYXRoSmF4ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIE1hdGhKYXguSHViLlF1ZXVlKFtcIlR5cGVzZXRcIiwgTWF0aEpheC5IdWJdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICA9PT0gRnVuY3Rpb25zIGZvciBjb21wYXJlIGJ1dHRvbiA9PT1cclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgZW5hYmxlQ29tcGFyZUJ1dHRvbigpIHtcclxuICAgICAgICB0aGlzLmNvbXBhcmVCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbXBhcmVGSVRCQW5zd2VycygpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IHt9O1xyXG4gICAgICAgIGRhdGEuZGl2X2lkID0gdGhpcy5kaXZpZDtcclxuICAgICAgICBkYXRhLmNvdXJzZSA9IGVCb29rQ29uZmlnLmNvdXJzZTtcclxuICAgICAgICBqUXVlcnkuZ2V0KFxyXG4gICAgICAgICAgICBlQm9va0NvbmZpZy5hamF4VVJMICsgXCJnZXR0b3AxMEFuc3dlcnNcIixcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgdGhpcy5jb21wYXJlRklUQlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb21wYXJlRklUQihkYXRhLCBzdGF0dXMsIHdoYXRldmVyKSB7XHJcbiAgICAgICAgdmFyIGFuc3dlcnMgPSBldmFsKGRhdGEpWzBdO1xyXG4gICAgICAgIHZhciBtaXNjID0gZXZhbChkYXRhKVsxXTtcclxuICAgICAgICB2YXIgYm9keSA9IFwiPHRhYmxlPlwiO1xyXG4gICAgICAgIGJvZHkgKz0gXCI8dHI+PHRoPkFuc3dlcjwvdGg+PHRoPkNvdW50PC90aD48L3RyPlwiO1xyXG4gICAgICAgIGZvciAodmFyIHJvdyBpbiBhbnN3ZXJzKSB7XHJcbiAgICAgICAgICAgIGJvZHkgKz1cclxuICAgICAgICAgICAgICAgIFwiPHRyPjx0ZD5cIiArXHJcbiAgICAgICAgICAgICAgICBhbnN3ZXJzW3Jvd10uYW5zd2VyICtcclxuICAgICAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICAgICAgYW5zd2Vyc1tyb3ddLmNvdW50ICtcclxuICAgICAgICAgICAgICAgIFwiIHRpbWVzPC90ZD48L3RyPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib2R5ICs9IFwiPC90YWJsZT5cIjtcclxuICAgICAgICBpZiAobWlzY1tcInlvdXJwY3RcIl0gIT09IFwidW5hdmFpbGFibGVcIikge1xyXG4gICAgICAgICAgICBib2R5ICs9XHJcbiAgICAgICAgICAgICAgICBcIjxiciAvPjxwPllvdSBoYXZlIFwiICtcclxuICAgICAgICAgICAgICAgIG1pc2NbXCJ5b3VycGN0XCJdICtcclxuICAgICAgICAgICAgICAgIFwiJSBjb3JyZWN0IGZvciBhbGwgcXVlc3Rpb25zPC9wPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHRtbCA9XHJcbiAgICAgICAgICAgIFwiPGRpdiBjbGFzcz0nbW9kYWwgZmFkZSc+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICA8ZGl2IGNsYXNzPSdtb2RhbC1kaWFsb2cgY29tcGFyZS1tb2RhbCc+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtY29udGVudCc+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWhlYWRlcic+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2Nsb3NlJyBkYXRhLWRpc21pc3M9J21vZGFsJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+JnRpbWVzOzwvYnV0dG9uPlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgICAgICAgICAgPGg0IGNsYXNzPSdtb2RhbC10aXRsZSc+VG9wIEFuc3dlcnM8L2g0PlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgICAgICA8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtYm9keSc+XCIgK1xyXG4gICAgICAgICAgICBib2R5ICtcclxuICAgICAgICAgICAgXCIgICAgICAgICAgICA8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgIFwiICAgICAgICA8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgIFwiICAgIDwvZGl2PlwiICtcclxuICAgICAgICAgICAgXCI8L2Rpdj5cIjtcclxuICAgICAgICB2YXIgZWwgPSAkKGh0bWwpO1xyXG4gICAgICAgIGVsLm1vZGFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZUludGVyYWN0aW9uKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ibGFua0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmxhbmtBcnJheVtpXS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PSBGaW5kIHRoZSBjdXN0b20gSFRNTCB0YWdzIGFuZCA9PVxyXG49PSAgIGV4ZWN1dGUgb3VyIGNvZGUgb24gdGhlbSAgICA9PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4kKGRvY3VtZW50KS5iaW5kKFwicnVuZXN0b25lOmxvZ2luLWNvbXBsZXRlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCJbZGF0YS1jb21wb25lbnQ9ZmlsbGludGhlYmxhbmtdXCIpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgdmFyIG9wdHMgPSB7XHJcbiAgICAgICAgICAgIG9yaWc6IHRoaXMsXHJcbiAgICAgICAgICAgIHVzZVJ1bmVzdG9uZVNlcnZpY2VzOiBlQm9va0NvbmZpZy51c2VSdW5lc3RvbmVTZXJ2aWNlcyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmNsb3Nlc3QoXCJbZGF0YS1jb21wb25lbnQ9dGltZWRBc3Nlc3NtZW50XVwiKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGVsZW1lbnQgZXhpc3RzIHdpdGhpbiBhIHRpbWVkIGNvbXBvbmVudCwgZG9uJ3QgcmVuZGVyIGl0IGhlcmVcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIEZJVEJMaXN0W3RoaXMuaWRdID0gbmV3IEZJVEIob3B0cyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICAgICAgYEVycm9yIHJlbmRlcmluZyBGaWxsIGluIHRoZSBCbGFuayBQcm9ibGVtICR7dGhpcy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgRGV0YWlsczogJHtlcnJ9YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuIiwiaW1wb3J0IEZJVEIgZnJvbSBcIi4vZml0Yi5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lZEZJVEIgZXh0ZW5kcyBGSVRCIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcclxuICAgICAgICBzdXBlcihvcHRzKTtcclxuICAgICAgICB0aGlzLnJlbmRlclRpbWVkSWNvbih0aGlzLmlucHV0RGl2KTtcclxuICAgICAgICB0aGlzLmhpZGVCdXR0b25zKCk7XHJcbiAgICAgICAgdGhpcy5uZWVkc1JlaW5pdGlhbGl6YXRpb24gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaGlkZUJ1dHRvbnMoKSB7XHJcbiAgICAgICAgJCh0aGlzLnN1Ym1pdEJ1dHRvbikuaGlkZSgpO1xyXG4gICAgICAgICQodGhpcy5jb21wYXJlQnV0dG9uKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJUaW1lZEljb24oY29tcG9uZW50KSB7XHJcbiAgICAgICAgLy8gcmVuZGVycyB0aGUgY2xvY2sgaWNvbiBvbiB0aW1lZCBjb21wb25lbnRzLiAgICBUaGUgY29tcG9uZW50IHBhcmFtZXRlclxyXG4gICAgICAgIC8vIGlzIHRoZSBlbGVtZW50IHRoYXQgdGhlIGljb24gc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxyXG4gICAgICAgIHZhciB0aW1lSWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdmFyIHRpbWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAkKHRpbWVJY29uKS5hdHRyKHtcclxuICAgICAgICAgICAgc3JjOiBcIi4uL19zdGF0aWMvY2xvY2sucG5nXCIsXHJcbiAgICAgICAgICAgIHN0eWxlOiBcIndpZHRoOjE1cHg7aGVpZ2h0OjE1cHhcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aW1lSWNvbkRpdi5jbGFzc05hbWUgPSBcInRpbWVUaXBcIjtcclxuICAgICAgICB0aW1lSWNvbkRpdi50aXRsZSA9IFwiXCI7XHJcbiAgICAgICAgdGltZUljb25EaXYuYXBwZW5kQ2hpbGQodGltZUljb24pO1xyXG4gICAgICAgICQoY29tcG9uZW50KS5wcmVwZW5kKHRpbWVJY29uRGl2KTtcclxuICAgIH1cclxuICAgIGNoZWNrQ29ycmVjdFRpbWVkKCkge1xyXG4gICAgICAgIC8vIFJldHVybnMgaWYgdGhlIHF1ZXN0aW9uIHdhcyBjb3JyZWN0LCBpbmNvcnJlY3QsIG9yIHNraXBwZWQgKHJldHVybiBudWxsIGluIHRoZSBsYXN0IGNhc2UpXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmNvcnJlY3QpIHtcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVFwiO1xyXG4gICAgICAgICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRlwiO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGlkZUZlZWRiYWNrKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ibGFua0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICQodGhpcy5ibGFua0FycmF5W2ldKS5yZW1vdmVDbGFzcyhcImlucHV0LXZhbGlkYXRpb24tZXJyb3JcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmVlZEJhY2tEaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJlaW5pdGlhbGl6ZUxpc3RlbmVycygpIHtcclxuICAgICAgICBmb3IgKGxldCBibGFuayBvZiB0aGlzLmJsYW5rQXJyYXkpIHtcclxuICAgICAgICAgICAgJChibGFuaykuY2hhbmdlKHRoaXMucmVjb3JkQW5zd2VyZWQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgd2luZG93LmNvbXBvbmVudF9mYWN0b3J5ID0ge307XHJcbn1cclxud2luZG93LmNvbXBvbmVudF9mYWN0b3J5LmZpbGxpbnRoZWJsYW5rID0gZnVuY3Rpb24gKG9wdHMpIHtcclxuICAgIGlmIChvcHRzLnRpbWVkKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUaW1lZEZJVEIob3B0cyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IEZJVEIob3B0cyk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
