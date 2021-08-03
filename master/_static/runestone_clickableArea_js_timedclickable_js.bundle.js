(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_clickableArea_js_timedclickable_js"],{

/***/ 33873:
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./runestone/clickableArea/css/clickable.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".clickable {\r\n    cursor: pointer;\r\n}\r\n\r\n.clickable-clicked {\r\n    box-shadow: 0px 0px 2px 2px rgba(0,100,0,0.75);\r\n}\r\n\r\nspan.clickable-clicked {\r\n    background-color: yellow;\r\n    box-shadow: initial;\r\n}\r\n\r\n.clickable-clicked td {\r\n    background-color: #dad6c1;\r\n    box-shadow: initial;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n}\r\n\r\nth.clickable, td.clickable {\r\n    border: 1px solid black;\r\n}\r\n\r\ntd.clickable-clicked{\r\n    background-color: #dad6c1;\r\n    box-shadow: initial;\r\n}\r\n\r\ntd img {\r\n    margin: 5px;\r\n}\r\n\r\n.clickable-clicked th {\r\n    background-color: #dad6c1;\r\n    box-shadow: initial;\r\n}\r\n\r\nth.clickable-clicked{\r\n    background-color: #dad6c1;\r\n    box-shadow: initial;\r\n}\r\n\r\n.clickable-incorrect {\r\n    border: 1px solid red !important;\r\n    background-color: #f2dede !important;\r\n}\r\n\r\n.clickable-incorrect th {\r\n    border: 1px solid red !important;\r\n    background-color: #f2dede !important;\r\n}\r\n\r\n.clickable-incorrect td {\r\n    border: 1px solid red !important;\r\n    background-color: #f2dede !important;\r\n}\r\n\r\nimg.clickable-incorrect {\r\n    box-shadow: 0px 0px 2px 2px rgba(100,0,0,0.75);\r\n}\r\n", "",{"version":3,"sources":["webpack://./runestone/clickableArea/css/clickable.css"],"names":[],"mappings":"AAAA;IACI,eAAe;AACnB;;AAEA;IACI,8CAA8C;AAClD;;AAEA;IACI,wBAAwB;IACxB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,gCAAgC;IAChC,oCAAoC;AACxC;;AAEA;IACI,gCAAgC;IAChC,oCAAoC;AACxC;;AAEA;IACI,gCAAgC;IAChC,oCAAoC;AACxC;;AAEA;IACI,8CAA8C;AAClD","sourcesContent":[".clickable {\r\n    cursor: pointer;\r\n}\r\n\r\n.clickable-clicked {\r\n    box-shadow: 0px 0px 2px 2px rgba(0,100,0,0.75);\r\n}\r\n\r\nspan.clickable-clicked {\r\n    background-color: yellow;\r\n    box-shadow: initial;\r\n}\r\n\r\n.clickable-clicked td {\r\n    background-color: #dad6c1;\r\n    box-shadow: initial;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n}\r\n\r\nth.clickable, td.clickable {\r\n    border: 1px solid black;\r\n}\r\n\r\ntd.clickable-clicked{\r\n    background-color: #dad6c1;\r\n    box-shadow: initial;\r\n}\r\n\r\ntd img {\r\n    margin: 5px;\r\n}\r\n\r\n.clickable-clicked th {\r\n    background-color: #dad6c1;\r\n    box-shadow: initial;\r\n}\r\n\r\nth.clickable-clicked{\r\n    background-color: #dad6c1;\r\n    box-shadow: initial;\r\n}\r\n\r\n.clickable-incorrect {\r\n    border: 1px solid red !important;\r\n    background-color: #f2dede !important;\r\n}\r\n\r\n.clickable-incorrect th {\r\n    border: 1px solid red !important;\r\n    background-color: #f2dede !important;\r\n}\r\n\r\n.clickable-incorrect td {\r\n    border: 1px solid red !important;\r\n    background-color: #f2dede !important;\r\n}\r\n\r\nimg.clickable-incorrect {\r\n    box-shadow: 0px 0px 2px 2px rgba(100,0,0,0.75);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 35694:
/*!***************************************************!*\
  !*** ./runestone/clickableArea/css/clickable.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clickable_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./clickable.css */ 33873);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clickable_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clickable_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ 5464:
/*!*************************************************!*\
  !*** ./runestone/clickableArea/js/clickable.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CAList": () => (/* binding */ CAList),
/* harmony export */   "default": () => (/* binding */ ClickableArea)
/* harmony export */ });
/* harmony import */ var _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase.js */ 2568);
/* harmony import */ var _css_clickable_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/clickable.css */ 35694);
/*==========================================
=======     Master clickable.js     ========
============================================
===   This file contains the JS for the  ===
===  Runestone clickable area component. ===
============================================
===              Created by              ===
===           Isaiah Mayerchak           ===
===                7/1/15                ===
==========================================*/





var CAList = {}; // Object that contains all instances of ClickableArea objects

class ClickableArea extends _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(opts) {
        super(opts);
        var orig = opts.orig; // entire <div> element that will be replaced by new HTML
        this.origElem = orig;
        this.divid = orig.id;
        this.useRunestoneServices = opts.useRunestoneServices;
        this.clickableArray = []; // holds all clickable elements
        this.correctArray = []; // holds the IDs of all correct clickable span elements, used for eval
        this.incorrectArray = []; // holds IDs of all incorrect clickable span elements, used for eval
        //For use with Sphinx-rendered html
        this.isTable = false;
        if ($(this.origElem).data("cc") !== undefined) {
            if ($(this.origElem).is("[data-table]")) {
                this.isTable = true;
                this.ccArray = $(this.origElem).data("cc").split(";");
                this.ciArray = $(this.origElem).data("ci").split(";");
            } else {
                this.ccArray = $(this.origElem).data("cc").split(",");
                this.ciArray = $(this.origElem).data("ci").split(",");
            }
        }
        // For use in the recursive replace function
        this.clickIndex = 0; // Index of this.clickedIndexArray that we're checking against
        this.clickableCounter = 0; // Index of the current clickable element
        this.getQuestion();
        this.getFeedback();
        this.renderNewElements();
        this.caption = "Clickable";
        this.addCaption("runestone");
        this.checkServer("clickableArea", true);
    }
    /*===========================
    == Update basic attributes ==
    ===========================*/
    getQuestion() {
        for (var i = 0; i < this.origElem.childNodes.length; i++) {
            if ($(this.origElem.childNodes[i]).is("[data-question]")) {
                this.question = this.origElem.childNodes[i];
                break;
            }
        }
    }
    getFeedback() {
        this.feedback = "";
        for (var i = 0; i < this.origElem.childNodes.length; i++) {
            if ($(this.origElem.childNodes[i]).is("[data-feedback]")) {
                this.feedback = this.origElem.childNodes[i];
            }
        }
        if (this.feedback !== "") {
            // Get the feedback element out of the container if the user has defined feedback
            $(this.feedback).remove();
            this.feedback = this.feedback.innerHTML;
        }
    }
    /*===========================================
    ====   Functions generating final HTML   ====
    ===========================================*/
    renderNewElements() {
        // wrapper function for generating everything
        this.containerDiv = document.createElement("div");
        this.containerDiv.id = this.origElem.id;
        this.containerDiv.appendChild(this.question);
        $(this.containerDiv).addClass(this.origElem.getAttribute("class"));
        this.newDiv = document.createElement("div");
        var newContent = $(this.origElem).html();
        while (newContent[0] === "\n") {
            newContent = newContent.slice(1);
        }
        this.newDiv.innerHTML = newContent;
        this.containerDiv.appendChild(this.newDiv);
        this.createButtons();
        this.createFeedbackDiv();
        $(this.origElem).replaceWith(this.containerDiv);
    }
    createButtons() {
        this.submitButton = document.createElement("button"); // Check me button
        this.submitButton.textContent = "Check Me";
        $(this.submitButton).attr({
            class: "btn btn-success",
            name: "do answer",
            type: "button",
        });
        this.submitButton.onclick = function () {
            this.checkCurrentAnswer();
            this.logCurrentAnswer();
            this.renderFeedback();
        }.bind(this);
        this.containerDiv.appendChild(this.submitButton);
    }
    createFeedbackDiv() {
        this.feedBackDiv = document.createElement("div");
        this.containerDiv.appendChild(document.createElement("br"));
        this.containerDiv.appendChild(this.feedBackDiv);
    }
    /*===================================
    === Checking/restoring from storage ===
    ===================================*/
    restoreAnswers(data) {
        // Restore answers from storage retrieval done in RunestoneBase or from local storage
        if (data.answer !== undefined) {
            // if we got data from the server
            this.hasStoredAnswers = true;
            this.clickedIndexArray = data.answer.split(";");
        }
        if (this.ccArray === undefined) {
            this.modifyClickables(this.newDiv.childNodes);
        } else {
            // For use with Sphinx-rendered HTML
            this.ccCounter = 0;
            this.ccIndex = 0;
            this.ciIndex = 0;
            if (!this.isTable) {
                this.modifyViaCC(this.newDiv.children);
            } else {
                this.modifyTableViaCC(this.newDiv.children);
            }
        }
    }
    checkLocalStorage() {
        if (this.graderactive) {
            return;
        }
        var storageObj;
        // Gets previous answer data from local storage if it exists
        this.hasStoredAnswers = false;
        var len = localStorage.length;
        if (len > 0) {
            var ex = localStorage.getItem(this.localStorageKey());
            if (ex !== null) {
                this.hasStoredAnswers = true;
                try {
                    storageObj = JSON.parse(ex);
                    this.clickedIndexArray = storageObj.answer.split(";");
                } catch (err) {
                    // error while parsing; likely due to bad value stored in storage
                    console.log(err.message);
                    localStorage.removeItem(this.localStorageKey());
                    this.hasStoredAnswers = false;
                    this.restoreAnswers({});
                    return;
                }
                if (this.useRunestoneServices) {
                    // log answer to server
                    this.givenIndexArray = [];
                    for (var i = 0; i < this.clickableArray.length; i++) {
                        if (
                            $(this.clickableArray[i]).hasClass(
                                "clickable-clicked"
                            )
                        ) {
                            this.givenIndexArray.push(i);
                        }
                    }
                    this.logBookEvent({
                        event: "clickableArea",
                        act: this.clickedIndexArray.join(";"),
                        div_id: this.divid,
                        correct: storageObj.correct,
                    });
                }
            }
        }
        this.restoreAnswers({}); // pass empty object
    }
    setLocalStorage(data) {
        // Array of the indices of clicked elements is passed to local storage
        var answer;
        if (data.answer !== undefined) {
            // If we got data from the server, we can just use that
            answer = this.clickedIndexArray.join(";");
        } else {
            this.givenIndexArray = [];
            for (var i = 0; i < this.clickableArray.length; i++) {
                if ($(this.clickableArray[i]).hasClass("clickable-clicked")) {
                    this.givenIndexArray.push(i);
                }
            }
            answer = this.givenIndexArray.join(";");
        }
        var timeStamp = new Date();
        var correct = data.correct;
        var storageObject = {
            answer: answer,
            correct: correct,
            timestamp: timeStamp,
        };
        localStorage.setItem(
            this.localStorageKey(),
            JSON.stringify(storageObject)
        );
    }
    /*==========================
    === Auxilliary functions ===
    ==========================*/
    modifyClickables(childNodes) {
        // Strips the data-correct/data-incorrect labels and updates the correct/incorrect arrays
        for (var i = 0; i < childNodes.length; i++) {
            if (
                $(childNodes[i]).is("[data-correct]") ||
                $(childNodes[i]).is("[data-incorrect]")
            ) {
                this.manageNewClickable(childNodes[i]);
                if ($(childNodes[i]).is("[data-correct]")) {
                    $(childNodes[i]).removeAttr("data-correct");
                    this.correctArray.push(childNodes[i]);
                } else {
                    $(childNodes[i]).removeAttr("data-incorrect");
                    this.incorrectArray.push(childNodes[i]);
                }
            }
            if (childNodes[i].childNodes.length !== 0) {
                this.modifyClickables(childNodes[i].childNodes);
            }
        }
    }
    modifyViaCC(children) {
        for (var i = 0; i < children.length; i++) {
            if (children[i].children.length !== 0) {
                this.modifyViaCC(children[i].children);
            } else {
                this.ccCounter++;
                if (this.ccCounter === Math.floor(this.ccArray[this.ccIndex])) {
                    this.manageNewClickable(children[i]);
                    this.correctArray.push(children[i]);
                    this.ccIndex++;
                } else if (
                    this.ccCounter === Math.floor(this.ciArray[this.ciIndex])
                ) {
                    this.manageNewClickable(children[i]);
                    this.incorrectArray.push(children[i]);
                    this.ciIndex++;
                }
            }
        }
    }
    modifyTableViaCC(children) {
        // table version of modifyViaCC
        var tComponentArr = [];
        for (let i = 0; i < children.length; i++) {
            if (children[i].nodeName === "TABLE") {
                let tmp = children[i];
                for (let j = 0; j < tmp.children.length; j++) {
                    if (tmp.children[j].nodeName === "THEAD") {
                        tComponentArr.push(tmp.children[j]);
                    } else if (tmp.children[j].nodeName === "TBODY") {
                        tComponentArr.push(tmp.children[j]);
                    } else if (tmp.children[j].nodeName === "TFOOT") {
                        tComponentArr.push(tmp.children[j]);
                    }
                }
            }
        }
        for (var t = 0; t < tComponentArr.length; t++) {
            for (let i = 0; i < tComponentArr[t].children.length; i++) {
                this.ccCounter++;
                // First check if the entire row needs to be clickable
                if (
                    this.ccIndex < this.ccArray.length &&
                    this.ccCounter ===
                        Math.floor(this.ccArray[this.ccIndex].split(",")[0]) &&
                    Math.floor(this.ccArray[this.ccIndex].split(",")[1]) === 0
                ) {
                    this.manageNewClickable(tComponentArr[t].children[i]);
                    this.correctArray.push(tComponentArr[t].children[i]);
                    this.ccIndex++;
                } else if (
                    this.ciIndex < this.ciArray.length &&
                    this.ccCounter ===
                        Math.floor(this.ciArray[this.ciIndex].split(",")[0]) &&
                    Math.floor(this.ciArray[this.ciIndex].split(",")[1]) === 0
                ) {
                    this.manageNewClickable(tComponentArr[t].children[i]);
                    this.incorrectArray.push(tComponentArr[t].children[i]);
                    this.ciIndex++;
                } else {
                    // If not, check the individual data cells
                    for (
                        let j = 0;
                        j < tComponentArr[t].children[i].children.length;
                        j++
                    ) {
                        let tmp = j + 1;
                        if (
                            this.ccIndex < this.ccArray.length &&
                            tmp ===
                                Math.floor(
                                    this.ccArray[this.ccIndex].split(",")[1]
                                ) &&
                            this.ccCounter ===
                                Math.floor(
                                    this.ccArray[this.ccIndex].split(",")[0]
                                )
                        ) {
                            this.manageNewClickable(
                                tComponentArr[t].children[i].children[j]
                            );
                            this.correctArray.push(
                                tComponentArr[t].children[i].children[j]
                            );
                            this.ccIndex++;
                        } else if (
                            this.ciIndex < this.ciArray.length &&
                            tmp ===
                                Math.floor(
                                    this.ciArray[this.ciIndex].split(",")[1]
                                ) &&
                            this.ccCounter ===
                                Math.floor(
                                    this.ciArray[this.ciIndex].split(",")[0]
                                )
                        ) {
                            this.manageNewClickable(
                                tComponentArr[t].children[i].children[j]
                            );
                            this.incorrectArray.push(
                                tComponentArr[t].children[i].children[j]
                            );
                            this.ciIndex++;
                        }
                    }
                }
            }
        }
    }
    manageNewClickable(clickable) {
        // adds the "clickable" functionality
        $(clickable).addClass("clickable");
        if (this.hasStoredAnswers) {
            // Check if the element we're about to append to the pre was in local storage as clicked via its index
            if (
                this.clickedIndexArray[this.clickIndex].toString() ===
                this.clickableCounter.toString()
            ) {
                $(clickable).addClass("clickable-clicked");
                this.clickIndex++;
                if (this.clickIndex === this.clickedIndexArray.length) {
                    // Stop doing this if the index array is used up
                    this.hasStoredAnswers = false;
                }
            }
        }
        let self = this;
        clickable.onclick = function () {
            self.isAnswered = true;
            if ($(this).hasClass("clickable-clicked")) {
                $(this).removeClass("clickable-clicked");
                $(this).removeClass("clickable-incorrect");
            } else {
                $(this).addClass("clickable-clicked");
            }
        };
        this.clickableArray.push(clickable);
        this.clickableCounter++;
    }
    /*======================================
    == Evaluation and displaying feedback ==
    ======================================*/
    checkCurrentAnswer() {
        // Evaluation is done by iterating over the correct/incorrect arrays and checking by class
        this.correct = true;
        this.correctNum = 0;
        this.incorrectNum = 0;
        for (let i = 0; i < this.correctArray.length; i++) {
            if (!$(this.correctArray[i]).hasClass("clickable-clicked")) {
                this.correct = false;
            } else {
                this.correctNum++;
            }
        }
        for (let i = 0; i < this.incorrectArray.length; i++) {
            if ($(this.incorrectArray[i]).hasClass("clickable-clicked")) {
                this.correct = false;
                this.incorrectNum++;
            } else {
                $(this.incorrectArray[i]).removeClass("clickable-incorrect");
            }
        }
        this.percent =
            (this.correctNum - this.incorrectNum) / this.correctArray.length;
        this.setLocalStorage({ correct: this.correct ? "T" : "F" });
    }

    logCurrentAnswer() {
        this.logBookEvent({
            event: "clickableArea",
            act: this.givenIndexArray.join(";"),
            div_id: this.divid,
            correct: this.correct ? "T" : "F",
        });
    }

    renderFeedback() {
        if (this.correct) {
            $(this.feedBackDiv).html("You are Correct!");
            $(this.feedBackDiv).attr("class", "alert alert-info");
        } else {
            for (let i = 0; i < this.incorrectArray.length; i++) {
                if ($(this.incorrectArray[i]).hasClass("clickable-clicked")) {
                    $(this.incorrectArray[i]).addClass("clickable-incorrect");
                } else {
                    $(this.incorrectArray[i]).removeClass(
                        "clickable-incorrect"
                    );
                }
            }
            $(this.feedBackDiv).html(
                "Incorrect. You clicked on " +
                    this.correctNum +
                    " of the " +
                    this.correctArray.length.toString() +
                    " correct elements and " +
                    this.incorrectNum +
                    " of the " +
                    this.incorrectArray.length.toString() +
                    " incorrect elements. " +
                    this.feedback
            );
            $(this.feedBackDiv).attr("class", "alert alert-danger");
        }
    }

    disableInteraction() {
        for (var i = 0; i < this.clickableArray.length; i++) {
            $(this.clickableArray[i]).css("cursor", "initial");
            this.clickableArray[i].onclick = function () {
                return;
            };
        }
    }
}

/*=================================
== Find the custom HTML tags and ==
==   execute our code on them    ==
=================================*/
$(document).bind("runestone:login-complete", function () {
    $("[data-component=clickablearea]").each(function (index) {
        if ($(this).closest("[data-component=timedAssessment]").length == 0) {
            // If this element exists within a timed component, don't render it here
            try {
                CAList[this.id] = new ClickableArea({
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

/***/ 61581:
/*!******************************************************!*\
  !*** ./runestone/clickableArea/js/timedclickable.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TimedClickableArea)
/* harmony export */ });
/* harmony import */ var _clickable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickable.js */ 5464);


("use strict");

class TimedClickableArea extends _clickable_js__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(opts) {
        super(opts);
        this.restoreAnswers({});
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
        // Returns if the question was correct, incorrect, or skipped (return null in the last case)
        if (this.correctNum === 0 && this.incorrectNum === 0) {
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

    hideFeedback() {
        $(this.feedBackDiv).hide();
    }
}

if (typeof window.component_factory === "undefined") {
    window.component_factory = {};
}
window.component_factory.clickablearea = function (opts) {
    if (opts.timed) {
        return new TimedClickableArea(opts);
    }
    return new _clickable_js__WEBPACK_IMPORTED_MODULE_0__.default(opts);
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NsaWNrYWJsZUFyZWEvY3NzL2NsaWNrYWJsZS5jc3MiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jbGlja2FibGVBcmVhL2Nzcy9jbGlja2FibGUuY3NzPzI3NTIiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jbGlja2FibGVBcmVhL2pzL2NsaWNrYWJsZS5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NsaWNrYWJsZUFyZWEvanMvdGltZWRjbGlja2FibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0Esc0RBQXNELHdCQUF3QixLQUFLLDRCQUE0Qix1REFBdUQsS0FBSyxnQ0FBZ0MsaUNBQWlDLDRCQUE0QixLQUFLLCtCQUErQixrQ0FBa0MsNEJBQTRCLEtBQUssZUFBZSxrQ0FBa0MsS0FBSyxvQ0FBb0MsZ0NBQWdDLEtBQUssNkJBQTZCLGtDQUFrQyw0QkFBNEIsS0FBSyxnQkFBZ0Isb0JBQW9CLEtBQUssK0JBQStCLGtDQUFrQyw0QkFBNEIsS0FBSyw2QkFBNkIsa0NBQWtDLDRCQUE0QixLQUFLLDhCQUE4Qix5Q0FBeUMsNkNBQTZDLEtBQUssaUNBQWlDLHlDQUF5Qyw2Q0FBNkMsS0FBSyxpQ0FBaUMseUNBQXlDLDZDQUE2QyxLQUFLLGlDQUFpQyx1REFBdUQsS0FBSyxXQUFXLDRHQUE0RyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlB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QTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0RBQWE7QUFDNUIiLCJmaWxlIjoicnVuZXN0b25lX2NsaWNrYWJsZUFyZWFfanNfdGltZWRjbGlja2FibGVfanMuYnVuZGxlLmpzP3Y9NDAwODczMzg4MWMxMDk2ZDczOTUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jbGlja2FibGUge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jbGlja2FibGUtY2xpY2tlZCB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDJweCByZ2JhKDAsMTAwLDAsMC43NSk7XFxyXFxufVxcclxcblxcclxcbnNwYW4uY2xpY2thYmxlLWNsaWNrZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluaXRpYWw7XFxyXFxufVxcclxcblxcclxcbi5jbGlja2FibGUtY2xpY2tlZCB0ZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWQ2YzE7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluaXRpYWw7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG59XFxyXFxuXFxyXFxudGguY2xpY2thYmxlLCB0ZC5jbGlja2FibGUge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxudGQuY2xpY2thYmxlLWNsaWNrZWR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWQ2YzE7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluaXRpYWw7XFxyXFxufVxcclxcblxcclxcbnRkIGltZyB7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xpY2thYmxlLWNsaWNrZWQgdGgge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkNmMxO1xcclxcbiAgICBib3gtc2hhZG93OiBpbml0aWFsO1xcclxcbn1cXHJcXG5cXHJcXG50aC5jbGlja2FibGUtY2xpY2tlZHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZDZjMTtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5pdGlhbDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsaWNrYWJsZS1pbmNvcnJlY3Qge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQgIWltcG9ydGFudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZGVkZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xpY2thYmxlLWluY29ycmVjdCB0aCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5jbGlja2FibGUtaW5jb3JyZWN0IHRkIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmRlZGUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuaW1nLmNsaWNrYWJsZS1pbmNvcnJlY3Qge1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAycHggcmdiYSgxMDAsMCwwLDAuNzUpO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ydW5lc3RvbmUvY2xpY2thYmxlQXJlYS9jc3MvY2xpY2thYmxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLDhDQUE4QztBQUNsRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY2xpY2thYmxlIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xpY2thYmxlLWNsaWNrZWQge1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAycHggcmdiYSgwLDEwMCwwLDAuNzUpO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuLmNsaWNrYWJsZS1jbGlja2VkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcclxcbiAgICBib3gtc2hhZG93OiBpbml0aWFsO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xpY2thYmxlLWNsaWNrZWQgdGQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkNmMxO1xcclxcbiAgICBib3gtc2hhZG93OiBpbml0aWFsO1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB7XFxyXFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxufVxcclxcblxcclxcbnRoLmNsaWNrYWJsZSwgdGQuY2xpY2thYmxlIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbnRkLmNsaWNrYWJsZS1jbGlja2Vke1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkNmMxO1xcclxcbiAgICBib3gtc2hhZG93OiBpbml0aWFsO1xcclxcbn1cXHJcXG5cXHJcXG50ZCBpbWcge1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsaWNrYWJsZS1jbGlja2VkIHRoIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZDZjMTtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5pdGlhbDtcXHJcXG59XFxyXFxuXFxyXFxudGguY2xpY2thYmxlLWNsaWNrZWR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWQ2YzE7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluaXRpYWw7XFxyXFxufVxcclxcblxcclxcbi5jbGlja2FibGUtaW5jb3JyZWN0IHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmRlZGUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsaWNrYWJsZS1pbmNvcnJlY3QgdGgge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQgIWltcG9ydGFudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZGVkZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xpY2thYmxlLWluY29ycmVjdCB0ZCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbmltZy5jbGlja2FibGUtaW5jb3JyZWN0IHtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMnB4IHJnYmEoMTAwLDAsMCwwLjc1KTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2xpY2thYmxlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PT09PT0gICAgIE1hc3RlciBjbGlja2FibGUuanMgICAgID09PT09PT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PSAgIFRoaXMgZmlsZSBjb250YWlucyB0aGUgSlMgZm9yIHRoZSAgPT09XHJcbj09PSAgUnVuZXN0b25lIGNsaWNrYWJsZSBhcmVhIGNvbXBvbmVudC4gPT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PSAgICAgICAgICAgICAgQ3JlYXRlZCBieSAgICAgICAgICAgICAgPT09XHJcbj09PSAgICAgICAgICAgSXNhaWFoIE1heWVyY2hhayAgICAgICAgICAgPT09XHJcbj09PSAgICAgICAgICAgICAgICA3LzEvMTUgICAgICAgICAgICAgICAgPT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IFJ1bmVzdG9uZUJhc2UgZnJvbSBcIi4uLy4uL2NvbW1vbi9qcy9ydW5lc3RvbmViYXNlLmpzXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9jbGlja2FibGUuY3NzXCI7XHJcblxyXG5leHBvcnQgdmFyIENBTGlzdCA9IHt9OyAvLyBPYmplY3QgdGhhdCBjb250YWlucyBhbGwgaW5zdGFuY2VzIG9mIENsaWNrYWJsZUFyZWEgb2JqZWN0c1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xpY2thYmxlQXJlYSBleHRlbmRzIFJ1bmVzdG9uZUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xyXG4gICAgICAgIHN1cGVyKG9wdHMpO1xyXG4gICAgICAgIHZhciBvcmlnID0gb3B0cy5vcmlnOyAvLyBlbnRpcmUgPGRpdj4gZWxlbWVudCB0aGF0IHdpbGwgYmUgcmVwbGFjZWQgYnkgbmV3IEhUTUxcclxuICAgICAgICB0aGlzLm9yaWdFbGVtID0gb3JpZztcclxuICAgICAgICB0aGlzLmRpdmlkID0gb3JpZy5pZDtcclxuICAgICAgICB0aGlzLnVzZVJ1bmVzdG9uZVNlcnZpY2VzID0gb3B0cy51c2VSdW5lc3RvbmVTZXJ2aWNlcztcclxuICAgICAgICB0aGlzLmNsaWNrYWJsZUFycmF5ID0gW107IC8vIGhvbGRzIGFsbCBjbGlja2FibGUgZWxlbWVudHNcclxuICAgICAgICB0aGlzLmNvcnJlY3RBcnJheSA9IFtdOyAvLyBob2xkcyB0aGUgSURzIG9mIGFsbCBjb3JyZWN0IGNsaWNrYWJsZSBzcGFuIGVsZW1lbnRzLCB1c2VkIGZvciBldmFsXHJcbiAgICAgICAgdGhpcy5pbmNvcnJlY3RBcnJheSA9IFtdOyAvLyBob2xkcyBJRHMgb2YgYWxsIGluY29ycmVjdCBjbGlja2FibGUgc3BhbiBlbGVtZW50cywgdXNlZCBmb3IgZXZhbFxyXG4gICAgICAgIC8vRm9yIHVzZSB3aXRoIFNwaGlueC1yZW5kZXJlZCBodG1sXHJcbiAgICAgICAgdGhpcy5pc1RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbSkuZGF0YShcImNjXCIpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbSkuaXMoXCJbZGF0YS10YWJsZV1cIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNjQXJyYXkgPSAkKHRoaXMub3JpZ0VsZW0pLmRhdGEoXCJjY1wiKS5zcGxpdChcIjtcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNpQXJyYXkgPSAkKHRoaXMub3JpZ0VsZW0pLmRhdGEoXCJjaVwiKS5zcGxpdChcIjtcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNjQXJyYXkgPSAkKHRoaXMub3JpZ0VsZW0pLmRhdGEoXCJjY1wiKS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNpQXJyYXkgPSAkKHRoaXMub3JpZ0VsZW0pLmRhdGEoXCJjaVwiKS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRm9yIHVzZSBpbiB0aGUgcmVjdXJzaXZlIHJlcGxhY2UgZnVuY3Rpb25cclxuICAgICAgICB0aGlzLmNsaWNrSW5kZXggPSAwOyAvLyBJbmRleCBvZiB0aGlzLmNsaWNrZWRJbmRleEFycmF5IHRoYXQgd2UncmUgY2hlY2tpbmcgYWdhaW5zdFxyXG4gICAgICAgIHRoaXMuY2xpY2thYmxlQ291bnRlciA9IDA7IC8vIEluZGV4IG9mIHRoZSBjdXJyZW50IGNsaWNrYWJsZSBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5nZXRRdWVzdGlvbigpO1xyXG4gICAgICAgIHRoaXMuZ2V0RmVlZGJhY2soKTtcclxuICAgICAgICB0aGlzLnJlbmRlck5ld0VsZW1lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5jYXB0aW9uID0gXCJDbGlja2FibGVcIjtcclxuICAgICAgICB0aGlzLmFkZENhcHRpb24oXCJydW5lc3RvbmVcIik7XHJcbiAgICAgICAgdGhpcy5jaGVja1NlcnZlcihcImNsaWNrYWJsZUFyZWFcIiwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgPT0gVXBkYXRlIGJhc2ljIGF0dHJpYnV0ZXMgPT1cclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICBnZXRRdWVzdGlvbigpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3JpZ0VsZW0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzLm9yaWdFbGVtLmNoaWxkTm9kZXNbaV0pLmlzKFwiW2RhdGEtcXVlc3Rpb25dXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uID0gdGhpcy5vcmlnRWxlbS5jaGlsZE5vZGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRGZWVkYmFjaygpIHtcclxuICAgICAgICB0aGlzLmZlZWRiYWNrID0gXCJcIjtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3JpZ0VsZW0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzLm9yaWdFbGVtLmNoaWxkTm9kZXNbaV0pLmlzKFwiW2RhdGEtZmVlZGJhY2tdXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWRiYWNrID0gdGhpcy5vcmlnRWxlbS5jaGlsZE5vZGVzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmZlZWRiYWNrICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgZmVlZGJhY2sgZWxlbWVudCBvdXQgb2YgdGhlIGNvbnRhaW5lciBpZiB0aGUgdXNlciBoYXMgZGVmaW5lZCBmZWVkYmFja1xyXG4gICAgICAgICAgICAkKHRoaXMuZmVlZGJhY2spLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmZlZWRiYWNrID0gdGhpcy5mZWVkYmFjay5pbm5lckhUTUw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICA9PT09ICAgRnVuY3Rpb25zIGdlbmVyYXRpbmcgZmluYWwgSFRNTCAgID09PT1cclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgcmVuZGVyTmV3RWxlbWVudHMoKSB7XHJcbiAgICAgICAgLy8gd3JhcHBlciBmdW5jdGlvbiBmb3IgZ2VuZXJhdGluZyBldmVyeXRoaW5nXHJcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmlkID0gdGhpcy5vcmlnRWxlbS5pZDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLnF1ZXN0aW9uKTtcclxuICAgICAgICAkKHRoaXMuY29udGFpbmVyRGl2KS5hZGRDbGFzcyh0aGlzLm9yaWdFbGVtLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpKTtcclxuICAgICAgICB0aGlzLm5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdmFyIG5ld0NvbnRlbnQgPSAkKHRoaXMub3JpZ0VsZW0pLmh0bWwoKTtcclxuICAgICAgICB3aGlsZSAobmV3Q29udGVudFswXSA9PT0gXCJcXG5cIikge1xyXG4gICAgICAgICAgICBuZXdDb250ZW50ID0gbmV3Q29udGVudC5zbGljZSgxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5uZXdEaXYuaW5uZXJIVE1MID0gbmV3Q29udGVudDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLm5ld0Rpdik7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVCdXR0b25zKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVGZWVkYmFja0RpdigpO1xyXG4gICAgICAgICQodGhpcy5vcmlnRWxlbSkucmVwbGFjZVdpdGgodGhpcy5jb250YWluZXJEaXYpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlQnV0dG9ucygpIHtcclxuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IC8vIENoZWNrIG1lIGJ1dHRvblxyXG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDaGVjayBNZVwiO1xyXG4gICAgICAgICQodGhpcy5zdWJtaXRCdXR0b24pLmF0dHIoe1xyXG4gICAgICAgICAgICBjbGFzczogXCJidG4gYnRuLXN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgbmFtZTogXCJkbyBhbnN3ZXJcIixcclxuICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrQ3VycmVudEFuc3dlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ0N1cnJlbnRBbnN3ZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJGZWVkYmFjaygpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLnN1Ym1pdEJ1dHRvbik7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVGZWVkYmFja0RpdigpIHtcclxuICAgICAgICB0aGlzLmZlZWRCYWNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRoaXMuZmVlZEJhY2tEaXYpO1xyXG4gICAgfVxyXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgPT09IENoZWNraW5nL3Jlc3RvcmluZyBmcm9tIHN0b3JhZ2UgPT09XHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICByZXN0b3JlQW5zd2VycyhkYXRhKSB7XHJcbiAgICAgICAgLy8gUmVzdG9yZSBhbnN3ZXJzIGZyb20gc3RvcmFnZSByZXRyaWV2YWwgZG9uZSBpbiBSdW5lc3RvbmVCYXNlIG9yIGZyb20gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgIGlmIChkYXRhLmFuc3dlciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIHdlIGdvdCBkYXRhIGZyb20gdGhlIHNlcnZlclxyXG4gICAgICAgICAgICB0aGlzLmhhc1N0b3JlZEFuc3dlcnMgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNsaWNrZWRJbmRleEFycmF5ID0gZGF0YS5hbnN3ZXIuc3BsaXQoXCI7XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jY0FycmF5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RpZnlDbGlja2FibGVzKHRoaXMubmV3RGl2LmNoaWxkTm9kZXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEZvciB1c2Ugd2l0aCBTcGhpbngtcmVuZGVyZWQgSFRNTFxyXG4gICAgICAgICAgICB0aGlzLmNjQ291bnRlciA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY2NJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY2lJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1RhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGlmeVZpYUNDKHRoaXMubmV3RGl2LmNoaWxkcmVuKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kaWZ5VGFibGVWaWFDQyh0aGlzLm5ld0Rpdi5jaGlsZHJlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGVja0xvY2FsU3RvcmFnZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5ncmFkZXJhY3RpdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3RvcmFnZU9iajtcclxuICAgICAgICAvLyBHZXRzIHByZXZpb3VzIGFuc3dlciBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZSBpZiBpdCBleGlzdHNcclxuICAgICAgICB0aGlzLmhhc1N0b3JlZEFuc3dlcnMgPSBmYWxzZTtcclxuICAgICAgICB2YXIgbGVuID0gbG9jYWxTdG9yYWdlLmxlbmd0aDtcclxuICAgICAgICBpZiAobGVuID4gMCkge1xyXG4gICAgICAgICAgICB2YXIgZXggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSgpKTtcclxuICAgICAgICAgICAgaWYgKGV4ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhc1N0b3JlZEFuc3dlcnMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yYWdlT2JqID0gSlNPTi5wYXJzZShleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGlja2VkSW5kZXhBcnJheSA9IHN0b3JhZ2VPYmouYW5zd2VyLnNwbGl0KFwiO1wiKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVycm9yIHdoaWxlIHBhcnNpbmc7IGxpa2VseSBkdWUgdG8gYmFkIHZhbHVlIHN0b3JlZCBpbiBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzU3RvcmVkQW5zd2VycyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdG9yZUFuc3dlcnMoe30pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZVJ1bmVzdG9uZVNlcnZpY2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbG9nIGFuc3dlciB0byBzZXJ2ZXJcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdpdmVuSW5kZXhBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jbGlja2FibGVBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMuY2xpY2thYmxlQXJyYXlbaV0pLmhhc0NsYXNzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2thYmxlLWNsaWNrZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2l2ZW5JbmRleEFycmF5LnB1c2goaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dCb29rRXZlbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudDogXCJjbGlja2FibGVBcmVhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdDogdGhpcy5jbGlja2VkSW5kZXhBcnJheS5qb2luKFwiO1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2X2lkOiB0aGlzLmRpdmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JyZWN0OiBzdG9yYWdlT2JqLmNvcnJlY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXN0b3JlQW5zd2Vycyh7fSk7IC8vIHBhc3MgZW1wdHkgb2JqZWN0XHJcbiAgICB9XHJcbiAgICBzZXRMb2NhbFN0b3JhZ2UoZGF0YSkge1xyXG4gICAgICAgIC8vIEFycmF5IG9mIHRoZSBpbmRpY2VzIG9mIGNsaWNrZWQgZWxlbWVudHMgaXMgcGFzc2VkIHRvIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICB2YXIgYW5zd2VyO1xyXG4gICAgICAgIGlmIChkYXRhLmFuc3dlciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIC8vIElmIHdlIGdvdCBkYXRhIGZyb20gdGhlIHNlcnZlciwgd2UgY2FuIGp1c3QgdXNlIHRoYXRcclxuICAgICAgICAgICAgYW5zd2VyID0gdGhpcy5jbGlja2VkSW5kZXhBcnJheS5qb2luKFwiO1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdpdmVuSW5kZXhBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2xpY2thYmxlQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMuY2xpY2thYmxlQXJyYXlbaV0pLmhhc0NsYXNzKFwiY2xpY2thYmxlLWNsaWNrZWRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdpdmVuSW5kZXhBcnJheS5wdXNoKGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFuc3dlciA9IHRoaXMuZ2l2ZW5JbmRleEFycmF5LmpvaW4oXCI7XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdGltZVN0YW1wID0gbmV3IERhdGUoKTtcclxuICAgICAgICB2YXIgY29ycmVjdCA9IGRhdGEuY29ycmVjdDtcclxuICAgICAgICB2YXIgc3RvcmFnZU9iamVjdCA9IHtcclxuICAgICAgICAgICAgYW5zd2VyOiBhbnN3ZXIsXHJcbiAgICAgICAgICAgIGNvcnJlY3Q6IGNvcnJlY3QsXHJcbiAgICAgICAgICAgIHRpbWVzdGFtcDogdGltZVN0YW1wLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlS2V5KCksXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VPYmplY3QpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgID09PSBBdXhpbGxpYXJ5IGZ1bmN0aW9ucyA9PT1cclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgIG1vZGlmeUNsaWNrYWJsZXMoY2hpbGROb2Rlcykge1xyXG4gICAgICAgIC8vIFN0cmlwcyB0aGUgZGF0YS1jb3JyZWN0L2RhdGEtaW5jb3JyZWN0IGxhYmVscyBhbmQgdXBkYXRlcyB0aGUgY29ycmVjdC9pbmNvcnJlY3QgYXJyYXlzXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICQoY2hpbGROb2Rlc1tpXSkuaXMoXCJbZGF0YS1jb3JyZWN0XVwiKSB8fFxyXG4gICAgICAgICAgICAgICAgJChjaGlsZE5vZGVzW2ldKS5pcyhcIltkYXRhLWluY29ycmVjdF1cIilcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hbmFnZU5ld0NsaWNrYWJsZShjaGlsZE5vZGVzW2ldKTtcclxuICAgICAgICAgICAgICAgIGlmICgkKGNoaWxkTm9kZXNbaV0pLmlzKFwiW2RhdGEtY29ycmVjdF1cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKGNoaWxkTm9kZXNbaV0pLnJlbW92ZUF0dHIoXCJkYXRhLWNvcnJlY3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0QXJyYXkucHVzaChjaGlsZE5vZGVzW2ldKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChjaGlsZE5vZGVzW2ldKS5yZW1vdmVBdHRyKFwiZGF0YS1pbmNvcnJlY3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmNvcnJlY3RBcnJheS5wdXNoKGNoaWxkTm9kZXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVzW2ldLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGlmeUNsaWNrYWJsZXMoY2hpbGROb2Rlc1tpXS5jaGlsZE5vZGVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1vZGlmeVZpYUNDKGNoaWxkcmVuKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGRyZW5baV0uY2hpbGRyZW4ubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGlmeVZpYUNDKGNoaWxkcmVuW2ldLmNoaWxkcmVuKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2NDb3VudGVyKys7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jY0NvdW50ZXIgPT09IE1hdGguZmxvb3IodGhpcy5jY0FycmF5W3RoaXMuY2NJbmRleF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYW5hZ2VOZXdDbGlja2FibGUoY2hpbGRyZW5baV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdEFycmF5LnB1c2goY2hpbGRyZW5baV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2NJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNjQ291bnRlciA9PT0gTWF0aC5mbG9vcih0aGlzLmNpQXJyYXlbdGhpcy5jaUluZGV4XSlcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFuYWdlTmV3Q2xpY2thYmxlKGNoaWxkcmVuW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluY29ycmVjdEFycmF5LnB1c2goY2hpbGRyZW5baV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2lJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW9kaWZ5VGFibGVWaWFDQyhjaGlsZHJlbikge1xyXG4gICAgICAgIC8vIHRhYmxlIHZlcnNpb24gb2YgbW9kaWZ5VmlhQ0NcclxuICAgICAgICB2YXIgdENvbXBvbmVudEFyciA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuW2ldLm5vZGVOYW1lID09PSBcIlRBQkxFXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0bXAgPSBjaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdG1wLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRtcC5jaGlsZHJlbltqXS5ub2RlTmFtZSA9PT0gXCJUSEVBRFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRDb21wb25lbnRBcnIucHVzaCh0bXAuY2hpbGRyZW5bal0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG1wLmNoaWxkcmVuW2pdLm5vZGVOYW1lID09PSBcIlRCT0RZXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdENvbXBvbmVudEFyci5wdXNoKHRtcC5jaGlsZHJlbltqXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0bXAuY2hpbGRyZW5bal0ubm9kZU5hbWUgPT09IFwiVEZPT1RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Q29tcG9uZW50QXJyLnB1c2godG1wLmNoaWxkcmVuW2pdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCB0Q29tcG9uZW50QXJyLmxlbmd0aDsgdCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdENvbXBvbmVudEFyclt0XS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jY0NvdW50ZXIrKztcclxuICAgICAgICAgICAgICAgIC8vIEZpcnN0IGNoZWNrIGlmIHRoZSBlbnRpcmUgcm93IG5lZWRzIHRvIGJlIGNsaWNrYWJsZVxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2NJbmRleCA8IHRoaXMuY2NBcnJheS5sZW5ndGggJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNjQ291bnRlciA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcih0aGlzLmNjQXJyYXlbdGhpcy5jY0luZGV4XS5zcGxpdChcIixcIilbMF0pICYmXHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcih0aGlzLmNjQXJyYXlbdGhpcy5jY0luZGV4XS5zcGxpdChcIixcIilbMV0pID09PSAwXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hbmFnZU5ld0NsaWNrYWJsZSh0Q29tcG9uZW50QXJyW3RdLmNoaWxkcmVuW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RBcnJheS5wdXNoKHRDb21wb25lbnRBcnJbdF0uY2hpbGRyZW5baV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2NJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNpSW5kZXggPCB0aGlzLmNpQXJyYXkubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jY0NvdW50ZXIgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IodGhpcy5jaUFycmF5W3RoaXMuY2lJbmRleF0uc3BsaXQoXCIsXCIpWzBdKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IodGhpcy5jaUFycmF5W3RoaXMuY2lJbmRleF0uc3BsaXQoXCIsXCIpWzFdKSA9PT0gMFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYW5hZ2VOZXdDbGlja2FibGUodENvbXBvbmVudEFyclt0XS5jaGlsZHJlbltpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmNvcnJlY3RBcnJheS5wdXNoKHRDb21wb25lbnRBcnJbdF0uY2hpbGRyZW5baV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2lJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBub3QsIGNoZWNrIHRoZSBpbmRpdmlkdWFsIGRhdGEgY2VsbHNcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGogPCB0Q29tcG9uZW50QXJyW3RdLmNoaWxkcmVuW2ldLmNoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaisrXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0bXAgPSBqICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jY0luZGV4IDwgdGhpcy5jY0FycmF5Lmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG1wID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2NBcnJheVt0aGlzLmNjSW5kZXhdLnNwbGl0KFwiLFwiKVsxXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2NDb3VudGVyID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2NBcnJheVt0aGlzLmNjSW5kZXhdLnNwbGl0KFwiLFwiKVswXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hbmFnZU5ld0NsaWNrYWJsZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Q29tcG9uZW50QXJyW3RdLmNoaWxkcmVuW2ldLmNoaWxkcmVuW2pdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0QXJyYXkucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Q29tcG9uZW50QXJyW3RdLmNoaWxkcmVuW2ldLmNoaWxkcmVuW2pdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jY0luZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNpSW5kZXggPCB0aGlzLmNpQXJyYXkubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXAgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaUFycmF5W3RoaXMuY2lJbmRleF0uc3BsaXQoXCIsXCIpWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jY0NvdW50ZXIgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaUFycmF5W3RoaXMuY2lJbmRleF0uc3BsaXQoXCIsXCIpWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFuYWdlTmV3Q2xpY2thYmxlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRDb21wb25lbnRBcnJbdF0uY2hpbGRyZW5baV0uY2hpbGRyZW5bal1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluY29ycmVjdEFycmF5LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdENvbXBvbmVudEFyclt0XS5jaGlsZHJlbltpXS5jaGlsZHJlbltqXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2lJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWFuYWdlTmV3Q2xpY2thYmxlKGNsaWNrYWJsZSkge1xyXG4gICAgICAgIC8vIGFkZHMgdGhlIFwiY2xpY2thYmxlXCIgZnVuY3Rpb25hbGl0eVxyXG4gICAgICAgICQoY2xpY2thYmxlKS5hZGRDbGFzcyhcImNsaWNrYWJsZVwiKTtcclxuICAgICAgICBpZiAodGhpcy5oYXNTdG9yZWRBbnN3ZXJzKSB7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBlbGVtZW50IHdlJ3JlIGFib3V0IHRvIGFwcGVuZCB0byB0aGUgcHJlIHdhcyBpbiBsb2NhbCBzdG9yYWdlIGFzIGNsaWNrZWQgdmlhIGl0cyBpbmRleFxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWNrZWRJbmRleEFycmF5W3RoaXMuY2xpY2tJbmRleF0udG9TdHJpbmcoKSA9PT1cclxuICAgICAgICAgICAgICAgIHRoaXMuY2xpY2thYmxlQ291bnRlci50b1N0cmluZygpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgJChjbGlja2FibGUpLmFkZENsYXNzKFwiY2xpY2thYmxlLWNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWNrSW5kZXgrKztcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsaWNrSW5kZXggPT09IHRoaXMuY2xpY2tlZEluZGV4QXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RvcCBkb2luZyB0aGlzIGlmIHRoZSBpbmRleCBhcnJheSBpcyB1c2VkIHVwXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNTdG9yZWRBbnN3ZXJzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNsaWNrYWJsZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLmlzQW5zd2VyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImNsaWNrYWJsZS1jbGlja2VkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiY2xpY2thYmxlLWNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiY2xpY2thYmxlLWluY29ycmVjdFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJjbGlja2FibGUtY2xpY2tlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jbGlja2FibGVBcnJheS5wdXNoKGNsaWNrYWJsZSk7XHJcbiAgICAgICAgdGhpcy5jbGlja2FibGVDb3VudGVyKys7XHJcbiAgICB9XHJcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICA9PSBFdmFsdWF0aW9uIGFuZCBkaXNwbGF5aW5nIGZlZWRiYWNrID09XHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICBjaGVja0N1cnJlbnRBbnN3ZXIoKSB7XHJcbiAgICAgICAgLy8gRXZhbHVhdGlvbiBpcyBkb25lIGJ5IGl0ZXJhdGluZyBvdmVyIHRoZSBjb3JyZWN0L2luY29ycmVjdCBhcnJheXMgYW5kIGNoZWNraW5nIGJ5IGNsYXNzXHJcbiAgICAgICAgdGhpcy5jb3JyZWN0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNvcnJlY3ROdW0gPSAwO1xyXG4gICAgICAgIHRoaXMuaW5jb3JyZWN0TnVtID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29ycmVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghJCh0aGlzLmNvcnJlY3RBcnJheVtpXSkuaGFzQ2xhc3MoXCJjbGlja2FibGUtY2xpY2tlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3ROdW0rKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW5jb3JyZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcy5pbmNvcnJlY3RBcnJheVtpXSkuaGFzQ2xhc3MoXCJjbGlja2FibGUtY2xpY2tlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluY29ycmVjdE51bSsrO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzLmluY29ycmVjdEFycmF5W2ldKS5yZW1vdmVDbGFzcyhcImNsaWNrYWJsZS1pbmNvcnJlY3RcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wZXJjZW50ID1cclxuICAgICAgICAgICAgKHRoaXMuY29ycmVjdE51bSAtIHRoaXMuaW5jb3JyZWN0TnVtKSAvIHRoaXMuY29ycmVjdEFycmF5Lmxlbmd0aDtcclxuICAgICAgICB0aGlzLnNldExvY2FsU3RvcmFnZSh7IGNvcnJlY3Q6IHRoaXMuY29ycmVjdCA/IFwiVFwiIDogXCJGXCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nQ3VycmVudEFuc3dlcigpIHtcclxuICAgICAgICB0aGlzLmxvZ0Jvb2tFdmVudCh7XHJcbiAgICAgICAgICAgIGV2ZW50OiBcImNsaWNrYWJsZUFyZWFcIixcclxuICAgICAgICAgICAgYWN0OiB0aGlzLmdpdmVuSW5kZXhBcnJheS5qb2luKFwiO1wiKSxcclxuICAgICAgICAgICAgZGl2X2lkOiB0aGlzLmRpdmlkLFxyXG4gICAgICAgICAgICBjb3JyZWN0OiB0aGlzLmNvcnJlY3QgPyBcIlRcIiA6IFwiRlwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckZlZWRiYWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvcnJlY3QpIHtcclxuICAgICAgICAgICAgJCh0aGlzLmZlZWRCYWNrRGl2KS5odG1sKFwiWW91IGFyZSBDb3JyZWN0IVwiKTtcclxuICAgICAgICAgICAgJCh0aGlzLmZlZWRCYWNrRGl2KS5hdHRyKFwiY2xhc3NcIiwgXCJhbGVydCBhbGVydC1pbmZvXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbmNvcnJlY3RBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcy5pbmNvcnJlY3RBcnJheVtpXSkuaGFzQ2xhc3MoXCJjbGlja2FibGUtY2xpY2tlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcy5pbmNvcnJlY3RBcnJheVtpXSkuYWRkQ2xhc3MoXCJjbGlja2FibGUtaW5jb3JyZWN0XCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMuaW5jb3JyZWN0QXJyYXlbaV0pLnJlbW92ZUNsYXNzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrYWJsZS1pbmNvcnJlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCh0aGlzLmZlZWRCYWNrRGl2KS5odG1sKFxyXG4gICAgICAgICAgICAgICAgXCJJbmNvcnJlY3QuIFlvdSBjbGlja2VkIG9uIFwiICtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3ROdW0gK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIG9mIHRoZSBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0QXJyYXkubGVuZ3RoLnRvU3RyaW5nKCkgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIGNvcnJlY3QgZWxlbWVudHMgYW5kIFwiICtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluY29ycmVjdE51bSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgb2YgdGhlIFwiICtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluY29ycmVjdEFycmF5Lmxlbmd0aC50b1N0cmluZygpICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBpbmNvcnJlY3QgZWxlbWVudHMuIFwiICtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZlZWRiYWNrXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuYXR0cihcImNsYXNzXCIsIFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXNhYmxlSW50ZXJhY3Rpb24oKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNsaWNrYWJsZUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICQodGhpcy5jbGlja2FibGVBcnJheVtpXSkuY3NzKFwiY3Vyc29yXCIsIFwiaW5pdGlhbFwiKTtcclxuICAgICAgICAgICAgdGhpcy5jbGlja2FibGVBcnJheVtpXS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT0gRmluZCB0aGUgY3VzdG9tIEhUTUwgdGFncyBhbmQgPT1cclxuPT0gICBleGVjdXRlIG91ciBjb2RlIG9uIHRoZW0gICAgPT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuJChkb2N1bWVudCkuYmluZChcInJ1bmVzdG9uZTpsb2dpbi1jb21wbGV0ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiW2RhdGEtY29tcG9uZW50PWNsaWNrYWJsZWFyZWFdXCIpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykuY2xvc2VzdChcIltkYXRhLWNvbXBvbmVudD10aW1lZEFzc2Vzc21lbnRdXCIpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIElmIHRoaXMgZWxlbWVudCBleGlzdHMgd2l0aGluIGEgdGltZWQgY29tcG9uZW50LCBkb24ndCByZW5kZXIgaXQgaGVyZVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgQ0FMaXN0W3RoaXMuaWRdID0gbmV3IENsaWNrYWJsZUFyZWEoe1xyXG4gICAgICAgICAgICAgICAgICAgIG9yaWc6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlUnVuZXN0b25lU2VydmljZXM6IGVCb29rQ29uZmlnLnVzZVJ1bmVzdG9uZVNlcnZpY2VzLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yIHJlbmRlcmluZyBDbGlja2FibGVBcmVhIFByb2JsZW0gJHt0aGlzLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIERldGFpbHM6ICR7ZXJyfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgQ2xpY2thYmxlQXJlYSBmcm9tIFwiLi9jbGlja2FibGUuanNcIjtcclxuXHJcbihcInVzZSBzdHJpY3RcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lZENsaWNrYWJsZUFyZWEgZXh0ZW5kcyBDbGlja2FibGVBcmVhIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcclxuICAgICAgICBzdXBlcihvcHRzKTtcclxuICAgICAgICB0aGlzLnJlc3RvcmVBbnN3ZXJzKHt9KTtcclxuICAgICAgICB0aGlzLnJlbmRlclRpbWVkSWNvbih0aGlzLmNvbnRhaW5lckRpdik7XHJcbiAgICAgICAgdGhpcy5oaWRlQnV0dG9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVCdXR0b25zKCkge1xyXG4gICAgICAgICQodGhpcy5zdWJtaXRCdXR0b24pLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJUaW1lZEljb24oY29tcG9uZW50KSB7XHJcbiAgICAgICAgLy8gcmVuZGVycyB0aGUgY2xvY2sgaWNvbiBvbiB0aW1lZCBjb21wb25lbnRzLiAgICBUaGUgY29tcG9uZW50IHBhcmFtZXRlclxyXG4gICAgICAgIC8vIGlzIHRoZSBlbGVtZW50IHRoYXQgdGhlIGljb24gc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxyXG4gICAgICAgIHZhciB0aW1lSWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdmFyIHRpbWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAkKHRpbWVJY29uKS5hdHRyKHtcclxuICAgICAgICAgICAgc3JjOiBcIi4uL19zdGF0aWMvY2xvY2sucG5nXCIsXHJcbiAgICAgICAgICAgIHN0eWxlOiBcIndpZHRoOjE1cHg7aGVpZ2h0OjE1cHhcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aW1lSWNvbkRpdi5jbGFzc05hbWUgPSBcInRpbWVUaXBcIjtcclxuICAgICAgICB0aW1lSWNvbkRpdi50aXRsZSA9IFwiXCI7XHJcbiAgICAgICAgdGltZUljb25EaXYuYXBwZW5kQ2hpbGQodGltZUljb24pO1xyXG4gICAgICAgICQoY29tcG9uZW50KS5wcmVwZW5kKHRpbWVJY29uRGl2KTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0NvcnJlY3RUaW1lZCgpIHtcclxuICAgICAgICAvLyBSZXR1cm5zIGlmIHRoZSBxdWVzdGlvbiB3YXMgY29ycmVjdCwgaW5jb3JyZWN0LCBvciBza2lwcGVkIChyZXR1cm4gbnVsbCBpbiB0aGUgbGFzdCBjYXNlKVxyXG4gICAgICAgIGlmICh0aGlzLmNvcnJlY3ROdW0gPT09IDAgJiYgdGhpcy5pbmNvcnJlY3ROdW0gPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jb3JyZWN0ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmNvcnJlY3QpIHtcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVFwiO1xyXG4gICAgICAgICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRlwiO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVGZWVkYmFjaygpIHtcclxuICAgICAgICAkKHRoaXMuZmVlZEJhY2tEaXYpLmhpZGUoKTtcclxuICAgIH1cclxufVxyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9IHt9O1xyXG59XHJcbndpbmRvdy5jb21wb25lbnRfZmFjdG9yeS5jbGlja2FibGVhcmVhID0gZnVuY3Rpb24gKG9wdHMpIHtcclxuICAgIGlmIChvcHRzLnRpbWVkKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUaW1lZENsaWNrYWJsZUFyZWEob3B0cyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IENsaWNrYWJsZUFyZWEob3B0cyk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=