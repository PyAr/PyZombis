(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_datafile_js_datafile_js"],{

/***/ 83513:
/*!*********************************************!*\
  !*** ./runestone/datafile/css/datafile.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 55789:
/*!*******************************************!*\
  !*** ./runestone/datafile/js/datafile.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase */ 2568);
/* harmony import */ var _css_datafile_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/datafile.css */ 83513);
/*==========================================
=======     Master datafile.js      ========
============================================
===     This file contains the JS for    ===
===   the Runestone Datafile component.  ===
============================================
===              Created by              ===
===           Isaiah Mayerchak           ===
===                6/8/15                ===
==========================================*/





var dfList = {}; // Dictionary that contains all instances of Datafile objects

class DataFile extends _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(opts) {
        super(opts);
        var orig = opts.orig; // entire <pre> element that will be replaced by new HTML
        this.origElem = orig;
        this.divid = orig.id;
        this.dataEdit = false;
        this.isImage = $(orig).data("isimage");
        if ($(this.origElem).data("edit") === true) {
            this.dataEdit = true;
        }
        this.displayClass = "block"; // Users can specify the non-edit component to be hidden--default is not hidden
        if ($(this.origElem).is("[data-hidden]")) {
            this.displayClass = "none";
        }
        // Users can specify numbers of rows/columns when editing is true
        this.numberOfRows = $(this.origElem).data("rows");
        this.numberOfCols = $(this.origElem).data("cols");
        if (!this.isImage) {
            if (this.dataEdit) {
                this.createTextArea();
            } else {
                this.createPre();
            }
        }
        this.indicate_component_ready();
    }
    /*=====================================
    == Create either <pre> or <textarea> ==
    ==  depending on if editing is true  ==
    ==================================*/
    createPre() {
        this.containerDiv = document.createElement("pre");
        this.containerDiv.id = this.divid;
        $(this.containerDiv).attr({ style: "display: " + this.displayClass });
        this.containerDiv.innerHTML = this.origElem.innerHTML;
        $(this.origElem).replaceWith(this.containerDiv);
    }
    createTextArea() {
        this.containerDiv = document.createElement("textarea");
        this.containerDiv.id = this.divid;
        this.containerDiv.rows = this.numberOfRows;
        this.containerDiv.cols = this.numberOfCols;
        this.containerDiv.innerHTML = this.origElem.innerHTML;
        $(this.containerDiv).addClass("datafiletextfield");
        $(this.origElem).replaceWith(this.containerDiv);
    }
}

/*=================================
== Find the custom HTML tags and ==
==   execute our code on them    ==
=================================*/
$(function () {
    $("[data-component=datafile]").each(function (index) {
        try {
            dfList[this.id] = new DataFile({ orig: this });
        } catch (err) {
            console.log(`Error rendering DataFile ${this.id}`);
        }
    });
});

if (typeof window.component_factory === "undefined") {
    window.component_factory = {};
}

window.component_factory.datafile = function (opts) {
    return new DataFile(opts);
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2RhdGFmaWxlL2Nzcy9kYXRhZmlsZS5jc3M/YWIyZSIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2RhdGFmaWxlL2pzL2RhdGFmaWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYTs7QUFFNkM7QUFDN0I7O0FBRTdCLGdCQUFnQjs7QUFFaEIsdUJBQXVCLDZEQUFhO0FBQ3BDO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx5Q0FBeUM7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsYUFBYTtBQUN6RCxTQUFTO0FBQ1Qsb0RBQW9ELFFBQVE7QUFDNUQ7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6InJ1bmVzdG9uZV9kYXRhZmlsZV9qc19kYXRhZmlsZV9qcy5idW5kbGUuanM/dj04ZWY1MTg3M2QxMjgwM2UxZDViZCIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PT09PT0gICAgIE1hc3RlciBkYXRhZmlsZS5qcyAgICAgID09PT09PT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PSAgICAgVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBKUyBmb3IgICAgPT09XHJcbj09PSAgIHRoZSBSdW5lc3RvbmUgRGF0YWZpbGUgY29tcG9uZW50LiAgPT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PSAgICAgICAgICAgICAgQ3JlYXRlZCBieSAgICAgICAgICAgICAgPT09XHJcbj09PSAgICAgICAgICAgSXNhaWFoIE1heWVyY2hhayAgICAgICAgICAgPT09XHJcbj09PSAgICAgICAgICAgICAgICA2LzgvMTUgICAgICAgICAgICAgICAgPT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IFJ1bmVzdG9uZUJhc2UgZnJvbSBcIi4uLy4uL2NvbW1vbi9qcy9ydW5lc3RvbmViYXNlXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9kYXRhZmlsZS5jc3NcIjtcclxuXHJcbnZhciBkZkxpc3QgPSB7fTsgLy8gRGljdGlvbmFyeSB0aGF0IGNvbnRhaW5zIGFsbCBpbnN0YW5jZXMgb2YgRGF0YWZpbGUgb2JqZWN0c1xyXG5cclxuY2xhc3MgRGF0YUZpbGUgZXh0ZW5kcyBSdW5lc3RvbmVCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcclxuICAgICAgICBzdXBlcihvcHRzKTtcclxuICAgICAgICB2YXIgb3JpZyA9IG9wdHMub3JpZzsgLy8gZW50aXJlIDxwcmU+IGVsZW1lbnQgdGhhdCB3aWxsIGJlIHJlcGxhY2VkIGJ5IG5ldyBIVE1MXHJcbiAgICAgICAgdGhpcy5vcmlnRWxlbSA9IG9yaWc7XHJcbiAgICAgICAgdGhpcy5kaXZpZCA9IG9yaWcuaWQ7XHJcbiAgICAgICAgdGhpcy5kYXRhRWRpdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNJbWFnZSA9ICQob3JpZykuZGF0YShcImlzaW1hZ2VcIik7XHJcbiAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbSkuZGF0YShcImVkaXRcIikgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhRWRpdCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGlzcGxheUNsYXNzID0gXCJibG9ja1wiOyAvLyBVc2VycyBjYW4gc3BlY2lmeSB0aGUgbm9uLWVkaXQgY29tcG9uZW50IHRvIGJlIGhpZGRlbi0tZGVmYXVsdCBpcyBub3QgaGlkZGVuXHJcbiAgICAgICAgaWYgKCQodGhpcy5vcmlnRWxlbSkuaXMoXCJbZGF0YS1oaWRkZW5dXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUNsYXNzID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFVzZXJzIGNhbiBzcGVjaWZ5IG51bWJlcnMgb2Ygcm93cy9jb2x1bW5zIHdoZW4gZWRpdGluZyBpcyB0cnVlXHJcbiAgICAgICAgdGhpcy5udW1iZXJPZlJvd3MgPSAkKHRoaXMub3JpZ0VsZW0pLmRhdGEoXCJyb3dzXCIpO1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZDb2xzID0gJCh0aGlzLm9yaWdFbGVtKS5kYXRhKFwiY29sc1wiKTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNJbWFnZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhRWRpdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVUZXh0QXJlYSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQcmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluZGljYXRlX2NvbXBvbmVudF9yZWFkeSgpO1xyXG4gICAgfVxyXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICA9PSBDcmVhdGUgZWl0aGVyIDxwcmU+IG9yIDx0ZXh0YXJlYT4gPT1cclxuICAgID09ICBkZXBlbmRpbmcgb24gaWYgZWRpdGluZyBpcyB0cnVlICA9PVxyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICBjcmVhdGVQcmUoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJlXCIpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmlkID0gdGhpcy5kaXZpZDtcclxuICAgICAgICAkKHRoaXMuY29udGFpbmVyRGl2KS5hdHRyKHsgc3R5bGU6IFwiZGlzcGxheTogXCIgKyB0aGlzLmRpc3BsYXlDbGFzcyB9KTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5pbm5lckhUTUwgPSB0aGlzLm9yaWdFbGVtLmlubmVySFRNTDtcclxuICAgICAgICAkKHRoaXMub3JpZ0VsZW0pLnJlcGxhY2VXaXRoKHRoaXMuY29udGFpbmVyRGl2KTtcclxuICAgIH1cclxuICAgIGNyZWF0ZVRleHRBcmVhKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmlkID0gdGhpcy5kaXZpZDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5yb3dzID0gdGhpcy5udW1iZXJPZlJvd3M7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuY29scyA9IHRoaXMubnVtYmVyT2ZDb2xzO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmlubmVySFRNTCA9IHRoaXMub3JpZ0VsZW0uaW5uZXJIVE1MO1xyXG4gICAgICAgICQodGhpcy5jb250YWluZXJEaXYpLmFkZENsYXNzKFwiZGF0YWZpbGV0ZXh0ZmllbGRcIik7XHJcbiAgICAgICAgJCh0aGlzLm9yaWdFbGVtKS5yZXBsYWNlV2l0aCh0aGlzLmNvbnRhaW5lckRpdik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09IEZpbmQgdGhlIGN1c3RvbSBIVE1MIHRhZ3MgYW5kID09XHJcbj09ICAgZXhlY3V0ZSBvdXIgY29kZSBvbiB0aGVtICAgID09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIltkYXRhLWNvbXBvbmVudD1kYXRhZmlsZV1cIikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBkZkxpc3RbdGhpcy5pZF0gPSBuZXcgRGF0YUZpbGUoeyBvcmlnOiB0aGlzIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3IgcmVuZGVyaW5nIERhdGFGaWxlICR7dGhpcy5pZH1gKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgd2luZG93LmNvbXBvbmVudF9mYWN0b3J5ID0ge307XHJcbn1cclxuXHJcbndpbmRvdy5jb21wb25lbnRfZmFjdG9yeS5kYXRhZmlsZSA9IGZ1bmN0aW9uIChvcHRzKSB7XHJcbiAgICByZXR1cm4gbmV3IERhdGFGaWxlKG9wdHMpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
