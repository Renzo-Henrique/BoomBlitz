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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _calcularVariaveis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calcularVariaveis */ \"./components/calcularVariaveis.js\");\n/* harmony import */ var _hook_useKeyMoviment_UseKeyMoviment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hook/useKeyMoviment/UseKeyMoviment */ \"./components/hook/useKeyMoviment/UseKeyMoviment.js\");\n/* harmony import */ var _canvas_canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../canvas/canvas */ \"./components/canvas/canvas.js\");\n\n\n\n\n\nfunction MyKey(props) {\n    //Verificador de bugs\n    if (props === null) {\n        console.log(\"O objeto \\xe9 nulo. Foi encontrado neste ponto do c\\xf3digo: \" + \"keys\");\n        console.log(new Error().stack);\n    }\n    const initialPositionKey = {\n        x: props.position.x,\n        y: props.position.y\n    };\n    const key_ = props.key;\n    //console.log( 'Chaves x:'+ initialPositionKey.x + ' y:', initialPositionKey.y);\n    const variaveis = (0,_calcularVariaveis__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    let TILE_CENTER = variaveis.TILE_CENTER_EGG;\n    let KEY_SIZE = variaveis.TILE_SIZE_EGG;\n    const moviment = (0,_hook_useKeyMoviment_UseKeyMoviment__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(initialPositionKey, key_);\n    //Verificador de bugs\n    if (moviment.positionState === null) {\n        console.log(\"O objeto \\xe9 nulo. Foi encontrado neste ponto do c\\xf3digo: \" + \"keys\");\n        console.log(new Error().stack);\n    }\n    if (moviment_key.x == 0 && moviment_key.y == 0) {\n        moviment_key.x = -2;\n        moviment_key.y = -2;\n    }\n    console.log(\"Chaves x:\" + moviment_key.x + \" y:\", moviment_key.y);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            position: \"absolute\",\n            width: KEY_SIZE,\n            height: KEY_SIZE,\n            backgroundImage: 'url(\"assets/objects/key.png\")',\n            backgroundRepeat: \"no-repeat\",\n            backgroundSize: \"cover\",\n            /*Animacoes*/ animation: \"egg-animation-moviment 1s steps(4) infinite\",\n            /*animation: DEMON-animation-stand-by 1s steps(3) infinite;*/ /*animation: DEMON-animation-hurt 1s steps(3) infinite;*/ top: +TILE_CENTER + KEY_SIZE * moviment_key.y,\n            left: +TILE_CENTER + KEY_SIZE * moviment_key.x\n        }\n    }, void 0, false, {\n        fileName: \"/mnt/d/VSCODE/PI/Trabalho/BoomBlitz/components/board/key.js\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, this);\n}\n_c = MyKey;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyKey);\nvar _c;\n$RefreshReg$(_c, \"MyKey\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JvYXJkL2tleS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUM7QUFDVztBQUNjO0FBQzFCO0FBR3hDLFNBQVNLLE1BQU1DLEtBQUs7SUFFaEIscUJBQXFCO0lBQ3JCLElBQUlBLFVBQVUsTUFBTTtRQUNoQkMsUUFBUUMsR0FBRyxDQUFDLGtFQUE0RDtRQUN4RUQsUUFBUUMsR0FBRyxDQUFDLElBQUlDLFFBQVFDLEtBQUs7SUFDakM7SUFFQSxNQUFNQyxxQkFBcUI7UUFDdkJDLEdBQUdOLE1BQU1PLFFBQVEsQ0FBQ0QsQ0FBQztRQUNuQkUsR0FBR1IsTUFBTU8sUUFBUSxDQUFDQyxDQUFDO0lBQ3ZCO0lBQ0EsTUFBTUMsT0FBT1QsTUFBTVUsR0FBRztJQUV0QixnRkFBZ0Y7SUFDakYsTUFBTUMsWUFBWWYsOERBQWlCQTtJQUVuQyxJQUFJZ0IsY0FBY0QsVUFBVUUsZUFBZTtJQUUzQyxJQUFJQyxXQUFXSCxVQUFVSSxhQUFhO0lBR3RDLE1BQU1DLFdBQVduQiwrRUFBY0EsQ0FBQ1Esb0JBQW9CSTtJQUNuRCxxQkFBcUI7SUFDckIsSUFBSU8sU0FBU0MsYUFBYSxLQUFLLE1BQU07UUFDakNoQixRQUFRQyxHQUFHLENBQUMsa0VBQTREO1FBQ3hFRCxRQUFRQyxHQUFHLENBQUMsSUFBSUMsUUFBUUMsS0FBSztJQUNqQztJQUdELElBQUdjLGFBQWFaLENBQUMsSUFBSSxLQUFLWSxhQUFhVixDQUFDLElBQUksR0FBRTtRQUN6Q1UsYUFBYVosQ0FBQyxHQUFHLENBQUM7UUFDbEJZLGFBQWFWLENBQUMsR0FBRyxDQUFDO0lBQ3ZCO0lBRUFQLFFBQVFDLEdBQUcsQ0FBRSxjQUFhZ0IsYUFBYVosQ0FBQyxHQUFHLE9BQU9ZLGFBQWFWLENBQUM7SUFDaEUscUJBQ0ssOERBQUNXO1FBQ0RDLE9BQU87WUFDSGIsVUFBVTtZQUNWYyxPQUFPUDtZQUNQUSxRQUFRUjtZQUNSUyxpQkFBaUI7WUFDakJDLGtCQUFrQjtZQUNsQkMsZ0JBQWdCO1lBQ2hCLFdBQVcsR0FDWEMsV0FBWTtZQUNaLDJEQUEyRCxHQUMzRCx1REFBdUQsR0FDdkRDLEtBQUssQ0FBQ2YsY0FBY0UsV0FBYUksYUFBYVYsQ0FBQztZQUMvQ29CLE1BQU0sQ0FBQ2hCLGNBQWNFLFdBQWFJLGFBQWFaLENBQUM7UUFFcEQ7Ozs7OztBQVNSO0tBN0RTUDtBQThEVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2JvYXJkL2tleS5qcz84NzBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2FsY3VsYXJWYXJpYXZlaXMgZnJvbSAnLi4vY2FsY3VsYXJWYXJpYXZlaXMnXG5pbXBvcnQgVXNlS2V5TW92aW1lbnQgZnJvbSAnLi4vaG9vay91c2VLZXlNb3ZpbWVudC9Vc2VLZXlNb3ZpbWVudCdcbmltcG9ydCB7RWNhbnZhc30gZnJvbSAnLi4vY2FudmFzL2NhbnZhcydcblxuXG5mdW5jdGlvbiBNeUtleShwcm9wcyl7XG5cbiAgICAvL1ZlcmlmaWNhZG9yIGRlIGJ1Z3NcbiAgICBpZiAocHJvcHMgPT09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJPIG9iamV0byDDqSBudWxvLiBGb2kgZW5jb250cmFkbyBuZXN0ZSBwb250byBkbyBjw7NkaWdvOiBcIiArICdrZXlzJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbml0aWFsUG9zaXRpb25LZXkgPSB7XG4gICAgICAgIHg6IHByb3BzLnBvc2l0aW9uLngsXG4gICAgICAgIHk6IHByb3BzLnBvc2l0aW9uLnksXG4gICAgfTtcbiAgICBjb25zdCBrZXlfID0gcHJvcHMua2V5XG5cbiAgICAvL2NvbnNvbGUubG9nKCAnQ2hhdmVzIHg6JysgaW5pdGlhbFBvc2l0aW9uS2V5LnggKyAnIHk6JywgaW5pdGlhbFBvc2l0aW9uS2V5LnkpO1xuICAgY29uc3QgdmFyaWF2ZWlzID0gY2FsY3VsYXJWYXJpYXZlaXMoKTtcblxuICAgbGV0IFRJTEVfQ0VOVEVSID0gdmFyaWF2ZWlzLlRJTEVfQ0VOVEVSX0VHRztcblxuICAgbGV0IEtFWV9TSVpFID0gdmFyaWF2ZWlzLlRJTEVfU0laRV9FR0c7XG4gICBcbiAgICBcbiAgIGNvbnN0IG1vdmltZW50ID0gVXNlS2V5TW92aW1lbnQoaW5pdGlhbFBvc2l0aW9uS2V5LCBrZXlfKTtcbiAgICAvL1ZlcmlmaWNhZG9yIGRlIGJ1Z3NcbiAgICBpZiAobW92aW1lbnQucG9zaXRpb25TdGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk8gb2JqZXRvIMOpIG51bG8uIEZvaSBlbmNvbnRyYWRvIG5lc3RlIHBvbnRvIGRvIGPDs2RpZ286IFwiICsgJ2tleXMnKTtcbiAgICAgICAgY29uc29sZS5sb2cobmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuXG4gICBpZihtb3ZpbWVudF9rZXkueCA9PSAwICYmIG1vdmltZW50X2tleS55ID09IDApe1xuICAgICAgICBtb3ZpbWVudF9rZXkueCA9IC0yO1xuICAgICAgICBtb3ZpbWVudF9rZXkueSA9IC0yO1xuICAgfVxuXG4gICBjb25zb2xlLmxvZyggJ0NoYXZlcyB4OicrIG1vdmltZW50X2tleS54ICsgJyB5OicsIG1vdmltZW50X2tleS55KTtcbiAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHdpZHRoOiBLRVlfU0laRSAsXG4gICAgICAgICAgICBoZWlnaHQ6IEtFWV9TSVpFICxcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImFzc2V0cy9vYmplY3RzL2tleS5wbmdcIiknLFxuICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICAgICAgLypBbmltYWNvZXMqL1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBgZWdnLWFuaW1hdGlvbi1tb3ZpbWVudCAxcyBzdGVwcyg0KSBpbmZpbml0ZWAsXG4gICAgICAgICAgICAvKmFuaW1hdGlvbjogREVNT04tYW5pbWF0aW9uLXN0YW5kLWJ5IDFzIHN0ZXBzKDMpIGluZmluaXRlOyovXG4gICAgICAgICAgICAvKmFuaW1hdGlvbjogREVNT04tYW5pbWF0aW9uLWh1cnQgMXMgc3RlcHMoMykgaW5maW5pdGU7Ki9cbiAgICAgICAgICAgIHRvcDogK1RJTEVfQ0VOVEVSICsgS0VZX1NJWkUgICogKG1vdmltZW50X2tleS55KSxcbiAgICAgICAgICAgIGxlZnQ6ICtUSUxFX0NFTlRFUiArIEtFWV9TSVpFICAqIChtb3ZpbWVudF9rZXkueCksXG4gICAgICAgICAgICAvLyB0cmFuc2Zvcm06IGBzY2FsZVgoJHttb3ZpbWVudF9zbGltZS5kaXJlY3Rpb24gPT09ICdSSUdIVCcgPyAxIDogLTF9KWAsXG4gICAgICAgIH19PlxuICAgICAgIDwvZGl2PlxuICAgICAgICAvLyBUSUxFX0NFTlRFUiBkZXZlIGNlbnRyYWxpemFyIG8gREVNT04gbm8gbWVpbyBkZSB1bSB0aWxlXG4gICAgICAgIC8vIHBvc2l0aW9uU3RhdGUgeCBlIHkgZmF6ZW0gYSBtb3ZpbWVudGHDp8OjbyBkZSAxIHRpbGVcbiAgICAgICAgLy8gdHJhbnNmb3JtIGVzcGVsaGEgYSBpbWFnZW0gcGFyYSBtdWRhciBkZSBkaXJlw6fDo29cbiAgICAgICAgLy8gU1RZTEUgREVWRSBGSUNBUiBBUVVJLCBwcm8gamF2YXNjcmlwdCBuIHByZWNpc2FyIHBlZ2FyIG8gSUQgbmEgcXVlcnlcbiAgICAgICAgLy8gQ29tIGlzc28gY29uc2VndWltb3MgbW9kaWZpY2FyIG8gY3NzIG5vIGphdmFzY3JpcHQgcHVyb1xuICAgICk7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IE15S2V5OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsImNhbGN1bGFyVmFyaWF2ZWlzIiwiVXNlS2V5TW92aW1lbnQiLCJFY2FudmFzIiwiTXlLZXkiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJFcnJvciIsInN0YWNrIiwiaW5pdGlhbFBvc2l0aW9uS2V5IiwieCIsInBvc2l0aW9uIiwieSIsImtleV8iLCJrZXkiLCJ2YXJpYXZlaXMiLCJUSUxFX0NFTlRFUiIsIlRJTEVfQ0VOVEVSX0VHRyIsIktFWV9TSVpFIiwiVElMRV9TSVpFX0VHRyIsIm1vdmltZW50IiwicG9zaXRpb25TdGF0ZSIsIm1vdmltZW50X2tleSIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJhbmltYXRpb24iLCJ0b3AiLCJsZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/board/key.js\n"));

/***/ })

});