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
___CSS_LOADER_EXPORT___.push([module.id, ".hidden{\n  display: none;\n}\n\n.view-toggle{\n  padding: 0.85em;\n}\n\n.presentation-mode .section *{\n  display: none;\n}\n\n.presentation-mode .section .runestone, .presentation-mode .section .runestone *{\n  display: initial;\n}\n\n.present{\n    height: 100vh;\n}\n\n.full-height{\n    height: 100vh;\n}\n\n.bottom{\n    position: absolute;\n    bottom: 0;\n}\n\n#codeDisplayDiv{\n  width: auto!important;\n}\n\ndiv.ExecutionVisualizer #dataViz{\n  margin: 0;  \n}\n\ndiv.ExecutionVisualizer div#stackHeader {\n  text-align: center;\n}\n\n#stackFrame{\n  display: block!important;\n}\n\n#stackHeapTable {\n  width: 100%;\n}\n\n#stackHeapTable tr {\n  justify-content: space-around;\n}\n\ndiv.ExecutionVisualizer td#stack_td, div.ExecutionVisualizer td#heap_td {\n  flex: 1;\n}\n\n.presentation-title {\n  display: none;\n}\n\n.present .presentation-title {\n  display: block;\n}\n\ndiv.ExecutionVisualizer div#heap {\n  float: none;\n  padding-left: 0;\n}\n\n#stack_td tr {\n  display: table-row;\n}\n\n#heap_td tr {\n  display: table-row;\n}\n\n#codeDisplayDiv{\n  margin: 0 auto;\n}\n\n/*  bnm -- comment this out for now as it breaks codelens indentation and arrows\n.visualizer tr{\n  display: flex;\n}\n*/\n\n#vizLayoutTd{\n  flex: 1;\n}\n\n#vizLayoutTdFirst {\n  flex: 2;\n}\n\n#vizLayoutTdSecond {\n  flex: 1;\n}\n\n#vizLayoutTdThird {\n  flex: 2;\n}\n\n#progOutputs {\n  display: block!important;\n  margin: 0 20px;\n  width: 60%;\n}\n\n#pyStdout {\n  width: 100%!important;\n}\n\ndiv.ExecutionVisualizer #pyStdout {\n  margin-bottom: 1em;\n}\n\ndiv.ExecutionVisualizer table.visualizer {\n  width: 100%;\n}\n\n.present #vizLayoutTdThird{\n  text-align: left;\n}\n\n.ac-block{\n  display: flex;\n  margin-bottom: 1em;\n}\n\n.row-mode .ac-block{\n  display: block;\n  margin-bottom: 0;\n}\n\n.row-mode .ac_output, .row-mode .ac_code_div{\n  float: none;\n  display: block;\n  width: auto;\n  max-width: none;\n}\n\n.row-mode .ac_code_div{\n  margin-bottom: 1em;\n}\n\n.ac_section>* {\n  max-width: 100%;\n}\n\n.ac_output{\n  display: block;\n  max-width: 100%;\n}\n\n.ac_output pre {\n  visibility: visible!important;\n  min-height: 60px;\n}\n\n.CodeMirror{\n  margin: 0;\n  max-width: 100%;\n  border-radius: 3px;\n  min-height: 60px;\n}\n\n.container .section > runestone:not(.ac_section){\n  max-width:none;\n  margin: 0;\n}\n\n.presentation-options {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.layout-btn {\n  background-color: #FBEED5;\n  border: 2px solid #DFD4BE;\n  border-radius: 2px;\n  padding: .25rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 .5rem;\n  transition: all .2s ease;\n}\n\n.layout-btn.active-layout, .layout-btn:focus {\n  border: 2px solid #979797;\n  outline: none;\n}\n\n.sketchpad-container {\n  min-width: 50%;\n  min-height: 300px;\n  padding: 0 15px;\n}\n\n.card-mode .sketchpad-container {\n  width: 50%;\n  margin: 0;\n  display: inline-block;\n  /*margin: 0 -15px;*/\n  vertical-align: top;\n}\n\n.row-mode .error {\n  margin: 20px 15px;\n}\n\n.card-mode .error {\n  margin: 28px 0 0;\n  width: 50%;\n  display: inline-block;\n  padding: 0 15px;\n  vertical-align: top;\n  margin-top: 28px;\n}\n\n.sketchpad {\n  background: white;\n  border: 2px solid grey;\n  border-radius: 3px;\n  width: 100%;\n  min-height: 300px;\n  display: block;\n}\n\n.btn-presenter {\n  padding: .5rem 1rem;\n  border-radius: 3px;\n  font-weight: 500;\n  margin: 1.5rem 0 1.5rem 1.5rem;\n}\n\n.btn-grey-outline {\n  border: 2px solid grey;\n  color: grey;\n  background: white;\n}\n\n.btn-grey-solid {\n  border: 2px solid grey;\n  color: white;\n  background: grey;\n}\n\nbody.present .ac_section>* {\n  max-width: none;\n}\nbody.present iframe {\n  width: 100%;\n}\n\nbody.present {\n  /* font-size: 2.0em; */\n}\n\nbody.present #relations-prev, body.present #relations-next, body.present .navLinkBg {\n  display: none;\n}\n\nbody.present .btn-presenter {\n  position: absolute;\n}\nbody.present .btn-presenter.prev-exercise { left: 0px; }\nbody.present .btn-presenter.next-exercise { right: 0px; }\n\n/* .col-md-12 {\n  width: 58.333333333333336%;\n}\n\n.card-mode .col-md-7 {\n  width: 50%;\n} */\n", "",{"version":3,"sources":["webpack://./runestone/common/css/presenter_mode.css"],"names":[],"mappings":"AAAA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,SAAS;AACb;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;;;;CAIC;;AAED;EACE,OAAO;AACT;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,wBAAwB;EACxB,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,SAAS;EACT,eAAe;EACf,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,SAAS;EACT,qBAAqB;EACrB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,qBAAqB;EACrB,eAAe;EACf,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;EACtB,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,8BAA8B;AAChC;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;AACA;EACE,WAAW;AACb;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;AACA,4CAA4C,SAAS,EAAE;AACvD,4CAA4C,UAAU,EAAE;;AAExD;;;;;;GAMG","sourcesContent":[".hidden{\n  display: none;\n}\n\n.view-toggle{\n  padding: 0.85em;\n}\n\n.presentation-mode .section *{\n  display: none;\n}\n\n.presentation-mode .section .runestone, .presentation-mode .section .runestone *{\n  display: initial;\n}\n\n.present{\n    height: 100vh;\n}\n\n.full-height{\n    height: 100vh;\n}\n\n.bottom{\n    position: absolute;\n    bottom: 0;\n}\n\n#codeDisplayDiv{\n  width: auto!important;\n}\n\ndiv.ExecutionVisualizer #dataViz{\n  margin: 0;  \n}\n\ndiv.ExecutionVisualizer div#stackHeader {\n  text-align: center;\n}\n\n#stackFrame{\n  display: block!important;\n}\n\n#stackHeapTable {\n  width: 100%;\n}\n\n#stackHeapTable tr {\n  justify-content: space-around;\n}\n\ndiv.ExecutionVisualizer td#stack_td, div.ExecutionVisualizer td#heap_td {\n  flex: 1;\n}\n\n.presentation-title {\n  display: none;\n}\n\n.present .presentation-title {\n  display: block;\n}\n\ndiv.ExecutionVisualizer div#heap {\n  float: none;\n  padding-left: 0;\n}\n\n#stack_td tr {\n  display: table-row;\n}\n\n#heap_td tr {\n  display: table-row;\n}\n\n#codeDisplayDiv{\n  margin: 0 auto;\n}\n\n/*  bnm -- comment this out for now as it breaks codelens indentation and arrows\n.visualizer tr{\n  display: flex;\n}\n*/\n\n#vizLayoutTd{\n  flex: 1;\n}\n\n#vizLayoutTdFirst {\n  flex: 2;\n}\n\n#vizLayoutTdSecond {\n  flex: 1;\n}\n\n#vizLayoutTdThird {\n  flex: 2;\n}\n\n#progOutputs {\n  display: block!important;\n  margin: 0 20px;\n  width: 60%;\n}\n\n#pyStdout {\n  width: 100%!important;\n}\n\ndiv.ExecutionVisualizer #pyStdout {\n  margin-bottom: 1em;\n}\n\ndiv.ExecutionVisualizer table.visualizer {\n  width: 100%;\n}\n\n.present #vizLayoutTdThird{\n  text-align: left;\n}\n\n.ac-block{\n  display: flex;\n  margin-bottom: 1em;\n}\n\n.row-mode .ac-block{\n  display: block;\n  margin-bottom: 0;\n}\n\n.row-mode .ac_output, .row-mode .ac_code_div{\n  float: none;\n  display: block;\n  width: auto;\n  max-width: none;\n}\n\n.row-mode .ac_code_div{\n  margin-bottom: 1em;\n}\n\n.ac_section>* {\n  max-width: 100%;\n}\n\n.ac_output{\n  display: block;\n  max-width: 100%;\n}\n\n.ac_output pre {\n  visibility: visible!important;\n  min-height: 60px;\n}\n\n.CodeMirror{\n  margin: 0;\n  max-width: 100%;\n  border-radius: 3px;\n  min-height: 60px;\n}\n\n.container .section > runestone:not(.ac_section){\n  max-width:none;\n  margin: 0;\n}\n\n.presentation-options {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.layout-btn {\n  background-color: #FBEED5;\n  border: 2px solid #DFD4BE;\n  border-radius: 2px;\n  padding: .25rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 .5rem;\n  transition: all .2s ease;\n}\n\n.layout-btn.active-layout, .layout-btn:focus {\n  border: 2px solid #979797;\n  outline: none;\n}\n\n.sketchpad-container {\n  min-width: 50%;\n  min-height: 300px;\n  padding: 0 15px;\n}\n\n.card-mode .sketchpad-container {\n  width: 50%;\n  margin: 0;\n  display: inline-block;\n  /*margin: 0 -15px;*/\n  vertical-align: top;\n}\n\n.row-mode .error {\n  margin: 20px 15px;\n}\n\n.card-mode .error {\n  margin: 28px 0 0;\n  width: 50%;\n  display: inline-block;\n  padding: 0 15px;\n  vertical-align: top;\n  margin-top: 28px;\n}\n\n.sketchpad {\n  background: white;\n  border: 2px solid grey;\n  border-radius: 3px;\n  width: 100%;\n  min-height: 300px;\n  display: block;\n}\n\n.btn-presenter {\n  padding: .5rem 1rem;\n  border-radius: 3px;\n  font-weight: 500;\n  margin: 1.5rem 0 1.5rem 1.5rem;\n}\n\n.btn-grey-outline {\n  border: 2px solid grey;\n  color: grey;\n  background: white;\n}\n\n.btn-grey-solid {\n  border: 2px solid grey;\n  color: white;\n  background: grey;\n}\n\nbody.present .ac_section>* {\n  max-width: none;\n}\nbody.present iframe {\n  width: 100%;\n}\n\nbody.present {\n  /* font-size: 2.0em; */\n}\n\nbody.present #relations-prev, body.present #relations-next, body.present .navLinkBg {\n  display: none;\n}\n\nbody.present .btn-presenter {\n  position: absolute;\n}\nbody.present .btn-presenter.prev-exercise { left: 0px; }\nbody.present .btn-presenter.next-exercise { right: 0px; }\n\n/* .col-md-12 {\n  width: 58.333333333333336%;\n}\n\n.card-mode .col-md-7 {\n  width: 50%;\n} */\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "/* Variables holding theme colors */\n:root {\n    --background: #ffffff;\n    --outerBackground: #eeeeee;\n    --links: #0645ad;\n    --bodyFont: #000000;\n    --tooltip: #ffffff;\n    --grayToWhite: #333333;\n    --navbar: #f8f8f8;\n    --navbarFont: #707070;\n    --navbarFontHover: #000000;\n    --alerts: #d9edf7;\n    --completionButton: #ffaa2b;\n    --completionButtonHover: #ff9f19;\n    --admonition: #fcf8e3;\n    --admonitionBorder: #fbeed5;\n    --codeButtons: #474949;\n    --codeButtonsBorder: #474949;\n    --dangerAlerts: #f2dede;\n    --successAlerts: #dff0d8;\n}\n\n[data-theme=\"dark\"] {\n    --background: #000000;\n    --outerBackground: #3d3d3d;\n    --links: #1165f0;\n    --bodyFont: #ffffff;\n    --tooltip: #000000;\n    --grayToWhite: #ffffff;\n    --navbar: #3d3d3d;\n    --navbarFont: #ffffff;\n    --navbarFontHover: #d6d6d6;\n    --alerts: #714082;\n    --completionButton: #650087;\n    --completionButtonHover: #560073;\n    --admonition: #3d3d3d;\n    --admonitionBorder: #262626;\n    --codeButtons: #2c0aa6;\n    --codeButtonsBorder: #ffffff;\n    --dangerAlerts: #8c2626;\n    --successAlerts: #217300;\n}\n\n/* custom modification of basic.css for color-contrast (AA compliant) */\ntd.linenos pre {\n    color: #6b6b6b;\n}\n\n/* custom modification of prettify.css for color-contrast (AA compliant) */\n.str {\n    color: #006b00;\n}\n\n/* custom modification of parsons.css for color-contrast (AA compliant) */\n.parsons .block {\n    background-color: #fafafa;\n}\n\n/* custom modification of pygments.css for color-contrast (AA compliant) */\n.highlight .c1 {\n    color: #376A7B;\n}\n\n.highlight .nn {\n    color: #0F6C95;\n}\n\n.highlight .gp {\n    color: #A14C08;\n}\n\n.highlight .si {\n    color: #3C773D;\n}\n\n.highlight .nc {\n    color: #0B719D;\n}\n\n/* `Search` functionality's result custom modification for color-contrast (AA compliant) */\nul.search li div.context {\n    color: #6b6b6b;\n}\n\nspan.highlighted {\n    color: #4d4d4d;\n}\n\n/* ActiveCode gutter custom modification for color-contrast (AA compliant) */\n\n.CodeMirror-linenumber {\n    color: #6b6b6b;\n}\n\n.alert-warning {\n    background-color: var(--admonition);\n    border-color: var(--admonitionBorder);\n}\n\n/* Python code output custom modification for color-contrast (AA compliant) */\ndiv.ExecutionVisualizer table#pyCodeOutput .lineNo {\n    color: #6b6b6b;\n}\n\n/* Runestone custom modifications */\n\nbody {\n    counter-reset: rscomponent;\n    padding-top: 60px;\n    background-color: var(--outerBackground);\n}\n\npre {\n    margin: 0 0 1em;\n}\n\nh5 {\n    font-weight: bold;\n    padding: 10px 0;\n}\n\n/* table-of-contents related styles for color-contrast (AA compliant) */\n#table-of-contents a {\n    color: var(--links);\n}\n\n#table-of-contents a:hover {\n    color: var(--links);\n    text-decoration: underline;\n}\n\n#table-of-contents.section {\n    font-size: 16px;\n}\n\n/* navbar-brand color contrast (AA compliant) */\n.navbar-default {\n    background-color: var(--navbar);\n}\n\n.navbar-default .navbar-nav>li {\n    color: var(--navbarFont);\n}\n\n.navbar-default .navbar-nav>li>a {\n    color: var(--navbarFont);\n}\n\n.navbar-default .navbar-nav>li>a:hover {\n    color: var(--navbarFontHover);\n}\n\n.navbar-default .navbar-brand {\n    color: var(--navbarFont);\n}\n\n/* acknowledgement related styles for color-contrast (AA compliant) */\n.toctree-wrapper {\n    font-size: 16px;\n}\n\n.toctree-wrapper a {\n    color: var(--links);\n}\n\n.toctree-wrapper a:hover {\n    color: var(--links);\n    text-decoration: underline;\n}\n\n/* index and search related styles for color-contrast (AA compliant) */\n#index-and-search.section {\n    font-size: 16px;\n}\n\n#index-and-search.section a {\n    color: var(--links);\n}\n\n#index-and-search.section a:hover {\n    color: var(--links);\n    text-decoration: underline;\n}\n\n/* custom style for `a` tag for color-contrast (AA compliant) */\n\na {\n    color: var(--links);\n}\n\n/* navbar and menu related styles */\n@media (max-width: 768px) {\n\n    /* Remove top padding when top navbar goes collapsed in narrow viewports */\n    body {\n        padding-top: 0;\n        margin: auto auto auto 5px;\n    }\n\n    .navbar-fixed-top {\n        position: static;\n    }\n\n}\n\n@media (min-width: 768px) {\n\n    /* when navbar is collapsed we don't want any vertical dividers taking up space */\n    .navbar .divider-vertical {\n        margin: 0 3px;\n        border-left: 1px solid #f2f2f2;\n    }\n}\n\ndiv.container {\n    background-color: var(--background);\n}\n\ndiv.section {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.container {\n    padding-left: 0;\n    padding-right: 0;\n}\n\n.container .section>*:not(.section):not(.ac_section) {\n    max-width: 500pt;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n/* This rule is meant to override the behavior of the\n   previous rule since it is not possible to exclude\n   more than one section in the not() part of the rule\n*/\n.container .section div.full-width.container {\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 90%;\n}\n\n.container .section>img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.container .section .parsons,\n.container .section .parsons .sortable-code-container,\n.container .section .cd_section {\n    max-width: none;\n}\n\n.navbar>.container .navbar-brand {\n    margin-left: 0;\n}\n\n.navbar>.container {\n    background-color: var(--navbar);\n}\n\n.footer>.container {\n    background-color: var(--outerBackground);\n}\n\n.footer>.container p>a {\n    color: var(--links);\n}\n\n.brand-logo {\n    float: left;\n    display: block;\n    background-size: 40px 40px !important;\n    width: 40px;\n    height: 40px;\n    margin-top: 4px;\n}\n\n.social-menu {\n    width: 220px;\n    padding: 10px 10px 15px 20px;\n}\n\n.fb-like {\n    margin-top: 7px;\n}\n\n.fb_iframe_widget span,\n.fb_iframe_widget iframe {\n    height: 20px !important;\n    width: 82px !important;\n}\n\n.twitter-follow-button {\n    margin-top: 10px;\n}\n\n.gittip {\n    margin-top: 8px;\n}\n\n.gittip-button {\n    margin-bottom: -6px;\n}\n\n.dropdown-menu>li>span {\n    display: block;\n    padding: 3px 20px;\n    clear: both;\n    font-weight: bold;\n    line-height: 20px;\n    color: var(--grayToWhite);\n    white-space: nowrap;\n}\n\n.dropdown-menu>li>a {\n    color: var(--grayToWhite);\n}\n\n.loggedinuser {\n    font-weight: bold;\n}\n\n/* end navbar and menu related styles */\n\n.CodeMirror {\n    margin: 0 0 1em 0;\n    background-color: var(--background);\n    height: auto;\n    clear: both;\n}\n\n.CodeMirror-scroll {\n    /* this allows CM elements to be resized to (almost) any\n     * height while still relying on max-height (which keeps\n     * the CM editors to no more than the size needed\n     * unless resized) */\n    max-height: 60em;\n    min-width: 30em;\n}\n\n.ac_section .CodeMirror pre {\n    -moz-border-radius: 0;\n    -webkit-border-radius: 0;\n    -o-border-radius: 0;\n    border-radius: 0;\n    border-width: 0;\n    margin: 0;\n    padding: 0;\n    background: transparent;\n    font-family: Monaco, Courier New, monospace;\n    font-size: inherit;\n    padding: 0;\n    margin: 0;\n    white-space: pre;\n    word-wrap: normal;\n}\n\nbutton.btn,\nbtn.btn-sm,\ninput[type=\"submit\"].btn.btn-sm,\ninput[type=\"button\"].btn.btn-sm {\n    font-size: 1em;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.btn {\n    margin: 5px;\n}\n\n.btn.disabled {\n    /* needed in Bootstrap 3 to allow tooltips on disabled buttons */\n    pointer-events: auto;\n}\n\n.btn-default,\n.btn-default.disabled,\n.btn-default[disabled],\n.btn-default.disabled:hover,\n.btn-default[disabled]:hover {\n    color: #ffffff;\n    background-color: var(--codeButtons);\n    border-color: var(codeButtonsBorder);\n}\n\n.btn-default:hover,\n.btn-default:focus,\n.btn-default:active,\n.btn-default.active {\n    background-color: #3a3c3c;\n    border-color: #2e2f2f;\n    color: #ffffff;\n}\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n    margin-right: 5px;\n}\n\n.tooltip {\n    z-index: 2000 !important;\n}\n\n.tooltip.in {\n    opacity: 0.8;\n    filter: alpha(opacity=80);\n}\n\nh2 {\n    margin-top: 20px;\n}\n\n.alert form {\n    margin-bottom: 0;\n}\n\n/* default bookstrap alert color is hard to read (low contrast). */\n.alert {\n    color: var(--grayToWhite);\n    padding: 10px;\n}\n\n.alert-info {\n    background-color: var(--alerts);\n}\n\n.alert-danger {\n    background-color: var(--dangerAlerts);\n}\n\n/* override the color styles applied by Skulpt to the unittest results divs */\n.unittest-results.alert-danger {\n    background-color: var(--dangerAlerts) !important;\n}\n\n.unittest-results.alert-success {\n    background-color: var(--successAlerts) !important;\n}\n\n.alert label {\n    font-weight: normal;\n}\n\n/* These admonition styles styles are copied from the Bootstrap .alert classes.\n Most of the !important declarations are to override the Sphinx basic.css styles */\n.admonition {\n    padding: 8px 35px 8px 14px !important;\n    margin-bottom: 20px !important;\n    margin-top: 20px !important;\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n    background-color: var(--admonition);\n    border: 1px solid #fbeed5;\n    -webkit-border-radius: 4px;\n    -moz-border-radius: 4px;\n    border-radius: 4px;\n}\n\n/* .alert-danger */\n.admonition.caution {\n    color: #A33F3E;\n    background-color: #f2dede;\n    border-color: #eed3d7;\n}\n\n/* .alert-info */\n.admonition.tip,\n.admonition.note {\n    color: #333;\n    background-color: #d9edf7;\n    border-color: #bce8f1;\n}\n\n/* from web2py.css */\ndiv.flash {\n    font-weight: bold;\n    position: fixed;\n    padding: 10px;\n    top: 55px;\n    right: 45px;\n    opacity: 0.95;\n    margin: 0 0 10px 10px;\n    vertical-align: middle;\n    cursor: pointer;\n    color: #ffffff;\n    background-color: #000;\n    border: 2px solid #fff;\n    border-radius: 8px;\n    -moz-border-radius: 8px;\n    -webkit-border-radius: 8px;\n    background-image: -webkit-linear-gradient(top, #222, #000);\n    background-image: -o-linear-gradient(top, #222, #000);\n    background-image: -moz-linear-gradient(90deg, #222, #000);\n    background-image: linear-gradient(top, #222, #000);\n    background-repeat: repeat-x;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    z-index: 2000;\n}\n\n/* Styles for the login, registration, and Janrain forms */\n#web2py_user_form {\n    margin-top: 10px;\n}\n\n#web2py_user_form form {\n    float: left;\n    margin-right: 150px;\n    padding-top: 3px;\n}\n\n#web2py_user_form td {\n    padding-bottom: 15px;\n}\n\n#web2py_user_form td.w2p_fw {\n    width: 299px;\n}\n\n#auth-actions {\n    margin-top: 50px;\n}\n\n#sign_in_text td {\n    font-size: 17px;\n    color: #333;\n    font-family: 'lucida grande', Verdana, sans-serif;\n    padding-bottom: 13px;\n}\n\n#auth_user_remember {\n    margin-top: -20px;\n}\n\n/* End login, registration, Janrain styles */\n\n/* end-of-chapter exercises styles */\n#exercises>ol>li,\n#programming-exercises>ol>li {\n    margin-bottom: 30px;\n}\n\n#exercises>ol>li:nth-child(even),\n#programming-exercises>ol>li:nth-child(even) {\n    padding: 1.2em 1.4em;\n    background: #faf7df;\n    border: 1px solid #fbeed5;\n    -webkit-border-radius: 4px;\n    -moz-border-radius: 4px;\n    border-radius: 4px;\n}\n\n/* End chapter exercises styles */\n\n/* Modal dialog styles (scratch activecode, compare me, etc) */\n.scratch-ac-modal {\n    width: 90%;\n}\n\n.compare-modal .progress {\n    margin-bottom: 0;\n}\n\n.compare-me-progress {\n    width: 100%;\n}\n\n.compare-me-progress .progress-bar,\n.unittest-results-progress .progress-bar {\n    color: #333;\n}\n\n.modal-body {\n    background-color: var(--background);\n}\n\n.modal-header {\n    background-color: var(--background);\n}\n\n.unittest-results-progress {\n    width: 25%;\n}\n\n.compare-modal {\n    width: 350px;\n}\n\n.compare-modal table {\n    border-collapse: separate;\n    border-spacing: 10px 5px;\n}\n\n.codelens-modal {\n    /* we set some custom position styles so that the modal doesn't obscure the codelens visualizer */\n    top: 20%;\n    right: 20%;\n    left: auto;\n    bottom: auto;\n}\n\n@media (max-width: 768px) {\n\n    /* remove any custom position styles when the screen is small (mobile devices)\n    to prevent the modal from being partially off the screen */\n    .codelens-modal {\n        top: 0 !important;\n        right: 0 !important;\n        bottom: 0 !important;\n        left: 0 !important;\n    }\n}\n\n.codelens-modal>.modal-dialog {\n    width: 400px;\n}\n\n/* End modal dialog styles */\n\n.footnote.table {\n    width: auto;\n    margin-bottom: 10px;\n}\n\n.footnote.table td.label {\n    padding: 2px 5px 2px 5px;\n    background-color: #d9edf7;\n}\n\n.ac-canvas {\n    background-color: white;\n    display: inline-block;\n}\n\n.video-play-overlay {\n    position: relative;\n    top: -150px;\n    left: 44%;\n    height: 85px;\n    width: 130px;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\n.video_popup video {\n    width: 500pt;\n    cursor: pointer;\n}\n\n.ui-sortable-helper {\n    height: auto !important;\n    width: auto !important;\n}\n\n.navLink {\n    z-index: 2;\n    display: inline;\n    bottom: 65px;\n    position: fixed;\n}\n\n.navLink:hover {\n    opacity: 1;\n}\n\n.navLink a {\n    display: inline-block;\n    background-color: white; \n    border-style:solid; \n    border-color:lightgrey; \n    border-width:2px; \n    width:100px; \n    height:50px\n}\n\n#relations-next {\n    right: 35px;\n}\n\n#relations-prev {\n    left: 35px;\n}\n\n.nextprev-list {\n    margin: 10px;\n    padding-left: 0;\n    height: 50px;\n}\n\n@media (max-width: 600px) {\n    \n    .navLink {\n        z-index: 2;\n        display: inline;\n        position: static;\n    }\n\n    #relations-next,\n    #relations-prev {\n        width: 25%;\n        padding: 0 20px;\n        display: inline;\n    }\n}\n\n.navLink a {\n    color: #999;\n}\n\n#completionButton {\n    margin-top: 25px;\n    margin-bottom: 15px;\n    padding-left: 70px;\n    padding-right: 70px;\n    color: #ffffff;\n    font-weight: bold;\n}\n\n.buttonAskCompletion {\n    background-color: var(--completionButton);\n    border-color: var(--completionButtonHover);\n    font-weight: bold;\n}\n\n.buttonAskCompletion:hover {\n    background-color: var(--completionButtonHover);\n    border-color: var(--completionButtonHover);\n}\n\n.buttonConfirmCompletion {\n    background-color: #50d392;\n    border-color: #3dc682;\n\n}\n\n.buttonConfirmCompletion:hover {\n    background-color: #3dc682;\n    border-color: #3dc682;\n}\n\n.navLinkBg {\n    height: 40px;\n    background-color: #ffffff;\n    z-index: 1;\n    position: fixed;\n    bottom: 55px;\n    color: #999;\n    font-weight: bold;\n    -webkit-box-shadow: 0px 0px 3px rgba(50, 50, 50, 0.5);\n    -moz-box-shadow: 0px 0px 3px rgba(50, 50, 50, 0.5);\n    box-shadow: 0px 0px 3px rgba(50, 50, 50, 0.5);\n}\n\n.navLinkBg:hover {\n    color: #999;\n}\n\n#navLinkBgRight {\n    right: -1000px;\n    padding: 10px 15px 0 65px;\n}\n\n#navLinkBgLeft {\n    left: -65px;\n    padding-left: 15px;\n    padding-right: 50px;\n}\n\n.activehtml {\n    width: 100%;\n    height: 400px;\n    background-color: #ffffff;\n}\n\n.container .section>div.sidebar {\n    margin: 0 0 0.5em 1em;\n    width: auto;\n}\n\na.disqus_thread_link {\n    display: block;\n}\n\n.reveal_button {\n    display: block;\n    margin-left: 0;\n}\n\niframe[seamless] {\n    display: block;\n}\n\n@media (min-width: 768px) {\n    .container .section>div.sidebar {\n        margin: 0 3em 0.5em 1em;\n    }\n}\n\n@media (min-width: 992px) {\n    .container .section>div.sidebar {\n        margin: 0 11em 0.5em 1em;\n    }\n}\n\n@media (min-width: 1200px) {\n    .container .section>div.sidebar {\n        margin: 0 18em 0.5em 1em;\n    }\n}\n\n\ndiv.ExecutionVisualizer table.visualizer {\n    width: auto;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: #ffffff;\n}\n\n\n\n\n.sltooltip {\n    position: absolute;\n    z-index: 1020;\n    display: block;\n    padding-bottom: 5px;\n    font-size: 11px;\n    visibility: visible;\n    margin-top: -2px;\n    bottom: 120%;\n    margin-left: -2em;\n}\n\n.sltooltip .sltooltip-arrow {\n    bottom: 0;\n    left: 50%;\n    margin-left: -5px;\n    border-top: 5px solid #000000;\n    border-right: 5px solid transparent;\n    border-left: 5px solid transparent;\n    position: absolute;\n    width: 0;\n    height: 0;\n}\n\n.sltooltip-inner {\n    max-width: 200px;\n    padding: 3px 8px;\n    color: var(--tooltip);\n    text-align: center;\n    text-decoration: none;\n    background-color: #000000;\n    -webkit-border-radius: 4px;\n    -moz-border-radius: 4px;\n    border-radius: 4px;\n}\n\nul.dropdown-menu.globaltoc {\n    max-height: 700px;\n    overflow: auto;\n}\n\n\n.globaltoc span.caption-text {\n    display: inline-block;\n    font-weight: bold;\n    font-size: large;\n}\n\n\n/* Style lp textareas. */\ntextarea#lp-result {\n    width: 100%;\n    height: 10em;\n    font-family: monospace;\n}\n\n\n/*\n * Hide only visually, but have it available for screen readers:\n * https://snook.ca/archives/html_and_css/hiding-content-for-accessibility\n *\n * 1. For long content, line feeds are not interpreted as spaces and small width\n *    causes content to wrap 1 word per line:\n *    https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe\n */\n\n.visuallyhidden {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n    white-space: nowrap;\n    /* 1 */\n}\n\n/*\n * Extends the .visuallyhidden class to allow the element\n * to be focusable when navigated to via the keyboard:\n * https://www.drupal.org/node/897638\n */\n\n.visuallyhidden.focusable:active,\n.visuallyhidden.focusable:focus {\n    clip: auto;\n    height: auto;\n    margin: 0;\n    overflow: visible;\n    position: static;\n    width: auto;\n    white-space: inherit;\n}\n\n\n.blockquote {\n    text-align: center;\n    font-size: large;\n    font-style: italic;\n    padding-left: 2em;\n    padding-right: 2em;\n}\n\n\n#scprogresscontainer {\n    width: 50%;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n#subchapterprogress>div {\n    background: green;\n}\n\n#subchapterprogress>div.loggedout {\n    background: lightgray;\n}\n\n.runestone_caption {\n    text-align: center;\n}\n\n.runestone_caption_divid {\n    opacity: 50%;\n}\n\n#questions .runestone_caption:before {\n    counter-increment: rscomponent;\n    content: \"Problem: \"counter(rscomponent) \" -- \";\n}\n\nbody {\n    color: var(--bodyFont);\n}\n\n.jupyter_container .output  {\n    margin-top: 10px;\n}\n\n.jupyter_container .output td {\n    padding-left: 5px;\n    padding-right: 5px;\n}\n\n.jupyter_container .output th {\n    padding-left: 5px;\n    padding-right: 5px;\n}\n\n/*Theme toggle*/\n.theme-switch-wrapper {\n    display: flex;\n    align-items: center;\n\n    em {\n        margin-left: 10px;\n        font-size: 1rem;\n    }\n}\n\n.theme-switch {\n    display: inline-block;\n    height: 34px;\n    position: relative;\n    width: 60px;\n}\n\n.theme-switch input {\n    display: none;\n}\n\n.slider {\n    background-color: #ccc;\n    bottom: 0;\n    cursor: pointer;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    transition: .4s;\n}\n\n.slider:before {\n    background-color: #fff;\n    bottom: 4px;\n    content: \"\";\n    height: 26px;\n    left: 4px;\n    position: absolute;\n    transition: .4s;\n    width: 26px;\n}\n\ninput:checked+.slider {\n    background-color: #66bb6a;\n}\n\ninput:checked+.slider:before {\n    transform: translateX(26px);\n}\n\n.slider.round {\n    border-radius: 34px;\n}\n\n.slider.round:before {\n    border-radius: 50%;\n}\n\n/*End theme toggle*/", "",{"version":3,"sources":["webpack://./runestone/common/css/runestone-custom-sphinx-bootstrap.css"],"names":[],"mappings":"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","sourcesContent":["/* Variables holding theme colors */\n:root {\n    --background: #ffffff;\n    --outerBackground: #eeeeee;\n    --links: #0645ad;\n    --bodyFont: #000000;\n    --tooltip: #ffffff;\n    --grayToWhite: #333333;\n    --navbar: #f8f8f8;\n    --navbarFont: #707070;\n    --navbarFontHover: #000000;\n    --alerts: #d9edf7;\n    --completionButton: #ffaa2b;\n    --completionButtonHover: #ff9f19;\n    --admonition: #fcf8e3;\n    --admonitionBorder: #fbeed5;\n    --codeButtons: #474949;\n    --codeButtonsBorder: #474949;\n    --dangerAlerts: #f2dede;\n    --successAlerts: #dff0d8;\n}\n\n[data-theme=\"dark\"] {\n    --background: #000000;\n    --outerBackground: #3d3d3d;\n    --links: #1165f0;\n    --bodyFont: #ffffff;\n    --tooltip: #000000;\n    --grayToWhite: #ffffff;\n    --navbar: #3d3d3d;\n    --navbarFont: #ffffff;\n    --navbarFontHover: #d6d6d6;\n    --alerts: #714082;\n    --completionButton: #650087;\n    --completionButtonHover: #560073;\n    --admonition: #3d3d3d;\n    --admonitionBorder: #262626;\n    --codeButtons: #2c0aa6;\n    --codeButtonsBorder: #ffffff;\n    --dangerAlerts: #8c2626;\n    --successAlerts: #217300;\n}\n\n/* custom modification of basic.css for color-contrast (AA compliant) */\ntd.linenos pre {\n    color: #6b6b6b;\n}\n\n/* custom modification of prettify.css for color-contrast (AA compliant) */\n.str {\n    color: #006b00;\n}\n\n/* custom modification of parsons.css for color-contrast (AA compliant) */\n.parsons .block {\n    background-color: #fafafa;\n}\n\n/* custom modification of pygments.css for color-contrast (AA compliant) */\n.highlight .c1 {\n    color: #376A7B;\n}\n\n.highlight .nn {\n    color: #0F6C95;\n}\n\n.highlight .gp {\n    color: #A14C08;\n}\n\n.highlight .si {\n    color: #3C773D;\n}\n\n.highlight .nc {\n    color: #0B719D;\n}\n\n/* `Search` functionality's result custom modification for color-contrast (AA compliant) */\nul.search li div.context {\n    color: #6b6b6b;\n}\n\nspan.highlighted {\n    color: #4d4d4d;\n}\n\n/* ActiveCode gutter custom modification for color-contrast (AA compliant) */\n\n.CodeMirror-linenumber {\n    color: #6b6b6b;\n}\n\n.alert-warning {\n    background-color: var(--admonition);\n    border-color: var(--admonitionBorder);\n}\n\n/* Python code output custom modification for color-contrast (AA compliant) */\ndiv.ExecutionVisualizer table#pyCodeOutput .lineNo {\n    color: #6b6b6b;\n}\n\n/* Runestone custom modifications */\n\nbody {\n    counter-reset: rscomponent;\n    padding-top: 60px;\n    background-color: var(--outerBackground);\n}\n\npre {\n    margin: 0 0 1em;\n}\n\nh5 {\n    font-weight: bold;\n    padding: 10px 0;\n}\n\n/* table-of-contents related styles for color-contrast (AA compliant) */\n#table-of-contents a {\n    color: var(--links);\n}\n\n#table-of-contents a:hover {\n    color: var(--links);\n    text-decoration: underline;\n}\n\n#table-of-contents.section {\n    font-size: 16px;\n}\n\n/* navbar-brand color contrast (AA compliant) */\n.navbar-default {\n    background-color: var(--navbar);\n}\n\n.navbar-default .navbar-nav>li {\n    color: var(--navbarFont);\n}\n\n.navbar-default .navbar-nav>li>a {\n    color: var(--navbarFont);\n}\n\n.navbar-default .navbar-nav>li>a:hover {\n    color: var(--navbarFontHover);\n}\n\n.navbar-default .navbar-brand {\n    color: var(--navbarFont);\n}\n\n/* acknowledgement related styles for color-contrast (AA compliant) */\n.toctree-wrapper {\n    font-size: 16px;\n}\n\n.toctree-wrapper a {\n    color: var(--links);\n}\n\n.toctree-wrapper a:hover {\n    color: var(--links);\n    text-decoration: underline;\n}\n\n/* index and search related styles for color-contrast (AA compliant) */\n#index-and-search.section {\n    font-size: 16px;\n}\n\n#index-and-search.section a {\n    color: var(--links);\n}\n\n#index-and-search.section a:hover {\n    color: var(--links);\n    text-decoration: underline;\n}\n\n/* custom style for `a` tag for color-contrast (AA compliant) */\n\na {\n    color: var(--links);\n}\n\n/* navbar and menu related styles */\n@media (max-width: 768px) {\n\n    /* Remove top padding when top navbar goes collapsed in narrow viewports */\n    body {\n        padding-top: 0;\n        margin: auto auto auto 5px;\n    }\n\n    .navbar-fixed-top {\n        position: static;\n    }\n\n}\n\n@media (min-width: 768px) {\n\n    /* when navbar is collapsed we don't want any vertical dividers taking up space */\n    .navbar .divider-vertical {\n        margin: 0 3px;\n        border-left: 1px solid #f2f2f2;\n    }\n}\n\ndiv.container {\n    background-color: var(--background);\n}\n\ndiv.section {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.container {\n    padding-left: 0;\n    padding-right: 0;\n}\n\n.container .section>*:not(.section):not(.ac_section) {\n    max-width: 500pt;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n/* This rule is meant to override the behavior of the\n   previous rule since it is not possible to exclude\n   more than one section in the not() part of the rule\n*/\n.container .section div.full-width.container {\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 90%;\n}\n\n.container .section>img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.container .section .parsons,\n.container .section .parsons .sortable-code-container,\n.container .section .cd_section {\n    max-width: none;\n}\n\n.navbar>.container .navbar-brand {\n    margin-left: 0;\n}\n\n.navbar>.container {\n    background-color: var(--navbar);\n}\n\n.footer>.container {\n    background-color: var(--outerBackground);\n}\n\n.footer>.container p>a {\n    color: var(--links);\n}\n\n.brand-logo {\n    float: left;\n    display: block;\n    background-size: 40px 40px !important;\n    width: 40px;\n    height: 40px;\n    margin-top: 4px;\n}\n\n.social-menu {\n    width: 220px;\n    padding: 10px 10px 15px 20px;\n}\n\n.fb-like {\n    margin-top: 7px;\n}\n\n.fb_iframe_widget span,\n.fb_iframe_widget iframe {\n    height: 20px !important;\n    width: 82px !important;\n}\n\n.twitter-follow-button {\n    margin-top: 10px;\n}\n\n.gittip {\n    margin-top: 8px;\n}\n\n.gittip-button {\n    margin-bottom: -6px;\n}\n\n.dropdown-menu>li>span {\n    display: block;\n    padding: 3px 20px;\n    clear: both;\n    font-weight: bold;\n    line-height: 20px;\n    color: var(--grayToWhite);\n    white-space: nowrap;\n}\n\n.dropdown-menu>li>a {\n    color: var(--grayToWhite);\n}\n\n.loggedinuser {\n    font-weight: bold;\n}\n\n/* end navbar and menu related styles */\n\n.CodeMirror {\n    margin: 0 0 1em 0;\n    background-color: var(--background);\n    height: auto;\n    clear: both;\n}\n\n.CodeMirror-scroll {\n    /* this allows CM elements to be resized to (almost) any\n     * height while still relying on max-height (which keeps\n     * the CM editors to no more than the size needed\n     * unless resized) */\n    max-height: 60em;\n    min-width: 30em;\n}\n\n.ac_section .CodeMirror pre {\n    -moz-border-radius: 0;\n    -webkit-border-radius: 0;\n    -o-border-radius: 0;\n    border-radius: 0;\n    border-width: 0;\n    margin: 0;\n    padding: 0;\n    background: transparent;\n    font-family: Monaco, Courier New, monospace;\n    font-size: inherit;\n    padding: 0;\n    margin: 0;\n    white-space: pre;\n    word-wrap: normal;\n}\n\nbutton.btn,\nbtn.btn-sm,\ninput[type=\"submit\"].btn.btn-sm,\ninput[type=\"button\"].btn.btn-sm {\n    font-size: 1em;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.btn {\n    margin: 5px;\n}\n\n.btn.disabled {\n    /* needed in Bootstrap 3 to allow tooltips on disabled buttons */\n    pointer-events: auto;\n}\n\n.btn-default,\n.btn-default.disabled,\n.btn-default[disabled],\n.btn-default.disabled:hover,\n.btn-default[disabled]:hover {\n    color: #ffffff;\n    background-color: var(--codeButtons);\n    border-color: var(codeButtonsBorder);\n}\n\n.btn-default:hover,\n.btn-default:focus,\n.btn-default:active,\n.btn-default.active {\n    background-color: #3a3c3c;\n    border-color: #2e2f2f;\n    color: #ffffff;\n}\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n    margin-right: 5px;\n}\n\n.tooltip {\n    z-index: 2000 !important;\n}\n\n.tooltip.in {\n    opacity: 0.8;\n    filter: alpha(opacity=80);\n}\n\nh2 {\n    margin-top: 20px;\n}\n\n.alert form {\n    margin-bottom: 0;\n}\n\n/* default bookstrap alert color is hard to read (low contrast). */\n.alert {\n    color: var(--grayToWhite);\n    padding: 10px;\n}\n\n.alert-info {\n    background-color: var(--alerts);\n}\n\n.alert-danger {\n    background-color: var(--dangerAlerts);\n}\n\n/* override the color styles applied by Skulpt to the unittest results divs */\n.unittest-results.alert-danger {\n    background-color: var(--dangerAlerts) !important;\n}\n\n.unittest-results.alert-success {\n    background-color: var(--successAlerts) !important;\n}\n\n.alert label {\n    font-weight: normal;\n}\n\n/* These admonition styles styles are copied from the Bootstrap .alert classes.\n Most of the !important declarations are to override the Sphinx basic.css styles */\n.admonition {\n    padding: 8px 35px 8px 14px !important;\n    margin-bottom: 20px !important;\n    margin-top: 20px !important;\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n    background-color: var(--admonition);\n    border: 1px solid #fbeed5;\n    -webkit-border-radius: 4px;\n    -moz-border-radius: 4px;\n    border-radius: 4px;\n}\n\n/* .alert-danger */\n.admonition.caution {\n    color: #A33F3E;\n    background-color: #f2dede;\n    border-color: #eed3d7;\n}\n\n/* .alert-info */\n.admonition.tip,\n.admonition.note {\n    color: #333;\n    background-color: #d9edf7;\n    border-color: #bce8f1;\n}\n\n/* from web2py.css */\ndiv.flash {\n    font-weight: bold;\n    position: fixed;\n    padding: 10px;\n    top: 55px;\n    right: 45px;\n    opacity: 0.95;\n    margin: 0 0 10px 10px;\n    vertical-align: middle;\n    cursor: pointer;\n    color: #ffffff;\n    background-color: #000;\n    border: 2px solid #fff;\n    border-radius: 8px;\n    -moz-border-radius: 8px;\n    -webkit-border-radius: 8px;\n    background-image: -webkit-linear-gradient(top, #222, #000);\n    background-image: -o-linear-gradient(top, #222, #000);\n    background-image: -moz-linear-gradient(90deg, #222, #000);\n    background-image: linear-gradient(top, #222, #000);\n    background-repeat: repeat-x;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    z-index: 2000;\n}\n\n/* Styles for the login, registration, and Janrain forms */\n#web2py_user_form {\n    margin-top: 10px;\n}\n\n#web2py_user_form form {\n    float: left;\n    margin-right: 150px;\n    padding-top: 3px;\n}\n\n#web2py_user_form td {\n    padding-bottom: 15px;\n}\n\n#web2py_user_form td.w2p_fw {\n    width: 299px;\n}\n\n#auth-actions {\n    margin-top: 50px;\n}\n\n#sign_in_text td {\n    font-size: 17px;\n    color: #333;\n    font-family: 'lucida grande', Verdana, sans-serif;\n    padding-bottom: 13px;\n}\n\n#auth_user_remember {\n    margin-top: -20px;\n}\n\n/* End login, registration, Janrain styles */\n\n/* end-of-chapter exercises styles */\n#exercises>ol>li,\n#programming-exercises>ol>li {\n    margin-bottom: 30px;\n}\n\n#exercises>ol>li:nth-child(even),\n#programming-exercises>ol>li:nth-child(even) {\n    padding: 1.2em 1.4em;\n    background: #faf7df;\n    border: 1px solid #fbeed5;\n    -webkit-border-radius: 4px;\n    -moz-border-radius: 4px;\n    border-radius: 4px;\n}\n\n/* End chapter exercises styles */\n\n/* Modal dialog styles (scratch activecode, compare me, etc) */\n.scratch-ac-modal {\n    width: 90%;\n}\n\n.compare-modal .progress {\n    margin-bottom: 0;\n}\n\n.compare-me-progress {\n    width: 100%;\n}\n\n.compare-me-progress .progress-bar,\n.unittest-results-progress .progress-bar {\n    color: #333;\n}\n\n.modal-body {\n    background-color: var(--background);\n}\n\n.modal-header {\n    background-color: var(--background);\n}\n\n.unittest-results-progress {\n    width: 25%;\n}\n\n.compare-modal {\n    width: 350px;\n}\n\n.compare-modal table {\n    border-collapse: separate;\n    border-spacing: 10px 5px;\n}\n\n.codelens-modal {\n    /* we set some custom position styles so that the modal doesn't obscure the codelens visualizer */\n    top: 20%;\n    right: 20%;\n    left: auto;\n    bottom: auto;\n}\n\n@media (max-width: 768px) {\n\n    /* remove any custom position styles when the screen is small (mobile devices)\n    to prevent the modal from being partially off the screen */\n    .codelens-modal {\n        top: 0 !important;\n        right: 0 !important;\n        bottom: 0 !important;\n        left: 0 !important;\n    }\n}\n\n.codelens-modal>.modal-dialog {\n    width: 400px;\n}\n\n/* End modal dialog styles */\n\n.footnote.table {\n    width: auto;\n    margin-bottom: 10px;\n}\n\n.footnote.table td.label {\n    padding: 2px 5px 2px 5px;\n    background-color: #d9edf7;\n}\n\n.ac-canvas {\n    background-color: white;\n    display: inline-block;\n}\n\n.video-play-overlay {\n    position: relative;\n    top: -150px;\n    left: 44%;\n    height: 85px;\n    width: 130px;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\n.video_popup video {\n    width: 500pt;\n    cursor: pointer;\n}\n\n.ui-sortable-helper {\n    height: auto !important;\n    width: auto !important;\n}\n\n.navLink {\n    z-index: 2;\n    display: inline;\n    bottom: 65px;\n    position: fixed;\n}\n\n.navLink:hover {\n    opacity: 1;\n}\n\n.navLink a {\n    display: inline-block;\n    background-color: white; \n    border-style:solid; \n    border-color:lightgrey; \n    border-width:2px; \n    width:100px; \n    height:50px\n}\n\n#relations-next {\n    right: 35px;\n}\n\n#relations-prev {\n    left: 35px;\n}\n\n.nextprev-list {\n    margin: 10px;\n    padding-left: 0;\n    height: 50px;\n}\n\n@media (max-width: 600px) {\n    \n    .navLink {\n        z-index: 2;\n        display: inline;\n        position: static;\n    }\n\n    #relations-next,\n    #relations-prev {\n        width: 25%;\n        padding: 0 20px;\n        display: inline;\n    }\n}\n\n.navLink a {\n    color: #999;\n}\n\n#completionButton {\n    margin-top: 25px;\n    margin-bottom: 15px;\n    padding-left: 70px;\n    padding-right: 70px;\n    color: #ffffff;\n    font-weight: bold;\n}\n\n.buttonAskCompletion {\n    background-color: var(--completionButton);\n    border-color: var(--completionButtonHover);\n    font-weight: bold;\n}\n\n.buttonAskCompletion:hover {\n    background-color: var(--completionButtonHover);\n    border-color: var(--completionButtonHover);\n}\n\n.buttonConfirmCompletion {\n    background-color: #50d392;\n    border-color: #3dc682;\n\n}\n\n.buttonConfirmCompletion:hover {\n    background-color: #3dc682;\n    border-color: #3dc682;\n}\n\n.navLinkBg {\n    height: 40px;\n    background-color: #ffffff;\n    z-index: 1;\n    position: fixed;\n    bottom: 55px;\n    color: #999;\n    font-weight: bold;\n    -webkit-box-shadow: 0px 0px 3px rgba(50, 50, 50, 0.5);\n    -moz-box-shadow: 0px 0px 3px rgba(50, 50, 50, 0.5);\n    box-shadow: 0px 0px 3px rgba(50, 50, 50, 0.5);\n}\n\n.navLinkBg:hover {\n    color: #999;\n}\n\n#navLinkBgRight {\n    right: -1000px;\n    padding: 10px 15px 0 65px;\n}\n\n#navLinkBgLeft {\n    left: -65px;\n    padding-left: 15px;\n    padding-right: 50px;\n}\n\n.activehtml {\n    width: 100%;\n    height: 400px;\n    background-color: #ffffff;\n}\n\n.container .section>div.sidebar {\n    margin: 0 0 0.5em 1em;\n    width: auto;\n}\n\na.disqus_thread_link {\n    display: block;\n}\n\n.reveal_button {\n    display: block;\n    margin-left: 0;\n}\n\niframe[seamless] {\n    display: block;\n}\n\n@media (min-width: 768px) {\n    .container .section>div.sidebar {\n        margin: 0 3em 0.5em 1em;\n    }\n}\n\n@media (min-width: 992px) {\n    .container .section>div.sidebar {\n        margin: 0 11em 0.5em 1em;\n    }\n}\n\n@media (min-width: 1200px) {\n    .container .section>div.sidebar {\n        margin: 0 18em 0.5em 1em;\n    }\n}\n\n\ndiv.ExecutionVisualizer table.visualizer {\n    width: auto;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: #ffffff;\n}\n\n\n\n\n.sltooltip {\n    position: absolute;\n    z-index: 1020;\n    display: block;\n    padding-bottom: 5px;\n    font-size: 11px;\n    visibility: visible;\n    margin-top: -2px;\n    bottom: 120%;\n    margin-left: -2em;\n}\n\n.sltooltip .sltooltip-arrow {\n    bottom: 0;\n    left: 50%;\n    margin-left: -5px;\n    border-top: 5px solid #000000;\n    border-right: 5px solid transparent;\n    border-left: 5px solid transparent;\n    position: absolute;\n    width: 0;\n    height: 0;\n}\n\n.sltooltip-inner {\n    max-width: 200px;\n    padding: 3px 8px;\n    color: var(--tooltip);\n    text-align: center;\n    text-decoration: none;\n    background-color: #000000;\n    -webkit-border-radius: 4px;\n    -moz-border-radius: 4px;\n    border-radius: 4px;\n}\n\nul.dropdown-menu.globaltoc {\n    max-height: 700px;\n    overflow: auto;\n}\n\n\n.globaltoc span.caption-text {\n    display: inline-block;\n    font-weight: bold;\n    font-size: large;\n}\n\n\n/* Style lp textareas. */\ntextarea#lp-result {\n    width: 100%;\n    height: 10em;\n    font-family: monospace;\n}\n\n\n/*\n * Hide only visually, but have it available for screen readers:\n * https://snook.ca/archives/html_and_css/hiding-content-for-accessibility\n *\n * 1. For long content, line feeds are not interpreted as spaces and small width\n *    causes content to wrap 1 word per line:\n *    https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe\n */\n\n.visuallyhidden {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n    white-space: nowrap;\n    /* 1 */\n}\n\n/*\n * Extends the .visuallyhidden class to allow the element\n * to be focusable when navigated to via the keyboard:\n * https://www.drupal.org/node/897638\n */\n\n.visuallyhidden.focusable:active,\n.visuallyhidden.focusable:focus {\n    clip: auto;\n    height: auto;\n    margin: 0;\n    overflow: visible;\n    position: static;\n    width: auto;\n    white-space: inherit;\n}\n\n\n.blockquote {\n    text-align: center;\n    font-size: large;\n    font-style: italic;\n    padding-left: 2em;\n    padding-right: 2em;\n}\n\n\n#scprogresscontainer {\n    width: 50%;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n#subchapterprogress>div {\n    background: green;\n}\n\n#subchapterprogress>div.loggedout {\n    background: lightgray;\n}\n\n.runestone_caption {\n    text-align: center;\n}\n\n.runestone_caption_divid {\n    opacity: 50%;\n}\n\n#questions .runestone_caption:before {\n    counter-increment: rscomponent;\n    content: \"Problem: \"counter(rscomponent) \" -- \";\n}\n\nbody {\n    color: var(--bodyFont);\n}\n\n.jupyter_container .output  {\n    margin-top: 10px;\n}\n\n.jupyter_container .output td {\n    padding-left: 5px;\n    padding-right: 5px;\n}\n\n.jupyter_container .output th {\n    padding-left: 5px;\n    padding-right: 5px;\n}\n\n/*Theme toggle*/\n.theme-switch-wrapper {\n    display: flex;\n    align-items: center;\n\n    em {\n        margin-left: 10px;\n        font-size: 1rem;\n    }\n}\n\n.theme-switch {\n    display: inline-block;\n    height: 34px;\n    position: relative;\n    width: 60px;\n}\n\n.theme-switch input {\n    display: none;\n}\n\n.slider {\n    background-color: #ccc;\n    bottom: 0;\n    cursor: pointer;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    transition: .4s;\n}\n\n.slider:before {\n    background-color: #fff;\n    bottom: 4px;\n    content: \"\";\n    height: 26px;\n    left: 4px;\n    position: absolute;\n    transition: .4s;\n    width: 26px;\n}\n\ninput:checked+.slider {\n    background-color: #66bb6a;\n}\n\ninput:checked+.slider:before {\n    transform: translateX(26px);\n}\n\n.slider.round {\n    border-radius: 34px;\n}\n\n.slider.round:before {\n    border-radius: 50%;\n}\n\n/*End theme toggle*/"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "/* Variables holding theme colors */\n:root {\n\t--menu: #FFFFFF;\n}\n\n[data-theme=\"dark\"] {\n\t--menu: #000000;\n}\n\n.my-highlighted-text{\n\tbackground-color:#FFFF99;\n}\n.social-highlighted-text{\n\tbackground-color:#FFCCCC;\n}\n.highlight-option-box{\n\tposition:absolute;\n\ttop:0px;\n\tleft:0px;\n}\n.highlight-option-box li{ \n\theight:24px;\n}\n#continue-reading{\n\tpadding-top:20px;\n\tdisplay: none;\n}\n#continue-reading a{\n\tfloat:right;\n\tmargin-right:20px;\n}\nli.completed\n{\nlist-style-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\nli.active\n{\nlist-style-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n.infoTextCompleted{\n\tmargin-left:10px;\n\tfont-size:0.9em;\n\tcolor:#3dc682;\n\tdisplay:none;\n\tfont-style:italic;\n\topacity: 0.7;\n}\n.infoTextActive{\n\tmargin-left:10px;\n\tfont-size:0.9em;\n\tcolor:#ff9f19;\n\tdisplay:none;\n\tfont-style:italic;\n\topacity: 0.7;\n}\n.dropdown-menu{\n\tbackground-clip: padding-box;\n    background-color: var(--menu);\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    border-radius: 5px 5px 5px 5px;\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n    display: none;\n    float: left;\n    left: 0;\n    list-style: none outside none;\n    margin: 1px 0 0;\n    min-width: 160px;\n    padding: 4px 0;\n    position: absolute;\n    top: 100%;\n    z-index: 1000;\n}\n.dropdown-menu ul {\n    list-style: disc outside none;\n    margin: 0 0 9px 25px;\n    padding: 0;\n}\n\n.sidebar-highlights{\n    background-color:#FFFF99;\n}\ndiv.documentwrapper {\n\tborder : 0 none;\n}\ndiv.bodywrapper {\n\tborder-right: 0 none;\n}\ndiv.sphinxsidebar {\n\tborder-left: 1px solid #CCCCCC;\n\tpadding-left: 10px;\n}\n.body>.section .section{\n\tpadding-top: 1px;\n}\n#jump-to-chapter{\n    border: 1px solid #CCCCCC;\n    letter-spacing: 0.015em;\n    line-height: 120%;\n    padding: 0.5em;\n\twidth: 80%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n#navigation-links{\n\tbackground-color: #F8F8F8;\n    border: 1px solid #CCCCCC;\n\tpadding:10px;\n\tmargin:10px;\n}\n", "",{"version":3,"sources":["webpack://./runestone/common/css/user-highlights.css"],"names":[],"mappings":"AAAA,mCAAmC;AACnC;CACC,eAAe;AAChB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,wBAAwB;AACzB;AACA;CACC,wBAAwB;AACzB;AACA;CACC,iBAAiB;CACjB,OAAO;CACP,QAAQ;AACT;AACA;CACC,WAAW;AACZ;AACA;CACC,gBAAgB;CAChB,aAAa;AACd;AACA;CACC,WAAW;CACX,iBAAiB;AAClB;AACA;;AAEA,yDAAsC;AACtC;AACA;;AAEA,yDAAmC;AACnC;AACA;CACC,gBAAgB;CAChB,eAAe;CACf,aAAa;CACb,YAAY;CACZ,iBAAiB;CACjB,YAAY;AACb;AACA;CACC,gBAAgB;CAChB,eAAe;CACf,aAAa;CACb,YAAY;CACZ,iBAAiB;CACjB,YAAY;AACb;AACA;CACC,4BAA4B;IACzB,6BAA6B;IAC7B,oCAAoC;IACpC,8BAA8B;IAC9B,yCAAyC;IACzC,aAAa;IACb,WAAW;IACX,OAAO;IACP,6BAA6B;IAC7B,eAAe;IACf,gBAAgB;IAChB,cAAc;IACd,kBAAkB;IAClB,SAAS;IACT,aAAa;AACjB;AACA;IACI,6BAA6B;IAC7B,oBAAoB;IACpB,UAAU;AACd;;AAEA;IACI,wBAAwB;AAC5B;AACA;CACC,eAAe;AAChB;AACA;CACC,oBAAoB;AACrB;AACA;CACC,8BAA8B;CAC9B,kBAAkB;AACnB;AACA;CACC,gBAAgB;AACjB;AACA;IACI,yBAAyB;IACzB,uBAAuB;IACvB,iBAAiB;IACjB,cAAc;CACjB,UAAU;CACV,iBAAiB;CACjB,kBAAkB;AACnB;AACA;CACC,yBAAyB;IACtB,yBAAyB;CAC5B,YAAY;CACZ,WAAW;AACZ","sourcesContent":["/* Variables holding theme colors */\n:root {\n\t--menu: #FFFFFF;\n}\n\n[data-theme=\"dark\"] {\n\t--menu: #000000;\n}\n\n.my-highlighted-text{\n\tbackground-color:#FFFF99;\n}\n.social-highlighted-text{\n\tbackground-color:#FFCCCC;\n}\n.highlight-option-box{\n\tposition:absolute;\n\ttop:0px;\n\tleft:0px;\n}\n.highlight-option-box li{ \n\theight:24px;\n}\n#continue-reading{\n\tpadding-top:20px;\n\tdisplay: none;\n}\n#continue-reading a{\n\tfloat:right;\n\tmargin-right:20px;\n}\nli.completed\n{\nlist-style-image: url('completed.png');\n}\nli.active\n{\nlist-style-image: url('active.png');\n}\n.infoTextCompleted{\n\tmargin-left:10px;\n\tfont-size:0.9em;\n\tcolor:#3dc682;\n\tdisplay:none;\n\tfont-style:italic;\n\topacity: 0.7;\n}\n.infoTextActive{\n\tmargin-left:10px;\n\tfont-size:0.9em;\n\tcolor:#ff9f19;\n\tdisplay:none;\n\tfont-style:italic;\n\topacity: 0.7;\n}\n.dropdown-menu{\n\tbackground-clip: padding-box;\n    background-color: var(--menu);\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    border-radius: 5px 5px 5px 5px;\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n    display: none;\n    float: left;\n    left: 0;\n    list-style: none outside none;\n    margin: 1px 0 0;\n    min-width: 160px;\n    padding: 4px 0;\n    position: absolute;\n    top: 100%;\n    z-index: 1000;\n}\n.dropdown-menu ul {\n    list-style: disc outside none;\n    margin: 0 0 9px 25px;\n    padding: 0;\n}\n\n.sidebar-highlights{\n    background-color:#FFFF99;\n}\ndiv.documentwrapper {\n\tborder : 0 none;\n}\ndiv.bodywrapper {\n\tborder-right: 0 none;\n}\ndiv.sphinxsidebar {\n\tborder-left: 1px solid #CCCCCC;\n\tpadding-left: 10px;\n}\n.body>.section .section{\n\tpadding-top: 1px;\n}\n#jump-to-chapter{\n    border: 1px solid #CCCCCC;\n    letter-spacing: 0.015em;\n    line-height: 120%;\n    padding: 0.5em;\n\twidth: 80%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n#navigation-links{\n\tbackground-color: #F8F8F8;\n    border: 1px solid #CCCCCC;\n\tpadding:10px;\n\tmargin:10px;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".matrixeq_container {\n  padding: 6px 6px 6px 6px;\n  margin: 0px 0px 6px 0px;\n}\n\nspan.matrix_table {\n  display: inline-table;\n  background-color: inherit;\n  border-width: 2px 2px;\n  border-style: solid;\n  border-color: black;\n  text-align: center;\n  padding: 0px 1px;\n  margin: 0px 0px 4px 0px;\n  overflow: visible;\n}\n\nspan.matrix_column {\n  display: inline-table;\n  background-color: inherit;\n  padding: 2px 8px 2px 8px;\n  margin: 0px 1px;\n  border-width: 0px 0px 0px 0px;\n  font-family: monospace;\n  font-size: 12px;\n  vertical-align: middle;\n}\n\nspan.matrix_column div {\n  display: block;\n  margin: 1px;\n  padding: 2px;\n  background-color: inherit;\n}\n\nspan.matrix_table .matrix_column {\n  border-style: none;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\nspan.matrix_table:before {\n  content: \" \";\n  background-color: inherit;\n  width: 85%;\n  text-align: center;\n  height: 2px;\n  position: relative;\n  top: -2px;\n  z-index: 100;\n  display: block;\n  margin: 0px auto;\n}\n\nspan.matrix_table:after {\n  content: \" \";\n  background-color: inherit;\n  width: 85%;\n  text-align: center;\n  height: 2px;\n  position: relative;\n  top: 2px;\n  z-index: 100;\n  display: block;\n  margin: 0px auto;\n}\n\nspan.matrix_column:before {\n  content: \" \";\n  width: 85%;\n  height: 2px;\n  position: relative;\n  top: -2px;\n  z-index: 100;\n  display: block;\n}\n\nspan.matrix_column:after {\n  content: \" \";\n  width: 85%;\n  height: 2px;\n  position: relative;\n  top: 2px;\n  z-index: 100;\n  display: block;\n}\n\nspan.matrix_table span.matrix_column:before {\n  height: 0px;\n}\n\nspan.matrix_table span.matrix_column:after {\n  height: 0px;\n}\n\nspan input[type=\"text\"] {\n  display: block;\n  margin: 0;\n  width: 50px;\n  height: 24px;\n  font-family: sans-serif;\n  font-size: 12px;\n  appearance: none;\n  box-shadow: none;\n  text-align: right;\n  background-color: inherit;\n}\n\nspan.matrix_operator {\n  display: inline-table;\n  padding: 0px;\n  margin: 0px 4px 0px 4px;\n  font-family: monospace;\n  font-size: 18px;\n  vertical-align: middle;\n}\n\nspan.matrix_label {\n  display: inline-table;\n  padding: 0px 0px 0px 20px;\n  margin: 0px 1px;\n  font-family: sans-serif;\n  font-size: 12px;\n  vertical-align: middle;\n}\n\n/* Colors for matrix highlighting */\n\n.lightcyanColor {\n  background-color: lightcyan;\n}\n\n.lightgreyColor {\n  background-color: lightgrey;\n}\n\n.purpleColor {\n  background-color: #DFB5E8;\n}\n\n.yellowColor {\n  background-color: #FDFF9D;\n}\n\n\n\n", "",{"version":3,"sources":["webpack://./runestone/matrixeq/css/matrixeq.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB,yBAAyB;EACzB,qBAAqB;EACrB,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,yBAAyB;EACzB,wBAAwB;EACxB,eAAe;EACf,6BAA6B;EAC7B,sBAAsB;EACtB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,UAAU;EACV,kBAAkB;EAClB,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,YAAY;EACZ,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,UAAU;EACV,kBAAkB;EAClB,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,YAAY;EACZ,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,cAAc;EACd,SAAS;EACT,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,uBAAuB;EACvB,sBAAsB;EACtB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,yBAAyB;EACzB,eAAe;EACf,uBAAuB;EACvB,eAAe;EACf,sBAAsB;AACxB;;AAEA,mCAAmC;;AAEnC;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":[".matrixeq_container {\n  padding: 6px 6px 6px 6px;\n  margin: 0px 0px 6px 0px;\n}\n\nspan.matrix_table {\n  display: inline-table;\n  background-color: inherit;\n  border-width: 2px 2px;\n  border-style: solid;\n  border-color: black;\n  text-align: center;\n  padding: 0px 1px;\n  margin: 0px 0px 4px 0px;\n  overflow: visible;\n}\n\nspan.matrix_column {\n  display: inline-table;\n  background-color: inherit;\n  padding: 2px 8px 2px 8px;\n  margin: 0px 1px;\n  border-width: 0px 0px 0px 0px;\n  font-family: monospace;\n  font-size: 12px;\n  vertical-align: middle;\n}\n\nspan.matrix_column div {\n  display: block;\n  margin: 1px;\n  padding: 2px;\n  background-color: inherit;\n}\n\nspan.matrix_table .matrix_column {\n  border-style: none;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\nspan.matrix_table:before {\n  content: \" \";\n  background-color: inherit;\n  width: 85%;\n  text-align: center;\n  height: 2px;\n  position: relative;\n  top: -2px;\n  z-index: 100;\n  display: block;\n  margin: 0px auto;\n}\n\nspan.matrix_table:after {\n  content: \" \";\n  background-color: inherit;\n  width: 85%;\n  text-align: center;\n  height: 2px;\n  position: relative;\n  top: 2px;\n  z-index: 100;\n  display: block;\n  margin: 0px auto;\n}\n\nspan.matrix_column:before {\n  content: \" \";\n  width: 85%;\n  height: 2px;\n  position: relative;\n  top: -2px;\n  z-index: 100;\n  display: block;\n}\n\nspan.matrix_column:after {\n  content: \" \";\n  width: 85%;\n  height: 2px;\n  position: relative;\n  top: 2px;\n  z-index: 100;\n  display: block;\n}\n\nspan.matrix_table span.matrix_column:before {\n  height: 0px;\n}\n\nspan.matrix_table span.matrix_column:after {\n  height: 0px;\n}\n\nspan input[type=\"text\"] {\n  display: block;\n  margin: 0;\n  width: 50px;\n  height: 24px;\n  font-family: sans-serif;\n  font-size: 12px;\n  appearance: none;\n  box-shadow: none;\n  text-align: right;\n  background-color: inherit;\n}\n\nspan.matrix_operator {\n  display: inline-table;\n  padding: 0px;\n  margin: 0px 4px 0px 4px;\n  font-family: monospace;\n  font-size: 18px;\n  vertical-align: middle;\n}\n\nspan.matrix_label {\n  display: inline-table;\n  padding: 0px 0px 0px 20px;\n  margin: 0px 1px;\n  font-family: sans-serif;\n  font-size: 12px;\n  vertical-align: middle;\n}\n\n/* Colors for matrix highlighting */\n\n.lightcyanColor {\n  background-color: lightcyan;\n}\n\n.lightgreyColor {\n  background-color: lightgrey;\n}\n\n.purpleColor {\n  background-color: #DFB5E8;\n}\n\n.yellowColor {\n  background-color: #FDFF9D;\n}\n\n\n\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "/********************* Colour reference chart****************\nelememt ********* property ********* colour ********\n\nwebgl_container  background-color    #fcf8e3\n\n*/\n\n/* Major sections */\n.webgl_container {\n  background-color: #fcf8e3;\n  box-sizing: border-box;\n  width: 100%;\n  display: block;\n  margin-bottom: 1em;\n}\n\n.webgl_cmds {\n  box-sizing: border-box;\n  width: 100%;\n  text-align: center;\n  padding: 6px;\n}\n\n.webgl_row2 {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 0px 4px 0px 4px;\n  display: block;\n  height: 550px;\n}\n\n.webgl_editors {\n  box-sizing: border-box;\n  float: left;\n  display: block;\n  visibility: visible;\n  width: 50%;\n}\n\n.webgl_canvas {\n  box-sizing: border-box;\n  float: left;\n  display: block;\n  visibility: visible;\n  font-size: 12px;\n  font-weight: normal;\n  padding-left: 5px;\n  width: 50%;\n}\n\n.webgl_output {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 4px;\n  margin-top: 6px;\n  float: left;\n}\n\n/* Details within each section */\n/* Tabbed titles, ul horizontal list */\n.webgl_nav_tabs {\n  height: 31px;\n  width: 100%;\n  margin: 0px;\n  padding: 6px 0px 0px 0px;\n  background-color: #CFCCB8;\n  border-color: #fbeed5;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  list-style-type: none;\n  overflow: hidden;\n  display: inline-flex;\n}\n\n.webgl_nav_tabs li {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  margin: 0px 0px 0px 4px;\n  padding: 4px 1px 4px 4px;\n  list-style-type: none;\n  position: relative;\n  float: left;\n  background-color: #E6E2CC;\n  font-size: 9pt;\n}\n\n.webgl_nav_tabs li > a {\n  padding: 8px 8px 8px 8px;\n  color: #555;\n  text-decoration: none;\n}\n\n.webgl_nav_tabs > li > a:hover {\n  border-color: #b4b19d;\n  border-bottom-width: 0;\n}\n\n.webgl_nav_tabs li.active {\n  background-color: #ffffff;\n  list-style-type: none;\n  list-style-image: none;\n}\n\n/* Webgl editors */\n.webgl_tab_content {\n  width: 100%;\n  position: absolute;\n  clear: both;\n  margin: 0px 0px 20px 0px;\n  border: 0px;\n  color: #c09853;\n  background-color: #fcf8e3;\n  z-index: 1;\n}\n\n.webgl_tab_content.active {\n  z-index: 2;\n}\n\n.webgl_tab_content > * {\n  margin-left: auto;\n  margin-right: auto;\n  /*\tposition:relative; */\n}\n\n.webgl_tab_content .clearfix {\n  position: initial;\n}\n\n.webgl_tab_editor {\n  width: 100%;\n  position: absolute;\n  clear: both;\n  padding: 10px 4px 10px 4px;\n  margin: 0px 0px 20px 0px;\n  border: 0px;\n  color: #c09853;\n  background-color: #fcf8e3;\n}\n\n/* span that contains the tabbed text editors */\n.webgl_code {\n  width: 100%;\n  float: left;\n}\n\n.webgl_tab_contents_text {\n  width: 100%;\n  position: absolute;\n  clear: both;\n  padding: 10px 4px 10px 4px;\n  margin: 0px 0px 20px 0px;\n  border: 0px;\n  color: #c09853;\n  background-color: #fcf8e3;\n  z-index: 1;\n}\n\n.webgl_errorMessages {\n  color: red;\n}\n\n.webgl_warningMessages {\n  color: rgb(170, 34, 164);\n}\n\n.webgl_infoMessages {\n  color: rgb(24, 144, 64);\n}\n\n.webgl_output_div {\n  width: 100%;\n  margin: 2px;\n  border: 1px solid lightgrey;\n  padding-bottom: 4px;\n  padding-top: 4px;\n  padding-left: 4px;\n  background-color: white;\n  overflow: auto;\n  height: 14em;\n  font-size: 12px;\n  font-weight: normal;\n}\n\n.webgl_editor_highlight {\n  background-color: #EEEEEE; /* very light grey */\n}\n\n/* To always show the scroll bar in a div */\n::-webkit-scrollbar {\n    -webkit-appearance: none;\n    width: 7px;\n}\n::-webkit-scrollbar-thumb {\n    border-radius: 4px;\n    background-color: rgba(0,0,0,.5);\n    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);\n}\n\n.webgl_btn {\n  display: inline-block;\n  padding: 3px 6px;\n  margin-bottom: 0;\n  background-color: thistle;\n  font-size: 12px;\n  font-weight: normal;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n\n.webgl_checkbox {\n}\n\n.webgl_tabbed_editor {\n  width: 100%;\n  resize: none;\n  font-family: monospace, sans-serif;\n  font-size: 9pt;\n  font-style: normal;\n}\n\n.canvas3D {\n  width: 100%;\n  height: 100%;\n}\n\n.CodeMirror.webgl-default {\n  border: 1px solid #eee;\n  font-family: monospace, sans-serif;\n  font-size: 8pt;\n  font-style: normal;\n}\n\nbutton.btn.webgl-default {\n  font-size: 8pt;\n}\n\n\n", "",{"version":3,"sources":["webpack://./runestone/webgldemo/css/webglinteractive.css"],"names":[],"mappings":"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","sourcesContent":["/********************* Colour reference chart****************\nelememt ********* property ********* colour ********\n\nwebgl_container  background-color    #fcf8e3\n\n*/\n\n/* Major sections */\n.webgl_container {\n  background-color: #fcf8e3;\n  box-sizing: border-box;\n  width: 100%;\n  display: block;\n  margin-bottom: 1em;\n}\n\n.webgl_cmds {\n  box-sizing: border-box;\n  width: 100%;\n  text-align: center;\n  padding: 6px;\n}\n\n.webgl_row2 {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 0px 4px 0px 4px;\n  display: block;\n  height: 550px;\n}\n\n.webgl_editors {\n  box-sizing: border-box;\n  float: left;\n  display: block;\n  visibility: visible;\n  width: 50%;\n}\n\n.webgl_canvas {\n  box-sizing: border-box;\n  float: left;\n  display: block;\n  visibility: visible;\n  font-size: 12px;\n  font-weight: normal;\n  padding-left: 5px;\n  width: 50%;\n}\n\n.webgl_output {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 4px;\n  margin-top: 6px;\n  float: left;\n}\n\n/* Details within each section */\n/* Tabbed titles, ul horizontal list */\n.webgl_nav_tabs {\n  height: 31px;\n  width: 100%;\n  margin: 0px;\n  padding: 6px 0px 0px 0px;\n  background-color: #CFCCB8;\n  border-color: #fbeed5;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  list-style-type: none;\n  overflow: hidden;\n  display: inline-flex;\n}\n\n.webgl_nav_tabs li {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  margin: 0px 0px 0px 4px;\n  padding: 4px 1px 4px 4px;\n  list-style-type: none;\n  position: relative;\n  float: left;\n  background-color: #E6E2CC;\n  font-size: 9pt;\n}\n\n.webgl_nav_tabs li > a {\n  padding: 8px 8px 8px 8px;\n  color: #555;\n  text-decoration: none;\n}\n\n.webgl_nav_tabs > li > a:hover {\n  border-color: #b4b19d;\n  border-bottom-width: 0;\n}\n\n.webgl_nav_tabs li.active {\n  background-color: #ffffff;\n  list-style-type: none;\n  list-style-image: none;\n}\n\n/* Webgl editors */\n.webgl_tab_content {\n  width: 100%;\n  position: absolute;\n  clear: both;\n  margin: 0px 0px 20px 0px;\n  border: 0px;\n  color: #c09853;\n  background-color: #fcf8e3;\n  z-index: 1;\n}\n\n.webgl_tab_content.active {\n  z-index: 2;\n}\n\n.webgl_tab_content > * {\n  margin-left: auto;\n  margin-right: auto;\n  /*\tposition:relative; */\n}\n\n.webgl_tab_content .clearfix {\n  position: initial;\n}\n\n.webgl_tab_editor {\n  width: 100%;\n  position: absolute;\n  clear: both;\n  padding: 10px 4px 10px 4px;\n  margin: 0px 0px 20px 0px;\n  border: 0px;\n  color: #c09853;\n  background-color: #fcf8e3;\n}\n\n/* span that contains the tabbed text editors */\n.webgl_code {\n  width: 100%;\n  float: left;\n}\n\n.webgl_tab_contents_text {\n  width: 100%;\n  position: absolute;\n  clear: both;\n  padding: 10px 4px 10px 4px;\n  margin: 0px 0px 20px 0px;\n  border: 0px;\n  color: #c09853;\n  background-color: #fcf8e3;\n  z-index: 1;\n}\n\n.webgl_errorMessages {\n  color: red;\n}\n\n.webgl_warningMessages {\n  color: rgb(170, 34, 164);\n}\n\n.webgl_infoMessages {\n  color: rgb(24, 144, 64);\n}\n\n.webgl_output_div {\n  width: 100%;\n  margin: 2px;\n  border: 1px solid lightgrey;\n  padding-bottom: 4px;\n  padding-top: 4px;\n  padding-left: 4px;\n  background-color: white;\n  overflow: auto;\n  height: 14em;\n  font-size: 12px;\n  font-weight: normal;\n}\n\n.webgl_editor_highlight {\n  background-color: #EEEEEE; /* very light grey */\n}\n\n/* To always show the scroll bar in a div */\n::-webkit-scrollbar {\n    -webkit-appearance: none;\n    width: 7px;\n}\n::-webkit-scrollbar-thumb {\n    border-radius: 4px;\n    background-color: rgba(0,0,0,.5);\n    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);\n}\n\n.webgl_btn {\n  display: inline-block;\n  padding: 3px 6px;\n  margin-bottom: 0;\n  background-color: thistle;\n  font-size: 12px;\n  font-weight: normal;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n\n.webgl_checkbox {\n}\n\n.webgl_tabbed_editor {\n  width: 100%;\n  resize: none;\n  font-family: monospace, sans-serif;\n  font-size: 9pt;\n  font-style: normal;\n}\n\n.canvas3D {\n  width: 100%;\n  height: 100%;\n}\n\n.CodeMirror.webgl-default {\n  border: 1px solid #eee;\n  font-family: monospace, sans-serif;\n  font-size: 8pt;\n  font-style: normal;\n}\n\nbutton.btn.webgl-default {\n  font-size: 8pt;\n}\n\n\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NvbW1vbi9jc3MvcHJlc2VudGVyX21vZGUuY3NzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY29tbW9uL2Nzcy9ydW5lc3RvbmUtY3VzdG9tLXNwaGlueC1ib290c3RyYXAuY3NzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY29tbW9uL2Nzcy91c2VyLWhpZ2hsaWdodHMuY3NzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvbWF0cml4ZXEvY3NzL21hdHJpeGVxLmNzcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3dlYmdsZGVtby9jc3Mvd2ViZ2xpbnRlcmFjdGl2ZS5jc3MiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vY3NzL3ByZXNlbnRlcl9tb2RlLmNzcz83YTg0Iiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY29tbW9uL2Nzcy9ydW5lc3RvbmUtY3VzdG9tLXNwaGlueC1ib290c3RyYXAuY3NzP2QzZTQiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vY3NzL3VzZXItaGlnaGxpZ2h0cy5jc3M/NWIzZCIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL21hdHJpeGVxL2Nzcy9tYXRyaXhlcS5jc3M/MDMxZCIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3dlYmdsZGVtby9jc3Mvd2ViZ2xpbnRlcmFjdGl2ZS5jc3M/MjUwZSIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NvbW1vbi9qcy9ib29rZnVuY3MuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vanMvanF1ZXJ5LmlkbGUtdGltZXIuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vanMvanF1ZXJ5X2kxOG4vanF1ZXJ5LmkxOG4uZW1pdHRlci5iaWRpLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY29tbW9uL2pzL2pxdWVyeV9pMThuL2pxdWVyeS5pMThuLmVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vanMvanF1ZXJ5X2kxOG4vanF1ZXJ5LmkxOG4uZmFsbGJhY2tzLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY29tbW9uL2pzL2pxdWVyeV9pMThuL2pxdWVyeS5pMThuLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY29tbW9uL2pzL2pxdWVyeV9pMThuL2pxdWVyeS5pMThuLmxhbmd1YWdlLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY29tbW9uL2pzL2pxdWVyeV9pMThuL2pxdWVyeS5pMThuLm1lc3NhZ2VzdG9yZS5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NvbW1vbi9qcy9qcXVlcnlfaTE4bi9qcXVlcnkuaTE4bi5wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vanMvcHJlc2VudGVyX21vZGUuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vanMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vanMvdXNlci1oaWdobGlnaHRzLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY29tbW9uL3Byb2plY3RfdGVtcGxhdGUvX3RlbXBsYXRlcy9wbHVnaW5fbGF5b3V0cy9zcGhpbnhfYm9vdHN0cmFwL3N0YXRpYy9ib290c3RyYXAtc3BoaW54LmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi93ZWJwYWNrLmluZGV4LmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxrREFBa0Qsa0JBQWtCLEdBQUcsaUJBQWlCLG9CQUFvQixHQUFHLGtDQUFrQyxrQkFBa0IsR0FBRyxxRkFBcUYscUJBQXFCLEdBQUcsYUFBYSxvQkFBb0IsR0FBRyxpQkFBaUIsb0JBQW9CLEdBQUcsWUFBWSx5QkFBeUIsZ0JBQWdCLEdBQUcsb0JBQW9CLDBCQUEwQixHQUFHLHFDQUFxQyxjQUFjLEtBQUssNkNBQTZDLHVCQUF1QixHQUFHLGdCQUFnQiw2QkFBNkIsR0FBRyxxQkFBcUIsZ0JBQWdCLEdBQUcsd0JBQXdCLGtDQUFrQyxHQUFHLDZFQUE2RSxZQUFZLEdBQUcseUJBQXlCLGtCQUFrQixHQUFHLGtDQUFrQyxtQkFBbUIsR0FBRyxzQ0FBc0MsZ0JBQWdCLG9CQUFvQixHQUFHLGtCQUFrQix1QkFBdUIsR0FBRyxpQkFBaUIsdUJBQXVCLEdBQUcsb0JBQW9CLG1CQUFtQixHQUFHLHFHQUFxRyxrQkFBa0IsR0FBRyxxQkFBcUIsWUFBWSxHQUFHLHVCQUF1QixZQUFZLEdBQUcsd0JBQXdCLFlBQVksR0FBRyx1QkFBdUIsWUFBWSxHQUFHLGtCQUFrQiw2QkFBNkIsbUJBQW1CLGVBQWUsR0FBRyxlQUFlLDBCQUEwQixHQUFHLHVDQUF1Qyx1QkFBdUIsR0FBRyw4Q0FBOEMsZ0JBQWdCLEdBQUcsK0JBQStCLHFCQUFxQixHQUFHLGNBQWMsa0JBQWtCLHVCQUF1QixHQUFHLHdCQUF3QixtQkFBbUIscUJBQXFCLEdBQUcsaURBQWlELGdCQUFnQixtQkFBbUIsZ0JBQWdCLG9CQUFvQixHQUFHLDJCQUEyQix1QkFBdUIsR0FBRyxtQkFBbUIsb0JBQW9CLEdBQUcsZUFBZSxtQkFBbUIsb0JBQW9CLEdBQUcsb0JBQW9CLGtDQUFrQyxxQkFBcUIsR0FBRyxnQkFBZ0IsY0FBYyxvQkFBb0IsdUJBQXVCLHFCQUFxQixHQUFHLHFEQUFxRCxtQkFBbUIsY0FBYyxHQUFHLDJCQUEyQixrQkFBa0Isd0JBQXdCLDhCQUE4QixHQUFHLGlCQUFpQiw4QkFBOEIsOEJBQThCLHVCQUF1QixvQkFBb0Isa0JBQWtCLDRCQUE0Qix3QkFBd0Isb0JBQW9CLDZCQUE2QixHQUFHLGtEQUFrRCw4QkFBOEIsa0JBQWtCLEdBQUcsMEJBQTBCLG1CQUFtQixzQkFBc0Isb0JBQW9CLEdBQUcscUNBQXFDLGVBQWUsY0FBYywwQkFBMEIsc0JBQXNCLDBCQUEwQixHQUFHLHNCQUFzQixzQkFBc0IsR0FBRyx1QkFBdUIscUJBQXFCLGVBQWUsMEJBQTBCLG9CQUFvQix3QkFBd0IscUJBQXFCLEdBQUcsZ0JBQWdCLHNCQUFzQiwyQkFBMkIsdUJBQXVCLGdCQUFnQixzQkFBc0IsbUJBQW1CLEdBQUcsb0JBQW9CLHdCQUF3Qix1QkFBdUIscUJBQXFCLG1DQUFtQyxHQUFHLHVCQUF1QiwyQkFBMkIsZ0JBQWdCLHNCQUFzQixHQUFHLHFCQUFxQiwyQkFBMkIsaUJBQWlCLHFCQUFxQixHQUFHLGdDQUFnQyxvQkFBb0IsR0FBRyx1QkFBdUIsZ0JBQWdCLEdBQUcsa0JBQWtCLHdCQUF3QixNQUFNLHlGQUF5RixrQkFBa0IsR0FBRyxpQ0FBaUMsdUJBQXVCLEdBQUcsNkNBQTZDLFdBQVcsRUFBRSw2Q0FBNkMsWUFBWSxFQUFFLG1CQUFtQiwrQkFBK0IsR0FBRywwQkFBMEIsZUFBZSxHQUFHLFlBQVksMEdBQTBHLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sUUFBUSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxzQkFB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QVksT0FBTyxZQUFZLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxPQUFPLE9BQU8sYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxRQUFRLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sU0FBUyxVQUFVLFlBQVksYUFBYSxPQUFPLFFBQVEsWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxPQUFPLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsYUFBYSxPQUFPLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxhQUFhLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFB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LFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLFlBQVksYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLHdCQUF3QixPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLE1B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Q0E7QUFDQSxlQUFlLG1CQUFtQjtBQUNsQztBQUNBLGFBQWEsTUFBTSxjQUFjLDBCQUEwQixHQUFHLFlBQVk7QUFDMUUsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUN2S0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0EsQ0FBQyxhOzs7Ozs7Ozs7O0FDdlNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7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QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9ELEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM05NO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVB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LEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7Ozs7Ozs7Ozs7O0FDdFREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsOEJBQThCOztBQUVoRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25JRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOzs7QUFHYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ2dDO0FBQ2lCO0FBQ0c7QUFDTTtBQUNhO0FBQ0w7QUFDRTtBQUNHO0FBQ047QUFDRTs7QUFFbkU7QUFDd0M7QUFDRTtBQUN5RTtBQUM3Qzs7QUFFdEU7QUFDNEM7QUFDTTs7QUFFbEQsNkRBQTZEO0FBQ2Q7QUFDUzs7QUFFeEQ7QUFDd0U7QUFDdkI7QUFDRTs7O0FBR25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9uQkFBZ0Q7QUFDdEU7QUFDQSx5QkFBeUIsbVJBQXdEO0FBQ2pGLG9CQUFvQixxVUFBNkM7QUFDakUsb0JBQW9CLDZQQUE2QztBQUNqRSxxQkFBcUIsK1BBQThDO0FBQ25FLDBCQUEwQix1UEFBMEM7QUFDcEUsa0JBQWtCLHFQQUF5QztBQUMzRCxvQkFBb0IsbVdBQWlDO0FBQ3JELDBCQUEwQix5UEFBMkM7QUFDckUsbUJBQW1CLG1RQUFnRDtBQUNuRSxnQkFBZ0IsNk9BQXFDO0FBQ3JELGtCQUFrQixxUEFBeUM7QUFDM0Qsa0JBQWtCLHFQQUF5QztBQUMzRCwwQkFBMEIsMlFBQW9EO0FBQzlFLHVCQUF1QixxUkFBeUQ7QUFDaEYsb0JBQW9CLDRQQUE2QztBQUNqRSx1QkFBdUIsa1hBQW1EO0FBQzFFLHVCQUF1Qix5UUFBbUQ7QUFDMUUsMkJBQTJCLGttQ0FBdUM7QUFDbEUsb0JBQW9CLGdUQUE2QztBQUNqRTtBQUNBLG1CQUFtQix5UEFBMkM7QUFDOUQsbUJBQW1CLG1RQUFnRDtBQUNuRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLE1BQU07QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUF1Qjs7O0FBR3ZCO0FBQ0E7QUFDQSwwRkFBMEY7QUFDMUY7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBUztBQUN4QixpQkFBaUIsdUVBQVc7QUFDNUI7QUFDQTs7Ozs7Ozs7Ozs7O0FDNUpBLHdCIiwiZmlsZSI6InJ1bmVzdG9uZS5idW5kbGUuanM/dj1kYjRiNTdiOGRmNmI5YjhmNDcwYSIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmhpZGRlbntcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi52aWV3LXRvZ2dsZXtcXG4gIHBhZGRpbmc6IDAuODVlbTtcXG59XFxuXFxuLnByZXNlbnRhdGlvbi1tb2RlIC5zZWN0aW9uICp7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJlc2VudGF0aW9uLW1vZGUgLnNlY3Rpb24gLnJ1bmVzdG9uZSwgLnByZXNlbnRhdGlvbi1tb2RlIC5zZWN0aW9uIC5ydW5lc3RvbmUgKntcXG4gIGRpc3BsYXk6IGluaXRpYWw7XFxufVxcblxcbi5wcmVzZW50e1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uZnVsbC1oZWlnaHR7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5ib3R0b217XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbn1cXG5cXG4jY29kZURpc3BsYXlEaXZ7XFxuICB3aWR0aDogYXV0byFpbXBvcnRhbnQ7XFxufVxcblxcbmRpdi5FeGVjdXRpb25WaXN1YWxpemVyICNkYXRhVml6e1xcbiAgbWFyZ2luOiAwOyAgXFxufVxcblxcbmRpdi5FeGVjdXRpb25WaXN1YWxpemVyIGRpdiNzdGFja0hlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNzdGFja0ZyYW1le1xcbiAgZGlzcGxheTogYmxvY2shaW1wb3J0YW50O1xcbn1cXG5cXG4jc3RhY2tIZWFwVGFibGUge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNzdGFja0hlYXBUYWJsZSB0ciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuZGl2LkV4ZWN1dGlvblZpc3VhbGl6ZXIgdGQjc3RhY2tfdGQsIGRpdi5FeGVjdXRpb25WaXN1YWxpemVyIHRkI2hlYXBfdGQge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnByZXNlbnRhdGlvbi10aXRsZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJlc2VudCAucHJlc2VudGF0aW9uLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5kaXYuRXhlY3V0aW9uVmlzdWFsaXplciBkaXYjaGVhcCB7XFxuICBmbG9hdDogbm9uZTtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG59XFxuXFxuI3N0YWNrX3RkIHRyIHtcXG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcXG59XFxuXFxuI2hlYXBfdGQgdHIge1xcbiAgZGlzcGxheTogdGFibGUtcm93O1xcbn1cXG5cXG4jY29kZURpc3BsYXlEaXZ7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLyogIGJubSAtLSBjb21tZW50IHRoaXMgb3V0IGZvciBub3cgYXMgaXQgYnJlYWtzIGNvZGVsZW5zIGluZGVudGF0aW9uIGFuZCBhcnJvd3NcXG4udmlzdWFsaXplciB0cntcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbiovXFxuXFxuI3ZpekxheW91dFRke1xcbiAgZmxleDogMTtcXG59XFxuXFxuI3ZpekxheW91dFRkRmlyc3Qge1xcbiAgZmxleDogMjtcXG59XFxuXFxuI3ZpekxheW91dFRkU2Vjb25kIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbiN2aXpMYXlvdXRUZFRoaXJkIHtcXG4gIGZsZXg6IDI7XFxufVxcblxcbiNwcm9nT3V0cHV0cyB7XFxuICBkaXNwbGF5OiBibG9jayFpbXBvcnRhbnQ7XFxuICBtYXJnaW46IDAgMjBweDtcXG4gIHdpZHRoOiA2MCU7XFxufVxcblxcbiNweVN0ZG91dCB7XFxuICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XFxufVxcblxcbmRpdi5FeGVjdXRpb25WaXN1YWxpemVyICNweVN0ZG91dCB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbmRpdi5FeGVjdXRpb25WaXN1YWxpemVyIHRhYmxlLnZpc3VhbGl6ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcmVzZW50ICN2aXpMYXlvdXRUZFRoaXJke1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmFjLWJsb2Nre1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuLnJvdy1tb2RlIC5hYy1ibG9ja3tcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLnJvdy1tb2RlIC5hY19vdXRwdXQsIC5yb3ctbW9kZSAuYWNfY29kZV9kaXZ7XFxuICBmbG9hdDogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXgtd2lkdGg6IG5vbmU7XFxufVxcblxcbi5yb3ctbW9kZSAuYWNfY29kZV9kaXZ7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi5hY19zZWN0aW9uPioge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWNfb3V0cHV0e1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hY19vdXRwdXQgcHJlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGUhaW1wb3J0YW50O1xcbiAgbWluLWhlaWdodDogNjBweDtcXG59XFxuXFxuLkNvZGVNaXJyb3J7XFxuICBtYXJnaW46IDA7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBtaW4taGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIC5zZWN0aW9uID4gcnVuZXN0b25lOm5vdCguYWNfc2VjdGlvbil7XFxuICBtYXgtd2lkdGg6bm9uZTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnByZXNlbnRhdGlvbi1vcHRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmxheW91dC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRUVENTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNERkQ0QkU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBwYWRkaW5nOiAuMjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwIC41cmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xcbn1cXG5cXG4ubGF5b3V0LWJ0bi5hY3RpdmUtbGF5b3V0LCAubGF5b3V0LWJ0bjpmb2N1cyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjOTc5Nzk3O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnNrZXRjaHBhZC1jb250YWluZXIge1xcbiAgbWluLXdpZHRoOiA1MCU7XFxuICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG59XFxuXFxuLmNhcmQtbW9kZSAuc2tldGNocGFkLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNTAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgLyptYXJnaW46IDAgLTE1cHg7Ki9cXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcblxcbi5yb3ctbW9kZSAuZXJyb3Ige1xcbiAgbWFyZ2luOiAyMHB4IDE1cHg7XFxufVxcblxcbi5jYXJkLW1vZGUgLmVycm9yIHtcXG4gIG1hcmdpbjogMjhweCAwIDA7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIG1hcmdpbi10b3A6IDI4cHg7XFxufVxcblxcbi5za2V0Y2hwYWQge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uYnRuLXByZXNlbnRlciB7XFxuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbjogMS41cmVtIDAgMS41cmVtIDEuNXJlbTtcXG59XFxuXFxuLmJ0bi1ncmV5LW91dGxpbmUge1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gIGNvbG9yOiBncmV5O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbi5idG4tZ3JleS1zb2xpZCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogZ3JleTtcXG59XFxuXFxuYm9keS5wcmVzZW50IC5hY19zZWN0aW9uPioge1xcbiAgbWF4LXdpZHRoOiBub25lO1xcbn1cXG5ib2R5LnByZXNlbnQgaWZyYW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5ib2R5LnByZXNlbnQge1xcbiAgLyogZm9udC1zaXplOiAyLjBlbTsgKi9cXG59XFxuXFxuYm9keS5wcmVzZW50ICNyZWxhdGlvbnMtcHJldiwgYm9keS5wcmVzZW50ICNyZWxhdGlvbnMtbmV4dCwgYm9keS5wcmVzZW50IC5uYXZMaW5rQmcge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYm9keS5wcmVzZW50IC5idG4tcHJlc2VudGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuYm9keS5wcmVzZW50IC5idG4tcHJlc2VudGVyLnByZXYtZXhlcmNpc2UgeyBsZWZ0OiAwcHg7IH1cXG5ib2R5LnByZXNlbnQgLmJ0bi1wcmVzZW50ZXIubmV4dC1leGVyY2lzZSB7IHJpZ2h0OiAwcHg7IH1cXG5cXG4vKiAuY29sLW1kLTEyIHtcXG4gIHdpZHRoOiA1OC4zMzMzMzMzMzMzMzMzMzYlO1xcbn1cXG5cXG4uY2FyZC1tb2RlIC5jb2wtbWQtNyB7XFxuICB3aWR0aDogNTAlO1xcbn0gKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ydW5lc3RvbmUvY29tbW9uL2Nzcy9wcmVzZW50ZXJfbW9kZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7OztDQUlDOztBQUVEO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBLDRDQUE0QyxTQUFTLEVBQUU7QUFDdkQsNENBQTRDLFVBQVUsRUFBRTs7QUFFeEQ7Ozs7OztHQU1HXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oaWRkZW57XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udmlldy10b2dnbGV7XFxuICBwYWRkaW5nOiAwLjg1ZW07XFxufVxcblxcbi5wcmVzZW50YXRpb24tbW9kZSAuc2VjdGlvbiAqe1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByZXNlbnRhdGlvbi1tb2RlIC5zZWN0aW9uIC5ydW5lc3RvbmUsIC5wcmVzZW50YXRpb24tbW9kZSAuc2VjdGlvbiAucnVuZXN0b25lICp7XFxuICBkaXNwbGF5OiBpbml0aWFsO1xcbn1cXG5cXG4ucHJlc2VudHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmZ1bGwtaGVpZ2h0e1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uYm90dG9te1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG59XFxuXFxuI2NvZGVEaXNwbGF5RGl2e1xcbiAgd2lkdGg6IGF1dG8haW1wb3J0YW50O1xcbn1cXG5cXG5kaXYuRXhlY3V0aW9uVmlzdWFsaXplciAjZGF0YVZpentcXG4gIG1hcmdpbjogMDsgIFxcbn1cXG5cXG5kaXYuRXhlY3V0aW9uVmlzdWFsaXplciBkaXYjc3RhY2tIZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jc3RhY2tGcmFtZXtcXG4gIGRpc3BsYXk6IGJsb2NrIWltcG9ydGFudDtcXG59XFxuXFxuI3N0YWNrSGVhcFRhYmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jc3RhY2tIZWFwVGFibGUgdHIge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbmRpdi5FeGVjdXRpb25WaXN1YWxpemVyIHRkI3N0YWNrX3RkLCBkaXYuRXhlY3V0aW9uVmlzdWFsaXplciB0ZCNoZWFwX3RkIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5wcmVzZW50YXRpb24tdGl0bGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByZXNlbnQgLnByZXNlbnRhdGlvbi10aXRsZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuZGl2LkV4ZWN1dGlvblZpc3VhbGl6ZXIgZGl2I2hlYXAge1xcbiAgZmxvYXQ6IG5vbmU7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxufVxcblxcbiNzdGFja190ZCB0ciB7XFxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XFxufVxcblxcbiNoZWFwX3RkIHRyIHtcXG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcXG59XFxuXFxuI2NvZGVEaXNwbGF5RGl2e1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi8qICBibm0gLS0gY29tbWVudCB0aGlzIG91dCBmb3Igbm93IGFzIGl0IGJyZWFrcyBjb2RlbGVucyBpbmRlbnRhdGlvbiBhbmQgYXJyb3dzXFxuLnZpc3VhbGl6ZXIgdHJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4qL1xcblxcbiN2aXpMYXlvdXRUZHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbiN2aXpMYXlvdXRUZEZpcnN0IHtcXG4gIGZsZXg6IDI7XFxufVxcblxcbiN2aXpMYXlvdXRUZFNlY29uZCB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4jdml6TGF5b3V0VGRUaGlyZCB7XFxuICBmbGV4OiAyO1xcbn1cXG5cXG4jcHJvZ091dHB1dHMge1xcbiAgZGlzcGxheTogYmxvY2shaW1wb3J0YW50O1xcbiAgbWFyZ2luOiAwIDIwcHg7XFxuICB3aWR0aDogNjAlO1xcbn1cXG5cXG4jcHlTdGRvdXQge1xcbiAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xcbn1cXG5cXG5kaXYuRXhlY3V0aW9uVmlzdWFsaXplciAjcHlTdGRvdXQge1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG5kaXYuRXhlY3V0aW9uVmlzdWFsaXplciB0YWJsZS52aXN1YWxpemVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJlc2VudCAjdml6TGF5b3V0VGRUaGlyZHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5hYy1ibG9ja3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi5yb3ctbW9kZSAuYWMtYmxvY2t7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5yb3ctbW9kZSAuYWNfb3V0cHV0LCAucm93LW1vZGUgLmFjX2NvZGVfZGl2e1xcbiAgZmxvYXQ6IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiBub25lO1xcbn1cXG5cXG4ucm93LW1vZGUgLmFjX2NvZGVfZGl2e1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4uYWNfc2VjdGlvbj4qIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLmFjX291dHB1dHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWNfb3V0cHV0IHByZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlIWltcG9ydGFudDtcXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5Db2RlTWlycm9ye1xcbiAgbWFyZ2luOiAwO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgbWluLWhlaWdodDogNjBweDtcXG59XFxuXFxuLmNvbnRhaW5lciAuc2VjdGlvbiA+IHJ1bmVzdG9uZTpub3QoLmFjX3NlY3Rpb24pe1xcbiAgbWF4LXdpZHRoOm5vbmU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5wcmVzZW50YXRpb24tb3B0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5sYXlvdXQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkVFRDU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjREZENEJFO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgcGFkZGluZzogLjI1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAuNXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcXG59XFxuXFxuLmxheW91dC1idG4uYWN0aXZlLWxheW91dCwgLmxheW91dC1idG46Zm9jdXMge1xcbiAgYm9yZGVyOiAycHggc29saWQgIzk3OTc5NztcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5za2V0Y2hwYWQtY29udGFpbmVyIHtcXG4gIG1pbi13aWR0aDogNTAlO1xcbiAgbWluLWhlaWdodDogMzAwcHg7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxufVxcblxcbi5jYXJkLW1vZGUgLnNrZXRjaHBhZC1jb250YWluZXIge1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIC8qbWFyZ2luOiAwIC0xNXB4OyovXFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5cXG4ucm93LW1vZGUgLmVycm9yIHtcXG4gIG1hcmdpbjogMjBweCAxNXB4O1xcbn1cXG5cXG4uY2FyZC1tb2RlIC5lcnJvciB7XFxuICBtYXJnaW46IDI4cHggMCAwO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBtYXJnaW4tdG9wOiAyOHB4O1xcbn1cXG5cXG4uc2tldGNocGFkIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMzAwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmJ0bi1wcmVzZW50ZXIge1xcbiAgcGFkZGluZzogLjVyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW46IDEuNXJlbSAwIDEuNXJlbSAxLjVyZW07XFxufVxcblxcbi5idG4tZ3JleS1vdXRsaW5lIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICBjb2xvcjogZ3JleTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4uYnRuLWdyZXktc29saWQge1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IGdyZXk7XFxufVxcblxcbmJvZHkucHJlc2VudCAuYWNfc2VjdGlvbj4qIHtcXG4gIG1heC13aWR0aDogbm9uZTtcXG59XFxuYm9keS5wcmVzZW50IGlmcmFtZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keS5wcmVzZW50IHtcXG4gIC8qIGZvbnQtc2l6ZTogMi4wZW07ICovXFxufVxcblxcbmJvZHkucHJlc2VudCAjcmVsYXRpb25zLXByZXYsIGJvZHkucHJlc2VudCAjcmVsYXRpb25zLW5leHQsIGJvZHkucHJlc2VudCAubmF2TGlua0JnIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmJvZHkucHJlc2VudCAuYnRuLXByZXNlbnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbmJvZHkucHJlc2VudCAuYnRuLXByZXNlbnRlci5wcmV2LWV4ZXJjaXNlIHsgbGVmdDogMHB4OyB9XFxuYm9keS5wcmVzZW50IC5idG4tcHJlc2VudGVyLm5leHQtZXhlcmNpc2UgeyByaWdodDogMHB4OyB9XFxuXFxuLyogLmNvbC1tZC0xMiB7XFxuICB3aWR0aDogNTguMzMzMzMzMzMzMzMzMzM2JTtcXG59XFxuXFxuLmNhcmQtbW9kZSAuY29sLW1kLTcge1xcbiAgd2lkdGg6IDUwJTtcXG59ICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVmFyaWFibGVzIGhvbGRpbmcgdGhlbWUgY29sb3JzICovXFxuOnJvb3Qge1xcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAgIC0tb3V0ZXJCYWNrZ3JvdW5kOiAjZWVlZWVlO1xcbiAgICAtLWxpbmtzOiAjMDY0NWFkO1xcbiAgICAtLWJvZHlGb250OiAjMDAwMDAwO1xcbiAgICAtLXRvb2x0aXA6ICNmZmZmZmY7XFxuICAgIC0tZ3JheVRvV2hpdGU6ICMzMzMzMzM7XFxuICAgIC0tbmF2YmFyOiAjZjhmOGY4O1xcbiAgICAtLW5hdmJhckZvbnQ6ICM3MDcwNzA7XFxuICAgIC0tbmF2YmFyRm9udEhvdmVyOiAjMDAwMDAwO1xcbiAgICAtLWFsZXJ0czogI2Q5ZWRmNztcXG4gICAgLS1jb21wbGV0aW9uQnV0dG9uOiAjZmZhYTJiO1xcbiAgICAtLWNvbXBsZXRpb25CdXR0b25Ib3ZlcjogI2ZmOWYxOTtcXG4gICAgLS1hZG1vbml0aW9uOiAjZmNmOGUzO1xcbiAgICAtLWFkbW9uaXRpb25Cb3JkZXI6ICNmYmVlZDU7XFxuICAgIC0tY29kZUJ1dHRvbnM6ICM0NzQ5NDk7XFxuICAgIC0tY29kZUJ1dHRvbnNCb3JkZXI6ICM0NzQ5NDk7XFxuICAgIC0tZGFuZ2VyQWxlcnRzOiAjZjJkZWRlO1xcbiAgICAtLXN1Y2Nlc3NBbGVydHM6ICNkZmYwZDg7XFxufVxcblxcbltkYXRhLXRoZW1lPVxcXCJkYXJrXFxcIl0ge1xcbiAgICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XFxuICAgIC0tb3V0ZXJCYWNrZ3JvdW5kOiAjM2QzZDNkO1xcbiAgICAtLWxpbmtzOiAjMTE2NWYwO1xcbiAgICAtLWJvZHlGb250OiAjZmZmZmZmO1xcbiAgICAtLXRvb2x0aXA6ICMwMDAwMDA7XFxuICAgIC0tZ3JheVRvV2hpdGU6ICNmZmZmZmY7XFxuICAgIC0tbmF2YmFyOiAjM2QzZDNkO1xcbiAgICAtLW5hdmJhckZvbnQ6ICNmZmZmZmY7XFxuICAgIC0tbmF2YmFyRm9udEhvdmVyOiAjZDZkNmQ2O1xcbiAgICAtLWFsZXJ0czogIzcxNDA4MjtcXG4gICAgLS1jb21wbGV0aW9uQnV0dG9uOiAjNjUwMDg3O1xcbiAgICAtLWNvbXBsZXRpb25CdXR0b25Ib3ZlcjogIzU2MDA3MztcXG4gICAgLS1hZG1vbml0aW9uOiAjM2QzZDNkO1xcbiAgICAtLWFkbW9uaXRpb25Cb3JkZXI6ICMyNjI2MjY7XFxuICAgIC0tY29kZUJ1dHRvbnM6ICMyYzBhYTY7XFxuICAgIC0tY29kZUJ1dHRvbnNCb3JkZXI6ICNmZmZmZmY7XFxuICAgIC0tZGFuZ2VyQWxlcnRzOiAjOGMyNjI2O1xcbiAgICAtLXN1Y2Nlc3NBbGVydHM6ICMyMTczMDA7XFxufVxcblxcbi8qIGN1c3RvbSBtb2RpZmljYXRpb24gb2YgYmFzaWMuY3NzIGZvciBjb2xvci1jb250cmFzdCAoQUEgY29tcGxpYW50KSAqL1xcbnRkLmxpbmVub3MgcHJlIHtcXG4gICAgY29sb3I6ICM2YjZiNmI7XFxufVxcblxcbi8qIGN1c3RvbSBtb2RpZmljYXRpb24gb2YgcHJldHRpZnkuY3NzIGZvciBjb2xvci1jb250cmFzdCAoQUEgY29tcGxpYW50KSAqL1xcbi5zdHIge1xcbiAgICBjb2xvcjogIzAwNmIwMDtcXG59XFxuXFxuLyogY3VzdG9tIG1vZGlmaWNhdGlvbiBvZiBwYXJzb25zLmNzcyBmb3IgY29sb3ItY29udHJhc3QgKEFBIGNvbXBsaWFudCkgKi9cXG4ucGFyc29ucyAuYmxvY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbn1cXG5cXG4vKiBjdXN0b20gbW9kaWZpY2F0aW9uIG9mIHB5Z21lbnRzLmNzcyBmb3IgY29sb3ItY29udHJhc3QgKEFBIGNvbXBsaWFudCkgKi9cXG4uaGlnaGxpZ2h0IC5jMSB7XFxuICAgIGNvbG9yOiAjMzc2QTdCO1xcbn1cXG5cXG4uaGlnaGxpZ2h0IC5ubiB7XFxuICAgIGNvbG9yOiAjMEY2Qzk1O1xcbn1cXG5cXG4uaGlnaGxpZ2h0IC5ncCB7XFxuICAgIGNvbG9yOiAjQTE0QzA4O1xcbn1cXG5cXG4uaGlnaGxpZ2h0IC5zaSB7XFxuICAgIGNvbG9yOiAjM0M3NzNEO1xcbn1cXG5cXG4uaGlnaGxpZ2h0IC5uYyB7XFxuICAgIGNvbG9yOiAjMEI3MTlEO1xcbn1cXG5cXG4vKiBgU2VhcmNoYCBmdW5jdGlvbmFsaXR5J3MgcmVzdWx0IGN1c3RvbSBtb2RpZmljYXRpb24gZm9yIGNvbG9yLWNvbnRyYXN0IChBQSBjb21wbGlhbnQpICovXFxudWwuc2VhcmNoIGxpIGRpdi5jb250ZXh0IHtcXG4gICAgY29sb3I6ICM2YjZiNmI7XFxufVxcblxcbnNwYW4uaGlnaGxpZ2h0ZWQge1xcbiAgICBjb2xvcjogIzRkNGQ0ZDtcXG59XFxuXFxuLyogQWN0aXZlQ29kZSBndXR0ZXIgY3VzdG9tIG1vZGlmaWNhdGlvbiBmb3IgY29sb3ItY29udHJhc3QgKEFBIGNvbXBsaWFudCkgKi9cXG5cXG4uQ29kZU1pcnJvci1saW5lbnVtYmVyIHtcXG4gICAgY29sb3I6ICM2YjZiNmI7XFxufVxcblxcbi5hbGVydC13YXJuaW5nIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRtb25pdGlvbik7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWRtb25pdGlvbkJvcmRlcik7XFxufVxcblxcbi8qIFB5dGhvbiBjb2RlIG91dHB1dCBjdXN0b20gbW9kaWZpY2F0aW9uIGZvciBjb2xvci1jb250cmFzdCAoQUEgY29tcGxpYW50KSAqL1xcbmRpdi5FeGVjdXRpb25WaXN1YWxpemVyIHRhYmxlI3B5Q29kZU91dHB1dCAubGluZU5vIHtcXG4gICAgY29sb3I6ICM2YjZiNmI7XFxufVxcblxcbi8qIFJ1bmVzdG9uZSBjdXN0b20gbW9kaWZpY2F0aW9ucyAqL1xcblxcbmJvZHkge1xcbiAgICBjb3VudGVyLXJlc2V0OiByc2NvbXBvbmVudDtcXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW91dGVyQmFja2dyb3VuZCk7XFxufVxcblxcbnByZSB7XFxuICAgIG1hcmdpbjogMCAwIDFlbTtcXG59XFxuXFxuaDUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbn1cXG5cXG4vKiB0YWJsZS1vZi1jb250ZW50cyByZWxhdGVkIHN0eWxlcyBmb3IgY29sb3ItY29udHJhc3QgKEFBIGNvbXBsaWFudCkgKi9cXG4jdGFibGUtb2YtY29udGVudHMgYSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saW5rcyk7XFxufVxcblxcbiN0YWJsZS1vZi1jb250ZW50cyBhOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWxpbmtzKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiN0YWJsZS1vZi1jb250ZW50cy5zZWN0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4vKiBuYXZiYXItYnJhbmQgY29sb3IgY29udHJhc3QgKEFBIGNvbXBsaWFudCkgKi9cXG4ubmF2YmFyLWRlZmF1bHQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZiYXIpO1xcbn1cXG5cXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXY+bGkge1xcbiAgICBjb2xvcjogdmFyKC0tbmF2YmFyRm9udCk7XFxufVxcblxcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdj5saT5hIHtcXG4gICAgY29sb3I6IHZhcigtLW5hdmJhckZvbnQpO1xcbn1cXG5cXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXY+bGk+YTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1uYXZiYXJGb250SG92ZXIpO1xcbn1cXG5cXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1icmFuZCB7XFxuICAgIGNvbG9yOiB2YXIoLS1uYXZiYXJGb250KTtcXG59XFxuXFxuLyogYWNrbm93bGVkZ2VtZW50IHJlbGF0ZWQgc3R5bGVzIGZvciBjb2xvci1jb250cmFzdCAoQUEgY29tcGxpYW50KSAqL1xcbi50b2N0cmVlLXdyYXBwZXIge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi50b2N0cmVlLXdyYXBwZXIgYSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saW5rcyk7XFxufVxcblxcbi50b2N0cmVlLXdyYXBwZXIgYTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1saW5rcyk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4vKiBpbmRleCBhbmQgc2VhcmNoIHJlbGF0ZWQgc3R5bGVzIGZvciBjb2xvci1jb250cmFzdCAoQUEgY29tcGxpYW50KSAqL1xcbiNpbmRleC1hbmQtc2VhcmNoLnNlY3Rpb24ge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbiNpbmRleC1hbmQtc2VhcmNoLnNlY3Rpb24gYSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saW5rcyk7XFxufVxcblxcbiNpbmRleC1hbmQtc2VhcmNoLnNlY3Rpb24gYTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1saW5rcyk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4vKiBjdXN0b20gc3R5bGUgZm9yIGBhYCB0YWcgZm9yIGNvbG9yLWNvbnRyYXN0IChBQSBjb21wbGlhbnQpICovXFxuXFxuYSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saW5rcyk7XFxufVxcblxcbi8qIG5hdmJhciBhbmQgbWVudSByZWxhdGVkIHN0eWxlcyAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcblxcbiAgICAvKiBSZW1vdmUgdG9wIHBhZGRpbmcgd2hlbiB0b3AgbmF2YmFyIGdvZXMgY29sbGFwc2VkIGluIG5hcnJvdyB2aWV3cG9ydHMgKi9cXG4gICAgYm9keSB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgICAgIG1hcmdpbjogYXV0byBhdXRvIGF1dG8gNXB4O1xcbiAgICB9XFxuXFxuICAgIC5uYXZiYXItZml4ZWQtdG9wIHtcXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgIH1cXG5cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuICAgIC8qIHdoZW4gbmF2YmFyIGlzIGNvbGxhcHNlZCB3ZSBkb24ndCB3YW50IGFueSB2ZXJ0aWNhbCBkaXZpZGVycyB0YWtpbmcgdXAgc3BhY2UgKi9cXG4gICAgLm5hdmJhciAuZGl2aWRlci12ZXJ0aWNhbCB7XFxuICAgICAgICBtYXJnaW46IDAgM3B4O1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjJmMmYyO1xcbiAgICB9XFxufVxcblxcbmRpdi5jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuZGl2LnNlY3Rpb24ge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbn1cXG5cXG4uY29udGFpbmVyIC5zZWN0aW9uPio6bm90KC5zZWN0aW9uKTpub3QoLmFjX3NlY3Rpb24pIHtcXG4gICAgbWF4LXdpZHRoOiA1MDBwdDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLyogVGhpcyBydWxlIGlzIG1lYW50IHRvIG92ZXJyaWRlIHRoZSBiZWhhdmlvciBvZiB0aGVcXG4gICBwcmV2aW91cyBydWxlIHNpbmNlIGl0IGlzIG5vdCBwb3NzaWJsZSB0byBleGNsdWRlXFxuICAgbW9yZSB0aGFuIG9uZSBzZWN0aW9uIGluIHRoZSBub3QoKSBwYXJ0IG9mIHRoZSBydWxlXFxuKi9cXG4uY29udGFpbmVyIC5zZWN0aW9uIGRpdi5mdWxsLXdpZHRoLmNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1heC13aWR0aDogOTAlO1xcbn1cXG5cXG4uY29udGFpbmVyIC5zZWN0aW9uPmltZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uY29udGFpbmVyIC5zZWN0aW9uIC5wYXJzb25zLFxcbi5jb250YWluZXIgLnNlY3Rpb24gLnBhcnNvbnMgLnNvcnRhYmxlLWNvZGUtY29udGFpbmVyLFxcbi5jb250YWluZXIgLnNlY3Rpb24gLmNkX3NlY3Rpb24ge1xcbiAgICBtYXgtd2lkdGg6IG5vbmU7XFxufVxcblxcbi5uYXZiYXI+LmNvbnRhaW5lciAubmF2YmFyLWJyYW5kIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcblxcbi5uYXZiYXI+LmNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmJhcik7XFxufVxcblxcbi5mb290ZXI+LmNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW91dGVyQmFja2dyb3VuZCk7XFxufVxcblxcbi5mb290ZXI+LmNvbnRhaW5lciBwPmEge1xcbiAgICBjb2xvcjogdmFyKC0tbGlua3MpO1xcbn1cXG5cXG4uYnJhbmQtbG9nbyB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MHB4IDQwcHggIWltcG9ydGFudDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG5cXG4uc29jaWFsLW1lbnUge1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxNXB4IDIwcHg7XFxufVxcblxcbi5mYi1saWtlIHtcXG4gICAgbWFyZ2luLXRvcDogN3B4O1xcbn1cXG5cXG4uZmJfaWZyYW1lX3dpZGdldCBzcGFuLFxcbi5mYl9pZnJhbWVfd2lkZ2V0IGlmcmFtZSB7XFxuICAgIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogODJweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4udHdpdHRlci1mb2xsb3ctYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmdpdHRpcCB7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG59XFxuXFxuLmdpdHRpcC1idXR0b24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAtNnB4O1xcbn1cXG5cXG4uZHJvcGRvd24tbWVudT5saT5zcGFuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDNweCAyMHB4O1xcbiAgICBjbGVhcjogYm90aDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheVRvV2hpdGUpO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uZHJvcGRvd24tbWVudT5saT5hIHtcXG4gICAgY29sb3I6IHZhcigtLWdyYXlUb1doaXRlKTtcXG59XFxuXFxuLmxvZ2dlZGludXNlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBlbmQgbmF2YmFyIGFuZCBtZW51IHJlbGF0ZWQgc3R5bGVzICovXFxuXFxuLkNvZGVNaXJyb3Ige1xcbiAgICBtYXJnaW46IDAgMCAxZW0gMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgY2xlYXI6IGJvdGg7XFxufVxcblxcbi5Db2RlTWlycm9yLXNjcm9sbCB7XFxuICAgIC8qIHRoaXMgYWxsb3dzIENNIGVsZW1lbnRzIHRvIGJlIHJlc2l6ZWQgdG8gKGFsbW9zdCkgYW55XFxuICAgICAqIGhlaWdodCB3aGlsZSBzdGlsbCByZWx5aW5nIG9uIG1heC1oZWlnaHQgKHdoaWNoIGtlZXBzXFxuICAgICAqIHRoZSBDTSBlZGl0b3JzIHRvIG5vIG1vcmUgdGhhbiB0aGUgc2l6ZSBuZWVkZWRcXG4gICAgICogdW5sZXNzIHJlc2l6ZWQpICovXFxuICAgIG1heC1oZWlnaHQ6IDYwZW07XFxuICAgIG1pbi13aWR0aDogMzBlbTtcXG59XFxuXFxuLmFjX3NlY3Rpb24gLkNvZGVNaXJyb3IgcHJlIHtcXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAwO1xcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XFxuICAgIC1vLWJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGJvcmRlci13aWR0aDogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC1mYW1pbHk6IE1vbmFjbywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xcbn1cXG5cXG5idXR0b24uYnRuLFxcbmJ0bi5idG4tc20sXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0uYnRuLmJ0bi1zbSxcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXS5idG4uYnRuLXNtIHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uYnRuIHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi5idG4uZGlzYWJsZWQge1xcbiAgICAvKiBuZWVkZWQgaW4gQm9vdHN0cmFwIDMgdG8gYWxsb3cgdG9vbHRpcHMgb24gZGlzYWJsZWQgYnV0dG9ucyAqL1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLmJ0bi1kZWZhdWx0LFxcbi5idG4tZGVmYXVsdC5kaXNhYmxlZCxcXG4uYnRuLWRlZmF1bHRbZGlzYWJsZWRdLFxcbi5idG4tZGVmYXVsdC5kaXNhYmxlZDpob3ZlcixcXG4uYnRuLWRlZmF1bHRbZGlzYWJsZWRdOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvZGVCdXR0b25zKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoY29kZUJ1dHRvbnNCb3JkZXIpO1xcbn1cXG5cXG4uYnRuLWRlZmF1bHQ6aG92ZXIsXFxuLmJ0bi1kZWZhdWx0OmZvY3VzLFxcbi5idG4tZGVmYXVsdDphY3RpdmUsXFxuLmJ0bi1kZWZhdWx0LmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTNjM2M7XFxuICAgIGJvcmRlci1jb2xvcjogIzJlMmYyZjtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4udG9vbHRpcCB7XFxuICAgIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcXG59XFxuXFxuLnRvb2x0aXAuaW4ge1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT04MCk7XFxufVxcblxcbmgyIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmFsZXJ0IGZvcm0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4vKiBkZWZhdWx0IGJvb2tzdHJhcCBhbGVydCBjb2xvciBpcyBoYXJkIHRvIHJlYWQgKGxvdyBjb250cmFzdCkuICovXFxuLmFsZXJ0IHtcXG4gICAgY29sb3I6IHZhcigtLWdyYXlUb1doaXRlKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmFsZXJ0LWluZm8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbGVydHMpO1xcbn1cXG5cXG4uYWxlcnQtZGFuZ2VyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyQWxlcnRzKTtcXG59XFxuXFxuLyogb3ZlcnJpZGUgdGhlIGNvbG9yIHN0eWxlcyBhcHBsaWVkIGJ5IFNrdWxwdCB0byB0aGUgdW5pdHRlc3QgcmVzdWx0cyBkaXZzICovXFxuLnVuaXR0ZXN0LXJlc3VsdHMuYWxlcnQtZGFuZ2VyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyQWxlcnRzKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4udW5pdHRlc3QtcmVzdWx0cy5hbGVydC1zdWNjZXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VjY2Vzc0FsZXJ0cykgIWltcG9ydGFudDtcXG59XFxuXFxuLmFsZXJ0IGxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLyogVGhlc2UgYWRtb25pdGlvbiBzdHlsZXMgc3R5bGVzIGFyZSBjb3BpZWQgZnJvbSB0aGUgQm9vdHN0cmFwIC5hbGVydCBjbGFzc2VzLlxcbiBNb3N0IG9mIHRoZSAhaW1wb3J0YW50IGRlY2xhcmF0aW9ucyBhcmUgdG8gb3ZlcnJpZGUgdGhlIFNwaGlueCBiYXNpYy5jc3Mgc3R5bGVzICovXFxuLmFkbW9uaXRpb24ge1xcbiAgICBwYWRkaW5nOiA4cHggMzVweCA4cHggMTRweCAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZG1vbml0aW9uKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZiZWVkNTtcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi8qIC5hbGVydC1kYW5nZXIgKi9cXG4uYWRtb25pdGlvbi5jYXV0aW9uIHtcXG4gICAgY29sb3I6ICNBMzNGM0U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmRlZGU7XFxuICAgIGJvcmRlci1jb2xvcjogI2VlZDNkNztcXG59XFxuXFxuLyogLmFsZXJ0LWluZm8gKi9cXG4uYWRtb25pdGlvbi50aXAsXFxuLmFkbW9uaXRpb24ubm90ZSB7XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllZGY3O1xcbiAgICBib3JkZXItY29sb3I6ICNiY2U4ZjE7XFxufVxcblxcbi8qIGZyb20gd2ViMnB5LmNzcyAqL1xcbmRpdi5mbGFzaCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHRvcDogNTVweDtcXG4gICAgcmlnaHQ6IDQ1cHg7XFxuICAgIG9wYWNpdHk6IDAuOTU7XFxuICAgIG1hcmdpbjogMCAwIDEwcHggMTBweDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzIyMiwgIzAwMCk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICMyMjIsICMwMDApO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCg5MGRlZywgIzIyMiwgIzAwMCk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsICMyMjIsICMwMDApO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gICAgei1pbmRleDogMjAwMDtcXG59XFxuXFxuLyogU3R5bGVzIGZvciB0aGUgbG9naW4sIHJlZ2lzdHJhdGlvbiwgYW5kIEphbnJhaW4gZm9ybXMgKi9cXG4jd2ViMnB5X3VzZXJfZm9ybSB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbiN3ZWIycHlfdXNlcl9mb3JtIGZvcm0ge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNTBweDtcXG4gICAgcGFkZGluZy10b3A6IDNweDtcXG59XFxuXFxuI3dlYjJweV91c2VyX2Zvcm0gdGQge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG59XFxuXFxuI3dlYjJweV91c2VyX2Zvcm0gdGQudzJwX2Z3IHtcXG4gICAgd2lkdGg6IDI5OXB4O1xcbn1cXG5cXG4jYXV0aC1hY3Rpb25zIHtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuI3NpZ25faW5fdGV4dCB0ZCB7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIGZvbnQtZmFtaWx5OiAnbHVjaWRhIGdyYW5kZScsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxM3B4O1xcbn1cXG5cXG4jYXV0aF91c2VyX3JlbWVtYmVyIHtcXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XFxufVxcblxcbi8qIEVuZCBsb2dpbiwgcmVnaXN0cmF0aW9uLCBKYW5yYWluIHN0eWxlcyAqL1xcblxcbi8qIGVuZC1vZi1jaGFwdGVyIGV4ZXJjaXNlcyBzdHlsZXMgKi9cXG4jZXhlcmNpc2VzPm9sPmxpLFxcbiNwcm9ncmFtbWluZy1leGVyY2lzZXM+b2w+bGkge1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4jZXhlcmNpc2VzPm9sPmxpOm50aC1jaGlsZChldmVuKSxcXG4jcHJvZ3JhbW1pbmctZXhlcmNpc2VzPm9sPmxpOm50aC1jaGlsZChldmVuKSB7XFxuICAgIHBhZGRpbmc6IDEuMmVtIDEuNGVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmFmN2RmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmJlZWQ1O1xcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLyogRW5kIGNoYXB0ZXIgZXhlcmNpc2VzIHN0eWxlcyAqL1xcblxcbi8qIE1vZGFsIGRpYWxvZyBzdHlsZXMgKHNjcmF0Y2ggYWN0aXZlY29kZSwgY29tcGFyZSBtZSwgZXRjKSAqL1xcbi5zY3JhdGNoLWFjLW1vZGFsIHtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLmNvbXBhcmUtbW9kYWwgLnByb2dyZXNzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLmNvbXBhcmUtbWUtcHJvZ3Jlc3Mge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbXBhcmUtbWUtcHJvZ3Jlc3MgLnByb2dyZXNzLWJhcixcXG4udW5pdHRlc3QtcmVzdWx0cy1wcm9ncmVzcyAucHJvZ3Jlc3MtYmFyIHtcXG4gICAgY29sb3I6ICMzMzM7XFxufVxcblxcbi5tb2RhbC1ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxufVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLnVuaXR0ZXN0LXJlc3VsdHMtcHJvZ3Jlc3Mge1xcbiAgICB3aWR0aDogMjUlO1xcbn1cXG5cXG4uY29tcGFyZS1tb2RhbCB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG59XFxuXFxuLmNvbXBhcmUtbW9kYWwgdGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xcbiAgICBib3JkZXItc3BhY2luZzogMTBweCA1cHg7XFxufVxcblxcbi5jb2RlbGVucy1tb2RhbCB7XFxuICAgIC8qIHdlIHNldCBzb21lIGN1c3RvbSBwb3NpdGlvbiBzdHlsZXMgc28gdGhhdCB0aGUgbW9kYWwgZG9lc24ndCBvYnNjdXJlIHRoZSBjb2RlbGVucyB2aXN1YWxpemVyICovXFxuICAgIHRvcDogMjAlO1xcbiAgICByaWdodDogMjAlO1xcbiAgICBsZWZ0OiBhdXRvO1xcbiAgICBib3R0b206IGF1dG87XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcblxcbiAgICAvKiByZW1vdmUgYW55IGN1c3RvbSBwb3NpdGlvbiBzdHlsZXMgd2hlbiB0aGUgc2NyZWVuIGlzIHNtYWxsIChtb2JpbGUgZGV2aWNlcylcXG4gICAgdG8gcHJldmVudCB0aGUgbW9kYWwgZnJvbSBiZWluZyBwYXJ0aWFsbHkgb2ZmIHRoZSBzY3JlZW4gKi9cXG4gICAgLmNvZGVsZW5zLW1vZGFsIHtcXG4gICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xcbiAgICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcXG4gICAgICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgICAgICAgbGVmdDogMCAhaW1wb3J0YW50O1xcbiAgICB9XFxufVxcblxcbi5jb2RlbGVucy1tb2RhbD4ubW9kYWwtZGlhbG9nIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4vKiBFbmQgbW9kYWwgZGlhbG9nIHN0eWxlcyAqL1xcblxcbi5mb290bm90ZS50YWJsZSB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uZm9vdG5vdGUudGFibGUgdGQubGFiZWwge1xcbiAgICBwYWRkaW5nOiAycHggNXB4IDJweCA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWVkZjc7XFxufVxcblxcbi5hYy1jYW52YXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4udmlkZW8tcGxheS1vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0xNTBweDtcXG4gICAgbGVmdDogNDQlO1xcbiAgICBoZWlnaHQ6IDg1cHg7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4udmlkZW9fcG9wdXAgdmlkZW8ge1xcbiAgICB3aWR0aDogNTAwcHQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnVpLXNvcnRhYmxlLWhlbHBlciB7XFxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubmF2TGluayB7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgYm90dG9tOiA2NXB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbi5uYXZMaW5rOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm5hdkxpbmsgYSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxcbiAgICBib3JkZXItc3R5bGU6c29saWQ7IFxcbiAgICBib3JkZXItY29sb3I6bGlnaHRncmV5OyBcXG4gICAgYm9yZGVyLXdpZHRoOjJweDsgXFxuICAgIHdpZHRoOjEwMHB4OyBcXG4gICAgaGVpZ2h0OjUwcHhcXG59XFxuXFxuI3JlbGF0aW9ucy1uZXh0IHtcXG4gICAgcmlnaHQ6IDM1cHg7XFxufVxcblxcbiNyZWxhdGlvbnMtcHJldiB7XFxuICAgIGxlZnQ6IDM1cHg7XFxufVxcblxcbi5uZXh0cHJldi1saXN0IHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIFxcbiAgICAubmF2TGluayB7XFxuICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcXG4gICAgfVxcblxcbiAgICAjcmVsYXRpb25zLW5leHQsXFxuICAgICNyZWxhdGlvbnMtcHJldiB7XFxuICAgICAgICB3aWR0aDogMjUlO1xcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICB9XFxufVxcblxcbi5uYXZMaW5rIGEge1xcbiAgICBjb2xvcjogIzk5OTtcXG59XFxuXFxuI2NvbXBsZXRpb25CdXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDcwcHg7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmJ1dHRvbkFza0NvbXBsZXRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21wbGV0aW9uQnV0dG9uKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21wbGV0aW9uQnV0dG9uSG92ZXIpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmJ1dHRvbkFza0NvbXBsZXRpb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21wbGV0aW9uQnV0dG9uSG92ZXIpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbXBsZXRpb25CdXR0b25Ib3Zlcik7XFxufVxcblxcbi5idXR0b25Db25maXJtQ29tcGxldGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MGQzOTI7XFxuICAgIGJvcmRlci1jb2xvcjogIzNkYzY4MjtcXG5cXG59XFxuXFxuLmJ1dHRvbkNvbmZpcm1Db21wbGV0aW9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkYzY4MjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjM2RjNjgyO1xcbn1cXG5cXG4ubmF2TGlua0JnIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogNTVweDtcXG4gICAgY29sb3I6ICM5OTk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggM3B4IHJnYmEoNTAsIDUwLCA1MCwgMC41KTtcXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDNweCByZ2JhKDUwLCA1MCwgNTAsIDAuNSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IHJnYmEoNTAsIDUwLCA1MCwgMC41KTtcXG59XFxuXFxuLm5hdkxpbmtCZzpob3ZlciB7XFxuICAgIGNvbG9yOiAjOTk5O1xcbn1cXG5cXG4jbmF2TGlua0JnUmlnaHQge1xcbiAgICByaWdodDogLTEwMDBweDtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4IDAgNjVweDtcXG59XFxuXFxuI25hdkxpbmtCZ0xlZnQge1xcbiAgICBsZWZ0OiAtNjVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uYWN0aXZlaHRtbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uY29udGFpbmVyIC5zZWN0aW9uPmRpdi5zaWRlYmFyIHtcXG4gICAgbWFyZ2luOiAwIDAgMC41ZW0gMWVtO1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuYS5kaXNxdXNfdGhyZWFkX2xpbmsge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnJldmVhbF9idXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcblxcbmlmcmFtZVtzZWFtbGVzc10ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5jb250YWluZXIgLnNlY3Rpb24+ZGl2LnNpZGViYXIge1xcbiAgICAgICAgbWFyZ2luOiAwIDNlbSAwLjVlbSAxZW07XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAgIC5jb250YWluZXIgLnNlY3Rpb24+ZGl2LnNpZGViYXIge1xcbiAgICAgICAgbWFyZ2luOiAwIDExZW0gMC41ZW0gMWVtO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgLmNvbnRhaW5lciAuc2VjdGlvbj5kaXYuc2lkZWJhciB7XFxuICAgICAgICBtYXJnaW46IDAgMThlbSAwLjVlbSAxZW07XFxuICAgIH1cXG59XFxuXFxuXFxuZGl2LkV4ZWN1dGlvblZpc3VhbGl6ZXIgdGFibGUudmlzdWFsaXplciB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG5cXG5cXG5cXG4uc2x0b29sdGlwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxMDIwO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xcbiAgICBib3R0b206IDEyMCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMmVtO1xcbn1cXG5cXG4uc2x0b29sdGlwIC5zbHRvb2x0aXAtYXJyb3cge1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XFxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMDAwMDAwO1xcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4uc2x0b29sdGlwLWlubmVyIHtcXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcXG4gICAgcGFkZGluZzogM3B4IDhweDtcXG4gICAgY29sb3I6IHZhcigtLXRvb2x0aXApO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbnVsLmRyb3Bkb3duLW1lbnUuZ2xvYmFsdG9jIHtcXG4gICAgbWF4LWhlaWdodDogNzAwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG5cXG4uZ2xvYmFsdG9jIHNwYW4uY2FwdGlvbi10ZXh0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuXFxuLyogU3R5bGUgbHAgdGV4dGFyZWFzLiAqL1xcbnRleHRhcmVhI2xwLXJlc3VsdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwZW07XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcblxcbi8qXFxuICogSGlkZSBvbmx5IHZpc3VhbGx5LCBidXQgaGF2ZSBpdCBhdmFpbGFibGUgZm9yIHNjcmVlbiByZWFkZXJzOlxcbiAqIGh0dHBzOi8vc25vb2suY2EvYXJjaGl2ZXMvaHRtbF9hbmRfY3NzL2hpZGluZy1jb250ZW50LWZvci1hY2Nlc3NpYmlsaXR5XFxuICpcXG4gKiAxLiBGb3IgbG9uZyBjb250ZW50LCBsaW5lIGZlZWRzIGFyZSBub3QgaW50ZXJwcmV0ZWQgYXMgc3BhY2VzIGFuZCBzbWFsbCB3aWR0aFxcbiAqICAgIGNhdXNlcyBjb250ZW50IHRvIHdyYXAgMSB3b3JkIHBlciBsaW5lOlxcbiAqICAgIGh0dHBzOi8vbWVkaXVtLmNvbS9AamVzc2ViZWFjaC9iZXdhcmUtc211c2hlZC1vZmYtc2NyZWVuLWFjY2Vzc2libGUtdGV4dC01OTUyYTRjMmNiZmVcXG4gKi9cXG5cXG4udmlzdWFsbHloaWRkZW4ge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBtYXJnaW46IC0xcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDFweDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgLyogMSAqL1xcbn1cXG5cXG4vKlxcbiAqIEV4dGVuZHMgdGhlIC52aXN1YWxseWhpZGRlbiBjbGFzcyB0byBhbGxvdyB0aGUgZWxlbWVudFxcbiAqIHRvIGJlIGZvY3VzYWJsZSB3aGVuIG5hdmlnYXRlZCB0byB2aWEgdGhlIGtleWJvYXJkOlxcbiAqIGh0dHBzOi8vd3d3LmRydXBhbC5vcmcvbm9kZS84OTc2MzhcXG4gKi9cXG5cXG4udmlzdWFsbHloaWRkZW4uZm9jdXNhYmxlOmFjdGl2ZSxcXG4udmlzdWFsbHloaWRkZW4uZm9jdXNhYmxlOmZvY3VzIHtcXG4gICAgY2xpcDogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XFxufVxcblxcblxcbi5ibG9ja3F1b3RlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIHBhZGRpbmctbGVmdDogMmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyZW07XFxufVxcblxcblxcbiNzY3Byb2dyZXNzY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuI3N1YmNoYXB0ZXJwcm9ncmVzcz5kaXYge1xcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcXG59XFxuXFxuI3N1YmNoYXB0ZXJwcm9ncmVzcz5kaXYubG9nZ2Vkb3V0IHtcXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xcbn1cXG5cXG4ucnVuZXN0b25lX2NhcHRpb24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ydW5lc3RvbmVfY2FwdGlvbl9kaXZpZCB7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG59XFxuXFxuI3F1ZXN0aW9ucyAucnVuZXN0b25lX2NhcHRpb246YmVmb3JlIHtcXG4gICAgY291bnRlci1pbmNyZW1lbnQ6IHJzY29tcG9uZW50O1xcbiAgICBjb250ZW50OiBcXFwiUHJvYmxlbTogXFxcImNvdW50ZXIocnNjb21wb25lbnQpIFxcXCIgLS0gXFxcIjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGNvbG9yOiB2YXIoLS1ib2R5Rm9udCk7XFxufVxcblxcbi5qdXB5dGVyX2NvbnRhaW5lciAub3V0cHV0ICB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5qdXB5dGVyX2NvbnRhaW5lciAub3V0cHV0IHRkIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG59XFxuXFxuLmp1cHl0ZXJfY29udGFpbmVyIC5vdXRwdXQgdGgge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcbn1cXG5cXG4vKlRoZW1lIHRvZ2dsZSovXFxuLnRoZW1lLXN3aXRjaC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZW0ge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgIH1cXG59XFxuXFxuLnRoZW1lLXN3aXRjaCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgaGVpZ2h0OiAzNHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiA2MHB4O1xcbn1cXG5cXG4udGhlbWUtc3dpdGNoIGlucHV0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNsaWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3R0b206IDRweDtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGhlaWdodDogMjZweDtcXG4gICAgbGVmdDogNHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG4gICAgd2lkdGg6IDI2cHg7XFxufVxcblxcbmlucHV0OmNoZWNrZWQrLnNsaWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NmJiNmE7XFxufVxcblxcbmlucHV0OmNoZWNrZWQrLnNsaWRlcjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxufVxcblxcbi5zbGlkZXIucm91bmQge1xcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbn1cXG5cXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLypFbmQgdGhlbWUgdG9nZ2xlKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ydW5lc3RvbmUvY29tbW9uL2Nzcy9ydW5lc3RvbmUtY3VzdG9tLXNwaGlueC1ib290c3RyYXAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1DQUFtQztBQUNuQztJQUNJLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixnQ0FBZ0M7SUFDaEMscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2Qix3QkFBd0I7QUFDNUI7O0FBRUEsdUVBQXVFO0FBQ3ZFO0lBQ0ksY0FBYztBQUNsQjs7QUFFQSwwRUFBMEU7QUFDMUU7SUFDSSxjQUFjO0FBQ2xCOztBQUVBLHlFQUF5RTtBQUN6RTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQSwwRUFBMEU7QUFDMUU7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQSwwRkFBMEY7QUFD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QUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUEsZUFBZTtBQUNmO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjs7SUFFbkI7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsZUFBZTtJQUNmLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSxtQkFBbUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogVmFyaWFibGVzIGhvbGRpbmcgdGhlbWUgY29sb3JzICovXFxuOnJvb3Qge1xcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAgIC0tb3V0ZXJCYWNrZ3JvdW5kOiAjZWVlZWVlO1xcbiAgICAtLWxpbmtzOiAjMDY0NWFkO1xcbiAgICAtLWJvZHlGb250OiAjMDAwMDAwO1xcbiAgICAtLXRvb2x0aXA6ICNmZmZmZmY7XFxuICAgIC0tZ3JheVRvV2hpdGU6ICMzMzMzMzM7XFxuICAgIC0tbmF2YmFyOiAjZjhmOGY4O1xcbiAgICAtLW5hdmJhckZvbnQ6ICM3MDcwNzA7XFxuICAgIC0tbmF2YmFyRm9udEhvdmVyOiAjMDAwMDAwO1xcbiAgICAtLWFsZXJ0czogI2Q5ZWRmNztcXG4gICAgLS1jb21wbGV0aW9uQnV0dG9uOiAjZmZhYTJiO1xcbiAgICAtLWNvbXBsZXRpb25CdXR0b25Ib3ZlcjogI2ZmOWYxOTtcXG4gICAgLS1hZG1vbml0aW9uOiAjZmNmOGUzO1xcbiAgICAtLWFkbW9uaXRpb25Cb3JkZXI6ICNmYmVlZDU7XFxuICAgIC0tY29kZUJ1dHRvbnM6ICM0NzQ5NDk7XFxuICAgIC0tY29kZUJ1dHRvbnNCb3JkZXI6ICM0NzQ5NDk7XFxuICAgIC0tZGFuZ2VyQWxlcnRzOiAjZjJkZWRlO1xcbiAgICAtLXN1Y2Nlc3NBbGVydHM6ICNkZmYwZDg7XFxufVxcblxcbltkYXRhLXRoZW1lPVxcXCJkYXJrXFxcIl0ge1xcbiAgICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XFxuICAgIC0tb3V0ZXJCYWNrZ3JvdW5kOiAjM2QzZDNkO1xcbiAgICAtLWxpbmtzOiAjMTE2NWYwO1xcbiAgICAtLWJvZHlGb250OiAjZmZmZmZmO1xcbiAgICAtLXRvb2x0aXA6ICMwMDAwMDA7XFxuICAgIC0tZ3JheVRvV2hpdGU6ICNmZmZmZmY7XFxuICAgIC0tbmF2YmFyOiAjM2QzZDNkO1xcbiAgICAtLW5hdmJhckZvbnQ6ICNmZmZmZmY7XFxuICAgIC0tbmF2YmFyRm9udEhvdmVyOiAjZDZkNmQ2O1xcbiAgICAtLWFsZXJ0czogIzcxNDA4MjtcXG4gICAgLS1jb21wbGV0aW9uQnV0dG9uOiAjNjUwMDg3O1xcbiAgICAtLWNvbXBsZXRpb25CdXR0b25Ib3ZlcjogIzU2MDA3MztcXG4gICAgLS1hZG1vbml0aW9uOiAjM2QzZDNkO1xcbiAgICAtLWFkbW9uaXRpb25Cb3JkZXI6ICMyNjI2MjY7XFxuICAgIC0tY29kZUJ1dHRvbnM6ICMyYzBhYTY7XFxuICAgIC0tY29kZUJ1dHRvbnNCb3JkZXI6ICNmZmZmZmY7XFxuICAgIC0tZGFuZ2VyQWxlcnRzOiAjOGMyNjI2O1xcbiAgICAtLXN1Y2Nlc3NBbGVydHM6ICMyMTczMDA7XFxufVxcblxcbi8qIGN1c3RvbSBtb2RpZmljYXRpb24gb2YgYmFzaWMuY3NzIGZvciBjb2xvci1jb250cmFzdCAoQUEgY29tcGxpYW50KSAqL1xcbnRkLmxpbmVub3MgcHJlIHtcXG4gICAgY29sb3I6ICM2YjZiNmI7XFxufVxcblxcbi8qIGN1c3RvbSBtb2RpZmljYXRpb24gb2YgcHJldHRpZnkuY3NzIGZvciBjb2xvci1jb250cmFzdCAoQUEgY29tcGxpYW50KSAqL1xcbi5zdHIge1xcbiAgICBjb2xvcjogIzAwNmIwMDtcXG59XFxuXFxuLyogY3VzdG9tIG1vZGlmaWNhdGlvbiBvZiBwYXJzb25zLmNzcyBmb3IgY29sb3ItY29udHJhc3QgKEFBIGNvbXBsaWFudCkgKi9cXG4ucGFyc29ucyAuYmxvY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbn1cXG5cXG4vKiBjdXN0b20gbW9kaWZpY2F0aW9uIG9mIHB5Z21lbnRzLmNzcyBmb3IgY29sb3ItY29udHJhc3QgKEFBIGNvbXBsaWFudCkgKi9cXG4uaGlnaGxpZ2h0IC5jMSB7XFxuICAgIGNvbG9yOiAjMzc2QTdCO1xcbn1cXG5cXG4uaGlnaGxpZ2h0IC5ubiB7XFxuICAgIGNvbG9yOiAjMEY2Qzk1O1xcbn1cXG5cXG4uaGlnaGxpZ2h0IC5ncCB7XFxuICAgIGNvbG9yOiAjQTE0QzA4O1xcbn1cXG5cXG4uaGlnaGxpZ2h0IC5zaSB7XFxuICAgIGNvbG9yOiAjM0M3NzNEO1xcbn1cXG5cXG4uaGlnaGxpZ2h0IC5uYyB7XFxuICAgIGNvbG9yOiAjMEI3MTlEO1xcbn1cXG5cXG4vKiBgU2VhcmNoYCBmdW5jdGlvbmFsaXR5J3MgcmVzdWx0IGN1c3RvbSBtb2RpZmljYXRpb24gZm9yIGNvbG9yLWNvbnRyYXN0IChBQSBjb21wbGlhbnQpICovXFxudWwuc2VhcmNoIGxpIGRpdi5jb250ZXh0IHtcXG4gICAgY29sb3I6ICM2YjZiNmI7XFxufVxcblxcbnNwYW4uaGlnaGxpZ2h0ZWQge1xcbiAgICBjb2xvcjogIzRkNGQ0ZDtcXG59XFxuXFxuLyogQWN0aXZlQ29kZSBndXR0ZXIgY3VzdG9tIG1vZGlmaWNhdGlvbiBmb3IgY29sb3ItY29udHJhc3QgKEFBIGNvbXBsaWFudCkgKi9cXG5cXG4uQ29kZU1pcnJvci1saW5lbnVtYmVyIHtcXG4gICAgY29sb3I6ICM2YjZiNmI7XFxufVxcblxcbi5hbGVydC13YXJuaW5nIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRtb25pdGlvbik7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWRtb25pdGlvbkJvcmRlcik7XFxufVxcblxcbi8qIFB5dGhvbiBjb2RlIG91dHB1dCBjdXN0b20gbW9kaWZpY2F0aW9uIGZvciBjb2xvci1jb250cmFzdCAoQUEgY29tcGxpYW50KSAqL1xcbmRpdi5FeGVjdXRpb25WaXN1YWxpemVyIHRhYmxlI3B5Q29kZU91dHB1dCAubGluZU5vIHtcXG4gICAgY29sb3I6ICM2YjZiNmI7XFxufVxcblxcbi8qIFJ1bmVzdG9uZSBjdXN0b20gbW9kaWZpY2F0aW9ucyAqL1xcblxcbmJvZHkge1xcbiAgICBjb3VudGVyLXJlc2V0OiByc2NvbXBvbmVudDtcXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW91dGVyQmFja2dyb3VuZCk7XFxufVxcblxcbnByZSB7XFxuICAgIG1hcmdpbjogMCAwIDFlbTtcXG59XFxuXFxuaDUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbn1cXG5cXG4vKiB0YWJsZS1vZi1jb250ZW50cyByZWxhdGVkIHN0eWxlcyBmb3IgY29sb3ItY29udHJhc3QgKEFBIGNvbXBsaWFudCkgKi9cXG4jdGFibGUtb2YtY29udGVudHMgYSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saW5rcyk7XFxufVxcblxcbiN0YWJsZS1vZi1jb250ZW50cyBhOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWxpbmtzKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiN0YWJsZS1vZi1jb250ZW50cy5zZWN0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4vKiBuYXZiYXItYnJhbmQgY29sb3IgY29udHJhc3QgKEFBIGNvbXBsaWFudCkgKi9cXG4ubmF2YmFyLWRlZmF1bHQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZiYXIpO1xcbn1cXG5cXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXY+bGkge1xcbiAgICBjb2xvcjogdmFyKC0tbmF2YmFyRm9udCk7XFxufVxcblxcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdj5saT5hIHtcXG4gICAgY29sb3I6IHZhcigtLW5hdmJhckZvbnQpO1xcbn1cXG5cXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXY+bGk+YTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1uYXZiYXJGb250SG92ZXIpO1xcbn1cXG5cXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1icmFuZCB7XFxuICAgIGNvbG9yOiB2YXIoLS1uYXZiYXJGb250KTtcXG59XFxuXFxuLyogYWNrbm93bGVkZ2VtZW50IHJlbGF0ZWQgc3R5bGVzIGZvciBjb2xvci1jb250cmFzdCAoQUEgY29tcGxpYW50KSAqL1xcbi50b2N0cmVlLXdyYXBwZXIge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi50b2N0cmVlLXdyYXBwZXIgYSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saW5rcyk7XFxufVxcblxcbi50b2N0cmVlLXdyYXBwZXIgYTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1saW5rcyk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4vKiBpbmRleCBhbmQgc2VhcmNoIHJlbGF0ZWQgc3R5bGVzIGZvciBjb2xvci1jb250cmFzdCAoQUEgY29tcGxpYW50KSAqL1xcbiNpbmRleC1hbmQtc2VhcmNoLnNlY3Rpb24ge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbiNpbmRleC1hbmQtc2VhcmNoLnNlY3Rpb24gYSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saW5rcyk7XFxufVxcblxcbiNpbmRleC1hbmQtc2VhcmNoLnNlY3Rpb24gYTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1saW5rcyk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4vKiBjdXN0b20gc3R5bGUgZm9yIGBhYCB0YWcgZm9yIGNvbG9yLWNvbnRyYXN0IChBQSBjb21wbGlhbnQpICovXFxuXFxuYSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saW5rcyk7XFxufVxcblxcbi8qIG5hdmJhciBhbmQgbWVudSByZWxhdGVkIHN0eWxlcyAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcblxcbiAgICAvKiBSZW1vdmUgdG9wIHBhZGRpbmcgd2hlbiB0b3AgbmF2YmFyIGdvZXMgY29sbGFwc2VkIGluIG5hcnJvdyB2aWV3cG9ydHMgKi9cXG4gICAgYm9keSB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgICAgIG1hcmdpbjogYXV0byBhdXRvIGF1dG8gNXB4O1xcbiAgICB9XFxuXFxuICAgIC5uYXZiYXItZml4ZWQtdG9wIHtcXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgIH1cXG5cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuICAgIC8qIHdoZW4gbmF2YmFyIGlzIGNvbGxhcHNlZCB3ZSBkb24ndCB3YW50IGFueSB2ZXJ0aWNhbCBkaXZpZGVycyB0YWtpbmcgdXAgc3BhY2UgKi9cXG4gICAgLm5hdmJhciAuZGl2aWRlci12ZXJ0aWNhbCB7XFxuICAgICAgICBtYXJnaW46IDAgM3B4O1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjJmMmYyO1xcbiAgICB9XFxufVxcblxcbmRpdi5jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuZGl2LnNlY3Rpb24ge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbn1cXG5cXG4uY29udGFpbmVyIC5zZWN0aW9uPio6bm90KC5zZWN0aW9uKTpub3QoLmFjX3NlY3Rpb24pIHtcXG4gICAgbWF4LXdpZHRoOiA1MDBwdDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLyogVGhpcyBydWxlIGlzIG1lYW50IHRvIG92ZXJyaWRlIHRoZSBiZWhhdmlvciBvZiB0aGVcXG4gICBwcmV2aW91cyBydWxlIHNpbmNlIGl0IGlzIG5vdCBwb3NzaWJsZSB0byBleGNsdWRlXFxuICAgbW9yZSB0aGFuIG9uZSBzZWN0aW9uIGluIHRoZSBub3QoKSBwYXJ0IG9mIHRoZSBydWxlXFxuKi9cXG4uY29udGFpbmVyIC5zZWN0aW9uIGRpdi5mdWxsLXdpZHRoLmNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1heC13aWR0aDogOTAlO1xcbn1cXG5cXG4uY29udGFpbmVyIC5zZWN0aW9uPmltZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uY29udGFpbmVyIC5zZWN0aW9uIC5wYXJzb25zLFxcbi5jb250YWluZXIgLnNlY3Rpb24gLnBhcnNvbnMgLnNvcnRhYmxlLWNvZGUtY29udGFpbmVyLFxcbi5jb250YWluZXIgLnNlY3Rpb24gLmNkX3NlY3Rpb24ge1xcbiAgICBtYXgtd2lkdGg6IG5vbmU7XFxufVxcblxcbi5uYXZiYXI+LmNvbnRhaW5lciAubmF2YmFyLWJyYW5kIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcblxcbi5uYXZiYXI+LmNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmJhcik7XFxufVxcblxcbi5mb290ZXI+LmNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW91dGVyQmFja2dyb3VuZCk7XFxufVxcblxcbi5mb290ZXI+LmNvbnRhaW5lciBwPmEge1xcbiAgICBjb2xvcjogdmFyKC0tbGlua3MpO1xcbn1cXG5cXG4uYnJhbmQtbG9nbyB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MHB4IDQwcHggIWltcG9ydGFudDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG5cXG4uc29jaWFsLW1lbnUge1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxNXB4IDIwcHg7XFxufVxcblxcbi5mYi1saWtlIHtcXG4gICAgbWFyZ2luLXRvcDogN3B4O1xcbn1cXG5cXG4uZmJfaWZyYW1lX3dpZGdldCBzcGFuLFxcbi5mYl9pZnJhbWVfd2lkZ2V0IGlmcmFtZSB7XFxuICAgIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogODJweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4udHdpdHRlci1mb2xsb3ctYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmdpdHRpcCB7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG59XFxuXFxuLmdpdHRpcC1idXR0b24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAtNnB4O1xcbn1cXG5cXG4uZHJvcGRvd24tbWVudT5saT5zcGFuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDNweCAyMHB4O1xcbiAgICBjbGVhcjogYm90aDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheVRvV2hpdGUpO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uZHJvcGRvd24tbWVudT5saT5hIHtcXG4gICAgY29sb3I6IHZhcigtLWdyYXlUb1doaXRlKTtcXG59XFxuXFxuLmxvZ2dlZGludXNlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBlbmQgbmF2YmFyIGFuZCBtZW51IHJlbGF0ZWQgc3R5bGVzICovXFxuXFxuLkNvZGVNaXJyb3Ige1xcbiAgICBtYXJnaW46IDAgMCAxZW0gMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgY2xlYXI6IGJvdGg7XFxufVxcblxcbi5Db2RlTWlycm9yLXNjcm9sbCB7XFxuICAgIC8qIHRoaXMgYWxsb3dzIENNIGVsZW1lbnRzIHRvIGJlIHJlc2l6ZWQgdG8gKGFsbW9zdCkgYW55XFxuICAgICAqIGhlaWdodCB3aGlsZSBzdGlsbCByZWx5aW5nIG9uIG1heC1oZWlnaHQgKHdoaWNoIGtlZXBzXFxuICAgICAqIHRoZSBDTSBlZGl0b3JzIHRvIG5vIG1vcmUgdGhhbiB0aGUgc2l6ZSBuZWVkZWRcXG4gICAgICogdW5sZXNzIHJlc2l6ZWQpICovXFxuICAgIG1heC1oZWlnaHQ6IDYwZW07XFxuICAgIG1pbi13aWR0aDogMzBlbTtcXG59XFxuXFxuLmFjX3NlY3Rpb24gLkNvZGVNaXJyb3IgcHJlIHtcXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAwO1xcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XFxuICAgIC1vLWJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGJvcmRlci13aWR0aDogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC1mYW1pbHk6IE1vbmFjbywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xcbn1cXG5cXG5idXR0b24uYnRuLFxcbmJ0bi5idG4tc20sXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0uYnRuLmJ0bi1zbSxcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXS5idG4uYnRuLXNtIHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uYnRuIHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi5idG4uZGlzYWJsZWQge1xcbiAgICAvKiBuZWVkZWQgaW4gQm9vdHN0cmFwIDMgdG8gYWxsb3cgdG9vbHRpcHMgb24gZGlzYWJsZWQgYnV0dG9ucyAqL1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLmJ0bi1kZWZhdWx0LFxcbi5idG4tZGVmYXVsdC5kaXNhYmxlZCxcXG4uYnRuLWRlZmF1bHRbZGlzYWJsZWRdLFxcbi5idG4tZGVmYXVsdC5kaXNhYmxlZDpob3ZlcixcXG4uYnRuLWRlZmF1bHRbZGlzYWJsZWRdOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvZGVCdXR0b25zKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoY29kZUJ1dHRvbnNCb3JkZXIpO1xcbn1cXG5cXG4uYnRuLWRlZmF1bHQ6aG92ZXIsXFxuLmJ0bi1kZWZhdWx0OmZvY3VzLFxcbi5idG4tZGVmYXVsdDphY3RpdmUsXFxuLmJ0bi1kZWZhdWx0LmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTNjM2M7XFxuICAgIGJvcmRlci1jb2xvcjogIzJlMmYyZjtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4udG9vbHRpcCB7XFxuICAgIHotaW5kZXg6IDIwMDAgIWltcG9ydGFudDtcXG59XFxuXFxuLnRvb2x0aXAuaW4ge1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT04MCk7XFxufVxcblxcbmgyIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmFsZXJ0IGZvcm0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4vKiBkZWZhdWx0IGJvb2tzdHJhcCBhbGVydCBjb2xvciBpcyBoYXJkIHRvIHJlYWQgKGxvdyBjb250cmFzdCkuICovXFxuLmFsZXJ0IHtcXG4gICAgY29sb3I6IHZhcigtLWdyYXlUb1doaXRlKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmFsZXJ0LWluZm8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbGVydHMpO1xcbn1cXG5cXG4uYWxlcnQtZGFuZ2VyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyQWxlcnRzKTtcXG59XFxuXFxuLyogb3ZlcnJpZGUgdGhlIGNvbG9yIHN0eWxlcyBhcHBsaWVkIGJ5IFNrdWxwdCB0byB0aGUgdW5pdHRlc3QgcmVzdWx0cyBkaXZzICovXFxuLnVuaXR0ZXN0LXJlc3VsdHMuYWxlcnQtZGFuZ2VyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyQWxlcnRzKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4udW5pdHRlc3QtcmVzdWx0cy5hbGVydC1zdWNjZXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VjY2Vzc0FsZXJ0cykgIWltcG9ydGFudDtcXG59XFxuXFxuLmFsZXJ0IGxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLyogVGhlc2UgYWRtb25pdGlvbiBzdHlsZXMgc3R5bGVzIGFyZSBjb3BpZWQgZnJvbSB0aGUgQm9vdHN0cmFwIC5hbGVydCBjbGFzc2VzLlxcbiBNb3N0IG9mIHRoZSAhaW1wb3J0YW50IGRlY2xhcmF0aW9ucyBhcmUgdG8gb3ZlcnJpZGUgdGhlIFNwaGlueCBiYXNpYy5jc3Mgc3R5bGVzICovXFxuLmFkbW9uaXRpb24ge1xcbiAgICBwYWRkaW5nOiA4cHggMzVweCA4cHggMTRweCAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZG1vbml0aW9uKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZiZWVkNTtcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi8qIC5hbGVydC1kYW5nZXIgKi9cXG4uYWRtb25pdGlvbi5jYXV0aW9uIHtcXG4gICAgY29sb3I6ICNBMzNGM0U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmRlZGU7XFxuICAgIGJvcmRlci1jb2xvcjogI2VlZDNkNztcXG59XFxuXFxuLyogLmFsZXJ0LWluZm8gKi9cXG4uYWRtb25pdGlvbi50aXAsXFxuLmFkbW9uaXRpb24ubm90ZSB7XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllZGY3O1xcbiAgICBib3JkZXItY29sb3I6ICNiY2U4ZjE7XFxufVxcblxcbi8qIGZyb20gd2ViMnB5LmNzcyAqL1xcbmRpdi5mbGFzaCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHRvcDogNTVweDtcXG4gICAgcmlnaHQ6IDQ1cHg7XFxuICAgIG9wYWNpdHk6IDAuOTU7XFxuICAgIG1hcmdpbjogMCAwIDEwcHggMTBweDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzIyMiwgIzAwMCk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICMyMjIsICMwMDApO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCg5MGRlZywgIzIyMiwgIzAwMCk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsICMyMjIsICMwMDApO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gICAgei1pbmRleDogMjAwMDtcXG59XFxuXFxuLyogU3R5bGVzIGZvciB0aGUgbG9naW4sIHJlZ2lzdHJhdGlvbiwgYW5kIEphbnJhaW4gZm9ybXMgKi9cXG4jd2ViMnB5X3VzZXJfZm9ybSB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbiN3ZWIycHlfdXNlcl9mb3JtIGZvcm0ge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNTBweDtcXG4gICAgcGFkZGluZy10b3A6IDNweDtcXG59XFxuXFxuI3dlYjJweV91c2VyX2Zvcm0gdGQge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG59XFxuXFxuI3dlYjJweV91c2VyX2Zvcm0gdGQudzJwX2Z3IHtcXG4gICAgd2lkdGg6IDI5OXB4O1xcbn1cXG5cXG4jYXV0aC1hY3Rpb25zIHtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuI3NpZ25faW5fdGV4dCB0ZCB7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIGZvbnQtZmFtaWx5OiAnbHVjaWRhIGdyYW5kZScsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxM3B4O1xcbn1cXG5cXG4jYXV0aF91c2VyX3JlbWVtYmVyIHtcXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XFxufVxcblxcbi8qIEVuZCBsb2dpbiwgcmVnaXN0cmF0aW9uLCBKYW5yYWluIHN0eWxlcyAqL1xcblxcbi8qIGVuZC1vZi1jaGFwdGVyIGV4ZXJjaXNlcyBzdHlsZXMgKi9cXG4jZXhlcmNpc2VzPm9sPmxpLFxcbiNwcm9ncmFtbWluZy1leGVyY2lzZXM+b2w+bGkge1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4jZXhlcmNpc2VzPm9sPmxpOm50aC1jaGlsZChldmVuKSxcXG4jcHJvZ3JhbW1pbmctZXhlcmNpc2VzPm9sPmxpOm50aC1jaGlsZChldmVuKSB7XFxuICAgIHBhZGRpbmc6IDEuMmVtIDEuNGVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmFmN2RmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmJlZWQ1O1xcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLyogRW5kIGNoYXB0ZXIgZXhlcmNpc2VzIHN0eWxlcyAqL1xcblxcbi8qIE1vZGFsIGRpYWxvZyBzdHlsZXMgKHNjcmF0Y2ggYWN0aXZlY29kZSwgY29tcGFyZSBtZSwgZXRjKSAqL1xcbi5zY3JhdGNoLWFjLW1vZGFsIHtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLmNvbXBhcmUtbW9kYWwgLnByb2dyZXNzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLmNvbXBhcmUtbWUtcHJvZ3Jlc3Mge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbXBhcmUtbWUtcHJvZ3Jlc3MgLnByb2dyZXNzLWJhcixcXG4udW5pdHRlc3QtcmVzdWx0cy1wcm9ncmVzcyAucHJvZ3Jlc3MtYmFyIHtcXG4gICAgY29sb3I6ICMzMzM7XFxufVxcblxcbi5tb2RhbC1ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxufVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLnVuaXR0ZXN0LXJlc3VsdHMtcHJvZ3Jlc3Mge1xcbiAgICB3aWR0aDogMjUlO1xcbn1cXG5cXG4uY29tcGFyZS1tb2RhbCB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG59XFxuXFxuLmNvbXBhcmUtbW9kYWwgdGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xcbiAgICBib3JkZXItc3BhY2luZzogMTBweCA1cHg7XFxufVxcblxcbi5jb2RlbGVucy1tb2RhbCB7XFxuICAgIC8qIHdlIHNldCBzb21lIGN1c3RvbSBwb3NpdGlvbiBzdHlsZXMgc28gdGhhdCB0aGUgbW9kYWwgZG9lc24ndCBvYnNjdXJlIHRoZSBjb2RlbGVucyB2aXN1YWxpemVyICovXFxuICAgIHRvcDogMjAlO1xcbiAgICByaWdodDogMjAlO1xcbiAgICBsZWZ0OiBhdXRvO1xcbiAgICBib3R0b206IGF1dG87XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcblxcbiAgICAvKiByZW1vdmUgYW55IGN1c3RvbSBwb3NpdGlvbiBzdHlsZXMgd2hlbiB0aGUgc2NyZWVuIGlzIHNtYWxsIChtb2JpbGUgZGV2aWNlcylcXG4gICAgdG8gcHJldmVudCB0aGUgbW9kYWwgZnJvbSBiZWluZyBwYXJ0aWFsbHkgb2ZmIHRoZSBzY3JlZW4gKi9cXG4gICAgLmNvZGVsZW5zLW1vZGFsIHtcXG4gICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xcbiAgICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcXG4gICAgICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgICAgICAgbGVmdDogMCAhaW1wb3J0YW50O1xcbiAgICB9XFxufVxcblxcbi5jb2RlbGVucy1tb2RhbD4ubW9kYWwtZGlhbG9nIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4vKiBFbmQgbW9kYWwgZGlhbG9nIHN0eWxlcyAqL1xcblxcbi5mb290bm90ZS50YWJsZSB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uZm9vdG5vdGUudGFibGUgdGQubGFiZWwge1xcbiAgICBwYWRkaW5nOiAycHggNXB4IDJweCA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWVkZjc7XFxufVxcblxcbi5hYy1jYW52YXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4udmlkZW8tcGxheS1vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0xNTBweDtcXG4gICAgbGVmdDogNDQlO1xcbiAgICBoZWlnaHQ6IDg1cHg7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4udmlkZW9fcG9wdXAgdmlkZW8ge1xcbiAgICB3aWR0aDogNTAwcHQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnVpLXNvcnRhYmxlLWhlbHBlciB7XFxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubmF2TGluayB7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgYm90dG9tOiA2NXB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbi5uYXZMaW5rOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm5hdkxpbmsgYSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxcbiAgICBib3JkZXItc3R5bGU6c29saWQ7IFxcbiAgICBib3JkZXItY29sb3I6bGlnaHRncmV5OyBcXG4gICAgYm9yZGVyLXdpZHRoOjJweDsgXFxuICAgIHdpZHRoOjEwMHB4OyBcXG4gICAgaGVpZ2h0OjUwcHhcXG59XFxuXFxuI3JlbGF0aW9ucy1uZXh0IHtcXG4gICAgcmlnaHQ6IDM1cHg7XFxufVxcblxcbiNyZWxhdGlvbnMtcHJldiB7XFxuICAgIGxlZnQ6IDM1cHg7XFxufVxcblxcbi5uZXh0cHJldi1saXN0IHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIFxcbiAgICAubmF2TGluayB7XFxuICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcXG4gICAgfVxcblxcbiAgICAjcmVsYXRpb25zLW5leHQsXFxuICAgICNyZWxhdGlvbnMtcHJldiB7XFxuICAgICAgICB3aWR0aDogMjUlO1xcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICB9XFxufVxcblxcbi5uYXZMaW5rIGEge1xcbiAgICBjb2xvcjogIzk5OTtcXG59XFxuXFxuI2NvbXBsZXRpb25CdXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDcwcHg7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmJ1dHRvbkFza0NvbXBsZXRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21wbGV0aW9uQnV0dG9uKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21wbGV0aW9uQnV0dG9uSG92ZXIpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmJ1dHRvbkFza0NvbXBsZXRpb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb21wbGV0aW9uQnV0dG9uSG92ZXIpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbXBsZXRpb25CdXR0b25Ib3Zlcik7XFxufVxcblxcbi5idXR0b25Db25maXJtQ29tcGxldGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MGQzOTI7XFxuICAgIGJvcmRlci1jb2xvcjogIzNkYzY4MjtcXG5cXG59XFxuXFxuLmJ1dHRvbkNvbmZpcm1Db21wbGV0aW9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkYzY4MjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjM2RjNjgyO1xcbn1cXG5cXG4ubmF2TGlua0JnIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogNTVweDtcXG4gICAgY29sb3I6ICM5OTk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggM3B4IHJnYmEoNTAsIDUwLCA1MCwgMC41KTtcXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDNweCByZ2JhKDUwLCA1MCwgNTAsIDAuNSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IHJnYmEoNTAsIDUwLCA1MCwgMC41KTtcXG59XFxuXFxuLm5hdkxpbmtCZzpob3ZlciB7XFxuICAgIGNvbG9yOiAjOTk5O1xcbn1cXG5cXG4jbmF2TGlua0JnUmlnaHQge1xcbiAgICByaWdodDogLTEwMDBweDtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4IDAgNjVweDtcXG59XFxuXFxuI25hdkxpbmtCZ0xlZnQge1xcbiAgICBsZWZ0OiAtNjVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uYWN0aXZlaHRtbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uY29udGFpbmVyIC5zZWN0aW9uPmRpdi5zaWRlYmFyIHtcXG4gICAgbWFyZ2luOiAwIDAgMC41ZW0gMWVtO1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuYS5kaXNxdXNfdGhyZWFkX2xpbmsge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnJldmVhbF9idXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcblxcbmlmcmFtZVtzZWFtbGVzc10ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5jb250YWluZXIgLnNlY3Rpb24+ZGl2LnNpZGViYXIge1xcbiAgICAgICAgbWFyZ2luOiAwIDNlbSAwLjVlbSAxZW07XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAgIC5jb250YWluZXIgLnNlY3Rpb24+ZGl2LnNpZGViYXIge1xcbiAgICAgICAgbWFyZ2luOiAwIDExZW0gMC41ZW0gMWVtO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgLmNvbnRhaW5lciAuc2VjdGlvbj5kaXYuc2lkZWJhciB7XFxuICAgICAgICBtYXJnaW46IDAgMThlbSAwLjVlbSAxZW07XFxuICAgIH1cXG59XFxuXFxuXFxuZGl2LkV4ZWN1dGlvblZpc3VhbGl6ZXIgdGFibGUudmlzdWFsaXplciB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG5cXG5cXG5cXG4uc2x0b29sdGlwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxMDIwO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xcbiAgICBib3R0b206IDEyMCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMmVtO1xcbn1cXG5cXG4uc2x0b29sdGlwIC5zbHRvb2x0aXAtYXJyb3cge1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XFxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMDAwMDAwO1xcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4uc2x0b29sdGlwLWlubmVyIHtcXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcXG4gICAgcGFkZGluZzogM3B4IDhweDtcXG4gICAgY29sb3I6IHZhcigtLXRvb2x0aXApO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbnVsLmRyb3Bkb3duLW1lbnUuZ2xvYmFsdG9jIHtcXG4gICAgbWF4LWhlaWdodDogNzAwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG5cXG4uZ2xvYmFsdG9jIHNwYW4uY2FwdGlvbi10ZXh0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuXFxuLyogU3R5bGUgbHAgdGV4dGFyZWFzLiAqL1xcbnRleHRhcmVhI2xwLXJlc3VsdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwZW07XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcblxcbi8qXFxuICogSGlkZSBvbmx5IHZpc3VhbGx5LCBidXQgaGF2ZSBpdCBhdmFpbGFibGUgZm9yIHNjcmVlbiByZWFkZXJzOlxcbiAqIGh0dHBzOi8vc25vb2suY2EvYXJjaGl2ZXMvaHRtbF9hbmRfY3NzL2hpZGluZy1jb250ZW50LWZvci1hY2Nlc3NpYmlsaXR5XFxuICpcXG4gKiAxLiBGb3IgbG9uZyBjb250ZW50LCBsaW5lIGZlZWRzIGFyZSBub3QgaW50ZXJwcmV0ZWQgYXMgc3BhY2VzIGFuZCBzbWFsbCB3aWR0aFxcbiAqICAgIGNhdXNlcyBjb250ZW50IHRvIHdyYXAgMSB3b3JkIHBlciBsaW5lOlxcbiAqICAgIGh0dHBzOi8vbWVkaXVtLmNvbS9AamVzc2ViZWFjaC9iZXdhcmUtc211c2hlZC1vZmYtc2NyZWVuLWFjY2Vzc2libGUtdGV4dC01OTUyYTRjMmNiZmVcXG4gKi9cXG5cXG4udmlzdWFsbHloaWRkZW4ge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBtYXJnaW46IC0xcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDFweDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgLyogMSAqL1xcbn1cXG5cXG4vKlxcbiAqIEV4dGVuZHMgdGhlIC52aXN1YWxseWhpZGRlbiBjbGFzcyB0byBhbGxvdyB0aGUgZWxlbWVudFxcbiAqIHRvIGJlIGZvY3VzYWJsZSB3aGVuIG5hdmlnYXRlZCB0byB2aWEgdGhlIGtleWJvYXJkOlxcbiAqIGh0dHBzOi8vd3d3LmRydXBhbC5vcmcvbm9kZS84OTc2MzhcXG4gKi9cXG5cXG4udmlzdWFsbHloaWRkZW4uZm9jdXNhYmxlOmFjdGl2ZSxcXG4udmlzdWFsbHloaWRkZW4uZm9jdXNhYmxlOmZvY3VzIHtcXG4gICAgY2xpcDogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XFxufVxcblxcblxcbi5ibG9ja3F1b3RlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIHBhZGRpbmctbGVmdDogMmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyZW07XFxufVxcblxcblxcbiNzY3Byb2dyZXNzY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuI3N1YmNoYXB0ZXJwcm9ncmVzcz5kaXYge1xcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcXG59XFxuXFxuI3N1YmNoYXB0ZXJwcm9ncmVzcz5kaXYubG9nZ2Vkb3V0IHtcXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xcbn1cXG5cXG4ucnVuZXN0b25lX2NhcHRpb24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ydW5lc3RvbmVfY2FwdGlvbl9kaXZpZCB7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG59XFxuXFxuI3F1ZXN0aW9ucyAucnVuZXN0b25lX2NhcHRpb246YmVmb3JlIHtcXG4gICAgY291bnRlci1pbmNyZW1lbnQ6IHJzY29tcG9uZW50O1xcbiAgICBjb250ZW50OiBcXFwiUHJvYmxlbTogXFxcImNvdW50ZXIocnNjb21wb25lbnQpIFxcXCIgLS0gXFxcIjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGNvbG9yOiB2YXIoLS1ib2R5Rm9udCk7XFxufVxcblxcbi5qdXB5dGVyX2NvbnRhaW5lciAub3V0cHV0ICB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5qdXB5dGVyX2NvbnRhaW5lciAub3V0cHV0IHRkIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG59XFxuXFxuLmp1cHl0ZXJfY29udGFpbmVyIC5vdXRwdXQgdGgge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcbn1cXG5cXG4vKlRoZW1lIHRvZ2dsZSovXFxuLnRoZW1lLXN3aXRjaC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZW0ge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgIH1cXG59XFxuXFxuLnRoZW1lLXN3aXRjaCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgaGVpZ2h0OiAzNHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiA2MHB4O1xcbn1cXG5cXG4udGhlbWUtc3dpdGNoIGlucHV0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNsaWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3R0b206IDRweDtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGhlaWdodDogMjZweDtcXG4gICAgbGVmdDogNHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG4gICAgd2lkdGg6IDI2cHg7XFxufVxcblxcbmlucHV0OmNoZWNrZWQrLnNsaWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NmJiNmE7XFxufVxcblxcbmlucHV0OmNoZWNrZWQrLnNsaWRlcjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxufVxcblxcbi5zbGlkZXIucm91bmQge1xcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbn1cXG5cXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLypFbmQgdGhlbWUgdG9nZ2xlKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuL2NvbXBsZXRlZC5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi9hY3RpdmUucG5nXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFZhcmlhYmxlcyBob2xkaW5nIHRoZW1lIGNvbG9ycyAqL1xcbjpyb290IHtcXG5cXHQtLW1lbnU6ICNGRkZGRkY7XFxufVxcblxcbltkYXRhLXRoZW1lPVxcXCJkYXJrXFxcIl0ge1xcblxcdC0tbWVudTogIzAwMDAwMDtcXG59XFxuXFxuLm15LWhpZ2hsaWdodGVkLXRleHR7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjojRkZGRjk5O1xcbn1cXG4uc29jaWFsLWhpZ2hsaWdodGVkLXRleHR7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjojRkZDQ0NDO1xcbn1cXG4uaGlnaGxpZ2h0LW9wdGlvbi1ib3h7XFxuXFx0cG9zaXRpb246YWJzb2x1dGU7XFxuXFx0dG9wOjBweDtcXG5cXHRsZWZ0OjBweDtcXG59XFxuLmhpZ2hsaWdodC1vcHRpb24tYm94IGxpeyBcXG5cXHRoZWlnaHQ6MjRweDtcXG59XFxuI2NvbnRpbnVlLXJlYWRpbmd7XFxuXFx0cGFkZGluZy10b3A6MjBweDtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG4jY29udGludWUtcmVhZGluZyBhe1xcblxcdGZsb2F0OnJpZ2h0O1xcblxcdG1hcmdpbi1yaWdodDoyMHB4O1xcbn1cXG5saS5jb21wbGV0ZWRcXG57XFxubGlzdC1zdHlsZS1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxubGkuYWN0aXZlXFxue1xcbmxpc3Qtc3R5bGUtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbi5pbmZvVGV4dENvbXBsZXRlZHtcXG5cXHRtYXJnaW4tbGVmdDoxMHB4O1xcblxcdGZvbnQtc2l6ZTowLjllbTtcXG5cXHRjb2xvcjojM2RjNjgyO1xcblxcdGRpc3BsYXk6bm9uZTtcXG5cXHRmb250LXN0eWxlOml0YWxpYztcXG5cXHRvcGFjaXR5OiAwLjc7XFxufVxcbi5pbmZvVGV4dEFjdGl2ZXtcXG5cXHRtYXJnaW4tbGVmdDoxMHB4O1xcblxcdGZvbnQtc2l6ZTowLjllbTtcXG5cXHRjb2xvcjojZmY5ZjE5O1xcblxcdGRpc3BsYXk6bm9uZTtcXG5cXHRmb250LXN0eWxlOml0YWxpYztcXG5cXHRvcGFjaXR5OiAwLjc7XFxufVxcbi5kcm9wZG93bi1tZW51e1xcblxcdGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBsZWZ0OiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lIG91dHNpZGUgbm9uZTtcXG4gICAgbWFyZ2luOiAxcHggMCAwO1xcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xcbiAgICBwYWRkaW5nOiA0cHggMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxufVxcbi5kcm9wZG93bi1tZW51IHVsIHtcXG4gICAgbGlzdC1zdHlsZTogZGlzYyBvdXRzaWRlIG5vbmU7XFxuICAgIG1hcmdpbjogMCAwIDlweCAyNXB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uc2lkZWJhci1oaWdobGlnaHRze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGOTk7XFxufVxcbmRpdi5kb2N1bWVudHdyYXBwZXIge1xcblxcdGJvcmRlciA6IDAgbm9uZTtcXG59XFxuZGl2LmJvZHl3cmFwcGVyIHtcXG5cXHRib3JkZXItcmlnaHQ6IDAgbm9uZTtcXG59XFxuZGl2LnNwaGlueHNpZGViYXIge1xcblxcdGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0NDQ0NDQztcXG5cXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcbi5ib2R5Pi5zZWN0aW9uIC5zZWN0aW9ue1xcblxcdHBhZGRpbmctdG9wOiAxcHg7XFxufVxcbiNqdW1wLXRvLWNoYXB0ZXJ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNWVtO1xcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXG5cXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbiNuYXZpZ2F0aW9uLWxpbmtze1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XFxuXFx0cGFkZGluZzoxMHB4O1xcblxcdG1hcmdpbjoxMHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ydW5lc3RvbmUvY29tbW9uL2Nzcy91c2VyLWhpZ2hsaWdodHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1DQUFtQztBQUNuQztDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0Msd0JBQXdCO0FBQ3pCO0FBQ0E7Q0FDQyx3QkFBd0I7QUFDekI7QUFDQTtDQUNDLGlCQUFpQjtDQUNqQixPQUFPO0NBQ1AsUUFBUTtBQUNUO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixhQUFhO0FBQ2Q7QUFDQTtDQUNDLFdBQVc7Q0FDWCxpQkFBaUI7QUFDbEI7QUFDQTs7QUFFQSx5REFBc0M7QUFDdEM7QUFDQTs7QUFFQSx5REFBbUM7QUFDbkM7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsYUFBYTtDQUNiLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLGFBQWE7Q0FDYixZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLFlBQVk7QUFDYjtBQUNBO0NBQ0MsNEJBQTRCO0lBQ3pCLDZCQUE2QjtJQUM3QixvQ0FBb0M7SUFDcEMsOEJBQThCO0lBQzlCLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2IsV0FBVztJQUNYLE9BQU87SUFDUCw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0Isb0JBQW9CO0lBQ3BCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0NBQ0MsZUFBZTtBQUNoQjtBQUNBO0NBQ0Msb0JBQW9CO0FBQ3JCO0FBQ0E7Q0FDQyw4QkFBOEI7Q0FDOUIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGNBQWM7Q0FDakIsVUFBVTtDQUNWLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLHlCQUF5QjtJQUN0Qix5QkFBeUI7Q0FDNUIsWUFBWTtDQUNaLFdBQVc7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBWYXJpYWJsZXMgaG9sZGluZyB0aGVtZSBjb2xvcnMgKi9cXG46cm9vdCB7XFxuXFx0LS1tZW51OiAjRkZGRkZGO1xcbn1cXG5cXG5bZGF0YS10aGVtZT1cXFwiZGFya1xcXCJdIHtcXG5cXHQtLW1lbnU6ICMwMDAwMDA7XFxufVxcblxcbi5teS1oaWdobGlnaHRlZC10ZXh0e1xcblxcdGJhY2tncm91bmQtY29sb3I6I0ZGRkY5OTtcXG59XFxuLnNvY2lhbC1oaWdobGlnaHRlZC10ZXh0e1xcblxcdGJhY2tncm91bmQtY29sb3I6I0ZGQ0NDQztcXG59XFxuLmhpZ2hsaWdodC1vcHRpb24tYm94e1xcblxcdHBvc2l0aW9uOmFic29sdXRlO1xcblxcdHRvcDowcHg7XFxuXFx0bGVmdDowcHg7XFxufVxcbi5oaWdobGlnaHQtb3B0aW9uLWJveCBsaXsgXFxuXFx0aGVpZ2h0OjI0cHg7XFxufVxcbiNjb250aW51ZS1yZWFkaW5ne1xcblxcdHBhZGRpbmctdG9wOjIwcHg7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuI2NvbnRpbnVlLXJlYWRpbmcgYXtcXG5cXHRmbG9hdDpyaWdodDtcXG5cXHRtYXJnaW4tcmlnaHQ6MjBweDtcXG59XFxubGkuY29tcGxldGVkXFxue1xcbmxpc3Qtc3R5bGUtaW1hZ2U6IHVybCgnY29tcGxldGVkLnBuZycpO1xcbn1cXG5saS5hY3RpdmVcXG57XFxubGlzdC1zdHlsZS1pbWFnZTogdXJsKCdhY3RpdmUucG5nJyk7XFxufVxcbi5pbmZvVGV4dENvbXBsZXRlZHtcXG5cXHRtYXJnaW4tbGVmdDoxMHB4O1xcblxcdGZvbnQtc2l6ZTowLjllbTtcXG5cXHRjb2xvcjojM2RjNjgyO1xcblxcdGRpc3BsYXk6bm9uZTtcXG5cXHRmb250LXN0eWxlOml0YWxpYztcXG5cXHRvcGFjaXR5OiAwLjc7XFxufVxcbi5pbmZvVGV4dEFjdGl2ZXtcXG5cXHRtYXJnaW4tbGVmdDoxMHB4O1xcblxcdGZvbnQtc2l6ZTowLjllbTtcXG5cXHRjb2xvcjojZmY5ZjE5O1xcblxcdGRpc3BsYXk6bm9uZTtcXG5cXHRmb250LXN0eWxlOml0YWxpYztcXG5cXHRvcGFjaXR5OiAwLjc7XFxufVxcbi5kcm9wZG93bi1tZW51e1xcblxcdGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBsZWZ0OiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lIG91dHNpZGUgbm9uZTtcXG4gICAgbWFyZ2luOiAxcHggMCAwO1xcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xcbiAgICBwYWRkaW5nOiA0cHggMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxufVxcbi5kcm9wZG93bi1tZW51IHVsIHtcXG4gICAgbGlzdC1zdHlsZTogZGlzYyBvdXRzaWRlIG5vbmU7XFxuICAgIG1hcmdpbjogMCAwIDlweCAyNXB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uc2lkZWJhci1oaWdobGlnaHRze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGOTk7XFxufVxcbmRpdi5kb2N1bWVudHdyYXBwZXIge1xcblxcdGJvcmRlciA6IDAgbm9uZTtcXG59XFxuZGl2LmJvZHl3cmFwcGVyIHtcXG5cXHRib3JkZXItcmlnaHQ6IDAgbm9uZTtcXG59XFxuZGl2LnNwaGlueHNpZGViYXIge1xcblxcdGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0NDQ0NDQztcXG5cXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcbi5ib2R5Pi5zZWN0aW9uIC5zZWN0aW9ue1xcblxcdHBhZGRpbmctdG9wOiAxcHg7XFxufVxcbiNqdW1wLXRvLWNoYXB0ZXJ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNWVtO1xcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXG5cXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbiNuYXZpZ2F0aW9uLWxpbmtze1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XFxuXFx0cGFkZGluZzoxMHB4O1xcblxcdG1hcmdpbjoxMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWF0cml4ZXFfY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDZweCA2cHggNnB4IDZweDtcXG4gIG1hcmdpbjogMHB4IDBweCA2cHggMHB4O1xcbn1cXG5cXG5zcGFuLm1hdHJpeF90YWJsZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyLXdpZHRoOiAycHggMnB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcHggMXB4O1xcbiAgbWFyZ2luOiAwcHggMHB4IDRweCAwcHg7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuc3Bhbi5tYXRyaXhfY29sdW1uIHtcXG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAycHggOHB4IDJweCA4cHg7XFxuICBtYXJnaW46IDBweCAxcHg7XFxuICBib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG5zcGFuLm1hdHJpeF9jb2x1bW4gZGl2IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAxcHg7XFxuICBwYWRkaW5nOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5zcGFuLm1hdHJpeF90YWJsZSAubWF0cml4X2NvbHVtbiB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbnNwYW4ubWF0cml4X3RhYmxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgd2lkdGg6IDg1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtMnB4O1xcbiAgei1pbmRleDogMTAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDBweCBhdXRvO1xcbn1cXG5cXG5zcGFuLm1hdHJpeF90YWJsZTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgd2lkdGg6IDg1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAycHg7XFxuICB6LWluZGV4OiAxMDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMHB4IGF1dG87XFxufVxcblxcbnNwYW4ubWF0cml4X2NvbHVtbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgd2lkdGg6IDg1JTtcXG4gIGhlaWdodDogMnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtMnB4O1xcbiAgei1pbmRleDogMTAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbnNwYW4ubWF0cml4X2NvbHVtbjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICB3aWR0aDogODUlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDJweDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5zcGFuLm1hdHJpeF90YWJsZSBzcGFuLm1hdHJpeF9jb2x1bW46YmVmb3JlIHtcXG4gIGhlaWdodDogMHB4O1xcbn1cXG5cXG5zcGFuLm1hdHJpeF90YWJsZSBzcGFuLm1hdHJpeF9jb2x1bW46YWZ0ZXIge1xcbiAgaGVpZ2h0OiAwcHg7XFxufVxcblxcbnNwYW4gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5zcGFuLm1hdHJpeF9vcGVyYXRvciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweCA0cHggMHB4IDRweDtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG5zcGFuLm1hdHJpeF9sYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XFxuICBwYWRkaW5nOiAwcHggMHB4IDBweCAyMHB4O1xcbiAgbWFyZ2luOiAwcHggMXB4O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4vKiBDb2xvcnMgZm9yIG1hdHJpeCBoaWdobGlnaHRpbmcgKi9cXG5cXG4ubGlnaHRjeWFuQ29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjeWFuO1xcbn1cXG5cXG4ubGlnaHRncmV5Q29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbn1cXG5cXG4ucHVycGxlQ29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RGQjVFODtcXG59XFxuXFxuLnllbGxvd0NvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGREZGOUQ7XFxufVxcblxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3J1bmVzdG9uZS9tYXRyaXhlcS9jc3MvbWF0cml4ZXEuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBLG1DQUFtQzs7QUFFbkM7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1hdHJpeGVxX2NvbnRhaW5lciB7XFxuICBwYWRkaW5nOiA2cHggNnB4IDZweCA2cHg7XFxuICBtYXJnaW46IDBweCAwcHggNnB4IDBweDtcXG59XFxuXFxuc3Bhbi5tYXRyaXhfdGFibGUge1xcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlci13aWR0aDogMnB4IDJweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMHB4IDFweDtcXG4gIG1hcmdpbjogMHB4IDBweCA0cHggMHB4O1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbnNwYW4ubWF0cml4X2NvbHVtbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgcGFkZGluZzogMnB4IDhweCAycHggOHB4O1xcbiAgbWFyZ2luOiAwcHggMXB4O1xcbiAgYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuc3Bhbi5tYXRyaXhfY29sdW1uIGRpdiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMXB4O1xcbiAgcGFkZGluZzogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuc3Bhbi5tYXRyaXhfdGFibGUgLm1hdHJpeF9jb2x1bW4ge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG5zcGFuLm1hdHJpeF90YWJsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIHdpZHRoOiA4NSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTJweDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwcHggYXV0bztcXG59XFxuXFxuc3Bhbi5tYXRyaXhfdGFibGU6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIHdpZHRoOiA4NSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMnB4O1xcbiAgei1pbmRleDogMTAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDBweCBhdXRvO1xcbn1cXG5cXG5zcGFuLm1hdHJpeF9jb2x1bW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IDJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTJweDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5zcGFuLm1hdHJpeF9jb2x1bW46YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgd2lkdGg6IDg1JTtcXG4gIGhlaWdodDogMnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAycHg7XFxuICB6LWluZGV4OiAxMDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuc3Bhbi5tYXRyaXhfdGFibGUgc3Bhbi5tYXRyaXhfY29sdW1uOmJlZm9yZSB7XFxuICBoZWlnaHQ6IDBweDtcXG59XFxuXFxuc3Bhbi5tYXRyaXhfdGFibGUgc3Bhbi5tYXRyaXhfY29sdW1uOmFmdGVyIHtcXG4gIGhlaWdodDogMHB4O1xcbn1cXG5cXG5zcGFuIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuc3Bhbi5tYXRyaXhfb3BlcmF0b3Ige1xcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHggNHB4IDBweCA0cHg7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuc3Bhbi5tYXRyaXhfbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xcbiAgcGFkZGluZzogMHB4IDBweCAwcHggMjBweDtcXG4gIG1hcmdpbjogMHB4IDFweDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLyogQ29sb3JzIGZvciBtYXRyaXggaGlnaGxpZ2h0aW5nICovXFxuXFxuLmxpZ2h0Y3lhbkNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y3lhbjtcXG59XFxuXFxuLmxpZ2h0Z3JleUNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXFxuLnB1cnBsZUNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNERkI1RTg7XFxufVxcblxcbi55ZWxsb3dDb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkRGRjlEO1xcbn1cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKioqKioqKioqKioqKioqKioqKioqIENvbG91ciByZWZlcmVuY2UgY2hhcnQqKioqKioqKioqKioqKioqXFxuZWxlbWVtdCAqKioqKioqKiogcHJvcGVydHkgKioqKioqKioqIGNvbG91ciAqKioqKioqKlxcblxcbndlYmdsX2NvbnRhaW5lciAgYmFja2dyb3VuZC1jb2xvciAgICAjZmNmOGUzXFxuXFxuKi9cXG5cXG4vKiBNYWpvciBzZWN0aW9ucyAqL1xcbi53ZWJnbF9jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjhlMztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4ud2ViZ2xfY21kcyB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA2cHg7XFxufVxcblxcbi53ZWJnbF9yb3cyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDBweCA0cHggMHB4IDRweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiA1NTBweDtcXG59XFxuXFxuLndlYmdsX2VkaXRvcnMge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLndlYmdsX2NhbnZhcyB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4ud2ViZ2xfb3V0cHV0IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIG1hcmdpbi10b3A6IDZweDtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4vKiBEZXRhaWxzIHdpdGhpbiBlYWNoIHNlY3Rpb24gKi9cXG4vKiBUYWJiZWQgdGl0bGVzLCB1bCBob3Jpem9udGFsIGxpc3QgKi9cXG4ud2ViZ2xfbmF2X3RhYnMge1xcbiAgaGVpZ2h0OiAzMXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDZweCAwcHggMHB4IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkNDQjg7XFxuICBib3JkZXItY29sb3I6ICNmYmVlZDU7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbn1cXG5cXG4ud2ViZ2xfbmF2X3RhYnMgbGkge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcXG4gIG1hcmdpbjogMHB4IDBweCAwcHggNHB4O1xcbiAgcGFkZGluZzogNHB4IDFweCA0cHggNHB4O1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFMkNDO1xcbiAgZm9udC1zaXplOiA5cHQ7XFxufVxcblxcbi53ZWJnbF9uYXZfdGFicyBsaSA+IGEge1xcbiAgcGFkZGluZzogOHB4IDhweCA4cHggOHB4O1xcbiAgY29sb3I6ICM1NTU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi53ZWJnbF9uYXZfdGFicyA+IGxpID4gYTpob3ZlciB7XFxuICBib3JkZXItY29sb3I6ICNiNGIxOWQ7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xcbn1cXG5cXG4ud2ViZ2xfbmF2X3RhYnMgbGkuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBsaXN0LXN0eWxlLWltYWdlOiBub25lO1xcbn1cXG5cXG4vKiBXZWJnbCBlZGl0b3JzICovXFxuLndlYmdsX3RhYl9jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY2xlYXI6IGJvdGg7XFxuICBtYXJnaW46IDBweCAwcHggMjBweCAwcHg7XFxuICBib3JkZXI6IDBweDtcXG4gIGNvbG9yOiAjYzA5ODUzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjhlMztcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi53ZWJnbF90YWJfY29udGVudC5hY3RpdmUge1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLndlYmdsX3RhYl9jb250ZW50ID4gKiB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIC8qXFx0cG9zaXRpb246cmVsYXRpdmU7ICovXFxufVxcblxcbi53ZWJnbF90YWJfY29udGVudCAuY2xlYXJmaXgge1xcbiAgcG9zaXRpb246IGluaXRpYWw7XFxufVxcblxcbi53ZWJnbF90YWJfZWRpdG9yIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY2xlYXI6IGJvdGg7XFxuICBwYWRkaW5nOiAxMHB4IDRweCAxMHB4IDRweDtcXG4gIG1hcmdpbjogMHB4IDBweCAyMHB4IDBweDtcXG4gIGJvcmRlcjogMHB4O1xcbiAgY29sb3I6ICNjMDk4NTM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzO1xcbn1cXG5cXG4vKiBzcGFuIHRoYXQgY29udGFpbnMgdGhlIHRhYmJlZCB0ZXh0IGVkaXRvcnMgKi9cXG4ud2ViZ2xfY29kZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4ud2ViZ2xfdGFiX2NvbnRlbnRzX3RleHQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjbGVhcjogYm90aDtcXG4gIHBhZGRpbmc6IDEwcHggNHB4IDEwcHggNHB4O1xcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHggMHB4O1xcbiAgYm9yZGVyOiAwcHg7XFxuICBjb2xvcjogI2MwOTg1MztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ud2ViZ2xfZXJyb3JNZXNzYWdlcyB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4ud2ViZ2xfd2FybmluZ01lc3NhZ2VzIHtcXG4gIGNvbG9yOiByZ2IoMTcwLCAzNCwgMTY0KTtcXG59XFxuXFxuLndlYmdsX2luZm9NZXNzYWdlcyB7XFxuICBjb2xvcjogcmdiKDI0LCAxNDQsIDY0KTtcXG59XFxuXFxuLndlYmdsX291dHB1dF9kaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDJweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XFxuICBwYWRkaW5nLXRvcDogNHB4O1xcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgaGVpZ2h0OiAxNGVtO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLndlYmdsX2VkaXRvcl9oaWdobGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTsgLyogdmVyeSBsaWdodCBncmV5ICovXFxufVxcblxcbi8qIFRvIGFsd2F5cyBzaG93IHRoZSBzY3JvbGwgYmFyIGluIGEgZGl2ICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDdweDtcXG59XFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNSk7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDI1NSwyNTUsMjU1LC41KTtcXG59XFxuXFxuLndlYmdsX2J0biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAzcHggNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRoaXN0bGU7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLndlYmdsX2NoZWNrYm94IHtcXG59XFxuXFxuLndlYmdsX3RhYmJlZF9lZGl0b3Ige1xcbiAgd2lkdGg6IDEwMCU7XFxuICByZXNpemU6IG5vbmU7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA5cHQ7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi5jYW52YXMzRCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLkNvZGVNaXJyb3Iud2ViZ2wtZGVmYXVsdCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogOHB0O1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5idXR0b24uYnRuLndlYmdsLWRlZmF1bHQge1xcbiAgZm9udC1zaXplOiA4cHQ7XFxufVxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3J1bmVzdG9uZS93ZWJnbGRlbW8vY3NzL3dlYmdsaW50ZXJhY3RpdmUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7OztDQUtDOztBQUVELG1CQUFtQjtBQUNuQjtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBLGdDQUFnQztBQUNoQyxzQ0FBc0M7QUFDdEM7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQSwrQ0FBK0M7QUFDL0M7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUsb0JBQW9CO0FBQ2pEOztBQUVBLDJDQUEyQztBQUMzQztJQUNJLHdCQUF3QjtJQUN4QixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsZ0RBQWdEO0FBQ3BEOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtBQUNBOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKioqKioqKioqKioqKioqKioqKiogQ29sb3VyIHJlZmVyZW5jZSBjaGFydCoqKioqKioqKioqKioqKipcXG5lbGVtZW10ICoqKioqKioqKiBwcm9wZXJ0eSAqKioqKioqKiogY29sb3VyICoqKioqKioqXFxuXFxud2ViZ2xfY29udGFpbmVyICBiYWNrZ3JvdW5kLWNvbG9yICAgICNmY2Y4ZTNcXG5cXG4qL1xcblxcbi8qIE1ham9yIHNlY3Rpb25zICovXFxuLndlYmdsX2NvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi53ZWJnbF9jbWRzIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDZweDtcXG59XFxuXFxuLndlYmdsX3JvdzIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMHB4IDRweCAwcHggNHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDU1MHB4O1xcbn1cXG5cXG4ud2ViZ2xfZWRpdG9ycyB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4ud2ViZ2xfY2FudmFzIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmbG9hdDogbGVmdDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi53ZWJnbF9vdXRwdXQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNHB4O1xcbiAgbWFyZ2luLXRvcDogNnB4O1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi8qIERldGFpbHMgd2l0aGluIGVhY2ggc2VjdGlvbiAqL1xcbi8qIFRhYmJlZCB0aXRsZXMsIHVsIGhvcml6b250YWwgbGlzdCAqL1xcbi53ZWJnbF9uYXZfdGFicyB7XFxuICBoZWlnaHQ6IDMxcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogNnB4IDBweCAwcHggMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGQ0NCODtcXG4gIGJvcmRlci1jb2xvcjogI2ZiZWVkNTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxufVxcblxcbi53ZWJnbF9uYXZfdGFicyBsaSB7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA0cHg7XFxuICBwYWRkaW5nOiA0cHggMXB4IDRweCA0cHg7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbG9hdDogbGVmdDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFNkUyQ0M7XFxuICBmb250LXNpemU6IDlwdDtcXG59XFxuXFxuLndlYmdsX25hdl90YWJzIGxpID4gYSB7XFxuICBwYWRkaW5nOiA4cHggOHB4IDhweCA4cHg7XFxuICBjb2xvcjogIzU1NTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLndlYmdsX25hdl90YWJzID4gbGkgPiBhOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogI2I0YjE5ZDtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XFxufVxcblxcbi53ZWJnbF9uYXZfdGFicyBsaS5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGxpc3Qtc3R5bGUtaW1hZ2U6IG5vbmU7XFxufVxcblxcbi8qIFdlYmdsIGVkaXRvcnMgKi9cXG4ud2ViZ2xfdGFiX2NvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjbGVhcjogYm90aDtcXG4gIG1hcmdpbjogMHB4IDBweCAyMHB4IDBweDtcXG4gIGJvcmRlcjogMHB4O1xcbiAgY29sb3I6ICNjMDk4NTM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLndlYmdsX3RhYl9jb250ZW50LmFjdGl2ZSB7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4ud2ViZ2xfdGFiX2NvbnRlbnQgPiAqIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgLypcXHRwb3NpdGlvbjpyZWxhdGl2ZTsgKi9cXG59XFxuXFxuLndlYmdsX3RhYl9jb250ZW50IC5jbGVhcmZpeCB7XFxuICBwb3NpdGlvbjogaW5pdGlhbDtcXG59XFxuXFxuLndlYmdsX3RhYl9lZGl0b3Ige1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjbGVhcjogYm90aDtcXG4gIHBhZGRpbmc6IDEwcHggNHB4IDEwcHggNHB4O1xcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHggMHB4O1xcbiAgYm9yZGVyOiAwcHg7XFxuICBjb2xvcjogI2MwOTg1MztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7XFxufVxcblxcbi8qIHNwYW4gdGhhdCBjb250YWlucyB0aGUgdGFiYmVkIHRleHQgZWRpdG9ycyAqL1xcbi53ZWJnbF9jb2RlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi53ZWJnbF90YWJfY29udGVudHNfdGV4dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNsZWFyOiBib3RoO1xcbiAgcGFkZGluZzogMTBweCA0cHggMTBweCA0cHg7XFxuICBtYXJnaW46IDBweCAwcHggMjBweCAwcHg7XFxuICBib3JkZXI6IDBweDtcXG4gIGNvbG9yOiAjYzA5ODUzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjhlMztcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi53ZWJnbF9lcnJvck1lc3NhZ2VzIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi53ZWJnbF93YXJuaW5nTWVzc2FnZXMge1xcbiAgY29sb3I6IHJnYigxNzAsIDM0LCAxNjQpO1xcbn1cXG5cXG4ud2ViZ2xfaW5mb01lc3NhZ2VzIHtcXG4gIGNvbG9yOiByZ2IoMjQsIDE0NCwgNjQpO1xcbn1cXG5cXG4ud2ViZ2xfb3V0cHV0X2RpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xcbiAgcGFkZGluZy1ib3R0b206IDRweDtcXG4gIHBhZGRpbmctdG9wOiA0cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBoZWlnaHQ6IDE0ZW07XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4ud2ViZ2xfZWRpdG9yX2hpZ2hsaWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFOyAvKiB2ZXJ5IGxpZ2h0IGdyZXkgKi9cXG59XFxuXFxuLyogVG8gYWx3YXlzIHNob3cgdGhlIHNjcm9sbCBiYXIgaW4gYSBkaXYgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICB3aWR0aDogN3B4O1xcbn1cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC41KTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xcbn1cXG5cXG4ud2ViZ2xfYnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDNweCA2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdGhpc3RsZTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtby11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ud2ViZ2xfY2hlY2tib3gge1xcbn1cXG5cXG4ud2ViZ2xfdGFiYmVkX2VkaXRvciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDlwdDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLmNhbnZhczNEIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uQ29kZU1pcnJvci53ZWJnbC1kZWZhdWx0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA4cHQ7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJ1dHRvbi5idG4ud2ViZ2wtZGVmYXVsdCB7XFxuICBmb250LXNpemU6IDhwdDtcXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJlc2VudGVyX21vZGUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ydW5lc3RvbmUtY3VzdG9tLXNwaGlueC1ib290c3RyYXAuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi91c2VyLWhpZ2hsaWdodHMuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYXRyaXhlcS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dlYmdsaW50ZXJhY3RpdmUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiLyoqXG4gKlxuICogVXNlcjogYm1pbGxlclxuICogT3JpZ2luYWw6IDIwMTEtMDQtMjBcbiAqIERhdGU6IDIwMTktMDYtMTRcbiAqIFRpbWU6IDI6MDEgUE1cbiAqIFRoaXMgY2hhbmdlIG1hcmtzIHRoZSBiZWdpbm5pbmcgb2YgdmVyc2lvbiA0LjAgb2YgdGhlIHJ1bmVzdG9uZSBjb21wb25lbnRzXG4gKiBMb2dpbi9sb2dvdXQgaXMgbm8gbG9uZ2VyIGhhbmRsZWQgdGhyb3VnaCBqYXZhc2NyaXB0IGJ1dCByYXRoZXIgc2VydmVyIHNpZGUuXG4gKiBNYW55IG9mIHRoZSBjb21wb25lbnRzIGRlcGVuZCBvbiB0aGUgcnVuZXN0b25lOmxvZ2luIGV2ZW50IHNvIHdlIHdpbGwga2VlcCB0aGF0XG4gKiBmb3Igbm93IHRvIGtlZXAgdGhlIGNodXJuIGZhaXJseSBtaW5pbWFsLlxuICovXG5cbi8qXG5cbiBDb3B5cmlnaHQgKEMpIDIwMTEgIEJyYWQgTWlsbGVyICBib25lbGFrZUBnbWFpbC5jb21cblxuIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG5cbiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuXG4gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuICovXG5cbi8vXG4vLyBDaGV2cm9uIGZ1bmN0aW9ucyAtIE11c3QgY29ycmVzcG9uZCB3aXRoIHdpZHRoIGluIHJ1bmVzdG9uZS1jdXN0b20tc3BoaW54LWJvb3RzdHJhcC5jc3Ncbi8vXG4kKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzaXplV2luZG93ID0gZmFsc2U7XG4gICAgdmFyIHJlc2l6ZVdpZHRoID0gNjAwO1xuICAgICQod2luZG93KVxuICAgICAgICAub24oXCJyZXNpemVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gcmVzaXplV2lkdGggJiYgcmVzaXplV2luZG93ID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmVzaXplV2luZG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YXIgdG9wUHJldiA9ICQoXCIjcmVsYXRpb25zLXByZXZcIilcbiAgICAgICAgICAgICAgICAgICAgLmNsb25lKClcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCBcInRvcC1yZWxhdGlvbnMtcHJldlwiKTtcbiAgICAgICAgICAgICAgICB2YXIgdG9wTmV4dCA9ICQoXCIjcmVsYXRpb25zLW5leHRcIilcbiAgICAgICAgICAgICAgICAgICAgLmNsb25lKClcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCBcInRvcC1yZWxhdGlvbnMtbmV4dFwiKTtcbiAgICAgICAgICAgICAgICAkKFwiI3JlbGF0aW9ucy1wcmV2LCAjcmVsYXRpb25zLW5leHRcIikuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHZhciBib3R0b21QcmV2ID0gdG9wUHJldlxuICAgICAgICAgICAgICAgICAgICAuY2xvbmUoKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcImlkXCIsIFwiYm90dG9tLXJlbGF0aW9ucy1wcmV2XCIpO1xuICAgICAgICAgICAgICAgIHZhciBib3R0b21OZXh0ID0gdG9wTmV4dFxuICAgICAgICAgICAgICAgICAgICAuY2xvbmUoKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcImlkXCIsIFwiYm90dG9tLXJlbGF0aW9ucy1uZXh0XCIpO1xuICAgICAgICAgICAgICAgICQoXCJkaXYjbWFpbi1jb250ZW50ID4gZGl2XCIpLnByZXBlbmQodG9wUHJldiwgdG9wTmV4dCk7XG4gICAgICAgICAgICAgICAgJChcIiN0b3AtcmVsYXRpb25zLXByZXYsICN0b3AtcmVsYXRpb25zLW5leHRcIikud3JhcEFsbChcbiAgICAgICAgICAgICAgICAgICAgJzx1bCBpZD1cInRvcC1yZWxhdGlvbnMtY29uc29sZVwiPjwvdWw+J1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgJChcImRpdiNtYWluLWNvbnRlbnQgPiBkaXZcIikuYXBwZW5kKGJvdHRvbVByZXYsIGJvdHRvbU5leHQpO1xuICAgICAgICAgICAgICAgICQoXCIjYm90dG9tLXJlbGF0aW9ucy1wcmV2LCAjYm90dG9tLXJlbGF0aW9ucy1uZXh0XCIpLndyYXBBbGwoXG4gICAgICAgICAgICAgICAgICAgICc8dWwgaWQ9XCJib3R0b20tcmVsYXRpb25zLWNvbnNvbGVcIj48L3VsPidcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID49IHJlc2l6ZVdpZHRoICsgMSAmJiByZXNpemVXaW5kb3cgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJlc2l6ZVdpbmRvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICQoXCIjdG9wLXJlbGF0aW9ucy1jb25zb2xlLCAjYm90dG9tLXJlbGF0aW9ucy1jb25zb2xlXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICQoXCIjcmVsYXRpb25zLXByZXYsICNyZWxhdGlvbnMtbmV4dFwiKS5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5yZXNpemUoKTtcbn0pO1xuXG4vL1xuLy8gUGFnZSBkZWNvcmF0aW9uIGZ1bmN0aW9uc1xuLy9cblxuZnVuY3Rpb24gYWRkUmVhZGluZ0xpc3QoKSB7XG4gICAgaWYgKGVCb29rQ29uZmlnLnJlYWRpbmdzKSB7XG4gICAgICAgIHZhciBsLCBueHQsIHBhdGhfcGFydHMsIG54dF9saW5rO1xuICAgICAgICBsZXQgY3VyX3BhdGhfcGFydHMgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpO1xuICAgICAgICBsZXQgbmFtZSA9XG4gICAgICAgICAgICBjdXJfcGF0aF9wYXJ0c1tjdXJfcGF0aF9wYXJ0cy5sZW5ndGggLSAyXSArXG4gICAgICAgICAgICBcIi9cIiArXG4gICAgICAgICAgICBjdXJfcGF0aF9wYXJ0c1tjdXJfcGF0aF9wYXJ0cy5sZW5ndGggLSAxXTtcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gZUJvb2tDb25maWcucmVhZGluZ3MuaW5kZXhPZihuYW1lKTtcbiAgICAgICAgbGV0IG51bV9yZWFkaW5ncyA9IGVCb29rQ29uZmlnLnJlYWRpbmdzLmxlbmd0aDtcbiAgICAgICAgaWYgKHBvc2l0aW9uID09IGVCb29rQ29uZmlnLnJlYWRpbmdzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIC8vIG5vIG1vcmUgcmVhZGluZ3NcbiAgICAgICAgICAgIGwgPSAkKFwiPGRpdiAvPlwiLCB7XG4gICAgICAgICAgICAgICAgdGV4dDogYEZpbmlzaGVkIHJlYWRpbmcgYXNzaWdubWVudC4gUGFnZSAke251bV9yZWFkaW5nc30gb2YgJHtudW1fcmVhZGluZ3N9LmAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbiA+PSAwKSB7XG4gICAgICAgICAgICAvLyBnZXQgbmV4dCBuYW1lXG4gICAgICAgICAgICBueHQgPSBlQm9va0NvbmZpZy5yZWFkaW5nc1twb3NpdGlvbiArIDFdO1xuICAgICAgICAgICAgcGF0aF9wYXJ0cyA9IGN1cl9wYXRoX3BhcnRzLnNsaWNlKDAsIGN1cl9wYXRoX3BhcnRzLmxlbmd0aCAtIDIpO1xuICAgICAgICAgICAgcGF0aF9wYXJ0cy5wdXNoKG54dCk7XG4gICAgICAgICAgICBueHRfbGluayA9IHBhdGhfcGFydHMuam9pbihcIi9cIik7XG4gICAgICAgICAgICBsID0gJChcIjxhIC8+XCIsIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcImxpbmtcIixcbiAgICAgICAgICAgICAgICBjbGFzczogXCJidG4gYnRuLWxnICcgKyAnYnV0dG9uQ29uZmlybUNvbXBsZXRpb24nXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogbnh0X2xpbmssXG4gICAgICAgICAgICAgICAgdGV4dDogYENvbnRpbnVlIHRvIHBhZ2UgJHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gKyAyXG4gICAgICAgICAgICAgICAgfSBvZiAke251bV9yZWFkaW5nc30gaW4gdGhlIHJlYWRpbmcgYXNzaWdubWVudC5gLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsID0gJChcIjxkaXYgLz5cIiwge1xuICAgICAgICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICAgICAgICAgIFwiVGhpcyBwYWdlIGlzIG5vdCBwYXJ0IG9mIHRoZSBsYXN0IHJlYWRpbmcgYXNzaWdubWVudCB5b3UgdmlzaXRlZC5cIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgICQoXCIjbWFpbi1jb250ZW50XCIpLmFwcGVuZChsKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRpbWVkUmVmcmVzaCgpIHtcbiAgICB2YXIgdGltZW91dFBlcmlvZCA9IDkwMDAwMDsgLy8gNzUgbWludXRlc1xuICAgICQoZG9jdW1lbnQpLmJpbmQoXCJpZGxlLmlkbGVUaW1lclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEFmdGVyIHRpbWVvdXQgcGVyaW9kIHNlbmQgdGhlIHVzZXIgYmFjayB0byB0aGUgaW5kZXguICBUaGlzIHdpbGwgZm9yY2UgYSBsb2dpblxuICAgICAgICAvLyBpZiBuZWVkZWQgd2hlbiB0aGV5IHdhbnQgdG8gZ28gdG8gYSBwYXJ0aWN1bGFyIHBhZ2UuICBUaGlzIG1heSBub3QgYmUgcGVyZmVjdFxuICAgICAgICAvLyBidXQgaXRzIGFuIGVhc3kgd2F5IHRvIG1ha2Ugc3VyZSBsYXB0b3AgdXNlcnMgYXJlIHByb3Blcmx5IGxvZ2dlZCBpbiB3aGVuIHRoZXlcbiAgICAgICAgLy8gdGFrZSBxdWl6emVzIGFuZCBzYXZlIHN0dWZmLlxuICAgICAgICBpZiAobG9jYXRpb24uaHJlZi5pbmRleE9mKFwiaW5kZXguaHRtbFwiKSA8IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSWRsZSB0aW1lciAtIFwiICsgbG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9XG4gICAgICAgICAgICAgICAgZUJvb2tDb25maWcuYXBwICtcbiAgICAgICAgICAgICAgICBcIi9kZWZhdWx0L3VzZXIvbG9naW4/X25leHQ9XCIgK1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lICtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5zZWFyY2g7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAkLmlkbGVUaW1lcih0aW1lb3V0UGVyaW9kKTtcbn1cblxuY2xhc3MgUGFnZVByb2dyZXNzQmFyIHtcbiAgICBjb25zdHJ1Y3RvcihhY3REaWN0KSB7XG4gICAgICAgIHRoaXMucG9zc2libGUgPSAwO1xuICAgICAgICB0aGlzLnRvdGFsID0gMTtcbiAgICAgICAgaWYgKGFjdERpY3QgJiYgT2JqZWN0LmtleXMoYWN0RGljdCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5hY3Rpdml0aWVzID0gYWN0RGljdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBhY3Rpdml0aWVzID0geyBwYWdlOiAwIH07XG4gICAgICAgICAgICAkKFwiLnJ1bmVzdG9uZVwiKS5lYWNoKGZ1bmN0aW9uIChpZHgsIGUpIHtcbiAgICAgICAgICAgICAgICBhY3Rpdml0aWVzW2UuZmlyc3RFbGVtZW50Q2hpbGQuaWRdID0gMDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5hY3Rpdml0aWVzID0gYWN0aXZpdGllcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVByb2dyZXNzKCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5tYXRjaChcbiAgICAgICAgICAgICAgICAvLiooaW5kZXguaHRtbHx0b2N0cmVlLmh0bWx8RXhlcmNpc2VzLmh0bWx8R2xvc3NhcnkuaHRtbHxzZWFyY2guaHRtbCkkL2lcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICAkKFwiI3NjcHJvZ3Jlc3Njb250YWluZXJcIikuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyUHJvZ3Jlc3MoKTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVQcm9ncmVzcygpIHtcbiAgICAgICAgZm9yIChsZXQgayBpbiB0aGlzLmFjdGl2aXRpZXMpIHtcbiAgICAgICAgICAgIGlmIChrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3NpYmxlKys7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZpdGllc1trXSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlclByb2dyZXNzKCkge1xuICAgICAgICBsZXQgdmFsdWUgPSAwO1xuICAgICAgICAkKFwiI3NjcHJvZ3Jlc3N0b3RhbFwiKS50ZXh0KHRoaXMudG90YWwpO1xuICAgICAgICAkKFwiI3NjcHJvZ3Jlc3Nwb3NzXCIpLnRleHQodGhpcy5wb3NzaWJsZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YWx1ZSA9ICgxMDAgKiB0aGlzLnRvdGFsKSAvIHRoaXMucG9zc2libGU7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgfVxuICAgICAgICAkKFwiI3N1YmNoYXB0ZXJwcm9ncmVzc1wiKS5wcm9ncmVzc2Jhcih7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWVCb29rQ29uZmlnLmlzTG9nZ2VkSW4pIHtcbiAgICAgICAgICAgICQoXCIjc3ViY2hhcHRlcnByb2dyZXNzPmRpdlwiKS5hZGRDbGFzcyhcImxvZ2dlZG91dFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVByb2dyZXNzKGRpdl9pZCkge1xuICAgICAgICB0aGlzLmFjdGl2aXRpZXNbZGl2X2lkXSsrO1xuICAgICAgICAvLyBPbmx5IHVwZGF0ZSB0aGUgcHJvZ3Jlc3MgYmFyIG9uIHRoZSBmaXJzdCBpbnRlcmFjdGlvbiB3aXRoIGFuIG9iamVjdC5cbiAgICAgICAgaWYgKHRoaXMuYWN0aXZpdGllc1tkaXZfaWRdID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnRvdGFsKys7XG4gICAgICAgICAgICBsZXQgdmFsID0gKDEwMCAqIHRoaXMudG90YWwpIC8gdGhpcy5wb3NzaWJsZTtcbiAgICAgICAgICAgICQoXCIjc2Nwcm9ncmVzc3RvdGFsXCIpLnRleHQodGhpcy50b3RhbCk7XG4gICAgICAgICAgICAkKFwiI3NjcHJvZ3Jlc3Nwb3NzXCIpLnRleHQodGhpcy5wb3NzaWJsZSk7XG4gICAgICAgICAgICAkKFwiI3N1YmNoYXB0ZXJwcm9ncmVzc1wiKS5wcm9ncmVzc2JhcihcIm9wdGlvblwiLCBcInZhbHVlXCIsIHZhbCk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdmFsID09IDEwMC4wICYmXG4gICAgICAgICAgICAgICAgJChcIiNjb21wbGV0aW9uQnV0dG9uXCIpLnRleHQoKS50b0xvd2VyQ2FzZSgpID09PVxuICAgICAgICAgICAgICAgICAgICBcIm1hcmsgYXMgY29tcGxldGVkXCJcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICQoXCIjY29tcGxldGlvbkJ1dHRvblwiKS5jbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgdmFyIHBhZ2VQcm9ncmVzc1RyYWNrZXIgPSB7fTtcblxuZnVuY3Rpb24gaGFuZGxlUGFnZVNldHVwKCkge1xuICAgIHZhciBtZXNzO1xuICAgIGlmIChlQm9va0NvbmZpZy51c2VSdW5lc3RvbmVTZXJ2aWNlcykge1xuICAgICAgICBqUXVlcnkuZ2V0KGVCb29rQ29uZmlnLmFqYXhVUkwgKyBcInNldF90el9vZmZzZXRcIiwge1xuICAgICAgICAgICAgdGltZXpvbmVvZmZzZXQ6IG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAvIDYwLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoZUJvb2tDb25maWcuaXNMb2dnZWRJbikge1xuICAgICAgICBtZXNzID0gYHVzZXJuYW1lOiAke2VCb29rQ29uZmlnLnVzZXJuYW1lfWA7XG4gICAgICAgIGlmICghZUJvb2tDb25maWcuaXNJbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICAkKFwiI2lwX2Ryb3Bkb3duX2xpbmtcIikucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgJChkb2N1bWVudCkudHJpZ2dlcihcInJ1bmVzdG9uZTpsb2dpblwiKTtcbiAgICAgICAgYWRkUmVhZGluZ0xpc3QoKTtcbiAgICAgICAgdGltZWRSZWZyZXNoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWVzcyA9IFwiTm90IGxvZ2dlZCBpblwiO1xuICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKFwicnVuZXN0b25lOmxvZ291dFwiKTtcbiAgICB9XG4gICAgJChcIi5sb2dnZWRpbnVzZXJcIikuaHRtbChtZXNzKTtcblxuICAgIHBhZ2VQcm9ncmVzc1RyYWNrZXIgPSBuZXcgUGFnZVByb2dyZXNzQmFyKGVCb29rQ29uZmlnLmFjdGl2aXRpZXMpO1xuICAgIG5vdGlmeVJ1bmVzdG9uZUNvbXBvbmVudHMoKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBOYXZiYXJMb2dnZWRJbigpIHtcbiAgICAkKFwiI3Byb2ZpbGVsaW5rXCIpLnNob3coKTtcbiAgICAkKFwiI3Bhc3N3b3JkbGlua1wiKS5zaG93KCk7XG4gICAgJChcIiNyZWdpc3RlcmxpbmtcIikuaGlkZSgpO1xuICAgICQoXCJsaS5sb2dpbm91dFwiKS5odG1sKFxuICAgICAgICAnPGEgaHJlZj1cIicgKyBlQm9va0NvbmZpZy5hcHAgKyAnL2RlZmF1bHQvdXNlci9sb2dvdXRcIj5Mb2cgT3V0PC9hPidcbiAgICApO1xufVxuJChkb2N1bWVudCkuYmluZChcInJ1bmVzdG9uZTpsb2dpblwiLCBzZXR1cE5hdmJhckxvZ2dlZEluKTtcblxuZnVuY3Rpb24gc2V0dXBOYXZiYXJMb2dnZWRPdXQoKSB7XG4gICAgaWYgKGVCb29rQ29uZmlnLnVzZVJ1bmVzdG9uZVNlcnZpY2VzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0dXAgbmF2YmFyIGZvciBsb2dnZWQgb3V0XCIpO1xuICAgICAgICAkKFwiI3JlZ2lzdGVybGlua1wiKS5zaG93KCk7XG4gICAgICAgICQoXCIjcHJvZmlsZWxpbmtcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI3Bhc3N3b3JkbGlua1wiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjaXBfZHJvcGRvd25fbGlua1wiKS5oaWRlKCk7XG4gICAgICAgICQoXCJsaS5sb2dpbm91dFwiKS5odG1sKFxuICAgICAgICAgICAgJzxhIGhyZWY9XCInICsgZUJvb2tDb25maWcuYXBwICsgJy9kZWZhdWx0L3VzZXIvbG9naW5cIj5Mb2dpbjwvYT4nXG4gICAgICAgICk7XG4gICAgICAgICQoXCIuZm9vdGVyXCIpLmh0bWwoXCJ1c2VyIG5vdCBsb2dnZWQgaW5cIik7XG4gICAgfVxufVxuJChkb2N1bWVudCkuYmluZChcInJ1bmVzdG9uZTpsb2dvdXRcIiwgc2V0dXBOYXZiYXJMb2dnZWRPdXQpO1xuXG5mdW5jdGlvbiBub3RpZnlSdW5lc3RvbmVDb21wb25lbnRzKCkge1xuICAgIC8vIFJ1bmVzdG9uZSBjb21wb25lbnRzIHdhaXQgdW50aWwgbG9naW4gcHJvY2VzcyBpcyBvdmVyIHRvIGxvYWQgY29tcG9uZW50cyBiZWNhdXNlIG9mIHN0b3JhZ2UgaXNzdWVzLiBUaGlzIHRyaWdnZXJzIHRoZSBgZHluYW1pYyBpbXBvcnQgbWFjaGluZXJ5YCwgd2hpY2ggdGhlbiBzZW5kcyB0aGUgbG9naW4gY29tcGxldGUgc2lnbmFsIHdoZW4gdGhpcyBhbmQgYWxsIGR5bmFtaWMgaW1wb3J0cyBhcmUgZmluaXNoZWQuXG4gICAgJChkb2N1bWVudCkudHJpZ2dlcihcInJ1bmVzdG9uZTpwcmUtbG9naW4tY29tcGxldGVcIik7XG59XG5cbi8vIGluaXRpYWxpemUgc3R1ZmZcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZUJvb2tDb25maWcpIHtcbiAgICAgICAgaGFuZGxlUGFnZVNldHVwKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlQm9va0NvbmZpZyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgXCJlQm9va0NvbmZpZyBpcyBub3QgZGVmaW5lZC4gIFRoaXMgcGFnZSBtdXN0IG5vdCBiZSBzZXQgdXAgZm9yIFJ1bmVzdG9uZVwiXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbi8vIG1pc2Mgc3R1ZmZcbi8vIHRvZG86ICBUaGlzIGNvdWxkIGJlIGZ1cnRoZXIgZGlzdHJpYnV0ZWQgYnV0IG1ha2luZyBhIHZpZGVvLmpzIGZpbGUganVzdCBmb3Igb25lIGZ1bmN0aW9uIHNlZW1zIGR1bWIuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgLy8gYWRkIHRoZSB2aWRlbyBwbGF5IGJ1dHRvbiBvdmVybGF5IGltYWdlXG4gICAgJChcIi52aWRlby1wbGF5LW92ZXJsYXlcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY3NzKFxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWltYWdlXCIsXG4gICAgICAgICAgICBcInVybCgne3twYXRodG8oJ19zdGF0aWMvcGxheV9vdmVybGF5X2ljb24ucG5nJywgMSl9fScpXCJcbiAgICAgICAgKTtcbiAgICB9KTtcblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gaXMgbmVlZGVkIHRvIGFsbG93IHRoZSBkcm9wZG93biBzZWFyY2ggYmFyIHRvIHdvcms7XG4gICAgLy8gVGhlIGRlZmF1bHQgYmVoYXZpb3VyIGlzIHRoYXQgdGhlIGRyb3Bkb3duIG1lbnUgY2xvc2VzIHdoZW4gc29tZXRoaW5nIGluXG4gICAgLy8gaXQgKGxpa2UgdGhlIHNlYXJjaCBiYXIpIGlzIGNsaWNrZWRcbiAgICAkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gRml4IGlucHV0IGVsZW1lbnQgY2xpY2sgcHJvYmxlbVxuICAgICAgICAkKFwiLmRyb3Bkb3duIGlucHV0LCAuZHJvcGRvd24gbGFiZWxcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iLCIvKiFcbiAqIGpRdWVyeSBpZGxlVGltZXIgcGx1Z2luXG4gKiB2ZXJzaW9uIDAuOS4xMDA1MTFcbiAqIGJ5IFBhdWwgSXJpc2guXG4gKiAgIGh0dHA6Ly9naXRodWIuY29tL3BhdWxpcmlzaC95dWktbWlzYy90cmVlL1xuICogTUlUIGxpY2Vuc2VcblxuICogYWRhcHRlZCBmcm9tIFlVSSBpZGxlIHRpbWVyIGJ5IG56YWthczpcbiAqICAgaHR0cDovL2dpdGh1Yi5jb20vbnpha2FzL3l1aS1taXNjL1xuKi9cbi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMDkgTmljaG9sYXMgQy4gWmFrYXNcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIHVwZGF0ZWQgdG8gZml4IENocm9tZSBzZXRUaW1lb3V0IGlzc3VlIGJ5IFphaWQgWmF3YWlkZWggKi9cblxuIC8vIEFQSSBhdmFpbGFibGUgaW4gPD0gdjAuOFxuIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAvLyBpZGxlVGltZXIoKSB0YWtlcyBhbiBvcHRpb25hbCBhcmd1bWVudCB0aGF0IGRlZmluZXMgdGhlIGlkbGUgdGltZW91dFxuIC8vIHRpbWVvdXQgaXMgaW4gbWlsbGlzZWNvbmRzOyBkZWZhdWx0cyB0byAzMDAwMFxuICQuaWRsZVRpbWVyKDEwMDAwKTtcblxuXG4gJChkb2N1bWVudCkuYmluZChcImlkbGUuaWRsZVRpbWVyXCIsIGZ1bmN0aW9uKCl7XG4gICAgLy8gZnVuY3Rpb24geW91IHdhbnQgdG8gZmlyZSB3aGVuIHRoZSB1c2VyIGdvZXMgaWRsZVxuIH0pO1xuXG5cbiAkKGRvY3VtZW50KS5iaW5kKFwiYWN0aXZlLmlkbGVUaW1lclwiLCBmdW5jdGlvbigpe1xuICAvLyBmdW5jdGlvbiB5b3Ugd2FudCB0byBmaXJlIHdoZW4gdGhlIHVzZXIgYmVjb21lcyBhY3RpdmUgYWdhaW5cbiB9KTtcblxuIC8vIHBhc3MgdGhlIHN0cmluZyAnZGVzdHJveScgdG8gc3RvcCB0aGUgdGltZXJcbiAkLmlkbGVUaW1lcignZGVzdHJveScpO1xuXG4gLy8geW91IGNhbiBxdWVyeSBpZiB0aGUgdXNlciBpcyBpZGxlIG9yIG5vdCB3aXRoIGRhdGEoKVxuICQuZGF0YShkb2N1bWVudCwnaWRsZVRpbWVyJyk7ICAvLyAnaWRsZScgIG9yICdhY3RpdmUnXG5cbiAvLyB5b3UgY2FuIGdldCB0aW1lIGVsYXBzZWQgc2luY2UgdXNlciB3aGVuIGlkbGUvYWN0aXZlXG4gJC5pZGxlVGltZXIoJ2dldEVsYXBzZWRUaW1lJyk7IC8vIHRpbWUgc2luY2Ugc3RhdGUgY2hhbmdlIGluIG1zXG5cbiAqKioqKioqKi9cblxuXG5cbiAvLyBBUEkgYXZhaWxhYmxlIGluID49IHYwLjlcbiAvKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gLy8gYmluZCB0byBzcGVjaWZpYyBlbGVtZW50cywgYWxsb3dzIGZvciBtdWx0aXBsZSB0aW1lciBpbnN0YW5jZXNcbiAkKGVsZW0pLmlkbGVUaW1lcih0aW1lb3V0fCdkZXN0cm95J3wnZ2V0RWxhcHNlZFRpbWUnKTtcbiAkLmRhdGEoZWxlbSwnaWRsZVRpbWVyJyk7ICAvLyAnaWRsZScgIG9yICdhY3RpdmUnXG5cbiAvLyBpZiB5b3UncmUgdXNpbmcgdGhlIG9sZCAkLmlkbGVUaW1lciBhcGksIHlvdSBzaG91bGQgbm90IGRvICQoZG9jdW1lbnQpLmlkbGVUaW1lciguLi4pXG5cbiAvLyBlbGVtZW50IGJvdW5kIHRpbWVycyB3aWxsIG9ubHkgd2F0Y2ggZm9yIGV2ZW50cyBpbnNpZGUgb2YgdGhlbS5cbiAvLyB5b3UgbWF5IGp1c3Qgd2FudCBwYWdlLWxldmVsIGFjdGl2aXR5LCBpbiB3aGljaCBjYXNlIHlvdSBtYXkgc2V0IHVwXG4gLy8gICB5b3VyIHRpbWVycyBvbiBkb2N1bWVudCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBhbmQgZG9jdW1lbnQuYm9keVxuXG4gLy8gWW91IGNhbiBvcHRpb25hbGx5IHByb3ZpZGUgYSBzZWNvbmQgYXJndW1lbnQgdG8gb3ZlcnJpZGUgY2VydGFpbiBvcHRpb25zLlxuIC8vIEhlcmUgYXJlIHRoZSBkZWZhdWx0cywgc28geW91IGNhbiBvbWl0IGFueSBvciBhbGwgb2YgdGhlbS5cbiAkKGVsZW0pLmlkbGVUaW1lcih0aW1lb3V0LCB7XG4gICBzdGFydEltbWVkaWF0ZWx5OiB0cnVlLCAvL3N0YXJ0cyBhIHRpbWVvdXQgYXMgc29vbiBhcyB0aGUgdGltZXIgaXMgc2V0IHVwOyBvdGhlcndpc2UgaXQgd2FpdHMgZm9yIHRoZSBmaXJzdCBldmVudC5cbiAgIGlkbGU6ICAgIGZhbHNlLCAgICAgICAgIC8vaW5kaWNhdGVzIGlmIHRoZSB1c2VyIGlzIGlkbGVcbiAgIGVuYWJsZWQ6IHRydWUsICAgICAgICAgIC8vaW5kaWNhdGVzIGlmIHRoZSBpZGxlIHRpbWVyIGlzIGVuYWJsZWRcbiAgIGV2ZW50czogICdtb3VzZW1vdmUga2V5ZG93biBET01Nb3VzZVNjcm9sbCBtb3VzZXdoZWVsIG1vdXNlZG93biB0b3VjaHN0YXJ0IHRvdWNobW92ZScgLy8gYWN0aXZpdHkgaXMgb25lIG9mIHRoZXNlIGV2ZW50c1xuIH0pO1xuXG4gKioqKioqKiovXG5cbihmdW5jdGlvbigkKXtcblxuJC5pZGxlVGltZXIgPSBmdW5jdGlvbihuZXdUaW1lb3V0LCBlbGVtLCBvcHRzKXtcblxuICAgIC8vIGRlZmF1bHRzIHRoYXQgYXJlIHRvIGJlIHN0b3JlZCBhcyBpbnN0YW5jZSBwcm9wcyBvbiB0aGUgZWxlbVxuXG5cdG9wdHMgPSAkLmV4dGVuZCh7XG5cdFx0c3RhcnRJbW1lZGlhdGVseTogdHJ1ZSwgLy9zdGFydHMgYSB0aW1lb3V0IGFzIHNvb24gYXMgdGhlIHRpbWVyIGlzIHNldCB1cFxuXHRcdGlkbGU6ICAgIGZhbHNlLCAgICAgICAgIC8vaW5kaWNhdGVzIGlmIHRoZSB1c2VyIGlzIGlkbGVcblx0XHRlbmFibGVkOiB0cnVlLCAgICAgICAgICAvL2luZGljYXRlcyBpZiB0aGUgaWRsZSB0aW1lciBpcyBlbmFibGVkXG5cdFx0dGltZW91dDogMzAwMDAsICAgICAgICAgLy90aGUgYW1vdW50IG9mIHRpbWUgKG1zKSBiZWZvcmUgdGhlIHVzZXIgaXMgY29uc2lkZXJlZCBpZGxlXG5cdFx0ZXZlbnRzOiAgJ21vdXNlbW92ZSBrZXlkb3duIERPTU1vdXNlU2Nyb2xsIG1vdXNld2hlZWwgbW91c2Vkb3duIHRvdWNoc3RhcnQgdG91Y2htb3ZlJyAvLyBhY3Rpdml0eSBpcyBvbmUgb2YgdGhlc2UgZXZlbnRzXG5cdH0sIG9wdHMpO1xuXG5cbiAgICBlbGVtID0gZWxlbSB8fCBkb2N1bWVudDtcblxuICAgIC8qIChpbnRlbnRpb25hbGx5IG5vdCBkb2N1bWVudGVkKVxuICAgICAqIFRvZ2dsZXMgdGhlIGlkbGUgc3RhdGUgYW5kIGZpcmVzIGFuIGFwcHJvcHJpYXRlIGV2ZW50LlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgdmFyIHRvZ2dsZUlkbGVTdGF0ZSA9IGZ1bmN0aW9uKG15ZWxlbSl7XG5cbiAgICAgICAgLy8gY3Vyc2UgeW91LCBtb3ppbGxhIHNldFRpbWVvdXQgbGF0ZW5lc3MgYnVnIVxuICAgICAgICBpZiAodHlwZW9mIG15ZWxlbSA9PT0gJ251bWJlcicpe1xuICAgICAgICAgICAgbXllbGVtID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9iaiA9ICQuZGF0YShteWVsZW0gfHwgZWxlbSwnaWRsZVRpbWVyT2JqJyk7XG5cbiAgICAgICAgLy90b2dnbGUgdGhlIHN0YXRlXG4gICAgICAgIG9iai5pZGxlID0gIW9iai5pZGxlO1xuXG4gICAgICAgIC8vIHJlc2V0IHRpbWVvdXQgXG4gICAgICAgIHZhciBlbGFwc2VkID0gKCtuZXcgRGF0ZSgpKSAtIG9iai5vbGRkYXRlO1xuICAgICAgICBvYmoub2xkZGF0ZSA9ICtuZXcgRGF0ZSgpO1xuXG4gICAgICAgIC8vIGhhbmRsZSBDaHJvbWUgYWx3YXlzIHRyaWdnZXJpbmcgaWRsZSBhZnRlciBqcyBhbGVydCBvciBjb21maXJtIHBvcHVwXG4gICAgICAgIGlmIChvYmouaWRsZSAmJiAoZWxhcHNlZCA8IG9wdHMudGltZW91dCkpIHtcbiAgICAgICAgICAgICAgICBvYmouaWRsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCgkLmlkbGVUaW1lci50SWQpO1xuICAgICAgICAgICAgICAgIGlmIChvcHRzLmVuYWJsZWQpXG4gICAgICAgICAgICAgICAgICAkLmlkbGVUaW1lci50SWQgPSBzZXRUaW1lb3V0KHRvZ2dsZUlkbGVTdGF0ZSwgb3B0cy50aW1lb3V0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vZmlyZSBhcHByb3ByaWF0ZSBldmVudFxuXG4gICAgICAgIC8vIGNyZWF0ZSBhIGN1c3RvbSBldmVudCwgYnV0IGZpcnN0LCBzdG9yZSB0aGUgbmV3IHN0YXRlIG9uIHRoZSBlbGVtZW50XG4gICAgICAgIC8vIGFuZCB0aGVuIGFwcGVuZCB0aGF0IHN0cmluZyB0byBhIG5hbWVzcGFjZVxuICAgICAgICB2YXIgZXZlbnQgPSBqUXVlcnkuRXZlbnQoICQuZGF0YShlbGVtLCdpZGxlVGltZXInLCBvYmouaWRsZSA/IFwiaWRsZVwiIDogXCJhY3RpdmVcIiApICArICcuaWRsZVRpbWVyJyAgICk7XG5cbiAgICAgICAgLy8gd2UgZG8gd2FudCB0aGlzIHRvIGJ1YmJsZSwgYXQgbGVhc3QgYXMgYSB0ZW1wb3JhcnkgZml4IGZvciBqUXVlcnkgMS43XG4gICAgICAgIC8vIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAkKGVsZW0pLnRyaWdnZXIoZXZlbnQpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTdG9wcyB0aGUgaWRsZSB0aW1lci4gVGhpcyByZW1vdmVzIGFwcHJvcHJpYXRlIGV2ZW50IGhhbmRsZXJzXG4gICAgICogYW5kIGNhbmNlbHMgYW55IHBlbmRpbmcgdGltZW91dHMuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKiBAbWV0aG9kIHN0b3BcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RvcCA9IGZ1bmN0aW9uKGVsZW0pe1xuXG4gICAgICAgIHZhciBvYmogPSAkLmRhdGEoZWxlbSwnaWRsZVRpbWVyT2JqJykgfHwge307XG5cbiAgICAgICAgLy9zZXQgdG8gZGlzYWJsZWRcbiAgICAgICAgb2JqLmVuYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICAvL2NsZWFyIGFueSBwZW5kaW5nIHRpbWVvdXRzXG4gICAgICAgIGNsZWFyVGltZW91dChvYmoudElkKTtcblxuICAgICAgICAvL2RldGFjaCB0aGUgZXZlbnQgaGFuZGxlcnNcbiAgICAgICAgJChlbGVtKS5vZmYoJy5pZGxlVGltZXInKTtcbiAgICB9LFxuXG5cbiAgICAvKiAoaW50ZW50aW9uYWxseSBub3QgZG9jdW1lbnRlZClcbiAgICAgKiBIYW5kbGVzIGEgdXNlciBldmVudCBpbmRpY2F0aW5nIHRoYXQgdGhlIHVzZXIgaXNuJ3QgaWRsZS5cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBBIERPTTItbm9ybWFsaXplZCBldmVudCBvYmplY3QuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBoYW5kbGVVc2VyRXZlbnQgPSBmdW5jdGlvbigpe1xuXG4gICAgICAgIHZhciBvYmogPSAkLmRhdGEodGhpcywnaWRsZVRpbWVyT2JqJyk7XG5cbiAgICAgICAgLy9jbGVhciBhbnkgZXhpc3RpbmcgdGltZW91dFxuICAgICAgICBjbGVhclRpbWVvdXQob2JqLnRJZCk7XG5cblxuXG4gICAgICAgIC8vaWYgdGhlIGlkbGUgdGltZXIgaXMgZW5hYmxlZFxuICAgICAgICBpZiAob2JqLmVuYWJsZWQpe1xuXG5cbiAgICAgICAgICAgIC8vaWYgaXQncyBpZGxlLCB0aGF0IG1lYW5zIHRoZSB1c2VyIGlzIG5vIGxvbmdlciBpZGxlXG4gICAgICAgICAgICBpZiAob2JqLmlkbGUpe1xuICAgICAgICAgICAgICAgIHRvZ2dsZUlkbGVTdGF0ZSh0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9zZXQgYSBuZXcgdGltZW91dFxuICAgICAgICAgICAgb2JqLnRJZCA9IHNldFRpbWVvdXQodG9nZ2xlSWRsZVN0YXRlLCBvYmoudGltZW91dCk7XG5cbiAgICAgICAgfVxuICAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiBTdGFydHMgdGhlIGlkbGUgdGltZXIuIFRoaXMgYWRkcyBhcHByb3ByaWF0ZSBldmVudCBoYW5kbGVyc1xuICAgICAqIGFuZCBzdGFydHMgdGhlIGZpcnN0IHRpbWVvdXQuXG4gICAgICogQHBhcmFtIHtpbnR9IG5ld1RpbWVvdXQgKE9wdGlvbmFsKSBBIG5ldyB2YWx1ZSBmb3IgdGhlIHRpbWVvdXQgcGVyaW9kIGluIG1zLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICogQG1ldGhvZCAkLmlkbGVUaW1lclxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cblxuXG4gICAgdmFyIG9iaiA9ICQuZGF0YShlbGVtLCdpZGxlVGltZXJPYmonKSB8fCB7fTtcblxuICAgIG9iai5vbGRkYXRlID0gb2JqLm9sZGRhdGUgfHwgK25ldyBEYXRlKCk7XG5cbiAgICAvL2Fzc2lnbiBhIG5ldyB0aW1lb3V0IGlmIG5lY2Vzc2FyeVxuICAgIGlmICh0eXBlb2YgbmV3VGltZW91dCA9PT0gXCJudW1iZXJcIil7XG4gICAgICAgIG9wdHMudGltZW91dCA9IG5ld1RpbWVvdXQ7XG4gICAgfSBlbHNlIGlmIChuZXdUaW1lb3V0ID09PSAnZGVzdHJveScpIHtcbiAgICAgICAgc3RvcChlbGVtKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIGlmIChuZXdUaW1lb3V0ID09PSAnZ2V0RWxhcHNlZFRpbWUnKXtcbiAgICAgICAgcmV0dXJuICgrbmV3IERhdGUoKSkgLSBvYmoub2xkZGF0ZTtcbiAgICB9XG5cbiAgICAvL2Fzc2lnbiBhcHByb3ByaWF0ZSBldmVudCBoYW5kbGVyc1xuICAgICQoZWxlbSkub24oJC50cmltKChvcHRzLmV2ZW50cysnICcpLnNwbGl0KCcgJykuam9pbignLmlkbGVUaW1lciAnKSksaGFuZGxlVXNlckV2ZW50KTtcblxuXG4gICAgb2JqLmlkbGUgICAgPSBvcHRzLmlkbGU7XG4gICAgb2JqLmVuYWJsZWQgPSBvcHRzLmVuYWJsZWQ7XG4gICAgb2JqLnRpbWVvdXQgPSBvcHRzLnRpbWVvdXQ7XG5cblxuICAgIC8vc2V0IGEgdGltZW91dCB0byB0b2dnbGUgc3RhdGUuIE1heSB3aXNoIHRvIG9taXQgdGhpcyBpbiBzb21lIHNpdHVhdGlvbnNcblx0aWYgKG9wdHMuc3RhcnRJbW1lZGlhdGVseSkge1xuXHQgICAgb2JqLnRJZCA9IHNldFRpbWVvdXQodG9nZ2xlSWRsZVN0YXRlLCBvYmoudGltZW91dCk7XG5cdH1cblxuICAgIC8vIGFzc3VtZSB0aGUgdXNlciBpcyBhY3RpdmUgZm9yIHRoZSBmaXJzdCB4IHNlY29uZHMuXG4gICAgJC5kYXRhKGVsZW0sJ2lkbGVUaW1lcicsXCJhY3RpdmVcIik7XG5cbiAgICAvLyBzdG9yZSBvdXIgaW5zdGFuY2Ugb24gdGhlIG9iamVjdFxuICAgICQuZGF0YShlbGVtLCdpZGxlVGltZXJPYmonLG9iaik7XG5cblxuXG59OyAvLyBlbmQgb2YgJC5pZGxlVGltZXIoKVxuXG5cbi8vIHYwLjkgQVBJIGZvciBkZWZpbmluZyBtdWx0aXBsZSB0aW1lcnMuXG4kLmZuLmlkbGVUaW1lciA9IGZ1bmN0aW9uKG5ld1RpbWVvdXQsb3B0cyl7XG5cdC8vIEFsbG93IG9taXNzaW9uIG9mIG9wdHMgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcblx0aWYgKCFvcHRzKSB7XG5cdFx0b3B0cyA9IHt9O1xuXHR9XG5cbiAgICBpZih0aGlzWzBdKXtcbiAgICAgICAgJC5pZGxlVGltZXIobmV3VGltZW91dCx0aGlzWzBdLG9wdHMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuXG59KShqUXVlcnkpO1xuIiwiLyohXG4gKiBCSURJIGVtYmVkZGluZyBzdXBwb3J0IGZvciBqUXVlcnkuaTE4blxuICpcbiAqIENvcHlyaWdodCAoQykgMjAxNSwgRGF2aWQgQ2hhblxuICpcbiAqIFRoaXMgY29kZSBpcyBkdWFsIGxpY2Vuc2VkIEdQTHYyIG9yIGxhdGVyIGFuZCBNSVQuIFlvdSBkb24ndCBoYXZlIHRvIGRvXG4gKiBhbnl0aGluZyBzcGVjaWFsIHRvIGNob29zZSBvbmUgbGljZW5zZSBvciB0aGUgb3RoZXIgYW5kIHlvdSBkb24ndCBoYXZlIHRvXG4gKiBub3RpZnkgYW55b25lIHdoaWNoIGxpY2Vuc2UgeW91IGFyZSB1c2luZy4gWW91IGFyZSBmcmVlIHRvIHVzZSB0aGlzIGNvZGVcbiAqIGluIGNvbW1lcmNpYWwgcHJvamVjdHMgYXMgbG9uZyBhcyB0aGUgY29weXJpZ2h0IGhlYWRlciBpcyBsZWZ0IGludGFjdC5cbiAqIFNlZSBmaWxlcyBHUEwtTElDRU5TRSBhbmQgTUlULUxJQ0VOU0UgZm9yIGRldGFpbHMuXG4gKlxuICogQGxpY2VuY2UgR05VIEdlbmVyYWwgUHVibGljIExpY2VuY2UgMi4wIG9yIGxhdGVyXG4gKiBAbGljZW5jZSBNSVQgTGljZW5zZVxuICovXG5cbiggZnVuY3Rpb24gKCAkICkge1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciBzdHJvbmdEaXJSZWdFeHA7XG5cblx0LyoqXG5cdCAqIE1hdGNoZXMgdGhlIGZpcnN0IHN0cm9uZyBkaXJlY3Rpb25hbGl0eSBjb2RlcG9pbnQ6XG5cdCAqIC0gaW4gZ3JvdXAgMSBpZiBpdCBpcyBMVFJcblx0ICogLSBpbiBncm91cCAyIGlmIGl0IGlzIFJUTFxuXHQgKiBEb2VzIG5vdCBtYXRjaCBpZiB0aGVyZSBpcyBubyBzdHJvbmcgZGlyZWN0aW9uYWxpdHkgY29kZXBvaW50LlxuXHQgKlxuXHQgKiBHZW5lcmF0ZWQgYnkgVW5pY29kZUpTIChzZWUgdG9vbHMvc3Ryb25nRGlyKSBmcm9tIHRoZSBVQ0Q7IHNlZVxuXHQgKiBodHRwczovL3BoYWJyaWNhdG9yLndpa2ltZWRpYS5vcmcvZGlmZnVzaW9uL0dVSlMvIC5cblx0ICovXG5cdHN0cm9uZ0RpclJlZ0V4cCA9IG5ldyBSZWdFeHAoXG5cdFx0Jyg/OicgK1xuXHRcdFx0JygnICtcblx0XHRcdFx0J1tcXHUwMDQxLVxcdTAwNWFcXHUwMDYxLVxcdTAwN2FcXHUwMGFhXFx1MDBiNVxcdTAwYmFcXHUwMGMwLVxcdTAwZDZcXHUwMGQ4LVxcdTAwZjZcXHUwMGY4LVxcdTAyYjhcXHUwMmJiLVxcdTAyYzFcXHUwMmQwXFx1MDJkMVxcdTAyZTAtXFx1MDJlNFxcdTAyZWVcXHUwMzcwLVxcdTAzNzNcXHUwMzc2XFx1MDM3N1xcdTAzN2EtXFx1MDM3ZFxcdTAzN2ZcXHUwMzg2XFx1MDM4OC1cXHUwMzhhXFx1MDM4Y1xcdTAzOGUtXFx1MDNhMVxcdTAzYTMtXFx1MDNmNVxcdTAzZjctXFx1MDQ4MlxcdTA0OGEtXFx1MDUyZlxcdTA1MzEtXFx1MDU1NlxcdTA1NTktXFx1MDU1ZlxcdTA1NjEtXFx1MDU4N1xcdTA1ODlcXHUwOTAzLVxcdTA5MzlcXHUwOTNiXFx1MDkzZC1cXHUwOTQwXFx1MDk0OS1cXHUwOTRjXFx1MDk0ZS1cXHUwOTUwXFx1MDk1OC1cXHUwOTYxXFx1MDk2NC1cXHUwOTgwXFx1MDk4MlxcdTA5ODNcXHUwOTg1LVxcdTA5OGNcXHUwOThmXFx1MDk5MFxcdTA5OTMtXFx1MDlhOFxcdTA5YWEtXFx1MDliMFxcdTA5YjJcXHUwOWI2LVxcdTA5YjlcXHUwOWJkLVxcdTA5YzBcXHUwOWM3XFx1MDljOFxcdTA5Y2JcXHUwOWNjXFx1MDljZVxcdTA5ZDdcXHUwOWRjXFx1MDlkZFxcdTA5ZGYtXFx1MDllMVxcdTA5ZTYtXFx1MDlmMVxcdTA5ZjQtXFx1MDlmYVxcdTBhMDNcXHUwYTA1LVxcdTBhMGFcXHUwYTBmXFx1MGExMFxcdTBhMTMtXFx1MGEyOFxcdTBhMmEtXFx1MGEzMFxcdTBhMzJcXHUwYTMzXFx1MGEzNVxcdTBhMzZcXHUwYTM4XFx1MGEzOVxcdTBhM2UtXFx1MGE0MFxcdTBhNTktXFx1MGE1Y1xcdTBhNWVcXHUwYTY2LVxcdTBhNmZcXHUwYTcyLVxcdTBhNzRcXHUwYTgzXFx1MGE4NS1cXHUwYThkXFx1MGE4Zi1cXHUwYTkxXFx1MGE5My1cXHUwYWE4XFx1MGFhYS1cXHUwYWIwXFx1MGFiMlxcdTBhYjNcXHUwYWI1LVxcdTBhYjlcXHUwYWJkLVxcdTBhYzBcXHUwYWM5XFx1MGFjYlxcdTBhY2NcXHUwYWQwXFx1MGFlMFxcdTBhZTFcXHUwYWU2LVxcdTBhZjBcXHUwYWY5XFx1MGIwMlxcdTBiMDNcXHUwYjA1LVxcdTBiMGNcXHUwYjBmXFx1MGIxMFxcdTBiMTMtXFx1MGIyOFxcdTBiMmEtXFx1MGIzMFxcdTBiMzJcXHUwYjMzXFx1MGIzNS1cXHUwYjM5XFx1MGIzZFxcdTBiM2VcXHUwYjQwXFx1MGI0N1xcdTBiNDhcXHUwYjRiXFx1MGI0Y1xcdTBiNTdcXHUwYjVjXFx1MGI1ZFxcdTBiNWYtXFx1MGI2MVxcdTBiNjYtXFx1MGI3N1xcdTBiODNcXHUwYjg1LVxcdTBiOGFcXHUwYjhlLVxcdTBiOTBcXHUwYjkyLVxcdTBiOTVcXHUwYjk5XFx1MGI5YVxcdTBiOWNcXHUwYjllXFx1MGI5ZlxcdTBiYTNcXHUwYmE0XFx1MGJhOC1cXHUwYmFhXFx1MGJhZS1cXHUwYmI5XFx1MGJiZVxcdTBiYmZcXHUwYmMxXFx1MGJjMlxcdTBiYzYtXFx1MGJjOFxcdTBiY2EtXFx1MGJjY1xcdTBiZDBcXHUwYmQ3XFx1MGJlNi1cXHUwYmYyXFx1MGMwMS1cXHUwYzAzXFx1MGMwNS1cXHUwYzBjXFx1MGMwZS1cXHUwYzEwXFx1MGMxMi1cXHUwYzI4XFx1MGMyYS1cXHUwYzM5XFx1MGMzZFxcdTBjNDEtXFx1MGM0NFxcdTBjNTgtXFx1MGM1YVxcdTBjNjBcXHUwYzYxXFx1MGM2Ni1cXHUwYzZmXFx1MGM3ZlxcdTBjODJcXHUwYzgzXFx1MGM4NS1cXHUwYzhjXFx1MGM4ZS1cXHUwYzkwXFx1MGM5Mi1cXHUwY2E4XFx1MGNhYS1cXHUwY2IzXFx1MGNiNS1cXHUwY2I5XFx1MGNiZC1cXHUwY2M0XFx1MGNjNi1cXHUwY2M4XFx1MGNjYVxcdTBjY2JcXHUwY2Q1XFx1MGNkNlxcdTBjZGVcXHUwY2UwXFx1MGNlMVxcdTBjZTYtXFx1MGNlZlxcdTBjZjFcXHUwY2YyXFx1MGQwMlxcdTBkMDNcXHUwZDA1LVxcdTBkMGNcXHUwZDBlLVxcdTBkMTBcXHUwZDEyLVxcdTBkM2FcXHUwZDNkLVxcdTBkNDBcXHUwZDQ2LVxcdTBkNDhcXHUwZDRhLVxcdTBkNGNcXHUwZDRlXFx1MGQ1N1xcdTBkNWYtXFx1MGQ2MVxcdTBkNjYtXFx1MGQ3NVxcdTBkNzktXFx1MGQ3ZlxcdTBkODJcXHUwZDgzXFx1MGQ4NS1cXHUwZDk2XFx1MGQ5YS1cXHUwZGIxXFx1MGRiMy1cXHUwZGJiXFx1MGRiZFxcdTBkYzAtXFx1MGRjNlxcdTBkY2YtXFx1MGRkMVxcdTBkZDgtXFx1MGRkZlxcdTBkZTYtXFx1MGRlZlxcdTBkZjItXFx1MGRmNFxcdTBlMDEtXFx1MGUzMFxcdTBlMzJcXHUwZTMzXFx1MGU0MC1cXHUwZTQ2XFx1MGU0Zi1cXHUwZTViXFx1MGU4MVxcdTBlODJcXHUwZTg0XFx1MGU4N1xcdTBlODhcXHUwZThhXFx1MGU4ZFxcdTBlOTQtXFx1MGU5N1xcdTBlOTktXFx1MGU5ZlxcdTBlYTEtXFx1MGVhM1xcdTBlYTVcXHUwZWE3XFx1MGVhYVxcdTBlYWJcXHUwZWFkLVxcdTBlYjBcXHUwZWIyXFx1MGViM1xcdTBlYmRcXHUwZWMwLVxcdTBlYzRcXHUwZWM2XFx1MGVkMC1cXHUwZWQ5XFx1MGVkYy1cXHUwZWRmXFx1MGYwMC1cXHUwZjE3XFx1MGYxYS1cXHUwZjM0XFx1MGYzNlxcdTBmMzhcXHUwZjNlLVxcdTBmNDdcXHUwZjQ5LVxcdTBmNmNcXHUwZjdmXFx1MGY4NVxcdTBmODgtXFx1MGY4Y1xcdTBmYmUtXFx1MGZjNVxcdTBmYzctXFx1MGZjY1xcdTBmY2UtXFx1MGZkYVxcdTEwMDAtXFx1MTAyY1xcdTEwMzFcXHUxMDM4XFx1MTAzYlxcdTEwM2NcXHUxMDNmLVxcdTEwNTdcXHUxMDVhLVxcdTEwNWRcXHUxMDYxLVxcdTEwNzBcXHUxMDc1LVxcdTEwODFcXHUxMDgzXFx1MTA4NFxcdTEwODctXFx1MTA4Y1xcdTEwOGUtXFx1MTA5Y1xcdTEwOWUtXFx1MTBjNVxcdTEwYzdcXHUxMGNkXFx1MTBkMC1cXHUxMjQ4XFx1MTI0YS1cXHUxMjRkXFx1MTI1MC1cXHUxMjU2XFx1MTI1OFxcdTEyNWEtXFx1MTI1ZFxcdTEyNjAtXFx1MTI4OFxcdTEyOGEtXFx1MTI4ZFxcdTEyOTAtXFx1MTJiMFxcdTEyYjItXFx1MTJiNVxcdTEyYjgtXFx1MTJiZVxcdTEyYzBcXHUxMmMyLVxcdTEyYzVcXHUxMmM4LVxcdTEyZDZcXHUxMmQ4LVxcdTEzMTBcXHUxMzEyLVxcdTEzMTVcXHUxMzE4LVxcdTEzNWFcXHUxMzYwLVxcdTEzN2NcXHUxMzgwLVxcdTEzOGZcXHUxM2EwLVxcdTEzZjVcXHUxM2Y4LVxcdTEzZmRcXHUxNDAxLVxcdTE2N2ZcXHUxNjgxLVxcdTE2OWFcXHUxNmEwLVxcdTE2ZjhcXHUxNzAwLVxcdTE3MGNcXHUxNzBlLVxcdTE3MTFcXHUxNzIwLVxcdTE3MzFcXHUxNzM1XFx1MTczNlxcdTE3NDAtXFx1MTc1MVxcdTE3NjAtXFx1MTc2Y1xcdTE3NmUtXFx1MTc3MFxcdTE3ODAtXFx1MTdiM1xcdTE3YjZcXHUxN2JlLVxcdTE3YzVcXHUxN2M3XFx1MTdjOFxcdTE3ZDQtXFx1MTdkYVxcdTE3ZGNcXHUxN2UwLVxcdTE3ZTlcXHUxODEwLVxcdTE4MTlcXHUxODIwLVxcdTE4NzdcXHUxODgwLVxcdTE4YThcXHUxOGFhXFx1MThiMC1cXHUxOGY1XFx1MTkwMC1cXHUxOTFlXFx1MTkyMy1cXHUxOTI2XFx1MTkyOS1cXHUxOTJiXFx1MTkzMFxcdTE5MzFcXHUxOTMzLVxcdTE5MzhcXHUxOTQ2LVxcdTE5NmRcXHUxOTcwLVxcdTE5NzRcXHUxOTgwLVxcdTE5YWJcXHUxOWIwLVxcdTE5YzlcXHUxOWQwLVxcdTE5ZGFcXHUxYTAwLVxcdTFhMTZcXHUxYTE5XFx1MWExYVxcdTFhMWUtXFx1MWE1NVxcdTFhNTdcXHUxYTYxXFx1MWE2M1xcdTFhNjRcXHUxYTZkLVxcdTFhNzJcXHUxYTgwLVxcdTFhODlcXHUxYTkwLVxcdTFhOTlcXHUxYWEwLVxcdTFhYWRcXHUxYjA0LVxcdTFiMzNcXHUxYjM1XFx1MWIzYlxcdTFiM2QtXFx1MWI0MVxcdTFiNDMtXFx1MWI0YlxcdTFiNTAtXFx1MWI2YVxcdTFiNzQtXFx1MWI3Y1xcdTFiODItXFx1MWJhMVxcdTFiYTZcXHUxYmE3XFx1MWJhYVxcdTFiYWUtXFx1MWJlNVxcdTFiZTdcXHUxYmVhLVxcdTFiZWNcXHUxYmVlXFx1MWJmMlxcdTFiZjNcXHUxYmZjLVxcdTFjMmJcXHUxYzM0XFx1MWMzNVxcdTFjM2ItXFx1MWM0OVxcdTFjNGQtXFx1MWM3ZlxcdTFjYzAtXFx1MWNjN1xcdTFjZDNcXHUxY2UxXFx1MWNlOS1cXHUxY2VjXFx1MWNlZS1cXHUxY2YzXFx1MWNmNVxcdTFjZjZcXHUxZDAwLVxcdTFkYmZcXHUxZTAwLVxcdTFmMTVcXHUxZjE4LVxcdTFmMWRcXHUxZjIwLVxcdTFmNDVcXHUxZjQ4LVxcdTFmNGRcXHUxZjUwLVxcdTFmNTdcXHUxZjU5XFx1MWY1YlxcdTFmNWRcXHUxZjVmLVxcdTFmN2RcXHUxZjgwLVxcdTFmYjRcXHUxZmI2LVxcdTFmYmNcXHUxZmJlXFx1MWZjMi1cXHUxZmM0XFx1MWZjNi1cXHUxZmNjXFx1MWZkMC1cXHUxZmQzXFx1MWZkNi1cXHUxZmRiXFx1MWZlMC1cXHUxZmVjXFx1MWZmMi1cXHUxZmY0XFx1MWZmNi1cXHUxZmZjXFx1MjAwZVxcdTIwNzFcXHUyMDdmXFx1MjA5MC1cXHUyMDljXFx1MjEwMlxcdTIxMDdcXHUyMTBhLVxcdTIxMTNcXHUyMTE1XFx1MjExOS1cXHUyMTFkXFx1MjEyNFxcdTIxMjZcXHUyMTI4XFx1MjEyYS1cXHUyMTJkXFx1MjEyZi1cXHUyMTM5XFx1MjEzYy1cXHUyMTNmXFx1MjE0NS1cXHUyMTQ5XFx1MjE0ZVxcdTIxNGZcXHUyMTYwLVxcdTIxODhcXHUyMzM2LVxcdTIzN2FcXHUyMzk1XFx1MjQ5Yy1cXHUyNGU5XFx1MjZhY1xcdTI4MDAtXFx1MjhmZlxcdTJjMDAtXFx1MmMyZVxcdTJjMzAtXFx1MmM1ZVxcdTJjNjAtXFx1MmNlNFxcdTJjZWItXFx1MmNlZVxcdTJjZjJcXHUyY2YzXFx1MmQwMC1cXHUyZDI1XFx1MmQyN1xcdTJkMmRcXHUyZDMwLVxcdTJkNjdcXHUyZDZmXFx1MmQ3MFxcdTJkODAtXFx1MmQ5NlxcdTJkYTAtXFx1MmRhNlxcdTJkYTgtXFx1MmRhZVxcdTJkYjAtXFx1MmRiNlxcdTJkYjgtXFx1MmRiZVxcdTJkYzAtXFx1MmRjNlxcdTJkYzgtXFx1MmRjZVxcdTJkZDAtXFx1MmRkNlxcdTJkZDgtXFx1MmRkZVxcdTMwMDUtXFx1MzAwN1xcdTMwMjEtXFx1MzAyOVxcdTMwMmVcXHUzMDJmXFx1MzAzMS1cXHUzMDM1XFx1MzAzOC1cXHUzMDNjXFx1MzA0MS1cXHUzMDk2XFx1MzA5ZC1cXHUzMDlmXFx1MzBhMS1cXHUzMGZhXFx1MzBmYy1cXHUzMGZmXFx1MzEwNS1cXHUzMTJkXFx1MzEzMS1cXHUzMThlXFx1MzE5MC1cXHUzMWJhXFx1MzFmMC1cXHUzMjFjXFx1MzIyMC1cXHUzMjRmXFx1MzI2MC1cXHUzMjdiXFx1MzI3Zi1cXHUzMmIwXFx1MzJjMC1cXHUzMmNiXFx1MzJkMC1cXHUzMmZlXFx1MzMwMC1cXHUzMzc2XFx1MzM3Yi1cXHUzM2RkXFx1MzNlMC1cXHUzM2ZlXFx1MzQwMC1cXHU0ZGI1XFx1NGUwMC1cXHU5ZmQ1XFx1YTAwMC1cXHVhNDhjXFx1YTRkMC1cXHVhNjBjXFx1YTYxMC1cXHVhNjJiXFx1YTY0MC1cXHVhNjZlXFx1YTY4MC1cXHVhNjlkXFx1YTZhMC1cXHVhNmVmXFx1YTZmMi1cXHVhNmY3XFx1YTcyMi1cXHVhNzg3XFx1YTc4OS1cXHVhN2FkXFx1YTdiMC1cXHVhN2I3XFx1YTdmNy1cXHVhODAxXFx1YTgwMy1cXHVhODA1XFx1YTgwNy1cXHVhODBhXFx1YTgwYy1cXHVhODI0XFx1YTgyN1xcdWE4MzAtXFx1YTgzN1xcdWE4NDAtXFx1YTg3M1xcdWE4ODAtXFx1YThjM1xcdWE4Y2UtXFx1YThkOVxcdWE4ZjItXFx1YThmZFxcdWE5MDAtXFx1YTkyNVxcdWE5MmUtXFx1YTk0NlxcdWE5NTJcXHVhOTUzXFx1YTk1Zi1cXHVhOTdjXFx1YTk4My1cXHVhOWIyXFx1YTliNFxcdWE5YjVcXHVhOWJhXFx1YTliYlxcdWE5YmQtXFx1YTljZFxcdWE5Y2YtXFx1YTlkOVxcdWE5ZGUtXFx1YTllNFxcdWE5ZTYtXFx1YTlmZVxcdWFhMDAtXFx1YWEyOFxcdWFhMmZcXHVhYTMwXFx1YWEzM1xcdWFhMzRcXHVhYTQwLVxcdWFhNDJcXHVhYTQ0LVxcdWFhNGJcXHVhYTRkXFx1YWE1MC1cXHVhYTU5XFx1YWE1Yy1cXHVhYTdiXFx1YWE3ZC1cXHVhYWFmXFx1YWFiMVxcdWFhYjVcXHVhYWI2XFx1YWFiOS1cXHVhYWJkXFx1YWFjMFxcdWFhYzJcXHVhYWRiLVxcdWFhZWJcXHVhYWVlLVxcdWFhZjVcXHVhYjAxLVxcdWFiMDZcXHVhYjA5LVxcdWFiMGVcXHVhYjExLVxcdWFiMTZcXHVhYjIwLVxcdWFiMjZcXHVhYjI4LVxcdWFiMmVcXHVhYjMwLVxcdWFiNjVcXHVhYjcwLVxcdWFiZTRcXHVhYmU2XFx1YWJlN1xcdWFiZTktXFx1YWJlY1xcdWFiZjAtXFx1YWJmOVxcdWFjMDAtXFx1ZDdhM1xcdWQ3YjAtXFx1ZDdjNlxcdWQ3Y2ItXFx1ZDdmYlxcdWUwMDAtXFx1ZmE2ZFxcdWZhNzAtXFx1ZmFkOVxcdWZiMDAtXFx1ZmIwNlxcdWZiMTMtXFx1ZmIxN1xcdWZmMjEtXFx1ZmYzYVxcdWZmNDEtXFx1ZmY1YVxcdWZmNjYtXFx1ZmZiZVxcdWZmYzItXFx1ZmZjN1xcdWZmY2EtXFx1ZmZjZlxcdWZmZDItXFx1ZmZkN1xcdWZmZGEtXFx1ZmZkY118XFx1ZDgwMFtcXHVkYzAwLVxcdWRjMGJdfFxcdWQ4MDBbXFx1ZGMwZC1cXHVkYzI2XXxcXHVkODAwW1xcdWRjMjgtXFx1ZGMzYV18XFx1ZDgwMFxcdWRjM2N8XFx1ZDgwMFxcdWRjM2R8XFx1ZDgwMFtcXHVkYzNmLVxcdWRjNGRdfFxcdWQ4MDBbXFx1ZGM1MC1cXHVkYzVkXXxcXHVkODAwW1xcdWRjODAtXFx1ZGNmYV18XFx1ZDgwMFxcdWRkMDB8XFx1ZDgwMFxcdWRkMDJ8XFx1ZDgwMFtcXHVkZDA3LVxcdWRkMzNdfFxcdWQ4MDBbXFx1ZGQzNy1cXHVkZDNmXXxcXHVkODAwW1xcdWRkZDAtXFx1ZGRmY118XFx1ZDgwMFtcXHVkZTgwLVxcdWRlOWNdfFxcdWQ4MDBbXFx1ZGVhMC1cXHVkZWQwXXxcXHVkODAwW1xcdWRmMDAtXFx1ZGYyM118XFx1ZDgwMFtcXHVkZjMwLVxcdWRmNGFdfFxcdWQ4MDBbXFx1ZGY1MC1cXHVkZjc1XXxcXHVkODAwW1xcdWRmODAtXFx1ZGY5ZF18XFx1ZDgwMFtcXHVkZjlmLVxcdWRmYzNdfFxcdWQ4MDBbXFx1ZGZjOC1cXHVkZmQ1XXxcXHVkODAxW1xcdWRjMDAtXFx1ZGM5ZF18XFx1ZDgwMVtcXHVkY2EwLVxcdWRjYTldfFxcdWQ4MDFbXFx1ZGQwMC1cXHVkZDI3XXxcXHVkODAxW1xcdWRkMzAtXFx1ZGQ2M118XFx1ZDgwMVxcdWRkNmZ8XFx1ZDgwMVtcXHVkZTAwLVxcdWRmMzZdfFxcdWQ4MDFbXFx1ZGY0MC1cXHVkZjU1XXxcXHVkODAxW1xcdWRmNjAtXFx1ZGY2N118XFx1ZDgwNFxcdWRjMDB8XFx1ZDgwNFtcXHVkYzAyLVxcdWRjMzddfFxcdWQ4MDRbXFx1ZGM0Ny1cXHVkYzRkXXxcXHVkODA0W1xcdWRjNjYtXFx1ZGM2Zl18XFx1ZDgwNFtcXHVkYzgyLVxcdWRjYjJdfFxcdWQ4MDRcXHVkY2I3fFxcdWQ4MDRcXHVkY2I4fFxcdWQ4MDRbXFx1ZGNiYi1cXHVkY2MxXXxcXHVkODA0W1xcdWRjZDAtXFx1ZGNlOF18XFx1ZDgwNFtcXHVkY2YwLVxcdWRjZjldfFxcdWQ4MDRbXFx1ZGQwMy1cXHVkZDI2XXxcXHVkODA0XFx1ZGQyY3xcXHVkODA0W1xcdWRkMzYtXFx1ZGQ0M118XFx1ZDgwNFtcXHVkZDUwLVxcdWRkNzJdfFxcdWQ4MDRbXFx1ZGQ3NC1cXHVkZDc2XXxcXHVkODA0W1xcdWRkODItXFx1ZGRiNV18XFx1ZDgwNFtcXHVkZGJmLVxcdWRkYzldfFxcdWQ4MDRcXHVkZGNkfFxcdWQ4MDRbXFx1ZGRkMC1cXHVkZGRmXXxcXHVkODA0W1xcdWRkZTEtXFx1ZGRmNF18XFx1ZDgwNFtcXHVkZTAwLVxcdWRlMTFdfFxcdWQ4MDRbXFx1ZGUxMy1cXHVkZTJlXXxcXHVkODA0XFx1ZGUzMnxcXHVkODA0XFx1ZGUzM3xcXHVkODA0XFx1ZGUzNXxcXHVkODA0W1xcdWRlMzgtXFx1ZGUzZF18XFx1ZDgwNFtcXHVkZTgwLVxcdWRlODZdfFxcdWQ4MDRcXHVkZTg4fFxcdWQ4MDRbXFx1ZGU4YS1cXHVkZThkXXxcXHVkODA0W1xcdWRlOGYtXFx1ZGU5ZF18XFx1ZDgwNFtcXHVkZTlmLVxcdWRlYTldfFxcdWQ4MDRbXFx1ZGViMC1cXHVkZWRlXXxcXHVkODA0W1xcdWRlZTAtXFx1ZGVlMl18XFx1ZDgwNFtcXHVkZWYwLVxcdWRlZjldfFxcdWQ4MDRcXHVkZjAyfFxcdWQ4MDRcXHVkZjAzfFxcdWQ4MDRbXFx1ZGYwNS1cXHVkZjBjXXxcXHVkODA0XFx1ZGYwZnxcXHVkODA0XFx1ZGYxMHxcXHVkODA0W1xcdWRmMTMtXFx1ZGYyOF18XFx1ZDgwNFtcXHVkZjJhLVxcdWRmMzBdfFxcdWQ4MDRcXHVkZjMyfFxcdWQ4MDRcXHVkZjMzfFxcdWQ4MDRbXFx1ZGYzNS1cXHVkZjM5XXxcXHVkODA0W1xcdWRmM2QtXFx1ZGYzZl18XFx1ZDgwNFtcXHVkZjQxLVxcdWRmNDRdfFxcdWQ4MDRcXHVkZjQ3fFxcdWQ4MDRcXHVkZjQ4fFxcdWQ4MDRbXFx1ZGY0Yi1cXHVkZjRkXXxcXHVkODA0XFx1ZGY1MHxcXHVkODA0XFx1ZGY1N3xcXHVkODA0W1xcdWRmNWQtXFx1ZGY2M118XFx1ZDgwNVtcXHVkYzgwLVxcdWRjYjJdfFxcdWQ4MDVcXHVkY2I5fFxcdWQ4MDVbXFx1ZGNiYi1cXHVkY2JlXXxcXHVkODA1XFx1ZGNjMXxcXHVkODA1W1xcdWRjYzQtXFx1ZGNjN118XFx1ZDgwNVtcXHVkY2QwLVxcdWRjZDldfFxcdWQ4MDVbXFx1ZGQ4MC1cXHVkZGIxXXxcXHVkODA1W1xcdWRkYjgtXFx1ZGRiYl18XFx1ZDgwNVxcdWRkYmV8XFx1ZDgwNVtcXHVkZGMxLVxcdWRkZGJdfFxcdWQ4MDVbXFx1ZGUwMC1cXHVkZTMyXXxcXHVkODA1XFx1ZGUzYnxcXHVkODA1XFx1ZGUzY3xcXHVkODA1XFx1ZGUzZXxcXHVkODA1W1xcdWRlNDEtXFx1ZGU0NF18XFx1ZDgwNVtcXHVkZTUwLVxcdWRlNTldfFxcdWQ4MDVbXFx1ZGU4MC1cXHVkZWFhXXxcXHVkODA1XFx1ZGVhY3xcXHVkODA1XFx1ZGVhZXxcXHVkODA1XFx1ZGVhZnxcXHVkODA1XFx1ZGViNnxcXHVkODA1W1xcdWRlYzAtXFx1ZGVjOV18XFx1ZDgwNVtcXHVkZjAwLVxcdWRmMTldfFxcdWQ4MDVcXHVkZjIwfFxcdWQ4MDVcXHVkZjIxfFxcdWQ4MDVcXHVkZjI2fFxcdWQ4MDVbXFx1ZGYzMC1cXHVkZjNmXXxcXHVkODA2W1xcdWRjYTAtXFx1ZGNmMl18XFx1ZDgwNlxcdWRjZmZ8XFx1ZDgwNltcXHVkZWMwLVxcdWRlZjhdfFxcdWQ4MDhbXFx1ZGMwMC1cXHVkZjk5XXxcXHVkODA5W1xcdWRjMDAtXFx1ZGM2ZV18XFx1ZDgwOVtcXHVkYzcwLVxcdWRjNzRdfFxcdWQ4MDlbXFx1ZGM4MC1cXHVkZDQzXXxcXHVkODBjW1xcdWRjMDAtXFx1ZGZmZl18XFx1ZDgwZFtcXHVkYzAwLVxcdWRjMmVdfFxcdWQ4MTFbXFx1ZGMwMC1cXHVkZTQ2XXxcXHVkODFhW1xcdWRjMDAtXFx1ZGUzOF18XFx1ZDgxYVtcXHVkZTQwLVxcdWRlNWVdfFxcdWQ4MWFbXFx1ZGU2MC1cXHVkZTY5XXxcXHVkODFhXFx1ZGU2ZXxcXHVkODFhXFx1ZGU2ZnxcXHVkODFhW1xcdWRlZDAtXFx1ZGVlZF18XFx1ZDgxYVxcdWRlZjV8XFx1ZDgxYVtcXHVkZjAwLVxcdWRmMmZdfFxcdWQ4MWFbXFx1ZGYzNy1cXHVkZjQ1XXxcXHVkODFhW1xcdWRmNTAtXFx1ZGY1OV18XFx1ZDgxYVtcXHVkZjViLVxcdWRmNjFdfFxcdWQ4MWFbXFx1ZGY2My1cXHVkZjc3XXxcXHVkODFhW1xcdWRmN2QtXFx1ZGY4Zl18XFx1ZDgxYltcXHVkZjAwLVxcdWRmNDRdfFxcdWQ4MWJbXFx1ZGY1MC1cXHVkZjdlXXxcXHVkODFiW1xcdWRmOTMtXFx1ZGY5Zl18XFx1ZDgyY1xcdWRjMDB8XFx1ZDgyY1xcdWRjMDF8XFx1ZDgyZltcXHVkYzAwLVxcdWRjNmFdfFxcdWQ4MmZbXFx1ZGM3MC1cXHVkYzdjXXxcXHVkODJmW1xcdWRjODAtXFx1ZGM4OF18XFx1ZDgyZltcXHVkYzkwLVxcdWRjOTldfFxcdWQ4MmZcXHVkYzljfFxcdWQ4MmZcXHVkYzlmfFxcdWQ4MzRbXFx1ZGMwMC1cXHVkY2Y1XXxcXHVkODM0W1xcdWRkMDAtXFx1ZGQyNl18XFx1ZDgzNFtcXHVkZDI5LVxcdWRkNjZdfFxcdWQ4MzRbXFx1ZGQ2YS1cXHVkZDcyXXxcXHVkODM0XFx1ZGQ4M3xcXHVkODM0XFx1ZGQ4NHxcXHVkODM0W1xcdWRkOGMtXFx1ZGRhOV18XFx1ZDgzNFtcXHVkZGFlLVxcdWRkZThdfFxcdWQ4MzRbXFx1ZGY2MC1cXHVkZjcxXXxcXHVkODM1W1xcdWRjMDAtXFx1ZGM1NF18XFx1ZDgzNVtcXHVkYzU2LVxcdWRjOWNdfFxcdWQ4MzVcXHVkYzllfFxcdWQ4MzVcXHVkYzlmfFxcdWQ4MzVcXHVkY2EyfFxcdWQ4MzVcXHVkY2E1fFxcdWQ4MzVcXHVkY2E2fFxcdWQ4MzVbXFx1ZGNhOS1cXHVkY2FjXXxcXHVkODM1W1xcdWRjYWUtXFx1ZGNiOV18XFx1ZDgzNVxcdWRjYmJ8XFx1ZDgzNVtcXHVkY2JkLVxcdWRjYzNdfFxcdWQ4MzVbXFx1ZGNjNS1cXHVkZDA1XXxcXHVkODM1W1xcdWRkMDctXFx1ZGQwYV18XFx1ZDgzNVtcXHVkZDBkLVxcdWRkMTRdfFxcdWQ4MzVbXFx1ZGQxNi1cXHVkZDFjXXxcXHVkODM1W1xcdWRkMWUtXFx1ZGQzOV18XFx1ZDgzNVtcXHVkZDNiLVxcdWRkM2VdfFxcdWQ4MzVbXFx1ZGQ0MC1cXHVkZDQ0XXxcXHVkODM1XFx1ZGQ0NnxcXHVkODM1W1xcdWRkNGEtXFx1ZGQ1MF18XFx1ZDgzNVtcXHVkZDUyLVxcdWRlYTVdfFxcdWQ4MzVbXFx1ZGVhOC1cXHVkZWRhXXxcXHVkODM1W1xcdWRlZGMtXFx1ZGYxNF18XFx1ZDgzNVtcXHVkZjE2LVxcdWRmNGVdfFxcdWQ4MzVbXFx1ZGY1MC1cXHVkZjg4XXxcXHVkODM1W1xcdWRmOGEtXFx1ZGZjMl18XFx1ZDgzNVtcXHVkZmM0LVxcdWRmY2JdfFxcdWQ4MzZbXFx1ZGMwMC1cXHVkZGZmXXxcXHVkODM2W1xcdWRlMzctXFx1ZGUzYV18XFx1ZDgzNltcXHVkZTZkLVxcdWRlNzRdfFxcdWQ4MzZbXFx1ZGU3Ni1cXHVkZTgzXXxcXHVkODM2W1xcdWRlODUtXFx1ZGU4Yl18XFx1ZDgzY1tcXHVkZDEwLVxcdWRkMmVdfFxcdWQ4M2NbXFx1ZGQzMC1cXHVkZDY5XXxcXHVkODNjW1xcdWRkNzAtXFx1ZGQ5YV18XFx1ZDgzY1tcXHVkZGU2LVxcdWRlMDJdfFxcdWQ4M2NbXFx1ZGUxMC1cXHVkZTNhXXxcXHVkODNjW1xcdWRlNDAtXFx1ZGU0OF18XFx1ZDgzY1xcdWRlNTB8XFx1ZDgzY1xcdWRlNTF8W1xcdWQ4NDAtXFx1ZDg2OF1bXFx1ZGMwMC1cXHVkZmZmXXxcXHVkODY5W1xcdWRjMDAtXFx1ZGVkNl18XFx1ZDg2OVtcXHVkZjAwLVxcdWRmZmZdfFtcXHVkODZhLVxcdWQ4NmNdW1xcdWRjMDAtXFx1ZGZmZl18XFx1ZDg2ZFtcXHVkYzAwLVxcdWRmMzRdfFxcdWQ4NmRbXFx1ZGY0MC1cXHVkZmZmXXxcXHVkODZlW1xcdWRjMDAtXFx1ZGMxZF18XFx1ZDg2ZVtcXHVkYzIwLVxcdWRmZmZdfFtcXHVkODZmLVxcdWQ4NzJdW1xcdWRjMDAtXFx1ZGZmZl18XFx1ZDg3M1tcXHVkYzAwLVxcdWRlYTFdfFxcdWQ4N2VbXFx1ZGMwMC1cXHVkZTFkXXxbXFx1ZGI4MC1cXHVkYmJlXVtcXHVkYzAwLVxcdWRmZmZdfFxcdWRiYmZbXFx1ZGMwMC1cXHVkZmZkXXxbXFx1ZGJjMC1cXHVkYmZlXVtcXHVkYzAwLVxcdWRmZmZdfFxcdWRiZmZbXFx1ZGMwMC1cXHVkZmZkXScgK1xuXHRcdFx0Jyl8KCcgK1xuXHRcdFx0XHQnW1xcdTA1OTBcXHUwNWJlXFx1MDVjMFxcdTA1YzNcXHUwNWM2XFx1MDVjOC1cXHUwNWZmXFx1MDdjMC1cXHUwN2VhXFx1MDdmNFxcdTA3ZjVcXHUwN2ZhLVxcdTA4MTVcXHUwODFhXFx1MDgyNFxcdTA4MjhcXHUwODJlLVxcdTA4NThcXHUwODVjLVxcdTA4OWZcXHUyMDBmXFx1ZmIxZFxcdWZiMWYtXFx1ZmIyOFxcdWZiMmEtXFx1ZmI0ZlxcdTA2MDhcXHUwNjBiXFx1MDYwZFxcdTA2MWItXFx1MDY0YVxcdTA2NmQtXFx1MDY2ZlxcdTA2NzEtXFx1MDZkNVxcdTA2ZTVcXHUwNmU2XFx1MDZlZVxcdTA2ZWZcXHUwNmZhLVxcdTA3MTBcXHUwNzEyLVxcdTA3MmZcXHUwNzRiLVxcdTA3YTVcXHUwN2IxLVxcdTA3YmZcXHUwOGEwLVxcdTA4ZTJcXHVmYjUwLVxcdWZkM2RcXHVmZDQwLVxcdWZkY2ZcXHVmZGYwLVxcdWZkZmNcXHVmZGZlXFx1ZmRmZlxcdWZlNzAtXFx1ZmVmZV18XFx1ZDgwMltcXHVkYzAwLVxcdWRkMWVdfFxcdWQ4MDJbXFx1ZGQyMC1cXHVkZTAwXXxcXHVkODAyXFx1ZGUwNHxcXHVkODAyW1xcdWRlMDctXFx1ZGUwYl18XFx1ZDgwMltcXHVkZTEwLVxcdWRlMzddfFxcdWQ4MDJbXFx1ZGUzYi1cXHVkZTNlXXxcXHVkODAyW1xcdWRlNDAtXFx1ZGVlNF18XFx1ZDgwMltcXHVkZWU3LVxcdWRmMzhdfFxcdWQ4MDJbXFx1ZGY0MC1cXHVkZmZmXXxcXHVkODAzW1xcdWRjMDAtXFx1ZGU1Zl18XFx1ZDgwM1tcXHVkZTdmLVxcdWRmZmZdfFxcdWQ4M2FbXFx1ZGMwMC1cXHVkY2NmXXxcXHVkODNhW1xcdWRjZDctXFx1ZGZmZl18XFx1ZDgzYltcXHVkYzAwLVxcdWRkZmZdfFxcdWQ4M2JbXFx1ZGYwMC1cXHVkZmZmXXxcXHVkODNiW1xcdWRmMDAtXFx1ZGZmZl18XFx1ZDgzYltcXHVkZjAwLVxcdWRmZmZdfFxcdWQ4M2JbXFx1ZGYwMC1cXHVkZmZmXXxcXHVkODNiW1xcdWRmMDAtXFx1ZGZmZl18XFx1ZDgzYltcXHVkZjAwLVxcdWRmZmZdfFxcdWQ4M2JbXFx1ZGYwMC1cXHVkZmZmXXxcXHVkODNiW1xcdWRmMDAtXFx1ZGZmZl18XFx1ZDgzYltcXHVkZjAwLVxcdWRmZmZdfFxcdWQ4M2JbXFx1ZGYwMC1cXHVkZmZmXXxcXHVkODNiW1xcdWRmMDAtXFx1ZGZmZl18XFx1ZDgzYltcXHVkZjAwLVxcdWRmZmZdfFxcdWQ4M2JbXFx1ZGYwMC1cXHVkZmZmXXxcXHVkODNiW1xcdWRlMDAtXFx1ZGVlZl18XFx1ZDgzYltcXHVkZWYyLVxcdWRlZmZdJyArXG5cdFx0XHQnKScgK1xuXHRcdCcpJ1xuXHQpO1xuXG5cdC8qKlxuXHQgKiBHZXRzIGRpcmVjdGlvbmFsaXR5IG9mIHRoZSBmaXJzdCBzdHJvbmdseSBkaXJlY3Rpb25hbCBjb2RlcG9pbnRcblx0ICpcblx0ICogVGhpcyBpcyB0aGUgcnVsZSB0aGUgQklESSBhbGdvcml0aG0gdXNlcyB0byBkZXRlcm1pbmUgdGhlIGRpcmVjdGlvbmFsaXR5IG9mXG5cdCAqIHBhcmFncmFwaHMgKCBodHRwOi8vdW5pY29kZS5vcmcvcmVwb3J0cy90cjkvI1RoZV9QYXJhZ3JhcGhfTGV2ZWwgKSBhbmRcblx0ICogRlNJIGlzb2xhdGVzICggaHR0cDovL3VuaWNvZGUub3JnL3JlcG9ydHMvdHI5LyNFeHBsaWNpdF9EaXJlY3Rpb25hbF9Jc29sYXRlcyApLlxuXHQgKlxuXHQgKiBUT0RPOiBEb2VzIG5vdCBoYW5kbGUgQklESSBjb250cm9sIGNoYXJhY3RlcnMgaW5zaWRlIHRoZSB0ZXh0LlxuXHQgKiBUT0RPOiBEb2VzIG5vdCBoYW5kbGUgdW5hbGxvY2F0ZWQgY2hhcmFjdGVycy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGhlIHRleHQgZnJvbSB3aGljaCB0byBleHRyYWN0IGluaXRpYWwgZGlyZWN0aW9uYWxpdHkuXG5cdCAqIEByZXR1cm4ge3N0cmluZ30gRGlyZWN0aW9uYWxpdHkgKGVpdGhlciAnbHRyJyBvciAncnRsJylcblx0ICovXG5cdGZ1bmN0aW9uIHN0cm9uZ0RpckZyb21Db250ZW50KCB0ZXh0ICkge1xuXHRcdHZhciBtID0gdGV4dC5tYXRjaCggc3Ryb25nRGlyUmVnRXhwICk7XG5cdFx0aWYgKCAhbSApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRpZiAoIG1bIDIgXSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0cmV0dXJuICdsdHInO1xuXHRcdH1cblx0XHRyZXR1cm4gJ3J0bCc7XG5cdH1cblxuXHQkLmV4dGVuZCggJC5pMThuLnBhcnNlci5lbWl0dGVyLCB7XG5cdFx0LyoqXG5cdFx0ICogV3JhcHMgYXJndW1lbnQgd2l0aCB1bmljb2RlIGNvbnRyb2wgY2hhcmFjdGVycyBmb3IgZGlyZWN0aW9uYWxpdHkgc2FmZXR5XG5cdFx0ICpcblx0XHQgKiBUaGlzIHNvbHZlcyB0aGUgcHJvYmxlbSB3aGVyZSBkaXJlY3Rpb25hbGl0eS1uZXV0cmFsIGNoYXJhY3RlcnMgYXQgdGhlIGVkZ2Ugb2Zcblx0XHQgKiB0aGUgYXJndW1lbnQgc3RyaW5nIGdldCBpbnRlcnByZXRlZCB3aXRoIHRoZSB3cm9uZyBkaXJlY3Rpb25hbGl0eSBmcm9tIHRoZVxuXHRcdCAqIGVuY2xvc2luZyBjb250ZXh0LCBnaXZpbmcgcmVuZGVyaW5ncyB0aGF0IGxvb2sgY29ycnVwdGVkIGxpa2UgXCIoQmVuXyhXTUZcIi5cblx0XHQgKlxuXHRcdCAqIFRoZSB3cmFwcGluZyBpcyBMUkUuLi5QREYgb3IgUkxFLi4uUERGLCBkZXBlbmRpbmcgb24gdGhlIGRldGVjdGVkXG5cdFx0ICogZGlyZWN0aW9uYWxpdHkgb2YgdGhlIGFyZ3VtZW50IHN0cmluZywgdXNpbmcgdGhlIEJJREkgYWxnb3JpdGhtJ3Mgb3duIFwiRmlyc3Rcblx0XHQgKiBzdHJvbmcgZGlyZWN0aW9uYWwgY29kZXBvaW50XCIgcnVsZS4gRXNzZW50aWFsbHksIHRoaXMgd29ya3Mgcm91bmQgdGhlIGZhY3QgdGhhdFxuXHRcdCAqIHRoZXJlIGlzIG5vIGVtYmVkZGluZyBlcXVpdmFsZW50IG9mIFUrMjA2OCBGU0kgKGlzb2xhdGlvbiB3aXRoIGhldXJpc3RpY1xuXHRcdCAqIGRpcmVjdGlvbiBpbmZlcmVuY2UpLiBUaGUgbGF0dGVyIGlzIGNsZWFuZXIgYnV0IHN0aWxsIG5vdCB3aWRlbHkgc3VwcG9ydGVkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmdbXX0gbm9kZXMgVGhlIHRleHQgbm9kZXMgZnJvbSB3aGljaCB0byB0YWtlIHRoZSBmaXJzdCBpdGVtLlxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ30gV3JhcHBlZCBTdHJpbmcgb2YgY29udGVudCBhcyBuZWVkZWQuXG5cdFx0ICovXG5cdFx0YmlkaTogZnVuY3Rpb24gKCBub2RlcyApIHtcblx0XHRcdHZhciBkaXIgPSBzdHJvbmdEaXJGcm9tQ29udGVudCggbm9kZXNbIDAgXSApO1xuXHRcdFx0aWYgKCBkaXIgPT09ICdsdHInICkge1xuXHRcdFx0XHQvLyBXcmFwIGluIExFRlQtVE8tUklHSFQgRU1CRURESU5HIC4uLiBQT1AgRElSRUNUSU9OQUwgRk9STUFUVElOR1xuXHRcdFx0XHRyZXR1cm4gJ1xcdTIwMkEnICsgbm9kZXNbIDAgXSArICdcXHUyMDJDJztcblx0XHRcdH1cblx0XHRcdGlmICggZGlyID09PSAncnRsJyApIHtcblx0XHRcdFx0Ly8gV3JhcCBpbiBSSUdIVC1UTy1MRUZUIEVNQkVERElORyAuLi4gUE9QIERJUkVDVElPTkFMIEZPUk1BVFRJTkdcblx0XHRcdFx0cmV0dXJuICdcXHUyMDJCJyArIG5vZGVzWyAwIF0gKyAnXFx1MjAyQyc7XG5cdFx0XHR9XG5cdFx0XHQvLyBObyBzdHJvbmcgZGlyZWN0aW9uYWxpdHk6IGRvIG5vdCB3cmFwXG5cdFx0XHRyZXR1cm4gbm9kZXNbIDAgXTtcblx0XHR9XG5cdH0gKTtcbn0oIGpRdWVyeSApICk7XG4iLCIvKiFcbiAqIGpRdWVyeSBJbnRlcm5hdGlvbmFsaXphdGlvbiBsaWJyYXJ5XG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDExLTIwMTMgU2FudGhvc2ggVGhvdHRpbmdhbCwgTmVpbCBLYW5kYWxnYW9ua2FyXG4gKlxuICoganF1ZXJ5LmkxOG4gaXMgZHVhbCBsaWNlbnNlZCBHUEx2MiBvciBsYXRlciBhbmQgTUlULiBZb3UgZG9uJ3QgaGF2ZSB0byBkb1xuICogYW55dGhpbmcgc3BlY2lhbCB0byBjaG9vc2Ugb25lIGxpY2Vuc2Ugb3IgdGhlIG90aGVyIGFuZCB5b3UgZG9uJ3QgaGF2ZSB0b1xuICogbm90aWZ5IGFueW9uZSB3aGljaCBsaWNlbnNlIHlvdSBhcmUgdXNpbmcuIFlvdSBhcmUgZnJlZSB0byB1c2VcbiAqIFVuaXZlcnNhbExhbmd1YWdlU2VsZWN0b3IgaW4gY29tbWVyY2lhbCBwcm9qZWN0cyBhcyBsb25nIGFzIHRoZSBjb3B5cmlnaHRcbiAqIGhlYWRlciBpcyBsZWZ0IGludGFjdC4gU2VlIGZpbGVzIEdQTC1MSUNFTlNFIGFuZCBNSVQtTElDRU5TRSBmb3IgZGV0YWlscy5cbiAqXG4gKiBAbGljZW5jZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5jZSAyLjAgb3IgbGF0ZXJcbiAqIEBsaWNlbmNlIE1JVCBMaWNlbnNlXG4gKi9cblxuKCBmdW5jdGlvbiAoICQgKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgTWVzc2FnZVBhcnNlckVtaXR0ZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5sYW5ndWFnZSA9ICQuaTE4bi5sYW5ndWFnZXNbIFN0cmluZy5sb2NhbGUgXSB8fCAkLmkxOG4ubGFuZ3VhZ2VzWyAnZGVmYXVsdCcgXTtcblx0fTtcblxuXHRNZXNzYWdlUGFyc2VyRW1pdHRlci5wcm90b3R5cGUgPSB7XG5cdFx0Y29uc3RydWN0b3I6IE1lc3NhZ2VQYXJzZXJFbWl0dGVyLFxuXG5cdFx0LyoqXG5cdFx0ICogKFdlIHB1dCB0aGlzIG1ldGhvZCBkZWZpbml0aW9uIGhlcmUsIGFuZCBub3QgaW4gcHJvdG90eXBlLCB0byBtYWtlXG5cdFx0ICogc3VyZSBpdCdzIG5vdCBvdmVyd3JpdHRlbiBieSBhbnkgbWFnaWMuKSBXYWxrIGVudGlyZSBub2RlIHN0cnVjdHVyZSxcblx0XHQgKiBhcHBseWluZyByZXBsYWNlbWVudHMgYW5kIHRlbXBsYXRlIGZ1bmN0aW9ucyB3aGVuIGFwcHJvcHJpYXRlXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge01peGVkfSBub2RlIGFic3RyYWN0IHN5bnRheCB0cmVlICh0b3Agbm9kZSBvciBzdWJub2RlKVxuXHRcdCAqIEBwYXJhbSB7QXJyYXl9IHJlcGxhY2VtZW50cyBmb3IgJDEsICQyLCAuLi4gJG5cblx0XHQgKiBAcmV0dXJuIHtNaXhlZH0gc2luZ2xlLXN0cmluZyBub2RlIG9yIGFycmF5IG9mIG5vZGVzIHN1aXRhYmxlIGZvclxuXHRcdCAqICBqUXVlcnkgYXBwZW5kaW5nLlxuXHRcdCAqL1xuXHRcdGVtaXQ6IGZ1bmN0aW9uICggbm9kZSwgcmVwbGFjZW1lbnRzICkge1xuXHRcdFx0dmFyIHJldCwgc3Vibm9kZXMsIG9wZXJhdGlvbixcblx0XHRcdFx0bWVzc2FnZVBhcnNlckVtaXR0ZXIgPSB0aGlzO1xuXG5cdFx0XHRzd2l0Y2ggKCB0eXBlb2Ygbm9kZSApIHtcblx0XHRcdFx0Y2FzZSAnc3RyaW5nJzpcblx0XHRcdFx0Y2FzZSAnbnVtYmVyJzpcblx0XHRcdFx0XHRyZXQgPSBub2RlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdvYmplY3QnOlxuXHRcdFx0XHQvLyBub2RlIGlzIGFuIGFycmF5IG9mIG5vZGVzXG5cdFx0XHRcdFx0c3Vibm9kZXMgPSAkLm1hcCggbm9kZS5zbGljZSggMSApLCBmdW5jdGlvbiAoIG4gKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbWVzc2FnZVBhcnNlckVtaXR0ZXIuZW1pdCggbiwgcmVwbGFjZW1lbnRzICk7XG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdFx0b3BlcmF0aW9uID0gbm9kZVsgMCBdLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRcdFx0XHRpZiAoIHR5cGVvZiBtZXNzYWdlUGFyc2VyRW1pdHRlclsgb3BlcmF0aW9uIF0gPT09ICdmdW5jdGlvbicgKSB7XG5cdFx0XHRcdFx0XHRyZXQgPSBtZXNzYWdlUGFyc2VyRW1pdHRlclsgb3BlcmF0aW9uIF0oIHN1Ym5vZGVzLCByZXBsYWNlbWVudHMgKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAndW5rbm93biBvcGVyYXRpb24gXCInICsgb3BlcmF0aW9uICsgJ1wiJyApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd1bmRlZmluZWQnOlxuXHRcdFx0XHQvLyBQYXJzaW5nIHRoZSBlbXB0eSBzdHJpbmcgKGFzIGFuIGVudGlyZSBleHByZXNzaW9uLCBvciBhcyBhXG5cdFx0XHRcdC8vIHBhcmFtRXhwcmVzc2lvbiBpbiBhIHRlbXBsYXRlKSByZXN1bHRzIGluIHVuZGVmaW5lZFxuXHRcdFx0XHQvLyBQZXJoYXBzIGEgbW9yZSBjbGV2ZXIgcGFyc2VyIGNhbiBkZXRlY3QgdGhpcywgYW5kIHJldHVybiB0aGVcblx0XHRcdFx0Ly8gZW1wdHkgc3RyaW5nPyBPciBpcyB0aGF0IHVzZWZ1bCBpbmZvcm1hdGlvbj9cblx0XHRcdFx0Ly8gVGhlIGxvZ2ljYWwgdGhpbmcgaXMgcHJvYmFibHkgdG8gcmV0dXJuIHRoZSBlbXB0eSBzdHJpbmcgaGVyZVxuXHRcdFx0XHQvLyB3aGVuIHdlIGVuY291bnRlciB1bmRlZmluZWQuXG5cdFx0XHRcdFx0cmV0ID0gJyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAndW5leHBlY3RlZCB0eXBlIGluIEFTVDogJyArIHR5cGVvZiBub2RlICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFBhcnNpbmcgaGFzIGJlZW4gYXBwbGllZCBkZXB0aC1maXJzdCB3ZSBjYW4gYXNzdW1lIHRoYXQgYWxsIG5vZGVzXG5cdFx0ICogaGVyZSBhcmUgc2luZ2xlIG5vZGVzIE11c3QgcmV0dXJuIGEgc2luZ2xlIG5vZGUgdG8gcGFyZW50cyAtLSBhXG5cdFx0ICogalF1ZXJ5IHdpdGggc3ludGhldGljIHNwYW4gSG93ZXZlciwgdW53cmFwIGFueSBvdGhlciBzeW50aGV0aWMgc3BhbnNcblx0XHQgKiBpbiBvdXIgY2hpbGRyZW4gYW5kIHBhc3MgdGhlbSB1cHdhcmRzXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBub2RlcyBNaXhlZCwgc29tZSBzaW5nbGUgbm9kZXMsIHNvbWUgYXJyYXlzIG9mIG5vZGVzLlxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ31cblx0XHQgKi9cblx0XHRjb25jYXQ6IGZ1bmN0aW9uICggbm9kZXMgKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gJyc7XG5cblx0XHRcdCQuZWFjaCggbm9kZXMsIGZ1bmN0aW9uICggaSwgbm9kZSApIHtcblx0XHRcdFx0Ly8gc3RyaW5ncywgaW50ZWdlcnMsIGFueXRoaW5nIGVsc2Vcblx0XHRcdFx0cmVzdWx0ICs9IG5vZGU7XG5cdFx0XHR9ICk7XG5cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFJldHVybiBlc2NhcGVkIHJlcGxhY2VtZW50IG9mIGNvcnJlY3QgaW5kZXgsIG9yIHN0cmluZyBpZlxuXHRcdCAqIHVuYXZhaWxhYmxlLiBOb3RlIHRoYXQgd2UgZXhwZWN0IHRoZSBwYXJzZWQgcGFyYW1ldGVyIHRvIGJlXG5cdFx0ICogemVyby1iYXNlZC4gaS5lLiAkMSBzaG91bGQgaGF2ZSBiZWNvbWUgWyAwIF0uIGlmIHRoZSBzcGVjaWZpZWRcblx0XHQgKiBwYXJhbWV0ZXIgaXMgbm90IGZvdW5kIHJldHVybiB0aGUgc2FtZSBzdHJpbmcgKGUuZy4gXCIkOTlcIiAtPlxuXHRcdCAqIHBhcmFtZXRlciA5OCAtPiBub3QgZm91bmQgLT4gcmV0dXJuIFwiJDk5XCIgKSBUT0RPIHRocm93IGVycm9yIGlmXG5cdFx0ICogbm9kZXMubGVuZ3RoID4gMSA/XG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBub2RlcyBPbmUgZWxlbWVudCwgaW50ZWdlciwgbiA+PSAwXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gcmVwbGFjZW1lbnRzIGZvciAkMSwgJDIsIC4uLiAkblxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ30gcmVwbGFjZW1lbnRcblx0XHQgKi9cblx0XHRyZXBsYWNlOiBmdW5jdGlvbiAoIG5vZGVzLCByZXBsYWNlbWVudHMgKSB7XG5cdFx0XHR2YXIgaW5kZXggPSBwYXJzZUludCggbm9kZXNbIDAgXSwgMTAgKTtcblxuXHRcdFx0aWYgKCBpbmRleCA8IHJlcGxhY2VtZW50cy5sZW5ndGggKSB7XG5cdFx0XHRcdC8vIHJlcGxhY2VtZW50IGlzIG5vdCBhIHN0cmluZywgZG9uJ3QgdG91Y2ghXG5cdFx0XHRcdHJldHVybiByZXBsYWNlbWVudHNbIGluZGV4IF07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBpbmRleCBub3QgZm91bmQsIGZhbGxiYWNrIHRvIGRpc3BsYXlpbmcgdmFyaWFibGVcblx0XHRcdFx0cmV0dXJuICckJyArICggaW5kZXggKyAxICk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFRyYW5zZm9ybSBwYXJzZWQgc3RydWN0dXJlIGludG8gcGx1cmFsaXphdGlvbiBuLmIuIFRoZSBmaXJzdCBub2RlIG1heVxuXHRcdCAqIGJlIGEgbm9uLWludGVnZXIgKGZvciBpbnN0YW5jZSwgYSBzdHJpbmcgcmVwcmVzZW50aW5nIGFuIEFyYWJpY1xuXHRcdCAqIG51bWJlcikuIFNvIGNvbnZlcnQgaXQgYmFjayB3aXRoIHRoZSBjdXJyZW50IGxhbmd1YWdlJ3Ncblx0XHQgKiBjb252ZXJ0TnVtYmVyLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gbm9kZXMgTGlzdCBbIHtTdHJpbmd8TnVtYmVyfSwge1N0cmluZ30sIHtTdHJpbmd9IC4uLiBdXG5cdFx0ICogQHJldHVybiB7c3RyaW5nfSBzZWxlY3RlZCBwbHVyYWxpemVkIGZvcm0gYWNjb3JkaW5nIHRvIGN1cnJlbnRcblx0XHQgKiAgbGFuZ3VhZ2UuXG5cdFx0ICovXG5cdFx0cGx1cmFsOiBmdW5jdGlvbiAoIG5vZGVzICkge1xuXHRcdFx0dmFyIGNvdW50ID0gcGFyc2VGbG9hdCggdGhpcy5sYW5ndWFnZS5jb252ZXJ0TnVtYmVyKCBub2Rlc1sgMCBdLCAxMCApICksXG5cdFx0XHRcdGZvcm1zID0gbm9kZXMuc2xpY2UoIDEgKTtcblxuXHRcdFx0cmV0dXJuIGZvcm1zLmxlbmd0aCA/IHRoaXMubGFuZ3VhZ2UuY29udmVydFBsdXJhbCggY291bnQsIGZvcm1zICkgOiAnJztcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogVHJhbnNmb3JtIHBhcnNlZCBzdHJ1Y3R1cmUgaW50byBnZW5kZXIgVXNhZ2Vcblx0XHQgKiB7e2dlbmRlcjpnZW5kZXJ8bWFzY3VsaW5lfGZlbWluaW5lfG5ldXRyYWx9fS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7QXJyYXl9IG5vZGVzIExpc3QgWyB7U3RyaW5nfSwge1N0cmluZ30sIHtTdHJpbmd9ICwge1N0cmluZ30gXVxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ30gc2VsZWN0ZWQgZ2VuZGVyIGZvcm0gYWNjb3JkaW5nIHRvIGN1cnJlbnQgbGFuZ3VhZ2Vcblx0XHQgKi9cblx0XHRnZW5kZXI6IGZ1bmN0aW9uICggbm9kZXMgKSB7XG5cdFx0XHR2YXIgZ2VuZGVyID0gbm9kZXNbIDAgXSxcblx0XHRcdFx0Zm9ybXMgPSBub2Rlcy5zbGljZSggMSApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5sYW5ndWFnZS5nZW5kZXIoIGdlbmRlciwgZm9ybXMgKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogVHJhbnNmb3JtIHBhcnNlZCBzdHJ1Y3R1cmUgaW50byBncmFtbWFyIGNvbnZlcnNpb24uIEludm9rZWQgYnlcblx0XHQgKiBwdXR0aW5nIHt7Z3JhbW1hcjpmb3JtfHdvcmR9fSBpbiBhIG1lc3NhZ2Vcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7QXJyYXl9IG5vZGVzIExpc3QgW3tHcmFtbWFyIGNhc2UgZWc6IGdlbml0aXZlfSwge1N0cmluZyB3b3JkfV1cblx0XHQgKiBAcmV0dXJuIHtzdHJpbmd9IHNlbGVjdGVkIGdyYW1tYXRpY2FsIGZvcm0gYWNjb3JkaW5nIHRvIGN1cnJlbnRcblx0XHQgKiAgbGFuZ3VhZ2UuXG5cdFx0ICovXG5cdFx0Z3JhbW1hcjogZnVuY3Rpb24gKCBub2RlcyApIHtcblx0XHRcdHZhciBmb3JtID0gbm9kZXNbIDAgXSxcblx0XHRcdFx0d29yZCA9IG5vZGVzWyAxIF07XG5cblx0XHRcdHJldHVybiB3b3JkICYmIGZvcm0gJiYgdGhpcy5sYW5ndWFnZS5jb252ZXJ0R3JhbW1hciggd29yZCwgZm9ybSApO1xuXHRcdH1cblx0fTtcblxuXHQkLmV4dGVuZCggJC5pMThuLnBhcnNlci5lbWl0dGVyLCBuZXcgTWVzc2FnZVBhcnNlckVtaXR0ZXIoKSApO1xufSggalF1ZXJ5ICkgKTtcbiIsIi8qIVxuICogalF1ZXJ5IEludGVybmF0aW9uYWxpemF0aW9uIGxpYnJhcnlcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTIgU2FudGhvc2ggVGhvdHRpbmdhbFxuICpcbiAqIGpxdWVyeS5pMThuIGlzIGR1YWwgbGljZW5zZWQgR1BMdjIgb3IgbGF0ZXIgYW5kIE1JVC4gWW91IGRvbid0IGhhdmUgdG8gZG8gYW55dGhpbmcgc3BlY2lhbCB0b1xuICogY2hvb3NlIG9uZSBsaWNlbnNlIG9yIHRoZSBvdGhlciBhbmQgeW91IGRvbid0IGhhdmUgdG8gbm90aWZ5IGFueW9uZSB3aGljaCBsaWNlbnNlIHlvdSBhcmUgdXNpbmcuXG4gKiBZb3UgYXJlIGZyZWUgdG8gdXNlIFVuaXZlcnNhbExhbmd1YWdlU2VsZWN0b3IgaW4gY29tbWVyY2lhbCBwcm9qZWN0cyBhcyBsb25nIGFzIHRoZSBjb3B5cmlnaHRcbiAqIGhlYWRlciBpcyBsZWZ0IGludGFjdC4gU2VlIGZpbGVzIEdQTC1MSUNFTlNFIGFuZCBNSVQtTElDRU5TRSBmb3IgZGV0YWlscy5cbiAqXG4gKiBAbGljZW5jZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5jZSAyLjAgb3IgbGF0ZXJcbiAqIEBsaWNlbmNlIE1JVCBMaWNlbnNlXG4gKi9cbiggZnVuY3Rpb24gKCAkICkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0JC5pMThuID0gJC5pMThuIHx8IHt9O1xuXHQkLmV4dGVuZCggJC5pMThuLmZhbGxiYWNrcywge1xuXHRcdGFiOiBbICdydScgXSxcblx0XHRhY2U6IFsgJ2lkJyBdLFxuXHRcdGFsbjogWyAnc3EnIF0sXG5cdFx0Ly8gTm90IHNvIHN0YW5kYXJkIC0gYWxzIGlzIHN1cHBvc2VkIHRvIGJlIFRvc2sgQWxiYW5pYW4sXG5cdFx0Ly8gYnV0IGluIFdpa2lwZWRpYSBpdCdzIHVzZWQgZm9yIGEgR2VybWFuaWMgbGFuZ3VhZ2UuXG5cdFx0YWxzOiBbICdnc3cnLCAnZGUnIF0sXG5cdFx0YW46IFsgJ2VzJyBdLFxuXHRcdGFucDogWyAnaGknIF0sXG5cdFx0YXJuOiBbICdlcycgXSxcblx0XHRhcno6IFsgJ2FyJyBdLFxuXHRcdGF2OiBbICdydScgXSxcblx0XHRheTogWyAnZXMnIF0sXG5cdFx0YmE6IFsgJ3J1JyBdLFxuXHRcdGJhcjogWyAnZGUnIF0sXG5cdFx0J2JhdC1zbWcnOiBbICdzZ3MnLCAnbHQnIF0sXG5cdFx0YmNjOiBbICdmYScgXSxcblx0XHQnYmUteC1vbGQnOiBbICdiZS10YXJhc2snIF0sXG5cdFx0Ymg6IFsgJ2JobycgXSxcblx0XHRiam46IFsgJ2lkJyBdLFxuXHRcdGJtOiBbICdmcicgXSxcblx0XHRicHk6IFsgJ2JuJyBdLFxuXHRcdGJxaTogWyAnZmEnIF0sXG5cdFx0YnVnOiBbICdpZCcgXSxcblx0XHQnY2JrLXphbSc6IFsgJ2VzJyBdLFxuXHRcdGNlOiBbICdydScgXSxcblx0XHRjcmg6IFsgJ2NyaC1sYXRuJyBdLFxuXHRcdCdjcmgtY3lybCc6IFsgJ3J1JyBdLFxuXHRcdGNzYjogWyAncGwnIF0sXG5cdFx0Y3Y6IFsgJ3J1JyBdLFxuXHRcdCdkZS1hdCc6IFsgJ2RlJyBdLFxuXHRcdCdkZS1jaCc6IFsgJ2RlJyBdLFxuXHRcdCdkZS1mb3JtYWwnOiBbICdkZScgXSxcblx0XHRkc2I6IFsgJ2RlJyBdLFxuXHRcdGR0cDogWyAnbXMnIF0sXG5cdFx0ZWdsOiBbICdpdCcgXSxcblx0XHRlbWw6IFsgJ2l0JyBdLFxuXHRcdGZmOiBbICdmcicgXSxcblx0XHRmaXQ6IFsgJ2ZpJyBdLFxuXHRcdCdmaXUtdnJvJzogWyAndnJvJywgJ2V0JyBdLFxuXHRcdGZyYzogWyAnZnInIF0sXG5cdFx0ZnJwOiBbICdmcicgXSxcblx0XHRmcnI6IFsgJ2RlJyBdLFxuXHRcdGZ1cjogWyAnaXQnIF0sXG5cdFx0Z2FnOiBbICd0cicgXSxcblx0XHRnYW46IFsgJ2dhbi1oYW50JywgJ3poLWhhbnQnLCAnemgtaGFucycgXSxcblx0XHQnZ2FuLWhhbnMnOiBbICd6aC1oYW5zJyBdLFxuXHRcdCdnYW4taGFudCc6IFsgJ3poLWhhbnQnLCAnemgtaGFucycgXSxcblx0XHRnbDogWyAncHQnIF0sXG5cdFx0Z2xrOiBbICdmYScgXSxcblx0XHRnbjogWyAnZXMnIF0sXG5cdFx0Z3N3OiBbICdkZScgXSxcblx0XHRoaWY6IFsgJ2hpZi1sYXRuJyBdLFxuXHRcdGhzYjogWyAnZGUnIF0sXG5cdFx0aHQ6IFsgJ2ZyJyBdLFxuXHRcdGlpOiBbICd6aC1jbicsICd6aC1oYW5zJyBdLFxuXHRcdGluaDogWyAncnUnIF0sXG5cdFx0aXU6IFsgJ2lrZS1jYW5zJyBdLFxuXHRcdGp1dDogWyAnZGEnIF0sXG5cdFx0anY6IFsgJ2lkJyBdLFxuXHRcdGthYTogWyAna2stbGF0bicsICdray1jeXJsJyBdLFxuXHRcdGtiZDogWyAna2JkLWN5cmwnIF0sXG5cdFx0a2h3OiBbICd1cicgXSxcblx0XHRraXU6IFsgJ3RyJyBdLFxuXHRcdGtrOiBbICdray1jeXJsJyBdLFxuXHRcdCdray1hcmFiJzogWyAna2stY3lybCcgXSxcblx0XHQna2stbGF0bic6IFsgJ2trLWN5cmwnIF0sXG5cdFx0J2trLWNuJzogWyAna2stYXJhYicsICdray1jeXJsJyBdLFxuXHRcdCdray1reic6IFsgJ2trLWN5cmwnIF0sXG5cdFx0J2trLXRyJzogWyAna2stbGF0bicsICdray1jeXJsJyBdLFxuXHRcdGtsOiBbICdkYScgXSxcblx0XHQna28ta3AnOiBbICdrbycgXSxcblx0XHRrb2k6IFsgJ3J1JyBdLFxuXHRcdGtyYzogWyAncnUnIF0sXG5cdFx0a3M6IFsgJ2tzLWFyYWInIF0sXG5cdFx0a3NoOiBbICdkZScgXSxcblx0XHRrdTogWyAna3UtbGF0bicgXSxcblx0XHQna3UtYXJhYic6IFsgJ2NrYicgXSxcblx0XHRrdjogWyAncnUnIF0sXG5cdFx0bGFkOiBbICdlcycgXSxcblx0XHRsYjogWyAnZGUnIF0sXG5cdFx0bGJlOiBbICdydScgXSxcblx0XHRsZXo6IFsgJ3J1JyBdLFxuXHRcdGxpOiBbICdubCcgXSxcblx0XHRsaWo6IFsgJ2l0JyBdLFxuXHRcdGxpdjogWyAnZXQnIF0sXG5cdFx0bG1vOiBbICdpdCcgXSxcblx0XHRsbjogWyAnZnInIF0sXG5cdFx0bHRnOiBbICdsdicgXSxcblx0XHRseno6IFsgJ3RyJyBdLFxuXHRcdG1haTogWyAnaGknIF0sXG5cdFx0J21hcC1ibXMnOiBbICdqdicsICdpZCcgXSxcblx0XHRtZzogWyAnZnInIF0sXG5cdFx0bWhyOiBbICdydScgXSxcblx0XHRtaW46IFsgJ2lkJyBdLFxuXHRcdG1vOiBbICdybycgXSxcblx0XHRtcmo6IFsgJ3J1JyBdLFxuXHRcdG13bDogWyAncHQnIF0sXG5cdFx0bXl2OiBbICdydScgXSxcblx0XHRtem46IFsgJ2ZhJyBdLFxuXHRcdG5haDogWyAnZXMnIF0sXG5cdFx0bmFwOiBbICdpdCcgXSxcblx0XHRuZHM6IFsgJ2RlJyBdLFxuXHRcdCduZHMtbmwnOiBbICdubCcgXSxcblx0XHQnbmwtaW5mb3JtYWwnOiBbICdubCcgXSxcblx0XHRubzogWyAnbmInIF0sXG5cdFx0b3M6IFsgJ3J1JyBdLFxuXHRcdHBjZDogWyAnZnInIF0sXG5cdFx0cGRjOiBbICdkZScgXSxcblx0XHRwZHQ6IFsgJ2RlJyBdLFxuXHRcdHBmbDogWyAnZGUnIF0sXG5cdFx0cG1zOiBbICdpdCcgXSxcblx0XHRwdDogWyAncHQtYnInIF0sXG5cdFx0J3B0LWJyJzogWyAncHQnIF0sXG5cdFx0cXU6IFsgJ2VzJyBdLFxuXHRcdHF1ZzogWyAncXUnLCAnZXMnIF0sXG5cdFx0cmduOiBbICdpdCcgXSxcblx0XHRybXk6IFsgJ3JvJyBdLFxuXHRcdCdyb2EtcnVwJzogWyAncnVwJyBdLFxuXHRcdHJ1ZTogWyAndWsnLCAncnUnIF0sXG5cdFx0cnVxOiBbICdydXEtbGF0bicsICdybycgXSxcblx0XHQncnVxLWN5cmwnOiBbICdtaycgXSxcblx0XHQncnVxLWxhdG4nOiBbICdybycgXSxcblx0XHRzYTogWyAnaGknIF0sXG5cdFx0c2FoOiBbICdydScgXSxcblx0XHRzY246IFsgJ2l0JyBdLFxuXHRcdHNnOiBbICdmcicgXSxcblx0XHRzZ3M6IFsgJ2x0JyBdLFxuXHRcdHNsaTogWyAnZGUnIF0sXG5cdFx0c3I6IFsgJ3NyLWVjJyBdLFxuXHRcdHNybjogWyAnbmwnIF0sXG5cdFx0c3RxOiBbICdkZScgXSxcblx0XHRzdTogWyAnaWQnIF0sXG5cdFx0c3psOiBbICdwbCcgXSxcblx0XHR0Y3k6IFsgJ2tuJyBdLFxuXHRcdHRnOiBbICd0Zy1jeXJsJyBdLFxuXHRcdHR0OiBbICd0dC1jeXJsJywgJ3J1JyBdLFxuXHRcdCd0dC1jeXJsJzogWyAncnUnIF0sXG5cdFx0dHk6IFsgJ2ZyJyBdLFxuXHRcdHVkbTogWyAncnUnIF0sXG5cdFx0dWc6IFsgJ3VnLWFyYWInIF0sXG5cdFx0dWs6IFsgJ3J1JyBdLFxuXHRcdHZlYzogWyAnaXQnIF0sXG5cdFx0dmVwOiBbICdldCcgXSxcblx0XHR2bHM6IFsgJ25sJyBdLFxuXHRcdHZtZjogWyAnZGUnIF0sXG5cdFx0dm90OiBbICdmaScgXSxcblx0XHR2cm86IFsgJ2V0JyBdLFxuXHRcdHdhOiBbICdmcicgXSxcblx0XHR3bzogWyAnZnInIF0sXG5cdFx0d3V1OiBbICd6aC1oYW5zJyBdLFxuXHRcdHhhbDogWyAncnUnIF0sXG5cdFx0eG1mOiBbICdrYScgXSxcblx0XHR5aTogWyAnaGUnIF0sXG5cdFx0emE6IFsgJ3poLWhhbnMnIF0sXG5cdFx0emVhOiBbICdubCcgXSxcblx0XHR6aDogWyAnemgtaGFucycgXSxcblx0XHQnemgtY2xhc3NpY2FsJzogWyAnbHpoJyBdLFxuXHRcdCd6aC1jbic6IFsgJ3poLWhhbnMnIF0sXG5cdFx0J3poLWhhbnQnOiBbICd6aC1oYW5zJyBdLFxuXHRcdCd6aC1oayc6IFsgJ3poLWhhbnQnLCAnemgtaGFucycgXSxcblx0XHQnemgtbWluLW5hbic6IFsgJ25hbicgXSxcblx0XHQnemgtbW8nOiBbICd6aC1oaycsICd6aC1oYW50JywgJ3poLWhhbnMnIF0sXG5cdFx0J3poLW15JzogWyAnemgtc2cnLCAnemgtaGFucycgXSxcblx0XHQnemgtc2cnOiBbICd6aC1oYW5zJyBdLFxuXHRcdCd6aC10dyc6IFsgJ3poLWhhbnQnLCAnemgtaGFucycgXSxcblx0XHQnemgteXVlJzogWyAneXVlJyBdXG5cdH0gKTtcbn0oIGpRdWVyeSApICk7XG4iLCIvKiFcbiAqIGpRdWVyeSBJbnRlcm5hdGlvbmFsaXphdGlvbiBsaWJyYXJ5XG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDEyIFNhbnRob3NoIFRob3R0aW5nYWxcbiAqXG4gKiBqcXVlcnkuaTE4biBpcyBkdWFsIGxpY2Vuc2VkIEdQTHYyIG9yIGxhdGVyIGFuZCBNSVQuIFlvdSBkb24ndCBoYXZlIHRvIGRvXG4gKiBhbnl0aGluZyBzcGVjaWFsIHRvIGNob29zZSBvbmUgbGljZW5zZSBvciB0aGUgb3RoZXIgYW5kIHlvdSBkb24ndCBoYXZlIHRvXG4gKiBub3RpZnkgYW55b25lIHdoaWNoIGxpY2Vuc2UgeW91IGFyZSB1c2luZy4gWW91IGFyZSBmcmVlIHRvIHVzZVxuICogVW5pdmVyc2FsTGFuZ3VhZ2VTZWxlY3RvciBpbiBjb21tZXJjaWFsIHByb2plY3RzIGFzIGxvbmcgYXMgdGhlIGNvcHlyaWdodFxuICogaGVhZGVyIGlzIGxlZnQgaW50YWN0LiBTZWUgZmlsZXMgR1BMLUxJQ0VOU0UgYW5kIE1JVC1MSUNFTlNFIGZvciBkZXRhaWxzLlxuICpcbiAqIEBsaWNlbmNlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbmNlIDIuMCBvciBsYXRlclxuICogQGxpY2VuY2UgTUlUIExpY2Vuc2VcbiAqL1xuXG4oIGZ1bmN0aW9uICggJCApIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBJMThOLFxuXHRcdHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG5cdCAqL1xuXHRJMThOID0gZnVuY3Rpb24gKCBvcHRpb25zICkge1xuXHRcdC8vIExvYWQgZGVmYXVsdHNcblx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCgge30sIEkxOE4uZGVmYXVsdHMsIG9wdGlvbnMgKTtcblxuXHRcdHRoaXMucGFyc2VyID0gdGhpcy5vcHRpb25zLnBhcnNlcjtcblx0XHR0aGlzLmxvY2FsZSA9IHRoaXMub3B0aW9ucy5sb2NhbGU7XG5cdFx0dGhpcy5tZXNzYWdlU3RvcmUgPSB0aGlzLm9wdGlvbnMubWVzc2FnZVN0b3JlO1xuXHRcdHRoaXMubGFuZ3VhZ2VzID0ge307XG5cdH07XG5cblx0STE4Ti5wcm90b3R5cGUgPSB7XG5cdFx0LyoqXG5cdFx0ICogTG9jYWxpemUgYSBnaXZlbiBtZXNzYWdlS2V5IHRvIGEgbG9jYWxlLlxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlS2V5XG5cdFx0ICogQHJldHVybiB7U3RyaW5nfSBMb2NhbGl6ZWQgbWVzc2FnZVxuXHRcdCAqL1xuXHRcdGxvY2FsaXplOiBmdW5jdGlvbiAoIG1lc3NhZ2VLZXkgKSB7XG5cdFx0XHR2YXIgbG9jYWxlUGFydHMsIGxvY2FsZVBhcnRJbmRleCwgbG9jYWxlLCBmYWxsYmFja0luZGV4LFxuXHRcdFx0XHR0cnlpbmdMb2NhbGUsIG1lc3NhZ2U7XG5cblx0XHRcdGxvY2FsZSA9IHRoaXMubG9jYWxlO1xuXHRcdFx0ZmFsbGJhY2tJbmRleCA9IDA7XG5cblx0XHRcdHdoaWxlICggbG9jYWxlICkge1xuXHRcdFx0XHQvLyBJdGVyYXRlIHRocm91Z2ggbG9jYWxlcyBzdGFydGluZyBhdCBtb3N0LXNwZWNpZmljIHVudGlsXG5cdFx0XHRcdC8vIGxvY2FsaXphdGlvbiBpcyBmb3VuZC4gQXMgaW4gZmktTGF0bi1GSSwgZmktTGF0biBhbmQgZmkuXG5cdFx0XHRcdGxvY2FsZVBhcnRzID0gbG9jYWxlLnNwbGl0KCAnLScgKTtcblx0XHRcdFx0bG9jYWxlUGFydEluZGV4ID0gbG9jYWxlUGFydHMubGVuZ3RoO1xuXG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHR0cnlpbmdMb2NhbGUgPSBsb2NhbGVQYXJ0cy5zbGljZSggMCwgbG9jYWxlUGFydEluZGV4ICkuam9pbiggJy0nICk7XG5cdFx0XHRcdFx0bWVzc2FnZSA9IHRoaXMubWVzc2FnZVN0b3JlLmdldCggdHJ5aW5nTG9jYWxlLCBtZXNzYWdlS2V5ICk7XG5cblx0XHRcdFx0XHRpZiAoIG1lc3NhZ2UgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbWVzc2FnZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRsb2NhbGVQYXJ0SW5kZXgtLTtcblx0XHRcdFx0fSB3aGlsZSAoIGxvY2FsZVBhcnRJbmRleCApO1xuXG5cdFx0XHRcdGlmICggbG9jYWxlID09PSAnZW4nICkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bG9jYWxlID0gKCAkLmkxOG4uZmFsbGJhY2tzWyB0aGlzLmxvY2FsZSBdICYmXG5cdFx0XHRcdFx0XHQkLmkxOG4uZmFsbGJhY2tzWyB0aGlzLmxvY2FsZSBdWyBmYWxsYmFja0luZGV4IF0gKSB8fFxuXHRcdFx0XHRcdFx0dGhpcy5vcHRpb25zLmZhbGxiYWNrTG9jYWxlO1xuXHRcdFx0XHQkLmkxOG4ubG9nKCAnVHJ5aW5nIGZhbGxiYWNrIGxvY2FsZSBmb3IgJyArIHRoaXMubG9jYWxlICsgJzogJyArIGxvY2FsZSArICcgKCcgKyBtZXNzYWdlS2V5ICsgJyknICk7XG5cblx0XHRcdFx0ZmFsbGJhY2tJbmRleCsrO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBrZXkgbm90IGZvdW5kXG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fSxcblxuXHRcdC8qXG5cdFx0ICogRGVzdHJveSB0aGUgaTE4biBpbnN0YW5jZS5cblx0XHQgKi9cblx0XHRkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHQkLnJlbW92ZURhdGEoIGRvY3VtZW50LCAnaTE4bicgKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogR2VuZXJhbCBtZXNzYWdlIGxvYWRpbmcgQVBJIFRoaXMgY2FuIHRha2UgYSBVUkwgc3RyaW5nIGZvclxuXHRcdCAqIHRoZSBqc29uIGZvcm1hdHRlZCBtZXNzYWdlcy4gRXhhbXBsZTpcblx0XHQgKiA8Y29kZT5sb2FkKCdwYXRoL3RvL2FsbF9sb2NhbGl6YXRpb25zLmpzb24nKTs8L2NvZGU+XG5cdFx0ICpcblx0XHQgKiBUbyBsb2FkIGEgbG9jYWxpemF0aW9uIGZpbGUgZm9yIGEgbG9jYWxlOlxuXHRcdCAqIDxjb2RlPlxuXHRcdCAqIGxvYWQoJ3BhdGgvdG8vZGUtbWVzc2FnZXMuanNvbicsICdkZScgKTtcblx0XHQgKiA8L2NvZGU+XG5cdFx0ICpcblx0XHQgKiBUbyBsb2FkIGEgbG9jYWxpemF0aW9uIGZpbGUgZnJvbSBhIGRpcmVjdG9yeTpcblx0XHQgKiA8Y29kZT5cblx0XHQgKiBsb2FkKCdwYXRoL3RvL2kxOG4vZGlyZWN0b3J5JywgJ2RlJyApO1xuXHRcdCAqIDwvY29kZT5cblx0XHQgKiBUaGUgYWJvdmUgbWV0aG9kIGhhcyB0aGUgYWR2YW50YWdlIG9mIGZhbGxiYWNrIHJlc29sdXRpb24uXG5cdFx0ICogaWUsIGl0IHdpbGwgYXV0b21hdGljYWxseSBsb2FkIHRoZSBmYWxsYmFjayBsb2NhbGVzIGZvciBkZS5cblx0XHQgKiBGb3IgbW9zdCB1c2VjYXNlcywgdGhpcyBpcyB0aGUgcmVjb21tZW5kZWQgbWV0aG9kLlxuXHRcdCAqIEl0IGlzIG9wdGlvbmFsIHRvIGhhdmUgdHJhaWxpbmcgc2xhc2ggYXQgZW5kLlxuXHRcdCAqXG5cdFx0ICogQSBkYXRhIG9iamVjdCBjb250YWluaW5nIG1lc3NhZ2Uga2V5LSBtZXNzYWdlIHRyYW5zbGF0aW9uIG1hcHBpbmdzXG5cdFx0ICogY2FuIGFsc28gYmUgcGFzc2VkLiBFeGFtcGxlOlxuXHRcdCAqIDxjb2RlPlxuXHRcdCAqIGxvYWQoIHsgJ2hlbGxvJyA6ICdIZWxsbycgfSwgb3B0aW9uYWxMb2NhbGUgKTtcblx0XHQgKiA8L2NvZGU+XG5cdFx0ICpcblx0XHQgKiBBIHNvdXJjZSBtYXAgY29udGFpbmluZyBrZXktdmFsdWUgcGFpciBvZiBsYW5ndWFnZW5hbWUgYW5kIGxvY2F0aW9uc1xuXHRcdCAqIGNhbiBhbHNvIGJlIHBhc3NlZC4gRXhhbXBsZTpcblx0XHQgKiA8Y29kZT5cblx0XHQgKiBsb2FkKCB7XG5cdFx0ICogYm46ICdpMThuL2JuLmpzb24nLFxuXHRcdCAqIGhlOiAnaTE4bi9oZS5qc29uJyxcblx0XHQgKiBlbjogJ2kxOG4vZW4uanNvbidcblx0XHQgKiB9IClcblx0XHQgKiA8L2NvZGU+XG5cdFx0ICpcblx0XHQgKiBJZiB0aGUgZGF0YSBhcmd1bWVudCBpcyBudWxsL3VuZGVmaW5lZC9mYWxzZSxcblx0XHQgKiBhbGwgY2FjaGVkIG1lc3NhZ2VzIGZvciB0aGUgaTE4biBpbnN0YW5jZSB3aWxsIGdldCByZXNldC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc291cmNlXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsZSBMYW5ndWFnZSB0YWdcblx0XHQgKiBAcmV0dXJuIHtqUXVlcnkuUHJvbWlzZX1cblx0XHQgKi9cblx0XHRsb2FkOiBmdW5jdGlvbiAoIHNvdXJjZSwgbG9jYWxlICkge1xuXHRcdFx0dmFyIGZhbGxiYWNrTG9jYWxlcywgbG9jSW5kZXgsIGZhbGxiYWNrTG9jYWxlLCBzb3VyY2VNYXAgPSB7fTtcblx0XHRcdGlmICggIXNvdXJjZSAmJiAhbG9jYWxlICkge1xuXHRcdFx0XHRzb3VyY2UgPSAnaTE4bi8nICsgJC5pMThuKCkubG9jYWxlICsgJy5qc29uJztcblx0XHRcdFx0bG9jYWxlID0gJC5pMThuKCkubG9jYWxlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCB0eXBlb2Ygc291cmNlID09PSAnc3RyaW5nJyAmJlxuXHRcdFx0XHQvLyBzb3VyY2UgZXh0ZW5zaW9uIHNob3VsZCBiZSBqc29uLCBidXQgY2FuIGhhdmUgcXVlcnkgcGFyYW1zIGFmdGVyIHRoYXQuXG5cdFx0XHRcdHNvdXJjZS5zcGxpdCggJz8nIClbIDAgXS5zcGxpdCggJy4nICkucG9wKCkgIT09ICdqc29uJ1xuXHRcdFx0KSB7XG5cdFx0XHRcdC8vIExvYWQgc3BlY2lmaWVkIGxvY2FsZSB0aGVuIGNoZWNrIGZvciBmYWxsYmFja3Mgd2hlbiBkaXJlY3RvcnkgaXNcblx0XHRcdFx0Ly8gc3BlY2lmaWVkIGluIGxvYWQoKVxuXHRcdFx0XHRzb3VyY2VNYXBbIGxvY2FsZSBdID0gc291cmNlICsgJy8nICsgbG9jYWxlICsgJy5qc29uJztcblx0XHRcdFx0ZmFsbGJhY2tMb2NhbGVzID0gKCAkLmkxOG4uZmFsbGJhY2tzWyBsb2NhbGUgXSB8fCBbXSApXG5cdFx0XHRcdFx0LmNvbmNhdCggdGhpcy5vcHRpb25zLmZhbGxiYWNrTG9jYWxlICk7XG5cdFx0XHRcdGZvciAoIGxvY0luZGV4ID0gMDsgbG9jSW5kZXggPCBmYWxsYmFja0xvY2FsZXMubGVuZ3RoOyBsb2NJbmRleCsrICkge1xuXHRcdFx0XHRcdGZhbGxiYWNrTG9jYWxlID0gZmFsbGJhY2tMb2NhbGVzWyBsb2NJbmRleCBdO1xuXHRcdFx0XHRcdHNvdXJjZU1hcFsgZmFsbGJhY2tMb2NhbGUgXSA9IHNvdXJjZSArICcvJyArIGZhbGxiYWNrTG9jYWxlICsgJy5qc29uJztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcy5sb2FkKCBzb3VyY2VNYXAgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm1lc3NhZ2VTdG9yZS5sb2FkKCBzb3VyY2UsIGxvY2FsZSApO1xuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIERvZXMgcGFyYW1ldGVyIGFuZCBtYWdpYyB3b3JkIHN1YnN0aXR1dGlvbi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgTWVzc2FnZSBrZXlcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBwYXJhbWV0ZXJzIE1lc3NhZ2UgcGFyYW1ldGVyc1xuXHRcdCAqIEByZXR1cm4ge3N0cmluZ31cblx0XHQgKi9cblx0XHRwYXJzZTogZnVuY3Rpb24gKCBrZXksIHBhcmFtZXRlcnMgKSB7XG5cdFx0XHR2YXIgbWVzc2FnZSA9IHRoaXMubG9jYWxpemUoIGtleSApO1xuXHRcdFx0Ly8gRklYTUU6IFRoaXMgY2hhbmdlcyB0aGUgc3RhdGUgb2YgdGhlIEkxOE4gb2JqZWN0LFxuXHRcdFx0Ly8gc2hvdWxkIHByb2JhYmx5IG5vdCBjaGFuZ2UgdGhlICd0aGlzLnBhcnNlcicgYnV0IGp1c3Rcblx0XHRcdC8vIHBhc3MgaXQgdG8gdGhlIHBhcnNlci5cblx0XHRcdHRoaXMucGFyc2VyLmxhbmd1YWdlID0gJC5pMThuLmxhbmd1YWdlc1sgJC5pMThuKCkubG9jYWxlIF0gfHwgJC5pMThuLmxhbmd1YWdlc1sgJ2RlZmF1bHQnIF07XG5cdFx0XHRpZiAoIG1lc3NhZ2UgPT09ICcnICkge1xuXHRcdFx0XHRtZXNzYWdlID0ga2V5O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMucGFyc2VyLnBhcnNlKCBtZXNzYWdlLCBwYXJhbWV0ZXJzICk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBQcm9jZXNzIGEgbWVzc2FnZSBmcm9tIHRoZSAkLkkxOE4gaW5zdGFuY2Vcblx0ICogZm9yIHRoZSBjdXJyZW50IGRvY3VtZW50LCBzdG9yZWQgaW4galF1ZXJ5LmRhdGEoZG9jdW1lbnQpLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEtleSBvZiB0aGUgbWVzc2FnZS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtMSBbcGFyYW0uLi5dIFZhcmlhZGljIGxpc3Qgb2YgcGFyYW1ldGVycyBmb3Ige2tleX0uXG5cdCAqIEByZXR1cm4ge3N0cmluZ3wkLkkxOE59IFBhcnNlZCBtZXNzYWdlLCBvciBpZiBubyBrZXkgd2FzIGdpdmVuXG5cdCAqIHRoZSBpbnN0YW5jZSBvZiAkLkkxOE4gaXMgcmV0dXJuZWQuXG5cdCAqL1xuXHQkLmkxOG4gPSBmdW5jdGlvbiAoIGtleSwgcGFyYW0xICkge1xuXHRcdHZhciBwYXJhbWV0ZXJzLFxuXHRcdFx0aTE4biA9ICQuZGF0YSggZG9jdW1lbnQsICdpMThuJyApLFxuXHRcdFx0b3B0aW9ucyA9IHR5cGVvZiBrZXkgPT09ICdvYmplY3QnICYmIGtleTtcblxuXHRcdC8vIElmIHRoZSBsb2NhbGUgb3B0aW9uIGZvciB0aGlzIGNhbGwgaXMgZGlmZmVyZW50IHRoZW4gdGhlIHNldHVwIHNvIGZhcixcblx0XHQvLyB1cGRhdGUgaXQgYXV0b21hdGljYWxseS4gVGhpcyBkb2Vzbid0IGp1c3QgY2hhbmdlIHRoZSBjb250ZXh0IGZvciB0aGlzXG5cdFx0Ly8gY2FsbCBidXQgZm9yIGFsbCBmdXR1cmUgY2FsbCBhcyB3ZWxsLlxuXHRcdC8vIElmIHRoZXJlIGlzIG5vIGkxOG4gc2V0dXAgeWV0LCBkb24ndCBkbyB0aGlzLiBJdCB3aWxsIGJlIHRha2VuIGNhcmUgb2Zcblx0XHQvLyBieSB0aGUgYG5ldyBJMThOYCBjb25zdHJ1Y3Rpb24gYmVsb3cuXG5cdFx0Ly8gTk9URTogSXQgc2hvdWxkIG9ubHkgY2hhbmdlIGxhbmd1YWdlIGZvciB0aGlzIG9uZSBjYWxsLlxuXHRcdC8vIFRoZW4gY2FjaGUgaW5zdGFuY2VzIG9mIEkxOE4gc29tZXdoZXJlLlxuXHRcdGlmICggb3B0aW9ucyAmJiBvcHRpb25zLmxvY2FsZSAmJiBpMThuICYmIGkxOG4ubG9jYWxlICE9PSBvcHRpb25zLmxvY2FsZSApIHtcblx0XHRcdGkxOG4ubG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG5cdFx0fVxuXG5cdFx0aWYgKCAhaTE4biApIHtcblx0XHRcdGkxOG4gPSBuZXcgSTE4Tiggb3B0aW9ucyApO1xuXHRcdFx0JC5kYXRhKCBkb2N1bWVudCwgJ2kxOG4nLCBpMThuICk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyApIHtcblx0XHRcdGlmICggcGFyYW0xICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdHBhcmFtZXRlcnMgPSBzbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhcmFtZXRlcnMgPSBbXTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGkxOG4ucGFyc2UoIGtleSwgcGFyYW1ldGVycyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBGSVhNRTogcmVtb3ZlIHRoaXMgZmVhdHVyZS9idWcuXG5cdFx0XHRyZXR1cm4gaTE4bjtcblx0XHR9XG5cdH07XG5cblx0JC5mbi5pMThuID0gZnVuY3Rpb24gKCkge1xuXHRcdHZhciBpMThuID0gJC5kYXRhKCBkb2N1bWVudCwgJ2kxOG4nICk7XG5cblx0XHRpZiAoICFpMThuICkge1xuXHRcdFx0aTE4biA9IG5ldyBJMThOKCk7XG5cdFx0XHQkLmRhdGEoIGRvY3VtZW50LCAnaTE4bicsIGkxOG4gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICksXG5cdFx0XHRcdG1lc3NhZ2VLZXkgPSAkdGhpcy5kYXRhKCAnaTE4bicgKSxcblx0XHRcdFx0bEJyYWNrZXQsIHJCcmFja2V0LCB0eXBlLCBrZXk7XG5cblx0XHRcdGlmICggbWVzc2FnZUtleSApIHtcblx0XHRcdFx0bEJyYWNrZXQgPSBtZXNzYWdlS2V5LmluZGV4T2YoICdbJyApO1xuXHRcdFx0XHRyQnJhY2tldCA9IG1lc3NhZ2VLZXkuaW5kZXhPZiggJ10nICk7XG5cdFx0XHRcdGlmICggbEJyYWNrZXQgIT09IC0xICYmIHJCcmFja2V0ICE9PSAtMSAmJiBsQnJhY2tldCA8IHJCcmFja2V0ICkge1xuXHRcdFx0XHRcdHR5cGUgPSBtZXNzYWdlS2V5LnNsaWNlKCBsQnJhY2tldCArIDEsIHJCcmFja2V0ICk7XG5cdFx0XHRcdFx0a2V5ID0gbWVzc2FnZUtleS5zbGljZSggckJyYWNrZXQgKyAxICk7XG5cdFx0XHRcdFx0aWYgKCB0eXBlID09PSAnaHRtbCcgKSB7XG5cdFx0XHRcdFx0XHQkdGhpcy5odG1sKCBpMThuLnBhcnNlKCBrZXkgKSApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQkdGhpcy5hdHRyKCB0eXBlLCBpMThuLnBhcnNlKCBrZXkgKSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkdGhpcy50ZXh0KCBpMThuLnBhcnNlKCBtZXNzYWdlS2V5ICkgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JHRoaXMuZmluZCggJ1tkYXRhLWkxOG5dJyApLmkxOG4oKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH07XG5cblx0ZnVuY3Rpb24gZ2V0RGVmYXVsdExvY2FsZSgpIHtcblx0XHR2YXIgbmF2LCBsb2NhbGUgPSAkKCAnaHRtbCcgKS5hdHRyKCAnbGFuZycgKTtcblxuXHRcdGlmICggIWxvY2FsZSApIHtcblx0XHRcdGlmICggdHlwZW9mIHdpbmRvdy5uYXZpZ2F0b3IgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0bmF2ID0gd2luZG93Lm5hdmlnYXRvcjtcblx0XHRcdFx0bG9jYWxlID0gbmF2Lmxhbmd1YWdlIHx8IG5hdi51c2VyTGFuZ3VhZ2UgfHwgJyc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsb2NhbGUgPSAnJztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGxvY2FsZTtcblx0fVxuXG5cdCQuaTE4bi5sYW5ndWFnZXMgPSB7fTtcblx0JC5pMThuLm1lc3NhZ2VTdG9yZSA9ICQuaTE4bi5tZXNzYWdlU3RvcmUgfHwge307XG5cdCQuaTE4bi5wYXJzZXIgPSB7XG5cdFx0Ly8gVGhlIGRlZmF1bHQgcGFyc2VyIG9ubHkgaGFuZGxlcyB2YXJpYWJsZSBzdWJzdGl0dXRpb25cblx0XHRwYXJzZTogZnVuY3Rpb24gKCBtZXNzYWdlLCBwYXJhbWV0ZXJzICkge1xuXHRcdFx0cmV0dXJuIG1lc3NhZ2UucmVwbGFjZSggL1xcJChcXGQrKS9nLCBmdW5jdGlvbiAoIHN0ciwgbWF0Y2ggKSB7XG5cdFx0XHRcdHZhciBpbmRleCA9IHBhcnNlSW50KCBtYXRjaCwgMTAgKSAtIDE7XG5cdFx0XHRcdHJldHVybiBwYXJhbWV0ZXJzWyBpbmRleCBdICE9PSB1bmRlZmluZWQgPyBwYXJhbWV0ZXJzWyBpbmRleCBdIDogJyQnICsgbWF0Y2g7XG5cdFx0XHR9ICk7XG5cdFx0fSxcblx0XHRlbWl0dGVyOiB7fVxuXHR9O1xuXHQkLmkxOG4uZmFsbGJhY2tzID0ge307XG5cdCQuaTE4bi5kZWJ1ZyA9IGZhbHNlO1xuXHQkLmkxOG4ubG9nID0gZnVuY3Rpb24gKCAvKiBhcmd1bWVudHMgKi8gKSB7XG5cdFx0aWYgKCB3aW5kb3cuY29uc29sZSAmJiAkLmkxOG4uZGVidWcgKSB7XG5cdFx0XHR3aW5kb3cuY29uc29sZS5sb2cuYXBwbHkoIHdpbmRvdy5jb25zb2xlLCBhcmd1bWVudHMgKTtcblx0XHR9XG5cdH07XG5cdC8qIFN0YXRpYyBtZW1iZXJzICovXG5cdEkxOE4uZGVmYXVsdHMgPSB7XG5cdFx0bG9jYWxlOiBnZXREZWZhdWx0TG9jYWxlKCksXG5cdFx0ZmFsbGJhY2tMb2NhbGU6ICdlbicsXG5cdFx0cGFyc2VyOiAkLmkxOG4ucGFyc2VyLFxuXHRcdG1lc3NhZ2VTdG9yZTogJC5pMThuLm1lc3NhZ2VTdG9yZVxuXHR9O1xuXG5cdC8vIEV4cG9zZSBjb25zdHJ1Y3RvclxuXHQkLmkxOG4uY29uc3RydWN0b3IgPSBJMThOO1xufSggalF1ZXJ5ICkgKTsiLCIvKiBnbG9iYWwgcGx1cmFsUnVsZVBhcnNlciAqL1xuKCBmdW5jdGlvbiAoICQgKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHQvLyBqc2NzOmRpc2FibGVcblx0dmFyIGxhbmd1YWdlID0ge1xuXHRcdC8vIENMRFIgcGx1cmFsIHJ1bGVzIGdlbmVyYXRlZCB1c2luZ1xuXHRcdC8vIGxpYnMvQ0xEUlBsdXJhbFJ1bGVQYXJzZXIvdG9vbHMvUGx1cmFsWE1MMkpTT04uaHRtbFxuXHRcdHBsdXJhbFJ1bGVzOiB7XG5cdFx0XHRhazoge1xuXHRcdFx0XHRvbmU6ICduID0gMC4uMSdcblx0XHRcdH0sXG5cdFx0XHRhbToge1xuXHRcdFx0XHRvbmU6ICdpID0gMCBvciBuID0gMSdcblx0XHRcdH0sXG5cdFx0XHRhcjoge1xuXHRcdFx0XHR6ZXJvOiAnbiA9IDAnLFxuXHRcdFx0XHRvbmU6ICduID0gMScsXG5cdFx0XHRcdHR3bzogJ24gPSAyJyxcblx0XHRcdFx0ZmV3OiAnbiAlIDEwMCA9IDMuLjEwJyxcblx0XHRcdFx0bWFueTogJ24gJSAxMDAgPSAxMS4uOTknXG5cdFx0XHR9LFxuXHRcdFx0YXJzOiB7XG5cdFx0XHRcdHplcm86ICduID0gMCcsXG5cdFx0XHRcdG9uZTogJ24gPSAxJyxcblx0XHRcdFx0dHdvOiAnbiA9IDInLFxuXHRcdFx0XHRmZXc6ICduICUgMTAwID0gMy4uMTAnLFxuXHRcdFx0XHRtYW55OiAnbiAlIDEwMCA9IDExLi45OSdcblx0XHRcdH0sXG5cdFx0XHRhczoge1xuXHRcdFx0XHRvbmU6ICdpID0gMCBvciBuID0gMSdcblx0XHRcdH0sXG5cdFx0XHRiZToge1xuXHRcdFx0XHRvbmU6ICduICUgMTAgPSAxIGFuZCBuICUgMTAwICE9IDExJyxcblx0XHRcdFx0ZmV3OiAnbiAlIDEwID0gMi4uNCBhbmQgbiAlIDEwMCAhPSAxMi4uMTQnLFxuXHRcdFx0XHRtYW55OiAnbiAlIDEwID0gMCBvciBuICUgMTAgPSA1Li45IG9yIG4gJSAxMDAgPSAxMS4uMTQnXG5cdFx0XHR9LFxuXHRcdFx0Ymg6IHtcblx0XHRcdFx0b25lOiAnbiA9IDAuLjEnXG5cdFx0XHR9LFxuXHRcdFx0Ym46IHtcblx0XHRcdFx0b25lOiAnaSA9IDAgb3IgbiA9IDEnXG5cdFx0XHR9LFxuXHRcdFx0YnI6IHtcblx0XHRcdFx0b25lOiAnbiAlIDEwID0gMSBhbmQgbiAlIDEwMCAhPSAxMSw3MSw5MScsXG5cdFx0XHRcdHR3bzogJ24gJSAxMCA9IDIgYW5kIG4gJSAxMDAgIT0gMTIsNzIsOTInLFxuXHRcdFx0XHRmZXc6ICduICUgMTAgPSAzLi40LDkgYW5kIG4gJSAxMDAgIT0gMTAuLjE5LDcwLi43OSw5MC4uOTknLFxuXHRcdFx0XHRtYW55OiAnbiAhPSAwIGFuZCBuICUgMTAwMDAwMCA9IDAnXG5cdFx0XHR9LFxuXHRcdFx0YnM6IHtcblx0XHRcdFx0b25lOiAndiA9IDAgYW5kIGkgJSAxMCA9IDEgYW5kIGkgJSAxMDAgIT0gMTEgb3IgZiAlIDEwID0gMSBhbmQgZiAlIDEwMCAhPSAxMScsXG5cdFx0XHRcdGZldzogJ3YgPSAwIGFuZCBpICUgMTAgPSAyLi40IGFuZCBpICUgMTAwICE9IDEyLi4xNCBvciBmICUgMTAgPSAyLi40IGFuZCBmICUgMTAwICE9IDEyLi4xNCdcblx0XHRcdH0sXG5cdFx0XHRjczoge1xuXHRcdFx0XHRvbmU6ICdpID0gMSBhbmQgdiA9IDAnLFxuXHRcdFx0XHRmZXc6ICdpID0gMi4uNCBhbmQgdiA9IDAnLFxuXHRcdFx0XHRtYW55OiAndiAhPSAwJ1xuXHRcdFx0fSxcblx0XHRcdGN5OiB7XG5cdFx0XHRcdHplcm86ICduID0gMCcsXG5cdFx0XHRcdG9uZTogJ24gPSAxJyxcblx0XHRcdFx0dHdvOiAnbiA9IDInLFxuXHRcdFx0XHRmZXc6ICduID0gMycsXG5cdFx0XHRcdG1hbnk6ICduID0gNidcblx0XHRcdH0sXG5cdFx0XHRkYToge1xuXHRcdFx0XHRvbmU6ICduID0gMSBvciB0ICE9IDAgYW5kIGkgPSAwLDEnXG5cdFx0XHR9LFxuXHRcdFx0ZHNiOiB7XG5cdFx0XHRcdG9uZTogJ3YgPSAwIGFuZCBpICUgMTAwID0gMSBvciBmICUgMTAwID0gMScsXG5cdFx0XHRcdHR3bzogJ3YgPSAwIGFuZCBpICUgMTAwID0gMiBvciBmICUgMTAwID0gMicsXG5cdFx0XHRcdGZldzogJ3YgPSAwIGFuZCBpICUgMTAwID0gMy4uNCBvciBmICUgMTAwID0gMy4uNCdcblx0XHRcdH0sXG5cdFx0XHRmYToge1xuXHRcdFx0XHRvbmU6ICdpID0gMCBvciBuID0gMSdcblx0XHRcdH0sXG5cdFx0XHRmZjoge1xuXHRcdFx0XHRvbmU6ICdpID0gMCwxJ1xuXHRcdFx0fSxcblx0XHRcdGZpbDoge1xuXHRcdFx0XHRvbmU6ICd2ID0gMCBhbmQgaSA9IDEsMiwzIG9yIHYgPSAwIGFuZCBpICUgMTAgIT0gNCw2LDkgb3IgdiAhPSAwIGFuZCBmICUgMTAgIT0gNCw2LDknXG5cdFx0XHR9LFxuXHRcdFx0ZnI6IHtcblx0XHRcdFx0b25lOiAnaSA9IDAsMSdcblx0XHRcdH0sXG5cdFx0XHRnYToge1xuXHRcdFx0XHRvbmU6ICduID0gMScsXG5cdFx0XHRcdHR3bzogJ24gPSAyJyxcblx0XHRcdFx0ZmV3OiAnbiA9IDMuLjYnLFxuXHRcdFx0XHRtYW55OiAnbiA9IDcuLjEwJ1xuXHRcdFx0fSxcblx0XHRcdGdkOiB7XG5cdFx0XHRcdG9uZTogJ24gPSAxLDExJyxcblx0XHRcdFx0dHdvOiAnbiA9IDIsMTInLFxuXHRcdFx0XHRmZXc6ICduID0gMy4uMTAsMTMuLjE5J1xuXHRcdFx0fSxcblx0XHRcdGd1OiB7XG5cdFx0XHRcdG9uZTogJ2kgPSAwIG9yIG4gPSAxJ1xuXHRcdFx0fSxcblx0XHRcdGd1dzoge1xuXHRcdFx0XHRvbmU6ICduID0gMC4uMSdcblx0XHRcdH0sXG5cdFx0XHRndjoge1xuXHRcdFx0XHRvbmU6ICd2ID0gMCBhbmQgaSAlIDEwID0gMScsXG5cdFx0XHRcdHR3bzogJ3YgPSAwIGFuZCBpICUgMTAgPSAyJyxcblx0XHRcdFx0ZmV3OiAndiA9IDAgYW5kIGkgJSAxMDAgPSAwLDIwLDQwLDYwLDgwJyxcblx0XHRcdFx0bWFueTogJ3YgIT0gMCdcblx0XHRcdH0sXG5cdFx0XHRoZToge1xuXHRcdFx0XHRvbmU6ICdpID0gMSBhbmQgdiA9IDAnLFxuXHRcdFx0XHR0d286ICdpID0gMiBhbmQgdiA9IDAnLFxuXHRcdFx0XHRtYW55OiAndiA9IDAgYW5kIG4gIT0gMC4uMTAgYW5kIG4gJSAxMCA9IDAnXG5cdFx0XHR9LFxuXHRcdFx0aGk6IHtcblx0XHRcdFx0b25lOiAnaSA9IDAgb3IgbiA9IDEnXG5cdFx0XHR9LFxuXHRcdFx0aHI6IHtcblx0XHRcdFx0b25lOiAndiA9IDAgYW5kIGkgJSAxMCA9IDEgYW5kIGkgJSAxMDAgIT0gMTEgb3IgZiAlIDEwID0gMSBhbmQgZiAlIDEwMCAhPSAxMScsXG5cdFx0XHRcdGZldzogJ3YgPSAwIGFuZCBpICUgMTAgPSAyLi40IGFuZCBpICUgMTAwICE9IDEyLi4xNCBvciBmICUgMTAgPSAyLi40IGFuZCBmICUgMTAwICE9IDEyLi4xNCdcblx0XHRcdH0sXG5cdFx0XHRoc2I6IHtcblx0XHRcdFx0b25lOiAndiA9IDAgYW5kIGkgJSAxMDAgPSAxIG9yIGYgJSAxMDAgPSAxJyxcblx0XHRcdFx0dHdvOiAndiA9IDAgYW5kIGkgJSAxMDAgPSAyIG9yIGYgJSAxMDAgPSAyJyxcblx0XHRcdFx0ZmV3OiAndiA9IDAgYW5kIGkgJSAxMDAgPSAzLi40IG9yIGYgJSAxMDAgPSAzLi40J1xuXHRcdFx0fSxcblx0XHRcdGh5OiB7XG5cdFx0XHRcdG9uZTogJ2kgPSAwLDEnXG5cdFx0XHR9LFxuXHRcdFx0aXM6IHtcblx0XHRcdFx0b25lOiAndCA9IDAgYW5kIGkgJSAxMCA9IDEgYW5kIGkgJSAxMDAgIT0gMTEgb3IgdCAhPSAwJ1xuXHRcdFx0fSxcblx0XHRcdGl1OiB7XG5cdFx0XHRcdG9uZTogJ24gPSAxJyxcblx0XHRcdFx0dHdvOiAnbiA9IDInXG5cdFx0XHR9LFxuXHRcdFx0aXc6IHtcblx0XHRcdFx0b25lOiAnaSA9IDEgYW5kIHYgPSAwJyxcblx0XHRcdFx0dHdvOiAnaSA9IDIgYW5kIHYgPSAwJyxcblx0XHRcdFx0bWFueTogJ3YgPSAwIGFuZCBuICE9IDAuLjEwIGFuZCBuICUgMTAgPSAwJ1xuXHRcdFx0fSxcblx0XHRcdGthYjoge1xuXHRcdFx0XHRvbmU6ICdpID0gMCwxJ1xuXHRcdFx0fSxcblx0XHRcdGtuOiB7XG5cdFx0XHRcdG9uZTogJ2kgPSAwIG9yIG4gPSAxJ1xuXHRcdFx0fSxcblx0XHRcdGt3OiB7XG5cdFx0XHRcdG9uZTogJ24gPSAxJyxcblx0XHRcdFx0dHdvOiAnbiA9IDInXG5cdFx0XHR9LFxuXHRcdFx0bGFnOiB7XG5cdFx0XHRcdHplcm86ICduID0gMCcsXG5cdFx0XHRcdG9uZTogJ2kgPSAwLDEgYW5kIG4gIT0gMCdcblx0XHRcdH0sXG5cdFx0XHRsbjoge1xuXHRcdFx0XHRvbmU6ICduID0gMC4uMSdcblx0XHRcdH0sXG5cdFx0XHRsdDoge1xuXHRcdFx0XHRvbmU6ICduICUgMTAgPSAxIGFuZCBuICUgMTAwICE9IDExLi4xOScsXG5cdFx0XHRcdGZldzogJ24gJSAxMCA9IDIuLjkgYW5kIG4gJSAxMDAgIT0gMTEuLjE5Jyxcblx0XHRcdFx0bWFueTogJ2YgIT0gMCdcblx0XHRcdH0sXG5cdFx0XHRsdjoge1xuXHRcdFx0XHR6ZXJvOiAnbiAlIDEwID0gMCBvciBuICUgMTAwID0gMTEuLjE5IG9yIHYgPSAyIGFuZCBmICUgMTAwID0gMTEuLjE5Jyxcblx0XHRcdFx0b25lOiAnbiAlIDEwID0gMSBhbmQgbiAlIDEwMCAhPSAxMSBvciB2ID0gMiBhbmQgZiAlIDEwID0gMSBhbmQgZiAlIDEwMCAhPSAxMSBvciB2ICE9IDIgYW5kIGYgJSAxMCA9IDEnXG5cdFx0XHR9LFxuXHRcdFx0bWc6IHtcblx0XHRcdFx0b25lOiAnbiA9IDAuLjEnXG5cdFx0XHR9LFxuXHRcdFx0bWs6IHtcblx0XHRcdFx0b25lOiAndiA9IDAgYW5kIGkgJSAxMCA9IDEgb3IgZiAlIDEwID0gMSdcblx0XHRcdH0sXG5cdFx0XHRtbzoge1xuXHRcdFx0XHRvbmU6ICdpID0gMSBhbmQgdiA9IDAnLFxuXHRcdFx0XHRmZXc6ICd2ICE9IDAgb3IgbiA9IDAgb3IgbiAhPSAxIGFuZCBuICUgMTAwID0gMS4uMTknXG5cdFx0XHR9LFxuXHRcdFx0bXI6IHtcblx0XHRcdFx0b25lOiAnaSA9IDAgb3IgbiA9IDEnXG5cdFx0XHR9LFxuXHRcdFx0bXQ6IHtcblx0XHRcdFx0b25lOiAnbiA9IDEnLFxuXHRcdFx0XHRmZXc6ICduID0gMCBvciBuICUgMTAwID0gMi4uMTAnLFxuXHRcdFx0XHRtYW55OiAnbiAlIDEwMCA9IDExLi4xOSdcblx0XHRcdH0sXG5cdFx0XHRuYXE6IHtcblx0XHRcdFx0b25lOiAnbiA9IDEnLFxuXHRcdFx0XHR0d286ICduID0gMidcblx0XHRcdH0sXG5cdFx0XHRuc286IHtcblx0XHRcdFx0b25lOiAnbiA9IDAuLjEnXG5cdFx0XHR9LFxuXHRcdFx0cGE6IHtcblx0XHRcdFx0b25lOiAnbiA9IDAuLjEnXG5cdFx0XHR9LFxuXHRcdFx0cGw6IHtcblx0XHRcdFx0b25lOiAnaSA9IDEgYW5kIHYgPSAwJyxcblx0XHRcdFx0ZmV3OiAndiA9IDAgYW5kIGkgJSAxMCA9IDIuLjQgYW5kIGkgJSAxMDAgIT0gMTIuLjE0Jyxcblx0XHRcdFx0bWFueTogJ3YgPSAwIGFuZCBpICE9IDEgYW5kIGkgJSAxMCA9IDAuLjEgb3IgdiA9IDAgYW5kIGkgJSAxMCA9IDUuLjkgb3IgdiA9IDAgYW5kIGkgJSAxMDAgPSAxMi4uMTQnXG5cdFx0XHR9LFxuXHRcdFx0cHJnOiB7XG5cdFx0XHRcdHplcm86ICduICUgMTAgPSAwIG9yIG4gJSAxMDAgPSAxMS4uMTkgb3IgdiA9IDIgYW5kIGYgJSAxMDAgPSAxMS4uMTknLFxuXHRcdFx0XHRvbmU6ICduICUgMTAgPSAxIGFuZCBuICUgMTAwICE9IDExIG9yIHYgPSAyIGFuZCBmICUgMTAgPSAxIGFuZCBmICUgMTAwICE9IDExIG9yIHYgIT0gMiBhbmQgZiAlIDEwID0gMSdcblx0XHRcdH0sXG5cdFx0XHRwdDoge1xuXHRcdFx0XHRvbmU6ICdpID0gMC4uMSdcblx0XHRcdH0sXG5cdFx0XHRybzoge1xuXHRcdFx0XHRvbmU6ICdpID0gMSBhbmQgdiA9IDAnLFxuXHRcdFx0XHRmZXc6ICd2ICE9IDAgb3IgbiA9IDAgb3IgbiAhPSAxIGFuZCBuICUgMTAwID0gMS4uMTknXG5cdFx0XHR9LFxuXHRcdFx0cnU6IHtcblx0XHRcdFx0b25lOiAndiA9IDAgYW5kIGkgJSAxMCA9IDEgYW5kIGkgJSAxMDAgIT0gMTEnLFxuXHRcdFx0XHRmZXc6ICd2ID0gMCBhbmQgaSAlIDEwID0gMi4uNCBhbmQgaSAlIDEwMCAhPSAxMi4uMTQnLFxuXHRcdFx0XHRtYW55OiAndiA9IDAgYW5kIGkgJSAxMCA9IDAgb3IgdiA9IDAgYW5kIGkgJSAxMCA9IDUuLjkgb3IgdiA9IDAgYW5kIGkgJSAxMDAgPSAxMS4uMTQnXG5cdFx0XHR9LFxuXHRcdFx0c2U6IHtcblx0XHRcdFx0b25lOiAnbiA9IDEnLFxuXHRcdFx0XHR0d286ICduID0gMidcblx0XHRcdH0sXG5cdFx0XHRzaDoge1xuXHRcdFx0XHRvbmU6ICd2ID0gMCBhbmQgaSAlIDEwID0gMSBhbmQgaSAlIDEwMCAhPSAxMSBvciBmICUgMTAgPSAxIGFuZCBmICUgMTAwICE9IDExJyxcblx0XHRcdFx0ZmV3OiAndiA9IDAgYW5kIGkgJSAxMCA9IDIuLjQgYW5kIGkgJSAxMDAgIT0gMTIuLjE0IG9yIGYgJSAxMCA9IDIuLjQgYW5kIGYgJSAxMDAgIT0gMTIuLjE0J1xuXHRcdFx0fSxcblx0XHRcdHNoaToge1xuXHRcdFx0XHRvbmU6ICdpID0gMCBvciBuID0gMScsXG5cdFx0XHRcdGZldzogJ24gPSAyLi4xMCdcblx0XHRcdH0sXG5cdFx0XHRzaToge1xuXHRcdFx0XHRvbmU6ICduID0gMCwxIG9yIGkgPSAwIGFuZCBmID0gMSdcblx0XHRcdH0sXG5cdFx0XHRzazoge1xuXHRcdFx0XHRvbmU6ICdpID0gMSBhbmQgdiA9IDAnLFxuXHRcdFx0XHRmZXc6ICdpID0gMi4uNCBhbmQgdiA9IDAnLFxuXHRcdFx0XHRtYW55OiAndiAhPSAwJ1xuXHRcdFx0fSxcblx0XHRcdHNsOiB7XG5cdFx0XHRcdG9uZTogJ3YgPSAwIGFuZCBpICUgMTAwID0gMScsXG5cdFx0XHRcdHR3bzogJ3YgPSAwIGFuZCBpICUgMTAwID0gMicsXG5cdFx0XHRcdGZldzogJ3YgPSAwIGFuZCBpICUgMTAwID0gMy4uNCBvciB2ICE9IDAnXG5cdFx0XHR9LFxuXHRcdFx0c21hOiB7XG5cdFx0XHRcdG9uZTogJ24gPSAxJyxcblx0XHRcdFx0dHdvOiAnbiA9IDInXG5cdFx0XHR9LFxuXHRcdFx0c21pOiB7XG5cdFx0XHRcdG9uZTogJ24gPSAxJyxcblx0XHRcdFx0dHdvOiAnbiA9IDInXG5cdFx0XHR9LFxuXHRcdFx0c21qOiB7XG5cdFx0XHRcdG9uZTogJ24gPSAxJyxcblx0XHRcdFx0dHdvOiAnbiA9IDInXG5cdFx0XHR9LFxuXHRcdFx0c21uOiB7XG5cdFx0XHRcdG9uZTogJ24gPSAxJyxcblx0XHRcdFx0dHdvOiAnbiA9IDInXG5cdFx0XHR9LFxuXHRcdFx0c21zOiB7XG5cdFx0XHRcdG9uZTogJ24gPSAxJyxcblx0XHRcdFx0dHdvOiAnbiA9IDInXG5cdFx0XHR9LFxuXHRcdFx0c3I6IHtcblx0XHRcdFx0b25lOiAndiA9IDAgYW5kIGkgJSAxMCA9IDEgYW5kIGkgJSAxMDAgIT0gMTEgb3IgZiAlIDEwID0gMSBhbmQgZiAlIDEwMCAhPSAxMScsXG5cdFx0XHRcdGZldzogJ3YgPSAwIGFuZCBpICUgMTAgPSAyLi40IGFuZCBpICUgMTAwICE9IDEyLi4xNCBvciBmICUgMTAgPSAyLi40IGFuZCBmICUgMTAwICE9IDEyLi4xNCdcblx0XHRcdH0sXG5cdFx0XHR0aToge1xuXHRcdFx0XHRvbmU6ICduID0gMC4uMSdcblx0XHRcdH0sXG5cdFx0XHR0bDoge1xuXHRcdFx0XHRvbmU6ICd2ID0gMCBhbmQgaSA9IDEsMiwzIG9yIHYgPSAwIGFuZCBpICUgMTAgIT0gNCw2LDkgb3IgdiAhPSAwIGFuZCBmICUgMTAgIT0gNCw2LDknXG5cdFx0XHR9LFxuXHRcdFx0dHptOiB7XG5cdFx0XHRcdG9uZTogJ24gPSAwLi4xIG9yIG4gPSAxMS4uOTknXG5cdFx0XHR9LFxuXHRcdFx0dWs6IHtcblx0XHRcdFx0b25lOiAndiA9IDAgYW5kIGkgJSAxMCA9IDEgYW5kIGkgJSAxMDAgIT0gMTEnLFxuXHRcdFx0XHRmZXc6ICd2ID0gMCBhbmQgaSAlIDEwID0gMi4uNCBhbmQgaSAlIDEwMCAhPSAxMi4uMTQnLFxuXHRcdFx0XHRtYW55OiAndiA9IDAgYW5kIGkgJSAxMCA9IDAgb3IgdiA9IDAgYW5kIGkgJSAxMCA9IDUuLjkgb3IgdiA9IDAgYW5kIGkgJSAxMDAgPSAxMS4uMTQnXG5cdFx0XHR9LFxuXHRcdFx0d2E6IHtcblx0XHRcdFx0b25lOiAnbiA9IDAuLjEnXG5cdFx0XHR9LFxuXHRcdFx0enU6IHtcblx0XHRcdFx0b25lOiAnaSA9IDAgb3IgbiA9IDEnXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvLyBqc2NzOmVuYWJsZVxuXG5cdFx0LyoqXG5cdFx0ICogUGx1cmFsIGZvcm0gdHJhbnNmb3JtYXRpb25zLCBuZWVkZWQgZm9yIHNvbWUgbGFuZ3VhZ2VzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtpbnRlZ2VyfSBjb3VudFxuXHRcdCAqICAgICAgICAgICAgTm9uLWxvY2FsaXplZCBxdWFudGlmaWVyXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gZm9ybXNcblx0XHQgKiAgICAgICAgICAgIExpc3Qgb2YgcGx1cmFsIGZvcm1zXG5cdFx0ICogQHJldHVybiB7c3RyaW5nfSBDb3JyZWN0IGZvcm0gZm9yIHF1YW50aWZpZXIgaW4gdGhpcyBsYW5ndWFnZVxuXHRcdCAqL1xuXHRcdGNvbnZlcnRQbHVyYWw6IGZ1bmN0aW9uICggY291bnQsIGZvcm1zICkge1xuXHRcdFx0dmFyIHBsdXJhbFJ1bGVzLFxuXHRcdFx0XHRwbHVyYWxGb3JtSW5kZXgsXG5cdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRleHBsaWNpdFBsdXJhbFBhdHRlcm4gPSBuZXcgUmVnRXhwKCAnXFxcXGQrPScsICdpJyApLFxuXHRcdFx0XHRmb3JtQ291bnQsXG5cdFx0XHRcdGZvcm07XG5cblx0XHRcdGlmICggIWZvcm1zIHx8IGZvcm1zLmxlbmd0aCA9PT0gMCApIHtcblx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBIYW5kbGUgZm9yIEV4cGxpY2l0IDA9ICYgMT0gdmFsdWVzXG5cdFx0XHRmb3IgKCBpbmRleCA9IDA7IGluZGV4IDwgZm9ybXMubGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdFx0XHRmb3JtID0gZm9ybXNbIGluZGV4IF07XG5cdFx0XHRcdGlmICggZXhwbGljaXRQbHVyYWxQYXR0ZXJuLnRlc3QoIGZvcm0gKSApIHtcblx0XHRcdFx0XHRmb3JtQ291bnQgPSBwYXJzZUludCggZm9ybS5zbGljZSggMCwgZm9ybS5pbmRleE9mKCAnPScgKSApLCAxMCApO1xuXHRcdFx0XHRcdGlmICggZm9ybUNvdW50ID09PSBjb3VudCApIHtcblx0XHRcdFx0XHRcdHJldHVybiAoIGZvcm0uc2xpY2UoIGZvcm0uaW5kZXhPZiggJz0nICkgKyAxICkgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9ybXNbIGluZGV4IF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Zm9ybXMgPSAkLm1hcCggZm9ybXMsIGZ1bmN0aW9uICggZm9ybSApIHtcblx0XHRcdFx0aWYgKCBmb3JtICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZvcm07XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdFx0cGx1cmFsUnVsZXMgPSB0aGlzLnBsdXJhbFJ1bGVzWyAkLmkxOG4oKS5sb2NhbGUgXTtcblxuXHRcdFx0aWYgKCAhcGx1cmFsUnVsZXMgKSB7XG5cdFx0XHRcdC8vIGRlZmF1bHQgZmFsbGJhY2suXG5cdFx0XHRcdHJldHVybiAoIGNvdW50ID09PSAxICkgPyBmb3Jtc1sgMCBdIDogZm9ybXNbIDEgXTtcblx0XHRcdH1cblxuXHRcdFx0cGx1cmFsRm9ybUluZGV4ID0gdGhpcy5nZXRQbHVyYWxGb3JtKCBjb3VudCwgcGx1cmFsUnVsZXMgKTtcblx0XHRcdHBsdXJhbEZvcm1JbmRleCA9IE1hdGgubWluKCBwbHVyYWxGb3JtSW5kZXgsIGZvcm1zLmxlbmd0aCAtIDEgKTtcblxuXHRcdFx0cmV0dXJuIGZvcm1zWyBwbHVyYWxGb3JtSW5kZXggXTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogRm9yIHRoZSBudW1iZXIsIGdldCB0aGUgcGx1cmFsIGZvciBpbmRleFxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtpbnRlZ2VyfSBudW1iZXJcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gcGx1cmFsUnVsZXNcblx0XHQgKiBAcmV0dXJuIHtpbnRlZ2VyfSBwbHVyYWwgZm9ybSBpbmRleFxuXHRcdCAqL1xuXHRcdGdldFBsdXJhbEZvcm06IGZ1bmN0aW9uICggbnVtYmVyLCBwbHVyYWxSdWxlcyApIHtcblx0XHRcdHZhciBpLFxuXHRcdFx0XHRwbHVyYWxGb3JtcyA9IFsgJ3plcm8nLCAnb25lJywgJ3R3bycsICdmZXcnLCAnbWFueScsICdvdGhlcicgXSxcblx0XHRcdFx0cGx1cmFsRm9ybUluZGV4ID0gMDtcblxuXHRcdFx0Zm9yICggaSA9IDA7IGkgPCBwbHVyYWxGb3Jtcy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0aWYgKCBwbHVyYWxSdWxlc1sgcGx1cmFsRm9ybXNbIGkgXSBdICkge1xuXHRcdFx0XHRcdGlmICggcGx1cmFsUnVsZVBhcnNlciggcGx1cmFsUnVsZXNbIHBsdXJhbEZvcm1zWyBpIF0gXSwgbnVtYmVyICkgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcGx1cmFsRm9ybUluZGV4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHBsdXJhbEZvcm1JbmRleCsrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBwbHVyYWxGb3JtSW5kZXg7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnRzIGEgbnVtYmVyIHVzaW5nIGRpZ2l0VHJhbnNmb3JtVGFibGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbnVtIFZhbHVlIHRvIGJlIGNvbnZlcnRlZFxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gaW50ZWdlciBDb252ZXJ0IHRoZSByZXR1cm4gdmFsdWUgdG8gYW4gaW50ZWdlclxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ30gVGhlIG51bWJlciBjb252ZXJ0ZWQgaW50byBhIFN0cmluZy5cblx0XHQgKi9cblx0XHRjb252ZXJ0TnVtYmVyOiBmdW5jdGlvbiAoIG51bSwgaW50ZWdlciApIHtcblx0XHRcdHZhciB0bXAsIGl0ZW0sIGksXG5cdFx0XHRcdHRyYW5zZm9ybVRhYmxlLCBudW1iZXJTdHJpbmcsIGNvbnZlcnRlZE51bWJlcjtcblxuXHRcdFx0Ly8gU2V0IHRoZSB0YXJnZXQgVHJhbnNmb3JtIHRhYmxlOlxuXHRcdFx0dHJhbnNmb3JtVGFibGUgPSB0aGlzLmRpZ2l0VHJhbnNmb3JtVGFibGUoICQuaTE4bigpLmxvY2FsZSApO1xuXHRcdFx0bnVtYmVyU3RyaW5nID0gU3RyaW5nKCBudW0gKTtcblx0XHRcdGNvbnZlcnRlZE51bWJlciA9ICcnO1xuXG5cdFx0XHRpZiAoICF0cmFuc2Zvcm1UYWJsZSApIHtcblx0XHRcdFx0cmV0dXJuIG51bTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIHJlc3RvcmUgdG8gTGF0aW4gbnVtYmVyIGZsYWcgaXMgc2V0OlxuXHRcdFx0aWYgKCBpbnRlZ2VyICkge1xuXHRcdFx0XHRpZiAoIHBhcnNlRmxvYXQoIG51bSwgMTAgKSA9PT0gbnVtICkge1xuXHRcdFx0XHRcdHJldHVybiBudW07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0bXAgPSBbXTtcblxuXHRcdFx0XHRmb3IgKCBpdGVtIGluIHRyYW5zZm9ybVRhYmxlICkge1xuXHRcdFx0XHRcdHRtcFsgdHJhbnNmb3JtVGFibGVbIGl0ZW0gXSBdID0gaXRlbTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRyYW5zZm9ybVRhYmxlID0gdG1wO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKCBpID0gMDsgaSA8IG51bWJlclN0cmluZy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0aWYgKCB0cmFuc2Zvcm1UYWJsZVsgbnVtYmVyU3RyaW5nWyBpIF0gXSApIHtcblx0XHRcdFx0XHRjb252ZXJ0ZWROdW1iZXIgKz0gdHJhbnNmb3JtVGFibGVbIG51bWJlclN0cmluZ1sgaSBdIF07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29udmVydGVkTnVtYmVyICs9IG51bWJlclN0cmluZ1sgaSBdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBpbnRlZ2VyID8gcGFyc2VGbG9hdCggY29udmVydGVkTnVtYmVyLCAxMCApIDogY29udmVydGVkTnVtYmVyO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBHcmFtbWF0aWNhbCB0cmFuc2Zvcm1hdGlvbnMsIG5lZWRlZCBmb3IgaW5mbGVjdGVkIGxhbmd1YWdlcy5cblx0XHQgKiBJbnZva2VkIGJ5IHB1dHRpbmcge3tncmFtbWFyOmZvcm18d29yZH19IGluIGEgbWVzc2FnZS5cblx0XHQgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCBmb3IgbGFuZ3VhZ2VzIHRoYXQgbmVlZCBzcGVjaWFsIGdyYW1tYXIgcnVsZXNcblx0XHQgKiBhcHBsaWVkIGR5bmFtaWNhbGx5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHdvcmRcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gZm9ybVxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ31cblx0XHQgKi9cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0XHRjb252ZXJ0R3JhbW1hcjogZnVuY3Rpb24gKCB3b3JkLCBmb3JtICkge1xuXHRcdFx0cmV0dXJuIHdvcmQ7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFByb3ZpZGVzIGFuIGFsdGVybmF0aXZlIHRleHQgZGVwZW5kaW5nIG9uIHNwZWNpZmllZCBnZW5kZXIuIFVzYWdlXG5cdFx0ICoge3tnZW5kZXI6W2dlbmRlcnx1c2VyIG9iamVjdF18bWFzY3VsaW5lfGZlbWluaW5lfG5ldXRyYWx9fS4gSWYgc2Vjb25kXG5cdFx0ICogb3IgdGhpcmQgcGFyYW1ldGVyIGFyZSBub3Qgc3BlY2lmaWVkLCBtYXNjdWxpbmUgaXMgdXNlZC5cblx0XHQgKlxuXHRcdCAqIFRoZXNlIGRldGFpbHMgbWF5IGJlIG92ZXJyaWRlbiBwZXIgbGFuZ3VhZ2UuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gZ2VuZGVyXG5cdFx0ICogICAgICBtYWxlLCBmZW1hbGUsIG9yIGFueXRoaW5nIGVsc2UgZm9yIG5ldXRyYWwuXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gZm9ybXNcblx0XHQgKiAgICAgIExpc3Qgb2YgZ2VuZGVyIGZvcm1zXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0Z2VuZGVyOiBmdW5jdGlvbiAoIGdlbmRlciwgZm9ybXMgKSB7XG5cdFx0XHRpZiAoICFmb3JtcyB8fCBmb3Jtcy5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHRcdHJldHVybiAnJztcblx0XHRcdH1cblxuXHRcdFx0d2hpbGUgKCBmb3Jtcy5sZW5ndGggPCAyICkge1xuXHRcdFx0XHRmb3Jtcy5wdXNoKCBmb3Jtc1sgZm9ybXMubGVuZ3RoIC0gMSBdICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggZ2VuZGVyID09PSAnbWFsZScgKSB7XG5cdFx0XHRcdHJldHVybiBmb3Jtc1sgMCBdO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGdlbmRlciA9PT0gJ2ZlbWFsZScgKSB7XG5cdFx0XHRcdHJldHVybiBmb3Jtc1sgMSBdO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gKCBmb3Jtcy5sZW5ndGggPT09IDMgKSA/IGZvcm1zWyAyIF0gOiBmb3Jtc1sgMCBdO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBHZXQgdGhlIGRpZ2l0IHRyYW5zZm9ybSB0YWJsZSBmb3IgdGhlIGdpdmVuIGxhbmd1YWdlXG5cdFx0ICogU2VlIGh0dHA6Ly9jbGRyLnVuaWNvZGUub3JnL3RyYW5zbGF0aW9uL251bWJlcmluZy1zeXN0ZW1zXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2Vcblx0XHQgKiBAcmV0dXJuIHtBcnJheXxib29sZWFufSBMaXN0IG9mIGRpZ2l0cyBpbiB0aGUgcGFzc2VkIGxhbmd1YWdlIG9yIGZhbHNlXG5cdFx0ICogcmVwcmVzZW50YXRpb24sIG9yIGJvb2xlYW4gZmFsc2UgaWYgdGhlcmUgaXMgbm8gaW5mb3JtYXRpb24uXG5cdFx0ICovXG5cdFx0ZGlnaXRUcmFuc2Zvcm1UYWJsZTogZnVuY3Rpb24gKCBsYW5ndWFnZSApIHtcblx0XHRcdHZhciB0YWJsZXMgPSB7XG5cdFx0XHRcdGFyOiAn2aDZodmi2aPZpNml2abZp9mo2aknLFxuXHRcdFx0XHRmYTogJ9uw27Hbstuz27Tbtdu227fbuNu5Jyxcblx0XHRcdFx0bWw6ICfgtabgtafgtajgtangtargtavgtazgta3gta7gta8nLFxuXHRcdFx0XHRrbjogJ+CzpuCzp+CzqOCzqeCzquCzq+CzrOCzreCzruCzrycsXG5cdFx0XHRcdGxvOiAn4LuQ4LuR4LuS4LuT4LuU4LuV4LuW4LuX4LuY4LuZJyxcblx0XHRcdFx0b3I6ICfgrabgrafgrajgrangrargravgrazgra3gra7gra8nLFxuXHRcdFx0XHRraDogJ+GfoOGfoeGfouGfo+GfpOGfpeGfpuGfp+GfqOGfqScsXG5cdFx0XHRcdHBhOiAn4Kmm4Kmn4Kmo4Kmp4Kmq4Kmr4Kms4Kmt4Kmu4KmvJyxcblx0XHRcdFx0Z3U6ICfgq6bgq6fgq6jgq6ngq6rgq6vgq6zgq63gq67gq68nLFxuXHRcdFx0XHRoaTogJ+ClpuClp+ClqOClqeClquClq+ClrOClreClruClrycsXG5cdFx0XHRcdG15OiAn4YGA4YGB4YGC4YGD4YGE4YGF4YGG4YGH4YGI4YGJJyxcblx0XHRcdFx0dGE6ICfgr6bgr6fgr6jgr6ngr6rgr6vgr6zgr63gr67gr68nLFxuXHRcdFx0XHR0ZTogJ+CxpuCxp+CxqOCxqeCxquCxq+CxrOCxreCxruCxrycsXG5cdFx0XHRcdHRoOiAn4LmQ4LmR4LmS4LmT4LmU4LmV4LmW4LmX4LmY4LmZJywgLy8gRklYTUUgdXNlIGlzbyA2MzkgY29kZXNcblx0XHRcdFx0Ym86ICfgvKDgvKHgvKLgvKPgvKTgvKXgvKbgvKfgvKjgvKknIC8vIEZJWE1FIHVzZSBpc28gNjM5IGNvZGVzXG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoICF0YWJsZXNbIGxhbmd1YWdlIF0gKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRhYmxlc1sgbGFuZ3VhZ2UgXS5zcGxpdCggJycgKTtcblx0XHR9XG5cdH07XG5cblx0JC5leHRlbmQoICQuaTE4bi5sYW5ndWFnZXMsIHtcblx0XHQnZGVmYXVsdCc6IGxhbmd1YWdlXG5cdH0gKTtcbn0oIGpRdWVyeSApICk7XG4iLCIvKiFcbiAqIGpRdWVyeSBJbnRlcm5hdGlvbmFsaXphdGlvbiBsaWJyYXJ5IC0gTWVzc2FnZSBTdG9yZVxuICpcbiAqIENvcHlyaWdodCAoQykgMjAxMiBTYW50aG9zaCBUaG90dGluZ2FsXG4gKlxuICoganF1ZXJ5LmkxOG4gaXMgZHVhbCBsaWNlbnNlZCBHUEx2MiBvciBsYXRlciBhbmQgTUlULiBZb3UgZG9uJ3QgaGF2ZSB0byBkbyBhbnl0aGluZyBzcGVjaWFsIHRvXG4gKiBjaG9vc2Ugb25lIGxpY2Vuc2Ugb3IgdGhlIG90aGVyIGFuZCB5b3UgZG9uJ3QgaGF2ZSB0byBub3RpZnkgYW55b25lIHdoaWNoIGxpY2Vuc2UgeW91IGFyZSB1c2luZy5cbiAqIFlvdSBhcmUgZnJlZSB0byB1c2UgVW5pdmVyc2FsTGFuZ3VhZ2VTZWxlY3RvciBpbiBjb21tZXJjaWFsIHByb2plY3RzIGFzIGxvbmcgYXMgdGhlIGNvcHlyaWdodFxuICogaGVhZGVyIGlzIGxlZnQgaW50YWN0LiBTZWUgZmlsZXMgR1BMLUxJQ0VOU0UgYW5kIE1JVC1MSUNFTlNFIGZvciBkZXRhaWxzLlxuICpcbiAqIEBsaWNlbmNlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbmNlIDIuMCBvciBsYXRlclxuICogQGxpY2VuY2UgTUlUIExpY2Vuc2VcbiAqL1xuXG4oIGZ1bmN0aW9uICggJCApIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBNZXNzYWdlU3RvcmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5tZXNzYWdlcyA9IHt9O1xuXHRcdHRoaXMuc291cmNlcyA9IHt9O1xuXHR9O1xuXG5cdGZ1bmN0aW9uIGpzb25NZXNzYWdlTG9hZGVyKCB1cmwgKSB7XG5cdFx0dmFyIGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xuXG5cdFx0JC5nZXRKU09OKCB1cmwgKVxuXHRcdFx0LmRvbmUoIGRlZmVycmVkLnJlc29sdmUgKVxuXHRcdFx0LmZhaWwoIGZ1bmN0aW9uICgganF4aHIsIHNldHRpbmdzLCBleGNlcHRpb24gKSB7XG5cdFx0XHRcdCQuaTE4bi5sb2coICdFcnJvciBpbiBsb2FkaW5nIG1lc3NhZ2VzIGZyb20gJyArIHVybCArICcgRXhjZXB0aW9uOiAnICsgZXhjZXB0aW9uICk7XG5cdFx0XHRcdC8vIElnbm9yZSA0MDQgZXhjZXB0aW9uLCBiZWNhdXNlIHdlIGFyZSBoYW5kbGluZyBmYWxsYWJhY2tzIGV4cGxpY2l0bHlcblx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZSgpO1xuXHRcdFx0fSApO1xuXG5cdFx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3dpa2ltZWRpYS9qcXVlcnkuaTE4bi93aWtpL1NwZWNpZmljYXRpb24jd2lraS1NZXNzYWdlX0ZpbGVfTG9hZGluZ1xuXHQgKi9cblx0TWVzc2FnZVN0b3JlLnByb3RvdHlwZSA9IHtcblxuXHRcdC8qKlxuXHRcdCAqIEdlbmVyYWwgbWVzc2FnZSBsb2FkaW5nIEFQSSBUaGlzIGNhbiB0YWtlIGEgVVJMIHN0cmluZyBmb3Jcblx0XHQgKiB0aGUganNvbiBmb3JtYXR0ZWQgbWVzc2FnZXMuXG5cdFx0ICogPGNvZGU+bG9hZCgncGF0aC90by9hbGxfbG9jYWxpemF0aW9ucy5qc29uJyk7PC9jb2RlPlxuXHRcdCAqXG5cdFx0ICogVGhpcyBjYW4gYWxzbyBsb2FkIGEgbG9jYWxpemF0aW9uIGZpbGUgZm9yIGEgbG9jYWxlIDxjb2RlPlxuXHRcdCAqIGxvYWQoICdwYXRoL3RvL2RlLW1lc3NhZ2VzLmpzb24nLCAnZGUnICk7XG5cdFx0ICogPC9jb2RlPlxuXHRcdCAqIEEgZGF0YSBvYmplY3QgY29udGFpbmluZyBtZXNzYWdlIGtleS0gbWVzc2FnZSB0cmFuc2xhdGlvbiBtYXBwaW5nc1xuXHRcdCAqIGNhbiBhbHNvIGJlIHBhc3NlZCBFZzpcblx0XHQgKiA8Y29kZT5cblx0XHQgKiBsb2FkKCB7ICdoZWxsbycgOiAnSGVsbG8nIH0sIG9wdGlvbmFsTG9jYWxlICk7XG5cdFx0ICogPC9jb2RlPiBJZiB0aGUgZGF0YSBhcmd1bWVudCBpc1xuXHRcdCAqIG51bGwvdW5kZWZpbmVkL2ZhbHNlLFxuXHRcdCAqIGFsbCBjYWNoZWQgbWVzc2FnZXMgZm9yIHRoZSBpMThuIGluc3RhbmNlIHdpbGwgZ2V0IHJlc2V0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzb3VyY2Vcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxlIExhbmd1YWdlIHRhZ1xuXHRcdCAqIEByZXR1cm4ge2pRdWVyeS5Qcm9taXNlfVxuXHRcdCAqL1xuXHRcdGxvYWQ6IGZ1bmN0aW9uICggc291cmNlLCBsb2NhbGUgKSB7XG5cdFx0XHR2YXIga2V5ID0gbnVsbCxcblx0XHRcdFx0ZGVmZXJyZWQgPSBudWxsLFxuXHRcdFx0XHRkZWZlcnJlZHMgPSBbXSxcblx0XHRcdFx0bWVzc2FnZVN0b3JlID0gdGhpcztcblxuXHRcdFx0aWYgKCB0eXBlb2Ygc291cmNlID09PSAnc3RyaW5nJyApIHtcblx0XHRcdFx0Ly8gVGhpcyBpcyBhIFVSTCB0byB0aGUgbWVzc2FnZXMgZmlsZS5cblx0XHRcdFx0JC5pMThuLmxvZyggJ0xvYWRpbmcgbWVzc2FnZXMgZnJvbTogJyArIHNvdXJjZSApO1xuXHRcdFx0XHRkZWZlcnJlZCA9IGpzb25NZXNzYWdlTG9hZGVyKCBzb3VyY2UgKVxuXHRcdFx0XHRcdC5kb25lKCBmdW5jdGlvbiAoIGxvY2FsaXphdGlvbiApIHtcblx0XHRcdFx0XHRcdG1lc3NhZ2VTdG9yZS5zZXQoIGxvY2FsZSwgbG9jYWxpemF0aW9uICk7XG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggbG9jYWxlICkge1xuXHRcdFx0XHQvLyBzb3VyY2UgaXMgYW4ga2V5LXZhbHVlIHBhaXIgb2YgbWVzc2FnZXMgZm9yIGdpdmVuIGxvY2FsZVxuXHRcdFx0XHRtZXNzYWdlU3RvcmUuc2V0KCBsb2NhbGUsIHNvdXJjZSApO1xuXG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVzb2x2ZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gc291cmNlIGlzIGEga2V5LXZhbHVlIHBhaXIgb2YgbG9jYWxlcyBhbmQgdGhlaXIgc291cmNlXG5cdFx0XHRcdGZvciAoIGtleSBpbiBzb3VyY2UgKSB7XG5cdFx0XHRcdFx0aWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIHNvdXJjZSwga2V5ICkgKSB7XG5cdFx0XHRcdFx0XHRsb2NhbGUgPSBrZXk7XG5cdFx0XHRcdFx0XHQvLyBObyB7bG9jYWxlfSBnaXZlbiwgYXNzdW1lIGRhdGEgaXMgYSBncm91cCBvZiBsYW5ndWFnZXMsXG5cdFx0XHRcdFx0XHQvLyBjYWxsIHRoaXMgZnVuY3Rpb24gYWdhaW4gZm9yIGVhY2ggbGFuZ3VhZ2UuXG5cdFx0XHRcdFx0XHRkZWZlcnJlZHMucHVzaCggbWVzc2FnZVN0b3JlLmxvYWQoIHNvdXJjZVsga2V5IF0sIGxvY2FsZSApICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAkLndoZW4uYXBwbHkoICQsIGRlZmVycmVkcyApO1xuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFNldCBtZXNzYWdlcyB0byB0aGUgZ2l2ZW4gbG9jYWxlLlxuXHRcdCAqIElmIGxvY2FsZSBleGlzdHMsIGFkZCBtZXNzYWdlcyB0byB0aGUgbG9jYWxlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsZVxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlc1xuXHRcdCAqL1xuXHRcdHNldDogZnVuY3Rpb24gKCBsb2NhbGUsIG1lc3NhZ2VzICkge1xuXHRcdFx0aWYgKCAhdGhpcy5tZXNzYWdlc1sgbG9jYWxlIF0gKSB7XG5cdFx0XHRcdHRoaXMubWVzc2FnZXNbIGxvY2FsZSBdID0gbWVzc2FnZXM7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLm1lc3NhZ2VzWyBsb2NhbGUgXSA9ICQuZXh0ZW5kKCB0aGlzLm1lc3NhZ2VzWyBsb2NhbGUgXSwgbWVzc2FnZXMgKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxlXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VLZXlcblx0XHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGdldDogZnVuY3Rpb24gKCBsb2NhbGUsIG1lc3NhZ2VLZXkgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5tZXNzYWdlc1sgbG9jYWxlIF0gJiYgdGhpcy5tZXNzYWdlc1sgbG9jYWxlIF1bIG1lc3NhZ2VLZXkgXTtcblx0XHR9XG5cdH07XG5cblx0JC5leHRlbmQoICQuaTE4bi5tZXNzYWdlU3RvcmUsIG5ldyBNZXNzYWdlU3RvcmUoKSApO1xufSggalF1ZXJ5ICkgKTtcbiIsIi8qIVxuICogalF1ZXJ5IEludGVybmF0aW9uYWxpemF0aW9uIGxpYnJhcnlcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTEtMjAxMyBTYW50aG9zaCBUaG90dGluZ2FsLCBOZWlsIEthbmRhbGdhb25rYXJcbiAqXG4gKiBqcXVlcnkuaTE4biBpcyBkdWFsIGxpY2Vuc2VkIEdQTHYyIG9yIGxhdGVyIGFuZCBNSVQuIFlvdSBkb24ndCBoYXZlIHRvIGRvXG4gKiBhbnl0aGluZyBzcGVjaWFsIHRvIGNob29zZSBvbmUgbGljZW5zZSBvciB0aGUgb3RoZXIgYW5kIHlvdSBkb24ndCBoYXZlIHRvXG4gKiBub3RpZnkgYW55b25lIHdoaWNoIGxpY2Vuc2UgeW91IGFyZSB1c2luZy4gWW91IGFyZSBmcmVlIHRvIHVzZVxuICogVW5pdmVyc2FsTGFuZ3VhZ2VTZWxlY3RvciBpbiBjb21tZXJjaWFsIHByb2plY3RzIGFzIGxvbmcgYXMgdGhlIGNvcHlyaWdodFxuICogaGVhZGVyIGlzIGxlZnQgaW50YWN0LiBTZWUgZmlsZXMgR1BMLUxJQ0VOU0UgYW5kIE1JVC1MSUNFTlNFIGZvciBkZXRhaWxzLlxuICpcbiAqIEBsaWNlbmNlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbmNlIDIuMCBvciBsYXRlclxuICogQGxpY2VuY2UgTUlUIExpY2Vuc2VcbiAqL1xuXG4oIGZ1bmN0aW9uICggJCApIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBNZXNzYWdlUGFyc2VyID0gZnVuY3Rpb24gKCBvcHRpb25zICkge1xuXHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKCB7fSwgJC5pMThuLnBhcnNlci5kZWZhdWx0cywgb3B0aW9ucyApO1xuXHRcdHRoaXMubGFuZ3VhZ2UgPSAkLmkxOG4ubGFuZ3VhZ2VzWyBTdHJpbmcubG9jYWxlIF0gfHwgJC5pMThuLmxhbmd1YWdlc1sgJ2RlZmF1bHQnIF07XG5cdFx0dGhpcy5lbWl0dGVyID0gJC5pMThuLnBhcnNlci5lbWl0dGVyO1xuXHR9O1xuXG5cdE1lc3NhZ2VQYXJzZXIucHJvdG90eXBlID0ge1xuXG5cdFx0Y29uc3RydWN0b3I6IE1lc3NhZ2VQYXJzZXIsXG5cblx0XHRzaW1wbGVQYXJzZTogZnVuY3Rpb24gKCBtZXNzYWdlLCBwYXJhbWV0ZXJzICkge1xuXHRcdFx0cmV0dXJuIG1lc3NhZ2UucmVwbGFjZSggL1xcJChcXGQrKS9nLCBmdW5jdGlvbiAoIHN0ciwgbWF0Y2ggKSB7XG5cdFx0XHRcdHZhciBpbmRleCA9IHBhcnNlSW50KCBtYXRjaCwgMTAgKSAtIDE7XG5cblx0XHRcdFx0cmV0dXJuIHBhcmFtZXRlcnNbIGluZGV4IF0gIT09IHVuZGVmaW5lZCA/IHBhcmFtZXRlcnNbIGluZGV4IF0gOiAnJCcgKyBtYXRjaDtcblx0XHRcdH0gKTtcblx0XHR9LFxuXG5cdFx0cGFyc2U6IGZ1bmN0aW9uICggbWVzc2FnZSwgcmVwbGFjZW1lbnRzICkge1xuXHRcdFx0aWYgKCBtZXNzYWdlLmluZGV4T2YoICd7eycgKSA8IDAgKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnNpbXBsZVBhcnNlKCBtZXNzYWdlLCByZXBsYWNlbWVudHMgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5lbWl0dGVyLmxhbmd1YWdlID0gJC5pMThuLmxhbmd1YWdlc1sgJC5pMThuKCkubG9jYWxlIF0gfHxcblx0XHRcdFx0JC5pMThuLmxhbmd1YWdlc1sgJ2RlZmF1bHQnIF07XG5cblx0XHRcdHJldHVybiB0aGlzLmVtaXR0ZXIuZW1pdCggdGhpcy5hc3QoIG1lc3NhZ2UgKSwgcmVwbGFjZW1lbnRzICk7XG5cdFx0fSxcblxuXHRcdGFzdDogZnVuY3Rpb24gKCBtZXNzYWdlICkge1xuXHRcdFx0dmFyIHBpcGUsIGNvbG9uLCBiYWNrc2xhc2gsIGFueUNoYXJhY3RlciwgZG9sbGFyLCBkaWdpdHMsIHJlZ3VsYXJMaXRlcmFsLFxuXHRcdFx0XHRyZWd1bGFyTGl0ZXJhbFdpdGhvdXRCYXIsIHJlZ3VsYXJMaXRlcmFsV2l0aG91dFNwYWNlLCBlc2NhcGVkT3JMaXRlcmFsV2l0aG91dEJhcixcblx0XHRcdFx0ZXNjYXBlZE9yUmVndWxhckxpdGVyYWwsIHRlbXBsYXRlQ29udGVudHMsIHRlbXBsYXRlTmFtZSwgb3BlblRlbXBsYXRlLFxuXHRcdFx0XHRjbG9zZVRlbXBsYXRlLCBleHByZXNzaW9uLCBwYXJhbUV4cHJlc3Npb24sIHJlc3VsdCxcblx0XHRcdFx0cG9zID0gMDtcblxuXHRcdFx0Ly8gVHJ5IHBhcnNlcnMgdW50aWwgb25lIHdvcmtzLCBpZiBub25lIHdvcmsgcmV0dXJuIG51bGxcblx0XHRcdGZ1bmN0aW9uIGNob2ljZSggcGFyc2VyU3ludGF4ICkge1xuXHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHZhciBpLCByZXN1bHQ7XG5cblx0XHRcdFx0XHRmb3IgKCBpID0gMDsgaSA8IHBhcnNlclN5bnRheC5sZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IHBhcnNlclN5bnRheFsgaSBdKCk7XG5cblx0XHRcdFx0XHRcdGlmICggcmVzdWx0ICE9PSBudWxsICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUcnkgc2V2ZXJhbCBwYXJzZXJTeW50YXgtZXMgaW4gYSByb3cuXG5cdFx0XHQvLyBBbGwgbXVzdCBzdWNjZWVkOyBvdGhlcndpc2UsIHJldHVybiBudWxsLlxuXHRcdFx0Ly8gVGhpcyBpcyB0aGUgb25seSBlYWdlciBvbmUuXG5cdFx0XHRmdW5jdGlvbiBzZXF1ZW5jZSggcGFyc2VyU3ludGF4ICkge1xuXHRcdFx0XHR2YXIgaSwgcmVzLFxuXHRcdFx0XHRcdG9yaWdpbmFsUG9zID0gcG9zLFxuXHRcdFx0XHRcdHJlc3VsdCA9IFtdO1xuXG5cdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgcGFyc2VyU3ludGF4Lmxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRcdHJlcyA9IHBhcnNlclN5bnRheFsgaSBdKCk7XG5cblx0XHRcdFx0XHRpZiAoIHJlcyA9PT0gbnVsbCApIHtcblx0XHRcdFx0XHRcdHBvcyA9IG9yaWdpbmFsUG9zO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXN1bHQucHVzaCggcmVzICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSdW4gdGhlIHNhbWUgcGFyc2VyIG92ZXIgYW5kIG92ZXIgdW50aWwgaXQgZmFpbHMuXG5cdFx0XHQvLyBNdXN0IHN1Y2NlZWQgYSBtaW5pbXVtIG9mIG4gdGltZXM7IG90aGVyd2lzZSwgcmV0dXJuIG51bGwuXG5cdFx0XHRmdW5jdGlvbiBuT3JNb3JlKCBuLCBwICkge1xuXHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHZhciBvcmlnaW5hbFBvcyA9IHBvcyxcblx0XHRcdFx0XHRcdHJlc3VsdCA9IFtdLFxuXHRcdFx0XHRcdFx0cGFyc2VkID0gcCgpO1xuXG5cdFx0XHRcdFx0d2hpbGUgKCBwYXJzZWQgIT09IG51bGwgKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQucHVzaCggcGFyc2VkICk7XG5cdFx0XHRcdFx0XHRwYXJzZWQgPSBwKCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCByZXN1bHQubGVuZ3RoIDwgbiApIHtcblx0XHRcdFx0XHRcdHBvcyA9IG9yaWdpbmFsUG9zO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBIZWxwZXJzIC0tIGp1c3QgbWFrZSBwYXJzZXJTeW50YXggb3V0IG9mIHNpbXBsZXIgSlMgYnVpbHRpbiB0eXBlc1xuXG5cdFx0XHRmdW5jdGlvbiBtYWtlU3RyaW5nUGFyc2VyKCBzICkge1xuXHRcdFx0XHR2YXIgbGVuID0gcy5sZW5ndGg7XG5cblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHR2YXIgcmVzdWx0ID0gbnVsbDtcblxuXHRcdFx0XHRcdGlmICggbWVzc2FnZS5zbGljZSggcG9zLCBwb3MgKyBsZW4gKSA9PT0gcyApIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IHM7XG5cdFx0XHRcdFx0XHRwb3MgKz0gbGVuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIG1ha2VSZWdleFBhcnNlciggcmVnZXggKSB7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0dmFyIG1hdGNoZXMgPSBtZXNzYWdlLnNsaWNlKCBwb3MgKS5tYXRjaCggcmVnZXggKTtcblxuXHRcdFx0XHRcdGlmICggbWF0Y2hlcyA9PT0gbnVsbCApIHtcblx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHBvcyArPSBtYXRjaGVzWyAwIF0ubGVuZ3RoO1xuXG5cdFx0XHRcdFx0cmV0dXJuIG1hdGNoZXNbIDAgXTtcblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0cGlwZSA9IG1ha2VTdHJpbmdQYXJzZXIoICd8JyApO1xuXHRcdFx0Y29sb24gPSBtYWtlU3RyaW5nUGFyc2VyKCAnOicgKTtcblx0XHRcdGJhY2tzbGFzaCA9IG1ha2VTdHJpbmdQYXJzZXIoICdcXFxcJyApO1xuXHRcdFx0YW55Q2hhcmFjdGVyID0gbWFrZVJlZ2V4UGFyc2VyKCAvXi4vICk7XG5cdFx0XHRkb2xsYXIgPSBtYWtlU3RyaW5nUGFyc2VyKCAnJCcgKTtcblx0XHRcdGRpZ2l0cyA9IG1ha2VSZWdleFBhcnNlciggL15cXGQrLyApO1xuXHRcdFx0cmVndWxhckxpdGVyYWwgPSBtYWtlUmVnZXhQYXJzZXIoIC9eW157fVtcXF0kXFxcXF0vICk7XG5cdFx0XHRyZWd1bGFyTGl0ZXJhbFdpdGhvdXRCYXIgPSBtYWtlUmVnZXhQYXJzZXIoIC9eW157fVtcXF0kXFxcXHxdLyApO1xuXHRcdFx0cmVndWxhckxpdGVyYWxXaXRob3V0U3BhY2UgPSBtYWtlUmVnZXhQYXJzZXIoIC9eW157fVtcXF0kXFxzXS8gKTtcblxuXHRcdFx0Ly8gVGhlcmUgaXMgYSBnZW5lcmFsIHBhdHRlcm46XG5cdFx0XHQvLyBwYXJzZSBhIHRoaW5nO1xuXHRcdFx0Ly8gaWYgaXQgd29ya2VkLCBhcHBseSB0cmFuc2Zvcm0sXG5cdFx0XHQvLyBvdGhlcndpc2UgcmV0dXJuIG51bGwuXG5cdFx0XHQvLyBCdXQgdXNpbmcgdGhpcyBhcyBhIGNvbWJpbmF0b3Igc2VlbXMgdG8gY2F1c2UgcHJvYmxlbXNcblx0XHRcdC8vIHdoZW4gY29tYmluZWQgd2l0aCBuT3JNb3JlKCkuXG5cdFx0XHQvLyBNYXkgYmUgc29tZSBzY29waW5nIGlzc3VlLlxuXHRcdFx0ZnVuY3Rpb24gdHJhbnNmb3JtKCBwLCBmbiApIHtcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHR2YXIgcmVzdWx0ID0gcCgpO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IG51bGwgOiBmbiggcmVzdWx0ICk7XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cblx0XHRcdC8vIFVzZWQgdG8gZGVmaW5lIFwibGl0ZXJhbHNcIiB3aXRoaW4gdGVtcGxhdGUgcGFyYW1ldGVycy4gVGhlIHBpcGVcblx0XHRcdC8vIGNoYXJhY3RlciBpcyB0aGUgcGFyYW1ldGVyIGRlbGltZXRlciwgc28gYnkgZGVmYXVsdFxuXHRcdFx0Ly8gaXQgaXMgbm90IGEgbGl0ZXJhbCBpbiB0aGUgcGFyYW1ldGVyXG5cdFx0XHRmdW5jdGlvbiBsaXRlcmFsV2l0aG91dEJhcigpIHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IG5Pck1vcmUoIDEsIGVzY2FwZWRPckxpdGVyYWxXaXRob3V0QmFyICkoKTtcblxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0ID09PSBudWxsID8gbnVsbCA6IHJlc3VsdC5qb2luKCAnJyApO1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBsaXRlcmFsKCkge1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gbk9yTW9yZSggMSwgZXNjYXBlZE9yUmVndWxhckxpdGVyYWwgKSgpO1xuXG5cdFx0XHRcdHJldHVybiByZXN1bHQgPT09IG51bGwgPyBudWxsIDogcmVzdWx0LmpvaW4oICcnICk7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIGVzY2FwZWRMaXRlcmFsKCkge1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gc2VxdWVuY2UoIFsgYmFja3NsYXNoLCBhbnlDaGFyYWN0ZXIgXSApO1xuXG5cdFx0XHRcdHJldHVybiByZXN1bHQgPT09IG51bGwgPyBudWxsIDogcmVzdWx0WyAxIF07XG5cdFx0XHR9XG5cblx0XHRcdGNob2ljZSggWyBlc2NhcGVkTGl0ZXJhbCwgcmVndWxhckxpdGVyYWxXaXRob3V0U3BhY2UgXSApO1xuXHRcdFx0ZXNjYXBlZE9yTGl0ZXJhbFdpdGhvdXRCYXIgPSBjaG9pY2UoIFsgZXNjYXBlZExpdGVyYWwsIHJlZ3VsYXJMaXRlcmFsV2l0aG91dEJhciBdICk7XG5cdFx0XHRlc2NhcGVkT3JSZWd1bGFyTGl0ZXJhbCA9IGNob2ljZSggWyBlc2NhcGVkTGl0ZXJhbCwgcmVndWxhckxpdGVyYWwgXSApO1xuXG5cdFx0XHRmdW5jdGlvbiByZXBsYWNlbWVudCgpIHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IHNlcXVlbmNlKCBbIGRvbGxhciwgZGlnaXRzIF0gKTtcblxuXHRcdFx0XHRpZiAoIHJlc3VsdCA9PT0gbnVsbCApIHtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBbICdSRVBMQUNFJywgcGFyc2VJbnQoIHJlc3VsdFsgMSBdLCAxMCApIC0gMSBdO1xuXHRcdFx0fVxuXG5cdFx0XHR0ZW1wbGF0ZU5hbWUgPSB0cmFuc2Zvcm0oXG5cdFx0XHRcdC8vIHNlZSAkd2dMZWdhbFRpdGxlQ2hhcnNcblx0XHRcdFx0Ly8gbm90IGFsbG93aW5nIDogZHVlIHRvIHRoZSBuZWVkIHRvIGNhdGNoIFwiUExVUkFMOiQxXCJcblx0XHRcdFx0bWFrZVJlZ2V4UGFyc2VyKCAvXlsgIVwiJCYnKCkqLC4vMC05Oz0/QEEtWl5fYGEten5cXHg4MC1cXHhGRistXSsvICksXG5cblx0XHRcdFx0ZnVuY3Rpb24gKCByZXN1bHQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdC50b1N0cmluZygpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXG5cdFx0XHRmdW5jdGlvbiB0ZW1wbGF0ZVBhcmFtKCkge1xuXHRcdFx0XHR2YXIgZXhwcixcblx0XHRcdFx0XHRyZXN1bHQgPSBzZXF1ZW5jZSggWyBwaXBlLCBuT3JNb3JlKCAwLCBwYXJhbUV4cHJlc3Npb24gKSBdICk7XG5cblx0XHRcdFx0aWYgKCByZXN1bHQgPT09IG51bGwgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRleHByID0gcmVzdWx0WyAxIF07XG5cblx0XHRcdFx0Ly8gdXNlIGEgXCJDT05DQVRcIiBvcGVyYXRvciBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgbm9kZXMsXG5cdFx0XHRcdC8vIG90aGVyd2lzZSByZXR1cm4gdGhlIGZpcnN0IG5vZGUsIHJhdy5cblx0XHRcdFx0cmV0dXJuIGV4cHIubGVuZ3RoID4gMSA/IFsgJ0NPTkNBVCcgXS5jb25jYXQoIGV4cHIgKSA6IGV4cHJbIDAgXTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gdGVtcGxhdGVXaXRoUmVwbGFjZW1lbnQoKSB7XG5cdFx0XHRcdHZhciByZXN1bHQgPSBzZXF1ZW5jZSggWyB0ZW1wbGF0ZU5hbWUsIGNvbG9uLCByZXBsYWNlbWVudCBdICk7XG5cblx0XHRcdFx0cmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IG51bGwgOiBbIHJlc3VsdFsgMCBdLCByZXN1bHRbIDIgXSBdO1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiB0ZW1wbGF0ZVdpdGhPdXRSZXBsYWNlbWVudCgpIHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IHNlcXVlbmNlKCBbIHRlbXBsYXRlTmFtZSwgY29sb24sIHBhcmFtRXhwcmVzc2lvbiBdICk7XG5cblx0XHRcdFx0cmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IG51bGwgOiBbIHJlc3VsdFsgMCBdLCByZXN1bHRbIDIgXSBdO1xuXHRcdFx0fVxuXG5cdFx0XHR0ZW1wbGF0ZUNvbnRlbnRzID0gY2hvaWNlKCBbXG5cdFx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHR2YXIgcmVzID0gc2VxdWVuY2UoIFtcblx0XHRcdFx0XHRcdC8vIHRlbXBsYXRlcyBjYW4gaGF2ZSBwbGFjZWhvbGRlcnMgZm9yIGR5bmFtaWNcblx0XHRcdFx0XHRcdC8vIHJlcGxhY2VtZW50IGVnOiB7e1BMVVJBTDokMXxvbmUgY2FyfCQxIGNhcnN9fVxuXHRcdFx0XHRcdFx0Ly8gb3Igbm8gcGxhY2Vob2xkZXJzIGVnOlxuXHRcdFx0XHRcdFx0Ly8ge3tHUkFNTUFSOmdlbml0aXZlfHt7U0lURU5BTUV9fX1cblx0XHRcdFx0XHRcdGNob2ljZSggWyB0ZW1wbGF0ZVdpdGhSZXBsYWNlbWVudCwgdGVtcGxhdGVXaXRoT3V0UmVwbGFjZW1lbnQgXSApLFxuXHRcdFx0XHRcdFx0bk9yTW9yZSggMCwgdGVtcGxhdGVQYXJhbSApXG5cdFx0XHRcdFx0XSApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHJlcyA9PT0gbnVsbCA/IG51bGwgOiByZXNbIDAgXS5jb25jYXQoIHJlc1sgMSBdICk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHR2YXIgcmVzID0gc2VxdWVuY2UoIFsgdGVtcGxhdGVOYW1lLCBuT3JNb3JlKCAwLCB0ZW1wbGF0ZVBhcmFtICkgXSApO1xuXG5cdFx0XHRcdFx0aWYgKCByZXMgPT09IG51bGwgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gWyByZXNbIDAgXSBdLmNvbmNhdCggcmVzWyAxIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0XSApO1xuXG5cdFx0XHRvcGVuVGVtcGxhdGUgPSBtYWtlU3RyaW5nUGFyc2VyKCAne3snICk7XG5cdFx0XHRjbG9zZVRlbXBsYXRlID0gbWFrZVN0cmluZ1BhcnNlciggJ319JyApO1xuXG5cdFx0XHRmdW5jdGlvbiB0ZW1wbGF0ZSgpIHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IHNlcXVlbmNlKCBbIG9wZW5UZW1wbGF0ZSwgdGVtcGxhdGVDb250ZW50cywgY2xvc2VUZW1wbGF0ZSBdICk7XG5cblx0XHRcdFx0cmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IG51bGwgOiByZXN1bHRbIDEgXTtcblx0XHRcdH1cblxuXHRcdFx0ZXhwcmVzc2lvbiA9IGNob2ljZSggWyB0ZW1wbGF0ZSwgcmVwbGFjZW1lbnQsIGxpdGVyYWwgXSApO1xuXHRcdFx0cGFyYW1FeHByZXNzaW9uID0gY2hvaWNlKCBbIHRlbXBsYXRlLCByZXBsYWNlbWVudCwgbGl0ZXJhbFdpdGhvdXRCYXIgXSApO1xuXG5cdFx0XHRmdW5jdGlvbiBzdGFydCgpIHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IG5Pck1vcmUoIDAsIGV4cHJlc3Npb24gKSgpO1xuXG5cdFx0XHRcdGlmICggcmVzdWx0ID09PSBudWxsICkge1xuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIFsgJ0NPTkNBVCcgXS5jb25jYXQoIHJlc3VsdCApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXN1bHQgPSBzdGFydCgpO1xuXG5cdFx0XHQvKlxuXHRcdFx0ICogRm9yIHN1Y2Nlc3MsIHRoZSBwb3MgbXVzdCBoYXZlIGdvdHRlbiB0byB0aGUgZW5kIG9mIHRoZSBpbnB1dFxuXHRcdFx0ICogYW5kIHJldHVybmVkIGEgbm9uLW51bGwuXG5cdFx0XHQgKiBuLmIuIFRoaXMgaXMgcGFydCBvZiBsYW5ndWFnZSBpbmZyYXN0cnVjdHVyZSwgc28gd2UgZG8gbm90IHRocm93IGFuXG5cdFx0XHQgKiBpbnRlcm5hdGlvbmFsaXphYmxlIG1lc3NhZ2UuXG5cdFx0XHQgKi9cblx0XHRcdGlmICggcmVzdWx0ID09PSBudWxsIHx8IHBvcyAhPT0gbWVzc2FnZS5sZW5ndGggKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggJ1BhcnNlIGVycm9yIGF0IHBvc2l0aW9uICcgKyBwb3MudG9TdHJpbmcoKSArICcgaW4gaW5wdXQ6ICcgKyBtZXNzYWdlICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXG5cdH07XG5cblx0JC5leHRlbmQoICQuaTE4bi5wYXJzZXIsIG5ldyBNZXNzYWdlUGFyc2VyKCkgKTtcbn0oIGpRdWVyeSApICk7IiwidmFyIGNvZGVFeGVyY2lzZXM7XG52YXIgcHJlc2VudGVyQ3NzTGluaztcbnZhciBwcmVzZW50TW9kZUluaXRpYWxpemVkID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHByZXNlbnRUb2dnbGUoKSB7XG4gICAgaWYgKCFwcmVzZW50TW9kZUluaXRpYWxpemVkKSB7XG4gICAgICAgIHByZXNlbnRNb2RlU2V0dXAoKTtcbiAgICAgICAgcHJlc2VudE1vZGVJbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuICAgIGxldCBib2QgPSAkKFwiYm9keVwiKTtcbiAgICBsZXQgcHJlc2VudENsYXNzID0gXCJwcmVzZW50XCI7XG4gICAgbGV0IGZ1bGxIZWlnaHRDbGFzcyA9IFwiZnVsbC1oZWlnaHRcIjtcbiAgICBsZXQgYm90dG9tQ2xhc3MgPSBcImJvdHRvbVwiO1xuICAgIGlmIChib2QuaGFzQ2xhc3MocHJlc2VudENsYXNzKSkge1xuICAgICAgICAkKFwiLnNlY3Rpb24gKlwiKVxuICAgICAgICAgICAgLm5vdChcbiAgICAgICAgICAgICAgICBcImgxLCAucHJlc2VudGF0aW9uLXRpdGxlLCAuYnRuLXByZXNlbnRlciwgLnJ1bmVzdG9uZSwgLnJ1bmVzdG9uZSAqLCAuc2VjdGlvbiwgLnByZSwgY29kZVwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7IC8vc2hvdyBldmVyeXRoaW5nXG4gICAgICAgICQoXCIjY29tcGxldGlvbkJ1dHRvblwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcbiAgICAgICAgYm9kLnJlbW92ZUNsYXNzKHByZXNlbnRDbGFzcyk7XG4gICAgICAgICQoXCIuXCIgKyBmdWxsSGVpZ2h0Q2xhc3MpLnJlbW92ZUNsYXNzKGZ1bGxIZWlnaHRDbGFzcyk7XG4gICAgICAgICQoXCIuXCIgKyBib3R0b21DbGFzcykucmVtb3ZlQ2xhc3MoYm90dG9tQ2xhc3MpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByZXNlbnRNb2RlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgY29kZUV4ZXJjaXNlcy5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcbiAgICAgICAgcHJlc2VudGVyQ3NzTGluay5kaXNhYmxlZCA9IHRydWU7IC8vIGRpc2FibGUgcHJlc2VudF9tb2RlLmNzc1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIuc2VjdGlvbiAqXCIpXG4gICAgICAgICAgICAubm90KFxuICAgICAgICAgICAgICAgIFwiaDEsIC5wcmVzZW50YXRpb24tdGl0bGUsIC5idG4tcHJlc2VudGVyLCAucnVuZXN0b25lLCAucnVuZXN0b25lICosIC5zZWN0aW9uLCAucHJlLCBjb2RlXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hZGRDbGFzcyhcImhpZGRlblwiKTsgLy8gaGlkZSBleHRyYW5lb3VzIHN0dWZmXG4gICAgICAgICQoXCIjY29tcGxldGlvbkJ1dHRvblwiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcbiAgICAgICAgYm9kLmFkZENsYXNzKHByZXNlbnRDbGFzcyk7XG4gICAgICAgIGJvZC5hZGRDbGFzcyhmdWxsSGVpZ2h0Q2xhc3MpO1xuICAgICAgICAkKFwiaHRtbFwiKS5hZGRDbGFzcyhmdWxsSGVpZ2h0Q2xhc3MpO1xuICAgICAgICAkKFwiLnNlY3Rpb24gLnJ1bmVzdG9uZVwiKS5hZGRDbGFzcyhmdWxsSGVpZ2h0Q2xhc3MpO1xuICAgICAgICAkKFwiLmFjLWNhcHRpb25cIikuYWRkQ2xhc3MoYm90dG9tQ2xhc3MpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByZXNlbnRNb2RlXCIsIHByZXNlbnRDbGFzcyk7XG4gICAgICAgIGxvYWRQcmVzZW50ZXJDc3MoKTsgLy8gcHJlc2VudF9tb2RlLmNzcyBzaG91bGQgb25seSBhcHBseSB3aGVuIGluIHByZXNlbnRlciBtb2RlLlxuICAgICAgICBhY3RpdmF0ZUV4ZXJjaXNlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkUHJlc2VudGVyQ3NzKCkge1xuICAgIHByZXNlbnRlckNzc0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgICBwcmVzZW50ZXJDc3NMaW5rLnR5cGUgPSBcInRleHQvY3NzXCI7XG4gICAgcHJlc2VudGVyQ3NzTGluay5ocmVmID0gXCIuLi9fc3RhdGljL3ByZXNlbnRlcl9tb2RlLmNzc1wiO1xuICAgIHByZXNlbnRlckNzc0xpbmsucmVsID0gXCJzdHlsZXNoZWV0XCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKHByZXNlbnRlckNzc0xpbmspO1xufVxuXG5mdW5jdGlvbiBwcmVzZW50TW9kZVNldHVwKCkge1xuICAgIC8vIG1vdmVkIHRoaXMgb3V0IG9mIGNvbmZpZ3VyZVxuICAgIGxldCBkYXRhQ29tcG9uZW50ID0gJChcIltkYXRhLWNoaWxkY29tcG9uZW50XVwiKTtcblxuICAgIC8vIHRoaXMgc3RpbGwgbGVhdmVzIHNvbWUgdGhpbmdzIHNlbWktbWVzc2VkIHVwIHdoZW4geW91IGV4aXQgcHJlc2VudGVyIG1vZGUuXG4gICAgLy8gYnV0IGluc3RydWN0b3JzIHdpbGwgcHJvYmFibHkganVzdCBsZWFybiB0byByZWZyZXNoIHRoZSBwYWdlLlxuICAgIGRhdGFDb21wb25lbnQuYWRkQ2xhc3MoXCJydW5lc3RvbmVcIik7XG4gICAgZGF0YUNvbXBvbmVudC5wYXJlbnQoKS5jbG9zZXN0KFwiZGl2XCIpLm5vdChcIi5zZWN0aW9uXCIpLmFkZENsYXNzKFwicnVuZXN0b25lXCIpO1xuICAgIGRhdGFDb21wb25lbnQucGFyZW50KCkuY2xvc2VzdChcImRpdlwiKS5jc3MoXCJtYXgtd2lkdGhcIiwgXCJub25lXCIpO1xuXG4gICAgZGF0YUNvbXBvbmVudC5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBsZXQgbWUgPSAkKHRoaXMpO1xuICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAuZmluZChcIi5hY19jb2RlX2RpdiwgLmFjX291dHB1dFwiKVxuICAgICAgICAgICAgLndyYXBBbGwoXCI8ZGl2IGNsYXNzPSdhYy1ibG9jaycgc3R5bGU9J3dpZHRoOiAxMDAlOyc+PC9kaXY+XCIpO1xuICAgIH0pO1xuXG4gICAgY29kZWxlbnNMaXN0ZW5lcig1MDApO1xuICAgICQoXCIuc2VjdGlvbiBpbWdcIikud3JhcCgnPGRpdiBjbGFzcz1cInJ1bmVzdG9uZVwiPicpO1xuICAgIGNvZGVFeGVyY2lzZXMgPSAkKFwiLnJ1bmVzdG9uZVwiKS5ub3QoXCIucnVuZXN0b25lIC5ydW5lc3RvbmVcIik7XG4gICAgLy8gY29kZUV4ZXJjaXNlcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgJChcImgxXCIpLmJlZm9yZShcbiAgICAgICAgXCI8ZGl2IGNsYXNzPSdwcmVzZW50YXRpb24tdGl0bGUnPiBcXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPSdwcmV2LWV4ZXJjaXNlIGJ0bi1wcmVzZW50ZXIgYnRuLWdyZXktb3V0bGluZScgb25jbGljaz0ncHJldkV4ZXJjaXNlKCknPkJhY2s8L2J1dHRvbj4gXFxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz0nbmV4dC1leGVyY2lzZSBidG4tcHJlc2VudGVyIGJ0bi1ncmV5LXNvbGlkJyBvbmNsaWNrPSduZXh0RXhlcmNpc2UoKSc+TmV4dDwvYnV0dG9uPiBcXFxuICAgICAgPC9kaXY+XCJcbiAgICApO1xufVxuZnVuY3Rpb24gZ2V0QWN0aXZlRXhlcmNpc2UoKSB7XG4gICAgcmV0dXJuIChhY3RpdmUgPSBjb2RlRXhlcmNpc2VzLmZpbHRlcihcIi5hY3RpdmVcIikpO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZUV4ZXJjaXNlKGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBpbmRleCA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGluZGV4ID0gMDtcbiAgICB9XG5cbiAgICBsZXQgYWN0aXZlID0gZ2V0QWN0aXZlRXhlcmNpc2UoKTtcblxuICAgIGlmIChjb2RlRXhlcmNpc2VzLmxlbmd0aCkge1xuICAgICAgICBhY3RpdmUucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgIGFjdGl2ZSA9ICQoY29kZUV4ZXJjaXNlc1tpbmRleF0pLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICBhY3RpdmUucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XG4gICAgICAgIGNvZGVFeGVyY2lzZXMubm90KGNvZGVFeGVyY2lzZXMuZmlsdGVyKFwiLmFjdGl2ZVwiKSkuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBuZXh0RXhlcmNpc2UoKSB7XG4gICAgbGV0IGFjdGl2ZSA9IGdldEFjdGl2ZUV4ZXJjaXNlKCk7XG4gICAgbGV0IG5leHRJbmRleCA9IGNvZGVFeGVyY2lzZXMuaW5kZXgoYWN0aXZlKSArIDE7XG4gICAgaWYgKG5leHRJbmRleCA8IGNvZGVFeGVyY2lzZXMubGVuZ3RoKSB7XG4gICAgICAgIGFjdGl2YXRlRXhlcmNpc2UobmV4dEluZGV4KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHByZXZFeGVyY2lzZSgpIHtcbiAgICBsZXQgYWN0aXZlID0gZ2V0QWN0aXZlRXhlcmNpc2UoKTtcbiAgICBsZXQgcHJldkluZGV4ID0gY29kZUV4ZXJjaXNlcy5pbmRleChhY3RpdmUpIC0gMTtcbiAgICBpZiAocHJldkluZGV4ID49IDApIHtcbiAgICAgICAgYWN0aXZhdGVFeGVyY2lzZShwcmV2SW5kZXgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29uZmlndXJlKCkge1xuICAgIGxldCByaWdodE5hdiA9ICQoXCIubmF2YmFyLXJpZ2h0XCIpO1xuICAgIHJpZ2h0TmF2LnByZXBlbmQoXG4gICAgICAgIFwiPGxpIGNsYXNzPSdkcm9wZG93biB2aWV3LXRvZ2dsZSc+IFxcXG4gICAgICA8bGFiZWw+VmlldzogXFxcbiAgICAgICAgPHNlbGVjdCBjbGFzcz0nbW9kZS1zZWxlY3QnPiBcXFxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9J3RleHQnPlRleHRib29rPC9vcHRpb24+IFxcXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT0ncHJlc2VudCc+Q29kZSBQcmVzZW50ZXI8L29wdGlvbj4gXFxcbiAgICAgICAgPC9zZWxlY3Q+IFxcXG4gICAgICA8L2xhYmVsPiBcXFxuICAgIDwvbGk+XCJcbiAgICApO1xuXG4gICAgbGV0IG1vZGVTZWxlY3QgPSAkKFwiLm1vZGUtc2VsZWN0XCIpLmNoYW5nZShwcmVzZW50VG9nZ2xlKTtcbn1cblxuZnVuY3Rpb24gY29kZWxlbnNMaXN0ZW5lcihkdXJhdGlvbikge1xuICAgIC8vICQoXCIuRXhlY3V0aW9uVmlzdWFsaXplclwiKS5sZW5ndGggPyBjb25maWd1cmVDb2RlbGVucygpIDogc2V0VGltZW91dChjb2RlbGVuc0xpc3RlbmVyLCBkdXJhdGlvbik7XG4gICAgLy8gY29uZmlndXJlQ29kZWxlbnMoKTtcbn1cblxuZnVuY3Rpb24gY29uZmlndXJlQ29kZWxlbnMoKSB7XG4gICAgbGV0IGFjQ29kZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIGFjQ29kZVRpdGxlLnRleHRDb250ZW50ID0gXCJBY3RpdmUgQ29kZSBXaW5kb3dcIjtcbiAgICBsZXQgYWNDb2RlID0gJChcIi5hY19jb2RlX2RpdlwiKS5yZW1vdmVDbGFzcyhcImNvbC1tZC0xMlwiKTtcbiAgICAkKFwiLmFjX2NvZGVfZGl2XCIpLmFkZENsYXNzKFwiY29sLW1kLTZcIik7XG4gICAgYWNDb2RlLnByZXBlbmQoYWNDb2RlVGl0bGUpO1xuXG4gICAgYWNPdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICBhY091dFRpdGxlLnRleHRDb250ZW50ID0gXCJPdXRwdXQgV2luZG93XCI7XG4gICAgbGV0IGFjT3V0ID0gJChcIi5hY19vdXRwdXRcIikuYWRkQ2xhc3MoXCJjb2wtbWQtNlwiKTtcbiAgICAkKFwiLmFjX291dHB1dFwiKS5wcmVwZW5kKGFjT3V0VGl0bGUpO1xuXG4gICAgbGV0IHNrZXRjaHBhZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIHNrZXRjaHBhZFRpdGxlLnRleHRDb250ZW50ID0gXCJTa2V0Y2hwYWRcIjtcbiAgICBsZXQgc2tldGNocGFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgJChza2V0Y2hwYWQpLmFkZENsYXNzKFwic2tldGNocGFkXCIpO1xuICAgIGxldCBza2V0Y2hwYWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICQoc2tldGNocGFkQ29udGFpbmVyKS5hZGRDbGFzcyhcInNrZXRjaHBhZC1jb250YWluZXJcIik7XG4gICAgc2tldGNocGFkQ29udGFpbmVyLmFwcGVuZENoaWxkKHNrZXRjaHBhZFRpdGxlKTtcbiAgICBza2V0Y2hwYWRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2tldGNocGFkKTtcbiAgICAvLyQoJy5hY19vdXRwdXQnKS5hcHBlbmQoc2tldGNocGFkQ29udGFpbmVyKTtcblxuICAgIGxldCB2aXN1YWxpemVycyA9ICQoXCIuRXhlY3V0aW9uVmlzdWFsaXplclwiKTtcblxuICAgIGNvbnNvbGUubG9nKFwiRWNvbnRhaW5lcjogXCIsIHRoaXMuZUNvbnRhaW5lcik7XG5cbiAgICAkKFwiW2RhdGEtY2hpbGRjb21wb25lbnRdXCIpLm9uKFwiY2xpY2tcIiwgXCJidXR0b24ucm93LW1vZGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoXCJbZGF0YS1jaGlsZGNvbXBvbmVudF1cIikucmVtb3ZlQ2xhc3MoXCJjYXJkLW1vZGVcIik7XG4gICAgICAgICQodGhpcykuY2xvc2VzdChcIltkYXRhLWNoaWxkY29tcG9uZW50XVwiKS5hZGRDbGFzcyhcInJvdy1tb2RlXCIpO1xuICAgICAgICAkKHRoaXMpLm5leHQoXCIuY2FyZC1tb2RlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlLWxheW91dFwiKTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZS1sYXlvdXRcIik7XG4gICAgfSk7XG5cbiAgICAkKFwiW2RhdGEtY2hpbGRjb21wb25lbnRdXCIpLm9uKFwiY2xpY2tcIiwgXCJidXR0b24uY2FyZC1tb2RlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KFwiW2RhdGEtY2hpbGRjb21wb25lbnRdXCIpLnJlbW92ZUNsYXNzKFwicm93LW1vZGVcIik7XG4gICAgICAgICQodGhpcykuY2xvc2VzdChcIltkYXRhLWNoaWxkY29tcG9uZW50XVwiKS5hZGRDbGFzcyhcImNhcmQtbW9kZVwiKTtcbiAgICAgICAgJCh0aGlzKS5wcmV2KFwiLnJvdy1tb2RlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlLWxheW91dFwiKTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZS1sYXlvdXRcIik7XG4gICAgfSk7XG5cbiAgICAkKFwiW2RhdGEtY2hpbGRjb21wb25lbnRdIC5hY19zZWN0aW9uXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnByZXBlbmQoXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cInByZXNlbnRhdGlvbi1vcHRpb25zXCI+PGJ1dHRvbiBjbGFzcz1cInJvdy1tb2RlIGxheW91dC1idG5cIj48aW1nIHNyYz1cIi4uL19pbWFnZXMvcm93LWJ0bi1jb250ZW50LnBuZ1wiIGFsdD1cIlJvd3NcIj48L2J1dHRvbj48YnV0dG9uIGNsYXNzPVwiY2FyZC1tb2RlIGxheW91dC1idG5cIj48aW1nIHNyYz1cIi4uL19pbWFnZXMvY2FyZC1idG4tY29udGVudC5wbmdcIiBhbHQ9XCJDYXJkXCI+PC9idXR0b24+PC9kaXY+J1xuICAgICAgICApO1xuICAgIH0pO1xuXG4gICAgdmlzdWFsaXplcnMuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgbGV0IG1lID0gJCh0aGlzKTtcbiAgICAgICAgbGV0IGNvbDEgPSBtZS5maW5kKFwiI3ZpekxheW91dFRkRmlyc3RcIik7XG4gICAgICAgIGxldCBjb2wyID0gbWUuZmluZChcIiN2aXpMYXlvdXRUZFNlY29uZFwiKTtcbiAgICAgICAgbGV0IGRhdGFWaXMgPSBtZS5maW5kKFwiI2RhdGFWaXpcIik7XG4gICAgICAgIGxldCBzdGFja0hlYXBUYWJsZSA9IG1lLmZpbmQoXCIjc3RhY2tIZWFwVGFibGVcIik7XG4gICAgICAgIGxldCBvdXRwdXQgPSBtZS5maW5kKFwiI3Byb2dPdXRwdXRzXCIpO1xuICAgICAgICBvdXRwdXQuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICBtZS5wYXJlbnQoKS5wcmVwZW5kKFxuICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPSdwcmVzZW50YXRpb24tdGl0bGUnPjxkaXYgY2xhc3M9J3RpdGxlLXRleHQnPiBFeGFtcGxlIFwiICtcbiAgICAgICAgICAgICAgICAoTnVtYmVyKGluZGV4KSArIDEpICtcbiAgICAgICAgICAgICAgICBcIjwvZGl2PjwvZGl2PlwiXG4gICAgICAgICk7XG4gICAgfSk7XG5cbiAgICBhY0NvZGUuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzZWN0aW9uID0gJCh0aGlzKS5jbG9zZXN0KFwiLmFjLWJsb2NrXCIpLnBhcmVudCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhzZWN0aW9uLCBzZWN0aW9uLmxlbmd0aCk7XG4gICAgICAgIHNlY3Rpb24uYXBwZW5kKHNrZXRjaHBhZENvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICAkKFwiYnV0dG9uLmNhcmQtbW9kZVwiKS5jbGljaygpO1xuXG4gICAgbGV0IG1vZGVTZWxlY3QgPSAkKFwiLm1vZGUtc2VsZWN0XCIpO1xuICAgIGxldCBtb2RlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcmVzZW50TW9kZVwiKTtcbiAgICBpZiAobW9kZSA9PSBcInByZXNlbnRcIikge1xuICAgICAgICBtb2RlU2VsZWN0LnZhbChcInByZXNlbnRcIik7XG4gICAgICAgIG1vZGVTZWxlY3QuY2hhbmdlKCk7XG4gICAgfVxufVxuXG4vLyQoZG9jdW1lbnQpLnJlYWR5KGNvbmZpZ3VyZSk7XG4kKGRvY3VtZW50KS5iaW5kKFwicnVuZXN0b25lOmxvZ2luLWNvbXBsZXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBpZiB1c2VyIGlzIGluc3RydWN0b3IsIGVuYWJsZSBwcmVzZW50ZXIgbW9kZVxuICAgIGlmIChlQm9va0NvbmZpZy5pc0luc3RydWN0b3IpIHtcbiAgICAgICAgY29uZmlndXJlKCk7XG4gICAgfVxufSk7XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0U3dpdGNoKCkge1xuICAgIGNvbnN0IHRvZ2dsZVN3aXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGVtZS1zd2l0Y2ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XG4gICAgY29uc3QgY3VycmVudFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSA6IG51bGw7XG5cbiAgICBpZiAoY3VycmVudFRoZW1lKSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCBjdXJyZW50VGhlbWUpO1xuXG4gICAgICAgIGlmIChjdXJyZW50VGhlbWUgPT09ICdkYXJrJykge1xuICAgICAgICAgICAgdG9nZ2xlU3dpdGNoLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3dpdGNoVGhlbWUoKSB7XG5cblx0dmFyIGNoZWNrQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVja2JveFwiKTtcbiAgICBpZiAoY2hlY2tCb3guY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnZGFyaycpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnZGFyaycpOyAvL2FkZCB0aGlzXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2xpZ2h0Jyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdsaWdodCcpOyAvL2FkZCB0aGlzXG4gICAgfVxufVxuIiwiLypnbG9iYWwgdmFyaWFibGUgZGVjbGFyYXRpb25zKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcIi4uL2Nzcy91c2VyLWhpZ2hsaWdodHMuY3NzXCI7XG5cblxuZnVuY3Rpb24gZ2V0Q29tcGxldGlvbnMoKSB7XG4gICAgLy8gR2V0IHRoZSBjb21wbGV0aW9uIHN0YXR1c1xuICAgIGlmIChcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYubWF0Y2goXG4gICAgICAgICAgICAvKGluZGV4Lmh0bWx8dG9jdHJlZS5odG1sfGdlbmluZGV4Lmh0bWx8bmF2aGVscC5odG1sfHRvYy5odG1sfGFzc2lnbm1lbnRzLmh0bWx8RXhlcmNpc2VzLmh0bWwpL1xuICAgICAgICApXG4gICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudFBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIGlmIChjdXJyZW50UGF0aG5hbWUuaW5kZXhPZihcIj9cIikgIT09IC0xKSB7XG4gICAgICAgIGN1cnJlbnRQYXRobmFtZSA9IGN1cnJlbnRQYXRobmFtZS5zdWJzdHJpbmcoXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgY3VycmVudFBhdGhuYW1lLmxhc3RJbmRleE9mKFwiP1wiKVxuICAgICAgICApO1xuICAgIH1cbiAgICB2YXIgZGF0YSA9IHsgbGFzdFBhZ2VVcmw6IGN1cnJlbnRQYXRobmFtZSB9O1xuICAgIGpRdWVyeVxuICAgICAgICAuYWpheCh7XG4gICAgICAgICAgICB1cmw6IGVCb29rQ29uZmlnLmFqYXhVUkwgKyBcImdldENvbXBsZXRpb25TdGF0dXNcIixcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICBhc3luYzogZmFsc2UsXG4gICAgICAgIH0pXG4gICAgICAgIC5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YSAhPSBcIk5vbmVcIikge1xuICAgICAgICAgICAgICAgIHZhciBjb21wbGV0aW9uRGF0YSA9ICQucGFyc2VKU09OKGRhdGEpO1xuICAgICAgICAgICAgICAgIHZhciBjb21wbGV0aW9uQ2xhc3MsIGNvbXBsZXRpb25Nc2c7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRpb25EYXRhWzBdLmNvbXBsZXRpb25TdGF0dXMgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0aW9uQ2xhc3MgPSBcImJ1dHRvbkNvbmZpcm1Db21wbGV0aW9uXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRpb25Nc2cgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXCI8aSBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1vayc+PC9pPiBDb21wbGV0ZWQuIFdlbGwgRG9uZSFcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0aW9uQ2xhc3MgPSBcImJ1dHRvbkFza0NvbXBsZXRpb25cIjtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGlvbk1zZyA9IFwiTWFyayBhcyBDb21wbGV0ZWRcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJChcIiNtYWluLWNvbnRlbnRcIikuYXBwZW5kKFxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbGcgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0aW9uQ2xhc3MgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1wiIGlkPVwiY29tcGxldGlvbkJ1dHRvblwiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGlvbk1zZyArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjwvYnV0dG9uPjwvZGl2PlwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNob3dMYXN0UG9zaXRpb25CYW5uZXIoKSB7XG4gICAgdmFyIGxhc3RQb3NpdGlvblZhbCA9ICQuZ2V0VXJsVmFyKFwibGFzdFBvc2l0aW9uXCIpO1xuICAgIGlmICh0eXBlb2YgbGFzdFBvc2l0aW9uVmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICQoXCJib2R5XCIpLmFwcGVuZChcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIi4uL19zdGF0aWMvbGFzdC1wb2ludC5wbmdcIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlOyBwYWRkaW5nLXRvcDo1NXB4OyBsZWZ0OiAxMHB4OyB0b3A6ICcgK1xuICAgICAgICAgICAgICAgIHBhcnNlSW50KGxhc3RQb3NpdGlvblZhbCkgK1xuICAgICAgICAgICAgICAgICdweDtcIi8+J1xuICAgICAgICApO1xuICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBwYXJzZUludChsYXN0UG9zaXRpb25WYWwpIH0sIDEwMDApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkTmF2aWdhdGlvbkFuZENvbXBsZXRpb25CdXR0b25zKCkge1xuICAgIGlmIChcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYubWF0Y2goXG4gICAgICAgICAgICAvKGluZGV4Lmh0bWx8Z2VuaW5kZXguaHRtbHxuYXZoZWxwLmh0bWx8dG9jLmh0bWx8YXNzaWdubWVudHMuaHRtbHxFeGVyY2lzZXMuaHRtbHx0b2N0cmVlLmh0bWwpL1xuICAgICAgICApXG4gICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG5hdkxpbmtCZ1JpZ2h0SGlkZGVuUG9zaXRpb24gPSAtJChcIiNuYXZMaW5rQmdSaWdodFwiKS5vdXRlcldpZHRoKCkgLSA1O1xuICAgIHZhciBuYXZMaW5rQmdSaWdodEhhbGZPcGVuO1xuICAgIHZhciBuYXZMaW5rQmdSaWdodEZ1bGxPcGVuID0gMDtcblxuICAgIGlmICgkKFwiI2NvbXBsZXRpb25CdXR0b25cIikuaGFzQ2xhc3MoXCJidXR0b25Bc2tDb21wbGV0aW9uXCIpKSB7XG4gICAgICAgIG5hdkxpbmtCZ1JpZ2h0SGFsZk9wZW4gPSBuYXZMaW5rQmdSaWdodEhpZGRlblBvc2l0aW9uICsgNzA7XG4gICAgfSBlbHNlIGlmICgkKFwiI2NvbXBsZXRpb25CdXR0b25cIikuaGFzQ2xhc3MoXCJidXR0b25Db25maXJtQ29tcGxldGlvblwiKSkge1xuICAgICAgICBuYXZMaW5rQmdSaWdodEhhbGZPcGVuID0gMDtcbiAgICB9XG4gICAgdmFyIHJlbGF0aW9uc05leHRJY29uSW5pdGlhbFBvc2l0aW9uID0gJChcIiNyZWxhdGlvbnMtbmV4dFwiKS5jc3MoXCJyaWdodFwiKTtcbiAgICB2YXIgcmVsYXRpb25zTmV4dEljb25OZXdQb3NpdGlvbiA9IC0obmF2TGlua0JnUmlnaHRIaWRkZW5Qb3NpdGlvbiArIDM1KTtcblxuICAgICQoXCIjbmF2TGlua0JnUmlnaHRcIikuY3NzKFwicmlnaHRcIiwgbmF2TGlua0JnUmlnaHRIaWRkZW5Qb3NpdGlvbikuc2hvdygpO1xuICAgIHZhciBuYXZCZ1Nob3duID0gZmFsc2U7XG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKSA9PVxuICAgICAgICAgICAgJChkb2N1bWVudCkuaGVpZ2h0KClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICAkKFwiI25hdkxpbmtCZ1JpZ2h0XCIpLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgeyByaWdodDogbmF2TGlua0JnUmlnaHRIYWxmT3BlbiB9LFxuICAgICAgICAgICAgICAgIDIwMFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICQoXCIjbmF2TGlua0JnTGVmdFwiKS5hbmltYXRlKHsgbGVmdDogXCIwcHhcIiB9LCAyMDApO1xuICAgICAgICAgICAgaWYgKCQoXCIjY29tcGxldGlvbkJ1dHRvblwiKS5oYXNDbGFzcyhcImJ1dHRvbkNvbmZpcm1Db21wbGV0aW9uXCIpKSB7XG4gICAgICAgICAgICAgICAgJChcIiNyZWxhdGlvbnMtbmV4dFwiKS5hbmltYXRlKFxuICAgICAgICAgICAgICAgICAgICB7IHJpZ2h0OiByZWxhdGlvbnNOZXh0SWNvbk5ld1Bvc2l0aW9uIH0sXG4gICAgICAgICAgICAgICAgICAgIDIwMFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXZCZ1Nob3duID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChuYXZCZ1Nob3duKSB7XG4gICAgICAgICAgICAkKFwiI25hdkxpbmtCZ1JpZ2h0XCIpLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgeyByaWdodDogbmF2TGlua0JnUmlnaHRIaWRkZW5Qb3NpdGlvbiB9LFxuICAgICAgICAgICAgICAgIDIwMFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICQoXCIjbmF2TGlua0JnTGVmdFwiKS5hbmltYXRlKHsgbGVmdDogXCItNjVweFwiIH0sIDIwMCk7XG4gICAgICAgICAgICAkKFwiI3JlbGF0aW9ucy1uZXh0XCIpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHJpZ2h0OiByZWxhdGlvbnNOZXh0SWNvbkluaXRpYWxQb3NpdGlvbixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbmF2QmdTaG93biA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgY29tcGxldGlvbkZsYWcgPSAwO1xuICAgIGlmICgkKFwiI2NvbXBsZXRpb25CdXR0b25cIikuaGFzQ2xhc3MoXCJidXR0b25Bc2tDb21wbGV0aW9uXCIpKSB7XG4gICAgICAgIGNvbXBsZXRpb25GbGFnID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0aW9uRmxhZyA9IDE7XG4gICAgfVxuICAgICQoXCIjY29tcGxldGlvbkJ1dHRvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJidXR0b25Bc2tDb21wbGV0aW9uXCIpKSB7XG4gICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYnV0dG9uQXNrQ29tcGxldGlvblwiKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImJ1dHRvbkNvbmZpcm1Db21wbGV0aW9uXCIpXG4gICAgICAgICAgICAgICAgLmh0bWwoXG4gICAgICAgICAgICAgICAgICAgIFwiPGkgY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tb2snPjwvaT4gQ29tcGxldGVkLiBXZWxsIERvbmUhXCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgJChcIiNuYXZMaW5rQmdSaWdodFwiKS5hbmltYXRlKHsgcmlnaHQ6IG5hdkxpbmtCZ1JpZ2h0RnVsbE9wZW4gfSk7XG4gICAgICAgICAgICAkKFwiI3JlbGF0aW9ucy1uZXh0XCIpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHJpZ2h0OiByZWxhdGlvbnNOZXh0SWNvbk5ld1Bvc2l0aW9uLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuYXZMaW5rQmdSaWdodEhhbGZPcGVuID0gMDtcbiAgICAgICAgICAgIGNvbXBsZXRpb25GbGFnID0gMTtcbiAgICAgICAgfSBlbHNlIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiYnV0dG9uQ29uZmlybUNvbXBsZXRpb25cIikpIHtcbiAgICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJidXR0b25Db25maXJtQ29tcGxldGlvblwiKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImJ1dHRvbkFza0NvbXBsZXRpb25cIilcbiAgICAgICAgICAgICAgICAuaHRtbChcIk1hcmsgYXMgQ29tcGxldGVkXCIpO1xuICAgICAgICAgICAgbmF2TGlua0JnUmlnaHRIYWxmT3BlbiA9IG5hdkxpbmtCZ1JpZ2h0SGlkZGVuUG9zaXRpb24gKyA3MDtcbiAgICAgICAgICAgICQoXCIjbmF2TGlua0JnUmlnaHRcIikuYW5pbWF0ZSh7IHJpZ2h0OiBuYXZMaW5rQmdSaWdodEhhbGZPcGVuIH0pO1xuICAgICAgICAgICAgJChcIiNyZWxhdGlvbnMtbmV4dFwiKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICByaWdodDogcmVsYXRpb25zTmV4dEljb25Jbml0aWFsUG9zaXRpb24sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbXBsZXRpb25GbGFnID0gMDtcbiAgICAgICAgfVxuICAgICAgICBwcm9jZXNzUGFnZVN0YXRlKGNvbXBsZXRpb25GbGFnKTtcbiAgICB9KTtcblxuICAgICQod2luZG93KS5vbihcImJlZm9yZXVubG9hZFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoY29tcGxldGlvbkZsYWcgPT0gMCkge1xuICAgICAgICAgICAgcHJvY2Vzc1BhZ2VTdGF0ZShjb21wbGV0aW9uRmxhZyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGVjb3JhdGVUYWJsZU9mQ29udGVudHMoKSB7XG4gICAgaWYgKFxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZi50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJ0b2MuaHRtbFwiKSAhPSAtMSB8fFxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZi50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJpbmRleC5odG1sXCIpICE9IC0xXG4gICAgKSB7XG4gICAgICAgIGpRdWVyeS5nZXQoZUJvb2tDb25maWcuYWpheFVSTCArIFwiZ2V0QWxsQ29tcGxldGlvblN0YXR1c1wiLCBmdW5jdGlvbiAoXG4gICAgICAgICAgICBkYXRhXG4gICAgICAgICkge1xuICAgICAgICAgICAgdmFyIHN1YkNoYXB0ZXJMaXN0O1xuICAgICAgICAgICAgaWYgKGRhdGEgIT0gXCJOb25lXCIpIHtcbiAgICAgICAgICAgICAgICBzdWJDaGFwdGVyTGlzdCA9ICQucGFyc2VKU09OKGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGFsbFN1YkNoYXB0ZXJVUkxzID0gJChcIiNtYWluLWNvbnRlbnQgZGl2IGxpIGFcIik7XG4gICAgICAgICAgICAgICAgJC5lYWNoKHN1YkNoYXB0ZXJMaXN0LCBmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcyA9IDA7IHMgPCBhbGxTdWJDaGFwdGVyVVJMcy5sZW5ndGg7IHMrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFN1YkNoYXB0ZXJVUkxzW3NdLmhyZWYuaW5kZXhPZihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jaGFwdGVyTmFtZSArIFwiL1wiICsgaXRlbS5zdWJDaGFwdGVyTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgIT0gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmNvbXBsZXRpb25TdGF0dXMgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGFsbFN1YkNoYXB0ZXJVUkxzW3NdLnBhcmVudEVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJjb21wbGV0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiaW5mb1RleHRDb21wbGV0ZWRcIj4tIENvbXBsZXRlZCB0aGlzIHRvcGljIG9uICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmVuZERhdGUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjwvc3Bhbj5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNoaWxkcmVuKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maXJzdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaG92ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmV4dChcIi5pbmZvVGV4dENvbXBsZXRlZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5leHQoXCIuaW5mb1RleHRDb21wbGV0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uY29tcGxldGlvblN0YXR1cyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoYWxsU3ViQ2hhcHRlclVSTHNbc10ucGFyZW50RWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImFjdGl2ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJpbmZvVGV4dEFjdGl2ZVwiPkxhc3QgcmVhZCB0aGlzIHRvcGljIG9uICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmVuZERhdGUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjwvc3Bhbj5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNoaWxkcmVuKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maXJzdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaG92ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmV4dChcIi5pbmZvVGV4dEFjdGl2ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5leHQoXCIuaW5mb1RleHRBY3RpdmVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBkYXRhID0geyBjb3Vyc2U6IGVCb29rQ29uZmlnLmNvdXJzZSB9O1xuICAgICAgICBqUXVlcnkuZ2V0KGVCb29rQ29uZmlnLmFqYXhVUkwgKyBcImdldGxhc3RwYWdlXCIsIGRhdGEsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICB2YXIgbGFzdFBhZ2VEYXRhO1xuICAgICAgICAgICAgaWYgKGRhdGEgIT0gXCJOb25lXCIpIHtcbiAgICAgICAgICAgICAgICBsYXN0UGFnZURhdGEgPSAkLnBhcnNlSlNPTihkYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAobGFzdFBhZ2VEYXRhWzBdLmxhc3RQYWdlQ2hhcHRlciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjY29udGludWUtcmVhZGluZ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNob3coKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgaWQ9XCJqdW1wLXRvLWNoYXB0ZXJcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm9cIiA+PHN0cm9uZz5Zb3Ugd2VyZSBMYXN0IFJlYWRpbmc6PC9zdHJvbmc+ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0UGFnZURhdGFbMF0ubGFzdFBhZ2VDaGFwdGVyICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGxhc3RQYWdlRGF0YVswXS5sYXN0UGFnZVN1YmNoYXB0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIgJmd0OyBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RQYWdlRGF0YVswXS5sYXN0UGFnZVN1YmNoYXB0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIDxhIGhyZWY9XCInICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFBhZ2VEYXRhWzBdLmxhc3RQYWdlVXJsICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI/bGFzdFBvc2l0aW9uPVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFBhZ2VEYXRhWzBdLmxhc3RQYWdlU2Nyb2xsTG9jYXRpb24gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXCI+Q29udGludWUgUmVhZGluZzwvYT48L2Rpdj4nXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBlbmFibGVDb21wbGV0aW9ucygpIHtcbiAgICBnZXRDb21wbGV0aW9ucygpO1xuICAgIHNob3dMYXN0UG9zaXRpb25CYW5uZXIoKTtcbiAgICBhZGROYXZpZ2F0aW9uQW5kQ29tcGxldGlvbkJ1dHRvbnMoKTtcbiAgICBkZWNvcmF0ZVRhYmxlT2ZDb250ZW50cygpO1xufVxuXG4vLyBjYWxsIGVuYWJsZSB1c2VyIGhpZ2hsaWdodHMgYWZ0ZXIgbG9naW5cbiQoZG9jdW1lbnQpLmJpbmQoXCJydW5lc3RvbmU6bG9naW5cIiwgZW5hYmxlQ29tcGxldGlvbnMpO1xuXG5mdW5jdGlvbiBwcm9jZXNzUGFnZVN0YXRlKGNvbXBsZXRpb25GbGFnKSB7XG4gICAgLypMb2cgbGFzdCBwYWdlIHZpc2l0ZWQqL1xuICAgIHZhciBjdXJyZW50UGF0aG5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgaWYgKGN1cnJlbnRQYXRobmFtZS5pbmRleE9mKFwiP1wiKSAhPT0gLTEpIHtcbiAgICAgICAgY3VycmVudFBhdGhuYW1lID0gY3VycmVudFBhdGhuYW1lLnN1YnN0cmluZyhcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICBjdXJyZW50UGF0aG5hbWUubGFzdEluZGV4T2YoXCI/XCIpXG4gICAgICAgICk7XG4gICAgfVxuICAgIHZhciBkYXRhID0ge1xuICAgICAgICBsYXN0UGFnZVVybDogY3VycmVudFBhdGhuYW1lLFxuICAgICAgICBsYXN0UGFnZVNjcm9sbExvY2F0aW9uOiAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXG4gICAgICAgIGNvbXBsZXRpb25GbGFnOiBjb21wbGV0aW9uRmxhZyxcbiAgICAgICAgY291cnNlOiBlQm9va0NvbmZpZy5jb3Vyc2UsXG4gICAgfTtcbiAgICAkKGRvY3VtZW50KS5hamF4RXJyb3IoZnVuY3Rpb24gKGUsIGpxaHhyLCBzZXR0aW5ncywgZXhjZXB0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVxdWVzdCBGYWlsZWQgZm9yIFwiICsgc2V0dGluZ3MudXJsKTtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfSk7XG4gICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICB1cmw6IGVCb29rQ29uZmlnLmFqYXhVUkwgKyBcInVwZGF0ZWxhc3RwYWdlXCIsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgIH0pO1xufVxuXG4kLmV4dGVuZCh7XG4gICAgZ2V0VXJsVmFyczogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdmFycyA9IFtdLFxuICAgICAgICAgICAgaGFzaDtcbiAgICAgICAgdmFyIGhhc2hlcyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2hcbiAgICAgICAgICAgIC5zbGljZSh3aW5kb3cubG9jYXRpb24uc2VhcmNoLmluZGV4T2YoXCI/XCIpICsgMSlcbiAgICAgICAgICAgIC5zcGxpdChcIiZcIik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGFzaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBoYXNoID0gaGFzaGVzW2ldLnNwbGl0KFwiPVwiKTtcbiAgICAgICAgICAgIHZhcnMucHVzaChoYXNoWzBdKTtcbiAgICAgICAgICAgIHZhcnNbaGFzaFswXV0gPSBoYXNoWzFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YXJzO1xuICAgIH0sXG4gICAgZ2V0VXJsVmFyOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJC5nZXRVcmxWYXJzKClbbmFtZV07XG4gICAgfSxcbn0pO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG4gIC8qKlxuICAgKiBQYXRjaCBUT0MgbGlzdC5cbiAgICpcbiAgICogV2lsbCBtdXRhdGUgdGhlIHVuZGVybHlpbmcgc3BhbiB0byBoYXZlIGEgY29ycmVjdCB1bCBmb3IgbmF2LlxuICAgKlxuICAgKiBAcGFyYW0gJHNwYW46IFNwYW4gY29udGFpbmluZyBuZXN0ZWQgVUwncyB0byBtdXRhdGUuXG4gICAqIEBwYXJhbSBtaW5MZXZlbDogU3RhcnRpbmcgbGV2ZWwgZm9yIG5lc3RlZCBsaXN0cy4gKDE6IGdsb2JhbCwgMjogbG9jYWwpLlxuICAgKi9cbiAgdmFyIHBhdGNoVG9jID0gZnVuY3Rpb24gKCR1bCwgbWluTGV2ZWwpIHtcbiAgICB2YXIgZmluZEEsXG4gICAgICBwYXRjaFRhYmxlcyxcbiAgICAgICRsb2NhbExpO1xuXG4gICAgLy8gRmluZCBhbGwgYSBcImludGVybmFsXCIgdGFncywgdHJhdmVyc2luZyByZWN1cnNpdmVseS5cbiAgICBmaW5kQSA9IGZ1bmN0aW9uICgkZWxlbSwgbGV2ZWwpIHtcbiAgICAgIGxldmVsID0gbGV2ZWwgfHwgMDtcbiAgICAgIHZhciAkaXRlbXMgPSAkZWxlbS5maW5kKFwiPiBsaSA+IGEuaW50ZXJuYWwsID4gdWwsID4gbGkgPiB1bFwiKTtcblxuICAgICAgLy8gSXRlcmF0ZSBldmVyeXRoaW5nIGluIG9yZGVyLlxuICAgICAgJGl0ZW1zLmVhY2goZnVuY3Rpb24gKGluZGV4LCBpdGVtKSB7XG4gICAgICAgIHZhciAkaXRlbSA9ICQoaXRlbSksXG4gICAgICAgICAgdGFnID0gaXRlbS50YWdOYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgJGNoaWxkcmVuTGkgPSAkaXRlbS5jaGlsZHJlbignbGknKSxcbiAgICAgICAgICAkcGFyZW50TGkgPSAkKCRpdGVtLnBhcmVudCgnbGknKSwgJGl0ZW0ucGFyZW50KCkucGFyZW50KCdsaScpKTtcblxuICAgICAgICAvLyBBZGQgZHJvcGRvd25zIGlmIG1vcmUgY2hpbGRyZW4gYW5kIGFib3ZlIG1pbmltdW0gbGV2ZWwuXG4gICAgICAgIGlmICh0YWcgPT09ICd1bCcgJiYgbGV2ZWwgPj0gbWluTGV2ZWwgJiYgJGNoaWxkcmVuTGkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICRwYXJlbnRMaVxuICAgICAgICAgICAgLmFkZENsYXNzKCdkcm9wZG93bi1zdWJtZW51JylcbiAgICAgICAgICAgIC5jaGlsZHJlbignYScpLmZpcnN0KCkuYXR0cigndGFiaW5kZXgnLCAtMSk7XG5cbiAgICAgICAgICAkaXRlbS5hZGRDbGFzcygnZHJvcGRvd24tbWVudScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZmluZEEoJGl0ZW0sIGxldmVsICsgMSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgZmluZEEoJHVsKTtcbiAgfTtcblxuICAvKipcbiAgICogUGF0Y2ggYWxsIHRhYmxlcyB0byByZW1vdmUgYGBkb2N1dGlsc2BgIGNsYXNzIGFuZCBhZGQgQm9vdHN0cmFwIGJhc2VcbiAgICogYGB0YWJsZWBgIGNsYXNzLlxuICAgKi9cbiAgcGF0Y2hUYWJsZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJChcInRhYmxlLmRvY3V0aWxzXCIpXG4gICAgICAucmVtb3ZlQ2xhc3MoXCJkb2N1dGlsc1wiKVxuICAgICAgLmFkZENsYXNzKFwidGFibGVcIilcbiAgICAgIC5hdHRyKFwiYm9yZGVyXCIsIDApO1xuICB9O1xuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICAgIC8qXG4gICAgICogU2Nyb2xsIHRoZSB3aW5kb3cgdG8gYXZvaWQgdGhlIHRvcG5hdiBiYXJcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vdHdpdHRlci9ib290c3RyYXAvaXNzdWVzLzE3NjhcbiAgICAgKi9cbiAgICBpZiAoJChcIiNuYXZiYXIubmF2YmFyLWZpeGVkLXRvcFwiKS5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgbmF2SGVpZ2h0ID0gJChcIiNuYXZiYXJcIikuaGVpZ2h0KCksXG4gICAgICAgIHNoaWZ0V2luZG93ID0gZnVuY3Rpb24oKSB7IHNjcm9sbEJ5KDAsIC1uYXZIZWlnaHQgLSAxMCk7IH07XG5cbiAgICAgIGlmIChsb2NhdGlvbi5oYXNoKSB7XG4gICAgICAgIHNoaWZ0V2luZG93KCk7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBzaGlmdFdpbmRvdyk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHN0eWxpbmcsIHN0cnVjdHVyZSB0byBUT0Mncy5cbiAgICAkKFwiLmRyb3Bkb3duLW1lbnVcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLmZpbmQoXCJ1bFwiKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaXRlbSl7XG4gICAgICAgIHZhciAkaXRlbSA9ICQoaXRlbSk7XG4gICAgICAgICRpdGVtLmFkZENsYXNzKCd1bnN0eWxlZCcpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBHbG9iYWwgVE9DLlxuICAgIGlmICgkKFwidWwuZ2xvYmFsdG9jIGxpXCIpLmxlbmd0aCkge1xuICAgICAgcGF0Y2hUb2MoJChcInVsLmdsb2JhbHRvY1wiKSwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlbW92ZSBHbG9iYWwgVE9DLlxuICAgICAgJChcIi5nbG9iYWx0b2MtY29udGFpbmVyXCIpLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8vIExvY2FsIFRPQy5cbiAgICBwYXRjaFRvYygkKFwidWwubG9jYWx0b2NcIiksIDIpO1xuXG4gICAgLy8gTXV0YXRlIHN1Yi1saXN0cyAoZm9yIGJzLTIuMy4wKS5cbiAgICAkKFwiLmRyb3Bkb3duLW1lbnUgdWxcIikubm90KFwiLmRyb3Bkb3duLW1lbnVcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHVsID0gJCh0aGlzKSxcbiAgICAgICAgJHBhcmVudCA9ICR1bC5wYXJlbnQoKSxcbiAgICAgICAgdGFnID0gJHBhcmVudFswXS50YWdOYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICRraWRzID0gJHVsLmNoaWxkcmVuKCkuZGV0YWNoKCk7XG5cbiAgICAgIC8vIFJlcGxhY2UgbGlzdCB3aXRoIGl0ZW1zIGlmIHN1Ym1lbnUgaGVhZGVyLlxuICAgICAgaWYgKHRhZyA9PT0gXCJ1bFwiKSB7XG4gICAgICAgICR1bC5yZXBsYWNlV2l0aCgka2lkcyk7XG4gICAgICB9IGVsc2UgaWYgKHRhZyA9PT0gXCJsaVwiKSB7XG4gICAgICAgIC8vIEluc2VydCBpbnRvIHByZXZpb3VzIGxpc3QuXG4gICAgICAgICRwYXJlbnQuYWZ0ZXIoJGtpZHMpO1xuICAgICAgICAkdWwucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgZGl2aWRlciBpbiBwYWdlIFRPQy5cbiAgICAkbG9jYWxMaSA9ICQoXCJ1bC5sb2NhbHRvYyBsaVwiKTtcbiAgICBpZiAoJGxvY2FsTGkubGVuZ3RoID4gMikge1xuICAgICAgJGxvY2FsTGkuZmlyc3QoKS5hZnRlcignPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+Jyk7XG4gICAgfVxuXG4gICAgLy8gRW5hYmxlIGRyb3Bkb3duLlxuICAgICQoJy5kcm9wZG93bi10b2dnbGUnKS5kcm9wZG93bigpO1xuXG4gICAgLy8gUGF0Y2ggdGFibGVzLlxuICAgIHBhdGNoVGFibGVzKCk7XG5cbiAgICAvLyBBZGQgTm90ZSwgV2FybmluZyBzdHlsZXMuXG4gICAgJCgnZGl2Lm5vdGUnKS5hZGRDbGFzcygnYWxlcnQnKS5hZGRDbGFzcygnYWxlcnQtaW5mbycpO1xuICAgICQoJ2Rpdi53YXJuaW5nJykuYWRkQ2xhc3MoJ2FsZXJ0JykuYWRkQ2xhc3MoJ2FsZXJ0LXdhcm5pbmcnKTtcblxuICAgIC8vIElubGluZSBjb2RlIHN0eWxlcyB0byBCb290c3RyYXAgc3R5bGUuXG4gICAgJCgndHQuZG9jdXRpbHMubGl0ZXJhbCcpLm5vdChcIi54cmVmXCIpLmVhY2goZnVuY3Rpb24gKGksIGUpIHtcbiAgICAgIC8vIGlnbm9yZSByZWZlcmVuY2VzXG4gICAgICBpZiAoISQoZSkucGFyZW50KCkuaGFzQ2xhc3MoXCJyZWZlcmVuY2VcIikpIHtcbiAgICAgICAgJChlKS5yZXBsYWNlV2l0aChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuICQoXCI8Y29kZSAvPlwiKS50ZXh0KCQodGhpcykudGV4dCgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9fSk7XG4gIH0pO1xufSh3aW5kb3cualF1ZXJ5KSk7XG4iLCIvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gfGRvY25hbWV8IC0gQSBmcmFtZXdvcmsgYWxsb3dpbmcgYSBSdW5lc3RvbmUgY29tcG9uZW50IHRvIGxvYWQgb25seSB0aGUgSlMgaXQgbmVlZHNcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyBUaGUgSmF2YVNjcmlwdCByZXF1aXJlZCBieSBhbGwgUnVuZXN0b25lIGNvbXBvbmVudHMgaXMgcXVpdGUgbGFyZ2UgYW5kIHJlc3VsdHMgaW4gc2xvdyBwYWdlIGxvYWRzLiBUaGlzIGFwcHJvYWNoIGVuYWJsZXMgYSBSdW5lc3RvbmUgY29tcG9uZW50IHRvIGxvYWQgb25seSB0aGUgSmF2YVNjcmlwdCBpdCBuZWVkcywgcmF0aGVyIHRoYW4gbG9hZGluZyBKYXZhU2NyaXB0IGZvciBhbGwgdGhlIGNvbXBvbmVudHMgcmVnYXJkbGVzcyBvZiB3aGljaCBhcmUgYWN0dWFsbHkgdXNlZC5cbi8vXG4vLyBUbyBhY2NvbXBsaXNoIHRoaXMsIHdlYnBhY2sncyBzcGxpdC1jaHVua3MgYWJpbGl0eSBhbmFseXplcyBhbGwgSlMsIHN0YXJ0aW5nIGZyb20gdGhpcyBmaWxlLiBUaGUgZHluYW1pYyBpbXBvcnRzIGJlbG93IGFyZSB0cmFuc2Zvcm1lZCBieSB3ZWJwYWNrIGludG8gdGhlIGR5bmFtaWMgZmV0Y2hlcyBvZiBqdXN0IHRoZSBKUyByZXF1aXJlZCBieSBlYWNoIGZpbGUgYW5kIGFsbCBpdHMgZGVwZW5kZW5jaWVzLiAoSWYgdXNpbmcgc3RhdGljIGltcG9ydHMsIHdlYnBhY2sgd2lsbCBhc3N1bWUgdGhhdCBhbGwgZmlsZXMgYXJlIGFscmVhZHkgc3RhdGljYWxseSBsb2FkZWQgdmlhIHNjcmlwdCB0YWdzLCBkZWZlYXRpbmcgdGhlIHB1cnBvc2Ugb2YgdGhpcyBmcmFtZXdvcmsuKVxuLy9cbi8vIEhvd2V2ZXIsIHRoaXMgYXBwcm9hY2ggbGVhZHMgdG8gY29tcGxleGl0eTpcbi8vXG4vLyAtICAgIFRoZSBgYGRhdGEtY29tcG9uZW50YGAgYXR0cmlidXRlIG9mIGVhY2ggY29tcG9uZW50IG11c3QgYmUga2VwdCBpbiBzeW5jIHdpdGggdGhlIGtleXMgb2YgdGhlIGBgbW9kdWxlX21hcGBgIGJlbG93LlxuLy8gLSAgICBUaGUgdmFsdWVzIGluIHRoZSBgYG1vZHVsZV9tYXBgYCBtdXN0IGJlIGtlcHQgaW4gc3luYyB3aXRoIHRoZSBKYXZhU2NyaXB0IGZpbGVzIHdoaWNoIGltcGxlbWVudCBlYWNoIG9mIHRoZSBjb21wb25lbnRzLlxuXG5cInVzZSBzdHJpY3RcIjtcblxuXG4vLyBTdGF0aWMgaW1wb3J0c1xuLy8gPT09PT09PT09PT09PT1cbi8vIFRoZXNlIGltcG9ydHMgYXJlICh3ZSBhc3N1bWUpIG5lZWRlZCBieSBhbGwgcGFnZXMuIEhvd2V2ZXIsIGl0IHdvdWxkIGJlIG11Y2ggYmV0dGVyIHRvIGxvYWQgdGhlc2UgaW4gdGhlIG1vZHVsZXMgdGhhdCBhY3R1YWxseSB1c2UgdGhlbS5cbi8vXG4vLyBUaGVzZSBhcmUgc3RhdGljIGltcG9ydHM7IGNvZGUgaW4gYGR5bmFtaWNhbGx5IGxvYWRlZCBjb21wb25lbnRzYF8gZGVhbHMgd2l0aCBkeW5hbWljIGltcG9ydHMuXG4vL1xuLy8galF1ZXJ5LXJlbGF0ZWQgaW1wb3J0cy5cbmltcG9ydCBcImpxdWVyeS11aS9qcXVlcnktdWkuanNcIjtcbmltcG9ydCBcImpxdWVyeS11aS90aGVtZXMvYmFzZS9qcXVlcnkudWkuYWxsLmNzc1wiO1xuaW1wb3J0IFwiLi9ydW5lc3RvbmUvY29tbW9uL2pzL2pxdWVyeS5pZGxlLXRpbWVyLmpzXCI7XG5pbXBvcnQgXCIuL3J1bmVzdG9uZS9jb21tb24vanMvanF1ZXJ5X2kxOG4vanF1ZXJ5LmkxOG4uanNcIjtcbmltcG9ydCBcIi4vcnVuZXN0b25lL2NvbW1vbi9qcy9qcXVlcnlfaTE4bi9qcXVlcnkuaTE4bi5lbWl0dGVyLmJpZGkuanNcIjtcbmltcG9ydCBcIi4vcnVuZXN0b25lL2NvbW1vbi9qcy9qcXVlcnlfaTE4bi9qcXVlcnkuaTE4bi5lbWl0dGVyLmpzXCI7XG5pbXBvcnQgXCIuL3J1bmVzdG9uZS9jb21tb24vanMvanF1ZXJ5X2kxOG4vanF1ZXJ5LmkxOG4uZmFsbGJhY2tzLmpzXCI7XG5pbXBvcnQgXCIuL3J1bmVzdG9uZS9jb21tb24vanMvanF1ZXJ5X2kxOG4vanF1ZXJ5LmkxOG4ubWVzc2FnZXN0b3JlLmpzXCI7XG5pbXBvcnQgXCIuL3J1bmVzdG9uZS9jb21tb24vanMvanF1ZXJ5X2kxOG4vanF1ZXJ5LmkxOG4ucGFyc2VyLmpzXCI7XG5pbXBvcnQgXCIuL3J1bmVzdG9uZS9jb21tb24vanMvanF1ZXJ5X2kxOG4vanF1ZXJ5LmkxOG4ubGFuZ3VhZ2UuanNcIjtcblxuLy8gQm9vdHN0cmFwXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuanNcIjtcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzXCI7XG5pbXBvcnQgXCIuL3J1bmVzdG9uZS9jb21tb24vcHJvamVjdF90ZW1wbGF0ZS9fdGVtcGxhdGVzL3BsdWdpbl9sYXlvdXRzL3NwaGlueF9ib290c3RyYXAvc3RhdGljL2Jvb3RzdHJhcC1zcGhpbnguanNcIjtcbmltcG9ydCBcIi4vcnVuZXN0b25lL2NvbW1vbi9jc3MvcnVuZXN0b25lLWN1c3RvbS1zcGhpbngtYm9vdHN0cmFwLmNzc1wiO1xuXG4vLyBNaXNjXG5pbXBvcnQgXCIuL3J1bmVzdG9uZS9jb21tb24vanMvYm9va2Z1bmNzLmpzXCI7XG5pbXBvcnQgXCIuL3J1bmVzdG9uZS9jb21tb24vanMvdXNlci1oaWdobGlnaHRzLmpzXCI7XG5cbi8vIFRoZXNlIGJlbG9uZyBpbiBkeW5hbWljIGltcG9ydHMgZm9yIHRoZSBvYnZpb3VzIGNvbXBvbmVudDsgaG93ZXZlciwgdGhlc2UgY29tcG9uZW50cyBkb24ndCBpbmNsdWRlIGEgYGBkYXRhLWNvbXBvbmVudGBgIGF0dHJpYnV0ZS5cbmltcG9ydCBcIi4vcnVuZXN0b25lL21hdHJpeGVxL2Nzcy9tYXRyaXhlcS5jc3NcIjtcbmltcG9ydCBcIi4vcnVuZXN0b25lL3dlYmdsZGVtby9jc3Mvd2ViZ2xpbnRlcmFjdGl2ZS5jc3NcIjtcblxuLy8gVGhlc2UgYXJlIG9ubHkgbmVlZGVkIGZvciB0aGUgUnVuZXN0b25lIGJvb2ssIGJ1dCBub3QgaW4gYSBsaWJyYXJ5IG1vZGUgKHN1Y2ggYXMgcHJldGV4dCkuIEkgd291bGQgcHJlZmVyIHRvIGR5bmFtaWNhbGx5IGxvYWQgdGhlbS4gSG93ZXZlciwgdGhlc2Ugc2NyaXB0cyBhcmUgc28gc21hbGwgSSBoYXZlbid0IGJvdGhlcmVkIHRvIGRvIHNvLlxuaW1wb3J0IHsgZ2V0U3dpdGNoLCBzd2l0Y2hUaGVtZSB9IGZyb20gXCIuL3J1bmVzdG9uZS9jb21tb24vanMvdGhlbWUuanNcIjtcbmltcG9ydCBcIi4vcnVuZXN0b25lL2NvbW1vbi9qcy9wcmVzZW50ZXJfbW9kZS5qc1wiO1xuaW1wb3J0IFwiLi9ydW5lc3RvbmUvY29tbW9uL2Nzcy9wcmVzZW50ZXJfbW9kZS5jc3NcIjtcblxuXG4vLyBEeW5hbWljYWxseSBsb2FkZWQgY29tcG9uZW50c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRoaXMgcHJvdmlkZXMgYSBsaXN0IG9mIG1vZHVsZXMgdGhhdCBjb21wb25lbnRzIGNhbiBkeW5hbWljYWxseSBpbXBvcnQuIFdlYnBhY2sgd2lsbCBjcmVhdGUgYSBsaXN0IG9mIGltcG9ydHMgZm9yIGVhY2ggYmFzZWQgb24gaXRzIGFuYWx5c2lzLlxuY29uc3QgbW9kdWxlX21hcCA9IHtcbiAgICAvLyBXcmFwIGVhY2ggaW1wb3J0IGluIGEgZnVuY3Rpb24sIHNvIHRoYXQgaXQgd29uJ3Qgb2NjdXIgdW50aWwgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZC4gV2hpbGUgc29tZXRoaW5nIGNsZWFuZXIgd291bGQgYmUgbmljZSwgd2VicGFjayBjYW4ndCBhbmFseXplIHRoaW5ncyBsaWtlIGBgaW1wb3J0KGV4cHJlc3Npb24pYGAuXG4gICAgLy9cbiAgICAvLyBUaGUga2V5cyBtdXN0IG1hdGNoIHRoZSB2YWx1ZSBvZiBlYWNoIGNvbXBvbmVudCdzIGBgZGF0YS1jb21wb25lbnRgYCBhdHRyaWJ1dGUgLS0gdGhlIGBgcnVuZXN0b25lX2ltcG9ydGBgIGFuZCBgYHJ1bmVzdG9uZV9hdXRvX2ltcG9ydGBgIGZ1bmN0aW9ucyBhc3N1bWUgdGhpcy5cbiAgICBhY3RpdmVjb2RlOiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS9hY3RpdmVjb2RlL2pzL2FjZmFjdG9yeS5qc1wiKSxcbiAgICAvLyBBbHdheXMgaW1wb3J0IHRoZSB0aW1lZCB2ZXJzaW9uIG9mIGEgY29tcG9uZW50IGlmIGF2YWlsYWJsZSwgc2luY2UgdGhlIHRpbWVkIGNvbXBvbmVudHMgYWxzbyBkZWZpbmUgdGhlIGNvbXBvbmVudCdzIGZhY3RvcnkgYW5kIGluY2x1ZGUgdGhlIGNvbXBvbmVudCBhcyB3ZWxsLiBOb3RlIHRoYXQgYGBhY2ZhY3RvcnlgYCBpbXBvcnRzIHRoZSB0aW1lZCBjb21wb25lbnRzIG9mIEFjdGl2ZUNvZGUsIHNvIGl0IGZvbGxvd3MgdGhpcyBwYXR0ZXJuLlxuICAgIGNsaWNrYWJsZWFyZWE6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL2NsaWNrYWJsZUFyZWEvanMvdGltZWRjbGlja2FibGUuanNcIiksXG4gICAgY29kZWxlbnM6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL2NvZGVsZW5zL2pzL2NvZGVsZW5zLmpzXCIpLFxuICAgIGRhdGFmaWxlOiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS9kYXRhZmlsZS9qcy9kYXRhZmlsZS5qc1wiKSxcbiAgICBkcmFnbmRyb3A6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL2RyYWduZHJvcC9qcy90aW1lZGRuZC5qc1wiKSxcbiAgICBmaWxsaW50aGVibGFuazogKCkgPT4gaW1wb3J0KFwiLi9ydW5lc3RvbmUvZml0Yi9qcy90aW1lZGZpdGIuanNcIiksXG4gICAga2hhbmV4OiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS9raGFuZXgvanMva2hhbmV4LmpzXCIpLFxuICAgIGxwX2J1aWxkOiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS9scC9qcy9scC5qc1wiKSxcbiAgICBtdWx0aXBsZWNob2ljZTogKCkgPT4gaW1wb3J0KFwiLi9ydW5lc3RvbmUvbWNob2ljZS9qcy90aW1lZG1jLmpzXCIpLFxuICAgIHBhcnNvbnM6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL3BhcnNvbnMvanMvdGltZWRwYXJzb25zLmpzXCIpLFxuICAgIHBvbGw6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL3BvbGwvanMvcG9sbC5qc1wiKSxcbiAgICBxdWl6bHk6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL3F1aXpseS9qcy9xdWl6bHkuanNcIiksXG4gICAgcmV2ZWFsOiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS9yZXZlYWwvanMvcmV2ZWFsLmpzXCIpLFxuICAgIHNlbGVjdHF1ZXN0aW9uOiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS9zZWxlY3RxdWVzdGlvbi9qcy9zZWxlY3RvbmUuanNcIiksXG4gICAgc2hvcnRhbnN3ZXI6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL3Nob3J0YW5zd2VyL2pzL3RpbWVkX3Nob3J0YW5zd2VyLmpzXCIpLFxuICAgIHNob3dldmFsOiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS9zaG93ZXZhbC9qcy9zaG93RXZhbC5qc1wiKSxcbiAgICBzcHJlYWRzaGVldDogKCkgPT4gaW1wb3J0KFwiLi9ydW5lc3RvbmUvc3ByZWFkc2hlZXQvanMvc3ByZWFkc2hlZXQuanNcIiksXG4gICAgdGFiYmVkU3R1ZmY6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL3RhYmJlZFN0dWZmL2pzL3RhYmJlZHN0dWZmLmpzXCIpLFxuICAgIHRpbWVkQXNzZXNzbWVudDogKCkgPT4gaW1wb3J0KFwiLi9ydW5lc3RvbmUvdGltZWQvanMvdGltZWQuanNcIiksXG4gICAgd2F2ZWRyb206ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL3dhdmVkcm9tL2pzL3dhdmVkcm9tLmpzXCIpLFxuICAgIC8vIFRPRE86IHNpbmNlIHRoaXMgaXNuJ3QgaW4gYSBgYGRhdGEtY29tcG9uZW50YGAsIG5lZWQgdG8gdHJpZ2dlciBhbiBpbXBvcnQgb2YgdGhpcyBjb2RlIG1hbnVhbGx5LlxuICAgIHdlYndvcms6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL3dlYndvcmsvanMvd2Vid29yay5qc1wiKSxcbiAgICB5b3V0dWJlOiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS92aWRlby9qcy9ydW5lc3RvbmV2aWRlby5qc1wiKSxcbn1cblxuLy8gLi4gX2R5bmFtaWMgaW1wb3J0IG1hY2hpbmVyeTpcbi8vXG4vLyBEeW5hbWljIGltcG9ydCBtYWNoaW5lcnlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRnVsZmlsbCBhIHByb21pc2Ugd2hlbiB0aGUgUnVuZXN0b25lIHByZS1sb2dpbiBjb21wbGV0ZSBldmVudCBvY2N1cnMuXG5sZXQgcHJlX2xvZ2luX2NvbXBsZXRlX3Byb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+ICQoZG9jdW1lbnQpLmJpbmQoXCJydW5lc3RvbmU6cHJlLWxvZ2luLWNvbXBsZXRlXCIsIHJlc29sdmUpKTtcblxuLy8gUHJvdmlkZSBhIHNpbXBsZSBmdW5jdGlvbiB0byBpbXBvcnQgdGhlIEpTIGZvciBhbGwgY29tcG9uZW50cyBvbiB0aGUgcGFnZS5cbmV4cG9ydCBmdW5jdGlvbiBydW5lc3RvbmVfYXV0b19pbXBvcnQoKSB7XG4gICAgLy8gQ3JlYXRlIGEgc2V0IG9mIGBgZGF0YS1jb21wb25lbnRgYCB2YWx1ZXMsIHRvIGF2b2lkIGR1cGxpY2F0aW9uLlxuICAgIGNvbnN0IHMgPSBuZXcgU2V0KFxuICAgICAgICAvLyBBbGwgUnVuZXN0b25lIGNvbXBvbmVudHMgaGF2ZSBhIGBgZGF0YS1jb21wb25lbnRgYCBhdHRyaWJ1dGUuXG4gICAgICAgICQoXCJbZGF0YS1jb21wb25lbnRdXCIpLm1hcChcbiAgICAgICAgICAgIC8vIEV4dHJhY3QgdGhlIHZhbHVlIG9mIHRoZSBkYXRhLWNvbXBvbmVudCBhdHRyaWJ1dGUuXG4gICAgICAgICAgICAoaW5kZXgsIGVsZW1lbnQpID0+ICQoZWxlbWVudCkuYXR0cihcImRhdGEtY29tcG9uZW50XCIpXG4gICAgICAgICAgICAvLyBTd2l0Y2ggZnJvbSBhIGpRdWVyeSBvYmplY3QgYmFjayB0byBhbiBhcnJheSwgcGFzc2luZyB0aGF0IHRvIHRoZSBTZXQgY29uc3RydWN0b3IuXG4gICAgICAgICkuZ2V0KClcbiAgICApO1xuXG4gICAgLy8gTG9hZCBKUyBmb3IgZWFjaCBvZiB0aGUgY29tcG9uZW50cyBmb3VuZC5cbiAgICBjb25zdCBhID0gWy4uLnNdLm1hcCh2YWx1ZSA9PlxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIEpTIGZvciB0aGlzIGNvbXBvbmVudCwgcmV0dXJuIGFuIGVtcHR5IFByb21pc2UuXG4gICAgICAgIChtb2R1bGVfbWFwW3ZhbHVlXSB8fCAoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKCkpKSgpXG4gICAgKTtcblxuICAgIC8vIFNlbmQgdGhlIFJ1bmVzdG9uZSBsb2dpbiBjb21wbGV0ZSBldmVudCB3aGVuIGFsbCBKUyBpcyBsb2FkZWQgYW5kIHRoZSBwcmUtbG9naW4gaXMgYWxzbyBjb21wbGV0ZS5cbiAgICBQcm9taXNlLmFsbChbcHJlX2xvZ2luX2NvbXBsZXRlX3Byb21pc2UsIC4uLmFdKS50aGVuKCgpID0+ICQoZG9jdW1lbnQpLnRyaWdnZXIoXCJydW5lc3RvbmU6bG9naW4tY29tcGxldGVcIikpO1xufVxuXG4vLyBMb2FkIGNvbXBvbmVudCBKUyB3aGVuIHRoZSBkb2N1bWVudCBpcyByZWFkeS5cbiQoZG9jdW1lbnQpLnJlYWR5KHJ1bmVzdG9uZV9hdXRvX2ltcG9ydCk7XG5cbi8vIFByb3ZpZGUgYSBmdW5jdGlvbiB0byBpbXBvcnQgb25lIHNwZWNpZmljIFJ1bmVzdG9uZSBjb21wb25lbnQuXG4vLyB0aGUgaW1wb3J0IGZ1bmN0aW9uIGluc2lkZSBtb2R1bGVfbWFwIGlzIGFzeW5jIC0tIHJ1bmVzdG9uZV9pbXBvcnRcbi8vIHNob3VsZCBiZSBhd2FpdGVkIHdoZW4gbmVjZXNzYXJ5IHRvIGVuc3VyZSB0aGUgaW1wb3J0IGNvbXBsZXRlc1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJ1bmVzdG9uZV9pbXBvcnQoY29tcG9uZW50X25hbWUpIHtcbiAgICByZXR1cm4gbW9kdWxlX21hcFtjb21wb25lbnRfbmFtZV0oKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcG9wdXBTY3JhdGNoQUMoKSB7XG4gICAgLy8gbG9hZCB0aGUgYWN0aXZlY29kZSBidW5kbGVcbiAgICBhd2FpdCBydW5lc3RvbmVfaW1wb3J0KFwiYWN0aXZlY29kZVwiKTtcbiAgICAvLyBzY3JhdGNoRGl2IHdpbGwgYmUgZGVmaW5lZCBpZiB3ZSBoYXZlIGFscmVhZHkgY3JlYXRlZCBhIHNjcmF0Y2hcbiAgICAvLyBhY3RpdmVjb2RlLiAgSWYgaXRzIG5vdCBkZWZpbmVkIHRoZW4gd2UgbmVlZCB0byBnZXQgaXQgcmVhZHkgdG8gdG9nZ2xlXG4gICAgaWYgKCFlQm9va0NvbmZpZy5zY3JhdGNoRGl2KSB7XG4gICAgICAgIHdpbmRvdy5BQ0ZhY3RvcnkuY3JlYXRlU2NyYXRjaEFjdGl2ZWNvZGUoKTtcbiAgICAgICAgbGV0IGRpdmlkID0gZUJvb2tDb25maWcuc2NyYXRjaERpdlxuICAgICAgICB3aW5kb3cuZWRMaXN0W2RpdmlkXSA9IEFDRmFjdG9yeS5jcmVhdGVBY3RpdmVDb2RlKCQoYCMke2RpdmlkfWApWzBdLFxuICAgICAgICAgICAgZUJvb2tDb25maWcuYWNEZWZhdWx0TGFuZ3VhZ2UpO1xuICAgICAgICBpZiAoZUJvb2tDb25maWcuaXNMb2dnZWRJbikge1xuICAgICAgICAgICAgd2luZG93LmVkTGlzdFtkaXZpZF0uZW5hYmxlU2F2ZUxvYWQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cuQUNGYWN0b3J5LnRvZ2dsZVNjcmF0Y2hBY3RpdmVjb2RlKCk7XG59XG5cbi8vIFNldCB0aGUgZGlyZWN0b3J5IGNvbnRhaW5pbmcgdGhpcyBzY3JpcHQgYXMgdGhlIGBwYXRoIDxodHRwczovL3dlYnBhY2suanMub3JnL2d1aWRlcy9wdWJsaWMtcGF0aC8jb24tdGhlLWZseT5gXyBmb3IgYWxsIHdlYnBhY2tlZCBzY3JpcHRzLlxuY29uc3Qgc2NyaXB0X3NyYyA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSBzY3JpcHRfc3JjLnN1YnN0cmluZygwLCBzY3JpcHRfc3JjLmxhc3RJbmRleE9mKCcvJykgKyAxKTtcblxuXG4vLyBNYW51YWwgZXhwb3J0c1xuLy8gPT09PT09PT09PT09PT1cbi8vIFdlYnBhY2sncyBgYG91dHB1dC5saWJyYXJ5YGAgc2V0dGluZyBkb2Vzbid0IHNlZW0gdG8gd29yayB3aXRoIHRoZSBzcGxpdCBjaHVua3MgcGx1Z2luOyBkbyBhbGwgZXhwb3J0cyBtYW51YWxseSB0aHJvdWdoIHRoZSBgYHdpbmRvd2BgIG9iamVjdCBpbnN0ZWFkLlxuY29uc3QgcmMgPSB7fTtcbnJjLnJ1bmVzdG9uZV9pbXBvcnQgPSBydW5lc3RvbmVfaW1wb3J0O1xucmMucnVuZXN0b25lX2F1dG9faW1wb3J0ID0gcnVuZXN0b25lX2F1dG9faW1wb3J0O1xucmMuZ2V0U3dpdGNoID0gZ2V0U3dpdGNoO1xucmMuc3dpdGNoVGhlbWUgPSBzd2l0Y2hUaGVtZTtcbnJjLnBvcHVwU2NyYXRjaEFDID0gcG9wdXBTY3JhdGNoQUM7XG53aW5kb3cucnVuZXN0b25lQ29tcG9uZW50cyA9IHJjO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==