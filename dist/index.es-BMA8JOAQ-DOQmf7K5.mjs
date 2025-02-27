import { d as bi } from "./index-TnRYxpyc.mjs";
var wi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Zu(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Uh = {}, $i = {}, he, qi;
function Z() {
  if (qi) return he;
  qi = 1;
  var i = function(t) {
    return t && t.Math === Math && t;
  };
  return he = // eslint-disable-next-line es/no-global-this -- safe
  i(typeof globalThis == "object" && globalThis) || i(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  i(typeof self == "object" && self) || i(typeof wi == "object" && wi) || i(typeof he == "object" && he) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")(), he;
}
var Ze = {}, Qi, Zi;
function J() {
  return Zi || (Zi = 1, Qi = function(i) {
    try {
      return !!i();
    } catch {
      return !0;
    }
  }), Qi;
}
var Ke, Ki;
function Ot() {
  if (Ki) return Ke;
  Ki = 1;
  var i = J();
  return Ke = !i(function() {
    return Object.defineProperty({}, 1, {
      get: function() {
        return 7;
      }
    })[1] !== 7;
  }), Ke;
}
var Je, Ji;
function Me() {
  if (Ji) return Je;
  Ji = 1;
  var i = J();
  return Je = !i(function() {
    var t = (function() {
    }).bind();
    return typeof t != "function" || t.hasOwnProperty("prototype");
  }), Je;
}
var tr, ta;
function st() {
  if (ta) return tr;
  ta = 1;
  var i = Me(), t = Function.prototype.call;
  return tr = i ? t.bind(t) : function() {
    return t.apply(t, arguments);
  }, tr;
}
var er = {}, ea;
function Xh() {
  if (ea) return er;
  ea = 1;
  var i = {}.propertyIsEnumerable, t = Object.getOwnPropertyDescriptor, e = t && !i.call({
    1: 2
  }, 1);
  return er.f = e ? function(r) {
    var n = t(this, r);
    return !!n && n.enumerable;
  } : i, er;
}
var ra, na;
function Ei() {
  return na || (na = 1, ra = function(i, t) {
    return {
      enumerable: !(i & 1),
      configurable: !(i & 2),
      writable: !(i & 4),
      value: t
    };
  }), ra;
}
var rr, ia;
function tt() {
  if (ia) return rr;
  ia = 1;
  var i = Me(), t = Function.prototype, e = t.call, r = i && t.bind.bind(e, e);
  return rr = i ? r : function(n) {
    return function() {
      return e.apply(n, arguments);
    };
  }, rr;
}
var nr, aa;
function Zt() {
  if (aa) return nr;
  aa = 1;
  var i = tt(), t = i({}.toString), e = i("".slice);
  return nr = function(r) {
    return e(t(r), 8, -1);
  }, nr;
}
var ir, sa;
function Ku() {
  if (sa) return ir;
  sa = 1;
  var i = tt(), t = J(), e = Zt(), r = Object, n = i("".split);
  return ir = t(function() {
    return !r("z").propertyIsEnumerable(0);
  }) ? function(a) {
    return e(a) === "String" ? n(a, "") : r(a);
  } : r, ir;
}
var oa, ua;
function Kt() {
  return ua || (ua = 1, oa = function(i) {
    return i == null;
  }), oa;
}
var ar, ha;
function At() {
  if (ha) return ar;
  ha = 1;
  var i = Kt(), t = TypeError;
  return ar = function(e) {
    if (i(e)) throw new t("Can't call method on " + e);
    return e;
  }, ar;
}
var sr, ca;
function fe() {
  if (ca) return sr;
  ca = 1;
  var i = Ku(), t = At();
  return sr = function(e) {
    return i(t(e));
  }, sr;
}
var or, la;
function et() {
  if (la) return or;
  la = 1;
  var i = typeof document == "object" && document.all;
  return or = typeof i > "u" && i !== void 0 ? function(t) {
    return typeof t == "function" || t === i;
  } : function(t) {
    return typeof t == "function";
  }, or;
}
var ur, fa;
function Et() {
  if (fa) return ur;
  fa = 1;
  var i = et();
  return ur = function(t) {
    return typeof t == "object" ? t !== null : i(t);
  }, ur;
}
var hr, ga;
function Jt() {
  if (ga) return hr;
  ga = 1;
  var i = Z(), t = et(), e = function(r) {
    return t(r) ? r : void 0;
  };
  return hr = function(r, n) {
    return arguments.length < 2 ? e(i[r]) : i[r] && i[r][n];
  }, hr;
}
var cr, pa;
function Ne() {
  if (pa) return cr;
  pa = 1;
  var i = tt();
  return cr = i({}.isPrototypeOf), cr;
}
var lr, da;
function ge() {
  if (da) return lr;
  da = 1;
  var i = Z(), t = i.navigator, e = t && t.userAgent;
  return lr = e ? String(e) : "", lr;
}
var fr, va;
function Pi() {
  if (va) return fr;
  va = 1;
  var i = Z(), t = ge(), e = i.process, r = i.Deno, n = e && e.versions || r && r.version, a = n && n.v8, s, o;
  return a && (s = a.split("."), o = s[0] > 0 && s[0] < 4 ? 1 : +(s[0] + s[1])), !o && t && (s = t.match(/Edge\/(\d+)/), (!s || s[1] >= 74) && (s = t.match(/Chrome\/(\d+)/), s && (o = +s[1]))), fr = o, fr;
}
var gr, ma;
function Ju() {
  if (ma) return gr;
  ma = 1;
  var i = Pi(), t = J(), e = Z(), r = e.String;
  return gr = !!Object.getOwnPropertySymbols && !t(function() {
    var n = Symbol("symbol detection");
    return !r(n) || !(Object(n) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && i && i < 41;
  }), gr;
}
var pr, ya;
function th() {
  if (ya) return pr;
  ya = 1;
  var i = Ju();
  return pr = i && !Symbol.sham && typeof Symbol.iterator == "symbol", pr;
}
var dr, xa;
function eh() {
  if (xa) return dr;
  xa = 1;
  var i = Jt(), t = et(), e = Ne(), r = th(), n = Object;
  return dr = r ? function(a) {
    return typeof a == "symbol";
  } : function(a) {
    var s = i("Symbol");
    return t(s) && e(s.prototype, n(a));
  }, dr;
}
var vr, ba;
function Re() {
  if (ba) return vr;
  ba = 1;
  var i = String;
  return vr = function(t) {
    try {
      return i(t);
    } catch {
      return "Object";
    }
  }, vr;
}
var mr, wa;
function Bt() {
  if (wa) return mr;
  wa = 1;
  var i = et(), t = Re(), e = TypeError;
  return mr = function(r) {
    if (i(r)) return r;
    throw new e(t(r) + " is not a function");
  }, mr;
}
var yr, Sa;
function ie() {
  if (Sa) return yr;
  Sa = 1;
  var i = Bt(), t = Kt();
  return yr = function(e, r) {
    var n = e[r];
    return t(n) ? void 0 : i(n);
  }, yr;
}
var xr, Ta;
function Hh() {
  if (Ta) return xr;
  Ta = 1;
  var i = st(), t = et(), e = Et(), r = TypeError;
  return xr = function(n, a) {
    var s, o;
    if (a === "string" && t(s = n.toString) && !e(o = i(s, n)) || t(s = n.valueOf) && !e(o = i(s, n)) || a !== "string" && t(s = n.toString) && !e(o = i(s, n))) return o;
    throw new r("Can't convert object to primitive value");
  }, xr;
}
var br = {
  exports: {}
}, Oa, Aa;
function Vt() {
  return Aa || (Aa = 1, Oa = !1), Oa;
}
var wr, Ea;
function Ci() {
  if (Ea) return wr;
  Ea = 1;
  var i = Z(), t = Object.defineProperty;
  return wr = function(e, r) {
    try {
      t(i, e, {
        value: r,
        configurable: !0,
        writable: !0
      });
    } catch {
      i[e] = r;
    }
    return r;
  }, wr;
}
var Pa;
function Mi() {
  if (Pa) return br.exports;
  Pa = 1;
  var i = Vt(), t = Z(), e = Ci(), r = "__core-js_shared__", n = br.exports = t[r] || e(r, {});
  return (n.versions || (n.versions = [])).push({
    version: "3.40.0",
    mode: i ? "pure" : "global",
    copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
  }), br.exports;
}
var Sr, Ca;
function Ni() {
  if (Ca) return Sr;
  Ca = 1;
  var i = Mi();
  return Sr = function(t, e) {
    return i[t] || (i[t] = e || {});
  }, Sr;
}
var Tr, Ma;
function Ve() {
  if (Ma) return Tr;
  Ma = 1;
  var i = At(), t = Object;
  return Tr = function(e) {
    return t(i(e));
  }, Tr;
}
var Or, Na;
function Pt() {
  if (Na) return Or;
  Na = 1;
  var i = tt(), t = Ve(), e = i({}.hasOwnProperty);
  return Or = Object.hasOwn || function(r, n) {
    return e(t(r), n);
  }, Or;
}
var Ar, Ra;
function rh() {
  if (Ra) return Ar;
  Ra = 1;
  var i = tt(), t = 0, e = Math.random(), r = i(1 .toString);
  return Ar = function(n) {
    return "Symbol(" + (n === void 0 ? "" : n) + ")_" + r(++t + e, 36);
  }, Ar;
}
var Er, Va;
function at() {
  if (Va) return Er;
  Va = 1;
  var i = Z(), t = Ni(), e = Pt(), r = rh(), n = Ju(), a = th(), s = i.Symbol, o = t("wks"), u = a ? s.for || s : s && s.withoutSetter || r;
  return Er = function(h) {
    return e(o, h) || (o[h] = n && e(s, h) ? s[h] : u("Symbol." + h)), o[h];
  }, Er;
}
var Pr, ka;
function Yh() {
  if (ka) return Pr;
  ka = 1;
  var i = st(), t = Et(), e = eh(), r = ie(), n = Hh(), a = at(), s = TypeError, o = a("toPrimitive");
  return Pr = function(u, h) {
    if (!t(u) || e(u)) return u;
    var c = r(u, o), f;
    if (c) {
      if (h === void 0 && (h = "default"), f = i(c, u, h), !t(f) || e(f)) return f;
      throw new s("Can't convert object to primitive value");
    }
    return h === void 0 && (h = "number"), n(u, h);
  }, Pr;
}
var Cr, _a;
function nh() {
  if (_a) return Cr;
  _a = 1;
  var i = Yh(), t = eh();
  return Cr = function(e) {
    var r = i(e, "string");
    return t(r) ? r : r + "";
  }, Cr;
}
var Mr, Ia;
function ke() {
  if (Ia) return Mr;
  Ia = 1;
  var i = Z(), t = Et(), e = i.document, r = t(e) && t(e.createElement);
  return Mr = function(n) {
    return r ? e.createElement(n) : {};
  }, Mr;
}
var Nr, La;
function ih() {
  if (La) return Nr;
  La = 1;
  var i = Ot(), t = J(), e = ke();
  return Nr = !i && !t(function() {
    return Object.defineProperty(e("div"), "a", {
      get: function() {
        return 7;
      }
    }).a !== 7;
  }), Nr;
}
var Da;
function _e() {
  if (Da) return Ze;
  Da = 1;
  var i = Ot(), t = st(), e = Xh(), r = Ei(), n = fe(), a = nh(), s = Pt(), o = ih(), u = Object.getOwnPropertyDescriptor;
  return Ze.f = i ? u : function(h, c) {
    if (h = n(h), c = a(c), o) try {
      return u(h, c);
    } catch {
    }
    if (s(h, c)) return r(!t(e.f, h, c), h[c]);
  }, Ze;
}
var Rr = {}, Vr, Fa;
function ah() {
  if (Fa) return Vr;
  Fa = 1;
  var i = Ot(), t = J();
  return Vr = i && t(function() {
    return Object.defineProperty(function() {
    }, "prototype", {
      value: 42,
      writable: !1
    }).prototype !== 42;
  }), Vr;
}
var kr, Ba;
function ut() {
  if (Ba) return kr;
  Ba = 1;
  var i = Et(), t = String, e = TypeError;
  return kr = function(r) {
    if (i(r)) return r;
    throw new e(t(r) + " is not an object");
  }, kr;
}
var ja;
function Wt() {
  if (ja) return Rr;
  ja = 1;
  var i = Ot(), t = ih(), e = ah(), r = ut(), n = nh(), a = TypeError, s = Object.defineProperty, o = Object.getOwnPropertyDescriptor, u = "enumerable", h = "configurable", c = "writable";
  return Rr.f = i ? e ? function(f, g, l) {
    if (r(f), g = n(g), r(l), typeof f == "function" && g === "prototype" && "value" in l && c in l && !l[c]) {
      var p = o(f, g);
      p && p[c] && (f[g] = l.value, l = {
        configurable: h in l ? l[h] : p[h],
        enumerable: u in l ? l[u] : p[u],
        writable: !1
      });
    }
    return s(f, g, l);
  } : s : function(f, g, l) {
    if (r(f), g = n(g), r(l), t) try {
      return s(f, g, l);
    } catch {
    }
    if ("get" in l || "set" in l) throw new a("Accessors not supported");
    return "value" in l && (f[g] = l.value), f;
  }, Rr;
}
var _r, za;
function pe() {
  if (za) return _r;
  za = 1;
  var i = Ot(), t = Wt(), e = Ei();
  return _r = i ? function(r, n, a) {
    return t.f(r, n, e(1, a));
  } : function(r, n, a) {
    return r[n] = a, r;
  }, _r;
}
var Ir = {
  exports: {}
}, Lr, Ua;
function Ie() {
  if (Ua) return Lr;
  Ua = 1;
  var i = Ot(), t = Pt(), e = Function.prototype, r = i && Object.getOwnPropertyDescriptor, n = t(e, "name"), a = n && (function() {
  }).name === "something", s = n && (!i || i && r(e, "name").configurable);
  return Lr = {
    EXISTS: n,
    PROPER: a,
    CONFIGURABLE: s
  }, Lr;
}
var Dr, Xa;
function Ri() {
  if (Xa) return Dr;
  Xa = 1;
  var i = tt(), t = et(), e = Mi(), r = i(Function.toString);
  return t(e.inspectSource) || (e.inspectSource = function(n) {
    return r(n);
  }), Dr = e.inspectSource, Dr;
}
var Fr, Ha;
function Wh() {
  if (Ha) return Fr;
  Ha = 1;
  var i = Z(), t = et(), e = i.WeakMap;
  return Fr = t(e) && /native code/.test(String(e)), Fr;
}
var Br, Ya;
function Vi() {
  if (Ya) return Br;
  Ya = 1;
  var i = Ni(), t = rh(), e = i("keys");
  return Br = function(r) {
    return e[r] || (e[r] = t(r));
  }, Br;
}
var Wa, Ga;
function ki() {
  return Ga || (Ga = 1, Wa = {}), Wa;
}
var jr, $a;
function Le() {
  if ($a) return jr;
  $a = 1;
  var i = Wh(), t = Z(), e = Et(), r = pe(), n = Pt(), a = Mi(), s = Vi(), o = ki(), u = "Object already initialized", h = t.TypeError, c = t.WeakMap, f, g, l, p = function(m) {
    return l(m) ? g(m) : f(m, {});
  }, d = function(m) {
    return function(x) {
      var b;
      if (!e(x) || (b = g(x)).type !== m) throw new h("Incompatible receiver, " + m + " required");
      return b;
    };
  };
  if (i || a.state) {
    var v = a.state || (a.state = new c());
    v.get = v.get, v.has = v.has, v.set = v.set, f = function(m, x) {
      if (v.has(m)) throw new h(u);
      return x.facade = m, v.set(m, x), x;
    }, g = function(m) {
      return v.get(m) || {};
    }, l = function(m) {
      return v.has(m);
    };
  } else {
    var y = s("state");
    o[y] = !0, f = function(m, x) {
      if (n(m, y)) throw new h(u);
      return x.facade = m, r(m, y, x), x;
    }, g = function(m) {
      return n(m, y) ? m[y] : {};
    }, l = function(m) {
      return n(m, y);
    };
  }
  return jr = {
    set: f,
    get: g,
    has: l,
    enforce: p,
    getterFor: d
  }, jr;
}
var qa;
function sh() {
  if (qa) return Ir.exports;
  qa = 1;
  var i = tt(), t = J(), e = et(), r = Pt(), n = Ot(), a = Ie().CONFIGURABLE, s = Ri(), o = Le(), u = o.enforce, h = o.get, c = String, f = Object.defineProperty, g = i("".slice), l = i("".replace), p = i([].join), d = n && !t(function() {
    return f(function() {
    }, "length", {
      value: 8
    }).length !== 8;
  }), v = String(String).split("String"), y = Ir.exports = function(m, x, b) {
    g(c(x), 0, 7) === "Symbol(" && (x = "[" + l(c(x), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), b && b.getter && (x = "get " + x), b && b.setter && (x = "set " + x), (!r(m, "name") || a && m.name !== x) && (n ? f(m, "name", {
      value: x,
      configurable: !0
    }) : m.name = x), d && b && r(b, "arity") && m.length !== b.arity && f(m, "length", {
      value: b.arity
    });
    try {
      b && r(b, "constructor") && b.constructor ? n && f(m, "prototype", {
        writable: !1
      }) : m.prototype && (m.prototype = void 0);
    } catch {
    }
    var O = u(m);
    return r(O, "source") || (O.source = p(v, typeof x == "string" ? x : "")), m;
  };
  return Function.prototype.toString = y(function() {
    return e(this) && h(this).source || s(this);
  }, "toString"), Ir.exports;
}
var zr, Qa;
function te() {
  if (Qa) return zr;
  Qa = 1;
  var i = et(), t = Wt(), e = sh(), r = Ci();
  return zr = function(n, a, s, o) {
    o || (o = {});
    var u = o.enumerable, h = o.name !== void 0 ? o.name : a;
    if (i(s) && e(s, h, o), o.global) u ? n[a] = s : r(a, s);
    else {
      try {
        o.unsafe ? n[a] && (u = !0) : delete n[a];
      } catch {
      }
      u ? n[a] = s : t.f(n, a, {
        value: s,
        enumerable: !1,
        configurable: !o.nonConfigurable,
        writable: !o.nonWritable
      });
    }
    return n;
  }, zr;
}
var Ur = {}, Xr, Za;
function Gh() {
  if (Za) return Xr;
  Za = 1;
  var i = Math.ceil, t = Math.floor;
  return Xr = Math.trunc || function(e) {
    var r = +e;
    return (r > 0 ? t : i)(r);
  }, Xr;
}
var Hr, Ka;
function De() {
  if (Ka) return Hr;
  Ka = 1;
  var i = Gh();
  return Hr = function(t) {
    var e = +t;
    return e !== e || e === 0 ? 0 : i(e);
  }, Hr;
}
var Yr, Ja;
function $h() {
  if (Ja) return Yr;
  Ja = 1;
  var i = De(), t = Math.max, e = Math.min;
  return Yr = function(r, n) {
    var a = i(r);
    return a < 0 ? t(a + n, 0) : e(a, n);
  }, Yr;
}
var Wr, ts;
function ae() {
  if (ts) return Wr;
  ts = 1;
  var i = De(), t = Math.min;
  return Wr = function(e) {
    var r = i(e);
    return r > 0 ? t(r, 9007199254740991) : 0;
  }, Wr;
}
var Gr, es;
function _i() {
  if (es) return Gr;
  es = 1;
  var i = ae();
  return Gr = function(t) {
    return i(t.length);
  }, Gr;
}
var $r, rs;
function oh() {
  if (rs) return $r;
  rs = 1;
  var i = fe(), t = $h(), e = _i(), r = function(n) {
    return function(a, s, o) {
      var u = i(a), h = e(u);
      if (h === 0) return !n && -1;
      var c = t(o, h), f;
      if (n && s !== s) {
        for (; h > c; ) if (f = u[c++], f !== f) return !0;
      } else for (; h > c; c++) if ((n || c in u) && u[c] === s) return n || c || 0;
      return !n && -1;
    };
  };
  return $r = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: r(!0),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: r(!1)
  }, $r;
}
var qr, ns;
function uh() {
  if (ns) return qr;
  ns = 1;
  var i = tt(), t = Pt(), e = fe(), r = oh().indexOf, n = ki(), a = i([].push);
  return qr = function(s, o) {
    var u = e(s), h = 0, c = [], f;
    for (f in u) !t(n, f) && t(u, f) && a(c, f);
    for (; o.length > h; ) t(u, f = o[h++]) && (~r(c, f) || a(c, f));
    return c;
  }, qr;
}
var is, as;
function Ii() {
  return as || (as = 1, is = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]), is;
}
var ss;
function qh() {
  if (ss) return Ur;
  ss = 1;
  var i = uh(), t = Ii(), e = t.concat("length", "prototype");
  return Ur.f = Object.getOwnPropertyNames || function(r) {
    return i(r, e);
  }, Ur;
}
var os = {}, us;
function Qh() {
  return us || (us = 1, os.f = Object.getOwnPropertySymbols), os;
}
var Qr, hs;
function Zh() {
  if (hs) return Qr;
  hs = 1;
  var i = Jt(), t = tt(), e = qh(), r = Qh(), n = ut(), a = t([].concat);
  return Qr = i("Reflect", "ownKeys") || function(s) {
    var o = e.f(n(s)), u = r.f;
    return u ? a(o, u(s)) : o;
  }, Qr;
}
var Zr, cs;
function Kh() {
  if (cs) return Zr;
  cs = 1;
  var i = Pt(), t = Zh(), e = _e(), r = Wt();
  return Zr = function(n, a, s) {
    for (var o = t(a), u = r.f, h = e.f, c = 0; c < o.length; c++) {
      var f = o[c];
      !i(n, f) && !(s && i(s, f)) && u(n, f, h(a, f));
    }
  }, Zr;
}
var Kr, ls;
function hh() {
  if (ls) return Kr;
  ls = 1;
  var i = J(), t = et(), e = /#|\.prototype\./, r = function(u, h) {
    var c = a[n(u)];
    return c === o ? !0 : c === s ? !1 : t(h) ? i(h) : !!h;
  }, n = r.normalize = function(u) {
    return String(u).replace(e, ".").toLowerCase();
  }, a = r.data = {}, s = r.NATIVE = "N", o = r.POLYFILL = "P";
  return Kr = r, Kr;
}
var Jr, fs;
function ht() {
  if (fs) return Jr;
  fs = 1;
  var i = Z(), t = _e().f, e = pe(), r = te(), n = Ci(), a = Kh(), s = hh();
  return Jr = function(o, u) {
    var h = o.target, c = o.global, f = o.stat, g, l, p, d, v, y;
    if (c ? l = i : f ? l = i[h] || n(h, {}) : l = i[h] && i[h].prototype, l) for (p in u) {
      if (v = u[p], o.dontCallGetSet ? (y = t(l, p), d = y && y.value) : d = l[p], g = s(c ? p : h + (f ? "." : "#") + p, o.forced), !g && d !== void 0) {
        if (typeof v == typeof d) continue;
        a(v, d);
      }
      (o.sham || d && d.sham) && e(v, "sham", !0), r(l, p, v, o);
    }
  }, Jr;
}
var tn, gs;
function ch() {
  if (gs) return tn;
  gs = 1;
  var i = Z(), t = ge(), e = Zt(), r = function(n) {
    return t.slice(0, n.length) === n;
  };
  return tn = function() {
    return r("Bun/") ? "BUN" : r("Cloudflare-Workers") ? "CLOUDFLARE" : r("Deno/") ? "DENO" : r("Node.js/") ? "NODE" : i.Bun && typeof Bun.version == "string" ? "BUN" : i.Deno && typeof Deno.version == "object" ? "DENO" : e(i.process) === "process" ? "NODE" : i.window && i.document ? "BROWSER" : "REST";
  }(), tn;
}
var en, ps;
function Fe() {
  if (ps) return en;
  ps = 1;
  var i = ch();
  return en = i === "NODE", en;
}
var rn, ds;
function Jh() {
  if (ds) return rn;
  ds = 1;
  var i = tt(), t = Bt();
  return rn = function(e, r, n) {
    try {
      return i(t(Object.getOwnPropertyDescriptor(e, r)[n]));
    } catch {
    }
  }, rn;
}
var nn, vs;
function tc() {
  if (vs) return nn;
  vs = 1;
  var i = Et();
  return nn = function(t) {
    return i(t) || t === null;
  }, nn;
}
var an, ms;
function ec() {
  if (ms) return an;
  ms = 1;
  var i = tc(), t = String, e = TypeError;
  return an = function(r) {
    if (i(r)) return r;
    throw new e("Can't set " + t(r) + " as a prototype");
  }, an;
}
var sn, ys;
function lh() {
  if (ys) return sn;
  ys = 1;
  var i = Jh(), t = Et(), e = At(), r = ec();
  return sn = Object.setPrototypeOf || ("__proto__" in {} ? function() {
    var n = !1, a = {}, s;
    try {
      s = i(Object.prototype, "__proto__", "set"), s(a, []), n = a instanceof Array;
    } catch {
    }
    return function(o, u) {
      return e(o), r(u), t(o) && (n ? s(o, u) : o.__proto__ = u), o;
    };
  }() : void 0), sn;
}
var on, xs;
function Be() {
  if (xs) return on;
  xs = 1;
  var i = Wt().f, t = Pt(), e = at(), r = e("toStringTag");
  return on = function(n, a, s) {
    n && !s && (n = n.prototype), n && !t(n, r) && i(n, r, {
      configurable: !0,
      value: a
    });
  }, on;
}
var un, bs;
function rc() {
  if (bs) return un;
  bs = 1;
  var i = sh(), t = Wt();
  return un = function(e, r, n) {
    return n.get && i(n.get, r, {
      getter: !0
    }), n.set && i(n.set, r, {
      setter: !0
    }), t.f(e, r, n);
  }, un;
}
var hn, ws;
function nc() {
  if (ws) return hn;
  ws = 1;
  var i = Jt(), t = rc(), e = at(), r = Ot(), n = e("species");
  return hn = function(a) {
    var s = i(a);
    r && s && !s[n] && t(s, n, {
      configurable: !0,
      get: function() {
        return this;
      }
    });
  }, hn;
}
var cn, Ss;
function ic() {
  if (Ss) return cn;
  Ss = 1;
  var i = Ne(), t = TypeError;
  return cn = function(e, r) {
    if (i(r, e)) return e;
    throw new t("Incorrect invocation");
  }, cn;
}
var ln, Ts;
function ac() {
  if (Ts) return ln;
  Ts = 1;
  var i = at(), t = i("toStringTag"), e = {};
  return e[t] = "z", ln = String(e) === "[object z]", ln;
}
var fn, Os;
function Li() {
  if (Os) return fn;
  Os = 1;
  var i = ac(), t = et(), e = Zt(), r = at(), n = r("toStringTag"), a = Object, s = e(/* @__PURE__ */ function() {
    return arguments;
  }()) === "Arguments", o = function(u, h) {
    try {
      return u[h];
    } catch {
    }
  };
  return fn = i ? e : function(u) {
    var h, c, f;
    return u === void 0 ? "Undefined" : u === null ? "Null" : typeof (c = o(h = a(u), n)) == "string" ? c : s ? e(h) : (f = e(h)) === "Object" && t(h.callee) ? "Arguments" : f;
  }, fn;
}
var gn, As;
function sc() {
  if (As) return gn;
  As = 1;
  var i = tt(), t = J(), e = et(), r = Li(), n = Jt(), a = Ri(), s = function() {
  }, o = n("Reflect", "construct"), u = /^\s*(?:class|function)\b/, h = i(u.exec), c = !u.test(s), f = function(l) {
    if (!e(l)) return !1;
    try {
      return o(s, [], l), !0;
    } catch {
      return !1;
    }
  }, g = function(l) {
    if (!e(l)) return !1;
    switch (r(l)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return !1;
    }
    try {
      return c || !!h(u, a(l));
    } catch {
      return !0;
    }
  };
  return g.sham = !0, gn = !o || t(function() {
    var l;
    return f(f.call) || !f(Object) || !f(function() {
      l = !0;
    }) || l;
  }) ? g : f, gn;
}
var pn, Es;
function oc() {
  if (Es) return pn;
  Es = 1;
  var i = sc(), t = Re(), e = TypeError;
  return pn = function(r) {
    if (i(r)) return r;
    throw new e(t(r) + " is not a constructor");
  }, pn;
}
var dn, Ps;
function fh() {
  if (Ps) return dn;
  Ps = 1;
  var i = ut(), t = oc(), e = Kt(), r = at(), n = r("species");
  return dn = function(a, s) {
    var o = i(a).constructor, u;
    return o === void 0 || e(u = i(o)[n]) ? s : t(u);
  }, dn;
}
var vn, Cs;
function gh() {
  if (Cs) return vn;
  Cs = 1;
  var i = Me(), t = Function.prototype, e = t.apply, r = t.call;
  return vn = typeof Reflect == "object" && Reflect.apply || (i ? r.bind(e) : function() {
    return r.apply(e, arguments);
  }), vn;
}
var mn, Ms;
function je() {
  if (Ms) return mn;
  Ms = 1;
  var i = Zt(), t = tt();
  return mn = function(e) {
    if (i(e) === "Function") return t(e);
  }, mn;
}
var yn, Ns;
function Di() {
  if (Ns) return yn;
  Ns = 1;
  var i = je(), t = Bt(), e = Me(), r = i(i.bind);
  return yn = function(n, a) {
    return t(n), a === void 0 ? n : e ? r(n, a) : function() {
      return n.apply(a, arguments);
    };
  }, yn;
}
var xn, Rs;
function ph() {
  if (Rs) return xn;
  Rs = 1;
  var i = Jt();
  return xn = i("document", "documentElement"), xn;
}
var bn, Vs;
function uc() {
  if (Vs) return bn;
  Vs = 1;
  var i = tt();
  return bn = i([].slice), bn;
}
var wn, ks;
function hc() {
  if (ks) return wn;
  ks = 1;
  var i = TypeError;
  return wn = function(t, e) {
    if (t < e) throw new i("Not enough arguments");
    return t;
  }, wn;
}
var Sn, _s;
function dh() {
  if (_s) return Sn;
  _s = 1;
  var i = ge();
  return Sn = /(?:ipad|iphone|ipod).*applewebkit/i.test(i), Sn;
}
var Tn, Is;
function vh() {
  if (Is) return Tn;
  Is = 1;
  var i = Z(), t = gh(), e = Di(), r = et(), n = Pt(), a = J(), s = ph(), o = uc(), u = ke(), h = hc(), c = dh(), f = Fe(), g = i.setImmediate, l = i.clearImmediate, p = i.process, d = i.Dispatch, v = i.Function, y = i.MessageChannel, m = i.String, x = 0, b = {}, O = "onreadystatechange", S, T, N, k;
  a(function() {
    S = i.location;
  });
  var V = function(E) {
    if (n(b, E)) {
      var D = b[E];
      delete b[E], D();
    }
  }, R = function(E) {
    return function() {
      V(E);
    };
  }, P = function(E) {
    V(E.data);
  }, C = function(E) {
    i.postMessage(m(E), S.protocol + "//" + S.host);
  };
  return (!g || !l) && (g = function(E) {
    h(arguments.length, 1);
    var D = r(E) ? E : v(E), U = o(arguments, 1);
    return b[++x] = function() {
      t(D, void 0, U);
    }, T(x), x;
  }, l = function(E) {
    delete b[E];
  }, f ? T = function(E) {
    p.nextTick(R(E));
  } : d && d.now ? T = function(E) {
    d.now(R(E));
  } : y && !c ? (N = new y(), k = N.port2, N.port1.onmessage = P, T = e(k.postMessage, k)) : i.addEventListener && r(i.postMessage) && !i.importScripts && S && S.protocol !== "file:" && !a(C) ? (T = C, i.addEventListener("message", P, !1)) : O in u("script") ? T = function(E) {
    s.appendChild(u("script"))[O] = function() {
      s.removeChild(this), V(E);
    };
  } : T = function(E) {
    setTimeout(R(E), 0);
  }), Tn = {
    set: g,
    clear: l
  }, Tn;
}
var On, Ls;
function cc() {
  if (Ls) return On;
  Ls = 1;
  var i = Z(), t = Ot(), e = Object.getOwnPropertyDescriptor;
  return On = function(r) {
    if (!t) return i[r];
    var n = e(i, r);
    return n && n.value;
  }, On;
}
var An, Ds;
function mh() {
  if (Ds) return An;
  Ds = 1;
  var i = function() {
    this.head = null, this.tail = null;
  };
  return i.prototype = {
    add: function(t) {
      var e = {
        item: t,
        next: null
      }, r = this.tail;
      r ? r.next = e : this.head = e, this.tail = e;
    },
    get: function() {
      var t = this.head;
      if (t) {
        var e = this.head = t.next;
        return e === null && (this.tail = null), t.item;
      }
    }
  }, An = i, An;
}
var En, Fs;
function lc() {
  if (Fs) return En;
  Fs = 1;
  var i = ge();
  return En = /ipad|iphone|ipod/i.test(i) && typeof Pebble < "u", En;
}
var Pn, Bs;
function fc() {
  if (Bs) return Pn;
  Bs = 1;
  var i = ge();
  return Pn = /web0s(?!.*chrome)/i.test(i), Pn;
}
var Cn, js;
function gc() {
  if (js) return Cn;
  js = 1;
  var i = Z(), t = cc(), e = Di(), r = vh().set, n = mh(), a = dh(), s = lc(), o = fc(), u = Fe(), h = i.MutationObserver || i.WebKitMutationObserver, c = i.document, f = i.process, g = i.Promise, l = t("queueMicrotask"), p, d, v, y, m;
  if (!l) {
    var x = new n(), b = function() {
      var O, S;
      for (u && (O = f.domain) && O.exit(); S = x.get(); ) try {
        S();
      } catch (T) {
        throw x.head && p(), T;
      }
      O && O.enter();
    };
    !a && !u && !o && h && c ? (d = !0, v = c.createTextNode(""), new h(b).observe(v, {
      characterData: !0
    }), p = function() {
      v.data = d = !d;
    }) : !s && g && g.resolve ? (y = g.resolve(void 0), y.constructor = g, m = e(y.then, y), p = function() {
      m(b);
    }) : u ? p = function() {
      f.nextTick(b);
    } : (r = e(r, i), p = function() {
      r(b);
    }), l = function(O) {
      x.head || p(), x.add(O);
    };
  }
  return Cn = l, Cn;
}
var zs, Us;
function pc() {
  return Us || (Us = 1, zs = function(i, t) {
    try {
      arguments.length === 1 ? console.error(i) : console.error(i, t);
    } catch {
    }
  }), zs;
}
var Xs, Hs;
function Fi() {
  return Hs || (Hs = 1, Xs = function(i) {
    try {
      return {
        error: !1,
        value: i()
      };
    } catch (t) {
      return {
        error: !0,
        value: t
      };
    }
  }), Xs;
}
var Mn, Ys;
function de() {
  if (Ys) return Mn;
  Ys = 1;
  var i = Z();
  return Mn = i.Promise, Mn;
}
var Nn, Ws;
function ve() {
  if (Ws) return Nn;
  Ws = 1;
  var i = Z(), t = de(), e = et(), r = hh(), n = Ri(), a = at(), s = ch(), o = Vt(), u = Pi(), h = t && t.prototype, c = a("species"), f = !1, g = e(i.PromiseRejectionEvent), l = r("Promise", function() {
    var p = n(t), d = p !== String(t);
    if (!d && u === 66 || o && !(h.catch && h.finally)) return !0;
    if (!u || u < 51 || !/native code/.test(p)) {
      var v = new t(function(x) {
        x(1);
      }), y = function(x) {
        x(function() {
        }, function() {
        });
      }, m = v.constructor = {};
      if (m[c] = y, f = v.then(function() {
      }) instanceof y, !f) return !0;
    }
    return !d && (s === "BROWSER" || s === "DENO") && !g;
  });
  return Nn = {
    CONSTRUCTOR: l,
    REJECTION_EVENT: g,
    SUBCLASSING: f
  }, Nn;
}
var Rn = {}, Gs;
function me() {
  if (Gs) return Rn;
  Gs = 1;
  var i = Bt(), t = TypeError, e = function(r) {
    var n, a;
    this.promise = new r(function(s, o) {
      if (n !== void 0 || a !== void 0) throw new t("Bad Promise constructor");
      n = s, a = o;
    }), this.resolve = i(n), this.reject = i(a);
  };
  return Rn.f = function(r) {
    return new e(r);
  }, Rn;
}
var $s;
function dc() {
  if ($s) return $i;
  $s = 1;
  var i = ht(), t = Vt(), e = Fe(), r = Z(), n = st(), a = te(), s = lh(), o = Be(), u = nc(), h = Bt(), c = et(), f = Et(), g = ic(), l = fh(), p = vh().set, d = gc(), v = pc(), y = Fi(), m = mh(), x = Le(), b = de(), O = ve(), S = me(), T = "Promise", N = O.CONSTRUCTOR, k = O.REJECTION_EVENT, V = O.SUBCLASSING, R = x.getterFor(T), P = x.set, C = b && b.prototype, E = b, D = C, U = r.TypeError, _ = r.document, B = r.process, M = S.f, F = M, j = !!(_ && _.createEvent && r.dispatchEvent), Y = "unhandledrejection", q = "rejectionhandled", G = 0, rt = 1, jt = 2, _t = 1, Mt = 2, dt, vt, mt, Nt, Rt = function(A) {
    var I;
    return f(A) && c(I = A.then) ? I : !1;
  }, ct = function(A, I) {
    var X = I.value, H = I.state === rt, Q = H ? A.ok : A.fail, Ut = A.resolve, It = A.reject, bt = A.domain, wt, Gt, ue;
    try {
      Q ? (H || (I.rejection === Mt && we(I), I.rejection = _t), Q === !0 ? wt = X : (bt && bt.enter(), wt = Q(X), bt && (bt.exit(), ue = !0)), wt === A.promise ? It(new U("Promise-chain cycle")) : (Gt = Rt(wt)) ? n(Gt, wt, Ut, It) : Ut(wt)) : It(X);
    } catch (Se) {
      bt && !ue && bt.exit(), It(Se);
    }
  }, yt = function(A, I) {
    A.notified || (A.notified = !0, d(function() {
      for (var X = A.reactions, H; H = X.get(); ) ct(H, A);
      A.notified = !1, I && !A.rejection && be(A);
    }));
  }, zt = function(A, I, X) {
    var H, Q;
    j ? (H = _.createEvent("Event"), H.promise = I, H.reason = X, H.initEvent(A, !1, !0), r.dispatchEvent(H)) : H = {
      promise: I,
      reason: X
    }, !k && (Q = r["on" + A]) ? Q(H) : A === Y && v("Unhandled promise rejection", X);
  }, be = function(A) {
    n(p, r, function() {
      var I = A.facade, X = A.value, H = oe(A), Q;
      if (H && (Q = y(function() {
        e ? B.emit("unhandledRejection", X, I) : zt(Y, I, X);
      }), A.rejection = e || oe(A) ? Mt : _t, Q.error)) throw Q.value;
    });
  }, oe = function(A) {
    return A.rejection !== _t && !A.parent;
  }, we = function(A) {
    n(p, r, function() {
      var I = A.facade;
      e ? B.emit("rejectionHandled", I) : zt(q, I, A.value);
    });
  }, gt = function(A, I, X) {
    return function(H) {
      A(I, H, X);
    };
  }, lt = function(A, I, X) {
    A.done || (A.done = !0, X && (A = X), A.value = I, A.state = jt, yt(A, !0));
  }, xt = function(A, I, X) {
    if (!A.done) {
      A.done = !0, X && (A = X);
      try {
        if (A.facade === I) throw new U("Promise can't be resolved itself");
        var H = Rt(I);
        H ? d(function() {
          var Q = {
            done: !1
          };
          try {
            n(H, I, gt(xt, Q, A), gt(lt, Q, A));
          } catch (Ut) {
            lt(Q, Ut, A);
          }
        }) : (A.value = I, A.state = rt, yt(A, !1));
      } catch (Q) {
        lt({
          done: !1
        }, Q, A);
      }
    }
  };
  if (N && (E = function(A) {
    g(this, D), h(A), n(dt, this);
    var I = R(this);
    try {
      A(gt(xt, I), gt(lt, I));
    } catch (X) {
      lt(I, X);
    }
  }, D = E.prototype, dt = function(A) {
    P(this, {
      type: T,
      done: !1,
      notified: !1,
      parent: !1,
      reactions: new m(),
      rejection: !1,
      state: G,
      value: null
    });
  }, dt.prototype = a(D, "then", function(A, I) {
    var X = R(this), H = M(l(this, E));
    return X.parent = !0, H.ok = c(A) ? A : !0, H.fail = c(I) && I, H.domain = e ? B.domain : void 0, X.state === G ? X.reactions.add(H) : d(function() {
      ct(H, X);
    }), H.promise;
  }), vt = function() {
    var A = new dt(), I = R(A);
    this.promise = A, this.resolve = gt(xt, I), this.reject = gt(lt, I);
  }, S.f = M = function(A) {
    return A === E || A === mt ? new vt(A) : F(A);
  }, !t && c(b) && C !== Object.prototype)) {
    Nt = C.then, V || a(C, "then", function(A, I) {
      var X = this;
      return new E(function(H, Q) {
        n(Nt, X, H, Q);
      }).then(A, I);
    }, {
      unsafe: !0
    });
    try {
      delete C.constructor;
    } catch {
    }
    s && s(C, D);
  }
  return i({
    global: !0,
    constructor: !0,
    wrap: !0,
    forced: N
  }, {
    Promise: E
  }), o(E, T, !1, !0), u(T), $i;
}
var qs = {}, Qs, Zs;
function ye() {
  return Zs || (Zs = 1, Qs = {}), Qs;
}
var Vn, Ks;
function vc() {
  if (Ks) return Vn;
  Ks = 1;
  var i = at(), t = ye(), e = i("iterator"), r = Array.prototype;
  return Vn = function(n) {
    return n !== void 0 && (t.Array === n || r[e] === n);
  }, Vn;
}
var kn, Js;
function yh() {
  if (Js) return kn;
  Js = 1;
  var i = Li(), t = ie(), e = Kt(), r = ye(), n = at(), a = n("iterator");
  return kn = function(s) {
    if (!e(s)) return t(s, a) || t(s, "@@iterator") || r[i(s)];
  }, kn;
}
var _n, to;
function mc() {
  if (to) return _n;
  to = 1;
  var i = st(), t = Bt(), e = ut(), r = Re(), n = yh(), a = TypeError;
  return _n = function(s, o) {
    var u = arguments.length < 2 ? n(s) : o;
    if (t(u)) return e(i(u, s));
    throw new a(r(s) + " is not iterable");
  }, _n;
}
var In, eo;
function yc() {
  if (eo) return In;
  eo = 1;
  var i = st(), t = ut(), e = ie();
  return In = function(r, n, a) {
    var s, o;
    t(r);
    try {
      if (s = e(r, "return"), !s) {
        if (n === "throw") throw a;
        return a;
      }
      s = i(s, r);
    } catch (u) {
      o = !0, s = u;
    }
    if (n === "throw") throw a;
    if (o) throw s;
    return t(s), a;
  }, In;
}
var Ln, ro;
function xh() {
  if (ro) return Ln;
  ro = 1;
  var i = Di(), t = st(), e = ut(), r = Re(), n = vc(), a = _i(), s = Ne(), o = mc(), u = yh(), h = yc(), c = TypeError, f = function(l, p) {
    this.stopped = l, this.result = p;
  }, g = f.prototype;
  return Ln = function(l, p, d) {
    var v = d && d.that, y = !!(d && d.AS_ENTRIES), m = !!(d && d.IS_RECORD), x = !!(d && d.IS_ITERATOR), b = !!(d && d.INTERRUPTED), O = i(p, v), S, T, N, k, V, R, P, C = function(D) {
      return S && h(S, "normal", D), new f(!0, D);
    }, E = function(D) {
      return y ? (e(D), b ? O(D[0], D[1], C) : O(D[0], D[1])) : b ? O(D, C) : O(D);
    };
    if (m) S = l.iterator;
    else if (x) S = l;
    else {
      if (T = u(l), !T) throw new c(r(l) + " is not iterable");
      if (n(T)) {
        for (N = 0, k = a(l); k > N; N++) if (V = E(l[N]), V && s(g, V)) return V;
        return new f(!1);
      }
      S = o(l, T);
    }
    for (R = m ? l.next : S.next; !(P = t(R, S)).done; ) {
      try {
        V = E(P.value);
      } catch (D) {
        h(S, "throw", D);
      }
      if (typeof V == "object" && V && s(g, V)) return V;
    }
    return new f(!1);
  }, Ln;
}
var Dn, no;
function xc() {
  if (no) return Dn;
  no = 1;
  var i = at(), t = i("iterator"), e = !1;
  try {
    var r = 0, n = {
      next: function() {
        return {
          done: !!r++
        };
      },
      return: function() {
        e = !0;
      }
    };
    n[t] = function() {
      return this;
    }, Array.from(n, function() {
      throw 2;
    });
  } catch {
  }
  return Dn = function(a, s) {
    try {
      if (!s && !e) return !1;
    } catch {
      return !1;
    }
    var o = !1;
    try {
      var u = {};
      u[t] = function() {
        return {
          next: function() {
            return {
              done: o = !0
            };
          }
        };
      }, a(u);
    } catch {
    }
    return o;
  }, Dn;
}
var Fn, io;
function bh() {
  if (io) return Fn;
  io = 1;
  var i = de(), t = xc(), e = ve().CONSTRUCTOR;
  return Fn = e || !t(function(r) {
    i.all(r).then(void 0, function() {
    });
  }), Fn;
}
var ao;
function bc() {
  if (ao) return qs;
  ao = 1;
  var i = ht(), t = st(), e = Bt(), r = me(), n = Fi(), a = xh(), s = bh();
  return i({
    target: "Promise",
    stat: !0,
    forced: s
  }, {
    all: function(o) {
      var u = this, h = r.f(u), c = h.resolve, f = h.reject, g = n(function() {
        var l = e(u.resolve), p = [], d = 0, v = 1;
        a(o, function(y) {
          var m = d++, x = !1;
          v++, t(l, u, y).then(function(b) {
            x || (x = !0, p[m] = b, --v || c(p));
          }, f);
        }), --v || c(p);
      });
      return g.error && f(g.value), h.promise;
    }
  }), qs;
}
var so = {}, oo;
function wc() {
  if (oo) return so;
  oo = 1;
  var i = ht(), t = Vt(), e = ve().CONSTRUCTOR, r = de(), n = Jt(), a = et(), s = te(), o = r && r.prototype;
  if (i({
    target: "Promise",
    proto: !0,
    forced: e,
    real: !0
  }, {
    catch: function(h) {
      return this.then(void 0, h);
    }
  }), !t && a(r)) {
    var u = n("Promise").prototype.catch;
    o.catch !== u && s(o, "catch", u, {
      unsafe: !0
    });
  }
  return so;
}
var uo = {}, ho;
function Sc() {
  if (ho) return uo;
  ho = 1;
  var i = ht(), t = st(), e = Bt(), r = me(), n = Fi(), a = xh(), s = bh();
  return i({
    target: "Promise",
    stat: !0,
    forced: s
  }, {
    race: function(o) {
      var u = this, h = r.f(u), c = h.reject, f = n(function() {
        var g = e(u.resolve);
        a(o, function(l) {
          t(g, u, l).then(h.resolve, c);
        });
      });
      return f.error && c(f.value), h.promise;
    }
  }), uo;
}
var co = {}, lo;
function Tc() {
  if (lo) return co;
  lo = 1;
  var i = ht(), t = me(), e = ve().CONSTRUCTOR;
  return i({
    target: "Promise",
    stat: !0,
    forced: e
  }, {
    reject: function(r) {
      var n = t.f(this), a = n.reject;
      return a(r), n.promise;
    }
  }), co;
}
var fo = {}, Bn, go;
function Oc() {
  if (go) return Bn;
  go = 1;
  var i = ut(), t = Et(), e = me();
  return Bn = function(r, n) {
    if (i(r), t(n) && n.constructor === r) return n;
    var a = e.f(r), s = a.resolve;
    return s(n), a.promise;
  }, Bn;
}
var po;
function Ac() {
  if (po) return fo;
  po = 1;
  var i = ht(), t = Jt(), e = Vt(), r = de(), n = ve().CONSTRUCTOR, a = Oc(), s = t("Promise"), o = e && !n;
  return i({
    target: "Promise",
    stat: !0,
    forced: e || n
  }, {
    resolve: function(u) {
      return a(o && this === s ? r : this, u);
    }
  }), fo;
}
var vo;
function Ec() {
  return vo || (vo = 1, dc(), bc(), wc(), Sc(), Tc(), Ac()), Uh;
}
Ec();
function mo(i, t, e, r, n, a, s) {
  try {
    var o = i[a](s), u = o.value;
  } catch (h) {
    return void e(h);
  }
  o.done ? t(u) : Promise.resolve(u).then(r, n);
}
function Ft(i) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, n) {
      var a = i.apply(t, e);
      function s(u) {
        mo(a, r, n, s, o, "next", u);
      }
      function o(u) {
        mo(a, r, n, s, o, "throw", u);
      }
      s(void 0);
    });
  };
}
var yo = {}, xo = {}, jn, bo;
function kt() {
  if (bo) return jn;
  bo = 1;
  var i = Li(), t = String;
  return jn = function(e) {
    if (i(e) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return t(e);
  }, jn;
}
var zn, wo;
function wh() {
  if (wo) return zn;
  wo = 1;
  var i = ut();
  return zn = function() {
    var t = i(this), e = "";
    return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.unicodeSets && (e += "v"), t.sticky && (e += "y"), e;
  }, zn;
}
var Un, So;
function Sh() {
  if (So) return Un;
  So = 1;
  var i = J(), t = Z(), e = t.RegExp, r = i(function() {
    var s = e("a", "y");
    return s.lastIndex = 2, s.exec("abcd") !== null;
  }), n = r || i(function() {
    return !e("a", "y").sticky;
  }), a = r || i(function() {
    var s = e("^r", "gy");
    return s.lastIndex = 2, s.exec("str") !== null;
  });
  return Un = {
    BROKEN_CARET: a,
    MISSED_STICKY: n,
    UNSUPPORTED_Y: r
  }, Un;
}
var Xn = {}, Hn, To;
function Pc() {
  if (To) return Hn;
  To = 1;
  var i = uh(), t = Ii();
  return Hn = Object.keys || function(e) {
    return i(e, t);
  }, Hn;
}
var Oo;
function Cc() {
  if (Oo) return Xn;
  Oo = 1;
  var i = Ot(), t = ah(), e = Wt(), r = ut(), n = fe(), a = Pc();
  return Xn.f = i && !t ? Object.defineProperties : function(s, o) {
    r(s);
    for (var u = n(o), h = a(o), c = h.length, f = 0, g; c > f; ) e.f(s, g = h[f++], u[g]);
    return s;
  }, Xn;
}
var Yn, Ao;
function ze() {
  if (Ao) return Yn;
  Ao = 1;
  var i = ut(), t = Cc(), e = Ii(), r = ki(), n = ph(), a = ke(), s = Vi(), o = ">", u = "<", h = "prototype", c = "script", f = s("IE_PROTO"), g = function() {
  }, l = function(m) {
    return u + c + o + m + u + "/" + c + o;
  }, p = function(m) {
    m.write(l("")), m.close();
    var x = m.parentWindow.Object;
    return m = null, x;
  }, d = function() {
    var m = a("iframe"), x = "java" + c + ":", b;
    return m.style.display = "none", n.appendChild(m), m.src = String(x), b = m.contentWindow.document, b.open(), b.write(l("document.F=Object")), b.close(), b.F;
  }, v, y = function() {
    try {
      v = new ActiveXObject("htmlfile");
    } catch {
    }
    y = typeof document < "u" ? document.domain && v ? p(v) : d() : p(v);
    for (var m = e.length; m--; ) delete y[h][e[m]];
    return y();
  };
  return r[f] = !0, Yn = Object.create || function(m, x) {
    var b;
    return m !== null ? (g[h] = i(m), b = new g(), g[h] = null, b[f] = m) : b = y(), x === void 0 ? b : t.f(b, x);
  }, Yn;
}
var Wn, Eo;
function Mc() {
  if (Eo) return Wn;
  Eo = 1;
  var i = J(), t = Z(), e = t.RegExp;
  return Wn = i(function() {
    var r = e(".", "s");
    return !(r.dotAll && r.test(`
`) && r.flags === "s");
  }), Wn;
}
var Gn, Po;
function Nc() {
  if (Po) return Gn;
  Po = 1;
  var i = J(), t = Z(), e = t.RegExp;
  return Gn = i(function() {
    var r = e("(?<a>b)", "g");
    return r.exec("b").groups.a !== "b" || "b".replace(r, "$<a>c") !== "bc";
  }), Gn;
}
var $n, Co;
function Bi() {
  if (Co) return $n;
  Co = 1;
  var i = st(), t = tt(), e = kt(), r = wh(), n = Sh(), a = Ni(), s = ze(), o = Le().get, u = Mc(), h = Nc(), c = a("native-string-replace", String.prototype.replace), f = RegExp.prototype.exec, g = f, l = t("".charAt), p = t("".indexOf), d = t("".replace), v = t("".slice), y = function() {
    var O = /a/, S = /b*/g;
    return i(f, O, "a"), i(f, S, "a"), O.lastIndex !== 0 || S.lastIndex !== 0;
  }(), m = n.BROKEN_CARET, x = /()??/.exec("")[1] !== void 0, b = y || x || m || u || h;
  return b && (g = function(O) {
    var S = this, T = o(S), N = e(O), k = T.raw, V, R, P, C, E, D, U;
    if (k) return k.lastIndex = S.lastIndex, V = i(g, k, N), S.lastIndex = k.lastIndex, V;
    var _ = T.groups, B = m && S.sticky, M = i(r, S), F = S.source, j = 0, Y = N;
    if (B && (M = d(M, "y", ""), p(M, "g") === -1 && (M += "g"), Y = v(N, S.lastIndex), S.lastIndex > 0 && (!S.multiline || S.multiline && l(N, S.lastIndex - 1) !== `
`) && (F = "(?: " + F + ")", Y = " " + Y, j++), R = new RegExp("^(?:" + F + ")", M)), x && (R = new RegExp("^" + F + "$(?!\\s)", M)), y && (P = S.lastIndex), C = i(f, B ? R : S, Y), B ? C ? (C.input = v(C.input, j), C[0] = v(C[0], j), C.index = S.lastIndex, S.lastIndex += C[0].length) : S.lastIndex = 0 : y && C && (S.lastIndex = S.global ? C.index + C[0].length : P), x && C && C.length > 1 && i(c, C[0], R, function() {
      for (E = 1; E < arguments.length - 2; E++) arguments[E] === void 0 && (C[E] = void 0);
    }), C && _) for (C.groups = D = s(null), E = 0; E < _.length; E++) U = _[E], D[U[0]] = C[U[1]];
    return C;
  }), $n = g, $n;
}
var Mo;
function Rc() {
  if (Mo) return xo;
  Mo = 1;
  var i = ht(), t = Bi();
  return i({
    target: "RegExp",
    proto: !0,
    forced: /./.exec !== t
  }, {
    exec: t
  }), xo;
}
var qn, No;
function ji() {
  if (No) return qn;
  No = 1, Rc();
  var i = st(), t = te(), e = Bi(), r = J(), n = at(), a = pe(), s = n("species"), o = RegExp.prototype;
  return qn = function(u, h, c, f) {
    var g = n(u), l = !r(function() {
      var y = {};
      return y[g] = function() {
        return 7;
      }, ""[u](y) !== 7;
    }), p = l && !r(function() {
      var y = !1, m = /a/;
      return u === "split" && (m = {}, m.constructor = {}, m.constructor[s] = function() {
        return m;
      }, m.flags = "", m[g] = /./[g]), m.exec = function() {
        return y = !0, null;
      }, m[g](""), !y;
    });
    if (!l || !p || c) {
      var d = /./[g], v = h(g, ""[u], function(y, m, x, b, O) {
        var S = m.exec;
        return S === e || S === o.exec ? l && !O ? {
          done: !0,
          value: i(d, m, x, b)
        } : {
          done: !0,
          value: i(y, x, m, b)
        } : {
          done: !1
        };
      });
      t(String.prototype, u, v[0]), t(o, g, v[1]);
    }
    f && a(o[g], "sham", !0);
  }, qn;
}
var Qn, Ro;
function Vc() {
  if (Ro) return Qn;
  Ro = 1;
  var i = tt(), t = De(), e = kt(), r = At(), n = i("".charAt), a = i("".charCodeAt), s = i("".slice), o = function(u) {
    return function(h, c) {
      var f = e(r(h)), g = t(c), l = f.length, p, d;
      return g < 0 || g >= l ? u ? "" : void 0 : (p = a(f, g), p < 55296 || p > 56319 || g + 1 === l || (d = a(f, g + 1)) < 56320 || d > 57343 ? u ? n(f, g) : p : u ? s(f, g, g + 2) : (p - 55296 << 10) + (d - 56320) + 65536);
    };
  };
  return Qn = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: o(!1),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: o(!0)
  }, Qn;
}
var Zn, Vo;
function zi() {
  if (Vo) return Zn;
  Vo = 1;
  var i = Vc().charAt;
  return Zn = function(t, e, r) {
    return e + (r ? i(t, e).length : 1);
  }, Zn;
}
var Kn, ko;
function Ui() {
  if (ko) return Kn;
  ko = 1;
  var i = st(), t = ut(), e = et(), r = Zt(), n = Bi(), a = TypeError;
  return Kn = function(s, o) {
    var u = s.exec;
    if (e(u)) {
      var h = i(u, s, o);
      return h !== null && t(h), h;
    }
    if (r(s) === "RegExp") return i(n, s, o);
    throw new a("RegExp#exec called on incompatible receiver");
  }, Kn;
}
var _o;
function kc() {
  if (_o) return yo;
  _o = 1;
  var i = st(), t = ji(), e = ut(), r = Kt(), n = ae(), a = kt(), s = At(), o = ie(), u = zi(), h = Ui();
  return t("match", function(c, f, g) {
    return [
      // `String.prototype.match` method
      // https://tc39.es/ecma262/#sec-string.prototype.match
      function(l) {
        var p = s(this), d = r(l) ? void 0 : o(l, c);
        return d ? i(d, l, p) : new RegExp(l)[c](a(p));
      },
      // `RegExp.prototype[@@match]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
      function(l) {
        var p = e(this), d = a(l), v = g(f, p, d);
        if (v.done) return v.value;
        if (!p.global) return h(p, d);
        var y = p.unicode;
        p.lastIndex = 0;
        for (var m = [], x = 0, b; (b = h(p, d)) !== null; ) {
          var O = a(b[0]);
          m[x] = O, O === "" && (p.lastIndex = u(d, n(p.lastIndex), y)), x++;
        }
        return x === 0 ? null : m;
      }
    ];
  }), yo;
}
kc();
var Io = {}, Jn, Lo;
function _c() {
  if (Lo) return Jn;
  Lo = 1;
  var i = tt(), t = Ve(), e = Math.floor, r = i("".charAt), n = i("".replace), a = i("".slice), s = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, o = /\$([$&'`]|\d{1,2})/g;
  return Jn = function(u, h, c, f, g, l) {
    var p = c + u.length, d = f.length, v = o;
    return g !== void 0 && (g = t(g), v = s), n(l, v, function(y, m) {
      var x;
      switch (r(m, 0)) {
        case "$":
          return "$";
        case "&":
          return u;
        case "`":
          return a(h, 0, c);
        case "'":
          return a(h, p);
        case "<":
          x = g[a(m, 1, -1)];
          break;
        default:
          var b = +m;
          if (b === 0) return y;
          if (b > d) {
            var O = e(b / 10);
            return O === 0 ? y : O <= d ? f[O - 1] === void 0 ? r(m, 1) : f[O - 1] + r(m, 1) : y;
          }
          x = f[b - 1];
      }
      return x === void 0 ? "" : x;
    });
  }, Jn;
}
var Do;
function Ic() {
  if (Do) return Io;
  Do = 1;
  var i = gh(), t = st(), e = tt(), r = ji(), n = J(), a = ut(), s = et(), o = Kt(), u = De(), h = ae(), c = kt(), f = At(), g = zi(), l = ie(), p = _c(), d = Ui(), v = at(), y = v("replace"), m = Math.max, x = Math.min, b = e([].concat), O = e([].push), S = e("".indexOf), T = e("".slice), N = function(P) {
    return P === void 0 ? P : String(P);
  }, k = function() {
    return "a".replace(/./, "$0") === "$0";
  }(), V = function() {
    return /./[y] ? /./[y]("a", "$0") === "" : !1;
  }(), R = !n(function() {
    var P = /./;
    return P.exec = function() {
      var C = [];
      return C.groups = {
        a: "7"
      }, C;
    }, "".replace(P, "$<a>") !== "7";
  });
  return r("replace", function(P, C, E) {
    var D = V ? "$" : "$0";
    return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function(U, _) {
        var B = f(this), M = o(U) ? void 0 : l(U, y);
        return M ? t(M, U, B, _) : t(C, c(B), U, _);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function(U, _) {
        var B = a(this), M = c(U);
        if (typeof _ == "string" && S(_, D) === -1 && S(_, "$<") === -1) {
          var F = E(C, B, M, _);
          if (F.done) return F.value;
        }
        var j = s(_);
        j || (_ = c(_));
        var Y = B.global, q;
        Y && (q = B.unicode, B.lastIndex = 0);
        for (var G = [], rt; rt = d(B, M), !(rt === null || (O(G, rt), !Y)); ) {
          var jt = c(rt[0]);
          jt === "" && (B.lastIndex = g(M, h(B.lastIndex), q));
        }
        for (var _t = "", Mt = 0, dt = 0; dt < G.length; dt++) {
          rt = G[dt];
          for (var vt = c(rt[0]), mt = m(x(u(rt.index), M.length), 0), Nt = [], Rt, ct = 1; ct < rt.length; ct++) O(Nt, N(rt[ct]));
          var yt = rt.groups;
          if (j) {
            var zt = b([vt], Nt, mt, M);
            yt !== void 0 && O(zt, yt), Rt = c(i(_, void 0, zt));
          } else Rt = p(vt, M, mt, Nt, yt, _);
          mt >= Mt && (_t += T(M, Mt, mt) + Rt, Mt = mt + vt.length);
        }
        return _t + T(M, Mt);
      }
    ];
  }, !R || !k || V), Io;
}
Ic();
var Fo = {}, ti, Bo;
function Lc() {
  if (Bo) return ti;
  Bo = 1;
  var i = Et(), t = Zt(), e = at(), r = e("match");
  return ti = function(n) {
    var a;
    return i(n) && ((a = n[r]) !== void 0 ? !!a : t(n) === "RegExp");
  }, ti;
}
var ei, jo;
function Xi() {
  if (jo) return ei;
  jo = 1;
  var i = Lc(), t = TypeError;
  return ei = function(e) {
    if (i(e)) throw new t("The method doesn't accept regular expressions");
    return e;
  }, ei;
}
var ri, zo;
function Hi() {
  if (zo) return ri;
  zo = 1;
  var i = at(), t = i("match");
  return ri = function(e) {
    var r = /./;
    try {
      "/./"[e](r);
    } catch {
      try {
        return r[t] = !1, "/./"[e](r);
      } catch {
      }
    }
    return !1;
  }, ri;
}
var Uo;
function Dc() {
  if (Uo) return Fo;
  Uo = 1;
  var i = ht(), t = je(), e = _e().f, r = ae(), n = kt(), a = Xi(), s = At(), o = Hi(), u = Vt(), h = t("".slice), c = Math.min, f = o("startsWith"), g = !u && !f && !!function() {
    var l = e(String.prototype, "startsWith");
    return l && !l.writable;
  }();
  return i({
    target: "String",
    proto: !0,
    forced: !g && !f
  }, {
    startsWith: function(l) {
      var p = n(s(this));
      a(l);
      var d = r(c(arguments.length > 1 ? arguments[1] : void 0, p.length)), v = n(l);
      return h(p, d, d + v.length) === v;
    }
  }), Fo;
}
Dc();
var ni, Xo;
function Fc() {
  if (Xo) return ni;
  Xo = 1;
  var i = at(), t = ze(), e = Wt().f, r = i("unscopables"), n = Array.prototype;
  return n[r] === void 0 && e(n, r, {
    configurable: !0,
    value: t(null)
  }), ni = function(a) {
    n[r][a] = !0;
  }, ni;
}
var ii, Ho;
function Bc() {
  if (Ho) return ii;
  Ho = 1;
  var i = J();
  return ii = !i(function() {
    function t() {
    }
    return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
  }), ii;
}
var ai, Yo;
function Th() {
  if (Yo) return ai;
  Yo = 1;
  var i = Pt(), t = et(), e = Ve(), r = Vi(), n = Bc(), a = r("IE_PROTO"), s = Object, o = s.prototype;
  return ai = n ? s.getPrototypeOf : function(u) {
    var h = e(u);
    if (i(h, a)) return h[a];
    var c = h.constructor;
    return t(c) && h instanceof c ? c.prototype : h instanceof s ? o : null;
  }, ai;
}
var si, Wo;
function Oh() {
  if (Wo) return si;
  Wo = 1;
  var i = J(), t = et(), e = Et(), r = ze(), n = Th(), a = te(), s = at(), o = Vt(), u = s("iterator"), h = !1, c, f, g;
  [].keys && (g = [].keys(), "next" in g ? (f = n(n(g)), f !== Object.prototype && (c = f)) : h = !0);
  var l = !e(c) || i(function() {
    var p = {};
    return c[u].call(p) !== p;
  });
  return l ? c = {} : o && (c = r(c)), t(c[u]) || a(c, u, function() {
    return this;
  }), si = {
    IteratorPrototype: c,
    BUGGY_SAFARI_ITERATORS: h
  }, si;
}
var oi, Go;
function jc() {
  if (Go) return oi;
  Go = 1;
  var i = Oh().IteratorPrototype, t = ze(), e = Ei(), r = Be(), n = ye(), a = function() {
    return this;
  };
  return oi = function(s, o, u, h) {
    var c = o + " Iterator";
    return s.prototype = t(i, {
      next: e(+!h, u)
    }), r(s, c, !1, !0), n[c] = a, s;
  }, oi;
}
var ui, $o;
function zc() {
  if ($o) return ui;
  $o = 1;
  var i = ht(), t = st(), e = Vt(), r = Ie(), n = et(), a = jc(), s = Th(), o = lh(), u = Be(), h = pe(), c = te(), f = at(), g = ye(), l = Oh(), p = r.PROPER, d = r.CONFIGURABLE, v = l.IteratorPrototype, y = l.BUGGY_SAFARI_ITERATORS, m = f("iterator"), x = "keys", b = "values", O = "entries", S = function() {
    return this;
  };
  return ui = function(T, N, k, V, R, P, C) {
    a(k, N, V);
    var E = function(G) {
      if (G === R && M) return M;
      if (!y && G && G in _) return _[G];
      switch (G) {
        case x:
          return function() {
            return new k(this, G);
          };
        case b:
          return function() {
            return new k(this, G);
          };
        case O:
          return function() {
            return new k(this, G);
          };
      }
      return function() {
        return new k(this);
      };
    }, D = N + " Iterator", U = !1, _ = T.prototype, B = _[m] || _["@@iterator"] || R && _[R], M = !y && B || E(R), F = N === "Array" && _.entries || B, j, Y, q;
    if (F && (j = s(F.call(new T())), j !== Object.prototype && j.next && (!e && s(j) !== v && (o ? o(j, v) : n(j[m]) || c(j, m, S)), u(j, D, !0, !0), e && (g[D] = S))), p && R === b && B && B.name !== b && (!e && d ? h(_, "name", b) : (U = !0, M = function() {
      return t(B, this);
    })), R) if (Y = {
      values: E(b),
      keys: P ? M : E(x),
      entries: E(O)
    }, C) for (q in Y) (y || U || !(q in _)) && c(_, q, Y[q]);
    else i({
      target: N,
      proto: !0,
      forced: y || U
    }, Y);
    return (!e || C) && _[m] !== M && c(_, m, M, {
      name: R
    }), g[N] = M, Y;
  }, ui;
}
var qo, Qo;
function Uc() {
  return Qo || (Qo = 1, qo = function(i, t) {
    return {
      value: i,
      done: t
    };
  }), qo;
}
var hi, Zo;
function Ah() {
  if (Zo) return hi;
  Zo = 1;
  var i = fe(), t = Fc(), e = ye(), r = Le(), n = Wt().f, a = zc(), s = Uc(), o = Vt(), u = Ot(), h = "Array Iterator", c = r.set, f = r.getterFor(h);
  hi = a(Array, "Array", function(l, p) {
    c(this, {
      type: h,
      target: i(l),
      // target
      index: 0,
      // next index
      kind: p
      // kind
    });
  }, function() {
    var l = f(this), p = l.target, d = l.index++;
    if (!p || d >= p.length) return l.target = null, s(void 0, !0);
    switch (l.kind) {
      case "keys":
        return s(d, !1);
      case "values":
        return s(p[d], !1);
    }
    return s([d, p[d]], !1);
  }, "values");
  var g = e.Arguments = e.Array;
  if (t("keys"), t("values"), t("entries"), !o && u && g.name !== "values") try {
    n(g, "name", {
      value: "values"
    });
  } catch {
  }
  return hi;
}
Ah();
var Ko = {}, Jo, tu;
function Xc() {
  return tu || (tu = 1, Jo = {
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
  }), Jo;
}
var ci, eu;
function Hc() {
  if (eu) return ci;
  eu = 1;
  var i = ke(), t = i("span").classList, e = t && t.constructor && t.constructor.prototype;
  return ci = e === Object.prototype ? void 0 : e, ci;
}
var ru;
function Yc() {
  if (ru) return Ko;
  ru = 1;
  var i = Z(), t = Xc(), e = Hc(), r = Ah(), n = pe(), a = Be(), s = at(), o = s("iterator"), u = r.values, h = function(f, g) {
    if (f) {
      if (f[o] !== u) try {
        n(f, o, u);
      } catch {
        f[o] = u;
      }
      if (a(f, g, !0), t[g]) {
        for (var l in r) if (f[l] !== r[l]) try {
          n(f, l, r[l]);
        } catch {
          f[l] = r[l];
        }
      }
    }
  };
  for (var c in t) h(i[c] && i[c].prototype, c);
  return h(e, "DOMTokenList"), Ko;
}
Yc();
function Wc(i, t) {
  if (bi(i) != "object" || !i) return i;
  var e = i[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(i, t || "default");
    if (bi(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(i);
}
function Gc(i) {
  var t = Wc(i, "string");
  return bi(t) == "symbol" ? t : t + "";
}
function Yi(i, t, e) {
  return (t = Gc(t)) in i ? Object.defineProperty(i, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : i[t] = e, i;
}
var nu = {}, li, iu;
function $c() {
  if (iu) return li;
  iu = 1;
  var i = Bt(), t = Ve(), e = Ku(), r = _i(), n = TypeError, a = "Reduce of empty array with no initial value", s = function(o) {
    return function(u, h, c, f) {
      var g = t(u), l = e(g), p = r(g);
      if (i(h), p === 0 && c < 2) throw new n(a);
      var d = o ? p - 1 : 0, v = o ? -1 : 1;
      if (c < 2) for (; ; ) {
        if (d in l) {
          f = l[d], d += v;
          break;
        }
        if (d += v, o ? d < 0 : p <= d) throw new n(a);
      }
      for (; o ? d >= 0 : p > d; d += v) d in l && (f = h(f, l[d], d, g));
      return f;
    };
  };
  return li = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: s(!1),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: s(!0)
  }, li;
}
var fi, au;
function Eh() {
  if (au) return fi;
  au = 1;
  var i = J();
  return fi = function(t, e) {
    var r = [][t];
    return !!r && i(function() {
      r.call(null, e || function() {
        return 1;
      }, 1);
    });
  }, fi;
}
var su;
function qc() {
  if (su) return nu;
  su = 1;
  var i = ht(), t = $c().left, e = Eh(), r = Pi(), n = Fe(), a = !n && r > 79 && r < 83, s = a || !e("reduce");
  return i({
    target: "Array",
    proto: !0,
    forced: s
  }, {
    reduce: function(o) {
      var u = arguments.length;
      return t(this, o, u, u > 1 ? arguments[1] : void 0);
    }
  }), nu;
}
qc();
var ou = {}, uu;
function Qc() {
  if (uu) return ou;
  uu = 1;
  var i = ht(), t = je(), e = _e().f, r = ae(), n = kt(), a = Xi(), s = At(), o = Hi(), u = Vt(), h = t("".slice), c = Math.min, f = o("endsWith"), g = !u && !f && !!function() {
    var l = e(String.prototype, "endsWith");
    return l && !l.writable;
  }();
  return i({
    target: "String",
    proto: !0,
    forced: !g && !f
  }, {
    endsWith: function(l) {
      var p = n(s(this));
      a(l);
      var d = arguments.length > 1 ? arguments[1] : void 0, v = p.length, y = d === void 0 ? v : c(r(d), v), m = n(l);
      return h(p, y - m.length, y) === m;
    }
  }), ou;
}
Qc();
var hu = {}, cu;
function Zc() {
  if (cu) return hu;
  cu = 1;
  var i = st(), t = tt(), e = ji(), r = ut(), n = Kt(), a = At(), s = fh(), o = zi(), u = ae(), h = kt(), c = ie(), f = Ui(), g = Sh(), l = J(), p = g.UNSUPPORTED_Y, d = 4294967295, v = Math.min, y = t([].push), m = t("".slice), x = !l(function() {
    var O = /(?:)/, S = O.exec;
    O.exec = function() {
      return S.apply(this, arguments);
    };
    var T = "ab".split(O);
    return T.length !== 2 || T[0] !== "a" || T[1] !== "b";
  }), b = "abbc".split(/(b)*/)[1] === "c" || // eslint-disable-next-line regexp/no-empty-group -- required for testing
  "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
  ".".split(/()()/).length > 1 || "".split(/.?/).length;
  return e("split", function(O, S, T) {
    var N = "0".split(void 0, 0).length ? function(k, V) {
      return k === void 0 && V === 0 ? [] : i(S, this, k, V);
    } : S;
    return [
      // `String.prototype.split` method
      // https://tc39.es/ecma262/#sec-string.prototype.split
      function(k, V) {
        var R = a(this), P = n(k) ? void 0 : c(k, O);
        return P ? i(P, k, R, V) : i(N, h(R), k, V);
      },
      // `RegExp.prototype[@@split]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function(k, V) {
        var R = r(this), P = h(k);
        if (!b) {
          var C = T(N, R, P, V, N !== S);
          if (C.done) return C.value;
        }
        var E = s(R, RegExp), D = R.unicode, U = (R.ignoreCase ? "i" : "") + (R.multiline ? "m" : "") + (R.unicode ? "u" : "") + (p ? "g" : "y"), _ = new E(p ? "^(?:" + R.source + ")" : R, U), B = V === void 0 ? d : V >>> 0;
        if (B === 0) return [];
        if (P.length === 0) return f(_, P) === null ? [P] : [];
        for (var M = 0, F = 0, j = []; F < P.length; ) {
          _.lastIndex = p ? 0 : F;
          var Y = f(_, p ? m(P, F) : P), q;
          if (Y === null || (q = v(u(_.lastIndex + (p ? F : 0)), P.length)) === M) F = o(P, F, D);
          else {
            if (y(j, m(P, M, F)), j.length === B) return j;
            for (var G = 1; G <= Y.length - 1; G++) if (y(j, Y[G]), j.length === B) return j;
            F = M = q;
          }
        }
        return y(j, m(P, M)), j;
      }
    ];
  }, b || !x, p), hu;
}
Zc();
var ce = {
  exports: {}
}, re = {
  exports: {}
}, Kc = re.exports, lu;
function Jc() {
  return lu || (lu = 1, (function() {
    var i, t, e, r, n, a;
    typeof performance < "u" && performance !== null && performance.now ? re.exports = function() {
      return performance.now();
    } : typeof process < "u" && process !== null && process.hrtime ? (re.exports = function() {
      return (i() - n) / 1e6;
    }, t = process.hrtime, i = function() {
      var s;
      return s = t(), s[0] * 1e9 + s[1];
    }, r = i(), a = process.uptime() * 1e9, n = r - a) : Date.now ? (re.exports = function() {
      return Date.now() - e;
    }, e = Date.now()) : (re.exports = function() {
      return (/* @__PURE__ */ new Date()).getTime() - e;
    }, e = (/* @__PURE__ */ new Date()).getTime());
  }).call(Kc)), re.exports;
}
var fu;
function tl() {
  if (fu) return ce.exports;
  fu = 1;
  for (var i = Jc(), t = typeof window > "u" ? wi : window, e = ["moz", "webkit"], r = "AnimationFrame", n = t["request" + r], a = t["cancel" + r] || t["cancelRequest" + r], s = 0; !n && s < e.length; s++) n = t[e[s] + "Request" + r], a = t[e[s] + "Cancel" + r] || t[e[s] + "CancelRequest" + r];
  if (!n || !a) {
    var o = 0, u = 0, h = [], c = 1e3 / 60;
    n = function(f) {
      if (h.length === 0) {
        var g = i(), l = Math.max(0, c - (g - o));
        o = l + g, setTimeout(function() {
          var p = h.slice(0);
          h.length = 0;
          for (var d = 0; d < p.length; d++) if (!p[d].cancelled) try {
            p[d].callback(o);
          } catch (v) {
            setTimeout(function() {
              throw v;
            }, 0);
          }
        }, Math.round(l));
      }
      return h.push({
        handle: ++u,
        callback: f,
        cancelled: !1
      }), u;
    }, a = function(f) {
      for (var g = 0; g < h.length; g++) h[g].handle === f && (h[g].cancelled = !0);
    };
  }
  return ce.exports = function(f) {
    return n.call(t, f);
  }, ce.exports.cancel = function() {
    a.apply(t, arguments);
  }, ce.exports.polyfill = function(f) {
    f || (f = t), f.requestAnimationFrame = n, f.cancelAnimationFrame = a;
  }, ce.exports;
}
var el = tl();
const gi = /* @__PURE__ */ Zu(el);
var gu = {}, pu, du;
function Ph() {
  return du || (du = 1, pu = `	
\v\f\r                　\u2028\u2029\uFEFF`), pu;
}
var pi, vu;
function rl() {
  if (vu) return pi;
  vu = 1;
  var i = tt(), t = At(), e = kt(), r = Ph(), n = i("".replace), a = RegExp("^[" + r + "]+"), s = RegExp("(^|[^" + r + "])[" + r + "]+$"), o = function(u) {
    return function(h) {
      var c = e(t(h));
      return u & 1 && (c = n(c, a, "")), u & 2 && (c = n(c, s, "$1")), c;
    };
  };
  return pi = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: o(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: o(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: o(3)
  }, pi;
}
var di, mu;
function nl() {
  if (mu) return di;
  mu = 1;
  var i = Ie().PROPER, t = J(), e = Ph(), r = "​᠎";
  return di = function(n) {
    return t(function() {
      return !!e[n]() || r[n]() !== r || i && e[n].name !== n;
    });
  }, di;
}
var yu;
function il() {
  if (yu) return gu;
  yu = 1;
  var i = ht(), t = rl().trim, e = nl();
  return i({
    target: "String",
    proto: !0,
    forced: e("trim")
  }, {
    trim: function() {
      return t(this);
    }
  }), gu;
}
il();
var xu, bu;
function al() {
  return bu || (bu = 1, xu = function(i) {
    this.ok = !1, this.alpha = 1, i.charAt(0) == "#" && (i = i.substr(1, 6)), i = i.replace(/ /g, ""), i = i.toLowerCase();
    var t = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "00ffff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000000",
      blanchedalmond: "ffebcd",
      blue: "0000ff",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "00ffff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dodgerblue: "1e90ff",
      feldspar: "d19275",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "ff00ff",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgrey: "d3d3d3",
      lightgreen: "90ee90",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslateblue: "8470ff",
      lightslategray: "778899",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "00ff00",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "ff00ff",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370d8",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "d87093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "663399",
      red: "ff0000",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      violetred: "d02090",
      wheat: "f5deb3",
      white: "ffffff",
      whitesmoke: "f5f5f5",
      yellow: "ffff00",
      yellowgreen: "9acd32"
    };
    i = t[i] || i;
    for (var e = [{
      re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
      example: ["rgba(123, 234, 45, 0.8)", "rgba(255,234,245,1.0)"],
      process: function(u) {
        return [parseInt(u[1]), parseInt(u[2]), parseInt(u[3]), parseFloat(u[4])];
      }
    }, {
      re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
      example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
      process: function(u) {
        return [parseInt(u[1]), parseInt(u[2]), parseInt(u[3])];
      }
    }, {
      re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      example: ["#00ff00", "336699"],
      process: function(u) {
        return [parseInt(u[1], 16), parseInt(u[2], 16), parseInt(u[3], 16)];
      }
    }, {
      re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      example: ["#fb0", "f0f"],
      process: function(u) {
        return [parseInt(u[1] + u[1], 16), parseInt(u[2] + u[2], 16), parseInt(u[3] + u[3], 16)];
      }
    }], r = 0; r < e.length; r++) {
      var n = e[r].re, a = e[r].process, s = n.exec(i);
      if (s) {
        var o = a(s);
        this.r = o[0], this.g = o[1], this.b = o[2], o.length > 3 && (this.alpha = o[3]), this.ok = !0;
      }
    }
    this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.alpha = this.alpha < 0 ? 0 : this.alpha > 1 || isNaN(this.alpha) ? 1 : this.alpha, this.toRGB = function() {
      return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    }, this.toRGBA = function() {
      return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")";
    }, this.toHex = function() {
      var u = this.r.toString(16), h = this.g.toString(16), c = this.b.toString(16);
      return u.length == 1 && (u = "0" + u), h.length == 1 && (h = "0" + h), c.length == 1 && (c = "0" + c), "#" + u + h + c;
    }, this.getHelpXML = function() {
      for (var u = new Array(), h = 0; h < e.length; h++) for (var c = e[h].example, f = 0; f < c.length; f++) u[u.length] = c[f];
      for (var g in t) u[u.length] = g;
      var l = document.createElement("ul");
      l.setAttribute("id", "rgbcolor-examples");
      for (var h = 0; h < u.length; h++) try {
        var p = document.createElement("li"), d = new RGBColor(u[h]), v = document.createElement("div");
        v.style.cssText = "margin: 3px; border: 1px solid black; background:" + d.toHex() + "; color:" + d.toHex(), v.appendChild(document.createTextNode("test"));
        var y = document.createTextNode(" " + u[h] + " -> " + d.toRGB() + " -> " + d.toHex());
        p.appendChild(v), p.appendChild(y), l.appendChild(p);
      } catch {
      }
      return l;
    };
  }), xu;
}
var sl = al();
const Si = /* @__PURE__ */ Zu(sl);
var wu = {}, Su;
function ol() {
  if (Su) return wu;
  Su = 1;
  var i = ht(), t = je(), e = oh().indexOf, r = Eh(), n = t([].indexOf), a = !!n && 1 / n([1], 1, -0) < 0, s = a || !r("indexOf");
  return i({
    target: "Array",
    proto: !0,
    forced: s
  }, {
    indexOf: function(o) {
      var u = arguments.length > 1 ? arguments[1] : void 0;
      return a ? n(this, o, u) || 0 : e(this, o, u);
    }
  }), wu;
}
ol();
var Tu = {}, Ou;
function ul() {
  if (Ou) return Tu;
  Ou = 1;
  var i = ht(), t = tt(), e = Xi(), r = At(), n = kt(), a = Hi(), s = t("".indexOf);
  return i({
    target: "String",
    proto: !0,
    forced: !a("includes")
  }, {
    includes: function(o) {
      return !!~s(n(r(this)), n(e(o)), arguments.length > 1 ? arguments[1] : void 0);
    }
  }), Tu;
}
ul();
var Au = {}, vi, Eu;
function hl() {
  if (Eu) return vi;
  Eu = 1;
  var i = Zt();
  return vi = Array.isArray || function(t) {
    return i(t) === "Array";
  }, vi;
}
var Pu;
function cl() {
  if (Pu) return Au;
  Pu = 1;
  var i = ht(), t = tt(), e = hl(), r = t([].reverse), n = [1, 2];
  return i({
    target: "Array",
    proto: !0,
    forced: String(n) === String(n.reverse())
  }, {
    reverse: function() {
      return e(this) && (this.length = this.length), r(this);
    }
  }), Au;
}
cl();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Ch = function(i, t) {
  return (Ch = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(e, r) {
    e.__proto__ = r;
  } || function(e, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  })(i, t);
};
function Mh(i, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  function e() {
    this.constructor = i;
  }
  Ch(i, t), i.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
}
function ll(i) {
  var t = "";
  Array.isArray(i) || (i = [i]);
  for (var e = 0; e < i.length; e++) {
    var r = i[e];
    if (r.type === w.CLOSE_PATH) t += "z";
    else if (r.type === w.HORIZ_LINE_TO) t += (r.relative ? "h" : "H") + r.x;
    else if (r.type === w.VERT_LINE_TO) t += (r.relative ? "v" : "V") + r.y;
    else if (r.type === w.MOVE_TO) t += (r.relative ? "m" : "M") + r.x + " " + r.y;
    else if (r.type === w.LINE_TO) t += (r.relative ? "l" : "L") + r.x + " " + r.y;
    else if (r.type === w.CURVE_TO) t += (r.relative ? "c" : "C") + r.x1 + " " + r.y1 + " " + r.x2 + " " + r.y2 + " " + r.x + " " + r.y;
    else if (r.type === w.SMOOTH_CURVE_TO) t += (r.relative ? "s" : "S") + r.x2 + " " + r.y2 + " " + r.x + " " + r.y;
    else if (r.type === w.QUAD_TO) t += (r.relative ? "q" : "Q") + r.x1 + " " + r.y1 + " " + r.x + " " + r.y;
    else if (r.type === w.SMOOTH_QUAD_TO) t += (r.relative ? "t" : "T") + r.x + " " + r.y;
    else {
      if (r.type !== w.ARC) throw new Error('Unexpected command type "' + r.type + '" at index ' + e + ".");
      t += (r.relative ? "a" : "A") + r.rX + " " + r.rY + " " + r.xRot + " " + +r.lArcFlag + " " + +r.sweepFlag + " " + r.x + " " + r.y;
    }
  }
  return t;
}
function Ti(i, t) {
  var e = i[0], r = i[1];
  return [e * Math.cos(t) - r * Math.sin(t), e * Math.sin(t) + r * Math.cos(t)];
}
function Tt() {
  for (var i = [], t = 0; t < arguments.length; t++) i[t] = arguments[t];
  for (var e = 0; e < i.length; e++) if (typeof i[e] != "number") throw new Error("assertNumbers arguments[" + e + "] is not a number. " + typeof i[e] + " == typeof " + i[e]);
  return !0;
}
var Xt = Math.PI;
function mi(i, t, e) {
  i.lArcFlag = i.lArcFlag === 0 ? 0 : 1, i.sweepFlag = i.sweepFlag === 0 ? 0 : 1;
  var r = i.rX, n = i.rY, a = i.x, s = i.y;
  r = Math.abs(i.rX), n = Math.abs(i.rY);
  var o = Ti([(t - a) / 2, (e - s) / 2], -i.xRot / 180 * Xt), u = o[0], h = o[1], c = Math.pow(u, 2) / Math.pow(r, 2) + Math.pow(h, 2) / Math.pow(n, 2);
  1 < c && (r *= Math.sqrt(c), n *= Math.sqrt(c)), i.rX = r, i.rY = n;
  var f = Math.pow(r, 2) * Math.pow(h, 2) + Math.pow(n, 2) * Math.pow(u, 2), g = (i.lArcFlag !== i.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(r, 2) * Math.pow(n, 2) - f) / f)), l = r * h / n * g, p = -n * u / r * g, d = Ti([l, p], i.xRot / 180 * Xt);
  i.cX = d[0] + (t + a) / 2, i.cY = d[1] + (e + s) / 2, i.phi1 = Math.atan2((h - p) / n, (u - l) / r), i.phi2 = Math.atan2((-h - p) / n, (-u - l) / r), i.sweepFlag === 0 && i.phi2 > i.phi1 && (i.phi2 -= 2 * Xt), i.sweepFlag === 1 && i.phi2 < i.phi1 && (i.phi2 += 2 * Xt), i.phi1 *= 180 / Xt, i.phi2 *= 180 / Xt;
}
function Cu(i, t, e) {
  Tt(i, t, e);
  var r = i * i + t * t - e * e;
  if (0 > r) return [];
  if (r === 0) return [[i * e / (i * i + t * t), t * e / (i * i + t * t)]];
  var n = Math.sqrt(r);
  return [[(i * e + t * n) / (i * i + t * t), (t * e - i * n) / (i * i + t * t)], [(i * e - t * n) / (i * i + t * t), (t * e + i * n) / (i * i + t * t)]];
}
var it, Lt = Math.PI / 180;
function Mu(i, t, e) {
  return (1 - e) * i + e * t;
}
function Nu(i, t, e, r) {
  return i + Math.cos(r / 180 * Xt) * t + Math.sin(r / 180 * Xt) * e;
}
function Ru(i, t, e, r) {
  var n = 1e-6, a = t - i, s = e - t, o = 3 * a + 3 * (r - e) - 6 * s, u = 6 * (s - a), h = 3 * a;
  return Math.abs(o) < n ? [-h / u] : function(c, f, g) {
    var l = c * c / 4 - f;
    if (l < -1e-6) return [];
    if (l <= g) return [-c / 2];
    var p = Math.sqrt(l);
    return [-c / 2 - p, -c / 2 + p];
  }(u / o, h / o, n);
}
function Vu(i, t, e, r, n) {
  var a = 1 - n;
  return i * (a * a * a) + t * (3 * a * a * n) + e * (3 * a * n * n) + r * (n * n * n);
}
(function(i) {
  function t() {
    return n(function(o, u, h) {
      return o.relative && (o.x1 !== void 0 && (o.x1 += u), o.y1 !== void 0 && (o.y1 += h), o.x2 !== void 0 && (o.x2 += u), o.y2 !== void 0 && (o.y2 += h), o.x !== void 0 && (o.x += u), o.y !== void 0 && (o.y += h), o.relative = !1), o;
    });
  }
  function e() {
    var o = NaN, u = NaN, h = NaN, c = NaN;
    return n(function(f, g, l) {
      return f.type & w.SMOOTH_CURVE_TO && (f.type = w.CURVE_TO, o = isNaN(o) ? g : o, u = isNaN(u) ? l : u, f.x1 = f.relative ? g - o : 2 * g - o, f.y1 = f.relative ? l - u : 2 * l - u), f.type & w.CURVE_TO ? (o = f.relative ? g + f.x2 : f.x2, u = f.relative ? l + f.y2 : f.y2) : (o = NaN, u = NaN), f.type & w.SMOOTH_QUAD_TO && (f.type = w.QUAD_TO, h = isNaN(h) ? g : h, c = isNaN(c) ? l : c, f.x1 = f.relative ? g - h : 2 * g - h, f.y1 = f.relative ? l - c : 2 * l - c), f.type & w.QUAD_TO ? (h = f.relative ? g + f.x1 : f.x1, c = f.relative ? l + f.y1 : f.y1) : (h = NaN, c = NaN), f;
    });
  }
  function r() {
    var o = NaN, u = NaN;
    return n(function(h, c, f) {
      if (h.type & w.SMOOTH_QUAD_TO && (h.type = w.QUAD_TO, o = isNaN(o) ? c : o, u = isNaN(u) ? f : u, h.x1 = h.relative ? c - o : 2 * c - o, h.y1 = h.relative ? f - u : 2 * f - u), h.type & w.QUAD_TO) {
        o = h.relative ? c + h.x1 : h.x1, u = h.relative ? f + h.y1 : h.y1;
        var g = h.x1, l = h.y1;
        h.type = w.CURVE_TO, h.x1 = ((h.relative ? 0 : c) + 2 * g) / 3, h.y1 = ((h.relative ? 0 : f) + 2 * l) / 3, h.x2 = (h.x + 2 * g) / 3, h.y2 = (h.y + 2 * l) / 3;
      } else o = NaN, u = NaN;
      return h;
    });
  }
  function n(o) {
    var u = 0, h = 0, c = NaN, f = NaN;
    return function(g) {
      if (isNaN(c) && !(g.type & w.MOVE_TO)) throw new Error("path must start with moveto");
      var l = o(g, u, h, c, f);
      return g.type & w.CLOSE_PATH && (u = c, h = f), g.x !== void 0 && (u = g.relative ? u + g.x : g.x), g.y !== void 0 && (h = g.relative ? h + g.y : g.y), g.type & w.MOVE_TO && (c = u, f = h), l;
    };
  }
  function a(o, u, h, c, f, g) {
    return Tt(o, u, h, c, f, g), n(function(l, p, d, v) {
      var y = l.x1, m = l.x2, x = l.relative && !isNaN(v), b = l.x !== void 0 ? l.x : x ? 0 : p, O = l.y !== void 0 ? l.y : x ? 0 : d;
      function S(Y) {
        return Y * Y;
      }
      l.type & w.HORIZ_LINE_TO && u !== 0 && (l.type = w.LINE_TO, l.y = l.relative ? 0 : d), l.type & w.VERT_LINE_TO && h !== 0 && (l.type = w.LINE_TO, l.x = l.relative ? 0 : p), l.x !== void 0 && (l.x = l.x * o + O * h + (x ? 0 : f)), l.y !== void 0 && (l.y = b * u + l.y * c + (x ? 0 : g)), l.x1 !== void 0 && (l.x1 = l.x1 * o + l.y1 * h + (x ? 0 : f)), l.y1 !== void 0 && (l.y1 = y * u + l.y1 * c + (x ? 0 : g)), l.x2 !== void 0 && (l.x2 = l.x2 * o + l.y2 * h + (x ? 0 : f)), l.y2 !== void 0 && (l.y2 = m * u + l.y2 * c + (x ? 0 : g));
      var T = o * c - u * h;
      if (l.xRot !== void 0 && (o !== 1 || u !== 0 || h !== 0 || c !== 1)) if (T === 0) delete l.rX, delete l.rY, delete l.xRot, delete l.lArcFlag, delete l.sweepFlag, l.type = w.LINE_TO;
      else {
        var N = l.xRot * Math.PI / 180, k = Math.sin(N), V = Math.cos(N), R = 1 / S(l.rX), P = 1 / S(l.rY), C = S(V) * R + S(k) * P, E = 2 * k * V * (R - P), D = S(k) * R + S(V) * P, U = C * c * c - E * u * c + D * u * u, _ = E * (o * c + u * h) - 2 * (C * h * c + D * o * u), B = C * h * h - E * o * h + D * o * o, M = (Math.atan2(_, U - B) + Math.PI) % Math.PI / 2, F = Math.sin(M), j = Math.cos(M);
        l.rX = Math.abs(T) / Math.sqrt(U * S(j) + _ * F * j + B * S(F)), l.rY = Math.abs(T) / Math.sqrt(U * S(F) - _ * F * j + B * S(j)), l.xRot = 180 * M / Math.PI;
      }
      return l.sweepFlag !== void 0 && 0 > T && (l.sweepFlag = +!l.sweepFlag), l;
    });
  }
  function s() {
    return function(o) {
      var u = {};
      for (var h in o) u[h] = o[h];
      return u;
    };
  }
  i.ROUND = function(o) {
    function u(h) {
      return Math.round(h * o) / o;
    }
    return o === void 0 && (o = 1e13), Tt(o), function(h) {
      return h.x1 !== void 0 && (h.x1 = u(h.x1)), h.y1 !== void 0 && (h.y1 = u(h.y1)), h.x2 !== void 0 && (h.x2 = u(h.x2)), h.y2 !== void 0 && (h.y2 = u(h.y2)), h.x !== void 0 && (h.x = u(h.x)), h.y !== void 0 && (h.y = u(h.y)), h.rX !== void 0 && (h.rX = u(h.rX)), h.rY !== void 0 && (h.rY = u(h.rY)), h;
    };
  }, i.TO_ABS = t, i.TO_REL = function() {
    return n(function(o, u, h) {
      return o.relative || (o.x1 !== void 0 && (o.x1 -= u), o.y1 !== void 0 && (o.y1 -= h), o.x2 !== void 0 && (o.x2 -= u), o.y2 !== void 0 && (o.y2 -= h), o.x !== void 0 && (o.x -= u), o.y !== void 0 && (o.y -= h), o.relative = !0), o;
    });
  }, i.NORMALIZE_HVZ = function(o, u, h) {
    return o === void 0 && (o = !0), u === void 0 && (u = !0), h === void 0 && (h = !0), n(function(c, f, g, l, p) {
      if (isNaN(l) && !(c.type & w.MOVE_TO)) throw new Error("path must start with moveto");
      return u && c.type & w.HORIZ_LINE_TO && (c.type = w.LINE_TO, c.y = c.relative ? 0 : g), h && c.type & w.VERT_LINE_TO && (c.type = w.LINE_TO, c.x = c.relative ? 0 : f), o && c.type & w.CLOSE_PATH && (c.type = w.LINE_TO, c.x = c.relative ? l - f : l, c.y = c.relative ? p - g : p), c.type & w.ARC && (c.rX === 0 || c.rY === 0) && (c.type = w.LINE_TO, delete c.rX, delete c.rY, delete c.xRot, delete c.lArcFlag, delete c.sweepFlag), c;
    });
  }, i.NORMALIZE_ST = e, i.QT_TO_C = r, i.INFO = n, i.SANITIZE = function(o) {
    o === void 0 && (o = 0), Tt(o);
    var u = NaN, h = NaN, c = NaN, f = NaN;
    return n(function(g, l, p, d, v) {
      var y = Math.abs, m = !1, x = 0, b = 0;
      if (g.type & w.SMOOTH_CURVE_TO && (x = isNaN(u) ? 0 : l - u, b = isNaN(h) ? 0 : p - h), g.type & (w.CURVE_TO | w.SMOOTH_CURVE_TO) ? (u = g.relative ? l + g.x2 : g.x2, h = g.relative ? p + g.y2 : g.y2) : (u = NaN, h = NaN), g.type & w.SMOOTH_QUAD_TO ? (c = isNaN(c) ? l : 2 * l - c, f = isNaN(f) ? p : 2 * p - f) : g.type & w.QUAD_TO ? (c = g.relative ? l + g.x1 : g.x1, f = g.relative ? p + g.y1 : g.y2) : (c = NaN, f = NaN), g.type & w.LINE_COMMANDS || g.type & w.ARC && (g.rX === 0 || g.rY === 0 || !g.lArcFlag) || g.type & w.CURVE_TO || g.type & w.SMOOTH_CURVE_TO || g.type & w.QUAD_TO || g.type & w.SMOOTH_QUAD_TO) {
        var O = g.x === void 0 ? 0 : g.relative ? g.x : g.x - l, S = g.y === void 0 ? 0 : g.relative ? g.y : g.y - p;
        x = isNaN(c) ? g.x1 === void 0 ? x : g.relative ? g.x : g.x1 - l : c - l, b = isNaN(f) ? g.y1 === void 0 ? b : g.relative ? g.y : g.y1 - p : f - p;
        var T = g.x2 === void 0 ? 0 : g.relative ? g.x : g.x2 - l, N = g.y2 === void 0 ? 0 : g.relative ? g.y : g.y2 - p;
        y(O) <= o && y(S) <= o && y(x) <= o && y(b) <= o && y(T) <= o && y(N) <= o && (m = !0);
      }
      return g.type & w.CLOSE_PATH && y(l - d) <= o && y(p - v) <= o && (m = !0), m ? [] : g;
    });
  }, i.MATRIX = a, i.ROTATE = function(o, u, h) {
    u === void 0 && (u = 0), h === void 0 && (h = 0), Tt(o, u, h);
    var c = Math.sin(o), f = Math.cos(o);
    return a(f, c, -c, f, u - u * f + h * c, h - u * c - h * f);
  }, i.TRANSLATE = function(o, u) {
    return u === void 0 && (u = 0), Tt(o, u), a(1, 0, 0, 1, o, u);
  }, i.SCALE = function(o, u) {
    return u === void 0 && (u = o), Tt(o, u), a(o, 0, 0, u, 0, 0);
  }, i.SKEW_X = function(o) {
    return Tt(o), a(1, 0, Math.atan(o), 1, 0, 0);
  }, i.SKEW_Y = function(o) {
    return Tt(o), a(1, Math.atan(o), 0, 1, 0, 0);
  }, i.X_AXIS_SYMMETRY = function(o) {
    return o === void 0 && (o = 0), Tt(o), a(-1, 0, 0, 1, o, 0);
  }, i.Y_AXIS_SYMMETRY = function(o) {
    return o === void 0 && (o = 0), Tt(o), a(1, 0, 0, -1, 0, o);
  }, i.A_TO_C = function() {
    return n(function(o, u, h) {
      return w.ARC === o.type ? function(c, f, g) {
        var l, p, d, v;
        c.cX || mi(c, f, g);
        for (var y = Math.min(c.phi1, c.phi2), m = Math.max(c.phi1, c.phi2) - y, x = Math.ceil(m / 90), b = new Array(x), O = f, S = g, T = 0; T < x; T++) {
          var N = Mu(c.phi1, c.phi2, T / x), k = Mu(c.phi1, c.phi2, (T + 1) / x), V = k - N, R = 4 / 3 * Math.tan(V * Lt / 4), P = [Math.cos(N * Lt) - R * Math.sin(N * Lt), Math.sin(N * Lt) + R * Math.cos(N * Lt)], C = P[0], E = P[1], D = [Math.cos(k * Lt), Math.sin(k * Lt)], U = D[0], _ = D[1], B = [U + R * Math.sin(k * Lt), _ - R * Math.cos(k * Lt)], M = B[0], F = B[1];
          b[T] = {
            relative: c.relative,
            type: w.CURVE_TO
          };
          var j = function(Y, q) {
            var G = Ti([Y * c.rX, q * c.rY], c.xRot), rt = G[0], jt = G[1];
            return [c.cX + rt, c.cY + jt];
          };
          l = j(C, E), b[T].x1 = l[0], b[T].y1 = l[1], p = j(M, F), b[T].x2 = p[0], b[T].y2 = p[1], d = j(U, _), b[T].x = d[0], b[T].y = d[1], c.relative && (b[T].x1 -= O, b[T].y1 -= S, b[T].x2 -= O, b[T].y2 -= S, b[T].x -= O, b[T].y -= S), O = (v = [b[T].x, b[T].y])[0], S = v[1];
        }
        return b;
      }(o, o.relative ? 0 : u, o.relative ? 0 : h) : o;
    });
  }, i.ANNOTATE_ARCS = function() {
    return n(function(o, u, h) {
      return o.relative && (u = 0, h = 0), w.ARC === o.type && mi(o, u, h), o;
    });
  }, i.CLONE = s, i.CALCULATE_BOUNDS = function() {
    var o = function(g) {
      var l = {};
      for (var p in g) l[p] = g[p];
      return l;
    }, u = t(), h = r(), c = e(), f = n(function(g, l, p) {
      var d = c(h(u(o(g))));
      function v(F) {
        F > f.maxX && (f.maxX = F), F < f.minX && (f.minX = F);
      }
      function y(F) {
        F > f.maxY && (f.maxY = F), F < f.minY && (f.minY = F);
      }
      if (d.type & w.DRAWING_COMMANDS && (v(l), y(p)), d.type & w.HORIZ_LINE_TO && v(d.x), d.type & w.VERT_LINE_TO && y(d.y), d.type & w.LINE_TO && (v(d.x), y(d.y)), d.type & w.CURVE_TO) {
        v(d.x), y(d.y);
        for (var m = 0, x = Ru(l, d.x1, d.x2, d.x); m < x.length; m++) 0 < (M = x[m]) && 1 > M && v(Vu(l, d.x1, d.x2, d.x, M));
        for (var b = 0, O = Ru(p, d.y1, d.y2, d.y); b < O.length; b++) 0 < (M = O[b]) && 1 > M && y(Vu(p, d.y1, d.y2, d.y, M));
      }
      if (d.type & w.ARC) {
        v(d.x), y(d.y), mi(d, l, p);
        for (var S = d.xRot / 180 * Math.PI, T = Math.cos(S) * d.rX, N = Math.sin(S) * d.rX, k = -Math.sin(S) * d.rY, V = Math.cos(S) * d.rY, R = d.phi1 < d.phi2 ? [d.phi1, d.phi2] : -180 > d.phi2 ? [d.phi2 + 360, d.phi1 + 360] : [d.phi2, d.phi1], P = R[0], C = R[1], E = function(F) {
          var j = F[0], Y = F[1], q = 180 * Math.atan2(Y, j) / Math.PI;
          return q < P ? q + 360 : q;
        }, D = 0, U = Cu(k, -T, 0).map(E); D < U.length; D++) (M = U[D]) > P && M < C && v(Nu(d.cX, T, k, M));
        for (var _ = 0, B = Cu(V, -N, 0).map(E); _ < B.length; _++) {
          var M;
          (M = B[_]) > P && M < C && y(Nu(d.cY, N, V, M));
        }
      }
      return g;
    });
    return f.minX = 1 / 0, f.maxX = -1 / 0, f.minY = 1 / 0, f.maxY = -1 / 0, f;
  };
})(it || (it = {}));
var St, Nh = function() {
  function i() {
  }
  return i.prototype.round = function(t) {
    return this.transform(it.ROUND(t));
  }, i.prototype.toAbs = function() {
    return this.transform(it.TO_ABS());
  }, i.prototype.toRel = function() {
    return this.transform(it.TO_REL());
  }, i.prototype.normalizeHVZ = function(t, e, r) {
    return this.transform(it.NORMALIZE_HVZ(t, e, r));
  }, i.prototype.normalizeST = function() {
    return this.transform(it.NORMALIZE_ST());
  }, i.prototype.qtToC = function() {
    return this.transform(it.QT_TO_C());
  }, i.prototype.aToC = function() {
    return this.transform(it.A_TO_C());
  }, i.prototype.sanitize = function(t) {
    return this.transform(it.SANITIZE(t));
  }, i.prototype.translate = function(t, e) {
    return this.transform(it.TRANSLATE(t, e));
  }, i.prototype.scale = function(t, e) {
    return this.transform(it.SCALE(t, e));
  }, i.prototype.rotate = function(t, e, r) {
    return this.transform(it.ROTATE(t, e, r));
  }, i.prototype.matrix = function(t, e, r, n, a, s) {
    return this.transform(it.MATRIX(t, e, r, n, a, s));
  }, i.prototype.skewX = function(t) {
    return this.transform(it.SKEW_X(t));
  }, i.prototype.skewY = function(t) {
    return this.transform(it.SKEW_Y(t));
  }, i.prototype.xSymmetry = function(t) {
    return this.transform(it.X_AXIS_SYMMETRY(t));
  }, i.prototype.ySymmetry = function(t) {
    return this.transform(it.Y_AXIS_SYMMETRY(t));
  }, i.prototype.annotateArcs = function() {
    return this.transform(it.ANNOTATE_ARCS());
  }, i;
}(), fl = function(i) {
  return i === " " || i === "	" || i === "\r" || i === `
`;
}, ku = function(i) {
  return 48 <= i.charCodeAt(0) && i.charCodeAt(0) <= 57;
}, gl = function(i) {
  function t() {
    var e = i.call(this) || this;
    return e.curNumber = "", e.curCommandType = -1, e.curCommandRelative = !1, e.canParseCommandOrComma = !0, e.curNumberHasExp = !1, e.curNumberHasExpDigits = !1, e.curNumberHasDecimal = !1, e.curArgs = [], e;
  }
  return Mh(t, i), t.prototype.finish = function(e) {
    if (e === void 0 && (e = []), this.parse(" ", e), this.curArgs.length !== 0 || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
    return e;
  }, t.prototype.parse = function(e, r) {
    var n = this;
    r === void 0 && (r = []);
    for (var a = function(f) {
      r.push(f), n.curArgs.length = 0, n.canParseCommandOrComma = !0;
    }, s = 0; s < e.length; s++) {
      var o = e[s], u = !(this.curCommandType !== w.ARC || this.curArgs.length !== 3 && this.curArgs.length !== 4 || this.curNumber.length !== 1 || this.curNumber !== "0" && this.curNumber !== "1"), h = ku(o) && (this.curNumber === "0" && o === "0" || u);
      if (!ku(o) || h)
        if (o !== "e" && o !== "E")
          if (o !== "-" && o !== "+" || !this.curNumberHasExp || this.curNumberHasExpDigits)
            if (o !== "." || this.curNumberHasExp || this.curNumberHasDecimal || u) {
              if (this.curNumber && this.curCommandType !== -1) {
                var c = Number(this.curNumber);
                if (isNaN(c)) throw new SyntaxError("Invalid number ending at " + s);
                if (this.curCommandType === w.ARC) {
                  if (this.curArgs.length === 0 || this.curArgs.length === 1) {
                    if (0 > c) throw new SyntaxError('Expected positive number, got "' + c + '" at index "' + s + '"');
                  } else if ((this.curArgs.length === 3 || this.curArgs.length === 4) && this.curNumber !== "0" && this.curNumber !== "1") throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + s + '"');
                }
                this.curArgs.push(c), this.curArgs.length === pl[this.curCommandType] && (w.HORIZ_LINE_TO === this.curCommandType ? a({
                  type: w.HORIZ_LINE_TO,
                  relative: this.curCommandRelative,
                  x: c
                }) : w.VERT_LINE_TO === this.curCommandType ? a({
                  type: w.VERT_LINE_TO,
                  relative: this.curCommandRelative,
                  y: c
                }) : this.curCommandType === w.MOVE_TO || this.curCommandType === w.LINE_TO || this.curCommandType === w.SMOOTH_QUAD_TO ? (a({
                  type: this.curCommandType,
                  relative: this.curCommandRelative,
                  x: this.curArgs[0],
                  y: this.curArgs[1]
                }), w.MOVE_TO === this.curCommandType && (this.curCommandType = w.LINE_TO)) : this.curCommandType === w.CURVE_TO ? a({
                  type: w.CURVE_TO,
                  relative: this.curCommandRelative,
                  x1: this.curArgs[0],
                  y1: this.curArgs[1],
                  x2: this.curArgs[2],
                  y2: this.curArgs[3],
                  x: this.curArgs[4],
                  y: this.curArgs[5]
                }) : this.curCommandType === w.SMOOTH_CURVE_TO ? a({
                  type: w.SMOOTH_CURVE_TO,
                  relative: this.curCommandRelative,
                  x2: this.curArgs[0],
                  y2: this.curArgs[1],
                  x: this.curArgs[2],
                  y: this.curArgs[3]
                }) : this.curCommandType === w.QUAD_TO ? a({
                  type: w.QUAD_TO,
                  relative: this.curCommandRelative,
                  x1: this.curArgs[0],
                  y1: this.curArgs[1],
                  x: this.curArgs[2],
                  y: this.curArgs[3]
                }) : this.curCommandType === w.ARC && a({
                  type: w.ARC,
                  relative: this.curCommandRelative,
                  rX: this.curArgs[0],
                  rY: this.curArgs[1],
                  xRot: this.curArgs[2],
                  lArcFlag: this.curArgs[3],
                  sweepFlag: this.curArgs[4],
                  x: this.curArgs[5],
                  y: this.curArgs[6]
                })), this.curNumber = "", this.curNumberHasExpDigits = !1, this.curNumberHasExp = !1, this.curNumberHasDecimal = !1, this.canParseCommandOrComma = !0;
              }
              if (!fl(o)) if (o === "," && this.canParseCommandOrComma) this.canParseCommandOrComma = !1;
              else if (o !== "+" && o !== "-" && o !== ".")
                if (h) this.curNumber = o, this.curNumberHasDecimal = !1;
                else {
                  if (this.curArgs.length !== 0) throw new SyntaxError("Unterminated command at index " + s + ".");
                  if (!this.canParseCommandOrComma) throw new SyntaxError('Unexpected character "' + o + '" at index ' + s + ". Command cannot follow comma");
                  if (this.canParseCommandOrComma = !1, o !== "z" && o !== "Z")
                    if (o === "h" || o === "H") this.curCommandType = w.HORIZ_LINE_TO, this.curCommandRelative = o === "h";
                    else if (o === "v" || o === "V") this.curCommandType = w.VERT_LINE_TO, this.curCommandRelative = o === "v";
                    else if (o === "m" || o === "M") this.curCommandType = w.MOVE_TO, this.curCommandRelative = o === "m";
                    else if (o === "l" || o === "L") this.curCommandType = w.LINE_TO, this.curCommandRelative = o === "l";
                    else if (o === "c" || o === "C") this.curCommandType = w.CURVE_TO, this.curCommandRelative = o === "c";
                    else if (o === "s" || o === "S") this.curCommandType = w.SMOOTH_CURVE_TO, this.curCommandRelative = o === "s";
                    else if (o === "q" || o === "Q") this.curCommandType = w.QUAD_TO, this.curCommandRelative = o === "q";
                    else if (o === "t" || o === "T") this.curCommandType = w.SMOOTH_QUAD_TO, this.curCommandRelative = o === "t";
                    else {
                      if (o !== "a" && o !== "A") throw new SyntaxError('Unexpected character "' + o + '" at index ' + s + ".");
                      this.curCommandType = w.ARC, this.curCommandRelative = o === "a";
                    }
                  else r.push({
                    type: w.CLOSE_PATH
                  }), this.canParseCommandOrComma = !0, this.curCommandType = -1;
                }
              else this.curNumber = o, this.curNumberHasDecimal = o === ".";
            } else this.curNumber += o, this.curNumberHasDecimal = !0;
          else this.curNumber += o;
        else this.curNumber += o, this.curNumberHasExp = !0;
      else this.curNumber += o, this.curNumberHasExpDigits = this.curNumberHasExp;
    }
    return r;
  }, t.prototype.transform = function(e) {
    return Object.create(this, {
      parse: {
        value: function(r, n) {
          n === void 0 && (n = []);
          for (var a = 0, s = Object.getPrototypeOf(this).parse.call(this, r); a < s.length; a++) {
            var o = s[a], u = e(o);
            Array.isArray(u) ? n.push.apply(n, u) : n.push(u);
          }
          return n;
        }
      }
    });
  }, t;
}(Nh), w = function(i) {
  function t(e) {
    var r = i.call(this) || this;
    return r.commands = typeof e == "string" ? t.parse(e) : e, r;
  }
  return Mh(t, i), t.prototype.encode = function() {
    return t.encode(this.commands);
  }, t.prototype.getBounds = function() {
    var e = it.CALCULATE_BOUNDS();
    return this.transform(e), e;
  }, t.prototype.transform = function(e) {
    for (var r = [], n = 0, a = this.commands; n < a.length; n++) {
      var s = e(a[n]);
      Array.isArray(s) ? r.push.apply(r, s) : r.push(s);
    }
    return this.commands = r, this;
  }, t.encode = function(e) {
    return ll(e);
  }, t.parse = function(e) {
    var r = new gl(), n = [];
    return r.parse(e, n), r.finish(n), n;
  }, t.CLOSE_PATH = 1, t.MOVE_TO = 2, t.HORIZ_LINE_TO = 4, t.VERT_LINE_TO = 8, t.LINE_TO = 16, t.CURVE_TO = 32, t.SMOOTH_CURVE_TO = 64, t.QUAD_TO = 128, t.SMOOTH_QUAD_TO = 256, t.ARC = 512, t.LINE_COMMANDS = t.LINE_TO | t.HORIZ_LINE_TO | t.VERT_LINE_TO, t.DRAWING_COMMANDS = t.HORIZ_LINE_TO | t.VERT_LINE_TO | t.LINE_TO | t.CURVE_TO | t.SMOOTH_CURVE_TO | t.QUAD_TO | t.SMOOTH_QUAD_TO | t.ARC, t;
}(Nh), pl = ((St = {})[w.MOVE_TO] = 2, St[w.LINE_TO] = 2, St[w.HORIZ_LINE_TO] = 1, St[w.VERT_LINE_TO] = 1, St[w.CLOSE_PATH] = 0, St[w.QUAD_TO] = 4, St[w.SMOOTH_QUAD_TO] = 2, St[w.CURVE_TO] = 6, St[w.SMOOTH_CURVE_TO] = 4, St[w.ARC] = 7, St), _u = {}, yi, Iu;
function dl() {
  if (Iu) return yi;
  Iu = 1;
  var i = st(), t = Pt(), e = Ne(), r = wh(), n = RegExp.prototype;
  return yi = function(a) {
    var s = a.flags;
    return s === void 0 && !("flags" in n) && !t(a, "flags") && e(n, a) ? i(r, a) : s;
  }, yi;
}
var Lu;
function vl() {
  if (Lu) return _u;
  Lu = 1;
  var i = Ie().PROPER, t = te(), e = ut(), r = kt(), n = J(), a = dl(), s = "toString", o = RegExp.prototype, u = o[s], h = n(function() {
    return u.call({
      source: "a",
      flags: "b"
    }) !== "/a/b";
  }), c = i && u.name !== s;
  return (h || c) && t(o, s, function() {
    var f = e(this), g = r(f.source), l = r(a(f));
    return "/" + g + "/" + l;
  }, {
    unsafe: !0
  }), _u;
}
vl();
function Ce(i) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ce = function(t) {
    return typeof t;
  } : Ce = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ce(i);
}
function ml(i, t) {
  if (!(i instanceof t)) throw new TypeError("Cannot call a class as a function");
}
var yl = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259], xl = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
function bl(i, t, e, r, n) {
  if (typeof i == "string" && (i = document.getElementById(i)), !i || Ce(i) !== "object" || !("getContext" in i)) throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
  var a = i.getContext("2d");
  try {
    return a.getImageData(t, e, r, n);
  } catch (s) {
    throw new Error("unable to access image data: " + s);
  }
}
function wl(i, t, e, r, n, a) {
  if (!(isNaN(a) || a < 1)) {
    a |= 0;
    var s = bl(i, t, e, r, n);
    s = Sl(s, t, e, r, n, a), i.getContext("2d").putImageData(s, t, e);
  }
}
function Sl(i, t, e, r, n, a) {
  for (var s = i.data, o = 2 * a + 1, u = r - 1, h = n - 1, c = a + 1, f = c * (c + 1) / 2, g = new Du(), l = g, p, d = 1; d < o; d++) l = l.next = new Du(), d === c && (p = l);
  l.next = g;
  for (var v = null, y = null, m = 0, x = 0, b = yl[a], O = xl[a], S = 0; S < n; S++) {
    l = g;
    for (var T = s[x], N = s[x + 1], k = s[x + 2], V = s[x + 3], R = 0; R < c; R++) l.r = T, l.g = N, l.b = k, l.a = V, l = l.next;
    for (var P = 0, C = 0, E = 0, D = 0, U = c * T, _ = c * N, B = c * k, M = c * V, F = f * T, j = f * N, Y = f * k, q = f * V, G = 1; G < c; G++) {
      var rt = x + ((u < G ? u : G) << 2), jt = s[rt], _t = s[rt + 1], Mt = s[rt + 2], dt = s[rt + 3], vt = c - G;
      F += (l.r = jt) * vt, j += (l.g = _t) * vt, Y += (l.b = Mt) * vt, q += (l.a = dt) * vt, P += jt, C += _t, E += Mt, D += dt, l = l.next;
    }
    v = g, y = p;
    for (var mt = 0; mt < r; mt++) {
      var Nt = q * b >>> O;
      if (s[x + 3] = Nt, Nt !== 0) {
        var Rt = 255 / Nt;
        s[x] = (F * b >>> O) * Rt, s[x + 1] = (j * b >>> O) * Rt, s[x + 2] = (Y * b >>> O) * Rt;
      } else s[x] = s[x + 1] = s[x + 2] = 0;
      F -= U, j -= _, Y -= B, q -= M, U -= v.r, _ -= v.g, B -= v.b, M -= v.a;
      var ct = mt + a + 1;
      ct = m + (ct < u ? ct : u) << 2, P += v.r = s[ct], C += v.g = s[ct + 1], E += v.b = s[ct + 2], D += v.a = s[ct + 3], F += P, j += C, Y += E, q += D, v = v.next;
      var yt = y, zt = yt.r, be = yt.g, oe = yt.b, we = yt.a;
      U += zt, _ += be, B += oe, M += we, P -= zt, C -= be, E -= oe, D -= we, y = y.next, x += 4;
    }
    m += r;
  }
  for (var gt = 0; gt < r; gt++) {
    x = gt << 2;
    var lt = s[x], xt = s[x + 1], A = s[x + 2], I = s[x + 3], X = c * lt, H = c * xt, Q = c * A, Ut = c * I, It = f * lt, bt = f * xt, wt = f * A, Gt = f * I;
    l = g;
    for (var ue = 0; ue < c; ue++) l.r = lt, l.g = xt, l.b = A, l.a = I, l = l.next;
    for (var Se = r, We = 0, Ge = 0, $e = 0, qe = 0, Te = 1; Te <= a; Te++) {
      x = Se + gt << 2;
      var Oe = c - Te;
      It += (l.r = lt = s[x]) * Oe, bt += (l.g = xt = s[x + 1]) * Oe, wt += (l.b = A = s[x + 2]) * Oe, Gt += (l.a = I = s[x + 3]) * Oe, qe += lt, We += xt, Ge += A, $e += I, l = l.next, Te < h && (Se += r);
    }
    x = gt, v = g, y = p;
    for (var Qe = 0; Qe < n; Qe++) {
      var ft = x << 2;
      s[ft + 3] = I = Gt * b >>> O, I > 0 ? (I = 255 / I, s[ft] = (It * b >>> O) * I, s[ft + 1] = (bt * b >>> O) * I, s[ft + 2] = (wt * b >>> O) * I) : s[ft] = s[ft + 1] = s[ft + 2] = 0, It -= X, bt -= H, wt -= Q, Gt -= Ut, X -= v.r, H -= v.g, Q -= v.b, Ut -= v.a, ft = gt + ((ft = Qe + c) < h ? ft : h) * r << 2, It += qe += v.r = s[ft], bt += We += v.g = s[ft + 1], wt += Ge += v.b = s[ft + 2], Gt += $e += v.a = s[ft + 3], v = v.next, X += lt = y.r, H += xt = y.g, Q += A = y.b, Ut += I = y.a, qe -= lt, We -= xt, Ge -= A, $e -= I, y = y.next, x += r;
    }
  }
  return i;
}
var Du = (
  /**
   * Set properties.
   */
  function i() {
    ml(this, i), this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
  }
);
function Tl() {
  var {
    DOMParser: i
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = {
    window: null,
    ignoreAnimation: !0,
    ignoreMouse: !0,
    DOMParser: i,
    createCanvas(e, r) {
      return new OffscreenCanvas(e, r);
    },
    createImage(e) {
      return Ft(function* () {
        var r = yield fetch(e), n = yield r.blob(), a = yield createImageBitmap(n);
        return a;
      })();
    }
  };
  return (typeof DOMParser < "u" || typeof i > "u") && Reflect.deleteProperty(t, "DOMParser"), t;
}
function Ol(i) {
  var {
    DOMParser: t,
    canvas: e,
    fetch: r
  } = i;
  return {
    window: null,
    ignoreAnimation: !0,
    ignoreMouse: !0,
    DOMParser: t,
    fetch: r,
    createCanvas: e.createCanvas,
    createImage: e.loadImage
  };
}
var Df = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  offscreen: Tl,
  node: Ol
});
function se(i) {
  return i.replace(/(?!\u3000)\s+/gm, " ");
}
function Al(i) {
  return i.replace(/^[\n \t]+/, "");
}
function El(i) {
  return i.replace(/[\n \t]+$/, "");
}
function pt(i) {
  var t = (i || "").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || [];
  return t.map(parseFloat);
}
var Pl = /^[A-Z-]+$/;
function Cl(i) {
  return Pl.test(i) ? i.toLowerCase() : i;
}
function Rh(i) {
  var t = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(i) || [];
  return t[2] || t[3] || t[4];
}
function Ml(i) {
  if (!i.startsWith("rgb")) return i;
  var t = 3, e = i.replace(/\d+(\.\d+)?/g, (r, n) => t-- && n ? String(Math.round(parseFloat(r))) : r);
  return e;
}
var Nl = /(\[[^\]]+\])/g, Rl = /(#[^\s+>~.[:]+)/g, Vl = /(\.[^\s+>~.[:]+)/g, kl = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi, _l = /(:[\w-]+\([^)]*\))/gi, Il = /(:[^\s+>~.[:]+)/g, Ll = /([^\s+>~.[:]+)/g;
function $t(i, t) {
  var e = t.exec(i);
  return e ? [i.replace(t, " "), e.length] : [i, 0];
}
function Dl(i) {
  var t = [0, 0, 0], e = i.replace(/:not\(([^)]*)\)/g, "     $1 ").replace(/{[\s\S]*/gm, " "), r = 0;
  return [e, r] = $t(e, Nl), t[1] += r, [e, r] = $t(e, Rl), t[0] += r, [e, r] = $t(e, Vl), t[1] += r, [e, r] = $t(e, kl), t[2] += r, [e, r] = $t(e, _l), t[1] += r, [e, r] = $t(e, Il), t[1] += r, e = e.replace(/[*\s+>~]/g, " ").replace(/[#.]/g, " "), [e, r] = $t(e, Ll), t[2] += r, t.join("");
}
var ne = 1e-8;
function Fu(i) {
  return Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2));
}
function Oi(i, t) {
  return (i[0] * t[0] + i[1] * t[1]) / (Fu(i) * Fu(t));
}
function Bu(i, t) {
  return (i[0] * t[1] < i[1] * t[0] ? -1 : 1) * Math.acos(Oi(i, t));
}
function ju(i) {
  return i * i * i;
}
function zu(i) {
  return 3 * i * i * (1 - i);
}
function Uu(i) {
  return 3 * i * (1 - i) * (1 - i);
}
function Xu(i) {
  return (1 - i) * (1 - i) * (1 - i);
}
function Hu(i) {
  return i * i;
}
function Yu(i) {
  return 2 * i * (1 - i);
}
function Wu(i) {
  return (1 - i) * (1 - i);
}
class L {
  constructor(t, e, r) {
    this.document = t, this.name = e, this.value = r, this.isNormalizedColor = !1;
  }
  static empty(t) {
    return new L(t, "EMPTY", "");
  }
  split() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : " ", {
      document: e,
      name: r
    } = this;
    return se(this.getString()).trim().split(t).map((n) => new L(e, r, n));
  }
  hasValue(t) {
    var {
      value: e
    } = this;
    return e !== null && e !== "" && (t || e !== 0) && typeof e < "u";
  }
  isString(t) {
    var {
      value: e
    } = this, r = typeof e == "string";
    return !r || !t ? r : t.test(e);
  }
  isUrlDefinition() {
    return this.isString(/^url\(/);
  }
  isPixels() {
    if (!this.hasValue()) return !1;
    var t = this.getString();
    switch (!0) {
      case t.endsWith("px"):
      case /^[0-9]+$/.test(t):
        return !0;
      default:
        return !1;
    }
  }
  setValue(t) {
    return this.value = t, this;
  }
  getValue(t) {
    return typeof t > "u" || this.hasValue() ? this.value : t;
  }
  getNumber(t) {
    if (!this.hasValue()) return typeof t > "u" ? 0 : parseFloat(t);
    var {
      value: e
    } = this, r = parseFloat(e);
    return this.isString(/%$/) && (r /= 100), r;
  }
  getString(t) {
    return typeof t > "u" || this.hasValue() ? typeof this.value > "u" ? "" : String(this.value) : String(t);
  }
  getColor(t) {
    var e = this.getString(t);
    return this.isNormalizedColor || (this.isNormalizedColor = !0, e = Ml(e), this.value = e), e;
  }
  getDpi() {
    return 96;
  }
  getRem() {
    return this.document.rootEmSize;
  }
  getEm() {
    return this.document.emSize;
  }
  getUnits() {
    return this.getString().replace(/[0-9.-]/g, "");
  }
  getPixels(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (!this.hasValue()) return 0;
    var [r, n] = typeof t == "boolean" ? [void 0, t] : [t], {
      viewPort: a
    } = this.document.screen;
    switch (!0) {
      case this.isString(/vmin$/):
        return this.getNumber() / 100 * Math.min(a.computeSize("x"), a.computeSize("y"));
      case this.isString(/vmax$/):
        return this.getNumber() / 100 * Math.max(a.computeSize("x"), a.computeSize("y"));
      case this.isString(/vw$/):
        return this.getNumber() / 100 * a.computeSize("x");
      case this.isString(/vh$/):
        return this.getNumber() / 100 * a.computeSize("y");
      case this.isString(/rem$/):
        return this.getNumber() * this.getRem();
      case this.isString(/em$/):
        return this.getNumber() * this.getEm();
      case this.isString(/ex$/):
        return this.getNumber() * this.getEm() / 2;
      case this.isString(/px$/):
        return this.getNumber();
      case this.isString(/pt$/):
        return this.getNumber() * this.getDpi() * (1 / 72);
      case this.isString(/pc$/):
        return this.getNumber() * 15;
      case this.isString(/cm$/):
        return this.getNumber() * this.getDpi() / 2.54;
      case this.isString(/mm$/):
        return this.getNumber() * this.getDpi() / 25.4;
      case this.isString(/in$/):
        return this.getNumber() * this.getDpi();
      case (this.isString(/%$/) && n):
        return this.getNumber() * this.getEm();
      case this.isString(/%$/):
        return this.getNumber() * a.computeSize(r);
      default: {
        var s = this.getNumber();
        return e && s < 1 ? s * a.computeSize(r) : s;
      }
    }
  }
  getMilliseconds() {
    return this.hasValue() ? this.isString(/ms$/) ? this.getNumber() : this.getNumber() * 1e3 : 0;
  }
  getRadians() {
    if (!this.hasValue()) return 0;
    switch (!0) {
      case this.isString(/deg$/):
        return this.getNumber() * (Math.PI / 180);
      case this.isString(/grad$/):
        return this.getNumber() * (Math.PI / 200);
      case this.isString(/rad$/):
        return this.getNumber();
      default:
        return this.getNumber() * (Math.PI / 180);
    }
  }
  getDefinition() {
    var t = this.getString(), e = /#([^)'"]+)/.exec(t);
    return e && (e = e[1]), e || (e = t), this.document.definitions[e];
  }
  getFillStyleDefinition(t, e) {
    var r = this.getDefinition();
    if (!r) return null;
    if (typeof r.createGradient == "function") return r.createGradient(this.document.ctx, t, e);
    if (typeof r.createPattern == "function") {
      if (r.getHrefAttribute().hasValue()) {
        var n = r.getAttribute("patternTransform");
        r = r.getHrefAttribute().getDefinition(), n.hasValue() && r.getAttribute("patternTransform", !0).setValue(n.value);
      }
      return r.createPattern(this.document.ctx, t, e);
    }
    return null;
  }
  getTextBaseline() {
    return this.hasValue() ? L.textBaselineMapping[this.getString()] : null;
  }
  addOpacity(t) {
    for (var e = this.getColor(), r = e.length, n = 0, a = 0; a < r && (e[a] === "," && n++, n !== 3); a++) ;
    if (t.hasValue() && this.isString() && n !== 3) {
      var s = new Si(e);
      s.ok && (s.alpha = t.getNumber(), e = s.toRGBA());
    }
    return new L(this.document, this.name, e);
  }
}
L.textBaselineMapping = {
  baseline: "alphabetic",
  "before-edge": "top",
  "text-before-edge": "top",
  middle: "middle",
  central: "middle",
  "after-edge": "bottom",
  "text-after-edge": "bottom",
  ideographic: "ideographic",
  alphabetic: "alphabetic",
  hanging: "hanging",
  mathematical: "alphabetic"
};
class Fl {
  constructor() {
    this.viewPorts = [];
  }
  clear() {
    this.viewPorts = [];
  }
  setCurrent(t, e) {
    this.viewPorts.push({
      width: t,
      height: e
    });
  }
  removeCurrent() {
    this.viewPorts.pop();
  }
  getCurrent() {
    var {
      viewPorts: t
    } = this;
    return t[t.length - 1];
  }
  get width() {
    return this.getCurrent().width;
  }
  get height() {
    return this.getCurrent().height;
  }
  computeSize(t) {
    return typeof t == "number" ? t : t === "x" ? this.width : t === "y" ? this.height : Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / Math.sqrt(2);
  }
}
class K {
  constructor(t, e) {
    this.x = t, this.y = e;
  }
  static parse(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, [r = e, n = e] = pt(t);
    return new K(r, n);
  }
  static parseScale(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, [r = e, n = r] = pt(t);
    return new K(r, n);
  }
  static parsePath(t) {
    for (var e = pt(t), r = e.length, n = [], a = 0; a < r; a += 2) n.push(new K(e[a], e[a + 1]));
    return n;
  }
  angleTo(t) {
    return Math.atan2(t.y - this.y, t.x - this.x);
  }
  applyTransform(t) {
    var {
      x: e,
      y: r
    } = this, n = e * t[0] + r * t[2] + t[4], a = e * t[1] + r * t[3] + t[5];
    this.x = n, this.y = a;
  }
}
class Bl {
  constructor(t) {
    this.screen = t, this.working = !1, this.events = [], this.eventElements = [], this.onClick = this.onClick.bind(this), this.onMouseMove = this.onMouseMove.bind(this);
  }
  isWorking() {
    return this.working;
  }
  start() {
    if (!this.working) {
      var {
        screen: t,
        onClick: e,
        onMouseMove: r
      } = this, n = t.ctx.canvas;
      n.onclick = e, n.onmousemove = r, this.working = !0;
    }
  }
  stop() {
    if (this.working) {
      var t = this.screen.ctx.canvas;
      this.working = !1, t.onclick = null, t.onmousemove = null;
    }
  }
  hasEvents() {
    return this.working && this.events.length > 0;
  }
  runEvents() {
    if (this.working) {
      var {
        screen: t,
        events: e,
        eventElements: r
      } = this, {
        style: n
      } = t.ctx.canvas;
      n && (n.cursor = ""), e.forEach((a, s) => {
        for (var {
          run: o
        } = a, u = r[s]; u; ) o(u), u = u.parent;
      }), this.events = [], this.eventElements = [];
    }
  }
  checkPath(t, e) {
    if (!(!this.working || !e)) {
      var {
        events: r,
        eventElements: n
      } = this;
      r.forEach((a, s) => {
        var {
          x: o,
          y: u
        } = a;
        !n[s] && e.isPointInPath && e.isPointInPath(o, u) && (n[s] = t);
      });
    }
  }
  checkBoundingBox(t, e) {
    if (!(!this.working || !e)) {
      var {
        events: r,
        eventElements: n
      } = this;
      r.forEach((a, s) => {
        var {
          x: o,
          y: u
        } = a;
        !n[s] && e.isPointInBox(o, u) && (n[s] = t);
      });
    }
  }
  mapXY(t, e) {
    for (var {
      window: r,
      ctx: n
    } = this.screen, a = new K(t, e), s = n.canvas; s; ) a.x -= s.offsetLeft, a.y -= s.offsetTop, s = s.offsetParent;
    return r.scrollX && (a.x += r.scrollX), r.scrollY && (a.y += r.scrollY), a;
  }
  onClick(t) {
    var {
      x: e,
      y: r
    } = this.mapXY(t.clientX, t.clientY);
    this.events.push({
      type: "onclick",
      x: e,
      y: r,
      run(n) {
        n.onClick && n.onClick();
      }
    });
  }
  onMouseMove(t) {
    var {
      x: e,
      y: r
    } = this.mapXY(t.clientX, t.clientY);
    this.events.push({
      type: "onmousemove",
      x: e,
      y: r,
      run(n) {
        n.onMouseMove && n.onMouseMove();
      }
    });
  }
}
var Vh = typeof window < "u" ? window : null, kh = typeof fetch < "u" ? fetch.bind(void 0) : null;
class Ue {
  constructor(t) {
    var {
      fetch: e = kh,
      window: r = Vh
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.ctx = t, this.FRAMERATE = 30, this.MAX_VIRTUAL_PIXELS = 3e4, this.CLIENT_WIDTH = 800, this.CLIENT_HEIGHT = 600, this.viewPort = new Fl(), this.mouse = new Bl(this), this.animations = [], this.waits = [], this.frameDuration = 0, this.isReadyLock = !1, this.isFirstRender = !0, this.intervalId = null, this.window = r, this.fetch = e;
  }
  wait(t) {
    this.waits.push(t);
  }
  ready() {
    return this.readyPromise ? this.readyPromise : Promise.resolve();
  }
  isReady() {
    if (this.isReadyLock) return !0;
    var t = this.waits.every((e) => e());
    return t && (this.waits = [], this.resolveReady && this.resolveReady()), this.isReadyLock = t, t;
  }
  setDefaults(t) {
    t.strokeStyle = "rgba(0,0,0,0)", t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 4;
  }
  setViewBox(t) {
    var {
      document: e,
      ctx: r,
      aspectRatio: n,
      width: a,
      desiredWidth: s,
      height: o,
      desiredHeight: u,
      minX: h = 0,
      minY: c = 0,
      refX: f,
      refY: g,
      clip: l = !1,
      clipX: p = 0,
      clipY: d = 0
    } = t, v = se(n).replace(/^defer\s/, ""), [y, m] = v.split(" "), x = y || "xMidYMid", b = m || "meet", O = a / s, S = o / u, T = Math.min(O, S), N = Math.max(O, S), k = s, V = u;
    b === "meet" && (k *= T, V *= T), b === "slice" && (k *= N, V *= N);
    var R = new L(e, "refX", f), P = new L(e, "refY", g), C = R.hasValue() && P.hasValue();
    if (C && r.translate(-T * R.getPixels("x"), -T * P.getPixels("y")), l) {
      var E = T * p, D = T * d;
      r.beginPath(), r.moveTo(E, D), r.lineTo(a, D), r.lineTo(a, o), r.lineTo(E, o), r.closePath(), r.clip();
    }
    if (!C) {
      var U = b === "meet" && T === S, _ = b === "slice" && N === S, B = b === "meet" && T === O, M = b === "slice" && N === O;
      x.startsWith("xMid") && (U || _) && r.translate(a / 2 - k / 2, 0), x.endsWith("YMid") && (B || M) && r.translate(0, o / 2 - V / 2), x.startsWith("xMax") && (U || _) && r.translate(a - k, 0), x.endsWith("YMax") && (B || M) && r.translate(0, o - V);
    }
    switch (!0) {
      case x === "none":
        r.scale(O, S);
        break;
      case b === "meet":
        r.scale(T, T);
        break;
      case b === "slice":
        r.scale(N, N);
        break;
    }
    r.translate(-h, -c);
  }
  start(t) {
    var {
      enableRedraw: e = !1,
      ignoreMouse: r = !1,
      ignoreAnimation: n = !1,
      ignoreDimensions: a = !1,
      ignoreClear: s = !1,
      forceRedraw: o,
      scaleWidth: u,
      scaleHeight: h,
      offsetX: c,
      offsetY: f
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      FRAMERATE: g,
      mouse: l
    } = this, p = 1e3 / g;
    if (this.frameDuration = p, this.readyPromise = new Promise((x) => {
      this.resolveReady = x;
    }), this.isReady() && this.render(t, a, s, u, h, c, f), !!e) {
      var d = Date.now(), v = d, y = 0, m = () => {
        d = Date.now(), y = d - v, y >= p && (v = d - y % p, this.shouldUpdate(n, o) && (this.render(t, a, s, u, h, c, f), l.runEvents())), this.intervalId = gi(m);
      };
      r || l.start(), this.intervalId = gi(m);
    }
  }
  stop() {
    this.intervalId && (gi.cancel(this.intervalId), this.intervalId = null), this.mouse.stop();
  }
  shouldUpdate(t, e) {
    if (!t) {
      var {
        frameDuration: r
      } = this, n = this.animations.reduce((a, s) => s.update(r) || a, !1);
      if (n) return !0;
    }
    return !!(typeof e == "function" && e() || !this.isReadyLock && this.isReady() || this.mouse.hasEvents());
  }
  render(t, e, r, n, a, s, o) {
    var {
      CLIENT_WIDTH: u,
      CLIENT_HEIGHT: h,
      viewPort: c,
      ctx: f,
      isFirstRender: g
    } = this, l = f.canvas;
    c.clear(), l.width && l.height ? c.setCurrent(l.width, l.height) : c.setCurrent(u, h);
    var p = t.getStyle("width"), d = t.getStyle("height");
    !e && (g || typeof n != "number" && typeof a != "number") && (p.hasValue() && (l.width = p.getPixels("x"), l.style && (l.style.width = "".concat(l.width, "px"))), d.hasValue() && (l.height = d.getPixels("y"), l.style && (l.style.height = "".concat(l.height, "px"))));
    var v = l.clientWidth || l.width, y = l.clientHeight || l.height;
    if (e && p.hasValue() && d.hasValue() && (v = p.getPixels("x"), y = d.getPixels("y")), c.setCurrent(v, y), typeof s == "number" && t.getAttribute("x", !0).setValue(s), typeof o == "number" && t.getAttribute("y", !0).setValue(o), typeof n == "number" || typeof a == "number") {
      var m = pt(t.getAttribute("viewBox").getString()), x = 0, b = 0;
      if (typeof n == "number") {
        var O = t.getStyle("width");
        O.hasValue() ? x = O.getPixels("x") / n : isNaN(m[2]) || (x = m[2] / n);
      }
      if (typeof a == "number") {
        var S = t.getStyle("height");
        S.hasValue() ? b = S.getPixels("y") / a : isNaN(m[3]) || (b = m[3] / a);
      }
      x || (x = b), b || (b = x), t.getAttribute("width", !0).setValue(n), t.getAttribute("height", !0).setValue(a);
      var T = t.getStyle("transform", !0, !0);
      T.setValue("".concat(T.getString(), " scale(").concat(1 / x, ", ").concat(1 / b, ")"));
    }
    r || f.clearRect(0, 0, v, y), t.render(f), g && (this.isFirstRender = !1);
  }
}
Ue.defaultWindow = Vh;
Ue.defaultFetch = kh;
var {
  defaultFetch: jl
} = Ue, zl = typeof DOMParser < "u" ? DOMParser : null;
class xi {
  constructor() {
    var {
      fetch: t = jl,
      DOMParser: e = zl
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.fetch = t, this.DOMParser = e;
  }
  parse(t) {
    var e = this;
    return Ft(function* () {
      return t.startsWith("<") ? e.parseFromString(t) : e.load(t);
    })();
  }
  parseFromString(t) {
    var e = new this.DOMParser();
    try {
      return this.checkDocument(e.parseFromString(t, "image/svg+xml"));
    } catch {
      return this.checkDocument(e.parseFromString(t, "text/xml"));
    }
  }
  checkDocument(t) {
    var e = t.getElementsByTagName("parsererror")[0];
    if (e) throw new Error(e.textContent);
    return t;
  }
  load(t) {
    var e = this;
    return Ft(function* () {
      var r = yield e.fetch(t), n = yield r.text();
      return e.parseFromString(n);
    })();
  }
}
class Ul {
  constructor(t, e) {
    this.type = "translate", this.point = null, this.point = K.parse(e);
  }
  apply(t) {
    var {
      x: e,
      y: r
    } = this.point;
    t.translate(e || 0, r || 0);
  }
  unapply(t) {
    var {
      x: e,
      y: r
    } = this.point;
    t.translate(-1 * e || 0, -1 * r || 0);
  }
  applyToPoint(t) {
    var {
      x: e,
      y: r
    } = this.point;
    t.applyTransform([1, 0, 0, 1, e || 0, r || 0]);
  }
}
class Xl {
  constructor(t, e, r) {
    this.type = "rotate", this.angle = null, this.originX = null, this.originY = null, this.cx = 0, this.cy = 0;
    var n = pt(e);
    this.angle = new L(t, "angle", n[0]), this.originX = r[0], this.originY = r[1], this.cx = n[1] || 0, this.cy = n[2] || 0;
  }
  apply(t) {
    var {
      cx: e,
      cy: r,
      originX: n,
      originY: a,
      angle: s
    } = this, o = e + n.getPixels("x"), u = r + a.getPixels("y");
    t.translate(o, u), t.rotate(s.getRadians()), t.translate(-o, -u);
  }
  unapply(t) {
    var {
      cx: e,
      cy: r,
      originX: n,
      originY: a,
      angle: s
    } = this, o = e + n.getPixels("x"), u = r + a.getPixels("y");
    t.translate(o, u), t.rotate(-1 * s.getRadians()), t.translate(-o, -u);
  }
  applyToPoint(t) {
    var {
      cx: e,
      cy: r,
      angle: n
    } = this, a = n.getRadians();
    t.applyTransform([
      1,
      0,
      0,
      1,
      e || 0,
      r || 0
      // this.p.y
    ]), t.applyTransform([Math.cos(a), Math.sin(a), -Math.sin(a), Math.cos(a), 0, 0]), t.applyTransform([
      1,
      0,
      0,
      1,
      -e || 0,
      -r || 0
      // -this.p.y
    ]);
  }
}
class Hl {
  constructor(t, e, r) {
    this.type = "scale", this.scale = null, this.originX = null, this.originY = null;
    var n = K.parseScale(e);
    (n.x === 0 || n.y === 0) && (n.x = ne, n.y = ne), this.scale = n, this.originX = r[0], this.originY = r[1];
  }
  apply(t) {
    var {
      scale: {
        x: e,
        y: r
      },
      originX: n,
      originY: a
    } = this, s = n.getPixels("x"), o = a.getPixels("y");
    t.translate(s, o), t.scale(e, r || e), t.translate(-s, -o);
  }
  unapply(t) {
    var {
      scale: {
        x: e,
        y: r
      },
      originX: n,
      originY: a
    } = this, s = n.getPixels("x"), o = a.getPixels("y");
    t.translate(s, o), t.scale(1 / e, 1 / r || e), t.translate(-s, -o);
  }
  applyToPoint(t) {
    var {
      x: e,
      y: r
    } = this.scale;
    t.applyTransform([e || 0, 0, 0, r || 0, 0, 0]);
  }
}
class _h {
  constructor(t, e, r) {
    this.type = "matrix", this.matrix = [], this.originX = null, this.originY = null, this.matrix = pt(e), this.originX = r[0], this.originY = r[1];
  }
  apply(t) {
    var {
      originX: e,
      originY: r,
      matrix: n
    } = this, a = e.getPixels("x"), s = r.getPixels("y");
    t.translate(a, s), t.transform(n[0], n[1], n[2], n[3], n[4], n[5]), t.translate(-a, -s);
  }
  unapply(t) {
    var {
      originX: e,
      originY: r,
      matrix: n
    } = this, a = n[0], s = n[2], o = n[4], u = n[1], h = n[3], c = n[5], f = 0, g = 0, l = 1, p = 1 / (a * (h * l - c * g) - s * (u * l - c * f) + o * (u * g - h * f)), d = e.getPixels("x"), v = r.getPixels("y");
    t.translate(d, v), t.transform(p * (h * l - c * g), p * (c * f - u * l), p * (o * g - s * l), p * (a * l - o * f), p * (s * c - o * h), p * (o * u - a * c)), t.translate(-d, -v);
  }
  applyToPoint(t) {
    t.applyTransform(this.matrix);
  }
}
class Ih extends _h {
  constructor(t, e, r) {
    super(t, e, r), this.type = "skew", this.angle = null, this.angle = new L(t, "angle", e);
  }
}
class Yl extends Ih {
  constructor(t, e, r) {
    super(t, e, r), this.type = "skewX", this.matrix = [1, 0, Math.tan(this.angle.getRadians()), 1, 0, 0];
  }
}
class Wl extends Ih {
  constructor(t, e, r) {
    super(t, e, r), this.type = "skewY", this.matrix = [1, Math.tan(this.angle.getRadians()), 0, 1, 0, 0];
  }
}
function Gl(i) {
  return se(i).trim().replace(/\)([a-zA-Z])/g, ") $1").replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/);
}
function $l(i) {
  var [t, e] = i.split("(");
  return [t.trim(), e.trim().replace(")", "")];
}
class Qt {
  constructor(t, e, r) {
    this.document = t, this.transforms = [];
    var n = Gl(e);
    n.forEach((a) => {
      if (a !== "none") {
        var [s, o] = $l(a), u = Qt.transformTypes[s];
        typeof u < "u" && this.transforms.push(new u(this.document, o, r));
      }
    });
  }
  static fromElement(t, e) {
    var r = e.getStyle("transform", !1, !0), [n, a = n] = e.getStyle("transform-origin", !1, !0).split(), s = [n, a];
    return r.hasValue() ? new Qt(t, r.getString(), s) : null;
  }
  apply(t) {
    for (var {
      transforms: e
    } = this, r = e.length, n = 0; n < r; n++) e[n].apply(t);
  }
  unapply(t) {
    for (var {
      transforms: e
    } = this, r = e.length, n = r - 1; n >= 0; n--) e[n].unapply(t);
  }
  // TODO: applyToPoint unused ... remove?
  applyToPoint(t) {
    for (var {
      transforms: e
    } = this, r = e.length, n = 0; n < r; n++) e[n].applyToPoint(t);
  }
}
Qt.transformTypes = {
  translate: Ul,
  rotate: Xl,
  scale: Hl,
  matrix: _h,
  skewX: Yl,
  skewY: Wl
};
class $ {
  constructor(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    if (this.document = t, this.node = e, this.captureTextNodes = r, this.attributes = {}, this.styles = {}, this.stylesSpecificity = {}, this.animationFrozen = !1, this.animationFrozenValue = "", this.parent = null, this.children = [], !(!e || e.nodeType !== 1)) {
      if (Array.from(e.attributes).forEach((o) => {
        var u = Cl(o.nodeName);
        this.attributes[u] = new L(t, u, o.value);
      }), this.addStylesFromStyleDefinition(), this.getAttribute("style").hasValue()) {
        var n = this.getAttribute("style").getString().split(";").map((o) => o.trim());
        n.forEach((o) => {
          if (o) {
            var [u, h] = o.split(":").map((c) => c.trim());
            this.styles[u] = new L(t, u, h);
          }
        });
      }
      var {
        definitions: a
      } = t, s = this.getAttribute("id");
      s.hasValue() && (a[s.getString()] || (a[s.getString()] = this)), Array.from(e.childNodes).forEach((o) => {
        if (o.nodeType === 1) this.addChild(o);
        else if (r && (o.nodeType === 3 || o.nodeType === 4)) {
          var u = t.createTextNode(o);
          u.getText().length > 0 && this.addChild(u);
        }
      });
    }
  }
  getAttribute(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = this.attributes[t];
    if (!r && e) {
      var n = new L(this.document, t, "");
      return this.attributes[t] = n, n;
    }
    return r || L.empty(this.document);
  }
  getHrefAttribute() {
    for (var t in this.attributes) if (t === "href" || t.endsWith(":href")) return this.attributes[t];
    return L.empty(this.document);
  }
  getStyle(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = this.styles[t];
    if (n) return n;
    var a = this.getAttribute(t);
    if (a != null && a.hasValue()) return this.styles[t] = a, a;
    if (!r) {
      var {
        parent: s
      } = this;
      if (s) {
        var o = s.getStyle(t);
        if (o != null && o.hasValue()) return o;
      }
    }
    if (e) {
      var u = new L(this.document, t, "");
      return this.styles[t] = u, u;
    }
    return n || L.empty(this.document);
  }
  render(t) {
    if (!(this.getStyle("display").getString() === "none" || this.getStyle("visibility").getString() === "hidden")) {
      if (t.save(), this.getStyle("mask").hasValue()) {
        var e = this.getStyle("mask").getDefinition();
        e && (this.applyEffects(t), e.apply(t, this));
      } else if (this.getStyle("filter").getValue("none") !== "none") {
        var r = this.getStyle("filter").getDefinition();
        r && (this.applyEffects(t), r.apply(t, this));
      } else this.setContext(t), this.renderChildren(t), this.clearContext(t);
      t.restore();
    }
  }
  setContext(t) {
  }
  applyEffects(t) {
    var e = Qt.fromElement(this.document, this);
    e && e.apply(t);
    var r = this.getStyle("clip-path", !1, !0);
    if (r.hasValue()) {
      var n = r.getDefinition();
      n && n.apply(t);
    }
  }
  clearContext(t) {
  }
  renderChildren(t) {
    this.children.forEach((e) => {
      e.render(t);
    });
  }
  addChild(t) {
    var e = t instanceof $ ? t : this.document.createElement(t);
    e.parent = this, $.ignoreChildTypes.includes(e.type) || this.children.push(e);
  }
  matchesSelector(t) {
    var e, {
      node: r
    } = this;
    if (typeof r.matches == "function") return r.matches(t);
    var n = (e = r.getAttribute) === null || e === void 0 ? void 0 : e.call(r, "class");
    return !n || n === "" ? !1 : n.split(" ").some((a) => ".".concat(a) === t);
  }
  addStylesFromStyleDefinition() {
    var {
      styles: t,
      stylesSpecificity: e
    } = this.document;
    for (var r in t) if (!r.startsWith("@") && this.matchesSelector(r)) {
      var n = t[r], a = e[r];
      if (n) for (var s in n) {
        var o = this.stylesSpecificity[s];
        typeof o > "u" && (o = "000"), a >= o && (this.styles[s] = n[s], this.stylesSpecificity[s] = a);
      }
    }
  }
  removeStyles(t, e) {
    var r = e.reduce((n, a) => {
      var s = t.getStyle(a);
      if (!s.hasValue()) return n;
      var o = s.getString();
      return s.setValue(""), [...n, [a, o]];
    }, []);
    return r;
  }
  restoreStyles(t, e) {
    e.forEach((r) => {
      var [n, a] = r;
      t.getStyle(n, !0).setValue(a);
    });
  }
  isFirstChild() {
    var t;
    return ((t = this.parent) === null || t === void 0 ? void 0 : t.children.indexOf(this)) === 0;
  }
}
$.ignoreChildTypes = ["title"];
class ql extends $ {
  constructor(t, e, r) {
    super(t, e, r);
  }
}
function Ql(i) {
  var t = i.trim();
  return /^('|")/.test(t) ? t : '"'.concat(t, '"');
}
function Zl(i) {
  return typeof process > "u" ? i : i.trim().split(",").map(Ql).join(",");
}
function Kl(i) {
  if (!i) return "";
  var t = i.trim().toLowerCase();
  switch (t) {
    case "normal":
    case "italic":
    case "oblique":
    case "inherit":
    case "initial":
    case "unset":
      return t;
    default:
      return /^oblique\s+(-|)\d+deg$/.test(t) ? t : "";
  }
}
function Jl(i) {
  if (!i) return "";
  var t = i.trim().toLowerCase();
  switch (t) {
    case "normal":
    case "bold":
    case "lighter":
    case "bolder":
    case "inherit":
    case "initial":
    case "unset":
      return t;
    default:
      return /^[\d.]+$/.test(t) ? t : "";
  }
}
class ot {
  constructor(t, e, r, n, a, s) {
    var o = s ? typeof s == "string" ? ot.parse(s) : s : {};
    this.fontFamily = a || o.fontFamily, this.fontSize = n || o.fontSize, this.fontStyle = t || o.fontStyle, this.fontWeight = r || o.fontWeight, this.fontVariant = e || o.fontVariant;
  }
  static parse() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = arguments.length > 1 ? arguments[1] : void 0, r = "", n = "", a = "", s = "", o = "", u = se(t).trim().split(" "), h = {
      fontSize: !1,
      fontStyle: !1,
      fontWeight: !1,
      fontVariant: !1
    };
    return u.forEach((c) => {
      switch (!0) {
        case (!h.fontStyle && ot.styles.includes(c)):
          c !== "inherit" && (r = c), h.fontStyle = !0;
          break;
        case (!h.fontVariant && ot.variants.includes(c)):
          c !== "inherit" && (n = c), h.fontStyle = !0, h.fontVariant = !0;
          break;
        case (!h.fontWeight && ot.weights.includes(c)):
          c !== "inherit" && (a = c), h.fontStyle = !0, h.fontVariant = !0, h.fontWeight = !0;
          break;
        case !h.fontSize:
          c !== "inherit" && ([s] = c.split("/")), h.fontStyle = !0, h.fontVariant = !0, h.fontWeight = !0, h.fontSize = !0;
          break;
        default:
          c !== "inherit" && (o += c);
      }
    }), new ot(r, n, a, s, o, e);
  }
  toString() {
    return [
      Kl(this.fontStyle),
      this.fontVariant,
      Jl(this.fontWeight),
      this.fontSize,
      // Wrap fontFamily only on nodejs and only for canvas.ctx
      Zl(this.fontFamily)
    ].join(" ").trim();
  }
}
ot.styles = "normal|italic|oblique|inherit";
ot.variants = "normal|small-caps|inherit";
ot.weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit";
class Ct {
  constructor() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Number.NaN, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.NaN, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Number.NaN, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Number.NaN;
    this.x1 = t, this.y1 = e, this.x2 = r, this.y2 = n, this.addPoint(t, e), this.addPoint(r, n);
  }
  get x() {
    return this.x1;
  }
  get y() {
    return this.y1;
  }
  get width() {
    return this.x2 - this.x1;
  }
  get height() {
    return this.y2 - this.y1;
  }
  addPoint(t, e) {
    typeof t < "u" && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = t, this.x2 = t), t < this.x1 && (this.x1 = t), t > this.x2 && (this.x2 = t)), typeof e < "u" && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = e, this.y2 = e), e < this.y1 && (this.y1 = e), e > this.y2 && (this.y2 = e));
  }
  addX(t) {
    this.addPoint(t, null);
  }
  addY(t) {
    this.addPoint(null, t);
  }
  addBoundingBox(t) {
    if (t) {
      var {
        x1: e,
        y1: r,
        x2: n,
        y2: a
      } = t;
      this.addPoint(e, r), this.addPoint(n, a);
    }
  }
  sumCubic(t, e, r, n, a) {
    return Math.pow(1 - t, 3) * e + 3 * Math.pow(1 - t, 2) * t * r + 3 * (1 - t) * Math.pow(t, 2) * n + Math.pow(t, 3) * a;
  }
  bezierCurveAdd(t, e, r, n, a) {
    var s = 6 * e - 12 * r + 6 * n, o = -3 * e + 9 * r - 9 * n + 3 * a, u = 3 * r - 3 * e;
    if (o === 0) {
      if (s === 0) return;
      var h = -u / s;
      0 < h && h < 1 && (t ? this.addX(this.sumCubic(h, e, r, n, a)) : this.addY(this.sumCubic(h, e, r, n, a)));
      return;
    }
    var c = Math.pow(s, 2) - 4 * u * o;
    if (!(c < 0)) {
      var f = (-s + Math.sqrt(c)) / (2 * o);
      0 < f && f < 1 && (t ? this.addX(this.sumCubic(f, e, r, n, a)) : this.addY(this.sumCubic(f, e, r, n, a)));
      var g = (-s - Math.sqrt(c)) / (2 * o);
      0 < g && g < 1 && (t ? this.addX(this.sumCubic(g, e, r, n, a)) : this.addY(this.sumCubic(g, e, r, n, a)));
    }
  }
  // from http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
  addBezierCurve(t, e, r, n, a, s, o, u) {
    this.addPoint(t, e), this.addPoint(o, u), this.bezierCurveAdd(!0, t, r, a, o), this.bezierCurveAdd(!1, e, n, s, u);
  }
  addQuadraticCurve(t, e, r, n, a, s) {
    var o = t + 0.6666666666666666 * (r - t), u = e + 2 / 3 * (n - e), h = o + 1 / 3 * (a - t), c = u + 1 / 3 * (s - e);
    this.addBezierCurve(t, e, o, h, u, c, a, s);
  }
  isPointInBox(t, e) {
    var {
      x1: r,
      y1: n,
      x2: a,
      y2: s
    } = this;
    return r <= t && t <= a && n <= e && e <= s;
  }
}
class z extends w {
  constructor(t) {
    super(t.replace(/([+\-.])\s+/gm, "$1").replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, "")), this.control = null, this.start = null, this.current = null, this.command = null, this.commands = this.commands, this.i = -1, this.previousCommand = null, this.points = [], this.angles = [];
  }
  reset() {
    this.i = -1, this.command = null, this.previousCommand = null, this.start = new K(0, 0), this.control = new K(0, 0), this.current = new K(0, 0), this.points = [], this.angles = [];
  }
  isEnd() {
    var {
      i: t,
      commands: e
    } = this;
    return t >= e.length - 1;
  }
  next() {
    var t = this.commands[++this.i];
    return this.previousCommand = this.command, this.command = t, t;
  }
  getPoint() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "x", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "y", r = new K(this.command[t], this.command[e]);
    return this.makeAbsolute(r);
  }
  getAsControlPoint(t, e) {
    var r = this.getPoint(t, e);
    return this.control = r, r;
  }
  getAsCurrentPoint(t, e) {
    var r = this.getPoint(t, e);
    return this.current = r, r;
  }
  getReflectedControlPoint() {
    var t = this.previousCommand.type;
    if (t !== w.CURVE_TO && t !== w.SMOOTH_CURVE_TO && t !== w.QUAD_TO && t !== w.SMOOTH_QUAD_TO) return this.current;
    var {
      current: {
        x: e,
        y: r
      },
      control: {
        x: n,
        y: a
      }
    } = this, s = new K(2 * e - n, 2 * r - a);
    return s;
  }
  makeAbsolute(t) {
    if (this.command.relative) {
      var {
        x: e,
        y: r
      } = this.current;
      t.x += e, t.y += r;
    }
    return t;
  }
  addMarker(t, e, r) {
    var {
      points: n,
      angles: a
    } = this;
    r && a.length > 0 && !a[a.length - 1] && (a[a.length - 1] = n[n.length - 1].angleTo(r)), this.addMarkerAngle(t, e ? e.angleTo(t) : null);
  }
  addMarkerAngle(t, e) {
    this.points.push(t), this.angles.push(e);
  }
  getMarkerPoints() {
    return this.points;
  }
  getMarkerAngles() {
    for (var {
      angles: t
    } = this, e = t.length, r = 0; r < e; r++) if (!t[r]) {
      for (var n = r + 1; n < e; n++) if (t[n]) {
        t[r] = t[n];
        break;
      }
    }
    return t;
  }
}
class ee extends $ {
  constructor() {
    super(...arguments), this.modifiedEmSizeStack = !1;
  }
  calculateOpacity() {
    for (var t = 1, e = this; e; ) {
      var r = e.getStyle("opacity", !1, !0);
      r.hasValue(!0) && (t *= r.getNumber()), e = e.parent;
    }
    return t;
  }
  setContext(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (!e) {
      var r = this.getStyle("fill"), n = this.getStyle("fill-opacity"), a = this.getStyle("stroke"), s = this.getStyle("stroke-opacity");
      if (r.isUrlDefinition()) {
        var o = r.getFillStyleDefinition(this, n);
        o && (t.fillStyle = o);
      } else if (r.hasValue()) {
        r.getString() === "currentColor" && r.setValue(this.getStyle("color").getColor());
        var u = r.getColor();
        u !== "inherit" && (t.fillStyle = u === "none" ? "rgba(0,0,0,0)" : u);
      }
      if (n.hasValue()) {
        var h = new L(this.document, "fill", t.fillStyle).addOpacity(n).getColor();
        t.fillStyle = h;
      }
      if (a.isUrlDefinition()) {
        var c = a.getFillStyleDefinition(this, s);
        c && (t.strokeStyle = c);
      } else if (a.hasValue()) {
        a.getString() === "currentColor" && a.setValue(this.getStyle("color").getColor());
        var f = a.getString();
        f !== "inherit" && (t.strokeStyle = f === "none" ? "rgba(0,0,0,0)" : f);
      }
      if (s.hasValue()) {
        var g = new L(this.document, "stroke", t.strokeStyle).addOpacity(s).getString();
        t.strokeStyle = g;
      }
      var l = this.getStyle("stroke-width");
      if (l.hasValue()) {
        var p = l.getPixels();
        t.lineWidth = p || ne;
      }
      var d = this.getStyle("stroke-linecap"), v = this.getStyle("stroke-linejoin"), y = this.getStyle("stroke-miterlimit"), m = this.getStyle("stroke-dasharray"), x = this.getStyle("stroke-dashoffset");
      if (d.hasValue() && (t.lineCap = d.getString()), v.hasValue() && (t.lineJoin = v.getString()), y.hasValue() && (t.miterLimit = y.getNumber()), m.hasValue() && m.getString() !== "none") {
        var b = pt(m.getString());
        typeof t.setLineDash < "u" ? t.setLineDash(b) : typeof t.webkitLineDash < "u" ? t.webkitLineDash = b : typeof t.mozDash < "u" && !(b.length === 1 && b[0] === 0) && (t.mozDash = b);
        var O = x.getPixels();
        typeof t.lineDashOffset < "u" ? t.lineDashOffset = O : typeof t.webkitLineDashOffset < "u" ? t.webkitLineDashOffset = O : typeof t.mozDashOffset < "u" && (t.mozDashOffset = O);
      }
    }
    if (this.modifiedEmSizeStack = !1, typeof t.font < "u") {
      var S = this.getStyle("font"), T = this.getStyle("font-style"), N = this.getStyle("font-variant"), k = this.getStyle("font-weight"), V = this.getStyle("font-size"), R = this.getStyle("font-family"), P = new ot(T.getString(), N.getString(), k.getString(), V.hasValue() ? "".concat(V.getPixels(!0), "px") : "", R.getString(), ot.parse(S.getString(), t.font));
      T.setValue(P.fontStyle), N.setValue(P.fontVariant), k.setValue(P.fontWeight), V.setValue(P.fontSize), R.setValue(P.fontFamily), t.font = P.toString(), V.isPixels() && (this.document.emSize = V.getPixels(), this.modifiedEmSizeStack = !0);
    }
    e || (this.applyEffects(t), t.globalAlpha = this.calculateOpacity());
  }
  clearContext(t) {
    super.clearContext(t), this.modifiedEmSizeStack && this.document.popEmSize();
  }
}
class W extends ee {
  constructor(t, e, r) {
    super(t, e, r), this.type = "path", this.pathParser = null, this.pathParser = new z(this.getAttribute("d").getString());
  }
  path(t) {
    var {
      pathParser: e
    } = this, r = new Ct();
    for (e.reset(), t && t.beginPath(); !e.isEnd(); ) switch (e.next().type) {
      case z.MOVE_TO:
        this.pathM(t, r);
        break;
      case z.LINE_TO:
        this.pathL(t, r);
        break;
      case z.HORIZ_LINE_TO:
        this.pathH(t, r);
        break;
      case z.VERT_LINE_TO:
        this.pathV(t, r);
        break;
      case z.CURVE_TO:
        this.pathC(t, r);
        break;
      case z.SMOOTH_CURVE_TO:
        this.pathS(t, r);
        break;
      case z.QUAD_TO:
        this.pathQ(t, r);
        break;
      case z.SMOOTH_QUAD_TO:
        this.pathT(t, r);
        break;
      case z.ARC:
        this.pathA(t, r);
        break;
      case z.CLOSE_PATH:
        this.pathZ(t, r);
        break;
    }
    return r;
  }
  getBoundingBox(t) {
    return this.path();
  }
  getMarkers() {
    var {
      pathParser: t
    } = this, e = t.getMarkerPoints(), r = t.getMarkerAngles(), n = e.map((a, s) => [a, r[s]]);
    return n;
  }
  renderChildren(t) {
    this.path(t), this.document.screen.mouse.checkPath(this, t);
    var e = this.getStyle("fill-rule");
    t.fillStyle !== "" && (e.getString("inherit") !== "inherit" ? t.fill(e.getString()) : t.fill()), t.strokeStyle !== "" && (this.getAttribute("vector-effect").getString() === "non-scaling-stroke" ? (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.stroke(), t.restore()) : t.stroke());
    var r = this.getMarkers();
    if (r) {
      var n = r.length - 1, a = this.getStyle("marker-start"), s = this.getStyle("marker-mid"), o = this.getStyle("marker-end");
      if (a.isUrlDefinition()) {
        var u = a.getDefinition(), [h, c] = r[0];
        u.render(t, h, c);
      }
      if (s.isUrlDefinition()) for (var f = s.getDefinition(), g = 1; g < n; g++) {
        var [l, p] = r[g];
        f.render(t, l, p);
      }
      if (o.isUrlDefinition()) {
        var d = o.getDefinition(), [v, y] = r[n];
        d.render(t, v, y);
      }
    }
  }
  static pathM(t) {
    var e = t.getAsCurrentPoint();
    return t.start = t.current, {
      point: e
    };
  }
  pathM(t, e) {
    var {
      pathParser: r
    } = this, {
      point: n
    } = W.pathM(r), {
      x: a,
      y: s
    } = n;
    r.addMarker(n), e.addPoint(a, s), t && t.moveTo(a, s);
  }
  static pathL(t) {
    var {
      current: e
    } = t, r = t.getAsCurrentPoint();
    return {
      current: e,
      point: r
    };
  }
  pathL(t, e) {
    var {
      pathParser: r
    } = this, {
      current: n,
      point: a
    } = W.pathL(r), {
      x: s,
      y: o
    } = a;
    r.addMarker(a, n), e.addPoint(s, o), t && t.lineTo(s, o);
  }
  static pathH(t) {
    var {
      current: e,
      command: r
    } = t, n = new K((r.relative ? e.x : 0) + r.x, e.y);
    return t.current = n, {
      current: e,
      point: n
    };
  }
  pathH(t, e) {
    var {
      pathParser: r
    } = this, {
      current: n,
      point: a
    } = W.pathH(r), {
      x: s,
      y: o
    } = a;
    r.addMarker(a, n), e.addPoint(s, o), t && t.lineTo(s, o);
  }
  static pathV(t) {
    var {
      current: e,
      command: r
    } = t, n = new K(e.x, (r.relative ? e.y : 0) + r.y);
    return t.current = n, {
      current: e,
      point: n
    };
  }
  pathV(t, e) {
    var {
      pathParser: r
    } = this, {
      current: n,
      point: a
    } = W.pathV(r), {
      x: s,
      y: o
    } = a;
    r.addMarker(a, n), e.addPoint(s, o), t && t.lineTo(s, o);
  }
  static pathC(t) {
    var {
      current: e
    } = t, r = t.getPoint("x1", "y1"), n = t.getAsControlPoint("x2", "y2"), a = t.getAsCurrentPoint();
    return {
      current: e,
      point: r,
      controlPoint: n,
      currentPoint: a
    };
  }
  pathC(t, e) {
    var {
      pathParser: r
    } = this, {
      current: n,
      point: a,
      controlPoint: s,
      currentPoint: o
    } = W.pathC(r);
    r.addMarker(o, s, a), e.addBezierCurve(n.x, n.y, a.x, a.y, s.x, s.y, o.x, o.y), t && t.bezierCurveTo(a.x, a.y, s.x, s.y, o.x, o.y);
  }
  static pathS(t) {
    var {
      current: e
    } = t, r = t.getReflectedControlPoint(), n = t.getAsControlPoint("x2", "y2"), a = t.getAsCurrentPoint();
    return {
      current: e,
      point: r,
      controlPoint: n,
      currentPoint: a
    };
  }
  pathS(t, e) {
    var {
      pathParser: r
    } = this, {
      current: n,
      point: a,
      controlPoint: s,
      currentPoint: o
    } = W.pathS(r);
    r.addMarker(o, s, a), e.addBezierCurve(n.x, n.y, a.x, a.y, s.x, s.y, o.x, o.y), t && t.bezierCurveTo(a.x, a.y, s.x, s.y, o.x, o.y);
  }
  static pathQ(t) {
    var {
      current: e
    } = t, r = t.getAsControlPoint("x1", "y1"), n = t.getAsCurrentPoint();
    return {
      current: e,
      controlPoint: r,
      currentPoint: n
    };
  }
  pathQ(t, e) {
    var {
      pathParser: r
    } = this, {
      current: n,
      controlPoint: a,
      currentPoint: s
    } = W.pathQ(r);
    r.addMarker(s, a, a), e.addQuadraticCurve(n.x, n.y, a.x, a.y, s.x, s.y), t && t.quadraticCurveTo(a.x, a.y, s.x, s.y);
  }
  static pathT(t) {
    var {
      current: e
    } = t, r = t.getReflectedControlPoint();
    t.control = r;
    var n = t.getAsCurrentPoint();
    return {
      current: e,
      controlPoint: r,
      currentPoint: n
    };
  }
  pathT(t, e) {
    var {
      pathParser: r
    } = this, {
      current: n,
      controlPoint: a,
      currentPoint: s
    } = W.pathT(r);
    r.addMarker(s, a, a), e.addQuadraticCurve(n.x, n.y, a.x, a.y, s.x, s.y), t && t.quadraticCurveTo(a.x, a.y, s.x, s.y);
  }
  static pathA(t) {
    var {
      current: e,
      command: r
    } = t, {
      rX: n,
      rY: a,
      xRot: s,
      lArcFlag: o,
      sweepFlag: u
    } = r, h = s * (Math.PI / 180), c = t.getAsCurrentPoint(), f = new K(Math.cos(h) * (e.x - c.x) / 2 + Math.sin(h) * (e.y - c.y) / 2, -Math.sin(h) * (e.x - c.x) / 2 + Math.cos(h) * (e.y - c.y) / 2), g = Math.pow(f.x, 2) / Math.pow(n, 2) + Math.pow(f.y, 2) / Math.pow(a, 2);
    g > 1 && (n *= Math.sqrt(g), a *= Math.sqrt(g));
    var l = (o === u ? -1 : 1) * Math.sqrt((Math.pow(n, 2) * Math.pow(a, 2) - Math.pow(n, 2) * Math.pow(f.y, 2) - Math.pow(a, 2) * Math.pow(f.x, 2)) / (Math.pow(n, 2) * Math.pow(f.y, 2) + Math.pow(a, 2) * Math.pow(f.x, 2)));
    isNaN(l) && (l = 0);
    var p = new K(l * n * f.y / a, l * -a * f.x / n), d = new K((e.x + c.x) / 2 + Math.cos(h) * p.x - Math.sin(h) * p.y, (e.y + c.y) / 2 + Math.sin(h) * p.x + Math.cos(h) * p.y), v = Bu([1, 0], [(f.x - p.x) / n, (f.y - p.y) / a]), y = [(f.x - p.x) / n, (f.y - p.y) / a], m = [(-f.x - p.x) / n, (-f.y - p.y) / a], x = Bu(y, m);
    return Oi(y, m) <= -1 && (x = Math.PI), Oi(y, m) >= 1 && (x = 0), {
      currentPoint: c,
      rX: n,
      rY: a,
      sweepFlag: u,
      xAxisRotation: h,
      centp: d,
      a1: v,
      ad: x
    };
  }
  pathA(t, e) {
    var {
      pathParser: r
    } = this, {
      currentPoint: n,
      rX: a,
      rY: s,
      sweepFlag: o,
      xAxisRotation: u,
      centp: h,
      a1: c,
      ad: f
    } = W.pathA(r), g = 1 - o ? 1 : -1, l = c + g * (f / 2), p = new K(h.x + a * Math.cos(l), h.y + s * Math.sin(l));
    if (r.addMarkerAngle(p, l - g * Math.PI / 2), r.addMarkerAngle(n, l - g * Math.PI), e.addPoint(n.x, n.y), t && !isNaN(c) && !isNaN(f)) {
      var d = a > s ? a : s, v = a > s ? 1 : a / s, y = a > s ? s / a : 1;
      t.translate(h.x, h.y), t.rotate(u), t.scale(v, y), t.arc(0, 0, d, c, c + f, !!(1 - o)), t.scale(1 / v, 1 / y), t.rotate(-u), t.translate(-h.x, -h.y);
    }
  }
  static pathZ(t) {
    t.current = t.start;
  }
  pathZ(t, e) {
    W.pathZ(this.pathParser), t && e.x1 !== e.x2 && e.y1 !== e.y2 && t.closePath();
  }
}
class Lh extends W {
  constructor(t, e, r) {
    super(t, e, r), this.type = "glyph", this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber(), this.unicode = this.getAttribute("unicode").getString(), this.arabicForm = this.getAttribute("arabic-form").getString();
  }
}
class Yt extends ee {
  constructor(t, e, r) {
    super(t, e, new.target === Yt ? !0 : r), this.type = "text", this.x = 0, this.y = 0, this.measureCache = -1;
  }
  setContext(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    super.setContext(t, e);
    var r = this.getStyle("dominant-baseline").getTextBaseline() || this.getStyle("alignment-baseline").getTextBaseline();
    r && (t.textBaseline = r);
  }
  initializeCoordinates() {
    this.x = 0, this.y = 0, this.leafTexts = [], this.textChunkStart = 0, this.minX = Number.POSITIVE_INFINITY, this.maxX = Number.NEGATIVE_INFINITY;
  }
  getBoundingBox(t) {
    if (this.type !== "text") return this.getTElementBoundingBox(t);
    this.initializeCoordinates(), this.adjustChildCoordinatesRecursive(t);
    var e = null;
    return this.children.forEach((r, n) => {
      var a = this.getChildBoundingBox(t, this, this, n);
      e ? e.addBoundingBox(a) : e = a;
    }), e;
  }
  getFontSize() {
    var {
      document: t,
      parent: e
    } = this, r = ot.parse(t.ctx.font).fontSize, n = e.getStyle("font-size").getNumber(r);
    return n;
  }
  getTElementBoundingBox(t) {
    var e = this.getFontSize();
    return new Ct(this.x, this.y - e, this.x + this.measureText(t), this.y);
  }
  getGlyph(t, e, r) {
    var n = e[r], a = null;
    if (t.isArabic) {
      var s = e.length, o = e[r - 1], u = e[r + 1], h = "isolated";
      if ((r === 0 || o === " ") && r < s - 1 && u !== " " && (h = "terminal"), r > 0 && o !== " " && r < s - 1 && u !== " " && (h = "medial"), r > 0 && o !== " " && (r === s - 1 || u === " ") && (h = "initial"), typeof t.glyphs[n] < "u") {
        var c = t.glyphs[n];
        a = c instanceof Lh ? c : c[h];
      }
    } else a = t.glyphs[n];
    return a || (a = t.missingGlyph), a;
  }
  getText() {
    return "";
  }
  getTextFromNode(t) {
    var e = t || this.node, r = Array.from(e.parentNode.childNodes), n = r.indexOf(e), a = r.length - 1, s = se(
      // textNode.value
      // || textNode.text
      e.textContent || ""
    );
    return n === 0 && (s = Al(s)), n === a && (s = El(s)), s;
  }
  renderChildren(t) {
    if (this.type !== "text") {
      this.renderTElementChildren(t);
      return;
    }
    this.initializeCoordinates(), this.adjustChildCoordinatesRecursive(t), this.children.forEach((r, n) => {
      this.renderChild(t, this, this, n);
    });
    var {
      mouse: e
    } = this.document.screen;
    e.isWorking() && e.checkBoundingBox(this, this.getBoundingBox(t));
  }
  renderTElementChildren(t) {
    var {
      document: e,
      parent: r
    } = this, n = this.getText(), a = r.getStyle("font-family").getDefinition();
    if (a) {
      for (var {
        unitsPerEm: s
      } = a.fontFace, o = ot.parse(e.ctx.font), u = r.getStyle("font-size").getNumber(o.fontSize), h = r.getStyle("font-style").getString(o.fontStyle), c = u / s, f = a.isRTL ? n.split("").reverse().join("") : n, g = pt(r.getAttribute("dx").getString()), l = f.length, p = 0; p < l; p++) {
        var d = this.getGlyph(a, f, p);
        t.translate(this.x, this.y), t.scale(c, -c);
        var v = t.lineWidth;
        t.lineWidth = t.lineWidth * s / u, h === "italic" && t.transform(1, 0, 0.4, 1, 0, 0), d.render(t), h === "italic" && t.transform(1, 0, -0.4, 1, 0, 0), t.lineWidth = v, t.scale(1 / c, -1 / c), t.translate(-this.x, -this.y), this.x += u * (d.horizAdvX || a.horizAdvX) / s, typeof g[p] < "u" && !isNaN(g[p]) && (this.x += g[p]);
      }
      return;
    }
    var {
      x: y,
      y: m
    } = this;
    t.fillStyle && t.fillText(n, y, m), t.strokeStyle && t.strokeText(n, y, m);
  }
  applyAnchoring() {
    if (!(this.textChunkStart >= this.leafTexts.length)) {
      var t = this.leafTexts[this.textChunkStart], e = t.getStyle("text-anchor").getString("start"), r = !1, n = 0;
      e === "start" || e === "end" && r ? n = t.x - this.minX : e === "end" || e === "start" && r ? n = t.x - this.maxX : n = t.x - (this.minX + this.maxX) / 2;
      for (var a = this.textChunkStart; a < this.leafTexts.length; a++) this.leafTexts[a].x += n;
      this.minX = Number.POSITIVE_INFINITY, this.maxX = Number.NEGATIVE_INFINITY, this.textChunkStart = this.leafTexts.length;
    }
  }
  adjustChildCoordinatesRecursive(t) {
    this.children.forEach((e, r) => {
      this.adjustChildCoordinatesRecursiveCore(t, this, this, r);
    }), this.applyAnchoring();
  }
  adjustChildCoordinatesRecursiveCore(t, e, r, n) {
    var a = r.children[n];
    a.children.length > 0 ? a.children.forEach((s, o) => {
      e.adjustChildCoordinatesRecursiveCore(t, e, a, o);
    }) : this.adjustChildCoordinates(t, e, r, n);
  }
  adjustChildCoordinates(t, e, r, n) {
    var a = r.children[n];
    if (typeof a.measureText != "function") return a;
    t.save(), a.setContext(t, !0);
    var s = a.getAttribute("x"), o = a.getAttribute("y"), u = a.getAttribute("dx"), h = a.getAttribute("dy"), c = a.getStyle("font-family").getDefinition(), f = !!c && c.isRTL;
    n === 0 && (s.hasValue() || s.setValue(a.getInheritedAttribute("x")), o.hasValue() || o.setValue(a.getInheritedAttribute("y")), u.hasValue() || u.setValue(a.getInheritedAttribute("dx")), h.hasValue() || h.setValue(a.getInheritedAttribute("dy")));
    var g = a.measureText(t);
    return f && (e.x -= g), s.hasValue() ? (e.applyAnchoring(), a.x = s.getPixels("x"), u.hasValue() && (a.x += u.getPixels("x"))) : (u.hasValue() && (e.x += u.getPixels("x")), a.x = e.x), e.x = a.x, f || (e.x += g), o.hasValue() ? (a.y = o.getPixels("y"), h.hasValue() && (a.y += h.getPixels("y"))) : (h.hasValue() && (e.y += h.getPixels("y")), a.y = e.y), e.y = a.y, e.leafTexts.push(a), e.minX = Math.min(e.minX, a.x, a.x + g), e.maxX = Math.max(e.maxX, a.x, a.x + g), a.clearContext(t), t.restore(), a;
  }
  getChildBoundingBox(t, e, r, n) {
    var a = r.children[n];
    if (typeof a.getBoundingBox != "function") return null;
    var s = a.getBoundingBox(t);
    return s ? (a.children.forEach((o, u) => {
      var h = e.getChildBoundingBox(t, e, a, u);
      s.addBoundingBox(h);
    }), s) : null;
  }
  renderChild(t, e, r, n) {
    var a = r.children[n];
    a.render(t), a.children.forEach((s, o) => {
      e.renderChild(t, e, a, o);
    });
  }
  measureText(t) {
    var {
      measureCache: e
    } = this;
    if (~e) return e;
    var r = this.getText(), n = this.measureTargetText(t, r);
    return this.measureCache = n, n;
  }
  measureTargetText(t, e) {
    if (!e.length) return 0;
    var {
      parent: r
    } = this, n = r.getStyle("font-family").getDefinition();
    if (n) {
      for (var a = this.getFontSize(), s = n.isRTL ? e.split("").reverse().join("") : e, o = pt(r.getAttribute("dx").getString()), u = s.length, h = 0, c = 0; c < u; c++) {
        var f = this.getGlyph(n, s, c);
        h += (f.horizAdvX || n.horizAdvX) * a / n.fontFace.unitsPerEm, typeof o[c] < "u" && !isNaN(o[c]) && (h += o[c]);
      }
      return h;
    }
    if (!t.measureText) return e.length * 10;
    t.save(), this.setContext(t, !0);
    var {
      width: g
    } = t.measureText(e);
    return this.clearContext(t), t.restore(), g;
  }
  /**
   * Inherits positional attributes from {@link TextElement} parent(s). Attributes
   * are only inherited from a parent to its first child.
   * @param name - The attribute name.
   * @returns The attribute value or null.
   */
  getInheritedAttribute(t) {
    for (var e = this; e instanceof Yt && e.isFirstChild(); ) {
      var r = e.parent.getAttribute(t);
      if (r.hasValue(!0)) return r.getValue("0");
      e = e.parent;
    }
    return null;
  }
}
class Xe extends Yt {
  constructor(t, e, r) {
    super(t, e, new.target === Xe ? !0 : r), this.type = "tspan", this.text = this.children.length > 0 ? "" : this.getTextFromNode();
  }
  getText() {
    return this.text;
  }
}
class tf extends Xe {
  constructor() {
    super(...arguments), this.type = "textNode";
  }
}
class xe extends ee {
  constructor() {
    super(...arguments), this.type = "svg", this.root = !1;
  }
  setContext(t) {
    var e, {
      document: r
    } = this, {
      screen: n,
      window: a
    } = r, s = t.canvas;
    if (n.setDefaults(t), s.style && typeof t.font < "u" && a && typeof a.getComputedStyle < "u") {
      t.font = a.getComputedStyle(s).getPropertyValue("font");
      var o = new L(r, "fontSize", ot.parse(t.font).fontSize);
      o.hasValue() && (r.rootEmSize = o.getPixels("y"), r.emSize = r.rootEmSize);
    }
    this.getAttribute("x").hasValue() || this.getAttribute("x", !0).setValue(0), this.getAttribute("y").hasValue() || this.getAttribute("y", !0).setValue(0);
    var {
      width: u,
      height: h
    } = n.viewPort;
    this.getStyle("width").hasValue() || this.getStyle("width", !0).setValue("100%"), this.getStyle("height").hasValue() || this.getStyle("height", !0).setValue("100%"), this.getStyle("color").hasValue() || this.getStyle("color", !0).setValue("black");
    var c = this.getAttribute("refX"), f = this.getAttribute("refY"), g = this.getAttribute("viewBox"), l = g.hasValue() ? pt(g.getString()) : null, p = !this.root && this.getStyle("overflow").getValue("hidden") !== "visible", d = 0, v = 0, y = 0, m = 0;
    l && (d = l[0], v = l[1]), this.root || (u = this.getStyle("width").getPixels("x"), h = this.getStyle("height").getPixels("y"), this.type === "marker" && (y = d, m = v, d = 0, v = 0)), n.viewPort.setCurrent(u, h), this.node && (!this.parent || ((e = this.node.parentNode) === null || e === void 0 ? void 0 : e.nodeName) === "foreignObject") && this.getStyle("transform", !1, !0).hasValue() && !this.getStyle("transform-origin", !1, !0).hasValue() && this.getStyle("transform-origin", !0, !0).setValue("50% 50%"), super.setContext(t), t.translate(this.getAttribute("x").getPixels("x"), this.getAttribute("y").getPixels("y")), l && (u = l[2], h = l[3]), r.setViewBox({
      ctx: t,
      aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
      width: n.viewPort.width,
      desiredWidth: u,
      height: n.viewPort.height,
      desiredHeight: h,
      minX: d,
      minY: v,
      refX: c.getValue(),
      refY: f.getValue(),
      clip: p,
      clipX: y,
      clipY: m
    }), l && (n.viewPort.removeCurrent(), n.viewPort.setCurrent(u, h));
  }
  clearContext(t) {
    super.clearContext(t), this.document.screen.viewPort.removeCurrent();
  }
  /**
   * Resize SVG to fit in given size.
   * @param width
   * @param height
   * @param preserveAspectRatio
   */
  resize(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = this.getAttribute("width", !0), a = this.getAttribute("height", !0), s = this.getAttribute("viewBox"), o = this.getAttribute("style"), u = n.getNumber(0), h = a.getNumber(0);
    if (r) if (typeof r == "string") this.getAttribute("preserveAspectRatio", !0).setValue(r);
    else {
      var c = this.getAttribute("preserveAspectRatio");
      c.hasValue() && c.setValue(c.getString().replace(/^\s*(\S.*\S)\s*$/, "$1"));
    }
    if (n.setValue(t), a.setValue(e), s.hasValue() || s.setValue("0 0 ".concat(u || t, " ").concat(h || e)), o.hasValue()) {
      var f = this.getStyle("width"), g = this.getStyle("height");
      f.hasValue() && f.setValue("".concat(t, "px")), g.hasValue() && g.setValue("".concat(e, "px"));
    }
  }
}
class Dh extends W {
  constructor() {
    super(...arguments), this.type = "rect";
  }
  path(t) {
    var e = this.getAttribute("x").getPixels("x"), r = this.getAttribute("y").getPixels("y"), n = this.getStyle("width", !1, !0).getPixels("x"), a = this.getStyle("height", !1, !0).getPixels("y"), s = this.getAttribute("rx"), o = this.getAttribute("ry"), u = s.getPixels("x"), h = o.getPixels("y");
    if (s.hasValue() && !o.hasValue() && (h = u), o.hasValue() && !s.hasValue() && (u = h), u = Math.min(u, n / 2), h = Math.min(h, a / 2), t) {
      var c = 4 * ((Math.sqrt(2) - 1) / 3);
      t.beginPath(), a > 0 && n > 0 && (t.moveTo(e + u, r), t.lineTo(e + n - u, r), t.bezierCurveTo(e + n - u + c * u, r, e + n, r + h - c * h, e + n, r + h), t.lineTo(e + n, r + a - h), t.bezierCurveTo(e + n, r + a - h + c * h, e + n - u + c * u, r + a, e + n - u, r + a), t.lineTo(e + u, r + a), t.bezierCurveTo(e + u - c * u, r + a, e, r + a - h + c * h, e, r + a - h), t.lineTo(e, r + h), t.bezierCurveTo(e, r + h - c * h, e + u - c * u, r, e + u, r), t.closePath());
    }
    return new Ct(e, r, e + n, r + a);
  }
  getMarkers() {
    return null;
  }
}
class ef extends W {
  constructor() {
    super(...arguments), this.type = "circle";
  }
  path(t) {
    var e = this.getAttribute("cx").getPixels("x"), r = this.getAttribute("cy").getPixels("y"), n = this.getAttribute("r").getPixels();
    return t && n > 0 && (t.beginPath(), t.arc(e, r, n, 0, Math.PI * 2, !1), t.closePath()), new Ct(e - n, r - n, e + n, r + n);
  }
  getMarkers() {
    return null;
  }
}
class rf extends W {
  constructor() {
    super(...arguments), this.type = "ellipse";
  }
  path(t) {
    var e = 4 * ((Math.sqrt(2) - 1) / 3), r = this.getAttribute("rx").getPixels("x"), n = this.getAttribute("ry").getPixels("y"), a = this.getAttribute("cx").getPixels("x"), s = this.getAttribute("cy").getPixels("y");
    return t && r > 0 && n > 0 && (t.beginPath(), t.moveTo(a + r, s), t.bezierCurveTo(a + r, s + e * n, a + e * r, s + n, a, s + n), t.bezierCurveTo(a - e * r, s + n, a - r, s + e * n, a - r, s), t.bezierCurveTo(a - r, s - e * n, a - e * r, s - n, a, s - n), t.bezierCurveTo(a + e * r, s - n, a + r, s - e * n, a + r, s), t.closePath()), new Ct(a - r, s - n, a + r, s + n);
  }
  getMarkers() {
    return null;
  }
}
class nf extends W {
  constructor() {
    super(...arguments), this.type = "line";
  }
  getPoints() {
    return [new K(this.getAttribute("x1").getPixels("x"), this.getAttribute("y1").getPixels("y")), new K(this.getAttribute("x2").getPixels("x"), this.getAttribute("y2").getPixels("y"))];
  }
  path(t) {
    var [{
      x: e,
      y: r
    }, {
      x: n,
      y: a
    }] = this.getPoints();
    return t && (t.beginPath(), t.moveTo(e, r), t.lineTo(n, a)), new Ct(e, r, n, a);
  }
  getMarkers() {
    var [t, e] = this.getPoints(), r = t.angleTo(e);
    return [[t, r], [e, r]];
  }
}
class Fh extends W {
  constructor(t, e, r) {
    super(t, e, r), this.type = "polyline", this.points = [], this.points = K.parsePath(this.getAttribute("points").getString());
  }
  path(t) {
    var {
      points: e
    } = this, [{
      x: r,
      y: n
    }] = e, a = new Ct(r, n);
    return t && (t.beginPath(), t.moveTo(r, n)), e.forEach((s) => {
      var {
        x: o,
        y: u
      } = s;
      a.addPoint(o, u), t && t.lineTo(o, u);
    }), a;
  }
  getMarkers() {
    var {
      points: t
    } = this, e = t.length - 1, r = [];
    return t.forEach((n, a) => {
      a !== e && r.push([n, n.angleTo(t[a + 1])]);
    }), r.length > 0 && r.push([t[t.length - 1], r[r.length - 1][1]]), r;
  }
}
class af extends Fh {
  constructor() {
    super(...arguments), this.type = "polygon";
  }
  path(t) {
    var e = super.path(t), [{
      x: r,
      y: n
    }] = this.points;
    return t && (t.lineTo(r, n), t.closePath()), e;
  }
}
class sf extends $ {
  constructor() {
    super(...arguments), this.type = "pattern";
  }
  createPattern(t, e, r) {
    var n = this.getStyle("width").getPixels("x", !0), a = this.getStyle("height").getPixels("y", !0), s = new xe(this.document, null);
    s.attributes.viewBox = new L(this.document, "viewBox", this.getAttribute("viewBox").getValue()), s.attributes.width = new L(this.document, "width", "".concat(n, "px")), s.attributes.height = new L(this.document, "height", "".concat(a, "px")), s.attributes.transform = new L(this.document, "transform", this.getAttribute("patternTransform").getValue()), s.children = this.children;
    var o = this.document.createCanvas(n, a), u = o.getContext("2d"), h = this.getAttribute("x"), c = this.getAttribute("y");
    h.hasValue() && c.hasValue() && u.translate(h.getPixels("x", !0), c.getPixels("y", !0)), r.hasValue() ? this.styles["fill-opacity"] = r : Reflect.deleteProperty(this.styles, "fill-opacity");
    for (var f = -1; f <= 1; f++) for (var g = -1; g <= 1; g++) u.save(), s.attributes.x = new L(this.document, "x", f * o.width), s.attributes.y = new L(this.document, "y", g * o.height), s.render(u), u.restore();
    var l = t.createPattern(o, "repeat");
    return l;
  }
}
class of extends $ {
  constructor() {
    super(...arguments), this.type = "marker";
  }
  render(t, e, r) {
    if (e) {
      var {
        x: n,
        y: a
      } = e, s = this.getAttribute("orient").getString("auto"), o = this.getAttribute("markerUnits").getString("strokeWidth");
      t.translate(n, a), s === "auto" && t.rotate(r), o === "strokeWidth" && t.scale(t.lineWidth, t.lineWidth), t.save();
      var u = new xe(this.document, null);
      u.type = this.type, u.attributes.viewBox = new L(this.document, "viewBox", this.getAttribute("viewBox").getValue()), u.attributes.refX = new L(this.document, "refX", this.getAttribute("refX").getValue()), u.attributes.refY = new L(this.document, "refY", this.getAttribute("refY").getValue()), u.attributes.width = new L(this.document, "width", this.getAttribute("markerWidth").getValue()), u.attributes.height = new L(this.document, "height", this.getAttribute("markerHeight").getValue()), u.attributes.overflow = new L(this.document, "overflow", this.getAttribute("overflow").getValue()), u.attributes.fill = new L(this.document, "fill", this.getAttribute("fill").getColor("black")), u.attributes.stroke = new L(this.document, "stroke", this.getAttribute("stroke").getValue("none")), u.children = this.children, u.render(t), t.restore(), o === "strokeWidth" && t.scale(1 / t.lineWidth, 1 / t.lineWidth), s === "auto" && t.rotate(-r), t.translate(-n, -a);
    }
  }
}
class uf extends $ {
  constructor() {
    super(...arguments), this.type = "defs";
  }
  render() {
  }
}
class Wi extends ee {
  constructor() {
    super(...arguments), this.type = "g";
  }
  getBoundingBox(t) {
    var e = new Ct();
    return this.children.forEach((r) => {
      e.addBoundingBox(r.getBoundingBox(t));
    }), e;
  }
}
class Bh extends $ {
  constructor(t, e, r) {
    super(t, e, r), this.attributesToInherit = ["gradientUnits"], this.stops = [];
    var {
      stops: n,
      children: a
    } = this;
    a.forEach((s) => {
      s.type === "stop" && n.push(s);
    });
  }
  getGradientUnits() {
    return this.getAttribute("gradientUnits").getString("objectBoundingBox");
  }
  createGradient(t, e, r) {
    var n = this;
    this.getHrefAttribute().hasValue() && (n = this.getHrefAttribute().getDefinition(), this.inheritStopContainer(n));
    var {
      stops: a
    } = n, s = this.getGradient(t, e);
    if (!s) return this.addParentOpacity(r, a[a.length - 1].color);
    if (a.forEach((v) => {
      s.addColorStop(v.offset, this.addParentOpacity(r, v.color));
    }), this.getAttribute("gradientTransform").hasValue()) {
      var {
        document: o
      } = this, {
        MAX_VIRTUAL_PIXELS: u,
        viewPort: h
      } = o.screen, [c] = h.viewPorts, f = new Dh(o, null);
      f.attributes.x = new L(o, "x", -u / 3), f.attributes.y = new L(o, "y", -u / 3), f.attributes.width = new L(o, "width", u), f.attributes.height = new L(o, "height", u);
      var g = new Wi(o, null);
      g.attributes.transform = new L(o, "transform", this.getAttribute("gradientTransform").getValue()), g.children = [f];
      var l = new xe(o, null);
      l.attributes.x = new L(o, "x", 0), l.attributes.y = new L(o, "y", 0), l.attributes.width = new L(o, "width", c.width), l.attributes.height = new L(o, "height", c.height), l.children = [g];
      var p = o.createCanvas(c.width, c.height), d = p.getContext("2d");
      return d.fillStyle = s, l.render(d), d.createPattern(p, "no-repeat");
    }
    return s;
  }
  inheritStopContainer(t) {
    this.attributesToInherit.forEach((e) => {
      !this.getAttribute(e).hasValue() && t.getAttribute(e).hasValue() && this.getAttribute(e, !0).setValue(t.getAttribute(e).getValue());
    });
  }
  addParentOpacity(t, e) {
    if (t.hasValue()) {
      var r = new L(this.document, "color", e);
      return r.addOpacity(t).getColor();
    }
    return e;
  }
}
class hf extends Bh {
  constructor(t, e, r) {
    super(t, e, r), this.type = "linearGradient", this.attributesToInherit.push("x1", "y1", "x2", "y2");
  }
  getGradient(t, e) {
    var r = this.getGradientUnits() === "objectBoundingBox", n = r ? e.getBoundingBox(t) : null;
    if (r && !n) return null;
    !this.getAttribute("x1").hasValue() && !this.getAttribute("y1").hasValue() && !this.getAttribute("x2").hasValue() && !this.getAttribute("y2").hasValue() && (this.getAttribute("x1", !0).setValue(0), this.getAttribute("y1", !0).setValue(0), this.getAttribute("x2", !0).setValue(1), this.getAttribute("y2", !0).setValue(0));
    var a = r ? n.x + n.width * this.getAttribute("x1").getNumber() : this.getAttribute("x1").getPixels("x"), s = r ? n.y + n.height * this.getAttribute("y1").getNumber() : this.getAttribute("y1").getPixels("y"), o = r ? n.x + n.width * this.getAttribute("x2").getNumber() : this.getAttribute("x2").getPixels("x"), u = r ? n.y + n.height * this.getAttribute("y2").getNumber() : this.getAttribute("y2").getPixels("y");
    return a === o && s === u ? null : t.createLinearGradient(a, s, o, u);
  }
}
class cf extends Bh {
  constructor(t, e, r) {
    super(t, e, r), this.type = "radialGradient", this.attributesToInherit.push("cx", "cy", "r", "fx", "fy", "fr");
  }
  getGradient(t, e) {
    var r = this.getGradientUnits() === "objectBoundingBox", n = e.getBoundingBox(t);
    if (r && !n) return null;
    this.getAttribute("cx").hasValue() || this.getAttribute("cx", !0).setValue("50%"), this.getAttribute("cy").hasValue() || this.getAttribute("cy", !0).setValue("50%"), this.getAttribute("r").hasValue() || this.getAttribute("r", !0).setValue("50%");
    var a = r ? n.x + n.width * this.getAttribute("cx").getNumber() : this.getAttribute("cx").getPixels("x"), s = r ? n.y + n.height * this.getAttribute("cy").getNumber() : this.getAttribute("cy").getPixels("y"), o = a, u = s;
    this.getAttribute("fx").hasValue() && (o = r ? n.x + n.width * this.getAttribute("fx").getNumber() : this.getAttribute("fx").getPixels("x")), this.getAttribute("fy").hasValue() && (u = r ? n.y + n.height * this.getAttribute("fy").getNumber() : this.getAttribute("fy").getPixels("y"));
    var h = r ? (n.width + n.height) / 2 * this.getAttribute("r").getNumber() : this.getAttribute("r").getPixels(), c = this.getAttribute("fr").getPixels();
    return t.createRadialGradient(o, u, c, a, s, h);
  }
}
class lf extends $ {
  constructor(t, e, r) {
    super(t, e, r), this.type = "stop";
    var n = Math.max(0, Math.min(1, this.getAttribute("offset").getNumber())), a = this.getStyle("stop-opacity"), s = this.getStyle("stop-color", !0);
    s.getString() === "" && s.setValue("#000"), a.hasValue() && (s = s.addOpacity(a)), this.offset = n, this.color = s.getColor();
  }
}
class Gi extends $ {
  constructor(t, e, r) {
    super(t, e, r), this.type = "animate", this.duration = 0, this.initialValue = null, this.initialUnits = "", this.removed = !1, this.frozen = !1, t.screen.animations.push(this), this.begin = this.getAttribute("begin").getMilliseconds(), this.maxDuration = this.begin + this.getAttribute("dur").getMilliseconds(), this.from = this.getAttribute("from"), this.to = this.getAttribute("to"), this.values = new L(t, "values", null);
    var n = this.getAttribute("values");
    n.hasValue() && this.values.setValue(n.getString().split(";"));
  }
  getProperty() {
    var t = this.getAttribute("attributeType").getString(), e = this.getAttribute("attributeName").getString();
    return t === "CSS" ? this.parent.getStyle(e, !0) : this.parent.getAttribute(e, !0);
  }
  calcValue() {
    var {
      initialUnits: t
    } = this, {
      progress: e,
      from: r,
      to: n
    } = this.getProgress(), a = r.getNumber() + (n.getNumber() - r.getNumber()) * e;
    return t === "%" && (a *= 100), "".concat(a).concat(t);
  }
  update(t) {
    var {
      parent: e
    } = this, r = this.getProperty();
    if (this.initialValue || (this.initialValue = r.getString(), this.initialUnits = r.getUnits()), this.duration > this.maxDuration) {
      var n = this.getAttribute("fill").getString("remove");
      if (this.getAttribute("repeatCount").getString() === "indefinite" || this.getAttribute("repeatDur").getString() === "indefinite") this.duration = 0;
      else if (n === "freeze" && !this.frozen) this.frozen = !0, e.animationFrozen = !0, e.animationFrozenValue = r.getString();
      else if (n === "remove" && !this.removed) return this.removed = !0, r.setValue(e.animationFrozen ? e.animationFrozenValue : this.initialValue), !0;
      return !1;
    }
    this.duration += t;
    var a = !1;
    if (this.begin < this.duration) {
      var s = this.calcValue(), o = this.getAttribute("type");
      if (o.hasValue()) {
        var u = o.getString();
        s = "".concat(u, "(").concat(s, ")");
      }
      r.setValue(s), a = !0;
    }
    return a;
  }
  getProgress() {
    var {
      document: t,
      values: e
    } = this, r = {
      progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
    };
    if (e.hasValue()) {
      var n = r.progress * (e.getValue().length - 1), a = Math.floor(n), s = Math.ceil(n);
      r.from = new L(t, "from", parseFloat(e.getValue()[a])), r.to = new L(t, "to", parseFloat(e.getValue()[s])), r.progress = (n - a) / (s - a);
    } else r.from = this.from, r.to = this.to;
    return r;
  }
}
class ff extends Gi {
  constructor() {
    super(...arguments), this.type = "animateColor";
  }
  calcValue() {
    var {
      progress: t,
      from: e,
      to: r
    } = this.getProgress(), n = new Si(e.getColor()), a = new Si(r.getColor());
    if (n.ok && a.ok) {
      var s = n.r + (a.r - n.r) * t, o = n.g + (a.g - n.g) * t, u = n.b + (a.b - n.b) * t;
      return "rgb(".concat(Math.floor(s), ", ").concat(Math.floor(o), ", ").concat(Math.floor(u), ")");
    }
    return this.getAttribute("from").getColor();
  }
}
class gf extends Gi {
  constructor() {
    super(...arguments), this.type = "animateTransform";
  }
  calcValue() {
    var {
      progress: t,
      from: e,
      to: r
    } = this.getProgress(), n = pt(e.getString()), a = pt(r.getString()), s = n.map((o, u) => {
      var h = a[u];
      return o + (h - o) * t;
    }).join(" ");
    return s;
  }
}
class pf extends $ {
  constructor(t, e, r) {
    super(t, e, r), this.type = "font", this.glyphs = {}, this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber();
    var {
      definitions: n
    } = t, {
      children: a
    } = this;
    for (var s of a) switch (s.type) {
      case "font-face": {
        this.fontFace = s;
        var o = s.getStyle("font-family");
        o.hasValue() && (n[o.getString()] = this);
        break;
      }
      case "missing-glyph":
        this.missingGlyph = s;
        break;
      case "glyph": {
        var u = s;
        u.arabicForm ? (this.isRTL = !0, this.isArabic = !0, typeof this.glyphs[u.unicode] > "u" && (this.glyphs[u.unicode] = {}), this.glyphs[u.unicode][u.arabicForm] = u) : this.glyphs[u.unicode] = u;
        break;
      }
    }
  }
  render() {
  }
}
class df extends $ {
  constructor(t, e, r) {
    super(t, e, r), this.type = "font-face", this.ascent = this.getAttribute("ascent").getNumber(), this.descent = this.getAttribute("descent").getNumber(), this.unitsPerEm = this.getAttribute("units-per-em").getNumber();
  }
}
class vf extends W {
  constructor() {
    super(...arguments), this.type = "missing-glyph", this.horizAdvX = 0;
  }
}
class mf extends Yt {
  constructor() {
    super(...arguments), this.type = "tref";
  }
  getText() {
    var t = this.getHrefAttribute().getDefinition();
    if (t) {
      var e = t.children[0];
      if (e) return e.getText();
    }
    return "";
  }
}
class yf extends Yt {
  constructor(t, e, r) {
    super(t, e, r), this.type = "a";
    var {
      childNodes: n
    } = e, a = n[0], s = n.length > 0 && Array.from(n).every((o) => o.nodeType === 3);
    this.hasText = s, this.text = s ? this.getTextFromNode(a) : "";
  }
  getText() {
    return this.text;
  }
  renderChildren(t) {
    if (this.hasText) {
      super.renderChildren(t);
      var {
        document: e,
        x: r,
        y: n
      } = this, {
        mouse: a
      } = e.screen, s = new L(e, "fontSize", ot.parse(e.ctx.font).fontSize);
      a.isWorking() && a.checkBoundingBox(this, new Ct(r, n - s.getPixels("y"), r + this.measureText(t), n));
    } else if (this.children.length > 0) {
      var o = new Wi(this.document, null);
      o.children = this.children, o.parent = this, o.render(t);
    }
  }
  onClick() {
    var {
      window: t
    } = this.document;
    t && t.open(this.getHrefAttribute().getString());
  }
  onMouseMove() {
    var t = this.document.ctx;
    t.canvas.style.cursor = "pointer";
  }
}
function Gu(i, t) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function Ae(i) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gu(Object(e), !0).forEach(function(r) {
      Yi(i, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : Gu(Object(e)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return i;
}
class xf extends Yt {
  constructor(t, e, r) {
    super(t, e, r), this.type = "textPath", this.textWidth = 0, this.textHeight = 0, this.pathLength = -1, this.glyphInfo = null, this.letterSpacingCache = [], this.measuresCache = /* @__PURE__ */ new Map([["", 0]]);
    var n = this.getHrefAttribute().getDefinition();
    this.text = this.getTextFromNode(), this.dataArray = this.parsePathData(n);
  }
  getText() {
    return this.text;
  }
  path(t) {
    var {
      dataArray: e
    } = this;
    t && t.beginPath(), e.forEach((r) => {
      var {
        type: n,
        points: a
      } = r;
      switch (n) {
        case z.LINE_TO:
          t && t.lineTo(a[0], a[1]);
          break;
        case z.MOVE_TO:
          t && t.moveTo(a[0], a[1]);
          break;
        case z.CURVE_TO:
          t && t.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
          break;
        case z.QUAD_TO:
          t && t.quadraticCurveTo(a[0], a[1], a[2], a[3]);
          break;
        case z.ARC: {
          var [s, o, u, h, c, f, g, l] = a, p = u > h ? u : h, d = u > h ? 1 : u / h, v = u > h ? h / u : 1;
          t && (t.translate(s, o), t.rotate(g), t.scale(d, v), t.arc(0, 0, p, c, c + f, !!(1 - l)), t.scale(1 / d, 1 / v), t.rotate(-g), t.translate(-s, -o));
          break;
        }
        case z.CLOSE_PATH:
          t && t.closePath();
          break;
      }
    });
  }
  renderChildren(t) {
    this.setTextData(t), t.save();
    var e = this.parent.getStyle("text-decoration").getString(), r = this.getFontSize(), {
      glyphInfo: n
    } = this, a = t.fillStyle;
    e === "underline" && t.beginPath(), n.forEach((s, o) => {
      var {
        p0: u,
        p1: h,
        rotation: c,
        text: f
      } = s;
      t.save(), t.translate(u.x, u.y), t.rotate(c), t.fillStyle && t.fillText(f, 0, 0), t.strokeStyle && t.strokeText(f, 0, 0), t.restore(), e === "underline" && (o === 0 && t.moveTo(u.x, u.y + r / 8), t.lineTo(h.x, h.y + r / 5));
    }), e === "underline" && (t.lineWidth = r / 20, t.strokeStyle = a, t.stroke(), t.closePath()), t.restore();
  }
  getLetterSpacingAt() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    return this.letterSpacingCache[t] || 0;
  }
  findSegmentToFitChar(t, e, r, n, a, s, o, u, h) {
    var c = s, f = this.measureText(t, u);
    u === " " && e === "justify" && r < n && (f += (n - r) / a), h > -1 && (c += this.getLetterSpacingAt(h));
    var g = this.textHeight / 20, l = this.getEquidistantPointOnPath(c, g, 0), p = this.getEquidistantPointOnPath(c + f, g, 0), d = {
      p0: l,
      p1: p
    }, v = l && p ? Math.atan2(p.y - l.y, p.x - l.x) : 0;
    if (o) {
      var y = Math.cos(Math.PI / 2 + v) * o, m = Math.cos(-v) * o;
      d.p0 = Ae(Ae({}, l), {}, {
        x: l.x + y,
        y: l.y + m
      }), d.p1 = Ae(Ae({}, p), {}, {
        x: p.x + y,
        y: p.y + m
      });
    }
    return c += f, {
      offset: c,
      segment: d,
      rotation: v
    };
  }
  measureText(t, e) {
    var {
      measuresCache: r
    } = this, n = e || this.getText();
    if (r.has(n)) return r.get(n);
    var a = this.measureTargetText(t, n);
    return r.set(n, a), a;
  }
  // This method supposes what all custom fonts already loaded.
  // If some font will be loaded after this method call, <textPath> will not be rendered correctly.
  // You need to call this method manually to update glyphs cache.
  setTextData(t) {
    if (!this.glyphInfo) {
      var e = this.getText(), r = e.split(""), n = e.split(" ").length - 1, a = this.parent.getAttribute("dx").split().map((b) => b.getPixels("x")), s = this.parent.getAttribute("dy").getPixels("y"), o = this.parent.getStyle("text-anchor").getString("start"), u = this.getStyle("letter-spacing"), h = this.parent.getStyle("letter-spacing"), c = 0;
      !u.hasValue() || u.getValue() === "inherit" ? c = h.getPixels() : u.hasValue() && u.getValue() !== "initial" && u.getValue() !== "unset" && (c = u.getPixels());
      var f = [], g = e.length;
      this.letterSpacingCache = f;
      for (var l = 0; l < g; l++) f.push(typeof a[l] < "u" ? a[l] : c);
      var p = f.reduce((b, O, S) => S === 0 ? 0 : b + O || 0, 0), d = this.measureText(t), v = Math.max(d + p, 0);
      this.textWidth = d, this.textHeight = this.getFontSize(), this.glyphInfo = [];
      var y = this.getPathLength(), m = this.getStyle("startOffset").getNumber(0) * y, x = 0;
      (o === "middle" || o === "center") && (x = -v / 2), (o === "end" || o === "right") && (x = -v), x += m, r.forEach((b, O) => {
        var {
          offset: S,
          segment: T,
          rotation: N
        } = this.findSegmentToFitChar(t, o, v, y, n, x, s, b, O);
        x = S, !(!T.p0 || !T.p1) && this.glyphInfo.push({
          // transposeX: midpoint.x,
          // transposeY: midpoint.y,
          text: r[O],
          p0: T.p0,
          p1: T.p1,
          rotation: N
        });
      });
    }
  }
  parsePathData(t) {
    if (this.pathLength = -1, !t) return [];
    var e = [], {
      pathParser: r
    } = t;
    for (r.reset(); !r.isEnd(); ) {
      var {
        current: n
      } = r, a = n ? n.x : 0, s = n ? n.y : 0, o = r.next(), u = o.type, h = [];
      switch (o.type) {
        case z.MOVE_TO:
          this.pathM(r, h);
          break;
        case z.LINE_TO:
          u = this.pathL(r, h);
          break;
        case z.HORIZ_LINE_TO:
          u = this.pathH(r, h);
          break;
        case z.VERT_LINE_TO:
          u = this.pathV(r, h);
          break;
        case z.CURVE_TO:
          this.pathC(r, h);
          break;
        case z.SMOOTH_CURVE_TO:
          u = this.pathS(r, h);
          break;
        case z.QUAD_TO:
          this.pathQ(r, h);
          break;
        case z.SMOOTH_QUAD_TO:
          u = this.pathT(r, h);
          break;
        case z.ARC:
          h = this.pathA(r);
          break;
        case z.CLOSE_PATH:
          W.pathZ(r);
          break;
      }
      o.type !== z.CLOSE_PATH ? e.push({
        type: u,
        points: h,
        start: {
          x: a,
          y: s
        },
        pathLength: this.calcLength(a, s, u, h)
      }) : e.push({
        type: z.CLOSE_PATH,
        points: [],
        pathLength: 0
      });
    }
    return e;
  }
  pathM(t, e) {
    var {
      x: r,
      y: n
    } = W.pathM(t).point;
    e.push(r, n);
  }
  pathL(t, e) {
    var {
      x: r,
      y: n
    } = W.pathL(t).point;
    return e.push(r, n), z.LINE_TO;
  }
  pathH(t, e) {
    var {
      x: r,
      y: n
    } = W.pathH(t).point;
    return e.push(r, n), z.LINE_TO;
  }
  pathV(t, e) {
    var {
      x: r,
      y: n
    } = W.pathV(t).point;
    return e.push(r, n), z.LINE_TO;
  }
  pathC(t, e) {
    var {
      point: r,
      controlPoint: n,
      currentPoint: a
    } = W.pathC(t);
    e.push(r.x, r.y, n.x, n.y, a.x, a.y);
  }
  pathS(t, e) {
    var {
      point: r,
      controlPoint: n,
      currentPoint: a
    } = W.pathS(t);
    return e.push(r.x, r.y, n.x, n.y, a.x, a.y), z.CURVE_TO;
  }
  pathQ(t, e) {
    var {
      controlPoint: r,
      currentPoint: n
    } = W.pathQ(t);
    e.push(r.x, r.y, n.x, n.y);
  }
  pathT(t, e) {
    var {
      controlPoint: r,
      currentPoint: n
    } = W.pathT(t);
    return e.push(r.x, r.y, n.x, n.y), z.QUAD_TO;
  }
  pathA(t) {
    var {
      rX: e,
      rY: r,
      sweepFlag: n,
      xAxisRotation: a,
      centp: s,
      a1: o,
      ad: u
    } = W.pathA(t);
    return n === 0 && u > 0 && (u -= 2 * Math.PI), n === 1 && u < 0 && (u += 2 * Math.PI), [s.x, s.y, e, r, o, u, a, n];
  }
  calcLength(t, e, r, n) {
    var a = 0, s = null, o = null, u = 0;
    switch (r) {
      case z.LINE_TO:
        return this.getLineLength(t, e, n[0], n[1]);
      case z.CURVE_TO:
        for (a = 0, s = this.getPointOnCubicBezier(0, t, e, n[0], n[1], n[2], n[3], n[4], n[5]), u = 0.01; u <= 1; u += 0.01) o = this.getPointOnCubicBezier(u, t, e, n[0], n[1], n[2], n[3], n[4], n[5]), a += this.getLineLength(s.x, s.y, o.x, o.y), s = o;
        return a;
      case z.QUAD_TO:
        for (a = 0, s = this.getPointOnQuadraticBezier(0, t, e, n[0], n[1], n[2], n[3]), u = 0.01; u <= 1; u += 0.01) o = this.getPointOnQuadraticBezier(u, t, e, n[0], n[1], n[2], n[3]), a += this.getLineLength(s.x, s.y, o.x, o.y), s = o;
        return a;
      case z.ARC: {
        a = 0;
        var h = n[4], c = n[5], f = n[4] + c, g = Math.PI / 180;
        if (Math.abs(h - f) < g && (g = Math.abs(h - f)), s = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], h, 0), c < 0) for (u = h - g; u > f; u -= g) o = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], u, 0), a += this.getLineLength(s.x, s.y, o.x, o.y), s = o;
        else for (u = h + g; u < f; u += g) o = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], u, 0), a += this.getLineLength(s.x, s.y, o.x, o.y), s = o;
        return o = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], f, 0), a += this.getLineLength(s.x, s.y, o.x, o.y), a;
      }
    }
    return 0;
  }
  getPointOnLine(t, e, r, n, a) {
    var s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : e, o = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : r, u = (a - r) / (n - e + ne), h = Math.sqrt(t * t / (1 + u * u));
    n < e && (h *= -1);
    var c = u * h, f = null;
    if (n === e) f = {
      x: s,
      y: o + c
    };
    else if ((o - r) / (s - e + ne) === u) f = {
      x: s + h,
      y: o + c
    };
    else {
      var g = 0, l = 0, p = this.getLineLength(e, r, n, a);
      if (p < ne) return null;
      var d = (s - e) * (n - e) + (o - r) * (a - r);
      d /= p * p, g = e + d * (n - e), l = r + d * (a - r);
      var v = this.getLineLength(s, o, g, l), y = Math.sqrt(t * t - v * v);
      h = Math.sqrt(y * y / (1 + u * u)), n < e && (h *= -1), c = u * h, f = {
        x: g + h,
        y: l + c
      };
    }
    return f;
  }
  getPointOnPath(t) {
    var e = this.getPathLength(), r = 0, n = null;
    if (t < -5e-5 || t - 5e-5 > e) return null;
    var {
      dataArray: a
    } = this;
    for (var s of a) {
      if (s && (s.pathLength < 5e-5 || r + s.pathLength + 5e-5 < t)) {
        r += s.pathLength;
        continue;
      }
      var o = t - r, u = 0;
      switch (s.type) {
        case z.LINE_TO:
          n = this.getPointOnLine(o, s.start.x, s.start.y, s.points[0], s.points[1], s.start.x, s.start.y);
          break;
        case z.ARC: {
          var h = s.points[4], c = s.points[5], f = s.points[4] + c;
          if (u = h + o / s.pathLength * c, c < 0 && u < f || c >= 0 && u > f) break;
          n = this.getPointOnEllipticalArc(s.points[0], s.points[1], s.points[2], s.points[3], u, s.points[6]);
          break;
        }
        case z.CURVE_TO:
          u = o / s.pathLength, u > 1 && (u = 1), n = this.getPointOnCubicBezier(u, s.start.x, s.start.y, s.points[0], s.points[1], s.points[2], s.points[3], s.points[4], s.points[5]);
          break;
        case z.QUAD_TO:
          u = o / s.pathLength, u > 1 && (u = 1), n = this.getPointOnQuadraticBezier(u, s.start.x, s.start.y, s.points[0], s.points[1], s.points[2], s.points[3]);
          break;
      }
      if (n) return n;
      break;
    }
    return null;
  }
  getLineLength(t, e, r, n) {
    return Math.sqrt((r - t) * (r - t) + (n - e) * (n - e));
  }
  getPathLength() {
    return this.pathLength === -1 && (this.pathLength = this.dataArray.reduce((t, e) => e.pathLength > 0 ? t + e.pathLength : t, 0)), this.pathLength;
  }
  getPointOnCubicBezier(t, e, r, n, a, s, o, u, h) {
    var c = u * ju(t) + s * zu(t) + n * Uu(t) + e * Xu(t), f = h * ju(t) + o * zu(t) + a * Uu(t) + r * Xu(t);
    return {
      x: c,
      y: f
    };
  }
  getPointOnQuadraticBezier(t, e, r, n, a, s, o) {
    var u = s * Hu(t) + n * Yu(t) + e * Wu(t), h = o * Hu(t) + a * Yu(t) + r * Wu(t);
    return {
      x: u,
      y: h
    };
  }
  getPointOnEllipticalArc(t, e, r, n, a, s) {
    var o = Math.cos(s), u = Math.sin(s), h = {
      x: r * Math.cos(a),
      y: n * Math.sin(a)
    };
    return {
      x: t + (h.x * o - h.y * u),
      y: e + (h.x * u + h.y * o)
    };
  }
  // TODO need some optimisations. possibly build cache only for curved segments?
  buildEquidistantCache(t, e) {
    var r = this.getPathLength(), n = e || 0.25, a = t || r / 100;
    if (!this.equidistantCache || this.equidistantCache.step !== a || this.equidistantCache.precision !== n) {
      this.equidistantCache = {
        step: a,
        precision: n,
        points: []
      };
      for (var s = 0, o = 0; o <= r; o += n) {
        var u = this.getPointOnPath(o), h = this.getPointOnPath(o + n);
        !u || !h || (s += this.getLineLength(u.x, u.y, h.x, h.y), s >= a && (this.equidistantCache.points.push({
          x: u.x,
          y: u.y,
          distance: o
        }), s -= a));
      }
    }
  }
  getEquidistantPointOnPath(t, e, r) {
    if (this.buildEquidistantCache(e, r), t < 0 || t - this.getPathLength() > 5e-5) return null;
    var n = Math.round(t / this.getPathLength() * (this.equidistantCache.points.length - 1));
    return this.equidistantCache.points[n] || null;
  }
}
var bf = /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i;
class wf extends ee {
  constructor(t, e, r) {
    super(t, e, r), this.type = "image", this.loaded = !1;
    var n = this.getHrefAttribute().getString();
    if (n) {
      var a = n.endsWith(".svg") || /^\s*data:image\/svg\+xml/i.test(n);
      t.images.push(this), a ? this.loadSvg(n) : this.loadImage(n), this.isSvg = a;
    }
  }
  loadImage(t) {
    var e = this;
    return Ft(function* () {
      try {
        var r = yield e.document.createImage(t);
        e.image = r;
      } catch (n) {
        console.error('Error while loading image "'.concat(t, '":'), n);
      }
      e.loaded = !0;
    })();
  }
  loadSvg(t) {
    var e = this;
    return Ft(function* () {
      var r = bf.exec(t);
      if (r) {
        var n = r[5];
        r[4] === "base64" ? e.image = atob(n) : e.image = decodeURIComponent(n);
      } else try {
        var a = yield e.document.fetch(t), s = yield a.text();
        e.image = s;
      } catch (o) {
        console.error('Error while loading image "'.concat(t, '":'), o);
      }
      e.loaded = !0;
    })();
  }
  renderChildren(t) {
    var {
      document: e,
      image: r,
      loaded: n
    } = this, a = this.getAttribute("x").getPixels("x"), s = this.getAttribute("y").getPixels("y"), o = this.getStyle("width").getPixels("x"), u = this.getStyle("height").getPixels("y");
    if (!(!n || !r || !o || !u)) {
      if (t.save(), t.translate(a, s), this.isSvg) {
        var h = e.canvg.forkString(t, this.image, {
          ignoreMouse: !0,
          ignoreAnimation: !0,
          ignoreDimensions: !0,
          ignoreClear: !0,
          offsetX: 0,
          offsetY: 0,
          scaleWidth: o,
          scaleHeight: u
        });
        h.document.documentElement.parent = this, h.render();
      } else {
        var c = this.image;
        e.setViewBox({
          ctx: t,
          aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
          width: o,
          desiredWidth: c.width,
          height: u,
          desiredHeight: c.height
        }), this.loaded && (typeof c.complete > "u" || c.complete) && t.drawImage(c, 0, 0);
      }
      t.restore();
    }
  }
  getBoundingBox() {
    var t = this.getAttribute("x").getPixels("x"), e = this.getAttribute("y").getPixels("y"), r = this.getStyle("width").getPixels("x"), n = this.getStyle("height").getPixels("y");
    return new Ct(t, e, t + r, e + n);
  }
}
class Sf extends ee {
  constructor() {
    super(...arguments), this.type = "symbol";
  }
  render(t) {
  }
}
class Tf {
  constructor(t) {
    this.document = t, this.loaded = !1, t.fonts.push(this);
  }
  load(t, e) {
    var r = this;
    return Ft(function* () {
      try {
        var {
          document: n
        } = r, a = yield n.canvg.parser.load(e), s = a.getElementsByTagName("font");
        Array.from(s).forEach((o) => {
          var u = n.createElement(o);
          n.definitions[t] = u;
        });
      } catch (o) {
        console.error('Error while loading font "'.concat(e, '":'), o);
      }
      r.loaded = !0;
    })();
  }
}
class jh extends $ {
  constructor(t, e, r) {
    super(t, e, r), this.type = "style";
    var n = se(
      Array.from(e.childNodes).map((s) => s.textContent).join("").replace(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, "").replace(/@import.*;/g, "")
      // remove imports
    ), a = n.split("}");
    a.forEach((s) => {
      var o = s.trim();
      if (o) {
        var u = o.split("{"), h = u[0].split(","), c = u[1].split(";");
        h.forEach((f) => {
          var g = f.trim();
          if (g) {
            var l = t.styles[g] || {};
            if (c.forEach((v) => {
              var y = v.indexOf(":"), m = v.substr(0, y).trim(), x = v.substr(y + 1, v.length - y).trim();
              m && x && (l[m] = new L(t, m, x));
            }), t.styles[g] = l, t.stylesSpecificity[g] = Dl(g), g === "@font-face") {
              var p = l["font-family"].getString().replace(/"|'/g, ""), d = l.src.getString().split(",");
              d.forEach((v) => {
                if (v.indexOf('format("svg")') > 0) {
                  var y = Rh(v);
                  y && new Tf(t).load(p, y);
                }
              });
            }
          }
        });
      }
    });
  }
}
jh.parseExternalUrl = Rh;
class Of extends ee {
  constructor() {
    super(...arguments), this.type = "use";
  }
  setContext(t) {
    super.setContext(t);
    var e = this.getAttribute("x"), r = this.getAttribute("y");
    e.hasValue() && t.translate(e.getPixels("x"), 0), r.hasValue() && t.translate(0, r.getPixels("y"));
  }
  path(t) {
    var {
      element: e
    } = this;
    e && e.path(t);
  }
  renderChildren(t) {
    var {
      document: e,
      element: r
    } = this;
    if (r) {
      var n = r;
      if (r.type === "symbol" && (n = new xe(e, null), n.attributes.viewBox = new L(e, "viewBox", r.getAttribute("viewBox").getString()), n.attributes.preserveAspectRatio = new L(e, "preserveAspectRatio", r.getAttribute("preserveAspectRatio").getString()), n.attributes.overflow = new L(e, "overflow", r.getAttribute("overflow").getString()), n.children = r.children, r.styles.opacity = new L(e, "opacity", this.calculateOpacity())), n.type === "svg") {
        var a = this.getStyle("width", !1, !0), s = this.getStyle("height", !1, !0);
        a.hasValue() && (n.attributes.width = new L(e, "width", a.getString())), s.hasValue() && (n.attributes.height = new L(e, "height", s.getString()));
      }
      var o = n.parent;
      n.parent = this, n.render(t), n.parent = o;
    }
  }
  getBoundingBox(t) {
    var {
      element: e
    } = this;
    return e ? e.getBoundingBox(t) : null;
  }
  elementTransform() {
    var {
      document: t,
      element: e
    } = this;
    return Qt.fromElement(t, e);
  }
  get element() {
    return this.cachedElement || (this.cachedElement = this.getHrefAttribute().getDefinition()), this.cachedElement;
  }
}
function Ee(i, t, e, r, n, a) {
  return i[e * r * 4 + t * 4 + a];
}
function Pe(i, t, e, r, n, a, s) {
  i[e * r * 4 + t * 4 + a] = s;
}
function nt(i, t, e) {
  var r = i[t];
  return r * e;
}
function Dt(i, t, e, r) {
  return t + Math.cos(i) * e + Math.sin(i) * r;
}
class zh extends $ {
  constructor(t, e, r) {
    super(t, e, r), this.type = "feColorMatrix";
    var n = pt(this.getAttribute("values").getString());
    switch (this.getAttribute("type").getString("matrix")) {
      case "saturate": {
        var a = n[0];
        n = [0.213 + 0.787 * a, 0.715 - 0.715 * a, 0.072 - 0.072 * a, 0, 0, 0.213 - 0.213 * a, 0.715 + 0.285 * a, 0.072 - 0.072 * a, 0, 0, 0.213 - 0.213 * a, 0.715 - 0.715 * a, 0.072 + 0.928 * a, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
        break;
      }
      case "hueRotate": {
        var s = n[0] * Math.PI / 180;
        n = [Dt(s, 0.213, 0.787, -0.213), Dt(s, 0.715, -0.715, -0.715), Dt(s, 0.072, -0.072, 0.928), 0, 0, Dt(s, 0.213, -0.213, 0.143), Dt(s, 0.715, 0.285, 0.14), Dt(s, 0.072, -0.072, -0.283), 0, 0, Dt(s, 0.213, -0.213, -0.787), Dt(s, 0.715, -0.715, 0.715), Dt(s, 0.072, 0.928, 0.072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
        break;
      }
      case "luminanceToAlpha":
        n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154, 0.0721, 0, 0, 0, 0, 0, 0, 1];
        break;
    }
    this.matrix = n, this.includeOpacity = this.getAttribute("includeOpacity").hasValue();
  }
  apply(t, e, r, n, a) {
    for (var {
      includeOpacity: s,
      matrix: o
    } = this, u = t.getImageData(0, 0, n, a), h = 0; h < a; h++) for (var c = 0; c < n; c++) {
      var f = Ee(u.data, c, h, n, a, 0), g = Ee(u.data, c, h, n, a, 1), l = Ee(u.data, c, h, n, a, 2), p = Ee(u.data, c, h, n, a, 3), d = nt(o, 0, f) + nt(o, 1, g) + nt(o, 2, l) + nt(o, 3, p) + nt(o, 4, 1), v = nt(o, 5, f) + nt(o, 6, g) + nt(o, 7, l) + nt(o, 8, p) + nt(o, 9, 1), y = nt(o, 10, f) + nt(o, 11, g) + nt(o, 12, l) + nt(o, 13, p) + nt(o, 14, 1), m = nt(o, 15, f) + nt(o, 16, g) + nt(o, 17, l) + nt(o, 18, p) + nt(o, 19, 1);
      s && (d = 0, v = 0, y = 0, m *= p / 255), Pe(u.data, c, h, n, a, 0, d), Pe(u.data, c, h, n, a, 1, v), Pe(u.data, c, h, n, a, 2, y), Pe(u.data, c, h, n, a, 3, m);
    }
    t.clearRect(0, 0, n, a), t.putImageData(u, 0, 0);
  }
}
class He extends $ {
  constructor() {
    super(...arguments), this.type = "mask";
  }
  apply(t, e) {
    var {
      document: r
    } = this, n = this.getAttribute("x").getPixels("x"), a = this.getAttribute("y").getPixels("y"), s = this.getStyle("width").getPixels("x"), o = this.getStyle("height").getPixels("y");
    if (!s && !o) {
      var u = new Ct();
      this.children.forEach((p) => {
        u.addBoundingBox(p.getBoundingBox(t));
      }), n = Math.floor(u.x1), a = Math.floor(u.y1), s = Math.floor(u.width), o = Math.floor(u.height);
    }
    var h = this.removeStyles(e, He.ignoreStyles), c = r.createCanvas(n + s, a + o), f = c.getContext("2d");
    r.screen.setDefaults(f), this.renderChildren(f), new zh(r, {
      nodeType: 1,
      childNodes: [],
      attributes: [{
        nodeName: "type",
        value: "luminanceToAlpha"
      }, {
        nodeName: "includeOpacity",
        value: "true"
      }]
    }).apply(f, 0, 0, n + s, a + o);
    var g = r.createCanvas(n + s, a + o), l = g.getContext("2d");
    r.screen.setDefaults(l), e.render(l), l.globalCompositeOperation = "destination-in", l.fillStyle = f.createPattern(c, "no-repeat"), l.fillRect(0, 0, n + s, a + o), t.fillStyle = l.createPattern(g, "no-repeat"), t.fillRect(0, 0, n + s, a + o), this.restoreStyles(e, h);
  }
  render(t) {
  }
}
He.ignoreStyles = ["mask", "transform", "clip-path"];
var $u = () => {
};
class Af extends $ {
  constructor() {
    super(...arguments), this.type = "clipPath";
  }
  apply(t) {
    var {
      document: e
    } = this, r = Reflect.getPrototypeOf(t), {
      beginPath: n,
      closePath: a
    } = t;
    r && (r.beginPath = $u, r.closePath = $u), Reflect.apply(n, t, []), this.children.forEach((s) => {
      if (!(typeof s.path > "u")) {
        var o = typeof s.elementTransform < "u" ? s.elementTransform() : null;
        o || (o = Qt.fromElement(e, s)), o && o.apply(t), s.path(t), r && (r.closePath = a), o && o.unapply(t);
      }
    }), Reflect.apply(a, t, []), t.clip(), r && (r.beginPath = n, r.closePath = a);
  }
  render(t) {
  }
}
class Ye extends $ {
  constructor() {
    super(...arguments), this.type = "filter";
  }
  apply(t, e) {
    var {
      document: r,
      children: n
    } = this, a = e.getBoundingBox(t);
    if (a) {
      var s = 0, o = 0;
      n.forEach((y) => {
        var m = y.extraFilterDistance || 0;
        s = Math.max(s, m), o = Math.max(o, m);
      });
      var u = Math.floor(a.width), h = Math.floor(a.height), c = u + 2 * s, f = h + 2 * o;
      if (!(c < 1 || f < 1)) {
        var g = Math.floor(a.x), l = Math.floor(a.y), p = this.removeStyles(e, Ye.ignoreStyles), d = r.createCanvas(c, f), v = d.getContext("2d");
        r.screen.setDefaults(v), v.translate(-g + s, -l + o), e.render(v), n.forEach((y) => {
          typeof y.apply == "function" && y.apply(v, 0, 0, c, f);
        }), t.drawImage(d, 0, 0, c, f, g - s, l - o, c, f), this.restoreStyles(e, p);
      }
    }
  }
  render(t) {
  }
}
Ye.ignoreStyles = ["filter", "transform", "clip-path"];
class Ef extends $ {
  constructor(t, e, r) {
    super(t, e, r), this.type = "feDropShadow", this.addStylesFromStyleDefinition();
  }
  apply(t, e, r, n, a) {
  }
}
class Pf extends $ {
  constructor() {
    super(...arguments), this.type = "feMorphology";
  }
  apply(t, e, r, n, a) {
  }
}
class Cf extends $ {
  constructor() {
    super(...arguments), this.type = "feComposite";
  }
  apply(t, e, r, n, a) {
  }
}
class Mf extends $ {
  constructor(t, e, r) {
    super(t, e, r), this.type = "feGaussianBlur", this.blurRadius = Math.floor(this.getAttribute("stdDeviation").getNumber()), this.extraFilterDistance = this.blurRadius;
  }
  apply(t, e, r, n, a) {
    var {
      document: s,
      blurRadius: o
    } = this, u = s.window ? s.window.document.body : null, h = t.canvas;
    h.id = s.getUniqueId(), u && (h.style.display = "none", u.appendChild(h)), wl(h, e, r, n, a, o), u && u.removeChild(h);
  }
}
class Nf extends $ {
  constructor() {
    super(...arguments), this.type = "title";
  }
}
class Rf extends $ {
  constructor() {
    super(...arguments), this.type = "desc";
  }
}
var Vf = {
  svg: xe,
  rect: Dh,
  circle: ef,
  ellipse: rf,
  line: nf,
  polyline: Fh,
  polygon: af,
  path: W,
  pattern: sf,
  marker: of,
  defs: uf,
  linearGradient: hf,
  radialGradient: cf,
  stop: lf,
  animate: Gi,
  animateColor: ff,
  animateTransform: gf,
  font: pf,
  "font-face": df,
  "missing-glyph": vf,
  glyph: Lh,
  text: Yt,
  tspan: Xe,
  tref: mf,
  a: yf,
  textPath: xf,
  image: wf,
  g: Wi,
  symbol: Sf,
  style: jh,
  use: Of,
  mask: He,
  clipPath: Af,
  filter: Ye,
  feDropShadow: Ef,
  feMorphology: Pf,
  feComposite: Cf,
  feColorMatrix: zh,
  feGaussianBlur: Mf,
  title: Nf,
  desc: Rf
};
function qu(i, t) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function kf(i) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qu(Object(e), !0).forEach(function(r) {
      Yi(i, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : qu(Object(e)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return i;
}
function _f(i, t) {
  var e = document.createElement("canvas");
  return e.width = i, e.height = t, e;
}
function If(i) {
  return Ai.apply(this, arguments);
}
function Ai() {
  return Ai = Ft(function* (i) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, e = document.createElement("img");
    return t && (e.crossOrigin = "Anonymous"), new Promise((r, n) => {
      e.onload = () => {
        r(e);
      }, e.onerror = (a, s, o, u, h) => {
        n(h);
      }, e.src = i;
    });
  }), Ai.apply(this, arguments);
}
class Ht {
  constructor(t) {
    var {
      rootEmSize: e = 12,
      emSize: r = 12,
      createCanvas: n = Ht.createCanvas,
      createImage: a = Ht.createImage,
      anonymousCrossOrigin: s
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.canvg = t, this.definitions = {}, this.styles = {}, this.stylesSpecificity = {}, this.images = [], this.fonts = [], this.emSizeStack = [], this.uniqueId = 0, this.screen = t.screen, this.rootEmSize = e, this.emSize = r, this.createCanvas = n, this.createImage = this.bindCreateImage(a, s), this.screen.wait(this.isImagesLoaded.bind(this)), this.screen.wait(this.isFontsLoaded.bind(this));
  }
  bindCreateImage(t, e) {
    return typeof e == "boolean" ? (r, n) => t(r, typeof n == "boolean" ? n : e) : t;
  }
  get window() {
    return this.screen.window;
  }
  get fetch() {
    return this.screen.fetch;
  }
  get ctx() {
    return this.screen.ctx;
  }
  get emSize() {
    var {
      emSizeStack: t
    } = this;
    return t[t.length - 1];
  }
  set emSize(t) {
    var {
      emSizeStack: e
    } = this;
    e.push(t);
  }
  popEmSize() {
    var {
      emSizeStack: t
    } = this;
    t.pop();
  }
  getUniqueId() {
    return "canvg".concat(++this.uniqueId);
  }
  isImagesLoaded() {
    return this.images.every((t) => t.loaded);
  }
  isFontsLoaded() {
    return this.fonts.every((t) => t.loaded);
  }
  createDocumentElement(t) {
    var e = this.createElement(t.documentElement);
    return e.root = !0, e.addStylesFromStyleDefinition(), this.documentElement = e, e;
  }
  createElement(t) {
    var e = t.nodeName.replace(/^[^:]+:/, ""), r = Ht.elementTypes[e];
    return typeof r < "u" ? new r(this, t) : new ql(this, t);
  }
  createTextNode(t) {
    return new tf(this, t);
  }
  setViewBox(t) {
    this.screen.setViewBox(kf({
      document: this
    }, t));
  }
}
Ht.createCanvas = _f;
Ht.createImage = If;
Ht.elementTypes = Vf;
function Qu(i, t) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function qt(i) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qu(Object(e), !0).forEach(function(r) {
      Yi(i, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : Qu(Object(e)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return i;
}
class le {
  /**
   * Main constructor.
   * @param ctx - Rendering context.
   * @param svg - SVG Document.
   * @param options - Rendering options.
   */
  constructor(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.parser = new xi(r), this.screen = new Ue(t, r), this.options = r;
    var n = new Ht(this, r), a = n.createDocumentElement(e);
    this.document = n, this.documentElement = a;
  }
  /**
   * Create Canvg instance from SVG source string or URL.
   * @param ctx - Rendering context.
   * @param svg - SVG source string or URL.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  static from(t, e) {
    var r = arguments;
    return Ft(function* () {
      var n = r.length > 2 && r[2] !== void 0 ? r[2] : {}, a = new xi(n), s = yield a.parse(e);
      return new le(t, s, n);
    })();
  }
  /**
   * Create Canvg instance from SVG source string.
   * @param ctx - Rendering context.
   * @param svg - SVG source string.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  static fromString(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = new xi(r), a = n.parseFromString(e);
    return new le(t, a, r);
  }
  /**
   * Create new Canvg instance with inherited options.
   * @param ctx - Rendering context.
   * @param svg - SVG source string or URL.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  fork(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return le.from(t, e, qt(qt({}, this.options), r));
  }
  /**
   * Create new Canvg instance with inherited options.
   * @param ctx - Rendering context.
   * @param svg - SVG source string.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  forkString(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return le.fromString(t, e, qt(qt({}, this.options), r));
  }
  /**
   * Document is ready promise.
   * @returns Ready promise.
   */
  ready() {
    return this.screen.ready();
  }
  /**
   * Document is ready value.
   * @returns Is ready or not.
   */
  isReady() {
    return this.screen.isReady();
  }
  /**
   * Render only first frame, ignoring animations and mouse.
   * @param options - Rendering options.
   */
  render() {
    var t = arguments, e = this;
    return Ft(function* () {
      var r = t.length > 0 && t[0] !== void 0 ? t[0] : {};
      e.start(qt({
        enableRedraw: !0,
        ignoreAnimation: !0,
        ignoreMouse: !0
      }, r)), yield e.ready(), e.stop();
    })();
  }
  /**
   * Start rendering.
   * @param options - Render options.
   */
  start() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, {
      documentElement: e,
      screen: r,
      options: n
    } = this;
    r.start(e, qt(qt({
      enableRedraw: !0
    }, n), t));
  }
  /**
   * Stop rendering.
   */
  stop() {
    this.screen.stop();
  }
  /**
   * Resize SVG to fit in given size.
   * @param width
   * @param height
   * @param preserveAspectRatio
   */
  resize(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    this.documentElement.resize(t, e, r);
  }
}
export {
  yf as AElement,
  ff as AnimateColorElement,
  Gi as AnimateElement,
  gf as AnimateTransformElement,
  Ct as BoundingBox,
  ju as CB1,
  zu as CB2,
  Uu as CB3,
  Xu as CB4,
  le as Canvg,
  ef as CircleElement,
  Af as ClipPathElement,
  uf as DefsElement,
  Rf as DescElement,
  Ht as Document,
  $ as Element,
  rf as EllipseElement,
  zh as FeColorMatrixElement,
  Cf as FeCompositeElement,
  Ef as FeDropShadowElement,
  Mf as FeGaussianBlurElement,
  Pf as FeMorphologyElement,
  Ye as FilterElement,
  ot as Font,
  pf as FontElement,
  df as FontFaceElement,
  Wi as GElement,
  Lh as GlyphElement,
  Bh as GradientElement,
  wf as ImageElement,
  nf as LineElement,
  hf as LinearGradientElement,
  of as MarkerElement,
  He as MaskElement,
  _h as Matrix,
  vf as MissingGlyphElement,
  Bl as Mouse,
  ne as PSEUDO_ZERO,
  xi as Parser,
  W as PathElement,
  z as PathParser,
  sf as PatternElement,
  K as Point,
  af as PolygonElement,
  Fh as PolylineElement,
  L as Property,
  Hu as QB1,
  Yu as QB2,
  Wu as QB3,
  cf as RadialGradientElement,
  Dh as RectElement,
  ee as RenderedElement,
  Xl as Rotate,
  xe as SVGElement,
  Tf as SVGFontLoader,
  Hl as Scale,
  Ue as Screen,
  Ih as Skew,
  Yl as SkewX,
  Wl as SkewY,
  lf as StopElement,
  jh as StyleElement,
  Sf as SymbolElement,
  mf as TRefElement,
  Xe as TSpanElement,
  Yt as TextElement,
  xf as TextPathElement,
  Nf as TitleElement,
  Qt as Transform,
  Ul as Translate,
  ql as UnknownElement,
  Of as UseElement,
  Fl as ViewPort,
  se as compressSpaces,
  le as default,
  Dl as getSelectorSpecificity,
  Cl as normalizeAttributeName,
  Ml as normalizeColor,
  Rh as parseExternalUrl,
  Df as presets,
  pt as toNumbers,
  Al as trimLeft,
  El as trimRight,
  Fu as vectorMagnitude,
  Bu as vectorsAngle,
  Oi as vectorsRatio
};
