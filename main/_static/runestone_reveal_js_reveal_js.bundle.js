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
___CSS_LOADER_EXPORT___.push([module.id, ".iguide {\n    background-color: #ddffdd;\n    padding: 1em;\n}", "",{"version":3,"sources":["webpack://./runestone/reveal/css/reveal.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,YAAY;AAChB","sourcesContent":[".iguide {\n    background-color: #ddffdd;\n    padding: 1em;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3JldmVhbC9jc3MvcmV2ZWFsLmNzcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3JldmVhbC9jc3MvcmV2ZWFsLmNzcz82ZWIzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvcmV2ZWFsL2pzL3JldmVhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxtREFBbUQsZ0NBQWdDLG1CQUFtQixHQUFHLE9BQU8sa0dBQWtHLFlBQVksV0FBVyxtQ0FBbUMsZ0NBQWdDLG1CQUFtQixHQUFHLG1CQUFtQjtBQUNyVjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHdEO0FBQy9GLFlBQThGOztBQUU5Rjs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyxvRkFBTzs7OztBQUl4QixpRUFBZSwyRkFBYyxNQUFNLEU7Ozs7Ozs7Ozs7Ozs7O0FDWm5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7O0FBRWIsb0JBQW9COztBQUVzQztBQUMvQjs7QUFFM0I7QUFDQSxxQkFBcUIsNkRBQWE7QUFDbEM7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUNBQXFDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQSwyQkFBMkIsMEJBQTBCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwQkFBMEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3SEFBd0g7QUFDeEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxhQUFhO0FBQzNELFNBQVM7QUFDVCxrREFBa0QsUUFBUTtBQUMxRDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6InJ1bmVzdG9uZV9yZXZlYWxfanNfcmV2ZWFsX2pzLmJ1bmRsZS5qcz92PTU1OTY2YzkwODgwMDA5MWYyMDVhIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaWd1aWRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZmZkZDtcXG4gICAgcGFkZGluZzogMWVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ydW5lc3RvbmUvcmV2ZWFsL2Nzcy9yZXZlYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmlndWlkZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGZmZGQ7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmV2ZWFsLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT09PT09ICAgICAgTWFzdGVyIHJldmVhbC5qcyAgICAgICA9PT09PT09PVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PSAgICAgVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBKUyBmb3IgICAgPT09XG49PT0gICAgIHRoZSBSdW5lc3RvbmUgcmV2YWwgY29tcG9uZW50LiAgID09PVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PSAgICAgICAgICAgICAgQ3JlYXRlZCBieSAgICAgICAgICAgICAgPT09XG49PT0gICAgICAgICAgIElzYWlhaCBNYXllcmNoYWsgICAgICAgICAgID09PVxuPT09ICAgICAgICAgICAgICAgMDYvMTIvMTUgICAgICAgICAgICAgICA9PT1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIFJldmVhbExpc3QgPSB7fTsgLy8gRGljdGlvbmFyeSB0aGF0IGNvbnRhaW5zIGFsbCBpbnN0YW5jZXMgb2YgUmV2ZWFsIG9iamVjdHNcblxuaW1wb3J0IFJ1bmVzdG9uZUJhc2UgZnJvbSBcIi4uLy4uL2NvbW1vbi9qcy9ydW5lc3RvbmViYXNlXCI7XG5pbXBvcnQgXCIuLi9jc3MvcmV2ZWFsLmNzc1wiO1xuXG4vLyBEZWZpbmUgUmV2ZWFsIG9iamVjdFxuY2xhc3MgUmV2ZWFsIGV4dGVuZHMgUnVuZXN0b25lQmFzZSB7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcihvcHRzKTtcbiAgICAgICAgdmFyIG9yaWcgPSBvcHRzLm9yaWc7IC8vIGVudGlyZSA8ZGl2PiBlbGVtZW50IHRoYXQgd2lsbCBiZSByZXBsYWNlZCBieSBuZXcgSFRNTFxuICAgICAgICB0aGlzLm9yaWdFbGVtID0gb3JpZztcbiAgICAgICAgdGhpcy5kaXZpZCA9IG9yaWcuaWQ7XG4gICAgICAgIHRoaXMuZGF0YU1vZGFsID0gZmFsc2U7IC8vIGlzIGEgbW9kZWwgZGlhbG9nIHZzLiBpbmxpbmVcbiAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbSkuaXMoXCJbZGF0YS1tb2RhbF1cIikpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YU1vZGFsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJCh0aGlzLm9yaWdFbGVtKS5pcyhcIltkYXRhLWluc3RydWN0b3Jvbmx5XVwiKSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0cnVjdG9yT25seSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluc3RydWN0b3JPbmx5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb2RhbFRpdGxlID0gbnVsbDtcbiAgICAgICAgdGhpcy5zaG93dGl0bGUgPSBudWxsOyAvLyBUaXRsZSBvZiBidXR0b24gdGhhdCBzaG93cyB0aGUgY29uY2VhbGVkIGRhdGFcbiAgICAgICAgdGhpcy5oaWRldGl0bGUgPSBudWxsO1xuICAgICAgICB0aGlzLm9yaWdDb250ZW50ID0gJCh0aGlzLm9yaWdFbGVtKS5odG1sKCk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdGhpcy5hZG9wdENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuY2hlY2tGb3JUaXRsZSgpO1xuICAgICAgICB0aGlzLmdldEJ1dHRvblRpdGxlcygpO1xuICAgICAgICAvLyBEZWxheSBjcmVhdGluZyBpbnN0cnVjdG9yb25seSBidXR0b25zIHVudGlsIGxvZ2luXG4gICAgICAgIGlmICghdGhpcy5pbnN0cnVjdG9yT25seSkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTaG93QnV0dG9uKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YU1vZGFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVIaWRlQnV0dG9uKCk7IC8vIEhpZGUgYnV0dG9uIGlzIGFscmVhZHkgaW1wbGVtZW50ZWQgaW4gbW9kYWwgZGlhbG9nXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmRpY2F0ZV9jb21wb25lbnRfcmVhZHkoKTtcbiAgICB9XG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PSBHZXQgdGV4dCBmb3IgYnV0dG9ucy9tb2RhbCB0aXRsZSA9PVxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgYWRvcHRDaGlsZHJlbigpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9yaWdFbGVtLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLm9yaWdFbGVtLmNoaWxkTm9kZXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldEJ1dHRvblRpdGxlcygpIHtcbiAgICAgICAgdGhpcy5zaG93dGl0bGUgPSAkKHRoaXMub3JpZ0VsZW0pLmRhdGEoXCJzaG93dGl0bGVcIik7XG4gICAgICAgIGlmICh0aGlzLnNob3d0aXRsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNob3d0aXRsZSA9IFwiU2hvd1wiOyAvLyBkZWZhdWx0XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaW5zdHJ1Y3Rvck9ubHkpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd3RpdGxlICs9IFwiIElHXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oaWRldGl0bGUgPSAkKHRoaXMub3JpZ0VsZW0pLmRhdGEoXCJoaWRldGl0bGVcIik7XG4gICAgICAgIGlmICh0aGlzLmhpZGV0aXRsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGV0aXRsZSA9IFwiSGlkZVwiOyAvLyBkZWZhdWx0XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hlY2tGb3JUaXRsZSgpIHtcbiAgICAgICAgdGhpcy5tb2RhbFRpdGxlID0gJCh0aGlzLm9yaWdFbGVtKS5kYXRhKFwidGl0bGVcIik7XG4gICAgICAgIGlmICh0aGlzLm1vZGFsVGl0bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5tb2RhbFRpdGxlID0gXCJNZXNzYWdlIGZyb20gdGhlIGF1dGhvclwiOyAvLyBkZWZhdWx0XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgPT0gQ3JlYXRlIHNob3cvaGlkZSBidXR0b25zID09XG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgY3JlYXRlU2hvd0J1dHRvbigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyB3cmFwcGVyIGRpdlxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5pZCA9IHRoaXMuZGl2aWQ7XG4gICAgICAgIGlmICghdGhpcy5kYXRhTW9kYWwpIHtcbiAgICAgICAgICAgIHRoaXMucmV2ZWFsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy8gRGl2IHRoYXQgaXMgaGlkZGVuIHRoYXQgY29udGFpbnMgY29udGVudFxuICAgICAgICAgICAgLy8gR2V0IG9yaWdpbmFsIGNvbnRlbnQsIHB1dCBpdCBpbnNpZGUgcmV2ZWFsRGl2IGFuZCByZXBsYWNlIG9yaWdpbmFsIGRpdiB3aXRoIHJldmVhbERpdlxuICAgICAgICAgICAgLy8kKHRoaXMucmV2ZWFsRGl2KS5odG1sKHRoaXMub3JpZ0NvbnRlbnQpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXZlYWxEaXYuYXBwZW5kQ2hpbGQodGhpcy5jaGlsZHJlbltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKHRoaXMucmV2ZWFsRGl2KS5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLnJldmVhbERpdik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaW5zdHJ1Y3Rvck9ubHkpIHtcbiAgICAgICAgICAgICQodGhpcy5yZXZlYWxEaXYpLmFkZENsYXNzKFwiaWd1aWRlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2J1dHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAkKHRoaXMuc2J1dHQpLmFkZENsYXNzKFwiYnRuIHJldmVhbF9idXR0b25cIik7XG4gICAgICAgIGlmICh0aGlzLmluc3RydWN0b3JPbmx5KSB7XG4gICAgICAgICAgICAkKHRoaXMuc2J1dHQpLmFkZENsYXNzKFwiYnRuLWluZm9cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMuc2J1dHQpLmFkZENsYXNzKFwiYnRuLWRlZmF1bHRcIik7XG4gICAgICAgIH1cbiAgICAgICAgJCh0aGlzLnNidXR0KS5jc3MoXCJtYXJnaW4tYm90dG9tXCIsIFwiMTBweFwiKTtcbiAgICAgICAgdGhpcy5zYnV0dC50ZXh0Q29udGVudCA9IHRoaXMuc2hvd3RpdGxlO1xuICAgICAgICB0aGlzLnNidXR0LmlkID0gdGhpcy5kaXZpZCArIFwiX3Nob3dcIjtcbiAgICAgICAgaWYgKCF0aGlzLmRhdGFNb2RhbCkge1xuICAgICAgICAgICAgdGhpcy5zYnV0dC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNob3dJbmxpbmUoKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmhpZGUoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1vZGFsKCk7XG4gICAgICAgICAgICAkKHRoaXMuc2J1dHQpLmF0dHIoe1xuICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgIFwiZGF0YS10YXJnZXRcIjogXCIjXCIgKyB0aGlzLmRpdmlkICsgXCJfbW9kYWxcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRoaXMuc2J1dHQpO1xuICAgICAgICAkKHRoaXMub3JpZ0VsZW0pLnJlcGxhY2VXaXRoKHRoaXMuY29udGFpbmVyRGl2KTtcbiAgICB9XG4gICAgY3JlYXRlSGlkZUJ1dHRvbigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5oYnV0dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICQodGhpcy5oYnV0dCkuaGlkZSgpO1xuICAgICAgICB0aGlzLmhidXR0LnRleHRDb250ZW50ID0gdGhpcy5oaWRldGl0bGU7XG4gICAgICAgIHRoaXMuaGJ1dHQuY2xhc3NOYW1lID0gXCJidG4gYnRuLWRlZmF1bHQgcmV2ZWFsX2J1dHRvblwiO1xuICAgICAgICAkKHRoaXMuaGJ1dHQpLmNzcyhcIm1hcmdpbi1ib3R0b21cIiwgXCIxMHB4XCIpO1xuICAgICAgICB0aGlzLmhidXR0LmlkID0gdGhpcy5kaXZpZCArIFwiX2hpZGVcIjtcbiAgICAgICAgdGhpcy5oYnV0dC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuaGlkZUlubGluZSgpO1xuICAgICAgICAgICAgJCh0aGlzKS5oaWRlKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRoaXMuaGJ1dHQpO1xuICAgIH1cbiAgICBjcmVhdGVJbnN0cnVjdG9yQnV0dG9ucygpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVTaG93QnV0dG9uKCk7XG4gICAgICAgIGlmICghdGhpcy5kYXRhTW9kYWwpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSGlkZUJ1dHRvbigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qPT09PT09PT09PT09PT09PT1cbiAgICA9PT0gTW9kYWwgbG9naWMgPT09XG4gICAgPT09PT09PT09PT09PT09PT0qL1xuICAgIGNyZWF0ZU1vZGFsKCkge1xuICAgICAgICB0aGlzLm1vZGFsQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgJCh0aGlzLm1vZGFsQ29udGFpbmVyRGl2KS5hZGRDbGFzcyhcIm1vZGFsIGZhZGVcIik7XG4gICAgICAgIHRoaXMubW9kYWxDb250YWluZXJEaXYuaWQgPSB0aGlzLmRpdmlkICsgXCJfbW9kYWxcIjtcbiAgICAgICAgJCh0aGlzLm1vZGFsQ29udGFpbmVyRGl2KS5hdHRyKFwicm9sZVwiLCBcImRpYWxvZ1wiKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsQ29udGFpbmVyRGl2KTtcbiAgICAgICAgdGhpcy5tb2RhbERpYWxvZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICQodGhpcy5tb2RhbERpYWxvZ0RpdikuYWRkQ2xhc3MoXCJtb2RhbC1kaWFsb2dcIik7XG4gICAgICAgIHRoaXMubW9kYWxDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5tb2RhbERpYWxvZ0Rpdik7XG4gICAgICAgIHRoaXMubW9kYWxDb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgJCh0aGlzLm1vZGFsQ29udGVudERpdikuYWRkQ2xhc3MoXCJtb2RhbC1jb250ZW50XCIpO1xuICAgICAgICB0aGlzLm1vZGFsRGlhbG9nRGl2LmFwcGVuZENoaWxkKHRoaXMubW9kYWxDb250ZW50RGl2KTtcbiAgICAgICAgdGhpcy5tb2RhbEhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICQodGhpcy5tb2RhbEhlYWRlckRpdikuYWRkQ2xhc3MoXCJtb2RhbC1oZWFkZXJcIik7XG4gICAgICAgIHRoaXMubW9kYWxDb250ZW50RGl2LmFwcGVuZENoaWxkKHRoaXMubW9kYWxIZWFkZXJEaXYpO1xuICAgICAgICB0aGlzLm1vZGFsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy5tb2RhbEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgJCh0aGlzLm1vZGFsQnV0dG9uKS5hZGRDbGFzcyhcImNsb3NlXCIpO1xuICAgICAgICAkKHRoaXMubW9kYWxCdXR0b24pLmF0dHIoe1xuICAgICAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgICAgICAgIFwiZGF0YS1kaXNtaXNzXCI6IFwibW9kYWxcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubW9kYWxCdXR0b24uaW5uZXJIVE1MID0gXCImdGltZXNcIjtcbiAgICAgICAgdGhpcy5tb2RhbEhlYWRlckRpdi5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsQnV0dG9uKTtcbiAgICAgICAgdGhpcy5tb2RhbFRpdGxlRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICAgICAgJCh0aGlzLm1vZGFsVGl0bGVFKS5hZGRDbGFzcyhcIm1vZGFsLXRpdGxlXCIpO1xuICAgICAgICB0aGlzLm1vZGFsVGl0bGVFLmlubmVySFRNTCA9IHRoaXMubW9kYWxUaXRsZTtcbiAgICAgICAgdGhpcy5tb2RhbEhlYWRlckRpdi5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsVGl0bGVFKTtcbiAgICAgICAgdGhpcy5tb2RhbEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAkKHRoaXMubW9kYWxCb2R5KS5hZGRDbGFzcyhcIm1vZGFsLWJvZHlcIik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5tb2RhbEJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jaGlsZHJlbltpXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb2RhbENvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGhpcy5tb2RhbEJvZHkpO1xuICAgICAgICAvKnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPSdtb2RhbCBmYWRlJz5cIiArXG4gICAgICAgICAgICAgICAgICAgIFwiICAgIDxkaXYgY2xhc3M9J21vZGFsLWRpYWxvZyBjb21wYXJlLW1vZGFsJz5cIiArXG4gICAgICAgICAgICAgICAgICAgIFwiICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1jb250ZW50Jz5cIiArXG4gICAgICAgICAgICAgICAgICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtaGVhZGVyJz5cIiArXG4gICAgICAgICAgICAgICAgICAgIFwiICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nY2xvc2UnIGRhdGEtZGlzbWlzcz0nbW9kYWwnIGFyaWEtaGlkZGVuPSd0cnVlJz4mdGltZXM7PC9idXR0b24+XCIgK1xuICAgICAgICAgICAgICAgICAgICBcIiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9J21vZGFsLXRpdGxlJz5cIiArIHRoaXMubW9kYWxUaXRsZSArIFwiPC9oND5cIiArXG4gICAgICAgICAgICAgICAgICAgIFwiICAgICAgICAgICAgPC9kaXY+XCIgK1xuICAgICAgICAgICAgICAgICAgICBcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWJvZHknPlwiICtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmlnQ29udGVudCArXG4gICAgICAgICAgICAgICAgICAgIFwiICAgICAgICAgICAgPC9kaXY+XCIgK1xuICAgICAgICAgICAgICAgICAgICBcIiAgICAgICAgPC9kaXY+XCIgK1xuICAgICAgICAgICAgICAgICAgICBcIiAgICA8L2Rpdj5cIiArXG4gICAgICAgICAgICAgICAgICAgIFwiPC9kaXY+XCI7Ki9cbiAgICAgICAgLy92YXIgZWwgPSAkKHRoaXMubW9kYWxDb250YWluZXJEaXYpO1xuICAgICAgICAvL2VsLm1vZGFsKCk7XG4gICAgfVxuICAgIC8qPT09PT09PT09PT09PT09PT09XG4gICAgPT09IElubGluZSBsb2dpYyA9PT1cbiAgICA9PT09PT09PT09PT09PT09PT0qL1xuICAgIHNob3dJbmxpbmUoKSB7XG4gICAgICAgICQodGhpcy5yZXZlYWxEaXYpLnNob3coKTtcbiAgICAgICAgJCh0aGlzLmhidXR0KS5zaG93KCk7XG4gICAgICAgICQodGhpcy5yZXZlYWxEaXYpXG4gICAgICAgICAgICAuZmluZChcIi5Db2RlTWlycm9yXCIpXG4gICAgICAgICAgICAuZWFjaChmdW5jdGlvbiAoaSwgZWwpIHtcbiAgICAgICAgICAgICAgICBlbC5Db2RlTWlycm9yLnJlZnJlc2goKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBoaWRlSW5saW5lKCkge1xuICAgICAgICAkKHRoaXMucmV2ZWFsRGl2KS5oaWRlKCk7XG4gICAgICAgICQodGhpcy5zYnV0dCkuc2hvdygpO1xuICAgIH1cbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09IEZpbmQgdGhlIGN1c3RvbSBIVE1MIHRhZ3MgYW5kID09XG49PSAgICAgZXhlY3V0ZSBvdXIgY29kZSBvbiB0aGVtICAgICAgICA9PVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJChkb2N1bWVudCkuYmluZChcInJ1bmVzdG9uZTpsb2dpbi1jb21wbGV0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIltkYXRhLWNvbXBvbmVudD1yZXZlYWxdXCIpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBSZXZlYWxMaXN0W3RoaXMuaWRdID0gbmV3IFJldmVhbCh7IG9yaWc6IHRoaXMgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yIHJlbmRlcmluZyBSZXZlYWwgJHt0aGlzLmlkfWApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZUJvb2tDb25maWcuaXNJbnN0cnVjdG9yKSB7XG4gICAgICAgIGZvciAoY29uc3QgZGl2aWQgb2YgT2JqZWN0LmtleXMoUmV2ZWFsTGlzdCkpIHtcbiAgICAgICAgICAgIGlmIChSZXZlYWxMaXN0W2RpdmlkXS5pbnN0cnVjdG9yT25seSkge1xuICAgICAgICAgICAgICAgIFJldmVhbExpc3RbZGl2aWRdLmNyZWF0ZUluc3RydWN0b3JCdXR0b25zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=