import { w as Si } from "./index-DdkbNQVU.mjs";
var Ti = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function rh(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var qh = {}, Zi = {}, fe, Ki;
function $() {
  if (Ki) return fe;
  Ki = 1;
  var i = function(t) {
    return t && t.Math === Math && t;
  };
  return fe = // eslint-disable-next-line es/no-global-this -- safe
  i(typeof globalThis == "object" && globalThis) || i(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  i(typeof self == "object" && self) || i(typeof Ti == "object" && Ti) || i(typeof fe == "object" && fe) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")(), fe;
}
var Ze = {}, Ji, ta;
function K() {
  return ta || (ta = 1, Ji = function(i) {
    try {
      return !!i();
    } catch {
      return !0;
    }
  }), Ji;
}
var Ke, ea;
function Et() {
  if (ea) return Ke;
  ea = 1;
  var i = K();
  return Ke = !i(function() {
    return Object.defineProperty({}, 1, {
      get: function() {
        return 7;
      }
    })[1] !== 7;
  }), Ke;
}
var Je, ra;
function Me() {
  if (ra) return Je;
  ra = 1;
  var i = K();
  return Je = !i(function() {
    var t = (function() {
    }).bind();
    return typeof t != "function" || t.hasOwnProperty("prototype");
  }), Je;
}
var tr, na;
function at() {
  if (na) return tr;
  na = 1;
  var i = Me(), t = Function.prototype.call;
  return tr = i ? t.bind(t) : function() {
    return t.apply(t, arguments);
  }, tr;
}
var er = {}, ia;
function Gh() {
  if (ia) return er;
  ia = 1;
  var i = {}.propertyIsEnumerable, t = Object.getOwnPropertyDescriptor, e = t && !i.call({
    1: 2
  }, 1);
  return er.f = e ? function(r) {
    var n = t(this, r);
    return !!n && n.enumerable;
  } : i, er;
}
var aa, sa;
function Pi() {
  return sa || (sa = 1, aa = function(i, t) {
    return {
      enumerable: !(i & 1),
      configurable: !(i & 2),
      writable: !(i & 4),
      value: t
    };
  }), aa;
}
var rr, oa;
function J() {
  if (oa) return rr;
  oa = 1;
  var i = Me(), t = Function.prototype, e = t.call, r = i && t.bind.bind(e, e);
  return rr = i ? r : function(n) {
    return function() {
      return e.apply(n, arguments);
    };
  }, rr;
}
var nr, ua;
function Jt() {
  if (ua) return nr;
  ua = 1;
  var i = J(), t = i({}.toString), e = i("".slice);
  return nr = function(r) {
    return e(t(r), 8, -1);
  }, nr;
}
var ir, ha;
function nh() {
  if (ha) return ir;
  ha = 1;
  var i = J(), t = K(), e = Jt(), r = Object, n = i("".split);
  return ir = t(function() {
    return !r("z").propertyIsEnumerable(0);
  }) ? function(a) {
    return e(a) === "String" ? n(a, "") : r(a);
  } : r, ir;
}
var ca, la;
function Ne() {
  return la || (la = 1, ca = function(i) {
    return i == null;
  }), ca;
}
var ar, fa;
function Ct() {
  if (fa) return ar;
  fa = 1;
  var i = Ne(), t = TypeError;
  return ar = function(e) {
    if (i(e)) throw new t("Can't call method on " + e);
    return e;
  }, ar;
}
var sr, ga;
function de() {
  if (ga) return sr;
  ga = 1;
  var i = nh(), t = Ct();
  return sr = function(e) {
    return i(t(e));
  }, sr;
}
var or, pa;
function et() {
  if (pa) return or;
  pa = 1;
  var i = typeof document == "object" && document.all;
  return or = typeof i > "u" && i !== void 0 ? function(t) {
    return typeof t == "function" || t === i;
  } : function(t) {
    return typeof t == "function";
  }, or;
}
var ur, da;
function dt() {
  if (da) return ur;
  da = 1;
  var i = et();
  return ur = function(t) {
    return typeof t == "object" ? t !== null : i(t);
  }, ur;
}
var hr, va;
function te() {
  if (va) return hr;
  va = 1;
  var i = $(), t = et(), e = function(r) {
    return t(r) ? r : void 0;
  };
  return hr = function(r, n) {
    return arguments.length < 2 ? e(i[r]) : i[r] && i[r][n];
  }, hr;
}
var cr, ma;
function Ve() {
  if (ma) return cr;
  ma = 1;
  var i = J();
  return cr = i({}.isPrototypeOf), cr;
}
var lr, ya;
function ve() {
  if (ya) return lr;
  ya = 1;
  var i = $(), t = i.navigator, e = t && t.userAgent;
  return lr = e ? String(e) : "", lr;
}
var fr, xa;
function Mi() {
  if (xa) return fr;
  xa = 1;
  var i = $(), t = ve(), e = i.process, r = i.Deno, n = e && e.versions || r && r.version, a = n && n.v8, s, o;
  return a && (s = a.split("."), o = s[0] > 0 && s[0] < 4 ? 1 : +(s[0] + s[1])), !o && t && (s = t.match(/Edge\/(\d+)/), (!s || s[1] >= 74) && (s = t.match(/Chrome\/(\d+)/), s && (o = +s[1]))), fr = o, fr;
}
var gr, ba;
function ih() {
  if (ba) return gr;
  ba = 1;
  var i = Mi(), t = K(), e = $(), r = e.String;
  return gr = !!Object.getOwnPropertySymbols && !t(function() {
    var n = Symbol("symbol detection");
    return !r(n) || !(Object(n) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && i && i < 41;
  }), gr;
}
var pr, wa;
function ah() {
  if (wa) return pr;
  wa = 1;
  var i = ih();
  return pr = i && !Symbol.sham && typeof Symbol.iterator == "symbol", pr;
}
var dr, Sa;
function sh() {
  if (Sa) return dr;
  Sa = 1;
  var i = te(), t = et(), e = Ve(), r = ah(), n = Object;
  return dr = r ? function(a) {
    return typeof a == "symbol";
  } : function(a) {
    var s = i("Symbol");
    return t(s) && e(s.prototype, n(a));
  }, dr;
}
var vr, Ta;
function Ie() {
  if (Ta) return vr;
  Ta = 1;
  var i = String;
  return vr = function(t) {
    try {
      return i(t);
    } catch {
      return "Object";
    }
  }, vr;
}
var mr, Oa;
function zt() {
  if (Oa) return mr;
  Oa = 1;
  var i = et(), t = Ie(), e = TypeError;
  return mr = function(r) {
    if (i(r)) return r;
    throw new e(t(r) + " is not a function");
  }, mr;
}
var yr, Aa;
function ae() {
  if (Aa) return yr;
  Aa = 1;
  var i = zt(), t = Ne();
  return yr = function(e, r) {
    var n = e[r];
    return t(n) ? void 0 : i(n);
  }, yr;
}
var xr, Ea;
function Qh() {
  if (Ea) return xr;
  Ea = 1;
  var i = at(), t = et(), e = dt(), r = TypeError;
  return xr = function(n, a) {
    var s, o;
    if (a === "string" && t(s = n.toString) && !e(o = i(s, n)) || t(s = n.valueOf) && !e(o = i(s, n)) || a !== "string" && t(s = n.toString) && !e(o = i(s, n))) return o;
    throw new r("Can't convert object to primitive value");
  }, xr;
}
var br = {
  exports: {}
}, Ca, Pa;
function It() {
  return Pa || (Pa = 1, Ca = !1), Ca;
}
var wr, Ma;
function Ni() {
  if (Ma) return wr;
  Ma = 1;
  var i = $(), t = Object.defineProperty;
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
var Na;
function Vi() {
  if (Na) return br.exports;
  Na = 1;
  var i = It(), t = $(), e = Ni(), r = "__core-js_shared__", n = br.exports = t[r] || e(r, {});
  return (n.versions || (n.versions = [])).push({
    version: "3.45.1",
    mode: i ? "pure" : "global",
    copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.45.1/LICENSE",
    source: "https://github.com/zloirock/core-js"
  }), br.exports;
}
var Sr, Va;
function Ii() {
  if (Va) return Sr;
  Va = 1;
  var i = Vi();
  return Sr = function(t, e) {
    return i[t] || (i[t] = e || {});
  }, Sr;
}
var Tr, Ia;
function ke() {
  if (Ia) return Tr;
  Ia = 1;
  var i = Ct(), t = Object;
  return Tr = function(e) {
    return t(i(e));
  }, Tr;
}
var Or, ka;
function Pt() {
  if (ka) return Or;
  ka = 1;
  var i = J(), t = ke(), e = i({}.hasOwnProperty);
  return Or = Object.hasOwn || function(r, n) {
    return e(t(r), n);
  }, Or;
}
var Ar, Ra;
function oh() {
  if (Ra) return Ar;
  Ra = 1;
  var i = J(), t = 0, e = Math.random(), r = i(1.1.toString);
  return Ar = function(n) {
    return "Symbol(" + (n === void 0 ? "" : n) + ")_" + r(++t + e, 36);
  }, Ar;
}
var Er, _a;
function it() {
  if (_a) return Er;
  _a = 1;
  var i = $(), t = Ii(), e = Pt(), r = oh(), n = ih(), a = ah(), s = i.Symbol, o = t("wks"), u = a ? s.for || s : s && s.withoutSetter || r;
  return Er = function(h) {
    return e(o, h) || (o[h] = n && e(s, h) ? s[h] : u("Symbol." + h)), o[h];
  }, Er;
}
var Cr, La;
function $h() {
  if (La) return Cr;
  La = 1;
  var i = at(), t = dt(), e = sh(), r = ae(), n = Qh(), a = it(), s = TypeError, o = a("toPrimitive");
  return Cr = function(u, h) {
    if (!t(u) || e(u)) return u;
    var c = r(u, o), f;
    if (c) {
      if (h === void 0 && (h = "default"), f = i(c, u, h), !t(f) || e(f)) return f;
      throw new s("Can't convert object to primitive value");
    }
    return h === void 0 && (h = "number"), n(u, h);
  }, Cr;
}
var Pr, Da;
function uh() {
  if (Da) return Pr;
  Da = 1;
  var i = $h(), t = sh();
  return Pr = function(e) {
    var r = i(e, "string");
    return t(r) ? r : r + "";
  }, Pr;
}
var Mr, ja;
function Re() {
  if (ja) return Mr;
  ja = 1;
  var i = $(), t = dt(), e = i.document, r = t(e) && t(e.createElement);
  return Mr = function(n) {
    return r ? e.createElement(n) : {};
  }, Mr;
}
var Nr, Fa;
function hh() {
  if (Fa) return Nr;
  Fa = 1;
  var i = Et(), t = K(), e = Re();
  return Nr = !i && !t(function() {
    return Object.defineProperty(e("div"), "a", {
      get: function() {
        return 7;
      }
    }).a !== 7;
  }), Nr;
}
var Ba;
function _e() {
  if (Ba) return Ze;
  Ba = 1;
  var i = Et(), t = at(), e = Gh(), r = Pi(), n = de(), a = uh(), s = Pt(), o = hh(), u = Object.getOwnPropertyDescriptor;
  return Ze.f = i ? u : function(h, c) {
    if (h = n(h), c = a(c), o) try {
      return u(h, c);
    } catch {
    }
    if (s(h, c)) return r(!t(e.f, h, c), h[c]);
  }, Ze;
}
var Vr = {}, Ir, za;
function ch() {
  if (za) return Ir;
  za = 1;
  var i = Et(), t = K();
  return Ir = i && t(function() {
    return Object.defineProperty(function() {
    }, "prototype", {
      value: 42,
      writable: !1
    }).prototype !== 42;
  }), Ir;
}
var kr, Ua;
function ut() {
  if (Ua) return kr;
  Ua = 1;
  var i = dt(), t = String, e = TypeError;
  return kr = function(r) {
    if (i(r)) return r;
    throw new e(t(r) + " is not an object");
  }, kr;
}
var Ha;
function Gt() {
  if (Ha) return Vr;
  Ha = 1;
  var i = Et(), t = hh(), e = ch(), r = ut(), n = uh(), a = TypeError, s = Object.defineProperty, o = Object.getOwnPropertyDescriptor, u = "enumerable", h = "configurable", c = "writable";
  return Vr.f = i ? e ? function(f, g, l) {
    if (r(f), g = n(g), r(l), typeof f == "function" && g === "prototype" && "value" in l && c in l && !l[c]) {
      var d = o(f, g);
      d && d[c] && (f[g] = l.value, l = {
        configurable: h in l ? l[h] : d[h],
        enumerable: u in l ? l[u] : d[u],
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
  }, Vr;
}
var Rr, Xa;
function me() {
  if (Xa) return Rr;
  Xa = 1;
  var i = Et(), t = Gt(), e = Pi();
  return Rr = i ? function(r, n, a) {
    return t.f(r, n, e(1, a));
  } : function(r, n, a) {
    return r[n] = a, r;
  }, Rr;
}
var _r = {
  exports: {}
}, Lr, Ya;
function Le() {
  if (Ya) return Lr;
  Ya = 1;
  var i = Et(), t = Pt(), e = Function.prototype, r = i && Object.getOwnPropertyDescriptor, n = t(e, "name"), a = n && (function() {
  }).name === "something", s = n && (!i || i && r(e, "name").configurable);
  return Lr = {
    EXISTS: n,
    PROPER: a,
    CONFIGURABLE: s
  }, Lr;
}
var Dr, Wa;
function ki() {
  if (Wa) return Dr;
  Wa = 1;
  var i = J(), t = et(), e = Vi(), r = i(Function.toString);
  return t(e.inspectSource) || (e.inspectSource = function(n) {
    return r(n);
  }), Dr = e.inspectSource, Dr;
}
var jr, qa;
function Zh() {
  if (qa) return jr;
  qa = 1;
  var i = $(), t = et(), e = i.WeakMap;
  return jr = t(e) && /native code/.test(String(e)), jr;
}
var Fr, Ga;
function Ri() {
  if (Ga) return Fr;
  Ga = 1;
  var i = Ii(), t = oh(), e = i("keys");
  return Fr = function(r) {
    return e[r] || (e[r] = t(r));
  }, Fr;
}
var Qa, $a;
function _i() {
  return $a || ($a = 1, Qa = {}), Qa;
}
var Br, Za;
function De() {
  if (Za) return Br;
  Za = 1;
  var i = Zh(), t = $(), e = dt(), r = me(), n = Pt(), a = Vi(), s = Ri(), o = _i(), u = "Object already initialized", h = t.TypeError, c = t.WeakMap, f, g, l, d = function(m) {
    return l(m) ? g(m) : f(m, {});
  }, p = function(m) {
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
  return Br = {
    set: f,
    get: g,
    has: l,
    enforce: d,
    getterFor: p
  }, Br;
}
var Ka;
function lh() {
  if (Ka) return _r.exports;
  Ka = 1;
  var i = J(), t = K(), e = et(), r = Pt(), n = Et(), a = Le().CONFIGURABLE, s = ki(), o = De(), u = o.enforce, h = o.get, c = String, f = Object.defineProperty, g = i("".slice), l = i("".replace), d = i([].join), p = n && !t(function() {
    return f(function() {
    }, "length", {
      value: 8
    }).length !== 8;
  }), v = String(String).split("String"), y = _r.exports = function(m, x, b) {
    g(c(x), 0, 7) === "Symbol(" && (x = "[" + l(c(x), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), b && b.getter && (x = "get " + x), b && b.setter && (x = "set " + x), (!r(m, "name") || a && m.name !== x) && (n ? f(m, "name", {
      value: x,
      configurable: !0
    }) : m.name = x), p && b && r(b, "arity") && m.length !== b.arity && f(m, "length", {
      value: b.arity
    });
    try {
      b && r(b, "constructor") && b.constructor ? n && f(m, "prototype", {
        writable: !1
      }) : m.prototype && (m.prototype = void 0);
    } catch {
    }
    var O = u(m);
    return r(O, "source") || (O.source = d(v, typeof x == "string" ? x : "")), m;
  };
  return Function.prototype.toString = y(function() {
    return e(this) && h(this).source || s(this);
  }, "toString"), _r.exports;
}
var zr, Ja;
function ee() {
  if (Ja) return zr;
  Ja = 1;
  var i = et(), t = Gt(), e = lh(), r = Ni();
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
var Ur = {}, Hr, ts;
function Kh() {
  if (ts) return Hr;
  ts = 1;
  var i = Math.ceil, t = Math.floor;
  return Hr = Math.trunc || function(e) {
    var r = +e;
    return (r > 0 ? t : i)(r);
  }, Hr;
}
var Xr, es;
function je() {
  if (es) return Xr;
  es = 1;
  var i = Kh();
  return Xr = function(t) {
    var e = +t;
    return e !== e || e === 0 ? 0 : i(e);
  }, Xr;
}
var Yr, rs;
function Jh() {
  if (rs) return Yr;
  rs = 1;
  var i = je(), t = Math.max, e = Math.min;
  return Yr = function(r, n) {
    var a = i(r);
    return a < 0 ? t(a + n, 0) : e(a, n);
  }, Yr;
}
var Wr, ns;
function se() {
  if (ns) return Wr;
  ns = 1;
  var i = je(), t = Math.min;
  return Wr = function(e) {
    var r = i(e);
    return r > 0 ? t(r, 9007199254740991) : 0;
  }, Wr;
}
var qr, is;
function Li() {
  if (is) return qr;
  is = 1;
  var i = se();
  return qr = function(t) {
    return i(t.length);
  }, qr;
}
var Gr, as;
function fh() {
  if (as) return Gr;
  as = 1;
  var i = de(), t = Jh(), e = Li(), r = function(n) {
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
  return Gr = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: r(!0),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: r(!1)
  }, Gr;
}
var Qr, ss;
function gh() {
  if (ss) return Qr;
  ss = 1;
  var i = J(), t = Pt(), e = de(), r = fh().indexOf, n = _i(), a = i([].push);
  return Qr = function(s, o) {
    var u = e(s), h = 0, c = [], f;
    for (f in u) !t(n, f) && t(u, f) && a(c, f);
    for (; o.length > h; ) t(u, f = o[h++]) && (~r(c, f) || a(c, f));
    return c;
  }, Qr;
}
var os, us;
function Di() {
  return us || (us = 1, os = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]), os;
}
var hs;
function tc() {
  if (hs) return Ur;
  hs = 1;
  var i = gh(), t = Di(), e = t.concat("length", "prototype");
  return Ur.f = Object.getOwnPropertyNames || function(r) {
    return i(r, e);
  }, Ur;
}
var cs = {}, ls;
function ec() {
  return ls || (ls = 1, cs.f = Object.getOwnPropertySymbols), cs;
}
var $r, fs;
function rc() {
  if (fs) return $r;
  fs = 1;
  var i = te(), t = J(), e = tc(), r = ec(), n = ut(), a = t([].concat);
  return $r = i("Reflect", "ownKeys") || function(s) {
    var o = e.f(n(s)), u = r.f;
    return u ? a(o, u(s)) : o;
  }, $r;
}
var Zr, gs;
function nc() {
  if (gs) return Zr;
  gs = 1;
  var i = Pt(), t = rc(), e = _e(), r = Gt();
  return Zr = function(n, a, s) {
    for (var o = t(a), u = r.f, h = e.f, c = 0; c < o.length; c++) {
      var f = o[c];
      !i(n, f) && !(s && i(s, f)) && u(n, f, h(a, f));
    }
  }, Zr;
}
var Kr, ps;
function ph() {
  if (ps) return Kr;
  ps = 1;
  var i = K(), t = et(), e = /#|\.prototype\./, r = function(u, h) {
    var c = a[n(u)];
    return c === o ? !0 : c === s ? !1 : t(h) ? i(h) : !!h;
  }, n = r.normalize = function(u) {
    return String(u).replace(e, ".").toLowerCase();
  }, a = r.data = {}, s = r.NATIVE = "N", o = r.POLYFILL = "P";
  return Kr = r, Kr;
}
var Jr, ds;
function ht() {
  if (ds) return Jr;
  ds = 1;
  var i = $(), t = _e().f, e = me(), r = ee(), n = Ni(), a = nc(), s = ph();
  return Jr = function(o, u) {
    var h = o.target, c = o.global, f = o.stat, g, l, d, p, v, y;
    if (c ? l = i : f ? l = i[h] || n(h, {}) : l = i[h] && i[h].prototype, l) for (d in u) {
      if (v = u[d], o.dontCallGetSet ? (y = t(l, d), p = y && y.value) : p = l[d], g = s(c ? d : h + (f ? "." : "#") + d, o.forced), !g && p !== void 0) {
        if (typeof v == typeof p) continue;
        a(v, p);
      }
      (o.sham || p && p.sham) && e(v, "sham", !0), r(l, d, v, o);
    }
  }, Jr;
}
var tn, vs;
function dh() {
  if (vs) return tn;
  vs = 1;
  var i = $(), t = ve(), e = Jt(), r = function(n) {
    return t.slice(0, n.length) === n;
  };
  return tn = function() {
    return r("Bun/") ? "BUN" : r("Cloudflare-Workers") ? "CLOUDFLARE" : r("Deno/") ? "DENO" : r("Node.js/") ? "NODE" : i.Bun && typeof Bun.version == "string" ? "BUN" : i.Deno && typeof Deno.version == "object" ? "DENO" : e(i.process) === "process" ? "NODE" : i.window && i.document ? "BROWSER" : "REST";
  }(), tn;
}
var en, ms;
function Fe() {
  if (ms) return en;
  ms = 1;
  var i = dh();
  return en = i === "NODE", en;
}
var rn, ys;
function ic() {
  if (ys) return rn;
  ys = 1;
  var i = $();
  return rn = i, rn;
}
var nn, xs;
function ac() {
  if (xs) return nn;
  xs = 1;
  var i = J(), t = zt();
  return nn = function(e, r, n) {
    try {
      return i(t(Object.getOwnPropertyDescriptor(e, r)[n]));
    } catch {
    }
  }, nn;
}
var an, bs;
function sc() {
  if (bs) return an;
  bs = 1;
  var i = dt();
  return an = function(t) {
    return i(t) || t === null;
  }, an;
}
var sn, ws;
function oc() {
  if (ws) return sn;
  ws = 1;
  var i = sc(), t = String, e = TypeError;
  return sn = function(r) {
    if (i(r)) return r;
    throw new e("Can't set " + t(r) + " as a prototype");
  }, sn;
}
var on, Ss;
function vh() {
  if (Ss) return on;
  Ss = 1;
  var i = ac(), t = dt(), e = Ct(), r = oc();
  return on = Object.setPrototypeOf || ("__proto__" in {} ? function() {
    var n = !1, a = {}, s;
    try {
      s = i(Object.prototype, "__proto__", "set"), s(a, []), n = a instanceof Array;
    } catch {
    }
    return function(o, u) {
      return e(o), r(u), t(o) && (n ? s(o, u) : o.__proto__ = u), o;
    };
  }() : void 0), on;
}
var un, Ts;
function Be() {
  if (Ts) return un;
  Ts = 1;
  var i = Gt().f, t = Pt(), e = it(), r = e("toStringTag");
  return un = function(n, a, s) {
    n && !s && (n = n.prototype), n && !t(n, r) && i(n, r, {
      configurable: !0,
      value: a
    });
  }, un;
}
var hn, Os;
function uc() {
  if (Os) return hn;
  Os = 1;
  var i = lh(), t = Gt();
  return hn = function(e, r, n) {
    return n.get && i(n.get, r, {
      getter: !0
    }), n.set && i(n.set, r, {
      setter: !0
    }), t.f(e, r, n);
  }, hn;
}
var cn, As;
function hc() {
  if (As) return cn;
  As = 1;
  var i = te(), t = uc(), e = it(), r = Et(), n = e("species");
  return cn = function(a) {
    var s = i(a);
    r && s && !s[n] && t(s, n, {
      configurable: !0,
      get: function() {
        return this;
      }
    });
  }, cn;
}
var ln, Es;
function cc() {
  if (Es) return ln;
  Es = 1;
  var i = Ve(), t = TypeError;
  return ln = function(e, r) {
    if (i(r, e)) return e;
    throw new t("Incorrect invocation");
  }, ln;
}
var fn, Cs;
function lc() {
  if (Cs) return fn;
  Cs = 1;
  var i = it(), t = i("toStringTag"), e = {};
  return e[t] = "z", fn = String(e) === "[object z]", fn;
}
var gn, Ps;
function ji() {
  if (Ps) return gn;
  Ps = 1;
  var i = lc(), t = et(), e = Jt(), r = it(), n = r("toStringTag"), a = Object, s = e(/* @__PURE__ */ function() {
    return arguments;
  }()) === "Arguments", o = function(u, h) {
    try {
      return u[h];
    } catch {
    }
  };
  return gn = i ? e : function(u) {
    var h, c, f;
    return u === void 0 ? "Undefined" : u === null ? "Null" : typeof (c = o(h = a(u), n)) == "string" ? c : s ? e(h) : (f = e(h)) === "Object" && t(h.callee) ? "Arguments" : f;
  }, gn;
}
var pn, Ms;
function fc() {
  if (Ms) return pn;
  Ms = 1;
  var i = J(), t = K(), e = et(), r = ji(), n = te(), a = ki(), s = function() {
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
  return g.sham = !0, pn = !o || t(function() {
    var l;
    return f(f.call) || !f(Object) || !f(function() {
      l = !0;
    }) || l;
  }) ? g : f, pn;
}
var dn, Ns;
function gc() {
  if (Ns) return dn;
  Ns = 1;
  var i = fc(), t = Ie(), e = TypeError;
  return dn = function(r) {
    if (i(r)) return r;
    throw new e(t(r) + " is not a constructor");
  }, dn;
}
var vn, Vs;
function mh() {
  if (Vs) return vn;
  Vs = 1;
  var i = ut(), t = gc(), e = Ne(), r = it(), n = r("species");
  return vn = function(a, s) {
    var o = i(a).constructor, u;
    return o === void 0 || e(u = i(o)[n]) ? s : t(u);
  }, vn;
}
var mn, Is;
function yh() {
  if (Is) return mn;
  Is = 1;
  var i = Me(), t = Function.prototype, e = t.apply, r = t.call;
  return mn = typeof Reflect == "object" && Reflect.apply || (i ? r.bind(e) : function() {
    return r.apply(e, arguments);
  }), mn;
}
var yn, ks;
function ze() {
  if (ks) return yn;
  ks = 1;
  var i = Jt(), t = J();
  return yn = function(e) {
    if (i(e) === "Function") return t(e);
  }, yn;
}
var xn, Rs;
function Fi() {
  if (Rs) return xn;
  Rs = 1;
  var i = ze(), t = zt(), e = Me(), r = i(i.bind);
  return xn = function(n, a) {
    return t(n), a === void 0 ? n : e ? r(n, a) : function() {
      return n.apply(a, arguments);
    };
  }, xn;
}
var bn, _s;
function xh() {
  if (_s) return bn;
  _s = 1;
  var i = te();
  return bn = i("document", "documentElement"), bn;
}
var wn, Ls;
function pc() {
  if (Ls) return wn;
  Ls = 1;
  var i = J();
  return wn = i([].slice), wn;
}
var Sn, Ds;
function dc() {
  if (Ds) return Sn;
  Ds = 1;
  var i = TypeError;
  return Sn = function(t, e) {
    if (t < e) throw new i("Not enough arguments");
    return t;
  }, Sn;
}
var Tn, js;
function bh() {
  if (js) return Tn;
  js = 1;
  var i = ve();
  return Tn = /(?:ipad|iphone|ipod).*applewebkit/i.test(i), Tn;
}
var On, Fs;
function wh() {
  if (Fs) return On;
  Fs = 1;
  var i = $(), t = yh(), e = Fi(), r = et(), n = Pt(), a = K(), s = xh(), o = pc(), u = Re(), h = dc(), c = bh(), f = Fe(), g = i.setImmediate, l = i.clearImmediate, d = i.process, p = i.Dispatch, v = i.Function, y = i.MessageChannel, m = i.String, x = 0, b = {}, O = "onreadystatechange", w, T, C, P;
  a(function() {
    w = i.location;
  });
  var R = function(E) {
    if (n(b, E)) {
      var L = b[E];
      delete b[E], L();
    }
  }, V = function(E) {
    return function() {
      R(E);
    };
  }, I = function(E) {
    R(E.data);
  }, N = function(E) {
    i.postMessage(m(E), w.protocol + "//" + w.host);
  };
  return (!g || !l) && (g = function(E) {
    h(arguments.length, 1);
    var L = r(E) ? E : v(E), U = o(arguments, 1);
    return b[++x] = function() {
      t(L, void 0, U);
    }, T(x), x;
  }, l = function(E) {
    delete b[E];
  }, f ? T = function(E) {
    d.nextTick(V(E));
  } : p && p.now ? T = function(E) {
    p.now(V(E));
  } : y && !c ? (C = new y(), P = C.port2, C.port1.onmessage = I, T = e(P.postMessage, P)) : i.addEventListener && r(i.postMessage) && !i.importScripts && w && w.protocol !== "file:" && !a(N) ? (T = N, i.addEventListener("message", I, !1)) : O in u("script") ? T = function(E) {
    s.appendChild(u("script"))[O] = function() {
      s.removeChild(this), R(E);
    };
  } : T = function(E) {
    setTimeout(V(E), 0);
  }), On = {
    set: g,
    clear: l
  }, On;
}
var An, Bs;
function vc() {
  if (Bs) return An;
  Bs = 1;
  var i = $(), t = Et(), e = Object.getOwnPropertyDescriptor;
  return An = function(r) {
    if (!t) return i[r];
    var n = e(i, r);
    return n && n.value;
  }, An;
}
var En, zs;
function Sh() {
  if (zs) return En;
  zs = 1;
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
  }, En = i, En;
}
var Cn, Us;
function mc() {
  if (Us) return Cn;
  Us = 1;
  var i = ve();
  return Cn = /ipad|iphone|ipod/i.test(i) && typeof Pebble < "u", Cn;
}
var Pn, Hs;
function yc() {
  if (Hs) return Pn;
  Hs = 1;
  var i = ve();
  return Pn = /web0s(?!.*chrome)/i.test(i), Pn;
}
var Mn, Xs;
function xc() {
  if (Xs) return Mn;
  Xs = 1;
  var i = $(), t = vc(), e = Fi(), r = wh().set, n = Sh(), a = bh(), s = mc(), o = yc(), u = Fe(), h = i.MutationObserver || i.WebKitMutationObserver, c = i.document, f = i.process, g = i.Promise, l = t("queueMicrotask"), d, p, v, y, m;
  if (!l) {
    var x = new n(), b = function() {
      var O, w;
      for (u && (O = f.domain) && O.exit(); w = x.get(); ) try {
        w();
      } catch (T) {
        throw x.head && d(), T;
      }
      O && O.enter();
    };
    !a && !u && !o && h && c ? (p = !0, v = c.createTextNode(""), new h(b).observe(v, {
      characterData: !0
    }), d = function() {
      v.data = p = !p;
    }) : !s && g && g.resolve ? (y = g.resolve(void 0), y.constructor = g, m = e(y.then, y), d = function() {
      m(b);
    }) : u ? d = function() {
      f.nextTick(b);
    } : (r = e(r, i), d = function() {
      r(b);
    }), l = function(O) {
      x.head || d(), x.add(O);
    };
  }
  return Mn = l, Mn;
}
var Ys, Ws;
function bc() {
  return Ws || (Ws = 1, Ys = function(i, t) {
    try {
      arguments.length === 1 ? console.error(i) : console.error(i, t);
    } catch {
    }
  }), Ys;
}
var qs, Gs;
function Bi() {
  return Gs || (Gs = 1, qs = function(i) {
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
  }), qs;
}
var Nn, Qs;
function ye() {
  if (Qs) return Nn;
  Qs = 1;
  var i = $();
  return Nn = i.Promise, Nn;
}
var Vn, $s;
function xe() {
  if ($s) return Vn;
  $s = 1;
  var i = $(), t = ye(), e = et(), r = ph(), n = ki(), a = it(), s = dh(), o = It(), u = Mi(), h = t && t.prototype, c = a("species"), f = !1, g = e(i.PromiseRejectionEvent), l = r("Promise", function() {
    var d = n(t), p = d !== String(t);
    if (!p && u === 66 || o && !(h.catch && h.finally)) return !0;
    if (!u || u < 51 || !/native code/.test(d)) {
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
    return !p && (s === "BROWSER" || s === "DENO") && !g;
  });
  return Vn = {
    CONSTRUCTOR: l,
    REJECTION_EVENT: g,
    SUBCLASSING: f
  }, Vn;
}
var In = {}, Zs;
function be() {
  if (Zs) return In;
  Zs = 1;
  var i = zt(), t = TypeError, e = function(r) {
    var n, a;
    this.promise = new r(function(s, o) {
      if (n !== void 0 || a !== void 0) throw new t("Bad Promise constructor");
      n = s, a = o;
    }), this.resolve = i(n), this.reject = i(a);
  };
  return In.f = function(r) {
    return new e(r);
  }, In;
}
var Ks;
function wc() {
  if (Ks) return Zi;
  Ks = 1;
  var i = ht(), t = It(), e = Fe(), r = $(), n = ic(), a = at(), s = ee(), o = vh(), u = Be(), h = hc(), c = zt(), f = et(), g = dt(), l = cc(), d = mh(), p = wh().set, v = xc(), y = bc(), m = Bi(), x = Sh(), b = De(), O = ye(), w = xe(), T = be(), C = "Promise", P = w.CONSTRUCTOR, R = w.REJECTION_EVENT, V = w.SUBCLASSING, I = b.getterFor(C), N = b.set, E = O && O.prototype, L = O, U = E, D = r.TypeError, j = r.document, M = r.process, k = T.f, B = k, Y = !!(j && j.createEvent && r.dispatchEvent), Q = "unhandledrejection", q = "rejectionhandled", mt = 0, xt = 1, st = 2, Ut = 1, Ht = 2, ct, Nt, Vt, yt, lt = function(A) {
    var F;
    return g(A) && f(F = A.then) ? F : !1;
  }, bt = function(A, F) {
    var H = F.value, X = F.state === xt, Z = X ? A.ok : A.fail, Lt = A.resolve, Dt = A.reject, St = A.domain, Tt, he, ce;
    try {
      Z ? (X || (F.rejection === Ht && Xt(F), F.rejection = Ut), Z === !0 ? Tt = H : (St && St.enter(), Tt = Z(H), St && (St.exit(), ce = !0)), Tt === A.promise ? Dt(new D("Promise-chain cycle")) : (he = lt(Tt)) ? a(he, Tt, Lt, Dt) : Lt(Tt)) : Dt(H);
    } catch (le) {
      St && !ce && St.exit(), Dt(le);
    }
  }, Rt = function(A, F) {
    A.notified || (A.notified = !0, v(function() {
      for (var H = A.reactions, X; X = H.get(); ) bt(X, A);
      A.notified = !1, F && !A.rejection && Qt(A);
    }));
  }, _t = function(A, F, H) {
    var X, Z;
    Y ? (X = j.createEvent("Event"), X.promise = F, X.reason = H, X.initEvent(A, !1, !0), r.dispatchEvent(X)) : X = {
      promise: F,
      reason: H
    }, !R && (Z = r["on" + A]) ? Z(X) : A === Q && y("Unhandled promise rejection", H);
  }, Qt = function(A) {
    a(p, r, function() {
      var F = A.facade, H = A.value, X = ue(A), Z;
      if (X && (Z = m(function() {
        e ? M.emit("unhandledRejection", H, F) : _t(Q, F, H);
      }), A.rejection = e || ue(A) ? Ht : Ut, Z.error)) throw Z.value;
    });
  }, ue = function(A) {
    return A.rejection !== Ut && !A.parent;
  }, Xt = function(A) {
    a(p, r, function() {
      var F = A.facade;
      e ? M.emit("rejectionHandled", F) : _t(q, F, A.value);
    });
  }, ft = function(A, F, H) {
    return function(X) {
      A(F, X, H);
    };
  }, gt = function(A, F, H) {
    A.done || (A.done = !0, H && (A = H), A.value = F, A.state = st, Rt(A, !0));
  }, wt = function(A, F, H) {
    if (!A.done) {
      A.done = !0, H && (A = H);
      try {
        if (A.facade === F) throw new D("Promise can't be resolved itself");
        var X = lt(F);
        X ? v(function() {
          var Z = {
            done: !1
          };
          try {
            a(X, F, ft(wt, Z, A), ft(gt, Z, A));
          } catch (Lt) {
            gt(Z, Lt, A);
          }
        }) : (A.value = F, A.state = xt, Rt(A, !1));
      } catch (Z) {
        gt({
          done: !1
        }, Z, A);
      }
    }
  };
  if (P && (L = function(A) {
    l(this, U), c(A), a(ct, this);
    var F = I(this);
    try {
      A(ft(wt, F), ft(gt, F));
    } catch (H) {
      gt(F, H);
    }
  }, U = L.prototype, ct = function(A) {
    N(this, {
      type: C,
      done: !1,
      notified: !1,
      parent: !1,
      reactions: new x(),
      rejection: !1,
      state: mt,
      value: null
    });
  }, ct.prototype = s(U, "then", function(A, F) {
    var H = I(this), X = k(d(this, L));
    return H.parent = !0, X.ok = f(A) ? A : !0, X.fail = f(F) && F, X.domain = e ? M.domain : void 0, H.state === mt ? H.reactions.add(X) : v(function() {
      bt(X, H);
    }), X.promise;
  }), Nt = function() {
    var A = new ct(), F = I(A);
    this.promise = A, this.resolve = ft(wt, F), this.reject = ft(gt, F);
  }, T.f = k = function(A) {
    return A === L || A === Vt ? new Nt(A) : B(A);
  }, !t && f(O) && E !== Object.prototype)) {
    yt = E.then, V || s(E, "then", function(A, F) {
      var H = this;
      return new L(function(X, Z) {
        a(yt, H, X, Z);
      }).then(A, F);
    }, {
      unsafe: !0
    });
    try {
      delete E.constructor;
    } catch {
    }
    o && o(E, U);
  }
  return i({
    global: !0,
    constructor: !0,
    wrap: !0,
    forced: P
  }, {
    Promise: L
  }), Vt = n.Promise, u(L, C, !1, !0), h(C), Zi;
}
var Js = {}, to, eo;
function we() {
  return eo || (eo = 1, to = {}), to;
}
var kn, ro;
function Sc() {
  if (ro) return kn;
  ro = 1;
  var i = it(), t = we(), e = i("iterator"), r = Array.prototype;
  return kn = function(n) {
    return n !== void 0 && (t.Array === n || r[e] === n);
  }, kn;
}
var Rn, no;
function Th() {
  if (no) return Rn;
  no = 1;
  var i = ji(), t = ae(), e = Ne(), r = we(), n = it(), a = n("iterator");
  return Rn = function(s) {
    if (!e(s)) return t(s, a) || t(s, "@@iterator") || r[i(s)];
  }, Rn;
}
var _n, io;
function Tc() {
  if (io) return _n;
  io = 1;
  var i = at(), t = zt(), e = ut(), r = Ie(), n = Th(), a = TypeError;
  return _n = function(s, o) {
    var u = arguments.length < 2 ? n(s) : o;
    if (t(u)) return e(i(u, s));
    throw new a(r(s) + " is not iterable");
  }, _n;
}
var Ln, ao;
function Oc() {
  if (ao) return Ln;
  ao = 1;
  var i = at(), t = ut(), e = ae();
  return Ln = function(r, n, a) {
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
  }, Ln;
}
var Dn, so;
function Oh() {
  if (so) return Dn;
  so = 1;
  var i = Fi(), t = at(), e = ut(), r = Ie(), n = Sc(), a = Li(), s = Ve(), o = Tc(), u = Th(), h = Oc(), c = TypeError, f = function(l, d) {
    this.stopped = l, this.result = d;
  }, g = f.prototype;
  return Dn = function(l, d, p) {
    var v = p && p.that, y = !!(p && p.AS_ENTRIES), m = !!(p && p.IS_RECORD), x = !!(p && p.IS_ITERATOR), b = !!(p && p.INTERRUPTED), O = i(d, v), w, T, C, P, R, V, I, N = function(L) {
      return w && h(w, "normal"), new f(!0, L);
    }, E = function(L) {
      return y ? (e(L), b ? O(L[0], L[1], N) : O(L[0], L[1])) : b ? O(L, N) : O(L);
    };
    if (m) w = l.iterator;
    else if (x) w = l;
    else {
      if (T = u(l), !T) throw new c(r(l) + " is not iterable");
      if (n(T)) {
        for (C = 0, P = a(l); P > C; C++) if (R = E(l[C]), R && s(g, R)) return R;
        return new f(!1);
      }
      w = o(l, T);
    }
    for (V = m ? l.next : w.next; !(I = t(V, w)).done; ) {
      try {
        R = E(I.value);
      } catch (L) {
        h(w, "throw", L);
      }
      if (typeof R == "object" && R && s(g, R)) return R;
    }
    return new f(!1);
  }, Dn;
}
var jn, oo;
function Ac() {
  if (oo) return jn;
  oo = 1;
  var i = it(), t = i("iterator"), e = !1;
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
  return jn = function(a, s) {
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
  }, jn;
}
var Fn, uo;
function Ah() {
  if (uo) return Fn;
  uo = 1;
  var i = ye(), t = Ac(), e = xe().CONSTRUCTOR;
  return Fn = e || !t(function(r) {
    i.all(r).then(void 0, function() {
    });
  }), Fn;
}
var ho;
function Ec() {
  if (ho) return Js;
  ho = 1;
  var i = ht(), t = at(), e = zt(), r = be(), n = Bi(), a = Oh(), s = Ah();
  return i({
    target: "Promise",
    stat: !0,
    forced: s
  }, {
    all: function(o) {
      var u = this, h = r.f(u), c = h.resolve, f = h.reject, g = n(function() {
        var l = e(u.resolve), d = [], p = 0, v = 1;
        a(o, function(y) {
          var m = p++, x = !1;
          v++, t(l, u, y).then(function(b) {
            x || (x = !0, d[m] = b, --v || c(d));
          }, f);
        }), --v || c(d);
      });
      return g.error && f(g.value), h.promise;
    }
  }), Js;
}
var co = {}, lo;
function Cc() {
  if (lo) return co;
  lo = 1;
  var i = ht(), t = It(), e = xe().CONSTRUCTOR, r = ye(), n = te(), a = et(), s = ee(), o = r && r.prototype;
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
  return co;
}
var fo = {}, go;
function Pc() {
  if (go) return fo;
  go = 1;
  var i = ht(), t = at(), e = zt(), r = be(), n = Bi(), a = Oh(), s = Ah();
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
  }), fo;
}
var po = {}, vo;
function Mc() {
  if (vo) return po;
  vo = 1;
  var i = ht(), t = be(), e = xe().CONSTRUCTOR;
  return i({
    target: "Promise",
    stat: !0,
    forced: e
  }, {
    reject: function(r) {
      var n = t.f(this), a = n.reject;
      return a(r), n.promise;
    }
  }), po;
}
var mo = {}, Bn, yo;
function Nc() {
  if (yo) return Bn;
  yo = 1;
  var i = ut(), t = dt(), e = be();
  return Bn = function(r, n) {
    if (i(r), t(n) && n.constructor === r) return n;
    var a = e.f(r), s = a.resolve;
    return s(n), a.promise;
  }, Bn;
}
var xo;
function Vc() {
  if (xo) return mo;
  xo = 1;
  var i = ht(), t = te(), e = It(), r = ye(), n = xe().CONSTRUCTOR, a = Nc(), s = t("Promise"), o = e && !n;
  return i({
    target: "Promise",
    stat: !0,
    forced: e || n
  }, {
    resolve: function(u) {
      return a(o && this === s ? r : this, u);
    }
  }), mo;
}
var bo;
function Ic() {
  return bo || (bo = 1, wc(), Ec(), Cc(), Pc(), Mc(), Vc()), qh;
}
Ic();
function wo(i, t, e, r, n, a, s) {
  try {
    var o = i[a](s), u = o.value;
  } catch (h) {
    return void e(h);
  }
  o.done ? t(u) : Promise.resolve(u).then(r, n);
}
function Bt(i) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, n) {
      var a = i.apply(t, e);
      function s(u) {
        wo(a, r, n, s, o, "next", u);
      }
      function o(u) {
        wo(a, r, n, s, o, "throw", u);
      }
      s(void 0);
    });
  };
}
var So = {}, To = {}, zn, Oo;
function kt() {
  if (Oo) return zn;
  Oo = 1;
  var i = ji(), t = String;
  return zn = function(e) {
    if (i(e) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return t(e);
  }, zn;
}
var Un, Ao;
function Eh() {
  if (Ao) return Un;
  Ao = 1;
  var i = ut();
  return Un = function() {
    var t = i(this), e = "";
    return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.unicodeSets && (e += "v"), t.sticky && (e += "y"), e;
  }, Un;
}
var Hn, Eo;
function Ch() {
  if (Eo) return Hn;
  Eo = 1;
  var i = K(), t = $(), e = t.RegExp, r = i(function() {
    var s = e("a", "y");
    return s.lastIndex = 2, s.exec("abcd") !== null;
  }), n = r || i(function() {
    return !e("a", "y").sticky;
  }), a = r || i(function() {
    var s = e("^r", "gy");
    return s.lastIndex = 2, s.exec("str") !== null;
  });
  return Hn = {
    BROKEN_CARET: a,
    MISSED_STICKY: n,
    UNSUPPORTED_Y: r
  }, Hn;
}
var Xn = {}, Yn, Co;
function kc() {
  if (Co) return Yn;
  Co = 1;
  var i = gh(), t = Di();
  return Yn = Object.keys || function(e) {
    return i(e, t);
  }, Yn;
}
var Po;
function Rc() {
  if (Po) return Xn;
  Po = 1;
  var i = Et(), t = ch(), e = Gt(), r = ut(), n = de(), a = kc();
  return Xn.f = i && !t ? Object.defineProperties : function(s, o) {
    r(s);
    for (var u = n(o), h = a(o), c = h.length, f = 0, g; c > f; ) e.f(s, g = h[f++], u[g]);
    return s;
  }, Xn;
}
var Wn, Mo;
function Ue() {
  if (Mo) return Wn;
  Mo = 1;
  var i = ut(), t = Rc(), e = Di(), r = _i(), n = xh(), a = Re(), s = Ri(), o = ">", u = "<", h = "prototype", c = "script", f = s("IE_PROTO"), g = function() {
  }, l = function(m) {
    return u + c + o + m + u + "/" + c + o;
  }, d = function(m) {
    m.write(l("")), m.close();
    var x = m.parentWindow.Object;
    return m = null, x;
  }, p = function() {
    var m = a("iframe"), x = "java" + c + ":", b;
    return m.style.display = "none", n.appendChild(m), m.src = String(x), b = m.contentWindow.document, b.open(), b.write(l("document.F=Object")), b.close(), b.F;
  }, v, y = function() {
    try {
      v = new ActiveXObject("htmlfile");
    } catch {
    }
    y = typeof document < "u" ? document.domain && v ? d(v) : p() : d(v);
    for (var m = e.length; m--; ) delete y[h][e[m]];
    return y();
  };
  return r[f] = !0, Wn = Object.create || function(m, x) {
    var b;
    return m !== null ? (g[h] = i(m), b = new g(), g[h] = null, b[f] = m) : b = y(), x === void 0 ? b : t.f(b, x);
  }, Wn;
}
var qn, No;
function _c() {
  if (No) return qn;
  No = 1;
  var i = K(), t = $(), e = t.RegExp;
  return qn = i(function() {
    var r = e(".", "s");
    return !(r.dotAll && r.test(`
`) && r.flags === "s");
  }), qn;
}
var Gn, Vo;
function Lc() {
  if (Vo) return Gn;
  Vo = 1;
  var i = K(), t = $(), e = t.RegExp;
  return Gn = i(function() {
    var r = e("(?<a>b)", "g");
    return r.exec("b").groups.a !== "b" || "b".replace(r, "$<a>c") !== "bc";
  }), Gn;
}
var Qn, Io;
function zi() {
  if (Io) return Qn;
  Io = 1;
  var i = at(), t = J(), e = kt(), r = Eh(), n = Ch(), a = Ii(), s = Ue(), o = De().get, u = _c(), h = Lc(), c = a("native-string-replace", String.prototype.replace), f = RegExp.prototype.exec, g = f, l = t("".charAt), d = t("".indexOf), p = t("".replace), v = t("".slice), y = function() {
    var O = /a/, w = /b*/g;
    return i(f, O, "a"), i(f, w, "a"), O.lastIndex !== 0 || w.lastIndex !== 0;
  }(), m = n.BROKEN_CARET, x = /()??/.exec("")[1] !== void 0, b = y || x || m || u || h;
  return b && (g = function(O) {
    var w = this, T = o(w), C = e(O), P = T.raw, R, V, I, N, E, L, U;
    if (P) return P.lastIndex = w.lastIndex, R = i(g, P, C), w.lastIndex = P.lastIndex, R;
    var D = T.groups, j = m && w.sticky, M = i(r, w), k = w.source, B = 0, Y = C;
    if (j && (M = p(M, "y", ""), d(M, "g") === -1 && (M += "g"), Y = v(C, w.lastIndex), w.lastIndex > 0 && (!w.multiline || w.multiline && l(C, w.lastIndex - 1) !== `
`) && (k = "(?: " + k + ")", Y = " " + Y, B++), V = new RegExp("^(?:" + k + ")", M)), x && (V = new RegExp("^" + k + "$(?!\\s)", M)), y && (I = w.lastIndex), N = i(f, j ? V : w, Y), j ? N ? (N.input = v(N.input, B), N[0] = v(N[0], B), N.index = w.lastIndex, w.lastIndex += N[0].length) : w.lastIndex = 0 : y && N && (w.lastIndex = w.global ? N.index + N[0].length : I), x && N && N.length > 1 && i(c, N[0], V, function() {
      for (E = 1; E < arguments.length - 2; E++) arguments[E] === void 0 && (N[E] = void 0);
    }), N && D) for (N.groups = L = s(null), E = 0; E < D.length; E++) U = D[E], L[U[0]] = N[U[1]];
    return N;
  }), Qn = g, Qn;
}
var ko;
function Dc() {
  if (ko) return To;
  ko = 1;
  var i = ht(), t = zi();
  return i({
    target: "RegExp",
    proto: !0,
    forced: /./.exec !== t
  }, {
    exec: t
  }), To;
}
var $n, Ro;
function Ui() {
  if (Ro) return $n;
  Ro = 1, Dc();
  var i = at(), t = ee(), e = zi(), r = K(), n = it(), a = me(), s = n("species"), o = RegExp.prototype;
  return $n = function(u, h, c, f) {
    var g = n(u), l = !r(function() {
      var y = {};
      return y[g] = function() {
        return 7;
      }, ""[u](y) !== 7;
    }), d = l && !r(function() {
      var y = !1, m = /a/;
      return u === "split" && (m = {}, m.constructor = {}, m.constructor[s] = function() {
        return m;
      }, m.flags = "", m[g] = /./[g]), m.exec = function() {
        return y = !0, null;
      }, m[g](""), !y;
    });
    if (!l || !d || c) {
      var p = /./[g], v = h(g, ""[u], function(y, m, x, b, O) {
        var w = m.exec;
        return w === e || w === o.exec ? l && !O ? {
          done: !0,
          value: i(p, m, x, b)
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
  }, $n;
}
var Zn, _o;
function jc() {
  if (_o) return Zn;
  _o = 1;
  var i = J(), t = je(), e = kt(), r = Ct(), n = i("".charAt), a = i("".charCodeAt), s = i("".slice), o = function(u) {
    return function(h, c) {
      var f = e(r(h)), g = t(c), l = f.length, d, p;
      return g < 0 || g >= l ? u ? "" : void 0 : (d = a(f, g), d < 55296 || d > 56319 || g + 1 === l || (p = a(f, g + 1)) < 56320 || p > 57343 ? u ? n(f, g) : d : u ? s(f, g, g + 2) : (d - 55296 << 10) + (p - 56320) + 65536);
    };
  };
  return Zn = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: o(!1),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: o(!0)
  }, Zn;
}
var Kn, Lo;
function Hi() {
  if (Lo) return Kn;
  Lo = 1;
  var i = jc().charAt;
  return Kn = function(t, e, r) {
    return e + (r ? i(t, e).length : 1);
  }, Kn;
}
var Jn, Do;
function Fc() {
  if (Do) return Jn;
  Do = 1;
  var i = $(), t = K(), e = i.RegExp, r = !t(function() {
    var n = !0;
    try {
      e(".", "d");
    } catch {
      n = !1;
    }
    var a = {}, s = "", o = n ? "dgimsy" : "gimsy", u = function(g, l) {
      Object.defineProperty(a, g, {
        get: function() {
          return s += l, !0;
        }
      });
    }, h = {
      dotAll: "s",
      global: "g",
      ignoreCase: "i",
      multiline: "m",
      sticky: "y"
    };
    n && (h.hasIndices = "d");
    for (var c in h) u(c, h[c]);
    var f = Object.getOwnPropertyDescriptor(e.prototype, "flags").get.call(a);
    return f !== o || s !== o;
  });
  return Jn = {
    correct: r
  }, Jn;
}
var ti, jo;
function Xi() {
  if (jo) return ti;
  jo = 1;
  var i = at(), t = Pt(), e = Ve(), r = Fc(), n = Eh(), a = RegExp.prototype;
  return ti = r.correct ? function(s) {
    return s.flags;
  } : function(s) {
    return !r.correct && e(a, s) && !t(s, "flags") ? i(n, s) : s.flags;
  }, ti;
}
var ei, Fo;
function Yi() {
  if (Fo) return ei;
  Fo = 1;
  var i = at(), t = ut(), e = et(), r = Jt(), n = zi(), a = TypeError;
  return ei = function(s, o) {
    var u = s.exec;
    if (e(u)) {
      var h = i(u, s, o);
      return h !== null && t(h), h;
    }
    if (r(s) === "RegExp") return i(n, s, o);
    throw new a("RegExp#exec called on incompatible receiver");
  }, ei;
}
var Bo;
function Bc() {
  if (Bo) return So;
  Bo = 1;
  var i = at(), t = J(), e = Ui(), r = ut(), n = dt(), a = se(), s = kt(), o = Ct(), u = ae(), h = Hi(), c = Xi(), f = Yi(), g = t("".indexOf);
  return e("match", function(l, d, p) {
    return [
      // `String.prototype.match` method
      // https://tc39.es/ecma262/#sec-string.prototype.match
      function(v) {
        var y = o(this), m = n(v) ? u(v, l) : void 0;
        return m ? i(m, v, y) : new RegExp(v)[l](s(y));
      },
      // `RegExp.prototype[@@match]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
      function(v) {
        var y = r(this), m = s(v), x = p(d, y, m);
        if (x.done) return x.value;
        var b = s(c(y));
        if (g(b, "g") === -1) return f(y, m);
        var O = g(b, "u") !== -1;
        y.lastIndex = 0;
        for (var w = [], T = 0, C; (C = f(y, m)) !== null; ) {
          var P = s(C[0]);
          w[T] = P, P === "" && (y.lastIndex = h(m, a(y.lastIndex), O)), T++;
        }
        return T === 0 ? null : w;
      }
    ];
  }), So;
}
Bc();
var zo = {}, ri, Uo;
function zc() {
  if (Uo) return ri;
  Uo = 1;
  var i = J(), t = ke(), e = Math.floor, r = i("".charAt), n = i("".replace), a = i("".slice), s = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, o = /\$([$&'`]|\d{1,2})/g;
  return ri = function(u, h, c, f, g, l) {
    var d = c + u.length, p = f.length, v = o;
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
          return a(h, d);
        case "<":
          x = g[a(m, 1, -1)];
          break;
        default:
          var b = +m;
          if (b === 0) return y;
          if (b > p) {
            var O = e(b / 10);
            return O === 0 ? y : O <= p ? f[O - 1] === void 0 ? r(m, 1) : f[O - 1] + r(m, 1) : y;
          }
          x = f[b - 1];
      }
      return x === void 0 ? "" : x;
    });
  }, ri;
}
var Ho;
function Uc() {
  if (Ho) return zo;
  Ho = 1;
  var i = yh(), t = at(), e = J(), r = Ui(), n = K(), a = ut(), s = et(), o = dt(), u = je(), h = se(), c = kt(), f = Ct(), g = Hi(), l = ae(), d = zc(), p = Xi(), v = Yi(), y = it(), m = y("replace"), x = Math.max, b = Math.min, O = e([].concat), w = e([].push), T = e("".indexOf), C = e("".slice), P = function(N) {
    return N === void 0 ? N : String(N);
  }, R = function() {
    return "a".replace(/./, "$0") === "$0";
  }(), V = function() {
    return /./[m] ? /./[m]("a", "$0") === "" : !1;
  }(), I = !n(function() {
    var N = /./;
    return N.exec = function() {
      var E = [];
      return E.groups = {
        a: "7"
      }, E;
    }, "".replace(N, "$<a>") !== "7";
  });
  return r("replace", function(N, E, L) {
    var U = V ? "$" : "$0";
    return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function(D, j) {
        var M = f(this), k = o(D) ? l(D, m) : void 0;
        return k ? t(k, D, M, j) : t(E, c(M), D, j);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function(D, j) {
        var M = a(this), k = c(D);
        if (typeof j == "string" && T(j, U) === -1 && T(j, "$<") === -1) {
          var B = L(E, M, k, j);
          if (B.done) return B.value;
        }
        var Y = s(j);
        Y || (j = c(j));
        var Q = c(p(M)), q = T(Q, "g") !== -1, mt;
        q && (mt = T(Q, "u") !== -1, M.lastIndex = 0);
        for (var xt = [], st; st = v(M, k), !(st === null || (w(xt, st), !q)); ) {
          var Ut = c(st[0]);
          Ut === "" && (M.lastIndex = g(k, h(M.lastIndex), mt));
        }
        for (var Ht = "", ct = 0, Nt = 0; Nt < xt.length; Nt++) {
          st = xt[Nt];
          for (var Vt = c(st[0]), yt = x(b(u(st.index), k.length), 0), lt = [], bt, Rt = 1; Rt < st.length; Rt++) w(lt, P(st[Rt]));
          var _t = st.groups;
          if (Y) {
            var Qt = O([Vt], lt, yt, k);
            _t !== void 0 && w(Qt, _t), bt = c(i(j, void 0, Qt));
          } else bt = d(Vt, k, yt, lt, _t, j);
          yt >= ct && (Ht += C(k, ct, yt) + bt, ct = yt + Vt.length);
        }
        return Ht + C(k, ct);
      }
    ];
  }, !I || !R || V), zo;
}
Uc();
var Xo = {}, ni, Yo;
function Hc() {
  if (Yo) return ni;
  Yo = 1;
  var i = dt(), t = Jt(), e = it(), r = e("match");
  return ni = function(n) {
    var a;
    return i(n) && ((a = n[r]) !== void 0 ? !!a : t(n) === "RegExp");
  }, ni;
}
var ii, Wo;
function Wi() {
  if (Wo) return ii;
  Wo = 1;
  var i = Hc(), t = TypeError;
  return ii = function(e) {
    if (i(e)) throw new t("The method doesn't accept regular expressions");
    return e;
  }, ii;
}
var ai, qo;
function qi() {
  if (qo) return ai;
  qo = 1;
  var i = it(), t = i("match");
  return ai = function(e) {
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
  }, ai;
}
var Go;
function Xc() {
  if (Go) return Xo;
  Go = 1;
  var i = ht(), t = ze(), e = _e().f, r = se(), n = kt(), a = Wi(), s = Ct(), o = qi(), u = It(), h = t("".slice), c = Math.min, f = o("startsWith"), g = !u && !f && !!function() {
    var l = e(String.prototype, "startsWith");
    return l && !l.writable;
  }();
  return i({
    target: "String",
    proto: !0,
    forced: !g && !f
  }, {
    startsWith: function(l) {
      var d = n(s(this));
      a(l);
      var p = r(c(arguments.length > 1 ? arguments[1] : void 0, d.length)), v = n(l);
      return h(d, p, p + v.length) === v;
    }
  }), Xo;
}
Xc();
var si, Qo;
function Yc() {
  if (Qo) return si;
  Qo = 1;
  var i = it(), t = Ue(), e = Gt().f, r = i("unscopables"), n = Array.prototype;
  return n[r] === void 0 && e(n, r, {
    configurable: !0,
    value: t(null)
  }), si = function(a) {
    n[r][a] = !0;
  }, si;
}
var oi, $o;
function Wc() {
  if ($o) return oi;
  $o = 1;
  var i = K();
  return oi = !i(function() {
    function t() {
    }
    return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
  }), oi;
}
var ui, Zo;
function Ph() {
  if (Zo) return ui;
  Zo = 1;
  var i = Pt(), t = et(), e = ke(), r = Ri(), n = Wc(), a = r("IE_PROTO"), s = Object, o = s.prototype;
  return ui = n ? s.getPrototypeOf : function(u) {
    var h = e(u);
    if (i(h, a)) return h[a];
    var c = h.constructor;
    return t(c) && h instanceof c ? c.prototype : h instanceof s ? o : null;
  }, ui;
}
var hi, Ko;
function Mh() {
  if (Ko) return hi;
  Ko = 1;
  var i = K(), t = et(), e = dt(), r = Ue(), n = Ph(), a = ee(), s = it(), o = It(), u = s("iterator"), h = !1, c, f, g;
  [].keys && (g = [].keys(), "next" in g ? (f = n(n(g)), f !== Object.prototype && (c = f)) : h = !0);
  var l = !e(c) || i(function() {
    var d = {};
    return c[u].call(d) !== d;
  });
  return l ? c = {} : o && (c = r(c)), t(c[u]) || a(c, u, function() {
    return this;
  }), hi = {
    IteratorPrototype: c,
    BUGGY_SAFARI_ITERATORS: h
  }, hi;
}
var ci, Jo;
function qc() {
  if (Jo) return ci;
  Jo = 1;
  var i = Mh().IteratorPrototype, t = Ue(), e = Pi(), r = Be(), n = we(), a = function() {
    return this;
  };
  return ci = function(s, o, u, h) {
    var c = o + " Iterator";
    return s.prototype = t(i, {
      next: e(+!h, u)
    }), r(s, c, !1, !0), n[c] = a, s;
  }, ci;
}
var li, tu;
function Gc() {
  if (tu) return li;
  tu = 1;
  var i = ht(), t = at(), e = It(), r = Le(), n = et(), a = qc(), s = Ph(), o = vh(), u = Be(), h = me(), c = ee(), f = it(), g = we(), l = Mh(), d = r.PROPER, p = r.CONFIGURABLE, v = l.IteratorPrototype, y = l.BUGGY_SAFARI_ITERATORS, m = f("iterator"), x = "keys", b = "values", O = "entries", w = function() {
    return this;
  };
  return li = function(T, C, P, R, V, I, N) {
    a(P, C, R);
    var E = function(q) {
      if (q === V && M) return M;
      if (!y && q && q in D) return D[q];
      switch (q) {
        case x:
          return function() {
            return new P(this, q);
          };
        case b:
          return function() {
            return new P(this, q);
          };
        case O:
          return function() {
            return new P(this, q);
          };
      }
      return function() {
        return new P(this);
      };
    }, L = C + " Iterator", U = !1, D = T.prototype, j = D[m] || D["@@iterator"] || V && D[V], M = !y && j || E(V), k = C === "Array" && D.entries || j, B, Y, Q;
    if (k && (B = s(k.call(new T())), B !== Object.prototype && B.next && (!e && s(B) !== v && (o ? o(B, v) : n(B[m]) || c(B, m, w)), u(B, L, !0, !0), e && (g[L] = w))), d && V === b && j && j.name !== b && (!e && p ? h(D, "name", b) : (U = !0, M = function() {
      return t(j, this);
    })), V) if (Y = {
      values: E(b),
      keys: I ? M : E(x),
      entries: E(O)
    }, N) for (Q in Y) (y || U || !(Q in D)) && c(D, Q, Y[Q]);
    else i({
      target: C,
      proto: !0,
      forced: y || U
    }, Y);
    return (!e || N) && D[m] !== M && c(D, m, M, {
      name: V
    }), g[C] = M, Y;
  }, li;
}
var eu, ru;
function Qc() {
  return ru || (ru = 1, eu = function(i, t) {
    return {
      value: i,
      done: t
    };
  }), eu;
}
var fi, nu;
function Nh() {
  if (nu) return fi;
  nu = 1;
  var i = de(), t = Yc(), e = we(), r = De(), n = Gt().f, a = Gc(), s = Qc(), o = It(), u = Et(), h = "Array Iterator", c = r.set, f = r.getterFor(h);
  fi = a(Array, "Array", function(l, d) {
    c(this, {
      type: h,
      target: i(l),
      // target
      index: 0,
      // next index
      kind: d
      // kind
    });
  }, function() {
    var l = f(this), d = l.target, p = l.index++;
    if (!d || p >= d.length) return l.target = null, s(void 0, !0);
    switch (l.kind) {
      case "keys":
        return s(p, !1);
      case "values":
        return s(d[p], !1);
    }
    return s([p, d[p]], !1);
  }, "values");
  var g = e.Arguments = e.Array;
  if (t("keys"), t("values"), t("entries"), !o && u && g.name !== "values") try {
    n(g, "name", {
      value: "values"
    });
  } catch {
  }
  return fi;
}
Nh();
var iu = {}, au, su;
function $c() {
  return su || (su = 1, au = {
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
  }), au;
}
var gi, ou;
function Zc() {
  if (ou) return gi;
  ou = 1;
  var i = Re(), t = i("span").classList, e = t && t.constructor && t.constructor.prototype;
  return gi = e === Object.prototype ? void 0 : e, gi;
}
var uu;
function Kc() {
  if (uu) return iu;
  uu = 1;
  var i = $(), t = $c(), e = Zc(), r = Nh(), n = me(), a = Be(), s = it(), o = s("iterator"), u = r.values, h = function(f, g) {
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
  return h(e, "DOMTokenList"), iu;
}
Kc();
function Jc(i, t) {
  if (Si(i) != "object" || !i) return i;
  var e = i[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(i, t);
    if (Si(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(i);
}
function tl(i) {
  var t = Jc(i, "string");
  return Si(t) == "symbol" ? t : t + "";
}
function Gi(i, t, e) {
  return (t = tl(t)) in i ? Object.defineProperty(i, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : i[t] = e, i;
}
var hu = {}, pi, cu;
function el() {
  if (cu) return pi;
  cu = 1;
  var i = zt(), t = ke(), e = nh(), r = Li(), n = TypeError, a = "Reduce of empty array with no initial value", s = function(o) {
    return function(u, h, c, f) {
      var g = t(u), l = e(g), d = r(g);
      if (i(h), d === 0 && c < 2) throw new n(a);
      var p = o ? d - 1 : 0, v = o ? -1 : 1;
      if (c < 2) for (; ; ) {
        if (p in l) {
          f = l[p], p += v;
          break;
        }
        if (p += v, o ? p < 0 : d <= p) throw new n(a);
      }
      for (; o ? p >= 0 : d > p; p += v) p in l && (f = h(f, l[p], p, g));
      return f;
    };
  };
  return pi = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: s(!1),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: s(!0)
  }, pi;
}
var di, lu;
function Vh() {
  if (lu) return di;
  lu = 1;
  var i = K();
  return di = function(t, e) {
    var r = [][t];
    return !!r && i(function() {
      r.call(null, e || function() {
        return 1;
      }, 1);
    });
  }, di;
}
var fu;
function rl() {
  if (fu) return hu;
  fu = 1;
  var i = ht(), t = el().left, e = Vh(), r = Mi(), n = Fe(), a = !n && r > 79 && r < 83, s = a || !e("reduce");
  return i({
    target: "Array",
    proto: !0,
    forced: s
  }, {
    reduce: function(o) {
      var u = arguments.length;
      return t(this, o, u, u > 1 ? arguments[1] : void 0);
    }
  }), hu;
}
rl();
var gu = {}, pu;
function nl() {
  if (pu) return gu;
  pu = 1;
  var i = ht(), t = ze(), e = _e().f, r = se(), n = kt(), a = Wi(), s = Ct(), o = qi(), u = It(), h = t("".slice), c = Math.min, f = o("endsWith"), g = !u && !f && !!function() {
    var l = e(String.prototype, "endsWith");
    return l && !l.writable;
  }();
  return i({
    target: "String",
    proto: !0,
    forced: !g && !f
  }, {
    endsWith: function(l) {
      var d = n(s(this));
      a(l);
      var p = arguments.length > 1 ? arguments[1] : void 0, v = d.length, y = p === void 0 ? v : c(r(p), v), m = n(l);
      return h(d, y - m.length, y) === m;
    }
  }), gu;
}
nl();
var du = {}, vu;
function il() {
  if (vu) return du;
  vu = 1;
  var i = at(), t = J(), e = Ui(), r = ut(), n = dt(), a = Ct(), s = mh(), o = Hi(), u = se(), h = kt(), c = ae(), f = Yi(), g = Ch(), l = K(), d = g.UNSUPPORTED_Y, p = 4294967295, v = Math.min, y = t([].push), m = t("".slice), x = !l(function() {
    var O = /(?:)/, w = O.exec;
    O.exec = function() {
      return w.apply(this, arguments);
    };
    var T = "ab".split(O);
    return T.length !== 2 || T[0] !== "a" || T[1] !== "b";
  }), b = "abbc".split(/(b)*/)[1] === "c" || // eslint-disable-next-line regexp/no-empty-group -- required for testing
  "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
  ".".split(/()()/).length > 1 || "".split(/.?/).length;
  return e("split", function(O, w, T) {
    var C = "0".split(void 0, 0).length ? function(P, R) {
      return P === void 0 && R === 0 ? [] : i(w, this, P, R);
    } : w;
    return [
      // `String.prototype.split` method
      // https://tc39.es/ecma262/#sec-string.prototype.split
      function(P, R) {
        var V = a(this), I = n(P) ? c(P, O) : void 0;
        return I ? i(I, P, V, R) : i(C, h(V), P, R);
      },
      // `RegExp.prototype[@@split]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function(P, R) {
        var V = r(this), I = h(P);
        if (!b) {
          var N = T(C, V, I, R, C !== w);
          if (N.done) return N.value;
        }
        var E = s(V, RegExp), L = V.unicode, U = (V.ignoreCase ? "i" : "") + (V.multiline ? "m" : "") + (V.unicode ? "u" : "") + (d ? "g" : "y"), D = new E(d ? "^(?:" + V.source + ")" : V, U), j = R === void 0 ? p : R >>> 0;
        if (j === 0) return [];
        if (I.length === 0) return f(D, I) === null ? [I] : [];
        for (var M = 0, k = 0, B = []; k < I.length; ) {
          D.lastIndex = d ? 0 : k;
          var Y = f(D, d ? m(I, k) : I), Q;
          if (Y === null || (Q = v(u(D.lastIndex + (d ? k : 0)), I.length)) === M) k = o(I, k, L);
          else {
            if (y(B, m(I, M, k)), B.length === j) return B;
            for (var q = 1; q <= Y.length - 1; q++) if (y(B, Y[q]), B.length === j) return B;
            k = M = Q;
          }
        }
        return y(B, m(I, M)), B;
      }
    ];
  }, b || !x, d), du;
}
il();
var ge = {
  exports: {}
}, ne = {
  exports: {}
}, al = ne.exports, mu;
function sl() {
  return mu || (mu = 1, (function() {
    var i, t, e, r, n, a;
    typeof performance < "u" && performance !== null && performance.now ? ne.exports = function() {
      return performance.now();
    } : typeof process < "u" && process !== null && process.hrtime ? (ne.exports = function() {
      return (i() - n) / 1e6;
    }, t = process.hrtime, i = function() {
      var s;
      return s = t(), s[0] * 1e9 + s[1];
    }, r = i(), a = process.uptime() * 1e9, n = r - a) : Date.now ? (ne.exports = function() {
      return Date.now() - e;
    }, e = Date.now()) : (ne.exports = function() {
      return (/* @__PURE__ */ new Date()).getTime() - e;
    }, e = (/* @__PURE__ */ new Date()).getTime());
  }).call(al)), ne.exports;
}
var yu;
function ol() {
  if (yu) return ge.exports;
  yu = 1;
  for (var i = sl(), t = typeof window > "u" ? Ti : window, e = ["moz", "webkit"], r = "AnimationFrame", n = t["request" + r], a = t["cancel" + r] || t["cancelRequest" + r], s = 0; !n && s < e.length; s++) n = t[e[s] + "Request" + r], a = t[e[s] + "Cancel" + r] || t[e[s] + "CancelRequest" + r];
  if (!n || !a) {
    var o = 0, u = 0, h = [], c = 1e3 / 60;
    n = function(f) {
      if (h.length === 0) {
        var g = i(), l = Math.max(0, c - (g - o));
        o = l + g, setTimeout(function() {
          var d = h.slice(0);
          h.length = 0;
          for (var p = 0; p < d.length; p++) if (!d[p].cancelled) try {
            d[p].callback(o);
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
  return ge.exports = function(f) {
    return n.call(t, f);
  }, ge.exports.cancel = function() {
    a.apply(t, arguments);
  }, ge.exports.polyfill = function(f) {
    f || (f = t), f.requestAnimationFrame = n, f.cancelAnimationFrame = a;
  }, ge.exports;
}
var ul = ol();
const vi = /* @__PURE__ */ rh(ul);
var xu = {}, bu, wu;
function Ih() {
  return wu || (wu = 1, bu = `	
\v\f\r                　\u2028\u2029\uFEFF`), bu;
}
var mi, Su;
function hl() {
  if (Su) return mi;
  Su = 1;
  var i = J(), t = Ct(), e = kt(), r = Ih(), n = i("".replace), a = RegExp("^[" + r + "]+"), s = RegExp("(^|[^" + r + "])[" + r + "]+$"), o = function(u) {
    return function(h) {
      var c = e(t(h));
      return u & 1 && (c = n(c, a, "")), u & 2 && (c = n(c, s, "$1")), c;
    };
  };
  return mi = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: o(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: o(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: o(3)
  }, mi;
}
var yi, Tu;
function cl() {
  if (Tu) return yi;
  Tu = 1;
  var i = Le().PROPER, t = K(), e = Ih(), r = "​᠎";
  return yi = function(n) {
    return t(function() {
      return !!e[n]() || r[n]() !== r || i && e[n].name !== n;
    });
  }, yi;
}
var Ou;
function ll() {
  if (Ou) return xu;
  Ou = 1;
  var i = ht(), t = hl().trim, e = cl();
  return i({
    target: "String",
    proto: !0,
    forced: e("trim")
  }, {
    trim: function() {
      return t(this);
    }
  }), xu;
}
ll();
var Au, Eu;
function fl() {
  return Eu || (Eu = 1, Au = function(i) {
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
        var d = document.createElement("li"), p = new RGBColor(u[h]), v = document.createElement("div");
        v.style.cssText = "margin: 3px; border: 1px solid black; background:" + p.toHex() + "; color:" + p.toHex(), v.appendChild(document.createTextNode("test"));
        var y = document.createTextNode(" " + u[h] + " -> " + p.toRGB() + " -> " + p.toHex());
        d.appendChild(v), d.appendChild(y), l.appendChild(d);
      } catch {
      }
      return l;
    };
  }), Au;
}
var gl = fl();
const Oi = /* @__PURE__ */ rh(gl);
var Cu = {}, Pu;
function pl() {
  if (Pu) return Cu;
  Pu = 1;
  var i = ht(), t = ze(), e = fh().indexOf, r = Vh(), n = t([].indexOf), a = !!n && 1 / n([1], 1, -0) < 0, s = a || !r("indexOf");
  return i({
    target: "Array",
    proto: !0,
    forced: s
  }, {
    indexOf: function(o) {
      var u = arguments.length > 1 ? arguments[1] : void 0;
      return a ? n(this, o, u) || 0 : e(this, o, u);
    }
  }), Cu;
}
pl();
var Mu = {}, Nu;
function dl() {
  if (Nu) return Mu;
  Nu = 1;
  var i = ht(), t = J(), e = Wi(), r = Ct(), n = kt(), a = qi(), s = t("".indexOf);
  return i({
    target: "String",
    proto: !0,
    forced: !a("includes")
  }, {
    includes: function(o) {
      return !!~s(n(r(this)), n(e(o)), arguments.length > 1 ? arguments[1] : void 0);
    }
  }), Mu;
}
dl();
var Vu = {}, xi, Iu;
function vl() {
  if (Iu) return xi;
  Iu = 1;
  var i = Jt();
  return xi = Array.isArray || function(t) {
    return i(t) === "Array";
  }, xi;
}
var ku;
function ml() {
  if (ku) return Vu;
  ku = 1;
  var i = ht(), t = J(), e = vl(), r = t([].reverse), n = [1, 2];
  return i({
    target: "Array",
    proto: !0,
    forced: String(n) === String(n.reverse())
  }, {
    reverse: function() {
      return e(this) && (this.length = this.length), r(this);
    }
  }), Vu;
}
ml();
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
var kh = function(i, t) {
  return (kh = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(e, r) {
    e.__proto__ = r;
  } || function(e, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  })(i, t);
};
function Rh(i, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  function e() {
    this.constructor = i;
  }
  kh(i, t), i.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
}
function yl(i) {
  var t = "";
  Array.isArray(i) || (i = [i]);
  for (var e = 0; e < i.length; e++) {
    var r = i[e];
    if (r.type === S.CLOSE_PATH) t += "z";
    else if (r.type === S.HORIZ_LINE_TO) t += (r.relative ? "h" : "H") + r.x;
    else if (r.type === S.VERT_LINE_TO) t += (r.relative ? "v" : "V") + r.y;
    else if (r.type === S.MOVE_TO) t += (r.relative ? "m" : "M") + r.x + " " + r.y;
    else if (r.type === S.LINE_TO) t += (r.relative ? "l" : "L") + r.x + " " + r.y;
    else if (r.type === S.CURVE_TO) t += (r.relative ? "c" : "C") + r.x1 + " " + r.y1 + " " + r.x2 + " " + r.y2 + " " + r.x + " " + r.y;
    else if (r.type === S.SMOOTH_CURVE_TO) t += (r.relative ? "s" : "S") + r.x2 + " " + r.y2 + " " + r.x + " " + r.y;
    else if (r.type === S.QUAD_TO) t += (r.relative ? "q" : "Q") + r.x1 + " " + r.y1 + " " + r.x + " " + r.y;
    else if (r.type === S.SMOOTH_QUAD_TO) t += (r.relative ? "t" : "T") + r.x + " " + r.y;
    else {
      if (r.type !== S.ARC) throw new Error('Unexpected command type "' + r.type + '" at index ' + e + ".");
      t += (r.relative ? "a" : "A") + r.rX + " " + r.rY + " " + r.xRot + " " + +r.lArcFlag + " " + +r.sweepFlag + " " + r.x + " " + r.y;
    }
  }
  return t;
}
function Ai(i, t) {
  var e = i[0], r = i[1];
  return [e * Math.cos(t) - r * Math.sin(t), e * Math.sin(t) + r * Math.cos(t)];
}
function At() {
  for (var i = [], t = 0; t < arguments.length; t++) i[t] = arguments[t];
  for (var e = 0; e < i.length; e++) if (typeof i[e] != "number") throw new Error("assertNumbers arguments[" + e + "] is not a number. " + typeof i[e] + " == typeof " + i[e]);
  return !0;
}
var Yt = Math.PI;
function bi(i, t, e) {
  i.lArcFlag = i.lArcFlag === 0 ? 0 : 1, i.sweepFlag = i.sweepFlag === 0 ? 0 : 1;
  var r = i.rX, n = i.rY, a = i.x, s = i.y;
  r = Math.abs(i.rX), n = Math.abs(i.rY);
  var o = Ai([(t - a) / 2, (e - s) / 2], -i.xRot / 180 * Yt), u = o[0], h = o[1], c = Math.pow(u, 2) / Math.pow(r, 2) + Math.pow(h, 2) / Math.pow(n, 2);
  1 < c && (r *= Math.sqrt(c), n *= Math.sqrt(c)), i.rX = r, i.rY = n;
  var f = Math.pow(r, 2) * Math.pow(h, 2) + Math.pow(n, 2) * Math.pow(u, 2), g = (i.lArcFlag !== i.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(r, 2) * Math.pow(n, 2) - f) / f)), l = r * h / n * g, d = -n * u / r * g, p = Ai([l, d], i.xRot / 180 * Yt);
  i.cX = p[0] + (t + a) / 2, i.cY = p[1] + (e + s) / 2, i.phi1 = Math.atan2((h - d) / n, (u - l) / r), i.phi2 = Math.atan2((-h - d) / n, (-u - l) / r), i.sweepFlag === 0 && i.phi2 > i.phi1 && (i.phi2 -= 2 * Yt), i.sweepFlag === 1 && i.phi2 < i.phi1 && (i.phi2 += 2 * Yt), i.phi1 *= 180 / Yt, i.phi2 *= 180 / Yt;
}
function Ru(i, t, e) {
  At(i, t, e);
  var r = i * i + t * t - e * e;
  if (0 > r) return [];
  if (r === 0) return [[i * e / (i * i + t * t), t * e / (i * i + t * t)]];
  var n = Math.sqrt(r);
  return [[(i * e + t * n) / (i * i + t * t), (t * e - i * n) / (i * i + t * t)], [(i * e - t * n) / (i * i + t * t), (t * e + i * n) / (i * i + t * t)]];
}
var nt, jt = Math.PI / 180;
function _u(i, t, e) {
  return (1 - e) * i + e * t;
}
function Lu(i, t, e, r) {
  return i + Math.cos(r / 180 * Yt) * t + Math.sin(r / 180 * Yt) * e;
}
function Du(i, t, e, r) {
  var n = 1e-6, a = t - i, s = e - t, o = 3 * a + 3 * (r - e) - 6 * s, u = 6 * (s - a), h = 3 * a;
  return Math.abs(o) < n ? [-h / u] : function(c, f, g) {
    var l = c * c / 4 - f;
    if (l < -g) return [];
    if (l <= g) return [-c / 2];
    var d = Math.sqrt(l);
    return [-c / 2 - d, -c / 2 + d];
  }(u / o, h / o, n);
}
function ju(i, t, e, r, n) {
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
      return f.type & S.SMOOTH_CURVE_TO && (f.type = S.CURVE_TO, o = isNaN(o) ? g : o, u = isNaN(u) ? l : u, f.x1 = f.relative ? g - o : 2 * g - o, f.y1 = f.relative ? l - u : 2 * l - u), f.type & S.CURVE_TO ? (o = f.relative ? g + f.x2 : f.x2, u = f.relative ? l + f.y2 : f.y2) : (o = NaN, u = NaN), f.type & S.SMOOTH_QUAD_TO && (f.type = S.QUAD_TO, h = isNaN(h) ? g : h, c = isNaN(c) ? l : c, f.x1 = f.relative ? g - h : 2 * g - h, f.y1 = f.relative ? l - c : 2 * l - c), f.type & S.QUAD_TO ? (h = f.relative ? g + f.x1 : f.x1, c = f.relative ? l + f.y1 : f.y1) : (h = NaN, c = NaN), f;
    });
  }
  function r() {
    var o = NaN, u = NaN;
    return n(function(h, c, f) {
      if (h.type & S.SMOOTH_QUAD_TO && (h.type = S.QUAD_TO, o = isNaN(o) ? c : o, u = isNaN(u) ? f : u, h.x1 = h.relative ? c - o : 2 * c - o, h.y1 = h.relative ? f - u : 2 * f - u), h.type & S.QUAD_TO) {
        o = h.relative ? c + h.x1 : h.x1, u = h.relative ? f + h.y1 : h.y1;
        var g = h.x1, l = h.y1;
        h.type = S.CURVE_TO, h.x1 = ((h.relative ? 0 : c) + 2 * g) / 3, h.y1 = ((h.relative ? 0 : f) + 2 * l) / 3, h.x2 = (h.x + 2 * g) / 3, h.y2 = (h.y + 2 * l) / 3;
      } else o = NaN, u = NaN;
      return h;
    });
  }
  function n(o) {
    var u = 0, h = 0, c = NaN, f = NaN;
    return function(g) {
      if (isNaN(c) && !(g.type & S.MOVE_TO)) throw new Error("path must start with moveto");
      var l = o(g, u, h, c, f);
      return g.type & S.CLOSE_PATH && (u = c, h = f), g.x !== void 0 && (u = g.relative ? u + g.x : g.x), g.y !== void 0 && (h = g.relative ? h + g.y : g.y), g.type & S.MOVE_TO && (c = u, f = h), l;
    };
  }
  function a(o, u, h, c, f, g) {
    return At(o, u, h, c, f, g), n(function(l, d, p, v) {
      var y = l.x1, m = l.x2, x = l.relative && !isNaN(v), b = l.x !== void 0 ? l.x : x ? 0 : d, O = l.y !== void 0 ? l.y : x ? 0 : p;
      function w(Y) {
        return Y * Y;
      }
      l.type & S.HORIZ_LINE_TO && u !== 0 && (l.type = S.LINE_TO, l.y = l.relative ? 0 : p), l.type & S.VERT_LINE_TO && h !== 0 && (l.type = S.LINE_TO, l.x = l.relative ? 0 : d), l.x !== void 0 && (l.x = l.x * o + O * h + (x ? 0 : f)), l.y !== void 0 && (l.y = b * u + l.y * c + (x ? 0 : g)), l.x1 !== void 0 && (l.x1 = l.x1 * o + l.y1 * h + (x ? 0 : f)), l.y1 !== void 0 && (l.y1 = y * u + l.y1 * c + (x ? 0 : g)), l.x2 !== void 0 && (l.x2 = l.x2 * o + l.y2 * h + (x ? 0 : f)), l.y2 !== void 0 && (l.y2 = m * u + l.y2 * c + (x ? 0 : g));
      var T = o * c - u * h;
      if (l.xRot !== void 0 && (o !== 1 || u !== 0 || h !== 0 || c !== 1)) if (T === 0) delete l.rX, delete l.rY, delete l.xRot, delete l.lArcFlag, delete l.sweepFlag, l.type = S.LINE_TO;
      else {
        var C = l.xRot * Math.PI / 180, P = Math.sin(C), R = Math.cos(C), V = 1 / w(l.rX), I = 1 / w(l.rY), N = w(R) * V + w(P) * I, E = 2 * P * R * (V - I), L = w(P) * V + w(R) * I, U = N * c * c - E * u * c + L * u * u, D = E * (o * c + u * h) - 2 * (N * h * c + L * o * u), j = N * h * h - E * o * h + L * o * o, M = (Math.atan2(D, U - j) + Math.PI) % Math.PI / 2, k = Math.sin(M), B = Math.cos(M);
        l.rX = Math.abs(T) / Math.sqrt(U * w(B) + D * k * B + j * w(k)), l.rY = Math.abs(T) / Math.sqrt(U * w(k) - D * k * B + j * w(B)), l.xRot = 180 * M / Math.PI;
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
    return o === void 0 && (o = 1e13), At(o), function(h) {
      return h.x1 !== void 0 && (h.x1 = u(h.x1)), h.y1 !== void 0 && (h.y1 = u(h.y1)), h.x2 !== void 0 && (h.x2 = u(h.x2)), h.y2 !== void 0 && (h.y2 = u(h.y2)), h.x !== void 0 && (h.x = u(h.x)), h.y !== void 0 && (h.y = u(h.y)), h.rX !== void 0 && (h.rX = u(h.rX)), h.rY !== void 0 && (h.rY = u(h.rY)), h;
    };
  }, i.TO_ABS = t, i.TO_REL = function() {
    return n(function(o, u, h) {
      return o.relative || (o.x1 !== void 0 && (o.x1 -= u), o.y1 !== void 0 && (o.y1 -= h), o.x2 !== void 0 && (o.x2 -= u), o.y2 !== void 0 && (o.y2 -= h), o.x !== void 0 && (o.x -= u), o.y !== void 0 && (o.y -= h), o.relative = !0), o;
    });
  }, i.NORMALIZE_HVZ = function(o, u, h) {
    return o === void 0 && (o = !0), u === void 0 && (u = !0), h === void 0 && (h = !0), n(function(c, f, g, l, d) {
      if (isNaN(l) && !(c.type & S.MOVE_TO)) throw new Error("path must start with moveto");
      return u && c.type & S.HORIZ_LINE_TO && (c.type = S.LINE_TO, c.y = c.relative ? 0 : g), h && c.type & S.VERT_LINE_TO && (c.type = S.LINE_TO, c.x = c.relative ? 0 : f), o && c.type & S.CLOSE_PATH && (c.type = S.LINE_TO, c.x = c.relative ? l - f : l, c.y = c.relative ? d - g : d), c.type & S.ARC && (c.rX === 0 || c.rY === 0) && (c.type = S.LINE_TO, delete c.rX, delete c.rY, delete c.xRot, delete c.lArcFlag, delete c.sweepFlag), c;
    });
  }, i.NORMALIZE_ST = e, i.QT_TO_C = r, i.INFO = n, i.SANITIZE = function(o) {
    o === void 0 && (o = 0), At(o);
    var u = NaN, h = NaN, c = NaN, f = NaN;
    return n(function(g, l, d, p, v) {
      var y = Math.abs, m = !1, x = 0, b = 0;
      if (g.type & S.SMOOTH_CURVE_TO && (x = isNaN(u) ? 0 : l - u, b = isNaN(h) ? 0 : d - h), g.type & (S.CURVE_TO | S.SMOOTH_CURVE_TO) ? (u = g.relative ? l + g.x2 : g.x2, h = g.relative ? d + g.y2 : g.y2) : (u = NaN, h = NaN), g.type & S.SMOOTH_QUAD_TO ? (c = isNaN(c) ? l : 2 * l - c, f = isNaN(f) ? d : 2 * d - f) : g.type & S.QUAD_TO ? (c = g.relative ? l + g.x1 : g.x1, f = g.relative ? d + g.y1 : g.y2) : (c = NaN, f = NaN), g.type & S.LINE_COMMANDS || g.type & S.ARC && (g.rX === 0 || g.rY === 0 || !g.lArcFlag) || g.type & S.CURVE_TO || g.type & S.SMOOTH_CURVE_TO || g.type & S.QUAD_TO || g.type & S.SMOOTH_QUAD_TO) {
        var O = g.x === void 0 ? 0 : g.relative ? g.x : g.x - l, w = g.y === void 0 ? 0 : g.relative ? g.y : g.y - d;
        x = isNaN(c) ? g.x1 === void 0 ? x : g.relative ? g.x : g.x1 - l : c - l, b = isNaN(f) ? g.y1 === void 0 ? b : g.relative ? g.y : g.y1 - d : f - d;
        var T = g.x2 === void 0 ? 0 : g.relative ? g.x : g.x2 - l, C = g.y2 === void 0 ? 0 : g.relative ? g.y : g.y2 - d;
        y(O) <= o && y(w) <= o && y(x) <= o && y(b) <= o && y(T) <= o && y(C) <= o && (m = !0);
      }
      return g.type & S.CLOSE_PATH && y(l - p) <= o && y(d - v) <= o && (m = !0), m ? [] : g;
    });
  }, i.MATRIX = a, i.ROTATE = function(o, u, h) {
    u === void 0 && (u = 0), h === void 0 && (h = 0), At(o, u, h);
    var c = Math.sin(o), f = Math.cos(o);
    return a(f, c, -c, f, u - u * f + h * c, h - u * c - h * f);
  }, i.TRANSLATE = function(o, u) {
    return u === void 0 && (u = 0), At(o, u), a(1, 0, 0, 1, o, u);
  }, i.SCALE = function(o, u) {
    return u === void 0 && (u = o), At(o, u), a(o, 0, 0, u, 0, 0);
  }, i.SKEW_X = function(o) {
    return At(o), a(1, 0, Math.atan(o), 1, 0, 0);
  }, i.SKEW_Y = function(o) {
    return At(o), a(1, Math.atan(o), 0, 1, 0, 0);
  }, i.X_AXIS_SYMMETRY = function(o) {
    return o === void 0 && (o = 0), At(o), a(-1, 0, 0, 1, o, 0);
  }, i.Y_AXIS_SYMMETRY = function(o) {
    return o === void 0 && (o = 0), At(o), a(1, 0, 0, -1, 0, o);
  }, i.A_TO_C = function() {
    return n(function(o, u, h) {
      return S.ARC === o.type ? function(c, f, g) {
        var l, d, p, v;
        c.cX || bi(c, f, g);
        for (var y = Math.min(c.phi1, c.phi2), m = Math.max(c.phi1, c.phi2) - y, x = Math.ceil(m / 90), b = new Array(x), O = f, w = g, T = 0; T < x; T++) {
          var C = _u(c.phi1, c.phi2, T / x), P = _u(c.phi1, c.phi2, (T + 1) / x), R = P - C, V = 4 / 3 * Math.tan(R * jt / 4), I = [Math.cos(C * jt) - V * Math.sin(C * jt), Math.sin(C * jt) + V * Math.cos(C * jt)], N = I[0], E = I[1], L = [Math.cos(P * jt), Math.sin(P * jt)], U = L[0], D = L[1], j = [U + V * Math.sin(P * jt), D - V * Math.cos(P * jt)], M = j[0], k = j[1];
          b[T] = {
            relative: c.relative,
            type: S.CURVE_TO
          };
          var B = function(Y, Q) {
            var q = Ai([Y * c.rX, Q * c.rY], c.xRot), mt = q[0], xt = q[1];
            return [c.cX + mt, c.cY + xt];
          };
          l = B(N, E), b[T].x1 = l[0], b[T].y1 = l[1], d = B(M, k), b[T].x2 = d[0], b[T].y2 = d[1], p = B(U, D), b[T].x = p[0], b[T].y = p[1], c.relative && (b[T].x1 -= O, b[T].y1 -= w, b[T].x2 -= O, b[T].y2 -= w, b[T].x -= O, b[T].y -= w), O = (v = [b[T].x, b[T].y])[0], w = v[1];
        }
        return b;
      }(o, o.relative ? 0 : u, o.relative ? 0 : h) : o;
    });
  }, i.ANNOTATE_ARCS = function() {
    return n(function(o, u, h) {
      return o.relative && (u = 0, h = 0), S.ARC === o.type && bi(o, u, h), o;
    });
  }, i.CLONE = s, i.CALCULATE_BOUNDS = function() {
    var o = function(g) {
      var l = {};
      for (var d in g) l[d] = g[d];
      return l;
    }, u = t(), h = r(), c = e(), f = n(function(g, l, d) {
      var p = c(h(u(o(g))));
      function v(k) {
        k > f.maxX && (f.maxX = k), k < f.minX && (f.minX = k);
      }
      function y(k) {
        k > f.maxY && (f.maxY = k), k < f.minY && (f.minY = k);
      }
      if (p.type & S.DRAWING_COMMANDS && (v(l), y(d)), p.type & S.HORIZ_LINE_TO && v(p.x), p.type & S.VERT_LINE_TO && y(p.y), p.type & S.LINE_TO && (v(p.x), y(p.y)), p.type & S.CURVE_TO) {
        v(p.x), y(p.y);
        for (var m = 0, x = Du(l, p.x1, p.x2, p.x); m < x.length; m++) 0 < (M = x[m]) && 1 > M && v(ju(l, p.x1, p.x2, p.x, M));
        for (var b = 0, O = Du(d, p.y1, p.y2, p.y); b < O.length; b++) 0 < (M = O[b]) && 1 > M && y(ju(d, p.y1, p.y2, p.y, M));
      }
      if (p.type & S.ARC) {
        v(p.x), y(p.y), bi(p, l, d);
        for (var w = p.xRot / 180 * Math.PI, T = Math.cos(w) * p.rX, C = Math.sin(w) * p.rX, P = -Math.sin(w) * p.rY, R = Math.cos(w) * p.rY, V = p.phi1 < p.phi2 ? [p.phi1, p.phi2] : -180 > p.phi2 ? [p.phi2 + 360, p.phi1 + 360] : [p.phi2, p.phi1], I = V[0], N = V[1], E = function(k) {
          var B = k[0], Y = k[1], Q = 180 * Math.atan2(Y, B) / Math.PI;
          return Q < I ? Q + 360 : Q;
        }, L = 0, U = Ru(P, -T, 0).map(E); L < U.length; L++) (M = U[L]) > I && M < N && v(Lu(p.cX, T, P, M));
        for (var D = 0, j = Ru(R, -C, 0).map(E); D < j.length; D++) {
          var M;
          (M = j[D]) > I && M < N && y(Lu(p.cY, C, R, M));
        }
      }
      return g;
    });
    return f.minX = 1 / 0, f.maxX = -1 / 0, f.minY = 1 / 0, f.maxY = -1 / 0, f;
  };
})(nt || (nt = {}));
var Ot, _h = function() {
  function i() {
  }
  return i.prototype.round = function(t) {
    return this.transform(nt.ROUND(t));
  }, i.prototype.toAbs = function() {
    return this.transform(nt.TO_ABS());
  }, i.prototype.toRel = function() {
    return this.transform(nt.TO_REL());
  }, i.prototype.normalizeHVZ = function(t, e, r) {
    return this.transform(nt.NORMALIZE_HVZ(t, e, r));
  }, i.prototype.normalizeST = function() {
    return this.transform(nt.NORMALIZE_ST());
  }, i.prototype.qtToC = function() {
    return this.transform(nt.QT_TO_C());
  }, i.prototype.aToC = function() {
    return this.transform(nt.A_TO_C());
  }, i.prototype.sanitize = function(t) {
    return this.transform(nt.SANITIZE(t));
  }, i.prototype.translate = function(t, e) {
    return this.transform(nt.TRANSLATE(t, e));
  }, i.prototype.scale = function(t, e) {
    return this.transform(nt.SCALE(t, e));
  }, i.prototype.rotate = function(t, e, r) {
    return this.transform(nt.ROTATE(t, e, r));
  }, i.prototype.matrix = function(t, e, r, n, a, s) {
    return this.transform(nt.MATRIX(t, e, r, n, a, s));
  }, i.prototype.skewX = function(t) {
    return this.transform(nt.SKEW_X(t));
  }, i.prototype.skewY = function(t) {
    return this.transform(nt.SKEW_Y(t));
  }, i.prototype.xSymmetry = function(t) {
    return this.transform(nt.X_AXIS_SYMMETRY(t));
  }, i.prototype.ySymmetry = function(t) {
    return this.transform(nt.Y_AXIS_SYMMETRY(t));
  }, i.prototype.annotateArcs = function() {
    return this.transform(nt.ANNOTATE_ARCS());
  }, i;
}(), xl = function(i) {
  return i === " " || i === "	" || i === "\r" || i === `
`;
}, Fu = function(i) {
  return 48 <= i.charCodeAt(0) && i.charCodeAt(0) <= 57;
}, bl = function(i) {
  function t() {
    var e = i.call(this) || this;
    return e.curNumber = "", e.curCommandType = -1, e.curCommandRelative = !1, e.canParseCommandOrComma = !0, e.curNumberHasExp = !1, e.curNumberHasExpDigits = !1, e.curNumberHasDecimal = !1, e.curArgs = [], e;
  }
  return Rh(t, i), t.prototype.finish = function(e) {
    if (e === void 0 && (e = []), this.parse(" ", e), this.curArgs.length !== 0 || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
    return e;
  }, t.prototype.parse = function(e, r) {
    var n = this;
    r === void 0 && (r = []);
    for (var a = function(f) {
      r.push(f), n.curArgs.length = 0, n.canParseCommandOrComma = !0;
    }, s = 0; s < e.length; s++) {
      var o = e[s], u = !(this.curCommandType !== S.ARC || this.curArgs.length !== 3 && this.curArgs.length !== 4 || this.curNumber.length !== 1 || this.curNumber !== "0" && this.curNumber !== "1"), h = Fu(o) && (this.curNumber === "0" && o === "0" || u);
      if (!Fu(o) || h)
        if (o !== "e" && o !== "E")
          if (o !== "-" && o !== "+" || !this.curNumberHasExp || this.curNumberHasExpDigits)
            if (o !== "." || this.curNumberHasExp || this.curNumberHasDecimal || u) {
              if (this.curNumber && this.curCommandType !== -1) {
                var c = Number(this.curNumber);
                if (isNaN(c)) throw new SyntaxError("Invalid number ending at " + s);
                if (this.curCommandType === S.ARC) {
                  if (this.curArgs.length === 0 || this.curArgs.length === 1) {
                    if (0 > c) throw new SyntaxError('Expected positive number, got "' + c + '" at index "' + s + '"');
                  } else if ((this.curArgs.length === 3 || this.curArgs.length === 4) && this.curNumber !== "0" && this.curNumber !== "1") throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + s + '"');
                }
                this.curArgs.push(c), this.curArgs.length === wl[this.curCommandType] && (S.HORIZ_LINE_TO === this.curCommandType ? a({
                  type: S.HORIZ_LINE_TO,
                  relative: this.curCommandRelative,
                  x: c
                }) : S.VERT_LINE_TO === this.curCommandType ? a({
                  type: S.VERT_LINE_TO,
                  relative: this.curCommandRelative,
                  y: c
                }) : this.curCommandType === S.MOVE_TO || this.curCommandType === S.LINE_TO || this.curCommandType === S.SMOOTH_QUAD_TO ? (a({
                  type: this.curCommandType,
                  relative: this.curCommandRelative,
                  x: this.curArgs[0],
                  y: this.curArgs[1]
                }), S.MOVE_TO === this.curCommandType && (this.curCommandType = S.LINE_TO)) : this.curCommandType === S.CURVE_TO ? a({
                  type: S.CURVE_TO,
                  relative: this.curCommandRelative,
                  x1: this.curArgs[0],
                  y1: this.curArgs[1],
                  x2: this.curArgs[2],
                  y2: this.curArgs[3],
                  x: this.curArgs[4],
                  y: this.curArgs[5]
                }) : this.curCommandType === S.SMOOTH_CURVE_TO ? a({
                  type: S.SMOOTH_CURVE_TO,
                  relative: this.curCommandRelative,
                  x2: this.curArgs[0],
                  y2: this.curArgs[1],
                  x: this.curArgs[2],
                  y: this.curArgs[3]
                }) : this.curCommandType === S.QUAD_TO ? a({
                  type: S.QUAD_TO,
                  relative: this.curCommandRelative,
                  x1: this.curArgs[0],
                  y1: this.curArgs[1],
                  x: this.curArgs[2],
                  y: this.curArgs[3]
                }) : this.curCommandType === S.ARC && a({
                  type: S.ARC,
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
              if (!xl(o)) if (o === "," && this.canParseCommandOrComma) this.canParseCommandOrComma = !1;
              else if (o !== "+" && o !== "-" && o !== ".")
                if (h) this.curNumber = o, this.curNumberHasDecimal = !1;
                else {
                  if (this.curArgs.length !== 0) throw new SyntaxError("Unterminated command at index " + s + ".");
                  if (!this.canParseCommandOrComma) throw new SyntaxError('Unexpected character "' + o + '" at index ' + s + ". Command cannot follow comma");
                  if (this.canParseCommandOrComma = !1, o !== "z" && o !== "Z")
                    if (o === "h" || o === "H") this.curCommandType = S.HORIZ_LINE_TO, this.curCommandRelative = o === "h";
                    else if (o === "v" || o === "V") this.curCommandType = S.VERT_LINE_TO, this.curCommandRelative = o === "v";
                    else if (o === "m" || o === "M") this.curCommandType = S.MOVE_TO, this.curCommandRelative = o === "m";
                    else if (o === "l" || o === "L") this.curCommandType = S.LINE_TO, this.curCommandRelative = o === "l";
                    else if (o === "c" || o === "C") this.curCommandType = S.CURVE_TO, this.curCommandRelative = o === "c";
                    else if (o === "s" || o === "S") this.curCommandType = S.SMOOTH_CURVE_TO, this.curCommandRelative = o === "s";
                    else if (o === "q" || o === "Q") this.curCommandType = S.QUAD_TO, this.curCommandRelative = o === "q";
                    else if (o === "t" || o === "T") this.curCommandType = S.SMOOTH_QUAD_TO, this.curCommandRelative = o === "t";
                    else {
                      if (o !== "a" && o !== "A") throw new SyntaxError('Unexpected character "' + o + '" at index ' + s + ".");
                      this.curCommandType = S.ARC, this.curCommandRelative = o === "a";
                    }
                  else r.push({
                    type: S.CLOSE_PATH
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
}(_h), S = function(i) {
  function t(e) {
    var r = i.call(this) || this;
    return r.commands = typeof e == "string" ? t.parse(e) : e, r;
  }
  return Rh(t, i), t.prototype.encode = function() {
    return t.encode(this.commands);
  }, t.prototype.getBounds = function() {
    var e = nt.CALCULATE_BOUNDS();
    return this.transform(e), e;
  }, t.prototype.transform = function(e) {
    for (var r = [], n = 0, a = this.commands; n < a.length; n++) {
      var s = e(a[n]);
      Array.isArray(s) ? r.push.apply(r, s) : r.push(s);
    }
    return this.commands = r, this;
  }, t.encode = function(e) {
    return yl(e);
  }, t.parse = function(e) {
    var r = new bl(), n = [];
    return r.parse(e, n), r.finish(n), n;
  }, t.CLOSE_PATH = 1, t.MOVE_TO = 2, t.HORIZ_LINE_TO = 4, t.VERT_LINE_TO = 8, t.LINE_TO = 16, t.CURVE_TO = 32, t.SMOOTH_CURVE_TO = 64, t.QUAD_TO = 128, t.SMOOTH_QUAD_TO = 256, t.ARC = 512, t.LINE_COMMANDS = t.LINE_TO | t.HORIZ_LINE_TO | t.VERT_LINE_TO, t.DRAWING_COMMANDS = t.HORIZ_LINE_TO | t.VERT_LINE_TO | t.LINE_TO | t.CURVE_TO | t.SMOOTH_CURVE_TO | t.QUAD_TO | t.SMOOTH_QUAD_TO | t.ARC, t;
}(_h), wl = ((Ot = {})[S.MOVE_TO] = 2, Ot[S.LINE_TO] = 2, Ot[S.HORIZ_LINE_TO] = 1, Ot[S.VERT_LINE_TO] = 1, Ot[S.CLOSE_PATH] = 0, Ot[S.QUAD_TO] = 4, Ot[S.SMOOTH_QUAD_TO] = 2, Ot[S.CURVE_TO] = 6, Ot[S.SMOOTH_CURVE_TO] = 4, Ot[S.ARC] = 7, Ot), Bu = {}, zu;
function Sl() {
  if (zu) return Bu;
  zu = 1;
  var i = Le().PROPER, t = ee(), e = ut(), r = kt(), n = K(), a = Xi(), s = "toString", o = RegExp.prototype, u = o[s], h = n(function() {
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
  }), Bu;
}
Sl();
function Pe(i) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Pe = function(t) {
    return typeof t;
  } : Pe = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pe(i);
}
function Tl(i, t) {
  if (!(i instanceof t)) throw new TypeError("Cannot call a class as a function");
}
var Ol = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259], Al = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
function El(i, t, e, r, n) {
  if (typeof i == "string" && (i = document.getElementById(i)), !i || Pe(i) !== "object" || !("getContext" in i)) throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
  var a = i.getContext("2d");
  try {
    return a.getImageData(t, e, r, n);
  } catch (s) {
    throw new Error("unable to access image data: " + s);
  }
}
function Cl(i, t, e, r, n, a) {
  if (!(isNaN(a) || a < 1)) {
    a |= 0;
    var s = El(i, t, e, r, n);
    s = Pl(s, t, e, r, n, a), i.getContext("2d").putImageData(s, t, e);
  }
}
function Pl(i, t, e, r, n, a) {
  for (var s = i.data, o = 2 * a + 1, u = r - 1, h = n - 1, c = a + 1, f = c * (c + 1) / 2, g = new Uu(), l = g, d, p = 1; p < o; p++) l = l.next = new Uu(), p === c && (d = l);
  l.next = g;
  for (var v = null, y = null, m = 0, x = 0, b = Ol[a], O = Al[a], w = 0; w < n; w++) {
    l = g;
    for (var T = s[x], C = s[x + 1], P = s[x + 2], R = s[x + 3], V = 0; V < c; V++) l.r = T, l.g = C, l.b = P, l.a = R, l = l.next;
    for (var I = 0, N = 0, E = 0, L = 0, U = c * T, D = c * C, j = c * P, M = c * R, k = f * T, B = f * C, Y = f * P, Q = f * R, q = 1; q < c; q++) {
      var mt = x + ((u < q ? u : q) << 2), xt = s[mt], st = s[mt + 1], Ut = s[mt + 2], Ht = s[mt + 3], ct = c - q;
      k += (l.r = xt) * ct, B += (l.g = st) * ct, Y += (l.b = Ut) * ct, Q += (l.a = Ht) * ct, I += xt, N += st, E += Ut, L += Ht, l = l.next;
    }
    v = g, y = d;
    for (var Nt = 0; Nt < r; Nt++) {
      var Vt = Q * b >>> O;
      if (s[x + 3] = Vt, Vt !== 0) {
        var yt = 255 / Vt;
        s[x] = (k * b >>> O) * yt, s[x + 1] = (B * b >>> O) * yt, s[x + 2] = (Y * b >>> O) * yt;
      } else s[x] = s[x + 1] = s[x + 2] = 0;
      k -= U, B -= D, Y -= j, Q -= M, U -= v.r, D -= v.g, j -= v.b, M -= v.a;
      var lt = Nt + a + 1;
      lt = m + (lt < u ? lt : u) << 2, I += v.r = s[lt], N += v.g = s[lt + 1], E += v.b = s[lt + 2], L += v.a = s[lt + 3], k += I, B += N, Y += E, Q += L, v = v.next;
      var bt = y, Rt = bt.r, _t = bt.g, Qt = bt.b, ue = bt.a;
      U += Rt, D += _t, j += Qt, M += ue, I -= Rt, N -= _t, E -= Qt, L -= ue, y = y.next, x += 4;
    }
    m += r;
  }
  for (var Xt = 0; Xt < r; Xt++) {
    x = Xt << 2;
    var ft = s[x], gt = s[x + 1], wt = s[x + 2], A = s[x + 3], F = c * ft, H = c * gt, X = c * wt, Z = c * A, Lt = f * ft, Dt = f * gt, St = f * wt, Tt = f * A;
    l = g;
    for (var he = 0; he < c; he++) l.r = ft, l.g = gt, l.b = wt, l.a = A, l = l.next;
    for (var ce = r, le = 0, qe = 0, Ge = 0, Qe = 0, Te = 1; Te <= a; Te++) {
      x = ce + Xt << 2;
      var Oe = c - Te;
      Lt += (l.r = ft = s[x]) * Oe, Dt += (l.g = gt = s[x + 1]) * Oe, St += (l.b = wt = s[x + 2]) * Oe, Tt += (l.a = A = s[x + 3]) * Oe, Qe += ft, le += gt, qe += wt, Ge += A, l = l.next, Te < h && (ce += r);
    }
    x = Xt, v = g, y = d;
    for (var $e = 0; $e < n; $e++) {
      var pt = x << 2;
      s[pt + 3] = A = Tt * b >>> O, A > 0 ? (A = 255 / A, s[pt] = (Lt * b >>> O) * A, s[pt + 1] = (Dt * b >>> O) * A, s[pt + 2] = (St * b >>> O) * A) : s[pt] = s[pt + 1] = s[pt + 2] = 0, Lt -= F, Dt -= H, St -= X, Tt -= Z, F -= v.r, H -= v.g, X -= v.b, Z -= v.a, pt = Xt + ((pt = $e + c) < h ? pt : h) * r << 2, Lt += Qe += v.r = s[pt], Dt += le += v.g = s[pt + 1], St += qe += v.b = s[pt + 2], Tt += Ge += v.a = s[pt + 3], v = v.next, F += ft = y.r, H += gt = y.g, X += wt = y.b, Z += A = y.a, Qe -= ft, le -= gt, qe -= wt, Ge -= A, y = y.next, x += r;
    }
  }
  return i;
}
var Uu = (
  /**
   * Set properties.
   */
  function i() {
    Tl(this, i), this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
  }
);
function Ml() {
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
      return Bt(function* () {
        var r = yield fetch(e), n = yield r.blob(), a = yield createImageBitmap(n);
        return a;
      })();
    }
  };
  return (typeof DOMParser < "u" || typeof i > "u") && Reflect.deleteProperty(t, "DOMParser"), t;
}
function Nl(i) {
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
var Hf = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  offscreen: Ml,
  node: Nl
});
function oe(i) {
  return i.replace(/(?!\u3000)\s+/gm, " ");
}
function Vl(i) {
  return i.replace(/^[\n \t]+/, "");
}
function Il(i) {
  return i.replace(/[\n \t]+$/, "");
}
function vt(i) {
  var t = (i || "").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || [];
  return t.map(parseFloat);
}
var kl = /^[A-Z-]+$/;
function Rl(i) {
  return kl.test(i) ? i.toLowerCase() : i;
}
function Lh(i) {
  var t = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(i) || [];
  return t[2] || t[3] || t[4];
}
function _l(i) {
  if (!i.startsWith("rgb")) return i;
  var t = 3, e = i.replace(/\d+(\.\d+)?/g, (r, n) => t-- && n ? String(Math.round(parseFloat(r))) : r);
  return e;
}
var Ll = /(\[[^\]]+\])/g, Dl = /(#[^\s+>~.[:]+)/g, jl = /(\.[^\s+>~.[:]+)/g, Fl = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi, Bl = /(:[\w-]+\([^)]*\))/gi, zl = /(:[^\s+>~.[:]+)/g, Ul = /([^\s+>~.[:]+)/g;
function $t(i, t) {
  var e = t.exec(i);
  return e ? [i.replace(t, " "), e.length] : [i, 0];
}
function Hl(i) {
  var t = [0, 0, 0], e = i.replace(/:not\(([^)]*)\)/g, "     $1 ").replace(/{[\s\S]*/gm, " "), r = 0;
  return [e, r] = $t(e, Ll), t[1] += r, [e, r] = $t(e, Dl), t[0] += r, [e, r] = $t(e, jl), t[1] += r, [e, r] = $t(e, Fl), t[2] += r, [e, r] = $t(e, Bl), t[1] += r, [e, r] = $t(e, zl), t[1] += r, e = e.replace(/[*\s+>~]/g, " ").replace(/[#.]/g, " "), [e, r] = $t(e, Ul), t[2] += r, t.join("");
}
var ie = 1e-8;
function Hu(i) {
  return Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2));
}
function Ei(i, t) {
  return (i[0] * t[0] + i[1] * t[1]) / (Hu(i) * Hu(t));
}
function Xu(i, t) {
  return (i[0] * t[1] < i[1] * t[0] ? -1 : 1) * Math.acos(Ei(i, t));
}
function Yu(i) {
  return i * i * i;
}
function Wu(i) {
  return 3 * i * i * (1 - i);
}
function qu(i) {
  return 3 * i * (1 - i) * (1 - i);
}
function Gu(i) {
  return (1 - i) * (1 - i) * (1 - i);
}
function Qu(i) {
  return i * i;
}
function $u(i) {
  return 2 * i * (1 - i);
}
function Zu(i) {
  return (1 - i) * (1 - i);
}
class _ {
  constructor(t, e, r) {
    this.document = t, this.name = e, this.value = r, this.isNormalizedColor = !1;
  }
  static empty(t) {
    return new _(t, "EMPTY", "");
  }
  split() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : " ", {
      document: e,
      name: r
    } = this;
    return oe(this.getString()).trim().split(t).map((n) => new _(e, r, n));
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
    return this.isNormalizedColor || (this.isNormalizedColor = !0, e = _l(e), this.value = e), e;
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
    return this.hasValue() ? _.textBaselineMapping[this.getString()] : null;
  }
  addOpacity(t) {
    for (var e = this.getColor(), r = e.length, n = 0, a = 0; a < r && (e[a] === "," && n++, n !== 3); a++) ;
    if (t.hasValue() && this.isString() && n !== 3) {
      var s = new Oi(e);
      s.ok && (s.alpha = t.getNumber(), e = s.toRGBA());
    }
    return new _(this.document, this.name, e);
  }
}
_.textBaselineMapping = {
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
class Xl {
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
class tt {
  constructor(t, e) {
    this.x = t, this.y = e;
  }
  static parse(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, [r = e, n = e] = vt(t);
    return new tt(r, n);
  }
  static parseScale(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, [r = e, n = r] = vt(t);
    return new tt(r, n);
  }
  static parsePath(t) {
    for (var e = vt(t), r = e.length, n = [], a = 0; a < r; a += 2) n.push(new tt(e[a], e[a + 1]));
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
class Yl {
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
    } = this.screen, a = new tt(t, e), s = n.canvas; s; ) a.x -= s.offsetLeft, a.y -= s.offsetTop, s = s.offsetParent;
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
var Dh = typeof window < "u" ? window : null, jh = typeof fetch < "u" ? fetch.bind(void 0) : null;
class He {
  constructor(t) {
    var {
      fetch: e = jh,
      window: r = Dh
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.ctx = t, this.FRAMERATE = 30, this.MAX_VIRTUAL_PIXELS = 3e4, this.CLIENT_WIDTH = 800, this.CLIENT_HEIGHT = 600, this.viewPort = new Xl(), this.mouse = new Yl(this), this.animations = [], this.waits = [], this.frameDuration = 0, this.isReadyLock = !1, this.isFirstRender = !0, this.intervalId = null, this.window = r, this.fetch = e;
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
      clipX: d = 0,
      clipY: p = 0
    } = t, v = oe(n).replace(/^defer\s/, ""), [y, m] = v.split(" "), x = y || "xMidYMid", b = m || "meet", O = a / s, w = o / u, T = Math.min(O, w), C = Math.max(O, w), P = s, R = u;
    b === "meet" && (P *= T, R *= T), b === "slice" && (P *= C, R *= C);
    var V = new _(e, "refX", f), I = new _(e, "refY", g), N = V.hasValue() && I.hasValue();
    if (N && r.translate(-T * V.getPixels("x"), -T * I.getPixels("y")), l) {
      var E = T * d, L = T * p;
      r.beginPath(), r.moveTo(E, L), r.lineTo(a, L), r.lineTo(a, o), r.lineTo(E, o), r.closePath(), r.clip();
    }
    if (!N) {
      var U = b === "meet" && T === w, D = b === "slice" && C === w, j = b === "meet" && T === O, M = b === "slice" && C === O;
      x.startsWith("xMid") && (U || D) && r.translate(a / 2 - P / 2, 0), x.endsWith("YMid") && (j || M) && r.translate(0, o / 2 - R / 2), x.startsWith("xMax") && (U || D) && r.translate(a - P, 0), x.endsWith("YMax") && (j || M) && r.translate(0, o - R);
    }
    switch (!0) {
      case x === "none":
        r.scale(O, w);
        break;
      case b === "meet":
        r.scale(T, T);
        break;
      case b === "slice":
        r.scale(C, C);
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
    } = this, d = 1e3 / g;
    if (this.frameDuration = d, this.readyPromise = new Promise((x) => {
      this.resolveReady = x;
    }), this.isReady() && this.render(t, a, s, u, h, c, f), !!e) {
      var p = Date.now(), v = p, y = 0, m = () => {
        p = Date.now(), y = p - v, y >= d && (v = p - y % d, this.shouldUpdate(n, o) && (this.render(t, a, s, u, h, c, f), l.runEvents())), this.intervalId = vi(m);
      };
      r || l.start(), this.intervalId = vi(m);
    }
  }
  stop() {
    this.intervalId && (vi.cancel(this.intervalId), this.intervalId = null), this.mouse.stop();
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
    var d = t.getStyle("width"), p = t.getStyle("height");
    !e && (g || typeof n != "number" && typeof a != "number") && (d.hasValue() && (l.width = d.getPixels("x"), l.style && (l.style.width = "".concat(l.width, "px"))), p.hasValue() && (l.height = p.getPixels("y"), l.style && (l.style.height = "".concat(l.height, "px"))));
    var v = l.clientWidth || l.width, y = l.clientHeight || l.height;
    if (e && d.hasValue() && p.hasValue() && (v = d.getPixels("x"), y = p.getPixels("y")), c.setCurrent(v, y), typeof s == "number" && t.getAttribute("x", !0).setValue(s), typeof o == "number" && t.getAttribute("y", !0).setValue(o), typeof n == "number" || typeof a == "number") {
      var m = vt(t.getAttribute("viewBox").getString()), x = 0, b = 0;
      if (typeof n == "number") {
        var O = t.getStyle("width");
        O.hasValue() ? x = O.getPixels("x") / n : isNaN(m[2]) || (x = m[2] / n);
      }
      if (typeof a == "number") {
        var w = t.getStyle("height");
        w.hasValue() ? b = w.getPixels("y") / a : isNaN(m[3]) || (b = m[3] / a);
      }
      x || (x = b), b || (b = x), t.getAttribute("width", !0).setValue(n), t.getAttribute("height", !0).setValue(a);
      var T = t.getStyle("transform", !0, !0);
      T.setValue("".concat(T.getString(), " scale(").concat(1 / x, ", ").concat(1 / b, ")"));
    }
    r || f.clearRect(0, 0, v, y), t.render(f), g && (this.isFirstRender = !1);
  }
}
He.defaultWindow = Dh;
He.defaultFetch = jh;
var {
  defaultFetch: Wl
} = He, ql = typeof DOMParser < "u" ? DOMParser : null;
class wi {
  constructor() {
    var {
      fetch: t = Wl,
      DOMParser: e = ql
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.fetch = t, this.DOMParser = e;
  }
  parse(t) {
    var e = this;
    return Bt(function* () {
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
    return Bt(function* () {
      var r = yield e.fetch(t), n = yield r.text();
      return e.parseFromString(n);
    })();
  }
}
class Gl {
  constructor(t, e) {
    this.type = "translate", this.point = null, this.point = tt.parse(e);
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
class Ql {
  constructor(t, e, r) {
    this.type = "rotate", this.angle = null, this.originX = null, this.originY = null, this.cx = 0, this.cy = 0;
    var n = vt(e);
    this.angle = new _(t, "angle", n[0]), this.originX = r[0], this.originY = r[1], this.cx = n[1] || 0, this.cy = n[2] || 0;
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
class $l {
  constructor(t, e, r) {
    this.type = "scale", this.scale = null, this.originX = null, this.originY = null;
    var n = tt.parseScale(e);
    (n.x === 0 || n.y === 0) && (n.x = ie, n.y = ie), this.scale = n, this.originX = r[0], this.originY = r[1];
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
class Fh {
  constructor(t, e, r) {
    this.type = "matrix", this.matrix = [], this.originX = null, this.originY = null, this.matrix = vt(e), this.originX = r[0], this.originY = r[1];
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
    } = this, a = n[0], s = n[2], o = n[4], u = n[1], h = n[3], c = n[5], f = 0, g = 0, l = 1, d = 1 / (a * (h * l - c * g) - s * (u * l - c * f) + o * (u * g - h * f)), p = e.getPixels("x"), v = r.getPixels("y");
    t.translate(p, v), t.transform(d * (h * l - c * g), d * (c * f - u * l), d * (o * g - s * l), d * (a * l - o * f), d * (s * c - o * h), d * (o * u - a * c)), t.translate(-p, -v);
  }
  applyToPoint(t) {
    t.applyTransform(this.matrix);
  }
}
class Bh extends Fh {
  constructor(t, e, r) {
    super(t, e, r), this.type = "skew", this.angle = null, this.angle = new _(t, "angle", e);
  }
}
class Zl extends Bh {
  constructor(t, e, r) {
    super(t, e, r), this.type = "skewX", this.matrix = [1, 0, Math.tan(this.angle.getRadians()), 1, 0, 0];
  }
}
class Kl extends Bh {
  constructor(t, e, r) {
    super(t, e, r), this.type = "skewY", this.matrix = [1, Math.tan(this.angle.getRadians()), 0, 1, 0, 0];
  }
}
function Jl(i) {
  return oe(i).trim().replace(/\)([a-zA-Z])/g, ") $1").replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/);
}
function tf(i) {
  var [t, e] = i.split("(");
  return [t.trim(), e.trim().replace(")", "")];
}
class Kt {
  constructor(t, e, r) {
    this.document = t, this.transforms = [];
    var n = Jl(e);
    n.forEach((a) => {
      if (a !== "none") {
        var [s, o] = tf(a), u = Kt.transformTypes[s];
        typeof u < "u" && this.transforms.push(new u(this.document, o, r));
      }
    });
  }
  static fromElement(t, e) {
    var r = e.getStyle("transform", !1, !0), [n, a = n] = e.getStyle("transform-origin", !1, !0).split(), s = [n, a];
    return r.hasValue() ? new Kt(t, r.getString(), s) : null;
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
Kt.transformTypes = {
  translate: Gl,
  rotate: Ql,
  scale: $l,
  matrix: Fh,
  skewX: Zl,
  skewY: Kl
};
class G {
  constructor(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    if (this.document = t, this.node = e, this.captureTextNodes = r, this.attributes = /* @__PURE__ */ Object.create(null), this.styles = /* @__PURE__ */ Object.create(null), this.stylesSpecificity = /* @__PURE__ */ Object.create(null), this.animationFrozen = !1, this.animationFrozenValue = "", this.parent = null, this.children = [], !(!e || e.nodeType !== 1)) {
      if (Array.from(e.attributes).forEach((o) => {
        var u = Rl(o.nodeName);
        this.attributes[u] = new _(t, u, o.value);
      }), this.addStylesFromStyleDefinition(), this.getAttribute("style").hasValue()) {
        var n = this.getAttribute("style").getString().split(";").map((o) => o.trim());
        n.forEach((o) => {
          if (o) {
            var [u, h] = o.split(":").map((c) => c.trim());
            this.styles[u] = new _(t, u, h);
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
      var n = new _(this.document, t, "");
      return this.attributes[t] = n, n;
    }
    return r || _.empty(this.document);
  }
  getHrefAttribute() {
    for (var t in this.attributes) if (t === "href" || t.endsWith(":href")) return this.attributes[t];
    return _.empty(this.document);
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
      var u = new _(this.document, t, "");
      return this.styles[t] = u, u;
    }
    return n || _.empty(this.document);
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
    var e = Kt.fromElement(this.document, this);
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
    var e = t instanceof G ? t : this.document.createElement(t);
    e.parent = this, G.ignoreChildTypes.includes(e.type) || this.children.push(e);
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
G.ignoreChildTypes = ["title"];
class ef extends G {
  constructor(t, e, r) {
    super(t, e, r);
  }
}
function rf(i) {
  var t = i.trim();
  return /^('|")/.test(t) ? t : '"'.concat(t, '"');
}
function nf(i) {
  return typeof process > "u" ? i : i.trim().split(",").map(rf).join(",");
}
function af(i) {
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
function sf(i) {
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
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = arguments.length > 1 ? arguments[1] : void 0, r = "", n = "", a = "", s = "", o = "", u = oe(t).trim().split(" "), h = {
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
      af(this.fontStyle),
      this.fontVariant,
      sf(this.fontWeight),
      this.fontSize,
      // Wrap fontFamily only on nodejs and only for canvas.ctx
      nf(this.fontFamily)
    ].join(" ").trim();
  }
}
ot.styles = "normal|italic|oblique|inherit";
ot.variants = "normal|small-caps|inherit";
ot.weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit";
class Mt {
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
class z extends S {
  constructor(t) {
    super(t.replace(/([+\-.])\s+/gm, "$1").replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, "")), this.control = null, this.start = null, this.current = null, this.command = null, this.commands = this.commands, this.i = -1, this.previousCommand = null, this.points = [], this.angles = [];
  }
  reset() {
    this.i = -1, this.command = null, this.previousCommand = null, this.start = new tt(0, 0), this.control = new tt(0, 0), this.current = new tt(0, 0), this.points = [], this.angles = [];
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
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "x", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "y", r = new tt(this.command[t], this.command[e]);
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
    if (t !== S.CURVE_TO && t !== S.SMOOTH_CURVE_TO && t !== S.QUAD_TO && t !== S.SMOOTH_QUAD_TO) return this.current;
    var {
      current: {
        x: e,
        y: r
      },
      control: {
        x: n,
        y: a
      }
    } = this, s = new tt(2 * e - n, 2 * r - a);
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
class re extends G {
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
        var h = new _(this.document, "fill", t.fillStyle).addOpacity(n).getColor();
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
        var g = new _(this.document, "stroke", t.strokeStyle).addOpacity(s).getString();
        t.strokeStyle = g;
      }
      var l = this.getStyle("stroke-width");
      if (l.hasValue()) {
        var d = l.getPixels();
        t.lineWidth = d || ie;
      }
      var p = this.getStyle("stroke-linecap"), v = this.getStyle("stroke-linejoin"), y = this.getStyle("stroke-miterlimit"), m = this.getStyle("stroke-dasharray"), x = this.getStyle("stroke-dashoffset");
      if (p.hasValue() && (t.lineCap = p.getString()), v.hasValue() && (t.lineJoin = v.getString()), y.hasValue() && (t.miterLimit = y.getNumber()), m.hasValue() && m.getString() !== "none") {
        var b = vt(m.getString());
        typeof t.setLineDash < "u" ? t.setLineDash(b) : typeof t.webkitLineDash < "u" ? t.webkitLineDash = b : typeof t.mozDash < "u" && !(b.length === 1 && b[0] === 0) && (t.mozDash = b);
        var O = x.getPixels();
        typeof t.lineDashOffset < "u" ? t.lineDashOffset = O : typeof t.webkitLineDashOffset < "u" ? t.webkitLineDashOffset = O : typeof t.mozDashOffset < "u" && (t.mozDashOffset = O);
      }
    }
    if (this.modifiedEmSizeStack = !1, typeof t.font < "u") {
      var w = this.getStyle("font"), T = this.getStyle("font-style"), C = this.getStyle("font-variant"), P = this.getStyle("font-weight"), R = this.getStyle("font-size"), V = this.getStyle("font-family"), I = new ot(T.getString(), C.getString(), P.getString(), R.hasValue() ? "".concat(R.getPixels(!0), "px") : "", V.getString(), ot.parse(w.getString(), t.font));
      T.setValue(I.fontStyle), C.setValue(I.fontVariant), P.setValue(I.fontWeight), R.setValue(I.fontSize), V.setValue(I.fontFamily), t.font = I.toString(), R.isPixels() && (this.document.emSize = R.getPixels(), this.modifiedEmSizeStack = !0);
    }
    e || (this.applyEffects(t), t.globalAlpha = this.calculateOpacity());
  }
  clearContext(t) {
    super.clearContext(t), this.modifiedEmSizeStack && this.document.popEmSize();
  }
}
class W extends re {
  constructor(t, e, r) {
    super(t, e, r), this.type = "path", this.pathParser = null, this.pathParser = new z(this.getAttribute("d").getString());
  }
  path(t) {
    var {
      pathParser: e
    } = this, r = new Mt();
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
        var [l, d] = r[g];
        f.render(t, l, d);
      }
      if (o.isUrlDefinition()) {
        var p = o.getDefinition(), [v, y] = r[n];
        p.render(t, v, y);
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
    } = t, n = new tt((r.relative ? e.x : 0) + r.x, e.y);
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
    } = t, n = new tt(e.x, (r.relative ? e.y : 0) + r.y);
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
    } = r, h = s * (Math.PI / 180), c = t.getAsCurrentPoint(), f = new tt(Math.cos(h) * (e.x - c.x) / 2 + Math.sin(h) * (e.y - c.y) / 2, -Math.sin(h) * (e.x - c.x) / 2 + Math.cos(h) * (e.y - c.y) / 2), g = Math.pow(f.x, 2) / Math.pow(n, 2) + Math.pow(f.y, 2) / Math.pow(a, 2);
    g > 1 && (n *= Math.sqrt(g), a *= Math.sqrt(g));
    var l = (o === u ? -1 : 1) * Math.sqrt((Math.pow(n, 2) * Math.pow(a, 2) - Math.pow(n, 2) * Math.pow(f.y, 2) - Math.pow(a, 2) * Math.pow(f.x, 2)) / (Math.pow(n, 2) * Math.pow(f.y, 2) + Math.pow(a, 2) * Math.pow(f.x, 2)));
    isNaN(l) && (l = 0);
    var d = new tt(l * n * f.y / a, l * -a * f.x / n), p = new tt((e.x + c.x) / 2 + Math.cos(h) * d.x - Math.sin(h) * d.y, (e.y + c.y) / 2 + Math.sin(h) * d.x + Math.cos(h) * d.y), v = Xu([1, 0], [(f.x - d.x) / n, (f.y - d.y) / a]), y = [(f.x - d.x) / n, (f.y - d.y) / a], m = [(-f.x - d.x) / n, (-f.y - d.y) / a], x = Xu(y, m);
    return Ei(y, m) <= -1 && (x = Math.PI), Ei(y, m) >= 1 && (x = 0), {
      currentPoint: c,
      rX: n,
      rY: a,
      sweepFlag: u,
      xAxisRotation: h,
      centp: p,
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
    } = W.pathA(r), g = 1 - o ? 1 : -1, l = c + g * (f / 2), d = new tt(h.x + a * Math.cos(l), h.y + s * Math.sin(l));
    if (r.addMarkerAngle(d, l - g * Math.PI / 2), r.addMarkerAngle(n, l - g * Math.PI), e.addPoint(n.x, n.y), t && !isNaN(c) && !isNaN(f)) {
      var p = a > s ? a : s, v = a > s ? 1 : a / s, y = a > s ? s / a : 1;
      t.translate(h.x, h.y), t.rotate(u), t.scale(v, y), t.arc(0, 0, p, c, c + f, !!(1 - o)), t.scale(1 / v, 1 / y), t.rotate(-u), t.translate(-h.x, -h.y);
    }
  }
  static pathZ(t) {
    t.current = t.start;
  }
  pathZ(t, e) {
    W.pathZ(this.pathParser), t && e.x1 !== e.x2 && e.y1 !== e.y2 && t.closePath();
  }
}
class zh extends W {
  constructor(t, e, r) {
    super(t, e, r), this.type = "glyph", this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber(), this.unicode = this.getAttribute("unicode").getString(), this.arabicForm = this.getAttribute("arabic-form").getString();
  }
}
class qt extends re {
  constructor(t, e, r) {
    super(t, e, new.target === qt ? !0 : r), this.type = "text", this.x = 0, this.y = 0, this.measureCache = -1;
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
    return new Mt(this.x, this.y - e, this.x + this.measureText(t), this.y);
  }
  getGlyph(t, e, r) {
    var n = e[r], a = null;
    if (t.isArabic) {
      var s = e.length, o = e[r - 1], u = e[r + 1], h = "isolated";
      if ((r === 0 || o === " ") && r < s - 1 && u !== " " && (h = "terminal"), r > 0 && o !== " " && r < s - 1 && u !== " " && (h = "medial"), r > 0 && o !== " " && (r === s - 1 || u === " ") && (h = "initial"), typeof t.glyphs[n] < "u") {
        var c = t.glyphs[n];
        a = c instanceof zh ? c : c[h];
      }
    } else a = t.glyphs[n];
    return a || (a = t.missingGlyph), a;
  }
  getText() {
    return "";
  }
  getTextFromNode(t) {
    var e = t || this.node, r = Array.from(e.parentNode.childNodes), n = r.indexOf(e), a = r.length - 1, s = oe(
      // textNode.value
      // || textNode.text
      e.textContent || ""
    );
    return n === 0 && (s = Vl(s)), n === a && (s = Il(s)), s;
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
      } = a.fontFace, o = ot.parse(e.ctx.font), u = r.getStyle("font-size").getNumber(o.fontSize), h = r.getStyle("font-style").getString(o.fontStyle), c = u / s, f = a.isRTL ? n.split("").reverse().join("") : n, g = vt(r.getAttribute("dx").getString()), l = f.length, d = 0; d < l; d++) {
        var p = this.getGlyph(a, f, d);
        t.translate(this.x, this.y), t.scale(c, -c);
        var v = t.lineWidth;
        t.lineWidth = t.lineWidth * s / u, h === "italic" && t.transform(1, 0, 0.4, 1, 0, 0), p.render(t), h === "italic" && t.transform(1, 0, -0.4, 1, 0, 0), t.lineWidth = v, t.scale(1 / c, -1 / c), t.translate(-this.x, -this.y), this.x += u * (p.horizAdvX || a.horizAdvX) / s, typeof g[d] < "u" && !isNaN(g[d]) && (this.x += g[d]);
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
      e === "start" && !r || e === "end" && r ? n = t.x - this.minX : e === "end" && !r || e === "start" && r ? n = t.x - this.maxX : n = t.x - (this.minX + this.maxX) / 2;
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
      for (var a = this.getFontSize(), s = n.isRTL ? e.split("").reverse().join("") : e, o = vt(r.getAttribute("dx").getString()), u = s.length, h = 0, c = 0; c < u; c++) {
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
    for (var e = this; e instanceof qt && e.isFirstChild(); ) {
      var r = e.parent.getAttribute(t);
      if (r.hasValue(!0)) return r.getValue("0");
      e = e.parent;
    }
    return null;
  }
}
class Xe extends qt {
  constructor(t, e, r) {
    super(t, e, new.target === Xe ? !0 : r), this.type = "tspan", this.text = this.children.length > 0 ? "" : this.getTextFromNode();
  }
  getText() {
    return this.text;
  }
}
class of extends Xe {
  constructor() {
    super(...arguments), this.type = "textNode";
  }
}
class Se extends re {
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
      var o = new _(r, "fontSize", ot.parse(t.font).fontSize);
      o.hasValue() && (r.rootEmSize = o.getPixels("y"), r.emSize = r.rootEmSize);
    }
    this.getAttribute("x").hasValue() || this.getAttribute("x", !0).setValue(0), this.getAttribute("y").hasValue() || this.getAttribute("y", !0).setValue(0);
    var {
      width: u,
      height: h
    } = n.viewPort;
    this.getStyle("width").hasValue() || this.getStyle("width", !0).setValue("100%"), this.getStyle("height").hasValue() || this.getStyle("height", !0).setValue("100%"), this.getStyle("color").hasValue() || this.getStyle("color", !0).setValue("black");
    var c = this.getAttribute("refX"), f = this.getAttribute("refY"), g = this.getAttribute("viewBox"), l = g.hasValue() ? vt(g.getString()) : null, d = !this.root && this.getStyle("overflow").getValue("hidden") !== "visible", p = 0, v = 0, y = 0, m = 0;
    l && (p = l[0], v = l[1]), this.root || (u = this.getStyle("width").getPixels("x"), h = this.getStyle("height").getPixels("y"), this.type === "marker" && (y = p, m = v, p = 0, v = 0)), n.viewPort.setCurrent(u, h), this.node && (!this.parent || ((e = this.node.parentNode) === null || e === void 0 ? void 0 : e.nodeName) === "foreignObject") && this.getStyle("transform", !1, !0).hasValue() && !this.getStyle("transform-origin", !1, !0).hasValue() && this.getStyle("transform-origin", !0, !0).setValue("50% 50%"), super.setContext(t), t.translate(this.getAttribute("x").getPixels("x"), this.getAttribute("y").getPixels("y")), l && (u = l[2], h = l[3]), r.setViewBox({
      ctx: t,
      aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
      width: n.viewPort.width,
      desiredWidth: u,
      height: n.viewPort.height,
      desiredHeight: h,
      minX: p,
      minY: v,
      refX: c.getValue(),
      refY: f.getValue(),
      clip: d,
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
class Uh extends W {
  constructor() {
    super(...arguments), this.type = "rect";
  }
  path(t) {
    var e = this.getAttribute("x").getPixels("x"), r = this.getAttribute("y").getPixels("y"), n = this.getStyle("width", !1, !0).getPixels("x"), a = this.getStyle("height", !1, !0).getPixels("y"), s = this.getAttribute("rx"), o = this.getAttribute("ry"), u = s.getPixels("x"), h = o.getPixels("y");
    if (s.hasValue() && !o.hasValue() && (h = u), o.hasValue() && !s.hasValue() && (u = h), u = Math.min(u, n / 2), h = Math.min(h, a / 2), t) {
      var c = 4 * ((Math.sqrt(2) - 1) / 3);
      t.beginPath(), a > 0 && n > 0 && (t.moveTo(e + u, r), t.lineTo(e + n - u, r), t.bezierCurveTo(e + n - u + c * u, r, e + n, r + h - c * h, e + n, r + h), t.lineTo(e + n, r + a - h), t.bezierCurveTo(e + n, r + a - h + c * h, e + n - u + c * u, r + a, e + n - u, r + a), t.lineTo(e + u, r + a), t.bezierCurveTo(e + u - c * u, r + a, e, r + a - h + c * h, e, r + a - h), t.lineTo(e, r + h), t.bezierCurveTo(e, r + h - c * h, e + u - c * u, r, e + u, r), t.closePath());
    }
    return new Mt(e, r, e + n, r + a);
  }
  getMarkers() {
    return null;
  }
}
class uf extends W {
  constructor() {
    super(...arguments), this.type = "circle";
  }
  path(t) {
    var e = this.getAttribute("cx").getPixels("x"), r = this.getAttribute("cy").getPixels("y"), n = this.getAttribute("r").getPixels();
    return t && n > 0 && (t.beginPath(), t.arc(e, r, n, 0, Math.PI * 2, !1), t.closePath()), new Mt(e - n, r - n, e + n, r + n);
  }
  getMarkers() {
    return null;
  }
}
class hf extends W {
  constructor() {
    super(...arguments), this.type = "ellipse";
  }
  path(t) {
    var e = 4 * ((Math.sqrt(2) - 1) / 3), r = this.getAttribute("rx").getPixels("x"), n = this.getAttribute("ry").getPixels("y"), a = this.getAttribute("cx").getPixels("x"), s = this.getAttribute("cy").getPixels("y");
    return t && r > 0 && n > 0 && (t.beginPath(), t.moveTo(a + r, s), t.bezierCurveTo(a + r, s + e * n, a + e * r, s + n, a, s + n), t.bezierCurveTo(a - e * r, s + n, a - r, s + e * n, a - r, s), t.bezierCurveTo(a - r, s - e * n, a - e * r, s - n, a, s - n), t.bezierCurveTo(a + e * r, s - n, a + r, s - e * n, a + r, s), t.closePath()), new Mt(a - r, s - n, a + r, s + n);
  }
  getMarkers() {
    return null;
  }
}
class cf extends W {
  constructor() {
    super(...arguments), this.type = "line";
  }
  getPoints() {
    return [new tt(this.getAttribute("x1").getPixels("x"), this.getAttribute("y1").getPixels("y")), new tt(this.getAttribute("x2").getPixels("x"), this.getAttribute("y2").getPixels("y"))];
  }
  path(t) {
    var [{
      x: e,
      y: r
    }, {
      x: n,
      y: a
    }] = this.getPoints();
    return t && (t.beginPath(), t.moveTo(e, r), t.lineTo(n, a)), new Mt(e, r, n, a);
  }
  getMarkers() {
    var [t, e] = this.getPoints(), r = t.angleTo(e);
    return [[t, r], [e, r]];
  }
}
class Hh extends W {
  constructor(t, e, r) {
    super(t, e, r), this.type = "polyline", this.points = [], this.points = tt.parsePath(this.getAttribute("points").getString());
  }
  path(t) {
    var {
      points: e
    } = this, [{
      x: r,
      y: n
    }] = e, a = new Mt(r, n);
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
class lf extends Hh {
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
class ff extends G {
  constructor() {
    super(...arguments), this.type = "pattern";
  }
  createPattern(t, e, r) {
    var n = this.getStyle("width").getPixels("x", !0), a = this.getStyle("height").getPixels("y", !0), s = new Se(this.document, null);
    s.attributes.viewBox = new _(this.document, "viewBox", this.getAttribute("viewBox").getValue()), s.attributes.width = new _(this.document, "width", "".concat(n, "px")), s.attributes.height = new _(this.document, "height", "".concat(a, "px")), s.attributes.transform = new _(this.document, "transform", this.getAttribute("patternTransform").getValue()), s.children = this.children;
    var o = this.document.createCanvas(n, a), u = o.getContext("2d"), h = this.getAttribute("x"), c = this.getAttribute("y");
    h.hasValue() && c.hasValue() && u.translate(h.getPixels("x", !0), c.getPixels("y", !0)), r.hasValue() ? this.styles["fill-opacity"] = r : Reflect.deleteProperty(this.styles, "fill-opacity");
    for (var f = -1; f <= 1; f++) for (var g = -1; g <= 1; g++) u.save(), s.attributes.x = new _(this.document, "x", f * o.width), s.attributes.y = new _(this.document, "y", g * o.height), s.render(u), u.restore();
    var l = t.createPattern(o, "repeat");
    return l;
  }
}
class gf extends G {
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
      var u = new Se(this.document, null);
      u.type = this.type, u.attributes.viewBox = new _(this.document, "viewBox", this.getAttribute("viewBox").getValue()), u.attributes.refX = new _(this.document, "refX", this.getAttribute("refX").getValue()), u.attributes.refY = new _(this.document, "refY", this.getAttribute("refY").getValue()), u.attributes.width = new _(this.document, "width", this.getAttribute("markerWidth").getValue()), u.attributes.height = new _(this.document, "height", this.getAttribute("markerHeight").getValue()), u.attributes.overflow = new _(this.document, "overflow", this.getAttribute("overflow").getValue()), u.attributes.fill = new _(this.document, "fill", this.getAttribute("fill").getColor("black")), u.attributes.stroke = new _(this.document, "stroke", this.getAttribute("stroke").getValue("none")), u.children = this.children, u.render(t), t.restore(), o === "strokeWidth" && t.scale(1 / t.lineWidth, 1 / t.lineWidth), s === "auto" && t.rotate(-r), t.translate(-n, -a);
    }
  }
}
class pf extends G {
  constructor() {
    super(...arguments), this.type = "defs";
  }
  render() {
  }
}
class Qi extends re {
  constructor() {
    super(...arguments), this.type = "g";
  }
  getBoundingBox(t) {
    var e = new Mt();
    return this.children.forEach((r) => {
      e.addBoundingBox(r.getBoundingBox(t));
    }), e;
  }
}
class Xh extends G {
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
      } = o.screen, [c] = h.viewPorts, f = new Uh(o, null);
      f.attributes.x = new _(o, "x", -u / 3), f.attributes.y = new _(o, "y", -u / 3), f.attributes.width = new _(o, "width", u), f.attributes.height = new _(o, "height", u);
      var g = new Qi(o, null);
      g.attributes.transform = new _(o, "transform", this.getAttribute("gradientTransform").getValue()), g.children = [f];
      var l = new Se(o, null);
      l.attributes.x = new _(o, "x", 0), l.attributes.y = new _(o, "y", 0), l.attributes.width = new _(o, "width", c.width), l.attributes.height = new _(o, "height", c.height), l.children = [g];
      var d = o.createCanvas(c.width, c.height), p = d.getContext("2d");
      return p.fillStyle = s, l.render(p), p.createPattern(d, "no-repeat");
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
      var r = new _(this.document, "color", e);
      return r.addOpacity(t).getColor();
    }
    return e;
  }
}
class df extends Xh {
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
class vf extends Xh {
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
class mf extends G {
  constructor(t, e, r) {
    super(t, e, r), this.type = "stop";
    var n = Math.max(0, Math.min(1, this.getAttribute("offset").getNumber())), a = this.getStyle("stop-opacity"), s = this.getStyle("stop-color", !0);
    s.getString() === "" && s.setValue("#000"), a.hasValue() && (s = s.addOpacity(a)), this.offset = n, this.color = s.getColor();
  }
}
class $i extends G {
  constructor(t, e, r) {
    super(t, e, r), this.type = "animate", this.duration = 0, this.initialValue = null, this.initialUnits = "", this.removed = !1, this.frozen = !1, t.screen.animations.push(this), this.begin = this.getAttribute("begin").getMilliseconds(), this.maxDuration = this.begin + this.getAttribute("dur").getMilliseconds(), this.from = this.getAttribute("from"), this.to = this.getAttribute("to"), this.values = new _(t, "values", null);
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
      r.from = new _(t, "from", parseFloat(e.getValue()[a])), r.to = new _(t, "to", parseFloat(e.getValue()[s])), r.progress = (n - a) / (s - a);
    } else r.from = this.from, r.to = this.to;
    return r;
  }
}
class yf extends $i {
  constructor() {
    super(...arguments), this.type = "animateColor";
  }
  calcValue() {
    var {
      progress: t,
      from: e,
      to: r
    } = this.getProgress(), n = new Oi(e.getColor()), a = new Oi(r.getColor());
    if (n.ok && a.ok) {
      var s = n.r + (a.r - n.r) * t, o = n.g + (a.g - n.g) * t, u = n.b + (a.b - n.b) * t;
      return "rgb(".concat(Math.floor(s), ", ").concat(Math.floor(o), ", ").concat(Math.floor(u), ")");
    }
    return this.getAttribute("from").getColor();
  }
}
class xf extends $i {
  constructor() {
    super(...arguments), this.type = "animateTransform";
  }
  calcValue() {
    var {
      progress: t,
      from: e,
      to: r
    } = this.getProgress(), n = vt(e.getString()), a = vt(r.getString()), s = n.map((o, u) => {
      var h = a[u];
      return o + (h - o) * t;
    }).join(" ");
    return s;
  }
}
class bf extends G {
  constructor(t, e, r) {
    super(t, e, r), this.type = "font", this.glyphs = /* @__PURE__ */ Object.create(null), this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber();
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
        u.arabicForm ? (this.isRTL = !0, this.isArabic = !0, typeof this.glyphs[u.unicode] > "u" && (this.glyphs[u.unicode] = /* @__PURE__ */ Object.create(null)), this.glyphs[u.unicode][u.arabicForm] = u) : this.glyphs[u.unicode] = u;
        break;
      }
    }
  }
  render() {
  }
}
class wf extends G {
  constructor(t, e, r) {
    super(t, e, r), this.type = "font-face", this.ascent = this.getAttribute("ascent").getNumber(), this.descent = this.getAttribute("descent").getNumber(), this.unitsPerEm = this.getAttribute("units-per-em").getNumber();
  }
}
class Sf extends W {
  constructor() {
    super(...arguments), this.type = "missing-glyph", this.horizAdvX = 0;
  }
}
class Tf extends qt {
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
class Of extends qt {
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
      } = e.screen, s = new _(e, "fontSize", ot.parse(e.ctx.font).fontSize);
      a.isWorking() && a.checkBoundingBox(this, new Mt(r, n - s.getPixels("y"), r + this.measureText(t), n));
    } else if (this.children.length > 0) {
      var o = new Qi(this.document, null);
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
function Ku(i, t) {
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
    t % 2 ? Ku(Object(e), !0).forEach(function(r) {
      Gi(i, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : Ku(Object(e)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return i;
}
class Af extends qt {
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
          var [s, o, u, h, c, f, g, l] = a, d = u > h ? u : h, p = u > h ? 1 : u / h, v = u > h ? h / u : 1;
          t && (t.translate(s, o), t.rotate(g), t.scale(p, v), t.arc(0, 0, d, c, c + f, !!(1 - l)), t.scale(1 / p, 1 / v), t.rotate(-g), t.translate(-s, -o));
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
    var g = this.textHeight / 20, l = this.getEquidistantPointOnPath(c, g, 0), d = this.getEquidistantPointOnPath(c + f, g, 0), p = {
      p0: l,
      p1: d
    }, v = l && d ? Math.atan2(d.y - l.y, d.x - l.x) : 0;
    if (o) {
      var y = Math.cos(Math.PI / 2 + v) * o, m = Math.cos(-v) * o;
      p.p0 = Ae(Ae({}, l), {}, {
        x: l.x + y,
        y: l.y + m
      }), p.p1 = Ae(Ae({}, d), {}, {
        x: d.x + y,
        y: d.y + m
      });
    }
    return c += f, {
      offset: c,
      segment: p,
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
      var d = f.reduce((b, O, w) => w === 0 ? 0 : b + O || 0, 0), p = this.measureText(t), v = Math.max(p + d, 0);
      this.textWidth = p, this.textHeight = this.getFontSize(), this.glyphInfo = [];
      var y = this.getPathLength(), m = this.getStyle("startOffset").getNumber(0) * y, x = 0;
      (o === "middle" || o === "center") && (x = -v / 2), (o === "end" || o === "right") && (x = -v), x += m, r.forEach((b, O) => {
        var {
          offset: w,
          segment: T,
          rotation: C
        } = this.findSegmentToFitChar(t, o, v, y, n, x, s, b, O);
        x = w, !(!T.p0 || !T.p1) && this.glyphInfo.push({
          // transposeX: midpoint.x,
          // transposeY: midpoint.y,
          text: r[O],
          p0: T.p0,
          p1: T.p1,
          rotation: C
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
    var s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : e, o = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : r, u = (a - r) / (n - e + ie), h = Math.sqrt(t * t / (1 + u * u));
    n < e && (h *= -1);
    var c = u * h, f = null;
    if (n === e) f = {
      x: s,
      y: o + c
    };
    else if ((o - r) / (s - e + ie) === u) f = {
      x: s + h,
      y: o + c
    };
    else {
      var g = 0, l = 0, d = this.getLineLength(e, r, n, a);
      if (d < ie) return null;
      var p = (s - e) * (n - e) + (o - r) * (a - r);
      p /= d * d, g = e + p * (n - e), l = r + p * (a - r);
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
    var c = u * Yu(t) + s * Wu(t) + n * qu(t) + e * Gu(t), f = h * Yu(t) + o * Wu(t) + a * qu(t) + r * Gu(t);
    return {
      x: c,
      y: f
    };
  }
  getPointOnQuadraticBezier(t, e, r, n, a, s, o) {
    var u = s * Qu(t) + n * $u(t) + e * Zu(t), h = o * Qu(t) + a * $u(t) + r * Zu(t);
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
var Ef = /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i;
class Cf extends re {
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
    return Bt(function* () {
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
    return Bt(function* () {
      var r = Ef.exec(t);
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
    return new Mt(t, e, t + r, e + n);
  }
}
class Pf extends re {
  constructor() {
    super(...arguments), this.type = "symbol";
  }
  render(t) {
  }
}
class Mf {
  constructor(t) {
    this.document = t, this.loaded = !1, t.fonts.push(this);
  }
  load(t, e) {
    var r = this;
    return Bt(function* () {
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
class Yh extends G {
  constructor(t, e, r) {
    super(t, e, r), this.type = "style";
    var n = oe(
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
              m && x && (l[m] = new _(t, m, x));
            }), t.styles[g] = l, t.stylesSpecificity[g] = Hl(g), g === "@font-face") {
              var d = l["font-family"].getString().replace(/"|'/g, ""), p = l.src.getString().split(",");
              p.forEach((v) => {
                if (v.indexOf('format("svg")') > 0) {
                  var y = Lh(v);
                  y && new Mf(t).load(d, y);
                }
              });
            }
          }
        });
      }
    });
  }
}
Yh.parseExternalUrl = Lh;
class Nf extends re {
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
      if (r.type === "symbol" && (n = new Se(e, null), n.attributes.viewBox = new _(e, "viewBox", r.getAttribute("viewBox").getString()), n.attributes.preserveAspectRatio = new _(e, "preserveAspectRatio", r.getAttribute("preserveAspectRatio").getString()), n.attributes.overflow = new _(e, "overflow", r.getAttribute("overflow").getString()), n.children = r.children, r.styles.opacity = new _(e, "opacity", this.calculateOpacity())), n.type === "svg") {
        var a = this.getStyle("width", !1, !0), s = this.getStyle("height", !1, !0);
        a.hasValue() && (n.attributes.width = new _(e, "width", a.getString())), s.hasValue() && (n.attributes.height = new _(e, "height", s.getString()));
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
    return Kt.fromElement(t, e);
  }
  get element() {
    return this.cachedElement || (this.cachedElement = this.getHrefAttribute().getDefinition()), this.cachedElement;
  }
}
function Ee(i, t, e, r, n, a) {
  return i[e * r * 4 + t * 4 + a];
}
function Ce(i, t, e, r, n, a, s) {
  i[e * r * 4 + t * 4 + a] = s;
}
function rt(i, t, e) {
  var r = i[t];
  return r * e;
}
function Ft(i, t, e, r) {
  return t + Math.cos(i) * e + Math.sin(i) * r;
}
class Wh extends G {
  constructor(t, e, r) {
    super(t, e, r), this.type = "feColorMatrix";
    var n = vt(this.getAttribute("values").getString());
    switch (this.getAttribute("type").getString("matrix")) {
      // http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement
      case "saturate": {
        var a = n[0];
        n = [0.213 + 0.787 * a, 0.715 - 0.715 * a, 0.072 - 0.072 * a, 0, 0, 0.213 - 0.213 * a, 0.715 + 0.285 * a, 0.072 - 0.072 * a, 0, 0, 0.213 - 0.213 * a, 0.715 - 0.715 * a, 0.072 + 0.928 * a, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
        break;
      }
      case "hueRotate": {
        var s = n[0] * Math.PI / 180;
        n = [Ft(s, 0.213, 0.787, -0.213), Ft(s, 0.715, -0.715, -0.715), Ft(s, 0.072, -0.072, 0.928), 0, 0, Ft(s, 0.213, -0.213, 0.143), Ft(s, 0.715, 0.285, 0.14), Ft(s, 0.072, -0.072, -0.283), 0, 0, Ft(s, 0.213, -0.213, -0.787), Ft(s, 0.715, -0.715, 0.715), Ft(s, 0.072, 0.928, 0.072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
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
      var f = Ee(u.data, c, h, n, a, 0), g = Ee(u.data, c, h, n, a, 1), l = Ee(u.data, c, h, n, a, 2), d = Ee(u.data, c, h, n, a, 3), p = rt(o, 0, f) + rt(o, 1, g) + rt(o, 2, l) + rt(o, 3, d) + rt(o, 4, 1), v = rt(o, 5, f) + rt(o, 6, g) + rt(o, 7, l) + rt(o, 8, d) + rt(o, 9, 1), y = rt(o, 10, f) + rt(o, 11, g) + rt(o, 12, l) + rt(o, 13, d) + rt(o, 14, 1), m = rt(o, 15, f) + rt(o, 16, g) + rt(o, 17, l) + rt(o, 18, d) + rt(o, 19, 1);
      s && (p = 0, v = 0, y = 0, m *= d / 255), Ce(u.data, c, h, n, a, 0, p), Ce(u.data, c, h, n, a, 1, v), Ce(u.data, c, h, n, a, 2, y), Ce(u.data, c, h, n, a, 3, m);
    }
    t.clearRect(0, 0, n, a), t.putImageData(u, 0, 0);
  }
}
class Ye extends G {
  constructor() {
    super(...arguments), this.type = "mask";
  }
  apply(t, e) {
    var {
      document: r
    } = this, n = this.getAttribute("x").getPixels("x"), a = this.getAttribute("y").getPixels("y"), s = this.getStyle("width").getPixels("x"), o = this.getStyle("height").getPixels("y");
    if (!s && !o) {
      var u = new Mt();
      this.children.forEach((d) => {
        u.addBoundingBox(d.getBoundingBox(t));
      }), n = Math.floor(u.x1), a = Math.floor(u.y1), s = Math.floor(u.width), o = Math.floor(u.height);
    }
    var h = this.removeStyles(e, Ye.ignoreStyles), c = r.createCanvas(n + s, a + o), f = c.getContext("2d");
    r.screen.setDefaults(f), this.renderChildren(f), new Wh(r, {
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
Ye.ignoreStyles = ["mask", "transform", "clip-path"];
var Ju = () => {
};
class Vf extends G {
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
    r && (r.beginPath = Ju, r.closePath = Ju), Reflect.apply(n, t, []), this.children.forEach((s) => {
      if (!(typeof s.path > "u")) {
        var o = typeof s.elementTransform < "u" ? s.elementTransform() : null;
        o || (o = Kt.fromElement(e, s)), o && o.apply(t), s.path(t), r && (r.closePath = a), o && o.unapply(t);
      }
    }), Reflect.apply(a, t, []), t.clip(), r && (r.beginPath = n, r.closePath = a);
  }
  render(t) {
  }
}
class We extends G {
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
        var g = Math.floor(a.x), l = Math.floor(a.y), d = this.removeStyles(e, We.ignoreStyles), p = r.createCanvas(c, f), v = p.getContext("2d");
        r.screen.setDefaults(v), v.translate(-g + s, -l + o), e.render(v), n.forEach((y) => {
          typeof y.apply == "function" && y.apply(v, 0, 0, c, f);
        }), t.drawImage(p, 0, 0, c, f, g - s, l - o, c, f), this.restoreStyles(e, d);
      }
    }
  }
  render(t) {
  }
}
We.ignoreStyles = ["filter", "transform", "clip-path"];
class If extends G {
  constructor(t, e, r) {
    super(t, e, r), this.type = "feDropShadow", this.addStylesFromStyleDefinition();
  }
  apply(t, e, r, n, a) {
  }
}
class kf extends G {
  constructor() {
    super(...arguments), this.type = "feMorphology";
  }
  apply(t, e, r, n, a) {
  }
}
class Rf extends G {
  constructor() {
    super(...arguments), this.type = "feComposite";
  }
  apply(t, e, r, n, a) {
  }
}
class _f extends G {
  constructor(t, e, r) {
    super(t, e, r), this.type = "feGaussianBlur", this.blurRadius = Math.floor(this.getAttribute("stdDeviation").getNumber()), this.extraFilterDistance = this.blurRadius;
  }
  apply(t, e, r, n, a) {
    var {
      document: s,
      blurRadius: o
    } = this, u = s.window ? s.window.document.body : null, h = t.canvas;
    h.id = s.getUniqueId(), u && (h.style.display = "none", u.appendChild(h)), Cl(h, e, r, n, a, o), u && u.removeChild(h);
  }
}
class Lf extends G {
  constructor() {
    super(...arguments), this.type = "title";
  }
}
class Df extends G {
  constructor() {
    super(...arguments), this.type = "desc";
  }
}
var jf = {
  svg: Se,
  rect: Uh,
  circle: uf,
  ellipse: hf,
  line: cf,
  polyline: Hh,
  polygon: lf,
  path: W,
  pattern: ff,
  marker: gf,
  defs: pf,
  linearGradient: df,
  radialGradient: vf,
  stop: mf,
  animate: $i,
  animateColor: yf,
  animateTransform: xf,
  font: bf,
  "font-face": wf,
  "missing-glyph": Sf,
  glyph: zh,
  text: qt,
  tspan: Xe,
  tref: Tf,
  a: Of,
  textPath: Af,
  image: Cf,
  g: Qi,
  symbol: Pf,
  style: Yh,
  use: Nf,
  mask: Ye,
  clipPath: Vf,
  filter: We,
  feDropShadow: If,
  feMorphology: kf,
  feComposite: Rf,
  feColorMatrix: Wh,
  feGaussianBlur: _f,
  title: Lf,
  desc: Df
};
function th(i, t) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function Ff(i) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? th(Object(e), !0).forEach(function(r) {
      Gi(i, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : th(Object(e)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return i;
}
function Bf(i, t) {
  var e = document.createElement("canvas");
  return e.width = i, e.height = t, e;
}
function zf(i) {
  return Ci.apply(this, arguments);
}
function Ci() {
  return Ci = Bt(function* (i) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, e = document.createElement("img");
    return t && (e.crossOrigin = "Anonymous"), new Promise((r, n) => {
      e.onload = () => {
        r(e);
      }, e.onerror = (a, s, o, u, h) => {
        n(h);
      }, e.src = i;
    });
  }), Ci.apply(this, arguments);
}
class Wt {
  constructor(t) {
    var {
      rootEmSize: e = 12,
      emSize: r = 12,
      createCanvas: n = Wt.createCanvas,
      createImage: a = Wt.createImage,
      anonymousCrossOrigin: s
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.canvg = t, this.definitions = /* @__PURE__ */ Object.create(null), this.styles = /* @__PURE__ */ Object.create(null), this.stylesSpecificity = /* @__PURE__ */ Object.create(null), this.images = [], this.fonts = [], this.emSizeStack = [], this.uniqueId = 0, this.screen = t.screen, this.rootEmSize = e, this.emSize = r, this.createCanvas = n, this.createImage = this.bindCreateImage(a, s), this.screen.wait(this.isImagesLoaded.bind(this)), this.screen.wait(this.isFontsLoaded.bind(this));
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
    var e = t.nodeName.replace(/^[^:]+:/, ""), r = Wt.elementTypes[e];
    return typeof r < "u" ? new r(this, t) : new ef(this, t);
  }
  createTextNode(t) {
    return new of(this, t);
  }
  setViewBox(t) {
    this.screen.setViewBox(Ff({
      document: this
    }, t));
  }
}
Wt.createCanvas = Bf;
Wt.createImage = zf;
Wt.elementTypes = jf;
function eh(i, t) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function Zt(i) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? eh(Object(e), !0).forEach(function(r) {
      Gi(i, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : eh(Object(e)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return i;
}
class pe {
  /**
   * Main constructor.
   * @param ctx - Rendering context.
   * @param svg - SVG Document.
   * @param options - Rendering options.
   */
  constructor(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.parser = new wi(r), this.screen = new He(t, r), this.options = r;
    var n = new Wt(this, r), a = n.createDocumentElement(e);
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
    return Bt(function* () {
      var n = r.length > 2 && r[2] !== void 0 ? r[2] : {}, a = new wi(n), s = yield a.parse(e);
      return new pe(t, s, n);
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
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = new wi(r), a = n.parseFromString(e);
    return new pe(t, a, r);
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
    return pe.from(t, e, Zt(Zt({}, this.options), r));
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
    return pe.fromString(t, e, Zt(Zt({}, this.options), r));
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
    return Bt(function* () {
      var r = t.length > 0 && t[0] !== void 0 ? t[0] : {};
      e.start(Zt({
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
    r.start(e, Zt(Zt({
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
  Of as AElement,
  yf as AnimateColorElement,
  $i as AnimateElement,
  xf as AnimateTransformElement,
  Mt as BoundingBox,
  Yu as CB1,
  Wu as CB2,
  qu as CB3,
  Gu as CB4,
  pe as Canvg,
  uf as CircleElement,
  Vf as ClipPathElement,
  pf as DefsElement,
  Df as DescElement,
  Wt as Document,
  G as Element,
  hf as EllipseElement,
  Wh as FeColorMatrixElement,
  Rf as FeCompositeElement,
  If as FeDropShadowElement,
  _f as FeGaussianBlurElement,
  kf as FeMorphologyElement,
  We as FilterElement,
  ot as Font,
  bf as FontElement,
  wf as FontFaceElement,
  Qi as GElement,
  zh as GlyphElement,
  Xh as GradientElement,
  Cf as ImageElement,
  cf as LineElement,
  df as LinearGradientElement,
  gf as MarkerElement,
  Ye as MaskElement,
  Fh as Matrix,
  Sf as MissingGlyphElement,
  Yl as Mouse,
  ie as PSEUDO_ZERO,
  wi as Parser,
  W as PathElement,
  z as PathParser,
  ff as PatternElement,
  tt as Point,
  lf as PolygonElement,
  Hh as PolylineElement,
  _ as Property,
  Qu as QB1,
  $u as QB2,
  Zu as QB3,
  vf as RadialGradientElement,
  Uh as RectElement,
  re as RenderedElement,
  Ql as Rotate,
  Se as SVGElement,
  Mf as SVGFontLoader,
  $l as Scale,
  He as Screen,
  Bh as Skew,
  Zl as SkewX,
  Kl as SkewY,
  mf as StopElement,
  Yh as StyleElement,
  Pf as SymbolElement,
  Tf as TRefElement,
  Xe as TSpanElement,
  qt as TextElement,
  Af as TextPathElement,
  Lf as TitleElement,
  Kt as Transform,
  Gl as Translate,
  ef as UnknownElement,
  Nf as UseElement,
  Xl as ViewPort,
  oe as compressSpaces,
  pe as default,
  Hl as getSelectorSpecificity,
  Rl as normalizeAttributeName,
  _l as normalizeColor,
  Lh as parseExternalUrl,
  Hf as presets,
  vt as toNumbers,
  Vl as trimLeft,
  Il as trimRight,
  Hu as vectorMagnitude,
  Xu as vectorsAngle,
  Ei as vectorsRatio
};
