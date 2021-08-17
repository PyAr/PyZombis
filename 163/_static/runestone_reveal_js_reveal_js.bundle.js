(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_reveal_js_reveal_js"],{

/***/ 42573:
/*!*****************************************!*\
  !*** ./runestone/reveal/css/reveal.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 12632:
/*!***************************************!*\
  !*** ./runestone/reveal/js/reveal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase */ 2568);
/* harmony import */ var _css_reveal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/reveal.css */ 42573);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3JldmVhbC9jc3MvcmV2ZWFsLmNzcz80OTQ0Iiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvcmV2ZWFsL2pzL3JldmVhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7O0FBRWIsb0JBQW9COztBQUVzQztBQUMvQjs7QUFFM0I7QUFDQSxxQkFBcUIsNkRBQWE7QUFDbEM7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUNBQXFDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQSwyQkFBMkIsMEJBQTBCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwQkFBMEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3SEFBd0g7QUFDeEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxhQUFhO0FBQzNELFNBQVM7QUFDVCxrREFBa0QsUUFBUTtBQUMxRDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6InJ1bmVzdG9uZV9yZXZlYWxfanNfcmV2ZWFsX2pzLmJ1bmRsZS5qcz92PTFmYzkwZDhmOWM4NjIyYzYyYTg5Iiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09PT09PSAgICAgIE1hc3RlciByZXZlYWwuanMgICAgICAgPT09PT09PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09ICAgICBUaGlzIGZpbGUgY29udGFpbnMgdGhlIEpTIGZvciAgICA9PT1cclxuPT09ICAgICB0aGUgUnVuZXN0b25lIHJldmFsIGNvbXBvbmVudC4gICA9PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09ICAgICAgICAgICAgICBDcmVhdGVkIGJ5ICAgICAgICAgICAgICA9PT1cclxuPT09ICAgICAgICAgICBJc2FpYWggTWF5ZXJjaGFrICAgICAgICAgICA9PT1cclxuPT09ICAgICAgICAgICAgICAgMDYvMTIvMTUgICAgICAgICAgICAgICA9PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgUmV2ZWFsTGlzdCA9IHt9OyAvLyBEaWN0aW9uYXJ5IHRoYXQgY29udGFpbnMgYWxsIGluc3RhbmNlcyBvZiBSZXZlYWwgb2JqZWN0c1xyXG5cclxuaW1wb3J0IFJ1bmVzdG9uZUJhc2UgZnJvbSBcIi4uLy4uL2NvbW1vbi9qcy9ydW5lc3RvbmViYXNlXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9yZXZlYWwuY3NzXCI7XHJcblxyXG4vLyBEZWZpbmUgUmV2ZWFsIG9iamVjdFxyXG5jbGFzcyBSZXZlYWwgZXh0ZW5kcyBSdW5lc3RvbmVCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcclxuICAgICAgICBzdXBlcihvcHRzKTtcclxuICAgICAgICB2YXIgb3JpZyA9IG9wdHMub3JpZzsgLy8gZW50aXJlIDxkaXY+IGVsZW1lbnQgdGhhdCB3aWxsIGJlIHJlcGxhY2VkIGJ5IG5ldyBIVE1MXHJcbiAgICAgICAgdGhpcy5vcmlnRWxlbSA9IG9yaWc7XHJcbiAgICAgICAgdGhpcy5kaXZpZCA9IG9yaWcuaWQ7XHJcbiAgICAgICAgdGhpcy5kYXRhTW9kYWwgPSBmYWxzZTsgLy8gaXMgYSBtb2RlbCBkaWFsb2cgdnMuIGlubGluZVxyXG4gICAgICAgIGlmICgkKHRoaXMub3JpZ0VsZW0pLmlzKFwiW2RhdGEtbW9kYWxdXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YU1vZGFsID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbSkuaXMoXCJbZGF0YS1pbnN0cnVjdG9yb25seV1cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0cnVjdG9yT25seSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0cnVjdG9yT25seSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vZGFsVGl0bGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2hvd3RpdGxlID0gbnVsbDsgLy8gVGl0bGUgb2YgYnV0dG9uIHRoYXQgc2hvd3MgdGhlIGNvbmNlYWxlZCBkYXRhXHJcbiAgICAgICAgdGhpcy5oaWRldGl0bGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub3JpZ0NvbnRlbnQgPSAkKHRoaXMub3JpZ0VsZW0pLmh0bWwoKTtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XHJcbiAgICAgICAgdGhpcy5hZG9wdENoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5jaGVja0ZvclRpdGxlKCk7XHJcbiAgICAgICAgdGhpcy5nZXRCdXR0b25UaXRsZXMoKTtcclxuICAgICAgICAvLyBEZWxheSBjcmVhdGluZyBpbnN0cnVjdG9yb25seSBidXR0b25zIHVudGlsIGxvZ2luXHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RydWN0b3JPbmx5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU2hvd0J1dHRvbigpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YU1vZGFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUhpZGVCdXR0b24oKTsgLy8gSGlkZSBidXR0b24gaXMgYWxyZWFkeSBpbXBsZW1lbnRlZCBpbiBtb2RhbCBkaWFsb2dcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluZGljYXRlX2NvbXBvbmVudF9yZWFkeSgpO1xyXG4gICAgfVxyXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgID09IEdldCB0ZXh0IGZvciBidXR0b25zL21vZGFsIHRpdGxlID09XHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgYWRvcHRDaGlsZHJlbigpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3JpZ0VsZW0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5vcmlnRWxlbS5jaGlsZE5vZGVzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRCdXR0b25UaXRsZXMoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93dGl0bGUgPSAkKHRoaXMub3JpZ0VsZW0pLmRhdGEoXCJzaG93dGl0bGVcIik7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd3RpdGxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93dGl0bGUgPSBcIlNob3dcIjsgLy8gZGVmYXVsdFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pbnN0cnVjdG9yT25seSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3d0aXRsZSArPSBcIiBJR1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhpZGV0aXRsZSA9ICQodGhpcy5vcmlnRWxlbSkuZGF0YShcImhpZGV0aXRsZVwiKTtcclxuICAgICAgICBpZiAodGhpcy5oaWRldGl0bGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGV0aXRsZSA9IFwiSGlkZVwiOyAvLyBkZWZhdWx0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hlY2tGb3JUaXRsZSgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsVGl0bGUgPSAkKHRoaXMub3JpZ0VsZW0pLmRhdGEoXCJ0aXRsZVwiKTtcclxuICAgICAgICBpZiAodGhpcy5tb2RhbFRpdGxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbFRpdGxlID0gXCJNZXNzYWdlIGZyb20gdGhlIGF1dGhvclwiOyAvLyBkZWZhdWx0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICA9PSBDcmVhdGUgc2hvdy9oaWRlIGJ1dHRvbnMgPT1cclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgY3JlYXRlU2hvd0J1dHRvbigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy8gd3JhcHBlciBkaXZcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5pZCA9IHRoaXMuZGl2aWQ7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRhdGFNb2RhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnJldmVhbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vIERpdiB0aGF0IGlzIGhpZGRlbiB0aGF0IGNvbnRhaW5zIGNvbnRlbnRcclxuICAgICAgICAgICAgLy8gR2V0IG9yaWdpbmFsIGNvbnRlbnQsIHB1dCBpdCBpbnNpZGUgcmV2ZWFsRGl2IGFuZCByZXBsYWNlIG9yaWdpbmFsIGRpdiB3aXRoIHJldmVhbERpdlxyXG4gICAgICAgICAgICAvLyQodGhpcy5yZXZlYWxEaXYpLmh0bWwodGhpcy5vcmlnQ29udGVudCk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXZlYWxEaXYuYXBwZW5kQ2hpbGQodGhpcy5jaGlsZHJlbltpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCh0aGlzLnJldmVhbERpdikuaGlkZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLnJldmVhbERpdik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmluc3RydWN0b3JPbmx5KSB7XHJcbiAgICAgICAgICAgICQodGhpcy5yZXZlYWxEaXYpLmFkZENsYXNzKFwiaWd1aWRlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNidXR0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAkKHRoaXMuc2J1dHQpLmFkZENsYXNzKFwiYnRuIHJldmVhbF9idXR0b25cIik7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdHJ1Y3Rvck9ubHkpIHtcclxuICAgICAgICAgICAgJCh0aGlzLnNidXR0KS5hZGRDbGFzcyhcImJ0bi1pbmZvXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcy5zYnV0dCkuYWRkQ2xhc3MoXCJidG4tZGVmYXVsdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCh0aGlzLnNidXR0KS5jc3MoXCJtYXJnaW4tYm90dG9tXCIsIFwiMTBweFwiKTtcclxuICAgICAgICB0aGlzLnNidXR0LnRleHRDb250ZW50ID0gdGhpcy5zaG93dGl0bGU7XHJcbiAgICAgICAgdGhpcy5zYnV0dC5pZCA9IHRoaXMuZGl2aWQgKyBcIl9zaG93XCI7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRhdGFNb2RhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNidXR0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zaG93SW5saW5lKCk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmhpZGUoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1vZGFsKCk7XHJcbiAgICAgICAgICAgICQodGhpcy5zYnV0dCkuYXR0cih7XHJcbiAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwibW9kYWxcIixcclxuICAgICAgICAgICAgICAgIFwiZGF0YS10YXJnZXRcIjogXCIjXCIgKyB0aGlzLmRpdmlkICsgXCJfbW9kYWxcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRoaXMuc2J1dHQpO1xyXG4gICAgICAgICQodGhpcy5vcmlnRWxlbSkucmVwbGFjZVdpdGgodGhpcy5jb250YWluZXJEaXYpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlSGlkZUJ1dHRvbigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaGJ1dHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICQodGhpcy5oYnV0dCkuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuaGJ1dHQudGV4dENvbnRlbnQgPSB0aGlzLmhpZGV0aXRsZTtcclxuICAgICAgICB0aGlzLmhidXR0LmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1kZWZhdWx0IHJldmVhbF9idXR0b25cIjtcclxuICAgICAgICAkKHRoaXMuaGJ1dHQpLmNzcyhcIm1hcmdpbi1ib3R0b21cIiwgXCIxMHB4XCIpO1xyXG4gICAgICAgIHRoaXMuaGJ1dHQuaWQgPSB0aGlzLmRpdmlkICsgXCJfaGlkZVwiO1xyXG4gICAgICAgIHRoaXMuaGJ1dHQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuaGlkZUlubGluZSgpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmhpZGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRoaXMuaGJ1dHQpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlSW5zdHJ1Y3RvckJ1dHRvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVTaG93QnV0dG9uKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRhdGFNb2RhbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUhpZGVCdXR0b24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKj09PT09PT09PT09PT09PT09XHJcbiAgICA9PT0gTW9kYWwgbG9naWMgPT09XHJcbiAgICA9PT09PT09PT09PT09PT09PSovXHJcbiAgICBjcmVhdGVNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAkKHRoaXMubW9kYWxDb250YWluZXJEaXYpLmFkZENsYXNzKFwibW9kYWwgZmFkZVwiKTtcclxuICAgICAgICB0aGlzLm1vZGFsQ29udGFpbmVyRGl2LmlkID0gdGhpcy5kaXZpZCArIFwiX21vZGFsXCI7XHJcbiAgICAgICAgJCh0aGlzLm1vZGFsQ29udGFpbmVyRGl2KS5hdHRyKFwicm9sZVwiLCBcImRpYWxvZ1wiKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubW9kYWxDb250YWluZXJEaXYpO1xyXG4gICAgICAgIHRoaXMubW9kYWxEaWFsb2dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICQodGhpcy5tb2RhbERpYWxvZ0RpdikuYWRkQ2xhc3MoXCJtb2RhbC1kaWFsb2dcIik7XHJcbiAgICAgICAgdGhpcy5tb2RhbENvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsRGlhbG9nRGl2KTtcclxuICAgICAgICB0aGlzLm1vZGFsQ29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgJCh0aGlzLm1vZGFsQ29udGVudERpdikuYWRkQ2xhc3MoXCJtb2RhbC1jb250ZW50XCIpO1xyXG4gICAgICAgIHRoaXMubW9kYWxEaWFsb2dEaXYuYXBwZW5kQ2hpbGQodGhpcy5tb2RhbENvbnRlbnREaXYpO1xyXG4gICAgICAgIHRoaXMubW9kYWxIZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICQodGhpcy5tb2RhbEhlYWRlckRpdikuYWRkQ2xhc3MoXCJtb2RhbC1oZWFkZXJcIik7XHJcbiAgICAgICAgdGhpcy5tb2RhbENvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGhpcy5tb2RhbEhlYWRlckRpdik7XHJcbiAgICAgICAgdGhpcy5tb2RhbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgdGhpcy5tb2RhbEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcclxuICAgICAgICAkKHRoaXMubW9kYWxCdXR0b24pLmFkZENsYXNzKFwiY2xvc2VcIik7XHJcbiAgICAgICAgJCh0aGlzLm1vZGFsQnV0dG9uKS5hdHRyKHtcclxuICAgICAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcclxuICAgICAgICAgICAgXCJkYXRhLWRpc21pc3NcIjogXCJtb2RhbFwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubW9kYWxCdXR0b24uaW5uZXJIVE1MID0gXCImdGltZXNcIjtcclxuICAgICAgICB0aGlzLm1vZGFsSGVhZGVyRGl2LmFwcGVuZENoaWxkKHRoaXMubW9kYWxCdXR0b24pO1xyXG4gICAgICAgIHRoaXMubW9kYWxUaXRsZUUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICAgICAgJCh0aGlzLm1vZGFsVGl0bGVFKS5hZGRDbGFzcyhcIm1vZGFsLXRpdGxlXCIpO1xyXG4gICAgICAgIHRoaXMubW9kYWxUaXRsZUUuaW5uZXJIVE1MID0gdGhpcy5tb2RhbFRpdGxlO1xyXG4gICAgICAgIHRoaXMubW9kYWxIZWFkZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5tb2RhbFRpdGxlRSk7XHJcbiAgICAgICAgdGhpcy5tb2RhbEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICQodGhpcy5tb2RhbEJvZHkpLmFkZENsYXNzKFwibW9kYWwtYm9keVwiKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbEJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jaGlsZHJlbltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW9kYWxDb250ZW50RGl2LmFwcGVuZENoaWxkKHRoaXMubW9kYWxCb2R5KTtcclxuICAgICAgICAvKnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPSdtb2RhbCBmYWRlJz5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgICAgPGRpdiBjbGFzcz0nbW9kYWwtZGlhbG9nIGNvbXBhcmUtbW9kYWwnPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBcIiAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtY29udGVudCc+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtaGVhZGVyJz5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdjbG9zZScgZGF0YS1kaXNtaXNzPSdtb2RhbCcgYXJpYS1oaWRkZW49J3RydWUnPiZ0aW1lczs8L2J1dHRvbj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgICAgICAgICAgICAgICAgPGg0IGNsYXNzPSdtb2RhbC10aXRsZSc+XCIgKyB0aGlzLm1vZGFsVGl0bGUgKyBcIjwvaDQ+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiICAgICAgICAgICAgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtYm9keSc+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JpZ0NvbnRlbnQgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiICAgICAgICAgICAgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiICAgICAgICA8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgICAgPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPC9kaXY+XCI7Ki9cclxuICAgICAgICAvL3ZhciBlbCA9ICQodGhpcy5tb2RhbENvbnRhaW5lckRpdik7XHJcbiAgICAgICAgLy9lbC5tb2RhbCgpO1xyXG4gICAgfVxyXG4gICAgLyo9PT09PT09PT09PT09PT09PT1cclxuICAgID09PSBJbmxpbmUgbG9naWMgPT09XHJcbiAgICA9PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgc2hvd0lubGluZSgpIHtcclxuICAgICAgICAkKHRoaXMucmV2ZWFsRGl2KS5zaG93KCk7XHJcbiAgICAgICAgJCh0aGlzLmhidXR0KS5zaG93KCk7XHJcbiAgICAgICAgJCh0aGlzLnJldmVhbERpdilcclxuICAgICAgICAgICAgLmZpbmQoXCIuQ29kZU1pcnJvclwiKVxyXG4gICAgICAgICAgICAuZWFjaChmdW5jdGlvbiAoaSwgZWwpIHtcclxuICAgICAgICAgICAgICAgIGVsLkNvZGVNaXJyb3IucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGhpZGVJbmxpbmUoKSB7XHJcbiAgICAgICAgJCh0aGlzLnJldmVhbERpdikuaGlkZSgpO1xyXG4gICAgICAgICQodGhpcy5zYnV0dCkuc2hvdygpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PSBGaW5kIHRoZSBjdXN0b20gSFRNTCB0YWdzIGFuZCA9PVxyXG49PSAgICAgZXhlY3V0ZSBvdXIgY29kZSBvbiB0aGVtICAgICAgICA9PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuJChkb2N1bWVudCkuYmluZChcInJ1bmVzdG9uZTpsb2dpbi1jb21wbGV0ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiW2RhdGEtY29tcG9uZW50PXJldmVhbF1cIikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBSZXZlYWxMaXN0W3RoaXMuaWRdID0gbmV3IFJldmVhbCh7IG9yaWc6IHRoaXMgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciByZW5kZXJpbmcgUmV2ZWFsICR7dGhpcy5pZH1gKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZUJvb2tDb25maWcuaXNJbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBkaXZpZCBvZiBPYmplY3Qua2V5cyhSZXZlYWxMaXN0KSkge1xyXG4gICAgICAgICAgICBpZiAoUmV2ZWFsTGlzdFtkaXZpZF0uaW5zdHJ1Y3Rvck9ubHkpIHtcclxuICAgICAgICAgICAgICAgIFJldmVhbExpc3RbZGl2aWRdLmNyZWF0ZUluc3RydWN0b3JCdXR0b25zKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
