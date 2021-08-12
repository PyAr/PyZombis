(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_quizly_js_quizly_js"],{

/***/ 16207:
/*!***************************************!*\
  !*** ./runestone/quizly/js/quizly.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quizlyList": () => (/* binding */ quizlyList),
/* harmony export */   "default": () => (/* binding */ Quizly)
/* harmony export */ });
/* harmony import */ var _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase.js */ 2568);
/*
__author__ = Ralph Morelli
__date__ = 4/9/2021  */

/* **********
  This script renders the quizly HTML code and sets up functions
  to process the quiz when the user clicks on the quizly 'Check me'
  button.  

  It gets the data it needs from the Quizly node created by quizly.py
  during the runestone build step.

  NOTE: An entry for quizly.js script must be added to the webpack.config.js.
  ************** */




//import "../css/poll.css";

var DEBUG = false;

var quizlyList = {};

class Quizly extends _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(opts) {
        super(opts);
        var orig = opts.orig; // Looks something like: {"orig":{"jQuery351095558298548049562":{"question_label":"1.1.2"}}}
	if (DEBUG) console.log("DEBUG: Quizly constructor, opts=" + JSON.stringify(opts));
        this.origElem = orig;
        this.divid = orig.id;
	if (DEBUG) console.log("DEBUG: Quizly constructor, divid= " + this.divid);
        this.resultsViewer = $(orig).data("results");
        this.getIFrameAndQuizname();
        this.renderQuizly(); //generates HTML
        // Checks localStorage to see if this quizly has already been completed by this user.
	//        this.checkQuizlyStorage();
        this.caption = "Quizly";
        this.addCaption("runestone");
    }

    // The main content of the quizly node is the iframe. 
    getIFrameAndQuizname() {
      var html = $(this.origElem).html();
      var p1 = html.search('<iframe');
      var p2 = html.search('</iframe>');
      this.iframe = html.slice(p1,p2+8);
      if (DEBUG) console.log("DEBUG: getIFrame() html = " + html);
      if (DEBUG) console.log("DEBUG: getIFrame() iframe = " + this.iframe);
      p1 = html.search('quizname=');
      p2 = html.search('hints');
      this.quizname = html.slice(p1+9,p2-5);  // Grab the quizname from iframe
      if (DEBUG) console.log("DEBUG quizname= ", this.quizname);
    }

    // Generates the HTML that the user interacts with
    renderQuizly() {
        var _this = this;
	if (DEBUG) console.log("DEBUG: renderQuizly()");
        this.containerDiv = document.createElement("div");
	//        this.quizlyFrame = document.createElement("iframe");
        this.containerDiv.id = this.divid;
        $(this.containerDiv).addClass(this.origElem.getAttribute("class"));
	$(this.containerDiv).html(this.iframe);
        $(this.origElem).replaceWith(this.containerDiv);
	if (DEBUG) console.log("DEBUG: renderQuizly(), this = " + JSON.stringify(this));
    }

  // Called from the exercise when user clicks submit button
  // Checks for the result, sets localstorage and submits to the server
   submitQuizly(result) {
      if (DEBUG) console.log("DEBUG: submitQuizly result = " + JSON.stringify(result));
      var answer = result["xml"];
      var correct = (result["result"] == true ? "T" : "F");
      var loganswer =  "answer:" + (correct == "T" ? "correct" : "no"); // backward compatible
      var eventInfo = { event: "quizly", act:loganswer, answer:answer, correct:correct, div_id: this.divid };
      // Log the response to the database
      this.logBookEvent(eventInfo); // in bookfuncs.js
      if (DEBUG) console.log("DEBUG: submitquizly logbookevent = " + JSON.stringify(eventInfo));
      // Log the fact that the user has attempted this quizly exercise to local storage
      localStorage.setItem(this.divid, "true");
    }
}

/*=================================
== Find the custom HTML tags and ==
==   execute our code on them    ==
=================================*/
 $(document).bind("runestone:login-complete", function () {
     $("[data-component=quizly").each(function (index) {
         try {
	     var quizly = new Quizly({ orig: this });
             quizlyList[this.id] = quizly;
     	     if (DEBUG) console.log("DEBUG: Quizly rendering, this.id = " + this.id);
	     setupCallback(quizly, quizly.quizname);
         } catch (err) {
             console.log(`Error rendering Quizly Exercise ${this.id}
                          Details: ${err}`);
             console.log(err.stack);
         }
     });
 });

// Sets up a unique callback function on the window containing the quizly component
// The quizly param is a reference to this quizly object so that it can be use during callback.
// The quizname param is used to construct a unique callback function name
function setupCallback(quizly, quizname) {
  if (typeof window.component_factory === "undefined") {
      window.component_factory = {};
  }
  var fn_name = "quizly_" + quizname;   // Unique function name
  window.component_factory[fn_name] = function(result) { quizly.submitQuizly(result); }
}



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3F1aXpseS9qcy9xdWl6bHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFYTs7QUFFZ0Q7QUFDN0Q7O0FBRUE7O0FBRU87O0FBRVEscUJBQXFCLGdFQUFhO0FBQ2pEO0FBQ0E7QUFDQSw2QkFBNkIsMkJBQTJCLFFBQVEsK0JBQStCO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RTtBQUN2RSx1QkFBdUI7QUFDdkI7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixhQUFhO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViw0REFBNEQ7QUFDNUQscUNBQXFDLElBQUk7QUFDekM7QUFDQTtBQUNBLE1BQU07QUFDTixFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLHdEQUF3RCw2QkFBNkI7QUFDckYiLCJmaWxlIjoicnVuZXN0b25lX3F1aXpseV9qc19xdWl6bHlfanMuYnVuZGxlLmpzP3Y9YmNjOTQ5OTdmY2ZhMmVkNjc0OGYiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5fX2F1dGhvcl9fID0gUmFscGggTW9yZWxsaVxyXG5fX2RhdGVfXyA9IDQvOS8yMDIxICAqL1xyXG5cclxuLyogKioqKioqKioqKlxyXG4gIFRoaXMgc2NyaXB0IHJlbmRlcnMgdGhlIHF1aXpseSBIVE1MIGNvZGUgYW5kIHNldHMgdXAgZnVuY3Rpb25zXHJcbiAgdG8gcHJvY2VzcyB0aGUgcXVpeiB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgcXVpemx5ICdDaGVjayBtZSdcclxuICBidXR0b24uICBcclxuXHJcbiAgSXQgZ2V0cyB0aGUgZGF0YSBpdCBuZWVkcyBmcm9tIHRoZSBRdWl6bHkgbm9kZSBjcmVhdGVkIGJ5IHF1aXpseS5weVxyXG4gIGR1cmluZyB0aGUgcnVuZXN0b25lIGJ1aWxkIHN0ZXAuXHJcblxyXG4gIE5PVEU6IEFuIGVudHJ5IGZvciBxdWl6bHkuanMgc2NyaXB0IG11c3QgYmUgYWRkZWQgdG8gdGhlIHdlYnBhY2suY29uZmlnLmpzLlxyXG4gICoqKioqKioqKioqKioqICovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBSdW5lc3RvbmVCYXNlIGZyb20gXCIuLi8uLi9jb21tb24vanMvcnVuZXN0b25lYmFzZS5qc1wiO1xyXG4vL2ltcG9ydCBcIi4uL2Nzcy9wb2xsLmNzc1wiO1xyXG5cclxudmFyIERFQlVHID0gZmFsc2U7XHJcblxyXG5leHBvcnQgdmFyIHF1aXpseUxpc3QgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1aXpseSBleHRlbmRzIFJ1bmVzdG9uZUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xyXG4gICAgICAgIHN1cGVyKG9wdHMpO1xyXG4gICAgICAgIHZhciBvcmlnID0gb3B0cy5vcmlnOyAvLyBMb29rcyBzb21ldGhpbmcgbGlrZToge1wib3JpZ1wiOntcImpRdWVyeTM1MTA5NTU1ODI5ODU0ODA0OTU2MlwiOntcInF1ZXN0aW9uX2xhYmVsXCI6XCIxLjEuMlwifX19XHJcblx0aWYgKERFQlVHKSBjb25zb2xlLmxvZyhcIkRFQlVHOiBRdWl6bHkgY29uc3RydWN0b3IsIG9wdHM9XCIgKyBKU09OLnN0cmluZ2lmeShvcHRzKSk7XHJcbiAgICAgICAgdGhpcy5vcmlnRWxlbSA9IG9yaWc7XHJcbiAgICAgICAgdGhpcy5kaXZpZCA9IG9yaWcuaWQ7XHJcblx0aWYgKERFQlVHKSBjb25zb2xlLmxvZyhcIkRFQlVHOiBRdWl6bHkgY29uc3RydWN0b3IsIGRpdmlkPSBcIiArIHRoaXMuZGl2aWQpO1xyXG4gICAgICAgIHRoaXMucmVzdWx0c1ZpZXdlciA9ICQob3JpZykuZGF0YShcInJlc3VsdHNcIik7XHJcbiAgICAgICAgdGhpcy5nZXRJRnJhbWVBbmRRdWl6bmFtZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyUXVpemx5KCk7IC8vZ2VuZXJhdGVzIEhUTUxcclxuICAgICAgICAvLyBDaGVja3MgbG9jYWxTdG9yYWdlIHRvIHNlZSBpZiB0aGlzIHF1aXpseSBoYXMgYWxyZWFkeSBiZWVuIGNvbXBsZXRlZCBieSB0aGlzIHVzZXIuXHJcblx0Ly8gICAgICAgIHRoaXMuY2hlY2tRdWl6bHlTdG9yYWdlKCk7XHJcbiAgICAgICAgdGhpcy5jYXB0aW9uID0gXCJRdWl6bHlcIjtcclxuICAgICAgICB0aGlzLmFkZENhcHRpb24oXCJydW5lc3RvbmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlIG1haW4gY29udGVudCBvZiB0aGUgcXVpemx5IG5vZGUgaXMgdGhlIGlmcmFtZS4gXHJcbiAgICBnZXRJRnJhbWVBbmRRdWl6bmFtZSgpIHtcclxuICAgICAgdmFyIGh0bWwgPSAkKHRoaXMub3JpZ0VsZW0pLmh0bWwoKTtcclxuICAgICAgdmFyIHAxID0gaHRtbC5zZWFyY2goJzxpZnJhbWUnKTtcclxuICAgICAgdmFyIHAyID0gaHRtbC5zZWFyY2goJzwvaWZyYW1lPicpO1xyXG4gICAgICB0aGlzLmlmcmFtZSA9IGh0bWwuc2xpY2UocDEscDIrOCk7XHJcbiAgICAgIGlmIChERUJVRykgY29uc29sZS5sb2coXCJERUJVRzogZ2V0SUZyYW1lKCkgaHRtbCA9IFwiICsgaHRtbCk7XHJcbiAgICAgIGlmIChERUJVRykgY29uc29sZS5sb2coXCJERUJVRzogZ2V0SUZyYW1lKCkgaWZyYW1lID0gXCIgKyB0aGlzLmlmcmFtZSk7XHJcbiAgICAgIHAxID0gaHRtbC5zZWFyY2goJ3F1aXpuYW1lPScpO1xyXG4gICAgICBwMiA9IGh0bWwuc2VhcmNoKCdoaW50cycpO1xyXG4gICAgICB0aGlzLnF1aXpuYW1lID0gaHRtbC5zbGljZShwMSs5LHAyLTUpOyAgLy8gR3JhYiB0aGUgcXVpem5hbWUgZnJvbSBpZnJhbWVcclxuICAgICAgaWYgKERFQlVHKSBjb25zb2xlLmxvZyhcIkRFQlVHIHF1aXpuYW1lPSBcIiwgdGhpcy5xdWl6bmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2VuZXJhdGVzIHRoZSBIVE1MIHRoYXQgdGhlIHVzZXIgaW50ZXJhY3RzIHdpdGhcclxuICAgIHJlbmRlclF1aXpseSgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG5cdGlmIChERUJVRykgY29uc29sZS5sb2coXCJERUJVRzogcmVuZGVyUXVpemx5KClcIik7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdC8vICAgICAgICB0aGlzLnF1aXpseUZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5pZCA9IHRoaXMuZGl2aWQ7XHJcbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lckRpdikuYWRkQ2xhc3ModGhpcy5vcmlnRWxlbS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSk7XHJcblx0JCh0aGlzLmNvbnRhaW5lckRpdikuaHRtbCh0aGlzLmlmcmFtZSk7XHJcbiAgICAgICAgJCh0aGlzLm9yaWdFbGVtKS5yZXBsYWNlV2l0aCh0aGlzLmNvbnRhaW5lckRpdik7XHJcblx0aWYgKERFQlVHKSBjb25zb2xlLmxvZyhcIkRFQlVHOiByZW5kZXJRdWl6bHkoKSwgdGhpcyA9IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAvLyBDYWxsZWQgZnJvbSB0aGUgZXhlcmNpc2Ugd2hlbiB1c2VyIGNsaWNrcyBzdWJtaXQgYnV0dG9uXHJcbiAgLy8gQ2hlY2tzIGZvciB0aGUgcmVzdWx0LCBzZXRzIGxvY2Fsc3RvcmFnZSBhbmQgc3VibWl0cyB0byB0aGUgc2VydmVyXHJcbiAgIHN1Ym1pdFF1aXpseShyZXN1bHQpIHtcclxuICAgICAgaWYgKERFQlVHKSBjb25zb2xlLmxvZyhcIkRFQlVHOiBzdWJtaXRRdWl6bHkgcmVzdWx0ID0gXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgdmFyIGFuc3dlciA9IHJlc3VsdFtcInhtbFwiXTtcclxuICAgICAgdmFyIGNvcnJlY3QgPSAocmVzdWx0W1wicmVzdWx0XCJdID09IHRydWUgPyBcIlRcIiA6IFwiRlwiKTtcclxuICAgICAgdmFyIGxvZ2Fuc3dlciA9ICBcImFuc3dlcjpcIiArIChjb3JyZWN0ID09IFwiVFwiID8gXCJjb3JyZWN0XCIgOiBcIm5vXCIpOyAvLyBiYWNrd2FyZCBjb21wYXRpYmxlXHJcbiAgICAgIHZhciBldmVudEluZm8gPSB7IGV2ZW50OiBcInF1aXpseVwiLCBhY3Q6bG9nYW5zd2VyLCBhbnN3ZXI6YW5zd2VyLCBjb3JyZWN0OmNvcnJlY3QsIGRpdl9pZDogdGhpcy5kaXZpZCB9O1xyXG4gICAgICAvLyBMb2cgdGhlIHJlc3BvbnNlIHRvIHRoZSBkYXRhYmFzZVxyXG4gICAgICB0aGlzLmxvZ0Jvb2tFdmVudChldmVudEluZm8pOyAvLyBpbiBib29rZnVuY3MuanNcclxuICAgICAgaWYgKERFQlVHKSBjb25zb2xlLmxvZyhcIkRFQlVHOiBzdWJtaXRxdWl6bHkgbG9nYm9va2V2ZW50ID0gXCIgKyBKU09OLnN0cmluZ2lmeShldmVudEluZm8pKTtcclxuICAgICAgLy8gTG9nIHRoZSBmYWN0IHRoYXQgdGhlIHVzZXIgaGFzIGF0dGVtcHRlZCB0aGlzIHF1aXpseSBleGVyY2lzZSB0byBsb2NhbCBzdG9yYWdlXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuZGl2aWQsIFwidHJ1ZVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT0gRmluZCB0aGUgY3VzdG9tIEhUTUwgdGFncyBhbmQgPT1cclxuPT0gICBleGVjdXRlIG91ciBjb2RlIG9uIHRoZW0gICAgPT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICQoZG9jdW1lbnQpLmJpbmQoXCJydW5lc3RvbmU6bG9naW4tY29tcGxldGVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICQoXCJbZGF0YS1jb21wb25lbnQ9cXVpemx5XCIpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgIHRyeSB7XHJcblx0ICAgICB2YXIgcXVpemx5ID0gbmV3IFF1aXpseSh7IG9yaWc6IHRoaXMgfSk7XHJcbiAgICAgICAgICAgICBxdWl6bHlMaXN0W3RoaXMuaWRdID0gcXVpemx5O1xyXG4gICAgIFx0ICAgICBpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwiREVCVUc6IFF1aXpseSByZW5kZXJpbmcsIHRoaXMuaWQgPSBcIiArIHRoaXMuaWQpO1xyXG5cdCAgICAgc2V0dXBDYWxsYmFjayhxdWl6bHksIHF1aXpseS5xdWl6bmFtZSk7XHJcbiAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yIHJlbmRlcmluZyBRdWl6bHkgRXhlcmNpc2UgJHt0aGlzLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIERldGFpbHM6ICR7ZXJyfWApO1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLnN0YWNrKTtcclxuICAgICAgICAgfVxyXG4gICAgIH0pO1xyXG4gfSk7XHJcblxyXG4vLyBTZXRzIHVwIGEgdW5pcXVlIGNhbGxiYWNrIGZ1bmN0aW9uIG9uIHRoZSB3aW5kb3cgY29udGFpbmluZyB0aGUgcXVpemx5IGNvbXBvbmVudFxyXG4vLyBUaGUgcXVpemx5IHBhcmFtIGlzIGEgcmVmZXJlbmNlIHRvIHRoaXMgcXVpemx5IG9iamVjdCBzbyB0aGF0IGl0IGNhbiBiZSB1c2UgZHVyaW5nIGNhbGxiYWNrLlxyXG4vLyBUaGUgcXVpem5hbWUgcGFyYW0gaXMgdXNlZCB0byBjb25zdHJ1Y3QgYSB1bmlxdWUgY2FsbGJhY2sgZnVuY3Rpb24gbmFtZVxyXG5mdW5jdGlvbiBzZXR1cENhbGxiYWNrKHF1aXpseSwgcXVpem5hbWUpIHtcclxuICBpZiAodHlwZW9mIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPSB7fTtcclxuICB9XHJcbiAgdmFyIGZuX25hbWUgPSBcInF1aXpseV9cIiArIHF1aXpuYW1lOyAgIC8vIFVuaXF1ZSBmdW5jdGlvbiBuYW1lXHJcbiAgd2luZG93LmNvbXBvbmVudF9mYWN0b3J5W2ZuX25hbWVdID0gZnVuY3Rpb24ocmVzdWx0KSB7IHF1aXpseS5zdWJtaXRRdWl6bHkocmVzdWx0KTsgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9