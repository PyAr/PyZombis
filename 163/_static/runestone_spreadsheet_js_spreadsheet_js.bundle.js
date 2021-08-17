(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_spreadsheet_js_spreadsheet_js"],{

/***/ 47504:
/*!***************************************************!*\
  !*** ./runestone/spreadsheet/css/spreadsheet.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 60611:
/*!*************************************************!*\
  !*** ./runestone/spreadsheet/js/spreadsheet.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase */ 2568);
/* harmony import */ var jexcel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jexcel */ 27010);
/* harmony import */ var jexcel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jexcel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_spreadsheet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/spreadsheet.css */ 47504);
/* harmony import */ var jexcel_dist_jexcel_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jexcel/dist/jexcel.css */ 72860);








window.ssList = {};

class SpreadSheet extends _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(opts) {
        super(opts);
        let orig = opts.orig;
        this.div_id = orig.id;
        this.sheet_id = `${this.div_id}_sheet`;
        this.data = eval(`${this.div_id}_data`);
        this.autograde = $(orig).data("autograde");
        this.suffix = window[`${this.div_id}_asserts`];
        this.mindimensions = $(orig).data("mindimensions");
        this.colwidths = $(orig).data("colwidths");
        this.coltitles = eval($(orig).data("coltitles"));
        this.maxHeight = 50;
        // Render the components
        this.renderSheet();

        if (this.autograde) {
            this.addAutoGradeButton();
            this.addOutput();
        }

        this.caption = "Spreadsheet";
        this.divid = this.div_id;
        this.containerDiv = document.getElementById(this.div_id);
        this.addCaption("runestone");
        this.indicate_component_ready();
    }

    renderSheet() {
        let div = document.getElementById(this.sheet_id);
        let opts = { data: this.data, tableHeight: this.maxHeight };
        if (this.mindimensions) {
            opts.minDimensions = this.mindimensions;
        }
        opts.columns = [];
        if (this.colwidths) {
            for (let w of this.colwidths) {
                opts.columns.push({ width: w });
            }
        }
        if (this.coltitles) {
            for (let i in this.coltitles) {
                if (opts.columns[i]) {
                    opts.columns[i].title = unescape(this.coltitles[i]);
                } else {
                    opts.columns.push({ title: this.coltitles[i] });
                }
            }
        }

        this.table = jexcel__WEBPACK_IMPORTED_MODULE_1___default()(div, opts);

        // Set background of cells that are autograded
        if (this.suffix) {
            for (let test of this.suffix) {
                let assert, loc, oper, expected;
                [assert, loc, oper, expected] = test.split(/\s+/);
                $(`#${this.div_id}_sheet`)
                    .find(this.getCellSelector(loc))
                    .css("background-color", "#d4e3ff");
            }
        }
    }

    addAutoGradeButton() {
        let div = document.getElementById(this.div_id);
        var butt = document.createElement("button");
        $(butt).text("Check");
        $(butt).addClass("btn btn-success run-button");
        div.appendChild(butt);
        this.gradeButton = butt;
        $(butt).click(this.doAutoGrade.bind(this));
        $(butt).attr("type", "button");
        $(butt).css("display", "block");
    }

    addOutput() {
        this.output = document.createElement("pre");
        this.output.id = `${this.div_id}_stdout`;
        $(this.output).css("visibility", "hidden");
        let div = document.getElementById(this.div_id);
        div.appendChild(this.output);
    }

    doAutoGrade() {
        let tests = this.suffix;
        this.passed = 0;
        this.failed = 0;
        // Tests should be of the form
        // assert cell oper value for example
        // assert A4 == 3
        let result = "";
        tests = tests.filter(function (s) {
            return s.indexOf("assert") > -1;
        });
        for (let test of tests) {
            let assert, loc, oper, expected;
            [assert, loc, oper, expected] = test.split(/\s+/);
            result += this.testOneAssert(loc, oper, expected);
            result += "\n";
        }
        let pct = (100 * this.passed) / (this.passed + this.failed);
        pct = pct.toLocaleString(undefined, { maximumFractionDigits: 2 });
        result += `You passed ${this.passed} out of ${
            this.passed + this.failed
        } tests for ${pct}%`;
        this.logBookEvent({
            event: "unittest",
            div_id: this.div_id,
            course: eBookConfig.course,
            act: `percent:${pct}:passed:${this.passed}:failed:${this.failed}`,
        });
        $(this.output).css("visibility", "visible");
        $(this.output).text(result);
    }

    testOneAssert(cell, oper, expected) {
        let actual = this.getCellDisplayValue(cell);
        const operators = {
            "==": function (operand1, operand2) {
                return operand1 == operand2;
            },
            "!=": function (operand1, operand2) {
                return operand1 != operand2;
            },
            ">": function (operand1, operand2) {
                return operand1 > operand2;
            },
            "<": function (operand1, operand2) {
                return operand1 > operand2;
            },
        };

        let res = operators[oper](actual, expected);
        let output = "";
        if (res) {
            output = `Pass: ${actual} ${oper} ${expected} in ${cell}`;
            $(`#${this.div_id}_sheet`)
                .find(this.getCellSelector(cell))
                .css("background-color", "#ccffcc");
            this.passed++;
        } else {
            output = `Failed ${actual} ${oper} ${expected} in cell ${cell}`;
            $(`#${this.div_id}_sheet`)
                .find(this.getCellSelector(cell))
                .css("background-color", "#ff9980");
            this.failed++;
        }
        return output;
    }

    // If the cell contains a formula, this call will return the formula not the computed value
    getCellSource(cell) {
        return this.table.getValue(cell);
    }

    // If the cell contains a formula this call will return the computed value
    getCellDisplayValue(cell) {
        let res = this.table.el.querySelector(this.getCellSelector(cell));
        return res.innerText;
    }

    getCellSelector(cell) {
        let parts = cell.match(/\$?([A-Z]+)\$?([0-9]+)/);
        let x = this.columnToIndex(parts[1]);
        let y = parts[2] - 1;
        return `[data-x="${x}"][data-y="${y}"]`;
    }
    columnToIndex(colName) {
        // Convert the column name to a number A = 0 AA = 26 BA = 52, etc
        let base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let result = 0;

        for (
            let i = 0, j = colName.length - 1;
            i < colName.length;
            i += 1, j -= 1
        ) {
            result += Math.pow(base.length, j) * (base.indexOf(colName[i]) + 1);
        }

        return result - 1;
    }
}

$(document).bind("runestone:login-complete", function () {
    $("[data-component=spreadsheet]").each(function (index) {
        // MC
        var opts = {
            orig: this,
            useRunestoneServices: eBookConfig.useRunestoneServices,
        };
        try {
            window.ssList[this.id] = new SpreadSheet(opts);
        } catch (err) {
            console.log(`Error rendering SpreadSheet Problem ${this.id}
                         Details: ${err}`);
            console.log(err.stack);
        }
    });
});

if (typeof window.component_factory === "undefined") {
    window.component_factory = {};
}
window.component_factory.spreadsheet = function (opts) {
    return new SpreadSheet(opts);
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3NwcmVhZHNoZWV0L2Nzcy9zcHJlYWRzaGVldC5jc3M/M2UyYSIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3NwcmVhZHNoZWV0L2pzL3NwcmVhZHNoZWV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWE7O0FBRTZDO0FBQzlCO0FBQ0k7QUFDQTtBQUNBOztBQUVoQzs7QUFFQSwwQkFBMEIsNkRBQWE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsWUFBWTtBQUN2Qyw0QkFBNEIsWUFBWTtBQUN4QztBQUNBLGdDQUFnQyxZQUFZO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsV0FBVztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsdUNBQXVDLDJCQUEyQjtBQUNsRTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLDZDQUFNOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsWUFBWTtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QywyQkFBMkI7QUFDeEUsZ0NBQWdDLFlBQVk7QUFDNUM7QUFDQSxTQUFTLGFBQWEsSUFBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixJQUFJLFVBQVUsWUFBWSxVQUFVLFlBQVk7QUFDNUUsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixPQUFPLEdBQUcsS0FBSyxHQUFHLFNBQVMsTUFBTSxLQUFLO0FBQ3BFLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCwrQkFBK0IsT0FBTyxHQUFHLEtBQUssR0FBRyxTQUFTLFdBQVcsS0FBSztBQUMxRSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixFQUFFLGFBQWEsRUFBRTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsK0RBQStEO0FBQy9ELG9DQUFvQyxJQUFJO0FBQ3hDO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicnVuZXN0b25lX3NwcmVhZHNoZWV0X2pzX3NwcmVhZHNoZWV0X2pzLmJ1bmRsZS5qcz92PWVkMjlmNzZiZTlkYzNhNmUzZTI4Iiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgUnVuZXN0b25lQmFzZSBmcm9tIFwiLi4vLi4vY29tbW9uL2pzL3J1bmVzdG9uZWJhc2VcIjtcclxuaW1wb3J0IGpleGNlbCBmcm9tIFwiamV4Y2VsXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9zcHJlYWRzaGVldC5jc3NcIjtcclxuaW1wb3J0IFwiLi4vY3NzL3NwcmVhZHNoZWV0LmNzc1wiO1xyXG5pbXBvcnQgXCJqZXhjZWwvZGlzdC9qZXhjZWwuY3NzXCI7XHJcblxyXG53aW5kb3cuc3NMaXN0ID0ge307XHJcblxyXG5jbGFzcyBTcHJlYWRTaGVldCBleHRlbmRzIFJ1bmVzdG9uZUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xyXG4gICAgICAgIHN1cGVyKG9wdHMpO1xyXG4gICAgICAgIGxldCBvcmlnID0gb3B0cy5vcmlnO1xyXG4gICAgICAgIHRoaXMuZGl2X2lkID0gb3JpZy5pZDtcclxuICAgICAgICB0aGlzLnNoZWV0X2lkID0gYCR7dGhpcy5kaXZfaWR9X3NoZWV0YDtcclxuICAgICAgICB0aGlzLmRhdGEgPSBldmFsKGAke3RoaXMuZGl2X2lkfV9kYXRhYCk7XHJcbiAgICAgICAgdGhpcy5hdXRvZ3JhZGUgPSAkKG9yaWcpLmRhdGEoXCJhdXRvZ3JhZGVcIik7XHJcbiAgICAgICAgdGhpcy5zdWZmaXggPSB3aW5kb3dbYCR7dGhpcy5kaXZfaWR9X2Fzc2VydHNgXTtcclxuICAgICAgICB0aGlzLm1pbmRpbWVuc2lvbnMgPSAkKG9yaWcpLmRhdGEoXCJtaW5kaW1lbnNpb25zXCIpO1xyXG4gICAgICAgIHRoaXMuY29sd2lkdGhzID0gJChvcmlnKS5kYXRhKFwiY29sd2lkdGhzXCIpO1xyXG4gICAgICAgIHRoaXMuY29sdGl0bGVzID0gZXZhbCgkKG9yaWcpLmRhdGEoXCJjb2x0aXRsZXNcIikpO1xyXG4gICAgICAgIHRoaXMubWF4SGVpZ2h0ID0gNTA7XHJcbiAgICAgICAgLy8gUmVuZGVyIHRoZSBjb21wb25lbnRzXHJcbiAgICAgICAgdGhpcy5yZW5kZXJTaGVldCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hdXRvZ3JhZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRBdXRvR3JhZGVCdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRPdXRwdXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2FwdGlvbiA9IFwiU3ByZWFkc2hlZXRcIjtcclxuICAgICAgICB0aGlzLmRpdmlkID0gdGhpcy5kaXZfaWQ7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRpdl9pZCk7XHJcbiAgICAgICAgdGhpcy5hZGRDYXB0aW9uKFwicnVuZXN0b25lXCIpO1xyXG4gICAgICAgIHRoaXMuaW5kaWNhdGVfY29tcG9uZW50X3JlYWR5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU2hlZXQoKSB7XHJcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc2hlZXRfaWQpO1xyXG4gICAgICAgIGxldCBvcHRzID0geyBkYXRhOiB0aGlzLmRhdGEsIHRhYmxlSGVpZ2h0OiB0aGlzLm1heEhlaWdodCB9O1xyXG4gICAgICAgIGlmICh0aGlzLm1pbmRpbWVuc2lvbnMpIHtcclxuICAgICAgICAgICAgb3B0cy5taW5EaW1lbnNpb25zID0gdGhpcy5taW5kaW1lbnNpb25zO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvcHRzLmNvbHVtbnMgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5jb2x3aWR0aHMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdyBvZiB0aGlzLmNvbHdpZHRocykge1xyXG4gICAgICAgICAgICAgICAgb3B0cy5jb2x1bW5zLnB1c2goeyB3aWR0aDogdyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jb2x0aXRsZXMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLmNvbHRpdGxlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdHMuY29sdW1uc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdHMuY29sdW1uc1tpXS50aXRsZSA9IHVuZXNjYXBlKHRoaXMuY29sdGl0bGVzW2ldKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5jb2x1bW5zLnB1c2goeyB0aXRsZTogdGhpcy5jb2x0aXRsZXNbaV0gfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudGFibGUgPSBqZXhjZWwoZGl2LCBvcHRzKTtcclxuXHJcbiAgICAgICAgLy8gU2V0IGJhY2tncm91bmQgb2YgY2VsbHMgdGhhdCBhcmUgYXV0b2dyYWRlZFxyXG4gICAgICAgIGlmICh0aGlzLnN1ZmZpeCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0ZXN0IG9mIHRoaXMuc3VmZml4KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXNzZXJ0LCBsb2MsIG9wZXIsIGV4cGVjdGVkO1xyXG4gICAgICAgICAgICAgICAgW2Fzc2VydCwgbG9jLCBvcGVyLCBleHBlY3RlZF0gPSB0ZXN0LnNwbGl0KC9cXHMrLyk7XHJcbiAgICAgICAgICAgICAgICAkKGAjJHt0aGlzLmRpdl9pZH1fc2hlZXRgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKHRoaXMuZ2V0Q2VsbFNlbGVjdG9yKGxvYykpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCIjZDRlM2ZmXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZEF1dG9HcmFkZUJ1dHRvbigpIHtcclxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kaXZfaWQpO1xyXG4gICAgICAgIHZhciBidXR0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAkKGJ1dHQpLnRleHQoXCJDaGVja1wiKTtcclxuICAgICAgICAkKGJ1dHQpLmFkZENsYXNzKFwiYnRuIGJ0bi1zdWNjZXNzIHJ1bi1idXR0b25cIik7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ1dHQpO1xyXG4gICAgICAgIHRoaXMuZ3JhZGVCdXR0b24gPSBidXR0O1xyXG4gICAgICAgICQoYnV0dCkuY2xpY2sodGhpcy5kb0F1dG9HcmFkZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAkKGJ1dHQpLmF0dHIoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICQoYnV0dCkuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE91dHB1dCgpIHtcclxuICAgICAgICB0aGlzLm91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwcmVcIik7XHJcbiAgICAgICAgdGhpcy5vdXRwdXQuaWQgPSBgJHt0aGlzLmRpdl9pZH1fc3Rkb3V0YDtcclxuICAgICAgICAkKHRoaXMub3V0cHV0KS5jc3MoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRpdl9pZCk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRoaXMub3V0cHV0KTtcclxuICAgIH1cclxuXHJcbiAgICBkb0F1dG9HcmFkZSgpIHtcclxuICAgICAgICBsZXQgdGVzdHMgPSB0aGlzLnN1ZmZpeDtcclxuICAgICAgICB0aGlzLnBhc3NlZCA9IDA7XHJcbiAgICAgICAgdGhpcy5mYWlsZWQgPSAwO1xyXG4gICAgICAgIC8vIFRlc3RzIHNob3VsZCBiZSBvZiB0aGUgZm9ybVxyXG4gICAgICAgIC8vIGFzc2VydCBjZWxsIG9wZXIgdmFsdWUgZm9yIGV4YW1wbGVcclxuICAgICAgICAvLyBhc3NlcnQgQTQgPT0gM1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgIHRlc3RzID0gdGVzdHMuZmlsdGVyKGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzLmluZGV4T2YoXCJhc3NlcnRcIikgPiAtMTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3IgKGxldCB0ZXN0IG9mIHRlc3RzKSB7XHJcbiAgICAgICAgICAgIGxldCBhc3NlcnQsIGxvYywgb3BlciwgZXhwZWN0ZWQ7XHJcbiAgICAgICAgICAgIFthc3NlcnQsIGxvYywgb3BlciwgZXhwZWN0ZWRdID0gdGVzdC5zcGxpdCgvXFxzKy8pO1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gdGhpcy50ZXN0T25lQXNzZXJ0KGxvYywgb3BlciwgZXhwZWN0ZWQpO1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gXCJcXG5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBjdCA9ICgxMDAgKiB0aGlzLnBhc3NlZCkgLyAodGhpcy5wYXNzZWQgKyB0aGlzLmZhaWxlZCk7XHJcbiAgICAgICAgcGN0ID0gcGN0LnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSk7XHJcbiAgICAgICAgcmVzdWx0ICs9IGBZb3UgcGFzc2VkICR7dGhpcy5wYXNzZWR9IG91dCBvZiAke1xyXG4gICAgICAgICAgICB0aGlzLnBhc3NlZCArIHRoaXMuZmFpbGVkXHJcbiAgICAgICAgfSB0ZXN0cyBmb3IgJHtwY3R9JWA7XHJcbiAgICAgICAgdGhpcy5sb2dCb29rRXZlbnQoe1xyXG4gICAgICAgICAgICBldmVudDogXCJ1bml0dGVzdFwiLFxyXG4gICAgICAgICAgICBkaXZfaWQ6IHRoaXMuZGl2X2lkLFxyXG4gICAgICAgICAgICBjb3Vyc2U6IGVCb29rQ29uZmlnLmNvdXJzZSxcclxuICAgICAgICAgICAgYWN0OiBgcGVyY2VudDoke3BjdH06cGFzc2VkOiR7dGhpcy5wYXNzZWR9OmZhaWxlZDoke3RoaXMuZmFpbGVkfWAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCh0aGlzLm91dHB1dCkuY3NzKFwidmlzaWJpbGl0eVwiLCBcInZpc2libGVcIik7XHJcbiAgICAgICAgJCh0aGlzLm91dHB1dCkudGV4dChyZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRlc3RPbmVBc3NlcnQoY2VsbCwgb3BlciwgZXhwZWN0ZWQpIHtcclxuICAgICAgICBsZXQgYWN0dWFsID0gdGhpcy5nZXRDZWxsRGlzcGxheVZhbHVlKGNlbGwpO1xyXG4gICAgICAgIGNvbnN0IG9wZXJhdG9ycyA9IHtcclxuICAgICAgICAgICAgXCI9PVwiOiBmdW5jdGlvbiAob3BlcmFuZDEsIG9wZXJhbmQyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3BlcmFuZDEgPT0gb3BlcmFuZDI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiIT1cIjogZnVuY3Rpb24gKG9wZXJhbmQxLCBvcGVyYW5kMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wZXJhbmQxICE9IG9wZXJhbmQyO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIj5cIjogZnVuY3Rpb24gKG9wZXJhbmQxLCBvcGVyYW5kMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wZXJhbmQxID4gb3BlcmFuZDI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiPFwiOiBmdW5jdGlvbiAob3BlcmFuZDEsIG9wZXJhbmQyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3BlcmFuZDEgPiBvcGVyYW5kMjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgcmVzID0gb3BlcmF0b3JzW29wZXJdKGFjdHVhbCwgZXhwZWN0ZWQpO1xyXG4gICAgICAgIGxldCBvdXRwdXQgPSBcIlwiO1xyXG4gICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgb3V0cHV0ID0gYFBhc3M6ICR7YWN0dWFsfSAke29wZXJ9ICR7ZXhwZWN0ZWR9IGluICR7Y2VsbH1gO1xyXG4gICAgICAgICAgICAkKGAjJHt0aGlzLmRpdl9pZH1fc2hlZXRgKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQodGhpcy5nZXRDZWxsU2VsZWN0b3IoY2VsbCkpXHJcbiAgICAgICAgICAgICAgICAuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIiNjY2ZmY2NcIik7XHJcbiAgICAgICAgICAgIHRoaXMucGFzc2VkKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3V0cHV0ID0gYEZhaWxlZCAke2FjdHVhbH0gJHtvcGVyfSAke2V4cGVjdGVkfSBpbiBjZWxsICR7Y2VsbH1gO1xyXG4gICAgICAgICAgICAkKGAjJHt0aGlzLmRpdl9pZH1fc2hlZXRgKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQodGhpcy5nZXRDZWxsU2VsZWN0b3IoY2VsbCkpXHJcbiAgICAgICAgICAgICAgICAuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIiNmZjk5ODBcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZmFpbGVkKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgdGhlIGNlbGwgY29udGFpbnMgYSBmb3JtdWxhLCB0aGlzIGNhbGwgd2lsbCByZXR1cm4gdGhlIGZvcm11bGEgbm90IHRoZSBjb21wdXRlZCB2YWx1ZVxyXG4gICAgZ2V0Q2VsbFNvdXJjZShjZWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFibGUuZ2V0VmFsdWUoY2VsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgdGhlIGNlbGwgY29udGFpbnMgYSBmb3JtdWxhIHRoaXMgY2FsbCB3aWxsIHJldHVybiB0aGUgY29tcHV0ZWQgdmFsdWVcclxuICAgIGdldENlbGxEaXNwbGF5VmFsdWUoY2VsbCkge1xyXG4gICAgICAgIGxldCByZXMgPSB0aGlzLnRhYmxlLmVsLnF1ZXJ5U2VsZWN0b3IodGhpcy5nZXRDZWxsU2VsZWN0b3IoY2VsbCkpO1xyXG4gICAgICAgIHJldHVybiByZXMuaW5uZXJUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldENlbGxTZWxlY3RvcihjZWxsKSB7XHJcbiAgICAgICAgbGV0IHBhcnRzID0gY2VsbC5tYXRjaCgvXFwkPyhbQS1aXSspXFwkPyhbMC05XSspLyk7XHJcbiAgICAgICAgbGV0IHggPSB0aGlzLmNvbHVtblRvSW5kZXgocGFydHNbMV0pO1xyXG4gICAgICAgIGxldCB5ID0gcGFydHNbMl0gLSAxO1xyXG4gICAgICAgIHJldHVybiBgW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5fVwiXWA7XHJcbiAgICB9XHJcbiAgICBjb2x1bW5Ub0luZGV4KGNvbE5hbWUpIHtcclxuICAgICAgICAvLyBDb252ZXJ0IHRoZSBjb2x1bW4gbmFtZSB0byBhIG51bWJlciBBID0gMCBBQSA9IDI2IEJBID0gNTIsIGV0Y1xyXG4gICAgICAgIGxldCBiYXNlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgICBsZXQgaSA9IDAsIGogPSBjb2xOYW1lLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIGkgPCBjb2xOYW1lLmxlbmd0aDtcclxuICAgICAgICAgICAgaSArPSAxLCBqIC09IDFcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IE1hdGgucG93KGJhc2UubGVuZ3RoLCBqKSAqIChiYXNlLmluZGV4T2YoY29sTmFtZVtpXSkgKyAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQgLSAxO1xyXG4gICAgfVxyXG59XHJcblxyXG4kKGRvY3VtZW50KS5iaW5kKFwicnVuZXN0b25lOmxvZ2luLWNvbXBsZXRlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCJbZGF0YS1jb21wb25lbnQ9c3ByZWFkc2hlZXRdXCIpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgLy8gTUNcclxuICAgICAgICB2YXIgb3B0cyA9IHtcclxuICAgICAgICAgICAgb3JpZzogdGhpcyxcclxuICAgICAgICAgICAgdXNlUnVuZXN0b25lU2VydmljZXM6IGVCb29rQ29uZmlnLnVzZVJ1bmVzdG9uZVNlcnZpY2VzLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgd2luZG93LnNzTGlzdFt0aGlzLmlkXSA9IG5ldyBTcHJlYWRTaGVldChvcHRzKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yIHJlbmRlcmluZyBTcHJlYWRTaGVldCBQcm9ibGVtICR7dGhpcy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIERldGFpbHM6ICR7ZXJyfWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmlmICh0eXBlb2Ygd2luZG93LmNvbXBvbmVudF9mYWN0b3J5ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPSB7fTtcclxufVxyXG53aW5kb3cuY29tcG9uZW50X2ZhY3Rvcnkuc3ByZWFkc2hlZXQgPSBmdW5jdGlvbiAob3B0cykge1xyXG4gICAgcmV0dXJuIG5ldyBTcHJlYWRTaGVldChvcHRzKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
