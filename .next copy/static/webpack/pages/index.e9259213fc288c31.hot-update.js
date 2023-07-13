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

/***/ "./components/canvas/canvas.js":
/*!*************************************!*\
  !*** ./components/canvas/canvas.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CANVAS: function() { return /* binding */ CANVAS; },\n/* harmony export */   CheckValidMoviment: function() { return /* binding */ CheckValidMoviment; },\n/* harmony export */   Ecanvas: function() { return /* binding */ Ecanvas; },\n/* harmony export */   handleMoviment: function() { return /* binding */ handleMoviment; }\n/* harmony export */ });\n/* harmony import */ var _settings_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../settings/constants */ \"./settings/constants.ts\");\nfunction handleMoviment(direction, position, direction_img) {\n    if (direction == \"LEFT\" || direction == \"ArrowLeft\") {\n        return {\n            x: position.x - 1,\n            y: position.y,\n            direction_img: \"LEFT\",\n            egg: false\n        };\n    } else if (direction == \"RIGHT\" || direction == \"ArrowRight\") {\n        return {\n            x: position.x + 1,\n            y: position.y,\n            direction_img: \"RIGHT\",\n            egg: false\n        };\n    } else if (direction == \"UP\" || direction == \"ArrowUp\") {\n        return {\n            x: position.x,\n            y: position.y - 1,\n            direction_img: direction_img,\n            egg: false\n        };\n    } else if (direction == \"DOWN\" || direction == \"ArrowDown\") {\n        return {\n            x: position.x,\n            y: position.y + 1,\n            direction_img: direction_img,\n            egg: false\n        };\n    } else {\n        return {\n            x: position.x,\n            y: position.y,\n            direction_img: direction_img,\n            egg: false\n        };\n    }\n}\n// objeto para as colisoes\nconst Ecanvas = {\n    FLOOR: 0,\n    DEMON: 1,\n    SLIME: 2,\n    KEY1: 3,\n    KEY2: 13,\n    PORTAL: 4,\n    DINO: 5,\n    EGG: 6,\n    BUSH: 7,\n    ROCK: 8,\n    BORDER: 9\n};\nconst FL = Ecanvas.FLOOR;\nconst BD = Ecanvas.BORDER;\nconst RK = Ecanvas.ROCK;\nconst BS = Ecanvas.BUSH;\nconst DM = Ecanvas.DEMON;\nconst SM = Ecanvas.SLIME;\nconst KY1 = Ecanvas.KEY1;\nconst KY2 = Ecanvas.KEY2;\nconst PL = Ecanvas.PORTAL;\nconst DI = Ecanvas.DINO;\nconst OV = Ecanvas.EGG;\nvar CANVAS = [\n    [\n        BD,\n        BD,\n        BD,\n        BD,\n        BD,\n        BD,\n        BD,\n        BD,\n        BD,\n        BD,\n        BD,\n        BD,\n        BD,\n        BD,\n        BD\n    ],\n    [\n        BD,\n        DI,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        DM,\n        FL,\n        BD\n    ],\n    [\n        BD,\n        FL,\n        RK,\n        FL,\n        RK,\n        FL,\n        RK,\n        FL,\n        RK,\n        FL,\n        RK,\n        KY1,\n        RK,\n        FL,\n        BD\n    ],\n    [\n        BD,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        SM,\n        FL,\n        FL,\n        FL,\n        BS,\n        FL,\n        FL,\n        BD\n    ],\n    [\n        BD,\n        FL,\n        RK,\n        FL,\n        RK,\n        FL,\n        RK,\n        FL,\n        RK,\n        FL,\n        RK,\n        FL,\n        RK,\n        FL,\n        BD\n    ],\n    [\n        BD,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        BD\n    ],\n    [\n        BD,\n        FL,\n        RK,\n        BS,\n        RK,\n        FL,\n        RK,\n        FL,\n        RK,\n        FL,\n        RK,\n        FL,\n        RK,\n        FL,\n        BD\n    ],\n    [\n        BD,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        BD\n    ],\n    [\n        BD,\n        FL,\n        RK,\n        FL,\n        RK,\n        FL,\n        RK,\n        FL,\n        RK,\n        FL,\n        RK,\n        FL,\n        RK,\n        FL,\n        BD\n    ],\n    [\n        BD,\n        FL,\n        FL,\n        FL,\n        FL,\n        BS,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        BS,\n        FL,\n        BD\n    ],\n    [\n        BD,\n        FL,\n        RK,\n        FL,\n        RK,\n        SM,\n        RK,\n        FL,\n        RK,\n        FL,\n        RK,\n        DM,\n        RK,\n        FL,\n        BD\n    ],\n    [\n        BD,\n        SM,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        FL,\n        KY2,\n        FL,\n        FL,\n        DM,\n        BD\n    ],\n    [\n        BD,\n        BD,\n        BD,\n        BD,\n        BD,\n        BD,\n        BD,\n        BD,\n        BD,\n        BD,\n        BD,\n        BD,\n        BD,\n        BD,\n        BD\n    ]\n];\n\nfunction CheckValidMoviment(nextPosition, walker) {\n    const canvasValue = CANVAS[nextPosition.y][nextPosition.x];\n    let result = null;\n    // Obtem movimentos validos\n    if (walker === _settings_constants__WEBPACK_IMPORTED_MODULE_0__.Ewalker.DINO) {\n        result = getDinoValidMoves(canvasValue);\n    } else if (walker === _settings_constants__WEBPACK_IMPORTED_MODULE_0__.Ewalker.EGG) {\n        result = getEggValidMoves(canvasValue);\n    } else if (walker === _settings_constants__WEBPACK_IMPORTED_MODULE_0__.Ewalker.KEY) {\n        result = getKeyValidMoves(canvasValue);\n    } else {\n        result = getMonsterValidMoves(canvasValue);\n    }\n    return result;\n}\n_c = CheckValidMoviment;\nfunction getDinoValidMoves(canvasValue) {\n    // Eh valido andar em floor, demon e slime\n    // morre no demon e slime\n    //mandinga pra resover problema do tile inicial: canvasValue == Ecanvas.DINO\n    return {\n        valid: canvasValue == Ecanvas.FLOOR || canvasValue == Ecanvas.DEMON || canvasValue == Ecanvas.SLIME || canvasValue == Ecanvas.KEY1 || canvasValue == Ecanvas.KEY2,\n        dead: canvasValue == Ecanvas.DEMON || canvasValue == Ecanvas.SLIME,\n        explosion: false,\n        kill: false,\n        key1: canvasValue == Ecanvas.KEY1,\n        key2: canvasValue == Ecanvas.KEY2\n    };\n}\nfunction getMonsterValidMoves(canvasValue) {\n    // Atualizar dead para ser quando ele encosta na bomba\n    // Valido andar em floor e dino\n    return {\n        valid: canvasValue == Ecanvas.FLOOR || canvasValue == Ecanvas.DINO,\n        dead: false,\n        explosion: false,\n        kill: canvasValue == Ecanvas.DINO,\n        key1: false,\n        key2: false\n    };\n}\nfunction getEggValidMoves(canvasValue) {\n    // Atualizar dead para ser quando ele encosta na bomba\n    // Valido andar em floor e dino\n    return {\n        valid: false,\n        dead: false,\n        explosion: true,\n        kill: false,\n        key1: false,\n        key2: false\n    };\n}\nfunction getKeyValidMoves(canvasValue, currentPosition) {\n    // Atualizar dead para ser quando ele encosta na bomba\n    // Valido andar em floor e dino\n    return {\n        valid: false,\n        dead: false,\n        explosion: true,\n        kill: false,\n        key1: canvasValue == Ecanvas.KEY1,\n        key2: canvasValue == Ecanvas.KEY2\n    };\n}\nvar _c;\n$RefreshReg$(_c, \"CheckValidMoviment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTTtRQUNOQyxXQUFXO1FBQ1hDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxNQUFNO0lBQ1Y7QUFDSjtBQUVBLFNBQVNQLGlCQUFpQkwsV0FBVyxFQUFFYSxlQUFlO0lBQ2xELHNEQUFzRDtJQUN0RCwrQkFBK0I7SUFDL0IsT0FBTTtRQUNGTixPQUFPO1FBQ1BDLE1BQU07UUFDTkMsV0FBVztRQUNYQyxNQUFNO1FBQ05DLE1BQU1YLGVBQWU1QixRQUFRSSxJQUFJO1FBQ2pDb0MsTUFBTVosZUFBZTVCLFFBQVFLLElBQUk7SUFDckM7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NhbnZhcy9jYW52YXMuanM/NGZlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaGFuZGxlTW92aW1lbnQoZGlyZWN0aW9uLCBwb3NpdGlvbiwgZGlyZWN0aW9uX2ltZyl7XG4gICAgXG4gICAgaWYoZGlyZWN0aW9uID09ICdMRUZUJyB8fCBkaXJlY3Rpb24gPT0gJ0Fycm93TGVmdCcgKXtcbiAgICAgICAgcmV0dXJuIHt4OiBwb3NpdGlvbi54IC0gMSwgeTogcG9zaXRpb24ueSwgZGlyZWN0aW9uX2ltZzogXCJMRUZUXCIsIGVnZzogZmFsc2V9O1xuXG4gICAgfWVsc2UgaWYoZGlyZWN0aW9uID09ICdSSUdIVCcgfHwgZGlyZWN0aW9uID09ICdBcnJvd1JpZ2h0Jyl7XG4gICAgICAgIHJldHVybiB7eDogcG9zaXRpb24ueCArMSwgeTogcG9zaXRpb24ueSxkaXJlY3Rpb25faW1nOiBcIlJJR0hUXCIsIGVnZzpmYWxzZX07XG5cbiAgICB9ZWxzZSBpZihkaXJlY3Rpb24gPT0gJ1VQJyB8fCBkaXJlY3Rpb24gPT0gJ0Fycm93VXAnKXtcbiAgICAgICAgcmV0dXJuIHt4OiBwb3NpdGlvbi54LCB5OiBwb3NpdGlvbi55IC0gMSxkaXJlY3Rpb25faW1nOiBkaXJlY3Rpb25faW1nLCBlZ2c6IGZhbHNlfTtcblxuICAgIH1lbHNlIGlmKGRpcmVjdGlvbiA9PSAnRE9XTicgfHwgZGlyZWN0aW9uID09ICdBcnJvd0Rvd24nKXtcbiAgICAgICAgcmV0dXJuIHt4OiBwb3NpdGlvbi54LCB5OiBwb3NpdGlvbi55ICsgMSxkaXJlY3Rpb25faW1nOiBkaXJlY3Rpb25faW1nLCBlZ2c6IGZhbHNlfTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgcmV0dXJue3g6IHBvc2l0aW9uLngsIHk6IHBvc2l0aW9uLnksIGRpcmVjdGlvbl9pbWc6IGRpcmVjdGlvbl9pbWcsIGVnZzogZmFsc2V9XG4gICAgfVxuICAgIFxufVxuXG4vLyBvYmpldG8gcGFyYSBhcyBjb2xpc29lc1xuZXhwb3J0IGNvbnN0IEVjYW52YXMgPSB7XG4gICAgRkxPT1I6IDAsXG4gICAgREVNT046IDEsXG4gICAgU0xJTUU6IDIsXG4gICAgS0VZMTogMyxcbiAgICBLRVkyOiAxMyxcbiAgICBQT1JUQUw6IDQsXG4gICAgRElOTzogNSxcbiAgICBFR0c6IDYsXG4gICAgQlVTSDogNyxcbiAgICBST0NLOiA4LFxuICAgIEJPUkRFUjogOSxcbn1cblxuY29uc3QgRkwgPSBFY2FudmFzLkZMT09SO1xuXG5jb25zdCBCRCA9IEVjYW52YXMuQk9SREVSO1xuY29uc3QgUksgPSBFY2FudmFzLlJPQ0s7XG5jb25zdCBCUyA9IEVjYW52YXMuQlVTSDtcbmNvbnN0IERNID0gRWNhbnZhcy5ERU1PTjtcbmNvbnN0IFNNID0gRWNhbnZhcy5TTElNRTtcbmNvbnN0IEtZMSA9IEVjYW52YXMuS0VZMTtcbmNvbnN0IEtZMiA9IEVjYW52YXMuS0VZMjtcbmNvbnN0IFBMID0gRWNhbnZhcy5QT1JUQUw7XG5jb25zdCBESSA9IEVjYW52YXMuRElOTztcbmNvbnN0IE9WID0gRWNhbnZhcy5FR0c7XG5cbmV4cG9ydCB2YXIgQ0FOVkFTID0gW1xuICAgIFtCRCwgQkQsIEJELCBCRCwgQkQsIEJELCBCRCwgQkQsIEJELCBCRCwgQkQsIEJELCBCRCwgQkQsIEJEXSxcbiAgICBbQkQsIERJLCBGTCwgRkwsIEZMLCBGTCwgRkwsIEZMLCBGTCwgRkwsIEZMLCBGTCwgRE0sIEZMLCBCRF0sXG4gICAgW0JELCBGTCwgUkssIEZMLCBSSywgRkwsIFJLLCBGTCwgUkssIEZMLCBSSywgS1kxLCBSSywgRkwsIEJEXSxcbiAgICBbQkQsIEZMLCBGTCwgRkwsIEZMLCBGTCwgRkwsIFNNLCBGTCwgRkwsIEZMLCBCUywgRkwsIEZMLCBCRF0sXG4gICAgW0JELCBGTCwgUkssIEZMLCBSSywgRkwsIFJLLCBGTCwgUkssIEZMLCBSSywgRkwsIFJLLCBGTCwgQkRdLFxuICAgIFtCRCwgRkwsIEZMLCBGTCwgRkwsIEZMLCBGTCwgRkwsIEZMLCBGTCwgRkwsIEZMLCBGTCwgRkwsIEJEXSxcbiAgICBbQkQsIEZMLCBSSywgQlMsIFJLLCBGTCwgUkssIEZMLCBSSywgRkwsIFJLLCBGTCwgUkssIEZMLCBCRF0sXG4gICAgW0JELCBGTCwgRkwsIEZMLCBGTCwgRkwsIEZMLCBGTCwgRkwsIEZMLCBGTCwgRkwsIEZMLCBGTCwgQkRdLFxuICAgIFtCRCwgRkwsIFJLLCBGTCwgUkssIEZMLCBSSywgRkwsIFJLLCBGTCwgUkssIEZMLCBSSywgRkwsIEJEXSxcbiAgICBbQkQsIEZMLCBGTCwgRkwsIEZMLCBCUywgRkwsIEZMLCBGTCwgRkwsIEZMLCBGTCwgQlMsIEZMLCBCRF0sXG4gICAgW0JELCBGTCwgUkssIEZMLCBSSywgU00sIFJLLCBGTCwgUkssIEZMLCBSSywgRE0sIFJLLCBGTCwgQkRdLFxuICAgIFtCRCwgU00sIEZMLCBGTCwgRkwsIEZMLCBGTCwgRkwsIEZMLCBGTCwgS1kyLCBGTCwgRkwsIERNLCBCRF0sXG4gICAgW0JELCBCRCwgQkQsIEJELCBCRCwgQkQsIEJELCBCRCwgQkQsIEJELCBCRCwgQkQsIEJELCBCRCwgQkRdLFxuXTtcblxuXG5pbXBvcnQge0V3YWxrZXJ9IGZyb20gJy4uLy4uL3NldHRpbmdzL2NvbnN0YW50cydcblxuZXhwb3J0IGZ1bmN0aW9uIENoZWNrVmFsaWRNb3ZpbWVudCggbmV4dFBvc2l0aW9uLCB3YWxrZXIpe1xuICAgIGNvbnN0IGNhbnZhc1ZhbHVlID0gQ0FOVkFTW25leHRQb3NpdGlvbi55XVtuZXh0UG9zaXRpb24ueF07XG5cbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcblxuICAgIC8vIE9idGVtIG1vdmltZW50b3MgdmFsaWRvc1xuICAgIGlmKHdhbGtlciA9PT0gRXdhbGtlci5ESU5PKXtcbiAgICAgICAgcmVzdWx0ID0gZ2V0RGlub1ZhbGlkTW92ZXMoY2FudmFzVmFsdWUpO1xuICAgIH0gZWxzZSBpZih3YWxrZXIgPT09IEV3YWxrZXIuRUdHKXtcbiAgICAgICAgcmVzdWx0ID0gZ2V0RWdnVmFsaWRNb3ZlcyhjYW52YXNWYWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYod2Fsa2VyID09PSBFd2Fsa2VyLktFWSl7XG4gICAgICAgIHJlc3VsdCA9IGdldEtleVZhbGlkTW92ZXMoY2FudmFzVmFsdWUpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICByZXN1bHQgPSBnZXRNb25zdGVyVmFsaWRNb3ZlcyhjYW52YXNWYWx1ZSlcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbmZ1bmN0aW9uIGdldERpbm9WYWxpZE1vdmVzKGNhbnZhc1ZhbHVlKXtcbiAgICAvLyBFaCB2YWxpZG8gYW5kYXIgZW0gZmxvb3IsIGRlbW9uIGUgc2xpbWVcbiAgICAvLyBtb3JyZSBubyBkZW1vbiBlIHNsaW1lXG4gICAgLy9tYW5kaW5nYSBwcmEgcmVzb3ZlciBwcm9ibGVtYSBkbyB0aWxlIGluaWNpYWw6IGNhbnZhc1ZhbHVlID09IEVjYW52YXMuRElOT1xuICAgIHJldHVybntcbiAgICAgICAgdmFsaWQ6IGNhbnZhc1ZhbHVlID09IEVjYW52YXMuRkxPT1IgfHwgY2FudmFzVmFsdWUgPT0gRWNhbnZhcy5ERU1PTiB8fCBjYW52YXNWYWx1ZSA9PSBFY2FudmFzLlNMSU1FIFxuICAgICAgICB8fCBjYW52YXNWYWx1ZSA9PSBFY2FudmFzLktFWTEgfHwgY2FudmFzVmFsdWUgPT0gRWNhbnZhcy5LRVkyLFxuICAgICAgICBkZWFkOiBjYW52YXNWYWx1ZSA9PSBFY2FudmFzLkRFTU9OIHx8IGNhbnZhc1ZhbHVlID09IEVjYW52YXMuU0xJTUUsXG4gICAgICAgIGV4cGxvc2lvbjogZmFsc2UsXG4gICAgICAgIGtpbGw6IGZhbHNlLFxuICAgICAgICBrZXkxOiBjYW52YXNWYWx1ZSA9PSBFY2FudmFzLktFWTEsXG4gICAgICAgIGtleTI6IGNhbnZhc1ZhbHVlID09IEVjYW52YXMuS0VZMixcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldE1vbnN0ZXJWYWxpZE1vdmVzKGNhbnZhc1ZhbHVlKXtcbiAgICAvLyBBdHVhbGl6YXIgZGVhZCBwYXJhIHNlciBxdWFuZG8gZWxlIGVuY29zdGEgbmEgYm9tYmFcbiAgICAvLyBWYWxpZG8gYW5kYXIgZW0gZmxvb3IgZSBkaW5vXG4gICAgcmV0dXJue1xuICAgICAgICB2YWxpZDogY2FudmFzVmFsdWUgPT0gRWNhbnZhcy5GTE9PUiB8fCBjYW52YXNWYWx1ZSA9PSBFY2FudmFzLkRJTk8sXG4gICAgICAgIGRlYWQ6IGZhbHNlLFxuICAgICAgICBleHBsb3Npb246IGZhbHNlLFxuICAgICAgICBraWxsOiBjYW52YXNWYWx1ZSA9PSBFY2FudmFzLkRJTk8sXG4gICAgICAgIGtleTE6IGZhbHNlLFxuICAgICAgICBrZXkyOiBmYWxzZSxcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEVnZ1ZhbGlkTW92ZXMoY2FudmFzVmFsdWUpe1xuICAgIC8vIEF0dWFsaXphciBkZWFkIHBhcmEgc2VyIHF1YW5kbyBlbGUgZW5jb3N0YSBuYSBib21iYVxuICAgIC8vIFZhbGlkbyBhbmRhciBlbSBmbG9vciBlIGRpbm9cbiAgICByZXR1cm57XG4gICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgZGVhZDogZmFsc2UsXG4gICAgICAgIGV4cGxvc2lvbjogdHJ1ZSxcbiAgICAgICAga2lsbDogZmFsc2UsXG4gICAgICAgIGtleTE6IGZhbHNlLFxuICAgICAgICBrZXkyOiBmYWxzZSxcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEtleVZhbGlkTW92ZXMoY2FudmFzVmFsdWUsIGN1cnJlbnRQb3NpdGlvbil7XG4gICAgLy8gQXR1YWxpemFyIGRlYWQgcGFyYSBzZXIgcXVhbmRvIGVsZSBlbmNvc3RhIG5hIGJvbWJhXG4gICAgLy8gVmFsaWRvIGFuZGFyIGVtIGZsb29yIGUgZGlub1xuICAgIHJldHVybntcbiAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICBkZWFkOiBmYWxzZSxcbiAgICAgICAgZXhwbG9zaW9uOiB0cnVlLFxuICAgICAgICBraWxsOiBmYWxzZSxcbiAgICAgICAga2V5MTogY2FudmFzVmFsdWUgPT0gRWNhbnZhcy5LRVkxLFxuICAgICAgICBrZXkyOiBjYW52YXNWYWx1ZSA9PSBFY2FudmFzLktFWTJcbiAgICB9XG59XG5cbiJdLCJuYW1lcyI6WyJoYW5kbGVNb3ZpbWVudCIsImRpcmVjdGlvbiIsInBvc2l0aW9uIiwiZGlyZWN0aW9uX2ltZyIsIngiLCJ5IiwiZWdnIiwiRWNhbnZhcyIsIkZMT09SIiwiREVNT04iLCJTTElNRSIsIktFWTEiLCJLRVkyIiwiUE9SVEFMIiwiRElOTyIsIkVHRyIsIkJVU0giLCJST0NLIiwiQk9SREVSIiwiRkwiLCJCRCIsIlJLIiwiQlMiLCJETSIsIlNNIiwiS1kxIiwiS1kyIiwiUEwiLCJESSIsIk9WIiwiQ0FOVkFTIiwiRXdhbGtlciIsIkNoZWNrVmFsaWRNb3ZpbWVudCIsIm5leHRQb3NpdGlvbiIsIndhbGtlciIsImNhbnZhc1ZhbHVlIiwicmVzdWx0IiwiZ2V0RGlub1ZhbGlkTW92ZXMiLCJnZXRFZ2dWYWxpZE1vdmVzIiwiS0VZIiwiZ2V0S2V5VmFsaWRNb3ZlcyIsImdldE1vbnN0ZXJWYWxpZE1vdmVzIiwidmFsaWQiLCJkZWFkIiwiZXhwbG9zaW9uIiwia2lsbCIsImtleTEiLCJrZXkyIiwiY3VycmVudFBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/canvas/canvas.js\n"));

/***/ })

});