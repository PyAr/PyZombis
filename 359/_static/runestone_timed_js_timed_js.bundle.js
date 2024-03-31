(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_timed_js_timed_js"],{

/***/ 51954:
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./runestone/timed/css/timed.css ***!
  \*****************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/* TIMED ASSESSMENT BUTTON STYLES */\nul#pageNums,\nul#pageNums li {\n    text-align: center;\n    padding: 10px 0;\n}\n\n.pagination > li > a:hover {\n    background-color: #eee !important;\n    color: #000 !important;\n}\n\n.flagBtn { /* documentation */\n    background-color: #ED9C59 !important;\n    border: 3px solid #CE5718;\n    border-radius: 5px;\n    color: #030201 !important;\n    cursor: pointer;\n    width: 150;\n    height: 115;\n    text-align: center;\n    text-decoration: none;\n    display: ruby;\n    font-size: 15px;\n}\n\n/* The following override styles in Bootstrap distribution file (bootstrap.min.css) */\n\n.pagination > .active > a,\n.pagination > .active > span {\n    background-color: #428bca !important;\n    color: #ffffff !important;\n}\n\n.col-md-6-override {\n    text-align: center !important;\n    max-width: 100% !important;\n}\n\n/* end */\n\n.pagination > .answered > a,\n.pagination > .answered > span {\n    background-color: #eee;\n    color: #000;\n}\n\n.pagination > .broken > a,\n.pagination > .broken > span {\n    background-color: #f99;\n    color: #000;\n}\n\n.pagination > .toolate > a,\n.pagination > .toolate > span {\n    background-color: rgb(236, 203, 54);\n    color: #000;\n}\n\n.pagination > .flagcolor > a,\n.pagination > .flagcolor > span {\n    background-color: #ED9C59;\n    color: #000;\n}\n\np.examwarning {\n    width: 50%;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: rgba(243, 156, 156, 0.822);\n    border: solid black;\n    border-radius: 5px;\n    border-width: 2px;\n    padding: 5px;\n}\n\n.pagination > .correctCount > a,\n.pagination > .correctCount > span {\n    background-color: #dff0d8;\n    color: #000000;\n    border-color: #000000;\n}\n\n.pagination > .skippedCount > a,\n.pagination > .skippedCount > span {\n    background-color: #fcf8e3;\n    color: #000000;\n    border-color: #000000;\n}\n\n.pagination > .incorrectCount > a,\n.pagination > .incorrectCount > span {\n    background-color: #f2dede;\n    color: #000000;\n    border-color: #000000;\n}\n\n.switchcontainer {\n    height: 600px;\n    overflow: auto;\n}\n", "",{"version":3,"sources":["webpack://./runestone/timed/css/timed.css"],"names":[],"mappings":"AAAA,mCAAmC;AACnC;;IAEI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,iCAAiC;IACjC,sBAAsB;AAC1B;;AAEA,WAAW,kBAAkB;IACzB,oCAAoC;IACpC,yBAAyB;IACzB,kBAAkB;IAClB,yBAAyB;IACzB,eAAe;IACf,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,qBAAqB;IACrB,aAAa;IACb,eAAe;AACnB;;AAEA,qFAAqF;;AAErF;;IAEI,oCAAoC;IACpC,yBAAyB;AAC7B;;AAEA;IACI,6BAA6B;IAC7B,0BAA0B;AAC9B;;AAEA,QAAQ;;AAER;;IAEI,sBAAsB;IACtB,WAAW;AACf;;AAEA;;IAEI,sBAAsB;IACtB,WAAW;AACf;;AAEA;;IAEI,mCAAmC;IACnC,WAAW;AACf;;AAEA;;IAEI,yBAAyB;IACzB,WAAW;AACf;;AAEA;IACI,UAAU;IACV,iBAAiB;IACjB,kBAAkB;IAClB,4CAA4C;IAC5C,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;;IAEI,yBAAyB;IACzB,cAAc;IACd,qBAAqB;AACzB;;AAEA;;IAEI,yBAAyB;IACzB,cAAc;IACd,qBAAqB;AACzB;;AAEA;;IAEI,yBAAyB;IACzB,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,cAAc;AAClB","sourcesContent":["/* TIMED ASSESSMENT BUTTON STYLES */\nul#pageNums,\nul#pageNums li {\n    text-align: center;\n    padding: 10px 0;\n}\n\n.pagination > li > a:hover {\n    background-color: #eee !important;\n    color: #000 !important;\n}\n\n.flagBtn { /* documentation */\n    background-color: #ED9C59 !important;\n    border: 3px solid #CE5718;\n    border-radius: 5px;\n    color: #030201 !important;\n    cursor: pointer;\n    width: 150;\n    height: 115;\n    text-align: center;\n    text-decoration: none;\n    display: ruby;\n    font-size: 15px;\n}\n\n/* The following override styles in Bootstrap distribution file (bootstrap.min.css) */\n\n.pagination > .active > a,\n.pagination > .active > span {\n    background-color: #428bca !important;\n    color: #ffffff !important;\n}\n\n.col-md-6-override {\n    text-align: center !important;\n    max-width: 100% !important;\n}\n\n/* end */\n\n.pagination > .answered > a,\n.pagination > .answered > span {\n    background-color: #eee;\n    color: #000;\n}\n\n.pagination > .broken > a,\n.pagination > .broken > span {\n    background-color: #f99;\n    color: #000;\n}\n\n.pagination > .toolate > a,\n.pagination > .toolate > span {\n    background-color: rgb(236, 203, 54);\n    color: #000;\n}\n\n.pagination > .flagcolor > a,\n.pagination > .flagcolor > span {\n    background-color: #ED9C59;\n    color: #000;\n}\n\np.examwarning {\n    width: 50%;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: rgba(243, 156, 156, 0.822);\n    border: solid black;\n    border-radius: 5px;\n    border-width: 2px;\n    padding: 5px;\n}\n\n.pagination > .correctCount > a,\n.pagination > .correctCount > span {\n    background-color: #dff0d8;\n    color: #000000;\n    border-color: #000000;\n}\n\n.pagination > .skippedCount > a,\n.pagination > .skippedCount > span {\n    background-color: #fcf8e3;\n    color: #000000;\n    border-color: #000000;\n}\n\n.pagination > .incorrectCount > a,\n.pagination > .incorrectCount > span {\n    background-color: #f2dede;\n    color: #000000;\n    border-color: #000000;\n}\n\n.switchcontainer {\n    height: 600px;\n    overflow: auto;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 50278:
/*!***************************************!*\
  !*** ./runestone/timed/css/timed.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_timed_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./timed.css */ 51954);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_timed_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_timed_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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
/* harmony import */ var _css_timed_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/timed.css */ 50278);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3RpbWVkL2Nzcy90aW1lZC5jc3MiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS90aW1lZC9jc3MvdGltZWQuY3NzPzYxOWQiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS90aW1lZC9qcy90aW1lZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSw4R0FBOEcseUJBQXlCLHNCQUFzQixHQUFHLGdDQUFnQyx3Q0FBd0MsNkJBQTZCLEdBQUcsY0FBYywrREFBK0QsZ0NBQWdDLHlCQUF5QixnQ0FBZ0Msc0JBQXNCLGlCQUFpQixrQkFBa0IseUJBQXlCLDRCQUE0QixvQkFBb0Isc0JBQXNCLEdBQUcsd0pBQXdKLDJDQUEyQyxnQ0FBZ0MsR0FBRyx3QkFBd0Isb0NBQW9DLGlDQUFpQyxHQUFHLCtFQUErRSw2QkFBNkIsa0JBQWtCLEdBQUcsOERBQThELDZCQUE2QixrQkFBa0IsR0FBRyxnRUFBZ0UsMENBQTBDLGtCQUFrQixHQUFHLG9FQUFvRSxnQ0FBZ0Msa0JBQWtCLEdBQUcsbUJBQW1CLGlCQUFpQix3QkFBd0IseUJBQXlCLG1EQUFtRCwwQkFBMEIseUJBQXlCLHdCQUF3QixtQkFBbUIsR0FBRywwRUFBMEUsZ0NBQWdDLHFCQUFxQiw0QkFBNEIsR0FBRywwRUFBMEUsZ0NBQWdDLHFCQUFxQiw0QkFBNEIsR0FBRyw4RUFBOEUsZ0NBQWdDLHFCQUFxQiw0QkFBNEIsR0FBRyxzQkFBc0Isb0JBQW9CLHFCQUFxQixHQUFHLFNBQVMsdUdBQXVHLE9BQU8sWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxpQkFBaUIsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxV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QUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQyIsImZpbGUiOiJydW5lc3RvbmVfdGltZWRfanNfdGltZWRfanMuYnVuZGxlLmpzP3Y9MzBjNGY2ZTZiZDdhZGVjNTk2MTQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFRJTUVEIEFTU0VTU01FTlQgQlVUVE9OIFNUWUxFUyAqL1xcbnVsI3BhZ2VOdW1zLFxcbnVsI3BhZ2VOdW1zIGxpIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxufVxcblxcbi5wYWdpbmF0aW9uID4gbGkgPiBhOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZSAhaW1wb3J0YW50O1xcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZmxhZ0J0biB7IC8qIGRvY3VtZW50YXRpb24gKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VEOUM1OSAhaW1wb3J0YW50O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjQ0U1NzE4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiAjMDMwMjAxICFpbXBvcnRhbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDE1MDtcXG4gICAgaGVpZ2h0OiAxMTU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBkaXNwbGF5OiBydWJ5O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi8qIFRoZSBmb2xsb3dpbmcgb3ZlcnJpZGUgc3R5bGVzIGluIEJvb3RzdHJhcCBkaXN0cmlidXRpb24gZmlsZSAoYm9vdHN0cmFwLm1pbi5jc3MpICovXFxuXFxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYSxcXG4ucGFnaW5hdGlvbiA+IC5hY3RpdmUgPiBzcGFuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyOGJjYSAhaW1wb3J0YW50O1xcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY29sLW1kLTYtb3ZlcnJpZGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIGVuZCAqL1xcblxcbi5wYWdpbmF0aW9uID4gLmFuc3dlcmVkID4gYSxcXG4ucGFnaW5hdGlvbiA+IC5hbnN3ZXJlZCA+IHNwYW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLnBhZ2luYXRpb24gPiAuYnJva2VuID4gYSxcXG4ucGFnaW5hdGlvbiA+IC5icm9rZW4gPiBzcGFuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5OTtcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5wYWdpbmF0aW9uID4gLnRvb2xhdGUgPiBhLFxcbi5wYWdpbmF0aW9uID4gLnRvb2xhdGUgPiBzcGFuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjAzLCA1NCk7XFxuICAgIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ucGFnaW5hdGlvbiA+IC5mbGFnY29sb3IgPiBhLFxcbi5wYWdpbmF0aW9uID4gLmZsYWdjb2xvciA+IHNwYW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUQ5QzU5O1xcbiAgICBjb2xvcjogIzAwMDtcXG59XFxuXFxucC5leGFtd2FybmluZyB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAxNTYsIDE1NiwgMC44MjIpO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wYWdpbmF0aW9uID4gLmNvcnJlY3RDb3VudCA+IGEsXFxuLnBhZ2luYXRpb24gPiAuY29ycmVjdENvdW50ID4gc3BhbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmYwZDg7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICBib3JkZXItY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbi5wYWdpbmF0aW9uID4gLnNraXBwZWRDb3VudCA+IGEsXFxuLnBhZ2luYXRpb24gPiAuc2tpcHBlZENvdW50ID4gc3BhbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICBib3JkZXItY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbi5wYWdpbmF0aW9uID4gLmluY29ycmVjdENvdW50ID4gYSxcXG4ucGFnaW5hdGlvbiA+IC5pbmNvcnJlY3RDb3VudCA+IHNwYW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlO1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4uc3dpdGNoY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3J1bmVzdG9uZS90aW1lZC9jc3MvdGltZWQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1DQUFtQztBQUNuQzs7SUFFSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxzQkFBc0I7QUFDMUI7O0FBRUEsV0FBVyxrQkFBa0I7SUFDekIsb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUEscUZBQXFGOztBQUVyRjs7SUFFSSxvQ0FBb0M7SUFDcEMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDBCQUEwQjtBQUM5Qjs7QUFFQSxRQUFROztBQUVSOztJQUVJLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxtQ0FBbUM7SUFDbkMsV0FBVztBQUNmOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiw0Q0FBNEM7SUFDNUMsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFRJTUVEIEFTU0VTU01FTlQgQlVUVE9OIFNUWUxFUyAqL1xcbnVsI3BhZ2VOdW1zLFxcbnVsI3BhZ2VOdW1zIGxpIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxufVxcblxcbi5wYWdpbmF0aW9uID4gbGkgPiBhOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZSAhaW1wb3J0YW50O1xcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZmxhZ0J0biB7IC8qIGRvY3VtZW50YXRpb24gKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VEOUM1OSAhaW1wb3J0YW50O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjQ0U1NzE4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiAjMDMwMjAxICFpbXBvcnRhbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDE1MDtcXG4gICAgaGVpZ2h0OiAxMTU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBkaXNwbGF5OiBydWJ5O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi8qIFRoZSBmb2xsb3dpbmcgb3ZlcnJpZGUgc3R5bGVzIGluIEJvb3RzdHJhcCBkaXN0cmlidXRpb24gZmlsZSAoYm9vdHN0cmFwLm1pbi5jc3MpICovXFxuXFxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYSxcXG4ucGFnaW5hdGlvbiA+IC5hY3RpdmUgPiBzcGFuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyOGJjYSAhaW1wb3J0YW50O1xcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY29sLW1kLTYtb3ZlcnJpZGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIGVuZCAqL1xcblxcbi5wYWdpbmF0aW9uID4gLmFuc3dlcmVkID4gYSxcXG4ucGFnaW5hdGlvbiA+IC5hbnN3ZXJlZCA+IHNwYW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLnBhZ2luYXRpb24gPiAuYnJva2VuID4gYSxcXG4ucGFnaW5hdGlvbiA+IC5icm9rZW4gPiBzcGFuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5OTtcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5wYWdpbmF0aW9uID4gLnRvb2xhdGUgPiBhLFxcbi5wYWdpbmF0aW9uID4gLnRvb2xhdGUgPiBzcGFuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjAzLCA1NCk7XFxuICAgIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ucGFnaW5hdGlvbiA+IC5mbGFnY29sb3IgPiBhLFxcbi5wYWdpbmF0aW9uID4gLmZsYWdjb2xvciA+IHNwYW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUQ5QzU5O1xcbiAgICBjb2xvcjogIzAwMDtcXG59XFxuXFxucC5leGFtd2FybmluZyB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAxNTYsIDE1NiwgMC44MjIpO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wYWdpbmF0aW9uID4gLmNvcnJlY3RDb3VudCA+IGEsXFxuLnBhZ2luYXRpb24gPiAuY29ycmVjdENvdW50ID4gc3BhbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmYwZDg7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICBib3JkZXItY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbi5wYWdpbmF0aW9uID4gLnNraXBwZWRDb3VudCA+IGEsXFxuLnBhZ2luYXRpb24gPiAuc2tpcHBlZENvdW50ID4gc3BhbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICBib3JkZXItY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbi5wYWdpbmF0aW9uID4gLmluY29ycmVjdENvdW50ID4gYSxcXG4ucGFnaW5hdGlvbiA+IC5pbmNvcnJlY3RDb3VudCA+IHNwYW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlO1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4uc3dpdGNoY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RpbWVkLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT09PT09PSAgICAgIE1hc3RlciB0aW1lZC5qcyAgICAgPT09PT09PT09XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09ICAgICBUaGlzIGZpbGUgY29udGFpbnMgdGhlIEpTIGZvciAgICA9PT1cbj09PSAgICAgdGhlIFJ1bmVzdG9uZSB0aW1lZCBjb21wb25lbnQuICAgPT09XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09ICAgICAgICAgICAgICBDcmVhdGVkIEJ5ICAgICAgICAgICAgICA9PT1cbj09PSAgICAgICAgICAgICBLaXJieSBPbHNvbiAgICAgICAgICAgICAgPT09XG49PT0gICAgICAgICAgICAgICA2LzExLzE1ICAgICAgICAgICAgICAgID09PVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVuZXN0b25lQmFzZSBmcm9tIFwiLi4vLi4vY29tbW9uL2pzL3J1bmVzdG9uZWJhc2UuanNcIjtcbmltcG9ydCBUaW1lZEZJVEIgZnJvbSBcIi4uLy4uL2ZpdGIvanMvdGltZWRmaXRiLmpzXCI7XG5pbXBvcnQgVGltZWRNQyBmcm9tIFwiLi4vLi4vbWNob2ljZS9qcy90aW1lZG1jLmpzXCI7XG5pbXBvcnQgVGltZWRTaG9ydEFuc3dlciBmcm9tIFwiLi4vLi4vc2hvcnRhbnN3ZXIvanMvdGltZWRfc2hvcnRhbnN3ZXIuanNcIjtcbmltcG9ydCBBQ0ZhY3RvcnkgZnJvbSBcIi4uLy4uL2FjdGl2ZWNvZGUvanMvYWNmYWN0b3J5LmpzXCI7XG5pbXBvcnQgVGltZWRDbGlja2FibGVBcmVhIGZyb20gXCIuLi8uLi9jbGlja2FibGVBcmVhL2pzL3RpbWVkY2xpY2thYmxlXCI7XG5pbXBvcnQgVGltZWREcmFnTkRyb3AgZnJvbSBcIi4uLy4uL2RyYWduZHJvcC9qcy90aW1lZGRuZC5qc1wiO1xuaW1wb3J0IFRpbWVkUGFyc29ucyBmcm9tIFwiLi4vLi4vcGFyc29ucy9qcy90aW1lZHBhcnNvbnMuanNcIjtcbmltcG9ydCBTZWxlY3RPbmUgZnJvbSBcIi4uLy4uL3NlbGVjdHF1ZXN0aW9uL2pzL3NlbGVjdG9uZVwiO1xuaW1wb3J0IFwiLi4vY3NzL3RpbWVkLmNzc1wiO1xuXG5leHBvcnQgdmFyIFRpbWVkTGlzdCA9IHt9OyAvLyBUaW1lZCBkaWN0aW9uYXJ5XG5cbi8vIFRpbWVkIGNvbnN0cnVjdG9yXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lZCBleHRlbmRzIFJ1bmVzdG9uZUJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIob3B0cyk7XG4gICAgICAgIHZhciBvcmlnID0gb3B0cy5vcmlnO1xuICAgICAgICB0aGlzLm9yaWdFbGVtID0gb3JpZzsgLy8gdGhlIGVudGlyZSBlbGVtZW50IG9mIHRoaXMgdGltZWQgYXNzZXNzbWVudCBhbmQgYWxsIG9mIGl0cyBjaGlsZHJlblxuICAgICAgICB0aGlzLmRpdmlkID0gb3JpZy5pZDtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMub3JpZ0VsZW0uY2hpbGROb2RlcztcbiAgICAgICAgdGhpcy52aXNpdGVkID0gW107XG4gICAgICAgIHRoaXMudGltZUxpbWl0ID0gMDtcbiAgICAgICAgdGhpcy5saW1pdGVkVGltZSA9IGZhbHNlO1xuICAgICAgICBpZiAoIWlzTmFOKCQodGhpcy5vcmlnRWxlbSkuZGF0YShcInRpbWVcIikpKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVMaW1pdCA9IHBhcnNlSW50KCQodGhpcy5vcmlnRWxlbSkuZGF0YShcInRpbWVcIiksIDEwKSAqIDYwOyAvLyB0aW1lIGluIHNlY29uZHMgdG8gY29tcGxldGUgdGhlIGV4YW1cbiAgICAgICAgICAgIHRoaXMuc3RhcnRpbmdUaW1lID0gdGhpcy50aW1lTGltaXQ7XG4gICAgICAgICAgICB0aGlzLmxpbWl0ZWRUaW1lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3dGZWVkYmFjayA9IHRydWU7XG4gICAgICAgIGlmICgkKHRoaXMub3JpZ0VsZW0pLmlzKFwiW2RhdGEtbm8tZmVlZGJhY2tdXCIpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dGZWVkYmFjayA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd1Jlc3VsdHMgPSB0cnVlO1xuICAgICAgICBpZiAoJCh0aGlzLm9yaWdFbGVtKS5pcyhcIltkYXRhLW5vLXJlc3VsdF1cIikpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdHMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJhbmRvbSA9IGZhbHNlO1xuICAgICAgICBpZiAoJCh0aGlzLm9yaWdFbGVtKS5pcyhcIltkYXRhLXJhbmRvbV1cIikpIHtcbiAgICAgICAgICAgIHRoaXMucmFuZG9tID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3dUaW1lciA9IHRydWU7XG4gICAgICAgIGlmICgkKHRoaXMub3JpZ0VsZW0pLmlzKFwiW2RhdGEtbm8tdGltZXJdXCIpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUaW1lciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZnVsbHdpZHRoID0gZmFsc2U7XG4gICAgICAgIGlmICgkKHRoaXMub3JpZ0VsZW0pLmlzKFwiW2RhdGEtZnVsbHdpZHRoXVwiKSkge1xuICAgICAgICAgICAgdGhpcy5mdWxsd2lkdGggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9wYXVzZSA9IGZhbHNlO1xuICAgICAgICBpZiAoJCh0aGlzLm9yaWdFbGVtKS5pcyhcIltkYXRhLW5vLXBhdXNlXVwiKSkge1xuICAgICAgICAgICAgdGhpcy5ub3BhdXNlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucnVubmluZyA9IDA7XG4gICAgICAgIHRoaXMucGF1c2VkID0gMDtcbiAgICAgICAgdGhpcy5kb25lID0gMDtcbiAgICAgICAgdGhpcy50YWtlbiA9IDA7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLmluY29ycmVjdCA9IDA7XG4gICAgICAgIHRoaXMuY29ycmVjdFN0ciA9IFwiXCI7XG4gICAgICAgIHRoaXMuaW5jb3JyZWN0U3RyID0gXCJcIjtcbiAgICAgICAgdGhpcy5za2lwcGVkU3RyID0gXCJcIjtcbiAgICAgICAgdGhpcy5za2lwcGVkID0gMDtcbiAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCA9IDA7IC8vIFdoaWNoIHF1ZXN0aW9uIGlzIGN1cnJlbnRseSBkaXNwbGF5aW5nIG9uIHRoZSBwYWdlXG4gICAgICAgIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5ID0gW107IC8vIGxpc3Qgb2YgYWxsIHByb2JsZW1zXG4gICAgICAgIHRoaXMuZ2V0TmV3Q2hpbGRyZW4oKTtcbiAgICAgICAgLy8gT25lIHNtYWxsIHN0ZXAgdG8gZWxpbWluYXRlIHN0dWRlbnRzIGZyb20gZG9pbmcgdmlldyBzb3VyY2VcbiAgICAgICAgLy8gdGhpcyB3b24ndCBzdG9wIGFueW9uZSB3aXRoIGRldGVybWluYXRpb24gYnV0IG1heSBwcmV2ZW50IGNhc3VhbCBwZWVraW5nXG4gICAgICAgIGlmICghZUJvb2tDb25maWcuZW5hYmxlRGVidWcpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkub25jb250ZXh0bWVudSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hlY2tBc3Nlc3NtZW50U3RhdHVzKCkudGhlbihcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclRpbWVkQXNzZXNzKCk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXROZXdDaGlsZHJlbigpIHtcbiAgICAgICAgdGhpcy5uZXdDaGlsZHJlbiA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3JpZ0VsZW0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5uZXdDaGlsZHJlbi5wdXNoKHRoaXMub3JpZ0VsZW0uY2hpbGROb2Rlc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBjaGVja0Fzc2Vzc21lbnRTdGF0dXMoKSB7XG4gICAgICAgIC8vIEhhcyB0aGUgdXNlciB0YWtlbiB0aGlzIGV4YW0/ICBJbnF1aXJpbmcgbWluZHMgd2FudCB0byBrbm93XG4gICAgICAgIC8vIElmIGEgdXNlciBoYXMgbm90IHRha2VuIHRoaXMgZXhhbSB0aGVuIHdlIHdhbnQgdG8gbWFrZSBzdXJlXG4gICAgICAgIC8vIHRoYXQgaWYgYSBxdWVzdGlvbiBoYXMgYmVlbiBzZWVuIGJ5IHRoZSBzdHVkZW50IGJlZm9yZSB3ZSBkb1xuICAgICAgICAvLyBub3QgcG9wdWxhdGUgcHJldmlvdXMgYW5zd2Vycy5cbiAgICAgICAgbGV0IHNlbmRJbmZvID0ge1xuICAgICAgICAgICAgZGl2X2lkOiB0aGlzLmRpdmlkLFxuICAgICAgICAgICAgY291cnNlX25hbWU6IGVCb29rQ29uZmlnLmNvdXJzZSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coc2VuZEluZm8pO1xuICAgICAgICBpZiAoZUJvb2tDb25maWcudXNlUnVuZXN0b25lU2VydmljZXMpIHtcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoXG4gICAgICAgICAgICAgICAgZUJvb2tDb25maWcuYWpheFVSTCArIFwidG9va1RpbWVkQXNzZXNzbWVudFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogdGhpcy5qc29uSGVhZGVycyxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc2VuZEluZm8pLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0KTtcbiAgICAgICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgdGhpcy50YWtlbiA9IGRhdGEudG9va0Fzc2Vzc21lbnQ7XG4gICAgICAgICAgICB0aGlzLmFzc2Vzc21lbnRUYWtlbiA9IHRoaXMudGFrZW47XG4gICAgICAgICAgICBpZiAoIXRoaXMudGFrZW4pIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZG9uZSB3aXRoIGNoZWNrIHN0YXR1c1wiKTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGFrZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYXNzZXNzbWVudFRha2VuID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT0gR2VuZXJhdGluZyBuZXcgVGltZWQgSFRNTCA9PT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICBhc3luYyByZW5kZXJUaW1lZEFzc2VzcygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXJpbmcgdGltZWQgXCIpO1xuICAgICAgICAvLyBjcmVhdGUgcmVuZGVyZWRRdWVzdGlvbkFycmF5IHJldHVybnMgYSBwcm9taXNlXG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuY3JlYXRlUmVuZGVyZWRRdWVzdGlvbkFycmF5KCk7XG4gICAgICAgIGlmICh0aGlzLnJhbmRvbSkge1xuICAgICAgICAgICAgdGhpcy5yYW5kb21pemVSUUEoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlckNvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLnJlbmRlclRpbWVyKCk7XG4gICAgICAgIGF3YWl0IHRoaXMucmVuZGVyQ29udHJvbEJ1dHRvbnMoKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy50aW1lZERpdik7IC8vIFRoaXMgY2FuJ3QgYmUgYXBwZW5kZWQgaW4gcmVuZGVyQ29udGFpbmVyIGJlY2F1c2UgdGhlbiBpdCByZW5kZXJzIGFib3ZlIHRoZSB0aW1lciBhbmQgY29udHJvbCBidXR0b25zLlxuICAgICAgICBpZiAodGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoID4gMSkgdGhpcy5yZW5kZXJOYXZDb250cm9scygpO1xuICAgICAgICB0aGlzLnJlbmRlclN1Ym1pdEJ1dHRvbigpO1xuICAgICAgICB0aGlzLnJlbmRlckZlZWRiYWNrQ29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMudXNlUnVuZXN0b25lU2VydmljZXMgPSBlQm9va0NvbmZpZy51c2VSdW5lc3RvbmVTZXJ2aWNlcztcbiAgICAgICAgLy8gUmVwbGFjZSBpbnRlcm1lZGlhdGUgSFRNTCB3aXRoIHJlbmRlcmVkIEhUTUxcbiAgICAgICAgJCh0aGlzLm9yaWdFbGVtKS5yZXBsYWNlV2l0aCh0aGlzLmNvbnRhaW5lckRpdik7XG4gICAgICAgIC8vIGNoZWNrIGlmIGFscmVhZHkgdGFrZW4gYW5kIGlmIHNvIHNob3cgcmVzdWx0c1xuICAgICAgICB0aGlzLnN0eWxlRXhhbUVsZW1lbnRzKCk7IC8vIHJlbmFtZSB0byByZW5kZXJQb3NzaWJsZVJlc3VsdHNcbiAgICAgICAgdGhpcy5jaGVja1NlcnZlcihcInRpbWVkRXhhbVwiLCB0cnVlKTtcbiAgICB9XG5cbiAgICByZW5kZXJDb250YWluZXIoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy8gY29udGFpbmVyIGZvciB0aGUgZW50aXJlIFRpbWVkIENvbXBvbmVudFxuICAgICAgICBpZiAodGhpcy5mdWxsd2lkdGgpIHtcbiAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb250YWluZXIgdG8gZmlsbCB0aGUgd2lkdGggLSBiYXJiXG4gICAgICAgICAgICAkKHRoaXMuY29udGFpbmVyRGl2KS5hdHRyKHtcbiAgICAgICAgICAgICAgICBzdHlsZTogXCJtYXgtd2lkdGg6bm9uZVwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuaWQgPSB0aGlzLmRpdmlkO1xuICAgICAgICB0aGlzLnRpbWVkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy8gZGl2IHRoYXQgd2lsbCBob2xkIHRoZSBxdWVzdGlvbnMgZm9yIHRoZSB0aW1lZCBhc3Nlc3NtZW50XG4gICAgICAgIHRoaXMubmF2RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy8gRm9yIG5hdmlnYXRpb24gY29udHJvbFxuICAgICAgICAkKHRoaXMubmF2RGl2KS5hdHRyKHtcbiAgICAgICAgICAgIHN0eWxlOiBcInRleHQtYWxpZ246Y2VudGVyXCIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZsYWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBkaXYgdGhhdCB3aWxsIGhvbGQgdGhlIFwiRmxhZyBRdWVzdGlvblwiIGJ1dHRvblxuICAgICAgICAkKHRoaXMuZmxhZ0RpdikuYXR0cih7XG4gICAgICAgICAgICBzdHlsZTogXCJ0ZXh0LWFsaWduOiBjZW50ZXJcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3dpdGNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5zd2l0Y2hDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInN3aXRjaGNvbnRhaW5lclwiKTtcbiAgICAgICAgdGhpcy5zd2l0Y2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBpcyByZXBsYWNlZCBieSB0aGUgcXVlc3Rpb25zXG4gICAgICAgIHRoaXMudGltZWREaXYuYXBwZW5kQ2hpbGQodGhpcy5uYXZEaXYpO1xuICAgICAgICB0aGlzLnRpbWVkRGl2LmFwcGVuZENoaWxkKHRoaXMuZmxhZ0Rpdik7IC8vIGFkZCBmbGFnRGl2IHRvIHRpbWVkRGl2LCB3aGljaCBob2xkcyBjb21wb25lbnRzIGZvciBuYXZpZ2F0aW9uIGFuZCBxdWVzdGlvbnMgZm9yIHRpbWVkIGFzc2Vzc21lbnRcbiAgICAgICAgdGhpcy50aW1lZERpdi5hcHBlbmRDaGlsZCh0aGlzLnN3aXRjaENvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuc3dpdGNoQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuc3dpdGNoRGl2KTtcbiAgICAgICAgJCh0aGlzLnRpbWVkRGl2KS5hdHRyKHtcbiAgICAgICAgICAgIGlkOiBcInRpbWVkX1Rlc3RcIixcbiAgICAgICAgICAgIHN0eWxlOiBcImRpc3BsYXk6bm9uZVwiLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXJUaW1lcigpIHtcbiAgICAgICAgdGhpcy53cmFwcGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy50aW1lckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQXCIpO1xuICAgICAgICB0aGlzLndyYXBwZXJEaXYuaWQgPSB0aGlzLmRpdmlkICsgXCItc3RhcnRXcmFwcGVyXCI7XG4gICAgICAgIHRoaXMudGltZXJDb250YWluZXIuaWQgPSB0aGlzLmRpdmlkICsgXCItb3V0cHV0XCI7XG4gICAgICAgIHRoaXMud3JhcHBlckRpdi5hcHBlbmRDaGlsZCh0aGlzLnRpbWVyQ29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5zaG93VGltZSgpO1xuICAgIH1cblxuICAgIHJlbmRlckNvbnRyb2xCdXR0b25zKCkge1xuICAgICAgICB0aGlzLmNvbnRyb2xEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAkKHRoaXMuY29udHJvbERpdikuYXR0cih7XG4gICAgICAgICAgICBpZDogXCJjb250cm9sc1wiLFxuICAgICAgICAgICAgc3R5bGU6IFwidGV4dC1hbGlnbjogY2VudGVyXCIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YXJ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy5wYXVzZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICQodGhpcy5zdGFydEJ0bikuYXR0cih7XG4gICAgICAgICAgICBjbGFzczogXCJidG4gYnRuLXN1Y2Nlc3NcIixcbiAgICAgICAgICAgIGlkOiBcInN0YXJ0XCIsXG4gICAgICAgICAgICB0YWJpbmRleDogXCIwXCIsXG4gICAgICAgICAgICByb2xlOiBcImJ1dHRvblwiLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdGFydEJ0bi50ZXh0Q29udGVudCA9IFwiU3RhcnRcIjtcbiAgICAgICAgdGhpcy5zdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcy5maW5pc2hCdXR0b24pLmhpZGUoKTsgLy8gaGlkZSB0aGUgZmluaXNoIGJ1dHRvbiBmb3Igbm93XG4gICAgICAgICAgICAgICAgJCh0aGlzLmZsYWdCdXR0b24pLnNob3coKTtcbiAgICAgICAgICAgICAgICBsZXQgbWVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgICAgIG1lc3MuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgICAgXCI8c3Ryb25nPldhcm5pbmc6IFlvdSB3aWxsIG5vdCBiZSBhYmxlIHRvIGNvbnRpbnVlIHRoZSBleGFtIGlmIHlvdSBjbG9zZSB0aGlzIHRhYiwgY2xvc2UgdGhlIHdpbmRvdywgb3IgbmF2aWdhdGUgYXdheSBmcm9tIHRoaXMgcGFnZSE8L3N0cm9uZz4gIE1ha2Ugc3VyZSB5b3UgY2xpY2sgdGhlIEZpbmlzaCBFeGFtIGJ1dHRvbiB3aGVuIHlvdSBhcmUgZG9uZSB0byBzdWJtaXQgeW91ciB3b3JrIVwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbERpdi5hcHBlbmRDaGlsZChtZXNzKTtcbiAgICAgICAgICAgICAgICBtZXNzLmNsYXNzTGlzdC5hZGQoXCJleGFtd2FybmluZ1wiKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnJlbmRlclRpbWVkUXVlc3Rpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QXNzZXNzbWVudCgpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICAgICAgJCh0aGlzLnBhdXNlQnRuKS5hdHRyKHtcbiAgICAgICAgICAgIGNsYXNzOiBcImJ0biBidG4tZGVmYXVsdFwiLFxuICAgICAgICAgICAgaWQ6IFwicGF1c2VcIixcbiAgICAgICAgICAgIGRpc2FibGVkOiBcInRydWVcIixcbiAgICAgICAgICAgIHRhYmluZGV4OiBcIjBcIixcbiAgICAgICAgICAgIHJvbGU6IFwiYnV0dG9uXCIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnBhdXNlQnRuLnRleHRDb250ZW50ID0gXCJQYXVzZVwiO1xuICAgICAgICB0aGlzLnBhdXNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZUFzc2Vzc21lbnQoKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG4gICAgICAgIGlmICghdGhpcy50YWtlbikge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sRGl2LmFwcGVuZENoaWxkKHRoaXMuc3RhcnRCdG4pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5ub3BhdXNlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xEaXYuYXBwZW5kQ2hpbGQodGhpcy5wYXVzZUJ0bik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy53cmFwcGVyRGl2KTtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sRGl2KTtcbiAgICB9XG5cbiAgICByZW5kZXJOYXZDb250cm9scygpIHtcbiAgICAgICAgLy8gbWFraW5nIFwiUHJldlwiIGJ1dHRvblxuICAgICAgICB0aGlzLnBhZ05hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgICQodGhpcy5wYWdOYXZMaXN0KS5hZGRDbGFzcyhcInBhZ2luYXRpb25cIik7XG4gICAgICAgIHRoaXMubGVmdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgdGhpcy5sZWZ0TmF2QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy5sZWZ0TmF2QnV0dG9uLmlubmVySFRNTCA9IFwiJiM4MjQ5OyBQcmV2XCI7XG4gICAgICAgICQodGhpcy5sZWZ0TmF2QnV0dG9uKS5hdHRyKFwiYXJpYS1sYWJlbFwiLCBcIlByZXZpb3VzXCIpO1xuICAgICAgICAkKHRoaXMubGVmdE5hdkJ1dHRvbikuYXR0cihcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgICAgICAgJCh0aGlzLmxlZnROYXZCdXR0b24pLmF0dHIoXCJyb2xlXCIsIFwiYnV0dG9uXCIpO1xuICAgICAgICAkKHRoaXMucmlnaHROYXZCdXR0b24pLmF0dHIoXCJpZFwiLCBcInByZXZcIik7XG4gICAgICAgICQodGhpcy5sZWZ0TmF2QnV0dG9uKS5jc3MoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpO1xuICAgICAgICB0aGlzLmxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5sZWZ0TmF2QnV0dG9uKTtcbiAgICAgICAgdGhpcy5wYWdOYXZMaXN0LmFwcGVuZENoaWxkKHRoaXMubGVmdENvbnRhaW5lcik7XG4gICAgICAgIC8vIG1ha2luZyBcIkZsYWcgUXVlc3Rpb25cIiBidXR0b25cbiAgICAgICAgdGhpcy5mbGFnZ2luZ1BsYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICAkKHRoaXMuZmxhZ2dpbmdQbGFjZSkuYWRkQ2xhc3MoXCJwYWdpbmF0aW9uXCIpO1xuICAgICAgICB0aGlzLmZsYWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIHRoaXMuZmxhZ0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICQodGhpcy5mbGFnQnV0dG9uKS5hZGRDbGFzcyhcImZsYWdCdG5cIik7XG4gICAgICAgIHRoaXMuZmxhZ0J1dHRvbi5pbm5lckhUTUwgPSBcIkZsYWcgUXVlc3Rpb25cIjsgICAgICAgICAgICAvLyBuYW1lIG9uIGJ1dHRvblxuICAgICAgICAkKHRoaXMuZmxhZ0J1dHRvbikuYXR0cihcImFyaWEtbGFiZWxsZWRieVwiLCBcIkZsYWdcIik7XG4gICAgICAgICQodGhpcy5mbGFnQnV0dG9uKS5hdHRyKFwidGFiaW5kZXhcIiwgXCI1XCIpO1xuICAgICAgICAkKHRoaXMuZmxhZ0J1dHRvbikuYXR0cihcInJvbGVcIiwgXCJidXR0b25cIik7XG4gICAgICAgICQodGhpcy5mbGFnQnV0dG9uKS5hdHRyKFwiaWRcIiwgXCJmbGFnXCIpO1xuICAgICAgICAkKHRoaXMuZmxhZ0J1dHRvbikuY3NzKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcbiAgICAgICAgdGhpcy5mbGFnQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmxhZ0J1dHRvbik7ICAgICAgICAvLyBhZGRpbmcgYnV0dG9uIHRvIGNvbnRhaW5lclxuICAgICAgICB0aGlzLmZsYWdnaW5nUGxhY2UuYXBwZW5kQ2hpbGQodGhpcy5mbGFnQ29udGFpbmVyKTsgICAgIC8vIGFkZGluZyBjb250YWluZXIgdG8gZmxhZ2dpbmdQbGFjZVxuICAgICAgICAvLyBtYWtpbmcgXCJOZXh0XCIgYnV0dG9uXG4gICAgICAgIHRoaXMucmlnaHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIHRoaXMucmlnaHROYXZCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAkKHRoaXMucmlnaHROYXZCdXR0b24pLmF0dHIoXCJhcmlhLWxhYmVsXCIsIFwiTmV4dFwiKTtcbiAgICAgICAgJCh0aGlzLnJpZ2h0TmF2QnV0dG9uKS5hdHRyKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICAgICAgICAkKHRoaXMucmlnaHROYXZCdXR0b24pLmF0dHIoXCJyb2xlXCIsIFwiYnV0dG9uXCIpO1xuICAgICAgICAkKHRoaXMucmlnaHROYXZCdXR0b24pLmF0dHIoXCJpZFwiLCBcIm5leHRcIik7XG4gICAgICAgIHRoaXMucmlnaHROYXZCdXR0b24uaW5uZXJIVE1MID0gXCJOZXh0ICYjODI1MDtcIjtcbiAgICAgICAgJCh0aGlzLnJpZ2h0TmF2QnV0dG9uKS5jc3MoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpO1xuICAgICAgICB0aGlzLnJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucmlnaHROYXZCdXR0b24pO1xuICAgICAgICB0aGlzLnBhZ05hdkxpc3QuYXBwZW5kQ2hpbGQodGhpcy5yaWdodENvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuZW5zdXJlQnV0dG9uU2FmZXR5KCk7XG4gICAgICAgIHRoaXMubmF2RGl2LmFwcGVuZENoaWxkKHRoaXMucGFnTmF2TGlzdCk7XG4gICAgICAgIHRoaXMuZmxhZ0Rpdi5hcHBlbmRDaGlsZCh0aGlzLmZsYWdnaW5nUGxhY2UpOyAgICAgICAgICAgLy8gYWRkcyBmbGFnZ2luZ1BsYWNlIHRvIHRoZSBmbGFnRGl2IFxuICAgICAgICB0aGlzLmJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xuICAgICAgICB0aGlzLm5hdkRpdi5hcHBlbmRDaGlsZCh0aGlzLmJyZWFrKTtcbiAgICAgICAgLy8gcmVuZGVyIHRoZSBxdWVzdGlvbiBudW1iZXIganVtcCBidXR0b25zXG4gICAgICAgIHRoaXMucU51bUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgICQodGhpcy5xTnVtTGlzdCkuYXR0cihcImlkXCIsIFwicGFnZU51bXNcIik7XG4gICAgICAgIHRoaXMucU51bVdyYXBwZXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICAkKHRoaXMucU51bVdyYXBwZXJMaXN0KS5hZGRDbGFzcyhcInBhZ2luYXRpb25cIik7XG4gICAgICAgIHZhciB0bXBMaSwgdG1wQTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdG1wTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICB0bXBBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICB0bXBBLmlubmVySFRNTCA9IGkgKyAxO1xuICAgICAgICAgICAgJCh0bXBBKS5jc3MoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpO1xuICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAkKHRtcExpKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRtcExpLmFwcGVuZENoaWxkKHRtcEEpO1xuICAgICAgICAgICAgdGhpcy5xTnVtV3JhcHBlckxpc3QuYXBwZW5kQ2hpbGQodG1wTGkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucU51bUxpc3QuYXBwZW5kQ2hpbGQodGhpcy5xTnVtV3JhcHBlckxpc3QpO1xuICAgICAgICB0aGlzLm5hdkRpdi5hcHBlbmRDaGlsZCh0aGlzLnFOdW1MaXN0KTtcbiAgICAgICAgdGhpcy5uYXZCdG5MaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5mbGFnQnRuTGlzdGVuZXIoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsaXN0ZW5zIGZvciBjbGljayBvbiBmbGFnIGJ1dHRvblxuICAgICAgICAkKHRoaXMuZmxhZ0J1dHRvbikuaGlkZSgpO1xuICAgIH1cblxuICAgIC8vIHdoZW4gbW92aW5nIG9mZiBvZiBhIHF1ZXN0aW9uIGluIGFuIGFjdGl2ZSBleGFtOlxuICAgIC8vIDEuIHNob3cgdGhhdCB0aGUgcXVlc3Rpb24gaGFzIGJlZW4gc2Vlbiwgb3IgbWFyayBpdCBicm9rZW4gaWYgaXQgaXMgaW4gZXJyb3IuXG4gICAgLy8gMi4gY2hlY2sgYW5kIGxvZyB0aGUgY3VycmVudCBhbnN3ZXJcbiAgICBhc3luYyBuYXZpZ2F0ZUF3YXkoKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W3RoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXhdLnN0YXRlID09XG4gICAgICAgICAgICBcImJyb2tlbl9leGFtXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgICAkKFxuICAgICAgICAgICAgICAgIFwidWwjcGFnZU51bXMgPiB1bCA+IGxpOmVxKFwiICsgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCArIFwiKVwiXG4gICAgICAgICAgICApLmFkZENsYXNzKFwiYnJva2VuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W3RoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXhdLnN0YXRlID09XG4gICAgICAgICAgICBcImV4YW1fZW5kZWRcIlxuICAgICAgICApIHtcbiAgICAgICAgICAgICQoXG4gICAgICAgICAgICAgICAgXCJ1bCNwYWdlTnVtcyA+IHVsID4gbGk6ZXEoXCIgKyB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ICsgXCIpXCJcbiAgICAgICAgICAgICkuYWRkQ2xhc3MoXCJ0b29sYXRlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W3RoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXhdLnF1ZXN0aW9uXG4gICAgICAgICAgICAgICAgLmlzQW5zd2VyZWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICAkKFxuICAgICAgICAgICAgICAgIFwidWwjcGFnZU51bXMgPiB1bCA+IGxpOmVxKFwiICsgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCArIFwiKVwiXG4gICAgICAgICAgICApLmFkZENsYXNzKFwiYW5zd2VyZWRcIik7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4XG4gICAgICAgICAgICBdLnF1ZXN0aW9uLmNoZWNrQ3VycmVudEFuc3dlcigpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRvbmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleFxuICAgICAgICAgICAgICAgIF0ucXVlc3Rpb24ubG9nQ3VycmVudEFuc3dlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGhhbmRsZU5leHRQcmV2KGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy50YWtlbikge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5uYXZpZ2F0ZUF3YXkoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpLnRleHQoKTtcbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaCgvTmV4dC8pKSB7ICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrcyBnaXZlbiB0ZXh0IHRvIG1hdGNoIFwiTmV4dFwiXG4gICAgICAgICAgICBpZiAoJCh0aGlzLnJpZ2h0Q29udGFpbmVyKS5oYXNDbGFzcyhcImRpc2FibGVkXCIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCsrO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5tYXRjaCgvUHJldi8pKSB7ICAgICAgICAgICAgICAgLy8gY2hlY2tzIGdpdmVuIHRleHQgdG8gbWF0Y2ggXCJQcmV2XCJcbiAgICAgICAgICAgIGlmICgkKHRoaXMubGVmdENvbnRhaW5lcikuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXgtLTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLnJlbmRlclRpbWVkUXVlc3Rpb24oKTtcbiAgICAgICAgdGhpcy5lbnN1cmVCdXR0b25TYWZldHkoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnFOdW1MaXN0LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgdmFyIGogPSAwO1xuICAgICAgICAgICAgICAgIGogPCB0aGlzLnFOdW1MaXN0LmNoaWxkTm9kZXNbaV0uY2hpbGROb2Rlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgaisrXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMucU51bUxpc3QuY2hpbGROb2Rlc1tpXS5jaGlsZE5vZGVzW2pdKS5yZW1vdmVDbGFzcyhcbiAgICAgICAgICAgICAgICAgICAgXCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJChcbiAgICAgICAgICAgIFwidWwjcGFnZU51bXMgPiB1bCA+IGxpOmVxKFwiICsgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCArIFwiKVwiXG4gICAgICAgICkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgIGlmICAoJChcInVsI3BhZ2VOdW1zID4gdWwgPiBsaTplcShcIiArIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggKyBcIilcIlxuICAgICAgICApLmhhc0NsYXNzKFwiZmxhZ2NvbG9yXCIpKXsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2tpbmcgZm9yIGNsYXNzIFxuICAgICAgICAgICAgdGhpcy5mbGFnQnV0dG9uLmlubmVySFRNTCA9IFwiVW5mbGFnIFF1ZXN0aW9uXCI7ICAgICAgICAgICAgICAgICAgLy8gY2hhbmdlcyB0ZXh0IG9uIGJ1dHRvblxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLmZsYWdCdXR0b24uaW5uZXJIVE1MID0gXCJGbGFnIFF1ZXN0aW9uXCI7ICAgICAgICAgICAgICAgICAgICAvLyBjaGFuZ2VzIHRleHQgb24gYnV0dG9uXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBoYW5kbGVGbGFnKGV2ZW50KSB7XG4gICAgICAgIC8vIGNhbGxlZCB3aGVuIGZsYWcgYnV0dG9uIGlzIGNsaWNrZWRcbiAgICAgICAgdmFyIHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KS50ZXh0KClcbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaCgvRmxhZyBRdWVzdGlvbi8pKSB7XG4gICAgICAgICAgICAkKFwidWwjcGFnZU51bXMgPiB1bCA+IGxpOmVxKFwiICsgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCArIFwiKVwiXG4gICAgICAgICAgICApLmFkZENsYXNzKFwiZmxhZ2NvbG9yXCIpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGFzcyB3aWxsIGNoYW5nZSBjb2xvciBvZiBxdWVzdGlvbiBibG9ja1xuICAgICAgICAgICAgdGhpcy5mbGFnQnV0dG9uLmlubmVySFRNTCA9IFwiVW5mbGFnIFF1ZXN0aW9uXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwidWwjcGFnZU51bXMgPiB1bCA+IGxpOmVxKFwiICsgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCArIFwiKVwiXG4gICAgICAgICAgICApLnJlbW92ZUNsYXNzKFwiZmxhZ2NvbG9yXCIpOyAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aWxsIHJlc3RvcmUgY3VycmVudCBjb2xvciBvZiBxdWVzdGlvbiBibG9ja1xuICAgICAgICAgICAgdGhpcy5mbGFnQnV0dG9uLmlubmVySFRNTCA9IFwiRmxhZyBRdWVzdGlvblwiOyAgICAgICAgLy8gYWxzbyBzZXRzIG5hbWUgYmFja1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlTnVtYmVyZWROYXYoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRha2VuKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLm5hdmlnYXRlQXdheSgpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5xTnVtTGlzdC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgIHZhciBqID0gMDtcbiAgICAgICAgICAgICAgICBqIDwgdGhpcy5xTnVtTGlzdC5jaGlsZE5vZGVzW2ldLmNoaWxkTm9kZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGorK1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLnFOdW1MaXN0LmNoaWxkTm9kZXNbaV0uY2hpbGROb2Rlc1tqXSkucmVtb3ZlQ2xhc3MoXG4gICAgICAgICAgICAgICAgICAgIFwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KS50ZXh0KCk7XG4gICAgICAgIGxldCBvbGRJbmRleCA9IHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXg7XG4gICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggPSBwYXJzZUludCh0YXJnZXQpIC0gMTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggPiB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogYmFkIGluZGV4IGZvciAke3RhcmdldH1gKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggPSBvbGRJbmRleDtcbiAgICAgICAgfVxuICAgICAgICAkKFxuICAgICAgICAgICAgXCJ1bCNwYWdlTnVtcyA+IHVsID4gbGk6ZXEoXCIgKyB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ICsgXCIpXCJcbiAgICAgICAgKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgaWYgICgkKFwidWwjcGFnZU51bXMgPiB1bCA+IGxpOmVxKFwiICsgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCArIFwiKVwiICAgICAgLy8gY2hlY2tpbmcgZm9yIGZsYWdjb2xvciBjbGFzc1xuICAgICAgICApLmhhc0NsYXNzKFwiZmxhZ2NvbG9yXCIpKXtcbiAgICAgICAgICAgIHRoaXMuZmxhZ0J1dHRvbi5pbm5lckhUTUwgPSBcIlVuZmxhZyBRdWVzdGlvblwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLmZsYWdCdXR0b24uaW5uZXJIVE1MID0gXCJGbGFnIFF1ZXN0aW9uXCI7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJUaW1lZFF1ZXN0aW9uKCk7XG4gICAgICAgIHRoaXMuZW5zdXJlQnV0dG9uU2FmZXR5KCk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHVwIGV2ZW50cyBmb3IgbmF2aWdhdGlvblxuICAgIG5hdkJ0bkxpc3RlbmVycygpIHtcbiAgICAgICAgLy8gTmV4dCBhbmQgUHJldiBMaXN0ZW5lclxuICAgICAgICB0aGlzLnBhZ05hdkxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlTmV4dFByZXYuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gTnVtYmVyZWQgTGlzdGVuZXJcbiAgICAgICAgdGhpcy5xTnVtTGlzdC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgdGhpcy5oYW5kbGVOdW1iZXJlZE5hdi5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgdXAgZXZlbnQgZm9yIGZsYWdcbiAgICBmbGFnQnRuTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMuZmxhZ2dpbmdQbGFjZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgdGhpcy5oYW5kbGVGbGFnLmJpbmQodGhpcyksICAgICAvLyBjYWxscyB0aGlzIHRvIHRha2UgYWN0aW9uXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlclN1Ym1pdEJ1dHRvbigpIHtcbiAgICAgICAgdGhpcy5idXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAkKHRoaXMuYnV0dG9uQ29udGFpbmVyKS5hdHRyKHtcbiAgICAgICAgICAgIHN0eWxlOiBcInRleHQtYWxpZ246Y2VudGVyXCIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZpbmlzaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICQodGhpcy5maW5pc2hCdXR0b24pLmF0dHIoe1xuICAgICAgICAgICAgaWQ6IFwiZmluaXNoXCIsXG4gICAgICAgICAgICBjbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmluaXNoQnV0dG9uLnRleHRDb250ZW50ID0gXCJGaW5pc2ggRXhhbVwiO1xuICAgICAgICB0aGlzLmZpbmlzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNvbmZpcm0oXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNsaWNraW5nIE9LIG1lYW5zIHlvdSBhcmUgcmVhZHkgdG8gc3VibWl0IHlvdXIgYW5zd2VycyBhbmQgYXJlIGZpbmlzaGVkIHdpdGggdGhpcyBhc3Nlc3NtZW50LlwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5maW5pc2hBc3Nlc3NtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcy5mbGFnQnV0dG9uKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jb250cm9sRGl2LmFwcGVuZENoaWxkKHRoaXMuZmluaXNoQnV0dG9uKTtcbiAgICAgICAgJCh0aGlzLmZpbmlzaEJ1dHRvbikuaGlkZSgpO1xuICAgICAgICB0aGlzLnRpbWVkRGl2LmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uQ29udGFpbmVyKTtcbiAgICB9XG4gICAgZW5zdXJlQnV0dG9uU2FmZXR5KCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5Lmxlbmd0aCAhPSAxKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLnJpZ2h0Q29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJCh0aGlzLmxlZnRDb250YWluZXIpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCA+PVxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoIC0gMVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGggIT0gMSkge1xuICAgICAgICAgICAgICAgICQodGhpcy5sZWZ0Q29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJCh0aGlzLnJpZ2h0Q29udGFpbmVyKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggPiAwICYmXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4IDwgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoIC0gMVxuICAgICAgICApIHtcbiAgICAgICAgICAgICQodGhpcy5yaWdodENvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgICQodGhpcy5sZWZ0Q29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlckZlZWRiYWNrQ29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLnNjb3JlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBcIik7XG4gICAgICAgIHRoaXMuc2NvcmVEaXYuaWQgPSB0aGlzLmRpdmlkICsgXCJyZXN1bHRzXCI7XG4gICAgICAgIHRoaXMuc2NvcmVEaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLnNjb3JlRGl2KTtcbiAgICB9XG5cbiAgICBjcmVhdGVSZW5kZXJlZFF1ZXN0aW9uQXJyYXkoKSB7XG4gICAgICAgIC8vIHRoaXMgZmluZHMgYWxsIHRoZSBhc3Nlc3MgcXVlc3Rpb25zIGluIHRoaXMgdGltZWQgYXNzZXNzbWVudFxuICAgICAgICAvLyBXZSBuZWVkIHRvIG1ha2UgYSBsaXN0IG9mIGFsbCB0aGUgcXVlc3Rpb25zIHVwIGZyb250IHNvIHdlIGNhbiBzZXQgdXAgbmF2aWdhdGlvblxuICAgICAgICAvLyBidXQgd2UgZG8gbm90IHdhbnQgdG8gcmVuZGVyIHRoZSBxdWVzdGlvbnMgdW50aWwgdGhlIHN0dWRlbnQgaGFzIG5hdmlnYXRlZFxuICAgICAgICAvLyBBbHNvIGFkZHMgdGhlbSB0byB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVxuXG4gICAgICAgIC8vIHRvZG86ICBUaGlzIG5lZWRzIHRvIGJlIHVwZGF0ZWQgdG8gYWNjb3VudCBmb3IgdGhlIHJ1bmVzdG9uZSBkaXYgd3JhcHBlci5cblxuICAgICAgICAvLyBUbyBhY2NvbW1vZGF0ZSB0aGUgc2VsZWN0cXVlc3Rpb24gdHlwZSAtLSB3aGljaCBpcyBhc3luYyEgd2UgbmVlZCB0byB3cmFwXG4gICAgICAgIC8vIGFsbCBvZiB0aGlzIGluIGEgcHJvbWlzZSwgc28gdGhhdCB3ZSBkb24ndCBjb250aW51ZSB0byByZW5kZXIgdGhlIHRpbWVkXG4gICAgICAgIC8vIGV4YW0gdW50aWwgYWxsIG9mIHRoZSBxdWVzdGlvbnMgaGF2ZSBiZWVuIHJlYWxpemVkLlxuICAgICAgICB2YXIgb3B0cztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm5ld0NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG1wQ2hpbGQgPSB0aGlzLm5ld0NoaWxkcmVuW2ldO1xuICAgICAgICAgICAgb3B0cyA9IHtcbiAgICAgICAgICAgICAgICBzdGF0ZTogXCJwcmVwYXJlZFwiLFxuICAgICAgICAgICAgICAgIG9yaWc6IHRtcENoaWxkLFxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiB7fSxcbiAgICAgICAgICAgICAgICB1c2VSdW5lc3RvbmVTZXJ2aWNlczogZUJvb2tDb25maWcudXNlUnVuZXN0b25lU2VydmljZXMsXG4gICAgICAgICAgICAgICAgdGltZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgYXNzZXNzbWVudFRha2VuOiB0aGlzLnRha2VuLFxuICAgICAgICAgICAgICAgIHRpbWVkV3JhcHBlcjogdGhpcy5kaXZpZCxcbiAgICAgICAgICAgICAgICBpbml0QXR0ZW1wdHM6IDAsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCQodG1wQ2hpbGQpLmNoaWxkcmVuKFwiW2RhdGEtY29tcG9uZW50XVwiKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdG1wQ2hpbGQgPSAkKHRtcENoaWxkKS5jaGlsZHJlbihcIltkYXRhLWNvbXBvbmVudF1cIilbMF07XG4gICAgICAgICAgICAgICAgb3B0cy5vcmlnID0gdG1wQ2hpbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJCh0bXBDaGlsZCkuaXMoXCJbZGF0YS1jb21wb25lbnRdXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkucHVzaChvcHRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJhbmRvbWl6ZVJRQSgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5Lmxlbmd0aCxcbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlLFxuICAgICAgICAgICAgcmFuZG9tSW5kZXg7XG4gICAgICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLi4uXG4gICAgICAgIHdoaWxlIChjdXJyZW50SW5kZXggIT09IDApIHtcbiAgICAgICAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgY3VycmVudEluZGV4IC09IDE7XG4gICAgICAgICAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXG4gICAgICAgICAgICB0ZW1wb3JhcnlWYWx1ZSA9IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W2N1cnJlbnRJbmRleF07XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVtcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXhcbiAgICAgICAgICAgIF0gPSB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVtyYW5kb21JbmRleF07XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVtyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHJlbmRlclRpbWVkUXVlc3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ID49IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gc29tZXRpbWVzIHRoZSB1c2VyIGNsaWNrcyBpbiB0aGUgZXZlbnQgYXJlYSBmb3IgdGhlIHFOdW1MaXN0XG4gICAgICAgICAgICAvLyBCdXQgbWlzc2VzIGEgbnVtYmVyIGluIHRoYXQgY2FzZSB0aGUgdGV4dCBpcyB0aGUgY29uY2F0ZW5hdGlvblxuICAgICAgICAgICAgLy8gb2YgYWxsIHRoZSBudW1iZXJzIGluIHRoZSBsaXN0IVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIHRoZSByZW5kZXJlZFF1ZXN0aW9uQXJyYXkgdG8gc2VlIGlmIGl0IGhhcyBiZWVuIHJlbmRlcmVkLlxuICAgICAgICBsZXQgb3B0cyA9IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W3RoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXhdO1xuICAgICAgICBsZXQgY3VycmVudFF1ZXN0aW9uO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBvcHRzLnN0YXRlID09PSBcInByZXBhcmVkXCIgfHxcbiAgICAgICAgICAgIG9wdHMuc3RhdGUgPT09IFwiZm9ycmV2aWV3XCIgfHxcbiAgICAgICAgICAgIChvcHRzLnN0YXRlID09PSBcImJyb2tlbl9leGFtXCIgJiYgb3B0cy5pbml0QXR0ZW1wdHMgPCAzKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGxldCB0bXBDaGlsZCA9IG9wdHMub3JpZztcbiAgICAgICAgICAgIGlmICgkKHRtcENoaWxkKS5pcyhcIltkYXRhLWNvbXBvbmVudD1zZWxlY3RxdWVzdGlvbl1cIikpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kb25lICYmIG9wdHMuc3RhdGUgPT0gXCJwcmVwYXJlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleFxuICAgICAgICAgICAgICAgICAgICBdLnN0YXRlID0gXCJleGFtX2VuZGVkXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2VsZWN0T25lIGlzIGFzeW5jIGFuZCB3aWxsIHJlcGxhY2UgaXRzZWxmIGluIHRoaXMgYXJyYXkgd2l0aFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYWN0dWFsIHNlbGVjdGVkIHF1ZXN0aW9uXG4gICAgICAgICAgICAgICAgICAgIG9wdHMucnFhID0gdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdxID0gbmV3IFNlbGVjdE9uZShvcHRzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbjogbmV3cSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IG5ld3EuaW5pdGlhbGl6ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdHMuc3RhdGUgPT0gXCJicm9rZW5fZXhhbVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBicm9rZW4gY2xhc3MgZnJvbSB0aGlzIHF1ZXN0aW9uIGlmIHdlIGdldCBoZXJlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB1bCNwYWdlTnVtcyA+IHVsID4gbGk6ZXEoJHt0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4fSlgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5yZW1vdmVDbGFzcyhcImJyb2tlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5zdGF0ZSA9IFwiYnJva2VuX2V4YW1cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgIF0gPSBvcHRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYEVycm9yIGluaXRpYWxpemluZyBxdWVzdGlvbjogRGV0YWlscyAke2V9YFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJCh0bXBDaGlsZCkuaXMoXCJbZGF0YS1jb21wb25lbnRdXCIpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudEtpbmQgPSAkKHRtcENoaWxkKS5kYXRhKFwiY29tcG9uZW50XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W3RoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXhdID0ge1xuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbjogd2luZG93LmNvbXBvbmVudF9mYWN0b3J5W2NvbXBvbmVudEtpbmRdKG9wdHMpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAob3B0cy5zdGF0ZSA9PT0gXCJicm9rZW5fZXhhbVwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50UXVlc3Rpb24gPSB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheVt0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4XVxuICAgICAgICAgICAgLnF1ZXN0aW9uO1xuICAgICAgICBpZiAob3B0cy5zdGF0ZSA9PT0gXCJmb3JyZXZpZXdcIikge1xuICAgICAgICAgICAgYXdhaXQgY3VycmVudFF1ZXN0aW9uLmNoZWNrQ3VycmVudEFuc3dlcigpO1xuICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uLnJlbmRlckZlZWRiYWNrKCk7XG4gICAgICAgICAgICBjdXJyZW50UXVlc3Rpb24uZGlzYWJsZUludGVyYWN0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMudmlzaXRlZC5pbmNsdWRlcyh0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4KSkge1xuICAgICAgICAgICAgdGhpcy52aXNpdGVkLnB1c2godGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpdGVkLmxlbmd0aCA9PT0gdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgIXRoaXMuZG9uZVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLmZpbmlzaEJ1dHRvbikuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRRdWVzdGlvbi5jb250YWluZXJEaXYpIHtcbiAgICAgICAgICAgICQodGhpcy5zd2l0Y2hEaXYpLnJlcGxhY2VXaXRoKGN1cnJlbnRRdWVzdGlvbi5jb250YWluZXJEaXYpO1xuICAgICAgICAgICAgdGhpcy5zd2l0Y2hEaXYgPSBjdXJyZW50UXVlc3Rpb24uY29udGFpbmVyRGl2O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHRpbWVkIGNvbXBvbmVudCBoYXMgbGlzdGVuZXJzLCB0aG9zZSBtaWdodCBuZWVkIHRvIGJlIHJlaW5pdGlhbGl6ZWRcbiAgICAgICAgLy8gVGhpcyBmbGFnIHdpbGwgb25seSBiZSBzZXQgaW4gdGhlIGVsZW1lbnRzIHRoYXQgbmVlZCBpdC0taXQgd2lsbCBiZSB1bmRlZmluZWQgaW4gdGhlIG90aGVycyBhbmQgdGh1cyBldmFsdWF0ZSB0byBmYWxzZVxuICAgICAgICBpZiAoY3VycmVudFF1ZXN0aW9uLm5lZWRzUmVpbml0aWFsaXphdGlvbikge1xuICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uLnJlaW5pdGlhbGl6ZUxpc3RlbmVycyh0aGlzLnRha2VuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT09IFRpbWVyIGFuZCBjb250cm9sIEZ1bmN0aW9ucyA9PT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIGhhbmRsZVByZXZBc3Nlc3NtZW50KCkge1xuICAgICAgICAkKHRoaXMuc3RhcnRCdG4pLmhpZGUoKTtcbiAgICAgICAgJCh0aGlzLnBhdXNlQnRuKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgICQodGhpcy5maW5pc2hCdXR0b24pLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gMDtcbiAgICAgICAgdGhpcy5kb25lID0gMTtcbiAgICAgICAgLy8gc2hvd0ZlZWRiYWNrIHNhbmQgc2hvd1Jlc3VsdHMgc2hvdWxkIGJvdGggYmUgdHJ1ZSBiZWZvcmUgd2Ugc2hvdyB0aGVcbiAgICAgICAgLy8gcXVlc3Rpb25zIGFuZCB0aGVpciBzdGF0ZSBvZiBjb3JyZWN0bmVzcy5cbiAgICAgICAgaWYgKHRoaXMuc2hvd1Jlc3VsdHMgJiYgdGhpcy5zaG93RmVlZGJhY2spIHtcbiAgICAgICAgICAgICQodGhpcy50aW1lZERpdikuc2hvdygpO1xuICAgICAgICAgICAgdGhpcy5yZXN0b3JlQW5zd2VyZWRRdWVzdGlvbnMoKTsgLy8gZG8gbm90IGxvZyB0aGVzZSByZXN1bHRzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMucGF1c2VCdG4pLmhpZGUoKTtcbiAgICAgICAgICAgICQodGhpcy50aW1lckNvbnRhaW5lcikuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0QXNzZXNzbWVudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRha2VuKSB7XG4gICAgICAgICAgICAkKFwiI3JlbGF0aW9ucy1uZXh0XCIpLmhpZGUoKTsgLy8gaGlkZSB0aGUgbmV4dCBwYWdlIGJ1dHRvbiBmb3Igbm93XG4gICAgICAgICAgICAkKFwiI3JlbGF0aW9ucy1wcmV2XCIpLmhpZGUoKTsgLy8gaGlkZSB0aGUgcHJldmlvdXMgYnV0dG9uIGZvciBub3dcbiAgICAgICAgICAgICQodGhpcy5zdGFydEJ0bikuaGlkZSgpO1xuICAgICAgICAgICAgJCh0aGlzLnBhdXNlQnRuKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHRoaXMucnVubmluZyA9PT0gMCAmJiB0aGlzLnBhdXNlZCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucnVubmluZyA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzLnRpbWVkRGl2KS5zaG93KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ0Jvb2tFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiBcInRpbWVkRXhhbVwiLFxuICAgICAgICAgICAgICAgICAgICBhY3Q6IFwic3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgZGl2X2lkOiB0aGlzLmRpdmlkLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciB0aW1lU3RhbXAgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIHZhciBzdG9yYWdlT2JqID0ge1xuICAgICAgICAgICAgICAgICAgICBhbnN3ZXI6IFswLCAwLCB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGgsIDBdLFxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVTdGFtcCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZUtleSgpLFxuICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShzdG9yYWdlT2JqKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKHdpbmRvdykub24oXG4gICAgICAgICAgICAgICAgXCJiZWZvcmV1bmxvYWRcIixcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBhY3R1YWwgdmFsdWUgZ2V0cyBpZ25vcmVkIGJ5IG5ld2VyIGJyb3dzZXJzXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBsZWF2ZT8gIFlvdXIgd29yayB3aWxsIGJlIGxvc3QhIEFuZCB5b3Ugd2lsbCBuZWVkIHlvdXIgaW5zdHJ1Y3RvciB0byByZXNldCB0aGUgZXhhbSFcIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGxlYXZlPyAgWW91ciB3b3JrIHdpbGwgYmUgbG9zdCFcIjtcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBcInBhZ2VoaWRlXCIsXG4gICAgICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5kb25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZpbmlzaEFzc2Vzc21lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXhhbSBleGl0ZWQgYnkgbGVhdmluZyBwYWdlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVQcmV2QXNzZXNzbWVudCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhdXNlQXNzZXNzbWVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9uZSA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucnVubmluZyA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nQm9va0V2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IFwidGltZWRFeGFtXCIsXG4gICAgICAgICAgICAgICAgICAgIGFjdDogXCJwYXVzZVwiLFxuICAgICAgICAgICAgICAgICAgICBkaXZfaWQ6IHRoaXMuZGl2aWQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlZCA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZUJ0bi5pbm5lckhUTUwgPSBcIlJlc3VtZVwiO1xuICAgICAgICAgICAgICAgICQodGhpcy50aW1lZERpdikuaGlkZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ0Jvb2tFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiBcInRpbWVkRXhhbVwiLFxuICAgICAgICAgICAgICAgICAgICBhY3Q6IFwicmVzdW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIGRpdl9pZDogdGhpcy5kaXZpZCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VkID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmluY3JlbWVudCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VCdG4uaW5uZXJIVE1MID0gXCJQYXVzZVwiO1xuICAgICAgICAgICAgICAgICQodGhpcy50aW1lZERpdikuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd1RpbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLnNob3dUaW1lcikge1xuICAgICAgICAgICAgdmFyIG1pbnMgPSBNYXRoLmZsb29yKHRoaXMudGltZUxpbWl0IC8gNjApO1xuICAgICAgICAgICAgdmFyIHNlY3MgPSBNYXRoLmZsb29yKHRoaXMudGltZUxpbWl0KSAlIDYwO1xuICAgICAgICAgICAgdmFyIG1pbnNTdHJpbmcgPSBtaW5zO1xuICAgICAgICAgICAgdmFyIHNlY3NTdHJpbmcgPSBzZWNzO1xuICAgICAgICAgICAgaWYgKG1pbnMgPCAxMCkge1xuICAgICAgICAgICAgICAgIG1pbnNTdHJpbmcgPSBcIjBcIiArIG1pbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VjcyA8IDEwKSB7XG4gICAgICAgICAgICAgICAgc2Vjc1N0cmluZyA9IFwiMFwiICsgc2VjcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBiZWdpbm5pbmcgPSBcIlRpbWUgUmVtYWluaW5nICAgIFwiO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmxpbWl0ZWRUaW1lKSB7XG4gICAgICAgICAgICAgICAgYmVnaW5uaW5nID0gXCJUaW1lIFRha2VuICAgIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHRpbWVTdHJpbmcgPSBiZWdpbm5pbmcgKyBtaW5zU3RyaW5nICsgXCI6XCIgKyBzZWNzU3RyaW5nO1xuICAgICAgICAgICAgaWYgKHRoaXMuZG9uZSB8fCB0aGlzLnRha2VuKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRoaXMudGltZVRha2VuIC8gNjApO1xuICAgICAgICAgICAgICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcih0aGlzLnRpbWVUYWtlbiAlIDYwKTtcbiAgICAgICAgICAgICAgICBpZiAobWludXRlcyA8IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBcIjBcIiArIG1pbnV0ZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzZWNvbmRzIDwgMTApIHtcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kcyA9IFwiMFwiICsgc2Vjb25kcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGltZVN0cmluZyA9IFwiVGltZSB0YWtlbjogXCIgKyBtaW51dGVzICsgXCI6XCIgKyBzZWNvbmRzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50aW1lckNvbnRhaW5lci5pbm5lckhUTUwgPSB0aW1lU3RyaW5nO1xuICAgICAgICAgICAgdmFyIHRpbWVUaXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRpbWVUaXBcIik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSB0aW1lVGlwcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aW1lVGlwc1tpXS50aXRsZSA9IHRpbWVTdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMudGltZXJDb250YWluZXIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluY3JlbWVudCgpIHtcbiAgICAgICAgLy8gaWYgcnVubmluZyAobm90IHBhdXNlZCkgYW5kIG5vdCB0YWtlblxuICAgICAgICBpZiAodGhpcy5ydW5uaW5nID09PSAxICYmICF0aGlzLnRha2VuKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiBhIGJyb3dzZXIgbG9zZXMgZm9jdXMsIHNldFRpbWVvdXQgbWF5IG5vdCBiZSBjYWxsZWQgb24gdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHNjaGVkdWxlIGV4cGVjdGVkLiAgQnJvd3NlcnMgYXJlIGZyZWUgdG8gc2F2ZSBwb3dlciBieSBsZW5ndGhlbmluZ1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgaW50ZXJ2YWwgdG8gc29tZSBsb25nZXIgdGltZS4gIFNvIHdlIGNhbm5vdCBqdXN0IHN1YnRyYWN0IDFcbiAgICAgICAgICAgICAgICAgICAgLy8gZnJvbSB0aGUgdGltZUxpbWl0IHdlIG5lZWQgdG8gbWVhc3VyZSB0aGUgZWxhcHNlZCB0aW1lIGZyb20gdGhlIGxhc3RcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsbCB0byB0aGUgY3VycmVudCBjYWxsIGFuZCBzdWJ0cmFjdCB0aGF0IG51bWJlciBvZiBzZWNvbmRzLlxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5saW1pdGVkVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHRpbWUgbGltaXQsIGNvdW50IGRvd24gdG8gMFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lTGltaXQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZUxpbWl0IC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKChjdXJyZW50VGltZSAtIHRoaXMubGFzdFRpbWUpIC8gMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFbHNlIGNvdW50IHVwIHRvIGtlZXAgdHJhY2sgb2YgaG93IGxvbmcgaXQgdG9vayB0byBjb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lTGltaXQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZUxpbWl0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKChjdXJyZW50VGltZSAtIHRoaXMubGFzdFRpbWUpIC8gMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgICAgICAgICAgIGVCb29rQ29uZmlnLmVtYWlsICsgXCI6XCIgKyB0aGlzLmRpdmlkICsgXCItdGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lTGltaXRcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VGltZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aW1lTGltaXQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluY3JlbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmFuIG91dCBvZiB0aW1lXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMuc3RhcnRCdG4pLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzLmZpbmlzaEJ1dHRvbikuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb25lID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy50YWtlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVtYmVkIHRoZSBtZXNzYWdlIGluIHRoZSBwYWdlIC0tIGFuIGFsZXJ0IGFjdHVhbGx5IHByZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGFuc3dlcnMgZnJvbSBiZWluZyBzdWJtaXR0ZWQgYW5kIGlmIGEgc3R1ZGVudCBjbG9zZXMgdGhlaXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsYXB0b3AgdGhlbiB0aGUgYW5zd2VycyB3aWxsIG5vdCBiZSBzdWJtaXR0ZWQgZXZlciEgIEV2ZW4gd2hlbiB0aGV5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVvcGVuIHRoZSBsYXB0b3AgdGhlaXIgc2Vzc2lvbiBjb29raWUgaXMgbGlrZWx5IGludmFsaWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzcy5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNvcnJ5IGJ1dCB5b3UgcmFuIG91dCBvZiB0aW1lLiBZb3VyIGFuc3dlcnMgYXJlIGJlaW5nIHN1Ym1pdHRlZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbERpdi5hcHBlbmRDaGlsZChtZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaEFzc2Vzc21lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICAxMDAwXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3R5bGVFeGFtRWxlbWVudHMoKSB7XG4gICAgICAgIC8vIENoZWNrcyBpZiB0aGlzIGV4YW0gaGFzIGJlZW4gdGFrZW4gYmVmb3JlXG4gICAgICAgICQodGhpcy50aW1lckNvbnRhaW5lcikuY3NzKHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjUwJVwiLFxuICAgICAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiI0RGRjBEOFwiLFxuICAgICAgICAgICAgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkICNERkYwRDhcIixcbiAgICAgICAgICAgIFwiYm9yZGVyLXJhZGl1c1wiOiBcIjI1cHhcIixcbiAgICAgICAgfSk7XG4gICAgICAgICQodGhpcy5zY29yZURpdikuY3NzKHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjUwJVwiLFxuICAgICAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiI0RGRjBEOFwiLFxuICAgICAgICAgICAgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkICNERkYwRDhcIixcbiAgICAgICAgICAgIFwiYm9yZGVyLXJhZGl1c1wiOiBcIjI1cHhcIixcbiAgICAgICAgfSk7XG4gICAgICAgICQoXCIudG9vbHRpcFRpbWVcIikuY3NzKHtcbiAgICAgICAgICAgIG1hcmdpbjogXCIwXCIsXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjBcIixcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcImJsYWNrXCIsXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBmaW5pc2hBc3Nlc3NtZW50KCkge1xuICAgICAgICAkKFwiI3JlbGF0aW9ucy1uZXh0XCIpLnNob3coKTsgLy8gc2hvdyB0aGUgbmV4dCBwYWdlIGJ1dHRvbiBmb3Igbm93XG4gICAgICAgICQoXCIjcmVsYXRpb25zLXByZXZcIikuc2hvdygpOyAvLyBzaG93IHRoZSBwcmV2aW91cyBidXR0b24gZm9yIG5vd1xuICAgICAgICBpZiAoIXRoaXMuc2hvd0ZlZWRiYWNrKSB7XG4gICAgICAgICAgICAvLyBiamUgLSBjaGFuZ2VkIGZyb20gc2hvd1Jlc3VsdHNcbiAgICAgICAgICAgICQodGhpcy50aW1lZERpdikuaGlkZSgpO1xuICAgICAgICAgICAgJCh0aGlzLnBhdXNlQnRuKS5oaWRlKCk7XG4gICAgICAgICAgICAkKHRoaXMudGltZXJDb250YWluZXIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpbmRUaW1lVGFrZW4oKTtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gMDtcbiAgICAgICAgdGhpcy5kb25lID0gMTtcbiAgICAgICAgdGhpcy50YWtlbiA9IDE7XG4gICAgICAgIGF3YWl0IHRoaXMuZmluYWxpemVQcm9ibGVtcygpO1xuICAgICAgICB0aGlzLmNoZWNrU2NvcmUoKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5U2NvcmUoKTtcbiAgICAgICAgdGhpcy5zdG9yZVNjb3JlKCk7XG4gICAgICAgIHRoaXMubG9nU2NvcmUoKTtcbiAgICAgICAgJCh0aGlzLnBhdXNlQnRuKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuZmluaXNoQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgJCh3aW5kb3cpLm9mZihcImJlZm9yZXVubG9hZFwiKTtcbiAgICAgICAgLy8gdHVybiBvZmYgdGhlIHBhZ2VoaWRlIGxpc3RlbmVyXG4gICAgICAgIGxldCBhc3NpZ25tZW50X2lkID0gdGhpcy5kaXZpZDtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBqUXVlcnkuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiBlQm9va0NvbmZpZy5hcHAgKyBcIi9hc3NpZ25tZW50cy9zdHVkZW50X2F1dG9ncmFkZVwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcIkpTT05cIixcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRfaWQ6IGFzc2lnbm1lbnRfaWQsXG4gICAgICAgICAgICAgICAgICAgIGlzX3RpbWVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJldGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldGRhdGEuc3VjY2VzcyA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmV0ZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0b2dyYWRlciBjb21wbGV0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDIwMDApO1xuICAgIH1cblxuICAgIC8vIGZpbmFsaXplUHJvYmxlbXNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tXG4gICAgYXN5bmMgZmluYWxpemVQcm9ibGVtcygpIHtcbiAgICAgICAgLy8gQmVjYXVzZSB3ZSBoYXZlIHN1Ym1pdHRlZCBlYWNoIHF1ZXN0aW9uIGFzIHdlIG5hdmlnYXRlIHdlIG9ubHkgbmVlZCB0b1xuICAgICAgICAvLyBzZW5kIHRoZSBmaW5hbCB2ZXJzaW9uIG9mIHRoZSBxdWVzdGlvbiB0aGUgc3R1ZGVudCBpcyBvbiB3aGVuIHRoZXkgcHJlc3MgdGhlXG4gICAgICAgIC8vIGZpbmlzaCBleGFtIGJ1dHRvbi5cblxuICAgICAgICB2YXIgY3VycmVudFF1ZXN0aW9uID0gdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4XG4gICAgICAgIF0ucXVlc3Rpb247XG4gICAgICAgIGF3YWl0IGN1cnJlbnRRdWVzdGlvbi5jaGVja0N1cnJlbnRBbnN3ZXIoKTtcbiAgICAgICAgY3VycmVudFF1ZXN0aW9uLmxvZ0N1cnJlbnRBbnN3ZXIoKTtcbiAgICAgICAgY3VycmVudFF1ZXN0aW9uLnJlbmRlckZlZWRiYWNrKCk7XG4gICAgICAgIGN1cnJlbnRRdWVzdGlvbi5kaXNhYmxlSW50ZXJhY3Rpb24oKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudFF1ZXN0aW9uID0gdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbaV07XG4gICAgICAgICAgICAvLyBzZXQgdGhlIHN0YXRlIHRvIGZvcnJldmlldyBzbyB3ZSBrbm93IHRoYXQgZmVlZGJhY2sgbWF5IGJlIGFwcHJvcHJpYXRlXG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXN0aW9uLnN0YXRlICE9PSBcImJyb2tlbl9leGFtXCIpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVlc3Rpb24uc3RhdGUgPSBcImZvcnJldmlld1wiO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbi5xdWVzdGlvbi5kaXNhYmxlSW50ZXJhY3Rpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5zaG93RmVlZGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVRpbWVkRmVlZGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlc3RvcmVBbnN3ZXJlZFF1ZXN0aW9uc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHJlc3RvcmVBbnN3ZXJlZFF1ZXN0aW9ucygpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRRdWVzdGlvbiA9IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W2ldO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWVzdGlvbi5zdGF0ZSA9PT0gXCJwcmVwYXJlZFwiKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uLnN0YXRlID0gXCJmb3JyZXZpZXdcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGhpZGVUaW1lZEZlZWRiYWNrXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBoaWRlVGltZWRGZWVkYmFjaygpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRRdWVzdGlvbiA9IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5W2ldLnF1ZXN0aW9uO1xuICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uLmhpZGVGZWVkYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2hlY2tTY29yZVxuICAgIC8vIC0tLS0tLS0tLS1cbiAgICAvLyBUaGlzIGlzIGEgc2ltcGxlIGFsbCBvciBub3RoaW5nIHNjb3JlIG9mIG9uZSBwb2ludCBwZXIgcXVlc3Rpb24gZm9yXG4gICAgLy8gdGhhdCBpbmNsdWRlcyBvdXIgYmVzdCBndWVzcyBpZiBhIHF1ZXN0aW9uIHdhcyBza2lwcGVkLlxuICAgIGNoZWNrU2NvcmUoKSB7XG4gICAgICAgIHRoaXMuY29ycmVjdFN0ciA9IFwiXCI7XG4gICAgICAgIHRoaXMuc2tpcHBlZFN0ciA9IFwiXCI7XG4gICAgICAgIHRoaXMuaW5jb3JyZWN0U3RyID0gXCJcIjtcbiAgICAgICAgLy8gR2V0cyB0aGUgc2NvcmUgb2YgZWFjaCBwcm9ibGVtXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjb3JyZWN0ID0gdGhpcy5yZW5kZXJlZFF1ZXN0aW9uQXJyYXlbXG4gICAgICAgICAgICAgICAgaVxuICAgICAgICAgICAgXS5xdWVzdGlvbi5jaGVja0NvcnJlY3RUaW1lZCgpO1xuICAgICAgICAgICAgaWYgKGNvcnJlY3QgPT0gXCJUXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlKys7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0U3RyID0gdGhpcy5jb3JyZWN0U3RyICsgKGkgKyAxKSArIFwiLCBcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29ycmVjdCA9PSBcIkZcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5jb3JyZWN0Kys7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmNvcnJlY3RTdHIgPSB0aGlzLmluY29ycmVjdFN0ciArIChpICsgMSkgKyBcIiwgXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvcnJlY3QgPT09IG51bGwgfHwgY29ycmVjdCA9PT0gXCJJXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNraXBwZWQrKztcbiAgICAgICAgICAgICAgICB0aGlzLnNraXBwZWRTdHIgPSB0aGlzLnNraXBwZWRTdHIgKyAoaSArIDEpICsgXCIsIFwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpZ25vcmVkIHF1ZXN0aW9uOyBqdXN0IGRvIG5vdGhpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyByZW1vdmUgZXh0cmEgY29tbWEgYW5kIHNwYWNlIGF0IGVuZCBpZiBhbnlcbiAgICAgICAgaWYgKHRoaXMuY29ycmVjdFN0ci5sZW5ndGggPiAwKVxuICAgICAgICAgICAgdGhpcy5jb3JyZWN0U3RyID0gdGhpcy5jb3JyZWN0U3RyLnN1YnN0cmluZyhcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdFN0ci5sZW5ndGggLSAyXG4gICAgICAgICAgICApO1xuICAgICAgICBlbHNlIHRoaXMuY29ycmVjdFN0ciA9IFwiTm9uZVwiO1xuICAgICAgICBpZiAodGhpcy5za2lwcGVkU3RyLmxlbmd0aCA+IDApXG4gICAgICAgICAgICB0aGlzLnNraXBwZWRTdHIgPSB0aGlzLnNraXBwZWRTdHIuc3Vic3RyaW5nKFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgdGhpcy5za2lwcGVkU3RyLmxlbmd0aCAtIDJcbiAgICAgICAgICAgICk7XG4gICAgICAgIGVsc2UgdGhpcy5za2lwcGVkU3RyID0gXCJOb25lXCI7XG4gICAgICAgIGlmICh0aGlzLmluY29ycmVjdFN0ci5sZW5ndGggPiAwKVxuICAgICAgICAgICAgdGhpcy5pbmNvcnJlY3RTdHIgPSB0aGlzLmluY29ycmVjdFN0ci5zdWJzdHJpbmcoXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICB0aGlzLmluY29ycmVjdFN0ci5sZW5ndGggLSAyXG4gICAgICAgICAgICApO1xuICAgICAgICBlbHNlIHRoaXMuaW5jb3JyZWN0U3RyID0gXCJOb25lXCI7XG4gICAgfVxuICAgIGZpbmRUaW1lVGFrZW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmxpbWl0ZWRUaW1lKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVUYWtlbiA9IHRoaXMuc3RhcnRpbmdUaW1lIC0gdGhpcy50aW1lTGltaXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVUYWtlbiA9IHRoaXMudGltZUxpbWl0O1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0b3JlU2NvcmUoKSB7XG4gICAgICAgIHZhciBzdG9yYWdlX2FyciA9IFtdO1xuICAgICAgICBzdG9yYWdlX2Fyci5wdXNoKFxuICAgICAgICAgICAgdGhpcy5zY29yZSxcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdFN0cixcbiAgICAgICAgICAgIHRoaXMuaW5jb3JyZWN0LFxuICAgICAgICAgICAgdGhpcy5pbmNvcnJlY3RTdHIsXG4gICAgICAgICAgICB0aGlzLnNraXBwZWQsXG4gICAgICAgICAgICB0aGlzLnNraXBwZWRTdHIsXG4gICAgICAgICAgICB0aGlzLnRpbWVUYWtlblxuICAgICAgICApO1xuICAgICAgICB2YXIgdGltZVN0YW1wID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIHN0b3JhZ2VPYmogPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBhbnN3ZXI6IHN0b3JhZ2VfYXJyLFxuICAgICAgICAgICAgdGltZXN0YW1wOiB0aW1lU3RhbXAsXG4gICAgICAgIH0pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSgpLCBzdG9yYWdlT2JqKTtcbiAgICB9XG4gICAgbG9nU2NvcmUoKSB7XG4gICAgICAgIHRoaXMubG9nQm9va0V2ZW50KHtcbiAgICAgICAgICAgIGV2ZW50OiBcInRpbWVkRXhhbVwiLFxuICAgICAgICAgICAgYWN0OiBcImZpbmlzaFwiLFxuICAgICAgICAgICAgZGl2X2lkOiB0aGlzLmRpdmlkLFxuICAgICAgICAgICAgY29ycmVjdDogdGhpcy5zY29yZSxcbiAgICAgICAgICAgIGluY29ycmVjdDogdGhpcy5pbmNvcnJlY3QsXG4gICAgICAgICAgICBza2lwcGVkOiB0aGlzLnNraXBwZWQsXG4gICAgICAgICAgICB0aW1lOiB0aGlzLnRpbWVUYWtlbixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNob3VsZFVzZVNlcnZlcihkYXRhKSB7XG4gICAgICAgIC8vIFdlIG92ZXJyaWRlIHRoZSBSdW5lc3RvbmVCYXNlIHZlcnNpb24gYmVjYXVzZSB0aGVyZSBpcyBubyBcImNvcnJlY3RcIiBhdHRyaWJ1dGUsIGFuZCB0aGVyZSBhcmUgMiBwb3NzaWJsZSBsb2NhbFN0b3JhZ2Ugc2NoZW1hc1xuICAgICAgICAvLyAtLXdlIGFsc28gd2FudCB0byBkZWZhdWx0IHRvIGxvY2FsIHN0b3JhZ2UgYmVjYXVzZSBpdCBjb250YWlucyBtb3JlIGluZm9ybWF0aW9uIHNwZWNpZmljYWxseSB3aGljaCBxdWVzdGlvbnMgYXJlIGNvcnJlY3QsIGluY29ycmVjdCwgYW5kIHNraXBwZWQuXG4gICAgICAgIHZhciBzdG9yYWdlRGF0ZTtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xuICAgICAgICB2YXIgc3RvcmFnZU9iaiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KCkpO1xuICAgICAgICBpZiAoc3RvcmFnZU9iaiA9PT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgc3RvcmVkRGF0YSA9IEpTT04ucGFyc2Uoc3RvcmFnZU9iaikuYW5zd2VyO1xuICAgICAgICAgICAgaWYgKHN0b3JlZERhdGEubGVuZ3RoID09IDQpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuY29ycmVjdCA9PSBzdG9yZWREYXRhWzBdICYmXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuaW5jb3JyZWN0ID09IHN0b3JlZERhdGFbMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5za2lwcGVkID09IHN0b3JlZERhdGFbMl0gJiZcbiAgICAgICAgICAgICAgICAgICAgZGF0YS50aW1lVGFrZW4gPT0gc3RvcmVkRGF0YVszXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0b3JlZERhdGEubGVuZ3RoID09IDcpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuY29ycmVjdCA9PSBzdG9yZWREYXRhWzBdICYmXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuaW5jb3JyZWN0ID09IHN0b3JlZERhdGFbMl0gJiZcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5za2lwcGVkID09IHN0b3JlZERhdGFbNF0gJiZcbiAgICAgICAgICAgICAgICAgICAgZGF0YS50aW1lVGFrZW4gPT0gc3RvcmVkRGF0YVs2XVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIEluIHRoaXMgY2FzZSwgYmVjYXVzZSBsb2NhbCBzdG9yYWdlIGhhcyBtb3JlIGluZm8sIHdlIHdhbnQgdG8gdXNlIHRoYXQgaWYgaXQncyBjb25zaXN0ZW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RvcmFnZURhdGUgPSBuZXcgRGF0ZShKU09OLnBhcnNlKHN0b3JhZ2VPYmpbMV0pLnRpbWVzdGFtcCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLy8gZXJyb3Igd2hpbGUgcGFyc2luZzsgbGlrZWx5IGR1ZSB0byBiYWQgdmFsdWUgc3RvcmVkIGluIHN0b3JhZ2VcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KCkpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNlcnZlckRhdGUgPSBuZXcgRGF0ZShkYXRhLnRpbWVzdGFtcCk7XG4gICAgICAgIGlmIChzZXJ2ZXJEYXRlIDwgc3RvcmFnZURhdGUpIHtcbiAgICAgICAgICAgIHRoaXMubG9nU2NvcmUoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjaGVja0xvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgdmFyIGxlbiA9IGxvY2FsU3RvcmFnZS5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRha2VuID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RvcmVBbnN3ZXJzKFwiXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRha2VuID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGFrZW4gPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIHJlc3RvcmVBbnN3ZXJzKGRhdGEpIHtcbiAgICAgICAgdGhpcy50YWtlbiA9IDE7XG4gICAgICAgIHZhciB0bXBBcnI7XG4gICAgICAgIGlmIChkYXRhID09PSBcIlwiKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRtcEFyciA9IEpTT04ucGFyc2UoXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KCkpXG4gICAgICAgICAgICAgICAgKS5hbnN3ZXI7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAvLyBlcnJvciB3aGlsZSBwYXJzaW5nOyBsaWtlbHkgZHVlIHRvIGJhZCB2YWx1ZSBzdG9yZWQgaW4gc3RvcmFnZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRha2VuID0gMDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBQYXJzZSByZXN1bHRzIGZyb20gdGhlIGRhdGFiYXNlXG4gICAgICAgICAgICB0bXBBcnIgPSBbXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoZGF0YS5jb3JyZWN0KSxcbiAgICAgICAgICAgICAgICBwYXJzZUludChkYXRhLmluY29ycmVjdCksXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoZGF0YS5za2lwcGVkKSxcbiAgICAgICAgICAgICAgICBwYXJzZUludChkYXRhLnRpbWVUYWtlbiksXG4gICAgICAgICAgICAgICAgZGF0YS5yZXNldCxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICB0aGlzLnNldExvY2FsU3RvcmFnZSh0bXBBcnIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0bXBBcnIubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIC8vIEV4YW0gd2FzIHByZXZpb3VzbHkgcmVzZXRcbiAgICAgICAgICAgIHRoaXMucmVzZXQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50YWtlbiA9IDA7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRtcEFyci5sZW5ndGggPT0gNCkge1xuICAgICAgICAgICAgLy8gQWNjaWRlbnRhbCBSZWxvYWQgT1IgRGF0YWJhc2UgRW50cnlcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgPSB0bXBBcnJbMF07XG4gICAgICAgICAgICB0aGlzLmluY29ycmVjdCA9IHRtcEFyclsxXTtcbiAgICAgICAgICAgIHRoaXMuc2tpcHBlZCA9IHRtcEFyclsyXTtcbiAgICAgICAgICAgIHRoaXMudGltZVRha2VuID0gdG1wQXJyWzNdO1xuICAgICAgICB9IGVsc2UgaWYgKHRtcEFyci5sZW5ndGggPT0gNykge1xuICAgICAgICAgICAgLy8gTG9hZGVkIENvbXBsZXRlZCBFeGFtXG4gICAgICAgICAgICB0aGlzLnNjb3JlID0gdG1wQXJyWzBdO1xuICAgICAgICAgICAgdGhpcy5jb3JyZWN0U3RyID0gdG1wQXJyWzFdO1xuICAgICAgICAgICAgdGhpcy5pbmNvcnJlY3QgPSB0bXBBcnJbMl07XG4gICAgICAgICAgICB0aGlzLmluY29ycmVjdFN0ciA9IHRtcEFyclszXTtcbiAgICAgICAgICAgIHRoaXMuc2tpcHBlZCA9IHRtcEFycls0XTtcbiAgICAgICAgICAgIHRoaXMuc2tpcHBlZFN0ciA9IHRtcEFycls1XTtcbiAgICAgICAgICAgIHRoaXMudGltZVRha2VuID0gdG1wQXJyWzZdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gU2V0IGxvY2FsU3RvcmFnZSBpbiBjYXNlIG9mIFwiYWNjaWRlbnRhbFwiIHJlbG9hZFxuICAgICAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgICAgICB0aGlzLmluY29ycmVjdCA9IDA7XG4gICAgICAgICAgICB0aGlzLnNraXBwZWQgPSB0aGlzLnJlbmRlcmVkUXVlc3Rpb25BcnJheS5sZW5ndGg7XG4gICAgICAgICAgICB0aGlzLnRpbWVUYWtlbiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGFrZW4pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNraXBwZWQgPT09IHRoaXMucmVuZGVyZWRRdWVzdGlvbkFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ZlZWRiYWNrID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVByZXZBc3Nlc3NtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJUaW1lZFF1ZXN0aW9uKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheVNjb3JlKCk7XG4gICAgICAgIHRoaXMuc2hvd1RpbWUoKTtcbiAgICB9XG4gICAgc2V0TG9jYWxTdG9yYWdlKHBhcnNlZERhdGEpIHtcbiAgICAgICAgdmFyIHRpbWVTdGFtcCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHZhciBzdG9yYWdlT2JqID0ge1xuICAgICAgICAgICAgYW5zd2VyOiBwYXJzZWREYXRhLFxuICAgICAgICAgICAgdGltZXN0YW1wOiB0aW1lU3RhbXAsXG4gICAgICAgIH07XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VPYmopXG4gICAgICAgICk7XG4gICAgfVxuICAgIGRpc3BsYXlTY29yZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hvd1Jlc3VsdHMpIHtcbiAgICAgICAgICAgIHZhciBzY29yZVN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgbnVtUXVlc3Rpb25zO1xuICAgICAgICAgICAgdmFyIHBlcmNlbnRDb3JyZWN0O1xuICAgICAgICAgICAgLy8gaWYgd2UgaGF2ZSBzb21lIGluZm9ybWF0aW9uXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0U3RyLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgICAgICAgICB0aGlzLmluY29ycmVjdFN0ci5sZW5ndGggPiAwIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5za2lwcGVkU3RyLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHNjb3JlU3RyaW5nID0gYE51bSBDb3JyZWN0OiAke3RoaXMuc2NvcmV9LiBRdWVzdGlvbnM6ICR7dGhpcy5jb3JyZWN0U3RyfTxicj5OdW0gV3Jvbmc6ICR7dGhpcy5pbmNvcnJlY3R9LiBRdWVzdGlvbnM6ICR7dGhpcy5pbmNvcnJlY3RTdHJ9PGJyPk51bSBTa2lwcGVkOiAke3RoaXMuc2tpcHBlZH0uIFF1ZXN0aW9uczogJHt0aGlzLnNraXBwZWRTdHJ9PGJyPmA7XG4gICAgICAgICAgICAgICAgbnVtUXVlc3Rpb25zID0gdGhpcy5zY29yZSArIHRoaXMuaW5jb3JyZWN0ICsgdGhpcy5za2lwcGVkO1xuICAgICAgICAgICAgICAgIHBlcmNlbnRDb3JyZWN0ID0gKHRoaXMuc2NvcmUgLyBudW1RdWVzdGlvbnMpICogMTAwO1xuICAgICAgICAgICAgICAgIHNjb3JlU3RyaW5nICs9IFwiUGVyY2VudCBDb3JyZWN0OiBcIiArIHBlcmNlbnRDb3JyZWN0ICsgXCIlXCI7XG4gICAgICAgICAgICAgICAgJCh0aGlzLnNjb3JlRGl2KS5odG1sKHNjb3JlU3RyaW5nKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlRGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjb3JlU3RyaW5nID0gYE51bSBDb3JyZWN0OiAke3RoaXMuc2NvcmV9PGJyPk51bSBXcm9uZzogJHt0aGlzLmluY29ycmVjdH08YnI+TnVtIFNraXBwZWQ6ICR7dGhpcy5za2lwcGVkfTxicj5gO1xuICAgICAgICAgICAgICAgIG51bVF1ZXN0aW9ucyA9IHRoaXMuc2NvcmUgKyB0aGlzLmluY29ycmVjdCArIHRoaXMuc2tpcHBlZDtcbiAgICAgICAgICAgICAgICBwZXJjZW50Q29ycmVjdCA9ICh0aGlzLnNjb3JlIC8gbnVtUXVlc3Rpb25zKSAqIDEwMDtcbiAgICAgICAgICAgICAgICBzY29yZVN0cmluZyArPSBcIlBlcmNlbnQgQ29ycmVjdDogXCIgKyBwZXJjZW50Q29ycmVjdCArIFwiJVwiO1xuICAgICAgICAgICAgICAgICQodGhpcy5zY29yZURpdikuaHRtbChzY29yZVN0cmluZyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZURpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5oaWdobGlnaHROdW1iZXJlZExpc3QoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQodGhpcy5zY29yZURpdikuaHRtbChcbiAgICAgICAgICAgICAgICBcIlRoYW5rIHlvdSBmb3IgdGFraW5nIHRoZSBleGFtLiAgWW91ciBhbnN3ZXJzIGhhdmUgYmVlbiByZWNvcmRlZC5cIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuc2NvcmVEaXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoaWdobGlnaHROdW1iZXJlZExpc3QoKSB7XG4gICAgICAgIHZhciBjb3JyZWN0Q291bnQgPSB0aGlzLmNvcnJlY3RTdHI7XG4gICAgICAgIHZhciBpbmNvcnJlY3RDb3VudCA9IHRoaXMuaW5jb3JyZWN0U3RyO1xuICAgICAgICB2YXIgc2tpcHBlZENvdW50ID0gdGhpcy5za2lwcGVkU3RyO1xuICAgICAgICBjb3JyZWN0Q291bnQgPSBjb3JyZWN0Q291bnQucmVwbGFjZSgvIC9nLCBcIlwiKS5zcGxpdChcIixcIik7XG4gICAgICAgIGluY29ycmVjdENvdW50ID0gaW5jb3JyZWN0Q291bnQucmVwbGFjZSgvIC9nLCBcIlwiKS5zcGxpdChcIixcIik7XG4gICAgICAgIHNraXBwZWRDb3VudCA9IHNraXBwZWRDb3VudC5yZXBsYWNlKC8gL2csIFwiXCIpLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgJChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbnVtYmVyZWRCdG5zID0gJChcInVsI3BhZ2VOdW1zID4gdWwgPiBsaVwiKTtcbiAgICAgICAgICAgIGlmIChudW1iZXJlZEJ0bnMuaGFzQ2xhc3MoXCJhbnN3ZXJlZFwiKSkge1xuICAgICAgICAgICAgICAgIG51bWJlcmVkQnRucy5yZW1vdmVDbGFzcyhcImFuc3dlcmVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3JyZWN0Q291bnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVzdCA9IHBhcnNlSW50KGNvcnJlY3RDb3VudFtpXSkgLSAxO1xuICAgICAgICAgICAgICAgIG51bWJlcmVkQnRuc1xuICAgICAgICAgICAgICAgICAgICAuZXEocGFyc2VJbnQoY29ycmVjdENvdW50W2ldKSAtIDEpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImNvcnJlY3RDb3VudFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaW5jb3JyZWN0Q291bnQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBudW1iZXJlZEJ0bnNcbiAgICAgICAgICAgICAgICAgICAgLmVxKHBhcnNlSW50KGluY29ycmVjdENvdW50W2pdKSAtIDEpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImluY29ycmVjdENvdW50XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBza2lwcGVkQ291bnQubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICBudW1iZXJlZEJ0bnNcbiAgICAgICAgICAgICAgICAgICAgLmVxKHBhcnNlSW50KHNraXBwZWRDb3VudFtrXSkgLSAxKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJza2lwcGVkQ291bnRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT0gRnVuY3Rpb24gdGhhdCBjYWxscyB0aGUgY29uc3RydWN0b3JzIG9uIHBhZ2UgbG9hZCA9PT1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuJChkb2N1bWVudCkuYmluZChcInJ1bmVzdG9uZTpsb2dpbi1jb21wbGV0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIltkYXRhLWNvbXBvbmVudD10aW1lZEFzc2Vzc21lbnRdXCIpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIFRpbWVkTGlzdFt0aGlzLmlkXSA9IG5ldyBUaW1lZCh7XG4gICAgICAgICAgICBvcmlnOiB0aGlzLFxuICAgICAgICAgICAgdXNlUnVuZXN0b25lU2VydmljZXM6IGVCb29rQ29uZmlnLnVzZVJ1bmVzdG9uZVNlcnZpY2VzLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==