(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_poll_js_poll_js"],{

/***/ 55475:
/*!*************************************!*\
  !*** ./runestone/poll/css/poll.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 37350:
/*!***********************************!*\
  !*** ./runestone/poll/js/poll.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pollList": () => (/* binding */ pollList),
/* harmony export */   "default": () => (/* binding */ Poll)
/* harmony export */ });
/* harmony import */ var _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase */ 2568);
/* harmony import */ var _css_poll_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/poll.css */ 55475);
/*
__author__ = Kirby Olson
__date__ = 6/12/2015  */





var pollList = {};

class Poll extends _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(opts) {
        super(opts);
        var orig = opts.orig; //entire <p> element
        this.origElem = orig;
        this.divid = orig.id;
        this.children = this.origElem.childNodes;
        this.optionList = [];
        this.optsArray = [];
        this.comment = false;
        if ($(this.origElem).is("[data-comment]")) {
            this.comment = true;
        }
        this.resultsViewer = $(orig).data("results");
        this.getQuestionText();
        this.getOptionText(); //populates optionList
        this.renderPoll(); //generates HTML
        // Checks localStorage to see if this poll has already been completed by this user.
        this.checkPollStorage();
        this.caption = "Poll";
        this.addCaption("runestone");
    }
    getQuestionText() {
        //finds the text inside the parent tag, but before the first <li> tag and sets it as the question
        var _this = this;
        var firstAnswer;
        for (var i = 0; i < this.children.length; i++) {
            if (this.children[i].tagName == "LI") {
                firstAnswer = _this.children[i];
                break;
            }
        }
        var delimiter = firstAnswer.outerHTML;
        var fulltext = $(this.origElem).html();
        var temp = fulltext.split(delimiter);
        this.question = temp[0];
    }
    getOptionText() {
        //Gets the text from each <li> tag and places it in this.optionList
        var _this = this;
        for (var i = 0; i < this.children.length; i++) {
            if (_this.children[i].tagName == "LI") {
                _this.optionList.push($(_this.children[i]).text());
            }
        }
    }
    renderPoll() {
        //generates the HTML that the user interacts with
        var _this = this;
        this.containerDiv = document.createElement("div");
        this.pollForm = document.createElement("form");
        this.resultsDiv = document.createElement("div");
        this.containerDiv.id = this.divid;
        $(this.containerDiv).addClass(this.origElem.getAttribute("class"));
        $(this.pollForm).html(
            `<span style='font-size: Large'>${this.question}</span>`
        );
        $(this.pollForm).attr({
            id: this.divid + "_form",
            method: "get",
            action: "",
            onsubmit: "return false;",
        });
        this.pollForm.appendChild(document.createElement("br"));
        for (var i = 0; i < this.optionList.length; i++) {
            var radio = document.createElement("input");
            var tmpid = _this.divid + "_opt_" + i;
            $(radio).attr({
                id: tmpid,
                name: this.divid + "_group1",
                type: "radio",
                value: i,
            });
            $(radio).click(this.submitPoll.bind(this));
            var label = document.createElement("label");
            $(label).attr("for", tmpid);
            $(label).text(this.optionList[i]);
            this.pollForm.appendChild(radio);
            this.optsArray.push(radio);
            this.pollForm.appendChild(label);
            this.pollForm.appendChild(document.createElement("br"));
        }
        if (this.comment) {
            this.renderTextField();
        }
        this.resultsDiv.id = this.divid + "_results";
        this.containerDiv.appendChild(this.pollForm);
        this.containerDiv.appendChild(this.resultsDiv);
        $(this.origElem).replaceWith(this.containerDiv);
    }
    renderTextField() {
        this.textfield = document.createElement("input");
        this.textfield.type = "text";
        $(this.textfield).addClass("form-control");
        this.textfield.style.width = "300px";
        this.textfield.name = this.divid + "_comment";
        this.textfield.placeholder = "Any comments?";
        this.pollForm.appendChild(this.textfield);
        this.pollForm.appendChild(document.createElement("br"));
    }
    submitPoll() {
        //checks the poll, sets localstorage and submits to the server
        var poll_val = null;
        for (var i = 0; i < this.optsArray.length; i++) {
            if (this.optsArray[i].checked) {
                poll_val = this.optsArray[i].value;
                break;
            }
        }
        if (poll_val === null) return;
        var comment_val = "";
        if (this.comment) {
            comment_val = this.textfield.value;
        }
        var act = "";
        if (comment_val !== "") {
            act = poll_val + ":" + comment_val;
        } else {
            act = poll_val;
        }
        var eventInfo = { event: "poll", act: act, div_id: this.divid };
        // log the response to the database
        this.logBookEvent(eventInfo); // in bookfuncs.js
        // log the fact that the user has answered the poll to local storage
        localStorage.setItem(this.divid, "true");
        if (!document.getElementById(`${this.divid}_sent`)) {
            $(this.pollForm).append(
                `<span id=${this.divid}_sent><strong>Thanks, your response has been recorded</strong></span>`
            );
        } else {
            $(`#${this.divid}_sent`).html(
                "<strong>Only Your last reponse is recorded</strong>"
            );
        }
        // show the results of the poll
        if (this.resultsViewer === "all") {
            var data = {};
            data.div_id = this.divid;
            data.course = eBookConfig.course;
            jQuery.get(
                eBookConfig.ajaxURL + "getpollresults",
                data,
                this.showPollResults
            );
        }
    }
    showPollResults(data) {
        //displays the results returned by the server
        var results = eval(data);
        var total = results[0];
        var opt_list = results[1];
        var count_list = results[2];
        var div_id = results[3];
        var my_vote = results[4];
        // resture current users vote
        if (my_vote > -1) {
            this.optsArray[my_vote].checked = "checked";
        }
        // show results summary if appropriate
        if (
            (this.resultsViewer === "all" &&
                localStorage.getItem(this.divid === "true")) ||
            eBookConfig.isInstructor
        ) {
            $(this.resultsDiv).html(
                `<b>Results:</b> ${total} responses <br><br>`
            );
            var list = $(document.createElement("div"));
            $(list).addClass("results-container");
            for (var i = 0; i < this.optionList.length; i++) {
                var count;
                var percent;
                if (count_list[i]) {
                    count = count_list[i];
                    percent = (count / total) * 100;
                } else {
                    count = 0;
                    percent = 0;
                }
                var text = count + " (" + Math.round(10 * percent) / 10 + "%)"; // round percent to 10ths
                var html;
                if (percent > 10) {
                    html =
                        `<div class="progresscounter">${i + 1}. </div>` +
                        "<div class='progress'>" +
                        "<div class='progress-bar progress-bar-success'" +
                        `style="width: ${percent}%; min-width: 2em;">` +
                        "<span class='poll-text'>" +
                        text +
                        "</span></div></div>";
                } else {
                    html =
                        `<div class="progresscounter">${i + 1}. </div>` +
                        "<div class='progress'>" +
                        "<div class='progress-bar progress-bar-success'" +
                        `style="width: ${percent}%; min-width: 2em;"></div>` +
                        "<span class='poll-text' style='margin: 0 0 0 10px;'>" +
                        text +
                        "</span></div>";
                }
                var el = $(html);
                list.append(el);
            }
            $(this.resultsDiv).append(list);
        }
        this.indicate_component_ready();
    }
    disableOptions() {}
    checkPollStorage() {
        //checks the localstorage to see if the poll has been completed already
        var _this = this;
        var len = localStorage.length;
        if (len > 0) {
            //If the poll has already been completed, show the results
            var data = {};
            data.div_id = this.divid;
            data.course = eBookConfig.course;
            jQuery.get(
                eBookConfig.ajaxURL + "getpollresults",
                data,
                this.showPollResults.bind(this)
            ).fail(this.indicate_component_ready.bind(this));
        } else {
            this.indicate_component_ready();
        }
    }
}

// Do not render poll data until login-complete event so we know instructor status
$(document).bind("runestone:login-complete", function () {
    $("[data-component=poll]").each(function (index) {
        try {
            pollList[this.id] = new Poll({ orig: this });
        } catch (err) {
            console.log(`Error rendering Poll Problem ${this.id}
                         Details: ${err}`);
            console.log(err.stack);
        }
    });
});

if (typeof window.component_factory === "undefined") {
    window.component_factory = {};
}
window.component_factory.poll = function (opts) {
    return new Poll(opts);
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3BvbGwvY3NzL3BvbGwuY3NzP2VmODUiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9wb2xsL2pzL3BvbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ2E7O0FBRTZDO0FBQ2pDOztBQUVsQjs7QUFFUSxtQkFBbUIsNkRBQWE7QUFDL0M7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMEJBQTBCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQyxTQUFTO0FBQ1Q7QUFDQSx1QkFBdUIsNEJBQTRCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQSw0QkFBNEIsV0FBVztBQUN2QztBQUNBLFNBQVM7QUFDVCxrQkFBa0IsV0FBVztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxNQUFNO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw0QkFBNEI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSwrRUFBK0U7QUFDL0U7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELE1BQU07QUFDOUQ7QUFDQTtBQUNBLHlDQUF5QyxRQUFRLEVBQUUsZ0JBQWdCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLHdEQUF3RCxNQUFNO0FBQzlEO0FBQ0E7QUFDQSx5Q0FBeUMsUUFBUSxFQUFFLGdCQUFnQjtBQUNuRSwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsYUFBYTtBQUN2RCxTQUFTO0FBQ1Qsd0RBQXdEO0FBQ3hELG9DQUFvQyxJQUFJO0FBQ3hDO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicnVuZXN0b25lX3BvbGxfanNfcG9sbF9qcy5idW5kbGUuanM/dj05YTY1MThiM2E5Y2QxZDA2MGQzZCIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qXHJcbl9fYXV0aG9yX18gPSBLaXJieSBPbHNvblxyXG5fX2RhdGVfXyA9IDYvMTIvMjAxNSAgKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgUnVuZXN0b25lQmFzZSBmcm9tIFwiLi4vLi4vY29tbW9uL2pzL3J1bmVzdG9uZWJhc2VcIjtcclxuaW1wb3J0IFwiLi4vY3NzL3BvbGwuY3NzXCI7XHJcblxyXG5leHBvcnQgdmFyIHBvbGxMaXN0ID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2xsIGV4dGVuZHMgUnVuZXN0b25lQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XHJcbiAgICAgICAgc3VwZXIob3B0cyk7XHJcbiAgICAgICAgdmFyIG9yaWcgPSBvcHRzLm9yaWc7IC8vZW50aXJlIDxwPiBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5vcmlnRWxlbSA9IG9yaWc7XHJcbiAgICAgICAgdGhpcy5kaXZpZCA9IG9yaWcuaWQ7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMub3JpZ0VsZW0uY2hpbGROb2RlcztcclxuICAgICAgICB0aGlzLm9wdGlvbkxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLm9wdHNBcnJheSA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29tbWVudCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICgkKHRoaXMub3JpZ0VsZW0pLmlzKFwiW2RhdGEtY29tbWVudF1cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21tZW50ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXN1bHRzVmlld2VyID0gJChvcmlnKS5kYXRhKFwicmVzdWx0c1wiKTtcclxuICAgICAgICB0aGlzLmdldFF1ZXN0aW9uVGV4dCgpO1xyXG4gICAgICAgIHRoaXMuZ2V0T3B0aW9uVGV4dCgpOyAvL3BvcHVsYXRlcyBvcHRpb25MaXN0XHJcbiAgICAgICAgdGhpcy5yZW5kZXJQb2xsKCk7IC8vZ2VuZXJhdGVzIEhUTUxcclxuICAgICAgICAvLyBDaGVja3MgbG9jYWxTdG9yYWdlIHRvIHNlZSBpZiB0aGlzIHBvbGwgaGFzIGFscmVhZHkgYmVlbiBjb21wbGV0ZWQgYnkgdGhpcyB1c2VyLlxyXG4gICAgICAgIHRoaXMuY2hlY2tQb2xsU3RvcmFnZSgpO1xyXG4gICAgICAgIHRoaXMuY2FwdGlvbiA9IFwiUG9sbFwiO1xyXG4gICAgICAgIHRoaXMuYWRkQ2FwdGlvbihcInJ1bmVzdG9uZVwiKTtcclxuICAgIH1cclxuICAgIGdldFF1ZXN0aW9uVGV4dCgpIHtcclxuICAgICAgICAvL2ZpbmRzIHRoZSB0ZXh0IGluc2lkZSB0aGUgcGFyZW50IHRhZywgYnV0IGJlZm9yZSB0aGUgZmlyc3QgPGxpPiB0YWcgYW5kIHNldHMgaXQgYXMgdGhlIHF1ZXN0aW9uXHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgZmlyc3RBbnN3ZXI7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoaWxkcmVuW2ldLnRhZ05hbWUgPT0gXCJMSVwiKSB7XHJcbiAgICAgICAgICAgICAgICBmaXJzdEFuc3dlciA9IF90aGlzLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGRlbGltaXRlciA9IGZpcnN0QW5zd2VyLm91dGVySFRNTDtcclxuICAgICAgICB2YXIgZnVsbHRleHQgPSAkKHRoaXMub3JpZ0VsZW0pLmh0bWwoKTtcclxuICAgICAgICB2YXIgdGVtcCA9IGZ1bGx0ZXh0LnNwbGl0KGRlbGltaXRlcik7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbiA9IHRlbXBbMF07XHJcbiAgICB9XHJcbiAgICBnZXRPcHRpb25UZXh0KCkge1xyXG4gICAgICAgIC8vR2V0cyB0aGUgdGV4dCBmcm9tIGVhY2ggPGxpPiB0YWcgYW5kIHBsYWNlcyBpdCBpbiB0aGlzLm9wdGlvbkxpc3RcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuY2hpbGRyZW5baV0udGFnTmFtZSA9PSBcIkxJXCIpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLm9wdGlvbkxpc3QucHVzaCgkKF90aGlzLmNoaWxkcmVuW2ldKS50ZXh0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyUG9sbCgpIHtcclxuICAgICAgICAvL2dlbmVyYXRlcyB0aGUgSFRNTCB0aGF0IHRoZSB1c2VyIGludGVyYWN0cyB3aXRoXHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5wb2xsRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgICAgIHRoaXMucmVzdWx0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuaWQgPSB0aGlzLmRpdmlkO1xyXG4gICAgICAgICQodGhpcy5jb250YWluZXJEaXYpLmFkZENsYXNzKHRoaXMub3JpZ0VsZW0uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikpO1xyXG4gICAgICAgICQodGhpcy5wb2xsRm9ybSkuaHRtbChcclxuICAgICAgICAgICAgYDxzcGFuIHN0eWxlPSdmb250LXNpemU6IExhcmdlJz4ke3RoaXMucXVlc3Rpb259PC9zcGFuPmBcclxuICAgICAgICApO1xyXG4gICAgICAgICQodGhpcy5wb2xsRm9ybSkuYXR0cih7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmRpdmlkICsgXCJfZm9ybVwiLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICAgICAgICAgIGFjdGlvbjogXCJcIixcclxuICAgICAgICAgICAgb25zdWJtaXQ6IFwicmV0dXJuIGZhbHNlO1wiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucG9sbEZvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3B0aW9uTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIHZhciB0bXBpZCA9IF90aGlzLmRpdmlkICsgXCJfb3B0X1wiICsgaTtcclxuICAgICAgICAgICAgJChyYWRpbykuYXR0cih7XHJcbiAgICAgICAgICAgICAgICBpZDogdG1waWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmRpdmlkICsgXCJfZ3JvdXAxXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogaSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQocmFkaW8pLmNsaWNrKHRoaXMuc3VibWl0UG9sbC5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICAkKGxhYmVsKS5hdHRyKFwiZm9yXCIsIHRtcGlkKTtcclxuICAgICAgICAgICAgJChsYWJlbCkudGV4dCh0aGlzLm9wdGlvbkxpc3RbaV0pO1xyXG4gICAgICAgICAgICB0aGlzLnBvbGxGb3JtLmFwcGVuZENoaWxkKHJhZGlvKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRzQXJyYXkucHVzaChyYWRpbyk7XHJcbiAgICAgICAgICAgIHRoaXMucG9sbEZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgICAgICAgICB0aGlzLnBvbGxGb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNvbW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJUZXh0RmllbGQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXN1bHRzRGl2LmlkID0gdGhpcy5kaXZpZCArIFwiX3Jlc3VsdHNcIjtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLnBvbGxGb3JtKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLnJlc3VsdHNEaXYpO1xyXG4gICAgICAgICQodGhpcy5vcmlnRWxlbSkucmVwbGFjZVdpdGgodGhpcy5jb250YWluZXJEaXYpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyVGV4dEZpZWxkKCkge1xyXG4gICAgICAgIHRoaXMudGV4dGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIHRoaXMudGV4dGZpZWxkLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICAkKHRoaXMudGV4dGZpZWxkKS5hZGRDbGFzcyhcImZvcm0tY29udHJvbFwiKTtcclxuICAgICAgICB0aGlzLnRleHRmaWVsZC5zdHlsZS53aWR0aCA9IFwiMzAwcHhcIjtcclxuICAgICAgICB0aGlzLnRleHRmaWVsZC5uYW1lID0gdGhpcy5kaXZpZCArIFwiX2NvbW1lbnRcIjtcclxuICAgICAgICB0aGlzLnRleHRmaWVsZC5wbGFjZWhvbGRlciA9IFwiQW55IGNvbW1lbnRzP1wiO1xyXG4gICAgICAgIHRoaXMucG9sbEZvcm0uYXBwZW5kQ2hpbGQodGhpcy50ZXh0ZmllbGQpO1xyXG4gICAgICAgIHRoaXMucG9sbEZvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgIH1cclxuICAgIHN1Ym1pdFBvbGwoKSB7XHJcbiAgICAgICAgLy9jaGVja3MgdGhlIHBvbGwsIHNldHMgbG9jYWxzdG9yYWdlIGFuZCBzdWJtaXRzIHRvIHRoZSBzZXJ2ZXJcclxuICAgICAgICB2YXIgcG9sbF92YWwgPSBudWxsO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vcHRzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0c0FycmF5W2ldLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHBvbGxfdmFsID0gdGhpcy5vcHRzQXJyYXlbaV0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocG9sbF92YWwgPT09IG51bGwpIHJldHVybjtcclxuICAgICAgICB2YXIgY29tbWVudF92YWwgPSBcIlwiO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbW1lbnQpIHtcclxuICAgICAgICAgICAgY29tbWVudF92YWwgPSB0aGlzLnRleHRmaWVsZC52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGFjdCA9IFwiXCI7XHJcbiAgICAgICAgaWYgKGNvbW1lbnRfdmFsICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGFjdCA9IHBvbGxfdmFsICsgXCI6XCIgKyBjb21tZW50X3ZhbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhY3QgPSBwb2xsX3ZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGV2ZW50SW5mbyA9IHsgZXZlbnQ6IFwicG9sbFwiLCBhY3Q6IGFjdCwgZGl2X2lkOiB0aGlzLmRpdmlkIH07XHJcbiAgICAgICAgLy8gbG9nIHRoZSByZXNwb25zZSB0byB0aGUgZGF0YWJhc2VcclxuICAgICAgICB0aGlzLmxvZ0Jvb2tFdmVudChldmVudEluZm8pOyAvLyBpbiBib29rZnVuY3MuanNcclxuICAgICAgICAvLyBsb2cgdGhlIGZhY3QgdGhhdCB0aGUgdXNlciBoYXMgYW5zd2VyZWQgdGhlIHBvbGwgdG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuZGl2aWQsIFwidHJ1ZVwiKTtcclxuICAgICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuZGl2aWR9X3NlbnRgKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMucG9sbEZvcm0pLmFwcGVuZChcclxuICAgICAgICAgICAgICAgIGA8c3BhbiBpZD0ke3RoaXMuZGl2aWR9X3NlbnQ+PHN0cm9uZz5UaGFua3MsIHlvdXIgcmVzcG9uc2UgaGFzIGJlZW4gcmVjb3JkZWQ8L3N0cm9uZz48L3NwYW4+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoYCMke3RoaXMuZGl2aWR9X3NlbnRgKS5odG1sKFxyXG4gICAgICAgICAgICAgICAgXCI8c3Ryb25nPk9ubHkgWW91ciBsYXN0IHJlcG9uc2UgaXMgcmVjb3JkZWQ8L3N0cm9uZz5cIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzaG93IHRoZSByZXN1bHRzIG9mIHRoZSBwb2xsXHJcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0c1ZpZXdlciA9PT0gXCJhbGxcIikge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICBkYXRhLmRpdl9pZCA9IHRoaXMuZGl2aWQ7XHJcbiAgICAgICAgICAgIGRhdGEuY291cnNlID0gZUJvb2tDb25maWcuY291cnNlO1xyXG4gICAgICAgICAgICBqUXVlcnkuZ2V0KFxyXG4gICAgICAgICAgICAgICAgZUJvb2tDb25maWcuYWpheFVSTCArIFwiZ2V0cG9sbHJlc3VsdHNcIixcclxuICAgICAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQb2xsUmVzdWx0c1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNob3dQb2xsUmVzdWx0cyhkYXRhKSB7XHJcbiAgICAgICAgLy9kaXNwbGF5cyB0aGUgcmVzdWx0cyByZXR1cm5lZCBieSB0aGUgc2VydmVyXHJcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBldmFsKGRhdGEpO1xyXG4gICAgICAgIHZhciB0b3RhbCA9IHJlc3VsdHNbMF07XHJcbiAgICAgICAgdmFyIG9wdF9saXN0ID0gcmVzdWx0c1sxXTtcclxuICAgICAgICB2YXIgY291bnRfbGlzdCA9IHJlc3VsdHNbMl07XHJcbiAgICAgICAgdmFyIGRpdl9pZCA9IHJlc3VsdHNbM107XHJcbiAgICAgICAgdmFyIG15X3ZvdGUgPSByZXN1bHRzWzRdO1xyXG4gICAgICAgIC8vIHJlc3R1cmUgY3VycmVudCB1c2VycyB2b3RlXHJcbiAgICAgICAgaWYgKG15X3ZvdGUgPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdHNBcnJheVtteV92b3RlXS5jaGVja2VkID0gXCJjaGVja2VkXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNob3cgcmVzdWx0cyBzdW1tYXJ5IGlmIGFwcHJvcHJpYXRlXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAodGhpcy5yZXN1bHRzVmlld2VyID09PSBcImFsbFwiICYmXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmRpdmlkID09PSBcInRydWVcIikpIHx8XHJcbiAgICAgICAgICAgIGVCb29rQ29uZmlnLmlzSW5zdHJ1Y3RvclxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICAkKHRoaXMucmVzdWx0c0RpdikuaHRtbChcclxuICAgICAgICAgICAgICAgIGA8Yj5SZXN1bHRzOjwvYj4gJHt0b3RhbH0gcmVzcG9uc2VzIDxicj48YnI+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgbGlzdCA9ICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XHJcbiAgICAgICAgICAgICQobGlzdCkuYWRkQ2xhc3MoXCJyZXN1bHRzLWNvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbkxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb3VudDtcclxuICAgICAgICAgICAgICAgIHZhciBwZXJjZW50O1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50X2xpc3RbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudCA9IGNvdW50X2xpc3RbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudCA9IChjb3VudCAvIHRvdGFsKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSBjb3VudCArIFwiIChcIiArIE1hdGgucm91bmQoMTAgKiBwZXJjZW50KSAvIDEwICsgXCIlKVwiOyAvLyByb3VuZCBwZXJjZW50IHRvIDEwdGhzXHJcbiAgICAgICAgICAgICAgICB2YXIgaHRtbDtcclxuICAgICAgICAgICAgICAgIGlmIChwZXJjZW50ID4gMTApIHtcclxuICAgICAgICAgICAgICAgICAgICBodG1sID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJwcm9ncmVzc2NvdW50ZXJcIj4ke2kgKyAxfS4gPC9kaXY+YCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPGRpdiBjbGFzcz0ncHJvZ3Jlc3MnPlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPSdwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MnXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBgc3R5bGU9XCJ3aWR0aDogJHtwZXJjZW50fSU7IG1pbi13aWR0aDogMmVtO1wiPmAgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSdwb2xsLXRleHQnPlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPC9zcGFuPjwvZGl2PjwvZGl2PlwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBodG1sID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJwcm9ncmVzc2NvdW50ZXJcIj4ke2kgKyAxfS4gPC9kaXY+YCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPGRpdiBjbGFzcz0ncHJvZ3Jlc3MnPlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPSdwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MnXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBgc3R5bGU9XCJ3aWR0aDogJHtwZXJjZW50fSU7IG1pbi13aWR0aDogMmVtO1wiPjwvZGl2PmAgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSdwb2xsLXRleHQnIHN0eWxlPSdtYXJnaW46IDAgMCAwIDEwcHg7Jz5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjwvc3Bhbj48L2Rpdj5cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBlbCA9ICQoaHRtbCk7XHJcbiAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZChlbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCh0aGlzLnJlc3VsdHNEaXYpLmFwcGVuZChsaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmRpY2F0ZV9jb21wb25lbnRfcmVhZHkoKTtcclxuICAgIH1cclxuICAgIGRpc2FibGVPcHRpb25zKCkge31cclxuICAgIGNoZWNrUG9sbFN0b3JhZ2UoKSB7XHJcbiAgICAgICAgLy9jaGVja3MgdGhlIGxvY2Fsc3RvcmFnZSB0byBzZWUgaWYgdGhlIHBvbGwgaGFzIGJlZW4gY29tcGxldGVkIGFscmVhZHlcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBsZW4gPSBsb2NhbFN0b3JhZ2UubGVuZ3RoO1xyXG4gICAgICAgIGlmIChsZW4gPiAwKSB7XHJcbiAgICAgICAgICAgIC8vSWYgdGhlIHBvbGwgaGFzIGFscmVhZHkgYmVlbiBjb21wbGV0ZWQsIHNob3cgdGhlIHJlc3VsdHNcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSB7fTtcclxuICAgICAgICAgICAgZGF0YS5kaXZfaWQgPSB0aGlzLmRpdmlkO1xyXG4gICAgICAgICAgICBkYXRhLmNvdXJzZSA9IGVCb29rQ29uZmlnLmNvdXJzZTtcclxuICAgICAgICAgICAgalF1ZXJ5LmdldChcclxuICAgICAgICAgICAgICAgIGVCb29rQ29uZmlnLmFqYXhVUkwgKyBcImdldHBvbGxyZXN1bHRzXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UG9sbFJlc3VsdHMuYmluZCh0aGlzKVxyXG4gICAgICAgICAgICApLmZhaWwodGhpcy5pbmRpY2F0ZV9jb21wb25lbnRfcmVhZHkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pbmRpY2F0ZV9jb21wb25lbnRfcmVhZHkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIERvIG5vdCByZW5kZXIgcG9sbCBkYXRhIHVudGlsIGxvZ2luLWNvbXBsZXRlIGV2ZW50IHNvIHdlIGtub3cgaW5zdHJ1Y3RvciBzdGF0dXNcclxuJChkb2N1bWVudCkuYmluZChcInJ1bmVzdG9uZTpsb2dpbi1jb21wbGV0ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiW2RhdGEtY29tcG9uZW50PXBvbGxdXCIpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcG9sbExpc3RbdGhpcy5pZF0gPSBuZXcgUG9sbCh7IG9yaWc6IHRoaXMgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciByZW5kZXJpbmcgUG9sbCBQcm9ibGVtICR7dGhpcy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIERldGFpbHM6ICR7ZXJyfWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmlmICh0eXBlb2Ygd2luZG93LmNvbXBvbmVudF9mYWN0b3J5ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPSB7fTtcclxufVxyXG53aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkucG9sbCA9IGZ1bmN0aW9uIChvcHRzKSB7XHJcbiAgICByZXR1cm4gbmV3IFBvbGwob3B0cyk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
