(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_lp_js_lp_js"],{

/***/ 28902:
/*!*************************************************!*\
  !*** ./node_modules/codemirror/mode/gas/gas.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (true) // CommonJS
    mod(__webpack_require__(/*! ../../lib/codemirror */ 4631));
  else {}
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("gas", function(_config, parserConfig) {
  'use strict';

  // If an architecture is specified, its initialization function may
  // populate this array with custom parsing functions which will be
  // tried in the event that the standard functions do not find a match.
  var custom = [];

  // The symbol used to start a line comment changes based on the target
  // architecture.
  // If no architecture is pased in "parserConfig" then only multiline
  // comments will have syntax support.
  var lineCommentStartSymbol = "";

  // These directives are architecture independent.
  // Machine specific directives should go in their respective
  // architecture initialization function.
  // Reference:
  // http://sourceware.org/binutils/docs/as/Pseudo-Ops.html#Pseudo-Ops
  var directives = {
    ".abort" : "builtin",
    ".align" : "builtin",
    ".altmacro" : "builtin",
    ".ascii" : "builtin",
    ".asciz" : "builtin",
    ".balign" : "builtin",
    ".balignw" : "builtin",
    ".balignl" : "builtin",
    ".bundle_align_mode" : "builtin",
    ".bundle_lock" : "builtin",
    ".bundle_unlock" : "builtin",
    ".byte" : "builtin",
    ".cfi_startproc" : "builtin",
    ".comm" : "builtin",
    ".data" : "builtin",
    ".def" : "builtin",
    ".desc" : "builtin",
    ".dim" : "builtin",
    ".double" : "builtin",
    ".eject" : "builtin",
    ".else" : "builtin",
    ".elseif" : "builtin",
    ".end" : "builtin",
    ".endef" : "builtin",
    ".endfunc" : "builtin",
    ".endif" : "builtin",
    ".equ" : "builtin",
    ".equiv" : "builtin",
    ".eqv" : "builtin",
    ".err" : "builtin",
    ".error" : "builtin",
    ".exitm" : "builtin",
    ".extern" : "builtin",
    ".fail" : "builtin",
    ".file" : "builtin",
    ".fill" : "builtin",
    ".float" : "builtin",
    ".func" : "builtin",
    ".global" : "builtin",
    ".gnu_attribute" : "builtin",
    ".hidden" : "builtin",
    ".hword" : "builtin",
    ".ident" : "builtin",
    ".if" : "builtin",
    ".incbin" : "builtin",
    ".include" : "builtin",
    ".int" : "builtin",
    ".internal" : "builtin",
    ".irp" : "builtin",
    ".irpc" : "builtin",
    ".lcomm" : "builtin",
    ".lflags" : "builtin",
    ".line" : "builtin",
    ".linkonce" : "builtin",
    ".list" : "builtin",
    ".ln" : "builtin",
    ".loc" : "builtin",
    ".loc_mark_labels" : "builtin",
    ".local" : "builtin",
    ".long" : "builtin",
    ".macro" : "builtin",
    ".mri" : "builtin",
    ".noaltmacro" : "builtin",
    ".nolist" : "builtin",
    ".octa" : "builtin",
    ".offset" : "builtin",
    ".org" : "builtin",
    ".p2align" : "builtin",
    ".popsection" : "builtin",
    ".previous" : "builtin",
    ".print" : "builtin",
    ".protected" : "builtin",
    ".psize" : "builtin",
    ".purgem" : "builtin",
    ".pushsection" : "builtin",
    ".quad" : "builtin",
    ".reloc" : "builtin",
    ".rept" : "builtin",
    ".sbttl" : "builtin",
    ".scl" : "builtin",
    ".section" : "builtin",
    ".set" : "builtin",
    ".short" : "builtin",
    ".single" : "builtin",
    ".size" : "builtin",
    ".skip" : "builtin",
    ".sleb128" : "builtin",
    ".space" : "builtin",
    ".stab" : "builtin",
    ".string" : "builtin",
    ".struct" : "builtin",
    ".subsection" : "builtin",
    ".symver" : "builtin",
    ".tag" : "builtin",
    ".text" : "builtin",
    ".title" : "builtin",
    ".type" : "builtin",
    ".uleb128" : "builtin",
    ".val" : "builtin",
    ".version" : "builtin",
    ".vtable_entry" : "builtin",
    ".vtable_inherit" : "builtin",
    ".warning" : "builtin",
    ".weak" : "builtin",
    ".weakref" : "builtin",
    ".word" : "builtin"
  };

  var registers = {};

  function x86(_parserConfig) {
    lineCommentStartSymbol = "#";

    registers.ax  = "variable";
    registers.eax = "variable-2";
    registers.rax = "variable-3";

    registers.bx  = "variable";
    registers.ebx = "variable-2";
    registers.rbx = "variable-3";

    registers.cx  = "variable";
    registers.ecx = "variable-2";
    registers.rcx = "variable-3";

    registers.dx  = "variable";
    registers.edx = "variable-2";
    registers.rdx = "variable-3";

    registers.si  = "variable";
    registers.esi = "variable-2";
    registers.rsi = "variable-3";

    registers.di  = "variable";
    registers.edi = "variable-2";
    registers.rdi = "variable-3";

    registers.sp  = "variable";
    registers.esp = "variable-2";
    registers.rsp = "variable-3";

    registers.bp  = "variable";
    registers.ebp = "variable-2";
    registers.rbp = "variable-3";

    registers.ip  = "variable";
    registers.eip = "variable-2";
    registers.rip = "variable-3";

    registers.cs  = "keyword";
    registers.ds  = "keyword";
    registers.ss  = "keyword";
    registers.es  = "keyword";
    registers.fs  = "keyword";
    registers.gs  = "keyword";
  }

  function armv6(_parserConfig) {
    // Reference:
    // http://infocenter.arm.com/help/topic/com.arm.doc.qrc0001l/QRC0001_UAL.pdf
    // http://infocenter.arm.com/help/topic/com.arm.doc.ddi0301h/DDI0301H_arm1176jzfs_r0p7_trm.pdf
    lineCommentStartSymbol = "@";
    directives.syntax = "builtin";

    registers.r0  = "variable";
    registers.r1  = "variable";
    registers.r2  = "variable";
    registers.r3  = "variable";
    registers.r4  = "variable";
    registers.r5  = "variable";
    registers.r6  = "variable";
    registers.r7  = "variable";
    registers.r8  = "variable";
    registers.r9  = "variable";
    registers.r10 = "variable";
    registers.r11 = "variable";
    registers.r12 = "variable";

    registers.sp  = "variable-2";
    registers.lr  = "variable-2";
    registers.pc  = "variable-2";
    registers.r13 = registers.sp;
    registers.r14 = registers.lr;
    registers.r15 = registers.pc;

    custom.push(function(ch, stream) {
      if (ch === '#') {
        stream.eatWhile(/\w/);
        return "number";
      }
    });
  }

  var arch = (parserConfig.architecture || "x86").toLowerCase();
  if (arch === "x86") {
    x86(parserConfig);
  } else if (arch === "arm" || arch === "armv6") {
    armv6(parserConfig);
  }

  function nextUntilUnescaped(stream, end) {
    var escaped = false, next;
    while ((next = stream.next()) != null) {
      if (next === end && !escaped) {
        return false;
      }
      escaped = !escaped && next === "\\";
    }
    return escaped;
  }

  function clikeComment(stream, state) {
    var maybeEnd = false, ch;
    while ((ch = stream.next()) != null) {
      if (ch === "/" && maybeEnd) {
        state.tokenize = null;
        break;
      }
      maybeEnd = (ch === "*");
    }
    return "comment";
  }

  return {
    startState: function() {
      return {
        tokenize: null
      };
    },

    token: function(stream, state) {
      if (state.tokenize) {
        return state.tokenize(stream, state);
      }

      if (stream.eatSpace()) {
        return null;
      }

      var style, cur, ch = stream.next();

      if (ch === "/") {
        if (stream.eat("*")) {
          state.tokenize = clikeComment;
          return clikeComment(stream, state);
        }
      }

      if (ch === lineCommentStartSymbol) {
        stream.skipToEnd();
        return "comment";
      }

      if (ch === '"') {
        nextUntilUnescaped(stream, '"');
        return "string";
      }

      if (ch === '.') {
        stream.eatWhile(/\w/);
        cur = stream.current().toLowerCase();
        style = directives[cur];
        return style || null;
      }

      if (ch === '=') {
        stream.eatWhile(/\w/);
        return "tag";
      }

      if (ch === '{') {
        return "bracket";
      }

      if (ch === '}') {
        return "bracket";
      }

      if (/\d/.test(ch)) {
        if (ch === "0" && stream.eat("x")) {
          stream.eatWhile(/[0-9a-fA-F]/);
          return "number";
        }
        stream.eatWhile(/\d/);
        return "number";
      }

      if (/\w/.test(ch)) {
        stream.eatWhile(/\w/);
        if (stream.eat(":")) {
          return 'tag';
        }
        cur = stream.current().toLowerCase();
        style = registers[cur];
        return style || null;
      }

      for (var i = 0; i < custom.length; i++) {
        style = custom[i](ch, stream, state);
        if (style) {
          return style;
        }
      }
    },

    lineComment: lineCommentStartSymbol,
    blockCommentStart: "/*",
    blockCommentEnd: "*/"
  };
});

});


/***/ }),

/***/ 2013:
/*!*******************************!*\
  !*** ./runestone/lp/js/lp.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase */ 2568);
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! codemirror */ 4631);
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(codemirror__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var codemirror_mode_gas_gas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! codemirror/mode/gas/gas.js */ 28902);
/* harmony import */ var codemirror_mode_gas_gas_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_gas_gas_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var codemirror_mode_python_python_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! codemirror/mode/python/python.js */ 5321);
/* harmony import */ var codemirror_mode_python_python_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_python_python_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! codemirror/mode/javascript/javascript.js */ 96876);
/* harmony import */ var codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var codemirror_mode_sql_sql_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! codemirror/mode/sql/sql.js */ 54086);
/* harmony import */ var codemirror_mode_sql_sql_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_sql_sql_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var codemirror_mode_clike_clike_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! codemirror/mode/clike/clike.js */ 99762);
/* harmony import */ var codemirror_mode_clike_clike_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_clike_clike_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var codemirror_mode_octave_octave_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! codemirror/mode/octave/octave.js */ 15734);
/* harmony import */ var codemirror_mode_octave_octave_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_octave_octave_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! codemirror/lib/codemirror.css */ 91380);
// .. Copyright (C) 2017 Bryan A. Jones.
//
//    This file is part of E-Book Binder.
//
//    E-Book Binder is free software: you can redistribute it and/or modify it
//    under the terms of the GNU General Public License as published by the Free
//    Software Foundation, either version 3 of the License, or (at your option)
//    any later version.
//
//    E-Book Binder is distributed in the hope that it will be useful, but WITHOUT
//    ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
//    FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more
//    details.
//
//    You should have received a copy of the GNU General Public License along
//    with E-Book Binder.  If not, see <http://www.gnu.org/licenses/>.
//
// .. highlight:: javascript
//
// **************************************************************************************
// |docname| - JavaScript functions supporting immediate feedback to in-browser questions
// **************************************************************************************













// Constructor
// ===========
// Object containing all instances of LP problems. (I assume there is just one per page.)
window.LPList = {};

// FITB constructor
class LP extends _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(opts) {
        super(opts);
        this.useRunestoneServices = opts.useRunestoneServices;
        // Store the DOM element (the input) for the "Test" button.
        this.element = opts.orig;
        this.containerDiv = this.element;
        this.divid = this.element.id;
        // Store the DOM element (the textarea) where compile results will be displayed.
        this.resultElement = $(this.element).siblings("textarea");
        // Store the DOM element (a span) where feedback will be displayed.
        this.feedbackElement = $(this.element).siblings("div");
        // Use a nice editor.
        let that = this;
        this.textAreas = [];
        $(".code_snippet").each(function (index, element) {
            let editor = codemirror__WEBPACK_IMPORTED_MODULE_1___default().fromTextArea(element, {
                lineNumbers: true,
                mode: $(that.element).attr("data-lang"),
                indentUnit: 4,
                matchBrackets: true,
                autoMatchParens: true,
                extraKeys: { Tab: "indentMore", "Shift-Tab": "indentLess" },
            });
            // Make the editor resizable.
            $(editor.getWrapperElement()).resizable({
                resize: function () {
                    editor.setSize($(this).width(), $(this).height());
                    editor.refresh();
                },
            });
            // Keep track of it.
            that.textAreas.push(editor);
        });
        // Handle clicks to the "Save and run" button.
        $(this.element).click((eventObject) => that.onSaveAndRun(eventObject).then(null));
        this.checkServer("lp_build", true);
    }

    async onSaveAndRun(_eventObject) {
        $(this.resultElement).val("Building...");
        $(this.feedbackElement).text("").attr("");
        // Since the Save and run button was clicked, we assume the code snippets have been changed; therefore, don't store ``correct`` or ``answer.resultString`` because they are out of date.
        let answer = { code_snippets: this.textareasToData() };
        this.setLocalStorage({
            answer: answer,
            timestamp: new Date(),
        });
        // Store the answer that the server returns, which includes additional data (correct/incorrect, feedback from the build, etc.).
        let serverAnswer;
        try {
            serverAnswer = await this.logBookEvent({
                event: "lp_build",
                // All values must be strings, or the resulting values on the server side come out confused.
                answer: JSON.stringify(answer),
                // Find the relative path to this web page. Slice off the leading ``/``.
                path: window.location.href
                    .replace(eBookConfig.app, "")
                    .slice(1),
                div_id: this.divid,
            });
        } catch (err) {
            $(this.feedbackElement)
                .val(`Error contacting server: {err}.`)
                .attr("class", "alert alert-danger");
            return;
        }
        // The server doesn't return the ``code_snippets``, for efficiency. Include those. If an error was returned, note that there is no ``answer`` yet.
        if (!("answer" in serverAnswer)) {
            serverAnswer["answer"] = {};
        }
        serverAnswer["answer"]["code_snippets"] = this.textareasToData();
        this.displayAnswer(serverAnswer);
        this.setLocalStorage(serverAnswer);
    }

    // Given a single answer, display it.
    displayAnswer(data) {
        if ("errors" in data) {
            // Display any server-side errors. If this key is present, other keys won't be.
            $(this.feedbackElement)
                .text(data.errors.join("<br>"))
                .attr("class", "alert alert-danger");
        } else {
            // Display and color-code the results.
            $(this.resultElement).val(data.answer.resultString);
            if (data.correct == null) {
                $(this.feedbackElement)
                    .text("Response recorded.")
                    .attr("class", "alert alert-success");
            } else if (data.correct >= 100) {
                $(this.feedbackElement)
                    .text("Correct. Grade: " + data.correct + "%")
                    .attr("class", "alert alert-success");
            } else {
                $(this.feedbackElement)
                    .text("Incorrect. Grade: " + data.correct + "%")
                    .attr("class", "alert alert-danger");
            }
            // Scroll to the bottom of the results.
            $(this.resultElement).scrollTop(this.resultElement[0].scrollHeight);
        }
    }
    // Store the contents of each textarea into an array of strings.
    textareasToData() {
        return $.map(this.textAreas, function (obj, index) {
            // See https://codemirror.net/doc/manual.html#api.
            return obj.getValue();
        });
    }
    // Store an array of strings in ``data.code_snippets`` into each textarea.
    dataToTextareas(data) {
        // Find all code snippet textareas.
        $(this.textAreas).each(function (index, value) {
            // Silently ignore if ``data.answer.code_snippets`` or ``data.answer.code_snippets[index]`` isn't defined.
            value.setValue((data.answer.code_snippets || "")[index] || "");
        });
    }
    // Restore answers from storage retrieval done in RunestoneBase.
    restoreAnswers(data) {
        this.dataToTextareas(data);
        this.displayAnswer(data);
    }
    checkLocalStorage() {
        // Loads previous answers from local storage if they exist.
        var storedData;
        if (localStorage.length > 0) {
            var key = this.localStorageKey();
            var ex = localStorage.getItem(key);
            if (ex !== null) {
                try {
                    storedData = JSON.parse(ex);
                } catch (err) {
                    // error while parsing; likely due to bad value stored in storage
                    console.log(err.message);
                    localStorage.removeItem(key);
                    return;
                }
                this.restoreAnswers(storedData);
            }
        }
    }
    setLocalStorage(data) {
        localStorage.setItem(this.localStorageKey(), JSON.stringify(data));
    }
}

// Initialization
// ==============
// Find the custom HTML tags and execute our code on them.
$(document).bind("runestone:login-complete", function () {
    $("[data-component=lp_build]").each(function (index) {
        try {
            LPList[this.id] = new LP({
                orig: this,
                useRunestoneServices: eBookConfig.useRunestoneServices,
            });
        } catch (err) {
            console.log(`Error rendering LP Problem ${this.id}`);
        }
    });
});

if (typeof window.component_factory === "undefined") {
    window.component_factory = {};
}
window.component_factory["lp_build"] = function (opts) {
    return new LP(opts);
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL2NvZGVtaXJyb3IvbW9kZS9nYXMvZ2FzLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvbHAvanMvbHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxJQUF1RDtBQUM3RCxRQUFRLG1CQUFPLENBQUMsZ0NBQXNCO0FBQ3RDLE9BQU8sRUFHYTtBQUNwQixDQUFDO0FBQ0Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsbUJBQW1CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hWRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUU2QztBQUN0QjtBQUNBO0FBQ007QUFDUTtBQUNkO0FBQ0k7QUFDRTtBQUNIOztBQUV2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQiw2REFBYTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsOERBQXVCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsK0NBQStDO0FBQzNFLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9HQUFvRztBQUNwRyxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSxnREFBZ0QsSUFBSTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxzREFBc0QsUUFBUTtBQUM5RDtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJydW5lc3RvbmVfbHBfanNfbHBfanMuYnVuZGxlLmpzP3Y9M2Y2OTc1ZWJlZDJkNTQzZGJmYzEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb2RlTWlycm9yLCBjb3B5cmlnaHQgKGMpIGJ5IE1hcmlqbiBIYXZlcmJla2UgYW5kIG90aGVyc1xuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgYW4gTUlUIGxpY2Vuc2U6IGh0dHBzOi8vY29kZW1pcnJvci5uZXQvTElDRU5TRVxuXG4oZnVuY3Rpb24obW9kKSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUgPT0gXCJvYmplY3RcIikgLy8gQ29tbW9uSlNcbiAgICBtb2QocmVxdWlyZShcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCIpKTtcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkgLy8gQU1EXG4gICAgZGVmaW5lKFtcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCJdLCBtb2QpO1xuICBlbHNlIC8vIFBsYWluIGJyb3dzZXIgZW52XG4gICAgbW9kKENvZGVNaXJyb3IpO1xufSkoZnVuY3Rpb24oQ29kZU1pcnJvcikge1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbkNvZGVNaXJyb3IuZGVmaW5lTW9kZShcImdhc1wiLCBmdW5jdGlvbihfY29uZmlnLCBwYXJzZXJDb25maWcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIElmIGFuIGFyY2hpdGVjdHVyZSBpcyBzcGVjaWZpZWQsIGl0cyBpbml0aWFsaXphdGlvbiBmdW5jdGlvbiBtYXlcbiAgLy8gcG9wdWxhdGUgdGhpcyBhcnJheSB3aXRoIGN1c3RvbSBwYXJzaW5nIGZ1bmN0aW9ucyB3aGljaCB3aWxsIGJlXG4gIC8vIHRyaWVkIGluIHRoZSBldmVudCB0aGF0IHRoZSBzdGFuZGFyZCBmdW5jdGlvbnMgZG8gbm90IGZpbmQgYSBtYXRjaC5cbiAgdmFyIGN1c3RvbSA9IFtdO1xuXG4gIC8vIFRoZSBzeW1ib2wgdXNlZCB0byBzdGFydCBhIGxpbmUgY29tbWVudCBjaGFuZ2VzIGJhc2VkIG9uIHRoZSB0YXJnZXRcbiAgLy8gYXJjaGl0ZWN0dXJlLlxuICAvLyBJZiBubyBhcmNoaXRlY3R1cmUgaXMgcGFzZWQgaW4gXCJwYXJzZXJDb25maWdcIiB0aGVuIG9ubHkgbXVsdGlsaW5lXG4gIC8vIGNvbW1lbnRzIHdpbGwgaGF2ZSBzeW50YXggc3VwcG9ydC5cbiAgdmFyIGxpbmVDb21tZW50U3RhcnRTeW1ib2wgPSBcIlwiO1xuXG4gIC8vIFRoZXNlIGRpcmVjdGl2ZXMgYXJlIGFyY2hpdGVjdHVyZSBpbmRlcGVuZGVudC5cbiAgLy8gTWFjaGluZSBzcGVjaWZpYyBkaXJlY3RpdmVzIHNob3VsZCBnbyBpbiB0aGVpciByZXNwZWN0aXZlXG4gIC8vIGFyY2hpdGVjdHVyZSBpbml0aWFsaXphdGlvbiBmdW5jdGlvbi5cbiAgLy8gUmVmZXJlbmNlOlxuICAvLyBodHRwOi8vc291cmNld2FyZS5vcmcvYmludXRpbHMvZG9jcy9hcy9Qc2V1ZG8tT3BzLmh0bWwjUHNldWRvLU9wc1xuICB2YXIgZGlyZWN0aXZlcyA9IHtcbiAgICBcIi5hYm9ydFwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuYWxpZ25cIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLmFsdG1hY3JvXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5hc2NpaVwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuYXNjaXpcIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLmJhbGlnblwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuYmFsaWdud1wiIDogXCJidWlsdGluXCIsXG4gICAgXCIuYmFsaWdubFwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuYnVuZGxlX2FsaWduX21vZGVcIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLmJ1bmRsZV9sb2NrXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5idW5kbGVfdW5sb2NrXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5ieXRlXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5jZmlfc3RhcnRwcm9jXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5jb21tXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5kYXRhXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5kZWZcIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLmRlc2NcIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLmRpbVwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuZG91YmxlXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5lamVjdFwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuZWxzZVwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuZWxzZWlmXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5lbmRcIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLmVuZGVmXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5lbmRmdW5jXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5lbmRpZlwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuZXF1XCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5lcXVpdlwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuZXF2XCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5lcnJcIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLmVycm9yXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5leGl0bVwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuZXh0ZXJuXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5mYWlsXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5maWxlXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5maWxsXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5mbG9hdFwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuZnVuY1wiIDogXCJidWlsdGluXCIsXG4gICAgXCIuZ2xvYmFsXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5nbnVfYXR0cmlidXRlXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5oaWRkZW5cIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLmh3b3JkXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5pZGVudFwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuaWZcIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLmluY2JpblwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuaW5jbHVkZVwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuaW50XCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5pbnRlcm5hbFwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuaXJwXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5pcnBjXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5sY29tbVwiIDogXCJidWlsdGluXCIsXG4gICAgXCIubGZsYWdzXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5saW5lXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5saW5rb25jZVwiIDogXCJidWlsdGluXCIsXG4gICAgXCIubGlzdFwiIDogXCJidWlsdGluXCIsXG4gICAgXCIubG5cIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLmxvY1wiIDogXCJidWlsdGluXCIsXG4gICAgXCIubG9jX21hcmtfbGFiZWxzXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5sb2NhbFwiIDogXCJidWlsdGluXCIsXG4gICAgXCIubG9uZ1wiIDogXCJidWlsdGluXCIsXG4gICAgXCIubWFjcm9cIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLm1yaVwiIDogXCJidWlsdGluXCIsXG4gICAgXCIubm9hbHRtYWNyb1wiIDogXCJidWlsdGluXCIsXG4gICAgXCIubm9saXN0XCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5vY3RhXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5vZmZzZXRcIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLm9yZ1wiIDogXCJidWlsdGluXCIsXG4gICAgXCIucDJhbGlnblwiIDogXCJidWlsdGluXCIsXG4gICAgXCIucG9wc2VjdGlvblwiIDogXCJidWlsdGluXCIsXG4gICAgXCIucHJldmlvdXNcIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLnByaW50XCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5wcm90ZWN0ZWRcIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLnBzaXplXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5wdXJnZW1cIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLnB1c2hzZWN0aW9uXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5xdWFkXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5yZWxvY1wiIDogXCJidWlsdGluXCIsXG4gICAgXCIucmVwdFwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuc2J0dGxcIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLnNjbFwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuc2VjdGlvblwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuc2V0XCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5zaG9ydFwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuc2luZ2xlXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5zaXplXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5za2lwXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5zbGViMTI4XCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5zcGFjZVwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuc3RhYlwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuc3RyaW5nXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5zdHJ1Y3RcIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLnN1YnNlY3Rpb25cIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLnN5bXZlclwiIDogXCJidWlsdGluXCIsXG4gICAgXCIudGFnXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi50ZXh0XCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi50aXRsZVwiIDogXCJidWlsdGluXCIsXG4gICAgXCIudHlwZVwiIDogXCJidWlsdGluXCIsXG4gICAgXCIudWxlYjEyOFwiIDogXCJidWlsdGluXCIsXG4gICAgXCIudmFsXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi52ZXJzaW9uXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi52dGFibGVfZW50cnlcIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLnZ0YWJsZV9pbmhlcml0XCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi53YXJuaW5nXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi53ZWFrXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi53ZWFrcmVmXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi53b3JkXCIgOiBcImJ1aWx0aW5cIlxuICB9O1xuXG4gIHZhciByZWdpc3RlcnMgPSB7fTtcblxuICBmdW5jdGlvbiB4ODYoX3BhcnNlckNvbmZpZykge1xuICAgIGxpbmVDb21tZW50U3RhcnRTeW1ib2wgPSBcIiNcIjtcblxuICAgIHJlZ2lzdGVycy5heCAgPSBcInZhcmlhYmxlXCI7XG4gICAgcmVnaXN0ZXJzLmVheCA9IFwidmFyaWFibGUtMlwiO1xuICAgIHJlZ2lzdGVycy5yYXggPSBcInZhcmlhYmxlLTNcIjtcblxuICAgIHJlZ2lzdGVycy5ieCAgPSBcInZhcmlhYmxlXCI7XG4gICAgcmVnaXN0ZXJzLmVieCA9IFwidmFyaWFibGUtMlwiO1xuICAgIHJlZ2lzdGVycy5yYnggPSBcInZhcmlhYmxlLTNcIjtcblxuICAgIHJlZ2lzdGVycy5jeCAgPSBcInZhcmlhYmxlXCI7XG4gICAgcmVnaXN0ZXJzLmVjeCA9IFwidmFyaWFibGUtMlwiO1xuICAgIHJlZ2lzdGVycy5yY3ggPSBcInZhcmlhYmxlLTNcIjtcblxuICAgIHJlZ2lzdGVycy5keCAgPSBcInZhcmlhYmxlXCI7XG4gICAgcmVnaXN0ZXJzLmVkeCA9IFwidmFyaWFibGUtMlwiO1xuICAgIHJlZ2lzdGVycy5yZHggPSBcInZhcmlhYmxlLTNcIjtcblxuICAgIHJlZ2lzdGVycy5zaSAgPSBcInZhcmlhYmxlXCI7XG4gICAgcmVnaXN0ZXJzLmVzaSA9IFwidmFyaWFibGUtMlwiO1xuICAgIHJlZ2lzdGVycy5yc2kgPSBcInZhcmlhYmxlLTNcIjtcblxuICAgIHJlZ2lzdGVycy5kaSAgPSBcInZhcmlhYmxlXCI7XG4gICAgcmVnaXN0ZXJzLmVkaSA9IFwidmFyaWFibGUtMlwiO1xuICAgIHJlZ2lzdGVycy5yZGkgPSBcInZhcmlhYmxlLTNcIjtcblxuICAgIHJlZ2lzdGVycy5zcCAgPSBcInZhcmlhYmxlXCI7XG4gICAgcmVnaXN0ZXJzLmVzcCA9IFwidmFyaWFibGUtMlwiO1xuICAgIHJlZ2lzdGVycy5yc3AgPSBcInZhcmlhYmxlLTNcIjtcblxuICAgIHJlZ2lzdGVycy5icCAgPSBcInZhcmlhYmxlXCI7XG4gICAgcmVnaXN0ZXJzLmVicCA9IFwidmFyaWFibGUtMlwiO1xuICAgIHJlZ2lzdGVycy5yYnAgPSBcInZhcmlhYmxlLTNcIjtcblxuICAgIHJlZ2lzdGVycy5pcCAgPSBcInZhcmlhYmxlXCI7XG4gICAgcmVnaXN0ZXJzLmVpcCA9IFwidmFyaWFibGUtMlwiO1xuICAgIHJlZ2lzdGVycy5yaXAgPSBcInZhcmlhYmxlLTNcIjtcblxuICAgIHJlZ2lzdGVycy5jcyAgPSBcImtleXdvcmRcIjtcbiAgICByZWdpc3RlcnMuZHMgID0gXCJrZXl3b3JkXCI7XG4gICAgcmVnaXN0ZXJzLnNzICA9IFwia2V5d29yZFwiO1xuICAgIHJlZ2lzdGVycy5lcyAgPSBcImtleXdvcmRcIjtcbiAgICByZWdpc3RlcnMuZnMgID0gXCJrZXl3b3JkXCI7XG4gICAgcmVnaXN0ZXJzLmdzICA9IFwia2V5d29yZFwiO1xuICB9XG5cbiAgZnVuY3Rpb24gYXJtdjYoX3BhcnNlckNvbmZpZykge1xuICAgIC8vIFJlZmVyZW5jZTpcbiAgICAvLyBodHRwOi8vaW5mb2NlbnRlci5hcm0uY29tL2hlbHAvdG9waWMvY29tLmFybS5kb2MucXJjMDAwMWwvUVJDMDAwMV9VQUwucGRmXG4gICAgLy8gaHR0cDovL2luZm9jZW50ZXIuYXJtLmNvbS9oZWxwL3RvcGljL2NvbS5hcm0uZG9jLmRkaTAzMDFoL0RESTAzMDFIX2FybTExNzZqemZzX3IwcDdfdHJtLnBkZlxuICAgIGxpbmVDb21tZW50U3RhcnRTeW1ib2wgPSBcIkBcIjtcbiAgICBkaXJlY3RpdmVzLnN5bnRheCA9IFwiYnVpbHRpblwiO1xuXG4gICAgcmVnaXN0ZXJzLnIwICA9IFwidmFyaWFibGVcIjtcbiAgICByZWdpc3RlcnMucjEgID0gXCJ2YXJpYWJsZVwiO1xuICAgIHJlZ2lzdGVycy5yMiAgPSBcInZhcmlhYmxlXCI7XG4gICAgcmVnaXN0ZXJzLnIzICA9IFwidmFyaWFibGVcIjtcbiAgICByZWdpc3RlcnMucjQgID0gXCJ2YXJpYWJsZVwiO1xuICAgIHJlZ2lzdGVycy5yNSAgPSBcInZhcmlhYmxlXCI7XG4gICAgcmVnaXN0ZXJzLnI2ICA9IFwidmFyaWFibGVcIjtcbiAgICByZWdpc3RlcnMucjcgID0gXCJ2YXJpYWJsZVwiO1xuICAgIHJlZ2lzdGVycy5yOCAgPSBcInZhcmlhYmxlXCI7XG4gICAgcmVnaXN0ZXJzLnI5ICA9IFwidmFyaWFibGVcIjtcbiAgICByZWdpc3RlcnMucjEwID0gXCJ2YXJpYWJsZVwiO1xuICAgIHJlZ2lzdGVycy5yMTEgPSBcInZhcmlhYmxlXCI7XG4gICAgcmVnaXN0ZXJzLnIxMiA9IFwidmFyaWFibGVcIjtcblxuICAgIHJlZ2lzdGVycy5zcCAgPSBcInZhcmlhYmxlLTJcIjtcbiAgICByZWdpc3RlcnMubHIgID0gXCJ2YXJpYWJsZS0yXCI7XG4gICAgcmVnaXN0ZXJzLnBjICA9IFwidmFyaWFibGUtMlwiO1xuICAgIHJlZ2lzdGVycy5yMTMgPSByZWdpc3RlcnMuc3A7XG4gICAgcmVnaXN0ZXJzLnIxNCA9IHJlZ2lzdGVycy5scjtcbiAgICByZWdpc3RlcnMucjE1ID0gcmVnaXN0ZXJzLnBjO1xuXG4gICAgY3VzdG9tLnB1c2goZnVuY3Rpb24oY2gsIHN0cmVhbSkge1xuICAgICAgaWYgKGNoID09PSAnIycpIHtcbiAgICAgICAgc3RyZWFtLmVhdFdoaWxlKC9cXHcvKTtcbiAgICAgICAgcmV0dXJuIFwibnVtYmVyXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgYXJjaCA9IChwYXJzZXJDb25maWcuYXJjaGl0ZWN0dXJlIHx8IFwieDg2XCIpLnRvTG93ZXJDYXNlKCk7XG4gIGlmIChhcmNoID09PSBcIng4NlwiKSB7XG4gICAgeDg2KHBhcnNlckNvbmZpZyk7XG4gIH0gZWxzZSBpZiAoYXJjaCA9PT0gXCJhcm1cIiB8fCBhcmNoID09PSBcImFybXY2XCIpIHtcbiAgICBhcm12NihwYXJzZXJDb25maWcpO1xuICB9XG5cbiAgZnVuY3Rpb24gbmV4dFVudGlsVW5lc2NhcGVkKHN0cmVhbSwgZW5kKSB7XG4gICAgdmFyIGVzY2FwZWQgPSBmYWxzZSwgbmV4dDtcbiAgICB3aGlsZSAoKG5leHQgPSBzdHJlYW0ubmV4dCgpKSAhPSBudWxsKSB7XG4gICAgICBpZiAobmV4dCA9PT0gZW5kICYmICFlc2NhcGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGVzY2FwZWQgPSAhZXNjYXBlZCAmJiBuZXh0ID09PSBcIlxcXFxcIjtcbiAgICB9XG4gICAgcmV0dXJuIGVzY2FwZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBjbGlrZUNvbW1lbnQoc3RyZWFtLCBzdGF0ZSkge1xuICAgIHZhciBtYXliZUVuZCA9IGZhbHNlLCBjaDtcbiAgICB3aGlsZSAoKGNoID0gc3RyZWFtLm5leHQoKSkgIT0gbnVsbCkge1xuICAgICAgaWYgKGNoID09PSBcIi9cIiAmJiBtYXliZUVuZCkge1xuICAgICAgICBzdGF0ZS50b2tlbml6ZSA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgbWF5YmVFbmQgPSAoY2ggPT09IFwiKlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIFwiY29tbWVudFwiO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzdGFydFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRva2VuaXplOiBudWxsXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICB0b2tlbjogZnVuY3Rpb24oc3RyZWFtLCBzdGF0ZSkge1xuICAgICAgaWYgKHN0YXRlLnRva2VuaXplKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS50b2tlbml6ZShzdHJlYW0sIHN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0cmVhbS5lYXRTcGFjZSgpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3R5bGUsIGN1ciwgY2ggPSBzdHJlYW0ubmV4dCgpO1xuXG4gICAgICBpZiAoY2ggPT09IFwiL1wiKSB7XG4gICAgICAgIGlmIChzdHJlYW0uZWF0KFwiKlwiKSkge1xuICAgICAgICAgIHN0YXRlLnRva2VuaXplID0gY2xpa2VDb21tZW50O1xuICAgICAgICAgIHJldHVybiBjbGlrZUNvbW1lbnQoc3RyZWFtLCBzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNoID09PSBsaW5lQ29tbWVudFN0YXJ0U3ltYm9sKSB7XG4gICAgICAgIHN0cmVhbS5za2lwVG9FbmQoKTtcbiAgICAgICAgcmV0dXJuIFwiY29tbWVudFwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2ggPT09ICdcIicpIHtcbiAgICAgICAgbmV4dFVudGlsVW5lc2NhcGVkKHN0cmVhbSwgJ1wiJyk7XG4gICAgICAgIHJldHVybiBcInN0cmluZ1wiO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2ggPT09ICcuJykge1xuICAgICAgICBzdHJlYW0uZWF0V2hpbGUoL1xcdy8pO1xuICAgICAgICBjdXIgPSBzdHJlYW0uY3VycmVudCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHN0eWxlID0gZGlyZWN0aXZlc1tjdXJdO1xuICAgICAgICByZXR1cm4gc3R5bGUgfHwgbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoID09PSAnPScpIHtcbiAgICAgICAgc3RyZWFtLmVhdFdoaWxlKC9cXHcvKTtcbiAgICAgICAgcmV0dXJuIFwidGFnXCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaCA9PT0gJ3snKSB7XG4gICAgICAgIHJldHVybiBcImJyYWNrZXRcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoID09PSAnfScpIHtcbiAgICAgICAgcmV0dXJuIFwiYnJhY2tldFwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoL1xcZC8udGVzdChjaCkpIHtcbiAgICAgICAgaWYgKGNoID09PSBcIjBcIiAmJiBzdHJlYW0uZWF0KFwieFwiKSkge1xuICAgICAgICAgIHN0cmVhbS5lYXRXaGlsZSgvWzAtOWEtZkEtRl0vKTtcbiAgICAgICAgICByZXR1cm4gXCJudW1iZXJcIjtcbiAgICAgICAgfVxuICAgICAgICBzdHJlYW0uZWF0V2hpbGUoL1xcZC8pO1xuICAgICAgICByZXR1cm4gXCJudW1iZXJcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKC9cXHcvLnRlc3QoY2gpKSB7XG4gICAgICAgIHN0cmVhbS5lYXRXaGlsZSgvXFx3Lyk7XG4gICAgICAgIGlmIChzdHJlYW0uZWF0KFwiOlwiKSkge1xuICAgICAgICAgIHJldHVybiAndGFnJztcbiAgICAgICAgfVxuICAgICAgICBjdXIgPSBzdHJlYW0uY3VycmVudCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHN0eWxlID0gcmVnaXN0ZXJzW2N1cl07XG4gICAgICAgIHJldHVybiBzdHlsZSB8fCBudWxsO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1c3RvbS5sZW5ndGg7IGkrKykge1xuICAgICAgICBzdHlsZSA9IGN1c3RvbVtpXShjaCwgc3RyZWFtLCBzdGF0ZSk7XG4gICAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBsaW5lQ29tbWVudDogbGluZUNvbW1lbnRTdGFydFN5bWJvbCxcbiAgICBibG9ja0NvbW1lbnRTdGFydDogXCIvKlwiLFxuICAgIGJsb2NrQ29tbWVudEVuZDogXCIqL1wiXG4gIH07XG59KTtcblxufSk7XG4iLCIvLyAuLiBDb3B5cmlnaHQgKEMpIDIwMTcgQnJ5YW4gQS4gSm9uZXMuXHJcbi8vXHJcbi8vICAgIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEUtQm9vayBCaW5kZXIuXHJcbi8vXHJcbi8vICAgIEUtQm9vayBCaW5kZXIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdFxyXG4vLyAgICB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZVxyXG4vLyAgICBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pXHJcbi8vICAgIGFueSBsYXRlciB2ZXJzaW9uLlxyXG4vL1xyXG4vLyAgICBFLUJvb2sgQmluZGVyIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXHJcbi8vICAgIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXHJcbi8vICAgIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcclxuLy8gICAgZGV0YWlscy5cclxuLy9cclxuLy8gICAgWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYWxvbmdcclxuLy8gICAgd2l0aCBFLUJvb2sgQmluZGVyLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxyXG4vL1xyXG4vLyAuLiBoaWdobGlnaHQ6OiBqYXZhc2NyaXB0XHJcbi8vXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vIHxkb2NuYW1lfCAtIEphdmFTY3JpcHQgZnVuY3Rpb25zIHN1cHBvcnRpbmcgaW1tZWRpYXRlIGZlZWRiYWNrIHRvIGluLWJyb3dzZXIgcXVlc3Rpb25zXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBSdW5lc3RvbmVCYXNlIGZyb20gXCIuLi8uLi9jb21tb24vanMvcnVuZXN0b25lYmFzZVwiO1xyXG5pbXBvcnQgQ29kZU1pcnJvciBmcm9tIFwiY29kZW1pcnJvclwiO1xyXG5pbXBvcnQgXCJjb2RlbWlycm9yL21vZGUvZ2FzL2dhcy5qc1wiO1xyXG5pbXBvcnQgXCJjb2RlbWlycm9yL21vZGUvcHl0aG9uL3B5dGhvbi5qc1wiO1xyXG5pbXBvcnQgXCJjb2RlbWlycm9yL21vZGUvamF2YXNjcmlwdC9qYXZhc2NyaXB0LmpzXCI7XHJcbmltcG9ydCBcImNvZGVtaXJyb3IvbW9kZS9zcWwvc3FsLmpzXCI7XHJcbmltcG9ydCBcImNvZGVtaXJyb3IvbW9kZS9jbGlrZS9jbGlrZS5qc1wiO1xyXG5pbXBvcnQgXCJjb2RlbWlycm9yL21vZGUvb2N0YXZlL29jdGF2ZS5qc1wiO1xyXG5pbXBvcnQgXCJjb2RlbWlycm9yL2xpYi9jb2RlbWlycm9yLmNzc1wiO1xyXG5cclxuLy8gQ29uc3RydWN0b3JcclxuLy8gPT09PT09PT09PT1cclxuLy8gT2JqZWN0IGNvbnRhaW5pbmcgYWxsIGluc3RhbmNlcyBvZiBMUCBwcm9ibGVtcy4gKEkgYXNzdW1lIHRoZXJlIGlzIGp1c3Qgb25lIHBlciBwYWdlLilcclxud2luZG93LkxQTGlzdCA9IHt9O1xyXG5cclxuLy8gRklUQiBjb25zdHJ1Y3RvclxyXG5jbGFzcyBMUCBleHRlbmRzIFJ1bmVzdG9uZUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xyXG4gICAgICAgIHN1cGVyKG9wdHMpO1xyXG4gICAgICAgIHRoaXMudXNlUnVuZXN0b25lU2VydmljZXMgPSBvcHRzLnVzZVJ1bmVzdG9uZVNlcnZpY2VzO1xyXG4gICAgICAgIC8vIFN0b3JlIHRoZSBET00gZWxlbWVudCAodGhlIGlucHV0KSBmb3IgdGhlIFwiVGVzdFwiIGJ1dHRvbi5cclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBvcHRzLm9yaWc7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYgPSB0aGlzLmVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5kaXZpZCA9IHRoaXMuZWxlbWVudC5pZDtcclxuICAgICAgICAvLyBTdG9yZSB0aGUgRE9NIGVsZW1lbnQgKHRoZSB0ZXh0YXJlYSkgd2hlcmUgY29tcGlsZSByZXN1bHRzIHdpbGwgYmUgZGlzcGxheWVkLlxyXG4gICAgICAgIHRoaXMucmVzdWx0RWxlbWVudCA9ICQodGhpcy5lbGVtZW50KS5zaWJsaW5ncyhcInRleHRhcmVhXCIpO1xyXG4gICAgICAgIC8vIFN0b3JlIHRoZSBET00gZWxlbWVudCAoYSBzcGFuKSB3aGVyZSBmZWVkYmFjayB3aWxsIGJlIGRpc3BsYXllZC5cclxuICAgICAgICB0aGlzLmZlZWRiYWNrRWxlbWVudCA9ICQodGhpcy5lbGVtZW50KS5zaWJsaW5ncyhcImRpdlwiKTtcclxuICAgICAgICAvLyBVc2UgYSBuaWNlIGVkaXRvci5cclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy50ZXh0QXJlYXMgPSBbXTtcclxuICAgICAgICAkKFwiLmNvZGVfc25pcHBldFwiKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xyXG4gICAgICAgICAgICBsZXQgZWRpdG9yID0gQ29kZU1pcnJvci5mcm9tVGV4dEFyZWEoZWxlbWVudCwge1xyXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtb2RlOiAkKHRoYXQuZWxlbWVudCkuYXR0cihcImRhdGEtbGFuZ1wiKSxcclxuICAgICAgICAgICAgICAgIGluZGVudFVuaXQ6IDQsXHJcbiAgICAgICAgICAgICAgICBtYXRjaEJyYWNrZXRzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b01hdGNoUGFyZW5zOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFLZXlzOiB7IFRhYjogXCJpbmRlbnRNb3JlXCIsIFwiU2hpZnQtVGFiXCI6IFwiaW5kZW50TGVzc1wiIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBNYWtlIHRoZSBlZGl0b3IgcmVzaXphYmxlLlxyXG4gICAgICAgICAgICAkKGVkaXRvci5nZXRXcmFwcGVyRWxlbWVudCgpKS5yZXNpemFibGUoe1xyXG4gICAgICAgICAgICAgICAgcmVzaXplOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdG9yLnNldFNpemUoJCh0aGlzKS53aWR0aCgpLCAkKHRoaXMpLmhlaWdodCgpKTtcclxuICAgICAgICAgICAgICAgICAgICBlZGl0b3IucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIEtlZXAgdHJhY2sgb2YgaXQuXHJcbiAgICAgICAgICAgIHRoYXQudGV4dEFyZWFzLnB1c2goZWRpdG9yKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBIYW5kbGUgY2xpY2tzIHRvIHRoZSBcIlNhdmUgYW5kIHJ1blwiIGJ1dHRvbi5cclxuICAgICAgICAkKHRoaXMuZWxlbWVudCkuY2xpY2soKGV2ZW50T2JqZWN0KSA9PiB0aGF0Lm9uU2F2ZUFuZFJ1bihldmVudE9iamVjdCkudGhlbihudWxsKSk7XHJcbiAgICAgICAgdGhpcy5jaGVja1NlcnZlcihcImxwX2J1aWxkXCIsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uU2F2ZUFuZFJ1bihfZXZlbnRPYmplY3QpIHtcclxuICAgICAgICAkKHRoaXMucmVzdWx0RWxlbWVudCkudmFsKFwiQnVpbGRpbmcuLi5cIik7XHJcbiAgICAgICAgJCh0aGlzLmZlZWRiYWNrRWxlbWVudCkudGV4dChcIlwiKS5hdHRyKFwiXCIpO1xyXG4gICAgICAgIC8vIFNpbmNlIHRoZSBTYXZlIGFuZCBydW4gYnV0dG9uIHdhcyBjbGlja2VkLCB3ZSBhc3N1bWUgdGhlIGNvZGUgc25pcHBldHMgaGF2ZSBiZWVuIGNoYW5nZWQ7IHRoZXJlZm9yZSwgZG9uJ3Qgc3RvcmUgYGBjb3JyZWN0YGAgb3IgYGBhbnN3ZXIucmVzdWx0U3RyaW5nYGAgYmVjYXVzZSB0aGV5IGFyZSBvdXQgb2YgZGF0ZS5cclxuICAgICAgICBsZXQgYW5zd2VyID0geyBjb2RlX3NuaXBwZXRzOiB0aGlzLnRleHRhcmVhc1RvRGF0YSgpIH07XHJcbiAgICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBhbnN3ZXI6IGFuc3dlcixcclxuICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIFN0b3JlIHRoZSBhbnN3ZXIgdGhhdCB0aGUgc2VydmVyIHJldHVybnMsIHdoaWNoIGluY2x1ZGVzIGFkZGl0aW9uYWwgZGF0YSAoY29ycmVjdC9pbmNvcnJlY3QsIGZlZWRiYWNrIGZyb20gdGhlIGJ1aWxkLCBldGMuKS5cclxuICAgICAgICBsZXQgc2VydmVyQW5zd2VyO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHNlcnZlckFuc3dlciA9IGF3YWl0IHRoaXMubG9nQm9va0V2ZW50KHtcclxuICAgICAgICAgICAgICAgIGV2ZW50OiBcImxwX2J1aWxkXCIsXHJcbiAgICAgICAgICAgICAgICAvLyBBbGwgdmFsdWVzIG11c3QgYmUgc3RyaW5ncywgb3IgdGhlIHJlc3VsdGluZyB2YWx1ZXMgb24gdGhlIHNlcnZlciBzaWRlIGNvbWUgb3V0IGNvbmZ1c2VkLlxyXG4gICAgICAgICAgICAgICAgYW5zd2VyOiBKU09OLnN0cmluZ2lmeShhbnN3ZXIpLFxyXG4gICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgcmVsYXRpdmUgcGF0aCB0byB0aGlzIHdlYiBwYWdlLiBTbGljZSBvZmYgdGhlIGxlYWRpbmcgYGAvYGAuXHJcbiAgICAgICAgICAgICAgICBwYXRoOiB3aW5kb3cubG9jYXRpb24uaHJlZlxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKGVCb29rQ29uZmlnLmFwcCwgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMSksXHJcbiAgICAgICAgICAgICAgICBkaXZfaWQ6IHRoaXMuZGl2aWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAkKHRoaXMuZmVlZGJhY2tFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgLnZhbChgRXJyb3IgY29udGFjdGluZyBzZXJ2ZXI6IHtlcnJ9LmApXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFRoZSBzZXJ2ZXIgZG9lc24ndCByZXR1cm4gdGhlIGBgY29kZV9zbmlwcGV0c2BgLCBmb3IgZWZmaWNpZW5jeS4gSW5jbHVkZSB0aG9zZS4gSWYgYW4gZXJyb3Igd2FzIHJldHVybmVkLCBub3RlIHRoYXQgdGhlcmUgaXMgbm8gYGBhbnN3ZXJgYCB5ZXQuXHJcbiAgICAgICAgaWYgKCEoXCJhbnN3ZXJcIiBpbiBzZXJ2ZXJBbnN3ZXIpKSB7XHJcbiAgICAgICAgICAgIHNlcnZlckFuc3dlcltcImFuc3dlclwiXSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXJ2ZXJBbnN3ZXJbXCJhbnN3ZXJcIl1bXCJjb2RlX3NuaXBwZXRzXCJdID0gdGhpcy50ZXh0YXJlYXNUb0RhdGEoKTtcclxuICAgICAgICB0aGlzLmRpc3BsYXlBbnN3ZXIoc2VydmVyQW5zd2VyKTtcclxuICAgICAgICB0aGlzLnNldExvY2FsU3RvcmFnZShzZXJ2ZXJBbnN3ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdpdmVuIGEgc2luZ2xlIGFuc3dlciwgZGlzcGxheSBpdC5cclxuICAgIGRpc3BsYXlBbnN3ZXIoZGF0YSkge1xyXG4gICAgICAgIGlmIChcImVycm9yc1wiIGluIGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gRGlzcGxheSBhbnkgc2VydmVyLXNpZGUgZXJyb3JzLiBJZiB0aGlzIGtleSBpcyBwcmVzZW50LCBvdGhlciBrZXlzIHdvbid0IGJlLlxyXG4gICAgICAgICAgICAkKHRoaXMuZmVlZGJhY2tFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgLnRleHQoZGF0YS5lcnJvcnMuam9pbihcIjxicj5cIikpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIERpc3BsYXkgYW5kIGNvbG9yLWNvZGUgdGhlIHJlc3VsdHMuXHJcbiAgICAgICAgICAgICQodGhpcy5yZXN1bHRFbGVtZW50KS52YWwoZGF0YS5hbnN3ZXIucmVzdWx0U3RyaW5nKTtcclxuICAgICAgICAgICAgaWYgKGRhdGEuY29ycmVjdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMuZmVlZGJhY2tFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0KFwiUmVzcG9uc2UgcmVjb3JkZWQuXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5jb3JyZWN0ID49IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzLmZlZWRiYWNrRWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICAudGV4dChcIkNvcnJlY3QuIEdyYWRlOiBcIiArIGRhdGEuY29ycmVjdCArIFwiJVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJhbGVydCBhbGVydC1zdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzLmZlZWRiYWNrRWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICAudGV4dChcIkluY29ycmVjdC4gR3JhZGU6IFwiICsgZGF0YS5jb3JyZWN0ICsgXCIlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBTY3JvbGwgdG8gdGhlIGJvdHRvbSBvZiB0aGUgcmVzdWx0cy5cclxuICAgICAgICAgICAgJCh0aGlzLnJlc3VsdEVsZW1lbnQpLnNjcm9sbFRvcCh0aGlzLnJlc3VsdEVsZW1lbnRbMF0uc2Nyb2xsSGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBTdG9yZSB0aGUgY29udGVudHMgb2YgZWFjaCB0ZXh0YXJlYSBpbnRvIGFuIGFycmF5IG9mIHN0cmluZ3MuXHJcbiAgICB0ZXh0YXJlYXNUb0RhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuICQubWFwKHRoaXMudGV4dEFyZWFzLCBmdW5jdGlvbiAob2JqLCBpbmRleCkge1xyXG4gICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9jb2RlbWlycm9yLm5ldC9kb2MvbWFudWFsLmh0bWwjYXBpLlxyXG4gICAgICAgICAgICByZXR1cm4gb2JqLmdldFZhbHVlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBTdG9yZSBhbiBhcnJheSBvZiBzdHJpbmdzIGluIGBgZGF0YS5jb2RlX3NuaXBwZXRzYGAgaW50byBlYWNoIHRleHRhcmVhLlxyXG4gICAgZGF0YVRvVGV4dGFyZWFzKGRhdGEpIHtcclxuICAgICAgICAvLyBGaW5kIGFsbCBjb2RlIHNuaXBwZXQgdGV4dGFyZWFzLlxyXG4gICAgICAgICQodGhpcy50ZXh0QXJlYXMpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAvLyBTaWxlbnRseSBpZ25vcmUgaWYgYGBkYXRhLmFuc3dlci5jb2RlX3NuaXBwZXRzYGAgb3IgYGBkYXRhLmFuc3dlci5jb2RlX3NuaXBwZXRzW2luZGV4XWBgIGlzbid0IGRlZmluZWQuXHJcbiAgICAgICAgICAgIHZhbHVlLnNldFZhbHVlKChkYXRhLmFuc3dlci5jb2RlX3NuaXBwZXRzIHx8IFwiXCIpW2luZGV4XSB8fCBcIlwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIFJlc3RvcmUgYW5zd2VycyBmcm9tIHN0b3JhZ2UgcmV0cmlldmFsIGRvbmUgaW4gUnVuZXN0b25lQmFzZS5cclxuICAgIHJlc3RvcmVBbnN3ZXJzKGRhdGEpIHtcclxuICAgICAgICB0aGlzLmRhdGFUb1RleHRhcmVhcyhkYXRhKTtcclxuICAgICAgICB0aGlzLmRpc3BsYXlBbnN3ZXIoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBjaGVja0xvY2FsU3RvcmFnZSgpIHtcclxuICAgICAgICAvLyBMb2FkcyBwcmV2aW91cyBhbnN3ZXJzIGZyb20gbG9jYWwgc3RvcmFnZSBpZiB0aGV5IGV4aXN0LlxyXG4gICAgICAgIHZhciBzdG9yZWREYXRhO1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5sb2NhbFN0b3JhZ2VLZXkoKTtcclxuICAgICAgICAgICAgdmFyIGV4ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgaWYgKGV4ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlZERhdGEgPSBKU09OLnBhcnNlKGV4KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVycm9yIHdoaWxlIHBhcnNpbmc7IGxpa2VseSBkdWUgdG8gYmFkIHZhbHVlIHN0b3JlZCBpbiBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0b3JlQW5zd2VycyhzdG9yZWREYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldExvY2FsU3RvcmFnZShkYXRhKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkoKSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBJbml0aWFsaXphdGlvblxyXG4vLyA9PT09PT09PT09PT09PVxyXG4vLyBGaW5kIHRoZSBjdXN0b20gSFRNTCB0YWdzIGFuZCBleGVjdXRlIG91ciBjb2RlIG9uIHRoZW0uXHJcbiQoZG9jdW1lbnQpLmJpbmQoXCJydW5lc3RvbmU6bG9naW4tY29tcGxldGVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIltkYXRhLWNvbXBvbmVudD1scF9idWlsZF1cIikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBMUExpc3RbdGhpcy5pZF0gPSBuZXcgTFAoe1xyXG4gICAgICAgICAgICAgICAgb3JpZzogdGhpcyxcclxuICAgICAgICAgICAgICAgIHVzZVJ1bmVzdG9uZVNlcnZpY2VzOiBlQm9va0NvbmZpZy51c2VSdW5lc3RvbmVTZXJ2aWNlcyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciByZW5kZXJpbmcgTFAgUHJvYmxlbSAke3RoaXMuaWR9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9IHt9O1xyXG59XHJcbndpbmRvdy5jb21wb25lbnRfZmFjdG9yeVtcImxwX2J1aWxkXCJdID0gZnVuY3Rpb24gKG9wdHMpIHtcclxuICAgIHJldHVybiBuZXcgTFAob3B0cyk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=