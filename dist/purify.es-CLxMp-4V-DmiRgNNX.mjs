/*! @license DOMPurify 2.5.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.3/LICENSE */
function O(n) {
  "@babel/helpers - typeof";
  return O = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, O(n);
}
function It(n, o) {
  return It = Object.setPrototypeOf || function(a, c) {
    return a.__proto__ = c, a;
  }, It(n, o);
}
function je() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ct(n, o, a) {
  return je() ? ct = Reflect.construct : ct = function(c, p, _) {
    var E = [null];
    E.push.apply(E, p);
    var X = Function.bind.apply(c, E), R = new X();
    return _ && It(R, _.prototype), R;
  }, ct.apply(null, arguments);
}
function w(n) {
  return Be(n) || Ge(n) || We(n) || qe();
}
function Be(n) {
  if (Array.isArray(n))
    return Ft(n);
}
function Ge(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null)
    return Array.from(n);
}
function We(n, o) {
  if (n) {
    if (typeof n == "string")
      return Ft(n, o);
    var a = Object.prototype.toString.call(n).slice(8, -1);
    if (a === "Object" && n.constructor && (a = n.constructor.name), a === "Map" || a === "Set")
      return Array.from(n);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return Ft(n, o);
  }
}
function Ft(n, o) {
  (o == null || o > n.length) && (o = n.length);
  for (var a = 0, c = new Array(o); a < o; a++)
    c[a] = n[a];
  return c;
}
function qe() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ye = Object.hasOwnProperty, ue = Object.setPrototypeOf, $e = Object.isFrozen, Ke = Object.getPrototypeOf, Ve = Object.getOwnPropertyDescriptor, y = Object.freeze, N = Object.seal, Xe = Object.create, ye = typeof Reflect < "u" && Reflect, st = ye.apply, Ht = ye.construct;
st || (st = function(n, o, a) {
  return n.apply(o, a);
});
y || (y = function(n) {
  return n;
});
N || (N = function(n) {
  return n;
});
Ht || (Ht = function(n, o) {
  return ct(n, w(o));
});
var Ze = T(Array.prototype.forEach), se = T(Array.prototype.pop), V = T(Array.prototype.push), ut = T(String.prototype.toLowerCase), xt = T(String.prototype.toString), me = T(String.prototype.match), S = T(String.prototype.replace), Je = T(String.prototype.indexOf), Qe = T(String.prototype.trim), g = T(RegExp.prototype.test), Lt = tn(TypeError), pe = T(Number.isNaN);
function T(n) {
  return function(o) {
    for (var a = arguments.length, c = new Array(a > 1 ? a - 1 : 0), p = 1; p < a; p++)
      c[p - 1] = arguments[p];
    return st(n, o, c);
  };
}
function tn(n) {
  return function() {
    for (var o = arguments.length, a = new Array(o), c = 0; c < o; c++)
      a[c] = arguments[c];
    return Ht(n, a);
  };
}
function i(n, o, a) {
  var c;
  a = (c = a) !== null && c !== void 0 ? c : ut, ue && ue(n, null);
  for (var p = o.length; p--; ) {
    var _ = o[p];
    if (typeof _ == "string") {
      var E = a(_);
      E !== _ && ($e(o) || (o[p] = E), _ = E);
    }
    n[_] = !0;
  }
  return n;
}
function U(n) {
  var o = Xe(null), a;
  for (a in n)
    st(Ye, n, [a]) === !0 && (o[a] = n[a]);
  return o;
}
function it(n, o) {
  for (; n !== null; ) {
    var a = Ve(n, o);
    if (a) {
      if (a.get)
        return T(a.get);
      if (typeof a.value == "function")
        return T(a.value);
    }
    n = Ke(n);
  }
  function c(p) {
    return console.warn("fallback value for", p), null;
  }
  return c;
}
var fe = y(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Dt = y(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Rt = y(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), en = y(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Mt = y(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), nn = y(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), de = y(["#text"]), he = y(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Ot = y(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ge = y(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), lt = y(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), rn = N(/\{\{[\w\W]*|[\w\W]*\}\}/gm), on = N(/<%[\w\W]*|[\w\W]*%>/gm), an = N(/\${[\w\W]*}/gm), ln = N(/^data-[\-\w.\u00B7-\uFFFF]/), cn = N(/^aria-[\-\w]+$/), un = N(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), sn = N(/^(?:\w+script|data):/i), mn = N(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), pn = N(/^html$/i), fn = N(/^[a-z][.\w]*(-[.\w]+)+$/i), dn = function() {
  return typeof window > "u" ? null : window;
}, hn = function(n, o) {
  if (O(n) !== "object" || typeof n.createPolicy != "function")
    return null;
  var a = null, c = "data-tt-policy-suffix";
  o.currentScript && o.currentScript.hasAttribute(c) && (a = o.currentScript.getAttribute(c));
  var p = "dompurify" + (a ? "#" + a : "");
  try {
    return n.createPolicy(p, {
      createHTML: function(_) {
        return _;
      },
      createScriptURL: function(_) {
        return _;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + p + " could not be created."), null;
  }
};
function _e() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : dn(), o = function(t) {
    return _e(t);
  };
  if (o.version = "2.5.3", o.removed = [], !n || !n.document || n.document.nodeType !== 9)
    return o.isSupported = !1, o;
  var a = n.document, c = n.document, p = n.DocumentFragment, _ = n.HTMLTemplateElement, E = n.Node, X = n.Element, R = n.NodeFilter, Ut = n.NamedNodeMap, be = Ut === void 0 ? n.NamedNodeMap || n.MozNamedAttrMap : Ut, ve = n.HTMLFormElement, Te = n.DOMParser, Z = n.trustedTypes, J = X.prototype, Ne = it(J, "cloneNode"), Ee = it(J, "nextSibling"), Ae = it(J, "childNodes"), q = it(J, "parentNode");
  if (typeof _ == "function") {
    var mt = c.createElement("template");
    mt.content && mt.content.ownerDocument && (c = mt.content.ownerDocument);
  }
  var A = hn(Z, a), pt = A ? A.createHTML("") : "", Q = c, ft = Q.implementation, Se = Q.createNodeIterator, we = Q.createDocumentFragment, ke = Q.getElementsByTagName, Ce = a.importNode, zt = {};
  try {
    zt = U(c).documentMode ? c.documentMode : {};
  } catch {
  }
  var k = {};
  o.isSupported = typeof q == "function" && ft && ft.createHTMLDocument !== void 0 && zt !== 9;
  var dt = rn, ht = on, gt = an, xe = ln, Le = cn, De = sn, Pt = mn, Re = fn, yt = un, f = null, jt = i({}, [].concat(w(fe), w(Dt), w(Rt), w(Mt), w(de))), d = null, Bt = i({}, [].concat(w(he), w(Ot), w(ge), w(lt))), s = Object.seal(Object.create(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Y = null, _t = null, Gt = !0, bt = !0, Wt = !1, qt = !0, z = !1, vt = !0, I = !1, Tt = !1, Nt = !1, P = !1, tt = !1, et = !1, Yt = !0, $t = !1, Me = "user-content-", Et = !0, $ = !1, j = {}, B = null, Kt = i({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Vt = null, Xt = i({}, ["audio", "video", "img", "source", "image", "track"]), At = null, Zt = i({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), nt = "http://www.w3.org/1998/Math/MathML", rt = "http://www.w3.org/2000/svg", x = "http://www.w3.org/1999/xhtml", G = x, St = !1, wt = null, Oe = i({}, [nt, rt, x], xt), F, Ie = ["application/xhtml+xml", "text/html"], Fe = "text/html", h, W = null, Jt = 255, He = c.createElement("form"), Qt = function(t) {
    return t instanceof RegExp || t instanceof Function;
  }, kt = function(t) {
    W && W === t || ((!t || O(t) !== "object") && (t = {}), t = U(t), F = // eslint-disable-next-line unicorn/prefer-includes
    Ie.indexOf(t.PARSER_MEDIA_TYPE) === -1 ? F = Fe : F = t.PARSER_MEDIA_TYPE, h = F === "application/xhtml+xml" ? xt : ut, f = "ALLOWED_TAGS" in t ? i({}, t.ALLOWED_TAGS, h) : jt, d = "ALLOWED_ATTR" in t ? i({}, t.ALLOWED_ATTR, h) : Bt, wt = "ALLOWED_NAMESPACES" in t ? i({}, t.ALLOWED_NAMESPACES, xt) : Oe, At = "ADD_URI_SAFE_ATTR" in t ? i(
      U(Zt),
      // eslint-disable-line indent
      t.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      h
      // eslint-disable-line indent
    ) : Zt, Vt = "ADD_DATA_URI_TAGS" in t ? i(
      U(Xt),
      // eslint-disable-line indent
      t.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      h
      // eslint-disable-line indent
    ) : Xt, B = "FORBID_CONTENTS" in t ? i({}, t.FORBID_CONTENTS, h) : Kt, Y = "FORBID_TAGS" in t ? i({}, t.FORBID_TAGS, h) : {}, _t = "FORBID_ATTR" in t ? i({}, t.FORBID_ATTR, h) : {}, j = "USE_PROFILES" in t ? t.USE_PROFILES : !1, Gt = t.ALLOW_ARIA_ATTR !== !1, bt = t.ALLOW_DATA_ATTR !== !1, Wt = t.ALLOW_UNKNOWN_PROTOCOLS || !1, qt = t.ALLOW_SELF_CLOSE_IN_ATTR !== !1, z = t.SAFE_FOR_TEMPLATES || !1, vt = t.SAFE_FOR_XML !== !1, I = t.WHOLE_DOCUMENT || !1, P = t.RETURN_DOM || !1, tt = t.RETURN_DOM_FRAGMENT || !1, et = t.RETURN_TRUSTED_TYPE || !1, Nt = t.FORCE_BODY || !1, Yt = t.SANITIZE_DOM !== !1, $t = t.SANITIZE_NAMED_PROPS || !1, Et = t.KEEP_CONTENT !== !1, $ = t.IN_PLACE || !1, yt = t.ALLOWED_URI_REGEXP || yt, G = t.NAMESPACE || x, s = t.CUSTOM_ELEMENT_HANDLING || {}, t.CUSTOM_ELEMENT_HANDLING && Qt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (s.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && Qt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (s.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (s.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), z && (bt = !1), tt && (P = !0), j && (f = i({}, w(de)), d = [], j.html === !0 && (i(f, fe), i(d, he)), j.svg === !0 && (i(f, Dt), i(d, Ot), i(d, lt)), j.svgFilters === !0 && (i(f, Rt), i(d, Ot), i(d, lt)), j.mathMl === !0 && (i(f, Mt), i(d, ge), i(d, lt))), t.ADD_TAGS && (f === jt && (f = U(f)), i(f, t.ADD_TAGS, h)), t.ADD_ATTR && (d === Bt && (d = U(d)), i(d, t.ADD_ATTR, h)), t.ADD_URI_SAFE_ATTR && i(At, t.ADD_URI_SAFE_ATTR, h), t.FORBID_CONTENTS && (B === Kt && (B = U(B)), i(B, t.FORBID_CONTENTS, h)), Et && (f["#text"] = !0), I && i(f, ["html", "head", "body"]), f.table && (i(f, ["tbody"]), delete Y.tbody), y && y(t), W = t);
  }, te = i({}, ["mi", "mo", "mn", "ms", "mtext"]), ee = i({}, ["foreignobject", "annotation-xml"]), Ue = i({}, ["title", "style", "font", "a", "script"]), ot = i({}, Dt);
  i(ot, Rt), i(ot, en);
  var Ct = i({}, Mt);
  i(Ct, nn);
  var ze = function(t) {
    var r = q(t);
    (!r || !r.tagName) && (r = {
      namespaceURI: G,
      tagName: "template"
    });
    var e = ut(t.tagName), u = ut(r.tagName);
    return wt[t.namespaceURI] ? t.namespaceURI === rt ? r.namespaceURI === x ? e === "svg" : r.namespaceURI === nt ? e === "svg" && (u === "annotation-xml" || te[u]) : !!ot[e] : t.namespaceURI === nt ? r.namespaceURI === x ? e === "math" : r.namespaceURI === rt ? e === "math" && ee[u] : !!Ct[e] : t.namespaceURI === x ? r.namespaceURI === rt && !ee[u] || r.namespaceURI === nt && !te[u] ? !1 : !Ct[e] && (Ue[e] || !ot[e]) : !!(F === "application/xhtml+xml" && wt[t.namespaceURI]) : !1;
  }, L = function(t) {
    V(o.removed, {
      element: t
    });
    try {
      t.parentNode.removeChild(t);
    } catch {
      try {
        t.outerHTML = pt;
      } catch {
        t.remove();
      }
    }
  }, at = function(t, r) {
    try {
      V(o.removed, {
        attribute: r.getAttributeNode(t),
        from: r
      });
    } catch {
      V(o.removed, {
        attribute: null,
        from: r
      });
    }
    if (r.removeAttribute(t), t === "is" && !d[t])
      if (P || tt)
        try {
          L(r);
        } catch {
        }
      else
        try {
          r.setAttribute(t, "");
        } catch {
        }
  }, ne = function(t) {
    var r, e;
    if (Nt)
      t = "<remove></remove>" + t;
    else {
      var u = me(t, /^[\r\n\t ]+/);
      e = u && u[0];
    }
    F === "application/xhtml+xml" && G === x && (t = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + t + "</body></html>");
    var l = A ? A.createHTML(t) : t;
    if (G === x)
      try {
        r = new Te().parseFromString(l, F);
      } catch {
      }
    if (!r || !r.documentElement) {
      r = ft.createDocument(G, "template", null);
      try {
        r.documentElement.innerHTML = St ? pt : l;
      } catch {
      }
    }
    var b = r.body || r.documentElement;
    return t && e && b.insertBefore(c.createTextNode(e), b.childNodes[0] || null), G === x ? ke.call(r, I ? "html" : "body")[0] : I ? r.documentElement : b;
  }, re = function(t) {
    return Se.call(
      t.ownerDocument || t,
      t,
      // eslint-disable-next-line no-bitwise
      R.SHOW_ELEMENT | R.SHOW_COMMENT | R.SHOW_TEXT | R.SHOW_PROCESSING_INSTRUCTION | R.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, oe = function(t) {
    return t instanceof ve && (typeof t.__depth < "u" && typeof t.__depth != "number" || typeof t.__removalCount < "u" && typeof t.__removalCount != "number" || typeof t.nodeName != "string" || typeof t.textContent != "string" || typeof t.removeChild != "function" || !(t.attributes instanceof be) || typeof t.removeAttribute != "function" || typeof t.setAttribute != "function" || typeof t.namespaceURI != "string" || typeof t.insertBefore != "function" || typeof t.hasChildNodes != "function");
  }, K = function(t) {
    return O(E) === "object" ? t instanceof E : t && O(t) === "object" && typeof t.nodeType == "number" && typeof t.nodeName == "string";
  }, D = function(t, r, e) {
    k[t] && Ze(k[t], function(u) {
      u.call(o, r, e, W);
    });
  }, ae = function(t) {
    var r;
    if (D("beforeSanitizeElements", t, null), oe(t) || g(/[\u0080-\uFFFF]/, t.nodeName))
      return L(t), !0;
    var e = h(t.nodeName);
    if (D("uponSanitizeElement", t, {
      tagName: e,
      allowedTags: f
    }), t.hasChildNodes() && !K(t.firstElementChild) && (!K(t.content) || !K(t.content.firstElementChild)) && g(/<[/\w]/g, t.innerHTML) && g(/<[/\w]/g, t.textContent) || e === "select" && g(/<template/i, t.innerHTML) || t.nodeType === 7 || vt && t.nodeType === 8 && g(/<[/\w]/g, t.data))
      return L(t), !0;
    if (!f[e] || Y[e]) {
      if (!Y[e] && le(e) && (s.tagNameCheck instanceof RegExp && g(s.tagNameCheck, e) || s.tagNameCheck instanceof Function && s.tagNameCheck(e)))
        return !1;
      if (Et && !B[e]) {
        var u = q(t) || t.parentNode, l = Ae(t) || t.childNodes;
        if (l && u)
          for (var b = l.length, m = b - 1; m >= 0; --m) {
            var M = Ne(l[m], !0);
            M.__removalCount = (t.__removalCount || 0) + 1, u.insertBefore(M, Ee(t));
          }
      }
      return L(t), !0;
    }
    return t instanceof X && !ze(t) || (e === "noscript" || e === "noembed" || e === "noframes") && g(/<\/no(script|embed|frames)/i, t.innerHTML) ? (L(t), !0) : (z && t.nodeType === 3 && (r = t.textContent, r = S(r, dt, " "), r = S(r, ht, " "), r = S(r, gt, " "), t.textContent !== r && (V(o.removed, {
      element: t.cloneNode()
    }), t.textContent = r)), D("afterSanitizeElements", t, null), !1);
  }, ie = function(t, r, e) {
    if (Yt && (r === "id" || r === "name") && (e in c || e in He || e === "__depth" || e === "__removalCount"))
      return !1;
    if (!(bt && !_t[r] && g(xe, r)) && !(Gt && g(Le, r))) {
      if (!d[r] || _t[r]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(le(t) && (s.tagNameCheck instanceof RegExp && g(s.tagNameCheck, t) || s.tagNameCheck instanceof Function && s.tagNameCheck(t)) && (s.attributeNameCheck instanceof RegExp && g(s.attributeNameCheck, r) || s.attributeNameCheck instanceof Function && s.attributeNameCheck(r)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          r === "is" && s.allowCustomizedBuiltInElements && (s.tagNameCheck instanceof RegExp && g(s.tagNameCheck, e) || s.tagNameCheck instanceof Function && s.tagNameCheck(e)))
        )
          return !1;
      } else if (!At[r] && !g(yt, S(e, Pt, "")) && !((r === "src" || r === "xlink:href" || r === "href") && t !== "script" && Je(e, "data:") === 0 && Vt[t]) && !(Wt && !g(De, S(e, Pt, ""))) && e)
        return !1;
    }
    return !0;
  }, le = function(t) {
    return t !== "annotation-xml" && me(t, Re);
  }, ce = function(t) {
    var r, e, u, l;
    D("beforeSanitizeAttributes", t, null);
    var b = t.attributes;
    if (b) {
      var m = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: d
      };
      for (l = b.length; l--; ) {
        r = b[l];
        var M = r, C = M.name, H = M.namespaceURI;
        if (e = C === "value" ? r.value : Qe(r.value), u = h(C), m.attrName = u, m.attrValue = e, m.keepAttr = !0, m.forceKeepAttr = void 0, D("uponSanitizeAttribute", t, m), e = m.attrValue, !m.forceKeepAttr && (at(C, t), !!m.keepAttr)) {
          if (!qt && g(/\/>/i, e)) {
            at(C, t);
            continue;
          }
          if (vt && g(/((--!?|])>)|<\/(style|title)/i, e)) {
            at(C, t);
            continue;
          }
          z && (e = S(e, dt, " "), e = S(e, ht, " "), e = S(e, gt, " "));
          var v = h(t.nodeName);
          if (ie(v, u, e)) {
            if ($t && (u === "id" || u === "name") && (at(C, t), e = Me + e), A && O(Z) === "object" && typeof Z.getAttributeType == "function" && !H)
              switch (Z.getAttributeType(v, u)) {
                case "TrustedHTML": {
                  e = A.createHTML(e);
                  break;
                }
                case "TrustedScriptURL": {
                  e = A.createScriptURL(e);
                  break;
                }
              }
            try {
              H ? t.setAttributeNS(H, C, e) : t.setAttribute(C, e), oe(t) ? L(t) : se(o.removed);
            } catch {
            }
          }
        }
      }
      D("afterSanitizeAttributes", t, null);
    }
  }, Pe = function t(r) {
    var e, u = re(r);
    for (D("beforeSanitizeShadowDOM", r, null); e = u.nextNode(); )
      if (D("uponSanitizeShadowNode", e, null), !ae(e)) {
        var l = q(e);
        e.nodeType === 1 && (l && l.__depth ? e.__depth = (e.__removalCount || 0) + l.__depth + 1 : e.__depth = 1), (e.__depth >= Jt || pe(e.__depth)) && L(e), e.content instanceof p && (e.content.__depth = e.__depth, t(e.content)), ce(e);
      }
    D("afterSanitizeShadowDOM", r, null);
  };
  return o.sanitize = function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e, u, l, b, m;
    if (St = !t, St && (t = "<!-->"), typeof t != "string" && !K(t))
      if (typeof t.toString == "function") {
        if (t = t.toString(), typeof t != "string")
          throw Lt("dirty is not a string, aborting");
      } else
        throw Lt("toString is not a function");
    if (!o.isSupported) {
      if (O(n.toStaticHTML) === "object" || typeof n.toStaticHTML == "function") {
        if (typeof t == "string")
          return n.toStaticHTML(t);
        if (K(t))
          return n.toStaticHTML(t.outerHTML);
      }
      return t;
    }
    if (Tt || kt(r), o.removed = [], typeof t == "string" && ($ = !1), $) {
      if (t.nodeName) {
        var M = h(t.nodeName);
        if (!f[M] || Y[M])
          throw Lt("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (t instanceof E)
      e = ne("<!---->"), u = e.ownerDocument.importNode(t, !0), u.nodeType === 1 && u.nodeName === "BODY" || u.nodeName === "HTML" ? e = u : e.appendChild(u);
    else {
      if (!P && !z && !I && // eslint-disable-next-line unicorn/prefer-includes
      t.indexOf("<") === -1)
        return A && et ? A.createHTML(t) : t;
      if (e = ne(t), !e)
        return P ? null : et ? pt : "";
    }
    e && Nt && L(e.firstChild);
    for (var C = re($ ? t : e); l = C.nextNode(); )
      if (!(l.nodeType === 3 && l === b) && !ae(l)) {
        var H = q(l);
        l.nodeType === 1 && (H && H.__depth ? l.__depth = (l.__removalCount || 0) + H.__depth + 1 : l.__depth = 1), (l.__depth >= Jt || pe(l.__depth)) && L(l), l.content instanceof p && (l.content.__depth = l.__depth, Pe(l.content)), ce(l), b = l;
      }
    if (b = null, $)
      return t;
    if (P) {
      if (tt)
        for (m = we.call(e.ownerDocument); e.firstChild; )
          m.appendChild(e.firstChild);
      else
        m = e;
      return (d.shadowroot || d.shadowrootmod) && (m = Ce.call(a, m, !0)), m;
    }
    var v = I ? e.outerHTML : e.innerHTML;
    return I && f["!doctype"] && e.ownerDocument && e.ownerDocument.doctype && e.ownerDocument.doctype.name && g(pn, e.ownerDocument.doctype.name) && (v = "<!DOCTYPE " + e.ownerDocument.doctype.name + `>
` + v), z && (v = S(v, dt, " "), v = S(v, ht, " "), v = S(v, gt, " ")), A && et ? A.createHTML(v) : v;
  }, o.setConfig = function(t) {
    kt(t), Tt = !0;
  }, o.clearConfig = function() {
    W = null, Tt = !1;
  }, o.isValidAttribute = function(t, r, e) {
    W || kt({});
    var u = h(t), l = h(r);
    return ie(u, l, e);
  }, o.addHook = function(t, r) {
    typeof r == "function" && (k[t] = k[t] || [], V(k[t], r));
  }, o.removeHook = function(t) {
    if (k[t])
      return se(k[t]);
  }, o.removeHooks = function(t) {
    k[t] && (k[t] = []);
  }, o.removeAllHooks = function() {
    k = {};
  }, o;
}
var gn = _e();
export {
  gn as default
};
