function Y1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _u = { exports: {} }, ke = {};
var vh;
function X1() {
  if (vh) return ke;
  vh = 1;
  var e = /* @__PURE__ */ Symbol.for("react.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), i = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), a = /* @__PURE__ */ Symbol.for("react.profiler"), l = /* @__PURE__ */ Symbol.for("react.provider"), c = /* @__PURE__ */ Symbol.for("react.context"), d = /* @__PURE__ */ Symbol.for("react.forward_ref"), h = /* @__PURE__ */ Symbol.for("react.suspense"), m = /* @__PURE__ */ Symbol.for("react.memo"), g = /* @__PURE__ */ Symbol.for("react.lazy"), y = Symbol.iterator;
  function w(P) {
    return P === null || typeof P != "object" ? null : (P = y && P[y] || P["@@iterator"], typeof P == "function" ? P : null);
  }
  var b = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, k = Object.assign, T = {};
  function S(P, $, he) {
    this.props = P, this.context = $, this.refs = T, this.updater = he || b;
  }
  S.prototype.isReactComponent = {}, S.prototype.setState = function(P, $) {
    if (typeof P != "object" && typeof P != "function" && P != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, P, $, "setState");
  }, S.prototype.forceUpdate = function(P) {
    this.updater.enqueueForceUpdate(this, P, "forceUpdate");
  };
  function R() {
  }
  R.prototype = S.prototype;
  function O(P, $, he) {
    this.props = P, this.context = $, this.refs = T, this.updater = he || b;
  }
  var I = O.prototype = new R();
  I.constructor = O, k(I, S.prototype), I.isPureReactComponent = !0;
  var D = Array.isArray, K = Object.prototype.hasOwnProperty, Z = { current: null }, z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function W(P, $, he) {
    var ye, pe = {}, ge = null, Se = null;
    if ($ != null) for (ye in $.ref !== void 0 && (Se = $.ref), $.key !== void 0 && (ge = "" + $.key), $) K.call($, ye) && !z.hasOwnProperty(ye) && (pe[ye] = $[ye]);
    var be = arguments.length - 2;
    if (be === 1) pe.children = he;
    else if (1 < be) {
      for (var xe = Array(be), Ke = 0; Ke < be; Ke++) xe[Ke] = arguments[Ke + 2];
      pe.children = xe;
    }
    if (P && P.defaultProps) for (ye in be = P.defaultProps, be) pe[ye] === void 0 && (pe[ye] = be[ye]);
    return { $$typeof: e, type: P, key: ge, ref: Se, props: pe, _owner: Z.current };
  }
  function G(P, $) {
    return { $$typeof: e, type: P.type, key: $, ref: P.ref, props: P.props, _owner: P._owner };
  }
  function le(P) {
    return typeof P == "object" && P !== null && P.$$typeof === e;
  }
  function ue(P) {
    var $ = { "=": "=0", ":": "=2" };
    return "$" + P.replace(/[=:]/g, function(he) {
      return $[he];
    });
  }
  var se = /\/+/g;
  function ce(P, $) {
    return typeof P == "object" && P !== null && P.key != null ? ue("" + P.key) : $.toString(36);
  }
  function we(P, $, he, ye, pe) {
    var ge = typeof P;
    (ge === "undefined" || ge === "boolean") && (P = null);
    var Se = !1;
    if (P === null) Se = !0;
    else switch (ge) {
      case "string":
      case "number":
        Se = !0;
        break;
      case "object":
        switch (P.$$typeof) {
          case e:
          case t:
            Se = !0;
        }
    }
    if (Se) return Se = P, pe = pe(Se), P = ye === "" ? "." + ce(Se, 0) : ye, D(pe) ? (he = "", P != null && (he = P.replace(se, "$&/") + "/"), we(pe, $, he, "", function(Ke) {
      return Ke;
    })) : pe != null && (le(pe) && (pe = G(pe, he + (!pe.key || Se && Se.key === pe.key ? "" : ("" + pe.key).replace(se, "$&/") + "/") + P)), $.push(pe)), 1;
    if (Se = 0, ye = ye === "" ? "." : ye + ":", D(P)) for (var be = 0; be < P.length; be++) {
      ge = P[be];
      var xe = ye + ce(ge, be);
      Se += we(ge, $, he, xe, pe);
    }
    else if (xe = w(P), typeof xe == "function") for (P = xe.call(P), be = 0; !(ge = P.next()).done; ) ge = ge.value, xe = ye + ce(ge, be++), Se += we(ge, $, he, xe, pe);
    else if (ge === "object") throw $ = String(P), Error("Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(P).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead.");
    return Se;
  }
  function _e(P, $, he) {
    if (P == null) return P;
    var ye = [], pe = 0;
    return we(P, ye, "", "", function(ge) {
      return $.call(he, ge, pe++);
    }), ye;
  }
  function Ce(P) {
    if (P._status === -1) {
      var $ = P._result;
      $ = $(), $.then(function(he) {
        (P._status === 0 || P._status === -1) && (P._status = 1, P._result = he);
      }, function(he) {
        (P._status === 0 || P._status === -1) && (P._status = 2, P._result = he);
      }), P._status === -1 && (P._status = 0, P._result = $);
    }
    if (P._status === 1) return P._result.default;
    throw P._result;
  }
  var ve = { current: null }, V = { transition: null }, J = { ReactCurrentDispatcher: ve, ReactCurrentBatchConfig: V, ReactCurrentOwner: Z };
  function X() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return ke.Children = { map: _e, forEach: function(P, $, he) {
    _e(P, function() {
      $.apply(this, arguments);
    }, he);
  }, count: function(P) {
    var $ = 0;
    return _e(P, function() {
      $++;
    }), $;
  }, toArray: function(P) {
    return _e(P, function($) {
      return $;
    }) || [];
  }, only: function(P) {
    if (!le(P)) throw Error("React.Children.only expected to receive a single React element child.");
    return P;
  } }, ke.Component = S, ke.Fragment = i, ke.Profiler = a, ke.PureComponent = O, ke.StrictMode = o, ke.Suspense = h, ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J, ke.act = X, ke.cloneElement = function(P, $, he) {
    if (P == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + P + ".");
    var ye = k({}, P.props), pe = P.key, ge = P.ref, Se = P._owner;
    if ($ != null) {
      if ($.ref !== void 0 && (ge = $.ref, Se = Z.current), $.key !== void 0 && (pe = "" + $.key), P.type && P.type.defaultProps) var be = P.type.defaultProps;
      for (xe in $) K.call($, xe) && !z.hasOwnProperty(xe) && (ye[xe] = $[xe] === void 0 && be !== void 0 ? be[xe] : $[xe]);
    }
    var xe = arguments.length - 2;
    if (xe === 1) ye.children = he;
    else if (1 < xe) {
      be = Array(xe);
      for (var Ke = 0; Ke < xe; Ke++) be[Ke] = arguments[Ke + 2];
      ye.children = be;
    }
    return { $$typeof: e, type: P.type, key: pe, ref: ge, props: ye, _owner: Se };
  }, ke.createContext = function(P) {
    return P = { $$typeof: c, _currentValue: P, _currentValue2: P, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, P.Provider = { $$typeof: l, _context: P }, P.Consumer = P;
  }, ke.createElement = W, ke.createFactory = function(P) {
    var $ = W.bind(null, P);
    return $.type = P, $;
  }, ke.createRef = function() {
    return { current: null };
  }, ke.forwardRef = function(P) {
    return { $$typeof: d, render: P };
  }, ke.isValidElement = le, ke.lazy = function(P) {
    return { $$typeof: g, _payload: { _status: -1, _result: P }, _init: Ce };
  }, ke.memo = function(P, $) {
    return { $$typeof: m, type: P, compare: $ === void 0 ? null : $ };
  }, ke.startTransition = function(P) {
    var $ = V.transition;
    V.transition = {};
    try {
      P();
    } finally {
      V.transition = $;
    }
  }, ke.unstable_act = X, ke.useCallback = function(P, $) {
    return ve.current.useCallback(P, $);
  }, ke.useContext = function(P) {
    return ve.current.useContext(P);
  }, ke.useDebugValue = function() {
  }, ke.useDeferredValue = function(P) {
    return ve.current.useDeferredValue(P);
  }, ke.useEffect = function(P, $) {
    return ve.current.useEffect(P, $);
  }, ke.useId = function() {
    return ve.current.useId();
  }, ke.useImperativeHandle = function(P, $, he) {
    return ve.current.useImperativeHandle(P, $, he);
  }, ke.useInsertionEffect = function(P, $) {
    return ve.current.useInsertionEffect(P, $);
  }, ke.useLayoutEffect = function(P, $) {
    return ve.current.useLayoutEffect(P, $);
  }, ke.useMemo = function(P, $) {
    return ve.current.useMemo(P, $);
  }, ke.useReducer = function(P, $, he) {
    return ve.current.useReducer(P, $, he);
  }, ke.useRef = function(P) {
    return ve.current.useRef(P);
  }, ke.useState = function(P) {
    return ve.current.useState(P);
  }, ke.useSyncExternalStore = function(P, $, he) {
    return ve.current.useSyncExternalStore(P, $, he);
  }, ke.useTransition = function() {
    return ve.current.useTransition();
  }, ke.version = "18.3.1", ke;
}
var wh;
function Fc() {
  return wh || (wh = 1, _u.exports = X1()), _u.exports;
}
var N = Fc();
const Rs = /* @__PURE__ */ Y1(N);
var Ds = {}, Pu = { exports: {} }, Pt = {}, Eu = { exports: {} }, Cu = {};
var xh;
function Q1() {
  return xh || (xh = 1, (function(e) {
    function t(V, J) {
      var X = V.length;
      V.push(J);
      e: for (; 0 < X; ) {
        var P = X - 1 >>> 1, $ = V[P];
        if (0 < a($, J)) V[P] = J, V[X] = $, X = P;
        else break e;
      }
    }
    function i(V) {
      return V.length === 0 ? null : V[0];
    }
    function o(V) {
      if (V.length === 0) return null;
      var J = V[0], X = V.pop();
      if (X !== J) {
        V[0] = X;
        e: for (var P = 0, $ = V.length, he = $ >>> 1; P < he; ) {
          var ye = 2 * (P + 1) - 1, pe = V[ye], ge = ye + 1, Se = V[ge];
          if (0 > a(pe, X)) ge < $ && 0 > a(Se, pe) ? (V[P] = Se, V[ge] = X, P = ge) : (V[P] = pe, V[ye] = X, P = ye);
          else if (ge < $ && 0 > a(Se, X)) V[P] = Se, V[ge] = X, P = ge;
          else break e;
        }
      }
      return J;
    }
    function a(V, J) {
      var X = V.sortIndex - J.sortIndex;
      return X !== 0 ? X : V.id - J.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var l = performance;
      e.unstable_now = function() {
        return l.now();
      };
    } else {
      var c = Date, d = c.now();
      e.unstable_now = function() {
        return c.now() - d;
      };
    }
    var h = [], m = [], g = 1, y = null, w = 3, b = !1, k = !1, T = !1, S = typeof setTimeout == "function" ? setTimeout : null, R = typeof clearTimeout == "function" ? clearTimeout : null, O = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function I(V) {
      for (var J = i(m); J !== null; ) {
        if (J.callback === null) o(m);
        else if (J.startTime <= V) o(m), J.sortIndex = J.expirationTime, t(h, J);
        else break;
        J = i(m);
      }
    }
    function D(V) {
      if (T = !1, I(V), !k) if (i(h) !== null) k = !0, Ce(K);
      else {
        var J = i(m);
        J !== null && ve(D, J.startTime - V);
      }
    }
    function K(V, J) {
      k = !1, T && (T = !1, R(W), W = -1), b = !0;
      var X = w;
      try {
        for (I(J), y = i(h); y !== null && (!(y.expirationTime > J) || V && !ue()); ) {
          var P = y.callback;
          if (typeof P == "function") {
            y.callback = null, w = y.priorityLevel;
            var $ = P(y.expirationTime <= J);
            J = e.unstable_now(), typeof $ == "function" ? y.callback = $ : y === i(h) && o(h), I(J);
          } else o(h);
          y = i(h);
        }
        if (y !== null) var he = !0;
        else {
          var ye = i(m);
          ye !== null && ve(D, ye.startTime - J), he = !1;
        }
        return he;
      } finally {
        y = null, w = X, b = !1;
      }
    }
    var Z = !1, z = null, W = -1, G = 5, le = -1;
    function ue() {
      return !(e.unstable_now() - le < G);
    }
    function se() {
      if (z !== null) {
        var V = e.unstable_now();
        le = V;
        var J = !0;
        try {
          J = z(!0, V);
        } finally {
          J ? ce() : (Z = !1, z = null);
        }
      } else Z = !1;
    }
    var ce;
    if (typeof O == "function") ce = function() {
      O(se);
    };
    else if (typeof MessageChannel < "u") {
      var we = new MessageChannel(), _e = we.port2;
      we.port1.onmessage = se, ce = function() {
        _e.postMessage(null);
      };
    } else ce = function() {
      S(se, 0);
    };
    function Ce(V) {
      z = V, Z || (Z = !0, ce());
    }
    function ve(V, J) {
      W = S(function() {
        V(e.unstable_now());
      }, J);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(V) {
      V.callback = null;
    }, e.unstable_continueExecution = function() {
      k || b || (k = !0, Ce(K));
    }, e.unstable_forceFrameRate = function(V) {
      0 > V || 125 < V ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < V ? Math.floor(1e3 / V) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, e.unstable_getFirstCallbackNode = function() {
      return i(h);
    }, e.unstable_next = function(V) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var J = 3;
          break;
        default:
          J = w;
      }
      var X = w;
      w = J;
      try {
        return V();
      } finally {
        w = X;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(V, J) {
      switch (V) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          V = 3;
      }
      var X = w;
      w = V;
      try {
        return J();
      } finally {
        w = X;
      }
    }, e.unstable_scheduleCallback = function(V, J, X) {
      var P = e.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? P + X : P) : X = P, V) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return $ = X + $, V = { id: g++, callback: J, priorityLevel: V, startTime: X, expirationTime: $, sortIndex: -1 }, X > P ? (V.sortIndex = X, t(m, V), i(h) === null && V === i(m) && (T ? (R(W), W = -1) : T = !0, ve(D, X - P))) : (V.sortIndex = $, t(h, V), k || b || (k = !0, Ce(K))), V;
    }, e.unstable_shouldYield = ue, e.unstable_wrapCallback = function(V) {
      var J = w;
      return function() {
        var X = w;
        w = J;
        try {
          return V.apply(this, arguments);
        } finally {
          w = X;
        }
      };
    };
  })(Cu)), Cu;
}
var bh;
function J1() {
  return bh || (bh = 1, Eu.exports = Q1()), Eu.exports;
}
var kh;
function q1() {
  if (kh) return Pt;
  kh = 1;
  var e = Fc(), t = J1();
  function i(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, s = 1; s < arguments.length; s++) r += "&args[]=" + encodeURIComponent(arguments[s]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var o = /* @__PURE__ */ new Set(), a = {};
  function l(n, r) {
    c(n, r), c(n + "Capture", r);
  }
  function c(n, r) {
    for (a[n] = r, n = 0; n < r.length; n++) o.add(r[n]);
  }
  var d = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), h = Object.prototype.hasOwnProperty, m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, g = {}, y = {};
  function w(n) {
    return h.call(y, n) ? !0 : h.call(g, n) ? !1 : m.test(n) ? y[n] = !0 : (g[n] = !0, !1);
  }
  function b(n, r, s, u) {
    if (s !== null && s.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : s !== null ? !s.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function k(n, r, s, u) {
    if (r === null || typeof r > "u" || b(n, r, s, u)) return !0;
    if (u) return !1;
    if (s !== null) switch (s.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function T(n, r, s, u, f, p, v) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = f, this.mustUseProperty = s, this.propertyName = n, this.type = r, this.sanitizeURL = p, this.removeEmptyString = v;
  }
  var S = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    S[n] = new T(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    S[r] = new T(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    S[n] = new T(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    S[n] = new T(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    S[n] = new T(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    S[n] = new T(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    S[n] = new T(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    S[n] = new T(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    S[n] = new T(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var R = /[\-:]([a-z])/g;
  function O(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      R,
      O
    );
    S[r] = new T(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(R, O);
    S[r] = new T(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(R, O);
    S[r] = new T(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    S[n] = new T(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), S.xlinkHref = new T("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    S[n] = new T(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function I(n, r, s, u) {
    var f = S.hasOwnProperty(r) ? S[r] : null;
    (f !== null ? f.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (k(r, s, f, u) && (s = null), u || f === null ? w(r) && (s === null ? n.removeAttribute(r) : n.setAttribute(r, "" + s)) : f.mustUseProperty ? n[f.propertyName] = s === null ? f.type === 3 ? !1 : "" : s : (r = f.attributeName, u = f.attributeNamespace, s === null ? n.removeAttribute(r) : (f = f.type, s = f === 3 || f === 4 && s === !0 ? "" : "" + s, u ? n.setAttributeNS(u, r, s) : n.setAttribute(r, s))));
  }
  var D = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, K = /* @__PURE__ */ Symbol.for("react.element"), Z = /* @__PURE__ */ Symbol.for("react.portal"), z = /* @__PURE__ */ Symbol.for("react.fragment"), W = /* @__PURE__ */ Symbol.for("react.strict_mode"), G = /* @__PURE__ */ Symbol.for("react.profiler"), le = /* @__PURE__ */ Symbol.for("react.provider"), ue = /* @__PURE__ */ Symbol.for("react.context"), se = /* @__PURE__ */ Symbol.for("react.forward_ref"), ce = /* @__PURE__ */ Symbol.for("react.suspense"), we = /* @__PURE__ */ Symbol.for("react.suspense_list"), _e = /* @__PURE__ */ Symbol.for("react.memo"), Ce = /* @__PURE__ */ Symbol.for("react.lazy"), ve = /* @__PURE__ */ Symbol.for("react.offscreen"), V = Symbol.iterator;
  function J(n) {
    return n === null || typeof n != "object" ? null : (n = V && n[V] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var X = Object.assign, P;
  function $(n) {
    if (P === void 0) try {
      throw Error();
    } catch (s) {
      var r = s.stack.trim().match(/\n( *(at )?)/);
      P = r && r[1] || "";
    }
    return `
` + P + n;
  }
  var he = !1;
  function ye(n, r) {
    if (!n || he) return "";
    he = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (M) {
          var u = M;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (M) {
          u = M;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (M) {
          u = M;
        }
        n();
      }
    } catch (M) {
      if (M && u && typeof M.stack == "string") {
        for (var f = M.stack.split(`
`), p = u.stack.split(`
`), v = f.length - 1, x = p.length - 1; 1 <= v && 0 <= x && f[v] !== p[x]; ) x--;
        for (; 1 <= v && 0 <= x; v--, x--) if (f[v] !== p[x]) {
          if (v !== 1 || x !== 1)
            do
              if (v--, x--, 0 > x || f[v] !== p[x]) {
                var _ = `
` + f[v].replace(" at new ", " at ");
                return n.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", n.displayName)), _;
              }
            while (1 <= v && 0 <= x);
          break;
        }
      }
    } finally {
      he = !1, Error.prepareStackTrace = s;
    }
    return (n = n ? n.displayName || n.name : "") ? $(n) : "";
  }
  function pe(n) {
    switch (n.tag) {
      case 5:
        return $(n.type);
      case 16:
        return $("Lazy");
      case 13:
        return $("Suspense");
      case 19:
        return $("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = ye(n.type, !1), n;
      case 11:
        return n = ye(n.type.render, !1), n;
      case 1:
        return n = ye(n.type, !0), n;
      default:
        return "";
    }
  }
  function ge(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case z:
        return "Fragment";
      case Z:
        return "Portal";
      case G:
        return "Profiler";
      case W:
        return "StrictMode";
      case ce:
        return "Suspense";
      case we:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case ue:
        return (n.displayName || "Context") + ".Consumer";
      case le:
        return (n._context.displayName || "Context") + ".Provider";
      case se:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case _e:
        return r = n.displayName || null, r !== null ? r : ge(n.type) || "Memo";
      case Ce:
        r = n._payload, n = n._init;
        try {
          return ge(n(r));
        } catch {
        }
    }
    return null;
  }
  function Se(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ge(r);
      case 8:
        return r === W ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function be(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function xe(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Ke(n) {
    var r = xe(n) ? "checked" : "value", s = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
      var f = s.get, p = s.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return f.call(this);
      }, set: function(v) {
        u = "" + v, p.call(this, v);
      } }), Object.defineProperty(n, r, { enumerable: s.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(v) {
        u = "" + v;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Rt(n) {
    n._valueTracker || (n._valueTracker = Ke(n));
  }
  function ht(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var s = r.getValue(), u = "";
    return n && (u = xe(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== s ? (r.setValue(n), !0) : !1;
  }
  function Zt(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function U(n, r) {
    var s = r.checked;
    return X({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: s ?? n._wrapperState.initialChecked });
  }
  function q(n, r) {
    var s = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    s = be(r.value != null ? r.value : s), n._wrapperState = { initialChecked: u, initialValue: s, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Te(n, r) {
    r = r.checked, r != null && I(n, "checked", r, !1);
  }
  function ut(n, r) {
    Te(n, r);
    var s = be(r.value), u = r.type;
    if (s != null) u === "number" ? (s === 0 && n.value === "" || n.value != s) && (n.value = "" + s) : n.value !== "" + s && (n.value = "" + s);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Ma(n, r.type, s) : r.hasOwnProperty("defaultValue") && Ma(n, r.type, be(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Wt(n, r, s) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, s || r === n.value || (n.value = r), n.defaultValue = r;
    }
    s = n.name, s !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, s !== "" && (n.name = s);
  }
  function Ma(n, r, s) {
    (r !== "number" || Zt(n.ownerDocument) !== n) && (s == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + s && (n.defaultValue = "" + s));
  }
  var di = Array.isArray;
  function Pr(n, r, s, u) {
    if (n = n.options, r) {
      r = {};
      for (var f = 0; f < s.length; f++) r["$" + s[f]] = !0;
      for (s = 0; s < n.length; s++) f = r.hasOwnProperty("$" + n[s].value), n[s].selected !== f && (n[s].selected = f), f && u && (n[s].defaultSelected = !0);
    } else {
      for (s = "" + be(s), r = null, f = 0; f < n.length; f++) {
        if (n[f].value === s) {
          n[f].selected = !0, u && (n[f].defaultSelected = !0);
          return;
        }
        r !== null || n[f].disabled || (r = n[f]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Ra(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(i(91));
    return X({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Tf(n, r) {
    var s = r.value;
    if (s == null) {
      if (s = r.children, r = r.defaultValue, s != null) {
        if (r != null) throw Error(i(92));
        if (di(s)) {
          if (1 < s.length) throw Error(i(93));
          s = s[0];
        }
        r = s;
      }
      r == null && (r = ""), s = r;
    }
    n._wrapperState = { initialValue: be(s) };
  }
  function zf(n, r) {
    var s = be(r.value), u = be(r.defaultValue);
    s != null && (s = "" + s, s !== n.value && (n.value = s), r.defaultValue == null && n.defaultValue !== s && (n.defaultValue = s)), u != null && (n.defaultValue = "" + u);
  }
  function Af(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Of(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Da(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Of(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Eo, jf = (function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, s, u, f) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, s, u, f);
      });
    } : n;
  })(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Eo = Eo || document.createElement("div"), Eo.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Eo.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function pi(n, r) {
    if (r) {
      var s = n.firstChild;
      if (s && s === n.lastChild && s.nodeType === 3) {
        s.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var hi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, q0 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(hi).forEach(function(n) {
    q0.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), hi[r] = hi[n];
    });
  });
  function Mf(n, r, s) {
    return r == null || typeof r == "boolean" || r === "" ? "" : s || typeof r != "number" || r === 0 || hi.hasOwnProperty(n) && hi[n] ? ("" + r).trim() : r + "px";
  }
  function Rf(n, r) {
    n = n.style;
    for (var s in r) if (r.hasOwnProperty(s)) {
      var u = s.indexOf("--") === 0, f = Mf(s, r[s], u);
      s === "float" && (s = "cssFloat"), u ? n.setProperty(s, f) : n[s] = f;
    }
  }
  var ew = X({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Na(n, r) {
    if (r) {
      if (ew[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(i(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(i(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(i(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(i(62));
    }
  }
  function Ia(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var La = null;
  function $a(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Va = null, Er = null, Cr = null;
  function Df(n) {
    if (n = Ni(n)) {
      if (typeof Va != "function") throw Error(i(280));
      var r = n.stateNode;
      r && (r = Yo(r), Va(n.stateNode, n.type, r));
    }
  }
  function Nf(n) {
    Er ? Cr ? Cr.push(n) : Cr = [n] : Er = n;
  }
  function If() {
    if (Er) {
      var n = Er, r = Cr;
      if (Cr = Er = null, Df(n), r) for (n = 0; n < r.length; n++) Df(r[n]);
    }
  }
  function Lf(n, r) {
    return n(r);
  }
  function $f() {
  }
  var Fa = !1;
  function Vf(n, r, s) {
    if (Fa) return n(r, s);
    Fa = !0;
    try {
      return Lf(n, r, s);
    } finally {
      Fa = !1, (Er !== null || Cr !== null) && ($f(), If());
    }
  }
  function mi(n, r) {
    var s = n.stateNode;
    if (s === null) return null;
    var u = Yo(s);
    if (u === null) return null;
    s = u[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (s && typeof s != "function") throw Error(i(231, r, typeof s));
    return s;
  }
  var Ba = !1;
  if (d) try {
    var gi = {};
    Object.defineProperty(gi, "passive", { get: function() {
      Ba = !0;
    } }), window.addEventListener("test", gi, gi), window.removeEventListener("test", gi, gi);
  } catch {
    Ba = !1;
  }
  function tw(n, r, s, u, f, p, v, x, _) {
    var M = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(s, M);
    } catch (B) {
      this.onError(B);
    }
  }
  var yi = !1, Co = null, To = !1, Ua = null, nw = { onError: function(n) {
    yi = !0, Co = n;
  } };
  function rw(n, r, s, u, f, p, v, x, _) {
    yi = !1, Co = null, tw.apply(nw, arguments);
  }
  function iw(n, r, s, u, f, p, v, x, _) {
    if (rw.apply(this, arguments), yi) {
      if (yi) {
        var M = Co;
        yi = !1, Co = null;
      } else throw Error(i(198));
      To || (To = !0, Ua = M);
    }
  }
  function er(n) {
    var r = n, s = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, (r.flags & 4098) !== 0 && (s = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? s : null;
  }
  function Ff(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Bf(n) {
    if (er(n) !== n) throw Error(i(188));
  }
  function ow(n) {
    var r = n.alternate;
    if (!r) {
      if (r = er(n), r === null) throw Error(i(188));
      return r !== n ? null : n;
    }
    for (var s = n, u = r; ; ) {
      var f = s.return;
      if (f === null) break;
      var p = f.alternate;
      if (p === null) {
        if (u = f.return, u !== null) {
          s = u;
          continue;
        }
        break;
      }
      if (f.child === p.child) {
        for (p = f.child; p; ) {
          if (p === s) return Bf(f), n;
          if (p === u) return Bf(f), r;
          p = p.sibling;
        }
        throw Error(i(188));
      }
      if (s.return !== u.return) s = f, u = p;
      else {
        for (var v = !1, x = f.child; x; ) {
          if (x === s) {
            v = !0, s = f, u = p;
            break;
          }
          if (x === u) {
            v = !0, u = f, s = p;
            break;
          }
          x = x.sibling;
        }
        if (!v) {
          for (x = p.child; x; ) {
            if (x === s) {
              v = !0, s = p, u = f;
              break;
            }
            if (x === u) {
              v = !0, u = p, s = f;
              break;
            }
            x = x.sibling;
          }
          if (!v) throw Error(i(189));
        }
      }
      if (s.alternate !== u) throw Error(i(190));
    }
    if (s.tag !== 3) throw Error(i(188));
    return s.stateNode.current === s ? n : r;
  }
  function Uf(n) {
    return n = ow(n), n !== null ? Zf(n) : null;
  }
  function Zf(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = Zf(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var Wf = t.unstable_scheduleCallback, Hf = t.unstable_cancelCallback, sw = t.unstable_shouldYield, aw = t.unstable_requestPaint, We = t.unstable_now, lw = t.unstable_getCurrentPriorityLevel, Za = t.unstable_ImmediatePriority, Kf = t.unstable_UserBlockingPriority, zo = t.unstable_NormalPriority, uw = t.unstable_LowPriority, Gf = t.unstable_IdlePriority, Ao = null, nn = null;
  function cw(n) {
    if (nn && typeof nn.onCommitFiberRoot == "function") try {
      nn.onCommitFiberRoot(Ao, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Ht = Math.clz32 ? Math.clz32 : pw, fw = Math.log, dw = Math.LN2;
  function pw(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (fw(n) / dw | 0) | 0;
  }
  var Oo = 64, jo = 4194304;
  function vi(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Mo(n, r) {
    var s = n.pendingLanes;
    if (s === 0) return 0;
    var u = 0, f = n.suspendedLanes, p = n.pingedLanes, v = s & 268435455;
    if (v !== 0) {
      var x = v & ~f;
      x !== 0 ? u = vi(x) : (p &= v, p !== 0 && (u = vi(p)));
    } else v = s & ~f, v !== 0 ? u = vi(v) : p !== 0 && (u = vi(p));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && (r & f) === 0 && (f = u & -u, p = r & -r, f >= p || f === 16 && (p & 4194240) !== 0)) return r;
    if ((u & 4) !== 0 && (u |= s & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) s = 31 - Ht(r), f = 1 << s, u |= n[s], r &= ~f;
    return u;
  }
  function hw(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function mw(n, r) {
    for (var s = n.suspendedLanes, u = n.pingedLanes, f = n.expirationTimes, p = n.pendingLanes; 0 < p; ) {
      var v = 31 - Ht(p), x = 1 << v, _ = f[v];
      _ === -1 ? ((x & s) === 0 || (x & u) !== 0) && (f[v] = hw(x, r)) : _ <= r && (n.expiredLanes |= x), p &= ~x;
    }
  }
  function Wa(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Yf() {
    var n = Oo;
    return Oo <<= 1, (Oo & 4194240) === 0 && (Oo = 64), n;
  }
  function Ha(n) {
    for (var r = [], s = 0; 31 > s; s++) r.push(n);
    return r;
  }
  function wi(n, r, s) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Ht(r), n[r] = s;
  }
  function gw(n, r) {
    var s = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < s; ) {
      var f = 31 - Ht(s), p = 1 << f;
      r[f] = 0, u[f] = -1, n[f] = -1, s &= ~p;
    }
  }
  function Ka(n, r) {
    var s = n.entangledLanes |= r;
    for (n = n.entanglements; s; ) {
      var u = 31 - Ht(s), f = 1 << u;
      f & r | n[u] & r && (n[u] |= r), s &= ~f;
    }
  }
  var ze = 0;
  function Xf(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Qf, Ga, Jf, qf, ed, Ya = !1, Ro = [], En = null, Cn = null, Tn = null, xi = /* @__PURE__ */ new Map(), bi = /* @__PURE__ */ new Map(), zn = [], yw = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function td(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        En = null;
        break;
      case "dragenter":
      case "dragleave":
        Cn = null;
        break;
      case "mouseover":
      case "mouseout":
        Tn = null;
        break;
      case "pointerover":
      case "pointerout":
        xi.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        bi.delete(r.pointerId);
    }
  }
  function ki(n, r, s, u, f, p) {
    return n === null || n.nativeEvent !== p ? (n = { blockedOn: r, domEventName: s, eventSystemFlags: u, nativeEvent: p, targetContainers: [f] }, r !== null && (r = Ni(r), r !== null && Ga(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, f !== null && r.indexOf(f) === -1 && r.push(f), n);
  }
  function vw(n, r, s, u, f) {
    switch (r) {
      case "focusin":
        return En = ki(En, n, r, s, u, f), !0;
      case "dragenter":
        return Cn = ki(Cn, n, r, s, u, f), !0;
      case "mouseover":
        return Tn = ki(Tn, n, r, s, u, f), !0;
      case "pointerover":
        var p = f.pointerId;
        return xi.set(p, ki(xi.get(p) || null, n, r, s, u, f)), !0;
      case "gotpointercapture":
        return p = f.pointerId, bi.set(p, ki(bi.get(p) || null, n, r, s, u, f)), !0;
    }
    return !1;
  }
  function nd(n) {
    var r = tr(n.target);
    if (r !== null) {
      var s = er(r);
      if (s !== null) {
        if (r = s.tag, r === 13) {
          if (r = Ff(s), r !== null) {
            n.blockedOn = r, ed(n.priority, function() {
              Jf(s);
            });
            return;
          }
        } else if (r === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Do(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var s = Qa(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (s === null) {
        s = n.nativeEvent;
        var u = new s.constructor(s.type, s);
        La = u, s.target.dispatchEvent(u), La = null;
      } else return r = Ni(s), r !== null && Ga(r), n.blockedOn = s, !1;
      r.shift();
    }
    return !0;
  }
  function rd(n, r, s) {
    Do(n) && s.delete(r);
  }
  function ww() {
    Ya = !1, En !== null && Do(En) && (En = null), Cn !== null && Do(Cn) && (Cn = null), Tn !== null && Do(Tn) && (Tn = null), xi.forEach(rd), bi.forEach(rd);
  }
  function Si(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Ya || (Ya = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, ww)));
  }
  function _i(n) {
    function r(f) {
      return Si(f, n);
    }
    if (0 < Ro.length) {
      Si(Ro[0], n);
      for (var s = 1; s < Ro.length; s++) {
        var u = Ro[s];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (En !== null && Si(En, n), Cn !== null && Si(Cn, n), Tn !== null && Si(Tn, n), xi.forEach(r), bi.forEach(r), s = 0; s < zn.length; s++) u = zn[s], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < zn.length && (s = zn[0], s.blockedOn === null); ) nd(s), s.blockedOn === null && zn.shift();
  }
  var Tr = D.ReactCurrentBatchConfig, No = !0;
  function xw(n, r, s, u) {
    var f = ze, p = Tr.transition;
    Tr.transition = null;
    try {
      ze = 1, Xa(n, r, s, u);
    } finally {
      ze = f, Tr.transition = p;
    }
  }
  function bw(n, r, s, u) {
    var f = ze, p = Tr.transition;
    Tr.transition = null;
    try {
      ze = 4, Xa(n, r, s, u);
    } finally {
      ze = f, Tr.transition = p;
    }
  }
  function Xa(n, r, s, u) {
    if (No) {
      var f = Qa(n, r, s, u);
      if (f === null) hl(n, r, u, Io, s), td(n, u);
      else if (vw(f, n, r, s, u)) u.stopPropagation();
      else if (td(n, u), r & 4 && -1 < yw.indexOf(n)) {
        for (; f !== null; ) {
          var p = Ni(f);
          if (p !== null && Qf(p), p = Qa(n, r, s, u), p === null && hl(n, r, u, Io, s), p === f) break;
          f = p;
        }
        f !== null && u.stopPropagation();
      } else hl(n, r, u, null, s);
    }
  }
  var Io = null;
  function Qa(n, r, s, u) {
    if (Io = null, n = $a(u), n = tr(n), n !== null) if (r = er(n), r === null) n = null;
    else if (s = r.tag, s === 13) {
      if (n = Ff(r), n !== null) return n;
      n = null;
    } else if (s === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Io = n, null;
  }
  function id(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (lw()) {
          case Za:
            return 1;
          case Kf:
            return 4;
          case zo:
          case uw:
            return 16;
          case Gf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var An = null, Ja = null, Lo = null;
  function od() {
    if (Lo) return Lo;
    var n, r = Ja, s = r.length, u, f = "value" in An ? An.value : An.textContent, p = f.length;
    for (n = 0; n < s && r[n] === f[n]; n++) ;
    var v = s - n;
    for (u = 1; u <= v && r[s - u] === f[p - u]; u++) ;
    return Lo = f.slice(n, 1 < u ? 1 - u : void 0);
  }
  function $o(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Vo() {
    return !0;
  }
  function sd() {
    return !1;
  }
  function zt(n) {
    function r(s, u, f, p, v) {
      this._reactName = s, this._targetInst = f, this.type = u, this.nativeEvent = p, this.target = v, this.currentTarget = null;
      for (var x in n) n.hasOwnProperty(x) && (s = n[x], this[x] = s ? s(p) : p[x]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? Vo : sd, this.isPropagationStopped = sd, this;
    }
    return X(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var s = this.nativeEvent;
      s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1), this.isDefaultPrevented = Vo);
    }, stopPropagation: function() {
      var s = this.nativeEvent;
      s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0), this.isPropagationStopped = Vo);
    }, persist: function() {
    }, isPersistent: Vo }), r;
  }
  var zr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, qa = zt(zr), Pi = X({}, zr, { view: 0, detail: 0 }), kw = zt(Pi), el, tl, Ei, Fo = X({}, Pi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: rl, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Ei && (Ei && n.type === "mousemove" ? (el = n.screenX - Ei.screenX, tl = n.screenY - Ei.screenY) : tl = el = 0, Ei = n), el);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : tl;
  } }), ad = zt(Fo), Sw = X({}, Fo, { dataTransfer: 0 }), _w = zt(Sw), Pw = X({}, Pi, { relatedTarget: 0 }), nl = zt(Pw), Ew = X({}, zr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Cw = zt(Ew), Tw = X({}, zr, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), zw = zt(Tw), Aw = X({}, zr, { data: 0 }), ld = zt(Aw), Ow = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, jw = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Mw = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Rw(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Mw[n]) ? !!r[n] : !1;
  }
  function rl() {
    return Rw;
  }
  var Dw = X({}, Pi, { key: function(n) {
    if (n.key) {
      var r = Ow[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = $o(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? jw[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: rl, charCode: function(n) {
    return n.type === "keypress" ? $o(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? $o(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Nw = zt(Dw), Iw = X({}, Fo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ud = zt(Iw), Lw = X({}, Pi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: rl }), $w = zt(Lw), Vw = X({}, zr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Fw = zt(Vw), Bw = X({}, Fo, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Uw = zt(Bw), Zw = [9, 13, 27, 32], il = d && "CompositionEvent" in window, Ci = null;
  d && "documentMode" in document && (Ci = document.documentMode);
  var Ww = d && "TextEvent" in window && !Ci, cd = d && (!il || Ci && 8 < Ci && 11 >= Ci), fd = " ", dd = !1;
  function pd(n, r) {
    switch (n) {
      case "keyup":
        return Zw.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function hd(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Ar = !1;
  function Hw(n, r) {
    switch (n) {
      case "compositionend":
        return hd(r);
      case "keypress":
        return r.which !== 32 ? null : (dd = !0, fd);
      case "textInput":
        return n = r.data, n === fd && dd ? null : n;
      default:
        return null;
    }
  }
  function Kw(n, r) {
    if (Ar) return n === "compositionend" || !il && pd(n, r) ? (n = od(), Lo = Ja = An = null, Ar = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return cd && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Gw = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function md(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Gw[n.type] : r === "textarea";
  }
  function gd(n, r, s, u) {
    Nf(u), r = Ho(r, "onChange"), 0 < r.length && (s = new qa("onChange", "change", null, s, u), n.push({ event: s, listeners: r }));
  }
  var Ti = null, zi = null;
  function Yw(n) {
    Rd(n, 0);
  }
  function Bo(n) {
    var r = Dr(n);
    if (ht(r)) return n;
  }
  function Xw(n, r) {
    if (n === "change") return r;
  }
  var yd = !1;
  if (d) {
    var ol;
    if (d) {
      var sl = "oninput" in document;
      if (!sl) {
        var vd = document.createElement("div");
        vd.setAttribute("oninput", "return;"), sl = typeof vd.oninput == "function";
      }
      ol = sl;
    } else ol = !1;
    yd = ol && (!document.documentMode || 9 < document.documentMode);
  }
  function wd() {
    Ti && (Ti.detachEvent("onpropertychange", xd), zi = Ti = null);
  }
  function xd(n) {
    if (n.propertyName === "value" && Bo(zi)) {
      var r = [];
      gd(r, zi, n, $a(n)), Vf(Yw, r);
    }
  }
  function Qw(n, r, s) {
    n === "focusin" ? (wd(), Ti = r, zi = s, Ti.attachEvent("onpropertychange", xd)) : n === "focusout" && wd();
  }
  function Jw(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Bo(zi);
  }
  function qw(n, r) {
    if (n === "click") return Bo(r);
  }
  function e1(n, r) {
    if (n === "input" || n === "change") return Bo(r);
  }
  function t1(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Kt = typeof Object.is == "function" ? Object.is : t1;
  function Ai(n, r) {
    if (Kt(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var s = Object.keys(n), u = Object.keys(r);
    if (s.length !== u.length) return !1;
    for (u = 0; u < s.length; u++) {
      var f = s[u];
      if (!h.call(r, f) || !Kt(n[f], r[f])) return !1;
    }
    return !0;
  }
  function bd(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function kd(n, r) {
    var s = bd(n);
    n = 0;
    for (var u; s; ) {
      if (s.nodeType === 3) {
        if (u = n + s.textContent.length, n <= r && u >= r) return { node: s, offset: r - n };
        n = u;
      }
      e: {
        for (; s; ) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break e;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = bd(s);
    }
  }
  function Sd(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Sd(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function _d() {
    for (var n = window, r = Zt(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var s = typeof r.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s) n = r.contentWindow;
      else break;
      r = Zt(n.document);
    }
    return r;
  }
  function al(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function n1(n) {
    var r = _d(), s = n.focusedElem, u = n.selectionRange;
    if (r !== s && s && s.ownerDocument && Sd(s.ownerDocument.documentElement, s)) {
      if (u !== null && al(s)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in s) s.selectionStart = r, s.selectionEnd = Math.min(n, s.value.length);
        else if (n = (r = s.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var f = s.textContent.length, p = Math.min(u.start, f);
          u = u.end === void 0 ? p : Math.min(u.end, f), !n.extend && p > u && (f = u, u = p, p = f), f = kd(s, p);
          var v = kd(
            s,
            u
          );
          f && v && (n.rangeCount !== 1 || n.anchorNode !== f.node || n.anchorOffset !== f.offset || n.focusNode !== v.node || n.focusOffset !== v.offset) && (r = r.createRange(), r.setStart(f.node, f.offset), n.removeAllRanges(), p > u ? (n.addRange(r), n.extend(v.node, v.offset)) : (r.setEnd(v.node, v.offset), n.addRange(r)));
        }
      }
      for (r = [], n = s; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof s.focus == "function" && s.focus(), s = 0; s < r.length; s++) n = r[s], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var r1 = d && "documentMode" in document && 11 >= document.documentMode, Or = null, ll = null, Oi = null, ul = !1;
  function Pd(n, r, s) {
    var u = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    ul || Or == null || Or !== Zt(u) || (u = Or, "selectionStart" in u && al(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), Oi && Ai(Oi, u) || (Oi = u, u = Ho(ll, "onSelect"), 0 < u.length && (r = new qa("onSelect", "select", null, r, s), n.push({ event: r, listeners: u }), r.target = Or)));
  }
  function Uo(n, r) {
    var s = {};
    return s[n.toLowerCase()] = r.toLowerCase(), s["Webkit" + n] = "webkit" + r, s["Moz" + n] = "moz" + r, s;
  }
  var jr = { animationend: Uo("Animation", "AnimationEnd"), animationiteration: Uo("Animation", "AnimationIteration"), animationstart: Uo("Animation", "AnimationStart"), transitionend: Uo("Transition", "TransitionEnd") }, cl = {}, Ed = {};
  d && (Ed = document.createElement("div").style, "AnimationEvent" in window || (delete jr.animationend.animation, delete jr.animationiteration.animation, delete jr.animationstart.animation), "TransitionEvent" in window || delete jr.transitionend.transition);
  function Zo(n) {
    if (cl[n]) return cl[n];
    if (!jr[n]) return n;
    var r = jr[n], s;
    for (s in r) if (r.hasOwnProperty(s) && s in Ed) return cl[n] = r[s];
    return n;
  }
  var Cd = Zo("animationend"), Td = Zo("animationiteration"), zd = Zo("animationstart"), Ad = Zo("transitionend"), Od = /* @__PURE__ */ new Map(), jd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function On(n, r) {
    Od.set(n, r), l(r, [n]);
  }
  for (var fl = 0; fl < jd.length; fl++) {
    var dl = jd[fl], i1 = dl.toLowerCase(), o1 = dl[0].toUpperCase() + dl.slice(1);
    On(i1, "on" + o1);
  }
  On(Cd, "onAnimationEnd"), On(Td, "onAnimationIteration"), On(zd, "onAnimationStart"), On("dblclick", "onDoubleClick"), On("focusin", "onFocus"), On("focusout", "onBlur"), On(Ad, "onTransitionEnd"), c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ji = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), s1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(ji));
  function Md(n, r, s) {
    var u = n.type || "unknown-event";
    n.currentTarget = s, iw(u, r, void 0, n), n.currentTarget = null;
  }
  function Rd(n, r) {
    r = (r & 4) !== 0;
    for (var s = 0; s < n.length; s++) {
      var u = n[s], f = u.event;
      u = u.listeners;
      e: {
        var p = void 0;
        if (r) for (var v = u.length - 1; 0 <= v; v--) {
          var x = u[v], _ = x.instance, M = x.currentTarget;
          if (x = x.listener, _ !== p && f.isPropagationStopped()) break e;
          Md(f, x, M), p = _;
        }
        else for (v = 0; v < u.length; v++) {
          if (x = u[v], _ = x.instance, M = x.currentTarget, x = x.listener, _ !== p && f.isPropagationStopped()) break e;
          Md(f, x, M), p = _;
        }
      }
    }
    if (To) throw n = Ua, To = !1, Ua = null, n;
  }
  function Re(n, r) {
    var s = r[xl];
    s === void 0 && (s = r[xl] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    s.has(u) || (Dd(r, n, 2, !1), s.add(u));
  }
  function pl(n, r, s) {
    var u = 0;
    r && (u |= 4), Dd(s, n, u, r);
  }
  var Wo = "_reactListening" + Math.random().toString(36).slice(2);
  function Mi(n) {
    if (!n[Wo]) {
      n[Wo] = !0, o.forEach(function(s) {
        s !== "selectionchange" && (s1.has(s) || pl(s, !1, n), pl(s, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Wo] || (r[Wo] = !0, pl("selectionchange", !1, r));
    }
  }
  function Dd(n, r, s, u) {
    switch (id(r)) {
      case 1:
        var f = xw;
        break;
      case 4:
        f = bw;
        break;
      default:
        f = Xa;
    }
    s = f.bind(null, r, s, n), f = void 0, !Ba || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (f = !0), u ? f !== void 0 ? n.addEventListener(r, s, { capture: !0, passive: f }) : n.addEventListener(r, s, !0) : f !== void 0 ? n.addEventListener(r, s, { passive: f }) : n.addEventListener(r, s, !1);
  }
  function hl(n, r, s, u, f) {
    var p = u;
    if ((r & 1) === 0 && (r & 2) === 0 && u !== null) e: for (; ; ) {
      if (u === null) return;
      var v = u.tag;
      if (v === 3 || v === 4) {
        var x = u.stateNode.containerInfo;
        if (x === f || x.nodeType === 8 && x.parentNode === f) break;
        if (v === 4) for (v = u.return; v !== null; ) {
          var _ = v.tag;
          if ((_ === 3 || _ === 4) && (_ = v.stateNode.containerInfo, _ === f || _.nodeType === 8 && _.parentNode === f)) return;
          v = v.return;
        }
        for (; x !== null; ) {
          if (v = tr(x), v === null) return;
          if (_ = v.tag, _ === 5 || _ === 6) {
            u = p = v;
            continue e;
          }
          x = x.parentNode;
        }
      }
      u = u.return;
    }
    Vf(function() {
      var M = p, B = $a(s), H = [];
      e: {
        var F = Od.get(n);
        if (F !== void 0) {
          var ee = qa, ne = n;
          switch (n) {
            case "keypress":
              if ($o(s) === 0) break e;
            case "keydown":
            case "keyup":
              ee = Nw;
              break;
            case "focusin":
              ne = "focus", ee = nl;
              break;
            case "focusout":
              ne = "blur", ee = nl;
              break;
            case "beforeblur":
            case "afterblur":
              ee = nl;
              break;
            case "click":
              if (s.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ee = ad;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ee = _w;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ee = $w;
              break;
            case Cd:
            case Td:
            case zd:
              ee = Cw;
              break;
            case Ad:
              ee = Fw;
              break;
            case "scroll":
              ee = kw;
              break;
            case "wheel":
              ee = Uw;
              break;
            case "copy":
            case "cut":
            case "paste":
              ee = zw;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ee = ud;
          }
          var ie = (r & 4) !== 0, He = !ie && n === "scroll", A = ie ? F !== null ? F + "Capture" : null : F;
          ie = [];
          for (var E = M, j; E !== null; ) {
            j = E;
            var Y = j.stateNode;
            if (j.tag === 5 && Y !== null && (j = Y, A !== null && (Y = mi(E, A), Y != null && ie.push(Ri(E, Y, j)))), He) break;
            E = E.return;
          }
          0 < ie.length && (F = new ee(F, ne, null, s, B), H.push({ event: F, listeners: ie }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (F = n === "mouseover" || n === "pointerover", ee = n === "mouseout" || n === "pointerout", F && s !== La && (ne = s.relatedTarget || s.fromElement) && (tr(ne) || ne[pn])) break e;
          if ((ee || F) && (F = B.window === B ? B : (F = B.ownerDocument) ? F.defaultView || F.parentWindow : window, ee ? (ne = s.relatedTarget || s.toElement, ee = M, ne = ne ? tr(ne) : null, ne !== null && (He = er(ne), ne !== He || ne.tag !== 5 && ne.tag !== 6) && (ne = null)) : (ee = null, ne = M), ee !== ne)) {
            if (ie = ad, Y = "onMouseLeave", A = "onMouseEnter", E = "mouse", (n === "pointerout" || n === "pointerover") && (ie = ud, Y = "onPointerLeave", A = "onPointerEnter", E = "pointer"), He = ee == null ? F : Dr(ee), j = ne == null ? F : Dr(ne), F = new ie(Y, E + "leave", ee, s, B), F.target = He, F.relatedTarget = j, Y = null, tr(B) === M && (ie = new ie(A, E + "enter", ne, s, B), ie.target = j, ie.relatedTarget = He, Y = ie), He = Y, ee && ne) t: {
              for (ie = ee, A = ne, E = 0, j = ie; j; j = Mr(j)) E++;
              for (j = 0, Y = A; Y; Y = Mr(Y)) j++;
              for (; 0 < E - j; ) ie = Mr(ie), E--;
              for (; 0 < j - E; ) A = Mr(A), j--;
              for (; E--; ) {
                if (ie === A || A !== null && ie === A.alternate) break t;
                ie = Mr(ie), A = Mr(A);
              }
              ie = null;
            }
            else ie = null;
            ee !== null && Nd(H, F, ee, ie, !1), ne !== null && He !== null && Nd(H, He, ne, ie, !0);
          }
        }
        e: {
          if (F = M ? Dr(M) : window, ee = F.nodeName && F.nodeName.toLowerCase(), ee === "select" || ee === "input" && F.type === "file") var oe = Xw;
          else if (md(F)) if (yd) oe = e1;
          else {
            oe = Jw;
            var fe = Qw;
          }
          else (ee = F.nodeName) && ee.toLowerCase() === "input" && (F.type === "checkbox" || F.type === "radio") && (oe = qw);
          if (oe && (oe = oe(n, M))) {
            gd(H, oe, s, B);
            break e;
          }
          fe && fe(n, F, M), n === "focusout" && (fe = F._wrapperState) && fe.controlled && F.type === "number" && Ma(F, "number", F.value);
        }
        switch (fe = M ? Dr(M) : window, n) {
          case "focusin":
            (md(fe) || fe.contentEditable === "true") && (Or = fe, ll = M, Oi = null);
            break;
          case "focusout":
            Oi = ll = Or = null;
            break;
          case "mousedown":
            ul = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ul = !1, Pd(H, s, B);
            break;
          case "selectionchange":
            if (r1) break;
          case "keydown":
          case "keyup":
            Pd(H, s, B);
        }
        var de;
        if (il) e: {
          switch (n) {
            case "compositionstart":
              var me = "onCompositionStart";
              break e;
            case "compositionend":
              me = "onCompositionEnd";
              break e;
            case "compositionupdate":
              me = "onCompositionUpdate";
              break e;
          }
          me = void 0;
        }
        else Ar ? pd(n, s) && (me = "onCompositionEnd") : n === "keydown" && s.keyCode === 229 && (me = "onCompositionStart");
        me && (cd && s.locale !== "ko" && (Ar || me !== "onCompositionStart" ? me === "onCompositionEnd" && Ar && (de = od()) : (An = B, Ja = "value" in An ? An.value : An.textContent, Ar = !0)), fe = Ho(M, me), 0 < fe.length && (me = new ld(me, n, null, s, B), H.push({ event: me, listeners: fe }), de ? me.data = de : (de = hd(s), de !== null && (me.data = de)))), (de = Ww ? Hw(n, s) : Kw(n, s)) && (M = Ho(M, "onBeforeInput"), 0 < M.length && (B = new ld("onBeforeInput", "beforeinput", null, s, B), H.push({ event: B, listeners: M }), B.data = de));
      }
      Rd(H, r);
    });
  }
  function Ri(n, r, s) {
    return { instance: n, listener: r, currentTarget: s };
  }
  function Ho(n, r) {
    for (var s = r + "Capture", u = []; n !== null; ) {
      var f = n, p = f.stateNode;
      f.tag === 5 && p !== null && (f = p, p = mi(n, s), p != null && u.unshift(Ri(n, p, f)), p = mi(n, r), p != null && u.push(Ri(n, p, f))), n = n.return;
    }
    return u;
  }
  function Mr(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Nd(n, r, s, u, f) {
    for (var p = r._reactName, v = []; s !== null && s !== u; ) {
      var x = s, _ = x.alternate, M = x.stateNode;
      if (_ !== null && _ === u) break;
      x.tag === 5 && M !== null && (x = M, f ? (_ = mi(s, p), _ != null && v.unshift(Ri(s, _, x))) : f || (_ = mi(s, p), _ != null && v.push(Ri(s, _, x)))), s = s.return;
    }
    v.length !== 0 && n.push({ event: r, listeners: v });
  }
  var a1 = /\r\n?/g, l1 = /\u0000|\uFFFD/g;
  function Id(n) {
    return (typeof n == "string" ? n : "" + n).replace(a1, `
`).replace(l1, "");
  }
  function Ko(n, r, s) {
    if (r = Id(r), Id(n) !== r && s) throw Error(i(425));
  }
  function Go() {
  }
  var ml = null, gl = null;
  function yl(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var vl = typeof setTimeout == "function" ? setTimeout : void 0, u1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Ld = typeof Promise == "function" ? Promise : void 0, c1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ld < "u" ? function(n) {
    return Ld.resolve(null).then(n).catch(f1);
  } : vl;
  function f1(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function wl(n, r) {
    var s = r, u = 0;
    do {
      var f = s.nextSibling;
      if (n.removeChild(s), f && f.nodeType === 8) if (s = f.data, s === "/$") {
        if (u === 0) {
          n.removeChild(f), _i(r);
          return;
        }
        u--;
      } else s !== "$" && s !== "$?" && s !== "$!" || u++;
      s = f;
    } while (s);
    _i(r);
  }
  function jn(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function $d(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var s = n.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (r === 0) return n;
          r--;
        } else s === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Rr = Math.random().toString(36).slice(2), rn = "__reactFiber$" + Rr, Di = "__reactProps$" + Rr, pn = "__reactContainer$" + Rr, xl = "__reactEvents$" + Rr, d1 = "__reactListeners$" + Rr, p1 = "__reactHandles$" + Rr;
  function tr(n) {
    var r = n[rn];
    if (r) return r;
    for (var s = n.parentNode; s; ) {
      if (r = s[pn] || s[rn]) {
        if (s = r.alternate, r.child !== null || s !== null && s.child !== null) for (n = $d(n); n !== null; ) {
          if (s = n[rn]) return s;
          n = $d(n);
        }
        return r;
      }
      n = s, s = n.parentNode;
    }
    return null;
  }
  function Ni(n) {
    return n = n[rn] || n[pn], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Dr(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(i(33));
  }
  function Yo(n) {
    return n[Di] || null;
  }
  var bl = [], Nr = -1;
  function Mn(n) {
    return { current: n };
  }
  function De(n) {
    0 > Nr || (n.current = bl[Nr], bl[Nr] = null, Nr--);
  }
  function Me(n, r) {
    Nr++, bl[Nr] = n.current, n.current = r;
  }
  var Rn = {}, ct = Mn(Rn), xt = Mn(!1), nr = Rn;
  function Ir(n, r) {
    var s = n.type.contextTypes;
    if (!s) return Rn;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var f = {}, p;
    for (p in s) f[p] = r[p];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = f), f;
  }
  function bt(n) {
    return n = n.childContextTypes, n != null;
  }
  function Xo() {
    De(xt), De(ct);
  }
  function Vd(n, r, s) {
    if (ct.current !== Rn) throw Error(i(168));
    Me(ct, r), Me(xt, s);
  }
  function Fd(n, r, s) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return s;
    u = u.getChildContext();
    for (var f in u) if (!(f in r)) throw Error(i(108, Se(n) || "Unknown", f));
    return X({}, s, u);
  }
  function Qo(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Rn, nr = ct.current, Me(ct, n), Me(xt, xt.current), !0;
  }
  function Bd(n, r, s) {
    var u = n.stateNode;
    if (!u) throw Error(i(169));
    s ? (n = Fd(n, r, nr), u.__reactInternalMemoizedMergedChildContext = n, De(xt), De(ct), Me(ct, n)) : De(xt), Me(xt, s);
  }
  var hn = null, Jo = !1, kl = !1;
  function Ud(n) {
    hn === null ? hn = [n] : hn.push(n);
  }
  function h1(n) {
    Jo = !0, Ud(n);
  }
  function Dn() {
    if (!kl && hn !== null) {
      kl = !0;
      var n = 0, r = ze;
      try {
        var s = hn;
        for (ze = 1; n < s.length; n++) {
          var u = s[n];
          do
            u = u(!0);
          while (u !== null);
        }
        hn = null, Jo = !1;
      } catch (f) {
        throw hn !== null && (hn = hn.slice(n + 1)), Wf(Za, Dn), f;
      } finally {
        ze = r, kl = !1;
      }
    }
    return null;
  }
  var Lr = [], $r = 0, qo = null, es = 0, Dt = [], Nt = 0, rr = null, mn = 1, gn = "";
  function ir(n, r) {
    Lr[$r++] = es, Lr[$r++] = qo, qo = n, es = r;
  }
  function Zd(n, r, s) {
    Dt[Nt++] = mn, Dt[Nt++] = gn, Dt[Nt++] = rr, rr = n;
    var u = mn;
    n = gn;
    var f = 32 - Ht(u) - 1;
    u &= ~(1 << f), s += 1;
    var p = 32 - Ht(r) + f;
    if (30 < p) {
      var v = f - f % 5;
      p = (u & (1 << v) - 1).toString(32), u >>= v, f -= v, mn = 1 << 32 - Ht(r) + f | s << f | u, gn = p + n;
    } else mn = 1 << p | s << f | u, gn = n;
  }
  function Sl(n) {
    n.return !== null && (ir(n, 1), Zd(n, 1, 0));
  }
  function _l(n) {
    for (; n === qo; ) qo = Lr[--$r], Lr[$r] = null, es = Lr[--$r], Lr[$r] = null;
    for (; n === rr; ) rr = Dt[--Nt], Dt[Nt] = null, gn = Dt[--Nt], Dt[Nt] = null, mn = Dt[--Nt], Dt[Nt] = null;
  }
  var At = null, Ot = null, Ne = !1, Gt = null;
  function Wd(n, r) {
    var s = Vt(5, null, null, 0);
    s.elementType = "DELETED", s.stateNode = r, s.return = n, r = n.deletions, r === null ? (n.deletions = [s], n.flags |= 16) : r.push(s);
  }
  function Hd(n, r) {
    switch (n.tag) {
      case 5:
        var s = n.type;
        return r = r.nodeType !== 1 || s.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, At = n, Ot = jn(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, At = n, Ot = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (s = rr !== null ? { id: mn, overflow: gn } : null, n.memoizedState = { dehydrated: r, treeContext: s, retryLane: 1073741824 }, s = Vt(18, null, null, 0), s.stateNode = r, s.return = n, n.child = s, At = n, Ot = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Pl(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function El(n) {
    if (Ne) {
      var r = Ot;
      if (r) {
        var s = r;
        if (!Hd(n, r)) {
          if (Pl(n)) throw Error(i(418));
          r = jn(s.nextSibling);
          var u = At;
          r && Hd(n, r) ? Wd(u, s) : (n.flags = n.flags & -4097 | 2, Ne = !1, At = n);
        }
      } else {
        if (Pl(n)) throw Error(i(418));
        n.flags = n.flags & -4097 | 2, Ne = !1, At = n;
      }
    }
  }
  function Kd(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    At = n;
  }
  function ts(n) {
    if (n !== At) return !1;
    if (!Ne) return Kd(n), Ne = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !yl(n.type, n.memoizedProps)), r && (r = Ot)) {
      if (Pl(n)) throw Gd(), Error(i(418));
      for (; r; ) Wd(n, r), r = jn(r.nextSibling);
    }
    if (Kd(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(i(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var s = n.data;
            if (s === "/$") {
              if (r === 0) {
                Ot = jn(n.nextSibling);
                break e;
              }
              r--;
            } else s !== "$" && s !== "$!" && s !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Ot = null;
      }
    } else Ot = At ? jn(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Gd() {
    for (var n = Ot; n; ) n = jn(n.nextSibling);
  }
  function Vr() {
    Ot = At = null, Ne = !1;
  }
  function Cl(n) {
    Gt === null ? Gt = [n] : Gt.push(n);
  }
  var m1 = D.ReactCurrentBatchConfig;
  function Ii(n, r, s) {
    if (n = s.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (s._owner) {
        if (s = s._owner, s) {
          if (s.tag !== 1) throw Error(i(309));
          var u = s.stateNode;
        }
        if (!u) throw Error(i(147, n));
        var f = u, p = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === p ? r.ref : (r = function(v) {
          var x = f.refs;
          v === null ? delete x[p] : x[p] = v;
        }, r._stringRef = p, r);
      }
      if (typeof n != "string") throw Error(i(284));
      if (!s._owner) throw Error(i(290, n));
    }
    return n;
  }
  function ns(n, r) {
    throw n = Object.prototype.toString.call(r), Error(i(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Yd(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Xd(n) {
    function r(A, E) {
      if (n) {
        var j = A.deletions;
        j === null ? (A.deletions = [E], A.flags |= 16) : j.push(E);
      }
    }
    function s(A, E) {
      if (!n) return null;
      for (; E !== null; ) r(A, E), E = E.sibling;
      return null;
    }
    function u(A, E) {
      for (A = /* @__PURE__ */ new Map(); E !== null; ) E.key !== null ? A.set(E.key, E) : A.set(E.index, E), E = E.sibling;
      return A;
    }
    function f(A, E) {
      return A = Un(A, E), A.index = 0, A.sibling = null, A;
    }
    function p(A, E, j) {
      return A.index = j, n ? (j = A.alternate, j !== null ? (j = j.index, j < E ? (A.flags |= 2, E) : j) : (A.flags |= 2, E)) : (A.flags |= 1048576, E);
    }
    function v(A) {
      return n && A.alternate === null && (A.flags |= 2), A;
    }
    function x(A, E, j, Y) {
      return E === null || E.tag !== 6 ? (E = vu(j, A.mode, Y), E.return = A, E) : (E = f(E, j), E.return = A, E);
    }
    function _(A, E, j, Y) {
      var oe = j.type;
      return oe === z ? B(A, E, j.props.children, Y, j.key) : E !== null && (E.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === Ce && Yd(oe) === E.type) ? (Y = f(E, j.props), Y.ref = Ii(A, E, j), Y.return = A, Y) : (Y = Es(j.type, j.key, j.props, null, A.mode, Y), Y.ref = Ii(A, E, j), Y.return = A, Y);
    }
    function M(A, E, j, Y) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== j.containerInfo || E.stateNode.implementation !== j.implementation ? (E = wu(j, A.mode, Y), E.return = A, E) : (E = f(E, j.children || []), E.return = A, E);
    }
    function B(A, E, j, Y, oe) {
      return E === null || E.tag !== 7 ? (E = dr(j, A.mode, Y, oe), E.return = A, E) : (E = f(E, j), E.return = A, E);
    }
    function H(A, E, j) {
      if (typeof E == "string" && E !== "" || typeof E == "number") return E = vu("" + E, A.mode, j), E.return = A, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case K:
            return j = Es(E.type, E.key, E.props, null, A.mode, j), j.ref = Ii(A, null, E), j.return = A, j;
          case Z:
            return E = wu(E, A.mode, j), E.return = A, E;
          case Ce:
            var Y = E._init;
            return H(A, Y(E._payload), j);
        }
        if (di(E) || J(E)) return E = dr(E, A.mode, j, null), E.return = A, E;
        ns(A, E);
      }
      return null;
    }
    function F(A, E, j, Y) {
      var oe = E !== null ? E.key : null;
      if (typeof j == "string" && j !== "" || typeof j == "number") return oe !== null ? null : x(A, E, "" + j, Y);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case K:
            return j.key === oe ? _(A, E, j, Y) : null;
          case Z:
            return j.key === oe ? M(A, E, j, Y) : null;
          case Ce:
            return oe = j._init, F(
              A,
              E,
              oe(j._payload),
              Y
            );
        }
        if (di(j) || J(j)) return oe !== null ? null : B(A, E, j, Y, null);
        ns(A, j);
      }
      return null;
    }
    function ee(A, E, j, Y, oe) {
      if (typeof Y == "string" && Y !== "" || typeof Y == "number") return A = A.get(j) || null, x(E, A, "" + Y, oe);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case K:
            return A = A.get(Y.key === null ? j : Y.key) || null, _(E, A, Y, oe);
          case Z:
            return A = A.get(Y.key === null ? j : Y.key) || null, M(E, A, Y, oe);
          case Ce:
            var fe = Y._init;
            return ee(A, E, j, fe(Y._payload), oe);
        }
        if (di(Y) || J(Y)) return A = A.get(j) || null, B(E, A, Y, oe, null);
        ns(E, Y);
      }
      return null;
    }
    function ne(A, E, j, Y) {
      for (var oe = null, fe = null, de = E, me = E = 0, rt = null; de !== null && me < j.length; me++) {
        de.index > me ? (rt = de, de = null) : rt = de.sibling;
        var Ee = F(A, de, j[me], Y);
        if (Ee === null) {
          de === null && (de = rt);
          break;
        }
        n && de && Ee.alternate === null && r(A, de), E = p(Ee, E, me), fe === null ? oe = Ee : fe.sibling = Ee, fe = Ee, de = rt;
      }
      if (me === j.length) return s(A, de), Ne && ir(A, me), oe;
      if (de === null) {
        for (; me < j.length; me++) de = H(A, j[me], Y), de !== null && (E = p(de, E, me), fe === null ? oe = de : fe.sibling = de, fe = de);
        return Ne && ir(A, me), oe;
      }
      for (de = u(A, de); me < j.length; me++) rt = ee(de, A, me, j[me], Y), rt !== null && (n && rt.alternate !== null && de.delete(rt.key === null ? me : rt.key), E = p(rt, E, me), fe === null ? oe = rt : fe.sibling = rt, fe = rt);
      return n && de.forEach(function(Zn) {
        return r(A, Zn);
      }), Ne && ir(A, me), oe;
    }
    function ie(A, E, j, Y) {
      var oe = J(j);
      if (typeof oe != "function") throw Error(i(150));
      if (j = oe.call(j), j == null) throw Error(i(151));
      for (var fe = oe = null, de = E, me = E = 0, rt = null, Ee = j.next(); de !== null && !Ee.done; me++, Ee = j.next()) {
        de.index > me ? (rt = de, de = null) : rt = de.sibling;
        var Zn = F(A, de, Ee.value, Y);
        if (Zn === null) {
          de === null && (de = rt);
          break;
        }
        n && de && Zn.alternate === null && r(A, de), E = p(Zn, E, me), fe === null ? oe = Zn : fe.sibling = Zn, fe = Zn, de = rt;
      }
      if (Ee.done) return s(
        A,
        de
      ), Ne && ir(A, me), oe;
      if (de === null) {
        for (; !Ee.done; me++, Ee = j.next()) Ee = H(A, Ee.value, Y), Ee !== null && (E = p(Ee, E, me), fe === null ? oe = Ee : fe.sibling = Ee, fe = Ee);
        return Ne && ir(A, me), oe;
      }
      for (de = u(A, de); !Ee.done; me++, Ee = j.next()) Ee = ee(de, A, me, Ee.value, Y), Ee !== null && (n && Ee.alternate !== null && de.delete(Ee.key === null ? me : Ee.key), E = p(Ee, E, me), fe === null ? oe = Ee : fe.sibling = Ee, fe = Ee);
      return n && de.forEach(function(G1) {
        return r(A, G1);
      }), Ne && ir(A, me), oe;
    }
    function He(A, E, j, Y) {
      if (typeof j == "object" && j !== null && j.type === z && j.key === null && (j = j.props.children), typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case K:
            e: {
              for (var oe = j.key, fe = E; fe !== null; ) {
                if (fe.key === oe) {
                  if (oe = j.type, oe === z) {
                    if (fe.tag === 7) {
                      s(A, fe.sibling), E = f(fe, j.props.children), E.return = A, A = E;
                      break e;
                    }
                  } else if (fe.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === Ce && Yd(oe) === fe.type) {
                    s(A, fe.sibling), E = f(fe, j.props), E.ref = Ii(A, fe, j), E.return = A, A = E;
                    break e;
                  }
                  s(A, fe);
                  break;
                } else r(A, fe);
                fe = fe.sibling;
              }
              j.type === z ? (E = dr(j.props.children, A.mode, Y, j.key), E.return = A, A = E) : (Y = Es(j.type, j.key, j.props, null, A.mode, Y), Y.ref = Ii(A, E, j), Y.return = A, A = Y);
            }
            return v(A);
          case Z:
            e: {
              for (fe = j.key; E !== null; ) {
                if (E.key === fe) if (E.tag === 4 && E.stateNode.containerInfo === j.containerInfo && E.stateNode.implementation === j.implementation) {
                  s(A, E.sibling), E = f(E, j.children || []), E.return = A, A = E;
                  break e;
                } else {
                  s(A, E);
                  break;
                }
                else r(A, E);
                E = E.sibling;
              }
              E = wu(j, A.mode, Y), E.return = A, A = E;
            }
            return v(A);
          case Ce:
            return fe = j._init, He(A, E, fe(j._payload), Y);
        }
        if (di(j)) return ne(A, E, j, Y);
        if (J(j)) return ie(A, E, j, Y);
        ns(A, j);
      }
      return typeof j == "string" && j !== "" || typeof j == "number" ? (j = "" + j, E !== null && E.tag === 6 ? (s(A, E.sibling), E = f(E, j), E.return = A, A = E) : (s(A, E), E = vu(j, A.mode, Y), E.return = A, A = E), v(A)) : s(A, E);
    }
    return He;
  }
  var Fr = Xd(!0), Qd = Xd(!1), rs = Mn(null), is = null, Br = null, Tl = null;
  function zl() {
    Tl = Br = is = null;
  }
  function Al(n) {
    var r = rs.current;
    De(rs), n._currentValue = r;
  }
  function Ol(n, r, s) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === s) break;
      n = n.return;
    }
  }
  function Ur(n, r) {
    is = n, Tl = Br = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (kt = !0), n.firstContext = null);
  }
  function It(n) {
    var r = n._currentValue;
    if (Tl !== n) if (n = { context: n, memoizedValue: r, next: null }, Br === null) {
      if (is === null) throw Error(i(308));
      Br = n, is.dependencies = { lanes: 0, firstContext: n };
    } else Br = Br.next = n;
    return r;
  }
  var or = null;
  function jl(n) {
    or === null ? or = [n] : or.push(n);
  }
  function Jd(n, r, s, u) {
    var f = r.interleaved;
    return f === null ? (s.next = s, jl(r)) : (s.next = f.next, f.next = s), r.interleaved = s, yn(n, u);
  }
  function yn(n, r) {
    n.lanes |= r;
    var s = n.alternate;
    for (s !== null && (s.lanes |= r), s = n, n = n.return; n !== null; ) n.childLanes |= r, s = n.alternate, s !== null && (s.childLanes |= r), s = n, n = n.return;
    return s.tag === 3 ? s.stateNode : null;
  }
  var Nn = !1;
  function Ml(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function qd(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function vn(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function In(n, r, s) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (Pe & 2) !== 0) {
      var f = u.pending;
      return f === null ? r.next = r : (r.next = f.next, f.next = r), u.pending = r, yn(n, s);
    }
    return f = u.interleaved, f === null ? (r.next = r, jl(u)) : (r.next = f.next, f.next = r), u.interleaved = r, yn(n, s);
  }
  function os(n, r, s) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (s & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, s |= u, r.lanes = s, Ka(n, s);
    }
  }
  function ep(n, r) {
    var s = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, s === u)) {
      var f = null, p = null;
      if (s = s.firstBaseUpdate, s !== null) {
        do {
          var v = { eventTime: s.eventTime, lane: s.lane, tag: s.tag, payload: s.payload, callback: s.callback, next: null };
          p === null ? f = p = v : p = p.next = v, s = s.next;
        } while (s !== null);
        p === null ? f = p = r : p = p.next = r;
      } else f = p = r;
      s = { baseState: u.baseState, firstBaseUpdate: f, lastBaseUpdate: p, shared: u.shared, effects: u.effects }, n.updateQueue = s;
      return;
    }
    n = s.lastBaseUpdate, n === null ? s.firstBaseUpdate = r : n.next = r, s.lastBaseUpdate = r;
  }
  function ss(n, r, s, u) {
    var f = n.updateQueue;
    Nn = !1;
    var p = f.firstBaseUpdate, v = f.lastBaseUpdate, x = f.shared.pending;
    if (x !== null) {
      f.shared.pending = null;
      var _ = x, M = _.next;
      _.next = null, v === null ? p = M : v.next = M, v = _;
      var B = n.alternate;
      B !== null && (B = B.updateQueue, x = B.lastBaseUpdate, x !== v && (x === null ? B.firstBaseUpdate = M : x.next = M, B.lastBaseUpdate = _));
    }
    if (p !== null) {
      var H = f.baseState;
      v = 0, B = M = _ = null, x = p;
      do {
        var F = x.lane, ee = x.eventTime;
        if ((u & F) === F) {
          B !== null && (B = B.next = {
            eventTime: ee,
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          });
          e: {
            var ne = n, ie = x;
            switch (F = r, ee = s, ie.tag) {
              case 1:
                if (ne = ie.payload, typeof ne == "function") {
                  H = ne.call(ee, H, F);
                  break e;
                }
                H = ne;
                break e;
              case 3:
                ne.flags = ne.flags & -65537 | 128;
              case 0:
                if (ne = ie.payload, F = typeof ne == "function" ? ne.call(ee, H, F) : ne, F == null) break e;
                H = X({}, H, F);
                break e;
              case 2:
                Nn = !0;
            }
          }
          x.callback !== null && x.lane !== 0 && (n.flags |= 64, F = f.effects, F === null ? f.effects = [x] : F.push(x));
        } else ee = { eventTime: ee, lane: F, tag: x.tag, payload: x.payload, callback: x.callback, next: null }, B === null ? (M = B = ee, _ = H) : B = B.next = ee, v |= F;
        if (x = x.next, x === null) {
          if (x = f.shared.pending, x === null) break;
          F = x, x = F.next, F.next = null, f.lastBaseUpdate = F, f.shared.pending = null;
        }
      } while (!0);
      if (B === null && (_ = H), f.baseState = _, f.firstBaseUpdate = M, f.lastBaseUpdate = B, r = f.shared.interleaved, r !== null) {
        f = r;
        do
          v |= f.lane, f = f.next;
        while (f !== r);
      } else p === null && (f.shared.lanes = 0);
      lr |= v, n.lanes = v, n.memoizedState = H;
    }
  }
  function tp(n, r, s) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], f = u.callback;
      if (f !== null) {
        if (u.callback = null, u = s, typeof f != "function") throw Error(i(191, f));
        f.call(u);
      }
    }
  }
  var Li = {}, on = Mn(Li), $i = Mn(Li), Vi = Mn(Li);
  function sr(n) {
    if (n === Li) throw Error(i(174));
    return n;
  }
  function Rl(n, r) {
    switch (Me(Vi, r), Me($i, n), Me(on, Li), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Da(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Da(r, n);
    }
    De(on), Me(on, r);
  }
  function Zr() {
    De(on), De($i), De(Vi);
  }
  function np(n) {
    sr(Vi.current);
    var r = sr(on.current), s = Da(r, n.type);
    r !== s && (Me($i, n), Me(on, s));
  }
  function Dl(n) {
    $i.current === n && (De(on), De($i));
  }
  var Le = Mn(0);
  function as(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var s = r.memoizedState;
        if (s !== null && (s = s.dehydrated, s === null || s.data === "$?" || s.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Nl = [];
  function Il() {
    for (var n = 0; n < Nl.length; n++) Nl[n]._workInProgressVersionPrimary = null;
    Nl.length = 0;
  }
  var ls = D.ReactCurrentDispatcher, Ll = D.ReactCurrentBatchConfig, ar = 0, $e = null, Qe = null, tt = null, us = !1, Fi = !1, Bi = 0, g1 = 0;
  function ft() {
    throw Error(i(321));
  }
  function $l(n, r) {
    if (r === null) return !1;
    for (var s = 0; s < r.length && s < n.length; s++) if (!Kt(n[s], r[s])) return !1;
    return !0;
  }
  function Vl(n, r, s, u, f, p) {
    if (ar = p, $e = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, ls.current = n === null || n.memoizedState === null ? x1 : b1, n = s(u, f), Fi) {
      p = 0;
      do {
        if (Fi = !1, Bi = 0, 25 <= p) throw Error(i(301));
        p += 1, tt = Qe = null, r.updateQueue = null, ls.current = k1, n = s(u, f);
      } while (Fi);
    }
    if (ls.current = ds, r = Qe !== null && Qe.next !== null, ar = 0, tt = Qe = $e = null, us = !1, r) throw Error(i(300));
    return n;
  }
  function Fl() {
    var n = Bi !== 0;
    return Bi = 0, n;
  }
  function sn() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return tt === null ? $e.memoizedState = tt = n : tt = tt.next = n, tt;
  }
  function Lt() {
    if (Qe === null) {
      var n = $e.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Qe.next;
    var r = tt === null ? $e.memoizedState : tt.next;
    if (r !== null) tt = r, Qe = n;
    else {
      if (n === null) throw Error(i(310));
      Qe = n, n = { memoizedState: Qe.memoizedState, baseState: Qe.baseState, baseQueue: Qe.baseQueue, queue: Qe.queue, next: null }, tt === null ? $e.memoizedState = tt = n : tt = tt.next = n;
    }
    return tt;
  }
  function Ui(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Bl(n) {
    var r = Lt(), s = r.queue;
    if (s === null) throw Error(i(311));
    s.lastRenderedReducer = n;
    var u = Qe, f = u.baseQueue, p = s.pending;
    if (p !== null) {
      if (f !== null) {
        var v = f.next;
        f.next = p.next, p.next = v;
      }
      u.baseQueue = f = p, s.pending = null;
    }
    if (f !== null) {
      p = f.next, u = u.baseState;
      var x = v = null, _ = null, M = p;
      do {
        var B = M.lane;
        if ((ar & B) === B) _ !== null && (_ = _.next = { lane: 0, action: M.action, hasEagerState: M.hasEagerState, eagerState: M.eagerState, next: null }), u = M.hasEagerState ? M.eagerState : n(u, M.action);
        else {
          var H = {
            lane: B,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null
          };
          _ === null ? (x = _ = H, v = u) : _ = _.next = H, $e.lanes |= B, lr |= B;
        }
        M = M.next;
      } while (M !== null && M !== p);
      _ === null ? v = u : _.next = x, Kt(u, r.memoizedState) || (kt = !0), r.memoizedState = u, r.baseState = v, r.baseQueue = _, s.lastRenderedState = u;
    }
    if (n = s.interleaved, n !== null) {
      f = n;
      do
        p = f.lane, $e.lanes |= p, lr |= p, f = f.next;
      while (f !== n);
    } else f === null && (s.lanes = 0);
    return [r.memoizedState, s.dispatch];
  }
  function Ul(n) {
    var r = Lt(), s = r.queue;
    if (s === null) throw Error(i(311));
    s.lastRenderedReducer = n;
    var u = s.dispatch, f = s.pending, p = r.memoizedState;
    if (f !== null) {
      s.pending = null;
      var v = f = f.next;
      do
        p = n(p, v.action), v = v.next;
      while (v !== f);
      Kt(p, r.memoizedState) || (kt = !0), r.memoizedState = p, r.baseQueue === null && (r.baseState = p), s.lastRenderedState = p;
    }
    return [p, u];
  }
  function rp() {
  }
  function ip(n, r) {
    var s = $e, u = Lt(), f = r(), p = !Kt(u.memoizedState, f);
    if (p && (u.memoizedState = f, kt = !0), u = u.queue, Zl(ap.bind(null, s, u, n), [n]), u.getSnapshot !== r || p || tt !== null && tt.memoizedState.tag & 1) {
      if (s.flags |= 2048, Zi(9, sp.bind(null, s, u, f, r), void 0, null), nt === null) throw Error(i(349));
      (ar & 30) !== 0 || op(s, r, f);
    }
    return f;
  }
  function op(n, r, s) {
    n.flags |= 16384, n = { getSnapshot: r, value: s }, r = $e.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, $e.updateQueue = r, r.stores = [n]) : (s = r.stores, s === null ? r.stores = [n] : s.push(n));
  }
  function sp(n, r, s, u) {
    r.value = s, r.getSnapshot = u, lp(r) && up(n);
  }
  function ap(n, r, s) {
    return s(function() {
      lp(r) && up(n);
    });
  }
  function lp(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var s = r();
      return !Kt(n, s);
    } catch {
      return !0;
    }
  }
  function up(n) {
    var r = yn(n, 1);
    r !== null && Jt(r, n, 1, -1);
  }
  function cp(n) {
    var r = sn();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ui, lastRenderedState: n }, r.queue = n, n = n.dispatch = w1.bind(null, $e, n), [r.memoizedState, n];
  }
  function Zi(n, r, s, u) {
    return n = { tag: n, create: r, destroy: s, deps: u, next: null }, r = $e.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, $e.updateQueue = r, r.lastEffect = n.next = n) : (s = r.lastEffect, s === null ? r.lastEffect = n.next = n : (u = s.next, s.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function fp() {
    return Lt().memoizedState;
  }
  function cs(n, r, s, u) {
    var f = sn();
    $e.flags |= n, f.memoizedState = Zi(1 | r, s, void 0, u === void 0 ? null : u);
  }
  function fs(n, r, s, u) {
    var f = Lt();
    u = u === void 0 ? null : u;
    var p = void 0;
    if (Qe !== null) {
      var v = Qe.memoizedState;
      if (p = v.destroy, u !== null && $l(u, v.deps)) {
        f.memoizedState = Zi(r, s, p, u);
        return;
      }
    }
    $e.flags |= n, f.memoizedState = Zi(1 | r, s, p, u);
  }
  function dp(n, r) {
    return cs(8390656, 8, n, r);
  }
  function Zl(n, r) {
    return fs(2048, 8, n, r);
  }
  function pp(n, r) {
    return fs(4, 2, n, r);
  }
  function hp(n, r) {
    return fs(4, 4, n, r);
  }
  function mp(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function gp(n, r, s) {
    return s = s != null ? s.concat([n]) : null, fs(4, 4, mp.bind(null, r, n), s);
  }
  function Wl() {
  }
  function yp(n, r) {
    var s = Lt();
    r = r === void 0 ? null : r;
    var u = s.memoizedState;
    return u !== null && r !== null && $l(r, u[1]) ? u[0] : (s.memoizedState = [n, r], n);
  }
  function vp(n, r) {
    var s = Lt();
    r = r === void 0 ? null : r;
    var u = s.memoizedState;
    return u !== null && r !== null && $l(r, u[1]) ? u[0] : (n = n(), s.memoizedState = [n, r], n);
  }
  function wp(n, r, s) {
    return (ar & 21) === 0 ? (n.baseState && (n.baseState = !1, kt = !0), n.memoizedState = s) : (Kt(s, r) || (s = Yf(), $e.lanes |= s, lr |= s, n.baseState = !0), r);
  }
  function y1(n, r) {
    var s = ze;
    ze = s !== 0 && 4 > s ? s : 4, n(!0);
    var u = Ll.transition;
    Ll.transition = {};
    try {
      n(!1), r();
    } finally {
      ze = s, Ll.transition = u;
    }
  }
  function xp() {
    return Lt().memoizedState;
  }
  function v1(n, r, s) {
    var u = Fn(n);
    if (s = { lane: u, action: s, hasEagerState: !1, eagerState: null, next: null }, bp(n)) kp(r, s);
    else if (s = Jd(n, r, s, u), s !== null) {
      var f = gt();
      Jt(s, n, u, f), Sp(s, r, u);
    }
  }
  function w1(n, r, s) {
    var u = Fn(n), f = { lane: u, action: s, hasEagerState: !1, eagerState: null, next: null };
    if (bp(n)) kp(r, f);
    else {
      var p = n.alternate;
      if (n.lanes === 0 && (p === null || p.lanes === 0) && (p = r.lastRenderedReducer, p !== null)) try {
        var v = r.lastRenderedState, x = p(v, s);
        if (f.hasEagerState = !0, f.eagerState = x, Kt(x, v)) {
          var _ = r.interleaved;
          _ === null ? (f.next = f, jl(r)) : (f.next = _.next, _.next = f), r.interleaved = f;
          return;
        }
      } catch {
      }
      s = Jd(n, r, f, u), s !== null && (f = gt(), Jt(s, n, u, f), Sp(s, r, u));
    }
  }
  function bp(n) {
    var r = n.alternate;
    return n === $e || r !== null && r === $e;
  }
  function kp(n, r) {
    Fi = us = !0;
    var s = n.pending;
    s === null ? r.next = r : (r.next = s.next, s.next = r), n.pending = r;
  }
  function Sp(n, r, s) {
    if ((s & 4194240) !== 0) {
      var u = r.lanes;
      u &= n.pendingLanes, s |= u, r.lanes = s, Ka(n, s);
    }
  }
  var ds = { readContext: It, useCallback: ft, useContext: ft, useEffect: ft, useImperativeHandle: ft, useInsertionEffect: ft, useLayoutEffect: ft, useMemo: ft, useReducer: ft, useRef: ft, useState: ft, useDebugValue: ft, useDeferredValue: ft, useTransition: ft, useMutableSource: ft, useSyncExternalStore: ft, useId: ft, unstable_isNewReconciler: !1 }, x1 = { readContext: It, useCallback: function(n, r) {
    return sn().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: It, useEffect: dp, useImperativeHandle: function(n, r, s) {
    return s = s != null ? s.concat([n]) : null, cs(
      4194308,
      4,
      mp.bind(null, r, n),
      s
    );
  }, useLayoutEffect: function(n, r) {
    return cs(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return cs(4, 2, n, r);
  }, useMemo: function(n, r) {
    var s = sn();
    return r = r === void 0 ? null : r, n = n(), s.memoizedState = [n, r], n;
  }, useReducer: function(n, r, s) {
    var u = sn();
    return r = s !== void 0 ? s(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = v1.bind(null, $e, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = sn();
    return n = { current: n }, r.memoizedState = n;
  }, useState: cp, useDebugValue: Wl, useDeferredValue: function(n) {
    return sn().memoizedState = n;
  }, useTransition: function() {
    var n = cp(!1), r = n[0];
    return n = y1.bind(null, n[1]), sn().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, s) {
    var u = $e, f = sn();
    if (Ne) {
      if (s === void 0) throw Error(i(407));
      s = s();
    } else {
      if (s = r(), nt === null) throw Error(i(349));
      (ar & 30) !== 0 || op(u, r, s);
    }
    f.memoizedState = s;
    var p = { value: s, getSnapshot: r };
    return f.queue = p, dp(ap.bind(
      null,
      u,
      p,
      n
    ), [n]), u.flags |= 2048, Zi(9, sp.bind(null, u, p, s, r), void 0, null), s;
  }, useId: function() {
    var n = sn(), r = nt.identifierPrefix;
    if (Ne) {
      var s = gn, u = mn;
      s = (u & ~(1 << 32 - Ht(u) - 1)).toString(32) + s, r = ":" + r + "R" + s, s = Bi++, 0 < s && (r += "H" + s.toString(32)), r += ":";
    } else s = g1++, r = ":" + r + "r" + s.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, b1 = {
    readContext: It,
    useCallback: yp,
    useContext: It,
    useEffect: Zl,
    useImperativeHandle: gp,
    useInsertionEffect: pp,
    useLayoutEffect: hp,
    useMemo: vp,
    useReducer: Bl,
    useRef: fp,
    useState: function() {
      return Bl(Ui);
    },
    useDebugValue: Wl,
    useDeferredValue: function(n) {
      var r = Lt();
      return wp(r, Qe.memoizedState, n);
    },
    useTransition: function() {
      var n = Bl(Ui)[0], r = Lt().memoizedState;
      return [n, r];
    },
    useMutableSource: rp,
    useSyncExternalStore: ip,
    useId: xp,
    unstable_isNewReconciler: !1
  }, k1 = { readContext: It, useCallback: yp, useContext: It, useEffect: Zl, useImperativeHandle: gp, useInsertionEffect: pp, useLayoutEffect: hp, useMemo: vp, useReducer: Ul, useRef: fp, useState: function() {
    return Ul(Ui);
  }, useDebugValue: Wl, useDeferredValue: function(n) {
    var r = Lt();
    return Qe === null ? r.memoizedState = n : wp(r, Qe.memoizedState, n);
  }, useTransition: function() {
    var n = Ul(Ui)[0], r = Lt().memoizedState;
    return [n, r];
  }, useMutableSource: rp, useSyncExternalStore: ip, useId: xp, unstable_isNewReconciler: !1 };
  function Yt(n, r) {
    if (n && n.defaultProps) {
      r = X({}, r), n = n.defaultProps;
      for (var s in n) r[s] === void 0 && (r[s] = n[s]);
      return r;
    }
    return r;
  }
  function Hl(n, r, s, u) {
    r = n.memoizedState, s = s(u, r), s = s == null ? r : X({}, r, s), n.memoizedState = s, n.lanes === 0 && (n.updateQueue.baseState = s);
  }
  var ps = { isMounted: function(n) {
    return (n = n._reactInternals) ? er(n) === n : !1;
  }, enqueueSetState: function(n, r, s) {
    n = n._reactInternals;
    var u = gt(), f = Fn(n), p = vn(u, f);
    p.payload = r, s != null && (p.callback = s), r = In(n, p, f), r !== null && (Jt(r, n, f, u), os(r, n, f));
  }, enqueueReplaceState: function(n, r, s) {
    n = n._reactInternals;
    var u = gt(), f = Fn(n), p = vn(u, f);
    p.tag = 1, p.payload = r, s != null && (p.callback = s), r = In(n, p, f), r !== null && (Jt(r, n, f, u), os(r, n, f));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var s = gt(), u = Fn(n), f = vn(s, u);
    f.tag = 2, r != null && (f.callback = r), r = In(n, f, u), r !== null && (Jt(r, n, u, s), os(r, n, u));
  } };
  function _p(n, r, s, u, f, p, v) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, p, v) : r.prototype && r.prototype.isPureReactComponent ? !Ai(s, u) || !Ai(f, p) : !0;
  }
  function Pp(n, r, s) {
    var u = !1, f = Rn, p = r.contextType;
    return typeof p == "object" && p !== null ? p = It(p) : (f = bt(r) ? nr : ct.current, u = r.contextTypes, p = (u = u != null) ? Ir(n, f) : Rn), r = new r(s, p), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = ps, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = f, n.__reactInternalMemoizedMaskedChildContext = p), r;
  }
  function Ep(n, r, s, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(s, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(s, u), r.state !== n && ps.enqueueReplaceState(r, r.state, null);
  }
  function Kl(n, r, s, u) {
    var f = n.stateNode;
    f.props = s, f.state = n.memoizedState, f.refs = {}, Ml(n);
    var p = r.contextType;
    typeof p == "object" && p !== null ? f.context = It(p) : (p = bt(r) ? nr : ct.current, f.context = Ir(n, p)), f.state = n.memoizedState, p = r.getDerivedStateFromProps, typeof p == "function" && (Hl(n, r, p, s), f.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (r = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), r !== f.state && ps.enqueueReplaceState(f, f.state, null), ss(n, s, f, u), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Wr(n, r) {
    try {
      var s = "", u = r;
      do
        s += pe(u), u = u.return;
      while (u);
      var f = s;
    } catch (p) {
      f = `
Error generating stack: ` + p.message + `
` + p.stack;
    }
    return { value: n, source: r, stack: f, digest: null };
  }
  function Gl(n, r, s) {
    return { value: n, source: null, stack: s ?? null, digest: r ?? null };
  }
  function Yl(n, r) {
    try {
      console.error(r.value);
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  var S1 = typeof WeakMap == "function" ? WeakMap : Map;
  function Cp(n, r, s) {
    s = vn(-1, s), s.tag = 3, s.payload = { element: null };
    var u = r.value;
    return s.callback = function() {
      xs || (xs = !0, cu = u), Yl(n, r);
    }, s;
  }
  function Tp(n, r, s) {
    s = vn(-1, s), s.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var f = r.value;
      s.payload = function() {
        return u(f);
      }, s.callback = function() {
        Yl(n, r);
      };
    }
    var p = n.stateNode;
    return p !== null && typeof p.componentDidCatch == "function" && (s.callback = function() {
      Yl(n, r), typeof u != "function" && ($n === null ? $n = /* @__PURE__ */ new Set([this]) : $n.add(this));
      var v = r.stack;
      this.componentDidCatch(r.value, { componentStack: v !== null ? v : "" });
    }), s;
  }
  function zp(n, r, s) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new S1();
      var f = /* @__PURE__ */ new Set();
      u.set(r, f);
    } else f = u.get(r), f === void 0 && (f = /* @__PURE__ */ new Set(), u.set(r, f));
    f.has(s) || (f.add(s), n = I1.bind(null, n, r, s), r.then(n, n));
  }
  function Ap(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Op(n, r, s, u, f) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, s.flags |= 131072, s.flags &= -52805, s.tag === 1 && (s.alternate === null ? s.tag = 17 : (r = vn(-1, 1), r.tag = 2, In(s, r, 1))), s.lanes |= 1), n) : (n.flags |= 65536, n.lanes = f, n);
  }
  var _1 = D.ReactCurrentOwner, kt = !1;
  function mt(n, r, s, u) {
    r.child = n === null ? Qd(r, null, s, u) : Fr(r, n.child, s, u);
  }
  function jp(n, r, s, u, f) {
    s = s.render;
    var p = r.ref;
    return Ur(r, f), u = Vl(n, r, s, u, p, f), s = Fl(), n !== null && !kt ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, wn(n, r, f)) : (Ne && s && Sl(r), r.flags |= 1, mt(n, r, u, f), r.child);
  }
  function Mp(n, r, s, u, f) {
    if (n === null) {
      var p = s.type;
      return typeof p == "function" && !yu(p) && p.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (r.tag = 15, r.type = p, Rp(n, r, p, u, f)) : (n = Es(s.type, null, u, r, r.mode, f), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (p = n.child, (n.lanes & f) === 0) {
      var v = p.memoizedProps;
      if (s = s.compare, s = s !== null ? s : Ai, s(v, u) && n.ref === r.ref) return wn(n, r, f);
    }
    return r.flags |= 1, n = Un(p, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Rp(n, r, s, u, f) {
    if (n !== null) {
      var p = n.memoizedProps;
      if (Ai(p, u) && n.ref === r.ref) if (kt = !1, r.pendingProps = u = p, (n.lanes & f) !== 0) (n.flags & 131072) !== 0 && (kt = !0);
      else return r.lanes = n.lanes, wn(n, r, f);
    }
    return Xl(n, r, s, u, f);
  }
  function Dp(n, r, s) {
    var u = r.pendingProps, f = u.children, p = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Me(Kr, jt), jt |= s;
    else {
      if ((s & 1073741824) === 0) return n = p !== null ? p.baseLanes | s : s, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Me(Kr, jt), jt |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = p !== null ? p.baseLanes : s, Me(Kr, jt), jt |= u;
    }
    else p !== null ? (u = p.baseLanes | s, r.memoizedState = null) : u = s, Me(Kr, jt), jt |= u;
    return mt(n, r, f, s), r.child;
  }
  function Np(n, r) {
    var s = r.ref;
    (n === null && s !== null || n !== null && n.ref !== s) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Xl(n, r, s, u, f) {
    var p = bt(s) ? nr : ct.current;
    return p = Ir(r, p), Ur(r, f), s = Vl(n, r, s, u, p, f), u = Fl(), n !== null && !kt ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, wn(n, r, f)) : (Ne && u && Sl(r), r.flags |= 1, mt(n, r, s, f), r.child);
  }
  function Ip(n, r, s, u, f) {
    if (bt(s)) {
      var p = !0;
      Qo(r);
    } else p = !1;
    if (Ur(r, f), r.stateNode === null) ms(n, r), Pp(r, s, u), Kl(r, s, u, f), u = !0;
    else if (n === null) {
      var v = r.stateNode, x = r.memoizedProps;
      v.props = x;
      var _ = v.context, M = s.contextType;
      typeof M == "object" && M !== null ? M = It(M) : (M = bt(s) ? nr : ct.current, M = Ir(r, M));
      var B = s.getDerivedStateFromProps, H = typeof B == "function" || typeof v.getSnapshotBeforeUpdate == "function";
      H || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (x !== u || _ !== M) && Ep(r, v, u, M), Nn = !1;
      var F = r.memoizedState;
      v.state = F, ss(r, u, v, f), _ = r.memoizedState, x !== u || F !== _ || xt.current || Nn ? (typeof B == "function" && (Hl(r, s, B, u), _ = r.memoizedState), (x = Nn || _p(r, s, x, u, F, _, M)) ? (H || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount()), typeof v.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof v.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = _), v.props = u, v.state = _, v.context = M, u = x) : (typeof v.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      v = r.stateNode, qd(n, r), x = r.memoizedProps, M = r.type === r.elementType ? x : Yt(r.type, x), v.props = M, H = r.pendingProps, F = v.context, _ = s.contextType, typeof _ == "object" && _ !== null ? _ = It(_) : (_ = bt(s) ? nr : ct.current, _ = Ir(r, _));
      var ee = s.getDerivedStateFromProps;
      (B = typeof ee == "function" || typeof v.getSnapshotBeforeUpdate == "function") || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (x !== H || F !== _) && Ep(r, v, u, _), Nn = !1, F = r.memoizedState, v.state = F, ss(r, u, v, f);
      var ne = r.memoizedState;
      x !== H || F !== ne || xt.current || Nn ? (typeof ee == "function" && (Hl(r, s, ee, u), ne = r.memoizedState), (M = Nn || _p(r, s, M, u, F, ne, _) || !1) ? (B || typeof v.UNSAFE_componentWillUpdate != "function" && typeof v.componentWillUpdate != "function" || (typeof v.componentWillUpdate == "function" && v.componentWillUpdate(u, ne, _), typeof v.UNSAFE_componentWillUpdate == "function" && v.UNSAFE_componentWillUpdate(u, ne, _)), typeof v.componentDidUpdate == "function" && (r.flags |= 4), typeof v.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof v.componentDidUpdate != "function" || x === n.memoizedProps && F === n.memoizedState || (r.flags |= 4), typeof v.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && F === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = ne), v.props = u, v.state = ne, v.context = _, u = M) : (typeof v.componentDidUpdate != "function" || x === n.memoizedProps && F === n.memoizedState || (r.flags |= 4), typeof v.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && F === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return Ql(n, r, s, u, p, f);
  }
  function Ql(n, r, s, u, f, p) {
    Np(n, r);
    var v = (r.flags & 128) !== 0;
    if (!u && !v) return f && Bd(r, s, !1), wn(n, r, p);
    u = r.stateNode, _1.current = r;
    var x = v && typeof s.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && v ? (r.child = Fr(r, n.child, null, p), r.child = Fr(r, null, x, p)) : mt(n, r, x, p), r.memoizedState = u.state, f && Bd(r, s, !0), r.child;
  }
  function Lp(n) {
    var r = n.stateNode;
    r.pendingContext ? Vd(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Vd(n, r.context, !1), Rl(n, r.containerInfo);
  }
  function $p(n, r, s, u, f) {
    return Vr(), Cl(f), r.flags |= 256, mt(n, r, s, u), r.child;
  }
  var Jl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ql(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Vp(n, r, s) {
    var u = r.pendingProps, f = Le.current, p = !1, v = (r.flags & 128) !== 0, x;
    if ((x = v) || (x = n !== null && n.memoizedState === null ? !1 : (f & 2) !== 0), x ? (p = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (f |= 1), Me(Le, f & 1), n === null)
      return El(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (v = u.children, n = u.fallback, p ? (u = r.mode, p = r.child, v = { mode: "hidden", children: v }, (u & 1) === 0 && p !== null ? (p.childLanes = 0, p.pendingProps = v) : p = Cs(v, u, 0, null), n = dr(n, u, s, null), p.return = r, n.return = r, p.sibling = n, r.child = p, r.child.memoizedState = ql(s), r.memoizedState = Jl, n) : eu(r, v));
    if (f = n.memoizedState, f !== null && (x = f.dehydrated, x !== null)) return P1(n, r, v, u, x, f, s);
    if (p) {
      p = u.fallback, v = r.mode, f = n.child, x = f.sibling;
      var _ = { mode: "hidden", children: u.children };
      return (v & 1) === 0 && r.child !== f ? (u = r.child, u.childLanes = 0, u.pendingProps = _, r.deletions = null) : (u = Un(f, _), u.subtreeFlags = f.subtreeFlags & 14680064), x !== null ? p = Un(x, p) : (p = dr(p, v, s, null), p.flags |= 2), p.return = r, u.return = r, u.sibling = p, r.child = u, u = p, p = r.child, v = n.child.memoizedState, v = v === null ? ql(s) : { baseLanes: v.baseLanes | s, cachePool: null, transitions: v.transitions }, p.memoizedState = v, p.childLanes = n.childLanes & ~s, r.memoizedState = Jl, u;
    }
    return p = n.child, n = p.sibling, u = Un(p, { mode: "visible", children: u.children }), (r.mode & 1) === 0 && (u.lanes = s), u.return = r, u.sibling = null, n !== null && (s = r.deletions, s === null ? (r.deletions = [n], r.flags |= 16) : s.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function eu(n, r) {
    return r = Cs({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function hs(n, r, s, u) {
    return u !== null && Cl(u), Fr(r, n.child, null, s), n = eu(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function P1(n, r, s, u, f, p, v) {
    if (s)
      return r.flags & 256 ? (r.flags &= -257, u = Gl(Error(i(422))), hs(n, r, v, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (p = u.fallback, f = r.mode, u = Cs({ mode: "visible", children: u.children }, f, 0, null), p = dr(p, f, v, null), p.flags |= 2, u.return = r, p.return = r, u.sibling = p, r.child = u, (r.mode & 1) !== 0 && Fr(r, n.child, null, v), r.child.memoizedState = ql(v), r.memoizedState = Jl, p);
    if ((r.mode & 1) === 0) return hs(n, r, v, null);
    if (f.data === "$!") {
      if (u = f.nextSibling && f.nextSibling.dataset, u) var x = u.dgst;
      return u = x, p = Error(i(419)), u = Gl(p, u, void 0), hs(n, r, v, u);
    }
    if (x = (v & n.childLanes) !== 0, kt || x) {
      if (u = nt, u !== null) {
        switch (v & -v) {
          case 4:
            f = 2;
            break;
          case 16:
            f = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            f = 32;
            break;
          case 536870912:
            f = 268435456;
            break;
          default:
            f = 0;
        }
        f = (f & (u.suspendedLanes | v)) !== 0 ? 0 : f, f !== 0 && f !== p.retryLane && (p.retryLane = f, yn(n, f), Jt(u, n, f, -1));
      }
      return gu(), u = Gl(Error(i(421))), hs(n, r, v, u);
    }
    return f.data === "$?" ? (r.flags |= 128, r.child = n.child, r = L1.bind(null, n), f._reactRetry = r, null) : (n = p.treeContext, Ot = jn(f.nextSibling), At = r, Ne = !0, Gt = null, n !== null && (Dt[Nt++] = mn, Dt[Nt++] = gn, Dt[Nt++] = rr, mn = n.id, gn = n.overflow, rr = r), r = eu(r, u.children), r.flags |= 4096, r);
  }
  function Fp(n, r, s) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), Ol(n.return, r, s);
  }
  function tu(n, r, s, u, f) {
    var p = n.memoizedState;
    p === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: s, tailMode: f } : (p.isBackwards = r, p.rendering = null, p.renderingStartTime = 0, p.last = u, p.tail = s, p.tailMode = f);
  }
  function Bp(n, r, s) {
    var u = r.pendingProps, f = u.revealOrder, p = u.tail;
    if (mt(n, r, u.children, s), u = Le.current, (u & 2) !== 0) u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Fp(n, s, r);
        else if (n.tag === 19) Fp(n, s, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      u &= 1;
    }
    if (Me(Le, u), (r.mode & 1) === 0) r.memoizedState = null;
    else switch (f) {
      case "forwards":
        for (s = r.child, f = null; s !== null; ) n = s.alternate, n !== null && as(n) === null && (f = s), s = s.sibling;
        s = f, s === null ? (f = r.child, r.child = null) : (f = s.sibling, s.sibling = null), tu(r, !1, f, s, p);
        break;
      case "backwards":
        for (s = null, f = r.child, r.child = null; f !== null; ) {
          if (n = f.alternate, n !== null && as(n) === null) {
            r.child = f;
            break;
          }
          n = f.sibling, f.sibling = s, s = f, f = n;
        }
        tu(r, !0, s, null, p);
        break;
      case "together":
        tu(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function ms(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function wn(n, r, s) {
    if (n !== null && (r.dependencies = n.dependencies), lr |= r.lanes, (s & r.childLanes) === 0) return null;
    if (n !== null && r.child !== n.child) throw Error(i(153));
    if (r.child !== null) {
      for (n = r.child, s = Un(n, n.pendingProps), r.child = s, s.return = r; n.sibling !== null; ) n = n.sibling, s = s.sibling = Un(n, n.pendingProps), s.return = r;
      s.sibling = null;
    }
    return r.child;
  }
  function E1(n, r, s) {
    switch (r.tag) {
      case 3:
        Lp(r), Vr();
        break;
      case 5:
        np(r);
        break;
      case 1:
        bt(r.type) && Qo(r);
        break;
      case 4:
        Rl(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, f = r.memoizedProps.value;
        Me(rs, u._currentValue), u._currentValue = f;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (Me(Le, Le.current & 1), r.flags |= 128, null) : (s & r.child.childLanes) !== 0 ? Vp(n, r, s) : (Me(Le, Le.current & 1), n = wn(n, r, s), n !== null ? n.sibling : null);
        Me(Le, Le.current & 1);
        break;
      case 19:
        if (u = (s & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (u) return Bp(n, r, s);
          r.flags |= 128;
        }
        if (f = r.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), Me(Le, Le.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Dp(n, r, s);
    }
    return wn(n, r, s);
  }
  var Up, nu, Zp, Wp;
  Up = function(n, r) {
    for (var s = r.child; s !== null; ) {
      if (s.tag === 5 || s.tag === 6) n.appendChild(s.stateNode);
      else if (s.tag !== 4 && s.child !== null) {
        s.child.return = s, s = s.child;
        continue;
      }
      if (s === r) break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === r) return;
        s = s.return;
      }
      s.sibling.return = s.return, s = s.sibling;
    }
  }, nu = function() {
  }, Zp = function(n, r, s, u) {
    var f = n.memoizedProps;
    if (f !== u) {
      n = r.stateNode, sr(on.current);
      var p = null;
      switch (s) {
        case "input":
          f = U(n, f), u = U(n, u), p = [];
          break;
        case "select":
          f = X({}, f, { value: void 0 }), u = X({}, u, { value: void 0 }), p = [];
          break;
        case "textarea":
          f = Ra(n, f), u = Ra(n, u), p = [];
          break;
        default:
          typeof f.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Go);
      }
      Na(s, u);
      var v;
      s = null;
      for (M in f) if (!u.hasOwnProperty(M) && f.hasOwnProperty(M) && f[M] != null) if (M === "style") {
        var x = f[M];
        for (v in x) x.hasOwnProperty(v) && (s || (s = {}), s[v] = "");
      } else M !== "dangerouslySetInnerHTML" && M !== "children" && M !== "suppressContentEditableWarning" && M !== "suppressHydrationWarning" && M !== "autoFocus" && (a.hasOwnProperty(M) ? p || (p = []) : (p = p || []).push(M, null));
      for (M in u) {
        var _ = u[M];
        if (x = f?.[M], u.hasOwnProperty(M) && _ !== x && (_ != null || x != null)) if (M === "style") if (x) {
          for (v in x) !x.hasOwnProperty(v) || _ && _.hasOwnProperty(v) || (s || (s = {}), s[v] = "");
          for (v in _) _.hasOwnProperty(v) && x[v] !== _[v] && (s || (s = {}), s[v] = _[v]);
        } else s || (p || (p = []), p.push(
          M,
          s
        )), s = _;
        else M === "dangerouslySetInnerHTML" ? (_ = _ ? _.__html : void 0, x = x ? x.__html : void 0, _ != null && x !== _ && (p = p || []).push(M, _)) : M === "children" ? typeof _ != "string" && typeof _ != "number" || (p = p || []).push(M, "" + _) : M !== "suppressContentEditableWarning" && M !== "suppressHydrationWarning" && (a.hasOwnProperty(M) ? (_ != null && M === "onScroll" && Re("scroll", n), p || x === _ || (p = [])) : (p = p || []).push(M, _));
      }
      s && (p = p || []).push("style", s);
      var M = p;
      (r.updateQueue = M) && (r.flags |= 4);
    }
  }, Wp = function(n, r, s, u) {
    s !== u && (r.flags |= 4);
  };
  function Wi(n, r) {
    if (!Ne) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var s = null; r !== null; ) r.alternate !== null && (s = r), r = r.sibling;
        s === null ? n.tail = null : s.sibling = null;
        break;
      case "collapsed":
        s = n.tail;
        for (var u = null; s !== null; ) s.alternate !== null && (u = s), s = s.sibling;
        u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
    }
  }
  function dt(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, s = 0, u = 0;
    if (r) for (var f = n.child; f !== null; ) s |= f.lanes | f.childLanes, u |= f.subtreeFlags & 14680064, u |= f.flags & 14680064, f.return = n, f = f.sibling;
    else for (f = n.child; f !== null; ) s |= f.lanes | f.childLanes, u |= f.subtreeFlags, u |= f.flags, f.return = n, f = f.sibling;
    return n.subtreeFlags |= u, n.childLanes = s, r;
  }
  function C1(n, r, s) {
    var u = r.pendingProps;
    switch (_l(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return dt(r), null;
      case 1:
        return bt(r.type) && Xo(), dt(r), null;
      case 3:
        return u = r.stateNode, Zr(), De(xt), De(ct), Il(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (ts(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, Gt !== null && (pu(Gt), Gt = null))), nu(n, r), dt(r), null;
      case 5:
        Dl(r);
        var f = sr(Vi.current);
        if (s = r.type, n !== null && r.stateNode != null) Zp(n, r, s, u, f), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(i(166));
            return dt(r), null;
          }
          if (n = sr(on.current), ts(r)) {
            u = r.stateNode, s = r.type;
            var p = r.memoizedProps;
            switch (u[rn] = r, u[Di] = p, n = (r.mode & 1) !== 0, s) {
              case "dialog":
                Re("cancel", u), Re("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                Re("load", u);
                break;
              case "video":
              case "audio":
                for (f = 0; f < ji.length; f++) Re(ji[f], u);
                break;
              case "source":
                Re("error", u);
                break;
              case "img":
              case "image":
              case "link":
                Re(
                  "error",
                  u
                ), Re("load", u);
                break;
              case "details":
                Re("toggle", u);
                break;
              case "input":
                q(u, p), Re("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!p.multiple }, Re("invalid", u);
                break;
              case "textarea":
                Tf(u, p), Re("invalid", u);
            }
            Na(s, p), f = null;
            for (var v in p) if (p.hasOwnProperty(v)) {
              var x = p[v];
              v === "children" ? typeof x == "string" ? u.textContent !== x && (p.suppressHydrationWarning !== !0 && Ko(u.textContent, x, n), f = ["children", x]) : typeof x == "number" && u.textContent !== "" + x && (p.suppressHydrationWarning !== !0 && Ko(
                u.textContent,
                x,
                n
              ), f = ["children", "" + x]) : a.hasOwnProperty(v) && x != null && v === "onScroll" && Re("scroll", u);
            }
            switch (s) {
              case "input":
                Rt(u), Wt(u, p, !0);
                break;
              case "textarea":
                Rt(u), Af(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (u.onclick = Go);
            }
            u = f, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            v = f.nodeType === 9 ? f : f.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Of(s)), n === "http://www.w3.org/1999/xhtml" ? s === "script" ? (n = v.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = v.createElement(s, { is: u.is }) : (n = v.createElement(s), s === "select" && (v = n, u.multiple ? v.multiple = !0 : u.size && (v.size = u.size))) : n = v.createElementNS(n, s), n[rn] = r, n[Di] = u, Up(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (v = Ia(s, u), s) {
                case "dialog":
                  Re("cancel", n), Re("close", n), f = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Re("load", n), f = u;
                  break;
                case "video":
                case "audio":
                  for (f = 0; f < ji.length; f++) Re(ji[f], n);
                  f = u;
                  break;
                case "source":
                  Re("error", n), f = u;
                  break;
                case "img":
                case "image":
                case "link":
                  Re(
                    "error",
                    n
                  ), Re("load", n), f = u;
                  break;
                case "details":
                  Re("toggle", n), f = u;
                  break;
                case "input":
                  q(n, u), f = U(n, u), Re("invalid", n);
                  break;
                case "option":
                  f = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, f = X({}, u, { value: void 0 }), Re("invalid", n);
                  break;
                case "textarea":
                  Tf(n, u), f = Ra(n, u), Re("invalid", n);
                  break;
                default:
                  f = u;
              }
              Na(s, f), x = f;
              for (p in x) if (x.hasOwnProperty(p)) {
                var _ = x[p];
                p === "style" ? Rf(n, _) : p === "dangerouslySetInnerHTML" ? (_ = _ ? _.__html : void 0, _ != null && jf(n, _)) : p === "children" ? typeof _ == "string" ? (s !== "textarea" || _ !== "") && pi(n, _) : typeof _ == "number" && pi(n, "" + _) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (a.hasOwnProperty(p) ? _ != null && p === "onScroll" && Re("scroll", n) : _ != null && I(n, p, _, v));
              }
              switch (s) {
                case "input":
                  Rt(n), Wt(n, u, !1);
                  break;
                case "textarea":
                  Rt(n), Af(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + be(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, p = u.value, p != null ? Pr(n, !!u.multiple, p, !1) : u.defaultValue != null && Pr(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof f.onClick == "function" && (n.onclick = Go);
              }
              switch (s) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return dt(r), null;
      case 6:
        if (n && r.stateNode != null) Wp(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(i(166));
          if (s = sr(Vi.current), sr(on.current), ts(r)) {
            if (u = r.stateNode, s = r.memoizedProps, u[rn] = r, (p = u.nodeValue !== s) && (n = At, n !== null)) switch (n.tag) {
              case 3:
                Ko(u.nodeValue, s, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Ko(u.nodeValue, s, (n.mode & 1) !== 0);
            }
            p && (r.flags |= 4);
          } else u = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(u), u[rn] = r, r.stateNode = u;
        }
        return dt(r), null;
      case 13:
        if (De(Le), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Ne && Ot !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) Gd(), Vr(), r.flags |= 98560, p = !1;
          else if (p = ts(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!p) throw Error(i(318));
              if (p = r.memoizedState, p = p !== null ? p.dehydrated : null, !p) throw Error(i(317));
              p[rn] = r;
            } else Vr(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            dt(r), p = !1;
          } else Gt !== null && (pu(Gt), Gt = null), p = !0;
          if (!p) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = s, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (Le.current & 1) !== 0 ? Je === 0 && (Je = 3) : gu())), r.updateQueue !== null && (r.flags |= 4), dt(r), null);
      case 4:
        return Zr(), nu(n, r), n === null && Mi(r.stateNode.containerInfo), dt(r), null;
      case 10:
        return Al(r.type._context), dt(r), null;
      case 17:
        return bt(r.type) && Xo(), dt(r), null;
      case 19:
        if (De(Le), p = r.memoizedState, p === null) return dt(r), null;
        if (u = (r.flags & 128) !== 0, v = p.rendering, v === null) if (u) Wi(p, !1);
        else {
          if (Je !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (v = as(n), v !== null) {
              for (r.flags |= 128, Wi(p, !1), u = v.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = s, s = r.child; s !== null; ) p = s, n = u, p.flags &= 14680066, v = p.alternate, v === null ? (p.childLanes = 0, p.lanes = n, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = v.childLanes, p.lanes = v.lanes, p.child = v.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = v.memoizedProps, p.memoizedState = v.memoizedState, p.updateQueue = v.updateQueue, p.type = v.type, n = v.dependencies, p.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), s = s.sibling;
              return Me(Le, Le.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          p.tail !== null && We() > Gr && (r.flags |= 128, u = !0, Wi(p, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = as(v), n !== null) {
            if (r.flags |= 128, u = !0, s = n.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), Wi(p, !0), p.tail === null && p.tailMode === "hidden" && !v.alternate && !Ne) return dt(r), null;
          } else 2 * We() - p.renderingStartTime > Gr && s !== 1073741824 && (r.flags |= 128, u = !0, Wi(p, !1), r.lanes = 4194304);
          p.isBackwards ? (v.sibling = r.child, r.child = v) : (s = p.last, s !== null ? s.sibling = v : r.child = v, p.last = v);
        }
        return p.tail !== null ? (r = p.tail, p.rendering = r, p.tail = r.sibling, p.renderingStartTime = We(), r.sibling = null, s = Le.current, Me(Le, u ? s & 1 | 2 : s & 1), r) : (dt(r), null);
      case 22:
      case 23:
        return mu(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && (r.mode & 1) !== 0 ? (jt & 1073741824) !== 0 && (dt(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : dt(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, r.tag));
  }
  function T1(n, r) {
    switch (_l(r), r.tag) {
      case 1:
        return bt(r.type) && Xo(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Zr(), De(xt), De(ct), Il(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Dl(r), null;
      case 13:
        if (De(Le), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(i(340));
          Vr();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return De(Le), null;
      case 4:
        return Zr(), null;
      case 10:
        return Al(r.type._context), null;
      case 22:
      case 23:
        return mu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var gs = !1, pt = !1, z1 = typeof WeakSet == "function" ? WeakSet : Set, te = null;
  function Hr(n, r) {
    var s = n.ref;
    if (s !== null) if (typeof s == "function") try {
      s(null);
    } catch (u) {
      Fe(n, r, u);
    }
    else s.current = null;
  }
  function ru(n, r, s) {
    try {
      s();
    } catch (u) {
      Fe(n, r, u);
    }
  }
  var Hp = !1;
  function A1(n, r) {
    if (ml = No, n = _d(), al(n)) {
      if ("selectionStart" in n) var s = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        s = (s = n.ownerDocument) && s.defaultView || window;
        var u = s.getSelection && s.getSelection();
        if (u && u.rangeCount !== 0) {
          s = u.anchorNode;
          var f = u.anchorOffset, p = u.focusNode;
          u = u.focusOffset;
          try {
            s.nodeType, p.nodeType;
          } catch {
            s = null;
            break e;
          }
          var v = 0, x = -1, _ = -1, M = 0, B = 0, H = n, F = null;
          t: for (; ; ) {
            for (var ee; H !== s || f !== 0 && H.nodeType !== 3 || (x = v + f), H !== p || u !== 0 && H.nodeType !== 3 || (_ = v + u), H.nodeType === 3 && (v += H.nodeValue.length), (ee = H.firstChild) !== null; )
              F = H, H = ee;
            for (; ; ) {
              if (H === n) break t;
              if (F === s && ++M === f && (x = v), F === p && ++B === u && (_ = v), (ee = H.nextSibling) !== null) break;
              H = F, F = H.parentNode;
            }
            H = ee;
          }
          s = x === -1 || _ === -1 ? null : { start: x, end: _ };
        } else s = null;
      }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (gl = { focusedElem: n, selectionRange: s }, No = !1, te = r; te !== null; ) if (r = te, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, te = n;
    else for (; te !== null; ) {
      r = te;
      try {
        var ne = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ne !== null) {
              var ie = ne.memoizedProps, He = ne.memoizedState, A = r.stateNode, E = A.getSnapshotBeforeUpdate(r.elementType === r.type ? ie : Yt(r.type, ie), He);
              A.__reactInternalSnapshotBeforeUpdate = E;
            }
            break;
          case 3:
            var j = r.stateNode.containerInfo;
            j.nodeType === 1 ? j.textContent = "" : j.nodeType === 9 && j.documentElement && j.removeChild(j.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(i(163));
        }
      } catch (Y) {
        Fe(r, r.return, Y);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, te = n;
        break;
      }
      te = r.return;
    }
    return ne = Hp, Hp = !1, ne;
  }
  function Hi(n, r, s) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var f = u = u.next;
      do {
        if ((f.tag & n) === n) {
          var p = f.destroy;
          f.destroy = void 0, p !== void 0 && ru(r, s, p);
        }
        f = f.next;
      } while (f !== u);
    }
  }
  function ys(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var s = r = r.next;
      do {
        if ((s.tag & n) === n) {
          var u = s.create;
          s.destroy = u();
        }
        s = s.next;
      } while (s !== r);
    }
  }
  function iu(n) {
    var r = n.ref;
    if (r !== null) {
      var s = n.stateNode;
      n.tag, n = s, typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Kp(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Kp(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[rn], delete r[Di], delete r[xl], delete r[d1], delete r[p1])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Gp(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Yp(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Gp(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function ou(n, r, s) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? s.nodeType === 8 ? s.parentNode.insertBefore(n, r) : s.insertBefore(n, r) : (s.nodeType === 8 ? (r = s.parentNode, r.insertBefore(n, s)) : (r = s, r.appendChild(n)), s = s._reactRootContainer, s != null || r.onclick !== null || (r.onclick = Go));
    else if (u !== 4 && (n = n.child, n !== null)) for (ou(n, r, s), n = n.sibling; n !== null; ) ou(n, r, s), n = n.sibling;
  }
  function su(n, r, s) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? s.insertBefore(n, r) : s.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null)) for (su(n, r, s), n = n.sibling; n !== null; ) su(n, r, s), n = n.sibling;
  }
  var ot = null, Xt = !1;
  function Ln(n, r, s) {
    for (s = s.child; s !== null; ) Xp(n, r, s), s = s.sibling;
  }
  function Xp(n, r, s) {
    if (nn && typeof nn.onCommitFiberUnmount == "function") try {
      nn.onCommitFiberUnmount(Ao, s);
    } catch {
    }
    switch (s.tag) {
      case 5:
        pt || Hr(s, r);
      case 6:
        var u = ot, f = Xt;
        ot = null, Ln(n, r, s), ot = u, Xt = f, ot !== null && (Xt ? (n = ot, s = s.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(s) : n.removeChild(s)) : ot.removeChild(s.stateNode));
        break;
      case 18:
        ot !== null && (Xt ? (n = ot, s = s.stateNode, n.nodeType === 8 ? wl(n.parentNode, s) : n.nodeType === 1 && wl(n, s), _i(n)) : wl(ot, s.stateNode));
        break;
      case 4:
        u = ot, f = Xt, ot = s.stateNode.containerInfo, Xt = !0, Ln(n, r, s), ot = u, Xt = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!pt && (u = s.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          f = u = u.next;
          do {
            var p = f, v = p.destroy;
            p = p.tag, v !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && ru(s, r, v), f = f.next;
          } while (f !== u);
        }
        Ln(n, r, s);
        break;
      case 1:
        if (!pt && (Hr(s, r), u = s.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = s.memoizedProps, u.state = s.memoizedState, u.componentWillUnmount();
        } catch (x) {
          Fe(s, r, x);
        }
        Ln(n, r, s);
        break;
      case 21:
        Ln(n, r, s);
        break;
      case 22:
        s.mode & 1 ? (pt = (u = pt) || s.memoizedState !== null, Ln(n, r, s), pt = u) : Ln(n, r, s);
        break;
      default:
        Ln(n, r, s);
    }
  }
  function Qp(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var s = n.stateNode;
      s === null && (s = n.stateNode = new z1()), r.forEach(function(u) {
        var f = $1.bind(null, n, u);
        s.has(u) || (s.add(u), u.then(f, f));
      });
    }
  }
  function Qt(n, r) {
    var s = r.deletions;
    if (s !== null) for (var u = 0; u < s.length; u++) {
      var f = s[u];
      try {
        var p = n, v = r, x = v;
        e: for (; x !== null; ) {
          switch (x.tag) {
            case 5:
              ot = x.stateNode, Xt = !1;
              break e;
            case 3:
              ot = x.stateNode.containerInfo, Xt = !0;
              break e;
            case 4:
              ot = x.stateNode.containerInfo, Xt = !0;
              break e;
          }
          x = x.return;
        }
        if (ot === null) throw Error(i(160));
        Xp(p, v, f), ot = null, Xt = !1;
        var _ = f.alternate;
        _ !== null && (_.return = null), f.return = null;
      } catch (M) {
        Fe(f, r, M);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Jp(r, n), r = r.sibling;
  }
  function Jp(n, r) {
    var s = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Qt(r, n), an(n), u & 4) {
          try {
            Hi(3, n, n.return), ys(3, n);
          } catch (ie) {
            Fe(n, n.return, ie);
          }
          try {
            Hi(5, n, n.return);
          } catch (ie) {
            Fe(n, n.return, ie);
          }
        }
        break;
      case 1:
        Qt(r, n), an(n), u & 512 && s !== null && Hr(s, s.return);
        break;
      case 5:
        if (Qt(r, n), an(n), u & 512 && s !== null && Hr(s, s.return), n.flags & 32) {
          var f = n.stateNode;
          try {
            pi(f, "");
          } catch (ie) {
            Fe(n, n.return, ie);
          }
        }
        if (u & 4 && (f = n.stateNode, f != null)) {
          var p = n.memoizedProps, v = s !== null ? s.memoizedProps : p, x = n.type, _ = n.updateQueue;
          if (n.updateQueue = null, _ !== null) try {
            x === "input" && p.type === "radio" && p.name != null && Te(f, p), Ia(x, v);
            var M = Ia(x, p);
            for (v = 0; v < _.length; v += 2) {
              var B = _[v], H = _[v + 1];
              B === "style" ? Rf(f, H) : B === "dangerouslySetInnerHTML" ? jf(f, H) : B === "children" ? pi(f, H) : I(f, B, H, M);
            }
            switch (x) {
              case "input":
                ut(f, p);
                break;
              case "textarea":
                zf(f, p);
                break;
              case "select":
                var F = f._wrapperState.wasMultiple;
                f._wrapperState.wasMultiple = !!p.multiple;
                var ee = p.value;
                ee != null ? Pr(f, !!p.multiple, ee, !1) : F !== !!p.multiple && (p.defaultValue != null ? Pr(
                  f,
                  !!p.multiple,
                  p.defaultValue,
                  !0
                ) : Pr(f, !!p.multiple, p.multiple ? [] : "", !1));
            }
            f[Di] = p;
          } catch (ie) {
            Fe(n, n.return, ie);
          }
        }
        break;
      case 6:
        if (Qt(r, n), an(n), u & 4) {
          if (n.stateNode === null) throw Error(i(162));
          f = n.stateNode, p = n.memoizedProps;
          try {
            f.nodeValue = p;
          } catch (ie) {
            Fe(n, n.return, ie);
          }
        }
        break;
      case 3:
        if (Qt(r, n), an(n), u & 4 && s !== null && s.memoizedState.isDehydrated) try {
          _i(r.containerInfo);
        } catch (ie) {
          Fe(n, n.return, ie);
        }
        break;
      case 4:
        Qt(r, n), an(n);
        break;
      case 13:
        Qt(r, n), an(n), f = n.child, f.flags & 8192 && (p = f.memoizedState !== null, f.stateNode.isHidden = p, !p || f.alternate !== null && f.alternate.memoizedState !== null || (uu = We())), u & 4 && Qp(n);
        break;
      case 22:
        if (B = s !== null && s.memoizedState !== null, n.mode & 1 ? (pt = (M = pt) || B, Qt(r, n), pt = M) : Qt(r, n), an(n), u & 8192) {
          if (M = n.memoizedState !== null, (n.stateNode.isHidden = M) && !B && (n.mode & 1) !== 0) for (te = n, B = n.child; B !== null; ) {
            for (H = te = B; te !== null; ) {
              switch (F = te, ee = F.child, F.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Hi(4, F, F.return);
                  break;
                case 1:
                  Hr(F, F.return);
                  var ne = F.stateNode;
                  if (typeof ne.componentWillUnmount == "function") {
                    u = F, s = F.return;
                    try {
                      r = u, ne.props = r.memoizedProps, ne.state = r.memoizedState, ne.componentWillUnmount();
                    } catch (ie) {
                      Fe(u, s, ie);
                    }
                  }
                  break;
                case 5:
                  Hr(F, F.return);
                  break;
                case 22:
                  if (F.memoizedState !== null) {
                    th(H);
                    continue;
                  }
              }
              ee !== null ? (ee.return = F, te = ee) : th(H);
            }
            B = B.sibling;
          }
          e: for (B = null, H = n; ; ) {
            if (H.tag === 5) {
              if (B === null) {
                B = H;
                try {
                  f = H.stateNode, M ? (p = f.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (x = H.stateNode, _ = H.memoizedProps.style, v = _ != null && _.hasOwnProperty("display") ? _.display : null, x.style.display = Mf("display", v));
                } catch (ie) {
                  Fe(n, n.return, ie);
                }
              }
            } else if (H.tag === 6) {
              if (B === null) try {
                H.stateNode.nodeValue = M ? "" : H.memoizedProps;
              } catch (ie) {
                Fe(n, n.return, ie);
              }
            } else if ((H.tag !== 22 && H.tag !== 23 || H.memoizedState === null || H === n) && H.child !== null) {
              H.child.return = H, H = H.child;
              continue;
            }
            if (H === n) break e;
            for (; H.sibling === null; ) {
              if (H.return === null || H.return === n) break e;
              B === H && (B = null), H = H.return;
            }
            B === H && (B = null), H.sibling.return = H.return, H = H.sibling;
          }
        }
        break;
      case 19:
        Qt(r, n), an(n), u & 4 && Qp(n);
        break;
      case 21:
        break;
      default:
        Qt(
          r,
          n
        ), an(n);
    }
  }
  function an(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var s = n.return; s !== null; ) {
            if (Gp(s)) {
              var u = s;
              break e;
            }
            s = s.return;
          }
          throw Error(i(160));
        }
        switch (u.tag) {
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (pi(f, ""), u.flags &= -33);
            var p = Yp(n);
            su(n, p, f);
            break;
          case 3:
          case 4:
            var v = u.stateNode.containerInfo, x = Yp(n);
            ou(n, x, v);
            break;
          default:
            throw Error(i(161));
        }
      } catch (_) {
        Fe(n, n.return, _);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function O1(n, r, s) {
    te = n, qp(n);
  }
  function qp(n, r, s) {
    for (var u = (n.mode & 1) !== 0; te !== null; ) {
      var f = te, p = f.child;
      if (f.tag === 22 && u) {
        var v = f.memoizedState !== null || gs;
        if (!v) {
          var x = f.alternate, _ = x !== null && x.memoizedState !== null || pt;
          x = gs;
          var M = pt;
          if (gs = v, (pt = _) && !M) for (te = f; te !== null; ) v = te, _ = v.child, v.tag === 22 && v.memoizedState !== null ? nh(f) : _ !== null ? (_.return = v, te = _) : nh(f);
          for (; p !== null; ) te = p, qp(p), p = p.sibling;
          te = f, gs = x, pt = M;
        }
        eh(n);
      } else (f.subtreeFlags & 8772) !== 0 && p !== null ? (p.return = f, te = p) : eh(n);
    }
  }
  function eh(n) {
    for (; te !== null; ) {
      var r = te;
      if ((r.flags & 8772) !== 0) {
        var s = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              pt || ys(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !pt) if (s === null) u.componentDidMount();
              else {
                var f = r.elementType === r.type ? s.memoizedProps : Yt(r.type, s.memoizedProps);
                u.componentDidUpdate(f, s.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var p = r.updateQueue;
              p !== null && tp(r, p, u);
              break;
            case 3:
              var v = r.updateQueue;
              if (v !== null) {
                if (s = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    s = r.child.stateNode;
                    break;
                  case 1:
                    s = r.child.stateNode;
                }
                tp(r, v, s);
              }
              break;
            case 5:
              var x = r.stateNode;
              if (s === null && r.flags & 4) {
                s = x;
                var _ = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    _.autoFocus && s.focus();
                    break;
                  case "img":
                    _.src && (s.src = _.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var M = r.alternate;
                if (M !== null) {
                  var B = M.memoizedState;
                  if (B !== null) {
                    var H = B.dehydrated;
                    H !== null && _i(H);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(i(163));
          }
          pt || r.flags & 512 && iu(r);
        } catch (F) {
          Fe(r, r.return, F);
        }
      }
      if (r === n) {
        te = null;
        break;
      }
      if (s = r.sibling, s !== null) {
        s.return = r.return, te = s;
        break;
      }
      te = r.return;
    }
  }
  function th(n) {
    for (; te !== null; ) {
      var r = te;
      if (r === n) {
        te = null;
        break;
      }
      var s = r.sibling;
      if (s !== null) {
        s.return = r.return, te = s;
        break;
      }
      te = r.return;
    }
  }
  function nh(n) {
    for (; te !== null; ) {
      var r = te;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var s = r.return;
            try {
              ys(4, r);
            } catch (_) {
              Fe(r, s, _);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var f = r.return;
              try {
                u.componentDidMount();
              } catch (_) {
                Fe(r, f, _);
              }
            }
            var p = r.return;
            try {
              iu(r);
            } catch (_) {
              Fe(r, p, _);
            }
            break;
          case 5:
            var v = r.return;
            try {
              iu(r);
            } catch (_) {
              Fe(r, v, _);
            }
        }
      } catch (_) {
        Fe(r, r.return, _);
      }
      if (r === n) {
        te = null;
        break;
      }
      var x = r.sibling;
      if (x !== null) {
        x.return = r.return, te = x;
        break;
      }
      te = r.return;
    }
  }
  var j1 = Math.ceil, vs = D.ReactCurrentDispatcher, au = D.ReactCurrentOwner, $t = D.ReactCurrentBatchConfig, Pe = 0, nt = null, Ge = null, st = 0, jt = 0, Kr = Mn(0), Je = 0, Ki = null, lr = 0, ws = 0, lu = 0, Gi = null, St = null, uu = 0, Gr = 1 / 0, xn = null, xs = !1, cu = null, $n = null, bs = !1, Vn = null, ks = 0, Yi = 0, fu = null, Ss = -1, _s = 0;
  function gt() {
    return (Pe & 6) !== 0 ? We() : Ss !== -1 ? Ss : Ss = We();
  }
  function Fn(n) {
    return (n.mode & 1) === 0 ? 1 : (Pe & 2) !== 0 && st !== 0 ? st & -st : m1.transition !== null ? (_s === 0 && (_s = Yf()), _s) : (n = ze, n !== 0 || (n = window.event, n = n === void 0 ? 16 : id(n.type)), n);
  }
  function Jt(n, r, s, u) {
    if (50 < Yi) throw Yi = 0, fu = null, Error(i(185));
    wi(n, s, u), ((Pe & 2) === 0 || n !== nt) && (n === nt && ((Pe & 2) === 0 && (ws |= s), Je === 4 && Bn(n, st)), _t(n, u), s === 1 && Pe === 0 && (r.mode & 1) === 0 && (Gr = We() + 500, Jo && Dn()));
  }
  function _t(n, r) {
    var s = n.callbackNode;
    mw(n, r);
    var u = Mo(n, n === nt ? st : 0);
    if (u === 0) s !== null && Hf(s), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (s != null && Hf(s), r === 1) n.tag === 0 ? h1(ih.bind(null, n)) : Ud(ih.bind(null, n)), c1(function() {
        (Pe & 6) === 0 && Dn();
      }), s = null;
      else {
        switch (Xf(u)) {
          case 1:
            s = Za;
            break;
          case 4:
            s = Kf;
            break;
          case 16:
            s = zo;
            break;
          case 536870912:
            s = Gf;
            break;
          default:
            s = zo;
        }
        s = dh(s, rh.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = s;
    }
  }
  function rh(n, r) {
    if (Ss = -1, _s = 0, (Pe & 6) !== 0) throw Error(i(327));
    var s = n.callbackNode;
    if (Yr() && n.callbackNode !== s) return null;
    var u = Mo(n, n === nt ? st : 0);
    if (u === 0) return null;
    if ((u & 30) !== 0 || (u & n.expiredLanes) !== 0 || r) r = Ps(n, u);
    else {
      r = u;
      var f = Pe;
      Pe |= 2;
      var p = sh();
      (nt !== n || st !== r) && (xn = null, Gr = We() + 500, cr(n, r));
      do
        try {
          D1();
          break;
        } catch (x) {
          oh(n, x);
        }
      while (!0);
      zl(), vs.current = p, Pe = f, Ge !== null ? r = 0 : (nt = null, st = 0, r = Je);
    }
    if (r !== 0) {
      if (r === 2 && (f = Wa(n), f !== 0 && (u = f, r = du(n, f))), r === 1) throw s = Ki, cr(n, 0), Bn(n, u), _t(n, We()), s;
      if (r === 6) Bn(n, u);
      else {
        if (f = n.current.alternate, (u & 30) === 0 && !M1(f) && (r = Ps(n, u), r === 2 && (p = Wa(n), p !== 0 && (u = p, r = du(n, p))), r === 1)) throw s = Ki, cr(n, 0), Bn(n, u), _t(n, We()), s;
        switch (n.finishedWork = f, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            fr(n, St, xn);
            break;
          case 3:
            if (Bn(n, u), (u & 130023424) === u && (r = uu + 500 - We(), 10 < r)) {
              if (Mo(n, 0) !== 0) break;
              if (f = n.suspendedLanes, (f & u) !== u) {
                gt(), n.pingedLanes |= n.suspendedLanes & f;
                break;
              }
              n.timeoutHandle = vl(fr.bind(null, n, St, xn), r);
              break;
            }
            fr(n, St, xn);
            break;
          case 4:
            if (Bn(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, f = -1; 0 < u; ) {
              var v = 31 - Ht(u);
              p = 1 << v, v = r[v], v > f && (f = v), u &= ~p;
            }
            if (u = f, u = We() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * j1(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = vl(fr.bind(null, n, St, xn), u);
              break;
            }
            fr(n, St, xn);
            break;
          case 5:
            fr(n, St, xn);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return _t(n, We()), n.callbackNode === s ? rh.bind(null, n) : null;
  }
  function du(n, r) {
    var s = Gi;
    return n.current.memoizedState.isDehydrated && (cr(n, r).flags |= 256), n = Ps(n, r), n !== 2 && (r = St, St = s, r !== null && pu(r)), n;
  }
  function pu(n) {
    St === null ? St = n : St.push.apply(St, n);
  }
  function M1(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var s = r.updateQueue;
        if (s !== null && (s = s.stores, s !== null)) for (var u = 0; u < s.length; u++) {
          var f = s[u], p = f.getSnapshot;
          f = f.value;
          try {
            if (!Kt(p(), f)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (s = r.child, r.subtreeFlags & 16384 && s !== null) s.return = r, r = s;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Bn(n, r) {
    for (r &= ~lu, r &= ~ws, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var s = 31 - Ht(r), u = 1 << s;
      n[s] = -1, r &= ~u;
    }
  }
  function ih(n) {
    if ((Pe & 6) !== 0) throw Error(i(327));
    Yr();
    var r = Mo(n, 0);
    if ((r & 1) === 0) return _t(n, We()), null;
    var s = Ps(n, r);
    if (n.tag !== 0 && s === 2) {
      var u = Wa(n);
      u !== 0 && (r = u, s = du(n, u));
    }
    if (s === 1) throw s = Ki, cr(n, 0), Bn(n, r), _t(n, We()), s;
    if (s === 6) throw Error(i(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, fr(n, St, xn), _t(n, We()), null;
  }
  function hu(n, r) {
    var s = Pe;
    Pe |= 1;
    try {
      return n(r);
    } finally {
      Pe = s, Pe === 0 && (Gr = We() + 500, Jo && Dn());
    }
  }
  function ur(n) {
    Vn !== null && Vn.tag === 0 && (Pe & 6) === 0 && Yr();
    var r = Pe;
    Pe |= 1;
    var s = $t.transition, u = ze;
    try {
      if ($t.transition = null, ze = 1, n) return n();
    } finally {
      ze = u, $t.transition = s, Pe = r, (Pe & 6) === 0 && Dn();
    }
  }
  function mu() {
    jt = Kr.current, De(Kr);
  }
  function cr(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var s = n.timeoutHandle;
    if (s !== -1 && (n.timeoutHandle = -1, u1(s)), Ge !== null) for (s = Ge.return; s !== null; ) {
      var u = s;
      switch (_l(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && Xo();
          break;
        case 3:
          Zr(), De(xt), De(ct), Il();
          break;
        case 5:
          Dl(u);
          break;
        case 4:
          Zr();
          break;
        case 13:
          De(Le);
          break;
        case 19:
          De(Le);
          break;
        case 10:
          Al(u.type._context);
          break;
        case 22:
        case 23:
          mu();
      }
      s = s.return;
    }
    if (nt = n, Ge = n = Un(n.current, null), st = jt = r, Je = 0, Ki = null, lu = ws = lr = 0, St = Gi = null, or !== null) {
      for (r = 0; r < or.length; r++) if (s = or[r], u = s.interleaved, u !== null) {
        s.interleaved = null;
        var f = u.next, p = s.pending;
        if (p !== null) {
          var v = p.next;
          p.next = f, u.next = v;
        }
        s.pending = u;
      }
      or = null;
    }
    return n;
  }
  function oh(n, r) {
    do {
      var s = Ge;
      try {
        if (zl(), ls.current = ds, us) {
          for (var u = $e.memoizedState; u !== null; ) {
            var f = u.queue;
            f !== null && (f.pending = null), u = u.next;
          }
          us = !1;
        }
        if (ar = 0, tt = Qe = $e = null, Fi = !1, Bi = 0, au.current = null, s === null || s.return === null) {
          Je = 1, Ki = r, Ge = null;
          break;
        }
        e: {
          var p = n, v = s.return, x = s, _ = r;
          if (r = st, x.flags |= 32768, _ !== null && typeof _ == "object" && typeof _.then == "function") {
            var M = _, B = x, H = B.tag;
            if ((B.mode & 1) === 0 && (H === 0 || H === 11 || H === 15)) {
              var F = B.alternate;
              F ? (B.updateQueue = F.updateQueue, B.memoizedState = F.memoizedState, B.lanes = F.lanes) : (B.updateQueue = null, B.memoizedState = null);
            }
            var ee = Ap(v);
            if (ee !== null) {
              ee.flags &= -257, Op(ee, v, x, p, r), ee.mode & 1 && zp(p, M, r), r = ee, _ = M;
              var ne = r.updateQueue;
              if (ne === null) {
                var ie = /* @__PURE__ */ new Set();
                ie.add(_), r.updateQueue = ie;
              } else ne.add(_);
              break e;
            } else {
              if ((r & 1) === 0) {
                zp(p, M, r), gu();
                break e;
              }
              _ = Error(i(426));
            }
          } else if (Ne && x.mode & 1) {
            var He = Ap(v);
            if (He !== null) {
              (He.flags & 65536) === 0 && (He.flags |= 256), Op(He, v, x, p, r), Cl(Wr(_, x));
              break e;
            }
          }
          p = _ = Wr(_, x), Je !== 4 && (Je = 2), Gi === null ? Gi = [p] : Gi.push(p), p = v;
          do {
            switch (p.tag) {
              case 3:
                p.flags |= 65536, r &= -r, p.lanes |= r;
                var A = Cp(p, _, r);
                ep(p, A);
                break e;
              case 1:
                x = _;
                var E = p.type, j = p.stateNode;
                if ((p.flags & 128) === 0 && (typeof E.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && ($n === null || !$n.has(j)))) {
                  p.flags |= 65536, r &= -r, p.lanes |= r;
                  var Y = Tp(p, x, r);
                  ep(p, Y);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        lh(s);
      } catch (oe) {
        r = oe, Ge === s && s !== null && (Ge = s = s.return);
        continue;
      }
      break;
    } while (!0);
  }
  function sh() {
    var n = vs.current;
    return vs.current = ds, n === null ? ds : n;
  }
  function gu() {
    (Je === 0 || Je === 3 || Je === 2) && (Je = 4), nt === null || (lr & 268435455) === 0 && (ws & 268435455) === 0 || Bn(nt, st);
  }
  function Ps(n, r) {
    var s = Pe;
    Pe |= 2;
    var u = sh();
    (nt !== n || st !== r) && (xn = null, cr(n, r));
    do
      try {
        R1();
        break;
      } catch (f) {
        oh(n, f);
      }
    while (!0);
    if (zl(), Pe = s, vs.current = u, Ge !== null) throw Error(i(261));
    return nt = null, st = 0, Je;
  }
  function R1() {
    for (; Ge !== null; ) ah(Ge);
  }
  function D1() {
    for (; Ge !== null && !sw(); ) ah(Ge);
  }
  function ah(n) {
    var r = fh(n.alternate, n, jt);
    n.memoizedProps = n.pendingProps, r === null ? lh(n) : Ge = r, au.current = null;
  }
  function lh(n) {
    var r = n;
    do {
      var s = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (s = C1(s, r, jt), s !== null) {
          Ge = s;
          return;
        }
      } else {
        if (s = T1(s, r), s !== null) {
          s.flags &= 32767, Ge = s;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Je = 6, Ge = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        Ge = r;
        return;
      }
      Ge = r = n;
    } while (r !== null);
    Je === 0 && (Je = 5);
  }
  function fr(n, r, s) {
    var u = ze, f = $t.transition;
    try {
      $t.transition = null, ze = 1, N1(n, r, s, u);
    } finally {
      $t.transition = f, ze = u;
    }
    return null;
  }
  function N1(n, r, s, u) {
    do
      Yr();
    while (Vn !== null);
    if ((Pe & 6) !== 0) throw Error(i(327));
    s = n.finishedWork;
    var f = n.finishedLanes;
    if (s === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, s === n.current) throw Error(i(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var p = s.lanes | s.childLanes;
    if (gw(n, p), n === nt && (Ge = nt = null, st = 0), (s.subtreeFlags & 2064) === 0 && (s.flags & 2064) === 0 || bs || (bs = !0, dh(zo, function() {
      return Yr(), null;
    })), p = (s.flags & 15990) !== 0, (s.subtreeFlags & 15990) !== 0 || p) {
      p = $t.transition, $t.transition = null;
      var v = ze;
      ze = 1;
      var x = Pe;
      Pe |= 4, au.current = null, A1(n, s), Jp(s, n), n1(gl), No = !!ml, gl = ml = null, n.current = s, O1(s), aw(), Pe = x, ze = v, $t.transition = p;
    } else n.current = s;
    if (bs && (bs = !1, Vn = n, ks = f), p = n.pendingLanes, p === 0 && ($n = null), cw(s.stateNode), _t(n, We()), r !== null) for (u = n.onRecoverableError, s = 0; s < r.length; s++) f = r[s], u(f.value, { componentStack: f.stack, digest: f.digest });
    if (xs) throw xs = !1, n = cu, cu = null, n;
    return (ks & 1) !== 0 && n.tag !== 0 && Yr(), p = n.pendingLanes, (p & 1) !== 0 ? n === fu ? Yi++ : (Yi = 0, fu = n) : Yi = 0, Dn(), null;
  }
  function Yr() {
    if (Vn !== null) {
      var n = Xf(ks), r = $t.transition, s = ze;
      try {
        if ($t.transition = null, ze = 16 > n ? 16 : n, Vn === null) var u = !1;
        else {
          if (n = Vn, Vn = null, ks = 0, (Pe & 6) !== 0) throw Error(i(331));
          var f = Pe;
          for (Pe |= 4, te = n.current; te !== null; ) {
            var p = te, v = p.child;
            if ((te.flags & 16) !== 0) {
              var x = p.deletions;
              if (x !== null) {
                for (var _ = 0; _ < x.length; _++) {
                  var M = x[_];
                  for (te = M; te !== null; ) {
                    var B = te;
                    switch (B.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Hi(8, B, p);
                    }
                    var H = B.child;
                    if (H !== null) H.return = B, te = H;
                    else for (; te !== null; ) {
                      B = te;
                      var F = B.sibling, ee = B.return;
                      if (Kp(B), B === M) {
                        te = null;
                        break;
                      }
                      if (F !== null) {
                        F.return = ee, te = F;
                        break;
                      }
                      te = ee;
                    }
                  }
                }
                var ne = p.alternate;
                if (ne !== null) {
                  var ie = ne.child;
                  if (ie !== null) {
                    ne.child = null;
                    do {
                      var He = ie.sibling;
                      ie.sibling = null, ie = He;
                    } while (ie !== null);
                  }
                }
                te = p;
              }
            }
            if ((p.subtreeFlags & 2064) !== 0 && v !== null) v.return = p, te = v;
            else e: for (; te !== null; ) {
              if (p = te, (p.flags & 2048) !== 0) switch (p.tag) {
                case 0:
                case 11:
                case 15:
                  Hi(9, p, p.return);
              }
              var A = p.sibling;
              if (A !== null) {
                A.return = p.return, te = A;
                break e;
              }
              te = p.return;
            }
          }
          var E = n.current;
          for (te = E; te !== null; ) {
            v = te;
            var j = v.child;
            if ((v.subtreeFlags & 2064) !== 0 && j !== null) j.return = v, te = j;
            else e: for (v = E; te !== null; ) {
              if (x = te, (x.flags & 2048) !== 0) try {
                switch (x.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ys(9, x);
                }
              } catch (oe) {
                Fe(x, x.return, oe);
              }
              if (x === v) {
                te = null;
                break e;
              }
              var Y = x.sibling;
              if (Y !== null) {
                Y.return = x.return, te = Y;
                break e;
              }
              te = x.return;
            }
          }
          if (Pe = f, Dn(), nn && typeof nn.onPostCommitFiberRoot == "function") try {
            nn.onPostCommitFiberRoot(Ao, n);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        ze = s, $t.transition = r;
      }
    }
    return !1;
  }
  function uh(n, r, s) {
    r = Wr(s, r), r = Cp(n, r, 1), n = In(n, r, 1), r = gt(), n !== null && (wi(n, 1, r), _t(n, r));
  }
  function Fe(n, r, s) {
    if (n.tag === 3) uh(n, n, s);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        uh(r, n, s);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && ($n === null || !$n.has(u))) {
          n = Wr(s, n), n = Tp(r, n, 1), r = In(r, n, 1), n = gt(), r !== null && (wi(r, 1, n), _t(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function I1(n, r, s) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = gt(), n.pingedLanes |= n.suspendedLanes & s, nt === n && (st & s) === s && (Je === 4 || Je === 3 && (st & 130023424) === st && 500 > We() - uu ? cr(n, 0) : lu |= s), _t(n, r);
  }
  function ch(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = jo, jo <<= 1, (jo & 130023424) === 0 && (jo = 4194304)));
    var s = gt();
    n = yn(n, r), n !== null && (wi(n, r, s), _t(n, s));
  }
  function L1(n) {
    var r = n.memoizedState, s = 0;
    r !== null && (s = r.retryLane), ch(n, s);
  }
  function $1(n, r) {
    var s = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, f = n.memoizedState;
        f !== null && (s = f.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    u !== null && u.delete(r), ch(n, s);
  }
  var fh;
  fh = function(n, r, s) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || xt.current) kt = !0;
    else {
      if ((n.lanes & s) === 0 && (r.flags & 128) === 0) return kt = !1, E1(n, r, s);
      kt = (n.flags & 131072) !== 0;
    }
    else kt = !1, Ne && (r.flags & 1048576) !== 0 && Zd(r, es, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        ms(n, r), n = r.pendingProps;
        var f = Ir(r, ct.current);
        Ur(r, s), f = Vl(null, r, u, n, f, s);
        var p = Fl();
        return r.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, bt(u) ? (p = !0, Qo(r)) : p = !1, r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, Ml(r), f.updater = ps, r.stateNode = f, f._reactInternals = r, Kl(r, u, n, s), r = Ql(null, r, u, !0, p, s)) : (r.tag = 0, Ne && p && Sl(r), mt(null, r, f, s), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (ms(n, r), n = r.pendingProps, f = u._init, u = f(u._payload), r.type = u, f = r.tag = F1(u), n = Yt(u, n), f) {
            case 0:
              r = Xl(null, r, u, n, s);
              break e;
            case 1:
              r = Ip(null, r, u, n, s);
              break e;
            case 11:
              r = jp(null, r, u, n, s);
              break e;
            case 14:
              r = Mp(null, r, u, Yt(u.type, n), s);
              break e;
          }
          throw Error(i(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : Yt(u, f), Xl(n, r, u, f, s);
      case 1:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : Yt(u, f), Ip(n, r, u, f, s);
      case 3:
        e: {
          if (Lp(r), n === null) throw Error(i(387));
          u = r.pendingProps, p = r.memoizedState, f = p.element, qd(n, r), ss(r, u, null, s);
          var v = r.memoizedState;
          if (u = v.element, p.isDehydrated) if (p = { element: u, isDehydrated: !1, cache: v.cache, pendingSuspenseBoundaries: v.pendingSuspenseBoundaries, transitions: v.transitions }, r.updateQueue.baseState = p, r.memoizedState = p, r.flags & 256) {
            f = Wr(Error(i(423)), r), r = $p(n, r, u, s, f);
            break e;
          } else if (u !== f) {
            f = Wr(Error(i(424)), r), r = $p(n, r, u, s, f);
            break e;
          } else for (Ot = jn(r.stateNode.containerInfo.firstChild), At = r, Ne = !0, Gt = null, s = Qd(r, null, u, s), r.child = s; s; ) s.flags = s.flags & -3 | 4096, s = s.sibling;
          else {
            if (Vr(), u === f) {
              r = wn(n, r, s);
              break e;
            }
            mt(n, r, u, s);
          }
          r = r.child;
        }
        return r;
      case 5:
        return np(r), n === null && El(r), u = r.type, f = r.pendingProps, p = n !== null ? n.memoizedProps : null, v = f.children, yl(u, f) ? v = null : p !== null && yl(u, p) && (r.flags |= 32), Np(n, r), mt(n, r, v, s), r.child;
      case 6:
        return n === null && El(r), null;
      case 13:
        return Vp(n, r, s);
      case 4:
        return Rl(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = Fr(r, null, u, s) : mt(n, r, u, s), r.child;
      case 11:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : Yt(u, f), jp(n, r, u, f, s);
      case 7:
        return mt(n, r, r.pendingProps, s), r.child;
      case 8:
        return mt(n, r, r.pendingProps.children, s), r.child;
      case 12:
        return mt(n, r, r.pendingProps.children, s), r.child;
      case 10:
        e: {
          if (u = r.type._context, f = r.pendingProps, p = r.memoizedProps, v = f.value, Me(rs, u._currentValue), u._currentValue = v, p !== null) if (Kt(p.value, v)) {
            if (p.children === f.children && !xt.current) {
              r = wn(n, r, s);
              break e;
            }
          } else for (p = r.child, p !== null && (p.return = r); p !== null; ) {
            var x = p.dependencies;
            if (x !== null) {
              v = p.child;
              for (var _ = x.firstContext; _ !== null; ) {
                if (_.context === u) {
                  if (p.tag === 1) {
                    _ = vn(-1, s & -s), _.tag = 2;
                    var M = p.updateQueue;
                    if (M !== null) {
                      M = M.shared;
                      var B = M.pending;
                      B === null ? _.next = _ : (_.next = B.next, B.next = _), M.pending = _;
                    }
                  }
                  p.lanes |= s, _ = p.alternate, _ !== null && (_.lanes |= s), Ol(
                    p.return,
                    s,
                    r
                  ), x.lanes |= s;
                  break;
                }
                _ = _.next;
              }
            } else if (p.tag === 10) v = p.type === r.type ? null : p.child;
            else if (p.tag === 18) {
              if (v = p.return, v === null) throw Error(i(341));
              v.lanes |= s, x = v.alternate, x !== null && (x.lanes |= s), Ol(v, s, r), v = p.sibling;
            } else v = p.child;
            if (v !== null) v.return = p;
            else for (v = p; v !== null; ) {
              if (v === r) {
                v = null;
                break;
              }
              if (p = v.sibling, p !== null) {
                p.return = v.return, v = p;
                break;
              }
              v = v.return;
            }
            p = v;
          }
          mt(n, r, f.children, s), r = r.child;
        }
        return r;
      case 9:
        return f = r.type, u = r.pendingProps.children, Ur(r, s), f = It(f), u = u(f), r.flags |= 1, mt(n, r, u, s), r.child;
      case 14:
        return u = r.type, f = Yt(u, r.pendingProps), f = Yt(u.type, f), Mp(n, r, u, f, s);
      case 15:
        return Rp(n, r, r.type, r.pendingProps, s);
      case 17:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : Yt(u, f), ms(n, r), r.tag = 1, bt(u) ? (n = !0, Qo(r)) : n = !1, Ur(r, s), Pp(r, u, f), Kl(r, u, f, s), Ql(null, r, u, !0, n, s);
      case 19:
        return Bp(n, r, s);
      case 22:
        return Dp(n, r, s);
    }
    throw Error(i(156, r.tag));
  };
  function dh(n, r) {
    return Wf(n, r);
  }
  function V1(n, r, s, u) {
    this.tag = n, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Vt(n, r, s, u) {
    return new V1(n, r, s, u);
  }
  function yu(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function F1(n) {
    if (typeof n == "function") return yu(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === se) return 11;
      if (n === _e) return 14;
    }
    return 2;
  }
  function Un(n, r) {
    var s = n.alternate;
    return s === null ? (s = Vt(n.tag, r, n.key, n.mode), s.elementType = n.elementType, s.type = n.type, s.stateNode = n.stateNode, s.alternate = n, n.alternate = s) : (s.pendingProps = r, s.type = n.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = n.flags & 14680064, s.childLanes = n.childLanes, s.lanes = n.lanes, s.child = n.child, s.memoizedProps = n.memoizedProps, s.memoizedState = n.memoizedState, s.updateQueue = n.updateQueue, r = n.dependencies, s.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, s.sibling = n.sibling, s.index = n.index, s.ref = n.ref, s;
  }
  function Es(n, r, s, u, f, p) {
    var v = 2;
    if (u = n, typeof n == "function") yu(n) && (v = 1);
    else if (typeof n == "string") v = 5;
    else e: switch (n) {
      case z:
        return dr(s.children, f, p, r);
      case W:
        v = 8, f |= 8;
        break;
      case G:
        return n = Vt(12, s, r, f | 2), n.elementType = G, n.lanes = p, n;
      case ce:
        return n = Vt(13, s, r, f), n.elementType = ce, n.lanes = p, n;
      case we:
        return n = Vt(19, s, r, f), n.elementType = we, n.lanes = p, n;
      case ve:
        return Cs(s, f, p, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case le:
            v = 10;
            break e;
          case ue:
            v = 9;
            break e;
          case se:
            v = 11;
            break e;
          case _e:
            v = 14;
            break e;
          case Ce:
            v = 16, u = null;
            break e;
        }
        throw Error(i(130, n == null ? n : typeof n, ""));
    }
    return r = Vt(v, s, r, f), r.elementType = n, r.type = u, r.lanes = p, r;
  }
  function dr(n, r, s, u) {
    return n = Vt(7, n, u, r), n.lanes = s, n;
  }
  function Cs(n, r, s, u) {
    return n = Vt(22, n, u, r), n.elementType = ve, n.lanes = s, n.stateNode = { isHidden: !1 }, n;
  }
  function vu(n, r, s) {
    return n = Vt(6, n, null, r), n.lanes = s, n;
  }
  function wu(n, r, s) {
    return r = Vt(4, n.children !== null ? n.children : [], n.key, r), r.lanes = s, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function B1(n, r, s, u, f) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ha(0), this.expirationTimes = Ha(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ha(0), this.identifierPrefix = u, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null;
  }
  function xu(n, r, s, u, f, p, v, x, _) {
    return n = new B1(n, r, s, x, _), r === 1 ? (r = 1, p === !0 && (r |= 8)) : r = 0, p = Vt(3, null, null, r), n.current = p, p.stateNode = n, p.memoizedState = { element: u, isDehydrated: s, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ml(p), n;
  }
  function U1(n, r, s) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Z, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: s };
  }
  function ph(n) {
    if (!n) return Rn;
    n = n._reactInternals;
    e: {
      if (er(n) !== n || n.tag !== 1) throw Error(i(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (bt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(i(171));
    }
    if (n.tag === 1) {
      var s = n.type;
      if (bt(s)) return Fd(n, s, r);
    }
    return r;
  }
  function hh(n, r, s, u, f, p, v, x, _) {
    return n = xu(s, u, !0, n, f, p, v, x, _), n.context = ph(null), s = n.current, u = gt(), f = Fn(s), p = vn(u, f), p.callback = r ?? null, In(s, p, f), n.current.lanes = f, wi(n, f, u), _t(n, u), n;
  }
  function Ts(n, r, s, u) {
    var f = r.current, p = gt(), v = Fn(f);
    return s = ph(s), r.context === null ? r.context = s : r.pendingContext = s, r = vn(p, v), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = In(f, r, v), n !== null && (Jt(n, f, v, p), os(n, f, v)), v;
  }
  function zs(n) {
    return n = n.current, n.child ? (n.child.tag === 5, n.child.stateNode) : null;
  }
  function mh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var s = n.retryLane;
      n.retryLane = s !== 0 && s < r ? s : r;
    }
  }
  function bu(n, r) {
    mh(n, r), (n = n.alternate) && mh(n, r);
  }
  function Z1() {
    return null;
  }
  var gh = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function ku(n) {
    this._internalRoot = n;
  }
  As.prototype.render = ku.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(i(409));
    Ts(n, r, null, null);
  }, As.prototype.unmount = ku.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      ur(function() {
        Ts(null, n, null, null);
      }), r[pn] = null;
    }
  };
  function As(n) {
    this._internalRoot = n;
  }
  As.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = qf();
      n = { blockedOn: null, target: n, priority: r };
      for (var s = 0; s < zn.length && r !== 0 && r < zn[s].priority; s++) ;
      zn.splice(s, 0, n), s === 0 && nd(n);
    }
  };
  function Su(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Os(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function yh() {
  }
  function W1(n, r, s, u, f) {
    if (f) {
      if (typeof u == "function") {
        var p = u;
        u = function() {
          var M = zs(v);
          p.call(M);
        };
      }
      var v = hh(r, u, n, 0, null, !1, !1, "", yh);
      return n._reactRootContainer = v, n[pn] = v.current, Mi(n.nodeType === 8 ? n.parentNode : n), ur(), v;
    }
    for (; f = n.lastChild; ) n.removeChild(f);
    if (typeof u == "function") {
      var x = u;
      u = function() {
        var M = zs(_);
        x.call(M);
      };
    }
    var _ = xu(n, 0, !1, null, null, !1, !1, "", yh);
    return n._reactRootContainer = _, n[pn] = _.current, Mi(n.nodeType === 8 ? n.parentNode : n), ur(function() {
      Ts(r, _, s, u);
    }), _;
  }
  function js(n, r, s, u, f) {
    var p = s._reactRootContainer;
    if (p) {
      var v = p;
      if (typeof f == "function") {
        var x = f;
        f = function() {
          var _ = zs(v);
          x.call(_);
        };
      }
      Ts(r, v, n, f);
    } else v = W1(s, r, n, f, u);
    return zs(v);
  }
  Qf = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var s = vi(r.pendingLanes);
          s !== 0 && (Ka(r, s | 1), _t(r, We()), (Pe & 6) === 0 && (Gr = We() + 500, Dn()));
        }
        break;
      case 13:
        ur(function() {
          var u = yn(n, 1);
          if (u !== null) {
            var f = gt();
            Jt(u, n, 1, f);
          }
        }), bu(n, 1);
    }
  }, Ga = function(n) {
    if (n.tag === 13) {
      var r = yn(n, 134217728);
      if (r !== null) {
        var s = gt();
        Jt(r, n, 134217728, s);
      }
      bu(n, 134217728);
    }
  }, Jf = function(n) {
    if (n.tag === 13) {
      var r = Fn(n), s = yn(n, r);
      if (s !== null) {
        var u = gt();
        Jt(s, n, r, u);
      }
      bu(n, r);
    }
  }, qf = function() {
    return ze;
  }, ed = function(n, r) {
    var s = ze;
    try {
      return ze = n, r();
    } finally {
      ze = s;
    }
  }, Va = function(n, r, s) {
    switch (r) {
      case "input":
        if (ut(n, s), r = s.name, s.type === "radio" && r != null) {
          for (s = n; s.parentNode; ) s = s.parentNode;
          for (s = s.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < s.length; r++) {
            var u = s[r];
            if (u !== n && u.form === n.form) {
              var f = Yo(u);
              if (!f) throw Error(i(90));
              ht(u), ut(u, f);
            }
          }
        }
        break;
      case "textarea":
        zf(n, s);
        break;
      case "select":
        r = s.value, r != null && Pr(n, !!s.multiple, r, !1);
    }
  }, Lf = hu, $f = ur;
  var H1 = { usingClientEntryPoint: !1, Events: [Ni, Dr, Yo, Nf, If, hu] }, Xi = { findFiberByHostInstance: tr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, K1 = { bundleType: Xi.bundleType, version: Xi.version, rendererPackageName: Xi.rendererPackageName, rendererConfig: Xi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: D.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Uf(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Xi.findFiberByHostInstance || Z1, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ms = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ms.isDisabled && Ms.supportsFiber) try {
      Ao = Ms.inject(K1), nn = Ms;
    } catch {
    }
  }
  return Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H1, Pt.createPortal = function(n, r) {
    var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Su(r)) throw Error(i(200));
    return U1(n, r, null, s);
  }, Pt.createRoot = function(n, r) {
    if (!Su(n)) throw Error(i(299));
    var s = !1, u = "", f = gh;
    return r != null && (r.unstable_strictMode === !0 && (s = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (f = r.onRecoverableError)), r = xu(n, 1, !1, null, null, s, !1, u, f), n[pn] = r.current, Mi(n.nodeType === 8 ? n.parentNode : n), new ku(r);
  }, Pt.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(i(188)) : (n = Object.keys(n).join(","), Error(i(268, n)));
    return n = Uf(r), n = n === null ? null : n.stateNode, n;
  }, Pt.flushSync = function(n) {
    return ur(n);
  }, Pt.hydrate = function(n, r, s) {
    if (!Os(r)) throw Error(i(200));
    return js(null, n, r, !0, s);
  }, Pt.hydrateRoot = function(n, r, s) {
    if (!Su(n)) throw Error(i(405));
    var u = s != null && s.hydratedSources || null, f = !1, p = "", v = gh;
    if (s != null && (s.unstable_strictMode === !0 && (f = !0), s.identifierPrefix !== void 0 && (p = s.identifierPrefix), s.onRecoverableError !== void 0 && (v = s.onRecoverableError)), r = hh(r, null, n, 1, s ?? null, f, !1, p, v), n[pn] = r.current, Mi(n), u) for (n = 0; n < u.length; n++) s = u[n], f = s._getVersion, f = f(s._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [s, f] : r.mutableSourceEagerHydrationData.push(
      s,
      f
    );
    return new As(r);
  }, Pt.render = function(n, r, s) {
    if (!Os(r)) throw Error(i(200));
    return js(null, n, r, !1, s);
  }, Pt.unmountComponentAtNode = function(n) {
    if (!Os(n)) throw Error(i(40));
    return n._reactRootContainer ? (ur(function() {
      js(null, null, n, !1, function() {
        n._reactRootContainer = null, n[pn] = null;
      });
    }), !0) : !1;
  }, Pt.unstable_batchedUpdates = hu, Pt.unstable_renderSubtreeIntoContainer = function(n, r, s, u) {
    if (!Os(s)) throw Error(i(200));
    if (n == null || n._reactInternals === void 0) throw Error(i(38));
    return js(n, r, s, !1, u);
  }, Pt.version = "18.3.1-next-f1338f8080-20240426", Pt;
}
var Sh;
function ex() {
  if (Sh) return Pu.exports;
  Sh = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return e(), Pu.exports = q1(), Pu.exports;
}
var _h;
function tx() {
  if (_h) return Ds;
  _h = 1;
  var e = ex();
  return Ds.createRoot = e.createRoot, Ds.hydrateRoot = e.hydrateRoot, Ds;
}
var nx = tx();
const Ph = (e) => {
  let t;
  const i = /* @__PURE__ */ new Set(), o = (m, g) => {
    const y = typeof m == "function" ? m(t) : m;
    if (!Object.is(y, t)) {
      const w = t;
      t = g ?? (typeof y != "object" || y === null) ? y : Object.assign({}, t, y), i.forEach((b) => b(t, w));
    }
  }, a = () => t, d = { setState: o, getState: a, getInitialState: () => h, subscribe: (m) => (i.add(m), () => i.delete(m)) }, h = t = e(o, a, d);
  return d;
}, rx = ((e) => e ? Ph(e) : Ph);
function Fg(e) {
  const t = Object.values(e).filter((o) => typeof o == "number");
  return Object.entries(e).filter(([o, a]) => t.indexOf(+o) === -1).map(([o, a]) => a);
}
function Eh(e, t = "|") {
  return e.map((i) => Zg(i)).join(t);
}
function sc(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function ga(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function ix(e) {
  return e == null;
}
function Bc(e) {
  const t = e.startsWith("^") ? 1 : 0, i = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, i);
}
function ox(e, t) {
  const i = e / t, o = Math.round(i), a = 4 * Number.EPSILON * Math.max(Math.abs(i), 1);
  return Math.abs(i - o) < a ? 0 : i - o;
}
function Ct(e, t, i) {
  Object.defineProperty(e, t, {
    value: i,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Xn(...e) {
  const t = {};
  for (const i of e) {
    const o = Object.getOwnPropertyDescriptors(i);
    Object.assign(t, o);
  }
  return Object.defineProperties({}, t);
}
function sx(e) {
  return JSON.stringify(e);
}
function ax(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const Bg = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function uo(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const lx = /* @__PURE__ */ ga(() => {
  if (fn.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function co(e) {
  if (uo(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const i = t.prototype;
  return !(uo(i) === !1 || Object.prototype.hasOwnProperty.call(i, "isPrototypeOf") === !1);
}
function Ug(e) {
  return co(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
const ux = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function ni(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Qn(e, t, i) {
  const o = new e._zod.constr(t ?? e._zod.def);
  return (!t || i?.parent) && (o._zod.parent = e), o;
}
function ae(e) {
  const t = e;
  if (!t)
    return {};
  if (typeof t == "string")
    return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return delete t.message, typeof t.error == "string" ? { ...t, error: () => t.error } : t;
}
function Zg(e) {
  return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function cx(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin !== void 0 && e[t]._zod.optout === "optional");
}
const fx = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function dx(e, t) {
  const i = e._zod.def, o = i.checks;
  if (o && o.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const l = Xn(e._zod.def, {
    get shape() {
      const c = {};
      for (const d of Reflect.ownKeys(t)) {
        if (!Object.prototype.hasOwnProperty.call(i.shape, d))
          throw new Error(`Unrecognized key: "${String(d)}"`);
        t[d] && Ct(c, d, i.shape[d]);
      }
      return Ct(this, "shape", c), c;
    },
    checks: []
  });
  return Qn(e, l);
}
function px(e, t) {
  const i = e._zod.def, o = i.checks;
  if (o && o.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const l = Xn(e._zod.def, {
    get shape() {
      const c = { ...e._zod.def.shape };
      for (const d of Reflect.ownKeys(t)) {
        if (!Object.prototype.hasOwnProperty.call(i.shape, d))
          throw new Error(`Unrecognized key: "${String(d)}"`);
        t[d] && delete c[d];
      }
      return Ct(this, "shape", c), c;
    },
    checks: []
  });
  return Qn(e, l);
}
function hx(e, t) {
  if (!co(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const i = e._zod.def.checks;
  if (i && i.length > 0) {
    const l = e._zod.def.shape;
    for (const c of Reflect.ownKeys(t))
      if (Object.getOwnPropertyDescriptor(l, c) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const a = Xn(e._zod.def, {
    get shape() {
      const l = { ...e._zod.def.shape, ...t };
      return Ct(this, "shape", l), l;
    }
  });
  return Qn(e, a);
}
function mx(e, t) {
  if (!co(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const i = Xn(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape, ...t };
      return Ct(this, "shape", o), o;
    }
  });
  return Qn(e, i);
}
function gx(e, t) {
  if (!t?._zod?.def)
    throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
  if (e._zod.def.checks?.length)
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  const i = Xn(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape, ...t._zod.def.shape };
      return Ct(this, "shape", o), o;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: t._zod.def.checks ?? []
  });
  return Qn(e, i);
}
function Ch(e, t, i, o = "partial") {
  const l = t._zod.def.checks;
  if (l && l.length > 0)
    throw new Error(`.${o}() cannot be used on object schemas containing refinements`);
  const d = Xn(t._zod.def, {
    get shape() {
      const h = t._zod.def.shape, m = { ...h };
      if (i)
        for (const g of Reflect.ownKeys(i)) {
          if (!Object.prototype.hasOwnProperty.call(h, g))
            throw new Error(`Unrecognized key: "${String(g)}"`);
          i[g] && (m[g] = e ? new e({
            type: "optional",
            innerType: h[g]
          }) : h[g]);
        }
      else
        for (const g of Reflect.ownKeys(h))
          m[g] = e ? new e({
            type: "optional",
            innerType: h[g]
          }) : h[g];
      return Ct(this, "shape", m), m;
    },
    checks: []
  });
  return Qn(t, d);
}
function yx(e, t, i) {
  const o = Xn(t._zod.def, {
    get shape() {
      const a = t._zod.def.shape, l = { ...a };
      if (i)
        for (const c of Reflect.ownKeys(i)) {
          if (!Object.prototype.hasOwnProperty.call(l, c))
            throw new Error(`Unrecognized key: "${String(c)}"`);
          i[c] && (l[c] = new e({
            type: "nonoptional",
            innerType: a[c]
          }));
        }
      else
        for (const c of Reflect.ownKeys(a))
          l[c] = new e({
            type: "nonoptional",
            innerType: a[c]
          });
      return Ct(this, "shape", l), l;
    }
  });
  return Qn(t, o);
}
function Qr(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let i = t; i < e.issues.length; i++)
    if (e.issues[i]?.continue !== !0)
      return !0;
  return !1;
}
function vx(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let i = t; i < e.issues.length; i++)
    if (e.issues[i]?.continue === !1)
      return !0;
  return !1;
}
function Wg(e, t) {
  return t.map((i) => {
    var o;
    return (o = i).path ?? (o.path = []), i.path.unshift(e), i;
  });
}
function Qi(e) {
  return typeof e == "string" ? e : e?.message;
}
function Th(e, t, i) {
  var o;
  for (let a = t; a < e.length; a++)
    (o = e[a]).schema ?? (o.schema = i);
}
function ai(e, t, i) {
  var o;
  const a = e.inst?._zod?.traits;
  a?.has("$ZodType") && (a.has("$ZodCheck") ? (o = e).schema ?? (o.schema = e.inst) : e.schema = e.inst);
  const l = e.schema !== e.inst ? e.schema?._zod.def?.error : void 0, c = e.message ? e.message : Qi(e.inst?._zod.def?.error?.(e)) ?? Qi(l?.(e)) ?? Qi(t?.error?.(e)) ?? Qi(i.customError?.(e)) ?? Qi(i.localeError?.(e)) ?? "Invalid input", { inst: d, schema: h, continue: m, input: g, ...y } = e;
  return y.path ?? (y.path = []), y.message = c, t?.reportInput && (y.input = g), y;
}
const wx = /[\uD800-\uDBFF]/;
function Uc(e) {
  const t = e.length;
  if (!wx.test(e))
    return t;
  let i = t;
  for (let o = 0; o < t - 1; o++)
    (e.charCodeAt(o) & 64512) === 55296 && (e.charCodeAt(o + 1) & 64512) === 56320 && (i--, o++);
  return i;
}
function Zc(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function xx(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "nan" : "number";
    case "object": {
      if (e === null)
        return "null";
      if (Array.isArray(e))
        return "array";
      const i = e;
      if (i && Object.getPrototypeOf(i) !== Object.prototype && "constructor" in i && i.constructor)
        return i.constructor.name;
    }
  }
  return t;
}
function fo(...e) {
  const [t, i, o] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: i,
    inst: o
  } : { ...t };
}
function bx(e, t) {
  for (const i in t) {
    const o = Object.getOwnPropertyDescriptor(t, i);
    o.get ? Object.defineProperty(e, i, { ...o, enumerable: !1 }) : kx(e, i, o.value);
  }
}
function ri(e, t, i, o = !0) {
  return Object.defineProperty(e, t, { configurable: !0, writable: !0, enumerable: o, value: i }), i;
}
function Hg(e, t, i) {
  return ri(e, t, i, !1);
}
function kx(e, t, i) {
  Object.defineProperty(e, t, {
    configurable: !0,
    get() {
      return this == null ? i : ri(this, t, i.bind(this));
    },
    set(o) {
      ri(this, t, o);
    }
  });
}
function Sx(e, t) {
  const i = Object.getPrototypeOf(e);
  return t in i ? void 0 : i;
}
let Tu, Wn = !1;
const _x = {
  configurable: !0,
  get() {
    Wn = !0;
  }
};
function Ae(e, t, i) {
  const o = Object.getPrototypeOf(e._zod);
  if (t in o && Tu !== e._zod) {
    Tu = void 0;
    return;
  }
  Tu = e._zod, Object.defineProperty(o, t, {
    configurable: !0,
    get() {
      Object.defineProperty(this, t, _x);
      const a = Wn;
      Wn = !1;
      try {
        const l = i(this);
        return Wn ? delete this[t] : Object.defineProperty(this, t, { configurable: !0, writable: !0, value: l }), Wn = Wn || a, l;
      } catch (l) {
        throw delete this[t], Wn = Wn || a, l;
      }
    },
    set(a) {
      Object.defineProperty(this, t, { configurable: !0, writable: !0, value: a });
    }
  });
}
function Px(e, t, i, o) {
  const a = Sx(e, t);
  a && Object.defineProperty(a, t, {
    configurable: !0,
    get() {
      const l = { configurable: !0, writable: !0, enumerable: o, value: void 0 };
      return Object.defineProperty(this, t, l), l.value = i(this), Object.defineProperty(this, t, l), l.value;
    },
    set(l) {
      Object.defineProperty(this, t, { configurable: !0, writable: !0, enumerable: o, value: l });
    }
  });
}
const Ex = "~constantCatch";
function Cx(e) {
  const t = () => e;
  return t[Ex] = !0, t;
}
var zh;
const zu = { value: void 0, enumerable: !1 };
let Ah = "captureStackTrace" in Error ? Error : null;
function Tx(e) {
  const t = Ah;
  if (t) {
    const i = t.stackTraceLimit;
    if (typeof i == "number") {
      try {
        t.stackTraceLimit = 0;
      } catch {
        return Ah = null, new e();
      }
      try {
        return new e();
      } finally {
        t.stackTraceLimit = i;
      }
    }
  }
  return new e();
}
function L(e, t, i, o) {
  const a = {};
  function l(w) {
    this.def = w, this.constr = y, this.traits = /* @__PURE__ */ new Set();
  }
  l.prototype = a;
  const c = i, d = c && /* @__PURE__ */ new WeakSet();
  function h(w, b) {
    if (!w._zod) {
      zu.value = new l(b);
      try {
        Object.defineProperty(w, "_zod", zu);
      } finally {
        zu.value = void 0;
      }
    }
    if (w._zod.traits.has(e))
      return;
    if (w._zod.traits.add(e), t(w, b), d) {
      const T = Object.getPrototypeOf(w), S = w._zod.constr.prototype;
      let R = T;
      for (; R && R !== S; )
        R = Object.getPrototypeOf(R);
      const O = R ?? T;
      d.has(O) || (d.add(O), bx(O, c));
    }
    const k = y.prototype;
    for (const T in k)
      Object.prototype.hasOwnProperty.call(k, T) && (T in w || (w[T] = k[T].bind(w)));
  }
  const m = o?.Parent ?? Object;
  class g extends m {
  }
  Object.defineProperty(g, "name", { value: e });
  function y(w) {
    const b = o?.Parent ? Tx(g) : this;
    h(b, w);
    const k = b._zod.deferred;
    if (k) {
      for (const S of k)
        S();
      b._zod.deferred = void 0;
    }
    const T = globalThis.__zod_globalConfig?.postProcessor;
    return T && T(b), b;
  }
  return Object.defineProperty(y, "init", { value: h }), Object.defineProperty(y, Symbol.hasInstance, {
    value: (w) => o?.Parent && w instanceof o.Parent ? !0 : w?._zod?.traits?.has(e)
  }), Object.defineProperty(y, "name", { value: e }), y;
}
class ti extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Kg extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
(zh = globalThis).__zod_globalConfig ?? (zh.__zod_globalConfig = {});
const fn = globalThis.__zod_globalConfig;
function Jn(e) {
  return e && Object.assign(fn, e), fn;
}
function zx() {
  const e = this._zod;
  return e.message ?? (e.message = JSON.stringify(e.def, sc, 2)), e.message;
}
function Ax(e) {
  this._zod.message = e;
}
const Ox = {
  get: zx,
  set: Ax,
  enumerable: !0,
  configurable: !0
}, Au = { value: void 0, enumerable: !1 }, Ou = { value: void 0, enumerable: !1 }, Oh = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), Gg = (e, t) => {
  e.name = "$ZodError", Au.value = e._zod, Object.defineProperty(e, "_zod", Au), Ou.value = t, Object.defineProperty(e, "issues", Ou), Au.value = void 0, Ou.value = void 0, Object.defineProperty(e, "message", Ox);
  const i = Object.getPrototypeOf(e);
  Oh.has(i) || (Oh.add(i), Object.defineProperty(i, "toString", {
    configurable: !0,
    enumerable: !1,
    get() {
      const o = () => this.message;
      return Object.defineProperty(this, "toString", { value: o, configurable: !0, writable: !0 }), o;
    },
    set(o) {
      Object.defineProperty(this, "toString", { value: o, configurable: !0, writable: !0 });
    }
  }));
}, Yg = L("$ZodError", Gg), Xg = L("$ZodError", Gg, void 0, {
  Parent: Error
});
function jx(e, t, i) {
  return Object.prototype.hasOwnProperty.call(e, t) || (t === "__proto__" ? Object.defineProperty(e, t, { value: i(), writable: !0, enumerable: !0, configurable: !0 }) : e[t] = i()), e[t];
}
function Mx(e, t = (i) => i.message) {
  const i = {}, o = [];
  for (const a of e.issues)
    a.path.length > 0 ? jx(i, a.path[0], () => []).push(t(a)) : o.push(t(a));
  return { formErrors: o, fieldErrors: i };
}
function Rx(e, t = (i) => i.message) {
  const i = { _errors: [] }, o = (a, l = []) => {
    for (const c of a.issues)
      if (c.code === "invalid_union" && c.errors.length)
        c.errors.map((d) => o({ issues: d }, [...l, ...c.path]));
      else if (c.code === "invalid_key")
        o({ issues: c.issues }, [...l, ...c.path]);
      else if (c.code === "invalid_element")
        o({ issues: c.issues }, [...l, ...c.path]);
      else {
        const d = [...l, ...c.path];
        if (d.length === 0)
          i._errors.push(t(c));
        else {
          let h = i, m = 0;
          for (; m < d.length; ) {
            const g = d[m], y = m === d.length - 1;
            if (g === "_errors") {
              y && h._errors.push(t(c)), m++;
              continue;
            }
            Object.prototype.hasOwnProperty.call(h, g) || Object.defineProperty(h, g, {
              value: { _errors: [] },
              enumerable: !0,
              writable: !0,
              configurable: !0
            });
            const w = h[g];
            y && w._errors.push(t(c)), h = w, m++;
          }
        }
      }
  };
  return o(e), i;
}
function ya(e, t) {
  return { callee: t?.callee ?? e, Err: t?.Err };
}
const Wc = (e) => {
  const t = (i, o, a, l) => {
    const c = a ? { ...a, async: !1 } : { async: !1 }, d = i._zod.run({ value: o, issues: [] }, c);
    if (d instanceof Promise)
      throw new ti();
    if (d.issues.length) {
      const h = new (l?.Err ?? e)(d.issues.map((m) => ai(m, c, Jn())));
      throw Bg(h, l?.callee ?? t), h;
    }
    return d.value;
  };
  return t;
}, Hc = (e) => {
  const t = async (i, o, a, l) => {
    const c = a ? { ...a, async: !0 } : { async: !0 };
    let d = i._zod.run({ value: o, issues: [] }, c);
    if (d instanceof Promise && (d = await d), d.issues.length) {
      const h = new (l?.Err ?? e)(d.issues.map((m) => ai(m, c, Jn())));
      throw Bg(h, l?.callee ?? t), h;
    }
    return d.value;
  };
  return t;
}, va = (e) => (t, i, o) => {
  const a = o ? { ...o, async: !1 } : { async: !1 }, l = t._zod.run({ value: i, issues: [] }, a);
  if (l instanceof Promise)
    throw new ti();
  return l.issues.length ? {
    success: !1,
    error: new (e ?? Yg)(l.issues.map((c) => ai(c, a, Jn())))
  } : { success: !0, data: l.value };
}, Dx = /* @__PURE__ */ va(Xg), wa = (e) => async (t, i, o) => {
  const a = o ? { ...o, async: !0 } : { async: !0 };
  let l = t._zod.run({ value: i, issues: [] }, a);
  return l instanceof Promise && (l = await l), l.issues.length ? {
    success: !1,
    error: new e(l.issues.map((c) => ai(c, a, Jn())))
  } : { success: !0, data: l.value };
}, Nx = /* @__PURE__ */ wa(Xg), Ix = (e) => {
  const t = Wc(e), i = (o, a, l, c) => {
    const d = l ? { ...l, direction: "backward" } : { direction: "backward" };
    return t(o, a, d, ya(i, c));
  };
  return i;
}, Lx = (e) => {
  const t = Wc(e), i = (o, a, l, c) => t(o, a, l, ya(i, c));
  return i;
}, $x = (e) => {
  const t = Hc(e), i = async (o, a, l, c) => {
    const d = l ? { ...l, direction: "backward" } : { direction: "backward" };
    return await t(o, a, d, ya(i, c));
  };
  return i;
}, Vx = (e) => {
  const t = Hc(e), i = async (o, a, l, c) => await t(o, a, l, ya(i, c));
  return i;
}, Fx = (e) => (t, i, o) => {
  const a = o ? { ...o, direction: "backward" } : { direction: "backward" };
  return va(e)(t, i, a);
}, Bx = (e) => (t, i, o) => va(e)(t, i, o), Ux = (e) => async (t, i, o) => {
  const a = o ? { ...o, direction: "backward" } : { direction: "backward" };
  return wa(e)(t, i, a);
}, Zx = (e) => async (t, i, o) => wa(e)(t, i, o), Wx = /^[cC][0-9a-z]{6,}$/, Hx = /^[0-9a-z]+$/, Kx = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, Gx = /^[0-9a-vA-V]{20}$/, Yx = /^[A-Za-z0-9]{27}$/, Xx = /^[a-zA-Z0-9_-]{21}$/;
function Qx(e) {
  return new RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
}
const Jx = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, qx = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, jh = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, eb = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, tb = "^[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
function nb() {
  return new RegExp(tb, "u");
}
const rb = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ib = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, ob = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, sb = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, ab = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Qg = /^[A-Za-z0-9_-]*$/, lb = /^https?$/, ub = /^\+[1-9]\d{6,14}$/, Jg = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function cb(e) {
  return new RegExp(`^${e}$`);
}
const fb = /* @__PURE__ */ cb(Jg);
function ac(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : e.seconds ? `${t}:[0-5]\\d(?:\\.\\d+)?` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function db(e) {
  return new RegExp(`^${ac(e)}$`);
}
function pb(e) {
  const t = ["Z"];
  e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const i = `${ac({ precision: e.precision, seconds: !0 })}(?:${t.join("|")})`, o = e.local ? `${i}|${ac({ precision: e.precision })}` : i;
  return new RegExp(`^${Jg}T(?:${o})$`);
}
const hb = (e) => {
  const t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, mb = /^-?\d+$/, gb = /^-?\d+(?:\.\d+)?$/, yb = /^(?:true|false)$/i, vb = /^[^A-Z]*$/, wb = /^[^a-z]*$/, Tt = /* @__PURE__ */ L("$ZodCheck", (e, t) => {
  var i;
  e._zod ?? (e._zod = {}), e._zod.def = t, (i = e._zod).onattach ?? (i.onattach = []);
}), Kc = (e) => {
  const t = e.value;
  return !ix(t) && t.length !== void 0;
}, ra = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, qg = /* @__PURE__ */ L("$ZodCheckLessThan", (e, t) => {
  Tt.init(e, t);
  const i = ra[typeof t.value];
  e._zod.onattach.push((o) => {
    const a = o._zod.bag, l = (t.inclusive ? a.maximum : a.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    t.value < l && (t.inclusive ? a.maximum = t.value : a.exclusiveMaximum = t.value);
  }), e._zod.check = (o) => {
    (t.inclusive ? o.value <= t.value : o.value < t.value) || o.issues.push({
      origin: ra[typeof o.value] ?? i,
      code: "too_big",
      maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
      input: o.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), ey = /* @__PURE__ */ L("$ZodCheckGreaterThan", (e, t) => {
  Tt.init(e, t);
  const i = ra[typeof t.value];
  e._zod.onattach.push((o) => {
    const a = o._zod.bag, l = (t.inclusive ? a.minimum : a.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    t.value > l && (t.inclusive ? a.minimum = t.value : a.exclusiveMinimum = t.value);
  }), e._zod.check = (o) => {
    (t.inclusive ? o.value >= t.value : o.value > t.value) || o.issues.push({
      origin: ra[typeof o.value] ?? i,
      code: "too_small",
      minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
      input: o.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), xb = /* @__PURE__ */ L("$ZodCheckMultipleOf", (e, t) => {
  Tt.init(e, t), e._zod.onattach.push((i) => {
    var o;
    (o = i._zod.bag).multipleOf ?? (o.multipleOf = t.value);
  }), e._zod.check = (i) => {
    if (typeof i.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof i.value == "bigint" ? (
      // `value % 0n` throws, and nothing is a multiple of zero — the number branch already fails this way via NaN
      t.value !== BigInt(0) && i.value % t.value === BigInt(0)
    ) : ox(i.value, t.value) === 0) || i.issues.push({
      origin: typeof i.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
}), bb = /* @__PURE__ */ L("$ZodCheckNumberFormat", (e, t) => {
  Tt.init(e, t), t.format = t.format || "float64";
  const i = t.format?.includes("int"), o = i ? "int" : "number", [a, l] = fx[t.format];
  e._zod.onattach.push((c) => {
    const d = c._zod.bag;
    d.format = t.format, d.minimum = a, d.maximum = l, i && (d.pattern = mb);
  }), e._zod.check = (c) => {
    const d = c.value;
    if (i) {
      if (!Number.isInteger(d)) {
        c.issues.push({
          expected: o,
          format: t.format,
          code: "invalid_type",
          continue: !1,
          input: d,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(d)) {
        d > 0 ? c.issues.push({
          input: d,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: o,
          inclusive: !0,
          continue: !t.abort
        }) : c.issues.push({
          input: d,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: o,
          inclusive: !0,
          continue: !t.abort
        });
        return;
      }
    }
    d < a && c.issues.push({
      origin: "number",
      input: d,
      code: "too_small",
      minimum: a,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    }), d > l && c.issues.push({
      origin: "number",
      input: d,
      code: "too_big",
      maximum: l,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    });
  };
}), kb = /* @__PURE__ */ L("$ZodCheckMaxLength", (e, t) => {
  var i;
  Tt.init(e, t), (i = e._zod.def).when ?? (i.when = Kc), e._zod.onattach.push((o) => {
    const a = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < a && (o._zod.bag.maximum = t.maximum);
  }), e._zod.check = (o) => {
    const a = o.value, l = a.length;
    if ((typeof a == "string" && l > t.maximum ? Uc(a) : l) <= t.maximum)
      return;
    const d = Zc(a);
    o.issues.push({
      origin: d,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: a,
      inst: e,
      continue: !t.abort
    });
  };
}), Sb = /* @__PURE__ */ L("$ZodCheckMinLength", (e, t) => {
  var i;
  Tt.init(e, t), (i = e._zod.def).when ?? (i.when = Kc), e._zod.onattach.push((o) => {
    const a = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > a && (o._zod.bag.minimum = t.minimum);
  }), e._zod.check = (o) => {
    const a = o.value, l = a.length;
    if ((typeof a == "string" && l >= t.minimum && l < t.minimum * 2 ? Uc(a) : l) >= t.minimum)
      return;
    const d = Zc(a);
    o.issues.push({
      origin: d,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: a,
      inst: e,
      continue: !t.abort
    });
  };
}), _b = /* @__PURE__ */ L("$ZodCheckLengthEquals", (e, t) => {
  var i;
  Tt.init(e, t), (i = e._zod.def).when ?? (i.when = Kc), e._zod.onattach.push((o) => {
    const a = o._zod.bag;
    a.minimum = t.length, a.maximum = t.length, a.length = t.length;
  }), e._zod.check = (o) => {
    const a = o.value, l = a.length, c = typeof a == "string" && l >= t.length && l <= t.length * 2 ? Uc(a) : l;
    if (c === t.length)
      return;
    const d = Zc(a), h = c > t.length;
    o.issues.push({
      origin: d,
      ...h ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), xa = /* @__PURE__ */ L("$ZodCheckStringFormat", (e, t) => {
  var i, o;
  Tt.init(e, t), e._zod.onattach.push((a) => {
    const l = a._zod.bag;
    l.format = t.format, t.pattern && (l.patterns ?? (l.patterns = /* @__PURE__ */ new Set()), l.patterns.add(t.pattern));
  }), t.pattern ? (i = e._zod).check ?? (i.check = (a) => {
    t.pattern.lastIndex = 0, !t.pattern.test(a.value) && a.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: a.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (o = e._zod).check ?? (o.check = () => {
  });
}), Pb = /* @__PURE__ */ L("$ZodCheckRegex", (e, t) => {
  xa.init(e, t), e._zod.check = (i) => {
    t.pattern.lastIndex = 0, !t.pattern.test(i.value) && i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: i.value,
      pattern: t.pattern.toString(),
      inst: e,
      continue: !t.abort
    });
  };
}), Eb = /* @__PURE__ */ L("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = vb), xa.init(e, t);
}), Cb = /* @__PURE__ */ L("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = wb), xa.init(e, t);
}), Tb = /* @__PURE__ */ L("$ZodCheckIncludes", (e, t) => {
  Tt.init(e, t);
  const i = ni(t.includes), o = new RegExp(typeof t.position == "number" ? `^.{${t.position},}${i}` : i);
  t.pattern = o, e._zod.onattach.push((a) => {
    const l = a._zod.bag;
    l.patterns ?? (l.patterns = /* @__PURE__ */ new Set()), l.patterns.add(o);
  }), e._zod.check = (a) => {
    a.value.includes(t.includes, t.position) || a.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: a.value,
      inst: e,
      continue: !t.abort
    });
  };
}), zb = /* @__PURE__ */ L("$ZodCheckStartsWith", (e, t) => {
  Tt.init(e, t);
  const i = new RegExp(`^${ni(t.prefix)}.*`);
  t.pattern ?? (t.pattern = i), e._zod.onattach.push((o) => {
    const a = o._zod.bag;
    a.patterns ?? (a.patterns = /* @__PURE__ */ new Set()), a.patterns.add(i);
  }), e._zod.check = (o) => {
    o.value.startsWith(t.prefix) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ab = /* @__PURE__ */ L("$ZodCheckEndsWith", (e, t) => {
  Tt.init(e, t);
  const i = new RegExp(`.*${ni(t.suffix)}$`);
  t.pattern ?? (t.pattern = i), e._zod.onattach.push((o) => {
    const a = o._zod.bag;
    a.patterns ?? (a.patterns = /* @__PURE__ */ new Set()), a.patterns.add(i);
  }), e._zod.check = (o) => {
    o.value.endsWith(t.suffix) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ob = /* @__PURE__ */ L("$ZodCheckOverwrite", (e, t) => {
  Tt.init(e, t), e._zod.check = (i) => {
    i.value = t.tx(i.value);
  };
});
class jb {
  constructor(t = [], i = {}) {
    this.content = [], this.indent = 0, this.args = t, this.closed = i;
  }
  indented(t) {
    this.indent += 1, t(this), this.indent -= 1;
  }
  write(t) {
    if (typeof t == "function") {
      t(this, { execution: "sync" }), t(this, { execution: "async" });
      return;
    }
    const o = t.split(`
`).filter((c) => c), a = Math.min(...o.map((c) => c.length - c.trimStart().length)), l = o.map((c) => c.slice(a)).map((c) => " ".repeat(this.indent * 2) + c);
    for (const c of l)
      this.content.push(c);
  }
  compile() {
    const t = Function, i = this?.content ?? [""];
    return new t(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {
${i.join(`
`)}
};`)(...Object.values(this.closed));
  }
}
const Mb = {
  major: 4,
  minor: 5,
  patch: 4
}, Ue = /* @__PURE__ */ L("$ZodType", (e, t) => {
  var i;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Mb;
  const o = e._zod.def.checks, a = e._zod.traits.has("$ZodCheck") ? [e, ...o ?? []] : o?.length ? [...o] : [];
  for (const l of a)
    for (const c of l._zod.onattach)
      c(e);
  if (a.length === 0)
    (i = e._zod).deferred ?? (i.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const l = (d, h, m) => {
      if (d.memo)
        return d;
      let g = Qr(d), y;
      for (const w of h) {
        if (w._zod.def.when) {
          if (vx(d) || !w._zod.def.when(d))
            continue;
        } else if (g)
          continue;
        const b = d.issues.length, k = w._zod.check(d);
        if (k instanceof Promise && m?.async === !1)
          throw new ti();
        if (y || k instanceof Promise)
          y = (y ?? Promise.resolve()).then(async () => {
            await k, d.issues.length !== b && (Th(d.issues, b, e), g || (g = Qr(d, b)));
          });
        else {
          if (d.issues.length === b)
            continue;
          Th(d.issues, b, e), g || (g = Qr(d, b));
        }
      }
      return y ? y.then(() => d) : d;
    }, c = (d, h, m) => {
      if (Qr(d))
        return d.aborted = !0, d;
      const g = l(h, a, m);
      if (g instanceof Promise) {
        if (m.async === !1)
          throw new ti();
        return g.then((y) => e._zod.parse(y, m));
      }
      return e._zod.parse(g, m);
    };
    e._zod.run = (d, h) => {
      if (h.skipChecks)
        return e._zod.parse(d, h);
      if (h.direction === "backward") {
        const g = e._zod.parse({ value: d.value, issues: [] }, { ...h, skipChecks: !0 });
        return g instanceof Promise ? g.then((y) => c(y, d, h)) : c(g, d, h);
      }
      const m = e._zod.parse(d, h);
      if (m instanceof Promise) {
        if (h.async === !1)
          throw new ti();
        return m.then((g) => l(g, a, h));
      }
      return l(m, a, h);
    };
  }
}, {
  // Wrappers extend this by installing a richer factory over it; reading it eagerly would defeat the laziness.
  get "~standard"() {
    return Hg(this, "~standard", ty(this));
  },
  set "~standard"(e) {
    ri(this, "~standard", e);
  }
}), Mh = (e) => e.success ? { value: e.data } : { issues: e.error?.issues };
function ty(e) {
  return {
    validate: (t) => {
      try {
        return Mh(Dx(e, t));
      } catch {
        return Nx(e, t).then(Mh);
      }
    },
    vendor: "zod",
    version: 1
  };
}
const Gc = /* @__PURE__ */ L("$ZodString", (e, t) => {
  Ue.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? hb(e._zod.bag), e._zod.parse = (i, o) => {
    if (t.coerce)
      try {
        i.value = String(i.value);
      } catch {
      }
    return typeof i.value == "string" || i.issues.push({
      expected: "string",
      code: "invalid_type",
      input: i.value,
      inst: e
    }), i;
  };
}), Ie = /* @__PURE__ */ L("$ZodStringFormat", (e, t) => {
  xa.init(e, t), Gc.init(e, t);
}), Rb = /* @__PURE__ */ L("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = qx), Ie.init(e, t);
}), Db = /* @__PURE__ */ L("$ZodUUID", (e, t) => {
  if (t.version) {
    const o = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (o === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = jh(o));
  } else
    t.pattern ?? (t.pattern = jh());
  Ie.init(e, t);
}), Nb = /* @__PURE__ */ L("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = eb), Ie.init(e, t);
}), ny = 1, ry = 2;
function Ib(e, t) {
  if (!t.normalize && t.protocol?.source === lb.source && !/^https?:\/\//i.test(e))
    return ny;
  try {
    return new URL(e);
  } catch {
    return ry;
  }
}
const Lb = /[\t\n\r]/g;
function $b(e) {
  return e.replace(Lb, "");
}
function Vb(e, t) {
  return t.lastIndex = 0, t.test(e.hostname);
}
function Fb(e, t) {
  return t.lastIndex = 0, t.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol);
}
const Bb = /* @__PURE__ */ L("$ZodURL", (e, t) => {
  Ie.init(e, t), e._zod.check = (i) => {
    try {
      const o = i.value.trim(), a = Ib(o, t);
      if (a === ny) {
        i.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid URL format",
          input: i.value,
          inst: e,
          continue: !t.abort
        });
        return;
      }
      if (a === ry) {
        i.issues.push({
          code: "invalid_format",
          format: "url",
          input: i.value,
          inst: e,
          continue: !t.abort
        });
        return;
      }
      t.hostname && !Vb(a, t.hostname) && i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: t.hostname.source,
        input: i.value,
        inst: e,
        continue: !t.abort
      }), t.protocol && !Fb(a, t.protocol) && i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: i.value,
        inst: e,
        continue: !t.abort
      }), i.value = t.normalize ? a.href : $b(o);
      return;
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "url",
        input: i.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), Ub = /* @__PURE__ */ L("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = nb()), Ie.init(e, t);
}), Zb = /* @__PURE__ */ L("$ZodNanoID", (e, t) => {
  if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1))
    throw new Error(`Invalid nanoid length: ${t.length}`);
  t.pattern ?? (t.pattern = t.length === void 0 ? Xx : Qx(t.length)), Ie.init(e, t);
}), Wb = /* @__PURE__ */ L("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = Wx), Ie.init(e, t);
}), Hb = /* @__PURE__ */ L("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = Hx), Ie.init(e, t);
}), Kb = /* @__PURE__ */ L("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = Kx), Ie.init(e, t);
}), Gb = /* @__PURE__ */ L("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = Gx), Ie.init(e, t);
}), Yb = /* @__PURE__ */ L("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = Yx), Ie.init(e, t);
}), Xb = /* @__PURE__ */ L("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = pb(t)), Ie.init(e, t), (t.local || t.precision === -1) && (e._zod.bag.laxFormat = !0, e._zod.onattach.push((i) => {
    i._zod.bag.laxFormat = !0;
  }));
}), Qb = /* @__PURE__ */ L("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = fb), Ie.init(e, t);
}), Jb = /* @__PURE__ */ L("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = db(t)), Ie.init(e, t);
}), qb = /* @__PURE__ */ L("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = Jx), Ie.init(e, t);
}), ek = /* @__PURE__ */ L("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = rb), Ie.init(e, t), e._zod.bag.format = "ipv4";
}), tk = /^[0-9a-fA-F:.]+$/;
function iy(e) {
  if (!tk.test(e))
    return !1;
  try {
    return new URL(`http://[${e}]`), !0;
  } catch {
    return !1;
  }
}
const nk = /* @__PURE__ */ L("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = ib), Ie.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (i) => {
    iy(i.value) || i.issues.push({
      code: "invalid_format",
      format: "ipv6",
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
}), rk = /* @__PURE__ */ L("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = ob), Ie.init(e, t);
});
function ik(e) {
  const t = e.split("/");
  if (t.length !== 2)
    return !1;
  const [i, o] = t;
  if (!o)
    return !1;
  const a = Number(o);
  return `${a}` !== o || a < 0 || a > 128 ? !1 : iy(i);
}
const ok = /* @__PURE__ */ L("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = sb), Ie.init(e, t), e._zod.check = (i) => {
    ik(i.value) || i.issues.push({
      code: "invalid_format",
      format: "cidrv6",
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function oy(e) {
  if (e === "")
    return !0;
  if (/\s/.test(e) || e.length % 4 !== 0)
    return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
const sk = /* @__PURE__ */ L("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = ab), Ie.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (i) => {
    oy(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64",
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function ak(e) {
  if (!Qg.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (o) => o === "-" ? "+" : "/"), i = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return oy(i);
}
const lk = /* @__PURE__ */ L("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = Qg), Ie.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (i) => {
    ak(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
}), uk = /* @__PURE__ */ L("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = ub), Ie.init(e, t);
});
function ck(e, t = null) {
  try {
    const i = e.split(".");
    if (i.length !== 3)
      return !1;
    const [o] = i;
    if (!o)
      return !1;
    const a = JSON.parse(atob(o));
    return !("typ" in a && a?.typ !== "JWT" || !a.alg || t && (!("alg" in a) || a.alg !== t));
  } catch {
    return !1;
  }
}
const fk = /* @__PURE__ */ L("$ZodJWT", (e, t) => {
  Ie.init(e, t), e._zod.check = (i) => {
    ck(i.value, t.alg) || i.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
}), sy = /* @__PURE__ */ L("$ZodNumber", (e, t) => {
  Ue.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? gb, e._zod.parse = (i, o) => {
    if (t.coerce)
      try {
        i.value = Number(i.value);
      } catch {
      }
    const a = i.value;
    if (typeof a == "number" && !Number.isNaN(a) && Number.isFinite(a))
      return i;
    const l = typeof a == "number" ? Number.isNaN(a) ? "NaN" : Number.isFinite(a) ? void 0 : String(a) : void 0;
    return i.issues.push({
      expected: "number",
      code: "invalid_type",
      input: a,
      inst: e,
      ...l ? { received: l } : {}
    }), i;
  };
}), dk = /* @__PURE__ */ L("$ZodNumberFormat", (e, t) => {
  bb.init(e, t), sy.init(e, t);
}), pk = /* @__PURE__ */ L("$ZodBoolean", (e, t) => {
  Ue.init(e, t), e._zod.pattern = yb, e._zod.parse = (i, o) => {
    if (t.coerce)
      try {
        i.value = !!i.value;
      } catch {
      }
    const a = i.value;
    return typeof a == "boolean" || i.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: a,
      inst: e
    }), i;
  };
}), hk = /* @__PURE__ */ L("$ZodUnknown", (e, t) => {
  Ue.init(e, t), e._zod.parse = (i) => i;
}), mk = /* @__PURE__ */ L("$ZodNever", (e, t) => {
  Ue.init(e, t), e._zod.parse = (i, o) => (i.issues.push({
    expected: "never",
    code: "invalid_type",
    input: i.value,
    inst: e
  }), i);
});
function Rh(e, t, i) {
  e.issues.length && t.issues.push(...Wg(i, e.issues)), t.value[i] = e.value;
}
const gk = /* @__PURE__ */ L("$ZodArray", (e, t) => {
  Ue.init(e, t);
  const i = fn.memoizer;
  i?.attach(e), e._zod.parse = (o, a) => {
    const l = o.value;
    if (!Array.isArray(l))
      return o.issues.push({
        expected: "array",
        code: "invalid_type",
        input: l,
        inst: e
      }), o;
    o.value = i ? i.alloc(e, o, Array(l.length), a) : Array(l.length);
    const c = [];
    for (let d = 0; d < l.length; d++) {
      const h = l[d], m = t.element._zod.run({
        value: h,
        issues: []
      }, a);
      m instanceof Promise ? c.push(m.then((g) => Rh(g, o, d))) : Rh(m, o, d);
    }
    return c.length ? Promise.all(c).then(() => o) : o;
  };
});
function ia(e, t, i, o, a, l) {
  const c = i in o, d = l === "optional";
  if (!(!c && d && a === "optional")) {
    if (e.issues.length) {
      if (a !== void 0 && d && !c)
        return;
      t.issues.push(...Wg(i, e.issues));
    }
    if (!c && a === void 0) {
      e.issues.length || t.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: void 0,
        path: [i]
      });
      return;
    }
    e.value === void 0 ? c && (t.value[i] = void 0) : t.value[i] = e.value;
  }
}
const yk = [];
function ay(e) {
  const t = Object.keys(e.shape), i = Object.getOwnPropertySymbols(e.shape), o = i.length ? i : yk, a = o.length ? [...t, ...o] : t;
  for (const c of a)
    if (!e.shape?.[c]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${String(c)}": expected a Zod schema`);
  const l = cx(e.shape);
  return {
    ...e,
    allKeys: a,
    symbolKeys: o,
    // string-only: handleCatchall matches it against `for...in`, which never yields a symbol
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(l)
  };
}
function ly(e, t, i, o, a, l) {
  const c = [], d = a.keySet, h = a.catchall._zod, m = h.def.type, g = h.optin, y = h.optout;
  for (const w in t) {
    if (d.has(w))
      continue;
    if (w === "__proto__") {
      m === "never" && c.push(w);
      continue;
    }
    if (m === "never") {
      c.push(w);
      continue;
    }
    const b = h.run({ value: t[w], issues: [] }, o);
    b instanceof Promise ? e.push(b.then((k) => ia(k, i, w, t, g, y))) : ia(b, i, w, t, g, y);
  }
  return c.length && i.issues.push({
    code: "unrecognized_keys",
    keys: c,
    input: t,
    inst: l,
    // Describes the shape of the input, not the validity of the parsed value, so it never aborts. The parse still fails; the schema's own checks just get to run first, and an enclosing intersection can reconcile the key against a sibling operand.
    continue: !0
  }), e.length ? Promise.all(e).then(() => i) : i;
}
const lc = /* @__PURE__ */ new WeakMap(), vk = /* @__PURE__ */ L("$ZodObject", (e, t) => {
  if (Ue.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
    const h = t.shape;
    lc.set(t, h), Object.defineProperty(t, "shape", {
      get: () => {
        const m = { ...h };
        return Object.defineProperty(t, "shape", {
          value: m
        }), lc.set(t, m), m;
      }
    });
  }
  const o = ga(() => ay(t));
  Ae(e, "propValues", (h) => {
    const m = h.def.shape, g = {};
    for (const y in m) {
      const w = m[y]._zod;
      if (w.values) {
        Object.prototype.hasOwnProperty.call(g, y) || Ct(g, y, /* @__PURE__ */ new Set());
        for (const b of w.values)
          g[y].add(b);
        w.optin !== void 0 && g[y].add(void 0);
      }
    }
    return g;
  });
  const a = uo, l = t.catchall;
  let c;
  const d = fn.memoizer;
  d?.attach(e), e._zod.parse = (h, m) => {
    c ?? (c = o.value);
    const g = h.value;
    if (!a(g))
      return h.issues.push({
        expected: "object",
        code: "invalid_type",
        input: g,
        inst: e
      }), h;
    h.value = d ? d.alloc(e, h, {}, m) : {};
    const y = [], w = c.shape;
    for (const b of c.allKeys) {
      if (b === "__proto__")
        continue;
      const k = w[b], T = k._zod.optin, S = k._zod.optout, R = k._zod.run({ value: g[b], issues: [] }, m);
      R instanceof Promise ? y.push(R.then((O) => ia(O, h, b, g, T, S))) : ia(R, h, b, g, T, S);
    }
    return l ? ly(y, g, h, m, o.value, e) : y.length ? Promise.all(y).then(() => h) : h;
  };
}), wk = /* @__PURE__ */ L("$ZodObjectJIT", (e, t) => {
  vk.init(e, t);
  const i = e._zod.parse, o = ga(() => ay(t)), a = fn.memoizer, l = (b) => {
    const k = o.value, T = k.symbolKeys, S = new jb(["payload", "ctx"], { shape: b, inst: e, memo: a, syms: T }), R = (K) => `shape[${K}]._zod.run({ value: input[${K}], issues: [] }, ctx)`, O = (K, Z) => `
          for (let i = 0; i < ${K}.issues.length; i++) {
            const iss = ${K}.issues[i];
            iss.path = iss.path ? [${Z}, ...iss.path] : [${Z}];
            payload.issues.push(iss);
          }`;
    S.write("const input = payload.value;");
    const I = /* @__PURE__ */ Object.create(null);
    let D = 0;
    for (const K of k.allKeys)
      I[K] = `key_${D++}`;
    S.write(a ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
    for (const K of k.allKeys) {
      if (K === "__proto__")
        continue;
      const Z = I[K], z = typeof K == "symbol" ? `syms[${T.indexOf(K)}]` : sx(K), W = `${z} in input`, G = b[K], le = G?._zod?.optin, ue = le !== void 0, se = G?._zod?.optout === "optional";
      if (S.write(`const ${Z} = ${R(z)};`), ue && se) {
        const ce = le === "optional" ? `${Z}_present` : `${Z}.value !== undefined || ${Z}_present`;
        S.write(`
        const ${Z}_present = ${W};
        if (!${Z}.issues.length || ${Z}_present) {
          if (${Z}.issues.length) {${O(Z, z)}
          }

          if (${ce}) {
            newResult[${z}] = ${Z}.value;
          }
        }

      `);
      } else ue ? S.write(`
        if (${Z}.issues.length) {${O(Z, z)}
        }
        
        if (${Z}.value === undefined) {
          if (${W}) {
            newResult[${z}] = undefined;
          }
        } else {
          newResult[${z}] = ${Z}.value;
        }

      `) : S.write(`
        const ${Z}_present = ${W};
        if (${Z}.issues.length) {${O(Z, z)}
        }
        if (!${Z}_present && !${Z}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${z}]
          });
        }

        if (${Z}_present) {
          newResult[${z}] = ${Z}.value;
        }

      `);
    }
    return S.write("payload.value = newResult;"), S.write("return payload;"), S.compile();
  };
  let c;
  const d = uo, h = !fn.jitless, g = h && lx.value, y = t.catchall;
  let w;
  e._zod.parse = (b, k) => {
    w ?? (w = o.value);
    const T = b.value;
    return d(T) ? h && g && k?.async === !1 && k.jitless !== !0 ? (c || (c = l(t.shape)), b = c(b, k), y ? ly([], T, b, k, w, e) : b) : i(b, k) : (b.issues.push({
      expected: "object",
      code: "invalid_type",
      input: T,
      inst: e
    }), b);
  };
});
function Dh(e, t, i, o) {
  for (const l of e)
    if (l.issues.length === 0)
      return t.value = l.value, t;
  const a = e.filter((l) => !Qr(l));
  return a.length === 1 ? (t.value = a[0].value, a[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: i,
    errors: e.map((l) => l.issues.map((c) => ai(c, o, Jn())))
  }), t);
}
const uy = /* @__PURE__ */ L("$ZodUnion", (e, t) => {
  Ue.init(e, t), Ae(e, "optin", (o) => o.def.options.some((a) => a._zod.optin === "defaulted") ? "defaulted" : o.def.options.some((a) => a._zod.optin !== void 0) ? "optional" : void 0), Ae(e, "optout", (o) => o.def.options.some((a) => a._zod.optout === "optional") ? "optional" : void 0), Ae(e, "values", (o) => {
    if (o.def.options.every((a) => a._zod.values))
      return new Set(o.def.options.flatMap((a) => Array.from(a._zod.values)));
  }), Ae(e, "pattern", (o) => {
    if (o.def.options.every((a) => a._zod.pattern)) {
      const a = o.def.options.map((l) => l._zod.pattern);
      return new RegExp(`^(${a.map((l) => Bc(l.source)).join("|")})$`);
    }
  });
  const i = t.options.length === 1 ? t.options[0]._zod.run : null;
  e._zod.parse = (o, a) => {
    if (i)
      return i(o, a);
    let l = !1;
    const c = [];
    for (const d of t.options) {
      const h = d._zod.run({
        value: o.value,
        issues: []
      }, a);
      if (h instanceof Promise)
        c.push(h), l = !0;
      else {
        if (h.issues.length === 0)
          return h;
        c.push(h);
      }
    }
    return l ? Promise.all(c).then((d) => Dh(d, o, e, a)) : Dh(c, o, e, a);
  };
}), xk = /* @__PURE__ */ L("$ZodDiscriminatedUnion", (e, t) => {
  t.inclusive = !1, uy.init(e, t);
  const i = e._zod.parse;
  Ae(e, "propValues", (a) => {
    const l = {};
    for (const c of a.def.options) {
      const d = c._zod.propValues;
      if (!d || Object.keys(d).length === 0)
        throw new Error(`Invalid discriminated union option at index "${a.def.options.indexOf(c)}"`);
      for (const [h, m] of Object.entries(d)) {
        Object.prototype.hasOwnProperty.call(l, h) || Ct(l, h, /* @__PURE__ */ new Set());
        for (const g of m)
          l[h].add(g);
      }
    }
    return l;
  }), t.options.forEach((a, l) => {
    const c = lc.get(a._zod.def);
    if (c && !Object.prototype.hasOwnProperty.call(c, t.discriminator))
      throw new Error(`Invalid discriminated union option at index "${l}"`);
  });
  const o = ga(() => {
    const a = t.options, l = /* @__PURE__ */ new Map();
    for (const c of a) {
      const d = c._zod.propValues?.[t.discriminator];
      if (!d || d.size === 0)
        throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(c)}"`);
      for (const h of d) {
        if (l.has(h))
          throw new Error(`Duplicate discriminator value "${String(h)}"`);
        l.set(h, c);
      }
    }
    return l;
  });
  e._zod.parse = (a, l) => {
    const c = a.value;
    if (!uo(c))
      return a.issues.push({
        code: "invalid_type",
        expected: "object",
        input: c,
        inst: e
      }), a;
    const d = o.value.get(c?.[t.discriminator]);
    return d ? d._zod.run(a, l) : t.unionFallback || l.direction === "backward" ? i(a, l) : (a.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      discriminator: t.discriminator,
      options: Array.from(o.value.keys()),
      input: c,
      path: [t.discriminator],
      inst: e
    }), a);
  };
}), bk = /* @__PURE__ */ L("$ZodIntersection", (e, t) => {
  Ue.init(e, t), e._zod.parse = (i, o) => {
    const a = i.value, l = t.left._zod.run({ value: a, issues: [] }, o), c = t.right._zod.run({ value: a, issues: [] }, o);
    return l instanceof Promise || c instanceof Promise ? Promise.all([l, c]).then(([h, m]) => Nh(i, h, m)) : Nh(i, l, c);
  };
});
function uc(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (co(e) && co(t)) {
    const i = Object.keys(t), o = Object.keys(e).filter((l) => i.indexOf(l) !== -1), a = { ...e, ...t };
    Object.prototype.hasOwnProperty.call(a, "__proto__") && delete a.__proto__;
    for (const l of o) {
      if (l === "__proto__")
        continue;
      const c = uc(e[l], t[l]);
      if (!c.valid)
        return {
          valid: !1,
          mergeErrorPath: [l, ...c.mergeErrorPath]
        };
      a[l] = c.data;
    }
    return { valid: !0, data: a };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const i = [];
    for (let o = 0; o < e.length; o++) {
      const a = e[o], l = t[o], c = uc(a, l);
      if (!c.valid)
        return {
          valid: !1,
          mergeErrorPath: [o, ...c.mergeErrorPath]
        };
      i.push(c.data);
    }
    return { valid: !0, data: i };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Nh(e, t, i) {
  const o = /* @__PURE__ */ new Map();
  let a;
  const l = /* @__PURE__ */ new Map(), c = (m, g) => {
    let y;
    if (m.code === "unrecognized_keys" && !m.path?.length)
      a ?? (a = m), y = m.keys;
    else if (m.code === "invalid_key" && m.origin === "record" && m.path?.length === 1) {
      const w = String(m.path[0]);
      l.has(w) || l.set(w, m), y = [w];
    } else
      return !1;
    for (const w of y)
      o.has(w) || o.set(w, {}), o.get(w)[g] = !0;
    return !0;
  };
  for (const m of t.issues)
    c(m, "l") || e.issues.push(m);
  for (const m of i.issues)
    c(m, "r") || e.issues.push(m);
  const d = [...o].filter(([, m]) => m.l && m.r).map(([m]) => m);
  if (d.length) {
    const m = a ? d.filter((g) => a.keys.includes(g)) : [];
    m.length && e.issues.push({ ...a, keys: m });
    for (const g of d)
      !m.includes(g) && l.has(g) && e.issues.push(l.get(g));
  }
  const h = uc(t.value, i.value);
  if (!h.valid) {
    if (Qr(e))
      return e;
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(h.mergeErrorPath)}`);
  }
  return e.value = h.data, e;
}
const kk = /* @__PURE__ */ L("$ZodEnum", (e, t) => {
  Ue.init(e, t);
  const i = Fg(t.entries), o = new Set(i);
  e._zod.values = o;
  const a = i.filter((l) => ux.has(typeof l));
  e._zod.pattern = new RegExp(a.length ? `^(${a.map((l) => ni(l.toString())).join("|")})$` : "^[^\\s\\S]$"), e._zod.parse = (l, c) => {
    const d = l.value;
    return o.has(d) || l.issues.push({
      code: "invalid_value",
      values: i,
      input: d,
      inst: e
    }), l;
  };
}), Sk = /* @__PURE__ */ L("$ZodLiteral", (e, t) => {
  Ue.init(e, t);
  const i = new Set(t.values);
  e._zod.values = i, e._zod.pattern = new RegExp(t.values.length ? `^(${t.values.map((o) => typeof o == "string" ? ni(o) : o ? ni(o.toString()) : String(o)).join("|")})$` : "^[^\\s\\S]$"), e._zod.parse = (o, a) => {
    const l = o.value;
    return i.has(l) || o.issues.push({
      code: "invalid_value",
      values: t.values,
      input: l,
      inst: e
    }), o;
  };
}), _k = /* @__PURE__ */ L("$ZodTransform", (e, t) => {
  Ue.init(e, t), e._zod.optin = "optional", fn.memoizer?.guard(e), e._zod.parse = (i, o) => {
    if (o.direction === "backward")
      throw new Kg(e.constructor.name);
    const a = t.transform(i.value, i);
    if (o.async)
      return (a instanceof Promise ? a : Promise.resolve(a)).then((c) => (i.value = c, i));
    if (a instanceof Promise)
      throw new ti();
    return i.value = a, i;
  };
});
function Ih(e, t) {
  return e.value = t.issues.length ? void 0 : t.value, e;
}
const cy = /* @__PURE__ */ L("$ZodOptional", (e, t) => {
  Ue.init(e, t), Ae(e, "optin", (i) => i.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), e._zod.optout = "optional", Ae(e, "values", (i) => {
    const o = i.def.innerType._zod.values;
    return o ? /* @__PURE__ */ new Set([...o, void 0]) : void 0;
  }), Ae(e, "pattern", (i) => {
    const o = i.def.innerType._zod.pattern;
    return o ? new RegExp(`^(${Bc(o.source)})?$`) : void 0;
  }), e._zod.parse = (i, o) => {
    if (i.value === void 0) {
      if (t.innerType._zod.optin !== "defaulted")
        return i;
      const a = t.innerType._zod.run({ value: i.value, issues: [] }, o);
      return a instanceof Promise ? a.then((l) => Ih(i, l)) : Ih(i, a);
    }
    return t.innerType._zod.run(i, o);
  };
}), Pk = /* @__PURE__ */ L("$ZodExactOptional", (e, t) => {
  cy.init(e, t), Ae(e, "values", (i) => i.def.innerType._zod.values), Ae(e, "pattern", (i) => i.def.innerType._zod.pattern), e._zod.parse = (i, o) => t.innerType._zod.run(i, o);
}), Ek = /* @__PURE__ */ L("$ZodNullable", (e, t) => {
  Ue.init(e, t), Ae(e, "optin", (i) => i.def.innerType._zod.optin), Ae(e, "optout", (i) => i.def.innerType._zod.optout), Ae(e, "pattern", (i) => {
    const o = i.def.innerType._zod.pattern;
    return o ? new RegExp(`^(${Bc(o.source)}|null)$`) : void 0;
  }), Ae(e, "values", (i) => i.def.innerType._zod.values ? /* @__PURE__ */ new Set([...i.def.innerType._zod.values, null]) : void 0), e._zod.parse = (i, o) => i.value === null ? i : t.innerType._zod.run(i, o);
}), Ck = /* @__PURE__ */ L("$ZodDefault", (e, t) => {
  Ue.init(e, t), e._zod.optin = "defaulted", Ae(e, "values", (i) => i.def.innerType._zod.values), e._zod.parse = (i, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(i, o);
    if (i.value === void 0)
      return i.value = t.defaultValue, i;
    const a = t.innerType._zod.run(i, o);
    return a instanceof Promise ? a.then((l) => Lh(l, t)) : Lh(a, t);
  };
});
function Lh(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const Tk = /* @__PURE__ */ L("$ZodPrefault", (e, t) => {
  Ue.init(e, t), e._zod.optin = "defaulted", Ae(e, "values", (i) => i.def.innerType._zod.values), e._zod.parse = (i, o) => (o.direction === "backward" || i.value === void 0 && (i.value = t.defaultValue), t.innerType._zod.run(i, o));
}), zk = /* @__PURE__ */ L("$ZodNonOptional", (e, t) => {
  Ue.init(e, t), Ae(e, "values", (i) => {
    const o = i.def.innerType._zod.values;
    return o ? new Set([...o].filter((a) => a !== void 0)) : void 0;
  }), e._zod.parse = (i, o) => {
    const a = t.innerType._zod.run(i, o);
    return a instanceof Promise ? a.then((l) => $h(l, e)) : $h(a, e);
  };
});
function $h(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
function Vh(e, t, i, o) {
  return t.issues.length ? (e.value = i.catchValue({
    ...t,
    value: e.value,
    error: {
      issues: t.issues.map((a) => ai(a, o, Jn()))
    },
    input: e.value
  }), e) : (e.value = t.value, t.memo && (e.memo = !0), e);
}
const Ak = /* @__PURE__ */ L("$ZodCatch", (e, t) => {
  Ue.init(e, t), Ae(e, "optin", (i) => i.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), Ae(e, "optout", (i) => i.def.innerType._zod.optout), Ae(e, "values", (i) => i.def.innerType._zod.values), e._zod.parse = (i, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(i, o);
    const a = t.innerType._zod.run({ value: i.value, issues: [] }, o);
    return a instanceof Promise ? a.then((l) => Vh(i, l, t, o)) : Vh(i, a, t, o);
  };
}), Ok = /* @__PURE__ */ L("$ZodPipe", (e, t) => {
  Ue.init(e, t), Ae(e, "values", (i) => i.def.in._zod.values), Ae(e, "optin", (i) => i.def.in._zod.optin), Ae(e, "optout", (i) => i.def.out._zod.optout), Ae(e, "propValues", (i) => i.def.in._zod.propValues), e._zod.parse = (i, o) => {
    if (o.direction === "backward") {
      const l = t.out._zod.run(i, o);
      return l instanceof Promise ? l.then((c) => Ns(c, t.in, o)) : Ns(l, t.in, o);
    }
    const a = t.in._zod.run(i, o);
    return a instanceof Promise ? a.then((l) => Ns(l, t.out, o)) : Ns(a, t.out, o);
  };
});
function Ns(e, t, i) {
  return e.issues.some((o) => o.code !== "unrecognized_keys") ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, i);
}
const jk = /* @__PURE__ */ L("$ZodReadonly", (e, t) => {
  Ue.init(e, t), Ae(e, "propValues", (i) => i.def.innerType._zod.propValues), Ae(e, "values", (i) => i.def.innerType._zod.values), Ae(e, "optin", (i) => i.def.innerType?._zod?.optin), Ae(e, "optout", (i) => i.def.innerType?._zod?.optout), e._zod.parse = (i, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(i, o);
    const a = t.innerType._zod.run(i, o);
    return a instanceof Promise ? a.then(Fh) : Fh(a);
  };
});
function Fh(e) {
  return e.memo || (e.value = Object.freeze(e.value)), e;
}
const Mk = /* @__PURE__ */ L("$ZodCustom", (e, t) => {
  Tt.init(e, t), Ue.init(e, t), e._zod.parse = (i, o) => i, e._zod.check = (i) => {
    const o = i.value, a = t.fn(o);
    if (a instanceof Promise)
      return a.then((l) => Bh(l, i, o, e));
    Bh(a, i, o, e);
  };
});
function Bh(e, t, i, o) {
  if (!e) {
    const a = {
      code: "custom",
      input: i,
      inst: o,
      // incorporates params.error into issue reporting
      path: [...o._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !o._zod.def.abort
      // params: inst._zod.def.params,
    };
    o._zod.def.params && (a.params = o._zod.def.params), t.issues.push(fo(a));
  }
}
class Rk extends Error {
  constructor() {
    super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
  }
}
const cc = "~memo", Uh = [];
function ju(e) {
  return e.map((t) => t.path ? { ...t, path: t.path.slice() } : { ...t });
}
const Zh = /* @__PURE__ */ new WeakMap();
function fy(e, t) {
  const i = Zh.get(e);
  if (i !== void 0)
    return i;
  if (t.has(e))
    return !0;
  t.add(e);
  let o = !1;
  const a = (d) => {
    !o && d?._zod && fy(d, t) && (o = !0);
  }, l = e._zod.def;
  switch (l.type) {
    case "object": {
      for (const d of Reflect.ownKeys(l.shape))
        a(l.shape[d]);
      a(l.catchall);
      break;
    }
    case "array":
      a(l.element);
      break;
    case "tuple":
      for (const d of l.items)
        a(d);
      a(l.rest);
      break;
    case "record":
    case "map":
      a(l.keyType), a(l.valueType);
      break;
    case "set":
      a(l.valueType);
      break;
    case "union":
      for (const d of l.options)
        a(d);
      break;
    case "intersection":
      a(l.left), a(l.right);
      break;
    case "optional":
    case "nullable":
    case "default":
    case "prefault":
    case "catch":
    case "readonly":
    case "nonoptional":
    case "promise":
    case "success":
      a(l.innerType);
      break;
    case "pipe":
      a(l.in), a(l.out);
      break;
    case "function":
      a(l.input), a(l.output);
      break;
    // reading `_zod.innerType` resolves the getter once and caches it
    case "lazy":
      a(e._zod.innerType);
      break;
    // a leaf by choice: `parts` are regex fragments, not data positions
    case "template_literal":
    // leaves
    case "string":
    case "number":
    case "int":
    case "boolean":
    case "bigint":
    case "symbol":
    case "undefined":
    case "null":
    case "void":
    case "never":
    case "any":
    case "unknown":
    case "date":
    case "nan":
    case "enum":
    case "literal":
    case "file":
    case "transform":
    case "custom":
      break;
    default:
      for (const d in l) {
        const h = Object.getOwnPropertyDescriptor(l, d);
        if (!h || h.get)
          continue;
        const m = h.value;
        if (!(!m || typeof m != "object")) {
          if (m._zod)
            a(m);
          else if (Array.isArray(m))
            for (const g of m)
              a(g);
        }
      }
  }
  return t.delete(e), Zh.set(e, o), o;
}
function Dk(e, t) {
  let i = e.buckets.get(t);
  return i || (i = /* @__PURE__ */ new Map(), e.buckets.set(t, i)), i;
}
let Is;
const Ls = [], Nk = {
  alloc(e, t, i) {
    const o = Is;
    if (!o)
      return i;
    Is = void 0;
    const a = { value: i, issues: null };
    return o.set(t.value, a), Ls.push(a), i;
  },
  guard(e) {
    var t;
    (t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
      const i = e._zod.parse, o = (a, l) => {
        if (l.direction !== "backward" && Lk(l, a.value))
          throw new Rk();
        return i(a, l);
      };
      e._zod.parse = o, e._zod.run === i && (e._zod.run = o);
    });
  },
  attach(e) {
    var t;
    let i, o, a;
    (t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
      const l = e._zod.parse, c = (d, h) => {
        if (i === void 0 && (i = fy(e, /* @__PURE__ */ new Set()), !i))
          return e._zod.parse = l, e._zod.run === c && (e._zod.run = l), l(d, h);
        const m = d.value;
        if (m === null || typeof m != "object")
          return l(d, h);
        let g = h[cc];
        g || (g = { buckets: /* @__PURE__ */ new Map(), backEdges: void 0 }, h[cc] = g);
        let y;
        o === h ? y = a : (y = Dk(g, e), o = h, a = y);
        const w = y.get(m);
        if (w)
          return d.value = w.value, w.issues ? w.issues.length && d.issues.push(...ju(w.issues)) : (d.memo = !0, g.backEdges ?? (g.backEdges = /* @__PURE__ */ new Set()), g.backEdges.add(w.value)), d;
        Is = y;
        const b = Ls.length, k = l(d, h);
        Is = void 0;
        const T = Ls.length > b ? Ls.pop() : void 0;
        return k instanceof Promise ? k.then((S) => (T && (T.issues = S.issues.length ? ju(S.issues) : Uh), S)) : (T && (T.issues = k.issues.length ? ju(k.issues) : Uh), k);
      };
      e._zod.parse = c, e._zod.run === l && (e._zod.run = c);
    });
  }
};
function Ik() {
  return Nk;
}
function Lk(e, t) {
  const i = e[cc]?.backEdges;
  return i !== void 0 && t !== null && typeof t == "object" && i.has(t);
}
const $k = () => {
  const e = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" }
  };
  function t(l) {
    return e[l] ?? null;
  }
  const i = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    mac: "MAC address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    credit_card: "credit card number",
    jwt: "JWT",
    template_literal: "input"
  }, o = {
    // Compatibility: "nan" -> "NaN" for display
    nan: "NaN"
    // All other type names omitted - they fall back to raw values via ?? operator
  };
  function a(l, c) {
    return l === "number" && typeof c == "number" && !Number.isFinite(c) ? String(c) : o[l] ?? l;
  }
  return (l) => {
    switch (l.code) {
      case "invalid_type": {
        const c = a(l.expected), d = xx(l.input), h = a(d, l.input);
        return `Invalid input: expected ${c}, received ${h}`;
      }
      case "invalid_value":
        return l.values.length === 1 ? `Invalid input: expected ${Zg(l.values[0])}` : `Invalid option: expected one of ${Eh(l.values, "|")}`;
      case "too_big": {
        const c = l.exact ? "exactly " : l.inclusive ? "<=" : "<", d = t(l.origin);
        return d ? `Too big: expected ${l.origin ?? "value"} to have ${c}${l.maximum.toString()} ${d.unit ?? "elements"}` : `Too big: expected ${l.origin ?? "value"} to be ${c}${l.maximum.toString()}`;
      }
      case "too_small": {
        const c = l.exact ? "exactly " : l.inclusive ? ">=" : ">", d = t(l.origin);
        return d ? `Too small: expected ${l.origin} to have ${c}${l.minimum.toString()} ${d.unit}` : `Too small: expected ${l.origin} to be ${c}${l.minimum.toString()}`;
      }
      case "invalid_format": {
        const c = l;
        return c.format === "starts_with" ? `Invalid string: must start with "${c.prefix}"` : c.format === "ends_with" ? `Invalid string: must end with "${c.suffix}"` : c.format === "includes" ? `Invalid string: must include "${c.includes}"` : c.format === "regex" ? `Invalid string: must match pattern ${c.pattern}` : `Invalid ${i[c.format] ?? l.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${l.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${l.keys.length > 1 ? "s" : ""}: ${Eh(l.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${l.origin}`;
      case "invalid_union":
        return l.options && Array.isArray(l.options) && l.options.length > 0 ? `Invalid discriminator value. Expected ${l.options.map((d) => `'${d}'`).join(" | ")}` : l.inclusive === !1 ? "Invalid input: more than one option matched" : "Invalid input";
      case "invalid_element":
        return `Invalid value in ${l.origin}`;
      default:
        return "Invalid input";
    }
  };
};
function Vk() {
  return {
    localeError: $k()
  };
}
var Wh;
class Fk {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...i) {
    const o = i[0];
    return this._map.set(t, o), o && typeof o == "object" && "id" in o && this._idmap.set(o.id, t), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const i = this._map.get(t);
    return i && typeof i == "object" && "id" in i && this._idmap.delete(i.id), this._map.delete(t), this;
  }
  get(t) {
    const i = t._zod.parent;
    if (i) {
      const o = { ...this.get(i) ?? {} };
      delete o.id;
      const a = { ...o, ...this._map.get(t) };
      return Object.keys(a).length ? a : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function Bk() {
  return new Fk();
}
(Wh = globalThis).__zod_globalRegistry ?? (Wh.__zod_globalRegistry = Bk());
const to = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function Uk(e, t) {
  return new e({
    type: "string",
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Zk(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Wk(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Hk(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Kk(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Gk(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Yk(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Xk(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Qk(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Jk(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function qk(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function eS(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function tS(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function nS(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function rS(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function iS(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function oS(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function sS(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function aS(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function lS(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function uS(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function cS(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function fS(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function dS(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function pS(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function hS(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function mS(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function gS(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function yS(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function vS(e, t) {
  return new e({
    type: "boolean",
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function wS(e) {
  return new e({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function xS(e, t) {
  return new e({
    type: "never",
    ...ae(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Hh(e, t) {
  return new qg({
    check: "less_than",
    ...ae(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Mu(e, t) {
  return new qg({
    check: "less_than",
    ...ae(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Kh(e, t) {
  return new ey({
    check: "greater_than",
    ...ae(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Ru(e, t) {
  return new ey({
    check: "greater_than",
    ...ae(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Gh(e, t) {
  return new xb({
    check: "multiple_of",
    ...ae(t),
    value: e
  });
}
// @__NO_SIDE_EFFECTS__
function dy(e, t) {
  return new kb({
    check: "max_length",
    ...ae(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function oa(e, t) {
  return new Sb({
    check: "min_length",
    ...ae(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function py(e, t) {
  return new _b({
    check: "length_equals",
    ...ae(t),
    length: e
  });
}
// @__NO_SIDE_EFFECTS__
function bS(e, t) {
  return new Pb({
    check: "string_format",
    format: "regex",
    ...ae(t),
    pattern: e
  });
}
// @__NO_SIDE_EFFECTS__
function kS(e) {
  return new Eb({
    check: "string_format",
    format: "lowercase",
    ...ae(e)
  });
}
// @__NO_SIDE_EFFECTS__
function SS(e) {
  return new Cb({
    check: "string_format",
    format: "uppercase",
    ...ae(e)
  });
}
// @__NO_SIDE_EFFECTS__
function _S(e, t) {
  return new Tb({
    check: "string_format",
    format: "includes",
    ...ae(t),
    includes: e
  });
}
// @__NO_SIDE_EFFECTS__
function PS(e, t) {
  return new zb({
    check: "string_format",
    format: "starts_with",
    ...ae(t),
    prefix: e
  });
}
// @__NO_SIDE_EFFECTS__
function ES(e, t) {
  return new Ab({
    check: "string_format",
    format: "ends_with",
    ...ae(t),
    suffix: e
  });
}
// @__NO_SIDE_EFFECTS__
function li(e) {
  return new Ob({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function CS(e) {
  return /* @__PURE__ */ li((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function TS() {
  return /* @__PURE__ */ li((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function zS() {
  return /* @__PURE__ */ li((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function AS() {
  return /* @__PURE__ */ li((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function OS() {
  return /* @__PURE__ */ li((e) => ax(e));
}
// @__NO_SIDE_EFFECTS__
function jS(e, t, i) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function MS(e, t, i) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function RS(e, t) {
  const i = /* @__PURE__ */ DS((o) => (o.addIssue = (a) => {
    if (typeof a == "string")
      o.issues.push(fo(a, o.value, i._zod.def));
    else {
      const l = a;
      l.fatal && (l.continue = !1), l.code ?? (l.code = "custom"), "input" in l || (l.input = o.value), l.inst ?? (l.inst = i), l.continue ?? (l.continue = !i._zod.def.abort), o.issues.push(fo(l));
    }
  }, e(o.value, o)), t);
  return i;
}
// @__NO_SIDE_EFFECTS__
function DS(e, t) {
  const i = new Tt({
    check: "custom",
    ...ae(t)
  });
  return i._zod.check = e, i;
}
function ro(e, ...t) {
  for (const i of t)
    for (const o of Reflect.ownKeys(i))
      Object.prototype.propertyIsEnumerable.call(i, o) && Ct(e, o, i[o]);
  return e;
}
function hy(e) {
  let t = e?.target ?? "draft-2020-12";
  return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
    processors: e.processors ?? {},
    metadataRegistry: e?.metadata ?? to,
    target: t,
    unrepresentable: e?.unrepresentable ?? "throw",
    override: e?.override ?? (() => {
    }),
    io: e?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    sharedDefsExtractedFor: void 0,
    sharedEmitDoneFor: void 0,
    cycles: e?.cycles ?? "ref",
    reused: e?.reused ?? "inline",
    intersections: [],
    deferred: [],
    external: e?.external ?? void 0
  };
}
function Gn(e, t, i, o, a) {
  const l = typeof t.unrepresentable == "function" ? t.unrepresentable({ zodSchema: e, path: o.path, message: a }) : t.unrepresentable;
  if (l === "any")
    return !1;
  if (l === void 0 || l === "throw")
    throw new Error(a);
  return Object.assign(i, l), !0;
}
function lt(e, t, i = { path: [], schemaPath: [] }) {
  var o;
  const a = e._zod.def, l = t.seen.get(e);
  if (l)
    return l.count++, i.schemaPath.includes(e) && (l.cycle = i.path), l.schema;
  const c = { schema: {}, count: 1, cycle: void 0, path: i.path };
  t.seen.set(e, c), t.sharedDefsExtractedFor = void 0, t.sharedEmitDoneFor = void 0;
  const d = e._zod.toJSONSchema?.();
  if (d)
    c.schema = d;
  else {
    const g = {
      ...i,
      schemaPath: [...i.schemaPath, e],
      path: i.path
    };
    if (e._zod.processJSONSchema)
      e._zod.processJSONSchema(t, c.schema, g);
    else {
      const w = c.schema, b = t.processors[a.type];
      if (!b)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${a.type}`);
      b(e, t, w, g);
    }
    const y = e._zod.parent;
    y && (c.ref || (c.ref = y), lt(y, t, g), t.seen.get(y).isParent = !0);
  }
  const h = t.metadataRegistry.get(e);
  return h && ro(c.schema, h), t.io === "input" && yt(e) && (delete c.schema.examples, delete c.schema.default), t.io === "input" && "_prefault" in c.schema && ((o = c.schema).default ?? (o.default = c.schema._prefault)), delete c.schema._prefault, t.seen.get(e).schema;
}
function Yh(e) {
  return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function my(e, t) {
  const i = e.seen.get(t);
  if (!i)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  if (e.external && e.sharedDefsExtractedFor === e.external)
    return;
  const o = /* @__PURE__ */ new Map();
  for (const c of e.seen.entries()) {
    const d = e.metadataRegistry.get(c[0])?.id;
    if (d) {
      const h = o.get(d);
      if (h && h !== c[0])
        throw new Error(`Duplicate schema id "${d}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      o.set(d, c[0]);
    }
  }
  const a = (c) => {
    const d = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      const y = e.external.registry.get(c[0])?.id, w = e.external.uri ?? ((k) => k);
      if (y)
        return { ref: w(y) };
      const b = c[1].defId ?? c[1].schema.id ?? `schema${e.counter++}`;
      return c[1].defId = b, { defId: b, ref: `${w("__shared")}#/${d}/${Yh(b)}` };
    }
    const h = "#", m = `${h}/${d}/`;
    if (c[1] === i && !c[1].schema.id)
      return { ref: h };
    const g = c[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: g, ref: m + Yh(g) };
  }, l = (c) => {
    if (c[1].schema.$ref)
      return;
    const d = c[1], { ref: h, defId: m } = a(c);
    d.def = { ...d.schema }, m && (d.defId = m);
    const g = d.schema;
    for (const y in g)
      delete g[y];
    g.$ref = h;
  };
  if (e.cycles === "throw")
    for (const c of e.seen.entries()) {
      const d = c[1];
      if (d.cycle)
        throw new Error(`Cycle detected: #/${d.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const c of e.seen.entries()) {
    const d = c[1];
    if (t === c[0]) {
      l(c);
      continue;
    }
    if (e.external) {
      const m = e.external.registry.get(c[0])?.id;
      if (t !== c[0] && m) {
        l(c);
        continue;
      }
    }
    if (e.metadataRegistry.get(c[0])?.id) {
      l(c);
      continue;
    }
    if (d.cycle) {
      l(c);
      continue;
    }
    if (d.count > 1 && e.reused === "ref") {
      l(c);
      continue;
    }
  }
  e.external && (e.sharedDefsExtractedFor = e.external);
}
function gy(e) {
  const t = e.anyOf;
  if (!Array.isArray(t) || t.length === 0 || e.type !== void 0)
    return;
  const i = [];
  for (const o of t) {
    if (!o || typeof o != "object")
      return;
    gy(o);
    const a = Object.keys(o);
    if (a.length !== 1 || a[0] !== "type")
      return;
    const l = o.type;
    for (const c of Array.isArray(l) ? l : [l]) {
      if (typeof c != "string")
        return;
      i.includes(c) || i.push(c);
    }
  }
  delete e.anyOf, e.type = i.length === 1 ? i[0] : i;
}
const yy = /* @__PURE__ */ new Set(["type", "properties", "required", "additionalProperties"]), Xh = ["oneOf", "anyOf"];
function Qh(e) {
  const t = e.additionalProperties;
  return t === void 0 || t === !1 || typeof t != "object" || t === null ? null : Object.keys(t).length ? t : null;
}
function fc(e) {
  const t = [];
  for (const l of e) {
    if (typeof l != "object" || l.type !== "object")
      return null;
    for (const c in l)
      if (!yy.has(c))
        return null;
    t.push(l);
  }
  const i = {}, o = /* @__PURE__ */ new Set();
  for (const l of t) {
    for (const c in l.properties) {
      if (Object.prototype.hasOwnProperty.call(i, c))
        continue;
      const d = [];
      for (const m of t) {
        const g = m.properties?.[c] ?? Qh(m);
        g != null && (d.some((y) => JSON.stringify(y) === JSON.stringify(g)) || d.push(g));
      }
      const h = d.length === 1 ? d[0] : fc(d) ?? { allOf: d };
      Ct(i, c, h);
    }
    for (const c of l.required ?? [])
      o.add(c);
  }
  const a = { type: "object", properties: i };
  if (o.size && (a.required = [...o]), t.every((l) => l.additionalProperties === !1))
    a.additionalProperties = !1;
  else {
    const l = [];
    for (const c of t) {
      const d = Qh(c);
      d && !l.some((h) => JSON.stringify(h) === JSON.stringify(d)) && l.push(d);
    }
    l.length === 1 ? a.additionalProperties = l[0] : l.length > 1 && (a.additionalProperties = { allOf: l });
  }
  return a;
}
function NS(e) {
  const t = e.allOf;
  if (!Array.isArray(t) || t.length < 2)
    return;
  for (const a of yy)
    if (a in e)
      return;
  const i = t.filter((a) => Xh.some((l) => Array.isArray(a[l])));
  let o = null;
  if (!i.length)
    o = fc(t);
  else {
    const a = i[0], l = Xh.find((h) => Array.isArray(a[h]));
    if (Object.keys(a).length !== 1)
      return;
    const c = t.filter((h) => h !== a), d = a[l].map((h) => fc([...c, h]));
    if (d.some((h) => !h))
      return;
    o = { [l]: d };
  }
  o && (delete e.allOf, ro(e, o));
}
function vy(e, t) {
  const i = e.seen.get(t);
  if (!i)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const o = (d) => {
    const h = e.seen.get(d);
    if (h.ref === null)
      return;
    const m = h.def ?? h.schema, g = { ...m }, y = h.ref;
    if (h.ref = null, y) {
      o(y);
      const b = e.seen.get(y), k = b.schema;
      if (k.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (m.allOf = m.allOf ?? [], m.allOf.push(k)) : ro(m, k), ro(m, g), d._zod.parent === y)
        for (const S in m)
          S === "$ref" || S === "allOf" || S in g || delete m[S];
      if (k.$ref && b.def)
        for (const S in m)
          S === "$ref" || S === "allOf" || S in b.def && JSON.stringify(m[S]) === JSON.stringify(b.def[S]) && delete m[S];
    }
    const w = d._zod.parent;
    if (w && w !== y) {
      o(w);
      const b = e.seen.get(w);
      if (b?.schema.$ref && (m.$ref = b.schema.$ref, b.def))
        for (const k in m)
          k === "$ref" || k === "allOf" || k in b.def && JSON.stringify(m[k]) === JSON.stringify(b.def[k]) && delete m[k];
    }
    e.override({
      zodSchema: d,
      jsonSchema: m,
      path: h.path ?? []
    });
  };
  if (!e.external || e.sharedEmitDoneFor !== e.external) {
    for (const d of [...e.seen.entries()].reverse())
      o(d[0]);
    if (e.target !== "openapi-3.0")
      for (const d of e.seen.entries())
        gy(d[1].def ?? d[1].schema);
    for (const d of e.deferred)
      d();
    if (e.intersections.length) {
      const d = /* @__PURE__ */ new Map();
      for (const h of e.seen.values())
        for (const m of [h.schema, h.def]) {
          const g = m?.allOf;
          if (!Array.isArray(g))
            continue;
          const y = d.get(g);
          y ? y.push(m) : d.set(g, [m]);
        }
      for (const h of e.intersections)
        for (const m of d.get(h) ?? [])
          NS(m);
    }
  }
  const a = {};
  if (e.target === "draft-2020-12" ? a.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? a.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? a.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
    const d = e.external.registry.get(t)?.id;
    if (!d)
      throw new Error("Schema is missing an `id` property");
    a.$id = e.external.uri(d);
  }
  ro(a, i.defId ? i.schema : i.def ?? i.schema);
  const l = e.metadataRegistry.get(t)?.id;
  l !== void 0 && a.id === l && delete a.id;
  const c = e.external?.defs ?? {};
  if (!e.external || e.sharedEmitDoneFor !== e.external)
    for (const d of e.seen.entries()) {
      const h = d[1];
      h.def && h.defId && (h.def.id === h.defId && delete h.def.id, Ct(c, h.defId, h.def));
    }
  e.external && (e.sharedEmitDoneFor = e.external), e.external || Object.keys(c).length > 0 && (e.target === "draft-2020-12" ? a.$defs = c : a.definitions = c);
  try {
    const d = JSON.parse(JSON.stringify(a));
    return Object.defineProperty(d, "~standard", {
      value: {
        ...t["~standard"],
        jsonSchema: {
          input: sa(t, "input", e.processors),
          output: sa(t, "output", e.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), d;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function yt(e, t) {
  const i = t ?? { seen: /* @__PURE__ */ new Set() };
  if (i.seen.has(e))
    return !1;
  i.seen.add(e);
  const o = e._zod.def;
  if (o.type === "transform")
    return !0;
  if (o.type === "array")
    return yt(o.element, i);
  if (o.type === "set")
    return yt(o.valueType, i);
  if (o.type === "lazy")
    return yt(o.getter(), i);
  if (o.type === "promise" || o.type === "optional" || o.type === "nonoptional" || o.type === "nullable" || o.type === "readonly" || o.type === "default" || o.type === "prefault" || o.type === "catch")
    return yt(o.innerType, i);
  if (o.type === "intersection")
    return yt(o.left, i) || yt(o.right, i);
  if (o.type === "record" || o.type === "map")
    return yt(o.keyType, i) || yt(o.valueType, i);
  if (o.type === "pipe")
    return e._zod.traits.has("$ZodCodec") ? !0 : yt(o.in, i) || yt(o.out, i);
  if (o.type === "object") {
    for (const a in o.shape)
      if (yt(o.shape[a], i))
        return !0;
    return !1;
  }
  if (o.type === "union") {
    for (const a of o.options)
      if (yt(a, i))
        return !0;
    return !1;
  }
  if (o.type === "tuple") {
    for (const a of o.items)
      if (yt(a, i))
        return !0;
    return !!(o.rest && yt(o.rest, i));
  }
  return !1;
}
const IS = (e, t = {}) => (i) => {
  const o = hy({ ...i, processors: t });
  return lt(e, o), my(o, e), vy(o, e);
}, sa = (e, t, i = {}) => (o) => {
  const { libraryOptions: a, target: l } = o ?? {}, c = hy({ ...a ?? {}, target: l, io: t, processors: i });
  return lt(e, c), my(c, e), vy(c, e);
}, LS = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, $S = (e, t, i, o) => {
  const a = i;
  a.type = "string";
  const { minimum: l, maximum: c, format: d, patterns: h, contentEncoding: m, laxFormat: g } = e._zod.bag;
  if (typeof l == "number" && (a.minLength = l), typeof c == "number" && (a.maxLength = c), d && (a.format = LS[d] ?? d, a.format === "" && delete a.format, (d === "time" || g) && delete a.format), m && (a.contentEncoding = m), h && h.size > 0) {
    const y = [...h];
    y.length === 1 ? a.pattern = y[0].source : y.length > 1 && (a.allOf = [
      ...y.map((w) => ({
        ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: w.source
      }))
    ]);
  }
}, VS = (e, t, i, o) => {
  const a = i, { minimum: l, maximum: c, format: d, multipleOf: h, exclusiveMaximum: m, exclusiveMinimum: g } = e._zod.bag;
  typeof d == "string" && d.includes("int") ? a.type = "integer" : a.type = "number";
  const y = typeof g == "number" && g >= (l ?? Number.NEGATIVE_INFINITY), w = typeof m == "number" && m <= (c ?? Number.POSITIVE_INFINITY), b = t.target === "draft-04" || t.target === "openapi-3.0";
  y ? b ? (a.minimum = g, a.exclusiveMinimum = !0) : a.exclusiveMinimum = g : typeof l == "number" && (a.minimum = l), w ? b ? (a.maximum = m, a.exclusiveMaximum = !0) : a.exclusiveMaximum = m : typeof c == "number" && (a.maximum = c), typeof h == "number" && (Number.isFinite(h) && h !== 0 ? a.multipleOf = Math.abs(h) : Gn(e, t, a, o, `A multipleOf divisor of ${h} cannot be represented in JSON Schema`));
}, FS = (e, t, i, o) => {
  i.type = "boolean";
}, BS = (e, t, i, o) => {
  i.not = {};
}, US = (e, t, i, o) => {
}, ZS = (e, t, i, o) => {
  const a = e._zod.def, l = Fg(a.entries);
  if (l.length === 0) {
    i.not = {};
    return;
  }
  l.every((c) => typeof c == "number") && (i.type = "number"), l.every((c) => typeof c == "string") && (i.type = "string"), i.enum = l;
}, WS = (e, t, i, o) => {
  const a = e._zod.def;
  if (a.values.length === 0) {
    i.not = {};
    return;
  }
  const l = [];
  for (const c of a.values)
    if (c === void 0) {
      if (Gn(e, t, i, o, "Literal `undefined` cannot be represented in JSON Schema"))
        return;
    } else if (typeof c == "bigint") {
      if (Gn(e, t, i, o, "BigInt literals cannot be represented in JSON Schema"))
        return;
      l.push(Number(c));
    } else
      l.push(c);
  if (l.length !== 0) if (l.length === 1) {
    const c = l[0];
    i.type = c === null ? "null" : typeof c, t.target === "draft-04" || t.target === "openapi-3.0" ? i.enum = [c] : i.const = c;
  } else
    l.every((c) => typeof c == "number") && (i.type = "number"), l.every((c) => typeof c == "string") && (i.type = "string"), l.every((c) => typeof c == "boolean") && (i.type = "boolean"), l.every((c) => c === null) && (i.type = "null"), i.enum = l;
}, HS = (e, t, i, o) => {
  Gn(e, t, i, o, "Custom types cannot be represented in JSON Schema");
}, KS = (e, t, i, o) => {
  Gn(e, t, i, o, "Transforms cannot be represented in JSON Schema");
}, GS = (e, t, i, o) => {
  const a = i, l = e._zod.def, { minimum: c, maximum: d } = e._zod.bag;
  typeof c == "number" && (a.minItems = c), typeof d == "number" && (a.maxItems = d), a.type = "array", a.items = lt(l.element, t, {
    ...o,
    path: [...o.path, "items"]
  });
};
function dc(e) {
  const t = e._zod.def;
  return t.type === "pipe" && t.in._zod.traits.has("$ZodTransform") ? dc(t.out) : t.type === "catch" ? dc(t.innerType) : e._zod.optin;
}
const YS = (e, t, i, o) => {
  const a = i, l = e._zod.def, c = l.shape;
  if (Object.getOwnPropertySymbols(c).length && Gn(e, t, a, o, "Symbol keys cannot be represented in JSON Schema"))
    return;
  a.type = "object", a.properties = {};
  for (const g in c)
    Ct(a.properties, g, lt(c[g], t, {
      ...o,
      path: [...o.path, "properties", g]
    }));
  const h = new Set(Object.keys(c)), m = new Set([...h].filter((g) => {
    const y = l.shape[g];
    return t.io === "input" ? dc(y) === void 0 : y._zod.optout === void 0;
  }));
  m.size > 0 && (a.required = Array.from(m)), l.catchall?._zod.def.type === "never" ? a.additionalProperties = !1 : l.catchall ? l.catchall && (a.additionalProperties = lt(l.catchall, t, {
    ...o,
    path: [...o.path, "additionalProperties"]
  })) : t.io === "output" && (a.additionalProperties = !1);
}, XS = (e, t, i, o) => {
  const a = e._zod.def, l = a.inclusive === !1, c = a.options.map((d, h) => lt(d, t, {
    ...o,
    path: [...o.path, l ? "oneOf" : "anyOf", h]
  }));
  l ? i.oneOf = c : i.anyOf = c;
}, QS = (e, t, i, o) => {
  const a = e._zod.def, l = lt(a.left, t, {
    ...o,
    path: [...o.path, "allOf", 0]
  }), c = lt(a.right, t, {
    ...o,
    path: [...o.path, "allOf", 1]
  }), d = (m) => "allOf" in m && Object.keys(m).length === 1, h = [
    ...d(l) ? l.allOf : [l],
    ...d(c) ? c.allOf : [c]
  ];
  i.allOf = h, t.intersections.push(h);
}, JS = (e, t, i, o) => {
  const a = e._zod.def, l = lt(a.innerType, t, o), c = t.seen.get(e);
  t.target === "openapi-3.0" ? (c.ref = a.innerType, i.nullable = !0) : i.anyOf = [l, { type: "null" }];
}, qS = (e, t, i, o) => {
  const a = e._zod.def;
  lt(a.innerType, t, o);
  const l = t.seen.get(e);
  l.ref = a.innerType;
}, Yc = /* @__PURE__ */ Symbol();
function wy(e, t, i, o, a) {
  let l = !1;
  const c = JSON.stringify(e, (d, h) => typeof h != "bigint" ? h : (l = !0, null));
  return l ? (Gn(t, i, o, a, "BigInt defaults cannot be represented in JSON Schema"), Yc) : JSON.parse(c);
}
const e_ = (e, t, i, o) => {
  const a = e._zod.def;
  lt(a.innerType, t, o);
  const l = t.seen.get(e);
  l.ref = a.innerType;
  const c = wy(a.defaultValue, e, t, i, o);
  c !== Yc && (i.default = c);
}, t_ = (e, t, i, o) => {
  const a = e._zod.def;
  lt(a.innerType, t, o);
  const l = t.seen.get(e);
  if (l.ref = a.innerType, t.io !== "input")
    return;
  const c = wy(a.defaultValue, e, t, i, o);
  c !== Yc && (i._prefault = c);
}, n_ = (e, t, i, o) => {
  const a = e._zod.def;
  lt(a.innerType, t, o);
  const l = t.seen.get(e);
  l.ref = a.innerType;
  let c;
  try {
    c = a.catchValue(void 0);
  } catch {
    Gn(e, t, i, o, "Dynamic catch values are not supported in JSON Schema");
    return;
  }
  i.default = c;
}, r_ = (e, t, i, o) => {
  const a = e._zod.def, l = a.in._zod.traits.has("$ZodTransform"), c = t.io === "input" ? l ? a.out : a.in : a.out;
  lt(c, t, o);
  const d = t.seen.get(e);
  d.ref = c;
}, i_ = (e, t, i, o) => {
  const a = e._zod.def;
  lt(a.innerType, t, o);
  const l = t.seen.get(e);
  l.ref = a.innerType, i.readOnly = !0;
}, xy = (e, t, i, o) => {
  const a = e._zod.def;
  lt(a.innerType, t, o);
  const l = t.seen.get(e);
  l.ref = a.innerType;
}, Jh = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
function $s(e, t, i) {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    get() {
      const o = i(this);
      return Object.defineProperty(this, t, { value: o, configurable: !0, writable: !0 }), o;
    },
    set(o) {
      Object.defineProperty(this, t, { value: o, configurable: !0, writable: !0 });
    }
  });
}
const o_ = (e, t) => {
  Yg.init(e, t), e.name = "ZodError";
  const i = Object.getPrototypeOf(e);
  Jh.has(i) || (Jh.add(i), $s(i, "format", (o) => (a) => Rx(o, a)), $s(i, "flatten", (o) => (a) => Mx(o, a)), $s(i, "addIssue", (o) => (a) => {
    o.issues.push(a), o.message = JSON.stringify(o.issues, sc, 2);
  }), $s(i, "addIssues", (o) => (a) => {
    o.issues.push(...a), o.message = JSON.stringify(o.issues, sc, 2);
  }), Object.defineProperty(i, "isEmpty", {
    configurable: !0,
    enumerable: !1,
    get() {
      return this.issues.length === 0;
    }
  }));
}, Ut = /* @__PURE__ */ L("ZodError", o_, void 0, {
  Parent: Error
}), s_ = /* @__PURE__ */ Wc(Ut), a_ = /* @__PURE__ */ Hc(Ut), l_ = /* @__PURE__ */ va(Ut), u_ = /* @__PURE__ */ wa(Ut), c_ = /* @__PURE__ */ Ix(Ut), f_ = /* @__PURE__ */ Lx(Ut), d_ = /* @__PURE__ */ $x(Ut), p_ = /* @__PURE__ */ Vx(Ut), h_ = /* @__PURE__ */ Fx(Ut), m_ = /* @__PURE__ */ Bx(Ut), g_ = /* @__PURE__ */ Ux(Ut), y_ = /* @__PURE__ */ Zx(Ut);
function v_() {
  fn.localeError || Jn(Vk());
}
function Xc() {
  fn.memoizer || Jn({ memoizer: Ik() });
}
const Ze = /* @__PURE__ */ L("ZodType", (e, t) => (v_(), Ue.init(e, t), e.def = t, e.type = t.type, e), {
  check(...e) {
    const t = this.def;
    return this.clone(Xn(t, {
      checks: [
        ...t.checks ?? [],
        ...e.map((i) => typeof i == "function" ? { _zod: { check: i, def: { check: "custom" }, onattach: [] } } : i)
      ]
    }), { parent: !0 });
  },
  with(...e) {
    return this.check(...e);
  },
  clone(e, t) {
    return Qn(this, e, t);
  },
  brand() {
    return this;
  },
  register(e, t) {
    return e.add(this, t), this;
  },
  refine(e, t) {
    return this.check(m2(e, t));
  },
  superRefine(e, t) {
    return this.check(g2(e, t));
  },
  overwrite(e) {
    return this.check(/* @__PURE__ */ li(e));
  },
  optional() {
    return tm(this);
  },
  exactOptional() {
    return n2(this);
  },
  nullable() {
    return nm(this);
  },
  nullish() {
    return tm(nm(this));
  },
  nonoptional(e) {
    return l2(this, e);
  },
  array() {
    return po(this);
  },
  or(e) {
    return Y_([this, e]);
  },
  and(e) {
    return J_(this, e);
  },
  transform(e) {
    return rm(this, t2(e));
  },
  default(e) {
    return o2(this, e);
  },
  prefault(e) {
    return a2(this, e);
  },
  catch(e) {
    return c2(this, e);
  },
  pipe(e) {
    return rm(this, e);
  },
  readonly() {
    return p2(this);
  },
  describe(e) {
    const t = this.clone();
    return to.add(t, { description: e }), t;
  },
  meta(...e) {
    if (e.length === 0)
      return to.get(this);
    const t = this.clone();
    return to.add(t, e[0]), t;
  },
  isOptional() {
    return this.safeParse(void 0).success;
  },
  isNullable() {
    return this.safeParse(null).success;
  },
  apply(e, ...t) {
    return t.length === 0 ? e(this) : e(this, ...t);
  },
  // Overrides core's `~standard` to add `jsonSchema`. Must stay a prototype entry: redefining it per instance demotes instances to dictionary mode.
  get "~standard"() {
    return Hg(this, "~standard", {
      ...ty(this),
      jsonSchema: {
        input: sa(this, "input"),
        output: sa(this, "output")
      }
    });
  },
  set "~standard"(e) {
    ri(this, "~standard", e);
  },
  parse: function e(t, i) {
    return s_(this, t, i, { callee: e });
  },
  parseAsync: async function e(t, i) {
    return await a_(this, t, i, { callee: e });
  },
  safeParse(e, t) {
    return l_(this, e, t);
  },
  async safeParseAsync(e, t) {
    return u_(this, e, t);
  },
  // `spa` is an alias: same function object as `safeParseAsync`, as before.
  get spa() {
    return this?.safeParseAsync;
  },
  set spa(e) {
    ri(this, "spa", e);
  },
  encode: function e(t, i) {
    return c_(this, t, i, { callee: e });
  },
  decode: function e(t, i) {
    return f_(this, t, i, { callee: e });
  },
  encodeAsync: async function e(t, i) {
    return await d_(this, t, i, { callee: e });
  },
  decodeAsync: async function e(t, i) {
    return await p_(this, t, i, { callee: e });
  },
  safeEncode(e, t) {
    return h_(this, e, t);
  },
  safeDecode(e, t) {
    return m_(this, e, t);
  },
  async safeEncodeAsync(e, t) {
    return g_(this, e, t);
  },
  async safeDecodeAsync(e, t) {
    return y_(this, e, t);
  },
  toJSONSchema(e) {
    return IS(this, {})(e);
  },
  // Reads through to the registry on every access, so it must not cache.
  get description() {
    return to.get(this)?.description;
  },
  // No setter: `schema._def = x` throws, as it did when `_def` was a non-writable own property.
  get _def() {
    return this._zod.def;
  }
}), by = /* @__PURE__ */ L("_ZodString", (e, t) => {
  Gc.init(e, t), Ze.init(e, t), e._zod.processJSONSchema = (o, a, l) => $S(e, o, a);
  const i = e._zod.bag;
  e.format = i.format ?? null, e.minLength = i.minimum ?? null, e.maxLength = i.maximum ?? null;
}, {
  regex(...e) {
    return this.check(/* @__PURE__ */ bS(...e));
  },
  includes(...e) {
    return this.check(/* @__PURE__ */ _S(...e));
  },
  startsWith(...e) {
    return this.check(/* @__PURE__ */ PS(...e));
  },
  endsWith(...e) {
    return this.check(/* @__PURE__ */ ES(...e));
  },
  min(...e) {
    return this.check(/* @__PURE__ */ oa(...e));
  },
  max(...e) {
    return this.check(/* @__PURE__ */ dy(...e));
  },
  length(...e) {
    return this.check(/* @__PURE__ */ py(...e));
  },
  nonempty(...e) {
    return this.check(/* @__PURE__ */ oa(1, ...e));
  },
  lowercase(e) {
    return this.check(/* @__PURE__ */ kS(e));
  },
  uppercase(e) {
    return this.check(/* @__PURE__ */ SS(e));
  },
  trim() {
    return this.check(/* @__PURE__ */ TS());
  },
  normalize(...e) {
    return this.check(/* @__PURE__ */ CS(...e));
  },
  toLowerCase() {
    return this.check(/* @__PURE__ */ zS());
  },
  toUpperCase() {
    return this.check(/* @__PURE__ */ AS());
  },
  slugify() {
    return this.check(/* @__PURE__ */ OS());
  }
}), w_ = /* @__PURE__ */ L("ZodString", (e, t) => {
  Gc.init(e, t), by.init(e, t);
}, {
  email(e) {
    return this.check(/* @__PURE__ */ Zk(__, e));
  },
  url(e) {
    return this.check(/* @__PURE__ */ Xk(E_, e));
  },
  jwt(e) {
    return this.check(/* @__PURE__ */ fS(F_, e));
  },
  emoji(e) {
    return this.check(/* @__PURE__ */ Qk(C_, e));
  },
  guid(e) {
    return this.check(/* @__PURE__ */ Wk(P_, e));
  },
  uuid(e) {
    return this.check(/* @__PURE__ */ Hk(Vs, e));
  },
  uuidv4(e) {
    return this.check(/* @__PURE__ */ Kk(Vs, e));
  },
  uuidv6(e) {
    return this.check(/* @__PURE__ */ Gk(Vs, e));
  },
  uuidv7(e) {
    return this.check(/* @__PURE__ */ Yk(Vs, e));
  },
  nanoid(e) {
    return this.check(/* @__PURE__ */ Jk(T_, e));
  },
  cuid(e) {
    return this.check(/* @__PURE__ */ qk(z_, e));
  },
  cuid2(e) {
    return this.check(/* @__PURE__ */ eS(A_, e));
  },
  ulid(e) {
    return this.check(/* @__PURE__ */ tS(O_, e));
  },
  base64(e) {
    return this.check(/* @__PURE__ */ lS(L_, e));
  },
  base64url(e) {
    return this.check(/* @__PURE__ */ uS($_, e));
  },
  xid(e) {
    return this.check(/* @__PURE__ */ nS(j_, e));
  },
  ksuid(e) {
    return this.check(/* @__PURE__ */ rS(M_, e));
  },
  ipv4(e) {
    return this.check(/* @__PURE__ */ iS(R_, e));
  },
  ipv6(e) {
    return this.check(/* @__PURE__ */ oS(D_, e));
  },
  cidrv4(e) {
    return this.check(/* @__PURE__ */ sS(N_, e));
  },
  cidrv6(e) {
    return this.check(/* @__PURE__ */ aS(I_, e));
  },
  e164(e) {
    return this.check(/* @__PURE__ */ cS(V_, e));
  },
  datetime(e) {
    return this.check(/* @__PURE__ */ dS(x_, e));
  },
  date(e) {
    return this.check(/* @__PURE__ */ pS(b_, e));
  },
  time(e) {
    return this.check(/* @__PURE__ */ hS(k_, e));
  },
  duration(e) {
    return this.check(/* @__PURE__ */ mS(S_, e));
  }
});
function qe(e) {
  return /* @__PURE__ */ Uk(w_, e);
}
const Ve = /* @__PURE__ */ L("ZodStringFormat", (e, t) => {
  Ie.init(e, t), by.init(e, t);
}), x_ = /* @__PURE__ */ L("ZodISODateTime", (e, t) => {
  Xb.init(e, t), Ve.init(e, t);
}), b_ = /* @__PURE__ */ L("ZodISODate", (e, t) => {
  Qb.init(e, t), Ve.init(e, t);
}), k_ = /* @__PURE__ */ L("ZodISOTime", (e, t) => {
  Jb.init(e, t), Ve.init(e, t);
}), S_ = /* @__PURE__ */ L("ZodISODuration", (e, t) => {
  qb.init(e, t), Ve.init(e, t);
}), __ = /* @__PURE__ */ L("ZodEmail", (e, t) => {
  Nb.init(e, t), Ve.init(e, t);
}), P_ = /* @__PURE__ */ L("ZodGUID", (e, t) => {
  Rb.init(e, t), Ve.init(e, t);
}), Vs = /* @__PURE__ */ L("ZodUUID", (e, t) => {
  Db.init(e, t), Ve.init(e, t);
}), E_ = /* @__PURE__ */ L("ZodURL", (e, t) => {
  Bb.init(e, t), Ve.init(e, t);
}), C_ = /* @__PURE__ */ L("ZodEmoji", (e, t) => {
  Ub.init(e, t), Ve.init(e, t);
}), T_ = /* @__PURE__ */ L("ZodNanoID", (e, t) => {
  Zb.init(e, t), Ve.init(e, t);
}), z_ = /* @__PURE__ */ L("ZodCUID", (e, t) => {
  Wb.init(e, t), Ve.init(e, t);
}), A_ = /* @__PURE__ */ L("ZodCUID2", (e, t) => {
  Hb.init(e, t), Ve.init(e, t);
}), O_ = /* @__PURE__ */ L("ZodULID", (e, t) => {
  Kb.init(e, t), Ve.init(e, t);
}), j_ = /* @__PURE__ */ L("ZodXID", (e, t) => {
  Gb.init(e, t), Ve.init(e, t);
}), M_ = /* @__PURE__ */ L("ZodKSUID", (e, t) => {
  Yb.init(e, t), Ve.init(e, t);
}), R_ = /* @__PURE__ */ L("ZodIPv4", (e, t) => {
  ek.init(e, t), Ve.init(e, t);
}), D_ = /* @__PURE__ */ L("ZodIPv6", (e, t) => {
  nk.init(e, t), Ve.init(e, t);
}), N_ = /* @__PURE__ */ L("ZodCIDRv4", (e, t) => {
  rk.init(e, t), Ve.init(e, t);
}), I_ = /* @__PURE__ */ L("ZodCIDRv6", (e, t) => {
  ok.init(e, t), Ve.init(e, t);
}), L_ = /* @__PURE__ */ L("ZodBase64", (e, t) => {
  sk.init(e, t), Ve.init(e, t);
}), $_ = /* @__PURE__ */ L("ZodBase64URL", (e, t) => {
  lk.init(e, t), Ve.init(e, t);
}), V_ = /* @__PURE__ */ L("ZodE164", (e, t) => {
  uk.init(e, t), Ve.init(e, t);
}), F_ = /* @__PURE__ */ L("ZodJWT", (e, t) => {
  fk.init(e, t), Ve.init(e, t);
}), ky = /* @__PURE__ */ L("ZodNumber", (e, t) => {
  sy.init(e, t), Ze.init(e, t), e._zod.processJSONSchema = (o, a, l) => VS(e, o, a, l);
  const i = e._zod.bag;
  e.minValue = Math.max(i.minimum ?? Number.NEGATIVE_INFINITY, i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(i.maximum ?? Number.POSITIVE_INFINITY, i.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (i.format ?? "").includes("int") || Number.isSafeInteger(i.multipleOf ?? 0.5), e.isFinite = !0, e.format = i.format ?? null;
}, {
  gt(e, t) {
    return this.check(/* @__PURE__ */ Kh(e, t));
  },
  gte(e, t) {
    return this.check(/* @__PURE__ */ Ru(e, t));
  },
  min(e, t) {
    return this.check(/* @__PURE__ */ Ru(e, t));
  },
  lt(e, t) {
    return this.check(/* @__PURE__ */ Hh(e, t));
  },
  lte(e, t) {
    return this.check(/* @__PURE__ */ Mu(e, t));
  },
  max(e, t) {
    return this.check(/* @__PURE__ */ Mu(e, t));
  },
  int(e) {
    return this.check(qh(e));
  },
  safe(e) {
    return this.check(qh(e));
  },
  positive(e) {
    return this.check(/* @__PURE__ */ Kh(0, e));
  },
  nonnegative(e) {
    return this.check(/* @__PURE__ */ Ru(0, e));
  },
  negative(e) {
    return this.check(/* @__PURE__ */ Hh(0, e));
  },
  nonpositive(e) {
    return this.check(/* @__PURE__ */ Mu(0, e));
  },
  multipleOf(e, t) {
    return this.check(/* @__PURE__ */ Gh(e, t));
  },
  step(e, t) {
    return this.check(/* @__PURE__ */ Gh(e, t));
  },
  finite() {
    return this;
  }
});
function Et(e) {
  return /* @__PURE__ */ gS(ky, e);
}
const B_ = /* @__PURE__ */ L("ZodNumberFormat", (e, t) => {
  dk.init(e, t), ky.init(e, t);
});
function qh(e) {
  return /* @__PURE__ */ yS(B_, e);
}
const U_ = /* @__PURE__ */ L("ZodBoolean", (e, t) => {
  pk.init(e, t), Ze.init(e, t), e._zod.processJSONSchema = (i, o, a) => FS(e, i, o);
});
function Hn(e) {
  return /* @__PURE__ */ vS(U_, e);
}
const Z_ = /* @__PURE__ */ L("ZodUnknown", (e, t) => {
  hk.init(e, t), Ze.init(e, t), e._zod.processJSONSchema = (i, o, a) => US();
});
function em() {
  return /* @__PURE__ */ wS(Z_);
}
const W_ = /* @__PURE__ */ L("ZodNever", (e, t) => {
  mk.init(e, t), Ze.init(e, t), e._zod.processJSONSchema = (i, o, a) => BS(e, i, o);
});
function H_(e) {
  return /* @__PURE__ */ xS(W_, e);
}
const K_ = /* @__PURE__ */ L("ZodArray", (e, t) => {
  Xc(), gk.init(e, t), Ze.init(e, t), e._zod.processJSONSchema = (i, o, a) => GS(e, i, o, a), e.element = t.element;
}, {
  min(e, t) {
    return this.check(/* @__PURE__ */ oa(e, t));
  },
  nonempty(e) {
    return this.check(/* @__PURE__ */ oa(1, e));
  },
  max(e, t) {
    return this.check(/* @__PURE__ */ dy(e, t));
  },
  length(e, t) {
    return this.check(/* @__PURE__ */ py(e, t));
  },
  unwrap() {
    return this.element;
  }
});
function po(e, t) {
  return /* @__PURE__ */ jS(K_, e, t);
}
const G_ = /* @__PURE__ */ L("ZodObject", (e, t) => {
  Xc(), wk.init(e, t), Ze.init(e, t), e._zod.processJSONSchema = (i, o, a) => YS(e, i, o, a), Px(e, "shape", (i) => i._zod.def.shape, !1);
}, {
  keyof() {
    return vr(Object.keys(this._zod.def.shape));
  },
  catchall(e) {
    return this.clone({ ...this._zod.def, catchall: e });
  },
  passthrough() {
    return this.clone({ ...this._zod.def, catchall: em() });
  },
  loose() {
    return this.clone({ ...this._zod.def, catchall: em() });
  },
  strict() {
    return this.clone({ ...this._zod.def, catchall: H_() });
  },
  strip() {
    return this.clone({ ...this._zod.def, catchall: void 0 });
  },
  extend(e) {
    return hx(this, e);
  },
  safeExtend(e) {
    return mx(this, e);
  },
  merge(e) {
    return gx(this, e);
  },
  pick(e) {
    return dx(this, e);
  },
  omit(e) {
    return px(this, e);
  },
  partial(...e) {
    return Ch(Py, this, e[0]);
  },
  exactPartial(...e) {
    return Ch(Ey, this, e[0], "exactPartial");
  },
  required(...e) {
    return yx(Cy, this, e[0]);
  }
});
function br(e, t) {
  const i = {
    type: "object",
    shape: e ?? {},
    ...ae(t)
  };
  return new G_(i);
}
const Sy = /* @__PURE__ */ L("ZodUnion", (e, t) => {
  uy.init(e, t), Ze.init(e, t), e._zod.processJSONSchema = (i, o, a) => XS(e, i, o, a), e.options = t.options;
});
function Y_(e, t) {
  return new Sy({
    type: "union",
    options: e,
    ...ae(t)
  });
}
const X_ = /* @__PURE__ */ L("ZodDiscriminatedUnion", (e, t) => {
  Sy.init(e, t), xk.init(e, t);
});
function _y(e, t, i) {
  return new X_({
    type: "union",
    options: t,
    discriminator: e,
    ...ae(i)
  });
}
const Q_ = /* @__PURE__ */ L("ZodIntersection", (e, t) => {
  bk.init(e, t), Ze.init(e, t), e._zod.processJSONSchema = (i, o, a) => QS(e, i, o, a);
});
function J_(e, t) {
  return new Q_({
    type: "intersection",
    left: e,
    right: t
  });
}
const pc = /* @__PURE__ */ L("ZodEnum", (e, t) => {
  kk.init(e, t), Ze.init(e, t), e._zod.processJSONSchema = (o, a, l) => ZS(e, o, a), e.enum = t.entries, e.options = Object.values(t.entries);
  const i = new Set(Object.keys(t.entries));
  e.extract = (o, a) => {
    const l = {};
    for (const c of o)
      if (i.has(c))
        l[c] = t.entries[c];
      else
        throw new Error(`Key ${c} not found in enum`);
    return new pc({
      ...t,
      checks: [],
      ...ae(a),
      entries: l
    });
  }, e.exclude = (o, a) => {
    const l = { ...t.entries };
    for (const c of o)
      if (i.has(c))
        delete l[c];
      else
        throw new Error(`Key ${c} not found in enum`);
    return new pc({
      ...t,
      checks: [],
      ...ae(a),
      entries: l
    });
  };
});
function vr(e, t) {
  const i = Array.isArray(e) ? Object.fromEntries(e.map((o) => [o, o])) : e;
  return new pc({
    type: "enum",
    entries: i,
    ...ae(t)
  });
}
const q_ = /* @__PURE__ */ L("ZodLiteral", (e, t) => {
  Sk.init(e, t), Ze.init(e, t), e._zod.processJSONSchema = (i, o, a) => WS(e, i, o, a), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function ii(e, t) {
  return new q_({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...ae(t)
  });
}
const e2 = /* @__PURE__ */ L("ZodTransform", (e, t) => {
  Xc(), _k.init(e, t), Ze.init(e, t), e._zod.processJSONSchema = (i, o, a) => KS(e, i, o, a), e._zod.parse = (i, o) => {
    if (o.direction === "backward")
      throw new Kg(e.constructor.name);
    i.addIssue = (l) => {
      if (typeof l == "string")
        i.issues.push(fo(l, i.value, t));
      else {
        const c = l;
        c.fatal && (c.continue = !1), c.code ?? (c.code = "custom"), "input" in c || (c.input = i.value), c.inst ?? (c.inst = e), i.issues.push(fo(c));
      }
    };
    const a = t.transform(i.value, i);
    return a instanceof Promise ? a.then((l) => (i.value = l, i)) : (i.value = a, i);
  };
});
function t2(e) {
  return new e2({
    type: "transform",
    transform: e
  });
}
const Py = /* @__PURE__ */ L("ZodOptional", (e, t) => {
  cy.init(e, t), Ze.init(e, t), e._zod.processJSONSchema = (i, o, a) => xy(e, i, o, a), e.unwrap = () => e._zod.def.innerType;
});
function tm(e) {
  return new Py({
    type: "optional",
    innerType: e
  });
}
const Ey = /* @__PURE__ */ L("ZodExactOptional", (e, t) => {
  Pk.init(e, t), Ze.init(e, t), e._zod.processJSONSchema = (i, o, a) => xy(e, i, o, a), e.unwrap = () => e._zod.def.innerType;
});
function n2(e) {
  return new Ey({
    type: "optional",
    innerType: e
  });
}
const r2 = /* @__PURE__ */ L("ZodNullable", (e, t) => {
  Ek.init(e, t), Ze.init(e, t), e._zod.processJSONSchema = (i, o, a) => JS(e, i, o, a), e.unwrap = () => e._zod.def.innerType;
});
function nm(e) {
  return new r2({
    type: "nullable",
    innerType: e
  });
}
const i2 = /* @__PURE__ */ L("ZodDefault", (e, t) => {
  Ck.init(e, t), Ze.init(e, t), e._zod.processJSONSchema = (i, o, a) => e_(e, i, o, a), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function o2(e, t) {
  return new i2({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Ug(t);
    }
  });
}
const s2 = /* @__PURE__ */ L("ZodPrefault", (e, t) => {
  Tk.init(e, t), Ze.init(e, t), e._zod.processJSONSchema = (i, o, a) => t_(e, i, o, a), e.unwrap = () => e._zod.def.innerType;
});
function a2(e, t) {
  return new s2({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Ug(t);
    }
  });
}
const Cy = /* @__PURE__ */ L("ZodNonOptional", (e, t) => {
  zk.init(e, t), Ze.init(e, t), e._zod.processJSONSchema = (i, o, a) => qS(e, i, o, a), e.unwrap = () => e._zod.def.innerType;
});
function l2(e, t) {
  return new Cy({
    type: "nonoptional",
    innerType: e,
    ...ae(t)
  });
}
const u2 = /* @__PURE__ */ L("ZodCatch", (e, t) => {
  Ak.init(e, t), Ze.init(e, t), e._zod.processJSONSchema = (i, o, a) => n_(e, i, o, a), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function c2(e, t) {
  return new u2({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : Cx(t)
  });
}
const f2 = /* @__PURE__ */ L("ZodPipe", (e, t) => {
  Ok.init(e, t), Ze.init(e, t), e._zod.processJSONSchema = (i, o, a) => r_(e, i, o, a), e.in = t.in, e.out = t.out;
});
function rm(e, t) {
  return new f2({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const d2 = /* @__PURE__ */ L("ZodReadonly", (e, t) => {
  jk.init(e, t), Ze.init(e, t), e._zod.processJSONSchema = (i, o, a) => i_(e, i, o, a), e.unwrap = () => e._zod.def.innerType;
});
function p2(e) {
  return new d2({
    type: "readonly",
    innerType: e
  });
}
const h2 = /* @__PURE__ */ L("ZodCustom", (e, t) => {
  Mk.init(e, t), Ze.init(e, t), e._zod.processJSONSchema = (i, o, a) => HS(e, i, o, a);
});
function m2(e, t = {}) {
  return /* @__PURE__ */ MS(h2, e, t);
}
function g2(e, t) {
  return /* @__PURE__ */ RS(e, t);
}
const ba = br({
  id: qe(),
  x: Et().min(0).max(1),
  y: Et().min(0).max(1),
  width: Et().min(0).max(1),
  height: Et().min(0).max(1),
  zIndex: Et().int().default(1)
}), Ty = _y("type", [
  br({ type: ii("goto-page"), target: qe() }),
  br({ type: ii("open-url"), href: qe() })
]), y2 = ba.extend({
  type: ii("hotspot"),
  variant: vr(["tag", "highlighter"]),
  size: vr(["sm", "md", "lg"]).default("md"),
  style: vr(["solid", "transparent"]).default("transparent"),
  action: Ty
}), v2 = ba.extend({
  type: ii("link"),
  action: Ty
}), w2 = ba.extend({
  type: ii("video"),
  src: qe(),
  poster: qe().optional(),
  autoplay: Hn().default(!1),
  controls: Hn().default(!0),
  loop: Hn().default(!1),
  muted: Hn().default(!1)
}), x2 = br({
  src: qe(),
  caption: qe().optional()
}), b2 = ba.extend({
  type: ii("carousel"),
  slides: po(x2).min(1),
  loop: Hn().default(!1),
  autoplay: Hn().default(!1),
  autoplayIntervalMs: Et().int().positive().default(4e3),
  navigation: Hn().default(!0),
  pagination: Hn().default(!0),
  arrowPlacement: vr(["inside", "outside"]).default("inside")
}), k2 = _y("type", [
  y2,
  v2,
  w2,
  b2
]), S2 = br({
  str: qe(),
  x: Et(),
  y: Et(),
  width: Et(),
  height: Et()
}), _2 = br({
  id: qe(),
  number: Et().int().positive().optional(),
  // Hand-authored HTML page (existing format).
  src: qe().optional(),
  // PDF-imported image page (existing importer output format).
  background: qe().optional(),
  // A page rendered live, on demand, from a source PDF opened directly
  // by the web component (no importer/manifest involved) — see
  // src/webcomponent/pdfRenderer.ts. Mutually exclusive with the above.
  pdfPageNumber: Et().int().positive().optional(),
  title: qe().optional(),
  thumbnail: qe().optional(),
  text: qe().optional(),
  textItems: po(S2).optional(),
  components: po(k2).optional()
}).refine(
  (e) => [e.src, e.background, e.pdfPageNumber].filter((t) => t != null).length === 1,
  { message: "Page must have exactly one of `src`, `background`, or `pdfPageNumber`" }
), P2 = br({
  id: qe(),
  title: qe(),
  series: qe().optional(),
  issue: qe().optional(),
  width: Et().positive(),
  height: Et().positive(),
  direction: vr(["ltr", "rtl"]).default("ltr"),
  defaultView: vr(["spread", "single"]).default("spread"),
  originalPdf: qe().optional(),
  pages: po(_2).min(1)
});
function E2(e) {
  return new URL(".", e).href;
}
async function C2(e) {
  const t = await fetch(e);
  if (!t.ok)
    throw new Error(
      `Failed to load publication manifest (${t.status} ${t.statusText}): ${e}`
    );
  const i = await t.json(), o = P2.safeParse(i);
  if (!o.success)
    throw new Error(`Invalid publication manifest at ${e}: ${o.error.message}`);
  return o.data;
}
function ho(e, t) {
  return new URL(t, e).href;
}
function kr(e) {
  return e <= 1 ? 1 : e % 2 === 0 ? e : e - 1;
}
function aa(e, t, i) {
  const o = Math.min(Math.max(t, 1), e.length);
  if (i === "single")
    return { left: null, right: e[o - 1] ?? null };
  const a = kr(o);
  if (a === 1)
    return { left: null, right: e[0] ?? null };
  const l = e[a - 1] ?? null, c = e[a] ?? null;
  return l && !c ? { left: null, right: l } : { left: l, right: c };
}
function la(e, t) {
  return t === "single" || kr(e) === 1 ? 1 : 2;
}
function T2(e, t, i, o) {
  if (e === t) return "jump";
  const a = aa(i, e, o), l = aa(i, t, o);
  if (!(a.left === null == (l.left === null))) return "jump";
  if (o === "single")
    return t === e + 1 ? "forward" : t === e - 1 ? "backward" : "jump";
  const d = kr(e), h = kr(t);
  return h === d + la(e, o) ? "forward" : d === h + la(t, o) ? "backward" : "jump";
}
const z2 = 25, A2 = 400, im = 10;
function Fs(e) {
  return Math.min(A2, Math.max(z2, Math.round(e)));
}
function zy() {
  let e = 0;
  return rx((t, i) => ({
    publication: null,
    status: "idle",
    error: null,
    manifestUrl: null,
    baseUrl: null,
    currentPage: 1,
    viewMode: "spread",
    fitMode: "spread",
    zoomPercent: 100,
    sidebarOpen: !1,
    sidebarTab: "thumbnails",
    isFullscreen: !1,
    searchOpen: !1,
    searchQuery: "",
    bottomBarHeight: 88,
    pageDisplayWidth: 816,
    videoPopup: null,
    downloadEnabled: !0,
    printEnabled: !0,
    searchEnabled: !0,
    pdfPageRenderer: null,
    pdfPageLinks: null,
    pdfSearchIndex: [],
    pdfSearchIndexedCount: 0,
    pdfSearchTotalCount: 0,
    openPublication: async (o) => {
      const a = ++e;
      t({ status: "loading", error: null, pdfPageRenderer: null, pdfPageLinks: null });
      try {
        const l = await C2(o);
        if (a !== e) return;
        t({
          publication: l,
          manifestUrl: o,
          baseUrl: E2(o),
          status: "ready",
          currentPage: 1,
          viewMode: l.defaultView,
          fitMode: l.defaultView === "spread" ? "spread" : "page",
          searchOpen: !1,
          searchQuery: "",
          videoPopup: null
        });
      } catch (l) {
        if (a !== e) return;
        t({
          status: "error",
          error: l instanceof Error ? l.message : "Failed to load publication"
        });
      }
    },
    // Dynamically imported so the dev app (which never calls this) and any
    // consumer that only ever loads manifest-based publications don't pay
    // for pdfjs-dist unless a raw PDF `src` is actually used.
    openPdf: async (o) => {
      const a = ++e;
      t({
        status: "loading",
        error: null,
        pdfPageRenderer: null,
        pdfPageLinks: null,
        pdfSearchIndex: [],
        pdfSearchIndexedCount: 0,
        pdfSearchTotalCount: 0
      });
      try {
        const { loadPdfAsManifest: l } = await import("./pdfRenderer-DVcUjiXm.js"), { manifest: c, renderPage: d, indexText: h, getPageLinks: m } = await l(o);
        if (a !== e) return;
        t({
          publication: c,
          manifestUrl: o,
          baseUrl: new URL(".", o).href,
          status: "ready",
          currentPage: 1,
          viewMode: c.defaultView,
          fitMode: c.defaultView === "spread" ? "spread" : "page",
          searchOpen: !1,
          searchQuery: "",
          videoPopup: null,
          pdfPageRenderer: d,
          pdfPageLinks: m,
          pdfSearchTotalCount: c.pages.length
        }), h((g, y, w) => {
          a === e && t({ pdfSearchIndex: g, pdfSearchIndexedCount: y, pdfSearchTotalCount: w });
        });
      } catch (l) {
        if (a !== e) return;
        t({
          status: "error",
          error: l instanceof Error ? l.message : "Failed to load PDF"
        });
      }
    },
    goToPage: (o) => {
      const { publication: a } = i();
      if (!a) return;
      const l = Math.min(Math.max(o, 1), a.pages.length);
      t({ currentPage: l });
    },
    nextPage: () => {
      const { publication: o, currentPage: a, viewMode: l } = i();
      if (!o) return;
      if (l === "single") {
        t({ currentPage: Math.min(a + 1, o.pages.length) });
        return;
      }
      const c = la(a, l), d = kr(a), h = Math.min(d + c, o.pages.length);
      t({ currentPage: h });
    },
    previousPage: () => {
      const { publication: o, currentPage: a, viewMode: l } = i();
      if (!o) return;
      if (l === "single") {
        t({ currentPage: Math.max(a - 1, 1) });
        return;
      }
      const c = kr(a);
      if (c <= 1) {
        t({ currentPage: 1 });
        return;
      }
      const d = la(c - 1, l);
      t({ currentPage: Math.max(1, c - d) });
    },
    setFitMode: (o) => t({ fitMode: o }),
    setViewMode: (o) => t({ viewMode: o, fitMode: o === "spread" ? "spread" : "page" }),
    setZoomPercent: (o) => t({ zoomPercent: Fs(o), fitMode: "custom" }),
    zoomIn: () => t((o) => ({
      zoomPercent: Fs(o.zoomPercent + im),
      fitMode: "custom"
    })),
    zoomOut: () => t((o) => ({
      zoomPercent: Fs(o.zoomPercent - im),
      fitMode: "custom"
    })),
    /** Called by BookStage when an auto-fit mode recomputes the display scale. */
    reportComputedZoom: (o) => {
      i().fitMode !== "custom" && t({ zoomPercent: Fs(o) });
    },
    toggleSidebar: () => t((o) => ({
      sidebarOpen: !o.sidebarOpen,
      searchOpen: !1
    })),
    setSidebarOpen: (o) => t({ sidebarOpen: o, ...o ? { searchOpen: !1 } : {} }),
    setSidebarTab: (o) => t({ sidebarTab: o, sidebarOpen: !0, searchOpen: !1 }),
    setFullscreen: (o) => t({ isFullscreen: o }),
    toggleSearch: () => t((o) => ({
      searchOpen: !o.searchOpen,
      sidebarOpen: !1
    })),
    setSearchOpen: (o) => t({ searchOpen: o }),
    setSearchQuery: (o) => t({ searchQuery: o }),
    setBottomBarHeight: (o) => t({ bottomBarHeight: o }),
    setPageDisplayWidth: (o) => t({ pageDisplayWidth: o }),
    openVideoPopup: (o) => t({ videoPopup: o }),
    closeVideoPopup: () => t({ videoPopup: null }),
    setDownloadEnabled: (o) => t({ downloadEnabled: o }),
    setPrintEnabled: (o) => t({ printEnabled: o }),
    setSearchEnabled: (o) => t({ searchEnabled: o })
  }));
}
const Ay = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:"Inter", ui-sans-serif, system-ui, -apple-system, sans-serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-green-50:oklch(98.2% .018 155.826);--color-green-600:oklch(62.7% .194 149.214);--color-green-800:oklch(44.8% .119 151.328);--color-blue-50:oklch(97% .014 254.604);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-800:oklch(42.4% .199 265.638);--color-neutral-50:oklch(98.5% 0 none);--color-neutral-100:oklch(97% 0 none);--color-neutral-200:oklch(92.2% 0 none);--color-neutral-300:oklch(87% 0 none);--color-neutral-400:oklch(70.8% 0 none);--color-neutral-500:oklch(55.6% 0 none);--color-neutral-600:oklch(43.9% 0 none);--color-neutral-700:oklch(37.1% 0 none);--color-neutral-800:oklch(26.9% 0 none);--color-neutral-900:oklch(20.5% 0 none);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-md:28rem;--container-5xl:64rem;--container-6xl:72rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--leading-tight:1.25;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--ease-out:cubic-bezier(0, 0, .2, 1);--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;--blur-sm:8px;--blur-xl:24px;--aspect-video:16 / 9;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.inset-0{inset:0}.inset-x-0{inset-inline:0}.-top-11{top:calc(var(--spacing) * -11)}.top-0{top:0}.top-1\\/2{top:50%}.top-6{top:calc(var(--spacing) * 6)}.right-0{right:0}.right-6{right:calc(var(--spacing) * 6)}.bottom-6{bottom:calc(var(--spacing) * 6)}.bottom-full{bottom:100%}.left-0{left:0}.left-1\\/2{left:50%}.left-6{left:calc(var(--spacing) * 6)}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-50{z-index:50}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.mx-1{margin-inline:var(--spacing)}.mx-auto{margin-inline:auto}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:var(--spacing)}.mt-1\\.5{margin-top:calc(var(--spacing) * 1.5)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mr-1{margin-right:var(--spacing)}.mb-1{margin-bottom:var(--spacing)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.ml-2{margin-left:calc(var(--spacing) * 2)}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline-flex{display:inline-flex}.table{display:table}.aspect-\\[816\\/1056\\]{aspect-ratio:816/1056}.aspect-video{aspect-ratio:var(--aspect-video)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-11{height:calc(var(--spacing) * 11)}.h-12{height:calc(var(--spacing) * 12)}.h-14{height:calc(var(--spacing) * 14)}.h-36{height:calc(var(--spacing) * 36)}.h-64{height:calc(var(--spacing) * 64)}.h-full{height:100%}.h-screen{height:100vh}.max-h-64{max-height:calc(var(--spacing) * 64)}.max-h-96{max-height:calc(var(--spacing) * 96)}.min-h-0{min-height:0}.min-h-screen{min-height:100vh}.w-6{width:calc(var(--spacing) * 6)}.w-7{width:calc(var(--spacing) * 7)}.w-8{width:calc(var(--spacing) * 8)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-11{width:calc(var(--spacing) * 11)}.w-36{width:calc(var(--spacing) * 36)}.w-56{width:calc(var(--spacing) * 56)}.w-72{width:calc(var(--spacing) * 72)}.w-\\[min\\(22rem\\,calc\\(100vw-1rem\\)\\)\\]{width:min(22rem,100vw - 1rem)}.w-fit{width:fit-content}.w-full{width:100%}.w-px{width:1px}.w-screen{width:100vw}.max-w-5xl{max-width:var(--container-5xl)}.max-w-6xl{max-width:var(--container-6xl)}.max-w-\\[calc\\(100vw-1rem\\)\\]{max-width:calc(100vw - 1rem)}.max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.max-w-md{max-width:var(--container-md)}.max-w-xs{max-width:var(--container-xs)}.min-w-0{min-width:0}.flex-1{flex:1}.flex-none{flex:none}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-0{--tw-translate-y:0px;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-3{--tw-translate-y:calc(var(--spacing) * 3);translate:var(--tw-translate-x) var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.animate-pulse{animation:var(--animate-pulse)}.animate-spin{animation:var(--animate-spin)}.cursor-e-resize{cursor:e-resize}.cursor-grab{cursor:grab}.cursor-grabbing{cursor:grabbing}.cursor-w-resize{cursor:w-resize}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-0\\.5{gap:calc(var(--spacing) * .5)}.gap-1{gap:var(--spacing)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-visible{overflow:visible}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-blue-400{border-color:var(--color-blue-400)}.border-neutral-200{border-color:var(--color-neutral-200)}.border-neutral-300{border-color:var(--color-neutral-300)}.border-red-200{border-color:var(--color-red-200)}.border-transparent{border-color:#0000}.border-white\\/5{border-color:#ffffff0d}@supports (color:color-mix(in lab,red,red)){.border-white\\/5{border-color:color-mix(in oklab,var(--color-white) 5%,transparent)}}.border-white\\/10{border-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.border-white\\/10{border-color:color-mix(in oklab,var(--color-white) 10%,transparent)}}.border-white\\/15{border-color:#ffffff26}@supports (color:color-mix(in lab,red,red)){.border-white\\/15{border-color:color-mix(in oklab,var(--color-white) 15%,transparent)}}.border-t-neutral-700{border-top-color:var(--color-neutral-700)}.bg-\\[\\#eceeef\\]{background-color:#eceeef}.bg-black{background-color:var(--color-black)}.bg-black\\/35{background-color:#00000059}@supports (color:color-mix(in lab,red,red)){.bg-black\\/35{background-color:color-mix(in oklab,var(--color-black) 35%,transparent)}}.bg-black\\/80{background-color:#000c}@supports (color:color-mix(in lab,red,red)){.bg-black\\/80{background-color:color-mix(in oklab,var(--color-black) 80%,transparent)}}.bg-blue-50{background-color:var(--color-blue-50)}.bg-green-50{background-color:var(--color-green-50)}.bg-neutral-50{background-color:var(--color-neutral-50)}.bg-neutral-100{background-color:var(--color-neutral-100)}.bg-neutral-200{background-color:var(--color-neutral-200)}.bg-neutral-800\\/90{background-color:#262626e6}@supports (color:color-mix(in lab,red,red)){.bg-neutral-800\\/90{background-color:color-mix(in oklab,var(--color-neutral-800) 90%,transparent)}}.bg-neutral-900{background-color:var(--color-neutral-900)}.bg-neutral-900\\/90{background-color:#171717e6}@supports (color:color-mix(in lab,red,red)){.bg-neutral-900\\/90{background-color:color-mix(in oklab,var(--color-neutral-900) 90%,transparent)}}.bg-neutral-900\\/95{background-color:#171717f2}@supports (color:color-mix(in lab,red,red)){.bg-neutral-900\\/95{background-color:color-mix(in oklab,var(--color-neutral-900) 95%,transparent)}}.bg-red-50{background-color:var(--color-red-50)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/15{background-color:#ffffff26}@supports (color:color-mix(in lab,red,red)){.bg-white\\/15{background-color:color-mix(in oklab,var(--color-white) 15%,transparent)}}.object-contain{object-fit:contain}.object-cover{object-fit:cover}.p-1\\.5{padding:calc(var(--spacing) * 1.5)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.p-8{padding:calc(var(--spacing) * 8)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-5{padding-inline:calc(var(--spacing) * 5)}.px-6{padding-inline:calc(var(--spacing) * 6)}.py-1{padding-block:var(--spacing)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-4{padding-block:calc(var(--spacing) * 4)}.py-6{padding-block:calc(var(--spacing) * 6)}.pt-3{padding-top:calc(var(--spacing) * 3)}.pt-4{padding-top:calc(var(--spacing) * 4)}.pt-5{padding-top:calc(var(--spacing) * 5)}.pb-2{padding-bottom:calc(var(--spacing) * 2)}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-5{padding-bottom:calc(var(--spacing) * 5)}.text-center{text-align:center}.text-left{text-align:left}.font-mono{font-family:var(--font-mono)}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.14em\\]{--tw-tracking:.14em;letter-spacing:.14em}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.text-blue-800{color:var(--color-blue-800)}.text-green-600{color:var(--color-green-600)}.text-green-800{color:var(--color-green-800)}.text-neutral-200{color:var(--color-neutral-200)}.text-neutral-300{color:var(--color-neutral-300)}.text-neutral-400{color:var(--color-neutral-400)}.text-neutral-500{color:var(--color-neutral-500)}.text-neutral-600{color:var(--color-neutral-600)}.text-neutral-700{color:var(--color-neutral-700)}.text-neutral-800{color:var(--color-neutral-800)}.text-neutral-900{color:var(--color-neutral-900)}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-700{color:var(--color-red-700)}.text-red-800{color:var(--color-red-800)}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.underline{text-decoration-line:underline}.opacity-0{opacity:0}.opacity-100{opacity:1}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring,.ring-1{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-white{--tw-ring-color:var(--color-white)}.ring-white\\/10{--tw-ring-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.ring-white\\/10{--tw-ring-color:color-mix(in oklab, var(--color-white) 10%, transparent)}}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-xl{--tw-backdrop-blur:blur(var(--blur-xl));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-300{--tw-duration:.3s;transition-duration:.3s}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;user-select:none}.placeholder\\:text-neutral-500::placeholder{color:var(--color-neutral-500)}@media(hover:hover){.hover\\:bg-neutral-50:hover{background-color:var(--color-neutral-50)}.hover\\:bg-neutral-100:hover{background-color:var(--color-neutral-100)}.hover\\:bg-neutral-700:hover{background-color:var(--color-neutral-700)}.hover\\:bg-neutral-800:hover{background-color:var(--color-neutral-800)}.hover\\:bg-red-50:hover{background-color:var(--color-red-50)}.hover\\:bg-white\\/10:hover{background-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-white\\/10:hover{background-color:color-mix(in oklab,var(--color-white) 10%,transparent)}}.hover\\:text-red-600:hover{color:var(--color-red-600)}.hover\\:text-white:hover{color:var(--color-white)}.hover\\:underline:hover{text-decoration-line:underline}}.focus\\:border-white\\/35:focus{border-color:#ffffff59}@supports (color:color-mix(in lab,red,red)){.focus\\:border-white\\/35:focus{border-color:color-mix(in oklab,var(--color-white) 35%,transparent)}}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:outline:focus-visible{outline-style:var(--tw-outline-style);outline-width:1px}.focus-visible\\:outline-2:focus-visible{outline-style:var(--tw-outline-style);outline-width:2px}.focus-visible\\:outline-offset-2:focus-visible{outline-offset:2px}.focus-visible\\:outline-white:focus-visible{outline-color:var(--color-white)}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:opacity-30:disabled{opacity:.3}.disabled\\:opacity-40:disabled{opacity:.4}.disabled\\:opacity-50:disabled{opacity:.5}@media(min-width:40rem){.sm\\:contents{display:contents}.sm\\:flex{display:flex}.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.sm\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.sm\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.sm\\:p-10{padding:calc(var(--spacing) * 10)}.sm\\:px-8{padding-inline:calc(var(--spacing) * 8)}}@media(min-width:48rem){.md\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.md\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media(min-width:64rem){.lg\\:grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}}@media(min-width:80rem){.xl\\:grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}}.\\[\\&\\>svg\\]\\:h-full>svg{height:100%}.\\[\\&\\>svg\\]\\:w-full>svg{width:100%}}html,body,#app{height:100%}body{overscroll-behavior:none;background-color:#eceeef;margin:0}*{box-sizing:border-box}.zoom-scrubber{appearance:none;background:#fff3;border-radius:9999px;outline:none;width:60px;height:4px}.zoom-scrubber::-webkit-slider-thumb{appearance:none;cursor:pointer;background:#fff;border-radius:9999px;width:12px;height:12px;box-shadow:0 1px 2px #0006}.zoom-scrubber::-moz-range-thumb{cursor:pointer;background:#fff;border:none;border-radius:9999px;width:12px;height:12px;box-shadow:0 1px 2px #0006}.zoom-scrubber::-moz-range-track{background:0 0;border-radius:9999px;height:4px}.progress-scrubber{appearance:none;cursor:pointer;outline:none;width:100%;height:4px;margin:0;display:block}.progress-scrubber::-webkit-slider-thumb{appearance:none;cursor:pointer;background:#fff;border-radius:9999px;width:10px;height:10px;box-shadow:0 1px 2px #00000080}.progress-scrubber::-moz-range-thumb{cursor:pointer;background:#fff;border:none;border-radius:9999px;width:10px;height:10px;box-shadow:0 1px 2px #00000080}.progress-scrubber::-moz-range-track{background:0 0;height:4px}.ambient-video video{pointer-events:none}.ambient-video video::-webkit-media-controls{display:none!important}:host([theme=dark]){--pubengine-stage-bg:#1a1c1e}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}';
function O2(e) {
  if (!e) return !1;
  try {
    return new URL(e, window.location.href).pathname.toLowerCase().endsWith(".pdf");
  } catch {
    return !1;
  }
}
const Oy = '.pub-carousel{position:relative;--arrow-offset: 12px}.pub-carousel__viewport{width:100%;height:100%;overflow:hidden;border-radius:4px}.pub-carousel__track{display:flex;height:100%;transition:transform .35s ease}.pub-carousel__slide{position:relative;flex:0 0 100%;min-width:0;height:100%;display:flex;align-items:flex-end;box-sizing:border-box;padding:16px;color:#fff;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;background-size:cover;background-position:center}.pub-carousel__slide:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,#0000 55%,#0009);pointer-events:none}.pub-carousel__slide>*{position:relative;z-index:1}.pub-carousel__arrow{position:absolute;top:50%;transform:translateY(-50%);display:flex;align-items:center;justify-content:center;width:32px;height:32px;padding:0;border:none;border-radius:9999px;background:#14141499;color:#fff;font-size:16px;line-height:1;cursor:pointer;z-index:2}.pub-carousel__arrow:hover{background:#141414cc}.pub-carousel__arrow:disabled{opacity:.35;cursor:default}.pub-carousel__arrow--prev{left:var(--arrow-offset)}.pub-carousel__arrow--next{right:var(--arrow-offset)}.pub-carousel[data-arrows=outside] .pub-carousel__arrow--prev{left:calc(var(--arrow-offset) * -1 - 32px)}.pub-carousel[data-arrows=outside] .pub-carousel__arrow--next{right:calc(var(--arrow-offset) * -1 - 32px)}.pub-carousel__dots{position:absolute;left:50%;bottom:12px;transform:translate(-50%);display:flex;gap:6px;z-index:2}.pub-carousel__dot{width:6px;height:6px;padding:0;border:none;border-radius:9999px;background:#ffffff80;cursor:pointer}.pub-carousel__dot.is-active{width:16px;background:#fff}.pub-video{position:relative;overflow:hidden;border-radius:4px;background:#000}.pub-video video{display:block;width:100%;height:100%;object-fit:cover;cursor:pointer}.pub-video[data-mode=ambient] video{cursor:default}.pub-video__play{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:0;border:none;background:#00000040;cursor:pointer}.pub-video__play-icon{width:52px;height:52px;border-radius:9999px;background:#ffffffeb;display:flex;align-items:center;justify-content:center;color:#111;font-size:18px;padding-left:3px}.pub-video.is-playing .pub-video__play{display:none}.pub-video__controls{position:absolute;right:8px;bottom:8px;display:none;gap:6px;z-index:2}.pub-video.is-playing .pub-video__controls{display:flex}.pub-video__control-button{width:28px;height:28px;padding:0;border:none;border-radius:9999px;background:#141414a6;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;line-height:1;cursor:pointer}.pub-video__control-button:hover{background:#141414d9}.pub-video__icon-muted,.pub-video.is-muted .pub-video__icon-unmuted{display:none}.pub-video.is-muted .pub-video__icon-muted{display:inline}.pub-video-popup-trigger{display:inline-flex;align-items:center;gap:8px;border:none;border-radius:999px;padding:12px 22px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;background:#1a1a1a;color:#fff;cursor:pointer}.pub-video-popup-trigger:hover{opacity:.85}.pub-hotspot{position:absolute;-webkit-appearance:none;appearance:none;padding:0;margin:0;border:none;cursor:pointer}.pub-hotspot--tag{width:32px;height:32px;border-radius:9999px;background:#ffffff59;box-shadow:0 1px 4px #00000040;transition:transform .15s ease,background-color .15s ease;transform-origin:center;animation:pub-hotspot-tag-pulse 2.4s ease-in-out infinite}@keyframes pub-hotspot-tag-pulse{0%,to{transform:scale(1)}50%{transform:scale(1.3)}}.pub-hotspot--tag:after{content:"";position:absolute;inset:0;margin:auto;width:28%;height:28%;border-radius:9999px;background:#fff}.pub-hotspot--tag:hover,.pub-hotspot--tag.is-hover-linked{transform:scale(1.5);animation:none}.pub-hotspot--tag[data-style=solid]{background:#141414d9}.pub-hotspot--tag[data-size=sm]{width:20px;height:20px}.pub-hotspot--tag[data-size=lg]{width:44px;height:44px}.pub-hotspot--highlighter{background:#67e8f938;border:1px solid rgba(103,232,249,.65);border-radius:4px;transition:background-color .15s ease}.pub-hotspot--highlighter:hover,.pub-hotspot--highlighter.is-hover-linked{background:#67e8f957}.pub-popup{position:fixed;inset:0;z-index:50;display:none;align-items:center;justify-content:center;padding:40px;box-sizing:border-box}.pub-popup.is-open{display:flex}.pub-popup__backdrop{position:absolute;inset:0;border:none;padding:0;background:#0009;cursor:pointer}.pub-popup__panel{position:relative;z-index:1;max-width:100%;max-height:100%;overflow:auto;background:#fff;border-radius:8px;padding:28px;box-sizing:border-box;box-shadow:0 20px 60px #00000059}.pub-popup__panel img{display:block;max-width:100%;border-radius:4px}.pub-popup__close{position:absolute;top:10px;right:10px;z-index:2;width:28px;height:28px;padding:0;border:none;border-radius:9999px;background:#141414bf;color:#fff;font-size:16px;line-height:1;display:flex;align-items:center;justify-content:center;cursor:pointer}.pub-popup__close:hover{background:#141414e6}';
var Du = { exports: {} }, Ji = {};
var om;
function j2() {
  if (om) return Ji;
  om = 1;
  var e = Fc(), t = /* @__PURE__ */ Symbol.for("react.element"), i = /* @__PURE__ */ Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(d, h, m) {
    var g, y = {}, w = null, b = null;
    m !== void 0 && (w = "" + m), h.key !== void 0 && (w = "" + h.key), h.ref !== void 0 && (b = h.ref);
    for (g in h) o.call(h, g) && !l.hasOwnProperty(g) && (y[g] = h[g]);
    if (d && d.defaultProps) for (g in h = d.defaultProps, h) y[g] === void 0 && (y[g] = h[g]);
    return { $$typeof: t, type: d, key: w, ref: b, props: y, _owner: a.current };
  }
  return Ji.Fragment = i, Ji.jsx = c, Ji.jsxs = c, Ji;
}
var sm;
function M2() {
  return sm || (sm = 1, Du.exports = j2()), Du.exports;
}
var C = M2();
const R2 = (e) => e;
function D2(e, t = R2) {
  const i = Rs.useSyncExternalStore(
    e.subscribe,
    Rs.useCallback(() => t(e.getState()), [e, t]),
    Rs.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return Rs.useDebugValue(i), i;
}
const jy = N.createContext(null), N2 = zy();
function I2({
  store: e,
  children: t
}) {
  return /* @__PURE__ */ C.jsx(jy.Provider, { value: e, children: t });
}
function My() {
  return N.useContext(jy) ?? N2;
}
function Q(e) {
  return D2(My(), e);
}
function L2() {
  return My();
}
const $2 = (e) => e?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
function V2(e, t, i = []) {
  if (t == null)
    throw new Error("[lucide]: iconNode is required when icon name is used");
  return {
    name: $2(e),
    size: 24,
    node: t,
    ...i.length > 0 ? { aliases: i } : {}
  };
}
const F2 = (e) => {
  let t = "", i = !1;
  for (const o of e) {
    if (o === "-" || o === "_" || o <= " ") {
      i = t.length > 0;
      continue;
    }
    t.length === 0 ? t += o.toLowerCase() : t += i ? o.toUpperCase() : o, i = !1;
  }
  return t;
};
const B2 = (e) => {
  const t = F2(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
const hc = (...e) => e.filter((t, i, o) => !!t && t.trim() !== "" && o.indexOf(t) === i).join(" ").trim();
const pr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Nu(e) {
  return e != null;
}
function U2(e, t = {}) {
  const i = t.attributeNames ?? {}, o = (w) => i[w] ?? w, a = e.size ?? e.width ?? pr.width, l = e.size ?? e.height ?? pr.height, c = e.aliases?.filter((w) => typeof w == "string" && w.trim() !== "").map((w) => `lucide-${w}`) ?? [], d = [...e.name ? [`lucide-${e.name}`] : [], ...c], h = t.className?.split(" ").filter(Boolean) ?? [], m = t.includeDefaultClasses === !1 ? hc(...h) : hc("lucide", ...d, ...h), g = t.absoluteStrokeWidth ? Number(t.strokeWidth ?? pr["stroke-width"]) * Number(e.size ?? e.width ?? pr.width) / Number(t.size ?? t.width ?? pr.width) : t.strokeWidth ?? pr["stroke-width"];
  return [
    "svg",
    {
      ...Object.entries(pr).reduce((w, [b, k]) => (w[o(b)] = k, w), {}),
      ..."color" in t && t.color && {
        [o("stroke")]: t.color
      },
      ..."size" in t && Nu(t.size) && {
        [o("width")]: t.size,
        [o("height")]: t.size
      },
      ..."width" in t && Nu(t.width) && {
        [o("width")]: t.width
      },
      ..."height" in t && Nu(t.height) && {
        [o("height")]: t.height
      },
      [o("stroke-width")]: g,
      ...m && {
        [o("class")]: m
      },
      [o("viewBox")]: `0 0 ${a} ${l}`,
      ...t.hasA11yProp === !1 ? {
        [o("aria-hidden")]: "true"
      } : {},
      ..."attributes" in t && t.attributes
    },
    e.node.map((w) => {
      const [b, k, T] = w, S = t.nonScalingStroke ? { [o("vector-effect")]: "non-scaling-stroke", ...k } : k;
      return T ? [b, S, T] : [b, S];
    })
  ];
}
function Z2(e, t = {}) {
  return U2(e, {
    ...t,
    attributeNames: {
      ...t.attributeNames,
      class: "className",
      "stroke-width": "strokeWidth",
      "stroke-linecap": "strokeLinecap",
      "stroke-linejoin": "strokeLinejoin",
      "vector-effect": "vectorEffect"
    }
  });
}
const W2 = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
}, H2 = N.createContext({}), K2 = () => N.useContext(H2), G2 = N.forwardRef(
  ({
    color: e,
    size: t,
    width: i,
    height: o,
    strokeWidth: a,
    absoluteStrokeWidth: l,
    nonScalingStroke: c,
    className: d = "",
    children: h,
    iconNode: m = [],
    icon: g = {
      node: m,
      aliases: [],
      size: 24
    },
    ...y
  }, w) => {
    const {
      size: b = 24,
      strokeWidth: k = 2,
      absoluteStrokeWidth: T = !1,
      nonScalingStroke: S = !1,
      color: R = "currentColor",
      className: O = ""
    } = K2() ?? {}, I = !!h || W2(y), [D, K, Z = []] = Z2(g, {
      color: e ?? R,
      width: i ?? t ?? b,
      height: o ?? t ?? b,
      strokeWidth: a ?? k,
      absoluteStrokeWidth: l ?? T,
      nonScalingStroke: c ?? S,
      className: hc(O, d),
      hasA11yProp: I,
      attributes: y
    });
    return N.createElement(
      D,
      {
        ref: w,
        ...K
      },
      [
        ...Z.map(([z, W]) => N.createElement(z, W)),
        ...Array.isArray(h) ? h : [h]
      ]
    );
  }
);
function it(e, t = [], i = []) {
  const o = typeof e == "string" ? V2(e, t, i) : e, a = N.forwardRef(
    ({ className: l, ...c }, d) => N.createElement(G2, {
      ref: d,
      icon: o,
      className: l,
      ...c
    })
  );
  return o.name && (a.displayName = B2(o.name)), a;
}
const Ry = {
  name: "check",
  size: 24,
  node: [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]
};
Ry.node;
const Y2 = it(Ry);
const Dy = {
  name: "chevron-left",
  size: 24,
  node: [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]
};
Dy.node;
const X2 = it(Dy);
const Ny = {
  name: "chevron-right",
  size: 24,
  node: [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]
};
Ny.node;
const Q2 = it(Ny);
const Iy = {
  name: "columns-2",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
    ["path", { d: "M12 3v18", key: "108xh3" }]
  ],
  aliases: ["columns"]
};
Iy.node;
const J2 = it(Iy);
const Ly = {
  name: "copy",
  size: 24,
  node: [
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
  ]
};
Ly.node;
const q2 = it(Ly);
const $y = {
  name: "download",
  size: 24,
  node: [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
  ]
};
$y.node;
const eP = it($y);
const Vy = {
  name: "layout-grid",
  size: 24,
  node: [
    ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
    ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
    ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
    ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
  ]
};
Vy.node;
const tP = it(Vy);
const Fy = {
  name: "mail",
  size: 24,
  node: [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
  ]
};
Fy.node;
const nP = it(Fy);
const By = {
  name: "maximize",
  size: 24,
  node: [
    ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
    ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
    ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
    ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
  ]
};
By.node;
const rP = it(By);
const Uy = {
  name: "minimize",
  size: 24,
  node: [
    ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3", key: "hohbtr" }],
    ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3", key: "5jw1f3" }],
    ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3", key: "198tvr" }],
    ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3", key: "ph8mxp" }]
  ]
};
Uy.node;
const iP = it(Uy);
const Zy = {
  name: "printer",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
        key: "143wyd"
      }
    ],
    ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6", key: "1itne7" }],
    ["rect", { x: "6", y: "14", width: "12", height: "8", rx: "1", key: "1ue0tg" }]
  ]
};
Zy.node;
const oP = it(Zy);
const Wy = {
  name: "qr-code",
  size: 24,
  node: [
    ["rect", { width: "5", height: "5", x: "3", y: "3", rx: "1", key: "1tu5fj" }],
    ["rect", { width: "5", height: "5", x: "16", y: "3", rx: "1", key: "1v8r4q" }],
    ["rect", { width: "5", height: "5", x: "3", y: "16", rx: "1", key: "1x03jg" }],
    ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3", key: "177gqh" }],
    ["path", { d: "M21 21v.01", key: "ents32" }],
    ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7", key: "8crl2c" }],
    ["path", { d: "M3 12h.01", key: "nlz23k" }],
    ["path", { d: "M12 3h.01", key: "n36tog" }],
    ["path", { d: "M12 16v.01", key: "133mhm" }],
    ["path", { d: "M16 12h1", key: "1slzba" }],
    ["path", { d: "M21 12v.01", key: "1lwtk9" }],
    ["path", { d: "M12 21v-1", key: "1880an" }]
  ]
};
Wy.node;
const am = it(Wy);
const Hy = {
  name: "rectangle-vertical",
  size: 24,
  node: [["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2", key: "1oxtiu" }]]
};
Hy.node;
const sP = it(Hy);
const Ky = {
  name: "search",
  size: 24,
  node: [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
  ]
};
Ky.node;
const Gy = it(Ky);
const Yy = {
  name: "share-2",
  size: 24,
  node: [
    ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
    ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
    ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
    ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
    ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
  ]
};
Yy.node;
const aP = it(Yy);
const Xy = {
  name: "x",
  size: 24,
  node: [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]
};
Xy.node;
const ka = it(Xy);
const Qy = {
  name: "zoom-in",
  size: 24,
  node: [
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
    ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
    ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
  ]
};
Qy.node;
const lP = it(Qy);
const Jy = {
  name: "zoom-out",
  size: 24,
  node: [
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
    ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
  ]
};
Jy.node;
const uP = it(Jy), Qc = N.createContext({});
function Sr(e) {
  const t = N.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const cP = typeof window < "u", mo = cP ? N.useLayoutEffect : N.useEffect, Sa = /* @__PURE__ */ N.createContext(null);
function Jc(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function _r(e, t) {
  const i = e.indexOf(t);
  i > -1 && e.splice(i, 1);
}
const dn = (e, t, i) => i > t ? t : i < e ? e : i;
let bo = () => {
};
const Yn = {}, qy = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), ev = (e) => typeof e == "object" && e !== null, tv = (e) => /^0[^.\s]+$/u.test(e);
// @__NO_SIDE_EFFECTS__
function nv(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Bt = /* @__NO_SIDE_EFFECTS__ */ (e) => e, ko = (...e) => e.reduce((t, i) => (o) => i(t(o))), oi = /* @__NO_SIDE_EFFECTS__ */ (e, t, i) => {
  const o = t - e;
  return o ? (i - e) / o : 1;
};
class qc {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Jc(this.subscriptions, t), () => _r(this.subscriptions, t);
  }
  notify(t, i, o) {
    const a = this.subscriptions.length;
    if (a)
      if (a === 1)
        this.subscriptions[0](t, i, o);
      else
        for (let l = 0; l < a; l++) {
          const c = this.subscriptions[l];
          c && c(t, i, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Mt = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, Ft = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, rv = /* @__NO_SIDE_EFFECTS__ */ (e, t) => t ? e * (1e3 / t) : 0, fP = (e, t, i) => {
  const o = t - e;
  return ((i - e) % o + o) % o + e;
}, iv = (e, t, i) => (((1 - 3 * i + 3 * t) * e + (3 * i - 6 * t)) * e + 3 * t) * e, dP = 1e-7, pP = 12;
function hP(e, t, i, o, a) {
  let l, c, d = 0;
  do
    c = t + (i - t) / 2, l = iv(c, o, a) - e, l > 0 ? i = c : t = c;
  while (Math.abs(l) > dP && ++d < pP);
  return c;
}
// @__NO_SIDE_EFFECTS__
function So(e, t, i, o) {
  if (e === t && i === o)
    return Bt;
  const a = (l) => hP(l, 0, 1, e, i);
  return (l) => l === 0 || l === 1 ? l : iv(a(l), t, o);
}
const ov = /* @__NO_SIDE_EFFECTS__ */ (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, ef = /* @__NO_SIDE_EFFECTS__ */ (e) => (t) => 1 - e(1 - t), sv = /* @__PURE__ */ So(0.33, 1.53, 0.69, 0.99), tf = /* @__PURE__ */ ef(sv), av = /* @__PURE__ */ ov(tf), lv = (e) => e >= 1 ? 1 : (e *= 2) < 1 ? 0.5 * tf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), nf = (e) => 1 - Math.sin(Math.acos(e)), uv = /* @__PURE__ */ ef(nf), cv = /* @__PURE__ */ ov(nf), mP = /* @__PURE__ */ So(0.42, 0, 1, 1), gP = /* @__PURE__ */ So(0, 0, 0.58, 1), fv = /* @__PURE__ */ So(0.42, 0, 0.58, 1), dv = /* @__NO_SIDE_EFFECTS__ */ (e) => Array.isArray(e) && typeof e[0] != "number";
// @__NO_SIDE_EFFECTS__
function pv(e, t) {
  return /* @__PURE__ */ dv(e) ? e[fP(0, e.length, t)] : e;
}
const hv = /* @__NO_SIDE_EFFECTS__ */ (e) => Array.isArray(e) && typeof e[0] == "number", yP = {
  linear: Bt,
  easeIn: mP,
  easeInOut: fv,
  easeOut: gP,
  circIn: nf,
  circInOut: cv,
  circOut: uv,
  backIn: tf,
  backInOut: av,
  backOut: sv,
  anticipate: lv
}, vP = (e) => typeof e == "string", lm = (e) => {
  if (/* @__PURE__ */ hv(e)) {
    bo(e.length === 4);
    const [t, i, o, a] = e;
    return /* @__PURE__ */ So(t, i, o, a);
  } else if (vP(e))
    return yP[e];
  return e;
}, Bs = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function wP(e) {
  let t = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), o = !1, a = !1;
  const l = /* @__PURE__ */ new WeakSet();
  let c = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function d(m) {
    l.has(m) && (h.schedule(m), e()), m(c);
  }
  const h = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (m, g = !1, y = !1) => {
      const b = y && o ? t : i;
      return g && l.add(m), b.add(m), m;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (m) => {
      i.delete(m), l.delete(m);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (m) => {
      if (c = m, o) {
        a = !0;
        return;
      }
      o = !0;
      const g = t;
      t = i, i = g, t.forEach(d), t.clear(), o = !1, a && (a = !1, h.process(m));
    }
  };
  return h;
}
const xP = 40;
function mv(e, t) {
  let i = !1, o = !0;
  const a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, l = () => i = !0, c = Bs.reduce((I, D) => (I[D] = wP(l), I), {}), { setup: d, read: h, resolveKeyframes: m, preUpdate: g, update: y, preRender: w, render: b, postRender: k } = c, T = () => {
    const I = Yn.useManualTiming, D = I ? a.timestamp : performance.now();
    i = !1, I || (a.delta = o ? 1e3 / 60 : Math.max(Math.min(D - a.timestamp, xP), 1)), a.timestamp = D, a.isProcessing = !0, d.process(a), h.process(a), m.process(a), g.process(a), y.process(a), w.process(a), b.process(a), k.process(a), a.isProcessing = !1, i && t && (o = !1, e(T));
  }, S = () => {
    i = !0, o = !0, a.isProcessing || e(T);
  };
  return { schedule: Bs.reduce((I, D) => {
    const K = c[D];
    return I[D] = (Z, z = !1, W = !1) => (i || S(), K.schedule(Z, z, W)), I;
  }, {}), cancel: (I) => {
    for (let D = 0; D < Bs.length; D++)
      c[Bs[D]].cancel(I);
  }, state: a, steps: c };
}
const { schedule: je, cancel: _n, state: at, steps: Iu } = /* @__PURE__ */ mv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Bt, !0);
let Gs;
function bP() {
  Gs = void 0;
}
const vt = {
  now: () => (Gs === void 0 && vt.set(at.isProcessing || Yn.useManualTiming ? at.timestamp : performance.now()), Gs),
  set: (e) => {
    Gs = e, queueMicrotask(bP);
  }
}, gv = (e) => (t) => typeof t == "string" && t.startsWith(e), yv = /* @__PURE__ */ gv("--"), kP = /* @__PURE__ */ gv("var(--"), rf = (e) => kP(e) ? SP.test(e.split("/*")[0].trim()) : !1, SP = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function um(e) {
  return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--");
}
const ui = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, go = {
  ...ui,
  transform: (e) => dn(0, 1, e)
}, Us = {
  ...ui,
  default: 1
}, io = (e) => Math.round(e * 1e5) / 1e5, of = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function _P(e) {
  return e == null;
}
const PP = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, sf = (e, t) => (i) => !!(typeof i == "string" && PP.test(i) && i.startsWith(e) || t && !_P(i) && Object.prototype.hasOwnProperty.call(i, t)), vv = (e, t, i) => (o) => {
  if (typeof o != "string")
    return o;
  const [a, l, c, d] = o.match(of);
  return {
    [e]: parseFloat(a),
    [t]: parseFloat(l),
    [i]: parseFloat(c),
    alpha: d !== void 0 ? parseFloat(d) : 1
  };
}, EP = (e) => dn(0, 255, e), Lu = {
  ...ui,
  transform: (e) => Math.round(EP(e))
}, gr = {
  test: /* @__PURE__ */ sf("rgb", "red"),
  parse: /* @__PURE__ */ vv("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: i, alpha: o = 1 }) => "rgba(" + Lu.transform(e) + ", " + Lu.transform(t) + ", " + Lu.transform(i) + ", " + io(go.transform(o)) + ")"
};
function CP(e) {
  let t = "", i = "", o = "", a = "";
  return e.length > 5 ? (t = e.substring(1, 3), i = e.substring(3, 5), o = e.substring(5, 7), a = e.substring(7, 9)) : (t = e.substring(1, 2), i = e.substring(2, 3), o = e.substring(3, 4), a = e.substring(4, 5), t += t, i += i, o += o, a += a), {
    red: parseInt(t, 16),
    green: parseInt(i, 16),
    blue: parseInt(o, 16),
    alpha: a ? parseInt(a, 16) / 255 : 1
  };
}
const mc = {
  test: /* @__PURE__ */ sf("#"),
  parse: CP,
  transform: gr.transform
}, _o = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), kn = /* @__PURE__ */ _o("deg"), cn = /* @__PURE__ */ _o("%"), re = /* @__PURE__ */ _o("px"), TP = /* @__PURE__ */ _o("vh"), zP = /* @__PURE__ */ _o("vw"), cm = {
  ...cn,
  parse: (e) => cn.parse(e) / 100,
  transform: (e) => cn.transform(e * 100)
}, Jr = {
  test: /* @__PURE__ */ sf("hsl", "hue"),
  parse: /* @__PURE__ */ vv("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: i, alpha: o = 1 }) => "hsla(" + Math.round(e) + ", " + cn.transform(io(t)) + ", " + cn.transform(io(i)) + ", " + io(go.transform(o)) + ")"
}, Xe = {
  test: (e) => gr.test(e) || mc.test(e) || Jr.test(e),
  parse: (e) => gr.test(e) ? gr.parse(e) : Jr.test(e) ? Jr.parse(e) : mc.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? gr.transform(e) : Jr.transform(e),
  getAnimatableNone: (e) => {
    const t = Xe.parse(e);
    return t.alpha = 0, Xe.transform(t);
  }
}, AP = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function OP(e) {
  return isNaN(e) && typeof e == "string" && (e.match(of)?.length || 0) + (e.match(AP)?.length || 0) > 0;
}
const wv = "number", xv = "color", jP = "var", MP = "var(", fm = "${}", RP = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function si(e) {
  const t = e.toString(), i = [], o = {
    color: [],
    number: [],
    var: []
  }, a = [];
  let l = 0;
  const d = t.replace(RP, (h) => (Xe.test(h) ? (o.color.push(l), a.push(xv), i.push(Xe.parse(h))) : h.startsWith(MP) ? (o.var.push(l), a.push(jP), i.push(h)) : (o.number.push(l), a.push(wv), i.push(parseFloat(h))), ++l, fm)).split(fm);
  return { values: i, split: d, indexes: o, types: a };
}
function DP(e) {
  return si(e).values;
}
function bv({ split: e, types: t }) {
  const i = e.length;
  return (o) => {
    let a = "";
    for (let l = 0; l < i; l++)
      if (a += e[l], o[l] !== void 0) {
        const c = t[l];
        c === wv ? a += io(o[l]) : c === xv ? a += Xe.transform(o[l]) : a += o[l];
      }
    return a;
  };
}
function NP(e) {
  return bv(si(e));
}
const IP = (e) => typeof e == "number" ? 0 : Xe.test(e) ? Xe.getAnimatableNone(e) : e, LP = (e, t) => typeof e == "number" ? t?.trim().endsWith("/") ? e : 0 : IP(e);
function $P(e) {
  const t = si(e);
  return bv(t)(t.values.map((o, a) => LP(o, t.split[a])));
}
const tn = {
  test: OP,
  parse: DP,
  createTransformer: NP,
  getAnimatableNone: $P
};
function $u(e, t, i) {
  return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? e + (t - e) * 6 * i : i < 1 / 2 ? t : i < 2 / 3 ? e + (t - e) * (2 / 3 - i) * 6 : e;
}
function VP({ hue: e, saturation: t, lightness: i, alpha: o }) {
  e /= 360, t /= 100, i /= 100;
  let a = 0, l = 0, c = 0;
  if (!t)
    a = l = c = i;
  else {
    const d = i < 0.5 ? i * (1 + t) : i + t - i * t, h = 2 * i - d;
    a = $u(h, d, e + 1 / 3), l = $u(h, d, e), c = $u(h, d, e - 1 / 3);
  }
  return {
    red: Math.round(a * 255),
    green: Math.round(l * 255),
    blue: Math.round(c * 255),
    alpha: o
  };
}
function ua(e, t) {
  return (i) => i > 0 ? t : e;
}
const Oe = (e, t, i) => e + (t - e) * i, Vu = (e, t, i) => {
  const o = e * e, a = i * (t * t - o) + o;
  return a < 0 ? 0 : Math.sqrt(a);
}, FP = [mc, gr, Jr], BP = (e) => FP.find((t) => t.test(e));
function dm(e) {
  const t = BP(e);
  if (!t)
    return !1;
  let i = t.parse(e);
  return t === Jr && (i = VP(i)), i;
}
const pm = (e, t) => {
  const i = dm(e), o = dm(t);
  if (!i || !o)
    return ua(e, t);
  const a = { ...i };
  return (l) => (a.red = Vu(i.red, o.red, l), a.green = Vu(i.green, o.green, l), a.blue = Vu(i.blue, o.blue, l), a.alpha = Oe(i.alpha, o.alpha, l), gr.transform(a));
}, gc = /* @__PURE__ */ new Set(["none", "hidden"]);
function UP(e, t) {
  return gc.has(e) ? (i) => i <= 0 ? e : t : (i) => i >= 1 ? t : e;
}
function ZP(e, t) {
  return (i) => Oe(e, t, i);
}
function af(e) {
  return typeof e == "number" ? ZP : typeof e == "string" ? rf(e) ? ua : Xe.test(e) ? pm : KP : Array.isArray(e) ? kv : typeof e == "object" ? Xe.test(e) ? pm : WP : ua;
}
function kv(e, t) {
  const i = [...e], o = i.length, a = e.map((l, c) => af(l)(l, t[c]));
  return (l) => {
    for (let c = 0; c < o; c++)
      i[c] = a[c](l);
    return i;
  };
}
function WP(e, t) {
  const i = { ...e, ...t }, o = {};
  for (const a in i)
    e[a] !== void 0 && t[a] !== void 0 && (o[a] = af(e[a])(e[a], t[a]));
  return (a) => {
    for (const l in o)
      i[l] = o[l](a);
    return i;
  };
}
function HP(e, t) {
  const i = [], o = { color: 0, var: 0, number: 0 };
  for (let a = 0; a < t.values.length; a++) {
    const l = t.types[a], c = e.indexes[l][o[l]], d = e.values[c] ?? 0;
    i[a] = d, o[l]++;
  }
  return i;
}
const KP = (e, t) => {
  const i = tn.createTransformer(t), o = si(e), a = si(t);
  return o.indexes.var.length === a.indexes.var.length && o.indexes.color.length === a.indexes.color.length && o.indexes.number.length >= a.indexes.number.length ? gc.has(e) && !a.values.length || gc.has(t) && !o.values.length ? UP(e, t) : ko(kv(HP(o, a), a.values), i) : ua(e, t);
};
function Sv(e, t, i) {
  return typeof e == "number" && typeof t == "number" && typeof i == "number" ? Oe(e, t, i) : af(e)(e, t);
}
const GP = (e) => {
  const t = ({ timestamp: i }) => e(i);
  return {
    start: (i = !0) => je.update(t, i),
    stop: () => _n(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => at.isProcessing ? at.timestamp : vt.now()
  };
}, _v = (e, t, i = 10) => {
  let o = "";
  const a = Math.max(Math.round(t / i), 2);
  for (let l = 0; l < a; l++)
    o += Math.round(e(l / (a - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${o.substring(0, o.length - 2)})`;
}, lf = 2e4;
function uf(e, t = 50, i = lf, o) {
  let a = 0, l = e.next(a);
  for (; !l.done && a < i; )
    a += t, l = e.next(a);
  return a >= i ? 1 / 0 : a;
}
function Pv(e, t = 100, i) {
  const o = i({ ...e, keyframes: [0, t] }), a = Math.min(uf(o), lf);
  return {
    type: "keyframes",
    ease: (l) => o.next(a * l).value / t,
    duration: /* @__PURE__ */ Ft(a)
  };
}
const Be = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
};
function yc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const YP = 12;
function XP(e, t, i) {
  let o = i;
  for (let a = 1; a < YP; a++)
    o = o - e(o) / t(o);
  return o;
}
const Fu = 1e-3;
function QP({ duration: e = Be.duration, bounce: t = Be.bounce, velocity: i = Be.velocity, mass: o = Be.mass }) {
  let a, l, c = 1 - t;
  c = dn(Be.minDamping, Be.maxDamping, c), e = dn(Be.minDuration, Be.maxDuration, /* @__PURE__ */ Ft(e)), c < 1 ? (a = (m) => {
    const g = m * c, y = g * e, w = g - i, b = yc(m, c), k = Math.exp(-y);
    return Fu - w / b * k;
  }, l = (m) => {
    const y = m * c * e, w = y * i + i, b = c * c * m * m * e, k = Math.exp(-y), T = yc(m * m, c);
    return (-a(m) + Fu > 0 ? -1 : 1) * ((w - b) * k) / T;
  }) : (a = (m) => {
    const g = Math.exp(-m * e), y = (m - i) * e + 1;
    return -Fu + g * y;
  }, l = (m) => {
    const g = Math.exp(-m * e), y = (i - m) * (e * e);
    return g * y;
  });
  const d = 5 / e, h = XP(a, l, d);
  if (e = /* @__PURE__ */ Mt(e), isNaN(h))
    return {
      stiffness: Be.stiffness,
      damping: Be.damping,
      duration: e
    };
  {
    const m = h * h * o;
    return {
      stiffness: m,
      damping: c * 2 * Math.sqrt(o * m),
      duration: e
    };
  }
}
const JP = ["duration", "bounce"], qP = ["stiffness", "damping", "mass"];
function hm(e, t) {
  return t.some((i) => e[i] !== void 0);
}
function eE(e) {
  let t = {
    velocity: Be.velocity,
    stiffness: Be.stiffness,
    damping: Be.damping,
    mass: Be.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!hm(e, qP) && hm(e, JP))
    if (t.velocity = 0, e.visualDuration) {
      const i = e.visualDuration, o = 2 * Math.PI / (i * 1.2), a = o * o, l = 2 * dn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(a);
      t = {
        ...t,
        mass: Be.mass,
        stiffness: a,
        damping: l
      };
    } else {
      const i = QP({ ...e, velocity: 0 });
      t = {
        ...t,
        ...i,
        mass: Be.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function yo(e = Be.visualDuration, t = Be.bounce) {
  const i = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: o, restDelta: a } = i;
  const l = i.keyframes[0], c = i.keyframes[i.keyframes.length - 1], d = { done: !1, value: l }, { stiffness: h, damping: m, mass: g, duration: y, velocity: w, isResolvedFromDuration: b } = eE({
    ...i,
    velocity: -/* @__PURE__ */ Ft(i.velocity || 0)
  }), k = w || 0, T = m / (2 * Math.sqrt(h * g)), S = c - l, R = /* @__PURE__ */ Ft(Math.sqrt(h / g)), O = T * R, I = Math.abs(S) < 5;
  o || (o = I ? Be.restSpeed.granular : Be.restSpeed.default), a || (a = I ? Be.restDelta.granular : Be.restDelta.default);
  let D, K;
  if (T < 1) {
    const z = yc(R, T), W = (k + O * S) / z, G = O * W + S * z, le = O * S - W * z;
    let ue = -1, se = 0, ce = 0;
    const we = (_e) => {
      if (_e !== ue) {
        ue = _e;
        const Ce = Math.exp(-O * _e), ve = Math.sin(z * _e), V = Math.cos(z * _e);
        se = c - Ce * (W * ve + S * V), ce = Ce * (G * ve + le * V);
      }
    };
    D = (_e) => (we(_e), se), K = (_e) => (we(_e), ce);
  } else if (T === 1) {
    D = (W) => c - Math.exp(-R * W) * (S + (k + R * S) * W);
    const z = k + R * S;
    K = (W) => Math.exp(-R * W) * (R * z * W - k);
  } else {
    const z = R * Math.sqrt(T * T - 1);
    D = (ue) => {
      const se = Math.exp(-O * ue), ce = Math.min(z * ue, 300);
      return c - se * ((k + O * S) * Math.sinh(ce) + z * S * Math.cosh(ce)) / z;
    };
    const W = (k + O * S) / z, G = O * W - S * z, le = O * S - W * z;
    K = (ue) => {
      const se = Math.exp(-O * ue), ce = Math.min(z * ue, 300);
      return se * (G * Math.sinh(ce) + le * Math.cosh(ce));
    };
  }
  const Z = {
    calculatedDuration: b && y || null,
    velocity: (z) => /* @__PURE__ */ Mt(K(z)),
    next: (z) => {
      const W = D(z);
      if (b)
        d.done = z >= y;
      else {
        const G = /* @__PURE__ */ Mt(K(z));
        d.done = Math.abs(G) <= o && Math.abs(c - W) <= a;
      }
      return d.value = d.done ? c : W, d;
    },
    toString: () => {
      const z = Math.min(uf(Z), lf), W = _v((G) => Z.next(z * G).value, z, 30);
      return z + "ms " + W;
    },
    toTransition: () => {
    }
  };
  return Z;
}
yo.applyToOptions = (e) => {
  const t = Pv(e, 100, yo);
  return e.ease = t.ease, e.duration = /* @__PURE__ */ Mt(t.duration), e.type = "keyframes", e;
};
function vc({ keyframes: e, velocity: t = 0, power: i = 0.8, timeConstant: o = 325, bounceDamping: a = 10, bounceStiffness: l = 500, modifyTarget: c, min: d, max: h, restDelta: m = 0.5, restSpeed: g }) {
  const y = e[0], w = {
    done: !1,
    value: y
  }, b = (z) => z < d || z > h, k = (z) => d === void 0 ? h : h === void 0 || Math.abs(d - z) < Math.abs(h - z) ? d : h;
  let T = i * t;
  const S = y + T, R = c === void 0 ? S : c(S);
  R !== S && (T = R - y);
  const O = (z) => -T * Math.exp(-z / o), I = (z) => {
    const W = O(z);
    w.done = Math.abs(W) <= m, w.value = w.done ? R : R + W;
  };
  let D, K;
  const Z = (z) => {
    b(w.value) && (D = z, K = yo({
      keyframes: [w.value, k(w.value)],
      /**
       * The friction curve is target + calcDelta(t), so its exact
       * derivative is -calcDelta(t) / timeConstant in units/ms,
       * converted here to the units/second expected by spring.
       */
      velocity: -O(z) / o * 1e3,
      damping: a,
      stiffness: l,
      restDelta: m,
      restSpeed: g
    }));
  };
  return Z(0), {
    calculatedDuration: null,
    next: (z) => {
      let W = !1;
      return !K && D === void 0 && (W = !0, I(z), Z(z)), D !== void 0 && z >= D ? K.next(z - D) : (!W && I(z), w);
    }
  };
}
function tE(e, t, i) {
  const o = [], a = i || Yn.mix || Sv, l = e.length - 1;
  for (let c = 0; c < l; c++) {
    let d = a(e[c], e[c + 1]);
    if (t) {
      const h = Array.isArray(t) ? t[c] || Bt : t;
      d = ko(h, d);
    }
    o.push(d);
  }
  return o;
}
function Ev(e, t, { clamp: i = !0, ease: o, mixer: a } = {}) {
  const l = e.length;
  if (bo(l === t.length), l === 1)
    return () => t[0];
  if (l === 2 && t[0] === t[1])
    return () => t[1];
  const c = e[0] === e[1];
  e[0] > e[l - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const d = tE(t, o, a), h = d.length, m = (g) => {
    if (c && g < e[0])
      return t[0];
    let y = 0;
    if (h > 1)
      for (; y < e.length - 2 && !(g < e[y + 1]); y++)
        ;
    const w = /* @__PURE__ */ oi(e[y], e[y + 1], g);
    return d[y](w);
  };
  return i ? (g) => m(dn(e[0], e[l - 1], g)) : m;
}
function Cv(e, t) {
  const i = e[e.length - 1];
  for (let o = 1; o <= t; o++) {
    const a = /* @__PURE__ */ oi(0, t, o);
    e.push(Oe(i, 1, a));
  }
}
function Tv(e) {
  const t = [0];
  return Cv(t, e.length - 1), t;
}
function nE(e, t) {
  return e.map((i) => i * t);
}
function rE(e, t) {
  return e.map(() => t || fv).splice(0, e.length - 1);
}
function oo({ duration: e = 300, keyframes: t, times: i, ease: o = "easeInOut" }) {
  const a = /* @__PURE__ */ dv(o) ? o.map(lm) : lm(o), l = {
    done: !1,
    value: t[0]
  }, c = nE(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    i && i.length === t.length ? i : Tv(t),
    e
  ), d = Ev(c, t, {
    ease: Array.isArray(a) ? a : rE(t, a)
  });
  return {
    calculatedDuration: e,
    next: (h) => (l.value = d(h), l.done = h >= e, l)
  };
}
const iE = 5;
function oE(e, t, i) {
  const o = Math.max(t - iE, 0);
  return /* @__PURE__ */ rv(i - e(o), t - o);
}
const sE = (e) => e !== null;
function _a(e, { repeat: t, repeatType: i = "loop" }, o, a = 1) {
  const l = e.filter(sE), d = a < 0 || t && i !== "loop" && t % 2 === 1 ? 0 : l.length - 1;
  return !d || o === void 0 ? l[d] : o;
}
const aE = {
  decay: vc,
  inertia: vc,
  tween: oo,
  keyframes: oo,
  spring: yo
};
function zv(e) {
  typeof e.type == "string" && (e.type = aE[e.type]);
}
class cf {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(t, i) {
    return this.finished.then(t, i);
  }
}
const lE = (e) => e / 100;
class ca extends cf {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      const { motionValue: i } = this.options;
      i && i.updatedAt !== vt.now() && this.tick(vt.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    zv(t);
    const { type: i = oo, repeat: o = 0, repeatDelay: a = 0, repeatType: l, velocity: c = 0 } = t;
    let { keyframes: d } = t;
    const h = i || oo;
    h !== oo && typeof d[0] != "number" && (this.mixKeyframes = ko(lE, Sv(d[0], d[1])), d = [0, 100]);
    const m = h({ ...t, keyframes: d });
    l === "mirror" && (this.mirroredGenerator = h({
      ...t,
      keyframes: [...d].reverse(),
      velocity: -c
    })), m.calculatedDuration === null && (m.calculatedDuration = uf(m));
    const { calculatedDuration: g } = m;
    this.calculatedDuration = g, this.resolvedDuration = g + a, this.totalDuration = this.resolvedDuration * (o + 1) - a, this.generator = m;
  }
  updateTime(t) {
    const i = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = i;
  }
  tick(t, i = !1) {
    const { generator: o, totalDuration: a, mixKeyframes: l, mirroredGenerator: c, resolvedDuration: d, calculatedDuration: h } = this;
    if (this.startTime === null)
      return o.next(0);
    const { delay: m = 0, keyframes: g, repeat: y, repeatType: w, repeatDelay: b, type: k, onUpdate: T, finalKeyframe: S } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - a / this.speed, this.startTime)), i ? this.currentTime = t : this.updateTime(t);
    const R = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1), O = this.playbackSpeed >= 0 ? R < 0 : R > a;
    this.currentTime = Math.max(R, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = a);
    let I = this.currentTime, D = o;
    if (y) {
      const W = Math.min(this.currentTime, a) / d;
      let G = Math.floor(W), le = W % 1;
      !le && W >= 1 && (le = 1), le === 1 && G--, G = Math.min(G, y + 1), G % 2 && (w === "reverse" ? (le = 1 - le, b && (le -= b / d)) : w === "mirror" && (D = c)), I = dn(0, 1, le) * d;
    }
    let K;
    O ? (this.delayState.value = g[0], K = this.delayState) : K = D.next(I), l && !O && (K.value = l(K.value));
    let { done: Z } = K;
    !O && h !== null && (Z = this.playbackSpeed >= 0 ? this.currentTime >= a : this.currentTime <= 0);
    const z = this.holdTime === null && (this.state === "finished" || this.state === "running" && Z);
    return z && k !== vc && (K.value = _a(g, this.options, S, this.speed)), T && T(K.value), z && this.finish(), K;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, i) {
    return this.finished.then(t, i);
  }
  get duration() {
    return /* @__PURE__ */ Ft(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Ft(t);
  }
  get time() {
    return /* @__PURE__ */ Ft(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ Mt(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = t, this.tick(t));
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    const t = this.currentTime;
    if (t <= 0)
      return this.options.velocity || 0;
    if (this.generator.velocity)
      return this.generator.velocity(t);
    const i = this.generator.next(t).value;
    return oE((o) => this.generator.next(o).value, t, i);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const i = this.playbackSpeed !== t;
    i && this.driver && this.updateTime(vt.now()), this.playbackSpeed = t, i && this.driver && (this.time = /* @__PURE__ */ Ft(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: t = GP, startTime: i } = this.options;
    this.driver || (this.driver = t((a) => this.tick(a))), this.options.onPlay?.();
    const o = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = o) : this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime || (this.startTime = i ?? o), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(vt.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
  attachTimeline(t) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), t.observe(this);
  }
}
function uE(e) {
  for (let t = 1; t < e.length; t++)
    e[t] ?? (e[t] = e[t - 1]);
}
const yr = (e) => e * 180 / Math.PI, wc = (e) => {
  const t = yr(Math.atan2(e[1], e[0]));
  return xc(t);
}, cE = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: wc,
  rotateZ: wc,
  skewX: (e) => yr(Math.atan(e[1])),
  skewY: (e) => yr(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, xc = (e) => (e = e % 360, e < 0 && (e += 360), e), mm = wc, gm = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), ym = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), fE = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: gm,
  scaleY: ym,
  scale: (e) => (gm(e) + ym(e)) / 2,
  rotateX: (e) => xc(yr(Math.atan2(e[6], e[5]))),
  rotateY: (e) => xc(yr(Math.atan2(-e[2], e[0]))),
  rotateZ: mm,
  rotate: mm,
  skewX: (e) => yr(Math.atan(e[4])),
  skewY: (e) => yr(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function bc(e) {
  return e.includes("scale") ? 1 : 0;
}
function kc(e, t) {
  if (!e || e === "none")
    return bc(t);
  const i = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let o, a;
  if (i)
    o = fE, a = i;
  else {
    const d = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    o = cE, a = d;
  }
  if (!a)
    return bc(t);
  const l = o[t], c = a[1].split(",").map(pE);
  return typeof l == "function" ? l(c) : c[l];
}
const dE = (e, t) => {
  const { transform: i = "none" } = getComputedStyle(e);
  return kc(i, t);
};
function pE(e) {
  return parseFloat(e.trim());
}
const ci = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], fi = /* @__PURE__ */ new Set([...ci, "pathRotation"]), vm = (e) => e === ui || e === re, hE = /* @__PURE__ */ new Set(["x", "y", "z"]), mE = ci.filter((e) => !hE.has(e));
function gE(e) {
  const t = [];
  return mE.forEach((i) => {
    const o = e.getValue(i);
    o !== void 0 && (t.push([i, o.get()]), o.set(i.startsWith("scale") ? 1 : 0));
  }), t;
}
const Kn = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: i = "0", boxSizing: o }) => {
    const a = e.max - e.min;
    return o === "border-box" ? a : a - parseFloat(t) - parseFloat(i);
  },
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: i = "0", boxSizing: o }) => {
    const a = e.max - e.min;
    return o === "border-box" ? a : a - parseFloat(t) - parseFloat(i);
  },
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: (e, { transform: t }) => kc(t, "x"),
  y: (e, { transform: t }) => kc(t, "y")
};
Kn.translateX = Kn.x;
Kn.translateY = Kn.y;
const wr = /* @__PURE__ */ new Set();
let Sc = !1, _c = !1, Pc = !1;
function Av() {
  if (_c) {
    const e = Array.from(wr).filter((o) => o.needsMeasurement), t = new Set(e.map((o) => o.element)), i = /* @__PURE__ */ new Map();
    t.forEach((o) => {
      const a = gE(o);
      a.length && (i.set(o, a), o.render());
    }), e.forEach((o) => o.measureInitialState()), t.forEach((o) => {
      o.render();
      const a = i.get(o);
      a && a.forEach(([l, c]) => {
        o.getValue(l)?.set(c);
      });
    }), e.forEach((o) => o.measureEndState()), e.forEach((o) => {
      o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY);
    });
  }
  _c = !1, Sc = !1, wr.forEach((e) => e.complete(Pc)), wr.clear();
}
function Ov() {
  wr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (_c = !0);
  });
}
function yE() {
  Pc = !0, Ov(), Av(), Pc = !1;
}
class ff {
  constructor(t, i, o, a, l, c = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = i, this.name = o, this.motionValue = a, this.element = l, this.isAsync = c;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (wr.add(this), Sc || (Sc = !0, je.read(Ov), je.resolveKeyframes(Av))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: i, element: o, motionValue: a } = this;
    if (t[0] === null) {
      const l = a?.get(), c = t[t.length - 1];
      if (l !== void 0)
        t[0] = l;
      else if (o && i) {
        const d = o.readValue(i, c);
        d != null && (t[0] = d);
      }
      t[0] === void 0 && (t[0] = c), a && l === void 0 && a.set(t[0]);
    }
    uE(t);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(t = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), wr.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (wr.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const vE = (e) => e.startsWith("--");
function jv(e, t, i) {
  vE(t) ? e.style.setProperty(t, i) : e.style[t] = i;
}
const wE = {};
function Mv(e, t) {
  const i = /* @__PURE__ */ nv(e);
  return () => wE[t] ?? i();
}
const xE = /* @__PURE__ */ Mv(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Rv = /* @__PURE__ */ Mv(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), no = ([e, t, i, o]) => `cubic-bezier(${e}, ${t}, ${i}, ${o})`, wm = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ no([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ no([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ no([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ no([0.33, 1.53, 0.69, 0.99])
};
function Dv(e, t) {
  if (e)
    return typeof e == "function" ? Rv() ? _v(e, t) : "ease-out" : /* @__PURE__ */ hv(e) ? no(e) : Array.isArray(e) ? e.map((i) => Dv(i, t) || wm.easeOut) : wm[e];
}
function bE(e, t, i, { delay: o = 0, duration: a = 300, repeat: l = 0, repeatType: c = "loop", ease: d = "easeOut", times: h } = {}, m = void 0) {
  const g = {
    [t]: i
  };
  h && (g.offset = h);
  const y = Dv(d, a);
  Array.isArray(y) && (g.easing = y);
  const w = {
    delay: o,
    duration: a,
    easing: Array.isArray(y) ? "linear" : y,
    fill: "both",
    iterations: l + 1,
    direction: c === "reverse" ? "alternate" : "normal"
  };
  return m && (w.pseudoElement = m), e.animate(g, w);
}
function df(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function kE({ type: e, ...t }) {
  return df(e) && Rv() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class Nv extends cf {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !t)
      return;
    const { element: i, name: o, keyframes: a, pseudoElement: l, allowFlatten: c = !1, finalKeyframe: d, onComplete: h } = t;
    this.isPseudoElement = !!l, this.allowFlatten = c, this.options = t, bo(typeof t.type != "string");
    const m = kE(t);
    this.animation = bE(i, o, a, m, l), m.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !l) {
        const g = _a(a, this.options, d, this.speed);
        this.updateMotionValue && this.updateMotionValue(g), jv(i, o, g), this.animation.cancel();
      }
      h?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    const t = this.options?.element;
    !this.isPseudoElement && t?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    const t = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ Ft(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Ft(t);
  }
  get time() {
    return /* @__PURE__ */ Ft(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    const i = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ Mt(t), i && this.animation.pause();
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), this.animation.playbackRate = t;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(t) {
    this.manualStartTime = this.animation.startTime = t;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: t, rangeStart: i, rangeEnd: o, observe: a }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, t && xE() ? (this.animation.timeline = t, i && (this.animation.rangeStart = i), o && (this.animation.rangeEnd = o), Bt) : a(this);
  }
}
const Iv = {
  anticipate: lv,
  backInOut: av,
  circInOut: cv
};
function SE(e) {
  return e in Iv;
}
function _E(e) {
  typeof e.ease == "string" && SE(e.ease) && (e.ease = Iv[e.ease]);
}
const Bu = 10;
class PE extends Nv {
  constructor(t) {
    _E(t), zv(t), super(t), t.startTime !== void 0 && t.autoplay !== !1 && (this.startTime = t.startTime), this.options = t;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read committed styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(t) {
    const { motionValue: i, onUpdate: o, onComplete: a, element: l, ...c } = this.options;
    if (!i)
      return;
    if (t !== void 0) {
      i.set(t);
      return;
    }
    const d = new ca({
      ...c,
      autoplay: !1
    }), h = Math.max(Bu, vt.now() - this.startTime), m = dn(0, Bu, h - Bu), g = d.sample(h).value, { name: y } = this.options;
    l && y && jv(l, y, g), i.setWithVelocity(d.sample(Math.max(0, h - m)).value, g, m), d.stop();
  }
}
const xm = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(tn.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function EE(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let i = 0; i < e.length; i++)
    if (e[i] !== t)
      return !0;
}
function CE(e, t, i, o) {
  const a = e[0];
  if (a === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const l = e[e.length - 1], c = xm(a, t), d = xm(l, t);
  return !c || !d ? !1 : EE(e) || (i === "spring" || df(i)) && o;
}
function Ec(e) {
  e.duration = 0, e.type = "keyframes";
}
const Lv = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), TE = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function zE(e) {
  for (let t = 0; t < e.length; t++)
    if (typeof e[t] == "string" && TE.test(e[t]))
      return !0;
  return !1;
}
const AE = /* @__PURE__ */ new Set([
  "color",
  "backgroundColor",
  "outlineColor",
  "fill",
  "stroke",
  "borderColor",
  "borderTopColor",
  "borderRightColor",
  "borderBottomColor",
  "borderLeftColor"
]), OE = /* @__PURE__ */ nv(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function jE(e) {
  const { motionValue: t, name: i, repeatDelay: o, repeatType: a, damping: l, type: c, keyframes: d } = e, h = t?.owner?.current;
  if (!(h instanceof HTMLElement) && !(h instanceof SVGElement))
    return !1;
  const { onUpdate: m, transformTemplate: g } = t.owner.getProps();
  return OE() && i && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (Lv.has(i) || AE.has(i) && zE(d)) && (i !== "transform" || !g) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !m && !o && a !== "mirror" && l !== 0 && c !== "inertia";
}
const ME = 40;
class RE extends cf {
  constructor({ autoplay: t = !0, delay: i = 0, type: o = "keyframes", repeat: a = 0, repeatDelay: l = 0, repeatType: c = "loop", keyframes: d, name: h, motionValue: m, element: g, ...y }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = vt.now();
    const w = {
      autoplay: t,
      delay: i,
      type: o,
      repeat: a,
      repeatDelay: l,
      repeatType: c,
      name: h,
      motionValue: m,
      element: g,
      ...y
    }, b = g?.KeyframeResolver || ff;
    this.keyframeResolver = new b(d, (k, T, S) => this.onKeyframesResolved(k, T, w, !S), h, m, g), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(t, i, o, a) {
    this.keyframeResolver = void 0;
    const { name: l, type: c, velocity: d, delay: h, isHandoff: m, onUpdate: g } = o;
    this.resolvedAt = vt.now();
    let y = !0;
    CE(t, l, c, d) || (y = !1, (Yn.instantAnimations || !h) && g?.(_a(t, o, i)), t[0] = t[t.length - 1], Ec(o), o.repeat = 0);
    const b = {
      startTime: a ? this.resolvedAt ? this.resolvedAt - this.createdAt > ME ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: i,
      ...o,
      keyframes: t
    }, k = y && !m && jE(b), T = b.motionValue?.owner?.current;
    let S;
    if (k)
      try {
        S = new PE({
          ...b,
          element: T
        });
      } catch {
        S = new ca(b);
      }
    else
      S = new ca(b);
    S.finished.then(() => {
      this.notifyFinished();
    }).catch(Bt), this.pendingTimeline && (this.stopTimeline = S.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = S;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, i) {
    return this.finished.finally(t).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), yE()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
class DE {
  constructor(t) {
    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((t) => t.finished));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, i) {
    for (let o = 0; o < this.animations.length; o++)
      this.animations[o][t] = i;
  }
  attachTimeline(t) {
    const i = this.animations.map((o) => o.attachTimeline(t));
    return () => {
      i.forEach((o, a) => {
        o && o(), this.animations[a].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get state() {
    return this.getAll("state");
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    return bm(this.animations, "duration");
  }
  get iterationDuration() {
    return bm(this.animations, "iterationDuration");
  }
  runAll(t) {
    this.animations.forEach((i) => i[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function bm(e, t) {
  let i = 0;
  for (let o = 0; o < e.length; o++) {
    const a = e[o][t];
    a !== null && a > i && (i = a);
  }
  return i;
}
class NE extends DE {
  then(t, i) {
    return this.finished.finally(t).then(() => {
    });
  }
}
function $v(e, t, i, o = 0, a = 1) {
  const l = Array.from(e).sort((m, g) => m.sortNodePosition(g)).indexOf(t), c = e.size, d = (c - 1) * o;
  return typeof i == "function" ? i(l, c) : a === 1 ? l * o : d - l * o;
}
const km = 30, IE = (e) => !isNaN(parseFloat(e)), so = {
  current: void 0
};
class LE {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(t, i = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (o) => {
      const a = vt.now();
      if (this.updatedAt !== a && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(o), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const l of this.dependents)
          l.dirty();
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = i.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = vt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = IE(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return this.on("change", t);
  }
  on(t, i) {
    this.events[t] || (this.events[t] = new qc());
    const o = this.events[t].add(i);
    return t === "change" ? () => {
      o(), je.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : o;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(t, i) {
    this.passiveEffect = t, this.stopPassiveEffect = i;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t) {
    this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t);
  }
  setWithVelocity(t, i, o) {
    this.set(i), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - o;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, i = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, i && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return so.current && so.current.push(this), this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = vt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > km)
      return 0;
    const i = Math.min(this.updatedAt - this.prevUpdatedAt, km);
    return /* @__PURE__ */ rv(parseFloat(this.current) - parseFloat(this.prevFrameValue), i);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(t) {
    return this.stop(), new Promise((i) => {
      this.hasAnimated = !0, this.animation = t(i), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Pn(e, t) {
  return new LE(e, t);
}
function Vv(e, t) {
  if (e?.inherit && t) {
    const { inherit: i, ...o } = e;
    return { ...t, ...o };
  }
  return e;
}
function Pa(e, t) {
  const i = e?.[t] ?? e?.default ?? e;
  return i !== e ? Vv(i, e) : i;
}
const $E = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, VE = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), FE = {
  type: "keyframes",
  duration: 0.8
}, BE = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, UE = (e, { keyframes: t }) => t.length > 2 ? FE : fi.has(e) ? e.startsWith("scale") ? VE(t[1]) : $E : BE, ZE = /* @__PURE__ */ new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed"
]);
function WE(e) {
  for (const t in e)
    if (!ZE.has(t))
      return !0;
  return !1;
}
const Ea = (e, t, i, o = {}, a, l) => (c) => {
  const d = Pa(o, e) || {}, h = d.delay || o.delay || 0;
  let { elapsed: m = 0 } = o;
  m = m - /* @__PURE__ */ Mt(h);
  const g = {
    keyframes: Array.isArray(i) ? i : [null, i],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...d,
    delay: -m,
    onUpdate: (w) => {
      t.set(w), d.onUpdate && d.onUpdate(w);
    },
    onComplete: () => {
      c(), d.onComplete && d.onComplete();
    },
    name: e,
    motionValue: t,
    element: l ? void 0 : a
  };
  WE(d) || Object.assign(g, UE(e, g)), g.duration && (g.duration = /* @__PURE__ */ Mt(g.duration)), g.repeatDelay && (g.repeatDelay = /* @__PURE__ */ Mt(g.repeatDelay)), g.from !== void 0 && (g.keyframes[0] = g.from);
  let y = !1;
  if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (Ec(g), g.delay === 0 && (y = !0)), (Yn.instantAnimations || Yn.skipAnimations || a?.shouldSkipAnimations || d.skipAnimations) && (y = !0, Ec(g), g.delay = 0), g.allowFlatten = !d.type && !d.ease, y && !l && t.get() !== void 0) {
    const w = _a(g.keyframes, d);
    if (w !== void 0) {
      je.update(() => {
        g.onUpdate(w), g.onComplete();
      });
      return;
    }
  }
  return d.isSync ? new ca(g) : new RE(g);
}, HE = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function KE(e) {
  const t = HE.exec(e);
  if (!t)
    return [,];
  const [, i, o, a] = t;
  return [`--${i ?? o}`, a];
}
function Fv(e, t, i = 1) {
  const [o, a] = KE(e);
  if (!o)
    return;
  const l = window.getComputedStyle(t).getPropertyValue(o);
  if (l) {
    const c = l.trim();
    return qy(c) ? parseFloat(c) : c;
  }
  return rf(a) ? Fv(a, t, i + 1) : a;
}
function Sm(e) {
  const t = [{}, {}];
  return e?.values.forEach((i, o) => {
    t[0][o] = i.get(), t[1][o] = i.getVelocity();
  }), t;
}
function pf(e, t, i, o) {
  if (typeof t == "function") {
    const [a, l] = Sm(o);
    t = t(i !== void 0 ? i : e.custom, a, l);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [a, l] = Sm(o);
    t = t(i !== void 0 ? i : e.custom, a, l);
  }
  return t;
}
function xr(e, t, i) {
  const o = e.getProps();
  return pf(o, t, i !== void 0 ? i : o.custom, e);
}
const Bv = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...ci
]), Cc = (e) => Array.isArray(e);
function GE(e, t, i) {
  e.hasValue(t) ? e.getValue(t).set(i) : e.addValue(t, Pn(i));
}
function YE(e) {
  return Cc(e) ? e[e.length - 1] || 0 : e;
}
function XE(e, t) {
  const i = xr(e, t);
  let { transitionEnd: o = {}, transition: a = {}, ...l } = i || {};
  l = { ...l, ...o };
  for (const c in l) {
    const d = YE(l[c]);
    GE(e, c, d);
  }
}
const et = (e) => !!(e && e.getVelocity);
function QE(e) {
  return !!(et(e) && e.add);
}
function Tc(e, t) {
  const i = e.getValue("willChange");
  if (QE(i))
    return i.add(t);
  if (!i && Yn.WillChange) {
    const o = new Yn.WillChange("auto");
    e.addValue("willChange", o), o.add(t);
  }
}
function hf(e) {
  return e.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
}
const JE = "framerAppearId", Uv = "data-" + hf(JE);
function Zv(e) {
  return e.props[Uv];
}
const qE = typeof window < "u";
function eC({ protectedKeys: e, needsAnimating: t }, i) {
  const o = e.hasOwnProperty(i) && t[i] !== !0;
  return t[i] = !1, o;
}
function mf(e, t, { delay: i = 0, transitionOverride: o, type: a } = {}) {
  let { transition: l, transitionEnd: c, ...d } = t;
  const h = e.getDefaultTransition();
  l = l ? Vv(l, h) : h;
  const m = l?.reduceMotion, g = l?.skipAnimations;
  o && (l = o);
  const y = [], w = a && e.animationState && e.animationState.getState()[a], b = l?.path;
  b && b.animateVisualElement(e, d, l, i, y);
  for (const k in d) {
    const T = e.getValue(k, e.latestValues[k] ?? null), S = d[k];
    if (S === void 0 || w && eC(w, k))
      continue;
    const R = {
      delay: i,
      ...Pa(l || {}, k)
    };
    g && (R.skipAnimations = !0);
    const O = T.get();
    if (O !== void 0 && !T.isAnimating() && !Array.isArray(S) && S === O && !R.velocity) {
      je.update(() => T.set(S));
      continue;
    }
    let I = !1;
    if (qE && window.MotionHandoffAnimation) {
      const Z = Zv(e);
      if (Z) {
        const z = window.MotionHandoffAnimation(Z, k, je);
        z !== null && (R.startTime = z, I = !0);
      }
    }
    Tc(e, k);
    const D = m ?? e.shouldReduceMotion;
    T.start(Ea(k, T, S, D && Bv.has(k) ? { type: !1 } : R, e, I));
    const K = T.animation;
    K && y.push(K);
  }
  if (c) {
    const k = () => je.update(() => {
      c && XE(e, c);
    });
    y.length ? Promise.all(y).then(k) : k();
  }
  return y;
}
function zc(e, t, i = {}) {
  const o = xr(e, t, i.type === "exit" ? e.presenceContext?.custom : void 0);
  let { transition: a = e.getDefaultTransition() || {} } = o || {};
  i.transitionOverride && (a = i.transitionOverride);
  const l = o ? () => Promise.all(mf(e, o, i)) : () => Promise.resolve(), c = e.variantChildren && e.variantChildren.size ? (h = 0) => {
    const { delayChildren: m = 0, staggerChildren: g, staggerDirection: y } = a;
    return tC(e, t, h, m, g, y, i);
  } : () => Promise.resolve(), { when: d } = a;
  if (d) {
    const [h, m] = d === "beforeChildren" ? [l, c] : [c, l];
    return h().then(() => m());
  } else
    return Promise.all([l(), c(i.delay)]);
}
function tC(e, t, i = 0, o = 0, a = 0, l = 1, c) {
  const d = [];
  for (const h of e.variantChildren)
    h.notify("AnimationStart", t), d.push(zc(h, t, {
      ...c,
      delay: i + (typeof o == "function" ? 0 : o) + $v(e.variantChildren, h, o, a, l)
    }).then(() => h.notify("AnimationComplete", t)));
  return Promise.all(d);
}
function nC(e, t, i = {}) {
  e.notify("AnimationStart", t);
  let o;
  if (Array.isArray(t)) {
    const a = t.map((l) => zc(e, l, i));
    o = Promise.all(a);
  } else if (typeof t == "string")
    o = zc(e, t, i);
  else {
    const a = typeof t == "function" ? xr(e, t, i.custom) : t;
    o = Promise.all(mf(e, a, i));
  }
  return o.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const rC = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Wv = (e) => (t) => t.test(e), Hv = [ui, re, cn, kn, zP, TP, rC], _m = (e) => Hv.find(Wv(e));
function iC(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || tv(e) : !0;
}
const oC = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function sC(e) {
  const [t, i] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [o] = i.match(of) || [];
  if (!o)
    return e;
  const a = i.replace(o, "");
  let l = oC.has(t) ? 1 : 0;
  return o !== i && (l *= 100), t + "(" + l + a + ")";
}
const aC = /\b([a-z-]*)\(.*?\)/gu, Ac = {
  ...tn,
  getAnimatableNone: (e) => {
    const t = e.match(aC);
    return t ? t.map(sC).join(" ") : e;
  }
}, Oc = {
  ...tn,
  getAnimatableNone: (e) => {
    const t = tn.parse(e);
    return tn.createTransformer(e)(t.map((o) => typeof o == "number" ? 0 : typeof o == "object" ? { ...o, alpha: 1 } : o));
  }
}, Pm = {
  ...ui,
  transform: Math.round
}, lC = {
  rotate: kn,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: kn,
  rotateX: kn,
  rotateY: kn,
  rotateZ: kn,
  scale: Us,
  scaleX: Us,
  scaleY: Us,
  scaleZ: Us,
  skew: kn,
  skewX: kn,
  skewY: kn,
  distance: re,
  translateX: re,
  translateY: re,
  translateZ: re,
  x: re,
  y: re,
  z: re,
  perspective: re,
  transformPerspective: re,
  opacity: go,
  originX: cm,
  originY: cm,
  originZ: re
}, fa = {
  // Border props
  borderWidth: re,
  borderTopWidth: re,
  borderRightWidth: re,
  borderBottomWidth: re,
  borderLeftWidth: re,
  borderRadius: re,
  borderTopLeftRadius: re,
  borderTopRightRadius: re,
  borderBottomRightRadius: re,
  borderBottomLeftRadius: re,
  // Positioning props
  width: re,
  maxWidth: re,
  height: re,
  maxHeight: re,
  top: re,
  right: re,
  bottom: re,
  left: re,
  inset: re,
  insetBlock: re,
  insetBlockStart: re,
  insetBlockEnd: re,
  insetInline: re,
  insetInlineStart: re,
  insetInlineEnd: re,
  // Spacing props
  padding: re,
  paddingTop: re,
  paddingRight: re,
  paddingBottom: re,
  paddingLeft: re,
  paddingBlock: re,
  paddingBlockStart: re,
  paddingBlockEnd: re,
  paddingInline: re,
  paddingInlineStart: re,
  paddingInlineEnd: re,
  margin: re,
  marginTop: re,
  marginRight: re,
  marginBottom: re,
  marginLeft: re,
  marginBlock: re,
  marginBlockStart: re,
  marginBlockEnd: re,
  marginInline: re,
  marginInlineStart: re,
  marginInlineEnd: re,
  // Typography
  fontSize: re,
  // Misc
  backgroundPositionX: re,
  backgroundPositionY: re,
  ...lC,
  zIndex: Pm,
  // SVG
  fillOpacity: go,
  strokeOpacity: go,
  numOctaves: Pm
}, uC = {
  ...fa,
  // Color props
  color: Xe,
  backgroundColor: Xe,
  outlineColor: Xe,
  fill: Xe,
  stroke: Xe,
  // Border props
  borderColor: Xe,
  borderTopColor: Xe,
  borderRightColor: Xe,
  borderBottomColor: Xe,
  borderLeftColor: Xe,
  filter: Ac,
  WebkitFilter: Ac,
  mask: Oc,
  WebkitMask: Oc
}, Kv = (e) => uC[e], cC = /* @__PURE__ */ new Set([Ac, Oc]);
function Gv(e, t) {
  let i = Kv(e);
  return cC.has(i) || (i = tn), i.getAnimatableNone ? i.getAnimatableNone(t) : void 0;
}
const fC = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function dC(e, t, i) {
  let o = 0, a;
  for (; o < e.length && !a; ) {
    const l = e[o];
    typeof l == "string" && !fC.has(l) && si(l).values.length && (a = e[o]), o++;
  }
  if (a && i)
    for (const l of t)
      e[l] = Gv(i, a);
}
class pC extends ff {
  constructor(t, i, o, a, l) {
    super(t, i, o, a, l, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: i, name: o } = this;
    if (!i || !i.current)
      return;
    super.readKeyframes();
    for (let g = 0; g < t.length; g++) {
      let y = t[g];
      if (typeof y == "string" && (y = y.trim(), rf(y))) {
        const w = Fv(y, i.current);
        w !== void 0 && (t[g] = w), g === t.length - 1 && (this.finalKeyframe = y);
      }
    }
    if (this.resolveNoneKeyframes(), !Bv.has(o) || t.length !== 2)
      return;
    const [a, l] = t, c = _m(a), d = _m(l), h = um(a), m = um(l);
    if (h !== m && Kn[o]) {
      this.needsMeasurement = !0;
      return;
    }
    if (c !== d)
      if (vm(c) && vm(d))
        for (let g = 0; g < t.length; g++) {
          const y = t[g];
          typeof y == "string" && (t[g] = parseFloat(y));
        }
      else Kn[o] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: i } = this, o = [];
    for (let a = 0; a < t.length; a++)
      (t[a] === null || iC(t[a])) && o.push(a);
    o.length && dC(t, o, i);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: i, name: o } = this;
    if (!t || !t.current)
      return;
    o === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Kn[o](t.measureViewportBox(), window.getComputedStyle(t.current)), i[0] = this.measuredOrigin;
    const a = i[i.length - 1];
    a !== void 0 && t.getValue(o, a).jump(a, !1);
  }
  measureEndState() {
    const { element: t, name: i, unresolvedKeyframes: o } = this;
    if (!t || !t.current)
      return;
    const a = t.getValue(i);
    a && a.jump(this.measuredOrigin, !1);
    const l = o.length - 1, c = o[l];
    o[l] = Kn[i](t.measureViewportBox(), window.getComputedStyle(t.current)), c !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = c), this.removedTransforms?.length && this.removedTransforms.forEach(([d, h]) => {
      t.getValue(d).set(h);
    }), this.resolveNoneKeyframes();
  }
}
const gf = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius"
], yf = [];
function hC(e) {
  bo(typeof e.test == "function" && typeof e.read == "function"), Yv(e), yf.unshift(e);
}
function Yv(e) {
  _r(yf, e);
}
function mC(e) {
  return yf.find((t) => t.test(e));
}
function gC(e, t, i, o = {}) {
  const a = [];
  for (const l in i) {
    const c = i[l];
    let d = e.get(t, l);
    if (!d) {
      const h = e.read(t, l, c) ?? yC(c);
      d = Pn(h), e(t, { [l]: d });
    }
    d.start(Ea(l, d, c, Pa(o, l))), d.animation && a.push(d.animation);
  }
  return a;
}
function yC(e) {
  const t = Array.isArray(e) ? e[0] : void 0;
  return t === null ? void 0 : t;
}
function vf(e, t, i) {
  if (e == null)
    return [];
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    let o = document;
    t && (o = t.current);
    const a = i?.[e] ?? o.querySelectorAll(e);
    return a ? Array.from(a) : [];
  }
  return Array.from(e).filter((o) => o != null);
}
const jc = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function Ys(e) {
  return ev(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
const { schedule: wf } = /* @__PURE__ */ mv(queueMicrotask, !1), en = {
  x: !1,
  y: !1
};
function Xv() {
  return en.x || en.y;
}
function vC(e) {
  return e === "x" || e === "y" ? en[e] ? null : (en[e] = !0, () => {
    en[e] = !1;
  }) : en.x || en.y ? null : (en.x = en.y = !0, () => {
    en.x = en.y = !1;
  });
}
function Qv(e, t) {
  const i = vf(e), o = new AbortController(), a = {
    passive: !0,
    ...t,
    signal: o.signal
  };
  return [i, a, () => o.abort()];
}
function wC(e) {
  return !(e.pointerType === "touch" || Xv());
}
function xC(e, t, i = {}) {
  const [o, a, l] = Qv(e, i);
  return o.forEach((c) => {
    let d = !1, h = !1, m;
    const g = () => {
      c.removeEventListener("pointerleave", k);
    }, y = (S) => {
      m && (m(S), m = void 0), g();
    }, w = (S) => {
      d = !1, window.removeEventListener("pointerup", w), window.removeEventListener("pointercancel", w), h && (h = !1, y(S));
    }, b = () => {
      d = !0, window.addEventListener("pointerup", w, a), window.addEventListener("pointercancel", w, a);
    }, k = (S) => {
      if (S.pointerType !== "touch") {
        if (d) {
          h = !0;
          return;
        }
        y(S);
      }
    }, T = (S) => {
      if (!wC(S))
        return;
      h = !1;
      const R = t(c, S);
      typeof R == "function" && (m = R, c.addEventListener("pointerleave", k, a));
    };
    c.addEventListener("pointerenter", T, a), c.addEventListener("pointerdown", b, a);
  }), l;
}
const Jv = (e, t) => t ? e === t ? !0 : Jv(e, t.parentElement) : !1, xf = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, bC = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function kC(e) {
  return bC.has(e.tagName) || e.isContentEditable === !0;
}
const SC = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function _C(e) {
  return SC.has(e.tagName) || e.isContentEditable === !0;
}
const Xs = /* @__PURE__ */ new WeakSet();
function Em(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Uu(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const PC = (e, t) => {
  const i = e.currentTarget;
  if (!i)
    return;
  const o = Em(() => {
    if (Xs.has(i))
      return;
    Uu(i, "down");
    const a = Em(() => {
      Uu(i, "up");
    }), l = () => Uu(i, "cancel");
    i.addEventListener("keyup", a, t), i.addEventListener("blur", l, t);
  });
  i.addEventListener("keydown", o, t), i.addEventListener("blur", () => i.removeEventListener("keydown", o), t);
};
function Cm(e) {
  return xf(e) && !Xv();
}
const Tm = /* @__PURE__ */ new WeakSet();
function EC(e, t, i = {}) {
  const [o, a, l] = Qv(e, i), c = (d) => {
    const h = d.currentTarget;
    if (!Cm(d) || Tm.has(d))
      return;
    Xs.add(h), i.stopPropagation && Tm.add(d);
    const m = t(h, d), g = { ...a, capture: !0 }, y = (k, T) => {
      window.removeEventListener("pointerup", w, g), window.removeEventListener("pointercancel", b, g), Xs.has(h) && Xs.delete(h), Cm(k) && typeof m == "function" && m(k, { success: T });
    }, w = (k) => {
      y(k, h === window || h === document || i.useGlobalTarget || Jv(h, k.target));
    }, b = (k) => {
      y(k, !1);
    };
    window.addEventListener("pointerup", w, g), window.addEventListener("pointercancel", b, g);
  };
  return o.forEach((d) => {
    (i.useGlobalTarget ? window : d).addEventListener("pointerdown", c, a), Ys(d) && (d.addEventListener("focus", (m) => PC(m, a)), !kC(d) && !d.hasAttribute("tabindex") && (d.tabIndex = 0));
  }), l;
}
function Ca(e) {
  return ev(e) && "ownerSVGElement" in e;
}
const Qs = /* @__PURE__ */ new WeakMap();
let Js;
const qv = (e, t, i) => (o, a) => a && a[0] ? a[0][e + "Size"] : Ca(o) && "getBBox" in o ? o.getBBox()[t] : o[i], CC = /* @__PURE__ */ qv("inline", "width", "offsetWidth"), TC = /* @__PURE__ */ qv("block", "height", "offsetHeight");
function zC({ target: e, borderBoxSize: t }) {
  Qs.get(e)?.forEach((i) => {
    i(e, {
      get width() {
        return CC(e, t);
      },
      get height() {
        return TC(e, t);
      }
    });
  });
}
function AC(e) {
  e.forEach(zC);
}
function OC() {
  typeof ResizeObserver > "u" || (Js = new ResizeObserver(AC));
}
function jC(e, t) {
  Js || OC();
  const i = vf(e);
  return i.forEach((o) => {
    let a = Qs.get(o);
    a || (a = /* @__PURE__ */ new Set(), Qs.set(o, a)), a.add(t), Js?.observe(o);
  }), () => {
    i.forEach((o) => {
      const a = Qs.get(o);
      a?.delete(t), a?.size || Js?.unobserve(o);
    });
  };
}
const qs = /* @__PURE__ */ new Set();
let qr;
function MC() {
  qr = () => {
    const e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    qs.forEach((t) => t(e));
  }, window.addEventListener("resize", qr);
}
function RC(e) {
  return qs.add(e), qr || MC(), () => {
    qs.delete(e), !qs.size && typeof qr == "function" && (window.removeEventListener("resize", qr), qr = void 0);
  };
}
function zm(e, t) {
  return typeof e == "function" ? RC(e) : jC(e, t);
}
function e0(e) {
  return Ca(e) && e.tagName === "svg";
}
function DC(...e) {
  const t = !Array.isArray(e[0]), i = t ? 0 : -1, o = e[0 + i], a = e[1 + i], l = e[2 + i], c = e[3 + i], d = Ev(a, l, c);
  return t ? d(o) : d;
}
const NC = [...Hv, Xe, tn], IC = (e) => NC.find(Wv(e)), Am = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), ei = () => ({
  x: Am(),
  y: Am()
}), Om = () => ({ min: 0, max: 0 }), Ye = () => ({
  x: Om(),
  y: Om()
}), vo = /* @__PURE__ */ new WeakMap();
function Ta(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function wo(e) {
  return typeof e == "string" || Array.isArray(e);
}
const bf = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], kf = ["initial", ...bf];
function za(e) {
  return Ta(e.animate) || kf.some((t) => wo(e[t]));
}
function t0(e) {
  return !!(za(e) || e.variants);
}
function LC(e, t, i) {
  for (const o in t) {
    const a = t[o], l = i[o];
    if (et(a))
      e.addValue(o, a);
    else if (et(l))
      e.addValue(o, Pn(a, { owner: e }));
    else if (l !== a)
      if (e.hasValue(o)) {
        const c = e.getValue(o);
        c.liveStyle === !0 ? c.jump(a) : c.hasAnimated || c.set(a);
      } else {
        const c = e.getStaticValue(o);
        e.addValue(o, Pn(c !== void 0 ? c : a, { owner: e }));
      }
  }
  for (const o in i)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const Mc = { current: null }, n0 = { current: !1 }, $C = typeof window < "u";
function VC() {
  if (n0.current = !0, !!$C)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Mc.current = e.matches;
      e.addEventListener("change", t), t();
    } else
      Mc.current = !1;
}
const jm = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let da = {};
function r0(e) {
  da = e;
}
function FC() {
  return da;
}
class i0 {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, i, o) {
    return {};
  }
  constructor({ parent: t, props: i, presenceContext: o, reducedMotionConfig: a, skipAnimations: l, blockInitialAnimation: c, visualState: d }, h = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = ff, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const b = vt.now();
      this.renderScheduledAt < b && (this.renderScheduledAt = b, je.render(this.render, !1, !0));
    };
    const { latestValues: m, renderState: g } = d;
    this.latestValues = m, this.baseTarget = { ...m }, this.initialValues = i.initial ? { ...m } : {}, this.renderState = g, this.parent = t, this.props = i, this.presenceContext = o, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = a, this.skipAnimationsConfig = l, this.options = h, this.blockInitialAnimation = !!c, this.isControllingVariants = za(i), this.isVariantNode = t0(i), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: y, ...w } = this.scrapeMotionValuesFromProps(i, {}, this);
    for (const b in w) {
      const k = w[b];
      m[b] !== void 0 && et(k) && k.set(m[b]);
    }
  }
  mount(t) {
    if (this.hasBeenMounted)
      for (const i in this.initialValues)
        this.values.get(i)?.jump(this.initialValues[i]), this.latestValues[i] = this.initialValues[i];
    this.current = t, vo.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((i, o) => this.bindToMotionValue(o, i)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (n0.current || VC(), this.shouldReduceMotion = Mc.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    this.projection && this.projection.unmount(), _n(this.notifyUpdate), _n(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const i = this.features[t];
      i && (i.unmount(), i.isMounted = !1);
    }
    this.current = null;
  }
  addChild(t) {
    this.children.add(t), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(t);
  }
  removeChild(t) {
    this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t);
  }
  bindToMotionValue(t, i) {
    if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(), i.accelerate && Lv.has(t) && this.current instanceof HTMLElement) {
      const { factory: c, keyframes: d, times: h, ease: m, duration: g } = i.accelerate, y = new Nv({
        element: this.current,
        name: t,
        keyframes: d,
        times: h,
        ease: m,
        duration: /* @__PURE__ */ Mt(g)
      }), w = c(y);
      this.valueSubscriptions.set(t, () => {
        w(), y.cancel();
      });
      return;
    }
    const o = fi.has(t);
    o && this.onBindTransform && this.onBindTransform();
    const a = i.on("change", (c) => {
      this.latestValues[t] = c, this.props.onUpdate && je.preRender(this.notifyUpdate), o && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let l;
    typeof window < "u" && window.MotionCheckAppearSync && (l = window.MotionCheckAppearSync(this, t, i)), this.valueSubscriptions.set(t, () => {
      a(), l && l();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in da) {
      const i = da[t];
      if (!i)
        continue;
      const { isEnabled: o, Feature: a } = i;
      if (!this.features[t] && a && o(this.props) && (this.features[t] = new a(this)), this.features[t]) {
        const l = this.features[t];
        l.isMounted ? l.update() : (l.mount(), l.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ye();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, i) {
    this.latestValues[t] = i;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, i) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = i;
    for (let o = 0; o < jm.length; o++) {
      const a = jm[o];
      this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](), delete this.propEventSubscriptions[a]);
      const l = "on" + a, c = t[l];
      c && (this.propEventSubscriptions[a] = this.on(a, c));
    }
    this.prevMotionValues = LC(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const i = this.getClosestVariantNode();
    if (i)
      return i.variantChildren && i.variantChildren.add(t), () => i.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, i) {
    const o = this.values.get(t);
    i !== o && (o && this.removeValue(t), this.bindToMotionValue(t, i), this.values.set(t, i), this.latestValues[t] = i.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const i = this.valueSubscriptions.get(t);
    i && (i(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, i) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let o = this.values.get(t);
    return o === void 0 && i !== void 0 && (o = Pn(i === null ? void 0 : i, { owner: this }), this.addValue(t, o)), o;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, i) {
    let o = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
    return o != null && (typeof o == "string" && (qy(o) || tv(o)) ? o = parseFloat(o) : !IC(o) && tn.test(i) && (o = Gv(t, i)), this.setBaseTarget(t, et(o) ? o.get() : o)), et(o) ? o.get() : o;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, i) {
    this.baseTarget[t] = i;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    const { initial: i } = this.props;
    let o;
    if (typeof i == "string" || typeof i == "object") {
      const l = pf(this.props, i, this.presenceContext?.custom);
      l && (o = l[t]);
    }
    if (i && o !== void 0)
      return o;
    const a = this.getBaseTargetFromProps(this.props, t);
    return a !== void 0 && !et(a) ? a : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, i) {
    return this.events[t] || (this.events[t] = new qc()), this.events[t].add(i);
  }
  notify(t, ...i) {
    this.events[t] && this.events[t].notify(...i);
  }
  scheduleRenderMicrotask() {
    wf.render(this.render);
  }
}
class o0 extends i0 {
  constructor() {
    super(...arguments), this.KeyframeResolver = pC;
  }
  sortInstanceNodePosition(t, i) {
    return t.compareDocumentPosition(i) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, i) {
    const o = t.style;
    return o ? o[i] : void 0;
  }
  removeValueFromRenderState(t, { vars: i, style: o }) {
    delete i[t], delete o[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    et(t) && (this.childSubscription = t.on("change", (i) => {
      this.current && (this.current.textContent = `${i}`);
    }));
  }
}
class qn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function s0({ top: e, left: t, right: i, bottom: o }) {
  return {
    x: { min: t, max: i },
    y: { min: e, max: o }
  };
}
function BC({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function UC(e, t) {
  if (!t)
    return e;
  const i = t({ x: e.left, y: e.top }), o = t({ x: e.right, y: e.bottom });
  return {
    top: i.y,
    left: i.x,
    bottom: o.y,
    right: o.x
  };
}
function Zu(e) {
  return e === void 0 || e === 1;
}
function Rc({ scale: e, scaleX: t, scaleY: i }) {
  return !Zu(e) || !Zu(t) || !Zu(i);
}
function mr(e) {
  return Rc(e) || a0(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function a0(e) {
  return Mm(e.x) || Mm(e.y);
}
function Mm(e) {
  return e && e !== "0%";
}
function pa(e, t, i) {
  const o = e - i, a = t * o;
  return i + a;
}
function Rm(e, t, i, o, a) {
  return a !== void 0 && (e = pa(e, a, o)), pa(e, i, o) + t;
}
function Dc(e, t = 0, i = 1, o, a) {
  e.min = Rm(e.min, t, i, o, a), e.max = Rm(e.max, t, i, o, a);
}
function l0(e, { x: t, y: i }) {
  Dc(e.x, t.translate, t.scale, t.originPoint), Dc(e.y, i.translate, i.scale, i.originPoint);
}
const Dm = 0.999999999999, Nm = 1.0000000000001;
function ZC(e, t, i, o = !1) {
  const a = i.length;
  if (!a)
    return;
  t.x = t.y = 1;
  let l, c;
  for (let d = 0; d < a; d++) {
    l = i[d], c = l.projectionDelta;
    const { visualElement: h } = l.options;
    h && h.props.style && h.props.style.display === "contents" || (o && l.options.layoutScroll && l.scroll && l !== l.root && (un(e.x, -l.scroll.offset.x), un(e.y, -l.scroll.offset.y)), c && (t.x *= c.x.scale, t.y *= c.y.scale, l0(e, c)), o && mr(l.latestValues) && ea(e, l.latestValues, l.layout?.layoutBox));
  }
  t.x < Nm && t.x > Dm && (t.x = 1), t.y < Nm && t.y > Dm && (t.y = 1);
}
function un(e, t) {
  e.min += t, e.max += t;
}
function Im(e, t, i, o, a = 0.5) {
  const l = Oe(e.min, e.max, a);
  Dc(e, t, i, l, o);
}
function Lm(e, t) {
  return typeof e == "string" ? parseFloat(e) / 100 * (t.max - t.min) : e;
}
function ea(e, t, i) {
  const o = i ?? e;
  Im(e.x, Lm(t.x, o.x), t.scaleX, t.scale, t.originX), Im(e.y, Lm(t.y, o.y), t.scaleY, t.scale, t.originY);
}
function u0(e, t) {
  return s0(UC(e.getBoundingClientRect(), t));
}
function WC(e, t, i) {
  const o = u0(e, i), { scroll: a } = t;
  return a && (un(o.x, a.offset.x), un(o.y, a.offset.y)), o;
}
const HC = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, KC = ci.length;
function GC(e, t, i) {
  let o = "", a = !0;
  for (let c = 0; c < KC; c++) {
    const d = ci[c], h = e[d];
    if (h === void 0)
      continue;
    let m = !0;
    if (typeof h == "number")
      m = h === (d.startsWith("scale") ? 1 : 0);
    else {
      const g = parseFloat(h);
      m = d.startsWith("scale") ? g === 1 : g === 0;
    }
    if (!m || i) {
      const g = jc(h, fa[d]);
      if (!m) {
        a = !1;
        const y = HC[d] || d;
        o += `${y}(${g}) `;
      }
      i && (t[d] = g);
    }
  }
  const l = e.pathRotation;
  return l && (a = !1, o += `rotate(${jc(l, fa.pathRotation)}) `), o = o.trim(), i ? o = i(t, a ? "" : o) : a && (o = "none"), o;
}
function Sf(e, t, i) {
  const { style: o, vars: a, transformOrigin: l } = e;
  let c = !1, d = !1;
  for (const h in t) {
    const m = t[h];
    if (fi.has(h)) {
      c = !0;
      continue;
    } else if (yv(h)) {
      a[h] = m;
      continue;
    } else {
      const g = jc(m, fa[h]);
      h.startsWith("origin") ? (d = !0, l[h] = g) : o[h] = g;
    }
  }
  if (t.transform || (c || i ? o.transform = GC(t, e.transform, i) : o.transform && (o.transform = "none")), d) {
    const { originX: h = "50%", originY: m = "50%", originZ: g = 0 } = l;
    o.transformOrigin = `${h} ${m} ${g}`;
  }
}
function c0(e, { style: t, vars: i }, o, a) {
  const l = e.style;
  let c;
  for (c in t)
    l[c] = t[c];
  a?.applyProjectionStyles(l, o);
  for (c in i)
    l.setProperty(c, i[c]);
}
function $m(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const qi = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (re.test(e))
        e = parseFloat(e);
      else
        return e;
    const i = $m(e, t.target.x), o = $m(e, t.target.y);
    return `${i}% ${o}%`;
  }
}, YC = {
  correct: (e, { treeScale: t, projectionDelta: i }) => {
    const o = e, a = tn.parse(e);
    if (a.length > 5)
      return o;
    const l = tn.createTransformer(e), c = typeof a[0] != "number" ? 1 : 0, d = i.x.scale * t.x, h = i.y.scale * t.y;
    a[0 + c] /= d, a[1 + c] /= h;
    const m = Oe(d, h, 0.5);
    return typeof a[2 + c] == "number" && (a[2 + c] /= m), typeof a[3 + c] == "number" && (a[3 + c] /= m), l(a);
  }
}, Nc = {
  borderRadius: {
    ...qi,
    applyTo: [...gf]
  },
  borderTopLeftRadius: qi,
  borderTopRightRadius: qi,
  borderBottomLeftRadius: qi,
  borderBottomRightRadius: qi,
  boxShadow: YC
};
function f0(e, { layout: t, layoutId: i }) {
  return fi.has(e) || e.startsWith("origin") || (t || i !== void 0) && (!!Nc[e] || e === "opacity");
}
function _f(e, t, i) {
  const o = e.style, a = t?.style, l = {};
  if (!o)
    return l;
  for (const c in o)
    (et(o[c]) || a && et(a[c]) || f0(c, e) || i?.getValue(c)?.liveStyle !== void 0) && (l[c] = o[c]);
  return l;
}
function XC(e) {
  return window.getComputedStyle(e);
}
class d0 extends o0 {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = c0;
  }
  mount(t) {
    bo(!!t.style), super.mount(t);
  }
  readValueFromInstance(t, i) {
    if (fi.has(i))
      return this.projection?.isProjecting ? bc(i) : dE(t, i);
    {
      const o = XC(t), a = (yv(i) ? o.getPropertyValue(i) : o[i]) || 0;
      return typeof a == "string" ? a.trim() : a;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: i }) {
    return u0(t, i);
  }
  build(t, i, o) {
    Sf(t, i, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, i, o) {
    return _f(t, i, o);
  }
}
function QC(e, t) {
  return e in t;
}
class JC extends i0 {
  constructor() {
    super(...arguments), this.type = "object";
  }
  readValueFromInstance(t, i) {
    if (QC(i, t)) {
      const o = t[i];
      if (typeof o == "string" || typeof o == "number")
        return o;
    }
  }
  getBaseTargetFromProps() {
  }
  removeValueFromRenderState(t, i) {
    delete i.output[t];
  }
  measureInstanceViewportBox() {
    return Ye();
  }
  build(t, i) {
    Object.assign(t.output, i);
  }
  renderInstance(t, { output: i }) {
    Object.assign(t, i);
  }
  sortInstanceNodePosition() {
    return 0;
  }
}
const qC = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, eT = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function tT(e, t, i = 1, o = 0, a = !0) {
  e.pathLength = 1;
  const l = a ? qC : eT;
  e[l.offset] = `${-o}`, e[l.array] = `${t} ${i}`;
}
const p0 = [
  "transform",
  "opacity",
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function h0(e, {
  attrX: t,
  attrY: i,
  attrScale: o,
  pathLength: a,
  pathSpacing: l = 1,
  pathOffset: c = 0,
  // This is object creation, which we try to avoid per-frame.
  ...d
}, h, m, g) {
  if (Sf(e, d, m), h) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: y, style: w } = e;
  for (const b of p0)
    y[b] !== void 0 && (w[b] = y[b], delete y[b]);
  (w.transform || y.transformOrigin) && (w.transformOrigin = y.transformOrigin ?? "50% 50%", delete y.transformOrigin), w.transform && (w.transformBox = g?.transformBox ?? "fill-box", delete y.transformBox), t !== void 0 && (y.x = t), i !== void 0 && (y.y = i), o !== void 0 && (y.scale = o), a !== void 0 && tT(y, a, l, c, !1);
}
const m0 = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]), g0 = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function nT(e, t, i, o) {
  c0(e, t, void 0, o);
  for (const a in t.attrs)
    e.setAttribute(m0.has(a) ? a : hf(a), t.attrs[a]);
}
function y0(e, t, i) {
  const o = _f(e, t, i);
  for (const a in e)
    if (et(e[a]) || et(t[a])) {
      const l = ci.indexOf(a) !== -1 ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a;
      o[l] = e[a];
    }
  return o;
}
class v0 extends o0 {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Ye;
  }
  getBaseTargetFromProps(t, i) {
    return t[i];
  }
  readValueFromInstance(t, i) {
    if (fi.has(i)) {
      const o = Kv(i);
      return o && o.default || 0;
    }
    if (p0.includes(i)) {
      const a = getComputedStyle(t)[i];
      if (typeof a == "string" && a)
        return a.trim();
    }
    return i = m0.has(i) ? i : hf(i), t.getAttribute(i);
  }
  scrapeMotionValuesFromProps(t, i, o) {
    return y0(t, i, o);
  }
  build(t, i, o) {
    h0(t, i, this.isSVGTag, o.transformTemplate, o.style);
  }
  renderInstance(t, i, o, a) {
    nT(t, i, o, a);
  }
  mount(t) {
    this.isSVGTag = g0(t.tagName), super.mount(t);
  }
}
const rT = kf.length;
function w0(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const i = e.parent ? w0(e.parent) || {} : {};
    return e.props.initial !== void 0 && (i.initial = e.props.initial), i;
  }
  const t = {};
  for (let i = 0; i < rT; i++) {
    const o = kf[i], a = e.props[o];
    (wo(a) || a === !1) && (t[o] = a);
  }
  return t;
}
function x0(e, t) {
  if (!Array.isArray(t))
    return !1;
  const i = t.length;
  if (i !== e.length)
    return !1;
  for (let o = 0; o < i; o++)
    if (t[o] !== e[o])
      return !1;
  return !0;
}
const iT = [...bf].reverse(), oT = bf.length;
function sT(e) {
  return (t) => Promise.all(t.map(({ animation: i, options: o }) => nC(e, i, o)));
}
function aT(e) {
  let t = sT(e), i = Vm(), o = !0, a = !1;
  const l = (m) => (g, y) => {
    const w = xr(e, y, m === "exit" ? e.presenceContext?.custom : void 0);
    if (w) {
      const { transition: b, transitionEnd: k, ...T } = w;
      g = { ...g, ...T, ...k };
    }
    return g;
  };
  function c(m) {
    t = m(e);
  }
  function d(m) {
    const { props: g } = e, y = w0(e.parent) || {}, w = [], b = /* @__PURE__ */ new Set();
    let k = {}, T = 1 / 0;
    for (let R = 0; R < oT; R++) {
      const O = iT[R], I = i[O], D = g[O] !== void 0 ? g[O] : y[O], K = wo(D), Z = O === m ? I.isActive : null;
      Z === !1 && (T = R);
      let z = D === y[O] && D !== g[O] && K;
      if (z && (o || a) && e.manuallyAnimateOnMount && (z = !1), I.protectedKeys = { ...k }, // If it isn't active and hasn't *just* been set as inactive
      !I.isActive && Z === null || // If we didn't and don't have any defined prop for this animation type
      !D && !I.prevProp || // Or if the prop doesn't define an animation
      Ta(D) || typeof D == "boolean")
        continue;
      if (O === "exit" && I.isActive && Z !== !0) {
        I.prevResolvedValues && (k = {
          ...k,
          ...I.prevResolvedValues
        });
        continue;
      }
      const W = lT(I.prevProp, D);
      let G = W || // If we're making this variant active, we want to always make it active
      O === m && I.isActive && !z && K || // If we removed a higher-priority variant (i is in reverse order)
      R > T && K, le = !1;
      const ue = Array.isArray(D) ? D : [D];
      let se = ue.reduce(l(O), {});
      Z === !1 && (se = {});
      const { prevResolvedValues: ce = {} } = I, we = {
        ...ce,
        ...se
      }, _e = (V) => {
        G = !0, b.has(V) && (le = !0, b.delete(V)), I.needsAnimating[V] = !0;
        const J = e.getValue(V);
        J && (J.liveStyle = !1);
      };
      for (const V in we) {
        const J = se[V], X = ce[V];
        if (k.hasOwnProperty(V))
          continue;
        let P = !1;
        Cc(J) && Cc(X) ? P = !x0(J, X) || W : P = J !== X, P ? J != null ? _e(V) : b.add(V) : J !== void 0 && b.has(V) ? _e(V) : I.protectedKeys[V] = !0;
      }
      I.prevProp = D, I.prevResolvedValues = se, I.isActive && (k = { ...k, ...se }), (o || a) && e.blockInitialAnimation && (G = !1);
      const Ce = z && W;
      G && (!Ce || le) && w.push(...ue.map((V) => {
        const J = { type: O };
        if (typeof V == "string" && (o || a) && !Ce && e.manuallyAnimateOnMount && e.parent) {
          const { parent: X } = e, P = xr(X, V);
          if (X.enteringChildren && P) {
            const { delayChildren: $ } = P.transition || {};
            J.delay = $v(X.enteringChildren, e, $);
          }
        }
        return {
          animation: V,
          options: J
        };
      }));
    }
    if (b.size) {
      const R = {};
      if (typeof g.initial != "boolean") {
        const O = xr(e, Array.isArray(g.initial) ? g.initial[0] : g.initial);
        O && O.transition && (R.transition = O.transition);
      }
      b.forEach((O) => {
        const I = e.getBaseTarget(O), D = e.getValue(O);
        D && (D.liveStyle = !0), R[O] = I ?? null;
      }), w.push({ animation: R });
    }
    let S = !!w.length;
    return o && (g.initial === !1 || g.initial === g.animate) && !e.manuallyAnimateOnMount && (S = !1), o = !1, a = !1, S ? t(w) : Promise.resolve();
  }
  function h(m, g) {
    if (i[m].isActive === g)
      return Promise.resolve();
    e.variantChildren?.forEach((w) => w.animationState?.setActive(m, g)), i[m].isActive = g;
    const y = d(m);
    for (const w in i)
      i[w].protectedKeys = {};
    return y;
  }
  return {
    animateChanges: d,
    setActive: h,
    setAnimateFunction: c,
    getState: () => i,
    reset: () => {
      i = Vm(), a = !0;
    }
  };
}
function lT(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !x0(t, e) : !1;
}
function hr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Vm() {
  return {
    animate: hr(!0),
    whileInView: hr(),
    whileHover: hr(),
    whileTap: hr(),
    whileDrag: hr(),
    whileFocus: hr(),
    exit: hr()
  };
}
function Ic(e, t) {
  e.min = t.min, e.max = t.max;
}
function qt(e, t) {
  Ic(e.x, t.x), Ic(e.y, t.y);
}
function Fm(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
const b0 = 1e-4, uT = 1 - b0, cT = 1 + b0, k0 = 0.01, fT = 0 - k0, dT = 0 + k0;
function wt(e) {
  return e.max - e.min;
}
function pT(e, t, i) {
  return Math.abs(e - t) <= i;
}
function Bm(e, t, i, o = 0.5) {
  e.origin = o, e.originPoint = Oe(t.min, t.max, e.origin), e.scale = wt(i) / wt(t), e.translate = Oe(i.min, i.max, e.origin) - e.originPoint, (e.scale >= uT && e.scale <= cT || isNaN(e.scale)) && (e.scale = 1), (e.translate >= fT && e.translate <= dT || isNaN(e.translate)) && (e.translate = 0);
}
function ao(e, t, i, o) {
  Bm(e.x, t.x, i.x, o ? o.originX : void 0), Bm(e.y, t.y, i.y, o ? o.originY : void 0);
}
function Um(e, t, i, o = 0) {
  const a = o ? Oe(i.min, i.max, o) : i.min;
  e.min = a + t.min, e.max = e.min + wt(t);
}
function hT(e, t, i, o) {
  Um(e.x, t.x, i.x, o?.x), Um(e.y, t.y, i.y, o?.y);
}
function Zm(e, t, i, o = 0) {
  const a = o ? Oe(i.min, i.max, o) : i.min;
  e.min = t.min - a, e.max = e.min + wt(t);
}
function ha(e, t, i, o) {
  Zm(e.x, t.x, i.x, o?.x), Zm(e.y, t.y, i.y, o?.y);
}
function Wm(e, t, i, o, a) {
  return e -= t, e = pa(e, 1 / i, o), a !== void 0 && (e = pa(e, 1 / a, o)), e;
}
function mT(e, t = 0, i = 1, o = 0.5, a, l = e, c = e) {
  if (cn.test(t) && (t = parseFloat(t), t = Oe(c.min, c.max, t / 100) - c.min), typeof t != "number")
    return;
  let d = Oe(l.min, l.max, o);
  e === l && (d -= t), e.min = Wm(e.min, t, i, d, a), e.max = Wm(e.max, t, i, d, a);
}
function Hm(e, t, [i, o, a], l, c) {
  mT(e, t[i], t[o], t[a], t.scale, l, c);
}
const gT = ["x", "scaleX", "originX"], yT = ["y", "scaleY", "originY"];
function Km(e, t, i, o) {
  Hm(e.x, t, gT, i ? i.x : void 0, o ? o.x : void 0), Hm(e.y, t, yT, i ? i.y : void 0, o ? o.y : void 0);
}
function Gm(e) {
  return e.translate === 0 && e.scale === 1;
}
function S0(e) {
  return Gm(e.x) && Gm(e.y);
}
function Ym(e, t) {
  return e.min === t.min && e.max === t.max;
}
function vT(e, t) {
  return Ym(e.x, t.x) && Ym(e.y, t.y);
}
function Xm(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function _0(e, t) {
  return Xm(e.x, t.x) && Xm(e.y, t.y);
}
function Qm(e) {
  return wt(e.x) / wt(e.y);
}
function Jm(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
function ln(e) {
  return [e("x"), e("y")];
}
function wT(e, t, i) {
  let o = "";
  const a = e.x.translate / t.x, l = e.y.translate / t.y, c = i?.z || 0;
  if ((a || l || c) && (o = `translate3d(${a}px, ${l}px, ${c}px) `), (t.x !== 1 || t.y !== 1) && (o += `scale(${1 / t.x}, ${1 / t.y}) `), i) {
    const { transformPerspective: m, rotate: g, pathRotation: y, rotateX: w, rotateY: b, skewX: k, skewY: T } = i;
    m && (o = `perspective(${m}px) ${o}`), g && (o += `rotate(${g}deg) `), y && (o += `rotate(${y}deg) `), w && (o += `rotateX(${w}deg) `), b && (o += `rotateY(${b}deg) `), k && (o += `skewX(${k}deg) `), T && (o += `skewY(${T}deg) `);
  }
  const d = e.x.scale * t.x, h = e.y.scale * t.y;
  return (d !== 1 || h !== 1) && (o += `scale(${d}, ${h})`), o || "none";
}
const xT = gf.length, qm = (e) => typeof e == "string" ? parseFloat(e) : e, eg = (e) => typeof e == "number" || re.test(e);
function bT(e, t, i, o, a, l) {
  a ? (e.opacity = Oe(0, i.opacity ?? 1, kT(o)), e.opacityExit = Oe(t.opacity ?? 1, 0, ST(o))) : l && (e.opacity = Oe(t.opacity ?? 1, i.opacity ?? 1, o));
  for (let c = 0; c < xT; c++) {
    const d = gf[c];
    let h = tg(t, d), m = tg(i, d);
    if (h === void 0 && m === void 0)
      continue;
    h || (h = 0), m || (m = 0), h === 0 || m === 0 || eg(h) === eg(m) ? (e[d] = Math.max(Oe(qm(h), qm(m), o), 0), (cn.test(m) || cn.test(h)) && (e[d] += "%")) : e[d] = m;
  }
  (t.rotate || i.rotate) && (e.rotate = Oe(t.rotate || 0, i.rotate || 0, o));
}
function tg(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const kT = /* @__PURE__ */ P0(0, 0.5, uv), ST = /* @__PURE__ */ P0(0.5, 0.95, Bt);
function P0(e, t, i) {
  return (o) => o < e ? 0 : o > t ? 1 : i(/* @__PURE__ */ oi(e, t, o));
}
function E0(e, t, i) {
  const o = et(e) ? e : Pn(e);
  return o.start(Ea("", o, t, i)), o.animation;
}
function xo(e, t, i, o = { passive: !0 }) {
  return e.addEventListener(t, i, o), () => e.removeEventListener(t, i, o);
}
const _T = (e, t) => e.depth - t.depth;
class PT {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Jc(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    _r(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(_T), this.isDirty = !1, this.children.forEach(t);
  }
}
function ET(e, t) {
  const i = vt.now(), o = ({ timestamp: a }) => {
    const l = a - i;
    l >= t && (_n(o), e(l - t));
  };
  return je.setup(o, !0), () => _n(o);
}
function ta(e) {
  return et(e) ? e.get() : e;
}
class CT {
  constructor() {
    this.members = [];
  }
  add(t) {
    Jc(this.members, t);
    for (let i = this.members.length - 1; i >= 0; i--) {
      const o = this.members[i];
      if (o === t || o === this.lead || o === this.prevLead)
        continue;
      const a = o.instance;
      (!a || a.isConnected === !1) && !o.snapshot && (_r(this.members, o), o.unmount());
    }
    t.scheduleRender();
  }
  remove(t) {
    if (_r(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const i = this.members[this.members.length - 1];
      i && this.promote(i);
    }
  }
  relegate(t) {
    for (let i = this.members.indexOf(t) - 1; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1 && o.instance?.isConnected !== !1)
        return this.promote(o), !0;
    }
    return !1;
  }
  promote(t, i) {
    const o = this.lead;
    if (t !== o && (this.prevLead = o, this.lead = t, t.show(), o)) {
      o.updateSnapshot(), t.scheduleRender();
      const { layoutDependency: a } = o.options, { layoutDependency: l } = t.options;
      (a === void 0 || a !== l) && (t.resumeFrom = o, i && (o.preserveOpacity = !0), o.snapshot && (t.snapshot = o.snapshot, t.snapshot.latestValues = o.animationValues || o.latestValues), t.root?.isUpdating && (t.isLayoutDirty = !0)), t.options.crossfade === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      t.options.onExitComplete?.(), t.resumingFrom?.options.onExitComplete?.();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => t.instance && t.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
}
const na = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
}, Wu = ["", "X", "Y", "Z"], TT = 1e3;
let zT = 0;
function Hu(e, t, i, o) {
  const { latestValues: a } = t;
  a[e] && (i[e] = a[e], t.setStaticValue(e, 0), o && (o[e] = 0));
}
function C0(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const i = Zv(t);
  if (window.MotionHasOptimisedAnimation(i, "transform")) {
    const { layout: a, layoutId: l } = e.options;
    window.MotionCancelOptimisedAnimation(i, "transform", je, !(a || l));
  }
  const { parent: o } = e;
  o && !o.hasCheckedOptimisedAppear && C0(o);
}
function T0({ attachResizeListener: e, defaultParent: t, measureScroll: i, checkIsScrollRoot: o, resetTransform: a }) {
  return class {
    constructor(c = {}, d = t?.()) {
      this.id = zT++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(jT), this.nodes.forEach(LT), this.nodes.forEach($T), this.nodes.forEach(MT);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = c, this.root = d ? d.root || d : this, this.path = d ? [...d.path, d] : [], this.parent = d, this.depth = d ? d.depth + 1 : 0;
      for (let h = 0; h < this.path.length; h++)
        this.path[h].shouldResetTransform = !0;
      this.root === this && (this.nodes = new PT());
    }
    addEventListener(c, d) {
      return this.eventHandlers.has(c) || this.eventHandlers.set(c, new qc()), this.eventHandlers.get(c).add(d);
    }
    notifyListeners(c, ...d) {
      const h = this.eventHandlers.get(c);
      h && h.notify(...d);
    }
    hasListeners(c) {
      return this.eventHandlers.has(c);
    }
    /**
     * Lifecycles
     */
    mount(c) {
      if (this.instance)
        return;
      this.isSVG = Ca(c) && !e0(c), this.instance = c;
      const { layoutId: d, layout: h, visualElement: m } = this.options;
      if (m && !m.current && m.mount(c), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (h || d) && (this.isLayoutDirty = !0), e) {
        let g, y = 0;
        const w = () => this.root.updateBlockedByResize = !1;
        je.read(() => {
          y = window.innerWidth;
        }), e(c, () => {
          const b = window.innerWidth;
          b !== y && (y = b, this.root.updateBlockedByResize = !0, g && g(), g = ET(w, 250), na.hasAnimatedSinceResize && (na.hasAnimatedSinceResize = !1, this.nodes.forEach(ig)));
        });
      }
      d && this.root.registerSharedNode(d, this), this.options.animate !== !1 && m && (d || h) && this.addEventListener("didUpdate", ({ delta: g, hasLayoutChanged: y, hasRelativeLayoutChanged: w, layout: b }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const k = this.options.transition || m.getDefaultTransition() || ZT, { onLayoutAnimationStart: T, onLayoutAnimationComplete: S } = m.getProps(), R = !this.targetLayout || !_0(this.targetLayout, b), O = !y && w;
        if (this.options.layoutRoot || this.resumeFrom || O || y && (R || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const I = {
            ...Pa(k, "layout"),
            onPlay: T,
            onComplete: S
          };
          (m.shouldReduceMotion || this.options.layoutRoot) && (I.delay = 0, I.type = !1), this.startAnimation(I), this.setAnimationOrigin(g, O, I.path);
        } else
          y || ig(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = b;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const c = this.getStack();
      c && c.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), _n(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(VT), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: c } = this.options;
      return c && c.getProps().transformTemplate;
    }
    willUpdate(c = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && C0(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const y = this.path[g];
        y.shouldResetTransform = !0, (typeof y.latestValues.x == "string" || typeof y.latestValues.y == "string") && (y.isLayoutDirty = !0), y.updateScroll("snapshot"), y.options.layoutRoot && y.willUpdate(!1);
      }
      const { layoutId: d, layout: h } = this.options;
      if (d === void 0 && !h)
        return;
      const m = this.getTransformTemplate();
      this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0, this.updateSnapshot(), c && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        const h = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), h && this.nodes.forEach(DT), this.nodes.forEach(ng);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(rg);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(NT), this.nodes.forEach(IT), this.nodes.forEach(AT), this.nodes.forEach(OT)) : this.nodes.forEach(rg), this.clearAllSnapshots();
      const d = vt.now();
      at.delta = dn(0, 1e3 / 60, d - at.timestamp), at.timestamp = d, at.isProcessing = !0, Iu.update.process(at), Iu.preRender.process(at), Iu.render.process(at), at.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, wf.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(RT), this.sharedNodes.forEach(FT);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, je.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      je.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !wt(this.snapshot.measuredBox.x) && !wt(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let h = 0; h < this.path.length; h++)
          this.path[h].updateScroll();
      const c = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = Ye()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: d } = this.options;
      d && d.notify("LayoutMeasure", this.layout.layoutBox, c ? c.layoutBox : void 0);
    }
    updateScroll(c = "measure") {
      let d = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === c && (d = !1), d && this.instance) {
        const h = o(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: c,
          isRoot: h,
          offset: i(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : h
        };
      }
    }
    resetTransform() {
      if (!a)
        return;
      const c = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, d = this.projectionDelta && !S0(this.projectionDelta), h = this.getTransformTemplate(), m = h ? h(this.latestValues, "") : void 0, g = m !== this.prevTransformTemplateValue;
      c && this.instance && (d || mr(this.latestValues) || g) && (a(this.instance, m), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(c = !0) {
      const d = this.measurePageBox();
      let h = this.removeElementScroll(d);
      return c && (h = this.removeTransform(h)), WT(h), {
        animationId: this.root.animationId,
        measuredBox: d,
        layoutBox: h,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: c } = this.options;
      if (!c)
        return Ye();
      const d = c.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(HT))) {
        const { scroll: m } = this.root;
        m && (un(d.x, m.offset.x), un(d.y, m.offset.y));
      }
      return d;
    }
    removeElementScroll(c) {
      const d = Ye();
      if (qt(d, c), this.scroll?.wasRoot)
        return d;
      for (let h = 0; h < this.path.length; h++) {
        const m = this.path[h], { scroll: g, options: y } = m;
        m !== this.root && g && y.layoutScroll && (g.wasRoot && qt(d, c), un(d.x, g.offset.x), un(d.y, g.offset.y));
      }
      return d;
    }
    applyTransform(c, d = !1, h) {
      const m = h || Ye();
      qt(m, c);
      for (let g = 0; g < this.path.length; g++) {
        const y = this.path[g];
        !d && y.options.layoutScroll && y.scroll && y !== y.root && (un(m.x, -y.scroll.offset.x), un(m.y, -y.scroll.offset.y)), mr(y.latestValues) && ea(m, y.latestValues, y.layout?.layoutBox);
      }
      return mr(this.latestValues) && ea(m, this.latestValues, this.layout?.layoutBox), m;
    }
    removeTransform(c) {
      const d = Ye();
      qt(d, c);
      for (let h = 0; h < this.path.length; h++) {
        const m = this.path[h];
        if (!mr(m.latestValues))
          continue;
        let g;
        m.instance && (Rc(m.latestValues) && m.updateSnapshot(), g = Ye(), qt(g, m.measurePageBox())), Km(d, m.latestValues, m.snapshot?.layoutBox, g);
      }
      return mr(this.latestValues) && Km(d, this.latestValues), d;
    }
    setTargetDelta(c) {
      this.targetDelta = c, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(c) {
      this.options = {
        ...this.options,
        ...c,
        crossfade: c.crossfade !== void 0 ? c.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== at.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(c = !1) {
      const d = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = d.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = d.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = d.isSharedProjectionDirty);
      const h = !!this.resumingFrom || this !== d;
      if (!(c || h && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: g, layoutId: y } = this.options;
      if (!this.layout || !(g || y))
        return;
      this.resolvedRelativeTargetAt = at.timestamp;
      const w = this.getClosestProjectingParent();
      w && this.linkedParentVersion !== w.layoutVersion && !w.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && w && w.layout ? this.createRelativeTarget(w, this.layout.layoutBox, w.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Ye(), this.targetWithTransforms = Ye()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), hT(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : qt(this.target, this.layout.layoutBox), l0(this.target, this.targetDelta)) : qt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && w && !!w.resumingFrom == !!this.resumingFrom && !w.options.layoutScroll && w.target && this.animationProgress !== 1 ? this.createRelativeTarget(w, this.target, w.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Rc(this.parent.latestValues) || a0(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(c, d, h) {
      this.relativeParent = c, this.linkedParentVersion = c.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ye(), this.relativeTargetOrigin = Ye(), ha(this.relativeTargetOrigin, d, h, this.options.layoutAnchor || void 0), qt(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const c = this.getLead(), d = !!this.resumingFrom || this !== c;
      let h = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (h = !1), d && (this.isSharedProjectionDirty || this.isTransformDirty) && (h = !1), this.resolvedRelativeTargetAt === at.timestamp && (h = !1), h)
        return;
      const { layout: m, layoutId: g } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(m || g))
        return;
      qt(this.layoutCorrected, this.layout.layoutBox);
      const y = this.treeScale.x, w = this.treeScale.y;
      ZC(this.layoutCorrected, this.treeScale, this.path, d), c.layout && !c.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (c.target = c.layout.layoutBox, c.targetWithTransforms = Ye());
      const { target: b } = c;
      if (!b) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Fm(this.prevProjectionDelta.x, this.projectionDelta.x), Fm(this.prevProjectionDelta.y, this.projectionDelta.y)), ao(this.projectionDelta, this.layoutCorrected, b, this.latestValues), (this.treeScale.x !== y || this.treeScale.y !== w || !Jm(this.projectionDelta.x, this.prevProjectionDelta.x) || !Jm(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", b));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(c = !0) {
      if (this.options.visualElement?.scheduleRender(), c) {
        const d = this.getStack();
        d && d.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = ei(), this.projectionDelta = ei(), this.projectionDeltaWithTransform = ei();
    }
    setAnimationOrigin(c, d = !1, h) {
      const m = this.snapshot, g = m ? m.latestValues : {}, y = { ...this.latestValues }, w = ei();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !d;
      const b = Ye(), k = m ? m.source : void 0, T = this.layout ? this.layout.source : void 0, S = k !== T, R = this.getStack(), O = !R || R.members.length <= 1, I = !!(S && !O && this.options.crossfade === !0 && !this.path.some(UT));
      this.animationProgress = 0;
      let D;
      const K = h?.interpolateProjection(c);
      this.mixTargetDelta = (Z) => {
        const z = Z / 1e3, W = K?.(z);
        W ? (w.x.translate = W.x, w.x.scale = Oe(c.x.scale, 1, z), w.x.origin = c.x.origin, w.x.originPoint = c.x.originPoint, w.y.translate = W.y, w.y.scale = Oe(c.y.scale, 1, z), w.y.origin = c.y.origin, w.y.originPoint = c.y.originPoint) : (og(w.x, c.x, z), og(w.y, c.y, z)), this.setTargetDelta(w), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ha(b, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), BT(this.relativeTarget, this.relativeTargetOrigin, b, z), D && vT(this.relativeTarget, D) && (this.isProjectionDirty = !1), D || (D = Ye()), qt(D, this.relativeTarget)), S && (this.animationValues = y, bT(y, g, this.latestValues, z, I, O)), W && W.rotate !== void 0 && (this.animationValues || (this.animationValues = y), this.animationValues.pathRotation = W.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = z;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(c) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (_n(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = je.update(() => {
        na.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Pn(0)), this.motionValue.jump(0, !1), this.currentAnimation = E0(this.motionValue, [0, 1e3], {
          ...c,
          velocity: 0,
          isSync: !0,
          onUpdate: (d) => {
            this.mixTargetDelta(d), c.onUpdate && c.onUpdate(d);
          },
          onComplete: () => {
            c.onComplete && c.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const c = this.getStack();
      c && c.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(TT), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const c = this.getLead();
      let { targetWithTransforms: d, target: h, layout: m, latestValues: g } = c;
      if (!(!d || !h || !m)) {
        if (this !== c && this.layout && m && z0(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
          h = this.target || Ye();
          const y = wt(this.layout.layoutBox.x);
          h.x.min = c.target.x.min, h.x.max = h.x.min + y;
          const w = wt(this.layout.layoutBox.y);
          h.y.min = c.target.y.min, h.y.max = h.y.min + w;
        }
        qt(d, h), ea(d, g), ao(this.projectionDeltaWithTransform, this.layoutCorrected, d, g);
      }
    }
    registerSharedNode(c, d) {
      this.sharedNodes.has(c) || this.sharedNodes.set(c, new CT()), this.sharedNodes.get(c).add(d);
      const m = d.options.initialPromotionConfig;
      d.promote({
        transition: m ? m.transition : void 0,
        preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(d) : void 0
      });
    }
    isLead() {
      const c = this.getStack();
      return c ? c.lead === this : !0;
    }
    getLead() {
      const { layoutId: c } = this.options;
      return c ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: c } = this.options;
      return c ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: c } = this.options;
      if (c)
        return this.root.sharedNodes.get(c);
    }
    promote({ needsReset: c, transition: d, preserveFollowOpacity: h } = {}) {
      const m = this.getStack();
      m && m.promote(this, h), c && (this.projectionDelta = void 0, this.needsReset = !0), d && this.setOptions({ transition: d });
    }
    relegate() {
      const c = this.getStack();
      return c ? c.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: c } = this.options;
      if (!c)
        return;
      let d = !1;
      const { latestValues: h } = c;
      if ((h.z || h.rotate || h.rotateX || h.rotateY || h.rotateZ || h.skewX || h.skewY) && (d = !0), !d)
        return;
      const m = {};
      h.z && Hu("z", c, m, this.animationValues);
      for (let g = 0; g < Wu.length; g++)
        Hu(`rotate${Wu[g]}`, c, m, this.animationValues), Hu(`skew${Wu[g]}`, c, m, this.animationValues);
      c.render();
      for (const g in m)
        c.setStaticValue(g, m[g]), this.animationValues && (this.animationValues[g] = m[g]);
      c.scheduleRender();
    }
    applyProjectionStyles(c, d) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        c.visibility = "hidden";
        return;
      }
      const h = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, c.visibility = "", c.opacity = "", c.pointerEvents = ta(d?.pointerEvents) || "", c.transform = h ? h(this.latestValues, "") : "none";
        return;
      }
      const m = this.getLead();
      if (!this.projectionDelta || !this.layout || !m.target) {
        this.options.layoutId && (c.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, c.pointerEvents = ta(d?.pointerEvents) || ""), this.hasProjected && !mr(this.latestValues) && (c.transform = h ? h({}, "") : "none", this.hasProjected = !1);
        return;
      }
      c.visibility = "";
      const g = m.animationValues || m.latestValues;
      this.applyTransformsToTarget();
      let y = wT(this.projectionDeltaWithTransform, this.treeScale, g);
      h && (y = h(g, y)), c.transform = y;
      const { x: w, y: b } = this.projectionDelta;
      c.transformOrigin = `${w.origin * 100}% ${b.origin * 100}% 0`, m.animationValues ? c.opacity = m === this ? g.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : g.opacityExit : c.opacity = m === this ? g.opacity !== void 0 ? g.opacity : "" : g.opacityExit !== void 0 ? g.opacityExit : 0;
      for (const k in Nc) {
        if (g[k] === void 0)
          continue;
        const { correct: T, applyTo: S, isCSSVariable: R } = Nc[k], O = y === "none" ? g[k] : T(g[k], m);
        if (S) {
          const I = S.length;
          for (let D = 0; D < I; D++)
            c[S[D]] = O;
        } else
          R ? this.options.visualElement.renderState.vars[k] = O : c[k] = O;
      }
      this.options.layoutId && (c.pointerEvents = m === this ? ta(d?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((c) => c.currentAnimation?.stop()), this.root.nodes.forEach(ng), this.root.sharedNodes.clear();
    }
  };
}
function AT(e) {
  e.updateLayout();
}
function OT(e) {
  const t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: i, measuredBox: o } = e.layout, { animationType: a } = e.options, l = t.source !== e.layout.source;
    if (a === "size")
      ln((g) => {
        const y = l ? t.measuredBox[g] : t.layoutBox[g], w = wt(y);
        y.min = i[g].min, y.max = y.min + w;
      });
    else if (a === "x" || a === "y") {
      const g = a === "x" ? "y" : "x";
      Ic(l ? t.measuredBox[g] : t.layoutBox[g], i[g]);
    } else z0(a, t.layoutBox, i) && ln((g) => {
      const y = l ? t.measuredBox[g] : t.layoutBox[g], w = wt(i[g]);
      y.max = y.min + w, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[g].max = e.relativeTarget[g].min + w);
    });
    const c = ei();
    ao(c, i, t.layoutBox);
    const d = ei();
    l ? ao(d, e.applyTransform(o, !0), t.measuredBox) : ao(d, i, t.layoutBox);
    const h = !S0(c);
    let m = !1;
    if (!e.resumeFrom) {
      const g = e.getClosestProjectingParent();
      if (g && !g.resumeFrom) {
        const { snapshot: y, layout: w } = g;
        if (y && w) {
          const b = e.options.layoutAnchor || void 0, k = Ye();
          ha(k, t.layoutBox, y.layoutBox, b);
          const T = Ye();
          ha(T, i, w.layoutBox, b), _0(k, T) || (m = !0), g.options.layoutRoot && (e.relativeTarget = T, e.relativeTargetOrigin = k, e.relativeParent = g);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: i,
      snapshot: t,
      delta: d,
      layoutDelta: c,
      hasLayoutChanged: h,
      hasRelativeLayoutChanged: m
    });
  } else if (e.isLead()) {
    const { onExitComplete: i } = e.options;
    i && i();
  }
  e.options.transition = void 0;
}
function jT(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function MT(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function RT(e) {
  e.clearSnapshot();
}
function ng(e) {
  e.clearMeasurements();
}
function DT(e) {
  e.isLayoutDirty = !0, e.updateLayout();
}
function rg(e) {
  e.isLayoutDirty = !1;
}
function NT(e) {
  e.isAnimationBlocked && e.layout && !e.isLayoutDirty && (e.snapshot = e.layout, e.isLayoutDirty = !0);
}
function IT(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function ig(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function LT(e) {
  e.resolveTargetDelta();
}
function $T(e) {
  e.calcProjection();
}
function VT(e) {
  e.resetSkewAndRotation();
}
function FT(e) {
  e.removeLeadSnapshot();
}
function og(e, t, i) {
  e.translate = Oe(t.translate, 0, i), e.scale = Oe(t.scale, 1, i), e.origin = t.origin, e.originPoint = t.originPoint;
}
function sg(e, t, i, o) {
  e.min = Oe(t.min, i.min, o), e.max = Oe(t.max, i.max, o);
}
function BT(e, t, i, o) {
  sg(e.x, t.x, i.x, o), sg(e.y, t.y, i.y, o);
}
function UT(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const ZT = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, ag = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), lg = ag("applewebkit/") && !ag("chrome/") ? Math.round : Bt;
function ug(e) {
  e.min = lg(e.min), e.max = lg(e.max);
}
function WT(e) {
  ug(e.x), ug(e.y);
}
function z0(e, t, i) {
  return e === "position" || e === "preserve-aspect" && !pT(Qm(t), Qm(i), 0.2);
}
function HT(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
const KT = T0({
  attachResizeListener: (e, t) => xo(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => !0
}), Ku = {
  current: void 0
}, A0 = T0({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Ku.current) {
      const e = new KT({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Ku.current = e;
    }
    return Ku.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Aa = N.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
function cg(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function GT(...e) {
  return (t) => {
    let i = !1;
    const o = e.map((a) => {
      const l = cg(a, t);
      return !i && typeof l == "function" && (i = !0), l;
    });
    if (i)
      return () => {
        for (let a = 0; a < o.length; a++) {
          const l = o[a];
          typeof l == "function" ? l() : cg(e[a], null);
        }
      };
  };
}
function YT(...e) {
  return N.useCallback(GT(...e), e);
}
class XT extends N.Component {
  getSnapshotBeforeUpdate(t) {
    const i = this.props.childRef.current;
    if (Ys(i) && t.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const o = i.offsetParent, a = Ys(o) && o.offsetWidth || 0, l = Ys(o) && o.offsetHeight || 0, c = getComputedStyle(i), d = this.props.sizeRef.current;
      d.height = parseFloat(c.height), d.width = parseFloat(c.width), d.top = i.offsetTop, d.left = i.offsetLeft, d.right = a - d.width - d.left, d.bottom = l - d.height - d.top, d.direction = c.direction;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function QT({ children: e, isPresent: t, anchorX: i, anchorY: o, root: a, pop: l }) {
  const c = N.useId(), d = N.useRef(null), h = N.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    direction: "ltr"
  }), { nonce: m } = N.useContext(Aa), g = l !== !1 ? e.props?.ref ?? e?.ref : void 0, y = YT(d, g);
  return N.useInsertionEffect(() => {
    const { width: w, height: b, top: k, left: T, right: S, bottom: R, direction: O } = h.current;
    if (t || l === !1 || !d.current || !w || !b)
      return;
    const I = O === "rtl", D = i === "left" ? I ? `right: ${S}` : `left: ${T}` : I ? `left: ${T}` : `right: ${S}`, K = o === "bottom" ? `bottom: ${R}` : `top: ${k}`;
    d.current.dataset.motionPopId = c;
    const Z = document.createElement("style");
    m && (Z.nonce = m);
    const z = a ?? document.head;
    return z.appendChild(Z), Z.sheet && Z.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${w}px !important;
            height: ${b}px !important;
            ${D}px !important;
            ${K}px !important;
          }
        `), () => {
      d.current?.removeAttribute("data-motion-pop-id"), z.contains(Z) && z.removeChild(Z);
    };
  }, [t]), C.jsx(XT, { isPresent: t, childRef: d, sizeRef: h, pop: l, children: l === !1 ? e : N.cloneElement(e, { ref: y }) });
}
const JT = ({ children: e, initial: t, isPresent: i, onExitComplete: o, custom: a, presenceAffectsLayout: l, mode: c, anchorX: d, anchorY: h, root: m }) => {
  const g = Sr(qT), y = N.useId(), w = N.useRef(i), b = N.useRef(o);
  mo(() => {
    w.current = i, b.current = o;
  });
  let k = !0, T = N.useMemo(() => (k = !1, {
    id: y,
    initial: t,
    isPresent: i,
    custom: a,
    onExitComplete: (S) => {
      g.set(S, !0);
      for (const R of g.values())
        if (!R)
          return;
      o && o();
    },
    register: (S) => (g.set(S, !1), () => {
      g.delete(S), !w.current && !g.size && b.current?.();
    })
  }), [i, g, o]);
  return l && k && (T = { ...T }), N.useMemo(() => {
    g.forEach((S, R) => g.set(R, !1));
  }, [i]), N.useEffect(() => {
    !i && !g.size && o && o();
  }, [i]), e = C.jsx(QT, { pop: c === "popLayout", isPresent: i, anchorX: d, anchorY: h, root: m, children: e }), C.jsx(Sa.Provider, { value: T, children: e });
};
function qT() {
  return /* @__PURE__ */ new Map();
}
function O0(e = !0) {
  const t = N.useContext(Sa);
  if (t === null)
    return [!0, null];
  const { isPresent: i, onExitComplete: o, register: a } = t, l = N.useId();
  N.useEffect(() => {
    if (e)
      return a(l);
  }, [e]);
  const c = N.useCallback(() => e && o && o(l), [l, o, e]);
  return !i && o ? [!1, c] : [!0];
}
const Zs = (e) => e.key || "";
function fg(e) {
  const t = [];
  return N.Children.forEach(e, (i) => {
    N.isValidElement(i) && t.push(i);
  }), t;
}
const ez = ({ children: e, custom: t, initial: i = !0, onExitComplete: o, presenceAffectsLayout: a = !0, mode: l = "sync", propagate: c = !1, anchorX: d = "left", anchorY: h = "top", root: m }) => {
  const [g, y] = O0(c), w = N.useMemo(() => fg(e), [e]), b = c && !g ? [] : w.map(Zs), k = N.useRef(!0), T = N.useRef(w), S = Sr(() => /* @__PURE__ */ new Map()), R = N.useRef(/* @__PURE__ */ new Set()), [O, I] = N.useState(w), [D, K] = N.useState(w);
  mo(() => {
    c && !g && !D.length && y?.();
  }, [g, c, D.length, y]), mo(() => {
    k.current = !1, T.current = w;
    for (let W = 0; W < D.length; W++) {
      const G = Zs(D[W]);
      b.includes(G) ? (S.delete(G), R.current.delete(G)) : S.get(G) !== !0 && S.set(G, !1);
    }
  }, [D, b.length, b.join("-")]);
  const Z = [];
  if (w !== O) {
    let W = [...w], G = 0;
    for (const le of D) {
      const ue = b.indexOf(Zs(le));
      ue === -1 ? (W.splice(G++, 0, le), Z.push(le)) : G = ue + Z.length + 1;
    }
    return l === "wait" && Z.length && (W = Z), K(fg(W)), I(w), null;
  }
  const { forceRender: z } = N.useContext(Qc);
  return C.jsx(C.Fragment, { children: D.map((W) => {
    const G = Zs(W), le = c && !g ? !1 : w === D || b.includes(G), ue = () => {
      if (R.current.has(G))
        return;
      if (S.has(G))
        R.current.add(G), S.set(G, !0);
      else
        return;
      let se = !0;
      S.forEach((ce) => {
        ce || (se = !1);
      }), se && (z?.(), K(T.current), c && y?.(), o && o());
    };
    return C.jsx(JT, { isPresent: le, initial: !k.current || i ? void 0 : !1, custom: t, presenceAffectsLayout: a, mode: l, root: m, onExitComplete: le ? void 0 : ue, anchorX: d, anchorY: h, children: W }, G);
  }) });
}, j0 = N.createContext({ strict: !1 }), dg = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
let pg = !1;
function tz() {
  if (pg)
    return;
  const e = {};
  for (const t in dg)
    e[t] = {
      isEnabled: (i) => dg[t].some((o) => !!i[o])
    };
  r0(e), pg = !0;
}
function M0() {
  return tz(), FC();
}
function nz(e) {
  const t = M0();
  for (const i in e)
    t[i] = {
      ...t[i],
      ...e[i]
    };
  r0(t);
}
const Oa = /* @__PURE__ */ N.createContext({});
function rz(e, t) {
  if (za(e)) {
    const { initial: i, animate: o } = e;
    return {
      initial: i === !1 || wo(i) ? i : void 0,
      animate: wo(o) ? o : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function iz(e) {
  const { initial: t, animate: i } = rz(e, N.useContext(Oa));
  return N.useMemo(() => ({ initial: t, animate: i }), [hg(t), hg(i)]);
}
function hg(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Pf = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function R0(e, t, i) {
  for (const o in t)
    !et(t[o]) && !f0(o, i) && (e[o] = t[o]);
}
function oz({ transformTemplate: e }, t) {
  return N.useMemo(() => {
    const i = Pf();
    return Sf(i, t, e), Object.assign({}, i.vars, i.style);
  }, [t]);
}
function sz(e, t) {
  const i = e.style || {}, o = {};
  return R0(o, i, e), Object.assign(o, oz(e, t)), o;
}
function az(e, t) {
  const i = {}, o = sz(e, t);
  return e.drag && e.dragListener !== !1 && (i.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (i.tabIndex = 0), i.style = o, i;
}
const D0 = () => ({
  ...Pf(),
  attrs: {}
});
function lz(e, t, i, o) {
  const a = N.useMemo(() => {
    const l = D0();
    return h0(l, t, g0(o), e.transformTemplate, e.style), {
      ...l.attrs,
      style: { ...l.style }
    };
  }, [t]);
  if (e.style) {
    const l = {};
    R0(l, e.style, e), a.style = { ...l, ...a.style };
  }
  return a;
}
const uz = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport"
]);
function ma(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || uz.has(e);
}
function cz(e, t) {
  return e.startsWith("on") ? !ma(e) : t?.(e) ?? !ma(e);
}
function fz(e, t, i, o) {
  const a = {};
  for (const l in e)
    l === "values" && typeof e.values == "object" || et(e[l]) || (cz(l, o) || i === !0 && ma(l) || !t && !ma(l) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && l.startsWith("onDrag")) && (a[l] = e[l]);
  return a;
}
const dz = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Ef(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(dz.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function pz(e, t, i, { latestValues: o }, a, l = !1, c, d) {
  const m = (c ?? Ef(e) ? lz : az)(t, o, a, e), g = fz(t, typeof e == "string", l, d), y = e !== N.Fragment ? { ...g, ...m, ref: i } : {}, { children: w } = t, b = N.useMemo(() => et(w) ? w.get() : w, [w]);
  return N.createElement(e, {
    ...y,
    children: b
  });
}
function hz({ scrapeMotionValuesFromProps: e, createRenderState: t }, i, o, a) {
  return {
    latestValues: mz(i, o, a, e),
    renderState: t()
  };
}
function mz(e, t, i, o) {
  const a = {}, l = o(e, {});
  for (const w in l)
    a[w] = ta(l[w]);
  let { initial: c, animate: d } = e;
  const h = za(e), m = t0(e);
  t && m && !h && e.inherit !== !1 && (c === void 0 && (c = t.initial), d === void 0 && (d = t.animate));
  let g = i ? i.initial === !1 : !1;
  g = g || c === !1;
  const y = g ? d : c;
  if (y && typeof y != "boolean" && !Ta(y)) {
    const w = Array.isArray(y) ? y : [y];
    for (let b = 0; b < w.length; b++) {
      const k = pf(e, w[b]);
      if (k) {
        const { transitionEnd: T, transition: S, ...R } = k;
        for (const O in R) {
          let I = R[O];
          if (Array.isArray(I)) {
            const D = g ? I.length - 1 : 0;
            I = I[D];
          }
          I !== null && (a[O] = I);
        }
        for (const O in T)
          a[O] = T[O];
      }
    }
  }
  return a;
}
const N0 = (e) => (t, i) => {
  const o = N.useContext(Oa), a = N.useContext(Sa), l = () => hz(e, t, o, a);
  return i ? l() : Sr(l);
}, gz = /* @__PURE__ */ N0({
  scrapeMotionValuesFromProps: _f,
  createRenderState: Pf
}), yz = /* @__PURE__ */ N0({
  scrapeMotionValuesFromProps: y0,
  createRenderState: D0
}), vz = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function wz(e, t, i) {
  const o = N.useRef(i);
  N.useInsertionEffect(() => {
    o.current = i;
  });
  const a = N.useRef(null);
  return N.useCallback((l) => {
    l && e.onMount?.(l), t && (l ? t.mount(l) : t.unmount());
    const c = o.current;
    if (typeof c == "function")
      if (l) {
        const d = c(l);
        typeof d == "function" && (a.current = d);
      } else a.current ? (a.current(), a.current = null) : c(l);
    else c && (c.current = l);
  }, [t]);
}
const I0 = N.createContext({});
function Xr(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function xz(e, t, i, o, a, l) {
  const { visualElement: c } = N.useContext(Oa), d = N.useContext(j0), h = N.useContext(Sa), m = N.useContext(Aa), g = m.reducedMotion, y = m.skipAnimations, w = N.useRef(null), b = N.useRef(!1);
  o = o || d.renderer, !w.current && o && (w.current = o(e, {
    visualState: t,
    parent: c,
    props: i,
    presenceContext: h,
    blockInitialAnimation: h ? h.initial === !1 : !1,
    reducedMotionConfig: g,
    skipAnimations: y,
    isSVG: l
  }), b.current && w.current && (w.current.manuallyAnimateOnMount = !0));
  const k = w.current, T = N.useContext(I0);
  k && !k.projection && a && (k.type === "html" || k.type === "svg") && bz(w.current, i, a, T);
  const S = N.useRef(!1);
  N.useInsertionEffect(() => {
    k && S.current && k.update(i, h);
  });
  const R = i[Uv], O = N.useRef(!!R && typeof window < "u" && !window.MotionHandoffIsComplete?.(R) && window.MotionHasOptimisedAnimation?.(R));
  return mo(() => {
    b.current = !0, k && (S.current = !0, window.MotionIsMounted = !0, k.updateFeatures(), k.scheduleRenderMicrotask(), O.current && k.animationState && k.animationState.animateChanges());
  }), N.useEffect(() => {
    k && (!O.current && k.animationState && k.animationState.animateChanges(), O.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(R);
    }), O.current = !1), k.enteringChildren = void 0);
  }), k;
}
function bz(e, t, i, o) {
  const { layoutId: a, layout: l, drag: c, dragConstraints: d, layoutScroll: h, layoutRoot: m, layoutAnchor: g, layoutCrossfade: y } = t;
  e.projection = new i(e.latestValues, t["data-framer-portal-id"] ? void 0 : L0(e.parent)), e.projection.setOptions({
    layoutId: a,
    layout: l,
    alwaysMeasureLayout: !!c || d && Xr(d),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof l == "string" ? l : "both",
    initialPromotionConfig: o,
    crossfade: y,
    layoutScroll: h,
    layoutRoot: m,
    layoutAnchor: g
  });
}
function L0(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : L0(e.parent);
}
function Gu(e, { forwardMotionProps: t = !1, type: i } = {}, o, a) {
  o && nz(o);
  const l = i ? i === "svg" : Ef(e), c = l ? yz : gz;
  function d(m, g) {
    let y;
    const w = {
      ...N.useContext(Aa),
      ...m,
      layoutId: kz(m)
    }, { isStatic: b, isValidProp: k } = w, T = iz(m), S = c(m, b);
    if (!b && typeof window < "u") {
      Sz();
      const R = _z(w);
      y = R.MeasureLayout, T.visualElement = xz(e, S, w, a, R.ProjectionNode, l);
    }
    return C.jsxs(Oa.Provider, { value: T, children: [y && T.visualElement ? C.jsx(y, { visualElement: T.visualElement, ...w }) : null, pz(e, m, wz(S, T.visualElement, g), S, b, t, l, k)] });
  }
  d.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const h = N.forwardRef(d);
  return h[vz] = e, h;
}
function kz({ layoutId: e }) {
  const t = N.useContext(Qc).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Sz(e, t) {
  N.useContext(j0).strict;
}
function _z(e) {
  const t = M0(), { drag: i, layout: o } = t;
  if (!i && !o)
    return {};
  const a = { ...i, ...o };
  return {
    MeasureLayout: i?.isEnabled(e) || o?.isEnabled(e) ? a.MeasureLayout : void 0,
    ProjectionNode: a.ProjectionNode
  };
}
function Pz(e, t) {
  if (typeof Proxy > "u")
    return Gu;
  const i = /* @__PURE__ */ new Map(), o = (l, c) => Gu(l, c, e, t), a = (l, c) => o(l, c);
  return new Proxy(a, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (l, c) => c === "create" ? o : (i.has(c) || i.set(c, Gu(c, void 0, e, t)), i.get(c))
  });
}
const Ez = (e, t) => t.isSVG ?? Ef(e) ? new v0(t) : new d0(t, {
  allowProjection: e !== N.Fragment
});
class Cz extends qn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = aT(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ta(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: i } = this.node.prevProps || {};
    t !== i && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let Tz = 0;
class zz extends qn {
  constructor() {
    super(...arguments), this.id = Tz++, this.isExitComplete = !1;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: i } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o)
      return;
    if (t && o === !1) {
      if (this.isExitComplete) {
        const { initial: l, custom: c } = this.node.getProps();
        if (typeof l == "string" || typeof l == "object" && l !== null && !Array.isArray(l)) {
          const d = xr(this.node, l, c);
          if (d) {
            const { transition: h, transitionEnd: m, ...g } = d;
            for (const y in g)
              this.node.getValue(y)?.jump(g[y]);
          }
        }
        this.node.animationState.reset(), this.node.animationState.animateChanges();
      } else
        this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const a = this.node.animationState.setActive("exit", !t);
    i && !t && a.then(() => {
      this.isExitComplete = !0, i(this.id);
    });
  }
  mount() {
    const { register: t, onExitComplete: i } = this.node.presenceContext || {};
    i && i(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const Az = {
  animation: {
    Feature: Cz
  },
  exit: {
    Feature: zz
  }
};
function Po(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const Oz = (e) => (t) => xf(t) && e(t, Po(t));
function lo(e, t, i, o) {
  return xo(e, t, Oz(i), o);
}
const $0 = ({ current: e }) => e ? e.ownerDocument.defaultView : null, mg = (e, t) => Math.abs(e - t);
function jz(e, t) {
  const i = mg(e.x, t.x), o = mg(e.y, t.y);
  return Math.sqrt(i ** 2 + o ** 2);
}
const gg = /* @__PURE__ */ new Set(["auto", "scroll"]);
class V0 {
  constructor(t, i, { transformPagePoint: o, contextWindow: a = window, dragSnapToOrigin: l = !1, distanceThreshold: c = 3, element: d } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (k) => {
      this.handleScroll(k.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Ws(this.lastRawMoveEventInfo, this.transformPagePoint));
      const k = Yu(this.lastMoveEventInfo, this.history), T = this.startEvent !== null, S = jz(k.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!T && !S)
        return;
      const { point: R } = k, { timestamp: O } = at;
      this.history.push({ ...R, timestamp: O });
      const { onStart: I, onMove: D } = this.handlers;
      T || (I && I(this.lastMoveEvent, k), this.startEvent = this.lastMoveEvent), D && D(this.lastMoveEvent, k);
    }, this.handlePointerMove = (k, T) => {
      this.lastMoveEvent = k, this.lastRawMoveEventInfo = T, this.lastMoveEventInfo = Ws(T, this.transformPagePoint), je.update(this.updatePoint, !0);
    }, this.handlePointerUp = (k, T) => {
      this.end();
      const { onEnd: S, onSessionEnd: R, resumeAnimation: O } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && O && O(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const I = Yu(k.type === "pointercancel" ? this.lastMoveEventInfo : Ws(T, this.transformPagePoint), this.history);
      this.startEvent && S && S(k, I), R && R(k, I);
    }, !xf(t))
      return;
    this.dragSnapToOrigin = l, this.handlers = i, this.transformPagePoint = o, this.distanceThreshold = c, this.contextWindow = a || window;
    const h = Po(t), m = Ws(h, this.transformPagePoint), { point: g } = m, { timestamp: y } = at;
    this.history = [{ ...g, timestamp: y }];
    const { onSessionStart: w } = i;
    w && w(t, Yu(m, this.history));
    const b = { passive: !0, capture: !0 };
    this.removeListeners = ko(lo(this.contextWindow, "pointermove", this.handlePointerMove, b), lo(this.contextWindow, "pointerup", this.handlePointerUp, b), lo(this.contextWindow, "pointercancel", this.handlePointerUp, b)), d && this.startScrollTracking(d);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(t) {
    let i = t.parentElement;
    for (; i; ) {
      const o = getComputedStyle(i);
      (gg.has(o.overflowX) || gg.has(o.overflowY)) && this.scrollPositions.set(i, {
        x: i.scrollLeft,
        y: i.scrollTop
      }), i = i.parentElement;
    }
    this.scrollPositions.set(window, {
      x: window.scrollX,
      y: window.scrollY
    }), window.addEventListener("scroll", this.onElementScroll, {
      capture: !0
    }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
      window.removeEventListener("scroll", this.onElementScroll, {
        capture: !0
      }), window.removeEventListener("scroll", this.onWindowScroll);
    };
  }
  /**
   * Handle scroll compensation during drag.
   *
   * For element scroll: adjusts history origin since pageX/pageY doesn't change.
   * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
   */
  handleScroll(t) {
    const i = this.scrollPositions.get(t);
    if (!i)
      return;
    const o = t === window, a = o ? { x: window.scrollX, y: window.scrollY } : {
      x: t.scrollLeft,
      y: t.scrollTop
    }, l = { x: a.x - i.x, y: a.y - i.y };
    l.x === 0 && l.y === 0 || (o ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += l.x, this.lastMoveEventInfo.point.y += l.y) : this.history.length > 0 && (this.history[0].x -= l.x, this.history[0].y -= l.y), this.scrollPositions.set(t, a), je.update(this.updatePoint, !0));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), _n(this.updatePoint);
  }
}
function Ws(e, t) {
  return t ? { point: t(e.point) } : e;
}
function yg(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Yu({ point: e }, t) {
  return {
    point: e,
    delta: yg(e, F0(t)),
    offset: yg(e, Mz(t)),
    velocity: Rz(t, 0.1)
  };
}
function Mz(e) {
  return e[0];
}
function F0(e) {
  return e[e.length - 1];
}
function Rz(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let i = e.length - 1, o = null;
  const a = F0(e);
  for (; i >= 0 && (o = e[i], !(a.timestamp - o.timestamp > /* @__PURE__ */ Mt(t))); )
    i--;
  if (!o)
    return { x: 0, y: 0 };
  o === e[0] && e.length > 2 && a.timestamp - o.timestamp > /* @__PURE__ */ Mt(t) * 2 && (o = e[1]);
  const l = /* @__PURE__ */ Ft(a.timestamp - o.timestamp);
  if (l === 0)
    return { x: 0, y: 0 };
  const c = {
    x: (a.x - o.x) / l,
    y: (a.y - o.y) / l
  };
  return c.x === 1 / 0 && (c.x = 0), c.y === 1 / 0 && (c.y = 0), c;
}
function Dz(e, { min: t, max: i }, o) {
  return t !== void 0 && e < t ? e = o ? Oe(t, e, o.min) : Math.max(e, t) : i !== void 0 && e > i && (e = o ? Oe(i, e, o.max) : Math.min(e, i)), e;
}
function vg(e, t, i) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: i !== void 0 ? e.max + i - (e.max - e.min) : void 0
  };
}
function Nz(e, { top: t, left: i, bottom: o, right: a }) {
  return {
    x: vg(e.x, i, a),
    y: vg(e.y, t, o)
  };
}
function wg(e, t) {
  let i = t.min - e.min, o = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([i, o] = [o, i]), { min: i, max: o };
}
function Iz(e, t) {
  return {
    x: wg(e.x, t.x),
    y: wg(e.y, t.y)
  };
}
function Lz(e, t) {
  let i = 0.5;
  const o = wt(e), a = wt(t);
  return a > o ? i = /* @__PURE__ */ oi(t.min, t.max - o, e.min) : o > a && (i = /* @__PURE__ */ oi(e.min, e.max - a, t.min)), dn(0, 1, i);
}
function $z(e, t) {
  const i = {};
  return t.min !== void 0 && (i.min = t.min - e.min), t.max !== void 0 && (i.max = t.max - e.min), i;
}
const Lc = 0.35;
function Vz(e = Lc) {
  return e === !1 ? e = 0 : e === !0 && (e = Lc), {
    x: xg(e, "left", "right"),
    y: xg(e, "top", "bottom")
  };
}
function xg(e, t, i) {
  return {
    min: bg(e, t),
    max: bg(e, i)
  };
}
function bg(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Fz = /* @__PURE__ */ new WeakMap();
class Bz {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ye(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t;
  }
  start(t, { snapToCursor: i = !1, distanceThreshold: o } = {}) {
    const { presenceContext: a } = this.visualElement;
    if (a && a.isPresent === !1)
      return;
    const l = (y) => {
      i && this.snapToCursor(Po(y).point), this.stopAnimation();
    }, c = (y, w) => {
      const { drag: b, dragPropagation: k, onDragStart: T } = this.getProps();
      if (b && !k && (this.openDragLock && this.openDragLock(), this.openDragLock = vC(b), !this.openDragLock))
        return;
      this.latestPointerEvent = y, this.latestPanInfo = w, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ln((R) => {
        let O = this.getAxisMotionValue(R).get() || 0;
        if (cn.test(O)) {
          const { projection: I } = this.visualElement;
          if (I && I.layout) {
            const D = I.layout.layoutBox[R];
            D && (O = wt(D) * (parseFloat(O) / 100));
          }
        }
        this.originPoint[R] = O;
      }), T && je.update(() => T(y, w), !1, !0), Tc(this.visualElement, "transform");
      const { animationState: S } = this.visualElement;
      S && S.setActive("whileDrag", !0);
    }, d = (y, w) => {
      this.latestPointerEvent = y, this.latestPanInfo = w;
      const { dragPropagation: b, dragDirectionLock: k, onDirectionLock: T, onDrag: S } = this.getProps();
      if (!b && !this.openDragLock)
        return;
      const { offset: R } = w;
      if (k && this.currentDirection === null) {
        this.currentDirection = Zz(R), this.currentDirection !== null && T && T(this.currentDirection);
        return;
      }
      this.updateAxis("x", w.point, R), this.updateAxis("y", w.point, R), this.visualElement.render(), S && je.update(() => S(y, w), !1, !0);
    }, h = (y, w) => {
      this.latestPointerEvent = y, this.latestPanInfo = w, this.stop(y, w), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, m = () => {
      const { dragSnapToOrigin: y } = this.getProps();
      (y || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: g } = this.getProps();
    this.panSession = new V0(t, {
      onSessionStart: l,
      onStart: c,
      onMove: d,
      onSessionEnd: h,
      resumeAnimation: m
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: g,
      distanceThreshold: o,
      contextWindow: $0(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(t, i) {
    const o = t || this.latestPointerEvent, a = i || this.latestPanInfo, l = this.isDragging;
    if (this.cancel(), !l || !a || !o)
      return;
    const { velocity: c } = a;
    this.startAnimation(c);
    const { onDragEnd: d } = this.getProps();
    d && je.postRender(() => d(o, a));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: i } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: o } = this.getProps();
    !o && this.openDragLock && (this.openDragLock(), this.openDragLock = null), i && i.setActive("whileDrag", !1);
  }
  /**
   * Clean up the pan session without modifying other drag state.
   * This is used during unmount to ensure event listeners are removed
   * without affecting projection animations or drag locks.
   * @internal
   */
  endPanSession() {
    this.panSession && this.panSession.end(), this.panSession = void 0;
  }
  updateAxis(t, i, o) {
    const { drag: a } = this.getProps();
    if (!o || !Hs(t, a, this.currentDirection))
      return;
    const l = this.getAxisMotionValue(t);
    let c = this.originPoint[t] + o[t];
    this.constraints && this.constraints[t] && (c = Dz(c, this.constraints[t], this.elastic[t])), l.set(c);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: i } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, a = this.constraints;
    t && Xr(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && o ? this.constraints = Nz(o.layoutBox, t) : this.constraints = !1, this.elastic = Vz(i), a !== this.constraints && !Xr(t) && o && this.constraints && !this.hasMutatedConstraints && ln((l) => {
      this.constraints !== !1 && this.getAxisMotionValue(l) && (this.constraints[l] = $z(o.layoutBox[l], this.constraints[l]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: i } = this.getProps();
    if (!t || !Xr(t))
      return !1;
    const o = t.current, { projection: a } = this.visualElement;
    if (!a || !a.layout)
      return !1;
    a.root && (a.root.scroll = void 0, a.root.updateScroll());
    const l = WC(o, a.root, this.visualElement.getTransformPagePoint());
    let c = Iz(a.layout.layoutBox, l);
    if (i) {
      const d = i(BC(c));
      this.hasMutatedConstraints = !!d, d && (c = s0(d));
    }
    return c;
  }
  startAnimation(t) {
    const { drag: i, dragMomentum: o, dragElastic: a, dragTransition: l, dragSnapToOrigin: c, onDragTransitionEnd: d } = this.getProps(), h = this.constraints || {}, m = ln((g) => {
      if (!Hs(g, i, this.currentDirection))
        return;
      let y = h && h[g] || {};
      (c === !0 || c === g) && (y = { min: 0, max: 0 });
      const w = a ? 200 : 1e6, b = a ? 40 : 1e7, k = {
        type: "inertia",
        velocity: o ? t[g] : 0,
        bounceStiffness: w,
        bounceDamping: b,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...l,
        ...y
      };
      return this.startAxisValueAnimation(g, k);
    });
    return Promise.all(m).then(d);
  }
  startAxisValueAnimation(t, i) {
    const o = this.getAxisMotionValue(t);
    return Tc(this.visualElement, t), o.start(Ea(t, o, 0, i, this.visualElement, !1));
  }
  stopAnimation() {
    ln((t) => this.getAxisMotionValue(t).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const i = `_drag${t.toUpperCase()}`, a = this.visualElement.getProps()[i];
    return a || this.visualElement.getValue(t, this.visualElement.latestValues[t] ?? 0);
  }
  snapToCursor(t) {
    ln((i) => {
      const { drag: o } = this.getProps();
      if (!Hs(i, o, this.currentDirection))
        return;
      const { projection: a } = this.visualElement, l = this.getAxisMotionValue(i);
      if (a && a.layout) {
        const { min: c, max: d } = a.layout.layoutBox[i], h = l.get() || 0;
        l.set(t[i] - Oe(c, d, 0.5) + h);
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: i } = this.getProps(), { projection: o } = this.visualElement;
    if (!Xr(i) || !o || !this.constraints)
      return;
    this.stopAnimation();
    const a = { x: 0, y: 0 };
    ln((c) => {
      const d = this.getAxisMotionValue(c);
      if (d && this.constraints !== !1) {
        const h = d.get();
        a[c] = Lz({ min: h, max: h }, this.constraints[c]);
      }
    });
    const { transformTemplate: l } = this.visualElement.getProps();
    this.visualElement.current.style.transform = l ? l({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.constraints = !1, this.resolveConstraints(), ln((c) => {
      if (!Hs(c, t, null))
        return;
      const d = this.getAxisMotionValue(c), { min: h, max: m } = this.constraints[c];
      d.set(Oe(h, m, a[c]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Fz.set(this.visualElement, this);
    const t = this.visualElement.current, i = lo(t, "pointerdown", (m) => {
      const { drag: g, dragListener: y = !0 } = this.getProps(), w = m.target, b = w !== t && _C(w);
      g && y && !b && this.start(m);
    });
    let o;
    const a = () => {
      const { dragConstraints: m } = this.getProps();
      Xr(m) && m.current && (this.constraints = this.resolveRefConstraints(), o || (o = Uz(t, m.current, () => this.scalePositionWithinConstraints())));
    }, { projection: l } = this.visualElement, c = l.addEventListener("measure", a);
    l && !l.layout && (l.root && l.root.updateScroll(), l.updateLayout()), je.read(a);
    const d = xo(window, "resize", () => this.scalePositionWithinConstraints()), h = l.addEventListener("didUpdate", (({ delta: m, hasLayoutChanged: g }) => {
      this.isDragging && g && (ln((y) => {
        const w = this.getAxisMotionValue(y);
        w && (this.originPoint[y] += m[y].translate, w.set(w.get() + m[y].translate));
      }), this.visualElement.render());
    }));
    return () => {
      d(), i(), c(), h && h(), o && o();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: i = !1, dragDirectionLock: o = !1, dragPropagation: a = !1, dragConstraints: l = !1, dragElastic: c = Lc, dragMomentum: d = !0 } = t;
    return {
      ...t,
      drag: i,
      dragDirectionLock: o,
      dragPropagation: a,
      dragConstraints: l,
      dragElastic: c,
      dragMomentum: d
    };
  }
}
function kg(e) {
  let t = !0;
  return () => {
    if (t) {
      t = !1;
      return;
    }
    e();
  };
}
function Uz(e, t, i) {
  const o = zm(e, kg(i)), a = zm(t, kg(i));
  return () => {
    o(), a();
  };
}
function Hs(e, t, i) {
  return (t === !0 || t === e) && (i === null || i === e);
}
function Zz(e, t = 10) {
  let i = null;
  return Math.abs(e.y) > t ? i = "y" : Math.abs(e.x) > t && (i = "x"), i;
}
class Wz extends qn {
  constructor(t) {
    super(t), this.removeGroupControls = Bt, this.removeListeners = Bt, this.controls = new Bz(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Bt;
  }
  update() {
    const { dragControls: t } = this.node.getProps(), { dragControls: i } = this.node.prevProps || {};
    t !== i && (this.removeGroupControls(), t && (this.removeGroupControls = t.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const Xu = (e) => (t, i) => {
  e && je.update(() => e(t, i), !1, !0);
};
class Hz extends qn {
  constructor() {
    super(...arguments), this.removePointerDownListener = Bt;
  }
  onPointerDown(t) {
    this.session = new V0(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: $0(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: i, onPan: o, onPanEnd: a } = this.node.getProps();
    return {
      onSessionStart: Xu(t),
      onStart: Xu(i),
      onMove: Xu(o),
      onEnd: (l, c) => {
        delete this.session, a && je.postRender(() => a(l, c));
      }
    };
  }
  mount() {
    this.removePointerDownListener = lo(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let Qu = !1;
class Kz extends N.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: i, switchLayoutGroup: o, layoutId: a } = this.props, { projection: l } = t;
    l && (i.group && i.group.add(l), o && o.register && a && o.register(l), Qu && l.root.didUpdate(), l.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), l.setOptions({
      ...l.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), na.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: i, visualElement: o, drag: a, isPresent: l } = this.props, { projection: c } = o;
    return c && (c.isPresent = l, t.layoutDependency !== i && c.setOptions({
      ...c.options,
      layoutDependency: i
    }), Qu = !0, a || t.layoutDependency !== i || i === void 0 || t.isPresent !== l ? c.willUpdate() : this.safeToRemove(), t.isPresent !== l && (l ? c.promote() : c.relegate() || je.postRender(() => {
      const d = c.getStack();
      (!d || !d.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: t, layoutAnchor: i } = this.props, { projection: o } = t;
    o && (o.options.layoutAnchor = i, o.root.didUpdate(), wf.postRender(() => {
      !o.currentAnimation && o.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: i, switchLayoutGroup: o } = this.props, { projection: a } = t;
    Qu = !0, a && (a.scheduleCheckAfterUnmount(), i && i.group && i.group.remove(a), o && o.deregister && o.deregister(a));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function B0(e) {
  const [t, i] = O0(), o = N.useContext(Qc);
  return C.jsx(Kz, { ...e, layoutGroup: o, switchLayoutGroup: N.useContext(I0), isPresent: t, safeToRemove: i });
}
const Gz = {
  pan: {
    Feature: Hz
  },
  drag: {
    Feature: Wz,
    ProjectionNode: A0,
    MeasureLayout: B0
  }
};
function Sg(e, t, i) {
  const { props: o } = e;
  e.animationState && o.whileHover && e.animationState.setActive("whileHover", i === "Start");
  const a = "onHover" + i, l = o[a];
  l && je.postRender(() => l(t, Po(t)));
}
class Yz extends qn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = xC(t, (i, o) => (Sg(this.node, o, "Start"), (a) => Sg(this.node, a, "End"))));
  }
  unmount() {
  }
}
class Xz extends qn {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = ko(xo(this.node.current, "focus", () => this.onFocus()), xo(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function _g(e, t, i) {
  const { props: o } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && o.whileTap && e.animationState.setActive("whileTap", i === "Start");
  const a = "onTap" + (i === "End" ? "" : i), l = o[a];
  l && je.postRender(() => l(t, Po(t)));
}
class Qz extends qn {
  mount() {
    const { current: t } = this.node;
    if (!t)
      return;
    const { globalTapTarget: i, propagate: o } = this.node.props;
    this.unmount = EC(t, (a, l) => (_g(this.node, l, "Start"), (c, { success: d }) => _g(this.node, c, d ? "End" : "Cancel")), {
      useGlobalTarget: i,
      stopPropagation: o?.tap === !1
    });
  }
  unmount() {
  }
}
const $c = /* @__PURE__ */ new WeakMap(), Ju = /* @__PURE__ */ new WeakMap(), Jz = (e) => {
  const t = $c.get(e.target);
  t && t(e);
}, qz = (e) => {
  e.forEach(Jz);
};
function e4({ root: e, ...t }) {
  const i = e || document;
  Ju.has(i) || Ju.set(i, {});
  const o = Ju.get(i), a = JSON.stringify(t);
  return o[a] || (o[a] = new IntersectionObserver(qz, { root: e, ...t })), o[a];
}
function t4(e, t, i) {
  const o = e4(t);
  return $c.set(e, i), o.observe(e), () => {
    $c.delete(e), o.unobserve(e);
  };
}
const n4 = {
  some: 0,
  all: 1
};
class r4 extends qn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: t = {} } = this.node.getProps(), { root: i, margin: o, amount: a = "some", once: l } = t, c = {
      root: i ? i.current : void 0,
      rootMargin: o,
      threshold: typeof a == "number" ? a : n4[a]
    }, d = (h) => {
      const { isIntersecting: m } = h;
      if (this.isInView === m || (this.isInView = m, l && !m && this.hasEnteredView))
        return;
      m && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", m);
      const { onViewportEnter: g, onViewportLeave: y } = this.node.getProps(), w = m ? g : y;
      w && w(h);
    };
    this.stopObserver = t4(this.node.current, c, d);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: i } = this.node;
    ["amount", "margin", "root"].some(i4(t, i)) && this.startObserver();
  }
  unmount() {
    this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function i4({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (i) => e[i] !== t[i];
}
const o4 = {
  inView: {
    Feature: r4
  },
  tap: {
    Feature: Qz
  },
  focus: {
    Feature: Xz
  },
  hover: {
    Feature: Yz
  }
}, s4 = {
  layout: {
    ProjectionNode: A0,
    MeasureLayout: B0
  }
}, a4 = {
  ...Az,
  ...o4,
  ...Gz,
  ...s4
}, l4 = /* @__PURE__ */ Pz(a4, Ez);
function U0(e) {
  const t = Sr(() => Pn(e)), { isStatic: i } = N.useContext(Aa);
  if (i) {
    const [, o] = N.useState(e);
    N.useEffect(() => t.on("change", o), []);
  }
  return t;
}
function Z0(e, t) {
  const i = U0(t()), o = () => i.set(t());
  return o(), mo(() => {
    const a = () => je.preRender(o, !1, !0), l = e.map((c) => c.on("change", a));
    return () => {
      l.forEach((c) => c()), _n(o);
    };
  }), i;
}
function u4(e) {
  so.current = [], e();
  const t = Z0(so.current, e);
  return so.current = void 0, t;
}
function W0(e, t, i, o) {
  if (typeof e == "function")
    return u4(e);
  if (i !== void 0 && !Array.isArray(i) && typeof t != "function")
    return c4(e, t, i, o);
  const c = typeof t == "function" ? t : DC(t, i, o), d = Array.isArray(e) ? Pg(e, c) : Pg([e], ([m]) => c(m)), h = Array.isArray(e) ? void 0 : e.accelerate;
  return h && !h.isTransformed && typeof t != "function" && Array.isArray(i) && o?.clamp !== !1 && (d.accelerate = {
    ...h,
    times: t,
    keyframes: i,
    isTransformed: !0
  }), d;
}
function Pg(e, t) {
  const i = Sr(() => []);
  return Z0(e, () => {
    i.length = 0;
    const o = e.length;
    for (let a = 0; a < o; a++)
      i[a] = e[a].get();
    return t(i);
  });
}
function c4(e, t, i, o) {
  const a = Sr(() => Object.keys(i)), l = Sr(() => ({}));
  for (const c of a)
    l[c] = W0(e, t, i[c], o);
  return l;
}
function Cf(e) {
  return typeof e == "object" && !Array.isArray(e);
}
function H0(e, t, i, o) {
  return e == null ? [] : typeof e == "string" && Cf(t) ? vf(e, i, o) : e instanceof NodeList ? Array.from(e) : Array.isArray(e) ? e.filter((a) => a != null) : [e];
}
function f4(e, t, i) {
  return e * (t + 1) + i * t;
}
function Eg(e, t, i, o) {
  return typeof t == "number" ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : t === "<" ? i : t.startsWith("<") ? Math.max(0, i + parseFloat(t.slice(1))) : o.get(t) ?? e;
}
function d4(e, t, i) {
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    a.at > t && a.at < i && (_r(e, a), o--);
  }
}
function p4(e, t, i, o, a, l) {
  d4(e, a, l);
  for (let c = 0; c < t.length; c++)
    e.push({
      value: t[c],
      at: Oe(a, l, o[c]),
      easing: /* @__PURE__ */ pv(i, c)
    });
}
function h4(e, t, i = 0) {
  const o = t + 1 + t * i;
  for (let a = 0; a < e.length; a++)
    e[a] = e[a] / o;
}
function m4(e, t) {
  return e.at === t.at ? e.value === null ? 1 : t.value === null ? -1 : 0 : e.at - t.at;
}
const g4 = "easeInOut", y4 = 20;
function v4(e, { defaultTransition: t = {}, ...i } = {}, o, a) {
  const l = t.duration || 0.3, c = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), h = {}, m = /* @__PURE__ */ new Map();
  let g = 0, y = 0, w = 0;
  for (let b = 0; b < e.length; b++) {
    const k = e[b];
    if (typeof k == "string") {
      m.set(k, y);
      continue;
    } else if (!Array.isArray(k)) {
      m.set(k.name, Eg(y, k.at, g, m));
      continue;
    }
    let [T, S, R = {}] = k;
    R.at !== void 0 && (y = Eg(y, R.at, g, m));
    let O = 0;
    const I = (D, K, Z, z = 0, W = 0) => {
      const G = w4(D), { delay: le = 0, times: ue = Tv(G), type: se = t.type || "keyframes", repeat: ce, repeatType: we, repeatDelay: _e = 0, ...Ce } = K;
      let { ease: ve = t.ease || "easeOut", duration: V } = K;
      const J = typeof le == "function" ? le(z, W) : le, X = G.length, P = df(se) ? se : a?.[se || "keyframes"];
      if (X <= 2 && P) {
        let pe = 100;
        if (X === 2 && k4(G)) {
          const be = G[1] - G[0];
          pe = Math.abs(be);
        }
        const ge = {
          ...t,
          ...Ce
        };
        V !== void 0 && (ge.duration = /* @__PURE__ */ Mt(V));
        const Se = Pv(ge, pe, P);
        ve = Se.ease, V = Se.duration;
      }
      V ?? (V = l);
      const $ = y + J;
      ue.length === 1 && ue[0] === 0 && (ue[1] = 1);
      const he = ue.length - G.length;
      if (he > 0 && Cv(ue, he), G.length === 1 && G.unshift(null), ce && ce < y4) {
        const pe = V > 0 ? _e / V : 0;
        V = f4(V, ce, _e);
        const ge = [...G], Se = [...ue];
        ve = Array.isArray(ve) ? [...ve] : [ve];
        const be = [...ve], xe = we === "reverse" || we === "mirror";
        let Ke = ge, Rt = be;
        xe && (Ke = [...ge].reverse(), we === "reverse" && (Rt = [...be].reverse().map((ht) => typeof ht == "function" ? /* @__PURE__ */ ef(ht) : ht)));
        for (let ht = 0; ht < ce; ht++) {
          const Zt = xe && ht % 2 === 0, U = Zt ? Ke : ge, q = Zt ? Rt : be, Te = (ht + 1) * (1 + pe);
          pe > 0 && (G.push(G[G.length - 1]), ue.push(Te), ve.push("linear")), G.push(...U);
          for (let ut = 0; ut < U.length; ut++)
            ue.push(Se[ut] + Te), ve.push(ut === 0 ? "linear" : /* @__PURE__ */ pv(q, ut - 1));
        }
        h4(ue, ce, pe);
      }
      const ye = $ + V;
      p4(Z, G, ve, ue, $, ye), O = Math.max(J + V, O), w = Math.max(ye, w);
    };
    if (et(T)) {
      const D = Cg(T, d);
      I(S, R, Tg("default", D));
    } else {
      const D = H0(T, S, o, h), K = D.length;
      for (let Z = 0; Z < K; Z++) {
        S = S, R = R;
        const z = D[Z], W = Cg(z, d);
        for (const G in S)
          I(S[G], x4(R, G), Tg(G, W), Z, K);
      }
    }
    g = y, y += O;
  }
  return d.forEach((b, k) => {
    for (const T in b) {
      const S = b[T];
      S.sort(m4);
      const R = [], O = [], I = [];
      for (let z = 0; z < S.length; z++) {
        const { at: W, value: G, easing: le } = S[z];
        R.push(G), O.push(/* @__PURE__ */ oi(0, w, W)), I.push(le || "easeOut");
      }
      O[0] !== 0 && (O.unshift(0), R.unshift(R[0]), I.unshift(g4)), O[O.length - 1] !== 1 && (O.push(1), R.push(null)), c.has(k) || c.set(k, {
        keyframes: {},
        transition: {}
      });
      const D = c.get(k);
      D.keyframes[T] = R;
      const { type: K, ...Z } = t;
      D.transition[T] = {
        ...Z,
        duration: w,
        ease: I,
        times: O,
        ...i
      };
    }
  }), c;
}
function Cg(e, t) {
  return !t.has(e) && t.set(e, {}), t.get(e);
}
function Tg(e, t) {
  return t[e] || (t[e] = []), t[e];
}
function w4(e) {
  return Array.isArray(e) ? e : [e];
}
function x4(e, t) {
  return e && e[t] ? {
    ...e,
    ...e[t]
  } : { ...e };
}
const b4 = (e) => typeof e == "number", k4 = (e) => e.every(b4);
function S4(e) {
  const t = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        transform: {},
        transformOrigin: {},
        style: {},
        vars: {},
        attrs: {}
      },
      latestValues: {}
    }
  }, i = Ca(e) && !e0(e) ? new v0(t) : new d0(t);
  i.mount(e), vo.set(e, i);
}
function _4(e) {
  const t = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {}
      },
      latestValues: {}
    }
  }, i = new JC(t);
  i.mount(e), vo.set(e, i);
}
function P4(e, t) {
  return et(e) || typeof e == "number" || typeof e == "string" && !Cf(t);
}
function K0(e, t, i, o) {
  const a = [];
  if (P4(e, t))
    a.push(E0(e, Cf(t) && t.default || t, i && (i.default || i)));
  else {
    if (e == null)
      return a;
    const l = H0(e, t, o), c = l.length;
    for (let d = 0; d < c; d++) {
      const h = l[d], m = { ...i };
      "delay" in m && typeof m.delay == "function" && (m.delay = m.delay(d, c));
      const g = h instanceof Element, y = g ? void 0 : mC(h);
      if (y) {
        a.push(...gC(y, h, t, m));
        continue;
      }
      const w = g ? S4 : _4;
      vo.has(h) || w(h);
      const b = vo.get(h);
      a.push(...mf(b, { ...t, transition: m }, {}));
    }
  }
  return a;
}
function E4(e, t, i) {
  const o = [], a = e.map((c) => {
    if (Array.isArray(c) && typeof c[0] == "function") {
      const d = c[0], h = Pn(0);
      return h.on("change", d), c.length === 1 ? [h, [0, 1]] : c.length === 2 ? [h, [0, 1], c[1]] : [h, c[1], c[2]];
    }
    return c;
  });
  return v4(a, t, i, { spring: yo }).forEach(({ keyframes: c, transition: d }, h) => {
    o.push(...K0(h, c, d));
  }), o;
}
function C4(e) {
  return Array.isArray(e) && e.some(Array.isArray);
}
function T4(e = {}) {
  const { scope: t, reduceMotion: i, skipAnimations: o } = e;
  function a(l, c, d) {
    let h = [], m;
    const g = {};
    if (i !== void 0 && (g.reduceMotion = i), o !== void 0 && (g.skipAnimations = o), C4(l)) {
      const { onComplete: w, ...b } = c || {};
      typeof w == "function" && (m = w), h = E4(l, { ...g, ...b }, t);
    } else {
      const { onComplete: w, ...b } = d || {};
      typeof w == "function" && (m = w), h = K0(l, c, { ...g, ...b }, t);
    }
    const y = new NE(h);
    return m && y.finished.then(m), t && (t.animations.push(y), y.finished.then(() => {
      _r(t.animations, y);
    })), y;
  }
  return a;
}
const z4 = Object.assign(T4(), {
  /**
   * Register an effect so `animate()` can animate the subjects it
   * claims, for instance `animate.addEffect(threeEffect)`. The most
   * recently added effect is tested first. DOM elements are always
   * animated directly.
   */
  addEffect: hC,
  removeEffect: Yv
}), Ks = l4;
function A4(e) {
  return Array.from(e.querySelectorAll(".pub-carousel__slide"));
}
function G0(e, t) {
  const i = e.querySelector(".pub-carousel__track"), o = A4(e).length;
  if (!i || o === 0) return;
  const a = e.dataset.loop === "true", l = a ? (t % o + o) % o : Math.min(Math.max(t, 0), o - 1);
  e.dataset.currentIndex = String(l), i.style.transform = `translateX(-${l * 100}%)`, e.querySelectorAll(".pub-carousel__dot").forEach((h, m) => {
    h.classList.toggle("is-active", m === l);
  });
  const c = e.querySelector(".pub-carousel__arrow--prev"), d = e.querySelector(".pub-carousel__arrow--next");
  c && (c.disabled = !a && l === 0), d && (d.disabled = !a && l === o - 1);
}
function O4(e, t) {
  G0(e, t);
}
function Y0(e, t) {
  const i = Number(e.dataset.currentIndex ?? "0");
  G0(e, i + t);
}
function zg(e) {
  e.querySelectorAll('[data-component="carousel"][data-autoplay]').forEach((t) => {
    if (t.dataset.autoplayWired === "true") return;
    const i = Number.parseInt(t.dataset.autoplay ?? "", 10);
    if (!Number.isFinite(i) || i <= 0) return;
    t.dataset.autoplayWired = "true";
    const o = window.setInterval(() => {
      if (!t.isConnected) {
        window.clearInterval(o);
        return;
      }
      Y0(t, 1);
    }, i);
  });
}
function j4(e, t) {
  e.querySelectorAll("[id]").forEach((i) => {
    i.id === t && i.classList.add("is-open");
  });
}
function M4(e) {
  e.closest(".pub-popup")?.classList.remove("is-open");
}
const Ag = /* @__PURE__ */ new WeakSet();
function Og(e) {
  (e instanceof HTMLElement || e instanceof Document || e instanceof ShadowRoot) && (Ag.has(e) || (Ag.add(e), e.addEventListener("keydown", (t) => {
    !(t instanceof KeyboardEvent) || t.key !== "Escape" || e.querySelector(".pub-popup.is-open")?.classList.remove("is-open");
  })));
}
function R4(e) {
  const t = e.querySelector("video");
  t && (t.play().catch(() => {
  }), e.classList.add("is-playing"));
}
function D4(e) {
  const t = e.querySelector("video");
  t && (t.pause(), e.classList.remove("is-playing"));
}
function N4(e) {
  const t = e.querySelector("video");
  t && (t.muted = !t.muted, e.classList.toggle("is-muted", t.muted));
}
function I4(e) {
  const t = e.querySelector("video");
  t && t.requestFullscreen?.().catch(() => {
  });
}
const qu = /* @__PURE__ */ new WeakMap();
function jg(e) {
  e.querySelectorAll(
    'video[data-repeat], [data-component="video"][data-mode="ambient"] video'
  ).forEach((t) => {
    const i = t.closest('[data-component="video"]');
    if (i?.dataset.mode === "ambient" && (i.classList.add("ambient-video"), t.controls = !1, t.removeAttribute("controls"), t.muted = !0, t.playsInline = !0, t.setAttribute("tabindex", "-1"), t.play().catch(() => {
    })), t.dataset.repeatWired === "true") return;
    const o = t.dataset.repeat ?? "1";
    if (o === "infinite") {
      t.loop = !0, t.dataset.repeatWired = "true";
      return;
    }
    const a = Number.parseInt(o, 10);
    !Number.isFinite(a) || a <= 1 || (t.dataset.repeatWired = "true", qu.set(t, 1), t.addEventListener("ended", () => {
      const l = qu.get(t) ?? 1;
      l >= a || (qu.set(t, l + 1), t.currentTime = 0, t.play().catch(() => {
      }));
    }));
  });
}
function L4(e, t, i = e.ownerDocument) {
  const o = e.dataset.action;
  if (!o) return;
  const { getState: a } = t;
  switch (o) {
    case "goto-page": {
      const l = e.dataset.target;
      if (!l) return;
      const c = a().publication?.pages.findIndex(
        (d) => d.id === l
      );
      c != null && c >= 0 && a().goToPage(c + 1);
      return;
    }
    case "next-page":
      a().nextPage();
      return;
    case "previous-page":
      a().previousPage();
      return;
    case "open-url": {
      const l = e.dataset.href;
      l && window.open(l, "_blank", "noopener,noreferrer");
      return;
    }
    case "play-video": {
      const l = e.closest('[data-component="video"]');
      l && R4(l);
      return;
    }
    case "pause-video": {
      const l = e.closest('[data-component="video"]');
      l && D4(l);
      return;
    }
    case "toggle-mute": {
      const l = e.closest('[data-component="video"]');
      l && N4(l);
      return;
    }
    case "video-fullscreen": {
      const l = e.closest('[data-component="video"]');
      l && I4(l);
      return;
    }
    case "open-video-popup": {
      const l = e.dataset.videoUrl, c = e.dataset.videoSrc;
      if (l)
        a().openVideoPopup({ kind: "embed", url: l });
      else if (c) {
        const d = new URL(c, e.ownerDocument.baseURI).href;
        a().openVideoPopup({ kind: "video", src: d });
      }
      return;
    }
    case "close-video-popup":
      a().closeVideoPopup();
      return;
    case "carousel-next":
    case "carousel-previous": {
      const l = e.closest('[data-component="carousel"]');
      l && Y0(l, o === "carousel-next" ? 1 : -1);
      return;
    }
    case "carousel-goto": {
      const l = e.closest('[data-component="carousel"]'), c = Number(e.dataset.index ?? "0");
      l && O4(l, c);
      return;
    }
    case "open-popup": {
      const l = e.dataset.target;
      l && j4(i, l);
      return;
    }
    case "close-popup":
      M4(e);
      return;
    // Extension points for future interactive components. Each publication
    // page stays declarative (data-attributes only); implementations live
    // in interactions/audio.ts, interactions/hotspot.ts.
    case "play-audio":
    case "pause-audio":
    case "show-layer":
    case "hide-layer":
    case "toggle-layer":
      return;
    default:
      return;
  }
}
function ec(e, t) {
  if (!(e instanceof HTMLElement || e instanceof Document || e instanceof ShadowRoot)) return () => {
  };
  const i = (o) => {
    if (!(o instanceof MouseEvent)) return;
    const l = o.target?.closest("[data-action]");
    !l || !e.contains(l) || (o.preventDefault(), L4(l, t, e));
  };
  return e.addEventListener("click", i), () => e.removeEventListener("click", i);
}
const Mg = /* @__PURE__ */ new WeakSet();
function Rg(e, t, i) {
  t && e.querySelectorAll("[id]").forEach((o) => {
    o.id === t && o.classList.toggle("is-hover-linked", i);
  });
}
function Dg(e) {
  (e instanceof HTMLElement || e instanceof Document || e instanceof ShadowRoot) && (Mg.has(e) || (Mg.add(e), e.addEventListener("mouseover", (t) => {
    const i = t.target.closest("[data-hover-sync]");
    !i || !e.contains(i) || (i.classList.add("is-hover-linked"), Rg(e, i.dataset.hoverSync, !0));
  }), e.addEventListener("mouseout", (t) => {
    const i = t.target.closest("[data-hover-sync]");
    !i || !e.contains(i) || (i.classList.remove("is-hover-linked"), Rg(e, i.dataset.hoverSync, !1));
  })));
}
async function $4(e, t) {
  const i = await fetch(ho(e, t));
  if (!i.ok)
    throw new Error(`Failed to load ${t}`);
  return i.text();
}
function V4(e, t) {
  switch (e.type) {
    case "hotspot":
      return F4(e);
    case "link":
      return B4(e);
    case "video":
      return U4(e, t);
    case "carousel":
      return Z4(e, t);
  }
}
function Vc(e, t) {
  return !e || /^(?:[a-z]+:|#|\/\/)/i.test(e) ? e : new URL(e, t).href;
}
function X0(e, t) {
  t.type === "goto-page" ? (e.dataset.action = "goto-page", e.dataset.target = t.target) : (e.dataset.action = "open-url", e.dataset.href = t.href);
}
function Q0(e, t) {
  e.id = t.id, e.style.position = "absolute", e.style.left = `${t.x * 100}%`, e.style.top = `${t.y * 100}%`, e.style.zIndex = String(t.zIndex);
}
function ja(e, t) {
  Q0(e, t), e.style.width = `${t.width * 100}%`, e.style.height = `${t.height * 100}%`;
}
function F4(e) {
  const t = document.createElement("button");
  return t.type = "button", t.classList.add("pub-hotspot", `pub-hotspot--${e.variant}`), t.setAttribute("aria-label", "Hotspot"), e.variant === "tag" ? (t.dataset.size = e.size, t.dataset.style = e.style, Q0(t, e)) : ja(t, e), X0(t, e.action), t;
}
function B4(e) {
  const t = document.createElement("button");
  return t.type = "button", t.classList.add("pub-hotspot"), t.setAttribute("aria-label", "Link"), ja(t, e), X0(t, e.action), t;
}
function U4(e, t) {
  const i = document.createElement("div");
  i.classList.add("pub-video"), i.dataset.component = "video", ja(i, e);
  const o = e.controls ? "interactive" : "ambient";
  i.dataset.mode = o;
  const a = document.createElement("video"), l = document.createElement("source");
  if (l.src = Vc(e.src, t), a.appendChild(l), a.muted = e.muted, o === "ambient")
    return a.autoplay = !0, a.muted = !0, a.playsInline = !0, a.dataset.repeat = e.loop ? "infinite" : "1", i.appendChild(a), i;
  e.poster && (a.poster = Vc(e.poster, t)), a.dataset.action = "pause-video", e.autoplay && (a.autoplay = !0), e.loop && (a.dataset.repeat = "infinite");
  const c = document.createElement("button");
  c.type = "button", c.classList.add("pub-video__play"), c.dataset.action = "play-video";
  const d = document.createElement("span");
  d.classList.add("pub-video__play-icon"), d.textContent = "▶", c.appendChild(d);
  const h = document.createElement("div");
  h.classList.add("pub-video__controls");
  const m = document.createElement("button");
  m.type = "button", m.classList.add("pub-video__control-button", "pub-video__mute"), m.dataset.action = "toggle-mute";
  const g = document.createElement("span");
  g.classList.add("pub-video__icon-unmuted"), g.textContent = "🔊";
  const y = document.createElement("span");
  y.classList.add("pub-video__icon-muted"), y.textContent = "🔇", m.append(g, y);
  const w = document.createElement("button");
  return w.type = "button", w.classList.add("pub-video__control-button"), w.dataset.action = "video-fullscreen", w.textContent = "⛶", h.append(m, w), i.append(a, c, h), i;
}
function Z4(e, t) {
  const i = document.createElement("div");
  i.classList.add("pub-carousel"), i.dataset.component = "carousel", i.dataset.arrows = e.arrowPlacement, e.loop && (i.dataset.loop = "true"), e.autoplay && (i.dataset.autoplay = String(e.autoplayIntervalMs)), ja(i, e);
  const o = document.createElement("div");
  o.classList.add("pub-carousel__viewport");
  const a = document.createElement("div");
  if (a.classList.add("pub-carousel__track"), e.slides.forEach((l) => {
    const c = document.createElement("div");
    if (c.classList.add("pub-carousel__slide"), c.style.backgroundImage = `url(${Vc(l.src, t)})`, l.caption) {
      const d = document.createElement("span");
      d.textContent = l.caption, c.appendChild(d);
    }
    a.appendChild(c);
  }), o.appendChild(a), i.appendChild(o), e.navigation) {
    const l = document.createElement("button");
    l.type = "button", l.classList.add("pub-carousel__arrow", "pub-carousel__arrow--prev"), l.dataset.action = "carousel-previous", l.textContent = "‹";
    const c = document.createElement("button");
    c.type = "button", c.classList.add("pub-carousel__arrow", "pub-carousel__arrow--next"), c.dataset.action = "carousel-next", c.textContent = "›", i.append(l, c);
  }
  if (e.pagination) {
    const l = document.createElement("div");
    l.classList.add("pub-carousel__dots"), e.slides.forEach((c, d) => {
      const h = document.createElement("button");
      h.type = "button", h.classList.add("pub-carousel__dot"), d === 0 && h.classList.add("is-active"), h.dataset.action = "carousel-goto", h.dataset.index = String(d), l.appendChild(h);
    }), i.appendChild(l);
  }
  return i.dataset.currentIndex = "0", i;
}
const W4 = ["src", "poster", "data-video-src"];
function tc(e, t) {
  return e.replace(/url\(\s*(['"]?)([^)'"\s]+)\1\s*\)/gi, (i, o, a) => /^(?:[a-z]+:|#|\/\/|data:)/i.test(a) ? i : `url(${o}${new URL(a, t).href}${o})`);
}
function Ng(e) {
  return e.replace(/(^|[,{}]\s*|^\s*)html\s*,\s*body(?=\s*\{)/gim, "$1:host").replace(/(^|[,{}]\s*|^\s*)body(?=\s*\{)/gim, "$1:host");
}
function eo(e) {
  const t = document.createElement("style");
  return t.textContent = e, t;
}
function Sn({
  baseUrl: e,
  page: t,
  width: i,
  height: o,
  interactive: a = !0,
  pdfRenderWidth: l
}) {
  const c = N.useRef(null), d = N.useRef(null), h = N.useRef(null), m = L2(), g = Q((S) => S.pdfPageRenderer), y = Q((S) => S.pdfPageLinks), [w, b] = N.useState(null), [k, T] = N.useState([]);
  return N.useEffect(() => {
    if (t.pdfPageNumber == null || !g) return;
    let S = !0;
    return b(null), g(t.pdfPageNumber, l ?? i ?? 816).then((R) => {
      S && b(R);
    }).catch(() => {
      S && b(null);
    }), () => {
      S = !1;
    };
  }, [t.pdfPageNumber, g, i, l]), N.useEffect(() => {
    if (t.pdfPageNumber == null || !y) {
      T([]);
      return;
    }
    let S = !0;
    return y(t.pdfPageNumber).then((R) => {
      S && T(R);
    }).catch((R) => {
      console.warn(`PubEngine: failed to load links for page ${t.pdfPageNumber}`, R), S && T([]);
    }), () => {
      S = !1;
    };
  }, [t.pdfPageNumber, y]), N.useEffect(() => {
    if (t.pdfPageNumber == null) return;
    const S = h.current;
    if (!S) return;
    const R = document.createDocumentFragment();
    k.forEach((I) => {
      const D = document.createElement("button");
      switch (D.type = "button", D.setAttribute("aria-label", "Link"), D.style.position = "absolute", D.style.left = `${I.x * 100}%`, D.style.top = `${I.y * 100}%`, D.style.width = `${I.width * 100}%`, D.style.height = `${I.height * 100}%`, D.style.cursor = "pointer", D.style.background = "transparent", D.style.border = "none", D.style.padding = "0", I.action.type) {
        case "open-url":
          D.dataset.action = "open-url", D.dataset.href = I.action.href;
          break;
        case "goto-page":
          D.dataset.action = "goto-page", D.dataset.target = I.action.target;
          break;
        case "next-page":
          D.dataset.action = "next-page";
          break;
        case "previous-page":
          D.dataset.action = "previous-page";
          break;
      }
      R.appendChild(D);
    }), S.replaceChildren(R);
    const O = a ? ec(S, m) : () => {
    };
    return () => {
      O(), S.replaceChildren();
    };
  }, [k, a, m, t.pdfPageNumber]), N.useEffect(() => {
    if (!t.background) return;
    const S = d.current;
    if (!S) return;
    const R = document.createDocumentFragment();
    (t.components ?? []).forEach((I) => {
      R.appendChild(V4(I, e));
    }), S.replaceChildren(R), jg(S), Dg(S), Og(S), zg(S);
    const O = a ? ec(S, m) : () => {
    };
    return () => {
      O(), S.replaceChildren();
    };
  }, [a, t.background, t.components, e, m]), N.useEffect(() => {
    if (!t.src) return;
    let S = !0;
    const R = c.current;
    if (!R) return;
    const O = R.shadowRoot ?? R.attachShadow({ mode: "open" });
    let I = () => {
    };
    async function D() {
      const K = await $4(e, t.src);
      if (!S) return;
      const z = new DOMParser().parseFromString(K, "text/html"), W = ho(e, t.src), G = document.createDocumentFragment(), le = eo(`
        :host {
          display: block;
          box-sizing: border-box;
          width: ${i ?? 816}px;
          height: ${o ?? 1056}px;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background: #ffffff;
          color: #1a1a1a;
          font-family: "Helvetica Neue", Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        *, *::before, *::after { box-sizing: border-box; }
      `);
      G.appendChild(le), G.appendChild(eo(Oy)), G.appendChild(eo(Ay));
      const ue = Array.from(
        z.head.querySelectorAll("link[rel='stylesheet']")
      );
      for (const se of ue) {
        const ce = se.getAttribute("href");
        if (!ce) continue;
        const we = new URL(ce, W).href, _e = await fetch(we);
        if (_e.ok) {
          const Ce = await _e.text();
          G.appendChild(
            eo(Ng(tc(Ce, we)))
          );
        }
      }
      z.head.querySelectorAll("style").forEach((se) => {
        G.appendChild(
          eo(Ng(tc(se.textContent ?? "", W)))
        );
      }), Array.from(z.body.childNodes).forEach((se) => {
        G.appendChild(se.cloneNode(!0));
      }), G.querySelectorAll("[src], [poster], [data-video-src]").forEach((se) => {
        W4.forEach((ce) => {
          const we = se.getAttribute(ce);
          !we || /^(?:[a-z]+:|#|\/\/)/i.test(we) || se.setAttribute(ce, new URL(we, W).href);
        });
      }), G.querySelectorAll("[style]").forEach((se) => {
        se.style.cssText = tc(se.getAttribute("style") ?? "", W);
      }), O.replaceChildren(G), jg(O), Dg(O), Og(O), zg(O), a && (I = ec(O, m));
    }
    return D(), () => {
      S = !1, I(), O.replaceChildren();
    };
  }, [a, t.src, t.background, e, m]), t.pdfPageNumber != null ? /* @__PURE__ */ C.jsxs(
    "div",
    {
      className: "publication-page",
      style: { width: i, height: o, overflow: "hidden", position: "relative", background: "#e5e7eb" },
      children: [
        w && /* @__PURE__ */ C.jsx(
          "img",
          {
            src: w,
            alt: t.title ?? t.id,
            draggable: !1,
            style: { width: "100%", height: "100%", objectFit: "contain", display: "block", pointerEvents: "none" }
          }
        ),
        /* @__PURE__ */ C.jsx("div", { ref: h, style: { position: "absolute", inset: 0 } })
      ]
    }
  ) : t.background ? /* @__PURE__ */ C.jsxs("div", { className: "publication-page", style: { width: i, height: o, overflow: "hidden", position: "relative" }, children: [
    /* @__PURE__ */ C.jsx(
      "img",
      {
        src: ho(e, t.background),
        alt: t.title ?? t.id,
        draggable: !1,
        style: { width: "100%", height: "100%", objectFit: "contain", display: "block", pointerEvents: "none" }
      }
    ),
    /* @__PURE__ */ C.jsx("div", { ref: d, style: { position: "absolute", inset: 0 } })
  ] }) : /* @__PURE__ */ C.jsx(
    "div",
    {
      ref: c,
      className: "publication-page",
      style: { width: i, height: o }
    }
  );
}
const H4 = 0.55, K4 = [0.45, 0, 0.2, 1];
function G4({
  baseUrl: e,
  left: t,
  right: i,
  oldLeft: o,
  oldRight: a,
  direction: l,
  pageWidth: c,
  pageHeight: d,
  gap: h,
  pdfRenderWidth: m,
  viewMode: g
}) {
  const [y, w] = N.useState(null), b = U0(0), k = N.useRef(null);
  N.useEffect(() => {
    if (g === "single" || l !== "forward" && l !== "backward") return;
    const K = l === "forward", Z = t !== null || o !== null;
    let z, W, G, le, ue, se;
    if (Z ? K ? (z = a, W = t, G = o, le = i, ue = "left", se = c + h) : (z = o, W = i, G = t, le = a, ue = "right", se = 0) : (z = a, W = i, G = null, le = i, ue = K ? "left" : "right", se = 0), !z || !W) return;
    b.set(0);
    const ce = `${z.id}->${W.id}-${l}`, we = K ? -180 : 180;
    k.current = ce, w({
      id: ce,
      frontPage: z,
      backPage: W,
      baseLeft: G,
      baseRight: le,
      pivotSide: ue,
      slotX: se,
      targetDeg: we
    });
    const _e = z4(b, we, {
      duration: H4,
      ease: K4,
      onComplete: () => {
        k.current === ce && (k.current = null, w(null));
      }
    });
    return () => {
      _e.stop(), k.current === ce && (k.current = null, w(null));
    };
  }, [l, o?.id, a?.id, t?.id, i?.id, g]);
  const T = W0(b, [-180, -90, 0, 90, 180], [0, 0.45, 0, 0.45, 0]), S = `${t?.id ?? "none"}-${i?.id ?? "none"}`, R = t && i ? c * 2 + h : c, O = l === "forward" ? a?.id : l === "backward" ? o?.id : void 0, I = l === "forward" ? t?.id : l === "backward" ? i?.id : void 0, D = !!(y && l !== "jump" && y.frontPage.id === O && y.backPage.id === I);
  return /* @__PURE__ */ C.jsxs("div", { className: "relative", style: { width: R, height: d }, children: [
    D && y ? /* @__PURE__ */ C.jsxs("div", { className: "flex", style: { gap: h }, children: [
      y.baseLeft && /* @__PURE__ */ C.jsx(
        Sn,
        {
          baseUrl: e,
          page: y.baseLeft,
          width: c,
          pdfRenderWidth: m,
          height: d
        }
      ),
      y.baseRight && /* @__PURE__ */ C.jsx(
        Sn,
        {
          baseUrl: e,
          page: y.baseRight,
          width: c,
          pdfRenderWidth: m,
          height: d
        }
      )
    ] }) : g === "single" ? (
      // No sibling page occupies the other half of a spread in
      // single-page mode, which is what throws off both the 3D flip's
      // geometry and the crossfade's layout — so page changes are
      // instant here instead of animated.
      /* @__PURE__ */ C.jsxs("div", { className: "flex", style: { gap: h }, children: [
        t && /* @__PURE__ */ C.jsx(
          Sn,
          {
            baseUrl: e,
            page: t,
            width: c,
            pdfRenderWidth: m,
            height: d
          }
        ),
        i && /* @__PURE__ */ C.jsx(
          Sn,
          {
            baseUrl: e,
            page: i,
            width: c,
            pdfRenderWidth: m,
            height: d
          }
        )
      ] })
    ) : /* @__PURE__ */ C.jsx(ez, { mode: "popLayout", initial: !1, children: /* @__PURE__ */ C.jsxs(
      Ks.div,
      {
        className: "flex",
        style: { gap: h },
        initial: { opacity: 0, rotateY: -6 },
        animate: { opacity: 1, rotateY: 0 },
        exit: { opacity: 0, rotateY: 6 },
        transition: { duration: 0.25, ease: "easeOut" },
        children: [
          t && /* @__PURE__ */ C.jsx(
            Sn,
            {
              baseUrl: e,
              page: t,
              width: c,
              pdfRenderWidth: m,
              height: d
            }
          ),
          i && /* @__PURE__ */ C.jsx(
            Sn,
            {
              baseUrl: e,
              page: i,
              width: c,
              pdfRenderWidth: m,
              height: d
            }
          )
        ]
      },
      S
    ) }),
    D && y && /* @__PURE__ */ C.jsxs(
      Ks.div,
      {
        className: "absolute top-0",
        style: {
          left: y.slotX,
          width: c,
          height: d,
          rotateY: b,
          transformOrigin: y.pivotSide === "left" ? "left center" : "right center",
          transformStyle: "preserve-3d"
        },
        children: [
          /* @__PURE__ */ C.jsxs("div", { className: "absolute inset-0 overflow-hidden shadow-2xl", style: { backfaceVisibility: "hidden" }, children: [
            /* @__PURE__ */ C.jsx(
              Sn,
              {
                baseUrl: e,
                page: y.frontPage,
                width: c,
                pdfRenderWidth: m,
                height: d,
                interactive: !1
              }
            ),
            /* @__PURE__ */ C.jsx(Ks.div, { className: "absolute inset-0 bg-black", style: { opacity: T } })
          ] }),
          /* @__PURE__ */ C.jsxs(
            "div",
            {
              className: "absolute inset-0 overflow-hidden shadow-2xl",
              style: { backfaceVisibility: "hidden", transform: "rotateY(180deg)" },
              children: [
                /* @__PURE__ */ C.jsx(
                  Sn,
                  {
                    baseUrl: e,
                    page: y.backPage,
                    width: c,
                    pdfRenderWidth: m,
                    height: d,
                    interactive: !1
                  }
                ),
                /* @__PURE__ */ C.jsx(Ks.div, { className: "absolute inset-0 bg-black", style: { opacity: T } })
              ]
            }
          )
        ]
      }
    )
  ] });
}
const nc = 0, Ig = 72;
function Y4() {
  const e = Q((q) => q.publication), t = Q((q) => q.baseUrl), i = Q((q) => q.currentPage), o = Q((q) => q.viewMode), a = Q((q) => q.fitMode), l = Q((q) => q.zoomPercent), c = Q((q) => q.bottomBarHeight), d = Q((q) => q.nextPage), h = Q((q) => q.previousPage), m = Q((q) => q.reportComputedZoom), g = Q((q) => q.setPageDisplayWidth), [y, w] = N.useState(null), b = N.useCallback((q) => w(q), []), [k, T] = N.useState({ width: 0, height: 0 }), [S, R] = N.useState({ x: 0, y: 0 }), O = N.useRef(null), [I, D] = N.useState(!1);
  N.useEffect(() => {
    if (!y) return;
    const q = new ResizeObserver(([Te]) => {
      const { width: ut, height: Wt } = Te.contentRect;
      T({ width: ut, height: Wt });
    });
    return q.observe(y), () => q.disconnect();
  }, [y]);
  const K = e?.pages ?? [], { left: Z, right: z } = e ? aa(K, i, o) : { left: null, right: null }, W = N.useRef(i), { left: G, right: le } = e ? aa(K, W.current, o) : { left: null, right: null }, ue = e ? T2(W.current, i, K, o) : "jump";
  N.useEffect(() => {
    W.current = i;
  }, [i]);
  const se = e?.width ?? 816, ce = e?.height ?? 1056, we = Z && z ? se * 2 + nc : se, _e = o === "spread" ? se * 2 + nc : we, Ce = 48, ve = 48, V = c + 24 + 16, J = k.width - Ce * 2, X = k.height - ve - V;
  let P = l / 100;
  a !== "custom" && k.width > 0 && k.height > 0 && (P = a === "width" ? J / _e : Math.min(J / _e, X / ce)), P = Math.max(P, 0.05);
  const $ = Math.max(
    Math.round(se * P * Math.min(window.devicePixelRatio || 1, 2)),
    se * 2
  ), he = k.width / 2, ye = ve + X / 2, pe = Math.max(0, P * we - k.width) / 2, ge = Math.max(0, P * ce - k.height) / 2, Se = (q, Te) => ({
    x: Math.min(pe, Math.max(-pe, q)),
    y: Math.min(ge, Math.max(-ge, Te))
  });
  if (N.useEffect(() => {
    a === "custom" || !e || m(Math.round(P * 100));
  }, [P, a, e]), N.useEffect(() => {
    e && g(Math.round(we * P));
  }, [we, P, e, g]), N.useEffect(() => {
    R((q) => Se(q.x, q.y));
  }, [pe, ge]), !e || !t) return null;
  const xe = kr(i) > 1, Ke = z ? K.indexOf(z) < K.length - 1 : !1, Rt = P * we > k.width || P * ce > k.height, ht = (q) => {
    !Rt || q.pointerType !== "mouse" || q.button !== 0 || q.target.closest("button, a, [data-action]") || (q.preventDefault(), O.current = {
      pointerId: q.pointerId,
      startX: q.clientX,
      startY: q.clientY,
      startPanX: S.x,
      startPanY: S.y,
      moved: !1
    }, q.currentTarget.setPointerCapture(q.pointerId), D(!0));
  }, Zt = (q) => {
    const Te = O.current;
    if (!Te) return;
    const ut = q.clientX - Te.startX, Wt = q.clientY - Te.startY;
    !Te.moved && Math.hypot(ut, Wt) > 4 && (Te.moved = !0), Te.moved && R(Se(Te.startPanX + ut, Te.startPanY + Wt));
  }, U = (q) => {
    const Te = O.current;
    Te && (q.currentTarget.hasPointerCapture(Te.pointerId) && q.currentTarget.releasePointerCapture(Te.pointerId), O.current = null, D(!1));
  };
  return /* @__PURE__ */ C.jsxs(
    "div",
    {
      ref: b,
      className: `relative min-h-0 min-w-0 flex-1 overflow-hidden ${Rt ? I ? "cursor-grabbing select-none" : "cursor-grab" : ""}`,
      onPointerDown: ht,
      onPointerMove: Zt,
      onPointerUp: U,
      onPointerCancel: U,
      onLostPointerCapture: U,
      onDragStart: (q) => q.preventDefault(),
      children: [
        xe && /* @__PURE__ */ C.jsx(
          "button",
          {
            type: "button",
            "aria-label": "Previous page",
            onClick: h,
            className: "absolute left-6 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-800/90 text-white shadow-lg transition hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
            children: /* @__PURE__ */ C.jsx(X2, { size: 20, strokeWidth: 2.25 })
          }
        ),
        /* @__PURE__ */ C.jsx(
          "div",
          {
            className: "absolute shadow-2xl",
            style: {
              left: he + S.x,
              top: ye + S.y,
              transform: `translate(-50%, -50%) scale(${P})`,
              perspective: 2400
            },
            children: /* @__PURE__ */ C.jsx(
              G4,
              {
                baseUrl: t,
                left: Z,
                right: z,
                oldLeft: G,
                oldRight: le,
                direction: ue,
                pageWidth: se,
                pageHeight: ce,
                pdfRenderWidth: $,
                viewMode: o,
                gap: Z && z ? nc : 0
              }
            )
          }
        ),
        /* @__PURE__ */ C.jsx(
          "button",
          {
            type: "button",
            "aria-hidden": "true",
            tabIndex: -1,
            onClick: h,
            className: "absolute left-0 top-0 h-full cursor-w-resize",
            style: { width: Ig, opacity: 0 }
          }
        ),
        /* @__PURE__ */ C.jsx(
          "button",
          {
            type: "button",
            "aria-hidden": "true",
            tabIndex: -1,
            onClick: d,
            className: "absolute right-0 top-0 h-full cursor-e-resize",
            style: { width: Ig, opacity: 0 }
          }
        ),
        Ke && /* @__PURE__ */ C.jsx(
          "button",
          {
            type: "button",
            "aria-label": "Next page",
            onClick: d,
            className: "absolute right-6 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-800/90 text-white shadow-lg transition hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
            children: /* @__PURE__ */ C.jsx(Q2, { size: 20, strokeWidth: 2.25 })
          }
        )
      ]
    }
  );
}
function X4() {
  const e = Q((i) => i.publication);
  if (!e) return null;
  const t = [e.series, e.issue ? `No. ${e.issue}` : null].filter(Boolean).join(" — ");
  return /* @__PURE__ */ C.jsxs("div", { className: "pointer-events-none absolute left-6 top-6 z-20 max-w-xs rounded-lg bg-neutral-900/90 px-4 py-3 shadow-lg backdrop-blur-sm", children: [
    t && /* @__PURE__ */ C.jsx("p", { className: "text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-400", children: t }),
    /* @__PURE__ */ C.jsx("p", { className: "mt-0.5 text-sm font-bold leading-tight text-white", children: e.title })
  ] });
}
async function Q4(e, t) {
  const i = new DOMParser();
  return Promise.all(
    e.pages.map(async (o, a) => {
      const l = o.src ? await fetch(ho(t, o.src)).then((c) => c.text()).then((c) => (i.parseFromString(c, "text/html").body?.textContent ?? "").replace(/\s+/g, " ").trim()).catch(() => "") : o.text ?? "";
      return {
        pageId: o.id,
        pageNumber: a + 1,
        title: o.title ?? o.id,
        text: l
      };
    })
  );
}
const Lg = 40;
function J4(e, t) {
  const i = e.toLowerCase().indexOf(t.toLowerCase());
  if (i === -1) return e.slice(0, 90);
  const o = Math.max(0, i - Lg), a = Math.min(e.length, i + t.length + Lg);
  return `${o > 0 ? "…" : ""}${e.slice(o, a)}${a < e.length ? "…" : ""}`;
}
function q4() {
  const e = Q((z) => z.publication), t = Q((z) => z.baseUrl), i = Q((z) => z.searchOpen), o = Q((z) => z.setSearchOpen), a = Q((z) => z.searchQuery), l = Q((z) => z.setSearchQuery), c = Q((z) => z.goToPage), d = Q((z) => z.bottomBarHeight), h = Q((z) => z.pdfPageRenderer !== null), m = Q((z) => z.pdfSearchIndex), g = Q((z) => z.pdfSearchIndexedCount), y = Q((z) => z.pdfSearchTotalCount), [w, b] = N.useState([]), [k, T] = N.useState(!1), S = N.useRef(null);
  if (N.useEffect(() => {
    if (h || !i || !e || !t || w.length > 0) return;
    let z = !1;
    return T(!0), Q4(e, t).then((W) => {
      z || (b(W), T(!1));
    }), () => {
      z = !0;
    };
  }, [i, e, t, h, w.length]), N.useEffect(() => {
    i && S.current?.focus();
  }, [i]), N.useEffect(() => {
    b([]);
  }, [e?.id]), !i || !e) return null;
  const R = h ? m : w, O = h ? !1 : k, I = h && g < y, D = a.trim(), K = D.toLowerCase(), Z = D.length > 0 ? R.filter(
    (z) => z.title.toLowerCase().includes(K) || z.text.toLowerCase().includes(K)
  ) : [];
  return /* @__PURE__ */ C.jsx(
    "div",
    {
      className: "pointer-events-none absolute inset-x-0 z-30 flex justify-center px-6",
      style: { bottom: d + 24 + 12 },
      children: /* @__PURE__ */ C.jsxs("div", { className: "pointer-events-auto flex max-h-96 w-full max-w-md flex-col overflow-hidden rounded-xl bg-neutral-900/95 shadow-2xl backdrop-blur-sm", children: [
        /* @__PURE__ */ C.jsxs("div", { className: "flex items-center gap-2 border-b border-white/10 px-3 py-2.5", children: [
          /* @__PURE__ */ C.jsx(Gy, { size: 16, className: "shrink-0 text-neutral-400", strokeWidth: 2 }),
          /* @__PURE__ */ C.jsx(
            "input",
            {
              ref: S,
              type: "text",
              value: a,
              onChange: (z) => l(z.target.value),
              placeholder: "Search this publication…",
              className: "w-full min-w-0 flex-1 bg-transparent text-sm text-white placeholder:text-neutral-500 focus:outline-none"
            }
          ),
          /* @__PURE__ */ C.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Close search",
              onClick: () => o(!1),
              className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-neutral-400 transition-colors hover:bg-white/10 hover:text-white",
              children: /* @__PURE__ */ C.jsx(ka, { size: 14, strokeWidth: 2 })
            }
          )
        ] }),
        /* @__PURE__ */ C.jsxs("div", { className: "overflow-y-auto", children: [
          O && /* @__PURE__ */ C.jsx("p", { className: "px-4 py-6 text-center text-xs text-neutral-500", children: "Indexing pages…" }),
          !O && D.length > 0 && Z.length === 0 && /* @__PURE__ */ C.jsxs("p", { className: "px-4 py-6 text-center text-xs text-neutral-500", children: [
            "No matches for “",
            D,
            "”",
            I ? " yet" : ""
          ] }),
          !O && Z.map((z) => /* @__PURE__ */ C.jsxs(
            "button",
            {
              type: "button",
              onClick: () => {
                c(z.pageNumber), o(!1);
              },
              className: "flex w-full flex-col gap-0.5 border-b border-white/5 px-4 py-2.5 text-left transition-colors hover:bg-white/10",
              children: [
                /* @__PURE__ */ C.jsxs("span", { className: "flex items-center gap-2 text-xs font-semibold text-white", children: [
                  /* @__PURE__ */ C.jsx("span", { className: "font-mono text-neutral-500", children: String(z.pageNumber).padStart(2, "0") }),
                  z.title
                ] }),
                z.text && /* @__PURE__ */ C.jsx("span", { className: "truncate text-xs text-neutral-400", children: J4(z.text, D) })
              ]
            },
            z.pageId
          ))
        ] }),
        I && /* @__PURE__ */ C.jsxs("p", { className: "border-t border-white/10 px-4 py-1.5 text-center text-[11px] text-neutral-500", children: [
          "Indexing ",
          g,
          " / ",
          y,
          " pages…"
        ] })
      ] })
    }
  );
}
function e3({ onPageSelect: e }) {
  const t = Q((l) => l.publication), i = Q((l) => l.currentPage), o = Q((l) => l.goToPage);
  if (!t) return null;
  const a = t.pages.map((l, c) => ({ page: l, pageNumber: c + 1 })).filter(({ page: l }) => !!l.title?.trim());
  return /* @__PURE__ */ C.jsx("ol", { className: "flex flex-col gap-0.5 overflow-y-auto p-2", children: a.map(({ page: l, pageNumber: c }) => {
    const d = c === i;
    return /* @__PURE__ */ C.jsx("li", { children: /* @__PURE__ */ C.jsxs(
      "button",
      {
        type: "button",
        onClick: () => {
          if (e) {
            e(c);
            return;
          }
          o(c);
        },
        className: `flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-white/10 ${d ? "bg-white/15 text-white" : "text-neutral-300"}`,
        children: [
          /* @__PURE__ */ C.jsx("span", { className: "font-mono text-xs tabular-nums text-neutral-500", children: String(c).padStart(2, "0") }),
          /* @__PURE__ */ C.jsx("span", { className: "truncate", children: l.title })
        ]
      }
    ) }, l.id);
  }) });
}
const rc = 0.16, t3 = 220;
function n3() {
  const e = Q((O) => O.publication), t = Q((O) => O.baseUrl), i = Q((O) => O.sidebarOpen), o = Q((O) => O.sidebarTab), a = Q((O) => O.setSidebarTab), l = Q((O) => O.setSidebarOpen), c = Q((O) => O.currentPage), d = Q((O) => O.goToPage), h = Q((O) => O.bottomBarHeight), [m, g] = N.useState(!1), y = N.useRef(null);
  if (N.useEffect(() => () => {
    y.current !== null && window.clearTimeout(y.current);
  }, []), !i || !e || !t) return null;
  const w = e.pages.some((O) => !!O.title?.trim()), b = w ? o : "thumbnails", k = e.width * rc, T = e.height * rc, S = () => {
    m || (g(!0), y.current = window.setTimeout(() => {
      l(!1), g(!1);
    }, t3));
  }, R = (O) => {
    d(O), S();
  };
  return /* @__PURE__ */ C.jsxs(
    "aside",
    {
      className: `absolute left-6 right-6 top-6 z-30 flex flex-col overflow-hidden rounded-xl border border-white/10 bg-neutral-900/95 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-out ${m ? "translate-y-3 opacity-0" : "translate-y-0 opacity-100"}`,
      style: { bottom: h + 36 },
      children: [
        /* @__PURE__ */ C.jsxs("div", { className: "flex items-center justify-between border-b border-white/10 px-3 py-2", children: [
          /* @__PURE__ */ C.jsxs("div", { className: "flex gap-1", children: [
            /* @__PURE__ */ C.jsx(
              "button",
              {
                type: "button",
                onClick: () => a("thumbnails"),
                className: `rounded-md px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${b === "thumbnails" ? "bg-white/15 text-white" : "text-neutral-400 hover:text-white"}`,
                children: "Pages"
              }
            ),
            w && /* @__PURE__ */ C.jsx(
              "button",
              {
                type: "button",
                onClick: () => a("toc"),
                className: `rounded-md px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${b === "toc" ? "bg-white/15 text-white" : "text-neutral-400 hover:text-white"}`,
                children: "Contents"
              }
            )
          ] }),
          /* @__PURE__ */ C.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Close sidebar",
              onClick: S,
              className: "flex h-6 w-6 items-center justify-center rounded-md text-neutral-400 transition-colors hover:bg-white/10 hover:text-white",
              children: /* @__PURE__ */ C.jsx(ka, { size: 14, strokeWidth: 2 })
            }
          )
        ] }),
        b === "thumbnails" ? /* @__PURE__ */ C.jsx("div", { className: "grid grid-cols-2 gap-3 overflow-y-auto p-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8", children: e.pages.map((O, I) => {
          const D = I + 1, K = D === c;
          return /* @__PURE__ */ C.jsxs(
            "button",
            {
              type: "button",
              onClick: () => R(D),
              className: `group flex flex-col items-center gap-1 rounded-md p-1.5 transition-colors ${K ? "bg-white/15" : "hover:bg-white/10"}`,
              children: [
                /* @__PURE__ */ C.jsx(
                  "div",
                  {
                    className: `overflow-hidden rounded shadow ring-1 ${K ? "ring-white" : "ring-white/10"}`,
                    style: { width: k, height: T },
                    children: /* @__PURE__ */ C.jsx("div", { style: { transform: `scale(${rc})`, transformOrigin: "top left" }, children: /* @__PURE__ */ C.jsx(
                      Sn,
                      {
                        baseUrl: t,
                        page: O,
                        width: e.width,
                        height: e.height,
                        interactive: !1
                      }
                    ) })
                  }
                ),
                /* @__PURE__ */ C.jsx("span", { className: "font-mono text-[10px] tabular-nums text-neutral-400", children: String(D).padStart(2, "0") })
              ]
            },
            O.id
          );
        }) }) : /* @__PURE__ */ C.jsx(e3, { onPageSelect: R })
      ]
    }
  );
}
function ic({ svg: e, size: t = 20, className: i = "" }) {
  return /* @__PURE__ */ C.jsx(
    "span",
    {
      "aria-hidden": "true",
      style: { width: t, height: t },
      className: `inline-flex shrink-0 [&>svg]:h-full [&>svg]:w-full ${i}`,
      dangerouslySetInnerHTML: { __html: e }
    }
  );
}
const r3 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="12 12 616 616" fill="currentColor"><!--!Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z"/></svg>', i3 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="49 49 541 541" fill="currentColor"><!--!Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/></svg>', o3 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="50 50 540 540" fill="currentColor"><!--!Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"/></svg>';
function bn({ children: e, active: t, className: i = "", ...o }) {
  return /* @__PURE__ */ C.jsx(
    "button",
    {
      type: "button",
      className: `flex h-8 w-8 items-center justify-center rounded-md text-neutral-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:pointer-events-none disabled:opacity-30 ${t ? "bg-white/15 text-white" : ""} ${i}`,
      ...o,
      children: e
    }
  );
}
function $g() {
  return /* @__PURE__ */ C.jsx("div", { "aria-hidden": "true", className: "mx-1 h-5 w-px bg-white/15" });
}
const J0 = N.createContext(null);
function s3({
  element: e,
  children: t
}) {
  return /* @__PURE__ */ C.jsx(J0.Provider, { value: e, children: t });
}
function a3() {
  return N.useContext(J0);
}
function l3() {
  const e = Q((l) => l.isFullscreen), t = Q((l) => l.setFullscreen), o = a3() ?? document.documentElement;
  return N.useEffect(() => {
    const l = () => t(document.fullscreenElement === o);
    return document.addEventListener("fullscreenchange", l), () => document.removeEventListener("fullscreenchange", l);
  }, [t, o]), { isFullscreen: e, toggleFullscreen: () => {
    document.fullscreenElement === o ? document.exitFullscreen() : o.requestFullscreen();
  } };
}
function u3() {
  const e = Q((U) => U.publication), t = Q((U) => U.baseUrl), i = Q((U) => U.currentPage), o = Q((U) => U.goToPage), a = Q((U) => U.viewMode), l = Q((U) => U.setViewMode), c = Q((U) => U.zoomPercent), d = Q((U) => U.setZoomPercent), h = Q((U) => U.zoomIn), m = Q((U) => U.zoomOut), g = Q((U) => U.sidebarOpen), y = Q((U) => U.sidebarTab), w = Q((U) => U.setSidebarTab), b = Q((U) => U.setSidebarOpen), k = Q((U) => U.searchOpen), T = Q((U) => U.toggleSearch), S = Q((U) => U.setSearchOpen), R = Q((U) => U.setBottomBarHeight), O = Q((U) => U.downloadEnabled), I = Q((U) => U.printEnabled), D = Q((U) => U.searchEnabled), { isFullscreen: K, toggleFullscreen: Z } = l3(), [z, W] = N.useState(null), [G, le] = N.useState(!1), [ue, se] = N.useState(!1), [ce, we] = N.useState(null), [_e, Ce] = N.useState(!1), [ve, V] = N.useState(!1), J = N.useRef(null), X = N.useCallback((U) => W(U), []), P = N.useRef(null);
  N.useEffect(() => () => {
    P.current?.remove(), P.current = null;
  }, []), N.useEffect(() => {
    if (!z) return;
    const U = new ResizeObserver(([q]) => {
      R(q.contentRect.height);
    });
    return U.observe(z), () => U.disconnect();
  }, [z, R]);
  const $ = window.location.href, he = encodeURIComponent($), ye = encodeURIComponent(e?.title ?? document.title);
  if (N.useEffect(() => {
    if (!ue) return;
    let U = !1;
    return we(null), Ce(!1), import("./browser-CyeHdv6z.js").then((q) => q.b).then((q) => q.toDataURL($, { width: 288 })).then((q) => {
      U || we(q);
    }).catch(() => {
      U || Ce(!0);
    }), () => {
      U = !0;
    };
  }, [ue, $]), N.useEffect(() => {
    G && (k || g) && le(!1);
  }, [k, G, g]), N.useEffect(() => {
    if (!G) return;
    const U = (Te) => {
      J.current && !Te.composedPath().includes(J.current) && le(!1);
    }, q = (Te) => {
      Te.key === "Escape" && le(!1);
    };
    return document.addEventListener("pointerdown", U), document.addEventListener("keydown", q), () => {
      document.removeEventListener("pointerdown", U), document.removeEventListener("keydown", q);
    };
  }, [G]), !e) return null;
  const pe = e.pages.length, ge = pe > 1 ? (i - 1) / (pe - 1) * 100 : 0, Se = g && y === "thumbnails", be = () => {
    Se ? b(!1) : w("thumbnails");
  }, xe = e.originalPdf && t ? ho(t, e.originalPdf) : void 0, Ke = () => {
    if (!xe) return;
    let U = P.current;
    U || (U = document.createElement("iframe"), U.style.position = "fixed", U.style.right = "0", U.style.bottom = "0", U.style.width = "0", U.style.height = "0", U.style.border = "0", document.body.appendChild(U), P.current = U);
    const q = () => {
      U.contentWindow?.focus(), U.contentWindow?.print();
    };
    U.src === xe ? q() : (U.onload = q, U.src = xe);
  }, Rt = async () => {
    if (xe)
      try {
        const U = await fetch(xe);
        if (!U.ok) throw new Error(`Fetch failed: ${U.status}`);
        const q = await U.blob(), Te = URL.createObjectURL(q), ut = xe.split("/").pop()?.split(/[?#]/)[0] || "publication.pdf", Wt = document.createElement("a");
        Wt.href = Te, Wt.download = ut, Wt.click(), window.setTimeout(() => URL.revokeObjectURL(Te), 1e4);
      } catch {
        window.open(xe, "_blank", "noopener,noreferrer");
      }
  }, ht = () => {
    G || (S(!1), b(!1)), se(!1), le((U) => !U);
  }, Zt = async () => {
    try {
      await navigator.clipboard.writeText($);
    } catch {
      const U = document.createElement("textarea");
      U.value = $, U.style.position = "fixed", U.style.opacity = "0", document.body.appendChild(U), U.select(), document.execCommand("copy"), U.remove();
    }
    V(!0), window.setTimeout(() => V(!1), 1600);
  };
  return /* @__PURE__ */ C.jsxs(
    "div",
    {
      ref: X,
      className: "relative flex w-fit max-w-[calc(100vw-2rem)] flex-col overflow-visible rounded-full bg-neutral-900/90 shadow-lg backdrop-blur-sm",
      children: [
        /* @__PURE__ */ C.jsx("div", { className: "hidden px-5 pb-2 pt-3 sm:px-8", children: /* @__PURE__ */ C.jsx(
          "input",
          {
            type: "range",
            className: "progress-scrubber",
            min: 1,
            max: pe,
            step: 1,
            value: i,
            onChange: (U) => o(Number(U.target.value)),
            "aria-label": "Page position",
            style: {
              background: `linear-gradient(to right, #3b82f6 ${ge}%, rgba(255,255,255,0.15) ${ge}%)`
            }
          }
        ) }),
        /* @__PURE__ */ C.jsxs("div", { className: "flex h-11 max-w-[calc(100vw-2rem)] items-center gap-1 px-5 sm:px-8", children: [
          /* @__PURE__ */ C.jsxs("span", { className: "mr-1 whitespace-nowrap font-mono text-xs tabular-nums tracking-wide text-neutral-300", children: [
            String(i).padStart(2, "0"),
            " / ",
            String(pe).padStart(2, "0")
          ] }),
          /* @__PURE__ */ C.jsxs("div", { className: "hidden items-center gap-1.5 sm:flex", children: [
            /* @__PURE__ */ C.jsx($g, {}),
            /* @__PURE__ */ C.jsx(bn, { "aria-label": "Zoom out", onClick: m, children: /* @__PURE__ */ C.jsx(uP, { size: 16, strokeWidth: 2 }) }),
            /* @__PURE__ */ C.jsx(
              "input",
              {
                type: "range",
                className: "zoom-scrubber",
                min: 25,
                max: 400,
                step: 5,
                value: c,
                onChange: (U) => d(Number(U.target.value)),
                "aria-label": "Zoom level"
              }
            ),
            /* @__PURE__ */ C.jsx(bn, { "aria-label": "Zoom in", onClick: h, children: /* @__PURE__ */ C.jsx(lP, { size: 16, strokeWidth: 2 }) })
          ] }),
          /* @__PURE__ */ C.jsx($g, {}),
          /* @__PURE__ */ C.jsx(
            bn,
            {
              "aria-label": "Toggle thumbnails",
              active: Se,
              onClick: be,
              children: /* @__PURE__ */ C.jsx(tP, { size: 16, strokeWidth: 2 })
            }
          ),
          pe > 1 && /* @__PURE__ */ C.jsx("div", { className: "hidden sm:contents", children: /* @__PURE__ */ C.jsx(
            bn,
            {
              "aria-label": a === "spread" ? "Switch to single page view" : "Switch to two-page view",
              onClick: () => l(a === "spread" ? "single" : "spread"),
              children: a === "spread" ? /* @__PURE__ */ C.jsx(sP, { size: 16, strokeWidth: 2 }) : /* @__PURE__ */ C.jsx(J2, { size: 16, strokeWidth: 2 })
            }
          ) }),
          I && xe && /* @__PURE__ */ C.jsx("div", { className: "hidden sm:contents", children: /* @__PURE__ */ C.jsx(bn, { "aria-label": "Print", onClick: Ke, children: /* @__PURE__ */ C.jsx(oP, { size: 16, strokeWidth: 2 }) }) }),
          O && xe && /* @__PURE__ */ C.jsx(bn, { "aria-label": "Download", onClick: Rt, children: /* @__PURE__ */ C.jsx(eP, { size: 16, strokeWidth: 2 }) }),
          D && /* @__PURE__ */ C.jsx(bn, { "aria-label": "Search", active: k, onClick: T, children: /* @__PURE__ */ C.jsx(Gy, { size: 16, strokeWidth: 2 }) }),
          /* @__PURE__ */ C.jsxs("div", { ref: J, children: [
            /* @__PURE__ */ C.jsx(
              bn,
              {
                "aria-label": "Share publication",
                "aria-expanded": G,
                active: G,
                onClick: ht,
                children: /* @__PURE__ */ C.jsx(aP, { size: 16, strokeWidth: 2 })
              }
            ),
            G && /* @__PURE__ */ C.jsxs("div", { className: "absolute bottom-full left-1/2 z-50 mb-3 flex h-64 w-[min(22rem,calc(100vw-1rem))] max-w-[calc(100vw-1rem)] -translate-x-1/2 flex-col overflow-hidden rounded-xl border border-white/15 bg-neutral-900/95 text-white shadow-2xl backdrop-blur-xl", children: [
              /* @__PURE__ */ C.jsxs("div", { className: "flex shrink-0 items-start justify-between gap-4 px-5 pb-4 pt-5", children: [
                /* @__PURE__ */ C.jsxs("div", { children: [
                  /* @__PURE__ */ C.jsx("h2", { className: "text-lg font-semibold leading-tight", children: ue ? "Scan QR Code" : "Share this publication" }),
                  /* @__PURE__ */ C.jsx("p", { className: "mt-1 text-sm text-neutral-400", children: ue ? "Use your phone camera to scan the code" : "Choose how you want to share this" })
                ] }),
                /* @__PURE__ */ C.jsx(
                  "button",
                  {
                    type: "button",
                    "aria-label": "Close share menu",
                    onClick: () => le(!1),
                    className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-neutral-400 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
                    children: /* @__PURE__ */ C.jsx(ka, { size: 16 })
                  }
                )
              ] }),
              ue ? /* @__PURE__ */ C.jsx("div", { className: "flex min-h-0 flex-1 items-center justify-center border-t border-white/10 px-5 py-4", children: /* @__PURE__ */ C.jsx("div", { className: "flex h-36 w-36 items-center justify-center rounded-lg bg-white text-neutral-900 shadow-lg", children: ce ? /* @__PURE__ */ C.jsx(
                "img",
                {
                  src: ce,
                  alt: "QR code linking to this publication",
                  className: "h-full w-full rounded-lg"
                }
              ) : _e ? /* @__PURE__ */ C.jsx("span", { className: "px-3 text-center text-xs text-neutral-500", children: "Couldn’t generate QR code" }) : /* @__PURE__ */ C.jsx(am, { size: 132, strokeWidth: 1.5, className: "animate-pulse text-neutral-300" }) }) }) : /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
                /* @__PURE__ */ C.jsx("div", { className: "border-t border-white/10 px-4 py-3", children: /* @__PURE__ */ C.jsxs("div", { className: "grid grid-cols-4 gap-1 sm:grid-cols-5", children: [
                  /* @__PURE__ */ C.jsx(
                    "a",
                    {
                      href: `https://www.linkedin.com/sharing/share-offsite/?url=${he}`,
                      target: "_blank",
                      rel: "noreferrer",
                      "aria-label": "Share on LinkedIn",
                      className: "flex h-12 items-center justify-center rounded-lg text-neutral-300 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
                      children: /* @__PURE__ */ C.jsx(ic, { svg: o3, size: 20 })
                    }
                  ),
                  /* @__PURE__ */ C.jsx(
                    "a",
                    {
                      href: `https://www.facebook.com/sharer/sharer.php?u=${he}`,
                      target: "_blank",
                      rel: "noreferrer",
                      "aria-label": "Share on Facebook",
                      className: "flex h-12 items-center justify-center rounded-lg text-neutral-300 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
                      children: /* @__PURE__ */ C.jsx(ic, { svg: r3, size: 20 })
                    }
                  ),
                  /* @__PURE__ */ C.jsx(
                    "a",
                    {
                      href: "https://www.instagram.com/",
                      target: "_blank",
                      rel: "noreferrer",
                      "aria-label": "Open Instagram",
                      className: "flex h-12 items-center justify-center rounded-lg text-neutral-300 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
                      children: /* @__PURE__ */ C.jsx(ic, { svg: i3, size: 20 })
                    }
                  ),
                  /* @__PURE__ */ C.jsx(
                    "a",
                    {
                      href: `mailto:?subject=${ye}&body=${he}`,
                      "aria-label": "Share by email",
                      className: "flex h-12 items-center justify-center rounded-lg text-neutral-300 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
                      children: /* @__PURE__ */ C.jsx(nP, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ C.jsx(
                    "button",
                    {
                      type: "button",
                      "aria-label": "Open QR code",
                      onClick: () => se(!0),
                      className: "hidden h-12 items-center justify-center rounded-lg text-neutral-300 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:flex",
                      children: /* @__PURE__ */ C.jsx(am, { size: 20 })
                    }
                  )
                ] }) }),
                /* @__PURE__ */ C.jsxs("div", { className: "border-t border-white/10 px-5 pb-5 pt-4", children: [
                  /* @__PURE__ */ C.jsx("label", { htmlFor: "share-url", className: "text-sm font-semibold text-white", children: "Share URL" }),
                  /* @__PURE__ */ C.jsxs("div", { className: "mt-2 flex gap-2", children: [
                    /* @__PURE__ */ C.jsx(
                      "input",
                      {
                        id: "share-url",
                        type: "text",
                        readOnly: !0,
                        value: $,
                        "aria-label": "Publication share URL",
                        onFocus: (U) => U.currentTarget.select(),
                        className: "min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap rounded-lg border border-white/15 bg-black/35 px-3 py-2.5 text-xs text-neutral-200 outline-none focus:border-white/35"
                      }
                    ),
                    /* @__PURE__ */ C.jsx(
                      "button",
                      {
                        type: "button",
                        "aria-label": ve ? "Link copied" : "Copy link",
                        onClick: Zt,
                        className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-black/35 text-neutral-300 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
                        children: ve ? /* @__PURE__ */ C.jsx(Y2, { size: 18 }) : /* @__PURE__ */ C.jsx(q2, { size: 18 })
                      }
                    )
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ C.jsx(
            bn,
            {
              "aria-label": K ? "Exit fullscreen" : "Enter fullscreen",
              onClick: Z,
              children: K ? /* @__PURE__ */ C.jsx(iP, { size: 16, strokeWidth: 2 }) : /* @__PURE__ */ C.jsx(rP, { size: 16, strokeWidth: 2 })
            }
          )
        ] })
      ]
    }
  );
}
function c3() {
  const e = Q((i) => i.videoPopup), t = Q((i) => i.closeVideoPopup);
  return e ? /* @__PURE__ */ C.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 sm:p-10",
      onClick: t,
      children: /* @__PURE__ */ C.jsxs(
        "div",
        {
          className: "relative aspect-video w-full max-w-6xl",
          onClick: (i) => i.stopPropagation(),
          children: [
            /* @__PURE__ */ C.jsx(
              "button",
              {
                type: "button",
                "aria-label": "Close video",
                onClick: t,
                className: "absolute -top-11 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900/90 text-white transition-colors hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
                children: /* @__PURE__ */ C.jsx(ka, { size: 18, strokeWidth: 2.25 })
              }
            ),
            e.kind === "embed" ? /* @__PURE__ */ C.jsx(
              "iframe",
              {
                src: e.url,
                title: "Video",
                className: "h-full w-full rounded-lg bg-black shadow-2xl",
                sandbox: "allow-scripts allow-same-origin allow-popups allow-presentation",
                allow: "autoplay; fullscreen; encrypted-media; picture-in-picture",
                allowFullScreen: !0
              }
            ) : (
              // Plain native controls: this is trusted React-rendered content,
              // not publication HTML, so there's no need to route it through
              // the data-action system — it just needs to play.
              /* @__PURE__ */ C.jsx(
                "video",
                {
                  src: e.src,
                  controls: !0,
                  autoPlay: !0,
                  className: "h-full w-full rounded-lg bg-black object-contain shadow-2xl"
                }
              )
            )
          ]
        }
      )
    }
  ) : null;
}
const f3 = 768;
function d3() {
  const e = Q((g) => g.status), t = Q((g) => g.nextPage), i = Q((g) => g.previousPage), o = Q((g) => g.setSidebarOpen), a = Q((g) => g.setSearchOpen), l = Q((g) => g.closeVideoPopup), c = Q((g) => g.sidebarOpen), d = Q((g) => g.bottomBarHeight), h = Q((g) => g.setViewMode), m = Q((g) => g.publication);
  return N.useEffect(() => {
    if (!m) return;
    const g = window.matchMedia(`(max-width: ${f3}px)`), y = m.width > m.height, w = () => {
      g.matches ? h("single") : h(y ? "single" : m.defaultView);
    };
    return w(), g.addEventListener("change", w), () => g.removeEventListener("change", w);
  }, [m, h]), N.useEffect(() => {
    const g = (y) => {
      if (y.key === "Escape") {
        o(!1), a(!1), l();
        return;
      }
      c || y.target instanceof HTMLInputElement || (y.key === "ArrowRight" && t(), y.key === "ArrowLeft" && i());
    };
    return window.addEventListener("keydown", g), () => window.removeEventListener("keydown", g);
  }, [t, i, o, a, l, c]), /* @__PURE__ */ C.jsxs(
    "div",
    {
      className: "relative flex h-full w-full flex-col overflow-hidden",
      style: { background: "var(--pubengine-stage-bg, #eceeef)" },
      children: [
        /* @__PURE__ */ C.jsx(X4, {}),
        !1,
        /* @__PURE__ */ C.jsx(Y4, {}),
        c && /* @__PURE__ */ C.jsx(
          "button",
          {
            type: "button",
            "aria-label": "Close pages panel",
            onClick: () => o(!1),
            className: "absolute inset-x-0 top-0 z-10 bg-transparent",
            style: { bottom: d + 24 }
          }
        ),
        /* @__PURE__ */ C.jsx(n3, {}),
        /* @__PURE__ */ C.jsx(q4, {}),
        /* @__PURE__ */ C.jsx(c3, {}),
        e === "loading" && /* @__PURE__ */ C.jsx(
          "div",
          {
            className: "absolute inset-0 z-10 flex items-center justify-center",
            style: { background: "var(--pubengine-stage-bg, #eceeef)" },
            children: /* @__PURE__ */ C.jsx("div", { className: "h-8 w-8 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-700" })
          }
        ),
        /* @__PURE__ */ C.jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-6 z-20 flex justify-center px-4", children: /* @__PURE__ */ C.jsx("div", { className: "pointer-events-auto", children: /* @__PURE__ */ C.jsx(u3, {}) }) })
      ]
    }
  );
}
function p3({ store: e, hostElement: t }) {
  return /* @__PURE__ */ C.jsx(I2, { store: e, children: /* @__PURE__ */ C.jsx(s3, { element: t, children: /* @__PURE__ */ C.jsx(d3, {}) }) });
}
const Vg = [
  "src",
  "page",
  "view",
  "theme",
  "download",
  "print",
  "search"
], h3 = `
  :host {
    display: block;
    width: 100%;
    /* Sensible default when the host page gives no explicit height — a
     * typical document page's proportions — so the widget is visible even
     * with zero host CSS. An explicit height set on the host element (e.g.
     * \`pub-engine { height: 700px }\`) overrides this automatically. */
    aspect-ratio: 4 / 3;
  }
`;
function oc(e, t) {
  return e === null ? t : e !== "false";
}
function m3(e) {
  if (e === null) return null;
  const t = Number(e);
  return Number.isFinite(t) && t > 0 ? Math.floor(t) : null;
}
function g3(e) {
  let t = !1;
  return (i, o) => {
    const a = i.status === "ready" && o.status !== "ready", l = i.status === "error" && o.status !== "error";
    if (a) {
      const c = {
        publicationId: i.publication?.id ?? null,
        title: i.publication?.title ?? null,
        pageCount: i.publication?.pages.length ?? 0
      };
      t || (t = !0, e.dispatchEvent(new CustomEvent("pubengine-ready", { detail: c, bubbles: !0, composed: !0 }))), e.dispatchEvent(
        new CustomEvent("publication-load", {
          detail: { manifest: i.publication },
          bubbles: !0,
          composed: !0
        })
      );
    }
    l && e.dispatchEvent(
      new CustomEvent("publication-error", {
        detail: { message: i.error },
        bubbles: !0,
        composed: !0
      })
    ), i.currentPage !== o.currentPage && e.dispatchEvent(
      new CustomEvent("page-change", {
        detail: { page: i.currentPage, pageCount: i.publication?.pages.length ?? 0 },
        bubbles: !0,
        composed: !0
      })
    ), i.isFullscreen !== o.isFullscreen && e.dispatchEvent(
      new CustomEvent("fullscreen-change", {
        detail: { isFullscreen: i.isFullscreen },
        bubbles: !0,
        composed: !0
      })
    );
  };
}
class y3 extends HTMLElement {
  static get observedAttributes() {
    return Vg;
  }
  #i;
  #t;
  #r = null;
  #e = null;
  #o = null;
  /** A `page` attribute set before the publication finishes loading is
   * applied once `openPublication`/`openPdf` resolves. */
  #n = null;
  constructor() {
    super(), this.#i = this.attachShadow({ mode: "open" });
    const t = document.createElement("style");
    t.textContent = `${h3}
${Oy}
${Ay}`, this.#i.appendChild(t), this.#t = document.createElement("div"), this.#t.style.height = "100%", this.#t.style.width = "100%", this.#i.appendChild(this.#t);
  }
  connectedCallback() {
    const t = zy();
    this.#e = t, this.#r = nx.createRoot(this.#t), this.#r.render(N.createElement(p3, { store: t, hostElement: this })), this.#o = t.subscribe(g3(this)), this.#a();
  }
  disconnectedCallback() {
    this.#o?.(), this.#o = null, this.#r?.unmount(), this.#r = null, this.#e = null, this.#n = null;
  }
  attributeChangedCallback(t, i, o) {
    !this.#e || i === o || this.#s(t, o);
  }
  #a() {
    for (const t of Vg)
      this.#s(t, this.getAttribute(t));
  }
  #s(t, i) {
    const o = this.#e;
    if (o)
      switch (t) {
        case "src": {
          if (!i) return;
          (O2(i) ? o.getState().openPdf(i) : o.getState().openPublication(i)).then(() => {
            this.#n != null && (o.getState().goToPage(this.#n), this.#n = null);
          });
          return;
        }
        case "page": {
          const a = m3(i);
          if (a == null) return;
          o.getState().status === "ready" ? o.getState().goToPage(a) : this.#n = a;
          return;
        }
        case "view": {
          i === "spread" || i === "single" ? o.getState().setViewMode(i) : i !== null && console.warn(`<pub-engine>: invalid view="${i}", expected "spread" or "single"`);
          return;
        }
        case "theme":
          return;
        case "download":
          o.getState().setDownloadEnabled(oc(i, !0));
          return;
        case "print":
          o.getState().setPrintEnabled(oc(i, !0));
          return;
        case "search":
          o.getState().setSearchEnabled(oc(i, !0));
          return;
        default:
          return;
      }
  }
  // Public JS API — thin delegates to the per-instance store. No-ops if
  // called before the element has connected.
  nextPage() {
    this.#e?.getState().nextPage();
  }
  previousPage() {
    this.#e?.getState().previousPage();
  }
  goToPage(t) {
    this.#e?.getState().goToPage(t);
  }
  setZoom(t) {
    this.#e?.getState().setZoomPercent(t);
  }
  enterFullscreen() {
    this.requestFullscreen();
  }
  exitFullscreen() {
    document.fullscreenElement === this && document.exitFullscreen();
  }
  search(t) {
    const i = this.#e;
    i && (i.getState().setSearchQuery(t), i.getState().setSearchOpen(!0));
  }
}
customElements.define("pub-engine", y3);
export {
  Y1 as g
};
