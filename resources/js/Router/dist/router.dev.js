"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: "/",
  name: "home",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../components/Page/Home"));
    });
  }
}, {
  path: "/shop",
  name: "shop",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../components/Page/ShopArt"));
    });
  }
}, {
  path: "/about",
  name: "about",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../components/Page/AboutUs"));
    });
  }
}, {
  path: "/terms",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../components/Page/Terms"));
    });
  }
}, {
  path: "/privacy",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../components/Page/Privacy"));
    });
  }
}, {
  path: "/refund",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../components/Page/Refund"));
    });
  }
}, {
  path: "/payment",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../components/Page/Payment"));
    });
  }
}, {
  path: "/joinus",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../components/Page/JoinUs"));
    });
  }
}];
var router = new _vueRouter["default"]({
  routes: routes,
  // short for `routes: routes`
  hashbang: false,
  mode: "history",
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  }
});
var _default = router;
exports["default"] = _default;