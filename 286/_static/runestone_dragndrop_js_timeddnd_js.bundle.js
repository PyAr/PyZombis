(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_dragndrop_js_timeddnd_js"],{

/***/ 71383:
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./runestone/dragndrop/css/dragndrop.css ***!
  \*************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".rsdraggable {\n    margin-left: 2%;\n    margin-top: 5px;\n    display:inline;\n    float:left;\n\ttext-align: left;\n\tvertical-align: top;\n    background-color: #efefff;\n    font-family: monospace;\n    font-size: 120%;\n    padding-bottom: 10px;\n    min-width: 48%;\n    max-width: 48%;\n    border: 1px solid #efefff;\n    box-sizing: border-box;\n}\n.drag-button {\n    display: inline-block;\n}\n.drag-reset {\n    background-color: #474949;\n    color: white;\n}\n.drag-reset:hover {\n    background-color: black;\n    color: white;\n}\n.drop-incorrect {\n    border: 1px solid red !important;\n    background-color: #f2dede !important;\n}\n.drag-reset:enabled {\n    background-color: #474949;\n    color: white;\n}\n.draggable-drag {\n    -moz-border-radius:10px;\n    -webkit-border-radius:10px;\n    border-radius: 10px;\n    display: block;\n    background-color:#EFEFEF;\n    border:1px solid lightgray;\n    padding:10px;\n    margin-top: 5px;\n    cursor: move;\n}\n\n.draggable-feedback {\n    text-align: left !important;\n    clear: both;\n}\n\n.draggable-drop {\n    -moz-border-radius:10px;\n    -webkit-border-radius:10px;\n    border-radius: 10px;\n    display: block;\n    background-color:#DDDDDD;\n    border:1px solid lightgray;\n    padding:10px;\n    margin-top: 5px;\n}\n.draggable-container {\n    text-align:center;\n}\n\n.possibleDrop {\n    border-color: #000000;\n    background-color: #CCCCCC;\n}\n", "",{"version":3,"sources":["webpack://./runestone/dragndrop/css/dragndrop.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,eAAe;IACf,cAAc;IACd,UAAU;CACb,gBAAgB;CAChB,mBAAmB;IAChB,yBAAyB;IACzB,sBAAsB;IACtB,eAAe;IACf,oBAAoB;IACpB,cAAc;IACd,cAAc;IACd,yBAAyB;IACzB,sBAAsB;AAC1B;AACA;IACI,qBAAqB;AACzB;AACA;IACI,yBAAyB;IACzB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,gCAAgC;IAChC,oCAAoC;AACxC;AACA;IACI,yBAAyB;IACzB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,0BAA0B;IAC1B,mBAAmB;IACnB,cAAc;IACd,wBAAwB;IACxB,0BAA0B;IAC1B,YAAY;IACZ,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,2BAA2B;IAC3B,WAAW;AACf;;AAEA;IACI,uBAAuB;IACvB,0BAA0B;IAC1B,mBAAmB;IACnB,cAAc;IACd,wBAAwB;IACxB,0BAA0B;IAC1B,YAAY;IACZ,eAAe;AACnB;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;IACrB,yBAAyB;AAC7B","sourcesContent":[".rsdraggable {\n    margin-left: 2%;\n    margin-top: 5px;\n    display:inline;\n    float:left;\n\ttext-align: left;\n\tvertical-align: top;\n    background-color: #efefff;\n    font-family: monospace;\n    font-size: 120%;\n    padding-bottom: 10px;\n    min-width: 48%;\n    max-width: 48%;\n    border: 1px solid #efefff;\n    box-sizing: border-box;\n}\n.drag-button {\n    display: inline-block;\n}\n.drag-reset {\n    background-color: #474949;\n    color: white;\n}\n.drag-reset:hover {\n    background-color: black;\n    color: white;\n}\n.drop-incorrect {\n    border: 1px solid red !important;\n    background-color: #f2dede !important;\n}\n.drag-reset:enabled {\n    background-color: #474949;\n    color: white;\n}\n.draggable-drag {\n    -moz-border-radius:10px;\n    -webkit-border-radius:10px;\n    border-radius: 10px;\n    display: block;\n    background-color:#EFEFEF;\n    border:1px solid lightgray;\n    padding:10px;\n    margin-top: 5px;\n    cursor: move;\n}\n\n.draggable-feedback {\n    text-align: left !important;\n    clear: both;\n}\n\n.draggable-drop {\n    -moz-border-radius:10px;\n    -webkit-border-radius:10px;\n    border-radius: 10px;\n    display: block;\n    background-color:#DDDDDD;\n    border:1px solid lightgray;\n    padding:10px;\n    margin-top: 5px;\n}\n.draggable-container {\n    text-align:center;\n}\n\n.possibleDrop {\n    border-color: #000000;\n    background-color: #CCCCCC;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 58950:
/*!***********************************************!*\
  !*** ./runestone/dragndrop/css/dragndrop.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dragndrop_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./dragndrop.css */ 71383);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_dragndrop_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_dragndrop_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ 78273:
/*!*****************************************************!*\
  !*** ./runestone/dragndrop/js/dragndrop-i18n.en.js ***!
  \*****************************************************/
/***/ (() => {

$.i18n().load({
    en: {
        msg_dragndrop_correct_answer: "You are correct!",
        msg_dragndrop_incorrect_answer:
            "Incorret. You got $1 correct and $2 incorrect out of $3. You left $4 blank.",
        msg_dragndrop_check_me: "Check me",
        msg_dragndrop_reset: "Reset",
    },
});


/***/ }),

/***/ 26254:
/*!********************************************************!*\
  !*** ./runestone/dragndrop/js/dragndrop-i18n.pt-br.js ***!
  \********************************************************/
/***/ (() => {

$.i18n().load({
    "pt-br": {
        msg_dragndrop_correct_answer: "Correto!",
        msg_dragndrop_incorrect_answer:
            "Incorreto. Você teve $1 correto(s) e $2 incorreto(s) de $3. Você deixou $4 em branco.",
        msg_dragndrop_check_me: "Verificar",
        msg_dragndrop_reset: "Resetar",
    },
});


/***/ }),

/***/ 70225:
/*!*********************************************!*\
  !*** ./runestone/dragndrop/js/dragndrop.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ddList": () => (/* binding */ ddList),
/* harmony export */   "default": () => (/* binding */ DragNDrop)
/* harmony export */ });
/* harmony import */ var _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase.js */ 2568);
/* harmony import */ var _css_dragndrop_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/dragndrop.css */ 58950);
/* harmony import */ var _dragndrop_i18n_en_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dragndrop-i18n.en.js */ 78273);
/* harmony import */ var _dragndrop_i18n_en_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dragndrop_i18n_en_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dragndrop_i18n_pt_br_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dragndrop-i18n.pt-br.js */ 26254);
/* harmony import */ var _dragndrop_i18n_pt_br_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dragndrop_i18n_pt_br_js__WEBPACK_IMPORTED_MODULE_3__);
/*==========================================
=======     Master dragndrop.js     ========
============================================
===     This file contains the JS for    ===
=== the Runestone Drag n drop component. ===
============================================
===              Created by              ===
===           Isaiah Mayerchak           ===
===                7/6/15                ===
===              Brad MIller             ===
===                2/7/19                ===
==========================================*/







var ddList = {}; // Dictionary that contains all instances of dragndrop objects

class DragNDrop extends _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(opts) {
        super(opts);
        var orig = opts.orig; // entire <ul> element that will be replaced by new HTML
        this.origElem = orig;
        this.divid = orig.id;
        this.useRunestoneServices = opts.useRunestoneServices;
        this.random = false;
        if ($(this.origElem).is("[data-random]")) {
            this.random = true;
        }
        this.feedback = "";
        this.dragPairArray = [];
        this.question = "";
        this.populate(); // Populates this.dragPairArray, this.feedback and this.question
        this.createNewElements();
        this.caption = "Drag-N-Drop";
        this.addCaption("runestone");
    }
    /*======================
    === Update variables ===
    ======================*/
    populate() {
        for (var i = 0; i < this.origElem.childNodes.length; i++) {
            if (
                $(this.origElem.childNodes[i]).data("subcomponent") === "dropzone"
            ) {
                var tmp = $(this.origElem).find(
                    `#${$(this.origElem.childNodes[i]).attr("for")}`
                )[0];
                var replaceSpan = document.createElement("span");
                replaceSpan.innerHTML = tmp.innerHTML;
                replaceSpan.id = this.divid + tmp.id;
                $(replaceSpan).attr("draggable", "true");
                $(replaceSpan).addClass("draggable-drag");
                var otherReplaceSpan = document.createElement("span");
                otherReplaceSpan.innerHTML = this.origElem.childNodes[
                    i
                ].innerHTML;
                $(otherReplaceSpan).addClass("draggable-drop");
                this.setEventListeners(replaceSpan, otherReplaceSpan);
                var tmpArr = [];
                tmpArr.push(replaceSpan);
                tmpArr.push(otherReplaceSpan);
                this.dragPairArray.push(tmpArr);
            } else if (
                $(this.origElem.childNodes[i]).data("subcomponent") === "question"
            ) {
                this.question = this.origElem.childNodes[i].innerHTML;
            } else if (
                $(this.origElem.childNodes[i]).data("subcomponent") === "feedback"
            ) {
                this.feedback = this.origElem.childNodes[i].innerHTML;
            }
        }
    }
    /*========================================
    == Create new HTML elements and replace ==
    ==      original element with them      ==
    ========================================*/
    createNewElements() {
        this.containerDiv = document.createElement("div");
        this.containerDiv.id = this.divid;
        $(this.containerDiv).addClass(
            "alert alert-warning draggable-container"
        );
        $(this.containerDiv).text(this.question);
        this.containerDiv.appendChild(document.createElement("br"));
        this.dragDropWrapDiv = document.createElement("div"); // Holds the draggables/dropzones, prevents feedback from bleeding in
        $(this.dragDropWrapDiv).css("display", "block");
        this.containerDiv.appendChild(this.dragDropWrapDiv);
        this.draggableDiv = document.createElement("div");
        $(this.draggableDiv).addClass("rsdraggable dragzone");
        this.addDragDivListeners();
        this.dropZoneDiv = document.createElement("div");
        $(this.dropZoneDiv).addClass("rsdraggable");
        this.dragDropWrapDiv.appendChild(this.draggableDiv);
        this.dragDropWrapDiv.appendChild(this.dropZoneDiv);
        this.createButtons();
        this.checkServer("dragNdrop", true);
    }
    finishSettingUp() {
        this.appendReplacementSpans();
        this.renderFeedbackDiv();
        $(this.origElem).replaceWith(this.containerDiv);
        if (!this.hasStoredDropzones) {
            this.minheight = $(this.draggableDiv).height();
        }
        this.draggableDiv.style.minHeight = this.minheight.toString() + "px";
        if ($(this.dropZoneDiv).height() > this.minheight) {
            this.dragDropWrapDiv.style.minHeight =
                $(this.dropZoneDiv).height().toString() + "px";
        } else {
            this.dragDropWrapDiv.style.minHeight =
                this.minheight.toString() + "px";
        }
    }
    addDragDivListeners() {
        let self = this;
        this.draggableDiv.addEventListener(
            "dragover",
            function (ev) {
                ev.preventDefault();
                if ($(this.draggableDiv).hasClass("possibleDrop")) {
                    return;
                }
                $(this.draggableDiv).addClass("possibleDrop");
            }.bind(this)
        );
        this.draggableDiv.addEventListener(
            "drop",
            function (ev) {
                self.isAnswered = true;
                ev.preventDefault();
                if ($(this.draggableDiv).hasClass("possibleDrop")) {
                    $(this.draggableDiv).removeClass("possibleDrop");
                }
                var data = ev.dataTransfer.getData("draggableID");
                var draggedSpan = document.getElementById(data);
                if (
                    !$(this.draggableDiv).has(draggedSpan).length &&
                    !this.strangerDanger(draggedSpan)
                ) {
                    // Make sure element isn't already there--prevents erros w/appending child
                    this.draggableDiv.appendChild(draggedSpan);
                }
            }.bind(this)
        );
        this.draggableDiv.addEventListener(
            "dragleave",
            function (e) {
                if (!$(this.draggableDiv).hasClass("possibleDrop")) {
                    return;
                }
                $(this.draggableDiv).removeClass("possibleDrop");
            }.bind(this)
        );
    }
    createButtons() {
        this.buttonDiv = document.createElement("div");
        this.submitButton = document.createElement("button"); // Check me button
        this.submitButton.textContent = $.i18n("msg_dragndrop_check_me");
        $(this.submitButton).attr({
            class: "btn btn-success drag-button",
            name: "do answer",
            type: "button",
        });
        this.submitButton.onclick = function () {
            this.checkCurrentAnswer();
            this.renderFeedback();
            this.logCurrentAnswer(true);
        }.bind(this);
        this.resetButton = document.createElement("button"); // Check me button
        this.resetButton.textContent = $.i18n("msg_dragndrop_reset");
        $(this.resetButton).attr({
            class: "btn btn-default drag-button drag-reset",
            name: "do answer",
        });
        this.resetButton.onclick = function () {
            this.resetDraggables();
        }.bind(this);
        this.buttonDiv.appendChild(this.submitButton);
        this.buttonDiv.appendChild(this.resetButton);
        this.containerDiv.appendChild(this.buttonDiv);
    }
    appendReplacementSpans() {
        this.createIndexArray();
        this.randomizeIndexArray();
        for (let i = 0; i < this.dragPairArray.length; i++) {
            if (this.hasStoredDropzones) {
                if (
                    $.inArray(this.indexArray[i][0], this.pregnantIndexArray) <
                    0
                ) {
                    this.draggableDiv.appendChild(
                        this.dragPairArray[this.indexArray[i]][0]
                    );
                }
            } else {
                this.draggableDiv.appendChild(
                    this.dragPairArray[this.indexArray[i]][0]
                );
            }
        }
        this.randomizeIndexArray();
        for (let i = 0; i < this.dragPairArray.length; i++) {
            if (this.hasStoredDropzones) {
                if (this.pregnantIndexArray[this.indexArray[i]] !== "-1") {
                    this.dragPairArray[this.indexArray[i]][1].appendChild(
                        this.dragPairArray[
                            this.pregnantIndexArray[this.indexArray[i]]
                        ][0]
                    );
                }
            }
            this.dropZoneDiv.appendChild(
                this.dragPairArray[this.indexArray[i]][1]
            );
        }
    }
    setEventListeners(dgSpan, dpSpan) {
        // Adds HTML5 "drag and drop" UI functionality
        let self = this;
        dgSpan.addEventListener("dragstart", function (ev) {
            ev.dataTransfer.setData("draggableID", ev.target.id);
        });
        dgSpan.addEventListener("dragover", function (ev) {
            ev.preventDefault();
        });
        dgSpan.addEventListener(
            "drop",
            function (ev) {
                self.isAnswered = true;
                ev.preventDefault();
                var data = ev.dataTransfer.getData("draggableID");
                var draggedSpan = document.getElementById(data);
                if (
                    this.hasNoDragChild(ev.target) &&
                    draggedSpan != ev.target &&
                    !this.strangerDanger(draggedSpan)
                ) {
                    // Make sure element isn't already there--prevents erros w/appending child
                    this.draggableDiv.appendChild(draggedSpan);
                }
            }.bind(this)
        );
        dpSpan.addEventListener(
            "dragover",
            function (ev) {
                self.isAnswered = true;
                ev.preventDefault();
                if ($(ev.target).hasClass("possibleDrop")) {
                    return;
                }
                if (
                    $(ev.target).hasClass("draggable-drop") &&
                    this.hasNoDragChild(ev.target)
                ) {
                    $(ev.target).addClass("possibleDrop");
                }
            }.bind(this)
        );
        dpSpan.addEventListener("dragleave", function (ev) {
            self.isAnswered = true;
            ev.preventDefault();
            if (!$(ev.target).hasClass("possibleDrop")) {
                return;
            }
            $(ev.target).removeClass("possibleDrop");
        });
        dpSpan.addEventListener(
            "drop",
            function (ev) {
                self.isAnswered = true;
                ev.preventDefault();
                if ($(ev.target).hasClass("possibleDrop")) {
                    $(ev.target).removeClass("possibleDrop");
                }
                var data = ev.dataTransfer.getData("draggableID");
                var draggedSpan = document.getElementById(data);
                if (
                    $(ev.target).hasClass("draggable-drop") &&
                    this.hasNoDragChild(ev.target) &&
                    !this.strangerDanger(draggedSpan)
                ) {
                    // Make sure element isn't already there--prevents erros w/appending child
                    ev.target.appendChild(draggedSpan);
                }
            }.bind(this)
        );
    }
    renderFeedbackDiv() {
        if (!this.feedBackDiv) {
            this.feedBackDiv = document.createElement("div");
            this.feedBackDiv.id = this.divid + "_feedback";
            this.containerDiv.appendChild(document.createElement("br"));
            this.containerDiv.appendChild(this.feedBackDiv);
        }
    }
    /*=======================
    == Auxiliary functions ==
    =======================*/
    strangerDanger(testSpan) {
        // Returns true if the test span doesn't belong to this instance of DragNDrop
        var strangerDanger = true;
        for (var i = 0; i < this.dragPairArray.length; i++) {
            if (testSpan === this.dragPairArray[i][0]) {
                strangerDanger = false;
            }
        }
        return strangerDanger;
    }
    hasNoDragChild(parent) {
        // Ensures that each dropZoneDiv can have only one draggable child
        var counter = 0;
        for (var i = 0; i < parent.childNodes.length; i++) {
            if ($(parent.childNodes[i]).attr("draggable") === "true") {
                counter++;
            }
        }
        if (counter >= 1) {
            return false;
        } else {
            return true;
        }
    }
    createIndexArray() {
        this.indexArray = [];
        for (var i = 0; i < this.dragPairArray.length; i++) {
            this.indexArray.push(i);
        }
    }
    randomizeIndexArray() {
        // Shuffles around indices so the matchable elements aren't in a predictable order
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
        }
    }
    /*==============================
    == Reset button functionality ==
    ==============================*/
    resetDraggables() {
        for (var i = 0; i < this.dragPairArray.length; i++) {
            for (
                var j = 0;
                j < this.dragPairArray[i][1].childNodes.length;
                j++
            ) {
                if (
                    $(this.dragPairArray[i][1].childNodes[j]).attr(
                        "draggable"
                    ) === "true"
                ) {
                    this.draggableDiv.appendChild(
                        this.dragPairArray[i][1].childNodes[j]
                    );
                }
            }
        }
        this.feedBackDiv.style.display = "none";
    }
    /*===========================
    == Evaluation and feedback ==
    ===========================*/

    checkCurrentAnswer() {
        this.correct = true;
        this.unansweredNum = 0;
        this.incorrectNum = 0;
        this.dragNum = this.dragPairArray.length;
        for (var i = 0; i < this.dragPairArray.length; i++) {
            if (
                !$(this.dragPairArray[i][1]).has(this.dragPairArray[i][0])
                    .length
            ) {
                this.correct = false;
                this.incorrectNum++;
            }
            if (this.hasNoDragChild(this.dragPairArray[i][1])) {
                this.unansweredNum++;
                this.incorrectNum -= 1;
            }
        }
        this.correctNum = this.dragNum - this.incorrectNum - this.unansweredNum;
        this.percent = this.correctNum / this.dragPairArray.length;
        this.setLocalStorage({ correct: this.correct ? "T" : "F" });
    }

    logCurrentAnswer() {
        let answer = this.pregnantIndexArray.join(";");
        this.logBookEvent({
            event: "dragNdrop",
            act: answer,
            answer: answer,
            minHeight: this.minheight,
            div_id: this.divid,
            correct: this.correct,
            correctNum: this.correctNum,
            dragNum: this.dragNum,
        });
    }
    renderFeedback() {
        for (var i = 0; i < this.dragPairArray.length; i++) {
            if (
                !$(this.dragPairArray[i][1]).has(this.dragPairArray[i][0])
                    .length
            ) {
                $(this.dragPairArray[i][1]).addClass("drop-incorrect");
            } else {
                $(this.dragPairArray[i][1]).removeClass("drop-incorrect");
            }
        }

        if (!this.feedBackDiv) {
            this.renderFeedbackDiv();
        }
        this.feedBackDiv.style.display = "block";
        if (this.correct) {
            var msgCorrect = $.i18n("msg_dragndrop_correct_answer");
            $(this.feedBackDiv).html(msgCorrect);
            $(this.feedBackDiv).attr(
                "class",
                "alert alert-info draggable-feedback"
            );
        } else {
            var msgIncorrect = $.i18n(
                $.i18n("msg_dragndrop_incorrect_answer"),
                this.correctNum,
                this.incorrectNum,
                this.dragNum,
                this.unansweredNum
            );
            $(this.feedBackDiv).html(msgIncorrect + " " + this.feedback);
            $(this.feedBackDiv).attr(
                "class",
                "alert alert-danger draggable-feedback"
            );
        }
    }
    /*===================================
    === Checking/restoring from storage ===
    ===================================*/
    restoreAnswers(data) {
        // Restore answers from storage retrieval done in RunestoneBase
        this.hasStoredDropzones = true;
        this.minheight = data.minHeight;
        this.pregnantIndexArray = data.answer.split(";");
        this.finishSettingUp();
    }
    checkLocalStorage() {
        if (this.graderactive) {
            return;
        }
        var storedObj;
        this.hasStoredDropzones = false;
        var len = localStorage.length;
        if (len > 0) {
            var ex = localStorage.getItem(this.localStorageKey());
            if (ex !== null) {
                this.hasStoredDropzones = true;
                try {
                    storedObj = JSON.parse(ex);
                    this.minheight = storedObj.minHeight;
                } catch (err) {
                    // error while parsing; likely due to bad value stored in storage
                    console.log(err.message);
                    localStorage.removeItem(this.localStorageKey());
                    this.hasStoredDropzones = false;
                    this.finishSettingUp();
                    return;
                }
                this.pregnantIndexArray = storedObj.answer.split(";");
                if (this.useRunestoneServices) {
                    // store answer in database
                    var answer = this.pregnantIndexArray.join(";");
                    this.logBookEvent({
                        event: "dragNdrop",
                        act: answer,
                        answer: answer,
                        minHeight: this.minheight,
                        div_id: this.divid,
                        correct: storedObj.correct,
                    });
                }
            }
        }
        this.finishSettingUp();
    }

    setLocalStorage(data) {
        if (data.answer === undefined) {
            // If we didn't load from the server, we must generate the data
            this.pregnantIndexArray = [];
            for (var i = 0; i < this.dragPairArray.length; i++) {
                if (!this.hasNoDragChild(this.dragPairArray[i][1])) {
                    for (var j = 0; j < this.dragPairArray.length; j++) {
                        if (
                            $(this.dragPairArray[i][1]).has(
                                this.dragPairArray[j][0]
                            ).length
                        ) {
                            this.pregnantIndexArray.push(j);
                        }
                    }
                } else {
                    this.pregnantIndexArray.push(-1);
                }
            }
        }
        var timeStamp = new Date();
        var correct = data.correct;
        var storageObj = {
            answer: this.pregnantIndexArray.join(";"),
            minHeight: this.minheight,
            timestamp: timeStamp,
            correct: correct,
        };
        localStorage.setItem(
            this.localStorageKey(),
            JSON.stringify(storageObj)
        );
    }

    disableInteraction() {
        $(this.resetButton).hide();
        for (var i = 0; i < this.dragPairArray.length; i++) {
            // No more dragging
            $(this.dragPairArray[i][0]).attr("draggable", "false");
            $(this.dragPairArray[i][0]).css("cursor", "initial");
        }
    }
}

/*=================================
== Find the custom HTML tags and ==
==   execute our code on them    ==
=================================*/
$(document).bind("runestone:login-complete", function () {
    $("[data-component=dragndrop]").each(function (index) {
        var opts = {
            orig: this,
            useRunestoneServices: eBookConfig.useRunestoneServices,
        };
        if ($(this).closest("[data-component=timedAssessment]").length == 0) {
            // If this element exists within a timed component, don't render it here
            try {
                ddList[this.id] = new DragNDrop(opts);
            } catch (err) {
                console.log(`Error rendering DragNDrop Problem ${this.id}`);
            }
        }
    });
});


/***/ }),

/***/ 47496:
/*!********************************************!*\
  !*** ./runestone/dragndrop/js/timeddnd.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TimedDragNDrop)
/* harmony export */ });
/* harmony import */ var _dragndrop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragndrop.js */ 70225);




class TimedDragNDrop extends _dragndrop_js__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(opts) {
        super(opts);
        this.finishSettingUp();
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
        // Returns if the question was correct.    Used for timed assessment grading.
        if (this.unansweredNum === this.dragPairArray.length) {
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
window.component_factory["dragndrop"] = function (opts) {
    if (opts.timed) {
        return new TimedDragNDrop(opts);
    }
    return new _dragndrop_js__WEBPACK_IMPORTED_MODULE_0__.default(opts);
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2RyYWduZHJvcC9jc3MvZHJhZ25kcm9wLmNzcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2RyYWduZHJvcC9jc3MvZHJhZ25kcm9wLmNzcz9lNTljIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvZHJhZ25kcm9wL2pzL2RyYWduZHJvcC1pMThuLmVuLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvZHJhZ25kcm9wL2pzL2RyYWduZHJvcC1pMThuLnB0LWJyLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvZHJhZ25kcm9wL2pzL2RyYWduZHJvcC5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2RyYWduZHJvcC9qcy90aW1lZGRuZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSx3REFBd0Qsc0JBQXNCLHNCQUFzQixxQkFBcUIsaUJBQWlCLHFCQUFxQix3QkFBd0IsZ0NBQWdDLDZCQUE2QixzQkFBc0IsMkJBQTJCLHFCQUFxQixxQkFBcUIsZ0NBQWdDLDZCQUE2QixHQUFHLGdCQUFnQiw0QkFBNEIsR0FBRyxlQUFlLGdDQUFnQyxtQkFBbUIsR0FBRyxxQkFBcUIsOEJBQThCLG1CQUFtQixHQUFHLG1CQUFtQix1Q0FBdUMsMkNBQTJDLEdBQUcsdUJBQXVCLGdDQUFnQyxtQkFBbUIsR0FBRyxtQkFBbUIsOEJBQThCLGlDQUFpQywwQkFBMEIscUJBQXFCLCtCQUErQixpQ0FBaUMsbUJBQW1CLHNCQUFzQixtQkFBbUIsR0FBRyx5QkFBeUIsa0NBQWtDLGtCQUFrQixHQUFHLHFCQUFxQiw4QkFBOEIsaUNBQWlDLDBCQUEwQixxQkFB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Q0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLCtCQUErQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLCtCQUErQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0RBQVM7QUFDeEIiLCJmaWxlIjoicnVuZXN0b25lX2RyYWduZHJvcF9qc190aW1lZGRuZF9qcy5idW5kbGUuanM/dj1jMTg2OGZlZmJkNTVmNTlhM2ZiNCIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnJzZHJhZ2dhYmxlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGRpc3BsYXk6aW5saW5lO1xcbiAgICBmbG9hdDpsZWZ0O1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0dmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZmZjtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gICAgZm9udC1zaXplOiAxMjAlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgbWluLXdpZHRoOiA0OCU7XFxuICAgIG1heC13aWR0aDogNDglO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWZlZmZmO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uZHJhZy1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5kcmFnLXJlc2V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NDk0OTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uZHJhZy1yZXNldDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5kcm9wLWluY29ycmVjdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlICFpbXBvcnRhbnQ7XFxufVxcbi5kcmFnLXJlc2V0OmVuYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0OTQ5O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5kcmFnZ2FibGUtZHJhZyB7XFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czoxMHB4O1xcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6MTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I0VGRUZFRjtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCBsaWdodGdyYXk7XFxuICAgIHBhZGRpbmc6MTBweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBjdXJzb3I6IG1vdmU7XFxufVxcblxcbi5kcmFnZ2FibGUtZmVlZGJhY2sge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XFxuICAgIGNsZWFyOiBib3RoO1xcbn1cXG5cXG4uZHJhZ2dhYmxlLWRyb3Age1xcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6MTBweDtcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNEREREREQ7XFxuICAgIGJvcmRlcjoxcHggc29saWQgbGlnaHRncmF5O1xcbiAgICBwYWRkaW5nOjEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59XFxuLmRyYWdnYWJsZS1jb250YWluZXIge1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG59XFxuXFxuLnBvc3NpYmxlRHJvcCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzAwMDAwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQ0NDQztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcnVuZXN0b25lL2RyYWduZHJvcC9jc3MvZHJhZ25kcm9wLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsY0FBYztJQUNkLFVBQVU7Q0FDYixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0lBQ2hCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yc2RyYWdnYWJsZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBkaXNwbGF5OmlubGluZTtcXG4gICAgZmxvYXQ6bGVmdDtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZmY7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogMTIwJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIG1pbi13aWR0aDogNDglO1xcbiAgICBtYXgtd2lkdGg6IDQ4JTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VmZWZmZjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmRyYWctYnV0dG9uIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uZHJhZy1yZXNldCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzQ5NDk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmRyYWctcmVzZXQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uZHJvcC1pbmNvcnJlY3Qge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQgIWltcG9ydGFudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZGVkZSAhaW1wb3J0YW50O1xcbn1cXG4uZHJhZy1yZXNldDplbmFibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NDk0OTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uZHJhZ2dhYmxlLWRyYWcge1xcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6MTBweDtcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFRkVGRUY7XFxuICAgIGJvcmRlcjoxcHggc29saWQgbGlnaHRncmF5O1xcbiAgICBwYWRkaW5nOjEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cXG4uZHJhZ2dhYmxlLWZlZWRiYWNrIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xcbiAgICBjbGVhcjogYm90aDtcXG59XFxuXFxuLmRyYWdnYWJsZS1kcm9wIHtcXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOjEwcHg7XFxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czoxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojREREREREO1xcbiAgICBib3JkZXI6MXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gICAgcGFkZGluZzoxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbi5kcmFnZ2FibGUtY29udGFpbmVyIHtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxufVxcblxcbi5wb3NzaWJsZURyb3Age1xcbiAgICBib3JkZXItY29sb3I6ICMwMDAwMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0NDQ0M7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RyYWduZHJvcC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIkLmkxOG4oKS5sb2FkKHtcbiAgICBlbjoge1xuICAgICAgICBtc2dfZHJhZ25kcm9wX2NvcnJlY3RfYW5zd2VyOiBcIllvdSBhcmUgY29ycmVjdCFcIixcbiAgICAgICAgbXNnX2RyYWduZHJvcF9pbmNvcnJlY3RfYW5zd2VyOlxuICAgICAgICAgICAgXCJJbmNvcnJldC4gWW91IGdvdCAkMSBjb3JyZWN0IGFuZCAkMiBpbmNvcnJlY3Qgb3V0IG9mICQzLiBZb3UgbGVmdCAkNCBibGFuay5cIixcbiAgICAgICAgbXNnX2RyYWduZHJvcF9jaGVja19tZTogXCJDaGVjayBtZVwiLFxuICAgICAgICBtc2dfZHJhZ25kcm9wX3Jlc2V0OiBcIlJlc2V0XCIsXG4gICAgfSxcbn0pO1xuIiwiJC5pMThuKCkubG9hZCh7XG4gICAgXCJwdC1iclwiOiB7XG4gICAgICAgIG1zZ19kcmFnbmRyb3BfY29ycmVjdF9hbnN3ZXI6IFwiQ29ycmV0byFcIixcbiAgICAgICAgbXNnX2RyYWduZHJvcF9pbmNvcnJlY3RfYW5zd2VyOlxuICAgICAgICAgICAgXCJJbmNvcnJldG8uIFZvY8OqIHRldmUgJDEgY29ycmV0byhzKSBlICQyIGluY29ycmV0byhzKSBkZSAkMy4gVm9jw6ogZGVpeG91ICQ0IGVtIGJyYW5jby5cIixcbiAgICAgICAgbXNnX2RyYWduZHJvcF9jaGVja19tZTogXCJWZXJpZmljYXJcIixcbiAgICAgICAgbXNnX2RyYWduZHJvcF9yZXNldDogXCJSZXNldGFyXCIsXG4gICAgfSxcbn0pO1xuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PT09PT0gICAgIE1hc3RlciBkcmFnbmRyb3AuanMgICAgID09PT09PT09XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09ICAgICBUaGlzIGZpbGUgY29udGFpbnMgdGhlIEpTIGZvciAgICA9PT1cbj09PSB0aGUgUnVuZXN0b25lIERyYWcgbiBkcm9wIGNvbXBvbmVudC4gPT09XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09ICAgICAgICAgICAgICBDcmVhdGVkIGJ5ICAgICAgICAgICAgICA9PT1cbj09PSAgICAgICAgICAgSXNhaWFoIE1heWVyY2hhayAgICAgICAgICAgPT09XG49PT0gICAgICAgICAgICAgICAgNy82LzE1ICAgICAgICAgICAgICAgID09PVxuPT09ICAgICAgICAgICAgICBCcmFkIE1JbGxlciAgICAgICAgICAgICA9PT1cbj09PSAgICAgICAgICAgICAgICAyLzcvMTkgICAgICAgICAgICAgICAgPT09XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdW5lc3RvbmVCYXNlIGZyb20gXCIuLi8uLi9jb21tb24vanMvcnVuZXN0b25lYmFzZS5qc1wiO1xuaW1wb3J0IFwiLi4vY3NzL2RyYWduZHJvcC5jc3NcIjtcbmltcG9ydCBcIi4vZHJhZ25kcm9wLWkxOG4uZW4uanNcIjtcbmltcG9ydCBcIi4vZHJhZ25kcm9wLWkxOG4ucHQtYnIuanNcIjtcblxuZXhwb3J0IHZhciBkZExpc3QgPSB7fTsgLy8gRGljdGlvbmFyeSB0aGF0IGNvbnRhaW5zIGFsbCBpbnN0YW5jZXMgb2YgZHJhZ25kcm9wIG9iamVjdHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ05Ecm9wIGV4dGVuZHMgUnVuZXN0b25lQmFzZSB7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcihvcHRzKTtcbiAgICAgICAgdmFyIG9yaWcgPSBvcHRzLm9yaWc7IC8vIGVudGlyZSA8dWw+IGVsZW1lbnQgdGhhdCB3aWxsIGJlIHJlcGxhY2VkIGJ5IG5ldyBIVE1MXG4gICAgICAgIHRoaXMub3JpZ0VsZW0gPSBvcmlnO1xuICAgICAgICB0aGlzLmRpdmlkID0gb3JpZy5pZDtcbiAgICAgICAgdGhpcy51c2VSdW5lc3RvbmVTZXJ2aWNlcyA9IG9wdHMudXNlUnVuZXN0b25lU2VydmljZXM7XG4gICAgICAgIHRoaXMucmFuZG9tID0gZmFsc2U7XG4gICAgICAgIGlmICgkKHRoaXMub3JpZ0VsZW0pLmlzKFwiW2RhdGEtcmFuZG9tXVwiKSkge1xuICAgICAgICAgICAgdGhpcy5yYW5kb20gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmVlZGJhY2sgPSBcIlwiO1xuICAgICAgICB0aGlzLmRyYWdQYWlyQXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbiA9IFwiXCI7XG4gICAgICAgIHRoaXMucG9wdWxhdGUoKTsgLy8gUG9wdWxhdGVzIHRoaXMuZHJhZ1BhaXJBcnJheSwgdGhpcy5mZWVkYmFjayBhbmQgdGhpcy5xdWVzdGlvblxuICAgICAgICB0aGlzLmNyZWF0ZU5ld0VsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuY2FwdGlvbiA9IFwiRHJhZy1OLURyb3BcIjtcbiAgICAgICAgdGhpcy5hZGRDYXB0aW9uKFwicnVuZXN0b25lXCIpO1xuICAgIH1cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT0gVXBkYXRlIHZhcmlhYmxlcyA9PT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICBwb3B1bGF0ZSgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9yaWdFbGVtLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAkKHRoaXMub3JpZ0VsZW0uY2hpbGROb2Rlc1tpXSkuZGF0YShcInN1YmNvbXBvbmVudFwiKSA9PT0gXCJkcm9wem9uZVwiXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB2YXIgdG1wID0gJCh0aGlzLm9yaWdFbGVtKS5maW5kKFxuICAgICAgICAgICAgICAgICAgICBgIyR7JCh0aGlzLm9yaWdFbGVtLmNoaWxkTm9kZXNbaV0pLmF0dHIoXCJmb3JcIil9YFxuICAgICAgICAgICAgICAgIClbMF07XG4gICAgICAgICAgICAgICAgdmFyIHJlcGxhY2VTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICAgICAgcmVwbGFjZVNwYW4uaW5uZXJIVE1MID0gdG1wLmlubmVySFRNTDtcbiAgICAgICAgICAgICAgICByZXBsYWNlU3Bhbi5pZCA9IHRoaXMuZGl2aWQgKyB0bXAuaWQ7XG4gICAgICAgICAgICAgICAgJChyZXBsYWNlU3BhbikuYXR0cihcImRyYWdnYWJsZVwiLCBcInRydWVcIik7XG4gICAgICAgICAgICAgICAgJChyZXBsYWNlU3BhbikuYWRkQ2xhc3MoXCJkcmFnZ2FibGUtZHJhZ1wiKTtcbiAgICAgICAgICAgICAgICB2YXIgb3RoZXJSZXBsYWNlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgICAgIG90aGVyUmVwbGFjZVNwYW4uaW5uZXJIVE1MID0gdGhpcy5vcmlnRWxlbS5jaGlsZE5vZGVzW1xuICAgICAgICAgICAgICAgICAgICBpXG4gICAgICAgICAgICAgICAgXS5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgJChvdGhlclJlcGxhY2VTcGFuKS5hZGRDbGFzcyhcImRyYWdnYWJsZS1kcm9wXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMocmVwbGFjZVNwYW4sIG90aGVyUmVwbGFjZVNwYW4pO1xuICAgICAgICAgICAgICAgIHZhciB0bXBBcnIgPSBbXTtcbiAgICAgICAgICAgICAgICB0bXBBcnIucHVzaChyZXBsYWNlU3Bhbik7XG4gICAgICAgICAgICAgICAgdG1wQXJyLnB1c2gob3RoZXJSZXBsYWNlU3Bhbik7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnUGFpckFycmF5LnB1c2godG1wQXJyKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgJCh0aGlzLm9yaWdFbGVtLmNoaWxkTm9kZXNbaV0pLmRhdGEoXCJzdWJjb21wb25lbnRcIikgPT09IFwicXVlc3Rpb25cIlxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbiA9IHRoaXMub3JpZ0VsZW0uY2hpbGROb2Rlc1tpXS5pbm5lckhUTUw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICQodGhpcy5vcmlnRWxlbS5jaGlsZE5vZGVzW2ldKS5kYXRhKFwic3ViY29tcG9uZW50XCIpID09PSBcImZlZWRiYWNrXCJcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmVlZGJhY2sgPSB0aGlzLm9yaWdFbGVtLmNoaWxkTm9kZXNbaV0uaW5uZXJIVE1MO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgID09IENyZWF0ZSBuZXcgSFRNTCBlbGVtZW50cyBhbmQgcmVwbGFjZSA9PVxuICAgID09ICAgICAgb3JpZ2luYWwgZWxlbWVudCB3aXRoIHRoZW0gICAgICA9PVxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIGNyZWF0ZU5ld0VsZW1lbnRzKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmlkID0gdGhpcy5kaXZpZDtcbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lckRpdikuYWRkQ2xhc3MoXG4gICAgICAgICAgICBcImFsZXJ0IGFsZXJ0LXdhcm5pbmcgZHJhZ2dhYmxlLWNvbnRhaW5lclwiXG4gICAgICAgICk7XG4gICAgICAgICQodGhpcy5jb250YWluZXJEaXYpLnRleHQodGhpcy5xdWVzdGlvbik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gICAgICAgIHRoaXMuZHJhZ0Ryb3BXcmFwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy8gSG9sZHMgdGhlIGRyYWdnYWJsZXMvZHJvcHpvbmVzLCBwcmV2ZW50cyBmZWVkYmFjayBmcm9tIGJsZWVkaW5nIGluXG4gICAgICAgICQodGhpcy5kcmFnRHJvcFdyYXBEaXYpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5kcmFnRHJvcFdyYXBEaXYpO1xuICAgICAgICB0aGlzLmRyYWdnYWJsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICQodGhpcy5kcmFnZ2FibGVEaXYpLmFkZENsYXNzKFwicnNkcmFnZ2FibGUgZHJhZ3pvbmVcIik7XG4gICAgICAgIHRoaXMuYWRkRHJhZ0Rpdkxpc3RlbmVycygpO1xuICAgICAgICB0aGlzLmRyb3Bab25lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgJCh0aGlzLmRyb3Bab25lRGl2KS5hZGRDbGFzcyhcInJzZHJhZ2dhYmxlXCIpO1xuICAgICAgICB0aGlzLmRyYWdEcm9wV3JhcERpdi5hcHBlbmRDaGlsZCh0aGlzLmRyYWdnYWJsZURpdik7XG4gICAgICAgIHRoaXMuZHJhZ0Ryb3BXcmFwRGl2LmFwcGVuZENoaWxkKHRoaXMuZHJvcFpvbmVEaXYpO1xuICAgICAgICB0aGlzLmNyZWF0ZUJ1dHRvbnMoKTtcbiAgICAgICAgdGhpcy5jaGVja1NlcnZlcihcImRyYWdOZHJvcFwiLCB0cnVlKTtcbiAgICB9XG4gICAgZmluaXNoU2V0dGluZ1VwKCkge1xuICAgICAgICB0aGlzLmFwcGVuZFJlcGxhY2VtZW50U3BhbnMoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJGZWVkYmFja0RpdigpO1xuICAgICAgICAkKHRoaXMub3JpZ0VsZW0pLnJlcGxhY2VXaXRoKHRoaXMuY29udGFpbmVyRGl2KTtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1N0b3JlZERyb3B6b25lcykge1xuICAgICAgICAgICAgdGhpcy5taW5oZWlnaHQgPSAkKHRoaXMuZHJhZ2dhYmxlRGl2KS5oZWlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYWdnYWJsZURpdi5zdHlsZS5taW5IZWlnaHQgPSB0aGlzLm1pbmhlaWdodC50b1N0cmluZygpICsgXCJweFwiO1xuICAgICAgICBpZiAoJCh0aGlzLmRyb3Bab25lRGl2KS5oZWlnaHQoKSA+IHRoaXMubWluaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmRyYWdEcm9wV3JhcERpdi5zdHlsZS5taW5IZWlnaHQgPVxuICAgICAgICAgICAgICAgICQodGhpcy5kcm9wWm9uZURpdikuaGVpZ2h0KCkudG9TdHJpbmcoKSArIFwicHhcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ0Ryb3BXcmFwRGl2LnN0eWxlLm1pbkhlaWdodCA9XG4gICAgICAgICAgICAgICAgdGhpcy5taW5oZWlnaHQudG9TdHJpbmcoKSArIFwicHhcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGREcmFnRGl2TGlzdGVuZXJzKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlRGl2LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImRyYWdvdmVyXCIsXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMuZHJhZ2dhYmxlRGl2KS5oYXNDbGFzcyhcInBvc3NpYmxlRHJvcFwiKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQodGhpcy5kcmFnZ2FibGVEaXYpLmFkZENsYXNzKFwicG9zc2libGVEcm9wXCIpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlRGl2LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImRyb3BcIixcbiAgICAgICAgICAgIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgICAgIHNlbGYuaXNBbnN3ZXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzLmRyYWdnYWJsZURpdikuaGFzQ2xhc3MoXCJwb3NzaWJsZURyb3BcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLmRyYWdnYWJsZURpdikucmVtb3ZlQ2xhc3MoXCJwb3NzaWJsZURyb3BcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJkcmFnZ2FibGVJRFwiKTtcbiAgICAgICAgICAgICAgICB2YXIgZHJhZ2dlZFNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICEkKHRoaXMuZHJhZ2dhYmxlRGl2KS5oYXMoZHJhZ2dlZFNwYW4pLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdHJhbmdlckRhbmdlcihkcmFnZ2VkU3BhbilcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIGVsZW1lbnQgaXNuJ3QgYWxyZWFkeSB0aGVyZS0tcHJldmVudHMgZXJyb3Mgdy9hcHBlbmRpbmcgY2hpbGRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmFnZ2FibGVEaXYuYXBwZW5kQ2hpbGQoZHJhZ2dlZFNwYW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmRyYWdnYWJsZURpdi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJkcmFnbGVhdmVcIixcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkKHRoaXMuZHJhZ2dhYmxlRGl2KS5oYXNDbGFzcyhcInBvc3NpYmxlRHJvcFwiKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQodGhpcy5kcmFnZ2FibGVEaXYpLnJlbW92ZUNsYXNzKFwicG9zc2libGVEcm9wXCIpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgfVxuICAgIGNyZWF0ZUJ1dHRvbnMoKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyAvLyBDaGVjayBtZSBidXR0b25cbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAkLmkxOG4oXCJtc2dfZHJhZ25kcm9wX2NoZWNrX21lXCIpO1xuICAgICAgICAkKHRoaXMuc3VibWl0QnV0dG9uKS5hdHRyKHtcbiAgICAgICAgICAgIGNsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBkcmFnLWJ1dHRvblwiLFxuICAgICAgICAgICAgbmFtZTogXCJkbyBhbnN3ZXJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja0N1cnJlbnRBbnN3ZXIoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyRmVlZGJhY2soKTtcbiAgICAgICAgICAgIHRoaXMubG9nQ3VycmVudEFuc3dlcih0cnVlKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgLy8gQ2hlY2sgbWUgYnV0dG9uXG4gICAgICAgIHRoaXMucmVzZXRCdXR0b24udGV4dENvbnRlbnQgPSAkLmkxOG4oXCJtc2dfZHJhZ25kcm9wX3Jlc2V0XCIpO1xuICAgICAgICAkKHRoaXMucmVzZXRCdXR0b24pLmF0dHIoe1xuICAgICAgICAgICAgY2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0IGRyYWctYnV0dG9uIGRyYWctcmVzZXRcIixcbiAgICAgICAgICAgIG5hbWU6IFwiZG8gYW5zd2VyXCIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlc2V0QnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0RHJhZ2dhYmxlcygpO1xuICAgICAgICB9LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYnV0dG9uRGl2LmFwcGVuZENoaWxkKHRoaXMuc3VibWl0QnV0dG9uKTtcbiAgICAgICAgdGhpcy5idXR0b25EaXYuYXBwZW5kQ2hpbGQodGhpcy5yZXNldEJ1dHRvbik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uRGl2KTtcbiAgICB9XG4gICAgYXBwZW5kUmVwbGFjZW1lbnRTcGFucygpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVJbmRleEFycmF5KCk7XG4gICAgICAgIHRoaXMucmFuZG9taXplSW5kZXhBcnJheSgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZHJhZ1BhaXJBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzU3RvcmVkRHJvcHpvbmVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAkLmluQXJyYXkodGhpcy5pbmRleEFycmF5W2ldWzBdLCB0aGlzLnByZWduYW50SW5kZXhBcnJheSkgPFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhZ2dhYmxlRGl2LmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmFnUGFpckFycmF5W3RoaXMuaW5kZXhBcnJheVtpXV1bMF1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ2dhYmxlRGl2LmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYWdQYWlyQXJyYXlbdGhpcy5pbmRleEFycmF5W2ldXVswXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yYW5kb21pemVJbmRleEFycmF5KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kcmFnUGFpckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNTdG9yZWREcm9wem9uZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmVnbmFudEluZGV4QXJyYXlbdGhpcy5pbmRleEFycmF5W2ldXSAhPT0gXCItMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhZ1BhaXJBcnJheVt0aGlzLmluZGV4QXJyYXlbaV1dWzFdLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmFnUGFpckFycmF5W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlZ25hbnRJbmRleEFycmF5W3RoaXMuaW5kZXhBcnJheVtpXV1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1bMF1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRyb3Bab25lRGl2LmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ1BhaXJBcnJheVt0aGlzLmluZGV4QXJyYXlbaV1dWzFdXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKGRnU3BhbiwgZHBTcGFuKSB7XG4gICAgICAgIC8vIEFkZHMgSFRNTDUgXCJkcmFnIGFuZCBkcm9wXCIgVUkgZnVuY3Rpb25hbGl0eVxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGRnU3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgZXYuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJkcmFnZ2FibGVJRFwiLCBldi50YXJnZXQuaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgZGdTcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBkZ1NwYW4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiZHJvcFwiLFxuICAgICAgICAgICAgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5pc0Fuc3dlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJkcmFnZ2FibGVJRFwiKTtcbiAgICAgICAgICAgICAgICB2YXIgZHJhZ2dlZFNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzTm9EcmFnQ2hpbGQoZXYudGFyZ2V0KSAmJlxuICAgICAgICAgICAgICAgICAgICBkcmFnZ2VkU3BhbiAhPSBldi50YXJnZXQgJiZcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RyYW5nZXJEYW5nZXIoZHJhZ2dlZFNwYW4pXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBlbGVtZW50IGlzbid0IGFscmVhZHkgdGhlcmUtLXByZXZlbnRzIGVycm9zIHcvYXBwZW5kaW5nIGNoaWxkXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhZ2dhYmxlRGl2LmFwcGVuZENoaWxkKGRyYWdnZWRTcGFuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICAgICAgZHBTcGFuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImRyYWdvdmVyXCIsXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmlzQW5zd2VyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaWYgKCQoZXYudGFyZ2V0KS5oYXNDbGFzcyhcInBvc3NpYmxlRHJvcFwiKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgJChldi50YXJnZXQpLmhhc0NsYXNzKFwiZHJhZ2dhYmxlLWRyb3BcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNOb0RyYWdDaGlsZChldi50YXJnZXQpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICQoZXYudGFyZ2V0KS5hZGRDbGFzcyhcInBvc3NpYmxlRHJvcFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICAgICAgZHBTcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICBzZWxmLmlzQW5zd2VyZWQgPSB0cnVlO1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmICghJChldi50YXJnZXQpLmhhc0NsYXNzKFwicG9zc2libGVEcm9wXCIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJChldi50YXJnZXQpLnJlbW92ZUNsYXNzKFwicG9zc2libGVEcm9wXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgZHBTcGFuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImRyb3BcIixcbiAgICAgICAgICAgIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgICAgIHNlbGYuaXNBbnN3ZXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoJChldi50YXJnZXQpLmhhc0NsYXNzKFwicG9zc2libGVEcm9wXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoZXYudGFyZ2V0KS5yZW1vdmVDbGFzcyhcInBvc3NpYmxlRHJvcFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImRyYWdnYWJsZUlEXCIpO1xuICAgICAgICAgICAgICAgIHZhciBkcmFnZ2VkU3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgJChldi50YXJnZXQpLmhhc0NsYXNzKFwiZHJhZ2dhYmxlLWRyb3BcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNOb0RyYWdDaGlsZChldi50YXJnZXQpICYmXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLnN0cmFuZ2VyRGFuZ2VyKGRyYWdnZWRTcGFuKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgZWxlbWVudCBpc24ndCBhbHJlYWR5IHRoZXJlLS1wcmV2ZW50cyBlcnJvcyB3L2FwcGVuZGluZyBjaGlsZFxuICAgICAgICAgICAgICAgICAgICBldi50YXJnZXQuYXBwZW5kQ2hpbGQoZHJhZ2dlZFNwYW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgIH1cbiAgICByZW5kZXJGZWVkYmFja0RpdigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZlZWRCYWNrRGl2KSB7XG4gICAgICAgICAgICB0aGlzLmZlZWRCYWNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRoaXMuZmVlZEJhY2tEaXYuaWQgPSB0aGlzLmRpdmlkICsgXCJfZmVlZGJhY2tcIjtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLmZlZWRCYWNrRGl2KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT0gQXV4aWxpYXJ5IGZ1bmN0aW9ucyA9PVxuICAgID09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICBzdHJhbmdlckRhbmdlcih0ZXN0U3Bhbikge1xuICAgICAgICAvLyBSZXR1cm5zIHRydWUgaWYgdGhlIHRlc3Qgc3BhbiBkb2Vzbid0IGJlbG9uZyB0byB0aGlzIGluc3RhbmNlIG9mIERyYWdORHJvcFxuICAgICAgICB2YXIgc3RyYW5nZXJEYW5nZXIgPSB0cnVlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZHJhZ1BhaXJBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRlc3RTcGFuID09PSB0aGlzLmRyYWdQYWlyQXJyYXlbaV1bMF0pIHtcbiAgICAgICAgICAgICAgICBzdHJhbmdlckRhbmdlciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHJhbmdlckRhbmdlcjtcbiAgICB9XG4gICAgaGFzTm9EcmFnQ2hpbGQocGFyZW50KSB7XG4gICAgICAgIC8vIEVuc3VyZXMgdGhhdCBlYWNoIGRyb3Bab25lRGl2IGNhbiBoYXZlIG9ubHkgb25lIGRyYWdnYWJsZSBjaGlsZFxuICAgICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICgkKHBhcmVudC5jaGlsZE5vZGVzW2ldKS5hdHRyKFwiZHJhZ2dhYmxlXCIpID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY291bnRlciA+PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVJbmRleEFycmF5KCkge1xuICAgICAgICB0aGlzLmluZGV4QXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRyYWdQYWlyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaW5kZXhBcnJheS5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJhbmRvbWl6ZUluZGV4QXJyYXkoKSB7XG4gICAgICAgIC8vIFNodWZmbGVzIGFyb3VuZCBpbmRpY2VzIHNvIHRoZSBtYXRjaGFibGUgZWxlbWVudHMgYXJlbid0IGluIGEgcHJlZGljdGFibGUgb3JkZXJcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IHRoaXMuaW5kZXhBcnJheS5sZW5ndGgsXG4gICAgICAgICAgICB0ZW1wb3JhcnlWYWx1ZSxcbiAgICAgICAgICAgIHJhbmRvbUluZGV4O1xuICAgICAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxuICAgICAgICB3aGlsZSAoY3VycmVudEluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnQuLi5cbiAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCAtPSAxO1xuICAgICAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAgICAgICAgdGVtcG9yYXJ5VmFsdWUgPSB0aGlzLmluZGV4QXJyYXlbY3VycmVudEluZGV4XTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXhBcnJheVtjdXJyZW50SW5kZXhdID0gdGhpcy5pbmRleEFycmF5W3JhbmRvbUluZGV4XTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXhBcnJheVtyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgID09IFJlc2V0IGJ1dHRvbiBmdW5jdGlvbmFsaXR5ID09XG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICByZXNldERyYWdnYWJsZXMoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kcmFnUGFpckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgIHZhciBqID0gMDtcbiAgICAgICAgICAgICAgICBqIDwgdGhpcy5kcmFnUGFpckFycmF5W2ldWzFdLmNoaWxkTm9kZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGorK1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMuZHJhZ1BhaXJBcnJheVtpXVsxXS5jaGlsZE5vZGVzW2pdKS5hdHRyKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkcmFnZ2FibGVcIlxuICAgICAgICAgICAgICAgICAgICApID09PSBcInRydWVcIlxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYWdnYWJsZURpdi5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhZ1BhaXJBcnJheVtpXVsxXS5jaGlsZE5vZGVzW2pdXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmVlZEJhY2tEaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgID09IEV2YWx1YXRpb24gYW5kIGZlZWRiYWNrID09XG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuICAgIGNoZWNrQ3VycmVudEFuc3dlcigpIHtcbiAgICAgICAgdGhpcy5jb3JyZWN0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51bmFuc3dlcmVkTnVtID0gMDtcbiAgICAgICAgdGhpcy5pbmNvcnJlY3ROdW0gPSAwO1xuICAgICAgICB0aGlzLmRyYWdOdW0gPSB0aGlzLmRyYWdQYWlyQXJyYXkubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZHJhZ1BhaXJBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICEkKHRoaXMuZHJhZ1BhaXJBcnJheVtpXVsxXSkuaGFzKHRoaXMuZHJhZ1BhaXJBcnJheVtpXVswXSlcbiAgICAgICAgICAgICAgICAgICAgLmxlbmd0aFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmNvcnJlY3ROdW0rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmhhc05vRHJhZ0NoaWxkKHRoaXMuZHJhZ1BhaXJBcnJheVtpXVsxXSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuYW5zd2VyZWROdW0rKztcbiAgICAgICAgICAgICAgICB0aGlzLmluY29ycmVjdE51bSAtPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29ycmVjdE51bSA9IHRoaXMuZHJhZ051bSAtIHRoaXMuaW5jb3JyZWN0TnVtIC0gdGhpcy51bmFuc3dlcmVkTnVtO1xuICAgICAgICB0aGlzLnBlcmNlbnQgPSB0aGlzLmNvcnJlY3ROdW0gLyB0aGlzLmRyYWdQYWlyQXJyYXkubGVuZ3RoO1xuICAgICAgICB0aGlzLnNldExvY2FsU3RvcmFnZSh7IGNvcnJlY3Q6IHRoaXMuY29ycmVjdCA/IFwiVFwiIDogXCJGXCIgfSk7XG4gICAgfVxuXG4gICAgbG9nQ3VycmVudEFuc3dlcigpIHtcbiAgICAgICAgbGV0IGFuc3dlciA9IHRoaXMucHJlZ25hbnRJbmRleEFycmF5LmpvaW4oXCI7XCIpO1xuICAgICAgICB0aGlzLmxvZ0Jvb2tFdmVudCh7XG4gICAgICAgICAgICBldmVudDogXCJkcmFnTmRyb3BcIixcbiAgICAgICAgICAgIGFjdDogYW5zd2VyLFxuICAgICAgICAgICAgYW5zd2VyOiBhbnN3ZXIsXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IHRoaXMubWluaGVpZ2h0LFxuICAgICAgICAgICAgZGl2X2lkOiB0aGlzLmRpdmlkLFxuICAgICAgICAgICAgY29ycmVjdDogdGhpcy5jb3JyZWN0LFxuICAgICAgICAgICAgY29ycmVjdE51bTogdGhpcy5jb3JyZWN0TnVtLFxuICAgICAgICAgICAgZHJhZ051bTogdGhpcy5kcmFnTnVtLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyRmVlZGJhY2soKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kcmFnUGFpckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgISQodGhpcy5kcmFnUGFpckFycmF5W2ldWzFdKS5oYXModGhpcy5kcmFnUGFpckFycmF5W2ldWzBdKVxuICAgICAgICAgICAgICAgICAgICAubGVuZ3RoXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMuZHJhZ1BhaXJBcnJheVtpXVsxXSkuYWRkQ2xhc3MoXCJkcm9wLWluY29ycmVjdFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLmRyYWdQYWlyQXJyYXlbaV1bMV0pLnJlbW92ZUNsYXNzKFwiZHJvcC1pbmNvcnJlY3RcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuZmVlZEJhY2tEaXYpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyRmVlZGJhY2tEaXYoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZlZWRCYWNrRGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGlmICh0aGlzLmNvcnJlY3QpIHtcbiAgICAgICAgICAgIHZhciBtc2dDb3JyZWN0ID0gJC5pMThuKFwibXNnX2RyYWduZHJvcF9jb3JyZWN0X2Fuc3dlclwiKTtcbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuaHRtbChtc2dDb3JyZWN0KTtcbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuYXR0cihcbiAgICAgICAgICAgICAgICBcImNsYXNzXCIsXG4gICAgICAgICAgICAgICAgXCJhbGVydCBhbGVydC1pbmZvIGRyYWdnYWJsZS1mZWVkYmFja1wiXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG1zZ0luY29ycmVjdCA9ICQuaTE4bihcbiAgICAgICAgICAgICAgICAkLmkxOG4oXCJtc2dfZHJhZ25kcm9wX2luY29ycmVjdF9hbnN3ZXJcIiksXG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0TnVtLFxuICAgICAgICAgICAgICAgIHRoaXMuaW5jb3JyZWN0TnVtLFxuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ051bSxcbiAgICAgICAgICAgICAgICB0aGlzLnVuYW5zd2VyZWROdW1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAkKHRoaXMuZmVlZEJhY2tEaXYpLmh0bWwobXNnSW5jb3JyZWN0ICsgXCIgXCIgKyB0aGlzLmZlZWRiYWNrKTtcbiAgICAgICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuYXR0cihcbiAgICAgICAgICAgICAgICBcImNsYXNzXCIsXG4gICAgICAgICAgICAgICAgXCJhbGVydCBhbGVydC1kYW5nZXIgZHJhZ2dhYmxlLWZlZWRiYWNrXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgID09PSBDaGVja2luZy9yZXN0b3JpbmcgZnJvbSBzdG9yYWdlID09PVxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICByZXN0b3JlQW5zd2VycyhkYXRhKSB7XG4gICAgICAgIC8vIFJlc3RvcmUgYW5zd2VycyBmcm9tIHN0b3JhZ2UgcmV0cmlldmFsIGRvbmUgaW4gUnVuZXN0b25lQmFzZVxuICAgICAgICB0aGlzLmhhc1N0b3JlZERyb3B6b25lcyA9IHRydWU7XG4gICAgICAgIHRoaXMubWluaGVpZ2h0ID0gZGF0YS5taW5IZWlnaHQ7XG4gICAgICAgIHRoaXMucHJlZ25hbnRJbmRleEFycmF5ID0gZGF0YS5hbnN3ZXIuc3BsaXQoXCI7XCIpO1xuICAgICAgICB0aGlzLmZpbmlzaFNldHRpbmdVcCgpO1xuICAgIH1cbiAgICBjaGVja0xvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JhZGVyYWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0b3JlZE9iajtcbiAgICAgICAgdGhpcy5oYXNTdG9yZWREcm9wem9uZXMgPSBmYWxzZTtcbiAgICAgICAgdmFyIGxlbiA9IGxvY2FsU3RvcmFnZS5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgICAgICB2YXIgZXggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSgpKTtcbiAgICAgICAgICAgIGlmIChleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzU3RvcmVkRHJvcHpvbmVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZWRPYmogPSBKU09OLnBhcnNlKGV4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5taW5oZWlnaHQgPSBzdG9yZWRPYmoubWluSGVpZ2h0O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBlcnJvciB3aGlsZSBwYXJzaW5nOyBsaWtlbHkgZHVlIHRvIGJhZCB2YWx1ZSBzdG9yZWQgaW4gc3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc1N0b3JlZERyb3B6b25lcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaFNldHRpbmdVcCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucHJlZ25hbnRJbmRleEFycmF5ID0gc3RvcmVkT2JqLmFuc3dlci5zcGxpdChcIjtcIik7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlUnVuZXN0b25lU2VydmljZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgYW5zd2VyIGluIGRhdGFiYXNlXG4gICAgICAgICAgICAgICAgICAgIHZhciBhbnN3ZXIgPSB0aGlzLnByZWduYW50SW5kZXhBcnJheS5qb2luKFwiO1wiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dCb29rRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IFwiZHJhZ05kcm9wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Q6IGFuc3dlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcjogYW5zd2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiB0aGlzLm1pbmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdl9pZDogdGhpcy5kaXZpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJlY3Q6IHN0b3JlZE9iai5jb3JyZWN0LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maW5pc2hTZXR0aW5nVXAoKTtcbiAgICB9XG5cbiAgICBzZXRMb2NhbFN0b3JhZ2UoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS5hbnN3ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gSWYgd2UgZGlkbid0IGxvYWQgZnJvbSB0aGUgc2VydmVyLCB3ZSBtdXN0IGdlbmVyYXRlIHRoZSBkYXRhXG4gICAgICAgICAgICB0aGlzLnByZWduYW50SW5kZXhBcnJheSA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRyYWdQYWlyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaGFzTm9EcmFnQ2hpbGQodGhpcy5kcmFnUGFpckFycmF5W2ldWzFdKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuZHJhZ1BhaXJBcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcy5kcmFnUGFpckFycmF5W2ldWzFdKS5oYXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhZ1BhaXJBcnJheVtqXVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZWduYW50SW5kZXhBcnJheS5wdXNoKGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVnbmFudEluZGV4QXJyYXkucHVzaCgtMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciB0aW1lU3RhbXAgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgY29ycmVjdCA9IGRhdGEuY29ycmVjdDtcbiAgICAgICAgdmFyIHN0b3JhZ2VPYmogPSB7XG4gICAgICAgICAgICBhbnN3ZXI6IHRoaXMucHJlZ25hbnRJbmRleEFycmF5LmpvaW4oXCI7XCIpLFxuICAgICAgICAgICAgbWluSGVpZ2h0OiB0aGlzLm1pbmhlaWdodCxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogdGltZVN0YW1wLFxuICAgICAgICAgICAgY29ycmVjdDogY29ycmVjdCxcbiAgICAgICAgfTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZUtleSgpLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZU9iailcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBkaXNhYmxlSW50ZXJhY3Rpb24oKSB7XG4gICAgICAgICQodGhpcy5yZXNldEJ1dHRvbikuaGlkZSgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZHJhZ1BhaXJBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gTm8gbW9yZSBkcmFnZ2luZ1xuICAgICAgICAgICAgJCh0aGlzLmRyYWdQYWlyQXJyYXlbaV1bMF0pLmF0dHIoXCJkcmFnZ2FibGVcIiwgXCJmYWxzZVwiKTtcbiAgICAgICAgICAgICQodGhpcy5kcmFnUGFpckFycmF5W2ldWzBdKS5jc3MoXCJjdXJzb3JcIiwgXCJpbml0aWFsXCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT0gRmluZCB0aGUgY3VzdG9tIEhUTUwgdGFncyBhbmQgPT1cbj09ICAgZXhlY3V0ZSBvdXIgY29kZSBvbiB0aGVtICAgID09XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuJChkb2N1bWVudCkuYmluZChcInJ1bmVzdG9uZTpsb2dpbi1jb21wbGV0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIltkYXRhLWNvbXBvbmVudD1kcmFnbmRyb3BdXCIpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHZhciBvcHRzID0ge1xuICAgICAgICAgICAgb3JpZzogdGhpcyxcbiAgICAgICAgICAgIHVzZVJ1bmVzdG9uZVNlcnZpY2VzOiBlQm9va0NvbmZpZy51c2VSdW5lc3RvbmVTZXJ2aWNlcyxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCQodGhpcykuY2xvc2VzdChcIltkYXRhLWNvbXBvbmVudD10aW1lZEFzc2Vzc21lbnRdXCIpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGlzIGVsZW1lbnQgZXhpc3RzIHdpdGhpbiBhIHRpbWVkIGNvbXBvbmVudCwgZG9uJ3QgcmVuZGVyIGl0IGhlcmVcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZGRMaXN0W3RoaXMuaWRdID0gbmV3IERyYWdORHJvcChvcHRzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciByZW5kZXJpbmcgRHJhZ05Ecm9wIFByb2JsZW0gJHt0aGlzLmlkfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRHJhZ05Ecm9wIGZyb20gXCIuL2RyYWduZHJvcC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lZERyYWdORHJvcCBleHRlbmRzIERyYWdORHJvcCB7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcihvcHRzKTtcbiAgICAgICAgdGhpcy5maW5pc2hTZXR0aW5nVXAoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUaW1lZEljb24odGhpcy5jb250YWluZXJEaXYpO1xuICAgICAgICB0aGlzLmhpZGVCdXR0b25zKCk7XG4gICAgfVxuICAgIGhpZGVCdXR0b25zKCkge1xuICAgICAgICAkKHRoaXMuc3VibWl0QnV0dG9uKS5oaWRlKCk7XG4gICAgfVxuICAgIHJlbmRlclRpbWVkSWNvbihjb21wb25lbnQpIHtcbiAgICAgICAgLy8gcmVuZGVycyB0aGUgY2xvY2sgaWNvbiBvbiB0aW1lZCBjb21wb25lbnRzLiAgICBUaGUgY29tcG9uZW50IHBhcmFtZXRlclxuICAgICAgICAvLyBpcyB0aGUgZWxlbWVudCB0aGF0IHRoZSBpY29uIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cbiAgICAgICAgdmFyIHRpbWVJY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIHRpbWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgJCh0aW1lSWNvbikuYXR0cih7XG4gICAgICAgICAgICBzcmM6IFwiLi4vX3N0YXRpYy9jbG9jay5wbmdcIixcbiAgICAgICAgICAgIHN0eWxlOiBcIndpZHRoOjE1cHg7aGVpZ2h0OjE1cHhcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHRpbWVJY29uRGl2LmNsYXNzTmFtZSA9IFwidGltZVRpcFwiO1xuICAgICAgICB0aW1lSWNvbkRpdi50aXRsZSA9IFwiXCI7XG4gICAgICAgIHRpbWVJY29uRGl2LmFwcGVuZENoaWxkKHRpbWVJY29uKTtcbiAgICAgICAgJChjb21wb25lbnQpLnByZXBlbmQodGltZUljb25EaXYpO1xuICAgIH1cbiAgICBjaGVja0NvcnJlY3RUaW1lZCgpIHtcbiAgICAgICAgLy8gUmV0dXJucyBpZiB0aGUgcXVlc3Rpb24gd2FzIGNvcnJlY3QuICAgIFVzZWQgZm9yIHRpbWVkIGFzc2Vzc21lbnQgZ3JhZGluZy5cbiAgICAgICAgaWYgKHRoaXMudW5hbnN3ZXJlZE51bSA9PT0gdGhpcy5kcmFnUGFpckFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5jb3JyZWN0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHRoaXMuY29ycmVjdCkge1xuICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRcIjtcbiAgICAgICAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRlwiO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoaWRlRmVlZGJhY2soKSB7XG4gICAgICAgICQodGhpcy5mZWVkQmFja0RpdikuaGlkZSgpO1xuICAgIH1cbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPSB7fTtcbn1cbndpbmRvdy5jb21wb25lbnRfZmFjdG9yeVtcImRyYWduZHJvcFwiXSA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgaWYgKG9wdHMudGltZWQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUaW1lZERyYWdORHJvcChvcHRzKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEcmFnTkRyb3Aob3B0cyk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==