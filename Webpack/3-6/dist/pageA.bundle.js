webpackJsonp([5],{

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

var page = 'subpageA'
if(page === 'subpageA') {
    Promise.all/* import() */([__webpack_require__.e(1), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, 1)).then(function (subPageA) {
        console.log(subPageA)
    })
}else if (page === 'subpageB'){
    Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, 2)).then(function (subPageB) {
        console.log(subPageB)
    })
}


/* harmony default export */ __webpack_exports__["default"] = ('pageA');

/***/ })

},[3]);