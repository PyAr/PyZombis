(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_parsons_js_timedparsons_js"],{

/***/ 25453:
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./runestone/parsons/css/parsons.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ 61667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_parsons_ll_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/parsons-ll.svg */ 86422);
/* harmony import */ var _images_parsons_rl_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/parsons-rl.svg */ 42471);
/* harmony import */ var _images_parsons_lr_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/parsons-lr.svg */ 80655);
/* harmony import */ var _images_parsons_rr_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/parsons-rr.svg */ 28640);
// Imports







var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_parsons_ll_svg__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_parsons_rl_svg__WEBPACK_IMPORTED_MODULE_4__);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_parsons_lr_svg__WEBPACK_IMPORTED_MODULE_5__);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_parsons_rr_svg__WEBPACK_IMPORTED_MODULE_6__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".parsons .sortable-code-container {\n    text-align: center;\n}\n.parsons .sortable-code-container:not(.block) {\n    /* Remove text highlighting in widget */\n    -webkit-user-select: none;\n    -moz-user-select: -moz-none;\n    -ms-user-select: none;\n    user-select: none;\n}\n.parsons .sortable-code {\n    position: static;\n    padding-left: 0px;\n    margin: 0px 15px;\n    display: inline-block;\n    text-align: left;\n    vertical-align: top;\n}\n.parsons .source,\n.parsons .answer,\n.parsons .answer1,\n.parsons .answer2,\n.parsons .answer3,\n.parsons .answer4 {\n    position: relative;\n    font-size: 100%;\n    list-style: none;\n    background-color: #efefff;\n    padding-bottom: 10px;\n    padding-left: 0;\n    margin-left: 0;\n    border: 1px solid #b8b8f2;\n}\n.parsons .source {\n    background-color: #efefff;\n}\n.parsons .answer {\n    background-color: #ffa;\n    border-color: #ee0;\n}\n.parsons .answer.incorrect {\n    background-color: #f2dede;\n    border-color: #f2b6b6;\n}\n.parsons .answer.correct {\n    background-color: #dff0d8;\n    border-color: #ade595;\n}\n.parsons .answer1 {\n    background: linear-gradient(#ee0, #ee0) no-repeat border-box;\n    background-size: 1px 100%;\n    background-position: 30px 0;\n    background-origin: padding-box;\n    background-color: #ffa;\n    border-color: #ee0;\n}\n.parsons .answer1.incorrect {\n    background: linear-gradient(#f2b6b6, #f2b6b6) no-repeat border-box;\n    background-size: 1px 100%;\n    background-position: 30px 0;\n    background-origin: padding-box;\n    background-color: #f2dede;\n    border-color: #f2b6b6;\n}\n.parsons .answer1.correct {\n    background: linear-gradient(#ade595, #ade595) no-repeat border-box;\n    background-size: 1px 100%;\n    background-position: 30px 0;\n    background-origin: padding-box;\n    background-color: #dff0d8;\n    border-color: #ade595;\n}\n.parsons .answer2 {\n    background: linear-gradient(#ee0, #ee0) no-repeat border-box,\n        linear-gradient(#ee0, #ee0) no-repeat border-box;\n    background-size: 1px 100%, 1px 100%;\n    background-position: 30px 0, 60px 0;\n    background-origin: padding-box, padding-box;\n    background-color: #ffa;\n    border-color: #ee0;\n}\n.parsons .answer2.incorrect {\n    background: linear-gradient(#f2b6b6, #f2b6b6) no-repeat border-box,\n        linear-gradient(#f2b6b6, #f2b6b6) no-repeat border-box;\n    background-size: 1px 100%, 1px 100%;\n    background-position: 30px 0, 60px 0;\n    background-origin: padding-box, padding-box;\n    background-color: #f2dede;\n    border-color: #f2b6b6;\n}\n.parsons .answer2.correct {\n    background: linear-gradient(#ade595, #ade595) no-repeat border-box,\n        linear-gradient(#ade595, #ade595) no-repeat border-box;\n    background-size: 1px 100%, 1px 100%;\n    background-position: 30px 0, 60px 0;\n    background-origin: padding-box, padding-box;\n    background-color: #dff0d8;\n    border-color: #ade595;\n}\n.parsons .answer3 {\n    background: linear-gradient(#ee0, #ee0) no-repeat border-box,\n        linear-gradient(#ee0, #ee0) no-repeat border-box,\n        linear-gradient(#ee0, #ee0) no-repeat border-box;\n    background-size: 1px 100%, 1px 100%, 1px 100%;\n    background-position: 30px 0, 60px 0, 90px 0;\n    background-origin: padding-box, padding-box, padding-box;\n    background-color: #ffa;\n    border-color: #ee0;\n}\n.parsons .answer3.incorrect {\n    background: linear-gradient(#f2b6b6, #f2b6b6) no-repeat border-box,\n        linear-gradient(#f2b6b6, #f2b6b6) no-repeat border-box,\n        linear-gradient(#f2b6b6, #f2b6b6) no-repeat border-box;\n    background-size: 1px 100%, 1px 100%, 1px 100%;\n    background-position: 30px 0, 60px 0, 90px 0;\n    background-origin: padding-box, padding-box, padding-box;\n    background-color: #f2dede;\n    border-color: #f2b6b6;\n}\n.parsons .answer3.correct {\n    background: linear-gradient(#ade595, #ade595) no-repeat border-box,\n        linear-gradient(#ade595, #ade595) no-repeat border-box,\n        linear-gradient(#ade595, #ade595) no-repeat border-box;\n    background-size: 1px 100%, 1px 100%, 1px 100%;\n    background-position: 30px 0, 60px 0, 90px 0;\n    background-origin: padding-box, padding-box, padding-box;\n    background-color: #dff0d8;\n    border-color: #ade595;\n}\n.parsons .answer4 {\n    background: linear-gradient(#ee0, #ee0) no-repeat border-box,\n        linear-gradient(#ee0, #ee0) no-repeat border-box,\n        linear-gradient(#ee0, #ee0) no-repeat border-box,\n        linear-gradient(#ee0, #ee0) no-repeat border-box;\n    background-size: 1px 100%, 1px 100%, 1px 100%, 1px 100%;\n    background-position: 30px 0, 60px 0, 90px 0, 120px 0;\n    background-origin: padding-box, padding-box, padding-box, padding-box;\n    background-color: #ffa;\n    border-color: #ee0;\n}\n.parsons .answer4.incorrect {\n    background: linear-gradient(#f2b6b6, #f2b6b6) no-repeat border-box,\n        linear-gradient(#f2b6b6, #f2b6b6) no-repeat border-box,\n        linear-gradient(#f2b6b6, #f2b6b6) no-repeat border-box,\n        linear-gradient(#f2b6b6, #f2b6b6) no-repeat border-box;\n    background-size: 1px 100%, 1px 100%, 1px 100%, 1px 100%;\n    background-position: 30px 0, 60px 0, 90px 0, 120px 0;\n    background-origin: padding-box, padding-box, padding-box, padding-box;\n    background-color: #f2dede;\n    border-color: #f2b6b6;\n}\n.parsons .answer4.correct {\n    background: linear-gradient(#ade595, #ade595) no-repeat border-box,\n        linear-gradient(#ade595, #ade595) no-repeat border-box,\n        linear-gradient(#ade595, #ade595) no-repeat border-box,\n        linear-gradient(#ade595, #ade595) no-repeat border-box;\n    background-size: 1px 100%, 1px 100%, 1px 100%, 1px 100%;\n    background-position: 30px 0, 60px 0, 90px 0, 120px 0;\n    background-origin: padding-box, padding-box, padding-box, padding-box;\n    background-color: #dff0d8;\n    border-color: #ade595;\n}\n.parsons .block {\n    position: absolute;\n    -moz-border-radius: 10px;\n    -webkit-border-radius: 10px;\n    border-radius: 10px;\n    background-color: #efefef;\n    border: 1px solid #d3d3d3;\n    padding: 5px 10px;\n    margin-top: 5px;\n    overflow: hidden;\n    cursor: move;\n}\n.parsons .block.disabled {\n    opacity: 0.3;\n}\n.parsons .block.down {\n    border: 2px solid black;\n    padding: 4px 9px;\n}\n.parsons .block.up {\n    border: 2px solid black;\n    padding: 4px 9px;\n    background-color: white;\n    box-shadow: 3px 3px 4px black;\n}\n.parsons {\n    display: block;\n}\n.parsons .block {\n    clear: both;\n    float: left;\n    /*background-color: transparent;*/\n}\n\n.parsons code {\n    display: inline-block;\n    clear: both;\n    float: left;\n    background-color: transparent;\n}\n\n.parsons-text code {\n    float: none;\n}\n\n.parsons .block p {\n    margin: 0;\n}\n.parsons .block,\n.parsons .block:before,\n.parsons .block:after {\n    box-sizing: content-box;\n}\n.parsons .indent1 {\n    margin-left: 30px;\n}\n.parsons .indent2 {\n    margin-left: 60px;\n}\n.parsons .indent3 {\n    margin-left: 90px;\n}\n.parsons .indent4 {\n    margin-left: 120px;\n}\n.parsons .correct {\n    border: 1px solid #d6e9c6;\n    background: none;\n    background-color: #dff0d8;\n}\n.parsons .indentLeft,\n.parsons .indentRight {\n    border: 2px solid #ffcc00;\n    padding: 4px 9px;\n    background-color: #fff0b3;\n}\n.parsons .indentLeft {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: no-repeat, no-repeat;\n    background-position: left center, right center;\n}\n.parsons .indentRight {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + "),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-repeat: no-repeat, no-repeat;\n    background-position: left center, right center;\n}\n.parsons .incorrectPosition {\n    background-color: #ffbaba;\n    border: 1px solid red;\n}\n.parsons .paired {\n    position: absolute;\n    -moz-border-radius: 10px;\n    -webkit-border-radius: 10px;\n    border-radius: 10px;\n    background-color: transparent;\n    border-left: 11px solid #b8b8f2;\n    border-right: 11px solid #b8b8f2;\n    border-top: 1px solid #b8b8f2;\n    border-bottom: 1px solid #b8b8f2;\n    margin-top: 5px;\n    overflow: hidden;\n}\n.parsons {\n    border-left: 0;\n    border-right: 0;\n    border-radius: 0;\n    margin: 10px 0;\n}\n.parsons .parsons-text {\n    max-width: 500pt;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.parsons .parsons-img {\n    display: inline-block;\n    text-align: center;\n    width: 100%;\n}\n\n.parsons .parsons-controls {\n    max-width: 500pt;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n}\n.parsons [role=\"tooltip\"] {\n    max-width: 500pt;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 5px;\n    margin-bottom: 5px;\n    padding: 0px 10px;\n    top: 0;\n    text-align: center;\n    font-style: italic;\n}\n\n.block-label {\n    font-family: \"Courier\";\n    font-size: 90%;\n    color: #7e7ee7;\n    vertical-align: top;\n    white-space: pre;\n}\n.right-label {\n    padding: 0.2em 0em 0.3em 0.6em;\n}\n.left-label {\n    padding: 0.2em 0.6em 0.3em 0em;\n}\n\n.labels {\n    padding-top: 2px;\n    display: inline-block;\n    vertical-align: top;\n}\n\n.runestone .lines {\n    display: inline-block;\n    align-self: left;\n}\n\n.border_left {\n    border-left: 1px solid #b0b0b0;\n}\n\n.block {\n    display: flex;\n    align-items: stretch;\n    align-content: stretch;\n}\n\n.parsons,\n.parsons .sortable-code-container,\n.cd_section {\n    max-width: none;\n}\n\n#timed_Test .pagination {\n    margin: 5px 0;\n}", "",{"version":3,"sources":["webpack://./runestone/parsons/css/parsons.css"],"names":[],"mappings":"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","sourcesContent":[".parsons .sortable-code-container {\n    text-align: center;\n}\n.parsons .sortable-code-container:not(.block) {\n    /* Remove text highlighting in widget */\n    -webkit-user-select: none;\n    -moz-user-select: -moz-none;\n    -ms-user-select: none;\n    user-select: none;\n}\n.parsons .sortable-code {\n    position: static;\n    padding-left: 0px;\n    margin: 0px 15px;\n    display: inline-block;\n    text-align: left;\n    vertical-align: top;\n}\n.parsons .source,\n.parsons .answer,\n.parsons .answer1,\n.parsons .answer2,\n.parsons .answer3,\n.parsons .answer4 {\n    position: relative;\n    font-size: 100%;\n    list-style: none;\n    background-color: #efefff;\n    padding-bottom: 10px;\n    padding-left: 0;\n    margin-left: 0;\n    border: 1px solid #b8b8f2;\n}\n.parsons .source {\n    background-color: #efefff;\n}\n.parsons .answer {\n    background-color: #ffa;\n    border-color: #ee0;\n}\n.parsons .answer.incorrect {\n    background-color: #f2dede;\n    border-color: #f2b6b6;\n}\n.parsons .answer.correct {\n    background-color: #dff0d8;\n    border-color: #ade595;\n}\n.parsons .answer1 {\n    background: linear-gradient(#ee0, #ee0) no-repeat border-box;\n    background-size: 1px 100%;\n    background-position: 30px 0;\n    background-origin: padding-box;\n    background-color: #ffa;\n    border-color: #ee0;\n}\n.parsons .answer1.incorrect {\n    background: linear-gradient(#f2b6b6, #f2b6b6) no-repeat border-box;\n    background-size: 1px 100%;\n    background-position: 30px 0;\n    background-origin: padding-box;\n    background-color: #f2dede;\n    border-color: #f2b6b6;\n}\n.parsons .answer1.correct {\n    background: linear-gradient(#ade595, #ade595) no-repeat border-box;\n    background-size: 1px 100%;\n    background-position: 30px 0;\n    background-origin: padding-box;\n    background-color: #dff0d8;\n    border-color: #ade595;\n}\n.parsons .answer2 {\n    background: linear-gradient(#ee0, #ee0) no-repeat border-box,\n        linear-gradient(#ee0, #ee0) no-repeat border-box;\n    background-size: 1px 100%, 1px 100%;\n    background-position: 30px 0, 60px 0;\n    background-origin: padding-box, padding-box;\n    background-color: #ffa;\n    border-color: #ee0;\n}\n.parsons .answer2.incorrect {\n    background: linear-gradient(#f2b6b6, #f2b6b6) no-repeat border-box,\n        linear-gradient(#f2b6b6, #f2b6b6) no-repeat border-box;\n    background-size: 1px 100%, 1px 100%;\n    background-position: 30px 0, 60px 0;\n    background-origin: padding-box, padding-box;\n    background-color: #f2dede;\n    border-color: #f2b6b6;\n}\n.parsons .answer2.correct {\n    background: linear-gradient(#ade595, #ade595) no-repeat border-box,\n        linear-gradient(#ade595, #ade595) no-repeat border-box;\n    background-size: 1px 100%, 1px 100%;\n    background-position: 30px 0, 60px 0;\n    background-origin: padding-box, padding-box;\n    background-color: #dff0d8;\n    border-color: #ade595;\n}\n.parsons .answer3 {\n    background: linear-gradient(#ee0, #ee0) no-repeat border-box,\n        linear-gradient(#ee0, #ee0) no-repeat border-box,\n        linear-gradient(#ee0, #ee0) no-repeat border-box;\n    background-size: 1px 100%, 1px 100%, 1px 100%;\n    background-position: 30px 0, 60px 0, 90px 0;\n    background-origin: padding-box, padding-box, padding-box;\n    background-color: #ffa;\n    border-color: #ee0;\n}\n.parsons .answer3.incorrect {\n    background: linear-gradient(#f2b6b6, #f2b6b6) no-repeat border-box,\n        linear-gradient(#f2b6b6, #f2b6b6) no-repeat border-box,\n        linear-gradient(#f2b6b6, #f2b6b6) no-repeat border-box;\n    background-size: 1px 100%, 1px 100%, 1px 100%;\n    background-position: 30px 0, 60px 0, 90px 0;\n    background-origin: padding-box, padding-box, padding-box;\n    background-color: #f2dede;\n    border-color: #f2b6b6;\n}\n.parsons .answer3.correct {\n    background: linear-gradient(#ade595, #ade595) no-repeat border-box,\n        linear-gradient(#ade595, #ade595) no-repeat border-box,\n        linear-gradient(#ade595, #ade595) no-repeat border-box;\n    background-size: 1px 100%, 1px 100%, 1px 100%;\n    background-position: 30px 0, 60px 0, 90px 0;\n    background-origin: padding-box, padding-box, padding-box;\n    background-color: #dff0d8;\n    border-color: #ade595;\n}\n.parsons .answer4 {\n    background: linear-gradient(#ee0, #ee0) no-repeat border-box,\n        linear-gradient(#ee0, #ee0) no-repeat border-box,\n        linear-gradient(#ee0, #ee0) no-repeat border-box,\n        linear-gradient(#ee0, #ee0) no-repeat border-box;\n    background-size: 1px 100%, 1px 100%, 1px 100%, 1px 100%;\n    background-position: 30px 0, 60px 0, 90px 0, 120px 0;\n    background-origin: padding-box, padding-box, padding-box, padding-box;\n    background-color: #ffa;\n    border-color: #ee0;\n}\n.parsons .answer4.incorrect {\n    background: linear-gradient(#f2b6b6, #f2b6b6) no-repeat border-box,\n        linear-gradient(#f2b6b6, #f2b6b6) no-repeat border-box,\n        linear-gradient(#f2b6b6, #f2b6b6) no-repeat border-box,\n        linear-gradient(#f2b6b6, #f2b6b6) no-repeat border-box;\n    background-size: 1px 100%, 1px 100%, 1px 100%, 1px 100%;\n    background-position: 30px 0, 60px 0, 90px 0, 120px 0;\n    background-origin: padding-box, padding-box, padding-box, padding-box;\n    background-color: #f2dede;\n    border-color: #f2b6b6;\n}\n.parsons .answer4.correct {\n    background: linear-gradient(#ade595, #ade595) no-repeat border-box,\n        linear-gradient(#ade595, #ade595) no-repeat border-box,\n        linear-gradient(#ade595, #ade595) no-repeat border-box,\n        linear-gradient(#ade595, #ade595) no-repeat border-box;\n    background-size: 1px 100%, 1px 100%, 1px 100%, 1px 100%;\n    background-position: 30px 0, 60px 0, 90px 0, 120px 0;\n    background-origin: padding-box, padding-box, padding-box, padding-box;\n    background-color: #dff0d8;\n    border-color: #ade595;\n}\n.parsons .block {\n    position: absolute;\n    -moz-border-radius: 10px;\n    -webkit-border-radius: 10px;\n    border-radius: 10px;\n    background-color: #efefef;\n    border: 1px solid #d3d3d3;\n    padding: 5px 10px;\n    margin-top: 5px;\n    overflow: hidden;\n    cursor: move;\n}\n.parsons .block.disabled {\n    opacity: 0.3;\n}\n.parsons .block.down {\n    border: 2px solid black;\n    padding: 4px 9px;\n}\n.parsons .block.up {\n    border: 2px solid black;\n    padding: 4px 9px;\n    background-color: white;\n    box-shadow: 3px 3px 4px black;\n}\n.parsons {\n    display: block;\n}\n.parsons .block {\n    clear: both;\n    float: left;\n    /*background-color: transparent;*/\n}\n\n.parsons code {\n    display: inline-block;\n    clear: both;\n    float: left;\n    background-color: transparent;\n}\n\n.parsons-text code {\n    float: none;\n}\n\n.parsons .block p {\n    margin: 0;\n}\n.parsons .block,\n.parsons .block:before,\n.parsons .block:after {\n    box-sizing: content-box;\n}\n.parsons .indent1 {\n    margin-left: 30px;\n}\n.parsons .indent2 {\n    margin-left: 60px;\n}\n.parsons .indent3 {\n    margin-left: 90px;\n}\n.parsons .indent4 {\n    margin-left: 120px;\n}\n.parsons .correct {\n    border: 1px solid #d6e9c6;\n    background: none;\n    background-color: #dff0d8;\n}\n.parsons .indentLeft,\n.parsons .indentRight {\n    border: 2px solid #ffcc00;\n    padding: 4px 9px;\n    background-color: #fff0b3;\n}\n.parsons .indentLeft {\n    background-image: url(\"./images/parsons-ll.svg\"),\n        url(\"./images/parsons-rl.svg\");\n    background-repeat: no-repeat, no-repeat;\n    background-position: left center, right center;\n}\n.parsons .indentRight {\n    background-image: url(\"./images/parsons-lr.svg\"),\n        url(\"./images/parsons-rr.svg\");\n    background-repeat: no-repeat, no-repeat;\n    background-position: left center, right center;\n}\n.parsons .incorrectPosition {\n    background-color: #ffbaba;\n    border: 1px solid red;\n}\n.parsons .paired {\n    position: absolute;\n    -moz-border-radius: 10px;\n    -webkit-border-radius: 10px;\n    border-radius: 10px;\n    background-color: transparent;\n    border-left: 11px solid #b8b8f2;\n    border-right: 11px solid #b8b8f2;\n    border-top: 1px solid #b8b8f2;\n    border-bottom: 1px solid #b8b8f2;\n    margin-top: 5px;\n    overflow: hidden;\n}\n.parsons {\n    border-left: 0;\n    border-right: 0;\n    border-radius: 0;\n    margin: 10px 0;\n}\n.parsons .parsons-text {\n    max-width: 500pt;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.parsons .parsons-img {\n    display: inline-block;\n    text-align: center;\n    width: 100%;\n}\n\n.parsons .parsons-controls {\n    max-width: 500pt;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n}\n.parsons [role=\"tooltip\"] {\n    max-width: 500pt;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 5px;\n    margin-bottom: 5px;\n    padding: 0px 10px;\n    top: 0;\n    text-align: center;\n    font-style: italic;\n}\n\n.block-label {\n    font-family: \"Courier\";\n    font-size: 90%;\n    color: #7e7ee7;\n    vertical-align: top;\n    white-space: pre;\n}\n.right-label {\n    padding: 0.2em 0em 0.3em 0.6em;\n}\n.left-label {\n    padding: 0.2em 0.6em 0.3em 0em;\n}\n\n.labels {\n    padding-top: 2px;\n    display: inline-block;\n    vertical-align: top;\n}\n\n.runestone .lines {\n    display: inline-block;\n    align-self: left;\n}\n\n.border_left {\n    border-left: 1px solid #b0b0b0;\n}\n\n.block {\n    display: flex;\n    align-items: stretch;\n    align-content: stretch;\n}\n\n.parsons,\n.parsons .sortable-code-container,\n.cd_section {\n    max-width: none;\n}\n\n#timed_Test .pagination {\n    margin: 5px 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 86898:
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./runestone/parsons/css/prettify.css ***!
  \**********************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".str{color:#080}.kwd{color:#008}.com{color:#800}.typ{color:#606}.lit{color:#066}.pun{color:#660}.pln{color:#000}.tag{color:#008}.atn{color:#606}.atv{color:#080}.dec{color:#606}pre.prettyprint{padding:2px;border:1px solid #888}@media print{.str{color:#060}.kwd{color:#006;font-weight:bold}.com{color:#600;font-style:italic}.typ{color:#404;font-weight:bold}.lit{color:#044}.pun{color:#440}.pln{color:#000}.tag{color:#006;font-weight:bold}.atn{color:#404}.atv{color:#060}}", "",{"version":3,"sources":["webpack://./runestone/parsons/css/prettify.css"],"names":[],"mappings":"AAAA,KAAK,UAAU,CAAC,KAAK,UAAU,CAAC,KAAK,UAAU,CAAC,KAAK,UAAU,CAAC,KAAK,UAAU,CAAC,KAAK,UAAU,CAAC,KAAK,UAAU,CAAC,KAAK,UAAU,CAAC,KAAK,UAAU,CAAC,KAAK,UAAU,CAAC,KAAK,UAAU,CAAC,gBAAgB,WAAW,CAAC,qBAAqB,CAAC,aAAa,KAAK,UAAU,CAAC,KAAK,UAAU,CAAC,gBAAgB,CAAC,KAAK,UAAU,CAAC,iBAAiB,CAAC,KAAK,UAAU,CAAC,gBAAgB,CAAC,KAAK,UAAU,CAAC,KAAK,UAAU,CAAC,KAAK,UAAU,CAAC,KAAK,UAAU,CAAC,gBAAgB,CAAC,KAAK,UAAU,CAAC,KAAK,UAAU,CAAC","sourcesContent":[".str{color:#080}.kwd{color:#008}.com{color:#800}.typ{color:#606}.lit{color:#066}.pun{color:#660}.pln{color:#000}.tag{color:#008}.atn{color:#606}.atv{color:#080}.dec{color:#606}pre.prettyprint{padding:2px;border:1px solid #888}@media print{.str{color:#060}.kwd{color:#006;font-weight:bold}.com{color:#600;font-style:italic}.typ{color:#404;font-weight:bold}.lit{color:#044}.pun{color:#440}.pln{color:#000}.tag{color:#006;font-weight:bold}.atn{color:#404}.atv{color:#060}}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 90331:
/*!*******************************************!*\
  !*** ./runestone/parsons/css/parsons.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_parsons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./parsons.css */ 25453);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_parsons_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_parsons_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ 12558:
/*!********************************************!*\
  !*** ./runestone/parsons/css/prettify.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_prettify_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./prettify.css */ 86898);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_prettify_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_prettify_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ 86422:
/*!*****************************************************!*\
  !*** ./runestone/parsons/css/images/parsons-ll.svg ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTJweCIgaGVpZ2h0PSI2MDBweCIgdmlld0JveD0iMCAwIDEyIDYwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTIgNjAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5Z29uIGZpbGw9IiNGRkNDMDAiIHBvaW50cz0iMTIsMCAwLDAgMCw2MDAgMTIsNjAwIDEyLDMxMCAyLDMwMCAxMiwyOTAgIi8+DQo8cG9seWdvbiBwb2ludHM9IjUsMzAwIDEyLDI5MyAxMiwyOTAgMiwzMDAgMTIsMzEwIDEyLDMwNyAiLz4NCjwvc3ZnPg0K";

/***/ }),

/***/ 80655:
/*!*****************************************************!*\
  !*** ./runestone/parsons/css/images/parsons-lr.svg ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTJweCIgaGVpZ2h0PSI2MDBweCIgdmlld0JveD0iMCAwIDEyIDYwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTIgNjAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5Z29uIHBvaW50cz0iOSwzMDAgMiwyOTMgMiwyOTAgMTIsMzAwIDIsMzEwIDIsMzA3ICIvPg0KPHBvbHlnb24gZmlsbD0iI0ZGQ0MwMCIgcG9pbnRzPSI5LDMwMCAwLDI5MSAwLDMwOSAiLz4NCjxyZWN0IGZpbGw9IiNGRkNDMDAiIHdpZHRoPSIyIiBoZWlnaHQ9IjYwMCIvPg0KPC9zdmc+DQo=";

/***/ }),

/***/ 42471:
/*!*****************************************************!*\
  !*** ./runestone/parsons/css/images/parsons-rl.svg ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTJweCIgaGVpZ2h0PSI2MDBweCIgdmlld0JveD0iMCAwIDEyIDYwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTIgNjAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5Z29uIHBvaW50cz0iMTAsMzA3IDEwLDMxMCAwLDMwMCAxMCwyOTAgMTAsMjkzIDMsMzAwICIvPg0KPHBvbHlnb24gZmlsbD0iI0ZGQ0MwMCIgcG9pbnRzPSIxMiwzMDkgMTIsMjkxIDMsMzAwICIvPg0KPHJlY3QgeD0iMTAiIGZpbGw9IiNGRkNDMDAiIHdpZHRoPSIyIiBoZWlnaHQ9IjYwMCIvPg0KPC9zdmc+DQo=";

/***/ }),

/***/ 28640:
/*!*****************************************************!*\
  !*** ./runestone/parsons/css/images/parsons-rr.svg ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTJweCIgaGVpZ2h0PSI2MDBweCIgdmlld0JveD0iMCAwIDEyIDYwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTIgNjAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5Z29uIGZpbGw9IiNGRkNDMDAiIHBvaW50cz0iMCwyOTAgMTAsMzAwIDAsMzEwIDAsNjAwIDEyLDYwMCAxMiwwIDAsMCAiLz4NCjxwb2x5Z29uIHBvaW50cz0iMCwzMDcgMCwzMTAgMTAsMzAwIDAsMjkwIDAsMjkzIDcsMzAwICIvPg0KPC9zdmc+DQo=";

/***/ }),

/***/ 97430:
/*!********************************************!*\
  !*** ./runestone/parsons/js/hammer.min.js ***!
  \********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&la(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==oa?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ma.length;){if(c=ma[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return ua++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:xa?M:ya?P:wa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ea&&d-e===0,g=b&(Ga|Ha)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=ra(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=qa(j.x)>qa(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ea&&f.eventType!==Ga||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ha&&(i>Da||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=qa(l.x)>qa(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:pa(a.pointers[c].clientX),clientY:pa(a.pointers[c].clientY)},c++;return{timeStamp:ra(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:pa(a[0].clientX),y:pa(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:pa(c/b),y:pa(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ia:qa(a)>=qa(b)?0>a?Ja:Ka:0>b?La:Ma}function H(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Ra)+I(a[1],a[0],Ra)}function K(a,b){return H(b[0],b[1],Ra)/H(a[0],a[1],Ra)}function L(){this.evEl=Ta,this.evWin=Ua,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Xa,this.evWin=Ya,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=$a,this.evWin=_a,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ga|Ha)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=bb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ea|Fa)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ea)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ga|Ha)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a),this.primaryTouch=null,this.lastTouches=[]}function S(a,b){a&Ea?(this.primaryTouch=b.changedPointers[0].identifier,T.call(this,b)):a&(Ga|Ha)&&T.call(this,b)}function T(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1)};setTimeout(e,cb)}}function U(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(db>=f&&db>=g)return!0}return!1}function V(a,b){this.manager=a,this.set(b)}function W(a){if(p(a,jb))return jb;var b=p(a,kb),c=p(a,lb);return b&&c?jb:b||c?b?kb:lb:p(a,ib)?ib:hb}function X(){if(!fb)return!1;var b={},c=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){b[d]=c?a.CSS.supports("touch-action",d):!0}),b}function Y(a){this.options=la({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=nb,this.simultaneous={},this.requireFail=[]}function Z(a){return a&sb?"cancel":a&qb?"end":a&pb?"move":a&ob?"start":""}function $(a){return a==Ma?"down":a==La?"up":a==Ja?"left":a==Ka?"right":""}function _(a,b){var c=b.manager;return c?c.get(a):a}function aa(){Y.apply(this,arguments)}function ba(){aa.apply(this,arguments),this.pX=null,this.pY=null}function ca(){aa.apply(this,arguments)}function da(){Y.apply(this,arguments),this._timer=null,this._input=null}function ea(){aa.apply(this,arguments)}function fa(){aa.apply(this,arguments)}function ga(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ha(a,b){return b=b||{},b.recognizers=l(b.recognizers,ha.defaults.preset),new ia(a,b)}function ia(a,b){this.options=la({},ha.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=y(this),this.touchAction=new V(this,this.options.touchAction),ja(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=u(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function ka(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var la,ma=["","webkit","Moz","MS","ms","o"],na=b.createElement("div"),oa="function",pa=Math.round,qa=Math.abs,ra=Date.now;la="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var sa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),ta=h(function(a,b){return sa(a,b,!0)},"merge","Use `assign`."),ua=1,va=/mobile|tablet|ip(ad|hone|od)|android/i,wa="ontouchstart"in a,xa=u(a,"PointerEvent")!==d,ya=wa&&va.test(navigator.userAgent),za="touch",Aa="pen",Ba="mouse",Ca="kinect",Da=25,Ea=1,Fa=2,Ga=4,Ha=8,Ia=1,Ja=2,Ka=4,La=8,Ma=16,Na=Ja|Ka,Oa=La|Ma,Pa=Na|Oa,Qa=["x","y"],Ra=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Sa={mousedown:Ea,mousemove:Fa,mouseup:Ga},Ta="mousedown",Ua="mousemove mouseup";i(L,x,{handler:function(a){var b=Sa[a.type];b&Ea&&0===a.button&&(this.pressed=!0),b&Fa&&1!==a.which&&(b=Ga),this.pressed&&(b&Ga&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:Ba,srcEvent:a}))}});var Va={pointerdown:Ea,pointermove:Fa,pointerup:Ga,pointercancel:Ha,pointerout:Ha},Wa={2:za,3:Aa,4:Ba,5:Ca},Xa="pointerdown",Ya="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xa="MSPointerDown",Ya="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Va[d],f=Wa[a.pointerType]||a.pointerType,g=f==za,h=r(b,a.pointerId,"pointerId");e&Ea&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ga|Ha)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Za={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},$a="touchstart",_a="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Za[a.type];if(b===Ea&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Ga|Ha)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}}});var ab={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},bb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=ab[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}});var cb=2500,db=25;i(R,x,{handler:function(a,b,c){var d=c.pointerType==za,e=c.pointerType==Ba;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)S.call(this,b,c);else if(e&&U.call(this,c))return;this.callback(a,b,c)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var eb=u(na.style,"touchAction"),fb=eb!==d,gb="compute",hb="auto",ib="manipulation",jb="none",kb="pan-x",lb="pan-y",mb=X();V.prototype={set:function(a){a==gb&&(a=this.compute()),fb&&this.manager.element.style&&mb[a]&&(this.manager.element.style[eb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),W(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,jb)&&!mb[jb],f=p(d,lb)&&!mb[lb],g=p(d,kb)&&!mb[kb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Na||g&&c&Oa?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var nb=1,ob=2,pb=4,qb=8,rb=qb,sb=16,tb=32;Y.prototype={defaults:{},set:function(a){return la(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=_(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=_(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=_(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;qb>d&&b(c.options.event+Z(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=qb&&b(c.options.event+Z(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=tb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(tb|nb)))return!1;a++}return!0},recognize:function(a){var b=la({},a);return k(this.options.enable,[this,b])?(this.state&(rb|sb|tb)&&(this.state=nb),this.state=this.process(b),void(this.state&(ob|pb|qb|sb)&&this.tryEmit(b))):(this.reset(),void(this.state=tb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(aa,Y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(ob|pb),e=this.attrTest(a);return d&&(c&Ha||!e)?b|sb:d||e?c&Ga?b|qb:b&ob?b|pb:ob:tb}}),i(ba,aa,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pa},getTouchAction:function(){var a=this.options.direction,b=[];return a&Na&&b.push(lb),a&Oa&&b.push(kb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Na?(e=0===f?Ia:0>f?Ja:Ka,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ia:0>g?La:Ma,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return aa.prototype.attrTest.call(this,a)&&(this.state&ob||!(this.state&ob)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i(ca,aa,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&ob)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(da,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[hb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ga|Ha)&&!f)this.reset();else if(a.eventType&Ea)this.reset(),this._timer=e(function(){this.state=rb,this.tryEmit()},b.time,this);else if(a.eventType&Ga)return rb;return tb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===rb&&(a&&a.eventType&Ga?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=ra(),this.manager.emit(this.options.event,this._input)))}}),i(ea,aa,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&ob)}}),i(fa,aa,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Na|Oa,pointers:1},getTouchAction:function(){return ba.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Na|Oa)?b=a.overallVelocity:c&Na?b=a.overallVelocityX:c&Oa&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&qa(b)>this.options.velocity&&a.eventType&Ga},emit:function(a){var b=$(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ga,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ib]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ea&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ga)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=rb,this.tryEmit()},b.interval,this),ob):rb}return tb},failTimeout:function(){return this._timer=e(function(){this.state=tb},this.options.interval,this),tb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==rb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ha.VERSION="2.0.8",ha.defaults={domEvents:!1,touchAction:gb,enable:!0,inputTarget:null,inputClass:null,preset:[[ea,{enable:!1}],[ca,{enable:!1},["rotate"]],[fa,{direction:Na}],[ba,{direction:Na},["swipe"]],[ga],[ga,{event:"doubletap",taps:2},["tap"]],[da]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ub=1,vb=2;ia.prototype={set:function(a){return la(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?vb:ub},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&rb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===vb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(ob|pb|qb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){if(a!==d&&b!==d){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this}},off:function(a,b){if(a!==d){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this}},emit:function(a,b){this.options.domEvents&&ka(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ja(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},la(ha,{INPUT_START:Ea,INPUT_MOVE:Fa,INPUT_END:Ga,INPUT_CANCEL:Ha,STATE_POSSIBLE:nb,STATE_BEGAN:ob,STATE_CHANGED:pb,STATE_ENDED:qb,STATE_RECOGNIZED:rb,STATE_CANCELLED:sb,STATE_FAILED:tb,DIRECTION_NONE:Ia,DIRECTION_LEFT:Ja,DIRECTION_RIGHT:Ka,DIRECTION_UP:La,DIRECTION_DOWN:Ma,DIRECTION_HORIZONTAL:Na,DIRECTION_VERTICAL:Oa,DIRECTION_ALL:Pa,Manager:ia,Input:x,TouchAction:V,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:aa,Tap:ga,Pan:ba,Swipe:fa,Pinch:ca,Rotate:ea,Press:da,on:m,off:n,each:g,merge:ta,extend:sa,assign:la,inherit:i,bindFn:j,prefixed:u});var wb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};wb.Hammer=ha, true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return ha}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.js.map

/***/ }),

/***/ 21417:
/*!********************************************!*\
  !*** ./runestone/parsons/js/lineGrader.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LineBasedGrader)
/* harmony export */ });
class LineBasedGrader {
    constructor(problem) {
        this.problem = problem;
    }
    // Use a LIS (Longest Increasing Subsequence) algorithm to return the indexes
    // that are not part of that subsequence.
    inverseLISIndices(arr) {
        // Get all subsequences
        var allSubsequences = [];
        for (var i = 0; i < arr.length; i++) {
            var subsequenceForCurrent = [arr[i]],
                current = arr[i],
                lastElementAdded = -1;
            for (var j = i; j < arr.length; j++) {
                var subsequent = arr[j];
                if (subsequent > current && lastElementAdded < subsequent) {
                    subsequenceForCurrent.push(subsequent);
                    lastElementAdded = subsequent;
                }
            }
            allSubsequences.push(subsequenceForCurrent);
        }
        // Figure out the longest one
        var longestSubsequenceLength = -1;
        var longestSubsequence;
        for (let i in allSubsequences) {
            var subs = allSubsequences[i];
            if (subs.length > longestSubsequenceLength) {
                longestSubsequenceLength = subs.length;
                longestSubsequence = subs;
            }
        }
        // Create the inverse indexes
        var indexes = [];
        var lIndex = 0;
        for (let i = 0; i < arr.length; i++) {
            if (lIndex > longestSubsequence.length) {
                indexes.push(i);
            } else {
                if (arr[i] == longestSubsequence[lIndex]) {
                    lIndex += 1;
                } else {
                    indexes.push(i);
                }
            }
        }
        return indexes;
    }
    // grade that element, returning the state
    grade() {
        var problem = this.problem;
        problem.clearFeedback();
        this.correctLines = 0;
        this.percentLines = 0;
        this.incorrectIndents = 0;
        var solutionLines = problem.solution;
        var answerLines = problem.answerLines();
        var i;
        var state;
        this.percentLines =
            Math.min(answerLines.length, solutionLines.length) /
            Math.max(answerLines.length, solutionLines.length);
        if (answerLines.length < solutionLines.length) {
            state = "incorrectTooShort";
            this.correctLength = false;
        } else if (answerLines.length == solutionLines.length) {
            this.correctLength = true;
        } else {
            this.correctLength = false;
        }

        // Determine whether the code **that is there** is in the correct order
        // If there is too much or too little code this only matters for
        // calculating a percentage score.
        let isCorrectOrder = true;
        this.correctLines = 0;
        this.solutionLength = solutionLines.length;
        let loopLimit = Math.min(solutionLines.length, answerLines.length);
        for (i = 0; i < loopLimit; i++) {
            if (answerLines[i].text !== solutionLines[i].text) {
                isCorrectOrder = false;
            } else {
                this.correctLines += 1;
            }
        }

        // Determine whether blocks are indented correctly
        this.indentLeft = [];
        this.indentRight = [];
        for (i = 0; i < loopLimit; i++) {
            if (answerLines[i].viewIndent() < solutionLines[i].indent) {
                this.indentRight.push(answerLines[i]);
            } else if (answerLines[i].viewIndent() > solutionLines[i].indent) {
                this.indentLeft.push(answerLines[i]);
            }
        }
        this.incorrectIndents =
            this.indentLeft.length + this.indentRight.length;
        if (
            this.incorrectIndents == 0 &&
            isCorrectOrder &&
            this.correctLength
        ) {
            // Perfect
            state = "correct";
        } else if (this.correctLength && isCorrectOrder) {
            state = "incorrectIndent";
        } else if (!isCorrectOrder && state != "incorrectTooShort") {
            state = "incorrectMoveBlocks";
        }
        this.calculatePercent();
        this.graderState = state;
        return state;
    }

    calculatePercent() {
        let numLines = this.percentLines * 0.2;
        let lines = this.problem.answerLines().length;
        let numCorrectBlocks = (this.correctLines / lines) * 0.4;
        let numCorrectIndents =
            ((this.correctLines - this.incorrectIndents) / lines) * 0.4;

        this.problem.percent = numLines + numCorrectBlocks + numCorrectIndents;
    }
}


/***/ }),

/***/ 59164:
/*!*************************************************!*\
  !*** ./runestone/parsons/js/parsons-i18n.en.js ***!
  \*************************************************/
/***/ (() => {

$.i18n().load({
    en: {
        msg_parson_check_me: "Check",
        msg_parson_reset: "Reset",
        msg_parson_help: "Help me",
        msg_parson_too_short: "Your program is too short. Add more blocks.",
        msg_parson_drag_from_here: "Drag from here",
        msg_parson_drag_to_here: "Drop blocks here",
        msg_parson_correct_first_try:
            "Perfect!  It took you only one try to solve this.  Great job!",
        msg_parson_correct:
            "Perfect!  It took you $1 tries to solve this.  Click Reset to try to solve it in one attempt.",
        msg_parson_wrong_indent:
            "This block is not indented correctly. Either indent it more by dragging it right or reduce the indention by dragging it left.",
        msg_parson_wrong_indents:
            "These blocks are not indented correctly. To indent a block more, drag it to the right. To reduce the indention, drag it to the left.",
        msg_parson_wrong_order:
            "Highlighted blocks in your program are wrong or are in the wrong order. This can be fixed by moving, removing, or replacing highlighted blocks.",
        msg_parson_arrow_navigate:
            "Arrow keys to navigate. Space to select / deselect block to move.",
        msg_parson_help_info:
            "Click on the Help Me button if you want to make the problem easier",
        msg_parson_not_solution:
            "Disabled an unneeded code block (one that is not part of the solution).",
        msg_parson_provided_indent: "Provided the indentation.",
        msg_parson_combined_blocks: "Combined two code blocks into one.",
        msg_parson_remove_incorrect:
            "Will remove an incorrect code block from answer area",
        msg_parson_will_combine: "Will combine two blocks",
        msg_parson_atleast_three_attempts:
            "You must make at least three distinct full attempts at a solution before you can get help",
        msg_parson_three_blocks_left:
            "There are only 3 correct blocks left.  You should be able to put them in order",
        msg_parson_will_provide_indent: "Will provide indentation",
    },
});


/***/ }),

/***/ 16432:
/*!****************************************************!*\
  !*** ./runestone/parsons/js/parsons-i18n.pt-br.js ***!
  \****************************************************/
/***/ (() => {

$.i18n().load({
    "pt-br": {
        msg_parson_check_me: "Verificar",
        msg_parson_reset: "Resetar",
        msg_parson_help:"Ajuda",
        msg_parson_too_short: "Seu programa é muito curto. Adicione mais blocos.",
        msg_parson_drag_from_here: "Arraste daqui",
        msg_parson_drag_to_here: "Largue os blocos aqui",
        msg_parson_correct_first_try:
            "Perfeito! Você levou apenas uma tentativa para resolver. Bom trabalho!",
        msg_parson_correct:
            "Perfeito! Você levou $1 tentativas para resolver. Clique em Resetar para tentar resolver em uma tentativa." ,
        msg_parson_wrong_indent:
            "Este bloco não está indentado corretamente. Indente mais arrastando-o para a direita ou reduza a indentação arrastando para a esquerda.",
        msg_parson_wrong_indents:
            "Estes blocos não estão indentados corretamente. Para indentar mais, arraste o bloco para a direita. Para reduzir a indentação, arraste para a esquerda.",
        msg_parson_wrong_order:
            "Blocos destacados no seu programa estão errados ou estão na ordem errada. Isso pode ser resolvido movendo, excluindo ou substituindo os blocos destacados.",
        msg_parson_arrow_navigate:
            "Use as teclas de setas para navegar. Espaço para selecionar/ desmarcar blocos para mover.",
        msg_parson_help_info:
            "Clique no botão Ajuda se você quiser facilitar o problema",
        msg_parson_not_solution:
            "Foi desabilitado um bloco de código desnecessário (que não faz parte da solução).",
        msg_parson_provided_indent:"Foi fornecida a indentação.",
        msg_parson_combined_blocks:"Dois blocos de códigos foram combinados em um.",
        msg_parson_remove_incorrect:
            "Será removido um bloco de código incorreto da área de resposta",
        msg_parson_will_combine:"Serão combinados dois blocos",
        msg_parson_atleast_three_attempts:
            "Você deve tentar pelo menos três vezes antes de pedir ajuda",
        msg_parson_three_blocks_left:
            "Restam apenas 3 blocos corretos. Você deve colocá-los em ordem",
        msg_parson_will_provide_indent: "Será fornecida a indentação"
    },
});


/***/ }),

/***/ 35718:
/*!*****************************************!*\
  !*** ./runestone/parsons/js/parsons.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Parsons)
/* harmony export */ });
/* harmony import */ var _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase.js */ 2568);
/* harmony import */ var _parsons_i18n_en_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsons-i18n.en.js */ 59164);
/* harmony import */ var _parsons_i18n_en_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_parsons_i18n_en_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _parsons_i18n_pt_br_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsons-i18n.pt-br.js */ 16432);
/* harmony import */ var _parsons_i18n_pt_br_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_parsons_i18n_pt_br_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _prettify_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prettify.js */ 87904);
/* harmony import */ var _prettify_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prettify_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_parsons_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/parsons.css */ 90331);
/* harmony import */ var _css_prettify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/prettify.css */ 12558);
/* harmony import */ var _lineGrader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lineGrader */ 21417);
/* harmony import */ var _parsonsLine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsonsLine */ 18423);
/* harmony import */ var _parsonsBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsonsBlock */ 404);
/* =====================================================================
==== Parsons Runestone Directive Javascript ============================
======== Renders a Parsons problem based on the HTML created by the
======== parsons.py script and the RST file.
==== CONTRIBUTORS ======================================================
======== Isaiah Mayerchak
======== Jeff Rick
======== Barbara Ericson
======== Cole Bowers
==== Adapted form the original JS Parsons by ===========================
======== Ville Karavirta
======== Petri Ihantola
======== Juha Helminen
======== Mike Hewner
===================================================================== */
/* =====================================================================
==== LineBasedGrader Object ============================================
======== Used for grading a Parsons problem.
==== PROPERTIES ========================================================
======== problem: the Parsons problem
===================================================================== */












/* =====================================================================
==== Parsons Object ====================================================
======== The model and view of a Parsons problem based on what is
======== specified in the HTML, which is based on what is specified
======== in the RST file
==== PROPERTIES ========================================================
======== options: options largely specified from the HTML
======== grader: a LineGrader for grading the problem
======== lines: an array of all ParsonsLine as specified in the problem
======== solution: an array of ParsonsLine in the solution
======== blocks: the current blocks
======== sourceArea: the element that contains the source blocks
======== answerArea: the element that contains the answer blocks
===================================================================== */

/* =====================================================================
==== INITIALIZATION ====================================================
===================================================================== */

var prsList = {}; // Parsons dictionary
class Parsons extends _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(opts) {
        super(opts);
        var orig = opts.orig; // entire <pre> element that will be replaced by new HTML
        this.containerDiv = orig;
        this.origElem = $(orig).find("pre.parsonsblocks")[0];
        // Find the question text and store it in .question
        this.question = $(orig).find(`.parsons_question`)[0];
        this.useRunestoneServices = opts.useRunestoneServices;
        this.divid = opts.orig.id;
        // Set the storageId (key for storing data)
        var storageId = super.localStorageKey();
        this.storageId = storageId;
        this.children = this.origElem.childNodes; // this contains all of the child elements of the entire tag...
        this.contentArray = [];
        Parsons.counter++; //    Unique identifier
        this.counterId = "parsons-" + Parsons.counter;

        // for (var i = 0; i < this.children.length; i++) {
        //     if ($(this.children[i]).is("[data-question]")) {
        //         this.question = this.children[i];
        //         break;
        //     }
        // }
        this.initializeOptions();
        this.grader = new _lineGrader__WEBPACK_IMPORTED_MODULE_6__.default(this);
        this.grader.showfeedback = this.showfeedback;
        var fulltext = $(this.origElem).html();
        this.blockIndex = 0;
        this.checkCount = 0;
        this.numDistinct = 0;
        this.hasSolved = false;
        this.initializeLines(fulltext.trim());
        this.initializeView();
        this.caption = "Parsons";
        this.addCaption("runestone");
        // Check the server for an answer to complete things
        this.checkServer("parsons", true);
    }
    // Based on the data-fields in the original HTML, initialize options
    initializeOptions() {
        var options = {
            pixelsPerIndent: 30,
        };
        // add maxdist and order if present
        var maxdist = $(this.origElem).data("maxdist");
        var order = $(this.origElem).data("order");
        var noindent = $(this.origElem).data("noindent");
        var adaptive = $(this.origElem).data("adaptive");
        var numbered = $(this.origElem).data("numbered");
        options["numbered"] = numbered;
        if (maxdist !== undefined) {
            options["maxdist"] = maxdist;
        }
        if (order !== undefined) {
            // convert order string to array of numbers
            order = order.match(/\d+/g);
            for (var i = 0; i < order.length; i++) {
                order[i] = parseInt(order[i]);
            }
            options["order"] = order;
        }
        if (noindent == undefined) {
            noindent = false;
        }
        options["noindent"] = noindent;
        this.noindent = noindent;
        if (adaptive == undefined) {
            adaptive = false;
        } else if (adaptive) {
            this.initializeAdaptive();
        }
        options["adaptive"] = adaptive;
        // add locale and language
        var locale = eBookConfig.locale;
        if (locale == undefined) {
            locale = "en";
        }
        options["locale"] = locale;
        var language = $(this.origElem).data("language");
        if (language == undefined) {
            language = eBookConfig.language;
            if (language == undefined) {
                language = "python";
            }
        }
        options["language"] = language;
        var prettifyLanguage = {
            python: "prettyprint lang-py",
            java: "prettyprint lang-java",
            javascript: "prettyprint lang-js",
            html: "prettyprint lang-html",
            c: "prettyprint lang-c",
            "c++": "prettyprint lang-cpp",
            ruby: "prettyprint lang-rb",
        }[language];
        if (prettifyLanguage == undefined) {
            prettifyLanguage = "";
        }
        options["prettifyLanguage"] = prettifyLanguage;
        this.options = options;
    }
    // Based on what is specified in the original HTML, create the HTML view
    initializeView() {
        this.outerDiv = document.createElement("div");
        $(this.outerDiv).addClass("parsons alert alert-warning");
        this.outerDiv.id = this.counterId;
        this.parsTextDiv = document.createElement("div");
        $(this.parsTextDiv).addClass("parsons-text");
        this.keyboardTip = document.createElement("div");
        $(this.keyboardTip).attr("role", "tooltip");
        this.keyboardTip.id = this.counterId + "-tip";
        this.keyboardTip.innerHTML = $.i18n("msg_parson_arrow_navigate");
        this.outerDiv.appendChild(this.keyboardTip);
        $(this.keyboardTip).hide();
        this.sortContainerDiv = document.createElement("div");
        $(this.sortContainerDiv).addClass("sortable-code-container");
        $(this.sortContainerDiv).attr(
            "aria-describedby",
            this.counterId + "-tip"
        );
        this.outerDiv.appendChild(this.sortContainerDiv);
        this.sourceRegionDiv = document.createElement("div");
        this.sourceRegionDiv.id = this.counterId + "-sourceRegion";
        $(this.sourceRegionDiv).addClass("sortable-code");
        this.sourceLabel = document.createElement("div");
        $(this.sourceLabel).attr("role", "tooltip");
        this.sourceLabel.id = this.counterId + "-sourceTip";
        this.sourceLabel.innerHTML = $.i18n("msg_parson_drag_from_here");
        this.sourceRegionDiv.appendChild(this.sourceLabel);
        this.sortContainerDiv.appendChild(this.sourceRegionDiv);
        this.sourceArea = document.createElement("div");
        this.sourceArea.id = this.counterId + "-source";
        $(this.sourceArea).addClass("source");
        $(this.sourceArea).attr(
            "aria-describedby",
            this.counterId + "-sourceTip"
        );
        this.sourceRegionDiv.appendChild(this.sourceArea);
        this.answerRegionDiv = document.createElement("div");
        this.answerRegionDiv.id = this.counterId + "-answerRegion";
        $(this.answerRegionDiv).addClass("sortable-code");
        this.answerLabel = document.createElement("div");
        $(this.answerLabel).attr("role", "tooltip");
        this.answerLabel.id = this.counterId + "-answerTip";
        this.answerLabel.innerHTML = $.i18n("msg_parson_drag_to_here");
        this.answerRegionDiv.appendChild(this.answerLabel);
        this.sortContainerDiv.appendChild(this.answerRegionDiv);
        this.answerArea = document.createElement("div");
        this.answerArea.id = this.counterId + "-answer";
        $(this.answerArea).attr(
            "aria-describedby",
            this.counterId + "-answerTip"
        );
        this.answerRegionDiv.appendChild(this.answerArea);
        this.parsonsControlDiv = document.createElement("div");
        $(this.parsonsControlDiv).addClass("parsons-controls");
        this.outerDiv.appendChild(this.parsonsControlDiv);
        var that = this;
        this.checkButton = document.createElement("button");
        $(this.checkButton).attr("class", "btn btn-success");
        this.checkButton.textContent = $.i18n("msg_parson_check_me");
        this.checkButton.id = this.counterId + "-check";
        this.parsonsControlDiv.appendChild(this.checkButton);
        this.checkButton.type = "button";
        this.checkButton.addEventListener("click", function (event) {
            event.preventDefault();
            that.checkCurrentAnswer();
            that.logCurrentAnswer();
            that.renderFeedback();
        });
        this.resetButton = document.createElement("button");
        $(this.resetButton).attr("class", "btn btn-default");
        this.resetButton.textContent = $.i18n("msg_parson_reset");
        this.resetButton.id = this.counterId + "-reset";
        this.resetButton.type = "button";
        this.parsonsControlDiv.appendChild(this.resetButton);
        this.resetButton.addEventListener("click", function (event) {
            event.preventDefault();
            that.clearFeedback();
            $(that.checkButton).prop("disabled", false);
            that.resetView();
            that.logMove("reset");
            that.setLocalStorage();
        });
        if (this.options.adaptive) {
            this.helpButton = document.createElement("button");
            $(this.helpButton).attr("class", "btn btn-primary");
            this.helpButton.textContent = $.i18n("msg_parson_help");
            this.helpButton.id = this.counterId + "-help";
            this.helpButton.disabled = false; // bje
            this.parsonsControlDiv.appendChild(this.helpButton);
            this.helpButton.addEventListener("click", function (event) {
                event.preventDefault();
                that.helpMe();
            });
        }
        this.messageDiv = document.createElement("div");
        this.messageDiv.id = this.counterId + "-message";
        this.parsonsControlDiv.appendChild(this.messageDiv);
        $(this.messageDiv).hide();
        $(this.origElem).replaceWith(this.outerDiv);
        $(this.outerDiv).closest(".sqcontainer").css("max-width", "none");
        if (this.outerDiv) {
            if ($(this.question).html().match(/^\s+$/)) {
                $(this.question).remove();
            } else {
                $(this.outerDiv).prepend(this.question);
            }
        }
    }
    // Initialize lines and solution properties
    initializeLines(text) {
        this.lines = [];
        // Create the initial blocks
        var textBlocks = text.split("---");
        if (textBlocks.length === 1) {
            // If there are no ---, then every line is its own block
            textBlocks = text.split("\n");
        }
        var solution = [];
        var indents = [];
        for (var i = 0; i < textBlocks.length; i++) {
            var textBlock = textBlocks[i];
            // Figure out options based on the #option
            // Remove the options from the code
            // only options are #paired or #distractor
            var options = {};
            var distractIndex;
            var distractHelptext = "";
            if (textBlock.includes("#paired:")) {
                distractIndex = textBlock.indexOf("#paired:");
                distractHelptext = textBlock.substring(distractIndex + 8, textBlock.length).trim();
                textBlock = textBlock.substring(0, distractIndex + 7);
            }
            else if (textBlock.includes("#distractor:")) {
                distractIndex = textBlock.indexOf("#distractor:");
                distractHelptext = textBlock.substring(distractIndex + 12, textBlock.length).trim();
                textBlock = textBlock.substring(0, distractIndex + 11);
            }
            textBlock = textBlock.replace(
                /#(paired|distractor)/,
                function (mystring, arg1) {
                    options[arg1] = true;
                    return "";
                }
            );
            // Create lines
            var lines = [];
            var split = textBlock.split("\n");
            for (var j = 0; j < split.length; j++) {
                var code = split[j];
                // discard blank rows
                if (!/^\s*$/.test(code)) {
                    var line = new _parsonsLine__WEBPACK_IMPORTED_MODULE_7__.default(this, code);
                    lines.push(line);
                    if (options["paired"]) {
                        line.distractor = true;
                        line.paired = true;
                        line.distractHelptext = distractHelptext;
                    } else if (options["distractor"]) {
                        line.distractor = true;
                        line.paired = false;
                        line.distractHelptext = distractHelptext;
                    } else {
                        line.distractor = false;
                        line.paired = false;
                        solution.push(line);
                    }
                    if ($.inArray(line.indent, indents) == -1) {
                        indents.push(line.indent);
                    }
                }
            }
            if (lines.length > 0) {
                // Add groupWithNext
                for (j = 0; j < lines.length - 1; j++) {
                    lines[j].groupWithNext = true;
                }
                lines[lines.length - 1].groupWithNext = false;
            }
        }
        // Normalize the indents
        indents = indents.sort(function (a, b) {
            return a - b;
        });
        for (i = 0; i < this.lines.length; i++) {
            line = this.lines[i];
            line.indent = indents.indexOf(line.indent);
        }
        this.solution = solution;
    }
    // Based on the blocks, create the source and answer areas
    initializeAreas(sourceBlocks, answerBlocks, options) {
        // Create blocks property as the sum of the two
        var blocks = [];
        var i, block;
        for (i = 0; i < sourceBlocks.length; i++) {
            block = sourceBlocks[i];
            blocks.push(block);
            this.sourceArea.appendChild(block.view);
        }
        for (i = 0; i < answerBlocks.length; i++) {
            block = answerBlocks[i];
            blocks.push(block);
            this.answerArea.appendChild(block.view);
        }
        this.blocks = blocks;
        // If present, disable some blocks
        var disabled = options.disabled;
        if (disabled !== undefined) {
            for (i = 0; i < blocks.length; i++) {
                block = blocks[i];
                if (disabled.includes(block.lines[0].index)) {
                    $(block.view).addClass("disabled");
                }
            }
        }
        // Determine how much indent should be possible in the answer area
        var indent = 0;
        if (!this.noindent) {
            if (this.options.language == "natural") {
                indent = this.solutionIndent();
            } else {
                indent = Math.max(0, this.solutionIndent());
            }
        }
        this.indent = indent;
        // For rendering, place in an onscreen position
        var isHidden = this.outerDiv.offsetParent == null;
        var replaceElement;
        if (isHidden) {
            replaceElement = document.createElement("div");
            $(this.outerDiv).replaceWith(replaceElement);
            document.body.appendChild(this.outerDiv);
        }
        if (this.options.prettifyLanguage !== "") {
            prettyPrint();
        }
        for (let i = 0; i < this.lines.length; i++) {
            this.lines[i].initializeWidth();
        }
        // Layout the areas
        var areaWidth, areaHeight;
        // Establish the width and height of the droppable areas
        var item, maxFunction;
        areaHeight = 6;
        var height_add = 0;
        if (this.options.numbered != undefined) {
            height_add = 1;
        }
        if (this.options.language == "natural" || this.options.language == "math") {
            areaWidth = 300;
            maxFunction = function (item) {
                item.width(areaWidth - 22);
                var addition = 3.8;
                if (item.outerHeight(true) != 38)
                    addition = (2.1 * (item.outerHeight(true) - 38)) / 21;
                areaHeight += item.outerHeight(true) + height_add * addition;
            };
        } else {
            areaWidth = 300;
            // This maxFunction is how Parsons areas width and height were being calculated previously,
            // but at some point .outerHeight and .outerWidth stopped returning correct values
            // causing lines to overflow and display awkwardly. - Vincent Qiu (September 2020)
            // maxFunction = function (item) {
            //     var addition = 3.8;
            //     if (item.outerHeight(true) != 38) addition = 2.1;
            //     areaHeight += item.outerHeight(true) + height_add * addition;
            //     areaWidth = Math.max(areaWidth, item.outerWidth(true));
            // };

            // This new maxFunction is how Parsons areas width and height are being calculated now manually - Vincent Qiu (September 2020)
            maxFunction = function (item) {
                var addition = 3.8;

                // Determine which index within the Parsons block JavaScript object contains the text lines and consequently the passed through data - Vincent Qiu (September 2020)
                var linesIndex;
                var linesItem = item[0].children;
                for (
                    linesIndex = 0;
                    linesIndex < item[0].children.length;
                    linesIndex++
                ) {
                    if (
                        item[0].children[linesIndex].className.includes("lines")
                    ) {
                        break;
                    }
                }

                // Create a canvas and set the passed through fontSize and fontFamily in order to measure text width - Vincent Qiu (September 2020)
                var fontSize = linesItem[linesIndex].children[0].fontSize;
                var fontFamily = linesItem[linesIndex].children[0].fontFamily;
                var tempCanvas = document.createElement("canvas");
                var tempCanvasCtx = tempCanvas.getContext("2d");
                tempCanvasCtx.font = fontSize + " " + fontFamily;

                // Increment Parsons area height based on number of lines of text in the current Parsons block - Vincent Qiu (September 2020)
                var singleHeight = 40;
                var additionalHeight = 20;
                areaHeight += Math.ceil(
                    // For future more accurate height display, this calculation should also be conditionally based on fontFamily
                    singleHeight +
                        (linesItem[linesIndex].children.length - 1) *
                            additionalHeight +
                        height_add * addition
                );

                // Determine the longest text line in the current Parsons block and calculate its width - Vincent Qiu (September 2020)
                var itemLength;
                var pixelsPerIndent;
                var indent;
                var maxInnerText;
                var maxInnerLength = 0;
                var i;
                var widthLimit = 475;
                var longCount = 0;
                for (i = 0; i < linesItem[linesIndex].children.length; i++) {
                    pixelsPerIndent =
                        linesItem[linesIndex].children[i].pixelsPerIndent;
                    indent = linesItem[linesIndex].children[i].indent;
                    itemLength = Math.ceil(
                        pixelsPerIndent * indent +
                            tempCanvasCtx.measureText(
                                linesItem[linesIndex].children[i].innerText
                            ).width
                    );
                    longCount += Math.floor(itemLength / (widthLimit - 29));
                    if (itemLength > maxInnerLength) {
                        maxInnerText =
                            linesItem[linesIndex].children[i].innerText;
                        maxInnerLength = itemLength;
                    }
                }
                areaWidth = Math.max(areaWidth, maxInnerLength + 40);
                // Set width limit and determine how much additional height is needed to accommodate the forced text overflow - Vincent Qiu (September 2020)
                if (areaWidth > widthLimit) {
                    areaWidth = widthLimit;
                    areaHeight += longCount * additionalHeight;
                }
            };
        }
        for (i = 0; i < blocks.length; i++) {
            maxFunction($(blocks[i].view));
        }
        this.areaWidth = areaWidth;
        if (this.options.numbered != undefined) {
            this.areaWidth += 25;
            //areaHeight += (blocks.length);
        }
        // + 40 to areaHeight to provide some additional buffer in case any text overflow still happens - Vincent Qiu (September 2020)
        this.areaHeight = areaHeight + 40;
        $(this.sourceArea).css({
            width: this.areaWidth + 2,
            height: areaHeight,
        });
        $(this.answerArea).css({
            width: this.options.pixelsPerIndent * indent + this.areaWidth + 2,
            height: areaHeight,
        });
        if (indent > 0 && indent <= 4) {
            $(this.answerArea).addClass("answer" + indent);
        } else {
            $(this.answerArea).addClass("answer");
        }
        // Initialize paired distractor decoration
        var bins = [];
        var bin = [];
        for (i = 0; i < this.lines.length; i++) {
            var line = this.lines[i];
            if (line.block() == undefined) {
                if (bin.length > 0) {
                    bins.push(bin);
                    bin = [];
                }
            } else {
                bin.push(line);
                if (!line.groupWithNext) {
                    bins.push(bin);
                    bin = [];
                }
            }
        }
        var pairedBins = [];
        var lineNumbers = [];
        var pairedDivs = [];
        var j;
        if (this.pairDistractors || !this.options.adaptive) {
            for (i = bins.length - 1; i > -1; i--) {
                bin = bins[i];
                if (bin[0].paired) {
                    // Add all in bin to line numbers
                    for (j = bin.length - 1; j > -1; j--) {
                        lineNumbers.unshift(bin[j].index);
                    }
                } else {
                    if (lineNumbers.length > 0) {
                        // Add all in bin to line numbers
                        for (j = bin.length - 1; j > -1; j--) {
                            lineNumbers.unshift(bin[j].index);
                        }
                        pairedBins.unshift(lineNumbers);
                        lineNumbers = [];
                    }
                }
            }
            for (i = 0; i < pairedBins.length; i++) {
                var pairedDiv = document.createElement("div");
                $(pairedDiv).addClass("paired");
                $(pairedDiv).html(
                    "<span id= 'st' style = 'vertical-align: middle; font-weight: bold'>or{</span>"
                );
                pairedDivs.push(pairedDiv);
                this.sourceArea.appendChild(pairedDiv);
            }
        } else {
            pairedBins = [];
        }
        this.pairedBins = pairedBins;
        this.pairedDivs = pairedDivs;
        if (this.options.numbered != undefined) {
            this.addBlockLabels(sourceBlocks.concat(answerBlocks));
        }
        // Update the view
        this.state = undefined; // needs to be here for loading from storage
        this.updateView();
        // Put back into the offscreen position
        if (isHidden) {
            $(replaceElement).replaceWith(this.outerDiv);
        }
    }
    // Make blocks interactive (both drag-and-drop and keyboard)
    initializeInteractivity() {
        for (var i = 0; i < this.blocks.length; i++) {
            this.blocks[i].initializeInteractivity();
        }
        this.initializeTabIndex();
        if (this.options.language == "natural" || this.options.language == "math") {
            if (typeof MathJax !== "undefined") {
                MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.outerDiv]);    
            } 
        }
    }
    // Make one block be keyboard accessible
    initializeTabIndex() {
        for (var i = 0; i < this.blocks.length; i++) {
            var block = this.blocks[i];
            if (block.enabled()) {
                block.makeTabIndex();
                return this;
            }
        }
    }
    /* =====================================================================
    ==== SERVER COMMUNICATION ==============================================
    ===================================================================== */
    // Return the argument that is newer based on the timestamp
    newerData(dataA, dataB) {
        var dateA = dataA.timestamp;
        var dateB = dataB.timestamp;
        if (dateA == undefined) {
            return dataB;
        }
        if (dateB == undefined) {
            return dataA;
        }
        dateA = this.dateFromTimestamp(dateA);
        dateB = this.dateFromTimestamp(dateB);
        if (dateA > dateB) {
            return dataA;
        } else {
            return dataB;
        }
    }
    // Based on the data, load
    loadData(data) {
        var sourceHash = data.source;
        if (sourceHash == undefined) {
            // maintain backwards compatibility
            sourceHash = data.trash;
        }
        var answerHash = data.answer;
        var adaptiveHash = data.adaptive;
        var options;
        if (adaptiveHash == undefined) {
            options = {};
        } else {
            options = this.optionsFromHash(adaptiveHash);
        }
        if (options.noindent !== undefined) {
            this.noindent = true;
        }
        if (options.checkCount !== undefined) {
            this.checkCount = options.checkCount;
        }
        if (options.hasSolved !== undefined) {
            this.hasSolved = options.hasSolved;
        }
        if (
            sourceHash == undefined ||
            answerHash == undefined ||
            answerHash.length == 1
        ) {
            this.initializeAreas(this.blocksFromSource(), [], options);
        } else {
            this.initializeAreas(
                this.blocksFromHash(sourceHash),
                this.blocksFromHash(answerHash),
                options
            );
            this.grade = this.grader.grade();
            this.correct = this.grade;
        }
        // Start the interface
        if (this.needsReinitialization !== true) {
            this.initializeInteractivity();
        }
    }
    // Return what is stored in local storage
    localData() {
        var data = localStorage.getItem(this.storageId);
        if (data !== null) {
            if (data.charAt(0) == "{") {
                data = JSON.parse(data);
            } else {
                data = {};
            }
        } else {
            data = {};
        }
        return data;
    }
    // RunestoneBase: Sent when the server has data
    restoreAnswers(serverData) {
        this.loadData(serverData);
    }
    // RunestoneBase: Load what is in local storage
    checkLocalStorage() {
        if (this.graderactive) {
            return;
        }
        this.loadData(this.localData());
    }
    // RunestoneBase: Set the state of the problem in local storage
    setLocalStorage(data) {
        var toStore;
        if (data == undefined) {
            toStore = {
                source: this.sourceHash(),
                answer: this.answerHash(),
                timestamp: new Date(),
            };
            var adaptiveHash = this.adaptiveHash();
            if (adaptiveHash.length > 0) {
                toStore.adaptive = adaptiveHash;
            }
        } else {
            toStore = data;
        }
        localStorage.setItem(this.storageId, JSON.stringify(toStore));
    }
    /* =====================================================================
    ==== LOGGING ===========================================================
    ===================================================================== */
    // Log the interaction with the problem to the server:
    //   start: the user started interacting with this problem
    //   move: the user moved a block to a new position
    //   reset: the reset button was pressed
    //   removeDistractor: "Help Me" removed a distractor
    //   removeIndentation: "Help Me" removed indentation
    //   combineBlocks: "Help Me" combined blocks
    logMove(activity) {
        var event = {
            event: "parsonsMove",
            div_id: this.divid,
            storageid: super.localStorageKey(),
        };
        var act = activity + "|" + this.sourceHash() + "|" + this.answerHash();
        var adaptiveHash = this.adaptiveHash();
        if (adaptiveHash !== "") {
            act = act + "|" + adaptiveHash;
        }
        event.act = act;
        this.logBookEvent(event);
    }
    // Log the answer to the problem
    //   correct: The answer given matches the solution
    //   incorrect*: The answer is wrong for various reasons
    logCurrentAnswer() {
        var event = {
            event: "parsons",
            div_id: this.divid,
        };
        var answerHash = this.answerHash();
        event.answer = answerHash;
        var sourceHash = this.sourceHash();
        event.source = sourceHash;
        var act = sourceHash + "|" + answerHash;
        var adaptiveHash = this.adaptiveHash();
        if (adaptiveHash !== "") {
            event.adaptive = adaptiveHash;
            act = act + "|" + adaptiveHash;
        }
        if (this.grade == "correct") {
            act = "correct|" + act;
            event.correct = "T";
        } else {
            act = "incorrect|" + act;
            event.correct = "F";
        }
        event.act = act;
        this.logBookEvent(event);
    }
    /* =====================================================================
    ==== ACCESSING =========================================================
    ===================================================================== */
    // Answer the hash of the adaptive state
    adaptiveHash() {
        if (!this.options.adaptive) {
            return "";
        }
        var hash = [];
        for (var i = 0; i < this.blocks.length; i++) {
            var block = this.blocks[i];
            if (!block.enabled()) {
                hash.push("d" + block.lines[0].index);
            }
        }
        if (this.noindent !== this.options.noindent) {
            hash.push("i");
        }
        hash.push("c" + this.checkCount);
        if (this.hasSolved) {
            hash.push("s");
        }
        return hash.join("-");
    }
    // Create options for creating blocks based on a hash
    optionsFromHash(hash) {
        var split;
        if (hash === "-" || hash === "" || hash === null) {
            split = [];
        } else {
            split = hash.split("-");
        }
        var options = {};
        var disabled = [];
        for (var i = 0; i < split.length; i++) {
            var key = split[i];
            if (key[0] == "i") {
                options.noindent = true;
            } else if (key[0] == "d") {
                disabled.push(parseInt(key.slice(1)));
            } else if (key[0] == "s") {
                options.hasSolved = true;
            } else if (key[0] == "c") {
                options.checkCount = parseInt(key.slice(1));
            }
        }
        if (disabled.length > 0) {
            options.disabled = disabled;
        }
        return options;
    }
    // Answer the hash of the answer area
    answerHash() {
        var hash = [];
        var blocks = this.answerBlocks();
        for (var i = 0; i < blocks.length; i++) {
            hash.push(blocks[i].hash());
        }
        if (hash.length === 0) {
            return "-";
        } else {
            return hash.join("-");
        }
    }
    // Answer the hash of the source area
    sourceHash() {
        var hash = [];
        var blocks = this.sourceBlocks();
        for (var i = 0; i < blocks.length; i++) {
            hash.push(blocks[i].hash());
        }
        if (hash.length === 0) {
            return "-";
        } else {
            return hash.join("-");
        }
    }
    // Inter-problem adaptive changes
    // Based on the recentAttempts, remove distractors, add indent, combine blocks
    adaptBlocks(input) {
        var blocks = [];
        var distractors = [];
        var block;
        for (var i = 0; i < input.length; i++) {
            block = input[i];
            if (block.isDistractor()) {
                distractors.push(block);
            } else {
                blocks.push(block);
            }
        }
        this.recentAttempts = localStorage.getItem(
            this.adaptiveId + "recentAttempts"
        );
        if (this.recentAttempts == undefined || this.recentAttempts == "NaN") {
            this.recentAttempts = 3;
        }
        var lastestAttemptCount = this.recentAttempts;
        var nBlocks = blocks.length;
        var nBlocksToCombine = 0;
        var nDistractors = distractors.length;
        var nToRemove = 0;
        this.pairDistractors = true;
        var giveIndentation = false;
        if (lastestAttemptCount < 2) {
            // 1 Try
            this.pairDistractors = false;
            this.limitDistractors = false;
        } else if (lastestAttemptCount < 4) {
            // 2-3 Tries
            // Do nothing they are doing normal
            this.pairDistractors = true;
        } else if (lastestAttemptCount < 6) {
            // 4-5 Tries
            // pair distractors
            this.pairDistractors = true;
        } else if (lastestAttemptCount < 8) {
            // 6-7 Tries
            // Remove 50% of distractors
            nToRemove = 0.5 * nDistractors;
            this.pairDistractors = true;
        } else {
            // 8+ Tries
            // Remove all of distractors
            nToRemove = nDistractors;
            this.pairDistractors = true;
        }
        /*
        else if(lastestAttemptCount < 12) { //10-11
            // Remove all distractors and give indentation
            nToRemove = nDistractors;
            giveIndentation = true;
            this.pairDistractors = true;
        } else if(lastestAttemptCount < 14) { // 12-13 Tries
            // Remove all of distractors
            // give indentation
            // reduce problem to 3/4 size
            giveIndentation = true;
            nToRemove = nDistractors;
            nBlocksToCombine = .25 * nBlocks;
            this.pairDistractors = true;
        } else { // >= 14 Tries
            // Remove all of distractors
            // give indentation
            // reduce problem to 1/2 size
            giveIndentation = true;
            nToRemove = nDistractors;
            nBlocksToCombine = .5 * nBlocks;
            this.pairDistractors = true;
        }
        */
        nBlocksToCombine = Math.min(nBlocksToCombine, nBlocks - 3);
        // Never combine so where there are less than three blocks left
        // Remove distractors
        distractors = this.shuffled(distractors);
        distractors = distractors.slice(0, nToRemove);
        var output = [];
        for (i = 0; i < input.length; i++) {
            block = input[i];
            if (!block.isDistractor()) {
                output.push(block);
            } else if ($.inArray(block, distractors) == -1) {
                output.push(block);
            }
        }
        //var output = input;
        if (giveIndentation) {
            for (let i = 0; i < output.length; i++) {
                output[i].addIndent();
            }
            this.indent = 0;
            this.noindent = true;
        }
        // combine blocks
        var solution = [];
        for (i = 0; i < this.lines.length; i++) {
            for (var j = 0; j < output.length; j++) {
                if (output[j].lines[0].index == i) {
                    solution.push(output[j]);
                }
            }
        }
        for (let i = 0; i < nBlocksToCombine; i++) {
            // combine one set of blocks
            var best = -10;
            var combineIndex = -10;
            for (j = 0; j < solution.length - 1; j++) {
                block = solution[j];
                var next = solution[j + 1];
                var rating = 10 - block.lines.length - next.lines.length;
                var blockIndent = block.minimumLineIndent();
                var nextIndent = next.minimumLineIndent();
                if (blockIndent == nextIndent) {
                    rating += 2;
                } else if (blockIndent > nextIndent) {
                    rating -= 1;
                }
                if (
                    block.lines[block.lines.length - 1].indent ==
                    next.lines[0].indent
                ) {
                    rating += 1;
                }
                if (rating >= best) {
                    best = rating;
                    combineIndex = j;
                }
            }
            block = solution[combineIndex];
            next = solution[combineIndex + 1];
            for (j = 0; j < next.lines.length; j++) {
                block.addLine(next.lines[j]);
            }
            var newSolution = [];
            for (j = 0; j < solution.length; j++) {
                if (j !== combineIndex + 1) {
                    newSolution.push(solution[j]);
                }
            }
            var solution = newSolution;
        }
        // reorder
        var combinedOutput = [];
        for (i = 0; i < output.length; i++) {
            for (j = 0; j < solution.length; j++) {
                if (output[i].lines[0].index == solution[j].lines[0].index) {
                    combinedOutput.push(solution[j]);
                }
            }
        }
        return combinedOutput;
    }
    // Return an array of code blocks based on what is specified in the problem
    blocksFromSource() {
        var unorderedBlocks = [];
        var originalBlocks = [];
        var blocks = [];
        var lines = [];
        var block, line, i;
        for (i = 0; i < this.lines.length; i++) {
            line = this.lines[i];
            lines.push(line);
            if (!line.groupWithNext) {
                unorderedBlocks.push(new _parsonsBlock__WEBPACK_IMPORTED_MODULE_8__.default(this, lines));
                lines = [];
            }
        }
        originalBlocks = unorderedBlocks;
        // Trim the distractors
        var removedBlocks = [];
        if (this.options.maxdist !== undefined) {
            var maxdist = this.options.maxdist;
            var distractors = [];
            for (i = 0; i < unorderedBlocks.length; i++) {
                block = unorderedBlocks[i];
                if (block.lines[0].distractor) {
                    distractors.push(block);
                }
            }
            if (maxdist < distractors.length) {
                distractors = this.shuffled(distractors);
                distractors = distractors.slice(0, maxdist);
                for (i = 0; i < unorderedBlocks.length; i++) {
                    block = unorderedBlocks[i];
                    if (block.lines[0].distractor) {
                        if ($.inArray(block, distractors) > -1) {
                            blocks.push(block);
                        } else {
                            removedBlocks.push(i);
                        }
                    } else {
                        blocks.push(block);
                    }
                }
                unorderedBlocks = blocks;
                blocks = [];
            }
        }

        // This is necessary, set the pairDistractors value before blocks get shuffled - William Li (August 2020)
        if (this.recentAttempts < 2) {
            // 1 Try
            this.pairDistractors = false;
        } else {
            this.pairDistractors = true;
        }

        if (this.options.order === undefined) {
            // Shuffle, respecting paired distractors
            var chunks = [],
                chunk = [];
            for (i = 0; i < unorderedBlocks.length; i++) {
                block = unorderedBlocks[i];
                if (block.lines[0].paired && this.pairDistractors) {
                    // William Li (August 2020)
                    chunk.push(block);
                } else {
                    chunk = [];
                    chunk.push(block);
                    chunks.push(chunk);
                }
            }
            chunks = this.shuffled(chunks);
            for (i = 0; i < chunks.length; i++) {
                chunk = chunks[i];
                if (chunk.length > 1) {
                    // shuffle paired distractors
                    chunk = this.shuffled(chunk);
                    for (j = 0; j < chunk.length; j++) {
                        blocks.push(chunk[j]);
                    }
                } else {
                    blocks.push(chunk[0]);
                }
            }
        } else {
            // Order according to order specified
            for (i = 0; i < this.options.order.length; i++) {
                block = originalBlocks[this.options.order[i]];
                if (
                    block !== undefined &&
                    $.inArray(this.options.order[i], removedBlocks) < 0
                ) {
                    blocks.push(block);
                }
            }
        }
        this.pairDistractors = true;
        if (this.options.adaptive) {
            this.limitDistractors = true;
            blocks = this.adaptBlocks(blocks);
            if (!this.limitDistractors) {
                for (i = 0; i < removedBlocks.length; i++) {
                    var index =
                        this.options.order == undefined
                            ? Math.random(0, blocks.length)
                            : $.inArray(removedBlocks[i], this.options.order);
                    blocks.splice(index, 0, originalBlocks[removedBlocks[i]]);
                }
            }
        }
        if (this.pairDistractors && this.options.order != undefined) {
            //move pairs together
            //Go through array looking for ditractor and its pair
            for (i = 1; i < originalBlocks.length; i++) {
                if (
                    originalBlocks[i].lines[0].paired &&
                    $.inArray(originalBlocks[i], blocks) >= 0
                ) {
                    var j = i;
                    while ($.inArray(originalBlocks[j - 1], blocks) < 0) {
                        // find the paired distractor or solution block it will be next to
                        j--;
                    }
                    var indexTo = $.inArray(originalBlocks[j - 1], blocks);
                    var indexFrom = $.inArray(originalBlocks[i], blocks);
                    blocks.splice(indexFrom, 1);
                    blocks.splice(indexTo, 0, originalBlocks[i]);
                }
            }
        }
        return blocks;
    }
    // Return a codeblock that corresponds to the hash
    blockFromHash(hash) {
        var split = hash.split("_");
        var lines = [];
        for (var i = 0; i < split.length - 1; i++) {
            lines.push(this.lines[split[i]]);
        }
        var block = new _parsonsBlock__WEBPACK_IMPORTED_MODULE_8__.default(this, lines);
        if (this.noindent) {
            block.indent = 0;
        } else {
            block.indent = Number(split[split.length - 1]);
        }
        return block;
    }
    // Return an array of codeblocks that corresponds to the hash
    blocksFromHash(hash) {
        var split;
        if (hash === "-" || hash === "" || hash === null) {
            split = [];
        } else {
            split = hash.split("-");
        }
        var blocks = [];
        for (var i = 0; i < split.length; i++) {
            blocks.push(this.blockFromHash(split[i]));
        }
        if (this.options.adaptive) {
            return this.adaptBlocks(blocks);
        } else {
            return blocks;
        }
    }
    // Return a block object by the full id including id prefix
    getBlockById(id) {
        for (var i = 0; i < this.blocks.length; i++) {
            var block = this.blocks[i];
            if (block.view.id == id) {
                return block;
            }
        }
        return undefined;
    }
    // Return array of codeblocks that are the solution
    solutionBlocks() {
        var solutionBlocks = [];
        var solutionLines = [];
        for (var i = 0; i < this.lines.length; i++) {
            if (!this.lines[i].distractor) {
                solutionLines.push(this.lines[i]);
            }
        }
        var block = solutionLines[0].block();
        solutionBlocks.push(block);
        for (let i = 1; i < solutionLines.length; i++) {
            var nextBlock = solutionLines[i].block();
            if (block !== nextBlock) {
                block = nextBlock;
                solutionBlocks.push(block);
            }
        }
        return solutionBlocks;
    }
    // Return array of codeblocks based on what is in the source field
    sourceBlocks() {
        var sourceBlocks = [];
        var children = this.sourceArea.childNodes;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if ($(child).hasClass("block")) {
                sourceBlocks.push(this.getBlockById(child.id));
            }
        }
        return sourceBlocks;
    }
    // Return array of enabled codeblocks based on what is in the source field
    enabledSourceBlocks() {
        var all = this.sourceBlocks();
        var enabled = [];
        for (var i = 0; i < all.length; i++) {
            var block = all[i];
            if (block.enabled()) {
                enabled.push(block);
            }
        }
        return enabled;
    }
    // Return array of codeblocks based on what is in the answer field
    answerBlocks() {
        var answerBlocks = [];
        var children = this.answerArea.childNodes;
        for (var i = 0; i < children.length; i++) {
            var block = this.getBlockById(children[i].id);
            if (block !== undefined) {
                answerBlocks.push(block);
            }
        }
        return answerBlocks;
    }
    // Return array of enabled codeblocks based on what is in the answer field
    enabledAnswerBlocks() {
        var all = this.answerBlocks();
        var enabled = [];
        for (var i = 0; i < all.length; i++) {
            var block = all[i];
            if (block.enabled()) {
                enabled.push(block);
            }
        }
        return enabled;
    }
    // Return array of codelines based on what is in the answer field
    answerLines() {
        var answerLines = [];
        var blocks = this.answerBlocks();
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i];
            for (var j = 0; j < block.lines.length; j++) {
                answerLines.push(block.lines[j]);
            }
        }
        return answerLines;
    }
    // Go up the hierarchy until you get to a block; return that block element
    getBlockFor(element) {
        var check = element;
        while (!check.classList.contains("block")) {
            check = check.parentElement;
        }
        return check;
    }
    // Return the maximum indent for the solution
    solutionIndent() {
        var indent = 0;
        for (var i = 0; i < this.blocks.length; i++) {
            var block = this.blocks[i];
            indent = Math.max(indent, block.solutionIndent());
        }
        return indent;
    }
    /* =====================================================================
    ==== ACTION ============================================================
    ===================================================================== */
    // The "Check Me" button was pressed.
    checkCurrentAnswer() {
        if (!this.hasSolved) {
            this.checkCount++;
            this.clearFeedback();
            if (this.adaptiveId == undefined) {
                this.adaptiveId = this.storageId;
            }
            // TODO - rendering feedback is buried in the grader.grade method.
            // to disable feedback set this.grader.showfeedback boolean
            this.grader.showfeedback = false;
            this.grade = this.grader.grade();
            if (this.grade == "correct") {
                this.hasSolved = true;
                this.correct = true;
                $(this.checkButton).prop("disabled", true);
                localStorage.setItem(this.adaptiveId + "Solved", true);
                this.recentAttempts = this.checkCount;
                this.checkCount = 0;
                localStorage.setItem(
                    this.adaptiveId + "recentAttempts",
                    this.recentAttempts
                );
            }
            localStorage.setItem(
                this.adaptiveId + this.divid + "Count",
                this.checkCount
            );
            this.setLocalStorage();
            // if not solved and not too short then check if should provide help
            if (!this.hasSolved && this.grade !== "incorrectTooShort") {
                if (this.canHelp) {
                    // only count the attempt if the answer is different (to prevent gaming)
                    var answerHash = this.answerHash();
                    if (this.lastAnswerHash !== answerHash) {
                        this.numDistinct++;
                        this.lastAnswerHash = answerHash;
                    }
                    // if time to offer help
                    if (this.numDistinct == 3 && !this.gotHelp) {
                        alert($.i18n("msg_parson_help_info"));
                    } // end if
                } // end if can help
            } // end if not solved
        } // end outer if not solved
    }

    renderFeedback() {
        this.grader.showfeedback = true;
        this.grade = this.grader.graderState;
        var feedbackArea;
        var answerArea = $(this.answerArea);

        if (this.showfeedback === true) {
            feedbackArea = $(this.messageDiv);
        } else {
            feedbackArea = $("#doesnotexist");
        }

        if (this.grade === "correct") {
            answerArea.addClass("correct");
            feedbackArea.fadeIn(100);
            feedbackArea.attr("class", "alert alert-info");
            if (this.checkCount > 1) {
                feedbackArea.html(
                    $.i18n("msg_parson_correct", this.checkCount)
                );
            } else {
                feedbackArea.html($.i18n("msg_parson_correct_first_try"));
            }
        }

        if (this.grade === "incorrectTooShort") {
            // too little code
            answerArea.addClass("incorrect");
            feedbackArea.fadeIn(500);
            feedbackArea.attr("class", "alert alert-danger");
            feedbackArea.html($.i18n("msg_parson_too_short"));
        }

        if (this.grade === "incorrectIndent") {
            var incorrectBlocks = [];
            for (let i = 0; i < this.grader.indentLeft.length; i++) {
                block = this.grader.indentLeft[i].block();
                if (incorrectBlocks.indexOf(block) == -1) {
                    incorrectBlocks.push(block);
                    $(block.view).addClass("indentLeft");
                }
            }
            for (let i = 0; i < this.grader.indentRight.length; i++) {
                block = this.grader.indentRight[i].block();
                if (incorrectBlocks.indexOf(block) == -1) {
                    incorrectBlocks.push(block);
                    $(block.view).addClass("indentRight");
                }
            }
            feedbackArea.fadeIn(500);
            feedbackArea.attr("class", "alert alert-danger");
            if (incorrectBlocks.length == 1) {
                feedbackArea.html($.i18n("msg_parson_wrong_indent"));
            } else {
                feedbackArea.html($.i18n("msg_parson_wrong_indents"));
            }
        }

        if (this.grade === "incorrectMoveBlocks") {
            var answerBlocks = this.answerBlocks();
            var inSolution = [];
            var inSolutionIndexes = [];
            var notInSolution = [];
            for (let i = 0; i < answerBlocks.length; i++) {
                var block = answerBlocks[i];
                var index = this.solution.indexOf(block.lines[0]);
                if (index == -1) {
                    notInSolution.push(block);
                } else {
                    inSolution.push(block);
                    inSolutionIndexes.push(index);
                }
            }
            var lisIndexes = this.grader.inverseLISIndices(inSolutionIndexes);
            for (let i = 0; i < lisIndexes.length; i++) {
                notInSolution.push(inSolution[lisIndexes[i]]);
            }
            answerArea.addClass("incorrect");
            feedbackArea.fadeIn(500);
            feedbackArea.attr("class", "alert alert-danger");
            if (this.showfeedback === true) {
                for (let i = 0; i < notInSolution.length; i++) {
                    $(notInSolution[i].view).addClass("incorrectPosition");
                }
            }
            feedbackArea.html($.i18n("msg_parson_wrong_order"));
        }
    }

    /* =====================================================================
    ==== ADAPTIVE ==========================================================
    ===================================================================== */
    // Initialize this problem as adaptive
    //    helpCount = number of checks before help is given (negative)
    //    canHelp = boolean as to whether help can be provided
    //    checkCount = how many times it has been checked before correct
    //    userRating = 0..100 how good the person is at solving problems
    initializeAdaptive() {
        this.adaptiveId = super.localStorageKey();
        this.canHelp = true;
        //this.helpCount = -3; // Number of checks before help is offered
        this.checkCount = 0;
        this.numDistinct = 0; // number of distinct solution attempts (different from previous)
        this.gotHelp = false;
        // Initialize the userRating
        var storageProblem = localStorage.getItem(this.adaptiveId + "Problem");
        if (storageProblem == this.divid) {
            // Already in this problem
            this.checkCount = localStorage.getItem(
                this.adaptiveId + this.divid + "Count"
            );
            if (this.checkCount == undefined) {
                this.checkCount = 0;
            }
            return this;
        }
        var count = localStorage.getItem(
            this.adaptiveId + this.divid + "Count"
        );
        if (count == undefined || count == "NaN") {
            count = 0;
        }
        this.checkCount = count;
        this.recentAttempts = localStorage.getItem(
            this.adaptiveId + "recentAttempts"
        );
        if (this.recentAttempts == undefined || this.recentAttempts == "NaN") {
            this.recentAttempts = 3;
        }
        localStorage.setItem(
            this.adaptiveId + "recentAttempts",
            this.recentAttempts
        );
        localStorage.setItem(this.adaptiveId + "Problem", this.divid);
        localStorage.setItem(
            this.adaptiveId + this.divid + "Count",
            this.checkCount
        );
        localStorage.setItem(this.adaptiveId + "Solved", false);
    }
    // Return a boolean of whether the user must deal with indentation
    usesIndentation() {
        if (this.noindent || this.solutionIndent() == 0) {
            // was $(this.answerArea).hasClass("answer") - bje changed
            return false;
        } else {
            return true;
        }
    }
    // Find a distractor to remove to make the problem easier
    //  * try first in the answer area
    //  * if not, try the source area
    //  * if not, return undefined
    distractorToRemove() {
        var blocks = this.enabledAnswerBlocks();
        var block;
        for (let i = 0; i < blocks.length; i++) {
            block = blocks[i];
            if (block.isDistractor()) {
                return block;
            }
        }
        blocks = this.enabledSourceBlocks();
        for (let i = 0; i < blocks.length; i++) {
            block = blocks[i];
            if (block.isDistractor()) {
                return block;
            }
        }
        return undefined;
    }
    // Return the number of blocks that exist
    numberOfBlocks(fIncludeDistractors = true) {
        var numberOfBlocks = 0;
        for (var i = 0; i < this.blocks.length; i++) {
            if (
                this.blocks[i].enabled() &&
                (fIncludeDistractors || !this.blocks[i].isDistractor())
            ) {
                numberOfBlocks += 1;
            }
        }
        return numberOfBlocks;
    }
    // Remove this distractors to make the problem easier
    removeDistractor(block) {
        // Alert the user to what is happening
        var feedbackArea = $(this.messageDiv);
        feedbackArea.fadeIn(500);
        feedbackArea.attr("class", "alert alert-info");
        feedbackArea.html($.i18n("msg_parson_not_solution"));
        // Stop ability to select
        if (block.lines[0].distractHelptext) {
            block.view.setAttribute("data-toggle","tooltip");
            block.view.setAttribute("title", block.lines[0].distractHelptext);
        }
        block.disable();
        // If in answer area, move to source area
        if (!block.inSourceArea()) {
            var sourceRect = this.sourceArea.getBoundingClientRect();
            var startX = block.pageXCenter() - 1;
            var startY = block.pageYCenter();
            var endX =
                sourceRect.left + window.pageXOffset + sourceRect.width / 2;
            var endY =
                sourceRect.top +
                window.pageYOffset +
                block.view.getBoundingClientRect().height / 2;
            var slideUnderBlock = block.slideUnderBlock();
            if (slideUnderBlock !== undefined) {
                endY +=
                    slideUnderBlock.view.getBoundingClientRect().height + 20;
                endY += parseInt($(slideUnderBlock.view).css("top"));
            }
            var that = this;
            $(block.view).css({
                "border-color": "#000",
                "background-color": "#fff",
            });
            $(block.view).animate(
                {
                    opacity: 1.0,
                },
                {
                    duration:
                        Math.sqrt(
                            Math.pow(endY - startY, 2) +
                                Math.pow(endX - startX, 2)
                        ) *
                            4 +
                        500,
                    start: function () {
                        that.moving = block;
                        that.movingX = startX;
                        that.movingY = startY;
                        that.updateView();
                    },
                    progress: function (a, p, c) {
                        that.movingX = startX * (1 - p) + endX * p;
                        that.movingY = startY * (1 - p) + endY * p;
                        that.updateView();
                    },
                    complete: function () {
                        delete that.moving;
                        delete that.movingX;
                        delete that.movingY;
                        that.updateView();
                        $(block.view).animate(
                            {
                                opacity: 0.3,
                                "border-color": "#d3d3d3",
                                "background-color": "#efefef",
                            },
                            {
                                duration: 1000,
                                complete: function () {
                                    $(block.view).css({
                                        opacity: "",
                                        "border-color": "",
                                        "background-color": "",
                                    });
                                    $(block.view).addClass("disabled");
                                },
                            }
                        );
                    },
                }
            );
        } else {
            $(block.view).css({
                "border-color": "#000",
                "background-color": "#fff",
            });
            $(block.view).animate(
                {
                    opacity: 0.3,
                    "border-color": "#d3d3d3",
                    "background-color": "#efefef",
                },
                {
                    duration: 2000,
                    complete: function () {
                        $(block.view).css({
                            "border-color": "",
                            "background-color": "",
                        });
                    },
                }
            );
        }
    }
    // Give the user the indentation
    removeIndentation() {
        // Alert the user to what is happening
        var feedbackArea = $(this.messageDiv);
        feedbackArea.fadeIn(500);
        feedbackArea.attr("class", "alert alert-info");
        feedbackArea.html($.i18n("msg_parson_provided_indent"));
        // Move and resize blocks
        var blockWidth = 200;
        for (var i = 0; i < this.lines.length; i++) {
            var line = this.lines[i];
            var expandedWidth =
                line.width + line.indent * this.options.pixelsPerIndent + 30;
            blockWidth = Math.max(blockWidth, expandedWidth);
        }
        if (this.options.numbered != undefined) {
            blockWidth += 25;
        }
        this.areaWidth = blockWidth + 22;
        var block, indent;
        var sourceBlocks = this.sourceBlocks();
        for (let i = 0; i < sourceBlocks.length; i++) {
            block = sourceBlocks[i];
            indent = block.solutionIndent();
            if (indent == 0) {
                $(block.view).animate(
                    {
                        width: blockWidth,
                    },
                    {
                        duration: 1000,
                    }
                );
            } else {
                $(block.view).animate(
                    {
                        width:
                            blockWidth - indent * this.options.pixelsPerIndent,
                        "padding-left":
                            indent * this.options.pixelsPerIndent + 10,
                    },
                    {
                        duration: 1000,
                    }
                );
            }
        }
        for (let i = 0; i < this.pairedDivs.length; i++) {
            $(this.pairedDivs[i]).animate(
                {
                    width: blockWidth + 34,
                },
                {
                    duration: 1000,
                }
            );
        }
        var answerBlocks = this.answerBlocks();
        for (let i = 0; i < answerBlocks.length; i++) {
            block = answerBlocks[i];
            indent = block.solutionIndent();
            if (indent == 0) {
                $(block.view).animate(
                    {
                        left: 0,
                        width: blockWidth,
                    },
                    {
                        duration: 1000,
                    }
                );
            } else {
                $(block.view).animate(
                    {
                        left: 0,
                        width:
                            blockWidth - indent * this.options.pixelsPerIndent,
                        "padding-left":
                            indent * this.options.pixelsPerIndent + 10,
                    },
                    {
                        duration: 1000,
                    }
                );
            }
        }
        // Resize answer and source area
        $(this.answerArea).removeClass("answer1 answer2 answer3 answer4");
        $(this.answerArea).addClass("answer");
        this.indent = 0;
        this.noindent = true;
        $(this.sourceArea).animate(
            {
                width: this.areaWidth + 2,
            },
            {
                duration: 1000,
            }
        );
        $(this.answerArea).animate(
            {
                width: this.areaWidth + 2,
            },
            {
                duration: 1000,
            }
        );
        // Change the model (with view)
        $(this.answerArea).animate(
            {
                opacity: 1.0,
            },
            {
                duration: 1100,
                complete: function () {
                    $(this.answerArea).css({
                        opacity: "",
                    });
                    // Update the model
                    for (let i = 0; i < sourceBlocks.length; i++) {
                        sourceBlocks[i].addIndent();
                    }
                    for (let i = 0; i < answerBlocks.length; i++) {
                        answerBlocks[i].addIndent();
                    }
                },
            }
        );
    }

    // first check if any solution blocks are in the source still (left side) and not
    // in the answer
    getSolutionBlockInSource() {
        var solutionBlocks = this.solutionBlocks();
        var answerBlocks = this.answerBlocks();
        var sourceBlocks = this.sourceBlocks();
        var solBlock = null;
        var currBlock = null;

        // loop through sourceBlocks and return a block if it is not in the solution
        for (var i = 0; i < sourceBlocks.length; i++) {
            // get the current block from the source
            currBlock = sourceBlocks[i];

            // if currBlock is in the solution and isn't the first block and isn't in the answer
            if (
                solutionBlocks.indexOf(currBlock) > 0 &&
                answerBlocks.indexOf(currBlock) < 0
            ) {
                return currBlock;
            }
        }
        // didn't find any block in the source that is in the solution
        return null;
    }

    // Find a block2 that is furthest from block1 in the answer
    // don't use the very first block in the solution as block2
    getFurthestBlock() {
        var solutionBlocks = this.solutionBlocks();
        var answerBlocks = this.answerBlocks();
        var maxDist = 0;
        var dist = 0;
        var maxBlock = null;
        var currBlock = null;
        var indexSol = 0;
        var prevBlock = null;
        var indexPrev = 0;

        // loop through the blocks in the answer
        for (var i = 0; i < answerBlocks.length; i++) {
            currBlock = answerBlocks[i];
            indexSol = solutionBlocks.indexOf(currBlock);
            if (indexSol > 0) {
                prevBlock = solutionBlocks[indexSol - 1];
                indexPrev = answerBlocks.indexOf(prevBlock);
                //alert("my index " + i + " index prev " + indexPrev);

                // calculate the distance in the answer
                dist = Math.abs(i - indexPrev);
                if (dist > maxDist) {
                    maxDist = dist;
                    maxBlock = currBlock;
                }
            }
        }
        return maxBlock;
    }

    // Combine blocks together
    combineBlocks() {
        var solutionBlocks = this.solutionBlocks();
        var answerBlocks = this.answerBlocks();
        var sourceBlocks = this.sourceBlocks();

        // Alert the user to what is happening
        var feedbackArea = $(this.messageDiv);
        feedbackArea.fadeIn(500);
        feedbackArea.attr("class", "alert alert-info");
        feedbackArea.html($.i18n("msg_parson_combined_blocks"));
        var block1 = null;
        var block2 = null;

        // get a solution block that is still in source (not answer), if any
        block2 = this.getSolutionBlockInSource();

        // if none in source get block that is furthest from block1
        if (block2 == null) {
            block2 = this.getFurthestBlock();
        }

        // get block1 (above block2) in solution
        var index = solutionBlocks.indexOf(block2);
        block1 = solutionBlocks[index - 1];

        // get index of each in answer
        var index1 = answerBlocks.indexOf(block1);
        var index2 = answerBlocks.indexOf(block2);
        var move = false;

        // if both in answer set move based on if directly above each other
        if (index1 >= 0 && index2 >= 0) {
            move = index1 + 1 !== index2;

            // else if both in source set move again based on if above each other
        } else if (index1 < 0 && index2 < 0) {
            index1 = sourceBlocks.indexOf(block1);
            index2 = sourceBlocks.indexOf(block2);
            move = index1 + 1 !== index2;

            // one in source and one in answer so must move
        } else {
            move = true;
            if (index1 < 0) {
                index1 = sourceBlocks.indexOf(block1);
            }
            if (index2 < 0) {
                index2 = sourceBlocks.indexOf(block2);
            }
        }

        var subtract = index2 < index1; // is block2 higher

        if (move) {
            // Move the block
            var startX = block2.pageXCenter() - 1;
            var startY = block2.pageYCenter();
            var endX = block1.pageXCenter() - 1;
            var endY =
                block1.pageYCenter() +
                block1.view.getBoundingClientRect().height / 2 +
                5;
            if (subtract) {
                endY -= block2.view.getBoundingClientRect().height / 2;
            } else {
                endY += block2.view.getBoundingClientRect().height / 2;
            }
            var that = this;
            $(block2.view).animate(
                {
                    opacity: 1,
                },
                {
                    duration: 1000, // 1 seccond
                    start: function () {
                        $(block1.view).css({
                            "border-color": "#000",
                            "background-color": "#fff",
                        });
                        $(block2.view).css({
                            "border-color": "#000",
                            "background-color": "#fff",
                        });
                        block2.lines[0].index += 1000;
                        that.moving = block2;
                        that.movingX = startX;
                        that.movingY = startY;
                        that.updateView();
                    },
                    progress: function (a, p, c) {
                        that.movingX = startX * (1 - p) + endX * p;
                        that.movingY = startY * (1 - p) + endY * p;
                        that.updateView();
                    },
                    complete: function () {
                        delete that.moving;
                        delete that.movingX;
                        delete that.movingY;
                        that.updateView();
                        block2.lines[0].index -= 1000;
                        block1.consumeBlock(block2);
                        $(block1.view).animate(
                            {
                                "border-color": "#d3d3d3",
                                "background-color": "#efefef",
                            },
                            {
                                duration: 1000,
                                complete: function () {
                                    $(block1.view).css({
                                        "border-color": "",
                                        "background-color": "",
                                    });
                                },
                            }
                        );
                    },
                }
            );
        } else {
            $(block2.view).animate(
                {
                    opacity: 1,
                },
                {
                    duration: 1000,
                    start: function () {
                        $(block1.view).css({
                            "border-color": "#000",
                            "background-color": "#fff",
                        });
                        $(block2.view).css({
                            "border-color": "#000",
                            "background-color": "#fff",
                        });
                    },
                    complete: function () {
                        block1.consumeBlock(block2);
                        $(block1.view).animate(
                            {
                                "border-color": "#d3d3d3",
                                "background-color": "#efefef",
                            },
                            {
                                duration: 1000,
                                complete: function () {
                                    $(block1.view).css({
                                        "border-color": "",
                                        "background-color": "",
                                    });
                                },
                            }
                        );
                    },
                }
            );
        }
    }
    // Adapt the problem to be easier
    //  * remove a distractor until none are present
    //  * combine blocks until 3 are left
    makeEasier() {
        var distractorToRemove = this.distractorToRemove();
        if (
            distractorToRemove !== undefined &&
            !distractorToRemove.inSourceArea()
        ) {
            alert($.i18n("msg_parson_remove_incorrect"));
            this.removeDistractor(distractorToRemove);
            this.logMove("removedDistractor-" + distractorToRemove.hash());
        } else {
            var numberOfBlocks = this.numberOfBlocks(false);
            if (numberOfBlocks > 3) {
                alert($.i18n("msg_parson_will_combine"));
                this.combineBlocks();
                this.logMove("combinedBlocks");
            } /*else if(this.numberOfBlocks(true) > 3 && distractorToRemove !==  undefined) {
                alert("Will remove an incorrect code block from source area");
                this.removeDistractor(distractorToRemove);
                this.logMove("removedDistractor-" + distractorToRemove.hash());
            } */ else {
                alert($.i18n("msg_parson_three_blocks_left"));
                this.canHelp = false;
            }
            //if (numberOfBlocks < 5) {
            //	this.canHelp = false;
            //	this.helpButton.disabled = true;
            //}
        }
    }
    // The "Help Me" button was pressed and the problem should be simplified
    helpMe() {
        this.clearFeedback();
        //this.helpCount = -1; // amount to allow for multiple helps in a row
        //if (this.helpCount < 0) {
        //	this.helpCount = Math.max(this.helpCount, -1); // min 1 attempt before more help
        //this.helpButton.disabled = true;
        //}
        // if less than 3 attempts
        if (this.numDistinct < 3) {
            alert($.i18n("msg_parson_atleast_three_attempts"));
        }
        // otherwise give help
        else {
            this.gotHelp = true;
            this.makeEasier();
        }
    }
    /* =====================================================================
    ==== UTILITY ===========================================================
    ===================================================================== */
    // Return a date from a timestamp (either mySQL or JS format)
    dateFromTimestamp(timestamp) {
        var date = new Date(timestamp);
        if (isNaN(date.getTime())) {
            var t = timestamp.split(/[- :]/);
            date = new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5]);
        }
        return date;
    }
    // A function for returning a shuffled version of an array
    shuffled(array) {
        var currentIndex = array.length;
        var returnArray = array.slice();
        var temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = returnArray[currentIndex];
            returnArray[currentIndex] = returnArray[randomIndex];
            returnArray[randomIndex] = temporaryValue;
        }
        return returnArray;
    }
    /* =====================================================================
    ==== KEYBOARD INTERACTION ==============================================
    ===================================================================== */
    // When the user has entered the Parsons problem via keyboard mode
    enterKeyboardMode() {
        $(this.keyboardTip).show();
        $(this.sourceLabel).hide();
        $(this.answerLabel).hide();
        this.clearFeedback();
    }
    // When the user leaves the Parsons problem via keyboard mode
    exitKeyboardMode() {
        $(this.keyboardTip).hide();
        $(this.sourceLabel).show();
        $(this.answerLabel).show();
    }
    /* =====================================================================
    ==== VIEW ==============================================================
    ===================================================================== */
    // Clear any feedback from the answer area
    clearFeedback() {
        $(this.answerArea).removeClass("incorrect correct");
        var children = this.answerArea.childNodes;
        for (var i = 0; i < children.length; i++) {
            $(children[i]).removeClass(
                "correctPosition incorrectPosition indentLeft indentRight"
            );
        }
        $(this.messageDiv).hide();
    }
    // Disable the interface
    async disableInteraction() {
        // Disable blocks
        await this.checkServerComplete;
        console.log("disabling blocks");
        if (this.blocks !== undefined) {
            for (var i = 0; i < this.blocks.length; i++) {
                var block = this.blocks[i];
                block.disable();
            }
        }
        // Hide buttons
        $(this.checkButton).hide();
        $(this.resetButton).hide();
    }
    // Based on the moving element, etc., establish the moving state
    //   rest: not moving
    //   source: moving inside source area
    //   answer: moving inside answer area
    //   moving: moving outside areas
    movingState() {
        if (this.moving == undefined) {
            return "rest";
        }
        var x = this.movingX - window.pageXOffset;
        var y = this.movingY - window.pageYOffset;
        // Check if in answer area
        var bounds = this.answerArea.getBoundingClientRect();
        if (
            x >= bounds.left &&
            x <= bounds.right &&
            y >= bounds.top &&
            y <= bounds.bottom
        ) {
            return "answer";
        }
        // Check if in source area
        bounds = this.sourceArea.getBoundingClientRect();
        if (
            x >= bounds.left &&
            x <= bounds.right &&
            y >= bounds.top &&
            y <= bounds.bottom
        ) {
            return "source";
        }
        return "moving";
    }
    // Update the Parsons view
    // This gets called when dragging a block
    updateView() {
        // Based on the new and the old state, figure out what to update
        var state = this.state;
        var newState = this.movingState();
        var updateSource = true;
        var updateAnswer = true;
        var updateMoving = newState == "moving";
        if (state == newState) {
            if (newState == "rest") {
                updateSource = false;
                updateAnswer = false;
            } else if (newState == "source") {
                updateAnswer = false;
            } else if (newState == "answer") {
                updateSource = false;
            } else if (newState == "moving") {
                updateAnswer = false;
                updateSource = false;
            }
        }
        var movingHeight;
        if (this.moving !== undefined) {
            // Must get height here as detached items don't have height
            movingHeight = $(this.moving.view).outerHeight(true);
            $(this.moving.view).detach();
        }
        var positionTop, width;
        var baseWidth = this.areaWidth - 22;
        // Update the Source Area
        if (updateSource) {
            positionTop = 0;
            var blocks = this.sourceBlocks();
            if (newState == "source") {
                var hasInserted = false;
                var movingBin = this.moving.pairedBin();
                var binForBlock = [];
                for (i = 0; i < blocks.length; i++) {
                    binForBlock.push(blocks[i].pairedBin());
                }
                if (!binForBlock.includes(movingBin)) {
                    movingBin = -1;
                }
                var insertPositions = [];
                if (binForBlock.length == 0) {
                    insertPositions.push(0);
                } else {
                    if (movingBin == -1) {
                        insertPositions.push(0);
                    } else if (binForBlock[0] == movingBin) {
                        insertPositions.push(0);
                    }
                    for (i = 1; i < blocks.length; i++) {
                        if (binForBlock[i - 1] == movingBin) {
                            insertPositions.push(i);
                        } else if (binForBlock[i] == movingBin) {
                            insertPositions.push(i);
                        } else if (
                            movingBin == -1 &&
                            binForBlock[i - 1] != binForBlock[i]
                        ) {
                            insertPositions.push(i);
                        }
                    }
                    if (movingBin == -1) {
                        insertPositions.push(binForBlock.length);
                    } else if (
                        binForBlock[binForBlock.length - 1] == movingBin
                    ) {
                        insertPositions.push(binForBlock.length);
                    }
                }
                var x =
                    this.movingX -
                    this.sourceArea.getBoundingClientRect().left -
                    window.pageXOffset -
                    baseWidth / 2 -
                    11;
                var y =
                    this.movingY -
                    this.sourceArea.getBoundingClientRect().top -
                    window.pageYOffset;
                for (i = 0; i < blocks.length; i++) {
                    var item = blocks[i];
                    var j;
                    if (!hasInserted && insertPositions.includes(i)) {
                        var testHeight = $(item.view).outerHeight(true);
                        for (j = i + 1; j < blocks.length; j++) {
                            if (insertPositions.includes(j)) {
                                break;
                            }
                            testHeight += $(blocks[j].view).outerHeight(true);
                        }
                        if (
                            y - positionTop < movingHeight + testHeight / 2 ||
                            i == insertPositions[insertPositions.length - 1]
                        ) {
                            hasInserted = true;
                            this.sourceArea.insertBefore(
                                this.moving.view,
                                item.view
                            );
                            $(this.moving.view).css({
                                left: x,
                                top: y - movingHeight / 2,
                                width: baseWidth,
                                "z-index": 3,
                            });
                            positionTop = positionTop + movingHeight;
                        }
                    }
                    $(item.view).css({
                        left: 0,
                        top: positionTop,
                        width: baseWidth,
                        "z-index": 2,
                    });
                    positionTop = positionTop + $(item.view).outerHeight(true);
                }
                if (!hasInserted) {
                    $(this.moving.view).appendTo(
                        "#" + this.counterId + "-source"
                    );
                    $(this.moving.view).css({
                        left: x,
                        top: y - $(this.moving.view).outerHeight(true) / 2,
                        width: baseWidth,
                        "z-index": 3,
                    });
                }
            } else {
                for (var i = 0; i < blocks.length; i++) {
                    item = blocks[i];
                    $(item.view).css({
                        left: 0,
                        top: positionTop,
                        width: baseWidth,
                        "z-index": 2,
                    });
                    positionTop = positionTop + $(item.view).outerHeight(true);
                }
            }
            // Update the Paired Distractor Indicators
            for (i = 0; i < this.pairedBins.length; i++) {
                var bin = this.pairedBins[i];
                var matching = [];
                for (j = 0; j < blocks.length; j++) {
                    block = blocks[j];
                    if (block.matchesBin(bin)) {
                        matching.push(block);
                    }
                }
                var div = this.pairedDivs[i];
                if (matching.length == 0) {
                    $(div).hide();
                } else {
                    $(div).show();
                    var height = -5;
                    height += parseInt(
                        $(matching[matching.length - 1].view).css("top")
                    );
                    height -= parseInt($(matching[0].view).css("top"));
                    height += $(matching[matching.length - 1].view).outerHeight(
                        true
                    );
                    $(div).css({
                        left: -6,
                        top: $(matching[0].view).css("top"),
                        width: baseWidth + 34,
                        height: height,
                        "z-index": 1,
                        "text-indent": -30,
                        "padding-top": (height - 70) / 2,
                        overflow: "visible",
                        "font-size": 43,
                        "vertical-align": "middle",
                        color: "#7e7ee7",
                    });
                    $(div).html(
                        "<span id= 'st' style = 'vertical-align: middle; font-weight: bold; font-size: 15px'>or</span>{"
                    );
                }
                if (matching.length == 1) {
                    $(div).html("");
                }
            }
        }
        // Update the Answer Area
        if (updateAnswer) {
            var block, indent;
            positionTop = 0;
            width =
                this.areaWidth +
                this.indent * this.options.pixelsPerIndent -
                22;
            var blocks = this.answerBlocks();
            if (newState == "answer") {
                var hasInserted = false;
                var x =
                    this.movingX -
                    this.answerArea.getBoundingClientRect().left -
                    window.pageXOffset -
                    baseWidth / 2 -
                    11;
                var movingIndent = Math.round(x / this.options.pixelsPerIndent);
                if (movingIndent < 0) {
                    movingIndent = 0;
                } else if (movingIndent > this.indent) {
                    movingIndent = this.indent;
                } else {
                    x = movingIndent * this.options.pixelsPerIndent;
                }
                var y =
                    this.movingY -
                    this.answerArea.getBoundingClientRect().top -
                    window.pageYOffset;
                this.moving.indent = movingIndent;
                for (i = 0; i < blocks.length; i++) {
                    block = blocks[i];
                    if (!hasInserted) {
                        if (
                            y - positionTop <
                            (movingHeight + $(block.view).outerHeight(true)) / 2
                        ) {
                            hasInserted = true;
                            this.answerArea.insertBefore(
                                this.moving.view,
                                block.view
                            );
                            $(this.moving.view).css({
                                left: x,
                                top: y - movingHeight / 2,
                                width: baseWidth,
                                "z-index": 3,
                            });
                            positionTop = positionTop + movingHeight;
                        }
                    }
                    indent = block.indent * this.options.pixelsPerIndent;
                    $(block.view).css({
                        left: indent,
                        top: positionTop,
                        width: width - indent,
                        "z-index": 2,
                    });
                    positionTop = positionTop + $(block.view).outerHeight(true);
                }
                if (!hasInserted) {
                    $(this.moving.view).appendTo(
                        "#" + this.counterId + "-answer"
                    );
                    $(this.moving.view).css({
                        left: x,
                        top: y - $(this.moving.view).outerHeight(true) / 2,
                        width: baseWidth,
                        "z-index": 3,
                    });
                }
            } else {
                for (let i = 0; i < blocks.length; i++) {
                    block = blocks[i];
                    indent = block.indent * this.options.pixelsPerIndent;
                    $(block.view).css({
                        left: indent,
                        top: positionTop,
                        width: width - indent,
                        "z-index": 2,
                    });
                    positionTop = positionTop + $(block.view).outerHeight(true);
                }
            }
        }
        // Update the Moving Area
        if (updateMoving) {
            // Add it to the lowest place in the source area
            movingBin = this.moving.pairedBin();
            if (movingBin == -1) {
                $(this.moving.view).appendTo("#" + this.counterId + "-source");
            } else {
                var before;
                blocks = this.sourceBlocks;
                for (i = 0; i < blocks.length; i++) {
                    block = blocks[i];
                    if (block.pairedBin() == movingBin) {
                        before = i + 1;
                    }
                }
                if (before == undefined || before == blocks.length) {
                    $(this.moving.view).appendTo(
                        "#" + this.counterId + "-source"
                    );
                } else {
                    this.sourceArea.insertBefore(
                        this.moving.view,
                        blocks[before].view
                    );
                }
            }
            // Place in the middle of the mouse cursor
            $(this.moving.view).css({
                left:
                    this.movingX -
                    this.sourceArea.getBoundingClientRect().left -
                    window.pageXOffset -
                    $(this.moving.view).outerWidth(true) / 2,
                top:
                    this.movingY -
                    this.sourceArea.getBoundingClientRect().top -
                    window.pageYOffset -
                    movingHeight / 2,
                width: baseWidth,
                "z-index": 3,
            });
        }
        state = newState;
        this.state = state;
    }
    addBlockLabels(blocks) {
        var bin = -1;
        var binCount = 0;
        var binChildren = 0;
        var blocksNotInBins = 0;
        for (let i = 0; i < blocks.length; i++) {
            if (blocks[i].pairedBin() == -1) {
                blocksNotInBins++;
            }
        }
        for (let i = 0; i < blocks.length; i++) {
            var currentBin = blocks[i].pairedBin();
            if (currentBin == -1 || currentBin != bin) {
                bin = currentBin;
                binChildren = 0;
                binCount++;
            }
            var label =
                "" +
                binCount +
                (currentBin != -1
                    ? String.fromCharCode(97 + binChildren)
                    : " ");
            if (
                binCount < 10 &&
                blocksNotInBins + this.pairedBins.length >= 10
            ) {
                label += " ";
            }
            blocks[i].addLabel(label, 0);
            binChildren++;
        }
        if (blocksNotInBins + this.pairedBins.length >= 10) {
            this.areaWidth += 5;
            $(this.sourceArea).css({
                width: $(this.sourceArea).width() + 5,
            });
            $(this.answerArea).css({
                width: $(this.answerArea).width() + 5,
            });
        }
    }
    // Put all the blocks back into the source area, reshuffling as necessary
    resetView() {
        // Clear everything
        this.clearFeedback();
        var scrollTop = document.body.scrollTop;
        var block;
        for (let i = 0; i < this.blocks.length; i++) {
            block = this.blocks[i];
            for (var j = 0; j < block.lines.length; j++) {
                var children = $(block.lines[j].view).find(".block-label");
                for (var c = 0; c < children.length; c++) {
                    children[c].remove();
                }
            }
            block.destroy();
            $(this.blocks[i].view).detach();
        }
        delete this.blocks;
        this.blockIndex = 0;
        for (let i = 0; i < this.pairedDivs.length; i++) {
            $(this.pairedDivs[i]).detach();
        }
        $(this.sourceArea).attr("style", "");
        $(this.answerArea).removeClass();
        $(this.answerArea).attr("style", "");
        this.noindent = this.options.noindent;
        // Reinitialize
        if (this.hasSolved) {
            this.checkCount = 0;
            this.numDistinct = 0;
            this.hasSolved = false;
            if (this.options.adaptive) {
                this.canHelp = true;
            }
            //this.helpCount = -3; // enable after 3 failed attempts
            //this.helpButton.disabled = true;
            localStorage.setItem(this.adaptiveId + "Problem", this.divid);
            localStorage.setItem(
                this.adaptiveId + this.divid + "Count",
                this.checkCount
            );
            localStorage.setItem(this.adaptiveId + "Solved", false);
        }
        this.initializeAreas(this.blocksFromSource(), [], {});
        this.initializeInteractivity();
        document.body.scrollTop = scrollTop;
    }
}

Parsons.counter = 0;

$(document).bind("runestone:login-complete", function () {
    $("[data-component=parsons]").each(function (index) {
        if ($(this).closest("[data-component=timedAssessment]").length == 0) {
            try {
                prsList[this.id] = new Parsons({
                    orig: this,
                    useRunestoneServices: eBookConfig.useRunestoneServices,
                });
            } catch (err) {
                console.log(`Error rendering Parsons Problem ${this.id}
                             Details: ${err}`);
                console.log(err.stack);
            }
        }
    });
});


/***/ }),

/***/ 404:
/*!**********************************************!*\
  !*** ./runestone/parsons/js/parsonsBlock.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ParsonsBlock)
/* harmony export */ });
/* harmony import */ var _hammer_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hammer.min.js */ 97430);
/* harmony import */ var _hammer_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hammer_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* =====================================================================
==== ParsonsBlock Object ===============================================
======== The model and view of a code block.
==== PROPERTIES ========================================================
======== problem: the Parsons problem
======== lines: an array of ParsonsLine in this block
======== indent: indent based on movement
======== view: an element for viewing this object
======== labels: [label, line] the labels numbering the block and the lines they go on
======== hammer: the controller based on hammer.js
===================================================================== */



// Initialize based on the problem and the lines
class ParsonsBlock {
    constructor(problem, lines) {
        this.problem = problem;
        this.lines = lines;
        this.indent = 0;
        this.labels = [];
        // Create view, adding view of lines and updating indent
        var view = document.createElement("div");
        view.id = problem.counterId + "-block-" + problem.blockIndex;
        problem.blockIndex += 1;
        $(view).addClass("block");
        var sharedIndent = lines[0].indent;
        for (let i = 1; i < lines.length; i++) {
            sharedIndent = Math.min(sharedIndent, lines[i].indent);
        }
        var lineDiv = document.createElement("div");
        $(lineDiv).addClass("lines");
        $(view).append(lineDiv);
        for (let i = 0; i < lines.length; i++) {
            var line = lines[i];
            var lineIndent;
            if (problem.noindent) {
                lineIndent = line.indent;
            } else {
                lineIndent = line.indent - sharedIndent;
            }
            $(line.view).removeClass("indent1 indent2 indent3 indent4");
            if (lineIndent > 0) {
                $(line.view).addClass("indent" + lineIndent);
            }
            lineDiv.appendChild(line.view);
        }
        var labelDiv = document.createElement("div");
        $(labelDiv).addClass("labels");
        if (this.problem.options.numbered == "left") {
            $(lineDiv).addClass("border_left");
            $(view).prepend(labelDiv);
            $(view).css({
                "justify-content": "flex-start",
            });
        } else if (this.problem.options.numbered == "right") {
            $(labelDiv).addClass("border_left");
            $(labelDiv).css({
                float: "right",
            });
            $(view).css({
                "justify-content": "space-between",
            });
            $(view).append(labelDiv);
        }
        this.view = view;
    }
    // Add a line (from another block) to this block
    addLine(line) {
        $(line.view).removeClass("indent1 indent2 indent3 indent4");
        if (this.problem.noindent) {
            if (line.indent > 0) {
                $(line.view).addClass("indent" + line.indent);
            }
        } else {
            var lines = this.lines;
            var sharedIndent = lines[0].indent;
            for (let i = 1; i < lines.length; i++) {
                sharedIndent = Math.min(sharedIndent, lines[i].indent);
            }
            if (sharedIndent < line.indent) {
                $(line.view).addClass("indent" + (line.indent - sharedIndent));
            } else if (sharedIndent > line.indent) {
                for (let i = 0; i < lines.length; i++) {
                    $(lines[i].view).removeClass(
                        "indent1 indent2 indent3 indent4"
                    );
                    $(lines[i].view).addClass(
                        "indent" + (lines[i].indent - line.indent)
                    );
                }
            }
        }
        this.lines.push(line);
        $(this.view).children(".lines")[0].appendChild(line.view);
    }
    // Add the contents of that block to myself and then delete that block
    consumeBlock(block) {
        for (let i = 0; i < block.lines.length; i++) {
            this.addLine(block.lines[i]);
        }
        if ($(block.view).attr("tabindex") == "0") {
            this.makeTabIndex();
        }
        $(block.view).detach();
        var newBlocks = [];
        for (let i = 0; i < this.problem.blocks.length; i++) {
            if (this.problem.blocks[i] !== block) {
                newBlocks.push(this.problem.blocks[i]);
            }
        }
        for (let i = 0; i < block.labels.length; i++) {
            this.addLabel(
                block.labels[i][0],
                this.lines.length - block.lines.length + block.labels[i][1]
            );
        }
        this.problem.blocks = newBlocks;
        this.problem.state = undefined;
        this.problem.updateView();
    }
    // Update the model and view when block is converted to contain indent
    addIndent() {
        // Update the lines model / view
        for (let i = 0; i < this.lines.length; i++) {
            var line = this.lines[i];
            if (line.indent > 0) {
                $(line.view).removeClass("indent1 indent2 indent3 indent4");
                $(line.view).addClass("indent" + line.indent);
            }
        }
        // Update the block model / view
        this.indent = 0;
        $(this.view).css({
            "padding-left": "",
            width: this.problem.areaWidth - 22,
        });
    }
    // Add a label to block and update its view
    addLabel(label, line) {
        var div = document.createElement("div");
        $(div).addClass("block-label");
        if (this.problem.options.numbered == "right") {
            $(div).addClass("right-label");
        }
        if (this.problem.options.numbered == "left") {
            $(div).addClass("left-label");
        }
        $(div).append(document.createTextNode(label));
        $(this.view).children(".labels")[0].append(div);
        if (this.labels.length != 0) {
            $(div).css(
                "margin-top",
                (line - this.labels[this.labels.length - 1][1] - 1) *
                    this.lines[line].view.offsetHeight
            );
        }
        this.labels.push([label, line]);
    }
    // Initialize Interactivity
    initializeInteractivity() {
        if ($(this.view).hasClass("disabled")) {
            return this;
        }
        $(this.view).attr("tabindex", "-1");
        this.hammer = new (_hammer_min_js__WEBPACK_IMPORTED_MODULE_0___default().Manager)(this.view, {
            recognizers: [
                [
                    (_hammer_min_js__WEBPACK_IMPORTED_MODULE_0___default().Pan),
                    {
                        direction: (_hammer_min_js__WEBPACK_IMPORTED_MODULE_0___default().DIRECTION_ALL),
                        threshold: 0,
                        pointers: 1,
                    },
                ],
            ],
        });
        var that = this;
        this.hammer.on("panstart", function (event) {
            that.panStart(event);
        });
        this.hammer.on("panend", function (event) {
            that.panEnd(event);
        });
        this.hammer.on("panmove", function (event) {
            that.panMove(event);
        });
    }
    // Return a boolean as to whether this block is able to be selected
    enabled() {
        return $(this.view).attr("tabindex") !== undefined;
    }
    // Return a boolean as to whether this block is a distractor
    isDistractor() {
        return this.lines[0].distractor;
    }
    // Return a boolean as to whether this block is in the source area
    inSourceArea() {
        var children = this.problem.sourceArea.childNodes;
        for (let i = 0; i < children.length; i++) {
            var item = children[i];
            if (item.id == this.view.id) {
                return true;
            }
        }
        return false;
    }
    // Return the page X position of the center of the view
    pageXCenter() {
        var boundingRect = this.view.getBoundingClientRect();
        var pageXCenter =
            window.pageXOffset + boundingRect.left + boundingRect.width / 2;
        return pageXCenter;
    }
    // Return the page Y position of the center of the view
    pageYCenter() {
        var boundingRect = this.view.getBoundingClientRect();
        var pageYCenter =
            window.pageYOffset + boundingRect.top + boundingRect.height / 2;
        return pageYCenter;
    }
    // Of all the line indents, return the minimum value
    minimumLineIndent() {
        var minimumLineIndent = this.lines[0].indent;
        for (let i = 1; i < this.lines.length; i++) {
            minimumLineIndent = Math.min(
                this.lines[i].indent,
                minimumLineIndent
            );
        }
        return minimumLineIndent;
    }
    // Return the last block in the source area that matches the paired bin it is in
    slideUnderBlock() {
        var sourceBlocks = this.problem.sourceBlocks();
        if (sourceBlocks.length == 0) {
            return undefined;
        }
        var pairedBin = this.pairedBin();
        if (pairedBin == -1) {
            return sourceBlocks[sourceBlocks.length - 1];
        }
        for (let i = sourceBlocks.length - 1; i >= 0; i--) {
            var block = sourceBlocks[i];
            if (block.pairedBin() == pairedBin) {
                return block;
            }
        }
        return sourceBlocks[sourceBlocks.length - 1];
    }
    // Return which paired bin it is in (-1) if not
    pairedBin() {
        var pairedBins = this.problem.pairedBins;
        for (var i = 0; i < pairedBins.length; i++) {
            if (this.matchesBin(pairedBins[i])) {
                return i;
            }
        }
        return -1;
    }
    // Return true if all lines are in that bin
    matchesBin(bin) {
        for (var i = 0; i < this.lines.length; i++) {
            var test = this.lines[i].index;
            if (bin.indexOf(test) == -1) {
                return false;
            }
        }
        return true;
    }
    // Return a list of indexes where this block could be inserted before
    validSourceIndexes() {
        var blocks = this.problem.sourceBlocks();
        var indexes = [];
        var pairedBin = this.pairedBin();
        var i, lastBin;
        if (pairedBin >= 0) {
            for (i = 0; i < blocks.length; i++) {
                var block = blocks[i];
                if (block.view.id !== this.view.id) {
                    var blockBin = block.pairedBin();
                    if (blockBin == pairedBin) {
                        indexes.push(i);
                    } else if (lastBin == pairedBin) {
                        indexes.push(i);
                    }
                    lastBin = blockBin;
                }
            }
            if (lastBin == pairedBin) {
                indexes.push(blocks.length);
            }
            if (indexes.length > 0) {
                return indexes;
            }
        }
        for (i = 0; i < blocks.length; i++) {
            let block = blocks[i];
            if (block.view.id !== this.view.id) {
                let blockBin = block.pairedBin();
                if (blockBin !== lastBin) {
                    indexes.push(i);
                } else if (blockBin == -1) {
                    indexes.push(i);
                }
                lastBin = blockBin;
            }
        }
        indexes.push(blocks.length);
        return indexes;
    }
    // A measure of how far the middle of this block is vertically positioned
    verticalOffset() {
        var verticalOffset;
        if (this.inSourceArea()) {
            verticalOffset = this.problem.sourceArea.getBoundingClientRect()
                .top;
        } else {
            verticalOffset = this.problem.answerArea.getBoundingClientRect()
                .top;
        }
        verticalOffset =
            this.view.getBoundingClientRect().top +
            this.view.getBoundingClientRect().bottom -
            verticalOffset * 2;
        return verticalOffset;
    }
    // This block just gained textual focus
    newFocus() {
        if (this.problem.textFocus == undefined) {
            this.problem.enterKeyboardMode();
            this.problem.textFocus = this;
            this.problem.textMove = false;
            $(this.view).addClass("down");
        } else if (this.problem.textFocus == this) {
            if (this.problem.textMove) {
                $(this.view).addClass("up");
            } else {
                $(this.view).addClass("down");
            }
        } else {
            // already in keyboard mode
            this.problem.textFocus = this;
            this.problem.textMove = false;
            $(this.view).addClass("down");
        }
        this.problem.textMoving = false;
    }
    // This block just lost textual focus
    releaseFocus() {
        $(this.view).removeClass("down up");
        if (this.problem.textFocus == this) {
            if (!this.problem.textMoving) {
                // exit out of problem but stay way into problem
                this.problem.textFocus = undefined;
                if (this.problem.textMove) {
                    this.problem.logMove("kmove");
                    this.problem.textMove = false;
                }
                this.problem.exitKeyboardMode();
            }
        } else {
            // become selectable, but not active
            $(this.view).attr("tabindex", "-1");
            $(this.view).unbind("focus");
            $(this.view).unbind("blur");
            $(this.view).unbind("keydown");
        }
    }
    // Make this block into the keyboard entry point
    makeTabIndex() {
        $(this.view).attr("tabindex", "0");
        var that = this;
        $(this.view).focus(function () {
            that.newFocus();
        });
        $(this.view).blur(function () {
            that.releaseFocus();
        });
        $(this.view).keydown(function (event) {
            that.keyDown(event);
        });
    }
    // Called to disable interaction for the future
    disable() {
        if (this.hammer !== undefined) {
            this.hammer.set({ enable: false });
        }
        if ($(this.view).attr("tabindex") == "0") {
            this.releaseFocus();
            $(this.view).removeAttr("tabindex");
            this.problem.initializeTabIndex();
        } else {
            $(this.view).removeAttr("tabindex");
        }
    }
    // Enable functionality after reset button has been pressed
    resetView() {
        if (this.hammer !== undefined) {
            this.hammer.set({ enable: true });
        }
        if (!$(this.view)[0].hasAttribute("tabindex")) {
            $(this.view).attr("tabindex", "-1");
        }
        $(this.view).css({ opacity: "" });
    }
    // Called to destroy interaction for the future
    destroy() {
        if (this.hammer !== undefined) {
            this.hammer.destroy();
            delete this.hammer;
        }
        if ($(this.view).attr("tabindex") == "0") {
            this.releaseFocus();
        }
        $(this.view).removeAttr("tabindex");
    }
    // Called when a block is picked up
    panStart(event) {
        this.problem.clearFeedback();
        if (this.problem.started == undefined) {
            // log the first time that something gets moved
            this.problem.started = true;
            this.problem.logMove("start");
        }
        if (this.problem.textFocus !== undefined) {
            // stop text focus when dragging
            this.problem.textFocus.releaseFocus();
        }
        this.problem.moving = this;
        // Update the view
        this.problem.movingX = event.srcEvent.pageX;
        this.problem.movingY = event.srcEvent.pageY;
        this.problem.updateView();
    }
    // Called when a block is dropped
    panEnd(event) {
        this.problem.isAnswered = true;
        delete this.problem.moving;
        delete this.problem.movingX;
        delete this.problem.movingY;
        this.problem.updateView();
        this.problem.logMove("move");
    }
    // Called when a block is moved
    panMove(event) {
        // Update the view
        this.problem.movingX = event.srcEvent.pageX;
        this.problem.movingY = event.srcEvent.pageY;
        this.problem.updateView();
    }
    // Handle a keypress event when in focus
    keyDown(event) {
        if (this.problem.started == undefined) {
            // log the first time that something gets moved
            this.problem.started = true;
            this.problem.logMove("kstart");
        }
        switch (event.keyCode) {
            case 37: // left
                if (this.problem.textMove) {
                    this.moveLeft();
                } else {
                    this.selectLeft();
                }
                break;
            case 38: // up
                if (this.problem.textMove) {
                    this.moveUp();
                } else {
                    this.selectUp();
                }
                event.preventDefault();
                break;
            case 39: // right
                if (this.problem.textMove) {
                    this.moveRight();
                } else {
                    this.selectRight();
                }
                event.preventDefault();
                break;
            case 40: // down
                if (this.problem.textMove) {
                    this.moveDown();
                } else {
                    this.selectDown();
                }
                event.preventDefault();
                break;
            case 32: // space
                this.toggleMove();
                event.preventDefault();
                break;
            case 13: // enter
                this.toggleMove();
                event.preventDefault();
                break;
        }
    }
    // Move block left
    moveLeft() {
        var index, block;
        if (!this.inSourceArea()) {
            if (this.indent == 0) {
                // move to source area
                var blocks = this.problem.sourceBlocks();
                var offset = this.verticalOffset();
                var validSourceIndexes = this.validSourceIndexes();
                for (var i = 0; i < validSourceIndexes.length; i++) {
                    index = validSourceIndexes[i];
                    if (index == blocks.length) {
                        this.problem.textMoving = true;
                        this.problem.sourceArea.appendChild(this.view);
                        $(this.view).focus();
                        this.problem.state = undefined;
                        this.problem.updateView();
                        return this;
                    } else {
                        block = blocks[index];
                        if (block.verticalOffset() >= offset) {
                            break;
                        }
                    }
                }
                this.problem.textMoving = true;
                this.problem.sourceArea.insertBefore(this.view, block.view);
                $(this.view).focus();
            } else {
                // reduce indent
                this.indent = this.indent - 1;
            }
            this.problem.state = undefined;
            this.problem.updateView();
        }
    }
    // Move block up
    moveUp() {
        if (this.inSourceArea()) {
            let blocks = this.problem.sourceBlocks();
            var offset = this.verticalOffset();
            var validSourceIndexes = this.validSourceIndexes();
            for (let i = 0; i < validSourceIndexes.length; i++) {
                var index =
                    validSourceIndexes[validSourceIndexes.length - 1 - i];
                if (index < blocks.length) {
                    var block = blocks[index];
                    if (block.verticalOffset() < offset) {
                        this.problem.textMoving = true;
                        this.problem.sourceArea.insertBefore(
                            this.view,
                            block.view
                        );
                        $(this.view).focus();
                        this.problem.state = undefined;
                        this.problem.updateView();
                        return this;
                    }
                }
            }
        } else {
            let blocks = this.problem.answerBlocks();
            for (let i = 0; i < blocks.length; i++) {
                if (blocks[i].view.id == this.view.id) {
                    if (i == 0) {
                        return this;
                    }
                    this.problem.textMoving = true;
                    this.problem.answerArea.insertBefore(
                        this.view,
                        blocks[i - 1].view
                    );
                    $(this.view).focus();
                    this.problem.state = undefined;
                    this.problem.updateView();
                }
            }
        }
    }
    // Move block right
    moveRight() {
        if (this.inSourceArea()) {
            // move to answer area
            this.indent = 0;
            var offset = this.verticalOffset();
            var answerBlocks = this.problem.answerBlocks();
            for (var i = 0; i < answerBlocks.length; i++) {
                var item = answerBlocks[i];
                var itemOffset = item.verticalOffset();
                if (itemOffset >= offset) {
                    this.problem.textMoving = true;
                    this.problem.answerArea.insertBefore(this.view, item.view);
                    $(this.view).focus();
                    this.problem.state = undefined;
                    this.problem.updateView();
                    return this;
                }
            }
            this.problem.textMoving = true;
            this.problem.answerArea.appendChild(this.view);
            $(this.view).focus();
            this.problem.state = undefined;
            this.problem.updateView();
        } else {
            // in answer area: increase the indent
            if (this.indent !== this.problem.indent) {
                this.indent = this.indent + 1;
                this.problem.state = undefined;
                this.problem.updateView();
            }
        }
    }
    // Move block down
    moveDown() {
        if (this.inSourceArea()) {
            let blocks = this.problem.sourceBlocks();
            var validSourceIndexes = this.validSourceIndexes();
            for (let i = 0; i < blocks.length; i++) {
                if (blocks[i].view.id == this.view.id) {
                    var myIndex = i;
                }
            }
            for (let i = 0; i < validSourceIndexes.length; i++) {
                var index = validSourceIndexes[i];
                if (index == blocks.length) {
                    this.problem.textMoving = true;
                    this.problem.sourceArea.appendChild(this.view);
                    $(this.view).focus();
                    this.problem.state = undefined;
                    this.problem.updateView();
                    return this;
                } else if (index - myIndex > 1) {
                    this.problem.textMoving = true;
                    this.problem.sourceArea.insertBefore(
                        this.view,
                        blocks[index].view
                    );
                    $(this.view).focus();
                    this.problem.state = undefined;
                    this.problem.updateView();
                    return this;
                }
            }
        } else {
            let blocks = this.problem.answerBlocks();
            for (var i = 0; i < blocks.length; i++) {
                if (blocks[i].view.id == this.view.id) {
                    if (i == blocks.length - 1) {
                        return this;
                    } else if (i == blocks.length - 2) {
                        this.problem.textMoving = true;
                        this.problem.answerArea.appendChild(this.view);
                    } else {
                        this.problem.textMoving = true;
                        this.problem.answerArea.insertBefore(
                            this.view,
                            blocks[i + 2].view
                        );
                    }
                    $(this.view).focus();
                    this.problem.state = undefined;
                    this.problem.updateView();
                }
            }
        }
    }
    // Move selection left
    selectLeft() {
        if (!this.inSourceArea()) {
            var offset = this.verticalOffset();
            var sourceBlocks = this.problem.enabledSourceBlocks();
            if (sourceBlocks.length == 0) {
                return this;
            }
            var chooseNext = sourceBlocks[0];
            var chooseOffset = chooseNext.verticalOffset() - offset;
            for (var i = 1; i < sourceBlocks.length; i++) {
                var item = sourceBlocks[i];
                var itemOffset = item.verticalOffset() - offset;
                if (Math.abs(itemOffset) < Math.abs(chooseOffset)) {
                    chooseNext = item;
                    chooseOffset = itemOffset;
                }
            }
            this.problem.textFocus = chooseNext;
            chooseNext.makeTabIndex();
            $(chooseNext.view).focus();
        }
    }
    // Move selection up
    selectUp() {
        var chooseNext = false;
        var blocks;
        if (this.inSourceArea()) {
            blocks = this.problem.enabledSourceBlocks();
        } else {
            blocks = this.problem.enabledAnswerBlocks();
        }
        for (var i = blocks.length - 1; i >= 0; i--) {
            var item = blocks[i];
            if (chooseNext) {
                this.problem.textFocus = item;
                item.makeTabIndex();
                $(item.view).focus();
                return this;
            } else {
                if (item.view.id == this.view.id) {
                    chooseNext = true;
                }
            }
        }
    }
    // Move selection right
    selectRight() {
        if (this.inSourceArea()) {
            var offset = this.verticalOffset();
            var blocks = this.problem.enabledAnswerBlocks();
            if (blocks.length == 0) {
                return this;
            }
            var chooseNext = blocks[0];
            var chooseOffset = chooseNext.verticalOffset() - offset;
            for (var i = 1; i < blocks.length; i++) {
                var item = blocks[i];
                var itemOffset = item.verticalOffset() - offset;
                if (Math.abs(itemOffset) < Math.abs(chooseOffset)) {
                    chooseNext = item;
                    chooseOffset = itemOffset;
                }
            }
            this.problem.textFocus = chooseNext;
            chooseNext.makeTabIndex();
            $(chooseNext.view).focus();
        }
    }
    // Move selection down
    selectDown() {
        var chooseNext = false;
        var blocks;
        if (this.inSourceArea()) {
            blocks = this.problem.enabledSourceBlocks();
        } else {
            blocks = this.problem.enabledAnswerBlocks();
        }
        for (var i = 0; i < blocks.length; i++) {
            var item = blocks[i];
            if (chooseNext) {
                this.problem.textFocus = item;
                item.makeTabIndex();
                $(item.view).focus();
                return this;
            } else {
                if (item.view.id == this.view.id) {
                    chooseNext = true;
                }
            }
        }
    }
    // Toggle whether to move this block
    toggleMove() {
        if (this.problem.textMove) {
            $(this.view).removeClass("up");
            $(this.view).addClass("down");
            this.problem.textMove = false;
            this.problem.logMove("kmove");
        } else {
            $(this.view).removeClass("down");
            $(this.view).addClass("up");
            this.problem.textMove = true;
        }
    }
    // Answer a string that represents this codeblock for saving
    hash() {
        var hash = "";
        for (var i = 0; i < this.lines.length; i++) {
            hash += this.lines[i].index + "_";
        }
        hash += this.indent;
        return hash;
    }
    // Answer what the indent should be for the solution
    solutionIndent() {
        var sharedIndent = this.lines[0].indent;
        for (var i = 1; i < this.lines.length; i++) {
            sharedIndent = Math.min(sharedIndent, this.lines[i].indent);
        }
        return sharedIndent;
    }
}


/***/ }),

/***/ 18423:
/*!*********************************************!*\
  !*** ./runestone/parsons/js/parsonsLine.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ParsonsLine)
/* harmony export */ });
/* =====================================================================
==== ParsonsLine Object ================================================
======== The model and view of a line of code.
======== Based on what is specified in the problem.
======== ParsonBlock objects have one or more of these.
==== PROPERTIES ========================================================
======== problem: the Parsons problem
======== index: the index of the line in the problem
======== text: the text of the code line
======== indent: the indent level
======== view: an element for viewing this object
======== distractor: whether it is a distractor
======== paired: whether it is a paired distractor
======== groupWithNext: whether it is grouped with the following line
======== width: the pixel width when rendered
============ in the initial grouping
===================================================================== */
// Initialize from codestring

class ParsonsLine {
    constructor(problem, codestring) {
        this.problem = problem;
        this.index = problem.lines.length;
        var trimmed = codestring.replace(/\s*$/, "");
        this.text = trimmed.replace(/^\s*/, "");
        this.indent = trimmed.length - this.text.length;
        // Create the View
        var view;
        if (problem.options.language == "natural" || problem.options.language == "math") {
            view = document.createElement("p");
        } else {
            view = document.createElement("code");
            $(view).addClass(problem.options.prettifyLanguage);
        }
        view.id = problem.counterId + "-line-" + this.index;
        view.innerHTML += this.text;
        this.view = view;
        problem.lines.push(this);
    }
    // Initialize what width the line would naturally have (without indent)
    initializeWidth() {
        // this.width does not appear to be used anywhere later
        // since changing the value of this.width appears to have no effect. - Vincent Qiu (September 2020)
        this.width =
            $(this.view).outerWidth(true) -
            this.problem.options.pixelsPerIndent * this.indent;

        // Pass this information on to be used in class Parsons function initializeAreas
        // to manually determine appropriate widths - Vincent Qiu (September 2020)
        this.view.fontSize = window
            .getComputedStyle(this.view, null)
            .getPropertyValue("font-size");
        this.view.pixelsPerIndent = this.problem.options.pixelsPerIndent;
        this.view.indent = this.indent;

        // Figure out which typeface will be rendered by comparing text widths to browser default - Vincent Qiu (September 2020)
        var tempCanvas = document.createElement("canvas");
        var tempCanvasCtx = tempCanvas.getContext("2d");
        var possibleFonts = window
            .getComputedStyle(this.view, null)
            .getPropertyValue("font-family")
            .split(", ");
        var fillerText = "abcdefghijklmnopqrstuvwxyz0123456789,./!@#$%^&*-+";
        tempCanvasCtx.font = this.view.fontSize + " serif";
        var serifWidth = tempCanvasCtx.measureText(fillerText).width;
        for (let i = 0; i < possibleFonts.length; i++) {
            if (possibleFonts[i].includes('"')) {
                possibleFonts[i] = possibleFonts[i].replaceAll('"', "");
            }
            if (possibleFonts[i].includes("'")) {
                possibleFonts[i] = possibleFonts[i].replaceAll("'", "");
            }
            tempCanvasCtx.font = this.view.fontSize + " " + possibleFonts[i];
            if (tempCanvasCtx.measureText(fillerText).width !== serifWidth) {
                this.view.fontFamily = possibleFonts[i];
                break;
            }
        }
    }
    // Answer the block that this line is currently in
    block() {
        for (let i = 0; i < this.problem.blocks.length; i++) {
            var block = this.problem.blocks[i];
            for (var j = 0; j < block.lines.length; j++) {
                if (block.lines[j] === this) {
                    return block;
                }
            }
        }
        return undefined;
    }
    // Answer the indent based on the view
    viewIndent() {
        if (this.problem.noindent) {
            return this.indent;
        } else {
            var block = this.block();
            return this.indent - block.solutionIndent() + block.indent;
        }
    }
}


/***/ }),

/***/ 87904:
/*!******************************************!*\
  !*** ./runestone/parsons/js/prettify.js ***!
  \******************************************/
/***/ (() => {

function H() {
    var x =
        navigator &&
        navigator.userAgent &&
        /\bMSIE 6\./.test(navigator.userAgent);
    H = function() {
        return x;
    };
    return x;
}
(function() {
    function x(b) {
        b = b.split(/ /g);
        var a = {};
        for (var c = b.length; --c >= 0; ) {
            var d = b[c];
            if (d) a[d] = null;
        }
        return a;
    }
    var y = "break continue do else for if return while ",
        U =
            y +
            "auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile ",
        D =
            U +
            "catch class delete false import new operator private protected public this throw true try ",
        I =
            D +
            "alignof align_union asm axiom bool concept concept_map const_cast constexpr decltype dynamic_cast explicit export friend inline late_check mutable namespace nullptr reinterpret_cast static_assert static_cast template typeid typename typeof using virtual wchar_t where ",
        J =
            D +
            "boolean byte extends final finally implements import instanceof null native package strictfp super synchronized throws transient ",
        V =
            J +
            "as base by checked decimal delegate descending event fixed foreach from group implicit in interface internal into is lock object out override orderby params readonly ref sbyte sealed stackalloc string select uint ulong unchecked unsafe ushort var ",
        K =
            D +
            "debugger eval export function get null set undefined var with Infinity NaN ",
        L =
            "caller delete die do dump elsif eval exit foreach for goto if import last local my next no our print package redo require sub undef unless until use wantarray while BEGIN END ",
        M =
            y +
            "and as assert class def del elif except exec finally from global import in is lambda nonlocal not or pass print raise try with yield False True None ",
        N =
            y +
            "alias and begin case class def defined elsif end ensure false in module next nil not or redo rescue retry self super then true undef unless until when yield BEGIN END ",
        O = y + "case done elif esac eval fi function in local set then until ",
        W = I + V + K + L + M + N + O;
    function X(b) {
        return (b >= "a" && b <= "z") || (b >= "A" && b <= "Z");
    }
    function u(b, a, c, d) {
        b.unshift(c, d || 0);
        try {
            a.splice.apply(a, b);
        } finally {
            b.splice(0, 2);
        }
    }
    var Y = (function() {
            var b = [
                    "!",
                    "!=",
                    "!==",
                    "#",
                    "%",
                    "%=",
                    "&",
                    "&&",
                    "&&=",
                    "&=",
                    "(",
                    "*",
                    "*=",
                    "+=",
                    ",",
                    "-=",
                    "->",
                    "/",
                    "/=",
                    ":",
                    "::",
                    ";",
                    "<",
                    "<<",
                    "<<=",
                    "<=",
                    "=",
                    "==",
                    "===",
                    ">",
                    ">=",
                    ">>",
                    ">>=",
                    ">>>",
                    ">>>=",
                    "?",
                    "@",
                    "[",
                    "^",
                    "^=",
                    "^^",
                    "^^=",
                    "{",
                    "|",
                    "|=",
                    "||",
                    "||=",
                    "~",
                    "break",
                    "case",
                    "continue",
                    "delete",
                    "do",
                    "else",
                    "finally",
                    "instanceof",
                    "return",
                    "throw",
                    "try",
                    "typeof"
                ],
                a =
                    "(?:(?:(?:^|[^0-9.])\\.{1,3})|(?:(?:^|[^\\+])\\+)|(?:(?:^|[^\\-])-)";
            for (var c = 0; c < b.length; ++c) {
                var d = b[c];
                a += X(d.charAt(0))
                    ? "|\\b" + d
                    : "|" + d.replace(/([^=<>:&])/g, "\\$1");
            }
            a += "|^)\\s*$";
            return new RegExp(a);
        })(),
        P = /&/g,
        Q = /</g,
        R = />/g,
        Z = /\"/g;
    function $(b) {
        return b
            .replace(P, "&amp;")
            .replace(Q, "&lt;")
            .replace(R, "&gt;")
            .replace(Z, "&quot;");
    }
    function E(b) {
        return b
            .replace(P, "&amp;")
            .replace(Q, "&lt;")
            .replace(R, "&gt;");
    }
    var aa = /&lt;/g,
        ba = /&gt;/g,
        ca = /&apos;/g,
        da = /&quot;/g,
        ea = /&amp;/g,
        fa = /&nbsp;/g;
    function ga(b) {
        var a = b.indexOf("&");
        if (a < 0) return b;
        for (--a; (a = b.indexOf("&#", a + 1)) >= 0; ) {
            var c = b.indexOf(";", a);
            if (c >= 0) {
                var d = b.substring(a + 3, c),
                    g = 10;
                if (d && d.charAt(0) === "x") {
                    d = d.substring(1);
                    g = 16;
                }
                var e = parseInt(d, g);
                if (!isNaN(e))
                    b =
                        b.substring(0, a) +
                        String.fromCharCode(e) +
                        b.substring(c + 1);
            }
        }
        return b
            .replace(aa, "<")
            .replace(ba, ">")
            .replace(ca, "'")
            .replace(da, '"')
            .replace(ea, "&")
            .replace(fa, " ");
    }
    function S(b) {
        return "XMP" === b.tagName;
    }
    function z(b, a) {
        switch (b.nodeType) {
            case 1:
                var c = b.tagName.toLowerCase();
                a.push("<", c);
                for (var d = 0; d < b.attributes.length; ++d) {
                    var g = b.attributes[d];
                    if (!g.specified) continue;
                    a.push(" ");
                    z(g, a);
                }
                a.push(">");
                for (var e = b.firstChild; e; e = e.nextSibling) z(e, a);
                if (b.firstChild || !/^(?:br|link|img)$/.test(c))
                    a.push("</", c, ">");
                break;
            case 2:
                a.push(b.name.toLowerCase(), '="', $(b.value), '"');
                break;
            case 3:
            case 4:
                a.push(E(b.nodeValue));
                break;
        }
    }
    var F = null;
    function ha(b) {
        if (null === F) {
            var a = document.createElement("PRE");
            a.appendChild(
                document.createTextNode(
                    '<!DOCTYPE foo PUBLIC "foo bar">\n<foo />'
                )
            );
            F = !/</.test(a.innerHTML);
        }
        if (F) {
            var c = b.innerHTML;
            if (S(b)) c = E(c);
            return c;
        }
        var d = [];
        for (var g = b.firstChild; g; g = g.nextSibling) z(g, d);
        return d.join("");
    }
    function ia(b) {
        var a = 0;
        return function(c) {
            var d = null,
                g = 0;
            for (var e = 0, h = c.length; e < h; ++e) {
                var f = c.charAt(e);
                switch (f) {
                    case "\t":
                        if (!d) d = [];
                        d.push(c.substring(g, e));
                        var i = b - (a % b);
                        a += i;
                        for (; i >= 0; i -= "                ".length)
                            d.push("                ".substring(0, i));
                        g = e + 1;
                        break;
                    case "\n":
                        a = 0;
                        break;
                    default:
                        ++a;
                }
            }
            if (!d) return c;
            d.push(c.substring(g));
            return d.join("");
        };
    }
    var ja = /(?:[^<]+|<!--[\s\S]*?--\>|<!\[CDATA\[([\s\S]*?)\]\]>|<\/?[a-zA-Z][^>]*>|<)/g,
        ka = /^<!--/,
        la = /^<\[CDATA\[/,
        ma = /^<br\b/i;
    function na(b) {
        var a = b.match(ja),
            c = [],
            d = 0,
            g = [];
        if (a)
            for (var e = 0, h = a.length; e < h; ++e) {
                var f = a[e];
                if (f.length > 1 && f.charAt(0) === "<") {
                    if (ka.test(f)) continue;
                    if (la.test(f)) {
                        c.push(f.substring(9, f.length - 3));
                        d += f.length - 12;
                    } else if (ma.test(f)) {
                        c.push("\n");
                        ++d;
                    } else g.push(d, f);
                } else {
                    var i = ga(f);
                    c.push(i);
                    d += i.length;
                }
            }
        return {
            source: c.join(""),
            tags: g
        };
    }
    function v(b, a) {
        var c = {};
        (function() {
            var g = b.concat(a);
            for (var e = g.length; --e >= 0; ) {
                var h = g[e],
                    f = h[3];
                if (f) for (var i = f.length; --i >= 0; ) c[f.charAt(i)] = h;
            }
        })();
        var d = a.length;
        return function(g, e) {
            e = e || 0;
            var h = [e, "pln"],
                f = "",
                i = 0,
                j = g;
            while (j.length) {
                var o,
                    m = null,
                    k,
                    l = c[j.charAt(0)];
                if (l) {
                    k = j.match(l[1]);
                    m = k[0];
                    o = l[0];
                } else {
                    for (var n = 0; n < d; ++n) {
                        l = a[n];
                        var p = l[2];
                        if (p && !p.test(f)) continue;
                        k = j.match(l[1]);
                        if (k) {
                            m = k[0];
                            o = l[0];
                            break;
                        }
                    }
                    if (!m) {
                        o = "pln";
                        m = j.substring(0, 1);
                    }
                }
                h.push(e + i, o);
                i += m.length;
                j = j.substring(m.length);
                if (o !== "com" && /\S/.test(m)) f = m;
            }
            return h;
        };
    }
    var oa = v(
        [],
        [
            ["pln", /^[^<]+/, null],
            ["dec", /^<!\w[^>]*(?:>|$)/, null],
            ["com", /^<!--[\s\S]*?(?:--\>|$)/, null],
            ["src", /^<\?[\s\S]*?(?:\?>|$)/, null],
            ["src", /^<%[\s\S]*?(?:%>|$)/, null],
            ["src", /^<(script|style|xmp)\b[^>]*>[\s\S]*?<\/\1\b[^>]*>/i, null],
            ["tag", /^<\/?\w[^<>]*>/, null]
        ]
    );
    function pa(b) {
        var a = oa(b);
        for (var c = 0; c < a.length; c += 2)
            if (a[c + 1] === "src") {
                var d, g;
                d = a[c];
                g = c + 2 < a.length ? a[c + 2] : b.length;
                var e = b.substring(d, g),
                    h = e.match(/^(<[^>]*>)([\s\S]*)(<\/[^>]*>)$/);
                if (h)
                    a.splice(
                        c,
                        2,
                        d,
                        "tag",
                        d + h[1].length,
                        "src",
                        d + h[1].length + (h[2] || "").length,
                        "tag"
                    );
            }
        return a;
    }
    var qa = v(
        [
            ["atv", /^\'[^\']*(?:\'|$)/, null, "'"],
            ["atv", /^\"[^\"]*(?:\"|$)/, null, '"'],
            ["pun", /^[<>\/=]+/, null, "<>/="]
        ],
        [
            ["tag", /^[\w:\-]+/, /^</],
            ["atv", /^[\w\-]+/, /^=/],
            ["atn", /^[\w:\-]+/, null],
            ["pln", /^\s+/, null, " \t\r\n"]
        ]
    );
    function ra(b, a) {
        for (var c = 0; c < a.length; c += 2) {
            var d = a[c + 1];
            if (d === "tag") {
                var g, e;
                g = a[c];
                e = c + 2 < a.length ? a[c + 2] : b.length;
                var h = b.substring(g, e),
                    f = qa(h, g);
                u(f, a, c, 2);
                c += f.length - 2;
            }
        }
        return a;
    }
    function r(b) {
        var a = [],
            c = [];
        if (b.tripleQuotedStrings)
            a.push([
                "str",
                /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,
                null,
                "'\""
            ]);
        else if (b.multiLineStrings)
            a.push([
                "str",
                /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,
                null,
                "'\"`"
            ]);
        else
            a.push([
                "str",
                /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,
                null,
                "\"'"
            ]);
        c.push(["pln", /^(?:[^\'\"\`\/\#]+)/, null, " \r\n"]);
        if (b.hashComments) a.push(["com", /^#[^\r\n]*/, null, "#"]);
        if (b.cStyleComments) c.push(["com", /^\/\/[^\r\n]*/, null]);
        if (b.regexLiterals)
            c.push([
                "str",
                /^\/(?:[^\\\*\/\[]|\\[\s\S]|\[(?:[^\]\\]|\\.)*(?:\]|$))+(?:\/|$)/,
                Y
            ]);
        if (b.cStyleComments) c.push(["com", /^\/\*[\s\S]*?(?:\*\/|$)/, null]);
        var d = x(b.keywords);
        b = null;
        var g = v(a, c),
            e = v(
                [],
                [
                    ["pln", /^\s+/, null, " \r\n"],
                    ["pln", /^[a-z_$@][a-z_$@0-9]*/i, null],
                    ["lit", /^0x[a-f0-9]+[a-z]/i, null],
                    [
                        "lit",
                        /^(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d+)(?:e[+\-]?\d+)?[a-z]*/i,
                        null,
                        "123456789"
                    ],
                    ["pun", /^[^\s\w\.$@]+/, null]
                ]
            );
        function h(f, i) {
            for (var j = 0; j < i.length; j += 2) {
                var o = i[j + 1];
                if (o === "pln") {
                    var m, k, l, n;
                    m = i[j];
                    k = j + 2 < i.length ? i[j + 2] : f.length;
                    l = f.substring(m, k);
                    n = e(l, m);
                    for (var p = 0, t = n.length; p < t; p += 2) {
                        var w = n[p + 1];
                        if (w === "pln") {
                            var A = n[p],
                                B = p + 2 < t ? n[p + 2] : l.length,
                                s = f.substring(A, B);
                            if (s === ".") n[p + 1] = "pun";
                            else if (s in d) n[p + 1] = "kwd";
                            else if (/^@?[A-Z][A-Z$]*[a-z][A-Za-z$]*$/.test(s))
                                n[p + 1] = s.charAt(0) === "@" ? "lit" : "typ";
                        }
                    }
                    u(n, i, j, 2);
                    j += n.length - 2;
                }
            }
            return i;
        }
        return function(f) {
            var i = g(f);
            i = h(f, i);
            return i;
        };
    }
    var G = r({
        keywords: W,
        hashComments: true,
        cStyleComments: true,
        multiLineStrings: true,
        regexLiterals: true
    });
    function sa(b, a) {
        for (var c = 0; c < a.length; c += 2) {
            var d = a[c + 1];
            if (d === "src") {
                var g, e;
                g = a[c];
                e = c + 2 < a.length ? a[c + 2] : b.length;
                var h = G(b.substring(g, e));
                for (var f = 0, i = h.length; f < i; f += 2) h[f] += g;
                u(h, a, c, 2);
                c += h.length - 2;
            }
        }
        return a;
    }
    function ta(b, a) {
        var c = false;
        for (var d = 0; d < a.length; d += 2) {
            var g = a[d + 1],
                e,
                h;
            if (g === "atn") {
                e = a[d];
                h = d + 2 < a.length ? a[d + 2] : b.length;
                c = /^on|^style$/i.test(b.substring(e, h));
            } else if (g === "atv") {
                if (c) {
                    e = a[d];
                    h = d + 2 < a.length ? a[d + 2] : b.length;
                    var f = b.substring(e, h),
                        i = f.length,
                        j =
                            i >= 2 &&
                            /^[\"\']/.test(f) &&
                            f.charAt(0) === f.charAt(i - 1),
                        o,
                        m,
                        k;
                    if (j) {
                        m = e + 1;
                        k = h - 1;
                        o = f;
                    } else {
                        m = e + 1;
                        k = h - 1;
                        o = f.substring(1, f.length - 1);
                    }
                    var l = G(o);
                    for (var n = 0, p = l.length; n < p; n += 2) l[n] += m;
                    if (j) {
                        l.push(k, "atv");
                        u(l, a, d + 2, 0);
                    } else u(l, a, d, 2);
                }
                c = false;
            }
        }
        return a;
    }
    function ua(b) {
        var a = pa(b);
        a = ra(b, a);
        a = sa(b, a);
        a = ta(b, a);
        return a;
    }
    function va(b, a, c) {
        var d = [],
            g = 0,
            e = null,
            h = null,
            f = 0,
            i = 0,
            j = ia(8);
        function o(k) {
            if (k > g) {
                if (e && e !== h) {
                    d.push("</span>");
                    e = null;
                }
                if (!e && h) {
                    e = h;
                    d.push('<span class="', e, '">');
                }
                var l = E(j(b.substring(g, k)))
                    .replace(/(\r\n?|\n| ) /g, "$1&nbsp;")
                    .replace(/\r\n?|\n/g, "<br />");
                d.push(l);
                g = k;
            }
        }
        while (true) {
            var m;
            m = f < a.length ? (i < c.length ? a[f] <= c[i] : true) : false;
            if (m) {
                o(a[f]);
                if (e) {
                    d.push("</span>");
                    e = null;
                }
                d.push(a[f + 1]);
                f += 2;
            } else if (i < c.length) {
                o(c[i]);
                h = c[i + 1];
                i += 2;
            } else break;
        }
        o(b.length);
        if (e) d.push("</span>");
        return d.join("");
    }
    var C = {};
    function q(b, a) {
        for (var c = a.length; --c >= 0; ) {
            var d = a[c];
            if (!C.hasOwnProperty(d)) C[d] = b;
            else if ("console" in window)
                console.log("cannot override language handler %s", d);
        }
    }
    q(G, ["default-code"]);
    q(ua, ["default-markup", "html", "htm", "xhtml", "xml", "xsl"]);
    q(
        r({
            keywords: I,
            hashComments: true,
            cStyleComments: true
        }),
        ["c", "cc", "cpp", "cs", "cxx", "cyc"]
    );
    q(
        r({
            keywords: J,
            cStyleComments: true
        }),
        ["java"]
    );
    q(
        r({
            keywords: O,
            hashComments: true,
            multiLineStrings: true
        }),
        ["bsh", "csh", "sh"]
    );
    q(
        r({
            keywords: M,
            hashComments: true,
            multiLineStrings: true,
            tripleQuotedStrings: true
        }),
        ["cv", "py"]
    );
    q(
        r({
            keywords: L,
            hashComments: true,
            multiLineStrings: true,
            regexLiterals: true
        }),
        ["perl", "pl", "pm"]
    );
    q(
        r({
            keywords: N,
            hashComments: true,
            multiLineStrings: true,
            regexLiterals: true
        }),
        ["rb"]
    );
    q(
        r({
            keywords: K,
            cStyleComments: true,
            regexLiterals: true
        }),
        ["js"]
    );
    function T(b, a) {
        try {
            var c = na(b),
                d = c.source,
                g = c.tags;
            if (!C.hasOwnProperty(a))
                a = /^\s*</.test(d) ? "default-markup" : "default-code";
            var e = C[a].call({}, d);
            return va(d, g, e);
        } catch (h) {
            if ("console" in window) {
                console.log(h);
                console.trace();
            }
            return b;
        }
    }
    function wa(b) {
        var a = H(),
            c = [
                document.getElementsByTagName("pre"),
                document.getElementsByTagName("code"),
                document.getElementsByTagName("li"),
                document.getElementsByTagName("xmp")
            ],
            d = [];
        for (var g = 0; g < c.length; ++g)
            for (var e = 0; e < c[g].length; ++e) d.push(c[g][e]);
        c = null;
        var h = 0;
        function f() {
            var i = new Date().getTime() + 250;
            for (; h < d.length && new Date().getTime() < i; h++) {
                var j = d[h];
                if (j.className && j.className.indexOf("prettyprint") >= 0) {
                    var o = j.className.match(/\blang-(\w+)\b/);
                    if (o) o = o[1];
                    var m = false;
                    for (var k = j.parentNode; k; k = k.parentNode)
                        if (
                            (k.tagName === "pre" ||
                                k.tagName === "code" ||
                                k.tagName === "xmp") &&
                            k.className &&
                            k.className.indexOf("prettyprint") >= 0
                        ) {
                            m = true;
                            break;
                        }
                    if (!m) {
                        var l = ha(j);
                        l = l.replace(/(?:\r\n?|\n)$/, "");
                        var n = T(l, o);
                        if (!S(j)) j.innerHTML = n;
                        else {
                            var p = document.createElement("PRE");
                            for (var t = 0; t < j.attributes.length; ++t) {
                                var w = j.attributes[t];
                                if (w.specified)
                                    p.setAttribute(w.name, w.value);
                            }
                            p.innerHTML = n;
                            j.parentNode.replaceChild(p, j);
                            p = j;
                        }
                        if (a && j.tagName === "PRE") {
                            var A = j.getElementsByTagName("br");
                            for (var B = A.length; --B >= 0; ) {
                                var s = A[B];
                                s.parentNode.replaceChild(
                                    document.createTextNode("\r\n"),
                                    s
                                );
                            }
                        }
                    }
                }
            }
            if (h < d.length) setTimeout(f, 250);
            else if (b) b();
        }
        f();
    }
    window.PR_normalizedHtml = z;
    window.prettyPrintOne = T;
    window.prettyPrint = wa;
    window.PR = {
        createSimpleLexer: v,
        registerLangHandler: q,
        sourceDecorator: r,
        PR_ATTRIB_NAME: "atn",
        PR_ATTRIB_VALUE: "atv",
        PR_COMMENT: "com",
        PR_DECLARATION: "dec",
        PR_KEYWORD: "kwd",
        PR_LITERAL: "lit",
        PR_PLAIN: "pln",
        PR_PUNCTUATION: "pun",
        PR_SOURCE: "src",
        PR_STRING: "str",
        PR_TAG: "tag",
        PR_TYPE: "typ"
    };
})();


/***/ }),

/***/ 79661:
/*!**********************************************!*\
  !*** ./runestone/parsons/js/timedparsons.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TimedParsons)
/* harmony export */ });
/* harmony import */ var _parsons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsons */ 35718);


class TimedParsons extends _parsons__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(opts) {
        super(opts);
        // todo -- make this configurable
        if (opts.timedfeedback) {
            this.showfeedback = true;
        } else {
            this.showfeedback = false;
        }
        this.grader.showfeedback = this.showfeedback;
        this.hideFeedback();
        $(this.checkButton).hide();
        $(this.helpButton).hide();
        $(this.resetButton).hide();
    }
    checkCorrectTimed() {
        return this.correct ? "T" : "F";
    }
    hideFeedback() {
        $(this.messageDiv).hide();
    }
}

if (typeof window.component_factory === "undefined") {
    window.component_factory = {};
}
window.component_factory["parsons"] = function (opts) {
    if (opts.timed) {
        return new TimedParsons(opts);
    }
    return new _parsons__WEBPACK_IMPORTED_MODULE_0__.default(opts);
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3BhcnNvbnMvY3NzL3BhcnNvbnMuY3NzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvcGFyc29ucy9jc3MvcHJldHRpZnkuY3NzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvcGFyc29ucy9jc3MvcGFyc29ucy5jc3M/ZmVjNiIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3BhcnNvbnMvY3NzL3ByZXR0aWZ5LmNzcz8yNTg0Iiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvcGFyc29ucy9qcy9oYW1tZXIubWluLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvcGFyc29ucy9qcy9saW5lR3JhZGVyLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvcGFyc29ucy9qcy9wYXJzb25zLWkxOG4uZW4uanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9wYXJzb25zL2pzL3BhcnNvbnMtaTE4bi5wdC1ici5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3BhcnNvbnMvanMvcGFyc29ucy5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3BhcnNvbnMvanMvcGFyc29uc0Jsb2NrLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvcGFyc29ucy9qcy9wYXJzb25zTGluZS5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3BhcnNvbnMvanMvcHJldHRpZnkuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9wYXJzb25zL2pzL3RpbWVkcGFyc29ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7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YUFBYSxNQUFNLEtBQUssTUFBTSxPQUFPLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssTUFBTSxPQUFPLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssTUFBTSxPQUFPLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssT0FBTyxPQUFPLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssT0FBTyxPQUFPLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssT0FBTyxPQUFPLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE9BQU8sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLE9BQU8sYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLE9BQU8sYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEs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O0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtCQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsaURBQVc7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFC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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixnQkFBZ0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsZUFBZTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixjQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FB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IiwiZmlsZSI6InJ1bmVzdG9uZV9wYXJzb25zX2pzX3RpbWVkcGFyc29uc19qcy5idW5kbGUuanM/dj00M2NiNzIyNjNmZWYxYjdiMzA5YSIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9pbWFnZXMvcGFyc29ucy1sbC5zdmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi9pbWFnZXMvcGFyc29ucy1ybC5zdmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyBmcm9tIFwiLi9pbWFnZXMvcGFyc29ucy1sci5zdmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyBmcm9tIFwiLi9pbWFnZXMvcGFyc29ucy1yci5zdmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucGFyc29ucyAuc29ydGFibGUtY29kZS1jb250YWluZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5wYXJzb25zIC5zb3J0YWJsZS1jb2RlLWNvbnRhaW5lcjpub3QoLmJsb2NrKSB7XFxuICAgIC8qIFJlbW92ZSB0ZXh0IGhpZ2hsaWdodGluZyBpbiB3aWRnZXQgKi9cXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogLW1vei1ub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4ucGFyc29ucyAuc29ydGFibGUtY29kZSB7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xcbiAgICBtYXJnaW46IDBweCAxNXB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5wYXJzb25zIC5zb3VyY2UsXFxuLnBhcnNvbnMgLmFuc3dlcixcXG4ucGFyc29ucyAuYW5zd2VyMSxcXG4ucGFyc29ucyAuYW5zd2VyMixcXG4ucGFyc29ucyAuYW5zd2VyMyxcXG4ucGFyc29ucyAuYW5zd2VyNCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmZmO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I4YjhmMjtcXG59XFxuLnBhcnNvbnMgLnNvdXJjZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZmY7XFxufVxcbi5wYXJzb25zIC5hbnN3ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhO1xcbiAgICBib3JkZXItY29sb3I6ICNlZTA7XFxufVxcbi5wYXJzb25zIC5hbnN3ZXIuaW5jb3JyZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZGVkZTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZjJiNmI2O1xcbn1cXG4ucGFyc29ucyAuYW5zd2VyLmNvcnJlY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmMGQ4O1xcbiAgICBib3JkZXItY29sb3I6ICNhZGU1OTU7XFxufVxcbi5wYXJzb25zIC5hbnN3ZXIxIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNlZTAsICNlZTApIG5vLXJlcGVhdCBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDFweCAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzMHB4IDA7XFxuICAgIGJhY2tncm91bmQtb3JpZ2luOiBwYWRkaW5nLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZWUwO1xcbn1cXG4ucGFyc29ucyAuYW5zd2VyMS5pbmNvcnJlY3Qge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2YyYjZiNiwgI2YyYjZiNikgbm8tcmVwZWF0IGJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMXB4IDEwMCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDMwcHggMDtcXG4gICAgYmFja2dyb3VuZC1vcmlnaW46IHBhZGRpbmctYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlO1xcbiAgICBib3JkZXItY29sb3I6ICNmMmI2YjY7XFxufVxcbi5wYXJzb25zIC5hbnN3ZXIxLmNvcnJlY3Qge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2FkZTU5NSwgI2FkZTU5NSkgbm8tcmVwZWF0IGJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMXB4IDEwMCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDMwcHggMDtcXG4gICAgYmFja2dyb3VuZC1vcmlnaW46IHBhZGRpbmctYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmMGQ4O1xcbiAgICBib3JkZXItY29sb3I6ICNhZGU1OTU7XFxufVxcbi5wYXJzb25zIC5hbnN3ZXIyIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNlZTAsICNlZTApIG5vLXJlcGVhdCBib3JkZXItYm94LFxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KCNlZTAsICNlZTApIG5vLXJlcGVhdCBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDFweCAxMDAlLCAxcHggMTAwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMzBweCAwLCA2MHB4IDA7XFxuICAgIGJhY2tncm91bmQtb3JpZ2luOiBwYWRkaW5nLWJveCwgcGFkZGluZy1ib3g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmE7XFxuICAgIGJvcmRlci1jb2xvcjogI2VlMDtcXG59XFxuLnBhcnNvbnMgLmFuc3dlcjIuaW5jb3JyZWN0IHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmMmI2YjYsICNmMmI2YjYpIG5vLXJlcGVhdCBib3JkZXItYm94LFxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KCNmMmI2YjYsICNmMmI2YjYpIG5vLXJlcGVhdCBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDFweCAxMDAlLCAxcHggMTAwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMzBweCAwLCA2MHB4IDA7XFxuICAgIGJhY2tncm91bmQtb3JpZ2luOiBwYWRkaW5nLWJveCwgcGFkZGluZy1ib3g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmRlZGU7XFxuICAgIGJvcmRlci1jb2xvcjogI2YyYjZiNjtcXG59XFxuLnBhcnNvbnMgLmFuc3dlcjIuY29ycmVjdCB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjYWRlNTk1LCAjYWRlNTk1KSBuby1yZXBlYXQgYm9yZGVyLWJveCxcXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgjYWRlNTk1LCAjYWRlNTk1KSBuby1yZXBlYXQgYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxcHggMTAwJSwgMXB4IDEwMCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDMwcHggMCwgNjBweCAwO1xcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogcGFkZGluZy1ib3gsIHBhZGRpbmctYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmMGQ4O1xcbiAgICBib3JkZXItY29sb3I6ICNhZGU1OTU7XFxufVxcbi5wYXJzb25zIC5hbnN3ZXIzIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNlZTAsICNlZTApIG5vLXJlcGVhdCBib3JkZXItYm94LFxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KCNlZTAsICNlZTApIG5vLXJlcGVhdCBib3JkZXItYm94LFxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KCNlZTAsICNlZTApIG5vLXJlcGVhdCBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDFweCAxMDAlLCAxcHggMTAwJSwgMXB4IDEwMCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDMwcHggMCwgNjBweCAwLCA5MHB4IDA7XFxuICAgIGJhY2tncm91bmQtb3JpZ2luOiBwYWRkaW5nLWJveCwgcGFkZGluZy1ib3gsIHBhZGRpbmctYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhO1xcbiAgICBib3JkZXItY29sb3I6ICNlZTA7XFxufVxcbi5wYXJzb25zIC5hbnN3ZXIzLmluY29ycmVjdCB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZjJiNmI2LCAjZjJiNmI2KSBuby1yZXBlYXQgYm9yZGVyLWJveCxcXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgjZjJiNmI2LCAjZjJiNmI2KSBuby1yZXBlYXQgYm9yZGVyLWJveCxcXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgjZjJiNmI2LCAjZjJiNmI2KSBuby1yZXBlYXQgYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxcHggMTAwJSwgMXB4IDEwMCUsIDFweCAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzMHB4IDAsIDYwcHggMCwgOTBweCAwO1xcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogcGFkZGluZy1ib3gsIHBhZGRpbmctYm94LCBwYWRkaW5nLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZGVkZTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZjJiNmI2O1xcbn1cXG4ucGFyc29ucyAuYW5zd2VyMy5jb3JyZWN0IHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNhZGU1OTUsICNhZGU1OTUpIG5vLXJlcGVhdCBib3JkZXItYm94LFxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KCNhZGU1OTUsICNhZGU1OTUpIG5vLXJlcGVhdCBib3JkZXItYm94LFxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KCNhZGU1OTUsICNhZGU1OTUpIG5vLXJlcGVhdCBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDFweCAxMDAlLCAxcHggMTAwJSwgMXB4IDEwMCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDMwcHggMCwgNjBweCAwLCA5MHB4IDA7XFxuICAgIGJhY2tncm91bmQtb3JpZ2luOiBwYWRkaW5nLWJveCwgcGFkZGluZy1ib3gsIHBhZGRpbmctYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmMGQ4O1xcbiAgICBib3JkZXItY29sb3I6ICNhZGU1OTU7XFxufVxcbi5wYXJzb25zIC5hbnN3ZXI0IHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNlZTAsICNlZTApIG5vLXJlcGVhdCBib3JkZXItYm94LFxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KCNlZTAsICNlZTApIG5vLXJlcGVhdCBib3JkZXItYm94LFxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KCNlZTAsICNlZTApIG5vLXJlcGVhdCBib3JkZXItYm94LFxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KCNlZTAsICNlZTApIG5vLXJlcGVhdCBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDFweCAxMDAlLCAxcHggMTAwJSwgMXB4IDEwMCUsIDFweCAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzMHB4IDAsIDYwcHggMCwgOTBweCAwLCAxMjBweCAwO1xcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogcGFkZGluZy1ib3gsIHBhZGRpbmctYm94LCBwYWRkaW5nLWJveCwgcGFkZGluZy1ib3g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmE7XFxuICAgIGJvcmRlci1jb2xvcjogI2VlMDtcXG59XFxuLnBhcnNvbnMgLmFuc3dlcjQuaW5jb3JyZWN0IHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmMmI2YjYsICNmMmI2YjYpIG5vLXJlcGVhdCBib3JkZXItYm94LFxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KCNmMmI2YjYsICNmMmI2YjYpIG5vLXJlcGVhdCBib3JkZXItYm94LFxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KCNmMmI2YjYsICNmMmI2YjYpIG5vLXJlcGVhdCBib3JkZXItYm94LFxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KCNmMmI2YjYsICNmMmI2YjYpIG5vLXJlcGVhdCBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDFweCAxMDAlLCAxcHggMTAwJSwgMXB4IDEwMCUsIDFweCAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzMHB4IDAsIDYwcHggMCwgOTBweCAwLCAxMjBweCAwO1xcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogcGFkZGluZy1ib3gsIHBhZGRpbmctYm94LCBwYWRkaW5nLWJveCwgcGFkZGluZy1ib3g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmRlZGU7XFxuICAgIGJvcmRlci1jb2xvcjogI2YyYjZiNjtcXG59XFxuLnBhcnNvbnMgLmFuc3dlcjQuY29ycmVjdCB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjYWRlNTk1LCAjYWRlNTk1KSBuby1yZXBlYXQgYm9yZGVyLWJveCxcXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgjYWRlNTk1LCAjYWRlNTk1KSBuby1yZXBlYXQgYm9yZGVyLWJveCxcXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgjYWRlNTk1LCAjYWRlNTk1KSBuby1yZXBlYXQgYm9yZGVyLWJveCxcXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgjYWRlNTk1LCAjYWRlNTk1KSBuby1yZXBlYXQgYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxcHggMTAwJSwgMXB4IDEwMCUsIDFweCAxMDAlLCAxcHggMTAwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMzBweCAwLCA2MHB4IDAsIDkwcHggMCwgMTIwcHggMDtcXG4gICAgYmFja2dyb3VuZC1vcmlnaW46IHBhZGRpbmctYm94LCBwYWRkaW5nLWJveCwgcGFkZGluZy1ib3gsIHBhZGRpbmctYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmMGQ4O1xcbiAgICBib3JkZXItY29sb3I6ICNhZGU1OTU7XFxufVxcbi5wYXJzb25zIC5ibG9jayB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2QzZDM7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGN1cnNvcjogbW92ZTtcXG59XFxuLnBhcnNvbnMgLmJsb2NrLmRpc2FibGVkIHtcXG4gICAgb3BhY2l0eTogMC4zO1xcbn1cXG4ucGFyc29ucyAuYmxvY2suZG93biB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiA0cHggOXB4O1xcbn1cXG4ucGFyc29ucyAuYmxvY2sudXAge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogNHB4IDlweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IGJsYWNrO1xcbn1cXG4ucGFyc29ucyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ucGFyc29ucyAuYmxvY2sge1xcbiAgICBjbGVhcjogYm90aDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7Ki9cXG59XFxuXFxuLnBhcnNvbnMgY29kZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgY2xlYXI6IGJvdGg7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnBhcnNvbnMtdGV4dCBjb2RlIHtcXG4gICAgZmxvYXQ6IG5vbmU7XFxufVxcblxcbi5wYXJzb25zIC5ibG9jayBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG4ucGFyc29ucyAuYmxvY2ssXFxuLnBhcnNvbnMgLmJsb2NrOmJlZm9yZSxcXG4ucGFyc29ucyAuYmxvY2s6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG59XFxuLnBhcnNvbnMgLmluZGVudDEge1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG59XFxuLnBhcnNvbnMgLmluZGVudDIge1xcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcXG59XFxuLnBhcnNvbnMgLmluZGVudDMge1xcbiAgICBtYXJnaW4tbGVmdDogOTBweDtcXG59XFxuLnBhcnNvbnMgLmluZGVudDQge1xcbiAgICBtYXJnaW4tbGVmdDogMTIwcHg7XFxufVxcbi5wYXJzb25zIC5jb3JyZWN0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZTljNjtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjBkODtcXG59XFxuLnBhcnNvbnMgLmluZGVudExlZnQsXFxuLnBhcnNvbnMgLmluZGVudFJpZ2h0IHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmY2MwMDtcXG4gICAgcGFkZGluZzogNHB4IDlweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjBiMztcXG59XFxuLnBhcnNvbnMgLmluZGVudExlZnQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCwgbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlciwgcmlnaHQgY2VudGVyO1xcbn1cXG4ucGFyc29ucyAuaW5kZW50UmlnaHQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCwgbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlciwgcmlnaHQgY2VudGVyO1xcbn1cXG4ucGFyc29ucyAuaW5jb3JyZWN0UG9zaXRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiYWJhO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcbi5wYXJzb25zIC5wYWlyZWQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWxlZnQ6IDExcHggc29saWQgI2I4YjhmMjtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxMXB4IHNvbGlkICNiOGI4ZjI7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYjhiOGYyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I4YjhmMjtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ucGFyc29ucyB7XFxuICAgIGJvcmRlci1sZWZ0OiAwO1xcbiAgICBib3JkZXItcmlnaHQ6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbn1cXG4ucGFyc29ucyAucGFyc29ucy10ZXh0IHtcXG4gICAgbWF4LXdpZHRoOiA1MDBwdDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLnBhcnNvbnMgLnBhcnNvbnMtaW1nIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucGFyc29ucyAucGFyc29ucy1jb250cm9scyB7XFxuICAgIG1heC13aWR0aDogNTAwcHQ7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnBhcnNvbnMgW3JvbGU9XFxcInRvb2x0aXBcXFwiXSB7XFxuICAgIG1heC13aWR0aDogNTAwcHQ7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXG4gICAgdG9wOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmJsb2NrLWxhYmVsIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDb3VyaWVyXFxcIjtcXG4gICAgZm9udC1zaXplOiA5MCU7XFxuICAgIGNvbG9yOiAjN2U3ZWU3O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xcbn1cXG4ucmlnaHQtbGFiZWwge1xcbiAgICBwYWRkaW5nOiAwLjJlbSAwZW0gMC4zZW0gMC42ZW07XFxufVxcbi5sZWZ0LWxhYmVsIHtcXG4gICAgcGFkZGluZzogMC4yZW0gMC42ZW0gMC4zZW0gMGVtO1xcbn1cXG5cXG4ubGFiZWxzIHtcXG4gICAgcGFkZGluZy10b3A6IDJweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5cXG4ucnVuZXN0b25lIC5saW5lcyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYWxpZ24tc2VsZjogbGVmdDtcXG59XFxuXFxuLmJvcmRlcl9sZWZ0IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYjBiMGIwO1xcbn1cXG5cXG4uYmxvY2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcXG59XFxuXFxuLnBhcnNvbnMsXFxuLnBhcnNvbnMgLnNvcnRhYmxlLWNvZGUtY29udGFpbmVyLFxcbi5jZF9zZWN0aW9uIHtcXG4gICAgbWF4LXdpZHRoOiBub25lO1xcbn1cXG5cXG4jdGltZWRfVGVzdCAucGFnaW5hdGlvbiB7XFxuICAgIG1hcmdpbjogNXB4IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3J1bmVzdG9uZS9wYXJzb25zL2Nzcy9wYXJzb25zLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUNBQXVDO0lBQ3ZDLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lB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bEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHNCQUFzQjtBQUMxQjs7QUFFQTs7O0lBR0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnBhcnNvbnMgLnNvcnRhYmxlLWNvZGUtY29udGFpbmVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ucGFyc29ucyAuc29ydGFibGUtY29kZS1jb250YWluZXI6bm90KC5ibG9jaykge1xcbiAgICAvKiBSZW1vdmUgdGV4dCBoaWdobGlnaHRpbmcgaW4gd2lkZ2V0ICovXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IC1tb3otbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLnBhcnNvbnMgLnNvcnRhYmxlLWNvZGUge1xcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcXG4gICAgbWFyZ2luOiAwcHggMTVweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4ucGFyc29ucyAuc291cmNlLFxcbi5wYXJzb25zIC5hbnN3ZXIsXFxuLnBhcnNvbnMgLmFuc3dlcjEsXFxuLnBhcnNvbnMgLmFuc3dlcjIsXFxuLnBhcnNvbnMgLmFuc3dlcjMsXFxuLnBhcnNvbnMgLmFuc3dlcjQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZmZjtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiOGI4ZjI7XFxufVxcbi5wYXJzb25zIC5zb3VyY2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmZmO1xcbn1cXG4ucGFyc29ucyAuYW5zd2VyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZWUwO1xcbn1cXG4ucGFyc29ucyAuYW5zd2VyLmluY29ycmVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmRlZGU7XFxuICAgIGJvcmRlci1jb2xvcjogI2YyYjZiNjtcXG59XFxuLnBhcnNvbnMgLmFuc3dlci5jb3JyZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjBkODtcXG4gICAgYm9yZGVyLWNvbG9yOiAjYWRlNTk1O1xcbn1cXG4ucGFyc29ucyAuYW5zd2VyMSB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZWUwLCAjZWUwKSBuby1yZXBlYXQgYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxcHggMTAwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMzBweCAwO1xcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogcGFkZGluZy1ib3g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmE7XFxuICAgIGJvcmRlci1jb2xvcjogI2VlMDtcXG59XFxuLnBhcnNvbnMgLmFuc3dlcjEuaW5jb3JyZWN0IHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmMmI2YjYsICNmMmI2YjYpIG5vLXJlcGVhdCBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDFweCAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzMHB4IDA7XFxuICAgIGJhY2tncm91bmQtb3JpZ2luOiBwYWRkaW5nLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZGVkZTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZjJiNmI2O1xcbn1cXG4ucGFyc29ucyAuYW5zd2VyMS5jb3JyZWN0IHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNhZGU1OTUsICNhZGU1OTUpIG5vLXJlcGVhdCBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDFweCAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzMHB4IDA7XFxuICAgIGJhY2tncm91bmQtb3JpZ2luOiBwYWRkaW5nLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjBkODtcXG4gICAgYm9yZGVyLWNvbG9yOiAjYWRlNTk1O1xcbn1cXG4ucGFyc29ucyAuYW5zd2VyMiB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZWUwLCAjZWUwKSBuby1yZXBlYXQgYm9yZGVyLWJveCxcXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgjZWUwLCAjZWUwKSBuby1yZXBlYXQgYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxcHggMTAwJSwgMXB4IDEwMCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDMwcHggMCwgNjBweCAwO1xcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogcGFkZGluZy1ib3gsIHBhZGRpbmctYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhO1xcbiAgICBib3JkZXItY29sb3I6ICNlZTA7XFxufVxcbi5wYXJzb25zIC5hbnN3ZXIyLmluY29ycmVjdCB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZjJiNmI2LCAjZjJiNmI2KSBuby1yZXBlYXQgYm9yZGVyLWJveCxcXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgjZjJiNmI2LCAjZjJiNmI2KSBuby1yZXBlYXQgYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxcHggMTAwJSwgMXB4IDEwMCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDMwcHggMCwgNjBweCAwO1xcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogcGFkZGluZy1ib3gsIHBhZGRpbmctYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlO1xcbiAgICBib3JkZXItY29sb3I6ICNmMmI2YjY7XFxufVxcbi5wYXJzb25zIC5hbnN3ZXIyLmNvcnJlY3Qge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2FkZTU5NSwgI2FkZTU5NSkgbm8tcmVwZWF0IGJvcmRlci1ib3gsXFxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoI2FkZTU5NSwgI2FkZTU5NSkgbm8tcmVwZWF0IGJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMXB4IDEwMCUsIDFweCAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzMHB4IDAsIDYwcHggMDtcXG4gICAgYmFja2dyb3VuZC1vcmlnaW46IHBhZGRpbmctYm94LCBwYWRkaW5nLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjBkODtcXG4gICAgYm9yZGVyLWNvbG9yOiAjYWRlNTk1O1xcbn1cXG4ucGFyc29ucyAuYW5zd2VyMyB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZWUwLCAjZWUwKSBuby1yZXBlYXQgYm9yZGVyLWJveCxcXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgjZWUwLCAjZWUwKSBuby1yZXBlYXQgYm9yZGVyLWJveCxcXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgjZWUwLCAjZWUwKSBuby1yZXBlYXQgYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxcHggMTAwJSwgMXB4IDEwMCUsIDFweCAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzMHB4IDAsIDYwcHggMCwgOTBweCAwO1xcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogcGFkZGluZy1ib3gsIHBhZGRpbmctYm94LCBwYWRkaW5nLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZWUwO1xcbn1cXG4ucGFyc29ucyAuYW5zd2VyMy5pbmNvcnJlY3Qge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2YyYjZiNiwgI2YyYjZiNikgbm8tcmVwZWF0IGJvcmRlci1ib3gsXFxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoI2YyYjZiNiwgI2YyYjZiNikgbm8tcmVwZWF0IGJvcmRlci1ib3gsXFxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoI2YyYjZiNiwgI2YyYjZiNikgbm8tcmVwZWF0IGJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMXB4IDEwMCUsIDFweCAxMDAlLCAxcHggMTAwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMzBweCAwLCA2MHB4IDAsIDkwcHggMDtcXG4gICAgYmFja2dyb3VuZC1vcmlnaW46IHBhZGRpbmctYm94LCBwYWRkaW5nLWJveCwgcGFkZGluZy1ib3g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmRlZGU7XFxuICAgIGJvcmRlci1jb2xvcjogI2YyYjZiNjtcXG59XFxuLnBhcnNvbnMgLmFuc3dlcjMuY29ycmVjdCB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjYWRlNTk1LCAjYWRlNTk1KSBuby1yZXBlYXQgYm9yZGVyLWJveCxcXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgjYWRlNTk1LCAjYWRlNTk1KSBuby1yZXBlYXQgYm9yZGVyLWJveCxcXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgjYWRlNTk1LCAjYWRlNTk1KSBuby1yZXBlYXQgYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxcHggMTAwJSwgMXB4IDEwMCUsIDFweCAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzMHB4IDAsIDYwcHggMCwgOTBweCAwO1xcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogcGFkZGluZy1ib3gsIHBhZGRpbmctYm94LCBwYWRkaW5nLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjBkODtcXG4gICAgYm9yZGVyLWNvbG9yOiAjYWRlNTk1O1xcbn1cXG4ucGFyc29ucyAuYW5zd2VyNCB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZWUwLCAjZWUwKSBuby1yZXBlYXQgYm9yZGVyLWJveCxcXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgjZWUwLCAjZWUwKSBuby1yZXBlYXQgYm9yZGVyLWJveCxcXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgjZWUwLCAjZWUwKSBuby1yZXBlYXQgYm9yZGVyLWJveCxcXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgjZWUwLCAjZWUwKSBuby1yZXBlYXQgYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxcHggMTAwJSwgMXB4IDEwMCUsIDFweCAxMDAlLCAxcHggMTAwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMzBweCAwLCA2MHB4IDAsIDkwcHggMCwgMTIwcHggMDtcXG4gICAgYmFja2dyb3VuZC1vcmlnaW46IHBhZGRpbmctYm94LCBwYWRkaW5nLWJveCwgcGFkZGluZy1ib3gsIHBhZGRpbmctYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhO1xcbiAgICBib3JkZXItY29sb3I6ICNlZTA7XFxufVxcbi5wYXJzb25zIC5hbnN3ZXI0LmluY29ycmVjdCB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZjJiNmI2LCAjZjJiNmI2KSBuby1yZXBlYXQgYm9yZGVyLWJveCxcXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgjZjJiNmI2LCAjZjJiNmI2KSBuby1yZXBlYXQgYm9yZGVyLWJveCxcXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgjZjJiNmI2LCAjZjJiNmI2KSBuby1yZXBlYXQgYm9yZGVyLWJveCxcXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgjZjJiNmI2LCAjZjJiNmI2KSBuby1yZXBlYXQgYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxcHggMTAwJSwgMXB4IDEwMCUsIDFweCAxMDAlLCAxcHggMTAwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMzBweCAwLCA2MHB4IDAsIDkwcHggMCwgMTIwcHggMDtcXG4gICAgYmFja2dyb3VuZC1vcmlnaW46IHBhZGRpbmctYm94LCBwYWRkaW5nLWJveCwgcGFkZGluZy1ib3gsIHBhZGRpbmctYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlO1xcbiAgICBib3JkZXItY29sb3I6ICNmMmI2YjY7XFxufVxcbi5wYXJzb25zIC5hbnN3ZXI0LmNvcnJlY3Qge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2FkZTU5NSwgI2FkZTU5NSkgbm8tcmVwZWF0IGJvcmRlci1ib3gsXFxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoI2FkZTU5NSwgI2FkZTU5NSkgbm8tcmVwZWF0IGJvcmRlci1ib3gsXFxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoI2FkZTU5NSwgI2FkZTU5NSkgbm8tcmVwZWF0IGJvcmRlci1ib3gsXFxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoI2FkZTU5NSwgI2FkZTU5NSkgbm8tcmVwZWF0IGJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMXB4IDEwMCUsIDFweCAxMDAlLCAxcHggMTAwJSwgMXB4IDEwMCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDMwcHggMCwgNjBweCAwLCA5MHB4IDAsIDEyMHB4IDA7XFxuICAgIGJhY2tncm91bmQtb3JpZ2luOiBwYWRkaW5nLWJveCwgcGFkZGluZy1ib3gsIHBhZGRpbmctYm94LCBwYWRkaW5nLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjBkODtcXG4gICAgYm9yZGVyLWNvbG9yOiAjYWRlNTk1O1xcbn1cXG4ucGFyc29ucyAuYmxvY2sge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNkM2QzO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBjdXJzb3I6IG1vdmU7XFxufVxcbi5wYXJzb25zIC5ibG9jay5kaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDAuMztcXG59XFxuLnBhcnNvbnMgLmJsb2NrLmRvd24ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogNHB4IDlweDtcXG59XFxuLnBhcnNvbnMgLmJsb2NrLnVwIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDRweCA5cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDRweCBibGFjaztcXG59XFxuLnBhcnNvbnMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnBhcnNvbnMgLmJsb2NrIHtcXG4gICAgY2xlYXI6IGJvdGg7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAvKmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyovXFxufVxcblxcbi5wYXJzb25zIGNvZGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGNsZWFyOiBib3RoO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5wYXJzb25zLXRleHQgY29kZSB7XFxuICAgIGZsb2F0OiBub25lO1xcbn1cXG5cXG4ucGFyc29ucyAuYmxvY2sgcCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLnBhcnNvbnMgLmJsb2NrLFxcbi5wYXJzb25zIC5ibG9jazpiZWZvcmUsXFxuLnBhcnNvbnMgLmJsb2NrOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcbi5wYXJzb25zIC5pbmRlbnQxIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxufVxcbi5wYXJzb25zIC5pbmRlbnQyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxufVxcbi5wYXJzb25zIC5pbmRlbnQzIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDkwcHg7XFxufVxcbi5wYXJzb25zIC5pbmRlbnQ0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xcbn1cXG4ucGFyc29ucyAuY29ycmVjdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNmU5YzY7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmYwZDg7XFxufVxcbi5wYXJzb25zIC5pbmRlbnRMZWZ0LFxcbi5wYXJzb25zIC5pbmRlbnRSaWdodCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmNjMDA7XFxuICAgIHBhZGRpbmc6IDRweCA5cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYwYjM7XFxufVxcbi5wYXJzb25zIC5pbmRlbnRMZWZ0IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9wYXJzb25zLWxsLnN2Z1xcXCIpLFxcbiAgICAgICAgdXJsKFxcXCIuL2ltYWdlcy9wYXJzb25zLXJsLnN2Z1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0LCBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyLCByaWdodCBjZW50ZXI7XFxufVxcbi5wYXJzb25zIC5pbmRlbnRSaWdodCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvcGFyc29ucy1sci5zdmdcXFwiKSxcXG4gICAgICAgIHVybChcXFwiLi9pbWFnZXMvcGFyc29ucy1yci5zdmdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCwgbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlciwgcmlnaHQgY2VudGVyO1xcbn1cXG4ucGFyc29ucyAuaW5jb3JyZWN0UG9zaXRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiYWJhO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcbi5wYXJzb25zIC5wYWlyZWQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWxlZnQ6IDExcHggc29saWQgI2I4YjhmMjtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxMXB4IHNvbGlkICNiOGI4ZjI7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYjhiOGYyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I4YjhmMjtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ucGFyc29ucyB7XFxuICAgIGJvcmRlci1sZWZ0OiAwO1xcbiAgICBib3JkZXItcmlnaHQ6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbn1cXG4ucGFyc29ucyAucGFyc29ucy10ZXh0IHtcXG4gICAgbWF4LXdpZHRoOiA1MDBwdDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLnBhcnNvbnMgLnBhcnNvbnMtaW1nIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucGFyc29ucyAucGFyc29ucy1jb250cm9scyB7XFxuICAgIG1heC13aWR0aDogNTAwcHQ7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnBhcnNvbnMgW3JvbGU9XFxcInRvb2x0aXBcXFwiXSB7XFxuICAgIG1heC13aWR0aDogNTAwcHQ7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXG4gICAgdG9wOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmJsb2NrLWxhYmVsIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDb3VyaWVyXFxcIjtcXG4gICAgZm9udC1zaXplOiA5MCU7XFxuICAgIGNvbG9yOiAjN2U3ZWU3O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xcbn1cXG4ucmlnaHQtbGFiZWwge1xcbiAgICBwYWRkaW5nOiAwLjJlbSAwZW0gMC4zZW0gMC42ZW07XFxufVxcbi5sZWZ0LWxhYmVsIHtcXG4gICAgcGFkZGluZzogMC4yZW0gMC42ZW0gMC4zZW0gMGVtO1xcbn1cXG5cXG4ubGFiZWxzIHtcXG4gICAgcGFkZGluZy10b3A6IDJweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5cXG4ucnVuZXN0b25lIC5saW5lcyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYWxpZ24tc2VsZjogbGVmdDtcXG59XFxuXFxuLmJvcmRlcl9sZWZ0IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYjBiMGIwO1xcbn1cXG5cXG4uYmxvY2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcXG59XFxuXFxuLnBhcnNvbnMsXFxuLnBhcnNvbnMgLnNvcnRhYmxlLWNvZGUtY29udGFpbmVyLFxcbi5jZF9zZWN0aW9uIHtcXG4gICAgbWF4LXdpZHRoOiBub25lO1xcbn1cXG5cXG4jdGltZWRfVGVzdCAucGFnaW5hdGlvbiB7XFxuICAgIG1hcmdpbjogNXB4IDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zdHJ7Y29sb3I6IzA4MH0ua3dke2NvbG9yOiMwMDh9LmNvbXtjb2xvcjojODAwfS50eXB7Y29sb3I6IzYwNn0ubGl0e2NvbG9yOiMwNjZ9LnB1bntjb2xvcjojNjYwfS5wbG57Y29sb3I6IzAwMH0udGFne2NvbG9yOiMwMDh9LmF0bntjb2xvcjojNjA2fS5hdHZ7Y29sb3I6IzA4MH0uZGVje2NvbG9yOiM2MDZ9cHJlLnByZXR0eXByaW50e3BhZGRpbmc6MnB4O2JvcmRlcjoxcHggc29saWQgIzg4OH1AbWVkaWEgcHJpbnR7LnN0cntjb2xvcjojMDYwfS5rd2R7Y29sb3I6IzAwNjtmb250LXdlaWdodDpib2xkfS5jb217Y29sb3I6IzYwMDtmb250LXN0eWxlOml0YWxpY30udHlwe2NvbG9yOiM0MDQ7Zm9udC13ZWlnaHQ6Ym9sZH0ubGl0e2NvbG9yOiMwNDR9LnB1bntjb2xvcjojNDQwfS5wbG57Y29sb3I6IzAwMH0udGFne2NvbG9yOiMwMDY7Zm9udC13ZWlnaHQ6Ym9sZH0uYXRue2NvbG9yOiM0MDR9LmF0dntjb2xvcjojMDYwfX1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ydW5lc3RvbmUvcGFyc29ucy9jc3MvcHJldHRpZnkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLEtBQUssVUFBVSxDQUFDLEtBQUssVUFBVSxDQUFDLEtBQUssVUFBVSxDQUFDLEtBQUssVUFBVSxDQUFDLEtBQUssVUFBVSxDQUFDLEtBQUssVUFBVSxDQUFDLEtBQUssVUFBVSxDQUFDLEtBQUssVUFBVSxDQUFDLEtBQUssVUFBVSxDQUFDLEtBQUssVUFBVSxDQUFDLEtBQUssVUFBVSxDQUFDLGdCQUFnQixXQUFXLENBQUMscUJBQXFCLENBQUMsYUFBYSxLQUFLLFVBQVUsQ0FBQyxLQUFLLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLFVBQVUsQ0FBQyxLQUFLLFVBQVUsQ0FBQyxLQUFLLFVBQVUsQ0FBQyxLQUFLLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLFVBQVUsQ0FBQyxLQUFLLFVBQVUsQ0FBQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc3Rye2NvbG9yOiMwODB9Lmt3ZHtjb2xvcjojMDA4fS5jb217Y29sb3I6IzgwMH0udHlwe2NvbG9yOiM2MDZ9LmxpdHtjb2xvcjojMDY2fS5wdW57Y29sb3I6IzY2MH0ucGxue2NvbG9yOiMwMDB9LnRhZ3tjb2xvcjojMDA4fS5hdG57Y29sb3I6IzYwNn0uYXR2e2NvbG9yOiMwODB9LmRlY3tjb2xvcjojNjA2fXByZS5wcmV0dHlwcmludHtwYWRkaW5nOjJweDtib3JkZXI6MXB4IHNvbGlkICM4ODh9QG1lZGlhIHByaW50ey5zdHJ7Y29sb3I6IzA2MH0ua3dke2NvbG9yOiMwMDY7Zm9udC13ZWlnaHQ6Ym9sZH0uY29te2NvbG9yOiM2MDA7Zm9udC1zdHlsZTppdGFsaWN9LnR5cHtjb2xvcjojNDA0O2ZvbnQtd2VpZ2h0OmJvbGR9LmxpdHtjb2xvcjojMDQ0fS5wdW57Y29sb3I6IzQ0MH0ucGxue2NvbG9yOiMwMDB9LnRhZ3tjb2xvcjojMDA2O2ZvbnQtd2VpZ2h0OmJvbGR9LmF0bntjb2xvcjojNDA0fS5hdHZ7Y29sb3I6IzA2MH19XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGFyc29ucy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ByZXR0aWZ5LmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8qISBIYW1tZXIuSlMgLSB2Mi4wLjggLSAyMDE2LTA0LTIzXG4gKiBodHRwOi8vaGFtbWVyanMuZ2l0aHViLmlvL1xuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNiBKb3JpayBUYW5nZWxkZXI7XG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgKi9cbiFmdW5jdGlvbihhLGIsYyxkKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKGEsYixjKXtyZXR1cm4gc2V0VGltZW91dChqKGEsYyksYil9ZnVuY3Rpb24gZihhLGIsYyl7cmV0dXJuIEFycmF5LmlzQXJyYXkoYSk/KGcoYSxjW2JdLGMpLCEwKTohMX1mdW5jdGlvbiBnKGEsYixjKXt2YXIgZTtpZihhKWlmKGEuZm9yRWFjaClhLmZvckVhY2goYixjKTtlbHNlIGlmKGEubGVuZ3RoIT09ZClmb3IoZT0wO2U8YS5sZW5ndGg7KWIuY2FsbChjLGFbZV0sZSxhKSxlKys7ZWxzZSBmb3IoZSBpbiBhKWEuaGFzT3duUHJvcGVydHkoZSkmJmIuY2FsbChjLGFbZV0sZSxhKX1mdW5jdGlvbiBoKGIsYyxkKXt2YXIgZT1cIkRFUFJFQ0FURUQgTUVUSE9EOiBcIitjK1wiXFxuXCIrZCtcIiBBVCBcXG5cIjtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYz1uZXcgRXJyb3IoXCJnZXQtc3RhY2stdHJhY2VcIiksZD1jJiZjLnN0YWNrP2Muc3RhY2sucmVwbGFjZSgvXlteXFwoXSs/W1xcbiRdL2dtLFwiXCIpLnJlcGxhY2UoL15cXHMrYXRcXHMrL2dtLFwiXCIpLnJlcGxhY2UoL15PYmplY3QuPGFub255bW91cz5cXHMqXFwoL2dtLFwie2Fub255bW91c30oKUBcIik6XCJVbmtub3duIFN0YWNrIFRyYWNlXCIsZj1hLmNvbnNvbGUmJihhLmNvbnNvbGUud2Fybnx8YS5jb25zb2xlLmxvZyk7cmV0dXJuIGYmJmYuY2FsbChhLmNvbnNvbGUsZSxkKSxiLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19ZnVuY3Rpb24gaShhLGIsYyl7dmFyIGQsZT1iLnByb3RvdHlwZTtkPWEucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZSksZC5jb25zdHJ1Y3Rvcj1hLGQuX3N1cGVyPWUsYyYmbGEoZCxjKX1mdW5jdGlvbiBqKGEsYil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYixhcmd1bWVudHMpfX1mdW5jdGlvbiBrKGEsYil7cmV0dXJuIHR5cGVvZiBhPT1vYT9hLmFwcGx5KGI/YlswXXx8ZDpkLGIpOmF9ZnVuY3Rpb24gbChhLGIpe3JldHVybiBhPT09ZD9iOmF9ZnVuY3Rpb24gbShhLGIsYyl7ZyhxKGIpLGZ1bmN0aW9uKGIpe2EuYWRkRXZlbnRMaXN0ZW5lcihiLGMsITEpfSl9ZnVuY3Rpb24gbihhLGIsYyl7ZyhxKGIpLGZ1bmN0aW9uKGIpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLGMsITEpfSl9ZnVuY3Rpb24gbyhhLGIpe2Zvcig7YTspe2lmKGE9PWIpcmV0dXJuITA7YT1hLnBhcmVudE5vZGV9cmV0dXJuITF9ZnVuY3Rpb24gcChhLGIpe3JldHVybiBhLmluZGV4T2YoYik+LTF9ZnVuY3Rpb24gcShhKXtyZXR1cm4gYS50cmltKCkuc3BsaXQoL1xccysvZyl9ZnVuY3Rpb24gcihhLGIsYyl7aWYoYS5pbmRleE9mJiYhYylyZXR1cm4gYS5pbmRleE9mKGIpO2Zvcih2YXIgZD0wO2Q8YS5sZW5ndGg7KXtpZihjJiZhW2RdW2NdPT1ifHwhYyYmYVtkXT09PWIpcmV0dXJuIGQ7ZCsrfXJldHVybi0xfWZ1bmN0aW9uIHMoYSl7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGEsMCl9ZnVuY3Rpb24gdChhLGIsYyl7Zm9yKHZhciBkPVtdLGU9W10sZj0wO2Y8YS5sZW5ndGg7KXt2YXIgZz1iP2FbZl1bYl06YVtmXTtyKGUsZyk8MCYmZC5wdXNoKGFbZl0pLGVbZl09ZyxmKyt9cmV0dXJuIGMmJihkPWI/ZC5zb3J0KGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGFbYl0+Y1tiXX0pOmQuc29ydCgpKSxkfWZ1bmN0aW9uIHUoYSxiKXtmb3IodmFyIGMsZSxmPWJbMF0udG9VcHBlckNhc2UoKStiLnNsaWNlKDEpLGc9MDtnPG1hLmxlbmd0aDspe2lmKGM9bWFbZ10sZT1jP2MrZjpiLGUgaW4gYSlyZXR1cm4gZTtnKyt9cmV0dXJuIGR9ZnVuY3Rpb24gdigpe3JldHVybiB1YSsrfWZ1bmN0aW9uIHcoYil7dmFyIGM9Yi5vd25lckRvY3VtZW50fHxiO3JldHVybiBjLmRlZmF1bHRWaWV3fHxjLnBhcmVudFdpbmRvd3x8YX1mdW5jdGlvbiB4KGEsYil7dmFyIGM9dGhpczt0aGlzLm1hbmFnZXI9YSx0aGlzLmNhbGxiYWNrPWIsdGhpcy5lbGVtZW50PWEuZWxlbWVudCx0aGlzLnRhcmdldD1hLm9wdGlvbnMuaW5wdXRUYXJnZXQsdGhpcy5kb21IYW5kbGVyPWZ1bmN0aW9uKGIpe2soYS5vcHRpb25zLmVuYWJsZSxbYV0pJiZjLmhhbmRsZXIoYil9LHRoaXMuaW5pdCgpfWZ1bmN0aW9uIHkoYSl7dmFyIGIsYz1hLm9wdGlvbnMuaW5wdXRDbGFzcztyZXR1cm4gbmV3KGI9Yz9jOnhhP006eWE/UDp3YT9SOkwpKGEseil9ZnVuY3Rpb24geihhLGIsYyl7dmFyIGQ9Yy5wb2ludGVycy5sZW5ndGgsZT1jLmNoYW5nZWRQb2ludGVycy5sZW5ndGgsZj1iJkVhJiZkLWU9PT0wLGc9YiYoR2F8SGEpJiZkLWU9PT0wO2MuaXNGaXJzdD0hIWYsYy5pc0ZpbmFsPSEhZyxmJiYoYS5zZXNzaW9uPXt9KSxjLmV2ZW50VHlwZT1iLEEoYSxjKSxhLmVtaXQoXCJoYW1tZXIuaW5wdXRcIixjKSxhLnJlY29nbml6ZShjKSxhLnNlc3Npb24ucHJldklucHV0PWN9ZnVuY3Rpb24gQShhLGIpe3ZhciBjPWEuc2Vzc2lvbixkPWIucG9pbnRlcnMsZT1kLmxlbmd0aDtjLmZpcnN0SW5wdXR8fChjLmZpcnN0SW5wdXQ9RChiKSksZT4xJiYhYy5maXJzdE11bHRpcGxlP2MuZmlyc3RNdWx0aXBsZT1EKGIpOjE9PT1lJiYoYy5maXJzdE11bHRpcGxlPSExKTt2YXIgZj1jLmZpcnN0SW5wdXQsZz1jLmZpcnN0TXVsdGlwbGUsaD1nP2cuY2VudGVyOmYuY2VudGVyLGk9Yi5jZW50ZXI9RShkKTtiLnRpbWVTdGFtcD1yYSgpLGIuZGVsdGFUaW1lPWIudGltZVN0YW1wLWYudGltZVN0YW1wLGIuYW5nbGU9SShoLGkpLGIuZGlzdGFuY2U9SChoLGkpLEIoYyxiKSxiLm9mZnNldERpcmVjdGlvbj1HKGIuZGVsdGFYLGIuZGVsdGFZKTt2YXIgaj1GKGIuZGVsdGFUaW1lLGIuZGVsdGFYLGIuZGVsdGFZKTtiLm92ZXJhbGxWZWxvY2l0eVg9ai54LGIub3ZlcmFsbFZlbG9jaXR5WT1qLnksYi5vdmVyYWxsVmVsb2NpdHk9cWEoai54KT5xYShqLnkpP2oueDpqLnksYi5zY2FsZT1nP0soZy5wb2ludGVycyxkKToxLGIucm90YXRpb249Zz9KKGcucG9pbnRlcnMsZCk6MCxiLm1heFBvaW50ZXJzPWMucHJldklucHV0P2IucG9pbnRlcnMubGVuZ3RoPmMucHJldklucHV0Lm1heFBvaW50ZXJzP2IucG9pbnRlcnMubGVuZ3RoOmMucHJldklucHV0Lm1heFBvaW50ZXJzOmIucG9pbnRlcnMubGVuZ3RoLEMoYyxiKTt2YXIgaz1hLmVsZW1lbnQ7byhiLnNyY0V2ZW50LnRhcmdldCxrKSYmKGs9Yi5zcmNFdmVudC50YXJnZXQpLGIudGFyZ2V0PWt9ZnVuY3Rpb24gQihhLGIpe3ZhciBjPWIuY2VudGVyLGQ9YS5vZmZzZXREZWx0YXx8e30sZT1hLnByZXZEZWx0YXx8e30sZj1hLnByZXZJbnB1dHx8e307Yi5ldmVudFR5cGUhPT1FYSYmZi5ldmVudFR5cGUhPT1HYXx8KGU9YS5wcmV2RGVsdGE9e3g6Zi5kZWx0YVh8fDAseTpmLmRlbHRhWXx8MH0sZD1hLm9mZnNldERlbHRhPXt4OmMueCx5OmMueX0pLGIuZGVsdGFYPWUueCsoYy54LWQueCksYi5kZWx0YVk9ZS55KyhjLnktZC55KX1mdW5jdGlvbiBDKGEsYil7dmFyIGMsZSxmLGcsaD1hLmxhc3RJbnRlcnZhbHx8YixpPWIudGltZVN0YW1wLWgudGltZVN0YW1wO2lmKGIuZXZlbnRUeXBlIT1IYSYmKGk+RGF8fGgudmVsb2NpdHk9PT1kKSl7dmFyIGo9Yi5kZWx0YVgtaC5kZWx0YVgsaz1iLmRlbHRhWS1oLmRlbHRhWSxsPUYoaSxqLGspO2U9bC54LGY9bC55LGM9cWEobC54KT5xYShsLnkpP2wueDpsLnksZz1HKGosayksYS5sYXN0SW50ZXJ2YWw9Yn1lbHNlIGM9aC52ZWxvY2l0eSxlPWgudmVsb2NpdHlYLGY9aC52ZWxvY2l0eVksZz1oLmRpcmVjdGlvbjtiLnZlbG9jaXR5PWMsYi52ZWxvY2l0eVg9ZSxiLnZlbG9jaXR5WT1mLGIuZGlyZWN0aW9uPWd9ZnVuY3Rpb24gRChhKXtmb3IodmFyIGI9W10sYz0wO2M8YS5wb2ludGVycy5sZW5ndGg7KWJbY109e2NsaWVudFg6cGEoYS5wb2ludGVyc1tjXS5jbGllbnRYKSxjbGllbnRZOnBhKGEucG9pbnRlcnNbY10uY2xpZW50WSl9LGMrKztyZXR1cm57dGltZVN0YW1wOnJhKCkscG9pbnRlcnM6YixjZW50ZXI6RShiKSxkZWx0YVg6YS5kZWx0YVgsZGVsdGFZOmEuZGVsdGFZfX1mdW5jdGlvbiBFKGEpe3ZhciBiPWEubGVuZ3RoO2lmKDE9PT1iKXJldHVybnt4OnBhKGFbMF0uY2xpZW50WCkseTpwYShhWzBdLmNsaWVudFkpfTtmb3IodmFyIGM9MCxkPTAsZT0wO2I+ZTspYys9YVtlXS5jbGllbnRYLGQrPWFbZV0uY2xpZW50WSxlKys7cmV0dXJue3g6cGEoYy9iKSx5OnBhKGQvYil9fWZ1bmN0aW9uIEYoYSxiLGMpe3JldHVybnt4OmIvYXx8MCx5OmMvYXx8MH19ZnVuY3Rpb24gRyhhLGIpe3JldHVybiBhPT09Yj9JYTpxYShhKT49cWEoYik/MD5hP0phOkthOjA+Yj9MYTpNYX1mdW5jdGlvbiBIKGEsYixjKXtjfHwoYz1RYSk7dmFyIGQ9YltjWzBdXS1hW2NbMF1dLGU9YltjWzFdXS1hW2NbMV1dO3JldHVybiBNYXRoLnNxcnQoZCpkK2UqZSl9ZnVuY3Rpb24gSShhLGIsYyl7Y3x8KGM9UWEpO3ZhciBkPWJbY1swXV0tYVtjWzBdXSxlPWJbY1sxXV0tYVtjWzFdXTtyZXR1cm4gMTgwKk1hdGguYXRhbjIoZSxkKS9NYXRoLlBJfWZ1bmN0aW9uIEooYSxiKXtyZXR1cm4gSShiWzFdLGJbMF0sUmEpK0koYVsxXSxhWzBdLFJhKX1mdW5jdGlvbiBLKGEsYil7cmV0dXJuIEgoYlswXSxiWzFdLFJhKS9IKGFbMF0sYVsxXSxSYSl9ZnVuY3Rpb24gTCgpe3RoaXMuZXZFbD1UYSx0aGlzLmV2V2luPVVhLHRoaXMucHJlc3NlZD0hMSx4LmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBNKCl7dGhpcy5ldkVsPVhhLHRoaXMuZXZXaW49WWEseC5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5zdG9yZT10aGlzLm1hbmFnZXIuc2Vzc2lvbi5wb2ludGVyRXZlbnRzPVtdfWZ1bmN0aW9uIE4oKXt0aGlzLmV2VGFyZ2V0PSRhLHRoaXMuZXZXaW49X2EsdGhpcy5zdGFydGVkPSExLHguYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIE8oYSxiKXt2YXIgYz1zKGEudG91Y2hlcyksZD1zKGEuY2hhbmdlZFRvdWNoZXMpO3JldHVybiBiJihHYXxIYSkmJihjPXQoYy5jb25jYXQoZCksXCJpZGVudGlmaWVyXCIsITApKSxbYyxkXX1mdW5jdGlvbiBQKCl7dGhpcy5ldlRhcmdldD1iYix0aGlzLnRhcmdldElkcz17fSx4LmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBRKGEsYil7dmFyIGM9cyhhLnRvdWNoZXMpLGQ9dGhpcy50YXJnZXRJZHM7aWYoYiYoRWF8RmEpJiYxPT09Yy5sZW5ndGgpcmV0dXJuIGRbY1swXS5pZGVudGlmaWVyXT0hMCxbYyxjXTt2YXIgZSxmLGc9cyhhLmNoYW5nZWRUb3VjaGVzKSxoPVtdLGk9dGhpcy50YXJnZXQ7aWYoZj1jLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gbyhhLnRhcmdldCxpKX0pLGI9PT1FYSlmb3IoZT0wO2U8Zi5sZW5ndGg7KWRbZltlXS5pZGVudGlmaWVyXT0hMCxlKys7Zm9yKGU9MDtlPGcubGVuZ3RoOylkW2dbZV0uaWRlbnRpZmllcl0mJmgucHVzaChnW2VdKSxiJihHYXxIYSkmJmRlbGV0ZSBkW2dbZV0uaWRlbnRpZmllcl0sZSsrO3JldHVybiBoLmxlbmd0aD9bdChmLmNvbmNhdChoKSxcImlkZW50aWZpZXJcIiwhMCksaF06dm9pZCAwfWZ1bmN0aW9uIFIoKXt4LmFwcGx5KHRoaXMsYXJndW1lbnRzKTt2YXIgYT1qKHRoaXMuaGFuZGxlcix0aGlzKTt0aGlzLnRvdWNoPW5ldyBQKHRoaXMubWFuYWdlcixhKSx0aGlzLm1vdXNlPW5ldyBMKHRoaXMubWFuYWdlcixhKSx0aGlzLnByaW1hcnlUb3VjaD1udWxsLHRoaXMubGFzdFRvdWNoZXM9W119ZnVuY3Rpb24gUyhhLGIpe2EmRWE/KHRoaXMucHJpbWFyeVRvdWNoPWIuY2hhbmdlZFBvaW50ZXJzWzBdLmlkZW50aWZpZXIsVC5jYWxsKHRoaXMsYikpOmEmKEdhfEhhKSYmVC5jYWxsKHRoaXMsYil9ZnVuY3Rpb24gVChhKXt2YXIgYj1hLmNoYW5nZWRQb2ludGVyc1swXTtpZihiLmlkZW50aWZpZXI9PT10aGlzLnByaW1hcnlUb3VjaCl7dmFyIGM9e3g6Yi5jbGllbnRYLHk6Yi5jbGllbnRZfTt0aGlzLmxhc3RUb3VjaGVzLnB1c2goYyk7dmFyIGQ9dGhpcy5sYXN0VG91Y2hlcyxlPWZ1bmN0aW9uKCl7dmFyIGE9ZC5pbmRleE9mKGMpO2E+LTEmJmQuc3BsaWNlKGEsMSl9O3NldFRpbWVvdXQoZSxjYil9fWZ1bmN0aW9uIFUoYSl7Zm9yKHZhciBiPWEuc3JjRXZlbnQuY2xpZW50WCxjPWEuc3JjRXZlbnQuY2xpZW50WSxkPTA7ZDx0aGlzLmxhc3RUb3VjaGVzLmxlbmd0aDtkKyspe3ZhciBlPXRoaXMubGFzdFRvdWNoZXNbZF0sZj1NYXRoLmFicyhiLWUueCksZz1NYXRoLmFicyhjLWUueSk7aWYoZGI+PWYmJmRiPj1nKXJldHVybiEwfXJldHVybiExfWZ1bmN0aW9uIFYoYSxiKXt0aGlzLm1hbmFnZXI9YSx0aGlzLnNldChiKX1mdW5jdGlvbiBXKGEpe2lmKHAoYSxqYikpcmV0dXJuIGpiO3ZhciBiPXAoYSxrYiksYz1wKGEsbGIpO3JldHVybiBiJiZjP2piOmJ8fGM/Yj9rYjpsYjpwKGEsaWIpP2liOmhifWZ1bmN0aW9uIFgoKXtpZighZmIpcmV0dXJuITE7dmFyIGI9e30sYz1hLkNTUyYmYS5DU1Muc3VwcG9ydHM7cmV0dXJuW1wiYXV0b1wiLFwibWFuaXB1bGF0aW9uXCIsXCJwYW4teVwiLFwicGFuLXhcIixcInBhbi14IHBhbi15XCIsXCJub25lXCJdLmZvckVhY2goZnVuY3Rpb24oZCl7YltkXT1jP2EuQ1NTLnN1cHBvcnRzKFwidG91Y2gtYWN0aW9uXCIsZCk6ITB9KSxifWZ1bmN0aW9uIFkoYSl7dGhpcy5vcHRpb25zPWxhKHt9LHRoaXMuZGVmYXVsdHMsYXx8e30pLHRoaXMuaWQ9digpLHRoaXMubWFuYWdlcj1udWxsLHRoaXMub3B0aW9ucy5lbmFibGU9bCh0aGlzLm9wdGlvbnMuZW5hYmxlLCEwKSx0aGlzLnN0YXRlPW5iLHRoaXMuc2ltdWx0YW5lb3VzPXt9LHRoaXMucmVxdWlyZUZhaWw9W119ZnVuY3Rpb24gWihhKXtyZXR1cm4gYSZzYj9cImNhbmNlbFwiOmEmcWI/XCJlbmRcIjphJnBiP1wibW92ZVwiOmEmb2I/XCJzdGFydFwiOlwiXCJ9ZnVuY3Rpb24gJChhKXtyZXR1cm4gYT09TWE/XCJkb3duXCI6YT09TGE/XCJ1cFwiOmE9PUphP1wibGVmdFwiOmE9PUthP1wicmlnaHRcIjpcIlwifWZ1bmN0aW9uIF8oYSxiKXt2YXIgYz1iLm1hbmFnZXI7cmV0dXJuIGM/Yy5nZXQoYSk6YX1mdW5jdGlvbiBhYSgpe1kuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGJhKCl7YWEuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMucFg9bnVsbCx0aGlzLnBZPW51bGx9ZnVuY3Rpb24gY2EoKXthYS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gZGEoKXtZLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLl90aW1lcj1udWxsLHRoaXMuX2lucHV0PW51bGx9ZnVuY3Rpb24gZWEoKXthYS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gZmEoKXthYS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gZ2EoKXtZLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLnBUaW1lPSExLHRoaXMucENlbnRlcj0hMSx0aGlzLl90aW1lcj1udWxsLHRoaXMuX2lucHV0PW51bGwsdGhpcy5jb3VudD0wfWZ1bmN0aW9uIGhhKGEsYil7cmV0dXJuIGI9Ynx8e30sYi5yZWNvZ25pemVycz1sKGIucmVjb2duaXplcnMsaGEuZGVmYXVsdHMucHJlc2V0KSxuZXcgaWEoYSxiKX1mdW5jdGlvbiBpYShhLGIpe3RoaXMub3B0aW9ucz1sYSh7fSxoYS5kZWZhdWx0cyxifHx7fSksdGhpcy5vcHRpb25zLmlucHV0VGFyZ2V0PXRoaXMub3B0aW9ucy5pbnB1dFRhcmdldHx8YSx0aGlzLmhhbmRsZXJzPXt9LHRoaXMuc2Vzc2lvbj17fSx0aGlzLnJlY29nbml6ZXJzPVtdLHRoaXMub2xkQ3NzUHJvcHM9e30sdGhpcy5lbGVtZW50PWEsdGhpcy5pbnB1dD15KHRoaXMpLHRoaXMudG91Y2hBY3Rpb249bmV3IFYodGhpcyx0aGlzLm9wdGlvbnMudG91Y2hBY3Rpb24pLGphKHRoaXMsITApLGcodGhpcy5vcHRpb25zLnJlY29nbml6ZXJzLGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYWRkKG5ldyBhWzBdKGFbMV0pKTthWzJdJiZiLnJlY29nbml6ZVdpdGgoYVsyXSksYVszXSYmYi5yZXF1aXJlRmFpbHVyZShhWzNdKX0sdGhpcyl9ZnVuY3Rpb24gamEoYSxiKXt2YXIgYz1hLmVsZW1lbnQ7aWYoYy5zdHlsZSl7dmFyIGQ7ZyhhLm9wdGlvbnMuY3NzUHJvcHMsZnVuY3Rpb24oZSxmKXtkPXUoYy5zdHlsZSxmKSxiPyhhLm9sZENzc1Byb3BzW2RdPWMuc3R5bGVbZF0sYy5zdHlsZVtkXT1lKTpjLnN0eWxlW2RdPWEub2xkQ3NzUHJvcHNbZF18fFwiXCJ9KSxifHwoYS5vbGRDc3NQcm9wcz17fSl9fWZ1bmN0aW9uIGthKGEsYyl7dmFyIGQ9Yi5jcmVhdGVFdmVudChcIkV2ZW50XCIpO2QuaW5pdEV2ZW50KGEsITAsITApLGQuZ2VzdHVyZT1jLGMudGFyZ2V0LmRpc3BhdGNoRXZlbnQoZCl9dmFyIGxhLG1hPVtcIlwiLFwid2Via2l0XCIsXCJNb3pcIixcIk1TXCIsXCJtc1wiLFwib1wiXSxuYT1iLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksb2E9XCJmdW5jdGlvblwiLHBhPU1hdGgucm91bmQscWE9TWF0aC5hYnMscmE9RGF0ZS5ub3c7bGE9XCJmdW5jdGlvblwiIT10eXBlb2YgT2JqZWN0LmFzc2lnbj9mdW5jdGlvbihhKXtpZihhPT09ZHx8bnVsbD09PWEpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdFwiKTtmb3IodmFyIGI9T2JqZWN0KGEpLGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKXt2YXIgZT1hcmd1bWVudHNbY107aWYoZSE9PWQmJm51bGwhPT1lKWZvcih2YXIgZiBpbiBlKWUuaGFzT3duUHJvcGVydHkoZikmJihiW2ZdPWVbZl0pfXJldHVybiBifTpPYmplY3QuYXNzaWduO3ZhciBzYT1oKGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGU9T2JqZWN0LmtleXMoYiksZj0wO2Y8ZS5sZW5ndGg7KSghY3x8YyYmYVtlW2ZdXT09PWQpJiYoYVtlW2ZdXT1iW2VbZl1dKSxmKys7cmV0dXJuIGF9LFwiZXh0ZW5kXCIsXCJVc2UgYGFzc2lnbmAuXCIpLHRhPWgoZnVuY3Rpb24oYSxiKXtyZXR1cm4gc2EoYSxiLCEwKX0sXCJtZXJnZVwiLFwiVXNlIGBhc3NpZ25gLlwiKSx1YT0xLHZhPS9tb2JpbGV8dGFibGV0fGlwKGFkfGhvbmV8b2QpfGFuZHJvaWQvaSx3YT1cIm9udG91Y2hzdGFydFwiaW4gYSx4YT11KGEsXCJQb2ludGVyRXZlbnRcIikhPT1kLHlhPXdhJiZ2YS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLHphPVwidG91Y2hcIixBYT1cInBlblwiLEJhPVwibW91c2VcIixDYT1cImtpbmVjdFwiLERhPTI1LEVhPTEsRmE9MixHYT00LEhhPTgsSWE9MSxKYT0yLEthPTQsTGE9OCxNYT0xNixOYT1KYXxLYSxPYT1MYXxNYSxQYT1OYXxPYSxRYT1bXCJ4XCIsXCJ5XCJdLFJhPVtcImNsaWVudFhcIixcImNsaWVudFlcIl07eC5wcm90b3R5cGU9e2hhbmRsZXI6ZnVuY3Rpb24oKXt9LGluaXQ6ZnVuY3Rpb24oKXt0aGlzLmV2RWwmJm0odGhpcy5lbGVtZW50LHRoaXMuZXZFbCx0aGlzLmRvbUhhbmRsZXIpLHRoaXMuZXZUYXJnZXQmJm0odGhpcy50YXJnZXQsdGhpcy5ldlRhcmdldCx0aGlzLmRvbUhhbmRsZXIpLHRoaXMuZXZXaW4mJm0odyh0aGlzLmVsZW1lbnQpLHRoaXMuZXZXaW4sdGhpcy5kb21IYW5kbGVyKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuZXZFbCYmbih0aGlzLmVsZW1lbnQsdGhpcy5ldkVsLHRoaXMuZG9tSGFuZGxlciksdGhpcy5ldlRhcmdldCYmbih0aGlzLnRhcmdldCx0aGlzLmV2VGFyZ2V0LHRoaXMuZG9tSGFuZGxlciksdGhpcy5ldldpbiYmbih3KHRoaXMuZWxlbWVudCksdGhpcy5ldldpbix0aGlzLmRvbUhhbmRsZXIpfX07dmFyIFNhPXttb3VzZWRvd246RWEsbW91c2Vtb3ZlOkZhLG1vdXNldXA6R2F9LFRhPVwibW91c2Vkb3duXCIsVWE9XCJtb3VzZW1vdmUgbW91c2V1cFwiO2koTCx4LHtoYW5kbGVyOmZ1bmN0aW9uKGEpe3ZhciBiPVNhW2EudHlwZV07YiZFYSYmMD09PWEuYnV0dG9uJiYodGhpcy5wcmVzc2VkPSEwKSxiJkZhJiYxIT09YS53aGljaCYmKGI9R2EpLHRoaXMucHJlc3NlZCYmKGImR2EmJih0aGlzLnByZXNzZWQ9ITEpLHRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLGIse3BvaW50ZXJzOlthXSxjaGFuZ2VkUG9pbnRlcnM6W2FdLHBvaW50ZXJUeXBlOkJhLHNyY0V2ZW50OmF9KSl9fSk7dmFyIFZhPXtwb2ludGVyZG93bjpFYSxwb2ludGVybW92ZTpGYSxwb2ludGVydXA6R2EscG9pbnRlcmNhbmNlbDpIYSxwb2ludGVyb3V0OkhhfSxXYT17Mjp6YSwzOkFhLDQ6QmEsNTpDYX0sWGE9XCJwb2ludGVyZG93blwiLFlhPVwicG9pbnRlcm1vdmUgcG9pbnRlcnVwIHBvaW50ZXJjYW5jZWxcIjthLk1TUG9pbnRlckV2ZW50JiYhYS5Qb2ludGVyRXZlbnQmJihYYT1cIk1TUG9pbnRlckRvd25cIixZYT1cIk1TUG9pbnRlck1vdmUgTVNQb2ludGVyVXAgTVNQb2ludGVyQ2FuY2VsXCIpLGkoTSx4LHtoYW5kbGVyOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuc3RvcmUsYz0hMSxkPWEudHlwZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoXCJtc1wiLFwiXCIpLGU9VmFbZF0sZj1XYVthLnBvaW50ZXJUeXBlXXx8YS5wb2ludGVyVHlwZSxnPWY9PXphLGg9cihiLGEucG9pbnRlcklkLFwicG9pbnRlcklkXCIpO2UmRWEmJigwPT09YS5idXR0b258fGcpPzA+aCYmKGIucHVzaChhKSxoPWIubGVuZ3RoLTEpOmUmKEdhfEhhKSYmKGM9ITApLDA+aHx8KGJbaF09YSx0aGlzLmNhbGxiYWNrKHRoaXMubWFuYWdlcixlLHtwb2ludGVyczpiLGNoYW5nZWRQb2ludGVyczpbYV0scG9pbnRlclR5cGU6ZixzcmNFdmVudDphfSksYyYmYi5zcGxpY2UoaCwxKSl9fSk7dmFyIFphPXt0b3VjaHN0YXJ0OkVhLHRvdWNobW92ZTpGYSx0b3VjaGVuZDpHYSx0b3VjaGNhbmNlbDpIYX0sJGE9XCJ0b3VjaHN0YXJ0XCIsX2E9XCJ0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCB0b3VjaGNhbmNlbFwiO2koTix4LHtoYW5kbGVyOmZ1bmN0aW9uKGEpe3ZhciBiPVphW2EudHlwZV07aWYoYj09PUVhJiYodGhpcy5zdGFydGVkPSEwKSx0aGlzLnN0YXJ0ZWQpe3ZhciBjPU8uY2FsbCh0aGlzLGEsYik7YiYoR2F8SGEpJiZjWzBdLmxlbmd0aC1jWzFdLmxlbmd0aD09PTAmJih0aGlzLnN0YXJ0ZWQ9ITEpLHRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLGIse3BvaW50ZXJzOmNbMF0sY2hhbmdlZFBvaW50ZXJzOmNbMV0scG9pbnRlclR5cGU6emEsc3JjRXZlbnQ6YX0pfX19KTt2YXIgYWI9e3RvdWNoc3RhcnQ6RWEsdG91Y2htb3ZlOkZhLHRvdWNoZW5kOkdhLHRvdWNoY2FuY2VsOkhhfSxiYj1cInRvdWNoc3RhcnQgdG91Y2htb3ZlIHRvdWNoZW5kIHRvdWNoY2FuY2VsXCI7aShQLHgse2hhbmRsZXI6ZnVuY3Rpb24oYSl7dmFyIGI9YWJbYS50eXBlXSxjPVEuY2FsbCh0aGlzLGEsYik7YyYmdGhpcy5jYWxsYmFjayh0aGlzLm1hbmFnZXIsYix7cG9pbnRlcnM6Y1swXSxjaGFuZ2VkUG9pbnRlcnM6Y1sxXSxwb2ludGVyVHlwZTp6YSxzcmNFdmVudDphfSl9fSk7dmFyIGNiPTI1MDAsZGI9MjU7aShSLHgse2hhbmRsZXI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWMucG9pbnRlclR5cGU9PXphLGU9Yy5wb2ludGVyVHlwZT09QmE7aWYoIShlJiZjLnNvdXJjZUNhcGFiaWxpdGllcyYmYy5zb3VyY2VDYXBhYmlsaXRpZXMuZmlyZXNUb3VjaEV2ZW50cykpe2lmKGQpUy5jYWxsKHRoaXMsYixjKTtlbHNlIGlmKGUmJlUuY2FsbCh0aGlzLGMpKXJldHVybjt0aGlzLmNhbGxiYWNrKGEsYixjKX19LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLnRvdWNoLmRlc3Ryb3koKSx0aGlzLm1vdXNlLmRlc3Ryb3koKX19KTt2YXIgZWI9dShuYS5zdHlsZSxcInRvdWNoQWN0aW9uXCIpLGZiPWViIT09ZCxnYj1cImNvbXB1dGVcIixoYj1cImF1dG9cIixpYj1cIm1hbmlwdWxhdGlvblwiLGpiPVwibm9uZVwiLGtiPVwicGFuLXhcIixsYj1cInBhbi15XCIsbWI9WCgpO1YucHJvdG90eXBlPXtzZXQ6ZnVuY3Rpb24oYSl7YT09Z2ImJihhPXRoaXMuY29tcHV0ZSgpKSxmYiYmdGhpcy5tYW5hZ2VyLmVsZW1lbnQuc3R5bGUmJm1iW2FdJiYodGhpcy5tYW5hZ2VyLmVsZW1lbnQuc3R5bGVbZWJdPWEpLHRoaXMuYWN0aW9ucz1hLnRvTG93ZXJDYXNlKCkudHJpbSgpfSx1cGRhdGU6ZnVuY3Rpb24oKXt0aGlzLnNldCh0aGlzLm1hbmFnZXIub3B0aW9ucy50b3VjaEFjdGlvbil9LGNvbXB1dGU6ZnVuY3Rpb24oKXt2YXIgYT1bXTtyZXR1cm4gZyh0aGlzLm1hbmFnZXIucmVjb2duaXplcnMsZnVuY3Rpb24oYil7ayhiLm9wdGlvbnMuZW5hYmxlLFtiXSkmJihhPWEuY29uY2F0KGIuZ2V0VG91Y2hBY3Rpb24oKSkpfSksVyhhLmpvaW4oXCIgXCIpKX0scHJldmVudERlZmF1bHRzOmZ1bmN0aW9uKGEpe3ZhciBiPWEuc3JjRXZlbnQsYz1hLm9mZnNldERpcmVjdGlvbjtpZih0aGlzLm1hbmFnZXIuc2Vzc2lvbi5wcmV2ZW50ZWQpcmV0dXJuIHZvaWQgYi5wcmV2ZW50RGVmYXVsdCgpO3ZhciBkPXRoaXMuYWN0aW9ucyxlPXAoZCxqYikmJiFtYltqYl0sZj1wKGQsbGIpJiYhbWJbbGJdLGc9cChkLGtiKSYmIW1iW2tiXTtpZihlKXt2YXIgaD0xPT09YS5wb2ludGVycy5sZW5ndGgsaT1hLmRpc3RhbmNlPDIsaj1hLmRlbHRhVGltZTwyNTA7aWYoaCYmaSYmailyZXR1cm59cmV0dXJuIGcmJmY/dm9pZCAwOmV8fGYmJmMmTmF8fGcmJmMmT2E/dGhpcy5wcmV2ZW50U3JjKGIpOnZvaWQgMH0scHJldmVudFNyYzpmdW5jdGlvbihhKXt0aGlzLm1hbmFnZXIuc2Vzc2lvbi5wcmV2ZW50ZWQ9ITAsYS5wcmV2ZW50RGVmYXVsdCgpfX07dmFyIG5iPTEsb2I9MixwYj00LHFiPTgscmI9cWIsc2I9MTYsdGI9MzI7WS5wcm90b3R5cGU9e2RlZmF1bHRzOnt9LHNldDpmdW5jdGlvbihhKXtyZXR1cm4gbGEodGhpcy5vcHRpb25zLGEpLHRoaXMubWFuYWdlciYmdGhpcy5tYW5hZ2VyLnRvdWNoQWN0aW9uLnVwZGF0ZSgpLHRoaXN9LHJlY29nbml6ZVdpdGg6ZnVuY3Rpb24oYSl7aWYoZihhLFwicmVjb2duaXplV2l0aFwiLHRoaXMpKXJldHVybiB0aGlzO3ZhciBiPXRoaXMuc2ltdWx0YW5lb3VzO3JldHVybiBhPV8oYSx0aGlzKSxiW2EuaWRdfHwoYlthLmlkXT1hLGEucmVjb2duaXplV2l0aCh0aGlzKSksdGhpc30sZHJvcFJlY29nbml6ZVdpdGg6ZnVuY3Rpb24oYSl7cmV0dXJuIGYoYSxcImRyb3BSZWNvZ25pemVXaXRoXCIsdGhpcyk/dGhpczooYT1fKGEsdGhpcyksZGVsZXRlIHRoaXMuc2ltdWx0YW5lb3VzW2EuaWRdLHRoaXMpfSxyZXF1aXJlRmFpbHVyZTpmdW5jdGlvbihhKXtpZihmKGEsXCJyZXF1aXJlRmFpbHVyZVwiLHRoaXMpKXJldHVybiB0aGlzO3ZhciBiPXRoaXMucmVxdWlyZUZhaWw7cmV0dXJuIGE9XyhhLHRoaXMpLC0xPT09cihiLGEpJiYoYi5wdXNoKGEpLGEucmVxdWlyZUZhaWx1cmUodGhpcykpLHRoaXN9LGRyb3BSZXF1aXJlRmFpbHVyZTpmdW5jdGlvbihhKXtpZihmKGEsXCJkcm9wUmVxdWlyZUZhaWx1cmVcIix0aGlzKSlyZXR1cm4gdGhpczthPV8oYSx0aGlzKTt2YXIgYj1yKHRoaXMucmVxdWlyZUZhaWwsYSk7cmV0dXJuIGI+LTEmJnRoaXMucmVxdWlyZUZhaWwuc3BsaWNlKGIsMSksdGhpc30saGFzUmVxdWlyZUZhaWx1cmVzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucmVxdWlyZUZhaWwubGVuZ3RoPjB9LGNhblJlY29nbml6ZVdpdGg6ZnVuY3Rpb24oYSl7cmV0dXJuISF0aGlzLnNpbXVsdGFuZW91c1thLmlkXX0sZW1pdDpmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGIpe2MubWFuYWdlci5lbWl0KGIsYSl9dmFyIGM9dGhpcyxkPXRoaXMuc3RhdGU7cWI+ZCYmYihjLm9wdGlvbnMuZXZlbnQrWihkKSksYihjLm9wdGlvbnMuZXZlbnQpLGEuYWRkaXRpb25hbEV2ZW50JiZiKGEuYWRkaXRpb25hbEV2ZW50KSxkPj1xYiYmYihjLm9wdGlvbnMuZXZlbnQrWihkKSl9LHRyeUVtaXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuY2FuRW1pdCgpP3RoaXMuZW1pdChhKTp2b2lkKHRoaXMuc3RhdGU9dGIpfSxjYW5FbWl0OmZ1bmN0aW9uKCl7Zm9yKHZhciBhPTA7YTx0aGlzLnJlcXVpcmVGYWlsLmxlbmd0aDspe2lmKCEodGhpcy5yZXF1aXJlRmFpbFthXS5zdGF0ZSYodGJ8bmIpKSlyZXR1cm4hMTthKyt9cmV0dXJuITB9LHJlY29nbml6ZTpmdW5jdGlvbihhKXt2YXIgYj1sYSh7fSxhKTtyZXR1cm4gayh0aGlzLm9wdGlvbnMuZW5hYmxlLFt0aGlzLGJdKT8odGhpcy5zdGF0ZSYocmJ8c2J8dGIpJiYodGhpcy5zdGF0ZT1uYiksdGhpcy5zdGF0ZT10aGlzLnByb2Nlc3MoYiksdm9pZCh0aGlzLnN0YXRlJihvYnxwYnxxYnxzYikmJnRoaXMudHJ5RW1pdChiKSkpOih0aGlzLnJlc2V0KCksdm9pZCh0aGlzLnN0YXRlPXRiKSl9LHByb2Nlc3M6ZnVuY3Rpb24oYSl7fSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe30scmVzZXQ6ZnVuY3Rpb24oKXt9fSxpKGFhLFkse2RlZmF1bHRzOntwb2ludGVyczoxfSxhdHRyVGVzdDpmdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wdGlvbnMucG9pbnRlcnM7cmV0dXJuIDA9PT1ifHxhLnBvaW50ZXJzLmxlbmd0aD09PWJ9LHByb2Nlc3M6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5zdGF0ZSxjPWEuZXZlbnRUeXBlLGQ9YiYob2J8cGIpLGU9dGhpcy5hdHRyVGVzdChhKTtyZXR1cm4gZCYmKGMmSGF8fCFlKT9ifHNiOmR8fGU/YyZHYT9ifHFiOmImb2I/YnxwYjpvYjp0Yn19KSxpKGJhLGFhLHtkZWZhdWx0czp7ZXZlbnQ6XCJwYW5cIix0aHJlc2hvbGQ6MTAscG9pbnRlcnM6MSxkaXJlY3Rpb246UGF9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcHRpb25zLmRpcmVjdGlvbixiPVtdO3JldHVybiBhJk5hJiZiLnB1c2gobGIpLGEmT2EmJmIucHVzaChrYiksYn0sZGlyZWN0aW9uVGVzdDpmdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wdGlvbnMsYz0hMCxkPWEuZGlzdGFuY2UsZT1hLmRpcmVjdGlvbixmPWEuZGVsdGFYLGc9YS5kZWx0YVk7cmV0dXJuIGUmYi5kaXJlY3Rpb258fChiLmRpcmVjdGlvbiZOYT8oZT0wPT09Zj9JYTowPmY/SmE6S2EsYz1mIT10aGlzLnBYLGQ9TWF0aC5hYnMoYS5kZWx0YVgpKTooZT0wPT09Zz9JYTowPmc/TGE6TWEsYz1nIT10aGlzLnBZLGQ9TWF0aC5hYnMoYS5kZWx0YVkpKSksYS5kaXJlY3Rpb249ZSxjJiZkPmIudGhyZXNob2xkJiZlJmIuZGlyZWN0aW9ufSxhdHRyVGVzdDpmdW5jdGlvbihhKXtyZXR1cm4gYWEucHJvdG90eXBlLmF0dHJUZXN0LmNhbGwodGhpcyxhKSYmKHRoaXMuc3RhdGUmb2J8fCEodGhpcy5zdGF0ZSZvYikmJnRoaXMuZGlyZWN0aW9uVGVzdChhKSl9LGVtaXQ6ZnVuY3Rpb24oYSl7dGhpcy5wWD1hLmRlbHRhWCx0aGlzLnBZPWEuZGVsdGFZO3ZhciBiPSQoYS5kaXJlY3Rpb24pO2ImJihhLmFkZGl0aW9uYWxFdmVudD10aGlzLm9wdGlvbnMuZXZlbnQrYiksdGhpcy5fc3VwZXIuZW1pdC5jYWxsKHRoaXMsYSl9fSksaShjYSxhYSx7ZGVmYXVsdHM6e2V2ZW50OlwicGluY2hcIix0aHJlc2hvbGQ6MCxwb2ludGVyczoyfSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybltqYl19LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9zdXBlci5hdHRyVGVzdC5jYWxsKHRoaXMsYSkmJihNYXRoLmFicyhhLnNjYWxlLTEpPnRoaXMub3B0aW9ucy50aHJlc2hvbGR8fHRoaXMuc3RhdGUmb2IpfSxlbWl0OmZ1bmN0aW9uKGEpe2lmKDEhPT1hLnNjYWxlKXt2YXIgYj1hLnNjYWxlPDE/XCJpblwiOlwib3V0XCI7YS5hZGRpdGlvbmFsRXZlbnQ9dGhpcy5vcHRpb25zLmV2ZW50K2J9dGhpcy5fc3VwZXIuZW1pdC5jYWxsKHRoaXMsYSl9fSksaShkYSxZLHtkZWZhdWx0czp7ZXZlbnQ6XCJwcmVzc1wiLHBvaW50ZXJzOjEsdGltZToyNTEsdGhyZXNob2xkOjl9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuW2hiXX0scHJvY2VzczpmdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wdGlvbnMsYz1hLnBvaW50ZXJzLmxlbmd0aD09PWIucG9pbnRlcnMsZD1hLmRpc3RhbmNlPGIudGhyZXNob2xkLGY9YS5kZWx0YVRpbWU+Yi50aW1lO2lmKHRoaXMuX2lucHV0PWEsIWR8fCFjfHxhLmV2ZW50VHlwZSYoR2F8SGEpJiYhZil0aGlzLnJlc2V0KCk7ZWxzZSBpZihhLmV2ZW50VHlwZSZFYSl0aGlzLnJlc2V0KCksdGhpcy5fdGltZXI9ZShmdW5jdGlvbigpe3RoaXMuc3RhdGU9cmIsdGhpcy50cnlFbWl0KCl9LGIudGltZSx0aGlzKTtlbHNlIGlmKGEuZXZlbnRUeXBlJkdhKXJldHVybiByYjtyZXR1cm4gdGJ9LHJlc2V0OmZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKX0sZW1pdDpmdW5jdGlvbihhKXt0aGlzLnN0YXRlPT09cmImJihhJiZhLmV2ZW50VHlwZSZHYT90aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQrXCJ1cFwiLGEpOih0aGlzLl9pbnB1dC50aW1lU3RhbXA9cmEoKSx0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQsdGhpcy5faW5wdXQpKSl9fSksaShlYSxhYSx7ZGVmYXVsdHM6e2V2ZW50Olwicm90YXRlXCIsdGhyZXNob2xkOjAscG9pbnRlcnM6Mn0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm5bamJdfSxhdHRyVGVzdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiYoTWF0aC5hYnMoYS5yb3RhdGlvbik+dGhpcy5vcHRpb25zLnRocmVzaG9sZHx8dGhpcy5zdGF0ZSZvYil9fSksaShmYSxhYSx7ZGVmYXVsdHM6e2V2ZW50Olwic3dpcGVcIix0aHJlc2hvbGQ6MTAsdmVsb2NpdHk6LjMsZGlyZWN0aW9uOk5hfE9hLHBvaW50ZXJzOjF9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIGJhLnByb3RvdHlwZS5nZXRUb3VjaEFjdGlvbi5jYWxsKHRoaXMpfSxhdHRyVGVzdDpmdW5jdGlvbihhKXt2YXIgYixjPXRoaXMub3B0aW9ucy5kaXJlY3Rpb247cmV0dXJuIGMmKE5hfE9hKT9iPWEub3ZlcmFsbFZlbG9jaXR5OmMmTmE/Yj1hLm92ZXJhbGxWZWxvY2l0eVg6YyZPYSYmKGI9YS5vdmVyYWxsVmVsb2NpdHlZKSx0aGlzLl9zdXBlci5hdHRyVGVzdC5jYWxsKHRoaXMsYSkmJmMmYS5vZmZzZXREaXJlY3Rpb24mJmEuZGlzdGFuY2U+dGhpcy5vcHRpb25zLnRocmVzaG9sZCYmYS5tYXhQb2ludGVycz09dGhpcy5vcHRpb25zLnBvaW50ZXJzJiZxYShiKT50aGlzLm9wdGlvbnMudmVsb2NpdHkmJmEuZXZlbnRUeXBlJkdhfSxlbWl0OmZ1bmN0aW9uKGEpe3ZhciBiPSQoYS5vZmZzZXREaXJlY3Rpb24pO2ImJnRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCtiLGEpLHRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCxhKX19KSxpKGdhLFkse2RlZmF1bHRzOntldmVudDpcInRhcFwiLHBvaW50ZXJzOjEsdGFwczoxLGludGVydmFsOjMwMCx0aW1lOjI1MCx0aHJlc2hvbGQ6OSxwb3NUaHJlc2hvbGQ6MTB9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuW2liXX0scHJvY2VzczpmdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wdGlvbnMsYz1hLnBvaW50ZXJzLmxlbmd0aD09PWIucG9pbnRlcnMsZD1hLmRpc3RhbmNlPGIudGhyZXNob2xkLGY9YS5kZWx0YVRpbWU8Yi50aW1lO2lmKHRoaXMucmVzZXQoKSxhLmV2ZW50VHlwZSZFYSYmMD09PXRoaXMuY291bnQpcmV0dXJuIHRoaXMuZmFpbFRpbWVvdXQoKTtpZihkJiZmJiZjKXtpZihhLmV2ZW50VHlwZSE9R2EpcmV0dXJuIHRoaXMuZmFpbFRpbWVvdXQoKTt2YXIgZz10aGlzLnBUaW1lP2EudGltZVN0YW1wLXRoaXMucFRpbWU8Yi5pbnRlcnZhbDohMCxoPSF0aGlzLnBDZW50ZXJ8fEgodGhpcy5wQ2VudGVyLGEuY2VudGVyKTxiLnBvc1RocmVzaG9sZDt0aGlzLnBUaW1lPWEudGltZVN0YW1wLHRoaXMucENlbnRlcj1hLmNlbnRlcixoJiZnP3RoaXMuY291bnQrPTE6dGhpcy5jb3VudD0xLHRoaXMuX2lucHV0PWE7dmFyIGk9dGhpcy5jb3VudCViLnRhcHM7aWYoMD09PWkpcmV0dXJuIHRoaXMuaGFzUmVxdWlyZUZhaWx1cmVzKCk/KHRoaXMuX3RpbWVyPWUoZnVuY3Rpb24oKXt0aGlzLnN0YXRlPXJiLHRoaXMudHJ5RW1pdCgpfSxiLmludGVydmFsLHRoaXMpLG9iKTpyYn1yZXR1cm4gdGJ9LGZhaWxUaW1lb3V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3RpbWVyPWUoZnVuY3Rpb24oKXt0aGlzLnN0YXRlPXRifSx0aGlzLm9wdGlvbnMuaW50ZXJ2YWwsdGhpcyksdGJ9LHJlc2V0OmZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKX0sZW1pdDpmdW5jdGlvbigpe3RoaXMuc3RhdGU9PXJiJiYodGhpcy5faW5wdXQudGFwQ291bnQ9dGhpcy5jb3VudCx0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQsdGhpcy5faW5wdXQpKX19KSxoYS5WRVJTSU9OPVwiMi4wLjhcIixoYS5kZWZhdWx0cz17ZG9tRXZlbnRzOiExLHRvdWNoQWN0aW9uOmdiLGVuYWJsZTohMCxpbnB1dFRhcmdldDpudWxsLGlucHV0Q2xhc3M6bnVsbCxwcmVzZXQ6W1tlYSx7ZW5hYmxlOiExfV0sW2NhLHtlbmFibGU6ITF9LFtcInJvdGF0ZVwiXV0sW2ZhLHtkaXJlY3Rpb246TmF9XSxbYmEse2RpcmVjdGlvbjpOYX0sW1wic3dpcGVcIl1dLFtnYV0sW2dhLHtldmVudDpcImRvdWJsZXRhcFwiLHRhcHM6Mn0sW1widGFwXCJdXSxbZGFdXSxjc3NQcm9wczp7dXNlclNlbGVjdDpcIm5vbmVcIix0b3VjaFNlbGVjdDpcIm5vbmVcIix0b3VjaENhbGxvdXQ6XCJub25lXCIsY29udGVudFpvb21pbmc6XCJub25lXCIsdXNlckRyYWc6XCJub25lXCIsdGFwSGlnaGxpZ2h0Q29sb3I6XCJyZ2JhKDAsMCwwLDApXCJ9fTt2YXIgdWI9MSx2Yj0yO2lhLnByb3RvdHlwZT17c2V0OmZ1bmN0aW9uKGEpe3JldHVybiBsYSh0aGlzLm9wdGlvbnMsYSksYS50b3VjaEFjdGlvbiYmdGhpcy50b3VjaEFjdGlvbi51cGRhdGUoKSxhLmlucHV0VGFyZ2V0JiYodGhpcy5pbnB1dC5kZXN0cm95KCksdGhpcy5pbnB1dC50YXJnZXQ9YS5pbnB1dFRhcmdldCx0aGlzLmlucHV0LmluaXQoKSksdGhpc30sc3RvcDpmdW5jdGlvbihhKXt0aGlzLnNlc3Npb24uc3RvcHBlZD1hP3ZiOnVifSxyZWNvZ25pemU6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5zZXNzaW9uO2lmKCFiLnN0b3BwZWQpe3RoaXMudG91Y2hBY3Rpb24ucHJldmVudERlZmF1bHRzKGEpO3ZhciBjLGQ9dGhpcy5yZWNvZ25pemVycyxlPWIuY3VyUmVjb2duaXplcjsoIWV8fGUmJmUuc3RhdGUmcmIpJiYoZT1iLmN1clJlY29nbml6ZXI9bnVsbCk7Zm9yKHZhciBmPTA7ZjxkLmxlbmd0aDspYz1kW2ZdLGIuc3RvcHBlZD09PXZifHxlJiZjIT1lJiYhYy5jYW5SZWNvZ25pemVXaXRoKGUpP2MucmVzZXQoKTpjLnJlY29nbml6ZShhKSwhZSYmYy5zdGF0ZSYob2J8cGJ8cWIpJiYoZT1iLmN1clJlY29nbml6ZXI9YyksZisrfX0sZ2V0OmZ1bmN0aW9uKGEpe2lmKGEgaW5zdGFuY2VvZiBZKXJldHVybiBhO2Zvcih2YXIgYj10aGlzLnJlY29nbml6ZXJzLGM9MDtjPGIubGVuZ3RoO2MrKylpZihiW2NdLm9wdGlvbnMuZXZlbnQ9PWEpcmV0dXJuIGJbY107cmV0dXJuIG51bGx9LGFkZDpmdW5jdGlvbihhKXtpZihmKGEsXCJhZGRcIix0aGlzKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLmdldChhLm9wdGlvbnMuZXZlbnQpO3JldHVybiBiJiZ0aGlzLnJlbW92ZShiKSx0aGlzLnJlY29nbml6ZXJzLnB1c2goYSksYS5tYW5hZ2VyPXRoaXMsdGhpcy50b3VjaEFjdGlvbi51cGRhdGUoKSxhfSxyZW1vdmU6ZnVuY3Rpb24oYSl7aWYoZihhLFwicmVtb3ZlXCIsdGhpcykpcmV0dXJuIHRoaXM7aWYoYT10aGlzLmdldChhKSl7dmFyIGI9dGhpcy5yZWNvZ25pemVycyxjPXIoYixhKTstMSE9PWMmJihiLnNwbGljZShjLDEpLHRoaXMudG91Y2hBY3Rpb24udXBkYXRlKCkpfXJldHVybiB0aGlzfSxvbjpmdW5jdGlvbihhLGIpe2lmKGEhPT1kJiZiIT09ZCl7dmFyIGM9dGhpcy5oYW5kbGVycztyZXR1cm4gZyhxKGEpLGZ1bmN0aW9uKGEpe2NbYV09Y1thXXx8W10sY1thXS5wdXNoKGIpfSksdGhpc319LG9mZjpmdW5jdGlvbihhLGIpe2lmKGEhPT1kKXt2YXIgYz10aGlzLmhhbmRsZXJzO3JldHVybiBnKHEoYSksZnVuY3Rpb24oYSl7Yj9jW2FdJiZjW2FdLnNwbGljZShyKGNbYV0sYiksMSk6ZGVsZXRlIGNbYV19KSx0aGlzfX0sZW1pdDpmdW5jdGlvbihhLGIpe3RoaXMub3B0aW9ucy5kb21FdmVudHMmJmthKGEsYik7dmFyIGM9dGhpcy5oYW5kbGVyc1thXSYmdGhpcy5oYW5kbGVyc1thXS5zbGljZSgpO2lmKGMmJmMubGVuZ3RoKXtiLnR5cGU9YSxiLnByZXZlbnREZWZhdWx0PWZ1bmN0aW9uKCl7Yi5zcmNFdmVudC5wcmV2ZW50RGVmYXVsdCgpfTtmb3IodmFyIGQ9MDtkPGMubGVuZ3RoOyljW2RdKGIpLGQrK319LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQmJmphKHRoaXMsITEpLHRoaXMuaGFuZGxlcnM9e30sdGhpcy5zZXNzaW9uPXt9LHRoaXMuaW5wdXQuZGVzdHJveSgpLHRoaXMuZWxlbWVudD1udWxsfX0sbGEoaGEse0lOUFVUX1NUQVJUOkVhLElOUFVUX01PVkU6RmEsSU5QVVRfRU5EOkdhLElOUFVUX0NBTkNFTDpIYSxTVEFURV9QT1NTSUJMRTpuYixTVEFURV9CRUdBTjpvYixTVEFURV9DSEFOR0VEOnBiLFNUQVRFX0VOREVEOnFiLFNUQVRFX1JFQ09HTklaRUQ6cmIsU1RBVEVfQ0FOQ0VMTEVEOnNiLFNUQVRFX0ZBSUxFRDp0YixESVJFQ1RJT05fTk9ORTpJYSxESVJFQ1RJT05fTEVGVDpKYSxESVJFQ1RJT05fUklHSFQ6S2EsRElSRUNUSU9OX1VQOkxhLERJUkVDVElPTl9ET1dOOk1hLERJUkVDVElPTl9IT1JJWk9OVEFMOk5hLERJUkVDVElPTl9WRVJUSUNBTDpPYSxESVJFQ1RJT05fQUxMOlBhLE1hbmFnZXI6aWEsSW5wdXQ6eCxUb3VjaEFjdGlvbjpWLFRvdWNoSW5wdXQ6UCxNb3VzZUlucHV0OkwsUG9pbnRlckV2ZW50SW5wdXQ6TSxUb3VjaE1vdXNlSW5wdXQ6UixTaW5nbGVUb3VjaElucHV0Ok4sUmVjb2duaXplcjpZLEF0dHJSZWNvZ25pemVyOmFhLFRhcDpnYSxQYW46YmEsU3dpcGU6ZmEsUGluY2g6Y2EsUm90YXRlOmVhLFByZXNzOmRhLG9uOm0sb2ZmOm4sZWFjaDpnLG1lcmdlOnRhLGV4dGVuZDpzYSxhc3NpZ246bGEsaW5oZXJpdDppLGJpbmRGbjpqLHByZWZpeGVkOnV9KTt2YXIgd2I9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGE/YTpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnt9O3diLkhhbW1lcj1oYSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIGhhfSk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9aGE6YVtjXT1oYX0od2luZG93LGRvY3VtZW50LFwiSGFtbWVyXCIpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGFtbWVyLm1pbi5qcy5tYXAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lQmFzZWRHcmFkZXIge1xuICAgIGNvbnN0cnVjdG9yKHByb2JsZW0pIHtcbiAgICAgICAgdGhpcy5wcm9ibGVtID0gcHJvYmxlbTtcbiAgICB9XG4gICAgLy8gVXNlIGEgTElTIChMb25nZXN0IEluY3JlYXNpbmcgU3Vic2VxdWVuY2UpIGFsZ29yaXRobSB0byByZXR1cm4gdGhlIGluZGV4ZXNcbiAgICAvLyB0aGF0IGFyZSBub3QgcGFydCBvZiB0aGF0IHN1YnNlcXVlbmNlLlxuICAgIGludmVyc2VMSVNJbmRpY2VzKGFycikge1xuICAgICAgICAvLyBHZXQgYWxsIHN1YnNlcXVlbmNlc1xuICAgICAgICB2YXIgYWxsU3Vic2VxdWVuY2VzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc3Vic2VxdWVuY2VGb3JDdXJyZW50ID0gW2FycltpXV0sXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGFycltpXSxcbiAgICAgICAgICAgICAgICBsYXN0RWxlbWVudEFkZGVkID0gLTE7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gaTsgaiA8IGFyci5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBzdWJzZXF1ZW50ID0gYXJyW2pdO1xuICAgICAgICAgICAgICAgIGlmIChzdWJzZXF1ZW50ID4gY3VycmVudCAmJiBsYXN0RWxlbWVudEFkZGVkIDwgc3Vic2VxdWVudCkge1xuICAgICAgICAgICAgICAgICAgICBzdWJzZXF1ZW5jZUZvckN1cnJlbnQucHVzaChzdWJzZXF1ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgbGFzdEVsZW1lbnRBZGRlZCA9IHN1YnNlcXVlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWxsU3Vic2VxdWVuY2VzLnB1c2goc3Vic2VxdWVuY2VGb3JDdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaWd1cmUgb3V0IHRoZSBsb25nZXN0IG9uZVxuICAgICAgICB2YXIgbG9uZ2VzdFN1YnNlcXVlbmNlTGVuZ3RoID0gLTE7XG4gICAgICAgIHZhciBsb25nZXN0U3Vic2VxdWVuY2U7XG4gICAgICAgIGZvciAobGV0IGkgaW4gYWxsU3Vic2VxdWVuY2VzKSB7XG4gICAgICAgICAgICB2YXIgc3VicyA9IGFsbFN1YnNlcXVlbmNlc1tpXTtcbiAgICAgICAgICAgIGlmIChzdWJzLmxlbmd0aCA+IGxvbmdlc3RTdWJzZXF1ZW5jZUxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxvbmdlc3RTdWJzZXF1ZW5jZUxlbmd0aCA9IHN1YnMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGxvbmdlc3RTdWJzZXF1ZW5jZSA9IHN1YnM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBpbnZlcnNlIGluZGV4ZXNcbiAgICAgICAgdmFyIGluZGV4ZXMgPSBbXTtcbiAgICAgICAgdmFyIGxJbmRleCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobEluZGV4ID4gbG9uZ2VzdFN1YnNlcXVlbmNlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGluZGV4ZXMucHVzaChpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGFycltpXSA9PSBsb25nZXN0U3Vic2VxdWVuY2VbbEluZGV4XSkge1xuICAgICAgICAgICAgICAgICAgICBsSW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbmRleGVzLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmRleGVzO1xuICAgIH1cbiAgICAvLyBncmFkZSB0aGF0IGVsZW1lbnQsIHJldHVybmluZyB0aGUgc3RhdGVcbiAgICBncmFkZSgpIHtcbiAgICAgICAgdmFyIHByb2JsZW0gPSB0aGlzLnByb2JsZW07XG4gICAgICAgIHByb2JsZW0uY2xlYXJGZWVkYmFjaygpO1xuICAgICAgICB0aGlzLmNvcnJlY3RMaW5lcyA9IDA7XG4gICAgICAgIHRoaXMucGVyY2VudExpbmVzID0gMDtcbiAgICAgICAgdGhpcy5pbmNvcnJlY3RJbmRlbnRzID0gMDtcbiAgICAgICAgdmFyIHNvbHV0aW9uTGluZXMgPSBwcm9ibGVtLnNvbHV0aW9uO1xuICAgICAgICB2YXIgYW5zd2VyTGluZXMgPSBwcm9ibGVtLmFuc3dlckxpbmVzKCk7XG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIgc3RhdGU7XG4gICAgICAgIHRoaXMucGVyY2VudExpbmVzID1cbiAgICAgICAgICAgIE1hdGgubWluKGFuc3dlckxpbmVzLmxlbmd0aCwgc29sdXRpb25MaW5lcy5sZW5ndGgpIC9cbiAgICAgICAgICAgIE1hdGgubWF4KGFuc3dlckxpbmVzLmxlbmd0aCwgc29sdXRpb25MaW5lcy5sZW5ndGgpO1xuICAgICAgICBpZiAoYW5zd2VyTGluZXMubGVuZ3RoIDwgc29sdXRpb25MaW5lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHN0YXRlID0gXCJpbmNvcnJlY3RUb29TaG9ydFwiO1xuICAgICAgICAgICAgdGhpcy5jb3JyZWN0TGVuZ3RoID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoYW5zd2VyTGluZXMubGVuZ3RoID09IHNvbHV0aW9uTGluZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmNvcnJlY3RMZW5ndGggPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb3JyZWN0TGVuZ3RoID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZXRlcm1pbmUgd2hldGhlciB0aGUgY29kZSAqKnRoYXQgaXMgdGhlcmUqKiBpcyBpbiB0aGUgY29ycmVjdCBvcmRlclxuICAgICAgICAvLyBJZiB0aGVyZSBpcyB0b28gbXVjaCBvciB0b28gbGl0dGxlIGNvZGUgdGhpcyBvbmx5IG1hdHRlcnMgZm9yXG4gICAgICAgIC8vIGNhbGN1bGF0aW5nIGEgcGVyY2VudGFnZSBzY29yZS5cbiAgICAgICAgbGV0IGlzQ29ycmVjdE9yZGVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb3JyZWN0TGluZXMgPSAwO1xuICAgICAgICB0aGlzLnNvbHV0aW9uTGVuZ3RoID0gc29sdXRpb25MaW5lcy5sZW5ndGg7XG4gICAgICAgIGxldCBsb29wTGltaXQgPSBNYXRoLm1pbihzb2x1dGlvbkxpbmVzLmxlbmd0aCwgYW5zd2VyTGluZXMubGVuZ3RoKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxvb3BMaW1pdDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYW5zd2VyTGluZXNbaV0udGV4dCAhPT0gc29sdXRpb25MaW5lc1tpXS50ZXh0KSB7XG4gICAgICAgICAgICAgICAgaXNDb3JyZWN0T3JkZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0TGluZXMgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERldGVybWluZSB3aGV0aGVyIGJsb2NrcyBhcmUgaW5kZW50ZWQgY29ycmVjdGx5XG4gICAgICAgIHRoaXMuaW5kZW50TGVmdCA9IFtdO1xuICAgICAgICB0aGlzLmluZGVudFJpZ2h0ID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsb29wTGltaXQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKGFuc3dlckxpbmVzW2ldLnZpZXdJbmRlbnQoKSA8IHNvbHV0aW9uTGluZXNbaV0uaW5kZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRlbnRSaWdodC5wdXNoKGFuc3dlckxpbmVzW2ldKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYW5zd2VyTGluZXNbaV0udmlld0luZGVudCgpID4gc29sdXRpb25MaW5lc1tpXS5pbmRlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGVudExlZnQucHVzaChhbnN3ZXJMaW5lc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmNvcnJlY3RJbmRlbnRzID1cbiAgICAgICAgICAgIHRoaXMuaW5kZW50TGVmdC5sZW5ndGggKyB0aGlzLmluZGVudFJpZ2h0Lmxlbmd0aDtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5pbmNvcnJlY3RJbmRlbnRzID09IDAgJiZcbiAgICAgICAgICAgIGlzQ29ycmVjdE9yZGVyICYmXG4gICAgICAgICAgICB0aGlzLmNvcnJlY3RMZW5ndGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBQZXJmZWN0XG4gICAgICAgICAgICBzdGF0ZSA9IFwiY29ycmVjdFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29ycmVjdExlbmd0aCAmJiBpc0NvcnJlY3RPcmRlcikge1xuICAgICAgICAgICAgc3RhdGUgPSBcImluY29ycmVjdEluZGVudFwiO1xuICAgICAgICB9IGVsc2UgaWYgKCFpc0NvcnJlY3RPcmRlciAmJiBzdGF0ZSAhPSBcImluY29ycmVjdFRvb1Nob3J0XCIpIHtcbiAgICAgICAgICAgIHN0YXRlID0gXCJpbmNvcnJlY3RNb3ZlQmxvY2tzXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWxjdWxhdGVQZXJjZW50KCk7XG4gICAgICAgIHRoaXMuZ3JhZGVyU3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVBlcmNlbnQoKSB7XG4gICAgICAgIGxldCBudW1MaW5lcyA9IHRoaXMucGVyY2VudExpbmVzICogMC4yO1xuICAgICAgICBsZXQgbGluZXMgPSB0aGlzLnByb2JsZW0uYW5zd2VyTGluZXMoKS5sZW5ndGg7XG4gICAgICAgIGxldCBudW1Db3JyZWN0QmxvY2tzID0gKHRoaXMuY29ycmVjdExpbmVzIC8gbGluZXMpICogMC40O1xuICAgICAgICBsZXQgbnVtQ29ycmVjdEluZGVudHMgPVxuICAgICAgICAgICAgKCh0aGlzLmNvcnJlY3RMaW5lcyAtIHRoaXMuaW5jb3JyZWN0SW5kZW50cykgLyBsaW5lcykgKiAwLjQ7XG5cbiAgICAgICAgdGhpcy5wcm9ibGVtLnBlcmNlbnQgPSBudW1MaW5lcyArIG51bUNvcnJlY3RCbG9ja3MgKyBudW1Db3JyZWN0SW5kZW50cztcbiAgICB9XG59XG4iLCIkLmkxOG4oKS5sb2FkKHtcbiAgICBlbjoge1xuICAgICAgICBtc2dfcGFyc29uX2NoZWNrX21lOiBcIkNoZWNrXCIsXG4gICAgICAgIG1zZ19wYXJzb25fcmVzZXQ6IFwiUmVzZXRcIixcbiAgICAgICAgbXNnX3BhcnNvbl9oZWxwOiBcIkhlbHAgbWVcIixcbiAgICAgICAgbXNnX3BhcnNvbl90b29fc2hvcnQ6IFwiWW91ciBwcm9ncmFtIGlzIHRvbyBzaG9ydC4gQWRkIG1vcmUgYmxvY2tzLlwiLFxuICAgICAgICBtc2dfcGFyc29uX2RyYWdfZnJvbV9oZXJlOiBcIkRyYWcgZnJvbSBoZXJlXCIsXG4gICAgICAgIG1zZ19wYXJzb25fZHJhZ190b19oZXJlOiBcIkRyb3AgYmxvY2tzIGhlcmVcIixcbiAgICAgICAgbXNnX3BhcnNvbl9jb3JyZWN0X2ZpcnN0X3RyeTpcbiAgICAgICAgICAgIFwiUGVyZmVjdCEgIEl0IHRvb2sgeW91IG9ubHkgb25lIHRyeSB0byBzb2x2ZSB0aGlzLiAgR3JlYXQgam9iIVwiLFxuICAgICAgICBtc2dfcGFyc29uX2NvcnJlY3Q6XG4gICAgICAgICAgICBcIlBlcmZlY3QhICBJdCB0b29rIHlvdSAkMSB0cmllcyB0byBzb2x2ZSB0aGlzLiAgQ2xpY2sgUmVzZXQgdG8gdHJ5IHRvIHNvbHZlIGl0IGluIG9uZSBhdHRlbXB0LlwiLFxuICAgICAgICBtc2dfcGFyc29uX3dyb25nX2luZGVudDpcbiAgICAgICAgICAgIFwiVGhpcyBibG9jayBpcyBub3QgaW5kZW50ZWQgY29ycmVjdGx5LiBFaXRoZXIgaW5kZW50IGl0IG1vcmUgYnkgZHJhZ2dpbmcgaXQgcmlnaHQgb3IgcmVkdWNlIHRoZSBpbmRlbnRpb24gYnkgZHJhZ2dpbmcgaXQgbGVmdC5cIixcbiAgICAgICAgbXNnX3BhcnNvbl93cm9uZ19pbmRlbnRzOlxuICAgICAgICAgICAgXCJUaGVzZSBibG9ja3MgYXJlIG5vdCBpbmRlbnRlZCBjb3JyZWN0bHkuIFRvIGluZGVudCBhIGJsb2NrIG1vcmUsIGRyYWcgaXQgdG8gdGhlIHJpZ2h0LiBUbyByZWR1Y2UgdGhlIGluZGVudGlvbiwgZHJhZyBpdCB0byB0aGUgbGVmdC5cIixcbiAgICAgICAgbXNnX3BhcnNvbl93cm9uZ19vcmRlcjpcbiAgICAgICAgICAgIFwiSGlnaGxpZ2h0ZWQgYmxvY2tzIGluIHlvdXIgcHJvZ3JhbSBhcmUgd3Jvbmcgb3IgYXJlIGluIHRoZSB3cm9uZyBvcmRlci4gVGhpcyBjYW4gYmUgZml4ZWQgYnkgbW92aW5nLCByZW1vdmluZywgb3IgcmVwbGFjaW5nIGhpZ2hsaWdodGVkIGJsb2Nrcy5cIixcbiAgICAgICAgbXNnX3BhcnNvbl9hcnJvd19uYXZpZ2F0ZTpcbiAgICAgICAgICAgIFwiQXJyb3cga2V5cyB0byBuYXZpZ2F0ZS4gU3BhY2UgdG8gc2VsZWN0IC8gZGVzZWxlY3QgYmxvY2sgdG8gbW92ZS5cIixcbiAgICAgICAgbXNnX3BhcnNvbl9oZWxwX2luZm86XG4gICAgICAgICAgICBcIkNsaWNrIG9uIHRoZSBIZWxwIE1lIGJ1dHRvbiBpZiB5b3Ugd2FudCB0byBtYWtlIHRoZSBwcm9ibGVtIGVhc2llclwiLFxuICAgICAgICBtc2dfcGFyc29uX25vdF9zb2x1dGlvbjpcbiAgICAgICAgICAgIFwiRGlzYWJsZWQgYW4gdW5uZWVkZWQgY29kZSBibG9jayAob25lIHRoYXQgaXMgbm90IHBhcnQgb2YgdGhlIHNvbHV0aW9uKS5cIixcbiAgICAgICAgbXNnX3BhcnNvbl9wcm92aWRlZF9pbmRlbnQ6IFwiUHJvdmlkZWQgdGhlIGluZGVudGF0aW9uLlwiLFxuICAgICAgICBtc2dfcGFyc29uX2NvbWJpbmVkX2Jsb2NrczogXCJDb21iaW5lZCB0d28gY29kZSBibG9ja3MgaW50byBvbmUuXCIsXG4gICAgICAgIG1zZ19wYXJzb25fcmVtb3ZlX2luY29ycmVjdDpcbiAgICAgICAgICAgIFwiV2lsbCByZW1vdmUgYW4gaW5jb3JyZWN0IGNvZGUgYmxvY2sgZnJvbSBhbnN3ZXIgYXJlYVwiLFxuICAgICAgICBtc2dfcGFyc29uX3dpbGxfY29tYmluZTogXCJXaWxsIGNvbWJpbmUgdHdvIGJsb2Nrc1wiLFxuICAgICAgICBtc2dfcGFyc29uX2F0bGVhc3RfdGhyZWVfYXR0ZW1wdHM6XG4gICAgICAgICAgICBcIllvdSBtdXN0IG1ha2UgYXQgbGVhc3QgdGhyZWUgZGlzdGluY3QgZnVsbCBhdHRlbXB0cyBhdCBhIHNvbHV0aW9uIGJlZm9yZSB5b3UgY2FuIGdldCBoZWxwXCIsXG4gICAgICAgIG1zZ19wYXJzb25fdGhyZWVfYmxvY2tzX2xlZnQ6XG4gICAgICAgICAgICBcIlRoZXJlIGFyZSBvbmx5IDMgY29ycmVjdCBibG9ja3MgbGVmdC4gIFlvdSBzaG91bGQgYmUgYWJsZSB0byBwdXQgdGhlbSBpbiBvcmRlclwiLFxuICAgICAgICBtc2dfcGFyc29uX3dpbGxfcHJvdmlkZV9pbmRlbnQ6IFwiV2lsbCBwcm92aWRlIGluZGVudGF0aW9uXCIsXG4gICAgfSxcbn0pO1xuIiwiJC5pMThuKCkubG9hZCh7XG4gICAgXCJwdC1iclwiOiB7XG4gICAgICAgIG1zZ19wYXJzb25fY2hlY2tfbWU6IFwiVmVyaWZpY2FyXCIsXG4gICAgICAgIG1zZ19wYXJzb25fcmVzZXQ6IFwiUmVzZXRhclwiLFxuICAgICAgICBtc2dfcGFyc29uX2hlbHA6XCJBanVkYVwiLFxuICAgICAgICBtc2dfcGFyc29uX3Rvb19zaG9ydDogXCJTZXUgcHJvZ3JhbWEgw6kgbXVpdG8gY3VydG8uIEFkaWNpb25lIG1haXMgYmxvY29zLlwiLFxuICAgICAgICBtc2dfcGFyc29uX2RyYWdfZnJvbV9oZXJlOiBcIkFycmFzdGUgZGFxdWlcIixcbiAgICAgICAgbXNnX3BhcnNvbl9kcmFnX3RvX2hlcmU6IFwiTGFyZ3VlIG9zIGJsb2NvcyBhcXVpXCIsXG4gICAgICAgIG1zZ19wYXJzb25fY29ycmVjdF9maXJzdF90cnk6XG4gICAgICAgICAgICBcIlBlcmZlaXRvISBWb2PDqiBsZXZvdSBhcGVuYXMgdW1hIHRlbnRhdGl2YSBwYXJhIHJlc29sdmVyLiBCb20gdHJhYmFsaG8hXCIsXG4gICAgICAgIG1zZ19wYXJzb25fY29ycmVjdDpcbiAgICAgICAgICAgIFwiUGVyZmVpdG8hIFZvY8OqIGxldm91ICQxIHRlbnRhdGl2YXMgcGFyYSByZXNvbHZlci4gQ2xpcXVlIGVtIFJlc2V0YXIgcGFyYSB0ZW50YXIgcmVzb2x2ZXIgZW0gdW1hIHRlbnRhdGl2YS5cIiAsXG4gICAgICAgIG1zZ19wYXJzb25fd3JvbmdfaW5kZW50OlxuICAgICAgICAgICAgXCJFc3RlIGJsb2NvIG7Do28gZXN0w6EgaW5kZW50YWRvIGNvcnJldGFtZW50ZS4gSW5kZW50ZSBtYWlzIGFycmFzdGFuZG8tbyBwYXJhIGEgZGlyZWl0YSBvdSByZWR1emEgYSBpbmRlbnRhw6fDo28gYXJyYXN0YW5kbyBwYXJhIGEgZXNxdWVyZGEuXCIsXG4gICAgICAgIG1zZ19wYXJzb25fd3JvbmdfaW5kZW50czpcbiAgICAgICAgICAgIFwiRXN0ZXMgYmxvY29zIG7Do28gZXN0w6NvIGluZGVudGFkb3MgY29ycmV0YW1lbnRlLiBQYXJhIGluZGVudGFyIG1haXMsIGFycmFzdGUgbyBibG9jbyBwYXJhIGEgZGlyZWl0YS4gUGFyYSByZWR1emlyIGEgaW5kZW50YcOnw6NvLCBhcnJhc3RlIHBhcmEgYSBlc3F1ZXJkYS5cIixcbiAgICAgICAgbXNnX3BhcnNvbl93cm9uZ19vcmRlcjpcbiAgICAgICAgICAgIFwiQmxvY29zIGRlc3RhY2Fkb3Mgbm8gc2V1IHByb2dyYW1hIGVzdMOjbyBlcnJhZG9zIG91IGVzdMOjbyBuYSBvcmRlbSBlcnJhZGEuIElzc28gcG9kZSBzZXIgcmVzb2x2aWRvIG1vdmVuZG8sIGV4Y2x1aW5kbyBvdSBzdWJzdGl0dWluZG8gb3MgYmxvY29zIGRlc3RhY2Fkb3MuXCIsXG4gICAgICAgIG1zZ19wYXJzb25fYXJyb3dfbmF2aWdhdGU6XG4gICAgICAgICAgICBcIlVzZSBhcyB0ZWNsYXMgZGUgc2V0YXMgcGFyYSBuYXZlZ2FyLiBFc3Bhw6dvIHBhcmEgc2VsZWNpb25hci8gZGVzbWFyY2FyIGJsb2NvcyBwYXJhIG1vdmVyLlwiLFxuICAgICAgICBtc2dfcGFyc29uX2hlbHBfaW5mbzpcbiAgICAgICAgICAgIFwiQ2xpcXVlIG5vIGJvdMOjbyBBanVkYSBzZSB2b2PDqiBxdWlzZXIgZmFjaWxpdGFyIG8gcHJvYmxlbWFcIixcbiAgICAgICAgbXNnX3BhcnNvbl9ub3Rfc29sdXRpb246XG4gICAgICAgICAgICBcIkZvaSBkZXNhYmlsaXRhZG8gdW0gYmxvY28gZGUgY8OzZGlnbyBkZXNuZWNlc3PDoXJpbyAocXVlIG7Do28gZmF6IHBhcnRlIGRhIHNvbHXDp8OjbykuXCIsXG4gICAgICAgIG1zZ19wYXJzb25fcHJvdmlkZWRfaW5kZW50OlwiRm9pIGZvcm5lY2lkYSBhIGluZGVudGHDp8Ojby5cIixcbiAgICAgICAgbXNnX3BhcnNvbl9jb21iaW5lZF9ibG9ja3M6XCJEb2lzIGJsb2NvcyBkZSBjw7NkaWdvcyBmb3JhbSBjb21iaW5hZG9zIGVtIHVtLlwiLFxuICAgICAgICBtc2dfcGFyc29uX3JlbW92ZV9pbmNvcnJlY3Q6XG4gICAgICAgICAgICBcIlNlcsOhIHJlbW92aWRvIHVtIGJsb2NvIGRlIGPDs2RpZ28gaW5jb3JyZXRvIGRhIMOhcmVhIGRlIHJlc3Bvc3RhXCIsXG4gICAgICAgIG1zZ19wYXJzb25fd2lsbF9jb21iaW5lOlwiU2Vyw6NvIGNvbWJpbmFkb3MgZG9pcyBibG9jb3NcIixcbiAgICAgICAgbXNnX3BhcnNvbl9hdGxlYXN0X3RocmVlX2F0dGVtcHRzOlxuICAgICAgICAgICAgXCJWb2PDqiBkZXZlIHRlbnRhciBwZWxvIG1lbm9zIHRyw6pzIHZlemVzIGFudGVzIGRlIHBlZGlyIGFqdWRhXCIsXG4gICAgICAgIG1zZ19wYXJzb25fdGhyZWVfYmxvY2tzX2xlZnQ6XG4gICAgICAgICAgICBcIlJlc3RhbSBhcGVuYXMgMyBibG9jb3MgY29ycmV0b3MuIFZvY8OqIGRldmUgY29sb2PDoS1sb3MgZW0gb3JkZW1cIixcbiAgICAgICAgbXNnX3BhcnNvbl93aWxsX3Byb3ZpZGVfaW5kZW50OiBcIlNlcsOhIGZvcm5lY2lkYSBhIGluZGVudGHDp8Ojb1wiXG4gICAgfSxcbn0pO1xuIiwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT09IFBhcnNvbnMgUnVuZXN0b25lIERpcmVjdGl2ZSBKYXZhc2NyaXB0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PT09PT09IFJlbmRlcnMgYSBQYXJzb25zIHByb2JsZW0gYmFzZWQgb24gdGhlIEhUTUwgY3JlYXRlZCBieSB0aGVcbj09PT09PT09IHBhcnNvbnMucHkgc2NyaXB0IGFuZCB0aGUgUlNUIGZpbGUuXG49PT09IENPTlRSSUJVVE9SUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PT09PT09IElzYWlhaCBNYXllcmNoYWtcbj09PT09PT09IEplZmYgUmlja1xuPT09PT09PT0gQmFyYmFyYSBFcmljc29uXG49PT09PT09PSBDb2xlIEJvd2Vyc1xuPT09PSBBZGFwdGVkIGZvcm0gdGhlIG9yaWdpbmFsIEpTIFBhcnNvbnMgYnkgPT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT09PT09PSBWaWxsZSBLYXJhdmlydGFcbj09PT09PT09IFBldHJpIEloYW50b2xhXG49PT09PT09PSBKdWhhIEhlbG1pbmVuXG49PT09PT09PSBNaWtlIEhld25lclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PT0gTGluZUJhc2VkR3JhZGVyIE9iamVjdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09PT09PT0gVXNlZCBmb3IgZ3JhZGluZyBhIFBhcnNvbnMgcHJvYmxlbS5cbj09PT0gUFJPUEVSVElFUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09PT09PT0gcHJvYmxlbTogdGhlIFBhcnNvbnMgcHJvYmxlbVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bmVzdG9uZUJhc2UgZnJvbSBcIi4uLy4uL2NvbW1vbi9qcy9ydW5lc3RvbmViYXNlLmpzXCI7XG5pbXBvcnQgXCIuL3BhcnNvbnMtaTE4bi5lbi5qc1wiO1xuaW1wb3J0IFwiLi9wYXJzb25zLWkxOG4ucHQtYnIuanNcIjtcbmltcG9ydCBcIi4vcHJldHRpZnkuanNcIjtcbmltcG9ydCBcIi4uL2Nzcy9wYXJzb25zLmNzc1wiO1xuaW1wb3J0IFwiLi4vY3NzL3ByZXR0aWZ5LmNzc1wiO1xuaW1wb3J0IExpbmVCYXNlZEdyYWRlciBmcm9tIFwiLi9saW5lR3JhZGVyXCI7XG5pbXBvcnQgUGFyc29uc0xpbmUgZnJvbSBcIi4vcGFyc29uc0xpbmVcIjtcbmltcG9ydCBQYXJzb25zQmxvY2sgZnJvbSBcIi4vcGFyc29uc0Jsb2NrXCI7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09PSBQYXJzb25zIE9iamVjdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT09PT09PSBUaGUgbW9kZWwgYW5kIHZpZXcgb2YgYSBQYXJzb25zIHByb2JsZW0gYmFzZWQgb24gd2hhdCBpc1xuPT09PT09PT0gc3BlY2lmaWVkIGluIHRoZSBIVE1MLCB3aGljaCBpcyBiYXNlZCBvbiB3aGF0IGlzIHNwZWNpZmllZFxuPT09PT09PT0gaW4gdGhlIFJTVCBmaWxlXG49PT09IFBST1BFUlRJRVMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PT09PT09IG9wdGlvbnM6IG9wdGlvbnMgbGFyZ2VseSBzcGVjaWZpZWQgZnJvbSB0aGUgSFRNTFxuPT09PT09PT0gZ3JhZGVyOiBhIExpbmVHcmFkZXIgZm9yIGdyYWRpbmcgdGhlIHByb2JsZW1cbj09PT09PT09IGxpbmVzOiBhbiBhcnJheSBvZiBhbGwgUGFyc29uc0xpbmUgYXMgc3BlY2lmaWVkIGluIHRoZSBwcm9ibGVtXG49PT09PT09PSBzb2x1dGlvbjogYW4gYXJyYXkgb2YgUGFyc29uc0xpbmUgaW4gdGhlIHNvbHV0aW9uXG49PT09PT09PSBibG9ja3M6IHRoZSBjdXJyZW50IGJsb2Nrc1xuPT09PT09PT0gc291cmNlQXJlYTogdGhlIGVsZW1lbnQgdGhhdCBjb250YWlucyB0aGUgc291cmNlIGJsb2Nrc1xuPT09PT09PT0gYW5zd2VyQXJlYTogdGhlIGVsZW1lbnQgdGhhdCBjb250YWlucyB0aGUgYW5zd2VyIGJsb2Nrc1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09PSBJTklUSUFMSVpBVElPTiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxudmFyIHByc0xpc3QgPSB7fTsgLy8gUGFyc29ucyBkaWN0aW9uYXJ5XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJzb25zIGV4dGVuZHMgUnVuZXN0b25lQmFzZSB7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcihvcHRzKTtcbiAgICAgICAgdmFyIG9yaWcgPSBvcHRzLm9yaWc7IC8vIGVudGlyZSA8cHJlPiBlbGVtZW50IHRoYXQgd2lsbCBiZSByZXBsYWNlZCBieSBuZXcgSFRNTFxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdiA9IG9yaWc7XG4gICAgICAgIHRoaXMub3JpZ0VsZW0gPSAkKG9yaWcpLmZpbmQoXCJwcmUucGFyc29uc2Jsb2Nrc1wiKVswXTtcbiAgICAgICAgLy8gRmluZCB0aGUgcXVlc3Rpb24gdGV4dCBhbmQgc3RvcmUgaXQgaW4gLnF1ZXN0aW9uXG4gICAgICAgIHRoaXMucXVlc3Rpb24gPSAkKG9yaWcpLmZpbmQoYC5wYXJzb25zX3F1ZXN0aW9uYClbMF07XG4gICAgICAgIHRoaXMudXNlUnVuZXN0b25lU2VydmljZXMgPSBvcHRzLnVzZVJ1bmVzdG9uZVNlcnZpY2VzO1xuICAgICAgICB0aGlzLmRpdmlkID0gb3B0cy5vcmlnLmlkO1xuICAgICAgICAvLyBTZXQgdGhlIHN0b3JhZ2VJZCAoa2V5IGZvciBzdG9yaW5nIGRhdGEpXG4gICAgICAgIHZhciBzdG9yYWdlSWQgPSBzdXBlci5sb2NhbFN0b3JhZ2VLZXkoKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlSWQgPSBzdG9yYWdlSWQ7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLm9yaWdFbGVtLmNoaWxkTm9kZXM7IC8vIHRoaXMgY29udGFpbnMgYWxsIG9mIHRoZSBjaGlsZCBlbGVtZW50cyBvZiB0aGUgZW50aXJlIHRhZy4uLlxuICAgICAgICB0aGlzLmNvbnRlbnRBcnJheSA9IFtdO1xuICAgICAgICBQYXJzb25zLmNvdW50ZXIrKzsgLy8gICAgVW5pcXVlIGlkZW50aWZpZXJcbiAgICAgICAgdGhpcy5jb3VudGVySWQgPSBcInBhcnNvbnMtXCIgKyBQYXJzb25zLmNvdW50ZXI7XG5cbiAgICAgICAgLy8gZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgICBpZiAoJCh0aGlzLmNoaWxkcmVuW2ldKS5pcyhcIltkYXRhLXF1ZXN0aW9uXVwiKSkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMucXVlc3Rpb24gPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZU9wdGlvbnMoKTtcbiAgICAgICAgdGhpcy5ncmFkZXIgPSBuZXcgTGluZUJhc2VkR3JhZGVyKHRoaXMpO1xuICAgICAgICB0aGlzLmdyYWRlci5zaG93ZmVlZGJhY2sgPSB0aGlzLnNob3dmZWVkYmFjaztcbiAgICAgICAgdmFyIGZ1bGx0ZXh0ID0gJCh0aGlzLm9yaWdFbGVtKS5odG1sKCk7XG4gICAgICAgIHRoaXMuYmxvY2tJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuY2hlY2tDb3VudCA9IDA7XG4gICAgICAgIHRoaXMubnVtRGlzdGluY3QgPSAwO1xuICAgICAgICB0aGlzLmhhc1NvbHZlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVMaW5lcyhmdWxsdGV4dC50cmltKCkpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVWaWV3KCk7XG4gICAgICAgIHRoaXMuY2FwdGlvbiA9IFwiUGFyc29uc1wiO1xuICAgICAgICB0aGlzLmFkZENhcHRpb24oXCJydW5lc3RvbmVcIik7XG4gICAgICAgIC8vIENoZWNrIHRoZSBzZXJ2ZXIgZm9yIGFuIGFuc3dlciB0byBjb21wbGV0ZSB0aGluZ3NcbiAgICAgICAgdGhpcy5jaGVja1NlcnZlcihcInBhcnNvbnNcIiwgdHJ1ZSk7XG4gICAgfVxuICAgIC8vIEJhc2VkIG9uIHRoZSBkYXRhLWZpZWxkcyBpbiB0aGUgb3JpZ2luYWwgSFRNTCwgaW5pdGlhbGl6ZSBvcHRpb25zXG4gICAgaW5pdGlhbGl6ZU9wdGlvbnMoKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgcGl4ZWxzUGVySW5kZW50OiAzMCxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gYWRkIG1heGRpc3QgYW5kIG9yZGVyIGlmIHByZXNlbnRcbiAgICAgICAgdmFyIG1heGRpc3QgPSAkKHRoaXMub3JpZ0VsZW0pLmRhdGEoXCJtYXhkaXN0XCIpO1xuICAgICAgICB2YXIgb3JkZXIgPSAkKHRoaXMub3JpZ0VsZW0pLmRhdGEoXCJvcmRlclwiKTtcbiAgICAgICAgdmFyIG5vaW5kZW50ID0gJCh0aGlzLm9yaWdFbGVtKS5kYXRhKFwibm9pbmRlbnRcIik7XG4gICAgICAgIHZhciBhZGFwdGl2ZSA9ICQodGhpcy5vcmlnRWxlbSkuZGF0YShcImFkYXB0aXZlXCIpO1xuICAgICAgICB2YXIgbnVtYmVyZWQgPSAkKHRoaXMub3JpZ0VsZW0pLmRhdGEoXCJudW1iZXJlZFwiKTtcbiAgICAgICAgb3B0aW9uc1tcIm51bWJlcmVkXCJdID0gbnVtYmVyZWQ7XG4gICAgICAgIGlmIChtYXhkaXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbXCJtYXhkaXN0XCJdID0gbWF4ZGlzdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gY29udmVydCBvcmRlciBzdHJpbmcgdG8gYXJyYXkgb2YgbnVtYmVyc1xuICAgICAgICAgICAgb3JkZXIgPSBvcmRlci5tYXRjaCgvXFxkKy9nKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3JkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBvcmRlcltpXSA9IHBhcnNlSW50KG9yZGVyW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdGlvbnNbXCJvcmRlclwiXSA9IG9yZGVyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2luZGVudCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG5vaW5kZW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9uc1tcIm5vaW5kZW50XCJdID0gbm9pbmRlbnQ7XG4gICAgICAgIHRoaXMubm9pbmRlbnQgPSBub2luZGVudDtcbiAgICAgICAgaWYgKGFkYXB0aXZlID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYWRhcHRpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChhZGFwdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplQWRhcHRpdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zW1wiYWRhcHRpdmVcIl0gPSBhZGFwdGl2ZTtcbiAgICAgICAgLy8gYWRkIGxvY2FsZSBhbmQgbGFuZ3VhZ2VcbiAgICAgICAgdmFyIGxvY2FsZSA9IGVCb29rQ29uZmlnLmxvY2FsZTtcbiAgICAgICAgaWYgKGxvY2FsZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxvY2FsZSA9IFwiZW5cIjtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zW1wibG9jYWxlXCJdID0gbG9jYWxlO1xuICAgICAgICB2YXIgbGFuZ3VhZ2UgPSAkKHRoaXMub3JpZ0VsZW0pLmRhdGEoXCJsYW5ndWFnZVwiKTtcbiAgICAgICAgaWYgKGxhbmd1YWdlID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGFuZ3VhZ2UgPSBlQm9va0NvbmZpZy5sYW5ndWFnZTtcbiAgICAgICAgICAgIGlmIChsYW5ndWFnZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsYW5ndWFnZSA9IFwicHl0aG9uXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9uc1tcImxhbmd1YWdlXCJdID0gbGFuZ3VhZ2U7XG4gICAgICAgIHZhciBwcmV0dGlmeUxhbmd1YWdlID0ge1xuICAgICAgICAgICAgcHl0aG9uOiBcInByZXR0eXByaW50IGxhbmctcHlcIixcbiAgICAgICAgICAgIGphdmE6IFwicHJldHR5cHJpbnQgbGFuZy1qYXZhXCIsXG4gICAgICAgICAgICBqYXZhc2NyaXB0OiBcInByZXR0eXByaW50IGxhbmctanNcIixcbiAgICAgICAgICAgIGh0bWw6IFwicHJldHR5cHJpbnQgbGFuZy1odG1sXCIsXG4gICAgICAgICAgICBjOiBcInByZXR0eXByaW50IGxhbmctY1wiLFxuICAgICAgICAgICAgXCJjKytcIjogXCJwcmV0dHlwcmludCBsYW5nLWNwcFwiLFxuICAgICAgICAgICAgcnVieTogXCJwcmV0dHlwcmludCBsYW5nLXJiXCIsXG4gICAgICAgIH1bbGFuZ3VhZ2VdO1xuICAgICAgICBpZiAocHJldHRpZnlMYW5ndWFnZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHByZXR0aWZ5TGFuZ3VhZ2UgPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnNbXCJwcmV0dGlmeUxhbmd1YWdlXCJdID0gcHJldHRpZnlMYW5ndWFnZTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgLy8gQmFzZWQgb24gd2hhdCBpcyBzcGVjaWZpZWQgaW4gdGhlIG9yaWdpbmFsIEhUTUwsIGNyZWF0ZSB0aGUgSFRNTCB2aWV3XG4gICAgaW5pdGlhbGl6ZVZpZXcoKSB7XG4gICAgICAgIHRoaXMub3V0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAkKHRoaXMub3V0ZXJEaXYpLmFkZENsYXNzKFwicGFyc29ucyBhbGVydCBhbGVydC13YXJuaW5nXCIpO1xuICAgICAgICB0aGlzLm91dGVyRGl2LmlkID0gdGhpcy5jb3VudGVySWQ7XG4gICAgICAgIHRoaXMucGFyc1RleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAkKHRoaXMucGFyc1RleHREaXYpLmFkZENsYXNzKFwicGFyc29ucy10ZXh0XCIpO1xuICAgICAgICB0aGlzLmtleWJvYXJkVGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgJCh0aGlzLmtleWJvYXJkVGlwKS5hdHRyKFwicm9sZVwiLCBcInRvb2x0aXBcIik7XG4gICAgICAgIHRoaXMua2V5Ym9hcmRUaXAuaWQgPSB0aGlzLmNvdW50ZXJJZCArIFwiLXRpcFwiO1xuICAgICAgICB0aGlzLmtleWJvYXJkVGlwLmlubmVySFRNTCA9ICQuaTE4bihcIm1zZ19wYXJzb25fYXJyb3dfbmF2aWdhdGVcIik7XG4gICAgICAgIHRoaXMub3V0ZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5rZXlib2FyZFRpcCk7XG4gICAgICAgICQodGhpcy5rZXlib2FyZFRpcCkuaGlkZSgpO1xuICAgICAgICB0aGlzLnNvcnRDb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAkKHRoaXMuc29ydENvbnRhaW5lckRpdikuYWRkQ2xhc3MoXCJzb3J0YWJsZS1jb2RlLWNvbnRhaW5lclwiKTtcbiAgICAgICAgJCh0aGlzLnNvcnRDb250YWluZXJEaXYpLmF0dHIoXG4gICAgICAgICAgICBcImFyaWEtZGVzY3JpYmVkYnlcIixcbiAgICAgICAgICAgIHRoaXMuY291bnRlcklkICsgXCItdGlwXCJcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5vdXRlckRpdi5hcHBlbmRDaGlsZCh0aGlzLnNvcnRDb250YWluZXJEaXYpO1xuICAgICAgICB0aGlzLnNvdXJjZVJlZ2lvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuc291cmNlUmVnaW9uRGl2LmlkID0gdGhpcy5jb3VudGVySWQgKyBcIi1zb3VyY2VSZWdpb25cIjtcbiAgICAgICAgJCh0aGlzLnNvdXJjZVJlZ2lvbkRpdikuYWRkQ2xhc3MoXCJzb3J0YWJsZS1jb2RlXCIpO1xuICAgICAgICB0aGlzLnNvdXJjZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgJCh0aGlzLnNvdXJjZUxhYmVsKS5hdHRyKFwicm9sZVwiLCBcInRvb2x0aXBcIik7XG4gICAgICAgIHRoaXMuc291cmNlTGFiZWwuaWQgPSB0aGlzLmNvdW50ZXJJZCArIFwiLXNvdXJjZVRpcFwiO1xuICAgICAgICB0aGlzLnNvdXJjZUxhYmVsLmlubmVySFRNTCA9ICQuaTE4bihcIm1zZ19wYXJzb25fZHJhZ19mcm9tX2hlcmVcIik7XG4gICAgICAgIHRoaXMuc291cmNlUmVnaW9uRGl2LmFwcGVuZENoaWxkKHRoaXMuc291cmNlTGFiZWwpO1xuICAgICAgICB0aGlzLnNvcnRDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5zb3VyY2VSZWdpb25EaXYpO1xuICAgICAgICB0aGlzLnNvdXJjZUFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLnNvdXJjZUFyZWEuaWQgPSB0aGlzLmNvdW50ZXJJZCArIFwiLXNvdXJjZVwiO1xuICAgICAgICAkKHRoaXMuc291cmNlQXJlYSkuYWRkQ2xhc3MoXCJzb3VyY2VcIik7XG4gICAgICAgICQodGhpcy5zb3VyY2VBcmVhKS5hdHRyKFxuICAgICAgICAgICAgXCJhcmlhLWRlc2NyaWJlZGJ5XCIsXG4gICAgICAgICAgICB0aGlzLmNvdW50ZXJJZCArIFwiLXNvdXJjZVRpcFwiXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc291cmNlUmVnaW9uRGl2LmFwcGVuZENoaWxkKHRoaXMuc291cmNlQXJlYSk7XG4gICAgICAgIHRoaXMuYW5zd2VyUmVnaW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5hbnN3ZXJSZWdpb25EaXYuaWQgPSB0aGlzLmNvdW50ZXJJZCArIFwiLWFuc3dlclJlZ2lvblwiO1xuICAgICAgICAkKHRoaXMuYW5zd2VyUmVnaW9uRGl2KS5hZGRDbGFzcyhcInNvcnRhYmxlLWNvZGVcIik7XG4gICAgICAgIHRoaXMuYW5zd2VyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAkKHRoaXMuYW5zd2VyTGFiZWwpLmF0dHIoXCJyb2xlXCIsIFwidG9vbHRpcFwiKTtcbiAgICAgICAgdGhpcy5hbnN3ZXJMYWJlbC5pZCA9IHRoaXMuY291bnRlcklkICsgXCItYW5zd2VyVGlwXCI7XG4gICAgICAgIHRoaXMuYW5zd2VyTGFiZWwuaW5uZXJIVE1MID0gJC5pMThuKFwibXNnX3BhcnNvbl9kcmFnX3RvX2hlcmVcIik7XG4gICAgICAgIHRoaXMuYW5zd2VyUmVnaW9uRGl2LmFwcGVuZENoaWxkKHRoaXMuYW5zd2VyTGFiZWwpO1xuICAgICAgICB0aGlzLnNvcnRDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5hbnN3ZXJSZWdpb25EaXYpO1xuICAgICAgICB0aGlzLmFuc3dlckFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmFuc3dlckFyZWEuaWQgPSB0aGlzLmNvdW50ZXJJZCArIFwiLWFuc3dlclwiO1xuICAgICAgICAkKHRoaXMuYW5zd2VyQXJlYSkuYXR0cihcbiAgICAgICAgICAgIFwiYXJpYS1kZXNjcmliZWRieVwiLFxuICAgICAgICAgICAgdGhpcy5jb3VudGVySWQgKyBcIi1hbnN3ZXJUaXBcIlxuICAgICAgICApO1xuICAgICAgICB0aGlzLmFuc3dlclJlZ2lvbkRpdi5hcHBlbmRDaGlsZCh0aGlzLmFuc3dlckFyZWEpO1xuICAgICAgICB0aGlzLnBhcnNvbnNDb250cm9sRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgJCh0aGlzLnBhcnNvbnNDb250cm9sRGl2KS5hZGRDbGFzcyhcInBhcnNvbnMtY29udHJvbHNcIik7XG4gICAgICAgIHRoaXMub3V0ZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5wYXJzb25zQ29udHJvbERpdik7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgdGhpcy5jaGVja0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICQodGhpcy5jaGVja0J1dHRvbikuYXR0cihcImNsYXNzXCIsIFwiYnRuIGJ0bi1zdWNjZXNzXCIpO1xuICAgICAgICB0aGlzLmNoZWNrQnV0dG9uLnRleHRDb250ZW50ID0gJC5pMThuKFwibXNnX3BhcnNvbl9jaGVja19tZVwiKTtcbiAgICAgICAgdGhpcy5jaGVja0J1dHRvbi5pZCA9IHRoaXMuY291bnRlcklkICsgXCItY2hlY2tcIjtcbiAgICAgICAgdGhpcy5wYXJzb25zQ29udHJvbERpdi5hcHBlbmRDaGlsZCh0aGlzLmNoZWNrQnV0dG9uKTtcbiAgICAgICAgdGhpcy5jaGVja0J1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgdGhpcy5jaGVja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhhdC5jaGVja0N1cnJlbnRBbnN3ZXIoKTtcbiAgICAgICAgICAgIHRoYXQubG9nQ3VycmVudEFuc3dlcigpO1xuICAgICAgICAgICAgdGhhdC5yZW5kZXJGZWVkYmFjaygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICQodGhpcy5yZXNldEJ1dHRvbikuYXR0cihcImNsYXNzXCIsIFwiYnRuIGJ0bi1kZWZhdWx0XCIpO1xuICAgICAgICB0aGlzLnJlc2V0QnV0dG9uLnRleHRDb250ZW50ID0gJC5pMThuKFwibXNnX3BhcnNvbl9yZXNldFwiKTtcbiAgICAgICAgdGhpcy5yZXNldEJ1dHRvbi5pZCA9IHRoaXMuY291bnRlcklkICsgXCItcmVzZXRcIjtcbiAgICAgICAgdGhpcy5yZXNldEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgdGhpcy5wYXJzb25zQ29udHJvbERpdi5hcHBlbmRDaGlsZCh0aGlzLnJlc2V0QnV0dG9uKTtcbiAgICAgICAgdGhpcy5yZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhhdC5jbGVhckZlZWRiYWNrKCk7XG4gICAgICAgICAgICAkKHRoYXQuY2hlY2tCdXR0b24pLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGF0LnJlc2V0VmlldygpO1xuICAgICAgICAgICAgdGhhdC5sb2dNb3ZlKFwicmVzZXRcIik7XG4gICAgICAgICAgICB0aGF0LnNldExvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hZGFwdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5oZWxwQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgICQodGhpcy5oZWxwQnV0dG9uKS5hdHRyKFwiY2xhc3NcIiwgXCJidG4gYnRuLXByaW1hcnlcIik7XG4gICAgICAgICAgICB0aGlzLmhlbHBCdXR0b24udGV4dENvbnRlbnQgPSAkLmkxOG4oXCJtc2dfcGFyc29uX2hlbHBcIik7XG4gICAgICAgICAgICB0aGlzLmhlbHBCdXR0b24uaWQgPSB0aGlzLmNvdW50ZXJJZCArIFwiLWhlbHBcIjtcbiAgICAgICAgICAgIHRoaXMuaGVscEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlOyAvLyBiamVcbiAgICAgICAgICAgIHRoaXMucGFyc29uc0NvbnRyb2xEaXYuYXBwZW5kQ2hpbGQodGhpcy5oZWxwQnV0dG9uKTtcbiAgICAgICAgICAgIHRoaXMuaGVscEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGF0LmhlbHBNZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tZXNzYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlRGl2LmlkID0gdGhpcy5jb3VudGVySWQgKyBcIi1tZXNzYWdlXCI7XG4gICAgICAgIHRoaXMucGFyc29uc0NvbnRyb2xEaXYuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlRGl2KTtcbiAgICAgICAgJCh0aGlzLm1lc3NhZ2VEaXYpLmhpZGUoKTtcbiAgICAgICAgJCh0aGlzLm9yaWdFbGVtKS5yZXBsYWNlV2l0aCh0aGlzLm91dGVyRGl2KTtcbiAgICAgICAgJCh0aGlzLm91dGVyRGl2KS5jbG9zZXN0KFwiLnNxY29udGFpbmVyXCIpLmNzcyhcIm1heC13aWR0aFwiLCBcIm5vbmVcIik7XG4gICAgICAgIGlmICh0aGlzLm91dGVyRGl2KSB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzLnF1ZXN0aW9uKS5odG1sKCkubWF0Y2goL15cXHMrJC8pKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLnF1ZXN0aW9uKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLm91dGVyRGl2KS5wcmVwZW5kKHRoaXMucXVlc3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEluaXRpYWxpemUgbGluZXMgYW5kIHNvbHV0aW9uIHByb3BlcnRpZXNcbiAgICBpbml0aWFsaXplTGluZXModGV4dCkge1xuICAgICAgICB0aGlzLmxpbmVzID0gW107XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgaW5pdGlhbCBibG9ja3NcbiAgICAgICAgdmFyIHRleHRCbG9ja3MgPSB0ZXh0LnNwbGl0KFwiLS0tXCIpO1xuICAgICAgICBpZiAodGV4dEJsb2Nrcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyAtLS0sIHRoZW4gZXZlcnkgbGluZSBpcyBpdHMgb3duIGJsb2NrXG4gICAgICAgICAgICB0ZXh0QmxvY2tzID0gdGV4dC5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc29sdXRpb24gPSBbXTtcbiAgICAgICAgdmFyIGluZGVudHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0QmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdGV4dEJsb2NrID0gdGV4dEJsb2Nrc1tpXTtcbiAgICAgICAgICAgIC8vIEZpZ3VyZSBvdXQgb3B0aW9ucyBiYXNlZCBvbiB0aGUgI29wdGlvblxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBvcHRpb25zIGZyb20gdGhlIGNvZGVcbiAgICAgICAgICAgIC8vIG9ubHkgb3B0aW9ucyBhcmUgI3BhaXJlZCBvciAjZGlzdHJhY3RvclxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgICAgIHZhciBkaXN0cmFjdEluZGV4O1xuICAgICAgICAgICAgdmFyIGRpc3RyYWN0SGVscHRleHQgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKHRleHRCbG9jay5pbmNsdWRlcyhcIiNwYWlyZWQ6XCIpKSB7XG4gICAgICAgICAgICAgICAgZGlzdHJhY3RJbmRleCA9IHRleHRCbG9jay5pbmRleE9mKFwiI3BhaXJlZDpcIik7XG4gICAgICAgICAgICAgICAgZGlzdHJhY3RIZWxwdGV4dCA9IHRleHRCbG9jay5zdWJzdHJpbmcoZGlzdHJhY3RJbmRleCArIDgsIHRleHRCbG9jay5sZW5ndGgpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB0ZXh0QmxvY2sgPSB0ZXh0QmxvY2suc3Vic3RyaW5nKDAsIGRpc3RyYWN0SW5kZXggKyA3KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRleHRCbG9jay5pbmNsdWRlcyhcIiNkaXN0cmFjdG9yOlwiKSkge1xuICAgICAgICAgICAgICAgIGRpc3RyYWN0SW5kZXggPSB0ZXh0QmxvY2suaW5kZXhPZihcIiNkaXN0cmFjdG9yOlwiKTtcbiAgICAgICAgICAgICAgICBkaXN0cmFjdEhlbHB0ZXh0ID0gdGV4dEJsb2NrLnN1YnN0cmluZyhkaXN0cmFjdEluZGV4ICsgMTIsIHRleHRCbG9jay5sZW5ndGgpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB0ZXh0QmxvY2sgPSB0ZXh0QmxvY2suc3Vic3RyaW5nKDAsIGRpc3RyYWN0SW5kZXggKyAxMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZXh0QmxvY2sgPSB0ZXh0QmxvY2sucmVwbGFjZShcbiAgICAgICAgICAgICAgICAvIyhwYWlyZWR8ZGlzdHJhY3RvcikvLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChteXN0cmluZywgYXJnMSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zW2FyZzFdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBsaW5lc1xuICAgICAgICAgICAgdmFyIGxpbmVzID0gW107XG4gICAgICAgICAgICB2YXIgc3BsaXQgPSB0ZXh0QmxvY2suc3BsaXQoXCJcXG5cIik7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNwbGl0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzcGxpdFtqXTtcbiAgICAgICAgICAgICAgICAvLyBkaXNjYXJkIGJsYW5rIHJvd3NcbiAgICAgICAgICAgICAgICBpZiAoIS9eXFxzKiQvLnRlc3QoY29kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmUgPSBuZXcgUGFyc29uc0xpbmUodGhpcywgY29kZSk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zW1wicGFpcmVkXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLmRpc3RyYWN0b3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5wYWlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5kaXN0cmFjdEhlbHB0ZXh0ID0gZGlzdHJhY3RIZWxwdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zW1wiZGlzdHJhY3RvclwiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5kaXN0cmFjdG9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUucGFpcmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLmRpc3RyYWN0SGVscHRleHQgPSBkaXN0cmFjdEhlbHB0ZXh0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5kaXN0cmFjdG9yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLnBhaXJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc29sdXRpb24ucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoJC5pbkFycmF5KGxpbmUuaW5kZW50LCBpbmRlbnRzKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZW50cy5wdXNoKGxpbmUuaW5kZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsaW5lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gQWRkIGdyb3VwV2l0aE5leHRcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbGluZXMubGVuZ3RoIC0gMTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzW2pdLmdyb3VwV2l0aE5leHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5ncm91cFdpdGhOZXh0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm9ybWFsaXplIHRoZSBpbmRlbnRzXG4gICAgICAgIGluZGVudHMgPSBpbmRlbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsaW5lID0gdGhpcy5saW5lc1tpXTtcbiAgICAgICAgICAgIGxpbmUuaW5kZW50ID0gaW5kZW50cy5pbmRleE9mKGxpbmUuaW5kZW50KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNvbHV0aW9uID0gc29sdXRpb247XG4gICAgfVxuICAgIC8vIEJhc2VkIG9uIHRoZSBibG9ja3MsIGNyZWF0ZSB0aGUgc291cmNlIGFuZCBhbnN3ZXIgYXJlYXNcbiAgICBpbml0aWFsaXplQXJlYXMoc291cmNlQmxvY2tzLCBhbnN3ZXJCbG9ja3MsIG9wdGlvbnMpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGJsb2NrcyBwcm9wZXJ0eSBhcyB0aGUgc3VtIG9mIHRoZSB0d29cbiAgICAgICAgdmFyIGJsb2NrcyA9IFtdO1xuICAgICAgICB2YXIgaSwgYmxvY2s7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VCbG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJsb2NrID0gc291cmNlQmxvY2tzW2ldO1xuICAgICAgICAgICAgYmxvY2tzLnB1c2goYmxvY2spO1xuICAgICAgICAgICAgdGhpcy5zb3VyY2VBcmVhLmFwcGVuZENoaWxkKGJsb2NrLnZpZXcpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhbnN3ZXJCbG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJsb2NrID0gYW5zd2VyQmxvY2tzW2ldO1xuICAgICAgICAgICAgYmxvY2tzLnB1c2goYmxvY2spO1xuICAgICAgICAgICAgdGhpcy5hbnN3ZXJBcmVhLmFwcGVuZENoaWxkKGJsb2NrLnZpZXcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmxvY2tzID0gYmxvY2tzO1xuICAgICAgICAvLyBJZiBwcmVzZW50LCBkaXNhYmxlIHNvbWUgYmxvY2tzXG4gICAgICAgIHZhciBkaXNhYmxlZCA9IG9wdGlvbnMuZGlzYWJsZWQ7XG4gICAgICAgIGlmIChkaXNhYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYmxvY2sgPSBibG9ja3NbaV07XG4gICAgICAgICAgICAgICAgaWYgKGRpc2FibGVkLmluY2x1ZGVzKGJsb2NrLmxpbmVzWzBdLmluZGV4KSkge1xuICAgICAgICAgICAgICAgICAgICAkKGJsb2NrLnZpZXcpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIERldGVybWluZSBob3cgbXVjaCBpbmRlbnQgc2hvdWxkIGJlIHBvc3NpYmxlIGluIHRoZSBhbnN3ZXIgYXJlYVxuICAgICAgICB2YXIgaW5kZW50ID0gMDtcbiAgICAgICAgaWYgKCF0aGlzLm5vaW5kZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmxhbmd1YWdlID09IFwibmF0dXJhbFwiKSB7XG4gICAgICAgICAgICAgICAgaW5kZW50ID0gdGhpcy5zb2x1dGlvbkluZGVudCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbmRlbnQgPSBNYXRoLm1heCgwLCB0aGlzLnNvbHV0aW9uSW5kZW50KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5kZW50ID0gaW5kZW50O1xuICAgICAgICAvLyBGb3IgcmVuZGVyaW5nLCBwbGFjZSBpbiBhbiBvbnNjcmVlbiBwb3NpdGlvblxuICAgICAgICB2YXIgaXNIaWRkZW4gPSB0aGlzLm91dGVyRGl2Lm9mZnNldFBhcmVudCA9PSBudWxsO1xuICAgICAgICB2YXIgcmVwbGFjZUVsZW1lbnQ7XG4gICAgICAgIGlmIChpc0hpZGRlbikge1xuICAgICAgICAgICAgcmVwbGFjZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgJCh0aGlzLm91dGVyRGl2KS5yZXBsYWNlV2l0aChyZXBsYWNlRWxlbWVudCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMub3V0ZXJEaXYpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucHJldHRpZnlMYW5ndWFnZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgcHJldHR5UHJpbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubGluZXNbaV0uaW5pdGlhbGl6ZVdpZHRoKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTGF5b3V0IHRoZSBhcmVhc1xuICAgICAgICB2YXIgYXJlYVdpZHRoLCBhcmVhSGVpZ2h0O1xuICAgICAgICAvLyBFc3RhYmxpc2ggdGhlIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIGRyb3BwYWJsZSBhcmVhc1xuICAgICAgICB2YXIgaXRlbSwgbWF4RnVuY3Rpb247XG4gICAgICAgIGFyZWFIZWlnaHQgPSA2O1xuICAgICAgICB2YXIgaGVpZ2h0X2FkZCA9IDA7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubnVtYmVyZWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBoZWlnaHRfYWRkID0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmxhbmd1YWdlID09IFwibmF0dXJhbFwiIHx8IHRoaXMub3B0aW9ucy5sYW5ndWFnZSA9PSBcIm1hdGhcIikge1xuICAgICAgICAgICAgYXJlYVdpZHRoID0gMzAwO1xuICAgICAgICAgICAgbWF4RnVuY3Rpb24gPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIGl0ZW0ud2lkdGgoYXJlYVdpZHRoIC0gMjIpO1xuICAgICAgICAgICAgICAgIHZhciBhZGRpdGlvbiA9IDMuODtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5vdXRlckhlaWdodCh0cnVlKSAhPSAzOClcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb24gPSAoMi4xICogKGl0ZW0ub3V0ZXJIZWlnaHQodHJ1ZSkgLSAzOCkpIC8gMjE7XG4gICAgICAgICAgICAgICAgYXJlYUhlaWdodCArPSBpdGVtLm91dGVySGVpZ2h0KHRydWUpICsgaGVpZ2h0X2FkZCAqIGFkZGl0aW9uO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFyZWFXaWR0aCA9IDMwMDtcbiAgICAgICAgICAgIC8vIFRoaXMgbWF4RnVuY3Rpb24gaXMgaG93IFBhcnNvbnMgYXJlYXMgd2lkdGggYW5kIGhlaWdodCB3ZXJlIGJlaW5nIGNhbGN1bGF0ZWQgcHJldmlvdXNseSxcbiAgICAgICAgICAgIC8vIGJ1dCBhdCBzb21lIHBvaW50IC5vdXRlckhlaWdodCBhbmQgLm91dGVyV2lkdGggc3RvcHBlZCByZXR1cm5pbmcgY29ycmVjdCB2YWx1ZXNcbiAgICAgICAgICAgIC8vIGNhdXNpbmcgbGluZXMgdG8gb3ZlcmZsb3cgYW5kIGRpc3BsYXkgYXdrd2FyZGx5LiAtIFZpbmNlbnQgUWl1IChTZXB0ZW1iZXIgMjAyMClcbiAgICAgICAgICAgIC8vIG1heEZ1bmN0aW9uID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIC8vICAgICB2YXIgYWRkaXRpb24gPSAzLjg7XG4gICAgICAgICAgICAvLyAgICAgaWYgKGl0ZW0ub3V0ZXJIZWlnaHQodHJ1ZSkgIT0gMzgpIGFkZGl0aW9uID0gMi4xO1xuICAgICAgICAgICAgLy8gICAgIGFyZWFIZWlnaHQgKz0gaXRlbS5vdXRlckhlaWdodCh0cnVlKSArIGhlaWdodF9hZGQgKiBhZGRpdGlvbjtcbiAgICAgICAgICAgIC8vICAgICBhcmVhV2lkdGggPSBNYXRoLm1heChhcmVhV2lkdGgsIGl0ZW0ub3V0ZXJXaWR0aCh0cnVlKSk7XG4gICAgICAgICAgICAvLyB9O1xuXG4gICAgICAgICAgICAvLyBUaGlzIG5ldyBtYXhGdW5jdGlvbiBpcyBob3cgUGFyc29ucyBhcmVhcyB3aWR0aCBhbmQgaGVpZ2h0IGFyZSBiZWluZyBjYWxjdWxhdGVkIG5vdyBtYW51YWxseSAtIFZpbmNlbnQgUWl1IChTZXB0ZW1iZXIgMjAyMClcbiAgICAgICAgICAgIG1heEZ1bmN0aW9uID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgYWRkaXRpb24gPSAzLjg7XG5cbiAgICAgICAgICAgICAgICAvLyBEZXRlcm1pbmUgd2hpY2ggaW5kZXggd2l0aGluIHRoZSBQYXJzb25zIGJsb2NrIEphdmFTY3JpcHQgb2JqZWN0IGNvbnRhaW5zIHRoZSB0ZXh0IGxpbmVzIGFuZCBjb25zZXF1ZW50bHkgdGhlIHBhc3NlZCB0aHJvdWdoIGRhdGEgLSBWaW5jZW50IFFpdSAoU2VwdGVtYmVyIDIwMjApXG4gICAgICAgICAgICAgICAgdmFyIGxpbmVzSW5kZXg7XG4gICAgICAgICAgICAgICAgdmFyIGxpbmVzSXRlbSA9IGl0ZW1bMF0uY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgICAgICAgbGluZXNJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzSW5kZXggPCBpdGVtWzBdLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgbGluZXNJbmRleCsrXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1bMF0uY2hpbGRyZW5bbGluZXNJbmRleF0uY2xhc3NOYW1lLmluY2x1ZGVzKFwibGluZXNcIilcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIGNhbnZhcyBhbmQgc2V0IHRoZSBwYXNzZWQgdGhyb3VnaCBmb250U2l6ZSBhbmQgZm9udEZhbWlseSBpbiBvcmRlciB0byBtZWFzdXJlIHRleHQgd2lkdGggLSBWaW5jZW50IFFpdSAoU2VwdGVtYmVyIDIwMjApXG4gICAgICAgICAgICAgICAgdmFyIGZvbnRTaXplID0gbGluZXNJdGVtW2xpbmVzSW5kZXhdLmNoaWxkcmVuWzBdLmZvbnRTaXplO1xuICAgICAgICAgICAgICAgIHZhciBmb250RmFtaWx5ID0gbGluZXNJdGVtW2xpbmVzSW5kZXhdLmNoaWxkcmVuWzBdLmZvbnRGYW1pbHk7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wQ2FudmFzQ3R4ID0gdGVtcENhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgICAgICAgdGVtcENhbnZhc0N0eC5mb250ID0gZm9udFNpemUgKyBcIiBcIiArIGZvbnRGYW1pbHk7XG5cbiAgICAgICAgICAgICAgICAvLyBJbmNyZW1lbnQgUGFyc29ucyBhcmVhIGhlaWdodCBiYXNlZCBvbiBudW1iZXIgb2YgbGluZXMgb2YgdGV4dCBpbiB0aGUgY3VycmVudCBQYXJzb25zIGJsb2NrIC0gVmluY2VudCBRaXUgKFNlcHRlbWJlciAyMDIwKVxuICAgICAgICAgICAgICAgIHZhciBzaW5nbGVIZWlnaHQgPSA0MDtcbiAgICAgICAgICAgICAgICB2YXIgYWRkaXRpb25hbEhlaWdodCA9IDIwO1xuICAgICAgICAgICAgICAgIGFyZWFIZWlnaHQgKz0gTWF0aC5jZWlsKFxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgZnV0dXJlIG1vcmUgYWNjdXJhdGUgaGVpZ2h0IGRpc3BsYXksIHRoaXMgY2FsY3VsYXRpb24gc2hvdWxkIGFsc28gYmUgY29uZGl0aW9uYWxseSBiYXNlZCBvbiBmb250RmFtaWx5XG4gICAgICAgICAgICAgICAgICAgIHNpbmdsZUhlaWdodCArXG4gICAgICAgICAgICAgICAgICAgICAgICAobGluZXNJdGVtW2xpbmVzSW5kZXhdLmNoaWxkcmVuLmxlbmd0aCAtIDEpICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsSGVpZ2h0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodF9hZGQgKiBhZGRpdGlvblxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIGxvbmdlc3QgdGV4dCBsaW5lIGluIHRoZSBjdXJyZW50IFBhcnNvbnMgYmxvY2sgYW5kIGNhbGN1bGF0ZSBpdHMgd2lkdGggLSBWaW5jZW50IFFpdSAoU2VwdGVtYmVyIDIwMjApXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW1MZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIHBpeGVsc1BlckluZGVudDtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZW50O1xuICAgICAgICAgICAgICAgIHZhciBtYXhJbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgdmFyIG1heElubmVyTGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGhMaW1pdCA9IDQ3NTtcbiAgICAgICAgICAgICAgICB2YXIgbG9uZ0NvdW50ID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGluZXNJdGVtW2xpbmVzSW5kZXhdLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHBpeGVsc1BlckluZGVudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lc0l0ZW1bbGluZXNJbmRleF0uY2hpbGRyZW5baV0ucGl4ZWxzUGVySW5kZW50O1xuICAgICAgICAgICAgICAgICAgICBpbmRlbnQgPSBsaW5lc0l0ZW1bbGluZXNJbmRleF0uY2hpbGRyZW5baV0uaW5kZW50O1xuICAgICAgICAgICAgICAgICAgICBpdGVtTGVuZ3RoID0gTWF0aC5jZWlsKFxuICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWxzUGVySW5kZW50ICogaW5kZW50ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wQ2FudmFzQ3R4Lm1lYXN1cmVUZXh0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lc0l0ZW1bbGluZXNJbmRleF0uY2hpbGRyZW5baV0uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKS53aWR0aFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBsb25nQ291bnQgKz0gTWF0aC5mbG9vcihpdGVtTGVuZ3RoIC8gKHdpZHRoTGltaXQgLSAyOSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbUxlbmd0aCA+IG1heElubmVyTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhJbm5lclRleHQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzSXRlbVtsaW5lc0luZGV4XS5jaGlsZHJlbltpXS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhJbm5lckxlbmd0aCA9IGl0ZW1MZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXJlYVdpZHRoID0gTWF0aC5tYXgoYXJlYVdpZHRoLCBtYXhJbm5lckxlbmd0aCArIDQwKTtcbiAgICAgICAgICAgICAgICAvLyBTZXQgd2lkdGggbGltaXQgYW5kIGRldGVybWluZSBob3cgbXVjaCBhZGRpdGlvbmFsIGhlaWdodCBpcyBuZWVkZWQgdG8gYWNjb21tb2RhdGUgdGhlIGZvcmNlZCB0ZXh0IG92ZXJmbG93IC0gVmluY2VudCBRaXUgKFNlcHRlbWJlciAyMDIwKVxuICAgICAgICAgICAgICAgIGlmIChhcmVhV2lkdGggPiB3aWR0aExpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZWFXaWR0aCA9IHdpZHRoTGltaXQ7XG4gICAgICAgICAgICAgICAgICAgIGFyZWFIZWlnaHQgKz0gbG9uZ0NvdW50ICogYWRkaXRpb25hbEhlaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG1heEZ1bmN0aW9uKCQoYmxvY2tzW2ldLnZpZXcpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFyZWFXaWR0aCA9IGFyZWFXaWR0aDtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5udW1iZXJlZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYXJlYVdpZHRoICs9IDI1O1xuICAgICAgICAgICAgLy9hcmVhSGVpZ2h0ICs9IChibG9ja3MubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyArIDQwIHRvIGFyZWFIZWlnaHQgdG8gcHJvdmlkZSBzb21lIGFkZGl0aW9uYWwgYnVmZmVyIGluIGNhc2UgYW55IHRleHQgb3ZlcmZsb3cgc3RpbGwgaGFwcGVucyAtIFZpbmNlbnQgUWl1IChTZXB0ZW1iZXIgMjAyMClcbiAgICAgICAgdGhpcy5hcmVhSGVpZ2h0ID0gYXJlYUhlaWdodCArIDQwO1xuICAgICAgICAkKHRoaXMuc291cmNlQXJlYSkuY3NzKHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmFyZWFXaWR0aCArIDIsXG4gICAgICAgICAgICBoZWlnaHQ6IGFyZWFIZWlnaHQsXG4gICAgICAgIH0pO1xuICAgICAgICAkKHRoaXMuYW5zd2VyQXJlYSkuY3NzKHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLm9wdGlvbnMucGl4ZWxzUGVySW5kZW50ICogaW5kZW50ICsgdGhpcy5hcmVhV2lkdGggKyAyLFxuICAgICAgICAgICAgaGVpZ2h0OiBhcmVhSGVpZ2h0LFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGluZGVudCA+IDAgJiYgaW5kZW50IDw9IDQpIHtcbiAgICAgICAgICAgICQodGhpcy5hbnN3ZXJBcmVhKS5hZGRDbGFzcyhcImFuc3dlclwiICsgaW5kZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQodGhpcy5hbnN3ZXJBcmVhKS5hZGRDbGFzcyhcImFuc3dlclwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJbml0aWFsaXplIHBhaXJlZCBkaXN0cmFjdG9yIGRlY29yYXRpb25cbiAgICAgICAgdmFyIGJpbnMgPSBbXTtcbiAgICAgICAgdmFyIGJpbiA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5saW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGxpbmUgPSB0aGlzLmxpbmVzW2ldO1xuICAgICAgICAgICAgaWYgKGxpbmUuYmxvY2soKSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoYmluLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYmlucy5wdXNoKGJpbik7XG4gICAgICAgICAgICAgICAgICAgIGJpbiA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYmluLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFsaW5lLmdyb3VwV2l0aE5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgYmlucy5wdXNoKGJpbik7XG4gICAgICAgICAgICAgICAgICAgIGJpbiA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgcGFpcmVkQmlucyA9IFtdO1xuICAgICAgICB2YXIgbGluZU51bWJlcnMgPSBbXTtcbiAgICAgICAgdmFyIHBhaXJlZERpdnMgPSBbXTtcbiAgICAgICAgdmFyIGo7XG4gICAgICAgIGlmICh0aGlzLnBhaXJEaXN0cmFjdG9ycyB8fCAhdGhpcy5vcHRpb25zLmFkYXB0aXZlKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSBiaW5zLmxlbmd0aCAtIDE7IGkgPiAtMTsgaS0tKSB7XG4gICAgICAgICAgICAgICAgYmluID0gYmluc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoYmluWzBdLnBhaXJlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgYWxsIGluIGJpbiB0byBsaW5lIG51bWJlcnNcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gYmluLmxlbmd0aCAtIDE7IGogPiAtMTsgai0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVycy51bnNoaWZ0KGJpbltqXS5pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGluZU51bWJlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGFsbCBpbiBiaW4gdG8gbGluZSBudW1iZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSBiaW4ubGVuZ3RoIC0gMTsgaiA+IC0xOyBqLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVycy51bnNoaWZ0KGJpbltqXS5pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWlyZWRCaW5zLnVuc2hpZnQobGluZU51bWJlcnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlyZWRCaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhaXJlZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgJChwYWlyZWREaXYpLmFkZENsYXNzKFwicGFpcmVkXCIpO1xuICAgICAgICAgICAgICAgICQocGFpcmVkRGl2KS5odG1sKFxuICAgICAgICAgICAgICAgICAgICBcIjxzcGFuIGlkPSAnc3QnIHN0eWxlID0gJ3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IGZvbnQtd2VpZ2h0OiBib2xkJz5vcns8L3NwYW4+XCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHBhaXJlZERpdnMucHVzaChwYWlyZWREaXYpO1xuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlQXJlYS5hcHBlbmRDaGlsZChwYWlyZWREaXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFpcmVkQmlucyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFpcmVkQmlucyA9IHBhaXJlZEJpbnM7XG4gICAgICAgIHRoaXMucGFpcmVkRGl2cyA9IHBhaXJlZERpdnM7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubnVtYmVyZWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEJsb2NrTGFiZWxzKHNvdXJjZUJsb2Nrcy5jb25jYXQoYW5zd2VyQmxvY2tzKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlIHRoZSB2aWV3XG4gICAgICAgIHRoaXMuc3RhdGUgPSB1bmRlZmluZWQ7IC8vIG5lZWRzIHRvIGJlIGhlcmUgZm9yIGxvYWRpbmcgZnJvbSBzdG9yYWdlXG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgICAgICAvLyBQdXQgYmFjayBpbnRvIHRoZSBvZmZzY3JlZW4gcG9zaXRpb25cbiAgICAgICAgaWYgKGlzSGlkZGVuKSB7XG4gICAgICAgICAgICAkKHJlcGxhY2VFbGVtZW50KS5yZXBsYWNlV2l0aCh0aGlzLm91dGVyRGl2KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBNYWtlIGJsb2NrcyBpbnRlcmFjdGl2ZSAoYm90aCBkcmFnLWFuZC1kcm9wIGFuZCBrZXlib2FyZClcbiAgICBpbml0aWFsaXplSW50ZXJhY3Rpdml0eSgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ibG9ja3NbaV0uaW5pdGlhbGl6ZUludGVyYWN0aXZpdHkoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRpYWxpemVUYWJJbmRleCgpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmxhbmd1YWdlID09IFwibmF0dXJhbFwiIHx8IHRoaXMub3B0aW9ucy5sYW5ndWFnZSA9PSBcIm1hdGhcIikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBNYXRoSmF4ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgTWF0aEpheC5IdWIuUXVldWUoW1wiVHlwZXNldFwiLCBNYXRoSmF4Lkh1YiwgdGhpcy5vdXRlckRpdl0pOyAgICBcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gTWFrZSBvbmUgYmxvY2sgYmUga2V5Ym9hcmQgYWNjZXNzaWJsZVxuICAgIGluaXRpYWxpemVUYWJJbmRleCgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJsb2NrID0gdGhpcy5ibG9ja3NbaV07XG4gICAgICAgICAgICBpZiAoYmxvY2suZW5hYmxlZCgpKSB7XG4gICAgICAgICAgICAgICAgYmxvY2subWFrZVRhYkluZGV4KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT09PSBTRVJWRVIgQ09NTVVOSUNBVElPTiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gICAgLy8gUmV0dXJuIHRoZSBhcmd1bWVudCB0aGF0IGlzIG5ld2VyIGJhc2VkIG9uIHRoZSB0aW1lc3RhbXBcbiAgICBuZXdlckRhdGEoZGF0YUEsIGRhdGFCKSB7XG4gICAgICAgIHZhciBkYXRlQSA9IGRhdGFBLnRpbWVzdGFtcDtcbiAgICAgICAgdmFyIGRhdGVCID0gZGF0YUIudGltZXN0YW1wO1xuICAgICAgICBpZiAoZGF0ZUEgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YUI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGVCID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFBO1xuICAgICAgICB9XG4gICAgICAgIGRhdGVBID0gdGhpcy5kYXRlRnJvbVRpbWVzdGFtcChkYXRlQSk7XG4gICAgICAgIGRhdGVCID0gdGhpcy5kYXRlRnJvbVRpbWVzdGFtcChkYXRlQik7XG4gICAgICAgIGlmIChkYXRlQSA+IGRhdGVCKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YUE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YUI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQmFzZWQgb24gdGhlIGRhdGEsIGxvYWRcbiAgICBsb2FkRGF0YShkYXRhKSB7XG4gICAgICAgIHZhciBzb3VyY2VIYXNoID0gZGF0YS5zb3VyY2U7XG4gICAgICAgIGlmIChzb3VyY2VIYXNoID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gbWFpbnRhaW4gYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAgICAgICAgIHNvdXJjZUhhc2ggPSBkYXRhLnRyYXNoO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhbnN3ZXJIYXNoID0gZGF0YS5hbnN3ZXI7XG4gICAgICAgIHZhciBhZGFwdGl2ZUhhc2ggPSBkYXRhLmFkYXB0aXZlO1xuICAgICAgICB2YXIgb3B0aW9ucztcbiAgICAgICAgaWYgKGFkYXB0aXZlSGFzaCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnNGcm9tSGFzaChhZGFwdGl2ZUhhc2gpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLm5vaW5kZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMubm9pbmRlbnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmNoZWNrQ291bnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja0NvdW50ID0gb3B0aW9ucy5jaGVja0NvdW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmhhc1NvbHZlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmhhc1NvbHZlZCA9IG9wdGlvbnMuaGFzU29sdmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHNvdXJjZUhhc2ggPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICBhbnN3ZXJIYXNoID09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgYW5zd2VySGFzaC5sZW5ndGggPT0gMVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUFyZWFzKHRoaXMuYmxvY2tzRnJvbVNvdXJjZSgpLCBbXSwgb3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVBcmVhcyhcbiAgICAgICAgICAgICAgICB0aGlzLmJsb2Nrc0Zyb21IYXNoKHNvdXJjZUhhc2gpLFxuICAgICAgICAgICAgICAgIHRoaXMuYmxvY2tzRnJvbUhhc2goYW5zd2VySGFzaCksXG4gICAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuZ3JhZGUgPSB0aGlzLmdyYWRlci5ncmFkZSgpO1xuICAgICAgICAgICAgdGhpcy5jb3JyZWN0ID0gdGhpcy5ncmFkZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTdGFydCB0aGUgaW50ZXJmYWNlXG4gICAgICAgIGlmICh0aGlzLm5lZWRzUmVpbml0aWFsaXphdGlvbiAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplSW50ZXJhY3Rpdml0eSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFJldHVybiB3aGF0IGlzIHN0b3JlZCBpbiBsb2NhbCBzdG9yYWdlXG4gICAgbG9jYWxEYXRhKCkge1xuICAgICAgICB2YXIgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuc3RvcmFnZUlkKTtcbiAgICAgICAgaWYgKGRhdGEgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmNoYXJBdCgwKSA9PSBcIntcIikge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRhID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRhID0ge307XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIC8vIFJ1bmVzdG9uZUJhc2U6IFNlbnQgd2hlbiB0aGUgc2VydmVyIGhhcyBkYXRhXG4gICAgcmVzdG9yZUFuc3dlcnMoc2VydmVyRGF0YSkge1xuICAgICAgICB0aGlzLmxvYWREYXRhKHNlcnZlckRhdGEpO1xuICAgIH1cbiAgICAvLyBSdW5lc3RvbmVCYXNlOiBMb2FkIHdoYXQgaXMgaW4gbG9jYWwgc3RvcmFnZVxuICAgIGNoZWNrTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICBpZiAodGhpcy5ncmFkZXJhY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWREYXRhKHRoaXMubG9jYWxEYXRhKCkpO1xuICAgIH1cbiAgICAvLyBSdW5lc3RvbmVCYXNlOiBTZXQgdGhlIHN0YXRlIG9mIHRoZSBwcm9ibGVtIGluIGxvY2FsIHN0b3JhZ2VcbiAgICBzZXRMb2NhbFN0b3JhZ2UoZGF0YSkge1xuICAgICAgICB2YXIgdG9TdG9yZTtcbiAgICAgICAgaWYgKGRhdGEgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0b1N0b3JlID0ge1xuICAgICAgICAgICAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2VIYXNoKCksXG4gICAgICAgICAgICAgICAgYW5zd2VyOiB0aGlzLmFuc3dlckhhc2goKSxcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGFkYXB0aXZlSGFzaCA9IHRoaXMuYWRhcHRpdmVIYXNoKCk7XG4gICAgICAgICAgICBpZiAoYWRhcHRpdmVIYXNoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0b1N0b3JlLmFkYXB0aXZlID0gYWRhcHRpdmVIYXNoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9TdG9yZSA9IGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5zdG9yYWdlSWQsIEpTT04uc3RyaW5naWZ5KHRvU3RvcmUpKTtcbiAgICB9XG4gICAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT09PSBMT0dHSU5HID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gICAgLy8gTG9nIHRoZSBpbnRlcmFjdGlvbiB3aXRoIHRoZSBwcm9ibGVtIHRvIHRoZSBzZXJ2ZXI6XG4gICAgLy8gICBzdGFydDogdGhlIHVzZXIgc3RhcnRlZCBpbnRlcmFjdGluZyB3aXRoIHRoaXMgcHJvYmxlbVxuICAgIC8vICAgbW92ZTogdGhlIHVzZXIgbW92ZWQgYSBibG9jayB0byBhIG5ldyBwb3NpdGlvblxuICAgIC8vICAgcmVzZXQ6IHRoZSByZXNldCBidXR0b24gd2FzIHByZXNzZWRcbiAgICAvLyAgIHJlbW92ZURpc3RyYWN0b3I6IFwiSGVscCBNZVwiIHJlbW92ZWQgYSBkaXN0cmFjdG9yXG4gICAgLy8gICByZW1vdmVJbmRlbnRhdGlvbjogXCJIZWxwIE1lXCIgcmVtb3ZlZCBpbmRlbnRhdGlvblxuICAgIC8vICAgY29tYmluZUJsb2NrczogXCJIZWxwIE1lXCIgY29tYmluZWQgYmxvY2tzXG4gICAgbG9nTW92ZShhY3Rpdml0eSkge1xuICAgICAgICB2YXIgZXZlbnQgPSB7XG4gICAgICAgICAgICBldmVudDogXCJwYXJzb25zTW92ZVwiLFxuICAgICAgICAgICAgZGl2X2lkOiB0aGlzLmRpdmlkLFxuICAgICAgICAgICAgc3RvcmFnZWlkOiBzdXBlci5sb2NhbFN0b3JhZ2VLZXkoKSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGFjdCA9IGFjdGl2aXR5ICsgXCJ8XCIgKyB0aGlzLnNvdXJjZUhhc2goKSArIFwifFwiICsgdGhpcy5hbnN3ZXJIYXNoKCk7XG4gICAgICAgIHZhciBhZGFwdGl2ZUhhc2ggPSB0aGlzLmFkYXB0aXZlSGFzaCgpO1xuICAgICAgICBpZiAoYWRhcHRpdmVIYXNoICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBhY3QgPSBhY3QgKyBcInxcIiArIGFkYXB0aXZlSGFzaDtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5hY3QgPSBhY3Q7XG4gICAgICAgIHRoaXMubG9nQm9va0V2ZW50KGV2ZW50KTtcbiAgICB9XG4gICAgLy8gTG9nIHRoZSBhbnN3ZXIgdG8gdGhlIHByb2JsZW1cbiAgICAvLyAgIGNvcnJlY3Q6IFRoZSBhbnN3ZXIgZ2l2ZW4gbWF0Y2hlcyB0aGUgc29sdXRpb25cbiAgICAvLyAgIGluY29ycmVjdCo6IFRoZSBhbnN3ZXIgaXMgd3JvbmcgZm9yIHZhcmlvdXMgcmVhc29uc1xuICAgIGxvZ0N1cnJlbnRBbnN3ZXIoKSB7XG4gICAgICAgIHZhciBldmVudCA9IHtcbiAgICAgICAgICAgIGV2ZW50OiBcInBhcnNvbnNcIixcbiAgICAgICAgICAgIGRpdl9pZDogdGhpcy5kaXZpZCxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGFuc3dlckhhc2ggPSB0aGlzLmFuc3dlckhhc2goKTtcbiAgICAgICAgZXZlbnQuYW5zd2VyID0gYW5zd2VySGFzaDtcbiAgICAgICAgdmFyIHNvdXJjZUhhc2ggPSB0aGlzLnNvdXJjZUhhc2goKTtcbiAgICAgICAgZXZlbnQuc291cmNlID0gc291cmNlSGFzaDtcbiAgICAgICAgdmFyIGFjdCA9IHNvdXJjZUhhc2ggKyBcInxcIiArIGFuc3dlckhhc2g7XG4gICAgICAgIHZhciBhZGFwdGl2ZUhhc2ggPSB0aGlzLmFkYXB0aXZlSGFzaCgpO1xuICAgICAgICBpZiAoYWRhcHRpdmVIYXNoICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBldmVudC5hZGFwdGl2ZSA9IGFkYXB0aXZlSGFzaDtcbiAgICAgICAgICAgIGFjdCA9IGFjdCArIFwifFwiICsgYWRhcHRpdmVIYXNoO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdyYWRlID09IFwiY29ycmVjdFwiKSB7XG4gICAgICAgICAgICBhY3QgPSBcImNvcnJlY3R8XCIgKyBhY3Q7XG4gICAgICAgICAgICBldmVudC5jb3JyZWN0ID0gXCJUXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3QgPSBcImluY29ycmVjdHxcIiArIGFjdDtcbiAgICAgICAgICAgIGV2ZW50LmNvcnJlY3QgPSBcIkZcIjtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5hY3QgPSBhY3Q7XG4gICAgICAgIHRoaXMubG9nQm9va0V2ZW50KGV2ZW50KTtcbiAgICB9XG4gICAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT09PSBBQ0NFU1NJTkcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gICAgLy8gQW5zd2VyIHRoZSBoYXNoIG9mIHRoZSBhZGFwdGl2ZSBzdGF0ZVxuICAgIGFkYXB0aXZlSGFzaCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuYWRhcHRpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoYXNoID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBibG9jayA9IHRoaXMuYmxvY2tzW2ldO1xuICAgICAgICAgICAgaWYgKCFibG9jay5lbmFibGVkKCkpIHtcbiAgICAgICAgICAgICAgICBoYXNoLnB1c2goXCJkXCIgKyBibG9jay5saW5lc1swXS5pbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubm9pbmRlbnQgIT09IHRoaXMub3B0aW9ucy5ub2luZGVudCkge1xuICAgICAgICAgICAgaGFzaC5wdXNoKFwiaVwiKTtcbiAgICAgICAgfVxuICAgICAgICBoYXNoLnB1c2goXCJjXCIgKyB0aGlzLmNoZWNrQ291bnQpO1xuICAgICAgICBpZiAodGhpcy5oYXNTb2x2ZWQpIHtcbiAgICAgICAgICAgIGhhc2gucHVzaChcInNcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhc2guam9pbihcIi1cIik7XG4gICAgfVxuICAgIC8vIENyZWF0ZSBvcHRpb25zIGZvciBjcmVhdGluZyBibG9ja3MgYmFzZWQgb24gYSBoYXNoXG4gICAgb3B0aW9uc0Zyb21IYXNoKGhhc2gpIHtcbiAgICAgICAgdmFyIHNwbGl0O1xuICAgICAgICBpZiAoaGFzaCA9PT0gXCItXCIgfHwgaGFzaCA9PT0gXCJcIiB8fCBoYXNoID09PSBudWxsKSB7XG4gICAgICAgICAgICBzcGxpdCA9IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3BsaXQgPSBoYXNoLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3B0aW9ucyA9IHt9O1xuICAgICAgICB2YXIgZGlzYWJsZWQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGxpdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHNwbGl0W2ldO1xuICAgICAgICAgICAgaWYgKGtleVswXSA9PSBcImlcIikge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubm9pbmRlbnQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXlbMF0gPT0gXCJkXCIpIHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlZC5wdXNoKHBhcnNlSW50KGtleS5zbGljZSgxKSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXlbMF0gPT0gXCJzXCIpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmhhc1NvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleVswXSA9PSBcImNcIikge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuY2hlY2tDb3VudCA9IHBhcnNlSW50KGtleS5zbGljZSgxKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpc2FibGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG4gICAgLy8gQW5zd2VyIHRoZSBoYXNoIG9mIHRoZSBhbnN3ZXIgYXJlYVxuICAgIGFuc3dlckhhc2goKSB7XG4gICAgICAgIHZhciBoYXNoID0gW107XG4gICAgICAgIHZhciBibG9ja3MgPSB0aGlzLmFuc3dlckJsb2NrcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaGFzaC5wdXNoKGJsb2Nrc1tpXS5oYXNoKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiLVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGhhc2guam9pbihcIi1cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQW5zd2VyIHRoZSBoYXNoIG9mIHRoZSBzb3VyY2UgYXJlYVxuICAgIHNvdXJjZUhhc2goKSB7XG4gICAgICAgIHZhciBoYXNoID0gW107XG4gICAgICAgIHZhciBibG9ja3MgPSB0aGlzLnNvdXJjZUJsb2NrcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaGFzaC5wdXNoKGJsb2Nrc1tpXS5oYXNoKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiLVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGhhc2guam9pbihcIi1cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSW50ZXItcHJvYmxlbSBhZGFwdGl2ZSBjaGFuZ2VzXG4gICAgLy8gQmFzZWQgb24gdGhlIHJlY2VudEF0dGVtcHRzLCByZW1vdmUgZGlzdHJhY3RvcnMsIGFkZCBpbmRlbnQsIGNvbWJpbmUgYmxvY2tzXG4gICAgYWRhcHRCbG9ja3MoaW5wdXQpIHtcbiAgICAgICAgdmFyIGJsb2NrcyA9IFtdO1xuICAgICAgICB2YXIgZGlzdHJhY3RvcnMgPSBbXTtcbiAgICAgICAgdmFyIGJsb2NrO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBibG9jayA9IGlucHV0W2ldO1xuICAgICAgICAgICAgaWYgKGJsb2NrLmlzRGlzdHJhY3RvcigpKSB7XG4gICAgICAgICAgICAgICAgZGlzdHJhY3RvcnMucHVzaChibG9jayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJsb2Nrcy5wdXNoKGJsb2NrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlY2VudEF0dGVtcHRzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXG4gICAgICAgICAgICB0aGlzLmFkYXB0aXZlSWQgKyBcInJlY2VudEF0dGVtcHRzXCJcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHRoaXMucmVjZW50QXR0ZW1wdHMgPT0gdW5kZWZpbmVkIHx8IHRoaXMucmVjZW50QXR0ZW1wdHMgPT0gXCJOYU5cIikge1xuICAgICAgICAgICAgdGhpcy5yZWNlbnRBdHRlbXB0cyA9IDM7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxhc3Rlc3RBdHRlbXB0Q291bnQgPSB0aGlzLnJlY2VudEF0dGVtcHRzO1xuICAgICAgICB2YXIgbkJsb2NrcyA9IGJsb2Nrcy5sZW5ndGg7XG4gICAgICAgIHZhciBuQmxvY2tzVG9Db21iaW5lID0gMDtcbiAgICAgICAgdmFyIG5EaXN0cmFjdG9ycyA9IGRpc3RyYWN0b3JzLmxlbmd0aDtcbiAgICAgICAgdmFyIG5Ub1JlbW92ZSA9IDA7XG4gICAgICAgIHRoaXMucGFpckRpc3RyYWN0b3JzID0gdHJ1ZTtcbiAgICAgICAgdmFyIGdpdmVJbmRlbnRhdGlvbiA9IGZhbHNlO1xuICAgICAgICBpZiAobGFzdGVzdEF0dGVtcHRDb3VudCA8IDIpIHtcbiAgICAgICAgICAgIC8vIDEgVHJ5XG4gICAgICAgICAgICB0aGlzLnBhaXJEaXN0cmFjdG9ycyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5saW1pdERpc3RyYWN0b3JzID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAobGFzdGVzdEF0dGVtcHRDb3VudCA8IDQpIHtcbiAgICAgICAgICAgIC8vIDItMyBUcmllc1xuICAgICAgICAgICAgLy8gRG8gbm90aGluZyB0aGV5IGFyZSBkb2luZyBub3JtYWxcbiAgICAgICAgICAgIHRoaXMucGFpckRpc3RyYWN0b3JzID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXN0ZXN0QXR0ZW1wdENvdW50IDwgNikge1xuICAgICAgICAgICAgLy8gNC01IFRyaWVzXG4gICAgICAgICAgICAvLyBwYWlyIGRpc3RyYWN0b3JzXG4gICAgICAgICAgICB0aGlzLnBhaXJEaXN0cmFjdG9ycyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAobGFzdGVzdEF0dGVtcHRDb3VudCA8IDgpIHtcbiAgICAgICAgICAgIC8vIDYtNyBUcmllc1xuICAgICAgICAgICAgLy8gUmVtb3ZlIDUwJSBvZiBkaXN0cmFjdG9yc1xuICAgICAgICAgICAgblRvUmVtb3ZlID0gMC41ICogbkRpc3RyYWN0b3JzO1xuICAgICAgICAgICAgdGhpcy5wYWlyRGlzdHJhY3RvcnMgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gOCsgVHJpZXNcbiAgICAgICAgICAgIC8vIFJlbW92ZSBhbGwgb2YgZGlzdHJhY3RvcnNcbiAgICAgICAgICAgIG5Ub1JlbW92ZSA9IG5EaXN0cmFjdG9ycztcbiAgICAgICAgICAgIHRoaXMucGFpckRpc3RyYWN0b3JzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvKlxuICAgICAgICBlbHNlIGlmKGxhc3Rlc3RBdHRlbXB0Q291bnQgPCAxMikgeyAvLzEwLTExXG4gICAgICAgICAgICAvLyBSZW1vdmUgYWxsIGRpc3RyYWN0b3JzIGFuZCBnaXZlIGluZGVudGF0aW9uXG4gICAgICAgICAgICBuVG9SZW1vdmUgPSBuRGlzdHJhY3RvcnM7XG4gICAgICAgICAgICBnaXZlSW5kZW50YXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wYWlyRGlzdHJhY3RvcnMgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYobGFzdGVzdEF0dGVtcHRDb3VudCA8IDE0KSB7IC8vIDEyLTEzIFRyaWVzXG4gICAgICAgICAgICAvLyBSZW1vdmUgYWxsIG9mIGRpc3RyYWN0b3JzXG4gICAgICAgICAgICAvLyBnaXZlIGluZGVudGF0aW9uXG4gICAgICAgICAgICAvLyByZWR1Y2UgcHJvYmxlbSB0byAzLzQgc2l6ZVxuICAgICAgICAgICAgZ2l2ZUluZGVudGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIG5Ub1JlbW92ZSA9IG5EaXN0cmFjdG9ycztcbiAgICAgICAgICAgIG5CbG9ja3NUb0NvbWJpbmUgPSAuMjUgKiBuQmxvY2tzO1xuICAgICAgICAgICAgdGhpcy5wYWlyRGlzdHJhY3RvcnMgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgeyAvLyA+PSAxNCBUcmllc1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGFsbCBvZiBkaXN0cmFjdG9yc1xuICAgICAgICAgICAgLy8gZ2l2ZSBpbmRlbnRhdGlvblxuICAgICAgICAgICAgLy8gcmVkdWNlIHByb2JsZW0gdG8gMS8yIHNpemVcbiAgICAgICAgICAgIGdpdmVJbmRlbnRhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICBuVG9SZW1vdmUgPSBuRGlzdHJhY3RvcnM7XG4gICAgICAgICAgICBuQmxvY2tzVG9Db21iaW5lID0gLjUgKiBuQmxvY2tzO1xuICAgICAgICAgICAgdGhpcy5wYWlyRGlzdHJhY3RvcnMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgICovXG4gICAgICAgIG5CbG9ja3NUb0NvbWJpbmUgPSBNYXRoLm1pbihuQmxvY2tzVG9Db21iaW5lLCBuQmxvY2tzIC0gMyk7XG4gICAgICAgIC8vIE5ldmVyIGNvbWJpbmUgc28gd2hlcmUgdGhlcmUgYXJlIGxlc3MgdGhhbiB0aHJlZSBibG9ja3MgbGVmdFxuICAgICAgICAvLyBSZW1vdmUgZGlzdHJhY3RvcnNcbiAgICAgICAgZGlzdHJhY3RvcnMgPSB0aGlzLnNodWZmbGVkKGRpc3RyYWN0b3JzKTtcbiAgICAgICAgZGlzdHJhY3RvcnMgPSBkaXN0cmFjdG9ycy5zbGljZSgwLCBuVG9SZW1vdmUpO1xuICAgICAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYmxvY2sgPSBpbnB1dFtpXTtcbiAgICAgICAgICAgIGlmICghYmxvY2suaXNEaXN0cmFjdG9yKCkpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChibG9jayk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCQuaW5BcnJheShibG9jaywgZGlzdHJhY3RvcnMpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goYmxvY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vdmFyIG91dHB1dCA9IGlucHV0O1xuICAgICAgICBpZiAoZ2l2ZUluZGVudGF0aW9uKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dHB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG91dHB1dFtpXS5hZGRJbmRlbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5kZW50ID0gMDtcbiAgICAgICAgICAgIHRoaXMubm9pbmRlbnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbWJpbmUgYmxvY2tzXG4gICAgICAgIHZhciBzb2x1dGlvbiA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5saW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBvdXRwdXQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAob3V0cHV0W2pdLmxpbmVzWzBdLmluZGV4ID09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgc29sdXRpb24ucHVzaChvdXRwdXRbal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5CbG9ja3NUb0NvbWJpbmU7IGkrKykge1xuICAgICAgICAgICAgLy8gY29tYmluZSBvbmUgc2V0IG9mIGJsb2Nrc1xuICAgICAgICAgICAgdmFyIGJlc3QgPSAtMTA7XG4gICAgICAgICAgICB2YXIgY29tYmluZUluZGV4ID0gLTEwO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHNvbHV0aW9uLmxlbmd0aCAtIDE7IGorKykge1xuICAgICAgICAgICAgICAgIGJsb2NrID0gc29sdXRpb25bal07XG4gICAgICAgICAgICAgICAgdmFyIG5leHQgPSBzb2x1dGlvbltqICsgMV07XG4gICAgICAgICAgICAgICAgdmFyIHJhdGluZyA9IDEwIC0gYmxvY2subGluZXMubGVuZ3RoIC0gbmV4dC5saW5lcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIGJsb2NrSW5kZW50ID0gYmxvY2subWluaW11bUxpbmVJbmRlbnQoKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dEluZGVudCA9IG5leHQubWluaW11bUxpbmVJbmRlbnQoKTtcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2tJbmRlbnQgPT0gbmV4dEluZGVudCkge1xuICAgICAgICAgICAgICAgICAgICByYXRpbmcgKz0gMjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJsb2NrSW5kZW50ID4gbmV4dEluZGVudCkge1xuICAgICAgICAgICAgICAgICAgICByYXRpbmcgLT0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBibG9jay5saW5lc1tibG9jay5saW5lcy5sZW5ndGggLSAxXS5pbmRlbnQgPT1cbiAgICAgICAgICAgICAgICAgICAgbmV4dC5saW5lc1swXS5pbmRlbnRcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmF0aW5nICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyYXRpbmcgPj0gYmVzdCkge1xuICAgICAgICAgICAgICAgICAgICBiZXN0ID0gcmF0aW5nO1xuICAgICAgICAgICAgICAgICAgICBjb21iaW5lSW5kZXggPSBqO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJsb2NrID0gc29sdXRpb25bY29tYmluZUluZGV4XTtcbiAgICAgICAgICAgIG5leHQgPSBzb2x1dGlvbltjb21iaW5lSW5kZXggKyAxXTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuZXh0LmxpbmVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgYmxvY2suYWRkTGluZShuZXh0LmxpbmVzW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBuZXdTb2x1dGlvbiA9IFtdO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHNvbHV0aW9uLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGogIT09IGNvbWJpbmVJbmRleCArIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3U29sdXRpb24ucHVzaChzb2x1dGlvbltqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNvbHV0aW9uID0gbmV3U29sdXRpb247XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVvcmRlclxuICAgICAgICB2YXIgY29tYmluZWRPdXRwdXQgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG91dHB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHNvbHV0aW9uLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG91dHB1dFtpXS5saW5lc1swXS5pbmRleCA9PSBzb2x1dGlvbltqXS5saW5lc1swXS5pbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBjb21iaW5lZE91dHB1dC5wdXNoKHNvbHV0aW9uW2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbWJpbmVkT3V0cHV0O1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYW4gYXJyYXkgb2YgY29kZSBibG9ja3MgYmFzZWQgb24gd2hhdCBpcyBzcGVjaWZpZWQgaW4gdGhlIHByb2JsZW1cbiAgICBibG9ja3NGcm9tU291cmNlKCkge1xuICAgICAgICB2YXIgdW5vcmRlcmVkQmxvY2tzID0gW107XG4gICAgICAgIHZhciBvcmlnaW5hbEJsb2NrcyA9IFtdO1xuICAgICAgICB2YXIgYmxvY2tzID0gW107XG4gICAgICAgIHZhciBsaW5lcyA9IFtdO1xuICAgICAgICB2YXIgYmxvY2ssIGxpbmUsIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsaW5lID0gdGhpcy5saW5lc1tpXTtcbiAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICBpZiAoIWxpbmUuZ3JvdXBXaXRoTmV4dCkge1xuICAgICAgICAgICAgICAgIHVub3JkZXJlZEJsb2Nrcy5wdXNoKG5ldyBQYXJzb25zQmxvY2sodGhpcywgbGluZXMpKTtcbiAgICAgICAgICAgICAgICBsaW5lcyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9yaWdpbmFsQmxvY2tzID0gdW5vcmRlcmVkQmxvY2tzO1xuICAgICAgICAvLyBUcmltIHRoZSBkaXN0cmFjdG9yc1xuICAgICAgICB2YXIgcmVtb3ZlZEJsb2NrcyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1heGRpc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIG1heGRpc3QgPSB0aGlzLm9wdGlvbnMubWF4ZGlzdDtcbiAgICAgICAgICAgIHZhciBkaXN0cmFjdG9ycyA9IFtdO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHVub3JkZXJlZEJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGJsb2NrID0gdW5vcmRlcmVkQmxvY2tzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChibG9jay5saW5lc1swXS5kaXN0cmFjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RyYWN0b3JzLnB1c2goYmxvY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYXhkaXN0IDwgZGlzdHJhY3RvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZGlzdHJhY3RvcnMgPSB0aGlzLnNodWZmbGVkKGRpc3RyYWN0b3JzKTtcbiAgICAgICAgICAgICAgICBkaXN0cmFjdG9ycyA9IGRpc3RyYWN0b3JzLnNsaWNlKDAsIG1heGRpc3QpO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB1bm9yZGVyZWRCbG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2sgPSB1bm9yZGVyZWRCbG9ja3NbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9jay5saW5lc1swXS5kaXN0cmFjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJC5pbkFycmF5KGJsb2NrLCBkaXN0cmFjdG9ycykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrcy5wdXNoKGJsb2NrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZEJsb2Nrcy5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tzLnB1c2goYmxvY2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVub3JkZXJlZEJsb2NrcyA9IGJsb2NrcztcbiAgICAgICAgICAgICAgICBibG9ja3MgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5LCBzZXQgdGhlIHBhaXJEaXN0cmFjdG9ycyB2YWx1ZSBiZWZvcmUgYmxvY2tzIGdldCBzaHVmZmxlZCAtIFdpbGxpYW0gTGkgKEF1Z3VzdCAyMDIwKVxuICAgICAgICBpZiAodGhpcy5yZWNlbnRBdHRlbXB0cyA8IDIpIHtcbiAgICAgICAgICAgIC8vIDEgVHJ5XG4gICAgICAgICAgICB0aGlzLnBhaXJEaXN0cmFjdG9ycyA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wYWlyRGlzdHJhY3RvcnMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vcmRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBTaHVmZmxlLCByZXNwZWN0aW5nIHBhaXJlZCBkaXN0cmFjdG9yc1xuICAgICAgICAgICAgdmFyIGNodW5rcyA9IFtdLFxuICAgICAgICAgICAgICAgIGNodW5rID0gW107XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdW5vcmRlcmVkQmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYmxvY2sgPSB1bm9yZGVyZWRCbG9ja3NbaV07XG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrLmxpbmVzWzBdLnBhaXJlZCAmJiB0aGlzLnBhaXJEaXN0cmFjdG9ycykge1xuICAgICAgICAgICAgICAgICAgICAvLyBXaWxsaWFtIExpIChBdWd1c3QgMjAyMClcbiAgICAgICAgICAgICAgICAgICAgY2h1bmsucHVzaChibG9jayk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2h1bmsgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgY2h1bmsucHVzaChibG9jayk7XG4gICAgICAgICAgICAgICAgICAgIGNodW5rcy5wdXNoKGNodW5rKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaHVua3MgPSB0aGlzLnNodWZmbGVkKGNodW5rcyk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2h1bmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2h1bmsgPSBjaHVua3NbaV07XG4gICAgICAgICAgICAgICAgaWYgKGNodW5rLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2h1ZmZsZSBwYWlyZWQgZGlzdHJhY3RvcnNcbiAgICAgICAgICAgICAgICAgICAgY2h1bmsgPSB0aGlzLnNodWZmbGVkKGNodW5rKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGNodW5rLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja3MucHVzaChjaHVua1tqXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBibG9ja3MucHVzaChjaHVua1swXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gT3JkZXIgYWNjb3JkaW5nIHRvIG9yZGVyIHNwZWNpZmllZFxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5vcmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGJsb2NrID0gb3JpZ2luYWxCbG9ja3NbdGhpcy5vcHRpb25zLm9yZGVyW2ldXTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgJC5pbkFycmF5KHRoaXMub3B0aW9ucy5vcmRlcltpXSwgcmVtb3ZlZEJsb2NrcykgPCAwXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2Nrcy5wdXNoKGJsb2NrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYWlyRGlzdHJhY3RvcnMgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFkYXB0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmxpbWl0RGlzdHJhY3RvcnMgPSB0cnVlO1xuICAgICAgICAgICAgYmxvY2tzID0gdGhpcy5hZGFwdEJsb2NrcyhibG9ja3MpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmxpbWl0RGlzdHJhY3RvcnMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmVtb3ZlZEJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9yZGVyID09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gTWF0aC5yYW5kb20oMCwgYmxvY2tzLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQuaW5BcnJheShyZW1vdmVkQmxvY2tzW2ldLCB0aGlzLm9wdGlvbnMub3JkZXIpO1xuICAgICAgICAgICAgICAgICAgICBibG9ja3Muc3BsaWNlKGluZGV4LCAwLCBvcmlnaW5hbEJsb2Nrc1tyZW1vdmVkQmxvY2tzW2ldXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBhaXJEaXN0cmFjdG9ycyAmJiB0aGlzLm9wdGlvbnMub3JkZXIgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvL21vdmUgcGFpcnMgdG9nZXRoZXJcbiAgICAgICAgICAgIC8vR28gdGhyb3VnaCBhcnJheSBsb29raW5nIGZvciBkaXRyYWN0b3IgYW5kIGl0cyBwYWlyXG4gICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgb3JpZ2luYWxCbG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsQmxvY2tzW2ldLmxpbmVzWzBdLnBhaXJlZCAmJlxuICAgICAgICAgICAgICAgICAgICAkLmluQXJyYXkob3JpZ2luYWxCbG9ja3NbaV0sIGJsb2NrcykgPj0gMFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaiA9IGk7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICgkLmluQXJyYXkob3JpZ2luYWxCbG9ja3NbaiAtIDFdLCBibG9ja3MpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmluZCB0aGUgcGFpcmVkIGRpc3RyYWN0b3Igb3Igc29sdXRpb24gYmxvY2sgaXQgd2lsbCBiZSBuZXh0IHRvXG4gICAgICAgICAgICAgICAgICAgICAgICBqLS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4VG8gPSAkLmluQXJyYXkob3JpZ2luYWxCbG9ja3NbaiAtIDFdLCBibG9ja3MpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXhGcm9tID0gJC5pbkFycmF5KG9yaWdpbmFsQmxvY2tzW2ldLCBibG9ja3MpO1xuICAgICAgICAgICAgICAgICAgICBibG9ja3Muc3BsaWNlKGluZGV4RnJvbSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGJsb2Nrcy5zcGxpY2UoaW5kZXhUbywgMCwgb3JpZ2luYWxCbG9ja3NbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmxvY2tzO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYSBjb2RlYmxvY2sgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgaGFzaFxuICAgIGJsb2NrRnJvbUhhc2goaGFzaCkge1xuICAgICAgICB2YXIgc3BsaXQgPSBoYXNoLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgdmFyIGxpbmVzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3BsaXQubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBsaW5lcy5wdXNoKHRoaXMubGluZXNbc3BsaXRbaV1dKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYmxvY2sgPSBuZXcgUGFyc29uc0Jsb2NrKHRoaXMsIGxpbmVzKTtcbiAgICAgICAgaWYgKHRoaXMubm9pbmRlbnQpIHtcbiAgICAgICAgICAgIGJsb2NrLmluZGVudCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBibG9jay5pbmRlbnQgPSBOdW1iZXIoc3BsaXRbc3BsaXQubGVuZ3RoIC0gMV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBibG9jaztcbiAgICB9XG4gICAgLy8gUmV0dXJuIGFuIGFycmF5IG9mIGNvZGVibG9ja3MgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgaGFzaFxuICAgIGJsb2Nrc0Zyb21IYXNoKGhhc2gpIHtcbiAgICAgICAgdmFyIHNwbGl0O1xuICAgICAgICBpZiAoaGFzaCA9PT0gXCItXCIgfHwgaGFzaCA9PT0gXCJcIiB8fCBoYXNoID09PSBudWxsKSB7XG4gICAgICAgICAgICBzcGxpdCA9IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3BsaXQgPSBoYXNoLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYmxvY2tzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3BsaXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJsb2Nrcy5wdXNoKHRoaXMuYmxvY2tGcm9tSGFzaChzcGxpdFtpXSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYWRhcHRpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkYXB0QmxvY2tzKGJsb2Nrcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYmxvY2tzO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFJldHVybiBhIGJsb2NrIG9iamVjdCBieSB0aGUgZnVsbCBpZCBpbmNsdWRpbmcgaWQgcHJlZml4XG4gICAgZ2V0QmxvY2tCeUlkKGlkKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBibG9jayA9IHRoaXMuYmxvY2tzW2ldO1xuICAgICAgICAgICAgaWYgKGJsb2NrLnZpZXcuaWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGFycmF5IG9mIGNvZGVibG9ja3MgdGhhdCBhcmUgdGhlIHNvbHV0aW9uXG4gICAgc29sdXRpb25CbG9ja3MoKSB7XG4gICAgICAgIHZhciBzb2x1dGlvbkJsb2NrcyA9IFtdO1xuICAgICAgICB2YXIgc29sdXRpb25MaW5lcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5saW5lc1tpXS5kaXN0cmFjdG9yKSB7XG4gICAgICAgICAgICAgICAgc29sdXRpb25MaW5lcy5wdXNoKHRoaXMubGluZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBibG9jayA9IHNvbHV0aW9uTGluZXNbMF0uYmxvY2soKTtcbiAgICAgICAgc29sdXRpb25CbG9ja3MucHVzaChibG9jayk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc29sdXRpb25MaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG5leHRCbG9jayA9IHNvbHV0aW9uTGluZXNbaV0uYmxvY2soKTtcbiAgICAgICAgICAgIGlmIChibG9jayAhPT0gbmV4dEJsb2NrKSB7XG4gICAgICAgICAgICAgICAgYmxvY2sgPSBuZXh0QmxvY2s7XG4gICAgICAgICAgICAgICAgc29sdXRpb25CbG9ja3MucHVzaChibG9jayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNvbHV0aW9uQmxvY2tzO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYXJyYXkgb2YgY29kZWJsb2NrcyBiYXNlZCBvbiB3aGF0IGlzIGluIHRoZSBzb3VyY2UgZmllbGRcbiAgICBzb3VyY2VCbG9ja3MoKSB7XG4gICAgICAgIHZhciBzb3VyY2VCbG9ja3MgPSBbXTtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5zb3VyY2VBcmVhLmNoaWxkTm9kZXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKCQoY2hpbGQpLmhhc0NsYXNzKFwiYmxvY2tcIikpIHtcbiAgICAgICAgICAgICAgICBzb3VyY2VCbG9ja3MucHVzaCh0aGlzLmdldEJsb2NrQnlJZChjaGlsZC5pZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzb3VyY2VCbG9ja3M7XG4gICAgfVxuICAgIC8vIFJldHVybiBhcnJheSBvZiBlbmFibGVkIGNvZGVibG9ja3MgYmFzZWQgb24gd2hhdCBpcyBpbiB0aGUgc291cmNlIGZpZWxkXG4gICAgZW5hYmxlZFNvdXJjZUJsb2NrcygpIHtcbiAgICAgICAgdmFyIGFsbCA9IHRoaXMuc291cmNlQmxvY2tzKCk7XG4gICAgICAgIHZhciBlbmFibGVkID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYmxvY2sgPSBhbGxbaV07XG4gICAgICAgICAgICBpZiAoYmxvY2suZW5hYmxlZCgpKSB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZC5wdXNoKGJsb2NrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW5hYmxlZDtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGFycmF5IG9mIGNvZGVibG9ja3MgYmFzZWQgb24gd2hhdCBpcyBpbiB0aGUgYW5zd2VyIGZpZWxkXG4gICAgYW5zd2VyQmxvY2tzKCkge1xuICAgICAgICB2YXIgYW5zd2VyQmxvY2tzID0gW107XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuYW5zd2VyQXJlYS5jaGlsZE5vZGVzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYmxvY2sgPSB0aGlzLmdldEJsb2NrQnlJZChjaGlsZHJlbltpXS5pZCk7XG4gICAgICAgICAgICBpZiAoYmxvY2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGFuc3dlckJsb2Nrcy5wdXNoKGJsb2NrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYW5zd2VyQmxvY2tzO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYXJyYXkgb2YgZW5hYmxlZCBjb2RlYmxvY2tzIGJhc2VkIG9uIHdoYXQgaXMgaW4gdGhlIGFuc3dlciBmaWVsZFxuICAgIGVuYWJsZWRBbnN3ZXJCbG9ja3MoKSB7XG4gICAgICAgIHZhciBhbGwgPSB0aGlzLmFuc3dlckJsb2NrcygpO1xuICAgICAgICB2YXIgZW5hYmxlZCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJsb2NrID0gYWxsW2ldO1xuICAgICAgICAgICAgaWYgKGJsb2NrLmVuYWJsZWQoKSkge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQucHVzaChibG9jayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVuYWJsZWQ7XG4gICAgfVxuICAgIC8vIFJldHVybiBhcnJheSBvZiBjb2RlbGluZXMgYmFzZWQgb24gd2hhdCBpcyBpbiB0aGUgYW5zd2VyIGZpZWxkXG4gICAgYW5zd2VyTGluZXMoKSB7XG4gICAgICAgIHZhciBhbnN3ZXJMaW5lcyA9IFtdO1xuICAgICAgICB2YXIgYmxvY2tzID0gdGhpcy5hbnN3ZXJCbG9ja3MoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBibG9jayA9IGJsb2Nrc1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYmxvY2subGluZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBhbnN3ZXJMaW5lcy5wdXNoKGJsb2NrLmxpbmVzW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYW5zd2VyTGluZXM7XG4gICAgfVxuICAgIC8vIEdvIHVwIHRoZSBoaWVyYXJjaHkgdW50aWwgeW91IGdldCB0byBhIGJsb2NrOyByZXR1cm4gdGhhdCBibG9jayBlbGVtZW50XG4gICAgZ2V0QmxvY2tGb3IoZWxlbWVudCkge1xuICAgICAgICB2YXIgY2hlY2sgPSBlbGVtZW50O1xuICAgICAgICB3aGlsZSAoIWNoZWNrLmNsYXNzTGlzdC5jb250YWlucyhcImJsb2NrXCIpKSB7XG4gICAgICAgICAgICBjaGVjayA9IGNoZWNrLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gdGhlIG1heGltdW0gaW5kZW50IGZvciB0aGUgc29sdXRpb25cbiAgICBzb2x1dGlvbkluZGVudCgpIHtcbiAgICAgICAgdmFyIGluZGVudCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBibG9jayA9IHRoaXMuYmxvY2tzW2ldO1xuICAgICAgICAgICAgaW5kZW50ID0gTWF0aC5tYXgoaW5kZW50LCBibG9jay5zb2x1dGlvbkluZGVudCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZW50O1xuICAgIH1cbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09IEFDVElPTiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgICAvLyBUaGUgXCJDaGVjayBNZVwiIGJ1dHRvbiB3YXMgcHJlc3NlZC5cbiAgICBjaGVja0N1cnJlbnRBbnN3ZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5oYXNTb2x2ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tDb3VudCsrO1xuICAgICAgICAgICAgdGhpcy5jbGVhckZlZWRiYWNrKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5hZGFwdGl2ZUlkID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRpdmVJZCA9IHRoaXMuc3RvcmFnZUlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVE9ETyAtIHJlbmRlcmluZyBmZWVkYmFjayBpcyBidXJpZWQgaW4gdGhlIGdyYWRlci5ncmFkZSBtZXRob2QuXG4gICAgICAgICAgICAvLyB0byBkaXNhYmxlIGZlZWRiYWNrIHNldCB0aGlzLmdyYWRlci5zaG93ZmVlZGJhY2sgYm9vbGVhblxuICAgICAgICAgICAgdGhpcy5ncmFkZXIuc2hvd2ZlZWRiYWNrID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmdyYWRlID0gdGhpcy5ncmFkZXIuZ3JhZGUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyYWRlID09IFwiY29ycmVjdFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNTb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgJCh0aGlzLmNoZWNrQnV0dG9uKS5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5hZGFwdGl2ZUlkICsgXCJTb2x2ZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWNlbnRBdHRlbXB0cyA9IHRoaXMuY2hlY2tDb3VudDtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkYXB0aXZlSWQgKyBcInJlY2VudEF0dGVtcHRzXCIsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjZW50QXR0ZW1wdHNcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGl2ZUlkICsgdGhpcy5kaXZpZCArIFwiQ291bnRcIixcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQ291bnRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnNldExvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgICAgLy8gaWYgbm90IHNvbHZlZCBhbmQgbm90IHRvbyBzaG9ydCB0aGVuIGNoZWNrIGlmIHNob3VsZCBwcm92aWRlIGhlbHBcbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNTb2x2ZWQgJiYgdGhpcy5ncmFkZSAhPT0gXCJpbmNvcnJlY3RUb29TaG9ydFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FuSGVscCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGNvdW50IHRoZSBhdHRlbXB0IGlmIHRoZSBhbnN3ZXIgaXMgZGlmZmVyZW50ICh0byBwcmV2ZW50IGdhbWluZylcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFuc3dlckhhc2ggPSB0aGlzLmFuc3dlckhhc2goKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFzdEFuc3dlckhhc2ggIT09IGFuc3dlckhhc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubnVtRGlzdGluY3QrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdEFuc3dlckhhc2ggPSBhbnN3ZXJIYXNoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRpbWUgdG8gb2ZmZXIgaGVscFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5udW1EaXN0aW5jdCA9PSAzICYmICF0aGlzLmdvdEhlbHApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCQuaTE4bihcIm1zZ19wYXJzb25faGVscF9pbmZvXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfSAvLyBlbmQgaWZcbiAgICAgICAgICAgICAgICB9IC8vIGVuZCBpZiBjYW4gaGVscFxuICAgICAgICAgICAgfSAvLyBlbmQgaWYgbm90IHNvbHZlZFxuICAgICAgICB9IC8vIGVuZCBvdXRlciBpZiBub3Qgc29sdmVkXG4gICAgfVxuXG4gICAgcmVuZGVyRmVlZGJhY2soKSB7XG4gICAgICAgIHRoaXMuZ3JhZGVyLnNob3dmZWVkYmFjayA9IHRydWU7XG4gICAgICAgIHRoaXMuZ3JhZGUgPSB0aGlzLmdyYWRlci5ncmFkZXJTdGF0ZTtcbiAgICAgICAgdmFyIGZlZWRiYWNrQXJlYTtcbiAgICAgICAgdmFyIGFuc3dlckFyZWEgPSAkKHRoaXMuYW5zd2VyQXJlYSk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2hvd2ZlZWRiYWNrID09PSB0cnVlKSB7XG4gICAgICAgICAgICBmZWVkYmFja0FyZWEgPSAkKHRoaXMubWVzc2FnZURpdik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmZWVkYmFja0FyZWEgPSAkKFwiI2RvZXNub3RleGlzdFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdyYWRlID09PSBcImNvcnJlY3RcIikge1xuICAgICAgICAgICAgYW5zd2VyQXJlYS5hZGRDbGFzcyhcImNvcnJlY3RcIik7XG4gICAgICAgICAgICBmZWVkYmFja0FyZWEuZmFkZUluKDEwMCk7XG4gICAgICAgICAgICBmZWVkYmFja0FyZWEuYXR0cihcImNsYXNzXCIsIFwiYWxlcnQgYWxlcnQtaW5mb1wiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrQ291bnQgPiAxKSB7XG4gICAgICAgICAgICAgICAgZmVlZGJhY2tBcmVhLmh0bWwoXG4gICAgICAgICAgICAgICAgICAgICQuaTE4bihcIm1zZ19wYXJzb25fY29ycmVjdFwiLCB0aGlzLmNoZWNrQ291bnQpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmVlZGJhY2tBcmVhLmh0bWwoJC5pMThuKFwibXNnX3BhcnNvbl9jb3JyZWN0X2ZpcnN0X3RyeVwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ncmFkZSA9PT0gXCJpbmNvcnJlY3RUb29TaG9ydFwiKSB7XG4gICAgICAgICAgICAvLyB0b28gbGl0dGxlIGNvZGVcbiAgICAgICAgICAgIGFuc3dlckFyZWEuYWRkQ2xhc3MoXCJpbmNvcnJlY3RcIik7XG4gICAgICAgICAgICBmZWVkYmFja0FyZWEuZmFkZUluKDUwMCk7XG4gICAgICAgICAgICBmZWVkYmFja0FyZWEuYXR0cihcImNsYXNzXCIsIFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIpO1xuICAgICAgICAgICAgZmVlZGJhY2tBcmVhLmh0bWwoJC5pMThuKFwibXNnX3BhcnNvbl90b29fc2hvcnRcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ3JhZGUgPT09IFwiaW5jb3JyZWN0SW5kZW50XCIpIHtcbiAgICAgICAgICAgIHZhciBpbmNvcnJlY3RCbG9ja3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ncmFkZXIuaW5kZW50TGVmdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGJsb2NrID0gdGhpcy5ncmFkZXIuaW5kZW50TGVmdFtpXS5ibG9jaygpO1xuICAgICAgICAgICAgICAgIGlmIChpbmNvcnJlY3RCbG9ja3MuaW5kZXhPZihibG9jaykgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5jb3JyZWN0QmxvY2tzLnB1c2goYmxvY2spO1xuICAgICAgICAgICAgICAgICAgICAkKGJsb2NrLnZpZXcpLmFkZENsYXNzKFwiaW5kZW50TGVmdFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ3JhZGVyLmluZGVudFJpZ2h0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYmxvY2sgPSB0aGlzLmdyYWRlci5pbmRlbnRSaWdodFtpXS5ibG9jaygpO1xuICAgICAgICAgICAgICAgIGlmIChpbmNvcnJlY3RCbG9ja3MuaW5kZXhPZihibG9jaykgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5jb3JyZWN0QmxvY2tzLnB1c2goYmxvY2spO1xuICAgICAgICAgICAgICAgICAgICAkKGJsb2NrLnZpZXcpLmFkZENsYXNzKFwiaW5kZW50UmlnaHRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmVlZGJhY2tBcmVhLmZhZGVJbig1MDApO1xuICAgICAgICAgICAgZmVlZGJhY2tBcmVhLmF0dHIoXCJjbGFzc1wiLCBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiKTtcbiAgICAgICAgICAgIGlmIChpbmNvcnJlY3RCbG9ja3MubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICBmZWVkYmFja0FyZWEuaHRtbCgkLmkxOG4oXCJtc2dfcGFyc29uX3dyb25nX2luZGVudFwiKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZlZWRiYWNrQXJlYS5odG1sKCQuaTE4bihcIm1zZ19wYXJzb25fd3JvbmdfaW5kZW50c1wiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ncmFkZSA9PT0gXCJpbmNvcnJlY3RNb3ZlQmxvY2tzXCIpIHtcbiAgICAgICAgICAgIHZhciBhbnN3ZXJCbG9ja3MgPSB0aGlzLmFuc3dlckJsb2NrcygpO1xuICAgICAgICAgICAgdmFyIGluU29sdXRpb24gPSBbXTtcbiAgICAgICAgICAgIHZhciBpblNvbHV0aW9uSW5kZXhlcyA9IFtdO1xuICAgICAgICAgICAgdmFyIG5vdEluU29sdXRpb24gPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW5zd2VyQmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJsb2NrID0gYW5zd2VyQmxvY2tzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuc29sdXRpb24uaW5kZXhPZihibG9jay5saW5lc1swXSk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vdEluU29sdXRpb24ucHVzaChibG9jayk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5Tb2x1dGlvbi5wdXNoKGJsb2NrKTtcbiAgICAgICAgICAgICAgICAgICAgaW5Tb2x1dGlvbkluZGV4ZXMucHVzaChpbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGxpc0luZGV4ZXMgPSB0aGlzLmdyYWRlci5pbnZlcnNlTElTSW5kaWNlcyhpblNvbHV0aW9uSW5kZXhlcyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc0luZGV4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBub3RJblNvbHV0aW9uLnB1c2goaW5Tb2x1dGlvbltsaXNJbmRleGVzW2ldXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbnN3ZXJBcmVhLmFkZENsYXNzKFwiaW5jb3JyZWN0XCIpO1xuICAgICAgICAgICAgZmVlZGJhY2tBcmVhLmZhZGVJbig1MDApO1xuICAgICAgICAgICAgZmVlZGJhY2tBcmVhLmF0dHIoXCJjbGFzc1wiLCBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dmZWVkYmFjayA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm90SW5Tb2x1dGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAkKG5vdEluU29sdXRpb25baV0udmlldykuYWRkQ2xhc3MoXCJpbmNvcnJlY3RQb3NpdGlvblwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmZWVkYmFja0FyZWEuaHRtbCgkLmkxOG4oXCJtc2dfcGFyc29uX3dyb25nX29yZGVyXCIpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgID09PT0gQURBUFRJVkUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAgIC8vIEluaXRpYWxpemUgdGhpcyBwcm9ibGVtIGFzIGFkYXB0aXZlXG4gICAgLy8gICAgaGVscENvdW50ID0gbnVtYmVyIG9mIGNoZWNrcyBiZWZvcmUgaGVscCBpcyBnaXZlbiAobmVnYXRpdmUpXG4gICAgLy8gICAgY2FuSGVscCA9IGJvb2xlYW4gYXMgdG8gd2hldGhlciBoZWxwIGNhbiBiZSBwcm92aWRlZFxuICAgIC8vICAgIGNoZWNrQ291bnQgPSBob3cgbWFueSB0aW1lcyBpdCBoYXMgYmVlbiBjaGVja2VkIGJlZm9yZSBjb3JyZWN0XG4gICAgLy8gICAgdXNlclJhdGluZyA9IDAuLjEwMCBob3cgZ29vZCB0aGUgcGVyc29uIGlzIGF0IHNvbHZpbmcgcHJvYmxlbXNcbiAgICBpbml0aWFsaXplQWRhcHRpdmUoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRpdmVJZCA9IHN1cGVyLmxvY2FsU3RvcmFnZUtleSgpO1xuICAgICAgICB0aGlzLmNhbkhlbHAgPSB0cnVlO1xuICAgICAgICAvL3RoaXMuaGVscENvdW50ID0gLTM7IC8vIE51bWJlciBvZiBjaGVja3MgYmVmb3JlIGhlbHAgaXMgb2ZmZXJlZFxuICAgICAgICB0aGlzLmNoZWNrQ291bnQgPSAwO1xuICAgICAgICB0aGlzLm51bURpc3RpbmN0ID0gMDsgLy8gbnVtYmVyIG9mIGRpc3RpbmN0IHNvbHV0aW9uIGF0dGVtcHRzIChkaWZmZXJlbnQgZnJvbSBwcmV2aW91cylcbiAgICAgICAgdGhpcy5nb3RIZWxwID0gZmFsc2U7XG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIHVzZXJSYXRpbmdcbiAgICAgICAgdmFyIHN0b3JhZ2VQcm9ibGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5hZGFwdGl2ZUlkICsgXCJQcm9ibGVtXCIpO1xuICAgICAgICBpZiAoc3RvcmFnZVByb2JsZW0gPT0gdGhpcy5kaXZpZCkge1xuICAgICAgICAgICAgLy8gQWxyZWFkeSBpbiB0aGlzIHByb2JsZW1cbiAgICAgICAgICAgIHRoaXMuY2hlY2tDb3VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFxuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRpdmVJZCArIHRoaXMuZGl2aWQgKyBcIkNvdW50XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja0NvdW50ID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tDb3VudCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICB2YXIgY291bnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgICAgICAgICAgIHRoaXMuYWRhcHRpdmVJZCArIHRoaXMuZGl2aWQgKyBcIkNvdW50XCJcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGNvdW50ID09IHVuZGVmaW5lZCB8fCBjb3VudCA9PSBcIk5hTlwiKSB7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGVja0NvdW50ID0gY291bnQ7XG4gICAgICAgIHRoaXMucmVjZW50QXR0ZW1wdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgICAgICAgICAgIHRoaXMuYWRhcHRpdmVJZCArIFwicmVjZW50QXR0ZW1wdHNcIlxuICAgICAgICApO1xuICAgICAgICBpZiAodGhpcy5yZWNlbnRBdHRlbXB0cyA9PSB1bmRlZmluZWQgfHwgdGhpcy5yZWNlbnRBdHRlbXB0cyA9PSBcIk5hTlwiKSB7XG4gICAgICAgICAgICB0aGlzLnJlY2VudEF0dGVtcHRzID0gMztcbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgIHRoaXMuYWRhcHRpdmVJZCArIFwicmVjZW50QXR0ZW1wdHNcIixcbiAgICAgICAgICAgIHRoaXMucmVjZW50QXR0ZW1wdHNcbiAgICAgICAgKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5hZGFwdGl2ZUlkICsgXCJQcm9ibGVtXCIsIHRoaXMuZGl2aWQpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgIHRoaXMuYWRhcHRpdmVJZCArIHRoaXMuZGl2aWQgKyBcIkNvdW50XCIsXG4gICAgICAgICAgICB0aGlzLmNoZWNrQ291bnRcbiAgICAgICAgKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5hZGFwdGl2ZUlkICsgXCJTb2x2ZWRcIiwgZmFsc2UpO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYSBib29sZWFuIG9mIHdoZXRoZXIgdGhlIHVzZXIgbXVzdCBkZWFsIHdpdGggaW5kZW50YXRpb25cbiAgICB1c2VzSW5kZW50YXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLm5vaW5kZW50IHx8IHRoaXMuc29sdXRpb25JbmRlbnQoKSA9PSAwKSB7XG4gICAgICAgICAgICAvLyB3YXMgJCh0aGlzLmFuc3dlckFyZWEpLmhhc0NsYXNzKFwiYW5zd2VyXCIpIC0gYmplIGNoYW5nZWRcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEZpbmQgYSBkaXN0cmFjdG9yIHRvIHJlbW92ZSB0byBtYWtlIHRoZSBwcm9ibGVtIGVhc2llclxuICAgIC8vICAqIHRyeSBmaXJzdCBpbiB0aGUgYW5zd2VyIGFyZWFcbiAgICAvLyAgKiBpZiBub3QsIHRyeSB0aGUgc291cmNlIGFyZWFcbiAgICAvLyAgKiBpZiBub3QsIHJldHVybiB1bmRlZmluZWRcbiAgICBkaXN0cmFjdG9yVG9SZW1vdmUoKSB7XG4gICAgICAgIHZhciBibG9ja3MgPSB0aGlzLmVuYWJsZWRBbnN3ZXJCbG9ja3MoKTtcbiAgICAgICAgdmFyIGJsb2NrO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYmxvY2sgPSBibG9ja3NbaV07XG4gICAgICAgICAgICBpZiAoYmxvY2suaXNEaXN0cmFjdG9yKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYmxvY2tzID0gdGhpcy5lbmFibGVkU291cmNlQmxvY2tzKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBibG9jayA9IGJsb2Nrc1tpXTtcbiAgICAgICAgICAgIGlmIChibG9jay5pc0Rpc3RyYWN0b3IoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gdGhlIG51bWJlciBvZiBibG9ja3MgdGhhdCBleGlzdFxuICAgIG51bWJlck9mQmxvY2tzKGZJbmNsdWRlRGlzdHJhY3RvcnMgPSB0cnVlKSB7XG4gICAgICAgIHZhciBudW1iZXJPZkJsb2NrcyA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLmJsb2Nrc1tpXS5lbmFibGVkKCkgJiZcbiAgICAgICAgICAgICAgICAoZkluY2x1ZGVEaXN0cmFjdG9ycyB8fCAhdGhpcy5ibG9ja3NbaV0uaXNEaXN0cmFjdG9yKCkpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBudW1iZXJPZkJsb2NrcyArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudW1iZXJPZkJsb2NrcztcbiAgICB9XG4gICAgLy8gUmVtb3ZlIHRoaXMgZGlzdHJhY3RvcnMgdG8gbWFrZSB0aGUgcHJvYmxlbSBlYXNpZXJcbiAgICByZW1vdmVEaXN0cmFjdG9yKGJsb2NrKSB7XG4gICAgICAgIC8vIEFsZXJ0IHRoZSB1c2VyIHRvIHdoYXQgaXMgaGFwcGVuaW5nXG4gICAgICAgIHZhciBmZWVkYmFja0FyZWEgPSAkKHRoaXMubWVzc2FnZURpdik7XG4gICAgICAgIGZlZWRiYWNrQXJlYS5mYWRlSW4oNTAwKTtcbiAgICAgICAgZmVlZGJhY2tBcmVhLmF0dHIoXCJjbGFzc1wiLCBcImFsZXJ0IGFsZXJ0LWluZm9cIik7XG4gICAgICAgIGZlZWRiYWNrQXJlYS5odG1sKCQuaTE4bihcIm1zZ19wYXJzb25fbm90X3NvbHV0aW9uXCIpKTtcbiAgICAgICAgLy8gU3RvcCBhYmlsaXR5IHRvIHNlbGVjdFxuICAgICAgICBpZiAoYmxvY2subGluZXNbMF0uZGlzdHJhY3RIZWxwdGV4dCkge1xuICAgICAgICAgICAgYmxvY2sudmlldy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZ2dsZVwiLFwidG9vbHRpcFwiKTtcbiAgICAgICAgICAgIGJsb2NrLnZpZXcuc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgYmxvY2subGluZXNbMF0uZGlzdHJhY3RIZWxwdGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgYmxvY2suZGlzYWJsZSgpO1xuICAgICAgICAvLyBJZiBpbiBhbnN3ZXIgYXJlYSwgbW92ZSB0byBzb3VyY2UgYXJlYVxuICAgICAgICBpZiAoIWJsb2NrLmluU291cmNlQXJlYSgpKSB7XG4gICAgICAgICAgICB2YXIgc291cmNlUmVjdCA9IHRoaXMuc291cmNlQXJlYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIHZhciBzdGFydFggPSBibG9jay5wYWdlWENlbnRlcigpIC0gMTtcbiAgICAgICAgICAgIHZhciBzdGFydFkgPSBibG9jay5wYWdlWUNlbnRlcigpO1xuICAgICAgICAgICAgdmFyIGVuZFggPVxuICAgICAgICAgICAgICAgIHNvdXJjZVJlY3QubGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldCArIHNvdXJjZVJlY3Qud2lkdGggLyAyO1xuICAgICAgICAgICAgdmFyIGVuZFkgPVxuICAgICAgICAgICAgICAgIHNvdXJjZVJlY3QudG9wICtcbiAgICAgICAgICAgICAgICB3aW5kb3cucGFnZVlPZmZzZXQgK1xuICAgICAgICAgICAgICAgIGJsb2NrLnZpZXcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC8gMjtcbiAgICAgICAgICAgIHZhciBzbGlkZVVuZGVyQmxvY2sgPSBibG9jay5zbGlkZVVuZGVyQmxvY2soKTtcbiAgICAgICAgICAgIGlmIChzbGlkZVVuZGVyQmxvY2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGVuZFkgKz1cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVVbmRlckJsb2NrLnZpZXcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICsgMjA7XG4gICAgICAgICAgICAgICAgZW5kWSArPSBwYXJzZUludCgkKHNsaWRlVW5kZXJCbG9jay52aWV3KS5jc3MoXCJ0b3BcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgJChibG9jay52aWV3KS5jc3Moe1xuICAgICAgICAgICAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IFwiIzAwMFwiLFxuICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNmZmZcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJChibG9jay52aWV3KS5hbmltYXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMS4wLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguc3FydChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdyhlbmRZIC0gc3RhcnRZLCAyKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgucG93KGVuZFggLSBzdGFydFgsIDIpXG4gICAgICAgICAgICAgICAgICAgICAgICApICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgIDUwMCxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubW92aW5nID0gYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmluZ1ggPSBzdGFydFg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmluZ1kgPSBzdGFydFk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZVZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uIChhLCBwLCBjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmluZ1ggPSBzdGFydFggKiAoMSAtIHApICsgZW5kWCAqIHA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmluZ1kgPSBzdGFydFkgKiAoMSAtIHApICsgZW5kWSAqIHA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZVZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGF0Lm1vdmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGF0Lm1vdmluZ1g7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhhdC5tb3ZpbmdZO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGVWaWV3KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKGJsb2NrLnZpZXcpLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IFwiI2QzZDNkM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjZWZlZmVmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChibG9jay52aWV3KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChibG9jay52aWV3KS5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoYmxvY2sudmlldykuY3NzKHtcbiAgICAgICAgICAgICAgICBcImJvcmRlci1jb2xvclwiOiBcIiMwMDBcIixcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjZmZmXCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoYmxvY2sudmlldykuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMyxcbiAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjogXCIjZDNkM2QzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNlZmVmZWZcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKGJsb2NrLnZpZXcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gR2l2ZSB0aGUgdXNlciB0aGUgaW5kZW50YXRpb25cbiAgICByZW1vdmVJbmRlbnRhdGlvbigpIHtcbiAgICAgICAgLy8gQWxlcnQgdGhlIHVzZXIgdG8gd2hhdCBpcyBoYXBwZW5pbmdcbiAgICAgICAgdmFyIGZlZWRiYWNrQXJlYSA9ICQodGhpcy5tZXNzYWdlRGl2KTtcbiAgICAgICAgZmVlZGJhY2tBcmVhLmZhZGVJbig1MDApO1xuICAgICAgICBmZWVkYmFja0FyZWEuYXR0cihcImNsYXNzXCIsIFwiYWxlcnQgYWxlcnQtaW5mb1wiKTtcbiAgICAgICAgZmVlZGJhY2tBcmVhLmh0bWwoJC5pMThuKFwibXNnX3BhcnNvbl9wcm92aWRlZF9pbmRlbnRcIikpO1xuICAgICAgICAvLyBNb3ZlIGFuZCByZXNpemUgYmxvY2tzXG4gICAgICAgIHZhciBibG9ja1dpZHRoID0gMjAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBsaW5lID0gdGhpcy5saW5lc1tpXTtcbiAgICAgICAgICAgIHZhciBleHBhbmRlZFdpZHRoID1cbiAgICAgICAgICAgICAgICBsaW5lLndpZHRoICsgbGluZS5pbmRlbnQgKiB0aGlzLm9wdGlvbnMucGl4ZWxzUGVySW5kZW50ICsgMzA7XG4gICAgICAgICAgICBibG9ja1dpZHRoID0gTWF0aC5tYXgoYmxvY2tXaWR0aCwgZXhwYW5kZWRXaWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5udW1iZXJlZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGJsb2NrV2lkdGggKz0gMjU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcmVhV2lkdGggPSBibG9ja1dpZHRoICsgMjI7XG4gICAgICAgIHZhciBibG9jaywgaW5kZW50O1xuICAgICAgICB2YXIgc291cmNlQmxvY2tzID0gdGhpcy5zb3VyY2VCbG9ja3MoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2VCbG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJsb2NrID0gc291cmNlQmxvY2tzW2ldO1xuICAgICAgICAgICAgaW5kZW50ID0gYmxvY2suc29sdXRpb25JbmRlbnQoKTtcbiAgICAgICAgICAgIGlmIChpbmRlbnQgPT0gMCkge1xuICAgICAgICAgICAgICAgICQoYmxvY2sudmlldykuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGJsb2NrV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChibG9jay52aWV3KS5hbmltYXRlKFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1dpZHRoIC0gaW5kZW50ICogdGhpcy5vcHRpb25zLnBpeGVsc1BlckluZGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFkZGluZy1sZWZ0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZW50ICogdGhpcy5vcHRpb25zLnBpeGVsc1BlckluZGVudCArIDEwLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhaXJlZERpdnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICQodGhpcy5wYWlyZWREaXZzW2ldKS5hbmltYXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGJsb2NrV2lkdGggKyAzNCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYW5zd2VyQmxvY2tzID0gdGhpcy5hbnN3ZXJCbG9ja3MoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbnN3ZXJCbG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJsb2NrID0gYW5zd2VyQmxvY2tzW2ldO1xuICAgICAgICAgICAgaW5kZW50ID0gYmxvY2suc29sdXRpb25JbmRlbnQoKTtcbiAgICAgICAgICAgIGlmIChpbmRlbnQgPT0gMCkge1xuICAgICAgICAgICAgICAgICQoYmxvY2sudmlldykuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBibG9ja1dpZHRoLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoYmxvY2sudmlldykuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrV2lkdGggLSBpbmRlbnQgKiB0aGlzLm9wdGlvbnMucGl4ZWxzUGVySW5kZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nLWxlZnRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRlbnQgKiB0aGlzLm9wdGlvbnMucGl4ZWxzUGVySW5kZW50ICsgMTAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBSZXNpemUgYW5zd2VyIGFuZCBzb3VyY2UgYXJlYVxuICAgICAgICAkKHRoaXMuYW5zd2VyQXJlYSkucmVtb3ZlQ2xhc3MoXCJhbnN3ZXIxIGFuc3dlcjIgYW5zd2VyMyBhbnN3ZXI0XCIpO1xuICAgICAgICAkKHRoaXMuYW5zd2VyQXJlYSkuYWRkQ2xhc3MoXCJhbnN3ZXJcIik7XG4gICAgICAgIHRoaXMuaW5kZW50ID0gMDtcbiAgICAgICAgdGhpcy5ub2luZGVudCA9IHRydWU7XG4gICAgICAgICQodGhpcy5zb3VyY2VBcmVhKS5hbmltYXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLmFyZWFXaWR0aCArIDIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICAkKHRoaXMuYW5zd2VyQXJlYSkuYW5pbWF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5hcmVhV2lkdGggKyAyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgLy8gQ2hhbmdlIHRoZSBtb2RlbCAod2l0aCB2aWV3KVxuICAgICAgICAkKHRoaXMuYW5zd2VyQXJlYSkuYW5pbWF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLjAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMTAwLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcy5hbnN3ZXJBcmVhKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgbW9kZWxcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2VCbG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJsb2Nrc1tpXS5hZGRJbmRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFuc3dlckJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyQmxvY2tzW2ldLmFkZEluZGVudCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBmaXJzdCBjaGVjayBpZiBhbnkgc29sdXRpb24gYmxvY2tzIGFyZSBpbiB0aGUgc291cmNlIHN0aWxsIChsZWZ0IHNpZGUpIGFuZCBub3RcbiAgICAvLyBpbiB0aGUgYW5zd2VyXG4gICAgZ2V0U29sdXRpb25CbG9ja0luU291cmNlKCkge1xuICAgICAgICB2YXIgc29sdXRpb25CbG9ja3MgPSB0aGlzLnNvbHV0aW9uQmxvY2tzKCk7XG4gICAgICAgIHZhciBhbnN3ZXJCbG9ja3MgPSB0aGlzLmFuc3dlckJsb2NrcygpO1xuICAgICAgICB2YXIgc291cmNlQmxvY2tzID0gdGhpcy5zb3VyY2VCbG9ja3MoKTtcbiAgICAgICAgdmFyIHNvbEJsb2NrID0gbnVsbDtcbiAgICAgICAgdmFyIGN1cnJCbG9jayA9IG51bGw7XG5cbiAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHNvdXJjZUJsb2NrcyBhbmQgcmV0dXJuIGEgYmxvY2sgaWYgaXQgaXMgbm90IGluIHRoZSBzb2x1dGlvblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZUJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IGJsb2NrIGZyb20gdGhlIHNvdXJjZVxuICAgICAgICAgICAgY3VyckJsb2NrID0gc291cmNlQmxvY2tzW2ldO1xuXG4gICAgICAgICAgICAvLyBpZiBjdXJyQmxvY2sgaXMgaW4gdGhlIHNvbHV0aW9uIGFuZCBpc24ndCB0aGUgZmlyc3QgYmxvY2sgYW5kIGlzbid0IGluIHRoZSBhbnN3ZXJcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBzb2x1dGlvbkJsb2Nrcy5pbmRleE9mKGN1cnJCbG9jaykgPiAwICYmXG4gICAgICAgICAgICAgICAgYW5zd2VyQmxvY2tzLmluZGV4T2YoY3VyckJsb2NrKSA8IDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyQmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gZGlkbid0IGZpbmQgYW55IGJsb2NrIGluIHRoZSBzb3VyY2UgdGhhdCBpcyBpbiB0aGUgc29sdXRpb25cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gRmluZCBhIGJsb2NrMiB0aGF0IGlzIGZ1cnRoZXN0IGZyb20gYmxvY2sxIGluIHRoZSBhbnN3ZXJcbiAgICAvLyBkb24ndCB1c2UgdGhlIHZlcnkgZmlyc3QgYmxvY2sgaW4gdGhlIHNvbHV0aW9uIGFzIGJsb2NrMlxuICAgIGdldEZ1cnRoZXN0QmxvY2soKSB7XG4gICAgICAgIHZhciBzb2x1dGlvbkJsb2NrcyA9IHRoaXMuc29sdXRpb25CbG9ja3MoKTtcbiAgICAgICAgdmFyIGFuc3dlckJsb2NrcyA9IHRoaXMuYW5zd2VyQmxvY2tzKCk7XG4gICAgICAgIHZhciBtYXhEaXN0ID0gMDtcbiAgICAgICAgdmFyIGRpc3QgPSAwO1xuICAgICAgICB2YXIgbWF4QmxvY2sgPSBudWxsO1xuICAgICAgICB2YXIgY3VyckJsb2NrID0gbnVsbDtcbiAgICAgICAgdmFyIGluZGV4U29sID0gMDtcbiAgICAgICAgdmFyIHByZXZCbG9jayA9IG51bGw7XG4gICAgICAgIHZhciBpbmRleFByZXYgPSAwO1xuXG4gICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgYmxvY2tzIGluIHRoZSBhbnN3ZXJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbnN3ZXJCbG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGN1cnJCbG9jayA9IGFuc3dlckJsb2Nrc1tpXTtcbiAgICAgICAgICAgIGluZGV4U29sID0gc29sdXRpb25CbG9ja3MuaW5kZXhPZihjdXJyQmxvY2spO1xuICAgICAgICAgICAgaWYgKGluZGV4U29sID4gMCkge1xuICAgICAgICAgICAgICAgIHByZXZCbG9jayA9IHNvbHV0aW9uQmxvY2tzW2luZGV4U29sIC0gMV07XG4gICAgICAgICAgICAgICAgaW5kZXhQcmV2ID0gYW5zd2VyQmxvY2tzLmluZGV4T2YocHJldkJsb2NrKTtcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KFwibXkgaW5kZXggXCIgKyBpICsgXCIgaW5kZXggcHJldiBcIiArIGluZGV4UHJldik7XG5cbiAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIGRpc3RhbmNlIGluIHRoZSBhbnN3ZXJcbiAgICAgICAgICAgICAgICBkaXN0ID0gTWF0aC5hYnMoaSAtIGluZGV4UHJldik7XG4gICAgICAgICAgICAgICAgaWYgKGRpc3QgPiBtYXhEaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIG1heERpc3QgPSBkaXN0O1xuICAgICAgICAgICAgICAgICAgICBtYXhCbG9jayA9IGN1cnJCbG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heEJsb2NrO1xuICAgIH1cblxuICAgIC8vIENvbWJpbmUgYmxvY2tzIHRvZ2V0aGVyXG4gICAgY29tYmluZUJsb2NrcygpIHtcbiAgICAgICAgdmFyIHNvbHV0aW9uQmxvY2tzID0gdGhpcy5zb2x1dGlvbkJsb2NrcygpO1xuICAgICAgICB2YXIgYW5zd2VyQmxvY2tzID0gdGhpcy5hbnN3ZXJCbG9ja3MoKTtcbiAgICAgICAgdmFyIHNvdXJjZUJsb2NrcyA9IHRoaXMuc291cmNlQmxvY2tzKCk7XG5cbiAgICAgICAgLy8gQWxlcnQgdGhlIHVzZXIgdG8gd2hhdCBpcyBoYXBwZW5pbmdcbiAgICAgICAgdmFyIGZlZWRiYWNrQXJlYSA9ICQodGhpcy5tZXNzYWdlRGl2KTtcbiAgICAgICAgZmVlZGJhY2tBcmVhLmZhZGVJbig1MDApO1xuICAgICAgICBmZWVkYmFja0FyZWEuYXR0cihcImNsYXNzXCIsIFwiYWxlcnQgYWxlcnQtaW5mb1wiKTtcbiAgICAgICAgZmVlZGJhY2tBcmVhLmh0bWwoJC5pMThuKFwibXNnX3BhcnNvbl9jb21iaW5lZF9ibG9ja3NcIikpO1xuICAgICAgICB2YXIgYmxvY2sxID0gbnVsbDtcbiAgICAgICAgdmFyIGJsb2NrMiA9IG51bGw7XG5cbiAgICAgICAgLy8gZ2V0IGEgc29sdXRpb24gYmxvY2sgdGhhdCBpcyBzdGlsbCBpbiBzb3VyY2UgKG5vdCBhbnN3ZXIpLCBpZiBhbnlcbiAgICAgICAgYmxvY2syID0gdGhpcy5nZXRTb2x1dGlvbkJsb2NrSW5Tb3VyY2UoKTtcblxuICAgICAgICAvLyBpZiBub25lIGluIHNvdXJjZSBnZXQgYmxvY2sgdGhhdCBpcyBmdXJ0aGVzdCBmcm9tIGJsb2NrMVxuICAgICAgICBpZiAoYmxvY2syID09IG51bGwpIHtcbiAgICAgICAgICAgIGJsb2NrMiA9IHRoaXMuZ2V0RnVydGhlc3RCbG9jaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2V0IGJsb2NrMSAoYWJvdmUgYmxvY2syKSBpbiBzb2x1dGlvblxuICAgICAgICB2YXIgaW5kZXggPSBzb2x1dGlvbkJsb2Nrcy5pbmRleE9mKGJsb2NrMik7XG4gICAgICAgIGJsb2NrMSA9IHNvbHV0aW9uQmxvY2tzW2luZGV4IC0gMV07XG5cbiAgICAgICAgLy8gZ2V0IGluZGV4IG9mIGVhY2ggaW4gYW5zd2VyXG4gICAgICAgIHZhciBpbmRleDEgPSBhbnN3ZXJCbG9ja3MuaW5kZXhPZihibG9jazEpO1xuICAgICAgICB2YXIgaW5kZXgyID0gYW5zd2VyQmxvY2tzLmluZGV4T2YoYmxvY2syKTtcbiAgICAgICAgdmFyIG1vdmUgPSBmYWxzZTtcblxuICAgICAgICAvLyBpZiBib3RoIGluIGFuc3dlciBzZXQgbW92ZSBiYXNlZCBvbiBpZiBkaXJlY3RseSBhYm92ZSBlYWNoIG90aGVyXG4gICAgICAgIGlmIChpbmRleDEgPj0gMCAmJiBpbmRleDIgPj0gMCkge1xuICAgICAgICAgICAgbW92ZSA9IGluZGV4MSArIDEgIT09IGluZGV4MjtcblxuICAgICAgICAgICAgLy8gZWxzZSBpZiBib3RoIGluIHNvdXJjZSBzZXQgbW92ZSBhZ2FpbiBiYXNlZCBvbiBpZiBhYm92ZSBlYWNoIG90aGVyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXgxIDwgMCAmJiBpbmRleDIgPCAwKSB7XG4gICAgICAgICAgICBpbmRleDEgPSBzb3VyY2VCbG9ja3MuaW5kZXhPZihibG9jazEpO1xuICAgICAgICAgICAgaW5kZXgyID0gc291cmNlQmxvY2tzLmluZGV4T2YoYmxvY2syKTtcbiAgICAgICAgICAgIG1vdmUgPSBpbmRleDEgKyAxICE9PSBpbmRleDI7XG5cbiAgICAgICAgICAgIC8vIG9uZSBpbiBzb3VyY2UgYW5kIG9uZSBpbiBhbnN3ZXIgc28gbXVzdCBtb3ZlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb3ZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChpbmRleDEgPCAwKSB7XG4gICAgICAgICAgICAgICAgaW5kZXgxID0gc291cmNlQmxvY2tzLmluZGV4T2YoYmxvY2sxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbmRleDIgPCAwKSB7XG4gICAgICAgICAgICAgICAgaW5kZXgyID0gc291cmNlQmxvY2tzLmluZGV4T2YoYmxvY2syKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdWJ0cmFjdCA9IGluZGV4MiA8IGluZGV4MTsgLy8gaXMgYmxvY2syIGhpZ2hlclxuXG4gICAgICAgIGlmIChtb3ZlKSB7XG4gICAgICAgICAgICAvLyBNb3ZlIHRoZSBibG9ja1xuICAgICAgICAgICAgdmFyIHN0YXJ0WCA9IGJsb2NrMi5wYWdlWENlbnRlcigpIC0gMTtcbiAgICAgICAgICAgIHZhciBzdGFydFkgPSBibG9jazIucGFnZVlDZW50ZXIoKTtcbiAgICAgICAgICAgIHZhciBlbmRYID0gYmxvY2sxLnBhZ2VYQ2VudGVyKCkgLSAxO1xuICAgICAgICAgICAgdmFyIGVuZFkgPVxuICAgICAgICAgICAgICAgIGJsb2NrMS5wYWdlWUNlbnRlcigpICtcbiAgICAgICAgICAgICAgICBibG9jazEudmlldy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLyAyICtcbiAgICAgICAgICAgICAgICA1O1xuICAgICAgICAgICAgaWYgKHN1YnRyYWN0KSB7XG4gICAgICAgICAgICAgICAgZW5kWSAtPSBibG9jazIudmlldy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLyAyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbmRZICs9IGJsb2NrMi52aWV3LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAvIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAkKGJsb2NrMi52aWV3KS5hbmltYXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsIC8vIDEgc2VjY29uZFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChibG9jazEudmlldykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1jb2xvclwiOiBcIiMwMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoYmxvY2syLnZpZXcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjogXCIjMDAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9jazIubGluZXNbMF0uaW5kZXggKz0gMTAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubW92aW5nID0gYmxvY2syO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZpbmdYID0gc3RhcnRYO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZpbmdZID0gc3RhcnRZO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGVWaWV3KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiBmdW5jdGlvbiAoYSwgcCwgYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZpbmdYID0gc3RhcnRYICogKDEgLSBwKSArIGVuZFggKiBwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZpbmdZID0gc3RhcnRZICogKDEgLSBwKSArIGVuZFkgKiBwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGVWaWV3KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhhdC5tb3Zpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhhdC5tb3ZpbmdYO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoYXQubW92aW5nWTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlVmlldygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2syLmxpbmVzWzBdLmluZGV4IC09IDEwMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9jazEuY29uc3VtZUJsb2NrKGJsb2NrMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKGJsb2NrMS52aWV3KS5hbmltYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjogXCIjZDNkM2QzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNlZmVmZWZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGJsb2NrMS52aWV3KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKGJsb2NrMi52aWV3KS5hbmltYXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKGJsb2NrMS52aWV3KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IFwiIzAwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgJChibG9jazIudmlldykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1jb2xvclwiOiBcIiMwMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrMS5jb25zdW1lQmxvY2soYmxvY2syKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoYmxvY2sxLnZpZXcpLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1jb2xvclwiOiBcIiNkM2QzZDNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiI2VmZWZlZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoYmxvY2sxLnZpZXcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBZGFwdCB0aGUgcHJvYmxlbSB0byBiZSBlYXNpZXJcbiAgICAvLyAgKiByZW1vdmUgYSBkaXN0cmFjdG9yIHVudGlsIG5vbmUgYXJlIHByZXNlbnRcbiAgICAvLyAgKiBjb21iaW5lIGJsb2NrcyB1bnRpbCAzIGFyZSBsZWZ0XG4gICAgbWFrZUVhc2llcigpIHtcbiAgICAgICAgdmFyIGRpc3RyYWN0b3JUb1JlbW92ZSA9IHRoaXMuZGlzdHJhY3RvclRvUmVtb3ZlKCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGRpc3RyYWN0b3JUb1JlbW92ZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAhZGlzdHJhY3RvclRvUmVtb3ZlLmluU291cmNlQXJlYSgpXG4gICAgICAgICkge1xuICAgICAgICAgICAgYWxlcnQoJC5pMThuKFwibXNnX3BhcnNvbl9yZW1vdmVfaW5jb3JyZWN0XCIpKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRGlzdHJhY3RvcihkaXN0cmFjdG9yVG9SZW1vdmUpO1xuICAgICAgICAgICAgdGhpcy5sb2dNb3ZlKFwicmVtb3ZlZERpc3RyYWN0b3ItXCIgKyBkaXN0cmFjdG9yVG9SZW1vdmUuaGFzaCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBudW1iZXJPZkJsb2NrcyA9IHRoaXMubnVtYmVyT2ZCbG9ja3MoZmFsc2UpO1xuICAgICAgICAgICAgaWYgKG51bWJlck9mQmxvY2tzID4gMykge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCQuaTE4bihcIm1zZ19wYXJzb25fd2lsbF9jb21iaW5lXCIpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbWJpbmVCbG9ja3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ01vdmUoXCJjb21iaW5lZEJsb2Nrc1wiKTtcbiAgICAgICAgICAgIH0gLyplbHNlIGlmKHRoaXMubnVtYmVyT2ZCbG9ja3ModHJ1ZSkgPiAzICYmIGRpc3RyYWN0b3JUb1JlbW92ZSAhPT0gIHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiV2lsbCByZW1vdmUgYW4gaW5jb3JyZWN0IGNvZGUgYmxvY2sgZnJvbSBzb3VyY2UgYXJlYVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZURpc3RyYWN0b3IoZGlzdHJhY3RvclRvUmVtb3ZlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ01vdmUoXCJyZW1vdmVkRGlzdHJhY3Rvci1cIiArIGRpc3RyYWN0b3JUb1JlbW92ZS5oYXNoKCkpO1xuICAgICAgICAgICAgfSAqLyBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydCgkLmkxOG4oXCJtc2dfcGFyc29uX3RocmVlX2Jsb2Nrc19sZWZ0XCIpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkhlbHAgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vaWYgKG51bWJlck9mQmxvY2tzIDwgNSkge1xuICAgICAgICAgICAgLy9cdHRoaXMuY2FuSGVscCA9IGZhbHNlO1xuICAgICAgICAgICAgLy9cdHRoaXMuaGVscEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAvL31cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBUaGUgXCJIZWxwIE1lXCIgYnV0dG9uIHdhcyBwcmVzc2VkIGFuZCB0aGUgcHJvYmxlbSBzaG91bGQgYmUgc2ltcGxpZmllZFxuICAgIGhlbHBNZSgpIHtcbiAgICAgICAgdGhpcy5jbGVhckZlZWRiYWNrKCk7XG4gICAgICAgIC8vdGhpcy5oZWxwQ291bnQgPSAtMTsgLy8gYW1vdW50IHRvIGFsbG93IGZvciBtdWx0aXBsZSBoZWxwcyBpbiBhIHJvd1xuICAgICAgICAvL2lmICh0aGlzLmhlbHBDb3VudCA8IDApIHtcbiAgICAgICAgLy9cdHRoaXMuaGVscENvdW50ID0gTWF0aC5tYXgodGhpcy5oZWxwQ291bnQsIC0xKTsgLy8gbWluIDEgYXR0ZW1wdCBiZWZvcmUgbW9yZSBoZWxwXG4gICAgICAgIC8vdGhpcy5oZWxwQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgLy99XG4gICAgICAgIC8vIGlmIGxlc3MgdGhhbiAzIGF0dGVtcHRzXG4gICAgICAgIGlmICh0aGlzLm51bURpc3RpbmN0IDwgMykge1xuICAgICAgICAgICAgYWxlcnQoJC5pMThuKFwibXNnX3BhcnNvbl9hdGxlYXN0X3RocmVlX2F0dGVtcHRzXCIpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBvdGhlcndpc2UgZ2l2ZSBoZWxwXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nb3RIZWxwID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubWFrZUVhc2llcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgID09PT0gVVRJTElUWSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAgIC8vIFJldHVybiBhIGRhdGUgZnJvbSBhIHRpbWVzdGFtcCAoZWl0aGVyIG15U1FMIG9yIEpTIGZvcm1hdClcbiAgICBkYXRlRnJvbVRpbWVzdGFtcCh0aW1lc3RhbXApIHtcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApO1xuICAgICAgICBpZiAoaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHRpbWVzdGFtcC5zcGxpdCgvWy0gOl0vKTtcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh0WzBdLCB0WzFdIC0gMSwgdFsyXSwgdFszXSwgdFs0XSwgdFs1XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICAgIC8vIEEgZnVuY3Rpb24gZm9yIHJldHVybmluZyBhIHNodWZmbGVkIHZlcnNpb24gb2YgYW4gYXJyYXlcbiAgICBzaHVmZmxlZChhcnJheSkge1xuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gYXJyYXkubGVuZ3RoO1xuICAgICAgICB2YXIgcmV0dXJuQXJyYXkgPSBhcnJheS5zbGljZSgpO1xuICAgICAgICB2YXIgdGVtcG9yYXJ5VmFsdWUsIHJhbmRvbUluZGV4O1xuICAgICAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxuICAgICAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XG4gICAgICAgICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnQuLi5cbiAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCAtPSAxO1xuICAgICAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAgICAgICAgdGVtcG9yYXJ5VmFsdWUgPSByZXR1cm5BcnJheVtjdXJyZW50SW5kZXhdO1xuICAgICAgICAgICAgcmV0dXJuQXJyYXlbY3VycmVudEluZGV4XSA9IHJldHVybkFycmF5W3JhbmRvbUluZGV4XTtcbiAgICAgICAgICAgIHJldHVybkFycmF5W3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5BcnJheTtcbiAgICB9XG4gICAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT09PSBLRVlCT0FSRCBJTlRFUkFDVElPTiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gICAgLy8gV2hlbiB0aGUgdXNlciBoYXMgZW50ZXJlZCB0aGUgUGFyc29ucyBwcm9ibGVtIHZpYSBrZXlib2FyZCBtb2RlXG4gICAgZW50ZXJLZXlib2FyZE1vZGUoKSB7XG4gICAgICAgICQodGhpcy5rZXlib2FyZFRpcCkuc2hvdygpO1xuICAgICAgICAkKHRoaXMuc291cmNlTGFiZWwpLmhpZGUoKTtcbiAgICAgICAgJCh0aGlzLmFuc3dlckxhYmVsKS5oaWRlKCk7XG4gICAgICAgIHRoaXMuY2xlYXJGZWVkYmFjaygpO1xuICAgIH1cbiAgICAvLyBXaGVuIHRoZSB1c2VyIGxlYXZlcyB0aGUgUGFyc29ucyBwcm9ibGVtIHZpYSBrZXlib2FyZCBtb2RlXG4gICAgZXhpdEtleWJvYXJkTW9kZSgpIHtcbiAgICAgICAgJCh0aGlzLmtleWJvYXJkVGlwKS5oaWRlKCk7XG4gICAgICAgICQodGhpcy5zb3VyY2VMYWJlbCkuc2hvdygpO1xuICAgICAgICAkKHRoaXMuYW5zd2VyTGFiZWwpLnNob3coKTtcbiAgICB9XG4gICAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT09PSBWSUVXID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gICAgLy8gQ2xlYXIgYW55IGZlZWRiYWNrIGZyb20gdGhlIGFuc3dlciBhcmVhXG4gICAgY2xlYXJGZWVkYmFjaygpIHtcbiAgICAgICAgJCh0aGlzLmFuc3dlckFyZWEpLnJlbW92ZUNsYXNzKFwiaW5jb3JyZWN0IGNvcnJlY3RcIik7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuYW5zd2VyQXJlYS5jaGlsZE5vZGVzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAkKGNoaWxkcmVuW2ldKS5yZW1vdmVDbGFzcyhcbiAgICAgICAgICAgICAgICBcImNvcnJlY3RQb3NpdGlvbiBpbmNvcnJlY3RQb3NpdGlvbiBpbmRlbnRMZWZ0IGluZGVudFJpZ2h0XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgJCh0aGlzLm1lc3NhZ2VEaXYpLmhpZGUoKTtcbiAgICB9XG4gICAgLy8gRGlzYWJsZSB0aGUgaW50ZXJmYWNlXG4gICAgYXN5bmMgZGlzYWJsZUludGVyYWN0aW9uKCkge1xuICAgICAgICAvLyBEaXNhYmxlIGJsb2Nrc1xuICAgICAgICBhd2FpdCB0aGlzLmNoZWNrU2VydmVyQ29tcGxldGU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGlzYWJsaW5nIGJsb2Nrc1wiKTtcbiAgICAgICAgaWYgKHRoaXMuYmxvY2tzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYmxvY2sgPSB0aGlzLmJsb2Nrc1tpXTtcbiAgICAgICAgICAgICAgICBibG9jay5kaXNhYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGlkZSBidXR0b25zXG4gICAgICAgICQodGhpcy5jaGVja0J1dHRvbikuaGlkZSgpO1xuICAgICAgICAkKHRoaXMucmVzZXRCdXR0b24pLmhpZGUoKTtcbiAgICB9XG4gICAgLy8gQmFzZWQgb24gdGhlIG1vdmluZyBlbGVtZW50LCBldGMuLCBlc3RhYmxpc2ggdGhlIG1vdmluZyBzdGF0ZVxuICAgIC8vICAgcmVzdDogbm90IG1vdmluZ1xuICAgIC8vICAgc291cmNlOiBtb3ZpbmcgaW5zaWRlIHNvdXJjZSBhcmVhXG4gICAgLy8gICBhbnN3ZXI6IG1vdmluZyBpbnNpZGUgYW5zd2VyIGFyZWFcbiAgICAvLyAgIG1vdmluZzogbW92aW5nIG91dHNpZGUgYXJlYXNcbiAgICBtb3ZpbmdTdGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubW92aW5nID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwicmVzdFwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciB4ID0gdGhpcy5tb3ZpbmdYIC0gd2luZG93LnBhZ2VYT2Zmc2V0O1xuICAgICAgICB2YXIgeSA9IHRoaXMubW92aW5nWSAtIHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgLy8gQ2hlY2sgaWYgaW4gYW5zd2VyIGFyZWFcbiAgICAgICAgdmFyIGJvdW5kcyA9IHRoaXMuYW5zd2VyQXJlYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgeCA+PSBib3VuZHMubGVmdCAmJlxuICAgICAgICAgICAgeCA8PSBib3VuZHMucmlnaHQgJiZcbiAgICAgICAgICAgIHkgPj0gYm91bmRzLnRvcCAmJlxuICAgICAgICAgICAgeSA8PSBib3VuZHMuYm90dG9tXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIFwiYW5zd2VyXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgaW4gc291cmNlIGFyZWFcbiAgICAgICAgYm91bmRzID0gdGhpcy5zb3VyY2VBcmVhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB4ID49IGJvdW5kcy5sZWZ0ICYmXG4gICAgICAgICAgICB4IDw9IGJvdW5kcy5yaWdodCAmJlxuICAgICAgICAgICAgeSA+PSBib3VuZHMudG9wICYmXG4gICAgICAgICAgICB5IDw9IGJvdW5kcy5ib3R0b21cbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJzb3VyY2VcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJtb3ZpbmdcIjtcbiAgICB9XG4gICAgLy8gVXBkYXRlIHRoZSBQYXJzb25zIHZpZXdcbiAgICAvLyBUaGlzIGdldHMgY2FsbGVkIHdoZW4gZHJhZ2dpbmcgYSBibG9ja1xuICAgIHVwZGF0ZVZpZXcoKSB7XG4gICAgICAgIC8vIEJhc2VkIG9uIHRoZSBuZXcgYW5kIHRoZSBvbGQgc3RhdGUsIGZpZ3VyZSBvdXQgd2hhdCB0byB1cGRhdGVcbiAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgdmFyIG5ld1N0YXRlID0gdGhpcy5tb3ZpbmdTdGF0ZSgpO1xuICAgICAgICB2YXIgdXBkYXRlU291cmNlID0gdHJ1ZTtcbiAgICAgICAgdmFyIHVwZGF0ZUFuc3dlciA9IHRydWU7XG4gICAgICAgIHZhciB1cGRhdGVNb3ZpbmcgPSBuZXdTdGF0ZSA9PSBcIm1vdmluZ1wiO1xuICAgICAgICBpZiAoc3RhdGUgPT0gbmV3U3RhdGUpIHtcbiAgICAgICAgICAgIGlmIChuZXdTdGF0ZSA9PSBcInJlc3RcIikge1xuICAgICAgICAgICAgICAgIHVwZGF0ZVNvdXJjZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUFuc3dlciA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdTdGF0ZSA9PSBcInNvdXJjZVwiKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlQW5zd2VyID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld1N0YXRlID09IFwiYW5zd2VyXCIpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVTb3VyY2UgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3U3RhdGUgPT0gXCJtb3ZpbmdcIikge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUFuc3dlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVNvdXJjZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBtb3ZpbmdIZWlnaHQ7XG4gICAgICAgIGlmICh0aGlzLm1vdmluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBNdXN0IGdldCBoZWlnaHQgaGVyZSBhcyBkZXRhY2hlZCBpdGVtcyBkb24ndCBoYXZlIGhlaWdodFxuICAgICAgICAgICAgbW92aW5nSGVpZ2h0ID0gJCh0aGlzLm1vdmluZy52aWV3KS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICAgICQodGhpcy5tb3ZpbmcudmlldykuZGV0YWNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBvc2l0aW9uVG9wLCB3aWR0aDtcbiAgICAgICAgdmFyIGJhc2VXaWR0aCA9IHRoaXMuYXJlYVdpZHRoIC0gMjI7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgU291cmNlIEFyZWFcbiAgICAgICAgaWYgKHVwZGF0ZVNvdXJjZSkge1xuICAgICAgICAgICAgcG9zaXRpb25Ub3AgPSAwO1xuICAgICAgICAgICAgdmFyIGJsb2NrcyA9IHRoaXMuc291cmNlQmxvY2tzKCk7XG4gICAgICAgICAgICBpZiAobmV3U3RhdGUgPT0gXCJzb3VyY2VcIikge1xuICAgICAgICAgICAgICAgIHZhciBoYXNJbnNlcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhciBtb3ZpbmdCaW4gPSB0aGlzLm1vdmluZy5wYWlyZWRCaW4oKTtcbiAgICAgICAgICAgICAgICB2YXIgYmluRm9yQmxvY2sgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJpbkZvckJsb2NrLnB1c2goYmxvY2tzW2ldLnBhaXJlZEJpbigpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFiaW5Gb3JCbG9jay5pbmNsdWRlcyhtb3ZpbmdCaW4pKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vdmluZ0JpbiA9IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgaW5zZXJ0UG9zaXRpb25zID0gW107XG4gICAgICAgICAgICAgICAgaWYgKGJpbkZvckJsb2NrLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydFBvc2l0aW9ucy5wdXNoKDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb3ZpbmdCaW4gPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFBvc2l0aW9ucy5wdXNoKDApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJpbkZvckJsb2NrWzBdID09IG1vdmluZ0Jpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0UG9zaXRpb25zLnB1c2goMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMTsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJpbkZvckJsb2NrW2kgLSAxXSA9PSBtb3ZpbmdCaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRQb3NpdGlvbnMucHVzaChpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmluRm9yQmxvY2tbaV0gPT0gbW92aW5nQmluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0UG9zaXRpb25zLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmluZ0JpbiA9PSAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpbkZvckJsb2NrW2kgLSAxXSAhPSBiaW5Gb3JCbG9ja1tpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0UG9zaXRpb25zLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vdmluZ0JpbiA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0UG9zaXRpb25zLnB1c2goYmluRm9yQmxvY2subGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpbkZvckJsb2NrW2JpbkZvckJsb2NrLmxlbmd0aCAtIDFdID09IG1vdmluZ0JpblxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFBvc2l0aW9ucy5wdXNoKGJpbkZvckJsb2NrLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHggPVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZ1ggLVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZUFyZWEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wYWdlWE9mZnNldCAtXG4gICAgICAgICAgICAgICAgICAgIGJhc2VXaWR0aCAvIDIgLVxuICAgICAgICAgICAgICAgICAgICAxMTtcbiAgICAgICAgICAgICAgICB2YXIgeSA9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nWSAtXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc291cmNlQXJlYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGJsb2Nrc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGo7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFzSW5zZXJ0ZWQgJiYgaW5zZXJ0UG9zaXRpb25zLmluY2x1ZGVzKGkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVzdEhlaWdodCA9ICQoaXRlbS52aWV3KS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgYmxvY2tzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc2VydFBvc2l0aW9ucy5pbmNsdWRlcyhqKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdEhlaWdodCArPSAkKGJsb2Nrc1tqXS52aWV3KS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5IC0gcG9zaXRpb25Ub3AgPCBtb3ZpbmdIZWlnaHQgKyB0ZXN0SGVpZ2h0IC8gMiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPT0gaW5zZXJ0UG9zaXRpb25zW2luc2VydFBvc2l0aW9ucy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzSW5zZXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc291cmNlQXJlYS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nLnZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzLm1vdmluZy52aWV3KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiB4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHkgLSBtb3ZpbmdIZWlnaHQgLyAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYmFzZVdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInotaW5kZXhcIjogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblRvcCA9IHBvc2l0aW9uVG9wICsgbW92aW5nSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICQoaXRlbS52aWV3KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogcG9zaXRpb25Ub3AsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYmFzZVdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ6LWluZGV4XCI6IDIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblRvcCA9IHBvc2l0aW9uVG9wICsgJChpdGVtLnZpZXcpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWhhc0luc2VydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcy5tb3ZpbmcudmlldykuYXBwZW5kVG8oXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiNcIiArIHRoaXMuY291bnRlcklkICsgXCItc291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLm1vdmluZy52aWV3KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogeCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogeSAtICQodGhpcy5tb3Zpbmcudmlldykub3V0ZXJIZWlnaHQodHJ1ZSkgLyAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGJhc2VXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiei1pbmRleFwiOiAzLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBibG9ja3NbaV07XG4gICAgICAgICAgICAgICAgICAgICQoaXRlbS52aWV3KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogcG9zaXRpb25Ub3AsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYmFzZVdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ6LWluZGV4XCI6IDIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblRvcCA9IHBvc2l0aW9uVG9wICsgJChpdGVtLnZpZXcpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgUGFpcmVkIERpc3RyYWN0b3IgSW5kaWNhdG9yc1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMucGFpcmVkQmlucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBiaW4gPSB0aGlzLnBhaXJlZEJpbnNbaV07XG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoaW5nID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGJsb2Nrcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBibG9jayA9IGJsb2Nrc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrLm1hdGNoZXNCaW4oYmluKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hpbmcucHVzaChibG9jayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGRpdiA9IHRoaXMucGFpcmVkRGl2c1tpXTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hpbmcubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgJChkaXYpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKGRpdikuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gLTU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCArPSBwYXJzZUludChcbiAgICAgICAgICAgICAgICAgICAgICAgICQobWF0Y2hpbmdbbWF0Y2hpbmcubGVuZ3RoIC0gMV0udmlldykuY3NzKFwidG9wXCIpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCAtPSBwYXJzZUludCgkKG1hdGNoaW5nWzBdLnZpZXcpLmNzcyhcInRvcFwiKSk7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCArPSAkKG1hdGNoaW5nW21hdGNoaW5nLmxlbmd0aCAtIDFdLnZpZXcpLm91dGVySGVpZ2h0KFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAkKGRpdikuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC02LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAkKG1hdGNoaW5nWzBdLnZpZXcpLmNzcyhcInRvcFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBiYXNlV2lkdGggKyAzNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ6LWluZGV4XCI6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtaW5kZW50XCI6IC0zMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFkZGluZy10b3BcIjogKGhlaWdodCAtIDcwKSAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJ2aXNpYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiA0MyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVydGljYWwtYWxpZ25cIjogXCJtaWRkbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM3ZTdlZTdcIixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICQoZGl2KS5odG1sKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCI8c3BhbiBpZD0gJ3N0JyBzdHlsZSA9ICd2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNXB4Jz5vcjwvc3Bhbj57XCJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoaW5nLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICQoZGl2KS5odG1sKFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGUgdGhlIEFuc3dlciBBcmVhXG4gICAgICAgIGlmICh1cGRhdGVBbnN3ZXIpIHtcbiAgICAgICAgICAgIHZhciBibG9jaywgaW5kZW50O1xuICAgICAgICAgICAgcG9zaXRpb25Ub3AgPSAwO1xuICAgICAgICAgICAgd2lkdGggPVxuICAgICAgICAgICAgICAgIHRoaXMuYXJlYVdpZHRoICtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGVudCAqIHRoaXMub3B0aW9ucy5waXhlbHNQZXJJbmRlbnQgLVxuICAgICAgICAgICAgICAgIDIyO1xuICAgICAgICAgICAgdmFyIGJsb2NrcyA9IHRoaXMuYW5zd2VyQmxvY2tzKCk7XG4gICAgICAgICAgICBpZiAobmV3U3RhdGUgPT0gXCJhbnN3ZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBoYXNJbnNlcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhciB4ID1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmdYIC1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJBcmVhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucGFnZVhPZmZzZXQgLVxuICAgICAgICAgICAgICAgICAgICBiYXNlV2lkdGggLyAyIC1cbiAgICAgICAgICAgICAgICAgICAgMTE7XG4gICAgICAgICAgICAgICAgdmFyIG1vdmluZ0luZGVudCA9IE1hdGgucm91bmQoeCAvIHRoaXMub3B0aW9ucy5waXhlbHNQZXJJbmRlbnQpO1xuICAgICAgICAgICAgICAgIGlmIChtb3ZpbmdJbmRlbnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vdmluZ0luZGVudCA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb3ZpbmdJbmRlbnQgPiB0aGlzLmluZGVudCkge1xuICAgICAgICAgICAgICAgICAgICBtb3ZpbmdJbmRlbnQgPSB0aGlzLmluZGVudDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB4ID0gbW92aW5nSW5kZW50ICogdGhpcy5vcHRpb25zLnBpeGVsc1BlckluZGVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHkgPVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZ1kgLVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckFyZWEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nLmluZGVudCA9IG1vdmluZ0luZGVudDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrID0gYmxvY2tzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc0luc2VydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeSAtIHBvc2l0aW9uVG9wIDxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobW92aW5nSGVpZ2h0ICsgJChibG9jay52aWV3KS5vdXRlckhlaWdodCh0cnVlKSkgLyAyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNJbnNlcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJBcmVhLmluc2VydEJlZm9yZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcudmlldyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2sudmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzLm1vdmluZy52aWV3KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiB4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHkgLSBtb3ZpbmdIZWlnaHQgLyAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYmFzZVdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInotaW5kZXhcIjogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblRvcCA9IHBvc2l0aW9uVG9wICsgbW92aW5nSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluZGVudCA9IGJsb2NrLmluZGVudCAqIHRoaXMub3B0aW9ucy5waXhlbHNQZXJJbmRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICQoYmxvY2sudmlldykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGluZGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogcG9zaXRpb25Ub3AsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGggLSBpbmRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInotaW5kZXhcIjogMixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uVG9wID0gcG9zaXRpb25Ub3AgKyAkKGJsb2NrLnZpZXcpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWhhc0luc2VydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcy5tb3ZpbmcudmlldykuYXBwZW5kVG8oXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiNcIiArIHRoaXMuY291bnRlcklkICsgXCItYW5zd2VyXCJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLm1vdmluZy52aWV3KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogeCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogeSAtICQodGhpcy5tb3Zpbmcudmlldykub3V0ZXJIZWlnaHQodHJ1ZSkgLyAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGJhc2VXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiei1pbmRleFwiOiAzLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrID0gYmxvY2tzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpbmRlbnQgPSBibG9jay5pbmRlbnQgKiB0aGlzLm9wdGlvbnMucGl4ZWxzUGVySW5kZW50O1xuICAgICAgICAgICAgICAgICAgICAkKGJsb2NrLnZpZXcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBpbmRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHBvc2l0aW9uVG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoIC0gaW5kZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ6LWluZGV4XCI6IDIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblRvcCA9IHBvc2l0aW9uVG9wICsgJChibG9jay52aWV3KS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlIHRoZSBNb3ZpbmcgQXJlYVxuICAgICAgICBpZiAodXBkYXRlTW92aW5nKSB7XG4gICAgICAgICAgICAvLyBBZGQgaXQgdG8gdGhlIGxvd2VzdCBwbGFjZSBpbiB0aGUgc291cmNlIGFyZWFcbiAgICAgICAgICAgIG1vdmluZ0JpbiA9IHRoaXMubW92aW5nLnBhaXJlZEJpbigpO1xuICAgICAgICAgICAgaWYgKG1vdmluZ0JpbiA9PSAtMSkge1xuICAgICAgICAgICAgICAgICQodGhpcy5tb3ZpbmcudmlldykuYXBwZW5kVG8oXCIjXCIgKyB0aGlzLmNvdW50ZXJJZCArIFwiLXNvdXJjZVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGJlZm9yZTtcbiAgICAgICAgICAgICAgICBibG9ja3MgPSB0aGlzLnNvdXJjZUJsb2NrcztcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrID0gYmxvY2tzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2sucGFpcmVkQmluKCkgPT0gbW92aW5nQmluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmUgPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYmVmb3JlID09IHVuZGVmaW5lZCB8fCBiZWZvcmUgPT0gYmxvY2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMubW92aW5nLnZpZXcpLmFwcGVuZFRvKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIjXCIgKyB0aGlzLmNvdW50ZXJJZCArIFwiLXNvdXJjZVwiXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3VyY2VBcmVhLmluc2VydEJlZm9yZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nLnZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja3NbYmVmb3JlXS52aWV3XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUGxhY2UgaW4gdGhlIG1pZGRsZSBvZiB0aGUgbW91c2UgY3Vyc29yXG4gICAgICAgICAgICAkKHRoaXMubW92aW5nLnZpZXcpLmNzcyh7XG4gICAgICAgICAgICAgICAgbGVmdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmdYIC1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3VyY2VBcmVhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucGFnZVhPZmZzZXQgLVxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMubW92aW5nLnZpZXcpLm91dGVyV2lkdGgodHJ1ZSkgLyAyLFxuICAgICAgICAgICAgICAgIHRvcDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmdZIC1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3VyY2VBcmVhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCAtXG4gICAgICAgICAgICAgICAgICAgIG1vdmluZ0hlaWdodCAvIDIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGJhc2VXaWR0aCxcbiAgICAgICAgICAgICAgICBcInotaW5kZXhcIjogMyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlID0gbmV3U3RhdGU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB9XG4gICAgYWRkQmxvY2tMYWJlbHMoYmxvY2tzKSB7XG4gICAgICAgIHZhciBiaW4gPSAtMTtcbiAgICAgICAgdmFyIGJpbkNvdW50ID0gMDtcbiAgICAgICAgdmFyIGJpbkNoaWxkcmVuID0gMDtcbiAgICAgICAgdmFyIGJsb2Nrc05vdEluQmlucyA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYmxvY2tzW2ldLnBhaXJlZEJpbigpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgYmxvY2tzTm90SW5CaW5zKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50QmluID0gYmxvY2tzW2ldLnBhaXJlZEJpbigpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRCaW4gPT0gLTEgfHwgY3VycmVudEJpbiAhPSBiaW4pIHtcbiAgICAgICAgICAgICAgICBiaW4gPSBjdXJyZW50QmluO1xuICAgICAgICAgICAgICAgIGJpbkNoaWxkcmVuID0gMDtcbiAgICAgICAgICAgICAgICBiaW5Db3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGxhYmVsID1cbiAgICAgICAgICAgICAgICBcIlwiICtcbiAgICAgICAgICAgICAgICBiaW5Db3VudCArXG4gICAgICAgICAgICAgICAgKGN1cnJlbnRCaW4gIT0gLTFcbiAgICAgICAgICAgICAgICAgICAgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKDk3ICsgYmluQ2hpbGRyZW4pXG4gICAgICAgICAgICAgICAgICAgIDogXCIgXCIpO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGJpbkNvdW50IDwgMTAgJiZcbiAgICAgICAgICAgICAgICBibG9ja3NOb3RJbkJpbnMgKyB0aGlzLnBhaXJlZEJpbnMubGVuZ3RoID49IDEwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBsYWJlbCArPSBcIiBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJsb2Nrc1tpXS5hZGRMYWJlbChsYWJlbCwgMCk7XG4gICAgICAgICAgICBiaW5DaGlsZHJlbisrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChibG9ja3NOb3RJbkJpbnMgKyB0aGlzLnBhaXJlZEJpbnMubGVuZ3RoID49IDEwKSB7XG4gICAgICAgICAgICB0aGlzLmFyZWFXaWR0aCArPSA1O1xuICAgICAgICAgICAgJCh0aGlzLnNvdXJjZUFyZWEpLmNzcyh7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICQodGhpcy5zb3VyY2VBcmVhKS53aWR0aCgpICsgNSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJCh0aGlzLmFuc3dlckFyZWEpLmNzcyh7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICQodGhpcy5hbnN3ZXJBcmVhKS53aWR0aCgpICsgNSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFB1dCBhbGwgdGhlIGJsb2NrcyBiYWNrIGludG8gdGhlIHNvdXJjZSBhcmVhLCByZXNodWZmbGluZyBhcyBuZWNlc3NhcnlcbiAgICByZXNldFZpZXcoKSB7XG4gICAgICAgIC8vIENsZWFyIGV2ZXJ5dGhpbmdcbiAgICAgICAgdGhpcy5jbGVhckZlZWRiYWNrKCk7XG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgICAgdmFyIGJsb2NrO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBibG9jayA9IHRoaXMuYmxvY2tzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBibG9jay5saW5lcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9ICQoYmxvY2subGluZXNbal0udmlldykuZmluZChcIi5ibG9jay1sYWJlbFwiKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IGNoaWxkcmVuLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NdLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJsb2NrLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICQodGhpcy5ibG9ja3NbaV0udmlldykuZGV0YWNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHRoaXMuYmxvY2tzO1xuICAgICAgICB0aGlzLmJsb2NrSW5kZXggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFpcmVkRGl2cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgJCh0aGlzLnBhaXJlZERpdnNbaV0pLmRldGFjaCgpO1xuICAgICAgICB9XG4gICAgICAgICQodGhpcy5zb3VyY2VBcmVhKS5hdHRyKFwic3R5bGVcIiwgXCJcIik7XG4gICAgICAgICQodGhpcy5hbnN3ZXJBcmVhKS5yZW1vdmVDbGFzcygpO1xuICAgICAgICAkKHRoaXMuYW5zd2VyQXJlYSkuYXR0cihcInN0eWxlXCIsIFwiXCIpO1xuICAgICAgICB0aGlzLm5vaW5kZW50ID0gdGhpcy5vcHRpb25zLm5vaW5kZW50O1xuICAgICAgICAvLyBSZWluaXRpYWxpemVcbiAgICAgICAgaWYgKHRoaXMuaGFzU29sdmVkKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrQ291bnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5udW1EaXN0aW5jdCA9IDA7XG4gICAgICAgICAgICB0aGlzLmhhc1NvbHZlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hZGFwdGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FuSGVscCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3RoaXMuaGVscENvdW50ID0gLTM7IC8vIGVuYWJsZSBhZnRlciAzIGZhaWxlZCBhdHRlbXB0c1xuICAgICAgICAgICAgLy90aGlzLmhlbHBCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5hZGFwdGl2ZUlkICsgXCJQcm9ibGVtXCIsIHRoaXMuZGl2aWQpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGl2ZUlkICsgdGhpcy5kaXZpZCArIFwiQ291bnRcIixcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQ291bnRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmFkYXB0aXZlSWQgKyBcIlNvbHZlZFwiLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0aWFsaXplQXJlYXModGhpcy5ibG9ja3NGcm9tU291cmNlKCksIFtdLCB7fSk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUludGVyYWN0aXZpdHkoKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG4gICAgfVxufVxuXG5QYXJzb25zLmNvdW50ZXIgPSAwO1xuXG4kKGRvY3VtZW50KS5iaW5kKFwicnVuZXN0b25lOmxvZ2luLWNvbXBsZXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiW2RhdGEtY29tcG9uZW50PXBhcnNvbnNdXCIpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmNsb3Nlc3QoXCJbZGF0YS1jb21wb25lbnQ9dGltZWRBc3Nlc3NtZW50XVwiKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwcnNMaXN0W3RoaXMuaWRdID0gbmV3IFBhcnNvbnMoe1xuICAgICAgICAgICAgICAgICAgICBvcmlnOiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICB1c2VSdW5lc3RvbmVTZXJ2aWNlczogZUJvb2tDb25maWcudXNlUnVuZXN0b25lU2VydmljZXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3IgcmVuZGVyaW5nIFBhcnNvbnMgUHJvYmxlbSAke3RoaXMuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIERldGFpbHM6ICR7ZXJyfWApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuIiwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT09IFBhcnNvbnNCbG9jayBPYmplY3QgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PT09PT09IFRoZSBtb2RlbCBhbmQgdmlldyBvZiBhIGNvZGUgYmxvY2suXG49PT09IFBST1BFUlRJRVMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PT09PT09IHByb2JsZW06IHRoZSBQYXJzb25zIHByb2JsZW1cbj09PT09PT09IGxpbmVzOiBhbiBhcnJheSBvZiBQYXJzb25zTGluZSBpbiB0aGlzIGJsb2NrXG49PT09PT09PSBpbmRlbnQ6IGluZGVudCBiYXNlZCBvbiBtb3ZlbWVudFxuPT09PT09PT0gdmlldzogYW4gZWxlbWVudCBmb3Igdmlld2luZyB0aGlzIG9iamVjdFxuPT09PT09PT0gbGFiZWxzOiBbbGFiZWwsIGxpbmVdIHRoZSBsYWJlbHMgbnVtYmVyaW5nIHRoZSBibG9jayBhbmQgdGhlIGxpbmVzIHRoZXkgZ28gb25cbj09PT09PT09IGhhbW1lcjogdGhlIGNvbnRyb2xsZXIgYmFzZWQgb24gaGFtbWVyLmpzXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuaW1wb3J0IEhhbW1lciBmcm9tIFwiLi9oYW1tZXIubWluLmpzXCI7XG5cbi8vIEluaXRpYWxpemUgYmFzZWQgb24gdGhlIHByb2JsZW0gYW5kIHRoZSBsaW5lc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyc29uc0Jsb2NrIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9ibGVtLCBsaW5lcykge1xuICAgICAgICB0aGlzLnByb2JsZW0gPSBwcm9ibGVtO1xuICAgICAgICB0aGlzLmxpbmVzID0gbGluZXM7XG4gICAgICAgIHRoaXMuaW5kZW50ID0gMDtcbiAgICAgICAgdGhpcy5sYWJlbHMgPSBbXTtcbiAgICAgICAgLy8gQ3JlYXRlIHZpZXcsIGFkZGluZyB2aWV3IG9mIGxpbmVzIGFuZCB1cGRhdGluZyBpbmRlbnRcbiAgICAgICAgdmFyIHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2aWV3LmlkID0gcHJvYmxlbS5jb3VudGVySWQgKyBcIi1ibG9jay1cIiArIHByb2JsZW0uYmxvY2tJbmRleDtcbiAgICAgICAgcHJvYmxlbS5ibG9ja0luZGV4ICs9IDE7XG4gICAgICAgICQodmlldykuYWRkQ2xhc3MoXCJibG9ja1wiKTtcbiAgICAgICAgdmFyIHNoYXJlZEluZGVudCA9IGxpbmVzWzBdLmluZGVudDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2hhcmVkSW5kZW50ID0gTWF0aC5taW4oc2hhcmVkSW5kZW50LCBsaW5lc1tpXS5pbmRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsaW5lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgJChsaW5lRGl2KS5hZGRDbGFzcyhcImxpbmVzXCIpO1xuICAgICAgICAkKHZpZXcpLmFwcGVuZChsaW5lRGl2KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgICAgIHZhciBsaW5lSW5kZW50O1xuICAgICAgICAgICAgaWYgKHByb2JsZW0ubm9pbmRlbnQpIHtcbiAgICAgICAgICAgICAgICBsaW5lSW5kZW50ID0gbGluZS5pbmRlbnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxpbmVJbmRlbnQgPSBsaW5lLmluZGVudCAtIHNoYXJlZEluZGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQobGluZS52aWV3KS5yZW1vdmVDbGFzcyhcImluZGVudDEgaW5kZW50MiBpbmRlbnQzIGluZGVudDRcIik7XG4gICAgICAgICAgICBpZiAobGluZUluZGVudCA+IDApIHtcbiAgICAgICAgICAgICAgICAkKGxpbmUudmlldykuYWRkQ2xhc3MoXCJpbmRlbnRcIiArIGxpbmVJbmRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGluZURpdi5hcHBlbmRDaGlsZChsaW5lLnZpZXcpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsYWJlbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICQobGFiZWxEaXYpLmFkZENsYXNzKFwibGFiZWxzXCIpO1xuICAgICAgICBpZiAodGhpcy5wcm9ibGVtLm9wdGlvbnMubnVtYmVyZWQgPT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgICQobGluZURpdikuYWRkQ2xhc3MoXCJib3JkZXJfbGVmdFwiKTtcbiAgICAgICAgICAgICQodmlldykucHJlcGVuZChsYWJlbERpdik7XG4gICAgICAgICAgICAkKHZpZXcpLmNzcyh7XG4gICAgICAgICAgICAgICAgXCJqdXN0aWZ5LWNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb2JsZW0ub3B0aW9ucy5udW1iZXJlZCA9PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgICAgICQobGFiZWxEaXYpLmFkZENsYXNzKFwiYm9yZGVyX2xlZnRcIik7XG4gICAgICAgICAgICAkKGxhYmVsRGl2KS5jc3Moe1xuICAgICAgICAgICAgICAgIGZsb2F0OiBcInJpZ2h0XCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQodmlldykuY3NzKHtcbiAgICAgICAgICAgICAgICBcImp1c3RpZnktY29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJCh2aWV3KS5hcHBlbmQobGFiZWxEaXYpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgfVxuICAgIC8vIEFkZCBhIGxpbmUgKGZyb20gYW5vdGhlciBibG9jaykgdG8gdGhpcyBibG9ja1xuICAgIGFkZExpbmUobGluZSkge1xuICAgICAgICAkKGxpbmUudmlldykucmVtb3ZlQ2xhc3MoXCJpbmRlbnQxIGluZGVudDIgaW5kZW50MyBpbmRlbnQ0XCIpO1xuICAgICAgICBpZiAodGhpcy5wcm9ibGVtLm5vaW5kZW50KSB7XG4gICAgICAgICAgICBpZiAobGluZS5pbmRlbnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgJChsaW5lLnZpZXcpLmFkZENsYXNzKFwiaW5kZW50XCIgKyBsaW5lLmluZGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbGluZXMgPSB0aGlzLmxpbmVzO1xuICAgICAgICAgICAgdmFyIHNoYXJlZEluZGVudCA9IGxpbmVzWzBdLmluZGVudDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzaGFyZWRJbmRlbnQgPSBNYXRoLm1pbihzaGFyZWRJbmRlbnQsIGxpbmVzW2ldLmluZGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2hhcmVkSW5kZW50IDwgbGluZS5pbmRlbnQpIHtcbiAgICAgICAgICAgICAgICAkKGxpbmUudmlldykuYWRkQ2xhc3MoXCJpbmRlbnRcIiArIChsaW5lLmluZGVudCAtIHNoYXJlZEluZGVudCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGFyZWRJbmRlbnQgPiBsaW5lLmluZGVudCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgJChsaW5lc1tpXS52aWV3KS5yZW1vdmVDbGFzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5kZW50MSBpbmRlbnQyIGluZGVudDMgaW5kZW50NFwiXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICQobGluZXNbaV0udmlldykuYWRkQ2xhc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImluZGVudFwiICsgKGxpbmVzW2ldLmluZGVudCAtIGxpbmUuaW5kZW50KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICQodGhpcy52aWV3KS5jaGlsZHJlbihcIi5saW5lc1wiKVswXS5hcHBlbmRDaGlsZChsaW5lLnZpZXcpO1xuICAgIH1cbiAgICAvLyBBZGQgdGhlIGNvbnRlbnRzIG9mIHRoYXQgYmxvY2sgdG8gbXlzZWxmIGFuZCB0aGVuIGRlbGV0ZSB0aGF0IGJsb2NrXG4gICAgY29uc3VtZUJsb2NrKGJsb2NrKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvY2subGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYWRkTGluZShibG9jay5saW5lc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCQoYmxvY2sudmlldykuYXR0cihcInRhYmluZGV4XCIpID09IFwiMFwiKSB7XG4gICAgICAgICAgICB0aGlzLm1ha2VUYWJJbmRleCgpO1xuICAgICAgICB9XG4gICAgICAgICQoYmxvY2sudmlldykuZGV0YWNoKCk7XG4gICAgICAgIHZhciBuZXdCbG9ja3MgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb2JsZW0uYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9ibGVtLmJsb2Nrc1tpXSAhPT0gYmxvY2spIHtcbiAgICAgICAgICAgICAgICBuZXdCbG9ja3MucHVzaCh0aGlzLnByb2JsZW0uYmxvY2tzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2NrLmxhYmVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5hZGRMYWJlbChcbiAgICAgICAgICAgICAgICBibG9jay5sYWJlbHNbaV1bMF0sXG4gICAgICAgICAgICAgICAgdGhpcy5saW5lcy5sZW5ndGggLSBibG9jay5saW5lcy5sZW5ndGggKyBibG9jay5sYWJlbHNbaV1bMV1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9ibGVtLmJsb2NrcyA9IG5ld0Jsb2NrcztcbiAgICAgICAgdGhpcy5wcm9ibGVtLnN0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnByb2JsZW0udXBkYXRlVmlldygpO1xuICAgIH1cbiAgICAvLyBVcGRhdGUgdGhlIG1vZGVsIGFuZCB2aWV3IHdoZW4gYmxvY2sgaXMgY29udmVydGVkIHRvIGNvbnRhaW4gaW5kZW50XG4gICAgYWRkSW5kZW50KCkge1xuICAgICAgICAvLyBVcGRhdGUgdGhlIGxpbmVzIG1vZGVsIC8gdmlld1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBsaW5lID0gdGhpcy5saW5lc1tpXTtcbiAgICAgICAgICAgIGlmIChsaW5lLmluZGVudCA+IDApIHtcbiAgICAgICAgICAgICAgICAkKGxpbmUudmlldykucmVtb3ZlQ2xhc3MoXCJpbmRlbnQxIGluZGVudDIgaW5kZW50MyBpbmRlbnQ0XCIpO1xuICAgICAgICAgICAgICAgICQobGluZS52aWV3KS5hZGRDbGFzcyhcImluZGVudFwiICsgbGluZS5pbmRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgYmxvY2sgbW9kZWwgLyB2aWV3XG4gICAgICAgIHRoaXMuaW5kZW50ID0gMDtcbiAgICAgICAgJCh0aGlzLnZpZXcpLmNzcyh7XG4gICAgICAgICAgICBcInBhZGRpbmctbGVmdFwiOiBcIlwiLFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMucHJvYmxlbS5hcmVhV2lkdGggLSAyMixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEFkZCBhIGxhYmVsIHRvIGJsb2NrIGFuZCB1cGRhdGUgaXRzIHZpZXdcbiAgICBhZGRMYWJlbChsYWJlbCwgbGluZSkge1xuICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgJChkaXYpLmFkZENsYXNzKFwiYmxvY2stbGFiZWxcIik7XG4gICAgICAgIGlmICh0aGlzLnByb2JsZW0ub3B0aW9ucy5udW1iZXJlZCA9PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgICAgICQoZGl2KS5hZGRDbGFzcyhcInJpZ2h0LWxhYmVsXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb2JsZW0ub3B0aW9ucy5udW1iZXJlZCA9PSBcImxlZnRcIikge1xuICAgICAgICAgICAgJChkaXYpLmFkZENsYXNzKFwibGVmdC1sYWJlbFwiKTtcbiAgICAgICAgfVxuICAgICAgICAkKGRpdikuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxhYmVsKSk7XG4gICAgICAgICQodGhpcy52aWV3KS5jaGlsZHJlbihcIi5sYWJlbHNcIilbMF0uYXBwZW5kKGRpdik7XG4gICAgICAgIGlmICh0aGlzLmxhYmVscy5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgJChkaXYpLmNzcyhcbiAgICAgICAgICAgICAgICBcIm1hcmdpbi10b3BcIixcbiAgICAgICAgICAgICAgICAobGluZSAtIHRoaXMubGFiZWxzW3RoaXMubGFiZWxzLmxlbmd0aCAtIDFdWzFdIC0gMSkgKlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbmVzW2xpbmVdLnZpZXcub2Zmc2V0SGVpZ2h0XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFiZWxzLnB1c2goW2xhYmVsLCBsaW5lXSk7XG4gICAgfVxuICAgIC8vIEluaXRpYWxpemUgSW50ZXJhY3Rpdml0eVxuICAgIGluaXRpYWxpemVJbnRlcmFjdGl2aXR5KCkge1xuICAgICAgICBpZiAoJCh0aGlzLnZpZXcpLmhhc0NsYXNzKFwiZGlzYWJsZWRcIikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgICQodGhpcy52aWV3KS5hdHRyKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcbiAgICAgICAgdGhpcy5oYW1tZXIgPSBuZXcgSGFtbWVyLk1hbmFnZXIodGhpcy52aWV3LCB7XG4gICAgICAgICAgICByZWNvZ25pemVyczogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgSGFtbWVyLlBhbixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBIYW1tZXIuRElSRUNUSU9OX0FMTCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXJzOiAxLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICB0aGlzLmhhbW1lci5vbihcInBhbnN0YXJ0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhhdC5wYW5TdGFydChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhhbW1lci5vbihcInBhbmVuZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoYXQucGFuRW5kKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaGFtbWVyLm9uKFwicGFubW92ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoYXQucGFuTW92ZShldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYSBib29sZWFuIGFzIHRvIHdoZXRoZXIgdGhpcyBibG9jayBpcyBhYmxlIHRvIGJlIHNlbGVjdGVkXG4gICAgZW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuICQodGhpcy52aWV3KS5hdHRyKFwidGFiaW5kZXhcIikgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGEgYm9vbGVhbiBhcyB0byB3aGV0aGVyIHRoaXMgYmxvY2sgaXMgYSBkaXN0cmFjdG9yXG4gICAgaXNEaXN0cmFjdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saW5lc1swXS5kaXN0cmFjdG9yO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYSBib29sZWFuIGFzIHRvIHdoZXRoZXIgdGhpcyBibG9jayBpcyBpbiB0aGUgc291cmNlIGFyZWFcbiAgICBpblNvdXJjZUFyZWEoKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvYmxlbS5zb3VyY2VBcmVhLmNoaWxkTm9kZXM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PSB0aGlzLnZpZXcuaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIFJldHVybiB0aGUgcGFnZSBYIHBvc2l0aW9uIG9mIHRoZSBjZW50ZXIgb2YgdGhlIHZpZXdcbiAgICBwYWdlWENlbnRlcigpIHtcbiAgICAgICAgdmFyIGJvdW5kaW5nUmVjdCA9IHRoaXMudmlldy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIHBhZ2VYQ2VudGVyID1cbiAgICAgICAgICAgIHdpbmRvdy5wYWdlWE9mZnNldCArIGJvdW5kaW5nUmVjdC5sZWZ0ICsgYm91bmRpbmdSZWN0LndpZHRoIC8gMjtcbiAgICAgICAgcmV0dXJuIHBhZ2VYQ2VudGVyO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gdGhlIHBhZ2UgWSBwb3NpdGlvbiBvZiB0aGUgY2VudGVyIG9mIHRoZSB2aWV3XG4gICAgcGFnZVlDZW50ZXIoKSB7XG4gICAgICAgIHZhciBib3VuZGluZ1JlY3QgPSB0aGlzLnZpZXcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBwYWdlWUNlbnRlciA9XG4gICAgICAgICAgICB3aW5kb3cucGFnZVlPZmZzZXQgKyBib3VuZGluZ1JlY3QudG9wICsgYm91bmRpbmdSZWN0LmhlaWdodCAvIDI7XG4gICAgICAgIHJldHVybiBwYWdlWUNlbnRlcjtcbiAgICB9XG4gICAgLy8gT2YgYWxsIHRoZSBsaW5lIGluZGVudHMsIHJldHVybiB0aGUgbWluaW11bSB2YWx1ZVxuICAgIG1pbmltdW1MaW5lSW5kZW50KCkge1xuICAgICAgICB2YXIgbWluaW11bUxpbmVJbmRlbnQgPSB0aGlzLmxpbmVzWzBdLmluZGVudDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBtaW5pbXVtTGluZUluZGVudCA9IE1hdGgubWluKFxuICAgICAgICAgICAgICAgIHRoaXMubGluZXNbaV0uaW5kZW50LFxuICAgICAgICAgICAgICAgIG1pbmltdW1MaW5lSW5kZW50XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW5pbXVtTGluZUluZGVudDtcbiAgICB9XG4gICAgLy8gUmV0dXJuIHRoZSBsYXN0IGJsb2NrIGluIHRoZSBzb3VyY2UgYXJlYSB0aGF0IG1hdGNoZXMgdGhlIHBhaXJlZCBiaW4gaXQgaXMgaW5cbiAgICBzbGlkZVVuZGVyQmxvY2soKSB7XG4gICAgICAgIHZhciBzb3VyY2VCbG9ja3MgPSB0aGlzLnByb2JsZW0uc291cmNlQmxvY2tzKCk7XG4gICAgICAgIGlmIChzb3VyY2VCbG9ja3MubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhaXJlZEJpbiA9IHRoaXMucGFpcmVkQmluKCk7XG4gICAgICAgIGlmIChwYWlyZWRCaW4gPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2VCbG9ja3Nbc291cmNlQmxvY2tzLmxlbmd0aCAtIDFdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSBzb3VyY2VCbG9ja3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciBibG9jayA9IHNvdXJjZUJsb2Nrc1tpXTtcbiAgICAgICAgICAgIGlmIChibG9jay5wYWlyZWRCaW4oKSA9PSBwYWlyZWRCaW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNvdXJjZUJsb2Nrc1tzb3VyY2VCbG9ja3MubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIC8vIFJldHVybiB3aGljaCBwYWlyZWQgYmluIGl0IGlzIGluICgtMSkgaWYgbm90XG4gICAgcGFpcmVkQmluKCkge1xuICAgICAgICB2YXIgcGFpcmVkQmlucyA9IHRoaXMucHJvYmxlbS5wYWlyZWRCaW5zO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJlZEJpbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoZXNCaW4ocGFpcmVkQmluc1tpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIC8vIFJldHVybiB0cnVlIGlmIGFsbCBsaW5lcyBhcmUgaW4gdGhhdCBiaW5cbiAgICBtYXRjaGVzQmluKGJpbikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0ZXN0ID0gdGhpcy5saW5lc1tpXS5pbmRleDtcbiAgICAgICAgICAgIGlmIChiaW4uaW5kZXhPZih0ZXN0KSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGEgbGlzdCBvZiBpbmRleGVzIHdoZXJlIHRoaXMgYmxvY2sgY291bGQgYmUgaW5zZXJ0ZWQgYmVmb3JlXG4gICAgdmFsaWRTb3VyY2VJbmRleGVzKCkge1xuICAgICAgICB2YXIgYmxvY2tzID0gdGhpcy5wcm9ibGVtLnNvdXJjZUJsb2NrcygpO1xuICAgICAgICB2YXIgaW5kZXhlcyA9IFtdO1xuICAgICAgICB2YXIgcGFpcmVkQmluID0gdGhpcy5wYWlyZWRCaW4oKTtcbiAgICAgICAgdmFyIGksIGxhc3RCaW47XG4gICAgICAgIGlmIChwYWlyZWRCaW4gPj0gMCkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBibG9jayA9IGJsb2Nrc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2sudmlldy5pZCAhPT0gdGhpcy52aWV3LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBibG9ja0JpbiA9IGJsb2NrLnBhaXJlZEJpbigpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2tCaW4gPT0gcGFpcmVkQmluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleGVzLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGFzdEJpbiA9PSBwYWlyZWRCaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ZXMucHVzaChpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsYXN0QmluID0gYmxvY2tCaW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxhc3RCaW4gPT0gcGFpcmVkQmluKSB7XG4gICAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGJsb2Nrcy5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGluZGV4ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBibG9jayA9IGJsb2Nrc1tpXTtcbiAgICAgICAgICAgIGlmIChibG9jay52aWV3LmlkICE9PSB0aGlzLnZpZXcuaWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgYmxvY2tCaW4gPSBibG9jay5wYWlyZWRCaW4oKTtcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2tCaW4gIT09IGxhc3RCaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmxvY2tCaW4gPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYXN0QmluID0gYmxvY2tCaW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW5kZXhlcy5wdXNoKGJsb2Nrcy5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gaW5kZXhlcztcbiAgICB9XG4gICAgLy8gQSBtZWFzdXJlIG9mIGhvdyBmYXIgdGhlIG1pZGRsZSBvZiB0aGlzIGJsb2NrIGlzIHZlcnRpY2FsbHkgcG9zaXRpb25lZFxuICAgIHZlcnRpY2FsT2Zmc2V0KCkge1xuICAgICAgICB2YXIgdmVydGljYWxPZmZzZXQ7XG4gICAgICAgIGlmICh0aGlzLmluU291cmNlQXJlYSgpKSB7XG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IHRoaXMucHJvYmxlbS5zb3VyY2VBcmVhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICAgICAgLnRvcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gdGhpcy5wcm9ibGVtLmFuc3dlckFyZWEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgICAgICAudG9wO1xuICAgICAgICB9XG4gICAgICAgIHZlcnRpY2FsT2Zmc2V0ID1cbiAgICAgICAgICAgIHRoaXMudmlldy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgK1xuICAgICAgICAgICAgdGhpcy52aWV3LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSAtXG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCAqIDI7XG4gICAgICAgIHJldHVybiB2ZXJ0aWNhbE9mZnNldDtcbiAgICB9XG4gICAgLy8gVGhpcyBibG9jayBqdXN0IGdhaW5lZCB0ZXh0dWFsIGZvY3VzXG4gICAgbmV3Rm9jdXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2JsZW0udGV4dEZvY3VzID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLmVudGVyS2V5Ym9hcmRNb2RlKCk7XG4gICAgICAgICAgICB0aGlzLnByb2JsZW0udGV4dEZvY3VzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMucHJvYmxlbS50ZXh0TW92ZSA9IGZhbHNlO1xuICAgICAgICAgICAgJCh0aGlzLnZpZXcpLmFkZENsYXNzKFwiZG93blwiKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb2JsZW0udGV4dEZvY3VzID09IHRoaXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2JsZW0udGV4dE1vdmUpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMudmlldykuYWRkQ2xhc3MoXCJ1cFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLnZpZXcpLmFkZENsYXNzKFwiZG93blwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGFscmVhZHkgaW4ga2V5Ym9hcmQgbW9kZVxuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnRleHRGb2N1cyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnByb2JsZW0udGV4dE1vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICQodGhpcy52aWV3KS5hZGRDbGFzcyhcImRvd25cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9ibGVtLnRleHRNb3ZpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gVGhpcyBibG9jayBqdXN0IGxvc3QgdGV4dHVhbCBmb2N1c1xuICAgIHJlbGVhc2VGb2N1cygpIHtcbiAgICAgICAgJCh0aGlzLnZpZXcpLnJlbW92ZUNsYXNzKFwiZG93biB1cFwiKTtcbiAgICAgICAgaWYgKHRoaXMucHJvYmxlbS50ZXh0Rm9jdXMgPT0gdGhpcykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnByb2JsZW0udGV4dE1vdmluZykge1xuICAgICAgICAgICAgICAgIC8vIGV4aXQgb3V0IG9mIHByb2JsZW0gYnV0IHN0YXkgd2F5IGludG8gcHJvYmxlbVxuICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS50ZXh0Rm9jdXMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvYmxlbS50ZXh0TW92ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0ubG9nTW92ZShcImttb3ZlXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0udGV4dE1vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLmV4aXRLZXlib2FyZE1vZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGJlY29tZSBzZWxlY3RhYmxlLCBidXQgbm90IGFjdGl2ZVxuICAgICAgICAgICAgJCh0aGlzLnZpZXcpLmF0dHIoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xuICAgICAgICAgICAgJCh0aGlzLnZpZXcpLnVuYmluZChcImZvY3VzXCIpO1xuICAgICAgICAgICAgJCh0aGlzLnZpZXcpLnVuYmluZChcImJsdXJcIik7XG4gICAgICAgICAgICAkKHRoaXMudmlldykudW5iaW5kKFwia2V5ZG93blwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBNYWtlIHRoaXMgYmxvY2sgaW50byB0aGUga2V5Ym9hcmQgZW50cnkgcG9pbnRcbiAgICBtYWtlVGFiSW5kZXgoKSB7XG4gICAgICAgICQodGhpcy52aWV3KS5hdHRyKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICQodGhpcy52aWV3KS5mb2N1cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGF0Lm5ld0ZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKHRoaXMudmlldykuYmx1cihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGF0LnJlbGVhc2VGb2N1cygpO1xuICAgICAgICB9KTtcbiAgICAgICAgJCh0aGlzLnZpZXcpLmtleWRvd24oZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGF0LmtleURvd24oZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gQ2FsbGVkIHRvIGRpc2FibGUgaW50ZXJhY3Rpb24gZm9yIHRoZSBmdXR1cmVcbiAgICBkaXNhYmxlKCkge1xuICAgICAgICBpZiAodGhpcy5oYW1tZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5oYW1tZXIuc2V0KHsgZW5hYmxlOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJCh0aGlzLnZpZXcpLmF0dHIoXCJ0YWJpbmRleFwiKSA9PSBcIjBcIikge1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlRm9jdXMoKTtcbiAgICAgICAgICAgICQodGhpcy52aWV3KS5yZW1vdmVBdHRyKFwidGFiaW5kZXhcIik7XG4gICAgICAgICAgICB0aGlzLnByb2JsZW0uaW5pdGlhbGl6ZVRhYkluZGV4KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMudmlldykucmVtb3ZlQXR0cihcInRhYmluZGV4XCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEVuYWJsZSBmdW5jdGlvbmFsaXR5IGFmdGVyIHJlc2V0IGJ1dHRvbiBoYXMgYmVlbiBwcmVzc2VkXG4gICAgcmVzZXRWaWV3KCkge1xuICAgICAgICBpZiAodGhpcy5oYW1tZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5oYW1tZXIuc2V0KHsgZW5hYmxlOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghJCh0aGlzLnZpZXcpWzBdLmhhc0F0dHJpYnV0ZShcInRhYmluZGV4XCIpKSB7XG4gICAgICAgICAgICAkKHRoaXMudmlldykuYXR0cihcInRhYmluZGV4XCIsIFwiLTFcIik7XG4gICAgICAgIH1cbiAgICAgICAgJCh0aGlzLnZpZXcpLmNzcyh7IG9wYWNpdHk6IFwiXCIgfSk7XG4gICAgfVxuICAgIC8vIENhbGxlZCB0byBkZXN0cm95IGludGVyYWN0aW9uIGZvciB0aGUgZnV0dXJlXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFtbWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFtbWVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmhhbW1lcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJCh0aGlzLnZpZXcpLmF0dHIoXCJ0YWJpbmRleFwiKSA9PSBcIjBcIikge1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlRm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICAkKHRoaXMudmlldykucmVtb3ZlQXR0cihcInRhYmluZGV4XCIpO1xuICAgIH1cbiAgICAvLyBDYWxsZWQgd2hlbiBhIGJsb2NrIGlzIHBpY2tlZCB1cFxuICAgIHBhblN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMucHJvYmxlbS5jbGVhckZlZWRiYWNrKCk7XG4gICAgICAgIGlmICh0aGlzLnByb2JsZW0uc3RhcnRlZCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIGxvZyB0aGUgZmlyc3QgdGltZSB0aGF0IHNvbWV0aGluZyBnZXRzIG1vdmVkXG4gICAgICAgICAgICB0aGlzLnByb2JsZW0uc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnByb2JsZW0ubG9nTW92ZShcInN0YXJ0XCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb2JsZW0udGV4dEZvY3VzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIHN0b3AgdGV4dCBmb2N1cyB3aGVuIGRyYWdnaW5nXG4gICAgICAgICAgICB0aGlzLnByb2JsZW0udGV4dEZvY3VzLnJlbGVhc2VGb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvYmxlbS5tb3ZpbmcgPSB0aGlzO1xuICAgICAgICAvLyBVcGRhdGUgdGhlIHZpZXdcbiAgICAgICAgdGhpcy5wcm9ibGVtLm1vdmluZ1ggPSBldmVudC5zcmNFdmVudC5wYWdlWDtcbiAgICAgICAgdGhpcy5wcm9ibGVtLm1vdmluZ1kgPSBldmVudC5zcmNFdmVudC5wYWdlWTtcbiAgICAgICAgdGhpcy5wcm9ibGVtLnVwZGF0ZVZpZXcoKTtcbiAgICB9XG4gICAgLy8gQ2FsbGVkIHdoZW4gYSBibG9jayBpcyBkcm9wcGVkXG4gICAgcGFuRW5kKGV2ZW50KSB7XG4gICAgICAgIHRoaXMucHJvYmxlbS5pc0Fuc3dlcmVkID0gdHJ1ZTtcbiAgICAgICAgZGVsZXRlIHRoaXMucHJvYmxlbS5tb3Zpbmc7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnByb2JsZW0ubW92aW5nWDtcbiAgICAgICAgZGVsZXRlIHRoaXMucHJvYmxlbS5tb3ZpbmdZO1xuICAgICAgICB0aGlzLnByb2JsZW0udXBkYXRlVmlldygpO1xuICAgICAgICB0aGlzLnByb2JsZW0ubG9nTW92ZShcIm1vdmVcIik7XG4gICAgfVxuICAgIC8vIENhbGxlZCB3aGVuIGEgYmxvY2sgaXMgbW92ZWRcbiAgICBwYW5Nb3ZlKGV2ZW50KSB7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdmlld1xuICAgICAgICB0aGlzLnByb2JsZW0ubW92aW5nWCA9IGV2ZW50LnNyY0V2ZW50LnBhZ2VYO1xuICAgICAgICB0aGlzLnByb2JsZW0ubW92aW5nWSA9IGV2ZW50LnNyY0V2ZW50LnBhZ2VZO1xuICAgICAgICB0aGlzLnByb2JsZW0udXBkYXRlVmlldygpO1xuICAgIH1cbiAgICAvLyBIYW5kbGUgYSBrZXlwcmVzcyBldmVudCB3aGVuIGluIGZvY3VzXG4gICAga2V5RG93bihldmVudCkge1xuICAgICAgICBpZiAodGhpcy5wcm9ibGVtLnN0YXJ0ZWQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBsb2cgdGhlIGZpcnN0IHRpbWUgdGhhdCBzb21ldGhpbmcgZ2V0cyBtb3ZlZFxuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLmxvZ01vdmUoXCJrc3RhcnRcIik7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDM3OiAvLyBsZWZ0XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvYmxlbS50ZXh0TW92ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVMZWZ0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RMZWZ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzODogLy8gdXBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9ibGVtLnRleHRNb3ZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVVwKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RVcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOTogLy8gcmlnaHRcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9ibGVtLnRleHRNb3ZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RSaWdodCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0MDogLy8gZG93blxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb2JsZW0udGV4dE1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRG93bigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RG93bigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzMjogLy8gc3BhY2VcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU1vdmUoKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxMzogLy8gZW50ZXJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU1vdmUoKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIE1vdmUgYmxvY2sgbGVmdFxuICAgIG1vdmVMZWZ0KCkge1xuICAgICAgICB2YXIgaW5kZXgsIGJsb2NrO1xuICAgICAgICBpZiAoIXRoaXMuaW5Tb3VyY2VBcmVhKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmluZGVudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gbW92ZSB0byBzb3VyY2UgYXJlYVxuICAgICAgICAgICAgICAgIHZhciBibG9ja3MgPSB0aGlzLnByb2JsZW0uc291cmNlQmxvY2tzKCk7XG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMudmVydGljYWxPZmZzZXQoKTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsaWRTb3VyY2VJbmRleGVzID0gdGhpcy52YWxpZFNvdXJjZUluZGV4ZXMoKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbGlkU291cmNlSW5kZXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHZhbGlkU291cmNlSW5kZXhlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IGJsb2Nrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS50ZXh0TW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS5zb3VyY2VBcmVhLmFwcGVuZENoaWxkKHRoaXMudmlldyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMudmlldykuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS5zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS51cGRhdGVWaWV3KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrID0gYmxvY2tzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChibG9jay52ZXJ0aWNhbE9mZnNldCgpID49IG9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS50ZXh0TW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0uc291cmNlQXJlYS5pbnNlcnRCZWZvcmUodGhpcy52aWV3LCBibG9jay52aWV3KTtcbiAgICAgICAgICAgICAgICAkKHRoaXMudmlldykuZm9jdXMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gcmVkdWNlIGluZGVudFxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZW50ID0gdGhpcy5pbmRlbnQgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnN0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnVwZGF0ZVZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBNb3ZlIGJsb2NrIHVwXG4gICAgbW92ZVVwKCkge1xuICAgICAgICBpZiAodGhpcy5pblNvdXJjZUFyZWEoKSkge1xuICAgICAgICAgICAgbGV0IGJsb2NrcyA9IHRoaXMucHJvYmxlbS5zb3VyY2VCbG9ja3MoKTtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLnZlcnRpY2FsT2Zmc2V0KCk7XG4gICAgICAgICAgICB2YXIgdmFsaWRTb3VyY2VJbmRleGVzID0gdGhpcy52YWxpZFNvdXJjZUluZGV4ZXMoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsaWRTb3VyY2VJbmRleGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID1cbiAgICAgICAgICAgICAgICAgICAgdmFsaWRTb3VyY2VJbmRleGVzW3ZhbGlkU291cmNlSW5kZXhlcy5sZW5ndGggLSAxIC0gaV07XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgYmxvY2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYmxvY2sgPSBibG9ja3NbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2sudmVydGljYWxPZmZzZXQoKSA8IG9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnRleHRNb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnNvdXJjZUFyZWEuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlldyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9jay52aWV3XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzLnZpZXcpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0uc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0udXBkYXRlVmlldygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgYmxvY2tzID0gdGhpcy5wcm9ibGVtLmFuc3dlckJsb2NrcygpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2tzW2ldLnZpZXcuaWQgPT0gdGhpcy52aWV3LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS50ZXh0TW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLmFuc3dlckFyZWEuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LFxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tzW2kgLSAxXS52aWV3XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcy52aWV3KS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0uc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS51cGRhdGVWaWV3KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIE1vdmUgYmxvY2sgcmlnaHRcbiAgICBtb3ZlUmlnaHQoKSB7XG4gICAgICAgIGlmICh0aGlzLmluU291cmNlQXJlYSgpKSB7XG4gICAgICAgICAgICAvLyBtb3ZlIHRvIGFuc3dlciBhcmVhXG4gICAgICAgICAgICB0aGlzLmluZGVudCA9IDA7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy52ZXJ0aWNhbE9mZnNldCgpO1xuICAgICAgICAgICAgdmFyIGFuc3dlckJsb2NrcyA9IHRoaXMucHJvYmxlbS5hbnN3ZXJCbG9ja3MoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW5zd2VyQmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBhbnN3ZXJCbG9ja3NbaV07XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW1PZmZzZXQgPSBpdGVtLnZlcnRpY2FsT2Zmc2V0KCk7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1PZmZzZXQgPj0gb2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS50ZXh0TW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLmFuc3dlckFyZWEuaW5zZXJ0QmVmb3JlKHRoaXMudmlldywgaXRlbS52aWV3KTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLnZpZXcpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS5zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnVwZGF0ZVZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnRleHRNb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLmFuc3dlckFyZWEuYXBwZW5kQ2hpbGQodGhpcy52aWV3KTtcbiAgICAgICAgICAgICQodGhpcy52aWV3KS5mb2N1cygpO1xuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnN0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnVwZGF0ZVZpZXcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGluIGFuc3dlciBhcmVhOiBpbmNyZWFzZSB0aGUgaW5kZW50XG4gICAgICAgICAgICBpZiAodGhpcy5pbmRlbnQgIT09IHRoaXMucHJvYmxlbS5pbmRlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGVudCA9IHRoaXMuaW5kZW50ICsgMTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0uc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnVwZGF0ZVZpZXcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBNb3ZlIGJsb2NrIGRvd25cbiAgICBtb3ZlRG93bigpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5Tb3VyY2VBcmVhKCkpIHtcbiAgICAgICAgICAgIGxldCBibG9ja3MgPSB0aGlzLnByb2JsZW0uc291cmNlQmxvY2tzKCk7XG4gICAgICAgICAgICB2YXIgdmFsaWRTb3VyY2VJbmRleGVzID0gdGhpcy52YWxpZFNvdXJjZUluZGV4ZXMoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJsb2Nrc1tpXS52aWV3LmlkID09IHRoaXMudmlldy5pZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbXlJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWxpZFNvdXJjZUluZGV4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB2YWxpZFNvdXJjZUluZGV4ZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IGJsb2Nrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnRleHRNb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0uc291cmNlQXJlYS5hcHBlbmRDaGlsZCh0aGlzLnZpZXcpO1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMudmlldykuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnN0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0udXBkYXRlVmlldygpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4IC0gbXlJbmRleCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnRleHRNb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0uc291cmNlQXJlYS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja3NbaW5kZXhdLnZpZXdcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLnZpZXcpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS5zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnVwZGF0ZVZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGJsb2NrcyA9IHRoaXMucHJvYmxlbS5hbnN3ZXJCbG9ja3MoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJsb2Nrc1tpXS52aWV3LmlkID09IHRoaXMudmlldy5pZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSBibG9ja3MubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PSBibG9ja3MubGVuZ3RoIC0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnRleHRNb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ibGVtLmFuc3dlckFyZWEuYXBwZW5kQ2hpbGQodGhpcy52aWV3KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS50ZXh0TW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS5hbnN3ZXJBcmVhLmluc2VydEJlZm9yZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tzW2kgKyAyXS52aWV3XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICQodGhpcy52aWV3KS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0uc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS51cGRhdGVWaWV3KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIE1vdmUgc2VsZWN0aW9uIGxlZnRcbiAgICBzZWxlY3RMZWZ0KCkge1xuICAgICAgICBpZiAoIXRoaXMuaW5Tb3VyY2VBcmVhKCkpIHtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLnZlcnRpY2FsT2Zmc2V0KCk7XG4gICAgICAgICAgICB2YXIgc291cmNlQmxvY2tzID0gdGhpcy5wcm9ibGVtLmVuYWJsZWRTb3VyY2VCbG9ja3MoKTtcbiAgICAgICAgICAgIGlmIChzb3VyY2VCbG9ja3MubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjaG9vc2VOZXh0ID0gc291cmNlQmxvY2tzWzBdO1xuICAgICAgICAgICAgdmFyIGNob29zZU9mZnNldCA9IGNob29zZU5leHQudmVydGljYWxPZmZzZXQoKSAtIG9mZnNldDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgc291cmNlQmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBzb3VyY2VCbG9ja3NbaV07XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW1PZmZzZXQgPSBpdGVtLnZlcnRpY2FsT2Zmc2V0KCkgLSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGl0ZW1PZmZzZXQpIDwgTWF0aC5hYnMoY2hvb3NlT2Zmc2V0KSkge1xuICAgICAgICAgICAgICAgICAgICBjaG9vc2VOZXh0ID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgY2hvb3NlT2Zmc2V0ID0gaXRlbU9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb2JsZW0udGV4dEZvY3VzID0gY2hvb3NlTmV4dDtcbiAgICAgICAgICAgIGNob29zZU5leHQubWFrZVRhYkluZGV4KCk7XG4gICAgICAgICAgICAkKGNob29zZU5leHQudmlldykuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBNb3ZlIHNlbGVjdGlvbiB1cFxuICAgIHNlbGVjdFVwKCkge1xuICAgICAgICB2YXIgY2hvb3NlTmV4dCA9IGZhbHNlO1xuICAgICAgICB2YXIgYmxvY2tzO1xuICAgICAgICBpZiAodGhpcy5pblNvdXJjZUFyZWEoKSkge1xuICAgICAgICAgICAgYmxvY2tzID0gdGhpcy5wcm9ibGVtLmVuYWJsZWRTb3VyY2VCbG9ja3MoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJsb2NrcyA9IHRoaXMucHJvYmxlbS5lbmFibGVkQW5zd2VyQmxvY2tzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IGJsb2Nrcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBibG9ja3NbaV07XG4gICAgICAgICAgICBpZiAoY2hvb3NlTmV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvYmxlbS50ZXh0Rm9jdXMgPSBpdGVtO1xuICAgICAgICAgICAgICAgIGl0ZW0ubWFrZVRhYkluZGV4KCk7XG4gICAgICAgICAgICAgICAgJChpdGVtLnZpZXcpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnZpZXcuaWQgPT0gdGhpcy52aWV3LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNob29zZU5leHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBNb3ZlIHNlbGVjdGlvbiByaWdodFxuICAgIHNlbGVjdFJpZ2h0KCkge1xuICAgICAgICBpZiAodGhpcy5pblNvdXJjZUFyZWEoKSkge1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMudmVydGljYWxPZmZzZXQoKTtcbiAgICAgICAgICAgIHZhciBibG9ja3MgPSB0aGlzLnByb2JsZW0uZW5hYmxlZEFuc3dlckJsb2NrcygpO1xuICAgICAgICAgICAgaWYgKGJsb2Nrcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNob29zZU5leHQgPSBibG9ja3NbMF07XG4gICAgICAgICAgICB2YXIgY2hvb3NlT2Zmc2V0ID0gY2hvb3NlTmV4dC52ZXJ0aWNhbE9mZnNldCgpIC0gb2Zmc2V0O1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGJsb2Nrc1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbU9mZnNldCA9IGl0ZW0udmVydGljYWxPZmZzZXQoKSAtIG9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoaXRlbU9mZnNldCkgPCBNYXRoLmFicyhjaG9vc2VPZmZzZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNob29zZU5leHQgPSBpdGVtO1xuICAgICAgICAgICAgICAgICAgICBjaG9vc2VPZmZzZXQgPSBpdGVtT2Zmc2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvYmxlbS50ZXh0Rm9jdXMgPSBjaG9vc2VOZXh0O1xuICAgICAgICAgICAgY2hvb3NlTmV4dC5tYWtlVGFiSW5kZXgoKTtcbiAgICAgICAgICAgICQoY2hvb3NlTmV4dC52aWV3KS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIE1vdmUgc2VsZWN0aW9uIGRvd25cbiAgICBzZWxlY3REb3duKCkge1xuICAgICAgICB2YXIgY2hvb3NlTmV4dCA9IGZhbHNlO1xuICAgICAgICB2YXIgYmxvY2tzO1xuICAgICAgICBpZiAodGhpcy5pblNvdXJjZUFyZWEoKSkge1xuICAgICAgICAgICAgYmxvY2tzID0gdGhpcy5wcm9ibGVtLmVuYWJsZWRTb3VyY2VCbG9ja3MoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJsb2NrcyA9IHRoaXMucHJvYmxlbS5lbmFibGVkQW5zd2VyQmxvY2tzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gYmxvY2tzW2ldO1xuICAgICAgICAgICAgaWYgKGNob29zZU5leHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2JsZW0udGV4dEZvY3VzID0gaXRlbTtcbiAgICAgICAgICAgICAgICBpdGVtLm1ha2VUYWJJbmRleCgpO1xuICAgICAgICAgICAgICAgICQoaXRlbS52aWV3KS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS52aWV3LmlkID09IHRoaXMudmlldy5pZCkge1xuICAgICAgICAgICAgICAgICAgICBjaG9vc2VOZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gVG9nZ2xlIHdoZXRoZXIgdG8gbW92ZSB0aGlzIGJsb2NrXG4gICAgdG9nZ2xlTW92ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvYmxlbS50ZXh0TW92ZSkge1xuICAgICAgICAgICAgJCh0aGlzLnZpZXcpLnJlbW92ZUNsYXNzKFwidXBcIik7XG4gICAgICAgICAgICAkKHRoaXMudmlldykuYWRkQ2xhc3MoXCJkb3duXCIpO1xuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnRleHRNb3ZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnByb2JsZW0ubG9nTW92ZShcImttb3ZlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzLnZpZXcpLnJlbW92ZUNsYXNzKFwiZG93blwiKTtcbiAgICAgICAgICAgICQodGhpcy52aWV3KS5hZGRDbGFzcyhcInVwXCIpO1xuICAgICAgICAgICAgdGhpcy5wcm9ibGVtLnRleHRNb3ZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBbnN3ZXIgYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoaXMgY29kZWJsb2NrIGZvciBzYXZpbmdcbiAgICBoYXNoKCkge1xuICAgICAgICB2YXIgaGFzaCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaGFzaCArPSB0aGlzLmxpbmVzW2ldLmluZGV4ICsgXCJfXCI7XG4gICAgICAgIH1cbiAgICAgICAgaGFzaCArPSB0aGlzLmluZGVudDtcbiAgICAgICAgcmV0dXJuIGhhc2g7XG4gICAgfVxuICAgIC8vIEFuc3dlciB3aGF0IHRoZSBpbmRlbnQgc2hvdWxkIGJlIGZvciB0aGUgc29sdXRpb25cbiAgICBzb2x1dGlvbkluZGVudCgpIHtcbiAgICAgICAgdmFyIHNoYXJlZEluZGVudCA9IHRoaXMubGluZXNbMF0uaW5kZW50O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHRoaXMubGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNoYXJlZEluZGVudCA9IE1hdGgubWluKHNoYXJlZEluZGVudCwgdGhpcy5saW5lc1tpXS5pbmRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaGFyZWRJbmRlbnQ7XG4gICAgfVxufVxuIiwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT09IFBhcnNvbnNMaW5lIE9iamVjdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PT09PT09IFRoZSBtb2RlbCBhbmQgdmlldyBvZiBhIGxpbmUgb2YgY29kZS5cbj09PT09PT09IEJhc2VkIG9uIHdoYXQgaXMgc3BlY2lmaWVkIGluIHRoZSBwcm9ibGVtLlxuPT09PT09PT0gUGFyc29uQmxvY2sgb2JqZWN0cyBoYXZlIG9uZSBvciBtb3JlIG9mIHRoZXNlLlxuPT09PSBQUk9QRVJUSUVTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT09PT09PSBwcm9ibGVtOiB0aGUgUGFyc29ucyBwcm9ibGVtXG49PT09PT09PSBpbmRleDogdGhlIGluZGV4IG9mIHRoZSBsaW5lIGluIHRoZSBwcm9ibGVtXG49PT09PT09PSB0ZXh0OiB0aGUgdGV4dCBvZiB0aGUgY29kZSBsaW5lXG49PT09PT09PSBpbmRlbnQ6IHRoZSBpbmRlbnQgbGV2ZWxcbj09PT09PT09IHZpZXc6IGFuIGVsZW1lbnQgZm9yIHZpZXdpbmcgdGhpcyBvYmplY3Rcbj09PT09PT09IGRpc3RyYWN0b3I6IHdoZXRoZXIgaXQgaXMgYSBkaXN0cmFjdG9yXG49PT09PT09PSBwYWlyZWQ6IHdoZXRoZXIgaXQgaXMgYSBwYWlyZWQgZGlzdHJhY3RvclxuPT09PT09PT0gZ3JvdXBXaXRoTmV4dDogd2hldGhlciBpdCBpcyBncm91cGVkIHdpdGggdGhlIGZvbGxvd2luZyBsaW5lXG49PT09PT09PSB3aWR0aDogdGhlIHBpeGVsIHdpZHRoIHdoZW4gcmVuZGVyZWRcbj09PT09PT09PT09PSBpbiB0aGUgaW5pdGlhbCBncm91cGluZ1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vLyBJbml0aWFsaXplIGZyb20gY29kZXN0cmluZ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJzb25zTGluZSB7XG4gICAgY29uc3RydWN0b3IocHJvYmxlbSwgY29kZXN0cmluZykge1xuICAgICAgICB0aGlzLnByb2JsZW0gPSBwcm9ibGVtO1xuICAgICAgICB0aGlzLmluZGV4ID0gcHJvYmxlbS5saW5lcy5sZW5ndGg7XG4gICAgICAgIHZhciB0cmltbWVkID0gY29kZXN0cmluZy5yZXBsYWNlKC9cXHMqJC8sIFwiXCIpO1xuICAgICAgICB0aGlzLnRleHQgPSB0cmltbWVkLnJlcGxhY2UoL15cXHMqLywgXCJcIik7XG4gICAgICAgIHRoaXMuaW5kZW50ID0gdHJpbW1lZC5sZW5ndGggLSB0aGlzLnRleHQubGVuZ3RoO1xuICAgICAgICAvLyBDcmVhdGUgdGhlIFZpZXdcbiAgICAgICAgdmFyIHZpZXc7XG4gICAgICAgIGlmIChwcm9ibGVtLm9wdGlvbnMubGFuZ3VhZ2UgPT0gXCJuYXR1cmFsXCIgfHwgcHJvYmxlbS5vcHRpb25zLmxhbmd1YWdlID09IFwibWF0aFwiKSB7XG4gICAgICAgICAgICB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvZGVcIik7XG4gICAgICAgICAgICAkKHZpZXcpLmFkZENsYXNzKHByb2JsZW0ub3B0aW9ucy5wcmV0dGlmeUxhbmd1YWdlKTtcbiAgICAgICAgfVxuICAgICAgICB2aWV3LmlkID0gcHJvYmxlbS5jb3VudGVySWQgKyBcIi1saW5lLVwiICsgdGhpcy5pbmRleDtcbiAgICAgICAgdmlldy5pbm5lckhUTUwgKz0gdGhpcy50ZXh0O1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICBwcm9ibGVtLmxpbmVzLnB1c2godGhpcyk7XG4gICAgfVxuICAgIC8vIEluaXRpYWxpemUgd2hhdCB3aWR0aCB0aGUgbGluZSB3b3VsZCBuYXR1cmFsbHkgaGF2ZSAod2l0aG91dCBpbmRlbnQpXG4gICAgaW5pdGlhbGl6ZVdpZHRoKCkge1xuICAgICAgICAvLyB0aGlzLndpZHRoIGRvZXMgbm90IGFwcGVhciB0byBiZSB1c2VkIGFueXdoZXJlIGxhdGVyXG4gICAgICAgIC8vIHNpbmNlIGNoYW5naW5nIHRoZSB2YWx1ZSBvZiB0aGlzLndpZHRoIGFwcGVhcnMgdG8gaGF2ZSBubyBlZmZlY3QuIC0gVmluY2VudCBRaXUgKFNlcHRlbWJlciAyMDIwKVxuICAgICAgICB0aGlzLndpZHRoID1cbiAgICAgICAgICAgICQodGhpcy52aWV3KS5vdXRlcldpZHRoKHRydWUpIC1cbiAgICAgICAgICAgIHRoaXMucHJvYmxlbS5vcHRpb25zLnBpeGVsc1BlckluZGVudCAqIHRoaXMuaW5kZW50O1xuXG4gICAgICAgIC8vIFBhc3MgdGhpcyBpbmZvcm1hdGlvbiBvbiB0byBiZSB1c2VkIGluIGNsYXNzIFBhcnNvbnMgZnVuY3Rpb24gaW5pdGlhbGl6ZUFyZWFzXG4gICAgICAgIC8vIHRvIG1hbnVhbGx5IGRldGVybWluZSBhcHByb3ByaWF0ZSB3aWR0aHMgLSBWaW5jZW50IFFpdSAoU2VwdGVtYmVyIDIwMjApXG4gICAgICAgIHRoaXMudmlldy5mb250U2l6ZSA9IHdpbmRvd1xuICAgICAgICAgICAgLmdldENvbXB1dGVkU3R5bGUodGhpcy52aWV3LCBudWxsKVxuICAgICAgICAgICAgLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXNpemVcIik7XG4gICAgICAgIHRoaXMudmlldy5waXhlbHNQZXJJbmRlbnQgPSB0aGlzLnByb2JsZW0ub3B0aW9ucy5waXhlbHNQZXJJbmRlbnQ7XG4gICAgICAgIHRoaXMudmlldy5pbmRlbnQgPSB0aGlzLmluZGVudDtcblxuICAgICAgICAvLyBGaWd1cmUgb3V0IHdoaWNoIHR5cGVmYWNlIHdpbGwgYmUgcmVuZGVyZWQgYnkgY29tcGFyaW5nIHRleHQgd2lkdGhzIHRvIGJyb3dzZXIgZGVmYXVsdCAtIFZpbmNlbnQgUWl1IChTZXB0ZW1iZXIgMjAyMClcbiAgICAgICAgdmFyIHRlbXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICB2YXIgdGVtcENhbnZhc0N0eCA9IHRlbXBDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB2YXIgcG9zc2libGVGb250cyA9IHdpbmRvd1xuICAgICAgICAgICAgLmdldENvbXB1dGVkU3R5bGUodGhpcy52aWV3LCBudWxsKVxuICAgICAgICAgICAgLmdldFByb3BlcnR5VmFsdWUoXCJmb250LWZhbWlseVwiKVxuICAgICAgICAgICAgLnNwbGl0KFwiLCBcIik7XG4gICAgICAgIHZhciBmaWxsZXJUZXh0ID0gXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODksLi8hQCMkJV4mKi0rXCI7XG4gICAgICAgIHRlbXBDYW52YXNDdHguZm9udCA9IHRoaXMudmlldy5mb250U2l6ZSArIFwiIHNlcmlmXCI7XG4gICAgICAgIHZhciBzZXJpZldpZHRoID0gdGVtcENhbnZhc0N0eC5tZWFzdXJlVGV4dChmaWxsZXJUZXh0KS53aWR0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NzaWJsZUZvbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocG9zc2libGVGb250c1tpXS5pbmNsdWRlcygnXCInKSkge1xuICAgICAgICAgICAgICAgIHBvc3NpYmxlRm9udHNbaV0gPSBwb3NzaWJsZUZvbnRzW2ldLnJlcGxhY2VBbGwoJ1wiJywgXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocG9zc2libGVGb250c1tpXS5pbmNsdWRlcyhcIidcIikpIHtcbiAgICAgICAgICAgICAgICBwb3NzaWJsZUZvbnRzW2ldID0gcG9zc2libGVGb250c1tpXS5yZXBsYWNlQWxsKFwiJ1wiLCBcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRlbXBDYW52YXNDdHguZm9udCA9IHRoaXMudmlldy5mb250U2l6ZSArIFwiIFwiICsgcG9zc2libGVGb250c1tpXTtcbiAgICAgICAgICAgIGlmICh0ZW1wQ2FudmFzQ3R4Lm1lYXN1cmVUZXh0KGZpbGxlclRleHQpLndpZHRoICE9PSBzZXJpZldpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LmZvbnRGYW1pbHkgPSBwb3NzaWJsZUZvbnRzW2ldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEFuc3dlciB0aGUgYmxvY2sgdGhhdCB0aGlzIGxpbmUgaXMgY3VycmVudGx5IGluXG4gICAgYmxvY2soKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9ibGVtLmJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJsb2NrID0gdGhpcy5wcm9ibGVtLmJsb2Nrc1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYmxvY2subGluZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2subGluZXNbal0gPT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBBbnN3ZXIgdGhlIGluZGVudCBiYXNlZCBvbiB0aGUgdmlld1xuICAgIHZpZXdJbmRlbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2JsZW0ubm9pbmRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluZGVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBibG9jayA9IHRoaXMuYmxvY2soKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluZGVudCAtIGJsb2NrLnNvbHV0aW9uSW5kZW50KCkgKyBibG9jay5pbmRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJmdW5jdGlvbiBIKCkge1xuICAgIHZhciB4ID1cbiAgICAgICAgbmF2aWdhdG9yICYmXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQgJiZcbiAgICAgICAgL1xcYk1TSUUgNlxcLi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICBIID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH07XG4gICAgcmV0dXJuIHg7XG59XG4oZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24geChiKSB7XG4gICAgICAgIGIgPSBiLnNwbGl0KC8gL2cpO1xuICAgICAgICB2YXIgYSA9IHt9O1xuICAgICAgICBmb3IgKHZhciBjID0gYi5sZW5ndGg7IC0tYyA+PSAwOyApIHtcbiAgICAgICAgICAgIHZhciBkID0gYltjXTtcbiAgICAgICAgICAgIGlmIChkKSBhW2RdID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgdmFyIHkgPSBcImJyZWFrIGNvbnRpbnVlIGRvIGVsc2UgZm9yIGlmIHJldHVybiB3aGlsZSBcIixcbiAgICAgICAgVSA9XG4gICAgICAgICAgICB5ICtcbiAgICAgICAgICAgIFwiYXV0byBjYXNlIGNoYXIgY29uc3QgZGVmYXVsdCBkb3VibGUgZW51bSBleHRlcm4gZmxvYXQgZ290byBpbnQgbG9uZyByZWdpc3RlciBzaG9ydCBzaWduZWQgc2l6ZW9mIHN0YXRpYyBzdHJ1Y3Qgc3dpdGNoIHR5cGVkZWYgdW5pb24gdW5zaWduZWQgdm9pZCB2b2xhdGlsZSBcIixcbiAgICAgICAgRCA9XG4gICAgICAgICAgICBVICtcbiAgICAgICAgICAgIFwiY2F0Y2ggY2xhc3MgZGVsZXRlIGZhbHNlIGltcG9ydCBuZXcgb3BlcmF0b3IgcHJpdmF0ZSBwcm90ZWN0ZWQgcHVibGljIHRoaXMgdGhyb3cgdHJ1ZSB0cnkgXCIsXG4gICAgICAgIEkgPVxuICAgICAgICAgICAgRCArXG4gICAgICAgICAgICBcImFsaWdub2YgYWxpZ25fdW5pb24gYXNtIGF4aW9tIGJvb2wgY29uY2VwdCBjb25jZXB0X21hcCBjb25zdF9jYXN0IGNvbnN0ZXhwciBkZWNsdHlwZSBkeW5hbWljX2Nhc3QgZXhwbGljaXQgZXhwb3J0IGZyaWVuZCBpbmxpbmUgbGF0ZV9jaGVjayBtdXRhYmxlIG5hbWVzcGFjZSBudWxscHRyIHJlaW50ZXJwcmV0X2Nhc3Qgc3RhdGljX2Fzc2VydCBzdGF0aWNfY2FzdCB0ZW1wbGF0ZSB0eXBlaWQgdHlwZW5hbWUgdHlwZW9mIHVzaW5nIHZpcnR1YWwgd2NoYXJfdCB3aGVyZSBcIixcbiAgICAgICAgSiA9XG4gICAgICAgICAgICBEICtcbiAgICAgICAgICAgIFwiYm9vbGVhbiBieXRlIGV4dGVuZHMgZmluYWwgZmluYWxseSBpbXBsZW1lbnRzIGltcG9ydCBpbnN0YW5jZW9mIG51bGwgbmF0aXZlIHBhY2thZ2Ugc3RyaWN0ZnAgc3VwZXIgc3luY2hyb25pemVkIHRocm93cyB0cmFuc2llbnQgXCIsXG4gICAgICAgIFYgPVxuICAgICAgICAgICAgSiArXG4gICAgICAgICAgICBcImFzIGJhc2UgYnkgY2hlY2tlZCBkZWNpbWFsIGRlbGVnYXRlIGRlc2NlbmRpbmcgZXZlbnQgZml4ZWQgZm9yZWFjaCBmcm9tIGdyb3VwIGltcGxpY2l0IGluIGludGVyZmFjZSBpbnRlcm5hbCBpbnRvIGlzIGxvY2sgb2JqZWN0IG91dCBvdmVycmlkZSBvcmRlcmJ5IHBhcmFtcyByZWFkb25seSByZWYgc2J5dGUgc2VhbGVkIHN0YWNrYWxsb2Mgc3RyaW5nIHNlbGVjdCB1aW50IHVsb25nIHVuY2hlY2tlZCB1bnNhZmUgdXNob3J0IHZhciBcIixcbiAgICAgICAgSyA9XG4gICAgICAgICAgICBEICtcbiAgICAgICAgICAgIFwiZGVidWdnZXIgZXZhbCBleHBvcnQgZnVuY3Rpb24gZ2V0IG51bGwgc2V0IHVuZGVmaW5lZCB2YXIgd2l0aCBJbmZpbml0eSBOYU4gXCIsXG4gICAgICAgIEwgPVxuICAgICAgICAgICAgXCJjYWxsZXIgZGVsZXRlIGRpZSBkbyBkdW1wIGVsc2lmIGV2YWwgZXhpdCBmb3JlYWNoIGZvciBnb3RvIGlmIGltcG9ydCBsYXN0IGxvY2FsIG15IG5leHQgbm8gb3VyIHByaW50IHBhY2thZ2UgcmVkbyByZXF1aXJlIHN1YiB1bmRlZiB1bmxlc3MgdW50aWwgdXNlIHdhbnRhcnJheSB3aGlsZSBCRUdJTiBFTkQgXCIsXG4gICAgICAgIE0gPVxuICAgICAgICAgICAgeSArXG4gICAgICAgICAgICBcImFuZCBhcyBhc3NlcnQgY2xhc3MgZGVmIGRlbCBlbGlmIGV4Y2VwdCBleGVjIGZpbmFsbHkgZnJvbSBnbG9iYWwgaW1wb3J0IGluIGlzIGxhbWJkYSBub25sb2NhbCBub3Qgb3IgcGFzcyBwcmludCByYWlzZSB0cnkgd2l0aCB5aWVsZCBGYWxzZSBUcnVlIE5vbmUgXCIsXG4gICAgICAgIE4gPVxuICAgICAgICAgICAgeSArXG4gICAgICAgICAgICBcImFsaWFzIGFuZCBiZWdpbiBjYXNlIGNsYXNzIGRlZiBkZWZpbmVkIGVsc2lmIGVuZCBlbnN1cmUgZmFsc2UgaW4gbW9kdWxlIG5leHQgbmlsIG5vdCBvciByZWRvIHJlc2N1ZSByZXRyeSBzZWxmIHN1cGVyIHRoZW4gdHJ1ZSB1bmRlZiB1bmxlc3MgdW50aWwgd2hlbiB5aWVsZCBCRUdJTiBFTkQgXCIsXG4gICAgICAgIE8gPSB5ICsgXCJjYXNlIGRvbmUgZWxpZiBlc2FjIGV2YWwgZmkgZnVuY3Rpb24gaW4gbG9jYWwgc2V0IHRoZW4gdW50aWwgXCIsXG4gICAgICAgIFcgPSBJICsgViArIEsgKyBMICsgTSArIE4gKyBPO1xuICAgIGZ1bmN0aW9uIFgoYikge1xuICAgICAgICByZXR1cm4gKGIgPj0gXCJhXCIgJiYgYiA8PSBcInpcIikgfHwgKGIgPj0gXCJBXCIgJiYgYiA8PSBcIlpcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHUoYiwgYSwgYywgZCkge1xuICAgICAgICBiLnVuc2hpZnQoYywgZCB8fCAwKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGEuc3BsaWNlLmFwcGx5KGEsIGIpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgYi5zcGxpY2UoMCwgMik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIFkgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgYiA9IFtcbiAgICAgICAgICAgICAgICAgICAgXCIhXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiIT1cIixcbiAgICAgICAgICAgICAgICAgICAgXCIhPT1cIixcbiAgICAgICAgICAgICAgICAgICAgXCIjXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiJVwiLFxuICAgICAgICAgICAgICAgICAgICBcIiU9XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiJlwiLFxuICAgICAgICAgICAgICAgICAgICBcIiYmXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiJiY9XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiJj1cIixcbiAgICAgICAgICAgICAgICAgICAgXCIoXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiKlwiLFxuICAgICAgICAgICAgICAgICAgICBcIio9XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiKz1cIixcbiAgICAgICAgICAgICAgICAgICAgXCIsXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiLT1cIixcbiAgICAgICAgICAgICAgICAgICAgXCItPlwiLFxuICAgICAgICAgICAgICAgICAgICBcIi9cIixcbiAgICAgICAgICAgICAgICAgICAgXCIvPVwiLFxuICAgICAgICAgICAgICAgICAgICBcIjpcIixcbiAgICAgICAgICAgICAgICAgICAgXCI6OlwiLFxuICAgICAgICAgICAgICAgICAgICBcIjtcIixcbiAgICAgICAgICAgICAgICAgICAgXCI8XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiPDxcIixcbiAgICAgICAgICAgICAgICAgICAgXCI8PD1cIixcbiAgICAgICAgICAgICAgICAgICAgXCI8PVwiLFxuICAgICAgICAgICAgICAgICAgICBcIj1cIixcbiAgICAgICAgICAgICAgICAgICAgXCI9PVwiLFxuICAgICAgICAgICAgICAgICAgICBcIj09PVwiLFxuICAgICAgICAgICAgICAgICAgICBcIj5cIixcbiAgICAgICAgICAgICAgICAgICAgXCI+PVwiLFxuICAgICAgICAgICAgICAgICAgICBcIj4+XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiPj49XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiPj4+XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiPj4+PVwiLFxuICAgICAgICAgICAgICAgICAgICBcIj9cIixcbiAgICAgICAgICAgICAgICAgICAgXCJAXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiW1wiLFxuICAgICAgICAgICAgICAgICAgICBcIl5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJePVwiLFxuICAgICAgICAgICAgICAgICAgICBcIl5eXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiXl49XCIsXG4gICAgICAgICAgICAgICAgICAgIFwie1wiLFxuICAgICAgICAgICAgICAgICAgICBcInxcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ8PVwiLFxuICAgICAgICAgICAgICAgICAgICBcInx8XCIsXG4gICAgICAgICAgICAgICAgICAgIFwifHw9XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiflwiLFxuICAgICAgICAgICAgICAgICAgICBcImJyZWFrXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY2FzZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImNvbnRpbnVlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVsZXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZG9cIixcbiAgICAgICAgICAgICAgICAgICAgXCJlbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZmluYWxseVwiLFxuICAgICAgICAgICAgICAgICAgICBcImluc3RhbmNlb2ZcIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZXR1cm5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0aHJvd1wiLFxuICAgICAgICAgICAgICAgICAgICBcInRyeVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVvZlwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBhID1cbiAgICAgICAgICAgICAgICAgICAgXCIoPzooPzooPzpefFteMC05Ll0pXFxcXC57MSwzfSl8KD86KD86XnxbXlxcXFwrXSlcXFxcKyl8KD86KD86XnxbXlxcXFwtXSktKVwiO1xuICAgICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBiLmxlbmd0aDsgKytjKSB7XG4gICAgICAgICAgICAgICAgdmFyIGQgPSBiW2NdO1xuICAgICAgICAgICAgICAgIGEgKz0gWChkLmNoYXJBdCgwKSlcbiAgICAgICAgICAgICAgICAgICAgPyBcInxcXFxcYlwiICsgZFxuICAgICAgICAgICAgICAgICAgICA6IFwifFwiICsgZC5yZXBsYWNlKC8oW149PD46Jl0pL2csIFwiXFxcXCQxXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYSArPSBcInxeKVxcXFxzKiRcIjtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKGEpO1xuICAgICAgICB9KSgpLFxuICAgICAgICBQID0gLyYvZyxcbiAgICAgICAgUSA9IC88L2csXG4gICAgICAgIFIgPSAvPi9nLFxuICAgICAgICBaID0gL1xcXCIvZztcbiAgICBmdW5jdGlvbiAkKGIpIHtcbiAgICAgICAgcmV0dXJuIGJcbiAgICAgICAgICAgIC5yZXBsYWNlKFAsIFwiJmFtcDtcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKFEsIFwiJmx0O1wiKVxuICAgICAgICAgICAgLnJlcGxhY2UoUiwgXCImZ3Q7XCIpXG4gICAgICAgICAgICAucmVwbGFjZShaLCBcIiZxdW90O1wiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gRShiKSB7XG4gICAgICAgIHJldHVybiBiXG4gICAgICAgICAgICAucmVwbGFjZShQLCBcIiZhbXA7XCIpXG4gICAgICAgICAgICAucmVwbGFjZShRLCBcIiZsdDtcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKFIsIFwiJmd0O1wiKTtcbiAgICB9XG4gICAgdmFyIGFhID0gLyZsdDsvZyxcbiAgICAgICAgYmEgPSAvJmd0Oy9nLFxuICAgICAgICBjYSA9IC8mYXBvczsvZyxcbiAgICAgICAgZGEgPSAvJnF1b3Q7L2csXG4gICAgICAgIGVhID0gLyZhbXA7L2csXG4gICAgICAgIGZhID0gLyZuYnNwOy9nO1xuICAgIGZ1bmN0aW9uIGdhKGIpIHtcbiAgICAgICAgdmFyIGEgPSBiLmluZGV4T2YoXCImXCIpO1xuICAgICAgICBpZiAoYSA8IDApIHJldHVybiBiO1xuICAgICAgICBmb3IgKC0tYTsgKGEgPSBiLmluZGV4T2YoXCImI1wiLCBhICsgMSkpID49IDA7ICkge1xuICAgICAgICAgICAgdmFyIGMgPSBiLmluZGV4T2YoXCI7XCIsIGEpO1xuICAgICAgICAgICAgaWYgKGMgPj0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBkID0gYi5zdWJzdHJpbmcoYSArIDMsIGMpLFxuICAgICAgICAgICAgICAgICAgICBnID0gMTA7XG4gICAgICAgICAgICAgICAgaWYgKGQgJiYgZC5jaGFyQXQoMCkgPT09IFwieFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGQgPSBkLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgICAgICAgICAgZyA9IDE2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZSA9IHBhcnNlSW50KGQsIGcpO1xuICAgICAgICAgICAgICAgIGlmICghaXNOYU4oZSkpXG4gICAgICAgICAgICAgICAgICAgIGIgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYi5zdWJzdHJpbmcoMCwgYSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nLmZyb21DaGFyQ29kZShlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBiLnN1YnN0cmluZyhjICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJcbiAgICAgICAgICAgIC5yZXBsYWNlKGFhLCBcIjxcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKGJhLCBcIj5cIilcbiAgICAgICAgICAgIC5yZXBsYWNlKGNhLCBcIidcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKGRhLCAnXCInKVxuICAgICAgICAgICAgLnJlcGxhY2UoZWEsIFwiJlwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoZmEsIFwiIFwiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gUyhiKSB7XG4gICAgICAgIHJldHVybiBcIlhNUFwiID09PSBiLnRhZ05hbWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHooYiwgYSkge1xuICAgICAgICBzd2l0Y2ggKGIubm9kZVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB2YXIgYyA9IGIudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGEucHVzaChcIjxcIiwgYyk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgZCA9IDA7IGQgPCBiLmF0dHJpYnV0ZXMubGVuZ3RoOyArK2QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGcgPSBiLmF0dHJpYnV0ZXNbZF07XG4gICAgICAgICAgICAgICAgICAgIGlmICghZy5zcGVjaWZpZWQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBhLnB1c2goXCIgXCIpO1xuICAgICAgICAgICAgICAgICAgICB6KGcsIGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhLnB1c2goXCI+XCIpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGUgPSBiLmZpcnN0Q2hpbGQ7IGU7IGUgPSBlLm5leHRTaWJsaW5nKSB6KGUsIGEpO1xuICAgICAgICAgICAgICAgIGlmIChiLmZpcnN0Q2hpbGQgfHwgIS9eKD86YnJ8bGlua3xpbWcpJC8udGVzdChjKSlcbiAgICAgICAgICAgICAgICAgICAgYS5wdXNoKFwiPC9cIiwgYywgXCI+XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGEucHVzaChiLm5hbWUudG9Mb3dlckNhc2UoKSwgJz1cIicsICQoYi52YWx1ZSksICdcIicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGEucHVzaChFKGIubm9kZVZhbHVlKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIEYgPSBudWxsO1xuICAgIGZ1bmN0aW9uIGhhKGIpIHtcbiAgICAgICAgaWYgKG51bGwgPT09IEYpIHtcbiAgICAgICAgICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBSRVwiKTtcbiAgICAgICAgICAgIGEuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgICAgICAgICAgICAgICAgICc8IURPQ1RZUEUgZm9vIFBVQkxJQyBcImZvbyBiYXJcIj5cXG48Zm9vIC8+J1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBGID0gIS88Ly50ZXN0KGEuaW5uZXJIVE1MKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoRikge1xuICAgICAgICAgICAgdmFyIGMgPSBiLmlubmVySFRNTDtcbiAgICAgICAgICAgIGlmIChTKGIpKSBjID0gRShjKTtcbiAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkID0gW107XG4gICAgICAgIGZvciAodmFyIGcgPSBiLmZpcnN0Q2hpbGQ7IGc7IGcgPSBnLm5leHRTaWJsaW5nKSB6KGcsIGQpO1xuICAgICAgICByZXR1cm4gZC5qb2luKFwiXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpYShiKSB7XG4gICAgICAgIHZhciBhID0gMDtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICAgIHZhciBkID0gbnVsbCxcbiAgICAgICAgICAgICAgICBnID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIGUgPSAwLCBoID0gYy5sZW5ndGg7IGUgPCBoOyArK2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgZiA9IGMuY2hhckF0KGUpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiXFx0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWQpIGQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQucHVzaChjLnN1YnN0cmluZyhnLCBlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGIgLSAoYSAlIGIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYSArPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPj0gMDsgaSAtPSBcIiAgICAgICAgICAgICAgICBcIi5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5wdXNoKFwiICAgICAgICAgICAgICAgIFwiLnN1YnN0cmluZygwLCBpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBnID0gZSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlxcblwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICsrYTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWQpIHJldHVybiBjO1xuICAgICAgICAgICAgZC5wdXNoKGMuc3Vic3RyaW5nKGcpKTtcbiAgICAgICAgICAgIHJldHVybiBkLmpvaW4oXCJcIik7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciBqYSA9IC8oPzpbXjxdK3w8IS0tW1xcc1xcU10qPy0tXFw+fDwhXFxbQ0RBVEFcXFsoW1xcc1xcU10qPylcXF1cXF0+fDxcXC8/W2EtekEtWl1bXj5dKj58PCkvZyxcbiAgICAgICAga2EgPSAvXjwhLS0vLFxuICAgICAgICBsYSA9IC9ePFxcW0NEQVRBXFxbLyxcbiAgICAgICAgbWEgPSAvXjxiclxcYi9pO1xuICAgIGZ1bmN0aW9uIG5hKGIpIHtcbiAgICAgICAgdmFyIGEgPSBiLm1hdGNoKGphKSxcbiAgICAgICAgICAgIGMgPSBbXSxcbiAgICAgICAgICAgIGQgPSAwLFxuICAgICAgICAgICAgZyA9IFtdO1xuICAgICAgICBpZiAoYSlcbiAgICAgICAgICAgIGZvciAodmFyIGUgPSAwLCBoID0gYS5sZW5ndGg7IGUgPCBoOyArK2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgZiA9IGFbZV07XG4gICAgICAgICAgICAgICAgaWYgKGYubGVuZ3RoID4gMSAmJiBmLmNoYXJBdCgwKSA9PT0gXCI8XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGthLnRlc3QoZikpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGEudGVzdChmKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5wdXNoKGYuc3Vic3RyaW5nKDksIGYubGVuZ3RoIC0gMykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZCArPSBmLmxlbmd0aCAtIDEyO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hLnRlc3QoZikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMucHVzaChcIlxcblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICsrZDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGcucHVzaChkLCBmKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGdhKGYpO1xuICAgICAgICAgICAgICAgICAgICBjLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgIGQgKz0gaS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc291cmNlOiBjLmpvaW4oXCJcIiksXG4gICAgICAgICAgICB0YWdzOiBnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHYoYiwgYSkge1xuICAgICAgICB2YXIgYyA9IHt9O1xuICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZyA9IGIuY29uY2F0KGEpO1xuICAgICAgICAgICAgZm9yICh2YXIgZSA9IGcubGVuZ3RoOyAtLWUgPj0gMDsgKSB7XG4gICAgICAgICAgICAgICAgdmFyIGggPSBnW2VdLFxuICAgICAgICAgICAgICAgICAgICBmID0gaFszXTtcbiAgICAgICAgICAgICAgICBpZiAoZikgZm9yICh2YXIgaSA9IGYubGVuZ3RoOyAtLWkgPj0gMDsgKSBjW2YuY2hhckF0KGkpXSA9IGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgICAgIHZhciBkID0gYS5sZW5ndGg7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihnLCBlKSB7XG4gICAgICAgICAgICBlID0gZSB8fCAwO1xuICAgICAgICAgICAgdmFyIGggPSBbZSwgXCJwbG5cIl0sXG4gICAgICAgICAgICAgICAgZiA9IFwiXCIsXG4gICAgICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICAgICAgaiA9IGc7XG4gICAgICAgICAgICB3aGlsZSAoai5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbyxcbiAgICAgICAgICAgICAgICAgICAgbSA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGssXG4gICAgICAgICAgICAgICAgICAgIGwgPSBjW2ouY2hhckF0KDApXTtcbiAgICAgICAgICAgICAgICBpZiAobCkge1xuICAgICAgICAgICAgICAgICAgICBrID0gai5tYXRjaChsWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgbSA9IGtbMF07XG4gICAgICAgICAgICAgICAgICAgIG8gPSBsWzBdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgZDsgKytuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsID0gYVtuXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gbFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwICYmICFwLnRlc3QoZikpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgayA9IGoubWF0Y2gobFsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0gPSBrWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBsWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IFwicGxuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtID0gai5zdWJzdHJpbmcoMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaC5wdXNoKGUgKyBpLCBvKTtcbiAgICAgICAgICAgICAgICBpICs9IG0ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGogPSBqLnN1YnN0cmluZyhtLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgaWYgKG8gIT09IFwiY29tXCIgJiYgL1xcUy8udGVzdChtKSkgZiA9IG07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaDtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdmFyIG9hID0gdihcbiAgICAgICAgW10sXG4gICAgICAgIFtcbiAgICAgICAgICAgIFtcInBsblwiLCAvXltePF0rLywgbnVsbF0sXG4gICAgICAgICAgICBbXCJkZWNcIiwgL148IVxcd1tePl0qKD86PnwkKS8sIG51bGxdLFxuICAgICAgICAgICAgW1wiY29tXCIsIC9ePCEtLVtcXHNcXFNdKj8oPzotLVxcPnwkKS8sIG51bGxdLFxuICAgICAgICAgICAgW1wic3JjXCIsIC9ePFxcP1tcXHNcXFNdKj8oPzpcXD8+fCQpLywgbnVsbF0sXG4gICAgICAgICAgICBbXCJzcmNcIiwgL148JVtcXHNcXFNdKj8oPzolPnwkKS8sIG51bGxdLFxuICAgICAgICAgICAgW1wic3JjXCIsIC9ePChzY3JpcHR8c3R5bGV8eG1wKVxcYltePl0qPltcXHNcXFNdKj88XFwvXFwxXFxiW14+XSo+L2ksIG51bGxdLFxuICAgICAgICAgICAgW1widGFnXCIsIC9ePFxcLz9cXHdbXjw+XSo+LywgbnVsbF1cbiAgICAgICAgXVxuICAgICk7XG4gICAgZnVuY3Rpb24gcGEoYikge1xuICAgICAgICB2YXIgYSA9IG9hKGIpO1xuICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IGEubGVuZ3RoOyBjICs9IDIpXG4gICAgICAgICAgICBpZiAoYVtjICsgMV0gPT09IFwic3JjXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZCwgZztcbiAgICAgICAgICAgICAgICBkID0gYVtjXTtcbiAgICAgICAgICAgICAgICBnID0gYyArIDIgPCBhLmxlbmd0aCA/IGFbYyArIDJdIDogYi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBiLnN1YnN0cmluZyhkLCBnKSxcbiAgICAgICAgICAgICAgICAgICAgaCA9IGUubWF0Y2goL14oPFtePl0qPikoW1xcc1xcU10qKSg8XFwvW14+XSo+KSQvKTtcbiAgICAgICAgICAgICAgICBpZiAoaClcbiAgICAgICAgICAgICAgICAgICAgYS5zcGxpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICBjLFxuICAgICAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRhZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZCArIGhbMV0ubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGQgKyBoWzFdLmxlbmd0aCArIChoWzJdIHx8IFwiXCIpLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGFnXCJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIHZhciBxYSA9IHYoXG4gICAgICAgIFtcbiAgICAgICAgICAgIFtcImF0dlwiLCAvXlxcJ1teXFwnXSooPzpcXCd8JCkvLCBudWxsLCBcIidcIl0sXG4gICAgICAgICAgICBbXCJhdHZcIiwgL15cXFwiW15cXFwiXSooPzpcXFwifCQpLywgbnVsbCwgJ1wiJ10sXG4gICAgICAgICAgICBbXCJwdW5cIiwgL15bPD5cXC89XSsvLCBudWxsLCBcIjw+Lz1cIl1cbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICAgW1widGFnXCIsIC9eW1xcdzpcXC1dKy8sIC9ePC9dLFxuICAgICAgICAgICAgW1wiYXR2XCIsIC9eW1xcd1xcLV0rLywgL149L10sXG4gICAgICAgICAgICBbXCJhdG5cIiwgL15bXFx3OlxcLV0rLywgbnVsbF0sXG4gICAgICAgICAgICBbXCJwbG5cIiwgL15cXHMrLywgbnVsbCwgXCIgXFx0XFxyXFxuXCJdXG4gICAgICAgIF1cbiAgICApO1xuICAgIGZ1bmN0aW9uIHJhKGIsIGEpIHtcbiAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBhLmxlbmd0aDsgYyArPSAyKSB7XG4gICAgICAgICAgICB2YXIgZCA9IGFbYyArIDFdO1xuICAgICAgICAgICAgaWYgKGQgPT09IFwidGFnXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZywgZTtcbiAgICAgICAgICAgICAgICBnID0gYVtjXTtcbiAgICAgICAgICAgICAgICBlID0gYyArIDIgPCBhLmxlbmd0aCA/IGFbYyArIDJdIDogYi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIGggPSBiLnN1YnN0cmluZyhnLCBlKSxcbiAgICAgICAgICAgICAgICAgICAgZiA9IHFhKGgsIGcpO1xuICAgICAgICAgICAgICAgIHUoZiwgYSwgYywgMik7XG4gICAgICAgICAgICAgICAgYyArPSBmLmxlbmd0aCAtIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHIoYikge1xuICAgICAgICB2YXIgYSA9IFtdLFxuICAgICAgICAgICAgYyA9IFtdO1xuICAgICAgICBpZiAoYi50cmlwbGVRdW90ZWRTdHJpbmdzKVxuICAgICAgICAgICAgYS5wdXNoKFtcbiAgICAgICAgICAgICAgICBcInN0clwiLFxuICAgICAgICAgICAgICAgIC9eKD86XFwnXFwnXFwnKD86W15cXCdcXFxcXXxcXFxcW1xcc1xcU118XFwnezEsMn0oPz1bXlxcJ10pKSooPzpcXCdcXCdcXCd8JCl8XFxcIlxcXCJcXFwiKD86W15cXFwiXFxcXF18XFxcXFtcXHNcXFNdfFxcXCJ7MSwyfSg/PVteXFxcIl0pKSooPzpcXFwiXFxcIlxcXCJ8JCl8XFwnKD86W15cXFxcXFwnXXxcXFxcW1xcc1xcU10pKig/OlxcJ3wkKXxcXFwiKD86W15cXFxcXFxcIl18XFxcXFtcXHNcXFNdKSooPzpcXFwifCQpKS8sXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBcIidcXFwiXCJcbiAgICAgICAgICAgIF0pO1xuICAgICAgICBlbHNlIGlmIChiLm11bHRpTGluZVN0cmluZ3MpXG4gICAgICAgICAgICBhLnB1c2goW1xuICAgICAgICAgICAgICAgIFwic3RyXCIsXG4gICAgICAgICAgICAgICAgL14oPzpcXCcoPzpbXlxcXFxcXCddfFxcXFxbXFxzXFxTXSkqKD86XFwnfCQpfFxcXCIoPzpbXlxcXFxcXFwiXXxcXFxcW1xcc1xcU10pKig/OlxcXCJ8JCl8XFxgKD86W15cXFxcXFxgXXxcXFxcW1xcc1xcU10pKig/OlxcYHwkKSkvLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgXCInXFxcImBcIlxuICAgICAgICAgICAgXSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGEucHVzaChbXG4gICAgICAgICAgICAgICAgXCJzdHJcIixcbiAgICAgICAgICAgICAgICAvXig/OlxcJyg/OlteXFxcXFxcJ1xcclxcbl18XFxcXC4pKig/OlxcJ3wkKXxcXFwiKD86W15cXFxcXFxcIlxcclxcbl18XFxcXC4pKig/OlxcXCJ8JCkpLyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIFwiXFxcIidcIlxuICAgICAgICAgICAgXSk7XG4gICAgICAgIGMucHVzaChbXCJwbG5cIiwgL14oPzpbXlxcJ1xcXCJcXGBcXC9cXCNdKykvLCBudWxsLCBcIiBcXHJcXG5cIl0pO1xuICAgICAgICBpZiAoYi5oYXNoQ29tbWVudHMpIGEucHVzaChbXCJjb21cIiwgL14jW15cXHJcXG5dKi8sIG51bGwsIFwiI1wiXSk7XG4gICAgICAgIGlmIChiLmNTdHlsZUNvbW1lbnRzKSBjLnB1c2goW1wiY29tXCIsIC9eXFwvXFwvW15cXHJcXG5dKi8sIG51bGxdKTtcbiAgICAgICAgaWYgKGIucmVnZXhMaXRlcmFscylcbiAgICAgICAgICAgIGMucHVzaChbXG4gICAgICAgICAgICAgICAgXCJzdHJcIixcbiAgICAgICAgICAgICAgICAvXlxcLyg/OlteXFxcXFxcKlxcL1xcW118XFxcXFtcXHNcXFNdfFxcWyg/OlteXFxdXFxcXF18XFxcXC4pKig/OlxcXXwkKSkrKD86XFwvfCQpLyxcbiAgICAgICAgICAgICAgICBZXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgaWYgKGIuY1N0eWxlQ29tbWVudHMpIGMucHVzaChbXCJjb21cIiwgL15cXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpLywgbnVsbF0pO1xuICAgICAgICB2YXIgZCA9IHgoYi5rZXl3b3Jkcyk7XG4gICAgICAgIGIgPSBudWxsO1xuICAgICAgICB2YXIgZyA9IHYoYSwgYyksXG4gICAgICAgICAgICBlID0gdihcbiAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIFtcInBsblwiLCAvXlxccysvLCBudWxsLCBcIiBcXHJcXG5cIl0sXG4gICAgICAgICAgICAgICAgICAgIFtcInBsblwiLCAvXlthLXpfJEBdW2Etel8kQDAtOV0qL2ksIG51bGxdLFxuICAgICAgICAgICAgICAgICAgICBbXCJsaXRcIiwgL14weFthLWYwLTldK1thLXpdL2ksIG51bGxdLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgL14oPzpcXGQoPzpfXFxkKykqXFxkKig/OlxcLlxcZCopP3xcXC5cXGQrKSg/OmVbK1xcLV0/XFxkKyk/W2Etel0qL2ksXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIxMjM0NTY3ODlcIlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBbXCJwdW5cIiwgL15bXlxcc1xcd1xcLiRAXSsvLCBudWxsXVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7XG4gICAgICAgIGZ1bmN0aW9uIGgoZiwgaSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpLmxlbmd0aDsgaiArPSAyKSB7XG4gICAgICAgICAgICAgICAgdmFyIG8gPSBpW2ogKyAxXTtcbiAgICAgICAgICAgICAgICBpZiAobyA9PT0gXCJwbG5cIikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbSwgaywgbCwgbjtcbiAgICAgICAgICAgICAgICAgICAgbSA9IGlbal07XG4gICAgICAgICAgICAgICAgICAgIGsgPSBqICsgMiA8IGkubGVuZ3RoID8gaVtqICsgMl0gOiBmLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgbCA9IGYuc3Vic3RyaW5nKG0sIGspO1xuICAgICAgICAgICAgICAgICAgICBuID0gZShsLCBtKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcCA9IDAsIHQgPSBuLmxlbmd0aDsgcCA8IHQ7IHAgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHcgPSBuW3AgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3ID09PSBcInBsblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEEgPSBuW3BdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCID0gcCArIDIgPCB0ID8gbltwICsgMl0gOiBsLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9IGYuc3Vic3RyaW5nKEEsIEIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzID09PSBcIi5cIikgbltwICsgMV0gPSBcInB1blwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHMgaW4gZCkgbltwICsgMV0gPSBcImt3ZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKC9eQD9bQS1aXVtBLVokXSpbYS16XVtBLVphLXokXSokLy50ZXN0KHMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuW3AgKyAxXSA9IHMuY2hhckF0KDApID09PSBcIkBcIiA/IFwibGl0XCIgOiBcInR5cFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHUobiwgaSwgaiwgMik7XG4gICAgICAgICAgICAgICAgICAgIGogKz0gbi5sZW5ndGggLSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihmKSB7XG4gICAgICAgICAgICB2YXIgaSA9IGcoZik7XG4gICAgICAgICAgICBpID0gaChmLCBpKTtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICB2YXIgRyA9IHIoe1xuICAgICAgICBrZXl3b3JkczogVyxcbiAgICAgICAgaGFzaENvbW1lbnRzOiB0cnVlLFxuICAgICAgICBjU3R5bGVDb21tZW50czogdHJ1ZSxcbiAgICAgICAgbXVsdGlMaW5lU3RyaW5nczogdHJ1ZSxcbiAgICAgICAgcmVnZXhMaXRlcmFsczogdHJ1ZVxuICAgIH0pO1xuICAgIGZ1bmN0aW9uIHNhKGIsIGEpIHtcbiAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBhLmxlbmd0aDsgYyArPSAyKSB7XG4gICAgICAgICAgICB2YXIgZCA9IGFbYyArIDFdO1xuICAgICAgICAgICAgaWYgKGQgPT09IFwic3JjXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZywgZTtcbiAgICAgICAgICAgICAgICBnID0gYVtjXTtcbiAgICAgICAgICAgICAgICBlID0gYyArIDIgPCBhLmxlbmd0aCA/IGFbYyArIDJdIDogYi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIGggPSBHKGIuc3Vic3RyaW5nKGcsIGUpKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBmID0gMCwgaSA9IGgubGVuZ3RoOyBmIDwgaTsgZiArPSAyKSBoW2ZdICs9IGc7XG4gICAgICAgICAgICAgICAgdShoLCBhLCBjLCAyKTtcbiAgICAgICAgICAgICAgICBjICs9IGgubGVuZ3RoIC0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGEoYiwgYSkge1xuICAgICAgICB2YXIgYyA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBkID0gMDsgZCA8IGEubGVuZ3RoOyBkICs9IDIpIHtcbiAgICAgICAgICAgIHZhciBnID0gYVtkICsgMV0sXG4gICAgICAgICAgICAgICAgZSxcbiAgICAgICAgICAgICAgICBoO1xuICAgICAgICAgICAgaWYgKGcgPT09IFwiYXRuXCIpIHtcbiAgICAgICAgICAgICAgICBlID0gYVtkXTtcbiAgICAgICAgICAgICAgICBoID0gZCArIDIgPCBhLmxlbmd0aCA/IGFbZCArIDJdIDogYi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgYyA9IC9eb258XnN0eWxlJC9pLnRlc3QoYi5zdWJzdHJpbmcoZSwgaCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChnID09PSBcImF0dlwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgZSA9IGFbZF07XG4gICAgICAgICAgICAgICAgICAgIGggPSBkICsgMiA8IGEubGVuZ3RoID8gYVtkICsgMl0gOiBiLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSBiLnN1YnN0cmluZyhlLCBoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBmLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGogPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPj0gMiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9eW1xcXCJcXCddLy50ZXN0KGYpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZi5jaGFyQXQoMCkgPT09IGYuY2hhckF0KGkgLSAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG8sXG4gICAgICAgICAgICAgICAgICAgICAgICBtLFxuICAgICAgICAgICAgICAgICAgICAgICAgaztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG0gPSBlICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGsgPSBoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBmO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbSA9IGUgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgayA9IGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IGYuc3Vic3RyaW5nKDEsIGYubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSBHKG8pO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMCwgcCA9IGwubGVuZ3RoOyBuIDwgcDsgbiArPSAyKSBsW25dICs9IG07XG4gICAgICAgICAgICAgICAgICAgIGlmIChqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsLnB1c2goaywgXCJhdHZcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB1KGwsIGEsIGQgKyAyLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHUobCwgYSwgZCwgMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGMgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdWEoYikge1xuICAgICAgICB2YXIgYSA9IHBhKGIpO1xuICAgICAgICBhID0gcmEoYiwgYSk7XG4gICAgICAgIGEgPSBzYShiLCBhKTtcbiAgICAgICAgYSA9IHRhKGIsIGEpO1xuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdmEoYiwgYSwgYykge1xuICAgICAgICB2YXIgZCA9IFtdLFxuICAgICAgICAgICAgZyA9IDAsXG4gICAgICAgICAgICBlID0gbnVsbCxcbiAgICAgICAgICAgIGggPSBudWxsLFxuICAgICAgICAgICAgZiA9IDAsXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIGogPSBpYSg4KTtcbiAgICAgICAgZnVuY3Rpb24gbyhrKSB7XG4gICAgICAgICAgICBpZiAoayA+IGcpIHtcbiAgICAgICAgICAgICAgICBpZiAoZSAmJiBlICE9PSBoKSB7XG4gICAgICAgICAgICAgICAgICAgIGQucHVzaChcIjwvc3Bhbj5cIik7XG4gICAgICAgICAgICAgICAgICAgIGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWUgJiYgaCkge1xuICAgICAgICAgICAgICAgICAgICBlID0gaDtcbiAgICAgICAgICAgICAgICAgICAgZC5wdXNoKCc8c3BhbiBjbGFzcz1cIicsIGUsICdcIj4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGwgPSBFKGooYi5zdWJzdHJpbmcoZywgaykpKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKFxcclxcbj98XFxufCApIC9nLCBcIiQxJm5ic3A7XCIpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHJcXG4/fFxcbi9nLCBcIjxiciAvPlwiKTtcbiAgICAgICAgICAgICAgICBkLnB1c2gobCk7XG4gICAgICAgICAgICAgICAgZyA9IGs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIHZhciBtO1xuICAgICAgICAgICAgbSA9IGYgPCBhLmxlbmd0aCA/IChpIDwgYy5sZW5ndGggPyBhW2ZdIDw9IGNbaV0gOiB0cnVlKSA6IGZhbHNlO1xuICAgICAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgICAgICBvKGFbZl0pO1xuICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGQucHVzaChcIjwvc3Bhbj5cIik7XG4gICAgICAgICAgICAgICAgICAgIGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkLnB1c2goYVtmICsgMV0pO1xuICAgICAgICAgICAgICAgIGYgKz0gMjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA8IGMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbyhjW2ldKTtcbiAgICAgICAgICAgICAgICBoID0gY1tpICsgMV07XG4gICAgICAgICAgICAgICAgaSArPSAyO1xuICAgICAgICAgICAgfSBlbHNlIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIG8oYi5sZW5ndGgpO1xuICAgICAgICBpZiAoZSkgZC5wdXNoKFwiPC9zcGFuPlwiKTtcbiAgICAgICAgcmV0dXJuIGQuam9pbihcIlwiKTtcbiAgICB9XG4gICAgdmFyIEMgPSB7fTtcbiAgICBmdW5jdGlvbiBxKGIsIGEpIHtcbiAgICAgICAgZm9yICh2YXIgYyA9IGEubGVuZ3RoOyAtLWMgPj0gMDsgKSB7XG4gICAgICAgICAgICB2YXIgZCA9IGFbY107XG4gICAgICAgICAgICBpZiAoIUMuaGFzT3duUHJvcGVydHkoZCkpIENbZF0gPSBiO1xuICAgICAgICAgICAgZWxzZSBpZiAoXCJjb25zb2xlXCIgaW4gd2luZG93KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2Fubm90IG92ZXJyaWRlIGxhbmd1YWdlIGhhbmRsZXIgJXNcIiwgZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcShHLCBbXCJkZWZhdWx0LWNvZGVcIl0pO1xuICAgIHEodWEsIFtcImRlZmF1bHQtbWFya3VwXCIsIFwiaHRtbFwiLCBcImh0bVwiLCBcInhodG1sXCIsIFwieG1sXCIsIFwieHNsXCJdKTtcbiAgICBxKFxuICAgICAgICByKHtcbiAgICAgICAgICAgIGtleXdvcmRzOiBJLFxuICAgICAgICAgICAgaGFzaENvbW1lbnRzOiB0cnVlLFxuICAgICAgICAgICAgY1N0eWxlQ29tbWVudHM6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIFtcImNcIiwgXCJjY1wiLCBcImNwcFwiLCBcImNzXCIsIFwiY3h4XCIsIFwiY3ljXCJdXG4gICAgKTtcbiAgICBxKFxuICAgICAgICByKHtcbiAgICAgICAgICAgIGtleXdvcmRzOiBKLFxuICAgICAgICAgICAgY1N0eWxlQ29tbWVudHM6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIFtcImphdmFcIl1cbiAgICApO1xuICAgIHEoXG4gICAgICAgIHIoe1xuICAgICAgICAgICAga2V5d29yZHM6IE8sXG4gICAgICAgICAgICBoYXNoQ29tbWVudHM6IHRydWUsXG4gICAgICAgICAgICBtdWx0aUxpbmVTdHJpbmdzOiB0cnVlXG4gICAgICAgIH0pLFxuICAgICAgICBbXCJic2hcIiwgXCJjc2hcIiwgXCJzaFwiXVxuICAgICk7XG4gICAgcShcbiAgICAgICAgcih7XG4gICAgICAgICAgICBrZXl3b3JkczogTSxcbiAgICAgICAgICAgIGhhc2hDb21tZW50czogdHJ1ZSxcbiAgICAgICAgICAgIG11bHRpTGluZVN0cmluZ3M6IHRydWUsXG4gICAgICAgICAgICB0cmlwbGVRdW90ZWRTdHJpbmdzOiB0cnVlXG4gICAgICAgIH0pLFxuICAgICAgICBbXCJjdlwiLCBcInB5XCJdXG4gICAgKTtcbiAgICBxKFxuICAgICAgICByKHtcbiAgICAgICAgICAgIGtleXdvcmRzOiBMLFxuICAgICAgICAgICAgaGFzaENvbW1lbnRzOiB0cnVlLFxuICAgICAgICAgICAgbXVsdGlMaW5lU3RyaW5nczogdHJ1ZSxcbiAgICAgICAgICAgIHJlZ2V4TGl0ZXJhbHM6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIFtcInBlcmxcIiwgXCJwbFwiLCBcInBtXCJdXG4gICAgKTtcbiAgICBxKFxuICAgICAgICByKHtcbiAgICAgICAgICAgIGtleXdvcmRzOiBOLFxuICAgICAgICAgICAgaGFzaENvbW1lbnRzOiB0cnVlLFxuICAgICAgICAgICAgbXVsdGlMaW5lU3RyaW5nczogdHJ1ZSxcbiAgICAgICAgICAgIHJlZ2V4TGl0ZXJhbHM6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIFtcInJiXCJdXG4gICAgKTtcbiAgICBxKFxuICAgICAgICByKHtcbiAgICAgICAgICAgIGtleXdvcmRzOiBLLFxuICAgICAgICAgICAgY1N0eWxlQ29tbWVudHM6IHRydWUsXG4gICAgICAgICAgICByZWdleExpdGVyYWxzOiB0cnVlXG4gICAgICAgIH0pLFxuICAgICAgICBbXCJqc1wiXVxuICAgICk7XG4gICAgZnVuY3Rpb24gVChiLCBhKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgYyA9IG5hKGIpLFxuICAgICAgICAgICAgICAgIGQgPSBjLnNvdXJjZSxcbiAgICAgICAgICAgICAgICBnID0gYy50YWdzO1xuICAgICAgICAgICAgaWYgKCFDLmhhc093blByb3BlcnR5KGEpKVxuICAgICAgICAgICAgICAgIGEgPSAvXlxccyo8Ly50ZXN0KGQpID8gXCJkZWZhdWx0LW1hcmt1cFwiIDogXCJkZWZhdWx0LWNvZGVcIjtcbiAgICAgICAgICAgIHZhciBlID0gQ1thXS5jYWxsKHt9LCBkKTtcbiAgICAgICAgICAgIHJldHVybiB2YShkLCBnLCBlKTtcbiAgICAgICAgfSBjYXRjaCAoaCkge1xuICAgICAgICAgICAgaWYgKFwiY29uc29sZVwiIGluIHdpbmRvdykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHdhKGIpIHtcbiAgICAgICAgdmFyIGEgPSBIKCksXG4gICAgICAgICAgICBjID0gW1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicHJlXCIpLFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY29kZVwiKSxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpXCIpLFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwieG1wXCIpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBnID0gMDsgZyA8IGMubGVuZ3RoOyArK2cpXG4gICAgICAgICAgICBmb3IgKHZhciBlID0gMDsgZSA8IGNbZ10ubGVuZ3RoOyArK2UpIGQucHVzaChjW2ddW2VdKTtcbiAgICAgICAgYyA9IG51bGw7XG4gICAgICAgIHZhciBoID0gMDtcbiAgICAgICAgZnVuY3Rpb24gZigpIHtcbiAgICAgICAgICAgIHZhciBpID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAyNTA7XG4gICAgICAgICAgICBmb3IgKDsgaCA8IGQubGVuZ3RoICYmIG5ldyBEYXRlKCkuZ2V0VGltZSgpIDwgaTsgaCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGogPSBkW2hdO1xuICAgICAgICAgICAgICAgIGlmIChqLmNsYXNzTmFtZSAmJiBqLmNsYXNzTmFtZS5pbmRleE9mKFwicHJldHR5cHJpbnRcIikgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IGouY2xhc3NOYW1lLm1hdGNoKC9cXGJsYW5nLShcXHcrKVxcYi8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobykgbyA9IG9bMV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBtID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSBqLnBhcmVudE5vZGU7IGs7IGsgPSBrLnBhcmVudE5vZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGsudGFnTmFtZSA9PT0gXCJwcmVcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrLnRhZ05hbWUgPT09IFwiY29kZVwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGsudGFnTmFtZSA9PT0gXCJ4bXBcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrLmNsYXNzTmFtZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGsuY2xhc3NOYW1lLmluZGV4T2YoXCJwcmV0dHlwcmludFwiKSA+PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IGhhKGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgbCA9IGwucmVwbGFjZSgvKD86XFxyXFxuP3xcXG4pJC8sIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBUKGwsIG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFTKGopKSBqLmlubmVySFRNTCA9IG47XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQUkVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCBqLmF0dHJpYnV0ZXMubGVuZ3RoOyArK3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHcgPSBqLmF0dHJpYnV0ZXNbdF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3LnNwZWNpZmllZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuc2V0QXR0cmlidXRlKHcubmFtZSwgdy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHAsIGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPSBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEgJiYgai50YWdOYW1lID09PSBcIlBSRVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEEgPSBqLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYnJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgQiA9IEEubGVuZ3RoOyAtLUIgPj0gMDsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gQVtCXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoIDwgZC5sZW5ndGgpIHNldFRpbWVvdXQoZiwgMjUwKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGIpIGIoKTtcbiAgICAgICAgfVxuICAgICAgICBmKCk7XG4gICAgfVxuICAgIHdpbmRvdy5QUl9ub3JtYWxpemVkSHRtbCA9IHo7XG4gICAgd2luZG93LnByZXR0eVByaW50T25lID0gVDtcbiAgICB3aW5kb3cucHJldHR5UHJpbnQgPSB3YTtcbiAgICB3aW5kb3cuUFIgPSB7XG4gICAgICAgIGNyZWF0ZVNpbXBsZUxleGVyOiB2LFxuICAgICAgICByZWdpc3RlckxhbmdIYW5kbGVyOiBxLFxuICAgICAgICBzb3VyY2VEZWNvcmF0b3I6IHIsXG4gICAgICAgIFBSX0FUVFJJQl9OQU1FOiBcImF0blwiLFxuICAgICAgICBQUl9BVFRSSUJfVkFMVUU6IFwiYXR2XCIsXG4gICAgICAgIFBSX0NPTU1FTlQ6IFwiY29tXCIsXG4gICAgICAgIFBSX0RFQ0xBUkFUSU9OOiBcImRlY1wiLFxuICAgICAgICBQUl9LRVlXT1JEOiBcImt3ZFwiLFxuICAgICAgICBQUl9MSVRFUkFMOiBcImxpdFwiLFxuICAgICAgICBQUl9QTEFJTjogXCJwbG5cIixcbiAgICAgICAgUFJfUFVOQ1RVQVRJT046IFwicHVuXCIsXG4gICAgICAgIFBSX1NPVVJDRTogXCJzcmNcIixcbiAgICAgICAgUFJfU1RSSU5HOiBcInN0clwiLFxuICAgICAgICBQUl9UQUc6IFwidGFnXCIsXG4gICAgICAgIFBSX1RZUEU6IFwidHlwXCJcbiAgICB9O1xufSkoKTtcbiIsImltcG9ydCBQYXJzb25zIGZyb20gXCIuL3BhcnNvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZWRQYXJzb25zIGV4dGVuZHMgUGFyc29ucyB7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcihvcHRzKTtcbiAgICAgICAgLy8gdG9kbyAtLSBtYWtlIHRoaXMgY29uZmlndXJhYmxlXG4gICAgICAgIGlmIChvcHRzLnRpbWVkZmVlZGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd2ZlZWRiYWNrID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd2ZlZWRiYWNrID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ncmFkZXIuc2hvd2ZlZWRiYWNrID0gdGhpcy5zaG93ZmVlZGJhY2s7XG4gICAgICAgIHRoaXMuaGlkZUZlZWRiYWNrKCk7XG4gICAgICAgICQodGhpcy5jaGVja0J1dHRvbikuaGlkZSgpO1xuICAgICAgICAkKHRoaXMuaGVscEJ1dHRvbikuaGlkZSgpO1xuICAgICAgICAkKHRoaXMucmVzZXRCdXR0b24pLmhpZGUoKTtcbiAgICB9XG4gICAgY2hlY2tDb3JyZWN0VGltZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvcnJlY3QgPyBcIlRcIiA6IFwiRlwiO1xuICAgIH1cbiAgICBoaWRlRmVlZGJhY2soKSB7XG4gICAgICAgICQodGhpcy5tZXNzYWdlRGl2KS5oaWRlKCk7XG4gICAgfVxufVxuXG5pZiAodHlwZW9mIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9IHt9O1xufVxud2luZG93LmNvbXBvbmVudF9mYWN0b3J5W1wicGFyc29uc1wiXSA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgaWYgKG9wdHMudGltZWQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUaW1lZFBhcnNvbnMob3B0cyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUGFyc29ucyhvcHRzKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9