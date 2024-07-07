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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL2NvZGVtaXJyb3IvbW9kZS9nYXMvZ2FzLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvbHAvanMvbHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxJQUF1RDtBQUM3RCxRQUFRLG1CQUFPLENBQUMsZ0NBQXNCO0FBQ3RDLE9BQU8sRUFHYTtBQUNwQixDQUFDO0FBQ0Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsbUJBQW1CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hWRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUU2QztBQUN0QjtBQUNBO0FBQ007QUFDUTtBQUNkO0FBQ0k7QUFDRTtBQUNIOztBQUV2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQiw2REFBYTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsOERBQXVCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsK0NBQStDO0FBQzNFLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9HQUFvRztBQUNwRyxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSxnREFBZ0QsSUFBSTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxzREFBc0QsUUFBUTtBQUM5RDtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJydW5lc3RvbmVfbHBfanNfbHBfanMuYnVuZGxlLmpzP3Y9YTA5MGQxOWRhMzdhM2UwZDFiNzMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb2RlTWlycm9yLCBjb3B5cmlnaHQgKGMpIGJ5IE1hcmlqbiBIYXZlcmJla2UgYW5kIG90aGVyc1xuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgYW4gTUlUIGxpY2Vuc2U6IGh0dHBzOi8vY29kZW1pcnJvci5uZXQvTElDRU5TRVxuXG4oZnVuY3Rpb24obW9kKSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUgPT0gXCJvYmplY3RcIikgLy8gQ29tbW9uSlNcbiAgICBtb2QocmVxdWlyZShcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCIpKTtcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkgLy8gQU1EXG4gICAgZGVmaW5lKFtcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCJdLCBtb2QpO1xuICBlbHNlIC8vIFBsYWluIGJyb3dzZXIgZW52XG4gICAgbW9kKENvZGVNaXJyb3IpO1xufSkoZnVuY3Rpb24oQ29kZU1pcnJvcikge1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbkNvZGVNaXJyb3IuZGVmaW5lTW9kZShcImdhc1wiLCBmdW5jdGlvbihfY29uZmlnLCBwYXJzZXJDb25maWcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIElmIGFuIGFyY2hpdGVjdHVyZSBpcyBzcGVjaWZpZWQsIGl0cyBpbml0aWFsaXphdGlvbiBmdW5jdGlvbiBtYXlcbiAgLy8gcG9wdWxhdGUgdGhpcyBhcnJheSB3aXRoIGN1c3RvbSBwYXJzaW5nIGZ1bmN0aW9ucyB3aGljaCB3aWxsIGJlXG4gIC8vIHRyaWVkIGluIHRoZSBldmVudCB0aGF0IHRoZSBzdGFuZGFyZCBmdW5jdGlvbnMgZG8gbm90IGZpbmQgYSBtYXRjaC5cbiAgdmFyIGN1c3RvbSA9IFtdO1xuXG4gIC8vIFRoZSBzeW1ib2wgdXNlZCB0byBzdGFydCBhIGxpbmUgY29tbWVudCBjaGFuZ2VzIGJhc2VkIG9uIHRoZSB0YXJnZXRcbiAgLy8gYXJjaGl0ZWN0dXJlLlxuICAvLyBJZiBubyBhcmNoaXRlY3R1cmUgaXMgcGFzZWQgaW4gXCJwYXJzZXJDb25maWdcIiB0aGVuIG9ubHkgbXVsdGlsaW5lXG4gIC8vIGNvbW1lbnRzIHdpbGwgaGF2ZSBzeW50YXggc3VwcG9ydC5cbiAgdmFyIGxpbmVDb21tZW50U3RhcnRTeW1ib2wgPSBcIlwiO1xuXG4gIC8vIFRoZXNlIGRpcmVjdGl2ZXMgYXJlIGFyY2hpdGVjdHVyZSBpbmRlcGVuZGVudC5cbiAgLy8gTWFjaGluZSBzcGVjaWZpYyBkaXJlY3RpdmVzIHNob3VsZCBnbyBpbiB0aGVpciByZXNwZWN0aXZlXG4gIC8vIGFyY2hpdGVjdHVyZSBpbml0aWFsaXphdGlvbiBmdW5jdGlvbi5cbiAgLy8gUmVmZXJlbmNlOlxuICAvLyBodHRwOi8vc291cmNld2FyZS5vcmcvYmludXRpbHMvZG9jcy9hcy9Qc2V1ZG8tT3BzLmh0bWwjUHNldWRvLU9wc1xuICB2YXIgZGlyZWN0aXZlcyA9IHtcbiAgICBcIi5hYm9ydFwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuYWxpZ25cIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLmFsdG1hY3JvXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5hc2NpaVwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuYXNjaXpcIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLmJhbGlnblwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuYmFsaWdud1wiIDogXCJidWlsdGluXCIsXG4gICAgXCIuYmFsaWdubFwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuYnVuZGxlX2FsaWduX21vZGVcIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLmJ1bmRsZV9sb2NrXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5idW5kbGVfdW5sb2NrXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5ieXRlXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5jZmlfc3RhcnRwcm9jXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5jb21tXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5kYXRhXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5kZWZcIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLmRlc2NcIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLmRpbVwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuZG91YmxlXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5lamVjdFwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuZWxzZVwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuZWxzZWlmXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5lbmRcIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLmVuZGVmXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5lbmRmdW5jXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5lbmRpZlwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuZXF1XCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5lcXVpdlwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuZXF2XCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5lcnJcIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLmVycm9yXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5leGl0bVwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuZXh0ZXJuXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5mYWlsXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5maWxlXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5maWxsXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5mbG9hdFwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuZnVuY1wiIDogXCJidWlsdGluXCIsXG4gICAgXCIuZ2xvYmFsXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5nbnVfYXR0cmlidXRlXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5oaWRkZW5cIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLmh3b3JkXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5pZGVudFwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuaWZcIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLmluY2JpblwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuaW5jbHVkZVwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuaW50XCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5pbnRlcm5hbFwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuaXJwXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5pcnBjXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5sY29tbVwiIDogXCJidWlsdGluXCIsXG4gICAgXCIubGZsYWdzXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5saW5lXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5saW5rb25jZVwiIDogXCJidWlsdGluXCIsXG4gICAgXCIubGlzdFwiIDogXCJidWlsdGluXCIsXG4gICAgXCIubG5cIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLmxvY1wiIDogXCJidWlsdGluXCIsXG4gICAgXCIubG9jX21hcmtfbGFiZWxzXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5sb2NhbFwiIDogXCJidWlsdGluXCIsXG4gICAgXCIubG9uZ1wiIDogXCJidWlsdGluXCIsXG4gICAgXCIubWFjcm9cIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLm1yaVwiIDogXCJidWlsdGluXCIsXG4gICAgXCIubm9hbHRtYWNyb1wiIDogXCJidWlsdGluXCIsXG4gICAgXCIubm9saXN0XCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5vY3RhXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5vZmZzZXRcIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLm9yZ1wiIDogXCJidWlsdGluXCIsXG4gICAgXCIucDJhbGlnblwiIDogXCJidWlsdGluXCIsXG4gICAgXCIucG9wc2VjdGlvblwiIDogXCJidWlsdGluXCIsXG4gICAgXCIucHJldmlvdXNcIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLnByaW50XCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5wcm90ZWN0ZWRcIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLnBzaXplXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5wdXJnZW1cIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLnB1c2hzZWN0aW9uXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5xdWFkXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5yZWxvY1wiIDogXCJidWlsdGluXCIsXG4gICAgXCIucmVwdFwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuc2J0dGxcIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLnNjbFwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuc2VjdGlvblwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuc2V0XCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5zaG9ydFwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuc2luZ2xlXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5zaXplXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5za2lwXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5zbGViMTI4XCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5zcGFjZVwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuc3RhYlwiIDogXCJidWlsdGluXCIsXG4gICAgXCIuc3RyaW5nXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi5zdHJ1Y3RcIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLnN1YnNlY3Rpb25cIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLnN5bXZlclwiIDogXCJidWlsdGluXCIsXG4gICAgXCIudGFnXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi50ZXh0XCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi50aXRsZVwiIDogXCJidWlsdGluXCIsXG4gICAgXCIudHlwZVwiIDogXCJidWlsdGluXCIsXG4gICAgXCIudWxlYjEyOFwiIDogXCJidWlsdGluXCIsXG4gICAgXCIudmFsXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi52ZXJzaW9uXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi52dGFibGVfZW50cnlcIiA6IFwiYnVpbHRpblwiLFxuICAgIFwiLnZ0YWJsZV9pbmhlcml0XCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi53YXJuaW5nXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi53ZWFrXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi53ZWFrcmVmXCIgOiBcImJ1aWx0aW5cIixcbiAgICBcIi53b3JkXCIgOiBcImJ1aWx0aW5cIlxuICB9O1xuXG4gIHZhciByZWdpc3RlcnMgPSB7fTtcblxuICBmdW5jdGlvbiB4ODYoX3BhcnNlckNvbmZpZykge1xuICAgIGxpbmVDb21tZW50U3RhcnRTeW1ib2wgPSBcIiNcIjtcblxuICAgIHJlZ2lzdGVycy5heCAgPSBcInZhcmlhYmxlXCI7XG4gICAgcmVnaXN0ZXJzLmVheCA9IFwidmFyaWFibGUtMlwiO1xuICAgIHJlZ2lzdGVycy5yYXggPSBcInZhcmlhYmxlLTNcIjtcblxuICAgIHJlZ2lzdGVycy5ieCAgPSBcInZhcmlhYmxlXCI7XG4gICAgcmVnaXN0ZXJzLmVieCA9IFwidmFyaWFibGUtMlwiO1xuICAgIHJlZ2lzdGVycy5yYnggPSBcInZhcmlhYmxlLTNcIjtcblxuICAgIHJlZ2lzdGVycy5jeCAgPSBcInZhcmlhYmxlXCI7XG4gICAgcmVnaXN0ZXJzLmVjeCA9IFwidmFyaWFibGUtMlwiO1xuICAgIHJlZ2lzdGVycy5yY3ggPSBcInZhcmlhYmxlLTNcIjtcblxuICAgIHJlZ2lzdGVycy5keCAgPSBcInZhcmlhYmxlXCI7XG4gICAgcmVnaXN0ZXJzLmVkeCA9IFwidmFyaWFibGUtMlwiO1xuICAgIHJlZ2lzdGVycy5yZHggPSBcInZhcmlhYmxlLTNcIjtcblxuICAgIHJlZ2lzdGVycy5zaSAgPSBcInZhcmlhYmxlXCI7XG4gICAgcmVnaXN0ZXJzLmVzaSA9IFwidmFyaWFibGUtMlwiO1xuICAgIHJlZ2lzdGVycy5yc2kgPSBcInZhcmlhYmxlLTNcIjtcblxuICAgIHJlZ2lzdGVycy5kaSAgPSBcInZhcmlhYmxlXCI7XG4gICAgcmVnaXN0ZXJzLmVkaSA9IFwidmFyaWFibGUtMlwiO1xuICAgIHJlZ2lzdGVycy5yZGkgPSBcInZhcmlhYmxlLTNcIjtcblxuICAgIHJlZ2lzdGVycy5zcCAgPSBcInZhcmlhYmxlXCI7XG4gICAgcmVnaXN0ZXJzLmVzcCA9IFwidmFyaWFibGUtMlwiO1xuICAgIHJlZ2lzdGVycy5yc3AgPSBcInZhcmlhYmxlLTNcIjtcblxuICAgIHJlZ2lzdGVycy5icCAgPSBcInZhcmlhYmxlXCI7XG4gICAgcmVnaXN0ZXJzLmVicCA9IFwidmFyaWFibGUtMlwiO1xuICAgIHJlZ2lzdGVycy5yYnAgPSBcInZhcmlhYmxlLTNcIjtcblxuICAgIHJlZ2lzdGVycy5pcCAgPSBcInZhcmlhYmxlXCI7XG4gICAgcmVnaXN0ZXJzLmVpcCA9IFwidmFyaWFibGUtMlwiO1xuICAgIHJlZ2lzdGVycy5yaXAgPSBcInZhcmlhYmxlLTNcIjtcblxuICAgIHJlZ2lzdGVycy5jcyAgPSBcImtleXdvcmRcIjtcbiAgICByZWdpc3RlcnMuZHMgID0gXCJrZXl3b3JkXCI7XG4gICAgcmVnaXN0ZXJzLnNzICA9IFwia2V5d29yZFwiO1xuICAgIHJlZ2lzdGVycy5lcyAgPSBcImtleXdvcmRcIjtcbiAgICByZWdpc3RlcnMuZnMgID0gXCJrZXl3b3JkXCI7XG4gICAgcmVnaXN0ZXJzLmdzICA9IFwia2V5d29yZFwiO1xuICB9XG5cbiAgZnVuY3Rpb24gYXJtdjYoX3BhcnNlckNvbmZpZykge1xuICAgIC8vIFJlZmVyZW5jZTpcbiAgICAvLyBodHRwOi8vaW5mb2NlbnRlci5hcm0uY29tL2hlbHAvdG9waWMvY29tLmFybS5kb2MucXJjMDAwMWwvUVJDMDAwMV9VQUwucGRmXG4gICAgLy8gaHR0cDovL2luZm9jZW50ZXIuYXJtLmNvbS9oZWxwL3RvcGljL2NvbS5hcm0uZG9jLmRkaTAzMDFoL0RESTAzMDFIX2FybTExNzZqemZzX3IwcDdfdHJtLnBkZlxuICAgIGxpbmVDb21tZW50U3RhcnRTeW1ib2wgPSBcIkBcIjtcbiAgICBkaXJlY3RpdmVzLnN5bnRheCA9IFwiYnVpbHRpblwiO1xuXG4gICAgcmVnaXN0ZXJzLnIwICA9IFwidmFyaWFibGVcIjtcbiAgICByZWdpc3RlcnMucjEgID0gXCJ2YXJpYWJsZVwiO1xuICAgIHJlZ2lzdGVycy5yMiAgPSBcInZhcmlhYmxlXCI7XG4gICAgcmVnaXN0ZXJzLnIzICA9IFwidmFyaWFibGVcIjtcbiAgICByZWdpc3RlcnMucjQgID0gXCJ2YXJpYWJsZVwiO1xuICAgIHJlZ2lzdGVycy5yNSAgPSBcInZhcmlhYmxlXCI7XG4gICAgcmVnaXN0ZXJzLnI2ICA9IFwidmFyaWFibGVcIjtcbiAgICByZWdpc3RlcnMucjcgID0gXCJ2YXJpYWJsZVwiO1xuICAgIHJlZ2lzdGVycy5yOCAgPSBcInZhcmlhYmxlXCI7XG4gICAgcmVnaXN0ZXJzLnI5ICA9IFwidmFyaWFibGVcIjtcbiAgICByZWdpc3RlcnMucjEwID0gXCJ2YXJpYWJsZVwiO1xuICAgIHJlZ2lzdGVycy5yMTEgPSBcInZhcmlhYmxlXCI7XG4gICAgcmVnaXN0ZXJzLnIxMiA9IFwidmFyaWFibGVcIjtcblxuICAgIHJlZ2lzdGVycy5zcCAgPSBcInZhcmlhYmxlLTJcIjtcbiAgICByZWdpc3RlcnMubHIgID0gXCJ2YXJpYWJsZS0yXCI7XG4gICAgcmVnaXN0ZXJzLnBjICA9IFwidmFyaWFibGUtMlwiO1xuICAgIHJlZ2lzdGVycy5yMTMgPSByZWdpc3RlcnMuc3A7XG4gICAgcmVnaXN0ZXJzLnIxNCA9IHJlZ2lzdGVycy5scjtcbiAgICByZWdpc3RlcnMucjE1ID0gcmVnaXN0ZXJzLnBjO1xuXG4gICAgY3VzdG9tLnB1c2goZnVuY3Rpb24oY2gsIHN0cmVhbSkge1xuICAgICAgaWYgKGNoID09PSAnIycpIHtcbiAgICAgICAgc3RyZWFtLmVhdFdoaWxlKC9cXHcvKTtcbiAgICAgICAgcmV0dXJuIFwibnVtYmVyXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgYXJjaCA9IChwYXJzZXJDb25maWcuYXJjaGl0ZWN0dXJlIHx8IFwieDg2XCIpLnRvTG93ZXJDYXNlKCk7XG4gIGlmIChhcmNoID09PSBcIng4NlwiKSB7XG4gICAgeDg2KHBhcnNlckNvbmZpZyk7XG4gIH0gZWxzZSBpZiAoYXJjaCA9PT0gXCJhcm1cIiB8fCBhcmNoID09PSBcImFybXY2XCIpIHtcbiAgICBhcm12NihwYXJzZXJDb25maWcpO1xuICB9XG5cbiAgZnVuY3Rpb24gbmV4dFVudGlsVW5lc2NhcGVkKHN0cmVhbSwgZW5kKSB7XG4gICAgdmFyIGVzY2FwZWQgPSBmYWxzZSwgbmV4dDtcbiAgICB3aGlsZSAoKG5leHQgPSBzdHJlYW0ubmV4dCgpKSAhPSBudWxsKSB7XG4gICAgICBpZiAobmV4dCA9PT0gZW5kICYmICFlc2NhcGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGVzY2FwZWQgPSAhZXNjYXBlZCAmJiBuZXh0ID09PSBcIlxcXFxcIjtcbiAgICB9XG4gICAgcmV0dXJuIGVzY2FwZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBjbGlrZUNvbW1lbnQoc3RyZWFtLCBzdGF0ZSkge1xuICAgIHZhciBtYXliZUVuZCA9IGZhbHNlLCBjaDtcbiAgICB3aGlsZSAoKGNoID0gc3RyZWFtLm5leHQoKSkgIT0gbnVsbCkge1xuICAgICAgaWYgKGNoID09PSBcIi9cIiAmJiBtYXliZUVuZCkge1xuICAgICAgICBzdGF0ZS50b2tlbml6ZSA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgbWF5YmVFbmQgPSAoY2ggPT09IFwiKlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIFwiY29tbWVudFwiO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzdGFydFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRva2VuaXplOiBudWxsXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICB0b2tlbjogZnVuY3Rpb24oc3RyZWFtLCBzdGF0ZSkge1xuICAgICAgaWYgKHN0YXRlLnRva2VuaXplKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS50b2tlbml6ZShzdHJlYW0sIHN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0cmVhbS5lYXRTcGFjZSgpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3R5bGUsIGN1ciwgY2ggPSBzdHJlYW0ubmV4dCgpO1xuXG4gICAgICBpZiAoY2ggPT09IFwiL1wiKSB7XG4gICAgICAgIGlmIChzdHJlYW0uZWF0KFwiKlwiKSkge1xuICAgICAgICAgIHN0YXRlLnRva2VuaXplID0gY2xpa2VDb21tZW50O1xuICAgICAgICAgIHJldHVybiBjbGlrZUNvbW1lbnQoc3RyZWFtLCBzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNoID09PSBsaW5lQ29tbWVudFN0YXJ0U3ltYm9sKSB7XG4gICAgICAgIHN0cmVhbS5za2lwVG9FbmQoKTtcbiAgICAgICAgcmV0dXJuIFwiY29tbWVudFwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2ggPT09ICdcIicpIHtcbiAgICAgICAgbmV4dFVudGlsVW5lc2NhcGVkKHN0cmVhbSwgJ1wiJyk7XG4gICAgICAgIHJldHVybiBcInN0cmluZ1wiO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2ggPT09ICcuJykge1xuICAgICAgICBzdHJlYW0uZWF0V2hpbGUoL1xcdy8pO1xuICAgICAgICBjdXIgPSBzdHJlYW0uY3VycmVudCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHN0eWxlID0gZGlyZWN0aXZlc1tjdXJdO1xuICAgICAgICByZXR1cm4gc3R5bGUgfHwgbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoID09PSAnPScpIHtcbiAgICAgICAgc3RyZWFtLmVhdFdoaWxlKC9cXHcvKTtcbiAgICAgICAgcmV0dXJuIFwidGFnXCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaCA9PT0gJ3snKSB7XG4gICAgICAgIHJldHVybiBcImJyYWNrZXRcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoID09PSAnfScpIHtcbiAgICAgICAgcmV0dXJuIFwiYnJhY2tldFwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoL1xcZC8udGVzdChjaCkpIHtcbiAgICAgICAgaWYgKGNoID09PSBcIjBcIiAmJiBzdHJlYW0uZWF0KFwieFwiKSkge1xuICAgICAgICAgIHN0cmVhbS5lYXRXaGlsZSgvWzAtOWEtZkEtRl0vKTtcbiAgICAgICAgICByZXR1cm4gXCJudW1iZXJcIjtcbiAgICAgICAgfVxuICAgICAgICBzdHJlYW0uZWF0V2hpbGUoL1xcZC8pO1xuICAgICAgICByZXR1cm4gXCJudW1iZXJcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKC9cXHcvLnRlc3QoY2gpKSB7XG4gICAgICAgIHN0cmVhbS5lYXRXaGlsZSgvXFx3Lyk7XG4gICAgICAgIGlmIChzdHJlYW0uZWF0KFwiOlwiKSkge1xuICAgICAgICAgIHJldHVybiAndGFnJztcbiAgICAgICAgfVxuICAgICAgICBjdXIgPSBzdHJlYW0uY3VycmVudCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHN0eWxlID0gcmVnaXN0ZXJzW2N1cl07XG4gICAgICAgIHJldHVybiBzdHlsZSB8fCBudWxsO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1c3RvbS5sZW5ndGg7IGkrKykge1xuICAgICAgICBzdHlsZSA9IGN1c3RvbVtpXShjaCwgc3RyZWFtLCBzdGF0ZSk7XG4gICAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBsaW5lQ29tbWVudDogbGluZUNvbW1lbnRTdGFydFN5bWJvbCxcbiAgICBibG9ja0NvbW1lbnRTdGFydDogXCIvKlwiLFxuICAgIGJsb2NrQ29tbWVudEVuZDogXCIqL1wiXG4gIH07XG59KTtcblxufSk7XG4iLCIvLyAuLiBDb3B5cmlnaHQgKEMpIDIwMTcgQnJ5YW4gQS4gSm9uZXMuXG4vL1xuLy8gICAgVGhpcyBmaWxlIGlzIHBhcnQgb2YgRS1Cb29rIEJpbmRlci5cbi8vXG4vLyAgICBFLUJvb2sgQmluZGVyIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXRcbi8vICAgIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlXG4vLyAgICBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvciAoYXQgeW91ciBvcHRpb24pXG4vLyAgICBhbnkgbGF0ZXIgdmVyc2lvbi5cbi8vXG4vLyAgICBFLUJvb2sgQmluZGVyIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4vLyAgICBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuLy8gICAgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuLy8gICAgZGV0YWlscy5cbi8vXG4vLyAgICBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhbG9uZ1xuLy8gICAgd2l0aCBFLUJvb2sgQmluZGVyLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuLy9cbi8vIC4uIGhpZ2hsaWdodDo6IGphdmFzY3JpcHRcbi8vXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gfGRvY25hbWV8IC0gSmF2YVNjcmlwdCBmdW5jdGlvbnMgc3VwcG9ydGluZyBpbW1lZGlhdGUgZmVlZGJhY2sgdG8gaW4tYnJvd3NlciBxdWVzdGlvbnNcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVuZXN0b25lQmFzZSBmcm9tIFwiLi4vLi4vY29tbW9uL2pzL3J1bmVzdG9uZWJhc2VcIjtcbmltcG9ydCBDb2RlTWlycm9yIGZyb20gXCJjb2RlbWlycm9yXCI7XG5pbXBvcnQgXCJjb2RlbWlycm9yL21vZGUvZ2FzL2dhcy5qc1wiO1xuaW1wb3J0IFwiY29kZW1pcnJvci9tb2RlL3B5dGhvbi9weXRob24uanNcIjtcbmltcG9ydCBcImNvZGVtaXJyb3IvbW9kZS9qYXZhc2NyaXB0L2phdmFzY3JpcHQuanNcIjtcbmltcG9ydCBcImNvZGVtaXJyb3IvbW9kZS9zcWwvc3FsLmpzXCI7XG5pbXBvcnQgXCJjb2RlbWlycm9yL21vZGUvY2xpa2UvY2xpa2UuanNcIjtcbmltcG9ydCBcImNvZGVtaXJyb3IvbW9kZS9vY3RhdmUvb2N0YXZlLmpzXCI7XG5pbXBvcnQgXCJjb2RlbWlycm9yL2xpYi9jb2RlbWlycm9yLmNzc1wiO1xuXG4vLyBDb25zdHJ1Y3RvclxuLy8gPT09PT09PT09PT1cbi8vIE9iamVjdCBjb250YWluaW5nIGFsbCBpbnN0YW5jZXMgb2YgTFAgcHJvYmxlbXMuIChJIGFzc3VtZSB0aGVyZSBpcyBqdXN0IG9uZSBwZXIgcGFnZS4pXG53aW5kb3cuTFBMaXN0ID0ge307XG5cbi8vIEZJVEIgY29uc3RydWN0b3JcbmNsYXNzIExQIGV4dGVuZHMgUnVuZXN0b25lQmFzZSB7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcihvcHRzKTtcbiAgICAgICAgdGhpcy51c2VSdW5lc3RvbmVTZXJ2aWNlcyA9IG9wdHMudXNlUnVuZXN0b25lU2VydmljZXM7XG4gICAgICAgIC8vIFN0b3JlIHRoZSBET00gZWxlbWVudCAodGhlIGlucHV0KSBmb3IgdGhlIFwiVGVzdFwiIGJ1dHRvbi5cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gb3B0cy5vcmlnO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdiA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgdGhpcy5kaXZpZCA9IHRoaXMuZWxlbWVudC5pZDtcbiAgICAgICAgLy8gU3RvcmUgdGhlIERPTSBlbGVtZW50ICh0aGUgdGV4dGFyZWEpIHdoZXJlIGNvbXBpbGUgcmVzdWx0cyB3aWxsIGJlIGRpc3BsYXllZC5cbiAgICAgICAgdGhpcy5yZXN1bHRFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnQpLnNpYmxpbmdzKFwidGV4dGFyZWFcIik7XG4gICAgICAgIC8vIFN0b3JlIHRoZSBET00gZWxlbWVudCAoYSBzcGFuKSB3aGVyZSBmZWVkYmFjayB3aWxsIGJlIGRpc3BsYXllZC5cbiAgICAgICAgdGhpcy5mZWVkYmFja0VsZW1lbnQgPSAkKHRoaXMuZWxlbWVudCkuc2libGluZ3MoXCJkaXZcIik7XG4gICAgICAgIC8vIFVzZSBhIG5pY2UgZWRpdG9yLlxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIHRoaXMudGV4dEFyZWFzID0gW107XG4gICAgICAgICQoXCIuY29kZV9zbmlwcGV0XCIpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgZWRpdG9yID0gQ29kZU1pcnJvci5mcm9tVGV4dEFyZWEoZWxlbWVudCwge1xuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1vZGU6ICQodGhhdC5lbGVtZW50KS5hdHRyKFwiZGF0YS1sYW5nXCIpLFxuICAgICAgICAgICAgICAgIGluZGVudFVuaXQ6IDQsXG4gICAgICAgICAgICAgICAgbWF0Y2hCcmFja2V0czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvTWF0Y2hQYXJlbnM6IHRydWUsXG4gICAgICAgICAgICAgICAgZXh0cmFLZXlzOiB7IFRhYjogXCJpbmRlbnRNb3JlXCIsIFwiU2hpZnQtVGFiXCI6IFwiaW5kZW50TGVzc1wiIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIE1ha2UgdGhlIGVkaXRvciByZXNpemFibGUuXG4gICAgICAgICAgICAkKGVkaXRvci5nZXRXcmFwcGVyRWxlbWVudCgpKS5yZXNpemFibGUoe1xuICAgICAgICAgICAgICAgIHJlc2l6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBlZGl0b3Iuc2V0U2l6ZSgkKHRoaXMpLndpZHRoKCksICQodGhpcykuaGVpZ2h0KCkpO1xuICAgICAgICAgICAgICAgICAgICBlZGl0b3IucmVmcmVzaCgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIEtlZXAgdHJhY2sgb2YgaXQuXG4gICAgICAgICAgICB0aGF0LnRleHRBcmVhcy5wdXNoKGVkaXRvcik7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBIYW5kbGUgY2xpY2tzIHRvIHRoZSBcIlNhdmUgYW5kIHJ1blwiIGJ1dHRvbi5cbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLmNsaWNrKChldmVudE9iamVjdCkgPT4gdGhhdC5vblNhdmVBbmRSdW4oZXZlbnRPYmplY3QpLnRoZW4obnVsbCkpO1xuICAgICAgICB0aGlzLmNoZWNrU2VydmVyKFwibHBfYnVpbGRcIiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgb25TYXZlQW5kUnVuKF9ldmVudE9iamVjdCkge1xuICAgICAgICAkKHRoaXMucmVzdWx0RWxlbWVudCkudmFsKFwiQnVpbGRpbmcuLi5cIik7XG4gICAgICAgICQodGhpcy5mZWVkYmFja0VsZW1lbnQpLnRleHQoXCJcIikuYXR0cihcIlwiKTtcbiAgICAgICAgLy8gU2luY2UgdGhlIFNhdmUgYW5kIHJ1biBidXR0b24gd2FzIGNsaWNrZWQsIHdlIGFzc3VtZSB0aGUgY29kZSBzbmlwcGV0cyBoYXZlIGJlZW4gY2hhbmdlZDsgdGhlcmVmb3JlLCBkb24ndCBzdG9yZSBgYGNvcnJlY3RgYCBvciBgYGFuc3dlci5yZXN1bHRTdHJpbmdgYCBiZWNhdXNlIHRoZXkgYXJlIG91dCBvZiBkYXRlLlxuICAgICAgICBsZXQgYW5zd2VyID0geyBjb2RlX3NuaXBwZXRzOiB0aGlzLnRleHRhcmVhc1RvRGF0YSgpIH07XG4gICAgICAgIHRoaXMuc2V0TG9jYWxTdG9yYWdlKHtcbiAgICAgICAgICAgIGFuc3dlcjogYW5zd2VyLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gU3RvcmUgdGhlIGFuc3dlciB0aGF0IHRoZSBzZXJ2ZXIgcmV0dXJucywgd2hpY2ggaW5jbHVkZXMgYWRkaXRpb25hbCBkYXRhIChjb3JyZWN0L2luY29ycmVjdCwgZmVlZGJhY2sgZnJvbSB0aGUgYnVpbGQsIGV0Yy4pLlxuICAgICAgICBsZXQgc2VydmVyQW5zd2VyO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2VydmVyQW5zd2VyID0gYXdhaXQgdGhpcy5sb2dCb29rRXZlbnQoe1xuICAgICAgICAgICAgICAgIGV2ZW50OiBcImxwX2J1aWxkXCIsXG4gICAgICAgICAgICAgICAgLy8gQWxsIHZhbHVlcyBtdXN0IGJlIHN0cmluZ3MsIG9yIHRoZSByZXN1bHRpbmcgdmFsdWVzIG9uIHRoZSBzZXJ2ZXIgc2lkZSBjb21lIG91dCBjb25mdXNlZC5cbiAgICAgICAgICAgICAgICBhbnN3ZXI6IEpTT04uc3RyaW5naWZ5KGFuc3dlciksXG4gICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgcmVsYXRpdmUgcGF0aCB0byB0aGlzIHdlYiBwYWdlLiBTbGljZSBvZmYgdGhlIGxlYWRpbmcgYGAvYGAuXG4gICAgICAgICAgICAgICAgcGF0aDogd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoZUJvb2tDb25maWcuYXBwLCBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMSksXG4gICAgICAgICAgICAgICAgZGl2X2lkOiB0aGlzLmRpdmlkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgJCh0aGlzLmZlZWRiYWNrRWxlbWVudClcbiAgICAgICAgICAgICAgICAudmFsKGBFcnJvciBjb250YWN0aW5nIHNlcnZlcjoge2Vycn0uYClcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRoZSBzZXJ2ZXIgZG9lc24ndCByZXR1cm4gdGhlIGBgY29kZV9zbmlwcGV0c2BgLCBmb3IgZWZmaWNpZW5jeS4gSW5jbHVkZSB0aG9zZS4gSWYgYW4gZXJyb3Igd2FzIHJldHVybmVkLCBub3RlIHRoYXQgdGhlcmUgaXMgbm8gYGBhbnN3ZXJgYCB5ZXQuXG4gICAgICAgIGlmICghKFwiYW5zd2VyXCIgaW4gc2VydmVyQW5zd2VyKSkge1xuICAgICAgICAgICAgc2VydmVyQW5zd2VyW1wiYW5zd2VyXCJdID0ge307XG4gICAgICAgIH1cbiAgICAgICAgc2VydmVyQW5zd2VyW1wiYW5zd2VyXCJdW1wiY29kZV9zbmlwcGV0c1wiXSA9IHRoaXMudGV4dGFyZWFzVG9EYXRhKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheUFuc3dlcihzZXJ2ZXJBbnN3ZXIpO1xuICAgICAgICB0aGlzLnNldExvY2FsU3RvcmFnZShzZXJ2ZXJBbnN3ZXIpO1xuICAgIH1cblxuICAgIC8vIEdpdmVuIGEgc2luZ2xlIGFuc3dlciwgZGlzcGxheSBpdC5cbiAgICBkaXNwbGF5QW5zd2VyKGRhdGEpIHtcbiAgICAgICAgaWYgKFwiZXJyb3JzXCIgaW4gZGF0YSkge1xuICAgICAgICAgICAgLy8gRGlzcGxheSBhbnkgc2VydmVyLXNpZGUgZXJyb3JzLiBJZiB0aGlzIGtleSBpcyBwcmVzZW50LCBvdGhlciBrZXlzIHdvbid0IGJlLlxuICAgICAgICAgICAgJCh0aGlzLmZlZWRiYWNrRWxlbWVudClcbiAgICAgICAgICAgICAgICAudGV4dChkYXRhLmVycm9ycy5qb2luKFwiPGJyPlwiKSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRGlzcGxheSBhbmQgY29sb3ItY29kZSB0aGUgcmVzdWx0cy5cbiAgICAgICAgICAgICQodGhpcy5yZXN1bHRFbGVtZW50KS52YWwoZGF0YS5hbnN3ZXIucmVzdWx0U3RyaW5nKTtcbiAgICAgICAgICAgIGlmIChkYXRhLmNvcnJlY3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICQodGhpcy5mZWVkYmFja0VsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0KFwiUmVzcG9uc2UgcmVjb3JkZWQuXCIpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJhbGVydCBhbGVydC1zdWNjZXNzXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLmNvcnJlY3QgPj0gMTAwKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLmZlZWRiYWNrRWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgLnRleHQoXCJDb3JyZWN0LiBHcmFkZTogXCIgKyBkYXRhLmNvcnJlY3QgKyBcIiVcIilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcy5mZWVkYmFja0VsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0KFwiSW5jb3JyZWN0LiBHcmFkZTogXCIgKyBkYXRhLmNvcnJlY3QgKyBcIiVcIilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNjcm9sbCB0byB0aGUgYm90dG9tIG9mIHRoZSByZXN1bHRzLlxuICAgICAgICAgICAgJCh0aGlzLnJlc3VsdEVsZW1lbnQpLnNjcm9sbFRvcCh0aGlzLnJlc3VsdEVsZW1lbnRbMF0uc2Nyb2xsSGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBTdG9yZSB0aGUgY29udGVudHMgb2YgZWFjaCB0ZXh0YXJlYSBpbnRvIGFuIGFycmF5IG9mIHN0cmluZ3MuXG4gICAgdGV4dGFyZWFzVG9EYXRhKCkge1xuICAgICAgICByZXR1cm4gJC5tYXAodGhpcy50ZXh0QXJlYXMsIGZ1bmN0aW9uIChvYmosIGluZGV4KSB7XG4gICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9jb2RlbWlycm9yLm5ldC9kb2MvbWFudWFsLmh0bWwjYXBpLlxuICAgICAgICAgICAgcmV0dXJuIG9iai5nZXRWYWx1ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gU3RvcmUgYW4gYXJyYXkgb2Ygc3RyaW5ncyBpbiBgYGRhdGEuY29kZV9zbmlwcGV0c2BgIGludG8gZWFjaCB0ZXh0YXJlYS5cbiAgICBkYXRhVG9UZXh0YXJlYXMoZGF0YSkge1xuICAgICAgICAvLyBGaW5kIGFsbCBjb2RlIHNuaXBwZXQgdGV4dGFyZWFzLlxuICAgICAgICAkKHRoaXMudGV4dEFyZWFzKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgIC8vIFNpbGVudGx5IGlnbm9yZSBpZiBgYGRhdGEuYW5zd2VyLmNvZGVfc25pcHBldHNgYCBvciBgYGRhdGEuYW5zd2VyLmNvZGVfc25pcHBldHNbaW5kZXhdYGAgaXNuJ3QgZGVmaW5lZC5cbiAgICAgICAgICAgIHZhbHVlLnNldFZhbHVlKChkYXRhLmFuc3dlci5jb2RlX3NuaXBwZXRzIHx8IFwiXCIpW2luZGV4XSB8fCBcIlwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIFJlc3RvcmUgYW5zd2VycyBmcm9tIHN0b3JhZ2UgcmV0cmlldmFsIGRvbmUgaW4gUnVuZXN0b25lQmFzZS5cbiAgICByZXN0b3JlQW5zd2VycyhkYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YVRvVGV4dGFyZWFzKGRhdGEpO1xuICAgICAgICB0aGlzLmRpc3BsYXlBbnN3ZXIoZGF0YSk7XG4gICAgfVxuICAgIGNoZWNrTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICAvLyBMb2FkcyBwcmV2aW91cyBhbnN3ZXJzIGZyb20gbG9jYWwgc3RvcmFnZSBpZiB0aGV5IGV4aXN0LlxuICAgICAgICB2YXIgc3RvcmVkRGF0YTtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5sb2NhbFN0b3JhZ2VLZXkoKTtcbiAgICAgICAgICAgIHZhciBleCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgICAgICBpZiAoZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZWREYXRhID0gSlNPTi5wYXJzZShleCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVycm9yIHdoaWxlIHBhcnNpbmc7IGxpa2VseSBkdWUgdG8gYmFkIHZhbHVlIHN0b3JlZCBpbiBzdG9yYWdlXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RvcmVBbnN3ZXJzKHN0b3JlZERhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldExvY2FsU3RvcmFnZShkYXRhKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KCksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9XG59XG5cbi8vIEluaXRpYWxpemF0aW9uXG4vLyA9PT09PT09PT09PT09PVxuLy8gRmluZCB0aGUgY3VzdG9tIEhUTUwgdGFncyBhbmQgZXhlY3V0ZSBvdXIgY29kZSBvbiB0aGVtLlxuJChkb2N1bWVudCkuYmluZChcInJ1bmVzdG9uZTpsb2dpbi1jb21wbGV0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIltkYXRhLWNvbXBvbmVudD1scF9idWlsZF1cIikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIExQTGlzdFt0aGlzLmlkXSA9IG5ldyBMUCh7XG4gICAgICAgICAgICAgICAgb3JpZzogdGhpcyxcbiAgICAgICAgICAgICAgICB1c2VSdW5lc3RvbmVTZXJ2aWNlczogZUJvb2tDb25maWcudXNlUnVuZXN0b25lU2VydmljZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3IgcmVuZGVyaW5nIExQIFByb2JsZW0gJHt0aGlzLmlkfWApO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuaWYgKHR5cGVvZiB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPSB7fTtcbn1cbndpbmRvdy5jb21wb25lbnRfZmFjdG9yeVtcImxwX2J1aWxkXCJdID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICByZXR1cm4gbmV3IExQKG9wdHMpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=