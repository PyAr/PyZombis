(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_khanex_js_khanex_js"],{

/***/ 13435:
/*!***************************************!*\
  !*** ./runestone/khanex/js/khanex.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "khanexList": () => (/* binding */ khanexList),
/* harmony export */   "default": () => (/* binding */ Khanex)
/* harmony export */ });
/* harmony import */ var _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase.js */ 2568);
/*
__author__ = Ralph Morelli
__date__ = 5/4/2021  
*/

/* **********
  This script renders the khanex HTML code and sets up functions
  to process the exercise when the user clicks on the khanex 'Check Answer'
  button.  

  It gets the data it needs from the Khanex node created by khanex.py
  during the runestone build step.

  NOTE: An entry for khanex.js script must be added to the webpack.config.js.
  ************** */





var DEBUG = false;

var khanexList = {};

class Khanex extends _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(opts) {
        super(opts);
        var orig = opts.orig; // Looks something like: {"orig":{"jQuery351095558298548049562":{"question_label":"1.1.2"}}}
        if (DEBUG) console.log("DEBUG: Khanex constructor, opts=" + JSON.stringify(opts));
        this.origElem = orig;
        this.divid = orig.id;
        this.resultsViewer = $(orig).data("results");
        this.getIFrameAndQuizname();
        this.renderKhanex(); //generates HTML
        // Checks localStorage to see if this khanex has already been completed by this user.
        //        this.checkKhanexStorage();
        this.caption = "Khanex";
        this.addCaption("runestone");
    }

    // The main content of the khanex node is the iframe. 
    getIFrameAndQuizname() {
        var html = $(this.origElem).html();
        var p1 = html.search('<iframe');
        var p2 = html.search('</iframe>');
        this.iframe = html.slice(p1, p2 + 8);
        if (DEBUG) console.log("DEBUG: getQuestionText() html = " + html);
        if (DEBUG) console.log("DEBUG: getQuestionText() iframe = " + this.iframe);
        p1 = html.search('khanex/qs/');
        p2 = html.search('.html');
        this.quizname = html.slice(p1 + 10, p2);  // Grab the quizname from iframe
        if (DEBUG) console.log("DEBUG quizname= ", this.quizname);
    }

    //generates the HTML that the user interacts with
    renderKhanex() {
        var _this = this;
        if (DEBUG) console.log("--------------------DEBUG: renderKhanex()");
        this.containerDiv = document.createElement("div");
        this.containerDiv.id = this.divid;
        $(this.containerDiv).html(this.iframe);
        $(this.origElem).replaceWith(this.containerDiv);
        if (DEBUG) console.log("DEBUG: renderKhanex(), this = " + JSON.stringify(this));
    }

    // This is what a khanex logging event looks like for a correct answer
    //  logging event {"event":"khanex","act":"answer:correct","answer":{"complete":1,"count_hints":0,"time_taken":87,"attempt_number":1,"attempt_content":"\"100011\"","sha1":"decimal-to-binary","seed":194953274,"problem_type":"0","review_mode":0},"correct":"T","div_id":"ex2","course":"mobilecsp","clientLoginStatus":false,"timezoneoffset":4}

    // Called when user clicks submit button
    // Checks for the result, sets localstorage and submits to the server
    submitKhanex(result) {
        if (DEBUG) console.log("DEBUG: submitKhanex result = " + JSON.stringify(result));
        var answer = result["complete"];
        if (DEBUG) console.log("DEBUG: submitKhanex answer = " + answer);
        var correct = (result["complete"] == 1 ? "T" : "F");
        var loganswer = "answer:" + (correct == "T" ? "correct" : "no"); // backward compatible
        var eventInfo = { event: "khanex", act: loganswer, answer: result, correct: correct, div_id: this.divid };
        // log the response to the database
        this.logBookEvent(eventInfo); // in bookfuncs.js
        if (DEBUG) console.log("DEBUG: submitkhanex logbookevent = " + JSON.stringify(eventInfo));
        // log the fact that the user has attempted this khanex exercise to local storage
        localStorage.setItem(this.divid, "true");
    }
}

/*=================================
== Find the custom HTML tags and ==
==   execute our code on them    ==
=================================*/
$(document).bind("runestone:login-complete", function () {
    if (DEBUG) console.log("DEBUG: Khanex bind");
    $("[data-component=khanex").each(function (index) {
        if (DEBUG) console.log("DEBUG: Khanex rendering");
        try {
            var khanex = new Khanex({ orig: this });
            khanexList[this.id] = khanex;
            setupCallback(khanex, khanex.quizname);
        } catch (err) {
            console.log(`Error rendering Khanex Exercise ${this.id}
                          Details: ${err}`);
            console.log(err.stack);
        }
    });
});

// Sets up a call back function on the window containing the khanex component
// We need to pass a reference to this khanex object so that it can be use during callback.
function setupCallback(khanex, quizname) {
    if (typeof window.component_factory === "undefined") {
        window.component_factory = {};
    }
    var fn_name = "khanex_" + quizname;   // Unique function name
    window.component_factory[fn_name] = function (result) { khanex.submitKhanex(result); }
}



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2toYW5leC9qcy9raGFuZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVhOztBQUVnRDs7QUFFN0Q7O0FBRU87O0FBRVEscUJBQXFCLGdFQUFhO0FBQ2pEO0FBQ0E7QUFDQSw2QkFBNkIsMkJBQTJCLFFBQVEsK0JBQStCO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLGtEQUFrRCw4S0FBOEs7O0FBRXZQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFO0FBQ3hFLHlCQUF5QjtBQUN6QjtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxhQUFhO0FBQ2xEO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsMkRBQTJEO0FBQzNELHFDQUFxQyxJQUFJO0FBQ3pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsMkRBQTJELDZCQUE2QjtBQUN4RiIsImZpbGUiOiJydW5lc3RvbmVfa2hhbmV4X2pzX2toYW5leF9qcy5idW5kbGUuanM/dj0xOWVmYzUwNDI3YzkyZGNjY2IyNSIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbl9fYXV0aG9yX18gPSBSYWxwaCBNb3JlbGxpXHJcbl9fZGF0ZV9fID0gNS80LzIwMjEgIFxyXG4qL1xyXG5cclxuLyogKioqKioqKioqKlxyXG4gIFRoaXMgc2NyaXB0IHJlbmRlcnMgdGhlIGtoYW5leCBIVE1MIGNvZGUgYW5kIHNldHMgdXAgZnVuY3Rpb25zXHJcbiAgdG8gcHJvY2VzcyB0aGUgZXhlcmNpc2Ugd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGtoYW5leCAnQ2hlY2sgQW5zd2VyJ1xyXG4gIGJ1dHRvbi4gIFxyXG5cclxuICBJdCBnZXRzIHRoZSBkYXRhIGl0IG5lZWRzIGZyb20gdGhlIEtoYW5leCBub2RlIGNyZWF0ZWQgYnkga2hhbmV4LnB5XHJcbiAgZHVyaW5nIHRoZSBydW5lc3RvbmUgYnVpbGQgc3RlcC5cclxuXHJcbiAgTk9URTogQW4gZW50cnkgZm9yIGtoYW5leC5qcyBzY3JpcHQgbXVzdCBiZSBhZGRlZCB0byB0aGUgd2VicGFjay5jb25maWcuanMuXHJcbiAgKioqKioqKioqKioqKiogKi9cclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IFJ1bmVzdG9uZUJhc2UgZnJvbSBcIi4uLy4uL2NvbW1vbi9qcy9ydW5lc3RvbmViYXNlLmpzXCI7XHJcblxyXG52YXIgREVCVUcgPSBmYWxzZTtcclxuXHJcbmV4cG9ydCB2YXIga2hhbmV4TGlzdCA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2hhbmV4IGV4dGVuZHMgUnVuZXN0b25lQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XHJcbiAgICAgICAgc3VwZXIob3B0cyk7XHJcbiAgICAgICAgdmFyIG9yaWcgPSBvcHRzLm9yaWc7IC8vIExvb2tzIHNvbWV0aGluZyBsaWtlOiB7XCJvcmlnXCI6e1wialF1ZXJ5MzUxMDk1NTU4Mjk4NTQ4MDQ5NTYyXCI6e1wicXVlc3Rpb25fbGFiZWxcIjpcIjEuMS4yXCJ9fX1cclxuICAgICAgICBpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwiREVCVUc6IEtoYW5leCBjb25zdHJ1Y3Rvciwgb3B0cz1cIiArIEpTT04uc3RyaW5naWZ5KG9wdHMpKTtcclxuICAgICAgICB0aGlzLm9yaWdFbGVtID0gb3JpZztcclxuICAgICAgICB0aGlzLmRpdmlkID0gb3JpZy5pZDtcclxuICAgICAgICB0aGlzLnJlc3VsdHNWaWV3ZXIgPSAkKG9yaWcpLmRhdGEoXCJyZXN1bHRzXCIpO1xyXG4gICAgICAgIHRoaXMuZ2V0SUZyYW1lQW5kUXVpem5hbWUoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcktoYW5leCgpOyAvL2dlbmVyYXRlcyBIVE1MXHJcbiAgICAgICAgLy8gQ2hlY2tzIGxvY2FsU3RvcmFnZSB0byBzZWUgaWYgdGhpcyBraGFuZXggaGFzIGFscmVhZHkgYmVlbiBjb21wbGV0ZWQgYnkgdGhpcyB1c2VyLlxyXG4gICAgICAgIC8vICAgICAgICB0aGlzLmNoZWNrS2hhbmV4U3RvcmFnZSgpO1xyXG4gICAgICAgIHRoaXMuY2FwdGlvbiA9IFwiS2hhbmV4XCI7XHJcbiAgICAgICAgdGhpcy5hZGRDYXB0aW9uKFwicnVuZXN0b25lXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBtYWluIGNvbnRlbnQgb2YgdGhlIGtoYW5leCBub2RlIGlzIHRoZSBpZnJhbWUuIFxyXG4gICAgZ2V0SUZyYW1lQW5kUXVpem5hbWUoKSB7XHJcbiAgICAgICAgdmFyIGh0bWwgPSAkKHRoaXMub3JpZ0VsZW0pLmh0bWwoKTtcclxuICAgICAgICB2YXIgcDEgPSBodG1sLnNlYXJjaCgnPGlmcmFtZScpO1xyXG4gICAgICAgIHZhciBwMiA9IGh0bWwuc2VhcmNoKCc8L2lmcmFtZT4nKTtcclxuICAgICAgICB0aGlzLmlmcmFtZSA9IGh0bWwuc2xpY2UocDEsIHAyICsgOCk7XHJcbiAgICAgICAgaWYgKERFQlVHKSBjb25zb2xlLmxvZyhcIkRFQlVHOiBnZXRRdWVzdGlvblRleHQoKSBodG1sID0gXCIgKyBodG1sKTtcclxuICAgICAgICBpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwiREVCVUc6IGdldFF1ZXN0aW9uVGV4dCgpIGlmcmFtZSA9IFwiICsgdGhpcy5pZnJhbWUpO1xyXG4gICAgICAgIHAxID0gaHRtbC5zZWFyY2goJ2toYW5leC9xcy8nKTtcclxuICAgICAgICBwMiA9IGh0bWwuc2VhcmNoKCcuaHRtbCcpO1xyXG4gICAgICAgIHRoaXMucXVpem5hbWUgPSBodG1sLnNsaWNlKHAxICsgMTAsIHAyKTsgIC8vIEdyYWIgdGhlIHF1aXpuYW1lIGZyb20gaWZyYW1lXHJcbiAgICAgICAgaWYgKERFQlVHKSBjb25zb2xlLmxvZyhcIkRFQlVHIHF1aXpuYW1lPSBcIiwgdGhpcy5xdWl6bmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9nZW5lcmF0ZXMgdGhlIEhUTUwgdGhhdCB0aGUgdXNlciBpbnRlcmFjdHMgd2l0aFxyXG4gICAgcmVuZGVyS2hhbmV4KCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKERFQlVHKSBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tREVCVUc6IHJlbmRlcktoYW5leCgpXCIpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5pZCA9IHRoaXMuZGl2aWQ7XHJcbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lckRpdikuaHRtbCh0aGlzLmlmcmFtZSk7XHJcbiAgICAgICAgJCh0aGlzLm9yaWdFbGVtKS5yZXBsYWNlV2l0aCh0aGlzLmNvbnRhaW5lckRpdik7XHJcbiAgICAgICAgaWYgKERFQlVHKSBjb25zb2xlLmxvZyhcIkRFQlVHOiByZW5kZXJLaGFuZXgoKSwgdGhpcyA9IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoaXMgaXMgd2hhdCBhIGtoYW5leCBsb2dnaW5nIGV2ZW50IGxvb2tzIGxpa2UgZm9yIGEgY29ycmVjdCBhbnN3ZXJcclxuICAgIC8vICBsb2dnaW5nIGV2ZW50IHtcImV2ZW50XCI6XCJraGFuZXhcIixcImFjdFwiOlwiYW5zd2VyOmNvcnJlY3RcIixcImFuc3dlclwiOntcImNvbXBsZXRlXCI6MSxcImNvdW50X2hpbnRzXCI6MCxcInRpbWVfdGFrZW5cIjo4NyxcImF0dGVtcHRfbnVtYmVyXCI6MSxcImF0dGVtcHRfY29udGVudFwiOlwiXFxcIjEwMDAxMVxcXCJcIixcInNoYTFcIjpcImRlY2ltYWwtdG8tYmluYXJ5XCIsXCJzZWVkXCI6MTk0OTUzMjc0LFwicHJvYmxlbV90eXBlXCI6XCIwXCIsXCJyZXZpZXdfbW9kZVwiOjB9LFwiY29ycmVjdFwiOlwiVFwiLFwiZGl2X2lkXCI6XCJleDJcIixcImNvdXJzZVwiOlwibW9iaWxlY3NwXCIsXCJjbGllbnRMb2dpblN0YXR1c1wiOmZhbHNlLFwidGltZXpvbmVvZmZzZXRcIjo0fVxyXG5cclxuICAgIC8vIENhbGxlZCB3aGVuIHVzZXIgY2xpY2tzIHN1Ym1pdCBidXR0b25cclxuICAgIC8vIENoZWNrcyBmb3IgdGhlIHJlc3VsdCwgc2V0cyBsb2NhbHN0b3JhZ2UgYW5kIHN1Ym1pdHMgdG8gdGhlIHNlcnZlclxyXG4gICAgc3VibWl0S2hhbmV4KHJlc3VsdCkge1xyXG4gICAgICAgIGlmIChERUJVRykgY29uc29sZS5sb2coXCJERUJVRzogc3VibWl0S2hhbmV4IHJlc3VsdCA9IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgdmFyIGFuc3dlciA9IHJlc3VsdFtcImNvbXBsZXRlXCJdO1xyXG4gICAgICAgIGlmIChERUJVRykgY29uc29sZS5sb2coXCJERUJVRzogc3VibWl0S2hhbmV4IGFuc3dlciA9IFwiICsgYW5zd2VyKTtcclxuICAgICAgICB2YXIgY29ycmVjdCA9IChyZXN1bHRbXCJjb21wbGV0ZVwiXSA9PSAxID8gXCJUXCIgOiBcIkZcIik7XHJcbiAgICAgICAgdmFyIGxvZ2Fuc3dlciA9IFwiYW5zd2VyOlwiICsgKGNvcnJlY3QgPT0gXCJUXCIgPyBcImNvcnJlY3RcIiA6IFwibm9cIik7IC8vIGJhY2t3YXJkIGNvbXBhdGlibGVcclxuICAgICAgICB2YXIgZXZlbnRJbmZvID0geyBldmVudDogXCJraGFuZXhcIiwgYWN0OiBsb2dhbnN3ZXIsIGFuc3dlcjogcmVzdWx0LCBjb3JyZWN0OiBjb3JyZWN0LCBkaXZfaWQ6IHRoaXMuZGl2aWQgfTtcclxuICAgICAgICAvLyBsb2cgdGhlIHJlc3BvbnNlIHRvIHRoZSBkYXRhYmFzZVxyXG4gICAgICAgIHRoaXMubG9nQm9va0V2ZW50KGV2ZW50SW5mbyk7IC8vIGluIGJvb2tmdW5jcy5qc1xyXG4gICAgICAgIGlmIChERUJVRykgY29uc29sZS5sb2coXCJERUJVRzogc3VibWl0a2hhbmV4IGxvZ2Jvb2tldmVudCA9IFwiICsgSlNPTi5zdHJpbmdpZnkoZXZlbnRJbmZvKSk7XHJcbiAgICAgICAgLy8gbG9nIHRoZSBmYWN0IHRoYXQgdGhlIHVzZXIgaGFzIGF0dGVtcHRlZCB0aGlzIGtoYW5leCBleGVyY2lzZSB0byBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5kaXZpZCwgXCJ0cnVlXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PSBGaW5kIHRoZSBjdXN0b20gSFRNTCB0YWdzIGFuZCA9PVxyXG49PSAgIGV4ZWN1dGUgb3VyIGNvZGUgb24gdGhlbSAgICA9PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4kKGRvY3VtZW50KS5iaW5kKFwicnVuZXN0b25lOmxvZ2luLWNvbXBsZXRlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChERUJVRykgY29uc29sZS5sb2coXCJERUJVRzogS2hhbmV4IGJpbmRcIik7XHJcbiAgICAkKFwiW2RhdGEtY29tcG9uZW50PWtoYW5leFwiKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIGlmIChERUJVRykgY29uc29sZS5sb2coXCJERUJVRzogS2hhbmV4IHJlbmRlcmluZ1wiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIga2hhbmV4ID0gbmV3IEtoYW5leCh7IG9yaWc6IHRoaXMgfSk7XHJcbiAgICAgICAgICAgIGtoYW5leExpc3RbdGhpcy5pZF0gPSBraGFuZXg7XHJcbiAgICAgICAgICAgIHNldHVwQ2FsbGJhY2soa2hhbmV4LCBraGFuZXgucXVpem5hbWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3IgcmVuZGVyaW5nIEtoYW5leCBFeGVyY2lzZSAke3RoaXMuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRGV0YWlsczogJHtlcnJ9YCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLy8gU2V0cyB1cCBhIGNhbGwgYmFjayBmdW5jdGlvbiBvbiB0aGUgd2luZG93IGNvbnRhaW5pbmcgdGhlIGtoYW5leCBjb21wb25lbnRcclxuLy8gV2UgbmVlZCB0byBwYXNzIGEgcmVmZXJlbmNlIHRvIHRoaXMga2hhbmV4IG9iamVjdCBzbyB0aGF0IGl0IGNhbiBiZSB1c2UgZHVyaW5nIGNhbGxiYWNrLlxyXG5mdW5jdGlvbiBzZXR1cENhbGxiYWNrKGtoYW5leCwgcXVpem5hbWUpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93LmNvbXBvbmVudF9mYWN0b3J5ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgd2luZG93LmNvbXBvbmVudF9mYWN0b3J5ID0ge307XHJcbiAgICB9XHJcbiAgICB2YXIgZm5fbmFtZSA9IFwia2hhbmV4X1wiICsgcXVpem5hbWU7ICAgLy8gVW5pcXVlIGZ1bmN0aW9uIG5hbWVcclxuICAgIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeVtmbl9uYW1lXSA9IGZ1bmN0aW9uIChyZXN1bHQpIHsga2hhbmV4LnN1Ym1pdEtoYW5leChyZXN1bHQpOyB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=