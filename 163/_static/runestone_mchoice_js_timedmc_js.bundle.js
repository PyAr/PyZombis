(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_mchoice_js_timedmc_js"],{

/***/ 25264:
/*!*******************************************!*\
  !*** ./runestone/mchoice/css/mchoice.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/* harmony import */ var _css_mchoice_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/mchoice.css */ 25264);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL21jaG9pY2UvY3NzL21jaG9pY2UuY3NzPzNjMWYiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9tY2hvaWNlL2pzL21jaG9pY2UuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9tY2hvaWNlL2pzL3RpbWVkbWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU2RDtBQUM3RDtBQUM0Qjs7QUFFckIsZ0JBQWdCOztBQUV2QjtBQUNlLDZCQUE2QixnRUFBYTtBQUN6RDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQ0FBcUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw0QkFBNEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw0QkFBNEI7QUFDbkQ7QUFDQTtB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bkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1DQUFtQztBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxtQkFBbUIsZ0RBQWM7QUFDakM7QUFDQSIsImZpbGUiOiJydW5lc3RvbmVfbWNob2ljZV9qc190aW1lZG1jX2pzLmJ1bmRsZS5qcz92PTA3YWFkMDViMDNiMWZjODhhZWU0Iiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09PT09PT0gICAgICBNYXN0ZXIgbWNob2ljZS5qcyAgICAgPT09PT09PT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PSAgVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBKUyBmb3IgdGhlICAgPT09XHJcbj09PSBSdW5lc3RvbmUgbXVsdGlwbGUgY2hvaWNlIGNvbXBvbmVudC4gPT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PSAgICAgICAgICAgICAgQ3JlYXRlZCBCeSAgICAgICAgICAgICAgPT09XHJcbj09PSAgICAgICAgICAgSXNhaWFoIE1heWVyY2hhayAgICAgICAgICAgPT09XHJcbj09PSAgICAgICAgICAgICAgICAgYW5kICAgICAgICAgICAgICAgICAgPT09XHJcbj09PSAgICAgICAgICAgICBLaXJieSBPbHNvbiAgICAgICAgICAgICAgPT09XHJcbj09PSAgICAgICAgICAgICAgICA2LzQvMTUgICAgICAgICAgICAgICAgPT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5pbXBvcnQgUnVuZXN0b25lQmFzZSBmcm9tIFwiLi4vLi4vY29tbW9uL2pzL3J1bmVzdG9uZWJhc2UuanNcIjtcclxuLy9pbXBvcnQgXCIuLy4uL3N0eWxlcy9ydW5lc3RvbmUtY3VzdG9tLXNwaGlueC1ib290c3RyYXAuY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9tY2hvaWNlLmNzc1wiO1xyXG5cclxuZXhwb3J0IHZhciBtY0xpc3QgPSB7fTsgLy8gTXVsdGlwbGUgQ2hvaWNlIGRpY3Rpb25hcnlcclxuXHJcbi8vIE1DIGNvbnN0cnVjdG9yXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpcGxlQ2hvaWNlIGV4dGVuZHMgUnVuZXN0b25lQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XHJcbiAgICAgICAgc3VwZXIob3B0cyk7XHJcbiAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XHJcbiAgICAgICAgdmFyIG9yaWcgPSBvcHRzLm9yaWc7IC8vIGVudGlyZSA8dWw+IGVsZW1lbnRcclxuICAgICAgICB0aGlzLm9yaWdFbGVtID0gb3JpZztcclxuICAgICAgICB0aGlzLnVzZVJ1bmVzdG9uZVNlcnZpY2VzID0gb3B0cy51c2VSdW5lc3RvbmVTZXJ2aWNlcztcclxuICAgICAgICB0aGlzLm11bHRpcGxlYW5zd2VycyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGl2aWQgPSBvcmlnLmlkO1xyXG4gICAgICAgIGlmICgkKHRoaXMub3JpZ0VsZW0pLmRhdGEoXCJtdWx0aXBsZWFuc3dlcnNcIikgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5tdWx0aXBsZWFuc3dlcnMgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoaWxkcmVuID0gdGhpcy5vcmlnRWxlbS5jaGlsZE5vZGVzO1xyXG4gICAgICAgIHRoaXMucmFuZG9tID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbSkuaXMoXCJbZGF0YS1yYW5kb21dXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmFuZG9tID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb3JyZWN0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFuc3dlckxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmNvcnJlY3RMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5jb3JyZWN0SW5kZXhMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5mZWVkYmFja0xpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNhcHRpb24gPSBcIk11bHRpcGxlIENob2ljZVwiO1xyXG4gICAgICAgIHRoaXMuZmluZEFuc3dlcnMoKTtcclxuICAgICAgICB0aGlzLmZpbmRRdWVzdGlvbigpO1xyXG4gICAgICAgIHRoaXMuZmluZEZlZWRiYWNrcygpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ29ycmVjdExpc3QoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZU1DRm9ybSgpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2FwdGlvbihcInJ1bmVzdG9uZVwiKTtcclxuICAgICAgICB0aGlzLmNoZWNrU2VydmVyKFwibUNob2ljZVwiLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgPT09PSBGdW5jdGlvbnMgcGFyc2luZyB2YXJpYWJsZXMgID09PT1cclxuICAgID09PT0gIG91dCBvZiBpbnRlcm1lZGlhdGUgSFRNTCAgICA9PT09XHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgZmluZFF1ZXN0aW9uKCkge1xyXG4gICAgICAgIHZhciBkZWxpbWl0ZXI7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9yaWdFbGVtLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3JpZ0VsZW0uY2hpbGROb2Rlc1tpXS5ub2RlTmFtZSA9PT0gXCJMSVwiKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxpbWl0ZXIgPSB0aGlzLm9yaWdFbGVtLmNoaWxkTm9kZXNbaV0ub3V0ZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGZ1bGx0ZXh0ID0gJCh0aGlzLm9yaWdFbGVtKS5odG1sKCk7XHJcbiAgICAgICAgdmFyIHRlbXAgPSBmdWxsdGV4dC5zcGxpdChkZWxpbWl0ZXIpO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb24gPSB0ZW1wWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmRBbnN3ZXJzKCkge1xyXG4gICAgICAgIC8vIENyZWF0ZXMgYW5zd2VyIG9iamVjdHMgYW5kIHB1c2hlcyB0aGVtIHRvIGFuc3dlckxpc3RcclxuICAgICAgICAvLyBmb3JtYXQ6IElELCBDb3JyZWN0IGJvb2wsIENvbnRlbnQgKHRleHQpXHJcbiAgICAgICAgdmFyIENoaWxkQW5zd2VyTGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzLmNoaWxkcmVuW2ldKS5pcyhcIltkYXRhLWNvbXBvbmVudD1hbnN3ZXJdXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBDaGlsZEFuc3dlckxpc3QucHVzaCh0aGlzLmNoaWxkcmVuW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IENoaWxkQW5zd2VyTGlzdC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICB2YXIgYW5zd2VyX2lkID0gJChDaGlsZEFuc3dlckxpc3Rbal0pLmF0dHIoXCJpZFwiKTtcclxuICAgICAgICAgICAgdmFyIGlzX2NvcnJlY3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCQoQ2hpbGRBbnN3ZXJMaXN0W2pdKS5pcyhcIltkYXRhLWNvcnJlY3RdXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBkYXRhLWNvcnJlY3QgYXR0cmlidXRlIGV4aXN0cywgYW5zd2VyIGlzIGNvcnJlY3RcclxuICAgICAgICAgICAgICAgIGlzX2NvcnJlY3QgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBhbnN3ZXJfdGV4dCA9ICQoQ2hpbGRBbnN3ZXJMaXN0W2pdKS5odG1sKCk7XHJcbiAgICAgICAgICAgIHZhciBhbnN3ZXJfb2JqZWN0ID0ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGFuc3dlcl9pZCxcclxuICAgICAgICAgICAgICAgIGNvcnJlY3Q6IGlzX2NvcnJlY3QsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBhbnN3ZXJfdGV4dCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5hbnN3ZXJMaXN0LnB1c2goYW5zd2VyX29iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZpbmRGZWVkYmFja3MoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMuY2hpbGRyZW5baV0pLmlzKFwiW2RhdGEtY29tcG9uZW50PWZlZWRiYWNrXVwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkYmFja0xpc3QucHVzaCh0aGlzLmNoaWxkcmVuW2ldLmlubmVySFRNTCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ29ycmVjdExpc3QoKSB7XHJcbiAgICAgICAgLy8gQ3JlYXRlcyBhcnJheSB0aGF0IGhvbGRzIHRoZSBJRFwicyBvZiBjb3JyZWN0IGFuc3dlcnNcclxuICAgICAgICAvLyBBbHNvIHBvcHVsYXRlcyBhbiBhcnJheSB0aGF0IGhvbGRzIHRoZSBpbmRlY2VzIG9mIGNvcnJlY3QgYW5zd2Vyc1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hbnN3ZXJMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFuc3dlckxpc3RbaV0uY29ycmVjdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0TGlzdC5wdXNoKHRoaXMuYW5zd2VyTGlzdFtpXS5pZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RJbmRleExpc3QucHVzaChpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgID09PT0gICBGdW5jdGlvbnMgZ2VuZXJhdGluZyBmaW5hbCBIVE1MICAgPT09PVxyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICBjcmVhdGVNQ0Zvcm0oKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJNQ0NvbnRhaW5lcigpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyTUNGb3JtKCk7IC8vIHJlbmRlcnMgdGhlIGZvcm0gd2l0aCBvcHRpb25zIGFuZCBidXR0b25zXHJcbiAgICAgICAgdGhpcy5yZW5kZXJNQ2ZlZWRiYWNrRGl2KCk7XHJcbiAgICAgICAgLy8gcmVwbGFjZXMgaW50ZXJtZWRpYXRlIEhUTUwgd2l0aCByZW5kZXJlZCBIVE1MXHJcbiAgICAgICAgJCh0aGlzLm9yaWdFbGVtKS5yZXBsYWNlV2l0aCh0aGlzLmNvbnRhaW5lckRpdik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyTUNDb250YWluZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICQodGhpcy5jb250YWluZXJEaXYpLmh0bWwodGhpcy5xdWVzdGlvbik7XHJcbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lckRpdikuYWRkQ2xhc3ModGhpcy5vcmlnRWxlbS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuaWQgPSB0aGlzLmRpdmlkO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlck1DRm9ybSgpIHtcclxuICAgICAgICB0aGlzLm9wdHNGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgICAgICAgdGhpcy5vcHRzRm9ybS5pZCA9IHRoaXMuZGl2aWQgKyBcIl9mb3JtXCI7XHJcbiAgICAgICAgJCh0aGlzLm9wdHNGb3JtKS5hdHRyKHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgICAgICAgICBhY3Rpb246IFwiXCIsXHJcbiAgICAgICAgICAgIG9uc3VibWl0OiBcInJldHVybiBmYWxzZTtcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBnZW5lcmF0ZSBmb3JtIG9wdGlvbnNcclxuICAgICAgICB0aGlzLnJlbmRlck1DRm9ybU9wdHMoKTtcclxuICAgICAgICB0aGlzLnJlbmRlck1DRm9ybUJ1dHRvbnMoKTtcclxuICAgICAgICAvLyBBcHBlbmQgdGhlIGZvcm0gdG8gdGhlIGNvbnRhaW5lclxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRoaXMub3B0c0Zvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlck1DRm9ybU9wdHMoKSB7XHJcbiAgICAgICAgLy8gY3JlYXRlcyBpbnB1dCBET00gZWxlbWVudHNcclxuICAgICAgICB0aGlzLm9wdGlvbkFycmF5ID0gW107IC8vIGFycmF5IHdpdGggYW4gb2JqZWN0IGZvciBlYWNoIG9wdGlvbiBjb250YWluaW5nIHRoZSBpbnB1dCBhbmQgbGFiZWwgZm9yIHRoYXQgb3B0aW9uXHJcbiAgICAgICAgdmFyIGlucHV0X3R5cGUgPSBcInJhZGlvXCI7XHJcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGVhbnN3ZXJzKSB7XHJcbiAgICAgICAgICAgIGlucHV0X3R5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuaW5kZXhBcnJheSBpcyB1c2VkIHRvIGluZGV4IHRocm91Z2ggdGhlIGFuc3dlcnNcclxuICAgICAgICAvLyBpdCBpcyBqdXN0IDAtbiBub3JtYWxseSwgYnV0IHRoZSBvcmRlciBpcyBzaHVmZmxlZCBpZiB0aGUgcmFuZG9tIG9wdGlvbiBpcyBwcmVzZW50XHJcbiAgICAgICAgdGhpcy5pbmRleEFycmF5ID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFuc3dlckxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5pbmRleEFycmF5LnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnJhbmRvbSkge1xyXG4gICAgICAgICAgICB0aGlzLnJhbmRvbWl6ZUFuc3dlcnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBhbnN3ZXJGdW5jID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLmlzQW5zd2VyZWQgPSB0cnVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmFuc3dlckxpc3QubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgdmFyIGsgPSB0aGlzLmluZGV4QXJyYXlbal07XHJcbiAgICAgICAgICAgIHZhciBvcHRpZCA9IHRoaXMuZGl2aWQgKyBcIl9vcHRfXCIgKyBrO1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGxhYmVsIGZvciB0aGUgaW5wdXRcclxuICAgICAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICAvLyBJZiB0aGUgY29udGVudCBiZWdpbnMgd2l0aCBhIGBgPHA+YGAsIHB1dCB0aGUgbGFiZWwgaW5zaWRlIG9mIGl0LiAoU3BoaW54IDIuMCBwdXRzIGFsbCBjb250ZW50IGluIGEgYGA8cD5gYCwgd2hpbGUgU3BoaW54IDEuOCBkb2Vzbid0KS5cclxuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSB0aGlzLmFuc3dlckxpc3Rba10uY29udGVudDtcclxuICAgICAgICAgICAgdmFyIHByZWZpeCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGlmIChjb250ZW50LnN0YXJ0c1dpdGgoXCI8cD5cIikpIHtcclxuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiPHA+XCI7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5zbGljZSgzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKGxhYmVsKS5odG1sKFxyXG4gICAgICAgICAgICAgICAgYCR7cHJlZml4fTxpbnB1dCB0eXBlPVwiJHtpbnB1dF90eXBlfVwiIG5hbWU9XCJncm91cDFcIiB2YWx1ZT0ke2t9IGlkPSR7b3B0aWR9PiR7U3RyaW5nLmZyb21DaGFyQ29kZShcclxuICAgICAgICAgICAgICAgICAgICBcIkFcIi5jaGFyQ29kZUF0KDApICsgalxyXG4gICAgICAgICAgICAgICAgKX0uICR7Y29udGVudH1gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgb2JqZWN0IHRvIHN0b3JlIGluIG9wdGlvbkFycmF5XHJcbiAgICAgICAgICAgIHZhciBvcHRPYmogPSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dDogJChsYWJlbCkuZmluZChcImlucHV0XCIpWzBdLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IGxhYmVsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBvcHRPYmouaW5wdXQub25jbGljayA9IGFuc3dlckZ1bmM7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbkFycmF5LnB1c2gob3B0T2JqKTtcclxuICAgICAgICAgICAgLy8gYWRkIHRoZSBvcHRpb24gdG8gdGhlIGZvcm1cclxuICAgICAgICAgICAgdGhpcy5vcHRzRm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgICAgICAgICAgIHRoaXMub3B0c0Zvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyTUNGb3JtQnV0dG9ucygpIHtcclxuICAgICAgICAvLyBzdWJtaXQgYW5kIGNvbXBhcmUgbWUgYnV0dG9uc1xyXG4gICAgICAgIC8vIENyZWF0ZSBzdWJtaXQgYnV0dG9uXHJcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDaGVjayBNZVwiO1xyXG4gICAgICAgICQodGhpcy5zdWJtaXRCdXR0b24pLmF0dHIoe1xyXG4gICAgICAgICAgICBjbGFzczogXCJidG4gYnRuLXN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgbmFtZTogXCJkbyBhbnN3ZXJcIixcclxuICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZWFuc3dlcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NNQ01BU3VibWlzc2lvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzTUNNRlN1Ym1pc3Npb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gLy8gZW5kIGVsc2VcclxuICAgICAgICB0aGlzLm9wdHNGb3JtLmFwcGVuZENoaWxkKHRoaXMuc3VibWl0QnV0dG9uKTtcclxuICAgICAgICAvLyBDcmVhdGUgY29tcGFyZSBidXR0b25cclxuICAgICAgICBpZiAodGhpcy51c2VSdW5lc3RvbmVTZXJ2aWNlcykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBhcmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMuY29tcGFyZUJ1dHRvbikuYXR0cih7XHJcbiAgICAgICAgICAgICAgICBjbGFzczogXCJidG4gYnRuLWRlZmF1bHRcIixcclxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLmRpdmlkICsgXCJfYmNvbXBcIixcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJjb21wYXJlXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBhcmVCdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbXBhcmUgbWVcIjtcclxuICAgICAgICAgICAgdGhpcy5jb21wYXJlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICBcImNsaWNrXCIsXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wYXJlQW5zd2Vycyh0aGlzLmRpdmlkKTtcclxuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMub3B0c0Zvcm0uYXBwZW5kQ2hpbGQodGhpcy5jb21wYXJlQnV0dG9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyTUNmZWVkYmFja0RpdigpIHtcclxuICAgICAgICB0aGlzLmZlZWRCYWNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLmZlZWRCYWNrRGl2LmlkID0gdGhpcy5kaXZpZCArIFwiX2ZlZWRiYWNrXCI7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLmZlZWRCYWNrRGl2KTtcclxuICAgIH1cclxuXHJcbiAgICByYW5kb21pemVBbnN3ZXJzKCkge1xyXG4gICAgICAgIC8vIE1ha2VzIHRoZSBvcmRlcmluZyBvZiB0aGUgYW5zd2VyIGNob2ljZXMgcmFuZG9tXHJcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IHRoaXMuaW5kZXhBcnJheS5sZW5ndGgsXHJcbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlLFxyXG4gICAgICAgICAgICByYW5kb21JbmRleDtcclxuICAgICAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxyXG4gICAgICAgIHdoaWxlIChjdXJyZW50SW5kZXggIT09IDApIHtcclxuICAgICAgICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50Li4uXHJcbiAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcclxuICAgICAgICAgICAgY3VycmVudEluZGV4IC09IDE7XHJcbiAgICAgICAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cclxuICAgICAgICAgICAgdGVtcG9yYXJ5VmFsdWUgPSB0aGlzLmluZGV4QXJyYXlbY3VycmVudEluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5pbmRleEFycmF5W2N1cnJlbnRJbmRleF0gPSB0aGlzLmluZGV4QXJyYXlbcmFuZG9tSW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4QXJyYXlbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XHJcbiAgICAgICAgICAgIHZhciB0ZW1wb3JhcnlGZWVkYmFjayA9IHRoaXMuZmVlZGJhY2tMaXN0W2N1cnJlbnRJbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMuZmVlZGJhY2tMaXN0W2N1cnJlbnRJbmRleF0gPSB0aGlzLmZlZWRiYWNrTGlzdFtyYW5kb21JbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMuZmVlZGJhY2tMaXN0W3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeUZlZWRiYWNrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICA9PT0gQ2hlY2tpbmcvbG9hZGluZyBmcm9tIHN0b3JhZ2UgPT09XHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICByZXN0b3JlQW5zd2VycyhkYXRhKSB7XHJcbiAgICAgICAgLy8gUmVzdG9yZSBhbnN3ZXJzIGZyb20gc3RvcmFnZSByZXRyaWV2YWwgZG9uZSBpbiBSdW5lc3RvbmVCYXNlXHJcbiAgICAgICAgLy8gc29tZXRpbWVzIGRhdGEuYW5zd2VyIGNhbiBiZSBudWxsXHJcbiAgICAgICAgaWYgKCFkYXRhLmFuc3dlcikge1xyXG4gICAgICAgICAgICBkYXRhLmFuc3dlciA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhbnN3ZXJzID0gZGF0YS5hbnN3ZXIuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgYW5zd2Vycy5sZW5ndGg7IGErKykge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBhbnN3ZXJzW2FdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBiID0gMDsgYiA8IHRoaXMub3B0aW9uQXJyYXkubGVuZ3RoOyBiKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbkFycmF5W2JdLmlucHV0LnZhbHVlID09IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLm9wdGlvbkFycmF5W2JdLmlucHV0KS5hdHRyKFwiY2hlY2tlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGVhbnN3ZXJzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc01DTUFTdWJtaXNzaW9uKGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NNQ01GU3VibWlzc2lvbihmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgICAgIC8vIFJlcG9wdWxhdGVzIE1DTUEgcXVlc3Rpb25zIHdpdGggYSB1c2VyJ3MgcHJldmlvdXMgYW5zd2VycyxcclxuICAgICAgICAvLyB3aGljaCB3ZXJlIHN0b3JlZCBpbnRvIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICAgICAgdmFyIHN0b3JlZERhdGE7XHJcbiAgICAgICAgdmFyIGFuc3dlcnM7XHJcbiAgICAgICAgaWYgKHRoaXMuZ3JhZGVyYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGxlbiA9IGxvY2FsU3RvcmFnZS5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGxlbiA+IDApIHtcclxuICAgICAgICAgICAgdmFyIGV4ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSk7XHJcbiAgICAgICAgICAgIGlmIChleCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZWREYXRhID0gSlNPTi5wYXJzZShleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5zd2VycyA9IHN0b3JlZERhdGEuYW5zd2VyLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVycm9yIHdoaWxlIHBhcnNpbmc7IGxpa2VseSBkdWUgdG8gYmFkIHZhbHVlIHN0b3JlZCBpbiBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgYW5zd2Vycy5sZW5ndGg7IGErKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGFuc3dlcnNbYV07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYiA9IDA7IGIgPCB0aGlzLm9wdGlvbkFycmF5Lmxlbmd0aDsgYisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbkFycmF5W2JdLmlucHV0LnZhbHVlID09IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMub3B0aW9uQXJyYXlbYl0uaW5wdXQpLmF0dHIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGVja2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VSdW5lc3RvbmVTZXJ2aWNlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlTUNDb21wYXJpc29uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRTdWJtaXR0ZWRPcHRzKCk7IC8vIHRvIHBvcHVsYXRlIGdpdmVubG9nIGZvciBsb2dnaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGVhbnN3ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nTUNNQXN1Ym1pc3Npb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ01DTUZzdWJtaXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldExvY2FsU3RvcmFnZShkYXRhKSB7XHJcbiAgICAgICAgdmFyIHRpbWVTdGFtcCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdmFyIHN0b3JhZ2VPYmogPSB7XHJcbiAgICAgICAgICAgIGFuc3dlcjogZGF0YS5hbnN3ZXIsXHJcbiAgICAgICAgICAgIHRpbWVzdGFtcDogdGltZVN0YW1wLFxyXG4gICAgICAgICAgICBjb3JyZWN0OiBkYXRhLmNvcnJlY3QsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSxcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZU9iailcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgPT09IFByb2Nlc3NpbmcgTUMgU3VibWlzc2lvbnMgPT09XHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgIHByb2Nlc3NNQ01BU3VibWlzc2lvbihsb2dGbGFnKSB7XHJcbiAgICAgICAgLy8gQ2FsbGVkIHdoZW4gdGhlIHN1Ym1pdCBidXR0b24gaXMgY2xpY2tlZFxyXG4gICAgICAgIHRoaXMuZ2V0U3VibWl0dGVkT3B0cygpOyAvLyBtYWtlIHN1cmUgdGhpcy5naXZlbkFycmF5IGlzIHBvcHVsYXRlZFxyXG4gICAgICAgIHRoaXMuc2NvcmVNQ01BU3VibWlzc2lvbigpO1xyXG4gICAgICAgIHRoaXMuc2V0TG9jYWxTdG9yYWdlKHtcclxuICAgICAgICAgICAgY29ycmVjdDogdGhpcy5jb3JyZWN0ID8gXCJUXCIgOiBcIkZcIixcclxuICAgICAgICAgICAgYW5zd2VyOiB0aGlzLmdpdmVuQXJyYXkuam9pbihcIixcIiksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGxvZ0ZsYWcpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dNQ01Bc3VibWlzc2lvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbmRlck1DTUFGZWVkQmFjaygpO1xyXG4gICAgICAgIGlmICh0aGlzLnVzZVJ1bmVzdG9uZVNlcnZpY2VzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlTUNDb21wYXJpc29uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFN1Ym1pdHRlZE9wdHMoKSB7XHJcbiAgICAgICAgdmFyIGdpdmVuO1xyXG4gICAgICAgIHRoaXMuc2luZ2xlZmVlZGJhY2sgPSBcIlwiOyAvLyBVc2VkIGZvciBNQ01GIHF1ZXN0aW9uc1xyXG4gICAgICAgIHRoaXMuZmVlZGJhY2tTdHJpbmcgPSBcIlwiOyAvLyBVc2VkIGZvciBNQ01BIHF1ZXN0aW9uc1xyXG4gICAgICAgIHRoaXMuZ2l2ZW5BcnJheSA9IFtdO1xyXG4gICAgICAgIHRoaXMuZ2l2ZW5sb2cgPSBcIlwiO1xyXG4gICAgICAgIHZhciBidXR0b25PYmpzID0gdGhpcy5vcHRzRm9ybS5lbGVtZW50cy5ncm91cDE7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBidXR0b25PYmpzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChidXR0b25PYmpzW2ldLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIGdpdmVuID0gYnV0dG9uT2Jqc1tpXS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2l2ZW5BcnJheS5wdXNoKGdpdmVuKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmVlZGJhY2tTdHJpbmcgKz0gYDxsaSB2YWx1ZT1cIiR7aSArIDF9XCI+JHt0aGlzLmZlZWRiYWNrTGlzdFtpXVxyXG4gICAgICAgICAgICAgICAgICAgIH08L2xpPmA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdpdmVubG9nICs9IGdpdmVuICsgXCIsXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZWZlZWRiYWNrID0gdGhpcy5mZWVkYmFja0xpc3RbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5naXZlbkFycmF5LnNvcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0N1cnJlbnRBbnN3ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRTdWJtaXR0ZWRPcHRzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGVhbnN3ZXJzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmVNQ01BU3VibWlzc2lvbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmVNQ01GU3VibWlzc2lvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2dDdXJyZW50QW5zd2VyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlYW5zd2Vycykge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ01DTUFzdWJtaXNzaW9uKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dNQ01Gc3VibWlzc2lvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJGZWVkYmFjaygpIHtcclxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZWFuc3dlcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJNQ01BRmVlZEJhY2soKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlck1DTUZGZWVkYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNjb3JlTUNNQVN1Ym1pc3Npb24oKSB7XHJcbiAgICAgICAgdGhpcy5jb3JyZWN0Q291bnQgPSAwO1xyXG4gICAgICAgIHZhciBjb3JyZWN0SW5kZXggPSAwO1xyXG4gICAgICAgIHZhciBnaXZlbkluZGV4ID0gMDtcclxuICAgICAgICB3aGlsZSAoXHJcbiAgICAgICAgICAgIGNvcnJlY3RJbmRleCA8IHRoaXMuY29ycmVjdEluZGV4TGlzdC5sZW5ndGggJiZcclxuICAgICAgICAgICAgZ2l2ZW5JbmRleCA8IHRoaXMuZ2l2ZW5BcnJheS5sZW5ndGhcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5naXZlbkFycmF5W2dpdmVuSW5kZXhdIDxcclxuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdEluZGV4TGlzdFtjb3JyZWN0SW5kZXhdXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgZ2l2ZW5JbmRleCsrO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5naXZlbkFycmF5W2dpdmVuSW5kZXhdID09XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RJbmRleExpc3RbY29ycmVjdEluZGV4XVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdENvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBnaXZlbkluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICBjb3JyZWN0SW5kZXgrKztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvcnJlY3RJbmRleCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBudW1HaXZlbiA9IHRoaXMuZ2l2ZW5BcnJheS5sZW5ndGg7XHJcbiAgICAgICAgdmFyIG51bUNvcnJlY3QgPSB0aGlzLmNvcnJlY3RDb3VudDtcclxuICAgICAgICB2YXIgbnVtTmVlZGVkID0gdGhpcy5jb3JyZWN0TGlzdC5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5hbnN3ZXIgPSB0aGlzLmdpdmVuQXJyYXkuam9pbihcIixcIik7XHJcbiAgICAgICAgdGhpcy5jb3JyZWN0ID0gbnVtQ29ycmVjdCA9PT0gbnVtTmVlZGVkICYmIG51bU5lZWRlZCA9PT0gbnVtR2l2ZW47XHJcbiAgICAgICAgaWYgKG51bUdpdmVuID09PSBudW1OZWVkZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wZXJjZW50ID0gbnVtQ29ycmVjdCAvIG51bU5lZWRlZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBlcmNlbnQgPSBudW1Db3JyZWN0IC8gTWF0aC5tYXgobnVtR2l2ZW4sIG51bU5lZWRlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvZ01DTUFzdWJtaXNzaW9uKCkge1xyXG4gICAgICAgIHZhciBhbnN3ZXIgPSB0aGlzLmFuc3dlcjtcclxuICAgICAgICB2YXIgY29ycmVjdCA9IHRoaXMuY29ycmVjdDtcclxuICAgICAgICB2YXIgbG9nQW5zd2VyID1cclxuICAgICAgICAgICAgXCJhbnN3ZXI6XCIgKyBhbnN3ZXIgKyBcIjpcIiArIChjb3JyZWN0ID09IFwiVFwiID8gXCJjb3JyZWN0XCIgOiBcIm5vXCIpO1xyXG4gICAgICAgIHRoaXMubG9nQm9va0V2ZW50KHtcclxuICAgICAgICAgICAgZXZlbnQ6IFwibUNob2ljZVwiLFxyXG4gICAgICAgICAgICBhY3Q6IGxvZ0Fuc3dlcixcclxuICAgICAgICAgICAgYW5zd2VyOiBhbnN3ZXIsXHJcbiAgICAgICAgICAgIGNvcnJlY3Q6IGNvcnJlY3QsXHJcbiAgICAgICAgICAgIGRpdl9pZDogdGhpcy5kaXZpZCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJNQ01BRmVlZEJhY2soKSB7XHJcbiAgICAgICAgdmFyIGFuc3dlclN0ciA9IFwiYW5zd2Vyc1wiO1xyXG4gICAgICAgIHZhciBudW1HaXZlbiA9IHRoaXMuZ2l2ZW5BcnJheS5sZW5ndGg7XHJcbiAgICAgICAgaWYgKG51bUdpdmVuID09PSAxKSB7XHJcbiAgICAgICAgICAgIGFuc3dlclN0ciA9IFwiYW5zd2VyXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBudW1Db3JyZWN0ID0gdGhpcy5jb3JyZWN0Q291bnQ7XHJcbiAgICAgICAgdmFyIG51bU5lZWRlZCA9IHRoaXMuY29ycmVjdExpc3QubGVuZ3RoO1xyXG4gICAgICAgIHZhciBmZWVkYmFja1RleHQgPSB0aGlzLmZlZWRiYWNrU3RyaW5nO1xyXG4gICAgICAgIGlmICh0aGlzLmNvcnJlY3QpIHtcclxuICAgICAgICAgICAgJCh0aGlzLmZlZWRCYWNrRGl2KS5odG1sKGDinJTvuI8gPG9sIHR5cGU9XCJBXCI+JHtmZWVkYmFja1RleHR9PC91bD5gKTtcclxuICAgICAgICAgICAgJCh0aGlzLmZlZWRCYWNrRGl2KS5hdHRyKFwiY2xhc3NcIiwgXCJhbGVydCBhbGVydC1pbmZvXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuaHRtbChcclxuICAgICAgICAgICAgICAgIGDinJbvuI8gWW91IGdhdmUgJHtudW1HaXZlbn0gJHthbnN3ZXJTdHJ9IGFuZCBnb3QgJHtudW1Db3JyZWN0fSBjb3JyZWN0IG9mICR7bnVtTmVlZGVkfSBuZWVkZWQuPG9sIHR5cGU9XCJBXCI+JHtmZWVkYmFja1RleHR9PC91bD5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuYXR0cihcImNsYXNzXCIsIFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm9jZXNzTUNNRlN1Ym1pc3Npb24obG9nRmxhZykge1xyXG4gICAgICAgIC8vIENhbGxlZCB3aGVuIHRoZSBzdWJtaXQgYnV0dG9uIGlzIGNsaWNrZWRcclxuICAgICAgICB0aGlzLmdldFN1Ym1pdHRlZE9wdHMoKTsgLy8gbWFrZSBzdXJlIHRoaXMuZ2l2ZW5BcnJheSBpcyBwb3B1bGF0ZWRcclxuICAgICAgICB0aGlzLnNjb3JlTUNNRlN1Ym1pc3Npb24oKTtcclxuICAgICAgICB0aGlzLnNldExvY2FsU3RvcmFnZSh7XHJcbiAgICAgICAgICAgIGNvcnJlY3Q6IHRoaXMuY29ycmVjdCA/IFwiVFwiIDogXCJGXCIsXHJcbiAgICAgICAgICAgIGFuc3dlcjogdGhpcy5naXZlbkFycmF5LmpvaW4oXCIsXCIpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChsb2dGbGFnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nTUNNRnN1Ym1pc3Npb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZW5kZXJNQ01GRmVlZGJhY2soKTtcclxuICAgICAgICBpZiAodGhpcy51c2VSdW5lc3RvbmVTZXJ2aWNlcykge1xyXG4gICAgICAgICAgICB0aGlzLmVuYWJsZU1DQ29tcGFyaXNvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzY29yZU1DTUZTdWJtaXNzaW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdpdmVuQXJyYXlbMF0gPT0gdGhpcy5jb3JyZWN0SW5kZXhMaXN0WzBdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucGVyY2VudCA9IDEuMDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2l2ZW5BcnJheVswXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIGdpdmVuIGlzIG51bGwgdGhlbiB0aGUgcXVlc3Rpb24gd2FzblwidCBhbnN3ZXJlZCBhbmQgc2hvdWxkIGJlIGNvdW50ZWQgYXMgc2tpcHBlZFxyXG4gICAgICAgICAgICB0aGlzLmNvcnJlY3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5wZXJjZW50ID0gMC4wO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2dNQ01Gc3VibWlzc2lvbigpIHtcclxuICAgICAgICB2YXIgYW5zd2VyID0gdGhpcy5naXZlbkFycmF5WzBdO1xyXG4gICAgICAgIHZhciBjb3JyZWN0ID1cclxuICAgICAgICAgICAgdGhpcy5naXZlbkFycmF5WzBdID09IHRoaXMuY29ycmVjdEluZGV4TGlzdFswXSA/IFwiVFwiIDogXCJGXCI7XHJcbiAgICAgICAgdmFyIGxvZ0Fuc3dlciA9XHJcbiAgICAgICAgICAgIFwiYW5zd2VyOlwiICsgYW5zd2VyICsgXCI6XCIgKyAoY29ycmVjdCA9PSBcIlRcIiA/IFwiY29ycmVjdFwiIDogXCJub1wiKTsgLy8gYmFja3dhcmQgY29tcGF0aWJsZVxyXG4gICAgICAgIHRoaXMubG9nQm9va0V2ZW50KHtcclxuICAgICAgICAgICAgZXZlbnQ6IFwibUNob2ljZVwiLFxyXG4gICAgICAgICAgICBhY3Q6IGxvZ0Fuc3dlcixcclxuICAgICAgICAgICAgYW5zd2VyOiBhbnN3ZXIsXHJcbiAgICAgICAgICAgIGNvcnJlY3Q6IGNvcnJlY3QsXHJcbiAgICAgICAgICAgIGRpdl9pZDogdGhpcy5kaXZpZCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJNQ01GRmVlZGJhY2soKSB7XHJcbiAgICAgICAgbGV0IGNvcnJlY3QgPSB0aGlzLmdpdmVuQXJyYXlbMF0gPT0gdGhpcy5jb3JyZWN0SW5kZXhMaXN0WzBdO1xyXG4gICAgICAgIGxldCBmZWVkYmFja1RleHQgPSB0aGlzLnNpbmdsZWZlZWRiYWNrO1xyXG5cclxuICAgICAgICBpZiAoY29ycmVjdCkge1xyXG4gICAgICAgICAgICAkKHRoaXMuZmVlZEJhY2tEaXYpLmh0bWwoXCLinJTvuI8gXCIgKyBmZWVkYmFja1RleHQpO1xyXG4gICAgICAgICAgICAkKHRoaXMuZmVlZEJhY2tEaXYpLmF0dHIoXCJjbGFzc1wiLCBcImFsZXJ0IGFsZXJ0LWluZm9cIik7IC8vIHVzZSBibHVlIGZvciBiZXR0ZXIgcmVkL2dyZWVuIGJsdWUgY29sb3IgYmxpbmRuZXNzXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGZlZWRiYWNrVGV4dCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBmZWVkYmFja1RleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuaHRtbChcIuKclu+4jyBcIiArIGZlZWRiYWNrVGV4dCk7XHJcbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuYXR0cihcImNsYXNzXCIsIFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVuYWJsZU1DQ29tcGFyaXNvbigpIHtcclxuICAgICAgICBpZiAoZUJvb2tDb25maWcuZW5hYmxlQ29tcGFyZU1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGFyZUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGluc3RydWN0b3JNY2hvaWNlTW9kYWwoZGF0YSkge1xyXG4gICAgICAgIC8vIGRhdGEucmVzbGlzdCAtLSBzdHVkZW50IGFuZCB0aGVpciBhbnN3ZXJzXHJcbiAgICAgICAgLy8gZGF0YS5hbnN3ZXJEaWN0ICAgIC0tIGFuc3dlcnMgYW5kIGNvdW50XHJcbiAgICAgICAgLy8gZGF0YS5jb3JyZWN0IC0gY29ycmVjdCBhbnN3ZXJcclxuICAgICAgICB2YXIgcmVzID0gXCI8dGFibGU+PHRyPjx0aD5TdHVkZW50PC90aD48dGg+QW5zd2VyKHMpPC90aD48L3RyPlwiO1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICByZXMgKz1cclxuICAgICAgICAgICAgICAgIFwiPHRyPjx0ZD5cIiArXHJcbiAgICAgICAgICAgICAgICBkYXRhW2ldWzBdICtcclxuICAgICAgICAgICAgICAgIFwiPC90ZD48dGQ+XCIgK1xyXG4gICAgICAgICAgICAgICAgZGF0YVtpXVsxXSArXHJcbiAgICAgICAgICAgICAgICBcIjwvdGQ+PC90cj5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzICs9IFwiPC90YWJsZT5cIjtcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG4gICAgY29tcGFyZU1vZGFsKGRhdGEsIHN0YXR1cywgd2hhdGV2ZXIpIHtcclxuICAgICAgICB2YXIgZGF0YWRpY3QgPSBKU09OLnBhcnNlKGRhdGEpWzBdO1xyXG4gICAgICAgIHZhciBhbnN3ZXJzID0gZGF0YWRpY3QuYW5zd2VyRGljdDtcclxuICAgICAgICB2YXIgbWlzYyA9IGRhdGFkaWN0Lm1pc2M7XHJcbiAgICAgICAgdmFyIGtsID0gT2JqZWN0LmtleXMoYW5zd2Vycykuc29ydCgpO1xyXG4gICAgICAgIHZhciBib2R5ID0gXCI8dGFibGU+XCI7XHJcbiAgICAgICAgYm9keSArPSBcIjx0cj48dGg+QW5zd2VyPC90aD48dGg+UGVyY2VudDwvdGg+PC90cj5cIjtcclxuICAgICAgICB2YXIgdGhlQ2xhc3MgPSBcIlwiO1xyXG4gICAgICAgIGZvciAodmFyIGsgaW4ga2wpIHtcclxuICAgICAgICAgICAgaWYgKGtsW2tdID09PSBtaXNjLmNvcnJlY3QpIHtcclxuICAgICAgICAgICAgICAgIHRoZUNsYXNzID0gXCJzdWNjZXNzXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGVDbGFzcyA9IFwiaW5mb1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJvZHkgKz1cclxuICAgICAgICAgICAgICAgIFwiPHRyPjx0ZD5cIiArIGtsW2tdICsgXCI8L3RkPjx0ZCBjbGFzcz0nY29tcGFyZS1tZS1wcm9ncmVzcyc+XCI7XHJcbiAgICAgICAgICAgIHZhciBwY3QgPSBhbnN3ZXJzW2tsW2tdXSArIFwiJVwiO1xyXG4gICAgICAgICAgICBib2R5ICs9IFwiPGRpdiBjbGFzcz0ncHJvZ3Jlc3MnPlwiO1xyXG4gICAgICAgICAgICBib2R5ICs9XHJcbiAgICAgICAgICAgICAgICBcIiAgICA8ZGl2IGNsYXNzPSdwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLVwiICtcclxuICAgICAgICAgICAgICAgIHRoZUNsYXNzICtcclxuICAgICAgICAgICAgICAgIFwiJyBzdHlsZT0nd2lkdGg6XCIgK1xyXG4gICAgICAgICAgICAgICAgcGN0ICtcclxuICAgICAgICAgICAgICAgIFwiOyc+XCIgK1xyXG4gICAgICAgICAgICAgICAgcGN0O1xyXG4gICAgICAgICAgICBib2R5ICs9IFwiICAgIDwvZGl2PlwiO1xyXG4gICAgICAgICAgICBib2R5ICs9IFwiPC9kaXY+PC90ZD48L3RyPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib2R5ICs9IFwiPC90YWJsZT5cIjtcclxuICAgICAgICBpZiAobWlzYy55b3VycGN0ICE9PSBcInVuYXZhaWxhYmxlXCIpIHtcclxuICAgICAgICAgICAgYm9keSArPVxyXG4gICAgICAgICAgICAgICAgXCI8YnIgLz48cD5Zb3UgaGF2ZSBcIiArXHJcbiAgICAgICAgICAgICAgICBtaXNjLnlvdXJwY3QgK1xyXG4gICAgICAgICAgICAgICAgXCIlIGNvcnJlY3QgZm9yIGFsbCBxdWVzdGlvbnM8L3A+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhZGljdC5yZXNsaXN0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYm9keSArPSB0aGlzLmluc3RydWN0b3JNY2hvaWNlTW9kYWwoZGF0YWRpY3QucmVzbGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodG1sID1cclxuICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPSdtb2RhbCBmYWRlJz5cIiArXHJcbiAgICAgICAgICAgIFwiICAgIDxkaXYgY2xhc3M9J21vZGFsLWRpYWxvZyBjb21wYXJlLW1vZGFsJz5cIiArXHJcbiAgICAgICAgICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1jb250ZW50Jz5cIiArXHJcbiAgICAgICAgICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtaGVhZGVyJz5cIiArXHJcbiAgICAgICAgICAgIFwiICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nY2xvc2UnIGRhdGEtZGlzbWlzcz0nbW9kYWwnIGFyaWEtaGlkZGVuPSd0cnVlJz4mdGltZXM7PC9idXR0b24+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9J21vZGFsLXRpdGxlJz5EaXN0cmlidXRpb24gb2YgQW5zd2VyczwvaDQ+XCIgK1xyXG4gICAgICAgICAgICBcIiAgICAgICAgICAgIDwvZGl2PlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1ib2R5Jz5cIiArXHJcbiAgICAgICAgICAgIGJvZHkgK1xyXG4gICAgICAgICAgICBcIiAgICAgICAgICAgIDwvZGl2PlwiICtcclxuICAgICAgICAgICAgXCIgICAgICAgIDwvZGl2PlwiICtcclxuICAgICAgICAgICAgXCIgICAgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICBcIjwvZGl2PlwiO1xyXG4gICAgICAgIHZhciBlbCA9ICQoaHRtbCk7XHJcbiAgICAgICAgZWwubW9kYWwoKTtcclxuICAgIH1cclxuICAgIGNvbXBhcmVBbnN3ZXJzKCkge1xyXG4gICAgICAgIHZhciBkYXRhID0ge307XHJcbiAgICAgICAgZGF0YS5kaXZfaWQgPSB0aGlzLmRpdmlkO1xyXG4gICAgICAgIGRhdGEuY291cnNlID0gZUJvb2tDb25maWcuY291cnNlO1xyXG4gICAgICAgIGpRdWVyeS5nZXQoXHJcbiAgICAgICAgICAgIGVCb29rQ29uZmlnLmFqYXhVUkwgKyBcImdldGFnZ3JlZ2F0ZXJlc3VsdHNcIixcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgdGhpcy5jb21wYXJlTW9kYWwuYmluZCh0aGlzKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZUludGVyYWN0aW9uKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vcHRpb25BcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbkFycmF5W2ldLmlucHV0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09IEZpbmQgdGhlIGN1c3RvbSBIVE1MIHRhZ3MgYW5kID09XHJcbj09ICAgZXhlY3V0ZSBvdXIgY29kZSBvbiB0aGVtICAgID09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiQoZG9jdW1lbnQpLmJpbmQoXCJydW5lc3RvbmU6bG9naW4tY29tcGxldGVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIltkYXRhLWNvbXBvbmVudD1tdWx0aXBsZWNob2ljZV1cIikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAvLyBNQ1xyXG4gICAgICAgIHZhciBvcHRzID0ge1xyXG4gICAgICAgICAgICBvcmlnOiB0aGlzLFxyXG4gICAgICAgICAgICB1c2VSdW5lc3RvbmVTZXJ2aWNlczogZUJvb2tDb25maWcudXNlUnVuZXN0b25lU2VydmljZXMsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoJCh0aGlzKS5jbG9zZXN0KFwiW2RhdGEtY29tcG9uZW50PXRpbWVkQXNzZXNzbWVudF1cIikubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgLy8gSWYgdGhpcyBlbGVtZW50IGV4aXN0cyB3aXRoaW4gYSB0aW1lZCBjb21wb25lbnQsIGRvbid0IHJlbmRlciBpdCBoZXJlXHJcbiAgICAgICAgICAgIG1jTGlzdFt0aGlzLmlkXSA9IG5ldyBNdWx0aXBsZUNob2ljZShvcHRzKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbiIsImltcG9ydCBNdWx0aXBsZUNob2ljZSBmcm9tIFwiLi9tY2hvaWNlLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lZE1DIGV4dGVuZHMgTXVsdGlwbGVDaG9pY2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xyXG4gICAgICAgIHN1cGVyKG9wdHMpO1xyXG4gICAgICAgICQodGhpcy5jb250YWluZXJEaXYpLmFkZENsYXNzKFwiYWxlcnQgYWxlcnQtd2FybmluZyBydW5lc3RvbmVcIik7XHJcbiAgICAgICAgdGhpcy5uZWVkc1JlaW5pdGlhbGl6YXRpb24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucmVuZGVyVGltZWRJY29uKHRoaXMuTUNDb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMuaGlkZUJ1dHRvbnMoKTsgLy8gRG9uJ3Qgc2hvdyBwZXItcXVlc3Rpb24gYnV0dG9ucyBpbiBhIHRpbWVkIGFzc2Vzc21lbnRcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJUaW1lZEljb24oY29tcG9uZW50KSB7XHJcbiAgICAgICAgLy8gcmVuZGVycyB0aGUgY2xvY2sgaWNvbiBvbiB0aW1lZCBjb21wb25lbnRzLiAgICBUaGUgY29tcG9uZW50IHBhcmFtZXRlclxyXG4gICAgICAgIC8vIGlzIHRoZSBlbGVtZW50IHRoYXQgdGhlIGljb24gc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxyXG4gICAgICAgIHZhciB0aW1lSWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdmFyIHRpbWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAkKHRpbWVJY29uKS5hdHRyKHtcclxuICAgICAgICAgICAgc3JjOiBcIi4uL19zdGF0aWMvY2xvY2sucG5nXCIsXHJcbiAgICAgICAgICAgIHN0eWxlOiBcIndpZHRoOjE1cHg7aGVpZ2h0OjE1cHhcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aW1lSWNvbkRpdi5jbGFzc05hbWUgPSBcInRpbWVUaXBcIjtcclxuICAgICAgICB0aW1lSWNvbkRpdi50aXRsZSA9IFwiXCI7XHJcbiAgICAgICAgdGltZUljb25EaXYuYXBwZW5kQ2hpbGQodGltZUljb24pO1xyXG4gICAgICAgICQoY29tcG9uZW50KS5wcmVwZW5kKHRpbWVJY29uRGl2KTtcclxuICAgIH1cclxuICAgIGhpZGVCdXR0b25zKCkge1xyXG4gICAgICAgIC8vSnVzdCBoaWRpbmcgdGhlIGJ1dHRvbnMgZG9lc24ndCBwcmV2ZW50IHN1Ym1pdHRpbmcgdGhlIGZvcm0gd2hlbiBlbnRlcmluZyBpcyBjbGlja2VkXHJcbiAgICAgICAgLy9XZSBuZWVkIHRvIGNvbXBsZXRlbHkgZGlzYWJsZSB0aGUgYnV0dG9uc1xyXG4gICAgICAgICQodGhpcy5zdWJtaXRCdXR0b24pLmF0dHIoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgJCh0aGlzLnN1Ym1pdEJ1dHRvbikuaGlkZSgpO1xyXG4gICAgICAgICQodGhpcy5jb21wYXJlQnV0dG9uKS5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlc2UgbWV0aG9kcyBvdmVycmlkZSB0aGUgbWV0aG9kcyBpbiB0aGUgYmFzZSBjbGFzcy4gQ2FsbGVkIGZyb20gcmVuZGVyRmVlZGJhY2soKVxyXG4gICAgLy9cclxuICAgIHJlbmRlck1DTUFGZWVkQmFjaygpIHtcclxuICAgICAgICB0aGlzLmZlZWRiYWNrVGltZWRNQygpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyTUNNRkZlZWRiYWNrKHdoYXRldmVyLCB3aGF0ZXZlcnIpIHtcclxuICAgICAgICB0aGlzLmZlZWRiYWNrVGltZWRNQygpO1xyXG4gICAgfVxyXG4gICAgZmVlZGJhY2tUaW1lZE1DKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pbmRleEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB0bXBpbmRleCA9IHRoaXMuaW5kZXhBcnJheVtpXTtcclxuICAgICAgICAgICAgJCh0aGlzLmZlZWRCYWNrRWFjaEFycmF5W2ldKS50ZXh0KFxyXG4gICAgICAgICAgICAgICAgU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGkpICsgXCIuIFwiICsgdGhpcy5mZWVkYmFja0xpc3RbaV1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdmFyIHRtcGlkID0gdGhpcy5hbnN3ZXJMaXN0W3RtcGluZGV4XS5pZDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29ycmVjdExpc3QuaW5kZXhPZih0bXBpZCkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkQmFja0VhY2hBcnJheVtpXS5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYWxlcnRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFsZXJ0LXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmVlZEJhY2tFYWNoQXJyYXlbaV0uY2xhc3NMaXN0LmFkZChcclxuICAgICAgICAgICAgICAgICAgICBcImFsZXJ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhbGVydC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlck1DRm9ybU9wdHMoKSB7XHJcbiAgICAgICAgc3VwZXIucmVuZGVyTUNGb3JtT3B0cygpO1xyXG4gICAgICAgIHRoaXMuZmVlZEJhY2tFYWNoQXJyYXkgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuYW5zd2VyTGlzdC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICB2YXIgayA9IHRoaXMuaW5kZXhBcnJheVtqXTtcclxuICAgICAgICAgICAgdmFyIGZlZWRCYWNrRWFjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGZlZWRCYWNrRWFjaC5pZCA9IHRoaXMuZGl2aWQgKyBcIl9lYWNoRmVlZGJhY2tfXCIgKyBrO1xyXG4gICAgICAgICAgICBmZWVkQmFja0VhY2guY2xhc3NMaXN0LmFkZChcImVhY2hGZWVkYmFja1wiKTtcclxuICAgICAgICAgICAgdGhpcy5mZWVkQmFja0VhY2hBcnJheS5wdXNoKGZlZWRCYWNrRWFjaCk7XHJcbiAgICAgICAgICAgIHRoaXMub3B0c0Zvcm0uYXBwZW5kQ2hpbGQoZmVlZEJhY2tFYWNoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGVja0NvcnJlY3RUaW1lZE1DTUEoKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLmNvcnJlY3RDb3VudCA9PT0gdGhpcy5jb3JyZWN0TGlzdC5sZW5ndGggJiZcclxuICAgICAgICAgICAgdGhpcy5jb3JyZWN0TGlzdC5sZW5ndGggPT09IHRoaXMuZ2l2ZW5BcnJheS5sZW5ndGhcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5jb3JyZWN0ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2l2ZW5BcnJheS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jb3JyZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gcXVlc3Rpb24gd2FzIHNraXBwZWRcclxuICAgICAgICAgICAgdGhpcy5jb3JyZWN0ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmNvcnJlY3QpIHtcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVFwiO1xyXG4gICAgICAgICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRlwiO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hlY2tDb3JyZWN0VGltZWRNQ01GKCkge1xyXG4gICAgICAgIC8vIFJldHVybnMgaWYgdGhlIHF1ZXN0aW9uIHdhcyBjb3JyZWN0LCBpbmNvcnJlY3QsIG9yIHNraXBwZWQgKHJldHVybiBudWxsIGluIHRoZSBsYXN0IGNhc2UpXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmNvcnJlY3QpIHtcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVFwiO1xyXG4gICAgICAgICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRlwiO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hlY2tDb3JyZWN0VGltZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGVhbnN3ZXJzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrQ29ycmVjdFRpbWVkTUNNQSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrQ29ycmVjdFRpbWVkTUNNRigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhpZGVGZWVkYmFjaygpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZmVlZEJhY2tFYWNoQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgJCh0aGlzLmZlZWRCYWNrRWFjaEFycmF5W2ldKS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlaW5pdGlhbGl6ZUxpc3RlbmVycygpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGFuc3dlckZ1bmMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuaXNBbnN3ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IgKGxldCBvcHQgb2YgdGhpcy5vcHRpb25BcnJheSkge1xyXG4gICAgICAgICAgICBvcHQuaW5wdXQub25jbGljayA9IGFuc3dlckZ1bmM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgd2luZG93LmNvbXBvbmVudF9mYWN0b3J5ID0ge307XHJcbn1cclxuXHJcbndpbmRvdy5jb21wb25lbnRfZmFjdG9yeS5tdWx0aXBsZWNob2ljZSA9IGZ1bmN0aW9uIChvcHRzKSB7XHJcbiAgICBpZiAob3B0cy50aW1lZCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVGltZWRNQyhvcHRzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNdWx0aXBsZUNob2ljZShvcHRzKTtcclxuICAgIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
