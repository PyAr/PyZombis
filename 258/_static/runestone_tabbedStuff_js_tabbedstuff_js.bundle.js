(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_tabbedStuff_js_tabbedstuff_js"],{

/***/ 95766:
/*!***************************************************!*\
  !*** ./runestone/tabbedStuff/css/tabbedstuff.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 97887:
/*!*************************************************!*\
  !*** ./runestone/tabbedStuff/js/tabbedstuff.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase */ 2568);
/* harmony import */ var _css_tabbedstuff_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/tabbedstuff.css */ 95766);
/*==========================================
=======    Master tabbedstuff.js    ========
============================================
===     This file contains the JS for    ===
=== the Runestone tabbedStuff component. ===
============================================
===              Created by              ===
===           Isaiah Mayerchak           ===
===               06/15/15               ===
===             Brad Miller              ===
===               06/15/15               ===
==========================================*/


var TSList = {}; // Dictionary that contains all instances of TabbedStuff objects




// Define TabbedStuff object
class TabbedStuff extends _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(opts) {
        super(opts);
        var orig = opts.orig;
        this.origElem = orig; // entire original <div> element that will be replaced by new HTML
        this.divid = orig.id;
        this.inactive = false;
        if ($(this.origElem).is("[data-inactive]")) {
            this.inactive = true;
        }
        this.togglesList = []; // For use in Codemirror/Disqus
        this.childTabs = [];
        this.populateChildTabs();
        this.activeTab = 0; // default value--activeTab is the index of the tab that starts open
        this.findActiveTab();
        this.createTabContainer();
        this.indicate_component_ready();
    }
    /*===========================================
    == Update attributes of instance variables ==
    ==    variables according to specifications    ==
    ===========================================*/
    populateChildTabs() {
        for (var i = 0; i < this.origElem.childNodes.length; i++) {
            if ($(this.origElem.childNodes[i]).data("component") === "tab") {
                this.childTabs.push(this.origElem.childNodes[i]);
            }
        }
    }
    findActiveTab() {
        for (var i = 0; i < this.childTabs.length; i++) {
            if ($(this.childTabs[i]).is("[data-active]")) {
                this.activeTab = i;
            }
        }
    }
    /*==========================================
    == Creating/appending final HTML elements ==
    ==========================================*/
    createTabContainer() {
        this.containerDiv = document.createElement("div");
        this.containerDiv.id = this.divid;
        $(this.containerDiv).addClass(this.origElem.getAttribute("class"));
        $(this.containerDiv).attr({ role: "tabpanel" });
        this.tabsUL = document.createElement("ul");
        this.tabsUL.id = this.divid + "_tab";
        $(this.tabsUL).addClass("nav nav-tabs");
        $(this.tabsUL).attr({ role: "tablist" });
        this.tabContentDiv = document.createElement("div"); // Create tab content container that holds tab panes w/content
        $(this.tabContentDiv).addClass("tab-content");
        this.createTabs(); // create and append tabs to the <ul>
        this.containerDiv.appendChild(this.tabsUL);
        this.containerDiv.appendChild(this.tabContentDiv);
        this.addCMD(); // Adds fuctionality for Codemirror/Disqus
        $(this.origElem).replaceWith(this.containerDiv);
    }
    createTabs() {
        // Create tabs in format <li><a><span></span></a></li> to be appended to the <ul>
        for (var i = 0; i < this.childTabs.length; i++) {
            // First create tabname and tabfriendly name that has no spaces to be used for the id
            var tabListElement = document.createElement("li");
            $(tabListElement).attr({
                role: "presentation",
                "aria-controls": this.divid + "-" + i
            });
            // Using bootstrap tabs functionality
            var tabElement = document.createElement("a");
            $(tabElement).attr({
                "data-toggle": "tab",
                href: "#" + this.divid + "-" + i,
                role: "tab"
            });
            var tabTitle = document.createElement("span"); // Title of tab--what the user will see
            tabTitle.textContent = $(this.childTabs[i]).data("tabname");
            tabElement.appendChild(tabTitle);
            tabListElement.appendChild(tabElement);
            this.tabsUL.appendChild(tabListElement);
            // tabPane is what holds the contents of the tab
            var tabPaneDiv = document.createElement("div");
            tabPaneDiv.id = this.divid + "-" + i;
            $(tabPaneDiv).addClass("tab-pane");
            $(tabPaneDiv).attr({
                role: "tabpanel"
            });
            //var tabHTML = $(this.childTabs[i]).html();
            //$(tabPaneDiv).html(tabHTML);
            tabPaneDiv.appendChild(this.childTabs[i]);
            if (!this.inactive) {
                if (this.activeTab === i) {
                    $(tabListElement).addClass("active");
                    $(tabPaneDiv).addClass("active");
                }
            }
            this.togglesList.push(tabElement);
            this.tabContentDiv.appendChild(tabPaneDiv);
        }
    }
    /*===================================
    == Codemirror/Disqus functionality ==
    ===================================*/
    addCMD() {
        $(this.togglesList).on("shown.bs.tab", function(e) {
            var content_div = $(e.target.attributes.href.value);
            content_div.find(".disqus_thread_link").each(function() {
                $(this).click();
            });
            content_div.find(".CodeMirror").each(function(i, el) {
                el.CodeMirror.refresh();
            });
        });
    }
}

/*=================================
== Find the custom HTML tags and ==
==     execute our code on them        ==
=================================*/
$("load", function() {
    $("[data-component=tabbedStuff]").each(function(index) {
        TSList[this.id] = new TabbedStuff({ orig: this });
    });
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3RhYmJlZFN0dWZmL2Nzcy90YWJiZWRzdHVmZi5jc3M/MmUxMSIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3RhYmJlZFN0dWZmL2pzL3RhYmJlZHN0dWZmLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7O0FBRWIsZ0JBQWdCOztBQUUwQztBQUMxQjs7QUFFaEM7QUFDQSwwQkFBMEIsNkRBQWE7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUNBQXFDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLG1CQUFtQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0JBQWtCO0FBQy9DLDJEQUEyRDtBQUMzRDtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYiwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGFBQWE7QUFDeEQsS0FBSztBQUNMLENBQUMiLCJmaWxlIjoicnVuZXN0b25lX3RhYmJlZFN0dWZmX2pzX3RhYmJlZHN0dWZmX2pzLmJ1bmRsZS5qcz92PTY4Y2Y4OTAxN2U0YTEyNGRlMDZjIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09PT09PSAgICBNYXN0ZXIgdGFiYmVkc3R1ZmYuanMgICAgPT09PT09PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09ICAgICBUaGlzIGZpbGUgY29udGFpbnMgdGhlIEpTIGZvciAgICA9PT1cclxuPT09IHRoZSBSdW5lc3RvbmUgdGFiYmVkU3R1ZmYgY29tcG9uZW50LiA9PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09ICAgICAgICAgICAgICBDcmVhdGVkIGJ5ICAgICAgICAgICAgICA9PT1cclxuPT09ICAgICAgICAgICBJc2FpYWggTWF5ZXJjaGFrICAgICAgICAgICA9PT1cclxuPT09ICAgICAgICAgICAgICAgMDYvMTUvMTUgICAgICAgICAgICAgICA9PT1cclxuPT09ICAgICAgICAgICAgIEJyYWQgTWlsbGVyICAgICAgICAgICAgICA9PT1cclxuPT09ICAgICAgICAgICAgICAgMDYvMTUvMTUgICAgICAgICAgICAgICA9PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgVFNMaXN0ID0ge307IC8vIERpY3Rpb25hcnkgdGhhdCBjb250YWlucyBhbGwgaW5zdGFuY2VzIG9mIFRhYmJlZFN0dWZmIG9iamVjdHNcclxuXHJcbmltcG9ydCBSdW5lc3RvbmVCYXNlIGZyb20gXCIuLi8uLi9jb21tb24vanMvcnVuZXN0b25lYmFzZVwiO1xyXG5pbXBvcnQgXCIuLi9jc3MvdGFiYmVkc3R1ZmYuY3NzXCI7XHJcblxyXG4vLyBEZWZpbmUgVGFiYmVkU3R1ZmYgb2JqZWN0XHJcbmNsYXNzIFRhYmJlZFN0dWZmIGV4dGVuZHMgUnVuZXN0b25lQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XHJcbiAgICAgICAgc3VwZXIob3B0cyk7XHJcbiAgICAgICAgdmFyIG9yaWcgPSBvcHRzLm9yaWc7XHJcbiAgICAgICAgdGhpcy5vcmlnRWxlbSA9IG9yaWc7IC8vIGVudGlyZSBvcmlnaW5hbCA8ZGl2PiBlbGVtZW50IHRoYXQgd2lsbCBiZSByZXBsYWNlZCBieSBuZXcgSFRNTFxyXG4gICAgICAgIHRoaXMuZGl2aWQgPSBvcmlnLmlkO1xyXG4gICAgICAgIHRoaXMuaW5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBpZiAoJCh0aGlzLm9yaWdFbGVtKS5pcyhcIltkYXRhLWluYWN0aXZlXVwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmluYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b2dnbGVzTGlzdCA9IFtdOyAvLyBGb3IgdXNlIGluIENvZGVtaXJyb3IvRGlzcXVzXHJcbiAgICAgICAgdGhpcy5jaGlsZFRhYnMgPSBbXTtcclxuICAgICAgICB0aGlzLnBvcHVsYXRlQ2hpbGRUYWJzKCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVUYWIgPSAwOyAvLyBkZWZhdWx0IHZhbHVlLS1hY3RpdmVUYWIgaXMgdGhlIGluZGV4IG9mIHRoZSB0YWIgdGhhdCBzdGFydHMgb3BlblxyXG4gICAgICAgIHRoaXMuZmluZEFjdGl2ZVRhYigpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlVGFiQ29udGFpbmVyKCk7XHJcbiAgICAgICAgdGhpcy5pbmRpY2F0ZV9jb21wb25lbnRfcmVhZHkoKTtcclxuICAgIH1cclxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgPT0gVXBkYXRlIGF0dHJpYnV0ZXMgb2YgaW5zdGFuY2UgdmFyaWFibGVzID09XHJcbiAgICA9PSAgICB2YXJpYWJsZXMgYWNjb3JkaW5nIHRvIHNwZWNpZmljYXRpb25zICAgID09XHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgIHBvcHVsYXRlQ2hpbGRUYWJzKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vcmlnRWxlbS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMub3JpZ0VsZW0uY2hpbGROb2Rlc1tpXSkuZGF0YShcImNvbXBvbmVudFwiKSA9PT0gXCJ0YWJcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZFRhYnMucHVzaCh0aGlzLm9yaWdFbGVtLmNoaWxkTm9kZXNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmluZEFjdGl2ZVRhYigpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRUYWJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMuY2hpbGRUYWJzW2ldKS5pcyhcIltkYXRhLWFjdGl2ZV1cIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlVGFiID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICA9PSBDcmVhdGluZy9hcHBlbmRpbmcgZmluYWwgSFRNTCBlbGVtZW50cyA9PVxyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgIGNyZWF0ZVRhYkNvbnRhaW5lcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuaWQgPSB0aGlzLmRpdmlkO1xyXG4gICAgICAgICQodGhpcy5jb250YWluZXJEaXYpLmFkZENsYXNzKHRoaXMub3JpZ0VsZW0uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikpO1xyXG4gICAgICAgICQodGhpcy5jb250YWluZXJEaXYpLmF0dHIoeyByb2xlOiBcInRhYnBhbmVsXCIgfSk7XHJcbiAgICAgICAgdGhpcy50YWJzVUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgICAgdGhpcy50YWJzVUwuaWQgPSB0aGlzLmRpdmlkICsgXCJfdGFiXCI7XHJcbiAgICAgICAgJCh0aGlzLnRhYnNVTCkuYWRkQ2xhc3MoXCJuYXYgbmF2LXRhYnNcIik7XHJcbiAgICAgICAgJCh0aGlzLnRhYnNVTCkuYXR0cih7IHJvbGU6IFwidGFibGlzdFwiIH0pO1xyXG4gICAgICAgIHRoaXMudGFiQ29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vIENyZWF0ZSB0YWIgY29udGVudCBjb250YWluZXIgdGhhdCBob2xkcyB0YWIgcGFuZXMgdy9jb250ZW50XHJcbiAgICAgICAgJCh0aGlzLnRhYkNvbnRlbnREaXYpLmFkZENsYXNzKFwidGFiLWNvbnRlbnRcIik7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVUYWJzKCk7IC8vIGNyZWF0ZSBhbmQgYXBwZW5kIHRhYnMgdG8gdGhlIDx1bD5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLnRhYnNVTCk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy50YWJDb250ZW50RGl2KTtcclxuICAgICAgICB0aGlzLmFkZENNRCgpOyAvLyBBZGRzIGZ1Y3Rpb25hbGl0eSBmb3IgQ29kZW1pcnJvci9EaXNxdXNcclxuICAgICAgICAkKHRoaXMub3JpZ0VsZW0pLnJlcGxhY2VXaXRoKHRoaXMuY29udGFpbmVyRGl2KTtcclxuICAgIH1cclxuICAgIGNyZWF0ZVRhYnMoKSB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIHRhYnMgaW4gZm9ybWF0IDxsaT48YT48c3Bhbj48L3NwYW4+PC9hPjwvbGk+IHRvIGJlIGFwcGVuZGVkIHRvIHRoZSA8dWw+XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkVGFicy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvLyBGaXJzdCBjcmVhdGUgdGFibmFtZSBhbmQgdGFiZnJpZW5kbHkgbmFtZSB0aGF0IGhhcyBubyBzcGFjZXMgdG8gYmUgdXNlZCBmb3IgdGhlIGlkXHJcbiAgICAgICAgICAgIHZhciB0YWJMaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICAgICAgJCh0YWJMaXN0RWxlbWVudCkuYXR0cih7XHJcbiAgICAgICAgICAgICAgICByb2xlOiBcInByZXNlbnRhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IHRoaXMuZGl2aWQgKyBcIi1cIiArIGlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIFVzaW5nIGJvb3RzdHJhcCB0YWJzIGZ1bmN0aW9uYWxpdHlcclxuICAgICAgICAgICAgdmFyIHRhYkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICAgICAgJCh0YWJFbGVtZW50KS5hdHRyKHtcclxuICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0YWJcIixcclxuICAgICAgICAgICAgICAgIGhyZWY6IFwiI1wiICsgdGhpcy5kaXZpZCArIFwiLVwiICsgaSxcclxuICAgICAgICAgICAgICAgIHJvbGU6IFwidGFiXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciB0YWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpOyAvLyBUaXRsZSBvZiB0YWItLXdoYXQgdGhlIHVzZXIgd2lsbCBzZWVcclxuICAgICAgICAgICAgdGFiVGl0bGUudGV4dENvbnRlbnQgPSAkKHRoaXMuY2hpbGRUYWJzW2ldKS5kYXRhKFwidGFibmFtZVwiKTtcclxuICAgICAgICAgICAgdGFiRWxlbWVudC5hcHBlbmRDaGlsZCh0YWJUaXRsZSk7XHJcbiAgICAgICAgICAgIHRhYkxpc3RFbGVtZW50LmFwcGVuZENoaWxkKHRhYkVsZW1lbnQpO1xyXG4gICAgICAgICAgICB0aGlzLnRhYnNVTC5hcHBlbmRDaGlsZCh0YWJMaXN0RWxlbWVudCk7XHJcbiAgICAgICAgICAgIC8vIHRhYlBhbmUgaXMgd2hhdCBob2xkcyB0aGUgY29udGVudHMgb2YgdGhlIHRhYlxyXG4gICAgICAgICAgICB2YXIgdGFiUGFuZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHRhYlBhbmVEaXYuaWQgPSB0aGlzLmRpdmlkICsgXCItXCIgKyBpO1xyXG4gICAgICAgICAgICAkKHRhYlBhbmVEaXYpLmFkZENsYXNzKFwidGFiLXBhbmVcIik7XHJcbiAgICAgICAgICAgICQodGFiUGFuZURpdikuYXR0cih7XHJcbiAgICAgICAgICAgICAgICByb2xlOiBcInRhYnBhbmVsXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vdmFyIHRhYkhUTUwgPSAkKHRoaXMuY2hpbGRUYWJzW2ldKS5odG1sKCk7XHJcbiAgICAgICAgICAgIC8vJCh0YWJQYW5lRGl2KS5odG1sKHRhYkhUTUwpO1xyXG4gICAgICAgICAgICB0YWJQYW5lRGl2LmFwcGVuZENoaWxkKHRoaXMuY2hpbGRUYWJzW2ldKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmluYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVUYWIgPT09IGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRhYkxpc3RFbGVtZW50KS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHRhYlBhbmVEaXYpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlc0xpc3QucHVzaCh0YWJFbGVtZW50KTtcclxuICAgICAgICAgICAgdGhpcy50YWJDb250ZW50RGl2LmFwcGVuZENoaWxkKHRhYlBhbmVEaXYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgID09IENvZGVtaXJyb3IvRGlzcXVzIGZ1bmN0aW9uYWxpdHkgPT1cclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgIGFkZENNRCgpIHtcclxuICAgICAgICAkKHRoaXMudG9nZ2xlc0xpc3QpLm9uKFwic2hvd24uYnMudGFiXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIGNvbnRlbnRfZGl2ID0gJChlLnRhcmdldC5hdHRyaWJ1dGVzLmhyZWYudmFsdWUpO1xyXG4gICAgICAgICAgICBjb250ZW50X2Rpdi5maW5kKFwiLmRpc3F1c190aHJlYWRfbGlua1wiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jbGljaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29udGVudF9kaXYuZmluZChcIi5Db2RlTWlycm9yXCIpLmVhY2goZnVuY3Rpb24oaSwgZWwpIHtcclxuICAgICAgICAgICAgICAgIGVsLkNvZGVNaXJyb3IucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT0gRmluZCB0aGUgY3VzdG9tIEhUTUwgdGFncyBhbmQgPT1cclxuPT0gICAgIGV4ZWN1dGUgb3VyIGNvZGUgb24gdGhlbSAgICAgICAgPT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuJChcImxvYWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiW2RhdGEtY29tcG9uZW50PXRhYmJlZFN0dWZmXVwiKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgVFNMaXN0W3RoaXMuaWRdID0gbmV3IFRhYmJlZFN0dWZmKHsgb3JpZzogdGhpcyB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
