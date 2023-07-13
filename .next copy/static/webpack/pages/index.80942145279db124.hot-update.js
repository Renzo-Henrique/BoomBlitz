"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/board/key.js":
/*!*********************************!*\
  !*** ./components/board/key.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _calcularVariaveis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calcularVariaveis */ \"./components/calcularVariaveis.js\");\n/* harmony import */ var _hook_useKeyMoviment_UseKeyMoviment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hook/useKeyMoviment/UseKeyMoviment */ \"./components/hook/useKeyMoviment/UseKeyMoviment.js\");\n/* harmony import */ var _canvas_canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../canvas/canvas */ \"./components/canvas/canvas.js\");\n\n\n\n\n\nfunction MyKey(props) {\n    const initialPositionKey = {\n        x: props.position.x,\n        y: props.position.y,\n        key: props.key\n    };\n    const variaveis = (0,_calcularVariaveis__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    let TILE_CENTER = variaveis.TILE_CENTER_EGG;\n    let KEY_SIZE = variaveis.TILE_SIZE_EGG;\n    const moviment_key = (0,_hook_useKeyMoviment_UseKeyMoviment__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(initialPositionKey, initialPositionKey.key);\n    if (moviment_key.x == 0 && moviment_key.y == 0) {}\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            position: \"absolute\",\n            width: KEY_SIZE,\n            height: KEY_SIZE,\n            backgroundImage: 'url(\"assets/objects/key.png\")',\n            backgroundRepeat: \"no-repeat\",\n            backgroundSize: \"cover\",\n            /*Animacoes*/ animation: \"egg-animation-moviment 1s steps(4) infinite\",\n            /*animation: DEMON-animation-stand-by 1s steps(3) infinite;*/ /*animation: DEMON-animation-hurt 1s steps(3) infinite;*/ top: +TILE_CENTER + KEY_SIZE * moviment_key.y,\n            left: +TILE_CENTER + KEY_SIZE * moviment_key.x\n        }\n    }, void 0, false, {\n        fileName: \"/mnt/d/VSCODE/PI/Trabalho/BoomBlitz/components/board/key.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n}\n_c = MyKey;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyKey);\nvar _c;\n$RefreshReg$(_c, \"MyKey\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JvYXJkL2tleS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUM7QUFDVztBQUNjO0FBQ3pCO0FBR3pDLFNBQVNLLE1BQU1DLEtBQUs7SUFDaEIsTUFBTUMscUJBQXFCO1FBQ3ZCQyxHQUFHRixNQUFNRyxRQUFRLENBQUNELENBQUM7UUFDbkJFLEdBQUdKLE1BQU1HLFFBQVEsQ0FBQ0MsQ0FBQztRQUNuQkMsS0FBS0wsTUFBTUssR0FBRztJQUNsQjtJQUVELE1BQU1DLFlBQVlWLDhEQUFpQkE7SUFFbkMsSUFBSVcsY0FBY0QsVUFBVUUsZUFBZTtJQUUzQyxJQUFJQyxXQUFXSCxVQUFVSSxhQUFhO0lBRXRDLE1BQU1DLGVBQWVkLCtFQUFjQSxDQUFDSSxvQkFBb0JBLG1CQUFtQkksR0FBRztJQUU5RSxJQUFHTSxhQUFhVCxDQUFDLElBQUksS0FBS1MsYUFBYVAsQ0FBQyxJQUFJLEdBQUUsQ0FBQztJQUMvQyxxQkFDSyw4REFBQ1E7UUFDREMsT0FBTztZQUNIVixVQUFVO1lBQ1ZXLE9BQU9MO1lBQ1BNLFFBQVFOO1lBQ1JPLGlCQUFpQjtZQUNqQkMsa0JBQWtCO1lBQ2xCQyxnQkFBZ0I7WUFDaEIsV0FBVyxHQUNYQyxXQUFZO1lBQ1osMkRBQTJELEdBQzNELHVEQUF1RCxHQUN2REMsS0FBSyxDQUFDYixjQUFjRSxXQUFhRSxhQUFhUCxDQUFDO1lBQy9DaUIsTUFBTSxDQUFDZCxjQUFjRSxXQUFhRSxhQUFhVCxDQUFDO1FBRXBEOzs7Ozs7QUFTUjtLQXpDU0g7QUEwQ1QsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib2FyZC9rZXkuanM/ODcwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNhbGN1bGFyVmFyaWF2ZWlzIGZyb20gJy4uL2NhbGN1bGFyVmFyaWF2ZWlzJ1xuaW1wb3J0IFVzZUtleU1vdmltZW50IGZyb20gJy4uL2hvb2svdXNlS2V5TW92aW1lbnQvVXNlS2V5TW92aW1lbnQnXG4gaW1wb3J0IHtFY2FudmFzfSBmcm9tICcuLi9jYW52YXMvY2FudmFzJ1xuXG5cbmZ1bmN0aW9uIE15S2V5KHByb3BzKXtcbiAgICBjb25zdCBpbml0aWFsUG9zaXRpb25LZXkgPSB7XG4gICAgICAgIHg6IHByb3BzLnBvc2l0aW9uLngsXG4gICAgICAgIHk6IHByb3BzLnBvc2l0aW9uLnksXG4gICAgICAgIGtleTogcHJvcHMua2V5LFxuICAgIH07XG5cbiAgIGNvbnN0IHZhcmlhdmVpcyA9IGNhbGN1bGFyVmFyaWF2ZWlzKCk7XG5cbiAgIGxldCBUSUxFX0NFTlRFUiA9IHZhcmlhdmVpcy5USUxFX0NFTlRFUl9FR0c7XG5cbiAgIGxldCBLRVlfU0laRSA9IHZhcmlhdmVpcy5USUxFX1NJWkVfRUdHO1xuXG4gICBjb25zdCBtb3ZpbWVudF9rZXkgPSBVc2VLZXlNb3ZpbWVudChpbml0aWFsUG9zaXRpb25LZXksIGluaXRpYWxQb3NpdGlvbktleS5rZXkpO1xuXG4gICBpZihtb3ZpbWVudF9rZXkueCA9PSAwICYmIG1vdmltZW50X2tleS55ID09IDApe31cbiAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHdpZHRoOiBLRVlfU0laRSAsXG4gICAgICAgICAgICBoZWlnaHQ6IEtFWV9TSVpFICxcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImFzc2V0cy9vYmplY3RzL2tleS5wbmdcIiknLFxuICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICAgICAgLypBbmltYWNvZXMqL1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBgZWdnLWFuaW1hdGlvbi1tb3ZpbWVudCAxcyBzdGVwcyg0KSBpbmZpbml0ZWAsXG4gICAgICAgICAgICAvKmFuaW1hdGlvbjogREVNT04tYW5pbWF0aW9uLXN0YW5kLWJ5IDFzIHN0ZXBzKDMpIGluZmluaXRlOyovXG4gICAgICAgICAgICAvKmFuaW1hdGlvbjogREVNT04tYW5pbWF0aW9uLWh1cnQgMXMgc3RlcHMoMykgaW5maW5pdGU7Ki9cbiAgICAgICAgICAgIHRvcDogK1RJTEVfQ0VOVEVSICsgS0VZX1NJWkUgICogKG1vdmltZW50X2tleS55KSxcbiAgICAgICAgICAgIGxlZnQ6ICtUSUxFX0NFTlRFUiArIEtFWV9TSVpFICAqIChtb3ZpbWVudF9rZXkueCksXG4gICAgICAgICAgICAvLyB0cmFuc2Zvcm06IGBzY2FsZVgoJHttb3ZpbWVudF9zbGltZS5kaXJlY3Rpb24gPT09ICdSSUdIVCcgPyAxIDogLTF9KWAsXG4gICAgICAgIH19PlxuICAgICAgIDwvZGl2PlxuICAgICAgICAvLyBUSUxFX0NFTlRFUiBkZXZlIGNlbnRyYWxpemFyIG8gREVNT04gbm8gbWVpbyBkZSB1bSB0aWxlXG4gICAgICAgIC8vIHBvc2l0aW9uU3RhdGUgeCBlIHkgZmF6ZW0gYSBtb3ZpbWVudGHDp8OjbyBkZSAxIHRpbGVcbiAgICAgICAgLy8gdHJhbnNmb3JtIGVzcGVsaGEgYSBpbWFnZW0gcGFyYSBtdWRhciBkZSBkaXJlw6fDo29cbiAgICAgICAgLy8gU1RZTEUgREVWRSBGSUNBUiBBUVVJLCBwcm8gamF2YXNjcmlwdCBuIHByZWNpc2FyIHBlZ2FyIG8gSUQgbmEgcXVlcnlcbiAgICAgICAgLy8gQ29tIGlzc28gY29uc2VndWltb3MgbW9kaWZpY2FyIG8gY3NzIG5vIGphdmFzY3JpcHQgcHVyb1xuICAgICk7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IE15S2V5OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsImNhbGN1bGFyVmFyaWF2ZWlzIiwiVXNlS2V5TW92aW1lbnQiLCJFY2FudmFzIiwiTXlLZXkiLCJwcm9wcyIsImluaXRpYWxQb3NpdGlvbktleSIsIngiLCJwb3NpdGlvbiIsInkiLCJrZXkiLCJ2YXJpYXZlaXMiLCJUSUxFX0NFTlRFUiIsIlRJTEVfQ0VOVEVSX0VHRyIsIktFWV9TSVpFIiwiVElMRV9TSVpFX0VHRyIsIm1vdmltZW50X2tleSIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJhbmltYXRpb24iLCJ0b3AiLCJsZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/board/key.js\n"));

/***/ })

});