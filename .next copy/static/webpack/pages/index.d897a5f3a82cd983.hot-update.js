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

/***/ "./components/canvas/canvasContext.js":
/*!********************************************!*\
  !*** ./components/canvas/canvasContext.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CanvasContext: function() { return /* binding */ CanvasContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas */ \"./components/canvas/canvas.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst keys_1 = 1;\nconst keys_2 = 1;\nvar keys_encontradas_1 = 0;\nvar keys_encontradas_2 = 0;\nconst CanvasContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({\n    canvas: [],\n    updateCanvas: (direction, currentPosition, walker, direction_img, canvasValue)=>{}\n});\nfunction CanvasProvider(props) {\n    _s();\n    const [canvasState, updateCanvasState] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({\n        canvas: _canvas__WEBPACK_IMPORTED_MODULE_2__.CANVAS,\n        updateCanvas: (direction, currentPosition, walker, direction_img, canvasValue)=>{\n            // Faz movimentaçao\n            const moviment = (0,_canvas__WEBPACK_IMPORTED_MODULE_2__.handleMoviment)(direction, currentPosition, direction_img);\n            const nextPosition = {\n                x: moviment.x,\n                y: moviment.y\n            };\n            if (moviment === null) {\n                console.log(\"O objeto \\xe9 nulo. Foi encontrado neste ponto do c\\xf3digo: \" + walker);\n                console.log(new Error().stack);\n            }\n            // Verifica se a posição é válida, se for atualiza a pos\n            const nextMove = (0,_canvas__WEBPACK_IMPORTED_MODULE_2__.CheckValidMoviment)(nextPosition, walker);\n            //movimento valido\n            if (nextMove.valid) {\n                // Mudando array bidimensional\n                updateCanvasState((prevState)=>{\n                    const newCanvas = JSON.parse(JSON.stringify(prevState.canvas));\n                    const currentValue = newCanvas[currentPosition.y][currentPosition.x];\n                    const valor = canvasValue;\n                    newCanvas[currentPosition.y][currentPosition.x] = _canvas__WEBPACK_IMPORTED_MODULE_2__.Ecanvas.FLOOR;\n                    newCanvas[nextPosition.y][nextPosition.x] = valor;\n                    _canvas__WEBPACK_IMPORTED_MODULE_2__.CANVAS[currentPosition.y][currentPosition.x] = _canvas__WEBPACK_IMPORTED_MODULE_2__.Ecanvas.FLOOR;\n                    _canvas__WEBPACK_IMPORTED_MODULE_2__.CANVAS[nextPosition.y][nextPosition.x] = valor;\n                    // Encontrou todas as chaves\n                    if (nextMove.key1 || nextMove.key2) {\n                        if (nextMove.key1) {\n                            keys_encontradas_1 += 1;\n                        } else {\n                            keys_encontradas_2 += 1;\n                        }\n                        if (keys_encontradas_1 >= keys_1 && keys_encontradas_2 >= keys_2) {\n                            alert(\"Voc\\xea venceu\");\n                        }\n                    }\n                    return {\n                        canvas: newCanvas,\n                        updateCanvas: prevState.updateCanvas,\n                        nextPosition: nextPosition,\n                        nextMove: nextMove,\n                        direction_img: moviment.direction_img\n                    };\n                });\n            }\n            //console.log(CANVAS);\n            return {\n                nextPosition: nextPosition,\n                nextMove: nextMove,\n                direction_img: moviment.direction_img\n            };\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CanvasContext.Provider, {\n        value: canvasState,\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/mnt/d/VSCODE/PI/Trabalho/BoomBlitz/components/canvas/canvasContext.js\",\n        lineNumber: 80,\n        columnNumber: 7\n    }, this);\n}\n_s(CanvasProvider, \"Imq/OTgKxBvIPivKMLZVPdB0YnA=\");\n_c = CanvasProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CanvasProvider);\nvar _c;\n$RefreshReg$(_c, \"CanvasProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2NhbnZhcy9jYW52YXNDb250ZXh0LmpzP2M2NWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtDQU5WQVN9IGZyb20gXCIuL2NhbnZhc1wiXG5pbXBvcnQgeyBDaGVja1ZhbGlkTW92aW1lbnQsIGhhbmRsZU1vdmltZW50LCBFY2FudmFzICB9IGZyb20gJy4vY2FudmFzJztcblxuY29uc3Qga2V5c18xID0gMTtcbmNvbnN0IGtleXNfMiA9IDE7XG52YXIga2V5c19lbmNvbnRyYWRhc18xID0gMDtcbnZhciBrZXlzX2VuY29udHJhZGFzXzIgPSAwO1xuXG5leHBvcnQgY29uc3QgQ2FudmFzQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICAgIGNhbnZhczogW10sXG4gICAgdXBkYXRlQ2FudmFzOiAoZGlyZWN0aW9uLCBjdXJyZW50UG9zaXRpb24sIHdhbGtlciwgZGlyZWN0aW9uX2ltZywgY2FudmFzVmFsdWUpID0+IHt9LFxufSk7XG5cbmZ1bmN0aW9uIENhbnZhc1Byb3ZpZGVyKHByb3BzKSB7XG4gICAgY29uc3QgW2NhbnZhc1N0YXRlLCB1cGRhdGVDYW52YXNTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgICBjYW52YXM6IENBTlZBUyxcbiAgICAgIHVwZGF0ZUNhbnZhczogKGRpcmVjdGlvbiwgY3VycmVudFBvc2l0aW9uLCB3YWxrZXIsIGRpcmVjdGlvbl9pbWcsIGNhbnZhc1ZhbHVlKSA9PiB7XG4gICAgICAgIC8vIEZheiBtb3ZpbWVudGHDp2FvXG4gICAgICAgIGNvbnN0IG1vdmltZW50ID0gaGFuZGxlTW92aW1lbnQoZGlyZWN0aW9uLCBjdXJyZW50UG9zaXRpb24sIGRpcmVjdGlvbl9pbWcpO1xuICAgICAgICBjb25zdCBuZXh0UG9zaXRpb24gPSB7XG4gICAgICAgICAgeDogbW92aW1lbnQueCxcbiAgICAgICAgICB5OiBtb3ZpbWVudC55XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG1vdmltZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJPIG9iamV0byDDqSBudWxvLiBGb2kgZW5jb250cmFkbyBuZXN0ZSBwb250byBkbyBjw7NkaWdvOiBcIiArIHdhbGtlcik7XG4gICAgICAgICAgY29uc29sZS5sb2cobmV3IEVycm9yKCkuc3RhY2spO1xuICAgICAgICB9XG4gICAgICAgIC8vIFZlcmlmaWNhIHNlIGEgcG9zacOnw6NvIMOpIHbDoWxpZGEsIHNlIGZvciBhdHVhbGl6YSBhIHBvc1xuICAgICAgICBjb25zdCBuZXh0TW92ZSA9IENoZWNrVmFsaWRNb3ZpbWVudChuZXh0UG9zaXRpb24sIHdhbGtlcik7XG4gICAgICAgIC8vbW92aW1lbnRvIHZhbGlkb1xuICAgICAgICBpZihuZXh0TW92ZS52YWxpZCl7XG4gICAgICAgICAgICAvLyBNdWRhbmRvIGFycmF5IGJpZGltZW5zaW9uYWxcbiAgICAgICAgICAgIHVwZGF0ZUNhbnZhc1N0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbmV3Q2FudmFzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwcmV2U3RhdGUuY2FudmFzKSk7XG4gICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IG5ld0NhbnZhc1tjdXJyZW50UG9zaXRpb24ueV1bY3VycmVudFBvc2l0aW9uLnhdO1xuICAgICAgICAgICAgICBjb25zdCB2YWxvciA9IGNhbnZhc1ZhbHVlO1xuICAgICAgICAgICAgICBuZXdDYW52YXNbY3VycmVudFBvc2l0aW9uLnldW2N1cnJlbnRQb3NpdGlvbi54XSA9IEVjYW52YXMuRkxPT1I7XG4gICAgICAgICAgICAgIG5ld0NhbnZhc1tuZXh0UG9zaXRpb24ueV1bbmV4dFBvc2l0aW9uLnhdID0gIHZhbG9yO1xuXG4gICAgICAgICAgICAgIENBTlZBU1tjdXJyZW50UG9zaXRpb24ueV1bY3VycmVudFBvc2l0aW9uLnhdID0gIEVjYW52YXMuRkxPT1I7XG4gICAgICAgICAgICAgIENBTlZBU1tuZXh0UG9zaXRpb24ueV1bbmV4dFBvc2l0aW9uLnhdID0gIHZhbG9yO1xuICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAvLyBFbmNvbnRyb3UgdG9kYXMgYXMgY2hhdmVzXG4gICAgICAgICAgICAgIGlmKG5leHRNb3ZlLmtleTEgfHwgbmV4dE1vdmUua2V5Mil7XG4gICAgICAgICAgICAgICAgaWYobmV4dE1vdmUua2V5MSl7XG4gICAgICAgICAgICAgICAgICBrZXlzX2VuY29udHJhZGFzXzErPTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICBrZXlzX2VuY29udHJhZGFzXzIrPTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGtleXNfZW5jb250cmFkYXNfMSA+PSBrZXlzXzEgJiYga2V5c19lbmNvbnRyYWRhc18yID49IGtleXNfMil7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1ZvY8OqIHZlbmNldScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgY2FudmFzOiBuZXdDYW52YXMsXG4gICAgICAgICAgICAgICAgICB1cGRhdGVDYW52YXM6IHByZXZTdGF0ZS51cGRhdGVDYW52YXMsXG4gICAgICAgICAgICAgICAgICBuZXh0UG9zaXRpb246IG5leHRQb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgIG5leHRNb3ZlOiBuZXh0TW92ZSxcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbl9pbWc6IG1vdmltZW50LmRpcmVjdGlvbl9pbWdcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhDQU5WQVMpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmV4dFBvc2l0aW9uOiBuZXh0UG9zaXRpb24sXG4gICAgICAgICAgbmV4dE1vdmU6IG5leHRNb3ZlLFxuICAgICAgICAgIGRpcmVjdGlvbl9pbWc6IG1vdmltZW50LmRpcmVjdGlvbl9pbWdcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxDYW52YXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjYW52YXNTdGF0ZX0+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvQ2FudmFzQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xuICB9XG5cbmV4cG9ydCBkZWZhdWx0IENhbnZhc1Byb3ZpZGVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNBTlZBUyIsIkNoZWNrVmFsaWRNb3ZpbWVudCIsImhhbmRsZU1vdmltZW50IiwiRWNhbnZhcyIsImtleXNfMSIsImtleXNfMiIsImtleXNfZW5jb250cmFkYXNfMSIsImtleXNfZW5jb250cmFkYXNfMiIsIkNhbnZhc0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiY2FudmFzIiwidXBkYXRlQ2FudmFzIiwiZGlyZWN0aW9uIiwiY3VycmVudFBvc2l0aW9uIiwid2Fsa2VyIiwiZGlyZWN0aW9uX2ltZyIsImNhbnZhc1ZhbHVlIiwiQ2FudmFzUHJvdmlkZXIiLCJwcm9wcyIsImNhbnZhc1N0YXRlIiwidXBkYXRlQ2FudmFzU3RhdGUiLCJ1c2VTdGF0ZSIsIm1vdmltZW50IiwibmV4dFBvc2l0aW9uIiwieCIsInkiLCJjb25zb2xlIiwibG9nIiwiRXJyb3IiLCJzdGFjayIsIm5leHRNb3ZlIiwidmFsaWQiLCJwcmV2U3RhdGUiLCJuZXdDYW52YXMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJjdXJyZW50VmFsdWUiLCJ2YWxvciIsIkZMT09SIiwia2V5MSIsImtleTIiLCJhbGVydCIsIlByb3ZpZGVyIiwidmFsdWUiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/canvas/canvasContext.js\n"));

/***/ })

});