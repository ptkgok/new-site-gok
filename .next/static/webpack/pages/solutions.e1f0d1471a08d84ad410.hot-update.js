webpackHotUpdate_N_E("pages/solutions",{

/***/ "./src/pages/solutions.tsx":
/*!*********************************!*\
  !*** ./src/pages/solutions.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ \"./node_modules/@fluentui/react/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _design_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../design/header */ \"./src/design/header/index.tsx\");\n/* harmony import */ var _design_layout_layout_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../design/layout/layout-base */ \"./src/design/layout/layout-base/index.tsx\");\n/* harmony import */ var _design_solutions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../design/solutions */ \"./src/design/solutions/index.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/patrick/Downloads/site-gokkk/src/pages/solutions.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar SolutionsPage = function SolutionsPage() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState('products'),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      side = _React$useState2[0],\n      setSide = _React$useState2[1];\n\n  return __jsx(_design_layout_layout_base__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    header: __jsx(_design_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      image: \"https://res.cloudinary.com/code-comunity/image/upload/v1633477093/site-gok/structure-flex_nnrsrr.png\",\n      bgSize: \"cover\",\n      title: \"Nossa estrutura \\xE9 totalmente flexivel\",\n      description: __jsx(\"div\", {\n        style: {\n          marginTop: '70px',\n          position: 'absolute'\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 13\n        }\n      }, __jsx(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        style: {\n          color: side !== 'products' && 'black',\n          border: 'none',\n          background: side !== 'products' && 'none'\n        },\n        text: \"Products\",\n        onClick: function onClick() {\n          return setSide('products');\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 15\n        }\n      }), __jsx(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        style: {\n          color: side !== 'cases' && 'black',\n          border: 'none',\n          background: side !== 'cases' && 'none'\n        },\n        text: \"Cases\",\n        onClick: function onClick() {\n          return setSide('cases');\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 15\n        }\n      })),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }\n    }),\n    content: __jsx(_design_solutions__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      session: side,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 16\n      }\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  });\n};\n\n_s(SolutionsPage, \"2NgFQGPoBvzPkniTnXHdud6nx70=\");\n\n_c = SolutionsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SolutionsPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"SolutionsPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NvbHV0aW9ucy50c3g/NTBiNiJdLCJuYW1lcyI6WyJTb2x1dGlvbnNQYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNpZGUiLCJzZXRTaWRlIiwibWFyZ2luVG9wIiwicG9zaXRpb24iLCJjb2xvciIsImJvcmRlciIsImJhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBdUIsR0FBRyxTQUExQkEsYUFBMEIsR0FBTTtBQUFBOztBQUVwQyx3QkFBd0JDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxVQUFmLENBQXhCO0FBQUE7QUFBQSxNQUFPQyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFFQSxTQUNFLE1BQUMsa0VBQUQ7QUFDRSxVQUFNLEVBQ0osTUFBQyxzREFBRDtBQUNFLFdBQUssRUFBQyxzR0FEUjtBQUVFLFlBQU0sRUFBQyxPQUZUO0FBR0UsV0FBSyxFQUFDLDBDQUhSO0FBSUUsaUJBQVcsRUFDVDtBQUFLLGFBQUssRUFBRTtBQUFFQyxtQkFBUyxFQUFFLE1BQWI7QUFBcUJDLGtCQUFRLEVBQUU7QUFBL0IsU0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxzREFBRDtBQUFRLGFBQUssRUFBRTtBQUFFQyxlQUFLLEVBQUVKLElBQUksS0FBSyxVQUFULElBQXVCLE9BQWhDO0FBQXlDSyxnQkFBTSxFQUFFLE1BQWpEO0FBQXlEQyxvQkFBVSxFQUFFTixJQUFJLEtBQUssVUFBVCxJQUF1QjtBQUE1RixTQUFmO0FBQXFILFlBQUksRUFBQyxVQUExSDtBQUFxSSxlQUFPLEVBQUU7QUFBQSxpQkFBTUMsT0FBTyxDQUFDLFVBQUQsQ0FBYjtBQUFBLFNBQTlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUVFLE1BQUMsc0RBQUQ7QUFBUSxhQUFLLEVBQUU7QUFBRUcsZUFBSyxFQUFFSixJQUFJLEtBQUssT0FBVCxJQUFvQixPQUE3QjtBQUFzQ0ssZ0JBQU0sRUFBRSxNQUE5QztBQUFzREMsb0JBQVUsRUFBRU4sSUFBSSxLQUFLLE9BQVQsSUFBb0I7QUFBdEYsU0FBZjtBQUErRyxZQUFJLEVBQUMsT0FBcEg7QUFBNEgsZUFBTyxFQUFFO0FBQUEsaUJBQU1DLE9BQU8sQ0FBQyxPQUFELENBQWI7QUFBQSxTQUFySTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsQ0FMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRko7QUFjRSxXQUFPLEVBQUUsTUFBQyx5REFBRDtBQUFXLGFBQU8sRUFBRUQsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWRYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQWtCRCxDQXRCRDs7R0FBTUgsYTs7S0FBQUEsYTtBQXdCU0EsNEVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvc29sdXRpb25zLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyZWFkY3J1bWIsIEJ1dHRvbiB9IGZyb20gJ0BmbHVlbnR1aS9yZWFjdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9kZXNpZ24vaGVhZGVyJztcbmltcG9ydCBMYXlvdXRCYXNlIGZyb20gJy4uL2Rlc2lnbi9sYXlvdXQvbGF5b3V0LWJhc2UnO1xuaW1wb3J0IFNvbHV0aW9ucyBmcm9tICcuLi9kZXNpZ24vc29sdXRpb25zJztcblxuY29uc3QgU29sdXRpb25zUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XG5cbiAgY29uc3QgW3NpZGUsIHNldFNpZGVdID0gUmVhY3QudXNlU3RhdGUoJ3Byb2R1Y3RzJylcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXRCYXNlXG4gICAgICBoZWFkZXI9e1xuICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgaW1hZ2U9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9jb2RlLWNvbXVuaXR5L2ltYWdlL3VwbG9hZC92MTYzMzQ3NzA5My9zaXRlLWdvay9zdHJ1Y3R1cmUtZmxleF9ubnJzcnIucG5nXCJcbiAgICAgICAgICBiZ1NpemU9XCJjb3ZlclwiXG4gICAgICAgICAgdGl0bGU9XCJOb3NzYSBlc3RydXR1cmEgw6kgdG90YWxtZW50ZSBmbGV4aXZlbFwiXG4gICAgICAgICAgZGVzY3JpcHRpb249e1xuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6ICc3MHB4JywgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+XG4gICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgY29sb3I6IHNpZGUgIT09ICdwcm9kdWN0cycgJiYgJ2JsYWNrJywgYm9yZGVyOiAnbm9uZScsIGJhY2tncm91bmQ6IHNpZGUgIT09ICdwcm9kdWN0cycgJiYgJ25vbmUnIH19IHRleHQ9XCJQcm9kdWN0c1wiIG9uQ2xpY2s9eygpID0+IHNldFNpZGUoJ3Byb2R1Y3RzJyl9IC8+XG4gICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgY29sb3I6IHNpZGUgIT09ICdjYXNlcycgJiYgJ2JsYWNrJywgYm9yZGVyOiAnbm9uZScsIGJhY2tncm91bmQ6IHNpZGUgIT09ICdjYXNlcycgJiYgJ25vbmUnIH19IHRleHQ9XCJDYXNlc1wiIG9uQ2xpY2s9eygpID0+IHNldFNpZGUoJ2Nhc2VzJyl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICB9XG4gICAgICBjb250ZW50PXs8U29sdXRpb25zIHNlc3Npb249e3NpZGV9IC8+fVxuICAgIC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU29sdXRpb25zUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/solutions.tsx\n");

/***/ })

})