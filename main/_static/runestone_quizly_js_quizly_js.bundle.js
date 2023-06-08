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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3F1aXpseS9qcy9xdWl6bHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFYTs7QUFFZ0Q7QUFDN0Q7O0FBRUE7O0FBRU87O0FBRVEscUJBQXFCLGdFQUFhO0FBQ2pEO0FBQ0E7QUFDQSw2QkFBNkIsMkJBQTJCLFFBQVEsK0JBQStCO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RTtBQUN2RSx1QkFBdUI7QUFDdkI7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixhQUFhO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViw0REFBNEQ7QUFDNUQscUNBQXFDLElBQUk7QUFDekM7QUFDQTtBQUNBLE1BQU07QUFDTixFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLHdEQUF3RCw2QkFBNkI7QUFDckYiLCJmaWxlIjoicnVuZXN0b25lX3F1aXpseV9qc19xdWl6bHlfanMuYnVuZGxlLmpzP3Y9Zjk4YzhhYzA5OGUyZDA2ZGJmNGIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuX19hdXRob3JfXyA9IFJhbHBoIE1vcmVsbGlcbl9fZGF0ZV9fID0gNC85LzIwMjEgICovXG5cbi8qICoqKioqKioqKipcbiAgVGhpcyBzY3JpcHQgcmVuZGVycyB0aGUgcXVpemx5IEhUTUwgY29kZSBhbmQgc2V0cyB1cCBmdW5jdGlvbnNcbiAgdG8gcHJvY2VzcyB0aGUgcXVpeiB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgcXVpemx5ICdDaGVjayBtZSdcbiAgYnV0dG9uLiAgXG5cbiAgSXQgZ2V0cyB0aGUgZGF0YSBpdCBuZWVkcyBmcm9tIHRoZSBRdWl6bHkgbm9kZSBjcmVhdGVkIGJ5IHF1aXpseS5weVxuICBkdXJpbmcgdGhlIHJ1bmVzdG9uZSBidWlsZCBzdGVwLlxuXG4gIE5PVEU6IEFuIGVudHJ5IGZvciBxdWl6bHkuanMgc2NyaXB0IG11c3QgYmUgYWRkZWQgdG8gdGhlIHdlYnBhY2suY29uZmlnLmpzLlxuICAqKioqKioqKioqKioqKiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bmVzdG9uZUJhc2UgZnJvbSBcIi4uLy4uL2NvbW1vbi9qcy9ydW5lc3RvbmViYXNlLmpzXCI7XG4vL2ltcG9ydCBcIi4uL2Nzcy9wb2xsLmNzc1wiO1xuXG52YXIgREVCVUcgPSBmYWxzZTtcblxuZXhwb3J0IHZhciBxdWl6bHlMaXN0ID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1aXpseSBleHRlbmRzIFJ1bmVzdG9uZUJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIob3B0cyk7XG4gICAgICAgIHZhciBvcmlnID0gb3B0cy5vcmlnOyAvLyBMb29rcyBzb21ldGhpbmcgbGlrZToge1wib3JpZ1wiOntcImpRdWVyeTM1MTA5NTU1ODI5ODU0ODA0OTU2MlwiOntcInF1ZXN0aW9uX2xhYmVsXCI6XCIxLjEuMlwifX19XG5cdGlmIChERUJVRykgY29uc29sZS5sb2coXCJERUJVRzogUXVpemx5IGNvbnN0cnVjdG9yLCBvcHRzPVwiICsgSlNPTi5zdHJpbmdpZnkob3B0cykpO1xuICAgICAgICB0aGlzLm9yaWdFbGVtID0gb3JpZztcbiAgICAgICAgdGhpcy5kaXZpZCA9IG9yaWcuaWQ7XG5cdGlmIChERUJVRykgY29uc29sZS5sb2coXCJERUJVRzogUXVpemx5IGNvbnN0cnVjdG9yLCBkaXZpZD0gXCIgKyB0aGlzLmRpdmlkKTtcbiAgICAgICAgdGhpcy5yZXN1bHRzVmlld2VyID0gJChvcmlnKS5kYXRhKFwicmVzdWx0c1wiKTtcbiAgICAgICAgdGhpcy5nZXRJRnJhbWVBbmRRdWl6bmFtZSgpO1xuICAgICAgICB0aGlzLnJlbmRlclF1aXpseSgpOyAvL2dlbmVyYXRlcyBIVE1MXG4gICAgICAgIC8vIENoZWNrcyBsb2NhbFN0b3JhZ2UgdG8gc2VlIGlmIHRoaXMgcXVpemx5IGhhcyBhbHJlYWR5IGJlZW4gY29tcGxldGVkIGJ5IHRoaXMgdXNlci5cblx0Ly8gICAgICAgIHRoaXMuY2hlY2tRdWl6bHlTdG9yYWdlKCk7XG4gICAgICAgIHRoaXMuY2FwdGlvbiA9IFwiUXVpemx5XCI7XG4gICAgICAgIHRoaXMuYWRkQ2FwdGlvbihcInJ1bmVzdG9uZVwiKTtcbiAgICB9XG5cbiAgICAvLyBUaGUgbWFpbiBjb250ZW50IG9mIHRoZSBxdWl6bHkgbm9kZSBpcyB0aGUgaWZyYW1lLiBcbiAgICBnZXRJRnJhbWVBbmRRdWl6bmFtZSgpIHtcbiAgICAgIHZhciBodG1sID0gJCh0aGlzLm9yaWdFbGVtKS5odG1sKCk7XG4gICAgICB2YXIgcDEgPSBodG1sLnNlYXJjaCgnPGlmcmFtZScpO1xuICAgICAgdmFyIHAyID0gaHRtbC5zZWFyY2goJzwvaWZyYW1lPicpO1xuICAgICAgdGhpcy5pZnJhbWUgPSBodG1sLnNsaWNlKHAxLHAyKzgpO1xuICAgICAgaWYgKERFQlVHKSBjb25zb2xlLmxvZyhcIkRFQlVHOiBnZXRJRnJhbWUoKSBodG1sID0gXCIgKyBodG1sKTtcbiAgICAgIGlmIChERUJVRykgY29uc29sZS5sb2coXCJERUJVRzogZ2V0SUZyYW1lKCkgaWZyYW1lID0gXCIgKyB0aGlzLmlmcmFtZSk7XG4gICAgICBwMSA9IGh0bWwuc2VhcmNoKCdxdWl6bmFtZT0nKTtcbiAgICAgIHAyID0gaHRtbC5zZWFyY2goJ2hpbnRzJyk7XG4gICAgICB0aGlzLnF1aXpuYW1lID0gaHRtbC5zbGljZShwMSs5LHAyLTUpOyAgLy8gR3JhYiB0aGUgcXVpem5hbWUgZnJvbSBpZnJhbWVcbiAgICAgIGlmIChERUJVRykgY29uc29sZS5sb2coXCJERUJVRyBxdWl6bmFtZT0gXCIsIHRoaXMucXVpem5hbWUpO1xuICAgIH1cblxuICAgIC8vIEdlbmVyYXRlcyB0aGUgSFRNTCB0aGF0IHRoZSB1c2VyIGludGVyYWN0cyB3aXRoXG4gICAgcmVuZGVyUXVpemx5KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHRpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwiREVCVUc6IHJlbmRlclF1aXpseSgpXCIpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdC8vICAgICAgICB0aGlzLnF1aXpseUZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuaWQgPSB0aGlzLmRpdmlkO1xuICAgICAgICAkKHRoaXMuY29udGFpbmVyRGl2KS5hZGRDbGFzcyh0aGlzLm9yaWdFbGVtLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpKTtcblx0JCh0aGlzLmNvbnRhaW5lckRpdikuaHRtbCh0aGlzLmlmcmFtZSk7XG4gICAgICAgICQodGhpcy5vcmlnRWxlbSkucmVwbGFjZVdpdGgodGhpcy5jb250YWluZXJEaXYpO1xuXHRpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwiREVCVUc6IHJlbmRlclF1aXpseSgpLCB0aGlzID0gXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzKSk7XG4gICAgfVxuXG4gIC8vIENhbGxlZCBmcm9tIHRoZSBleGVyY2lzZSB3aGVuIHVzZXIgY2xpY2tzIHN1Ym1pdCBidXR0b25cbiAgLy8gQ2hlY2tzIGZvciB0aGUgcmVzdWx0LCBzZXRzIGxvY2Fsc3RvcmFnZSBhbmQgc3VibWl0cyB0byB0aGUgc2VydmVyXG4gICBzdWJtaXRRdWl6bHkocmVzdWx0KSB7XG4gICAgICBpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwiREVCVUc6IHN1Ym1pdFF1aXpseSByZXN1bHQgPSBcIiArIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuICAgICAgdmFyIGFuc3dlciA9IHJlc3VsdFtcInhtbFwiXTtcbiAgICAgIHZhciBjb3JyZWN0ID0gKHJlc3VsdFtcInJlc3VsdFwiXSA9PSB0cnVlID8gXCJUXCIgOiBcIkZcIik7XG4gICAgICB2YXIgbG9nYW5zd2VyID0gIFwiYW5zd2VyOlwiICsgKGNvcnJlY3QgPT0gXCJUXCIgPyBcImNvcnJlY3RcIiA6IFwibm9cIik7IC8vIGJhY2t3YXJkIGNvbXBhdGlibGVcbiAgICAgIHZhciBldmVudEluZm8gPSB7IGV2ZW50OiBcInF1aXpseVwiLCBhY3Q6bG9nYW5zd2VyLCBhbnN3ZXI6YW5zd2VyLCBjb3JyZWN0OmNvcnJlY3QsIGRpdl9pZDogdGhpcy5kaXZpZCB9O1xuICAgICAgLy8gTG9nIHRoZSByZXNwb25zZSB0byB0aGUgZGF0YWJhc2VcbiAgICAgIHRoaXMubG9nQm9va0V2ZW50KGV2ZW50SW5mbyk7IC8vIGluIGJvb2tmdW5jcy5qc1xuICAgICAgaWYgKERFQlVHKSBjb25zb2xlLmxvZyhcIkRFQlVHOiBzdWJtaXRxdWl6bHkgbG9nYm9va2V2ZW50ID0gXCIgKyBKU09OLnN0cmluZ2lmeShldmVudEluZm8pKTtcbiAgICAgIC8vIExvZyB0aGUgZmFjdCB0aGF0IHRoZSB1c2VyIGhhcyBhdHRlbXB0ZWQgdGhpcyBxdWl6bHkgZXhlcmNpc2UgdG8gbG9jYWwgc3RvcmFnZVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5kaXZpZCwgXCJ0cnVlXCIpO1xuICAgIH1cbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09IEZpbmQgdGhlIGN1c3RvbSBIVE1MIHRhZ3MgYW5kID09XG49PSAgIGV4ZWN1dGUgb3VyIGNvZGUgb24gdGhlbSAgICA9PVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAkKGRvY3VtZW50KS5iaW5kKFwicnVuZXN0b25lOmxvZ2luLWNvbXBsZXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgJChcIltkYXRhLWNvbXBvbmVudD1xdWl6bHlcIikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgIHRyeSB7XG5cdCAgICAgdmFyIHF1aXpseSA9IG5ldyBRdWl6bHkoeyBvcmlnOiB0aGlzIH0pO1xuICAgICAgICAgICAgIHF1aXpseUxpc3RbdGhpcy5pZF0gPSBxdWl6bHk7XG4gICAgIFx0ICAgICBpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwiREVCVUc6IFF1aXpseSByZW5kZXJpbmcsIHRoaXMuaWQgPSBcIiArIHRoaXMuaWQpO1xuXHQgICAgIHNldHVwQ2FsbGJhY2socXVpemx5LCBxdWl6bHkucXVpem5hbWUpO1xuICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yIHJlbmRlcmluZyBRdWl6bHkgRXhlcmNpc2UgJHt0aGlzLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBEZXRhaWxzOiAke2Vycn1gKTtcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xuICAgICAgICAgfVxuICAgICB9KTtcbiB9KTtcblxuLy8gU2V0cyB1cCBhIHVuaXF1ZSBjYWxsYmFjayBmdW5jdGlvbiBvbiB0aGUgd2luZG93IGNvbnRhaW5pbmcgdGhlIHF1aXpseSBjb21wb25lbnRcbi8vIFRoZSBxdWl6bHkgcGFyYW0gaXMgYSByZWZlcmVuY2UgdG8gdGhpcyBxdWl6bHkgb2JqZWN0IHNvIHRoYXQgaXQgY2FuIGJlIHVzZSBkdXJpbmcgY2FsbGJhY2suXG4vLyBUaGUgcXVpem5hbWUgcGFyYW0gaXMgdXNlZCB0byBjb25zdHJ1Y3QgYSB1bmlxdWUgY2FsbGJhY2sgZnVuY3Rpb24gbmFtZVxuZnVuY3Rpb24gc2V0dXBDYWxsYmFjayhxdWl6bHksIHF1aXpuYW1lKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93LmNvbXBvbmVudF9mYWN0b3J5ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPSB7fTtcbiAgfVxuICB2YXIgZm5fbmFtZSA9IFwicXVpemx5X1wiICsgcXVpem5hbWU7ICAgLy8gVW5pcXVlIGZ1bmN0aW9uIG5hbWVcbiAgd2luZG93LmNvbXBvbmVudF9mYWN0b3J5W2ZuX25hbWVdID0gZnVuY3Rpb24ocmVzdWx0KSB7IHF1aXpseS5zdWJtaXRRdWl6bHkocmVzdWx0KTsgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9