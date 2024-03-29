"use strict";
(self["webpackChunkhost_app"] = self["webpackChunkhost_app"] || []).push([[844],{

/***/ 844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: consume shared module (default) react@^18.1.0 (singleton) (fallback: ../node_modules/react/index.js)
var index_js_ = __webpack_require__(343);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ../node_modules/react-dom/client.js
var client = __webpack_require__(470);
// EXTERNAL MODULE: consume shared module (default) react-error-boundary@^4.0.4 (strict) (fallback: ../node_modules/react-error-boundary/dist/react-error-boundary.esm.js)
var react_error_boundary_esm_js_ = __webpack_require__(928);
;// CONCATENATED MODULE: ./src/dynamic-loader/useDynamicScript.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useDynamicScript = function useDynamicScript(args) {
  var _useState = (0,index_js_.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    ready = _useState2[0],
    setReady = _useState2[1];
  var _useState3 = (0,index_js_.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    failed = _useState4[0],
    setFailed = _useState4[1];
  (0,index_js_.useEffect)(function () {
    if (!args.url) {
      return;
    }
    var element = document.createElement("script");
    element.src = args.url;
    element.type = "text/javascript";
    element.async = true;
    setReady(false);
    setFailed(false);
    element.onload = function () {
      console.log("Dynamic Script Loaded: ".concat(args.url));
      setReady(true);
    };
    element.onerror = function () {
      console.error("Dynamic Script Error: ".concat(args.url));
      setReady(false);
      setFailed(true);
    };
    document.head.appendChild(element);
    return function () {
      console.log("Dynamic Script Removed: ".concat(args.url));
      document.head.removeChild(element);
    };
  }, [args.url]);
  return {
    ready: ready,
    failed: failed
  };
};
;// CONCATENATED MODULE: ./src/dynamic-loader/ModuleLoader.jsx
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var loadComponent = function loadComponent(scope, module) {
  return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var container, factory, Module;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __webpack_require__.I("default");
        case 2:
          container = window[scope]; // or get the container somewhere else
          // Initialize the container, it may provide shared modules
          _context.next = 5;
          return container.init(__webpack_require__.S["default"]);
        case 5:
          _context.next = 7;
          return window[scope].get(module);
        case 7:
          factory = _context.sent;
          Module = factory();
          return _context.abrupt("return", Module);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
};
var ModuleLoader = function ModuleLoader(props) {
  var _useDynamicScript = useDynamicScript({
      url: props.module && props.url
    }),
    ready = _useDynamicScript.ready,
    failed = _useDynamicScript.failed;
  if (!props.module) {
    return /*#__PURE__*/index_js_default().createElement("h2", null, "No module specified");
  }
  if (!ready) {
    return /*#__PURE__*/index_js_default().createElement("h2", null, "Loading dynamic script: ", props.url);
  }
  if (failed) {
    return /*#__PURE__*/index_js_default().createElement("h2", null, "Failed to load dynamic script: ", props.url);
  }
  var Component = /*#__PURE__*/(0,index_js_.lazy)(loadComponent(props.scope, props.module));
  return /*#__PURE__*/index_js_default().createElement(index_js_.Suspense, {
    fallback: "Loading Module"
  }, /*#__PURE__*/index_js_default().createElement(Component, null));
};
;// CONCATENATED MODULE: ./src/App.jsx
function App_slicedToArray(arr, i) { return App_arrayWithHoles(arr) || App_iterableToArrayLimit(arr, i) || App_unsupportedIterableToArray(arr, i) || App_nonIterableRest(); }
function App_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function App_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return App_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return App_arrayLikeToArray(o, minLen); }
function App_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function App_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function App_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




// uncomment the following lines to import components from local "remote-app"
// import DefaultComponent, { NotDefaultComponent } from "remote_app/Components";

var LazyHelloWorld = /*#__PURE__*/(0,index_js_.lazy)(function () {
  return __webpack_require__.e(/* import() */ 292).then(__webpack_require__.t.bind(__webpack_require__, 292, 23));
});
var LazyNonDefaultHelloWorld = /*#__PURE__*/(0,index_js_.lazy)(function () {
  return __webpack_require__.e(/* import() */ 292).then(__webpack_require__.t.bind(__webpack_require__, 292, 23)).then(function (module) {
    return {
      "default": module.NonDefaultHelloWorld
    };
  });
});
var LazyHelloUniverse = /*#__PURE__*/(0,index_js_.lazy)(function () {
  return __webpack_require__.e(/* import() */ 79).then(__webpack_require__.t.bind(__webpack_require__, 79, 23));
});
var container = document.getElementById("root");
var root = (0,client/* createRoot */.H)(container);
var ErrorFallback = function ErrorFallback(_ref) {
  var error = _ref.error,
    resetErrorBoundary = _ref.resetErrorBoundary;
  return /*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment, null, /*#__PURE__*/index_js_default().createElement("h3", {
    style: {
      color: "#f00"
    }
  }, "Something went wrong,", " ", /*#__PURE__*/index_js_default().createElement("a", {
    href: "#",
    onClick: resetErrorBoundary
  }, "try again")), /*#__PURE__*/index_js_default().createElement("pre", null, error.message));
};
var App = function App() {
  var _useState = (0,index_js_.useState)(null),
    _useState2 = App_slicedToArray(_useState, 2),
    dynamicRemoteURL = _useState2[0],
    setDynamicRemoteURL = _useState2[1];
  var _useState3 = (0,index_js_.useState)(null),
    _useState4 = App_slicedToArray(_useState3, 2),
    remote = _useState4[0],
    setRemote = _useState4[1];

  // This will dynamically load a remote module based on URL query params
  var loadRemoteFromURL = function loadRemoteFromURL() {
    var params = new URLSearchParams(window.location.search);
    var url = params.get("url");
    var scope = params.get("scope");
    var module = params.get("module");
    setDynamicRemoteURL({
      url: url,
      scope: scope,
      module: module
    });
  };
  var loadRemoteFromProps = function loadRemoteFromProps() {
    var url = "https://cwsites.github.io/module-federation-remote/remoteEntry.js";
    var scope = "demo_remote_app";
    var module = "./HelloUniverse";
    setRemote({
      url: url,
      scope: scope,
      module: module
    });
  };
  (0,index_js_.useEffect)(function () {
    loadRemoteFromURL();
    loadRemoteFromProps();
  }, []);
  return /*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment, null, /*#__PURE__*/index_js_default().createElement("h1", null, "Host App"), /*#__PURE__*/index_js_default().createElement(index_js_.Suspense, {
    fallback: "loading static Hello World..."
  }, /*#__PURE__*/index_js_default().createElement("strong", null, "Lazy Loaded from same repo..."), /*#__PURE__*/index_js_default().createElement(react_error_boundary_esm_js_.ErrorBoundary, {
    FallbackComponent: ErrorFallback
  }, /*#__PURE__*/index_js_default().createElement(LazyHelloWorld, null)), /*#__PURE__*/index_js_default().createElement(react_error_boundary_esm_js_.ErrorBoundary, {
    FallbackComponent: ErrorFallback
  }, /*#__PURE__*/index_js_default().createElement(LazyNonDefaultHelloWorld, null))), /*#__PURE__*/index_js_default().createElement(index_js_.Suspense, {
    fallback: "loading Lazy Hello Universe..."
  }, /*#__PURE__*/index_js_default().createElement("strong", null, "Lazy Loaded from hosted server..."), /*#__PURE__*/index_js_default().createElement(react_error_boundary_esm_js_.ErrorBoundary, {
    FallbackComponent: ErrorFallback
  }, /*#__PURE__*/index_js_default().createElement(LazyHelloUniverse, null))), /*#__PURE__*/index_js_default().createElement(index_js_.Suspense, {
    fallback: "loading dynamic Hello World..."
  }, remote && /*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment, null, /*#__PURE__*/index_js_default().createElement("strong", null, "Dynamicly Loaded via props..."), /*#__PURE__*/index_js_default().createElement(react_error_boundary_esm_js_.ErrorBoundary, {
    FallbackComponent: ErrorFallback
  }, /*#__PURE__*/index_js_default().createElement(ModuleLoader, {
    url: remote.url,
    scope: remote.scope,
    module: remote.module
  }))), dynamicRemoteURL && /*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment, null, /*#__PURE__*/index_js_default().createElement("strong", null, "Dynamicly Loaded via URL Query..."), /*#__PURE__*/index_js_default().createElement(react_error_boundary_esm_js_.ErrorBoundary, {
    FallbackComponent: ErrorFallback
  }, /*#__PURE__*/index_js_default().createElement(ModuleLoader, {
    url: dynamicRemoteURL.url,
    scope: dynamicRemoteURL.scope,
    module: dynamicRemoteURL.module
  })))), /*#__PURE__*/index_js_default().createElement("strong", null, "Standard import of default component..."), /*#__PURE__*/index_js_default().createElement(index_js_.Suspense, {
    fallback: "loading default component..."
  }, /*#__PURE__*/index_js_default().createElement(react_error_boundary_esm_js_.ErrorBoundary, {
    FallbackComponent: ErrorFallback
  })), /*#__PURE__*/index_js_default().createElement("strong", null, "Standard import of non-default component..."), /*#__PURE__*/index_js_default().createElement(index_js_.Suspense, {
    fallback: "loading non default component..."
  }, /*#__PURE__*/index_js_default().createElement(react_error_boundary_esm_js_.ErrorBoundary, {
    FallbackComponent: ErrorFallback
  })));
};
root.render( /*#__PURE__*/index_js_default().createElement(App, null));

/***/ }),

/***/ 470:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var m = __webpack_require__(615);
if (true) {
  exports.H = m.createRoot;
  __webpack_unused_export__ = m.hydrateRoot;
} else { var i; }


/***/ })

}]);
//# sourceMappingURL=844.js.map