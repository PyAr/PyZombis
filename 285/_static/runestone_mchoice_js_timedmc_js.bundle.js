(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_mchoice_js_timedmc_js"],{

/***/ 89674:
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./runestone/mchoice/css/mchoice.css ***!
  \*********************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".runestone label p {\n    display: inline;\n}\n", "",{"version":3,"sources":["webpack://./runestone/mchoice/css/mchoice.css"],"names":[],"mappings":"AAAA;IACI,eAAe;AACnB","sourcesContent":[".runestone label p {\n    display: inline;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 42099:
/*!*******************************************!*\
  !*** ./runestone/mchoice/css/mchoice.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_mchoice_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./mchoice.css */ 89674);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_mchoice_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_mchoice_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ 77147:
/*!*****************************************!*\
  !*** ./runestone/mchoice/js/mchoice.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mcList": () => (/* binding */ mcList),
/* harmony export */   "default": () => (/* binding */ MultipleChoice)
/* harmony export */ });
/* harmony import */ var _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase.js */ 2568);
/* harmony import */ var _css_mchoice_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/mchoice.css */ 42099);
/*==========================================
========      Master mchoice.js     =========
============================================
===  This file contains the JS for the   ===
=== Runestone multiple choice component. ===
============================================
===              Created By              ===
===           Isaiah Mayerchak           ===
===                 and                  ===
===             Kirby Olson              ===
===                6/4/15                ===
==========================================*/


//import "./../styles/runestone-custom-sphinx-bootstrap.css";


var mcList = {}; // Multiple Choice dictionary

// MC constructor
class MultipleChoice extends _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(opts) {
        super(opts);
        opts = opts || {};
        var orig = opts.orig; // entire <ul> element
        this.origElem = orig;
        this.useRunestoneServices = opts.useRunestoneServices;
        this.multipleanswers = false;
        this.divid = orig.id;
        if ($(this.origElem).data("multipleanswers") === true) {
            this.multipleanswers = true;
        }
        this.children = this.origElem.childNodes;
        this.random = false;
        if ($(this.origElem).is("[data-random]")) {
            this.random = true;
        }
        this.correct = null;
        this.answerList = [];
        this.correctList = [];
        this.correctIndexList = [];
        this.feedbackList = [];
        this.question = null;
        this.caption = "Multiple Choice";
        this.findAnswers();
        this.findQuestion();
        this.findFeedbacks();
        this.createCorrectList();
        this.createMCForm();
        this.addCaption("runestone");
        this.checkServer("mChoice", true);
    }

    /*====================================
    ==== Functions parsing variables  ====
    ====  out of intermediate HTML    ====
    ====================================*/
    findQuestion() {
        var delimiter;
        for (var i = 0; i < this.origElem.childNodes.length; i++) {
            if (this.origElem.childNodes[i].nodeName === "LI") {
                delimiter = this.origElem.childNodes[i].outerHTML;
                break;
            }
        }
        var fulltext = $(this.origElem).html();
        var temp = fulltext.split(delimiter);
        this.question = temp[0];
    }

    findAnswers() {
        // Creates answer objects and pushes them to answerList
        // format: ID, Correct bool, Content (text)
        var ChildAnswerList = [];
        for (var i = 0; i < this.children.length; i++) {
            if ($(this.children[i]).is("[data-component=answer]")) {
                ChildAnswerList.push(this.children[i]);
            }
        }
        for (var j = 0; j < ChildAnswerList.length; j++) {
            var answer_id = $(ChildAnswerList[j]).attr("id");
            var is_correct = false;
            if ($(ChildAnswerList[j]).is("[data-correct]")) {
                // If data-correct attribute exists, answer is correct
                is_correct = true;
            }
            var answer_text = $(ChildAnswerList[j]).html();
            var answer_object = {
                id: answer_id,
                correct: is_correct,
                content: answer_text,
            };
            this.answerList.push(answer_object);
        }
    }

    findFeedbacks() {
        for (var i = 0; i < this.children.length; i++) {
            if ($(this.children[i]).is("[data-component=feedback]")) {
                this.feedbackList.push(this.children[i].innerHTML);
            }
        }
    }

    createCorrectList() {
        // Creates array that holds the ID"s of correct answers
        // Also populates an array that holds the indeces of correct answers
        for (var i = 0; i < this.answerList.length; i++) {
            if (this.answerList[i].correct) {
                this.correctList.push(this.answerList[i].id);
                this.correctIndexList.push(i);
            }
        }
    }

    /*===========================================
    ====   Functions generating final HTML   ====
    ===========================================*/
    createMCForm() {
        this.renderMCContainer();
        this.renderMCForm(); // renders the form with options and buttons
        this.renderMCfeedbackDiv();
        // replaces intermediate HTML with rendered HTML
        $(this.origElem).replaceWith(this.containerDiv);
    }

    renderMCContainer() {
        this.containerDiv = document.createElement("div");
        $(this.containerDiv).html(this.question);
        $(this.containerDiv).addClass(this.origElem.getAttribute("class"));
        this.containerDiv.id = this.divid;
    }

    renderMCForm() {
        this.optsForm = document.createElement("form");
        this.optsForm.id = this.divid + "_form";
        $(this.optsForm).attr({
            method: "get",
            action: "",
            onsubmit: "return false;",
        });
        // generate form options
        this.renderMCFormOpts();
        this.renderMCFormButtons();
        // Append the form to the container
        this.containerDiv.appendChild(this.optsForm);
    }

    renderMCFormOpts() {
        // creates input DOM elements
        this.optionArray = []; // array with an object for each option containing the input and label for that option
        var input_type = "radio";
        if (this.multipleanswers) {
            input_type = "checkbox";
        }
        // this.indexArray is used to index through the answers
        // it is just 0-n normally, but the order is shuffled if the random option is present
        this.indexArray = [];
        for (var i = 0; i < this.answerList.length; i++) {
            this.indexArray.push(i);
        }
        if (this.random) {
            this.randomizeAnswers();
        }
        let self = this;
        let answerFunc = function () {
            self.isAnswered = true;
        };
        for (var j = 0; j < this.answerList.length; j++) {
            var k = this.indexArray[j];
            var optid = this.divid + "_opt_" + k;
            // Create the label for the input
            var label = document.createElement("label");
            // If the content begins with a ``<p>``, put the label inside of it. (Sphinx 2.0 puts all content in a ``<p>``, while Sphinx 1.8 doesn't).
            var content = this.answerList[k].content;
            var prefix = "";
            if (content.startsWith("<p>")) {
                prefix = "<p>";
                content = content.slice(3);
            }
            $(label).html(
                `${prefix}<input type="${input_type}" name="group1" value=${k} id=${optid}>${String.fromCharCode(
                    "A".charCodeAt(0) + j
                )}. ${content}`
            );
            // create the object to store in optionArray
            var optObj = {
                input: $(label).find("input")[0],
                label: label,
            };
            optObj.input.onclick = answerFunc;

            this.optionArray.push(optObj);
            // add the option to the form
            this.optsForm.appendChild(label);
            this.optsForm.appendChild(document.createElement("br"));
        }
    }

    renderMCFormButtons() {
        // submit and compare me buttons
        // Create submit button
        this.submitButton = document.createElement("button");
        this.submitButton.textContent = "Check Me";
        $(this.submitButton).attr({
            class: "btn btn-success",
            name: "do answer",
            type: "button",
        });
        if (this.multipleanswers) {
            this.submitButton.addEventListener(
                "click",
                function () {
                    this.processMCMASubmission(true);
                }.bind(this),
                false
            );
        } else {
            this.submitButton.addEventListener(
                "click",
                function (ev) {
                    ev.preventDefault();
                    this.processMCMFSubmission(true);
                }.bind(this),
                false
            );
        } // end else
        this.optsForm.appendChild(this.submitButton);
        // Create compare button
        if (this.useRunestoneServices) {
            this.compareButton = document.createElement("button");
            $(this.compareButton).attr({
                class: "btn btn-default",
                id: this.divid + "_bcomp",
                disabled: "",
                name: "compare",
            });
            this.compareButton.textContent = "Compare me";
            this.compareButton.addEventListener(
                "click",
                function () {
                    this.compareAnswers(this.divid);
                }.bind(this),
                false
            );
            this.optsForm.appendChild(this.compareButton);
        }
    }

    renderMCfeedbackDiv() {
        this.feedBackDiv = document.createElement("div");
        this.feedBackDiv.id = this.divid + "_feedback";
        this.containerDiv.appendChild(document.createElement("br"));
        this.containerDiv.appendChild(this.feedBackDiv);
    }

    randomizeAnswers() {
        // Makes the ordering of the answer choices random
        var currentIndex = this.indexArray.length,
            temporaryValue,
            randomIndex;
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = this.indexArray[currentIndex];
            this.indexArray[currentIndex] = this.indexArray[randomIndex];
            this.indexArray[randomIndex] = temporaryValue;
            var temporaryFeedback = this.feedbackList[currentIndex];
            this.feedbackList[currentIndex] = this.feedbackList[randomIndex];
            this.feedbackList[randomIndex] = temporaryFeedback;
        }
    }

    /*===================================
    === Checking/loading from storage ===
    ===================================*/
    restoreAnswers(data) {
        // Restore answers from storage retrieval done in RunestoneBase
        // sometimes data.answer can be null
        if (!data.answer) {
            data.answer = "";
        }
        var answers = data.answer.split(",");
        for (var a = 0; a < answers.length; a++) {
            var index = answers[a];
            for (var b = 0; b < this.optionArray.length; b++) {
                if (this.optionArray[b].input.value == index) {
                    $(this.optionArray[b].input).attr("checked", "true");
                }
            }
        }
        if (this.multipleanswers) {
            this.processMCMASubmission(false);
        } else {
            this.processMCMFSubmission(false);
        }
    }

    checkLocalStorage() {
        // Repopulates MCMA questions with a user's previous answers,
        // which were stored into local storage.
        var storedData;
        var answers;
        if (this.graderactive) {
            return;
        }
        var len = localStorage.length;
        if (len > 0) {
            var ex = localStorage.getItem(this.localStorageKey());
            if (ex !== null) {
                try {
                    storedData = JSON.parse(ex);
                    answers = storedData.answer.split(",");
                } catch (err) {
                    // error while parsing; likely due to bad value stored in storage
                    console.log(err.message);
                    localStorage.removeItem(this.localStorageKey());
                    return;
                }
                for (var a = 0; a < answers.length; a++) {
                    var index = answers[a];
                    for (var b = 0; b < this.optionArray.length; b++) {
                        if (this.optionArray[b].input.value == index) {
                            $(this.optionArray[b].input).attr(
                                "checked",
                                "true"
                            );
                        }
                    }
                }
                if (this.useRunestoneServices) {
                    this.enableMCComparison();
                    this.getSubmittedOpts(); // to populate givenlog for logging
                    if (this.multipleanswers) {
                        this.logMCMAsubmission();
                    } else {
                        this.logMCMFsubmission();
                    }
                }
            }
        }
    }

    setLocalStorage(data) {
        var timeStamp = new Date();
        var storageObj = {
            answer: data.answer,
            timestamp: timeStamp,
            correct: data.correct,
        };
        localStorage.setItem(
            this.localStorageKey(),
            JSON.stringify(storageObj)
        );
    }

    /*===============================
    === Processing MC Submissions ===
    ===============================*/
    processMCMASubmission(logFlag) {
        // Called when the submit button is clicked
        this.getSubmittedOpts(); // make sure this.givenArray is populated
        this.scoreMCMASubmission();
        this.setLocalStorage({
            correct: this.correct ? "T" : "F",
            answer: this.givenArray.join(","),
        });
        if (logFlag) {
            this.logMCMAsubmission();
        }
        this.renderMCMAFeedBack();
        if (this.useRunestoneServices) {
            this.enableMCComparison();
        }
    }

    getSubmittedOpts() {
        var given;
        this.singlefeedback = ""; // Used for MCMF questions
        this.feedbackString = ""; // Used for MCMA questions
        this.givenArray = [];
        this.givenlog = "";
        var buttonObjs = this.optsForm.elements.group1;
        for (var i = 0; i < buttonObjs.length; i++) {
            if (buttonObjs[i].checked) {
                given = buttonObjs[i].value;
                this.givenArray.push(given);
                this.feedbackString += `<li value="${i + 1}">${this.feedbackList[i]
                    }</li>`;
                this.givenlog += given + ",";
                this.singlefeedback = this.feedbackList[i];
            }
        }
        this.givenArray.sort();
    }

    checkCurrentAnswer() {
        this.getSubmittedOpts();
        if (this.multipleanswers) {
            this.scoreMCMASubmission();
        } else {
            this.scoreMCMFSubmission();
        }
    }

    logCurrentAnswer() {
        if (this.multipleanswers) {
            this.logMCMAsubmission();
        } else {
            this.logMCMFsubmission();
        }
    }

    renderFeedback() {
        if (this.multipleanswers) {
            this.renderMCMAFeedBack();
        } else {
            this.renderMCMFFeedback();
        }
    }
    scoreMCMASubmission() {
        this.correctCount = 0;
        var correctIndex = 0;
        var givenIndex = 0;
        while (
            correctIndex < this.correctIndexList.length &&
            givenIndex < this.givenArray.length
        ) {
            if (
                this.givenArray[givenIndex] <
                this.correctIndexList[correctIndex]
            ) {
                givenIndex++;
            } else if (
                this.givenArray[givenIndex] ==
                this.correctIndexList[correctIndex]
            ) {
                this.correctCount++;
                givenIndex++;
                correctIndex++;
            } else {
                correctIndex++;
            }
        }
        var numGiven = this.givenArray.length;
        var numCorrect = this.correctCount;
        var numNeeded = this.correctList.length;
        this.answer = this.givenArray.join(",");
        this.correct = numCorrect === numNeeded && numNeeded === numGiven;
        if (numGiven === numNeeded) {
            this.percent = numCorrect / numNeeded;
        } else {
            this.percent = numCorrect / Math.max(numGiven, numNeeded);
        }
    }

    logMCMAsubmission() {
        var answer = this.answer;
        var correct = this.correct;
        var logAnswer =
            "answer:" + answer + ":" + (correct == "T" ? "correct" : "no");
        this.logBookEvent({
            event: "mChoice",
            act: logAnswer,
            answer: answer,
            correct: correct,
            div_id: this.divid,
        });
    }

    renderMCMAFeedBack() {
        var answerStr = "answers";
        var numGiven = this.givenArray.length;
        if (numGiven === 1) {
            answerStr = "answer";
        }
        var numCorrect = this.correctCount;
        var numNeeded = this.correctList.length;
        var feedbackText = this.feedbackString;
        if (this.correct) {
            $(this.feedBackDiv).html(`✔️ <ol type="A">${feedbackText}</ul>`);
            $(this.feedBackDiv).attr("class", "alert alert-info");
        } else {
            $(this.feedBackDiv).html(
                `✖️ You gave ${numGiven} ${answerStr} and got ${numCorrect} correct of ${numNeeded} needed.<ol type="A">${feedbackText}</ul>`
            );
            $(this.feedBackDiv).attr("class", "alert alert-danger");
        }
    }

    processMCMFSubmission(logFlag) {
        // Called when the submit button is clicked
        this.getSubmittedOpts(); // make sure this.givenArray is populated
        this.scoreMCMFSubmission();
        this.setLocalStorage({
            correct: this.correct ? "T" : "F",
            answer: this.givenArray.join(","),
        });
        if (logFlag) {
            this.logMCMFsubmission();
        }
        this.renderMCMFFeedback();
        if (this.useRunestoneServices) {
            this.enableMCComparison();
        }
    }

    scoreMCMFSubmission() {
        if (this.givenArray[0] == this.correctIndexList[0]) {
            this.correct = true;
            this.percent = 1.0;
        } else if (this.givenArray[0] != null) {
            // if given is null then the question wasn"t answered and should be counted as skipped
            this.correct = false;
            this.percent = 0.0;
        }
    }

    logMCMFsubmission() {
        var answer = this.givenArray[0];
        var correct =
            this.givenArray[0] == this.correctIndexList[0] ? "T" : "F";
        var logAnswer =
            "answer:" + answer + ":" + (correct == "T" ? "correct" : "no"); // backward compatible
        this.logBookEvent({
            event: "mChoice",
            act: logAnswer,
            answer: answer,
            correct: correct,
            div_id: this.divid,
        });
    }

    renderMCMFFeedback() {
        let correct = this.givenArray[0] == this.correctIndexList[0];
        let feedbackText = this.singlefeedback;

        if (correct) {
            $(this.feedBackDiv).html("✔️ " + feedbackText);
            $(this.feedBackDiv).attr("class", "alert alert-info"); // use blue for better red/green blue color blindness
        } else {
            if (feedbackText == null) {
                feedbackText = "";
            }
            $(this.feedBackDiv).html("✖️ " + feedbackText);
            $(this.feedBackDiv).attr("class", "alert alert-danger");
        }
    }
    enableMCComparison() {
        if (eBookConfig.enableCompareMe) {
            this.compareButton.disabled = false;
        }
    }
    instructorMchoiceModal(data) {
        // data.reslist -- student and their answers
        // data.answerDict    -- answers and count
        // data.correct - correct answer
        var res = "<table><tr><th>Student</th><th>Answer(s)</th></tr>";
        for (var i in data) {
            res +=
                "<tr><td>" +
                data[i][0] +
                "</td><td>" +
                data[i][1] +
                "</td></tr>";
        }
        res += "</table>";
        return res;
    }
    compareModal(data, status, whatever) {
        var datadict = JSON.parse(data)[0];
        var answers = datadict.answerDict;
        var misc = datadict.misc;
        var kl = Object.keys(answers).sort();
        var body = "<table>";
        body += "<tr><th>Answer</th><th>Percent</th></tr>";
        var theClass = "";
        for (var k in kl) {
            if (kl[k] === misc.correct) {
                theClass = "success";
            } else {
                theClass = "info";
            }
            body +=
                "<tr><td>" + kl[k] + "</td><td class='compare-me-progress'>";
            var pct = answers[kl[k]] + "%";
            body += "<div class='progress'>";
            body +=
                "    <div class='progress-bar progress-bar-" +
                theClass +
                "' style='width:" +
                pct +
                ";'>" +
                pct;
            body += "    </div>";
            body += "</div></td></tr>";
        }
        body += "</table>";
        if (misc.yourpct !== "unavailable") {
            body +=
                "<br /><p>You have " +
                misc.yourpct +
                "% correct for all questions</p>";
        }
        if (datadict.reslist !== undefined) {
            body += this.instructorMchoiceModal(datadict.reslist);
        }
        var html =
            "<div class='modal fade'>" +
            "    <div class='modal-dialog compare-modal'>" +
            "        <div class='modal-content'>" +
            "            <div class='modal-header'>" +
            "                <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>" +
            "                <h4 class='modal-title'>Distribution of Answers</h4>" +
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
    compareAnswers() {
        var data = {};
        data.div_id = this.divid;
        data.course = eBookConfig.course;
        jQuery.get(
            eBookConfig.ajaxURL + "getaggregateresults",
            data,
            this.compareModal.bind(this)
        );
    }

    disableInteraction() {
        for (var i = 0; i < this.optionArray.length; i++) {
            this.optionArray[i].input.disabled = true;
        }
    }
}

/*=================================
== Find the custom HTML tags and ==
==   execute our code on them    ==
=================================*/
$(document).bind("runestone:login-complete", function () {
    $("[data-component=multiplechoice]").each(function (index) {
        // MC
        var opts = {
            orig: this,
            useRunestoneServices: eBookConfig.useRunestoneServices,
        };
        if ($(this).closest("[data-component=timedAssessment]").length == 0) {
            // If this element exists within a timed component, don't render it here
            mcList[this.id] = new MultipleChoice(opts);
        }
    });
});


/***/ }),

/***/ 95983:
/*!*****************************************!*\
  !*** ./runestone/mchoice/js/timedmc.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TimedMC)
/* harmony export */ });
/* harmony import */ var _mchoice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mchoice.js */ 77147);


class TimedMC extends _mchoice_js__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(opts) {
        super(opts);
        $(this.containerDiv).addClass("alert alert-warning runestone");
        this.needsReinitialization = true;
        this.renderTimedIcon(this.MCContainer);
        this.hideButtons(); // Don't show per-question buttons in a timed assessment
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
    hideButtons() {
        //Just hiding the buttons doesn't prevent submitting the form when entering is clicked
        //We need to completely disable the buttons
        $(this.submitButton).attr("disabled", "true");
        $(this.submitButton).hide();
        $(this.compareButton).hide();
    }

    // These methods override the methods in the base class. Called from renderFeedback()
    //
    renderMCMAFeedBack() {
        this.feedbackTimedMC();
    }
    renderMCMFFeedback(whatever, whateverr) {
        this.feedbackTimedMC();
    }
    feedbackTimedMC() {
        for (var i = 0; i < this.indexArray.length; i++) {
            var tmpindex = this.indexArray[i];
            $(this.feedBackEachArray[i]).text(
                String.fromCharCode(65 + i) + ". " + this.feedbackList[i]
            );
            var tmpid = this.answerList[tmpindex].id;
            if (this.correctList.indexOf(tmpid) >= 0) {
                this.feedBackEachArray[i].classList.add(
                    "alert",
                    "alert-success"
                );
            } else {
                this.feedBackEachArray[i].classList.add(
                    "alert",
                    "alert-danger"
                );
            }
        }
    }
    renderMCFormOpts() {
        super.renderMCFormOpts();
        this.feedBackEachArray = [];
        for (var j = 0; j < this.answerList.length; j++) {
            var k = this.indexArray[j];
            var feedBackEach = document.createElement("div");
            feedBackEach.id = this.divid + "_eachFeedback_" + k;
            feedBackEach.classList.add("eachFeedback");
            this.feedBackEachArray.push(feedBackEach);
            this.optsForm.appendChild(feedBackEach);
        }
    }
    checkCorrectTimedMCMA() {
        if (
            this.correctCount === this.correctList.length &&
            this.correctList.length === this.givenArray.length
        ) {
            this.correct = true;
        } else if (this.givenArray.length !== 0) {
            this.correct = false;
        } else {
            // question was skipped
            this.correct = null;
        }
        switch (this.correct) {
            case true:
                return "T";
            case false:
                return "F";
            default:
                return null;
        }
    }
    checkCorrectTimedMCMF() {
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
    checkCorrectTimed() {
        if (this.multipleanswers) {
            return this.checkCorrectTimedMCMA();
        } else {
            return this.checkCorrectTimedMCMF();
        }
    }
    hideFeedback() {
        for (var i = 0; i < this.feedBackEachArray.length; i++) {
            $(this.feedBackEachArray[i]).hide();
        }
    }

    reinitializeListeners() {
        let self = this;
        let answerFunc = function () {
            self.isAnswered = true;
        };
        for (let opt of this.optionArray) {
            opt.input.onclick = answerFunc;
        }
    }
}

if (typeof window.component_factory === "undefined") {
    window.component_factory = {};
}

window.component_factory.multiplechoice = function (opts) {
    if (opts.timed) {
        return new TimedMC(opts);
    } else {
        return new _mchoice_js__WEBPACK_IMPORTED_MODULE_0__.default(opts);
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL21jaG9pY2UvY3NzL21jaG9pY2UuY3NzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvbWNob2ljZS9jc3MvbWNob2ljZS5jc3M/ZTY2NSIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL21jaG9pY2UvanMvbWNob2ljZS5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL21jaG9pY2UvanMvdGltZWRtYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSw4REFBOEQsc0JBQXNCLEdBQUcsU0FBUyxvR0FBb0csVUFBVSw4Q0FBOEMsc0JBQXNCLEdBQUcscUJBQXFCO0FBQzFTO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQd0Q7QUFDL0YsWUFBK0Y7O0FBRS9GOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLHFGQUFPOzs7O0FBSXhCLGlFQUFlLDRGQUFjLE1BQU0sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWm5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkQ7QUFDN0Q7QUFDNEI7O0FBRXJCLGdCQUFnQjs7QUFFdkI7QUFDZSw2QkFBNkIsZ0VBQWE7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw0QkFBNEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNEJBQTRCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQ0FBbUM7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsbUJBQW1CLGdEQUFjO0FBQ2pDO0FBQ0EiLCJmaWxlIjoicnVuZXN0b25lX21jaG9pY2VfanNfdGltZWRtY19qcy5idW5kbGUuanM/dj1lNzUwY2MxZGM5MmEyMDIzMmM0YyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnJ1bmVzdG9uZSBsYWJlbCBwIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ydW5lc3RvbmUvbWNob2ljZS9jc3MvbWNob2ljZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ydW5lc3RvbmUgbGFiZWwgcCB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWNob2ljZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09PT09PT0gICAgICBNYXN0ZXIgbWNob2ljZS5qcyAgICAgPT09PT09PT09XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09ICBUaGlzIGZpbGUgY29udGFpbnMgdGhlIEpTIGZvciB0aGUgICA9PT1cbj09PSBSdW5lc3RvbmUgbXVsdGlwbGUgY2hvaWNlIGNvbXBvbmVudC4gPT09XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09ICAgICAgICAgICAgICBDcmVhdGVkIEJ5ICAgICAgICAgICAgICA9PT1cbj09PSAgICAgICAgICAgSXNhaWFoIE1heWVyY2hhayAgICAgICAgICAgPT09XG49PT0gICAgICAgICAgICAgICAgIGFuZCAgICAgICAgICAgICAgICAgID09PVxuPT09ICAgICAgICAgICAgIEtpcmJ5IE9sc29uICAgICAgICAgICAgICA9PT1cbj09PSAgICAgICAgICAgICAgICA2LzQvMTUgICAgICAgICAgICAgICAgPT09XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5pbXBvcnQgUnVuZXN0b25lQmFzZSBmcm9tIFwiLi4vLi4vY29tbW9uL2pzL3J1bmVzdG9uZWJhc2UuanNcIjtcbi8vaW1wb3J0IFwiLi8uLi9zdHlsZXMvcnVuZXN0b25lLWN1c3RvbS1zcGhpbngtYm9vdHN0cmFwLmNzc1wiO1xuaW1wb3J0IFwiLi4vY3NzL21jaG9pY2UuY3NzXCI7XG5cbmV4cG9ydCB2YXIgbWNMaXN0ID0ge307IC8vIE11bHRpcGxlIENob2ljZSBkaWN0aW9uYXJ5XG5cbi8vIE1DIGNvbnN0cnVjdG9yXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNdWx0aXBsZUNob2ljZSBleHRlbmRzIFJ1bmVzdG9uZUJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIob3B0cyk7XG4gICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgICB2YXIgb3JpZyA9IG9wdHMub3JpZzsgLy8gZW50aXJlIDx1bD4gZWxlbWVudFxuICAgICAgICB0aGlzLm9yaWdFbGVtID0gb3JpZztcbiAgICAgICAgdGhpcy51c2VSdW5lc3RvbmVTZXJ2aWNlcyA9IG9wdHMudXNlUnVuZXN0b25lU2VydmljZXM7XG4gICAgICAgIHRoaXMubXVsdGlwbGVhbnN3ZXJzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGl2aWQgPSBvcmlnLmlkO1xuICAgICAgICBpZiAoJCh0aGlzLm9yaWdFbGVtKS5kYXRhKFwibXVsdGlwbGVhbnN3ZXJzXCIpID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLm11bHRpcGxlYW5zd2VycyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMub3JpZ0VsZW0uY2hpbGROb2RlcztcbiAgICAgICAgdGhpcy5yYW5kb20gPSBmYWxzZTtcbiAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbSkuaXMoXCJbZGF0YS1yYW5kb21dXCIpKSB7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb3JyZWN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5hbnN3ZXJMaXN0ID0gW107XG4gICAgICAgIHRoaXMuY29ycmVjdExpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5jb3JyZWN0SW5kZXhMaXN0ID0gW107XG4gICAgICAgIHRoaXMuZmVlZGJhY2tMaXN0ID0gW107XG4gICAgICAgIHRoaXMucXVlc3Rpb24gPSBudWxsO1xuICAgICAgICB0aGlzLmNhcHRpb24gPSBcIk11bHRpcGxlIENob2ljZVwiO1xuICAgICAgICB0aGlzLmZpbmRBbnN3ZXJzKCk7XG4gICAgICAgIHRoaXMuZmluZFF1ZXN0aW9uKCk7XG4gICAgICAgIHRoaXMuZmluZEZlZWRiYWNrcygpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNvcnJlY3RMaXN0KCk7XG4gICAgICAgIHRoaXMuY3JlYXRlTUNGb3JtKCk7XG4gICAgICAgIHRoaXMuYWRkQ2FwdGlvbihcInJ1bmVzdG9uZVwiKTtcbiAgICAgICAgdGhpcy5jaGVja1NlcnZlcihcIm1DaG9pY2VcIiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09IEZ1bmN0aW9ucyBwYXJzaW5nIHZhcmlhYmxlcyAgPT09PVxuICAgID09PT0gIG91dCBvZiBpbnRlcm1lZGlhdGUgSFRNTCAgICA9PT09XG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICBmaW5kUXVlc3Rpb24oKSB7XG4gICAgICAgIHZhciBkZWxpbWl0ZXI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vcmlnRWxlbS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcmlnRWxlbS5jaGlsZE5vZGVzW2ldLm5vZGVOYW1lID09PSBcIkxJXCIpIHtcbiAgICAgICAgICAgICAgICBkZWxpbWl0ZXIgPSB0aGlzLm9yaWdFbGVtLmNoaWxkTm9kZXNbaV0ub3V0ZXJIVE1MO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBmdWxsdGV4dCA9ICQodGhpcy5vcmlnRWxlbSkuaHRtbCgpO1xuICAgICAgICB2YXIgdGVtcCA9IGZ1bGx0ZXh0LnNwbGl0KGRlbGltaXRlcik7XG4gICAgICAgIHRoaXMucXVlc3Rpb24gPSB0ZW1wWzBdO1xuICAgIH1cblxuICAgIGZpbmRBbnN3ZXJzKCkge1xuICAgICAgICAvLyBDcmVhdGVzIGFuc3dlciBvYmplY3RzIGFuZCBwdXNoZXMgdGhlbSB0byBhbnN3ZXJMaXN0XG4gICAgICAgIC8vIGZvcm1hdDogSUQsIENvcnJlY3QgYm9vbCwgQ29udGVudCAodGV4dClcbiAgICAgICAgdmFyIENoaWxkQW5zd2VyTGlzdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMuY2hpbGRyZW5baV0pLmlzKFwiW2RhdGEtY29tcG9uZW50PWFuc3dlcl1cIikpIHtcbiAgICAgICAgICAgICAgICBDaGlsZEFuc3dlckxpc3QucHVzaCh0aGlzLmNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IENoaWxkQW5zd2VyTGlzdC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgdmFyIGFuc3dlcl9pZCA9ICQoQ2hpbGRBbnN3ZXJMaXN0W2pdKS5hdHRyKFwiaWRcIik7XG4gICAgICAgICAgICB2YXIgaXNfY29ycmVjdCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKCQoQ2hpbGRBbnN3ZXJMaXN0W2pdKS5pcyhcIltkYXRhLWNvcnJlY3RdXCIpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgZGF0YS1jb3JyZWN0IGF0dHJpYnV0ZSBleGlzdHMsIGFuc3dlciBpcyBjb3JyZWN0XG4gICAgICAgICAgICAgICAgaXNfY29ycmVjdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYW5zd2VyX3RleHQgPSAkKENoaWxkQW5zd2VyTGlzdFtqXSkuaHRtbCgpO1xuICAgICAgICAgICAgdmFyIGFuc3dlcl9vYmplY3QgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGFuc3dlcl9pZCxcbiAgICAgICAgICAgICAgICBjb3JyZWN0OiBpc19jb3JyZWN0LFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGFuc3dlcl90ZXh0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuYW5zd2VyTGlzdC5wdXNoKGFuc3dlcl9vYmplY3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluZEZlZWRiYWNrcygpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzLmNoaWxkcmVuW2ldKS5pcyhcIltkYXRhLWNvbXBvbmVudD1mZWVkYmFja11cIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWRiYWNrTGlzdC5wdXNoKHRoaXMuY2hpbGRyZW5baV0uaW5uZXJIVE1MKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZUNvcnJlY3RMaXN0KCkge1xuICAgICAgICAvLyBDcmVhdGVzIGFycmF5IHRoYXQgaG9sZHMgdGhlIElEXCJzIG9mIGNvcnJlY3QgYW5zd2Vyc1xuICAgICAgICAvLyBBbHNvIHBvcHVsYXRlcyBhbiBhcnJheSB0aGF0IGhvbGRzIHRoZSBpbmRlY2VzIG9mIGNvcnJlY3QgYW5zd2Vyc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYW5zd2VyTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYW5zd2VyTGlzdFtpXS5jb3JyZWN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0TGlzdC5wdXNoKHRoaXMuYW5zd2VyTGlzdFtpXS5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0SW5kZXhMaXN0LnB1c2goaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09ICAgRnVuY3Rpb25zIGdlbmVyYXRpbmcgZmluYWwgSFRNTCAgID09PT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICBjcmVhdGVNQ0Zvcm0oKSB7XG4gICAgICAgIHRoaXMucmVuZGVyTUNDb250YWluZXIoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJNQ0Zvcm0oKTsgLy8gcmVuZGVycyB0aGUgZm9ybSB3aXRoIG9wdGlvbnMgYW5kIGJ1dHRvbnNcbiAgICAgICAgdGhpcy5yZW5kZXJNQ2ZlZWRiYWNrRGl2KCk7XG4gICAgICAgIC8vIHJlcGxhY2VzIGludGVybWVkaWF0ZSBIVE1MIHdpdGggcmVuZGVyZWQgSFRNTFxuICAgICAgICAkKHRoaXMub3JpZ0VsZW0pLnJlcGxhY2VXaXRoKHRoaXMuY29udGFpbmVyRGl2KTtcbiAgICB9XG5cbiAgICByZW5kZXJNQ0NvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAkKHRoaXMuY29udGFpbmVyRGl2KS5odG1sKHRoaXMucXVlc3Rpb24pO1xuICAgICAgICAkKHRoaXMuY29udGFpbmVyRGl2KS5hZGRDbGFzcyh0aGlzLm9yaWdFbGVtLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuaWQgPSB0aGlzLmRpdmlkO1xuICAgIH1cblxuICAgIHJlbmRlck1DRm9ybSgpIHtcbiAgICAgICAgdGhpcy5vcHRzRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgICB0aGlzLm9wdHNGb3JtLmlkID0gdGhpcy5kaXZpZCArIFwiX2Zvcm1cIjtcbiAgICAgICAgJCh0aGlzLm9wdHNGb3JtKS5hdHRyKHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgICAgIGFjdGlvbjogXCJcIixcbiAgICAgICAgICAgIG9uc3VibWl0OiBcInJldHVybiBmYWxzZTtcIixcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGdlbmVyYXRlIGZvcm0gb3B0aW9uc1xuICAgICAgICB0aGlzLnJlbmRlck1DRm9ybU9wdHMoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJNQ0Zvcm1CdXR0b25zKCk7XG4gICAgICAgIC8vIEFwcGVuZCB0aGUgZm9ybSB0byB0aGUgY29udGFpbmVyXG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRoaXMub3B0c0Zvcm0pO1xuICAgIH1cblxuICAgIHJlbmRlck1DRm9ybU9wdHMoKSB7XG4gICAgICAgIC8vIGNyZWF0ZXMgaW5wdXQgRE9NIGVsZW1lbnRzXG4gICAgICAgIHRoaXMub3B0aW9uQXJyYXkgPSBbXTsgLy8gYXJyYXkgd2l0aCBhbiBvYmplY3QgZm9yIGVhY2ggb3B0aW9uIGNvbnRhaW5pbmcgdGhlIGlucHV0IGFuZCBsYWJlbCBmb3IgdGhhdCBvcHRpb25cbiAgICAgICAgdmFyIGlucHV0X3R5cGUgPSBcInJhZGlvXCI7XG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlYW5zd2Vycykge1xuICAgICAgICAgICAgaW5wdXRfdHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLmluZGV4QXJyYXkgaXMgdXNlZCB0byBpbmRleCB0aHJvdWdoIHRoZSBhbnN3ZXJzXG4gICAgICAgIC8vIGl0IGlzIGp1c3QgMC1uIG5vcm1hbGx5LCBidXQgdGhlIG9yZGVyIGlzIHNodWZmbGVkIGlmIHRoZSByYW5kb20gb3B0aW9uIGlzIHByZXNlbnRcbiAgICAgICAgdGhpcy5pbmRleEFycmF5ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hbnN3ZXJMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4QXJyYXkucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yYW5kb20pIHtcbiAgICAgICAgICAgIHRoaXMucmFuZG9taXplQW5zd2VycygpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGFuc3dlckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLmlzQW5zd2VyZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuYW5zd2VyTGlzdC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgdmFyIGsgPSB0aGlzLmluZGV4QXJyYXlbal07XG4gICAgICAgICAgICB2YXIgb3B0aWQgPSB0aGlzLmRpdmlkICsgXCJfb3B0X1wiICsgaztcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgbGFiZWwgZm9yIHRoZSBpbnB1dFxuICAgICAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIGNvbnRlbnQgYmVnaW5zIHdpdGggYSBgYDxwPmBgLCBwdXQgdGhlIGxhYmVsIGluc2lkZSBvZiBpdC4gKFNwaGlueCAyLjAgcHV0cyBhbGwgY29udGVudCBpbiBhIGBgPHA+YGAsIHdoaWxlIFNwaGlueCAxLjggZG9lc24ndCkuXG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHRoaXMuYW5zd2VyTGlzdFtrXS5jb250ZW50O1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICBpZiAoY29udGVudC5zdGFydHNXaXRoKFwiPHA+XCIpKSB7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCI8cD5cIjtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5zbGljZSgzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQobGFiZWwpLmh0bWwoXG4gICAgICAgICAgICAgICAgYCR7cHJlZml4fTxpbnB1dCB0eXBlPVwiJHtpbnB1dF90eXBlfVwiIG5hbWU9XCJncm91cDFcIiB2YWx1ZT0ke2t9IGlkPSR7b3B0aWR9PiR7U3RyaW5nLmZyb21DaGFyQ29kZShcbiAgICAgICAgICAgICAgICAgICAgXCJBXCIuY2hhckNvZGVBdCgwKSArIGpcbiAgICAgICAgICAgICAgICApfS4gJHtjb250ZW50fWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvLyBjcmVhdGUgdGhlIG9iamVjdCB0byBzdG9yZSBpbiBvcHRpb25BcnJheVxuICAgICAgICAgICAgdmFyIG9wdE9iaiA9IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogJChsYWJlbCkuZmluZChcImlucHV0XCIpWzBdLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBvcHRPYmouaW5wdXQub25jbGljayA9IGFuc3dlckZ1bmM7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9uQXJyYXkucHVzaChvcHRPYmopO1xuICAgICAgICAgICAgLy8gYWRkIHRoZSBvcHRpb24gdG8gdGhlIGZvcm1cbiAgICAgICAgICAgIHRoaXMub3B0c0Zvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgdGhpcy5vcHRzRm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyTUNGb3JtQnV0dG9ucygpIHtcbiAgICAgICAgLy8gc3VibWl0IGFuZCBjb21wYXJlIG1lIGJ1dHRvbnNcbiAgICAgICAgLy8gQ3JlYXRlIHN1Ym1pdCBidXR0b25cbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2hlY2sgTWVcIjtcbiAgICAgICAgJCh0aGlzLnN1Ym1pdEJ1dHRvbikuYXR0cih7XG4gICAgICAgICAgICBjbGFzczogXCJidG4gYnRuLXN1Y2Nlc3NcIixcbiAgICAgICAgICAgIG5hbWU6IFwiZG8gYW5zd2VyXCIsXG4gICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGVhbnN3ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc01DTUFTdWJtaXNzaW9uKHRydWUpO1xuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NNQ01GU3VibWlzc2lvbih0cnVlKTtcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gLy8gZW5kIGVsc2VcbiAgICAgICAgdGhpcy5vcHRzRm9ybS5hcHBlbmRDaGlsZCh0aGlzLnN1Ym1pdEJ1dHRvbik7XG4gICAgICAgIC8vIENyZWF0ZSBjb21wYXJlIGJ1dHRvblxuICAgICAgICBpZiAodGhpcy51c2VSdW5lc3RvbmVTZXJ2aWNlcykge1xuICAgICAgICAgICAgdGhpcy5jb21wYXJlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgICQodGhpcy5jb21wYXJlQnV0dG9uKS5hdHRyKHtcbiAgICAgICAgICAgICAgICBjbGFzczogXCJidG4gYnRuLWRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5kaXZpZCArIFwiX2Jjb21wXCIsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJjb21wYXJlXCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY29tcGFyZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29tcGFyZSBtZVwiO1xuICAgICAgICAgICAgdGhpcy5jb21wYXJlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wYXJlQW5zd2Vycyh0aGlzLmRpdmlkKTtcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLm9wdHNGb3JtLmFwcGVuZENoaWxkKHRoaXMuY29tcGFyZUJ1dHRvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJNQ2ZlZWRiYWNrRGl2KCkge1xuICAgICAgICB0aGlzLmZlZWRCYWNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5mZWVkQmFja0Rpdi5pZCA9IHRoaXMuZGl2aWQgKyBcIl9mZWVkYmFja1wiO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLmZlZWRCYWNrRGl2KTtcbiAgICB9XG5cbiAgICByYW5kb21pemVBbnN3ZXJzKCkge1xuICAgICAgICAvLyBNYWtlcyB0aGUgb3JkZXJpbmcgb2YgdGhlIGFuc3dlciBjaG9pY2VzIHJhbmRvbVxuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gdGhpcy5pbmRleEFycmF5Lmxlbmd0aCxcbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlLFxuICAgICAgICAgICAgcmFuZG9tSW5kZXg7XG4gICAgICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLi4uXG4gICAgICAgIHdoaWxlIChjdXJyZW50SW5kZXggIT09IDApIHtcbiAgICAgICAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgY3VycmVudEluZGV4IC09IDE7XG4gICAgICAgICAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXG4gICAgICAgICAgICB0ZW1wb3JhcnlWYWx1ZSA9IHRoaXMuaW5kZXhBcnJheVtjdXJyZW50SW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5pbmRleEFycmF5W2N1cnJlbnRJbmRleF0gPSB0aGlzLmluZGV4QXJyYXlbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5pbmRleEFycmF5W3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeVZhbHVlO1xuICAgICAgICAgICAgdmFyIHRlbXBvcmFyeUZlZWRiYWNrID0gdGhpcy5mZWVkYmFja0xpc3RbY3VycmVudEluZGV4XTtcbiAgICAgICAgICAgIHRoaXMuZmVlZGJhY2tMaXN0W2N1cnJlbnRJbmRleF0gPSB0aGlzLmZlZWRiYWNrTGlzdFtyYW5kb21JbmRleF07XG4gICAgICAgICAgICB0aGlzLmZlZWRiYWNrTGlzdFtyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlGZWVkYmFjaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT0gQ2hlY2tpbmcvbG9hZGluZyBmcm9tIHN0b3JhZ2UgPT09XG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIHJlc3RvcmVBbnN3ZXJzKGRhdGEpIHtcbiAgICAgICAgLy8gUmVzdG9yZSBhbnN3ZXJzIGZyb20gc3RvcmFnZSByZXRyaWV2YWwgZG9uZSBpbiBSdW5lc3RvbmVCYXNlXG4gICAgICAgIC8vIHNvbWV0aW1lcyBkYXRhLmFuc3dlciBjYW4gYmUgbnVsbFxuICAgICAgICBpZiAoIWRhdGEuYW5zd2VyKSB7XG4gICAgICAgICAgICBkYXRhLmFuc3dlciA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFuc3dlcnMgPSBkYXRhLmFuc3dlci5zcGxpdChcIixcIik7XG4gICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgYW5zd2Vycy5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gYW5zd2Vyc1thXTtcbiAgICAgICAgICAgIGZvciAodmFyIGIgPSAwOyBiIDwgdGhpcy5vcHRpb25BcnJheS5sZW5ndGg7IGIrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbkFycmF5W2JdLmlucHV0LnZhbHVlID09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcy5vcHRpb25BcnJheVtiXS5pbnB1dCkuYXR0cihcImNoZWNrZWRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZWFuc3dlcnMpIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc01DTUFTdWJtaXNzaW9uKGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc01DTUZTdWJtaXNzaW9uKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICAvLyBSZXBvcHVsYXRlcyBNQ01BIHF1ZXN0aW9ucyB3aXRoIGEgdXNlcidzIHByZXZpb3VzIGFuc3dlcnMsXG4gICAgICAgIC8vIHdoaWNoIHdlcmUgc3RvcmVkIGludG8gbG9jYWwgc3RvcmFnZS5cbiAgICAgICAgdmFyIHN0b3JlZERhdGE7XG4gICAgICAgIHZhciBhbnN3ZXJzO1xuICAgICAgICBpZiAodGhpcy5ncmFkZXJhY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGVuID0gbG9jYWxTdG9yYWdlLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbiA+IDApIHtcbiAgICAgICAgICAgIHZhciBleCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KCkpO1xuICAgICAgICAgICAgaWYgKGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVkRGF0YSA9IEpTT04ucGFyc2UoZXgpO1xuICAgICAgICAgICAgICAgICAgICBhbnN3ZXJzID0gc3RvcmVkRGF0YS5hbnN3ZXIuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBlcnJvciB3aGlsZSBwYXJzaW5nOyBsaWtlbHkgZHVlIHRvIGJhZCB2YWx1ZSBzdG9yZWQgaW4gc3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KCkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgYW5zd2Vycy5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBhbnN3ZXJzW2FdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBiID0gMDsgYiA8IHRoaXMub3B0aW9uQXJyYXkubGVuZ3RoOyBiKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbkFycmF5W2JdLmlucHV0LnZhbHVlID09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzLm9wdGlvbkFycmF5W2JdLmlucHV0KS5hdHRyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoZWNrZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZVJ1bmVzdG9uZVNlcnZpY2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlTUNDb21wYXJpc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0U3VibWl0dGVkT3B0cygpOyAvLyB0byBwb3B1bGF0ZSBnaXZlbmxvZyBmb3IgbG9nZ2luZ1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZWFuc3dlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nTUNNQXN1Ym1pc3Npb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nTUNNRnN1Ym1pc3Npb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldExvY2FsU3RvcmFnZShkYXRhKSB7XG4gICAgICAgIHZhciB0aW1lU3RhbXAgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgc3RvcmFnZU9iaiA9IHtcbiAgICAgICAgICAgIGFuc3dlcjogZGF0YS5hbnN3ZXIsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVTdGFtcCxcbiAgICAgICAgICAgIGNvcnJlY3Q6IGRhdGEuY29ycmVjdCxcbiAgICAgICAgfTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZUtleSgpLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZU9iailcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT0gUHJvY2Vzc2luZyBNQyBTdWJtaXNzaW9ucyA9PT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICBwcm9jZXNzTUNNQVN1Ym1pc3Npb24obG9nRmxhZykge1xuICAgICAgICAvLyBDYWxsZWQgd2hlbiB0aGUgc3VibWl0IGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgICAgIHRoaXMuZ2V0U3VibWl0dGVkT3B0cygpOyAvLyBtYWtlIHN1cmUgdGhpcy5naXZlbkFycmF5IGlzIHBvcHVsYXRlZFxuICAgICAgICB0aGlzLnNjb3JlTUNNQVN1Ym1pc3Npb24oKTtcbiAgICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2Uoe1xuICAgICAgICAgICAgY29ycmVjdDogdGhpcy5jb3JyZWN0ID8gXCJUXCIgOiBcIkZcIixcbiAgICAgICAgICAgIGFuc3dlcjogdGhpcy5naXZlbkFycmF5LmpvaW4oXCIsXCIpLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGxvZ0ZsYWcpIHtcbiAgICAgICAgICAgIHRoaXMubG9nTUNNQXN1Ym1pc3Npb24oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlck1DTUFGZWVkQmFjaygpO1xuICAgICAgICBpZiAodGhpcy51c2VSdW5lc3RvbmVTZXJ2aWNlcykge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVNQ0NvbXBhcmlzb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFN1Ym1pdHRlZE9wdHMoKSB7XG4gICAgICAgIHZhciBnaXZlbjtcbiAgICAgICAgdGhpcy5zaW5nbGVmZWVkYmFjayA9IFwiXCI7IC8vIFVzZWQgZm9yIE1DTUYgcXVlc3Rpb25zXG4gICAgICAgIHRoaXMuZmVlZGJhY2tTdHJpbmcgPSBcIlwiOyAvLyBVc2VkIGZvciBNQ01BIHF1ZXN0aW9uc1xuICAgICAgICB0aGlzLmdpdmVuQXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5naXZlbmxvZyA9IFwiXCI7XG4gICAgICAgIHZhciBidXR0b25PYmpzID0gdGhpcy5vcHRzRm9ybS5lbGVtZW50cy5ncm91cDE7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnV0dG9uT2Jqcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGJ1dHRvbk9ianNbaV0uY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGdpdmVuID0gYnV0dG9uT2Jqc1tpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmdpdmVuQXJyYXkucHVzaChnaXZlbik7XG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkYmFja1N0cmluZyArPSBgPGxpIHZhbHVlPVwiJHtpICsgMX1cIj4ke3RoaXMuZmVlZGJhY2tMaXN0W2ldXG4gICAgICAgICAgICAgICAgICAgIH08L2xpPmA7XG4gICAgICAgICAgICAgICAgdGhpcy5naXZlbmxvZyArPSBnaXZlbiArIFwiLFwiO1xuICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlZmVlZGJhY2sgPSB0aGlzLmZlZWRiYWNrTGlzdFtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdpdmVuQXJyYXkuc29ydCgpO1xuICAgIH1cblxuICAgIGNoZWNrQ3VycmVudEFuc3dlcigpIHtcbiAgICAgICAgdGhpcy5nZXRTdWJtaXR0ZWRPcHRzKCk7XG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlYW5zd2Vycykge1xuICAgICAgICAgICAgdGhpcy5zY29yZU1DTUFTdWJtaXNzaW9uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjb3JlTUNNRlN1Ym1pc3Npb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvZ0N1cnJlbnRBbnN3ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlYW5zd2Vycykge1xuICAgICAgICAgICAgdGhpcy5sb2dNQ01Bc3VibWlzc2lvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2dNQ01Gc3VibWlzc2lvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyRmVlZGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlYW5zd2Vycykge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJNQ01BRmVlZEJhY2soKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyTUNNRkZlZWRiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2NvcmVNQ01BU3VibWlzc2lvbigpIHtcbiAgICAgICAgdGhpcy5jb3JyZWN0Q291bnQgPSAwO1xuICAgICAgICB2YXIgY29ycmVjdEluZGV4ID0gMDtcbiAgICAgICAgdmFyIGdpdmVuSW5kZXggPSAwO1xuICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICBjb3JyZWN0SW5kZXggPCB0aGlzLmNvcnJlY3RJbmRleExpc3QubGVuZ3RoICYmXG4gICAgICAgICAgICBnaXZlbkluZGV4IDwgdGhpcy5naXZlbkFycmF5Lmxlbmd0aFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLmdpdmVuQXJyYXlbZ2l2ZW5JbmRleF0gPFxuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdEluZGV4TGlzdFtjb3JyZWN0SW5kZXhdXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBnaXZlbkluZGV4Kys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMuZ2l2ZW5BcnJheVtnaXZlbkluZGV4XSA9PVxuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdEluZGV4TGlzdFtjb3JyZWN0SW5kZXhdXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RDb3VudCsrO1xuICAgICAgICAgICAgICAgIGdpdmVuSW5kZXgrKztcbiAgICAgICAgICAgICAgICBjb3JyZWN0SW5kZXgrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29ycmVjdEluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG51bUdpdmVuID0gdGhpcy5naXZlbkFycmF5Lmxlbmd0aDtcbiAgICAgICAgdmFyIG51bUNvcnJlY3QgPSB0aGlzLmNvcnJlY3RDb3VudDtcbiAgICAgICAgdmFyIG51bU5lZWRlZCA9IHRoaXMuY29ycmVjdExpc3QubGVuZ3RoO1xuICAgICAgICB0aGlzLmFuc3dlciA9IHRoaXMuZ2l2ZW5BcnJheS5qb2luKFwiLFwiKTtcbiAgICAgICAgdGhpcy5jb3JyZWN0ID0gbnVtQ29ycmVjdCA9PT0gbnVtTmVlZGVkICYmIG51bU5lZWRlZCA9PT0gbnVtR2l2ZW47XG4gICAgICAgIGlmIChudW1HaXZlbiA9PT0gbnVtTmVlZGVkKSB7XG4gICAgICAgICAgICB0aGlzLnBlcmNlbnQgPSBudW1Db3JyZWN0IC8gbnVtTmVlZGVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wZXJjZW50ID0gbnVtQ29ycmVjdCAvIE1hdGgubWF4KG51bUdpdmVuLCBudW1OZWVkZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9nTUNNQXN1Ym1pc3Npb24oKSB7XG4gICAgICAgIHZhciBhbnN3ZXIgPSB0aGlzLmFuc3dlcjtcbiAgICAgICAgdmFyIGNvcnJlY3QgPSB0aGlzLmNvcnJlY3Q7XG4gICAgICAgIHZhciBsb2dBbnN3ZXIgPVxuICAgICAgICAgICAgXCJhbnN3ZXI6XCIgKyBhbnN3ZXIgKyBcIjpcIiArIChjb3JyZWN0ID09IFwiVFwiID8gXCJjb3JyZWN0XCIgOiBcIm5vXCIpO1xuICAgICAgICB0aGlzLmxvZ0Jvb2tFdmVudCh7XG4gICAgICAgICAgICBldmVudDogXCJtQ2hvaWNlXCIsXG4gICAgICAgICAgICBhY3Q6IGxvZ0Fuc3dlcixcbiAgICAgICAgICAgIGFuc3dlcjogYW5zd2VyLFxuICAgICAgICAgICAgY29ycmVjdDogY29ycmVjdCxcbiAgICAgICAgICAgIGRpdl9pZDogdGhpcy5kaXZpZCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyTUNNQUZlZWRCYWNrKCkge1xuICAgICAgICB2YXIgYW5zd2VyU3RyID0gXCJhbnN3ZXJzXCI7XG4gICAgICAgIHZhciBudW1HaXZlbiA9IHRoaXMuZ2l2ZW5BcnJheS5sZW5ndGg7XG4gICAgICAgIGlmIChudW1HaXZlbiA9PT0gMSkge1xuICAgICAgICAgICAgYW5zd2VyU3RyID0gXCJhbnN3ZXJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbnVtQ29ycmVjdCA9IHRoaXMuY29ycmVjdENvdW50O1xuICAgICAgICB2YXIgbnVtTmVlZGVkID0gdGhpcy5jb3JyZWN0TGlzdC5sZW5ndGg7XG4gICAgICAgIHZhciBmZWVkYmFja1RleHQgPSB0aGlzLmZlZWRiYWNrU3RyaW5nO1xuICAgICAgICBpZiAodGhpcy5jb3JyZWN0KSB7XG4gICAgICAgICAgICAkKHRoaXMuZmVlZEJhY2tEaXYpLmh0bWwoYOKclO+4jyA8b2wgdHlwZT1cIkFcIj4ke2ZlZWRiYWNrVGV4dH08L3VsPmApO1xuICAgICAgICAgICAgJCh0aGlzLmZlZWRCYWNrRGl2KS5hdHRyKFwiY2xhc3NcIiwgXCJhbGVydCBhbGVydC1pbmZvXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzLmZlZWRCYWNrRGl2KS5odG1sKFxuICAgICAgICAgICAgICAgIGDinJbvuI8gWW91IGdhdmUgJHtudW1HaXZlbn0gJHthbnN3ZXJTdHJ9IGFuZCBnb3QgJHtudW1Db3JyZWN0fSBjb3JyZWN0IG9mICR7bnVtTmVlZGVkfSBuZWVkZWQuPG9sIHR5cGU9XCJBXCI+JHtmZWVkYmFja1RleHR9PC91bD5gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgJCh0aGlzLmZlZWRCYWNrRGl2KS5hdHRyKFwiY2xhc3NcIiwgXCJhbGVydCBhbGVydC1kYW5nZXJcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9jZXNzTUNNRlN1Ym1pc3Npb24obG9nRmxhZykge1xuICAgICAgICAvLyBDYWxsZWQgd2hlbiB0aGUgc3VibWl0IGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgICAgIHRoaXMuZ2V0U3VibWl0dGVkT3B0cygpOyAvLyBtYWtlIHN1cmUgdGhpcy5naXZlbkFycmF5IGlzIHBvcHVsYXRlZFxuICAgICAgICB0aGlzLnNjb3JlTUNNRlN1Ym1pc3Npb24oKTtcbiAgICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2Uoe1xuICAgICAgICAgICAgY29ycmVjdDogdGhpcy5jb3JyZWN0ID8gXCJUXCIgOiBcIkZcIixcbiAgICAgICAgICAgIGFuc3dlcjogdGhpcy5naXZlbkFycmF5LmpvaW4oXCIsXCIpLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGxvZ0ZsYWcpIHtcbiAgICAgICAgICAgIHRoaXMubG9nTUNNRnN1Ym1pc3Npb24oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlck1DTUZGZWVkYmFjaygpO1xuICAgICAgICBpZiAodGhpcy51c2VSdW5lc3RvbmVTZXJ2aWNlcykge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVNQ0NvbXBhcmlzb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNjb3JlTUNNRlN1Ym1pc3Npb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmdpdmVuQXJyYXlbMF0gPT0gdGhpcy5jb3JyZWN0SW5kZXhMaXN0WzBdKSB7XG4gICAgICAgICAgICB0aGlzLmNvcnJlY3QgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wZXJjZW50ID0gMS4wO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2l2ZW5BcnJheVswXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyBpZiBnaXZlbiBpcyBudWxsIHRoZW4gdGhlIHF1ZXN0aW9uIHdhc25cInQgYW5zd2VyZWQgYW5kIHNob3VsZCBiZSBjb3VudGVkIGFzIHNraXBwZWRcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wZXJjZW50ID0gMC4wO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9nTUNNRnN1Ym1pc3Npb24oKSB7XG4gICAgICAgIHZhciBhbnN3ZXIgPSB0aGlzLmdpdmVuQXJyYXlbMF07XG4gICAgICAgIHZhciBjb3JyZWN0ID1cbiAgICAgICAgICAgIHRoaXMuZ2l2ZW5BcnJheVswXSA9PSB0aGlzLmNvcnJlY3RJbmRleExpc3RbMF0gPyBcIlRcIiA6IFwiRlwiO1xuICAgICAgICB2YXIgbG9nQW5zd2VyID1cbiAgICAgICAgICAgIFwiYW5zd2VyOlwiICsgYW5zd2VyICsgXCI6XCIgKyAoY29ycmVjdCA9PSBcIlRcIiA/IFwiY29ycmVjdFwiIDogXCJub1wiKTsgLy8gYmFja3dhcmQgY29tcGF0aWJsZVxuICAgICAgICB0aGlzLmxvZ0Jvb2tFdmVudCh7XG4gICAgICAgICAgICBldmVudDogXCJtQ2hvaWNlXCIsXG4gICAgICAgICAgICBhY3Q6IGxvZ0Fuc3dlcixcbiAgICAgICAgICAgIGFuc3dlcjogYW5zd2VyLFxuICAgICAgICAgICAgY29ycmVjdDogY29ycmVjdCxcbiAgICAgICAgICAgIGRpdl9pZDogdGhpcy5kaXZpZCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyTUNNRkZlZWRiYWNrKCkge1xuICAgICAgICBsZXQgY29ycmVjdCA9IHRoaXMuZ2l2ZW5BcnJheVswXSA9PSB0aGlzLmNvcnJlY3RJbmRleExpc3RbMF07XG4gICAgICAgIGxldCBmZWVkYmFja1RleHQgPSB0aGlzLnNpbmdsZWZlZWRiYWNrO1xuXG4gICAgICAgIGlmIChjb3JyZWN0KSB7XG4gICAgICAgICAgICAkKHRoaXMuZmVlZEJhY2tEaXYpLmh0bWwoXCLinJTvuI8gXCIgKyBmZWVkYmFja1RleHQpO1xuICAgICAgICAgICAgJCh0aGlzLmZlZWRCYWNrRGl2KS5hdHRyKFwiY2xhc3NcIiwgXCJhbGVydCBhbGVydC1pbmZvXCIpOyAvLyB1c2UgYmx1ZSBmb3IgYmV0dGVyIHJlZC9ncmVlbiBibHVlIGNvbG9yIGJsaW5kbmVzc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGZlZWRiYWNrVGV4dCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZmVlZGJhY2tUZXh0ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuaHRtbChcIuKclu+4jyBcIiArIGZlZWRiYWNrVGV4dCk7XG4gICAgICAgICAgICAkKHRoaXMuZmVlZEJhY2tEaXYpLmF0dHIoXCJjbGFzc1wiLCBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbmFibGVNQ0NvbXBhcmlzb24oKSB7XG4gICAgICAgIGlmIChlQm9va0NvbmZpZy5lbmFibGVDb21wYXJlTWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGFyZUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGluc3RydWN0b3JNY2hvaWNlTW9kYWwoZGF0YSkge1xuICAgICAgICAvLyBkYXRhLnJlc2xpc3QgLS0gc3R1ZGVudCBhbmQgdGhlaXIgYW5zd2Vyc1xuICAgICAgICAvLyBkYXRhLmFuc3dlckRpY3QgICAgLS0gYW5zd2VycyBhbmQgY291bnRcbiAgICAgICAgLy8gZGF0YS5jb3JyZWN0IC0gY29ycmVjdCBhbnN3ZXJcbiAgICAgICAgdmFyIHJlcyA9IFwiPHRhYmxlPjx0cj48dGg+U3R1ZGVudDwvdGg+PHRoPkFuc3dlcihzKTwvdGg+PC90cj5cIjtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBkYXRhKSB7XG4gICAgICAgICAgICByZXMgKz1cbiAgICAgICAgICAgICAgICBcIjx0cj48dGQ+XCIgK1xuICAgICAgICAgICAgICAgIGRhdGFbaV1bMF0gK1xuICAgICAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xuICAgICAgICAgICAgICAgIGRhdGFbaV1bMV0gK1xuICAgICAgICAgICAgICAgIFwiPC90ZD48L3RyPlwiO1xuICAgICAgICB9XG4gICAgICAgIHJlcyArPSBcIjwvdGFibGU+XCI7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIGNvbXBhcmVNb2RhbChkYXRhLCBzdGF0dXMsIHdoYXRldmVyKSB7XG4gICAgICAgIHZhciBkYXRhZGljdCA9IEpTT04ucGFyc2UoZGF0YSlbMF07XG4gICAgICAgIHZhciBhbnN3ZXJzID0gZGF0YWRpY3QuYW5zd2VyRGljdDtcbiAgICAgICAgdmFyIG1pc2MgPSBkYXRhZGljdC5taXNjO1xuICAgICAgICB2YXIga2wgPSBPYmplY3Qua2V5cyhhbnN3ZXJzKS5zb3J0KCk7XG4gICAgICAgIHZhciBib2R5ID0gXCI8dGFibGU+XCI7XG4gICAgICAgIGJvZHkgKz0gXCI8dHI+PHRoPkFuc3dlcjwvdGg+PHRoPlBlcmNlbnQ8L3RoPjwvdHI+XCI7XG4gICAgICAgIHZhciB0aGVDbGFzcyA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGsgaW4ga2wpIHtcbiAgICAgICAgICAgIGlmIChrbFtrXSA9PT0gbWlzYy5jb3JyZWN0KSB7XG4gICAgICAgICAgICAgICAgdGhlQ2xhc3MgPSBcInN1Y2Nlc3NcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhlQ2xhc3MgPSBcImluZm9cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvZHkgKz1cbiAgICAgICAgICAgICAgICBcIjx0cj48dGQ+XCIgKyBrbFtrXSArIFwiPC90ZD48dGQgY2xhc3M9J2NvbXBhcmUtbWUtcHJvZ3Jlc3MnPlwiO1xuICAgICAgICAgICAgdmFyIHBjdCA9IGFuc3dlcnNba2xba11dICsgXCIlXCI7XG4gICAgICAgICAgICBib2R5ICs9IFwiPGRpdiBjbGFzcz0ncHJvZ3Jlc3MnPlwiO1xuICAgICAgICAgICAgYm9keSArPVxuICAgICAgICAgICAgICAgIFwiICAgIDxkaXYgY2xhc3M9J3Byb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItXCIgK1xuICAgICAgICAgICAgICAgIHRoZUNsYXNzICtcbiAgICAgICAgICAgICAgICBcIicgc3R5bGU9J3dpZHRoOlwiICtcbiAgICAgICAgICAgICAgICBwY3QgK1xuICAgICAgICAgICAgICAgIFwiOyc+XCIgK1xuICAgICAgICAgICAgICAgIHBjdDtcbiAgICAgICAgICAgIGJvZHkgKz0gXCIgICAgPC9kaXY+XCI7XG4gICAgICAgICAgICBib2R5ICs9IFwiPC9kaXY+PC90ZD48L3RyPlwiO1xuICAgICAgICB9XG4gICAgICAgIGJvZHkgKz0gXCI8L3RhYmxlPlwiO1xuICAgICAgICBpZiAobWlzYy55b3VycGN0ICE9PSBcInVuYXZhaWxhYmxlXCIpIHtcbiAgICAgICAgICAgIGJvZHkgKz1cbiAgICAgICAgICAgICAgICBcIjxiciAvPjxwPllvdSBoYXZlIFwiICtcbiAgICAgICAgICAgICAgICBtaXNjLnlvdXJwY3QgK1xuICAgICAgICAgICAgICAgIFwiJSBjb3JyZWN0IGZvciBhbGwgcXVlc3Rpb25zPC9wPlwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhZGljdC5yZXNsaXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGJvZHkgKz0gdGhpcy5pbnN0cnVjdG9yTWNob2ljZU1vZGFsKGRhdGFkaWN0LnJlc2xpc3QpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBodG1sID1cbiAgICAgICAgICAgIFwiPGRpdiBjbGFzcz0nbW9kYWwgZmFkZSc+XCIgK1xuICAgICAgICAgICAgXCIgICAgPGRpdiBjbGFzcz0nbW9kYWwtZGlhbG9nIGNvbXBhcmUtbW9kYWwnPlwiICtcbiAgICAgICAgICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1jb250ZW50Jz5cIiArXG4gICAgICAgICAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWhlYWRlcic+XCIgK1xuICAgICAgICAgICAgXCIgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdjbG9zZScgZGF0YS1kaXNtaXNzPSdtb2RhbCcgYXJpYS1oaWRkZW49J3RydWUnPiZ0aW1lczs8L2J1dHRvbj5cIiArXG4gICAgICAgICAgICBcIiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9J21vZGFsLXRpdGxlJz5EaXN0cmlidXRpb24gb2YgQW5zd2VyczwvaDQ+XCIgK1xuICAgICAgICAgICAgXCIgICAgICAgICAgICA8L2Rpdj5cIiArXG4gICAgICAgICAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWJvZHknPlwiICtcbiAgICAgICAgICAgIGJvZHkgK1xuICAgICAgICAgICAgXCIgICAgICAgICAgICA8L2Rpdj5cIiArXG4gICAgICAgICAgICBcIiAgICAgICAgPC9kaXY+XCIgK1xuICAgICAgICAgICAgXCIgICAgPC9kaXY+XCIgK1xuICAgICAgICAgICAgXCI8L2Rpdj5cIjtcbiAgICAgICAgdmFyIGVsID0gJChodG1sKTtcbiAgICAgICAgZWwubW9kYWwoKTtcbiAgICB9XG4gICAgY29tcGFyZUFuc3dlcnMoKSB7XG4gICAgICAgIHZhciBkYXRhID0ge307XG4gICAgICAgIGRhdGEuZGl2X2lkID0gdGhpcy5kaXZpZDtcbiAgICAgICAgZGF0YS5jb3Vyc2UgPSBlQm9va0NvbmZpZy5jb3Vyc2U7XG4gICAgICAgIGpRdWVyeS5nZXQoXG4gICAgICAgICAgICBlQm9va0NvbmZpZy5hamF4VVJMICsgXCJnZXRhZ2dyZWdhdGVyZXN1bHRzXCIsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgdGhpcy5jb21wYXJlTW9kYWwuYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGRpc2FibGVJbnRlcmFjdGlvbigpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbkFycmF5W2ldLmlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09IEZpbmQgdGhlIGN1c3RvbSBIVE1MIHRhZ3MgYW5kID09XG49PSAgIGV4ZWN1dGUgb3VyIGNvZGUgb24gdGhlbSAgICA9PVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiQoZG9jdW1lbnQpLmJpbmQoXCJydW5lc3RvbmU6bG9naW4tY29tcGxldGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICQoXCJbZGF0YS1jb21wb25lbnQ9bXVsdGlwbGVjaG9pY2VdXCIpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIC8vIE1DXG4gICAgICAgIHZhciBvcHRzID0ge1xuICAgICAgICAgICAgb3JpZzogdGhpcyxcbiAgICAgICAgICAgIHVzZVJ1bmVzdG9uZVNlcnZpY2VzOiBlQm9va0NvbmZpZy51c2VSdW5lc3RvbmVTZXJ2aWNlcyxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCQodGhpcykuY2xvc2VzdChcIltkYXRhLWNvbXBvbmVudD10aW1lZEFzc2Vzc21lbnRdXCIpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGlzIGVsZW1lbnQgZXhpc3RzIHdpdGhpbiBhIHRpbWVkIGNvbXBvbmVudCwgZG9uJ3QgcmVuZGVyIGl0IGhlcmVcbiAgICAgICAgICAgIG1jTGlzdFt0aGlzLmlkXSA9IG5ldyBNdWx0aXBsZUNob2ljZShvcHRzKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG4iLCJpbXBvcnQgTXVsdGlwbGVDaG9pY2UgZnJvbSBcIi4vbWNob2ljZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lZE1DIGV4dGVuZHMgTXVsdGlwbGVDaG9pY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIob3B0cyk7XG4gICAgICAgICQodGhpcy5jb250YWluZXJEaXYpLmFkZENsYXNzKFwiYWxlcnQgYWxlcnQtd2FybmluZyBydW5lc3RvbmVcIik7XG4gICAgICAgIHRoaXMubmVlZHNSZWluaXRpYWxpemF0aW9uID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZW5kZXJUaW1lZEljb24odGhpcy5NQ0NvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuaGlkZUJ1dHRvbnMoKTsgLy8gRG9uJ3Qgc2hvdyBwZXItcXVlc3Rpb24gYnV0dG9ucyBpbiBhIHRpbWVkIGFzc2Vzc21lbnRcbiAgICB9XG5cbiAgICByZW5kZXJUaW1lZEljb24oY29tcG9uZW50KSB7XG4gICAgICAgIC8vIHJlbmRlcnMgdGhlIGNsb2NrIGljb24gb24gdGltZWQgY29tcG9uZW50cy4gICAgVGhlIGNvbXBvbmVudCBwYXJhbWV0ZXJcbiAgICAgICAgLy8gaXMgdGhlIGVsZW1lbnQgdGhhdCB0aGUgaWNvbiBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAgICAgIHZhciB0aW1lSWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciB0aW1lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICQodGltZUljb24pLmF0dHIoe1xuICAgICAgICAgICAgc3JjOiBcIi4uL19zdGF0aWMvY2xvY2sucG5nXCIsXG4gICAgICAgICAgICBzdHlsZTogXCJ3aWR0aDoxNXB4O2hlaWdodDoxNXB4XCIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aW1lSWNvbkRpdi5jbGFzc05hbWUgPSBcInRpbWVUaXBcIjtcbiAgICAgICAgdGltZUljb25EaXYudGl0bGUgPSBcIlwiO1xuICAgICAgICB0aW1lSWNvbkRpdi5hcHBlbmRDaGlsZCh0aW1lSWNvbik7XG4gICAgICAgICQoY29tcG9uZW50KS5wcmVwZW5kKHRpbWVJY29uRGl2KTtcbiAgICB9XG4gICAgaGlkZUJ1dHRvbnMoKSB7XG4gICAgICAgIC8vSnVzdCBoaWRpbmcgdGhlIGJ1dHRvbnMgZG9lc24ndCBwcmV2ZW50IHN1Ym1pdHRpbmcgdGhlIGZvcm0gd2hlbiBlbnRlcmluZyBpcyBjbGlja2VkXG4gICAgICAgIC8vV2UgbmVlZCB0byBjb21wbGV0ZWx5IGRpc2FibGUgdGhlIGJ1dHRvbnNcbiAgICAgICAgJCh0aGlzLnN1Ym1pdEJ1dHRvbikuYXR0cihcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgJCh0aGlzLnN1Ym1pdEJ1dHRvbikuaGlkZSgpO1xuICAgICAgICAkKHRoaXMuY29tcGFyZUJ1dHRvbikuaGlkZSgpO1xuICAgIH1cblxuICAgIC8vIFRoZXNlIG1ldGhvZHMgb3ZlcnJpZGUgdGhlIG1ldGhvZHMgaW4gdGhlIGJhc2UgY2xhc3MuIENhbGxlZCBmcm9tIHJlbmRlckZlZWRiYWNrKClcbiAgICAvL1xuICAgIHJlbmRlck1DTUFGZWVkQmFjaygpIHtcbiAgICAgICAgdGhpcy5mZWVkYmFja1RpbWVkTUMoKTtcbiAgICB9XG4gICAgcmVuZGVyTUNNRkZlZWRiYWNrKHdoYXRldmVyLCB3aGF0ZXZlcnIpIHtcbiAgICAgICAgdGhpcy5mZWVkYmFja1RpbWVkTUMoKTtcbiAgICB9XG4gICAgZmVlZGJhY2tUaW1lZE1DKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaW5kZXhBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRtcGluZGV4ID0gdGhpcy5pbmRleEFycmF5W2ldO1xuICAgICAgICAgICAgJCh0aGlzLmZlZWRCYWNrRWFjaEFycmF5W2ldKS50ZXh0KFxuICAgICAgICAgICAgICAgIFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBpKSArIFwiLiBcIiArIHRoaXMuZmVlZGJhY2tMaXN0W2ldXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdmFyIHRtcGlkID0gdGhpcy5hbnN3ZXJMaXN0W3RtcGluZGV4XS5pZDtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvcnJlY3RMaXN0LmluZGV4T2YodG1waWQpID49IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWRCYWNrRWFjaEFycmF5W2ldLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICAgICAgICAgIFwiYWxlcnRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbGVydC1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWRCYWNrRWFjaEFycmF5W2ldLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICAgICAgICAgIFwiYWxlcnRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbGVydC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyTUNGb3JtT3B0cygpIHtcbiAgICAgICAgc3VwZXIucmVuZGVyTUNGb3JtT3B0cygpO1xuICAgICAgICB0aGlzLmZlZWRCYWNrRWFjaEFycmF5ID0gW107XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5hbnN3ZXJMaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB2YXIgayA9IHRoaXMuaW5kZXhBcnJheVtqXTtcbiAgICAgICAgICAgIHZhciBmZWVkQmFja0VhY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZmVlZEJhY2tFYWNoLmlkID0gdGhpcy5kaXZpZCArIFwiX2VhY2hGZWVkYmFja19cIiArIGs7XG4gICAgICAgICAgICBmZWVkQmFja0VhY2guY2xhc3NMaXN0LmFkZChcImVhY2hGZWVkYmFja1wiKTtcbiAgICAgICAgICAgIHRoaXMuZmVlZEJhY2tFYWNoQXJyYXkucHVzaChmZWVkQmFja0VhY2gpO1xuICAgICAgICAgICAgdGhpcy5vcHRzRm9ybS5hcHBlbmRDaGlsZChmZWVkQmFja0VhY2gpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrQ29ycmVjdFRpbWVkTUNNQSgpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5jb3JyZWN0Q291bnQgPT09IHRoaXMuY29ycmVjdExpc3QubGVuZ3RoICYmXG4gICAgICAgICAgICB0aGlzLmNvcnJlY3RMaXN0Lmxlbmd0aCA9PT0gdGhpcy5naXZlbkFycmF5Lmxlbmd0aFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5naXZlbkFycmF5Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jb3JyZWN0ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBxdWVzdGlvbiB3YXMgc2tpcHBlZFxuICAgICAgICAgICAgdGhpcy5jb3JyZWN0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHRoaXMuY29ycmVjdCkge1xuICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRcIjtcbiAgICAgICAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRlwiO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGVja0NvcnJlY3RUaW1lZE1DTUYoKSB7XG4gICAgICAgIC8vIFJldHVybnMgaWYgdGhlIHF1ZXN0aW9uIHdhcyBjb3JyZWN0LCBpbmNvcnJlY3QsIG9yIHNraXBwZWQgKHJldHVybiBudWxsIGluIHRoZSBsYXN0IGNhc2UpXG4gICAgICAgIHN3aXRjaCAodGhpcy5jb3JyZWN0KSB7XG4gICAgICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVFwiO1xuICAgICAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGXCI7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrQ29ycmVjdFRpbWVkKCkge1xuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZWFuc3dlcnMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrQ29ycmVjdFRpbWVkTUNNQSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tDb3JyZWN0VGltZWRNQ01GKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGlkZUZlZWRiYWNrKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZmVlZEJhY2tFYWNoQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0VhY2hBcnJheVtpXSkuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVpbml0aWFsaXplTGlzdGVuZXJzKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBhbnN3ZXJGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5pc0Fuc3dlcmVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yIChsZXQgb3B0IG9mIHRoaXMub3B0aW9uQXJyYXkpIHtcbiAgICAgICAgICAgIG9wdC5pbnB1dC5vbmNsaWNrID0gYW5zd2VyRnVuYztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPSB7fTtcbn1cblxud2luZG93LmNvbXBvbmVudF9mYWN0b3J5Lm11bHRpcGxlY2hvaWNlID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICBpZiAob3B0cy50aW1lZCkge1xuICAgICAgICByZXR1cm4gbmV3IFRpbWVkTUMob3B0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNdWx0aXBsZUNob2ljZShvcHRzKTtcbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==