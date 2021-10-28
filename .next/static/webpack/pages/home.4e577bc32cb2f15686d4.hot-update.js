webpackHotUpdate_N_E("pages/home",{

/***/ "./src/design/go-news-header/styles.ts":
/*!*********************************************!*\
  !*** ./src/design/go-news-header/styles.ts ***!
  \*********************************************/
/*! exports provided: Container, TitleAndDescription, Title, Description */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TitleAndDescription\", function() { return TitleAndDescription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-media-query */ \"./node_modules/styled-media-query/dist/styled-media-query.es.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/theme */ \"./src/styles/theme.ts\");\n\n\nvar _templateObject, _templateObject2, _templateObject3;\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styles__Container\",\n  componentId: \"sc-1exjpuy-0\"\n})([\"width:100%;height:100%;border-bottom:1px solid \", \";border-top:1px solid \", \";padding:5px 3px;display:flex;margin:50px 0px;\"], _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].colors.primary, _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].colors.primary);\nvar TitleAndDescription = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styles__TitleAndDescription\",\n  componentId: \"sc-1exjpuy-1\"\n})([\"display:flex;width:100%;align-items:center;justify-content:space-around;::before,::after{content:'';display:block;width:100%;height:100%;background-image:radial-gradient(\", \" 20%,transparent 20%),radial-gradient(\", \" 20%,transparent 20%);background-color:white;background-position:0 0,50px 50px;background-size:10px 10px;\", \"}\"], _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].colors.text, _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].colors.text, styled_media_query__WEBPACK_IMPORTED_MODULE_2__[\"default\"].lessThan('medium')(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: none;\\n  \"]))));\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1.withConfig({\n  displayName: \"styles__Title\",\n  componentId: \"sc-1exjpuy-2\"\n})([\"font-size:2.8rem;font-weight:bold;color:\", \";padding:0px 20px;color:white;color:\", \";strong{text-shadow:0px 0px 1px \", \";color:\", \";-webkit-text-stroke-width:1px;-webkit-text-stroke-color:black;}\", \"\"], _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].colors.primary, _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].colors.text, _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].colors.text, _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].colors.background, styled_media_query__WEBPACK_IMPORTED_MODULE_2__[\"default\"].lessThan('medium')(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  ::before, ::after {\\n    content: '';\\n    display: block;\\n    width: 100%;\\n    height: 100%;\\n\\n    background-image: radial-gradient(\", \" 20%, transparent 20%),\\n      radial-gradient(\", \" 20%, transparent 20%);\\n    background-color: white;\\n    background-position: 0 0, 50px 50px;\\n    background-size: 10px 10px;\\n  }\\n  \"])), _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].colors.text, _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].colors.text));\nvar Description = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p.withConfig({\n  displayName: \"styles__Description\",\n  componentId: \"sc-1exjpuy-3\"\n})([\"font-size:0.90rem;color:\", \";width:60%;line-height:17px;\", \"\"], _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].colors.text, styled_media_query__WEBPACK_IMPORTED_MODULE_2__[\"default\"].lessThan('medium')(_templateObject3 || (_templateObject3 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: none;\\n  \"]))));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Rlc2lnbi9nby1uZXdzLWhlYWRlci9zdHlsZXMudHM/ZjUxNyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJUaXRsZUFuZERlc2NyaXB0aW9uIiwidGV4dCIsIm1lZGlhIiwibGVzc1RoYW4iLCJUaXRsZSIsImgxIiwiYmFja2dyb3VuZCIsIkRlc2NyaXB0aW9uIiwicCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxvSUFHT0MscURBQUssQ0FBQ0MsTUFBTixDQUFhQyxPQUhwQixFQUlJRixxREFBSyxDQUFDQyxNQUFOLENBQWFDLE9BSmpCLENBQWY7QUFVQSxJQUFNQyxtQkFBbUIsR0FBR0wseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwrVUFZUUMscURBQUssQ0FBQ0MsTUFBTixDQUFhRyxJQVpyQixFQWFSSixxREFBSyxDQUFDQyxNQUFOLENBQWFHLElBYkwsRUFtQjVCQywwREFBSyxDQUFDQyxRQUFOLENBQWUsUUFBZixDQW5CNEIsd0tBQXpCO0FBeUJBLElBQU1DLEtBQUssR0FBR1QseURBQU0sQ0FBQ1UsRUFBVjtBQUFBO0FBQUE7QUFBQSxnTkFHUFIscURBQUssQ0FBQ0MsTUFBTixDQUFhQyxPQUhOLEVBTVBGLHFEQUFLLENBQUNDLE1BQU4sQ0FBYUcsSUFOTixFQVFhSixxREFBSyxDQUFDQyxNQUFOLENBQWFHLElBUjFCLEVBU0xKLHFEQUFLLENBQUNDLE1BQU4sQ0FBYVEsVUFUUixFQWNkSiwwREFBSyxDQUFDQyxRQUFOLENBQWUsUUFBZixDQWRjLCtkQXFCc0JOLHFEQUFLLENBQUNDLE1BQU4sQ0FBYUcsSUFyQm5DLEVBc0JNSixxREFBSyxDQUFDQyxNQUFOLENBQWFHLElBdEJuQixFQUFYO0FBOEJBLElBQU1NLFdBQVcsR0FBR1oseURBQU0sQ0FBQ2EsQ0FBVjtBQUFBO0FBQUE7QUFBQSxxRUFFYlgscURBQUssQ0FBQ0MsTUFBTixDQUFhRyxJQUZBLEVBTXBCQywwREFBSyxDQUFDQyxRQUFOLENBQWUsUUFBZixDQU5vQiwwS0FBakIiLCJmaWxlIjoiLi9zcmMvZGVzaWduL2dvLW5ld3MtaGVhZGVyL3N0eWxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IG1lZGlhIGZyb20gJ3N0eWxlZC1tZWRpYS1xdWVyeSc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vc3R5bGVzL3RoZW1lJztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICBwYWRkaW5nOiA1cHggM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDUwcHggMHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFRpdGxlQW5kRGVzY3JpcHRpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cbiAgOjpiZWZvcmUsIDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCgke3RoZW1lLmNvbG9ycy50ZXh0fSAyMCUsIHRyYW5zcGFyZW50IDIwJSksXG4gICAgICByYWRpYWwtZ3JhZGllbnQoJHt0aGVtZS5jb2xvcnMudGV4dH0gMjAlLCB0cmFuc3BhcmVudCAyMCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMCwgNTBweCA1MHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTBweCAxMHB4O1xuXG4gICAgXG4gICR7bWVkaWEubGVzc1RoYW4oJ21lZGl1bScpYFxuICAgIGRpc3BsYXk6IG5vbmU7XG4gIGB9XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDIuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHR9O1xuICBzdHJvbmcge1xuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDFweCAke3RoZW1lLmNvbG9ycy50ZXh0fTtcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMXB4O1xuICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgJHttZWRpYS5sZXNzVGhhbignbWVkaXVtJylgXG4gIDo6YmVmb3JlLCA6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoJHt0aGVtZS5jb2xvcnMudGV4dH0gMjAlLCB0cmFuc3BhcmVudCAyMCUpLFxuICAgICAgcmFkaWFsLWdyYWRpZW50KCR7dGhlbWUuY29sb3JzLnRleHR9IDIwJSwgdHJhbnNwYXJlbnQgMjAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDAsIDUwcHggNTBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcHggMTBweDtcbiAgfVxuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAwLjkwcmVtO1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dH07XG4gIHdpZHRoOiA2MCU7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuXG4gICR7bWVkaWEubGVzc1RoYW4oJ21lZGl1bScpYFxuICAgIGRpc3BsYXk6IG5vbmU7XG4gIGB9XG5gIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/design/go-news-header/styles.ts\n");

/***/ })

})