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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2toYW5leC9qcy9raGFuZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVhOztBQUVnRDs7QUFFN0Q7O0FBRU87O0FBRVEscUJBQXFCLGdFQUFhO0FBQ2pEO0FBQ0E7QUFDQSw2QkFBNkIsMkJBQTJCLFFBQVEsK0JBQStCO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLGtEQUFrRCw4S0FBOEs7O0FBRXZQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFO0FBQ3hFLHlCQUF5QjtBQUN6QjtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxhQUFhO0FBQ2xEO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsMkRBQTJEO0FBQzNELHFDQUFxQyxJQUFJO0FBQ3pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsMkRBQTJELDZCQUE2QjtBQUN4RiIsImZpbGUiOiJydW5lc3RvbmVfa2hhbmV4X2pzX2toYW5leF9qcy5idW5kbGUuanM/dj00OGNhMjhlMmJkY2IyZTJiODg3MyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5fX2F1dGhvcl9fID0gUmFscGggTW9yZWxsaVxuX19kYXRlX18gPSA1LzQvMjAyMSAgXG4qL1xuXG4vKiAqKioqKioqKioqXG4gIFRoaXMgc2NyaXB0IHJlbmRlcnMgdGhlIGtoYW5leCBIVE1MIGNvZGUgYW5kIHNldHMgdXAgZnVuY3Rpb25zXG4gIHRvIHByb2Nlc3MgdGhlIGV4ZXJjaXNlIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBraGFuZXggJ0NoZWNrIEFuc3dlcidcbiAgYnV0dG9uLiAgXG5cbiAgSXQgZ2V0cyB0aGUgZGF0YSBpdCBuZWVkcyBmcm9tIHRoZSBLaGFuZXggbm9kZSBjcmVhdGVkIGJ5IGtoYW5leC5weVxuICBkdXJpbmcgdGhlIHJ1bmVzdG9uZSBidWlsZCBzdGVwLlxuXG4gIE5PVEU6IEFuIGVudHJ5IGZvciBraGFuZXguanMgc2NyaXB0IG11c3QgYmUgYWRkZWQgdG8gdGhlIHdlYnBhY2suY29uZmlnLmpzLlxuICAqKioqKioqKioqKioqKiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bmVzdG9uZUJhc2UgZnJvbSBcIi4uLy4uL2NvbW1vbi9qcy9ydW5lc3RvbmViYXNlLmpzXCI7XG5cbnZhciBERUJVRyA9IGZhbHNlO1xuXG5leHBvcnQgdmFyIGtoYW5leExpc3QgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2hhbmV4IGV4dGVuZHMgUnVuZXN0b25lQmFzZSB7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcihvcHRzKTtcbiAgICAgICAgdmFyIG9yaWcgPSBvcHRzLm9yaWc7IC8vIExvb2tzIHNvbWV0aGluZyBsaWtlOiB7XCJvcmlnXCI6e1wialF1ZXJ5MzUxMDk1NTU4Mjk4NTQ4MDQ5NTYyXCI6e1wicXVlc3Rpb25fbGFiZWxcIjpcIjEuMS4yXCJ9fX1cbiAgICAgICAgaWYgKERFQlVHKSBjb25zb2xlLmxvZyhcIkRFQlVHOiBLaGFuZXggY29uc3RydWN0b3IsIG9wdHM9XCIgKyBKU09OLnN0cmluZ2lmeShvcHRzKSk7XG4gICAgICAgIHRoaXMub3JpZ0VsZW0gPSBvcmlnO1xuICAgICAgICB0aGlzLmRpdmlkID0gb3JpZy5pZDtcbiAgICAgICAgdGhpcy5yZXN1bHRzVmlld2VyID0gJChvcmlnKS5kYXRhKFwicmVzdWx0c1wiKTtcbiAgICAgICAgdGhpcy5nZXRJRnJhbWVBbmRRdWl6bmFtZSgpO1xuICAgICAgICB0aGlzLnJlbmRlcktoYW5leCgpOyAvL2dlbmVyYXRlcyBIVE1MXG4gICAgICAgIC8vIENoZWNrcyBsb2NhbFN0b3JhZ2UgdG8gc2VlIGlmIHRoaXMga2hhbmV4IGhhcyBhbHJlYWR5IGJlZW4gY29tcGxldGVkIGJ5IHRoaXMgdXNlci5cbiAgICAgICAgLy8gICAgICAgIHRoaXMuY2hlY2tLaGFuZXhTdG9yYWdlKCk7XG4gICAgICAgIHRoaXMuY2FwdGlvbiA9IFwiS2hhbmV4XCI7XG4gICAgICAgIHRoaXMuYWRkQ2FwdGlvbihcInJ1bmVzdG9uZVwiKTtcbiAgICB9XG5cbiAgICAvLyBUaGUgbWFpbiBjb250ZW50IG9mIHRoZSBraGFuZXggbm9kZSBpcyB0aGUgaWZyYW1lLiBcbiAgICBnZXRJRnJhbWVBbmRRdWl6bmFtZSgpIHtcbiAgICAgICAgdmFyIGh0bWwgPSAkKHRoaXMub3JpZ0VsZW0pLmh0bWwoKTtcbiAgICAgICAgdmFyIHAxID0gaHRtbC5zZWFyY2goJzxpZnJhbWUnKTtcbiAgICAgICAgdmFyIHAyID0gaHRtbC5zZWFyY2goJzwvaWZyYW1lPicpO1xuICAgICAgICB0aGlzLmlmcmFtZSA9IGh0bWwuc2xpY2UocDEsIHAyICsgOCk7XG4gICAgICAgIGlmIChERUJVRykgY29uc29sZS5sb2coXCJERUJVRzogZ2V0UXVlc3Rpb25UZXh0KCkgaHRtbCA9IFwiICsgaHRtbCk7XG4gICAgICAgIGlmIChERUJVRykgY29uc29sZS5sb2coXCJERUJVRzogZ2V0UXVlc3Rpb25UZXh0KCkgaWZyYW1lID0gXCIgKyB0aGlzLmlmcmFtZSk7XG4gICAgICAgIHAxID0gaHRtbC5zZWFyY2goJ2toYW5leC9xcy8nKTtcbiAgICAgICAgcDIgPSBodG1sLnNlYXJjaCgnLmh0bWwnKTtcbiAgICAgICAgdGhpcy5xdWl6bmFtZSA9IGh0bWwuc2xpY2UocDEgKyAxMCwgcDIpOyAgLy8gR3JhYiB0aGUgcXVpem5hbWUgZnJvbSBpZnJhbWVcbiAgICAgICAgaWYgKERFQlVHKSBjb25zb2xlLmxvZyhcIkRFQlVHIHF1aXpuYW1lPSBcIiwgdGhpcy5xdWl6bmFtZSk7XG4gICAgfVxuXG4gICAgLy9nZW5lcmF0ZXMgdGhlIEhUTUwgdGhhdCB0aGUgdXNlciBpbnRlcmFjdHMgd2l0aFxuICAgIHJlbmRlcktoYW5leCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKERFQlVHKSBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tREVCVUc6IHJlbmRlcktoYW5leCgpXCIpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2LmlkID0gdGhpcy5kaXZpZDtcbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lckRpdikuaHRtbCh0aGlzLmlmcmFtZSk7XG4gICAgICAgICQodGhpcy5vcmlnRWxlbSkucmVwbGFjZVdpdGgodGhpcy5jb250YWluZXJEaXYpO1xuICAgICAgICBpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwiREVCVUc6IHJlbmRlcktoYW5leCgpLCB0aGlzID0gXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzKSk7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBpcyB3aGF0IGEga2hhbmV4IGxvZ2dpbmcgZXZlbnQgbG9va3MgbGlrZSBmb3IgYSBjb3JyZWN0IGFuc3dlclxuICAgIC8vICBsb2dnaW5nIGV2ZW50IHtcImV2ZW50XCI6XCJraGFuZXhcIixcImFjdFwiOlwiYW5zd2VyOmNvcnJlY3RcIixcImFuc3dlclwiOntcImNvbXBsZXRlXCI6MSxcImNvdW50X2hpbnRzXCI6MCxcInRpbWVfdGFrZW5cIjo4NyxcImF0dGVtcHRfbnVtYmVyXCI6MSxcImF0dGVtcHRfY29udGVudFwiOlwiXFxcIjEwMDAxMVxcXCJcIixcInNoYTFcIjpcImRlY2ltYWwtdG8tYmluYXJ5XCIsXCJzZWVkXCI6MTk0OTUzMjc0LFwicHJvYmxlbV90eXBlXCI6XCIwXCIsXCJyZXZpZXdfbW9kZVwiOjB9LFwiY29ycmVjdFwiOlwiVFwiLFwiZGl2X2lkXCI6XCJleDJcIixcImNvdXJzZVwiOlwibW9iaWxlY3NwXCIsXCJjbGllbnRMb2dpblN0YXR1c1wiOmZhbHNlLFwidGltZXpvbmVvZmZzZXRcIjo0fVxuXG4gICAgLy8gQ2FsbGVkIHdoZW4gdXNlciBjbGlja3Mgc3VibWl0IGJ1dHRvblxuICAgIC8vIENoZWNrcyBmb3IgdGhlIHJlc3VsdCwgc2V0cyBsb2NhbHN0b3JhZ2UgYW5kIHN1Ym1pdHMgdG8gdGhlIHNlcnZlclxuICAgIHN1Ym1pdEtoYW5leChyZXN1bHQpIHtcbiAgICAgICAgaWYgKERFQlVHKSBjb25zb2xlLmxvZyhcIkRFQlVHOiBzdWJtaXRLaGFuZXggcmVzdWx0ID0gXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcbiAgICAgICAgdmFyIGFuc3dlciA9IHJlc3VsdFtcImNvbXBsZXRlXCJdO1xuICAgICAgICBpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwiREVCVUc6IHN1Ym1pdEtoYW5leCBhbnN3ZXIgPSBcIiArIGFuc3dlcik7XG4gICAgICAgIHZhciBjb3JyZWN0ID0gKHJlc3VsdFtcImNvbXBsZXRlXCJdID09IDEgPyBcIlRcIiA6IFwiRlwiKTtcbiAgICAgICAgdmFyIGxvZ2Fuc3dlciA9IFwiYW5zd2VyOlwiICsgKGNvcnJlY3QgPT0gXCJUXCIgPyBcImNvcnJlY3RcIiA6IFwibm9cIik7IC8vIGJhY2t3YXJkIGNvbXBhdGlibGVcbiAgICAgICAgdmFyIGV2ZW50SW5mbyA9IHsgZXZlbnQ6IFwia2hhbmV4XCIsIGFjdDogbG9nYW5zd2VyLCBhbnN3ZXI6IHJlc3VsdCwgY29ycmVjdDogY29ycmVjdCwgZGl2X2lkOiB0aGlzLmRpdmlkIH07XG4gICAgICAgIC8vIGxvZyB0aGUgcmVzcG9uc2UgdG8gdGhlIGRhdGFiYXNlXG4gICAgICAgIHRoaXMubG9nQm9va0V2ZW50KGV2ZW50SW5mbyk7IC8vIGluIGJvb2tmdW5jcy5qc1xuICAgICAgICBpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwiREVCVUc6IHN1Ym1pdGtoYW5leCBsb2dib29rZXZlbnQgPSBcIiArIEpTT04uc3RyaW5naWZ5KGV2ZW50SW5mbykpO1xuICAgICAgICAvLyBsb2cgdGhlIGZhY3QgdGhhdCB0aGUgdXNlciBoYXMgYXR0ZW1wdGVkIHRoaXMga2hhbmV4IGV4ZXJjaXNlIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5kaXZpZCwgXCJ0cnVlXCIpO1xuICAgIH1cbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09IEZpbmQgdGhlIGN1c3RvbSBIVE1MIHRhZ3MgYW5kID09XG49PSAgIGV4ZWN1dGUgb3VyIGNvZGUgb24gdGhlbSAgICA9PVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiQoZG9jdW1lbnQpLmJpbmQoXCJydW5lc3RvbmU6bG9naW4tY29tcGxldGVcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChERUJVRykgY29uc29sZS5sb2coXCJERUJVRzogS2hhbmV4IGJpbmRcIik7XG4gICAgJChcIltkYXRhLWNvbXBvbmVudD1raGFuZXhcIikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgaWYgKERFQlVHKSBjb25zb2xlLmxvZyhcIkRFQlVHOiBLaGFuZXggcmVuZGVyaW5nXCIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGtoYW5leCA9IG5ldyBLaGFuZXgoeyBvcmlnOiB0aGlzIH0pO1xuICAgICAgICAgICAga2hhbmV4TGlzdFt0aGlzLmlkXSA9IGtoYW5leDtcbiAgICAgICAgICAgIHNldHVwQ2FsbGJhY2soa2hhbmV4LCBraGFuZXgucXVpem5hbWUpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciByZW5kZXJpbmcgS2hhbmV4IEV4ZXJjaXNlICR7dGhpcy5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRGV0YWlsczogJHtlcnJ9YCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuLy8gU2V0cyB1cCBhIGNhbGwgYmFjayBmdW5jdGlvbiBvbiB0aGUgd2luZG93IGNvbnRhaW5pbmcgdGhlIGtoYW5leCBjb21wb25lbnRcbi8vIFdlIG5lZWQgdG8gcGFzcyBhIHJlZmVyZW5jZSB0byB0aGlzIGtoYW5leCBvYmplY3Qgc28gdGhhdCBpdCBjYW4gYmUgdXNlIGR1cmluZyBjYWxsYmFjay5cbmZ1bmN0aW9uIHNldHVwQ2FsbGJhY2soa2hhbmV4LCBxdWl6bmFtZSkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93LmNvbXBvbmVudF9mYWN0b3J5ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9IHt9O1xuICAgIH1cbiAgICB2YXIgZm5fbmFtZSA9IFwia2hhbmV4X1wiICsgcXVpem5hbWU7ICAgLy8gVW5pcXVlIGZ1bmN0aW9uIG5hbWVcbiAgICB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnlbZm5fbmFtZV0gPSBmdW5jdGlvbiAocmVzdWx0KSB7IGtoYW5leC5zdWJtaXRLaGFuZXgocmVzdWx0KTsgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9