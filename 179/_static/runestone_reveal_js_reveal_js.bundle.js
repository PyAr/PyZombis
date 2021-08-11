(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_reveal_js_reveal_js"],{

/***/ 22808:
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./runestone/reveal/css/reveal.css ***!
  \*******************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".iguide {\r\n    background-color: #ddffdd;\r\n    padding: 1em;\r\n}", "",{"version":3,"sources":["webpack://./runestone/reveal/css/reveal.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,YAAY;AAChB","sourcesContent":[".iguide {\r\n    background-color: #ddffdd;\r\n    padding: 1em;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 84705:
/*!*****************************************!*\
  !*** ./runestone/reveal/css/reveal.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reveal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./reveal.css */ 22808);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reveal_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reveal_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ 12632:
/*!***************************************!*\
  !*** ./runestone/reveal/js/reveal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase */ 2568);
/* harmony import */ var _css_reveal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/reveal.css */ 84705);
/*==========================================
=======      Master reveal.js       ========
============================================
===     This file contains the JS for    ===
===     the Runestone reval component.   ===
============================================
===              Created by              ===
===           Isaiah Mayerchak           ===
===               06/12/15               ===
==========================================*/


var RevealList = {}; // Dictionary that contains all instances of Reveal objects




// Define Reveal object
class Reveal extends _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(opts) {
        super(opts);
        var orig = opts.orig; // entire <div> element that will be replaced by new HTML
        this.origElem = orig;
        this.divid = orig.id;
        this.dataModal = false; // is a model dialog vs. inline
        if ($(this.origElem).is("[data-modal]")) {
            this.dataModal = true;
        }
        if ($(this.origElem).is("[data-instructoronly]")) {
            this.instructorOnly = true;
        } else {
            this.instructorOnly = false;
        }
        this.modalTitle = null;
        this.showtitle = null; // Title of button that shows the concealed data
        this.hidetitle = null;
        this.origContent = $(this.origElem).html();
        this.children = [];
        this.adoptChildren();
        this.checkForTitle();
        this.getButtonTitles();
        // Delay creating instructoronly buttons until login
        if (!this.instructorOnly) {
            this.createShowButton();
            if (!this.dataModal) {
                this.createHideButton(); // Hide button is already implemented in modal dialog
            }
        }
        this.indicate_component_ready();
    }
    /*====================================
    == Get text for buttons/modal title ==
    ====================================*/
    adoptChildren() {
        for (var i = 0; i < this.origElem.childNodes.length; i++) {
            this.children.push(this.origElem.childNodes[i]);
        }
    }
    getButtonTitles() {
        this.showtitle = $(this.origElem).data("showtitle");
        if (this.showtitle === undefined) {
            this.showtitle = "Show"; // default
        }
        if (this.instructorOnly) {
            this.showtitle += " IG";
        }
        this.hidetitle = $(this.origElem).data("hidetitle");
        if (this.hidetitle === undefined) {
            this.hidetitle = "Hide"; // default
        }
    }
    checkForTitle() {
        this.modalTitle = $(this.origElem).data("title");
        if (this.modalTitle === undefined) {
            this.modalTitle = "Message from the author"; // default
        }
    }
    /*============================
    == Create show/hide buttons ==
    ============================*/
    createShowButton() {
        var _this = this;
        this.containerDiv = document.createElement("div"); // wrapper div
        this.containerDiv.id = this.divid;
        if (!this.dataModal) {
            this.revealDiv = document.createElement("div"); // Div that is hidden that contains content
            // Get original content, put it inside revealDiv and replace original div with revealDiv
            //$(this.revealDiv).html(this.origContent);
            for (var i = 0; i < this.children.length; i++) {
                this.revealDiv.appendChild(this.children[i]);
            }
            $(this.revealDiv).hide();
            this.containerDiv.appendChild(this.revealDiv);
        }
        if (this.instructorOnly) {
            $(this.revealDiv).addClass("iguide");
        }
        this.sbutt = document.createElement("button");
        $(this.sbutt).addClass("btn reveal_button");
        if (this.instructorOnly) {
            $(this.sbutt).addClass("btn-info");
        } else {
            $(this.sbutt).addClass("btn-default");
        }
        $(this.sbutt).css("margin-bottom", "10px");
        this.sbutt.textContent = this.showtitle;
        this.sbutt.id = this.divid + "_show";
        if (!this.dataModal) {
            this.sbutt.onclick = function () {
                _this.showInline();
                $(this).hide();
            };
        } else {
            this.createModal();
            $(this.sbutt).attr({
                "data-toggle": "modal",
                "data-target": "#" + this.divid + "_modal",
            });
        }
        this.containerDiv.appendChild(this.sbutt);
        $(this.origElem).replaceWith(this.containerDiv);
    }
    createHideButton() {
        var _this = this;
        this.hbutt = document.createElement("button");
        $(this.hbutt).hide();
        this.hbutt.textContent = this.hidetitle;
        this.hbutt.className = "btn btn-default reveal_button";
        $(this.hbutt).css("margin-bottom", "10px");
        this.hbutt.id = this.divid + "_hide";
        this.hbutt.onclick = function () {
            _this.hideInline();
            $(this).hide();
        };
        this.containerDiv.appendChild(this.hbutt);
    }
    createInstructorButtons() {
        this.createShowButton();
        if (!this.dataModal) {
            this.createHideButton();
        }
    }
    /*=================
    === Modal logic ===
    =================*/
    createModal() {
        this.modalContainerDiv = document.createElement("div");
        $(this.modalContainerDiv).addClass("modal fade");
        this.modalContainerDiv.id = this.divid + "_modal";
        $(this.modalContainerDiv).attr("role", "dialog");
        document.body.appendChild(this.modalContainerDiv);
        this.modalDialogDiv = document.createElement("div");
        $(this.modalDialogDiv).addClass("modal-dialog");
        this.modalContainerDiv.appendChild(this.modalDialogDiv);
        this.modalContentDiv = document.createElement("div");
        $(this.modalContentDiv).addClass("modal-content");
        this.modalDialogDiv.appendChild(this.modalContentDiv);
        this.modalHeaderDiv = document.createElement("div");
        $(this.modalHeaderDiv).addClass("modal-header");
        this.modalContentDiv.appendChild(this.modalHeaderDiv);
        this.modalButton = document.createElement("button");
        this.modalButton.type = "button";
        $(this.modalButton).addClass("close");
        $(this.modalButton).attr({
            "aria-hidden": "true",
            "data-dismiss": "modal",
        });
        this.modalButton.innerHTML = "&times";
        this.modalHeaderDiv.appendChild(this.modalButton);
        this.modalTitleE = document.createElement("h4");
        $(this.modalTitleE).addClass("modal-title");
        this.modalTitleE.innerHTML = this.modalTitle;
        this.modalHeaderDiv.appendChild(this.modalTitleE);
        this.modalBody = document.createElement("div");
        $(this.modalBody).addClass("modal-body");
        for (var i = 0; i < this.children.length; i++) {
            this.modalBody.appendChild(this.children[i]);
        }
        this.modalContentDiv.appendChild(this.modalBody);
        /*var html = "<div class='modal fade'>" +
                    "    <div class='modal-dialog compare-modal'>" +
                    "        <div class='modal-content'>" +
                    "            <div class='modal-header'>" +
                    "                <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>" +
                    "                <h4 class='modal-title'>" + this.modalTitle + "</h4>" +
                    "            </div>" +
                    "            <div class='modal-body'>" +
                    this.origContent +
                    "            </div>" +
                    "        </div>" +
                    "    </div>" +
                    "</div>";*/
        //var el = $(this.modalContainerDiv);
        //el.modal();
    }
    /*==================
    === Inline logic ===
    ==================*/
    showInline() {
        $(this.revealDiv).show();
        $(this.hbutt).show();
        $(this.revealDiv)
            .find(".CodeMirror")
            .each(function (i, el) {
                el.CodeMirror.refresh();
            });
    }
    hideInline() {
        $(this.revealDiv).hide();
        $(this.sbutt).show();
    }
}

/*=================================
== Find the custom HTML tags and ==
==     execute our code on them        ==
=================================*/

$(document).bind("runestone:login-complete", function () {
    $("[data-component=reveal]").each(function (index) {
        try {
            RevealList[this.id] = new Reveal({ orig: this });
        } catch (err) {
            console.log(`Error rendering Reveal ${this.id}`);
        }
    });

    if (eBookConfig.isInstructor) {
        for (const divid of Object.keys(RevealList)) {
            if (RevealList[divid].instructorOnly) {
                RevealList[divid].createInstructorButtons();
            }
        }
    }
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3JldmVhbC9jc3MvcmV2ZWFsLmNzcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3JldmVhbC9jc3MvcmV2ZWFsLmNzcz82ZWIzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvcmV2ZWFsL2pzL3JldmVhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxtREFBbUQsa0NBQWtDLHFCQUFxQixLQUFLLE9BQU8sa0dBQWtHLFlBQVksV0FBVyxtQ0FBbUMsa0NBQWtDLHFCQUFxQixLQUFLLG1CQUFtQjtBQUNqVztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHdEO0FBQy9GLFlBQThGOztBQUU5Rjs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyxvRkFBTzs7OztBQUl4QixpRUFBZSwyRkFBYyxNQUFNLEU7Ozs7Ozs7Ozs7Ozs7O0FDWm5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7O0FBRWIsb0JBQW9COztBQUVzQztBQUMvQjs7QUFFM0I7QUFDQSxxQkFBcUIsNkRBQWE7QUFDbEM7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUNBQXFDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQSwyQkFBMkIsMEJBQTBCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwQkFBMEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3SEFBd0g7QUFDeEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxhQUFhO0FBQzNELFNBQVM7QUFDVCxrREFBa0QsUUFBUTtBQUMxRDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6InJ1bmVzdG9uZV9yZXZlYWxfanNfcmV2ZWFsX2pzLmJ1bmRsZS5qcz92PWY2NzVlZmFjZDhhZTI5MGRjMDZiIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaWd1aWRlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZmZkZDtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ydW5lc3RvbmUvcmV2ZWFsL2Nzcy9yZXZlYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmlndWlkZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGZmZGQ7XFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmV2ZWFsLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PT09PT0gICAgICBNYXN0ZXIgcmV2ZWFsLmpzICAgICAgID09PT09PT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PSAgICAgVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBKUyBmb3IgICAgPT09XHJcbj09PSAgICAgdGhlIFJ1bmVzdG9uZSByZXZhbCBjb21wb25lbnQuICAgPT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PSAgICAgICAgICAgICAgQ3JlYXRlZCBieSAgICAgICAgICAgICAgPT09XHJcbj09PSAgICAgICAgICAgSXNhaWFoIE1heWVyY2hhayAgICAgICAgICAgPT09XHJcbj09PSAgICAgICAgICAgICAgIDA2LzEyLzE1ICAgICAgICAgICAgICAgPT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIFJldmVhbExpc3QgPSB7fTsgLy8gRGljdGlvbmFyeSB0aGF0IGNvbnRhaW5zIGFsbCBpbnN0YW5jZXMgb2YgUmV2ZWFsIG9iamVjdHNcclxuXHJcbmltcG9ydCBSdW5lc3RvbmVCYXNlIGZyb20gXCIuLi8uLi9jb21tb24vanMvcnVuZXN0b25lYmFzZVwiO1xyXG5pbXBvcnQgXCIuLi9jc3MvcmV2ZWFsLmNzc1wiO1xyXG5cclxuLy8gRGVmaW5lIFJldmVhbCBvYmplY3RcclxuY2xhc3MgUmV2ZWFsIGV4dGVuZHMgUnVuZXN0b25lQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XHJcbiAgICAgICAgc3VwZXIob3B0cyk7XHJcbiAgICAgICAgdmFyIG9yaWcgPSBvcHRzLm9yaWc7IC8vIGVudGlyZSA8ZGl2PiBlbGVtZW50IHRoYXQgd2lsbCBiZSByZXBsYWNlZCBieSBuZXcgSFRNTFxyXG4gICAgICAgIHRoaXMub3JpZ0VsZW0gPSBvcmlnO1xyXG4gICAgICAgIHRoaXMuZGl2aWQgPSBvcmlnLmlkO1xyXG4gICAgICAgIHRoaXMuZGF0YU1vZGFsID0gZmFsc2U7IC8vIGlzIGEgbW9kZWwgZGlhbG9nIHZzLiBpbmxpbmVcclxuICAgICAgICBpZiAoJCh0aGlzLm9yaWdFbGVtKS5pcyhcIltkYXRhLW1vZGFsXVwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFNb2RhbCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkKHRoaXMub3JpZ0VsZW0pLmlzKFwiW2RhdGEtaW5zdHJ1Y3Rvcm9ubHldXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdHJ1Y3Rvck9ubHkgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdHJ1Y3Rvck9ubHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb2RhbFRpdGxlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNob3d0aXRsZSA9IG51bGw7IC8vIFRpdGxlIG9mIGJ1dHRvbiB0aGF0IHNob3dzIHRoZSBjb25jZWFsZWQgZGF0YVxyXG4gICAgICAgIHRoaXMuaGlkZXRpdGxlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9yaWdDb250ZW50ID0gJCh0aGlzLm9yaWdFbGVtKS5odG1sKCk7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuYWRvcHRDaGlsZHJlbigpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tGb3JUaXRsZSgpO1xyXG4gICAgICAgIHRoaXMuZ2V0QnV0dG9uVGl0bGVzKCk7XHJcbiAgICAgICAgLy8gRGVsYXkgY3JlYXRpbmcgaW5zdHJ1Y3Rvcm9ubHkgYnV0dG9ucyB1bnRpbCBsb2dpblxyXG4gICAgICAgIGlmICghdGhpcy5pbnN0cnVjdG9yT25seSkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNob3dCdXR0b24oKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGFNb2RhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVIaWRlQnV0dG9uKCk7IC8vIEhpZGUgYnV0dG9uIGlzIGFscmVhZHkgaW1wbGVtZW50ZWQgaW4gbW9kYWwgZGlhbG9nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmRpY2F0ZV9jb21wb25lbnRfcmVhZHkoKTtcclxuICAgIH1cclxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICA9PSBHZXQgdGV4dCBmb3IgYnV0dG9ucy9tb2RhbCB0aXRsZSA9PVxyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgIGFkb3B0Q2hpbGRyZW4oKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9yaWdFbGVtLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMub3JpZ0VsZW0uY2hpbGROb2Rlc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0QnV0dG9uVGl0bGVzKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd3RpdGxlID0gJCh0aGlzLm9yaWdFbGVtKS5kYXRhKFwic2hvd3RpdGxlXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLnNob3d0aXRsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd3RpdGxlID0gXCJTaG93XCI7IC8vIGRlZmF1bHRcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdHJ1Y3Rvck9ubHkpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93dGl0bGUgKz0gXCIgSUdcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oaWRldGl0bGUgPSAkKHRoaXMub3JpZ0VsZW0pLmRhdGEoXCJoaWRldGl0bGVcIik7XHJcbiAgICAgICAgaWYgKHRoaXMuaGlkZXRpdGxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRldGl0bGUgPSBcIkhpZGVcIjsgLy8gZGVmYXVsdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoZWNrRm9yVGl0bGUoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbFRpdGxlID0gJCh0aGlzLm9yaWdFbGVtKS5kYXRhKFwidGl0bGVcIik7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kYWxUaXRsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWxUaXRsZSA9IFwiTWVzc2FnZSBmcm9tIHRoZSBhdXRob3JcIjsgLy8gZGVmYXVsdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgPT0gQ3JlYXRlIHNob3cvaGlkZSBidXR0b25zID09XHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgIGNyZWF0ZVNob3dCdXR0b24oKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vIHdyYXBwZXIgZGl2XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuaWQgPSB0aGlzLmRpdmlkO1xyXG4gICAgICAgIGlmICghdGhpcy5kYXRhTW9kYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXZlYWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBEaXYgdGhhdCBpcyBoaWRkZW4gdGhhdCBjb250YWlucyBjb250ZW50XHJcbiAgICAgICAgICAgIC8vIEdldCBvcmlnaW5hbCBjb250ZW50LCBwdXQgaXQgaW5zaWRlIHJldmVhbERpdiBhbmQgcmVwbGFjZSBvcmlnaW5hbCBkaXYgd2l0aCByZXZlYWxEaXZcclxuICAgICAgICAgICAgLy8kKHRoaXMucmV2ZWFsRGl2KS5odG1sKHRoaXMub3JpZ0NvbnRlbnQpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmV2ZWFsRGl2LmFwcGVuZENoaWxkKHRoaXMuY2hpbGRyZW5baV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQodGhpcy5yZXZlYWxEaXYpLmhpZGUoKTtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5yZXZlYWxEaXYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pbnN0cnVjdG9yT25seSkge1xyXG4gICAgICAgICAgICAkKHRoaXMucmV2ZWFsRGl2KS5hZGRDbGFzcyhcImlndWlkZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zYnV0dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgJCh0aGlzLnNidXR0KS5hZGRDbGFzcyhcImJ0biByZXZlYWxfYnV0dG9uXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RydWN0b3JPbmx5KSB7XHJcbiAgICAgICAgICAgICQodGhpcy5zYnV0dCkuYWRkQ2xhc3MoXCJidG4taW5mb1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMuc2J1dHQpLmFkZENsYXNzKFwiYnRuLWRlZmF1bHRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQodGhpcy5zYnV0dCkuY3NzKFwibWFyZ2luLWJvdHRvbVwiLCBcIjEwcHhcIik7XHJcbiAgICAgICAgdGhpcy5zYnV0dC50ZXh0Q29udGVudCA9IHRoaXMuc2hvd3RpdGxlO1xyXG4gICAgICAgIHRoaXMuc2J1dHQuaWQgPSB0aGlzLmRpdmlkICsgXCJfc2hvd1wiO1xyXG4gICAgICAgIGlmICghdGhpcy5kYXRhTW9kYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zYnV0dC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc2hvd0lubGluZSgpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVNb2RhbCgpO1xyXG4gICAgICAgICAgICAkKHRoaXMuc2J1dHQpLmF0dHIoe1xyXG4gICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcIm1vZGFsXCIsXHJcbiAgICAgICAgICAgICAgICBcImRhdGEtdGFyZ2V0XCI6IFwiI1wiICsgdGhpcy5kaXZpZCArIFwiX21vZGFsXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLnNidXR0KTtcclxuICAgICAgICAkKHRoaXMub3JpZ0VsZW0pLnJlcGxhY2VXaXRoKHRoaXMuY29udGFpbmVyRGl2KTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUhpZGVCdXR0b24oKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmhidXR0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAkKHRoaXMuaGJ1dHQpLmhpZGUoKTtcclxuICAgICAgICB0aGlzLmhidXR0LnRleHRDb250ZW50ID0gdGhpcy5oaWRldGl0bGU7XHJcbiAgICAgICAgdGhpcy5oYnV0dC5jbGFzc05hbWUgPSBcImJ0biBidG4tZGVmYXVsdCByZXZlYWxfYnV0dG9uXCI7XHJcbiAgICAgICAgJCh0aGlzLmhidXR0KS5jc3MoXCJtYXJnaW4tYm90dG9tXCIsIFwiMTBweFwiKTtcclxuICAgICAgICB0aGlzLmhidXR0LmlkID0gdGhpcy5kaXZpZCArIFwiX2hpZGVcIjtcclxuICAgICAgICB0aGlzLmhidXR0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmhpZGVJbmxpbmUoKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5oaWRlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLmhidXR0KTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUluc3RydWN0b3JCdXR0b25zKCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU2hvd0J1dHRvbigpO1xyXG4gICAgICAgIGlmICghdGhpcy5kYXRhTW9kYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVIaWRlQnV0dG9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyo9PT09PT09PT09PT09PT09PVxyXG4gICAgPT09IE1vZGFsIGxvZ2ljID09PVxyXG4gICAgPT09PT09PT09PT09PT09PT0qL1xyXG4gICAgY3JlYXRlTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbENvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgJCh0aGlzLm1vZGFsQ29udGFpbmVyRGl2KS5hZGRDbGFzcyhcIm1vZGFsIGZhZGVcIik7XHJcbiAgICAgICAgdGhpcy5tb2RhbENvbnRhaW5lckRpdi5pZCA9IHRoaXMuZGl2aWQgKyBcIl9tb2RhbFwiO1xyXG4gICAgICAgICQodGhpcy5tb2RhbENvbnRhaW5lckRpdikuYXR0cihcInJvbGVcIiwgXCJkaWFsb2dcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsQ29udGFpbmVyRGl2KTtcclxuICAgICAgICB0aGlzLm1vZGFsRGlhbG9nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAkKHRoaXMubW9kYWxEaWFsb2dEaXYpLmFkZENsYXNzKFwibW9kYWwtZGlhbG9nXCIpO1xyXG4gICAgICAgIHRoaXMubW9kYWxDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5tb2RhbERpYWxvZ0Rpdik7XHJcbiAgICAgICAgdGhpcy5tb2RhbENvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICQodGhpcy5tb2RhbENvbnRlbnREaXYpLmFkZENsYXNzKFwibW9kYWwtY29udGVudFwiKTtcclxuICAgICAgICB0aGlzLm1vZGFsRGlhbG9nRGl2LmFwcGVuZENoaWxkKHRoaXMubW9kYWxDb250ZW50RGl2KTtcclxuICAgICAgICB0aGlzLm1vZGFsSGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAkKHRoaXMubW9kYWxIZWFkZXJEaXYpLmFkZENsYXNzKFwibW9kYWwtaGVhZGVyXCIpO1xyXG4gICAgICAgIHRoaXMubW9kYWxDb250ZW50RGl2LmFwcGVuZENoaWxkKHRoaXMubW9kYWxIZWFkZXJEaXYpO1xyXG4gICAgICAgIHRoaXMubW9kYWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHRoaXMubW9kYWxCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICAgICAgJCh0aGlzLm1vZGFsQnV0dG9uKS5hZGRDbGFzcyhcImNsb3NlXCIpO1xyXG4gICAgICAgICQodGhpcy5tb2RhbEJ1dHRvbikuYXR0cih7XHJcbiAgICAgICAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YS1kaXNtaXNzXCI6IFwibW9kYWxcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1vZGFsQnV0dG9uLmlubmVySFRNTCA9IFwiJnRpbWVzXCI7XHJcbiAgICAgICAgdGhpcy5tb2RhbEhlYWRlckRpdi5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsQnV0dG9uKTtcclxuICAgICAgICB0aGlzLm1vZGFsVGl0bGVFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgICAgICQodGhpcy5tb2RhbFRpdGxlRSkuYWRkQ2xhc3MoXCJtb2RhbC10aXRsZVwiKTtcclxuICAgICAgICB0aGlzLm1vZGFsVGl0bGVFLmlubmVySFRNTCA9IHRoaXMubW9kYWxUaXRsZTtcclxuICAgICAgICB0aGlzLm1vZGFsSGVhZGVyRGl2LmFwcGVuZENoaWxkKHRoaXMubW9kYWxUaXRsZUUpO1xyXG4gICAgICAgIHRoaXMubW9kYWxCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAkKHRoaXMubW9kYWxCb2R5KS5hZGRDbGFzcyhcIm1vZGFsLWJvZHlcIik7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWxCb2R5LmFwcGVuZENoaWxkKHRoaXMuY2hpbGRyZW5baV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vZGFsQ29udGVudERpdi5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsQm9keSk7XHJcbiAgICAgICAgLyp2YXIgaHRtbCA9IFwiPGRpdiBjbGFzcz0nbW9kYWwgZmFkZSc+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiICAgIDxkaXYgY2xhc3M9J21vZGFsLWRpYWxvZyBjb21wYXJlLW1vZGFsJz5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWNvbnRlbnQnPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWhlYWRlcic+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nY2xvc2UnIGRhdGEtZGlzbWlzcz0nbW9kYWwnIGFyaWEtaGlkZGVuPSd0cnVlJz4mdGltZXM7PC9idXR0b24+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiICAgICAgICAgICAgICAgIDxoNCBjbGFzcz0nbW9kYWwtdGl0bGUnPlwiICsgdGhpcy5tb2RhbFRpdGxlICsgXCI8L2g0PlwiICtcclxuICAgICAgICAgICAgICAgICAgICBcIiAgICAgICAgICAgIDwvZGl2PlwiICtcclxuICAgICAgICAgICAgICAgICAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWJvZHknPlwiICtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yaWdDb250ZW50ICtcclxuICAgICAgICAgICAgICAgICAgICBcIiAgICAgICAgICAgIDwvZGl2PlwiICtcclxuICAgICAgICAgICAgICAgICAgICBcIiAgICAgICAgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiICAgIDwvZGl2PlwiICtcclxuICAgICAgICAgICAgICAgICAgICBcIjwvZGl2PlwiOyovXHJcbiAgICAgICAgLy92YXIgZWwgPSAkKHRoaXMubW9kYWxDb250YWluZXJEaXYpO1xyXG4gICAgICAgIC8vZWwubW9kYWwoKTtcclxuICAgIH1cclxuICAgIC8qPT09PT09PT09PT09PT09PT09XHJcbiAgICA9PT0gSW5saW5lIGxvZ2ljID09PVxyXG4gICAgPT09PT09PT09PT09PT09PT09Ki9cclxuICAgIHNob3dJbmxpbmUoKSB7XHJcbiAgICAgICAgJCh0aGlzLnJldmVhbERpdikuc2hvdygpO1xyXG4gICAgICAgICQodGhpcy5oYnV0dCkuc2hvdygpO1xyXG4gICAgICAgICQodGhpcy5yZXZlYWxEaXYpXHJcbiAgICAgICAgICAgIC5maW5kKFwiLkNvZGVNaXJyb3JcIilcclxuICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24gKGksIGVsKSB7XHJcbiAgICAgICAgICAgICAgICBlbC5Db2RlTWlycm9yLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBoaWRlSW5saW5lKCkge1xyXG4gICAgICAgICQodGhpcy5yZXZlYWxEaXYpLmhpZGUoKTtcclxuICAgICAgICAkKHRoaXMuc2J1dHQpLnNob3coKTtcclxuICAgIH1cclxufVxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT0gRmluZCB0aGUgY3VzdG9tIEhUTUwgdGFncyBhbmQgPT1cclxuPT0gICAgIGV4ZWN1dGUgb3VyIGNvZGUgb24gdGhlbSAgICAgICAgPT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbiQoZG9jdW1lbnQpLmJpbmQoXCJydW5lc3RvbmU6bG9naW4tY29tcGxldGVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIltkYXRhLWNvbXBvbmVudD1yZXZlYWxdXCIpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgUmV2ZWFsTGlzdFt0aGlzLmlkXSA9IG5ldyBSZXZlYWwoeyBvcmlnOiB0aGlzIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3IgcmVuZGVyaW5nIFJldmVhbCAke3RoaXMuaWR9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGVCb29rQ29uZmlnLmlzSW5zdHJ1Y3Rvcikge1xyXG4gICAgICAgIGZvciAoY29uc3QgZGl2aWQgb2YgT2JqZWN0LmtleXMoUmV2ZWFsTGlzdCkpIHtcclxuICAgICAgICAgICAgaWYgKFJldmVhbExpc3RbZGl2aWRdLmluc3RydWN0b3JPbmx5KSB7XHJcbiAgICAgICAgICAgICAgICBSZXZlYWxMaXN0W2RpdmlkXS5jcmVhdGVJbnN0cnVjdG9yQnV0dG9ucygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==