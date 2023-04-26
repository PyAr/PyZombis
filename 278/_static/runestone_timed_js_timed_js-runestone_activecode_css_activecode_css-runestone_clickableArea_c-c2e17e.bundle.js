(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_timed_js_timed_js-runestone_activecode_css_activecode_css-runestone_clickableArea_c-c2e17e"],{

/***/ 23369:
/*!***************************************!*\
  !*** ./runestone/timed/css/timed.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 58707:
/*!*************************************!*\
  !*** ./runestone/timed/js/timed.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimedList": () => (/* binding */ TimedList),
/* harmony export */   "default": () => (/* binding */ Timed)
/* harmony export */ });
/* harmony import */ var _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase.js */ 2568);
/* harmony import */ var _fitb_js_timedfitb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../fitb/js/timedfitb.js */ 74309);
/* harmony import */ var _mchoice_js_timedmc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mchoice/js/timedmc.js */ 95983);
/* harmony import */ var _shortanswer_js_timed_shortanswer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shortanswer/js/timed_shortanswer.js */ 87483);
/* harmony import */ var _activecode_js_acfactory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../activecode/js/acfactory.js */ 86902);
/* harmony import */ var _clickableArea_js_timedclickable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../clickableArea/js/timedclickable */ 61581);
/* harmony import */ var _dragndrop_js_timeddnd_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dragndrop/js/timeddnd.js */ 47496);
/* harmony import */ var _parsons_js_timedparsons_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../parsons/js/timedparsons.js */ 79661);
/* harmony import */ var _selectquestion_js_selectone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../selectquestion/js/selectone */ 63931);
/* harmony import */ var _css_timed_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/timed.css */ 23369);
/*==========================================
========      Master timed.js     =========
============================================
===     This file contains the JS for    ===
===     the Runestone timed component.   ===
============================================
===              Created By              ===
===             Kirby Olson              ===
===               6/11/15                ===
==========================================*/













var TimedList = {}; // Timed dictionary

// Timed constructor
class Timed extends _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(opts) {
        super(opts);
        var orig = opts.orig;
        this.origElem = orig; // the entire element of this timed assessment and all of its children
        this.divid = orig.id;
        this.children = this.origElem.childNodes;
        this.visited = [];
        this.timeLimit = 0;
        this.limitedTime = false;
        if (!isNaN($(this.origElem).data("time"))) {
            this.timeLimit = parseInt($(this.origElem).data("time"), 10) * 60; // time in seconds to complete the exam
            this.startingTime = this.timeLimit;
            this.limitedTime = true;
        }
        this.showFeedback = true;
        if ($(this.origElem).is("[data-no-feedback]")) {
            this.showFeedback = false;
        }
        this.showResults = true;
        if ($(this.origElem).is("[data-no-result]")) {
            this.showResults = false;
        }
        this.random = false;
        if ($(this.origElem).is("[data-random]")) {
            this.random = true;
        }
        this.showTimer = true;
        if ($(this.origElem).is("[data-no-timer]")) {
            this.showTimer = false;
        }
        this.fullwidth = false;
        if ($(this.origElem).is("[data-fullwidth]")) {
            this.fullwidth = true;
        }
        this.nopause = false;
        if ($(this.origElem).is("[data-no-pause]")) {
            this.nopause = true;
        }

        this.running = 0;
        this.paused = 0;
        this.done = 0;
        this.taken = 0;
        this.score = 0;
        this.incorrect = 0;
        this.correctStr = "";
        this.incorrectStr = "";
        this.skippedStr = "";
        this.skipped = 0;
        this.currentQuestionIndex = 0; // Which question is currently displaying on the page
        this.renderedQuestionArray = []; // list of all problems
        this.getNewChildren();
        // One small step to eliminate students from doing view source
        // this won't stop anyone with determination but may prevent casual peeking
        if (!eBookConfig.enableDebug) {
            document.body.oncontextmenu = function () {
                return false;
            };
        }
        this.checkAssessmentStatus().then(
            function () {
                this.renderTimedAssess();
            }.bind(this)
        );
    }

    getNewChildren() {
        this.newChildren = [];
        for (var i = 0; i < this.origElem.childNodes.length; i++) {
            this.newChildren.push(this.origElem.childNodes[i]);
        }
    }

    async checkAssessmentStatus() {
        // Has the user taken this exam?  Inquiring minds want to know
        // If a user has not taken this exam then we want to make sure
        // that if a question has been seen by the student before we do
        // not populate previous answers.
        let sendInfo = {
            div_id: this.divid,
            course_name: eBookConfig.course,
        };
        console.log(sendInfo);
        if (eBookConfig.useRunestoneServices) {
            let request = new Request(
                eBookConfig.ajaxURL + "tookTimedAssessment",
                {
                    method: "POST",
                    headers: this.jsonHeaders,
                    body: JSON.stringify(sendInfo),
                }
            );
            let response = await fetch(request);
            let data = await response.json();
            this.taken = data.tookAssessment;
            this.assessmentTaken = this.taken;
            if (!this.taken) {
                localStorage.clear();
            }
            console.log("done with check status");
            return response;
        } else {
            this.taken = false;
            this.assessmentTaken = false;
            return Promise.resolve();
        }
    }

    /*===============================
    === Generating new Timed HTML ===
    ===============================*/
    async renderTimedAssess() {
        console.log("rendering timed ");
        // create renderedQuestionArray returns a promise
        //
        this.createRenderedQuestionArray();
        if (this.random) {
            this.randomizeRQA();
        }
        this.renderContainer();
        this.renderTimer();
        await this.renderControlButtons();
        this.containerDiv.appendChild(this.timedDiv); // This can't be appended in renderContainer because then it renders above the timer and control buttons.
        if (this.renderedQuestionArray.length > 1) this.renderNavControls();
        this.renderSubmitButton();
        this.renderFeedbackContainer();
        this.useRunestoneServices = eBookConfig.useRunestoneServices;
        // Replace intermediate HTML with rendered HTML
        $(this.origElem).replaceWith(this.containerDiv);
        // check if already taken and if so show results
        this.styleExamElements(); // rename to renderPossibleResults
        this.checkServer("timedExam", true);
    }

    renderContainer() {
        this.containerDiv = document.createElement("div"); // container for the entire Timed Component
        if (this.fullwidth) {
            // allow the container to fill the width - barb
            $(this.containerDiv).attr({
                style: "max-width:none",
            });
        }
        this.containerDiv.id = this.divid;
        this.timedDiv = document.createElement("div"); // div that will hold the questions for the timed assessment
        this.navDiv = document.createElement("div"); // For navigation control
        $(this.navDiv).attr({
            style: "text-align:center",
        });
        this.flagDiv = document.createElement("div"); // div that will hold the "Flag Question" button
        $(this.flagDiv).attr({
            style: "text-align: center",
        });
        this.switchContainer = document.createElement("div");
        this.switchContainer.classList.add("switchcontainer");
        this.switchDiv = document.createElement("div"); // is replaced by the questions
        this.timedDiv.appendChild(this.navDiv);
        this.timedDiv.appendChild(this.flagDiv); // add flagDiv to timedDiv, which holds components for navigation and questions for timed assessment
        this.timedDiv.appendChild(this.switchContainer);
        this.switchContainer.appendChild(this.switchDiv);
        $(this.timedDiv).attr({
            id: "timed_Test",
            style: "display:none",
        });
    }

    renderTimer() {
        this.wrapperDiv = document.createElement("div");
        this.timerContainer = document.createElement("P");
        this.wrapperDiv.id = this.divid + "-startWrapper";
        this.timerContainer.id = this.divid + "-output";
        this.wrapperDiv.appendChild(this.timerContainer);
        this.showTime();
    }

    renderControlButtons() {
        this.controlDiv = document.createElement("div");
        $(this.controlDiv).attr({
            id: "controls",
            style: "text-align: center",
        });
        this.startBtn = document.createElement("button");
        this.pauseBtn = document.createElement("button");
        $(this.startBtn).attr({
            class: "btn btn-success",
            id: "start",
            tabindex: "0",
            role: "button",
        });
        this.startBtn.textContent = "Start";
        this.startBtn.addEventListener(
            "click",
            async function () {
                $(this.finishButton).hide(); // hide the finish button for now
                $(this.flagButton).show();
                let mess = document.createElement("p");
                mess.innerHTML =
                    "<strong>Warning: You will not be able to continue the exam if you close this tab, close the window, or navigate away from this page!</strong>  Make sure you click the Finish Exam button when you are done to submit your work!";
                this.controlDiv.appendChild(mess);
                mess.classList.add("examwarning");
                await this.renderTimedQuestion();
                this.startAssessment();
            }.bind(this),
            false
        );
        $(this.pauseBtn).attr({
            class: "btn btn-default",
            id: "pause",
            disabled: "true",
            tabindex: "0",
            role: "button",
        });
        this.pauseBtn.textContent = "Pause";
        this.pauseBtn.addEventListener(
            "click",
            function () {
                this.pauseAssessment();
            }.bind(this),
            false
        );
        if (!this.taken) {
            this.controlDiv.appendChild(this.startBtn);
        }
        if (!this.nopause) {
            this.controlDiv.appendChild(this.pauseBtn);
        }
        this.containerDiv.appendChild(this.wrapperDiv);
        this.containerDiv.appendChild(this.controlDiv);
    }

    renderNavControls() {
        // making "Prev" button
        this.pagNavList = document.createElement("ul");
        $(this.pagNavList).addClass("pagination");
        this.leftContainer = document.createElement("li");
        this.leftNavButton = document.createElement("button");
        this.leftNavButton.innerHTML = "&#8249; Prev";
        $(this.leftNavButton).attr("aria-label", "Previous");
        $(this.leftNavButton).attr("tabindex", "0");
        $(this.leftNavButton).attr("role", "button");
        $(this.rightNavButton).attr("id", "prev");
        $(this.leftNavButton).css("cursor", "pointer");
        this.leftContainer.appendChild(this.leftNavButton);
        this.pagNavList.appendChild(this.leftContainer);
        // making "Flag Question" button
        this.flaggingPlace = document.createElement("ul");
        $(this.flaggingPlace).addClass("pagination");
        this.flagContainer = document.createElement("li");
        this.flagButton = document.createElement("button");
        $(this.flagButton).addClass("flagBtn");
        this.flagButton.innerHTML = "Flag Question";            // name on button
        $(this.flagButton).attr("aria-labelledby", "Flag");
        $(this.flagButton).attr("tabindex", "5");
        $(this.flagButton).attr("role", "button");
        $(this.flagButton).attr("id", "flag");
        $(this.flagButton).css("cursor", "pointer");
        this.flagContainer.appendChild(this.flagButton);        // adding button to container
        this.flaggingPlace.appendChild(this.flagContainer);     // adding container to flaggingPlace
        // making "Next" button
        this.rightContainer = document.createElement("li");
        this.rightNavButton = document.createElement("button");
        $(this.rightNavButton).attr("aria-label", "Next");
        $(this.rightNavButton).attr("tabindex", "0");
        $(this.rightNavButton).attr("role", "button");
        $(this.rightNavButton).attr("id", "next");
        this.rightNavButton.innerHTML = "Next &#8250;";
        $(this.rightNavButton).css("cursor", "pointer");
        this.rightContainer.appendChild(this.rightNavButton);
        this.pagNavList.appendChild(this.rightContainer);
        this.ensureButtonSafety();
        this.navDiv.appendChild(this.pagNavList);
        this.flagDiv.appendChild(this.flaggingPlace);           // adds flaggingPlace to the flagDiv 
        this.break = document.createElement("br");
        this.navDiv.appendChild(this.break);
        // render the question number jump buttons
        this.qNumList = document.createElement("ul");
        $(this.qNumList).attr("id", "pageNums");
        this.qNumWrapperList = document.createElement("ul");
        $(this.qNumWrapperList).addClass("pagination");
        var tmpLi, tmpA;
        for (var i = 0; i < this.renderedQuestionArray.length; i++) {
            tmpLi = document.createElement("li");
            tmpA = document.createElement("a");
            tmpA.innerHTML = i + 1;
            $(tmpA).css("cursor", "pointer");
            if (i === 0) {
                $(tmpLi).addClass("active");
            }
            tmpLi.appendChild(tmpA);
            this.qNumWrapperList.appendChild(tmpLi);
        }
        this.qNumList.appendChild(this.qNumWrapperList);
        this.navDiv.appendChild(this.qNumList);
        this.navBtnListeners();
        this.flagBtnListener();                                 // listens for click on flag button
        $(this.flagButton).hide();
    }

    // when moving off of a question in an active exam:
    // 1. show that the question has been seen, or mark it broken if it is in error.
    // 2. check and log the current answer
    async navigateAway() {
        if (
            this.renderedQuestionArray[this.currentQuestionIndex].state ==
            "broken_exam"
        ) {
            $(
                "ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"
            ).addClass("broken");
        }
        if (
            this.renderedQuestionArray[this.currentQuestionIndex].state ==
            "exam_ended"
        ) {
            $(
                "ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"
            ).addClass("toolate");
        }
        if (
            this.renderedQuestionArray[this.currentQuestionIndex].question
                .isAnswered
        ) {
            $(
                "ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"
            ).addClass("answered");
            await this.renderedQuestionArray[
                this.currentQuestionIndex
            ].question.checkCurrentAnswer();
            if (!this.done) {
                this.renderedQuestionArray[
                    this.currentQuestionIndex
                ].question.logCurrentAnswer();
            }
        }
    }
    async handleNextPrev(event) {
        if (!this.taken) {
            await this.navigateAway();
        }
        var target = $(event.target).text();
        if (target.match(/Next/)) {                   // checks given text to match "Next"
            if ($(this.rightContainer).hasClass("disabled")) {
                return;
            }
            this.currentQuestionIndex++;
        } else if (target.match(/Prev/)) {               // checks given text to match "Prev"
            if ($(this.leftContainer).hasClass("disabled")) {
                return;
            }
            this.currentQuestionIndex--;
        }
        await this.renderTimedQuestion();
        this.ensureButtonSafety();
        for (var i = 0; i < this.qNumList.childNodes.length; i++) {
            for (
                var j = 0;
                j < this.qNumList.childNodes[i].childNodes.length;
                j++
            ) {
                $(this.qNumList.childNodes[i].childNodes[j]).removeClass(
                    "active"
                );
            }
        }
        $(
            "ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"
        ).addClass("active");
        if  ($("ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"
        ).hasClass("flagcolor")){                                           // checking for class 
            this.flagButton.innerHTML = "Unflag Question";                  // changes text on button
        }
        else{
            this.flagButton.innerHTML = "Flag Question";                    // changes text on button
        }
    }

    async handleFlag(event) {
        // called when flag button is clicked
        var target = $(event.target).text()
        if (target.match(/Flag Question/)) {
            $("ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"
            ).addClass("flagcolor");                            // class will change color of question block
            this.flagButton.innerHTML = "Unflag Question";
        } else {
            $("ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"
            ).removeClass("flagcolor");                         // will restore current color of question block
            this.flagButton.innerHTML = "Flag Question";        // also sets name back
        }
    }

    async handleNumberedNav(event) {
        if (!this.taken) {
            await this.navigateAway();
        }
        for (var i = 0; i < this.qNumList.childNodes.length; i++) {
            for (
                var j = 0;
                j < this.qNumList.childNodes[i].childNodes.length;
                j++
            ) {
                $(this.qNumList.childNodes[i].childNodes[j]).removeClass(
                    "active"
                );
            }
        }

        var target = $(event.target).text();
        let oldIndex = this.currentQuestionIndex;
        this.currentQuestionIndex = parseInt(target) - 1;
        if (this.currentQuestionIndex > this.renderedQuestionArray.length) {
            console.log(`Error: bad index for ${target}`);
            this.currentQuestionIndex = oldIndex;
        }
        $(
            "ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"
        ).addClass("active");
        if  ($("ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")"      // checking for flagcolor class
        ).hasClass("flagcolor")){
            this.flagButton.innerHTML = "Unflag Question";
        }
        else{
            this.flagButton.innerHTML = "Flag Question";
        }
        await this.renderTimedQuestion();
        this.ensureButtonSafety();
    }

    // set up events for navigation
    navBtnListeners() {
        // Next and Prev Listener
        this.pagNavList.addEventListener(
            "click",
            this.handleNextPrev.bind(this),
            false
        );

        // Numbered Listener
        this.qNumList.addEventListener(
            "click",
            this.handleNumberedNav.bind(this),
            false
        );
    }

    // set up event for flag
    flagBtnListener() {
        this.flaggingPlace.addEventListener(
            "click",
            this.handleFlag.bind(this),     // calls this to take action
            false
        );
    }

    renderSubmitButton() {
        this.buttonContainer = document.createElement("div");
        $(this.buttonContainer).attr({
            style: "text-align:center",
        });
        this.finishButton = document.createElement("button");
        $(this.finishButton).attr({
            id: "finish",
            class: "btn btn-primary",
        });
        this.finishButton.textContent = "Finish Exam";
        this.finishButton.addEventListener(
            "click",
            async function () {
                if (
                    window.confirm(
                        "Clicking OK means you are ready to submit your answers and are finished with this assessment."
                    )
                ) {
                    await this.finishAssessment();
                    $(this.flagButton).hide();
                }
            }.bind(this),
            false
        );
        this.controlDiv.appendChild(this.finishButton);
        $(this.finishButton).hide();
        this.timedDiv.appendChild(this.buttonContainer);
    }
    ensureButtonSafety() {
        if (this.currentQuestionIndex === 0) {
            if (this.renderedQuestionArray.length != 1) {
                $(this.rightContainer).removeClass("disabled");
            }
            $(this.leftContainer).addClass("disabled");
        }
        if (
            this.currentQuestionIndex >=
            this.renderedQuestionArray.length - 1
        ) {
            if (this.renderedQuestionArray.length != 1) {
                $(this.leftContainer).removeClass("disabled");
            }
            $(this.rightContainer).addClass("disabled");
        }
        if (
            this.currentQuestionIndex > 0 &&
            this.currentQuestionIndex < this.renderedQuestionArray.length - 1
        ) {
            $(this.rightContainer).removeClass("disabled");
            $(this.leftContainer).removeClass("disabled");
        }
    }
    renderFeedbackContainer() {
        this.scoreDiv = document.createElement("P");
        this.scoreDiv.id = this.divid + "results";
        this.scoreDiv.style.display = "none";
        this.containerDiv.appendChild(this.scoreDiv);
    }

    createRenderedQuestionArray() {
        // this finds all the assess questions in this timed assessment
        // We need to make a list of all the questions up front so we can set up navigation
        // but we do not want to render the questions until the student has navigated
        // Also adds them to this.renderedQuestionArray

        // todo:  This needs to be updated to account for the runestone div wrapper.

        // To accommodate the selectquestion type -- which is async! we need to wrap
        // all of this in a promise, so that we don't continue to render the timed
        // exam until all of the questions have been realized.
        var opts;
        for (var i = 0; i < this.newChildren.length; i++) {
            var tmpChild = this.newChildren[i];
            opts = {
                state: "prepared",
                orig: tmpChild,
                question: {},
                useRunestoneServices: eBookConfig.useRunestoneServices,
                timed: true,
                assessmentTaken: this.taken,
                timedWrapper: this.divid,
                initAttempts: 0,
            };
            if ($(tmpChild).children("[data-component]").length > 0) {
                tmpChild = $(tmpChild).children("[data-component]")[0];
                opts.orig = tmpChild;
            }
            if ($(tmpChild).is("[data-component]")) {
                this.renderedQuestionArray.push(opts);
            }
        }
    }

    randomizeRQA() {
        var currentIndex = this.renderedQuestionArray.length,
            temporaryValue,
            randomIndex;
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = this.renderedQuestionArray[currentIndex];
            this.renderedQuestionArray[
                currentIndex
            ] = this.renderedQuestionArray[randomIndex];
            this.renderedQuestionArray[randomIndex] = temporaryValue;
        }
    }

    async renderTimedQuestion() {
        if (this.currentQuestionIndex >= this.renderedQuestionArray.length) {
            // sometimes the user clicks in the event area for the qNumList
            // But misses a number in that case the text is the concatenation
            // of all the numbers in the list!
            return;
        }
        // check the renderedQuestionArray to see if it has been rendered.
        let opts = this.renderedQuestionArray[this.currentQuestionIndex];
        let currentQuestion;
        if (
            opts.state === "prepared" ||
            opts.state === "forreview" ||
            (opts.state === "broken_exam" && opts.initAttempts < 3)
        ) {
            let tmpChild = opts.orig;
            if ($(tmpChild).is("[data-component=selectquestion]")) {
                if (this.done && opts.state == "prepared") {
                    this.renderedQuestionArray[
                        this.currentQuestionIndex
                    ].state = "exam_ended";
                } else {
                    // SelectOne is async and will replace itself in this array with
                    // the actual selected question
                    opts.rqa = this.renderedQuestionArray;
                    let newq = new _selectquestion_js_selectone__WEBPACK_IMPORTED_MODULE_8__.default(opts);
                    this.renderedQuestionArray[this.currentQuestionIndex] = {
                        question: newq,
                    };
                    try {
                        await newq.initialize();
                        if (opts.state == "broken_exam") {
                            // remove the broken class from this question if we get here.
                            $(
                                `ul#pageNums > ul > li:eq(${this.currentQuestionIndex})`
                            ).removeClass("broken");
                        }
                    } catch (e) {
                        opts.state = "broken_exam";
                        this.renderedQuestionArray[
                            this.currentQuestionIndex
                        ] = opts;
                        console.log(
                            `Error initializing question: Details ${e}`
                        );
                    }
                }
            } else if ($(tmpChild).is("[data-component]")) {
                let componentKind = $(tmpChild).data("component");
                this.renderedQuestionArray[this.currentQuestionIndex] = {
                    question: window.component_factory[componentKind](opts),
                };
            }
        } else if (opts.state === "broken_exam") {
            return;
        }

        currentQuestion = this.renderedQuestionArray[this.currentQuestionIndex]
            .question;
        if (opts.state === "forreview") {
            await currentQuestion.checkCurrentAnswer();
            currentQuestion.renderFeedback();
            currentQuestion.disableInteraction();
        }

        if (!this.visited.includes(this.currentQuestionIndex)) {
            this.visited.push(this.currentQuestionIndex);
            if (
                this.visited.length === this.renderedQuestionArray.length &&
                !this.done
            ) {
                $(this.finishButton).show();
            }
        }

        if (currentQuestion.containerDiv) {
            $(this.switchDiv).replaceWith(currentQuestion.containerDiv);
            this.switchDiv = currentQuestion.containerDiv;
        }

        // If the timed component has listeners, those might need to be reinitialized
        // This flag will only be set in the elements that need it--it will be undefined in the others and thus evaluate to false
        if (currentQuestion.needsReinitialization) {
            currentQuestion.reinitializeListeners(this.taken);
        }
    }

    /*=================================
    === Timer and control Functions ===
    =================================*/
    handlePrevAssessment() {
        $(this.startBtn).hide();
        $(this.pauseBtn).attr("disabled", true);
        $(this.finishButton).attr("disabled", true);
        this.running = 0;
        this.done = 1;
        // showFeedback sand showResults should both be true before we show the
        // questions and their state of correctness.
        if (this.showResults && this.showFeedback) {
            $(this.timedDiv).show();
            this.restoreAnsweredQuestions(); // do not log these results
        } else {
            $(this.pauseBtn).hide();
            $(this.timerContainer).hide();
        }
    }
    startAssessment() {
        if (!this.taken) {
            $("#relations-next").hide(); // hide the next page button for now
            $("#relations-prev").hide(); // hide the previous button for now
            $(this.startBtn).hide();
            $(this.pauseBtn).attr("disabled", false);
            if (this.running === 0 && this.paused === 0) {
                this.running = 1;
                this.lastTime = Date.now();
                $(this.timedDiv).show();
                this.increment();
                this.logBookEvent({
                    event: "timedExam",
                    act: "start",
                    div_id: this.divid,
                });
                var timeStamp = new Date();
                var storageObj = {
                    answer: [0, 0, this.renderedQuestionArray.length, 0],
                    timestamp: timeStamp,
                };
                localStorage.setItem(
                    this.localStorageKey(),
                    JSON.stringify(storageObj)
                );
            }
            $(window).on(
                "beforeunload",
                function (event) {
                    // this actual value gets ignored by newer browsers
                    if (this.done) {
                        return;
                    }
                    event.preventDefault();
                    event.returnValue =
                        "Are you sure you want to leave?  Your work will be lost! And you will need your instructor to reset the exam!";
                    return "Are you sure you want to leave?  Your work will be lost!";
                }.bind(this)
            );
            window.addEventListener(
                "pagehide",
                async function (event) {
                    if (!this.done) {
                        await this.finishAssessment();
                        console.log("Exam exited by leaving page");
                    }
                }.bind(this)
            );
        } else {
            this.handlePrevAssessment();
        }
    }
    pauseAssessment() {
        if (this.done === 0) {
            if (this.running === 1) {
                this.logBookEvent({
                    event: "timedExam",
                    act: "pause",
                    div_id: this.divid,
                });
                this.running = 0;
                this.paused = 1;
                this.pauseBtn.innerHTML = "Resume";
                $(this.timedDiv).hide();
            } else {
                this.logBookEvent({
                    event: "timedExam",
                    act: "resume",
                    div_id: this.divid,
                });
                this.running = 1;
                this.paused = 0;
                this.increment();
                this.pauseBtn.innerHTML = "Pause";
                $(this.timedDiv).show();
            }
        }
    }

    showTime() {
        if (this.showTimer) {
            var mins = Math.floor(this.timeLimit / 60);
            var secs = Math.floor(this.timeLimit) % 60;
            var minsString = mins;
            var secsString = secs;
            if (mins < 10) {
                minsString = "0" + mins;
            }
            if (secs < 10) {
                secsString = "0" + secs;
            }
            var beginning = "Time Remaining    ";
            if (!this.limitedTime) {
                beginning = "Time Taken    ";
            }
            var timeString = beginning + minsString + ":" + secsString;
            if (this.done || this.taken) {
                var minutes = Math.floor(this.timeTaken / 60);
                var seconds = Math.floor(this.timeTaken % 60);
                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
                timeString = "Time taken: " + minutes + ":" + seconds;
            }
            this.timerContainer.innerHTML = timeString;
            var timeTips = document.getElementsByClassName("timeTip");
            for (var i = 0; i <= timeTips.length - 1; i++) {
                timeTips[i].title = timeString;
            }
        } else {
            $(this.timerContainer).hide();
        }
    }

    increment() {
        // if running (not paused) and not taken
        if (this.running === 1 && !this.taken) {
            setTimeout(
                function () {
                    // When a browser loses focus, setTimeout may not be called on the
                    // schedule expected.  Browsers are free to save power by lengthening
                    // the interval to some longer time.  So we cannot just subtract 1
                    // from the timeLimit we need to measure the elapsed time from the last
                    // call to the current call and subtract that number of seconds.
                    let currentTime = Date.now();
                    if (this.limitedTime) {
                        // If there's a time limit, count down to 0
                        this.timeLimit =
                            this.timeLimit -
                            Math.floor((currentTime - this.lastTime) / 1000);
                    } else {
                        // Else count up to keep track of how long it took to complete
                        this.timeLimit =
                            this.timeLimit +
                            Math.floor((currentTime - this.lastTime) / 1000);
                    }
                    this.lastTime = currentTime;
                    localStorage.setItem(
                        eBookConfig.email + ":" + this.divid + "-time",
                        this.timeLimit
                    );
                    this.showTime();
                    if (this.timeLimit > 0) {
                        this.increment();
                        // ran out of time
                    } else {
                        $(this.startBtn).attr({
                            disabled: "true",
                        });
                        $(this.finishButton).attr({
                            disabled: "true",
                        });
                        this.running = 0;
                        this.done = 1;
                        if (!this.taken) {
                            this.taken = true;
                            // embed the message in the page -- an alert actually prevents
                            // the answers from being submitted and if a student closes their
                            // laptop then the answers will not be submitted ever!  Even when they
                            // reopen the laptop their session cookie is likely invalid.
                            let mess = document.createElement("h1");
                            mess.innerHTML =
                                "Sorry but you ran out of time. Your answers are being submitted";
                            this.controlDiv.appendChild(mess);
                            this.finishAssessment();
                        }
                    }
                }.bind(this),
                1000
            );
        }
    }

    styleExamElements() {
        // Checks if this exam has been taken before
        $(this.timerContainer).css({
            width: "50%",
            margin: "0 auto",
            "background-color": "#DFF0D8",
            "text-align": "center",
            border: "2px solid #DFF0D8",
            "border-radius": "25px",
        });
        $(this.scoreDiv).css({
            width: "50%",
            margin: "0 auto",
            "background-color": "#DFF0D8",
            "text-align": "center",
            border: "2px solid #DFF0D8",
            "border-radius": "25px",
        });
        $(".tooltipTime").css({
            margin: "0",
            padding: "0",
            "background-color": "black",
            color: "white",
        });
    }

    async finishAssessment() {
        $("#relations-next").show(); // show the next page button for now
        $("#relations-prev").show(); // show the previous button for now
        if (!this.showFeedback) {
            // bje - changed from showResults
            $(this.timedDiv).hide();
            $(this.pauseBtn).hide();
            $(this.timerContainer).hide();
        }
        this.findTimeTaken();
        this.running = 0;
        this.done = 1;
        this.taken = 1;
        await this.finalizeProblems();
        this.checkScore();
        this.displayScore();
        this.storeScore();
        this.logScore();
        $(this.pauseBtn).attr("disabled", true);
        this.finishButton.disabled = true;
        $(window).off("beforeunload");
        // turn off the pagehide listener
        let assignment_id = this.divid;
        setTimeout(function () {
            jQuery.ajax({
                url: eBookConfig.app + "/assignments/student_autograde",
                type: "POST",
                dataType: "JSON",
                data: {
                    assignment_id: assignment_id,
                    is_timed: true,
                },
                success: function (retdata) {
                    if (retdata.success == false) {
                        console.log(retdata.message);
                    } else {
                        console.log("Autograder completed");
                    }
                },
            });
        }, 2000);
    }

    // finalizeProblems
    // ----------------
    async finalizeProblems() {
        // Because we have submitted each question as we navigate we only need to
        // send the final version of the question the student is on when they press the
        // finish exam button.

        var currentQuestion = this.renderedQuestionArray[
            this.currentQuestionIndex
        ].question;
        await currentQuestion.checkCurrentAnswer();
        currentQuestion.logCurrentAnswer();
        currentQuestion.renderFeedback();
        currentQuestion.disableInteraction();

        for (var i = 0; i < this.renderedQuestionArray.length; i++) {
            let currentQuestion = this.renderedQuestionArray[i];
            // set the state to forreview so we know that feedback may be appropriate
            if (currentQuestion.state !== "broken_exam") {
                currentQuestion.state = "forreview";
                currentQuestion.question.disableInteraction();
            }
        }

        if (!this.showFeedback) {
            this.hideTimedFeedback();
        }
    }

    // restoreAnsweredQuestions
    // ------------------------
    restoreAnsweredQuestions() {
        for (var i = 0; i < this.renderedQuestionArray.length; i++) {
            var currentQuestion = this.renderedQuestionArray[i];
            if (currentQuestion.state === "prepared") {
                currentQuestion.state = "forreview";
            }
        }
    }

    // hideTimedFeedback
    // -----------------
    hideTimedFeedback() {
        for (var i = 0; i < this.renderedQuestionArray.length; i++) {
            var currentQuestion = this.renderedQuestionArray[i].question;
            currentQuestion.hideFeedback();
        }
    }

    // checkScore
    // ----------
    // This is a simple all or nothing score of one point per question for
    // that includes our best guess if a question was skipped.
    checkScore() {
        this.correctStr = "";
        this.skippedStr = "";
        this.incorrectStr = "";
        // Gets the score of each problem
        for (var i = 0; i < this.renderedQuestionArray.length; i++) {
            var correct = this.renderedQuestionArray[
                i
            ].question.checkCorrectTimed();
            if (correct == "T") {
                this.score++;
                this.correctStr = this.correctStr + (i + 1) + ", ";
            } else if (correct == "F") {
                this.incorrect++;
                this.incorrectStr = this.incorrectStr + (i + 1) + ", ";
            } else if (correct === null || correct === "I") {
                this.skipped++;
                this.skippedStr = this.skippedStr + (i + 1) + ", ";
            } else {
                // ignored question; just do nothing
            }
        }
        // remove extra comma and space at end if any
        if (this.correctStr.length > 0)
            this.correctStr = this.correctStr.substring(
                0,
                this.correctStr.length - 2
            );
        else this.correctStr = "None";
        if (this.skippedStr.length > 0)
            this.skippedStr = this.skippedStr.substring(
                0,
                this.skippedStr.length - 2
            );
        else this.skippedStr = "None";
        if (this.incorrectStr.length > 0)
            this.incorrectStr = this.incorrectStr.substring(
                0,
                this.incorrectStr.length - 2
            );
        else this.incorrectStr = "None";
    }
    findTimeTaken() {
        if (this.limitedTime) {
            this.timeTaken = this.startingTime - this.timeLimit;
        } else {
            this.timeTaken = this.timeLimit;
        }
    }
    storeScore() {
        var storage_arr = [];
        storage_arr.push(
            this.score,
            this.correctStr,
            this.incorrect,
            this.incorrectStr,
            this.skipped,
            this.skippedStr,
            this.timeTaken
        );
        var timeStamp = new Date();
        var storageObj = JSON.stringify({
            answer: storage_arr,
            timestamp: timeStamp,
        });
        localStorage.setItem(this.localStorageKey(), storageObj);
    }
    logScore() {
        this.logBookEvent({
            event: "timedExam",
            act: "finish",
            div_id: this.divid,
            correct: this.score,
            incorrect: this.incorrect,
            skipped: this.skipped,
            time: this.timeTaken,
        });
    }
    shouldUseServer(data) {
        // We override the RunestoneBase version because there is no "correct" attribute, and there are 2 possible localStorage schemas
        // --we also want to default to local storage because it contains more information specifically which questions are correct, incorrect, and skipped.
        var storageDate;
        if (localStorage.length === 0) return true;
        var storageObj = localStorage.getItem(this.localStorageKey());
        if (storageObj === null) return true;
        try {
            var storedData = JSON.parse(storageObj).answer;
            if (storedData.length == 4) {
                if (
                    data.correct == storedData[0] &&
                    data.incorrect == storedData[1] &&
                    data.skipped == storedData[2] &&
                    data.timeTaken == storedData[3]
                )
                    return true;
            } else if (storedData.length == 7) {
                if (
                    data.correct == storedData[0] &&
                    data.incorrect == storedData[2] &&
                    data.skipped == storedData[4] &&
                    data.timeTaken == storedData[6]
                ) {
                    return false; // In this case, because local storage has more info, we want to use that if it's consistent
                }
            }
            storageDate = new Date(JSON.parse(storageObj[1]).timestamp);
        } catch (err) {
            // error while parsing; likely due to bad value stored in storage
            console.log(err.message);
            localStorage.removeItem(this.localStorageKey());
            return true;
        }
        var serverDate = new Date(data.timestamp);
        if (serverDate < storageDate) {
            this.logScore();
            return false;
        }
        return true;
    }

    checkLocalStorage() {
        var len = localStorage.length;
        if (len > 0) {
            if (localStorage.getItem(this.localStorageKey()) !== null) {
                this.taken = 1;
                this.restoreAnswers("");
            } else {
                this.taken = 0;
            }
        } else {
            this.taken = 0;
        }
    }
    async restoreAnswers(data) {
        this.taken = 1;
        var tmpArr;
        if (data === "") {
            try {
                tmpArr = JSON.parse(
                    localStorage.getItem(this.localStorageKey())
                ).answer;
            } catch (err) {
                // error while parsing; likely due to bad value stored in storage
                console.log(err.message);
                localStorage.removeItem(this.localStorageKey());
                this.taken = 0;
                return;
            }
        } else {
            // Parse results from the database
            tmpArr = [
                parseInt(data.correct),
                parseInt(data.incorrect),
                parseInt(data.skipped),
                parseInt(data.timeTaken),
                data.reset,
            ];
            this.setLocalStorage(tmpArr);
        }
        if (tmpArr.length == 1) {
            // Exam was previously reset
            this.reset = true;
            this.taken = 0;
            return;
        }
        if (tmpArr.length == 4) {
            // Accidental Reload OR Database Entry
            this.score = tmpArr[0];
            this.incorrect = tmpArr[1];
            this.skipped = tmpArr[2];
            this.timeTaken = tmpArr[3];
        } else if (tmpArr.length == 7) {
            // Loaded Completed Exam
            this.score = tmpArr[0];
            this.correctStr = tmpArr[1];
            this.incorrect = tmpArr[2];
            this.incorrectStr = tmpArr[3];
            this.skipped = tmpArr[4];
            this.skippedStr = tmpArr[5];
            this.timeTaken = tmpArr[6];
        } else {
            // Set localStorage in case of "accidental" reload
            this.score = 0;
            this.incorrect = 0;
            this.skipped = this.renderedQuestionArray.length;
            this.timeTaken = 0;
        }
        if (this.taken) {
            if (this.skipped === this.renderedQuestionArray.length) {
                this.showFeedback = false;
            }
            this.handlePrevAssessment();
        }
        await this.renderTimedQuestion();
        this.displayScore();
        this.showTime();
    }
    setLocalStorage(parsedData) {
        var timeStamp = new Date();
        var storageObj = {
            answer: parsedData,
            timestamp: timeStamp,
        };
        localStorage.setItem(
            this.localStorageKey(),
            JSON.stringify(storageObj)
        );
    }
    displayScore() {
        if (this.showResults) {
            var scoreString = "";
            var numQuestions;
            var percentCorrect;
            // if we have some information
            if (
                this.correctStr.length > 0 ||
                this.incorrectStr.length > 0 ||
                this.skippedStr.length > 0
            ) {
                scoreString = `Num Correct: ${this.score}. Questions: ${this.correctStr}<br>Num Wrong: ${this.incorrect}. Questions: ${this.incorrectStr}<br>Num Skipped: ${this.skipped}. Questions: ${this.skippedStr}<br>`;
                numQuestions = this.score + this.incorrect + this.skipped;
                percentCorrect = (this.score / numQuestions) * 100;
                scoreString += "Percent Correct: " + percentCorrect + "%";
                $(this.scoreDiv).html(scoreString);
                this.scoreDiv.style.display = "block";
            } else {
                scoreString = `Num Correct: ${this.score}<br>Num Wrong: ${this.incorrect}<br>Num Skipped: ${this.skipped}<br>`;
                numQuestions = this.score + this.incorrect + this.skipped;
                percentCorrect = (this.score / numQuestions) * 100;
                scoreString += "Percent Correct: " + percentCorrect + "%";
                $(this.scoreDiv).html(scoreString);
                this.scoreDiv.style.display = "block";
            }
            this.highlightNumberedList();
        } else {
            $(this.scoreDiv).html(
                "Thank you for taking the exam.  Your answers have been recorded."
            );
            this.scoreDiv.style.display = "block";
        }
    }
    highlightNumberedList() {
        var correctCount = this.correctStr;
        var incorrectCount = this.incorrectStr;
        var skippedCount = this.skippedStr;
        correctCount = correctCount.replace(/ /g, "").split(",");
        incorrectCount = incorrectCount.replace(/ /g, "").split(",");
        skippedCount = skippedCount.replace(/ /g, "").split(",");
        $(function () {
            var numberedBtns = $("ul#pageNums > ul > li");
            if (numberedBtns.hasClass("answered")) {
                numberedBtns.removeClass("answered");
            }
            for (var i = 0; i < correctCount.length; i++) {
                var test = parseInt(correctCount[i]) - 1;
                numberedBtns
                    .eq(parseInt(correctCount[i]) - 1)
                    .addClass("correctCount");
            }
            for (var j = 0; j < incorrectCount.length; j++) {
                numberedBtns
                    .eq(parseInt(incorrectCount[j]) - 1)
                    .addClass("incorrectCount");
            }
            for (var k = 0; k < skippedCount.length; k++) {
                numberedBtns
                    .eq(parseInt(skippedCount[k]) - 1)
                    .addClass("skippedCount");
            }
        });
    }
}

/*=======================================================
=== Function that calls the constructors on page load ===
=======================================================*/
$(document).bind("runestone:login-complete", function () {
    $("[data-component=timedAssessment]").each(function (index) {
        TimedList[this.id] = new Timed({
            orig: this,
            useRunestoneServices: eBookConfig.useRunestoneServices,
        });
    });
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3RpbWVkL2Nzcy90aW1lZC5jc3M/MTUyYyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3RpbWVkL2pzL3RpbWVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYTs7QUFFZ0Q7QUFDVjtBQUNEO0FBQ3VCO0FBQ2hCO0FBQ2M7QUFDWDtBQUNBO0FBQ0Y7QUFDaEM7O0FBRW5CLG1CQUFtQjs7QUFFMUI7QUFDZSxvQkFBb0IsZ0VBQWE7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLHFDQUFxQztBQUM1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNkJBQTZCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsaUVBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCwwQkFBMEI7QUFDdEY7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLEVBQUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMEJBQTBCO0FBQ3JEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLG9DQUFvQztBQUNwQyxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLHVDQUF1QztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdUNBQXVDO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdUNBQXVDO0FBQzlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1Q0FBdUM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYixvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYix1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsV0FBVyxlQUFlLGdCQUFnQixpQkFBaUIsZUFBZSxlQUFlLGtCQUFrQixtQkFBbUIsYUFBYSxlQUFlLGdCQUFnQjtBQUN4TjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLDhDQUE4QyxXQUFXLGlCQUFpQixlQUFlLG1CQUFtQixhQUFhO0FBQ3pIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix5QkFBeUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwyQkFBMkI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIseUJBQXlCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQyIsImZpbGUiOiJydW5lc3RvbmVfdGltZWRfanNfdGltZWRfanMtcnVuZXN0b25lX2FjdGl2ZWNvZGVfY3NzX2FjdGl2ZWNvZGVfY3NzLXJ1bmVzdG9uZV9jbGlja2FibGVBcmVhX2MtYzJlMTdlLmJ1bmRsZS5qcz92PWQyMTVlYmEzZDhhNGQwYjY3NzRhIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09PT09PT0gICAgICBNYXN0ZXIgdGltZWQuanMgICAgID09PT09PT09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PT0gICAgIFRoaXMgZmlsZSBjb250YWlucyB0aGUgSlMgZm9yICAgID09PVxyXG49PT0gICAgIHRoZSBSdW5lc3RvbmUgdGltZWQgY29tcG9uZW50LiAgID09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PT0gICAgICAgICAgICAgIENyZWF0ZWQgQnkgICAgICAgICAgICAgID09PVxyXG49PT0gICAgICAgICAgICAgS2lyYnkgT2xzb24gICAgICAgICAgICAgID09PVxyXG49PT0gICAgICAgICAgICAgICA2LzExLzE1ICAgICAgICAgICAgICAgID09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBSdW5lc3RvbmVCYXNlIGZyb20gXCIuLi8uLi9jb21tb24vanMvcnVuZXN0b25lYmFzZS5qc1wiO1xyXG5pbXBvcnQgVGltZWRGSVRCIGZyb20gXCIuLi8uLi9maXRiL2pzL3RpbWVkZml0Yi5qc1wiO1xyXG5pbXBvcnQgVGltZWRNQyBmcm9tIFwiLi4vLi4vbWNob2ljZS9qcy90aW1lZG1jLmpzXCI7XHJcbmltcG9ydCBUaW1lZFNob3J0QW5zd2VyIGZyb20gXCIuLi8uLi9zaG9ydGFuc3dlci9qcy90aW1lZF9zaG9ydGFuc3dlci5qc1wiO1xyXG5pbXBvcnQgQUNGYWN0b3J5IGZyb20gXCIuLi8uLi9hY3RpdmVjb2RlL2pzL2FjZmFjdG9yeS5qc1wiO1xyXG5pbXBvcnQgVGltZWRDbGlja2FibGVBcmVhIGZyb20gXCIuLi8uLi9jbGlja2FibGVBcmVhL2pzL3RpbWVkY2xpY2thYmxlXCI7XHJcbmltcG9ydCBUaW1lZERyYWdORHJvcCBmcm9tIFwiLi4vLi4vZHJhZ25kcm9wL2pzL3RpbWVkZG5kLmpzXCI7XHJcbmltcG9ydCBUaW1lZFBhcnNvbnMgZnJvbSBcIi4uLy4uL3BhcnNvbnMvanMvdGltZWRwYXJzb25zLmpzXCI7XHJcbmltcG9ydCBTZWxlY3RPbmUgZnJvbSBcIi4uLy4uL3NlbGVjdHF1ZXN0aW9uL2pzL3NlbGVjdG9uZVwiO1xyXG5pbXBvcnQgXCIuLi9jc3MvdGltZWQuY3NzXCI7XHJcblxyXG5leHBvcnQgdmFyIFRpbWVkTGlzdCA9IHt9OyAvLyBUaW1lZCBkaWN0aW9uYXJ5XHJcblxyXG4vLyBUaW1lZCBjb25zdHJ1Y3RvclxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lZCBleHRlbmRzIFJ1bmVzdG9uZUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xyXG4gICAgICAgIHN1cGVyKG9wdHMpO1xyXG4gICAgICAgIHZhciBvcmlnID0gb3B0cy5vcmlnO1xyXG4gICAgICAgIHRoaXMub3JpZ0VsZW0gPSBvcmlnOyAvLyB0aGUgZW50aXJlIGVsZW1lbnQgb2YgdGhpcyB0aW1lZCBhc3Nlc3NtZW50IGFuZCBhbGwgb2YgaXRzIGNoaWxkcmVuXHJcbiAgICAgICAgdGhpcy5kaXZpZCA9IG9yaWcuaWQ7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMub3JpZ0VsZW0uY2hpbGROb2RlcztcclxuICAgICAgICB0aGlzLnZpc2l0ZWQgPSBbXTtcclxuICAgICAgICB0aGlzLnRpbWVMaW1pdCA9IDA7XHJcbiAgICAgICAgdGhpcy5saW1pdGVkVGltZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghaXNOYU4oJCh0aGlzLm9yaWdFbGVtKS5kYXRhKFwidGltZVwiKSkpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lTGltaXQgPSBwYXJzZUludCgkKHRoaXMub3JpZ0VsZW0pLmRhdGEoXCJ0aW1lXCIpLCAxMCkgKiA2MDsgLy8gdGltZSBpbiBzZWNvbmRzIHRvIGNvbXBsZXRlIHRoZSBleGFtXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRpbmdUaW1lID0gdGhpcy50aW1lTGltaXQ7XHJcbiAgICAgICAgICAgIHRoaXMubGltaXRlZFRpbWUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3dGZWVkYmFjayA9IHRydWU7XHJcbiAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbSkuaXMoXCJbZGF0YS1uby1mZWVkYmFja11cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93RmVlZGJhY2sgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93UmVzdWx0cyA9IHRydWU7XHJcbiAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbSkuaXMoXCJbZGF0YS1uby1yZXN1bHRdXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdHMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yYW5kb20gPSBmYWxzZTtcclxuICAgICAgICBpZiAoJCh0aGlzLm9yaWdFbGVtKS5pcyhcIltkYXRhLXJhbmRvbV1cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5yYW5kb20gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3dUaW1lciA9IHRydWU7XHJcbiAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbSkuaXMoXCJbZGF0YS1uby10aW1lcl1cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93VGltZXIgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5mdWxsd2lkdGggPSBmYWxzZTtcclxuICAgICAgICBpZiAoJCh0aGlzLm9yaWdFbGVtKS5pcyhcIltkYXRhLWZ1bGx3aWR0aF1cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5mdWxsd2lkdGggPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vcGF1c2UgPSBmYWxzZTtcclxuICAgICAgICBpZiAoJCh0aGlzLm9yaWdFbGVtKS5pcyhcIltkYXRhLW5vLXBhdXNlXVwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vcGF1c2UgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gMDtcclxuICAgICAgICB0aGlzLnBhdXNlZCA9IDA7XHJcbiAgICAgICAgdGhpcy5kb25lID0gMDtcclxuICAgICAgICB0aGlzLnRha2VuID0gMDtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLmluY29ycmVjdCA9IDA7XHJcbiAgICAgICAgdGhpcy5jb3JyZWN0U3RyID0gXCJcIjtcclxuICAgICAgICB0aGlzLmluY29ycmVjdFN0ciA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5za2lwcGVkU3RyID0gXCJcIjtcclxuICAgICAgICB0aGlzLnNraXBwZWQgPSAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggPSAwOyAvLyBXaGljaCBxdWVzdGlvbiBpcyBjdXJyZW50bHkgZGlzcGxheWluZyBvbiB0aGUgcGFnZVxyXG4gICAgICAgIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5ID0gW107IC8vIGxpc3Qgb2YgYWxsIHByb2JsZW1zXHJcbiAgICAgICAgdGhpcy5nZXROZXdDaGlsZHJlbigpO1xyXG4gICAgICAgIC8vIE9uZSBzbWFsbCBzdGVwIHRvIGVsaW1pbmF0ZSBzdHVkZW50cyBmcm9tIGRvaW5nIHZpZXcgc291cmNlXHJcbiAgICAgICAgLy8gdGhpcyB3b24ndCBzdG9wIGFueW9uZSB3aXRoIGRldGVybWluYXRpb24gYnV0IG1heSBwcmV2ZW50IGNhc3VhbCBwZWVraW5nXHJcbiAgICAgICAgaWYgKCFlQm9va0NvbmZpZy5lbmFibGVEZWJ1Zykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5Lm9uY29udGV4dG1lbnUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hlY2tBc3Nlc3NtZW50U3RhdHVzKCkudGhlbihcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUaW1lZEFzc2VzcygpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5ld0NoaWxkcmVuKCkge1xyXG4gICAgICAgIHRoaXMubmV3Q2hpbGRyZW4gPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3JpZ0VsZW0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm5ld0NoaWxkcmVuLnB1c2godGhpcy5vcmlnRWxlbS5jaGlsZE5vZGVzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY2hlY2tBc3Nlc3NtZW50U3RhdHVzKCkge1xyXG4gICAgICAgIC8vIEhhcyB0aGUgdXNlciB0YWtlbiB0aGlzIGV4YW0/ICBJbnF1aXJpbmcgbWluZHMgd2FudCB0byBrbm93XHJcbiAgICAgICAgLy8gSWYgYSB1c2VyIGhhcyBub3QgdGFrZW4gdGhpcyBleGFtIHRoZW4gd2Ugd2FudCB0byBtYWtlIHN1cmVcclxuICAgICAgICAvLyB0aGF0IGlmIGEgcXVlc3Rpb24gaGFzIGJlZW4gc2VlbiBieSB0aGUgc3R1ZGVudCBiZWZvcmUgd2UgZG9cclxuICAgICAgICAvLyBub3QgcG9wdWxhdGUgcHJldmlvdXMgYW5zd2Vycy5cclxuICAgICAgICBsZXQgc2VuZEluZm8gPSB7XHJcbiAgICAgICAgICAgIGRpdl9pZDogdGhpcy5kaXZpZCxcclxuICAgICAgICAgICAgY291cnNlX25hbWU6IGVCb29rQ29uZmlnLmNvdXJzZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbmRJbmZvKTtcclxuICAgICAgICBpZiAoZUJvb2tDb25maWcudXNlUnVuZXN0b25lU2VydmljZXMpIHtcclxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdChcclxuICAgICAgICAgICAgICAgIGVCb29rQ29uZmlnLmFqYXhVUkwgKyBcInRvb2tUaW1lZEFzc2Vzc21lbnRcIixcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuanNvbkhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc2VuZEluZm8pLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0KTtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIHRoaXMudGFrZW4gPSBkYXRhLnRvb2tBc3Nlc3NtZW50O1xyXG4gICAgICAgICAgICB0aGlzLmFzc2Vzc21lbnRUYWtlbiA9IHRoaXMudGFrZW47XHJcbiAgICAgICAgICAgIGlmICghdGhpcy50YWtlbikge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkb25lIHdpdGggY2hlY2sgc3RhdHVzXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50YWtlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmFzc2Vzc21lbnRUYWtlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgPT09IEdlbmVyYXRpbmcgbmV3IFRpbWVkIEhUTUwgPT09XHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgIGFzeW5jIHJlbmRlclRpbWVkQXNzZXNzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyaW5nIHRpbWVkIFwiKTtcclxuICAgICAgICAvLyBjcmVhdGUgcmVuZGVyZWRRdWVzdGlvbkFycmF5IHJldHVybnMgYSBwcm9taXNlXHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLmNyZWF0ZVJlbmRlcmVkUXVlc3Rpb25BcnJheSgpO1xyXG4gICAgICAgIGlmICh0aGlzLnJhbmRvbSkge1xyXG4gICAgICAgICAgICB0aGlzLnJhbmRvbWl6ZVJRQSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbmRlckNvbnRhaW5lcigpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyVGltZXIoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnJlbmRlckNvbnRyb2xCdXR0b25zKCk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy50aW1lZERpdik7IC8vIFRoaXMgY2FuJ3QgYmUgYXBwZW5kZWQgaW4gcmVuZGVyQ29udGFpbmVyIGJlY2F1c2UgdGhlbiBpdCByZW5kZXJzIGFib3ZlIHRoZSB0aW1lciBhbmQgY29udHJvbCBidXR0b25zLlxyXG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGggPiAxKSB0aGlzLnJlbmRlck5hdkNvbnRyb2xzKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJTdWJtaXRCdXR0b24oKTtcclxuICAgICAgICB0aGlzLnJlbmRlckZlZWRiYWNrQ29udGFpbmVyKCk7XHJcbiAgICAgICAgdGhpcy51c2VSdW5lc3RvbmVTZXJ2aWNlcyA9IGVCb29rQ29uZmlnLnVzZVJ1bmVzdG9uZVNlcnZpY2VzO1xyXG4gICAgICAgIC8vIFJlcGxhY2UgaW50ZXJtZWRpYXRlIEhUTUwgd2l0aCByZW5kZXJlZCBIVE1MXHJcbiAgICAgICAgJCh0aGlzLm9yaWdFbGVtKS5yZXBsYWNlV2l0aCh0aGlzLmNvbnRhaW5lckRpdik7XHJcbiAgICAgICAgLy8gY2hlY2sgaWYgYWxyZWFkeSB0YWtlbiBhbmQgaWYgc28gc2hvdyByZXN1bHRzXHJcbiAgICAgICAgdGhpcy5zdHlsZUV4YW1FbGVtZW50cygpOyAvLyByZW5hbWUgdG8gcmVuZGVyUG9zc2libGVSZXN1bHRzXHJcbiAgICAgICAgdGhpcy5jaGVja1NlcnZlcihcInRpbWVkRXhhbVwiLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDb250YWluZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBjb250YWluZXIgZm9yIHRoZSBlbnRpcmUgVGltZWQgQ29tcG9uZW50XHJcbiAgICAgICAgaWYgKHRoaXMuZnVsbHdpZHRoKSB7XHJcbiAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb250YWluZXIgdG8gZmlsbCB0aGUgd2lkdGggLSBiYXJiXHJcbiAgICAgICAgICAgICQodGhpcy5jb250YWluZXJEaXYpLmF0dHIoe1xyXG4gICAgICAgICAgICAgICAgc3R5bGU6IFwibWF4LXdpZHRoOm5vbmVcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmlkID0gdGhpcy5kaXZpZDtcclxuICAgICAgICB0aGlzLnRpbWVkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy8gZGl2IHRoYXQgd2lsbCBob2xkIHRoZSBxdWVzdGlvbnMgZm9yIHRoZSB0aW1lZCBhc3Nlc3NtZW50XHJcbiAgICAgICAgdGhpcy5uYXZEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBGb3IgbmF2aWdhdGlvbiBjb250cm9sXHJcbiAgICAgICAgJCh0aGlzLm5hdkRpdikuYXR0cih7XHJcbiAgICAgICAgICAgIHN0eWxlOiBcInRleHQtYWxpZ246Y2VudGVyXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5mbGFnRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy8gZGl2IHRoYXQgd2lsbCBob2xkIHRoZSBcIkZsYWcgUXVlc3Rpb25cIiBidXR0b25cclxuICAgICAgICAkKHRoaXMuZmxhZ0RpdikuYXR0cih7XHJcbiAgICAgICAgICAgIHN0eWxlOiBcInRleHQtYWxpZ246IGNlbnRlclwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3dpdGNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLnN3aXRjaENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic3dpdGNoY29udGFpbmVyXCIpO1xyXG4gICAgICAgIHRoaXMuc3dpdGNoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy8gaXMgcmVwbGFjZWQgYnkgdGhlIHF1ZXN0aW9uc1xyXG4gICAgICAgIHRoaXMudGltZWREaXYuYXBwZW5kQ2hpbGQodGhpcy5uYXZEaXYpO1xyXG4gICAgICAgIHRoaXMudGltZWREaXYuYXBwZW5kQ2hpbGQodGhpcy5mbGFnRGl2KTsgLy8gYWRkIGZsYWdEaXYgdG8gdGltZWREaXYsIHdoaWNoIGhvbGRzIGNvbXBvbmVudHMgZm9yIG5hdmlnYXRpb24gYW5kIHF1ZXN0aW9ucyBmb3IgdGltZWQgYXNzZXNzbWVudFxyXG4gICAgICAgIHRoaXMudGltZWREaXYuYXBwZW5kQ2hpbGQodGhpcy5zd2l0Y2hDb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMuc3dpdGNoQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuc3dpdGNoRGl2KTtcclxuICAgICAgICAkKHRoaXMudGltZWREaXYpLmF0dHIoe1xyXG4gICAgICAgICAgICBpZDogXCJ0aW1lZF9UZXN0XCIsXHJcbiAgICAgICAgICAgIHN0eWxlOiBcImRpc3BsYXk6bm9uZVwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclRpbWVyKCkge1xyXG4gICAgICAgIHRoaXMud3JhcHBlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy50aW1lckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQXCIpO1xyXG4gICAgICAgIHRoaXMud3JhcHBlckRpdi5pZCA9IHRoaXMuZGl2aWQgKyBcIi1zdGFydFdyYXBwZXJcIjtcclxuICAgICAgICB0aGlzLnRpbWVyQ29udGFpbmVyLmlkID0gdGhpcy5kaXZpZCArIFwiLW91dHB1dFwiO1xyXG4gICAgICAgIHRoaXMud3JhcHBlckRpdi5hcHBlbmRDaGlsZCh0aGlzLnRpbWVyQ29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLnNob3dUaW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ29udHJvbEJ1dHRvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAkKHRoaXMuY29udHJvbERpdikuYXR0cih7XHJcbiAgICAgICAgICAgIGlkOiBcImNvbnRyb2xzXCIsXHJcbiAgICAgICAgICAgIHN0eWxlOiBcInRleHQtYWxpZ246IGNlbnRlclwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHRoaXMucGF1c2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICQodGhpcy5zdGFydEJ0bikuYXR0cih7XHJcbiAgICAgICAgICAgIGNsYXNzOiBcImJ0biBidG4tc3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICBpZDogXCJzdGFydFwiLFxyXG4gICAgICAgICAgICB0YWJpbmRleDogXCIwXCIsXHJcbiAgICAgICAgICAgIHJvbGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdGFydEJ0bi50ZXh0Q29udGVudCA9IFwiU3RhcnRcIjtcclxuICAgICAgICB0aGlzLnN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzLmZpbmlzaEJ1dHRvbikuaGlkZSgpOyAvLyBoaWRlIHRoZSBmaW5pc2ggYnV0dG9uIGZvciBub3dcclxuICAgICAgICAgICAgICAgICQodGhpcy5mbGFnQnV0dG9uKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICAgICAgbWVzcy5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAgICAgICAgIFwiPHN0cm9uZz5XYXJuaW5nOiBZb3Ugd2lsbCBub3QgYmUgYWJsZSB0byBjb250aW51ZSB0aGUgZXhhbSBpZiB5b3UgY2xvc2UgdGhpcyB0YWIsIGNsb3NlIHRoZSB3aW5kb3csIG9yIG5hdmlnYXRlIGF3YXkgZnJvbSB0aGlzIHBhZ2UhPC9zdHJvbmc+ICBNYWtlIHN1cmUgeW91IGNsaWNrIHRoZSBGaW5pc2ggRXhhbSBidXR0b24gd2hlbiB5b3UgYXJlIGRvbmUgdG8gc3VibWl0IHlvdXIgd29yayFcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbERpdi5hcHBlbmRDaGlsZChtZXNzKTtcclxuICAgICAgICAgICAgICAgIG1lc3MuY2xhc3NMaXN0LmFkZChcImV4YW13YXJuaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJUaW1lZFF1ZXN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QXNzZXNzbWVudCgpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKHRoaXMucGF1c2VCdG4pLmF0dHIoe1xyXG4gICAgICAgICAgICBjbGFzczogXCJidG4gYnRuLWRlZmF1bHRcIixcclxuICAgICAgICAgICAgaWQ6IFwicGF1c2VcIixcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IFwidHJ1ZVwiLFxyXG4gICAgICAgICAgICB0YWJpbmRleDogXCIwXCIsXHJcbiAgICAgICAgICAgIHJvbGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wYXVzZUJ0bi50ZXh0Q29udGVudCA9IFwiUGF1c2VcIjtcclxuICAgICAgICB0aGlzLnBhdXNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZUFzc2Vzc21lbnQoKTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRha2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbERpdi5hcHBlbmRDaGlsZCh0aGlzLnN0YXJ0QnRuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLm5vcGF1c2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sRGl2LmFwcGVuZENoaWxkKHRoaXMucGF1c2VCdG4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLndyYXBwZXJEaXYpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRoaXMuY29udHJvbERpdik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyTmF2Q29udHJvbHMoKSB7XHJcbiAgICAgICAgLy8gbWFraW5nIFwiUHJldlwiIGJ1dHRvblxyXG4gICAgICAgIHRoaXMucGFnTmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgICAgICAkKHRoaXMucGFnTmF2TGlzdCkuYWRkQ2xhc3MoXCJwYWdpbmF0aW9uXCIpO1xyXG4gICAgICAgIHRoaXMubGVmdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICB0aGlzLmxlZnROYXZCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHRoaXMubGVmdE5hdkJ1dHRvbi5pbm5lckhUTUwgPSBcIiYjODI0OTsgUHJldlwiO1xyXG4gICAgICAgICQodGhpcy5sZWZ0TmF2QnV0dG9uKS5hdHRyKFwiYXJpYS1sYWJlbFwiLCBcIlByZXZpb3VzXCIpO1xyXG4gICAgICAgICQodGhpcy5sZWZ0TmF2QnV0dG9uKS5hdHRyKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xyXG4gICAgICAgICQodGhpcy5sZWZ0TmF2QnV0dG9uKS5hdHRyKFwicm9sZVwiLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAkKHRoaXMucmlnaHROYXZCdXR0b24pLmF0dHIoXCJpZFwiLCBcInByZXZcIik7XHJcbiAgICAgICAgJCh0aGlzLmxlZnROYXZCdXR0b24pLmNzcyhcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XHJcbiAgICAgICAgdGhpcy5sZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubGVmdE5hdkJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy5wYWdOYXZMaXN0LmFwcGVuZENoaWxkKHRoaXMubGVmdENvbnRhaW5lcik7XHJcbiAgICAgICAgLy8gbWFraW5nIFwiRmxhZyBRdWVzdGlvblwiIGJ1dHRvblxyXG4gICAgICAgIHRoaXMuZmxhZ2dpbmdQbGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgICAgICAkKHRoaXMuZmxhZ2dpbmdQbGFjZSkuYWRkQ2xhc3MoXCJwYWdpbmF0aW9uXCIpO1xyXG4gICAgICAgIHRoaXMuZmxhZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICB0aGlzLmZsYWdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICQodGhpcy5mbGFnQnV0dG9uKS5hZGRDbGFzcyhcImZsYWdCdG5cIik7XHJcbiAgICAgICAgdGhpcy5mbGFnQnV0dG9uLmlubmVySFRNTCA9IFwiRmxhZyBRdWVzdGlvblwiOyAgICAgICAgICAgIC8vIG5hbWUgb24gYnV0dG9uXHJcbiAgICAgICAgJCh0aGlzLmZsYWdCdXR0b24pLmF0dHIoXCJhcmlhLWxhYmVsbGVkYnlcIiwgXCJGbGFnXCIpO1xyXG4gICAgICAgICQodGhpcy5mbGFnQnV0dG9uKS5hdHRyKFwidGFiaW5kZXhcIiwgXCI1XCIpO1xyXG4gICAgICAgICQodGhpcy5mbGFnQnV0dG9uKS5hdHRyKFwicm9sZVwiLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAkKHRoaXMuZmxhZ0J1dHRvbikuYXR0cihcImlkXCIsIFwiZmxhZ1wiKTtcclxuICAgICAgICAkKHRoaXMuZmxhZ0J1dHRvbikuY3NzKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcclxuICAgICAgICB0aGlzLmZsYWdDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5mbGFnQnV0dG9uKTsgICAgICAgIC8vIGFkZGluZyBidXR0b24gdG8gY29udGFpbmVyXHJcbiAgICAgICAgdGhpcy5mbGFnZ2luZ1BsYWNlLmFwcGVuZENoaWxkKHRoaXMuZmxhZ0NvbnRhaW5lcik7ICAgICAvLyBhZGRpbmcgY29udGFpbmVyIHRvIGZsYWdnaW5nUGxhY2VcclxuICAgICAgICAvLyBtYWtpbmcgXCJOZXh0XCIgYnV0dG9uXHJcbiAgICAgICAgdGhpcy5yaWdodENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICB0aGlzLnJpZ2h0TmF2QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAkKHRoaXMucmlnaHROYXZCdXR0b24pLmF0dHIoXCJhcmlhLWxhYmVsXCIsIFwiTmV4dFwiKTtcclxuICAgICAgICAkKHRoaXMucmlnaHROYXZCdXR0b24pLmF0dHIoXCJ0YWJpbmRleFwiLCBcIjBcIik7XHJcbiAgICAgICAgJCh0aGlzLnJpZ2h0TmF2QnV0dG9uKS5hdHRyKFwicm9sZVwiLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAkKHRoaXMucmlnaHROYXZCdXR0b24pLmF0dHIoXCJpZFwiLCBcIm5leHRcIik7XHJcbiAgICAgICAgdGhpcy5yaWdodE5hdkJ1dHRvbi5pbm5lckhUTUwgPSBcIk5leHQgJiM4MjUwO1wiO1xyXG4gICAgICAgICQodGhpcy5yaWdodE5hdkJ1dHRvbikuY3NzKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcclxuICAgICAgICB0aGlzLnJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucmlnaHROYXZCdXR0b24pO1xyXG4gICAgICAgIHRoaXMucGFnTmF2TGlzdC5hcHBlbmRDaGlsZCh0aGlzLnJpZ2h0Q29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLmVuc3VyZUJ1dHRvblNhZmV0eSgpO1xyXG4gICAgICAgIHRoaXMubmF2RGl2LmFwcGVuZENoaWxkKHRoaXMucGFnTmF2TGlzdCk7XHJcbiAgICAgICAgdGhpcy5mbGFnRGl2LmFwcGVuZENoaWxkKHRoaXMuZmxhZ2dpbmdQbGFjZSk7ICAgICAgICAgICAvLyBhZGRzIGZsYWdnaW5nUGxhY2UgdG8gdGhlIGZsYWdEaXYgXHJcbiAgICAgICAgdGhpcy5icmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcclxuICAgICAgICB0aGlzLm5hdkRpdi5hcHBlbmRDaGlsZCh0aGlzLmJyZWFrKTtcclxuICAgICAgICAvLyByZW5kZXIgdGhlIHF1ZXN0aW9uIG51bWJlciBqdW1wIGJ1dHRvbnNcclxuICAgICAgICB0aGlzLnFOdW1MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgICAgICQodGhpcy5xTnVtTGlzdCkuYXR0cihcImlkXCIsIFwicGFnZU51bXNcIik7XHJcbiAgICAgICAgdGhpcy5xTnVtV3JhcHBlckxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgICAgJCh0aGlzLnFOdW1XcmFwcGVyTGlzdCkuYWRkQ2xhc3MoXCJwYWdpbmF0aW9uXCIpO1xyXG4gICAgICAgIHZhciB0bXBMaSwgdG1wQTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRtcExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICB0bXBBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICAgIHRtcEEuaW5uZXJIVE1MID0gaSArIDE7XHJcbiAgICAgICAgICAgICQodG1wQSkuY3NzKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcclxuICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICQodG1wTGkpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRtcExpLmFwcGVuZENoaWxkKHRtcEEpO1xyXG4gICAgICAgICAgICB0aGlzLnFOdW1XcmFwcGVyTGlzdC5hcHBlbmRDaGlsZCh0bXBMaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucU51bUxpc3QuYXBwZW5kQ2hpbGQodGhpcy5xTnVtV3JhcHBlckxpc3QpO1xyXG4gICAgICAgIHRoaXMubmF2RGl2LmFwcGVuZENoaWxkKHRoaXMucU51bUxpc3QpO1xyXG4gICAgICAgIHRoaXMubmF2QnRuTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5mbGFnQnRuTGlzdGVuZXIoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsaXN0ZW5zIGZvciBjbGljayBvbiBmbGFnIGJ1dHRvblxyXG4gICAgICAgICQodGhpcy5mbGFnQnV0dG9uKS5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gd2hlbiBtb3Zpbmcgb2ZmIG9mIGEgcXVlc3Rpb24gaW4gYW4gYWN0aXZlIGV4YW06XHJcbiAgICAvLyAxLiBzaG93IHRoYXQgdGhlIHF1ZXN0aW9uIGhhcyBiZWVuIHNlZW4sIG9yIG1hcmsgaXQgYnJva2VuIGlmIGl0IGlzIGluIGVycm9yLlxyXG4gICAgLy8gMi4gY2hlY2sgYW5kIGxvZyB0aGUgY3VycmVudCBhbnN3ZXJcclxuICAgIGFzeW5jIG5hdmlnYXRlQXdheSgpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W3RoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXhdLnN0YXRlID09XHJcbiAgICAgICAgICAgIFwiYnJva2VuX2V4YW1cIlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICAkKFxyXG4gICAgICAgICAgICAgICAgXCJ1bCNwYWdlTnVtcyA+IHVsID4gbGk6ZXEoXCIgKyB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ICsgXCIpXCJcclxuICAgICAgICAgICAgKS5hZGRDbGFzcyhcImJyb2tlblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVt0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4XS5zdGF0ZSA9PVxyXG4gICAgICAgICAgICBcImV4YW1fZW5kZWRcIlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICAkKFxyXG4gICAgICAgICAgICAgICAgXCJ1bCNwYWdlTnVtcyA+IHVsID4gbGk6ZXEoXCIgKyB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ICsgXCIpXCJcclxuICAgICAgICAgICAgKS5hZGRDbGFzcyhcInRvb2xhdGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleF0ucXVlc3Rpb25cclxuICAgICAgICAgICAgICAgIC5pc0Fuc3dlcmVkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICQoXHJcbiAgICAgICAgICAgICAgICBcInVsI3BhZ2VOdW1zID4gdWwgPiBsaTplcShcIiArIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggKyBcIilcIlxyXG4gICAgICAgICAgICApLmFkZENsYXNzKFwiYW5zd2VyZWRcIik7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleFxyXG4gICAgICAgICAgICBdLnF1ZXN0aW9uLmNoZWNrQ3VycmVudEFuc3dlcigpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleFxyXG4gICAgICAgICAgICAgICAgXS5xdWVzdGlvbi5sb2dDdXJyZW50QW5zd2VyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBoYW5kbGVOZXh0UHJldihldmVudCkge1xyXG4gICAgICAgIGlmICghdGhpcy50YWtlbikge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLm5hdmlnYXRlQXdheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpLnRleHQoKTtcclxuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoKC9OZXh0LykpIHsgICAgICAgICAgICAgICAgICAgLy8gY2hlY2tzIGdpdmVuIHRleHQgdG8gbWF0Y2ggXCJOZXh0XCJcclxuICAgICAgICAgICAgaWYgKCQodGhpcy5yaWdodENvbnRhaW5lcikuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXgrKztcclxuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5tYXRjaCgvUHJldi8pKSB7ICAgICAgICAgICAgICAgLy8gY2hlY2tzIGdpdmVuIHRleHQgdG8gbWF0Y2ggXCJQcmV2XCJcclxuICAgICAgICAgICAgaWYgKCQodGhpcy5sZWZ0Q29udGFpbmVyKS5oYXNDbGFzcyhcImRpc2FibGVkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleC0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCB0aGlzLnJlbmRlclRpbWVkUXVlc3Rpb24oKTtcclxuICAgICAgICB0aGlzLmVuc3VyZUJ1dHRvblNhZmV0eSgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5xTnVtTGlzdC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgICAgICB2YXIgaiA9IDA7XHJcbiAgICAgICAgICAgICAgICBqIDwgdGhpcy5xTnVtTGlzdC5jaGlsZE5vZGVzW2ldLmNoaWxkTm9kZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgaisrXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzLnFOdW1MaXN0LmNoaWxkTm9kZXNbaV0uY2hpbGROb2Rlc1tqXSkucmVtb3ZlQ2xhc3MoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKFxyXG4gICAgICAgICAgICBcInVsI3BhZ2VOdW1zID4gdWwgPiBsaTplcShcIiArIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggKyBcIilcIlxyXG4gICAgICAgICkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgaWYgICgkKFwidWwjcGFnZU51bXMgPiB1bCA+IGxpOmVxKFwiICsgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCArIFwiKVwiXHJcbiAgICAgICAgKS5oYXNDbGFzcyhcImZsYWdjb2xvclwiKSl7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNraW5nIGZvciBjbGFzcyBcclxuICAgICAgICAgICAgdGhpcy5mbGFnQnV0dG9uLmlubmVySFRNTCA9IFwiVW5mbGFnIFF1ZXN0aW9uXCI7ICAgICAgICAgICAgICAgICAgLy8gY2hhbmdlcyB0ZXh0IG9uIGJ1dHRvblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLmZsYWdCdXR0b24uaW5uZXJIVE1MID0gXCJGbGFnIFF1ZXN0aW9uXCI7ICAgICAgICAgICAgICAgICAgICAvLyBjaGFuZ2VzIHRleHQgb24gYnV0dG9uXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGhhbmRsZUZsYWcoZXZlbnQpIHtcclxuICAgICAgICAvLyBjYWxsZWQgd2hlbiBmbGFnIGJ1dHRvbiBpcyBjbGlja2VkXHJcbiAgICAgICAgdmFyIHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KS50ZXh0KClcclxuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoKC9GbGFnIFF1ZXN0aW9uLykpIHtcclxuICAgICAgICAgICAgJChcInVsI3BhZ2VOdW1zID4gdWwgPiBsaTplcShcIiArIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggKyBcIilcIlxyXG4gICAgICAgICAgICApLmFkZENsYXNzKFwiZmxhZ2NvbG9yXCIpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGFzcyB3aWxsIGNoYW5nZSBjb2xvciBvZiBxdWVzdGlvbiBibG9ja1xyXG4gICAgICAgICAgICB0aGlzLmZsYWdCdXR0b24uaW5uZXJIVE1MID0gXCJVbmZsYWcgUXVlc3Rpb25cIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwidWwjcGFnZU51bXMgPiB1bCA+IGxpOmVxKFwiICsgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCArIFwiKVwiXHJcbiAgICAgICAgICAgICkucmVtb3ZlQ2xhc3MoXCJmbGFnY29sb3JcIik7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpbGwgcmVzdG9yZSBjdXJyZW50IGNvbG9yIG9mIHF1ZXN0aW9uIGJsb2NrXHJcbiAgICAgICAgICAgIHRoaXMuZmxhZ0J1dHRvbi5pbm5lckhUTUwgPSBcIkZsYWcgUXVlc3Rpb25cIjsgICAgICAgIC8vIGFsc28gc2V0cyBuYW1lIGJhY2tcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgaGFuZGxlTnVtYmVyZWROYXYoZXZlbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMudGFrZW4pIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5uYXZpZ2F0ZUF3YXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnFOdW1MaXN0LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChcclxuICAgICAgICAgICAgICAgIHZhciBqID0gMDtcclxuICAgICAgICAgICAgICAgIGogPCB0aGlzLnFOdW1MaXN0LmNoaWxkTm9kZXNbaV0uY2hpbGROb2Rlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBqKytcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMucU51bUxpc3QuY2hpbGROb2Rlc1tpXS5jaGlsZE5vZGVzW2pdKS5yZW1vdmVDbGFzcyhcclxuICAgICAgICAgICAgICAgICAgICBcImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpLnRleHQoKTtcclxuICAgICAgICBsZXQgb2xkSW5kZXggPSB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4O1xyXG4gICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggPSBwYXJzZUludCh0YXJnZXQpIC0gMTtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCA+IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6IGJhZCBpbmRleCBmb3IgJHt0YXJnZXR9YCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggPSBvbGRJbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcclxuICAgICAgICAgICAgXCJ1bCNwYWdlTnVtcyA+IHVsID4gbGk6ZXEoXCIgKyB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ICsgXCIpXCJcclxuICAgICAgICApLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGlmICAoJChcInVsI3BhZ2VOdW1zID4gdWwgPiBsaTplcShcIiArIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggKyBcIilcIiAgICAgIC8vIGNoZWNraW5nIGZvciBmbGFnY29sb3IgY2xhc3NcclxuICAgICAgICApLmhhc0NsYXNzKFwiZmxhZ2NvbG9yXCIpKXtcclxuICAgICAgICAgICAgdGhpcy5mbGFnQnV0dG9uLmlubmVySFRNTCA9IFwiVW5mbGFnIFF1ZXN0aW9uXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuZmxhZ0J1dHRvbi5pbm5lckhUTUwgPSBcIkZsYWcgUXVlc3Rpb25cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJUaW1lZFF1ZXN0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5lbnN1cmVCdXR0b25TYWZldHkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXQgdXAgZXZlbnRzIGZvciBuYXZpZ2F0aW9uXHJcbiAgICBuYXZCdG5MaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgLy8gTmV4dCBhbmQgUHJldiBMaXN0ZW5lclxyXG4gICAgICAgIHRoaXMucGFnTmF2TGlzdC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcImNsaWNrXCIsXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlTmV4dFByZXYuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBOdW1iZXJlZCBMaXN0ZW5lclxyXG4gICAgICAgIHRoaXMucU51bUxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJjbGlja1wiLFxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZU51bWJlcmVkTmF2LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXQgdXAgZXZlbnQgZm9yIGZsYWdcclxuICAgIGZsYWdCdG5MaXN0ZW5lcigpIHtcclxuICAgICAgICB0aGlzLmZsYWdnaW5nUGxhY2UuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJjbGlja1wiLFxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUZsYWcuYmluZCh0aGlzKSwgICAgIC8vIGNhbGxzIHRoaXMgdG8gdGFrZSBhY3Rpb25cclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclN1Ym1pdEJ1dHRvbigpIHtcclxuICAgICAgICB0aGlzLmJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgJCh0aGlzLmJ1dHRvbkNvbnRhaW5lcikuYXR0cih7XHJcbiAgICAgICAgICAgIHN0eWxlOiBcInRleHQtYWxpZ246Y2VudGVyXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5maW5pc2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICQodGhpcy5maW5pc2hCdXR0b24pLmF0dHIoe1xyXG4gICAgICAgICAgICBpZDogXCJmaW5pc2hcIixcclxuICAgICAgICAgICAgY2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5maW5pc2hCdXR0b24udGV4dENvbnRlbnQgPSBcIkZpbmlzaCBFeGFtXCI7XHJcbiAgICAgICAgdGhpcy5maW5pc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJjbGlja1wiLFxyXG4gICAgICAgICAgICBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNvbmZpcm0oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQ2xpY2tpbmcgT0sgbWVhbnMgeW91IGFyZSByZWFkeSB0byBzdWJtaXQgeW91ciBhbnN3ZXJzIGFuZCBhcmUgZmluaXNoZWQgd2l0aCB0aGlzIGFzc2Vzc21lbnQuXCJcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZpbmlzaEFzc2Vzc21lbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMuZmxhZ0J1dHRvbikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xEaXYuYXBwZW5kQ2hpbGQodGhpcy5maW5pc2hCdXR0b24pO1xyXG4gICAgICAgICQodGhpcy5maW5pc2hCdXR0b24pLmhpZGUoKTtcclxuICAgICAgICB0aGlzLnRpbWVkRGl2LmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uQ29udGFpbmVyKTtcclxuICAgIH1cclxuICAgIGVuc3VyZUJ1dHRvblNhZmV0eSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoICE9IDEpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcy5yaWdodENvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKHRoaXMubGVmdENvbnRhaW5lcikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ID49XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5Lmxlbmd0aCAtIDFcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5Lmxlbmd0aCAhPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMubGVmdENvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKHRoaXMucmlnaHRDb250YWluZXIpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCA+IDAgJiZcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCA8IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5Lmxlbmd0aCAtIDFcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgJCh0aGlzLnJpZ2h0Q29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMubGVmdENvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXJGZWVkYmFja0NvbnRhaW5lcigpIHtcclxuICAgICAgICB0aGlzLnNjb3JlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBcIik7XHJcbiAgICAgICAgdGhpcy5zY29yZURpdi5pZCA9IHRoaXMuZGl2aWQgKyBcInJlc3VsdHNcIjtcclxuICAgICAgICB0aGlzLnNjb3JlRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLnNjb3JlRGl2KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVSZW5kZXJlZFF1ZXN0aW9uQXJyYXkoKSB7XHJcbiAgICAgICAgLy8gdGhpcyBmaW5kcyBhbGwgdGhlIGFzc2VzcyBxdWVzdGlvbnMgaW4gdGhpcyB0aW1lZCBhc3Nlc3NtZW50XHJcbiAgICAgICAgLy8gV2UgbmVlZCB0byBtYWtlIGEgbGlzdCBvZiBhbGwgdGhlIHF1ZXN0aW9ucyB1cCBmcm9udCBzbyB3ZSBjYW4gc2V0IHVwIG5hdmlnYXRpb25cclxuICAgICAgICAvLyBidXQgd2UgZG8gbm90IHdhbnQgdG8gcmVuZGVyIHRoZSBxdWVzdGlvbnMgdW50aWwgdGhlIHN0dWRlbnQgaGFzIG5hdmlnYXRlZFxyXG4gICAgICAgIC8vIEFsc28gYWRkcyB0aGVtIHRvIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5XHJcblxyXG4gICAgICAgIC8vIHRvZG86ICBUaGlzIG5lZWRzIHRvIGJlIHVwZGF0ZWQgdG8gYWNjb3VudCBmb3IgdGhlIHJ1bmVzdG9uZSBkaXYgd3JhcHBlci5cclxuXHJcbiAgICAgICAgLy8gVG8gYWNjb21tb2RhdGUgdGhlIHNlbGVjdHF1ZXN0aW9uIHR5cGUgLS0gd2hpY2ggaXMgYXN5bmMhIHdlIG5lZWQgdG8gd3JhcFxyXG4gICAgICAgIC8vIGFsbCBvZiB0aGlzIGluIGEgcHJvbWlzZSwgc28gdGhhdCB3ZSBkb24ndCBjb250aW51ZSB0byByZW5kZXIgdGhlIHRpbWVkXHJcbiAgICAgICAgLy8gZXhhbSB1bnRpbCBhbGwgb2YgdGhlIHF1ZXN0aW9ucyBoYXZlIGJlZW4gcmVhbGl6ZWQuXHJcbiAgICAgICAgdmFyIG9wdHM7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm5ld0NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB0bXBDaGlsZCA9IHRoaXMubmV3Q2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIG9wdHMgPSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZTogXCJwcmVwYXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgb3JpZzogdG1wQ2hpbGQsXHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgICB1c2VSdW5lc3RvbmVTZXJ2aWNlczogZUJvb2tDb25maWcudXNlUnVuZXN0b25lU2VydmljZXMsXHJcbiAgICAgICAgICAgICAgICB0aW1lZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFzc2Vzc21lbnRUYWtlbjogdGhpcy50YWtlbixcclxuICAgICAgICAgICAgICAgIHRpbWVkV3JhcHBlcjogdGhpcy5kaXZpZCxcclxuICAgICAgICAgICAgICAgIGluaXRBdHRlbXB0czogMCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKCQodG1wQ2hpbGQpLmNoaWxkcmVuKFwiW2RhdGEtY29tcG9uZW50XVwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0bXBDaGlsZCA9ICQodG1wQ2hpbGQpLmNoaWxkcmVuKFwiW2RhdGEtY29tcG9uZW50XVwiKVswXTtcclxuICAgICAgICAgICAgICAgIG9wdHMub3JpZyA9IHRtcENoaWxkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgkKHRtcENoaWxkKS5pcyhcIltkYXRhLWNvbXBvbmVudF1cIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5LnB1c2gob3B0cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9taXplUlFBKCkge1xyXG4gICAgICAgIHZhciBjdXJyZW50SW5kZXggPSB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGgsXHJcbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlLFxyXG4gICAgICAgICAgICByYW5kb21JbmRleDtcclxuICAgICAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxyXG4gICAgICAgIHdoaWxlIChjdXJyZW50SW5kZXggIT09IDApIHtcclxuICAgICAgICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50Li4uXHJcbiAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcclxuICAgICAgICAgICAgY3VycmVudEluZGV4IC09IDE7XHJcbiAgICAgICAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cclxuICAgICAgICAgICAgdGVtcG9yYXJ5VmFsdWUgPSB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVtjdXJyZW50SW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleFxyXG4gICAgICAgICAgICBdID0gdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbcmFuZG9tSW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVtyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcmVuZGVyVGltZWRRdWVzdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCA+PSB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgLy8gc29tZXRpbWVzIHRoZSB1c2VyIGNsaWNrcyBpbiB0aGUgZXZlbnQgYXJlYSBmb3IgdGhlIHFOdW1MaXN0XHJcbiAgICAgICAgICAgIC8vIEJ1dCBtaXNzZXMgYSBudW1iZXIgaW4gdGhhdCBjYXNlIHRoZSB0ZXh0IGlzIHRoZSBjb25jYXRlbmF0aW9uXHJcbiAgICAgICAgICAgIC8vIG9mIGFsbCB0aGUgbnVtYmVycyBpbiB0aGUgbGlzdCFcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjaGVjayB0aGUgcmVuZGVyZWRRdWVzdGlvbkFycmF5IHRvIHNlZSBpZiBpdCBoYXMgYmVlbiByZW5kZXJlZC5cclxuICAgICAgICBsZXQgb3B0cyA9IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W3RoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXhdO1xyXG4gICAgICAgIGxldCBjdXJyZW50UXVlc3Rpb247XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBvcHRzLnN0YXRlID09PSBcInByZXBhcmVkXCIgfHxcclxuICAgICAgICAgICAgb3B0cy5zdGF0ZSA9PT0gXCJmb3JyZXZpZXdcIiB8fFxyXG4gICAgICAgICAgICAob3B0cy5zdGF0ZSA9PT0gXCJicm9rZW5fZXhhbVwiICYmIG9wdHMuaW5pdEF0dGVtcHRzIDwgMylcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgbGV0IHRtcENoaWxkID0gb3B0cy5vcmlnO1xyXG4gICAgICAgICAgICBpZiAoJCh0bXBDaGlsZCkuaXMoXCJbZGF0YS1jb21wb25lbnQ9c2VsZWN0cXVlc3Rpb25dXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kb25lICYmIG9wdHMuc3RhdGUgPT0gXCJwcmVwYXJlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICBdLnN0YXRlID0gXCJleGFtX2VuZGVkXCI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNlbGVjdE9uZSBpcyBhc3luYyBhbmQgd2lsbCByZXBsYWNlIGl0c2VsZiBpbiB0aGlzIGFycmF5IHdpdGhcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYWN0dWFsIHNlbGVjdGVkIHF1ZXN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5ycWEgPSB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3cSA9IG5ldyBTZWxlY3RPbmUob3B0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiBuZXdxLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgbmV3cS5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRzLnN0YXRlID09IFwiYnJva2VuX2V4YW1cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBicm9rZW4gY2xhc3MgZnJvbSB0aGlzIHF1ZXN0aW9uIGlmIHdlIGdldCBoZXJlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdWwjcGFnZU51bXMgPiB1bCA+IGxpOmVxKCR7dGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleH0pYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5yZW1vdmVDbGFzcyhcImJyb2tlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5zdGF0ZSA9IFwiYnJva2VuX2V4YW1cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0gPSBvcHRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBFcnJvciBpbml0aWFsaXppbmcgcXVlc3Rpb246IERldGFpbHMgJHtlfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJCh0bXBDaGlsZCkuaXMoXCJbZGF0YS1jb21wb25lbnRdXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50S2luZCA9ICQodG1wQ2hpbGQpLmRhdGEoXCJjb21wb25lbnRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVt0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4XSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbjogd2luZG93LmNvbXBvbmVudF9mYWN0b3J5W2NvbXBvbmVudEtpbmRdKG9wdHMpLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAob3B0cy5zdGF0ZSA9PT0gXCJicm9rZW5fZXhhbVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN1cnJlbnRRdWVzdGlvbiA9IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W3RoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXhdXHJcbiAgICAgICAgICAgIC5xdWVzdGlvbjtcclxuICAgICAgICBpZiAob3B0cy5zdGF0ZSA9PT0gXCJmb3JyZXZpZXdcIikge1xyXG4gICAgICAgICAgICBhd2FpdCBjdXJyZW50UXVlc3Rpb24uY2hlY2tDdXJyZW50QW5zd2VyKCk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbi5yZW5kZXJGZWVkYmFjaygpO1xyXG4gICAgICAgICAgICBjdXJyZW50UXVlc3Rpb24uZGlzYWJsZUludGVyYWN0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMudmlzaXRlZC5pbmNsdWRlcyh0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4KSkge1xyXG4gICAgICAgICAgICB0aGlzLnZpc2l0ZWQucHVzaCh0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4KTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpdGVkLmxlbmd0aCA9PT0gdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICAhdGhpcy5kb25lXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzLmZpbmlzaEJ1dHRvbikuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY3VycmVudFF1ZXN0aW9uLmNvbnRhaW5lckRpdikge1xyXG4gICAgICAgICAgICAkKHRoaXMuc3dpdGNoRGl2KS5yZXBsYWNlV2l0aChjdXJyZW50UXVlc3Rpb24uY29udGFpbmVyRGl2KTtcclxuICAgICAgICAgICAgdGhpcy5zd2l0Y2hEaXYgPSBjdXJyZW50UXVlc3Rpb24uY29udGFpbmVyRGl2O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIHRpbWVkIGNvbXBvbmVudCBoYXMgbGlzdGVuZXJzLCB0aG9zZSBtaWdodCBuZWVkIHRvIGJlIHJlaW5pdGlhbGl6ZWRcclxuICAgICAgICAvLyBUaGlzIGZsYWcgd2lsbCBvbmx5IGJlIHNldCBpbiB0aGUgZWxlbWVudHMgdGhhdCBuZWVkIGl0LS1pdCB3aWxsIGJlIHVuZGVmaW5lZCBpbiB0aGUgb3RoZXJzIGFuZCB0aHVzIGV2YWx1YXRlIHRvIGZhbHNlXHJcbiAgICAgICAgaWYgKGN1cnJlbnRRdWVzdGlvbi5uZWVkc1JlaW5pdGlhbGl6YXRpb24pIHtcclxuICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uLnJlaW5pdGlhbGl6ZUxpc3RlbmVycyh0aGlzLnRha2VuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgID09PSBUaW1lciBhbmQgY29udHJvbCBGdW5jdGlvbnMgPT09XHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgaGFuZGxlUHJldkFzc2Vzc21lbnQoKSB7XHJcbiAgICAgICAgJCh0aGlzLnN0YXJ0QnRuKS5oaWRlKCk7XHJcbiAgICAgICAgJCh0aGlzLnBhdXNlQnRuKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgJCh0aGlzLmZpbmlzaEJ1dHRvbikuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IDA7XHJcbiAgICAgICAgdGhpcy5kb25lID0gMTtcclxuICAgICAgICAvLyBzaG93RmVlZGJhY2sgc2FuZCBzaG93UmVzdWx0cyBzaG91bGQgYm90aCBiZSB0cnVlIGJlZm9yZSB3ZSBzaG93IHRoZVxyXG4gICAgICAgIC8vIHF1ZXN0aW9ucyBhbmQgdGhlaXIgc3RhdGUgb2YgY29ycmVjdG5lc3MuXHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd1Jlc3VsdHMgJiYgdGhpcy5zaG93RmVlZGJhY2spIHtcclxuICAgICAgICAgICAgJCh0aGlzLnRpbWVkRGl2KS5zaG93KCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdG9yZUFuc3dlcmVkUXVlc3Rpb25zKCk7IC8vIGRvIG5vdCBsb2cgdGhlc2UgcmVzdWx0c1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcy5wYXVzZUJ0bikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKHRoaXMudGltZXJDb250YWluZXIpLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGFydEFzc2Vzc21lbnQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRha2VuKSB7XHJcbiAgICAgICAgICAgICQoXCIjcmVsYXRpb25zLW5leHRcIikuaGlkZSgpOyAvLyBoaWRlIHRoZSBuZXh0IHBhZ2UgYnV0dG9uIGZvciBub3dcclxuICAgICAgICAgICAgJChcIiNyZWxhdGlvbnMtcHJldlwiKS5oaWRlKCk7IC8vIGhpZGUgdGhlIHByZXZpb3VzIGJ1dHRvbiBmb3Igbm93XHJcbiAgICAgICAgICAgICQodGhpcy5zdGFydEJ0bikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKHRoaXMucGF1c2VCdG4pLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJ1bm5pbmcgPT09IDAgJiYgdGhpcy5wYXVzZWQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucnVubmluZyA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgICQodGhpcy50aW1lZERpdikuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nQm9va0V2ZW50KHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudDogXCJ0aW1lZEV4YW1cIixcclxuICAgICAgICAgICAgICAgICAgICBhY3Q6IFwic3RhcnRcIixcclxuICAgICAgICAgICAgICAgICAgICBkaXZfaWQ6IHRoaXMuZGl2aWQsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHZhciB0aW1lU3RhbXAgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0b3JhZ2VPYmogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5zd2VyOiBbMCwgMCwgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoLCAwXSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVTdGFtcCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZUtleSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VPYmopXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQod2luZG93KS5vbihcclxuICAgICAgICAgICAgICAgIFwiYmVmb3JldW5sb2FkXCIsXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGFjdHVhbCB2YWx1ZSBnZXRzIGlnbm9yZWQgYnkgbmV3ZXIgYnJvd3NlcnNcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kb25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGxlYXZlPyAgWW91ciB3b3JrIHdpbGwgYmUgbG9zdCEgQW5kIHlvdSB3aWxsIG5lZWQgeW91ciBpbnN0cnVjdG9yIHRvIHJlc2V0IHRoZSBleGFtIVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBsZWF2ZT8gIFlvdXIgd29yayB3aWxsIGJlIGxvc3QhXCI7XHJcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICBcInBhZ2VoaWRlXCIsXHJcbiAgICAgICAgICAgICAgICBhc3luYyBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZpbmlzaEFzc2Vzc21lbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFeGFtIGV4aXRlZCBieSBsZWF2aW5nIHBhZ2VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVQcmV2QXNzZXNzbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHBhdXNlQXNzZXNzbWVudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5kb25lID09PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJ1bm5pbmcgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nQm9va0V2ZW50KHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudDogXCJ0aW1lZEV4YW1cIixcclxuICAgICAgICAgICAgICAgICAgICBhY3Q6IFwicGF1c2VcIixcclxuICAgICAgICAgICAgICAgICAgICBkaXZfaWQ6IHRoaXMuZGl2aWQsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucnVubmluZyA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlZCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlQnRuLmlubmVySFRNTCA9IFwiUmVzdW1lXCI7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMudGltZWREaXYpLmhpZGUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nQm9va0V2ZW50KHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudDogXCJ0aW1lZEV4YW1cIixcclxuICAgICAgICAgICAgICAgICAgICBhY3Q6IFwicmVzdW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGl2X2lkOiB0aGlzLmRpdmlkLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VCdG4uaW5uZXJIVE1MID0gXCJQYXVzZVwiO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzLnRpbWVkRGl2KS5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1RpbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd1RpbWVyKSB7XHJcbiAgICAgICAgICAgIHZhciBtaW5zID0gTWF0aC5mbG9vcih0aGlzLnRpbWVMaW1pdCAvIDYwKTtcclxuICAgICAgICAgICAgdmFyIHNlY3MgPSBNYXRoLmZsb29yKHRoaXMudGltZUxpbWl0KSAlIDYwO1xyXG4gICAgICAgICAgICB2YXIgbWluc1N0cmluZyA9IG1pbnM7XHJcbiAgICAgICAgICAgIHZhciBzZWNzU3RyaW5nID0gc2VjcztcclxuICAgICAgICAgICAgaWYgKG1pbnMgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgbWluc1N0cmluZyA9IFwiMFwiICsgbWlucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VjcyA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICBzZWNzU3RyaW5nID0gXCIwXCIgKyBzZWNzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBiZWdpbm5pbmcgPSBcIlRpbWUgUmVtYWluaW5nICAgIFwiO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubGltaXRlZFRpbWUpIHtcclxuICAgICAgICAgICAgICAgIGJlZ2lubmluZyA9IFwiVGltZSBUYWtlbiAgICBcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdGltZVN0cmluZyA9IGJlZ2lubmluZyArIG1pbnNTdHJpbmcgKyBcIjpcIiArIHNlY3NTdHJpbmc7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRvbmUgfHwgdGhpcy50YWtlbikge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRoaXMudGltZVRha2VuIC8gNjApO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKHRoaXMudGltZVRha2VuICUgNjApO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1pbnV0ZXMgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBcIjBcIiArIG1pbnV0ZXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2Vjb25kcyA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kcyA9IFwiMFwiICsgc2Vjb25kcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRpbWVTdHJpbmcgPSBcIlRpbWUgdGFrZW46IFwiICsgbWludXRlcyArIFwiOlwiICsgc2Vjb25kcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRpbWVyQ29udGFpbmVyLmlubmVySFRNTCA9IHRpbWVTdHJpbmc7XHJcbiAgICAgICAgICAgIHZhciB0aW1lVGlwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0aW1lVGlwXCIpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSB0aW1lVGlwcy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRpbWVUaXBzW2ldLnRpdGxlID0gdGltZVN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcy50aW1lckNvbnRhaW5lcikuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbmNyZW1lbnQoKSB7XHJcbiAgICAgICAgLy8gaWYgcnVubmluZyAobm90IHBhdXNlZCkgYW5kIG5vdCB0YWtlblxyXG4gICAgICAgIGlmICh0aGlzLnJ1bm5pbmcgPT09IDEgJiYgIXRoaXMudGFrZW4pIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIGEgYnJvd3NlciBsb3NlcyBmb2N1cywgc2V0VGltZW91dCBtYXkgbm90IGJlIGNhbGxlZCBvbiB0aGVcclxuICAgICAgICAgICAgICAgICAgICAvLyBzY2hlZHVsZSBleHBlY3RlZC4gIEJyb3dzZXJzIGFyZSBmcmVlIHRvIHNhdmUgcG93ZXIgYnkgbGVuZ3RoZW5pbmdcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgaW50ZXJ2YWwgdG8gc29tZSBsb25nZXIgdGltZS4gIFNvIHdlIGNhbm5vdCBqdXN0IHN1YnRyYWN0IDFcclxuICAgICAgICAgICAgICAgICAgICAvLyBmcm9tIHRoZSB0aW1lTGltaXQgd2UgbmVlZCB0byBtZWFzdXJlIHRoZSBlbGFwc2VkIHRpbWUgZnJvbSB0aGUgbGFzdFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGwgdG8gdGhlIGN1cnJlbnQgY2FsbCBhbmQgc3VidHJhY3QgdGhhdCBudW1iZXIgb2Ygc2Vjb25kcy5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpbWl0ZWRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSB0aW1lIGxpbWl0LCBjb3VudCBkb3duIHRvIDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lTGltaXQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lTGltaXQgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcigoY3VycmVudFRpbWUgLSB0aGlzLmxhc3RUaW1lKSAvIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVsc2UgY291bnQgdXAgdG8ga2VlcCB0cmFjayBvZiBob3cgbG9uZyBpdCB0b29rIHRvIGNvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZUxpbWl0ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZUxpbWl0ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoKGN1cnJlbnRUaW1lIC0gdGhpcy5sYXN0VGltZSkgLyAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IGN1cnJlbnRUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlQm9va0NvbmZpZy5lbWFpbCArIFwiOlwiICsgdGhpcy5kaXZpZCArIFwiLXRpbWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lTGltaXRcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RpbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aW1lTGltaXQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJhbiBvdXQgb2YgdGltZVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcy5zdGFydEJ0bikuYXR0cih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogXCJ0cnVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMuZmluaXNoQnV0dG9uKS5hdHRyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBcInRydWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucnVubmluZyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9uZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy50YWtlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWtlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbWJlZCB0aGUgbWVzc2FnZSBpbiB0aGUgcGFnZSAtLSBhbiBhbGVydCBhY3R1YWxseSBwcmV2ZW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGFuc3dlcnMgZnJvbSBiZWluZyBzdWJtaXR0ZWQgYW5kIGlmIGEgc3R1ZGVudCBjbG9zZXMgdGhlaXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxhcHRvcCB0aGVuIHRoZSBhbnN3ZXJzIHdpbGwgbm90IGJlIHN1Ym1pdHRlZCBldmVyISAgRXZlbiB3aGVuIHRoZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlb3BlbiB0aGUgbGFwdG9wIHRoZWlyIHNlc3Npb24gY29va2llIGlzIGxpa2VseSBpbnZhbGlkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzLmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTb3JyeSBidXQgeW91IHJhbiBvdXQgb2YgdGltZS4gWW91ciBhbnN3ZXJzIGFyZSBiZWluZyBzdWJtaXR0ZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbERpdi5hcHBlbmRDaGlsZChtZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoQXNzZXNzbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgMTAwMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdHlsZUV4YW1FbGVtZW50cygpIHtcclxuICAgICAgICAvLyBDaGVja3MgaWYgdGhpcyBleGFtIGhhcyBiZWVuIHRha2VuIGJlZm9yZVxyXG4gICAgICAgICQodGhpcy50aW1lckNvbnRhaW5lcikuY3NzKHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcclxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiI0RGRjBEOFwiLFxyXG4gICAgICAgICAgICBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjREZGMEQ4XCIsXHJcbiAgICAgICAgICAgIFwiYm9yZGVyLXJhZGl1c1wiOiBcIjI1cHhcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKHRoaXMuc2NvcmVEaXYpLmNzcyh7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMCBhdXRvXCIsXHJcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNERkYwRDhcIixcclxuICAgICAgICAgICAgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgI0RGRjBEOFwiLFxyXG4gICAgICAgICAgICBcImJvcmRlci1yYWRpdXNcIjogXCIyNXB4XCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChcIi50b29sdGlwVGltZVwiKS5jc3Moe1xyXG4gICAgICAgICAgICBtYXJnaW46IFwiMFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjBcIixcclxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiYmxhY2tcIixcclxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmaW5pc2hBc3Nlc3NtZW50KCkge1xyXG4gICAgICAgICQoXCIjcmVsYXRpb25zLW5leHRcIikuc2hvdygpOyAvLyBzaG93IHRoZSBuZXh0IHBhZ2UgYnV0dG9uIGZvciBub3dcclxuICAgICAgICAkKFwiI3JlbGF0aW9ucy1wcmV2XCIpLnNob3coKTsgLy8gc2hvdyB0aGUgcHJldmlvdXMgYnV0dG9uIGZvciBub3dcclxuICAgICAgICBpZiAoIXRoaXMuc2hvd0ZlZWRiYWNrKSB7XHJcbiAgICAgICAgICAgIC8vIGJqZSAtIGNoYW5nZWQgZnJvbSBzaG93UmVzdWx0c1xyXG4gICAgICAgICAgICAkKHRoaXMudGltZWREaXYpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCh0aGlzLnBhdXNlQnRuKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQodGhpcy50aW1lckNvbnRhaW5lcikuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpbmRUaW1lVGFrZW4oKTtcclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSAwO1xyXG4gICAgICAgIHRoaXMuZG9uZSA9IDE7XHJcbiAgICAgICAgdGhpcy50YWtlbiA9IDE7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5maW5hbGl6ZVByb2JsZW1zKCk7XHJcbiAgICAgICAgdGhpcy5jaGVja1Njb3JlKCk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5U2NvcmUoKTtcclxuICAgICAgICB0aGlzLnN0b3JlU2NvcmUoKTtcclxuICAgICAgICB0aGlzLmxvZ1Njb3JlKCk7XHJcbiAgICAgICAgJCh0aGlzLnBhdXNlQnRuKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5maW5pc2hCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICQod2luZG93KS5vZmYoXCJiZWZvcmV1bmxvYWRcIik7XHJcbiAgICAgICAgLy8gdHVybiBvZmYgdGhlIHBhZ2VoaWRlIGxpc3RlbmVyXHJcbiAgICAgICAgbGV0IGFzc2lnbm1lbnRfaWQgPSB0aGlzLmRpdmlkO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBqUXVlcnkuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGVCb29rQ29uZmlnLmFwcCArIFwiL2Fzc2lnbm1lbnRzL3N0dWRlbnRfYXV0b2dyYWRlXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcIkpTT05cIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50X2lkOiBhc3NpZ25tZW50X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzX3RpbWVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldGRhdGEuc3VjY2VzcyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXRkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0b2dyYWRlciBjb21wbGV0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZmluYWxpemVQcm9ibGVtc1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgYXN5bmMgZmluYWxpemVQcm9ibGVtcygpIHtcclxuICAgICAgICAvLyBCZWNhdXNlIHdlIGhhdmUgc3VibWl0dGVkIGVhY2ggcXVlc3Rpb24gYXMgd2UgbmF2aWdhdGUgd2Ugb25seSBuZWVkIHRvXHJcbiAgICAgICAgLy8gc2VuZCB0aGUgZmluYWwgdmVyc2lvbiBvZiB0aGUgcXVlc3Rpb24gdGhlIHN0dWRlbnQgaXMgb24gd2hlbiB0aGV5IHByZXNzIHRoZVxyXG4gICAgICAgIC8vIGZpbmlzaCBleGFtIGJ1dHRvbi5cclxuXHJcbiAgICAgICAgdmFyIGN1cnJlbnRRdWVzdGlvbiA9IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4XHJcbiAgICAgICAgXS5xdWVzdGlvbjtcclxuICAgICAgICBhd2FpdCBjdXJyZW50UXVlc3Rpb24uY2hlY2tDdXJyZW50QW5zd2VyKCk7XHJcbiAgICAgICAgY3VycmVudFF1ZXN0aW9uLmxvZ0N1cnJlbnRBbnN3ZXIoKTtcclxuICAgICAgICBjdXJyZW50UXVlc3Rpb24ucmVuZGVyRmVlZGJhY2soKTtcclxuICAgICAgICBjdXJyZW50UXVlc3Rpb24uZGlzYWJsZUludGVyYWN0aW9uKCk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRRdWVzdGlvbiA9IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W2ldO1xyXG4gICAgICAgICAgICAvLyBzZXQgdGhlIHN0YXRlIHRvIGZvcnJldmlldyBzbyB3ZSBrbm93IHRoYXQgZmVlZGJhY2sgbWF5IGJlIGFwcHJvcHJpYXRlXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVlc3Rpb24uc3RhdGUgIT09IFwiYnJva2VuX2V4YW1cIikge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uLnN0YXRlID0gXCJmb3JyZXZpZXdcIjtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbi5xdWVzdGlvbi5kaXNhYmxlSW50ZXJhY3Rpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnNob3dGZWVkYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVUaW1lZEZlZWRiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlc3RvcmVBbnN3ZXJlZFF1ZXN0aW9uc1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICByZXN0b3JlQW5zd2VyZWRRdWVzdGlvbnMoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFF1ZXN0aW9uID0gdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbaV07XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVlc3Rpb24uc3RhdGUgPT09IFwicHJlcGFyZWRcIikge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uLnN0YXRlID0gXCJmb3JyZXZpZXdcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBoaWRlVGltZWRGZWVkYmFja1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGhpZGVUaW1lZEZlZWRiYWNrKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRRdWVzdGlvbiA9IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W2ldLnF1ZXN0aW9uO1xyXG4gICAgICAgICAgICBjdXJyZW50UXVlc3Rpb24uaGlkZUZlZWRiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoZWNrU2NvcmVcclxuICAgIC8vIC0tLS0tLS0tLS1cclxuICAgIC8vIFRoaXMgaXMgYSBzaW1wbGUgYWxsIG9yIG5vdGhpbmcgc2NvcmUgb2Ygb25lIHBvaW50IHBlciBxdWVzdGlvbiBmb3JcclxuICAgIC8vIHRoYXQgaW5jbHVkZXMgb3VyIGJlc3QgZ3Vlc3MgaWYgYSBxdWVzdGlvbiB3YXMgc2tpcHBlZC5cclxuICAgIGNoZWNrU2NvcmUoKSB7XHJcbiAgICAgICAgdGhpcy5jb3JyZWN0U3RyID0gXCJcIjtcclxuICAgICAgICB0aGlzLnNraXBwZWRTdHIgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuaW5jb3JyZWN0U3RyID0gXCJcIjtcclxuICAgICAgICAvLyBHZXRzIHRoZSBzY29yZSBvZiBlYWNoIHByb2JsZW1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjb3JyZWN0ID0gdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbXHJcbiAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgIF0ucXVlc3Rpb24uY2hlY2tDb3JyZWN0VGltZWQoKTtcclxuICAgICAgICAgICAgaWYgKGNvcnJlY3QgPT0gXCJUXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUrKztcclxuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdFN0ciA9IHRoaXMuY29ycmVjdFN0ciArIChpICsgMSkgKyBcIiwgXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29ycmVjdCA9PSBcIkZcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmNvcnJlY3QrKztcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5jb3JyZWN0U3RyID0gdGhpcy5pbmNvcnJlY3RTdHIgKyAoaSArIDEpICsgXCIsIFwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvcnJlY3QgPT09IG51bGwgfHwgY29ycmVjdCA9PT0gXCJJXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2tpcHBlZCsrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5za2lwcGVkU3RyID0gdGhpcy5za2lwcGVkU3RyICsgKGkgKyAxKSArIFwiLCBcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGlnbm9yZWQgcXVlc3Rpb247IGp1c3QgZG8gbm90aGluZ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlbW92ZSBleHRyYSBjb21tYSBhbmQgc3BhY2UgYXQgZW5kIGlmIGFueVxyXG4gICAgICAgIGlmICh0aGlzLmNvcnJlY3RTdHIubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgdGhpcy5jb3JyZWN0U3RyID0gdGhpcy5jb3JyZWN0U3RyLnN1YnN0cmluZyhcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RTdHIubGVuZ3RoIC0gMlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGVsc2UgdGhpcy5jb3JyZWN0U3RyID0gXCJOb25lXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuc2tpcHBlZFN0ci5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICB0aGlzLnNraXBwZWRTdHIgPSB0aGlzLnNraXBwZWRTdHIuc3Vic3RyaW5nKFxyXG4gICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgIHRoaXMuc2tpcHBlZFN0ci5sZW5ndGggLSAyXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgZWxzZSB0aGlzLnNraXBwZWRTdHIgPSBcIk5vbmVcIjtcclxuICAgICAgICBpZiAodGhpcy5pbmNvcnJlY3RTdHIubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgdGhpcy5pbmNvcnJlY3RTdHIgPSB0aGlzLmluY29ycmVjdFN0ci5zdWJzdHJpbmcoXHJcbiAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmNvcnJlY3RTdHIubGVuZ3RoIC0gMlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGVsc2UgdGhpcy5pbmNvcnJlY3RTdHIgPSBcIk5vbmVcIjtcclxuICAgIH1cclxuICAgIGZpbmRUaW1lVGFrZW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGltaXRlZFRpbWUpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lVGFrZW4gPSB0aGlzLnN0YXJ0aW5nVGltZSAtIHRoaXMudGltZUxpbWl0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZVRha2VuID0gdGhpcy50aW1lTGltaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RvcmVTY29yZSgpIHtcclxuICAgICAgICB2YXIgc3RvcmFnZV9hcnIgPSBbXTtcclxuICAgICAgICBzdG9yYWdlX2Fyci5wdXNoKFxyXG4gICAgICAgICAgICB0aGlzLnNjb3JlLFxyXG4gICAgICAgICAgICB0aGlzLmNvcnJlY3RTdHIsXHJcbiAgICAgICAgICAgIHRoaXMuaW5jb3JyZWN0LFxyXG4gICAgICAgICAgICB0aGlzLmluY29ycmVjdFN0cixcclxuICAgICAgICAgICAgdGhpcy5za2lwcGVkLFxyXG4gICAgICAgICAgICB0aGlzLnNraXBwZWRTdHIsXHJcbiAgICAgICAgICAgIHRoaXMudGltZVRha2VuXHJcbiAgICAgICAgKTtcclxuICAgICAgICB2YXIgdGltZVN0YW1wID0gbmV3IERhdGUoKTtcclxuICAgICAgICB2YXIgc3RvcmFnZU9iaiA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgYW5zd2VyOiBzdG9yYWdlX2FycixcclxuICAgICAgICAgICAgdGltZXN0YW1wOiB0aW1lU3RhbXAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSwgc3RvcmFnZU9iaik7XHJcbiAgICB9XHJcbiAgICBsb2dTY29yZSgpIHtcclxuICAgICAgICB0aGlzLmxvZ0Jvb2tFdmVudCh7XHJcbiAgICAgICAgICAgIGV2ZW50OiBcInRpbWVkRXhhbVwiLFxyXG4gICAgICAgICAgICBhY3Q6IFwiZmluaXNoXCIsXHJcbiAgICAgICAgICAgIGRpdl9pZDogdGhpcy5kaXZpZCxcclxuICAgICAgICAgICAgY29ycmVjdDogdGhpcy5zY29yZSxcclxuICAgICAgICAgICAgaW5jb3JyZWN0OiB0aGlzLmluY29ycmVjdCxcclxuICAgICAgICAgICAgc2tpcHBlZDogdGhpcy5za2lwcGVkLFxyXG4gICAgICAgICAgICB0aW1lOiB0aGlzLnRpbWVUYWtlbixcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNob3VsZFVzZVNlcnZlcihkYXRhKSB7XHJcbiAgICAgICAgLy8gV2Ugb3ZlcnJpZGUgdGhlIFJ1bmVzdG9uZUJhc2UgdmVyc2lvbiBiZWNhdXNlIHRoZXJlIGlzIG5vIFwiY29ycmVjdFwiIGF0dHJpYnV0ZSwgYW5kIHRoZXJlIGFyZSAyIHBvc3NpYmxlIGxvY2FsU3RvcmFnZSBzY2hlbWFzXHJcbiAgICAgICAgLy8gLS13ZSBhbHNvIHdhbnQgdG8gZGVmYXVsdCB0byBsb2NhbCBzdG9yYWdlIGJlY2F1c2UgaXQgY29udGFpbnMgbW9yZSBpbmZvcm1hdGlvbiBzcGVjaWZpY2FsbHkgd2hpY2ggcXVlc3Rpb25zIGFyZSBjb3JyZWN0LCBpbmNvcnJlY3QsIGFuZCBza2lwcGVkLlxyXG4gICAgICAgIHZhciBzdG9yYWdlRGF0ZTtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgdmFyIHN0b3JhZ2VPYmogPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSgpKTtcclxuICAgICAgICBpZiAoc3RvcmFnZU9iaiA9PT0gbnVsbCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIHN0b3JlZERhdGEgPSBKU09OLnBhcnNlKHN0b3JhZ2VPYmopLmFuc3dlcjtcclxuICAgICAgICAgICAgaWYgKHN0b3JlZERhdGEubGVuZ3RoID09IDQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmNvcnJlY3QgPT0gc3RvcmVkRGF0YVswXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuaW5jb3JyZWN0ID09IHN0b3JlZERhdGFbMV0gJiZcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnNraXBwZWQgPT0gc3RvcmVkRGF0YVsyXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEudGltZVRha2VuID09IHN0b3JlZERhdGFbM11cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzdG9yZWREYXRhLmxlbmd0aCA9PSA3KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5jb3JyZWN0ID09IHN0b3JlZERhdGFbMF0gJiZcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmluY29ycmVjdCA9PSBzdG9yZWREYXRhWzJdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5za2lwcGVkID09IHN0b3JlZERhdGFbNF0gJiZcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnRpbWVUYWtlbiA9PSBzdG9yZWREYXRhWzZdXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIEluIHRoaXMgY2FzZSwgYmVjYXVzZSBsb2NhbCBzdG9yYWdlIGhhcyBtb3JlIGluZm8sIHdlIHdhbnQgdG8gdXNlIHRoYXQgaWYgaXQncyBjb25zaXN0ZW50XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RvcmFnZURhdGUgPSBuZXcgRGF0ZShKU09OLnBhcnNlKHN0b3JhZ2VPYmpbMV0pLnRpbWVzdGFtcCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIC8vIGVycm9yIHdoaWxlIHBhcnNpbmc7IGxpa2VseSBkdWUgdG8gYmFkIHZhbHVlIHN0b3JlZCBpbiBzdG9yYWdlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2VydmVyRGF0ZSA9IG5ldyBEYXRlKGRhdGEudGltZXN0YW1wKTtcclxuICAgICAgICBpZiAoc2VydmVyRGF0ZSA8IHN0b3JhZ2VEYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nU2NvcmUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0xvY2FsU3RvcmFnZSgpIHtcclxuICAgICAgICB2YXIgbGVuID0gbG9jYWxTdG9yYWdlLmxlbmd0aDtcclxuICAgICAgICBpZiAobGVuID4gMCkge1xyXG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFrZW4gPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0b3JlQW5zd2VycyhcIlwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFrZW4gPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50YWtlbiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgcmVzdG9yZUFuc3dlcnMoZGF0YSkge1xyXG4gICAgICAgIHRoaXMudGFrZW4gPSAxO1xyXG4gICAgICAgIHZhciB0bXBBcnI7XHJcbiAgICAgICAgaWYgKGRhdGEgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRtcEFyciA9IEpTT04ucGFyc2UoXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSlcclxuICAgICAgICAgICAgICAgICkuYW5zd2VyO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIC8vIGVycm9yIHdoaWxlIHBhcnNpbmc7IGxpa2VseSBkdWUgdG8gYmFkIHZhbHVlIHN0b3JlZCBpbiBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSgpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFrZW4gPSAwO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gUGFyc2UgcmVzdWx0cyBmcm9tIHRoZSBkYXRhYmFzZVxyXG4gICAgICAgICAgICB0bXBBcnIgPSBbXHJcbiAgICAgICAgICAgICAgICBwYXJzZUludChkYXRhLmNvcnJlY3QpLFxyXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoZGF0YS5pbmNvcnJlY3QpLFxyXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoZGF0YS5za2lwcGVkKSxcclxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGRhdGEudGltZVRha2VuKSxcclxuICAgICAgICAgICAgICAgIGRhdGEucmVzZXQsXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxTdG9yYWdlKHRtcEFycik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0bXBBcnIubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgLy8gRXhhbSB3YXMgcHJldmlvdXNseSByZXNldFxyXG4gICAgICAgICAgICB0aGlzLnJlc2V0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy50YWtlbiA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRtcEFyci5sZW5ndGggPT0gNCkge1xyXG4gICAgICAgICAgICAvLyBBY2NpZGVudGFsIFJlbG9hZCBPUiBEYXRhYmFzZSBFbnRyeVxyXG4gICAgICAgICAgICB0aGlzLnNjb3JlID0gdG1wQXJyWzBdO1xyXG4gICAgICAgICAgICB0aGlzLmluY29ycmVjdCA9IHRtcEFyclsxXTtcclxuICAgICAgICAgICAgdGhpcy5za2lwcGVkID0gdG1wQXJyWzJdO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVUYWtlbiA9IHRtcEFyclszXTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRtcEFyci5sZW5ndGggPT0gNykge1xyXG4gICAgICAgICAgICAvLyBMb2FkZWQgQ29tcGxldGVkIEV4YW1cclxuICAgICAgICAgICAgdGhpcy5zY29yZSA9IHRtcEFyclswXTtcclxuICAgICAgICAgICAgdGhpcy5jb3JyZWN0U3RyID0gdG1wQXJyWzFdO1xyXG4gICAgICAgICAgICB0aGlzLmluY29ycmVjdCA9IHRtcEFyclsyXTtcclxuICAgICAgICAgICAgdGhpcy5pbmNvcnJlY3RTdHIgPSB0bXBBcnJbM107XHJcbiAgICAgICAgICAgIHRoaXMuc2tpcHBlZCA9IHRtcEFycls0XTtcclxuICAgICAgICAgICAgdGhpcy5za2lwcGVkU3RyID0gdG1wQXJyWzVdO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVUYWtlbiA9IHRtcEFycls2XTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBTZXQgbG9jYWxTdG9yYWdlIGluIGNhc2Ugb2YgXCJhY2NpZGVudGFsXCIgcmVsb2FkXHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmluY29ycmVjdCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc2tpcHBlZCA9IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5Lmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy50aW1lVGFrZW4gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy50YWtlbikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5za2lwcGVkID09PSB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ZlZWRiYWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVQcmV2QXNzZXNzbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCB0aGlzLnJlbmRlclRpbWVkUXVlc3Rpb24oKTtcclxuICAgICAgICB0aGlzLmRpc3BsYXlTY29yZSgpO1xyXG4gICAgICAgIHRoaXMuc2hvd1RpbWUoKTtcclxuICAgIH1cclxuICAgIHNldExvY2FsU3RvcmFnZShwYXJzZWREYXRhKSB7XHJcbiAgICAgICAgdmFyIHRpbWVTdGFtcCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdmFyIHN0b3JhZ2VPYmogPSB7XHJcbiAgICAgICAgICAgIGFuc3dlcjogcGFyc2VkRGF0YSxcclxuICAgICAgICAgICAgdGltZXN0YW1wOiB0aW1lU3RhbXAsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSxcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZU9iailcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheVNjb3JlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNob3dSZXN1bHRzKSB7XHJcbiAgICAgICAgICAgIHZhciBzY29yZVN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIHZhciBudW1RdWVzdGlvbnM7XHJcbiAgICAgICAgICAgIHZhciBwZXJjZW50Q29ycmVjdDtcclxuICAgICAgICAgICAgLy8gaWYgd2UgaGF2ZSBzb21lIGluZm9ybWF0aW9uXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdFN0ci5sZW5ndGggPiAwIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluY29ycmVjdFN0ci5sZW5ndGggPiAwIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNraXBwZWRTdHIubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHNjb3JlU3RyaW5nID0gYE51bSBDb3JyZWN0OiAke3RoaXMuc2NvcmV9LiBRdWVzdGlvbnM6ICR7dGhpcy5jb3JyZWN0U3RyfTxicj5OdW0gV3Jvbmc6ICR7dGhpcy5pbmNvcnJlY3R9LiBRdWVzdGlvbnM6ICR7dGhpcy5pbmNvcnJlY3RTdHJ9PGJyPk51bSBTa2lwcGVkOiAke3RoaXMuc2tpcHBlZH0uIFF1ZXN0aW9uczogJHt0aGlzLnNraXBwZWRTdHJ9PGJyPmA7XHJcbiAgICAgICAgICAgICAgICBudW1RdWVzdGlvbnMgPSB0aGlzLnNjb3JlICsgdGhpcy5pbmNvcnJlY3QgKyB0aGlzLnNraXBwZWQ7XHJcbiAgICAgICAgICAgICAgICBwZXJjZW50Q29ycmVjdCA9ICh0aGlzLnNjb3JlIC8gbnVtUXVlc3Rpb25zKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgIHNjb3JlU3RyaW5nICs9IFwiUGVyY2VudCBDb3JyZWN0OiBcIiArIHBlcmNlbnRDb3JyZWN0ICsgXCIlXCI7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMuc2NvcmVEaXYpLmh0bWwoc2NvcmVTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZURpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2NvcmVTdHJpbmcgPSBgTnVtIENvcnJlY3Q6ICR7dGhpcy5zY29yZX08YnI+TnVtIFdyb25nOiAke3RoaXMuaW5jb3JyZWN0fTxicj5OdW0gU2tpcHBlZDogJHt0aGlzLnNraXBwZWR9PGJyPmA7XHJcbiAgICAgICAgICAgICAgICBudW1RdWVzdGlvbnMgPSB0aGlzLnNjb3JlICsgdGhpcy5pbmNvcnJlY3QgKyB0aGlzLnNraXBwZWQ7XHJcbiAgICAgICAgICAgICAgICBwZXJjZW50Q29ycmVjdCA9ICh0aGlzLnNjb3JlIC8gbnVtUXVlc3Rpb25zKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgIHNjb3JlU3RyaW5nICs9IFwiUGVyY2VudCBDb3JyZWN0OiBcIiArIHBlcmNlbnRDb3JyZWN0ICsgXCIlXCI7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMuc2NvcmVEaXYpLmh0bWwoc2NvcmVTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZURpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0TnVtYmVyZWRMaXN0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzLnNjb3JlRGl2KS5odG1sKFxyXG4gICAgICAgICAgICAgICAgXCJUaGFuayB5b3UgZm9yIHRha2luZyB0aGUgZXhhbS4gIFlvdXIgYW5zd2VycyBoYXZlIGJlZW4gcmVjb3JkZWQuXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5zY29yZURpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhpZ2hsaWdodE51bWJlcmVkTGlzdCgpIHtcclxuICAgICAgICB2YXIgY29ycmVjdENvdW50ID0gdGhpcy5jb3JyZWN0U3RyO1xyXG4gICAgICAgIHZhciBpbmNvcnJlY3RDb3VudCA9IHRoaXMuaW5jb3JyZWN0U3RyO1xyXG4gICAgICAgIHZhciBza2lwcGVkQ291bnQgPSB0aGlzLnNraXBwZWRTdHI7XHJcbiAgICAgICAgY29ycmVjdENvdW50ID0gY29ycmVjdENvdW50LnJlcGxhY2UoLyAvZywgXCJcIikuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIGluY29ycmVjdENvdW50ID0gaW5jb3JyZWN0Q291bnQucmVwbGFjZSgvIC9nLCBcIlwiKS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgc2tpcHBlZENvdW50ID0gc2tpcHBlZENvdW50LnJlcGxhY2UoLyAvZywgXCJcIikuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbnVtYmVyZWRCdG5zID0gJChcInVsI3BhZ2VOdW1zID4gdWwgPiBsaVwiKTtcclxuICAgICAgICAgICAgaWYgKG51bWJlcmVkQnRucy5oYXNDbGFzcyhcImFuc3dlcmVkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBudW1iZXJlZEJ0bnMucmVtb3ZlQ2xhc3MoXCJhbnN3ZXJlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvcnJlY3RDb3VudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlc3QgPSBwYXJzZUludChjb3JyZWN0Q291bnRbaV0pIC0gMTtcclxuICAgICAgICAgICAgICAgIG51bWJlcmVkQnRuc1xyXG4gICAgICAgICAgICAgICAgICAgIC5lcShwYXJzZUludChjb3JyZWN0Q291bnRbaV0pIC0gMSlcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJjb3JyZWN0Q291bnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpbmNvcnJlY3RDb3VudC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyZWRCdG5zXHJcbiAgICAgICAgICAgICAgICAgICAgLmVxKHBhcnNlSW50KGluY29ycmVjdENvdW50W2pdKSAtIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiaW5jb3JyZWN0Q291bnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBza2lwcGVkQ291bnQubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgIG51bWJlcmVkQnRuc1xyXG4gICAgICAgICAgICAgICAgICAgIC5lcShwYXJzZUludChza2lwcGVkQ291bnRba10pIC0gMSlcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJza2lwcGVkQ291bnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PSBGdW5jdGlvbiB0aGF0IGNhbGxzIHRoZSBjb25zdHJ1Y3RvcnMgb24gcGFnZSBsb2FkID09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuJChkb2N1bWVudCkuYmluZChcInJ1bmVzdG9uZTpsb2dpbi1jb21wbGV0ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiW2RhdGEtY29tcG9uZW50PXRpbWVkQXNzZXNzbWVudF1cIikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICBUaW1lZExpc3RbdGhpcy5pZF0gPSBuZXcgVGltZWQoe1xyXG4gICAgICAgICAgICBvcmlnOiB0aGlzLFxyXG4gICAgICAgICAgICB1c2VSdW5lc3RvbmVTZXJ2aWNlczogZUJvb2tDb25maWcudXNlUnVuZXN0b25lU2VydmljZXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=