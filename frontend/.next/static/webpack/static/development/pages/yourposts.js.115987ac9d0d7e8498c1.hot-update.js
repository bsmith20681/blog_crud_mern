webpackHotUpdate("static\\development\\pages\\yourposts.js",{

/***/ "./components/DisplayPostsComponent.js":
/*!*********************************************!*\
  !*** ./components/DisplayPostsComponent.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\blog_crud\\frontend\\components\\DisplayPostsComponent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var DisplayPostsComponent = function DisplayPostsComponent() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      posts = _useState[0],
      setPosts = _useState[1];

  var fetchPosts = function fetchPosts() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://localhost:8000/api/post').then(function (response) {
      console.log(response.data);
      setPosts(response.data);
    })["catch"](function (error) {
      return alert(error);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchPosts();
  }, []);
  return __jsx("div", {
    "class": "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    "class": "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    "class": "col-lg-12 col-md-12 col-sm-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, JSON.stringify(posts), posts.map(function (x) {
    return __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, x.title);
  }), posts.map(function (post) {
    __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, post.title), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, post.content), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "published on: ", new Date(post.createdAt).toLocaleString()));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (DisplayPostsComponent);

/***/ })

})
//# sourceMappingURL=yourposts.js.115987ac9d0d7e8498c1.hot-update.js.map