module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/klaro/dist/klaro-no-translations.js":
/*!**********************************************************!*\
  !*** ./node_modules/klaro/dist/klaro-no-translations.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (t, e) {
   true ? module.exports = e() : undefined;
}(window, function () {
  return function (t) {
    var e = {};

    function n(o) {
      if (e[o]) return e[o].exports;
      var r = e[o] = {
        i: o,
        l: !1,
        exports: {}
      };
      return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
    }

    return n.m = t, n.c = e, n.d = function (t, e, o) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: o
      });
    }, n.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var o = Object.create(null);
      if (n.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var r in t) {
        n.d(o, r, function (e) {
          return t[e];
        }.bind(null, r));
      }
      return o;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t["default"];
      } : function () {
        return t;
      };
      return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 164);
  }([function (t, e, n) {
    var o = n(2),
        r = n(27).f,
        i = n(21),
        c = n(22),
        a = n(66),
        l = n(100),
        u = n(57);

    t.exports = function (t, e) {
      var n,
          s,
          f,
          p,
          d,
          m = t.target,
          v = t.global,
          h = t.stat;
      if (n = v ? o : h ? o[m] || a(m, {}) : (o[m] || {}).prototype) for (s in e) {
        if (p = e[s], f = t.noTargetGet ? (d = r(n, s)) && d.value : n[s], !u(v ? s : m + (h ? "." : "#") + s, t.forced) && void 0 !== f) {
          if (typeof p == typeof f) continue;
          l(p, f);
        }

        (t.sham || f && f.sham) && i(p, "sham", !0), c(n, s, p, t);
      }
    };
  }, function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  }, function (t, e, n) {
    (function (e) {
      var n = function n(t) {
        return t && t.Math == Math && t;
      };

      t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || Function("return this")();
    }).call(this, n(135));
  }, function (t, e, n) {
    var o = n(2),
        r = n(68),
        i = n(15),
        c = n(54),
        a = n(72),
        l = n(105),
        u = r("wks"),
        s = o.Symbol,
        f = l ? s : s && s.withoutSetter || c;

    t.exports = function (t) {
      return i(u, t) || (a && i(s, t) ? u[t] = s[t] : u[t] = f("Symbol." + t)), u[t];
    };
  }, function (t, e) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        r = n(2),
        i = n(34),
        c = n(33),
        a = n(8),
        l = n(72),
        u = n(105),
        s = n(1),
        f = n(15),
        p = n(58),
        d = n(4),
        m = n(9),
        v = n(23),
        h = n(18),
        y = n(52),
        b = n(42),
        g = n(44),
        k = n(45),
        _ = n(55),
        x = n(138),
        w = n(71),
        S = n(27),
        O = n(16),
        j = n(50),
        E = n(21),
        A = n(22),
        P = n(68),
        C = n(53),
        R = n(43),
        T = n(54),
        N = n(3),
        I = n(107),
        D = n(108),
        M = n(46),
        L = n(32),
        U = n(59).forEach,
        q = C("hidden"),
        F = N("toPrimitive"),
        W = L.set,
        z = L.getterFor("Symbol"),
        H = Object.prototype,
        _$ = r.Symbol,
        B = i("JSON", "stringify"),
        G = S.f,
        V = O.f,
        K = x.f,
        X = j.f,
        Y = P("symbols"),
        J = P("op-symbols"),
        Q = P("string-to-symbol-registry"),
        Z = P("symbol-to-string-registry"),
        tt = P("wks"),
        et = r.QObject,
        nt = !et || !et.prototype || !et.prototype.findChild,
        ot = a && s(function () {
      return 7 != g(V({}, "a", {
        get: function get() {
          return V(this, "a", {
            value: 7
          }).a;
        }
      })).a;
    }) ? function (t, e, n) {
      var o = G(H, e);
      o && delete H[e], V(t, e, n), o && t !== H && V(H, e, o);
    } : V,
        rt = function rt(t, e) {
      var n = Y[t] = g(_$.prototype);
      return W(n, {
        type: "Symbol",
        tag: t,
        description: e
      }), a || (n.description = e), n;
    },
        it = u ? function (t) {
      return "symbol" == typeof t;
    } : function (t) {
      return Object(t) instanceof _$;
    },
        ct = function ct(t, e, n) {
      t === H && ct(J, e, n), m(t);
      var o = y(e, !0);
      return m(n), f(Y, o) ? (n.enumerable ? (f(t, q) && t[q][o] && (t[q][o] = !1), n = g(n, {
        enumerable: b(0, !1)
      })) : (f(t, q) || V(t, q, b(1, {})), t[q][o] = !0), ot(t, o, n)) : V(t, o, n);
    },
        at = function at(t, e) {
      m(t);
      var n = h(e),
          o = k(n).concat(ft(n));
      return U(o, function (e) {
        a && !lt.call(n, e) || ct(t, e, n[e]);
      }), t;
    },
        lt = function lt(t) {
      var e = y(t, !0),
          n = X.call(this, e);
      return !(this === H && f(Y, e) && !f(J, e)) && (!(n || !f(this, e) || !f(Y, e) || f(this, q) && this[q][e]) || n);
    },
        ut = function ut(t, e) {
      var n = h(t),
          o = y(e, !0);

      if (n !== H || !f(Y, o) || f(J, o)) {
        var r = G(n, o);
        return !r || !f(Y, o) || f(n, q) && n[q][o] || (r.enumerable = !0), r;
      }
    },
        st = function st(t) {
      var e = K(h(t)),
          n = [];
      return U(e, function (t) {
        f(Y, t) || f(R, t) || n.push(t);
      }), n;
    },
        ft = function ft(t) {
      var e = t === H,
          n = K(e ? J : h(t)),
          o = [];
      return U(n, function (t) {
        !f(Y, t) || e && !f(H, t) || o.push(Y[t]);
      }), o;
    };

    (l || (A((_$ = function $() {
      if (this instanceof _$) throw TypeError("Symbol is not a constructor");

      var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
          e = T(t),
          n = function n(t) {
        this === H && n.call(J, t), f(this, q) && f(this[q], e) && (this[q][e] = !1), ot(this, e, b(1, t));
      };

      return a && nt && ot(H, e, {
        configurable: !0,
        set: n
      }), rt(e, t);
    }).prototype, "toString", function () {
      return z(this).tag;
    }), A(_$, "withoutSetter", function (t) {
      return rt(T(t), t);
    }), j.f = lt, O.f = ct, S.f = ut, _.f = x.f = st, w.f = ft, I.f = function (t) {
      return rt(N(t), t);
    }, a && (V(_$.prototype, "description", {
      configurable: !0,
      get: function get() {
        return z(this).description;
      }
    }), c || A(H, "propertyIsEnumerable", lt, {
      unsafe: !0
    }))), o({
      global: !0,
      wrap: !0,
      forced: !l,
      sham: !l
    }, {
      Symbol: _$
    }), U(k(tt), function (t) {
      D(t);
    }), o({
      target: "Symbol",
      stat: !0,
      forced: !l
    }, {
      "for": function _for(t) {
        var e = String(t);
        if (f(Q, e)) return Q[e];

        var n = _$(e);

        return Q[e] = n, Z[n] = e, n;
      },
      keyFor: function keyFor(t) {
        if (!it(t)) throw TypeError(t + " is not a symbol");
        if (f(Z, t)) return Z[t];
      },
      useSetter: function useSetter() {
        nt = !0;
      },
      useSimple: function useSimple() {
        nt = !1;
      }
    }), o({
      target: "Object",
      stat: !0,
      forced: !l,
      sham: !a
    }, {
      create: function create(t, e) {
        return void 0 === e ? g(t) : at(g(t), e);
      },
      defineProperty: ct,
      defineProperties: at,
      getOwnPropertyDescriptor: ut
    }), o({
      target: "Object",
      stat: !0,
      forced: !l
    }, {
      getOwnPropertyNames: st,
      getOwnPropertySymbols: ft
    }), o({
      target: "Object",
      stat: !0,
      forced: s(function () {
        w.f(1);
      })
    }, {
      getOwnPropertySymbols: function getOwnPropertySymbols(t) {
        return w.f(v(t));
      }
    }), B) && o({
      target: "JSON",
      stat: !0,
      forced: !l || s(function () {
        var t = _$();

        return "[null]" != B([t]) || "{}" != B({
          a: t
        }) || "{}" != B(Object(t));
      })
    }, {
      stringify: function stringify(t, e, n) {
        for (var o, r = [t], i = 1; arguments.length > i;) {
          r.push(arguments[i++]);
        }

        if (o = e, (d(e) || void 0 !== t) && !it(t)) return p(e) || (e = function e(t, _e2) {
          if ("function" == typeof o && (_e2 = o.call(this, t, _e2)), !it(_e2)) return _e2;
        }), r[1] = e, B.apply(null, r);
      }
    });
    _$.prototype[F] || E(_$.prototype, F, _$.prototype.valueOf), M(_$, "Symbol"), R[q] = !0;
  }, function (t, e, n) {
    "use strict";

    var o = n(18),
        r = n(115),
        i = n(48),
        c = n(32),
        a = n(78),
        l = c.set,
        u = c.getterFor("Array Iterator");
    t.exports = a(Array, "Array", function (t, e) {
      l(this, {
        type: "Array Iterator",
        target: o(t),
        index: 0,
        kind: e
      });
    }, function () {
      var t = u(this),
          e = t.target,
          n = t.kind,
          o = t.index++;
      return !e || o >= e.length ? (t.target = void 0, {
        value: void 0,
        done: !0
      }) : "keys" == n ? {
        value: o,
        done: !1
      } : "values" == n ? {
        value: e[o],
        done: !1
      } : {
        value: [o, e[o]],
        done: !1
      };
    }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries");
  }, function (t, e, n) {
    var o = n(76),
        r = n(22),
        i = n(143);
    o || r(Object.prototype, "toString", i, {
      unsafe: !0
    });
  }, function (t, e, n) {
    var o = n(1);
    t.exports = !o(function () {
      return 7 != Object.defineProperty({}, 1, {
        get: function get() {
          return 7;
        }
      })[1];
    });
  }, function (t, e, n) {
    var o = n(4);

    t.exports = function (t) {
      if (!o(t)) throw TypeError(String(t) + " is not an object");
      return t;
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        r = n(8),
        i = n(2),
        c = n(15),
        a = n(4),
        l = n(16).f,
        u = n(100),
        s = i.Symbol;

    if (r && "function" == typeof s && (!("description" in s.prototype) || void 0 !== s().description)) {
      var f = {},
          p = function p() {
        var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
            e = this instanceof p ? new s(t) : void 0 === t ? s() : s(t);
        return "" === t && (f[e] = !0), e;
      };

      u(p, s);
      var d = p.prototype = s.prototype;
      d.constructor = p;
      var m = d.toString,
          v = "Symbol(test)" == String(s("test")),
          h = /^Symbol\((.*)\)[^)]+$/;
      l(d, "description", {
        configurable: !0,
        get: function get() {
          var t = a(this) ? this.valueOf() : this,
              e = m.call(t);
          if (c(f, t)) return "";
          var n = v ? e.slice(7, -1) : e.replace(h, "$1");
          return "" === n ? void 0 : n;
        }
      }), o({
        global: !0,
        forced: !0
      }, {
        Symbol: p
      });
    }
  }, function (t, e, n) {
    n(108)("iterator");
  }, function (t, e, n) {
    "use strict";

    var o = n(22),
        r = n(9),
        i = n(1),
        c = n(87),
        a = RegExp.prototype,
        l = a.toString,
        u = i(function () {
      return "/a/b" != l.call({
        source: "a",
        flags: "b"
      });
    }),
        s = "toString" != l.name;
    (u || s) && o(RegExp.prototype, "toString", function () {
      var t = r(this),
          e = String(t.source),
          n = t.flags;
      return "/" + e + "/" + String(void 0 === n && t instanceof RegExp && !("flags" in a) ? c.call(t) : n);
    }, {
      unsafe: !0
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(124).charAt,
        r = n(32),
        i = n(78),
        c = r.set,
        a = r.getterFor("String Iterator");
    i(String, "String", function (t) {
      c(this, {
        type: "String Iterator",
        string: String(t),
        index: 0
      });
    }, function () {
      var t,
          e = a(this),
          n = e.string,
          r = e.index;
      return r >= n.length ? {
        value: void 0,
        done: !0
      } : (t = o(n, r), e.index += t.length, {
        value: t,
        done: !1
      });
    });
  }, function (t, e, n) {
    var o = n(2),
        r = n(126),
        i = n(6),
        c = n(21),
        a = n(3),
        l = a("iterator"),
        u = a("toStringTag"),
        s = i.values;

    for (var f in r) {
      var p = o[f],
          d = p && p.prototype;

      if (d) {
        if (d[l] !== s) try {
          c(d, l, s);
        } catch (t) {
          d[l] = s;
        }
        if (d[u] || c(d, u, f), r[f]) for (var m in i) {
          if (d[m] !== i[m]) try {
            c(d, m, i[m]);
          } catch (t) {
            d[m] = i[m];
          }
        }
      }
    }
  }, function (t, e) {
    var n = {}.hasOwnProperty;

    t.exports = function (t, e) {
      return n.call(t, e);
    };
  }, function (t, e, n) {
    var o = n(8),
        r = n(98),
        i = n(9),
        c = n(52),
        a = Object.defineProperty;
    e.f = o ? a : function (t, e, n) {
      if (i(t), e = c(e, !0), i(n), r) try {
        return a(t, e, n);
      } catch (t) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
      return "value" in n && (t[e] = n.value), t;
    };
  }, function (t, e, n) {
    var o = n(8),
        r = n(16).f,
        i = Function.prototype,
        c = i.toString,
        a = /^\s*function ([^ (]*)/;
    o && !("name" in i) && r(i, "name", {
      configurable: !0,
      get: function get() {
        try {
          return c.call(this).match(a)[1];
        } catch (t) {
          return "";
        }
      }
    });
  }, function (t, e, n) {
    var o = n(51),
        r = n(26);

    t.exports = function (t) {
      return o(r(t));
    };
  }, function (t, e, n) {
    var o = n(56),
        r = Math.min;

    t.exports = function (t) {
      return t > 0 ? r(o(t), 9007199254740991) : 0;
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        r = n(4),
        i = n(58),
        c = n(104),
        a = n(19),
        l = n(18),
        u = n(60),
        s = n(3),
        f = n(61),
        p = n(41),
        d = f("slice"),
        m = p("slice", {
      ACCESSORS: !0,
      0: 0,
      1: 2
    }),
        v = s("species"),
        h = [].slice,
        y = Math.max;
    o({
      target: "Array",
      proto: !0,
      forced: !d || !m
    }, {
      slice: function slice(t, e) {
        var n,
            o,
            s,
            f = l(this),
            p = a(f.length),
            d = c(t, p),
            m = c(void 0 === e ? p : e, p);
        if (i(f) && ("function" != typeof (n = f.constructor) || n !== Array && !i(n.prototype) ? r(n) && null === (n = n[v]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return h.call(f, d, m);

        for (o = new (void 0 === n ? Array : n)(y(m - d, 0)), s = 0; d < m; d++, s++) {
          d in f && u(o, s, f[d]);
        }

        return o.length = s, o;
      }
    });
  }, function (t, e, n) {
    var o = n(8),
        r = n(16),
        i = n(42);
    t.exports = o ? function (t, e, n) {
      return r.f(t, e, i(1, n));
    } : function (t, e, n) {
      return t[e] = n, t;
    };
  }, function (t, e, n) {
    var o = n(2),
        r = n(21),
        i = n(15),
        c = n(66),
        a = n(67),
        l = n(32),
        u = l.get,
        s = l.enforce,
        f = String(String).split("String");
    (t.exports = function (t, e, n, a) {
      var l = !!a && !!a.unsafe,
          u = !!a && !!a.enumerable,
          p = !!a && !!a.noTargetGet;
      "function" == typeof n && ("string" != typeof e || i(n, "name") || r(n, "name", e), s(n).source = f.join("string" == typeof e ? e : "")), t !== o ? (l ? !p && t[e] && (u = !0) : delete t[e], u ? t[e] = n : r(t, e, n)) : u ? t[e] = n : c(e, n);
    })(Function.prototype, "toString", function () {
      return "function" == typeof this && u(this).source || a(this);
    });
  }, function (t, e, n) {
    var o = n(26);

    t.exports = function (t) {
      return Object(o(t));
    };
  }, function (t, e, n) {
    var o = n(0),
        r = n(139);
    o({
      target: "Array",
      stat: !0,
      forced: !n(77)(function (t) {
        Array.from(t);
      })
    }, {
      from: r
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        r = n(59).map,
        i = n(61),
        c = n(41),
        a = i("map"),
        l = c("map");
    o({
      target: "Array",
      proto: !0,
      forced: !a || !l
    }, {
      map: function map(t) {
        return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  }, function (t, e) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    };
  }, function (t, e, n) {
    var o = n(8),
        r = n(50),
        i = n(42),
        c = n(18),
        a = n(52),
        l = n(15),
        u = n(98),
        s = Object.getOwnPropertyDescriptor;
    e.f = o ? s : function (t, e) {
      if (t = c(t), e = a(e, !0), u) try {
        return s(t, e);
      } catch (t) {}
      if (l(t, e)) return i(!r.f.call(t, e), t[e]);
    };
  }, function (t, e) {
    var n = {}.toString;

    t.exports = function (t) {
      return n.call(t).slice(8, -1);
    };
  }, function (t, e, n) {
    var o = n(0),
        r = n(1),
        i = n(23),
        c = n(79),
        a = n(117);
    o({
      target: "Object",
      stat: !0,
      forced: r(function () {
        c(1);
      }),
      sham: !a
    }, {
      getPrototypeOf: function getPrototypeOf(t) {
        return c(i(t));
      }
    });
  }, function (t, e, n) {
    n(0)({
      target: "Object",
      stat: !0
    }, {
      setPrototypeOf: n(80)
    });
  }, function (t, e, n) {
    var o = n(0),
        r = n(34),
        i = n(35),
        c = n(9),
        a = n(4),
        l = n(44),
        u = n(144),
        s = n(1),
        f = r("Reflect", "construct"),
        p = s(function () {
      function t() {}

      return !(f(function () {}, [], t) instanceof t);
    }),
        d = !s(function () {
      f(function () {});
    }),
        m = p || d;
    o({
      target: "Reflect",
      stat: !0,
      forced: m,
      sham: m
    }, {
      construct: function construct(t, e) {
        i(t), c(e);
        var n = arguments.length < 3 ? t : i(arguments[2]);
        if (d && !p) return f(t, e, n);

        if (t == n) {
          switch (e.length) {
            case 0:
              return new t();

            case 1:
              return new t(e[0]);

            case 2:
              return new t(e[0], e[1]);

            case 3:
              return new t(e[0], e[1], e[2]);

            case 4:
              return new t(e[0], e[1], e[2], e[3]);
          }

          var o = [null];
          return o.push.apply(o, e), new (u.apply(t, o))();
        }

        var r = n.prototype,
            s = l(a(r) ? r : Object.prototype),
            m = Function.apply.call(t, s, e);
        return a(m) ? m : s;
      }
    });
  }, function (t, e, n) {
    var o,
        r,
        i,
        c = n(136),
        a = n(2),
        l = n(4),
        u = n(21),
        s = n(15),
        f = n(53),
        p = n(43),
        d = a.WeakMap;

    if (c) {
      var m = new d(),
          v = m.get,
          h = m.has,
          y = m.set;
      o = function o(t, e) {
        return y.call(m, t, e), e;
      }, r = function r(t) {
        return v.call(m, t) || {};
      }, i = function i(t) {
        return h.call(m, t);
      };
    } else {
      var b = f("state");
      p[b] = !0, o = function o(t, e) {
        return u(t, b, e), e;
      }, r = function r(t) {
        return s(t, b) ? t[b] : {};
      }, i = function i(t) {
        return s(t, b);
      };
    }

    t.exports = {
      set: o,
      get: r,
      has: i,
      enforce: function enforce(t) {
        return i(t) ? r(t) : o(t, {});
      },
      getterFor: function getterFor(t) {
        return function (e) {
          var n;
          if (!l(e) || (n = r(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
          return n;
        };
      }
    };
  }, function (t, e) {
    t.exports = !1;
  }, function (t, e, n) {
    var o = n(102),
        r = n(2),
        i = function i(t) {
      return "function" == typeof t ? t : void 0;
    };

    t.exports = function (t, e) {
      return arguments.length < 2 ? i(o[t]) || i(r[t]) : o[t] && o[t][e] || r[t] && r[t][e];
    };
  }, function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
      return t;
    };
  }, function (t, e, n) {
    var o = n(0),
        r = n(23),
        i = n(45);
    o({
      target: "Object",
      stat: !0,
      forced: n(1)(function () {
        i(1);
      })
    }, {
      keys: function keys(t) {
        return i(r(t));
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        r = n(63);
    o({
      target: "RegExp",
      proto: !0,
      forced: /./.exec !== r
    }, {
      exec: r
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        r = n(51),
        i = n(18),
        c = n(62),
        a = [].join,
        l = r != Object,
        u = c("join", ",");
    o({
      target: "Array",
      proto: !0,
      forced: l || !u
    }, {
      join: function join(t) {
        return a.call(i(this), void 0 === t ? "," : t);
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        r = n(1),
        i = n(58),
        c = n(4),
        a = n(23),
        l = n(19),
        u = n(60),
        s = n(109),
        f = n(61),
        p = n(3),
        d = n(73),
        m = p("isConcatSpreadable"),
        v = d >= 51 || !r(function () {
      var t = [];
      return t[m] = !1, t.concat()[0] !== t;
    }),
        h = f("concat"),
        y = function y(t) {
      if (!c(t)) return !1;
      var e = t[m];
      return void 0 !== e ? !!e : i(t);
    };

    o({
      target: "Array",
      proto: !0,
      forced: !v || !h
    }, {
      concat: function concat(t) {
        var e,
            n,
            o,
            r,
            i,
            c = a(this),
            f = s(c, 0),
            p = 0;

        for (e = -1, o = arguments.length; e < o; e++) {
          if (y(i = -1 === e ? c : arguments[e])) {
            if (p + (r = l(i.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");

            for (n = 0; n < r; n++, p++) {
              n in i && u(f, p, i[n]);
            }
          } else {
            if (p >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
            u(f, p++, i);
          }
        }

        return f.length = p, f;
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        r = n(59).filter,
        i = n(61),
        c = n(41),
        a = i("filter"),
        l = c("filter");
    o({
      target: "Array",
      proto: !0,
      forced: !a || !l
    }, {
      filter: function filter(t) {
        return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  }, function (t, e, n) {
    var o = n(8),
        r = n(1),
        i = n(15),
        c = Object.defineProperty,
        a = {},
        l = function l(t) {
      throw t;
    };

    t.exports = function (t, e) {
      if (i(a, t)) return a[t];
      e || (e = {});
      var n = [][t],
          u = !!i(e, "ACCESSORS") && e.ACCESSORS,
          s = i(e, 0) ? e[0] : l,
          f = i(e, 1) ? e[1] : void 0;
      return a[t] = !!n && !r(function () {
        if (u && !o) return !0;
        var t = {
          length: -1
        };
        u ? c(t, 1, {
          enumerable: !0,
          get: l
        }) : t[1] = 1, n.call(t, s, f);
      });
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      };
    };
  }, function (t, e) {
    t.exports = {};
  }, function (t, e, n) {
    var o,
        r = n(9),
        i = n(137),
        c = n(70),
        a = n(43),
        l = n(106),
        u = n(65),
        s = n(53),
        f = s("IE_PROTO"),
        p = function p() {},
        d = function d(t) {
      return "<script>" + t + "<\/script>";
    },
        _m = function m() {
      try {
        o = document.domain && new ActiveXObject("htmlfile");
      } catch (t) {}

      var t, e;
      _m = o ? function (t) {
        t.write(d("")), t.close();
        var e = t.parentWindow.Object;
        return t = null, e;
      }(o) : ((e = u("iframe")).style.display = "none", l.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(d("document.F=Object")), t.close(), t.F);

      for (var n = c.length; n--;) {
        delete _m.prototype[c[n]];
      }

      return _m();
    };

    a[f] = !0, t.exports = Object.create || function (t, e) {
      var n;
      return null !== t ? (p.prototype = r(t), n = new p(), p.prototype = null, n[f] = t) : n = _m(), void 0 === e ? n : i(n, e);
    };
  }, function (t, e, n) {
    var o = n(103),
        r = n(70);

    t.exports = Object.keys || function (t) {
      return o(t, r);
    };
  }, function (t, e, n) {
    var o = n(16).f,
        r = n(15),
        i = n(3)("toStringTag");

    t.exports = function (t, e, n) {
      t && !r(t = n ? t : t.prototype, i) && o(t, i, {
        configurable: !0,
        value: e
      });
    };
  }, function (t, e, n) {
    var o = n(35);

    t.exports = function (t, e, n) {
      if (o(t), void 0 === e) return t;

      switch (n) {
        case 0:
          return function () {
            return t.call(e);
          };

        case 1:
          return function (n) {
            return t.call(e, n);
          };

        case 2:
          return function (n, o) {
            return t.call(e, n, o);
          };

        case 3:
          return function (n, o, r) {
            return t.call(e, n, o, r);
          };
      }

      return function () {
        return t.apply(e, arguments);
      };
    };
  }, function (t, e) {
    t.exports = {};
  }, function (t, e, n) {
    var o = n(0),
        r = n(148);
    o({
      target: "Object",
      stat: !0,
      forced: Object.assign !== r
    }, {
      assign: r
    });
  }, function (t, e, n) {
    "use strict";

    var o = {}.propertyIsEnumerable,
        r = Object.getOwnPropertyDescriptor,
        i = r && !o.call({
      1: 2
    }, 1);
    e.f = i ? function (t) {
      var e = r(this, t);
      return !!e && e.enumerable;
    } : o;
  }, function (t, e, n) {
    var o = n(1),
        r = n(28),
        i = "".split;
    t.exports = o(function () {
      return !Object("z").propertyIsEnumerable(0);
    }) ? function (t) {
      return "String" == r(t) ? i.call(t, "") : Object(t);
    } : Object;
  }, function (t, e, n) {
    var o = n(4);

    t.exports = function (t, e) {
      if (!o(t)) return t;
      var n, r;
      if (e && "function" == typeof (n = t.toString) && !o(r = n.call(t))) return r;
      if ("function" == typeof (n = t.valueOf) && !o(r = n.call(t))) return r;
      if (!e && "function" == typeof (n = t.toString) && !o(r = n.call(t))) return r;
      throw TypeError("Can't convert object to primitive value");
    };
  }, function (t, e, n) {
    var o = n(68),
        r = n(54),
        i = o("keys");

    t.exports = function (t) {
      return i[t] || (i[t] = r(t));
    };
  }, function (t, e) {
    var n = 0,
        o = Math.random();

    t.exports = function (t) {
      return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + o).toString(36);
    };
  }, function (t, e, n) {
    var o = n(103),
        r = n(70).concat("length", "prototype");

    e.f = Object.getOwnPropertyNames || function (t) {
      return o(t, r);
    };
  }, function (t, e) {
    var n = Math.ceil,
        o = Math.floor;

    t.exports = function (t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? o : n)(t);
    };
  }, function (t, e, n) {
    var o = n(1),
        r = /#|\.prototype\./,
        i = function i(t, e) {
      var n = a[c(t)];
      return n == u || n != l && ("function" == typeof e ? o(e) : !!e);
    },
        c = i.normalize = function (t) {
      return String(t).replace(r, ".").toLowerCase();
    },
        a = i.data = {},
        l = i.NATIVE = "N",
        u = i.POLYFILL = "P";

    t.exports = i;
  }, function (t, e, n) {
    var o = n(28);

    t.exports = Array.isArray || function (t) {
      return "Array" == o(t);
    };
  }, function (t, e, n) {
    var o = n(47),
        r = n(51),
        i = n(23),
        c = n(19),
        a = n(109),
        l = [].push,
        u = function u(t) {
      var e = 1 == t,
          n = 2 == t,
          u = 3 == t,
          s = 4 == t,
          f = 6 == t,
          p = 5 == t || f;
      return function (d, m, v, h) {
        for (var y, b, g = i(d), k = r(g), _ = o(m, v, 3), x = c(k.length), w = 0, S = h || a, O = e ? S(d, x) : n ? S(d, 0) : void 0; x > w; w++) {
          if ((p || w in k) && (b = _(y = k[w], w, g), t)) if (e) O[w] = b;else if (b) switch (t) {
            case 3:
              return !0;

            case 5:
              return y;

            case 6:
              return w;

            case 2:
              l.call(O, y);
          } else if (s) return !1;
        }

        return f ? -1 : u || s ? s : O;
      };
    };

    t.exports = {
      forEach: u(0),
      map: u(1),
      filter: u(2),
      some: u(3),
      every: u(4),
      find: u(5),
      findIndex: u(6)
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(52),
        r = n(16),
        i = n(42);

    t.exports = function (t, e, n) {
      var c = o(e);
      c in t ? r.f(t, c, i(0, n)) : t[c] = n;
    };
  }, function (t, e, n) {
    var o = n(1),
        r = n(3),
        i = n(73),
        c = r("species");

    t.exports = function (t) {
      return i >= 51 || !o(function () {
        var e = [];
        return (e.constructor = {})[c] = function () {
          return {
            foo: 1
          };
        }, 1 !== e[t](Boolean).foo;
      });
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(1);

    t.exports = function (t, e) {
      var n = [][t];
      return !!n && o(function () {
        n.call(null, e || function () {
          throw 1;
        }, 1);
      });
    };
  }, function (t, e, n) {
    "use strict";

    var o,
        r,
        i = n(87),
        c = n(123),
        a = RegExp.prototype.exec,
        l = String.prototype.replace,
        u = a,
        s = (o = /a/, r = /b*/g, a.call(o, "a"), a.call(r, "a"), 0 !== o.lastIndex || 0 !== r.lastIndex),
        f = c.UNSUPPORTED_Y || c.BROKEN_CARET,
        p = void 0 !== /()??/.exec("")[1];
    (s || p || f) && (u = function u(t) {
      var e,
          n,
          o,
          r,
          c = this,
          u = f && c.sticky,
          d = i.call(c),
          m = c.source,
          v = 0,
          h = t;
      return u && (-1 === (d = d.replace("y", "")).indexOf("g") && (d += "g"), h = String(t).slice(c.lastIndex), c.lastIndex > 0 && (!c.multiline || c.multiline && "\n" !== t[c.lastIndex - 1]) && (m = "(?: " + m + ")", h = " " + h, v++), n = new RegExp("^(?:" + m + ")", d)), p && (n = new RegExp("^" + m + "$(?!\\s)", d)), s && (e = c.lastIndex), o = a.call(u ? n : c, h), u ? o ? (o.input = o.input.slice(v), o[0] = o[0].slice(v), o.index = c.lastIndex, c.lastIndex += o[0].length) : c.lastIndex = 0 : s && o && (c.lastIndex = c.global ? o.index + o[0].length : e), p && o && o.length > 1 && l.call(o[0], n, function () {
        for (r = 1; r < arguments.length - 2; r++) {
          void 0 === arguments[r] && (o[r] = void 0);
        }
      }), o;
    }), t.exports = u;
  }, function (t, e, n) {
    var o = n(8),
        r = n(2),
        i = n(57),
        c = n(120),
        a = n(16).f,
        l = n(55).f,
        u = n(90),
        s = n(87),
        f = n(123),
        p = n(22),
        d = n(1),
        m = n(32).set,
        v = n(84),
        h = n(3)("match"),
        y = r.RegExp,
        b = y.prototype,
        g = /a/g,
        k = /a/g,
        _ = new y(g) !== g,
        x = f.UNSUPPORTED_Y;

    if (o && i("RegExp", !_ || x || d(function () {
      return k[h] = !1, y(g) != g || y(k) == k || "/a/i" != y(g, "i");
    }))) {
      for (var w = function w(t, e) {
        var n,
            o = this instanceof w,
            r = u(t),
            i = void 0 === e;
        if (!o && r && t.constructor === w && i) return t;
        _ ? r && !i && (t = t.source) : t instanceof w && (i && (e = s.call(t)), t = t.source), x && (n = !!e && e.indexOf("y") > -1) && (e = e.replace(/y/g, ""));
        var a = c(_ ? new y(t, e) : y(t, e), o ? this : b, w);
        return x && n && m(a, {
          sticky: n
        }), a;
      }, S = function S(t) {
        (t in w) || a(w, t, {
          configurable: !0,
          get: function get() {
            return y[t];
          },
          set: function set(e) {
            y[t] = e;
          }
        });
      }, O = l(y), j = 0; O.length > j;) {
        S(O[j++]);
      }

      b.constructor = w, w.prototype = b, p(r, "RegExp", w);
    }

    v("RegExp");
  }, function (t, e, n) {
    var o = n(2),
        r = n(4),
        i = o.document,
        c = r(i) && r(i.createElement);

    t.exports = function (t) {
      return c ? i.createElement(t) : {};
    };
  }, function (t, e, n) {
    var o = n(2),
        r = n(21);

    t.exports = function (t, e) {
      try {
        r(o, t, e);
      } catch (n) {
        o[t] = e;
      }

      return e;
    };
  }, function (t, e, n) {
    var o = n(99),
        r = Function.toString;
    "function" != typeof o.inspectSource && (o.inspectSource = function (t) {
      return r.call(t);
    }), t.exports = o.inspectSource;
  }, function (t, e, n) {
    var o = n(33),
        r = n(99);
    (t.exports = function (t, e) {
      return r[t] || (r[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: "3.6.5",
      mode: o ? "pure" : "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    });
  }, function (t, e, n) {
    var o = n(18),
        r = n(19),
        i = n(104),
        c = function c(t) {
      return function (e, n, c) {
        var a,
            l = o(e),
            u = r(l.length),
            s = i(c, u);

        if (t && n != n) {
          for (; u > s;) {
            if ((a = l[s++]) != a) return !0;
          }
        } else for (; u > s; s++) {
          if ((t || s in l) && l[s] === n) return t || s || 0;
        }

        return !t && -1;
      };
    };

    t.exports = {
      includes: c(!0),
      indexOf: c(!1)
    };
  }, function (t, e) {
    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  }, function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  }, function (t, e, n) {
    var o = n(1);
    t.exports = !!Object.getOwnPropertySymbols && !o(function () {
      return !String(Symbol());
    });
  }, function (t, e, n) {
    var o,
        r,
        i = n(2),
        c = n(74),
        a = i.process,
        l = a && a.versions,
        u = l && l.v8;
    u ? r = (o = u.split("."))[0] + o[1] : c && (!(o = c.match(/Edge\/(\d+)/)) || o[1] >= 74) && (o = c.match(/Chrome\/(\d+)/)) && (r = o[1]), t.exports = r && +r;
  }, function (t, e, n) {
    var o = n(34);
    t.exports = o("navigator", "userAgent") || "";
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        r = n(110);
    o({
      target: "Array",
      proto: !0,
      forced: [].forEach != r
    }, {
      forEach: r
    });
  }, function (t, e, n) {
    var o = {};
    o[n(3)("toStringTag")] = "z", t.exports = "[object z]" === String(o);
  }, function (t, e, n) {
    var o = n(3)("iterator"),
        r = !1;

    try {
      var i = 0,
          c = {
        next: function next() {
          return {
            done: !!i++
          };
        },
        "return": function _return() {
          r = !0;
        }
      };
      c[o] = function () {
        return this;
      }, Array.from(c, function () {
        throw 2;
      });
    } catch (t) {}

    t.exports = function (t, e) {
      if (!e && !r) return !1;
      var n = !1;

      try {
        var i = {};
        i[o] = function () {
          return {
            next: function next() {
              return {
                done: n = !0
              };
            }
          };
        }, t(i);
      } catch (t) {}

      return n;
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        r = n(140),
        i = n(79),
        c = n(80),
        a = n(46),
        l = n(21),
        u = n(22),
        s = n(3),
        f = n(33),
        p = n(48),
        d = n(116),
        m = d.IteratorPrototype,
        v = d.BUGGY_SAFARI_ITERATORS,
        h = s("iterator"),
        y = function y() {
      return this;
    };

    t.exports = function (t, e, n, s, d, b, g) {
      r(n, e, s);

      var k,
          _,
          x,
          w = function w(t) {
        if (t === d && A) return A;
        if (!v && t in j) return j[t];

        switch (t) {
          case "keys":
          case "values":
          case "entries":
            return function () {
              return new n(this, t);
            };
        }

        return function () {
          return new n(this);
        };
      },
          S = e + " Iterator",
          O = !1,
          j = t.prototype,
          E = j[h] || j["@@iterator"] || d && j[d],
          A = !v && E || w(d),
          P = "Array" == e && j.entries || E;

      if (P && (k = i(P.call(new t())), m !== Object.prototype && k.next && (f || i(k) === m || (c ? c(k, m) : "function" != typeof k[h] && l(k, h, y)), a(k, S, !0, !0), f && (p[S] = y))), "values" == d && E && "values" !== E.name && (O = !0, A = function A() {
        return E.call(this);
      }), f && !g || j[h] === A || l(j, h, A), p[e] = A, d) if (_ = {
        values: w("values"),
        keys: b ? A : w("keys"),
        entries: w("entries")
      }, g) for (x in _) {
        (v || O || !(x in j)) && u(j, x, _[x]);
      } else o({
        target: e,
        proto: !0,
        forced: v || O
      }, _);
      return _;
    };
  }, function (t, e, n) {
    var o = n(15),
        r = n(23),
        i = n(53),
        c = n(117),
        a = i("IE_PROTO"),
        l = Object.prototype;
    t.exports = c ? Object.getPrototypeOf : function (t) {
      return t = r(t), o(t, a) ? t[a] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? l : null;
    };
  }, function (t, e, n) {
    var o = n(9),
        r = n(141);
    t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
      var t,
          e = !1,
          n = {};

      try {
        (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), e = n instanceof Array;
      } catch (t) {}

      return function (n, i) {
        return o(n), r(i), e ? t.call(n, i) : n.__proto__ = i, n;
      };
    }() : void 0);
  }, function (t, e, n) {
    "use strict";

    var o = n(118),
        r = n(121);
    t.exports = o("Map", function (t) {
      return function () {
        return t(this, arguments.length ? arguments[0] : void 0);
      };
    }, r);
  }, function (t, e, n) {
    var o = n(9),
        r = n(112),
        i = n(19),
        c = n(47),
        a = n(113),
        l = n(111),
        u = function u(t, e) {
      this.stopped = t, this.result = e;
    };

    (t.exports = function (t, e, n, s, f) {
      var p,
          d,
          m,
          v,
          h,
          y,
          b,
          g = c(e, n, s ? 2 : 1);
      if (f) p = t;else {
        if ("function" != typeof (d = a(t))) throw TypeError("Target is not iterable");

        if (r(d)) {
          for (m = 0, v = i(t.length); v > m; m++) {
            if ((h = s ? g(o(b = t[m])[0], b[1]) : g(t[m])) && h instanceof u) return h;
          }

          return new u(!1);
        }

        p = d.call(t);
      }

      for (y = p.next; !(b = y.call(p)).done;) {
        if ("object" == typeof (h = l(p, g, b.value, s)) && h && h instanceof u) return h;
      }

      return new u(!1);
    }).stop = function (t) {
      return new u(!0, t);
    };
  }, function (t, e) {
    t.exports = function (t, e, n) {
      if (!(t instanceof e)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
      return t;
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(34),
        r = n(16),
        i = n(3),
        c = n(8),
        a = i("species");

    t.exports = function (t) {
      var e = o(t),
          n = r.f;
      c && e && !e[a] && n(e, a, {
        configurable: !0,
        get: function get() {
          return this;
        }
      });
    };
  }, function (t, e, n) {
    var o = n(0),
        r = n(1),
        i = n(18),
        c = n(27).f,
        a = n(8),
        l = r(function () {
      c(1);
    });
    o({
      target: "Object",
      stat: !0,
      forced: !a || l,
      sham: !a
    }, {
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(t, e) {
        return c(i(t), e);
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        r = n(8),
        i = n(101),
        c = n(18),
        a = n(27),
        l = n(60);
    o({
      target: "Object",
      stat: !0,
      sham: !r
    }, {
      getOwnPropertyDescriptors: function getOwnPropertyDescriptors(t) {
        for (var e, n, o = c(t), r = a.f, u = i(o), s = {}, f = 0; u.length > f;) {
          void 0 !== (n = r(o, e = u[f++])) && l(s, e, n);
        }

        return s;
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(9);

    t.exports = function () {
      var t = o(this),
          e = "";
      return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(89),
        r = n(90),
        i = n(9),
        c = n(26),
        a = n(125),
        l = n(91),
        u = n(19),
        s = n(92),
        f = n(63),
        p = n(1),
        d = [].push,
        m = Math.min,
        v = !p(function () {
      return !RegExp(4294967295, "y");
    });
    o("split", 2, function (t, e, n) {
      var o;
      return o = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (t, n) {
        var o = String(c(this)),
            i = void 0 === n ? 4294967295 : n >>> 0;
        if (0 === i) return [];
        if (void 0 === t) return [o];
        if (!r(t)) return e.call(o, t, i);

        for (var a, l, u, s = [], p = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), m = 0, v = new RegExp(t.source, p + "g"); (a = f.call(v, o)) && !((l = v.lastIndex) > m && (s.push(o.slice(m, a.index)), a.length > 1 && a.index < o.length && d.apply(s, a.slice(1)), u = a[0].length, m = l, s.length >= i));) {
          v.lastIndex === a.index && v.lastIndex++;
        }

        return m === o.length ? !u && v.test("") || s.push("") : s.push(o.slice(m)), s.length > i ? s.slice(0, i) : s;
      } : "0".split(void 0, 0).length ? function (t, n) {
        return void 0 === t && 0 === n ? [] : e.call(this, t, n);
      } : e, [function (e, n) {
        var r = c(this),
            i = null == e ? void 0 : e[t];
        return void 0 !== i ? i.call(e, r, n) : o.call(String(r), e, n);
      }, function (t, r) {
        var c = n(o, t, this, r, o !== e);
        if (c.done) return c.value;
        var f = i(t),
            p = String(this),
            d = a(f, RegExp),
            h = f.unicode,
            y = (f.ignoreCase ? "i" : "") + (f.multiline ? "m" : "") + (f.unicode ? "u" : "") + (v ? "y" : "g"),
            b = new d(v ? f : "^(?:" + f.source + ")", y),
            g = void 0 === r ? 4294967295 : r >>> 0;
        if (0 === g) return [];
        if (0 === p.length) return null === s(b, p) ? [p] : [];

        for (var k = 0, _ = 0, x = []; _ < p.length;) {
          b.lastIndex = v ? _ : 0;
          var w,
              S = s(b, v ? p : p.slice(_));
          if (null === S || (w = m(u(b.lastIndex + (v ? 0 : _)), p.length)) === k) _ = l(p, _, h);else {
            if (x.push(p.slice(k, _)), x.length === g) return x;

            for (var O = 1; O <= S.length - 1; O++) {
              if (x.push(S[O]), x.length === g) return x;
            }

            _ = k = w;
          }
        }

        return x.push(p.slice(k)), x;
      }];
    }, !v);
  }, function (t, e, n) {
    "use strict";

    n(37);
    var o = n(22),
        r = n(1),
        i = n(3),
        c = n(63),
        a = n(21),
        l = i("species"),
        u = !r(function () {
      var t = /./;
      return t.exec = function () {
        var t = [];
        return t.groups = {
          a: "7"
        }, t;
      }, "7" !== "".replace(t, "$<a>");
    }),
        s = "$0" === "a".replace(/./, "$0"),
        f = i("replace"),
        p = !!/./[f] && "" === /./[f]("a", "$0"),
        d = !r(function () {
      var t = /(?:)/,
          e = t.exec;

      t.exec = function () {
        return e.apply(this, arguments);
      };

      var n = "ab".split(t);
      return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
    });

    t.exports = function (t, e, n, f) {
      var m = i(t),
          v = !r(function () {
        var e = {};
        return e[m] = function () {
          return 7;
        }, 7 != ""[t](e);
      }),
          h = v && !r(function () {
        var e = !1,
            n = /a/;
        return "split" === t && ((n = {}).constructor = {}, n.constructor[l] = function () {
          return n;
        }, n.flags = "", n[m] = /./[m]), n.exec = function () {
          return e = !0, null;
        }, n[m](""), !e;
      });

      if (!v || !h || "replace" === t && (!u || !s || p) || "split" === t && !d) {
        var y = /./[m],
            b = n(m, ""[t], function (t, e, n, o, r) {
          return e.exec === c ? v && !r ? {
            done: !0,
            value: y.call(e, n, o)
          } : {
            done: !0,
            value: t.call(n, e, o)
          } : {
            done: !1
          };
        }, {
          REPLACE_KEEPS_$0: s,
          REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: p
        }),
            g = b[0],
            k = b[1];
        o(String.prototype, t, g), o(RegExp.prototype, m, 2 == e ? function (t, e) {
          return k.call(t, this, e);
        } : function (t) {
          return k.call(t, this);
        });
      }

      f && a(RegExp.prototype[m], "sham", !0);
    };
  }, function (t, e, n) {
    var o = n(4),
        r = n(28),
        i = n(3)("match");

    t.exports = function (t) {
      var e;
      return o(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == r(t));
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(124).charAt;

    t.exports = function (t, e, n) {
      return e + (n ? o(t, e).length : 1);
    };
  }, function (t, e, n) {
    var o = n(28),
        r = n(63);

    t.exports = function (t, e) {
      var n = t.exec;

      if ("function" == typeof n) {
        var i = n.call(t, e);
        if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
        return i;
      }

      if ("RegExp" !== o(t)) throw TypeError("RegExp#exec called on incompatible receiver");
      return r.call(t, e);
    };
  }, function (t, e, n) {
    var o = n(2),
        r = n(126),
        i = n(110),
        c = n(21);

    for (var a in r) {
      var l = o[a],
          u = l && l.prototype;
      if (u && u.forEach !== i) try {
        c(u, "forEach", i);
      } catch (t) {
        u.forEach = i;
      }
    }
  }, function (t, e, n) {
    var o = n(90);

    t.exports = function (t) {
      if (o(t)) throw TypeError("The method doesn't accept regular expressions");
      return t;
    };
  }, function (t, e, n) {
    var o = n(3)("match");

    t.exports = function (t) {
      var e = /./;

      try {
        "/./"[t](e);
      } catch (n) {
        try {
          return e[o] = !1, "/./"[t](e);
        } catch (t) {}
      }

      return !1;
    };
  }, function (t, e, n) {
    var o = n(0),
        r = n(151).entries;
    o({
      target: "Object",
      stat: !0
    }, {
      entries: function entries(t) {
        return r(t);
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o,
        r = n(0),
        i = n(27).f,
        c = n(19),
        a = n(94),
        l = n(26),
        u = n(95),
        s = n(33),
        f = "".startsWith,
        p = Math.min,
        d = u("startsWith");
    r({
      target: "String",
      proto: !0,
      forced: !!(s || d || (o = i(String.prototype, "startsWith"), !o || o.writable)) && !d
    }, {
      startsWith: function startsWith(t) {
        var e = String(l(this));
        a(t);
        var n = c(p(arguments.length > 1 ? arguments[1] : void 0, e.length)),
            o = String(t);
        return f ? f.call(e, o, n) : e.slice(n, n + o.length) === o;
      }
    });
  }, function (t, e, n) {
    var o = n(8),
        r = n(1),
        i = n(65);
    t.exports = !o && !r(function () {
      return 7 != Object.defineProperty(i("div"), "a", {
        get: function get() {
          return 7;
        }
      }).a;
    });
  }, function (t, e, n) {
    var o = n(2),
        r = n(66),
        i = o["__core-js_shared__"] || r("__core-js_shared__", {});
    t.exports = i;
  }, function (t, e, n) {
    var o = n(15),
        r = n(101),
        i = n(27),
        c = n(16);

    t.exports = function (t, e) {
      for (var n = r(e), a = c.f, l = i.f, u = 0; u < n.length; u++) {
        var s = n[u];
        o(t, s) || a(t, s, l(e, s));
      }
    };
  }, function (t, e, n) {
    var o = n(34),
        r = n(55),
        i = n(71),
        c = n(9);

    t.exports = o("Reflect", "ownKeys") || function (t) {
      var e = r.f(c(t)),
          n = i.f;
      return n ? e.concat(n(t)) : e;
    };
  }, function (t, e, n) {
    var o = n(2);
    t.exports = o;
  }, function (t, e, n) {
    var o = n(15),
        r = n(18),
        i = n(69).indexOf,
        c = n(43);

    t.exports = function (t, e) {
      var n,
          a = r(t),
          l = 0,
          u = [];

      for (n in a) {
        !o(c, n) && o(a, n) && u.push(n);
      }

      for (; e.length > l;) {
        o(a, n = e[l++]) && (~i(u, n) || u.push(n));
      }

      return u;
    };
  }, function (t, e, n) {
    var o = n(56),
        r = Math.max,
        i = Math.min;

    t.exports = function (t, e) {
      var n = o(t);
      return n < 0 ? r(n + e, 0) : i(n, e);
    };
  }, function (t, e, n) {
    var o = n(72);
    t.exports = o && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  }, function (t, e, n) {
    var o = n(34);
    t.exports = o("document", "documentElement");
  }, function (t, e, n) {
    var o = n(3);
    e.f = o;
  }, function (t, e, n) {
    var o = n(102),
        r = n(15),
        i = n(107),
        c = n(16).f;

    t.exports = function (t) {
      var e = o.Symbol || (o.Symbol = {});
      r(e, t) || c(e, t, {
        value: i.f(t)
      });
    };
  }, function (t, e, n) {
    var o = n(4),
        r = n(58),
        i = n(3)("species");

    t.exports = function (t, e) {
      var n;
      return r(t) && ("function" != typeof (n = t.constructor) || n !== Array && !r(n.prototype) ? o(n) && null === (n = n[i]) && (n = void 0) : n = void 0), new (void 0 === n ? Array : n)(0 === e ? 0 : e);
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(59).forEach,
        r = n(62),
        i = n(41),
        c = r("forEach"),
        a = i("forEach");
    t.exports = c && a ? [].forEach : function (t) {
      return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
    };
  }, function (t, e, n) {
    var o = n(9);

    t.exports = function (t, e, n, r) {
      try {
        return r ? e(o(n)[0], n[1]) : e(n);
      } catch (e) {
        var i = t["return"];
        throw void 0 !== i && o(i.call(t)), e;
      }
    };
  }, function (t, e, n) {
    var o = n(3),
        r = n(48),
        i = o("iterator"),
        c = Array.prototype;

    t.exports = function (t) {
      return void 0 !== t && (r.Array === t || c[i] === t);
    };
  }, function (t, e, n) {
    var o = n(114),
        r = n(48),
        i = n(3)("iterator");

    t.exports = function (t) {
      if (null != t) return t[i] || t["@@iterator"] || r[o(t)];
    };
  }, function (t, e, n) {
    var o = n(76),
        r = n(28),
        i = n(3)("toStringTag"),
        c = "Arguments" == r(function () {
      return arguments;
    }());
    t.exports = o ? r : function (t) {
      var e, n, o;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
        try {
          return t[e];
        } catch (t) {}
      }(e = Object(t), i)) ? n : c ? r(e) : "Object" == (o = r(e)) && "function" == typeof e.callee ? "Arguments" : o;
    };
  }, function (t, e, n) {
    var o = n(3),
        r = n(44),
        i = n(16),
        c = o("unscopables"),
        a = Array.prototype;
    null == a[c] && i.f(a, c, {
      configurable: !0,
      value: r(null)
    }), t.exports = function (t) {
      a[c][t] = !0;
    };
  }, function (t, e, n) {
    "use strict";

    var o,
        r,
        i,
        c = n(79),
        a = n(21),
        l = n(15),
        u = n(3),
        s = n(33),
        f = u("iterator"),
        p = !1;
    [].keys && ("next" in (i = [].keys()) ? (r = c(c(i))) !== Object.prototype && (o = r) : p = !0), null == o && (o = {}), s || l(o, f) || a(o, f, function () {
      return this;
    }), t.exports = {
      IteratorPrototype: o,
      BUGGY_SAFARI_ITERATORS: p
    };
  }, function (t, e, n) {
    var o = n(1);
    t.exports = !o(function () {
      function t() {}

      return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        r = n(2),
        i = n(57),
        c = n(22),
        a = n(119),
        l = n(82),
        u = n(83),
        s = n(4),
        f = n(1),
        p = n(77),
        d = n(46),
        m = n(120);

    t.exports = function (t, e, n) {
      var v = -1 !== t.indexOf("Map"),
          h = -1 !== t.indexOf("Weak"),
          y = v ? "set" : "add",
          b = r[t],
          g = b && b.prototype,
          k = b,
          _ = {},
          x = function x(t) {
        var e = g[t];
        c(g, t, "add" == t ? function (t) {
          return e.call(this, 0 === t ? 0 : t), this;
        } : "delete" == t ? function (t) {
          return !(h && !s(t)) && e.call(this, 0 === t ? 0 : t);
        } : "get" == t ? function (t) {
          return h && !s(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
        } : "has" == t ? function (t) {
          return !(h && !s(t)) && e.call(this, 0 === t ? 0 : t);
        } : function (t, n) {
          return e.call(this, 0 === t ? 0 : t, n), this;
        });
      };

      if (i(t, "function" != typeof b || !(h || g.forEach && !f(function () {
        new b().entries().next();
      })))) k = n.getConstructor(e, t, v, y), a.REQUIRED = !0;else if (i(t, !0)) {
        var w = new k(),
            S = w[y](h ? {} : -0, 1) != w,
            O = f(function () {
          w.has(1);
        }),
            j = p(function (t) {
          new b(t);
        }),
            E = !h && f(function () {
          for (var t = new b(), e = 5; e--;) {
            t[y](e, e);
          }

          return !t.has(-0);
        });
        j || ((k = e(function (e, n) {
          u(e, k, t);
          var o = m(new b(), e, k);
          return null != n && l(n, o[y], o, v), o;
        })).prototype = g, g.constructor = k), (O || E) && (x("delete"), x("has"), v && x("get")), (E || S) && x(y), h && g.clear && delete g.clear;
      }
      return _[t] = k, o({
        global: !0,
        forced: k != b
      }, _), d(k, t), h || n.setStrong(k, t, v), k;
    };
  }, function (t, e, n) {
    var o = n(43),
        r = n(4),
        i = n(15),
        c = n(16).f,
        a = n(54),
        l = n(142),
        u = a("meta"),
        s = 0,
        f = Object.isExtensible || function () {
      return !0;
    },
        p = function p(t) {
      c(t, u, {
        value: {
          objectID: "O" + ++s,
          weakData: {}
        }
      });
    },
        d = t.exports = {
      REQUIRED: !1,
      fastKey: function fastKey(t, e) {
        if (!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;

        if (!i(t, u)) {
          if (!f(t)) return "F";
          if (!e) return "E";
          p(t);
        }

        return t[u].objectID;
      },
      getWeakData: function getWeakData(t, e) {
        if (!i(t, u)) {
          if (!f(t)) return !0;
          if (!e) return !1;
          p(t);
        }

        return t[u].weakData;
      },
      onFreeze: function onFreeze(t) {
        return l && d.REQUIRED && f(t) && !i(t, u) && p(t), t;
      }
    };

    o[u] = !0;
  }, function (t, e, n) {
    var o = n(4),
        r = n(80);

    t.exports = function (t, e, n) {
      var i, c;
      return r && "function" == typeof (i = e.constructor) && i !== n && o(c = i.prototype) && c !== n.prototype && r(t, c), t;
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(16).f,
        r = n(44),
        i = n(122),
        c = n(47),
        a = n(83),
        l = n(82),
        u = n(78),
        s = n(84),
        f = n(8),
        p = n(119).fastKey,
        d = n(32),
        m = d.set,
        v = d.getterFor;
    t.exports = {
      getConstructor: function getConstructor(t, e, n, u) {
        var s = t(function (t, o) {
          a(t, s, e), m(t, {
            type: e,
            index: r(null),
            first: void 0,
            last: void 0,
            size: 0
          }), f || (t.size = 0), null != o && l(o, t[u], t, n);
        }),
            d = v(e),
            h = function h(t, e, n) {
          var o,
              r,
              i = d(t),
              c = y(t, e);
          return c ? c.value = n : (i.last = c = {
            index: r = p(e, !0),
            key: e,
            value: n,
            previous: o = i.last,
            next: void 0,
            removed: !1
          }, i.first || (i.first = c), o && (o.next = c), f ? i.size++ : t.size++, "F" !== r && (i.index[r] = c)), t;
        },
            y = function y(t, e) {
          var n,
              o = d(t),
              r = p(e);
          if ("F" !== r) return o.index[r];

          for (n = o.first; n; n = n.next) {
            if (n.key == e) return n;
          }
        };

        return i(s.prototype, {
          clear: function clear() {
            for (var t = d(this), e = t.index, n = t.first; n;) {
              n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete e[n.index], n = n.next;
            }

            t.first = t.last = void 0, f ? t.size = 0 : this.size = 0;
          },
          "delete": function _delete(t) {
            var e = d(this),
                n = y(this, t);

            if (n) {
              var o = n.next,
                  r = n.previous;
              delete e.index[n.index], n.removed = !0, r && (r.next = o), o && (o.previous = r), e.first == n && (e.first = o), e.last == n && (e.last = r), f ? e.size-- : this.size--;
            }

            return !!n;
          },
          forEach: function forEach(t) {
            for (var e, n = d(this), o = c(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.next : n.first;) {
              for (o(e.value, e.key, this); e && e.removed;) {
                e = e.previous;
              }
            }
          },
          has: function has(t) {
            return !!y(this, t);
          }
        }), i(s.prototype, n ? {
          get: function get(t) {
            var e = y(this, t);
            return e && e.value;
          },
          set: function set(t, e) {
            return h(this, 0 === t ? 0 : t, e);
          }
        } : {
          add: function add(t) {
            return h(this, t = 0 === t ? 0 : t, t);
          }
        }), f && o(s.prototype, "size", {
          get: function get() {
            return d(this).size;
          }
        }), s;
      },
      setStrong: function setStrong(t, e, n) {
        var o = e + " Iterator",
            r = v(e),
            i = v(o);
        u(t, e, function (t, e) {
          m(this, {
            type: o,
            target: t,
            state: r(t),
            kind: e,
            last: void 0
          });
        }, function () {
          for (var t = i(this), e = t.kind, n = t.last; n && n.removed;) {
            n = n.previous;
          }

          return t.target && (t.last = n = n ? n.next : t.state.first) ? "keys" == e ? {
            value: n.key,
            done: !1
          } : "values" == e ? {
            value: n.value,
            done: !1
          } : {
            value: [n.key, n.value],
            done: !1
          } : (t.target = void 0, {
            value: void 0,
            done: !0
          });
        }, n ? "entries" : "values", !n, !0), s(e);
      }
    };
  }, function (t, e, n) {
    var o = n(22);

    t.exports = function (t, e, n) {
      for (var r in e) {
        o(t, r, e[r], n);
      }

      return t;
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(1);

    function r(t, e) {
      return RegExp(t, e);
    }

    e.UNSUPPORTED_Y = o(function () {
      var t = r("a", "y");
      return t.lastIndex = 2, null != t.exec("abcd");
    }), e.BROKEN_CARET = o(function () {
      var t = r("^r", "gy");
      return t.lastIndex = 2, null != t.exec("str");
    });
  }, function (t, e, n) {
    var o = n(56),
        r = n(26),
        i = function i(t) {
      return function (e, n) {
        var i,
            c,
            a = String(r(e)),
            l = o(n),
            u = a.length;
        return l < 0 || l >= u ? t ? "" : void 0 : (i = a.charCodeAt(l)) < 55296 || i > 56319 || l + 1 === u || (c = a.charCodeAt(l + 1)) < 56320 || c > 57343 ? t ? a.charAt(l) : i : t ? a.slice(l, l + 2) : c - 56320 + (i - 55296 << 10) + 65536;
      };
    };

    t.exports = {
      codeAt: i(!1),
      charAt: i(!0)
    };
  }, function (t, e, n) {
    var o = n(9),
        r = n(35),
        i = n(3)("species");

    t.exports = function (t, e) {
      var n,
          c = o(t).constructor;
      return void 0 === c || null == (n = o(c)[i]) ? e : r(n);
    };
  }, function (t, e) {
    t.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        r = n(69).indexOf,
        i = n(62),
        c = n(41),
        a = [].indexOf,
        l = !!a && 1 / [1].indexOf(1, -0) < 0,
        u = i("indexOf"),
        s = c("indexOf", {
      ACCESSORS: !0,
      1: 0
    });
    o({
      target: "Array",
      proto: !0,
      forced: l || !u || !s
    }, {
      indexOf: function indexOf(t) {
        return l ? a.apply(this, arguments) || 0 : r(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        r = n(35),
        i = n(23),
        c = n(1),
        a = n(62),
        l = [],
        u = l.sort,
        s = c(function () {
      l.sort(void 0);
    }),
        f = c(function () {
      l.sort(null);
    }),
        p = a("sort");
    o({
      target: "Array",
      proto: !0,
      forced: s || !f || !p
    }, {
      sort: function sort(t) {
        return void 0 === t ? u.call(i(this)) : u.call(i(this), r(t));
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(118),
        r = n(121);
    t.exports = o("Set", function (t) {
      return function () {
        return t(this, arguments.length ? arguments[0] : void 0);
      };
    }, r);
  }, function (t, e, n) {
    "use strict";

    var o = n(89),
        r = n(9),
        i = n(23),
        c = n(19),
        a = n(56),
        l = n(26),
        u = n(91),
        s = n(92),
        f = Math.max,
        p = Math.min,
        d = Math.floor,
        m = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        v = /\$([$&'`]|\d\d?)/g;
    o("replace", 2, function (t, e, n, o) {
      var h = o.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
          y = o.REPLACE_KEEPS_$0,
          b = h ? "$" : "$0";
      return [function (n, o) {
        var r = l(this),
            i = null == n ? void 0 : n[t];
        return void 0 !== i ? i.call(n, r, o) : e.call(String(r), n, o);
      }, function (t, o) {
        if (!h && y || "string" == typeof o && -1 === o.indexOf(b)) {
          var i = n(e, t, this, o);
          if (i.done) return i.value;
        }

        var l = r(t),
            d = String(this),
            m = "function" == typeof o;
        m || (o = String(o));
        var v = l.global;

        if (v) {
          var k = l.unicode;
          l.lastIndex = 0;
        }

        for (var _ = [];;) {
          var x = s(l, d);
          if (null === x) break;
          if (_.push(x), !v) break;
          "" === String(x[0]) && (l.lastIndex = u(d, c(l.lastIndex), k));
        }

        for (var w, S = "", O = 0, j = 0; j < _.length; j++) {
          x = _[j];

          for (var E = String(x[0]), A = f(p(a(x.index), d.length), 0), P = [], C = 1; C < x.length; C++) {
            P.push(void 0 === (w = x[C]) ? w : String(w));
          }

          var R = x.groups;

          if (m) {
            var T = [E].concat(P, A, d);
            void 0 !== R && T.push(R);
            var N = String(o.apply(void 0, T));
          } else N = g(E, d, A, P, R, o);

          A >= O && (S += d.slice(O, A) + N, O = A + E.length);
        }

        return S + d.slice(O);
      }];

      function g(t, n, o, r, c, a) {
        var l = o + t.length,
            u = r.length,
            s = v;
        return void 0 !== c && (c = i(c), s = m), e.call(a, s, function (e, i) {
          var a;

          switch (i.charAt(0)) {
            case "$":
              return "$";

            case "&":
              return t;

            case "`":
              return n.slice(0, o);

            case "'":
              return n.slice(l);

            case "<":
              a = c[i.slice(1, -1)];
              break;

            default:
              var s = +i;
              if (0 === s) return e;

              if (s > u) {
                var f = d(s / 10);
                return 0 === f ? e : f <= u ? void 0 === r[f - 1] ? i.charAt(1) : r[f - 1] + i.charAt(1) : e;
              }

              a = r[s - 1];
          }

          return void 0 === a ? "" : a;
        });
      }
    });
  }, function (t, e, n) {
    var o,
        r,
        i,
        c = n(2),
        a = n(1),
        l = n(28),
        u = n(47),
        s = n(106),
        f = n(65),
        p = n(132),
        d = c.location,
        m = c.setImmediate,
        v = c.clearImmediate,
        h = c.process,
        y = c.MessageChannel,
        b = c.Dispatch,
        g = 0,
        k = {},
        _ = function _(t) {
      if (k.hasOwnProperty(t)) {
        var e = k[t];
        delete k[t], e();
      }
    },
        x = function x(t) {
      return function () {
        _(t);
      };
    },
        w = function w(t) {
      _(t.data);
    },
        S = function S(t) {
      c.postMessage(t + "", d.protocol + "//" + d.host);
    };

    m && v || (m = function m(t) {
      for (var e = [], n = 1; arguments.length > n;) {
        e.push(arguments[n++]);
      }

      return k[++g] = function () {
        ("function" == typeof t ? t : Function(t)).apply(void 0, e);
      }, o(g), g;
    }, v = function v(t) {
      delete k[t];
    }, "process" == l(h) ? o = function o(t) {
      h.nextTick(x(t));
    } : b && b.now ? o = function o(t) {
      b.now(x(t));
    } : y && !p ? (i = (r = new y()).port2, r.port1.onmessage = w, o = u(i.postMessage, i, 1)) : !c.addEventListener || "function" != typeof postMessage || c.importScripts || a(S) || "file:" === d.protocol ? o = "onreadystatechange" in f("script") ? function (t) {
      s.appendChild(f("script")).onreadystatechange = function () {
        s.removeChild(this), _(t);
      };
    } : function (t) {
      setTimeout(x(t), 0);
    } : (o = S, c.addEventListener("message", w, !1))), t.exports = {
      set: m,
      clear: v
    };
  }, function (t, e, n) {
    var o = n(74);
    t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(o);
  }, function (t, e, n) {
    "use strict";

    var o = n(35),
        r = function r(t) {
      var e, n;
      this.promise = new t(function (t, o) {
        if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
        e = t, n = o;
      }), this.resolve = o(e), this.reject = o(n);
    };

    t.exports.f = function (t) {
      return new r(t);
    };
  }, function (t, e, n) {
    t.exports = n(146)();
  }, function (t, e) {
    var n;

    n = function () {
      return this;
    }();

    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (n = window);
    }

    t.exports = n;
  }, function (t, e, n) {
    var o = n(2),
        r = n(67),
        i = o.WeakMap;
    t.exports = "function" == typeof i && /native code/.test(r(i));
  }, function (t, e, n) {
    var o = n(8),
        r = n(16),
        i = n(9),
        c = n(45);
    t.exports = o ? Object.defineProperties : function (t, e) {
      i(t);

      for (var n, o = c(e), a = o.length, l = 0; a > l;) {
        r.f(t, n = o[l++], e[n]);
      }

      return t;
    };
  }, function (t, e, n) {
    var o = n(18),
        r = n(55).f,
        i = {}.toString,
        c = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

    t.exports.f = function (t) {
      return c && "[object Window]" == i.call(t) ? function (t) {
        try {
          return r(t);
        } catch (t) {
          return c.slice();
        }
      }(t) : r(o(t));
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(47),
        r = n(23),
        i = n(111),
        c = n(112),
        a = n(19),
        l = n(60),
        u = n(113);

    t.exports = function (t) {
      var e,
          n,
          s,
          f,
          p,
          d,
          m = r(t),
          v = "function" == typeof this ? this : Array,
          h = arguments.length,
          y = h > 1 ? arguments[1] : void 0,
          b = void 0 !== y,
          g = u(m),
          k = 0;
      if (b && (y = o(y, h > 2 ? arguments[2] : void 0, 2)), null == g || v == Array && c(g)) for (n = new v(e = a(m.length)); e > k; k++) {
        d = b ? y(m[k], k) : m[k], l(n, k, d);
      } else for (p = (f = g.call(m)).next, n = new v(); !(s = p.call(f)).done; k++) {
        d = b ? i(f, y, [s.value, k], !0) : s.value, l(n, k, d);
      }
      return n.length = k, n;
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(116).IteratorPrototype,
        r = n(44),
        i = n(42),
        c = n(46),
        a = n(48),
        l = function l() {
      return this;
    };

    t.exports = function (t, e, n) {
      var u = e + " Iterator";
      return t.prototype = r(o, {
        next: i(1, n)
      }), c(t, u, !1, !0), a[u] = l, t;
    };
  }, function (t, e, n) {
    var o = n(4);

    t.exports = function (t) {
      if (!o(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
      return t;
    };
  }, function (t, e, n) {
    var o = n(1);
    t.exports = !o(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(76),
        r = n(114);
    t.exports = o ? {}.toString : function () {
      return "[object " + r(this) + "]";
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(35),
        r = n(4),
        i = [].slice,
        c = {},
        a = function a(t, e, n) {
      if (!(e in c)) {
        for (var o = [], r = 0; r < e; r++) {
          o[r] = "a[" + r + "]";
        }

        c[e] = Function("C,a", "return new C(" + o.join(",") + ")");
      }

      return c[e](t, n);
    };

    t.exports = Function.bind || function (t) {
      var e = o(this),
          n = i.call(arguments, 1),
          c = function c() {
        var o = n.concat(i.call(arguments));
        return this instanceof c ? a(e, o.length, o) : e.apply(t, o);
      };

      return r(e.prototype) && (c.prototype = e.prototype), c;
    };
  }, function (t, e, n) {
    var o = n(0),
        r = n(2),
        i = n(74),
        c = [].slice,
        a = function a(t) {
      return function (e, n) {
        var o = arguments.length > 2,
            r = o ? c.call(arguments, 2) : void 0;
        return t(o ? function () {
          ("function" == typeof e ? e : Function(e)).apply(this, r);
        } : e, n);
      };
    };

    o({
      global: !0,
      bind: !0,
      forced: /MSIE .\./.test(i)
    }, {
      setTimeout: a(r.setTimeout),
      setInterval: a(r.setInterval)
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(147);

    function r() {}

    function i() {}

    i.resetWarningCache = r, t.exports = function () {
      function t(t, e, n, r, i, c) {
        if (c !== o) {
          var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw a.name = "Invariant Violation", a;
        }
      }

      function e() {
        return t;
      }

      t.isRequired = t;
      var n = {
        array: t,
        bool: t,
        func: t,
        number: t,
        object: t,
        string: t,
        symbol: t,
        any: t,
        arrayOf: e,
        element: t,
        elementType: t,
        instanceOf: e,
        node: t,
        objectOf: e,
        oneOf: e,
        oneOfType: e,
        shape: e,
        exact: e,
        checkPropTypes: i,
        resetWarningCache: r
      };
      return n.PropTypes = n, n;
    };
  }, function (t, e, n) {
    "use strict";

    t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  }, function (t, e, n) {
    "use strict";

    var o = n(8),
        r = n(1),
        i = n(45),
        c = n(71),
        a = n(50),
        l = n(23),
        u = n(51),
        s = Object.assign,
        f = Object.defineProperty;
    t.exports = !s || r(function () {
      if (o && 1 !== s({
        b: 1
      }, s(f({}, "a", {
        enumerable: !0,
        get: function get() {
          f(this, "b", {
            value: 3,
            enumerable: !1
          });
        }
      }), {
        b: 2
      })).b) return !0;
      var t = {},
          e = {},
          n = Symbol();
      return t[n] = 7, "abcdefghijklmnopqrst".split("").forEach(function (t) {
        e[t] = t;
      }), 7 != s({}, t)[n] || "abcdefghijklmnopqrst" != i(s({}, e)).join("");
    }) ? function (t, e) {
      for (var n = l(t), r = arguments.length, s = 1, f = c.f, p = a.f; r > s;) {
        for (var d, m = u(arguments[s++]), v = f ? i(m).concat(f(m)) : i(m), h = v.length, y = 0; h > y;) {
          d = v[y++], o && !p.call(m, d) || (n[d] = m[d]);
        }
      }

      return n;
    } : s;
  }, function (t, e, n) {
    "use strict";

    var o,
        r = n(0),
        i = n(27).f,
        c = n(19),
        a = n(94),
        l = n(26),
        u = n(95),
        s = n(33),
        f = "".endsWith,
        p = Math.min,
        d = u("endsWith");
    r({
      target: "String",
      proto: !0,
      forced: !!(s || d || (o = i(String.prototype, "endsWith"), !o || o.writable)) && !d
    }, {
      endsWith: function endsWith(t) {
        var e = String(l(this));
        a(t);
        var n = arguments.length > 1 ? arguments[1] : void 0,
            o = c(e.length),
            r = void 0 === n ? o : p(c(n), o),
            i = String(t);
        return f ? f.call(e, i, r) : e.slice(r - i.length, r) === i;
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(89),
        r = n(9),
        i = n(19),
        c = n(26),
        a = n(91),
        l = n(92);
    o("match", 1, function (t, e, n) {
      return [function (e) {
        var n = c(this),
            o = null == e ? void 0 : e[t];
        return void 0 !== o ? o.call(e, n) : new RegExp(e)[t](String(n));
      }, function (t) {
        var o = n(e, t, this);
        if (o.done) return o.value;
        var c = r(t),
            u = String(this);
        if (!c.global) return l(c, u);
        var s = c.unicode;
        c.lastIndex = 0;

        for (var f, p = [], d = 0; null !== (f = l(c, u));) {
          var m = String(f[0]);
          p[d] = m, "" === m && (c.lastIndex = a(u, i(c.lastIndex), s)), d++;
        }

        return 0 === d ? null : p;
      }];
    });
  }, function (t, e, n) {
    var o = n(8),
        r = n(45),
        i = n(18),
        c = n(50).f,
        a = function a(t) {
      return function (e) {
        for (var n, a = i(e), l = r(a), u = l.length, s = 0, f = []; u > s;) {
          n = l[s++], o && !c.call(a, n) || f.push(t ? [n, a[n]] : a[n]);
        }

        return f;
      };
    };

    t.exports = {
      entries: a(!0),
      values: a(!1)
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        r = n(69).includes,
        i = n(115);
    o({
      target: "Array",
      proto: !0,
      forced: !n(41)("indexOf", {
        ACCESSORS: !0,
        1: 0
      })
    }, {
      includes: function includes(t) {
        return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    }), i("includes");
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        r = n(94),
        i = n(26);
    o({
      target: "String",
      proto: !0,
      forced: !n(95)("includes")
    }, {
      includes: function includes(t) {
        return !!~String(i(this)).indexOf(r(t), arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o,
        r,
        i,
        c,
        a = n(0),
        l = n(33),
        u = n(2),
        s = n(34),
        f = n(155),
        p = n(22),
        d = n(122),
        m = n(46),
        v = n(84),
        h = n(4),
        y = n(35),
        b = n(83),
        g = n(28),
        k = n(67),
        _ = n(82),
        x = n(77),
        w = n(125),
        S = n(131).set,
        O = n(156),
        j = n(157),
        E = n(158),
        A = n(133),
        P = n(159),
        C = n(32),
        R = n(57),
        T = n(3),
        N = n(73),
        I = T("species"),
        D = "Promise",
        M = C.get,
        L = C.set,
        U = C.getterFor(D),
        _q = f,
        F = u.TypeError,
        W = u.document,
        z = u.process,
        H = s("fetch"),
        $ = A.f,
        B = $,
        G = "process" == g(z),
        V = !!(W && W.createEvent && u.dispatchEvent),
        K = R(D, function () {
      if (!(k(_q) !== String(_q))) {
        if (66 === N) return !0;
        if (!G && "function" != typeof PromiseRejectionEvent) return !0;
      }

      if (l && !_q.prototype["finally"]) return !0;
      if (N >= 51 && /native code/.test(_q)) return !1;

      var t = _q.resolve(1),
          e = function e(t) {
        t(function () {}, function () {});
      };

      return (t.constructor = {})[I] = e, !(t.then(function () {}) instanceof e);
    }),
        X = K || !x(function (t) {
      _q.all(t)["catch"](function () {});
    }),
        Y = function Y(t) {
      var e;
      return !(!h(t) || "function" != typeof (e = t.then)) && e;
    },
        J = function J(t, e, n) {
      if (!e.notified) {
        e.notified = !0;
        var o = e.reactions;
        O(function () {
          for (var r = e.value, i = 1 == e.state, c = 0; o.length > c;) {
            var a,
                l,
                u,
                s = o[c++],
                f = i ? s.ok : s.fail,
                p = s.resolve,
                d = s.reject,
                m = s.domain;

            try {
              f ? (i || (2 === e.rejection && et(t, e), e.rejection = 1), !0 === f ? a = r : (m && m.enter(), a = f(r), m && (m.exit(), u = !0)), a === s.promise ? d(F("Promise-chain cycle")) : (l = Y(a)) ? l.call(a, p, d) : p(a)) : d(r);
            } catch (t) {
              m && !u && m.exit(), d(t);
            }
          }

          e.reactions = [], e.notified = !1, n && !e.rejection && Z(t, e);
        });
      }
    },
        Q = function Q(t, e, n) {
      var o, r;
      V ? ((o = W.createEvent("Event")).promise = e, o.reason = n, o.initEvent(t, !1, !0), u.dispatchEvent(o)) : o = {
        promise: e,
        reason: n
      }, (r = u["on" + t]) ? r(o) : "unhandledrejection" === t && E("Unhandled promise rejection", n);
    },
        Z = function Z(t, e) {
      S.call(u, function () {
        var n,
            o = e.value;
        if (tt(e) && (n = P(function () {
          G ? z.emit("unhandledRejection", o, t) : Q("unhandledrejection", t, o);
        }), e.rejection = G || tt(e) ? 2 : 1, n.error)) throw n.value;
      });
    },
        tt = function tt(t) {
      return 1 !== t.rejection && !t.parent;
    },
        et = function et(t, e) {
      S.call(u, function () {
        G ? z.emit("rejectionHandled", t) : Q("rejectionhandled", t, e.value);
      });
    },
        nt = function nt(t, e, n, o) {
      return function (r) {
        t(e, n, r, o);
      };
    },
        ot = function ot(t, e, n, o) {
      e.done || (e.done = !0, o && (e = o), e.value = n, e.state = 2, J(t, e, !0));
    },
        rt = function rt(t, e, n, o) {
      if (!e.done) {
        e.done = !0, o && (e = o);

        try {
          if (t === n) throw F("Promise can't be resolved itself");
          var r = Y(n);
          r ? O(function () {
            var o = {
              done: !1
            };

            try {
              r.call(n, nt(rt, t, o, e), nt(ot, t, o, e));
            } catch (n) {
              ot(t, o, n, e);
            }
          }) : (e.value = n, e.state = 1, J(t, e, !1));
        } catch (n) {
          ot(t, {
            done: !1
          }, n, e);
        }
      }
    };

    K && (_q = function q(t) {
      b(this, _q, D), y(t), o.call(this);
      var e = M(this);

      try {
        t(nt(rt, this, e), nt(ot, this, e));
      } catch (t) {
        ot(this, e, t);
      }
    }, (o = function o(t) {
      L(this, {
        type: D,
        done: !1,
        notified: !1,
        parent: !1,
        reactions: [],
        rejection: !1,
        state: 0,
        value: void 0
      });
    }).prototype = d(_q.prototype, {
      then: function then(t, e) {
        var n = U(this),
            o = $(w(this, _q));
        return o.ok = "function" != typeof t || t, o.fail = "function" == typeof e && e, o.domain = G ? z.domain : void 0, n.parent = !0, n.reactions.push(o), 0 != n.state && J(this, n, !1), o.promise;
      },
      "catch": function _catch(t) {
        return this.then(void 0, t);
      }
    }), r = function r() {
      var t = new o(),
          e = M(t);
      this.promise = t, this.resolve = nt(rt, t, e), this.reject = nt(ot, t, e);
    }, A.f = $ = function $(t) {
      return t === _q || t === i ? new r(t) : B(t);
    }, l || "function" != typeof f || (c = f.prototype.then, p(f.prototype, "then", function (t, e) {
      var n = this;
      return new _q(function (t, e) {
        c.call(n, t, e);
      }).then(t, e);
    }, {
      unsafe: !0
    }), "function" == typeof H && a({
      global: !0,
      enumerable: !0,
      forced: !0
    }, {
      fetch: function fetch(t) {
        return j(_q, H.apply(u, arguments));
      }
    }))), a({
      global: !0,
      wrap: !0,
      forced: K
    }, {
      Promise: _q
    }), m(_q, D, !1, !0), v(D), i = s(D), a({
      target: D,
      stat: !0,
      forced: K
    }, {
      reject: function reject(t) {
        var e = $(this);
        return e.reject.call(void 0, t), e.promise;
      }
    }), a({
      target: D,
      stat: !0,
      forced: l || K
    }, {
      resolve: function resolve(t) {
        return j(l && this === i ? _q : this, t);
      }
    }), a({
      target: D,
      stat: !0,
      forced: X
    }, {
      all: function all(t) {
        var e = this,
            n = $(e),
            o = n.resolve,
            r = n.reject,
            i = P(function () {
          var n = y(e.resolve),
              i = [],
              c = 0,
              a = 1;
          _(t, function (t) {
            var l = c++,
                u = !1;
            i.push(void 0), a++, n.call(e, t).then(function (t) {
              u || (u = !0, i[l] = t, --a || o(i));
            }, r);
          }), --a || o(i);
        });
        return i.error && r(i.value), n.promise;
      },
      race: function race(t) {
        var e = this,
            n = $(e),
            o = n.reject,
            r = P(function () {
          var r = y(e.resolve);

          _(t, function (t) {
            r.call(e, t).then(n.resolve, o);
          });
        });
        return r.error && o(r.value), n.promise;
      }
    });
  }, function (t, e, n) {
    var o = n(2);
    t.exports = o.Promise;
  }, function (t, e, n) {
    var o,
        r,
        i,
        c,
        a,
        l,
        u,
        s,
        f = n(2),
        p = n(27).f,
        d = n(28),
        m = n(131).set,
        v = n(132),
        h = f.MutationObserver || f.WebKitMutationObserver,
        y = f.process,
        b = f.Promise,
        g = "process" == d(y),
        k = p(f, "queueMicrotask"),
        _ = k && k.value;

    _ || (o = function o() {
      var t, e;

      for (g && (t = y.domain) && t.exit(); r;) {
        e = r.fn, r = r.next;

        try {
          e();
        } catch (t) {
          throw r ? c() : i = void 0, t;
        }
      }

      i = void 0, t && t.enter();
    }, g ? c = function c() {
      y.nextTick(o);
    } : h && !v ? (a = !0, l = document.createTextNode(""), new h(o).observe(l, {
      characterData: !0
    }), c = function c() {
      l.data = a = !a;
    }) : b && b.resolve ? (u = b.resolve(void 0), s = u.then, c = function c() {
      s.call(u, o);
    }) : c = function c() {
      m.call(f, o);
    }), t.exports = _ || function (t) {
      var e = {
        fn: t,
        next: void 0
      };
      i && (i.next = e), r || (r = e, c()), i = e;
    };
  }, function (t, e, n) {
    var o = n(9),
        r = n(4),
        i = n(133);

    t.exports = function (t, e) {
      if (o(t), r(e) && e.constructor === t) return e;
      var n = i.f(t);
      return (0, n.resolve)(e), n.promise;
    };
  }, function (t, e, n) {
    var o = n(2);

    t.exports = function (t, e) {
      var n = o.console;
      n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e));
    };
  }, function (t, e) {
    t.exports = function (t) {
      try {
        return {
          error: !1,
          value: t()
        };
      } catch (t) {
        return {
          error: !0,
          value: t
        };
      }
    };
  }, function (t, e, n) {
    var o = n(161),
        r = n(162);
    "string" == typeof (r = r.__esModule ? r["default"] : r) && (r = [[t.i, r, ""]]);
    var i = {
      attributes: {
        "data-context": "klaro-styles"
      },
      insert: "head",
      singleton: !1
    };
    o(r, i);
    t.exports = r.locals || {};
  }, function (t, e, n) {
    "use strict";

    var o,
        r = function r() {
      return void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o;
    },
        i = function () {
      var t = {};
      return function (e) {
        if (void 0 === t[e]) {
          var n = document.querySelector(e);
          if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
            n = n.contentDocument.head;
          } catch (t) {
            n = null;
          }
          t[e] = n;
        }

        return t[e];
      };
    }(),
        c = [];

    function a(t) {
      for (var e = -1, n = 0; n < c.length; n++) {
        if (c[n].identifier === t) {
          e = n;
          break;
        }
      }

      return e;
    }

    function l(t, e) {
      for (var n = {}, o = [], r = 0; r < t.length; r++) {
        var i = t[r],
            l = e.base ? i[0] + e.base : i[0],
            u = n[l] || 0,
            s = "".concat(l, " ").concat(u);
        n[l] = u + 1;
        var f = a(s),
            p = {
          css: i[1],
          media: i[2],
          sourceMap: i[3]
        };
        -1 !== f ? (c[f].references++, c[f].updater(p)) : c.push({
          identifier: s,
          updater: h(p, e),
          references: 1
        }), o.push(s);
      }

      return o;
    }

    function u(t) {
      var e = document.createElement("style"),
          o = t.attributes || {};

      if (void 0 === o.nonce) {
        var r = n.nc;
        r && (o.nonce = r);
      }

      if (Object.keys(o).forEach(function (t) {
        e.setAttribute(t, o[t]);
      }), "function" == typeof t.insert) t.insert(e);else {
        var c = i(t.insert || "head");
        if (!c) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        c.appendChild(e);
      }
      return e;
    }

    var s,
        f = (s = [], function (t, e) {
      return s[t] = e, s.filter(Boolean).join("\n");
    });

    function p(t, e, n, o) {
      var r = n ? "" : o.media ? "@media ".concat(o.media, " {").concat(o.css, "}") : o.css;
      if (t.styleSheet) t.styleSheet.cssText = f(e, r);else {
        var i = document.createTextNode(r),
            c = t.childNodes;
        c[e] && t.removeChild(c[e]), c.length ? t.insertBefore(i, c[e]) : t.appendChild(i);
      }
    }

    function d(t, e, n) {
      var o = n.css,
          r = n.media,
          i = n.sourceMap;
      if (r ? t.setAttribute("media", r) : t.removeAttribute("media"), i && btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), t.styleSheet) t.styleSheet.cssText = o;else {
        for (; t.firstChild;) {
          t.removeChild(t.firstChild);
        }

        t.appendChild(document.createTextNode(o));
      }
    }

    var m = null,
        v = 0;

    function h(t, e) {
      var n, o, r;

      if (e.singleton) {
        var i = v++;
        n = m || (m = u(e)), o = p.bind(null, n, i, !1), r = p.bind(null, n, i, !0);
      } else n = u(e), o = d.bind(null, n, e), r = function r() {
        !function (t) {
          if (null === t.parentNode) return !1;
          t.parentNode.removeChild(t);
        }(n);
      };

      return o(t), function (e) {
        if (e) {
          if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
          o(t = e);
        } else r();
      };
    }

    t.exports = function (t, e) {
      (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = r());
      var n = l(t = t || [], e);
      return function (t) {
        if (t = t || [], "[object Array]" === Object.prototype.toString.call(t)) {
          for (var o = 0; o < n.length; o++) {
            var r = a(n[o]);
            c[r].references--;
          }

          for (var i = l(t, e), u = 0; u < n.length; u++) {
            var s = a(n[u]);
            0 === c[s].references && (c[s].updater(), c.splice(s, 1));
          }

          n = i;
        }
      };
    };
  }, function (t, e, n) {
    (e = n(163)(!1)).push([t.i, ".klaro{font-family:inherit;font-family:var(--font-family, inherit);font-size:14px;font-size:var(--font-size, 14px)}.klaro button{font-family:inherit;font-family:var(--font-family, inherit);font-size:14px;font-size:var(--font-size, 14px)}.klaro.cm-as-context-notice{height:100%;padding-bottom:12px;padding-top:12px}.klaro .cookie-modal .cm-switch-container,.klaro .context-notice .cm-switch-container,.klaro .cookie-notice .cm-switch-container{border-bottom-style:solid;border-bottom-style:var(--border-style, solid);border-bottom-width:1px;border-bottom-width:var(--border-width, 1px);border-bottom-color:#bebebe;border-bottom-color:var(--light2, #bebebe);display:block;position:relative;padding:10px;padding-left:66px;line-height:20px;vertical-align:middle;min-height:40px}.klaro .cookie-modal .cm-switch-container:last-child,.klaro .context-notice .cm-switch-container:last-child,.klaro .cookie-notice .cm-switch-container:last-child{border-bottom:0}.klaro .cookie-modal .cm-switch-container:first-child,.klaro .context-notice .cm-switch-container:first-child,.klaro .cookie-notice .cm-switch-container:first-child{margin-top:0}.klaro .cookie-modal .cm-switch-container p,.klaro .context-notice .cm-switch-container p,.klaro .cookie-notice .cm-switch-container p{margin-top:0}.klaro .cookie-modal .cm-switch,.klaro .context-notice .cm-switch,.klaro .cookie-notice .cm-switch{position:relative;display:inline-block;width:50px;height:30px}.klaro .cookie-modal .cm-list-input:checked+.cm-list-label .slider,.klaro .context-notice .cm-list-input:checked+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input:checked+.cm-list-label .slider{background-color:#1a936f;background-color:var(--green1, #1a936f)}.klaro .cookie-modal .cm-list-input.half-checked:checked+.cm-list-label .slider,.klaro .context-notice .cm-list-input.half-checked:checked+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input.half-checked:checked+.cm-list-label .slider{background-color:#1a936f;background-color:var(--green1, #1a936f);opacity:0.6}.klaro .cookie-modal .cm-list-input.half-checked:checked+.cm-list-label .slider::before,.klaro .context-notice .cm-list-input.half-checked:checked+.cm-list-label .slider::before,.klaro .cookie-notice .cm-list-input.half-checked:checked+.cm-list-label .slider::before{-ms-transform:translateX(10px);transform:translateX(10px)}.klaro .cookie-modal .cm-list-input.only-required+.cm-list-label .slider,.klaro .context-notice .cm-list-input.only-required+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input.only-required+.cm-list-label .slider{background-color:#24cc9a;background-color:var(--green2, #24cc9a);opacity:0.8}.klaro .cookie-modal .cm-list-input.only-required+.cm-list-label .slider::before,.klaro .context-notice .cm-list-input.only-required+.cm-list-label .slider::before,.klaro .cookie-notice .cm-list-input.only-required+.cm-list-label .slider::before{-ms-transform:translateX(10px);transform:translateX(10px)}.klaro .cookie-modal .cm-list-input.required:checked+.cm-list-label .slider,.klaro .context-notice .cm-list-input.required:checked+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input.required:checked+.cm-list-label .slider{background-color:#24cc9a;background-color:var(--green2, #24cc9a);opacity:0.8;cursor:not-allowed}.klaro .cookie-modal .slider,.klaro .context-notice .slider,.klaro .cookie-notice .slider{box-shadow:0 4px 6px 0 rgba(0,0,0,0.2),5px 5px 10px 0 rgba(0,0,0,0.19)}.klaro .cookie-modal .cm-list-input,.klaro .context-notice .cm-list-input,.klaro .cookie-notice .cm-list-input{position:absolute;top:0;left:0;opacity:0;width:50px;height:30px}.klaro .cookie-modal .cm-list-title,.klaro .context-notice .cm-list-title,.klaro .cookie-notice .cm-list-title{font-size:0.9em;font-weight:600}.klaro .cookie-modal .cm-list-description,.klaro .context-notice .cm-list-description,.klaro .cookie-notice .cm-list-description{color:#7c7c7c;color:var(--dark3, #7c7c7c);font-size:0.9em;padding-top:4px}.klaro .cookie-modal .cm-list-label .cm-switch,.klaro .context-notice .cm-list-label .cm-switch,.klaro .cookie-notice .cm-list-label .cm-switch{position:absolute;left:0}.klaro .cookie-modal .cm-list-label .slider,.klaro .context-notice .cm-list-label .slider,.klaro .cookie-notice .cm-list-label .slider{background-color:#eee;background-color:var(--white2, #eee);position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;transition:0.4s;width:50px;display:inline-block}.klaro .cookie-modal .cm-list-label .slider::before,.klaro .context-notice .cm-list-label .slider::before,.klaro .cookie-notice .cm-list-label .slider::before{background-color:#ddd;background-color:var(--white3, #ddd);position:absolute;content:'';height:20px;width:20px;left:5px;bottom:5px;transition:0.4s}.klaro .cookie-modal .cm-list-label .slider.round,.klaro .context-notice .cm-list-label .slider.round,.klaro .cookie-notice .cm-list-label .slider.round{border-radius:30px}.klaro .cookie-modal .cm-list-label .slider.round::before,.klaro .context-notice .cm-list-label .slider.round::before,.klaro .cookie-notice .cm-list-label .slider.round::before{border-radius:50%}.klaro .cookie-modal .cm-list-label input:focus+.slider,.klaro .context-notice .cm-list-label input:focus+.slider,.klaro .cookie-notice .cm-list-label input:focus+.slider{box-shadow-color:#48dfb2;box-shadow-color:var(--green3, #48dfb2);box-shadow:0 0 1px var(color, green3)}.klaro .cookie-modal .cm-list-label input:checked+.slider::before,.klaro .context-notice .cm-list-label input:checked+.slider::before,.klaro .cookie-notice .cm-list-label input:checked+.slider::before{-ms-transform:translateX(20px);transform:translateX(20px)}.klaro .cookie-modal .cm-list-input:focus+.cm-list-label .slider,.klaro .context-notice .cm-list-input:focus+.cm-list-label .slider,.klaro .cookie-notice .cm-list-input:focus+.cm-list-label .slider{box-shadow:0 4px 6px 0 rgba(125,125,125,0.2),5px 5px 10px 0 rgba(125,125,125,0.19)}.klaro .cookie-modal .cm-list-input:checked+.cm-list-label .slider::before,.klaro .context-notice .cm-list-input:checked+.cm-list-label .slider::before,.klaro .cookie-notice .cm-list-input:checked+.cm-list-label .slider::before{-ms-transform:translateX(20px);transform:translateX(20px)}.klaro .cookie-modal .slider,.klaro .context-notice .slider,.klaro .cookie-notice .slider{box-shadow:0 4px 6px 0 rgba(0,0,0,0.2),5px 5px 10px 0 rgba(0,0,0,0.19)}.klaro .cookie-modal a,.klaro .context-notice a,.klaro .cookie-notice a{color:#1a936f;color:var(--green1, #1a936f);text-decoration:none}.klaro .cookie-modal p,.klaro .cookie-modal strong,.klaro .cookie-modal h1,.klaro .cookie-modal h2,.klaro .cookie-modal ul,.klaro .cookie-modal li,.klaro .context-notice p,.klaro .context-notice strong,.klaro .context-notice h1,.klaro .context-notice h2,.klaro .context-notice ul,.klaro .context-notice li,.klaro .cookie-notice p,.klaro .cookie-notice strong,.klaro .cookie-notice h1,.klaro .cookie-notice h2,.klaro .cookie-notice ul,.klaro .cookie-notice li{color:#eee;color:var(--light1, #eee)}.klaro .cookie-modal p,.klaro .cookie-modal h1,.klaro .cookie-modal h2,.klaro .cookie-modal ul,.klaro .cookie-modal li,.klaro .context-notice p,.klaro .context-notice h1,.klaro .context-notice h2,.klaro .context-notice ul,.klaro .context-notice li,.klaro .cookie-notice p,.klaro .cookie-notice h1,.klaro .cookie-notice h2,.klaro .cookie-notice ul,.klaro .cookie-notice li{display:block;text-align:left;margin:0;padding:0;margin-top:0.7em}.klaro .cookie-modal h1,.klaro .cookie-modal h2,.klaro .cookie-modal h3,.klaro .cookie-modal h4,.klaro .cookie-modal h5,.klaro .cookie-modal h6,.klaro .context-notice h1,.klaro .context-notice h2,.klaro .context-notice h3,.klaro .context-notice h4,.klaro .context-notice h5,.klaro .context-notice h6,.klaro .cookie-notice h1,.klaro .cookie-notice h2,.klaro .cookie-notice h3,.klaro .cookie-notice h4,.klaro .cookie-notice h5,.klaro .cookie-notice h6{font-family:inherit;font-family:var(--title-font-family, inherit)}.klaro .cookie-modal .cm-link,.klaro .context-notice .cm-link,.klaro .cookie-notice .cm-link{margin-right:0.5em;vertical-align:middle}.klaro .cookie-modal .cm-btn,.klaro .context-notice .cm-btn,.klaro .cookie-notice .cm-btn{color:#fff;color:var(--button-text-color, #fff);background-color:#5c5c5c;background-color:var(--dark2, #5c5c5c);border-radius:4px;border-radius:var(--border-radius, 4px);padding:6px 10px;margin-right:.5em;border-style:none;padding:0.4em;font-size:1em;cursor:pointer}.klaro .cookie-modal .cm-btn:disabled,.klaro .context-notice .cm-btn:disabled,.klaro .cookie-notice .cm-btn:disabled{opacity:0.5}.klaro .cookie-modal .cm-btn.cm-btn-close,.klaro .context-notice .cm-btn.cm-btn-close,.klaro .cookie-notice .cm-btn.cm-btn-close{background-color:#bebebe;background-color:var(--light2, #bebebe)}.klaro .cookie-modal .cm-btn.cm-btn-success,.klaro .context-notice .cm-btn.cm-btn-success,.klaro .cookie-notice .cm-btn.cm-btn-success{background-color:#1a936f;background-color:var(--green1, #1a936f)}.klaro .cookie-modal .cm-btn.cm-btn-success-var,.klaro .context-notice .cm-btn.cm-btn-success-var,.klaro .cookie-notice .cm-btn.cm-btn-success-var{background-color:#24cc9a;background-color:var(--green2, #24cc9a)}.klaro .cookie-modal .cm-btn.cm-btn-info,.klaro .context-notice .cm-btn.cm-btn-info,.klaro .cookie-notice .cm-btn.cm-btn-info{background-color:#2581c4;background-color:var(--blue1, #2581c4)}.klaro .context-notice{border-radius:4px;border-radius:var(--border-radius, 4px);border-style:solid;border-style:var(--border-style, solid);border-width:1px;border-width:var(--border-width, 1px);border-color:#bebebe;border-color:var(--light2, #bebebe);background-color:#eee;background-color:var(--light1, #eee);display:flex;flex-direction:column;flex-wrap:wrap;align-items:center;justify-content:center;padding:12px;height:100%}.klaro .context-notice.cm-dark{background-color:#333;background-color:var(--dark1, #333);border-color:#5c5c5c;border-color:var(--dark2, #5c5c5c)}.klaro .context-notice.cm-dark p{color:#eee;color:var(--light1, #eee)}.klaro .context-notice.cm-dark p a{color:#459cdc;color:var(--blue2, #459cdc)}.klaro .context-notice p{color:#333;color:var(--dark1, #333);flex-grow:0;text-align:center;padding-top:0;margin-top:0}.klaro .context-notice p a{color:#24cc9a;color:var(--green2, #24cc9a)}.klaro .context-notice p.cm-buttons{margin-top:12px}.klaro .cookie-modal{width:100%;height:100%;position:fixed;overflow:hidden;left:0;top:0;z-index:1000}.klaro .cookie-modal.cm-embedded{position:relative;height:inherit;width:inherit;left:inherit;right:inherit;z-index:0}.klaro .cookie-modal.cm-embedded .cm-modal.cm-klaro{position:relative;-ms-transform:none;transform:none}.klaro .cookie-modal .cm-bg{background:rgba(0,0,0,0.5);height:100%;width:100%;position:fixed;top:0;left:0}.klaro .cookie-modal .cm-modal.cm-klaro{background-color:#333;background-color:var(--dark1, #333);color:#eee;color:var(--light1, #eee);z-index:1001;box-shadow:0 4px 6px 0 rgba(0,0,0,0.2),5px 5px 10px 0 rgba(0,0,0,0.19);width:100%;max-height:98%;top:50%;-ms-transform:translateY(-50%);transform:translateY(-50%);position:fixed;overflow:auto}@media (min-width: 660px){.klaro .cookie-modal .cm-modal.cm-klaro{border-radius:4px;border-radius:var(--border-radius, 4px);position:relative;margin:0 auto;max-width:640px;height:auto;width:auto}}.klaro .cookie-modal .cm-modal .hide{border-style:none;background:none;cursor:pointer;position:absolute;top:20px;right:20px;z-index:1}.klaro .cookie-modal .cm-modal .hide svg{stroke:#eee;stroke:var(--light1, #eee)}.klaro .cookie-modal .cm-modal .cm-footer{border-top-color:#5c5c5c;border-top-color:var(--dark2, #5c5c5c);border-top-width:1px;border-top-width:var(--border-width, 1px);border-top-style:solid;border-top-style:var(--border-style, solid);padding:1em}.klaro .cookie-modal .cm-modal .cm-footer-buttons{display:flex;flex-flow:row;justify-content:space-between}.klaro .cookie-modal .cm-modal .cm-footer .cm-powered-by{font-size:0.8em;padding-top:4px;text-align:right;padding-right:8px}.klaro .cookie-modal .cm-modal .cm-footer .cm-powered-by a{color:#5c5c5c;color:var(--dark2, #5c5c5c)}.klaro .cookie-modal .cm-modal .cm-header{border-bottom-width:1px;border-bottom-width:var(--border-width, 1px);border-bottom-style:solid;border-bottom-style:var(--border-style, solid);border-bottom-color:#5c5c5c;border-bottom-color:var(--dark2, #5c5c5c);padding:1em;padding-right:24px}.klaro .cookie-modal .cm-modal .cm-header h1{margin:0;font-size:2em;display:block}.klaro .cookie-modal .cm-modal .cm-header h1.title{padding-right:20px}.klaro .cookie-modal .cm-modal .cm-body{padding:1em}.klaro .cookie-modal .cm-modal .cm-body ul{display:block}.klaro .cookie-modal .cm-modal .cm-body span{display:inline-block;width:auto}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes{padding:0;margin:0}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose .cm-services .cm-caret,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose .cm-services .cm-caret{color:#989898;color:var(--light3, #989898)}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose .cm-services .cm-content,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose .cm-services .cm-content{margin-left:-40px;display:none}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose .cm-services .cm-content.expanded,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose .cm-services .cm-content.expanded{margin-top:10px;display:block}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose{position:relative;line-height:20px;vertical-align:middle;padding-left:60px;min-height:40px}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service:first-child,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose:first-child,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service:first-child,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose:first-child{margin-top:0}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service p,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose p,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service p,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose p{margin-top:0}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service p.purposes,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose p.purposes,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service p.purposes,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose p.purposes{color:#989898;color:var(--light3, #989898);font-size:0.8em}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service.cm-toggle-all,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose.cm-toggle-all,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service.cm-toggle-all,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose.cm-toggle-all{border-top-width:1px;border-top-width:var(--border-width, 1px);border-top-style:solid;border-top-style:var(--border-style, solid);border-top-color:#5c5c5c;border-top-color:var(--dark2, #5c5c5c);padding-top:1em}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service span.cm-list-title,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose span.cm-list-title,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service span.cm-list-title,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose span.cm-list-title{font-weight:600}.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service span.cm-opt-out,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-service span.cm-required,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose span.cm-opt-out,.klaro .cookie-modal .cm-modal .cm-body ul.cm-services li.cm-purpose span.cm-required,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service span.cm-opt-out,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-service span.cm-required,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose span.cm-opt-out,.klaro .cookie-modal .cm-modal .cm-body ul.cm-purposes li.cm-purpose span.cm-required{color:#5c5c5c;color:var(--dark2, #5c5c5c);padding-left:0.2em;font-size:0.8em}.klaro .cookie-notice:not(.cookie-modal-notice){background-color:#333;background-color:var(--dark1, #333);z-index:999;position:fixed;width:100%;bottom:0;right:0}@media (min-width: 1024px){.klaro .cookie-notice:not(.cookie-modal-notice){border-radius:4px;border-radius:var(--border-radius, 4px);position:fixed;position:var(--notice-position, fixed);right:20px;right:var(--notice-right, 20px);left:auto;left:var(--notice-left, auto);bottom:20px;bottom:var(--notice-bottom, 20px);top:auto;top:var(--notice-top, auto);max-width:400px;max-width:var(--notice-max-width, 400px);box-shadow:0 4px 6px 0 rgba(0,0,0,0.2),5px 5px 10px 0 rgba(0,0,0,0.19)}}@media (max-width: 1023px){.klaro .cookie-notice:not(.cookie-modal-notice){border-style:none;border-radius:0}}.klaro .cookie-notice:not(.cookie-modal-notice).cn-embedded{position:relative;height:inherit;width:inherit;left:inherit;right:inherit;bottom:inherit;z-index:0}.klaro .cookie-notice:not(.cookie-modal-notice).cn-embedded .cn-body{padding-top:0.5em}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body{margin-bottom:0;margin-right:0;bottom:0;padding:1em;padding-top:0}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body p{margin-bottom:0.5em}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body p.cn-changes{text-decoration:underline}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-learn-more{display:inline-block;flex-grow:1}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-buttons{display:inline-block;margin-top:-0.5em}@media (max-width: 384px){.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-buttons{width:100%}}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-buttons button.cm-btn{margin-top:0.5em}@media (max-width: 384px){.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-buttons button.cm-btn{width:calc(50% - .5em)}}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-ok{margin-top:-0.5em;display:flex;flex-flow:row;flex-wrap:wrap;justify-content:right;align-items:baseline}.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-ok a,.klaro .cookie-notice:not(.cookie-modal-notice) .cn-body .cn-ok div{margin-top:0.5em}.klaro .cookie-modal-notice{background-color:#333;background-color:var(--dark1, #333);color:#eee;color:var(--light1, #eee);z-index:1001;box-shadow:0 4px 6px 0 rgba(0,0,0,0.2),5px 5px 10px 0 rgba(0,0,0,0.19);width:100%;max-height:98%;top:50%;-ms-transform:translateY(-50%);transform:translateY(-50%);position:fixed;overflow:auto;padding:1em;padding-top:0.2em}@media (min-width: 400px){.klaro .cookie-modal-notice{border-radius:4px;border-radius:var(--border-radius, 4px);position:relative;margin:0 auto;max-width:400px;height:auto;width:auto}}.klaro .cookie-modal-notice .cn-ok{display:flex;flex-flow:row;justify-content:space-between;align-items:center;margin-top:1em}.klaro .cookie-notice-hidden{display:none !important}\n", ""]), t.exports = e;
  }, function (t, e, n) {
    "use strict";

    t.exports = function (t) {
      var e = [];
      return e.toString = function () {
        return this.map(function (e) {
          var n = function (t, e) {
            var n = t[1] || "",
                o = t[3];
            if (!o) return n;

            if (e && "function" == typeof btoa) {
              var r = (c = o, a = btoa(unescape(encodeURIComponent(JSON.stringify(c)))), l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a), "/*# ".concat(l, " */")),
                  i = o.sources.map(function (t) {
                return "/*# sourceURL=".concat(o.sourceRoot || "").concat(t, " */");
              });
              return [n].concat(i).concat([r]).join("\n");
            }

            var c, a, l;
            return [n].join("\n");
          }(e, t);

          return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n;
        }).join("");
      }, e.i = function (t, n, o) {
        "string" == typeof t && (t = [[null, t, ""]]);
        var r = {};
        if (o) for (var i = 0; i < this.length; i++) {
          var c = this[i][0];
          null != c && (r[c] = !0);
        }

        for (var a = 0; a < t.length; a++) {
          var l = [].concat(t[a]);
          o && r[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n), e.push(l));
        }
      }, e;
    };
  }, function (t, e, n) {
    "use strict";

    n.r(e), n.d(e, "updateConfig", function () {
      return xe;
    }), n.d(e, "getElementID", function () {
      return Kn;
    }), n.d(e, "getElement", function () {
      return Xn;
    }), n.d(e, "addEventListener", function () {
      return Yn;
    }), n.d(e, "getConfigTranslations", function () {
      return Qn;
    }), n.d(e, "render", function () {
      return to;
    }), n.d(e, "renderContextualConsentNotices", function () {
      return eo;
    }), n.d(e, "validateConfig", function () {
      return oo;
    }), n.d(e, "setup", function () {
      return ro;
    }), n.d(e, "show", function () {
      return io;
    }), n.d(e, "resetManagers", function () {
      return ao;
    }), n.d(e, "getManager", function () {
      return lo;
    }), n.d(e, "version", function () {
      return uo;
    }), n.d(e, "language", function () {
      return Et;
    }), n.d(e, "defaultConfig", function () {
      return Mn;
    }), n.d(e, "defaultTranslations", function () {
      return Bn;
    });
    n(5), n(10), n(11), n(39), n(40), n(75), n(24), n(6), n(25), n(20), n(17), n(81), n(85), n(86), n(36), n(7), n(37), n(12), n(13), n(88), n(93), n(14);
    var o,
        r,
        i,
        c,
        a,
        l = {},
        u = [],
        s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

    function f(t, e) {
      for (var n in e) {
        t[n] = e[n];
      }

      return t;
    }

    function p(t) {
      var e = t.parentNode;
      e && e.removeChild(t);
    }

    function d(t, e, n) {
      var o,
          r = arguments,
          i = {};

      for (o in e) {
        "key" !== o && "ref" !== o && (i[o] = e[o]);
      }

      if (arguments.length > 3) for (n = [n], o = 3; o < arguments.length; o++) {
        n.push(r[o]);
      }
      if (null != n && (i.children = n), "function" == typeof t && null != t.defaultProps) for (o in t.defaultProps) {
        void 0 === i[o] && (i[o] = t.defaultProps[o]);
      }
      return m(t, i, e && e.key, e && e.ref, null);
    }

    function m(t, e, n, r, i) {
      var c = {
        type: t,
        props: e,
        key: n,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: i
      };
      return null == i && (c.__v = c), o.vnode && o.vnode(c), c;
    }

    function v(t) {
      return t.children;
    }

    function h(t, e) {
      this.props = t, this.context = e;
    }

    function y(t, e) {
      if (null == e) return t.__ ? y(t.__, t.__.__k.indexOf(t) + 1) : null;

      for (var n; e < t.__k.length; e++) {
        if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
      }

      return "function" == typeof t.type ? y(t) : null;
    }

    function b(t) {
      var e, n;

      if (null != (t = t.__) && null != t.__c) {
        for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) {
          if (null != (n = t.__k[e]) && null != n.__e) {
            t.__e = t.__c.base = n.__e;
            break;
          }
        }

        return b(t);
      }
    }

    function g(t) {
      (!t.__d && (t.__d = !0) && r.push(t) && !k.__r++ || c !== o.debounceRendering) && ((c = o.debounceRendering) || i)(k);
    }

    function k() {
      for (var t; k.__r = r.length;) {
        t = r.sort(function (t, e) {
          return t.__v.__b - e.__v.__b;
        }), r = [], t.some(function (t) {
          var e, n, o, r, i, c, a;
          t.__d && (c = (i = (e = t).__v).__e, (a = e.__P) && (n = [], (o = f({}, i)).__v = o, r = A(a, i, o, e.__n, void 0 !== a.ownerSVGElement, null, n, null == c ? y(i) : c), P(n, i), r != c && b(i)));
        });
      }
    }

    function _(t, e, n, o, r, i, c, a, s, f) {
      var d,
          h,
          b,
          g,
          k,
          _,
          x,
          S = o && o.__k || u,
          O = S.length;

      for (s == l && (s = null != c ? c[0] : O ? y(o, 0) : null), n.__k = [], d = 0; d < e.length; d++) {
        if (null != (g = n.__k[d] = null == (g = e[d]) || "boolean" == typeof g ? null : "string" == typeof g || "number" == typeof g ? m(null, g, null, null, g) : Array.isArray(g) ? m(v, {
          children: g
        }, null, null, null) : null != g.__e || null != g.__c ? m(g.type, g.props, g.key, null, g.__v) : g)) {
          if (g.__ = n, g.__b = n.__b + 1, null === (b = S[d]) || b && g.key == b.key && g.type === b.type) S[d] = void 0;else for (h = 0; h < O; h++) {
            if ((b = S[h]) && g.key == b.key && g.type === b.type) {
              S[h] = void 0;
              break;
            }

            b = null;
          }
          k = A(t, g, b = b || l, r, i, c, a, s, f), (h = g.ref) && b.ref != h && (x || (x = []), b.ref && x.push(b.ref, null, g), x.push(h, g.__c || k, g)), null != k ? (null == _ && (_ = k), s = w(t, g, b, S, c, k, s), f || "option" != n.type ? "function" == typeof n.type && (n.__d = s) : t.value = "") : s && b.__e == s && s.parentNode != t && (s = y(b));
        }
      }

      if (n.__e = _, null != c && "function" != typeof n.type) for (d = c.length; d--;) {
        null != c[d] && p(c[d]);
      }

      for (d = O; d--;) {
        null != S[d] && T(S[d], S[d]);
      }

      if (x) for (d = 0; d < x.length; d++) {
        R(x[d], x[++d], x[++d]);
      }
    }

    function x(t) {
      return null == t || "boolean" == typeof t ? [] : Array.isArray(t) ? u.concat.apply([], t.map(x)) : [t];
    }

    function w(t, e, n, o, r, i, c) {
      var a, l, u;
      if (void 0 !== e.__d) a = e.__d, e.__d = void 0;else if (r == n || i != c || null == i.parentNode) t: if (null == c || c.parentNode !== t) t.appendChild(i), a = null;else {
        for (l = c, u = 0; (l = l.nextSibling) && u < o.length; u += 2) {
          if (l == i) break t;
        }

        t.insertBefore(i, c), a = c;
      }
      return void 0 !== a ? a : i.nextSibling;
    }

    function S(t, e, n) {
      "-" === e[0] ? t.setProperty(e, n) : t[e] = "number" == typeof n && !1 === s.test(e) ? n + "px" : null == n ? "" : n;
    }

    function O(t, e, n, o, r) {
      var i, c, a, l, u;
      if (r ? "className" === e && (e = "class") : "class" === e && (e = "className"), "style" === e) {
        if (i = t.style, "string" == typeof n) i.cssText = n;else {
          if ("string" == typeof o && (i.cssText = "", o = null), o) for (l in o) {
            n && l in n || S(i, l, "");
          }
          if (n) for (u in n) {
            o && n[u] === o[u] || S(i, u, n[u]);
          }
        }
      } else "o" === e[0] && "n" === e[1] ? (c = e !== (e = e.replace(/Capture$/, "")), a = e.toLowerCase(), e = (a in t ? a : e).slice(2), n ? (o || t.addEventListener(e, j, c), (t.l || (t.l = {}))[e] = n) : t.removeEventListener(e, j, c)) : "list" !== e && "tagName" !== e && "form" !== e && "type" !== e && "size" !== e && "download" !== e && !r && e in t ? t[e] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== e && (e !== (e = e.replace(/^xlink:?/, "")) ? null == n || !1 === n ? t.removeAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase()) : t.setAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase(), n) : null == n || !1 === n && !/^ar/.test(e) ? t.removeAttribute(e) : t.setAttribute(e, n));
    }

    function j(t) {
      this.l[t.type](o.event ? o.event(t) : t);
    }

    function E(t, e, n) {
      var o, r;

      for (o = 0; o < t.__k.length; o++) {
        (r = t.__k[o]) && (r.__ = t, r.__e && ("function" == typeof r.type && r.__k.length > 1 && E(r, e, n), e = w(n, r, r, t.__k, null, r.__e, e), "function" == typeof t.type && (t.__d = e)));
      }
    }

    function A(t, e, n, r, i, c, a, l, u) {
      var s,
          p,
          d,
          m,
          y,
          b,
          g,
          k,
          x,
          w,
          S,
          O = e.type;
      if (void 0 !== e.constructor) return null;
      (s = o.__b) && s(e);

      try {
        t: if ("function" == typeof O) {
          if (k = e.props, x = (s = O.contextType) && r[s.__c], w = s ? x ? x.props.value : s.__ : r, n.__c ? g = (p = e.__c = n.__c).__ = p.__E : ("prototype" in O && O.prototype.render ? e.__c = p = new O(k, w) : (e.__c = p = new h(k, w), p.constructor = O, p.render = N), x && x.sub(p), p.props = k, p.state || (p.state = {}), p.context = w, p.__n = r, d = p.__d = !0, p.__h = []), null == p.__s && (p.__s = p.state), null != O.getDerivedStateFromProps && (p.__s == p.state && (p.__s = f({}, p.__s)), f(p.__s, O.getDerivedStateFromProps(k, p.__s))), m = p.props, y = p.state, d) null == O.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), null != p.componentDidMount && p.__h.push(p.componentDidMount);else {
            if (null == O.getDerivedStateFromProps && k !== m && null != p.componentWillReceiveProps && p.componentWillReceiveProps(k, w), !p.__e && null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(k, p.__s, w) || e.__v === n.__v) {
              p.props = k, p.state = p.__s, e.__v !== n.__v && (p.__d = !1), p.__v = e, e.__e = n.__e, e.__k = n.__k, p.__h.length && a.push(p), E(e, l, t);
              break t;
            }

            null != p.componentWillUpdate && p.componentWillUpdate(k, p.__s, w), null != p.componentDidUpdate && p.__h.push(function () {
              p.componentDidUpdate(m, y, b);
            });
          }
          p.context = w, p.props = k, p.state = p.__s, (s = o.__r) && s(e), p.__d = !1, p.__v = e, p.__P = t, s = p.render(p.props, p.state, p.context), p.state = p.__s, null != p.getChildContext && (r = f(f({}, r), p.getChildContext())), d || null == p.getSnapshotBeforeUpdate || (b = p.getSnapshotBeforeUpdate(m, y)), S = null != s && s.type == v && null == s.key ? s.props.children : s, _(t, Array.isArray(S) ? S : [S], e, n, r, i, c, a, l, u), p.base = e.__e, p.__h.length && a.push(p), g && (p.__E = p.__ = null), p.__e = !1;
        } else null == c && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = C(n.__e, e, n, r, i, c, a, u);

        (s = o.diffed) && s(e);
      } catch (t) {
        e.__v = null, o.__e(t, e, n);
      }

      return e.__e;
    }

    function P(t, e) {
      o.__c && o.__c(e, t), t.some(function (e) {
        try {
          t = e.__h, e.__h = [], t.some(function (t) {
            t.call(e);
          });
        } catch (t) {
          o.__e(t, e.__v);
        }
      });
    }

    function C(t, e, n, o, r, i, c, a) {
      var s,
          f,
          p,
          d,
          m,
          v = n.props,
          h = e.props;
      if (r = "svg" === e.type || r, null != i) for (s = 0; s < i.length; s++) {
        if (null != (f = i[s]) && ((null === e.type ? 3 === f.nodeType : f.localName === e.type) || t == f)) {
          t = f, i[s] = null;
          break;
        }
      }

      if (null == t) {
        if (null === e.type) return document.createTextNode(h);
        t = r ? document.createElementNS("http://www.w3.org/2000/svg", e.type) : document.createElement(e.type, h.is && {
          is: h.is
        }), i = null, a = !1;
      }

      if (null === e.type) v !== h && t.data !== h && (t.data = h);else {
        if (null != i && (i = u.slice.call(t.childNodes)), p = (v = n.props || l).dangerouslySetInnerHTML, d = h.dangerouslySetInnerHTML, !a) {
          if (null != i) for (v = {}, m = 0; m < t.attributes.length; m++) {
            v[t.attributes[m].name] = t.attributes[m].value;
          }
          (d || p) && (d && p && d.__html == p.__html || (t.innerHTML = d && d.__html || ""));
        }

        (function (t, e, n, o, r) {
          var i;

          for (i in n) {
            "children" === i || "key" === i || i in e || O(t, i, null, n[i], o);
          }

          for (i in e) {
            r && "function" != typeof e[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === e[i] || O(t, i, e[i], n[i], o);
          }
        })(t, h, v, r, a), d ? e.__k = [] : (s = e.props.children, _(t, Array.isArray(s) ? s : [s], e, n, o, "foreignObject" !== e.type && r, i, c, l, a)), a || ("value" in h && void 0 !== (s = h.value) && s !== t.value && O(t, "value", s, v.value, !1), "checked" in h && void 0 !== (s = h.checked) && s !== t.checked && O(t, "checked", s, v.checked, !1));
      }
      return t;
    }

    function R(t, e, n) {
      try {
        "function" == typeof t ? t(e) : t.current = e;
      } catch (t) {
        o.__e(t, n);
      }
    }

    function T(t, e, n) {
      var r, i, c;

      if (o.unmount && o.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || R(r, null, e)), n || "function" == typeof t.type || (n = null != (i = t.__e)), t.__e = t.__d = void 0, null != (r = t.__c)) {
        if (r.componentWillUnmount) try {
          r.componentWillUnmount();
        } catch (t) {
          o.__e(t, e);
        }
        r.base = r.__P = null;
      }

      if (r = t.__k) for (c = 0; c < r.length; c++) {
        r[c] && T(r[c], e, n);
      }
      null != i && p(i);
    }

    function N(t, e, n) {
      return this.constructor(t, n);
    }

    function I(t, e, n) {
      var r, i, c;
      o.__ && o.__(t, e), i = (r = n === a) ? null : n && n.__k || e.__k, t = d(v, null, [t]), c = [], A(e, (r ? e : n || e).__k = t, i || l, l, void 0 !== e.ownerSVGElement, n && !r ? [n] : i ? null : e.childNodes.length ? u.slice.call(e.childNodes) : null, c, n || l, r), P(c, t);
    }

    o = {
      __e: function __e(t, e) {
        for (var n, o; e = e.__;) {
          if ((n = e.__c) && !n.__) try {
            if (n.constructor && null != n.constructor.getDerivedStateFromError && (o = !0, n.setState(n.constructor.getDerivedStateFromError(t))), null != n.componentDidCatch && (o = !0, n.componentDidCatch(t)), o) return g(n.__E = n);
          } catch (e) {
            t = e;
          }
        }

        throw t;
      }
    }, h.prototype.setState = function (t, e) {
      var n;
      n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = f({}, this.state), "function" == typeof t && (t = t(n, this.props)), t && f(n, t), null != t && this.__v && (e && this.__h.push(e), g(this));
    }, h.prototype.forceUpdate = function (t) {
      this.__v && (this.__e = !0, t && this.__h.push(t), g(this));
    }, h.prototype.render = v, r = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, k.__r = 0, a = l;
    var D,
        M,
        L,
        U = 0,
        q = [],
        F = o.__r,
        W = o.diffed,
        z = o.__c,
        H = o.unmount;

    function $(t, e) {
      o.__h && o.__h(M, t, U || e), U = 0;
      var n = M.__H || (M.__H = {
        __: [],
        __h: []
      });
      return t >= n.__.length && n.__.push({}), n.__[t];
    }

    function B(t) {
      return U = 1, G(Z, t);
    }

    function G(t, e, n) {
      var o = $(D++, 2);
      return o.t = t, o.__c || (o.__c = M, o.__ = [n ? n(e) : Z(void 0, e), function (t) {
        var e = o.t(o.__[0], t);
        o.__[0] !== e && (o.__ = [e, o.__[1]], o.__c.setState({}));
      }]), o.__;
    }

    function V(t, e) {
      var n = $(D++, 3);
      !o.__s && Q(n.__H, e) && (n.__ = t, n.__H = e, M.__H.__h.push(n));
    }

    function K() {
      q.some(function (t) {
        if (t.__P) try {
          t.__H.__h.forEach(Y), t.__H.__h.forEach(J), t.__H.__h = [];
        } catch (e) {
          return t.__H.__h = [], o.__e(e, t.__v), !0;
        }
      }), q = [];
    }

    o.__r = function (t) {
      F && F(t), D = 0;
      var e = (M = t.__c).__H;
      e && (e.__h.forEach(Y), e.__h.forEach(J), e.__h = []);
    }, o.diffed = function (t) {
      W && W(t);
      var e = t.__c;
      e && e.__H && e.__H.__h.length && (1 !== q.push(e) && L === o.requestAnimationFrame || ((L = o.requestAnimationFrame) || function (t) {
        var e,
            n = function n() {
          clearTimeout(o), X && cancelAnimationFrame(e), setTimeout(t);
        },
            o = setTimeout(n, 100);

        X && (e = requestAnimationFrame(n));
      })(K));
    }, o.__c = function (t, e) {
      e.some(function (t) {
        try {
          t.__h.forEach(Y), t.__h = t.__h.filter(function (t) {
            return !t.__ || J(t);
          });
        } catch (n) {
          e.some(function (t) {
            t.__h && (t.__h = []);
          }), e = [], o.__e(n, t.__v);
        }
      }), z && z(t, e);
    }, o.unmount = function (t) {
      H && H(t);
      var e = t.__c;
      if (e && e.__H) try {
        e.__H.__.forEach(Y);
      } catch (t) {
        o.__e(t, e.__v);
      }
    };
    var X = "function" == typeof requestAnimationFrame;

    function Y(t) {
      "function" == typeof t.u && t.u();
    }

    function J(t) {
      t.u = t.__();
    }

    function Q(t, e) {
      return !t || e.some(function (e, n) {
        return e !== t[n];
      });
    }

    function Z(t, e) {
      return "function" == typeof e ? e(t) : e;
    }

    function tt(t, e) {
      for (var n in e) {
        t[n] = e[n];
      }

      return t;
    }

    function et(t, e) {
      for (var n in t) {
        if ("__source" !== n && !(n in e)) return !0;
      }

      for (var o in e) {
        if ("__source" !== o && t[o] !== e[o]) return !0;
      }

      return !1;
    }

    !function (t) {
      var e, n;

      function o(e) {
        var n;
        return (n = t.call(this, e) || this).isPureReactComponent = !0, n;
      }

      n = t, (e = o).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n, o.prototype.shouldComponentUpdate = function (t, e) {
        return et(this.props, t) || et(this.state, e);
      };
    }(h);
    var nt = o.__b;

    o.__b = function (t) {
      t.type && t.type.t && t.ref && (t.props.ref = t.ref, t.ref = null), nt && nt(t);
    };

    "undefined" != typeof Symbol && Symbol["for"] && Symbol["for"]("react.forward_ref");
    var ot = o.__e;

    function rt(t) {
      return t && ((t = tt({}, t)).__c = null, t.__k = t.__k && t.__k.map(rt)), t;
    }

    function it(t) {
      return t && (t.__v = null, t.__k = t.__k && t.__k.map(it)), t;
    }

    function ct() {
      this.__u = 0, this.o = null, this.__b = null;
    }

    function at(t) {
      var e = t.__.__c;
      return e && e.u && e.u(t);
    }

    function lt() {
      this.i = null, this.l = null;
    }

    o.__e = function (t, e, n) {
      if (t.then) for (var o, r = e; r = r.__;) {
        if ((o = r.__c) && o.__c) return null == e.__e && (e.__e = n.__e, e.__k = n.__k), o.__c(t, e.__c);
      }
      ot(t, e, n);
    }, (ct.prototype = new h()).__c = function (t, e) {
      var n = this;
      null == n.o && (n.o = []), n.o.push(e);

      var o = at(n.__v),
          r = !1,
          i = function i() {
        r || (r = !0, e.componentWillUnmount = e.__c, o ? o(c) : c());
      };

      e.__c = e.componentWillUnmount, e.componentWillUnmount = function () {
        i(), e.__c && e.__c();
      };

      var c = function c() {
        var t;
        if (! --n.__u) for (n.__v.__k[0] = it(n.state.u), n.setState({
          u: n.__b = null
        }); t = n.o.pop();) {
          t.forceUpdate();
        }
      };

      n.__u++ || n.setState({
        u: n.__b = n.__v.__k[0]
      }), t.then(i, i);
    }, ct.prototype.componentWillUnmount = function () {
      this.o = [];
    }, ct.prototype.render = function (t, e) {
      return this.__b && (this.__v.__k && (this.__v.__k[0] = rt(this.__b)), this.__b = null), [d(v, null, e.u ? null : t.children), e.u && t.fallback];
    };

    var ut = function ut(t, e, n) {
      if (++n[1] === n[0] && t.l["delete"](e), t.props.revealOrder && ("t" !== t.props.revealOrder[0] || !t.l.size)) for (n = t.i; n;) {
        for (; n.length > 3;) {
          n.pop()();
        }

        if (n[1] < n[0]) break;
        t.i = n = n[2];
      }
    };

    (lt.prototype = new h()).u = function (t) {
      var e = this,
          n = at(e.__v),
          o = e.l.get(t);
      return o[0]++, function (r) {
        var i = function i() {
          e.props.revealOrder ? (o.push(r), ut(e, t, o)) : r();
        };

        n ? n(i) : i();
      };
    }, lt.prototype.render = function (t) {
      this.i = null, this.l = new Map();
      var e = x(t.children);
      t.revealOrder && "b" === t.revealOrder[0] && e.reverse();

      for (var n = e.length; n--;) {
        this.l.set(e[n], this.i = [1, 0, this.i]);
      }

      return t.children;
    }, lt.prototype.componentDidUpdate = lt.prototype.componentDidMount = function () {
      var t = this;
      t.l.forEach(function (e, n) {
        ut(t, n, e);
      });
    };
    !function () {
      function t() {}

      var e = t.prototype;
      e.getChildContext = function () {
        return this.props.context;
      }, e.render = function (t) {
        return t.children;
      };
    }();
    var st = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
    h.prototype.isReactComponent = {};
    var ft = "undefined" != typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;

    function pt(t, e, n) {
      if (null == e.__k) for (; e.firstChild;) {
        e.removeChild(e.firstChild);
      }
      return I(t, e), "function" == typeof n && n(), t ? t.__c : null;
    }

    var dt = o.event;

    function mt(t, e) {
      t["UNSAFE_" + e] && !t[e] && Object.defineProperty(t, e, {
        configurable: !1,
        get: function get() {
          return this["UNSAFE_" + e];
        },
        set: function set(t) {
          this["UNSAFE_" + e] = t;
        }
      });
    }

    o.event = function (t) {
      dt && (t = dt(t)), t.persist = function () {};
      var e = !1,
          n = !1,
          o = t.stopPropagation;

      t.stopPropagation = function () {
        o.call(t), e = !0;
      };

      var r = t.preventDefault;
      return t.preventDefault = function () {
        r.call(t), n = !0;
      }, t.isPropagationStopped = function () {
        return e;
      }, t.isDefaultPrevented = function () {
        return n;
      }, t.nativeEvent = t;
    };

    var vt = {
      configurable: !0,
      get: function get() {
        return this["class"];
      }
    },
        ht = o.vnode;

    o.vnode = function (t) {
      t.$$typeof = ft;
      var e = t.type,
          n = t.props;

      if (e) {
        if (n["class"] != n.className && (vt.enumerable = "className" in n, null != n.className && (n["class"] = n.className), Object.defineProperty(n, "className", vt)), "function" != typeof e) {
          var o, r, i;

          for (i in n.defaultValue && void 0 !== n.value && (n.value || 0 === n.value || (n.value = n.defaultValue), delete n.defaultValue), Array.isArray(n.value) && n.multiple && "select" === e && (x(n.children).forEach(function (t) {
            -1 != n.value.indexOf(t.props.value) && (t.props.selected = !0);
          }), delete n.value), !0 === n.download && (n.download = ""), n) {
            if (o = st.test(i)) break;
          }

          if (o) for (i in r = t.props = {}, n) {
            r[st.test(i) ? i.replace(/[A-Z0-9]/, "-$&").toLowerCase() : i] = n[i];
          }
        }

        !function (e) {
          var n = t.type,
              o = t.props;

          if (o && "string" == typeof n) {
            var r = {};

            for (var i in o) {
              /^on(Ani|Tra|Tou)/.test(i) && (o[i.toLowerCase()] = o[i], delete o[i]), r[i.toLowerCase()] = i;
            }

            if (r.ondoubleclick && (o.ondblclick = o[r.ondoubleclick], delete o[r.ondoubleclick]), r.onbeforeinput && (o.onbeforeinput = o[r.onbeforeinput], delete o[r.onbeforeinput]), r.onchange && ("textarea" === n || "input" === n.toLowerCase() && !/^fil|che|ra/i.test(o.type))) {
              var c = r.oninput || "oninput";
              o[c] || (o[c] = o[r.onchange], delete o[r.onchange]);
            }
          }
        }(), "function" == typeof e && !e.m && e.prototype && (mt(e.prototype, "componentWillMount"), mt(e.prototype, "componentWillReceiveProps"), mt(e.prototype, "componentWillUpdate"), e.m = !0);
      }

      ht && ht(t);
    };

    var yt = d,
        bt = v,
        gt = h,
        kt = (n(29), n(30), n(31), n(127), n(38), n(128), n(145), n(134)),
        _t = function _t(t) {
      var e = t.t;
      return yt("svg", {
        role: "img",
        "aria-label": e(["close"]),
        width: "12",
        height: "12",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }, yt("title", null, e(["close"])), yt("line", {
        x1: "1",
        y1: "11",
        x2: "11",
        y2: "1",
        strokeWidth: "1"
      }), yt("line", {
        x1: "1",
        y1: "1",
        x2: "11",
        y2: "11",
        strokeWidth: "1"
      }));
    };

    _t.propTypes = {
      t: n.n(kt).a.func
    };
    n(49);

    function xt(t) {
      return t.split("-").map(function (t) {
        return t.slice(0, 1).toUpperCase() + t.slice(1);
      }).join(" ");
    }

    n(64), n(149), n(150);

    function wt(t) {
      return function (t) {
        if (Array.isArray(t)) return St(t);
      }(t) || function (t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
      }(t) || function (t, e) {
        if (!t) return;
        if ("string" == typeof t) return St(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === n && t.constructor && (n = t.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(t);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return St(t, e);
      }(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function St(t, e) {
      (null == e || e > t.length) && (e = t.length);

      for (var n = 0, o = new Array(e); n < e; n++) {
        o[n] = t[n];
      }

      return o;
    }

    function Ot(t) {
      return (Ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      })(t);
    }

    var jt = function jt(t) {
      for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) {
        n[o - 1] = arguments[o];
      }

      var r,
          i = Ot(n[0]);
      r = 0 === n.length ? {} : "string" === i || "number" === i ? Array.prototype.slice.call(n) : n[0];

      for (var c = [], a = t.toString(); a.length > 0;) {
        var l = a.match(/\{(?!\{)([\w\d]+)\}(?!\})/);

        if (null !== l) {
          var u = a.substr(0, l.index);
          a = a.substr(l.index + l[0].length);
          var s = parseInt(l[1]);
          c.push(u), s != s ? c.push(r[l[1]]) : c.push(r[s]);
        } else c.push(a), a = "";
      }

      return c;
    };

    function Et(t) {
      if (void 0 !== t && "zz" !== t) return t;
      var e = (("string" == typeof window.language ? window.language : null) || document.documentElement.lang || "en").toLowerCase(),
          n = new RegExp("^([\\w]+)-([\\w]+)$").exec(e);
      return null === n ? e : n[1];
    }

    function At(t, e, n) {
      var o = e;
      Array.isArray(o) || (o = [o]);

      for (var r = t, i = 0; i < o.length; i++) {
        if (void 0 === r) return n;

        if (void 0 !== o[i] && o[i].endsWith("?")) {
          var c = o[i].slice(0, o[i].length - 1),
              a = void 0;
          void 0 !== (a = r instanceof Map ? r.get(c) : r[c]) && "string" == typeof a && (r = a);
        } else r = r instanceof Map ? r.get(o[i]) : r[o[i]];
      }

      return void 0 === r || "string" != typeof r ? n : "" !== r ? r : void 0;
    }

    function Pt(t, e, n, o) {
      var r = o,
          i = !1;
      "!" === r[0] && (r = r.slice(1), i = !0), Array.isArray(r) || (r = [r]);
      var c = At(t, [e].concat(wt(r)));

      if (void 0 === c && void 0 !== n && (c = At(t, [n].concat(wt(r)))), void 0 === c) {
        if (i) return;
        return ["[missing translation: ".concat(e, "/").concat(r.join("/"), "]")];
      }

      for (var a = arguments.length, l = new Array(a > 4 ? a - 4 : 0), u = 4; u < a; u++) {
        l[u - 4] = arguments[u];
      }

      return l.length > 0 ? jt.apply(void 0, [c].concat(l)) : c;
    }

    var Ct = function Ct(t) {
      var e = t.text,
          n = t.config;

      if (e instanceof Array || (e = [e]), !0 === n.htmlTexts) {
        var o = !1;
        "<" === e[0][0] && (o = !0);
        var r = e.map(function (t, e) {
          return "string" == typeof t ? yt("span", {
            key: e,
            dangerouslySetInnerHTML: {
              __html: t
            }
          }) : t;
        });
        return yt(o ? bt : "span", null, r);
      }

      return yt("span", null, e);
    };

    function Rt(t) {
      return (Rt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      })(t);
    }

    function Tt() {
      return (Tt = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];

          for (var o in n) {
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
          }
        }

        return t;
      }).apply(this, arguments);
    }

    function Nt(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    function It(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }

    function Dt(t, e) {
      return (Dt = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      })(t, e);
    }

    function Mt(t) {
      var e = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }();

      return function () {
        var n,
            o = Ut(t);

        if (e) {
          var r = Ut(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else n = o.apply(this, arguments);

        return Lt(this, n);
      };
    }

    function Lt(t, e) {
      return !e || "object" !== Rt(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }(t) : e;
    }

    function Ut(t) {
      return (Ut = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
    }

    var qt = function (t) {
      !function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Dt(t, e);
      }(i, t);
      var e,
          n,
          o,
          r = Mt(i);

      function i() {
        return Nt(this, i), r.apply(this, arguments);
      }

      return e = i, (n = [{
        key: "render",
        value: function value() {
          var t,
              e = this.props,
              n = e.checked,
              o = e.onlyRequiredEnabled,
              r = e.onToggle,
              i = e.name,
              c = e.lang,
              a = e.config,
              l = e.translations,
              u = e.title,
              s = e.description,
              f = e.t,
              p = this.props.required || !1,
              d = this.props.optOut || !1,
              m = this.props.purposes || [],
              v = "service-item-".concat(i),
              h = m.map(function (t) {
            return f(["!", "purposes", t, "title?"]) || xt(t);
          }).join(", "),
              y = d ? yt("span", {
            className: "cm-opt-out",
            title: f(["service", "optOut", "description"])
          }, f(["service", "optOut", "title"])) : "",
              b = p ? yt("span", {
            className: "cm-required",
            title: f(["service", "required", "description"])
          }, f(["service", "required", "title"])) : "";
          m.length > 0 && (t = yt("p", {
            className: "purposes"
          }, f(["service", m.length > 1 ? "purposes" : "purpose"]), ":", " ", h));
          var g = s || Pt(l, c, "zz", ["!", "description"]) || f(["!", i, "description?"]);
          return yt("div", null, yt("input", {
            id: v,
            className: "cm-list-input" + (p ? " required" : "") + (o ? " half-checked only-required" : ""),
            "aria-describedby": "".concat(v, "-description"),
            disabled: p,
            checked: n || p,
            type: "checkbox",
            onChange: function onChange(t) {
              r(t.target.checked);
            }
          }), yt("label", Tt({
            htmlFor: v,
            className: "cm-list-label"
          }, p ? {
            tabIndex: "0"
          } : {}), yt("span", {
            className: "cm-list-title"
          }, u || Pt(l, c, "zz", ["!", "title"]) || f(["!", i, "title?"]) || xt(i)), b, y, yt("span", {
            className: "cm-switch"
          }, yt("div", {
            className: "slider round active"
          }))), yt("div", {
            id: "".concat(v, "-description")
          }, g && yt("p", {
            className: "cm-list-description"
          }, yt(Ct, {
            config: a,
            text: g
          })), t));
        }
      }]) && It(e.prototype, n), o && It(e, o), i;
    }(gt);

    function Ft(t) {
      return (Ft = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      })(t);
    }

    function Wt(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }

    function zt(t, e) {
      return (zt = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      })(t, e);
    }

    function Ht(t) {
      var e = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }();

      return function () {
        var n,
            o = Gt(t);

        if (e) {
          var r = Gt(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else n = o.apply(this, arguments);

        return $t(this, n);
      };
    }

    function $t(t, e) {
      return !e || "object" !== Ft(e) && "function" != typeof e ? Bt(t) : e;
    }

    function Bt(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }

    function Gt(t) {
      return (Gt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
    }

    function Vt() {
      return (Vt = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];

          for (var o in n) {
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
          }
        }

        return t;
      }).apply(this, arguments);
    }

    var Kt = function Kt(t) {
      var e = t.services,
          n = t.config,
          o = t.consents,
          r = t.lang,
          i = t.toggle,
          c = t.t;
      return e.map(function (t) {
        var e = o[t.name];
        return yt("li", {
          key: t.name,
          className: "cm-service"
        }, yt(qt, Vt({
          checked: e || t.required,
          onToggle: function onToggle(e) {
            i([t], e);
          },
          config: n,
          lang: r,
          t: c
        }, t)));
      });
    },
        Xt = function (t) {
      !function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && zt(t, e);
      }(i, t);
      var e,
          n,
          o,
          r = Ht(i);

      function i(t) {
        var e;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, i), e = r.call(this, t), t.manager.watch(Bt(e)), e.state = {
          consents: t.manager.consents
        }, e;
      }

      return e = i, (n = [{
        key: "componentWillUnmount",
        value: function value() {
          this.props.manager.unwatch(this);
        }
      }, {
        key: "update",
        value: function value(t, e, n) {
          t === this.props.manager && "consents" === e && this.setState({
            consents: n
          });
        }
      }, {
        key: "render",
        value: function value() {
          var t = this.props,
              e = t.config,
              n = t.t,
              o = t.manager,
              r = t.lang,
              i = this.state.consents,
              c = e.services,
              a = function a(t, e) {
            t.map(function (t) {
              t.required || o.updateConsent(t.name, e);
            });
          },
              l = yt(Kt, {
            config: e,
            lang: r,
            services: c,
            t: n,
            consents: i,
            toggle: a
          }),
              u = c.filter(function (t) {
            return !t.required;
          }),
              s = u.filter(function (t) {
            return i[t.name];
          }).length,
              f = c.filter(function (t) {
            return t.required;
          }).length,
              p = s === u.length;

          return c.filter(function (t) {
            return t.required;
          }).length, yt("ul", {
            className: "cm-services"
          }, l, !e.hideToggleAll && u.length > 1 && yt("li", {
            className: "cm-service cm-toggle-all"
          }, yt(qt, {
            name: "disableAll",
            title: n(["service", "disableAll", "title"]),
            description: n(["service", "disableAll", "description"]),
            checked: p,
            config: e,
            onlyRequiredEnabled: !p && f > 0,
            onToggle: function onToggle(t) {
              a(c, t);
            },
            lang: r,
            t: n
          })));
        }
      }]) && Wt(e.prototype, n), o && Wt(e, o), i;
    }(gt);

    function Yt(t) {
      return (Yt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      })(t);
    }

    function Jt() {
      return (Jt = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];

          for (var o in n) {
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
          }
        }

        return t;
      }).apply(this, arguments);
    }

    function Qt(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }

    function Zt(t, e) {
      return (Zt = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      })(t, e);
    }

    function te(t) {
      var e = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }();

      return function () {
        var n,
            o = ne(t);

        if (e) {
          var r = ne(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else n = o.apply(this, arguments);

        return ee(this, n);
      };
    }

    function ee(t, e) {
      return !e || "object" !== Yt(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }(t) : e;
    }

    function ne(t) {
      return (ne = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
    }

    var oe = function (t) {
      !function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Zt(t, e);
      }(i, t);
      var e,
          n,
          o,
          r = te(i);

      function i(t) {
        var e;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, i), (e = r.call(this, t)).state = {
          servicesVisible: !1
        }, e;
      }

      return e = i, (n = [{
        key: "render",
        value: function value() {
          var t,
              e = this,
              n = this.props,
              o = n.allEnabled,
              r = n.onlyRequiredEnabled,
              i = n.allDisabled,
              c = n.services,
              a = n.config,
              l = n.onToggle,
              u = n.name,
              s = n.lang,
              f = n.manager,
              p = n.consents,
              d = n.title,
              m = n.description,
              v = n.t,
              h = this.state.servicesVisible,
              y = this.props.required || !1,
              b = this.props.purposes || [],
              g = "purpose-item-".concat(u),
              k = b.map(function (t) {
            return v(["!", "purposes", t, "title?"]) || xt(t);
          }).join(", "),
              _ = y ? yt("span", {
            className: "cm-required",
            title: v(["!", "service", "required", "description"]) || ""
          }, v(["service", "required", "title"])) : "";

          b.length > 0 && (t = yt("p", {
            className: "purposes"
          }, v(["purpose", b.length > 1 ? "purposes" : "purpose"]), ": ", k));
          var x = yt(Kt, {
            config: a,
            lang: s,
            services: c,
            toggle: function toggle(t, e) {
              t.map(function (t) {
                t.required || f.updateConsent(t.name, e);
              });
            },
            consents: p,
            t: v
          }),
              w = m || v(["!", "purposes", u, "description"]);
          return yt(bt, null, yt("input", {
            id: g,
            className: "cm-list-input" + (y ? " required" : "") + (o ? "" : r ? " only-required" : " half-checked"),
            "aria-describedby": "".concat(g, "-description"),
            disabled: y,
            checked: o || !i && !r,
            type: "checkbox",
            onChange: function onChange(t) {
              l(t.target.checked);
            }
          }), yt("label", Jt({
            htmlFor: g,
            className: "cm-list-label"
          }, y ? {
            tabIndex: "0"
          } : {}), yt("span", {
            className: "cm-list-title"
          }, d || v(["!", "purposes", u, "title?"]) || xt(u)), _, yt("span", {
            className: "cm-switch"
          }, yt("div", {
            className: "slider round active"
          }))), yt("div", {
            id: "".concat(g, "-description")
          }, w && yt("p", {
            className: "cm-list-description"
          }, yt(Ct, {
            config: a,
            text: w
          })), t), c.length > 0 && yt("div", {
            className: "cm-services"
          }, yt("div", {
            className: "cm-caret"
          }, yt("a", {
            href: "#",
            onClick: function onClick(t) {
              t.preventDefault(), e.setState({
                servicesVisible: !h
              });
            }
          }, h && yt("span", null, "↑") || yt("span", null, "↓"), " ", c.length, " ", v(["purposeItem", c.length > 1 ? "services" : "service"]))), yt("ul", {
            className: "cm-content" + (h ? " expanded" : "")
          }, x)));
        }
      }]) && Qt(e.prototype, n), o && Qt(e, o), i;
    }(gt);

    function re(t) {
      return (re = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      })(t);
    }

    function ie(t, e) {
      var _n2;

      if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
        if (Array.isArray(t) || (_n2 = function (t, e) {
          if (!t) return;
          if ("string" == typeof t) return ce(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(t);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ce(t, e);
        }(t)) || e && t && "number" == typeof t.length) {
          _n2 && (t = _n2);

          var o = 0,
              r = function r() {};

          return {
            s: r,
            n: function n() {
              return o >= t.length ? {
                done: !0
              } : {
                done: !1,
                value: t[o++]
              };
            },
            e: function e(t) {
              throw t;
            },
            f: r
          };
        }

        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      var i,
          c = !0,
          a = !1;
      return {
        s: function s() {
          _n2 = t[Symbol.iterator]();
        },
        n: function n() {
          var t = _n2.next();

          return c = t.done, t;
        },
        e: function e(t) {
          a = !0, i = t;
        },
        f: function f() {
          try {
            c || null == _n2["return"] || _n2["return"]();
          } finally {
            if (a) throw i;
          }
        }
      };
    }

    function ce(t, e) {
      (null == e || e > t.length) && (e = t.length);

      for (var n = 0, o = new Array(e); n < e; n++) {
        o[n] = t[n];
      }

      return o;
    }

    function ae(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }

    function le(t, e) {
      return (le = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      })(t, e);
    }

    function ue(t) {
      var e = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }();

      return function () {
        var n,
            o = pe(t);

        if (e) {
          var r = pe(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else n = o.apply(this, arguments);

        return se(this, n);
      };
    }

    function se(t, e) {
      return !e || "object" !== re(e) && "function" != typeof e ? fe(t) : e;
    }

    function fe(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }

    function pe(t) {
      return (pe = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
    }

    var de = function (t) {
      !function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && le(t, e);
      }(i, t);
      var e,
          n,
          o,
          r = ue(i);

      function i(t) {
        var e;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, i), e = r.call(this, t), t.manager.watch(fe(e)), e.state = {
          consents: t.manager.consents
        }, e;
      }

      return e = i, (n = [{
        key: "componentWillUnmount",
        value: function value() {
          this.props.manager.unwatch(this);
        }
      }, {
        key: "update",
        value: function value(t, e, n) {
          t === this.props.manager && "consents" === e && this.setState({
            consents: n
          });
        }
      }, {
        key: "render",
        value: function value() {
          var t,
              e = this.props,
              n = e.config,
              o = e.t,
              r = e.manager,
              i = e.lang,
              c = this.state.consents,
              a = n.services,
              l = {},
              u = ie(a);

          try {
            for (u.s(); !(t = u.n()).done;) {
              var s,
                  f = t.value,
                  p = ie(f.purposes);

              try {
                for (p.s(); !(s = p.n()).done;) {
                  var d = s.value;
                  void 0 === l[d] && (l[d] = []), l[d].push(f);
                }
              } catch (t) {
                p.e(t);
              } finally {
                p.f();
              }
            }
          } catch (t) {
            u.e(t);
          } finally {
            u.f();
          }

          var m = function m(t, e) {
            t.map(function (t) {
              var n,
                  o = ie(l[t]);

              try {
                for (o.s(); !(n = o.n()).done;) {
                  var i = n.value;
                  i.required || r.updateConsent(i.name, e);
                }
              } catch (t) {
                o.e(t);
              } finally {
                o.f();
              }
            });
          },
              v = function v(t) {
            var e,
                n = {
              allEnabled: !0,
              onlyRequiredEnabled: !0,
              allDisabled: !0,
              allRequired: !0
            },
                o = ie(t);

            try {
              for (o.s(); !(e = o.n()).done;) {
                var r = e.value;
                r.required || (n.allRequired = !1), c[r.name] ? (r.required || (n.onlyRequiredEnabled = !1), n.allDisabled = !1) : r.required || (n.allEnabled = !1);
              }
            } catch (t) {
              o.e(t);
            } finally {
              o.f();
            }

            return n.allDisabled && (n.onlyRequiredEnabled = !1), n;
          },
              h = n.purposeOrder || [],
              y = Object.keys(l).sort(function (t, e) {
            return h.indexOf(t) - h.indexOf(e);
          }).map(function (t) {
            var e = v(l[t]);
            return yt("li", {
              key: t,
              className: "cm-purpose"
            }, yt(oe, {
              allEnabled: e.allEnabled,
              allDisabled: e.allDisabled,
              onlyRequiredEnabled: e.onlyRequiredEnabled,
              required: e.allRequired,
              consents: c,
              name: t,
              config: n,
              lang: i,
              manager: r,
              onToggle: function onToggle(e) {
                m([t], e);
              },
              services: l[t],
              t: o
            }));
          }),
              b = Object.keys(l).filter(function (t) {
            var e,
                n = ie(l[t]);

            try {
              for (n.s(); !(e = n.n()).done;) {
                if (!e.value.required) return !0;
              }
            } catch (t) {
              n.e(t);
            } finally {
              n.f();
            }

            return !1;
          }),
              g = v(a);

          return yt("ul", {
            className: "cm-purposes"
          }, y, b.length > 1 && yt("li", {
            className: "cm-purpose cm-toggle-all"
          }, yt(oe, {
            name: "disableAll",
            title: o(["service", "disableAll", "title"]),
            description: o(["service", "disableAll", "description"]),
            allDisabled: g.allDisabled,
            allEnabled: g.allEnabled,
            onlyRequiredEnabled: g.onlyRequiredEnabled,
            onToggle: function onToggle(t) {
              m(Object.keys(l), t);
            },
            manager: r,
            consents: c,
            config: n,
            lang: i,
            services: [],
            t: o
          })));
        }
      }]) && ae(e.prototype, n), o && ae(e, o), i;
    }(gt);

    function me(t) {
      return (me = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      })(t);
    }

    function ve(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }

    function he(t, e) {
      return (he = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      })(t, e);
    }

    function ye(t) {
      var e = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }();

      return function () {
        var n,
            o = ge(t);

        if (e) {
          var r = ge(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else n = o.apply(this, arguments);

        return be(this, n);
      };
    }

    function be(t, e) {
      return !e || "object" !== me(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }(t) : e;
    }

    function ge(t) {
      return (ge = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
    }

    var ke = function (t) {
      !function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && he(t, e);
      }(i, t);
      var e,
          n,
          o,
          r = ye(i);

      function i(t) {
        var e;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, i), e = r.call(this, t), t.manager.restoreSavedConsents(), e;
      }

      return e = i, (n = [{
        key: "render",
        value: function value() {
          var t,
              e,
              n,
              o = this.props,
              r = o.hide,
              i = o.confirming,
              c = o.saveAndHide,
              a = o.acceptAndHide,
              l = o.declineAndHide,
              u = o.config,
              s = o.manager,
              f = o.lang,
              p = o.t,
              d = u.embedded,
              m = void 0 === u.groupByPurpose || u.groupByPurpose;
          u.mustConsent || (t = yt("button", {
            title: p(["close"]),
            className: "hide",
            type: "button",
            onClick: r
          }, yt(_t, {
            t: p
          }))), u.hideDeclineAll || s.confirmed || (e = yt("button", {
            disabled: i,
            className: "cm-btn cm-btn-decline cm-btn-danger cn-decline",
            type: "button",
            onClick: l
          }, p(["decline"])));
          var v,
              h,
              y,
              b = yt("button", {
            disabled: i,
            className: "cm-btn cm-btn-success cm-btn-info cm-btn-accept",
            type: "button",
            onClick: c
          }, p([s.confirmed ? "save" : "acceptSelected"]));
          u.acceptAll && !s.confirmed && (n = yt("button", {
            disabled: i,
            className: "cm-btn cm-btn-success cm-btn-accept-all",
            type: "button",
            onClick: a
          }, p(["acceptAll"]))), void 0 !== u.privacyPolicy ? "string" == typeof u.privacyPolicy ? v = u.privacyPolicy : "object" === me(u.privacyPolicy) && (v = u.privacyPolicy[f] || u.privacyPolicy["default"]) : void 0 !== (v = p(["!", "privacyPolicyUrl"], {
            lang: f
          })) && (v = v.join("")), void 0 !== v && (h = yt("a", {
            key: "ppLink",
            href: v,
            target: "_blank",
            rel: "noopener"
          }, p(["privacyPolicy", "name"]))), y = yt(m ? de : Xt, {
            t: p,
            config: u,
            manager: s,
            lang: f
          });
          var g = yt("div", {
            className: "cm-modal cm-klaro"
          }, yt("div", {
            className: "cm-header"
          }, t, yt("h1", {
            className: "title"
          }, yt(Ct, {
            config: u,
            text: p(["consentModal", "title"])
          })), yt("p", null, yt(Ct, {
            config: u,
            text: [p(["consentModal", "description"])].concat(h && [" "].concat(p(["privacyPolicy", "text"], {
              privacyPolicy: h
            })) || [])
          }))), yt("div", {
            className: "cm-body"
          }, y), yt("div", {
            className: "cm-footer"
          }, yt("div", {
            className: "cm-footer-buttons"
          }, e, b, n), !u.disablePoweredBy && yt("p", {
            className: "cm-powered-by"
          }, yt("a", {
            target: "_blank",
            href: u.poweredBy || "https://kiprotect.com/klaro",
            rel: "noopener"
          }, p(["poweredBy"])))));
          return d ? yt("div", {
            className: "cookie-modal cm-embedded"
          }, g) : yt("div", {
            className: "cookie-modal"
          }, yt("div", {
            className: "cm-bg",
            onClick: r
          }), g);
        }
      }]) && ve(e.prototype, n), o && ve(e, o), i;
    }(gt);

    n(129);

    function _e(t) {
      return (_e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      })(t);
    }

    function xe(t, e, n) {
      void 0 === n && (n = !0);

      for (var o = Object.keys(e), r = 0; r < o.length; r++) {
        var i = o[r],
            c = e[i],
            a = t[i];
        "string" == typeof c ? (n || void 0 === a) && (t[i] = c) : "object" === _e(c) && ("object" === _e(a) ? xe(a, c, n) : (n || void 0 === a) && (t[i] = c));
      }

      return t;
    }

    function we(t) {
      return (we = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      })(t);
    }

    function Se(t) {
      return function (t) {
        if (Array.isArray(t)) return Oe(t);
      }(t) || function (t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
      }(t) || function (t, e) {
        if (!t) return;
        if ("string" == typeof t) return Oe(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === n && t.constructor && (n = t.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(t);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Oe(t, e);
      }(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function Oe(t, e) {
      (null == e || e > t.length) && (e = t.length);

      for (var n = 0, o = new Array(e); n < e; n++) {
        o[n] = t[n];
      }

      return o;
    }

    function je(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }

    function Ee(t, e) {
      return (Ee = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      })(t, e);
    }

    function Ae(t) {
      var e = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }();

      return function () {
        var n,
            o = Re(t);

        if (e) {
          var r = Re(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else n = o.apply(this, arguments);

        return Pe(this, n);
      };
    }

    function Pe(t, e) {
      return !e || "object" !== we(e) && "function" != typeof e ? Ce(t) : e;
    }

    function Ce(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }

    function Re(t) {
      return (Re = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
    }

    function Te(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }

    var Ne = function (t) {
      !function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Ee(t, e);
      }(i, t);
      var e,
          n,
          o,
          r = Ae(i);

      function i(t) {
        var e;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, i), Te(Ce(e = r.call(this, t)), "executeButtonClicked", function (t, n, o) {
          var r = e.state.modal,
              i = 0;
          t && (i = e.props.manager.changeAll(n));
          var c = e.props.manager.confirmed;

          if (e.props.manager.saveAndApplyConsents(o), t && !c && (r || e.props.config.mustConsent)) {
            var a = function a() {
              e.setState({
                confirming: !1
              }), e.props.hide();
            };

            e.setState({
              confirming: !0
            }), 0 === i ? a() : setTimeout(a, 800);
          } else e.props.hide();
        }), Te(Ce(e), "saveAndHide", function () {
          e.executeButtonClicked(!1, !1, "save");
        }), Te(Ce(e), "acceptAndHide", function () {
          e.executeButtonClicked(!0, !0, "accept");
        }), Te(Ce(e), "declineAndHide", function () {
          e.executeButtonClicked(!0, !1, "decline");
        }), e.state = {
          modal: t.modal,
          confirming: !1
        }, e;
      }

      return e = i, (n = [{
        key: "componentDidUpdate",
        value: function value(t) {
          t.modal !== this.props.modal && this.setState({
            modal: this.props.modal
          });
        }
      }, {
        key: "render",
        value: function value() {
          var t,
              e = this,
              n = this.props,
              o = n.lang,
              r = n.config,
              i = n.show,
              c = n.manager,
              a = n.testing,
              l = n.t,
              u = this.state,
              s = u.confirming,
              f = u.modal,
              p = r.embedded,
              d = r.noticeAsModal,
              m = r.hideLearnMore,
              v = r.purposeOrder || [],
              h = function (t) {
            for (var e = new Set([]), n = 0; n < t.services.length; n++) {
              for (var o = t.services[n].purposes || [], r = 0; r < o.length; r++) {
                e.add(o[r]);
              }
            }

            return Array.from(e);
          }(r).filter(function (t) {
            return "functional" !== t;
          }).sort(function (t, e) {
            return v.indexOf(t) - v.indexOf(e);
          }).map(function (t) {
            return l(["!", "purposes", t, "title?"]) || xt(t);
          }),
              y = "";

          y = 1 === h.length ? h[0] : [].concat(Se(h.slice(0, -2)), [h.slice(-2).join(" & ")]).join(", "), void 0 !== r.privacyPolicy ? "string" == typeof r.privacyPolicy ? t = r.privacyPolicy : "object" === we(r.privacyPolicy) && (t = r.privacyPolicy[o] || r.privacyPolicy["default"]) : void 0 !== (t = l(["!", "privacyPolicyUrl"], {
            lang: o
          })) && (t = t.join(""));

          var b,
              g = function g(t) {
            t.preventDefault(), e.setState({
              modal: !0
            });
          };

          if (c.changed && (b = yt("p", {
            className: "cn-changes"
          }, l(["consentNotice", "changeDescription"]))), !i && !a && !s) return yt("div", null);

          var k,
              _ = (!r.mustConsent || d) && !c.confirmed && !r.noNotice,
              x = r.hideDeclineAll ? "" : yt("button", {
            className: "cm-btn cm-btn-danger cn-decline",
            type: "button",
            onClick: this.declineAndHide
          }, l(["decline"])),
              w = r.acceptAll ? yt("button", {
            className: "cm-btn cm-btn-success",
            type: "button",
            onClick: this.acceptAndHide
          }, l(["ok"])) : yt("button", {
            className: "cm-btn cm-btn-success",
            type: "button",
            onClick: this.saveAndHide
          }, l(["ok"])),
              S = function S(t) {
            return d ? yt("button", {
              key: "learnMoreLink",
              className: "cm-btn cm-btn-lern-more cm-btn-info",
              type: "button",
              onClick: g
            }, l(["consentNotice", "learnMore"]), t) : yt("a", {
              key: "learnMoreLink",
              className: "cm-link cn-learn-more",
              href: "#",
              onClick: g
            }, l(["consentNotice", "learnMore"]), t);
          };

          if (void 0 !== t && (k = yt("a", {
            key: "ppLink",
            href: t
          }, l(["privacyPolicy", "name"]))), f || c.confirmed && !a || !c.confirmed && r.mustConsent) return yt(ke, {
            t: l,
            lang: o,
            config: r,
            hide: function hide() {
              r.mustConsent && !r.acceptAll || (c.confirmed && !a ? e.props.hide() : e.setState({
                modal: !1
              }));
            },
            confirming: s,
            declineAndHide: this.declineAndHide,
            saveAndHide: this.saveAndHide,
            acceptAndHide: this.acceptAndHide,
            manager: c
          });
          var O = yt("div", {
            className: "cookie-notice ".concat(_ || a ? "" : "cookie-notice-hidden", " ").concat(d ? "cookie-modal-notice" : "", " ").concat(p ? "cn-embedded" : "")
          }, yt("div", {
            className: "cn-body"
          }, yt("p", null, yt(Ct, {
            config: r,
            text: l(["consentNotice", "description"], {
              purposes: yt("strong", {
                key: "strong"
              }, y),
              privacyPolicy: k,
              learnMoreLink: S()
            })
          })), a && yt("p", null, l(["consentNotice", "testing"])), b, yt("div", {
            className: "cn-ok"
          }, !m && S("..."), yt("div", {
            className: "cn-buttons"
          }, x, w))));
          return d ? yt("div", {
            className: "cookie-modal"
          }, yt("div", {
            className: "cm-bg"
          }), O) : O;
        }
      }]) && je(e.prototype, n), o && je(e, o), i;
    }(gt);

    function Ie(t) {
      return (Ie = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      })(t);
    }

    function De(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }

    function Me(t, e) {
      return (Me = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      })(t, e);
    }

    function Le(t) {
      var e = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }();

      return function () {
        var n,
            o = Fe(t);

        if (e) {
          var r = Fe(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else n = o.apply(this, arguments);

        return Ue(this, n);
      };
    }

    function Ue(t, e) {
      return !e || "object" !== Ie(e) && "function" != typeof e ? qe(t) : e;
    }

    function qe(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }

    function Fe(t) {
      return (Fe = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
    }

    var We = function (t) {
      !function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Me(t, e);
      }(i, t);
      var e,
          n,
          o,
          r = Le(i);

      function i(t) {
        var e;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, i), e = r.call(this, t), t.manager.watch(qe(e)), e.state = {
          show: t.show > 0 || !t.manager.confirmed
        }, e;
      }

      return e = i, (n = [{
        key: "componentWillUnmount",
        value: function value() {
          this.props.manager.unwatch(this);
        }
      }, {
        key: "update",
        value: function value(t, e) {
          t === this.props.manager && "applyConsents" === e && (!this.props.config.embedded && this.props.manager.confirmed ? this.setState({
            show: !1
          }) : this.forceUpdate());
        }
      }, {
        key: "notifyApi",
        value: function value() {
          var t = this.props,
              e = t.api,
              n = t.modal,
              o = t.show,
              r = t.config;

          if (void 0 !== e) {
            if (n || o > 0) return;
            this.props.manager.confirmed || this.props.manager.auxiliaryStore.getWithKey("shown-before") || (e.update(this, "showNotice", {
              config: r
            }), this.props.manager.auxiliaryStore.setWithKey("shown-before", !0));
          }
        }
      }, {
        key: "componentDidMount",
        value: function value() {
          this.notifyApi();
        }
      }, {
        key: "componentDidUpdate",
        value: function value(t) {
          if (t.show !== this.props.show) {
            this.notifyApi();
            var e = this.props.show > 0 || !this.props.manager.confirmed;
            e !== this.state.show && this.setState({
              show: e
            });
          }
        }
      }, {
        key: "render",
        value: function value() {
          var t = this,
              e = this.props,
              n = e.config,
              o = e.t,
              r = e.lang,
              i = e.testing,
              c = e.manager,
              a = e.modal,
              l = this.state.show,
              u = n.additionalClass,
              s = n.embedded,
              f = n.stylePrefix;
          return yt("div", {
            lang: r,
            className: (f || "klaro") + (void 0 !== u ? " " + u : "")
          }, yt(Ne, {
            key: "app-" + this.props.show,
            t: o,
            testing: i,
            show: l,
            lang: r,
            modal: a,
            hide: function hide() {
              s || t.setState({
                show: !1
              });
            },
            config: n,
            manager: c
          }));
        }
      }]) && De(e.prototype, n), o && De(e, o), i;
    }(gt);

    function ze(t, e) {
      return function (t) {
        if (Array.isArray(t)) return t;
      }(t) || function (t, e) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
        var n = [],
            o = !0,
            r = !1,
            i = void 0;

        try {
          for (var c, a = t[Symbol.iterator](); !(o = (c = a.next()).done) && (n.push(c.value), !e || n.length !== e); o = !0) {
            ;
          }
        } catch (t) {
          r = !0, i = t;
        } finally {
          try {
            o || null == a["return"] || a["return"]();
          } finally {
            if (r) throw i;
          }
        }

        return n;
      }(t, e) || function (t, e) {
        if (!t) return;
        if ("string" == typeof t) return He(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === n && t.constructor && (n = t.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(t);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return He(t, e);
      }(t, e) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function He(t, e) {
      (null == e || e > t.length) && (e = t.length);

      for (var n = 0, o = new Array(e); n < e; n++) {
        o[n] = t[n];
      }

      return o;
    }

    var $e = function $e(t) {
      var e = t.manager,
          n = t.style,
          o = t.config,
          r = t.t,
          i = t.lang,
          c = t.service,
          a = ze(B(0), 2),
          l = a[0],
          u = a[1],
          s = o.additionalClass,
          f = (o.embedded, o.stylePrefix);
      V(function () {
        var t = {
          update: function update() {
            return u(l + 1);
          }
        };
        return e.watch(t), function () {
          e.unwatch(t);
        };
      });
      var p = Pt(c.translations || {}, i, "zz", ["!", "title"]) || r(["!", c.name, "title?"]) || xt(c.name);
      return yt("div", {
        lang: i,
        className: (f || "klaro") + (void 0 !== s ? " " + s : "") + " cm-as-context-notice"
      }, yt("div", {
        className: "context-notice" + (void 0 !== n ? " cm-".concat(n) : "")
      }, yt("p", null, r(["contextualConsent", "description"], {
        title: p
      })), yt("p", {
        className: "cm-buttons"
      }, yt("button", {
        className: "cm-btn cm-btn-success",
        type: "button",
        onClick: function onClick() {
          e.updateConsent(c.name, !0), e.applyConsents(!1, !0), e.updateConsent(c.name, !1);
        }
      }, r(["contextualConsent", "acceptOnce"])), e.confirmed && yt("button", {
        className: "cm-btn cm-btn-success-var",
        type: "button",
        onClick: function onClick() {
          e.updateConsent(c.name, !0), e.saveAndApplyConsents();
        }
      }, r(["contextualConsent", "acceptAlways"])))));
    };

    n(96), n(130), n(97);

    function Be() {
      for (var t = document.cookie.split(";"), e = [], n = new RegExp("^\\s*([^=]+)\\s*=\\s*(.*?)$"), o = 0; o < t.length; o++) {
        var r = t[o],
            i = n.exec(r);
        null !== i && e.push({
          name: i[1],
          value: i[2]
        });
      }

      return e;
    }

    function Ge(t, e, n) {
      var o = t + "=; Max-Age=-99999999;";
      document.cookie = o, o += " path=" + (e || "/") + ";", document.cookie = o, void 0 !== n && (o += " domain=" + n + ";", document.cookie = o);
    }

    n(152), n(153);

    function Ve(t, e) {
      return function (t) {
        if (Array.isArray(t)) return t;
      }(t) || function (t, e) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
        var n = [],
            o = !0,
            r = !1,
            i = void 0;

        try {
          for (var c, a = t[Symbol.iterator](); !(o = (c = a.next()).done) && (n.push(c.value), !e || n.length !== e); o = !0) {
            ;
          }
        } catch (t) {
          r = !0, i = t;
        } finally {
          try {
            o || null == a["return"] || a["return"]();
          } finally {
            if (r) throw i;
          }
        }

        return n;
      }(t, e) || Ke(t, e) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function Ke(t, e) {
      if (t) {
        if ("string" == typeof t) return Xe(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Xe(t, e) : void 0;
      }
    }

    function Xe(t, e) {
      (null == e || e > t.length) && (e = t.length);

      for (var n = 0, o = new Array(e); n < e; n++) {
        o[n] = t[n];
      }

      return o;
    }

    function Ye(t) {
      for (var e = {}, n = 0; n < t.attributes.length; n++) {
        var o = t.attributes[n];
        o.name.startsWith("data-") && (e[o.name.slice(5)] = o.value);
      }

      return e;
    }

    function Je(t, e) {
      for (var n = Object.keys(t), o = 0; o < n.length; o++) {
        var r = n[o],
            i = t[r];
        e[r] !== i && e.setAttribute("data-" + r, i);
      }
    }

    function Qe(t) {
      var e,
          n = function (t, e) {
        var _n3;

        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
          if (Array.isArray(t) || (_n3 = Ke(t)) || e && t && "number" == typeof t.length) {
            _n3 && (t = _n3);

            var o = 0,
                r = function r() {};

            return {
              s: r,
              n: function n() {
                return o >= t.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: t[o++]
                };
              },
              e: function e(t) {
                throw t;
              },
              f: r
            };
          }

          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        var i,
            c = !0,
            a = !1;
        return {
          s: function s() {
            _n3 = t[Symbol.iterator]();
          },
          n: function n() {
            var t = _n3.next();

            return c = t.done, t;
          },
          e: function e(t) {
            a = !0, i = t;
          },
          f: function f() {
            try {
              c || null == _n3["return"] || _n3["return"]();
            } finally {
              if (a) throw i;
            }
          }
        };
      }(document.querySelectorAll("style[data-context=klaro-styles]"));

      try {
        for (n.s(); !(e = n.n()).done;) {
          var o = e.value,
              r = o.innerText;
          void 0 !== o.styleSheet && (r = o.styleSheet.cssText);

          for (var i = function i() {
            var t = Ve(a[c], 2),
                e = t[0],
                n = t[1],
                o = new RegExp("([a-z0-9-]+):[^;]+;[\\s\\n]*\\1:\\s*var\\(--" + e + ",\\s*[^\\)]+\\)", "g");
            r = r.replace(o, function (t, o) {
              return "".concat(o, ": ").concat(n, "; ").concat(o, ": var(--").concat(e, ", ").concat(n, ")");
            });
          }, c = 0, a = Object.entries(t); c < a.length; c++) {
            i();
          }

          var l = document.createElement("style");
          l.setAttribute("type", "text/css"), l.setAttribute("data-context", "klaro-styles"), void 0 !== l.styleSheet ? l.styleSheet.cssText = r : l.innerText = r, o.parentElement.appendChild(l), o.parentElement.removeChild(o);
        }
      } catch (t) {
        n.e(t);
      } finally {
        n.f();
      }
    }

    function Ze(t) {
      return (Ze = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      })(t);
    }

    function tn(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && en(t, e);
    }

    function en(t, e) {
      return (en = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      })(t, e);
    }

    function nn(t) {
      var e = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }();

      return function () {
        var n,
            o = rn(t);

        if (e) {
          var r = rn(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else n = o.apply(this, arguments);

        return on(this, n);
      };
    }

    function on(t, e) {
      return !e || "object" !== Ze(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }(t) : e;
    }

    function rn(t) {
      return (rn = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
    }

    function cn(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    function an(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }

    function ln(t, e, n) {
      return e && an(t.prototype, e), n && an(t, n), t;
    }

    var un = function () {
      function t() {
        cn(this, t), this.value = null;
      }

      return ln(t, [{
        key: "get",
        value: function value() {
          return this.value;
        }
      }, {
        key: "set",
        value: function value(t) {
          this.value = t;
        }
      }, {
        key: "delete",
        value: function value() {
          this.value = null;
        }
      }]), t;
    }(),
        sn = function () {
      function t(e) {
        cn(this, t), this.cookieName = e.storageName, this.cookieDomain = e.cookieDomain, this.cookieExpiresAfterDays = e.cookieExpiresAfterDays;
      }

      return ln(t, [{
        key: "get",
        value: function value() {
          var t = function (t) {
            for (var e = Be(), n = 0; n < e.length; n++) {
              if (e[n].name === t) return e[n];
            }

            return null;
          }(this.cookieName);

          return t ? t.value : null;
        }
      }, {
        key: "set",
        value: function value(t) {
          return function (t, e, n, o) {
            var r = "";

            if (n) {
              var i = new Date();
              i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3), r = "; expires=" + i.toUTCString();
            }

            void 0 !== o && (r += "; domain=" + o), document.cookie = t + "=" + (e || "") + r + "; path=/; SameSite=Lax";
          }(this.cookieName, t, this.cookieExpiresAfterDays, this.cookieDomain);
        }
      }, {
        key: "delete",
        value: function value() {
          return Ge(this.cookieName);
        }
      }]), t;
    }(),
        fn = function () {
      function t(e, n) {
        cn(this, t), this.key = e.storageName, this.handle = n;
      }

      return ln(t, [{
        key: "get",
        value: function value() {
          return this.handle.getItem(this.key);
        }
      }, {
        key: "getWithKey",
        value: function value(t) {
          return this.handle.getItem(t);
        }
      }, {
        key: "set",
        value: function value(t) {
          return this.handle.setItem(this.key, t);
        }
      }, {
        key: "setWithKey",
        value: function value(t, e) {
          return this.handle.setItem(t, e);
        }
      }, {
        key: "delete",
        value: function value() {
          return this.handle.removeItem(this.key);
        }
      }, {
        key: "deleteWithKey",
        value: function value(t) {
          return this.handle.removeItem(t);
        }
      }]), t;
    }(),
        pn = function (t) {
      tn(n, t);
      var e = nn(n);

      function n(t) {
        return cn(this, n), e.call(this, t, localStorage);
      }

      return n;
    }(fn),
        dn = function (t) {
      tn(n, t);
      var e = nn(n);

      function n(t) {
        return cn(this, n), e.call(this, t, sessionStorage);
      }

      return n;
    }(fn),
        mn = {
      cookie: sn,
      test: un,
      localStorage: pn,
      sessionStorage: dn
    };

    function vn(t, e) {
      var _n4;

      if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
        if (Array.isArray(t) || (_n4 = yn(t)) || e && t && "number" == typeof t.length) {
          _n4 && (t = _n4);

          var o = 0,
              r = function r() {};

          return {
            s: r,
            n: function n() {
              return o >= t.length ? {
                done: !0
              } : {
                done: !1,
                value: t[o++]
              };
            },
            e: function e(t) {
              throw t;
            },
            f: r
          };
        }

        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      var i,
          c = !0,
          a = !1;
      return {
        s: function s() {
          _n4 = t[Symbol.iterator]();
        },
        n: function n() {
          var t = _n4.next();

          return c = t.done, t;
        },
        e: function e(t) {
          a = !0, i = t;
        },
        f: function f() {
          try {
            c || null == _n4["return"] || _n4["return"]();
          } finally {
            if (a) throw i;
          }
        }
      };
    }

    function hn(t, e) {
      return function (t) {
        if (Array.isArray(t)) return t;
      }(t) || function (t, e) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
        var n = [],
            o = !0,
            r = !1,
            i = void 0;

        try {
          for (var c, a = t[Symbol.iterator](); !(o = (c = a.next()).done) && (n.push(c.value), !e || n.length !== e); o = !0) {
            ;
          }
        } catch (t) {
          r = !0, i = t;
        } finally {
          try {
            o || null == a["return"] || a["return"]();
          } finally {
            if (r) throw i;
          }
        }

        return n;
      }(t, e) || yn(t, e) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function yn(t, e) {
      if (t) {
        if ("string" == typeof t) return bn(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? bn(t, e) : void 0;
      }
    }

    function bn(t, e) {
      (null == e || e > t.length) && (e = t.length);

      for (var n = 0, o = new Array(e); n < e; n++) {
        o[n] = t[n];
      }

      return o;
    }

    function gn(t, e) {
      var n = Object.keys(t);

      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        e && (o = o.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), n.push.apply(n, o);
      }

      return n;
    }

    function kn(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? gn(Object(n), !0).forEach(function (e) {
          _n(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : gn(Object(n)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
      }

      return t;
    }

    function _n(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }

    function xn(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }

    var wn = function () {
      function t(e, n, o) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.config = e, this.store = void 0 !== n ? n : new mn[this.storageMethod](this), void 0 === this.store && (this.store = mn.cookie), this.auxiliaryStore = void 0 !== o ? o : new dn(this), this.consents = this.defaultConsents, this.confirmed = !1, this.changed = !1, this.states = {}, this.initialized = {}, this.executedOnce = {}, this.watchers = new Set([]), this.loadConsents(), this.applyConsents(), this.savedConsents = kn({}, this.consents);
      }

      var e, n, o;
      return e = t, (n = [{
        key: "watch",
        value: function value(t) {
          this.watchers.has(t) || this.watchers.add(t);
        }
      }, {
        key: "unwatch",
        value: function value(t) {
          this.watchers.has(t) && this.watchers["delete"](t);
        }
      }, {
        key: "notify",
        value: function value(t, e) {
          var n = this;
          this.watchers.forEach(function (o) {
            o.update(n, t, e);
          });
        }
      }, {
        key: "getService",
        value: function value(t) {
          var e = this.config.services.filter(function (e) {
            return e.name === t;
          });
          if (e.length > 0) return e[0];
        }
      }, {
        key: "getDefaultConsent",
        value: function value(t) {
          var e = t["default"] || t.required;
          return void 0 === e && (e = this.config["default"]), void 0 === e && (e = !1), e;
        }
      }, {
        key: "changeAll",
        value: function value(t) {
          var e = this,
              n = 0;
          return this.config.services.map(function (o) {
            !0 !== o.contextualConsentOnly && (o.required || e.config.required || t ? e.updateConsent(o.name, !0) && n++ : e.updateConsent(o.name, !1) && n++);
          }), n;
        }
      }, {
        key: "updateConsent",
        value: function value(t, e) {
          var n = (this.consents[t] || !1) !== e;
          return this.consents[t] = e, this.notify("consents", this.consents), n;
        }
      }, {
        key: "restoreSavedConsents",
        value: function value() {
          this.consents = kn({}, this.savedConsents), this.notify("consents", this.consents);
        }
      }, {
        key: "resetConsents",
        value: function value() {
          this.consents = this.defaultConsents, this.states = {}, this.confirmed = !1, this.applyConsents(), this.savedConsents = kn({}, this.consents), this.store["delete"](), this.notify("consents", this.consents);
        }
      }, {
        key: "getConsent",
        value: function value(t) {
          return this.consents[t] || !1;
        }
      }, {
        key: "loadConsents",
        value: function value() {
          var t = this.store.get();
          return null !== t && (this.consents = JSON.parse(decodeURIComponent(t)), this._checkConsents(), this.notify("consents", this.consents)), this.consents;
        }
      }, {
        key: "saveAndApplyConsents",
        value: function value(t) {
          this.saveConsents(t), this.applyConsents();
        }
      }, {
        key: "changedConsents",
        value: function value() {
          for (var t = {}, e = 0, n = Object.entries(this.consents); e < n.length; e++) {
            var o = hn(n[e], 2),
                r = o[0],
                i = o[1];
            this.savedConsents[r] !== i && (t[r] = i);
          }

          return t;
        }
      }, {
        key: "saveConsents",
        value: function value(t) {
          var e = encodeURIComponent(JSON.stringify(this.consents));
          this.store.set(e), this.confirmed = !0, this.changed = !1;
          var n = this.changedConsents();
          this.savedConsents = kn({}, this.consents), this.notify("saveConsents", {
            changes: n,
            consents: this.consents,
            type: t
          });
        }
      }, {
        key: "applyConsents",
        value: function value(t, e) {
          function n(t, e) {
            if (void 0 !== t) return ("function" == typeof t ? t : new Function("opts", t))(e);
          }

          for (var o = 0, r = 0; r < this.config.services.length; r++) {
            var i = this.config.services[r],
                c = i.vars || {},
                a = {
              service: i,
              config: this.config,
              vars: c
            };
            this.initialized[i.name] || (this.initialized[i.name] = !0, n(i.onInit, a));
          }

          for (var l = 0; l < this.config.services.length; l++) {
            var u = this.config.services[l],
                s = this.states[u.name],
                f = u.vars || {},
                p = void 0 !== u.optOut ? u.optOut : this.config.optOut || !1,
                d = void 0 !== u.required ? u.required : this.config.required || !1,
                m = this.confirmed || p || t || e,
                v = this.getConsent(u.name) && m || d,
                h = {
              service: u,
              config: this.config,
              vars: f,
              consents: this.consents,
              confirmed: this.confirmed
            };
            s !== v && o++, t || (n(v ? u.onAccept : u.onDecline, h), this.updateServiceElements(u, v), this.updateServiceCookies(u, v), void 0 !== u.callback && u.callback(v, u), void 0 !== this.config.callback && this.config.callback(v, u), this.states[u.name] = v);
          }

          return this.notify("applyConsents", o), o;
        }
      }, {
        key: "updateServiceElements",
        value: function value(t, e) {
          if (e) {
            if (t.onlyOnce && this.executedOnce[t.name]) return;
            this.executedOnce[t.name] = !0;
          }

          for (var n = document.querySelectorAll("[data-name='" + t.name + "']"), o = 0; o < n.length; o++) {
            var r = n[o],
                i = r.parentElement,
                c = Ye(r),
                a = c.type,
                l = c.src,
                u = c.href,
                s = ["href", "src"];
            if ("placeholder" !== a) {
              if ("IFRAME" === r.tagName) {
                if (e && r.src === l) {
                  console.debug("Skipping ".concat(r.tagName, " for service ").concat(t.name, ", as it already has the correct type..."));
                  continue;
                }

                var f,
                    p = document.createElement(r.tagName),
                    d = vn(r.attributes);

                try {
                  for (d.s(); !(f = d.n()).done;) {
                    var m = f.value;
                    p.setAttribute(m.name, m.value);
                  }
                } catch (t) {
                  d.e(t);
                } finally {
                  d.f();
                }

                p.innerText = r.innerText, p.text = r.text, e ? (p.style.display = c["original-display"] || "block", void 0 !== c.src && (p.src = c.src)) : (p.src = "", p.setAttribute("data-original-display", c["original-display"] || r.style.display), p.style.display = "none"), i.insertBefore(p, r), i.removeChild(r);
              } else if ("SCRIPT" === r.tagName || "LINK" === r.tagName) {
                if (e && r.type === a && r.src === l) {
                  console.debug("Skipping ".concat(r.tagName, " for service ").concat(t.name, ", as it already has the correct type or src..."));
                  continue;
                }

                var v,
                    h = document.createElement(r.tagName),
                    y = vn(r.attributes);

                try {
                  for (y.s(); !(v = y.n()).done;) {
                    var b = v.value;
                    h.setAttribute(b.name, b.value);
                  }
                } catch (t) {
                  y.e(t);
                } finally {
                  y.f();
                }

                h.innerText = r.innerText, h.text = r.text, e ? (h.type = a, void 0 !== l && (h.src = l), void 0 !== u && (h.href = u)) : h.type = "text/plain", i.insertBefore(h, r), i.removeChild(r);
              } else {
                if (e) {
                  var g,
                      k = vn(s);

                  try {
                    for (k.s(); !(g = k.n()).done;) {
                      var _ = g.value,
                          x = c[_];
                      void 0 !== x && (void 0 === c["original-" + _] && (c["original-" + _] = r[_]), r[_] = x);
                    }
                  } catch (t) {
                    k.e(t);
                  } finally {
                    k.f();
                  }

                  void 0 !== c.title && (r.title = c.title), void 0 !== c["original-display"] && (r.style.display = c["original-display"]);
                } else {
                  void 0 !== c.title && r.removeAttribute("title"), "true" === c.hide && (void 0 === c["original-display"] && (c["original-display"] = r.style.display), r.style.display = "none");
                  var w,
                      S = vn(s);

                  try {
                    for (S.s(); !(w = S.n()).done;) {
                      var O = w.value;
                      void 0 !== c[O] && void 0 !== c["original-" + O] && (r[O] = c["original-" + O]);
                    }
                  } catch (t) {
                    S.e(t);
                  } finally {
                    S.f();
                  }
                }

                Je(c, r);
              }
            } else e ? (r.style.display = "none", c["original-display"] = r.style.display) : r.style.display = c["original-display"] || "block";
          }
        }
      }, {
        key: "updateServiceCookies",
        value: function value(t, e) {
          if (!e && void 0 !== t.cookies && t.cookies.length > 0) for (var n = Be(), o = 0; o < t.cookies.length; o++) {
            var r = t.cookies[o],
                i = void 0,
                c = void 0;

            if (r instanceof Array) {
              var a = hn(r, 3);
              r = a[0], i = a[1], c = a[2];
            } else if (r instanceof Object && !(r instanceof RegExp)) {
              var l = r;
              r = l.pattern, i = l.path, c = l.domain;
            }

            if (void 0 !== r) {
              r instanceof RegExp || (r = r.startsWith("^") ? new RegExp(r) : new RegExp("^" + r.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&") + "$"));

              for (var u = 0; u < n.length; u++) {
                var s = n[u];
                null !== r.exec(s.name) && (console.debug("Deleting cookie:", s.name, "Matched pattern:", r, "Path:", i, "Domain:", c), Ge(s.name, i, c), void 0 === c && Ge(s.name, i, "." + window.location.hostname));
              }
            }
          }
        }
      }, {
        key: "_checkConsents",
        value: function value() {
          for (var t = !0, e = new Set(this.config.services.map(function (t) {
            return t.name;
          })), n = new Set(Object.keys(this.consents)), o = 0, r = Object.keys(this.consents); o < r.length; o++) {
            var i = r[o];
            e.has(i) || delete this.consents[i];
          }

          var c,
              a = vn(this.config.services);

          try {
            for (a.s(); !(c = a.n()).done;) {
              var l = c.value;
              n.has(l.name) || (this.consents[l.name] = this.getDefaultConsent(l), t = !1);
            }
          } catch (t) {
            a.e(t);
          } finally {
            a.f();
          }

          this.confirmed = t, t || (this.changed = !0);
        }
      }, {
        key: "storageMethod",
        get: function get() {
          return this.config.storageMethod || "cookie";
        }
      }, {
        key: "storageName",
        get: function get() {
          return this.config.storageName || this.config.cookieName || "klaro";
        }
      }, {
        key: "cookieDomain",
        get: function get() {
          return this.config.cookieDomain || void 0;
        }
      }, {
        key: "cookieExpiresAfterDays",
        get: function get() {
          return this.config.cookieExpiresAfterDays || 120;
        }
      }, {
        key: "defaultConsents",
        get: function get() {
          for (var t = {}, e = 0; e < this.config.services.length; e++) {
            var n = this.config.services[e];
            t[n.name] = this.getDefaultConsent(n);
          }

          return t;
        }
      }]) && xn(e.prototype, n), o && xn(e, o), t;
    }();

    n(154);

    function Sn(t, e) {
      var n = Object.keys(t);

      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        e && (o = o.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), n.push.apply(n, o);
      }

      return n;
    }

    function On(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? Sn(Object(n), !0).forEach(function (e) {
          jn(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Sn(Object(n)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
      }

      return t;
    }

    function jn(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }

    function En(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }

    var An = function () {
      function t(e, n, o) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.url = e, this.id = n, this.opts = Object.assign({}, o);
      }

      var e, n, o;
      return e = t, (n = [{
        key: "getLocationData",
        value: function value(t) {
          var e = t.records || {};
          return {
            pathname: void 0 === e.savePathname || e.savePathname ? location.pathname : void 0,
            port: "" !== location.port ? parseInt(location.port) : 0,
            hostname: location.hostname,
            protocol: location.protocol.slice(0, location.protocol.length - 1)
          };
        }
      }, {
        key: "getUserData",
        value: function value() {
          return {
            client_version: uo(),
            client_name: "klaro:web"
          };
        }
      }, {
        key: "getBaseConsentData",
        value: function value(t) {
          return {
            location_data: this.getLocationData(t),
            user_data: this.getUserData(t)
          };
        }
      }, {
        key: "update",
        value: function value(t, e, n) {
          if ("saveConsents" === e) {
            if ("save" === n.type && 0 === Object.keys(n.changes).length) return;
            var o = On(On({}, this.getBaseConsentData(t.config)), {}, {
              consent_data: {
                consents: n.consents,
                changes: "save" === n.type ? n.changes : void 0,
                type: n.type,
                config: t.config.id
              }
            });
            this.submitConsentData(o);
          } else if ("showNotice" === e) {
            var r = On(On({}, this.getBaseConsentData(n.config)), {}, {
              consent_data: {
                consents: {},
                changes: {},
                type: "show",
                config: n.config.id
              }
            });
            this.submitConsentData(r);
          }
        }
      }, {
        key: "apiRequest",
        value: function value(t, e, n, o) {
          var r = this;
          return new Promise(function (i, c) {
            var a,
                l,
                u = new XMLHttpRequest();
            u.addEventListener("load", function () {
              var t = JSON.parse(u.response);
              u.status < 200 || u.status >= 300 ? (t.status = u.status, c(t)) : i(t);
            }), u.addEventListener("error", function () {
              c({
                status: 0,
                xhr: u
              });
            }), void 0 !== n && ("GET" === t ? e += "?" + (l = n, "?" + Object.keys(l).map(function (t) {
              return t + "=" + encodeURIComponent(l[t]);
            }).join("&")) : a = JSON.stringify(n)), u.open(t, r.url + e), void 0 !== a && u.setRequestHeader("Content-Type", o || "application/json;charset=UTF-8"), u.send(a);
          });
        }
      }, {
        key: "submitConsentData",
        value: function value(t) {
          return this.apiRequest("POST", "/v1/privacy-managers/" + this.id + "/submit", t, "text/plain;charset=UTF-8");
        }
      }, {
        key: "loadConfig",
        value: function value(t) {
          return this.apiRequest("GET", "/v1/privacy-managers/" + this.id + "/config.json?name=" + t + (this.opts.testing ? "&testing=true" : ""));
        }
      }, {
        key: "loadConfigs",
        value: function value() {
          return this.apiRequest("GET", "/v1/privacy-managers/" + this.id + "/configs.json" + (this.opts.testing ? "&testing=true" : ""));
        }
      }]) && En(e.prototype, n), o && En(e, o), t;
    }();

    function Pn(t, e) {
      return function (t) {
        if (Array.isArray(t)) return t;
      }(t) || function (t, e) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
        var n = [],
            o = !0,
            r = !1,
            i = void 0;

        try {
          for (var c, a = t[Symbol.iterator](); !(o = (c = a.next()).done) && (n.push(c.value), !e || n.length !== e); o = !0) {
            ;
          }
        } catch (t) {
          r = !0, i = t;
        } finally {
          try {
            o || null == a["return"] || a["return"]();
          } finally {
            if (r) throw i;
          }
        }

        return n;
      }(t, e) || Cn(t, e) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function Cn(t, e) {
      if (t) {
        if ("string" == typeof t) return Rn(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Rn(t, e) : void 0;
      }
    }

    function Rn(t, e) {
      (null == e || e > t.length) && (e = t.length);

      for (var n = 0, o = new Array(e); n < e; n++) {
        o[n] = t[n];
      }

      return o;
    }

    function Tn(t, e, n) {
      if (void 0 !== t.styling) {
        var o = Object.assign({}, t.styling);

        if (void 0 !== o.theme) {
          var r = o.theme;
          r instanceof Array || (r = [r]), o = {};

          var i,
              c = function (t, e) {
            var _n5;

            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
              if (Array.isArray(t) || (_n5 = Cn(t)) || e && t && "number" == typeof t.length) {
                _n5 && (t = _n5);

                var o = 0,
                    r = function r() {};

                return {
                  s: r,
                  n: function n() {
                    return o >= t.length ? {
                      done: !0
                    } : {
                      done: !1,
                      value: t[o++]
                    };
                  },
                  e: function e(t) {
                    throw t;
                  },
                  f: r
                };
              }

              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }

            var i,
                c = !0,
                a = !1;
            return {
              s: function s() {
                _n5 = t[Symbol.iterator]();
              },
              n: function n() {
                var t = _n5.next();

                return c = t.done, t;
              },
              e: function e(t) {
                a = !0, i = t;
              },
              f: function f() {
                try {
                  c || null == _n5["return"] || _n5["return"]();
                } finally {
                  if (a) throw i;
                }
              }
            };
          }(r);

          try {
            for (c.s(); !(i = c.n()).done;) {
              var a = e[i.value];
              if (void 0 !== a) for (var l = 0, u = Object.entries(a); l < u.length; l++) {
                var s = Pn(u[l], 2),
                    f = s[0],
                    p = s[1];
                f.startsWith("_") || (o[f] = p);
              }
            }
          } catch (t) {
            c.e(t);
          } finally {
            c.f();
          }

          for (var d = 0, m = Object.entries(t.styling); d < m.length; d++) {
            var v = Pn(m[d], 2),
                h = v[0],
                y = v[1];
            "theme" !== h && (o[h] = y);
          }
        }

        void 0 === n && (n = document.documentElement);

        for (var b = 0, g = Object.entries(o); b < g.length; b++) {
          var k = Pn(g[b], 2),
              _ = k[0],
              x = k[1];
          n.style.setProperty("--" + _, x);
        }

        window.document.documentMode && n === document.documentElement && Qe(o);
      }
    }

    function Nn(t, e) {
      var _n6;

      if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
        if (Array.isArray(t) || (_n6 = function (t, e) {
          if (!t) return;
          if ("string" == typeof t) return In(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(t);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return In(t, e);
        }(t)) || e && t && "number" == typeof t.length) {
          _n6 && (t = _n6);

          var o = 0,
              r = function r() {};

          return {
            s: r,
            n: function n() {
              return o >= t.length ? {
                done: !0
              } : {
                done: !1,
                value: t[o++]
              };
            },
            e: function e(t) {
              throw t;
            },
            f: r
          };
        }

        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      var i,
          c = !0,
          a = !1;
      return {
        s: function s() {
          _n6 = t[Symbol.iterator]();
        },
        n: function n() {
          var t = _n6.next();

          return c = t.done, t;
        },
        e: function e(t) {
          a = !0, i = t;
        },
        f: function f() {
          try {
            c || null == _n6["return"] || _n6["return"]();
          } finally {
            if (a) throw i;
          }
        }
      };
    }

    function In(t, e) {
      (null == e || e > t.length) && (e = t.length);

      for (var n = 0, o = new Array(e); n < e; n++) {
        o[n] = t[n];
      }

      return o;
    }

    function Dn(t, e, n, o) {
      var r = function r(t, e, n) {
        if (n instanceof Map) {
          var o = new Map([]);
          Dn(o, n, !0, !1), t.set(e, o);
        } else t.set(e, n);
      };

      if (!(e instanceof Map && t instanceof Map)) throw new Error("Parameters are not maps!");
      void 0 === n && (n = !0), void 0 === o && (o = !1), o && (t = new t.constructor(t));
      var i,
          c = Nn(e.keys());

      try {
        for (c.s(); !(i = c.n()).done;) {
          var a = i.value,
              l = e.get(a),
              u = t.get(a);
          if (t.has(a)) {
            if (l instanceof Map && u instanceof Map) t.set(a, Dn(u, l, n, o));else {
              if (!n) continue;
              r(t, a, l);
            }
          } else r(t, a, l);
        }
      } catch (t) {
        c.e(t);
      } finally {
        c.f();
      }

      return t;
    }

    var Mn,
        Ln = {
      top: {
        _meta: {
          incompatibleWith: ["bottom"]
        },
        "notice-top": "20px",
        "notice-bottom": "auto"
      },
      bottom: {
        _meta: {
          incompatibleWith: ["top"]
        },
        "notice-bottom": "20px",
        "notice-top": "auto"
      },
      left: {
        _meta: {
          incompatibleWith: ["wide"]
        },
        "notice-left": "20px",
        "notice-right": "auto"
      },
      right: {
        _meta: {
          incompatibleWith: ["wide"]
        },
        "notice-right": "20px",
        "notice-left": "auto"
      },
      wide: {
        "notice-left": "20px",
        "notice-right": "auto",
        "notice-max-width": "calc(100vw - 60px)",
        "notice-position": "fixed"
      },
      light: {
        "button-text-color": "#fff",
        dark1: "#eee",
        dark2: "#777",
        dark3: "#555",
        light1: "#444",
        light2: "#666",
        light3: "#111",
        green3: "#f00"
      }
    };
    n(160);

    function Un(t, e) {
      var n = Object.keys(t);

      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        e && (o = o.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), n.push.apply(n, o);
      }

      return n;
    }

    function qn(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? Un(Object(n), !0).forEach(function (e) {
          Fn(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Un(Object(n)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
      }

      return t;
    }

    function Fn(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }

    function Wn(t) {
      return function (t) {
        if (Array.isArray(t)) return $n(t);
      }(t) || function (t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
      }(t) || Hn(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function zn(t, e) {
      var _n7;

      if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
        if (Array.isArray(t) || (_n7 = Hn(t)) || e && t && "number" == typeof t.length) {
          _n7 && (t = _n7);

          var o = 0,
              r = function r() {};

          return {
            s: r,
            n: function n() {
              return o >= t.length ? {
                done: !0
              } : {
                done: !1,
                value: t[o++]
              };
            },
            e: function e(t) {
              throw t;
            },
            f: r
          };
        }

        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      var i,
          c = !0,
          a = !1;
      return {
        s: function s() {
          _n7 = t[Symbol.iterator]();
        },
        n: function n() {
          var t = _n7.next();

          return c = t.done, t;
        },
        e: function e(t) {
          a = !0, i = t;
        },
        f: function f() {
          try {
            c || null == _n7["return"] || _n7["return"]();
          } finally {
            if (a) throw i;
          }
        }
      };
    }

    function Hn(t, e) {
      if (t) {
        if ("string" == typeof t) return $n(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $n(t, e) : void 0;
      }
    }

    function $n(t, e) {
      (null == e || e > t.length) && (e = t.length);

      for (var n = 0, o = new Array(e); n < e; n++) {
        o[n] = t[n];
      }

      return o;
    }

    var Bn = new Map([]),
        Gn = {},
        Vn = {};

    function Kn(t, e) {
      return (t.elementID || "klaro") + (e ? "-ide" : "");
    }

    function Xn(t, e) {
      var n = Kn(t, e),
          o = document.getElementById(n);
      return null === o && ((o = document.createElement("div")).id = n, document.body.appendChild(o)), o;
    }

    function Yn(t, e) {
      if (void 0 === Gn[t] ? Gn[t] = [e] : Gn[t].push(e), void 0 !== Vn[t]) {
        var n,
            o = zn(Vn[t]);

        try {
          for (o.s(); !(n = o.n()).done;) {
            var r = n.value;
            if (!1 === e.apply(void 0, Wn(r))) break;
          }
        } catch (t) {
          o.e(t);
        } finally {
          o.f();
        }
      }
    }

    function Jn(t) {
      for (var e = Gn[t], n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) {
        o[r - 1] = arguments[r];
      }

      if (void 0 === Vn[t] ? Vn[t] = [o] : Vn[t].push(o), void 0 !== e) {
        var i,
            c = zn(e);

        try {
          for (c.s(); !(i = c.n()).done;) {
            var a = i.value;
            if (!0 === a.apply(void 0, o)) return !0;
          }
        } catch (t) {
          c.e(t);
        } finally {
          c.f();
        }
      }
    }

    function Qn(t) {
      var e = new Map([]);
      return Dn(e, Bn), Dn(e, function t(e) {
        for (var n = new Map([]), o = 0, r = Object.keys(e); o < r.length; o++) {
          var i = r[o],
              c = e[i];
          "string" == typeof i && ("string" == typeof c || null === c ? n.set(i, c) : n.set(i, t(c)));
        }

        return n;
      }(t.translations || {})), e;
    }

    var Zn = 1;

    function to(t, e) {
      if (void 0 !== t) {
        e = e || {}, Jn("render", t = oo(t), e);
        var n = 0;
        e.show && (n = Zn++);
        var o = Xn(t),
            r = lo(t);
        void 0 !== e.api && r.watch(e.api), Tn(t, Ln);

        var i = Et(t.lang),
            c = Qn(t),
            a = function a() {
          for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++) {
            n[o] = arguments[o];
          }

          return Pt.apply(void 0, [c, i, t.fallbackLang || "zz"].concat(n));
        },
            l = pt(yt(We, {
          t: a,
          lang: i,
          manager: r,
          config: t,
          testing: e.testing,
          modal: e.modal,
          api: e.api,
          show: n
        }), o);

        return eo(r, a, i, t, e), l;
      }
    }

    function eo(t, e, n, o, r) {
      var i,
          c = [],
          a = zn(o.services);

      try {
        for (a.s(); !(i = a.n()).done;) {
          var l,
              u = i.value,
              s = t.getConsent(u.name),
              f = zn(document.querySelectorAll("[data-name='" + u.name + "']"));

          try {
            for (f.s(); !(l = f.n()).done;) {
              var p = l.value,
                  d = Ye(p);

              if ("placeholder" !== d.type && ("IFRAME" === p.tagName || "DIV" === p.tagName)) {
                var m = p.previousElementSibling;

                if (null !== m) {
                  var v = Ye(m);
                  "placeholder" === v.type && v.name === u.name || (m = null);
                }

                if (null === m) {
                  (m = document.createElement("DIV")).style.maxWidth = p.width + "px", m.style.height = p.height + "px", Je({
                    type: "placeholder",
                    name: u.name
                  }, m), s && (m.style.display = "none"), p.parentElement.insertBefore(m, p);
                  var h = pt(yt($e, {
                    t: e,
                    lang: n,
                    manager: t,
                    config: o,
                    service: u,
                    style: d.style,
                    testing: r.testing,
                    api: r.api
                  }), m);
                  c.push(h);
                }

                "IFRAME" === p.tagName && (d.src = p.src), void 0 === d["original-display"] && (d["original-display"] = p.style.display), Je(d, p), s || (p.src = "", p.style.display = "none");
              }
            }
          } catch (t) {
            f.e(t);
          } finally {
            f.f();
          }
        }
      } catch (t) {
        a.e(t);
      } finally {
        a.f();
      }

      return c;
    }

    function no(t) {
      /complete|interactive|loaded/.test(document.readyState) ? t() : window.addEventListener("DOMContentLoaded", t);
    }

    function oo(t) {
      var e = qn({}, t);
      return 2 === e.version || (void 0 !== e.apps && void 0 === e.services && (e.services = e.apps, console.warn("Warning, your configuration file is outdated. Please change `apps` to `services`"), delete e.apps), void 0 !== e.translations && void 0 !== e.translations.apps && void 0 === e.services && (e.translations.services = e.translations.apps, console.warn("Warning, your configuration file is outdated. Please change `apps` to `services` in the `translations` key"), delete e.translations.apps)), e;
    }

    function ro(t) {
      if (void 0 !== window) {
        var e = function (t) {
          if (null !== document.currentScript && void 0 !== document.currentScript) return document.currentScript;

          for (var e = document.getElementsByTagName("script"), n = 0; n < e.length; n++) {
            var o = e[n];
            if (o.src.includes(t)) return o;
          }

          return null;
        }("klaro"),
            n = new Map(decodeURI(location.hash.slice(1)).split("&").map(function (t) {
          return t.split("=");
        }).map(function (t) {
          return 1 === t.length ? [t[0], !0] : t;
        })),
            o = function o(t) {
          var e = qn(qn({}, t), {}, {
            testing: n.get("klaro-testing")
          });
          Mn.noAutoLoad || Mn.testing && !e.testing || to(Mn, e);
        };

        if (void 0 !== t) Mn = t, no(function () {
          return o({});
        });else if (null !== e) {
          var r = function (t) {
            var e = t.getAttribute("data-klaro-id");
            if (null !== e) return e;
            var n = /.*\/privacy-managers\/([a-f0-9]+)\/klaro.*\.js/.exec(t.src);
            return null !== n ? n[1] : null;
          }(e),
              i = function (t) {
            var e = t.getAttribute("data-klaro-api-url");
            if (null !== e) return e;
            var n = /(http(?:s)?:\/\/[^/]+)\/v1\/privacy-managers\/([a-f0-9]+)\/klaro.*\.js/.exec(t.src);
            return null !== n ? n[1] : null;
          }(e),
              c = function (t, e) {
            if (t.has("klaro-config")) return t.get("klaro-config");
            var n = e.getAttribute("data-klaro-config");
            return null !== n ? n : "default";
          }(n, e);

          if (null !== r) {
            var a = new An(i, r, {
              testing: n.get("klaro-testing")
            });
            a.loadConfig(c).then(function (t) {
              !0 !== Jn("apiConfigsLoaded", [t], a) && (Mn = t, no(function () {
                return o({
                  api: a
                });
              }));
            })["catch"](function (t) {
              console.error(t, "cannot load Klaro configs"), Jn("apiConfigsFailed", t);
            });
          } else {
            var l = e.getAttribute("data-klaro-config") || "klaroConfig";
            void 0 !== (Mn = window[l]) && no(function () {
              return o({});
            });
          }
        }
        n.has("klaro-ide") && function (t) {
          var e = /^(.*)(\/[^/]+)$/.exec(t.src)[1] || "",
              n = document.createElement("script");
          n.src = "" !== e ? e + "/ide.js" : "ide.js", n.type = "application/javascript";
          var o,
              r = zn(n.attributes);

          try {
            for (r.s(); !(o = r.n()).done;) {
              var i = o.value;
              n.setAttribute(i.name, i.value);
            }
          } catch (t) {
            r.e(t);
          } finally {
            r.f();
          }

          document.head.appendChild(n);
        }(e);
      }
    }

    function io(t, e, n) {
      return to(t = t || Mn, {
        show: !0,
        modal: e,
        api: n
      }), !1;
    }

    var co = {};

    function ao() {
      for (var t in Object.keys(co)) {
        delete co[t];
      }
    }

    function lo(t) {
      var e = (t = t || Mn).storageName || t.cookieName || "default";
      return void 0 === co[e] && (co[e] = new wn(oo(t))), co[e];
    }

    function uo() {
      return "v" === "v0.7.12"[0] ? "v0.7.12".slice(1) : "v0.7.12";
    }

    ro();
  }]);
});

/***/ }),

/***/ "./src/forum/addAds.js":
/*!*****************************!*\
  !*** ./src/forum/addAds.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/PostStream */ "flarum/forum/components/PostStream");
/* harmony import */ var flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'view', function (component) {
    if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('fibraclick.ads.show') !== '1') {
      return;
    }

    var advertisement = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('fibraclick.ads.betweenPosts') || 'Pubblicità.';

    if (advertisement && component.children.length) {
      var between = parseInt(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('fibraclick.ads.postsInterval') || 5);
      var postIds = this.discussion.postIds();
      var postsAfterWhichPlaceAds = [];

      for (var i = 0; i <= postIds.length - 2; i++) {
        if (i % between === 0) {
          postsAfterWhichPlaceAds.push(postIds[i]);
        }
      } // Insert an inside every n comment


      component.children.forEach(function (post) {
        if (postsAfterWhichPlaceAds.includes(post.attrs['data-id'])) {
          post.children.push(m('div.FibraClickAds-fake-poststream-item', m('article.Post.EventPost', m('div.FibraClickAds-between-posts.EventPost-info', m.trust(advertisement)))));
        }
      });
    }
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'oncreate', evalAdsJs);
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'onupdate', evalAdsJs);
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'sidebarItems', function (items) {
    var advertisement = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('fibraclick.ads.sidebar');

    if (advertisement && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // TODO: this doesn't work, no js is run
      items.add('fibraclick-ad', m.trust(advertisement));
    }
  });
});

function evalAdsJs() {
  this.$('.FibraClickAds-between-posts script').each(function () {
    if (!$(this).data('executed')) {
      eval.call(window, $(this).text());
      $(this).data('executed', true);
    }
  });
}

/***/ }),

/***/ "./src/forum/addAnalyticsCompat.js":
/*!*****************************************!*\
  !*** ./src/forum/addAnalyticsCompat.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Page */ "flarum/common/components/Page");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a, 'mount', function (vnode) {
    var trackingCode = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('fibraclick.analytics.trackingCode');

    if (trackingCode && typeof gtag != 'undefined') {
      gtag('config', trackingCode, {
        'custom_map': {
          'dimension1': 'isLoggedIn'
        }
      });
      gtag('event', 'isLoggedInEvent', {
        'isLoggedIn': !!flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user
      });
    }
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'oninit', function (vnode) {
    var trackingCode = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('fibraclick.analytics.trackingCode');

    if (trackingCode && typeof gtag != 'undefined') {
      gtag('config', trackingCode, {
        page_path: m.route.get()
      });
    }
  });
});

/***/ }),

/***/ "./src/forum/addCookieConsent.js":
/*!***************************************!*\
  !*** ./src/forum/addCookieConsent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var klaro_dist_klaro_no_translations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! klaro/dist/klaro-no-translations */ "./node_modules/klaro/dist/klaro-no-translations.js");
/* harmony import */ var klaro_dist_klaro_no_translations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(klaro_dist_klaro_no_translations__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a, 'mount', function () {
    window.klaro = klaro_dist_klaro_no_translations__WEBPACK_IMPORTED_MODULE_2__;
    var isPage = window.location.pathname.startsWith('/p/');
    klaro_dist_klaro_no_translations__WEBPACK_IMPORTED_MODULE_2__["setup"]({
      hideDeclineAll: true,
      acceptAll: true,
      groupByPurpose: false,
      noticeAsModal: !isPage,
      services: [{
        name: 'analytics',
        title: 'Analisi del traffico',
        purposes: ['Statistiche']
      }, {
        name: 'ads-basic',
        title: 'Annunci di base',
        purposes: ['Pubblicità'],
        callback: function callback(consent) {
          if (consent && window.resumeBasicAds) {
            window.resumeBasicAds.call();
          }
        }
      }, {
        name: 'ads-personalized',
        title: 'Annunci personalizzati',
        purposes: ['Pubblicità'],
        callback: function callback(consent) {
          if (consent && window.resumePersonalizedAds) {
            window.resumePersonalizedAds.call();
          }
        }
      }],
      translations: {
        it: {
          privacyPolicyUrl: '/p/1-privacy',
          poweredBy: 'Realizzato con Klaro',
          save: 'Salva preferenze',
          acceptAll: 'Accetta tutto',
          acceptSelected: 'Accetta selezionati',
          ok: 'Accetta',
          consentModal: {
            title: 'Consensi privacy',
            description: 'Qua puoi personalizzare i consensi per l\'uso dei cookie su questo sito web.'
          },
          consentNotice: {
            learnMore: 'Personalizza',
            description: 'Ciao! Vorremmo chiederti il consenso per utilizzare i cookie per raccogliere statistiche e mostrare pubblicità personalizzata. I nostri fornitori riceveranno informazioni sul modo in cui utilizzi il nostro sito. Puoi modificare le tue scelte in qualsiasi momento nella pagina privacy.',
            changeDescription: 'Ci sono stati cambiamenti rispetto alla tua ultima visita, per favore rinnova il consenso.'
          },
          privacyPolicy: {
            name: 'informativa sulla privacy',
            text: 'Per saperne di più, consulta la nostra {privacyPolicy}.'
          },
          service: {
            purpose: 'finalità',
            purposes: 'finalità',
            disableAll: {
              title: 'Attiva o disattiva tutti i servizi',
              description: 'Utilizza questo pulsante per attivare o disattivare tutti i servizi.'
            }
          },
          analytics: {
            description: 'Utilizziamo il servizio di terze parti Google Analytics per tracciare le visite degli utenti sul sito. Questo ci permette di sapere quante persone visitano il sito.'
          },
          'ads-basic': {
            description: 'Utilizziamo il servizio Google AdSense per mostrare annunci pubblicitari sul forum basati sul contesto. I cookie non vengono usati per la personalizzazione ma per questioni di sicurezza e per la generazione dei rapporti.'
          },
          'ads-personalized': {
            description: 'Con il tuo consenso, Google e i suoi fornitori raccoglieranno dei dati per fornire annunci più pertinenti creando un profilo basato sulla tua attività di navigazione. La lista dei fornitori è riportata nell\'informativa sulla privacy.'
          }
        }
      }
    });
  });
});

/***/ }),

/***/ "./src/forum/addLinksToSidebar.js":
/*!****************************************!*\
  !*** ./src/forum/addLinksToSidebar.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (items) {
  items.add('wiki', flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_0___default.a.component({
    href: 'https://fibra.click/?utm_source=fibraclick&utm_medium=referral&utm_campaign=navlinks',
    icon: 'fas fa-align-left',
    external: true,
    target: '_blank'
  }, 'Wiki'));
  items.add('newsletter', flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_0___default.a.component({
    href: 'https://fibra.click/newsletter/?utm_source=fibraclick&utm_medium=referral&utm_campaign=navlinks',
    icon: 'far fa-newspaper',
    external: true,
    target: '_blank'
  }, 'Newsletter'));
  items.add('telegram', flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_0___default.a.component({
    href: 'https://t.me/FibraClick',
    icon: 'fab fa-telegram-plane',
    external: true,
    target: '_blank'
  }, 'Telegram'));
  items.add('twitter', flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_0___default.a.component({
    href: 'https://twitter.com/FibraClick',
    icon: 'fab fa-twitter',
    external: true,
    target: '_blank'
  }, 'Twitter'));
  items.add('facebook', flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_0___default.a.component({
    href: 'https://www.facebook.com/FibraClick',
    icon: 'fab fa-facebook-f',
    external: true,
    target: '_blank'
  }, 'Facebook'));
});

/***/ }),

/***/ "./src/forum/addPolicyConsent.js":
/*!***************************************!*\
  !*** ./src/forum/addPolicyConsent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/SignUpModal */ "flarum/forum/components/SignUpModal");
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'fields', function (fields) {
    fields.add('fibraclick-terms', m("div", {
      "class": "Form-group"
    }, m("label", {
      "class": "checkbox"
    }, m("input", {
      type: "checkbox",
      required: true,
      disabled: this.loading
    }), ['Accetto l\'', m(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      target: "_blank",
      href: "https://fibra.click/privacy.pdf"
    }, "Informativa sulla privacy"), ' e i ', m(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      target: "_blank",
      href: "https://fibra.click/termini.pdf"
    }, "Termini e condizioni")])));
  });
});

/***/ }),

/***/ "./src/forum/addPostHeaderItems.js":
/*!*****************************************!*\
  !*** ./src/forum/addPostHeaderItems.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (items) {
  var postUser = this.attrs.post.user();

  if (!postUser) {
    return;
  }

  if (this.attrs.post.number() !== 1 && this.attrs.post.discussion().user() === postUser) {
    items.add('author-flair', m('span.item-user-label.author', 'Autore'), 99);
  }

  if (app.forum.attribute('fibraclick.flair.show') === '1') {
    var flairName = postUser.flairName();
    var flairColor = postUser.flairColor();

    if (flairName && flairColor) {
      items.add('flair', m('span.item-user-label.flair', {
        style: {
          background: flairColor
        }
      }, flairName), 99);
    }
  }
});

/***/ }),

/***/ "./src/forum/addTagsToSidebar.js":
/*!***************************************!*\
  !*** ./src/forum/addTagsToSidebar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addTagsToSidebar; });
/* harmony import */ var flarum_tags_forum_components_TagLinkButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/tags/forum/components/TagLinkButton */ "flarum/tags/forum/components/TagLinkButton");
/* harmony import */ var flarum_tags_forum_components_TagLinkButton__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_forum_components_TagLinkButton__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_Separator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Separator */ "flarum/common/components/Separator");
/* harmony import */ var flarum_common_components_Separator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Separator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/tags/utils/sortTags */ "flarum/tags/utils/sortTags");
/* harmony import */ var flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_2__);
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function addTagsToSidebar(items) {
  var currentItems = items.toArray();

  for (var _iterator = _createForOfIteratorHelperLoose(currentItems), _step; !(_step = _iterator()).done;) {
    var item = _step.value;

    if (item.itemName.match(/^tag[0-9]+$/)) {
      items.remove(item.itemName);
    }
  }

  items.remove('moreTags'); // https://github.com/flarum/tags/blob/v0.1.0-beta.16/js/src/forum/addTagList.js

  var params = app.search.stickyParams();
  var tags = app.store.all('tags');
  var currentTag = this.currentTag();

  var addTag = function addTag(tag) {
    var active = currentTag === tag;

    if (!active && currentTag) {
      active = currentTag.parent() === tag;
    }

    items.add('tag' + tag.id(), flarum_tags_forum_components_TagLinkButton__WEBPACK_IMPORTED_MODULE_0___default.a.component({
      model: tag,
      params: params,
      active: active
    }, tag == null ? void 0 : tag.name()), -14);
  };

  flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_2___default()(tags).filter(function (tag) {
    return tag.position() !== null && (!tag.isChild() || currentTag && (tag.parent() === currentTag || tag.parent() === currentTag.parent()));
  }).forEach(addTag);
  items.add('separator2', flarum_common_components_Separator__WEBPACK_IMPORTED_MODULE_1___default.a.component(), -14);
  flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_2___default()(tags).filter(function (tag) {
    return tag.position() == null;
  }).forEach(addTag);
}

/***/ }),

/***/ "./src/forum/components/QuickLinksComponent.js":
/*!*****************************************************!*\
  !*** ./src/forum/components/QuickLinksComponent.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuickLinksComponent; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2__);




var QuickLinksComponent = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(QuickLinksComponent, _Component);

  function QuickLinksComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = QuickLinksComponent.prototype;

  _proto.oninit = function oninit() {
    _Component.prototype.oninit.call(this);

    this.links = [{
      icon: 'fas fa-align-left',
      text: 'WIKI',
      link: 'https://fibra.click/?utm_source=fibraclick&utm_medium=referral&utm_campaign=mobilelinks'
    }, {
      icon: 'far fa-newspaper',
      text: 'NEWSLETTER',
      link: 'https://fibra.click/newsletter/?utm_source=fibraclick&utm_medium=referral&utm_campaign=mobilelinks'
    }, {
      icon: 'fab fa-telegram-plane',
      text: 'TELEGRAM',
      link: 'https://t.me/FibraClick'
    }, {
      icon: 'fab fa-twitter',
      text: 'TWITTER',
      link: 'https://twitter.com/fibraclick'
    }, {
      icon: 'fab fa-facebook-f',
      text: 'FACEBOOK',
      link: 'https://www.facebook.com/FibraClick/'
    }];
  };

  _proto.view = function view() {
    var _this = this;

    return m("div[class='container quicklinks']", this.links.map(function (x) {
      return flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2___default.a.component({
        href: x.link,
        external: true,
        target: '_blank'
      }, m.trust(_this.linkText(x)));
    }));
  };

  _proto.linkText = function linkText(link) {
    var t = '';

    if (link.icon) {
      t += "<i class=\"" + link.icon + "\"></i>";

      if (link.text) {
        t += ' ';
      }
    }

    if (link.text) {
      t += link.text;
    }

    return t;
  };

  return QuickLinksComponent;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/extendUserModal.js":
/*!**************************************!*\
  !*** ./src/forum/extendUserModal.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_components_EditUserModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/EditUserModal */ "flarum/forum/components/EditUserModal");
/* harmony import */ var flarum_forum_components_EditUserModal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_EditUserModal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_EditUserModal__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'oninit', function () {
    this.flairName = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2___default()(this.attrs.user.flairName() || '');
    this.flairColor = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2___default()(this.attrs.user.flairColor() || '');
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_EditUserModal__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'fields', function (fields) {
    fields.add('flair-name', m("div", {
      className: "Form-group"
    }, m("label", null, "Flair"), m("input", {
      className: "FormControl",
      placeholder: "Nome flair/azienda",
      bidi: this.flairName
    })), 9);
    fields.add('flair-color', m("div", {
      className: "Form-group"
    }, m("label", null, "Colore flair"), m("input", {
      className: "FormControl",
      placeholder: "#ffffff",
      bidi: this.flairColor
    })), 9);
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_EditUserModal__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'data', function (data) {
    data.flairName = this.flairName();
    data.flairColor = this.flairColor();
  });
});

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/CommentPost */ "flarum/forum/components/CommentPost");
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_components_WelcomeHero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/components/WelcomeHero */ "flarum/forum/components/WelcomeHero");
/* harmony import */ var flarum_forum_components_WelcomeHero__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_WelcomeHero__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_QuickLinksComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/QuickLinksComponent */ "./src/forum/components/QuickLinksComponent.js");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/models/User */ "flarum/common/models/User");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_User__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _replaceKeywords__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./replaceKeywords */ "./src/forum/replaceKeywords.js");
/* harmony import */ var _addLinksToSidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addLinksToSidebar */ "./src/forum/addLinksToSidebar.js");
/* harmony import */ var _addTagsToSidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./addTagsToSidebar */ "./src/forum/addTagsToSidebar.js");
/* harmony import */ var _addAds__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./addAds */ "./src/forum/addAds.js");
/* harmony import */ var _addCookieConsent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./addCookieConsent */ "./src/forum/addCookieConsent.js");
/* harmony import */ var _addAnalyticsCompat__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./addAnalyticsCompat */ "./src/forum/addAnalyticsCompat.js");
/* harmony import */ var _addPolicyConsent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./addPolicyConsent */ "./src/forum/addPolicyConsent.js");
/* harmony import */ var _addPostHeaderItems__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./addPostHeaderItems */ "./src/forum/addPostHeaderItems.js");
/* harmony import */ var _extendUserModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./extendUserModal */ "./src/forum/extendUserModal.js");

















flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('fibraclick-flarum-tweaks', function () {
  // Enable keywords feature
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'oninit', _replaceKeywords__WEBPACK_IMPORTED_MODULE_8__["default"]); // Add quick links to the top

  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["override"])(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'hero', function () {
    return [flarum_forum_components_WelcomeHero__WEBPACK_IMPORTED_MODULE_4___default.a.component(), _components_QuickLinksComponent__WEBPACK_IMPORTED_MODULE_5__["default"].component()];
  }); // Extend sidebar items with quick links

  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'navItems', _addLinksToSidebar__WEBPACK_IMPORTED_MODULE_9__["default"]); // Add secondary tags to sidebar

  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'navItems', _addTagsToSidebar__WEBPACK_IMPORTED_MODULE_10__["default"]);
  Object(_addAnalyticsCompat__WEBPACK_IMPORTED_MODULE_13__["default"])();
  Object(_addAds__WEBPACK_IMPORTED_MODULE_11__["default"])();
  Object(_addCookieConsent__WEBPACK_IMPORTED_MODULE_12__["default"])();
  Object(_addPolicyConsent__WEBPACK_IMPORTED_MODULE_14__["default"])();
  flarum_common_models_User__WEBPACK_IMPORTED_MODULE_6___default.a.prototype.flairName = flarum_common_Model__WEBPACK_IMPORTED_MODULE_7___default.a.attribute('flairName');
  flarum_common_models_User__WEBPACK_IMPORTED_MODULE_6___default.a.prototype.flairColor = flarum_common_Model__WEBPACK_IMPORTED_MODULE_7___default.a.attribute('flairColor');
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'headerItems', _addPostHeaderItems__WEBPACK_IMPORTED_MODULE_15__["default"]);
  Object(_extendUserModal__WEBPACK_IMPORTED_MODULE_16__["default"])();
});

/***/ }),

/***/ "./src/forum/replaceKeywords.js":
/*!**************************************!*\
  !*** ./src/forum/replaceKeywords.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);

var mappings = {
  vula: 'https://fibra.click/vula-slu-nga/#vula-virtual-unbundled-local-access',
  slu: 'https://fibra.click/vula-slu-nga/#slu-sub-loop-unbundling',
  // nga: 'https://fibra.click/vula-slu-nga/#nga-next-generation-access',
  'bs-nga': 'https://fibra.click/vula-slu-nga/#nga-next-generation-access',
  'piano bul': 'https://fibra.click/piano-bul/',
  bul: 'https://fibra.click/piano-bul/',
  'piano aree bianche': 'https://fibra.click/piano-aree-bianche/',
  vectoring: 'https://fibra.click/vectoring/',
  vdsl: 'https://fibra.click/vdsl/',
  vdsl2: 'https://fibra.click/vdsl/',
  diafonia: 'https://fibra.click/vdsl/#diafonia-e-vectoring',
  gpon: 'https://fibra.click/gpon/',
  'aree bianche': 'https://fibra.click/aree-nere-grigie-bianche/',
  'area bianca': 'https://fibra.click/aree-nere-grigie-bianche/',
  'aree nere': 'https://fibra.click/aree-nere-grigie-bianche/',
  'area nera': 'https://fibra.click/aree-nere-grigie-bianche/',
  'aree grigie': 'https://fibra.click/aree-nere-grigie-bianche/',
  'area grigia': 'https://fibra.click/aree-nere-grigie-bianche/',
  dns: 'https://fibra.click/dns/',
  assestamento: 'https://fibra.click/assestamento/',
  assesti: 'https://fibra.click/assestamento/',
  assestarsi: 'https://fibra.click/assestamento/',
  snr: 'https://fibra.click/snr-sra-sos/',
  sra: 'https://fibra.click/snr-sra-sos/',
  sos: 'https://fibra.click/snr-sra-sos/',
  '12db': 'https://fibra.click/snr-sra-sos/',
  '12 db': 'https://fibra.click/snr-sra-sos/',
  speedtest: 'https://fibra.click/speedtest/',
  cassiopea: 'https://fibra.click/cassiopea/',
  consultazione: 'https://fibra.click/consultazione-2021/',
  hlog: 'https://fibra.click/hlog/',
  qln: 'https://fibra.click/hlog/',
  fibercop: 'https://fibra.click/fibercop/',
  arlo: 'https://fibra.click/fibercop/#architettura',
  cro: 'https://fibra.click/fibercop/#architettura'
}; // https://stackoverflow.com/a/18622606/1633924

var regex = new RegExp('\\b(' + Object.keys(mappings).join('|') + ')\\b(?![^<]*>|[^<>]*</[^p])', 'gi');
/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.forum.attribute('fibraclick.highlightKeywords') !== '1') {
    return;
  }

  this.attrs.post.data.attributes.contentHtml = this.attrs.post.data.attributes.contentHtml.replace(regex, function (match) {
    var link = mappings[match.toLowerCase()];

    if (link) {
      return "<a class=\"wiki\" target=\"_blank\" href=\"" + link + "\">" + match + "</a>";
    } else {
      return match;
    }
  });
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['common/Model']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Model'];

/***/ }),

/***/ "flarum/common/components/Link":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Link']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Link'];

/***/ }),

/***/ "flarum/common/components/LinkButton":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/LinkButton']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/LinkButton'];

/***/ }),

/***/ "flarum/common/components/Page":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Page']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Page'];

/***/ }),

/***/ "flarum/common/components/Separator":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['common/components/Separator']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Separator'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/models/User":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/models/User']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/models/User'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/forum/components/CommentPost":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/CommentPost']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/CommentPost'];

/***/ }),

/***/ "flarum/forum/components/EditUserModal":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/EditUserModal']" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/EditUserModal'];

/***/ }),

/***/ "flarum/forum/components/IndexPage":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/IndexPage']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/IndexPage'];

/***/ }),

/***/ "flarum/forum/components/PostStream":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/PostStream']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/PostStream'];

/***/ }),

/***/ "flarum/forum/components/SignUpModal":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/SignUpModal']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/SignUpModal'];

/***/ }),

/***/ "flarum/forum/components/WelcomeHero":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/WelcomeHero']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/WelcomeHero'];

/***/ }),

/***/ "flarum/tags/forum/components/TagLinkButton":
/*!****************************************************************************!*\
  !*** external "flarum.core.compat['tags/forum/components/TagLinkButton']" ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['tags/forum/components/TagLinkButton'];

/***/ }),

/***/ "flarum/tags/utils/sortTags":
/*!************************************************************!*\
  !*** external "flarum.core.compat['tags/utils/sortTags']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['tags/utils/sortTags'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map