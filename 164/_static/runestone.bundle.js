(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone"],{

/***/ 18555:
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./runestone/common/css/presenter_mode.css ***!
  \***************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".hidden{\r\n  display: none;\r\n}\r\n\r\n.view-toggle{\r\n  padding: 0.85em;\r\n}\r\n\r\n.presentation-mode .section *{\r\n  display: none;\r\n}\r\n\r\n.presentation-mode .section .runestone, .presentation-mode .section .runestone *{\r\n  display: initial;\r\n}\r\n\r\n.present{\r\n    height: 100vh;\r\n}\r\n\r\n.full-height{\r\n    height: 100vh;\r\n}\r\n\r\n.bottom{\r\n    position: absolute;\r\n    bottom: 0;\r\n}\r\n\r\n#codeDisplayDiv{\r\n  width: auto!important;\r\n}\r\n\r\ndiv.ExecutionVisualizer #dataViz{\r\n  margin: 0;  \r\n}\r\n\r\ndiv.ExecutionVisualizer div#stackHeader {\r\n  text-align: center;\r\n}\r\n\r\n#stackFrame{\r\n  display: block!important;\r\n}\r\n\r\n#stackHeapTable {\r\n  width: 100%;\r\n}\r\n\r\n#stackHeapTable tr {\r\n  justify-content: space-around;\r\n}\r\n\r\ndiv.ExecutionVisualizer td#stack_td, div.ExecutionVisualizer td#heap_td {\r\n  flex: 1;\r\n}\r\n\r\n.presentation-title {\r\n  display: none;\r\n}\r\n\r\n.present .presentation-title {\r\n  display: block;\r\n}\r\n\r\ndiv.ExecutionVisualizer div#heap {\r\n  float: none;\r\n  padding-left: 0;\r\n}\r\n\r\n#stack_td tr {\r\n  display: table-row;\r\n}\r\n\r\n#heap_td tr {\r\n  display: table-row;\r\n}\r\n\r\n#codeDisplayDiv{\r\n  margin: 0 auto;\r\n}\r\n\r\n/*  bnm -- comment this out for now as it breaks codelens indentation and arrows\r\n.visualizer tr{\r\n  display: flex;\r\n}\r\n*/\r\n\r\n#vizLayoutTd{\r\n  flex: 1;\r\n}\r\n\r\n#vizLayoutTdFirst {\r\n  flex: 2;\r\n}\r\n\r\n#vizLayoutTdSecond {\r\n  flex: 1;\r\n}\r\n\r\n#vizLayoutTdThird {\r\n  flex: 2;\r\n}\r\n\r\n#progOutputs {\r\n  display: block!important;\r\n  margin: 0 20px;\r\n  width: 60%;\r\n}\r\n\r\n#pyStdout {\r\n  width: 100%!important;\r\n}\r\n\r\ndiv.ExecutionVisualizer #pyStdout {\r\n  margin-bottom: 1em;\r\n}\r\n\r\ndiv.ExecutionVisualizer table.visualizer {\r\n  width: 100%;\r\n}\r\n\r\n.present #vizLayoutTdThird{\r\n  text-align: left;\r\n}\r\n\r\n.ac-block{\r\n  display: flex;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.row-mode .ac-block{\r\n  display: block;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.row-mode .ac_output, .row-mode .ac_code_div{\r\n  float: none;\r\n  display: block;\r\n  width: auto;\r\n  max-width: none;\r\n}\r\n\r\n.row-mode .ac_code_div{\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.ac_section>* {\r\n  max-width: 100%;\r\n}\r\n\r\n.ac_output{\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\n.ac_output pre {\r\n  visibility: visible!important;\r\n  min-height: 60px;\r\n}\r\n\r\n.CodeMirror{\r\n  margin: 0;\r\n  max-width: 100%;\r\n  border-radius: 3px;\r\n  min-height: 60px;\r\n}\r\n\r\n.container .section > runestone:not(.ac_section){\r\n  max-width:none;\r\n  margin: 0;\r\n}\r\n\r\n.presentation-options {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.layout-btn {\r\n  background-color: #FBEED5;\r\n  border: 2px solid #DFD4BE;\r\n  border-radius: 2px;\r\n  padding: .25rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 .5rem;\r\n  transition: all .2s ease;\r\n}\r\n\r\n.layout-btn.active-layout, .layout-btn:focus {\r\n  border: 2px solid #979797;\r\n  outline: none;\r\n}\r\n\r\n.sketchpad-container {\r\n  min-width: 50%;\r\n  min-height: 300px;\r\n  padding: 0 15px;\r\n}\r\n\r\n.card-mode .sketchpad-container {\r\n  width: 50%;\r\n  margin: 0;\r\n  display: inline-block;\r\n  /*margin: 0 -15px;*/\r\n  vertical-align: top;\r\n}\r\n\r\n.row-mode .error {\r\n  margin: 20px 15px;\r\n}\r\n\r\n.card-mode .error {\r\n  margin: 28px 0 0;\r\n  width: 50%;\r\n  display: inline-block;\r\n  padding: 0 15px;\r\n  vertical-align: top;\r\n  margin-top: 28px;\r\n}\r\n\r\n.sketchpad {\r\n  background: white;\r\n  border: 2px solid grey;\r\n  border-radius: 3px;\r\n  width: 100%;\r\n  min-height: 300px;\r\n  display: block;\r\n}\r\n\r\n.btn-presenter {\r\n  padding: .5rem 1rem;\r\n  border-radius: 3px;\r\n  font-weight: 500;\r\n  margin: 1.5rem 0 1.5rem 1.5rem;\r\n}\r\n\r\n.btn-grey-outline {\r\n  border: 2px solid grey;\r\n  color: grey;\r\n  background: white;\r\n}\r\n\r\n.btn-grey-solid {\r\n  border: 2px solid grey;\r\n  color: white;\r\n  background: grey;\r\n}\r\n\r\nbody.present .ac_section>* {\r\n  max-width: none;\r\n}\r\nbody.present iframe {\r\n  width: 100%;\r\n}\r\n\r\nbody.present {\r\n  /* font-size: 2.0em; */\r\n}\r\n\r\nbody.present #relations-prev, body.present #relations-next, body.present .navLinkBg {\r\n  display: none;\r\n}\r\n\r\nbody.present .btn-presenter {\r\n  position: absolute;\r\n}\r\nbody.present .btn-presenter.prev-exercise { left: 0px; }\r\nbody.present .btn-presenter.next-exercise { right: 0px; }\r\n\r\n/* .col-md-12 {\r\n  width: 58.333333333333336%;\r\n}\r\n\r\n.card-mode .col-md-7 {\r\n  width: 50%;\r\n} */\r\n", "",{"version":3,"sources":["webpack://./runestone/common/css/presenter_mode.css"],"names":[],"mappings":"AAAA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,SAAS;AACb;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;;;;CAIC;;AAED;EACE,OAAO;AACT;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,wBAAwB;EACxB,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,SAAS;EACT,eAAe;EACf,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,SAAS;EACT,qBAAqB;EACrB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,qBAAqB;EACrB,eAAe;EACf,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;EACtB,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,8BAA8B;AAChC;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;AACA;EACE,WAAW;AACb;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;AACA,4CAA4C,SAAS,EAAE;AACvD,4CAA4C,UAAU,EAAE;;AAExD;;;;;;GAMG","sourcesContent":[".hidden{\r\n  display: none;\r\n}\r\n\r\n.view-toggle{\r\n  padding: 0.85em;\r\n}\r\n\r\n.presentation-mode .section *{\r\n  display: none;\r\n}\r\n\r\n.presentation-mode .section .runestone, .presentation-mode .section .runestone *{\r\n  display: initial;\r\n}\r\n\r\n.present{\r\n    height: 100vh;\r\n}\r\n\r\n.full-height{\r\n    height: 100vh;\r\n}\r\n\r\n.bottom{\r\n    position: absolute;\r\n    bottom: 0;\r\n}\r\n\r\n#codeDisplayDiv{\r\n  width: auto!important;\r\n}\r\n\r\ndiv.ExecutionVisualizer #dataViz{\r\n  margin: 0;  \r\n}\r\n\r\ndiv.ExecutionVisualizer div#stackHeader {\r\n  text-align: center;\r\n}\r\n\r\n#stackFrame{\r\n  display: block!important;\r\n}\r\n\r\n#stackHeapTable {\r\n  width: 100%;\r\n}\r\n\r\n#stackHeapTable tr {\r\n  justify-content: space-around;\r\n}\r\n\r\ndiv.ExecutionVisualizer td#stack_td, div.ExecutionVisualizer td#heap_td {\r\n  flex: 1;\r\n}\r\n\r\n.presentation-title {\r\n  display: none;\r\n}\r\n\r\n.present .presentation-title {\r\n  display: block;\r\n}\r\n\r\ndiv.ExecutionVisualizer div#heap {\r\n  float: none;\r\n  padding-left: 0;\r\n}\r\n\r\n#stack_td tr {\r\n  display: table-row;\r\n}\r\n\r\n#heap_td tr {\r\n  display: table-row;\r\n}\r\n\r\n#codeDisplayDiv{\r\n  margin: 0 auto;\r\n}\r\n\r\n/*  bnm -- comment this out for now as it breaks codelens indentation and arrows\r\n.visualizer tr{\r\n  display: flex;\r\n}\r\n*/\r\n\r\n#vizLayoutTd{\r\n  flex: 1;\r\n}\r\n\r\n#vizLayoutTdFirst {\r\n  flex: 2;\r\n}\r\n\r\n#vizLayoutTdSecond {\r\n  flex: 1;\r\n}\r\n\r\n#vizLayoutTdThird {\r\n  flex: 2;\r\n}\r\n\r\n#progOutputs {\r\n  display: block!important;\r\n  margin: 0 20px;\r\n  width: 60%;\r\n}\r\n\r\n#pyStdout {\r\n  width: 100%!important;\r\n}\r\n\r\ndiv.ExecutionVisualizer #pyStdout {\r\n  margin-bottom: 1em;\r\n}\r\n\r\ndiv.ExecutionVisualizer table.visualizer {\r\n  width: 100%;\r\n}\r\n\r\n.present #vizLayoutTdThird{\r\n  text-align: left;\r\n}\r\n\r\n.ac-block{\r\n  display: flex;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.row-mode .ac-block{\r\n  display: block;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.row-mode .ac_output, .row-mode .ac_code_div{\r\n  float: none;\r\n  display: block;\r\n  width: auto;\r\n  max-width: none;\r\n}\r\n\r\n.row-mode .ac_code_div{\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.ac_section>* {\r\n  max-width: 100%;\r\n}\r\n\r\n.ac_output{\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\n.ac_output pre {\r\n  visibility: visible!important;\r\n  min-height: 60px;\r\n}\r\n\r\n.CodeMirror{\r\n  margin: 0;\r\n  max-width: 100%;\r\n  border-radius: 3px;\r\n  min-height: 60px;\r\n}\r\n\r\n.container .section > runestone:not(.ac_section){\r\n  max-width:none;\r\n  margin: 0;\r\n}\r\n\r\n.presentation-options {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.layout-btn {\r\n  background-color: #FBEED5;\r\n  border: 2px solid #DFD4BE;\r\n  border-radius: 2px;\r\n  padding: .25rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 .5rem;\r\n  transition: all .2s ease;\r\n}\r\n\r\n.layout-btn.active-layout, .layout-btn:focus {\r\n  border: 2px solid #979797;\r\n  outline: none;\r\n}\r\n\r\n.sketchpad-container {\r\n  min-width: 50%;\r\n  min-height: 300px;\r\n  padding: 0 15px;\r\n}\r\n\r\n.card-mode .sketchpad-container {\r\n  width: 50%;\r\n  margin: 0;\r\n  display: inline-block;\r\n  /*margin: 0 -15px;*/\r\n  vertical-align: top;\r\n}\r\n\r\n.row-mode .error {\r\n  margin: 20px 15px;\r\n}\r\n\r\n.card-mode .error {\r\n  margin: 28px 0 0;\r\n  width: 50%;\r\n  display: inline-block;\r\n  padding: 0 15px;\r\n  vertical-align: top;\r\n  margin-top: 28px;\r\n}\r\n\r\n.sketchpad {\r\n  background: white;\r\n  border: 2px solid grey;\r\n  border-radius: 3px;\r\n  width: 100%;\r\n  min-height: 300px;\r\n  display: block;\r\n}\r\n\r\n.btn-presenter {\r\n  padding: .5rem 1rem;\r\n  border-radius: 3px;\r\n  font-weight: 500;\r\n  margin: 1.5rem 0 1.5rem 1.5rem;\r\n}\r\n\r\n.btn-grey-outline {\r\n  border: 2px solid grey;\r\n  color: grey;\r\n  background: white;\r\n}\r\n\r\n.btn-grey-solid {\r\n  border: 2px solid grey;\r\n  color: white;\r\n  background: grey;\r\n}\r\n\r\nbody.present .ac_section>* {\r\n  max-width: none;\r\n}\r\nbody.present iframe {\r\n  width: 100%;\r\n}\r\n\r\nbody.present {\r\n  /* font-size: 2.0em; */\r\n}\r\n\r\nbody.present #relations-prev, body.present #relations-next, body.present .navLinkBg {\r\n  display: none;\r\n}\r\n\r\nbody.present .btn-presenter {\r\n  position: absolute;\r\n}\r\nbody.present .btn-presenter.prev-exercise { left: 0px; }\r\nbody.present .btn-presenter.next-exercise { right: 0px; }\r\n\r\n/* .col-md-12 {\r\n  width: 58.333333333333336%;\r\n}\r\n\r\n.card-mode .col-md-7 {\r\n  width: 50%;\r\n} */\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 67805:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./runestone/common/css/runestone-custom-sphinx-bootstrap.css ***!
  \**********************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/* Variables holding theme colors */\r\n:root {\r\n    --background: #ffffff;\r\n    --outerBackground: #eeeeee;\r\n    --links: #0645ad;\r\n    --bodyFont: #000000;\r\n    --tooltip: #ffffff;\r\n    --grayToWhite: #333333;\r\n    --navbar: #f8f8f8;\r\n    --navbarFont: #707070;\r\n    --navbarFontHover: #000000;\r\n    --alerts: #d9edf7;\r\n    --completionButton: #ffaa2b;\r\n    --completionButtonHover: #ff9f19;\r\n    --admonition: #fcf8e3;\r\n    --admonitionBorder: #fbeed5;\r\n    --codeButtons: #474949;\r\n    --codeButtonsBorder: #474949;\r\n    --dangerAlerts: #f2dede;\r\n    --successAlerts: #dff0d8;\r\n}\r\n\r\n[data-theme=\"dark\"] {\r\n    --background: #000000;\r\n    --outerBackground: #3d3d3d;\r\n    --links: #1165f0;\r\n    --bodyFont: #ffffff;\r\n    --tooltip: #000000;\r\n    --grayToWhite: #ffffff;\r\n    --navbar: #3d3d3d;\r\n    --navbarFont: #ffffff;\r\n    --navbarFontHover: #d6d6d6;\r\n    --alerts: #714082;\r\n    --completionButton: #650087;\r\n    --completionButtonHover: #560073;\r\n    --admonition: #3d3d3d;\r\n    --admonitionBorder: #262626;\r\n    --codeButtons: #2c0aa6;\r\n    --codeButtonsBorder: #ffffff;\r\n    --dangerAlerts: #8c2626;\r\n    --successAlerts: #217300;\r\n}\r\n\r\n/* custom modification of basic.css for color-contrast (AA compliant) */\r\ntd.linenos pre {\r\n    color: #6b6b6b;\r\n}\r\n\r\n/* custom modification of prettify.css for color-contrast (AA compliant) */\r\n.str {\r\n    color: #006b00;\r\n}\r\n\r\n/* custom modification of parsons.css for color-contrast (AA compliant) */\r\n.parsons .block {\r\n    background-color: #fafafa;\r\n}\r\n\r\n/* custom modification of pygments.css for color-contrast (AA compliant) */\r\n.highlight .c1 {\r\n    color: #376A7B;\r\n}\r\n\r\n.highlight .nn {\r\n    color: #0F6C95;\r\n}\r\n\r\n.highlight .gp {\r\n    color: #A14C08;\r\n}\r\n\r\n.highlight .si {\r\n    color: #3C773D;\r\n}\r\n\r\n.highlight .nc {\r\n    color: #0B719D;\r\n}\r\n\r\n/* `Search` functionality's result custom modification for color-contrast (AA compliant) */\r\nul.search li div.context {\r\n    color: #6b6b6b;\r\n}\r\n\r\nspan.highlighted {\r\n    color: #4d4d4d;\r\n}\r\n\r\n/* ActiveCode gutter custom modification for color-contrast (AA compliant) */\r\n\r\n.CodeMirror-linenumber {\r\n    color: #6b6b6b;\r\n}\r\n\r\n.alert-warning {\r\n    background-color: var(--admonition);\r\n    border-color: var(--admonitionBorder);\r\n}\r\n\r\n/* Python code output custom modification for color-contrast (AA compliant) */\r\ndiv.ExecutionVisualizer table#pyCodeOutput .lineNo {\r\n    color: #6b6b6b;\r\n}\r\n\r\n/* Runestone custom modifications */\r\n\r\nbody {\r\n    counter-reset: rscomponent;\r\n    padding-top: 60px;\r\n    background-color: var(--outerBackground);\r\n}\r\n\r\npre {\r\n    margin: 0 0 1em;\r\n}\r\n\r\nh5 {\r\n    font-weight: bold;\r\n    padding: 10px 0;\r\n}\r\n\r\n/* table-of-contents related styles for color-contrast (AA compliant) */\r\n#table-of-contents a {\r\n    color: var(--links);\r\n}\r\n\r\n#table-of-contents a:hover {\r\n    color: var(--links);\r\n    text-decoration: underline;\r\n}\r\n\r\n#table-of-contents.section {\r\n    font-size: 16px;\r\n}\r\n\r\n/* navbar-brand color contrast (AA compliant) */\r\n.navbar-default {\r\n    background-color: var(--navbar);\r\n}\r\n\r\n.navbar-default .navbar-nav>li {\r\n    color: var(--navbarFont);\r\n}\r\n\r\n.navbar-default .navbar-nav>li>a {\r\n    color: var(--navbarFont);\r\n}\r\n\r\n.navbar-default .navbar-nav>li>a:hover {\r\n    color: var(--navbarFontHover);\r\n}\r\n\r\n.navbar-default .navbar-brand {\r\n    color: var(--navbarFont);\r\n}\r\n\r\n/* acknowledgement related styles for color-contrast (AA compliant) */\r\n.toctree-wrapper {\r\n    font-size: 16px;\r\n}\r\n\r\n.toctree-wrapper a {\r\n    color: var(--links);\r\n}\r\n\r\n.toctree-wrapper a:hover {\r\n    color: var(--links);\r\n    text-decoration: underline;\r\n}\r\n\r\n/* index and search related styles for color-contrast (AA compliant) */\r\n#index-and-search.section {\r\n    font-size: 16px;\r\n}\r\n\r\n#index-and-search.section a {\r\n    color: var(--links);\r\n}\r\n\r\n#index-and-search.section a:hover {\r\n    color: var(--links);\r\n    text-decoration: underline;\r\n}\r\n\r\n/* custom style for `a` tag for color-contrast (AA compliant) */\r\n\r\na {\r\n    color: var(--links);\r\n}\r\n\r\n/* navbar and menu related styles */\r\n@media (max-width: 768px) {\r\n\r\n    /* Remove top padding when top navbar goes collapsed in narrow viewports */\r\n    body {\r\n        padding-top: 0;\r\n        margin: auto auto auto 5px;\r\n    }\r\n\r\n    .navbar-fixed-top {\r\n        position: static;\r\n    }\r\n\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\r\n    /* when navbar is collapsed we don't want any vertical dividers taking up space */\r\n    .navbar .divider-vertical {\r\n        margin: 0 3px;\r\n        border-left: 1px solid #f2f2f2;\r\n    }\r\n}\r\n\r\ndiv.container {\r\n    background-color: var(--background);\r\n}\r\n\r\ndiv.section {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.container {\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n}\r\n\r\n.container .section>*:not(.section):not(.ac_section) {\r\n    max-width: 500pt;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n/* This rule is meant to override the behavior of the\r\n   previous rule since it is not possible to exclude\r\n   more than one section in the not() part of the rule\r\n*/\r\n.container .section div.full-width.container {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    max-width: 90%;\r\n}\r\n\r\n.container .section>img {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.container .section .parsons,\r\n.container .section .parsons .sortable-code-container,\r\n.container .section .cd_section {\r\n    max-width: none;\r\n}\r\n\r\n.navbar>.container .navbar-brand {\r\n    margin-left: 0;\r\n}\r\n\r\n.navbar>.container {\r\n    background-color: var(--navbar);\r\n}\r\n\r\n.footer>.container {\r\n    background-color: var(--outerBackground);\r\n}\r\n\r\n.footer>.container p>a {\r\n    color: var(--links);\r\n}\r\n\r\n.brand-logo {\r\n    float: left;\r\n    display: block;\r\n    background-size: 40px 40px !important;\r\n    width: 40px;\r\n    height: 40px;\r\n    margin-top: 4px;\r\n}\r\n\r\n.social-menu {\r\n    width: 220px;\r\n    padding: 10px 10px 15px 20px;\r\n}\r\n\r\n.fb-like {\r\n    margin-top: 7px;\r\n}\r\n\r\n.fb_iframe_widget span,\r\n.fb_iframe_widget iframe {\r\n    height: 20px !important;\r\n    width: 82px !important;\r\n}\r\n\r\n.twitter-follow-button {\r\n    margin-top: 10px;\r\n}\r\n\r\n.gittip {\r\n    margin-top: 8px;\r\n}\r\n\r\n.gittip-button {\r\n    margin-bottom: -6px;\r\n}\r\n\r\n.dropdown-menu>li>span {\r\n    display: block;\r\n    padding: 3px 20px;\r\n    clear: both;\r\n    font-weight: bold;\r\n    line-height: 20px;\r\n    color: var(--grayToWhite);\r\n    white-space: nowrap;\r\n}\r\n\r\n.dropdown-menu>li>a {\r\n    color: var(--grayToWhite);\r\n}\r\n\r\n.loggedinuser {\r\n    font-weight: bold;\r\n}\r\n\r\n/* end navbar and menu related styles */\r\n\r\n.CodeMirror {\r\n    margin: 0 0 1em 0;\r\n    background-color: var(--background);\r\n    height: auto;\r\n    clear: both;\r\n}\r\n\r\n.CodeMirror-scroll {\r\n    /* this allows CM elements to be resized to (almost) any\r\n     * height while still relying on max-height (which keeps\r\n     * the CM editors to no more than the size needed\r\n     * unless resized) */\r\n    max-height: 60em;\r\n    min-width: 30em;\r\n}\r\n\r\n.ac_section .CodeMirror pre {\r\n    -moz-border-radius: 0;\r\n    -webkit-border-radius: 0;\r\n    -o-border-radius: 0;\r\n    border-radius: 0;\r\n    border-width: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n    background: transparent;\r\n    font-family: Monaco, Courier New, monospace;\r\n    font-size: inherit;\r\n    padding: 0;\r\n    margin: 0;\r\n    white-space: pre;\r\n    word-wrap: normal;\r\n}\r\n\r\nbutton.btn,\r\nbtn.btn-sm,\r\ninput[type=\"submit\"].btn.btn-sm,\r\ninput[type=\"button\"].btn.btn-sm {\r\n    font-size: 1em;\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n}\r\n\r\n.btn {\r\n    margin: 5px;\r\n}\r\n\r\n.btn.disabled {\r\n    /* needed in Bootstrap 3 to allow tooltips on disabled buttons */\r\n    pointer-events: auto;\r\n}\r\n\r\n.btn-default,\r\n.btn-default.disabled,\r\n.btn-default[disabled],\r\n.btn-default.disabled:hover,\r\n.btn-default[disabled]:hover {\r\n    color: #ffffff;\r\n    background-color: var(--codeButtons);\r\n    border-color: var(codeButtonsBorder);\r\n}\r\n\r\n.btn-default:hover,\r\n.btn-default:focus,\r\n.btn-default:active,\r\n.btn-default.active {\r\n    background-color: #3a3c3c;\r\n    border-color: #2e2f2f;\r\n    color: #ffffff;\r\n}\r\n\r\ninput[type=\"radio\"],\r\ninput[type=\"checkbox\"] {\r\n    margin-right: 5px;\r\n}\r\n\r\n.tooltip {\r\n    z-index: 2000 !important;\r\n}\r\n\r\n.tooltip.in {\r\n    opacity: 0.8;\r\n    filter: alpha(opacity=80);\r\n}\r\n\r\nh2 {\r\n    margin-top: 20px;\r\n}\r\n\r\n.alert form {\r\n    margin-bottom: 0;\r\n}\r\n\r\n/* default bookstrap alert color is hard to read (low contrast). */\r\n.alert {\r\n    color: var(--grayToWhite);\r\n    padding: 10px;\r\n}\r\n\r\n.alert-info {\r\n    background-color: var(--alerts);\r\n}\r\n\r\n.alert-danger {\r\n    background-color: var(--dangerAlerts);\r\n}\r\n\r\n/* override the color styles applied by Skulpt to the unittest results divs */\r\n.unittest-results.alert-danger {\r\n    background-color: var(--dangerAlerts) !important;\r\n}\r\n\r\n.unittest-results.alert-success {\r\n    background-color: var(--successAlerts) !important;\r\n}\r\n\r\n.alert label {\r\n    font-weight: normal;\r\n}\r\n\r\n/* These admonition styles styles are copied from the Bootstrap .alert classes.\r\n Most of the !important declarations are to override the Sphinx basic.css styles */\r\n.admonition {\r\n    padding: 8px 35px 8px 14px !important;\r\n    margin-bottom: 20px !important;\r\n    margin-top: 20px !important;\r\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\r\n    background-color: var(--admonition);\r\n    border: 1px solid #fbeed5;\r\n    -webkit-border-radius: 4px;\r\n    -moz-border-radius: 4px;\r\n    border-radius: 4px;\r\n}\r\n\r\n/* .alert-danger */\r\n.admonition.caution {\r\n    color: #A33F3E;\r\n    background-color: #f2dede;\r\n    border-color: #eed3d7;\r\n}\r\n\r\n/* .alert-info */\r\n.admonition.tip,\r\n.admonition.note {\r\n    color: #333;\r\n    background-color: #d9edf7;\r\n    border-color: #bce8f1;\r\n}\r\n\r\n/* from web2py.css */\r\ndiv.flash {\r\n    font-weight: bold;\r\n    position: fixed;\r\n    padding: 10px;\r\n    top: 55px;\r\n    right: 45px;\r\n    opacity: 0.95;\r\n    margin: 0 0 10px 10px;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    color: #ffffff;\r\n    background-color: #000;\r\n    border: 2px solid #fff;\r\n    border-radius: 8px;\r\n    -moz-border-radius: 8px;\r\n    -webkit-border-radius: 8px;\r\n    background-image: -webkit-linear-gradient(top, #222, #000);\r\n    background-image: -o-linear-gradient(top, #222, #000);\r\n    background-image: -moz-linear-gradient(90deg, #222, #000);\r\n    background-image: linear-gradient(top, #222, #000);\r\n    background-repeat: repeat-x;\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    -webkit-font-smoothing: antialiased;\r\n    z-index: 2000;\r\n}\r\n\r\n/* Styles for the login, registration, and Janrain forms */\r\n#web2py_user_form {\r\n    margin-top: 10px;\r\n}\r\n\r\n#web2py_user_form form {\r\n    float: left;\r\n    margin-right: 150px;\r\n    padding-top: 3px;\r\n}\r\n\r\n#web2py_user_form td {\r\n    padding-bottom: 15px;\r\n}\r\n\r\n#web2py_user_form td.w2p_fw {\r\n    width: 299px;\r\n}\r\n\r\n#auth-actions {\r\n    margin-top: 50px;\r\n}\r\n\r\n#sign_in_text td {\r\n    font-size: 17px;\r\n    color: #333;\r\n    font-family: 'lucida grande', Verdana, sans-serif;\r\n    padding-bottom: 13px;\r\n}\r\n\r\n#auth_user_remember {\r\n    margin-top: -20px;\r\n}\r\n\r\n/* End login, registration, Janrain styles */\r\n\r\n/* end-of-chapter exercises styles */\r\n#exercises>ol>li,\r\n#programming-exercises>ol>li {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n#exercises>ol>li:nth-child(even),\r\n#programming-exercises>ol>li:nth-child(even) {\r\n    padding: 1.2em 1.4em;\r\n    background: #faf7df;\r\n    border: 1px solid #fbeed5;\r\n    -webkit-border-radius: 4px;\r\n    -moz-border-radius: 4px;\r\n    border-radius: 4px;\r\n}\r\n\r\n/* End chapter exercises styles */\r\n\r\n/* Modal dialog styles (scratch activecode, compare me, etc) */\r\n.scratch-ac-modal {\r\n    width: 90%;\r\n}\r\n\r\n.compare-modal .progress {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.compare-me-progress {\r\n    width: 100%;\r\n}\r\n\r\n.compare-me-progress .progress-bar,\r\n.unittest-results-progress .progress-bar {\r\n    color: #333;\r\n}\r\n\r\n.modal-body {\r\n    background-color: var(--background);\r\n}\r\n\r\n.modal-header {\r\n    background-color: var(--background);\r\n}\r\n\r\n.unittest-results-progress {\r\n    width: 25%;\r\n}\r\n\r\n.compare-modal {\r\n    width: 350px;\r\n}\r\n\r\n.compare-modal table {\r\n    border-collapse: separate;\r\n    border-spacing: 10px 5px;\r\n}\r\n\r\n.codelens-modal {\r\n    /* we set some custom position styles so that the modal doesn't obscure the codelens visualizer */\r\n    top: 20%;\r\n    right: 20%;\r\n    left: auto;\r\n    bottom: auto;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n    /* remove any custom position styles when the screen is small (mobile devices)\r\n    to prevent the modal from being partially off the screen */\r\n    .codelens-modal {\r\n        top: 0 !important;\r\n        right: 0 !important;\r\n        bottom: 0 !important;\r\n        left: 0 !important;\r\n    }\r\n}\r\n\r\n.codelens-modal>.modal-dialog {\r\n    width: 400px;\r\n}\r\n\r\n/* End modal dialog styles */\r\n\r\n.footnote.table {\r\n    width: auto;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.footnote.table td.label {\r\n    padding: 2px 5px 2px 5px;\r\n    background-color: #d9edf7;\r\n}\r\n\r\n.ac-canvas {\r\n    background-color: white;\r\n    display: inline-block;\r\n}\r\n\r\n.video-play-overlay {\r\n    position: relative;\r\n    top: -150px;\r\n    left: 44%;\r\n    height: 85px;\r\n    width: 130px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.video_popup video {\r\n    width: 500pt;\r\n    cursor: pointer;\r\n}\r\n\r\n.ui-sortable-helper {\r\n    height: auto !important;\r\n    width: auto !important;\r\n}\r\n\r\n.navLink {\r\n    z-index: 2;\r\n    display: inline;\r\n    bottom: 65px;\r\n    position: fixed;\r\n}\r\n\r\n#relations-next {\r\n    right: 35px;\r\n}\r\n\r\n#relations-prev {\r\n    left: 35px;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n\r\n    /* Styling definitions for chevron function in bookfuncs.js */\r\n    .navLink {\r\n        z-index: 2;\r\n        display: inline;\r\n        position: static;\r\n    }\r\n\r\n    ul#top-relations-console,\r\n    ul#bottom-relations-console {\r\n        list-style: none;\r\n        text-align: center;\r\n        width: 100%;\r\n        margin: 0 auto;\r\n        padding: 40px 0 20px 0;\r\n    }\r\n\r\n    #top-relations-next,\r\n    #top-relations-prev,\r\n    #bottom-relations-next,\r\n    #bottom-relations-prev {\r\n        width: 25%;\r\n        padding: 0 20px;\r\n        display: inline;\r\n    }\r\n}\r\n\r\n.navLink a {\r\n    color: #999;\r\n}\r\n\r\n#completionButton {\r\n    margin-top: 25px;\r\n    margin-bottom: 15px;\r\n    padding-left: 70px;\r\n    padding-right: 70px;\r\n    color: #ffffff;\r\n    font-weight: bold;\r\n}\r\n\r\n.buttonAskCompletion {\r\n    background-color: var(--completionButton);\r\n    border-color: var(--completionButtonHover);\r\n    font-weight: bold;\r\n}\r\n\r\n.buttonAskCompletion:hover {\r\n    background-color: var(--completionButtonHover);\r\n    border-color: var(--completionButtonHover);\r\n}\r\n\r\n.buttonConfirmCompletion {\r\n    background-color: #50d392;\r\n    border-color: #3dc682;\r\n\r\n}\r\n\r\n.buttonConfirmCompletion:hover {\r\n    background-color: #3dc682;\r\n    border-color: #3dc682;\r\n}\r\n\r\n.navLinkBg {\r\n    height: 40px;\r\n    background-color: #ffffff;\r\n    z-index: 1;\r\n    position: fixed;\r\n    bottom: 55px;\r\n    color: #999;\r\n    font-weight: bold;\r\n    -webkit-box-shadow: 0px 0px 3px rgba(50, 50, 50, 0.5);\r\n    -moz-box-shadow: 0px 0px 3px rgba(50, 50, 50, 0.5);\r\n    box-shadow: 0px 0px 3px rgba(50, 50, 50, 0.5);\r\n}\r\n\r\n.navLinkBg:hover {\r\n    color: #999;\r\n}\r\n\r\n#navLinkBgRight {\r\n    right: -1000px;\r\n    padding: 10px 15px 0 65px;\r\n}\r\n\r\n#navLinkBgLeft {\r\n    left: -65px;\r\n    padding-left: 15px;\r\n    padding-right: 50px;\r\n}\r\n\r\n.activehtml {\r\n    width: 100%;\r\n    height: 400px;\r\n    background-color: #ffffff;\r\n}\r\n\r\n.container .section>div.sidebar {\r\n    margin: 0 0 0.5em 1em;\r\n    width: auto;\r\n}\r\n\r\na.disqus_thread_link {\r\n    display: block;\r\n}\r\n\r\n.reveal_button {\r\n    display: block;\r\n    margin-left: 0;\r\n}\r\n\r\niframe[seamless] {\r\n    display: block;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .container .section>div.sidebar {\r\n        margin: 0 3em 0.5em 1em;\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .container .section>div.sidebar {\r\n        margin: 0 11em 0.5em 1em;\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .container .section>div.sidebar {\r\n        margin: 0 18em 0.5em 1em;\r\n    }\r\n}\r\n\r\n\r\ndiv.ExecutionVisualizer table.visualizer {\r\n    width: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-color: #ffffff;\r\n}\r\n\r\n\r\n\r\n\r\n.sltooltip {\r\n    position: absolute;\r\n    z-index: 1020;\r\n    display: block;\r\n    padding-bottom: 5px;\r\n    font-size: 11px;\r\n    visibility: visible;\r\n    margin-top: -2px;\r\n    bottom: 120%;\r\n    margin-left: -2em;\r\n}\r\n\r\n.sltooltip .sltooltip-arrow {\r\n    bottom: 0;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-top: 5px solid #000000;\r\n    border-right: 5px solid transparent;\r\n    border-left: 5px solid transparent;\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.sltooltip-inner {\r\n    max-width: 200px;\r\n    padding: 3px 8px;\r\n    color: var(--tooltip);\r\n    text-align: center;\r\n    text-decoration: none;\r\n    background-color: #000000;\r\n    -webkit-border-radius: 4px;\r\n    -moz-border-radius: 4px;\r\n    border-radius: 4px;\r\n}\r\n\r\nul.dropdown-menu.globaltoc {\r\n    max-height: 700px;\r\n    overflow: auto;\r\n}\r\n\r\n\r\n.globaltoc span.caption-text {\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    font-size: large;\r\n}\r\n\r\n\r\n/* Style lp textareas. */\r\ntextarea#lp-result {\r\n    width: 100%;\r\n    height: 10em;\r\n    font-family: monospace;\r\n}\r\n\r\n\r\n/*\r\n * Hide only visually, but have it available for screen readers:\r\n * https://snook.ca/archives/html_and_css/hiding-content-for-accessibility\r\n *\r\n * 1. For long content, line feeds are not interpreted as spaces and small width\r\n *    causes content to wrap 1 word per line:\r\n *    https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe\r\n */\r\n\r\n.visuallyhidden {\r\n    border: 0;\r\n    clip: rect(0 0 0 0);\r\n    height: 1px;\r\n    margin: -1px;\r\n    overflow: hidden;\r\n    padding: 0;\r\n    position: absolute;\r\n    width: 1px;\r\n    white-space: nowrap;\r\n    /* 1 */\r\n}\r\n\r\n/*\r\n * Extends the .visuallyhidden class to allow the element\r\n * to be focusable when navigated to via the keyboard:\r\n * https://www.drupal.org/node/897638\r\n */\r\n\r\n.visuallyhidden.focusable:active,\r\n.visuallyhidden.focusable:focus {\r\n    clip: auto;\r\n    height: auto;\r\n    margin: 0;\r\n    overflow: visible;\r\n    position: static;\r\n    width: auto;\r\n    white-space: inherit;\r\n}\r\n\r\n\r\n.blockquote {\r\n    text-align: center;\r\n    font-size: large;\r\n    font-style: italic;\r\n    padding-left: 2em;\r\n    padding-right: 2em;\r\n}\r\n\r\n\r\n#scprogresscontainer {\r\n    width: 50%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n#subchapterprogress>div {\r\n    background: green;\r\n}\r\n\r\n#subchapterprogress>div.loggedout {\r\n    background: lightgray;\r\n}\r\n\r\n.runestone_caption {\r\n    text-align: center;\r\n}\r\n\r\n.runestone_caption_divid {\r\n    opacity: 50%;\r\n}\r\n\r\n#questions .runestone_caption:before {\r\n    counter-increment: rscomponent;\r\n    content: \"Problem: \"counter(rscomponent) \" -- \";\r\n}\r\n\r\nbody {\r\n    color: var(--bodyFont);\r\n}\r\n\r\n.jupyter_container .output  {\r\n    margin-top: 10px;\r\n}\r\n\r\n.jupyter_container .output td {\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\n.jupyter_container .output th {\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\n/*Theme toggle*/\r\n.theme-switch-wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    em {\r\n        margin-left: 10px;\r\n        font-size: 1rem;\r\n    }\r\n}\r\n\r\n.theme-switch {\r\n    display: inline-block;\r\n    height: 34px;\r\n    position: relative;\r\n    width: 60px;\r\n}\r\n\r\n.theme-switch input {\r\n    display: none;\r\n}\r\n\r\n.slider {\r\n    background-color: #ccc;\r\n    bottom: 0;\r\n    cursor: pointer;\r\n    left: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    transition: .4s;\r\n}\r\n\r\n.slider:before {\r\n    background-color: #fff;\r\n    bottom: 4px;\r\n    content: \"\";\r\n    height: 26px;\r\n    left: 4px;\r\n    position: absolute;\r\n    transition: .4s;\r\n    width: 26px;\r\n}\r\n\r\ninput:checked+.slider {\r\n    background-color: #66bb6a;\r\n}\r\n\r\ninput:checked+.slider:before {\r\n    transform: translateX(26px);\r\n}\r\n\r\n.slider.round {\r\n    border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n    border-radius: 50%;\r\n}\r\n\r\n/*End theme toggle*/", "",{"version":3,"sources":["webpack://./runestone/common/css/runestone-custom-sphinx-bootstrap.css"],"names":[],"mappings":"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","sourcesContent":["/* Variables holding theme colors */\r\n:root {\r\n    --background: #ffffff;\r\n    --outerBackground: #eeeeee;\r\n    --links: #0645ad;\r\n    --bodyFont: #000000;\r\n    --tooltip: #ffffff;\r\n    --grayToWhite: #333333;\r\n    --navbar: #f8f8f8;\r\n    --navbarFont: #707070;\r\n    --navbarFontHover: #000000;\r\n    --alerts: #d9edf7;\r\n    --completionButton: #ffaa2b;\r\n    --completionButtonHover: #ff9f19;\r\n    --admonition: #fcf8e3;\r\n    --admonitionBorder: #fbeed5;\r\n    --codeButtons: #474949;\r\n    --codeButtonsBorder: #474949;\r\n    --dangerAlerts: #f2dede;\r\n    --successAlerts: #dff0d8;\r\n}\r\n\r\n[data-theme=\"dark\"] {\r\n    --background: #000000;\r\n    --outerBackground: #3d3d3d;\r\n    --links: #1165f0;\r\n    --bodyFont: #ffffff;\r\n    --tooltip: #000000;\r\n    --grayToWhite: #ffffff;\r\n    --navbar: #3d3d3d;\r\n    --navbarFont: #ffffff;\r\n    --navbarFontHover: #d6d6d6;\r\n    --alerts: #714082;\r\n    --completionButton: #650087;\r\n    --completionButtonHover: #560073;\r\n    --admonition: #3d3d3d;\r\n    --admonitionBorder: #262626;\r\n    --codeButtons: #2c0aa6;\r\n    --codeButtonsBorder: #ffffff;\r\n    --dangerAlerts: #8c2626;\r\n    --successAlerts: #217300;\r\n}\r\n\r\n/* custom modification of basic.css for color-contrast (AA compliant) */\r\ntd.linenos pre {\r\n    color: #6b6b6b;\r\n}\r\n\r\n/* custom modification of prettify.css for color-contrast (AA compliant) */\r\n.str {\r\n    color: #006b00;\r\n}\r\n\r\n/* custom modification of parsons.css for color-contrast (AA compliant) */\r\n.parsons .block {\r\n    background-color: #fafafa;\r\n}\r\n\r\n/* custom modification of pygments.css for color-contrast (AA compliant) */\r\n.highlight .c1 {\r\n    color: #376A7B;\r\n}\r\n\r\n.highlight .nn {\r\n    color: #0F6C95;\r\n}\r\n\r\n.highlight .gp {\r\n    color: #A14C08;\r\n}\r\n\r\n.highlight .si {\r\n    color: #3C773D;\r\n}\r\n\r\n.highlight .nc {\r\n    color: #0B719D;\r\n}\r\n\r\n/* `Search` functionality's result custom modification for color-contrast (AA compliant) */\r\nul.search li div.context {\r\n    color: #6b6b6b;\r\n}\r\n\r\nspan.highlighted {\r\n    color: #4d4d4d;\r\n}\r\n\r\n/* ActiveCode gutter custom modification for color-contrast (AA compliant) */\r\n\r\n.CodeMirror-linenumber {\r\n    color: #6b6b6b;\r\n}\r\n\r\n.alert-warning {\r\n    background-color: var(--admonition);\r\n    border-color: var(--admonitionBorder);\r\n}\r\n\r\n/* Python code output custom modification for color-contrast (AA compliant) */\r\ndiv.ExecutionVisualizer table#pyCodeOutput .lineNo {\r\n    color: #6b6b6b;\r\n}\r\n\r\n/* Runestone custom modifications */\r\n\r\nbody {\r\n    counter-reset: rscomponent;\r\n    padding-top: 60px;\r\n    background-color: var(--outerBackground);\r\n}\r\n\r\npre {\r\n    margin: 0 0 1em;\r\n}\r\n\r\nh5 {\r\n    font-weight: bold;\r\n    padding: 10px 0;\r\n}\r\n\r\n/* table-of-contents related styles for color-contrast (AA compliant) */\r\n#table-of-contents a {\r\n    color: var(--links);\r\n}\r\n\r\n#table-of-contents a:hover {\r\n    color: var(--links);\r\n    text-decoration: underline;\r\n}\r\n\r\n#table-of-contents.section {\r\n    font-size: 16px;\r\n}\r\n\r\n/* navbar-brand color contrast (AA compliant) */\r\n.navbar-default {\r\n    background-color: var(--navbar);\r\n}\r\n\r\n.navbar-default .navbar-nav>li {\r\n    color: var(--navbarFont);\r\n}\r\n\r\n.navbar-default .navbar-nav>li>a {\r\n    color: var(--navbarFont);\r\n}\r\n\r\n.navbar-default .navbar-nav>li>a:hover {\r\n    color: var(--navbarFontHover);\r\n}\r\n\r\n.navbar-default .navbar-brand {\r\n    color: var(--navbarFont);\r\n}\r\n\r\n/* acknowledgement related styles for color-contrast (AA compliant) */\r\n.toctree-wrapper {\r\n    font-size: 16px;\r\n}\r\n\r\n.toctree-wrapper a {\r\n    color: var(--links);\r\n}\r\n\r\n.toctree-wrapper a:hover {\r\n    color: var(--links);\r\n    text-decoration: underline;\r\n}\r\n\r\n/* index and search related styles for color-contrast (AA compliant) */\r\n#index-and-search.section {\r\n    font-size: 16px;\r\n}\r\n\r\n#index-and-search.section a {\r\n    color: var(--links);\r\n}\r\n\r\n#index-and-search.section a:hover {\r\n    color: var(--links);\r\n    text-decoration: underline;\r\n}\r\n\r\n/* custom style for `a` tag for color-contrast (AA compliant) */\r\n\r\na {\r\n    color: var(--links);\r\n}\r\n\r\n/* navbar and menu related styles */\r\n@media (max-width: 768px) {\r\n\r\n    /* Remove top padding when top navbar goes collapsed in narrow viewports */\r\n    body {\r\n        padding-top: 0;\r\n        margin: auto auto auto 5px;\r\n    }\r\n\r\n    .navbar-fixed-top {\r\n        position: static;\r\n    }\r\n\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\r\n    /* when navbar is collapsed we don't want any vertical dividers taking up space */\r\n    .navbar .divider-vertical {\r\n        margin: 0 3px;\r\n        border-left: 1px solid #f2f2f2;\r\n    }\r\n}\r\n\r\ndiv.container {\r\n    background-color: var(--background);\r\n}\r\n\r\ndiv.section {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.container {\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n}\r\n\r\n.container .section>*:not(.section):not(.ac_section) {\r\n    max-width: 500pt;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n/* This rule is meant to override the behavior of the\r\n   previous rule since it is not possible to exclude\r\n   more than one section in the not() part of the rule\r\n*/\r\n.container .section div.full-width.container {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    max-width: 90%;\r\n}\r\n\r\n.container .section>img {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.container .section .parsons,\r\n.container .section .parsons .sortable-code-container,\r\n.container .section .cd_section {\r\n    max-width: none;\r\n}\r\n\r\n.navbar>.container .navbar-brand {\r\n    margin-left: 0;\r\n}\r\n\r\n.navbar>.container {\r\n    background-color: var(--navbar);\r\n}\r\n\r\n.footer>.container {\r\n    background-color: var(--outerBackground);\r\n}\r\n\r\n.footer>.container p>a {\r\n    color: var(--links);\r\n}\r\n\r\n.brand-logo {\r\n    float: left;\r\n    display: block;\r\n    background-size: 40px 40px !important;\r\n    width: 40px;\r\n    height: 40px;\r\n    margin-top: 4px;\r\n}\r\n\r\n.social-menu {\r\n    width: 220px;\r\n    padding: 10px 10px 15px 20px;\r\n}\r\n\r\n.fb-like {\r\n    margin-top: 7px;\r\n}\r\n\r\n.fb_iframe_widget span,\r\n.fb_iframe_widget iframe {\r\n    height: 20px !important;\r\n    width: 82px !important;\r\n}\r\n\r\n.twitter-follow-button {\r\n    margin-top: 10px;\r\n}\r\n\r\n.gittip {\r\n    margin-top: 8px;\r\n}\r\n\r\n.gittip-button {\r\n    margin-bottom: -6px;\r\n}\r\n\r\n.dropdown-menu>li>span {\r\n    display: block;\r\n    padding: 3px 20px;\r\n    clear: both;\r\n    font-weight: bold;\r\n    line-height: 20px;\r\n    color: var(--grayToWhite);\r\n    white-space: nowrap;\r\n}\r\n\r\n.dropdown-menu>li>a {\r\n    color: var(--grayToWhite);\r\n}\r\n\r\n.loggedinuser {\r\n    font-weight: bold;\r\n}\r\n\r\n/* end navbar and menu related styles */\r\n\r\n.CodeMirror {\r\n    margin: 0 0 1em 0;\r\n    background-color: var(--background);\r\n    height: auto;\r\n    clear: both;\r\n}\r\n\r\n.CodeMirror-scroll {\r\n    /* this allows CM elements to be resized to (almost) any\r\n     * height while still relying on max-height (which keeps\r\n     * the CM editors to no more than the size needed\r\n     * unless resized) */\r\n    max-height: 60em;\r\n    min-width: 30em;\r\n}\r\n\r\n.ac_section .CodeMirror pre {\r\n    -moz-border-radius: 0;\r\n    -webkit-border-radius: 0;\r\n    -o-border-radius: 0;\r\n    border-radius: 0;\r\n    border-width: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n    background: transparent;\r\n    font-family: Monaco, Courier New, monospace;\r\n    font-size: inherit;\r\n    padding: 0;\r\n    margin: 0;\r\n    white-space: pre;\r\n    word-wrap: normal;\r\n}\r\n\r\nbutton.btn,\r\nbtn.btn-sm,\r\ninput[type=\"submit\"].btn.btn-sm,\r\ninput[type=\"button\"].btn.btn-sm {\r\n    font-size: 1em;\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n}\r\n\r\n.btn {\r\n    margin: 5px;\r\n}\r\n\r\n.btn.disabled {\r\n    /* needed in Bootstrap 3 to allow tooltips on disabled buttons */\r\n    pointer-events: auto;\r\n}\r\n\r\n.btn-default,\r\n.btn-default.disabled,\r\n.btn-default[disabled],\r\n.btn-default.disabled:hover,\r\n.btn-default[disabled]:hover {\r\n    color: #ffffff;\r\n    background-color: var(--codeButtons);\r\n    border-color: var(codeButtonsBorder);\r\n}\r\n\r\n.btn-default:hover,\r\n.btn-default:focus,\r\n.btn-default:active,\r\n.btn-default.active {\r\n    background-color: #3a3c3c;\r\n    border-color: #2e2f2f;\r\n    color: #ffffff;\r\n}\r\n\r\ninput[type=\"radio\"],\r\ninput[type=\"checkbox\"] {\r\n    margin-right: 5px;\r\n}\r\n\r\n.tooltip {\r\n    z-index: 2000 !important;\r\n}\r\n\r\n.tooltip.in {\r\n    opacity: 0.8;\r\n    filter: alpha(opacity=80);\r\n}\r\n\r\nh2 {\r\n    margin-top: 20px;\r\n}\r\n\r\n.alert form {\r\n    margin-bottom: 0;\r\n}\r\n\r\n/* default bookstrap alert color is hard to read (low contrast). */\r\n.alert {\r\n    color: var(--grayToWhite);\r\n    padding: 10px;\r\n}\r\n\r\n.alert-info {\r\n    background-color: var(--alerts);\r\n}\r\n\r\n.alert-danger {\r\n    background-color: var(--dangerAlerts);\r\n}\r\n\r\n/* override the color styles applied by Skulpt to the unittest results divs */\r\n.unittest-results.alert-danger {\r\n    background-color: var(--dangerAlerts) !important;\r\n}\r\n\r\n.unittest-results.alert-success {\r\n    background-color: var(--successAlerts) !important;\r\n}\r\n\r\n.alert label {\r\n    font-weight: normal;\r\n}\r\n\r\n/* These admonition styles styles are copied from the Bootstrap .alert classes.\r\n Most of the !important declarations are to override the Sphinx basic.css styles */\r\n.admonition {\r\n    padding: 8px 35px 8px 14px !important;\r\n    margin-bottom: 20px !important;\r\n    margin-top: 20px !important;\r\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\r\n    background-color: var(--admonition);\r\n    border: 1px solid #fbeed5;\r\n    -webkit-border-radius: 4px;\r\n    -moz-border-radius: 4px;\r\n    border-radius: 4px;\r\n}\r\n\r\n/* .alert-danger */\r\n.admonition.caution {\r\n    color: #A33F3E;\r\n    background-color: #f2dede;\r\n    border-color: #eed3d7;\r\n}\r\n\r\n/* .alert-info */\r\n.admonition.tip,\r\n.admonition.note {\r\n    color: #333;\r\n    background-color: #d9edf7;\r\n    border-color: #bce8f1;\r\n}\r\n\r\n/* from web2py.css */\r\ndiv.flash {\r\n    font-weight: bold;\r\n    position: fixed;\r\n    padding: 10px;\r\n    top: 55px;\r\n    right: 45px;\r\n    opacity: 0.95;\r\n    margin: 0 0 10px 10px;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    color: #ffffff;\r\n    background-color: #000;\r\n    border: 2px solid #fff;\r\n    border-radius: 8px;\r\n    -moz-border-radius: 8px;\r\n    -webkit-border-radius: 8px;\r\n    background-image: -webkit-linear-gradient(top, #222, #000);\r\n    background-image: -o-linear-gradient(top, #222, #000);\r\n    background-image: -moz-linear-gradient(90deg, #222, #000);\r\n    background-image: linear-gradient(top, #222, #000);\r\n    background-repeat: repeat-x;\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    -webkit-font-smoothing: antialiased;\r\n    z-index: 2000;\r\n}\r\n\r\n/* Styles for the login, registration, and Janrain forms */\r\n#web2py_user_form {\r\n    margin-top: 10px;\r\n}\r\n\r\n#web2py_user_form form {\r\n    float: left;\r\n    margin-right: 150px;\r\n    padding-top: 3px;\r\n}\r\n\r\n#web2py_user_form td {\r\n    padding-bottom: 15px;\r\n}\r\n\r\n#web2py_user_form td.w2p_fw {\r\n    width: 299px;\r\n}\r\n\r\n#auth-actions {\r\n    margin-top: 50px;\r\n}\r\n\r\n#sign_in_text td {\r\n    font-size: 17px;\r\n    color: #333;\r\n    font-family: 'lucida grande', Verdana, sans-serif;\r\n    padding-bottom: 13px;\r\n}\r\n\r\n#auth_user_remember {\r\n    margin-top: -20px;\r\n}\r\n\r\n/* End login, registration, Janrain styles */\r\n\r\n/* end-of-chapter exercises styles */\r\n#exercises>ol>li,\r\n#programming-exercises>ol>li {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n#exercises>ol>li:nth-child(even),\r\n#programming-exercises>ol>li:nth-child(even) {\r\n    padding: 1.2em 1.4em;\r\n    background: #faf7df;\r\n    border: 1px solid #fbeed5;\r\n    -webkit-border-radius: 4px;\r\n    -moz-border-radius: 4px;\r\n    border-radius: 4px;\r\n}\r\n\r\n/* End chapter exercises styles */\r\n\r\n/* Modal dialog styles (scratch activecode, compare me, etc) */\r\n.scratch-ac-modal {\r\n    width: 90%;\r\n}\r\n\r\n.compare-modal .progress {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.compare-me-progress {\r\n    width: 100%;\r\n}\r\n\r\n.compare-me-progress .progress-bar,\r\n.unittest-results-progress .progress-bar {\r\n    color: #333;\r\n}\r\n\r\n.modal-body {\r\n    background-color: var(--background);\r\n}\r\n\r\n.modal-header {\r\n    background-color: var(--background);\r\n}\r\n\r\n.unittest-results-progress {\r\n    width: 25%;\r\n}\r\n\r\n.compare-modal {\r\n    width: 350px;\r\n}\r\n\r\n.compare-modal table {\r\n    border-collapse: separate;\r\n    border-spacing: 10px 5px;\r\n}\r\n\r\n.codelens-modal {\r\n    /* we set some custom position styles so that the modal doesn't obscure the codelens visualizer */\r\n    top: 20%;\r\n    right: 20%;\r\n    left: auto;\r\n    bottom: auto;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n    /* remove any custom position styles when the screen is small (mobile devices)\r\n    to prevent the modal from being partially off the screen */\r\n    .codelens-modal {\r\n        top: 0 !important;\r\n        right: 0 !important;\r\n        bottom: 0 !important;\r\n        left: 0 !important;\r\n    }\r\n}\r\n\r\n.codelens-modal>.modal-dialog {\r\n    width: 400px;\r\n}\r\n\r\n/* End modal dialog styles */\r\n\r\n.footnote.table {\r\n    width: auto;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.footnote.table td.label {\r\n    padding: 2px 5px 2px 5px;\r\n    background-color: #d9edf7;\r\n}\r\n\r\n.ac-canvas {\r\n    background-color: white;\r\n    display: inline-block;\r\n}\r\n\r\n.video-play-overlay {\r\n    position: relative;\r\n    top: -150px;\r\n    left: 44%;\r\n    height: 85px;\r\n    width: 130px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.video_popup video {\r\n    width: 500pt;\r\n    cursor: pointer;\r\n}\r\n\r\n.ui-sortable-helper {\r\n    height: auto !important;\r\n    width: auto !important;\r\n}\r\n\r\n.navLink {\r\n    z-index: 2;\r\n    display: inline;\r\n    bottom: 65px;\r\n    position: fixed;\r\n}\r\n\r\n#relations-next {\r\n    right: 35px;\r\n}\r\n\r\n#relations-prev {\r\n    left: 35px;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n\r\n    /* Styling definitions for chevron function in bookfuncs.js */\r\n    .navLink {\r\n        z-index: 2;\r\n        display: inline;\r\n        position: static;\r\n    }\r\n\r\n    ul#top-relations-console,\r\n    ul#bottom-relations-console {\r\n        list-style: none;\r\n        text-align: center;\r\n        width: 100%;\r\n        margin: 0 auto;\r\n        padding: 40px 0 20px 0;\r\n    }\r\n\r\n    #top-relations-next,\r\n    #top-relations-prev,\r\n    #bottom-relations-next,\r\n    #bottom-relations-prev {\r\n        width: 25%;\r\n        padding: 0 20px;\r\n        display: inline;\r\n    }\r\n}\r\n\r\n.navLink a {\r\n    color: #999;\r\n}\r\n\r\n#completionButton {\r\n    margin-top: 25px;\r\n    margin-bottom: 15px;\r\n    padding-left: 70px;\r\n    padding-right: 70px;\r\n    color: #ffffff;\r\n    font-weight: bold;\r\n}\r\n\r\n.buttonAskCompletion {\r\n    background-color: var(--completionButton);\r\n    border-color: var(--completionButtonHover);\r\n    font-weight: bold;\r\n}\r\n\r\n.buttonAskCompletion:hover {\r\n    background-color: var(--completionButtonHover);\r\n    border-color: var(--completionButtonHover);\r\n}\r\n\r\n.buttonConfirmCompletion {\r\n    background-color: #50d392;\r\n    border-color: #3dc682;\r\n\r\n}\r\n\r\n.buttonConfirmCompletion:hover {\r\n    background-color: #3dc682;\r\n    border-color: #3dc682;\r\n}\r\n\r\n.navLinkBg {\r\n    height: 40px;\r\n    background-color: #ffffff;\r\n    z-index: 1;\r\n    position: fixed;\r\n    bottom: 55px;\r\n    color: #999;\r\n    font-weight: bold;\r\n    -webkit-box-shadow: 0px 0px 3px rgba(50, 50, 50, 0.5);\r\n    -moz-box-shadow: 0px 0px 3px rgba(50, 50, 50, 0.5);\r\n    box-shadow: 0px 0px 3px rgba(50, 50, 50, 0.5);\r\n}\r\n\r\n.navLinkBg:hover {\r\n    color: #999;\r\n}\r\n\r\n#navLinkBgRight {\r\n    right: -1000px;\r\n    padding: 10px 15px 0 65px;\r\n}\r\n\r\n#navLinkBgLeft {\r\n    left: -65px;\r\n    padding-left: 15px;\r\n    padding-right: 50px;\r\n}\r\n\r\n.activehtml {\r\n    width: 100%;\r\n    height: 400px;\r\n    background-color: #ffffff;\r\n}\r\n\r\n.container .section>div.sidebar {\r\n    margin: 0 0 0.5em 1em;\r\n    width: auto;\r\n}\r\n\r\na.disqus_thread_link {\r\n    display: block;\r\n}\r\n\r\n.reveal_button {\r\n    display: block;\r\n    margin-left: 0;\r\n}\r\n\r\niframe[seamless] {\r\n    display: block;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .container .section>div.sidebar {\r\n        margin: 0 3em 0.5em 1em;\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .container .section>div.sidebar {\r\n        margin: 0 11em 0.5em 1em;\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .container .section>div.sidebar {\r\n        margin: 0 18em 0.5em 1em;\r\n    }\r\n}\r\n\r\n\r\ndiv.ExecutionVisualizer table.visualizer {\r\n    width: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-color: #ffffff;\r\n}\r\n\r\n\r\n\r\n\r\n.sltooltip {\r\n    position: absolute;\r\n    z-index: 1020;\r\n    display: block;\r\n    padding-bottom: 5px;\r\n    font-size: 11px;\r\n    visibility: visible;\r\n    margin-top: -2px;\r\n    bottom: 120%;\r\n    margin-left: -2em;\r\n}\r\n\r\n.sltooltip .sltooltip-arrow {\r\n    bottom: 0;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-top: 5px solid #000000;\r\n    border-right: 5px solid transparent;\r\n    border-left: 5px solid transparent;\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.sltooltip-inner {\r\n    max-width: 200px;\r\n    padding: 3px 8px;\r\n    color: var(--tooltip);\r\n    text-align: center;\r\n    text-decoration: none;\r\n    background-color: #000000;\r\n    -webkit-border-radius: 4px;\r\n    -moz-border-radius: 4px;\r\n    border-radius: 4px;\r\n}\r\n\r\nul.dropdown-menu.globaltoc {\r\n    max-height: 700px;\r\n    overflow: auto;\r\n}\r\n\r\n\r\n.globaltoc span.caption-text {\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    font-size: large;\r\n}\r\n\r\n\r\n/* Style lp textareas. */\r\ntextarea#lp-result {\r\n    width: 100%;\r\n    height: 10em;\r\n    font-family: monospace;\r\n}\r\n\r\n\r\n/*\r\n * Hide only visually, but have it available for screen readers:\r\n * https://snook.ca/archives/html_and_css/hiding-content-for-accessibility\r\n *\r\n * 1. For long content, line feeds are not interpreted as spaces and small width\r\n *    causes content to wrap 1 word per line:\r\n *    https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe\r\n */\r\n\r\n.visuallyhidden {\r\n    border: 0;\r\n    clip: rect(0 0 0 0);\r\n    height: 1px;\r\n    margin: -1px;\r\n    overflow: hidden;\r\n    padding: 0;\r\n    position: absolute;\r\n    width: 1px;\r\n    white-space: nowrap;\r\n    /* 1 */\r\n}\r\n\r\n/*\r\n * Extends the .visuallyhidden class to allow the element\r\n * to be focusable when navigated to via the keyboard:\r\n * https://www.drupal.org/node/897638\r\n */\r\n\r\n.visuallyhidden.focusable:active,\r\n.visuallyhidden.focusable:focus {\r\n    clip: auto;\r\n    height: auto;\r\n    margin: 0;\r\n    overflow: visible;\r\n    position: static;\r\n    width: auto;\r\n    white-space: inherit;\r\n}\r\n\r\n\r\n.blockquote {\r\n    text-align: center;\r\n    font-size: large;\r\n    font-style: italic;\r\n    padding-left: 2em;\r\n    padding-right: 2em;\r\n}\r\n\r\n\r\n#scprogresscontainer {\r\n    width: 50%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n#subchapterprogress>div {\r\n    background: green;\r\n}\r\n\r\n#subchapterprogress>div.loggedout {\r\n    background: lightgray;\r\n}\r\n\r\n.runestone_caption {\r\n    text-align: center;\r\n}\r\n\r\n.runestone_caption_divid {\r\n    opacity: 50%;\r\n}\r\n\r\n#questions .runestone_caption:before {\r\n    counter-increment: rscomponent;\r\n    content: \"Problem: \"counter(rscomponent) \" -- \";\r\n}\r\n\r\nbody {\r\n    color: var(--bodyFont);\r\n}\r\n\r\n.jupyter_container .output  {\r\n    margin-top: 10px;\r\n}\r\n\r\n.jupyter_container .output td {\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\n.jupyter_container .output th {\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\n/*Theme toggle*/\r\n.theme-switch-wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    em {\r\n        margin-left: 10px;\r\n        font-size: 1rem;\r\n    }\r\n}\r\n\r\n.theme-switch {\r\n    display: inline-block;\r\n    height: 34px;\r\n    position: relative;\r\n    width: 60px;\r\n}\r\n\r\n.theme-switch input {\r\n    display: none;\r\n}\r\n\r\n.slider {\r\n    background-color: #ccc;\r\n    bottom: 0;\r\n    cursor: pointer;\r\n    left: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    transition: .4s;\r\n}\r\n\r\n.slider:before {\r\n    background-color: #fff;\r\n    bottom: 4px;\r\n    content: \"\";\r\n    height: 26px;\r\n    left: 4px;\r\n    position: absolute;\r\n    transition: .4s;\r\n    width: 26px;\r\n}\r\n\r\ninput:checked+.slider {\r\n    background-color: #66bb6a;\r\n}\r\n\r\ninput:checked+.slider:before {\r\n    transform: translateX(26px);\r\n}\r\n\r\n.slider.round {\r\n    border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n    border-radius: 50%;\r\n}\r\n\r\n/*End theme toggle*/"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 77477:
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./runestone/common/css/user-highlights.css ***!
  \****************************************************************************************/
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
/* harmony import */ var _completed_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./completed.png */ 53185);
/* harmony import */ var _active_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./active.png */ 31157);
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_completed_png__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_active_png__WEBPACK_IMPORTED_MODULE_4__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Variables holding theme colors */\r\n:root {\r\n\t--menu: #FFFFFF;\r\n}\r\n\r\n[data-theme=\"dark\"] {\r\n\t--menu: #000000;\r\n}\r\n\r\n.my-highlighted-text{\r\n\tbackground-color:#FFFF99;\r\n}\r\n.social-highlighted-text{\r\n\tbackground-color:#FFCCCC;\r\n}\r\n.highlight-option-box{\r\n\tposition:absolute;\r\n\ttop:0px;\r\n\tleft:0px;\r\n}\r\n.highlight-option-box li{ \r\n\theight:24px;\r\n}\r\n#continue-reading{\r\n\tpadding-top:20px;\r\n\tdisplay: none;\r\n}\r\n#continue-reading a{\r\n\tfloat:right;\r\n\tmargin-right:20px;\r\n}\r\nli.completed\r\n{\r\nlist-style-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\nli.active\r\n{\r\nlist-style-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n.infoTextCompleted{\r\n\tmargin-left:10px;\r\n\tfont-size:0.9em;\r\n\tcolor:#3dc682;\r\n\tdisplay:none;\r\n\tfont-style:italic;\r\n\topacity: 0.7;\r\n}\r\n.infoTextActive{\r\n\tmargin-left:10px;\r\n\tfont-size:0.9em;\r\n\tcolor:#ff9f19;\r\n\tdisplay:none;\r\n\tfont-style:italic;\r\n\topacity: 0.7;\r\n}\r\n.dropdown-menu{\r\n\tbackground-clip: padding-box;\r\n    background-color: var(--menu);\r\n    border: 1px solid rgba(0, 0, 0, 0.2);\r\n    border-radius: 5px 5px 5px 5px;\r\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\r\n    display: none;\r\n    float: left;\r\n    left: 0;\r\n    list-style: none outside none;\r\n    margin: 1px 0 0;\r\n    min-width: 160px;\r\n    padding: 4px 0;\r\n    position: absolute;\r\n    top: 100%;\r\n    z-index: 1000;\r\n}\r\n.dropdown-menu ul {\r\n    list-style: disc outside none;\r\n    margin: 0 0 9px 25px;\r\n    padding: 0;\r\n}\r\n\r\n.sidebar-highlights{\r\n    background-color:#FFFF99;\r\n}\r\ndiv.documentwrapper {\r\n\tborder : 0 none;\r\n}\r\ndiv.bodywrapper {\r\n\tborder-right: 0 none;\r\n}\r\ndiv.sphinxsidebar {\r\n\tborder-left: 1px solid #CCCCCC;\r\n\tpadding-left: 10px;\r\n}\r\n.body>.section .section{\r\n\tpadding-top: 1px;\r\n}\r\n#jump-to-chapter{\r\n    border: 1px solid #CCCCCC;\r\n    letter-spacing: 0.015em;\r\n    line-height: 120%;\r\n    padding: 0.5em;\r\n\twidth: 80%;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n}\r\n#navigation-links{\r\n\tbackground-color: #F8F8F8;\r\n    border: 1px solid #CCCCCC;\r\n\tpadding:10px;\r\n\tmargin:10px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./runestone/common/css/user-highlights.css"],"names":[],"mappings":"AAAA,mCAAmC;AACnC;CACC,eAAe;AAChB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,wBAAwB;AACzB;AACA;CACC,wBAAwB;AACzB;AACA;CACC,iBAAiB;CACjB,OAAO;CACP,QAAQ;AACT;AACA;CACC,WAAW;AACZ;AACA;CACC,gBAAgB;CAChB,aAAa;AACd;AACA;CACC,WAAW;CACX,iBAAiB;AAClB;AACA;;AAEA,yDAAsC;AACtC;AACA;;AAEA,yDAAmC;AACnC;AACA;CACC,gBAAgB;CAChB,eAAe;CACf,aAAa;CACb,YAAY;CACZ,iBAAiB;CACjB,YAAY;AACb;AACA;CACC,gBAAgB;CAChB,eAAe;CACf,aAAa;CACb,YAAY;CACZ,iBAAiB;CACjB,YAAY;AACb;AACA;CACC,4BAA4B;IACzB,6BAA6B;IAC7B,oCAAoC;IACpC,8BAA8B;IAC9B,yCAAyC;IACzC,aAAa;IACb,WAAW;IACX,OAAO;IACP,6BAA6B;IAC7B,eAAe;IACf,gBAAgB;IAChB,cAAc;IACd,kBAAkB;IAClB,SAAS;IACT,aAAa;AACjB;AACA;IACI,6BAA6B;IAC7B,oBAAoB;IACpB,UAAU;AACd;;AAEA;IACI,wBAAwB;AAC5B;AACA;CACC,eAAe;AAChB;AACA;CACC,oBAAoB;AACrB;AACA;CACC,8BAA8B;CAC9B,kBAAkB;AACnB;AACA;CACC,gBAAgB;AACjB;AACA;IACI,yBAAyB;IACzB,uBAAuB;IACvB,iBAAiB;IACjB,cAAc;CACjB,UAAU;CACV,iBAAiB;CACjB,kBAAkB;AACnB;AACA;CACC,yBAAyB;IACtB,yBAAyB;CAC5B,YAAY;CACZ,WAAW;AACZ","sourcesContent":["/* Variables holding theme colors */\r\n:root {\r\n\t--menu: #FFFFFF;\r\n}\r\n\r\n[data-theme=\"dark\"] {\r\n\t--menu: #000000;\r\n}\r\n\r\n.my-highlighted-text{\r\n\tbackground-color:#FFFF99;\r\n}\r\n.social-highlighted-text{\r\n\tbackground-color:#FFCCCC;\r\n}\r\n.highlight-option-box{\r\n\tposition:absolute;\r\n\ttop:0px;\r\n\tleft:0px;\r\n}\r\n.highlight-option-box li{ \r\n\theight:24px;\r\n}\r\n#continue-reading{\r\n\tpadding-top:20px;\r\n\tdisplay: none;\r\n}\r\n#continue-reading a{\r\n\tfloat:right;\r\n\tmargin-right:20px;\r\n}\r\nli.completed\r\n{\r\nlist-style-image: url('completed.png');\r\n}\r\nli.active\r\n{\r\nlist-style-image: url('active.png');\r\n}\r\n.infoTextCompleted{\r\n\tmargin-left:10px;\r\n\tfont-size:0.9em;\r\n\tcolor:#3dc682;\r\n\tdisplay:none;\r\n\tfont-style:italic;\r\n\topacity: 0.7;\r\n}\r\n.infoTextActive{\r\n\tmargin-left:10px;\r\n\tfont-size:0.9em;\r\n\tcolor:#ff9f19;\r\n\tdisplay:none;\r\n\tfont-style:italic;\r\n\topacity: 0.7;\r\n}\r\n.dropdown-menu{\r\n\tbackground-clip: padding-box;\r\n    background-color: var(--menu);\r\n    border: 1px solid rgba(0, 0, 0, 0.2);\r\n    border-radius: 5px 5px 5px 5px;\r\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\r\n    display: none;\r\n    float: left;\r\n    left: 0;\r\n    list-style: none outside none;\r\n    margin: 1px 0 0;\r\n    min-width: 160px;\r\n    padding: 4px 0;\r\n    position: absolute;\r\n    top: 100%;\r\n    z-index: 1000;\r\n}\r\n.dropdown-menu ul {\r\n    list-style: disc outside none;\r\n    margin: 0 0 9px 25px;\r\n    padding: 0;\r\n}\r\n\r\n.sidebar-highlights{\r\n    background-color:#FFFF99;\r\n}\r\ndiv.documentwrapper {\r\n\tborder : 0 none;\r\n}\r\ndiv.bodywrapper {\r\n\tborder-right: 0 none;\r\n}\r\ndiv.sphinxsidebar {\r\n\tborder-left: 1px solid #CCCCCC;\r\n\tpadding-left: 10px;\r\n}\r\n.body>.section .section{\r\n\tpadding-top: 1px;\r\n}\r\n#jump-to-chapter{\r\n    border: 1px solid #CCCCCC;\r\n    letter-spacing: 0.015em;\r\n    line-height: 120%;\r\n    padding: 0.5em;\r\n\twidth: 80%;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n}\r\n#navigation-links{\r\n\tbackground-color: #F8F8F8;\r\n    border: 1px solid #CCCCCC;\r\n\tpadding:10px;\r\n\tmargin:10px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 52416:
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./runestone/matrixeq/css/matrixeq.css ***!
  \***********************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".matrixeq_container {\r\n  padding: 6px 6px 6px 6px;\r\n  margin: 0px 0px 6px 0px;\r\n}\r\n\r\nspan.matrix_table {\r\n  display: inline-table;\r\n  background-color: inherit;\r\n  border-width: 2px 2px;\r\n  border-style: solid;\r\n  border-color: black;\r\n  text-align: center;\r\n  padding: 0px 1px;\r\n  margin: 0px 0px 4px 0px;\r\n  overflow: visible;\r\n}\r\n\r\nspan.matrix_column {\r\n  display: inline-table;\r\n  background-color: inherit;\r\n  padding: 2px 8px 2px 8px;\r\n  margin: 0px 1px;\r\n  border-width: 0px 0px 0px 0px;\r\n  font-family: monospace;\r\n  font-size: 12px;\r\n  vertical-align: middle;\r\n}\r\n\r\nspan.matrix_column div {\r\n  display: block;\r\n  margin: 1px;\r\n  padding: 2px;\r\n  background-color: inherit;\r\n}\r\n\r\nspan.matrix_table .matrix_column {\r\n  border-style: none;\r\n  margin-left: 5px;\r\n  margin-right: 5px;\r\n}\r\n\r\nspan.matrix_table:before {\r\n  content: \" \";\r\n  background-color: inherit;\r\n  width: 85%;\r\n  text-align: center;\r\n  height: 2px;\r\n  position: relative;\r\n  top: -2px;\r\n  z-index: 100;\r\n  display: block;\r\n  margin: 0px auto;\r\n}\r\n\r\nspan.matrix_table:after {\r\n  content: \" \";\r\n  background-color: inherit;\r\n  width: 85%;\r\n  text-align: center;\r\n  height: 2px;\r\n  position: relative;\r\n  top: 2px;\r\n  z-index: 100;\r\n  display: block;\r\n  margin: 0px auto;\r\n}\r\n\r\nspan.matrix_column:before {\r\n  content: \" \";\r\n  width: 85%;\r\n  height: 2px;\r\n  position: relative;\r\n  top: -2px;\r\n  z-index: 100;\r\n  display: block;\r\n}\r\n\r\nspan.matrix_column:after {\r\n  content: \" \";\r\n  width: 85%;\r\n  height: 2px;\r\n  position: relative;\r\n  top: 2px;\r\n  z-index: 100;\r\n  display: block;\r\n}\r\n\r\nspan.matrix_table span.matrix_column:before {\r\n  height: 0px;\r\n}\r\n\r\nspan.matrix_table span.matrix_column:after {\r\n  height: 0px;\r\n}\r\n\r\nspan input[type=\"text\"] {\r\n  display: block;\r\n  margin: 0;\r\n  width: 50px;\r\n  height: 24px;\r\n  font-family: sans-serif;\r\n  font-size: 12px;\r\n  appearance: none;\r\n  box-shadow: none;\r\n  text-align: right;\r\n  background-color: inherit;\r\n}\r\n\r\nspan.matrix_operator {\r\n  display: inline-table;\r\n  padding: 0px;\r\n  margin: 0px 4px 0px 4px;\r\n  font-family: monospace;\r\n  font-size: 18px;\r\n  vertical-align: middle;\r\n}\r\n\r\nspan.matrix_label {\r\n  display: inline-table;\r\n  padding: 0px 0px 0px 20px;\r\n  margin: 0px 1px;\r\n  font-family: sans-serif;\r\n  font-size: 12px;\r\n  vertical-align: middle;\r\n}\r\n\r\n/* Colors for matrix highlighting */\r\n\r\n.lightcyanColor {\r\n  background-color: lightcyan;\r\n}\r\n\r\n.lightgreyColor {\r\n  background-color: lightgrey;\r\n}\r\n\r\n.purpleColor {\r\n  background-color: #DFB5E8;\r\n}\r\n\r\n.yellowColor {\r\n  background-color: #FDFF9D;\r\n}\r\n\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./runestone/matrixeq/css/matrixeq.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB,yBAAyB;EACzB,qBAAqB;EACrB,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,yBAAyB;EACzB,wBAAwB;EACxB,eAAe;EACf,6BAA6B;EAC7B,sBAAsB;EACtB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,UAAU;EACV,kBAAkB;EAClB,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,YAAY;EACZ,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,UAAU;EACV,kBAAkB;EAClB,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,YAAY;EACZ,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,cAAc;EACd,SAAS;EACT,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,uBAAuB;EACvB,sBAAsB;EACtB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,yBAAyB;EACzB,eAAe;EACf,uBAAuB;EACvB,eAAe;EACf,sBAAsB;AACxB;;AAEA,mCAAmC;;AAEnC;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":[".matrixeq_container {\r\n  padding: 6px 6px 6px 6px;\r\n  margin: 0px 0px 6px 0px;\r\n}\r\n\r\nspan.matrix_table {\r\n  display: inline-table;\r\n  background-color: inherit;\r\n  border-width: 2px 2px;\r\n  border-style: solid;\r\n  border-color: black;\r\n  text-align: center;\r\n  padding: 0px 1px;\r\n  margin: 0px 0px 4px 0px;\r\n  overflow: visible;\r\n}\r\n\r\nspan.matrix_column {\r\n  display: inline-table;\r\n  background-color: inherit;\r\n  padding: 2px 8px 2px 8px;\r\n  margin: 0px 1px;\r\n  border-width: 0px 0px 0px 0px;\r\n  font-family: monospace;\r\n  font-size: 12px;\r\n  vertical-align: middle;\r\n}\r\n\r\nspan.matrix_column div {\r\n  display: block;\r\n  margin: 1px;\r\n  padding: 2px;\r\n  background-color: inherit;\r\n}\r\n\r\nspan.matrix_table .matrix_column {\r\n  border-style: none;\r\n  margin-left: 5px;\r\n  margin-right: 5px;\r\n}\r\n\r\nspan.matrix_table:before {\r\n  content: \" \";\r\n  background-color: inherit;\r\n  width: 85%;\r\n  text-align: center;\r\n  height: 2px;\r\n  position: relative;\r\n  top: -2px;\r\n  z-index: 100;\r\n  display: block;\r\n  margin: 0px auto;\r\n}\r\n\r\nspan.matrix_table:after {\r\n  content: \" \";\r\n  background-color: inherit;\r\n  width: 85%;\r\n  text-align: center;\r\n  height: 2px;\r\n  position: relative;\r\n  top: 2px;\r\n  z-index: 100;\r\n  display: block;\r\n  margin: 0px auto;\r\n}\r\n\r\nspan.matrix_column:before {\r\n  content: \" \";\r\n  width: 85%;\r\n  height: 2px;\r\n  position: relative;\r\n  top: -2px;\r\n  z-index: 100;\r\n  display: block;\r\n}\r\n\r\nspan.matrix_column:after {\r\n  content: \" \";\r\n  width: 85%;\r\n  height: 2px;\r\n  position: relative;\r\n  top: 2px;\r\n  z-index: 100;\r\n  display: block;\r\n}\r\n\r\nspan.matrix_table span.matrix_column:before {\r\n  height: 0px;\r\n}\r\n\r\nspan.matrix_table span.matrix_column:after {\r\n  height: 0px;\r\n}\r\n\r\nspan input[type=\"text\"] {\r\n  display: block;\r\n  margin: 0;\r\n  width: 50px;\r\n  height: 24px;\r\n  font-family: sans-serif;\r\n  font-size: 12px;\r\n  appearance: none;\r\n  box-shadow: none;\r\n  text-align: right;\r\n  background-color: inherit;\r\n}\r\n\r\nspan.matrix_operator {\r\n  display: inline-table;\r\n  padding: 0px;\r\n  margin: 0px 4px 0px 4px;\r\n  font-family: monospace;\r\n  font-size: 18px;\r\n  vertical-align: middle;\r\n}\r\n\r\nspan.matrix_label {\r\n  display: inline-table;\r\n  padding: 0px 0px 0px 20px;\r\n  margin: 0px 1px;\r\n  font-family: sans-serif;\r\n  font-size: 12px;\r\n  vertical-align: middle;\r\n}\r\n\r\n/* Colors for matrix highlighting */\r\n\r\n.lightcyanColor {\r\n  background-color: lightcyan;\r\n}\r\n\r\n.lightgreyColor {\r\n  background-color: lightgrey;\r\n}\r\n\r\n.purpleColor {\r\n  background-color: #DFB5E8;\r\n}\r\n\r\n.yellowColor {\r\n  background-color: #FDFF9D;\r\n}\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 83202:
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./runestone/webgldemo/css/webglinteractive.css ***!
  \********************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/********************* Colour reference chart****************\r\nelememt ********* property ********* colour ********\r\n\r\nwebgl_container  background-color    #fcf8e3\r\n\r\n*/\r\n\r\n/* Major sections */\r\n.webgl_container {\r\n  background-color: #fcf8e3;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.webgl_cmds {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  text-align: center;\r\n  padding: 6px;\r\n}\r\n\r\n.webgl_row2 {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  padding: 0px 4px 0px 4px;\r\n  display: block;\r\n  height: 550px;\r\n}\r\n\r\n.webgl_editors {\r\n  box-sizing: border-box;\r\n  float: left;\r\n  display: block;\r\n  visibility: visible;\r\n  width: 50%;\r\n}\r\n\r\n.webgl_canvas {\r\n  box-sizing: border-box;\r\n  float: left;\r\n  display: block;\r\n  visibility: visible;\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n  padding-left: 5px;\r\n  width: 50%;\r\n}\r\n\r\n.webgl_output {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  padding: 4px;\r\n  margin-top: 6px;\r\n  float: left;\r\n}\r\n\r\n/* Details within each section */\r\n/* Tabbed titles, ul horizontal list */\r\n.webgl_nav_tabs {\r\n  height: 31px;\r\n  width: 100%;\r\n  margin: 0px;\r\n  padding: 6px 0px 0px 0px;\r\n  background-color: #CFCCB8;\r\n  border-color: #fbeed5;\r\n  border-top-left-radius: 4px;\r\n  border-top-right-radius: 4px;\r\n  list-style-type: none;\r\n  overflow: hidden;\r\n  display: inline-flex;\r\n}\r\n\r\n.webgl_nav_tabs li {\r\n  border-top-left-radius: 4px;\r\n  border-top-right-radius: 4px;\r\n  margin: 0px 0px 0px 4px;\r\n  padding: 4px 1px 4px 4px;\r\n  list-style-type: none;\r\n  position: relative;\r\n  float: left;\r\n  background-color: #E6E2CC;\r\n  font-size: 9pt;\r\n}\r\n\r\n.webgl_nav_tabs li > a {\r\n  padding: 8px 8px 8px 8px;\r\n  color: #555;\r\n  text-decoration: none;\r\n}\r\n\r\n.webgl_nav_tabs > li > a:hover {\r\n  border-color: #b4b19d;\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.webgl_nav_tabs li.active {\r\n  background-color: #ffffff;\r\n  list-style-type: none;\r\n  list-style-image: none;\r\n}\r\n\r\n/* Webgl editors */\r\n.webgl_tab_content {\r\n  width: 100%;\r\n  position: absolute;\r\n  clear: both;\r\n  margin: 0px 0px 20px 0px;\r\n  border: 0px;\r\n  color: #c09853;\r\n  background-color: #fcf8e3;\r\n  z-index: 1;\r\n}\r\n\r\n.webgl_tab_content.active {\r\n  z-index: 2;\r\n}\r\n\r\n.webgl_tab_content > * {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  /*\tposition:relative; */\r\n}\r\n\r\n.webgl_tab_content .clearfix {\r\n  position: initial;\r\n}\r\n\r\n.webgl_tab_editor {\r\n  width: 100%;\r\n  position: absolute;\r\n  clear: both;\r\n  padding: 10px 4px 10px 4px;\r\n  margin: 0px 0px 20px 0px;\r\n  border: 0px;\r\n  color: #c09853;\r\n  background-color: #fcf8e3;\r\n}\r\n\r\n/* span that contains the tabbed text editors */\r\n.webgl_code {\r\n  width: 100%;\r\n  float: left;\r\n}\r\n\r\n.webgl_tab_contents_text {\r\n  width: 100%;\r\n  position: absolute;\r\n  clear: both;\r\n  padding: 10px 4px 10px 4px;\r\n  margin: 0px 0px 20px 0px;\r\n  border: 0px;\r\n  color: #c09853;\r\n  background-color: #fcf8e3;\r\n  z-index: 1;\r\n}\r\n\r\n.webgl_errorMessages {\r\n  color: red;\r\n}\r\n\r\n.webgl_warningMessages {\r\n  color: rgb(170, 34, 164);\r\n}\r\n\r\n.webgl_infoMessages {\r\n  color: rgb(24, 144, 64);\r\n}\r\n\r\n.webgl_output_div {\r\n  width: 100%;\r\n  margin: 2px;\r\n  border: 1px solid lightgrey;\r\n  padding-bottom: 4px;\r\n  padding-top: 4px;\r\n  padding-left: 4px;\r\n  background-color: white;\r\n  overflow: auto;\r\n  height: 14em;\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n}\r\n\r\n.webgl_editor_highlight {\r\n  background-color: #EEEEEE; /* very light grey */\r\n}\r\n\r\n/* To always show the scroll bar in a div */\r\n::-webkit-scrollbar {\r\n    -webkit-appearance: none;\r\n    width: 7px;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n    border-radius: 4px;\r\n    background-color: rgba(0,0,0,.5);\r\n    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);\r\n}\r\n\r\n.webgl_btn {\r\n  display: inline-block;\r\n  padding: 3px 6px;\r\n  margin-bottom: 0;\r\n  background-color: thistle;\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  cursor: pointer;\r\n  border: 1px solid transparent;\r\n  border-radius: 4px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  -o-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.webgl_checkbox {\r\n}\r\n\r\n.webgl_tabbed_editor {\r\n  width: 100%;\r\n  resize: none;\r\n  font-family: monospace, sans-serif;\r\n  font-size: 9pt;\r\n  font-style: normal;\r\n}\r\n\r\n.canvas3D {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.CodeMirror.webgl-default {\r\n  border: 1px solid #eee;\r\n  font-family: monospace, sans-serif;\r\n  font-size: 8pt;\r\n  font-style: normal;\r\n}\r\n\r\nbutton.btn.webgl-default {\r\n  font-size: 8pt;\r\n}\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./runestone/webgldemo/css/webglinteractive.css"],"names":[],"mappings":"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","sourcesContent":["/********************* Colour reference chart****************\r\nelememt ********* property ********* colour ********\r\n\r\nwebgl_container  background-color    #fcf8e3\r\n\r\n*/\r\n\r\n/* Major sections */\r\n.webgl_container {\r\n  background-color: #fcf8e3;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.webgl_cmds {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  text-align: center;\r\n  padding: 6px;\r\n}\r\n\r\n.webgl_row2 {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  padding: 0px 4px 0px 4px;\r\n  display: block;\r\n  height: 550px;\r\n}\r\n\r\n.webgl_editors {\r\n  box-sizing: border-box;\r\n  float: left;\r\n  display: block;\r\n  visibility: visible;\r\n  width: 50%;\r\n}\r\n\r\n.webgl_canvas {\r\n  box-sizing: border-box;\r\n  float: left;\r\n  display: block;\r\n  visibility: visible;\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n  padding-left: 5px;\r\n  width: 50%;\r\n}\r\n\r\n.webgl_output {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  padding: 4px;\r\n  margin-top: 6px;\r\n  float: left;\r\n}\r\n\r\n/* Details within each section */\r\n/* Tabbed titles, ul horizontal list */\r\n.webgl_nav_tabs {\r\n  height: 31px;\r\n  width: 100%;\r\n  margin: 0px;\r\n  padding: 6px 0px 0px 0px;\r\n  background-color: #CFCCB8;\r\n  border-color: #fbeed5;\r\n  border-top-left-radius: 4px;\r\n  border-top-right-radius: 4px;\r\n  list-style-type: none;\r\n  overflow: hidden;\r\n  display: inline-flex;\r\n}\r\n\r\n.webgl_nav_tabs li {\r\n  border-top-left-radius: 4px;\r\n  border-top-right-radius: 4px;\r\n  margin: 0px 0px 0px 4px;\r\n  padding: 4px 1px 4px 4px;\r\n  list-style-type: none;\r\n  position: relative;\r\n  float: left;\r\n  background-color: #E6E2CC;\r\n  font-size: 9pt;\r\n}\r\n\r\n.webgl_nav_tabs li > a {\r\n  padding: 8px 8px 8px 8px;\r\n  color: #555;\r\n  text-decoration: none;\r\n}\r\n\r\n.webgl_nav_tabs > li > a:hover {\r\n  border-color: #b4b19d;\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.webgl_nav_tabs li.active {\r\n  background-color: #ffffff;\r\n  list-style-type: none;\r\n  list-style-image: none;\r\n}\r\n\r\n/* Webgl editors */\r\n.webgl_tab_content {\r\n  width: 100%;\r\n  position: absolute;\r\n  clear: both;\r\n  margin: 0px 0px 20px 0px;\r\n  border: 0px;\r\n  color: #c09853;\r\n  background-color: #fcf8e3;\r\n  z-index: 1;\r\n}\r\n\r\n.webgl_tab_content.active {\r\n  z-index: 2;\r\n}\r\n\r\n.webgl_tab_content > * {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  /*\tposition:relative; */\r\n}\r\n\r\n.webgl_tab_content .clearfix {\r\n  position: initial;\r\n}\r\n\r\n.webgl_tab_editor {\r\n  width: 100%;\r\n  position: absolute;\r\n  clear: both;\r\n  padding: 10px 4px 10px 4px;\r\n  margin: 0px 0px 20px 0px;\r\n  border: 0px;\r\n  color: #c09853;\r\n  background-color: #fcf8e3;\r\n}\r\n\r\n/* span that contains the tabbed text editors */\r\n.webgl_code {\r\n  width: 100%;\r\n  float: left;\r\n}\r\n\r\n.webgl_tab_contents_text {\r\n  width: 100%;\r\n  position: absolute;\r\n  clear: both;\r\n  padding: 10px 4px 10px 4px;\r\n  margin: 0px 0px 20px 0px;\r\n  border: 0px;\r\n  color: #c09853;\r\n  background-color: #fcf8e3;\r\n  z-index: 1;\r\n}\r\n\r\n.webgl_errorMessages {\r\n  color: red;\r\n}\r\n\r\n.webgl_warningMessages {\r\n  color: rgb(170, 34, 164);\r\n}\r\n\r\n.webgl_infoMessages {\r\n  color: rgb(24, 144, 64);\r\n}\r\n\r\n.webgl_output_div {\r\n  width: 100%;\r\n  margin: 2px;\r\n  border: 1px solid lightgrey;\r\n  padding-bottom: 4px;\r\n  padding-top: 4px;\r\n  padding-left: 4px;\r\n  background-color: white;\r\n  overflow: auto;\r\n  height: 14em;\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n}\r\n\r\n.webgl_editor_highlight {\r\n  background-color: #EEEEEE; /* very light grey */\r\n}\r\n\r\n/* To always show the scroll bar in a div */\r\n::-webkit-scrollbar {\r\n    -webkit-appearance: none;\r\n    width: 7px;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n    border-radius: 4px;\r\n    background-color: rgba(0,0,0,.5);\r\n    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);\r\n}\r\n\r\n.webgl_btn {\r\n  display: inline-block;\r\n  padding: 3px 6px;\r\n  margin-bottom: 0;\r\n  background-color: thistle;\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  cursor: pointer;\r\n  border: 1px solid transparent;\r\n  border-radius: 4px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  -o-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.webgl_checkbox {\r\n}\r\n\r\n.webgl_tabbed_editor {\r\n  width: 100%;\r\n  resize: none;\r\n  font-family: monospace, sans-serif;\r\n  font-size: 9pt;\r\n  font-style: normal;\r\n}\r\n\r\n.canvas3D {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.CodeMirror.webgl-default {\r\n  border: 1px solid #eee;\r\n  font-family: monospace, sans-serif;\r\n  font-size: 8pt;\r\n  font-style: normal;\r\n}\r\n\r\nbutton.btn.webgl-default {\r\n  font-size: 8pt;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 60976:
/*!*************************************************!*\
  !*** ./runestone/common/css/presenter_mode.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_presenter_mode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./presenter_mode.css */ 18555);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_presenter_mode_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_presenter_mode_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ 55284:
/*!********************************************************************!*\
  !*** ./runestone/common/css/runestone-custom-sphinx-bootstrap.css ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_runestone_custom_sphinx_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./runestone-custom-sphinx-bootstrap.css */ 67805);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_runestone_custom_sphinx_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_runestone_custom_sphinx_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ 97286:
/*!**************************************************!*\
  !*** ./runestone/common/css/user-highlights.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_user_highlights_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./user-highlights.css */ 77477);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_user_highlights_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_user_highlights_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ 34044:
/*!*********************************************!*\
  !*** ./runestone/matrixeq/css/matrixeq.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_matrixeq_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./matrixeq.css */ 52416);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_matrixeq_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_matrixeq_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ 36310:
/*!******************************************************!*\
  !*** ./runestone/webgldemo/css/webglinteractive.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_webglinteractive_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./webglinteractive.css */ 83202);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_webglinteractive_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_webglinteractive_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ 31157:
/*!*****************************************!*\
  !*** ./runestone/common/css/active.png ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIlJREFUeNpi/P//PwMlgImBQjAMDGCBsxZIkaYz4RmaAZhAHYjNoOxTQHwTvwsQgAeIe4E4DU18FhAXAPF3QgbMB+IQLOIgA4WAOBRfIOri0AwDIDktfAbYEBF89jRNB0eI0HMEnwGXgXgNHs1roGrweiERGmUMWKIxkZh08AWI04G4j5iEBBBgAPddF58mobqdAAAAAElFTkSuQmCC";

/***/ }),

/***/ 53185:
/*!********************************************!*\
  !*** ./runestone/common/css/completed.png ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAO5JREFUeNpi/P//PwMlgImBQjAwBthc4osH4skgNguJGrmA1BQgjgPiUJIMAGpWBVKrgNgAiL2P6H3aRrQBQM12QGo1EIsBcQxMM0oYABXxAjETFs2+QGobVHM9UPNSjEAEKgoEUjeBuBhNcwDUZm4gXg/U3IRuAcwLSkAsCcRdQE16QDoRiG2BGGQbOxA/BOIcbN5jhKVEoMYiINULFT8PxCJALAvlhwBtX4vXAKghpSBXoKlZCtQcQ1RCAirsBlJVSEIfgLiRpJQINKQdSNVCuTOB/Nt44xjkBWzY+iJvGRBr4pKHYUZKszNAgAEAln9yGpx/ZXMAAAAASUVORK5CYII=";

/***/ }),

/***/ 21294:
/*!******************************************!*\
  !*** ./runestone/common/js/bookfuncs.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageProgressTracker": () => (/* binding */ pageProgressTracker)
/* harmony export */ });
/**
 *
 * User: bmiller
 * Original: 2011-04-20
 * Date: 2019-06-14
 * Time: 2:01 PM
 * This change marks the beginning of version 4.0 of the runestone components
 * Login/logout is no longer handled through javascript but rather server side.
 * Many of the components depend on the runestone:login event so we will keep that
 * for now to keep the churn fairly minimal.
 */

/*

 Copyright (C) 2011  Brad Miller  bonelake@gmail.com

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.

 */

//
// Chevron functions - Must correspond with width in runestone-custom-sphinx-bootstrap.css
//
$(function () {
    var resizeWindow = false;
    var resizeWidth = 600;
    $(window)
        .on("resize", function (event) {
            if ($(window).width() <= resizeWidth && resizeWindow == false) {
                resizeWindow = true;
                var topPrev = $("#relations-prev")
                    .clone()
                    .attr("id", "top-relations-prev");
                var topNext = $("#relations-next")
                    .clone()
                    .attr("id", "top-relations-next");
                $("#relations-prev, #relations-next").hide();
                var bottomPrev = topPrev
                    .clone()
                    .attr("id", "bottom-relations-prev");
                var bottomNext = topNext
                    .clone()
                    .attr("id", "bottom-relations-next");
                $("div#main-content > div").prepend(topPrev, topNext);
                $("#top-relations-prev, #top-relations-next").wrapAll(
                    '<ul id="top-relations-console"></ul>'
                );
                $("div#main-content > div").append(bottomPrev, bottomNext);
                $("#bottom-relations-prev, #bottom-relations-next").wrapAll(
                    '<ul id="bottom-relations-console"></ul>'
                );
            }
            if ($(window).width() >= resizeWidth + 1 && resizeWindow == true) {
                resizeWindow = false;
                $("#top-relations-console, #bottom-relations-console").remove();
                $("#relations-prev, #relations-next").show();
            }
        })
        .resize();
});

//
// Page decoration functions
//

function addReadingList() {
    if (eBookConfig.readings) {
        var l, nxt, path_parts, nxt_link;
        let cur_path_parts = window.location.pathname.split("/");
        let name =
            cur_path_parts[cur_path_parts.length - 2] +
            "/" +
            cur_path_parts[cur_path_parts.length - 1];
        let position = eBookConfig.readings.indexOf(name);
        let num_readings = eBookConfig.readings.length;
        if (position == eBookConfig.readings.length - 1) {
            // no more readings
            l = $("<div />", {
                text: `Finished reading assignment. Page ${num_readings} of ${num_readings}.`,
            });
        } else if (position >= 0) {
            // get next name
            nxt = eBookConfig.readings[position + 1];
            path_parts = cur_path_parts.slice(0, cur_path_parts.length - 2);
            path_parts.push(nxt);
            nxt_link = path_parts.join("/");
            l = $("<a />", {
                name: "link",
                class: "btn btn-lg ' + 'buttonConfirmCompletion'",
                href: nxt_link,
                text: `Continue to page ${
                    position + 2
                } of ${num_readings} in the reading assignment.`,
            });
        } else {
            l = $("<div />", {
                text:
                    "This page is not part of the last reading assignment you visited.",
            });
        }
        $("#main-content").append(l);
    }
}

function timedRefresh() {
    var timeoutPeriod = 900000; // 75 minutes
    $(document).bind("idle.idleTimer", function () {
        // After timeout period send the user back to the index.  This will force a login
        // if needed when they want to go to a particular page.  This may not be perfect
        // but its an easy way to make sure laptop users are properly logged in when they
        // take quizzes and save stuff.
        if (location.href.indexOf("index.html") < 0) {
            console.log("Idle timer - " + location.pathname);
            location.href =
                eBookConfig.app +
                "/default/user/login?_next=" +
                location.pathname +
                location.search;
        }
    });
    $.idleTimer(timeoutPeriod);
}

class PageProgressBar {
    constructor(actDict) {
        this.possible = 0;
        this.total = 1;
        if (actDict && Object.keys(actDict).length > 0) {
            this.activities = actDict;
        } else {
            let activities = { page: 0 };
            $(".runestone").each(function (idx, e) {
                activities[e.firstElementChild.id] = 0;
            });
            this.activities = activities;
        }
        this.calculateProgress();
        if (
            window.location.pathname.match(
                /.*(index.html|toctree.html|Exercises.html|Glossary.html|search.html)$/i
            )
        ) {
            $("#scprogresscontainer").hide();
        }
        this.renderProgress();
    }

    calculateProgress() {
        for (let k in this.activities) {
            if (k !== undefined) {
                this.possible++;
                if (this.activities[k] > 0) {
                    this.total++;
                }
            }
        }
    }

    renderProgress() {
        let value = 0;
        $("#scprogresstotal").text(this.total);
        $("#scprogressposs").text(this.possible);
        try {
            value = (100 * this.total) / this.possible;
        } catch (e) {
            value = 0;
        }
        $("#subchapterprogress").progressbar({
            value: value,
        });
        if (!eBookConfig.isLoggedIn) {
            $("#subchapterprogress>div").addClass("loggedout");
        }
    }

    updateProgress(div_id) {
        this.activities[div_id]++;
        // Only update the progress bar on the first interaction with an object.
        if (this.activities[div_id] === 1) {
            this.total++;
            let val = (100 * this.total) / this.possible;
            $("#scprogresstotal").text(this.total);
            $("#scprogressposs").text(this.possible);
            $("#subchapterprogress").progressbar("option", "value", val);
            if (
                val == 100.0 &&
                $("#completionButton").text().toLowerCase() ===
                    "mark as completed"
            ) {
                $("#completionButton").click();
            }
        }
    }
}

var pageProgressTracker = {};

function handlePageSetup() {
    var mess;
    if (eBookConfig.useRunestoneServices) {
        jQuery.get(eBookConfig.ajaxURL + "set_tz_offset", {
            timezoneoffset: new Date().getTimezoneOffset() / 60,
        });
    }

    if (eBookConfig.isLoggedIn) {
        mess = `username: ${eBookConfig.username}`;
        if (!eBookConfig.isInstructor) {
            $("#ip_dropdown_link").remove();
        }
        $(document).trigger("runestone:login");
        addReadingList();
        timedRefresh();
    } else {
        mess = "Not logged in";
        $(document).trigger("runestone:logout");
    }
    $(".loggedinuser").html(mess);

    pageProgressTracker = new PageProgressBar(eBookConfig.activities);
    notifyRunestoneComponents();
}

function setupNavbarLoggedIn() {
    $("#profilelink").show();
    $("#passwordlink").show();
    $("#registerlink").hide();
    $("li.loginout").html(
        '<a href="' + eBookConfig.app + '/default/user/logout">Log Out</a>'
    );
}
$(document).bind("runestone:login", setupNavbarLoggedIn);

function setupNavbarLoggedOut() {
    if (eBookConfig.useRunestoneServices) {
        console.log("setup navbar for logged out");
        $("#registerlink").show();
        $("#profilelink").hide();
        $("#passwordlink").hide();
        $("#ip_dropdown_link").hide();
        $("li.loginout").html(
            '<a href="' + eBookConfig.app + '/default/user/login">Login</a>'
        );
        $(".footer").html("user not logged in");
    }
}
$(document).bind("runestone:logout", setupNavbarLoggedOut);

function notifyRunestoneComponents() {
    // Runestone components wait until login process is over to load components because of storage issues. This triggers the `dynamic import machinery`, which then sends the login complete signal when this and all dynamic imports are finished.
    $(document).trigger("runestone:pre-login-complete");
}

// initialize stuff
$(document).ready(function () {
    if (eBookConfig) {
        handlePageSetup();
    } else {
        if (typeof eBookConfig === "undefined") {
            console.log(
                "eBookConfig is not defined.  This page must not be set up for Runestone"
            );
        }
    }
});

// misc stuff
// todo:  This could be further distributed but making a video.js file just for one function seems dumb.
$(document).ready(function () {
    // add the video play button overlay image
    $(".video-play-overlay").each(function () {
        $(this).css(
            "background-image",
            "url('{{pathto('_static/play_overlay_icon.png', 1)}}')"
        );
    });

    // This function is needed to allow the dropdown search bar to work;
    // The default behaviour is that the dropdown menu closes when something in
    // it (like the search bar) is clicked
    $(function () {
        // Fix input element click problem
        $(".dropdown input, .dropdown label").click(function (e) {
            e.stopPropagation();
        });
    });
});


/***/ }),

/***/ 26886:
/*!**************************************************!*\
  !*** ./runestone/common/js/jquery.idle-timer.js ***!
  \**************************************************/
/***/ (() => {

/*!
 * jQuery idleTimer plugin
 * version 0.9.100511
 * by Paul Irish.
 *   http://github.com/paulirish/yui-misc/tree/
 * MIT license

 * adapted from YUI idle timer by nzakas:
 *   http://github.com/nzakas/yui-misc/
*/
/*
 * Copyright (c) 2009 Nicholas C. Zakas
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* updated to fix Chrome setTimeout issue by Zaid Zawaideh */

 // API available in <= v0.8
 /*******************************

 // idleTimer() takes an optional argument that defines the idle timeout
 // timeout is in milliseconds; defaults to 30000
 $.idleTimer(10000);


 $(document).bind("idle.idleTimer", function(){
    // function you want to fire when the user goes idle
 });


 $(document).bind("active.idleTimer", function(){
  // function you want to fire when the user becomes active again
 });

 // pass the string 'destroy' to stop the timer
 $.idleTimer('destroy');

 // you can query if the user is idle or not with data()
 $.data(document,'idleTimer');  // 'idle'  or 'active'

 // you can get time elapsed since user when idle/active
 $.idleTimer('getElapsedTime'); // time since state change in ms

 ********/



 // API available in >= v0.9
 /*************************

 // bind to specific elements, allows for multiple timer instances
 $(elem).idleTimer(timeout|'destroy'|'getElapsedTime');
 $.data(elem,'idleTimer');  // 'idle'  or 'active'

 // if you're using the old $.idleTimer api, you should not do $(document).idleTimer(...)

 // element bound timers will only watch for events inside of them.
 // you may just want page-level activity, in which case you may set up
 //   your timers on document, document.documentElement, and document.body

 // You can optionally provide a second argument to override certain options.
 // Here are the defaults, so you can omit any or all of them.
 $(elem).idleTimer(timeout, {
   startImmediately: true, //starts a timeout as soon as the timer is set up; otherwise it waits for the first event.
   idle:    false,         //indicates if the user is idle
   enabled: true,          //indicates if the idle timer is enabled
   events:  'mousemove keydown DOMMouseScroll mousewheel mousedown touchstart touchmove' // activity is one of these events
 });

 ********/

(function($){

$.idleTimer = function(newTimeout, elem, opts){

    // defaults that are to be stored as instance props on the elem

	opts = $.extend({
		startImmediately: true, //starts a timeout as soon as the timer is set up
		idle:    false,         //indicates if the user is idle
		enabled: true,          //indicates if the idle timer is enabled
		timeout: 30000,         //the amount of time (ms) before the user is considered idle
		events:  'mousemove keydown DOMMouseScroll mousewheel mousedown touchstart touchmove' // activity is one of these events
	}, opts);


    elem = elem || document;

    /* (intentionally not documented)
     * Toggles the idle state and fires an appropriate event.
     * @return {void}
     */
    var toggleIdleState = function(myelem){

        // curse you, mozilla setTimeout lateness bug!
        if (typeof myelem === 'number'){
            myelem = undefined;
        }

        var obj = $.data(myelem || elem,'idleTimerObj');

        //toggle the state
        obj.idle = !obj.idle;

        // reset timeout 
        var elapsed = (+new Date()) - obj.olddate;
        obj.olddate = +new Date();

        // handle Chrome always triggering idle after js alert or comfirm popup
        if (obj.idle && (elapsed < opts.timeout)) {
                obj.idle = false;
                clearTimeout($.idleTimer.tId);
                if (opts.enabled)
                  $.idleTimer.tId = setTimeout(toggleIdleState, opts.timeout);
                return;
        }
        
        //fire appropriate event

        // create a custom event, but first, store the new state on the element
        // and then append that string to a namespace
        var event = jQuery.Event( $.data(elem,'idleTimer', obj.idle ? "idle" : "active" )  + '.idleTimer'   );

        // we do want this to bubble, at least as a temporary fix for jQuery 1.7
        // event.stopPropagation();
        $(elem).trigger(event);
    },

    /**
     * Stops the idle timer. This removes appropriate event handlers
     * and cancels any pending timeouts.
     * @return {void}
     * @method stop
     * @static
     */
    stop = function(elem){

        var obj = $.data(elem,'idleTimerObj') || {};

        //set to disabled
        obj.enabled = false;

        //clear any pending timeouts
        clearTimeout(obj.tId);

        //detach the event handlers
        $(elem).off('.idleTimer');
    },


    /* (intentionally not documented)
     * Handles a user event indicating that the user isn't idle.
     * @param {Event} event A DOM2-normalized event object.
     * @return {void}
     */
    handleUserEvent = function(){

        var obj = $.data(this,'idleTimerObj');

        //clear any existing timeout
        clearTimeout(obj.tId);



        //if the idle timer is enabled
        if (obj.enabled){


            //if it's idle, that means the user is no longer idle
            if (obj.idle){
                toggleIdleState(this);
            }

            //set a new timeout
            obj.tId = setTimeout(toggleIdleState, obj.timeout);

        }
     };


    /**
     * Starts the idle timer. This adds appropriate event handlers
     * and starts the first timeout.
     * @param {int} newTimeout (Optional) A new value for the timeout period in ms.
     * @return {void}
     * @method $.idleTimer
     * @static
     */


    var obj = $.data(elem,'idleTimerObj') || {};

    obj.olddate = obj.olddate || +new Date();

    //assign a new timeout if necessary
    if (typeof newTimeout === "number"){
        opts.timeout = newTimeout;
    } else if (newTimeout === 'destroy') {
        stop(elem);
        return this;
    } else if (newTimeout === 'getElapsedTime'){
        return (+new Date()) - obj.olddate;
    }

    //assign appropriate event handlers
    $(elem).on($.trim((opts.events+' ').split(' ').join('.idleTimer ')),handleUserEvent);


    obj.idle    = opts.idle;
    obj.enabled = opts.enabled;
    obj.timeout = opts.timeout;


    //set a timeout to toggle state. May wish to omit this in some situations
	if (opts.startImmediately) {
	    obj.tId = setTimeout(toggleIdleState, obj.timeout);
	}

    // assume the user is active for the first x seconds.
    $.data(elem,'idleTimer',"active");

    // store our instance on the object
    $.data(elem,'idleTimerObj',obj);



}; // end of $.idleTimer()


// v0.9 API for defining multiple timers.
$.fn.idleTimer = function(newTimeout,opts){
	// Allow omission of opts for backward compatibility
	if (!opts) {
		opts = {};
	}

    if(this[0]){
        $.idleTimer(newTimeout,this[0],opts);
    }

    return this;
};


})(jQuery);


/***/ }),

/***/ 43793:
/*!*********************************************************************!*\
  !*** ./runestone/common/js/jquery_i18n/jquery.i18n.emitter.bidi.js ***!
  \*********************************************************************/
/***/ (() => {

/*!
 * BIDI embedding support for jQuery.i18n
 *
 * Copyright (C) 2015, David Chan
 *
 * This code is dual licensed GPLv2 or later and MIT. You don't have to do
 * anything special to choose one license or the other and you don't have to
 * notify anyone which license you are using. You are free to use this code
 * in commercial projects as long as the copyright header is left intact.
 * See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */

( function ( $ ) {
	'use strict';
	var strongDirRegExp;

	/**
	 * Matches the first strong directionality codepoint:
	 * - in group 1 if it is LTR
	 * - in group 2 if it is RTL
	 * Does not match if there is no strong directionality codepoint.
	 *
	 * Generated by UnicodeJS (see tools/strongDir) from the UCD; see
	 * https://phabricator.wikimedia.org/diffusion/GUJS/ .
	 */
	strongDirRegExp = new RegExp(
		'(?:' +
			'(' +
				'[\u0041-\u005a\u0061-\u007a\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u02bb-\u02c1\u02d0\u02d1\u02e0-\u02e4\u02ee\u0370-\u0373\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0482\u048a-\u052f\u0531-\u0556\u0559-\u055f\u0561-\u0587\u0589\u0903-\u0939\u093b\u093d-\u0940\u0949-\u094c\u094e-\u0950\u0958-\u0961\u0964-\u0980\u0982\u0983\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd-\u09c0\u09c7\u09c8\u09cb\u09cc\u09ce\u09d7\u09dc\u09dd\u09df-\u09e1\u09e6-\u09f1\u09f4-\u09fa\u0a03\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a3e-\u0a40\u0a59-\u0a5c\u0a5e\u0a66-\u0a6f\u0a72-\u0a74\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd-\u0ac0\u0ac9\u0acb\u0acc\u0ad0\u0ae0\u0ae1\u0ae6-\u0af0\u0af9\u0b02\u0b03\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b3e\u0b40\u0b47\u0b48\u0b4b\u0b4c\u0b57\u0b5c\u0b5d\u0b5f-\u0b61\u0b66-\u0b77\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe\u0bbf\u0bc1\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcc\u0bd0\u0bd7\u0be6-\u0bf2\u0c01-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c41-\u0c44\u0c58-\u0c5a\u0c60\u0c61\u0c66-\u0c6f\u0c7f\u0c82\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd-\u0cc4\u0cc6-\u0cc8\u0cca\u0ccb\u0cd5\u0cd6\u0cde\u0ce0\u0ce1\u0ce6-\u0cef\u0cf1\u0cf2\u0d02\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d40\u0d46-\u0d48\u0d4a-\u0d4c\u0d4e\u0d57\u0d5f-\u0d61\u0d66-\u0d75\u0d79-\u0d7f\u0d82\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dcf-\u0dd1\u0dd8-\u0ddf\u0de6-\u0def\u0df2-\u0df4\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e4f-\u0e5b\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0ed0-\u0ed9\u0edc-\u0edf\u0f00-\u0f17\u0f1a-\u0f34\u0f36\u0f38\u0f3e-\u0f47\u0f49-\u0f6c\u0f7f\u0f85\u0f88-\u0f8c\u0fbe-\u0fc5\u0fc7-\u0fcc\u0fce-\u0fda\u1000-\u102c\u1031\u1038\u103b\u103c\u103f-\u1057\u105a-\u105d\u1061-\u1070\u1075-\u1081\u1083\u1084\u1087-\u108c\u108e-\u109c\u109e-\u10c5\u10c7\u10cd\u10d0-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1360-\u137c\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u167f\u1681-\u169a\u16a0-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1735\u1736\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17b6\u17be-\u17c5\u17c7\u17c8\u17d4-\u17da\u17dc\u17e0-\u17e9\u1810-\u1819\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1923-\u1926\u1929-\u192b\u1930\u1931\u1933-\u1938\u1946-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u19d0-\u19da\u1a00-\u1a16\u1a19\u1a1a\u1a1e-\u1a55\u1a57\u1a61\u1a63\u1a64\u1a6d-\u1a72\u1a80-\u1a89\u1a90-\u1a99\u1aa0-\u1aad\u1b04-\u1b33\u1b35\u1b3b\u1b3d-\u1b41\u1b43-\u1b4b\u1b50-\u1b6a\u1b74-\u1b7c\u1b82-\u1ba1\u1ba6\u1ba7\u1baa\u1bae-\u1be5\u1be7\u1bea-\u1bec\u1bee\u1bf2\u1bf3\u1bfc-\u1c2b\u1c34\u1c35\u1c3b-\u1c49\u1c4d-\u1c7f\u1cc0-\u1cc7\u1cd3\u1ce1\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u200e\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u214f\u2160-\u2188\u2336-\u237a\u2395\u249c-\u24e9\u26ac\u2800-\u28ff\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d70\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u302e\u302f\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u3190-\u31ba\u31f0-\u321c\u3220-\u324f\u3260-\u327b\u327f-\u32b0\u32c0-\u32cb\u32d0-\u32fe\u3300-\u3376\u337b-\u33dd\u33e0-\u33fe\u3400-\u4db5\u4e00-\u9fd5\ua000-\ua48c\ua4d0-\ua60c\ua610-\ua62b\ua640-\ua66e\ua680-\ua69d\ua6a0-\ua6ef\ua6f2-\ua6f7\ua722-\ua787\ua789-\ua7ad\ua7b0-\ua7b7\ua7f7-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua824\ua827\ua830-\ua837\ua840-\ua873\ua880-\ua8c3\ua8ce-\ua8d9\ua8f2-\ua8fd\ua900-\ua925\ua92e-\ua946\ua952\ua953\ua95f-\ua97c\ua983-\ua9b2\ua9b4\ua9b5\ua9ba\ua9bb\ua9bd-\ua9cd\ua9cf-\ua9d9\ua9de-\ua9e4\ua9e6-\ua9fe\uaa00-\uaa28\uaa2f\uaa30\uaa33\uaa34\uaa40-\uaa42\uaa44-\uaa4b\uaa4d\uaa50-\uaa59\uaa5c-\uaa7b\uaa7d-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaaeb\uaaee-\uaaf5\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab65\uab70-\uabe4\uabe6\uabe7\uabe9-\uabec\uabf0-\uabf9\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\ue000-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]|\ud800[\udc00-\udc0b]|\ud800[\udc0d-\udc26]|\ud800[\udc28-\udc3a]|\ud800\udc3c|\ud800\udc3d|\ud800[\udc3f-\udc4d]|\ud800[\udc50-\udc5d]|\ud800[\udc80-\udcfa]|\ud800\udd00|\ud800\udd02|\ud800[\udd07-\udd33]|\ud800[\udd37-\udd3f]|\ud800[\uddd0-\uddfc]|\ud800[\ude80-\ude9c]|\ud800[\udea0-\uded0]|\ud800[\udf00-\udf23]|\ud800[\udf30-\udf4a]|\ud800[\udf50-\udf75]|\ud800[\udf80-\udf9d]|\ud800[\udf9f-\udfc3]|\ud800[\udfc8-\udfd5]|\ud801[\udc00-\udc9d]|\ud801[\udca0-\udca9]|\ud801[\udd00-\udd27]|\ud801[\udd30-\udd63]|\ud801\udd6f|\ud801[\ude00-\udf36]|\ud801[\udf40-\udf55]|\ud801[\udf60-\udf67]|\ud804\udc00|\ud804[\udc02-\udc37]|\ud804[\udc47-\udc4d]|\ud804[\udc66-\udc6f]|\ud804[\udc82-\udcb2]|\ud804\udcb7|\ud804\udcb8|\ud804[\udcbb-\udcc1]|\ud804[\udcd0-\udce8]|\ud804[\udcf0-\udcf9]|\ud804[\udd03-\udd26]|\ud804\udd2c|\ud804[\udd36-\udd43]|\ud804[\udd50-\udd72]|\ud804[\udd74-\udd76]|\ud804[\udd82-\uddb5]|\ud804[\uddbf-\uddc9]|\ud804\uddcd|\ud804[\uddd0-\udddf]|\ud804[\udde1-\uddf4]|\ud804[\ude00-\ude11]|\ud804[\ude13-\ude2e]|\ud804\ude32|\ud804\ude33|\ud804\ude35|\ud804[\ude38-\ude3d]|\ud804[\ude80-\ude86]|\ud804\ude88|\ud804[\ude8a-\ude8d]|\ud804[\ude8f-\ude9d]|\ud804[\ude9f-\udea9]|\ud804[\udeb0-\udede]|\ud804[\udee0-\udee2]|\ud804[\udef0-\udef9]|\ud804\udf02|\ud804\udf03|\ud804[\udf05-\udf0c]|\ud804\udf0f|\ud804\udf10|\ud804[\udf13-\udf28]|\ud804[\udf2a-\udf30]|\ud804\udf32|\ud804\udf33|\ud804[\udf35-\udf39]|\ud804[\udf3d-\udf3f]|\ud804[\udf41-\udf44]|\ud804\udf47|\ud804\udf48|\ud804[\udf4b-\udf4d]|\ud804\udf50|\ud804\udf57|\ud804[\udf5d-\udf63]|\ud805[\udc80-\udcb2]|\ud805\udcb9|\ud805[\udcbb-\udcbe]|\ud805\udcc1|\ud805[\udcc4-\udcc7]|\ud805[\udcd0-\udcd9]|\ud805[\udd80-\uddb1]|\ud805[\uddb8-\uddbb]|\ud805\uddbe|\ud805[\uddc1-\udddb]|\ud805[\ude00-\ude32]|\ud805\ude3b|\ud805\ude3c|\ud805\ude3e|\ud805[\ude41-\ude44]|\ud805[\ude50-\ude59]|\ud805[\ude80-\udeaa]|\ud805\udeac|\ud805\udeae|\ud805\udeaf|\ud805\udeb6|\ud805[\udec0-\udec9]|\ud805[\udf00-\udf19]|\ud805\udf20|\ud805\udf21|\ud805\udf26|\ud805[\udf30-\udf3f]|\ud806[\udca0-\udcf2]|\ud806\udcff|\ud806[\udec0-\udef8]|\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e]|\ud809[\udc70-\udc74]|\ud809[\udc80-\udd43]|\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38]|\ud81a[\ude40-\ude5e]|\ud81a[\ude60-\ude69]|\ud81a\ude6e|\ud81a\ude6f|\ud81a[\uded0-\udeed]|\ud81a\udef5|\ud81a[\udf00-\udf2f]|\ud81a[\udf37-\udf45]|\ud81a[\udf50-\udf59]|\ud81a[\udf5b-\udf61]|\ud81a[\udf63-\udf77]|\ud81a[\udf7d-\udf8f]|\ud81b[\udf00-\udf44]|\ud81b[\udf50-\udf7e]|\ud81b[\udf93-\udf9f]|\ud82c\udc00|\ud82c\udc01|\ud82f[\udc00-\udc6a]|\ud82f[\udc70-\udc7c]|\ud82f[\udc80-\udc88]|\ud82f[\udc90-\udc99]|\ud82f\udc9c|\ud82f\udc9f|\ud834[\udc00-\udcf5]|\ud834[\udd00-\udd26]|\ud834[\udd29-\udd66]|\ud834[\udd6a-\udd72]|\ud834\udd83|\ud834\udd84|\ud834[\udd8c-\udda9]|\ud834[\uddae-\udde8]|\ud834[\udf60-\udf71]|\ud835[\udc00-\udc54]|\ud835[\udc56-\udc9c]|\ud835\udc9e|\ud835\udc9f|\ud835\udca2|\ud835\udca5|\ud835\udca6|\ud835[\udca9-\udcac]|\ud835[\udcae-\udcb9]|\ud835\udcbb|\ud835[\udcbd-\udcc3]|\ud835[\udcc5-\udd05]|\ud835[\udd07-\udd0a]|\ud835[\udd0d-\udd14]|\ud835[\udd16-\udd1c]|\ud835[\udd1e-\udd39]|\ud835[\udd3b-\udd3e]|\ud835[\udd40-\udd44]|\ud835\udd46|\ud835[\udd4a-\udd50]|\ud835[\udd52-\udea5]|\ud835[\udea8-\udeda]|\ud835[\udedc-\udf14]|\ud835[\udf16-\udf4e]|\ud835[\udf50-\udf88]|\ud835[\udf8a-\udfc2]|\ud835[\udfc4-\udfcb]|\ud836[\udc00-\uddff]|\ud836[\ude37-\ude3a]|\ud836[\ude6d-\ude74]|\ud836[\ude76-\ude83]|\ud836[\ude85-\ude8b]|\ud83c[\udd10-\udd2e]|\ud83c[\udd30-\udd69]|\ud83c[\udd70-\udd9a]|\ud83c[\udde6-\ude02]|\ud83c[\ude10-\ude3a]|\ud83c[\ude40-\ude48]|\ud83c\ude50|\ud83c\ude51|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6]|\ud869[\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34]|\ud86d[\udf40-\udfff]|\ud86e[\udc00-\udc1d]|\ud86e[\udc20-\udfff]|[\ud86f-\ud872][\udc00-\udfff]|\ud873[\udc00-\udea1]|\ud87e[\udc00-\ude1d]|[\udb80-\udbbe][\udc00-\udfff]|\udbbf[\udc00-\udffd]|[\udbc0-\udbfe][\udc00-\udfff]|\udbff[\udc00-\udffd]' +
			')|(' +
				'[\u0590\u05be\u05c0\u05c3\u05c6\u05c8-\u05ff\u07c0-\u07ea\u07f4\u07f5\u07fa-\u0815\u081a\u0824\u0828\u082e-\u0858\u085c-\u089f\u200f\ufb1d\ufb1f-\ufb28\ufb2a-\ufb4f\u0608\u060b\u060d\u061b-\u064a\u066d-\u066f\u0671-\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u0710\u0712-\u072f\u074b-\u07a5\u07b1-\u07bf\u08a0-\u08e2\ufb50-\ufd3d\ufd40-\ufdcf\ufdf0-\ufdfc\ufdfe\ufdff\ufe70-\ufefe]|\ud802[\udc00-\udd1e]|\ud802[\udd20-\ude00]|\ud802\ude04|\ud802[\ude07-\ude0b]|\ud802[\ude10-\ude37]|\ud802[\ude3b-\ude3e]|\ud802[\ude40-\udee4]|\ud802[\udee7-\udf38]|\ud802[\udf40-\udfff]|\ud803[\udc00-\ude5f]|\ud803[\ude7f-\udfff]|\ud83a[\udc00-\udccf]|\ud83a[\udcd7-\udfff]|\ud83b[\udc00-\uddff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\ude00-\udeef]|\ud83b[\udef2-\udeff]' +
			')' +
		')'
	);

	/**
	 * Gets directionality of the first strongly directional codepoint
	 *
	 * This is the rule the BIDI algorithm uses to determine the directionality of
	 * paragraphs ( http://unicode.org/reports/tr9/#The_Paragraph_Level ) and
	 * FSI isolates ( http://unicode.org/reports/tr9/#Explicit_Directional_Isolates ).
	 *
	 * TODO: Does not handle BIDI control characters inside the text.
	 * TODO: Does not handle unallocated characters.
	 *
	 * @param {string} text The text from which to extract initial directionality.
	 * @return {string} Directionality (either 'ltr' or 'rtl')
	 */
	function strongDirFromContent( text ) {
		var m = text.match( strongDirRegExp );
		if ( !m ) {
			return null;
		}
		if ( m[ 2 ] === undefined ) {
			return 'ltr';
		}
		return 'rtl';
	}

	$.extend( $.i18n.parser.emitter, {
		/**
		 * Wraps argument with unicode control characters for directionality safety
		 *
		 * This solves the problem where directionality-neutral characters at the edge of
		 * the argument string get interpreted with the wrong directionality from the
		 * enclosing context, giving renderings that look corrupted like "(Ben_(WMF".
		 *
		 * The wrapping is LRE...PDF or RLE...PDF, depending on the detected
		 * directionality of the argument string, using the BIDI algorithm's own "First
		 * strong directional codepoint" rule. Essentially, this works round the fact that
		 * there is no embedding equivalent of U+2068 FSI (isolation with heuristic
		 * direction inference). The latter is cleaner but still not widely supported.
		 *
		 * @param {string[]} nodes The text nodes from which to take the first item.
		 * @return {string} Wrapped String of content as needed.
		 */
		bidi: function ( nodes ) {
			var dir = strongDirFromContent( nodes[ 0 ] );
			if ( dir === 'ltr' ) {
				// Wrap in LEFT-TO-RIGHT EMBEDDING ... POP DIRECTIONAL FORMATTING
				return '\u202A' + nodes[ 0 ] + '\u202C';
			}
			if ( dir === 'rtl' ) {
				// Wrap in RIGHT-TO-LEFT EMBEDDING ... POP DIRECTIONAL FORMATTING
				return '\u202B' + nodes[ 0 ] + '\u202C';
			}
			// No strong directionality: do not wrap
			return nodes[ 0 ];
		}
	} );
}( jQuery ) );


/***/ }),

/***/ 30423:
/*!****************************************************************!*\
  !*** ./runestone/common/js/jquery_i18n/jquery.i18n.emitter.js ***!
  \****************************************************************/
/***/ (() => {

/*!
 * jQuery Internationalization library
 *
 * Copyright (C) 2011-2013 Santhosh Thottingal, Neil Kandalgaonkar
 *
 * jquery.i18n is dual licensed GPLv2 or later and MIT. You don't have to do
 * anything special to choose one license or the other and you don't have to
 * notify anyone which license you are using. You are free to use
 * UniversalLanguageSelector in commercial projects as long as the copyright
 * header is left intact. See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */

( function ( $ ) {
	'use strict';

	var MessageParserEmitter = function () {
		this.language = $.i18n.languages[ String.locale ] || $.i18n.languages[ 'default' ];
	};

	MessageParserEmitter.prototype = {
		constructor: MessageParserEmitter,

		/**
		 * (We put this method definition here, and not in prototype, to make
		 * sure it's not overwritten by any magic.) Walk entire node structure,
		 * applying replacements and template functions when appropriate
		 *
		 * @param {Mixed} node abstract syntax tree (top node or subnode)
		 * @param {Array} replacements for $1, $2, ... $n
		 * @return {Mixed} single-string node or array of nodes suitable for
		 *  jQuery appending.
		 */
		emit: function ( node, replacements ) {
			var ret, subnodes, operation,
				messageParserEmitter = this;

			switch ( typeof node ) {
				case 'string':
				case 'number':
					ret = node;
					break;
				case 'object':
				// node is an array of nodes
					subnodes = $.map( node.slice( 1 ), function ( n ) {
						return messageParserEmitter.emit( n, replacements );
					} );

					operation = node[ 0 ].toLowerCase();

					if ( typeof messageParserEmitter[ operation ] === 'function' ) {
						ret = messageParserEmitter[ operation ]( subnodes, replacements );
					} else {
						throw new Error( 'unknown operation "' + operation + '"' );
					}

					break;
				case 'undefined':
				// Parsing the empty string (as an entire expression, or as a
				// paramExpression in a template) results in undefined
				// Perhaps a more clever parser can detect this, and return the
				// empty string? Or is that useful information?
				// The logical thing is probably to return the empty string here
				// when we encounter undefined.
					ret = '';
					break;
				default:
					throw new Error( 'unexpected type in AST: ' + typeof node );
			}

			return ret;
		},

		/**
		 * Parsing has been applied depth-first we can assume that all nodes
		 * here are single nodes Must return a single node to parents -- a
		 * jQuery with synthetic span However, unwrap any other synthetic spans
		 * in our children and pass them upwards
		 *
		 * @param {Array} nodes Mixed, some single nodes, some arrays of nodes.
		 * @return {string}
		 */
		concat: function ( nodes ) {
			var result = '';

			$.each( nodes, function ( i, node ) {
				// strings, integers, anything else
				result += node;
			} );

			return result;
		},

		/**
		 * Return escaped replacement of correct index, or string if
		 * unavailable. Note that we expect the parsed parameter to be
		 * zero-based. i.e. $1 should have become [ 0 ]. if the specified
		 * parameter is not found return the same string (e.g. "$99" ->
		 * parameter 98 -> not found -> return "$99" ) TODO throw error if
		 * nodes.length > 1 ?
		 *
		 * @param {Array} nodes One element, integer, n >= 0
		 * @param {Array} replacements for $1, $2, ... $n
		 * @return {string} replacement
		 */
		replace: function ( nodes, replacements ) {
			var index = parseInt( nodes[ 0 ], 10 );

			if ( index < replacements.length ) {
				// replacement is not a string, don't touch!
				return replacements[ index ];
			} else {
				// index not found, fallback to displaying variable
				return '$' + ( index + 1 );
			}
		},

		/**
		 * Transform parsed structure into pluralization n.b. The first node may
		 * be a non-integer (for instance, a string representing an Arabic
		 * number). So convert it back with the current language's
		 * convertNumber.
		 *
		 * @param {Array} nodes List [ {String|Number}, {String}, {String} ... ]
		 * @return {string} selected pluralized form according to current
		 *  language.
		 */
		plural: function ( nodes ) {
			var count = parseFloat( this.language.convertNumber( nodes[ 0 ], 10 ) ),
				forms = nodes.slice( 1 );

			return forms.length ? this.language.convertPlural( count, forms ) : '';
		},

		/**
		 * Transform parsed structure into gender Usage
		 * {{gender:gender|masculine|feminine|neutral}}.
		 *
		 * @param {Array} nodes List [ {String}, {String}, {String} , {String} ]
		 * @return {string} selected gender form according to current language
		 */
		gender: function ( nodes ) {
			var gender = nodes[ 0 ],
				forms = nodes.slice( 1 );

			return this.language.gender( gender, forms );
		},

		/**
		 * Transform parsed structure into grammar conversion. Invoked by
		 * putting {{grammar:form|word}} in a message
		 *
		 * @param {Array} nodes List [{Grammar case eg: genitive}, {String word}]
		 * @return {string} selected grammatical form according to current
		 *  language.
		 */
		grammar: function ( nodes ) {
			var form = nodes[ 0 ],
				word = nodes[ 1 ];

			return word && form && this.language.convertGrammar( word, form );
		}
	};

	$.extend( $.i18n.parser.emitter, new MessageParserEmitter() );
}( jQuery ) );


/***/ }),

/***/ 9001:
/*!******************************************************************!*\
  !*** ./runestone/common/js/jquery_i18n/jquery.i18n.fallbacks.js ***!
  \******************************************************************/
/***/ (() => {

/*!
 * jQuery Internationalization library
 *
 * Copyright (C) 2012 Santhosh Thottingal
 *
 * jquery.i18n is dual licensed GPLv2 or later and MIT. You don't have to do anything special to
 * choose one license or the other and you don't have to notify anyone which license you are using.
 * You are free to use UniversalLanguageSelector in commercial projects as long as the copyright
 * header is left intact. See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */
( function ( $ ) {
	'use strict';

	$.i18n = $.i18n || {};
	$.extend( $.i18n.fallbacks, {
		ab: [ 'ru' ],
		ace: [ 'id' ],
		aln: [ 'sq' ],
		// Not so standard - als is supposed to be Tosk Albanian,
		// but in Wikipedia it's used for a Germanic language.
		als: [ 'gsw', 'de' ],
		an: [ 'es' ],
		anp: [ 'hi' ],
		arn: [ 'es' ],
		arz: [ 'ar' ],
		av: [ 'ru' ],
		ay: [ 'es' ],
		ba: [ 'ru' ],
		bar: [ 'de' ],
		'bat-smg': [ 'sgs', 'lt' ],
		bcc: [ 'fa' ],
		'be-x-old': [ 'be-tarask' ],
		bh: [ 'bho' ],
		bjn: [ 'id' ],
		bm: [ 'fr' ],
		bpy: [ 'bn' ],
		bqi: [ 'fa' ],
		bug: [ 'id' ],
		'cbk-zam': [ 'es' ],
		ce: [ 'ru' ],
		crh: [ 'crh-latn' ],
		'crh-cyrl': [ 'ru' ],
		csb: [ 'pl' ],
		cv: [ 'ru' ],
		'de-at': [ 'de' ],
		'de-ch': [ 'de' ],
		'de-formal': [ 'de' ],
		dsb: [ 'de' ],
		dtp: [ 'ms' ],
		egl: [ 'it' ],
		eml: [ 'it' ],
		ff: [ 'fr' ],
		fit: [ 'fi' ],
		'fiu-vro': [ 'vro', 'et' ],
		frc: [ 'fr' ],
		frp: [ 'fr' ],
		frr: [ 'de' ],
		fur: [ 'it' ],
		gag: [ 'tr' ],
		gan: [ 'gan-hant', 'zh-hant', 'zh-hans' ],
		'gan-hans': [ 'zh-hans' ],
		'gan-hant': [ 'zh-hant', 'zh-hans' ],
		gl: [ 'pt' ],
		glk: [ 'fa' ],
		gn: [ 'es' ],
		gsw: [ 'de' ],
		hif: [ 'hif-latn' ],
		hsb: [ 'de' ],
		ht: [ 'fr' ],
		ii: [ 'zh-cn', 'zh-hans' ],
		inh: [ 'ru' ],
		iu: [ 'ike-cans' ],
		jut: [ 'da' ],
		jv: [ 'id' ],
		kaa: [ 'kk-latn', 'kk-cyrl' ],
		kbd: [ 'kbd-cyrl' ],
		khw: [ 'ur' ],
		kiu: [ 'tr' ],
		kk: [ 'kk-cyrl' ],
		'kk-arab': [ 'kk-cyrl' ],
		'kk-latn': [ 'kk-cyrl' ],
		'kk-cn': [ 'kk-arab', 'kk-cyrl' ],
		'kk-kz': [ 'kk-cyrl' ],
		'kk-tr': [ 'kk-latn', 'kk-cyrl' ],
		kl: [ 'da' ],
		'ko-kp': [ 'ko' ],
		koi: [ 'ru' ],
		krc: [ 'ru' ],
		ks: [ 'ks-arab' ],
		ksh: [ 'de' ],
		ku: [ 'ku-latn' ],
		'ku-arab': [ 'ckb' ],
		kv: [ 'ru' ],
		lad: [ 'es' ],
		lb: [ 'de' ],
		lbe: [ 'ru' ],
		lez: [ 'ru' ],
		li: [ 'nl' ],
		lij: [ 'it' ],
		liv: [ 'et' ],
		lmo: [ 'it' ],
		ln: [ 'fr' ],
		ltg: [ 'lv' ],
		lzz: [ 'tr' ],
		mai: [ 'hi' ],
		'map-bms': [ 'jv', 'id' ],
		mg: [ 'fr' ],
		mhr: [ 'ru' ],
		min: [ 'id' ],
		mo: [ 'ro' ],
		mrj: [ 'ru' ],
		mwl: [ 'pt' ],
		myv: [ 'ru' ],
		mzn: [ 'fa' ],
		nah: [ 'es' ],
		nap: [ 'it' ],
		nds: [ 'de' ],
		'nds-nl': [ 'nl' ],
		'nl-informal': [ 'nl' ],
		no: [ 'nb' ],
		os: [ 'ru' ],
		pcd: [ 'fr' ],
		pdc: [ 'de' ],
		pdt: [ 'de' ],
		pfl: [ 'de' ],
		pms: [ 'it' ],
		pt: [ 'pt-br' ],
		'pt-br': [ 'pt' ],
		qu: [ 'es' ],
		qug: [ 'qu', 'es' ],
		rgn: [ 'it' ],
		rmy: [ 'ro' ],
		'roa-rup': [ 'rup' ],
		rue: [ 'uk', 'ru' ],
		ruq: [ 'ruq-latn', 'ro' ],
		'ruq-cyrl': [ 'mk' ],
		'ruq-latn': [ 'ro' ],
		sa: [ 'hi' ],
		sah: [ 'ru' ],
		scn: [ 'it' ],
		sg: [ 'fr' ],
		sgs: [ 'lt' ],
		sli: [ 'de' ],
		sr: [ 'sr-ec' ],
		srn: [ 'nl' ],
		stq: [ 'de' ],
		su: [ 'id' ],
		szl: [ 'pl' ],
		tcy: [ 'kn' ],
		tg: [ 'tg-cyrl' ],
		tt: [ 'tt-cyrl', 'ru' ],
		'tt-cyrl': [ 'ru' ],
		ty: [ 'fr' ],
		udm: [ 'ru' ],
		ug: [ 'ug-arab' ],
		uk: [ 'ru' ],
		vec: [ 'it' ],
		vep: [ 'et' ],
		vls: [ 'nl' ],
		vmf: [ 'de' ],
		vot: [ 'fi' ],
		vro: [ 'et' ],
		wa: [ 'fr' ],
		wo: [ 'fr' ],
		wuu: [ 'zh-hans' ],
		xal: [ 'ru' ],
		xmf: [ 'ka' ],
		yi: [ 'he' ],
		za: [ 'zh-hans' ],
		zea: [ 'nl' ],
		zh: [ 'zh-hans' ],
		'zh-classical': [ 'lzh' ],
		'zh-cn': [ 'zh-hans' ],
		'zh-hant': [ 'zh-hans' ],
		'zh-hk': [ 'zh-hant', 'zh-hans' ],
		'zh-min-nan': [ 'nan' ],
		'zh-mo': [ 'zh-hk', 'zh-hant', 'zh-hans' ],
		'zh-my': [ 'zh-sg', 'zh-hans' ],
		'zh-sg': [ 'zh-hans' ],
		'zh-tw': [ 'zh-hant', 'zh-hans' ],
		'zh-yue': [ 'yue' ]
	} );
}( jQuery ) );


/***/ }),

/***/ 99283:
/*!********************************************************!*\
  !*** ./runestone/common/js/jquery_i18n/jquery.i18n.js ***!
  \********************************************************/
/***/ (() => {

/*!
 * jQuery Internationalization library
 *
 * Copyright (C) 2012 Santhosh Thottingal
 *
 * jquery.i18n is dual licensed GPLv2 or later and MIT. You don't have to do
 * anything special to choose one license or the other and you don't have to
 * notify anyone which license you are using. You are free to use
 * UniversalLanguageSelector in commercial projects as long as the copyright
 * header is left intact. See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */

( function ( $ ) {
	'use strict';

	var I18N,
		slice = Array.prototype.slice;
	/**
	 * @constructor
	 * @param {Object} options
	 */
	I18N = function ( options ) {
		// Load defaults
		this.options = $.extend( {}, I18N.defaults, options );

		this.parser = this.options.parser;
		this.locale = this.options.locale;
		this.messageStore = this.options.messageStore;
		this.languages = {};
	};

	I18N.prototype = {
		/**
		 * Localize a given messageKey to a locale.
		 * @param {String} messageKey
		 * @return {String} Localized message
		 */
		localize: function ( messageKey ) {
			var localeParts, localePartIndex, locale, fallbackIndex,
				tryingLocale, message;

			locale = this.locale;
			fallbackIndex = 0;

			while ( locale ) {
				// Iterate through locales starting at most-specific until
				// localization is found. As in fi-Latn-FI, fi-Latn and fi.
				localeParts = locale.split( '-' );
				localePartIndex = localeParts.length;

				do {
					tryingLocale = localeParts.slice( 0, localePartIndex ).join( '-' );
					message = this.messageStore.get( tryingLocale, messageKey );

					if ( message ) {
						return message;
					}

					localePartIndex--;
				} while ( localePartIndex );

				if ( locale === 'en' ) {
					break;
				}

				locale = ( $.i18n.fallbacks[ this.locale ] &&
						$.i18n.fallbacks[ this.locale ][ fallbackIndex ] ) ||
						this.options.fallbackLocale;
				$.i18n.log( 'Trying fallback locale for ' + this.locale + ': ' + locale + ' (' + messageKey + ')' );

				fallbackIndex++;
			}

			// key not found
			return '';
		},

		/*
		 * Destroy the i18n instance.
		 */
		destroy: function () {
			$.removeData( document, 'i18n' );
		},

		/**
		 * General message loading API This can take a URL string for
		 * the json formatted messages. Example:
		 * <code>load('path/to/all_localizations.json');</code>
		 *
		 * To load a localization file for a locale:
		 * <code>
		 * load('path/to/de-messages.json', 'de' );
		 * </code>
		 *
		 * To load a localization file from a directory:
		 * <code>
		 * load('path/to/i18n/directory', 'de' );
		 * </code>
		 * The above method has the advantage of fallback resolution.
		 * ie, it will automatically load the fallback locales for de.
		 * For most usecases, this is the recommended method.
		 * It is optional to have trailing slash at end.
		 *
		 * A data object containing message key- message translation mappings
		 * can also be passed. Example:
		 * <code>
		 * load( { 'hello' : 'Hello' }, optionalLocale );
		 * </code>
		 *
		 * A source map containing key-value pair of languagename and locations
		 * can also be passed. Example:
		 * <code>
		 * load( {
		 * bn: 'i18n/bn.json',
		 * he: 'i18n/he.json',
		 * en: 'i18n/en.json'
		 * } )
		 * </code>
		 *
		 * If the data argument is null/undefined/false,
		 * all cached messages for the i18n instance will get reset.
		 *
		 * @param {string|Object} source
		 * @param {string} locale Language tag
		 * @return {jQuery.Promise}
		 */
		load: function ( source, locale ) {
			var fallbackLocales, locIndex, fallbackLocale, sourceMap = {};
			if ( !source && !locale ) {
				source = 'i18n/' + $.i18n().locale + '.json';
				locale = $.i18n().locale;
			}
			if ( typeof source === 'string' &&
				// source extension should be json, but can have query params after that.
				source.split( '?' )[ 0 ].split( '.' ).pop() !== 'json'
			) {
				// Load specified locale then check for fallbacks when directory is
				// specified in load()
				sourceMap[ locale ] = source + '/' + locale + '.json';
				fallbackLocales = ( $.i18n.fallbacks[ locale ] || [] )
					.concat( this.options.fallbackLocale );
				for ( locIndex = 0; locIndex < fallbackLocales.length; locIndex++ ) {
					fallbackLocale = fallbackLocales[ locIndex ];
					sourceMap[ fallbackLocale ] = source + '/' + fallbackLocale + '.json';
				}
				return this.load( sourceMap );
			} else {
				return this.messageStore.load( source, locale );
			}

		},

		/**
		 * Does parameter and magic word substitution.
		 *
		 * @param {string} key Message key
		 * @param {Array} parameters Message parameters
		 * @return {string}
		 */
		parse: function ( key, parameters ) {
			var message = this.localize( key );
			// FIXME: This changes the state of the I18N object,
			// should probably not change the 'this.parser' but just
			// pass it to the parser.
			this.parser.language = $.i18n.languages[ $.i18n().locale ] || $.i18n.languages[ 'default' ];
			if ( message === '' ) {
				message = key;
			}
			return this.parser.parse( message, parameters );
		}
	};

	/**
	 * Process a message from the $.I18N instance
	 * for the current document, stored in jQuery.data(document).
	 *
	 * @param {string} key Key of the message.
	 * @param {string} param1 [param...] Variadic list of parameters for {key}.
	 * @return {string|$.I18N} Parsed message, or if no key was given
	 * the instance of $.I18N is returned.
	 */
	$.i18n = function ( key, param1 ) {
		var parameters,
			i18n = $.data( document, 'i18n' ),
			options = typeof key === 'object' && key;

		// If the locale option for this call is different then the setup so far,
		// update it automatically. This doesn't just change the context for this
		// call but for all future call as well.
		// If there is no i18n setup yet, don't do this. It will be taken care of
		// by the `new I18N` construction below.
		// NOTE: It should only change language for this one call.
		// Then cache instances of I18N somewhere.
		if ( options && options.locale && i18n && i18n.locale !== options.locale ) {
			i18n.locale = options.locale;
		}

		if ( !i18n ) {
			i18n = new I18N( options );
			$.data( document, 'i18n', i18n );
		}

		if ( typeof key === 'string' ) {
			if ( param1 !== undefined ) {
				parameters = slice.call( arguments, 1 );
			} else {
				parameters = [];
			}

			return i18n.parse( key, parameters );
		} else {
			// FIXME: remove this feature/bug.
			return i18n;
		}
	};

	$.fn.i18n = function () {
		var i18n = $.data( document, 'i18n' );

		if ( !i18n ) {
			i18n = new I18N();
			$.data( document, 'i18n', i18n );
		}

		return this.each( function () {
			var $this = $( this ),
				messageKey = $this.data( 'i18n' ),
				lBracket, rBracket, type, key;

			if ( messageKey ) {
				lBracket = messageKey.indexOf( '[' );
				rBracket = messageKey.indexOf( ']' );
				if ( lBracket !== -1 && rBracket !== -1 && lBracket < rBracket ) {
					type = messageKey.slice( lBracket + 1, rBracket );
					key = messageKey.slice( rBracket + 1 );
					if ( type === 'html' ) {
						$this.html( i18n.parse( key ) );
					} else {
						$this.attr( type, i18n.parse( key ) );
					}
				} else {
					$this.text( i18n.parse( messageKey ) );
				}
			} else {
				$this.find( '[data-i18n]' ).i18n();
			}
		} );
	};

	function getDefaultLocale() {
		var nav, locale = $( 'html' ).attr( 'lang' );

		if ( !locale ) {
			if ( typeof window.navigator !== undefined ) {
				nav = window.navigator;
				locale = nav.language || nav.userLanguage || '';
			} else {
				locale = '';
			}
		}
		return locale;
	}

	$.i18n.languages = {};
	$.i18n.messageStore = $.i18n.messageStore || {};
	$.i18n.parser = {
		// The default parser only handles variable substitution
		parse: function ( message, parameters ) {
			return message.replace( /\$(\d+)/g, function ( str, match ) {
				var index = parseInt( match, 10 ) - 1;
				return parameters[ index ] !== undefined ? parameters[ index ] : '$' + match;
			} );
		},
		emitter: {}
	};
	$.i18n.fallbacks = {};
	$.i18n.debug = false;
	$.i18n.log = function ( /* arguments */ ) {
		if ( window.console && $.i18n.debug ) {
			window.console.log.apply( window.console, arguments );
		}
	};
	/* Static members */
	I18N.defaults = {
		locale: getDefaultLocale(),
		fallbackLocale: 'en',
		parser: $.i18n.parser,
		messageStore: $.i18n.messageStore
	};

	// Expose constructor
	$.i18n.constructor = I18N;
}( jQuery ) );

/***/ }),

/***/ 64793:
/*!*****************************************************************!*\
  !*** ./runestone/common/js/jquery_i18n/jquery.i18n.language.js ***!
  \*****************************************************************/
/***/ (() => {

/* global pluralRuleParser */
( function ( $ ) {
	'use strict';

	// jscs:disable
	var language = {
		// CLDR plural rules generated using
		// libs/CLDRPluralRuleParser/tools/PluralXML2JSON.html
		pluralRules: {
			ak: {
				one: 'n = 0..1'
			},
			am: {
				one: 'i = 0 or n = 1'
			},
			ar: {
				zero: 'n = 0',
				one: 'n = 1',
				two: 'n = 2',
				few: 'n % 100 = 3..10',
				many: 'n % 100 = 11..99'
			},
			ars: {
				zero: 'n = 0',
				one: 'n = 1',
				two: 'n = 2',
				few: 'n % 100 = 3..10',
				many: 'n % 100 = 11..99'
			},
			as: {
				one: 'i = 0 or n = 1'
			},
			be: {
				one: 'n % 10 = 1 and n % 100 != 11',
				few: 'n % 10 = 2..4 and n % 100 != 12..14',
				many: 'n % 10 = 0 or n % 10 = 5..9 or n % 100 = 11..14'
			},
			bh: {
				one: 'n = 0..1'
			},
			bn: {
				one: 'i = 0 or n = 1'
			},
			br: {
				one: 'n % 10 = 1 and n % 100 != 11,71,91',
				two: 'n % 10 = 2 and n % 100 != 12,72,92',
				few: 'n % 10 = 3..4,9 and n % 100 != 10..19,70..79,90..99',
				many: 'n != 0 and n % 1000000 = 0'
			},
			bs: {
				one: 'v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11',
				few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14'
			},
			cs: {
				one: 'i = 1 and v = 0',
				few: 'i = 2..4 and v = 0',
				many: 'v != 0'
			},
			cy: {
				zero: 'n = 0',
				one: 'n = 1',
				two: 'n = 2',
				few: 'n = 3',
				many: 'n = 6'
			},
			da: {
				one: 'n = 1 or t != 0 and i = 0,1'
			},
			dsb: {
				one: 'v = 0 and i % 100 = 1 or f % 100 = 1',
				two: 'v = 0 and i % 100 = 2 or f % 100 = 2',
				few: 'v = 0 and i % 100 = 3..4 or f % 100 = 3..4'
			},
			fa: {
				one: 'i = 0 or n = 1'
			},
			ff: {
				one: 'i = 0,1'
			},
			fil: {
				one: 'v = 0 and i = 1,2,3 or v = 0 and i % 10 != 4,6,9 or v != 0 and f % 10 != 4,6,9'
			},
			fr: {
				one: 'i = 0,1'
			},
			ga: {
				one: 'n = 1',
				two: 'n = 2',
				few: 'n = 3..6',
				many: 'n = 7..10'
			},
			gd: {
				one: 'n = 1,11',
				two: 'n = 2,12',
				few: 'n = 3..10,13..19'
			},
			gu: {
				one: 'i = 0 or n = 1'
			},
			guw: {
				one: 'n = 0..1'
			},
			gv: {
				one: 'v = 0 and i % 10 = 1',
				two: 'v = 0 and i % 10 = 2',
				few: 'v = 0 and i % 100 = 0,20,40,60,80',
				many: 'v != 0'
			},
			he: {
				one: 'i = 1 and v = 0',
				two: 'i = 2 and v = 0',
				many: 'v = 0 and n != 0..10 and n % 10 = 0'
			},
			hi: {
				one: 'i = 0 or n = 1'
			},
			hr: {
				one: 'v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11',
				few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14'
			},
			hsb: {
				one: 'v = 0 and i % 100 = 1 or f % 100 = 1',
				two: 'v = 0 and i % 100 = 2 or f % 100 = 2',
				few: 'v = 0 and i % 100 = 3..4 or f % 100 = 3..4'
			},
			hy: {
				one: 'i = 0,1'
			},
			is: {
				one: 't = 0 and i % 10 = 1 and i % 100 != 11 or t != 0'
			},
			iu: {
				one: 'n = 1',
				two: 'n = 2'
			},
			iw: {
				one: 'i = 1 and v = 0',
				two: 'i = 2 and v = 0',
				many: 'v = 0 and n != 0..10 and n % 10 = 0'
			},
			kab: {
				one: 'i = 0,1'
			},
			kn: {
				one: 'i = 0 or n = 1'
			},
			kw: {
				one: 'n = 1',
				two: 'n = 2'
			},
			lag: {
				zero: 'n = 0',
				one: 'i = 0,1 and n != 0'
			},
			ln: {
				one: 'n = 0..1'
			},
			lt: {
				one: 'n % 10 = 1 and n % 100 != 11..19',
				few: 'n % 10 = 2..9 and n % 100 != 11..19',
				many: 'f != 0'
			},
			lv: {
				zero: 'n % 10 = 0 or n % 100 = 11..19 or v = 2 and f % 100 = 11..19',
				one: 'n % 10 = 1 and n % 100 != 11 or v = 2 and f % 10 = 1 and f % 100 != 11 or v != 2 and f % 10 = 1'
			},
			mg: {
				one: 'n = 0..1'
			},
			mk: {
				one: 'v = 0 and i % 10 = 1 or f % 10 = 1'
			},
			mo: {
				one: 'i = 1 and v = 0',
				few: 'v != 0 or n = 0 or n != 1 and n % 100 = 1..19'
			},
			mr: {
				one: 'i = 0 or n = 1'
			},
			mt: {
				one: 'n = 1',
				few: 'n = 0 or n % 100 = 2..10',
				many: 'n % 100 = 11..19'
			},
			naq: {
				one: 'n = 1',
				two: 'n = 2'
			},
			nso: {
				one: 'n = 0..1'
			},
			pa: {
				one: 'n = 0..1'
			},
			pl: {
				one: 'i = 1 and v = 0',
				few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14',
				many: 'v = 0 and i != 1 and i % 10 = 0..1 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 12..14'
			},
			prg: {
				zero: 'n % 10 = 0 or n % 100 = 11..19 or v = 2 and f % 100 = 11..19',
				one: 'n % 10 = 1 and n % 100 != 11 or v = 2 and f % 10 = 1 and f % 100 != 11 or v != 2 and f % 10 = 1'
			},
			pt: {
				one: 'i = 0..1'
			},
			ro: {
				one: 'i = 1 and v = 0',
				few: 'v != 0 or n = 0 or n != 1 and n % 100 = 1..19'
			},
			ru: {
				one: 'v = 0 and i % 10 = 1 and i % 100 != 11',
				few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14',
				many: 'v = 0 and i % 10 = 0 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 11..14'
			},
			se: {
				one: 'n = 1',
				two: 'n = 2'
			},
			sh: {
				one: 'v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11',
				few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14'
			},
			shi: {
				one: 'i = 0 or n = 1',
				few: 'n = 2..10'
			},
			si: {
				one: 'n = 0,1 or i = 0 and f = 1'
			},
			sk: {
				one: 'i = 1 and v = 0',
				few: 'i = 2..4 and v = 0',
				many: 'v != 0'
			},
			sl: {
				one: 'v = 0 and i % 100 = 1',
				two: 'v = 0 and i % 100 = 2',
				few: 'v = 0 and i % 100 = 3..4 or v != 0'
			},
			sma: {
				one: 'n = 1',
				two: 'n = 2'
			},
			smi: {
				one: 'n = 1',
				two: 'n = 2'
			},
			smj: {
				one: 'n = 1',
				two: 'n = 2'
			},
			smn: {
				one: 'n = 1',
				two: 'n = 2'
			},
			sms: {
				one: 'n = 1',
				two: 'n = 2'
			},
			sr: {
				one: 'v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11',
				few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14'
			},
			ti: {
				one: 'n = 0..1'
			},
			tl: {
				one: 'v = 0 and i = 1,2,3 or v = 0 and i % 10 != 4,6,9 or v != 0 and f % 10 != 4,6,9'
			},
			tzm: {
				one: 'n = 0..1 or n = 11..99'
			},
			uk: {
				one: 'v = 0 and i % 10 = 1 and i % 100 != 11',
				few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14',
				many: 'v = 0 and i % 10 = 0 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 11..14'
			},
			wa: {
				one: 'n = 0..1'
			},
			zu: {
				one: 'i = 0 or n = 1'
			}
		},
		// jscs:enable

		/**
		 * Plural form transformations, needed for some languages.
		 *
		 * @param {integer} count
		 *            Non-localized quantifier
		 * @param {Array} forms
		 *            List of plural forms
		 * @return {string} Correct form for quantifier in this language
		 */
		convertPlural: function ( count, forms ) {
			var pluralRules,
				pluralFormIndex,
				index,
				explicitPluralPattern = new RegExp( '\\d+=', 'i' ),
				formCount,
				form;

			if ( !forms || forms.length === 0 ) {
				return '';
			}

			// Handle for Explicit 0= & 1= values
			for ( index = 0; index < forms.length; index++ ) {
				form = forms[ index ];
				if ( explicitPluralPattern.test( form ) ) {
					formCount = parseInt( form.slice( 0, form.indexOf( '=' ) ), 10 );
					if ( formCount === count ) {
						return ( form.slice( form.indexOf( '=' ) + 1 ) );
					}
					forms[ index ] = undefined;
				}
			}

			forms = $.map( forms, function ( form ) {
				if ( form !== undefined ) {
					return form;
				}
			} );

			pluralRules = this.pluralRules[ $.i18n().locale ];

			if ( !pluralRules ) {
				// default fallback.
				return ( count === 1 ) ? forms[ 0 ] : forms[ 1 ];
			}

			pluralFormIndex = this.getPluralForm( count, pluralRules );
			pluralFormIndex = Math.min( pluralFormIndex, forms.length - 1 );

			return forms[ pluralFormIndex ];
		},

		/**
		 * For the number, get the plural for index
		 *
		 * @param {integer} number
		 * @param {Object} pluralRules
		 * @return {integer} plural form index
		 */
		getPluralForm: function ( number, pluralRules ) {
			var i,
				pluralForms = [ 'zero', 'one', 'two', 'few', 'many', 'other' ],
				pluralFormIndex = 0;

			for ( i = 0; i < pluralForms.length; i++ ) {
				if ( pluralRules[ pluralForms[ i ] ] ) {
					if ( pluralRuleParser( pluralRules[ pluralForms[ i ] ], number ) ) {
						return pluralFormIndex;
					}

					pluralFormIndex++;
				}
			}

			return pluralFormIndex;
		},

		/**
		 * Converts a number using digitTransformTable.
		 *
		 * @param {number} num Value to be converted
		 * @param {boolean} integer Convert the return value to an integer
		 * @return {string} The number converted into a String.
		 */
		convertNumber: function ( num, integer ) {
			var tmp, item, i,
				transformTable, numberString, convertedNumber;

			// Set the target Transform table:
			transformTable = this.digitTransformTable( $.i18n().locale );
			numberString = String( num );
			convertedNumber = '';

			if ( !transformTable ) {
				return num;
			}

			// Check if the restore to Latin number flag is set:
			if ( integer ) {
				if ( parseFloat( num, 10 ) === num ) {
					return num;
				}

				tmp = [];

				for ( item in transformTable ) {
					tmp[ transformTable[ item ] ] = item;
				}

				transformTable = tmp;
			}

			for ( i = 0; i < numberString.length; i++ ) {
				if ( transformTable[ numberString[ i ] ] ) {
					convertedNumber += transformTable[ numberString[ i ] ];
				} else {
					convertedNumber += numberString[ i ];
				}
			}

			return integer ? parseFloat( convertedNumber, 10 ) : convertedNumber;
		},

		/**
		 * Grammatical transformations, needed for inflected languages.
		 * Invoked by putting {{grammar:form|word}} in a message.
		 * Override this method for languages that need special grammar rules
		 * applied dynamically.
		 *
		 * @param {string} word
		 * @param {string} form
		 * @return {string}
		 */
		// eslint-disable-next-line no-unused-vars
		convertGrammar: function ( word, form ) {
			return word;
		},

		/**
		 * Provides an alternative text depending on specified gender. Usage
		 * {{gender:[gender|user object]|masculine|feminine|neutral}}. If second
		 * or third parameter are not specified, masculine is used.
		 *
		 * These details may be overriden per language.
		 *
		 * @param {string} gender
		 *      male, female, or anything else for neutral.
		 * @param {Array} forms
		 *      List of gender forms
		 *
		 * @return {string}
		 */
		gender: function ( gender, forms ) {
			if ( !forms || forms.length === 0 ) {
				return '';
			}

			while ( forms.length < 2 ) {
				forms.push( forms[ forms.length - 1 ] );
			}

			if ( gender === 'male' ) {
				return forms[ 0 ];
			}

			if ( gender === 'female' ) {
				return forms[ 1 ];
			}

			return ( forms.length === 3 ) ? forms[ 2 ] : forms[ 0 ];
		},

		/**
		 * Get the digit transform table for the given language
		 * See http://cldr.unicode.org/translation/numbering-systems
		 *
		 * @param {string} language
		 * @return {Array|boolean} List of digits in the passed language or false
		 * representation, or boolean false if there is no information.
		 */
		digitTransformTable: function ( language ) {
			var tables = {
				ar: '٠١٢٣٤٥٦٧٨٩',
				fa: '۰۱۲۳۴۵۶۷۸۹',
				ml: '൦൧൨൩൪൫൬൭൮൯',
				kn: '೦೧೨೩೪೫೬೭೮೯',
				lo: '໐໑໒໓໔໕໖໗໘໙',
				or: '୦୧୨୩୪୫୬୭୮୯',
				kh: '០១២៣៤៥៦៧៨៩',
				pa: '੦੧੨੩੪੫੬੭੮੯',
				gu: '૦૧૨૩૪૫૬૭૮૯',
				hi: '०१२३४५६७८९',
				my: '၀၁၂၃၄၅၆၇၈၉',
				ta: '௦௧௨௩௪௫௬௭௮௯',
				te: '౦౧౨౩౪౫౬౭౮౯',
				th: '๐๑๒๓๔๕๖๗๘๙', // FIXME use iso 639 codes
				bo: '༠༡༢༣༤༥༦༧༨༩' // FIXME use iso 639 codes
			};

			if ( !tables[ language ] ) {
				return false;
			}

			return tables[ language ].split( '' );
		}
	};

	$.extend( $.i18n.languages, {
		'default': language
	} );
}( jQuery ) );


/***/ }),

/***/ 34517:
/*!*********************************************************************!*\
  !*** ./runestone/common/js/jquery_i18n/jquery.i18n.messagestore.js ***!
  \*********************************************************************/
/***/ (() => {

/*!
 * jQuery Internationalization library - Message Store
 *
 * Copyright (C) 2012 Santhosh Thottingal
 *
 * jquery.i18n is dual licensed GPLv2 or later and MIT. You don't have to do anything special to
 * choose one license or the other and you don't have to notify anyone which license you are using.
 * You are free to use UniversalLanguageSelector in commercial projects as long as the copyright
 * header is left intact. See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */

( function ( $ ) {
	'use strict';

	var MessageStore = function () {
		this.messages = {};
		this.sources = {};
	};

	function jsonMessageLoader( url ) {
		var deferred = $.Deferred();

		$.getJSON( url )
			.done( deferred.resolve )
			.fail( function ( jqxhr, settings, exception ) {
				$.i18n.log( 'Error in loading messages from ' + url + ' Exception: ' + exception );
				// Ignore 404 exception, because we are handling fallabacks explicitly
				deferred.resolve();
			} );

		return deferred.promise();
	}

	/**
	 * See https://github.com/wikimedia/jquery.i18n/wiki/Specification#wiki-Message_File_Loading
	 */
	MessageStore.prototype = {

		/**
		 * General message loading API This can take a URL string for
		 * the json formatted messages.
		 * <code>load('path/to/all_localizations.json');</code>
		 *
		 * This can also load a localization file for a locale <code>
		 * load( 'path/to/de-messages.json', 'de' );
		 * </code>
		 * A data object containing message key- message translation mappings
		 * can also be passed Eg:
		 * <code>
		 * load( { 'hello' : 'Hello' }, optionalLocale );
		 * </code> If the data argument is
		 * null/undefined/false,
		 * all cached messages for the i18n instance will get reset.
		 *
		 * @param {string|Object} source
		 * @param {string} locale Language tag
		 * @return {jQuery.Promise}
		 */
		load: function ( source, locale ) {
			var key = null,
				deferred = null,
				deferreds = [],
				messageStore = this;

			if ( typeof source === 'string' ) {
				// This is a URL to the messages file.
				$.i18n.log( 'Loading messages from: ' + source );
				deferred = jsonMessageLoader( source )
					.done( function ( localization ) {
						messageStore.set( locale, localization );
					} );

				return deferred.promise();
			}

			if ( locale ) {
				// source is an key-value pair of messages for given locale
				messageStore.set( locale, source );

				return $.Deferred().resolve();
			} else {
				// source is a key-value pair of locales and their source
				for ( key in source ) {
					if ( Object.prototype.hasOwnProperty.call( source, key ) ) {
						locale = key;
						// No {locale} given, assume data is a group of languages,
						// call this function again for each language.
						deferreds.push( messageStore.load( source[ key ], locale ) );
					}
				}
				return $.when.apply( $, deferreds );
			}

		},

		/**
		 * Set messages to the given locale.
		 * If locale exists, add messages to the locale.
		 *
		 * @param {string} locale
		 * @param {Object} messages
		 */
		set: function ( locale, messages ) {
			if ( !this.messages[ locale ] ) {
				this.messages[ locale ] = messages;
			} else {
				this.messages[ locale ] = $.extend( this.messages[ locale ], messages );
			}
		},

		/**
		 *
		 * @param {string} locale
		 * @param {string} messageKey
		 * @return {boolean}
		 */
		get: function ( locale, messageKey ) {
			return this.messages[ locale ] && this.messages[ locale ][ messageKey ];
		}
	};

	$.extend( $.i18n.messageStore, new MessageStore() );
}( jQuery ) );


/***/ }),

/***/ 25252:
/*!***************************************************************!*\
  !*** ./runestone/common/js/jquery_i18n/jquery.i18n.parser.js ***!
  \***************************************************************/
/***/ (() => {

/*!
 * jQuery Internationalization library
 *
 * Copyright (C) 2011-2013 Santhosh Thottingal, Neil Kandalgaonkar
 *
 * jquery.i18n is dual licensed GPLv2 or later and MIT. You don't have to do
 * anything special to choose one license or the other and you don't have to
 * notify anyone which license you are using. You are free to use
 * UniversalLanguageSelector in commercial projects as long as the copyright
 * header is left intact. See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */

( function ( $ ) {
	'use strict';

	var MessageParser = function ( options ) {
		this.options = $.extend( {}, $.i18n.parser.defaults, options );
		this.language = $.i18n.languages[ String.locale ] || $.i18n.languages[ 'default' ];
		this.emitter = $.i18n.parser.emitter;
	};

	MessageParser.prototype = {

		constructor: MessageParser,

		simpleParse: function ( message, parameters ) {
			return message.replace( /\$(\d+)/g, function ( str, match ) {
				var index = parseInt( match, 10 ) - 1;

				return parameters[ index ] !== undefined ? parameters[ index ] : '$' + match;
			} );
		},

		parse: function ( message, replacements ) {
			if ( message.indexOf( '{{' ) < 0 ) {
				return this.simpleParse( message, replacements );
			}

			this.emitter.language = $.i18n.languages[ $.i18n().locale ] ||
				$.i18n.languages[ 'default' ];

			return this.emitter.emit( this.ast( message ), replacements );
		},

		ast: function ( message ) {
			var pipe, colon, backslash, anyCharacter, dollar, digits, regularLiteral,
				regularLiteralWithoutBar, regularLiteralWithoutSpace, escapedOrLiteralWithoutBar,
				escapedOrRegularLiteral, templateContents, templateName, openTemplate,
				closeTemplate, expression, paramExpression, result,
				pos = 0;

			// Try parsers until one works, if none work return null
			function choice( parserSyntax ) {
				return function () {
					var i, result;

					for ( i = 0; i < parserSyntax.length; i++ ) {
						result = parserSyntax[ i ]();

						if ( result !== null ) {
							return result;
						}
					}

					return null;
				};
			}

			// Try several parserSyntax-es in a row.
			// All must succeed; otherwise, return null.
			// This is the only eager one.
			function sequence( parserSyntax ) {
				var i, res,
					originalPos = pos,
					result = [];

				for ( i = 0; i < parserSyntax.length; i++ ) {
					res = parserSyntax[ i ]();

					if ( res === null ) {
						pos = originalPos;

						return null;
					}

					result.push( res );
				}

				return result;
			}

			// Run the same parser over and over until it fails.
			// Must succeed a minimum of n times; otherwise, return null.
			function nOrMore( n, p ) {
				return function () {
					var originalPos = pos,
						result = [],
						parsed = p();

					while ( parsed !== null ) {
						result.push( parsed );
						parsed = p();
					}

					if ( result.length < n ) {
						pos = originalPos;

						return null;
					}

					return result;
				};
			}

			// Helpers -- just make parserSyntax out of simpler JS builtin types

			function makeStringParser( s ) {
				var len = s.length;

				return function () {
					var result = null;

					if ( message.slice( pos, pos + len ) === s ) {
						result = s;
						pos += len;
					}

					return result;
				};
			}

			function makeRegexParser( regex ) {
				return function () {
					var matches = message.slice( pos ).match( regex );

					if ( matches === null ) {
						return null;
					}

					pos += matches[ 0 ].length;

					return matches[ 0 ];
				};
			}

			pipe = makeStringParser( '|' );
			colon = makeStringParser( ':' );
			backslash = makeStringParser( '\\' );
			anyCharacter = makeRegexParser( /^./ );
			dollar = makeStringParser( '$' );
			digits = makeRegexParser( /^\d+/ );
			regularLiteral = makeRegexParser( /^[^{}[\]$\\]/ );
			regularLiteralWithoutBar = makeRegexParser( /^[^{}[\]$\\|]/ );
			regularLiteralWithoutSpace = makeRegexParser( /^[^{}[\]$\s]/ );

			// There is a general pattern:
			// parse a thing;
			// if it worked, apply transform,
			// otherwise return null.
			// But using this as a combinator seems to cause problems
			// when combined with nOrMore().
			// May be some scoping issue.
			function transform( p, fn ) {
				return function () {
					var result = p();

					return result === null ? null : fn( result );
				};
			}

			// Used to define "literals" within template parameters. The pipe
			// character is the parameter delimeter, so by default
			// it is not a literal in the parameter
			function literalWithoutBar() {
				var result = nOrMore( 1, escapedOrLiteralWithoutBar )();

				return result === null ? null : result.join( '' );
			}

			function literal() {
				var result = nOrMore( 1, escapedOrRegularLiteral )();

				return result === null ? null : result.join( '' );
			}

			function escapedLiteral() {
				var result = sequence( [ backslash, anyCharacter ] );

				return result === null ? null : result[ 1 ];
			}

			choice( [ escapedLiteral, regularLiteralWithoutSpace ] );
			escapedOrLiteralWithoutBar = choice( [ escapedLiteral, regularLiteralWithoutBar ] );
			escapedOrRegularLiteral = choice( [ escapedLiteral, regularLiteral ] );

			function replacement() {
				var result = sequence( [ dollar, digits ] );

				if ( result === null ) {
					return null;
				}

				return [ 'REPLACE', parseInt( result[ 1 ], 10 ) - 1 ];
			}

			templateName = transform(
				// see $wgLegalTitleChars
				// not allowing : due to the need to catch "PLURAL:$1"
				makeRegexParser( /^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/ ),

				function ( result ) {
					return result.toString();
				}
			);

			function templateParam() {
				var expr,
					result = sequence( [ pipe, nOrMore( 0, paramExpression ) ] );

				if ( result === null ) {
					return null;
				}

				expr = result[ 1 ];

				// use a "CONCAT" operator if there are multiple nodes,
				// otherwise return the first node, raw.
				return expr.length > 1 ? [ 'CONCAT' ].concat( expr ) : expr[ 0 ];
			}

			function templateWithReplacement() {
				var result = sequence( [ templateName, colon, replacement ] );

				return result === null ? null : [ result[ 0 ], result[ 2 ] ];
			}

			function templateWithOutReplacement() {
				var result = sequence( [ templateName, colon, paramExpression ] );

				return result === null ? null : [ result[ 0 ], result[ 2 ] ];
			}

			templateContents = choice( [
				function () {
					var res = sequence( [
						// templates can have placeholders for dynamic
						// replacement eg: {{PLURAL:$1|one car|$1 cars}}
						// or no placeholders eg:
						// {{GRAMMAR:genitive|{{SITENAME}}}
						choice( [ templateWithReplacement, templateWithOutReplacement ] ),
						nOrMore( 0, templateParam )
					] );

					return res === null ? null : res[ 0 ].concat( res[ 1 ] );
				},
				function () {
					var res = sequence( [ templateName, nOrMore( 0, templateParam ) ] );

					if ( res === null ) {
						return null;
					}

					return [ res[ 0 ] ].concat( res[ 1 ] );
				}
			] );

			openTemplate = makeStringParser( '{{' );
			closeTemplate = makeStringParser( '}}' );

			function template() {
				var result = sequence( [ openTemplate, templateContents, closeTemplate ] );

				return result === null ? null : result[ 1 ];
			}

			expression = choice( [ template, replacement, literal ] );
			paramExpression = choice( [ template, replacement, literalWithoutBar ] );

			function start() {
				var result = nOrMore( 0, expression )();

				if ( result === null ) {
					return null;
				}

				return [ 'CONCAT' ].concat( result );
			}

			result = start();

			/*
			 * For success, the pos must have gotten to the end of the input
			 * and returned a non-null.
			 * n.b. This is part of language infrastructure, so we do not throw an
			 * internationalizable message.
			 */
			if ( result === null || pos !== message.length ) {
				throw new Error( 'Parse error at position ' + pos.toString() + ' in input: ' + message );
			}

			return result;
		}

	};

	$.extend( $.i18n.parser, new MessageParser() );
}( jQuery ) );

/***/ }),

/***/ 66563:
/*!***********************************************!*\
  !*** ./runestone/common/js/presenter_mode.js ***!
  \***********************************************/
/***/ (() => {

var codeExercises;
var presenterCssLink;
var presentModeInitialized = false;

function presentToggle() {
    if (!presentModeInitialized) {
        presentModeSetup();
        presentModeInitialized = true;
    }
    let bod = $("body");
    let presentClass = "present";
    let fullHeightClass = "full-height";
    let bottomClass = "bottom";
    if (bod.hasClass(presentClass)) {
        $(".section *")
            .not(
                "h1, .presentation-title, .btn-presenter, .runestone, .runestone *, .section, .pre, code"
            )
            .removeClass("hidden"); //show everything
        $("#completionButton").removeClass("hidden");
        bod.removeClass(presentClass);
        $("." + fullHeightClass).removeClass(fullHeightClass);
        $("." + bottomClass).removeClass(bottomClass);
        localStorage.setItem("presentMode", "text");
        codeExercises.removeClass("hidden");
        presenterCssLink.disabled = true; // disable present_mode.css
    } else {
        $(".section *")
            .not(
                "h1, .presentation-title, .btn-presenter, .runestone, .runestone *, .section, .pre, code"
            )
            .addClass("hidden"); // hide extraneous stuff
        $("#completionButton").addClass("hidden");
        bod.addClass(presentClass);
        bod.addClass(fullHeightClass);
        $("html").addClass(fullHeightClass);
        $(".section .runestone").addClass(fullHeightClass);
        $(".ac-caption").addClass(bottomClass);
        localStorage.setItem("presentMode", presentClass);
        loadPresenterCss(); // present_mode.css should only apply when in presenter mode.
        activateExercise();
    }
}

function loadPresenterCss() {
    presenterCssLink = document.createElement("link");
    presenterCssLink.type = "text/css";
    presenterCssLink.href = "../_static/presenter_mode.css";
    presenterCssLink.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(presenterCssLink);
}

function presentModeSetup() {
    // moved this out of configure
    let dataComponent = $("[data-childcomponent]");

    // this still leaves some things semi-messed up when you exit presenter mode.
    // but instructors will probably just learn to refresh the page.
    dataComponent.addClass("runestone");
    dataComponent.parent().closest("div").not(".section").addClass("runestone");
    dataComponent.parent().closest("div").css("max-width", "none");

    dataComponent.each(function (index) {
        let me = $(this);
        $(this)
            .find(".ac_code_div, .ac_output")
            .wrapAll("<div class='ac-block' style='width: 100%;'></div>");
    });

    codelensListener(500);
    $(".section img").wrap('<div class="runestone">');
    codeExercises = $(".runestone").not(".runestone .runestone");
    // codeExercises.each(function(){
    $("h1").before(
        "<div class='presentation-title'> \
        <button class='prev-exercise btn-presenter btn-grey-outline' onclick='prevExercise()'>Back</button> \
        <button class='next-exercise btn-presenter btn-grey-solid' onclick='nextExercise()'>Next</button> \
      </div>"
    );
}
function getActiveExercise() {
    return (active = codeExercises.filter(".active"));
}

function activateExercise(index) {
    if (typeof index == "undefined") {
        index = 0;
    }

    let active = getActiveExercise();

    if (codeExercises.length) {
        active.removeClass("active");
        active = $(codeExercises[index]).addClass("active");
        active.removeClass("hidden");
        codeExercises.not(codeExercises.filter(".active")).addClass("hidden");
    }
}

function nextExercise() {
    let active = getActiveExercise();
    let nextIndex = codeExercises.index(active) + 1;
    if (nextIndex < codeExercises.length) {
        activateExercise(nextIndex);
    }
}

function prevExercise() {
    let active = getActiveExercise();
    let prevIndex = codeExercises.index(active) - 1;
    if (prevIndex >= 0) {
        activateExercise(prevIndex);
    }
}

function configure() {
    let rightNav = $(".navbar-right");
    rightNav.prepend(
        "<li class='dropdown view-toggle'> \
      <label>View: \
        <select class='mode-select'> \
          <option value='text'>Textbook</option> \
          <option value='present'>Code Presenter</option> \
        </select> \
      </label> \
    </li>"
    );

    let modeSelect = $(".mode-select").change(presentToggle);
}

function codelensListener(duration) {
    // $(".ExecutionVisualizer").length ? configureCodelens() : setTimeout(codelensListener, duration);
    // configureCodelens();
}

function configureCodelens() {
    let acCodeTitle = document.createElement("h4");
    acCodeTitle.textContent = "Active Code Window";
    let acCode = $(".ac_code_div").removeClass("col-md-12");
    $(".ac_code_div").addClass("col-md-6");
    acCode.prepend(acCodeTitle);

    acOutTitle = document.createElement("h4");
    acOutTitle.textContent = "Output Window";
    let acOut = $(".ac_output").addClass("col-md-6");
    $(".ac_output").prepend(acOutTitle);

    let sketchpadTitle = document.createElement("h4");
    sketchpadTitle.textContent = "Sketchpad";
    let sketchpad = document.createElement("span");
    $(sketchpad).addClass("sketchpad");
    let sketchpadContainer = document.createElement("div");
    $(sketchpadContainer).addClass("sketchpad-container");
    sketchpadContainer.appendChild(sketchpadTitle);
    sketchpadContainer.appendChild(sketchpad);
    //$('.ac_output').append(sketchpadContainer);

    let visualizers = $(".ExecutionVisualizer");

    console.log("Econtainer: ", this.eContainer);

    $("[data-childcomponent]").on("click", "button.row-mode", function () {
        $(this).closest("[data-childcomponent]").removeClass("card-mode");
        $(this).closest("[data-childcomponent]").addClass("row-mode");
        $(this).next(".card-mode").removeClass("active-layout");
        $(this).addClass("active-layout");
    });

    $("[data-childcomponent]").on("click", "button.card-mode", function () {
        $(this).closest("[data-childcomponent]").removeClass("row-mode");
        $(this).closest("[data-childcomponent]").addClass("card-mode");
        $(this).prev(".row-mode").removeClass("active-layout");
        $(this).addClass("active-layout");
    });

    $("[data-childcomponent] .ac_section").each(function () {
        $(this).prepend(
            '<div class="presentation-options"><button class="row-mode layout-btn"><img src="../_images/row-btn-content.png" alt="Rows"></button><button class="card-mode layout-btn"><img src="../_images/card-btn-content.png" alt="Card"></button></div>'
        );
    });

    visualizers.each(function (index) {
        let me = $(this);
        let col1 = me.find("#vizLayoutTdFirst");
        let col2 = me.find("#vizLayoutTdSecond");
        let dataVis = me.find("#dataViz");
        let stackHeapTable = me.find("#stackHeapTable");
        let output = me.find("#progOutputs");
        output.css("display", "block");
        me.parent().prepend(
            "<div class='presentation-title'><div class='title-text'> Example " +
                (Number(index) + 1) +
                "</div></div>"
        );
    });

    acCode.each(function () {
        let section = $(this).closest(".ac-block").parent();
        console.log(section, section.length);
        section.append(sketchpadContainer);
    });

    $("button.card-mode").click();

    let modeSelect = $(".mode-select");
    let mode = localStorage.getItem("presentMode");
    if (mode == "present") {
        modeSelect.val("present");
        modeSelect.change();
    }
}

//$(document).ready(configure);
$(document).bind("runestone:login-complete", function () {
    // if user is instructor, enable presenter mode
    if (eBookConfig.isInstructor) {
        configure();
    }
});


/***/ }),

/***/ 75106:
/*!**************************************!*\
  !*** ./runestone/common/js/theme.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSwitch": () => (/* binding */ getSwitch),
/* harmony export */   "switchTheme": () => (/* binding */ switchTheme)
/* harmony export */ });
function getSwitch() {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }
}

function switchTheme() {

	var checkBox = document.getElementById("checkbox");
    if (checkBox.checked == true) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }
}


/***/ }),

/***/ 70114:
/*!************************************************!*\
  !*** ./runestone/common/js/user-highlights.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_user_highlights_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/user-highlights.css */ 97286);
/*global variable declarations*/






function getCompletions() {
    // Get the completion status
    if (
        window.location.href.match(
            /(index.html|toctree.html|genindex.html|navhelp.html|toc.html|assignments.html|Exercises.html)/
        )
    ) {
        return;
    }

    var currentPathname = window.location.pathname;
    if (currentPathname.indexOf("?") !== -1) {
        currentPathname = currentPathname.substring(
            0,
            currentPathname.lastIndexOf("?")
        );
    }
    var data = { lastPageUrl: currentPathname };
    jQuery
        .ajax({
            url: eBookConfig.ajaxURL + "getCompletionStatus",
            data: data,
            async: false,
        })
        .done(function (data) {
            if (data != "None") {
                var completionData = $.parseJSON(data);
                var completionClass, completionMsg;
                if (completionData[0].completionStatus == 1) {
                    completionClass = "buttonConfirmCompletion";
                    completionMsg =
                        "<i class='glyphicon glyphicon-ok'></i> Completed. Well Done!";
                } else {
                    completionClass = "buttonAskCompletion";
                    completionMsg = "Mark as Completed";
                }
                $("#main-content").append(
                    '<div style="text-align:center"><button class="btn btn-lg ' +
                        completionClass +
                        '" id="completionButton">' +
                        completionMsg +
                        "</button></div>"
                );
            }
        });
}

function showLastPositionBanner() {
    var lastPositionVal = $.getUrlVar("lastPosition");
    if (typeof lastPositionVal !== "undefined") {
        $("body").append(
            '<img src="../_static/last-point.png" style="position:absolute; padding-top:55px; left: 10px; top: ' +
                parseInt(lastPositionVal) +
                'px;"/>'
        );
        $("html, body").animate({ scrollTop: parseInt(lastPositionVal) }, 1000);
    }
}

function addNavigationAndCompletionButtons() {
    if (
        window.location.href.match(
            /(index.html|genindex.html|navhelp.html|toc.html|assignments.html|Exercises.html|toctree.html)/
        )
    ) {
        return;
    }
    var navLinkBgRightHiddenPosition = -$("#navLinkBgRight").outerWidth() - 5;
    var navLinkBgRightHalfOpen;
    var navLinkBgRightFullOpen = 0;

    if ($("#completionButton").hasClass("buttonAskCompletion")) {
        navLinkBgRightHalfOpen = navLinkBgRightHiddenPosition + 70;
    } else if ($("#completionButton").hasClass("buttonConfirmCompletion")) {
        navLinkBgRightHalfOpen = 0;
    }
    var relationsNextIconInitialPosition = $("#relations-next").css("right");
    var relationsNextIconNewPosition = -(navLinkBgRightHiddenPosition + 35);

    $("#navLinkBgRight").css("right", navLinkBgRightHiddenPosition).show();
    var navBgShown = false;
    $(window).scroll(function () {
        if (
            $(window).scrollTop() + $(window).height() ==
            $(document).height()
        ) {
            $("#navLinkBgRight").animate(
                { right: navLinkBgRightHalfOpen },
                200
            );
            $("#navLinkBgLeft").animate({ left: "0px" }, 200);
            if ($("#completionButton").hasClass("buttonConfirmCompletion")) {
                $("#relations-next").animate(
                    { right: relationsNextIconNewPosition },
                    200
                );
            }
            navBgShown = true;
        } else if (navBgShown) {
            $("#navLinkBgRight").animate(
                { right: navLinkBgRightHiddenPosition },
                200
            );
            $("#navLinkBgLeft").animate({ left: "-65px" }, 200);
            $("#relations-next").animate({
                right: relationsNextIconInitialPosition,
            });
            navBgShown = false;
        }
    });

    var completionFlag = 0;
    if ($("#completionButton").hasClass("buttonAskCompletion")) {
        completionFlag = 0;
    } else {
        completionFlag = 1;
    }
    $("#completionButton").on("click", function () {
        if ($(this).hasClass("buttonAskCompletion")) {
            $(this)
                .removeClass("buttonAskCompletion")
                .addClass("buttonConfirmCompletion")
                .html(
                    "<i class='glyphicon glyphicon-ok'></i> Completed. Well Done!"
                );
            $("#navLinkBgRight").animate({ right: navLinkBgRightFullOpen });
            $("#relations-next").animate({
                right: relationsNextIconNewPosition,
            });
            navLinkBgRightHalfOpen = 0;
            completionFlag = 1;
        } else if ($(this).hasClass("buttonConfirmCompletion")) {
            $(this)
                .removeClass("buttonConfirmCompletion")
                .addClass("buttonAskCompletion")
                .html("Mark as Completed");
            navLinkBgRightHalfOpen = navLinkBgRightHiddenPosition + 70;
            $("#navLinkBgRight").animate({ right: navLinkBgRightHalfOpen });
            $("#relations-next").animate({
                right: relationsNextIconInitialPosition,
            });
            completionFlag = 0;
        }
        processPageState(completionFlag);
    });

    $(window).on("beforeunload", function (e) {
        if (completionFlag == 0) {
            processPageState(completionFlag);
        }
    });
}

function decorateTableOfContents() {
    if (
        window.location.href.toLowerCase().indexOf("toc.html") != -1 ||
        window.location.href.toLowerCase().indexOf("index.html") != -1
    ) {
        jQuery.get(eBookConfig.ajaxURL + "getAllCompletionStatus", function (
            data
        ) {
            var subChapterList;
            if (data != "None") {
                subChapterList = $.parseJSON(data);

                var allSubChapterURLs = $("#main-content div li a");
                $.each(subChapterList, function (index, item) {
                    for (var s = 0; s < allSubChapterURLs.length; s++) {
                        if (
                            allSubChapterURLs[s].href.indexOf(
                                item.chapterName + "/" + item.subChapterName
                            ) != -1
                        ) {
                            if (item.completionStatus == 1) {
                                $(allSubChapterURLs[s].parentElement)
                                    .addClass("completed")
                                    .append(
                                        '<span class="infoTextCompleted">- Completed this topic on ' +
                                            item.endDate +
                                            "</span>"
                                    )
                                    .children()
                                    .first()
                                    .hover(
                                        function () {
                                            $(this)
                                                .next(".infoTextCompleted")
                                                .show();
                                        },
                                        function () {
                                            $(this)
                                                .next(".infoTextCompleted")
                                                .hide();
                                        }
                                    );
                            } else if (item.completionStatus == 0) {
                                $(allSubChapterURLs[s].parentElement)
                                    .addClass("active")
                                    .append(
                                        '<span class="infoTextActive">Last read this topic on ' +
                                            item.endDate +
                                            "</span>"
                                    )
                                    .children()
                                    .first()
                                    .hover(
                                        function () {
                                            $(this)
                                                .next(".infoTextActive")
                                                .show();
                                        },
                                        function () {
                                            $(this)
                                                .next(".infoTextActive")
                                                .hide();
                                        }
                                    );
                            }
                        }
                    }
                });
            }
        });
        var data = { course: eBookConfig.course };
        jQuery.get(eBookConfig.ajaxURL + "getlastpage", data, function (data) {
            var lastPageData;
            if (data != "None") {
                lastPageData = $.parseJSON(data);
                if (lastPageData[0].lastPageChapter != null) {
                    $("#continue-reading")
                        .show()
                        .html(
                            '<div id="jump-to-chapter" class="alert alert-info" ><strong>You were Last Reading:</strong> ' +
                                lastPageData[0].lastPageChapter +
                                (lastPageData[0].lastPageSubchapter
                                    ? " &gt; " +
                                      lastPageData[0].lastPageSubchapter
                                    : "") +
                                ' <a href="' +
                                lastPageData[0].lastPageUrl +
                                "?lastPosition=" +
                                lastPageData[0].lastPageScrollLocation +
                                '">Continue Reading</a></div>'
                        );
                }
            }
        });
    }
}

function enableCompletions() {
    getCompletions();
    showLastPositionBanner();
    addNavigationAndCompletionButtons();
    decorateTableOfContents();
}

// call enable user highlights after login
$(document).bind("runestone:login", enableCompletions);

function processPageState(completionFlag) {
    /*Log last page visited*/
    var currentPathname = window.location.pathname;
    if (currentPathname.indexOf("?") !== -1) {
        currentPathname = currentPathname.substring(
            0,
            currentPathname.lastIndexOf("?")
        );
    }
    var data = {
        lastPageUrl: currentPathname,
        lastPageScrollLocation: $(window).scrollTop(),
        completionFlag: completionFlag,
        course: eBookConfig.course,
    };
    $(document).ajaxError(function (e, jqhxr, settings, exception) {
        console.log("Request Failed for " + settings.url);
        console.log(e);
    });
    jQuery.ajax({
        url: eBookConfig.ajaxURL + "updatelastpage",
        data: data,
        async: true,
    });
}

$.extend({
    getUrlVars: function () {
        var vars = [],
            hash;
        var hashes = window.location.search
            .slice(window.location.search.indexOf("?") + 1)
            .split("&");
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split("=");
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function (name) {
        return $.getUrlVars()[name];
    },
});


/***/ }),

/***/ 11968:
/*!*****************************************************************************************************************!*\
  !*** ./runestone/common/project_template/_templates/plugin_layouts/sphinx_bootstrap/static/bootstrap-sphinx.js ***!
  \*****************************************************************************************************************/
/***/ (() => {

(function ($) {
  /**
   * Patch TOC list.
   *
   * Will mutate the underlying span to have a correct ul for nav.
   *
   * @param $span: Span containing nested UL's to mutate.
   * @param minLevel: Starting level for nested lists. (1: global, 2: local).
   */
  var patchToc = function ($ul, minLevel) {
    var findA,
      patchTables,
      $localLi;

    // Find all a "internal" tags, traversing recursively.
    findA = function ($elem, level) {
      level = level || 0;
      var $items = $elem.find("> li > a.internal, > ul, > li > ul");

      // Iterate everything in order.
      $items.each(function (index, item) {
        var $item = $(item),
          tag = item.tagName.toLowerCase(),
          $childrenLi = $item.children('li'),
          $parentLi = $($item.parent('li'), $item.parent().parent('li'));

        // Add dropdowns if more children and above minimum level.
        if (tag === 'ul' && level >= minLevel && $childrenLi.length > 0) {
          $parentLi
            .addClass('dropdown-submenu')
            .children('a').first().attr('tabindex', -1);

          $item.addClass('dropdown-menu');
        }

        findA($item, level + 1);
      });
    };

    findA($ul);
  };

  /**
   * Patch all tables to remove ``docutils`` class and add Bootstrap base
   * ``table`` class.
   */
  patchTables = function () {
    $("table.docutils")
      .removeClass("docutils")
      .addClass("table")
      .attr("border", 0);
  };

  $(document).ready(function () {

    /*
     * Scroll the window to avoid the topnav bar
     * https://github.com/twitter/bootstrap/issues/1768
     */
    if ($("#navbar.navbar-fixed-top").length > 0) {
      var navHeight = $("#navbar").height(),
        shiftWindow = function() { scrollBy(0, -navHeight - 10); };

      if (location.hash) {
        shiftWindow();
      }

      window.addEventListener("hashchange", shiftWindow);
    }

    // Add styling, structure to TOC's.
    $(".dropdown-menu").each(function () {
      $(this).find("ul").each(function (index, item){
        var $item = $(item);
        $item.addClass('unstyled');
      });
    });

    // Global TOC.
    if ($("ul.globaltoc li").length) {
      patchToc($("ul.globaltoc"), 1);
    } else {
      // Remove Global TOC.
      $(".globaltoc-container").remove();
    }

    // Local TOC.
    patchToc($("ul.localtoc"), 2);

    // Mutate sub-lists (for bs-2.3.0).
    $(".dropdown-menu ul").not(".dropdown-menu").each(function () {
      var $ul = $(this),
        $parent = $ul.parent(),
        tag = $parent[0].tagName.toLowerCase(),
        $kids = $ul.children().detach();

      // Replace list with items if submenu header.
      if (tag === "ul") {
        $ul.replaceWith($kids);
      } else if (tag === "li") {
        // Insert into previous list.
        $parent.after($kids);
        $ul.remove();
      }
    });

    // Add divider in page TOC.
    $localLi = $("ul.localtoc li");
    if ($localLi.length > 2) {
      $localLi.first().after('<li class="divider"></li>');
    }

    // Enable dropdown.
    $('.dropdown-toggle').dropdown();

    // Patch tables.
    patchTables();

    // Add Note, Warning styles.
    $('div.note').addClass('alert').addClass('alert-info');
    $('div.warning').addClass('alert').addClass('alert-warning');

    // Inline code styles to Bootstrap style.
    $('tt.docutils.literal').not(".xref").each(function (i, e) {
      // ignore references
      if (!$(e).parent().hasClass("reference")) {
        $(e).replaceWith(function () {
          return $("<code />").text($(this).text());
        });
      }});
  });
}(window.jQuery));


/***/ }),

/***/ 36350:
/*!**************************!*\
  !*** ./webpack.index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "runestone_auto_import": () => (/* binding */ runestone_auto_import),
/* harmony export */   "runestone_import": () => (/* binding */ runestone_import)
/* harmony export */ });
/* harmony import */ var jquery_ui_jquery_ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-ui/jquery-ui.js */ 86301);
/* harmony import */ var jquery_ui_jquery_ui_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_jquery_ui_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_ui_themes_base_jquery_ui_all_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-ui/themes/base/jquery.ui.all.css */ 46286);
/* harmony import */ var _runestone_common_js_jquery_idle_timer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./runestone/common/js/jquery.idle-timer.js */ 26886);
/* harmony import */ var _runestone_common_js_jquery_idle_timer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_js_jquery_idle_timer_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./runestone/common/js/jquery_i18n/jquery.i18n.js */ 99283);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_js_jquery_i18n_jquery_i18n_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_emitter_bidi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./runestone/common/js/jquery_i18n/jquery.i18n.emitter.bidi.js */ 43793);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_emitter_bidi_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_js_jquery_i18n_jquery_i18n_emitter_bidi_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_emitter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./runestone/common/js/jquery_i18n/jquery.i18n.emitter.js */ 30423);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_emitter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_js_jquery_i18n_jquery_i18n_emitter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_fallbacks_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./runestone/common/js/jquery_i18n/jquery.i18n.fallbacks.js */ 9001);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_fallbacks_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_js_jquery_i18n_jquery_i18n_fallbacks_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_messagestore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./runestone/common/js/jquery_i18n/jquery.i18n.messagestore.js */ 34517);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_messagestore_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_js_jquery_i18n_jquery_i18n_messagestore_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_parser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./runestone/common/js/jquery_i18n/jquery.i18n.parser.js */ 25252);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_parser_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_js_jquery_i18n_jquery_i18n_parser_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_language_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./runestone/common/js/jquery_i18n/jquery.i18n.language.js */ 64793);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_language_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_js_jquery_i18n_jquery_i18n_language_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.js */ 43734);
/* harmony import */ var bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ 72814);
/* harmony import */ var _runestone_common_project_template_templates_plugin_layouts_sphinx_bootstrap_static_bootstrap_sphinx_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./runestone/common/project_template/_templates/plugin_layouts/sphinx_bootstrap/static/bootstrap-sphinx.js */ 11968);
/* harmony import */ var _runestone_common_project_template_templates_plugin_layouts_sphinx_bootstrap_static_bootstrap_sphinx_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_project_template_templates_plugin_layouts_sphinx_bootstrap_static_bootstrap_sphinx_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _runestone_common_css_runestone_custom_sphinx_bootstrap_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./runestone/common/css/runestone-custom-sphinx-bootstrap.css */ 55284);
/* harmony import */ var _runestone_common_js_bookfuncs_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./runestone/common/js/bookfuncs.js */ 21294);
/* harmony import */ var _runestone_common_js_user_highlights_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./runestone/common/js/user-highlights.js */ 70114);
/* harmony import */ var _runestone_matrixeq_css_matrixeq_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./runestone/matrixeq/css/matrixeq.css */ 34044);
/* harmony import */ var _runestone_webgldemo_css_webglinteractive_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./runestone/webgldemo/css/webglinteractive.css */ 36310);
/* harmony import */ var _runestone_common_js_theme_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./runestone/common/js/theme.js */ 75106);
/* harmony import */ var _runestone_common_js_presenter_mode_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./runestone/common/js/presenter_mode.js */ 66563);
/* harmony import */ var _runestone_common_js_presenter_mode_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_js_presenter_mode_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _runestone_common_css_presenter_mode_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./runestone/common/css/presenter_mode.css */ 60976);
// ***********************************************************************************
// |docname| - A framework allowing a Runestone component to load only the JS it needs
// ***********************************************************************************
// The JavaScript required by all Runestone components is quite large and results in slow page loads. This approach enables a Runestone component to load only the JavaScript it needs, rather than loading JavaScript for all the components regardless of which are actually used.
//
// To accomplish this, webpack's split-chunks ability analyzes all JS, starting from this file. The dynamic imports below are transformed by webpack into the dynamic fetches of just the JS required by each file and all its dependencies. (If using static imports, webpack will assume that all files are already statically loaded via script tags, defeating the purpose of this framework.)
//
// However, this approach leads to complexity:
//
// -    The ``data-component`` attribute of each component must be kept in sync with the keys of the ``module_map`` below.
// -    The values in the ``module_map`` must be kept in sync with the JavaScript files which implement each of the components.




// Static imports
// ==============
// These imports are (we assume) needed by all pages. However, it would be much better to load these in the modules that actually use them.
//
// These are static imports; code in `dynamically loaded components`_ deals with dynamic imports.
//
// jQuery-related imports.











// Bootstrap





// Misc



// These belong in dynamic imports for the obvious component; however, these components don't include a ``data-component`` attribute.



// These are only needed for the Runestone book, but not in a library mode (such as pretext). I would prefer to dynamically load them. However, these scripts are so small I haven't bothered to do so.





// Dynamically loaded components
// =============================
// This provides a list of modules that components can dynamically import. Webpack will create a list of imports for each based on its analysis.
const module_map = {
    // Wrap each import in a function, so that it won't occur until the function is called. While something cleaner would be nice, webpack can't analyze things like ``import(expression)``.
    //
    // The keys must match the value of each component's ``data-component`` attribute -- the ``runestone_import`` and ``runestone_auto_import`` functions assume this.
    activecode: () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_codemirror_mode_clike_clike_js-node_modules_codemirror_mode_javascript_j-ea0e03"), __webpack_require__.e("vendors-node_modules_codemirror_mode_htmlmixed_htmlmixed_js-node_modules_handsontable_es_inde-1af827"), __webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_codelens_js_pytutor-embed_bundle_js"), __webpack_require__.e("node_modules_moment_locale_sync_recursive_-runestone_activecode_js_acfactory_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/activecode/js/acfactory.js */ 86902)),
    // Always import the timed version of a component if available, since the timed components also define the component's factory and include the component as well. Note that ``acfactory`` imports the timed components of ActiveCode, so it follows this pattern.
    clickablearea: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_clickableArea_js_timedclickable_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/clickableArea/js/timedclickable.js */ 61581)),
    codelens: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_codelens_js_pytutor-embed_bundle_js"), __webpack_require__.e("runestone_codelens_js_codelens_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/codelens/js/codelens.js */ 12882)),
    datafile: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_datafile_js_datafile_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/datafile/js/datafile.js */ 55789)),
    dragndrop: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_dragndrop_js_timeddnd_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/dragndrop/js/timeddnd.js */ 47496)),
    fillintheblank: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_fitb_js_timedfitb_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/fitb/js/timedfitb.js */ 74309)),
    khanex: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_khanex_js_khanex_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/khanex/js/khanex.js */ 13435)),
    lp_build: () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_codemirror_mode_clike_clike_js-node_modules_codemirror_mode_javascript_j-ea0e03"), __webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_lp_js_lp_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/lp/js/lp.js */ 2013)),
    multiplechoice: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_mchoice_js_timedmc_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/mchoice/js/timedmc.js */ 95983)),
    parsons: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_parsons_js_timedparsons_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/parsons/js/timedparsons.js */ 79661)),
    poll: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_poll_js_poll_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/poll/js/poll.js */ 37350)),
    quizly: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_quizly_js_quizly_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/quizly/js/quizly.js */ 16207)),
    reveal: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_reveal_js_reveal_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/reveal/js/reveal.js */ 12632)),
    selectquestion: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_selectquestion_js_selectone_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/selectquestion/js/selectone.js */ 63931)),
    shortanswer: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_shortanswer_js_timed_shortanswer_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/shortanswer/js/timed_shortanswer.js */ 87483)),
    showeval: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_showeval_js_showEval_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/showeval/js/showEval.js */ 6224)),
    spreadsheet: () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_jexcel_dist_jexcel_js-node_modules_jexcel_dist_jexcel_css"), __webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_spreadsheet_js_spreadsheet_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/spreadsheet/js/spreadsheet.js */ 60611)),
    tabbedStuff: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_tabbedStuff_js_tabbedstuff_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/tabbedStuff/js/tabbedstuff.js */ 97887)),
    timedAssessment: () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_codemirror_mode_clike_clike_js-node_modules_codemirror_mode_javascript_j-ea0e03"), __webpack_require__.e("vendors-node_modules_codemirror_mode_htmlmixed_htmlmixed_js-node_modules_handsontable_es_inde-1af827"), __webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_codelens_js_pytutor-embed_bundle_js"), __webpack_require__.e("node_modules_moment_locale_sync_recursive_-runestone_activecode_js_acfactory_js"), __webpack_require__.e("runestone_parsons_js_timedparsons_js"), __webpack_require__.e("runestone_mchoice_js_timedmc_js"), __webpack_require__.e("runestone_dragndrop_js_timeddnd_js"), __webpack_require__.e("runestone_selectquestion_js_selectone_js"), __webpack_require__.e("runestone_clickableArea_js_timedclickable_js"), __webpack_require__.e("runestone_fitb_js_timedfitb_js"), __webpack_require__.e("runestone_shortanswer_js_timed_shortanswer_js"), __webpack_require__.e("runestone_timed_js_timed_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/timed/js/timed.js */ 58707)),
    wavedrom: () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_wavedrom_lib_process-all_js-node_modules_wavedrom_lib_wave-skin_js"), __webpack_require__.e("runestone_wavedrom_js_wavedrom_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/wavedrom/js/wavedrom.js */ 32405)),
    // TODO: since this isn't in a ``data-component``, need to trigger an import of this code manually.
    webwork: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_webwork_js_webwork_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/webwork/js/webwork.js */ 66142)),
    youtube: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_video_js_runestonevideo_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/video/js/runestonevideo.js */ 48657)),
}

// .. _dynamic import machinery:
//
// Dynamic import machinery
// ========================
// Fulfill a promise when the Runestone pre-login complete event occurs.
let pre_login_complete_promise = new Promise(resolve => $(document).bind("runestone:pre-login-complete", resolve));

// Provide a simple function to import the JS for all components on the page.
function runestone_auto_import() {
    // Create a set of ``data-component`` values, to avoid duplication.
    const s = new Set(
        // All Runestone components have a ``data-component`` attribute.
        $("[data-component]").map(
            // Extract the value of the data-component attribute.
            (index, element) => $(element).attr("data-component")
            // Switch from a jQuery object back to an array, passing that to the Set constructor.
        ).get()
    );

    // Load JS for each of the components found.
    const a = [...s].map(value =>
        // If there's no JS for this component, return an empty Promise.
        (module_map[value] || (() => Promise.resolve()))()
    );

    // Send the Runestone login complete event when all JS is loaded and the pre-login is also complete.
    Promise.all([pre_login_complete_promise, ...a]).then(() => $(document).trigger("runestone:login-complete"));
}

// Load component JS when the document is ready.
$(document).ready(runestone_auto_import);

// Provide a function to import one specific Runestone component.
// the import function inside module_map is async -- runestone_import
// should be awaited when necessary to ensure the import completes
async function runestone_import(component_name) {
    return module_map[component_name]();
}

async function popupScratchAC() {
    // load the activecode bundle
    await runestone_import("activecode");
    // scratchDiv will be defined if we have already created a scratch
    // activecode.  If its not defined then we need to get it ready to toggle
    if (!eBookConfig.scratchDiv) {
        window.ACFactory.createScratchActivecode();
        let divid = eBookConfig.scratchDiv
        window.edList[divid] = ACFactory.createActiveCode($(`#${divid}`)[0],
            eBookConfig.acDefaultLanguage);
        if (eBookConfig.isLoggedIn) {
            window.edList[divid].enableSaveLoad();
        }
    }
    window.ACFactory.toggleScratchActivecode();
}

// Set the directory containing this script as the `path <https://webpack.js.org/guides/public-path/#on-the-fly>`_ for all webpacked scripts.
const script_src = document.currentScript.src;
__webpack_require__.p = script_src.substring(0, script_src.lastIndexOf('/') + 1);


// Manual exports
// ==============
// Webpack's ``output.library`` setting doesn't seem to work with the split chunks plugin; do all exports manually through the ``window`` object instead.
const rc = {};
rc.runestone_import = runestone_import;
rc.runestone_auto_import = runestone_auto_import;
rc.getSwitch = _runestone_common_js_theme_js__WEBPACK_IMPORTED_MODULE_18__.getSwitch;
rc.switchTheme = _runestone_common_js_theme_js__WEBPACK_IMPORTED_MODULE_18__.switchTheme;
rc.popupScratchAC = popupScratchAC;
window.runestoneComponents = rc;


/***/ }),

/***/ 73609:
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = jQuery;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_js-node_modules_jquery-ui_jquery-ui_js-node_-e60694"], () => (__webpack_exec__(36350)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NvbW1vbi9jc3MvcHJlc2VudGVyX21vZGUuY3NzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY29tbW9uL2Nzcy9ydW5lc3RvbmUtY3VzdG9tLXNwaGlueC1ib290c3RyYXAuY3NzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY29tbW9uL2Nzcy91c2VyLWhpZ2hsaWdodHMuY3NzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvbWF0cml4ZXEvY3NzL21hdHJpeGVxLmNzcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3dlYmdsZGVtby9jc3Mvd2ViZ2xpbnRlcmFjdGl2ZS5jc3MiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vY3NzL3ByZXNlbnRlcl9tb2RlLmNzcz83YTg0Iiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY29tbW9uL2Nzcy9ydW5lc3RvbmUtY3VzdG9tLXNwaGlueC1ib290c3RyYXAuY3NzP2QzZTQiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vY3NzL3VzZXItaGlnaGxpZ2h0cy5jc3M/NWIzZCIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL21hdHJpeGVxL2Nzcy9tYXRyaXhlcS5jc3M/MDMxZCIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3dlYmdsZGVtby9jc3Mvd2ViZ2xpbnRlcmFjdGl2ZS5jc3M/MjUwZSIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NvbW1vbi9qcy9ib29rZnVuY3MuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vanMvanF1ZXJ5LmlkbGUtdGltZXIuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vanMvanF1ZXJ5X2kxOG4vanF1ZXJ5LmkxOG4uZW1pdHRlci5iaWRpLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY29tbW9uL2pzL2pxdWVyeV9pMThuL2pxdWVyeS5pMThuLmVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vanMvanF1ZXJ5X2kxOG4vanF1ZXJ5LmkxOG4uZmFsbGJhY2tzLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY29tbW9uL2pzL2pxdWVyeV9pMThuL2pxdWVyeS5pMThuLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY29tbW9uL2pzL2pxdWVyeV9pMThuL2pxdWVyeS5pMThuLmxhbmd1YWdlLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY29tbW9uL2pzL2pxdWVyeV9pMThuL2pxdWVyeS5pMThuLm1lc3NhZ2VzdG9yZS5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NvbW1vbi9qcy9qcXVlcnlfaTE4bi9qcXVlcnkuaTE4bi5wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vanMvcHJlc2VudGVyX21vZGUuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vanMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vanMvdXNlci1oaWdobGlnaHRzLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY29tbW9uL3Byb2plY3RfdGVtcGxhdGUvX3RlbXBsYXRlcy9wbHVnaW5fbGF5b3V0cy9zcGhpbnhfYm9vdHN0cmFwL3N0YXRpYy9ib290c3RyYXAtc3BoaW54LmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi93ZWJwYWNrLmluZGV4LmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxrREFBa0Qsb0JBQW9CLEtBQUsscUJBQXFCLHNCQUFzQixLQUFLLHNDQUFzQyxvQkFBb0IsS0FBSyx5RkFBeUYsdUJBQXVCLEtBQUssaUJBQWlCLHNCQUFzQixLQUFLLHFCQUFxQixzQkFBc0IsS0FBSyxnQkFBZ0IsMkJBQTJCLGtCQUFrQixLQUFLLHdCQUF3Qiw0QkFBNEIsS0FBSyx5Q0FBeUMsZ0JBQWdCLE9BQU8saURBQWlELHlCQUF5QixLQUFLLG9CQUFvQiwrQkFBK0IsS0FBSyx5QkFBeUIsa0JBQWtCLEtBQUssNEJBQTRCLG9DQUFvQyxLQUFLLGlGQUFpRixjQUFjLEtBQUssNkJBQTZCLG9CQUFvQixLQUFLLHNDQUFzQyxxQkFBcUIsS0FBSywwQ0FBMEMsa0JBQWtCLHNCQUFzQixLQUFLLHNCQUFzQix5QkFBeUIsS0FBSyxxQkFBcUIseUJBQXlCLEtBQUssd0JBQXdCLHFCQUFxQixLQUFLLDJHQUEyRyxvQkFBb0IsS0FBSywyQkFBMkIsY0FBYyxLQUFLLDJCQUEyQixjQUFjLEtBQUssNEJBQTRCLGNBQWMsS0FBSywyQkFBMkIsY0FBYyxLQUFLLHNCQUFzQiwrQkFBK0IscUJBQXFCLGlCQUFpQixLQUFLLG1CQUFtQiw0QkFBNEIsS0FBSywyQ0FBMkMseUJBQXlCLEtBQUssa0RBQWtELGtCQUFrQixLQUFLLG1DQUFtQyx1QkFBdUIsS0FBSyxrQkFBa0Isb0JBQW9CLHlCQUF5QixLQUFLLDRCQUE0QixxQkFBcUIsdUJBQXVCLEtBQUsscURBQXFELGtCQUFrQixxQkFBcUIsa0JBQWtCLHNCQUFzQixLQUFLLCtCQUErQix5QkFBeUIsS0FBSyx1QkFBdUIsc0JBQXNCLEtBQUssbUJBQW1CLHFCQUFxQixzQkFBc0IsS0FBSyx3QkFBd0Isb0NBQW9DLHVCQUF1QixLQUFLLG9CQUFvQixnQkFBZ0Isc0JBQXNCLHlCQUF5Qix1QkFBdUIsS0FBSyx5REFBeUQscUJBQXFCLGdCQUFnQixLQUFLLCtCQUErQixvQkFBb0IsMEJBQTBCLGdDQUFnQyxLQUFLLHFCQUFxQixnQ0FBZ0MsZ0NBQWdDLHlCQUF5QixzQkFBc0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsc0JBQXNCLCtCQUErQixLQUFLLHNEQUFzRCxnQ0FBZ0Msb0JBQW9CLEtBQUssOEJBQThCLHFCQUFxQix3QkFBd0Isc0JBQXNCLEtBQUsseUNBQXlDLGlCQUFpQixnQkFBZ0IsNEJBQTRCLHdCQUF3Qiw0QkFBNEIsS0FBSywwQkFBMEIsd0JBQXdCLEtBQUssMkJBQTJCLHVCQUF1QixpQkFBaUIsNEJBQTRCLHNCQUFzQiwwQkFBMEIsdUJBQXVCLEtBQUssb0JBQW9CLHdCQUF3Qiw2QkFBNkIseUJBQXlCLGtCQUFrQix3QkFBd0IscUJBQXFCLEtBQUssd0JBQXdCLDBCQUEwQix5QkFBeUIsdUJBQXVCLHFDQUFxQyxLQUFLLDJCQUEyQiw2QkFBNkIsa0JBQWtCLHdCQUF3QixLQUFLLHlCQUF5Qiw2QkFBNkIsbUJBQW1CLHVCQUF1QixLQUFLLG9DQUFvQyxzQkFBc0IsS0FBSyx5QkFBeUIsa0JBQWtCLEtBQUssc0JBQXNCLDBCQUEwQixRQUFRLDZGQUE2RixvQkFBb0IsS0FBSyxxQ0FBcUMseUJBQXlCLEtBQUssK0NBQStDLFdBQVcsRUFBRSwrQ0FBK0MsWUFBWSxFQUFFLHVCQUF1QixpQ0FBaUMsS0FBSyw4QkFBOEIsaUJBQWlCLEtBQUssY0FBYywwR0FBMEcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxRQUFRLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFB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TyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxPQUFPLE9BQU8sYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxRQUFRLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sU0FBUyxVQUFVLFlBQVksYUFBYSxPQUFPLFFBQVEsWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxPQUFPLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsYUFBYSxPQUFPLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxhQUFhLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxRQUFRLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFB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TUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLFlBQVksYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLHdCQUF3QixPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsNEJBQTRCLHFCQUFxQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNENBQTRDO0FBQ2hFO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7QUN6U0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9COzs7QUFHQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qjs7QUFFOUI7QUFDQSwrQkFBK0I7O0FBRS9COzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCOztBQUUxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQixnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLElBQUk7QUFDbkIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNyUUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOzs7Ozs7Ozs7OztBQzdGRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQixhQUFhLE1BQU07QUFDbkIsY0FBYyxNQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQixjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkIsYUFBYSxNQUFNO0FBQ25CLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNLGVBQWUsY0FBYyxHQUFHLE9BQU8sR0FBRyxPQUFPO0FBQ3BFLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsT0FBTywwQ0FBMEM7QUFDakQ7QUFDQSxhQUFhLE1BQU0sZUFBZSxPQUFPLEdBQUcsT0FBTyxHQUFHLE9BQU8sSUFBSSxPQUFPO0FBQ3hFLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDO0FBQ0EsYUFBYSxNQUFNLGNBQWMsMEJBQTBCLEdBQUcsWUFBWTtBQUMxRSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ3ZLRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDLGE7Ozs7Ozs7Ozs7QUN2U0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FB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QUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzTk07QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtB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TUFBTTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXVCOzs7QUFHdkI7QUFDQTtBQUNBLDBGQUEwRjtBQUMxRjtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFTO0FBQ3hCLGlCQUFpQix1RUFBVztBQUM1QjtBQUNBOzs7Ozs7Ozs7Ozs7QUM1SkEsd0IiLCJmaWxlIjoicnVuZXN0b25lLmJ1bmRsZS5qcz92PTJhMGI3OGVmYzUzYmZjOGRkYTQwIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaGlkZGVue1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnZpZXctdG9nZ2xle1xcclxcbiAgcGFkZGluZzogMC44NWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJlc2VudGF0aW9uLW1vZGUgLnNlY3Rpb24gKntcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcmVzZW50YXRpb24tbW9kZSAuc2VjdGlvbiAucnVuZXN0b25lLCAucHJlc2VudGF0aW9uLW1vZGUgLnNlY3Rpb24gLnJ1bmVzdG9uZSAqe1xcclxcbiAgZGlzcGxheTogaW5pdGlhbDtcXHJcXG59XFxyXFxuXFxyXFxuLnByZXNlbnR7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5mdWxsLWhlaWdodHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbiNjb2RlRGlzcGxheURpdntcXHJcXG4gIHdpZHRoOiBhdXRvIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LkV4ZWN1dGlvblZpc3VhbGl6ZXIgI2RhdGFWaXp7XFxyXFxuICBtYXJnaW46IDA7ICBcXHJcXG59XFxyXFxuXFxyXFxuZGl2LkV4ZWN1dGlvblZpc3VhbGl6ZXIgZGl2I3N0YWNrSGVhZGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3N0YWNrRnJhbWV7XFxyXFxuICBkaXNwbGF5OiBibG9jayFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbiNzdGFja0hlYXBUYWJsZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3N0YWNrSGVhcFRhYmxlIHRyIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuRXhlY3V0aW9uVmlzdWFsaXplciB0ZCNzdGFja190ZCwgZGl2LkV4ZWN1dGlvblZpc3VhbGl6ZXIgdGQjaGVhcF90ZCB7XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJlc2VudGF0aW9uLXRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcmVzZW50IC5wcmVzZW50YXRpb24tdGl0bGUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbmRpdi5FeGVjdXRpb25WaXN1YWxpemVyIGRpdiNoZWFwIHtcXHJcXG4gIGZsb2F0OiBub25lO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhY2tfdGQgdHIge1xcclxcbiAgZGlzcGxheTogdGFibGUtcm93O1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhcF90ZCB0ciB7XFxyXFxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XFxyXFxufVxcclxcblxcclxcbiNjb2RlRGlzcGxheURpdntcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAgYm5tIC0tIGNvbW1lbnQgdGhpcyBvdXQgZm9yIG5vdyBhcyBpdCBicmVha3MgY29kZWxlbnMgaW5kZW50YXRpb24gYW5kIGFycm93c1xcclxcbi52aXN1YWxpemVyIHRye1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuKi9cXHJcXG5cXHJcXG4jdml6TGF5b3V0VGR7XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jdml6TGF5b3V0VGRGaXJzdCB7XFxyXFxuICBmbGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4jdml6TGF5b3V0VGRTZWNvbmQge1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuI3ZpekxheW91dFRkVGhpcmQge1xcclxcbiAgZmxleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2dPdXRwdXRzIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrIWltcG9ydGFudDtcXHJcXG4gIG1hcmdpbjogMCAyMHB4O1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3B5U3Rkb3V0IHtcXHJcXG4gIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LkV4ZWN1dGlvblZpc3VhbGl6ZXIgI3B5U3Rkb3V0IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LkV4ZWN1dGlvblZpc3VhbGl6ZXIgdGFibGUudmlzdWFsaXplciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByZXNlbnQgI3ZpekxheW91dFRkVGhpcmR7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uYWMtYmxvY2t7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucm93LW1vZGUgLmFjLWJsb2Nre1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucm93LW1vZGUgLmFjX291dHB1dCwgLnJvdy1tb2RlIC5hY19jb2RlX2RpdntcXHJcXG4gIGZsb2F0OiBub25lO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIG1heC13aWR0aDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdy1tb2RlIC5hY19jb2RlX2RpdntcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjX3NlY3Rpb24+KiB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5hY19vdXRwdXR7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjX291dHB1dCBwcmUge1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZSFpbXBvcnRhbnQ7XFxyXFxuICBtaW4taGVpZ2h0OiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uQ29kZU1pcnJvcntcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIgLnNlY3Rpb24gPiBydW5lc3RvbmU6bm90KC5hY19zZWN0aW9uKXtcXHJcXG4gIG1heC13aWR0aDpub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJlc2VudGF0aW9uLW9wdGlvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ubGF5b3V0LWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJFRUQ1O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI0RGRDRCRTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIHBhZGRpbmc6IC4yNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAgLjVyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5sYXlvdXQtYnRuLmFjdGl2ZS1sYXlvdXQsIC5sYXlvdXQtYnRuOmZvY3VzIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM5Nzk3OTc7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2tldGNocGFkLWNvbnRhaW5lciB7XFxyXFxuICBtaW4td2lkdGg6IDUwJTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xcclxcbiAgcGFkZGluZzogMCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1tb2RlIC5za2V0Y2hwYWQtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAvKm1hcmdpbjogMCAtMTVweDsqL1xcclxcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdy1tb2RlIC5lcnJvciB7XFxyXFxuICBtYXJnaW46IDIwcHggMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtbW9kZSAuZXJyb3Ige1xcclxcbiAgbWFyZ2luOiAyOHB4IDAgMDtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAwIDE1cHg7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgbWFyZ2luLXRvcDogMjhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNrZXRjaHBhZCB7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5idG4tcHJlc2VudGVyIHtcXHJcXG4gIHBhZGRpbmc6IC41cmVtIDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgbWFyZ2luOiAxLjVyZW0gMCAxLjVyZW0gMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWdyZXktb3V0bGluZSB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgY29sb3I6IGdyZXk7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1ncmV5LXNvbGlkIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kOiBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LnByZXNlbnQgLmFjX3NlY3Rpb24+KiB7XFxyXFxuICBtYXgtd2lkdGg6IG5vbmU7XFxyXFxufVxcclxcbmJvZHkucHJlc2VudCBpZnJhbWUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkucHJlc2VudCB7XFxyXFxuICAvKiBmb250LXNpemU6IDIuMGVtOyAqL1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LnByZXNlbnQgI3JlbGF0aW9ucy1wcmV2LCBib2R5LnByZXNlbnQgI3JlbGF0aW9ucy1uZXh0LCBib2R5LnByZXNlbnQgLm5hdkxpbmtCZyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LnByZXNlbnQgLmJ0bi1wcmVzZW50ZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5ib2R5LnByZXNlbnQgLmJ0bi1wcmVzZW50ZXIucHJldi1leGVyY2lzZSB7IGxlZnQ6IDBweDsgfVxcclxcbmJvZHkucHJlc2VudCAuYnRuLXByZXNlbnRlci5uZXh0LWV4ZXJjaXNlIHsgcmlnaHQ6IDBweDsgfVxcclxcblxcclxcbi8qIC5jb2wtbWQtMTIge1xcclxcbiAgd2lkdGg6IDU4LjMzMzMzMzMzMzMzMzMzNiU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLW1vZGUgLmNvbC1tZC03IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufSAqL1xcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3J1bmVzdG9uZS9jb21tb24vY3NzL3ByZXNlbnRlcl9tb2RlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7O0NBSUM7O0FBRUQ7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0EsNENBQTRDLFNBQVMsRUFBRTtBQUN2RCw0Q0FBNEMsVUFBVSxFQUFFOztBQUV4RDs7Ozs7O0dBTUdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhpZGRlbntcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi52aWV3LXRvZ2dsZXtcXHJcXG4gIHBhZGRpbmc6IDAuODVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByZXNlbnRhdGlvbi1tb2RlIC5zZWN0aW9uICp7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJlc2VudGF0aW9uLW1vZGUgLnNlY3Rpb24gLnJ1bmVzdG9uZSwgLnByZXNlbnRhdGlvbi1tb2RlIC5zZWN0aW9uIC5ydW5lc3RvbmUgKntcXHJcXG4gIGRpc3BsYXk6IGluaXRpYWw7XFxyXFxufVxcclxcblxcclxcbi5wcmVzZW50e1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uZnVsbC1oZWlnaHR7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b217XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY29kZURpc3BsYXlEaXZ7XFxyXFxuICB3aWR0aDogYXV0byFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbmRpdi5FeGVjdXRpb25WaXN1YWxpemVyICNkYXRhVml6e1xcclxcbiAgbWFyZ2luOiAwOyAgXFxyXFxufVxcclxcblxcclxcbmRpdi5FeGVjdXRpb25WaXN1YWxpemVyIGRpdiNzdGFja0hlYWRlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzdGFja0ZyYW1le1xcclxcbiAgZGlzcGxheTogYmxvY2shaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhY2tIZWFwVGFibGUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNzdGFja0hlYXBUYWJsZSB0ciB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LkV4ZWN1dGlvblZpc3VhbGl6ZXIgdGQjc3RhY2tfdGQsIGRpdi5FeGVjdXRpb25WaXN1YWxpemVyIHRkI2hlYXBfdGQge1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnByZXNlbnRhdGlvbi10aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJlc2VudCAucHJlc2VudGF0aW9uLXRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuRXhlY3V0aW9uVmlzdWFsaXplciBkaXYjaGVhcCB7XFxyXFxuICBmbG9hdDogbm9uZTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuI3N0YWNrX3RkIHRyIHtcXHJcXG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcXHJcXG59XFxyXFxuXFxyXFxuI2hlYXBfdGQgdHIge1xcclxcbiAgZGlzcGxheTogdGFibGUtcm93O1xcclxcbn1cXHJcXG5cXHJcXG4jY29kZURpc3BsYXlEaXZ7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogIGJubSAtLSBjb21tZW50IHRoaXMgb3V0IGZvciBub3cgYXMgaXQgYnJlYWtzIGNvZGVsZW5zIGluZGVudGF0aW9uIGFuZCBhcnJvd3NcXHJcXG4udmlzdWFsaXplciB0cntcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbiovXFxyXFxuXFxyXFxuI3ZpekxheW91dFRke1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuI3ZpekxheW91dFRkRmlyc3Qge1xcclxcbiAgZmxleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuI3ZpekxheW91dFRkU2Vjb25kIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbiN2aXpMYXlvdXRUZFRoaXJkIHtcXHJcXG4gIGZsZXg6IDI7XFxyXFxufVxcclxcblxcclxcbiNwcm9nT3V0cHV0cyB7XFxyXFxuICBkaXNwbGF5OiBibG9jayFpbXBvcnRhbnQ7XFxyXFxuICBtYXJnaW46IDAgMjBweDtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxufVxcclxcblxcclxcbiNweVN0ZG91dCB7XFxyXFxuICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbmRpdi5FeGVjdXRpb25WaXN1YWxpemVyICNweVN0ZG91dCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxufVxcclxcblxcclxcbmRpdi5FeGVjdXRpb25WaXN1YWxpemVyIHRhYmxlLnZpc3VhbGl6ZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wcmVzZW50ICN2aXpMYXlvdXRUZFRoaXJke1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjLWJsb2Nre1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdy1tb2RlIC5hYy1ibG9ja3tcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdy1tb2RlIC5hY19vdXRwdXQsIC5yb3ctbW9kZSAuYWNfY29kZV9kaXZ7XFxyXFxuICBmbG9hdDogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBtYXgtd2lkdGg6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5yb3ctbW9kZSAuYWNfY29kZV9kaXZ7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5hY19zZWN0aW9uPioge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWNfb3V0cHV0e1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5hY19vdXRwdXQgcHJlIHtcXHJcXG4gIHZpc2liaWxpdHk6IHZpc2libGUhaW1wb3J0YW50O1xcclxcbiAgbWluLWhlaWdodDogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLkNvZGVNaXJyb3J7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBtaW4taGVpZ2h0OiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIC5zZWN0aW9uID4gcnVuZXN0b25lOm5vdCguYWNfc2VjdGlvbil7XFxyXFxuICBtYXgtd2lkdGg6bm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnByZXNlbnRhdGlvbi1vcHRpb25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmxheW91dC1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRUVENTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNERkQ0QkU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBwYWRkaW5nOiAuMjVyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIC41cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGF5b3V0LWJ0bi5hY3RpdmUtbGF5b3V0LCAubGF5b3V0LWJ0bjpmb2N1cyB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjOTc5Nzk3O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNrZXRjaHBhZC1jb250YWluZXIge1xcclxcbiAgbWluLXdpZHRoOiA1MCU7XFxyXFxuICBtaW4taGVpZ2h0OiAzMDBweDtcXHJcXG4gIHBhZGRpbmc6IDAgMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtbW9kZSAuc2tldGNocGFkLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgLyptYXJnaW46IDAgLTE1cHg7Ki9cXHJcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxufVxcclxcblxcclxcbi5yb3ctbW9kZSAuZXJyb3Ige1xcclxcbiAgbWFyZ2luOiAyMHB4IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLW1vZGUgLmVycm9yIHtcXHJcXG4gIG1hcmdpbjogMjhweCAwIDA7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogMCAxNXB4O1xcclxcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG4gIG1hcmdpbi10b3A6IDI4cHg7XFxyXFxufVxcclxcblxcclxcbi5za2V0Y2hwYWQge1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiAzMDBweDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXByZXNlbnRlciB7XFxyXFxuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIG1hcmdpbjogMS41cmVtIDAgMS41cmVtIDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1ncmV5LW91dGxpbmUge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXHJcXG4gIGNvbG9yOiBncmV5O1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5idG4tZ3JleS1zb2xpZCB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZDogZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keS5wcmVzZW50IC5hY19zZWN0aW9uPioge1xcclxcbiAgbWF4LXdpZHRoOiBub25lO1xcclxcbn1cXHJcXG5ib2R5LnByZXNlbnQgaWZyYW1lIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LnByZXNlbnQge1xcclxcbiAgLyogZm9udC1zaXplOiAyLjBlbTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuYm9keS5wcmVzZW50ICNyZWxhdGlvbnMtcHJldiwgYm9keS5wcmVzZW50ICNyZWxhdGlvbnMtbmV4dCwgYm9keS5wcmVzZW50IC5uYXZMaW5rQmcge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keS5wcmVzZW50IC5idG4tcHJlc2VudGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuYm9keS5wcmVzZW50IC5idG4tcHJlc2VudGVyLnByZXYtZXhlcmNpc2UgeyBsZWZ0OiAwcHg7IH1cXHJcXG5ib2R5LnByZXNlbnQgLmJ0bi1wcmVzZW50ZXIubmV4dC1leGVyY2lzZSB7IHJpZ2h0OiAwcHg7IH1cXHJcXG5cXHJcXG4vKiAuY29sLW1kLTEyIHtcXHJcXG4gIHdpZHRoOiA1OC4zMzMzMzMzMzMzMzMzMzYlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1tb2RlIC5jb2wtbWQtNyB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn0gKi9cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBWYXJpYWJsZXMgaG9sZGluZyB0aGVtZSBjb2xvcnMgKi9cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcXHJcXG4gICAgLS1vdXRlckJhY2tncm91bmQ6ICNlZWVlZWU7XFxyXFxuICAgIC0tbGlua3M6ICMwNjQ1YWQ7XFxyXFxuICAgIC0tYm9keUZvbnQ6ICMwMDAwMDA7XFxyXFxuICAgIC0tdG9vbHRpcDogI2ZmZmZmZjtcXHJcXG4gICAgLS1ncmF5VG9XaGl0ZTogIzMzMzMzMztcXHJcXG4gICAgLS1uYXZiYXI6ICNmOGY4Zjg7XFxyXFxuICAgIC0tbmF2YmFyRm9udDogIzcwNzA3MDtcXHJcXG4gICAgLS1uYXZiYXJGb250SG92ZXI6ICMwMDAwMDA7XFxyXFxuICAgIC0tYWxlcnRzOiAjZDllZGY3O1xcclxcbiAgICAtLWNvbXBsZXRpb25CdXR0b246ICNmZmFhMmI7XFxyXFxuICAgIC0tY29tcGxldGlvbkJ1dHRvbkhvdmVyOiAjZmY5ZjE5O1xcclxcbiAgICAtLWFkbW9uaXRpb246ICNmY2Y4ZTM7XFxyXFxuICAgIC0tYWRtb25pdGlvbkJvcmRlcjogI2ZiZWVkNTtcXHJcXG4gICAgLS1jb2RlQnV0dG9uczogIzQ3NDk0OTtcXHJcXG4gICAgLS1jb2RlQnV0dG9uc0JvcmRlcjogIzQ3NDk0OTtcXHJcXG4gICAgLS1kYW5nZXJBbGVydHM6ICNmMmRlZGU7XFxyXFxuICAgIC0tc3VjY2Vzc0FsZXJ0czogI2RmZjBkODtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtdGhlbWU9XFxcImRhcmtcXFwiXSB7XFxyXFxuICAgIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcXHJcXG4gICAgLS1vdXRlckJhY2tncm91bmQ6ICMzZDNkM2Q7XFxyXFxuICAgIC0tbGlua3M6ICMxMTY1ZjA7XFxyXFxuICAgIC0tYm9keUZvbnQ6ICNmZmZmZmY7XFxyXFxuICAgIC0tdG9vbHRpcDogIzAwMDAwMDtcXHJcXG4gICAgLS1ncmF5VG9XaGl0ZTogI2ZmZmZmZjtcXHJcXG4gICAgLS1uYXZiYXI6ICMzZDNkM2Q7XFxyXFxuICAgIC0tbmF2YmFyRm9udDogI2ZmZmZmZjtcXHJcXG4gICAgLS1uYXZiYXJGb250SG92ZXI6ICNkNmQ2ZDY7XFxyXFxuICAgIC0tYWxlcnRzOiAjNzE0MDgyO1xcclxcbiAgICAtLWNvbXBsZXRpb25CdXR0b246ICM2NTAwODc7XFxyXFxuICAgIC0tY29tcGxldGlvbkJ1dHRvbkhvdmVyOiAjNTYwMDczO1xcclxcbiAgICAtLWFkbW9uaXRpb246ICMzZDNkM2Q7XFxyXFxuICAgIC0tYWRtb25pdGlvbkJvcmRlcjogIzI2MjYyNjtcXHJcXG4gICAgLS1jb2RlQnV0dG9uczogIzJjMGFhNjtcXHJcXG4gICAgLS1jb2RlQnV0dG9uc0JvcmRlcjogI2ZmZmZmZjtcXHJcXG4gICAgLS1kYW5nZXJBbGVydHM6ICM4YzI2MjY7XFxyXFxuICAgIC0tc3VjY2Vzc0FsZXJ0czogIzIxNzMwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogY3VzdG9tIG1vZGlmaWNhdGlvbiBvZiBiYXNpYy5jc3MgZm9yIGNvbG9yLWNvbnRyYXN0IChBQSBjb21wbGlhbnQpICovXFxyXFxudGQubGluZW5vcyBwcmUge1xcclxcbiAgICBjb2xvcjogIzZiNmI2YjtcXHJcXG59XFxyXFxuXFxyXFxuLyogY3VzdG9tIG1vZGlmaWNhdGlvbiBvZiBwcmV0dGlmeS5jc3MgZm9yIGNvbG9yLWNvbnRyYXN0IChBQSBjb21wbGlhbnQpICovXFxyXFxuLnN0ciB7XFxyXFxuICAgIGNvbG9yOiAjMDA2YjAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjdXN0b20gbW9kaWZpY2F0aW9uIG9mIHBhcnNvbnMuY3NzIGZvciBjb2xvci1jb250cmFzdCAoQUEgY29tcGxpYW50KSAqL1xcclxcbi5wYXJzb25zIC5ibG9jayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxyXFxufVxcclxcblxcclxcbi8qIGN1c3RvbSBtb2RpZmljYXRpb24gb2YgcHlnbWVudHMuY3NzIGZvciBjb2xvci1jb250cmFzdCAoQUEgY29tcGxpYW50KSAqL1xcclxcbi5oaWdobGlnaHQgLmMxIHtcXHJcXG4gICAgY29sb3I6ICMzNzZBN0I7XFxyXFxufVxcclxcblxcclxcbi5oaWdobGlnaHQgLm5uIHtcXHJcXG4gICAgY29sb3I6ICMwRjZDOTU7XFxyXFxufVxcclxcblxcclxcbi5oaWdobGlnaHQgLmdwIHtcXHJcXG4gICAgY29sb3I6ICNBMTRDMDg7XFxyXFxufVxcclxcblxcclxcbi5oaWdobGlnaHQgLnNpIHtcXHJcXG4gICAgY29sb3I6ICMzQzc3M0Q7XFxyXFxufVxcclxcblxcclxcbi5oaWdobGlnaHQgLm5jIHtcXHJcXG4gICAgY29sb3I6ICMwQjcxOUQ7XFxyXFxufVxcclxcblxcclxcbi8qIGBTZWFyY2hgIGZ1bmN0aW9uYWxpdHkncyByZXN1bHQgY3VzdG9tIG1vZGlmaWNhdGlvbiBmb3IgY29sb3ItY29udHJhc3QgKEFBIGNvbXBsaWFudCkgKi9cXHJcXG51bC5zZWFyY2ggbGkgZGl2LmNvbnRleHQge1xcclxcbiAgICBjb2xvcjogIzZiNmI2YjtcXHJcXG59XFxyXFxuXFxyXFxuc3Bhbi5oaWdobGlnaHRlZCB7XFxyXFxuICAgIGNvbG9yOiAjNGQ0ZDRkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBY3RpdmVDb2RlIGd1dHRlciBjdXN0b20gbW9kaWZpY2F0aW9uIGZvciBjb2xvci1jb250cmFzdCAoQUEgY29tcGxpYW50KSAqL1xcclxcblxcclxcbi5Db2RlTWlycm9yLWxpbmVudW1iZXIge1xcclxcbiAgICBjb2xvcjogIzZiNmI2YjtcXHJcXG59XFxyXFxuXFxyXFxuLmFsZXJ0LXdhcm5pbmcge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZG1vbml0aW9uKTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hZG1vbml0aW9uQm9yZGVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUHl0aG9uIGNvZGUgb3V0cHV0IGN1c3RvbSBtb2RpZmljYXRpb24gZm9yIGNvbG9yLWNvbnRyYXN0IChBQSBjb21wbGlhbnQpICovXFxyXFxuZGl2LkV4ZWN1dGlvblZpc3VhbGl6ZXIgdGFibGUjcHlDb2RlT3V0cHV0IC5saW5lTm8ge1xcclxcbiAgICBjb2xvcjogIzZiNmI2YjtcXHJcXG59XFxyXFxuXFxyXFxuLyogUnVuZXN0b25lIGN1c3RvbSBtb2RpZmljYXRpb25zICovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGNvdW50ZXItcmVzZXQ6IHJzY29tcG9uZW50O1xcclxcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3V0ZXJCYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxucHJlIHtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5oNSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi8qIHRhYmxlLW9mLWNvbnRlbnRzIHJlbGF0ZWQgc3R5bGVzIGZvciBjb2xvci1jb250cmFzdCAoQUEgY29tcGxpYW50KSAqL1xcclxcbiN0YWJsZS1vZi1jb250ZW50cyBhIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbmtzKTtcXHJcXG59XFxyXFxuXFxyXFxuI3RhYmxlLW9mLWNvbnRlbnRzIGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlua3MpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuI3RhYmxlLW9mLWNvbnRlbnRzLnNlY3Rpb24ge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi8qIG5hdmJhci1icmFuZCBjb2xvciBjb250cmFzdCAoQUEgY29tcGxpYW50KSAqL1xcclxcbi5uYXZiYXItZGVmYXVsdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmJhcik7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdj5saSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1uYXZiYXJGb250KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2PmxpPmEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbmF2YmFyRm9udCk7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdj5saT5hOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLW5hdmJhckZvbnRIb3Zlcik7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWJyYW5kIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLW5hdmJhckZvbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBhY2tub3dsZWRnZW1lbnQgcmVsYXRlZCBzdHlsZXMgZm9yIGNvbG9yLWNvbnRyYXN0IChBQSBjb21wbGlhbnQpICovXFxyXFxuLnRvY3RyZWUtd3JhcHBlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvY3RyZWUtd3JhcHBlciBhIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbmtzKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvY3RyZWUtd3JhcHBlciBhOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbmtzKTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi8qIGluZGV4IGFuZCBzZWFyY2ggcmVsYXRlZCBzdHlsZXMgZm9yIGNvbG9yLWNvbnRyYXN0IChBQSBjb21wbGlhbnQpICovXFxyXFxuI2luZGV4LWFuZC1zZWFyY2guc2VjdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuI2luZGV4LWFuZC1zZWFyY2guc2VjdGlvbiBhIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbmtzKTtcXHJcXG59XFxyXFxuXFxyXFxuI2luZGV4LWFuZC1zZWFyY2guc2VjdGlvbiBhOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbmtzKTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi8qIGN1c3RvbSBzdHlsZSBmb3IgYGFgIHRhZyBmb3IgY29sb3ItY29udHJhc3QgKEFBIGNvbXBsaWFudCkgKi9cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbmtzKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbmF2YmFyIGFuZCBtZW51IHJlbGF0ZWQgc3R5bGVzICovXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuXFxyXFxuICAgIC8qIFJlbW92ZSB0b3AgcGFkZGluZyB3aGVuIHRvcCBuYXZiYXIgZ29lcyBjb2xsYXBzZWQgaW4gbmFycm93IHZpZXdwb3J0cyAqL1xcclxcbiAgICBib2R5IHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG8gYXV0byA1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdmJhci1maXhlZC10b3Age1xcclxcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG5cXHJcXG4gICAgLyogd2hlbiBuYXZiYXIgaXMgY29sbGFwc2VkIHdlIGRvbid0IHdhbnQgYW55IHZlcnRpY2FsIGRpdmlkZXJzIHRha2luZyB1cCBzcGFjZSAqL1xcclxcbiAgICAubmF2YmFyIC5kaXZpZGVyLXZlcnRpY2FsIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMCAzcHg7XFxyXFxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmMmYyZjI7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuZGl2LmNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuc2VjdGlvbiB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIgLnNlY3Rpb24+Kjpub3QoLnNlY3Rpb24pOm5vdCguYWNfc2VjdGlvbikge1xcclxcbiAgICBtYXgtd2lkdGg6IDUwMHB0O1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUaGlzIHJ1bGUgaXMgbWVhbnQgdG8gb3ZlcnJpZGUgdGhlIGJlaGF2aW9yIG9mIHRoZVxcclxcbiAgIHByZXZpb3VzIHJ1bGUgc2luY2UgaXQgaXMgbm90IHBvc3NpYmxlIHRvIGV4Y2x1ZGVcXHJcXG4gICBtb3JlIHRoYW4gb25lIHNlY3Rpb24gaW4gdGhlIG5vdCgpIHBhcnQgb2YgdGhlIHJ1bGVcXHJcXG4qL1xcclxcbi5jb250YWluZXIgLnNlY3Rpb24gZGl2LmZ1bGwtd2lkdGguY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgbWF4LXdpZHRoOiA5MCU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIgLnNlY3Rpb24+aW1nIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIgLnNlY3Rpb24gLnBhcnNvbnMsXFxyXFxuLmNvbnRhaW5lciAuc2VjdGlvbiAucGFyc29ucyAuc29ydGFibGUtY29kZS1jb250YWluZXIsXFxyXFxuLmNvbnRhaW5lciAuc2VjdGlvbiAuY2Rfc2VjdGlvbiB7XFxyXFxuICAgIG1heC13aWR0aDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcj4uY29udGFpbmVyIC5uYXZiYXItYnJhbmQge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcj4uY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YmFyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcj4uY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3V0ZXJCYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcj4uY29udGFpbmVyIHA+YSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW5rcyk7XFxyXFxufVxcclxcblxcclxcbi5icmFuZC1sb2dvIHtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwcHggNDBweCAhaW1wb3J0YW50O1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtbWVudSB7XFxyXFxuICAgIHdpZHRoOiAyMjBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDE1cHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZiLWxpa2Uge1xcclxcbiAgICBtYXJnaW4tdG9wOiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5mYl9pZnJhbWVfd2lkZ2V0IHNwYW4sXFxyXFxuLmZiX2lmcmFtZV93aWRnZXQgaWZyYW1lIHtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHdpZHRoOiA4MnB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi50d2l0dGVyLWZvbGxvdy1idXR0b24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2l0dGlwIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2l0dGlwLWJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC02cHg7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1tZW51PmxpPnNwYW4ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcGFkZGluZzogM3B4IDIwcHg7XFxyXFxuICAgIGNsZWFyOiBib3RoO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5VG9XaGl0ZSk7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1tZW51PmxpPmEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JheVRvV2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nZ2VkaW51c2VyIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi8qIGVuZCBuYXZiYXIgYW5kIG1lbnUgcmVsYXRlZCBzdHlsZXMgKi9cXHJcXG5cXHJcXG4uQ29kZU1pcnJvciB7XFxyXFxuICAgIG1hcmdpbjogMCAwIDFlbSAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBjbGVhcjogYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuLkNvZGVNaXJyb3Itc2Nyb2xsIHtcXHJcXG4gICAgLyogdGhpcyBhbGxvd3MgQ00gZWxlbWVudHMgdG8gYmUgcmVzaXplZCB0byAoYWxtb3N0KSBhbnlcXHJcXG4gICAgICogaGVpZ2h0IHdoaWxlIHN0aWxsIHJlbHlpbmcgb24gbWF4LWhlaWdodCAod2hpY2gga2VlcHNcXHJcXG4gICAgICogdGhlIENNIGVkaXRvcnMgdG8gbm8gbW9yZSB0aGFuIHRoZSBzaXplIG5lZWRlZFxcclxcbiAgICAgKiB1bmxlc3MgcmVzaXplZCkgKi9cXHJcXG4gICAgbWF4LWhlaWdodDogNjBlbTtcXHJcXG4gICAgbWluLXdpZHRoOiAzMGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWNfc2VjdGlvbiAuQ29kZU1pcnJvciBwcmUge1xcclxcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gICAgLW8tYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBmb250LWZhbWlseTogTW9uYWNvLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcXHJcXG4gICAgd29yZC13cmFwOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5idG4sXFxyXFxuYnRuLmJ0bi1zbSxcXHJcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXS5idG4uYnRuLXNtLFxcclxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLmJ0bi5idG4tc20ge1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi5kaXNhYmxlZCB7XFxyXFxuICAgIC8qIG5lZWRlZCBpbiBCb290c3RyYXAgMyB0byBhbGxvdyB0b29sdGlwcyBvbiBkaXNhYmxlZCBidXR0b25zICovXFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWRlZmF1bHQsXFxyXFxuLmJ0bi1kZWZhdWx0LmRpc2FibGVkLFxcclxcbi5idG4tZGVmYXVsdFtkaXNhYmxlZF0sXFxyXFxuLmJ0bi1kZWZhdWx0LmRpc2FibGVkOmhvdmVyLFxcclxcbi5idG4tZGVmYXVsdFtkaXNhYmxlZF06aG92ZXIge1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29kZUJ1dHRvbnMpO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcihjb2RlQnV0dG9uc0JvcmRlcik7XFxyXFxufVxcclxcblxcclxcbi5idG4tZGVmYXVsdDpob3ZlcixcXHJcXG4uYnRuLWRlZmF1bHQ6Zm9jdXMsXFxyXFxuLmJ0bi1kZWZhdWx0OmFjdGl2ZSxcXHJcXG4uYnRuLWRlZmF1bHQuYWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNhM2MzYztcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjMmUyZjJmO1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSxcXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50b29sdGlwIHtcXHJcXG4gICAgei1pbmRleDogMjAwMCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbHRpcC5pbiB7XFxyXFxuICAgIG9wYWNpdHk6IDAuODtcXHJcXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTgwKTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWxlcnQgZm9ybSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi8qIGRlZmF1bHQgYm9va3N0cmFwIGFsZXJ0IGNvbG9yIGlzIGhhcmQgdG8gcmVhZCAobG93IGNvbnRyYXN0KS4gKi9cXHJcXG4uYWxlcnQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JheVRvV2hpdGUpO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWxlcnQtaW5mbyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsZXJ0cyk7XFxyXFxufVxcclxcblxcclxcbi5hbGVydC1kYW5nZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXJBbGVydHMpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBvdmVycmlkZSB0aGUgY29sb3Igc3R5bGVzIGFwcGxpZWQgYnkgU2t1bHB0IHRvIHRoZSB1bml0dGVzdCByZXN1bHRzIGRpdnMgKi9cXHJcXG4udW5pdHRlc3QtcmVzdWx0cy5hbGVydC1kYW5nZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXJBbGVydHMpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi51bml0dGVzdC1yZXN1bHRzLmFsZXJ0LXN1Y2Nlc3Mge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWNjZXNzQWxlcnRzKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uYWxlcnQgbGFiZWwge1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUaGVzZSBhZG1vbml0aW9uIHN0eWxlcyBzdHlsZXMgYXJlIGNvcGllZCBmcm9tIHRoZSBCb290c3RyYXAgLmFsZXJ0IGNsYXNzZXMuXFxyXFxuIE1vc3Qgb2YgdGhlICFpbXBvcnRhbnQgZGVjbGFyYXRpb25zIGFyZSB0byBvdmVycmlkZSB0aGUgU3BoaW54IGJhc2ljLmNzcyBzdHlsZXMgKi9cXHJcXG4uYWRtb25pdGlvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDhweCAzNXB4IDhweCAxNHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkbW9uaXRpb24pO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmJlZWQ1O1xcclxcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLmFsZXJ0LWRhbmdlciAqL1xcclxcbi5hZG1vbml0aW9uLmNhdXRpb24ge1xcclxcbiAgICBjb2xvcjogI0EzM0YzRTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZGVkZTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZWVkM2Q3O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAuYWxlcnQtaW5mbyAqL1xcclxcbi5hZG1vbml0aW9uLnRpcCxcXHJcXG4uYWRtb25pdGlvbi5ub3RlIHtcXHJcXG4gICAgY29sb3I6ICMzMzM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWVkZjc7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2JjZThmMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZnJvbSB3ZWIycHkuY3NzICovXFxyXFxuZGl2LmZsYXNoIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgdG9wOiA1NXB4O1xcclxcbiAgICByaWdodDogNDVweDtcXHJcXG4gICAgb3BhY2l0eTogMC45NTtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMTBweCAxMHB4O1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjMjIyLCAjMDAwKTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgIzIyMiwgIzAwMCk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMjIyLCAjMDAwKTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvcCwgIzIyMiwgIzAwMCk7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgICB6LWluZGV4OiAyMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTdHlsZXMgZm9yIHRoZSBsb2dpbiwgcmVnaXN0cmF0aW9uLCBhbmQgSmFucmFpbiBmb3JtcyAqL1xcclxcbiN3ZWIycHlfdXNlcl9mb3JtIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3dlYjJweV91c2VyX2Zvcm0gZm9ybSB7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE1MHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4jd2ViMnB5X3VzZXJfZm9ybSB0ZCB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jd2ViMnB5X3VzZXJfZm9ybSB0ZC53MnBfZncge1xcclxcbiAgICB3aWR0aDogMjk5cHg7XFxyXFxufVxcclxcblxcclxcbiNhdXRoLWFjdGlvbnMge1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2lnbl9pbl90ZXh0IHRkIHtcXHJcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdsdWNpZGEgZ3JhbmRlJywgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEzcHg7XFxyXFxufVxcclxcblxcclxcbiNhdXRoX3VzZXJfcmVtZW1iZXIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRW5kIGxvZ2luLCByZWdpc3RyYXRpb24sIEphbnJhaW4gc3R5bGVzICovXFxyXFxuXFxyXFxuLyogZW5kLW9mLWNoYXB0ZXIgZXhlcmNpc2VzIHN0eWxlcyAqL1xcclxcbiNleGVyY2lzZXM+b2w+bGksXFxyXFxuI3Byb2dyYW1taW5nLWV4ZXJjaXNlcz5vbD5saSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbiNleGVyY2lzZXM+b2w+bGk6bnRoLWNoaWxkKGV2ZW4pLFxcclxcbiNwcm9ncmFtbWluZy1leGVyY2lzZXM+b2w+bGk6bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gICAgcGFkZGluZzogMS4yZW0gMS40ZW07XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmYWY3ZGY7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmYmVlZDU7XFxyXFxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFbmQgY2hhcHRlciBleGVyY2lzZXMgc3R5bGVzICovXFxyXFxuXFxyXFxuLyogTW9kYWwgZGlhbG9nIHN0eWxlcyAoc2NyYXRjaCBhY3RpdmVjb2RlLCBjb21wYXJlIG1lLCBldGMpICovXFxyXFxuLnNjcmF0Y2gtYWMtbW9kYWwge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGFyZS1tb2RhbCAucHJvZ3Jlc3Mge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGFyZS1tZS1wcm9ncmVzcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGFyZS1tZS1wcm9ncmVzcyAucHJvZ3Jlc3MtYmFyLFxcclxcbi51bml0dGVzdC1yZXN1bHRzLXByb2dyZXNzIC5wcm9ncmVzcy1iYXIge1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4udW5pdHRlc3QtcmVzdWx0cy1wcm9ncmVzcyB7XFxyXFxuICAgIHdpZHRoOiAyNSU7XFxyXFxufVxcclxcblxcclxcbi5jb21wYXJlLW1vZGFsIHtcXHJcXG4gICAgd2lkdGg6IDM1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGFyZS1tb2RhbCB0YWJsZSB7XFxyXFxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XFxyXFxuICAgIGJvcmRlci1zcGFjaW5nOiAxMHB4IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvZGVsZW5zLW1vZGFsIHtcXHJcXG4gICAgLyogd2Ugc2V0IHNvbWUgY3VzdG9tIHBvc2l0aW9uIHN0eWxlcyBzbyB0aGF0IHRoZSBtb2RhbCBkb2Vzbid0IG9ic2N1cmUgdGhlIGNvZGVsZW5zIHZpc3VhbGl6ZXIgKi9cXHJcXG4gICAgdG9wOiAyMCU7XFxyXFxuICAgIHJpZ2h0OiAyMCU7XFxyXFxuICAgIGxlZnQ6IGF1dG87XFxyXFxuICAgIGJvdHRvbTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuXFxyXFxuICAgIC8qIHJlbW92ZSBhbnkgY3VzdG9tIHBvc2l0aW9uIHN0eWxlcyB3aGVuIHRoZSBzY3JlZW4gaXMgc21hbGwgKG1vYmlsZSBkZXZpY2VzKVxcclxcbiAgICB0byBwcmV2ZW50IHRoZSBtb2RhbCBmcm9tIGJlaW5nIHBhcnRpYWxseSBvZmYgdGhlIHNjcmVlbiAqL1xcclxcbiAgICAuY29kZWxlbnMtbW9kYWwge1xcclxcbiAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICByaWdodDogMCAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNvZGVsZW5zLW1vZGFsPi5tb2RhbC1kaWFsb2cge1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIEVuZCBtb2RhbCBkaWFsb2cgc3R5bGVzICovXFxyXFxuXFxyXFxuLmZvb3Rub3RlLnRhYmxlIHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290bm90ZS50YWJsZSB0ZC5sYWJlbCB7XFxyXFxuICAgIHBhZGRpbmc6IDJweCA1cHggMnB4IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZWRmNztcXHJcXG59XFxyXFxuXFxyXFxuLmFjLWNhbnZhcyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi52aWRlby1wbGF5LW92ZXJsYXkge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogLTE1MHB4O1xcclxcbiAgICBsZWZ0OiA0NCU7XFxyXFxuICAgIGhlaWdodDogODVweDtcXHJcXG4gICAgd2lkdGg6IDEzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi52aWRlb19wb3B1cCB2aWRlbyB7XFxyXFxuICAgIHdpZHRoOiA1MDBwdDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udWktc29ydGFibGUtaGVscGVyIHtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XFxyXFxuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5uYXZMaW5rIHtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICBib3R0b206IDY1cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG59XFxyXFxuXFxyXFxuI3JlbGF0aW9ucy1uZXh0IHtcXHJcXG4gICAgcmlnaHQ6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbiNyZWxhdGlvbnMtcHJldiB7XFxyXFxuICAgIGxlZnQ6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcblxcclxcbiAgICAvKiBTdHlsaW5nIGRlZmluaXRpb25zIGZvciBjaGV2cm9uIGZ1bmN0aW9uIGluIGJvb2tmdW5jcy5qcyAqL1xcclxcbiAgICAubmF2TGluayB7XFxyXFxuICAgICAgICB6LWluZGV4OiAyO1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB1bCN0b3AtcmVsYXRpb25zLWNvbnNvbGUsXFxyXFxuICAgIHVsI2JvdHRvbS1yZWxhdGlvbnMtY29uc29sZSB7XFxyXFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMCAyMHB4IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3RvcC1yZWxhdGlvbnMtbmV4dCxcXHJcXG4gICAgI3RvcC1yZWxhdGlvbnMtcHJldixcXHJcXG4gICAgI2JvdHRvbS1yZWxhdGlvbnMtbmV4dCxcXHJcXG4gICAgI2JvdHRvbS1yZWxhdGlvbnMtcHJldiB7XFxyXFxuICAgICAgICB3aWR0aDogMjUlO1xcclxcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5uYXZMaW5rIGEge1xcclxcbiAgICBjb2xvcjogIzk5OTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbXBsZXRpb25CdXR0b24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDcwcHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbkFza0NvbXBsZXRpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21wbGV0aW9uQnV0dG9uKTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21wbGV0aW9uQnV0dG9uSG92ZXIpO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbkFza0NvbXBsZXRpb246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21wbGV0aW9uQnV0dG9uSG92ZXIpO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbXBsZXRpb25CdXR0b25Ib3Zlcik7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25Db25maXJtQ29tcGxldGlvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MGQzOTI7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzNkYzY4MjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbkNvbmZpcm1Db21wbGV0aW9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkYzY4MjtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjM2RjNjgyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2TGlua0JnIHtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogNTVweDtcXHJcXG4gICAgY29sb3I6ICM5OTk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggM3B4IHJnYmEoNTAsIDUwLCA1MCwgMC41KTtcXHJcXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDNweCByZ2JhKDUwLCA1MCwgNTAsIDAuNSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IHJnYmEoNTAsIDUwLCA1MCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkxpbmtCZzpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjOTk5O1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2TGlua0JnUmlnaHQge1xcclxcbiAgICByaWdodDogLTEwMDBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweCAxNXB4IDAgNjVweDtcXHJcXG59XFxyXFxuXFxyXFxuI25hdkxpbmtCZ0xlZnQge1xcclxcbiAgICBsZWZ0OiAtNjVweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlaHRtbCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIC5zZWN0aW9uPmRpdi5zaWRlYmFyIHtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMC41ZW0gMWVtO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuYS5kaXNxdXNfdGhyZWFkX2xpbmsge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnJldmVhbF9idXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbmlmcmFtZVtzZWFtbGVzc10ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIC5jb250YWluZXIgLnNlY3Rpb24+ZGl2LnNpZGViYXIge1xcclxcbiAgICAgICAgbWFyZ2luOiAwIDNlbSAwLjVlbSAxZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxyXFxuICAgIC5jb250YWluZXIgLnNlY3Rpb24+ZGl2LnNpZGViYXIge1xcclxcbiAgICAgICAgbWFyZ2luOiAwIDExZW0gMC41ZW0gMWVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gICAgLmNvbnRhaW5lciAuc2VjdGlvbj5kaXYuc2lkZWJhciB7XFxyXFxuICAgICAgICBtYXJnaW46IDAgMThlbSAwLjVlbSAxZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuZGl2LkV4ZWN1dGlvblZpc3VhbGl6ZXIgdGFibGUudmlzdWFsaXplciB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uc2x0b29sdGlwIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAxMDIwO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xcclxcbiAgICBib3R0b206IDEyMCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2x0b29sdGlwIC5zbHRvb2x0aXAtYXJyb3cge1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XFxyXFxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMDAwMDAwO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2x0b29sdGlwLWlubmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcXHJcXG4gICAgcGFkZGluZzogM3B4IDhweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRvb2x0aXApO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXHJcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbnVsLmRyb3Bkb3duLW1lbnUuZ2xvYmFsdG9jIHtcXHJcXG4gICAgbWF4LWhlaWdodDogNzAwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZ2xvYmFsdG9jIHNwYW4uY2FwdGlvbi10ZXh0IHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogU3R5bGUgbHAgdGV4dGFyZWFzLiAqL1xcclxcbnRleHRhcmVhI2xwLXJlc3VsdCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qXFxyXFxuICogSGlkZSBvbmx5IHZpc3VhbGx5LCBidXQgaGF2ZSBpdCBhdmFpbGFibGUgZm9yIHNjcmVlbiByZWFkZXJzOlxcclxcbiAqIGh0dHBzOi8vc25vb2suY2EvYXJjaGl2ZXMvaHRtbF9hbmRfY3NzL2hpZGluZy1jb250ZW50LWZvci1hY2Nlc3NpYmlsaXR5XFxyXFxuICpcXHJcXG4gKiAxLiBGb3IgbG9uZyBjb250ZW50LCBsaW5lIGZlZWRzIGFyZSBub3QgaW50ZXJwcmV0ZWQgYXMgc3BhY2VzIGFuZCBzbWFsbCB3aWR0aFxcclxcbiAqICAgIGNhdXNlcyBjb250ZW50IHRvIHdyYXAgMSB3b3JkIHBlciBsaW5lOlxcclxcbiAqICAgIGh0dHBzOi8vbWVkaXVtLmNvbS9AamVzc2ViZWFjaC9iZXdhcmUtc211c2hlZC1vZmYtc2NyZWVuLWFjY2Vzc2libGUtdGV4dC01OTUyYTRjMmNiZmVcXHJcXG4gKi9cXHJcXG5cXHJcXG4udmlzdWFsbHloaWRkZW4ge1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBtYXJnaW46IC0xcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDFweDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgLyogMSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIEV4dGVuZHMgdGhlIC52aXN1YWxseWhpZGRlbiBjbGFzcyB0byBhbGxvdyB0aGUgZWxlbWVudFxcclxcbiAqIHRvIGJlIGZvY3VzYWJsZSB3aGVuIG5hdmlnYXRlZCB0byB2aWEgdGhlIGtleWJvYXJkOlxcclxcbiAqIGh0dHBzOi8vd3d3LmRydXBhbC5vcmcvbm9kZS84OTc2MzhcXHJcXG4gKi9cXHJcXG5cXHJcXG4udmlzdWFsbHloaWRkZW4uZm9jdXNhYmxlOmFjdGl2ZSxcXHJcXG4udmlzdWFsbHloaWRkZW4uZm9jdXNhYmxlOmZvY3VzIHtcXHJcXG4gICAgY2xpcDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5ibG9ja3F1b3RlIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbiNzY3Byb2dyZXNzY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI3N1YmNoYXB0ZXJwcm9ncmVzcz5kaXYge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuI3N1YmNoYXB0ZXJwcm9ncmVzcz5kaXYubG9nZ2Vkb3V0IHtcXHJcXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4ucnVuZXN0b25lX2NhcHRpb24ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ydW5lc3RvbmVfY2FwdGlvbl9kaXZpZCB7XFxyXFxuICAgIG9wYWNpdHk6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3F1ZXN0aW9ucyAucnVuZXN0b25lX2NhcHRpb246YmVmb3JlIHtcXHJcXG4gICAgY291bnRlci1pbmNyZW1lbnQ6IHJzY29tcG9uZW50O1xcclxcbiAgICBjb250ZW50OiBcXFwiUHJvYmxlbTogXFxcImNvdW50ZXIocnNjb21wb25lbnQpIFxcXCIgLS0gXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ib2R5Rm9udCk7XFxyXFxufVxcclxcblxcclxcbi5qdXB5dGVyX2NvbnRhaW5lciAub3V0cHV0ICB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5qdXB5dGVyX2NvbnRhaW5lciAub3V0cHV0IHRkIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmp1cHl0ZXJfY29udGFpbmVyIC5vdXRwdXQgdGgge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKlRoZW1lIHRvZ2dsZSovXFxyXFxuLnRoZW1lLXN3aXRjaC13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgZW0ge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnRoZW1lLXN3aXRjaCB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgaGVpZ2h0OiAzNHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGhlbWUtc3dpdGNoIGlucHV0IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHRyYW5zaXRpb246IC40cztcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlcjpiZWZvcmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3R0b206IDRweDtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIGhlaWdodDogMjZweDtcXHJcXG4gICAgbGVmdDogNHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRyYW5zaXRpb246IC40cztcXHJcXG4gICAgd2lkdGg6IDI2cHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmNoZWNrZWQrLnNsaWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NmJiNmE7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmNoZWNrZWQrLnNsaWRlcjpiZWZvcmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXIucm91bmQge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLypFbmQgdGhlbWUgdG9nZ2xlKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ydW5lc3RvbmUvY29tbW9uL2Nzcy9ydW5lc3RvbmUtY3VzdG9tLXNwaGlueC1ib290c3RyYXAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1DQUFtQztBQUNuQztJQUNJLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixnQ0FBZ0M7SUFDaEMscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2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QkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBLGVBQWU7QUFDZjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7O0lBRW5CO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULGVBQWU7SUFDZixPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0lBQ04sZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUEsbUJBQW1CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFZhcmlhYmxlcyBob2xkaW5nIHRoZW1lIGNvbG9ycyAqL1xcclxcbjpyb290IHtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xcclxcbiAgICAtLW91dGVyQmFja2dyb3VuZDogI2VlZWVlZTtcXHJcXG4gICAgLS1saW5rczogIzA2NDVhZDtcXHJcXG4gICAgLS1ib2R5Rm9udDogIzAwMDAwMDtcXHJcXG4gICAgLS10b29sdGlwOiAjZmZmZmZmO1xcclxcbiAgICAtLWdyYXlUb1doaXRlOiAjMzMzMzMzO1xcclxcbiAgICAtLW5hdmJhcjogI2Y4ZjhmODtcXHJcXG4gICAgLS1uYXZiYXJGb250OiAjNzA3MDcwO1xcclxcbiAgICAtLW5hdmJhckZvbnRIb3ZlcjogIzAwMDAwMDtcXHJcXG4gICAgLS1hbGVydHM6ICNkOWVkZjc7XFxyXFxuICAgIC0tY29tcGxldGlvbkJ1dHRvbjogI2ZmYWEyYjtcXHJcXG4gICAgLS1jb21wbGV0aW9uQnV0dG9uSG92ZXI6ICNmZjlmMTk7XFxyXFxuICAgIC0tYWRtb25pdGlvbjogI2ZjZjhlMztcXHJcXG4gICAgLS1hZG1vbml0aW9uQm9yZGVyOiAjZmJlZWQ1O1xcclxcbiAgICAtLWNvZGVCdXR0b25zOiAjNDc0OTQ5O1xcclxcbiAgICAtLWNvZGVCdXR0b25zQm9yZGVyOiAjNDc0OTQ5O1xcclxcbiAgICAtLWRhbmdlckFsZXJ0czogI2YyZGVkZTtcXHJcXG4gICAgLS1zdWNjZXNzQWxlcnRzOiAjZGZmMGQ4O1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS10aGVtZT1cXFwiZGFya1xcXCJdIHtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xcclxcbiAgICAtLW91dGVyQmFja2dyb3VuZDogIzNkM2QzZDtcXHJcXG4gICAgLS1saW5rczogIzExNjVmMDtcXHJcXG4gICAgLS1ib2R5Rm9udDogI2ZmZmZmZjtcXHJcXG4gICAgLS10b29sdGlwOiAjMDAwMDAwO1xcclxcbiAgICAtLWdyYXlUb1doaXRlOiAjZmZmZmZmO1xcclxcbiAgICAtLW5hdmJhcjogIzNkM2QzZDtcXHJcXG4gICAgLS1uYXZiYXJGb250OiAjZmZmZmZmO1xcclxcbiAgICAtLW5hdmJhckZvbnRIb3ZlcjogI2Q2ZDZkNjtcXHJcXG4gICAgLS1hbGVydHM6ICM3MTQwODI7XFxyXFxuICAgIC0tY29tcGxldGlvbkJ1dHRvbjogIzY1MDA4NztcXHJcXG4gICAgLS1jb21wbGV0aW9uQnV0dG9uSG92ZXI6ICM1NjAwNzM7XFxyXFxuICAgIC0tYWRtb25pdGlvbjogIzNkM2QzZDtcXHJcXG4gICAgLS1hZG1vbml0aW9uQm9yZGVyOiAjMjYyNjI2O1xcclxcbiAgICAtLWNvZGVCdXR0b25zOiAjMmMwYWE2O1xcclxcbiAgICAtLWNvZGVCdXR0b25zQm9yZGVyOiAjZmZmZmZmO1xcclxcbiAgICAtLWRhbmdlckFsZXJ0czogIzhjMjYyNjtcXHJcXG4gICAgLS1zdWNjZXNzQWxlcnRzOiAjMjE3MzAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjdXN0b20gbW9kaWZpY2F0aW9uIG9mIGJhc2ljLmNzcyBmb3IgY29sb3ItY29udHJhc3QgKEFBIGNvbXBsaWFudCkgKi9cXHJcXG50ZC5saW5lbm9zIHByZSB7XFxyXFxuICAgIGNvbG9yOiAjNmI2YjZiO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjdXN0b20gbW9kaWZpY2F0aW9uIG9mIHByZXR0aWZ5LmNzcyBmb3IgY29sb3ItY29udHJhc3QgKEFBIGNvbXBsaWFudCkgKi9cXHJcXG4uc3RyIHtcXHJcXG4gICAgY29sb3I6ICMwMDZiMDA7XFxyXFxufVxcclxcblxcclxcbi8qIGN1c3RvbSBtb2RpZmljYXRpb24gb2YgcGFyc29ucy5jc3MgZm9yIGNvbG9yLWNvbnRyYXN0IChBQSBjb21wbGlhbnQpICovXFxyXFxuLnBhcnNvbnMgLmJsb2NrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXHJcXG59XFxyXFxuXFxyXFxuLyogY3VzdG9tIG1vZGlmaWNhdGlvbiBvZiBweWdtZW50cy5jc3MgZm9yIGNvbG9yLWNvbnRyYXN0IChBQSBjb21wbGlhbnQpICovXFxyXFxuLmhpZ2hsaWdodCAuYzEge1xcclxcbiAgICBjb2xvcjogIzM3NkE3QjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZ2hsaWdodCAubm4ge1xcclxcbiAgICBjb2xvcjogIzBGNkM5NTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZ2hsaWdodCAuZ3Age1xcclxcbiAgICBjb2xvcjogI0ExNEMwODtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZ2hsaWdodCAuc2kge1xcclxcbiAgICBjb2xvcjogIzNDNzczRDtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZ2hsaWdodCAubmMge1xcclxcbiAgICBjb2xvcjogIzBCNzE5RDtcXHJcXG59XFxyXFxuXFxyXFxuLyogYFNlYXJjaGAgZnVuY3Rpb25hbGl0eSdzIHJlc3VsdCBjdXN0b20gbW9kaWZpY2F0aW9uIGZvciBjb2xvci1jb250cmFzdCAoQUEgY29tcGxpYW50KSAqL1xcclxcbnVsLnNlYXJjaCBsaSBkaXYuY29udGV4dCB7XFxyXFxuICAgIGNvbG9yOiAjNmI2YjZiO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuLmhpZ2hsaWdodGVkIHtcXHJcXG4gICAgY29sb3I6ICM0ZDRkNGQ7XFxyXFxufVxcclxcblxcclxcbi8qIEFjdGl2ZUNvZGUgZ3V0dGVyIGN1c3RvbSBtb2RpZmljYXRpb24gZm9yIGNvbG9yLWNvbnRyYXN0IChBQSBjb21wbGlhbnQpICovXFxyXFxuXFxyXFxuLkNvZGVNaXJyb3ItbGluZW51bWJlciB7XFxyXFxuICAgIGNvbG9yOiAjNmI2YjZiO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxlcnQtd2FybmluZyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkbW9uaXRpb24pO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFkbW9uaXRpb25Cb3JkZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQeXRob24gY29kZSBvdXRwdXQgY3VzdG9tIG1vZGlmaWNhdGlvbiBmb3IgY29sb3ItY29udHJhc3QgKEFBIGNvbXBsaWFudCkgKi9cXHJcXG5kaXYuRXhlY3V0aW9uVmlzdWFsaXplciB0YWJsZSNweUNvZGVPdXRwdXQgLmxpbmVObyB7XFxyXFxuICAgIGNvbG9yOiAjNmI2YjZiO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSdW5lc3RvbmUgY3VzdG9tIG1vZGlmaWNhdGlvbnMgKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgY291bnRlci1yZXNldDogcnNjb21wb25lbnQ7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vdXRlckJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG5wcmUge1xcclxcbiAgICBtYXJnaW46IDAgMCAxZW07XFxyXFxufVxcclxcblxcclxcbmg1IHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogdGFibGUtb2YtY29udGVudHMgcmVsYXRlZCBzdHlsZXMgZm9yIGNvbG9yLWNvbnRyYXN0IChBQSBjb21wbGlhbnQpICovXFxyXFxuI3RhYmxlLW9mLWNvbnRlbnRzIGEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlua3MpO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFibGUtb2YtY29udGVudHMgYTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW5rcyk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFibGUtb2YtY29udGVudHMuc2VjdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogbmF2YmFyLWJyYW5kIGNvbG9yIGNvbnRyYXN0IChBQSBjb21wbGlhbnQpICovXFxyXFxuLm5hdmJhci1kZWZhdWx0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YmFyKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2PmxpIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLW5hdmJhckZvbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXY+bGk+YSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1uYXZiYXJGb250KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2PmxpPmE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbmF2YmFyRm9udEhvdmVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItYnJhbmQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbmF2YmFyRm9udCk7XFxyXFxufVxcclxcblxcclxcbi8qIGFja25vd2xlZGdlbWVudCByZWxhdGVkIHN0eWxlcyBmb3IgY29sb3ItY29udHJhc3QgKEFBIGNvbXBsaWFudCkgKi9cXHJcXG4udG9jdHJlZS13cmFwcGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9jdHJlZS13cmFwcGVyIGEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlua3MpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9jdHJlZS13cmFwcGVyIGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlua3MpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogaW5kZXggYW5kIHNlYXJjaCByZWxhdGVkIHN0eWxlcyBmb3IgY29sb3ItY29udHJhc3QgKEFBIGNvbXBsaWFudCkgKi9cXHJcXG4jaW5kZXgtYW5kLXNlYXJjaC5zZWN0aW9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jaW5kZXgtYW5kLXNlYXJjaC5zZWN0aW9uIGEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlua3MpO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5kZXgtYW5kLXNlYXJjaC5zZWN0aW9uIGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlua3MpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogY3VzdG9tIHN0eWxlIGZvciBgYWAgdGFnIGZvciBjb2xvci1jb250cmFzdCAoQUEgY29tcGxpYW50KSAqL1xcclxcblxcclxcbmEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlua3MpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBuYXZiYXIgYW5kIG1lbnUgcmVsYXRlZCBzdHlsZXMgKi9cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG5cXHJcXG4gICAgLyogUmVtb3ZlIHRvcCBwYWRkaW5nIHdoZW4gdG9wIG5hdmJhciBnb2VzIGNvbGxhcHNlZCBpbiBuYXJyb3cgdmlld3BvcnRzICovXFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG8gYXV0byBhdXRvIDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2YmFyLWZpeGVkLXRvcCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcblxcclxcbiAgICAvKiB3aGVuIG5hdmJhciBpcyBjb2xsYXBzZWQgd2UgZG9uJ3Qgd2FudCBhbnkgdmVydGljYWwgZGl2aWRlcnMgdGFraW5nIHVwIHNwYWNlICovXFxyXFxuICAgIC5uYXZiYXIgLmRpdmlkZXItdmVydGljYWwge1xcclxcbiAgICAgICAgbWFyZ2luOiAwIDNweDtcXHJcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YyZjJmMjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5kaXYuY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbmRpdi5zZWN0aW9uIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciAuc2VjdGlvbj4qOm5vdCguc2VjdGlvbik6bm90KC5hY19zZWN0aW9uKSB7XFxyXFxuICAgIG1heC13aWR0aDogNTAwcHQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qIFRoaXMgcnVsZSBpcyBtZWFudCB0byBvdmVycmlkZSB0aGUgYmVoYXZpb3Igb2YgdGhlXFxyXFxuICAgcHJldmlvdXMgcnVsZSBzaW5jZSBpdCBpcyBub3QgcG9zc2libGUgdG8gZXhjbHVkZVxcclxcbiAgIG1vcmUgdGhhbiBvbmUgc2VjdGlvbiBpbiB0aGUgbm90KCkgcGFydCBvZiB0aGUgcnVsZVxcclxcbiovXFxyXFxuLmNvbnRhaW5lciAuc2VjdGlvbiBkaXYuZnVsbC13aWR0aC5jb250YWluZXIge1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXgtd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciAuc2VjdGlvbj5pbWcge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciAuc2VjdGlvbiAucGFyc29ucyxcXHJcXG4uY29udGFpbmVyIC5zZWN0aW9uIC5wYXJzb25zIC5zb3J0YWJsZS1jb2RlLWNvbnRhaW5lcixcXHJcXG4uY29udGFpbmVyIC5zZWN0aW9uIC5jZF9zZWN0aW9uIHtcXHJcXG4gICAgbWF4LXdpZHRoOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyPi5jb250YWluZXIgLm5hdmJhci1icmFuZCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyPi5jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZiYXIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyPi5jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vdXRlckJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyPi5jb250YWluZXIgcD5hIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbmtzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJyYW5kLWxvZ28ge1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogNDBweCA0MHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1tZW51IHtcXHJcXG4gICAgd2lkdGg6IDIyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTVweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmItbGlrZSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZiX2lmcmFtZV93aWRnZXQgc3BhbixcXHJcXG4uZmJfaWZyYW1lX3dpZGdldCBpZnJhbWUge1xcclxcbiAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcXHJcXG4gICAgd2lkdGg6IDgycHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnR3aXR0ZXItZm9sbG93LWJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5naXR0aXAge1xcclxcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5naXR0aXAtYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLW1lbnU+bGk+c3BhbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwYWRkaW5nOiAzcHggMjBweDtcXHJcXG4gICAgY2xlYXI6IGJvdGg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyYXlUb1doaXRlKTtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLW1lbnU+bGk+YSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5VG9XaGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5sb2dnZWRpbnVzZXIge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogZW5kIG5hdmJhciBhbmQgbWVudSByZWxhdGVkIHN0eWxlcyAqL1xcclxcblxcclxcbi5Db2RlTWlycm9yIHtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMWVtIDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGNsZWFyOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG4uQ29kZU1pcnJvci1zY3JvbGwge1xcclxcbiAgICAvKiB0aGlzIGFsbG93cyBDTSBlbGVtZW50cyB0byBiZSByZXNpemVkIHRvIChhbG1vc3QpIGFueVxcclxcbiAgICAgKiBoZWlnaHQgd2hpbGUgc3RpbGwgcmVseWluZyBvbiBtYXgtaGVpZ2h0ICh3aGljaCBrZWVwc1xcclxcbiAgICAgKiB0aGUgQ00gZWRpdG9ycyB0byBubyBtb3JlIHRoYW4gdGhlIHNpemUgbmVlZGVkXFxyXFxuICAgICAqIHVubGVzcyByZXNpemVkKSAqL1xcclxcbiAgICBtYXgtaGVpZ2h0OiA2MGVtO1xcclxcbiAgICBtaW4td2lkdGg6IDMwZW07XFxyXFxufVxcclxcblxcclxcbi5hY19zZWN0aW9uIC5Db2RlTWlycm9yIHByZSB7XFxyXFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICAtby1ib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNb25hY28sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xcclxcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmJ0bixcXHJcXG5idG4uYnRuLXNtLFxcclxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLmJ0bi5idG4tc20sXFxyXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0uYnRuLmJ0bi1zbSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLmRpc2FibGVkIHtcXHJcXG4gICAgLyogbmVlZGVkIGluIEJvb3RzdHJhcCAzIHRvIGFsbG93IHRvb2x0aXBzIG9uIGRpc2FibGVkIGJ1dHRvbnMgKi9cXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5idG4tZGVmYXVsdCxcXHJcXG4uYnRuLWRlZmF1bHQuZGlzYWJsZWQsXFxyXFxuLmJ0bi1kZWZhdWx0W2Rpc2FibGVkXSxcXHJcXG4uYnRuLWRlZmF1bHQuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmJ0bi1kZWZhdWx0W2Rpc2FibGVkXTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2RlQnV0dG9ucyk7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKGNvZGVCdXR0b25zQm9yZGVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1kZWZhdWx0OmhvdmVyLFxcclxcbi5idG4tZGVmYXVsdDpmb2N1cyxcXHJcXG4uYnRuLWRlZmF1bHQ6YWN0aXZlLFxcclxcbi5idG4tZGVmYXVsdC5hY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2EzYzNjO1xcclxcbiAgICBib3JkZXItY29sb3I6ICMyZTJmMmY7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdLFxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2x0aXAge1xcclxcbiAgICB6LWluZGV4OiAyMDAwICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi50b29sdGlwLmluIHtcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9ODApO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hbGVydCBmb3JtIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogZGVmYXVsdCBib29rc3RyYXAgYWxlcnQgY29sb3IgaXMgaGFyZCB0byByZWFkIChsb3cgY29udHJhc3QpLiAqL1xcclxcbi5hbGVydCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5VG9XaGl0ZSk7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5hbGVydC1pbmZvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxlcnRzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFsZXJ0LWRhbmdlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlckFsZXJ0cyk7XFxyXFxufVxcclxcblxcclxcbi8qIG92ZXJyaWRlIHRoZSBjb2xvciBzdHlsZXMgYXBwbGllZCBieSBTa3VscHQgdG8gdGhlIHVuaXR0ZXN0IHJlc3VsdHMgZGl2cyAqL1xcclxcbi51bml0dGVzdC1yZXN1bHRzLmFsZXJ0LWRhbmdlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlckFsZXJ0cykgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnVuaXR0ZXN0LXJlc3VsdHMuYWxlcnQtc3VjY2VzcyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Y2Nlc3NBbGVydHMpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5hbGVydCBsYWJlbCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi8qIFRoZXNlIGFkbW9uaXRpb24gc3R5bGVzIHN0eWxlcyBhcmUgY29waWVkIGZyb20gdGhlIEJvb3RzdHJhcCAuYWxlcnQgY2xhc3Nlcy5cXHJcXG4gTW9zdCBvZiB0aGUgIWltcG9ydGFudCBkZWNsYXJhdGlvbnMgYXJlIHRvIG92ZXJyaWRlIHRoZSBTcGhpbnggYmFzaWMuY3NzIHN0eWxlcyAqL1xcclxcbi5hZG1vbml0aW9uIHtcXHJcXG4gICAgcGFkZGluZzogOHB4IDM1cHggOHB4IDE0cHggIWltcG9ydGFudDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRtb25pdGlvbik7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmYmVlZDU7XFxyXFxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAuYWxlcnQtZGFuZ2VyICovXFxyXFxuLmFkbW9uaXRpb24uY2F1dGlvbiB7XFxyXFxuICAgIGNvbG9yOiAjQTMzRjNFO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlO1xcclxcbiAgICBib3JkZXItY29sb3I6ICNlZWQzZDc7XFxyXFxufVxcclxcblxcclxcbi8qIC5hbGVydC1pbmZvICovXFxyXFxuLmFkbW9uaXRpb24udGlwLFxcclxcbi5hZG1vbml0aW9uLm5vdGUge1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZWRmNztcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjYmNlOGYxO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmcm9tIHdlYjJweS5jc3MgKi9cXHJcXG5kaXYuZmxhc2gge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB0b3A6IDU1cHg7XFxyXFxuICAgIHJpZ2h0OiA0NXB4O1xcclxcbiAgICBvcGFjaXR5OiAwLjk1O1xcclxcbiAgICBtYXJnaW46IDAgMCAxMHB4IDEwcHg7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICMyMjIsICMwMDApO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjMjIyLCAjMDAwKTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoOTBkZWcsICMyMjIsICMwMDApO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG9wLCAjMjIyLCAjMDAwKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAgIHotaW5kZXg6IDIwMDA7XFxyXFxufVxcclxcblxcclxcbi8qIFN0eWxlcyBmb3IgdGhlIGxvZ2luLCByZWdpc3RyYXRpb24sIGFuZCBKYW5yYWluIGZvcm1zICovXFxyXFxuI3dlYjJweV91c2VyX2Zvcm0ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jd2ViMnB5X3VzZXJfZm9ybSBmb3JtIHtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTUwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAzcHg7XFxyXFxufVxcclxcblxcclxcbiN3ZWIycHlfdXNlcl9mb3JtIHRkIHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbiN3ZWIycHlfdXNlcl9mb3JtIHRkLncycF9mdyB7XFxyXFxuICAgIHdpZHRoOiAyOTlweDtcXHJcXG59XFxyXFxuXFxyXFxuI2F1dGgtYWN0aW9ucyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbiNzaWduX2luX3RleHQgdGQge1xcclxcbiAgICBmb250LXNpemU6IDE3cHg7XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICBmb250LWZhbWlseTogJ2x1Y2lkYSBncmFuZGUnLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcXHJcXG59XFxyXFxuXFxyXFxuI2F1dGhfdXNlcl9yZW1lbWJlciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFbmQgbG9naW4sIHJlZ2lzdHJhdGlvbiwgSmFucmFpbiBzdHlsZXMgKi9cXHJcXG5cXHJcXG4vKiBlbmQtb2YtY2hhcHRlciBleGVyY2lzZXMgc3R5bGVzICovXFxyXFxuI2V4ZXJjaXNlcz5vbD5saSxcXHJcXG4jcHJvZ3JhbW1pbmctZXhlcmNpc2VzPm9sPmxpIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2V4ZXJjaXNlcz5vbD5saTpudGgtY2hpbGQoZXZlbiksXFxyXFxuI3Byb2dyYW1taW5nLWV4ZXJjaXNlcz5vbD5saTpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgICBwYWRkaW5nOiAxLjJlbSAxLjRlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZhZjdkZjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZiZWVkNTtcXHJcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi8qIEVuZCBjaGFwdGVyIGV4ZXJjaXNlcyBzdHlsZXMgKi9cXHJcXG5cXHJcXG4vKiBNb2RhbCBkaWFsb2cgc3R5bGVzIChzY3JhdGNoIGFjdGl2ZWNvZGUsIGNvbXBhcmUgbWUsIGV0YykgKi9cXHJcXG4uc2NyYXRjaC1hYy1tb2RhbCB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcblxcclxcbi5jb21wYXJlLW1vZGFsIC5wcm9ncmVzcyB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5jb21wYXJlLW1lLXByb2dyZXNzIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb21wYXJlLW1lLXByb2dyZXNzIC5wcm9ncmVzcy1iYXIsXFxyXFxuLnVuaXR0ZXN0LXJlc3VsdHMtcHJvZ3Jlc3MgLnByb2dyZXNzLWJhciB7XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi51bml0dGVzdC1yZXN1bHRzLXByb2dyZXNzIHtcXHJcXG4gICAgd2lkdGg6IDI1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBhcmUtbW9kYWwge1xcclxcbiAgICB3aWR0aDogMzUwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21wYXJlLW1vZGFsIHRhYmxlIHtcXHJcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcXHJcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDEwcHggNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29kZWxlbnMtbW9kYWwge1xcclxcbiAgICAvKiB3ZSBzZXQgc29tZSBjdXN0b20gcG9zaXRpb24gc3R5bGVzIHNvIHRoYXQgdGhlIG1vZGFsIGRvZXNuJ3Qgb2JzY3VyZSB0aGUgY29kZWxlbnMgdmlzdWFsaXplciAqL1xcclxcbiAgICB0b3A6IDIwJTtcXHJcXG4gICAgcmlnaHQ6IDIwJTtcXHJcXG4gICAgbGVmdDogYXV0bztcXHJcXG4gICAgYm90dG9tOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG5cXHJcXG4gICAgLyogcmVtb3ZlIGFueSBjdXN0b20gcG9zaXRpb24gc3R5bGVzIHdoZW4gdGhlIHNjcmVlbiBpcyBzbWFsbCAobW9iaWxlIGRldmljZXMpXFxyXFxuICAgIHRvIHByZXZlbnQgdGhlIG1vZGFsIGZyb20gYmVpbmcgcGFydGlhbGx5IG9mZiB0aGUgc2NyZWVuICovXFxyXFxuICAgIC5jb2RlbGVucy1tb2RhbCB7XFxyXFxuICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcXHJcXG4gICAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBib3R0b206IDAgIWltcG9ydGFudDtcXHJcXG4gICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29kZWxlbnMtbW9kYWw+Lm1vZGFsLWRpYWxvZyB7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRW5kIG1vZGFsIGRpYWxvZyBzdHlsZXMgKi9cXHJcXG5cXHJcXG4uZm9vdG5vdGUudGFibGUge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rub3RlLnRhYmxlIHRkLmxhYmVsIHtcXHJcXG4gICAgcGFkZGluZzogMnB4IDVweCAycHggNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllZGY3O1xcclxcbn1cXHJcXG5cXHJcXG4uYWMtY2FudmFzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnZpZGVvLXBsYXktb3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiAtMTUwcHg7XFxyXFxuICAgIGxlZnQ6IDQ0JTtcXHJcXG4gICAgaGVpZ2h0OiA4NXB4O1xcclxcbiAgICB3aWR0aDogMTMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLnZpZGVvX3BvcHVwIHZpZGVvIHtcXHJcXG4gICAgd2lkdGg6IDUwMHB0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi51aS1zb3J0YWJsZS1oZWxwZXIge1xcclxcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXHJcXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkxpbmsge1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIGJvdHRvbTogNjVweDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVsYXRpb25zLW5leHQge1xcclxcbiAgICByaWdodDogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3JlbGF0aW9ucy1wcmV2IHtcXHJcXG4gICAgbGVmdDogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuXFxyXFxuICAgIC8qIFN0eWxpbmcgZGVmaW5pdGlvbnMgZm9yIGNoZXZyb24gZnVuY3Rpb24gaW4gYm9va2Z1bmNzLmpzICovXFxyXFxuICAgIC5uYXZMaW5rIHtcXHJcXG4gICAgICAgIHotaW5kZXg6IDI7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHVsI3RvcC1yZWxhdGlvbnMtY29uc29sZSxcXHJcXG4gICAgdWwjYm90dG9tLXJlbGF0aW9ucy1jb25zb2xlIHtcXHJcXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICAgICAgcGFkZGluZzogNDBweCAwIDIwcHggMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjdG9wLXJlbGF0aW9ucy1uZXh0LFxcclxcbiAgICAjdG9wLXJlbGF0aW9ucy1wcmV2LFxcclxcbiAgICAjYm90dG9tLXJlbGF0aW9ucy1uZXh0LFxcclxcbiAgICAjYm90dG9tLXJlbGF0aW9ucy1wcmV2IHtcXHJcXG4gICAgICAgIHdpZHRoOiAyNSU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLm5hdkxpbmsgYSB7XFxyXFxuICAgIGNvbG9yOiAjOTk5O1xcclxcbn1cXHJcXG5cXHJcXG4jY29tcGxldGlvbkJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNzBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNzBweDtcXHJcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uQXNrQ29tcGxldGlvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbXBsZXRpb25CdXR0b24pO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbXBsZXRpb25CdXR0b25Ib3Zlcik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uQXNrQ29tcGxldGlvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbXBsZXRpb25CdXR0b25Ib3Zlcik7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tcGxldGlvbkJ1dHRvbkhvdmVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbkNvbmZpcm1Db21wbGV0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUwZDM5MjtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjM2RjNjgyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uQ29uZmlybUNvbXBsZXRpb246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2RjNjgyO1xcclxcbiAgICBib3JkZXItY29sb3I6ICMzZGM2ODI7XFxyXFxufVxcclxcblxcclxcbi5uYXZMaW5rQmcge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYm90dG9tOiA1NXB4O1xcclxcbiAgICBjb2xvcjogIzk5OTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAzcHggcmdiYSg1MCwgNTAsIDUwLCAwLjUpO1xcclxcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggM3B4IHJnYmEoNTAsIDUwLCA1MCwgMC41KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggcmdiYSg1MCwgNTAsIDUwLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2TGlua0JnOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICM5OTk7XFxyXFxufVxcclxcblxcclxcbiNuYXZMaW5rQmdSaWdodCB7XFxyXFxuICAgIHJpZ2h0OiAtMTAwMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggMCA2NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2TGlua0JnTGVmdCB7XFxyXFxuICAgIGxlZnQ6IC02NXB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmVodG1sIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNDAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIgLnNlY3Rpb24+ZGl2LnNpZGViYXIge1xcclxcbiAgICBtYXJnaW46IDAgMCAwLjVlbSAxZW07XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5hLmRpc3F1c190aHJlYWRfbGluayB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4ucmV2ZWFsX2J1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuaWZyYW1lW3NlYW1sZXNzXSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgLmNvbnRhaW5lciAuc2VjdGlvbj5kaXYuc2lkZWJhciB7XFxyXFxuICAgICAgICBtYXJnaW46IDAgM2VtIDAuNWVtIDFlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXHJcXG4gICAgLmNvbnRhaW5lciAuc2VjdGlvbj5kaXYuc2lkZWJhciB7XFxyXFxuICAgICAgICBtYXJnaW46IDAgMTFlbSAwLjVlbSAxZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcclxcbiAgICAuY29udGFpbmVyIC5zZWN0aW9uPmRpdi5zaWRlYmFyIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMCAxOGVtIDAuNWVtIDFlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5kaXYuRXhlY3V0aW9uVmlzdWFsaXplciB0YWJsZS52aXN1YWxpemVyIHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi5zbHRvb2x0aXAge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDEwMjA7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDExcHg7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0ycHg7XFxyXFxuICAgIGJvdHRvbTogMTIwJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0yZW07XFxyXFxufVxcclxcblxcclxcbi5zbHRvb2x0aXAgLnNsdG9vbHRpcC1hcnJvdyB7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcXHJcXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICMwMDAwMDA7XFxyXFxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5zbHRvb2x0aXAtaW5uZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xcclxcbiAgICBwYWRkaW5nOiAzcHggOHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tdG9vbHRpcCk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxudWwuZHJvcGRvd24tbWVudS5nbG9iYWx0b2Mge1xcclxcbiAgICBtYXgtaGVpZ2h0OiA3MDBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcblxcclxcbi5nbG9iYWx0b2Mgc3Bhbi5jYXB0aW9uLXRleHQge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBTdHlsZSBscCB0ZXh0YXJlYXMuICovXFxyXFxudGV4dGFyZWEjbHAtcmVzdWx0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTBlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLypcXHJcXG4gKiBIaWRlIG9ubHkgdmlzdWFsbHksIGJ1dCBoYXZlIGl0IGF2YWlsYWJsZSBmb3Igc2NyZWVuIHJlYWRlcnM6XFxyXFxuICogaHR0cHM6Ly9zbm9vay5jYS9hcmNoaXZlcy9odG1sX2FuZF9jc3MvaGlkaW5nLWNvbnRlbnQtZm9yLWFjY2Vzc2liaWxpdHlcXHJcXG4gKlxcclxcbiAqIDEuIEZvciBsb25nIGNvbnRlbnQsIGxpbmUgZmVlZHMgYXJlIG5vdCBpbnRlcnByZXRlZCBhcyBzcGFjZXMgYW5kIHNtYWxsIHdpZHRoXFxyXFxuICogICAgY2F1c2VzIGNvbnRlbnQgdG8gd3JhcCAxIHdvcmQgcGVyIGxpbmU6XFxyXFxuICogICAgaHR0cHM6Ly9tZWRpdW0uY29tL0BqZXNzZWJlYWNoL2Jld2FyZS1zbXVzaGVkLW9mZi1zY3JlZW4tYWNjZXNzaWJsZS10ZXh0LTU5NTJhNGMyY2JmZVxcclxcbiAqL1xcclxcblxcclxcbi52aXN1YWxseWhpZGRlbiB7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIG1hcmdpbjogLTFweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMXB4O1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICAvKiAxICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogRXh0ZW5kcyB0aGUgLnZpc3VhbGx5aGlkZGVuIGNsYXNzIHRvIGFsbG93IHRoZSBlbGVtZW50XFxyXFxuICogdG8gYmUgZm9jdXNhYmxlIHdoZW4gbmF2aWdhdGVkIHRvIHZpYSB0aGUga2V5Ym9hcmQ6XFxyXFxuICogaHR0cHM6Ly93d3cuZHJ1cGFsLm9yZy9ub2RlLzg5NzYzOFxcclxcbiAqL1xcclxcblxcclxcbi52aXN1YWxseWhpZGRlbi5mb2N1c2FibGU6YWN0aXZlLFxcclxcbi52aXN1YWxseWhpZGRlbi5mb2N1c2FibGU6Zm9jdXMge1xcclxcbiAgICBjbGlwOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJsb2NrcXVvdGUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI3NjcHJvZ3Jlc3Njb250YWluZXIge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jc3ViY2hhcHRlcnByb2dyZXNzPmRpdiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4jc3ViY2hhcHRlcnByb2dyZXNzPmRpdi5sb2dnZWRvdXQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5ydW5lc3RvbmVfY2FwdGlvbiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bmVzdG9uZV9jYXB0aW9uX2RpdmlkIHtcXHJcXG4gICAgb3BhY2l0eTogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4jcXVlc3Rpb25zIC5ydW5lc3RvbmVfY2FwdGlvbjpiZWZvcmUge1xcclxcbiAgICBjb3VudGVyLWluY3JlbWVudDogcnNjb21wb25lbnQ7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJQcm9ibGVtOiBcXFwiY291bnRlcihyc2NvbXBvbmVudCkgXFxcIiAtLSBcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJvZHlGb250KTtcXHJcXG59XFxyXFxuXFxyXFxuLmp1cHl0ZXJfY29udGFpbmVyIC5vdXRwdXQgIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmp1cHl0ZXJfY29udGFpbmVyIC5vdXRwdXQgdGQge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uanVweXRlcl9jb250YWluZXIgLm91dHB1dCB0aCB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi8qVGhlbWUgdG9nZ2xlKi9cXHJcXG4udGhlbWUtc3dpdGNoLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBlbSB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4udGhlbWUtc3dpdGNoIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBoZWlnaHQ6IDM0cHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDYwcHg7XFxyXFxufVxcclxcblxcclxcbi50aGVtZS1zd2l0Y2ggaW5wdXQge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyOmJlZm9yZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvdHRvbTogNHB4O1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgaGVpZ2h0OiAyNnB4O1xcclxcbiAgICBsZWZ0OiA0cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcclxcbiAgICB3aWR0aDogMjZweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Y2hlY2tlZCsuc2xpZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2YmI2YTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Y2hlY2tlZCsuc2xpZGVyOmJlZm9yZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci5yb3VuZCB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKkVuZCB0aGVtZSB0b2dnbGUqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4vY29tcGxldGVkLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fIGZyb20gXCIuL2FjdGl2ZS5wbmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVmFyaWFibGVzIGhvbGRpbmcgdGhlbWUgY29sb3JzICovXFxyXFxuOnJvb3Qge1xcclxcblxcdC0tbWVudTogI0ZGRkZGRjtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtdGhlbWU9XFxcImRhcmtcXFwiXSB7XFxyXFxuXFx0LS1tZW51OiAjMDAwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubXktaGlnaGxpZ2h0ZWQtdGV4dHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGOTk7XFxyXFxufVxcclxcbi5zb2NpYWwtaGlnaGxpZ2h0ZWQtdGV4dHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiNGRkNDQ0M7XFxyXFxufVxcclxcbi5oaWdobGlnaHQtb3B0aW9uLWJveHtcXHJcXG5cXHRwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG5cXHR0b3A6MHB4O1xcclxcblxcdGxlZnQ6MHB4O1xcclxcbn1cXHJcXG4uaGlnaGxpZ2h0LW9wdGlvbi1ib3ggbGl7IFxcclxcblxcdGhlaWdodDoyNHB4O1xcclxcbn1cXHJcXG4jY29udGludWUtcmVhZGluZ3tcXHJcXG5cXHRwYWRkaW5nLXRvcDoyMHB4O1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbiNjb250aW51ZS1yZWFkaW5nIGF7XFxyXFxuXFx0ZmxvYXQ6cmlnaHQ7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OjIwcHg7XFxyXFxufVxcclxcbmxpLmNvbXBsZXRlZFxcclxcbntcXHJcXG5saXN0LXN0eWxlLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbn1cXHJcXG5saS5hY3RpdmVcXHJcXG57XFxyXFxubGlzdC1zdHlsZS1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG59XFxyXFxuLmluZm9UZXh0Q29tcGxldGVke1xcclxcblxcdG1hcmdpbi1sZWZ0OjEwcHg7XFxyXFxuXFx0Zm9udC1zaXplOjAuOWVtO1xcclxcblxcdGNvbG9yOiMzZGM2ODI7XFxyXFxuXFx0ZGlzcGxheTpub25lO1xcclxcblxcdGZvbnQtc3R5bGU6aXRhbGljO1xcclxcblxcdG9wYWNpdHk6IDAuNztcXHJcXG59XFxyXFxuLmluZm9UZXh0QWN0aXZle1xcclxcblxcdG1hcmdpbi1sZWZ0OjEwcHg7XFxyXFxuXFx0Zm9udC1zaXplOjAuOWVtO1xcclxcblxcdGNvbG9yOiNmZjlmMTk7XFxyXFxuXFx0ZGlzcGxheTpub25lO1xcclxcblxcdGZvbnQtc3R5bGU6aXRhbGljO1xcclxcblxcdG9wYWNpdHk6IDAuNztcXHJcXG59XFxyXFxuLmRyb3Bkb3duLW1lbnV7XFxyXFxuXFx0YmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudSk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmUgb3V0c2lkZSBub25lO1xcclxcbiAgICBtYXJnaW46IDFweCAwIDA7XFxyXFxuICAgIG1pbi13aWR0aDogMTYwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDRweCAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTAwJTtcXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG59XFxyXFxuLmRyb3Bkb3duLW1lbnUgdWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBkaXNjIG91dHNpZGUgbm9uZTtcXHJcXG4gICAgbWFyZ2luOiAwIDAgOXB4IDI1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLWhpZ2hsaWdodHN7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6I0ZGRkY5OTtcXHJcXG59XFxyXFxuZGl2LmRvY3VtZW50d3JhcHBlciB7XFxyXFxuXFx0Ym9yZGVyIDogMCBub25lO1xcclxcbn1cXHJcXG5kaXYuYm9keXdyYXBwZXIge1xcclxcblxcdGJvcmRlci1yaWdodDogMCBub25lO1xcclxcbn1cXHJcXG5kaXYuc3BoaW54c2lkZWJhciB7XFxyXFxuXFx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjQ0NDQ0NDO1xcclxcblxcdHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG59XFxyXFxuLmJvZHk+LnNlY3Rpb24gLnNlY3Rpb257XFxyXFxuXFx0cGFkZGluZy10b3A6IDFweDtcXHJcXG59XFxyXFxuI2p1bXAtdG8tY2hhcHRlcntcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDE1ZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xcclxcbiAgICBwYWRkaW5nOiAwLjVlbTtcXHJcXG5cXHR3aWR0aDogODAlO1xcclxcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcblxcdG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuI25hdmlnYXRpb24tbGlua3N7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcXHJcXG5cXHRwYWRkaW5nOjEwcHg7XFxyXFxuXFx0bWFyZ2luOjEwcHg7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3J1bmVzdG9uZS9jb21tb24vY3NzL3VzZXItaGlnaGxpZ2h0cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsbUNBQW1DO0FBQ25DO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7QUFDQTtDQUNDLHdCQUF3QjtBQUN6QjtBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLE9BQU87Q0FDUCxRQUFRO0FBQ1Q7QUFDQTtDQUNDLFdBQVc7QUFDWjtBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGFBQWE7QUFDZDtBQUNBO0NBQ0MsV0FBVztDQUNYLGlCQUFpQjtBQUNsQjtBQUNBOztBQUVBLHlEQUFzQztBQUN0QztBQUNBOztBQUVBLHlEQUFtQztBQUNuQztBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixhQUFhO0NBQ2IsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQixZQUFZO0FBQ2I7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsYUFBYTtDQUNiLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsWUFBWTtBQUNiO0FBQ0E7Q0FDQyw0QkFBNEI7SUFDekIsNkJBQTZCO0lBQzdCLG9DQUFvQztJQUNwQyw4QkFBOEI7SUFDOUIseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYixXQUFXO0lBQ1gsT0FBTztJQUNQLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGFBQWE7QUFDakI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxvQkFBb0I7QUFDckI7QUFDQTtDQUNDLDhCQUE4QjtDQUM5QixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsY0FBYztDQUNqQixVQUFVO0NBQ1YsaUJBQWlCO0NBQ2pCLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MseUJBQXlCO0lBQ3RCLHlCQUF5QjtDQUM1QixZQUFZO0NBQ1osV0FBVztBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFZhcmlhYmxlcyBob2xkaW5nIHRoZW1lIGNvbG9ycyAqL1xcclxcbjpyb290IHtcXHJcXG5cXHQtLW1lbnU6ICNGRkZGRkY7XFxyXFxufVxcclxcblxcclxcbltkYXRhLXRoZW1lPVxcXCJkYXJrXFxcIl0ge1xcclxcblxcdC0tbWVudTogIzAwMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm15LWhpZ2hsaWdodGVkLXRleHR7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjojRkZGRjk5O1xcclxcbn1cXHJcXG4uc29jaWFsLWhpZ2hsaWdodGVkLXRleHR7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjojRkZDQ0NDO1xcclxcbn1cXHJcXG4uaGlnaGxpZ2h0LW9wdGlvbi1ib3h7XFxyXFxuXFx0cG9zaXRpb246YWJzb2x1dGU7XFxyXFxuXFx0dG9wOjBweDtcXHJcXG5cXHRsZWZ0OjBweDtcXHJcXG59XFxyXFxuLmhpZ2hsaWdodC1vcHRpb24tYm94IGxpeyBcXHJcXG5cXHRoZWlnaHQ6MjRweDtcXHJcXG59XFxyXFxuI2NvbnRpbnVlLXJlYWRpbmd7XFxyXFxuXFx0cGFkZGluZy10b3A6MjBweDtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4jY29udGludWUtcmVhZGluZyBhe1xcclxcblxcdGZsb2F0OnJpZ2h0O1xcclxcblxcdG1hcmdpbi1yaWdodDoyMHB4O1xcclxcbn1cXHJcXG5saS5jb21wbGV0ZWRcXHJcXG57XFxyXFxubGlzdC1zdHlsZS1pbWFnZTogdXJsKCdjb21wbGV0ZWQucG5nJyk7XFxyXFxufVxcclxcbmxpLmFjdGl2ZVxcclxcbntcXHJcXG5saXN0LXN0eWxlLWltYWdlOiB1cmwoJ2FjdGl2ZS5wbmcnKTtcXHJcXG59XFxyXFxuLmluZm9UZXh0Q29tcGxldGVke1xcclxcblxcdG1hcmdpbi1sZWZ0OjEwcHg7XFxyXFxuXFx0Zm9udC1zaXplOjAuOWVtO1xcclxcblxcdGNvbG9yOiMzZGM2ODI7XFxyXFxuXFx0ZGlzcGxheTpub25lO1xcclxcblxcdGZvbnQtc3R5bGU6aXRhbGljO1xcclxcblxcdG9wYWNpdHk6IDAuNztcXHJcXG59XFxyXFxuLmluZm9UZXh0QWN0aXZle1xcclxcblxcdG1hcmdpbi1sZWZ0OjEwcHg7XFxyXFxuXFx0Zm9udC1zaXplOjAuOWVtO1xcclxcblxcdGNvbG9yOiNmZjlmMTk7XFxyXFxuXFx0ZGlzcGxheTpub25lO1xcclxcblxcdGZvbnQtc3R5bGU6aXRhbGljO1xcclxcblxcdG9wYWNpdHk6IDAuNztcXHJcXG59XFxyXFxuLmRyb3Bkb3duLW1lbnV7XFxyXFxuXFx0YmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudSk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmUgb3V0c2lkZSBub25lO1xcclxcbiAgICBtYXJnaW46IDFweCAwIDA7XFxyXFxuICAgIG1pbi13aWR0aDogMTYwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDRweCAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTAwJTtcXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG59XFxyXFxuLmRyb3Bkb3duLW1lbnUgdWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBkaXNjIG91dHNpZGUgbm9uZTtcXHJcXG4gICAgbWFyZ2luOiAwIDAgOXB4IDI1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLWhpZ2hsaWdodHN7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6I0ZGRkY5OTtcXHJcXG59XFxyXFxuZGl2LmRvY3VtZW50d3JhcHBlciB7XFxyXFxuXFx0Ym9yZGVyIDogMCBub25lO1xcclxcbn1cXHJcXG5kaXYuYm9keXdyYXBwZXIge1xcclxcblxcdGJvcmRlci1yaWdodDogMCBub25lO1xcclxcbn1cXHJcXG5kaXYuc3BoaW54c2lkZWJhciB7XFxyXFxuXFx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjQ0NDQ0NDO1xcclxcblxcdHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG59XFxyXFxuLmJvZHk+LnNlY3Rpb24gLnNlY3Rpb257XFxyXFxuXFx0cGFkZGluZy10b3A6IDFweDtcXHJcXG59XFxyXFxuI2p1bXAtdG8tY2hhcHRlcntcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDE1ZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xcclxcbiAgICBwYWRkaW5nOiAwLjVlbTtcXHJcXG5cXHR3aWR0aDogODAlO1xcclxcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcblxcdG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuI25hdmlnYXRpb24tbGlua3N7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcXHJcXG5cXHRwYWRkaW5nOjEwcHg7XFxyXFxuXFx0bWFyZ2luOjEwcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tYXRyaXhlcV9jb250YWluZXIge1xcclxcbiAgcGFkZGluZzogNnB4IDZweCA2cHggNnB4O1xcclxcbiAgbWFyZ2luOiAwcHggMHB4IDZweCAwcHg7XFxyXFxufVxcclxcblxcclxcbnNwYW4ubWF0cml4X3RhYmxlIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICBib3JkZXItd2lkdGg6IDJweCAycHg7XFxyXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDBweCAxcHg7XFxyXFxuICBtYXJnaW46IDBweCAwcHggNHB4IDBweDtcXHJcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuLm1hdHJpeF9jb2x1bW4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gIHBhZGRpbmc6IDJweCA4cHggMnB4IDhweDtcXHJcXG4gIG1hcmdpbjogMHB4IDFweDtcXHJcXG4gIGJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbnNwYW4ubWF0cml4X2NvbHVtbiBkaXYge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IDFweDtcXHJcXG4gIHBhZGRpbmc6IDJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbnNwYW4ubWF0cml4X3RhYmxlIC5tYXRyaXhfY29sdW1uIHtcXHJcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuc3Bhbi5tYXRyaXhfdGFibGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICB3aWR0aDogODUlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IC0ycHg7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbjogMHB4IGF1dG87XFxyXFxufVxcclxcblxcclxcbnNwYW4ubWF0cml4X3RhYmxlOmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICB3aWR0aDogODUlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDJweDtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luOiAwcHggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuc3Bhbi5tYXRyaXhfY29sdW1uOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxyXFxuICB3aWR0aDogODUlO1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IC0ycHg7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuc3Bhbi5tYXRyaXhfY29sdW1uOmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxuICBoZWlnaHQ6IDJweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMnB4O1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbnNwYW4ubWF0cml4X3RhYmxlIHNwYW4ubWF0cml4X2NvbHVtbjpiZWZvcmUge1xcclxcbiAgaGVpZ2h0OiAwcHg7XFxyXFxufVxcclxcblxcclxcbnNwYW4ubWF0cml4X3RhYmxlIHNwYW4ubWF0cml4X2NvbHVtbjphZnRlciB7XFxyXFxuICBoZWlnaHQ6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuc3BhbiBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogMjRweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbnNwYW4ubWF0cml4X29wZXJhdG9yIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG4gIG1hcmdpbjogMHB4IDRweCAwcHggNHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbnNwYW4ubWF0cml4X2xhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcXHJcXG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDIwcHg7XFxyXFxuICBtYXJnaW46IDBweCAxcHg7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbi8qIENvbG9ycyBmb3IgbWF0cml4IGhpZ2hsaWdodGluZyAqL1xcclxcblxcclxcbi5saWdodGN5YW5Db2xvciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGN5YW47XFxyXFxufVxcclxcblxcclxcbi5saWdodGdyZXlDb2xvciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxyXFxufVxcclxcblxcclxcbi5wdXJwbGVDb2xvciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZCNUU4O1xcclxcbn1cXHJcXG5cXHJcXG4ueWVsbG93Q29sb3Ige1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZERkY5RDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcnVuZXN0b25lL21hdHJpeGVxL2Nzcy9tYXRyaXhlcS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUEsbUNBQW1DOztBQUVuQztFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWF0cml4ZXFfY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDZweCA2cHggNnB4IDZweDtcXHJcXG4gIG1hcmdpbjogMHB4IDBweCA2cHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuLm1hdHJpeF90YWJsZSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgYm9yZGVyLXdpZHRoOiAycHggMnB4O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwcHggMXB4O1xcclxcbiAgbWFyZ2luOiAwcHggMHB4IDRweCAwcHg7XFxyXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuc3Bhbi5tYXRyaXhfY29sdW1uIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICBwYWRkaW5nOiAycHggOHB4IDJweCA4cHg7XFxyXFxuICBtYXJnaW46IDBweCAxcHg7XFxyXFxuICBib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuLm1hdHJpeF9jb2x1bW4gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luOiAxcHg7XFxyXFxuICBwYWRkaW5nOiAycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuLm1hdHJpeF90YWJsZSAubWF0cml4X2NvbHVtbiB7XFxyXFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbnNwYW4ubWF0cml4X3RhYmxlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAtMnB4O1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IDBweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuLm1hdHJpeF90YWJsZTphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAycHg7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbjogMHB4IGF1dG87XFxyXFxufVxcclxcblxcclxcbnNwYW4ubWF0cml4X2NvbHVtbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIiBcXFwiO1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIGhlaWdodDogMnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAtMnB4O1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbnNwYW4ubWF0cml4X2NvbHVtbjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxyXFxuICB3aWR0aDogODUlO1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDJweDtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuLm1hdHJpeF90YWJsZSBzcGFuLm1hdHJpeF9jb2x1bW46YmVmb3JlIHtcXHJcXG4gIGhlaWdodDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuLm1hdHJpeF90YWJsZSBzcGFuLm1hdHJpeF9jb2x1bW46YWZ0ZXIge1xcclxcbiAgaGVpZ2h0OiAwcHg7XFxyXFxufVxcclxcblxcclxcbnNwYW4gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBoZWlnaHQ6IDI0cHg7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuLm1hdHJpeF9vcGVyYXRvciB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XFxyXFxuICBwYWRkaW5nOiAwcHg7XFxyXFxuICBtYXJnaW46IDBweCA0cHggMHB4IDRweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuLm1hdHJpeF9sYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XFxyXFxuICBwYWRkaW5nOiAwcHggMHB4IDBweCAyMHB4O1xcclxcbiAgbWFyZ2luOiAwcHggMXB4O1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb2xvcnMgZm9yIG1hdHJpeCBoaWdobGlnaHRpbmcgKi9cXHJcXG5cXHJcXG4ubGlnaHRjeWFuQ29sb3Ige1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjeWFuO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlnaHRncmV5Q29sb3Ige1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4ucHVycGxlQ29sb3Ige1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RGQjVFODtcXHJcXG59XFxyXFxuXFxyXFxuLnllbGxvd0NvbG9yIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGREZGOUQ7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKioqKioqKioqKioqKioqKioqKiogQ29sb3VyIHJlZmVyZW5jZSBjaGFydCoqKioqKioqKioqKioqKipcXHJcXG5lbGVtZW10ICoqKioqKioqKiBwcm9wZXJ0eSAqKioqKioqKiogY29sb3VyICoqKioqKioqXFxyXFxuXFxyXFxud2ViZ2xfY29udGFpbmVyICBiYWNrZ3JvdW5kLWNvbG9yICAgICNmY2Y4ZTNcXHJcXG5cXHJcXG4qL1xcclxcblxcclxcbi8qIE1ham9yIHNlY3Rpb25zICovXFxyXFxuLndlYmdsX2NvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF9jbWRzIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX3JvdzIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMHB4IDRweCAwcHggNHB4O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBoZWlnaHQ6IDU1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2ViZ2xfZWRpdG9ycyB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ud2ViZ2xfY2FudmFzIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF9vdXRwdXQge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbiAgbWFyZ2luLXRvcDogNnB4O1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi8qIERldGFpbHMgd2l0aGluIGVhY2ggc2VjdGlvbiAqL1xcclxcbi8qIFRhYmJlZCB0aXRsZXMsIHVsIGhvcml6b250YWwgbGlzdCAqL1xcclxcbi53ZWJnbF9uYXZfdGFicyB7XFxyXFxuICBoZWlnaHQ6IDMxcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbiAgcGFkZGluZzogNnB4IDBweCAwcHggMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGQ0NCODtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2ZiZWVkNTtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF9uYXZfdGFicyBsaSB7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xcclxcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA0cHg7XFxyXFxuICBwYWRkaW5nOiA0cHggMXB4IDRweCA0cHg7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFNkUyQ0M7XFxyXFxuICBmb250LXNpemU6IDlwdDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX25hdl90YWJzIGxpID4gYSB7XFxyXFxuICBwYWRkaW5nOiA4cHggOHB4IDhweCA4cHg7XFxyXFxuICBjb2xvcjogIzU1NTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX25hdl90YWJzID4gbGkgPiBhOmhvdmVyIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2I0YjE5ZDtcXHJcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF9uYXZfdGFicyBsaS5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGxpc3Qtc3R5bGUtaW1hZ2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIFdlYmdsIGVkaXRvcnMgKi9cXHJcXG4ud2ViZ2xfdGFiX2NvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjbGVhcjogYm90aDtcXHJcXG4gIG1hcmdpbjogMHB4IDBweCAyMHB4IDBweDtcXHJcXG4gIGJvcmRlcjogMHB4O1xcclxcbiAgY29sb3I6ICNjMDk4NTM7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX3RhYl9jb250ZW50LmFjdGl2ZSB7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2ViZ2xfdGFiX2NvbnRlbnQgPiAqIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgLypcXHRwb3NpdGlvbjpyZWxhdGl2ZTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX3RhYl9jb250ZW50IC5jbGVhcmZpeCB7XFxyXFxuICBwb3NpdGlvbjogaW5pdGlhbDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX3RhYl9lZGl0b3Ige1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjbGVhcjogYm90aDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggNHB4IDEwcHggNHB4O1xcclxcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHggMHB4O1xcclxcbiAgYm9yZGVyOiAwcHg7XFxyXFxuICBjb2xvcjogI2MwOTg1MztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7XFxyXFxufVxcclxcblxcclxcbi8qIHNwYW4gdGhhdCBjb250YWlucyB0aGUgdGFiYmVkIHRleHQgZWRpdG9ycyAqL1xcclxcbi53ZWJnbF9jb2RlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF90YWJfY29udGVudHNfdGV4dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNsZWFyOiBib3RoO1xcclxcbiAgcGFkZGluZzogMTBweCA0cHggMTBweCA0cHg7XFxyXFxuICBtYXJnaW46IDBweCAwcHggMjBweCAwcHg7XFxyXFxuICBib3JkZXI6IDBweDtcXHJcXG4gIGNvbG9yOiAjYzA5ODUzO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjhlMztcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF9lcnJvck1lc3NhZ2VzIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF93YXJuaW5nTWVzc2FnZXMge1xcclxcbiAgY29sb3I6IHJnYigxNzAsIDM0LCAxNjQpO1xcclxcbn1cXHJcXG5cXHJcXG4ud2ViZ2xfaW5mb01lc3NhZ2VzIHtcXHJcXG4gIGNvbG9yOiByZ2IoMjQsIDE0NCwgNjQpO1xcclxcbn1cXHJcXG5cXHJcXG4ud2ViZ2xfb3V0cHV0X2RpdiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMnB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDRweDtcXHJcXG4gIHBhZGRpbmctdG9wOiA0cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBoZWlnaHQ6IDE0ZW07XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4ud2ViZ2xfZWRpdG9yX2hpZ2hsaWdodCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFOyAvKiB2ZXJ5IGxpZ2h0IGdyZXkgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogVG8gYWx3YXlzIHNob3cgdGhlIHNjcm9sbCBiYXIgaW4gYSBkaXYgKi9cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICB3aWR0aDogN3B4O1xcclxcbn1cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC41KTtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4ud2ViZ2xfYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBhZGRpbmc6IDNweCA2cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdGhpc3RsZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtby11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ud2ViZ2xfY2hlY2tib3gge1xcclxcbn1cXHJcXG5cXHJcXG4ud2ViZ2xfdGFiYmVkX2VkaXRvciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDlwdDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbnZhczNEIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uQ29kZU1pcnJvci53ZWJnbC1kZWZhdWx0IHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxyXFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiA4cHQ7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5idG4ud2ViZ2wtZGVmYXVsdCB7XFxyXFxuICBmb250LXNpemU6IDhwdDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcnVuZXN0b25lL3dlYmdsZGVtby9jc3Mvd2ViZ2xpbnRlcmFjdGl2ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7O0NBS0M7O0FBRUQsbUJBQW1CO0FBQ25CO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUEsZ0NBQWdDO0FBQ2hDLHNDQUFzQztBQUN0QztFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBLCtDQUErQztBQUMvQztFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUIsRUFBRSxvQkFBb0I7QUFDakQ7O0FBRUEsMkNBQTJDO0FBQzNDO0lBQ0ksd0JBQXdCO0lBQ3hCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxnREFBZ0Q7QUFDcEQ7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqKioqKioqKioqKioqKioqKioqKiBDb2xvdXIgcmVmZXJlbmNlIGNoYXJ0KioqKioqKioqKioqKioqKlxcclxcbmVsZW1lbXQgKioqKioqKioqIHByb3BlcnR5ICoqKioqKioqKiBjb2xvdXIgKioqKioqKipcXHJcXG5cXHJcXG53ZWJnbF9jb250YWluZXIgIGJhY2tncm91bmQtY29sb3IgICAgI2ZjZjhlM1xcclxcblxcclxcbiovXFxyXFxuXFxyXFxuLyogTWFqb3Igc2VjdGlvbnMgKi9cXHJcXG4ud2ViZ2xfY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX2NtZHMge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2ViZ2xfcm93MiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwcHggNHB4IDBweCA0cHg7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGhlaWdodDogNTUwcHg7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF9lZGl0b3JzIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF9jYW52YXMge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX291dHB1dCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiA0cHg7XFxyXFxuICBtYXJnaW4tdG9wOiA2cHg7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRGV0YWlscyB3aXRoaW4gZWFjaCBzZWN0aW9uICovXFxyXFxuLyogVGFiYmVkIHRpdGxlcywgdWwgaG9yaXpvbnRhbCBsaXN0ICovXFxyXFxuLndlYmdsX25hdl90YWJzIHtcXHJcXG4gIGhlaWdodDogMzFweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiAwcHg7XFxyXFxuICBwYWRkaW5nOiA2cHggMHB4IDBweCAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZDQ0I4O1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZmJlZWQ1O1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX25hdl90YWJzIGxpIHtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XFxyXFxuICBtYXJnaW46IDBweCAwcHggMHB4IDRweDtcXHJcXG4gIHBhZGRpbmc6IDRweCAxcHggNHB4IDRweDtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U2RTJDQztcXHJcXG4gIGZvbnQtc2l6ZTogOXB0O1xcclxcbn1cXHJcXG5cXHJcXG4ud2ViZ2xfbmF2X3RhYnMgbGkgPiBhIHtcXHJcXG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDhweDtcXHJcXG4gIGNvbG9yOiAjNTU1O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ud2ViZ2xfbmF2X3RhYnMgPiBsaSA+IGE6aG92ZXIge1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjYjRiMTlkO1xcclxcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX25hdl90YWJzIGxpLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgbGlzdC1zdHlsZS1pbWFnZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogV2ViZ2wgZWRpdG9ycyAqL1xcclxcbi53ZWJnbF90YWJfY29udGVudCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNsZWFyOiBib3RoO1xcclxcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHggMHB4O1xcclxcbiAgYm9yZGVyOiAwcHg7XFxyXFxuICBjb2xvcjogI2MwOTg1MztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ud2ViZ2xfdGFiX2NvbnRlbnQuYWN0aXZlIHtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF90YWJfY29udGVudCA+ICoge1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAvKlxcdHBvc2l0aW9uOnJlbGF0aXZlOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ud2ViZ2xfdGFiX2NvbnRlbnQgLmNsZWFyZml4IHtcXHJcXG4gIHBvc2l0aW9uOiBpbml0aWFsO1xcclxcbn1cXHJcXG5cXHJcXG4ud2ViZ2xfdGFiX2VkaXRvciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNsZWFyOiBib3RoO1xcclxcbiAgcGFkZGluZzogMTBweCA0cHggMTBweCA0cHg7XFxyXFxuICBtYXJnaW46IDBweCAwcHggMjBweCAwcHg7XFxyXFxuICBib3JkZXI6IDBweDtcXHJcXG4gIGNvbG9yOiAjYzA5ODUzO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjhlMztcXHJcXG59XFxyXFxuXFxyXFxuLyogc3BhbiB0aGF0IGNvbnRhaW5zIHRoZSB0YWJiZWQgdGV4dCBlZGl0b3JzICovXFxyXFxuLndlYmdsX2NvZGUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX3RhYl9jb250ZW50c190ZXh0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY2xlYXI6IGJvdGg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDRweCAxMHB4IDRweDtcXHJcXG4gIG1hcmdpbjogMHB4IDBweCAyMHB4IDBweDtcXHJcXG4gIGJvcmRlcjogMHB4O1xcclxcbiAgY29sb3I6ICNjMDk4NTM7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX2Vycm9yTWVzc2FnZXMge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX3dhcm5pbmdNZXNzYWdlcyB7XFxyXFxuICBjb2xvcjogcmdiKDE3MCwgMzQsIDE2NCk7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF9pbmZvTWVzc2FnZXMge1xcclxcbiAgY29sb3I6IHJnYigyNCwgMTQ0LCA2NCk7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF9vdXRwdXRfZGl2IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiAycHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcclxcbiAgcGFkZGluZy10b3A6IDRweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGhlaWdodDogMTRlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF9lZGl0b3JfaGlnaGxpZ2h0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7IC8qIHZlcnkgbGlnaHQgZ3JleSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUbyBhbHdheXMgc2hvdyB0aGUgc2Nyb2xsIGJhciBpbiBhIGRpdiAqL1xcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiA3cHg7XFxyXFxufVxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgyNTUsMjU1LDI1NSwuNSk7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF9idG4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogM3B4IDZweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGlzdGxlO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF9jaGVja2JveCB7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF90YWJiZWRfZWRpdG9yIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogOXB0O1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FudmFzM0Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5Db2RlTWlycm9yLndlYmdsLWRlZmF1bHQge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDhwdDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmJ0bi53ZWJnbC1kZWZhdWx0IHtcXHJcXG4gIGZvbnQtc2l6ZTogOHB0O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcmVzZW50ZXJfbW9kZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3J1bmVzdG9uZS1jdXN0b20tc3BoaW54LWJvb3RzdHJhcC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3VzZXItaGlnaGxpZ2h0cy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21hdHJpeGVxLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2ViZ2xpbnRlcmFjdGl2ZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvKipcclxuICpcclxuICogVXNlcjogYm1pbGxlclxyXG4gKiBPcmlnaW5hbDogMjAxMS0wNC0yMFxyXG4gKiBEYXRlOiAyMDE5LTA2LTE0XHJcbiAqIFRpbWU6IDI6MDEgUE1cclxuICogVGhpcyBjaGFuZ2UgbWFya3MgdGhlIGJlZ2lubmluZyBvZiB2ZXJzaW9uIDQuMCBvZiB0aGUgcnVuZXN0b25lIGNvbXBvbmVudHNcclxuICogTG9naW4vbG9nb3V0IGlzIG5vIGxvbmdlciBoYW5kbGVkIHRocm91Z2ggamF2YXNjcmlwdCBidXQgcmF0aGVyIHNlcnZlciBzaWRlLlxyXG4gKiBNYW55IG9mIHRoZSBjb21wb25lbnRzIGRlcGVuZCBvbiB0aGUgcnVuZXN0b25lOmxvZ2luIGV2ZW50IHNvIHdlIHdpbGwga2VlcCB0aGF0XHJcbiAqIGZvciBub3cgdG8ga2VlcCB0aGUgY2h1cm4gZmFpcmx5IG1pbmltYWwuXHJcbiAqL1xyXG5cclxuLypcclxuXHJcbiBDb3B5cmlnaHQgKEMpIDIwMTEgIEJyYWQgTWlsbGVyICBib25lbGFrZUBnbWFpbC5jb21cclxuXHJcbiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxyXG4gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcclxuIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXHJcbiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxyXG5cclxuIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxyXG4gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcclxuIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcclxuIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcblxyXG4gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcclxuIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxyXG5cclxuICovXHJcblxyXG4vL1xyXG4vLyBDaGV2cm9uIGZ1bmN0aW9ucyAtIE11c3QgY29ycmVzcG9uZCB3aXRoIHdpZHRoIGluIHJ1bmVzdG9uZS1jdXN0b20tc3BoaW54LWJvb3RzdHJhcC5jc3NcclxuLy9cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcmVzaXplV2luZG93ID0gZmFsc2U7XHJcbiAgICB2YXIgcmVzaXplV2lkdGggPSA2MDA7XHJcbiAgICAkKHdpbmRvdylcclxuICAgICAgICAub24oXCJyZXNpemVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSByZXNpemVXaWR0aCAmJiByZXNpemVXaW5kb3cgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHJlc2l6ZVdpbmRvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9wUHJldiA9ICQoXCIjcmVsYXRpb25zLXByZXZcIilcclxuICAgICAgICAgICAgICAgICAgICAuY2xvbmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiaWRcIiwgXCJ0b3AtcmVsYXRpb25zLXByZXZcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9wTmV4dCA9ICQoXCIjcmVsYXRpb25zLW5leHRcIilcclxuICAgICAgICAgICAgICAgICAgICAuY2xvbmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiaWRcIiwgXCJ0b3AtcmVsYXRpb25zLW5leHRcIik7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3JlbGF0aW9ucy1wcmV2LCAjcmVsYXRpb25zLW5leHRcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJvdHRvbVByZXYgPSB0b3BQcmV2XHJcbiAgICAgICAgICAgICAgICAgICAgLmNsb25lKClcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcImlkXCIsIFwiYm90dG9tLXJlbGF0aW9ucy1wcmV2XCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJvdHRvbU5leHQgPSB0b3BOZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgLmNsb25lKClcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcImlkXCIsIFwiYm90dG9tLXJlbGF0aW9ucy1uZXh0XCIpO1xyXG4gICAgICAgICAgICAgICAgJChcImRpdiNtYWluLWNvbnRlbnQgPiBkaXZcIikucHJlcGVuZCh0b3BQcmV2LCB0b3BOZXh0KTtcclxuICAgICAgICAgICAgICAgICQoXCIjdG9wLXJlbGF0aW9ucy1wcmV2LCAjdG9wLXJlbGF0aW9ucy1uZXh0XCIpLndyYXBBbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgJzx1bCBpZD1cInRvcC1yZWxhdGlvbnMtY29uc29sZVwiPjwvdWw+J1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICQoXCJkaXYjbWFpbi1jb250ZW50ID4gZGl2XCIpLmFwcGVuZChib3R0b21QcmV2LCBib3R0b21OZXh0KTtcclxuICAgICAgICAgICAgICAgICQoXCIjYm90dG9tLXJlbGF0aW9ucy1wcmV2LCAjYm90dG9tLXJlbGF0aW9ucy1uZXh0XCIpLndyYXBBbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgJzx1bCBpZD1cImJvdHRvbS1yZWxhdGlvbnMtY29uc29sZVwiPjwvdWw+J1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPj0gcmVzaXplV2lkdGggKyAxICYmIHJlc2l6ZVdpbmRvdyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXNpemVXaW5kb3cgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICQoXCIjdG9wLXJlbGF0aW9ucy1jb25zb2xlLCAjYm90dG9tLXJlbGF0aW9ucy1jb25zb2xlXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNyZWxhdGlvbnMtcHJldiwgI3JlbGF0aW9ucy1uZXh0XCIpLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnJlc2l6ZSgpO1xyXG59KTtcclxuXHJcbi8vXHJcbi8vIFBhZ2UgZGVjb3JhdGlvbiBmdW5jdGlvbnNcclxuLy9cclxuXHJcbmZ1bmN0aW9uIGFkZFJlYWRpbmdMaXN0KCkge1xyXG4gICAgaWYgKGVCb29rQ29uZmlnLnJlYWRpbmdzKSB7XHJcbiAgICAgICAgdmFyIGwsIG54dCwgcGF0aF9wYXJ0cywgbnh0X2xpbms7XHJcbiAgICAgICAgbGV0IGN1cl9wYXRoX3BhcnRzID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcclxuICAgICAgICBsZXQgbmFtZSA9XHJcbiAgICAgICAgICAgIGN1cl9wYXRoX3BhcnRzW2N1cl9wYXRoX3BhcnRzLmxlbmd0aCAtIDJdICtcclxuICAgICAgICAgICAgXCIvXCIgK1xyXG4gICAgICAgICAgICBjdXJfcGF0aF9wYXJ0c1tjdXJfcGF0aF9wYXJ0cy5sZW5ndGggLSAxXTtcclxuICAgICAgICBsZXQgcG9zaXRpb24gPSBlQm9va0NvbmZpZy5yZWFkaW5ncy5pbmRleE9mKG5hbWUpO1xyXG4gICAgICAgIGxldCBudW1fcmVhZGluZ3MgPSBlQm9va0NvbmZpZy5yZWFkaW5ncy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKHBvc2l0aW9uID09IGVCb29rQ29uZmlnLnJlYWRpbmdzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgLy8gbm8gbW9yZSByZWFkaW5nc1xyXG4gICAgICAgICAgICBsID0gJChcIjxkaXYgLz5cIiwge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogYEZpbmlzaGVkIHJlYWRpbmcgYXNzaWdubWVudC4gUGFnZSAke251bV9yZWFkaW5nc30gb2YgJHtudW1fcmVhZGluZ3N9LmAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPj0gMCkge1xyXG4gICAgICAgICAgICAvLyBnZXQgbmV4dCBuYW1lXHJcbiAgICAgICAgICAgIG54dCA9IGVCb29rQ29uZmlnLnJlYWRpbmdzW3Bvc2l0aW9uICsgMV07XHJcbiAgICAgICAgICAgIHBhdGhfcGFydHMgPSBjdXJfcGF0aF9wYXJ0cy5zbGljZSgwLCBjdXJfcGF0aF9wYXJ0cy5sZW5ndGggLSAyKTtcclxuICAgICAgICAgICAgcGF0aF9wYXJ0cy5wdXNoKG54dCk7XHJcbiAgICAgICAgICAgIG54dF9saW5rID0gcGF0aF9wYXJ0cy5qb2luKFwiL1wiKTtcclxuICAgICAgICAgICAgbCA9ICQoXCI8YSAvPlwiLCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImxpbmtcIixcclxuICAgICAgICAgICAgICAgIGNsYXNzOiBcImJ0biBidG4tbGcgJyArICdidXR0b25Db25maXJtQ29tcGxldGlvbidcIixcclxuICAgICAgICAgICAgICAgIGhyZWY6IG54dF9saW5rLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogYENvbnRpbnVlIHRvIHBhZ2UgJHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiArIDJcclxuICAgICAgICAgICAgICAgIH0gb2YgJHtudW1fcmVhZGluZ3N9IGluIHRoZSByZWFkaW5nIGFzc2lnbm1lbnQuYCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbCA9ICQoXCI8ZGl2IC8+XCIsIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgXCJUaGlzIHBhZ2UgaXMgbm90IHBhcnQgb2YgdGhlIGxhc3QgcmVhZGluZyBhc3NpZ25tZW50IHlvdSB2aXNpdGVkLlwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNtYWluLWNvbnRlbnRcIikuYXBwZW5kKGwpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0aW1lZFJlZnJlc2goKSB7XHJcbiAgICB2YXIgdGltZW91dFBlcmlvZCA9IDkwMDAwMDsgLy8gNzUgbWludXRlc1xyXG4gICAgJChkb2N1bWVudCkuYmluZChcImlkbGUuaWRsZVRpbWVyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBBZnRlciB0aW1lb3V0IHBlcmlvZCBzZW5kIHRoZSB1c2VyIGJhY2sgdG8gdGhlIGluZGV4LiAgVGhpcyB3aWxsIGZvcmNlIGEgbG9naW5cclxuICAgICAgICAvLyBpZiBuZWVkZWQgd2hlbiB0aGV5IHdhbnQgdG8gZ28gdG8gYSBwYXJ0aWN1bGFyIHBhZ2UuICBUaGlzIG1heSBub3QgYmUgcGVyZmVjdFxyXG4gICAgICAgIC8vIGJ1dCBpdHMgYW4gZWFzeSB3YXkgdG8gbWFrZSBzdXJlIGxhcHRvcCB1c2VycyBhcmUgcHJvcGVybHkgbG9nZ2VkIGluIHdoZW4gdGhleVxyXG4gICAgICAgIC8vIHRha2UgcXVpenplcyBhbmQgc2F2ZSBzdHVmZi5cclxuICAgICAgICBpZiAobG9jYXRpb24uaHJlZi5pbmRleE9mKFwiaW5kZXguaHRtbFwiKSA8IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJZGxlIHRpbWVyIC0gXCIgKyBsb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPVxyXG4gICAgICAgICAgICAgICAgZUJvb2tDb25maWcuYXBwICtcclxuICAgICAgICAgICAgICAgIFwiL2RlZmF1bHQvdXNlci9sb2dpbj9fbmV4dD1cIiArXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSArXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5zZWFyY2g7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkLmlkbGVUaW1lcih0aW1lb3V0UGVyaW9kKTtcclxufVxyXG5cclxuY2xhc3MgUGFnZVByb2dyZXNzQmFyIHtcclxuICAgIGNvbnN0cnVjdG9yKGFjdERpY3QpIHtcclxuICAgICAgICB0aGlzLnBvc3NpYmxlID0gMDtcclxuICAgICAgICB0aGlzLnRvdGFsID0gMTtcclxuICAgICAgICBpZiAoYWN0RGljdCAmJiBPYmplY3Qua2V5cyhhY3REaWN0KS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdGllcyA9IGFjdERpY3Q7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGFjdGl2aXRpZXMgPSB7IHBhZ2U6IDAgfTtcclxuICAgICAgICAgICAgJChcIi5ydW5lc3RvbmVcIikuZWFjaChmdW5jdGlvbiAoaWR4LCBlKSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpdml0aWVzW2UuZmlyc3RFbGVtZW50Q2hpbGQuaWRdID0gMDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdGllcyA9IGFjdGl2aXRpZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUHJvZ3Jlc3MoKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5tYXRjaChcclxuICAgICAgICAgICAgICAgIC8uKihpbmRleC5odG1sfHRvY3RyZWUuaHRtbHxFeGVyY2lzZXMuaHRtbHxHbG9zc2FyeS5odG1sfHNlYXJjaC5odG1sKSQvaVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICQoXCIjc2Nwcm9ncmVzc2NvbnRhaW5lclwiKS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVuZGVyUHJvZ3Jlc3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVQcm9ncmVzcygpIHtcclxuICAgICAgICBmb3IgKGxldCBrIGluIHRoaXMuYWN0aXZpdGllcykge1xyXG4gICAgICAgICAgICBpZiAoayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3NpYmxlKys7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3Rpdml0aWVzW2tdID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWwrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQcm9ncmVzcygpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSAwO1xyXG4gICAgICAgICQoXCIjc2Nwcm9ncmVzc3RvdGFsXCIpLnRleHQodGhpcy50b3RhbCk7XHJcbiAgICAgICAgJChcIiNzY3Byb2dyZXNzcG9zc1wiKS50ZXh0KHRoaXMucG9zc2libGUpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gKDEwMCAqIHRoaXMudG90YWwpIC8gdGhpcy5wb3NzaWJsZTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNzdWJjaGFwdGVycHJvZ3Jlc3NcIikucHJvZ3Jlc3NiYXIoe1xyXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCFlQm9va0NvbmZpZy5pc0xvZ2dlZEluKSB7XHJcbiAgICAgICAgICAgICQoXCIjc3ViY2hhcHRlcnByb2dyZXNzPmRpdlwiKS5hZGRDbGFzcyhcImxvZ2dlZG91dFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUHJvZ3Jlc3MoZGl2X2lkKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzW2Rpdl9pZF0rKztcclxuICAgICAgICAvLyBPbmx5IHVwZGF0ZSB0aGUgcHJvZ3Jlc3MgYmFyIG9uIHRoZSBmaXJzdCBpbnRlcmFjdGlvbiB3aXRoIGFuIG9iamVjdC5cclxuICAgICAgICBpZiAodGhpcy5hY3Rpdml0aWVzW2Rpdl9pZF0gPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy50b3RhbCsrO1xyXG4gICAgICAgICAgICBsZXQgdmFsID0gKDEwMCAqIHRoaXMudG90YWwpIC8gdGhpcy5wb3NzaWJsZTtcclxuICAgICAgICAgICAgJChcIiNzY3Byb2dyZXNzdG90YWxcIikudGV4dCh0aGlzLnRvdGFsKTtcclxuICAgICAgICAgICAgJChcIiNzY3Byb2dyZXNzcG9zc1wiKS50ZXh0KHRoaXMucG9zc2libGUpO1xyXG4gICAgICAgICAgICAkKFwiI3N1YmNoYXB0ZXJwcm9ncmVzc1wiKS5wcm9ncmVzc2JhcihcIm9wdGlvblwiLCBcInZhbHVlXCIsIHZhbCk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHZhbCA9PSAxMDAuMCAmJlxyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wbGV0aW9uQnV0dG9uXCIpLnRleHQoKS50b0xvd2VyQ2FzZSgpID09PVxyXG4gICAgICAgICAgICAgICAgICAgIFwibWFyayBhcyBjb21wbGV0ZWRcIlxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcGxldGlvbkJ1dHRvblwiKS5jbGljaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIHBhZ2VQcm9ncmVzc1RyYWNrZXIgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVBhZ2VTZXR1cCgpIHtcclxuICAgIHZhciBtZXNzO1xyXG4gICAgaWYgKGVCb29rQ29uZmlnLnVzZVJ1bmVzdG9uZVNlcnZpY2VzKSB7XHJcbiAgICAgICAgalF1ZXJ5LmdldChlQm9va0NvbmZpZy5hamF4VVJMICsgXCJzZXRfdHpfb2Zmc2V0XCIsIHtcclxuICAgICAgICAgICAgdGltZXpvbmVvZmZzZXQ6IG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAvIDYwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlQm9va0NvbmZpZy5pc0xvZ2dlZEluKSB7XHJcbiAgICAgICAgbWVzcyA9IGB1c2VybmFtZTogJHtlQm9va0NvbmZpZy51c2VybmFtZX1gO1xyXG4gICAgICAgIGlmICghZUJvb2tDb25maWcuaXNJbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgICAgICQoXCIjaXBfZHJvcGRvd25fbGlua1wiKS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChkb2N1bWVudCkudHJpZ2dlcihcInJ1bmVzdG9uZTpsb2dpblwiKTtcclxuICAgICAgICBhZGRSZWFkaW5nTGlzdCgpO1xyXG4gICAgICAgIHRpbWVkUmVmcmVzaCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzID0gXCJOb3QgbG9nZ2VkIGluXCI7XHJcbiAgICAgICAgJChkb2N1bWVudCkudHJpZ2dlcihcInJ1bmVzdG9uZTpsb2dvdXRcIik7XHJcbiAgICB9XHJcbiAgICAkKFwiLmxvZ2dlZGludXNlclwiKS5odG1sKG1lc3MpO1xyXG5cclxuICAgIHBhZ2VQcm9ncmVzc1RyYWNrZXIgPSBuZXcgUGFnZVByb2dyZXNzQmFyKGVCb29rQ29uZmlnLmFjdGl2aXRpZXMpO1xyXG4gICAgbm90aWZ5UnVuZXN0b25lQ29tcG9uZW50cygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXR1cE5hdmJhckxvZ2dlZEluKCkge1xyXG4gICAgJChcIiNwcm9maWxlbGlua1wiKS5zaG93KCk7XHJcbiAgICAkKFwiI3Bhc3N3b3JkbGlua1wiKS5zaG93KCk7XHJcbiAgICAkKFwiI3JlZ2lzdGVybGlua1wiKS5oaWRlKCk7XHJcbiAgICAkKFwibGkubG9naW5vdXRcIikuaHRtbChcclxuICAgICAgICAnPGEgaHJlZj1cIicgKyBlQm9va0NvbmZpZy5hcHAgKyAnL2RlZmF1bHQvdXNlci9sb2dvdXRcIj5Mb2cgT3V0PC9hPidcclxuICAgICk7XHJcbn1cclxuJChkb2N1bWVudCkuYmluZChcInJ1bmVzdG9uZTpsb2dpblwiLCBzZXR1cE5hdmJhckxvZ2dlZEluKTtcclxuXHJcbmZ1bmN0aW9uIHNldHVwTmF2YmFyTG9nZ2VkT3V0KCkge1xyXG4gICAgaWYgKGVCb29rQ29uZmlnLnVzZVJ1bmVzdG9uZVNlcnZpY2VzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXR1cCBuYXZiYXIgZm9yIGxvZ2dlZCBvdXRcIik7XHJcbiAgICAgICAgJChcIiNyZWdpc3RlcmxpbmtcIikuc2hvdygpO1xyXG4gICAgICAgICQoXCIjcHJvZmlsZWxpbmtcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIjcGFzc3dvcmRsaW5rXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiI2lwX2Ryb3Bkb3duX2xpbmtcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCJsaS5sb2dpbm91dFwiKS5odG1sKFxyXG4gICAgICAgICAgICAnPGEgaHJlZj1cIicgKyBlQm9va0NvbmZpZy5hcHAgKyAnL2RlZmF1bHQvdXNlci9sb2dpblwiPkxvZ2luPC9hPidcclxuICAgICAgICApO1xyXG4gICAgICAgICQoXCIuZm9vdGVyXCIpLmh0bWwoXCJ1c2VyIG5vdCBsb2dnZWQgaW5cIik7XHJcbiAgICB9XHJcbn1cclxuJChkb2N1bWVudCkuYmluZChcInJ1bmVzdG9uZTpsb2dvdXRcIiwgc2V0dXBOYXZiYXJMb2dnZWRPdXQpO1xyXG5cclxuZnVuY3Rpb24gbm90aWZ5UnVuZXN0b25lQ29tcG9uZW50cygpIHtcclxuICAgIC8vIFJ1bmVzdG9uZSBjb21wb25lbnRzIHdhaXQgdW50aWwgbG9naW4gcHJvY2VzcyBpcyBvdmVyIHRvIGxvYWQgY29tcG9uZW50cyBiZWNhdXNlIG9mIHN0b3JhZ2UgaXNzdWVzLiBUaGlzIHRyaWdnZXJzIHRoZSBgZHluYW1pYyBpbXBvcnQgbWFjaGluZXJ5YCwgd2hpY2ggdGhlbiBzZW5kcyB0aGUgbG9naW4gY29tcGxldGUgc2lnbmFsIHdoZW4gdGhpcyBhbmQgYWxsIGR5bmFtaWMgaW1wb3J0cyBhcmUgZmluaXNoZWQuXHJcbiAgICAkKGRvY3VtZW50KS50cmlnZ2VyKFwicnVuZXN0b25lOnByZS1sb2dpbi1jb21wbGV0ZVwiKTtcclxufVxyXG5cclxuLy8gaW5pdGlhbGl6ZSBzdHVmZlxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoZUJvb2tDb25maWcpIHtcclxuICAgICAgICBoYW5kbGVQYWdlU2V0dXAoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBlQm9va0NvbmZpZyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgIFwiZUJvb2tDb25maWcgaXMgbm90IGRlZmluZWQuICBUaGlzIHBhZ2UgbXVzdCBub3QgYmUgc2V0IHVwIGZvciBSdW5lc3RvbmVcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG4vLyBtaXNjIHN0dWZmXHJcbi8vIHRvZG86ICBUaGlzIGNvdWxkIGJlIGZ1cnRoZXIgZGlzdHJpYnV0ZWQgYnV0IG1ha2luZyBhIHZpZGVvLmpzIGZpbGUganVzdCBmb3Igb25lIGZ1bmN0aW9uIHNlZW1zIGR1bWIuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIGFkZCB0aGUgdmlkZW8gcGxheSBidXR0b24gb3ZlcmxheSBpbWFnZVxyXG4gICAgJChcIi52aWRlby1wbGF5LW92ZXJsYXlcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoXHJcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1pbWFnZVwiLFxyXG4gICAgICAgICAgICBcInVybCgne3twYXRodG8oJ19zdGF0aWMvcGxheV9vdmVybGF5X2ljb24ucG5nJywgMSl9fScpXCJcclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBpcyBuZWVkZWQgdG8gYWxsb3cgdGhlIGRyb3Bkb3duIHNlYXJjaCBiYXIgdG8gd29yaztcclxuICAgIC8vIFRoZSBkZWZhdWx0IGJlaGF2aW91ciBpcyB0aGF0IHRoZSBkcm9wZG93biBtZW51IGNsb3NlcyB3aGVuIHNvbWV0aGluZyBpblxyXG4gICAgLy8gaXQgKGxpa2UgdGhlIHNlYXJjaCBiYXIpIGlzIGNsaWNrZWRcclxuICAgICQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIEZpeCBpbnB1dCBlbGVtZW50IGNsaWNrIHByb2JsZW1cclxuICAgICAgICAkKFwiLmRyb3Bkb3duIGlucHV0LCAuZHJvcGRvd24gbGFiZWxcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuIiwiLyohXHJcbiAqIGpRdWVyeSBpZGxlVGltZXIgcGx1Z2luXHJcbiAqIHZlcnNpb24gMC45LjEwMDUxMVxyXG4gKiBieSBQYXVsIElyaXNoLlxyXG4gKiAgIGh0dHA6Ly9naXRodWIuY29tL3BhdWxpcmlzaC95dWktbWlzYy90cmVlL1xyXG4gKiBNSVQgbGljZW5zZVxyXG5cclxuICogYWRhcHRlZCBmcm9tIFlVSSBpZGxlIHRpbWVyIGJ5IG56YWthczpcclxuICogICBodHRwOi8vZ2l0aHViLmNvbS9uemFrYXMveXVpLW1pc2MvXHJcbiovXHJcbi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAwOSBOaWNob2xhcyBDLiBaYWthc1xyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxyXG4gKiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuLyogdXBkYXRlZCB0byBmaXggQ2hyb21lIHNldFRpbWVvdXQgaXNzdWUgYnkgWmFpZCBaYXdhaWRlaCAqL1xyXG5cclxuIC8vIEFQSSBhdmFpbGFibGUgaW4gPD0gdjAuOFxyXG4gLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbiAvLyBpZGxlVGltZXIoKSB0YWtlcyBhbiBvcHRpb25hbCBhcmd1bWVudCB0aGF0IGRlZmluZXMgdGhlIGlkbGUgdGltZW91dFxyXG4gLy8gdGltZW91dCBpcyBpbiBtaWxsaXNlY29uZHM7IGRlZmF1bHRzIHRvIDMwMDAwXHJcbiAkLmlkbGVUaW1lcigxMDAwMCk7XHJcblxyXG5cclxuICQoZG9jdW1lbnQpLmJpbmQoXCJpZGxlLmlkbGVUaW1lclwiLCBmdW5jdGlvbigpe1xyXG4gICAgLy8gZnVuY3Rpb24geW91IHdhbnQgdG8gZmlyZSB3aGVuIHRoZSB1c2VyIGdvZXMgaWRsZVxyXG4gfSk7XHJcblxyXG5cclxuICQoZG9jdW1lbnQpLmJpbmQoXCJhY3RpdmUuaWRsZVRpbWVyXCIsIGZ1bmN0aW9uKCl7XHJcbiAgLy8gZnVuY3Rpb24geW91IHdhbnQgdG8gZmlyZSB3aGVuIHRoZSB1c2VyIGJlY29tZXMgYWN0aXZlIGFnYWluXHJcbiB9KTtcclxuXHJcbiAvLyBwYXNzIHRoZSBzdHJpbmcgJ2Rlc3Ryb3knIHRvIHN0b3AgdGhlIHRpbWVyXHJcbiAkLmlkbGVUaW1lcignZGVzdHJveScpO1xyXG5cclxuIC8vIHlvdSBjYW4gcXVlcnkgaWYgdGhlIHVzZXIgaXMgaWRsZSBvciBub3Qgd2l0aCBkYXRhKClcclxuICQuZGF0YShkb2N1bWVudCwnaWRsZVRpbWVyJyk7ICAvLyAnaWRsZScgIG9yICdhY3RpdmUnXHJcblxyXG4gLy8geW91IGNhbiBnZXQgdGltZSBlbGFwc2VkIHNpbmNlIHVzZXIgd2hlbiBpZGxlL2FjdGl2ZVxyXG4gJC5pZGxlVGltZXIoJ2dldEVsYXBzZWRUaW1lJyk7IC8vIHRpbWUgc2luY2Ugc3RhdGUgY2hhbmdlIGluIG1zXHJcblxyXG4gKioqKioqKiovXHJcblxyXG5cclxuXHJcbiAvLyBBUEkgYXZhaWxhYmxlIGluID49IHYwLjlcclxuIC8qKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4gLy8gYmluZCB0byBzcGVjaWZpYyBlbGVtZW50cywgYWxsb3dzIGZvciBtdWx0aXBsZSB0aW1lciBpbnN0YW5jZXNcclxuICQoZWxlbSkuaWRsZVRpbWVyKHRpbWVvdXR8J2Rlc3Ryb3knfCdnZXRFbGFwc2VkVGltZScpO1xyXG4gJC5kYXRhKGVsZW0sJ2lkbGVUaW1lcicpOyAgLy8gJ2lkbGUnICBvciAnYWN0aXZlJ1xyXG5cclxuIC8vIGlmIHlvdSdyZSB1c2luZyB0aGUgb2xkICQuaWRsZVRpbWVyIGFwaSwgeW91IHNob3VsZCBub3QgZG8gJChkb2N1bWVudCkuaWRsZVRpbWVyKC4uLilcclxuXHJcbiAvLyBlbGVtZW50IGJvdW5kIHRpbWVycyB3aWxsIG9ubHkgd2F0Y2ggZm9yIGV2ZW50cyBpbnNpZGUgb2YgdGhlbS5cclxuIC8vIHlvdSBtYXkganVzdCB3YW50IHBhZ2UtbGV2ZWwgYWN0aXZpdHksIGluIHdoaWNoIGNhc2UgeW91IG1heSBzZXQgdXBcclxuIC8vICAgeW91ciB0aW1lcnMgb24gZG9jdW1lbnQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgYW5kIGRvY3VtZW50LmJvZHlcclxuXHJcbiAvLyBZb3UgY2FuIG9wdGlvbmFsbHkgcHJvdmlkZSBhIHNlY29uZCBhcmd1bWVudCB0byBvdmVycmlkZSBjZXJ0YWluIG9wdGlvbnMuXHJcbiAvLyBIZXJlIGFyZSB0aGUgZGVmYXVsdHMsIHNvIHlvdSBjYW4gb21pdCBhbnkgb3IgYWxsIG9mIHRoZW0uXHJcbiAkKGVsZW0pLmlkbGVUaW1lcih0aW1lb3V0LCB7XHJcbiAgIHN0YXJ0SW1tZWRpYXRlbHk6IHRydWUsIC8vc3RhcnRzIGEgdGltZW91dCBhcyBzb29uIGFzIHRoZSB0aW1lciBpcyBzZXQgdXA7IG90aGVyd2lzZSBpdCB3YWl0cyBmb3IgdGhlIGZpcnN0IGV2ZW50LlxyXG4gICBpZGxlOiAgICBmYWxzZSwgICAgICAgICAvL2luZGljYXRlcyBpZiB0aGUgdXNlciBpcyBpZGxlXHJcbiAgIGVuYWJsZWQ6IHRydWUsICAgICAgICAgIC8vaW5kaWNhdGVzIGlmIHRoZSBpZGxlIHRpbWVyIGlzIGVuYWJsZWRcclxuICAgZXZlbnRzOiAgJ21vdXNlbW92ZSBrZXlkb3duIERPTU1vdXNlU2Nyb2xsIG1vdXNld2hlZWwgbW91c2Vkb3duIHRvdWNoc3RhcnQgdG91Y2htb3ZlJyAvLyBhY3Rpdml0eSBpcyBvbmUgb2YgdGhlc2UgZXZlbnRzXHJcbiB9KTtcclxuXHJcbiAqKioqKioqKi9cclxuXHJcbihmdW5jdGlvbigkKXtcclxuXHJcbiQuaWRsZVRpbWVyID0gZnVuY3Rpb24obmV3VGltZW91dCwgZWxlbSwgb3B0cyl7XHJcblxyXG4gICAgLy8gZGVmYXVsdHMgdGhhdCBhcmUgdG8gYmUgc3RvcmVkIGFzIGluc3RhbmNlIHByb3BzIG9uIHRoZSBlbGVtXHJcblxyXG5cdG9wdHMgPSAkLmV4dGVuZCh7XHJcblx0XHRzdGFydEltbWVkaWF0ZWx5OiB0cnVlLCAvL3N0YXJ0cyBhIHRpbWVvdXQgYXMgc29vbiBhcyB0aGUgdGltZXIgaXMgc2V0IHVwXHJcblx0XHRpZGxlOiAgICBmYWxzZSwgICAgICAgICAvL2luZGljYXRlcyBpZiB0aGUgdXNlciBpcyBpZGxlXHJcblx0XHRlbmFibGVkOiB0cnVlLCAgICAgICAgICAvL2luZGljYXRlcyBpZiB0aGUgaWRsZSB0aW1lciBpcyBlbmFibGVkXHJcblx0XHR0aW1lb3V0OiAzMDAwMCwgICAgICAgICAvL3RoZSBhbW91bnQgb2YgdGltZSAobXMpIGJlZm9yZSB0aGUgdXNlciBpcyBjb25zaWRlcmVkIGlkbGVcclxuXHRcdGV2ZW50czogICdtb3VzZW1vdmUga2V5ZG93biBET01Nb3VzZVNjcm9sbCBtb3VzZXdoZWVsIG1vdXNlZG93biB0b3VjaHN0YXJ0IHRvdWNobW92ZScgLy8gYWN0aXZpdHkgaXMgb25lIG9mIHRoZXNlIGV2ZW50c1xyXG5cdH0sIG9wdHMpO1xyXG5cclxuXHJcbiAgICBlbGVtID0gZWxlbSB8fCBkb2N1bWVudDtcclxuXHJcbiAgICAvKiAoaW50ZW50aW9uYWxseSBub3QgZG9jdW1lbnRlZClcclxuICAgICAqIFRvZ2dsZXMgdGhlIGlkbGUgc3RhdGUgYW5kIGZpcmVzIGFuIGFwcHJvcHJpYXRlIGV2ZW50LlxyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgdmFyIHRvZ2dsZUlkbGVTdGF0ZSA9IGZ1bmN0aW9uKG15ZWxlbSl7XHJcblxyXG4gICAgICAgIC8vIGN1cnNlIHlvdSwgbW96aWxsYSBzZXRUaW1lb3V0IGxhdGVuZXNzIGJ1ZyFcclxuICAgICAgICBpZiAodHlwZW9mIG15ZWxlbSA9PT0gJ251bWJlcicpe1xyXG4gICAgICAgICAgICBteWVsZW0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb2JqID0gJC5kYXRhKG15ZWxlbSB8fCBlbGVtLCdpZGxlVGltZXJPYmonKTtcclxuXHJcbiAgICAgICAgLy90b2dnbGUgdGhlIHN0YXRlXHJcbiAgICAgICAgb2JqLmlkbGUgPSAhb2JqLmlkbGU7XHJcblxyXG4gICAgICAgIC8vIHJlc2V0IHRpbWVvdXQgXHJcbiAgICAgICAgdmFyIGVsYXBzZWQgPSAoK25ldyBEYXRlKCkpIC0gb2JqLm9sZGRhdGU7XHJcbiAgICAgICAgb2JqLm9sZGRhdGUgPSArbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgLy8gaGFuZGxlIENocm9tZSBhbHdheXMgdHJpZ2dlcmluZyBpZGxlIGFmdGVyIGpzIGFsZXJ0IG9yIGNvbWZpcm0gcG9wdXBcclxuICAgICAgICBpZiAob2JqLmlkbGUgJiYgKGVsYXBzZWQgPCBvcHRzLnRpbWVvdXQpKSB7XHJcbiAgICAgICAgICAgICAgICBvYmouaWRsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KCQuaWRsZVRpbWVyLnRJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0cy5lbmFibGVkKVxyXG4gICAgICAgICAgICAgICAgICAkLmlkbGVUaW1lci50SWQgPSBzZXRUaW1lb3V0KHRvZ2dsZUlkbGVTdGF0ZSwgb3B0cy50aW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9maXJlIGFwcHJvcHJpYXRlIGV2ZW50XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBhIGN1c3RvbSBldmVudCwgYnV0IGZpcnN0LCBzdG9yZSB0aGUgbmV3IHN0YXRlIG9uIHRoZSBlbGVtZW50XHJcbiAgICAgICAgLy8gYW5kIHRoZW4gYXBwZW5kIHRoYXQgc3RyaW5nIHRvIGEgbmFtZXNwYWNlXHJcbiAgICAgICAgdmFyIGV2ZW50ID0galF1ZXJ5LkV2ZW50KCAkLmRhdGEoZWxlbSwnaWRsZVRpbWVyJywgb2JqLmlkbGUgPyBcImlkbGVcIiA6IFwiYWN0aXZlXCIgKSAgKyAnLmlkbGVUaW1lcicgICApO1xyXG5cclxuICAgICAgICAvLyB3ZSBkbyB3YW50IHRoaXMgdG8gYnViYmxlLCBhdCBsZWFzdCBhcyBhIHRlbXBvcmFyeSBmaXggZm9yIGpRdWVyeSAxLjdcclxuICAgICAgICAvLyBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAkKGVsZW0pLnRyaWdnZXIoZXZlbnQpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0b3BzIHRoZSBpZGxlIHRpbWVyLiBUaGlzIHJlbW92ZXMgYXBwcm9wcmlhdGUgZXZlbnQgaGFuZGxlcnNcclxuICAgICAqIGFuZCBjYW5jZWxzIGFueSBwZW5kaW5nIHRpbWVvdXRzLlxyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqIEBtZXRob2Qgc3RvcFxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICovXHJcbiAgICBzdG9wID0gZnVuY3Rpb24oZWxlbSl7XHJcblxyXG4gICAgICAgIHZhciBvYmogPSAkLmRhdGEoZWxlbSwnaWRsZVRpbWVyT2JqJykgfHwge307XHJcblxyXG4gICAgICAgIC8vc2V0IHRvIGRpc2FibGVkXHJcbiAgICAgICAgb2JqLmVuYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy9jbGVhciBhbnkgcGVuZGluZyB0aW1lb3V0c1xyXG4gICAgICAgIGNsZWFyVGltZW91dChvYmoudElkKTtcclxuXHJcbiAgICAgICAgLy9kZXRhY2ggdGhlIGV2ZW50IGhhbmRsZXJzXHJcbiAgICAgICAgJChlbGVtKS5vZmYoJy5pZGxlVGltZXInKTtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8qIChpbnRlbnRpb25hbGx5IG5vdCBkb2N1bWVudGVkKVxyXG4gICAgICogSGFuZGxlcyBhIHVzZXIgZXZlbnQgaW5kaWNhdGluZyB0aGF0IHRoZSB1c2VyIGlzbid0IGlkbGUuXHJcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBBIERPTTItbm9ybWFsaXplZCBldmVudCBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBoYW5kbGVVc2VyRXZlbnQgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgb2JqID0gJC5kYXRhKHRoaXMsJ2lkbGVUaW1lck9iaicpO1xyXG5cclxuICAgICAgICAvL2NsZWFyIGFueSBleGlzdGluZyB0aW1lb3V0XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KG9iai50SWQpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIC8vaWYgdGhlIGlkbGUgdGltZXIgaXMgZW5hYmxlZFxyXG4gICAgICAgIGlmIChvYmouZW5hYmxlZCl7XHJcblxyXG5cclxuICAgICAgICAgICAgLy9pZiBpdCdzIGlkbGUsIHRoYXQgbWVhbnMgdGhlIHVzZXIgaXMgbm8gbG9uZ2VyIGlkbGVcclxuICAgICAgICAgICAgaWYgKG9iai5pZGxlKXtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUlkbGVTdGF0ZSh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9zZXQgYSBuZXcgdGltZW91dFxyXG4gICAgICAgICAgICBvYmoudElkID0gc2V0VGltZW91dCh0b2dnbGVJZGxlU3RhdGUsIG9iai50aW1lb3V0KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgIH07XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnRzIHRoZSBpZGxlIHRpbWVyLiBUaGlzIGFkZHMgYXBwcm9wcmlhdGUgZXZlbnQgaGFuZGxlcnNcclxuICAgICAqIGFuZCBzdGFydHMgdGhlIGZpcnN0IHRpbWVvdXQuXHJcbiAgICAgKiBAcGFyYW0ge2ludH0gbmV3VGltZW91dCAoT3B0aW9uYWwpIEEgbmV3IHZhbHVlIGZvciB0aGUgdGltZW91dCBwZXJpb2QgaW4gbXMuXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICogQG1ldGhvZCAkLmlkbGVUaW1lclxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICovXHJcblxyXG5cclxuICAgIHZhciBvYmogPSAkLmRhdGEoZWxlbSwnaWRsZVRpbWVyT2JqJykgfHwge307XHJcblxyXG4gICAgb2JqLm9sZGRhdGUgPSBvYmoub2xkZGF0ZSB8fCArbmV3IERhdGUoKTtcclxuXHJcbiAgICAvL2Fzc2lnbiBhIG5ldyB0aW1lb3V0IGlmIG5lY2Vzc2FyeVxyXG4gICAgaWYgKHR5cGVvZiBuZXdUaW1lb3V0ID09PSBcIm51bWJlclwiKXtcclxuICAgICAgICBvcHRzLnRpbWVvdXQgPSBuZXdUaW1lb3V0O1xyXG4gICAgfSBlbHNlIGlmIChuZXdUaW1lb3V0ID09PSAnZGVzdHJveScpIHtcclxuICAgICAgICBzdG9wKGVsZW0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSBlbHNlIGlmIChuZXdUaW1lb3V0ID09PSAnZ2V0RWxhcHNlZFRpbWUnKXtcclxuICAgICAgICByZXR1cm4gKCtuZXcgRGF0ZSgpKSAtIG9iai5vbGRkYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vYXNzaWduIGFwcHJvcHJpYXRlIGV2ZW50IGhhbmRsZXJzXHJcbiAgICAkKGVsZW0pLm9uKCQudHJpbSgob3B0cy5ldmVudHMrJyAnKS5zcGxpdCgnICcpLmpvaW4oJy5pZGxlVGltZXIgJykpLGhhbmRsZVVzZXJFdmVudCk7XHJcblxyXG5cclxuICAgIG9iai5pZGxlICAgID0gb3B0cy5pZGxlO1xyXG4gICAgb2JqLmVuYWJsZWQgPSBvcHRzLmVuYWJsZWQ7XHJcbiAgICBvYmoudGltZW91dCA9IG9wdHMudGltZW91dDtcclxuXHJcblxyXG4gICAgLy9zZXQgYSB0aW1lb3V0IHRvIHRvZ2dsZSBzdGF0ZS4gTWF5IHdpc2ggdG8gb21pdCB0aGlzIGluIHNvbWUgc2l0dWF0aW9uc1xyXG5cdGlmIChvcHRzLnN0YXJ0SW1tZWRpYXRlbHkpIHtcclxuXHQgICAgb2JqLnRJZCA9IHNldFRpbWVvdXQodG9nZ2xlSWRsZVN0YXRlLCBvYmoudGltZW91dCk7XHJcblx0fVxyXG5cclxuICAgIC8vIGFzc3VtZSB0aGUgdXNlciBpcyBhY3RpdmUgZm9yIHRoZSBmaXJzdCB4IHNlY29uZHMuXHJcbiAgICAkLmRhdGEoZWxlbSwnaWRsZVRpbWVyJyxcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAvLyBzdG9yZSBvdXIgaW5zdGFuY2Ugb24gdGhlIG9iamVjdFxyXG4gICAgJC5kYXRhKGVsZW0sJ2lkbGVUaW1lck9iaicsb2JqKTtcclxuXHJcblxyXG5cclxufTsgLy8gZW5kIG9mICQuaWRsZVRpbWVyKClcclxuXHJcblxyXG4vLyB2MC45IEFQSSBmb3IgZGVmaW5pbmcgbXVsdGlwbGUgdGltZXJzLlxyXG4kLmZuLmlkbGVUaW1lciA9IGZ1bmN0aW9uKG5ld1RpbWVvdXQsb3B0cyl7XHJcblx0Ly8gQWxsb3cgb21pc3Npb24gb2Ygb3B0cyBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG5cdGlmICghb3B0cykge1xyXG5cdFx0b3B0cyA9IHt9O1xyXG5cdH1cclxuXHJcbiAgICBpZih0aGlzWzBdKXtcclxuICAgICAgICAkLmlkbGVUaW1lcihuZXdUaW1lb3V0LHRoaXNbMF0sb3B0cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG5cclxufSkoalF1ZXJ5KTtcclxuIiwiLyohXHJcbiAqIEJJREkgZW1iZWRkaW5nIHN1cHBvcnQgZm9yIGpRdWVyeS5pMThuXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoQykgMjAxNSwgRGF2aWQgQ2hhblxyXG4gKlxyXG4gKiBUaGlzIGNvZGUgaXMgZHVhbCBsaWNlbnNlZCBHUEx2MiBvciBsYXRlciBhbmQgTUlULiBZb3UgZG9uJ3QgaGF2ZSB0byBkb1xyXG4gKiBhbnl0aGluZyBzcGVjaWFsIHRvIGNob29zZSBvbmUgbGljZW5zZSBvciB0aGUgb3RoZXIgYW5kIHlvdSBkb24ndCBoYXZlIHRvXHJcbiAqIG5vdGlmeSBhbnlvbmUgd2hpY2ggbGljZW5zZSB5b3UgYXJlIHVzaW5nLiBZb3UgYXJlIGZyZWUgdG8gdXNlIHRoaXMgY29kZVxyXG4gKiBpbiBjb21tZXJjaWFsIHByb2plY3RzIGFzIGxvbmcgYXMgdGhlIGNvcHlyaWdodCBoZWFkZXIgaXMgbGVmdCBpbnRhY3QuXHJcbiAqIFNlZSBmaWxlcyBHUEwtTElDRU5TRSBhbmQgTUlULUxJQ0VOU0UgZm9yIGRldGFpbHMuXHJcbiAqXHJcbiAqIEBsaWNlbmNlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbmNlIDIuMCBvciBsYXRlclxyXG4gKiBAbGljZW5jZSBNSVQgTGljZW5zZVxyXG4gKi9cclxuXHJcbiggZnVuY3Rpb24gKCAkICkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHR2YXIgc3Ryb25nRGlyUmVnRXhwO1xyXG5cclxuXHQvKipcclxuXHQgKiBNYXRjaGVzIHRoZSBmaXJzdCBzdHJvbmcgZGlyZWN0aW9uYWxpdHkgY29kZXBvaW50OlxyXG5cdCAqIC0gaW4gZ3JvdXAgMSBpZiBpdCBpcyBMVFJcclxuXHQgKiAtIGluIGdyb3VwIDIgaWYgaXQgaXMgUlRMXHJcblx0ICogRG9lcyBub3QgbWF0Y2ggaWYgdGhlcmUgaXMgbm8gc3Ryb25nIGRpcmVjdGlvbmFsaXR5IGNvZGVwb2ludC5cclxuXHQgKlxyXG5cdCAqIEdlbmVyYXRlZCBieSBVbmljb2RlSlMgKHNlZSB0b29scy9zdHJvbmdEaXIpIGZyb20gdGhlIFVDRDsgc2VlXHJcblx0ICogaHR0cHM6Ly9waGFicmljYXRvci53aWtpbWVkaWEub3JnL2RpZmZ1c2lvbi9HVUpTLyAuXHJcblx0ICovXHJcblx0c3Ryb25nRGlyUmVnRXhwID0gbmV3IFJlZ0V4cChcclxuXHRcdCcoPzonICtcclxuXHRcdFx0JygnICtcclxuXHRcdFx0XHQnW1xcdTAwNDEtXFx1MDA1YVxcdTAwNjEtXFx1MDA3YVxcdTAwYWFcXHUwMGI1XFx1MDBiYVxcdTAwYzAtXFx1MDBkNlxcdTAwZDgtXFx1MDBmNlxcdTAwZjgtXFx1MDJiOFxcdTAyYmItXFx1MDJjMVxcdTAyZDBcXHUwMmQxXFx1MDJlMC1cXHUwMmU0XFx1MDJlZVxcdTAzNzAtXFx1MDM3M1xcdTAzNzZcXHUwMzc3XFx1MDM3YS1cXHUwMzdkXFx1MDM3ZlxcdTAzODZcXHUwMzg4LVxcdTAzOGFcXHUwMzhjXFx1MDM4ZS1cXHUwM2ExXFx1MDNhMy1cXHUwM2Y1XFx1MDNmNy1cXHUwNDgyXFx1MDQ4YS1cXHUwNTJmXFx1MDUzMS1cXHUwNTU2XFx1MDU1OS1cXHUwNTVmXFx1MDU2MS1cXHUwNTg3XFx1MDU4OVxcdTA5MDMtXFx1MDkzOVxcdTA5M2JcXHUwOTNkLVxcdTA5NDBcXHUwOTQ5LVxcdTA5NGNcXHUwOTRlLVxcdTA5NTBcXHUwOTU4LVxcdTA5NjFcXHUwOTY0LVxcdTA5ODBcXHUwOTgyXFx1MDk4M1xcdTA5ODUtXFx1MDk4Y1xcdTA5OGZcXHUwOTkwXFx1MDk5My1cXHUwOWE4XFx1MDlhYS1cXHUwOWIwXFx1MDliMlxcdTA5YjYtXFx1MDliOVxcdTA5YmQtXFx1MDljMFxcdTA5YzdcXHUwOWM4XFx1MDljYlxcdTA5Y2NcXHUwOWNlXFx1MDlkN1xcdTA5ZGNcXHUwOWRkXFx1MDlkZi1cXHUwOWUxXFx1MDllNi1cXHUwOWYxXFx1MDlmNC1cXHUwOWZhXFx1MGEwM1xcdTBhMDUtXFx1MGEwYVxcdTBhMGZcXHUwYTEwXFx1MGExMy1cXHUwYTI4XFx1MGEyYS1cXHUwYTMwXFx1MGEzMlxcdTBhMzNcXHUwYTM1XFx1MGEzNlxcdTBhMzhcXHUwYTM5XFx1MGEzZS1cXHUwYTQwXFx1MGE1OS1cXHUwYTVjXFx1MGE1ZVxcdTBhNjYtXFx1MGE2ZlxcdTBhNzItXFx1MGE3NFxcdTBhODNcXHUwYTg1LVxcdTBhOGRcXHUwYThmLVxcdTBhOTFcXHUwYTkzLVxcdTBhYThcXHUwYWFhLVxcdTBhYjBcXHUwYWIyXFx1MGFiM1xcdTBhYjUtXFx1MGFiOVxcdTBhYmQtXFx1MGFjMFxcdTBhYzlcXHUwYWNiXFx1MGFjY1xcdTBhZDBcXHUwYWUwXFx1MGFlMVxcdTBhZTYtXFx1MGFmMFxcdTBhZjlcXHUwYjAyXFx1MGIwM1xcdTBiMDUtXFx1MGIwY1xcdTBiMGZcXHUwYjEwXFx1MGIxMy1cXHUwYjI4XFx1MGIyYS1cXHUwYjMwXFx1MGIzMlxcdTBiMzNcXHUwYjM1LVxcdTBiMzlcXHUwYjNkXFx1MGIzZVxcdTBiNDBcXHUwYjQ3XFx1MGI0OFxcdTBiNGJcXHUwYjRjXFx1MGI1N1xcdTBiNWNcXHUwYjVkXFx1MGI1Zi1cXHUwYjYxXFx1MGI2Ni1cXHUwYjc3XFx1MGI4M1xcdTBiODUtXFx1MGI4YVxcdTBiOGUtXFx1MGI5MFxcdTBiOTItXFx1MGI5NVxcdTBiOTlcXHUwYjlhXFx1MGI5Y1xcdTBiOWVcXHUwYjlmXFx1MGJhM1xcdTBiYTRcXHUwYmE4LVxcdTBiYWFcXHUwYmFlLVxcdTBiYjlcXHUwYmJlXFx1MGJiZlxcdTBiYzFcXHUwYmMyXFx1MGJjNi1cXHUwYmM4XFx1MGJjYS1cXHUwYmNjXFx1MGJkMFxcdTBiZDdcXHUwYmU2LVxcdTBiZjJcXHUwYzAxLVxcdTBjMDNcXHUwYzA1LVxcdTBjMGNcXHUwYzBlLVxcdTBjMTBcXHUwYzEyLVxcdTBjMjhcXHUwYzJhLVxcdTBjMzlcXHUwYzNkXFx1MGM0MS1cXHUwYzQ0XFx1MGM1OC1cXHUwYzVhXFx1MGM2MFxcdTBjNjFcXHUwYzY2LVxcdTBjNmZcXHUwYzdmXFx1MGM4MlxcdTBjODNcXHUwYzg1LVxcdTBjOGNcXHUwYzhlLVxcdTBjOTBcXHUwYzkyLVxcdTBjYThcXHUwY2FhLVxcdTBjYjNcXHUwY2I1LVxcdTBjYjlcXHUwY2JkLVxcdTBjYzRcXHUwY2M2LVxcdTBjYzhcXHUwY2NhXFx1MGNjYlxcdTBjZDVcXHUwY2Q2XFx1MGNkZVxcdTBjZTBcXHUwY2UxXFx1MGNlNi1cXHUwY2VmXFx1MGNmMVxcdTBjZjJcXHUwZDAyXFx1MGQwM1xcdTBkMDUtXFx1MGQwY1xcdTBkMGUtXFx1MGQxMFxcdTBkMTItXFx1MGQzYVxcdTBkM2QtXFx1MGQ0MFxcdTBkNDYtXFx1MGQ0OFxcdTBkNGEtXFx1MGQ0Y1xcdTBkNGVcXHUwZDU3XFx1MGQ1Zi1cXHUwZDYxXFx1MGQ2Ni1cXHUwZDc1XFx1MGQ3OS1cXHUwZDdmXFx1MGQ4MlxcdTBkODNcXHUwZDg1LVxcdTBkOTZcXHUwZDlhLVxcdTBkYjFcXHUwZGIzLVxcdTBkYmJcXHUwZGJkXFx1MGRjMC1cXHUwZGM2XFx1MGRjZi1cXHUwZGQxXFx1MGRkOC1cXHUwZGRmXFx1MGRlNi1cXHUwZGVmXFx1MGRmMi1cXHUwZGY0XFx1MGUwMS1cXHUwZTMwXFx1MGUzMlxcdTBlMzNcXHUwZTQwLVxcdTBlNDZcXHUwZTRmLVxcdTBlNWJcXHUwZTgxXFx1MGU4MlxcdTBlODRcXHUwZTg3XFx1MGU4OFxcdTBlOGFcXHUwZThkXFx1MGU5NC1cXHUwZTk3XFx1MGU5OS1cXHUwZTlmXFx1MGVhMS1cXHUwZWEzXFx1MGVhNVxcdTBlYTdcXHUwZWFhXFx1MGVhYlxcdTBlYWQtXFx1MGViMFxcdTBlYjJcXHUwZWIzXFx1MGViZFxcdTBlYzAtXFx1MGVjNFxcdTBlYzZcXHUwZWQwLVxcdTBlZDlcXHUwZWRjLVxcdTBlZGZcXHUwZjAwLVxcdTBmMTdcXHUwZjFhLVxcdTBmMzRcXHUwZjM2XFx1MGYzOFxcdTBmM2UtXFx1MGY0N1xcdTBmNDktXFx1MGY2Y1xcdTBmN2ZcXHUwZjg1XFx1MGY4OC1cXHUwZjhjXFx1MGZiZS1cXHUwZmM1XFx1MGZjNy1cXHUwZmNjXFx1MGZjZS1cXHUwZmRhXFx1MTAwMC1cXHUxMDJjXFx1MTAzMVxcdTEwMzhcXHUxMDNiXFx1MTAzY1xcdTEwM2YtXFx1MTA1N1xcdTEwNWEtXFx1MTA1ZFxcdTEwNjEtXFx1MTA3MFxcdTEwNzUtXFx1MTA4MVxcdTEwODNcXHUxMDg0XFx1MTA4Ny1cXHUxMDhjXFx1MTA4ZS1cXHUxMDljXFx1MTA5ZS1cXHUxMGM1XFx1MTBjN1xcdTEwY2RcXHUxMGQwLVxcdTEyNDhcXHUxMjRhLVxcdTEyNGRcXHUxMjUwLVxcdTEyNTZcXHUxMjU4XFx1MTI1YS1cXHUxMjVkXFx1MTI2MC1cXHUxMjg4XFx1MTI4YS1cXHUxMjhkXFx1MTI5MC1cXHUxMmIwXFx1MTJiMi1cXHUxMmI1XFx1MTJiOC1cXHUxMmJlXFx1MTJjMFxcdTEyYzItXFx1MTJjNVxcdTEyYzgtXFx1MTJkNlxcdTEyZDgtXFx1MTMxMFxcdTEzMTItXFx1MTMxNVxcdTEzMTgtXFx1MTM1YVxcdTEzNjAtXFx1MTM3Y1xcdTEzODAtXFx1MTM4ZlxcdTEzYTAtXFx1MTNmNVxcdTEzZjgtXFx1MTNmZFxcdTE0MDEtXFx1MTY3ZlxcdTE2ODEtXFx1MTY5YVxcdTE2YTAtXFx1MTZmOFxcdTE3MDAtXFx1MTcwY1xcdTE3MGUtXFx1MTcxMVxcdTE3MjAtXFx1MTczMVxcdTE3MzVcXHUxNzM2XFx1MTc0MC1cXHUxNzUxXFx1MTc2MC1cXHUxNzZjXFx1MTc2ZS1cXHUxNzcwXFx1MTc4MC1cXHUxN2IzXFx1MTdiNlxcdTE3YmUtXFx1MTdjNVxcdTE3YzdcXHUxN2M4XFx1MTdkNC1cXHUxN2RhXFx1MTdkY1xcdTE3ZTAtXFx1MTdlOVxcdTE4MTAtXFx1MTgxOVxcdTE4MjAtXFx1MTg3N1xcdTE4ODAtXFx1MThhOFxcdTE4YWFcXHUxOGIwLVxcdTE4ZjVcXHUxOTAwLVxcdTE5MWVcXHUxOTIzLVxcdTE5MjZcXHUxOTI5LVxcdTE5MmJcXHUxOTMwXFx1MTkzMVxcdTE5MzMtXFx1MTkzOFxcdTE5NDYtXFx1MTk2ZFxcdTE5NzAtXFx1MTk3NFxcdTE5ODAtXFx1MTlhYlxcdTE5YjAtXFx1MTljOVxcdTE5ZDAtXFx1MTlkYVxcdTFhMDAtXFx1MWExNlxcdTFhMTlcXHUxYTFhXFx1MWExZS1cXHUxYTU1XFx1MWE1N1xcdTFhNjFcXHUxYTYzXFx1MWE2NFxcdTFhNmQtXFx1MWE3MlxcdTFhODAtXFx1MWE4OVxcdTFhOTAtXFx1MWE5OVxcdTFhYTAtXFx1MWFhZFxcdTFiMDQtXFx1MWIzM1xcdTFiMzVcXHUxYjNiXFx1MWIzZC1cXHUxYjQxXFx1MWI0My1cXHUxYjRiXFx1MWI1MC1cXHUxYjZhXFx1MWI3NC1cXHUxYjdjXFx1MWI4Mi1cXHUxYmExXFx1MWJhNlxcdTFiYTdcXHUxYmFhXFx1MWJhZS1cXHUxYmU1XFx1MWJlN1xcdTFiZWEtXFx1MWJlY1xcdTFiZWVcXHUxYmYyXFx1MWJmM1xcdTFiZmMtXFx1MWMyYlxcdTFjMzRcXHUxYzM1XFx1MWMzYi1cXHUxYzQ5XFx1MWM0ZC1cXHUxYzdmXFx1MWNjMC1cXHUxY2M3XFx1MWNkM1xcdTFjZTFcXHUxY2U5LVxcdTFjZWNcXHUxY2VlLVxcdTFjZjNcXHUxY2Y1XFx1MWNmNlxcdTFkMDAtXFx1MWRiZlxcdTFlMDAtXFx1MWYxNVxcdTFmMTgtXFx1MWYxZFxcdTFmMjAtXFx1MWY0NVxcdTFmNDgtXFx1MWY0ZFxcdTFmNTAtXFx1MWY1N1xcdTFmNTlcXHUxZjViXFx1MWY1ZFxcdTFmNWYtXFx1MWY3ZFxcdTFmODAtXFx1MWZiNFxcdTFmYjYtXFx1MWZiY1xcdTFmYmVcXHUxZmMyLVxcdTFmYzRcXHUxZmM2LVxcdTFmY2NcXHUxZmQwLVxcdTFmZDNcXHUxZmQ2LVxcdTFmZGJcXHUxZmUwLVxcdTFmZWNcXHUxZmYyLVxcdTFmZjRcXHUxZmY2LVxcdTFmZmNcXHUyMDBlXFx1MjA3MVxcdTIwN2ZcXHUyMDkwLVxcdTIwOWNcXHUyMTAyXFx1MjEwN1xcdTIxMGEtXFx1MjExM1xcdTIxMTVcXHUyMTE5LVxcdTIxMWRcXHUyMTI0XFx1MjEyNlxcdTIxMjhcXHUyMTJhLVxcdTIxMmRcXHUyMTJmLVxcdTIxMzlcXHUyMTNjLVxcdTIxM2ZcXHUyMTQ1LVxcdTIxNDlcXHUyMTRlXFx1MjE0ZlxcdTIxNjAtXFx1MjE4OFxcdTIzMzYtXFx1MjM3YVxcdTIzOTVcXHUyNDljLVxcdTI0ZTlcXHUyNmFjXFx1MjgwMC1cXHUyOGZmXFx1MmMwMC1cXHUyYzJlXFx1MmMzMC1cXHUyYzVlXFx1MmM2MC1cXHUyY2U0XFx1MmNlYi1cXHUyY2VlXFx1MmNmMlxcdTJjZjNcXHUyZDAwLVxcdTJkMjVcXHUyZDI3XFx1MmQyZFxcdTJkMzAtXFx1MmQ2N1xcdTJkNmZcXHUyZDcwXFx1MmQ4MC1cXHUyZDk2XFx1MmRhMC1cXHUyZGE2XFx1MmRhOC1cXHUyZGFlXFx1MmRiMC1cXHUyZGI2XFx1MmRiOC1cXHUyZGJlXFx1MmRjMC1cXHUyZGM2XFx1MmRjOC1cXHUyZGNlXFx1MmRkMC1cXHUyZGQ2XFx1MmRkOC1cXHUyZGRlXFx1MzAwNS1cXHUzMDA3XFx1MzAyMS1cXHUzMDI5XFx1MzAyZVxcdTMwMmZcXHUzMDMxLVxcdTMwMzVcXHUzMDM4LVxcdTMwM2NcXHUzMDQxLVxcdTMwOTZcXHUzMDlkLVxcdTMwOWZcXHUzMGExLVxcdTMwZmFcXHUzMGZjLVxcdTMwZmZcXHUzMTA1LVxcdTMxMmRcXHUzMTMxLVxcdTMxOGVcXHUzMTkwLVxcdTMxYmFcXHUzMWYwLVxcdTMyMWNcXHUzMjIwLVxcdTMyNGZcXHUzMjYwLVxcdTMyN2JcXHUzMjdmLVxcdTMyYjBcXHUzMmMwLVxcdTMyY2JcXHUzMmQwLVxcdTMyZmVcXHUzMzAwLVxcdTMzNzZcXHUzMzdiLVxcdTMzZGRcXHUzM2UwLVxcdTMzZmVcXHUzNDAwLVxcdTRkYjVcXHU0ZTAwLVxcdTlmZDVcXHVhMDAwLVxcdWE0OGNcXHVhNGQwLVxcdWE2MGNcXHVhNjEwLVxcdWE2MmJcXHVhNjQwLVxcdWE2NmVcXHVhNjgwLVxcdWE2OWRcXHVhNmEwLVxcdWE2ZWZcXHVhNmYyLVxcdWE2ZjdcXHVhNzIyLVxcdWE3ODdcXHVhNzg5LVxcdWE3YWRcXHVhN2IwLVxcdWE3YjdcXHVhN2Y3LVxcdWE4MDFcXHVhODAzLVxcdWE4MDVcXHVhODA3LVxcdWE4MGFcXHVhODBjLVxcdWE4MjRcXHVhODI3XFx1YTgzMC1cXHVhODM3XFx1YTg0MC1cXHVhODczXFx1YTg4MC1cXHVhOGMzXFx1YThjZS1cXHVhOGQ5XFx1YThmMi1cXHVhOGZkXFx1YTkwMC1cXHVhOTI1XFx1YTkyZS1cXHVhOTQ2XFx1YTk1MlxcdWE5NTNcXHVhOTVmLVxcdWE5N2NcXHVhOTgzLVxcdWE5YjJcXHVhOWI0XFx1YTliNVxcdWE5YmFcXHVhOWJiXFx1YTliZC1cXHVhOWNkXFx1YTljZi1cXHVhOWQ5XFx1YTlkZS1cXHVhOWU0XFx1YTllNi1cXHVhOWZlXFx1YWEwMC1cXHVhYTI4XFx1YWEyZlxcdWFhMzBcXHVhYTMzXFx1YWEzNFxcdWFhNDAtXFx1YWE0MlxcdWFhNDQtXFx1YWE0YlxcdWFhNGRcXHVhYTUwLVxcdWFhNTlcXHVhYTVjLVxcdWFhN2JcXHVhYTdkLVxcdWFhYWZcXHVhYWIxXFx1YWFiNVxcdWFhYjZcXHVhYWI5LVxcdWFhYmRcXHVhYWMwXFx1YWFjMlxcdWFhZGItXFx1YWFlYlxcdWFhZWUtXFx1YWFmNVxcdWFiMDEtXFx1YWIwNlxcdWFiMDktXFx1YWIwZVxcdWFiMTEtXFx1YWIxNlxcdWFiMjAtXFx1YWIyNlxcdWFiMjgtXFx1YWIyZVxcdWFiMzAtXFx1YWI2NVxcdWFiNzAtXFx1YWJlNFxcdWFiZTZcXHVhYmU3XFx1YWJlOS1cXHVhYmVjXFx1YWJmMC1cXHVhYmY5XFx1YWMwMC1cXHVkN2EzXFx1ZDdiMC1cXHVkN2M2XFx1ZDdjYi1cXHVkN2ZiXFx1ZTAwMC1cXHVmYTZkXFx1ZmE3MC1cXHVmYWQ5XFx1ZmIwMC1cXHVmYjA2XFx1ZmIxMy1cXHVmYjE3XFx1ZmYyMS1cXHVmZjNhXFx1ZmY0MS1cXHVmZjVhXFx1ZmY2Ni1cXHVmZmJlXFx1ZmZjMi1cXHVmZmM3XFx1ZmZjYS1cXHVmZmNmXFx1ZmZkMi1cXHVmZmQ3XFx1ZmZkYS1cXHVmZmRjXXxcXHVkODAwW1xcdWRjMDAtXFx1ZGMwYl18XFx1ZDgwMFtcXHVkYzBkLVxcdWRjMjZdfFxcdWQ4MDBbXFx1ZGMyOC1cXHVkYzNhXXxcXHVkODAwXFx1ZGMzY3xcXHVkODAwXFx1ZGMzZHxcXHVkODAwW1xcdWRjM2YtXFx1ZGM0ZF18XFx1ZDgwMFtcXHVkYzUwLVxcdWRjNWRdfFxcdWQ4MDBbXFx1ZGM4MC1cXHVkY2ZhXXxcXHVkODAwXFx1ZGQwMHxcXHVkODAwXFx1ZGQwMnxcXHVkODAwW1xcdWRkMDctXFx1ZGQzM118XFx1ZDgwMFtcXHVkZDM3LVxcdWRkM2ZdfFxcdWQ4MDBbXFx1ZGRkMC1cXHVkZGZjXXxcXHVkODAwW1xcdWRlODAtXFx1ZGU5Y118XFx1ZDgwMFtcXHVkZWEwLVxcdWRlZDBdfFxcdWQ4MDBbXFx1ZGYwMC1cXHVkZjIzXXxcXHVkODAwW1xcdWRmMzAtXFx1ZGY0YV18XFx1ZDgwMFtcXHVkZjUwLVxcdWRmNzVdfFxcdWQ4MDBbXFx1ZGY4MC1cXHVkZjlkXXxcXHVkODAwW1xcdWRmOWYtXFx1ZGZjM118XFx1ZDgwMFtcXHVkZmM4LVxcdWRmZDVdfFxcdWQ4MDFbXFx1ZGMwMC1cXHVkYzlkXXxcXHVkODAxW1xcdWRjYTAtXFx1ZGNhOV18XFx1ZDgwMVtcXHVkZDAwLVxcdWRkMjddfFxcdWQ4MDFbXFx1ZGQzMC1cXHVkZDYzXXxcXHVkODAxXFx1ZGQ2ZnxcXHVkODAxW1xcdWRlMDAtXFx1ZGYzNl18XFx1ZDgwMVtcXHVkZjQwLVxcdWRmNTVdfFxcdWQ4MDFbXFx1ZGY2MC1cXHVkZjY3XXxcXHVkODA0XFx1ZGMwMHxcXHVkODA0W1xcdWRjMDItXFx1ZGMzN118XFx1ZDgwNFtcXHVkYzQ3LVxcdWRjNGRdfFxcdWQ4MDRbXFx1ZGM2Ni1cXHVkYzZmXXxcXHVkODA0W1xcdWRjODItXFx1ZGNiMl18XFx1ZDgwNFxcdWRjYjd8XFx1ZDgwNFxcdWRjYjh8XFx1ZDgwNFtcXHVkY2JiLVxcdWRjYzFdfFxcdWQ4MDRbXFx1ZGNkMC1cXHVkY2U4XXxcXHVkODA0W1xcdWRjZjAtXFx1ZGNmOV18XFx1ZDgwNFtcXHVkZDAzLVxcdWRkMjZdfFxcdWQ4MDRcXHVkZDJjfFxcdWQ4MDRbXFx1ZGQzNi1cXHVkZDQzXXxcXHVkODA0W1xcdWRkNTAtXFx1ZGQ3Ml18XFx1ZDgwNFtcXHVkZDc0LVxcdWRkNzZdfFxcdWQ4MDRbXFx1ZGQ4Mi1cXHVkZGI1XXxcXHVkODA0W1xcdWRkYmYtXFx1ZGRjOV18XFx1ZDgwNFxcdWRkY2R8XFx1ZDgwNFtcXHVkZGQwLVxcdWRkZGZdfFxcdWQ4MDRbXFx1ZGRlMS1cXHVkZGY0XXxcXHVkODA0W1xcdWRlMDAtXFx1ZGUxMV18XFx1ZDgwNFtcXHVkZTEzLVxcdWRlMmVdfFxcdWQ4MDRcXHVkZTMyfFxcdWQ4MDRcXHVkZTMzfFxcdWQ4MDRcXHVkZTM1fFxcdWQ4MDRbXFx1ZGUzOC1cXHVkZTNkXXxcXHVkODA0W1xcdWRlODAtXFx1ZGU4Nl18XFx1ZDgwNFxcdWRlODh8XFx1ZDgwNFtcXHVkZThhLVxcdWRlOGRdfFxcdWQ4MDRbXFx1ZGU4Zi1cXHVkZTlkXXxcXHVkODA0W1xcdWRlOWYtXFx1ZGVhOV18XFx1ZDgwNFtcXHVkZWIwLVxcdWRlZGVdfFxcdWQ4MDRbXFx1ZGVlMC1cXHVkZWUyXXxcXHVkODA0W1xcdWRlZjAtXFx1ZGVmOV18XFx1ZDgwNFxcdWRmMDJ8XFx1ZDgwNFxcdWRmMDN8XFx1ZDgwNFtcXHVkZjA1LVxcdWRmMGNdfFxcdWQ4MDRcXHVkZjBmfFxcdWQ4MDRcXHVkZjEwfFxcdWQ4MDRbXFx1ZGYxMy1cXHVkZjI4XXxcXHVkODA0W1xcdWRmMmEtXFx1ZGYzMF18XFx1ZDgwNFxcdWRmMzJ8XFx1ZDgwNFxcdWRmMzN8XFx1ZDgwNFtcXHVkZjM1LVxcdWRmMzldfFxcdWQ4MDRbXFx1ZGYzZC1cXHVkZjNmXXxcXHVkODA0W1xcdWRmNDEtXFx1ZGY0NF18XFx1ZDgwNFxcdWRmNDd8XFx1ZDgwNFxcdWRmNDh8XFx1ZDgwNFtcXHVkZjRiLVxcdWRmNGRdfFxcdWQ4MDRcXHVkZjUwfFxcdWQ4MDRcXHVkZjU3fFxcdWQ4MDRbXFx1ZGY1ZC1cXHVkZjYzXXxcXHVkODA1W1xcdWRjODAtXFx1ZGNiMl18XFx1ZDgwNVxcdWRjYjl8XFx1ZDgwNVtcXHVkY2JiLVxcdWRjYmVdfFxcdWQ4MDVcXHVkY2MxfFxcdWQ4MDVbXFx1ZGNjNC1cXHVkY2M3XXxcXHVkODA1W1xcdWRjZDAtXFx1ZGNkOV18XFx1ZDgwNVtcXHVkZDgwLVxcdWRkYjFdfFxcdWQ4MDVbXFx1ZGRiOC1cXHVkZGJiXXxcXHVkODA1XFx1ZGRiZXxcXHVkODA1W1xcdWRkYzEtXFx1ZGRkYl18XFx1ZDgwNVtcXHVkZTAwLVxcdWRlMzJdfFxcdWQ4MDVcXHVkZTNifFxcdWQ4MDVcXHVkZTNjfFxcdWQ4MDVcXHVkZTNlfFxcdWQ4MDVbXFx1ZGU0MS1cXHVkZTQ0XXxcXHVkODA1W1xcdWRlNTAtXFx1ZGU1OV18XFx1ZDgwNVtcXHVkZTgwLVxcdWRlYWFdfFxcdWQ4MDVcXHVkZWFjfFxcdWQ4MDVcXHVkZWFlfFxcdWQ4MDVcXHVkZWFmfFxcdWQ4MDVcXHVkZWI2fFxcdWQ4MDVbXFx1ZGVjMC1cXHVkZWM5XXxcXHVkODA1W1xcdWRmMDAtXFx1ZGYxOV18XFx1ZDgwNVxcdWRmMjB8XFx1ZDgwNVxcdWRmMjF8XFx1ZDgwNVxcdWRmMjZ8XFx1ZDgwNVtcXHVkZjMwLVxcdWRmM2ZdfFxcdWQ4MDZbXFx1ZGNhMC1cXHVkY2YyXXxcXHVkODA2XFx1ZGNmZnxcXHVkODA2W1xcdWRlYzAtXFx1ZGVmOF18XFx1ZDgwOFtcXHVkYzAwLVxcdWRmOTldfFxcdWQ4MDlbXFx1ZGMwMC1cXHVkYzZlXXxcXHVkODA5W1xcdWRjNzAtXFx1ZGM3NF18XFx1ZDgwOVtcXHVkYzgwLVxcdWRkNDNdfFxcdWQ4MGNbXFx1ZGMwMC1cXHVkZmZmXXxcXHVkODBkW1xcdWRjMDAtXFx1ZGMyZV18XFx1ZDgxMVtcXHVkYzAwLVxcdWRlNDZdfFxcdWQ4MWFbXFx1ZGMwMC1cXHVkZTM4XXxcXHVkODFhW1xcdWRlNDAtXFx1ZGU1ZV18XFx1ZDgxYVtcXHVkZTYwLVxcdWRlNjldfFxcdWQ4MWFcXHVkZTZlfFxcdWQ4MWFcXHVkZTZmfFxcdWQ4MWFbXFx1ZGVkMC1cXHVkZWVkXXxcXHVkODFhXFx1ZGVmNXxcXHVkODFhW1xcdWRmMDAtXFx1ZGYyZl18XFx1ZDgxYVtcXHVkZjM3LVxcdWRmNDVdfFxcdWQ4MWFbXFx1ZGY1MC1cXHVkZjU5XXxcXHVkODFhW1xcdWRmNWItXFx1ZGY2MV18XFx1ZDgxYVtcXHVkZjYzLVxcdWRmNzddfFxcdWQ4MWFbXFx1ZGY3ZC1cXHVkZjhmXXxcXHVkODFiW1xcdWRmMDAtXFx1ZGY0NF18XFx1ZDgxYltcXHVkZjUwLVxcdWRmN2VdfFxcdWQ4MWJbXFx1ZGY5My1cXHVkZjlmXXxcXHVkODJjXFx1ZGMwMHxcXHVkODJjXFx1ZGMwMXxcXHVkODJmW1xcdWRjMDAtXFx1ZGM2YV18XFx1ZDgyZltcXHVkYzcwLVxcdWRjN2NdfFxcdWQ4MmZbXFx1ZGM4MC1cXHVkYzg4XXxcXHVkODJmW1xcdWRjOTAtXFx1ZGM5OV18XFx1ZDgyZlxcdWRjOWN8XFx1ZDgyZlxcdWRjOWZ8XFx1ZDgzNFtcXHVkYzAwLVxcdWRjZjVdfFxcdWQ4MzRbXFx1ZGQwMC1cXHVkZDI2XXxcXHVkODM0W1xcdWRkMjktXFx1ZGQ2Nl18XFx1ZDgzNFtcXHVkZDZhLVxcdWRkNzJdfFxcdWQ4MzRcXHVkZDgzfFxcdWQ4MzRcXHVkZDg0fFxcdWQ4MzRbXFx1ZGQ4Yy1cXHVkZGE5XXxcXHVkODM0W1xcdWRkYWUtXFx1ZGRlOF18XFx1ZDgzNFtcXHVkZjYwLVxcdWRmNzFdfFxcdWQ4MzVbXFx1ZGMwMC1cXHVkYzU0XXxcXHVkODM1W1xcdWRjNTYtXFx1ZGM5Y118XFx1ZDgzNVxcdWRjOWV8XFx1ZDgzNVxcdWRjOWZ8XFx1ZDgzNVxcdWRjYTJ8XFx1ZDgzNVxcdWRjYTV8XFx1ZDgzNVxcdWRjYTZ8XFx1ZDgzNVtcXHVkY2E5LVxcdWRjYWNdfFxcdWQ4MzVbXFx1ZGNhZS1cXHVkY2I5XXxcXHVkODM1XFx1ZGNiYnxcXHVkODM1W1xcdWRjYmQtXFx1ZGNjM118XFx1ZDgzNVtcXHVkY2M1LVxcdWRkMDVdfFxcdWQ4MzVbXFx1ZGQwNy1cXHVkZDBhXXxcXHVkODM1W1xcdWRkMGQtXFx1ZGQxNF18XFx1ZDgzNVtcXHVkZDE2LVxcdWRkMWNdfFxcdWQ4MzVbXFx1ZGQxZS1cXHVkZDM5XXxcXHVkODM1W1xcdWRkM2ItXFx1ZGQzZV18XFx1ZDgzNVtcXHVkZDQwLVxcdWRkNDRdfFxcdWQ4MzVcXHVkZDQ2fFxcdWQ4MzVbXFx1ZGQ0YS1cXHVkZDUwXXxcXHVkODM1W1xcdWRkNTItXFx1ZGVhNV18XFx1ZDgzNVtcXHVkZWE4LVxcdWRlZGFdfFxcdWQ4MzVbXFx1ZGVkYy1cXHVkZjE0XXxcXHVkODM1W1xcdWRmMTYtXFx1ZGY0ZV18XFx1ZDgzNVtcXHVkZjUwLVxcdWRmODhdfFxcdWQ4MzVbXFx1ZGY4YS1cXHVkZmMyXXxcXHVkODM1W1xcdWRmYzQtXFx1ZGZjYl18XFx1ZDgzNltcXHVkYzAwLVxcdWRkZmZdfFxcdWQ4MzZbXFx1ZGUzNy1cXHVkZTNhXXxcXHVkODM2W1xcdWRlNmQtXFx1ZGU3NF18XFx1ZDgzNltcXHVkZTc2LVxcdWRlODNdfFxcdWQ4MzZbXFx1ZGU4NS1cXHVkZThiXXxcXHVkODNjW1xcdWRkMTAtXFx1ZGQyZV18XFx1ZDgzY1tcXHVkZDMwLVxcdWRkNjldfFxcdWQ4M2NbXFx1ZGQ3MC1cXHVkZDlhXXxcXHVkODNjW1xcdWRkZTYtXFx1ZGUwMl18XFx1ZDgzY1tcXHVkZTEwLVxcdWRlM2FdfFxcdWQ4M2NbXFx1ZGU0MC1cXHVkZTQ4XXxcXHVkODNjXFx1ZGU1MHxcXHVkODNjXFx1ZGU1MXxbXFx1ZDg0MC1cXHVkODY4XVtcXHVkYzAwLVxcdWRmZmZdfFxcdWQ4NjlbXFx1ZGMwMC1cXHVkZWQ2XXxcXHVkODY5W1xcdWRmMDAtXFx1ZGZmZl18W1xcdWQ4NmEtXFx1ZDg2Y11bXFx1ZGMwMC1cXHVkZmZmXXxcXHVkODZkW1xcdWRjMDAtXFx1ZGYzNF18XFx1ZDg2ZFtcXHVkZjQwLVxcdWRmZmZdfFxcdWQ4NmVbXFx1ZGMwMC1cXHVkYzFkXXxcXHVkODZlW1xcdWRjMjAtXFx1ZGZmZl18W1xcdWQ4NmYtXFx1ZDg3Ml1bXFx1ZGMwMC1cXHVkZmZmXXxcXHVkODczW1xcdWRjMDAtXFx1ZGVhMV18XFx1ZDg3ZVtcXHVkYzAwLVxcdWRlMWRdfFtcXHVkYjgwLVxcdWRiYmVdW1xcdWRjMDAtXFx1ZGZmZl18XFx1ZGJiZltcXHVkYzAwLVxcdWRmZmRdfFtcXHVkYmMwLVxcdWRiZmVdW1xcdWRjMDAtXFx1ZGZmZl18XFx1ZGJmZltcXHVkYzAwLVxcdWRmZmRdJyArXHJcblx0XHRcdCcpfCgnICtcclxuXHRcdFx0XHQnW1xcdTA1OTBcXHUwNWJlXFx1MDVjMFxcdTA1YzNcXHUwNWM2XFx1MDVjOC1cXHUwNWZmXFx1MDdjMC1cXHUwN2VhXFx1MDdmNFxcdTA3ZjVcXHUwN2ZhLVxcdTA4MTVcXHUwODFhXFx1MDgyNFxcdTA4MjhcXHUwODJlLVxcdTA4NThcXHUwODVjLVxcdTA4OWZcXHUyMDBmXFx1ZmIxZFxcdWZiMWYtXFx1ZmIyOFxcdWZiMmEtXFx1ZmI0ZlxcdTA2MDhcXHUwNjBiXFx1MDYwZFxcdTA2MWItXFx1MDY0YVxcdTA2NmQtXFx1MDY2ZlxcdTA2NzEtXFx1MDZkNVxcdTA2ZTVcXHUwNmU2XFx1MDZlZVxcdTA2ZWZcXHUwNmZhLVxcdTA3MTBcXHUwNzEyLVxcdTA3MmZcXHUwNzRiLVxcdTA3YTVcXHUwN2IxLVxcdTA3YmZcXHUwOGEwLVxcdTA4ZTJcXHVmYjUwLVxcdWZkM2RcXHVmZDQwLVxcdWZkY2ZcXHVmZGYwLVxcdWZkZmNcXHVmZGZlXFx1ZmRmZlxcdWZlNzAtXFx1ZmVmZV18XFx1ZDgwMltcXHVkYzAwLVxcdWRkMWVdfFxcdWQ4MDJbXFx1ZGQyMC1cXHVkZTAwXXxcXHVkODAyXFx1ZGUwNHxcXHVkODAyW1xcdWRlMDctXFx1ZGUwYl18XFx1ZDgwMltcXHVkZTEwLVxcdWRlMzddfFxcdWQ4MDJbXFx1ZGUzYi1cXHVkZTNlXXxcXHVkODAyW1xcdWRlNDAtXFx1ZGVlNF18XFx1ZDgwMltcXHVkZWU3LVxcdWRmMzhdfFxcdWQ4MDJbXFx1ZGY0MC1cXHVkZmZmXXxcXHVkODAzW1xcdWRjMDAtXFx1ZGU1Zl18XFx1ZDgwM1tcXHVkZTdmLVxcdWRmZmZdfFxcdWQ4M2FbXFx1ZGMwMC1cXHVkY2NmXXxcXHVkODNhW1xcdWRjZDctXFx1ZGZmZl18XFx1ZDgzYltcXHVkYzAwLVxcdWRkZmZdfFxcdWQ4M2JbXFx1ZGYwMC1cXHVkZmZmXXxcXHVkODNiW1xcdWRmMDAtXFx1ZGZmZl18XFx1ZDgzYltcXHVkZjAwLVxcdWRmZmZdfFxcdWQ4M2JbXFx1ZGYwMC1cXHVkZmZmXXxcXHVkODNiW1xcdWRmMDAtXFx1ZGZmZl18XFx1ZDgzYltcXHVkZjAwLVxcdWRmZmZdfFxcdWQ4M2JbXFx1ZGYwMC1cXHVkZmZmXXxcXHVkODNiW1xcdWRmMDAtXFx1ZGZmZl18XFx1ZDgzYltcXHVkZjAwLVxcdWRmZmZdfFxcdWQ4M2JbXFx1ZGYwMC1cXHVkZmZmXXxcXHVkODNiW1xcdWRmMDAtXFx1ZGZmZl18XFx1ZDgzYltcXHVkZjAwLVxcdWRmZmZdfFxcdWQ4M2JbXFx1ZGYwMC1cXHVkZmZmXXxcXHVkODNiW1xcdWRlMDAtXFx1ZGVlZl18XFx1ZDgzYltcXHVkZWYyLVxcdWRlZmZdJyArXHJcblx0XHRcdCcpJyArXHJcblx0XHQnKSdcclxuXHQpO1xyXG5cclxuXHQvKipcclxuXHQgKiBHZXRzIGRpcmVjdGlvbmFsaXR5IG9mIHRoZSBmaXJzdCBzdHJvbmdseSBkaXJlY3Rpb25hbCBjb2RlcG9pbnRcclxuXHQgKlxyXG5cdCAqIFRoaXMgaXMgdGhlIHJ1bGUgdGhlIEJJREkgYWxnb3JpdGhtIHVzZXMgdG8gZGV0ZXJtaW5lIHRoZSBkaXJlY3Rpb25hbGl0eSBvZlxyXG5cdCAqIHBhcmFncmFwaHMgKCBodHRwOi8vdW5pY29kZS5vcmcvcmVwb3J0cy90cjkvI1RoZV9QYXJhZ3JhcGhfTGV2ZWwgKSBhbmRcclxuXHQgKiBGU0kgaXNvbGF0ZXMgKCBodHRwOi8vdW5pY29kZS5vcmcvcmVwb3J0cy90cjkvI0V4cGxpY2l0X0RpcmVjdGlvbmFsX0lzb2xhdGVzICkuXHJcblx0ICpcclxuXHQgKiBUT0RPOiBEb2VzIG5vdCBoYW5kbGUgQklESSBjb250cm9sIGNoYXJhY3RlcnMgaW5zaWRlIHRoZSB0ZXh0LlxyXG5cdCAqIFRPRE86IERvZXMgbm90IGhhbmRsZSB1bmFsbG9jYXRlZCBjaGFyYWN0ZXJzLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGhlIHRleHQgZnJvbSB3aGljaCB0byBleHRyYWN0IGluaXRpYWwgZGlyZWN0aW9uYWxpdHkuXHJcblx0ICogQHJldHVybiB7c3RyaW5nfSBEaXJlY3Rpb25hbGl0eSAoZWl0aGVyICdsdHInIG9yICdydGwnKVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHN0cm9uZ0RpckZyb21Db250ZW50KCB0ZXh0ICkge1xyXG5cdFx0dmFyIG0gPSB0ZXh0Lm1hdGNoKCBzdHJvbmdEaXJSZWdFeHAgKTtcclxuXHRcdGlmICggIW0gKSB7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCBtWyAyIF0gPT09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0cmV0dXJuICdsdHInO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICdydGwnO1xyXG5cdH1cclxuXHJcblx0JC5leHRlbmQoICQuaTE4bi5wYXJzZXIuZW1pdHRlciwge1xyXG5cdFx0LyoqXHJcblx0XHQgKiBXcmFwcyBhcmd1bWVudCB3aXRoIHVuaWNvZGUgY29udHJvbCBjaGFyYWN0ZXJzIGZvciBkaXJlY3Rpb25hbGl0eSBzYWZldHlcclxuXHRcdCAqXHJcblx0XHQgKiBUaGlzIHNvbHZlcyB0aGUgcHJvYmxlbSB3aGVyZSBkaXJlY3Rpb25hbGl0eS1uZXV0cmFsIGNoYXJhY3RlcnMgYXQgdGhlIGVkZ2Ugb2ZcclxuXHRcdCAqIHRoZSBhcmd1bWVudCBzdHJpbmcgZ2V0IGludGVycHJldGVkIHdpdGggdGhlIHdyb25nIGRpcmVjdGlvbmFsaXR5IGZyb20gdGhlXHJcblx0XHQgKiBlbmNsb3NpbmcgY29udGV4dCwgZ2l2aW5nIHJlbmRlcmluZ3MgdGhhdCBsb29rIGNvcnJ1cHRlZCBsaWtlIFwiKEJlbl8oV01GXCIuXHJcblx0XHQgKlxyXG5cdFx0ICogVGhlIHdyYXBwaW5nIGlzIExSRS4uLlBERiBvciBSTEUuLi5QREYsIGRlcGVuZGluZyBvbiB0aGUgZGV0ZWN0ZWRcclxuXHRcdCAqIGRpcmVjdGlvbmFsaXR5IG9mIHRoZSBhcmd1bWVudCBzdHJpbmcsIHVzaW5nIHRoZSBCSURJIGFsZ29yaXRobSdzIG93biBcIkZpcnN0XHJcblx0XHQgKiBzdHJvbmcgZGlyZWN0aW9uYWwgY29kZXBvaW50XCIgcnVsZS4gRXNzZW50aWFsbHksIHRoaXMgd29ya3Mgcm91bmQgdGhlIGZhY3QgdGhhdFxyXG5cdFx0ICogdGhlcmUgaXMgbm8gZW1iZWRkaW5nIGVxdWl2YWxlbnQgb2YgVSsyMDY4IEZTSSAoaXNvbGF0aW9uIHdpdGggaGV1cmlzdGljXHJcblx0XHQgKiBkaXJlY3Rpb24gaW5mZXJlbmNlKS4gVGhlIGxhdHRlciBpcyBjbGVhbmVyIGJ1dCBzdGlsbCBub3Qgd2lkZWx5IHN1cHBvcnRlZC5cclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ1tdfSBub2RlcyBUaGUgdGV4dCBub2RlcyBmcm9tIHdoaWNoIHRvIHRha2UgdGhlIGZpcnN0IGl0ZW0uXHJcblx0XHQgKiBAcmV0dXJuIHtzdHJpbmd9IFdyYXBwZWQgU3RyaW5nIG9mIGNvbnRlbnQgYXMgbmVlZGVkLlxyXG5cdFx0ICovXHJcblx0XHRiaWRpOiBmdW5jdGlvbiAoIG5vZGVzICkge1xyXG5cdFx0XHR2YXIgZGlyID0gc3Ryb25nRGlyRnJvbUNvbnRlbnQoIG5vZGVzWyAwIF0gKTtcclxuXHRcdFx0aWYgKCBkaXIgPT09ICdsdHInICkge1xyXG5cdFx0XHRcdC8vIFdyYXAgaW4gTEVGVC1UTy1SSUdIVCBFTUJFRERJTkcgLi4uIFBPUCBESVJFQ1RJT05BTCBGT1JNQVRUSU5HXHJcblx0XHRcdFx0cmV0dXJuICdcXHUyMDJBJyArIG5vZGVzWyAwIF0gKyAnXFx1MjAyQyc7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCBkaXIgPT09ICdydGwnICkge1xyXG5cdFx0XHRcdC8vIFdyYXAgaW4gUklHSFQtVE8tTEVGVCBFTUJFRERJTkcgLi4uIFBPUCBESVJFQ1RJT05BTCBGT1JNQVRUSU5HXHJcblx0XHRcdFx0cmV0dXJuICdcXHUyMDJCJyArIG5vZGVzWyAwIF0gKyAnXFx1MjAyQyc7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gTm8gc3Ryb25nIGRpcmVjdGlvbmFsaXR5OiBkbyBub3Qgd3JhcFxyXG5cdFx0XHRyZXR1cm4gbm9kZXNbIDAgXTtcclxuXHRcdH1cclxuXHR9ICk7XHJcbn0oIGpRdWVyeSApICk7XHJcbiIsIi8qIVxyXG4gKiBqUXVlcnkgSW50ZXJuYXRpb25hbGl6YXRpb24gbGlicmFyeVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTEtMjAxMyBTYW50aG9zaCBUaG90dGluZ2FsLCBOZWlsIEthbmRhbGdhb25rYXJcclxuICpcclxuICoganF1ZXJ5LmkxOG4gaXMgZHVhbCBsaWNlbnNlZCBHUEx2MiBvciBsYXRlciBhbmQgTUlULiBZb3UgZG9uJ3QgaGF2ZSB0byBkb1xyXG4gKiBhbnl0aGluZyBzcGVjaWFsIHRvIGNob29zZSBvbmUgbGljZW5zZSBvciB0aGUgb3RoZXIgYW5kIHlvdSBkb24ndCBoYXZlIHRvXHJcbiAqIG5vdGlmeSBhbnlvbmUgd2hpY2ggbGljZW5zZSB5b3UgYXJlIHVzaW5nLiBZb3UgYXJlIGZyZWUgdG8gdXNlXHJcbiAqIFVuaXZlcnNhbExhbmd1YWdlU2VsZWN0b3IgaW4gY29tbWVyY2lhbCBwcm9qZWN0cyBhcyBsb25nIGFzIHRoZSBjb3B5cmlnaHRcclxuICogaGVhZGVyIGlzIGxlZnQgaW50YWN0LiBTZWUgZmlsZXMgR1BMLUxJQ0VOU0UgYW5kIE1JVC1MSUNFTlNFIGZvciBkZXRhaWxzLlxyXG4gKlxyXG4gKiBAbGljZW5jZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5jZSAyLjAgb3IgbGF0ZXJcclxuICogQGxpY2VuY2UgTUlUIExpY2Vuc2VcclxuICovXHJcblxyXG4oIGZ1bmN0aW9uICggJCApIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdHZhciBNZXNzYWdlUGFyc2VyRW1pdHRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMubGFuZ3VhZ2UgPSAkLmkxOG4ubGFuZ3VhZ2VzWyBTdHJpbmcubG9jYWxlIF0gfHwgJC5pMThuLmxhbmd1YWdlc1sgJ2RlZmF1bHQnIF07XHJcblx0fTtcclxuXHJcblx0TWVzc2FnZVBhcnNlckVtaXR0ZXIucHJvdG90eXBlID0ge1xyXG5cdFx0Y29uc3RydWN0b3I6IE1lc3NhZ2VQYXJzZXJFbWl0dGVyLFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKFdlIHB1dCB0aGlzIG1ldGhvZCBkZWZpbml0aW9uIGhlcmUsIGFuZCBub3QgaW4gcHJvdG90eXBlLCB0byBtYWtlXHJcblx0XHQgKiBzdXJlIGl0J3Mgbm90IG92ZXJ3cml0dGVuIGJ5IGFueSBtYWdpYy4pIFdhbGsgZW50aXJlIG5vZGUgc3RydWN0dXJlLFxyXG5cdFx0ICogYXBwbHlpbmcgcmVwbGFjZW1lbnRzIGFuZCB0ZW1wbGF0ZSBmdW5jdGlvbnMgd2hlbiBhcHByb3ByaWF0ZVxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7TWl4ZWR9IG5vZGUgYWJzdHJhY3Qgc3ludGF4IHRyZWUgKHRvcCBub2RlIG9yIHN1Ym5vZGUpXHJcblx0XHQgKiBAcGFyYW0ge0FycmF5fSByZXBsYWNlbWVudHMgZm9yICQxLCAkMiwgLi4uICRuXHJcblx0XHQgKiBAcmV0dXJuIHtNaXhlZH0gc2luZ2xlLXN0cmluZyBub2RlIG9yIGFycmF5IG9mIG5vZGVzIHN1aXRhYmxlIGZvclxyXG5cdFx0ICogIGpRdWVyeSBhcHBlbmRpbmcuXHJcblx0XHQgKi9cclxuXHRcdGVtaXQ6IGZ1bmN0aW9uICggbm9kZSwgcmVwbGFjZW1lbnRzICkge1xyXG5cdFx0XHR2YXIgcmV0LCBzdWJub2Rlcywgb3BlcmF0aW9uLFxyXG5cdFx0XHRcdG1lc3NhZ2VQYXJzZXJFbWl0dGVyID0gdGhpcztcclxuXHJcblx0XHRcdHN3aXRjaCAoIHR5cGVvZiBub2RlICkge1xyXG5cdFx0XHRcdGNhc2UgJ3N0cmluZyc6XHJcblx0XHRcdFx0Y2FzZSAnbnVtYmVyJzpcclxuXHRcdFx0XHRcdHJldCA9IG5vZGU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdvYmplY3QnOlxyXG5cdFx0XHRcdC8vIG5vZGUgaXMgYW4gYXJyYXkgb2Ygbm9kZXNcclxuXHRcdFx0XHRcdHN1Ym5vZGVzID0gJC5tYXAoIG5vZGUuc2xpY2UoIDEgKSwgZnVuY3Rpb24gKCBuICkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gbWVzc2FnZVBhcnNlckVtaXR0ZXIuZW1pdCggbiwgcmVwbGFjZW1lbnRzICk7XHJcblx0XHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRcdFx0b3BlcmF0aW9uID0gbm9kZVsgMCBdLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCB0eXBlb2YgbWVzc2FnZVBhcnNlckVtaXR0ZXJbIG9wZXJhdGlvbiBdID09PSAnZnVuY3Rpb24nICkge1xyXG5cdFx0XHRcdFx0XHRyZXQgPSBtZXNzYWdlUGFyc2VyRW1pdHRlclsgb3BlcmF0aW9uIF0oIHN1Ym5vZGVzLCByZXBsYWNlbWVudHMgKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggJ3Vua25vd24gb3BlcmF0aW9uIFwiJyArIG9wZXJhdGlvbiArICdcIicgKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICd1bmRlZmluZWQnOlxyXG5cdFx0XHRcdC8vIFBhcnNpbmcgdGhlIGVtcHR5IHN0cmluZyAoYXMgYW4gZW50aXJlIGV4cHJlc3Npb24sIG9yIGFzIGFcclxuXHRcdFx0XHQvLyBwYXJhbUV4cHJlc3Npb24gaW4gYSB0ZW1wbGF0ZSkgcmVzdWx0cyBpbiB1bmRlZmluZWRcclxuXHRcdFx0XHQvLyBQZXJoYXBzIGEgbW9yZSBjbGV2ZXIgcGFyc2VyIGNhbiBkZXRlY3QgdGhpcywgYW5kIHJldHVybiB0aGVcclxuXHRcdFx0XHQvLyBlbXB0eSBzdHJpbmc/IE9yIGlzIHRoYXQgdXNlZnVsIGluZm9ybWF0aW9uP1xyXG5cdFx0XHRcdC8vIFRoZSBsb2dpY2FsIHRoaW5nIGlzIHByb2JhYmx5IHRvIHJldHVybiB0aGUgZW1wdHkgc3RyaW5nIGhlcmVcclxuXHRcdFx0XHQvLyB3aGVuIHdlIGVuY291bnRlciB1bmRlZmluZWQuXHJcblx0XHRcdFx0XHRyZXQgPSAnJztcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoICd1bmV4cGVjdGVkIHR5cGUgaW4gQVNUOiAnICsgdHlwZW9mIG5vZGUgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHJldDtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBQYXJzaW5nIGhhcyBiZWVuIGFwcGxpZWQgZGVwdGgtZmlyc3Qgd2UgY2FuIGFzc3VtZSB0aGF0IGFsbCBub2Rlc1xyXG5cdFx0ICogaGVyZSBhcmUgc2luZ2xlIG5vZGVzIE11c3QgcmV0dXJuIGEgc2luZ2xlIG5vZGUgdG8gcGFyZW50cyAtLSBhXHJcblx0XHQgKiBqUXVlcnkgd2l0aCBzeW50aGV0aWMgc3BhbiBIb3dldmVyLCB1bndyYXAgYW55IG90aGVyIHN5bnRoZXRpYyBzcGFuc1xyXG5cdFx0ICogaW4gb3VyIGNoaWxkcmVuIGFuZCBwYXNzIHRoZW0gdXB3YXJkc1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7QXJyYXl9IG5vZGVzIE1peGVkLCBzb21lIHNpbmdsZSBub2Rlcywgc29tZSBhcnJheXMgb2Ygbm9kZXMuXHJcblx0XHQgKiBAcmV0dXJuIHtzdHJpbmd9XHJcblx0XHQgKi9cclxuXHRcdGNvbmNhdDogZnVuY3Rpb24gKCBub2RlcyApIHtcclxuXHRcdFx0dmFyIHJlc3VsdCA9ICcnO1xyXG5cclxuXHRcdFx0JC5lYWNoKCBub2RlcywgZnVuY3Rpb24gKCBpLCBub2RlICkge1xyXG5cdFx0XHRcdC8vIHN0cmluZ3MsIGludGVnZXJzLCBhbnl0aGluZyBlbHNlXHJcblx0XHRcdFx0cmVzdWx0ICs9IG5vZGU7XHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmV0dXJuIGVzY2FwZWQgcmVwbGFjZW1lbnQgb2YgY29ycmVjdCBpbmRleCwgb3Igc3RyaW5nIGlmXHJcblx0XHQgKiB1bmF2YWlsYWJsZS4gTm90ZSB0aGF0IHdlIGV4cGVjdCB0aGUgcGFyc2VkIHBhcmFtZXRlciB0byBiZVxyXG5cdFx0ICogemVyby1iYXNlZC4gaS5lLiAkMSBzaG91bGQgaGF2ZSBiZWNvbWUgWyAwIF0uIGlmIHRoZSBzcGVjaWZpZWRcclxuXHRcdCAqIHBhcmFtZXRlciBpcyBub3QgZm91bmQgcmV0dXJuIHRoZSBzYW1lIHN0cmluZyAoZS5nLiBcIiQ5OVwiIC0+XHJcblx0XHQgKiBwYXJhbWV0ZXIgOTggLT4gbm90IGZvdW5kIC0+IHJldHVybiBcIiQ5OVwiICkgVE9ETyB0aHJvdyBlcnJvciBpZlxyXG5cdFx0ICogbm9kZXMubGVuZ3RoID4gMSA/XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gbm9kZXMgT25lIGVsZW1lbnQsIGludGVnZXIsIG4gPj0gMFxyXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gcmVwbGFjZW1lbnRzIGZvciAkMSwgJDIsIC4uLiAkblxyXG5cdFx0ICogQHJldHVybiB7c3RyaW5nfSByZXBsYWNlbWVudFxyXG5cdFx0ICovXHJcblx0XHRyZXBsYWNlOiBmdW5jdGlvbiAoIG5vZGVzLCByZXBsYWNlbWVudHMgKSB7XHJcblx0XHRcdHZhciBpbmRleCA9IHBhcnNlSW50KCBub2Rlc1sgMCBdLCAxMCApO1xyXG5cclxuXHRcdFx0aWYgKCBpbmRleCA8IHJlcGxhY2VtZW50cy5sZW5ndGggKSB7XHJcblx0XHRcdFx0Ly8gcmVwbGFjZW1lbnQgaXMgbm90IGEgc3RyaW5nLCBkb24ndCB0b3VjaCFcclxuXHRcdFx0XHRyZXR1cm4gcmVwbGFjZW1lbnRzWyBpbmRleCBdO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIGluZGV4IG5vdCBmb3VuZCwgZmFsbGJhY2sgdG8gZGlzcGxheWluZyB2YXJpYWJsZVxyXG5cdFx0XHRcdHJldHVybiAnJCcgKyAoIGluZGV4ICsgMSApO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVHJhbnNmb3JtIHBhcnNlZCBzdHJ1Y3R1cmUgaW50byBwbHVyYWxpemF0aW9uIG4uYi4gVGhlIGZpcnN0IG5vZGUgbWF5XHJcblx0XHQgKiBiZSBhIG5vbi1pbnRlZ2VyIChmb3IgaW5zdGFuY2UsIGEgc3RyaW5nIHJlcHJlc2VudGluZyBhbiBBcmFiaWNcclxuXHRcdCAqIG51bWJlcikuIFNvIGNvbnZlcnQgaXQgYmFjayB3aXRoIHRoZSBjdXJyZW50IGxhbmd1YWdlJ3NcclxuXHRcdCAqIGNvbnZlcnROdW1iZXIuXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gbm9kZXMgTGlzdCBbIHtTdHJpbmd8TnVtYmVyfSwge1N0cmluZ30sIHtTdHJpbmd9IC4uLiBdXHJcblx0XHQgKiBAcmV0dXJuIHtzdHJpbmd9IHNlbGVjdGVkIHBsdXJhbGl6ZWQgZm9ybSBhY2NvcmRpbmcgdG8gY3VycmVudFxyXG5cdFx0ICogIGxhbmd1YWdlLlxyXG5cdFx0ICovXHJcblx0XHRwbHVyYWw6IGZ1bmN0aW9uICggbm9kZXMgKSB7XHJcblx0XHRcdHZhciBjb3VudCA9IHBhcnNlRmxvYXQoIHRoaXMubGFuZ3VhZ2UuY29udmVydE51bWJlciggbm9kZXNbIDAgXSwgMTAgKSApLFxyXG5cdFx0XHRcdGZvcm1zID0gbm9kZXMuc2xpY2UoIDEgKTtcclxuXHJcblx0XHRcdHJldHVybiBmb3Jtcy5sZW5ndGggPyB0aGlzLmxhbmd1YWdlLmNvbnZlcnRQbHVyYWwoIGNvdW50LCBmb3JtcyApIDogJyc7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVHJhbnNmb3JtIHBhcnNlZCBzdHJ1Y3R1cmUgaW50byBnZW5kZXIgVXNhZ2VcclxuXHRcdCAqIHt7Z2VuZGVyOmdlbmRlcnxtYXNjdWxpbmV8ZmVtaW5pbmV8bmV1dHJhbH19LlxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7QXJyYXl9IG5vZGVzIExpc3QgWyB7U3RyaW5nfSwge1N0cmluZ30sIHtTdHJpbmd9ICwge1N0cmluZ30gXVxyXG5cdFx0ICogQHJldHVybiB7c3RyaW5nfSBzZWxlY3RlZCBnZW5kZXIgZm9ybSBhY2NvcmRpbmcgdG8gY3VycmVudCBsYW5ndWFnZVxyXG5cdFx0ICovXHJcblx0XHRnZW5kZXI6IGZ1bmN0aW9uICggbm9kZXMgKSB7XHJcblx0XHRcdHZhciBnZW5kZXIgPSBub2Rlc1sgMCBdLFxyXG5cdFx0XHRcdGZvcm1zID0gbm9kZXMuc2xpY2UoIDEgKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzLmxhbmd1YWdlLmdlbmRlciggZ2VuZGVyLCBmb3JtcyApO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRyYW5zZm9ybSBwYXJzZWQgc3RydWN0dXJlIGludG8gZ3JhbW1hciBjb252ZXJzaW9uLiBJbnZva2VkIGJ5XHJcblx0XHQgKiBwdXR0aW5nIHt7Z3JhbW1hcjpmb3JtfHdvcmR9fSBpbiBhIG1lc3NhZ2VcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBub2RlcyBMaXN0IFt7R3JhbW1hciBjYXNlIGVnOiBnZW5pdGl2ZX0sIHtTdHJpbmcgd29yZH1dXHJcblx0XHQgKiBAcmV0dXJuIHtzdHJpbmd9IHNlbGVjdGVkIGdyYW1tYXRpY2FsIGZvcm0gYWNjb3JkaW5nIHRvIGN1cnJlbnRcclxuXHRcdCAqICBsYW5ndWFnZS5cclxuXHRcdCAqL1xyXG5cdFx0Z3JhbW1hcjogZnVuY3Rpb24gKCBub2RlcyApIHtcclxuXHRcdFx0dmFyIGZvcm0gPSBub2Rlc1sgMCBdLFxyXG5cdFx0XHRcdHdvcmQgPSBub2Rlc1sgMSBdO1xyXG5cclxuXHRcdFx0cmV0dXJuIHdvcmQgJiYgZm9ybSAmJiB0aGlzLmxhbmd1YWdlLmNvbnZlcnRHcmFtbWFyKCB3b3JkLCBmb3JtICk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0JC5leHRlbmQoICQuaTE4bi5wYXJzZXIuZW1pdHRlciwgbmV3IE1lc3NhZ2VQYXJzZXJFbWl0dGVyKCkgKTtcclxufSggalF1ZXJ5ICkgKTtcclxuIiwiLyohXHJcbiAqIGpRdWVyeSBJbnRlcm5hdGlvbmFsaXphdGlvbiBsaWJyYXJ5XHJcbiAqXHJcbiAqIENvcHlyaWdodCAoQykgMjAxMiBTYW50aG9zaCBUaG90dGluZ2FsXHJcbiAqXHJcbiAqIGpxdWVyeS5pMThuIGlzIGR1YWwgbGljZW5zZWQgR1BMdjIgb3IgbGF0ZXIgYW5kIE1JVC4gWW91IGRvbid0IGhhdmUgdG8gZG8gYW55dGhpbmcgc3BlY2lhbCB0b1xyXG4gKiBjaG9vc2Ugb25lIGxpY2Vuc2Ugb3IgdGhlIG90aGVyIGFuZCB5b3UgZG9uJ3QgaGF2ZSB0byBub3RpZnkgYW55b25lIHdoaWNoIGxpY2Vuc2UgeW91IGFyZSB1c2luZy5cclxuICogWW91IGFyZSBmcmVlIHRvIHVzZSBVbml2ZXJzYWxMYW5ndWFnZVNlbGVjdG9yIGluIGNvbW1lcmNpYWwgcHJvamVjdHMgYXMgbG9uZyBhcyB0aGUgY29weXJpZ2h0XHJcbiAqIGhlYWRlciBpcyBsZWZ0IGludGFjdC4gU2VlIGZpbGVzIEdQTC1MSUNFTlNFIGFuZCBNSVQtTElDRU5TRSBmb3IgZGV0YWlscy5cclxuICpcclxuICogQGxpY2VuY2UgR05VIEdlbmVyYWwgUHVibGljIExpY2VuY2UgMi4wIG9yIGxhdGVyXHJcbiAqIEBsaWNlbmNlIE1JVCBMaWNlbnNlXHJcbiAqL1xyXG4oIGZ1bmN0aW9uICggJCApIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdCQuaTE4biA9ICQuaTE4biB8fCB7fTtcclxuXHQkLmV4dGVuZCggJC5pMThuLmZhbGxiYWNrcywge1xyXG5cdFx0YWI6IFsgJ3J1JyBdLFxyXG5cdFx0YWNlOiBbICdpZCcgXSxcclxuXHRcdGFsbjogWyAnc3EnIF0sXHJcblx0XHQvLyBOb3Qgc28gc3RhbmRhcmQgLSBhbHMgaXMgc3VwcG9zZWQgdG8gYmUgVG9zayBBbGJhbmlhbixcclxuXHRcdC8vIGJ1dCBpbiBXaWtpcGVkaWEgaXQncyB1c2VkIGZvciBhIEdlcm1hbmljIGxhbmd1YWdlLlxyXG5cdFx0YWxzOiBbICdnc3cnLCAnZGUnIF0sXHJcblx0XHRhbjogWyAnZXMnIF0sXHJcblx0XHRhbnA6IFsgJ2hpJyBdLFxyXG5cdFx0YXJuOiBbICdlcycgXSxcclxuXHRcdGFyejogWyAnYXInIF0sXHJcblx0XHRhdjogWyAncnUnIF0sXHJcblx0XHRheTogWyAnZXMnIF0sXHJcblx0XHRiYTogWyAncnUnIF0sXHJcblx0XHRiYXI6IFsgJ2RlJyBdLFxyXG5cdFx0J2JhdC1zbWcnOiBbICdzZ3MnLCAnbHQnIF0sXHJcblx0XHRiY2M6IFsgJ2ZhJyBdLFxyXG5cdFx0J2JlLXgtb2xkJzogWyAnYmUtdGFyYXNrJyBdLFxyXG5cdFx0Ymg6IFsgJ2JobycgXSxcclxuXHRcdGJqbjogWyAnaWQnIF0sXHJcblx0XHRibTogWyAnZnInIF0sXHJcblx0XHRicHk6IFsgJ2JuJyBdLFxyXG5cdFx0YnFpOiBbICdmYScgXSxcclxuXHRcdGJ1ZzogWyAnaWQnIF0sXHJcblx0XHQnY2JrLXphbSc6IFsgJ2VzJyBdLFxyXG5cdFx0Y2U6IFsgJ3J1JyBdLFxyXG5cdFx0Y3JoOiBbICdjcmgtbGF0bicgXSxcclxuXHRcdCdjcmgtY3lybCc6IFsgJ3J1JyBdLFxyXG5cdFx0Y3NiOiBbICdwbCcgXSxcclxuXHRcdGN2OiBbICdydScgXSxcclxuXHRcdCdkZS1hdCc6IFsgJ2RlJyBdLFxyXG5cdFx0J2RlLWNoJzogWyAnZGUnIF0sXHJcblx0XHQnZGUtZm9ybWFsJzogWyAnZGUnIF0sXHJcblx0XHRkc2I6IFsgJ2RlJyBdLFxyXG5cdFx0ZHRwOiBbICdtcycgXSxcclxuXHRcdGVnbDogWyAnaXQnIF0sXHJcblx0XHRlbWw6IFsgJ2l0JyBdLFxyXG5cdFx0ZmY6IFsgJ2ZyJyBdLFxyXG5cdFx0Zml0OiBbICdmaScgXSxcclxuXHRcdCdmaXUtdnJvJzogWyAndnJvJywgJ2V0JyBdLFxyXG5cdFx0ZnJjOiBbICdmcicgXSxcclxuXHRcdGZycDogWyAnZnInIF0sXHJcblx0XHRmcnI6IFsgJ2RlJyBdLFxyXG5cdFx0ZnVyOiBbICdpdCcgXSxcclxuXHRcdGdhZzogWyAndHInIF0sXHJcblx0XHRnYW46IFsgJ2dhbi1oYW50JywgJ3poLWhhbnQnLCAnemgtaGFucycgXSxcclxuXHRcdCdnYW4taGFucyc6IFsgJ3poLWhhbnMnIF0sXHJcblx0XHQnZ2FuLWhhbnQnOiBbICd6aC1oYW50JywgJ3poLWhhbnMnIF0sXHJcblx0XHRnbDogWyAncHQnIF0sXHJcblx0XHRnbGs6IFsgJ2ZhJyBdLFxyXG5cdFx0Z246IFsgJ2VzJyBdLFxyXG5cdFx0Z3N3OiBbICdkZScgXSxcclxuXHRcdGhpZjogWyAnaGlmLWxhdG4nIF0sXHJcblx0XHRoc2I6IFsgJ2RlJyBdLFxyXG5cdFx0aHQ6IFsgJ2ZyJyBdLFxyXG5cdFx0aWk6IFsgJ3poLWNuJywgJ3poLWhhbnMnIF0sXHJcblx0XHRpbmg6IFsgJ3J1JyBdLFxyXG5cdFx0aXU6IFsgJ2lrZS1jYW5zJyBdLFxyXG5cdFx0anV0OiBbICdkYScgXSxcclxuXHRcdGp2OiBbICdpZCcgXSxcclxuXHRcdGthYTogWyAna2stbGF0bicsICdray1jeXJsJyBdLFxyXG5cdFx0a2JkOiBbICdrYmQtY3lybCcgXSxcclxuXHRcdGtodzogWyAndXInIF0sXHJcblx0XHRraXU6IFsgJ3RyJyBdLFxyXG5cdFx0a2s6IFsgJ2trLWN5cmwnIF0sXHJcblx0XHQna2stYXJhYic6IFsgJ2trLWN5cmwnIF0sXHJcblx0XHQna2stbGF0bic6IFsgJ2trLWN5cmwnIF0sXHJcblx0XHQna2stY24nOiBbICdray1hcmFiJywgJ2trLWN5cmwnIF0sXHJcblx0XHQna2sta3onOiBbICdray1jeXJsJyBdLFxyXG5cdFx0J2trLXRyJzogWyAna2stbGF0bicsICdray1jeXJsJyBdLFxyXG5cdFx0a2w6IFsgJ2RhJyBdLFxyXG5cdFx0J2tvLWtwJzogWyAna28nIF0sXHJcblx0XHRrb2k6IFsgJ3J1JyBdLFxyXG5cdFx0a3JjOiBbICdydScgXSxcclxuXHRcdGtzOiBbICdrcy1hcmFiJyBdLFxyXG5cdFx0a3NoOiBbICdkZScgXSxcclxuXHRcdGt1OiBbICdrdS1sYXRuJyBdLFxyXG5cdFx0J2t1LWFyYWInOiBbICdja2InIF0sXHJcblx0XHRrdjogWyAncnUnIF0sXHJcblx0XHRsYWQ6IFsgJ2VzJyBdLFxyXG5cdFx0bGI6IFsgJ2RlJyBdLFxyXG5cdFx0bGJlOiBbICdydScgXSxcclxuXHRcdGxlejogWyAncnUnIF0sXHJcblx0XHRsaTogWyAnbmwnIF0sXHJcblx0XHRsaWo6IFsgJ2l0JyBdLFxyXG5cdFx0bGl2OiBbICdldCcgXSxcclxuXHRcdGxtbzogWyAnaXQnIF0sXHJcblx0XHRsbjogWyAnZnInIF0sXHJcblx0XHRsdGc6IFsgJ2x2JyBdLFxyXG5cdFx0bHp6OiBbICd0cicgXSxcclxuXHRcdG1haTogWyAnaGknIF0sXHJcblx0XHQnbWFwLWJtcyc6IFsgJ2p2JywgJ2lkJyBdLFxyXG5cdFx0bWc6IFsgJ2ZyJyBdLFxyXG5cdFx0bWhyOiBbICdydScgXSxcclxuXHRcdG1pbjogWyAnaWQnIF0sXHJcblx0XHRtbzogWyAncm8nIF0sXHJcblx0XHRtcmo6IFsgJ3J1JyBdLFxyXG5cdFx0bXdsOiBbICdwdCcgXSxcclxuXHRcdG15djogWyAncnUnIF0sXHJcblx0XHRtem46IFsgJ2ZhJyBdLFxyXG5cdFx0bmFoOiBbICdlcycgXSxcclxuXHRcdG5hcDogWyAnaXQnIF0sXHJcblx0XHRuZHM6IFsgJ2RlJyBdLFxyXG5cdFx0J25kcy1ubCc6IFsgJ25sJyBdLFxyXG5cdFx0J25sLWluZm9ybWFsJzogWyAnbmwnIF0sXHJcblx0XHRubzogWyAnbmInIF0sXHJcblx0XHRvczogWyAncnUnIF0sXHJcblx0XHRwY2Q6IFsgJ2ZyJyBdLFxyXG5cdFx0cGRjOiBbICdkZScgXSxcclxuXHRcdHBkdDogWyAnZGUnIF0sXHJcblx0XHRwZmw6IFsgJ2RlJyBdLFxyXG5cdFx0cG1zOiBbICdpdCcgXSxcclxuXHRcdHB0OiBbICdwdC1icicgXSxcclxuXHRcdCdwdC1icic6IFsgJ3B0JyBdLFxyXG5cdFx0cXU6IFsgJ2VzJyBdLFxyXG5cdFx0cXVnOiBbICdxdScsICdlcycgXSxcclxuXHRcdHJnbjogWyAnaXQnIF0sXHJcblx0XHRybXk6IFsgJ3JvJyBdLFxyXG5cdFx0J3JvYS1ydXAnOiBbICdydXAnIF0sXHJcblx0XHRydWU6IFsgJ3VrJywgJ3J1JyBdLFxyXG5cdFx0cnVxOiBbICdydXEtbGF0bicsICdybycgXSxcclxuXHRcdCdydXEtY3lybCc6IFsgJ21rJyBdLFxyXG5cdFx0J3J1cS1sYXRuJzogWyAncm8nIF0sXHJcblx0XHRzYTogWyAnaGknIF0sXHJcblx0XHRzYWg6IFsgJ3J1JyBdLFxyXG5cdFx0c2NuOiBbICdpdCcgXSxcclxuXHRcdHNnOiBbICdmcicgXSxcclxuXHRcdHNnczogWyAnbHQnIF0sXHJcblx0XHRzbGk6IFsgJ2RlJyBdLFxyXG5cdFx0c3I6IFsgJ3NyLWVjJyBdLFxyXG5cdFx0c3JuOiBbICdubCcgXSxcclxuXHRcdHN0cTogWyAnZGUnIF0sXHJcblx0XHRzdTogWyAnaWQnIF0sXHJcblx0XHRzemw6IFsgJ3BsJyBdLFxyXG5cdFx0dGN5OiBbICdrbicgXSxcclxuXHRcdHRnOiBbICd0Zy1jeXJsJyBdLFxyXG5cdFx0dHQ6IFsgJ3R0LWN5cmwnLCAncnUnIF0sXHJcblx0XHQndHQtY3lybCc6IFsgJ3J1JyBdLFxyXG5cdFx0dHk6IFsgJ2ZyJyBdLFxyXG5cdFx0dWRtOiBbICdydScgXSxcclxuXHRcdHVnOiBbICd1Zy1hcmFiJyBdLFxyXG5cdFx0dWs6IFsgJ3J1JyBdLFxyXG5cdFx0dmVjOiBbICdpdCcgXSxcclxuXHRcdHZlcDogWyAnZXQnIF0sXHJcblx0XHR2bHM6IFsgJ25sJyBdLFxyXG5cdFx0dm1mOiBbICdkZScgXSxcclxuXHRcdHZvdDogWyAnZmknIF0sXHJcblx0XHR2cm86IFsgJ2V0JyBdLFxyXG5cdFx0d2E6IFsgJ2ZyJyBdLFxyXG5cdFx0d286IFsgJ2ZyJyBdLFxyXG5cdFx0d3V1OiBbICd6aC1oYW5zJyBdLFxyXG5cdFx0eGFsOiBbICdydScgXSxcclxuXHRcdHhtZjogWyAna2EnIF0sXHJcblx0XHR5aTogWyAnaGUnIF0sXHJcblx0XHR6YTogWyAnemgtaGFucycgXSxcclxuXHRcdHplYTogWyAnbmwnIF0sXHJcblx0XHR6aDogWyAnemgtaGFucycgXSxcclxuXHRcdCd6aC1jbGFzc2ljYWwnOiBbICdsemgnIF0sXHJcblx0XHQnemgtY24nOiBbICd6aC1oYW5zJyBdLFxyXG5cdFx0J3poLWhhbnQnOiBbICd6aC1oYW5zJyBdLFxyXG5cdFx0J3poLWhrJzogWyAnemgtaGFudCcsICd6aC1oYW5zJyBdLFxyXG5cdFx0J3poLW1pbi1uYW4nOiBbICduYW4nIF0sXHJcblx0XHQnemgtbW8nOiBbICd6aC1oaycsICd6aC1oYW50JywgJ3poLWhhbnMnIF0sXHJcblx0XHQnemgtbXknOiBbICd6aC1zZycsICd6aC1oYW5zJyBdLFxyXG5cdFx0J3poLXNnJzogWyAnemgtaGFucycgXSxcclxuXHRcdCd6aC10dyc6IFsgJ3poLWhhbnQnLCAnemgtaGFucycgXSxcclxuXHRcdCd6aC15dWUnOiBbICd5dWUnIF1cclxuXHR9ICk7XHJcbn0oIGpRdWVyeSApICk7XHJcbiIsIi8qIVxyXG4gKiBqUXVlcnkgSW50ZXJuYXRpb25hbGl6YXRpb24gbGlicmFyeVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTIgU2FudGhvc2ggVGhvdHRpbmdhbFxyXG4gKlxyXG4gKiBqcXVlcnkuaTE4biBpcyBkdWFsIGxpY2Vuc2VkIEdQTHYyIG9yIGxhdGVyIGFuZCBNSVQuIFlvdSBkb24ndCBoYXZlIHRvIGRvXHJcbiAqIGFueXRoaW5nIHNwZWNpYWwgdG8gY2hvb3NlIG9uZSBsaWNlbnNlIG9yIHRoZSBvdGhlciBhbmQgeW91IGRvbid0IGhhdmUgdG9cclxuICogbm90aWZ5IGFueW9uZSB3aGljaCBsaWNlbnNlIHlvdSBhcmUgdXNpbmcuIFlvdSBhcmUgZnJlZSB0byB1c2VcclxuICogVW5pdmVyc2FsTGFuZ3VhZ2VTZWxlY3RvciBpbiBjb21tZXJjaWFsIHByb2plY3RzIGFzIGxvbmcgYXMgdGhlIGNvcHlyaWdodFxyXG4gKiBoZWFkZXIgaXMgbGVmdCBpbnRhY3QuIFNlZSBmaWxlcyBHUEwtTElDRU5TRSBhbmQgTUlULUxJQ0VOU0UgZm9yIGRldGFpbHMuXHJcbiAqXHJcbiAqIEBsaWNlbmNlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbmNlIDIuMCBvciBsYXRlclxyXG4gKiBAbGljZW5jZSBNSVQgTGljZW5zZVxyXG4gKi9cclxuXHJcbiggZnVuY3Rpb24gKCAkICkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0dmFyIEkxOE4sXHJcblx0XHRzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcclxuXHQvKipcclxuXHQgKiBAY29uc3RydWN0b3JcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG5cdCAqL1xyXG5cdEkxOE4gPSBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XHJcblx0XHQvLyBMb2FkIGRlZmF1bHRzXHJcblx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCgge30sIEkxOE4uZGVmYXVsdHMsIG9wdGlvbnMgKTtcclxuXHJcblx0XHR0aGlzLnBhcnNlciA9IHRoaXMub3B0aW9ucy5wYXJzZXI7XHJcblx0XHR0aGlzLmxvY2FsZSA9IHRoaXMub3B0aW9ucy5sb2NhbGU7XHJcblx0XHR0aGlzLm1lc3NhZ2VTdG9yZSA9IHRoaXMub3B0aW9ucy5tZXNzYWdlU3RvcmU7XHJcblx0XHR0aGlzLmxhbmd1YWdlcyA9IHt9O1xyXG5cdH07XHJcblxyXG5cdEkxOE4ucHJvdG90eXBlID0ge1xyXG5cdFx0LyoqXHJcblx0XHQgKiBMb2NhbGl6ZSBhIGdpdmVuIG1lc3NhZ2VLZXkgdG8gYSBsb2NhbGUuXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZUtleVxyXG5cdFx0ICogQHJldHVybiB7U3RyaW5nfSBMb2NhbGl6ZWQgbWVzc2FnZVxyXG5cdFx0ICovXHJcblx0XHRsb2NhbGl6ZTogZnVuY3Rpb24gKCBtZXNzYWdlS2V5ICkge1xyXG5cdFx0XHR2YXIgbG9jYWxlUGFydHMsIGxvY2FsZVBhcnRJbmRleCwgbG9jYWxlLCBmYWxsYmFja0luZGV4LFxyXG5cdFx0XHRcdHRyeWluZ0xvY2FsZSwgbWVzc2FnZTtcclxuXHJcblx0XHRcdGxvY2FsZSA9IHRoaXMubG9jYWxlO1xyXG5cdFx0XHRmYWxsYmFja0luZGV4ID0gMDtcclxuXHJcblx0XHRcdHdoaWxlICggbG9jYWxlICkge1xyXG5cdFx0XHRcdC8vIEl0ZXJhdGUgdGhyb3VnaCBsb2NhbGVzIHN0YXJ0aW5nIGF0IG1vc3Qtc3BlY2lmaWMgdW50aWxcclxuXHRcdFx0XHQvLyBsb2NhbGl6YXRpb24gaXMgZm91bmQuIEFzIGluIGZpLUxhdG4tRkksIGZpLUxhdG4gYW5kIGZpLlxyXG5cdFx0XHRcdGxvY2FsZVBhcnRzID0gbG9jYWxlLnNwbGl0KCAnLScgKTtcclxuXHRcdFx0XHRsb2NhbGVQYXJ0SW5kZXggPSBsb2NhbGVQYXJ0cy5sZW5ndGg7XHJcblxyXG5cdFx0XHRcdGRvIHtcclxuXHRcdFx0XHRcdHRyeWluZ0xvY2FsZSA9IGxvY2FsZVBhcnRzLnNsaWNlKCAwLCBsb2NhbGVQYXJ0SW5kZXggKS5qb2luKCAnLScgKTtcclxuXHRcdFx0XHRcdG1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2VTdG9yZS5nZXQoIHRyeWluZ0xvY2FsZSwgbWVzc2FnZUtleSApO1xyXG5cclxuXHRcdFx0XHRcdGlmICggbWVzc2FnZSApIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIG1lc3NhZ2U7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0bG9jYWxlUGFydEluZGV4LS07XHJcblx0XHRcdFx0fSB3aGlsZSAoIGxvY2FsZVBhcnRJbmRleCApO1xyXG5cclxuXHRcdFx0XHRpZiAoIGxvY2FsZSA9PT0gJ2VuJyApIHtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bG9jYWxlID0gKCAkLmkxOG4uZmFsbGJhY2tzWyB0aGlzLmxvY2FsZSBdICYmXHJcblx0XHRcdFx0XHRcdCQuaTE4bi5mYWxsYmFja3NbIHRoaXMubG9jYWxlIF1bIGZhbGxiYWNrSW5kZXggXSApIHx8XHJcblx0XHRcdFx0XHRcdHRoaXMub3B0aW9ucy5mYWxsYmFja0xvY2FsZTtcclxuXHRcdFx0XHQkLmkxOG4ubG9nKCAnVHJ5aW5nIGZhbGxiYWNrIGxvY2FsZSBmb3IgJyArIHRoaXMubG9jYWxlICsgJzogJyArIGxvY2FsZSArICcgKCcgKyBtZXNzYWdlS2V5ICsgJyknICk7XHJcblxyXG5cdFx0XHRcdGZhbGxiYWNrSW5kZXgrKztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8ga2V5IG5vdCBmb3VuZFxyXG5cdFx0XHRyZXR1cm4gJyc7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qXHJcblx0XHQgKiBEZXN0cm95IHRoZSBpMThuIGluc3RhbmNlLlxyXG5cdFx0ICovXHJcblx0XHRkZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdCQucmVtb3ZlRGF0YSggZG9jdW1lbnQsICdpMThuJyApO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEdlbmVyYWwgbWVzc2FnZSBsb2FkaW5nIEFQSSBUaGlzIGNhbiB0YWtlIGEgVVJMIHN0cmluZyBmb3JcclxuXHRcdCAqIHRoZSBqc29uIGZvcm1hdHRlZCBtZXNzYWdlcy4gRXhhbXBsZTpcclxuXHRcdCAqIDxjb2RlPmxvYWQoJ3BhdGgvdG8vYWxsX2xvY2FsaXphdGlvbnMuanNvbicpOzwvY29kZT5cclxuXHRcdCAqXHJcblx0XHQgKiBUbyBsb2FkIGEgbG9jYWxpemF0aW9uIGZpbGUgZm9yIGEgbG9jYWxlOlxyXG5cdFx0ICogPGNvZGU+XHJcblx0XHQgKiBsb2FkKCdwYXRoL3RvL2RlLW1lc3NhZ2VzLmpzb24nLCAnZGUnICk7XHJcblx0XHQgKiA8L2NvZGU+XHJcblx0XHQgKlxyXG5cdFx0ICogVG8gbG9hZCBhIGxvY2FsaXphdGlvbiBmaWxlIGZyb20gYSBkaXJlY3Rvcnk6XHJcblx0XHQgKiA8Y29kZT5cclxuXHRcdCAqIGxvYWQoJ3BhdGgvdG8vaTE4bi9kaXJlY3RvcnknLCAnZGUnICk7XHJcblx0XHQgKiA8L2NvZGU+XHJcblx0XHQgKiBUaGUgYWJvdmUgbWV0aG9kIGhhcyB0aGUgYWR2YW50YWdlIG9mIGZhbGxiYWNrIHJlc29sdXRpb24uXHJcblx0XHQgKiBpZSwgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGxvYWQgdGhlIGZhbGxiYWNrIGxvY2FsZXMgZm9yIGRlLlxyXG5cdFx0ICogRm9yIG1vc3QgdXNlY2FzZXMsIHRoaXMgaXMgdGhlIHJlY29tbWVuZGVkIG1ldGhvZC5cclxuXHRcdCAqIEl0IGlzIG9wdGlvbmFsIHRvIGhhdmUgdHJhaWxpbmcgc2xhc2ggYXQgZW5kLlxyXG5cdFx0ICpcclxuXHRcdCAqIEEgZGF0YSBvYmplY3QgY29udGFpbmluZyBtZXNzYWdlIGtleS0gbWVzc2FnZSB0cmFuc2xhdGlvbiBtYXBwaW5nc1xyXG5cdFx0ICogY2FuIGFsc28gYmUgcGFzc2VkLiBFeGFtcGxlOlxyXG5cdFx0ICogPGNvZGU+XHJcblx0XHQgKiBsb2FkKCB7ICdoZWxsbycgOiAnSGVsbG8nIH0sIG9wdGlvbmFsTG9jYWxlICk7XHJcblx0XHQgKiA8L2NvZGU+XHJcblx0XHQgKlxyXG5cdFx0ICogQSBzb3VyY2UgbWFwIGNvbnRhaW5pbmcga2V5LXZhbHVlIHBhaXIgb2YgbGFuZ3VhZ2VuYW1lIGFuZCBsb2NhdGlvbnNcclxuXHRcdCAqIGNhbiBhbHNvIGJlIHBhc3NlZC4gRXhhbXBsZTpcclxuXHRcdCAqIDxjb2RlPlxyXG5cdFx0ICogbG9hZCgge1xyXG5cdFx0ICogYm46ICdpMThuL2JuLmpzb24nLFxyXG5cdFx0ICogaGU6ICdpMThuL2hlLmpzb24nLFxyXG5cdFx0ICogZW46ICdpMThuL2VuLmpzb24nXHJcblx0XHQgKiB9IClcclxuXHRcdCAqIDwvY29kZT5cclxuXHRcdCAqXHJcblx0XHQgKiBJZiB0aGUgZGF0YSBhcmd1bWVudCBpcyBudWxsL3VuZGVmaW5lZC9mYWxzZSxcclxuXHRcdCAqIGFsbCBjYWNoZWQgbWVzc2FnZXMgZm9yIHRoZSBpMThuIGluc3RhbmNlIHdpbGwgZ2V0IHJlc2V0LlxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc291cmNlXHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxlIExhbmd1YWdlIHRhZ1xyXG5cdFx0ICogQHJldHVybiB7alF1ZXJ5LlByb21pc2V9XHJcblx0XHQgKi9cclxuXHRcdGxvYWQ6IGZ1bmN0aW9uICggc291cmNlLCBsb2NhbGUgKSB7XHJcblx0XHRcdHZhciBmYWxsYmFja0xvY2FsZXMsIGxvY0luZGV4LCBmYWxsYmFja0xvY2FsZSwgc291cmNlTWFwID0ge307XHJcblx0XHRcdGlmICggIXNvdXJjZSAmJiAhbG9jYWxlICkge1xyXG5cdFx0XHRcdHNvdXJjZSA9ICdpMThuLycgKyAkLmkxOG4oKS5sb2NhbGUgKyAnLmpzb24nO1xyXG5cdFx0XHRcdGxvY2FsZSA9ICQuaTE4bigpLmxvY2FsZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnICYmXHJcblx0XHRcdFx0Ly8gc291cmNlIGV4dGVuc2lvbiBzaG91bGQgYmUganNvbiwgYnV0IGNhbiBoYXZlIHF1ZXJ5IHBhcmFtcyBhZnRlciB0aGF0LlxyXG5cdFx0XHRcdHNvdXJjZS5zcGxpdCggJz8nIClbIDAgXS5zcGxpdCggJy4nICkucG9wKCkgIT09ICdqc29uJ1xyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHQvLyBMb2FkIHNwZWNpZmllZCBsb2NhbGUgdGhlbiBjaGVjayBmb3IgZmFsbGJhY2tzIHdoZW4gZGlyZWN0b3J5IGlzXHJcblx0XHRcdFx0Ly8gc3BlY2lmaWVkIGluIGxvYWQoKVxyXG5cdFx0XHRcdHNvdXJjZU1hcFsgbG9jYWxlIF0gPSBzb3VyY2UgKyAnLycgKyBsb2NhbGUgKyAnLmpzb24nO1xyXG5cdFx0XHRcdGZhbGxiYWNrTG9jYWxlcyA9ICggJC5pMThuLmZhbGxiYWNrc1sgbG9jYWxlIF0gfHwgW10gKVxyXG5cdFx0XHRcdFx0LmNvbmNhdCggdGhpcy5vcHRpb25zLmZhbGxiYWNrTG9jYWxlICk7XHJcblx0XHRcdFx0Zm9yICggbG9jSW5kZXggPSAwOyBsb2NJbmRleCA8IGZhbGxiYWNrTG9jYWxlcy5sZW5ndGg7IGxvY0luZGV4KysgKSB7XHJcblx0XHRcdFx0XHRmYWxsYmFja0xvY2FsZSA9IGZhbGxiYWNrTG9jYWxlc1sgbG9jSW5kZXggXTtcclxuXHRcdFx0XHRcdHNvdXJjZU1hcFsgZmFsbGJhY2tMb2NhbGUgXSA9IHNvdXJjZSArICcvJyArIGZhbGxiYWNrTG9jYWxlICsgJy5qc29uJztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMubG9hZCggc291cmNlTWFwICk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMubWVzc2FnZVN0b3JlLmxvYWQoIHNvdXJjZSwgbG9jYWxlICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogRG9lcyBwYXJhbWV0ZXIgYW5kIG1hZ2ljIHdvcmQgc3Vic3RpdHV0aW9uLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgTWVzc2FnZSBrZXlcclxuXHRcdCAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtZXRlcnMgTWVzc2FnZSBwYXJhbWV0ZXJzXHJcblx0XHQgKiBAcmV0dXJuIHtzdHJpbmd9XHJcblx0XHQgKi9cclxuXHRcdHBhcnNlOiBmdW5jdGlvbiAoIGtleSwgcGFyYW1ldGVycyApIHtcclxuXHRcdFx0dmFyIG1lc3NhZ2UgPSB0aGlzLmxvY2FsaXplKCBrZXkgKTtcclxuXHRcdFx0Ly8gRklYTUU6IFRoaXMgY2hhbmdlcyB0aGUgc3RhdGUgb2YgdGhlIEkxOE4gb2JqZWN0LFxyXG5cdFx0XHQvLyBzaG91bGQgcHJvYmFibHkgbm90IGNoYW5nZSB0aGUgJ3RoaXMucGFyc2VyJyBidXQganVzdFxyXG5cdFx0XHQvLyBwYXNzIGl0IHRvIHRoZSBwYXJzZXIuXHJcblx0XHRcdHRoaXMucGFyc2VyLmxhbmd1YWdlID0gJC5pMThuLmxhbmd1YWdlc1sgJC5pMThuKCkubG9jYWxlIF0gfHwgJC5pMThuLmxhbmd1YWdlc1sgJ2RlZmF1bHQnIF07XHJcblx0XHRcdGlmICggbWVzc2FnZSA9PT0gJycgKSB7XHJcblx0XHRcdFx0bWVzc2FnZSA9IGtleTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJzZXIucGFyc2UoIG1lc3NhZ2UsIHBhcmFtZXRlcnMgKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBQcm9jZXNzIGEgbWVzc2FnZSBmcm9tIHRoZSAkLkkxOE4gaW5zdGFuY2VcclxuXHQgKiBmb3IgdGhlIGN1cnJlbnQgZG9jdW1lbnQsIHN0b3JlZCBpbiBqUXVlcnkuZGF0YShkb2N1bWVudCkuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEtleSBvZiB0aGUgbWVzc2FnZS5cclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0xIFtwYXJhbS4uLl0gVmFyaWFkaWMgbGlzdCBvZiBwYXJhbWV0ZXJzIGZvciB7a2V5fS5cclxuXHQgKiBAcmV0dXJuIHtzdHJpbmd8JC5JMThOfSBQYXJzZWQgbWVzc2FnZSwgb3IgaWYgbm8ga2V5IHdhcyBnaXZlblxyXG5cdCAqIHRoZSBpbnN0YW5jZSBvZiAkLkkxOE4gaXMgcmV0dXJuZWQuXHJcblx0ICovXHJcblx0JC5pMThuID0gZnVuY3Rpb24gKCBrZXksIHBhcmFtMSApIHtcclxuXHRcdHZhciBwYXJhbWV0ZXJzLFxyXG5cdFx0XHRpMThuID0gJC5kYXRhKCBkb2N1bWVudCwgJ2kxOG4nICksXHJcblx0XHRcdG9wdGlvbnMgPSB0eXBlb2Yga2V5ID09PSAnb2JqZWN0JyAmJiBrZXk7XHJcblxyXG5cdFx0Ly8gSWYgdGhlIGxvY2FsZSBvcHRpb24gZm9yIHRoaXMgY2FsbCBpcyBkaWZmZXJlbnQgdGhlbiB0aGUgc2V0dXAgc28gZmFyLFxyXG5cdFx0Ly8gdXBkYXRlIGl0IGF1dG9tYXRpY2FsbHkuIFRoaXMgZG9lc24ndCBqdXN0IGNoYW5nZSB0aGUgY29udGV4dCBmb3IgdGhpc1xyXG5cdFx0Ly8gY2FsbCBidXQgZm9yIGFsbCBmdXR1cmUgY2FsbCBhcyB3ZWxsLlxyXG5cdFx0Ly8gSWYgdGhlcmUgaXMgbm8gaTE4biBzZXR1cCB5ZXQsIGRvbid0IGRvIHRoaXMuIEl0IHdpbGwgYmUgdGFrZW4gY2FyZSBvZlxyXG5cdFx0Ly8gYnkgdGhlIGBuZXcgSTE4TmAgY29uc3RydWN0aW9uIGJlbG93LlxyXG5cdFx0Ly8gTk9URTogSXQgc2hvdWxkIG9ubHkgY2hhbmdlIGxhbmd1YWdlIGZvciB0aGlzIG9uZSBjYWxsLlxyXG5cdFx0Ly8gVGhlbiBjYWNoZSBpbnN0YW5jZXMgb2YgSTE4TiBzb21ld2hlcmUuXHJcblx0XHRpZiAoIG9wdGlvbnMgJiYgb3B0aW9ucy5sb2NhbGUgJiYgaTE4biAmJiBpMThuLmxvY2FsZSAhPT0gb3B0aW9ucy5sb2NhbGUgKSB7XHJcblx0XHRcdGkxOG4ubG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCAhaTE4biApIHtcclxuXHRcdFx0aTE4biA9IG5ldyBJMThOKCBvcHRpb25zICk7XHJcblx0XHRcdCQuZGF0YSggZG9jdW1lbnQsICdpMThuJywgaTE4biApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggdHlwZW9mIGtleSA9PT0gJ3N0cmluZycgKSB7XHJcblx0XHRcdGlmICggcGFyYW0xICE9PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdFx0cGFyYW1ldGVycyA9IHNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMSApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHBhcmFtZXRlcnMgPSBbXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGkxOG4ucGFyc2UoIGtleSwgcGFyYW1ldGVycyApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8gRklYTUU6IHJlbW92ZSB0aGlzIGZlYXR1cmUvYnVnLlxyXG5cdFx0XHRyZXR1cm4gaTE4bjtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQkLmZuLmkxOG4gPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR2YXIgaTE4biA9ICQuZGF0YSggZG9jdW1lbnQsICdpMThuJyApO1xyXG5cclxuXHRcdGlmICggIWkxOG4gKSB7XHJcblx0XHRcdGkxOG4gPSBuZXcgSTE4TigpO1xyXG5cdFx0XHQkLmRhdGEoIGRvY3VtZW50LCAnaTE4bicsIGkxOG4gKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciAkdGhpcyA9ICQoIHRoaXMgKSxcclxuXHRcdFx0XHRtZXNzYWdlS2V5ID0gJHRoaXMuZGF0YSggJ2kxOG4nICksXHJcblx0XHRcdFx0bEJyYWNrZXQsIHJCcmFja2V0LCB0eXBlLCBrZXk7XHJcblxyXG5cdFx0XHRpZiAoIG1lc3NhZ2VLZXkgKSB7XHJcblx0XHRcdFx0bEJyYWNrZXQgPSBtZXNzYWdlS2V5LmluZGV4T2YoICdbJyApO1xyXG5cdFx0XHRcdHJCcmFja2V0ID0gbWVzc2FnZUtleS5pbmRleE9mKCAnXScgKTtcclxuXHRcdFx0XHRpZiAoIGxCcmFja2V0ICE9PSAtMSAmJiByQnJhY2tldCAhPT0gLTEgJiYgbEJyYWNrZXQgPCByQnJhY2tldCApIHtcclxuXHRcdFx0XHRcdHR5cGUgPSBtZXNzYWdlS2V5LnNsaWNlKCBsQnJhY2tldCArIDEsIHJCcmFja2V0ICk7XHJcblx0XHRcdFx0XHRrZXkgPSBtZXNzYWdlS2V5LnNsaWNlKCByQnJhY2tldCArIDEgKTtcclxuXHRcdFx0XHRcdGlmICggdHlwZSA9PT0gJ2h0bWwnICkge1xyXG5cdFx0XHRcdFx0XHQkdGhpcy5odG1sKCBpMThuLnBhcnNlKCBrZXkgKSApO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0JHRoaXMuYXR0ciggdHlwZSwgaTE4bi5wYXJzZSgga2V5ICkgKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JHRoaXMudGV4dCggaTE4bi5wYXJzZSggbWVzc2FnZUtleSApICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCR0aGlzLmZpbmQoICdbZGF0YS1pMThuXScgKS5pMThuKCk7XHJcblx0XHRcdH1cclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cclxuXHRmdW5jdGlvbiBnZXREZWZhdWx0TG9jYWxlKCkge1xyXG5cdFx0dmFyIG5hdiwgbG9jYWxlID0gJCggJ2h0bWwnICkuYXR0ciggJ2xhbmcnICk7XHJcblxyXG5cdFx0aWYgKCAhbG9jYWxlICkge1xyXG5cdFx0XHRpZiAoIHR5cGVvZiB3aW5kb3cubmF2aWdhdG9yICE9PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdFx0bmF2ID0gd2luZG93Lm5hdmlnYXRvcjtcclxuXHRcdFx0XHRsb2NhbGUgPSBuYXYubGFuZ3VhZ2UgfHwgbmF2LnVzZXJMYW5ndWFnZSB8fCAnJztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRsb2NhbGUgPSAnJztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGxvY2FsZTtcclxuXHR9XHJcblxyXG5cdCQuaTE4bi5sYW5ndWFnZXMgPSB7fTtcclxuXHQkLmkxOG4ubWVzc2FnZVN0b3JlID0gJC5pMThuLm1lc3NhZ2VTdG9yZSB8fCB7fTtcclxuXHQkLmkxOG4ucGFyc2VyID0ge1xyXG5cdFx0Ly8gVGhlIGRlZmF1bHQgcGFyc2VyIG9ubHkgaGFuZGxlcyB2YXJpYWJsZSBzdWJzdGl0dXRpb25cclxuXHRcdHBhcnNlOiBmdW5jdGlvbiAoIG1lc3NhZ2UsIHBhcmFtZXRlcnMgKSB7XHJcblx0XHRcdHJldHVybiBtZXNzYWdlLnJlcGxhY2UoIC9cXCQoXFxkKykvZywgZnVuY3Rpb24gKCBzdHIsIG1hdGNoICkge1xyXG5cdFx0XHRcdHZhciBpbmRleCA9IHBhcnNlSW50KCBtYXRjaCwgMTAgKSAtIDE7XHJcblx0XHRcdFx0cmV0dXJuIHBhcmFtZXRlcnNbIGluZGV4IF0gIT09IHVuZGVmaW5lZCA/IHBhcmFtZXRlcnNbIGluZGV4IF0gOiAnJCcgKyBtYXRjaDtcclxuXHRcdFx0fSApO1xyXG5cdFx0fSxcclxuXHRcdGVtaXR0ZXI6IHt9XHJcblx0fTtcclxuXHQkLmkxOG4uZmFsbGJhY2tzID0ge307XHJcblx0JC5pMThuLmRlYnVnID0gZmFsc2U7XHJcblx0JC5pMThuLmxvZyA9IGZ1bmN0aW9uICggLyogYXJndW1lbnRzICovICkge1xyXG5cdFx0aWYgKCB3aW5kb3cuY29uc29sZSAmJiAkLmkxOG4uZGVidWcgKSB7XHJcblx0XHRcdHdpbmRvdy5jb25zb2xlLmxvZy5hcHBseSggd2luZG93LmNvbnNvbGUsIGFyZ3VtZW50cyApO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0LyogU3RhdGljIG1lbWJlcnMgKi9cclxuXHRJMThOLmRlZmF1bHRzID0ge1xyXG5cdFx0bG9jYWxlOiBnZXREZWZhdWx0TG9jYWxlKCksXHJcblx0XHRmYWxsYmFja0xvY2FsZTogJ2VuJyxcclxuXHRcdHBhcnNlcjogJC5pMThuLnBhcnNlcixcclxuXHRcdG1lc3NhZ2VTdG9yZTogJC5pMThuLm1lc3NhZ2VTdG9yZVxyXG5cdH07XHJcblxyXG5cdC8vIEV4cG9zZSBjb25zdHJ1Y3RvclxyXG5cdCQuaTE4bi5jb25zdHJ1Y3RvciA9IEkxOE47XHJcbn0oIGpRdWVyeSApICk7IiwiLyogZ2xvYmFsIHBsdXJhbFJ1bGVQYXJzZXIgKi9cclxuKCBmdW5jdGlvbiAoICQgKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHQvLyBqc2NzOmRpc2FibGVcclxuXHR2YXIgbGFuZ3VhZ2UgPSB7XHJcblx0XHQvLyBDTERSIHBsdXJhbCBydWxlcyBnZW5lcmF0ZWQgdXNpbmdcclxuXHRcdC8vIGxpYnMvQ0xEUlBsdXJhbFJ1bGVQYXJzZXIvdG9vbHMvUGx1cmFsWE1MMkpTT04uaHRtbFxyXG5cdFx0cGx1cmFsUnVsZXM6IHtcclxuXHRcdFx0YWs6IHtcclxuXHRcdFx0XHRvbmU6ICduID0gMC4uMSdcclxuXHRcdFx0fSxcclxuXHRcdFx0YW06IHtcclxuXHRcdFx0XHRvbmU6ICdpID0gMCBvciBuID0gMSdcclxuXHRcdFx0fSxcclxuXHRcdFx0YXI6IHtcclxuXHRcdFx0XHR6ZXJvOiAnbiA9IDAnLFxyXG5cdFx0XHRcdG9uZTogJ24gPSAxJyxcclxuXHRcdFx0XHR0d286ICduID0gMicsXHJcblx0XHRcdFx0ZmV3OiAnbiAlIDEwMCA9IDMuLjEwJyxcclxuXHRcdFx0XHRtYW55OiAnbiAlIDEwMCA9IDExLi45OSdcclxuXHRcdFx0fSxcclxuXHRcdFx0YXJzOiB7XHJcblx0XHRcdFx0emVybzogJ24gPSAwJyxcclxuXHRcdFx0XHRvbmU6ICduID0gMScsXHJcblx0XHRcdFx0dHdvOiAnbiA9IDInLFxyXG5cdFx0XHRcdGZldzogJ24gJSAxMDAgPSAzLi4xMCcsXHJcblx0XHRcdFx0bWFueTogJ24gJSAxMDAgPSAxMS4uOTknXHJcblx0XHRcdH0sXHJcblx0XHRcdGFzOiB7XHJcblx0XHRcdFx0b25lOiAnaSA9IDAgb3IgbiA9IDEnXHJcblx0XHRcdH0sXHJcblx0XHRcdGJlOiB7XHJcblx0XHRcdFx0b25lOiAnbiAlIDEwID0gMSBhbmQgbiAlIDEwMCAhPSAxMScsXHJcblx0XHRcdFx0ZmV3OiAnbiAlIDEwID0gMi4uNCBhbmQgbiAlIDEwMCAhPSAxMi4uMTQnLFxyXG5cdFx0XHRcdG1hbnk6ICduICUgMTAgPSAwIG9yIG4gJSAxMCA9IDUuLjkgb3IgbiAlIDEwMCA9IDExLi4xNCdcclxuXHRcdFx0fSxcclxuXHRcdFx0Ymg6IHtcclxuXHRcdFx0XHRvbmU6ICduID0gMC4uMSdcclxuXHRcdFx0fSxcclxuXHRcdFx0Ym46IHtcclxuXHRcdFx0XHRvbmU6ICdpID0gMCBvciBuID0gMSdcclxuXHRcdFx0fSxcclxuXHRcdFx0YnI6IHtcclxuXHRcdFx0XHRvbmU6ICduICUgMTAgPSAxIGFuZCBuICUgMTAwICE9IDExLDcxLDkxJyxcclxuXHRcdFx0XHR0d286ICduICUgMTAgPSAyIGFuZCBuICUgMTAwICE9IDEyLDcyLDkyJyxcclxuXHRcdFx0XHRmZXc6ICduICUgMTAgPSAzLi40LDkgYW5kIG4gJSAxMDAgIT0gMTAuLjE5LDcwLi43OSw5MC4uOTknLFxyXG5cdFx0XHRcdG1hbnk6ICduICE9IDAgYW5kIG4gJSAxMDAwMDAwID0gMCdcclxuXHRcdFx0fSxcclxuXHRcdFx0YnM6IHtcclxuXHRcdFx0XHRvbmU6ICd2ID0gMCBhbmQgaSAlIDEwID0gMSBhbmQgaSAlIDEwMCAhPSAxMSBvciBmICUgMTAgPSAxIGFuZCBmICUgMTAwICE9IDExJyxcclxuXHRcdFx0XHRmZXc6ICd2ID0gMCBhbmQgaSAlIDEwID0gMi4uNCBhbmQgaSAlIDEwMCAhPSAxMi4uMTQgb3IgZiAlIDEwID0gMi4uNCBhbmQgZiAlIDEwMCAhPSAxMi4uMTQnXHJcblx0XHRcdH0sXHJcblx0XHRcdGNzOiB7XHJcblx0XHRcdFx0b25lOiAnaSA9IDEgYW5kIHYgPSAwJyxcclxuXHRcdFx0XHRmZXc6ICdpID0gMi4uNCBhbmQgdiA9IDAnLFxyXG5cdFx0XHRcdG1hbnk6ICd2ICE9IDAnXHJcblx0XHRcdH0sXHJcblx0XHRcdGN5OiB7XHJcblx0XHRcdFx0emVybzogJ24gPSAwJyxcclxuXHRcdFx0XHRvbmU6ICduID0gMScsXHJcblx0XHRcdFx0dHdvOiAnbiA9IDInLFxyXG5cdFx0XHRcdGZldzogJ24gPSAzJyxcclxuXHRcdFx0XHRtYW55OiAnbiA9IDYnXHJcblx0XHRcdH0sXHJcblx0XHRcdGRhOiB7XHJcblx0XHRcdFx0b25lOiAnbiA9IDEgb3IgdCAhPSAwIGFuZCBpID0gMCwxJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkc2I6IHtcclxuXHRcdFx0XHRvbmU6ICd2ID0gMCBhbmQgaSAlIDEwMCA9IDEgb3IgZiAlIDEwMCA9IDEnLFxyXG5cdFx0XHRcdHR3bzogJ3YgPSAwIGFuZCBpICUgMTAwID0gMiBvciBmICUgMTAwID0gMicsXHJcblx0XHRcdFx0ZmV3OiAndiA9IDAgYW5kIGkgJSAxMDAgPSAzLi40IG9yIGYgJSAxMDAgPSAzLi40J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmYToge1xyXG5cdFx0XHRcdG9uZTogJ2kgPSAwIG9yIG4gPSAxJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmZjoge1xyXG5cdFx0XHRcdG9uZTogJ2kgPSAwLDEnXHJcblx0XHRcdH0sXHJcblx0XHRcdGZpbDoge1xyXG5cdFx0XHRcdG9uZTogJ3YgPSAwIGFuZCBpID0gMSwyLDMgb3IgdiA9IDAgYW5kIGkgJSAxMCAhPSA0LDYsOSBvciB2ICE9IDAgYW5kIGYgJSAxMCAhPSA0LDYsOSdcclxuXHRcdFx0fSxcclxuXHRcdFx0ZnI6IHtcclxuXHRcdFx0XHRvbmU6ICdpID0gMCwxJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRnYToge1xyXG5cdFx0XHRcdG9uZTogJ24gPSAxJyxcclxuXHRcdFx0XHR0d286ICduID0gMicsXHJcblx0XHRcdFx0ZmV3OiAnbiA9IDMuLjYnLFxyXG5cdFx0XHRcdG1hbnk6ICduID0gNy4uMTAnXHJcblx0XHRcdH0sXHJcblx0XHRcdGdkOiB7XHJcblx0XHRcdFx0b25lOiAnbiA9IDEsMTEnLFxyXG5cdFx0XHRcdHR3bzogJ24gPSAyLDEyJyxcclxuXHRcdFx0XHRmZXc6ICduID0gMy4uMTAsMTMuLjE5J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRndToge1xyXG5cdFx0XHRcdG9uZTogJ2kgPSAwIG9yIG4gPSAxJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRndXc6IHtcclxuXHRcdFx0XHRvbmU6ICduID0gMC4uMSdcclxuXHRcdFx0fSxcclxuXHRcdFx0Z3Y6IHtcclxuXHRcdFx0XHRvbmU6ICd2ID0gMCBhbmQgaSAlIDEwID0gMScsXHJcblx0XHRcdFx0dHdvOiAndiA9IDAgYW5kIGkgJSAxMCA9IDInLFxyXG5cdFx0XHRcdGZldzogJ3YgPSAwIGFuZCBpICUgMTAwID0gMCwyMCw0MCw2MCw4MCcsXHJcblx0XHRcdFx0bWFueTogJ3YgIT0gMCdcclxuXHRcdFx0fSxcclxuXHRcdFx0aGU6IHtcclxuXHRcdFx0XHRvbmU6ICdpID0gMSBhbmQgdiA9IDAnLFxyXG5cdFx0XHRcdHR3bzogJ2kgPSAyIGFuZCB2ID0gMCcsXHJcblx0XHRcdFx0bWFueTogJ3YgPSAwIGFuZCBuICE9IDAuLjEwIGFuZCBuICUgMTAgPSAwJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRoaToge1xyXG5cdFx0XHRcdG9uZTogJ2kgPSAwIG9yIG4gPSAxJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRocjoge1xyXG5cdFx0XHRcdG9uZTogJ3YgPSAwIGFuZCBpICUgMTAgPSAxIGFuZCBpICUgMTAwICE9IDExIG9yIGYgJSAxMCA9IDEgYW5kIGYgJSAxMDAgIT0gMTEnLFxyXG5cdFx0XHRcdGZldzogJ3YgPSAwIGFuZCBpICUgMTAgPSAyLi40IGFuZCBpICUgMTAwICE9IDEyLi4xNCBvciBmICUgMTAgPSAyLi40IGFuZCBmICUgMTAwICE9IDEyLi4xNCdcclxuXHRcdFx0fSxcclxuXHRcdFx0aHNiOiB7XHJcblx0XHRcdFx0b25lOiAndiA9IDAgYW5kIGkgJSAxMDAgPSAxIG9yIGYgJSAxMDAgPSAxJyxcclxuXHRcdFx0XHR0d286ICd2ID0gMCBhbmQgaSAlIDEwMCA9IDIgb3IgZiAlIDEwMCA9IDInLFxyXG5cdFx0XHRcdGZldzogJ3YgPSAwIGFuZCBpICUgMTAwID0gMy4uNCBvciBmICUgMTAwID0gMy4uNCdcclxuXHRcdFx0fSxcclxuXHRcdFx0aHk6IHtcclxuXHRcdFx0XHRvbmU6ICdpID0gMCwxJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRpczoge1xyXG5cdFx0XHRcdG9uZTogJ3QgPSAwIGFuZCBpICUgMTAgPSAxIGFuZCBpICUgMTAwICE9IDExIG9yIHQgIT0gMCdcclxuXHRcdFx0fSxcclxuXHRcdFx0aXU6IHtcclxuXHRcdFx0XHRvbmU6ICduID0gMScsXHJcblx0XHRcdFx0dHdvOiAnbiA9IDInXHJcblx0XHRcdH0sXHJcblx0XHRcdGl3OiB7XHJcblx0XHRcdFx0b25lOiAnaSA9IDEgYW5kIHYgPSAwJyxcclxuXHRcdFx0XHR0d286ICdpID0gMiBhbmQgdiA9IDAnLFxyXG5cdFx0XHRcdG1hbnk6ICd2ID0gMCBhbmQgbiAhPSAwLi4xMCBhbmQgbiAlIDEwID0gMCdcclxuXHRcdFx0fSxcclxuXHRcdFx0a2FiOiB7XHJcblx0XHRcdFx0b25lOiAnaSA9IDAsMSdcclxuXHRcdFx0fSxcclxuXHRcdFx0a246IHtcclxuXHRcdFx0XHRvbmU6ICdpID0gMCBvciBuID0gMSdcclxuXHRcdFx0fSxcclxuXHRcdFx0a3c6IHtcclxuXHRcdFx0XHRvbmU6ICduID0gMScsXHJcblx0XHRcdFx0dHdvOiAnbiA9IDInXHJcblx0XHRcdH0sXHJcblx0XHRcdGxhZzoge1xyXG5cdFx0XHRcdHplcm86ICduID0gMCcsXHJcblx0XHRcdFx0b25lOiAnaSA9IDAsMSBhbmQgbiAhPSAwJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRsbjoge1xyXG5cdFx0XHRcdG9uZTogJ24gPSAwLi4xJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRsdDoge1xyXG5cdFx0XHRcdG9uZTogJ24gJSAxMCA9IDEgYW5kIG4gJSAxMDAgIT0gMTEuLjE5JyxcclxuXHRcdFx0XHRmZXc6ICduICUgMTAgPSAyLi45IGFuZCBuICUgMTAwICE9IDExLi4xOScsXHJcblx0XHRcdFx0bWFueTogJ2YgIT0gMCdcclxuXHRcdFx0fSxcclxuXHRcdFx0bHY6IHtcclxuXHRcdFx0XHR6ZXJvOiAnbiAlIDEwID0gMCBvciBuICUgMTAwID0gMTEuLjE5IG9yIHYgPSAyIGFuZCBmICUgMTAwID0gMTEuLjE5JyxcclxuXHRcdFx0XHRvbmU6ICduICUgMTAgPSAxIGFuZCBuICUgMTAwICE9IDExIG9yIHYgPSAyIGFuZCBmICUgMTAgPSAxIGFuZCBmICUgMTAwICE9IDExIG9yIHYgIT0gMiBhbmQgZiAlIDEwID0gMSdcclxuXHRcdFx0fSxcclxuXHRcdFx0bWc6IHtcclxuXHRcdFx0XHRvbmU6ICduID0gMC4uMSdcclxuXHRcdFx0fSxcclxuXHRcdFx0bWs6IHtcclxuXHRcdFx0XHRvbmU6ICd2ID0gMCBhbmQgaSAlIDEwID0gMSBvciBmICUgMTAgPSAxJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRtbzoge1xyXG5cdFx0XHRcdG9uZTogJ2kgPSAxIGFuZCB2ID0gMCcsXHJcblx0XHRcdFx0ZmV3OiAndiAhPSAwIG9yIG4gPSAwIG9yIG4gIT0gMSBhbmQgbiAlIDEwMCA9IDEuLjE5J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRtcjoge1xyXG5cdFx0XHRcdG9uZTogJ2kgPSAwIG9yIG4gPSAxJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRtdDoge1xyXG5cdFx0XHRcdG9uZTogJ24gPSAxJyxcclxuXHRcdFx0XHRmZXc6ICduID0gMCBvciBuICUgMTAwID0gMi4uMTAnLFxyXG5cdFx0XHRcdG1hbnk6ICduICUgMTAwID0gMTEuLjE5J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRuYXE6IHtcclxuXHRcdFx0XHRvbmU6ICduID0gMScsXHJcblx0XHRcdFx0dHdvOiAnbiA9IDInXHJcblx0XHRcdH0sXHJcblx0XHRcdG5zbzoge1xyXG5cdFx0XHRcdG9uZTogJ24gPSAwLi4xJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRwYToge1xyXG5cdFx0XHRcdG9uZTogJ24gPSAwLi4xJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRwbDoge1xyXG5cdFx0XHRcdG9uZTogJ2kgPSAxIGFuZCB2ID0gMCcsXHJcblx0XHRcdFx0ZmV3OiAndiA9IDAgYW5kIGkgJSAxMCA9IDIuLjQgYW5kIGkgJSAxMDAgIT0gMTIuLjE0JyxcclxuXHRcdFx0XHRtYW55OiAndiA9IDAgYW5kIGkgIT0gMSBhbmQgaSAlIDEwID0gMC4uMSBvciB2ID0gMCBhbmQgaSAlIDEwID0gNS4uOSBvciB2ID0gMCBhbmQgaSAlIDEwMCA9IDEyLi4xNCdcclxuXHRcdFx0fSxcclxuXHRcdFx0cHJnOiB7XHJcblx0XHRcdFx0emVybzogJ24gJSAxMCA9IDAgb3IgbiAlIDEwMCA9IDExLi4xOSBvciB2ID0gMiBhbmQgZiAlIDEwMCA9IDExLi4xOScsXHJcblx0XHRcdFx0b25lOiAnbiAlIDEwID0gMSBhbmQgbiAlIDEwMCAhPSAxMSBvciB2ID0gMiBhbmQgZiAlIDEwID0gMSBhbmQgZiAlIDEwMCAhPSAxMSBvciB2ICE9IDIgYW5kIGYgJSAxMCA9IDEnXHJcblx0XHRcdH0sXHJcblx0XHRcdHB0OiB7XHJcblx0XHRcdFx0b25lOiAnaSA9IDAuLjEnXHJcblx0XHRcdH0sXHJcblx0XHRcdHJvOiB7XHJcblx0XHRcdFx0b25lOiAnaSA9IDEgYW5kIHYgPSAwJyxcclxuXHRcdFx0XHRmZXc6ICd2ICE9IDAgb3IgbiA9IDAgb3IgbiAhPSAxIGFuZCBuICUgMTAwID0gMS4uMTknXHJcblx0XHRcdH0sXHJcblx0XHRcdHJ1OiB7XHJcblx0XHRcdFx0b25lOiAndiA9IDAgYW5kIGkgJSAxMCA9IDEgYW5kIGkgJSAxMDAgIT0gMTEnLFxyXG5cdFx0XHRcdGZldzogJ3YgPSAwIGFuZCBpICUgMTAgPSAyLi40IGFuZCBpICUgMTAwICE9IDEyLi4xNCcsXHJcblx0XHRcdFx0bWFueTogJ3YgPSAwIGFuZCBpICUgMTAgPSAwIG9yIHYgPSAwIGFuZCBpICUgMTAgPSA1Li45IG9yIHYgPSAwIGFuZCBpICUgMTAwID0gMTEuLjE0J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZToge1xyXG5cdFx0XHRcdG9uZTogJ24gPSAxJyxcclxuXHRcdFx0XHR0d286ICduID0gMidcclxuXHRcdFx0fSxcclxuXHRcdFx0c2g6IHtcclxuXHRcdFx0XHRvbmU6ICd2ID0gMCBhbmQgaSAlIDEwID0gMSBhbmQgaSAlIDEwMCAhPSAxMSBvciBmICUgMTAgPSAxIGFuZCBmICUgMTAwICE9IDExJyxcclxuXHRcdFx0XHRmZXc6ICd2ID0gMCBhbmQgaSAlIDEwID0gMi4uNCBhbmQgaSAlIDEwMCAhPSAxMi4uMTQgb3IgZiAlIDEwID0gMi4uNCBhbmQgZiAlIDEwMCAhPSAxMi4uMTQnXHJcblx0XHRcdH0sXHJcblx0XHRcdHNoaToge1xyXG5cdFx0XHRcdG9uZTogJ2kgPSAwIG9yIG4gPSAxJyxcclxuXHRcdFx0XHRmZXc6ICduID0gMi4uMTAnXHJcblx0XHRcdH0sXHJcblx0XHRcdHNpOiB7XHJcblx0XHRcdFx0b25lOiAnbiA9IDAsMSBvciBpID0gMCBhbmQgZiA9IDEnXHJcblx0XHRcdH0sXHJcblx0XHRcdHNrOiB7XHJcblx0XHRcdFx0b25lOiAnaSA9IDEgYW5kIHYgPSAwJyxcclxuXHRcdFx0XHRmZXc6ICdpID0gMi4uNCBhbmQgdiA9IDAnLFxyXG5cdFx0XHRcdG1hbnk6ICd2ICE9IDAnXHJcblx0XHRcdH0sXHJcblx0XHRcdHNsOiB7XHJcblx0XHRcdFx0b25lOiAndiA9IDAgYW5kIGkgJSAxMDAgPSAxJyxcclxuXHRcdFx0XHR0d286ICd2ID0gMCBhbmQgaSAlIDEwMCA9IDInLFxyXG5cdFx0XHRcdGZldzogJ3YgPSAwIGFuZCBpICUgMTAwID0gMy4uNCBvciB2ICE9IDAnXHJcblx0XHRcdH0sXHJcblx0XHRcdHNtYToge1xyXG5cdFx0XHRcdG9uZTogJ24gPSAxJyxcclxuXHRcdFx0XHR0d286ICduID0gMidcclxuXHRcdFx0fSxcclxuXHRcdFx0c21pOiB7XHJcblx0XHRcdFx0b25lOiAnbiA9IDEnLFxyXG5cdFx0XHRcdHR3bzogJ24gPSAyJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzbWo6IHtcclxuXHRcdFx0XHRvbmU6ICduID0gMScsXHJcblx0XHRcdFx0dHdvOiAnbiA9IDInXHJcblx0XHRcdH0sXHJcblx0XHRcdHNtbjoge1xyXG5cdFx0XHRcdG9uZTogJ24gPSAxJyxcclxuXHRcdFx0XHR0d286ICduID0gMidcclxuXHRcdFx0fSxcclxuXHRcdFx0c21zOiB7XHJcblx0XHRcdFx0b25lOiAnbiA9IDEnLFxyXG5cdFx0XHRcdHR3bzogJ24gPSAyJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzcjoge1xyXG5cdFx0XHRcdG9uZTogJ3YgPSAwIGFuZCBpICUgMTAgPSAxIGFuZCBpICUgMTAwICE9IDExIG9yIGYgJSAxMCA9IDEgYW5kIGYgJSAxMDAgIT0gMTEnLFxyXG5cdFx0XHRcdGZldzogJ3YgPSAwIGFuZCBpICUgMTAgPSAyLi40IGFuZCBpICUgMTAwICE9IDEyLi4xNCBvciBmICUgMTAgPSAyLi40IGFuZCBmICUgMTAwICE9IDEyLi4xNCdcclxuXHRcdFx0fSxcclxuXHRcdFx0dGk6IHtcclxuXHRcdFx0XHRvbmU6ICduID0gMC4uMSdcclxuXHRcdFx0fSxcclxuXHRcdFx0dGw6IHtcclxuXHRcdFx0XHRvbmU6ICd2ID0gMCBhbmQgaSA9IDEsMiwzIG9yIHYgPSAwIGFuZCBpICUgMTAgIT0gNCw2LDkgb3IgdiAhPSAwIGFuZCBmICUgMTAgIT0gNCw2LDknXHJcblx0XHRcdH0sXHJcblx0XHRcdHR6bToge1xyXG5cdFx0XHRcdG9uZTogJ24gPSAwLi4xIG9yIG4gPSAxMS4uOTknXHJcblx0XHRcdH0sXHJcblx0XHRcdHVrOiB7XHJcblx0XHRcdFx0b25lOiAndiA9IDAgYW5kIGkgJSAxMCA9IDEgYW5kIGkgJSAxMDAgIT0gMTEnLFxyXG5cdFx0XHRcdGZldzogJ3YgPSAwIGFuZCBpICUgMTAgPSAyLi40IGFuZCBpICUgMTAwICE9IDEyLi4xNCcsXHJcblx0XHRcdFx0bWFueTogJ3YgPSAwIGFuZCBpICUgMTAgPSAwIG9yIHYgPSAwIGFuZCBpICUgMTAgPSA1Li45IG9yIHYgPSAwIGFuZCBpICUgMTAwID0gMTEuLjE0J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR3YToge1xyXG5cdFx0XHRcdG9uZTogJ24gPSAwLi4xJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR6dToge1xyXG5cdFx0XHRcdG9uZTogJ2kgPSAwIG9yIG4gPSAxJ1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Ly8ganNjczplbmFibGVcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFBsdXJhbCBmb3JtIHRyYW5zZm9ybWF0aW9ucywgbmVlZGVkIGZvciBzb21lIGxhbmd1YWdlcy5cclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge2ludGVnZXJ9IGNvdW50XHJcblx0XHQgKiAgICAgICAgICAgIE5vbi1sb2NhbGl6ZWQgcXVhbnRpZmllclxyXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gZm9ybXNcclxuXHRcdCAqICAgICAgICAgICAgTGlzdCBvZiBwbHVyYWwgZm9ybXNcclxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ30gQ29ycmVjdCBmb3JtIGZvciBxdWFudGlmaWVyIGluIHRoaXMgbGFuZ3VhZ2VcclxuXHRcdCAqL1xyXG5cdFx0Y29udmVydFBsdXJhbDogZnVuY3Rpb24gKCBjb3VudCwgZm9ybXMgKSB7XHJcblx0XHRcdHZhciBwbHVyYWxSdWxlcyxcclxuXHRcdFx0XHRwbHVyYWxGb3JtSW5kZXgsXHJcblx0XHRcdFx0aW5kZXgsXHJcblx0XHRcdFx0ZXhwbGljaXRQbHVyYWxQYXR0ZXJuID0gbmV3IFJlZ0V4cCggJ1xcXFxkKz0nLCAnaScgKSxcclxuXHRcdFx0XHRmb3JtQ291bnQsXHJcblx0XHRcdFx0Zm9ybTtcclxuXHJcblx0XHRcdGlmICggIWZvcm1zIHx8IGZvcm1zLmxlbmd0aCA9PT0gMCApIHtcclxuXHRcdFx0XHRyZXR1cm4gJyc7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIEhhbmRsZSBmb3IgRXhwbGljaXQgMD0gJiAxPSB2YWx1ZXNcclxuXHRcdFx0Zm9yICggaW5kZXggPSAwOyBpbmRleCA8IGZvcm1zLmxlbmd0aDsgaW5kZXgrKyApIHtcclxuXHRcdFx0XHRmb3JtID0gZm9ybXNbIGluZGV4IF07XHJcblx0XHRcdFx0aWYgKCBleHBsaWNpdFBsdXJhbFBhdHRlcm4udGVzdCggZm9ybSApICkge1xyXG5cdFx0XHRcdFx0Zm9ybUNvdW50ID0gcGFyc2VJbnQoIGZvcm0uc2xpY2UoIDAsIGZvcm0uaW5kZXhPZiggJz0nICkgKSwgMTAgKTtcclxuXHRcdFx0XHRcdGlmICggZm9ybUNvdW50ID09PSBjb3VudCApIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuICggZm9ybS5zbGljZSggZm9ybS5pbmRleE9mKCAnPScgKSArIDEgKSApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Zm9ybXNbIGluZGV4IF0gPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmb3JtcyA9ICQubWFwKCBmb3JtcywgZnVuY3Rpb24gKCBmb3JtICkge1xyXG5cdFx0XHRcdGlmICggZm9ybSAhPT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZvcm07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRwbHVyYWxSdWxlcyA9IHRoaXMucGx1cmFsUnVsZXNbICQuaTE4bigpLmxvY2FsZSBdO1xyXG5cclxuXHRcdFx0aWYgKCAhcGx1cmFsUnVsZXMgKSB7XHJcblx0XHRcdFx0Ly8gZGVmYXVsdCBmYWxsYmFjay5cclxuXHRcdFx0XHRyZXR1cm4gKCBjb3VudCA9PT0gMSApID8gZm9ybXNbIDAgXSA6IGZvcm1zWyAxIF07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHBsdXJhbEZvcm1JbmRleCA9IHRoaXMuZ2V0UGx1cmFsRm9ybSggY291bnQsIHBsdXJhbFJ1bGVzICk7XHJcblx0XHRcdHBsdXJhbEZvcm1JbmRleCA9IE1hdGgubWluKCBwbHVyYWxGb3JtSW5kZXgsIGZvcm1zLmxlbmd0aCAtIDEgKTtcclxuXHJcblx0XHRcdHJldHVybiBmb3Jtc1sgcGx1cmFsRm9ybUluZGV4IF07XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogRm9yIHRoZSBudW1iZXIsIGdldCB0aGUgcGx1cmFsIGZvciBpbmRleFxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7aW50ZWdlcn0gbnVtYmVyXHJcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gcGx1cmFsUnVsZXNcclxuXHRcdCAqIEByZXR1cm4ge2ludGVnZXJ9IHBsdXJhbCBmb3JtIGluZGV4XHJcblx0XHQgKi9cclxuXHRcdGdldFBsdXJhbEZvcm06IGZ1bmN0aW9uICggbnVtYmVyLCBwbHVyYWxSdWxlcyApIHtcclxuXHRcdFx0dmFyIGksXHJcblx0XHRcdFx0cGx1cmFsRm9ybXMgPSBbICd6ZXJvJywgJ29uZScsICd0d28nLCAnZmV3JywgJ21hbnknLCAnb3RoZXInIF0sXHJcblx0XHRcdFx0cGx1cmFsRm9ybUluZGV4ID0gMDtcclxuXHJcblx0XHRcdGZvciAoIGkgPSAwOyBpIDwgcGx1cmFsRm9ybXMubGVuZ3RoOyBpKysgKSB7XHJcblx0XHRcdFx0aWYgKCBwbHVyYWxSdWxlc1sgcGx1cmFsRm9ybXNbIGkgXSBdICkge1xyXG5cdFx0XHRcdFx0aWYgKCBwbHVyYWxSdWxlUGFyc2VyKCBwbHVyYWxSdWxlc1sgcGx1cmFsRm9ybXNbIGkgXSBdLCBudW1iZXIgKSApIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHBsdXJhbEZvcm1JbmRleDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRwbHVyYWxGb3JtSW5kZXgrKztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBwbHVyYWxGb3JtSW5kZXg7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQ29udmVydHMgYSBudW1iZXIgdXNpbmcgZGlnaXRUcmFuc2Zvcm1UYWJsZS5cclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbnVtIFZhbHVlIHRvIGJlIGNvbnZlcnRlZFxyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBpbnRlZ2VyIENvbnZlcnQgdGhlIHJldHVybiB2YWx1ZSB0byBhbiBpbnRlZ2VyXHJcblx0XHQgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBudW1iZXIgY29udmVydGVkIGludG8gYSBTdHJpbmcuXHJcblx0XHQgKi9cclxuXHRcdGNvbnZlcnROdW1iZXI6IGZ1bmN0aW9uICggbnVtLCBpbnRlZ2VyICkge1xyXG5cdFx0XHR2YXIgdG1wLCBpdGVtLCBpLFxyXG5cdFx0XHRcdHRyYW5zZm9ybVRhYmxlLCBudW1iZXJTdHJpbmcsIGNvbnZlcnRlZE51bWJlcjtcclxuXHJcblx0XHRcdC8vIFNldCB0aGUgdGFyZ2V0IFRyYW5zZm9ybSB0YWJsZTpcclxuXHRcdFx0dHJhbnNmb3JtVGFibGUgPSB0aGlzLmRpZ2l0VHJhbnNmb3JtVGFibGUoICQuaTE4bigpLmxvY2FsZSApO1xyXG5cdFx0XHRudW1iZXJTdHJpbmcgPSBTdHJpbmcoIG51bSApO1xyXG5cdFx0XHRjb252ZXJ0ZWROdW1iZXIgPSAnJztcclxuXHJcblx0XHRcdGlmICggIXRyYW5zZm9ybVRhYmxlICkge1xyXG5cdFx0XHRcdHJldHVybiBudW07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIENoZWNrIGlmIHRoZSByZXN0b3JlIHRvIExhdGluIG51bWJlciBmbGFnIGlzIHNldDpcclxuXHRcdFx0aWYgKCBpbnRlZ2VyICkge1xyXG5cdFx0XHRcdGlmICggcGFyc2VGbG9hdCggbnVtLCAxMCApID09PSBudW0gKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gbnVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dG1wID0gW107XHJcblxyXG5cdFx0XHRcdGZvciAoIGl0ZW0gaW4gdHJhbnNmb3JtVGFibGUgKSB7XHJcblx0XHRcdFx0XHR0bXBbIHRyYW5zZm9ybVRhYmxlWyBpdGVtIF0gXSA9IGl0ZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0cmFuc2Zvcm1UYWJsZSA9IHRtcDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Zm9yICggaSA9IDA7IGkgPCBudW1iZXJTdHJpbmcubGVuZ3RoOyBpKysgKSB7XHJcblx0XHRcdFx0aWYgKCB0cmFuc2Zvcm1UYWJsZVsgbnVtYmVyU3RyaW5nWyBpIF0gXSApIHtcclxuXHRcdFx0XHRcdGNvbnZlcnRlZE51bWJlciArPSB0cmFuc2Zvcm1UYWJsZVsgbnVtYmVyU3RyaW5nWyBpIF0gXTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Y29udmVydGVkTnVtYmVyICs9IG51bWJlclN0cmluZ1sgaSBdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGludGVnZXIgPyBwYXJzZUZsb2F0KCBjb252ZXJ0ZWROdW1iZXIsIDEwICkgOiBjb252ZXJ0ZWROdW1iZXI7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogR3JhbW1hdGljYWwgdHJhbnNmb3JtYXRpb25zLCBuZWVkZWQgZm9yIGluZmxlY3RlZCBsYW5ndWFnZXMuXHJcblx0XHQgKiBJbnZva2VkIGJ5IHB1dHRpbmcge3tncmFtbWFyOmZvcm18d29yZH19IGluIGEgbWVzc2FnZS5cclxuXHRcdCAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIGZvciBsYW5ndWFnZXMgdGhhdCBuZWVkIHNwZWNpYWwgZ3JhbW1hciBydWxlc1xyXG5cdFx0ICogYXBwbGllZCBkeW5hbWljYWxseS5cclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gd29yZFxyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGZvcm1cclxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ31cclxuXHRcdCAqL1xyXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcblx0XHRjb252ZXJ0R3JhbW1hcjogZnVuY3Rpb24gKCB3b3JkLCBmb3JtICkge1xyXG5cdFx0XHRyZXR1cm4gd29yZDtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBQcm92aWRlcyBhbiBhbHRlcm5hdGl2ZSB0ZXh0IGRlcGVuZGluZyBvbiBzcGVjaWZpZWQgZ2VuZGVyLiBVc2FnZVxyXG5cdFx0ICoge3tnZW5kZXI6W2dlbmRlcnx1c2VyIG9iamVjdF18bWFzY3VsaW5lfGZlbWluaW5lfG5ldXRyYWx9fS4gSWYgc2Vjb25kXHJcblx0XHQgKiBvciB0aGlyZCBwYXJhbWV0ZXIgYXJlIG5vdCBzcGVjaWZpZWQsIG1hc2N1bGluZSBpcyB1c2VkLlxyXG5cdFx0ICpcclxuXHRcdCAqIFRoZXNlIGRldGFpbHMgbWF5IGJlIG92ZXJyaWRlbiBwZXIgbGFuZ3VhZ2UuXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGdlbmRlclxyXG5cdFx0ICogICAgICBtYWxlLCBmZW1hbGUsIG9yIGFueXRoaW5nIGVsc2UgZm9yIG5ldXRyYWwuXHJcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBmb3Jtc1xyXG5cdFx0ICogICAgICBMaXN0IG9mIGdlbmRlciBmb3Jtc1xyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ31cclxuXHRcdCAqL1xyXG5cdFx0Z2VuZGVyOiBmdW5jdGlvbiAoIGdlbmRlciwgZm9ybXMgKSB7XHJcblx0XHRcdGlmICggIWZvcm1zIHx8IGZvcm1zLmxlbmd0aCA9PT0gMCApIHtcclxuXHRcdFx0XHRyZXR1cm4gJyc7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHdoaWxlICggZm9ybXMubGVuZ3RoIDwgMiApIHtcclxuXHRcdFx0XHRmb3Jtcy5wdXNoKCBmb3Jtc1sgZm9ybXMubGVuZ3RoIC0gMSBdICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggZ2VuZGVyID09PSAnbWFsZScgKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZvcm1zWyAwIF07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggZ2VuZGVyID09PSAnZmVtYWxlJyApIHtcclxuXHRcdFx0XHRyZXR1cm4gZm9ybXNbIDEgXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuICggZm9ybXMubGVuZ3RoID09PSAzICkgPyBmb3Jtc1sgMiBdIDogZm9ybXNbIDAgXTtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBHZXQgdGhlIGRpZ2l0IHRyYW5zZm9ybSB0YWJsZSBmb3IgdGhlIGdpdmVuIGxhbmd1YWdlXHJcblx0XHQgKiBTZWUgaHR0cDovL2NsZHIudW5pY29kZS5vcmcvdHJhbnNsYXRpb24vbnVtYmVyaW5nLXN5c3RlbXNcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2VcclxuXHRcdCAqIEByZXR1cm4ge0FycmF5fGJvb2xlYW59IExpc3Qgb2YgZGlnaXRzIGluIHRoZSBwYXNzZWQgbGFuZ3VhZ2Ugb3IgZmFsc2VcclxuXHRcdCAqIHJlcHJlc2VudGF0aW9uLCBvciBib29sZWFuIGZhbHNlIGlmIHRoZXJlIGlzIG5vIGluZm9ybWF0aW9uLlxyXG5cdFx0ICovXHJcblx0XHRkaWdpdFRyYW5zZm9ybVRhYmxlOiBmdW5jdGlvbiAoIGxhbmd1YWdlICkge1xyXG5cdFx0XHR2YXIgdGFibGVzID0ge1xyXG5cdFx0XHRcdGFyOiAn2aDZodmi2aPZpNml2abZp9mo2aknLFxyXG5cdFx0XHRcdGZhOiAn27Dbsduy27PbtNu127bbt9u427knLFxyXG5cdFx0XHRcdG1sOiAn4LWm4LWn4LWo4LWp4LWq4LWr4LWs4LWt4LWu4LWvJyxcclxuXHRcdFx0XHRrbjogJ+CzpuCzp+CzqOCzqeCzquCzq+CzrOCzreCzruCzrycsXHJcblx0XHRcdFx0bG86ICfgu5Dgu5Hgu5Lgu5Pgu5Tgu5Xgu5bgu5fgu5jgu5knLFxyXG5cdFx0XHRcdG9yOiAn4K2m4K2n4K2o4K2p4K2q4K2r4K2s4K2t4K2u4K2vJyxcclxuXHRcdFx0XHRraDogJ+GfoOGfoeGfouGfo+GfpOGfpeGfpuGfp+GfqOGfqScsXHJcblx0XHRcdFx0cGE6ICfgqabgqafgqajgqangqargqavgqazgqa3gqa7gqa8nLFxyXG5cdFx0XHRcdGd1OiAn4Kum4Kun4Kuo4Kup4Kuq4Kur4Kus4Kut4Kuu4KuvJyxcclxuXHRcdFx0XHRoaTogJ+ClpuClp+ClqOClqeClquClq+ClrOClreClruClrycsXHJcblx0XHRcdFx0bXk6ICfhgYDhgYHhgYLhgYPhgYThgYXhgYbhgYfhgYjhgYknLFxyXG5cdFx0XHRcdHRhOiAn4K+m4K+n4K+o4K+p4K+q4K+r4K+s4K+t4K+u4K+vJyxcclxuXHRcdFx0XHR0ZTogJ+CxpuCxp+CxqOCxqeCxquCxq+CxrOCxreCxruCxrycsXHJcblx0XHRcdFx0dGg6ICfguZDguZHguZLguZPguZTguZXguZbguZfguZjguZknLCAvLyBGSVhNRSB1c2UgaXNvIDYzOSBjb2Rlc1xyXG5cdFx0XHRcdGJvOiAn4Lyg4Lyh4Lyi4Lyj4Lyk4Lyl4Lym4Lyn4Lyo4LypJyAvLyBGSVhNRSB1c2UgaXNvIDYzOSBjb2Rlc1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0aWYgKCAhdGFibGVzWyBsYW5ndWFnZSBdICkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRhYmxlc1sgbGFuZ3VhZ2UgXS5zcGxpdCggJycgKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQkLmV4dGVuZCggJC5pMThuLmxhbmd1YWdlcywge1xyXG5cdFx0J2RlZmF1bHQnOiBsYW5ndWFnZVxyXG5cdH0gKTtcclxufSggalF1ZXJ5ICkgKTtcclxuIiwiLyohXHJcbiAqIGpRdWVyeSBJbnRlcm5hdGlvbmFsaXphdGlvbiBsaWJyYXJ5IC0gTWVzc2FnZSBTdG9yZVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTIgU2FudGhvc2ggVGhvdHRpbmdhbFxyXG4gKlxyXG4gKiBqcXVlcnkuaTE4biBpcyBkdWFsIGxpY2Vuc2VkIEdQTHYyIG9yIGxhdGVyIGFuZCBNSVQuIFlvdSBkb24ndCBoYXZlIHRvIGRvIGFueXRoaW5nIHNwZWNpYWwgdG9cclxuICogY2hvb3NlIG9uZSBsaWNlbnNlIG9yIHRoZSBvdGhlciBhbmQgeW91IGRvbid0IGhhdmUgdG8gbm90aWZ5IGFueW9uZSB3aGljaCBsaWNlbnNlIHlvdSBhcmUgdXNpbmcuXHJcbiAqIFlvdSBhcmUgZnJlZSB0byB1c2UgVW5pdmVyc2FsTGFuZ3VhZ2VTZWxlY3RvciBpbiBjb21tZXJjaWFsIHByb2plY3RzIGFzIGxvbmcgYXMgdGhlIGNvcHlyaWdodFxyXG4gKiBoZWFkZXIgaXMgbGVmdCBpbnRhY3QuIFNlZSBmaWxlcyBHUEwtTElDRU5TRSBhbmQgTUlULUxJQ0VOU0UgZm9yIGRldGFpbHMuXHJcbiAqXHJcbiAqIEBsaWNlbmNlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbmNlIDIuMCBvciBsYXRlclxyXG4gKiBAbGljZW5jZSBNSVQgTGljZW5zZVxyXG4gKi9cclxuXHJcbiggZnVuY3Rpb24gKCAkICkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0dmFyIE1lc3NhZ2VTdG9yZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMubWVzc2FnZXMgPSB7fTtcclxuXHRcdHRoaXMuc291cmNlcyA9IHt9O1xyXG5cdH07XHJcblxyXG5cdGZ1bmN0aW9uIGpzb25NZXNzYWdlTG9hZGVyKCB1cmwgKSB7XHJcblx0XHR2YXIgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XHJcblxyXG5cdFx0JC5nZXRKU09OKCB1cmwgKVxyXG5cdFx0XHQuZG9uZSggZGVmZXJyZWQucmVzb2x2ZSApXHJcblx0XHRcdC5mYWlsKCBmdW5jdGlvbiAoIGpxeGhyLCBzZXR0aW5ncywgZXhjZXB0aW9uICkge1xyXG5cdFx0XHRcdCQuaTE4bi5sb2coICdFcnJvciBpbiBsb2FkaW5nIG1lc3NhZ2VzIGZyb20gJyArIHVybCArICcgRXhjZXB0aW9uOiAnICsgZXhjZXB0aW9uICk7XHJcblx0XHRcdFx0Ly8gSWdub3JlIDQwNCBleGNlcHRpb24sIGJlY2F1c2Ugd2UgYXJlIGhhbmRsaW5nIGZhbGxhYmFja3MgZXhwbGljaXRseVxyXG5cdFx0XHRcdGRlZmVycmVkLnJlc29sdmUoKTtcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3dpa2ltZWRpYS9qcXVlcnkuaTE4bi93aWtpL1NwZWNpZmljYXRpb24jd2lraS1NZXNzYWdlX0ZpbGVfTG9hZGluZ1xyXG5cdCAqL1xyXG5cdE1lc3NhZ2VTdG9yZS5wcm90b3R5cGUgPSB7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBHZW5lcmFsIG1lc3NhZ2UgbG9hZGluZyBBUEkgVGhpcyBjYW4gdGFrZSBhIFVSTCBzdHJpbmcgZm9yXHJcblx0XHQgKiB0aGUganNvbiBmb3JtYXR0ZWQgbWVzc2FnZXMuXHJcblx0XHQgKiA8Y29kZT5sb2FkKCdwYXRoL3RvL2FsbF9sb2NhbGl6YXRpb25zLmpzb24nKTs8L2NvZGU+XHJcblx0XHQgKlxyXG5cdFx0ICogVGhpcyBjYW4gYWxzbyBsb2FkIGEgbG9jYWxpemF0aW9uIGZpbGUgZm9yIGEgbG9jYWxlIDxjb2RlPlxyXG5cdFx0ICogbG9hZCggJ3BhdGgvdG8vZGUtbWVzc2FnZXMuanNvbicsICdkZScgKTtcclxuXHRcdCAqIDwvY29kZT5cclxuXHRcdCAqIEEgZGF0YSBvYmplY3QgY29udGFpbmluZyBtZXNzYWdlIGtleS0gbWVzc2FnZSB0cmFuc2xhdGlvbiBtYXBwaW5nc1xyXG5cdFx0ICogY2FuIGFsc28gYmUgcGFzc2VkIEVnOlxyXG5cdFx0ICogPGNvZGU+XHJcblx0XHQgKiBsb2FkKCB7ICdoZWxsbycgOiAnSGVsbG8nIH0sIG9wdGlvbmFsTG9jYWxlICk7XHJcblx0XHQgKiA8L2NvZGU+IElmIHRoZSBkYXRhIGFyZ3VtZW50IGlzXHJcblx0XHQgKiBudWxsL3VuZGVmaW5lZC9mYWxzZSxcclxuXHRcdCAqIGFsbCBjYWNoZWQgbWVzc2FnZXMgZm9yIHRoZSBpMThuIGluc3RhbmNlIHdpbGwgZ2V0IHJlc2V0LlxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc291cmNlXHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxlIExhbmd1YWdlIHRhZ1xyXG5cdFx0ICogQHJldHVybiB7alF1ZXJ5LlByb21pc2V9XHJcblx0XHQgKi9cclxuXHRcdGxvYWQ6IGZ1bmN0aW9uICggc291cmNlLCBsb2NhbGUgKSB7XHJcblx0XHRcdHZhciBrZXkgPSBudWxsLFxyXG5cdFx0XHRcdGRlZmVycmVkID0gbnVsbCxcclxuXHRcdFx0XHRkZWZlcnJlZHMgPSBbXSxcclxuXHRcdFx0XHRtZXNzYWdlU3RvcmUgPSB0aGlzO1xyXG5cclxuXHRcdFx0aWYgKCB0eXBlb2Ygc291cmNlID09PSAnc3RyaW5nJyApIHtcclxuXHRcdFx0XHQvLyBUaGlzIGlzIGEgVVJMIHRvIHRoZSBtZXNzYWdlcyBmaWxlLlxyXG5cdFx0XHRcdCQuaTE4bi5sb2coICdMb2FkaW5nIG1lc3NhZ2VzIGZyb206ICcgKyBzb3VyY2UgKTtcclxuXHRcdFx0XHRkZWZlcnJlZCA9IGpzb25NZXNzYWdlTG9hZGVyKCBzb3VyY2UgKVxyXG5cdFx0XHRcdFx0LmRvbmUoIGZ1bmN0aW9uICggbG9jYWxpemF0aW9uICkge1xyXG5cdFx0XHRcdFx0XHRtZXNzYWdlU3RvcmUuc2V0KCBsb2NhbGUsIGxvY2FsaXphdGlvbiApO1xyXG5cdFx0XHRcdFx0fSApO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIGxvY2FsZSApIHtcclxuXHRcdFx0XHQvLyBzb3VyY2UgaXMgYW4ga2V5LXZhbHVlIHBhaXIgb2YgbWVzc2FnZXMgZm9yIGdpdmVuIGxvY2FsZVxyXG5cdFx0XHRcdG1lc3NhZ2VTdG9yZS5zZXQoIGxvY2FsZSwgc291cmNlICk7XHJcblxyXG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVzb2x2ZSgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIHNvdXJjZSBpcyBhIGtleS12YWx1ZSBwYWlyIG9mIGxvY2FsZXMgYW5kIHRoZWlyIHNvdXJjZVxyXG5cdFx0XHRcdGZvciAoIGtleSBpbiBzb3VyY2UgKSB7XHJcblx0XHRcdFx0XHRpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggc291cmNlLCBrZXkgKSApIHtcclxuXHRcdFx0XHRcdFx0bG9jYWxlID0ga2V5O1xyXG5cdFx0XHRcdFx0XHQvLyBObyB7bG9jYWxlfSBnaXZlbiwgYXNzdW1lIGRhdGEgaXMgYSBncm91cCBvZiBsYW5ndWFnZXMsXHJcblx0XHRcdFx0XHRcdC8vIGNhbGwgdGhpcyBmdW5jdGlvbiBhZ2FpbiBmb3IgZWFjaCBsYW5ndWFnZS5cclxuXHRcdFx0XHRcdFx0ZGVmZXJyZWRzLnB1c2goIG1lc3NhZ2VTdG9yZS5sb2FkKCBzb3VyY2VbIGtleSBdLCBsb2NhbGUgKSApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gJC53aGVuLmFwcGx5KCAkLCBkZWZlcnJlZHMgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBTZXQgbWVzc2FnZXMgdG8gdGhlIGdpdmVuIGxvY2FsZS5cclxuXHRcdCAqIElmIGxvY2FsZSBleGlzdHMsIGFkZCBtZXNzYWdlcyB0byB0aGUgbG9jYWxlLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbGVcclxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlc1xyXG5cdFx0ICovXHJcblx0XHRzZXQ6IGZ1bmN0aW9uICggbG9jYWxlLCBtZXNzYWdlcyApIHtcclxuXHRcdFx0aWYgKCAhdGhpcy5tZXNzYWdlc1sgbG9jYWxlIF0gKSB7XHJcblx0XHRcdFx0dGhpcy5tZXNzYWdlc1sgbG9jYWxlIF0gPSBtZXNzYWdlcztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLm1lc3NhZ2VzWyBsb2NhbGUgXSA9ICQuZXh0ZW5kKCB0aGlzLm1lc3NhZ2VzWyBsb2NhbGUgXSwgbWVzc2FnZXMgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxlXHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZUtleVxyXG5cdFx0ICogQHJldHVybiB7Ym9vbGVhbn1cclxuXHRcdCAqL1xyXG5cdFx0Z2V0OiBmdW5jdGlvbiAoIGxvY2FsZSwgbWVzc2FnZUtleSApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMubWVzc2FnZXNbIGxvY2FsZSBdICYmIHRoaXMubWVzc2FnZXNbIGxvY2FsZSBdWyBtZXNzYWdlS2V5IF07XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0JC5leHRlbmQoICQuaTE4bi5tZXNzYWdlU3RvcmUsIG5ldyBNZXNzYWdlU3RvcmUoKSApO1xyXG59KCBqUXVlcnkgKSApO1xyXG4iLCIvKiFcclxuICogalF1ZXJ5IEludGVybmF0aW9uYWxpemF0aW9uIGxpYnJhcnlcclxuICpcclxuICogQ29weXJpZ2h0IChDKSAyMDExLTIwMTMgU2FudGhvc2ggVGhvdHRpbmdhbCwgTmVpbCBLYW5kYWxnYW9ua2FyXHJcbiAqXHJcbiAqIGpxdWVyeS5pMThuIGlzIGR1YWwgbGljZW5zZWQgR1BMdjIgb3IgbGF0ZXIgYW5kIE1JVC4gWW91IGRvbid0IGhhdmUgdG8gZG9cclxuICogYW55dGhpbmcgc3BlY2lhbCB0byBjaG9vc2Ugb25lIGxpY2Vuc2Ugb3IgdGhlIG90aGVyIGFuZCB5b3UgZG9uJ3QgaGF2ZSB0b1xyXG4gKiBub3RpZnkgYW55b25lIHdoaWNoIGxpY2Vuc2UgeW91IGFyZSB1c2luZy4gWW91IGFyZSBmcmVlIHRvIHVzZVxyXG4gKiBVbml2ZXJzYWxMYW5ndWFnZVNlbGVjdG9yIGluIGNvbW1lcmNpYWwgcHJvamVjdHMgYXMgbG9uZyBhcyB0aGUgY29weXJpZ2h0XHJcbiAqIGhlYWRlciBpcyBsZWZ0IGludGFjdC4gU2VlIGZpbGVzIEdQTC1MSUNFTlNFIGFuZCBNSVQtTElDRU5TRSBmb3IgZGV0YWlscy5cclxuICpcclxuICogQGxpY2VuY2UgR05VIEdlbmVyYWwgUHVibGljIExpY2VuY2UgMi4wIG9yIGxhdGVyXHJcbiAqIEBsaWNlbmNlIE1JVCBMaWNlbnNlXHJcbiAqL1xyXG5cclxuKCBmdW5jdGlvbiAoICQgKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHR2YXIgTWVzc2FnZVBhcnNlciA9IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcclxuXHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKCB7fSwgJC5pMThuLnBhcnNlci5kZWZhdWx0cywgb3B0aW9ucyApO1xyXG5cdFx0dGhpcy5sYW5ndWFnZSA9ICQuaTE4bi5sYW5ndWFnZXNbIFN0cmluZy5sb2NhbGUgXSB8fCAkLmkxOG4ubGFuZ3VhZ2VzWyAnZGVmYXVsdCcgXTtcclxuXHRcdHRoaXMuZW1pdHRlciA9ICQuaTE4bi5wYXJzZXIuZW1pdHRlcjtcclxuXHR9O1xyXG5cclxuXHRNZXNzYWdlUGFyc2VyLnByb3RvdHlwZSA9IHtcclxuXHJcblx0XHRjb25zdHJ1Y3RvcjogTWVzc2FnZVBhcnNlcixcclxuXHJcblx0XHRzaW1wbGVQYXJzZTogZnVuY3Rpb24gKCBtZXNzYWdlLCBwYXJhbWV0ZXJzICkge1xyXG5cdFx0XHRyZXR1cm4gbWVzc2FnZS5yZXBsYWNlKCAvXFwkKFxcZCspL2csIGZ1bmN0aW9uICggc3RyLCBtYXRjaCApIHtcclxuXHRcdFx0XHR2YXIgaW5kZXggPSBwYXJzZUludCggbWF0Y2gsIDEwICkgLSAxO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gcGFyYW1ldGVyc1sgaW5kZXggXSAhPT0gdW5kZWZpbmVkID8gcGFyYW1ldGVyc1sgaW5kZXggXSA6ICckJyArIG1hdGNoO1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHBhcnNlOiBmdW5jdGlvbiAoIG1lc3NhZ2UsIHJlcGxhY2VtZW50cyApIHtcclxuXHRcdFx0aWYgKCBtZXNzYWdlLmluZGV4T2YoICd7eycgKSA8IDAgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2ltcGxlUGFyc2UoIG1lc3NhZ2UsIHJlcGxhY2VtZW50cyApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLmVtaXR0ZXIubGFuZ3VhZ2UgPSAkLmkxOG4ubGFuZ3VhZ2VzWyAkLmkxOG4oKS5sb2NhbGUgXSB8fFxyXG5cdFx0XHRcdCQuaTE4bi5sYW5ndWFnZXNbICdkZWZhdWx0JyBdO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXMuZW1pdHRlci5lbWl0KCB0aGlzLmFzdCggbWVzc2FnZSApLCByZXBsYWNlbWVudHMgKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0YXN0OiBmdW5jdGlvbiAoIG1lc3NhZ2UgKSB7XHJcblx0XHRcdHZhciBwaXBlLCBjb2xvbiwgYmFja3NsYXNoLCBhbnlDaGFyYWN0ZXIsIGRvbGxhciwgZGlnaXRzLCByZWd1bGFyTGl0ZXJhbCxcclxuXHRcdFx0XHRyZWd1bGFyTGl0ZXJhbFdpdGhvdXRCYXIsIHJlZ3VsYXJMaXRlcmFsV2l0aG91dFNwYWNlLCBlc2NhcGVkT3JMaXRlcmFsV2l0aG91dEJhcixcclxuXHRcdFx0XHRlc2NhcGVkT3JSZWd1bGFyTGl0ZXJhbCwgdGVtcGxhdGVDb250ZW50cywgdGVtcGxhdGVOYW1lLCBvcGVuVGVtcGxhdGUsXHJcblx0XHRcdFx0Y2xvc2VUZW1wbGF0ZSwgZXhwcmVzc2lvbiwgcGFyYW1FeHByZXNzaW9uLCByZXN1bHQsXHJcblx0XHRcdFx0cG9zID0gMDtcclxuXHJcblx0XHRcdC8vIFRyeSBwYXJzZXJzIHVudGlsIG9uZSB3b3JrcywgaWYgbm9uZSB3b3JrIHJldHVybiBudWxsXHJcblx0XHRcdGZ1bmN0aW9uIGNob2ljZSggcGFyc2VyU3ludGF4ICkge1xyXG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHR2YXIgaSwgcmVzdWx0O1xyXG5cclxuXHRcdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgcGFyc2VyU3ludGF4Lmxlbmd0aDsgaSsrICkge1xyXG5cdFx0XHRcdFx0XHRyZXN1bHQgPSBwYXJzZXJTeW50YXhbIGkgXSgpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCByZXN1bHQgIT09IG51bGwgKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIFRyeSBzZXZlcmFsIHBhcnNlclN5bnRheC1lcyBpbiBhIHJvdy5cclxuXHRcdFx0Ly8gQWxsIG11c3Qgc3VjY2VlZDsgb3RoZXJ3aXNlLCByZXR1cm4gbnVsbC5cclxuXHRcdFx0Ly8gVGhpcyBpcyB0aGUgb25seSBlYWdlciBvbmUuXHJcblx0XHRcdGZ1bmN0aW9uIHNlcXVlbmNlKCBwYXJzZXJTeW50YXggKSB7XHJcblx0XHRcdFx0dmFyIGksIHJlcyxcclxuXHRcdFx0XHRcdG9yaWdpbmFsUG9zID0gcG9zLFxyXG5cdFx0XHRcdFx0cmVzdWx0ID0gW107XHJcblxyXG5cdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgcGFyc2VyU3ludGF4Lmxlbmd0aDsgaSsrICkge1xyXG5cdFx0XHRcdFx0cmVzID0gcGFyc2VyU3ludGF4WyBpIF0oKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIHJlcyA9PT0gbnVsbCApIHtcclxuXHRcdFx0XHRcdFx0cG9zID0gb3JpZ2luYWxQb3M7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRyZXN1bHQucHVzaCggcmVzICk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBSdW4gdGhlIHNhbWUgcGFyc2VyIG92ZXIgYW5kIG92ZXIgdW50aWwgaXQgZmFpbHMuXHJcblx0XHRcdC8vIE11c3Qgc3VjY2VlZCBhIG1pbmltdW0gb2YgbiB0aW1lczsgb3RoZXJ3aXNlLCByZXR1cm4gbnVsbC5cclxuXHRcdFx0ZnVuY3Rpb24gbk9yTW9yZSggbiwgcCApIHtcclxuXHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0dmFyIG9yaWdpbmFsUG9zID0gcG9zLFxyXG5cdFx0XHRcdFx0XHRyZXN1bHQgPSBbXSxcclxuXHRcdFx0XHRcdFx0cGFyc2VkID0gcCgpO1xyXG5cclxuXHRcdFx0XHRcdHdoaWxlICggcGFyc2VkICE9PSBudWxsICkge1xyXG5cdFx0XHRcdFx0XHRyZXN1bHQucHVzaCggcGFyc2VkICk7XHJcblx0XHRcdFx0XHRcdHBhcnNlZCA9IHAoKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoIHJlc3VsdC5sZW5ndGggPCBuICkge1xyXG5cdFx0XHRcdFx0XHRwb3MgPSBvcmlnaW5hbFBvcztcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gSGVscGVycyAtLSBqdXN0IG1ha2UgcGFyc2VyU3ludGF4IG91dCBvZiBzaW1wbGVyIEpTIGJ1aWx0aW4gdHlwZXNcclxuXHJcblx0XHRcdGZ1bmN0aW9uIG1ha2VTdHJpbmdQYXJzZXIoIHMgKSB7XHJcblx0XHRcdFx0dmFyIGxlbiA9IHMubGVuZ3RoO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0dmFyIHJlc3VsdCA9IG51bGw7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBtZXNzYWdlLnNsaWNlKCBwb3MsIHBvcyArIGxlbiApID09PSBzICkge1xyXG5cdFx0XHRcdFx0XHRyZXN1bHQgPSBzO1xyXG5cdFx0XHRcdFx0XHRwb3MgKz0gbGVuO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gbWFrZVJlZ2V4UGFyc2VyKCByZWdleCApIHtcclxuXHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0dmFyIG1hdGNoZXMgPSBtZXNzYWdlLnNsaWNlKCBwb3MgKS5tYXRjaCggcmVnZXggKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIG1hdGNoZXMgPT09IG51bGwgKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHBvcyArPSBtYXRjaGVzWyAwIF0ubGVuZ3RoO1xyXG5cclxuXHRcdFx0XHRcdHJldHVybiBtYXRjaGVzWyAwIF07XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cGlwZSA9IG1ha2VTdHJpbmdQYXJzZXIoICd8JyApO1xyXG5cdFx0XHRjb2xvbiA9IG1ha2VTdHJpbmdQYXJzZXIoICc6JyApO1xyXG5cdFx0XHRiYWNrc2xhc2ggPSBtYWtlU3RyaW5nUGFyc2VyKCAnXFxcXCcgKTtcclxuXHRcdFx0YW55Q2hhcmFjdGVyID0gbWFrZVJlZ2V4UGFyc2VyKCAvXi4vICk7XHJcblx0XHRcdGRvbGxhciA9IG1ha2VTdHJpbmdQYXJzZXIoICckJyApO1xyXG5cdFx0XHRkaWdpdHMgPSBtYWtlUmVnZXhQYXJzZXIoIC9eXFxkKy8gKTtcclxuXHRcdFx0cmVndWxhckxpdGVyYWwgPSBtYWtlUmVnZXhQYXJzZXIoIC9eW157fVtcXF0kXFxcXF0vICk7XHJcblx0XHRcdHJlZ3VsYXJMaXRlcmFsV2l0aG91dEJhciA9IG1ha2VSZWdleFBhcnNlciggL15bXnt9W1xcXSRcXFxcfF0vICk7XHJcblx0XHRcdHJlZ3VsYXJMaXRlcmFsV2l0aG91dFNwYWNlID0gbWFrZVJlZ2V4UGFyc2VyKCAvXltee31bXFxdJFxcc10vICk7XHJcblxyXG5cdFx0XHQvLyBUaGVyZSBpcyBhIGdlbmVyYWwgcGF0dGVybjpcclxuXHRcdFx0Ly8gcGFyc2UgYSB0aGluZztcclxuXHRcdFx0Ly8gaWYgaXQgd29ya2VkLCBhcHBseSB0cmFuc2Zvcm0sXHJcblx0XHRcdC8vIG90aGVyd2lzZSByZXR1cm4gbnVsbC5cclxuXHRcdFx0Ly8gQnV0IHVzaW5nIHRoaXMgYXMgYSBjb21iaW5hdG9yIHNlZW1zIHRvIGNhdXNlIHByb2JsZW1zXHJcblx0XHRcdC8vIHdoZW4gY29tYmluZWQgd2l0aCBuT3JNb3JlKCkuXHJcblx0XHRcdC8vIE1heSBiZSBzb21lIHNjb3BpbmcgaXNzdWUuXHJcblx0XHRcdGZ1bmN0aW9uIHRyYW5zZm9ybSggcCwgZm4gKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdHZhciByZXN1bHQgPSBwKCk7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IG51bGwgOiBmbiggcmVzdWx0ICk7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gVXNlZCB0byBkZWZpbmUgXCJsaXRlcmFsc1wiIHdpdGhpbiB0ZW1wbGF0ZSBwYXJhbWV0ZXJzLiBUaGUgcGlwZVxyXG5cdFx0XHQvLyBjaGFyYWN0ZXIgaXMgdGhlIHBhcmFtZXRlciBkZWxpbWV0ZXIsIHNvIGJ5IGRlZmF1bHRcclxuXHRcdFx0Ly8gaXQgaXMgbm90IGEgbGl0ZXJhbCBpbiB0aGUgcGFyYW1ldGVyXHJcblx0XHRcdGZ1bmN0aW9uIGxpdGVyYWxXaXRob3V0QmFyKCkge1xyXG5cdFx0XHRcdHZhciByZXN1bHQgPSBuT3JNb3JlKCAxLCBlc2NhcGVkT3JMaXRlcmFsV2l0aG91dEJhciApKCk7XHJcblxyXG5cdFx0XHRcdHJldHVybiByZXN1bHQgPT09IG51bGwgPyBudWxsIDogcmVzdWx0LmpvaW4oICcnICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZ1bmN0aW9uIGxpdGVyYWwoKSB7XHJcblx0XHRcdFx0dmFyIHJlc3VsdCA9IG5Pck1vcmUoIDEsIGVzY2FwZWRPclJlZ3VsYXJMaXRlcmFsICkoKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IG51bGwgOiByZXN1bHQuam9pbiggJycgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gZXNjYXBlZExpdGVyYWwoKSB7XHJcblx0XHRcdFx0dmFyIHJlc3VsdCA9IHNlcXVlbmNlKCBbIGJhY2tzbGFzaCwgYW55Q2hhcmFjdGVyIF0gKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IG51bGwgOiByZXN1bHRbIDEgXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y2hvaWNlKCBbIGVzY2FwZWRMaXRlcmFsLCByZWd1bGFyTGl0ZXJhbFdpdGhvdXRTcGFjZSBdICk7XHJcblx0XHRcdGVzY2FwZWRPckxpdGVyYWxXaXRob3V0QmFyID0gY2hvaWNlKCBbIGVzY2FwZWRMaXRlcmFsLCByZWd1bGFyTGl0ZXJhbFdpdGhvdXRCYXIgXSApO1xyXG5cdFx0XHRlc2NhcGVkT3JSZWd1bGFyTGl0ZXJhbCA9IGNob2ljZSggWyBlc2NhcGVkTGl0ZXJhbCwgcmVndWxhckxpdGVyYWwgXSApO1xyXG5cclxuXHRcdFx0ZnVuY3Rpb24gcmVwbGFjZW1lbnQoKSB7XHJcblx0XHRcdFx0dmFyIHJlc3VsdCA9IHNlcXVlbmNlKCBbIGRvbGxhciwgZGlnaXRzIF0gKTtcclxuXHJcblx0XHRcdFx0aWYgKCByZXN1bHQgPT09IG51bGwgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBbICdSRVBMQUNFJywgcGFyc2VJbnQoIHJlc3VsdFsgMSBdLCAxMCApIC0gMSBdO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0ZW1wbGF0ZU5hbWUgPSB0cmFuc2Zvcm0oXHJcblx0XHRcdFx0Ly8gc2VlICR3Z0xlZ2FsVGl0bGVDaGFyc1xyXG5cdFx0XHRcdC8vIG5vdCBhbGxvd2luZyA6IGR1ZSB0byB0aGUgbmVlZCB0byBjYXRjaCBcIlBMVVJBTDokMVwiXHJcblx0XHRcdFx0bWFrZVJlZ2V4UGFyc2VyKCAvXlsgIVwiJCYnKCkqLC4vMC05Oz0/QEEtWl5fYGEten5cXHg4MC1cXHhGRistXSsvICksXHJcblxyXG5cdFx0XHRcdGZ1bmN0aW9uICggcmVzdWx0ICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdC50b1N0cmluZygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdGZ1bmN0aW9uIHRlbXBsYXRlUGFyYW0oKSB7XHJcblx0XHRcdFx0dmFyIGV4cHIsXHJcblx0XHRcdFx0XHRyZXN1bHQgPSBzZXF1ZW5jZSggWyBwaXBlLCBuT3JNb3JlKCAwLCBwYXJhbUV4cHJlc3Npb24gKSBdICk7XHJcblxyXG5cdFx0XHRcdGlmICggcmVzdWx0ID09PSBudWxsICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRleHByID0gcmVzdWx0WyAxIF07XHJcblxyXG5cdFx0XHRcdC8vIHVzZSBhIFwiQ09OQ0FUXCIgb3BlcmF0b3IgaWYgdGhlcmUgYXJlIG11bHRpcGxlIG5vZGVzLFxyXG5cdFx0XHRcdC8vIG90aGVyd2lzZSByZXR1cm4gdGhlIGZpcnN0IG5vZGUsIHJhdy5cclxuXHRcdFx0XHRyZXR1cm4gZXhwci5sZW5ndGggPiAxID8gWyAnQ09OQ0FUJyBdLmNvbmNhdCggZXhwciApIDogZXhwclsgMCBdO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmdW5jdGlvbiB0ZW1wbGF0ZVdpdGhSZXBsYWNlbWVudCgpIHtcclxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gc2VxdWVuY2UoIFsgdGVtcGxhdGVOYW1lLCBjb2xvbiwgcmVwbGFjZW1lbnQgXSApO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0ID09PSBudWxsID8gbnVsbCA6IFsgcmVzdWx0WyAwIF0sIHJlc3VsdFsgMiBdIF07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZ1bmN0aW9uIHRlbXBsYXRlV2l0aE91dFJlcGxhY2VtZW50KCkge1xyXG5cdFx0XHRcdHZhciByZXN1bHQgPSBzZXF1ZW5jZSggWyB0ZW1wbGF0ZU5hbWUsIGNvbG9uLCBwYXJhbUV4cHJlc3Npb24gXSApO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0ID09PSBudWxsID8gbnVsbCA6IFsgcmVzdWx0WyAwIF0sIHJlc3VsdFsgMiBdIF07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRlbXBsYXRlQ29udGVudHMgPSBjaG9pY2UoIFtcclxuXHRcdFx0XHRmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHR2YXIgcmVzID0gc2VxdWVuY2UoIFtcclxuXHRcdFx0XHRcdFx0Ly8gdGVtcGxhdGVzIGNhbiBoYXZlIHBsYWNlaG9sZGVycyBmb3IgZHluYW1pY1xyXG5cdFx0XHRcdFx0XHQvLyByZXBsYWNlbWVudCBlZzoge3tQTFVSQUw6JDF8b25lIGNhcnwkMSBjYXJzfX1cclxuXHRcdFx0XHRcdFx0Ly8gb3Igbm8gcGxhY2Vob2xkZXJzIGVnOlxyXG5cdFx0XHRcdFx0XHQvLyB7e0dSQU1NQVI6Z2VuaXRpdmV8e3tTSVRFTkFNRX19fVxyXG5cdFx0XHRcdFx0XHRjaG9pY2UoIFsgdGVtcGxhdGVXaXRoUmVwbGFjZW1lbnQsIHRlbXBsYXRlV2l0aE91dFJlcGxhY2VtZW50IF0gKSxcclxuXHRcdFx0XHRcdFx0bk9yTW9yZSggMCwgdGVtcGxhdGVQYXJhbSApXHJcblx0XHRcdFx0XHRdICk7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIHJlcyA9PT0gbnVsbCA/IG51bGwgOiByZXNbIDAgXS5jb25jYXQoIHJlc1sgMSBdICk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHR2YXIgcmVzID0gc2VxdWVuY2UoIFsgdGVtcGxhdGVOYW1lLCBuT3JNb3JlKCAwLCB0ZW1wbGF0ZVBhcmFtICkgXSApO1xyXG5cclxuXHRcdFx0XHRcdGlmICggcmVzID09PSBudWxsICkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gWyByZXNbIDAgXSBdLmNvbmNhdCggcmVzWyAxIF0gKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdF0gKTtcclxuXHJcblx0XHRcdG9wZW5UZW1wbGF0ZSA9IG1ha2VTdHJpbmdQYXJzZXIoICd7eycgKTtcclxuXHRcdFx0Y2xvc2VUZW1wbGF0ZSA9IG1ha2VTdHJpbmdQYXJzZXIoICd9fScgKTtcclxuXHJcblx0XHRcdGZ1bmN0aW9uIHRlbXBsYXRlKCkge1xyXG5cdFx0XHRcdHZhciByZXN1bHQgPSBzZXF1ZW5jZSggWyBvcGVuVGVtcGxhdGUsIHRlbXBsYXRlQ29udGVudHMsIGNsb3NlVGVtcGxhdGUgXSApO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0ID09PSBudWxsID8gbnVsbCA6IHJlc3VsdFsgMSBdO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRleHByZXNzaW9uID0gY2hvaWNlKCBbIHRlbXBsYXRlLCByZXBsYWNlbWVudCwgbGl0ZXJhbCBdICk7XHJcblx0XHRcdHBhcmFtRXhwcmVzc2lvbiA9IGNob2ljZSggWyB0ZW1wbGF0ZSwgcmVwbGFjZW1lbnQsIGxpdGVyYWxXaXRob3V0QmFyIF0gKTtcclxuXHJcblx0XHRcdGZ1bmN0aW9uIHN0YXJ0KCkge1xyXG5cdFx0XHRcdHZhciByZXN1bHQgPSBuT3JNb3JlKCAwLCBleHByZXNzaW9uICkoKTtcclxuXHJcblx0XHRcdFx0aWYgKCByZXN1bHQgPT09IG51bGwgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBbICdDT05DQVQnIF0uY29uY2F0KCByZXN1bHQgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmVzdWx0ID0gc3RhcnQoKTtcclxuXHJcblx0XHRcdC8qXHJcblx0XHRcdCAqIEZvciBzdWNjZXNzLCB0aGUgcG9zIG11c3QgaGF2ZSBnb3R0ZW4gdG8gdGhlIGVuZCBvZiB0aGUgaW5wdXRcclxuXHRcdFx0ICogYW5kIHJldHVybmVkIGEgbm9uLW51bGwuXHJcblx0XHRcdCAqIG4uYi4gVGhpcyBpcyBwYXJ0IG9mIGxhbmd1YWdlIGluZnJhc3RydWN0dXJlLCBzbyB3ZSBkbyBub3QgdGhyb3cgYW5cclxuXHRcdFx0ICogaW50ZXJuYXRpb25hbGl6YWJsZSBtZXNzYWdlLlxyXG5cdFx0XHQgKi9cclxuXHRcdFx0aWYgKCByZXN1bHQgPT09IG51bGwgfHwgcG9zICE9PSBtZXNzYWdlLmxlbmd0aCApIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdQYXJzZSBlcnJvciBhdCBwb3NpdGlvbiAnICsgcG9zLnRvU3RyaW5nKCkgKyAnIGluIGlucHV0OiAnICsgbWVzc2FnZSApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxuXHQkLmV4dGVuZCggJC5pMThuLnBhcnNlciwgbmV3IE1lc3NhZ2VQYXJzZXIoKSApO1xyXG59KCBqUXVlcnkgKSApOyIsInZhciBjb2RlRXhlcmNpc2VzO1xyXG52YXIgcHJlc2VudGVyQ3NzTGluaztcclxudmFyIHByZXNlbnRNb2RlSW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIHByZXNlbnRUb2dnbGUoKSB7XHJcbiAgICBpZiAoIXByZXNlbnRNb2RlSW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICBwcmVzZW50TW9kZVNldHVwKCk7XHJcbiAgICAgICAgcHJlc2VudE1vZGVJbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBsZXQgYm9kID0gJChcImJvZHlcIik7XHJcbiAgICBsZXQgcHJlc2VudENsYXNzID0gXCJwcmVzZW50XCI7XHJcbiAgICBsZXQgZnVsbEhlaWdodENsYXNzID0gXCJmdWxsLWhlaWdodFwiO1xyXG4gICAgbGV0IGJvdHRvbUNsYXNzID0gXCJib3R0b21cIjtcclxuICAgIGlmIChib2QuaGFzQ2xhc3MocHJlc2VudENsYXNzKSkge1xyXG4gICAgICAgICQoXCIuc2VjdGlvbiAqXCIpXHJcbiAgICAgICAgICAgIC5ub3QoXHJcbiAgICAgICAgICAgICAgICBcImgxLCAucHJlc2VudGF0aW9uLXRpdGxlLCAuYnRuLXByZXNlbnRlciwgLnJ1bmVzdG9uZSwgLnJ1bmVzdG9uZSAqLCAuc2VjdGlvbiwgLnByZSwgY29kZVwiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpOyAvL3Nob3cgZXZlcnl0aGluZ1xyXG4gICAgICAgICQoXCIjY29tcGxldGlvbkJ1dHRvblwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICBib2QucmVtb3ZlQ2xhc3MocHJlc2VudENsYXNzKTtcclxuICAgICAgICAkKFwiLlwiICsgZnVsbEhlaWdodENsYXNzKS5yZW1vdmVDbGFzcyhmdWxsSGVpZ2h0Q2xhc3MpO1xyXG4gICAgICAgICQoXCIuXCIgKyBib3R0b21DbGFzcykucmVtb3ZlQ2xhc3MoYm90dG9tQ2xhc3MpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJlc2VudE1vZGVcIiwgXCJ0ZXh0XCIpO1xyXG4gICAgICAgIGNvZGVFeGVyY2lzZXMucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgcHJlc2VudGVyQ3NzTGluay5kaXNhYmxlZCA9IHRydWU7IC8vIGRpc2FibGUgcHJlc2VudF9tb2RlLmNzc1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiLnNlY3Rpb24gKlwiKVxyXG4gICAgICAgICAgICAubm90KFxyXG4gICAgICAgICAgICAgICAgXCJoMSwgLnByZXNlbnRhdGlvbi10aXRsZSwgLmJ0bi1wcmVzZW50ZXIsIC5ydW5lc3RvbmUsIC5ydW5lc3RvbmUgKiwgLnNlY3Rpb24sIC5wcmUsIGNvZGVcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcyhcImhpZGRlblwiKTsgLy8gaGlkZSBleHRyYW5lb3VzIHN0dWZmXHJcbiAgICAgICAgJChcIiNjb21wbGV0aW9uQnV0dG9uXCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGJvZC5hZGRDbGFzcyhwcmVzZW50Q2xhc3MpO1xyXG4gICAgICAgIGJvZC5hZGRDbGFzcyhmdWxsSGVpZ2h0Q2xhc3MpO1xyXG4gICAgICAgICQoXCJodG1sXCIpLmFkZENsYXNzKGZ1bGxIZWlnaHRDbGFzcyk7XHJcbiAgICAgICAgJChcIi5zZWN0aW9uIC5ydW5lc3RvbmVcIikuYWRkQ2xhc3MoZnVsbEhlaWdodENsYXNzKTtcclxuICAgICAgICAkKFwiLmFjLWNhcHRpb25cIikuYWRkQ2xhc3MoYm90dG9tQ2xhc3MpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJlc2VudE1vZGVcIiwgcHJlc2VudENsYXNzKTtcclxuICAgICAgICBsb2FkUHJlc2VudGVyQ3NzKCk7IC8vIHByZXNlbnRfbW9kZS5jc3Mgc2hvdWxkIG9ubHkgYXBwbHkgd2hlbiBpbiBwcmVzZW50ZXIgbW9kZS5cclxuICAgICAgICBhY3RpdmF0ZUV4ZXJjaXNlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQcmVzZW50ZXJDc3MoKSB7XHJcbiAgICBwcmVzZW50ZXJDc3NMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcbiAgICBwcmVzZW50ZXJDc3NMaW5rLnR5cGUgPSBcInRleHQvY3NzXCI7XHJcbiAgICBwcmVzZW50ZXJDc3NMaW5rLmhyZWYgPSBcIi4uL19zdGF0aWMvcHJlc2VudGVyX21vZGUuY3NzXCI7XHJcbiAgICBwcmVzZW50ZXJDc3NMaW5rLnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKHByZXNlbnRlckNzc0xpbmspO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVzZW50TW9kZVNldHVwKCkge1xyXG4gICAgLy8gbW92ZWQgdGhpcyBvdXQgb2YgY29uZmlndXJlXHJcbiAgICBsZXQgZGF0YUNvbXBvbmVudCA9ICQoXCJbZGF0YS1jaGlsZGNvbXBvbmVudF1cIik7XHJcblxyXG4gICAgLy8gdGhpcyBzdGlsbCBsZWF2ZXMgc29tZSB0aGluZ3Mgc2VtaS1tZXNzZWQgdXAgd2hlbiB5b3UgZXhpdCBwcmVzZW50ZXIgbW9kZS5cclxuICAgIC8vIGJ1dCBpbnN0cnVjdG9ycyB3aWxsIHByb2JhYmx5IGp1c3QgbGVhcm4gdG8gcmVmcmVzaCB0aGUgcGFnZS5cclxuICAgIGRhdGFDb21wb25lbnQuYWRkQ2xhc3MoXCJydW5lc3RvbmVcIik7XHJcbiAgICBkYXRhQ29tcG9uZW50LnBhcmVudCgpLmNsb3Nlc3QoXCJkaXZcIikubm90KFwiLnNlY3Rpb25cIikuYWRkQ2xhc3MoXCJydW5lc3RvbmVcIik7XHJcbiAgICBkYXRhQ29tcG9uZW50LnBhcmVudCgpLmNsb3Nlc3QoXCJkaXZcIikuY3NzKFwibWF4LXdpZHRoXCIsIFwibm9uZVwiKTtcclxuXHJcbiAgICBkYXRhQ29tcG9uZW50LmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgbGV0IG1lID0gJCh0aGlzKTtcclxuICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgIC5maW5kKFwiLmFjX2NvZGVfZGl2LCAuYWNfb3V0cHV0XCIpXHJcbiAgICAgICAgICAgIC53cmFwQWxsKFwiPGRpdiBjbGFzcz0nYWMtYmxvY2snIHN0eWxlPSd3aWR0aDogMTAwJTsnPjwvZGl2PlwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvZGVsZW5zTGlzdGVuZXIoNTAwKTtcclxuICAgICQoXCIuc2VjdGlvbiBpbWdcIikud3JhcCgnPGRpdiBjbGFzcz1cInJ1bmVzdG9uZVwiPicpO1xyXG4gICAgY29kZUV4ZXJjaXNlcyA9ICQoXCIucnVuZXN0b25lXCIpLm5vdChcIi5ydW5lc3RvbmUgLnJ1bmVzdG9uZVwiKTtcclxuICAgIC8vIGNvZGVFeGVyY2lzZXMuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgJChcImgxXCIpLmJlZm9yZShcclxuICAgICAgICBcIjxkaXYgY2xhc3M9J3ByZXNlbnRhdGlvbi10aXRsZSc+IFxcXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz0ncHJldi1leGVyY2lzZSBidG4tcHJlc2VudGVyIGJ0bi1ncmV5LW91dGxpbmUnIG9uY2xpY2s9J3ByZXZFeGVyY2lzZSgpJz5CYWNrPC9idXR0b24+IFxcXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz0nbmV4dC1leGVyY2lzZSBidG4tcHJlc2VudGVyIGJ0bi1ncmV5LXNvbGlkJyBvbmNsaWNrPSduZXh0RXhlcmNpc2UoKSc+TmV4dDwvYnV0dG9uPiBcXFxyXG4gICAgICA8L2Rpdj5cIlxyXG4gICAgKTtcclxufVxyXG5mdW5jdGlvbiBnZXRBY3RpdmVFeGVyY2lzZSgpIHtcclxuICAgIHJldHVybiAoYWN0aXZlID0gY29kZUV4ZXJjaXNlcy5maWx0ZXIoXCIuYWN0aXZlXCIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWN0aXZhdGVFeGVyY2lzZShpbmRleCkge1xyXG4gICAgaWYgKHR5cGVvZiBpbmRleCA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBhY3RpdmUgPSBnZXRBY3RpdmVFeGVyY2lzZSgpO1xyXG5cclxuICAgIGlmIChjb2RlRXhlcmNpc2VzLmxlbmd0aCkge1xyXG4gICAgICAgIGFjdGl2ZS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICBhY3RpdmUgPSAkKGNvZGVFeGVyY2lzZXNbaW5kZXhdKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICBhY3RpdmUucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgY29kZUV4ZXJjaXNlcy5ub3QoY29kZUV4ZXJjaXNlcy5maWx0ZXIoXCIuYWN0aXZlXCIpKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbmV4dEV4ZXJjaXNlKCkge1xyXG4gICAgbGV0IGFjdGl2ZSA9IGdldEFjdGl2ZUV4ZXJjaXNlKCk7XHJcbiAgICBsZXQgbmV4dEluZGV4ID0gY29kZUV4ZXJjaXNlcy5pbmRleChhY3RpdmUpICsgMTtcclxuICAgIGlmIChuZXh0SW5kZXggPCBjb2RlRXhlcmNpc2VzLmxlbmd0aCkge1xyXG4gICAgICAgIGFjdGl2YXRlRXhlcmNpc2UobmV4dEluZGV4KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcHJldkV4ZXJjaXNlKCkge1xyXG4gICAgbGV0IGFjdGl2ZSA9IGdldEFjdGl2ZUV4ZXJjaXNlKCk7XHJcbiAgICBsZXQgcHJldkluZGV4ID0gY29kZUV4ZXJjaXNlcy5pbmRleChhY3RpdmUpIC0gMTtcclxuICAgIGlmIChwcmV2SW5kZXggPj0gMCkge1xyXG4gICAgICAgIGFjdGl2YXRlRXhlcmNpc2UocHJldkluZGV4KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29uZmlndXJlKCkge1xyXG4gICAgbGV0IHJpZ2h0TmF2ID0gJChcIi5uYXZiYXItcmlnaHRcIik7XHJcbiAgICByaWdodE5hdi5wcmVwZW5kKFxyXG4gICAgICAgIFwiPGxpIGNsYXNzPSdkcm9wZG93biB2aWV3LXRvZ2dsZSc+IFxcXHJcbiAgICAgIDxsYWJlbD5WaWV3OiBcXFxyXG4gICAgICAgIDxzZWxlY3QgY2xhc3M9J21vZGUtc2VsZWN0Jz4gXFxcclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9J3RleHQnPlRleHRib29rPC9vcHRpb24+IFxcXHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdwcmVzZW50Jz5Db2RlIFByZXNlbnRlcjwvb3B0aW9uPiBcXFxyXG4gICAgICAgIDwvc2VsZWN0PiBcXFxyXG4gICAgICA8L2xhYmVsPiBcXFxyXG4gICAgPC9saT5cIlxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgbW9kZVNlbGVjdCA9ICQoXCIubW9kZS1zZWxlY3RcIikuY2hhbmdlKHByZXNlbnRUb2dnbGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb2RlbGVuc0xpc3RlbmVyKGR1cmF0aW9uKSB7XHJcbiAgICAvLyAkKFwiLkV4ZWN1dGlvblZpc3VhbGl6ZXJcIikubGVuZ3RoID8gY29uZmlndXJlQ29kZWxlbnMoKSA6IHNldFRpbWVvdXQoY29kZWxlbnNMaXN0ZW5lciwgZHVyYXRpb24pO1xyXG4gICAgLy8gY29uZmlndXJlQ29kZWxlbnMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29uZmlndXJlQ29kZWxlbnMoKSB7XHJcbiAgICBsZXQgYWNDb2RlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBhY0NvZGVUaXRsZS50ZXh0Q29udGVudCA9IFwiQWN0aXZlIENvZGUgV2luZG93XCI7XHJcbiAgICBsZXQgYWNDb2RlID0gJChcIi5hY19jb2RlX2RpdlwiKS5yZW1vdmVDbGFzcyhcImNvbC1tZC0xMlwiKTtcclxuICAgICQoXCIuYWNfY29kZV9kaXZcIikuYWRkQ2xhc3MoXCJjb2wtbWQtNlwiKTtcclxuICAgIGFjQ29kZS5wcmVwZW5kKGFjQ29kZVRpdGxlKTtcclxuXHJcbiAgICBhY091dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgYWNPdXRUaXRsZS50ZXh0Q29udGVudCA9IFwiT3V0cHV0IFdpbmRvd1wiO1xyXG4gICAgbGV0IGFjT3V0ID0gJChcIi5hY19vdXRwdXRcIikuYWRkQ2xhc3MoXCJjb2wtbWQtNlwiKTtcclxuICAgICQoXCIuYWNfb3V0cHV0XCIpLnByZXBlbmQoYWNPdXRUaXRsZSk7XHJcblxyXG4gICAgbGV0IHNrZXRjaHBhZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgc2tldGNocGFkVGl0bGUudGV4dENvbnRlbnQgPSBcIlNrZXRjaHBhZFwiO1xyXG4gICAgbGV0IHNrZXRjaHBhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgJChza2V0Y2hwYWQpLmFkZENsYXNzKFwic2tldGNocGFkXCIpO1xyXG4gICAgbGV0IHNrZXRjaHBhZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAkKHNrZXRjaHBhZENvbnRhaW5lcikuYWRkQ2xhc3MoXCJza2V0Y2hwYWQtY29udGFpbmVyXCIpO1xyXG4gICAgc2tldGNocGFkQ29udGFpbmVyLmFwcGVuZENoaWxkKHNrZXRjaHBhZFRpdGxlKTtcclxuICAgIHNrZXRjaHBhZENvbnRhaW5lci5hcHBlbmRDaGlsZChza2V0Y2hwYWQpO1xyXG4gICAgLy8kKCcuYWNfb3V0cHV0JykuYXBwZW5kKHNrZXRjaHBhZENvbnRhaW5lcik7XHJcblxyXG4gICAgbGV0IHZpc3VhbGl6ZXJzID0gJChcIi5FeGVjdXRpb25WaXN1YWxpemVyXCIpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiRWNvbnRhaW5lcjogXCIsIHRoaXMuZUNvbnRhaW5lcik7XHJcblxyXG4gICAgJChcIltkYXRhLWNoaWxkY29tcG9uZW50XVwiKS5vbihcImNsaWNrXCIsIFwiYnV0dG9uLnJvdy1tb2RlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoXCJbZGF0YS1jaGlsZGNvbXBvbmVudF1cIikucmVtb3ZlQ2xhc3MoXCJjYXJkLW1vZGVcIik7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KFwiW2RhdGEtY2hpbGRjb21wb25lbnRdXCIpLmFkZENsYXNzKFwicm93LW1vZGVcIik7XHJcbiAgICAgICAgJCh0aGlzKS5uZXh0KFwiLmNhcmQtbW9kZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZS1sYXlvdXRcIik7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZS1sYXlvdXRcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiW2RhdGEtY2hpbGRjb21wb25lbnRdXCIpLm9uKFwiY2xpY2tcIiwgXCJidXR0b24uY2FyZC1tb2RlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoXCJbZGF0YS1jaGlsZGNvbXBvbmVudF1cIikucmVtb3ZlQ2xhc3MoXCJyb3ctbW9kZVwiKTtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoXCJbZGF0YS1jaGlsZGNvbXBvbmVudF1cIikuYWRkQ2xhc3MoXCJjYXJkLW1vZGVcIik7XHJcbiAgICAgICAgJCh0aGlzKS5wcmV2KFwiLnJvdy1tb2RlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlLWxheW91dFwiKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlLWxheW91dFwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCJbZGF0YS1jaGlsZGNvbXBvbmVudF0gLmFjX3NlY3Rpb25cIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cInByZXNlbnRhdGlvbi1vcHRpb25zXCI+PGJ1dHRvbiBjbGFzcz1cInJvdy1tb2RlIGxheW91dC1idG5cIj48aW1nIHNyYz1cIi4uL19pbWFnZXMvcm93LWJ0bi1jb250ZW50LnBuZ1wiIGFsdD1cIlJvd3NcIj48L2J1dHRvbj48YnV0dG9uIGNsYXNzPVwiY2FyZC1tb2RlIGxheW91dC1idG5cIj48aW1nIHNyYz1cIi4uL19pbWFnZXMvY2FyZC1idG4tY29udGVudC5wbmdcIiBhbHQ9XCJDYXJkXCI+PC9idXR0b24+PC9kaXY+J1xyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2aXN1YWxpemVycy5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIGxldCBtZSA9ICQodGhpcyk7XHJcbiAgICAgICAgbGV0IGNvbDEgPSBtZS5maW5kKFwiI3ZpekxheW91dFRkRmlyc3RcIik7XHJcbiAgICAgICAgbGV0IGNvbDIgPSBtZS5maW5kKFwiI3ZpekxheW91dFRkU2Vjb25kXCIpO1xyXG4gICAgICAgIGxldCBkYXRhVmlzID0gbWUuZmluZChcIiNkYXRhVml6XCIpO1xyXG4gICAgICAgIGxldCBzdGFja0hlYXBUYWJsZSA9IG1lLmZpbmQoXCIjc3RhY2tIZWFwVGFibGVcIik7XHJcbiAgICAgICAgbGV0IG91dHB1dCA9IG1lLmZpbmQoXCIjcHJvZ091dHB1dHNcIik7XHJcbiAgICAgICAgb3V0cHV0LmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICBtZS5wYXJlbnQoKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICBcIjxkaXYgY2xhc3M9J3ByZXNlbnRhdGlvbi10aXRsZSc+PGRpdiBjbGFzcz0ndGl0bGUtdGV4dCc+IEV4YW1wbGUgXCIgK1xyXG4gICAgICAgICAgICAgICAgKE51bWJlcihpbmRleCkgKyAxKSArXHJcbiAgICAgICAgICAgICAgICBcIjwvZGl2PjwvZGl2PlwiXHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFjQ29kZS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgc2VjdGlvbiA9ICQodGhpcykuY2xvc2VzdChcIi5hYy1ibG9ja1wiKS5wYXJlbnQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzZWN0aW9uLCBzZWN0aW9uLmxlbmd0aCk7XHJcbiAgICAgICAgc2VjdGlvbi5hcHBlbmQoc2tldGNocGFkQ29udGFpbmVyKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCJidXR0b24uY2FyZC1tb2RlXCIpLmNsaWNrKCk7XHJcblxyXG4gICAgbGV0IG1vZGVTZWxlY3QgPSAkKFwiLm1vZGUtc2VsZWN0XCIpO1xyXG4gICAgbGV0IG1vZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByZXNlbnRNb2RlXCIpO1xyXG4gICAgaWYgKG1vZGUgPT0gXCJwcmVzZW50XCIpIHtcclxuICAgICAgICBtb2RlU2VsZWN0LnZhbChcInByZXNlbnRcIik7XHJcbiAgICAgICAgbW9kZVNlbGVjdC5jaGFuZ2UoKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8kKGRvY3VtZW50KS5yZWFkeShjb25maWd1cmUpO1xyXG4kKGRvY3VtZW50KS5iaW5kKFwicnVuZXN0b25lOmxvZ2luLWNvbXBsZXRlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIGlmIHVzZXIgaXMgaW5zdHJ1Y3RvciwgZW5hYmxlIHByZXNlbnRlciBtb2RlXHJcbiAgICBpZiAoZUJvb2tDb25maWcuaXNJbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgY29uZmlndXJlKCk7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0U3dpdGNoKCkge1xyXG4gICAgY29uc3QgdG9nZ2xlU3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoZW1lLXN3aXRjaCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcclxuICAgIGNvbnN0IGN1cnJlbnRUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgOiBudWxsO1xyXG5cclxuICAgIGlmIChjdXJyZW50VGhlbWUpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgY3VycmVudFRoZW1lKTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRUaGVtZSA9PT0gJ2RhcmsnKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZVN3aXRjaC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzd2l0Y2hUaGVtZSgpIHtcclxuXHJcblx0dmFyIGNoZWNrQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVja2JveFwiKTtcclxuICAgIGlmIChjaGVja0JveC5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2RhcmsnKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnZGFyaycpOyAvL2FkZCB0aGlzXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2xpZ2h0Jyk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2xpZ2h0Jyk7IC8vYWRkIHRoaXNcclxuICAgIH1cclxufVxyXG4iLCIvKmdsb2JhbCB2YXJpYWJsZSBkZWNsYXJhdGlvbnMqL1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgXCIuLi9jc3MvdXNlci1oaWdobGlnaHRzLmNzc1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldENvbXBsZXRpb25zKCkge1xyXG4gICAgLy8gR2V0IHRoZSBjb21wbGV0aW9uIHN0YXR1c1xyXG4gICAgaWYgKFxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLm1hdGNoKFxyXG4gICAgICAgICAgICAvKGluZGV4Lmh0bWx8dG9jdHJlZS5odG1sfGdlbmluZGV4Lmh0bWx8bmF2aGVscC5odG1sfHRvYy5odG1sfGFzc2lnbm1lbnRzLmh0bWx8RXhlcmNpc2VzLmh0bWwpL1xyXG4gICAgICAgIClcclxuICAgICkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY3VycmVudFBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgaWYgKGN1cnJlbnRQYXRobmFtZS5pbmRleE9mKFwiP1wiKSAhPT0gLTEpIHtcclxuICAgICAgICBjdXJyZW50UGF0aG5hbWUgPSBjdXJyZW50UGF0aG5hbWUuc3Vic3RyaW5nKFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICBjdXJyZW50UGF0aG5hbWUubGFzdEluZGV4T2YoXCI/XCIpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHZhciBkYXRhID0geyBsYXN0UGFnZVVybDogY3VycmVudFBhdGhuYW1lIH07XHJcbiAgICBqUXVlcnlcclxuICAgICAgICAuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogZUJvb2tDb25maWcuYWpheFVSTCArIFwiZ2V0Q29tcGxldGlvblN0YXR1c1wiLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBhc3luYzogZmFsc2UsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSAhPSBcIk5vbmVcIikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbXBsZXRpb25EYXRhID0gJC5wYXJzZUpTT04oZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29tcGxldGlvbkNsYXNzLCBjb21wbGV0aW9uTXNnO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRpb25EYXRhWzBdLmNvbXBsZXRpb25TdGF0dXMgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRpb25DbGFzcyA9IFwiYnV0dG9uQ29uZmlybUNvbXBsZXRpb25cIjtcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0aW9uTXNnID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXCI8aSBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1vayc+PC9pPiBDb21wbGV0ZWQuIFdlbGwgRG9uZSFcIjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGlvbkNsYXNzID0gXCJidXR0b25Bc2tDb21wbGV0aW9uXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGlvbk1zZyA9IFwiTWFyayBhcyBDb21wbGV0ZWRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICQoXCIjbWFpbi1jb250ZW50XCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbGcgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRpb25DbGFzcyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdcIiBpZD1cImNvbXBsZXRpb25CdXR0b25cIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGlvbk1zZyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPC9idXR0b24+PC9kaXY+XCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0xhc3RQb3NpdGlvbkJhbm5lcigpIHtcclxuICAgIHZhciBsYXN0UG9zaXRpb25WYWwgPSAkLmdldFVybFZhcihcImxhc3RQb3NpdGlvblwiKTtcclxuICAgIGlmICh0eXBlb2YgbGFzdFBvc2l0aW9uVmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgJChcImJvZHlcIikuYXBwZW5kKFxyXG4gICAgICAgICAgICAnPGltZyBzcmM9XCIuLi9fc3RhdGljL2xhc3QtcG9pbnQucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTsgcGFkZGluZy10b3A6NTVweDsgbGVmdDogMTBweDsgdG9wOiAnICtcclxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGxhc3RQb3NpdGlvblZhbCkgK1xyXG4gICAgICAgICAgICAgICAgJ3B4O1wiLz4nXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBwYXJzZUludChsYXN0UG9zaXRpb25WYWwpIH0sIDEwMDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGROYXZpZ2F0aW9uQW5kQ29tcGxldGlvbkJ1dHRvbnMoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYubWF0Y2goXHJcbiAgICAgICAgICAgIC8oaW5kZXguaHRtbHxnZW5pbmRleC5odG1sfG5hdmhlbHAuaHRtbHx0b2MuaHRtbHxhc3NpZ25tZW50cy5odG1sfEV4ZXJjaXNlcy5odG1sfHRvY3RyZWUuaHRtbCkvXHJcbiAgICAgICAgKVxyXG4gICAgKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIG5hdkxpbmtCZ1JpZ2h0SGlkZGVuUG9zaXRpb24gPSAtJChcIiNuYXZMaW5rQmdSaWdodFwiKS5vdXRlcldpZHRoKCkgLSA1O1xyXG4gICAgdmFyIG5hdkxpbmtCZ1JpZ2h0SGFsZk9wZW47XHJcbiAgICB2YXIgbmF2TGlua0JnUmlnaHRGdWxsT3BlbiA9IDA7XHJcblxyXG4gICAgaWYgKCQoXCIjY29tcGxldGlvbkJ1dHRvblwiKS5oYXNDbGFzcyhcImJ1dHRvbkFza0NvbXBsZXRpb25cIikpIHtcclxuICAgICAgICBuYXZMaW5rQmdSaWdodEhhbGZPcGVuID0gbmF2TGlua0JnUmlnaHRIaWRkZW5Qb3NpdGlvbiArIDcwO1xyXG4gICAgfSBlbHNlIGlmICgkKFwiI2NvbXBsZXRpb25CdXR0b25cIikuaGFzQ2xhc3MoXCJidXR0b25Db25maXJtQ29tcGxldGlvblwiKSkge1xyXG4gICAgICAgIG5hdkxpbmtCZ1JpZ2h0SGFsZk9wZW4gPSAwO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlbGF0aW9uc05leHRJY29uSW5pdGlhbFBvc2l0aW9uID0gJChcIiNyZWxhdGlvbnMtbmV4dFwiKS5jc3MoXCJyaWdodFwiKTtcclxuICAgIHZhciByZWxhdGlvbnNOZXh0SWNvbk5ld1Bvc2l0aW9uID0gLShuYXZMaW5rQmdSaWdodEhpZGRlblBvc2l0aW9uICsgMzUpO1xyXG5cclxuICAgICQoXCIjbmF2TGlua0JnUmlnaHRcIikuY3NzKFwicmlnaHRcIiwgbmF2TGlua0JnUmlnaHRIaWRkZW5Qb3NpdGlvbikuc2hvdygpO1xyXG4gICAgdmFyIG5hdkJnU2hvd24gPSBmYWxzZTtcclxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJCh3aW5kb3cpLmhlaWdodCgpID09XHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmhlaWdodCgpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICQoXCIjbmF2TGlua0JnUmlnaHRcIikuYW5pbWF0ZShcclxuICAgICAgICAgICAgICAgIHsgcmlnaHQ6IG5hdkxpbmtCZ1JpZ2h0SGFsZk9wZW4gfSxcclxuICAgICAgICAgICAgICAgIDIwMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAkKFwiI25hdkxpbmtCZ0xlZnRcIikuYW5pbWF0ZSh7IGxlZnQ6IFwiMHB4XCIgfSwgMjAwKTtcclxuICAgICAgICAgICAgaWYgKCQoXCIjY29tcGxldGlvbkJ1dHRvblwiKS5oYXNDbGFzcyhcImJ1dHRvbkNvbmZpcm1Db21wbGV0aW9uXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3JlbGF0aW9ucy1uZXh0XCIpLmFuaW1hdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgeyByaWdodDogcmVsYXRpb25zTmV4dEljb25OZXdQb3NpdGlvbiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIDIwMFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYXZCZ1Nob3duID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG5hdkJnU2hvd24pIHtcclxuICAgICAgICAgICAgJChcIiNuYXZMaW5rQmdSaWdodFwiKS5hbmltYXRlKFxyXG4gICAgICAgICAgICAgICAgeyByaWdodDogbmF2TGlua0JnUmlnaHRIaWRkZW5Qb3NpdGlvbiB9LFxyXG4gICAgICAgICAgICAgICAgMjAwXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICQoXCIjbmF2TGlua0JnTGVmdFwiKS5hbmltYXRlKHsgbGVmdDogXCItNjVweFwiIH0sIDIwMCk7XHJcbiAgICAgICAgICAgICQoXCIjcmVsYXRpb25zLW5leHRcIikuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICByaWdodDogcmVsYXRpb25zTmV4dEljb25Jbml0aWFsUG9zaXRpb24sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBuYXZCZ1Nob3duID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIGNvbXBsZXRpb25GbGFnID0gMDtcclxuICAgIGlmICgkKFwiI2NvbXBsZXRpb25CdXR0b25cIikuaGFzQ2xhc3MoXCJidXR0b25Bc2tDb21wbGV0aW9uXCIpKSB7XHJcbiAgICAgICAgY29tcGxldGlvbkZsYWcgPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb21wbGV0aW9uRmxhZyA9IDE7XHJcbiAgICB9XHJcbiAgICAkKFwiI2NvbXBsZXRpb25CdXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJidXR0b25Bc2tDb21wbGV0aW9uXCIpKSB7XHJcbiAgICAgICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImJ1dHRvbkFza0NvbXBsZXRpb25cIilcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImJ1dHRvbkNvbmZpcm1Db21wbGV0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICAuaHRtbChcclxuICAgICAgICAgICAgICAgICAgICBcIjxpIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLW9rJz48L2k+IENvbXBsZXRlZC4gV2VsbCBEb25lIVwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAkKFwiI25hdkxpbmtCZ1JpZ2h0XCIpLmFuaW1hdGUoeyByaWdodDogbmF2TGlua0JnUmlnaHRGdWxsT3BlbiB9KTtcclxuICAgICAgICAgICAgJChcIiNyZWxhdGlvbnMtbmV4dFwiKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiByZWxhdGlvbnNOZXh0SWNvbk5ld1Bvc2l0aW9uLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbmF2TGlua0JnUmlnaHRIYWxmT3BlbiA9IDA7XHJcbiAgICAgICAgICAgIGNvbXBsZXRpb25GbGFnID0gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJidXR0b25Db25maXJtQ29tcGxldGlvblwiKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJidXR0b25Db25maXJtQ29tcGxldGlvblwiKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiYnV0dG9uQXNrQ29tcGxldGlvblwiKVxyXG4gICAgICAgICAgICAgICAgLmh0bWwoXCJNYXJrIGFzIENvbXBsZXRlZFwiKTtcclxuICAgICAgICAgICAgbmF2TGlua0JnUmlnaHRIYWxmT3BlbiA9IG5hdkxpbmtCZ1JpZ2h0SGlkZGVuUG9zaXRpb24gKyA3MDtcclxuICAgICAgICAgICAgJChcIiNuYXZMaW5rQmdSaWdodFwiKS5hbmltYXRlKHsgcmlnaHQ6IG5hdkxpbmtCZ1JpZ2h0SGFsZk9wZW4gfSk7XHJcbiAgICAgICAgICAgICQoXCIjcmVsYXRpb25zLW5leHRcIikuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICByaWdodDogcmVsYXRpb25zTmV4dEljb25Jbml0aWFsUG9zaXRpb24sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb21wbGV0aW9uRmxhZyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb2Nlc3NQYWdlU3RhdGUoY29tcGxldGlvbkZsYWcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCh3aW5kb3cpLm9uKFwiYmVmb3JldW5sb2FkXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGNvbXBsZXRpb25GbGFnID09IDApIHtcclxuICAgICAgICAgICAgcHJvY2Vzc1BhZ2VTdGF0ZShjb21wbGV0aW9uRmxhZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlY29yYXRlVGFibGVPZkNvbnRlbnRzKCkge1xyXG4gICAgaWYgKFxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcInRvYy5odG1sXCIpICE9IC0xIHx8XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiaW5kZXguaHRtbFwiKSAhPSAtMVxyXG4gICAgKSB7XHJcbiAgICAgICAgalF1ZXJ5LmdldChlQm9va0NvbmZpZy5hamF4VVJMICsgXCJnZXRBbGxDb21wbGV0aW9uU3RhdHVzXCIsIGZ1bmN0aW9uIChcclxuICAgICAgICAgICAgZGF0YVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB2YXIgc3ViQ2hhcHRlckxpc3Q7XHJcbiAgICAgICAgICAgIGlmIChkYXRhICE9IFwiTm9uZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJDaGFwdGVyTGlzdCA9ICQucGFyc2VKU09OKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBhbGxTdWJDaGFwdGVyVVJMcyA9ICQoXCIjbWFpbi1jb250ZW50IGRpdiBsaSBhXCIpO1xyXG4gICAgICAgICAgICAgICAgJC5lYWNoKHN1YkNoYXB0ZXJMaXN0LCBmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IGFsbFN1YkNoYXB0ZXJVUkxzLmxlbmd0aDsgcysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFN1YkNoYXB0ZXJVUkxzW3NdLmhyZWYuaW5kZXhPZihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNoYXB0ZXJOYW1lICsgXCIvXCIgKyBpdGVtLnN1YkNoYXB0ZXJOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApICE9IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uY29tcGxldGlvblN0YXR1cyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChhbGxTdWJDaGFwdGVyVVJMc1tzXS5wYXJlbnRFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJjb21wbGV0ZWRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImluZm9UZXh0Q29tcGxldGVkXCI+LSBDb21wbGV0ZWQgdGhpcyB0b3BpYyBvbiAnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmVuZERhdGUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPC9zcGFuPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNoaWxkcmVuKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpcnN0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmhvdmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5leHQoXCIuaW5mb1RleHRDb21wbGV0ZWRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmV4dChcIi5pbmZvVGV4dENvbXBsZXRlZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmNvbXBsZXRpb25TdGF0dXMgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoYWxsU3ViQ2hhcHRlclVSTHNbc10ucGFyZW50RWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiYWN0aXZlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJpbmZvVGV4dEFjdGl2ZVwiPkxhc3QgcmVhZCB0aGlzIHRvcGljIG9uICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZW5kRGF0ZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8L3NwYW4+XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2hpbGRyZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlyc3QoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaG92ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmV4dChcIi5pbmZvVGV4dEFjdGl2ZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uZXh0KFwiLmluZm9UZXh0QWN0aXZlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBkYXRhID0geyBjb3Vyc2U6IGVCb29rQ29uZmlnLmNvdXJzZSB9O1xyXG4gICAgICAgIGpRdWVyeS5nZXQoZUJvb2tDb25maWcuYWpheFVSTCArIFwiZ2V0bGFzdHBhZ2VcIiwgZGF0YSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgdmFyIGxhc3RQYWdlRGF0YTtcclxuICAgICAgICAgICAgaWYgKGRhdGEgIT0gXCJOb25lXCIpIHtcclxuICAgICAgICAgICAgICAgIGxhc3RQYWdlRGF0YSA9ICQucGFyc2VKU09OKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxhc3RQYWdlRGF0YVswXS5sYXN0UGFnZUNoYXB0ZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjY29udGludWUtcmVhZGluZ1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2hvdygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5odG1sKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgaWQ9XCJqdW1wLXRvLWNoYXB0ZXJcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm9cIiA+PHN0cm9uZz5Zb3Ugd2VyZSBMYXN0IFJlYWRpbmc6PC9zdHJvbmc+ICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RQYWdlRGF0YVswXS5sYXN0UGFnZUNoYXB0ZXIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsYXN0UGFnZURhdGFbMF0ubGFzdFBhZ2VTdWJjaGFwdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIgJmd0OyBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFBhZ2VEYXRhWzBdLmxhc3RQYWdlU3ViY2hhcHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIDxhIGhyZWY9XCInICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0UGFnZURhdGFbMF0ubGFzdFBhZ2VVcmwgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiP2xhc3RQb3NpdGlvbj1cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFBhZ2VEYXRhWzBdLmxhc3RQYWdlU2Nyb2xsTG9jYXRpb24gK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcIj5Db250aW51ZSBSZWFkaW5nPC9hPjwvZGl2PidcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbmFibGVDb21wbGV0aW9ucygpIHtcclxuICAgIGdldENvbXBsZXRpb25zKCk7XHJcbiAgICBzaG93TGFzdFBvc2l0aW9uQmFubmVyKCk7XHJcbiAgICBhZGROYXZpZ2F0aW9uQW5kQ29tcGxldGlvbkJ1dHRvbnMoKTtcclxuICAgIGRlY29yYXRlVGFibGVPZkNvbnRlbnRzKCk7XHJcbn1cclxuXHJcbi8vIGNhbGwgZW5hYmxlIHVzZXIgaGlnaGxpZ2h0cyBhZnRlciBsb2dpblxyXG4kKGRvY3VtZW50KS5iaW5kKFwicnVuZXN0b25lOmxvZ2luXCIsIGVuYWJsZUNvbXBsZXRpb25zKTtcclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NQYWdlU3RhdGUoY29tcGxldGlvbkZsYWcpIHtcclxuICAgIC8qTG9nIGxhc3QgcGFnZSB2aXNpdGVkKi9cclxuICAgIHZhciBjdXJyZW50UGF0aG5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICBpZiAoY3VycmVudFBhdGhuYW1lLmluZGV4T2YoXCI/XCIpICE9PSAtMSkge1xyXG4gICAgICAgIGN1cnJlbnRQYXRobmFtZSA9IGN1cnJlbnRQYXRobmFtZS5zdWJzdHJpbmcoXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIGN1cnJlbnRQYXRobmFtZS5sYXN0SW5kZXhPZihcIj9cIilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgbGFzdFBhZ2VVcmw6IGN1cnJlbnRQYXRobmFtZSxcclxuICAgICAgICBsYXN0UGFnZVNjcm9sbExvY2F0aW9uOiAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXHJcbiAgICAgICAgY29tcGxldGlvbkZsYWc6IGNvbXBsZXRpb25GbGFnLFxyXG4gICAgICAgIGNvdXJzZTogZUJvb2tDb25maWcuY291cnNlLFxyXG4gICAgfTtcclxuICAgICQoZG9jdW1lbnQpLmFqYXhFcnJvcihmdW5jdGlvbiAoZSwganFoeHIsIHNldHRpbmdzLCBleGNlcHRpb24pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlcXVlc3QgRmFpbGVkIGZvciBcIiArIHNldHRpbmdzLnVybCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9KTtcclxuICAgIGpRdWVyeS5hamF4KHtcclxuICAgICAgICB1cmw6IGVCb29rQ29uZmlnLmFqYXhVUkwgKyBcInVwZGF0ZWxhc3RwYWdlXCIsXHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgIH0pO1xyXG59XHJcblxyXG4kLmV4dGVuZCh7XHJcbiAgICBnZXRVcmxWYXJzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhcnMgPSBbXSxcclxuICAgICAgICAgICAgaGFzaDtcclxuICAgICAgICB2YXIgaGFzaGVzID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaFxyXG4gICAgICAgICAgICAuc2xpY2Uod2luZG93LmxvY2F0aW9uLnNlYXJjaC5pbmRleE9mKFwiP1wiKSArIDEpXHJcbiAgICAgICAgICAgIC5zcGxpdChcIiZcIik7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYXNoZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaGFzaCA9IGhhc2hlc1tpXS5zcGxpdChcIj1cIik7XHJcbiAgICAgICAgICAgIHZhcnMucHVzaChoYXNoWzBdKTtcclxuICAgICAgICAgICAgdmFyc1toYXNoWzBdXSA9IGhhc2hbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YXJzO1xyXG4gICAgfSxcclxuICAgIGdldFVybFZhcjogZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gJC5nZXRVcmxWYXJzKClbbmFtZV07XHJcbiAgICB9LFxyXG59KTtcclxuIiwiKGZ1bmN0aW9uICgkKSB7XHJcbiAgLyoqXHJcbiAgICogUGF0Y2ggVE9DIGxpc3QuXHJcbiAgICpcclxuICAgKiBXaWxsIG11dGF0ZSB0aGUgdW5kZXJseWluZyBzcGFuIHRvIGhhdmUgYSBjb3JyZWN0IHVsIGZvciBuYXYuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gJHNwYW46IFNwYW4gY29udGFpbmluZyBuZXN0ZWQgVUwncyB0byBtdXRhdGUuXHJcbiAgICogQHBhcmFtIG1pbkxldmVsOiBTdGFydGluZyBsZXZlbCBmb3IgbmVzdGVkIGxpc3RzLiAoMTogZ2xvYmFsLCAyOiBsb2NhbCkuXHJcbiAgICovXHJcbiAgdmFyIHBhdGNoVG9jID0gZnVuY3Rpb24gKCR1bCwgbWluTGV2ZWwpIHtcclxuICAgIHZhciBmaW5kQSxcclxuICAgICAgcGF0Y2hUYWJsZXMsXHJcbiAgICAgICRsb2NhbExpO1xyXG5cclxuICAgIC8vIEZpbmQgYWxsIGEgXCJpbnRlcm5hbFwiIHRhZ3MsIHRyYXZlcnNpbmcgcmVjdXJzaXZlbHkuXHJcbiAgICBmaW5kQSA9IGZ1bmN0aW9uICgkZWxlbSwgbGV2ZWwpIHtcclxuICAgICAgbGV2ZWwgPSBsZXZlbCB8fCAwO1xyXG4gICAgICB2YXIgJGl0ZW1zID0gJGVsZW0uZmluZChcIj4gbGkgPiBhLmludGVybmFsLCA+IHVsLCA+IGxpID4gdWxcIik7XHJcblxyXG4gICAgICAvLyBJdGVyYXRlIGV2ZXJ5dGhpbmcgaW4gb3JkZXIuXHJcbiAgICAgICRpdGVtcy5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xyXG4gICAgICAgIHZhciAkaXRlbSA9ICQoaXRlbSksXHJcbiAgICAgICAgICB0YWcgPSBpdGVtLnRhZ05hbWUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICRjaGlsZHJlbkxpID0gJGl0ZW0uY2hpbGRyZW4oJ2xpJyksXHJcbiAgICAgICAgICAkcGFyZW50TGkgPSAkKCRpdGVtLnBhcmVudCgnbGknKSwgJGl0ZW0ucGFyZW50KCkucGFyZW50KCdsaScpKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIGRyb3Bkb3ducyBpZiBtb3JlIGNoaWxkcmVuIGFuZCBhYm92ZSBtaW5pbXVtIGxldmVsLlxyXG4gICAgICAgIGlmICh0YWcgPT09ICd1bCcgJiYgbGV2ZWwgPj0gbWluTGV2ZWwgJiYgJGNoaWxkcmVuTGkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgJHBhcmVudExpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcygnZHJvcGRvd24tc3VibWVudScpXHJcbiAgICAgICAgICAgIC5jaGlsZHJlbignYScpLmZpcnN0KCkuYXR0cigndGFiaW5kZXgnLCAtMSk7XHJcblxyXG4gICAgICAgICAgJGl0ZW0uYWRkQ2xhc3MoJ2Ryb3Bkb3duLW1lbnUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZpbmRBKCRpdGVtLCBsZXZlbCArIDEpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgZmluZEEoJHVsKTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBQYXRjaCBhbGwgdGFibGVzIHRvIHJlbW92ZSBgYGRvY3V0aWxzYGAgY2xhc3MgYW5kIGFkZCBCb290c3RyYXAgYmFzZVxyXG4gICAqIGBgdGFibGVgYCBjbGFzcy5cclxuICAgKi9cclxuICBwYXRjaFRhYmxlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCJ0YWJsZS5kb2N1dGlsc1wiKVxyXG4gICAgICAucmVtb3ZlQ2xhc3MoXCJkb2N1dGlsc1wiKVxyXG4gICAgICAuYWRkQ2xhc3MoXCJ0YWJsZVwiKVxyXG4gICAgICAuYXR0cihcImJvcmRlclwiLCAwKTtcclxuICB9O1xyXG5cclxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLypcclxuICAgICAqIFNjcm9sbCB0aGUgd2luZG93IHRvIGF2b2lkIHRoZSB0b3BuYXYgYmFyXHJcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vdHdpdHRlci9ib290c3RyYXAvaXNzdWVzLzE3NjhcclxuICAgICAqL1xyXG4gICAgaWYgKCQoXCIjbmF2YmFyLm5hdmJhci1maXhlZC10b3BcIikubGVuZ3RoID4gMCkge1xyXG4gICAgICB2YXIgbmF2SGVpZ2h0ID0gJChcIiNuYXZiYXJcIikuaGVpZ2h0KCksXHJcbiAgICAgICAgc2hpZnRXaW5kb3cgPSBmdW5jdGlvbigpIHsgc2Nyb2xsQnkoMCwgLW5hdkhlaWdodCAtIDEwKTsgfTtcclxuXHJcbiAgICAgIGlmIChsb2NhdGlvbi5oYXNoKSB7XHJcbiAgICAgICAgc2hpZnRXaW5kb3coKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIHNoaWZ0V2luZG93KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgc3R5bGluZywgc3RydWN0dXJlIHRvIFRPQydzLlxyXG4gICAgJChcIi5kcm9wZG93bi1tZW51XCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKHRoaXMpLmZpbmQoXCJ1bFwiKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaXRlbSl7XHJcbiAgICAgICAgdmFyICRpdGVtID0gJChpdGVtKTtcclxuICAgICAgICAkaXRlbS5hZGRDbGFzcygndW5zdHlsZWQnKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBHbG9iYWwgVE9DLlxyXG4gICAgaWYgKCQoXCJ1bC5nbG9iYWx0b2MgbGlcIikubGVuZ3RoKSB7XHJcbiAgICAgIHBhdGNoVG9jKCQoXCJ1bC5nbG9iYWx0b2NcIiksIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gUmVtb3ZlIEdsb2JhbCBUT0MuXHJcbiAgICAgICQoXCIuZ2xvYmFsdG9jLWNvbnRhaW5lclwiKS5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBMb2NhbCBUT0MuXHJcbiAgICBwYXRjaFRvYygkKFwidWwubG9jYWx0b2NcIiksIDIpO1xyXG5cclxuICAgIC8vIE11dGF0ZSBzdWItbGlzdHMgKGZvciBicy0yLjMuMCkuXHJcbiAgICAkKFwiLmRyb3Bkb3duLW1lbnUgdWxcIikubm90KFwiLmRyb3Bkb3duLW1lbnVcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciAkdWwgPSAkKHRoaXMpLFxyXG4gICAgICAgICRwYXJlbnQgPSAkdWwucGFyZW50KCksXHJcbiAgICAgICAgdGFnID0gJHBhcmVudFswXS50YWdOYW1lLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgJGtpZHMgPSAkdWwuY2hpbGRyZW4oKS5kZXRhY2goKTtcclxuXHJcbiAgICAgIC8vIFJlcGxhY2UgbGlzdCB3aXRoIGl0ZW1zIGlmIHN1Ym1lbnUgaGVhZGVyLlxyXG4gICAgICBpZiAodGFnID09PSBcInVsXCIpIHtcclxuICAgICAgICAkdWwucmVwbGFjZVdpdGgoJGtpZHMpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRhZyA9PT0gXCJsaVwiKSB7XHJcbiAgICAgICAgLy8gSW5zZXJ0IGludG8gcHJldmlvdXMgbGlzdC5cclxuICAgICAgICAkcGFyZW50LmFmdGVyKCRraWRzKTtcclxuICAgICAgICAkdWwucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEFkZCBkaXZpZGVyIGluIHBhZ2UgVE9DLlxyXG4gICAgJGxvY2FsTGkgPSAkKFwidWwubG9jYWx0b2MgbGlcIik7XHJcbiAgICBpZiAoJGxvY2FsTGkubGVuZ3RoID4gMikge1xyXG4gICAgICAkbG9jYWxMaS5maXJzdCgpLmFmdGVyKCc8bGkgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFbmFibGUgZHJvcGRvd24uXHJcbiAgICAkKCcuZHJvcGRvd24tdG9nZ2xlJykuZHJvcGRvd24oKTtcclxuXHJcbiAgICAvLyBQYXRjaCB0YWJsZXMuXHJcbiAgICBwYXRjaFRhYmxlcygpO1xyXG5cclxuICAgIC8vIEFkZCBOb3RlLCBXYXJuaW5nIHN0eWxlcy5cclxuICAgICQoJ2Rpdi5ub3RlJykuYWRkQ2xhc3MoJ2FsZXJ0JykuYWRkQ2xhc3MoJ2FsZXJ0LWluZm8nKTtcclxuICAgICQoJ2Rpdi53YXJuaW5nJykuYWRkQ2xhc3MoJ2FsZXJ0JykuYWRkQ2xhc3MoJ2FsZXJ0LXdhcm5pbmcnKTtcclxuXHJcbiAgICAvLyBJbmxpbmUgY29kZSBzdHlsZXMgdG8gQm9vdHN0cmFwIHN0eWxlLlxyXG4gICAgJCgndHQuZG9jdXRpbHMubGl0ZXJhbCcpLm5vdChcIi54cmVmXCIpLmVhY2goZnVuY3Rpb24gKGksIGUpIHtcclxuICAgICAgLy8gaWdub3JlIHJlZmVyZW5jZXNcclxuICAgICAgaWYgKCEkKGUpLnBhcmVudCgpLmhhc0NsYXNzKFwicmVmZXJlbmNlXCIpKSB7XHJcbiAgICAgICAgJChlKS5yZXBsYWNlV2l0aChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gJChcIjxjb2RlIC8+XCIpLnRleHQoJCh0aGlzKS50ZXh0KCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9fSk7XHJcbiAgfSk7XHJcbn0od2luZG93LmpRdWVyeSkpO1xyXG4iLCIvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyB8ZG9jbmFtZXwgLSBBIGZyYW1ld29yayBhbGxvd2luZyBhIFJ1bmVzdG9uZSBjb21wb25lbnQgdG8gbG9hZCBvbmx5IHRoZSBKUyBpdCBuZWVkc1xyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyBUaGUgSmF2YVNjcmlwdCByZXF1aXJlZCBieSBhbGwgUnVuZXN0b25lIGNvbXBvbmVudHMgaXMgcXVpdGUgbGFyZ2UgYW5kIHJlc3VsdHMgaW4gc2xvdyBwYWdlIGxvYWRzLiBUaGlzIGFwcHJvYWNoIGVuYWJsZXMgYSBSdW5lc3RvbmUgY29tcG9uZW50IHRvIGxvYWQgb25seSB0aGUgSmF2YVNjcmlwdCBpdCBuZWVkcywgcmF0aGVyIHRoYW4gbG9hZGluZyBKYXZhU2NyaXB0IGZvciBhbGwgdGhlIGNvbXBvbmVudHMgcmVnYXJkbGVzcyBvZiB3aGljaCBhcmUgYWN0dWFsbHkgdXNlZC5cclxuLy9cclxuLy8gVG8gYWNjb21wbGlzaCB0aGlzLCB3ZWJwYWNrJ3Mgc3BsaXQtY2h1bmtzIGFiaWxpdHkgYW5hbHl6ZXMgYWxsIEpTLCBzdGFydGluZyBmcm9tIHRoaXMgZmlsZS4gVGhlIGR5bmFtaWMgaW1wb3J0cyBiZWxvdyBhcmUgdHJhbnNmb3JtZWQgYnkgd2VicGFjayBpbnRvIHRoZSBkeW5hbWljIGZldGNoZXMgb2YganVzdCB0aGUgSlMgcmVxdWlyZWQgYnkgZWFjaCBmaWxlIGFuZCBhbGwgaXRzIGRlcGVuZGVuY2llcy4gKElmIHVzaW5nIHN0YXRpYyBpbXBvcnRzLCB3ZWJwYWNrIHdpbGwgYXNzdW1lIHRoYXQgYWxsIGZpbGVzIGFyZSBhbHJlYWR5IHN0YXRpY2FsbHkgbG9hZGVkIHZpYSBzY3JpcHQgdGFncywgZGVmZWF0aW5nIHRoZSBwdXJwb3NlIG9mIHRoaXMgZnJhbWV3b3JrLilcclxuLy9cclxuLy8gSG93ZXZlciwgdGhpcyBhcHByb2FjaCBsZWFkcyB0byBjb21wbGV4aXR5OlxyXG4vL1xyXG4vLyAtICAgIFRoZSBgYGRhdGEtY29tcG9uZW50YGAgYXR0cmlidXRlIG9mIGVhY2ggY29tcG9uZW50IG11c3QgYmUga2VwdCBpbiBzeW5jIHdpdGggdGhlIGtleXMgb2YgdGhlIGBgbW9kdWxlX21hcGBgIGJlbG93LlxyXG4vLyAtICAgIFRoZSB2YWx1ZXMgaW4gdGhlIGBgbW9kdWxlX21hcGBgIG11c3QgYmUga2VwdCBpbiBzeW5jIHdpdGggdGhlIEphdmFTY3JpcHQgZmlsZXMgd2hpY2ggaW1wbGVtZW50IGVhY2ggb2YgdGhlIGNvbXBvbmVudHMuXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG4vLyBTdGF0aWMgaW1wb3J0c1xyXG4vLyA9PT09PT09PT09PT09PVxyXG4vLyBUaGVzZSBpbXBvcnRzIGFyZSAod2UgYXNzdW1lKSBuZWVkZWQgYnkgYWxsIHBhZ2VzLiBIb3dldmVyLCBpdCB3b3VsZCBiZSBtdWNoIGJldHRlciB0byBsb2FkIHRoZXNlIGluIHRoZSBtb2R1bGVzIHRoYXQgYWN0dWFsbHkgdXNlIHRoZW0uXHJcbi8vXHJcbi8vIFRoZXNlIGFyZSBzdGF0aWMgaW1wb3J0czsgY29kZSBpbiBgZHluYW1pY2FsbHkgbG9hZGVkIGNvbXBvbmVudHNgXyBkZWFscyB3aXRoIGR5bmFtaWMgaW1wb3J0cy5cclxuLy9cclxuLy8galF1ZXJ5LXJlbGF0ZWQgaW1wb3J0cy5cclxuaW1wb3J0IFwianF1ZXJ5LXVpL2pxdWVyeS11aS5qc1wiO1xyXG5pbXBvcnQgXCJqcXVlcnktdWkvdGhlbWVzL2Jhc2UvanF1ZXJ5LnVpLmFsbC5jc3NcIjtcclxuaW1wb3J0IFwiLi9ydW5lc3RvbmUvY29tbW9uL2pzL2pxdWVyeS5pZGxlLXRpbWVyLmpzXCI7XHJcbmltcG9ydCBcIi4vcnVuZXN0b25lL2NvbW1vbi9qcy9qcXVlcnlfaTE4bi9qcXVlcnkuaTE4bi5qc1wiO1xyXG5pbXBvcnQgXCIuL3J1bmVzdG9uZS9jb21tb24vanMvanF1ZXJ5X2kxOG4vanF1ZXJ5LmkxOG4uZW1pdHRlci5iaWRpLmpzXCI7XHJcbmltcG9ydCBcIi4vcnVuZXN0b25lL2NvbW1vbi9qcy9qcXVlcnlfaTE4bi9qcXVlcnkuaTE4bi5lbWl0dGVyLmpzXCI7XHJcbmltcG9ydCBcIi4vcnVuZXN0b25lL2NvbW1vbi9qcy9qcXVlcnlfaTE4bi9qcXVlcnkuaTE4bi5mYWxsYmFja3MuanNcIjtcclxuaW1wb3J0IFwiLi9ydW5lc3RvbmUvY29tbW9uL2pzL2pxdWVyeV9pMThuL2pxdWVyeS5pMThuLm1lc3NhZ2VzdG9yZS5qc1wiO1xyXG5pbXBvcnQgXCIuL3J1bmVzdG9uZS9jb21tb24vanMvanF1ZXJ5X2kxOG4vanF1ZXJ5LmkxOG4ucGFyc2VyLmpzXCI7XHJcbmltcG9ydCBcIi4vcnVuZXN0b25lL2NvbW1vbi9qcy9qcXVlcnlfaTE4bi9qcXVlcnkuaTE4bi5sYW5ndWFnZS5qc1wiO1xyXG5cclxuLy8gQm9vdHN0cmFwXHJcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5qc1wiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiO1xyXG5pbXBvcnQgXCIuL3J1bmVzdG9uZS9jb21tb24vcHJvamVjdF90ZW1wbGF0ZS9fdGVtcGxhdGVzL3BsdWdpbl9sYXlvdXRzL3NwaGlueF9ib290c3RyYXAvc3RhdGljL2Jvb3RzdHJhcC1zcGhpbnguanNcIjtcclxuaW1wb3J0IFwiLi9ydW5lc3RvbmUvY29tbW9uL2Nzcy9ydW5lc3RvbmUtY3VzdG9tLXNwaGlueC1ib290c3RyYXAuY3NzXCI7XHJcblxyXG4vLyBNaXNjXHJcbmltcG9ydCBcIi4vcnVuZXN0b25lL2NvbW1vbi9qcy9ib29rZnVuY3MuanNcIjtcclxuaW1wb3J0IFwiLi9ydW5lc3RvbmUvY29tbW9uL2pzL3VzZXItaGlnaGxpZ2h0cy5qc1wiO1xyXG5cclxuLy8gVGhlc2UgYmVsb25nIGluIGR5bmFtaWMgaW1wb3J0cyBmb3IgdGhlIG9idmlvdXMgY29tcG9uZW50OyBob3dldmVyLCB0aGVzZSBjb21wb25lbnRzIGRvbid0IGluY2x1ZGUgYSBgYGRhdGEtY29tcG9uZW50YGAgYXR0cmlidXRlLlxyXG5pbXBvcnQgXCIuL3J1bmVzdG9uZS9tYXRyaXhlcS9jc3MvbWF0cml4ZXEuY3NzXCI7XHJcbmltcG9ydCBcIi4vcnVuZXN0b25lL3dlYmdsZGVtby9jc3Mvd2ViZ2xpbnRlcmFjdGl2ZS5jc3NcIjtcclxuXHJcbi8vIFRoZXNlIGFyZSBvbmx5IG5lZWRlZCBmb3IgdGhlIFJ1bmVzdG9uZSBib29rLCBidXQgbm90IGluIGEgbGlicmFyeSBtb2RlIChzdWNoIGFzIHByZXRleHQpLiBJIHdvdWxkIHByZWZlciB0byBkeW5hbWljYWxseSBsb2FkIHRoZW0uIEhvd2V2ZXIsIHRoZXNlIHNjcmlwdHMgYXJlIHNvIHNtYWxsIEkgaGF2ZW4ndCBib3RoZXJlZCB0byBkbyBzby5cclxuaW1wb3J0IHsgZ2V0U3dpdGNoLCBzd2l0Y2hUaGVtZSB9IGZyb20gXCIuL3J1bmVzdG9uZS9jb21tb24vanMvdGhlbWUuanNcIjtcclxuaW1wb3J0IFwiLi9ydW5lc3RvbmUvY29tbW9uL2pzL3ByZXNlbnRlcl9tb2RlLmpzXCI7XHJcbmltcG9ydCBcIi4vcnVuZXN0b25lL2NvbW1vbi9jc3MvcHJlc2VudGVyX21vZGUuY3NzXCI7XHJcblxyXG5cclxuLy8gRHluYW1pY2FsbHkgbG9hZGVkIGNvbXBvbmVudHNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVGhpcyBwcm92aWRlcyBhIGxpc3Qgb2YgbW9kdWxlcyB0aGF0IGNvbXBvbmVudHMgY2FuIGR5bmFtaWNhbGx5IGltcG9ydC4gV2VicGFjayB3aWxsIGNyZWF0ZSBhIGxpc3Qgb2YgaW1wb3J0cyBmb3IgZWFjaCBiYXNlZCBvbiBpdHMgYW5hbHlzaXMuXHJcbmNvbnN0IG1vZHVsZV9tYXAgPSB7XHJcbiAgICAvLyBXcmFwIGVhY2ggaW1wb3J0IGluIGEgZnVuY3Rpb24sIHNvIHRoYXQgaXQgd29uJ3Qgb2NjdXIgdW50aWwgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZC4gV2hpbGUgc29tZXRoaW5nIGNsZWFuZXIgd291bGQgYmUgbmljZSwgd2VicGFjayBjYW4ndCBhbmFseXplIHRoaW5ncyBsaWtlIGBgaW1wb3J0KGV4cHJlc3Npb24pYGAuXHJcbiAgICAvL1xyXG4gICAgLy8gVGhlIGtleXMgbXVzdCBtYXRjaCB0aGUgdmFsdWUgb2YgZWFjaCBjb21wb25lbnQncyBgYGRhdGEtY29tcG9uZW50YGAgYXR0cmlidXRlIC0tIHRoZSBgYHJ1bmVzdG9uZV9pbXBvcnRgYCBhbmQgYGBydW5lc3RvbmVfYXV0b19pbXBvcnRgYCBmdW5jdGlvbnMgYXNzdW1lIHRoaXMuXHJcbiAgICBhY3RpdmVjb2RlOiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS9hY3RpdmVjb2RlL2pzL2FjZmFjdG9yeS5qc1wiKSxcclxuICAgIC8vIEFsd2F5cyBpbXBvcnQgdGhlIHRpbWVkIHZlcnNpb24gb2YgYSBjb21wb25lbnQgaWYgYXZhaWxhYmxlLCBzaW5jZSB0aGUgdGltZWQgY29tcG9uZW50cyBhbHNvIGRlZmluZSB0aGUgY29tcG9uZW50J3MgZmFjdG9yeSBhbmQgaW5jbHVkZSB0aGUgY29tcG9uZW50IGFzIHdlbGwuIE5vdGUgdGhhdCBgYGFjZmFjdG9yeWBgIGltcG9ydHMgdGhlIHRpbWVkIGNvbXBvbmVudHMgb2YgQWN0aXZlQ29kZSwgc28gaXQgZm9sbG93cyB0aGlzIHBhdHRlcm4uXHJcbiAgICBjbGlja2FibGVhcmVhOiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS9jbGlja2FibGVBcmVhL2pzL3RpbWVkY2xpY2thYmxlLmpzXCIpLFxyXG4gICAgY29kZWxlbnM6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL2NvZGVsZW5zL2pzL2NvZGVsZW5zLmpzXCIpLFxyXG4gICAgZGF0YWZpbGU6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL2RhdGFmaWxlL2pzL2RhdGFmaWxlLmpzXCIpLFxyXG4gICAgZHJhZ25kcm9wOiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS9kcmFnbmRyb3AvanMvdGltZWRkbmQuanNcIiksXHJcbiAgICBmaWxsaW50aGVibGFuazogKCkgPT4gaW1wb3J0KFwiLi9ydW5lc3RvbmUvZml0Yi9qcy90aW1lZGZpdGIuanNcIiksXHJcbiAgICBraGFuZXg6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL2toYW5leC9qcy9raGFuZXguanNcIiksXHJcbiAgICBscF9idWlsZDogKCkgPT4gaW1wb3J0KFwiLi9ydW5lc3RvbmUvbHAvanMvbHAuanNcIiksXHJcbiAgICBtdWx0aXBsZWNob2ljZTogKCkgPT4gaW1wb3J0KFwiLi9ydW5lc3RvbmUvbWNob2ljZS9qcy90aW1lZG1jLmpzXCIpLFxyXG4gICAgcGFyc29uczogKCkgPT4gaW1wb3J0KFwiLi9ydW5lc3RvbmUvcGFyc29ucy9qcy90aW1lZHBhcnNvbnMuanNcIiksXHJcbiAgICBwb2xsOiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS9wb2xsL2pzL3BvbGwuanNcIiksXHJcbiAgICBxdWl6bHk6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL3F1aXpseS9qcy9xdWl6bHkuanNcIiksXHJcbiAgICByZXZlYWw6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL3JldmVhbC9qcy9yZXZlYWwuanNcIiksXHJcbiAgICBzZWxlY3RxdWVzdGlvbjogKCkgPT4gaW1wb3J0KFwiLi9ydW5lc3RvbmUvc2VsZWN0cXVlc3Rpb24vanMvc2VsZWN0b25lLmpzXCIpLFxyXG4gICAgc2hvcnRhbnN3ZXI6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL3Nob3J0YW5zd2VyL2pzL3RpbWVkX3Nob3J0YW5zd2VyLmpzXCIpLFxyXG4gICAgc2hvd2V2YWw6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL3Nob3dldmFsL2pzL3Nob3dFdmFsLmpzXCIpLFxyXG4gICAgc3ByZWFkc2hlZXQ6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL3NwcmVhZHNoZWV0L2pzL3NwcmVhZHNoZWV0LmpzXCIpLFxyXG4gICAgdGFiYmVkU3R1ZmY6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL3RhYmJlZFN0dWZmL2pzL3RhYmJlZHN0dWZmLmpzXCIpLFxyXG4gICAgdGltZWRBc3Nlc3NtZW50OiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS90aW1lZC9qcy90aW1lZC5qc1wiKSxcclxuICAgIHdhdmVkcm9tOiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS93YXZlZHJvbS9qcy93YXZlZHJvbS5qc1wiKSxcclxuICAgIC8vIFRPRE86IHNpbmNlIHRoaXMgaXNuJ3QgaW4gYSBgYGRhdGEtY29tcG9uZW50YGAsIG5lZWQgdG8gdHJpZ2dlciBhbiBpbXBvcnQgb2YgdGhpcyBjb2RlIG1hbnVhbGx5LlxyXG4gICAgd2Vid29yazogKCkgPT4gaW1wb3J0KFwiLi9ydW5lc3RvbmUvd2Vid29yay9qcy93ZWJ3b3JrLmpzXCIpLFxyXG4gICAgeW91dHViZTogKCkgPT4gaW1wb3J0KFwiLi9ydW5lc3RvbmUvdmlkZW8vanMvcnVuZXN0b25ldmlkZW8uanNcIiksXHJcbn1cclxuXHJcbi8vIC4uIF9keW5hbWljIGltcG9ydCBtYWNoaW5lcnk6XHJcbi8vXHJcbi8vIER5bmFtaWMgaW1wb3J0IG1hY2hpbmVyeVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRnVsZmlsbCBhIHByb21pc2Ugd2hlbiB0aGUgUnVuZXN0b25lIHByZS1sb2dpbiBjb21wbGV0ZSBldmVudCBvY2N1cnMuXHJcbmxldCBwcmVfbG9naW5fY29tcGxldGVfcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gJChkb2N1bWVudCkuYmluZChcInJ1bmVzdG9uZTpwcmUtbG9naW4tY29tcGxldGVcIiwgcmVzb2x2ZSkpO1xyXG5cclxuLy8gUHJvdmlkZSBhIHNpbXBsZSBmdW5jdGlvbiB0byBpbXBvcnQgdGhlIEpTIGZvciBhbGwgY29tcG9uZW50cyBvbiB0aGUgcGFnZS5cclxuZXhwb3J0IGZ1bmN0aW9uIHJ1bmVzdG9uZV9hdXRvX2ltcG9ydCgpIHtcclxuICAgIC8vIENyZWF0ZSBhIHNldCBvZiBgYGRhdGEtY29tcG9uZW50YGAgdmFsdWVzLCB0byBhdm9pZCBkdXBsaWNhdGlvbi5cclxuICAgIGNvbnN0IHMgPSBuZXcgU2V0KFxyXG4gICAgICAgIC8vIEFsbCBSdW5lc3RvbmUgY29tcG9uZW50cyBoYXZlIGEgYGBkYXRhLWNvbXBvbmVudGBgIGF0dHJpYnV0ZS5cclxuICAgICAgICAkKFwiW2RhdGEtY29tcG9uZW50XVwiKS5tYXAoXHJcbiAgICAgICAgICAgIC8vIEV4dHJhY3QgdGhlIHZhbHVlIG9mIHRoZSBkYXRhLWNvbXBvbmVudCBhdHRyaWJ1dGUuXHJcbiAgICAgICAgICAgIChpbmRleCwgZWxlbWVudCkgPT4gJChlbGVtZW50KS5hdHRyKFwiZGF0YS1jb21wb25lbnRcIilcclxuICAgICAgICAgICAgLy8gU3dpdGNoIGZyb20gYSBqUXVlcnkgb2JqZWN0IGJhY2sgdG8gYW4gYXJyYXksIHBhc3NpbmcgdGhhdCB0byB0aGUgU2V0IGNvbnN0cnVjdG9yLlxyXG4gICAgICAgICkuZ2V0KClcclxuICAgICk7XHJcblxyXG4gICAgLy8gTG9hZCBKUyBmb3IgZWFjaCBvZiB0aGUgY29tcG9uZW50cyBmb3VuZC5cclxuICAgIGNvbnN0IGEgPSBbLi4uc10ubWFwKHZhbHVlID0+XHJcbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBKUyBmb3IgdGhpcyBjb21wb25lbnQsIHJldHVybiBhbiBlbXB0eSBQcm9taXNlLlxyXG4gICAgICAgIChtb2R1bGVfbWFwW3ZhbHVlXSB8fCAoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKCkpKSgpXHJcbiAgICApO1xyXG5cclxuICAgIC8vIFNlbmQgdGhlIFJ1bmVzdG9uZSBsb2dpbiBjb21wbGV0ZSBldmVudCB3aGVuIGFsbCBKUyBpcyBsb2FkZWQgYW5kIHRoZSBwcmUtbG9naW4gaXMgYWxzbyBjb21wbGV0ZS5cclxuICAgIFByb21pc2UuYWxsKFtwcmVfbG9naW5fY29tcGxldGVfcHJvbWlzZSwgLi4uYV0pLnRoZW4oKCkgPT4gJChkb2N1bWVudCkudHJpZ2dlcihcInJ1bmVzdG9uZTpsb2dpbi1jb21wbGV0ZVwiKSk7XHJcbn1cclxuXHJcbi8vIExvYWQgY29tcG9uZW50IEpTIHdoZW4gdGhlIGRvY3VtZW50IGlzIHJlYWR5LlxyXG4kKGRvY3VtZW50KS5yZWFkeShydW5lc3RvbmVfYXV0b19pbXBvcnQpO1xyXG5cclxuLy8gUHJvdmlkZSBhIGZ1bmN0aW9uIHRvIGltcG9ydCBvbmUgc3BlY2lmaWMgUnVuZXN0b25lIGNvbXBvbmVudC5cclxuLy8gdGhlIGltcG9ydCBmdW5jdGlvbiBpbnNpZGUgbW9kdWxlX21hcCBpcyBhc3luYyAtLSBydW5lc3RvbmVfaW1wb3J0XHJcbi8vIHNob3VsZCBiZSBhd2FpdGVkIHdoZW4gbmVjZXNzYXJ5IHRvIGVuc3VyZSB0aGUgaW1wb3J0IGNvbXBsZXRlc1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuZXN0b25lX2ltcG9ydChjb21wb25lbnRfbmFtZSkge1xyXG4gICAgcmV0dXJuIG1vZHVsZV9tYXBbY29tcG9uZW50X25hbWVdKCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHBvcHVwU2NyYXRjaEFDKCkge1xyXG4gICAgLy8gbG9hZCB0aGUgYWN0aXZlY29kZSBidW5kbGVcclxuICAgIGF3YWl0IHJ1bmVzdG9uZV9pbXBvcnQoXCJhY3RpdmVjb2RlXCIpO1xyXG4gICAgLy8gc2NyYXRjaERpdiB3aWxsIGJlIGRlZmluZWQgaWYgd2UgaGF2ZSBhbHJlYWR5IGNyZWF0ZWQgYSBzY3JhdGNoXHJcbiAgICAvLyBhY3RpdmVjb2RlLiAgSWYgaXRzIG5vdCBkZWZpbmVkIHRoZW4gd2UgbmVlZCB0byBnZXQgaXQgcmVhZHkgdG8gdG9nZ2xlXHJcbiAgICBpZiAoIWVCb29rQ29uZmlnLnNjcmF0Y2hEaXYpIHtcclxuICAgICAgICB3aW5kb3cuQUNGYWN0b3J5LmNyZWF0ZVNjcmF0Y2hBY3RpdmVjb2RlKCk7XHJcbiAgICAgICAgbGV0IGRpdmlkID0gZUJvb2tDb25maWcuc2NyYXRjaERpdlxyXG4gICAgICAgIHdpbmRvdy5lZExpc3RbZGl2aWRdID0gQUNGYWN0b3J5LmNyZWF0ZUFjdGl2ZUNvZGUoJChgIyR7ZGl2aWR9YClbMF0sXHJcbiAgICAgICAgICAgIGVCb29rQ29uZmlnLmFjRGVmYXVsdExhbmd1YWdlKTtcclxuICAgICAgICBpZiAoZUJvb2tDb25maWcuaXNMb2dnZWRJbikge1xyXG4gICAgICAgICAgICB3aW5kb3cuZWRMaXN0W2RpdmlkXS5lbmFibGVTYXZlTG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5BQ0ZhY3RvcnkudG9nZ2xlU2NyYXRjaEFjdGl2ZWNvZGUoKTtcclxufVxyXG5cclxuLy8gU2V0IHRoZSBkaXJlY3RvcnkgY29udGFpbmluZyB0aGlzIHNjcmlwdCBhcyB0aGUgYHBhdGggPGh0dHBzOi8vd2VicGFjay5qcy5vcmcvZ3VpZGVzL3B1YmxpYy1wYXRoLyNvbi10aGUtZmx5PmBfIGZvciBhbGwgd2VicGFja2VkIHNjcmlwdHMuXHJcbmNvbnN0IHNjcmlwdF9zcmMgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSBzY3JpcHRfc3JjLnN1YnN0cmluZygwLCBzY3JpcHRfc3JjLmxhc3RJbmRleE9mKCcvJykgKyAxKTtcclxuXHJcblxyXG4vLyBNYW51YWwgZXhwb3J0c1xyXG4vLyA9PT09PT09PT09PT09PVxyXG4vLyBXZWJwYWNrJ3MgYGBvdXRwdXQubGlicmFyeWBgIHNldHRpbmcgZG9lc24ndCBzZWVtIHRvIHdvcmsgd2l0aCB0aGUgc3BsaXQgY2h1bmtzIHBsdWdpbjsgZG8gYWxsIGV4cG9ydHMgbWFudWFsbHkgdGhyb3VnaCB0aGUgYGB3aW5kb3dgYCBvYmplY3QgaW5zdGVhZC5cclxuY29uc3QgcmMgPSB7fTtcclxucmMucnVuZXN0b25lX2ltcG9ydCA9IHJ1bmVzdG9uZV9pbXBvcnQ7XHJcbnJjLnJ1bmVzdG9uZV9hdXRvX2ltcG9ydCA9IHJ1bmVzdG9uZV9hdXRvX2ltcG9ydDtcclxucmMuZ2V0U3dpdGNoID0gZ2V0U3dpdGNoO1xyXG5yYy5zd2l0Y2hUaGVtZSA9IHN3aXRjaFRoZW1lO1xyXG5yYy5wb3B1cFNjcmF0Y2hBQyA9IHBvcHVwU2NyYXRjaEFDO1xyXG53aW5kb3cucnVuZXN0b25lQ29tcG9uZW50cyA9IHJjO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9