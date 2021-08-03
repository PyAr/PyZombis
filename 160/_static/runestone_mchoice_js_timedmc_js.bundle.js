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
___CSS_LOADER_EXPORT___.push([module.id, ".runestone label p {\r\n    display: inline;\r\n}\r\n", "",{"version":3,"sources":["webpack://./runestone/mchoice/css/mchoice.css"],"names":[],"mappings":"AAAA;IACI,eAAe;AACnB","sourcesContent":[".runestone label p {\r\n    display: inline;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL21jaG9pY2UvY3NzL21jaG9pY2UuY3NzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvbWNob2ljZS9jc3MvbWNob2ljZS5jc3M/ZTY2NSIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL21jaG9pY2UvanMvbWNob2ljZS5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL21jaG9pY2UvanMvdGltZWRtYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSw4REFBOEQsd0JBQXdCLEtBQUssV0FBVyxvR0FBb0csVUFBVSw4Q0FBOEMsd0JBQXdCLEtBQUssdUJBQXVCO0FBQ3RUO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQd0Q7QUFDL0YsWUFBK0Y7O0FBRS9GOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLHFGQUFPOzs7O0FBSXhCLGlFQUFlLDRGQUFjLE1BQU0sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWm5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkQ7QUFDN0Q7QUFDNEI7O0FBRXJCLGdCQUFnQjs7QUFFdkI7QUFDZSw2QkFBNkIsZ0VBQWE7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw0QkFBNEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNEJBQTRCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQ0FBbUM7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsbUJBQW1CLGdEQUFjO0FBQ2pDO0FBQ0EiLCJmaWxlIjoicnVuZXN0b25lX21jaG9pY2VfanNfdGltZWRtY19qcy5idW5kbGUuanM/dj0xMGZhNjEyZWE5YThhMjZmNTA0YiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnJ1bmVzdG9uZSBsYWJlbCBwIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ydW5lc3RvbmUvbWNob2ljZS9jc3MvbWNob2ljZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ydW5lc3RvbmUgbGFiZWwgcCB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWNob2ljZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PT09PT09PSAgICAgIE1hc3RlciBtY2hvaWNlLmpzICAgICA9PT09PT09PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09ICBUaGlzIGZpbGUgY29udGFpbnMgdGhlIEpTIGZvciB0aGUgICA9PT1cclxuPT09IFJ1bmVzdG9uZSBtdWx0aXBsZSBjaG9pY2UgY29tcG9uZW50LiA9PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09ICAgICAgICAgICAgICBDcmVhdGVkIEJ5ICAgICAgICAgICAgICA9PT1cclxuPT09ICAgICAgICAgICBJc2FpYWggTWF5ZXJjaGFrICAgICAgICAgICA9PT1cclxuPT09ICAgICAgICAgICAgICAgICBhbmQgICAgICAgICAgICAgICAgICA9PT1cclxuPT09ICAgICAgICAgICAgIEtpcmJ5IE9sc29uICAgICAgICAgICAgICA9PT1cclxuPT09ICAgICAgICAgICAgICAgIDYvNC8xNSAgICAgICAgICAgICAgICA9PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbmltcG9ydCBSdW5lc3RvbmVCYXNlIGZyb20gXCIuLi8uLi9jb21tb24vanMvcnVuZXN0b25lYmFzZS5qc1wiO1xyXG4vL2ltcG9ydCBcIi4vLi4vc3R5bGVzL3J1bmVzdG9uZS1jdXN0b20tc3BoaW54LWJvb3RzdHJhcC5jc3NcIjtcclxuaW1wb3J0IFwiLi4vY3NzL21jaG9pY2UuY3NzXCI7XHJcblxyXG5leHBvcnQgdmFyIG1jTGlzdCA9IHt9OyAvLyBNdWx0aXBsZSBDaG9pY2UgZGljdGlvbmFyeVxyXG5cclxuLy8gTUMgY29uc3RydWN0b3JcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVsdGlwbGVDaG9pY2UgZXh0ZW5kcyBSdW5lc3RvbmVCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcclxuICAgICAgICBzdXBlcihvcHRzKTtcclxuICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcclxuICAgICAgICB2YXIgb3JpZyA9IG9wdHMub3JpZzsgLy8gZW50aXJlIDx1bD4gZWxlbWVudFxyXG4gICAgICAgIHRoaXMub3JpZ0VsZW0gPSBvcmlnO1xyXG4gICAgICAgIHRoaXMudXNlUnVuZXN0b25lU2VydmljZXMgPSBvcHRzLnVzZVJ1bmVzdG9uZVNlcnZpY2VzO1xyXG4gICAgICAgIHRoaXMubXVsdGlwbGVhbnN3ZXJzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kaXZpZCA9IG9yaWcuaWQ7XHJcbiAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbSkuZGF0YShcIm11bHRpcGxlYW5zd2Vyc1wiKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLm11bHRpcGxlYW5zd2VycyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLm9yaWdFbGVtLmNoaWxkTm9kZXM7XHJcbiAgICAgICAgdGhpcy5yYW5kb20gPSBmYWxzZTtcclxuICAgICAgICBpZiAoJCh0aGlzLm9yaWdFbGVtKS5pcyhcIltkYXRhLXJhbmRvbV1cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5yYW5kb20gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvcnJlY3QgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYW5zd2VyTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29ycmVjdExpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmNvcnJlY3RJbmRleExpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmZlZWRiYWNrTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY2FwdGlvbiA9IFwiTXVsdGlwbGUgQ2hvaWNlXCI7XHJcbiAgICAgICAgdGhpcy5maW5kQW5zd2VycygpO1xyXG4gICAgICAgIHRoaXMuZmluZFF1ZXN0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5maW5kRmVlZGJhY2tzKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDb3JyZWN0TGlzdCgpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTUNGb3JtKCk7XHJcbiAgICAgICAgdGhpcy5hZGRDYXB0aW9uKFwicnVuZXN0b25lXCIpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tTZXJ2ZXIoXCJtQ2hvaWNlXCIsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICA9PT09IEZ1bmN0aW9ucyBwYXJzaW5nIHZhcmlhYmxlcyAgPT09PVxyXG4gICAgPT09PSAgb3V0IG9mIGludGVybWVkaWF0ZSBIVE1MICAgID09PT1cclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICBmaW5kUXVlc3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGRlbGltaXRlcjtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3JpZ0VsZW0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcmlnRWxlbS5jaGlsZE5vZGVzW2ldLm5vZGVOYW1lID09PSBcIkxJXCIpIHtcclxuICAgICAgICAgICAgICAgIGRlbGltaXRlciA9IHRoaXMub3JpZ0VsZW0uY2hpbGROb2Rlc1tpXS5vdXRlckhUTUw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZnVsbHRleHQgPSAkKHRoaXMub3JpZ0VsZW0pLmh0bWwoKTtcclxuICAgICAgICB2YXIgdGVtcCA9IGZ1bGx0ZXh0LnNwbGl0KGRlbGltaXRlcik7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbiA9IHRlbXBbMF07XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEFuc3dlcnMoKSB7XHJcbiAgICAgICAgLy8gQ3JlYXRlcyBhbnN3ZXIgb2JqZWN0cyBhbmQgcHVzaGVzIHRoZW0gdG8gYW5zd2VyTGlzdFxyXG4gICAgICAgIC8vIGZvcm1hdDogSUQsIENvcnJlY3QgYm9vbCwgQ29udGVudCAodGV4dClcclxuICAgICAgICB2YXIgQ2hpbGRBbnN3ZXJMaXN0ID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMuY2hpbGRyZW5baV0pLmlzKFwiW2RhdGEtY29tcG9uZW50PWFuc3dlcl1cIikpIHtcclxuICAgICAgICAgICAgICAgIENoaWxkQW5zd2VyTGlzdC5wdXNoKHRoaXMuY2hpbGRyZW5baV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgQ2hpbGRBbnN3ZXJMaXN0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIHZhciBhbnN3ZXJfaWQgPSAkKENoaWxkQW5zd2VyTGlzdFtqXSkuYXR0cihcImlkXCIpO1xyXG4gICAgICAgICAgICB2YXIgaXNfY29ycmVjdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoJChDaGlsZEFuc3dlckxpc3Rbal0pLmlzKFwiW2RhdGEtY29ycmVjdF1cIikpIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIGRhdGEtY29ycmVjdCBhdHRyaWJ1dGUgZXhpc3RzLCBhbnN3ZXIgaXMgY29ycmVjdFxyXG4gICAgICAgICAgICAgICAgaXNfY29ycmVjdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGFuc3dlcl90ZXh0ID0gJChDaGlsZEFuc3dlckxpc3Rbal0pLmh0bWwoKTtcclxuICAgICAgICAgICAgdmFyIGFuc3dlcl9vYmplY3QgPSB7XHJcbiAgICAgICAgICAgICAgICBpZDogYW5zd2VyX2lkLFxyXG4gICAgICAgICAgICAgICAgY29ycmVjdDogaXNfY29ycmVjdCxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGFuc3dlcl90ZXh0LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmFuc3dlckxpc3QucHVzaChhbnN3ZXJfb2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEZlZWRiYWNrcygpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcy5jaGlsZHJlbltpXSkuaXMoXCJbZGF0YS1jb21wb25lbnQ9ZmVlZGJhY2tdXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWRiYWNrTGlzdC5wdXNoKHRoaXMuY2hpbGRyZW5baV0uaW5uZXJIVE1MKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDb3JyZWN0TGlzdCgpIHtcclxuICAgICAgICAvLyBDcmVhdGVzIGFycmF5IHRoYXQgaG9sZHMgdGhlIElEXCJzIG9mIGNvcnJlY3QgYW5zd2Vyc1xyXG4gICAgICAgIC8vIEFsc28gcG9wdWxhdGVzIGFuIGFycmF5IHRoYXQgaG9sZHMgdGhlIGluZGVjZXMgb2YgY29ycmVjdCBhbnN3ZXJzXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFuc3dlckxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYW5zd2VyTGlzdFtpXS5jb3JyZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RMaXN0LnB1c2godGhpcy5hbnN3ZXJMaXN0W2ldLmlkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdEluZGV4TGlzdC5wdXNoKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgPT09PSAgIEZ1bmN0aW9ucyBnZW5lcmF0aW5nIGZpbmFsIEhUTUwgICA9PT09XHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgIGNyZWF0ZU1DRm9ybSgpIHtcclxuICAgICAgICB0aGlzLnJlbmRlck1DQ29udGFpbmVyKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJNQ0Zvcm0oKTsgLy8gcmVuZGVycyB0aGUgZm9ybSB3aXRoIG9wdGlvbnMgYW5kIGJ1dHRvbnNcclxuICAgICAgICB0aGlzLnJlbmRlck1DZmVlZGJhY2tEaXYoKTtcclxuICAgICAgICAvLyByZXBsYWNlcyBpbnRlcm1lZGlhdGUgSFRNTCB3aXRoIHJlbmRlcmVkIEhUTUxcclxuICAgICAgICAkKHRoaXMub3JpZ0VsZW0pLnJlcGxhY2VXaXRoKHRoaXMuY29udGFpbmVyRGl2KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJNQ0NvbnRhaW5lcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lckRpdikuaHRtbCh0aGlzLnF1ZXN0aW9uKTtcclxuICAgICAgICAkKHRoaXMuY29udGFpbmVyRGl2KS5hZGRDbGFzcyh0aGlzLm9yaWdFbGVtLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5pZCA9IHRoaXMuZGl2aWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyTUNGb3JtKCkge1xyXG4gICAgICAgIHRoaXMub3B0c0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgICAgICB0aGlzLm9wdHNGb3JtLmlkID0gdGhpcy5kaXZpZCArIFwiX2Zvcm1cIjtcclxuICAgICAgICAkKHRoaXMub3B0c0Zvcm0pLmF0dHIoe1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICAgICAgICAgIGFjdGlvbjogXCJcIixcclxuICAgICAgICAgICAgb25zdWJtaXQ6IFwicmV0dXJuIGZhbHNlO1wiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGdlbmVyYXRlIGZvcm0gb3B0aW9uc1xyXG4gICAgICAgIHRoaXMucmVuZGVyTUNGb3JtT3B0cygpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyTUNGb3JtQnV0dG9ucygpO1xyXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgZm9ybSB0byB0aGUgY29udGFpbmVyXHJcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5vcHRzRm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyTUNGb3JtT3B0cygpIHtcclxuICAgICAgICAvLyBjcmVhdGVzIGlucHV0IERPTSBlbGVtZW50c1xyXG4gICAgICAgIHRoaXMub3B0aW9uQXJyYXkgPSBbXTsgLy8gYXJyYXkgd2l0aCBhbiBvYmplY3QgZm9yIGVhY2ggb3B0aW9uIGNvbnRhaW5pbmcgdGhlIGlucHV0IGFuZCBsYWJlbCBmb3IgdGhhdCBvcHRpb25cclxuICAgICAgICB2YXIgaW5wdXRfdHlwZSA9IFwicmFkaW9cIjtcclxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZWFuc3dlcnMpIHtcclxuICAgICAgICAgICAgaW5wdXRfdHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5pbmRleEFycmF5IGlzIHVzZWQgdG8gaW5kZXggdGhyb3VnaCB0aGUgYW5zd2Vyc1xyXG4gICAgICAgIC8vIGl0IGlzIGp1c3QgMC1uIG5vcm1hbGx5LCBidXQgdGhlIG9yZGVyIGlzIHNodWZmbGVkIGlmIHRoZSByYW5kb20gb3B0aW9uIGlzIHByZXNlbnRcclxuICAgICAgICB0aGlzLmluZGV4QXJyYXkgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYW5zd2VyTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4QXJyYXkucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucmFuZG9tKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmFuZG9taXplQW5zd2VycygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGFuc3dlckZ1bmMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuaXNBbnN3ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuYW5zd2VyTGlzdC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICB2YXIgayA9IHRoaXMuaW5kZXhBcnJheVtqXTtcclxuICAgICAgICAgICAgdmFyIG9wdGlkID0gdGhpcy5kaXZpZCArIFwiX29wdF9cIiArIGs7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgbGFiZWwgZm9yIHRoZSBpbnB1dFxyXG4gICAgICAgICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgIC8vIElmIHRoZSBjb250ZW50IGJlZ2lucyB3aXRoIGEgYGA8cD5gYCwgcHV0IHRoZSBsYWJlbCBpbnNpZGUgb2YgaXQuIChTcGhpbnggMi4wIHB1dHMgYWxsIGNvbnRlbnQgaW4gYSBgYDxwPmBgLCB3aGlsZSBTcGhpbnggMS44IGRvZXNuJ3QpLlxyXG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHRoaXMuYW5zd2VyTGlzdFtrXS5jb250ZW50O1xyXG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gXCJcIjtcclxuICAgICAgICAgICAgaWYgKGNvbnRlbnQuc3RhcnRzV2l0aChcIjxwPlwiKSkge1xyXG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCI8cD5cIjtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnNsaWNlKDMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQobGFiZWwpLmh0bWwoXHJcbiAgICAgICAgICAgICAgICBgJHtwcmVmaXh9PGlucHV0IHR5cGU9XCIke2lucHV0X3R5cGV9XCIgbmFtZT1cImdyb3VwMVwiIHZhbHVlPSR7a30gaWQ9JHtvcHRpZH0+JHtTdHJpbmcuZnJvbUNoYXJDb2RlKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQVwiLmNoYXJDb2RlQXQoMCkgKyBqXHJcbiAgICAgICAgICAgICAgICApfS4gJHtjb250ZW50fWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBvYmplY3QgdG8gc3RvcmUgaW4gb3B0aW9uQXJyYXlcclxuICAgICAgICAgICAgdmFyIG9wdE9iaiA9IHtcclxuICAgICAgICAgICAgICAgIGlucHV0OiAkKGxhYmVsKS5maW5kKFwiaW5wdXRcIilbMF0sXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWwsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIG9wdE9iai5pbnB1dC5vbmNsaWNrID0gYW5zd2VyRnVuYztcclxuXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uQXJyYXkucHVzaChvcHRPYmopO1xyXG4gICAgICAgICAgICAvLyBhZGQgdGhlIG9wdGlvbiB0byB0aGUgZm9ybVxyXG4gICAgICAgICAgICB0aGlzLm9wdHNGb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRzRm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJNQ0Zvcm1CdXR0b25zKCkge1xyXG4gICAgICAgIC8vIHN1Ym1pdCBhbmQgY29tcGFyZSBtZSBidXR0b25zXHJcbiAgICAgICAgLy8gQ3JlYXRlIHN1Ym1pdCBidXR0b25cclxuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkNoZWNrIE1lXCI7XHJcbiAgICAgICAgJCh0aGlzLnN1Ym1pdEJ1dHRvbikuYXR0cih7XHJcbiAgICAgICAgICAgIGNsYXNzOiBcImJ0biBidG4tc3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICBuYW1lOiBcImRvIGFuc3dlclwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlYW5zd2Vycykge1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAgICAgXCJjbGlja1wiLFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc01DTUFTdWJtaXNzaW9uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAgICAgXCJjbGlja1wiLFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NNQ01GU3VibWlzc2lvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSAvLyBlbmQgZWxzZVxyXG4gICAgICAgIHRoaXMub3B0c0Zvcm0uYXBwZW5kQ2hpbGQodGhpcy5zdWJtaXRCdXR0b24pO1xyXG4gICAgICAgIC8vIENyZWF0ZSBjb21wYXJlIGJ1dHRvblxyXG4gICAgICAgIGlmICh0aGlzLnVzZVJ1bmVzdG9uZVNlcnZpY2VzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGFyZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgICQodGhpcy5jb21wYXJlQnV0dG9uKS5hdHRyKHtcclxuICAgICAgICAgICAgICAgIGNsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxyXG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMuZGl2aWQgKyBcIl9iY29tcFwiLFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImNvbXBhcmVcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGFyZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29tcGFyZSBtZVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBhcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBhcmVBbnN3ZXJzKHRoaXMuZGl2aWQpO1xyXG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRzRm9ybS5hcHBlbmRDaGlsZCh0aGlzLmNvbXBhcmVCdXR0b24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJNQ2ZlZWRiYWNrRGl2KCkge1xyXG4gICAgICAgIHRoaXMuZmVlZEJhY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuZmVlZEJhY2tEaXYuaWQgPSB0aGlzLmRpdmlkICsgXCJfZmVlZGJhY2tcIjtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRoaXMuZmVlZEJhY2tEaXYpO1xyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbWl6ZUFuc3dlcnMoKSB7XHJcbiAgICAgICAgLy8gTWFrZXMgdGhlIG9yZGVyaW5nIG9mIHRoZSBhbnN3ZXIgY2hvaWNlcyByYW5kb21cclxuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gdGhpcy5pbmRleEFycmF5Lmxlbmd0aCxcclxuICAgICAgICAgICAgdGVtcG9yYXJ5VmFsdWUsXHJcbiAgICAgICAgICAgIHJhbmRvbUluZGV4O1xyXG4gICAgICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLi4uXHJcbiAgICAgICAgd2hpbGUgKGN1cnJlbnRJbmRleCAhPT0gMCkge1xyXG4gICAgICAgICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnQuLi5cclxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xyXG4gICAgICAgICAgICBjdXJyZW50SW5kZXggLT0gMTtcclxuICAgICAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxyXG4gICAgICAgICAgICB0ZW1wb3JhcnlWYWx1ZSA9IHRoaXMuaW5kZXhBcnJheVtjdXJyZW50SW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4QXJyYXlbY3VycmVudEluZGV4XSA9IHRoaXMuaW5kZXhBcnJheVtyYW5kb21JbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXhBcnJheVtyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcclxuICAgICAgICAgICAgdmFyIHRlbXBvcmFyeUZlZWRiYWNrID0gdGhpcy5mZWVkYmFja0xpc3RbY3VycmVudEluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5mZWVkYmFja0xpc3RbY3VycmVudEluZGV4XSA9IHRoaXMuZmVlZGJhY2tMaXN0W3JhbmRvbUluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5mZWVkYmFja0xpc3RbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5RmVlZGJhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgID09PSBDaGVja2luZy9sb2FkaW5nIGZyb20gc3RvcmFnZSA9PT1cclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgIHJlc3RvcmVBbnN3ZXJzKGRhdGEpIHtcclxuICAgICAgICAvLyBSZXN0b3JlIGFuc3dlcnMgZnJvbSBzdG9yYWdlIHJldHJpZXZhbCBkb25lIGluIFJ1bmVzdG9uZUJhc2VcclxuICAgICAgICAvLyBzb21ldGltZXMgZGF0YS5hbnN3ZXIgY2FuIGJlIG51bGxcclxuICAgICAgICBpZiAoIWRhdGEuYW5zd2VyKSB7XHJcbiAgICAgICAgICAgIGRhdGEuYW5zd2VyID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGFuc3dlcnMgPSBkYXRhLmFuc3dlci5zcGxpdChcIixcIik7XHJcbiAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBhbnN3ZXJzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGFuc3dlcnNbYV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIGIgPSAwOyBiIDwgdGhpcy5vcHRpb25BcnJheS5sZW5ndGg7IGIrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9uQXJyYXlbYl0uaW5wdXQudmFsdWUgPT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMub3B0aW9uQXJyYXlbYl0uaW5wdXQpLmF0dHIoXCJjaGVja2VkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZWFuc3dlcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzTUNNQVN1Ym1pc3Npb24oZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc01DTUZTdWJtaXNzaW9uKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tMb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICAgICAgLy8gUmVwb3B1bGF0ZXMgTUNNQSBxdWVzdGlvbnMgd2l0aCBhIHVzZXIncyBwcmV2aW91cyBhbnN3ZXJzLFxyXG4gICAgICAgIC8vIHdoaWNoIHdlcmUgc3RvcmVkIGludG8gbG9jYWwgc3RvcmFnZS5cclxuICAgICAgICB2YXIgc3RvcmVkRGF0YTtcclxuICAgICAgICB2YXIgYW5zd2VycztcclxuICAgICAgICBpZiAodGhpcy5ncmFkZXJhY3RpdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbGVuID0gbG9jYWxTdG9yYWdlLmxlbmd0aDtcclxuICAgICAgICBpZiAobGVuID4gMCkge1xyXG4gICAgICAgICAgICB2YXIgZXggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSgpKTtcclxuICAgICAgICAgICAgaWYgKGV4ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlZERhdGEgPSBKU09OLnBhcnNlKGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBhbnN3ZXJzID0gc3RvcmVkRGF0YS5hbnN3ZXIuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZXJyb3Igd2hpbGUgcGFyc2luZzsgbGlrZWx5IGR1ZSB0byBiYWQgdmFsdWUgc3RvcmVkIGluIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBhbnN3ZXJzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gYW5zd2Vyc1thXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBiID0gMDsgYiA8IHRoaXMub3B0aW9uQXJyYXkubGVuZ3RoOyBiKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9uQXJyYXlbYl0uaW5wdXQudmFsdWUgPT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcy5vcHRpb25BcnJheVtiXS5pbnB1dCkuYXR0cihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoZWNrZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZVJ1bmVzdG9uZVNlcnZpY2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmFibGVNQ0NvbXBhcmlzb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFN1Ym1pdHRlZE9wdHMoKTsgLy8gdG8gcG9wdWxhdGUgZ2l2ZW5sb2cgZm9yIGxvZ2dpbmdcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZWFuc3dlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dNQ01Bc3VibWlzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nTUNNRnN1Ym1pc3Npb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TG9jYWxTdG9yYWdlKGRhdGEpIHtcclxuICAgICAgICB2YXIgdGltZVN0YW1wID0gbmV3IERhdGUoKTtcclxuICAgICAgICB2YXIgc3RvcmFnZU9iaiA9IHtcclxuICAgICAgICAgICAgYW5zd2VyOiBkYXRhLmFuc3dlcixcclxuICAgICAgICAgICAgdGltZXN0YW1wOiB0aW1lU3RhbXAsXHJcbiAgICAgICAgICAgIGNvcnJlY3Q6IGRhdGEuY29ycmVjdCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZUtleSgpLFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShzdG9yYWdlT2JqKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICA9PT0gUHJvY2Vzc2luZyBNQyBTdWJtaXNzaW9ucyA9PT1cclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgcHJvY2Vzc01DTUFTdWJtaXNzaW9uKGxvZ0ZsYWcpIHtcclxuICAgICAgICAvLyBDYWxsZWQgd2hlbiB0aGUgc3VibWl0IGJ1dHRvbiBpcyBjbGlja2VkXHJcbiAgICAgICAgdGhpcy5nZXRTdWJtaXR0ZWRPcHRzKCk7IC8vIG1ha2Ugc3VyZSB0aGlzLmdpdmVuQXJyYXkgaXMgcG9wdWxhdGVkXHJcbiAgICAgICAgdGhpcy5zY29yZU1DTUFTdWJtaXNzaW9uKCk7XHJcbiAgICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBjb3JyZWN0OiB0aGlzLmNvcnJlY3QgPyBcIlRcIiA6IFwiRlwiLFxyXG4gICAgICAgICAgICBhbnN3ZXI6IHRoaXMuZ2l2ZW5BcnJheS5qb2luKFwiLFwiKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAobG9nRmxhZykge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ01DTUFzdWJtaXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVuZGVyTUNNQUZlZWRCYWNrKCk7XHJcbiAgICAgICAgaWYgKHRoaXMudXNlUnVuZXN0b25lU2VydmljZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmFibGVNQ0NvbXBhcmlzb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3VibWl0dGVkT3B0cygpIHtcclxuICAgICAgICB2YXIgZ2l2ZW47XHJcbiAgICAgICAgdGhpcy5zaW5nbGVmZWVkYmFjayA9IFwiXCI7IC8vIFVzZWQgZm9yIE1DTUYgcXVlc3Rpb25zXHJcbiAgICAgICAgdGhpcy5mZWVkYmFja1N0cmluZyA9IFwiXCI7IC8vIFVzZWQgZm9yIE1DTUEgcXVlc3Rpb25zXHJcbiAgICAgICAgdGhpcy5naXZlbkFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5naXZlbmxvZyA9IFwiXCI7XHJcbiAgICAgICAgdmFyIGJ1dHRvbk9ianMgPSB0aGlzLm9wdHNGb3JtLmVsZW1lbnRzLmdyb3VwMTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ1dHRvbk9ianMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGJ1dHRvbk9ianNbaV0uY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgZ2l2ZW4gPSBidXR0b25PYmpzW2ldLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5naXZlbkFycmF5LnB1c2goZ2l2ZW4pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkYmFja1N0cmluZyArPSBgPGxpIHZhbHVlPVwiJHtpICsgMX1cIj4ke3RoaXMuZmVlZGJhY2tMaXN0W2ldXHJcbiAgICAgICAgICAgICAgICAgICAgfTwvbGk+YDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2l2ZW5sb2cgKz0gZ2l2ZW4gKyBcIixcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlZmVlZGJhY2sgPSB0aGlzLmZlZWRiYWNrTGlzdFtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdpdmVuQXJyYXkuc29ydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQ3VycmVudEFuc3dlcigpIHtcclxuICAgICAgICB0aGlzLmdldFN1Ym1pdHRlZE9wdHMoKTtcclxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZWFuc3dlcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5zY29yZU1DTUFTdWJtaXNzaW9uKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zY29yZU1DTUZTdWJtaXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvZ0N1cnJlbnRBbnN3ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGVhbnN3ZXJzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nTUNNQXN1Ym1pc3Npb24oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ01DTUZzdWJtaXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckZlZWRiYWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlYW5zd2Vycykge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlck1DTUFGZWVkQmFjaygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyTUNNRkZlZWRiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2NvcmVNQ01BU3VibWlzc2lvbigpIHtcclxuICAgICAgICB0aGlzLmNvcnJlY3RDb3VudCA9IDA7XHJcbiAgICAgICAgdmFyIGNvcnJlY3RJbmRleCA9IDA7XHJcbiAgICAgICAgdmFyIGdpdmVuSW5kZXggPSAwO1xyXG4gICAgICAgIHdoaWxlIChcclxuICAgICAgICAgICAgY29ycmVjdEluZGV4IDwgdGhpcy5jb3JyZWN0SW5kZXhMaXN0Lmxlbmd0aCAmJlxyXG4gICAgICAgICAgICBnaXZlbkluZGV4IDwgdGhpcy5naXZlbkFycmF5Lmxlbmd0aFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdpdmVuQXJyYXlbZ2l2ZW5JbmRleF0gPFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0SW5kZXhMaXN0W2NvcnJlY3RJbmRleF1cclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBnaXZlbkluZGV4Kys7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdpdmVuQXJyYXlbZ2l2ZW5JbmRleF0gPT1cclxuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdEluZGV4TGlzdFtjb3JyZWN0SW5kZXhdXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0Q291bnQrKztcclxuICAgICAgICAgICAgICAgIGdpdmVuSW5kZXgrKztcclxuICAgICAgICAgICAgICAgIGNvcnJlY3RJbmRleCsrO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29ycmVjdEluZGV4Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG51bUdpdmVuID0gdGhpcy5naXZlbkFycmF5Lmxlbmd0aDtcclxuICAgICAgICB2YXIgbnVtQ29ycmVjdCA9IHRoaXMuY29ycmVjdENvdW50O1xyXG4gICAgICAgIHZhciBudW1OZWVkZWQgPSB0aGlzLmNvcnJlY3RMaXN0Lmxlbmd0aDtcclxuICAgICAgICB0aGlzLmFuc3dlciA9IHRoaXMuZ2l2ZW5BcnJheS5qb2luKFwiLFwiKTtcclxuICAgICAgICB0aGlzLmNvcnJlY3QgPSBudW1Db3JyZWN0ID09PSBudW1OZWVkZWQgJiYgbnVtTmVlZGVkID09PSBudW1HaXZlbjtcclxuICAgICAgICBpZiAobnVtR2l2ZW4gPT09IG51bU5lZWRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnBlcmNlbnQgPSBudW1Db3JyZWN0IC8gbnVtTmVlZGVkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVyY2VudCA9IG51bUNvcnJlY3QgLyBNYXRoLm1heChudW1HaXZlbiwgbnVtTmVlZGVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9nTUNNQXN1Ym1pc3Npb24oKSB7XHJcbiAgICAgICAgdmFyIGFuc3dlciA9IHRoaXMuYW5zd2VyO1xyXG4gICAgICAgIHZhciBjb3JyZWN0ID0gdGhpcy5jb3JyZWN0O1xyXG4gICAgICAgIHZhciBsb2dBbnN3ZXIgPVxyXG4gICAgICAgICAgICBcImFuc3dlcjpcIiArIGFuc3dlciArIFwiOlwiICsgKGNvcnJlY3QgPT0gXCJUXCIgPyBcImNvcnJlY3RcIiA6IFwibm9cIik7XHJcbiAgICAgICAgdGhpcy5sb2dCb29rRXZlbnQoe1xyXG4gICAgICAgICAgICBldmVudDogXCJtQ2hvaWNlXCIsXHJcbiAgICAgICAgICAgIGFjdDogbG9nQW5zd2VyLFxyXG4gICAgICAgICAgICBhbnN3ZXI6IGFuc3dlcixcclxuICAgICAgICAgICAgY29ycmVjdDogY29ycmVjdCxcclxuICAgICAgICAgICAgZGl2X2lkOiB0aGlzLmRpdmlkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlck1DTUFGZWVkQmFjaygpIHtcclxuICAgICAgICB2YXIgYW5zd2VyU3RyID0gXCJhbnN3ZXJzXCI7XHJcbiAgICAgICAgdmFyIG51bUdpdmVuID0gdGhpcy5naXZlbkFycmF5Lmxlbmd0aDtcclxuICAgICAgICBpZiAobnVtR2l2ZW4gPT09IDEpIHtcclxuICAgICAgICAgICAgYW5zd2VyU3RyID0gXCJhbnN3ZXJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG51bUNvcnJlY3QgPSB0aGlzLmNvcnJlY3RDb3VudDtcclxuICAgICAgICB2YXIgbnVtTmVlZGVkID0gdGhpcy5jb3JyZWN0TGlzdC5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGZlZWRiYWNrVGV4dCA9IHRoaXMuZmVlZGJhY2tTdHJpbmc7XHJcbiAgICAgICAgaWYgKHRoaXMuY29ycmVjdCkge1xyXG4gICAgICAgICAgICAkKHRoaXMuZmVlZEJhY2tEaXYpLmh0bWwoYOKclO+4jyA8b2wgdHlwZT1cIkFcIj4ke2ZlZWRiYWNrVGV4dH08L3VsPmApO1xyXG4gICAgICAgICAgICAkKHRoaXMuZmVlZEJhY2tEaXYpLmF0dHIoXCJjbGFzc1wiLCBcImFsZXJ0IGFsZXJ0LWluZm9cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzLmZlZWRCYWNrRGl2KS5odG1sKFxyXG4gICAgICAgICAgICAgICAgYOKclu+4jyBZb3UgZ2F2ZSAke251bUdpdmVufSAke2Fuc3dlclN0cn0gYW5kIGdvdCAke251bUNvcnJlY3R9IGNvcnJlY3Qgb2YgJHtudW1OZWVkZWR9IG5lZWRlZC48b2wgdHlwZT1cIkFcIj4ke2ZlZWRiYWNrVGV4dH08L3VsPmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgJCh0aGlzLmZlZWRCYWNrRGl2KS5hdHRyKFwiY2xhc3NcIiwgXCJhbGVydCBhbGVydC1kYW5nZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NNQ01GU3VibWlzc2lvbihsb2dGbGFnKSB7XHJcbiAgICAgICAgLy8gQ2FsbGVkIHdoZW4gdGhlIHN1Ym1pdCBidXR0b24gaXMgY2xpY2tlZFxyXG4gICAgICAgIHRoaXMuZ2V0U3VibWl0dGVkT3B0cygpOyAvLyBtYWtlIHN1cmUgdGhpcy5naXZlbkFycmF5IGlzIHBvcHVsYXRlZFxyXG4gICAgICAgIHRoaXMuc2NvcmVNQ01GU3VibWlzc2lvbigpO1xyXG4gICAgICAgIHRoaXMuc2V0TG9jYWxTdG9yYWdlKHtcclxuICAgICAgICAgICAgY29ycmVjdDogdGhpcy5jb3JyZWN0ID8gXCJUXCIgOiBcIkZcIixcclxuICAgICAgICAgICAgYW5zd2VyOiB0aGlzLmdpdmVuQXJyYXkuam9pbihcIixcIiksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGxvZ0ZsYWcpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dNQ01Gc3VibWlzc2lvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbmRlck1DTUZGZWVkYmFjaygpO1xyXG4gICAgICAgIGlmICh0aGlzLnVzZVJ1bmVzdG9uZVNlcnZpY2VzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlTUNDb21wYXJpc29uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNjb3JlTUNNRlN1Ym1pc3Npb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2l2ZW5BcnJheVswXSA9PSB0aGlzLmNvcnJlY3RJbmRleExpc3RbMF0pIHtcclxuICAgICAgICAgICAgdGhpcy5jb3JyZWN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5wZXJjZW50ID0gMS4wO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5naXZlbkFycmF5WzBdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gaWYgZ2l2ZW4gaXMgbnVsbCB0aGVuIHRoZSBxdWVzdGlvbiB3YXNuXCJ0IGFuc3dlcmVkIGFuZCBzaG91bGQgYmUgY291bnRlZCBhcyBza2lwcGVkXHJcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnBlcmNlbnQgPSAwLjA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvZ01DTUZzdWJtaXNzaW9uKCkge1xyXG4gICAgICAgIHZhciBhbnN3ZXIgPSB0aGlzLmdpdmVuQXJyYXlbMF07XHJcbiAgICAgICAgdmFyIGNvcnJlY3QgPVxyXG4gICAgICAgICAgICB0aGlzLmdpdmVuQXJyYXlbMF0gPT0gdGhpcy5jb3JyZWN0SW5kZXhMaXN0WzBdID8gXCJUXCIgOiBcIkZcIjtcclxuICAgICAgICB2YXIgbG9nQW5zd2VyID1cclxuICAgICAgICAgICAgXCJhbnN3ZXI6XCIgKyBhbnN3ZXIgKyBcIjpcIiArIChjb3JyZWN0ID09IFwiVFwiID8gXCJjb3JyZWN0XCIgOiBcIm5vXCIpOyAvLyBiYWNrd2FyZCBjb21wYXRpYmxlXHJcbiAgICAgICAgdGhpcy5sb2dCb29rRXZlbnQoe1xyXG4gICAgICAgICAgICBldmVudDogXCJtQ2hvaWNlXCIsXHJcbiAgICAgICAgICAgIGFjdDogbG9nQW5zd2VyLFxyXG4gICAgICAgICAgICBhbnN3ZXI6IGFuc3dlcixcclxuICAgICAgICAgICAgY29ycmVjdDogY29ycmVjdCxcclxuICAgICAgICAgICAgZGl2X2lkOiB0aGlzLmRpdmlkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlck1DTUZGZWVkYmFjaygpIHtcclxuICAgICAgICBsZXQgY29ycmVjdCA9IHRoaXMuZ2l2ZW5BcnJheVswXSA9PSB0aGlzLmNvcnJlY3RJbmRleExpc3RbMF07XHJcbiAgICAgICAgbGV0IGZlZWRiYWNrVGV4dCA9IHRoaXMuc2luZ2xlZmVlZGJhY2s7XHJcblxyXG4gICAgICAgIGlmIChjb3JyZWN0KSB7XHJcbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuaHRtbChcIuKclO+4jyBcIiArIGZlZWRiYWNrVGV4dCk7XHJcbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuYXR0cihcImNsYXNzXCIsIFwiYWxlcnQgYWxlcnQtaW5mb1wiKTsgLy8gdXNlIGJsdWUgZm9yIGJldHRlciByZWQvZ3JlZW4gYmx1ZSBjb2xvciBibGluZG5lc3NcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZmVlZGJhY2tUZXh0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGZlZWRiYWNrVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCh0aGlzLmZlZWRCYWNrRGl2KS5odG1sKFwi4pyW77iPIFwiICsgZmVlZGJhY2tUZXh0KTtcclxuICAgICAgICAgICAgJCh0aGlzLmZlZWRCYWNrRGl2KS5hdHRyKFwiY2xhc3NcIiwgXCJhbGVydCBhbGVydC1kYW5nZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZW5hYmxlTUNDb21wYXJpc29uKCkge1xyXG4gICAgICAgIGlmIChlQm9va0NvbmZpZy5lbmFibGVDb21wYXJlTWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21wYXJlQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5zdHJ1Y3Rvck1jaG9pY2VNb2RhbChkYXRhKSB7XHJcbiAgICAgICAgLy8gZGF0YS5yZXNsaXN0IC0tIHN0dWRlbnQgYW5kIHRoZWlyIGFuc3dlcnNcclxuICAgICAgICAvLyBkYXRhLmFuc3dlckRpY3QgICAgLS0gYW5zd2VycyBhbmQgY291bnRcclxuICAgICAgICAvLyBkYXRhLmNvcnJlY3QgLSBjb3JyZWN0IGFuc3dlclxyXG4gICAgICAgIHZhciByZXMgPSBcIjx0YWJsZT48dHI+PHRoPlN0dWRlbnQ8L3RoPjx0aD5BbnN3ZXIocyk8L3RoPjwvdHI+XCI7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgIHJlcyArPVxyXG4gICAgICAgICAgICAgICAgXCI8dHI+PHRkPlwiICtcclxuICAgICAgICAgICAgICAgIGRhdGFbaV1bMF0gK1xyXG4gICAgICAgICAgICAgICAgXCI8L3RkPjx0ZD5cIiArXHJcbiAgICAgICAgICAgICAgICBkYXRhW2ldWzFdICtcclxuICAgICAgICAgICAgICAgIFwiPC90ZD48L3RyPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXMgKz0gXCI8L3RhYmxlPlwiO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbiAgICBjb21wYXJlTW9kYWwoZGF0YSwgc3RhdHVzLCB3aGF0ZXZlcikge1xyXG4gICAgICAgIHZhciBkYXRhZGljdCA9IEpTT04ucGFyc2UoZGF0YSlbMF07XHJcbiAgICAgICAgdmFyIGFuc3dlcnMgPSBkYXRhZGljdC5hbnN3ZXJEaWN0O1xyXG4gICAgICAgIHZhciBtaXNjID0gZGF0YWRpY3QubWlzYztcclxuICAgICAgICB2YXIga2wgPSBPYmplY3Qua2V5cyhhbnN3ZXJzKS5zb3J0KCk7XHJcbiAgICAgICAgdmFyIGJvZHkgPSBcIjx0YWJsZT5cIjtcclxuICAgICAgICBib2R5ICs9IFwiPHRyPjx0aD5BbnN3ZXI8L3RoPjx0aD5QZXJjZW50PC90aD48L3RyPlwiO1xyXG4gICAgICAgIHZhciB0aGVDbGFzcyA9IFwiXCI7XHJcbiAgICAgICAgZm9yICh2YXIgayBpbiBrbCkge1xyXG4gICAgICAgICAgICBpZiAoa2xba10gPT09IG1pc2MuY29ycmVjdCkge1xyXG4gICAgICAgICAgICAgICAgdGhlQ2xhc3MgPSBcInN1Y2Nlc3NcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoZUNsYXNzID0gXCJpbmZvXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYm9keSArPVxyXG4gICAgICAgICAgICAgICAgXCI8dHI+PHRkPlwiICsga2xba10gKyBcIjwvdGQ+PHRkIGNsYXNzPSdjb21wYXJlLW1lLXByb2dyZXNzJz5cIjtcclxuICAgICAgICAgICAgdmFyIHBjdCA9IGFuc3dlcnNba2xba11dICsgXCIlXCI7XHJcbiAgICAgICAgICAgIGJvZHkgKz0gXCI8ZGl2IGNsYXNzPSdwcm9ncmVzcyc+XCI7XHJcbiAgICAgICAgICAgIGJvZHkgKz1cclxuICAgICAgICAgICAgICAgIFwiICAgIDxkaXYgY2xhc3M9J3Byb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItXCIgK1xyXG4gICAgICAgICAgICAgICAgdGhlQ2xhc3MgK1xyXG4gICAgICAgICAgICAgICAgXCInIHN0eWxlPSd3aWR0aDpcIiArXHJcbiAgICAgICAgICAgICAgICBwY3QgK1xyXG4gICAgICAgICAgICAgICAgXCI7Jz5cIiArXHJcbiAgICAgICAgICAgICAgICBwY3Q7XHJcbiAgICAgICAgICAgIGJvZHkgKz0gXCIgICAgPC9kaXY+XCI7XHJcbiAgICAgICAgICAgIGJvZHkgKz0gXCI8L2Rpdj48L3RkPjwvdHI+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvZHkgKz0gXCI8L3RhYmxlPlwiO1xyXG4gICAgICAgIGlmIChtaXNjLnlvdXJwY3QgIT09IFwidW5hdmFpbGFibGVcIikge1xyXG4gICAgICAgICAgICBib2R5ICs9XHJcbiAgICAgICAgICAgICAgICBcIjxiciAvPjxwPllvdSBoYXZlIFwiICtcclxuICAgICAgICAgICAgICAgIG1pc2MueW91cnBjdCArXHJcbiAgICAgICAgICAgICAgICBcIiUgY29ycmVjdCBmb3IgYWxsIHF1ZXN0aW9uczwvcD5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGFkaWN0LnJlc2xpc3QgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBib2R5ICs9IHRoaXMuaW5zdHJ1Y3Rvck1jaG9pY2VNb2RhbChkYXRhZGljdC5yZXNsaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0bWwgPVxyXG4gICAgICAgICAgICBcIjxkaXYgY2xhc3M9J21vZGFsIGZhZGUnPlwiICtcclxuICAgICAgICAgICAgXCIgICAgPGRpdiBjbGFzcz0nbW9kYWwtZGlhbG9nIGNvbXBhcmUtbW9kYWwnPlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWNvbnRlbnQnPlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1oZWFkZXInPlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdjbG9zZScgZGF0YS1kaXNtaXNzPSdtb2RhbCcgYXJpYS1oaWRkZW49J3RydWUnPiZ0aW1lczs8L2J1dHRvbj5cIiArXHJcbiAgICAgICAgICAgIFwiICAgICAgICAgICAgICAgIDxoNCBjbGFzcz0nbW9kYWwtdGl0bGUnPkRpc3RyaWJ1dGlvbiBvZiBBbnN3ZXJzPC9oND5cIiArXHJcbiAgICAgICAgICAgIFwiICAgICAgICAgICAgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWJvZHknPlwiICtcclxuICAgICAgICAgICAgYm9keSArXHJcbiAgICAgICAgICAgIFwiICAgICAgICAgICAgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICAgICAgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICA8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgIFwiPC9kaXY+XCI7XHJcbiAgICAgICAgdmFyIGVsID0gJChodG1sKTtcclxuICAgICAgICBlbC5tb2RhbCgpO1xyXG4gICAgfVxyXG4gICAgY29tcGFyZUFuc3dlcnMoKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB7fTtcclxuICAgICAgICBkYXRhLmRpdl9pZCA9IHRoaXMuZGl2aWQ7XHJcbiAgICAgICAgZGF0YS5jb3Vyc2UgPSBlQm9va0NvbmZpZy5jb3Vyc2U7XHJcbiAgICAgICAgalF1ZXJ5LmdldChcclxuICAgICAgICAgICAgZUJvb2tDb25maWcuYWpheFVSTCArIFwiZ2V0YWdncmVnYXRlcmVzdWx0c1wiLFxyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICB0aGlzLmNvbXBhcmVNb2RhbC5iaW5kKHRoaXMpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNhYmxlSW50ZXJhY3Rpb24oKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uQXJyYXlbaV0uaW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT0gRmluZCB0aGUgY3VzdG9tIEhUTUwgdGFncyBhbmQgPT1cclxuPT0gICBleGVjdXRlIG91ciBjb2RlIG9uIHRoZW0gICAgPT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuJChkb2N1bWVudCkuYmluZChcInJ1bmVzdG9uZTpsb2dpbi1jb21wbGV0ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiW2RhdGEtY29tcG9uZW50PW11bHRpcGxlY2hvaWNlXVwiKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIC8vIE1DXHJcbiAgICAgICAgdmFyIG9wdHMgPSB7XHJcbiAgICAgICAgICAgIG9yaWc6IHRoaXMsXHJcbiAgICAgICAgICAgIHVzZVJ1bmVzdG9uZVNlcnZpY2VzOiBlQm9va0NvbmZpZy51c2VSdW5lc3RvbmVTZXJ2aWNlcyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmNsb3Nlc3QoXCJbZGF0YS1jb21wb25lbnQ9dGltZWRBc3Nlc3NtZW50XVwiKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGVsZW1lbnQgZXhpc3RzIHdpdGhpbiBhIHRpbWVkIGNvbXBvbmVudCwgZG9uJ3QgcmVuZGVyIGl0IGhlcmVcclxuICAgICAgICAgICAgbWNMaXN0W3RoaXMuaWRdID0gbmV3IE11bHRpcGxlQ2hvaWNlKG9wdHMpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuIiwiaW1wb3J0IE11bHRpcGxlQ2hvaWNlIGZyb20gXCIuL21jaG9pY2UuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVkTUMgZXh0ZW5kcyBNdWx0aXBsZUNob2ljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XHJcbiAgICAgICAgc3VwZXIob3B0cyk7XHJcbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lckRpdikuYWRkQ2xhc3MoXCJhbGVydCBhbGVydC13YXJuaW5nIHJ1bmVzdG9uZVwiKTtcclxuICAgICAgICB0aGlzLm5lZWRzUmVpbml0aWFsaXphdGlvbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJUaW1lZEljb24odGhpcy5NQ0NvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy5oaWRlQnV0dG9ucygpOyAvLyBEb24ndCBzaG93IHBlci1xdWVzdGlvbiBidXR0b25zIGluIGEgdGltZWQgYXNzZXNzbWVudFxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclRpbWVkSWNvbihjb21wb25lbnQpIHtcclxuICAgICAgICAvLyByZW5kZXJzIHRoZSBjbG9jayBpY29uIG9uIHRpbWVkIGNvbXBvbmVudHMuICAgIFRoZSBjb21wb25lbnQgcGFyYW1ldGVyXHJcbiAgICAgICAgLy8gaXMgdGhlIGVsZW1lbnQgdGhhdCB0aGUgaWNvbiBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXHJcbiAgICAgICAgdmFyIHRpbWVJY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB2YXIgdGltZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICQodGltZUljb24pLmF0dHIoe1xyXG4gICAgICAgICAgICBzcmM6IFwiLi4vX3N0YXRpYy9jbG9jay5wbmdcIixcclxuICAgICAgICAgICAgc3R5bGU6IFwid2lkdGg6MTVweDtoZWlnaHQ6MTVweFwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRpbWVJY29uRGl2LmNsYXNzTmFtZSA9IFwidGltZVRpcFwiO1xyXG4gICAgICAgIHRpbWVJY29uRGl2LnRpdGxlID0gXCJcIjtcclxuICAgICAgICB0aW1lSWNvbkRpdi5hcHBlbmRDaGlsZCh0aW1lSWNvbik7XHJcbiAgICAgICAgJChjb21wb25lbnQpLnByZXBlbmQodGltZUljb25EaXYpO1xyXG4gICAgfVxyXG4gICAgaGlkZUJ1dHRvbnMoKSB7XHJcbiAgICAgICAgLy9KdXN0IGhpZGluZyB0aGUgYnV0dG9ucyBkb2Vzbid0IHByZXZlbnQgc3VibWl0dGluZyB0aGUgZm9ybSB3aGVuIGVudGVyaW5nIGlzIGNsaWNrZWRcclxuICAgICAgICAvL1dlIG5lZWQgdG8gY29tcGxldGVseSBkaXNhYmxlIHRoZSBidXR0b25zXHJcbiAgICAgICAgJCh0aGlzLnN1Ym1pdEJ1dHRvbikuYXR0cihcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAkKHRoaXMuc3VibWl0QnV0dG9uKS5oaWRlKCk7XHJcbiAgICAgICAgJCh0aGlzLmNvbXBhcmVCdXR0b24pLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGVzZSBtZXRob2RzIG92ZXJyaWRlIHRoZSBtZXRob2RzIGluIHRoZSBiYXNlIGNsYXNzLiBDYWxsZWQgZnJvbSByZW5kZXJGZWVkYmFjaygpXHJcbiAgICAvL1xyXG4gICAgcmVuZGVyTUNNQUZlZWRCYWNrKCkge1xyXG4gICAgICAgIHRoaXMuZmVlZGJhY2tUaW1lZE1DKCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJNQ01GRmVlZGJhY2sod2hhdGV2ZXIsIHdoYXRldmVycikge1xyXG4gICAgICAgIHRoaXMuZmVlZGJhY2tUaW1lZE1DKCk7XHJcbiAgICB9XHJcbiAgICBmZWVkYmFja1RpbWVkTUMoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmluZGV4QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHRtcGluZGV4ID0gdGhpcy5pbmRleEFycmF5W2ldO1xyXG4gICAgICAgICAgICAkKHRoaXMuZmVlZEJhY2tFYWNoQXJyYXlbaV0pLnRleHQoXHJcbiAgICAgICAgICAgICAgICBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgaSkgKyBcIi4gXCIgKyB0aGlzLmZlZWRiYWNrTGlzdFtpXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgdG1waWQgPSB0aGlzLmFuc3dlckxpc3RbdG1waW5kZXhdLmlkO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb3JyZWN0TGlzdC5pbmRleE9mKHRtcGlkKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWRCYWNrRWFjaEFycmF5W2ldLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhbGVydFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYWxlcnQtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkQmFja0VhY2hBcnJheVtpXS5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYWxlcnRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFsZXJ0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyTUNGb3JtT3B0cygpIHtcclxuICAgICAgICBzdXBlci5yZW5kZXJNQ0Zvcm1PcHRzKCk7XHJcbiAgICAgICAgdGhpcy5mZWVkQmFja0VhY2hBcnJheSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5hbnN3ZXJMaXN0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIHZhciBrID0gdGhpcy5pbmRleEFycmF5W2pdO1xyXG4gICAgICAgICAgICB2YXIgZmVlZEJhY2tFYWNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgZmVlZEJhY2tFYWNoLmlkID0gdGhpcy5kaXZpZCArIFwiX2VhY2hGZWVkYmFja19cIiArIGs7XHJcbiAgICAgICAgICAgIGZlZWRCYWNrRWFjaC5jbGFzc0xpc3QuYWRkKFwiZWFjaEZlZWRiYWNrXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmZlZWRCYWNrRWFjaEFycmF5LnB1c2goZmVlZEJhY2tFYWNoKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRzRm9ybS5hcHBlbmRDaGlsZChmZWVkQmFja0VhY2gpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoZWNrQ29ycmVjdFRpbWVkTUNNQSgpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdENvdW50ID09PSB0aGlzLmNvcnJlY3RMaXN0Lmxlbmd0aCAmJlxyXG4gICAgICAgICAgICB0aGlzLmNvcnJlY3RMaXN0Lmxlbmd0aCA9PT0gdGhpcy5naXZlbkFycmF5Lmxlbmd0aFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmNvcnJlY3QgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5naXZlbkFycmF5Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvcnJlY3QgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBxdWVzdGlvbiB3YXMgc2tpcHBlZFxyXG4gICAgICAgICAgICB0aGlzLmNvcnJlY3QgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuY29ycmVjdCkge1xyXG4gICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUXCI7XHJcbiAgICAgICAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGXCI7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGVja0NvcnJlY3RUaW1lZE1DTUYoKSB7XHJcbiAgICAgICAgLy8gUmV0dXJucyBpZiB0aGUgcXVlc3Rpb24gd2FzIGNvcnJlY3QsIGluY29ycmVjdCwgb3Igc2tpcHBlZCAocmV0dXJuIG51bGwgaW4gdGhlIGxhc3QgY2FzZSlcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuY29ycmVjdCkge1xyXG4gICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUXCI7XHJcbiAgICAgICAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGXCI7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGVja0NvcnJlY3RUaW1lZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZWFuc3dlcnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tDb3JyZWN0VGltZWRNQ01BKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tDb3JyZWN0VGltZWRNQ01GKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGlkZUZlZWRiYWNrKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5mZWVkQmFja0VhY2hBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAkKHRoaXMuZmVlZEJhY2tFYWNoQXJyYXlbaV0pLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVpbml0aWFsaXplTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgYW5zd2VyRnVuYyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5pc0Fuc3dlcmVkID0gdHJ1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAobGV0IG9wdCBvZiB0aGlzLm9wdGlvbkFycmF5KSB7XHJcbiAgICAgICAgICAgIG9wdC5pbnB1dC5vbmNsaWNrID0gYW5zd2VyRnVuYztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlmICh0eXBlb2Ygd2luZG93LmNvbXBvbmVudF9mYWN0b3J5ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPSB7fTtcclxufVxyXG5cclxud2luZG93LmNvbXBvbmVudF9mYWN0b3J5Lm11bHRpcGxlY2hvaWNlID0gZnVuY3Rpb24gKG9wdHMpIHtcclxuICAgIGlmIChvcHRzLnRpbWVkKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUaW1lZE1DKG9wdHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbmV3IE11bHRpcGxlQ2hvaWNlKG9wdHMpO1xyXG4gICAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9