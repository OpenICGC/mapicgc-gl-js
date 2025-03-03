/*! @license DOMPurify 2.5.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.8/LICENSE */
function R(n) {
  "@babel/helpers - typeof";
  return R = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, R(n);
}
function It(n, a) {
  return It = Object.setPrototypeOf || function(o, l) {
    return o.__proto__ = l, o;
  }, It(n, a);
}
function ze() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function it(n, a, o) {
  return ze() ? it = Reflect.construct : it = function(l, m, b) {
    var A = [null];
    A.push.apply(A, m);
    var K = Function.bind.apply(l, A), C = new K();
    return b && It(C, b.prototype), C;
  }, it.apply(null, arguments);
}
function w(n) {
  return Pe(n) || je(n) || Be(n) || Ge();
}
function Pe(n) {
  if (Array.isArray(n)) return Ft(n);
}
function je(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function Be(n, a) {
  if (n) {
    if (typeof n == "string") return Ft(n, a);
    var o = Object.prototype.toString.call(n).slice(8, -1);
    if (o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set") return Array.from(n);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return Ft(n, a);
  }
}
function Ft(n, a) {
  (a == null || a > n.length) && (a = n.length);
  for (var o = 0, l = new Array(a); o < a; o++) l[o] = n[o];
  return l;
}
function Ge() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var We = Object.hasOwnProperty, ce = Object.setPrototypeOf, qe = Object.isFrozen, $e = Object.getPrototypeOf, Ye = Object.getOwnPropertyDescriptor, y = Object.freeze, v = Object.seal, Ke = Object.create, he = typeof Reflect < "u" && Reflect, ct = he.apply, Ut = he.construct;
ct || (ct = function(n, a, o) {
  return n.apply(a, o);
});
y || (y = function(n) {
  return n;
});
v || (v = function(n) {
  return n;
});
Ut || (Ut = function(n, a) {
  return it(n, w(a));
});
var Ve = E(Array.prototype.forEach), se = E(Array.prototype.pop), Y = E(Array.prototype.push), lt = E(String.prototype.toLowerCase), Ot = E(String.prototype.toString), ue = E(String.prototype.match), _ = E(String.prototype.replace), Xe = E(String.prototype.indexOf), Ze = E(String.prototype.trim), g = E(RegExp.prototype.test), Lt = Je(TypeError);
function E(n) {
  return function(a) {
    for (var o = arguments.length, l = new Array(o > 1 ? o - 1 : 0), m = 1; m < o; m++) l[m - 1] = arguments[m];
    return ct(n, a, l);
  };
}
function Je(n) {
  return function() {
    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++) o[l] = arguments[l];
    return Ut(n, o);
  };
}
function i(n, a, o) {
  var l;
  o = (l = o) !== null && l !== void 0 ? l : lt, ce && ce(n, null);
  for (var m = a.length; m--; ) {
    var b = a[m];
    if (typeof b == "string") {
      var A = o(b);
      A !== b && (qe(a) || (a[m] = A), b = A);
    }
    n[b] = !0;
  }
  return n;
}
function U(n) {
  var a = Ke(null), o;
  for (o in n) ct(We, n, [o]) === !0 && (a[o] = n[o]);
  return a;
}
function at(n, a) {
  for (; n !== null; ) {
    var o = Ye(n, a);
    if (o) {
      if (o.get) return E(o.get);
      if (typeof o.value == "function") return E(o.value);
    }
    n = $e(n);
  }
  function l(m) {
    return console.warn("fallback value for", m), null;
  }
  return l;
}
var fe = y(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ct = y(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Dt = y(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Qe = y(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Rt = y(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), tn = y(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), me = y(["#text"]), pe = y(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Mt = y(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), de = y(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ot = y(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), en = v(/\{\{[\w\W]*|[\w\W]*\}\}/gm), nn = v(/<%[\w\W]*|[\w\W]*%>/gm), rn = v(/\${[\w\W]*}/gm), an = v(/^data-[\-\w.\u00B7-\uFFFF]+$/), on = v(/^aria-[\-\w]+$/), ln = v(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), cn = v(/^(?:\w+script|data):/i), sn = v(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), un = v(/^html$/i), fn = v(/^[a-z][.\w]*(-[.\w]+)+$/i), mn = function() {
  return typeof window > "u" ? null : window;
}, pn = function(n, a) {
  if (R(n) !== "object" || typeof n.createPolicy != "function") return null;
  var o = null, l = "data-tt-policy-suffix";
  a.currentScript && a.currentScript.hasAttribute(l) && (o = a.currentScript.getAttribute(l));
  var m = "dompurify" + (o ? "#" + o : "");
  try {
    return n.createPolicy(m, {
      createHTML: function(b) {
        return b;
      },
      createScriptURL: function(b) {
        return b;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + m + " could not be created."), null;
  }
};
function ge() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : mn(), a = function(t) {
    return ge(t);
  };
  if (a.version = "2.5.8", a.removed = [], !n || !n.document || n.document.nodeType !== 9) return a.isSupported = !1, a;
  var o = n.document, l = n.document, m = n.DocumentFragment, b = n.HTMLTemplateElement, A = n.Node, K = n.Element, C = n.NodeFilter, Ht = n.NamedNodeMap, ye = Ht === void 0 ? n.NamedNodeMap || n.MozNamedAttrMap : Ht, be = n.HTMLFormElement, Te = n.DOMParser, V = n.trustedTypes, X = K.prototype, Ne = at(X, "cloneNode"), ve = at(X, "nextSibling"), Ee = at(X, "childNodes"), st = at(X, "parentNode");
  if (typeof b == "function") {
    var ut = l.createElement("template");
    ut.content && ut.content.ownerDocument && (l = ut.content.ownerDocument);
  }
  var S = pn(V, o), ft = S ? S.createHTML("") : "", Z = l, mt = Z.implementation, Ae = Z.createNodeIterator, Se = Z.createDocumentFragment, _e = Z.getElementsByTagName, we = o.importNode, zt = {};
  try {
    zt = U(l).documentMode ? l.documentMode : {};
  } catch {
  }
  var k = {};
  a.isSupported = typeof st == "function" && mt && mt.createHTMLDocument !== void 0 && zt !== 9;
  var pt = en, dt = nn, ht = rn, ke = an, xe = on, Oe = cn, Pt = sn, Le = fn, gt = ln, p = null, jt = i({}, [].concat(w(fe), w(Ct), w(Dt), w(Rt), w(me))), d = null, Bt = i({}, [].concat(w(pe), w(Mt), w(de), w(ot))), s = Object.seal(Object.create(null, {
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
  })), W = null, yt = null, Gt = !0, bt = !0, Wt = !1, qt = !0, H = !1, Tt = !0, M = !1, Nt = !1, vt = !1, z = !1, J = !1, Q = !1, $t = !0, Yt = !1, Ce = "user-content-", Et = !0, q = !1, P = {}, j = null, Kt = i({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Vt = null, Xt = i({}, ["audio", "video", "img", "source", "image", "track"]), At = null, Zt = i({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), tt = "http://www.w3.org/1998/Math/MathML", et = "http://www.w3.org/2000/svg", O = "http://www.w3.org/1999/xhtml", B = O, St = !1, _t = null, De = i({}, [tt, et, O], Ot), I, Re = ["application/xhtml+xml", "text/html"], Me = "text/html", h, G = null, Ie = l.createElement("form"), Jt = function(t) {
    return t instanceof RegExp || t instanceof Function;
  }, wt = function(t) {
    G && G === t || ((!t || R(t) !== "object") && (t = {}), t = U(t), I = // eslint-disable-next-line unicorn/prefer-includes
    Re.indexOf(t.PARSER_MEDIA_TYPE) === -1 ? I = Me : I = t.PARSER_MEDIA_TYPE, h = I === "application/xhtml+xml" ? Ot : lt, p = "ALLOWED_TAGS" in t ? i({}, t.ALLOWED_TAGS, h) : jt, d = "ALLOWED_ATTR" in t ? i({}, t.ALLOWED_ATTR, h) : Bt, _t = "ALLOWED_NAMESPACES" in t ? i({}, t.ALLOWED_NAMESPACES, Ot) : De, At = "ADD_URI_SAFE_ATTR" in t ? i(
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
    ) : Xt, j = "FORBID_CONTENTS" in t ? i({}, t.FORBID_CONTENTS, h) : Kt, W = "FORBID_TAGS" in t ? i({}, t.FORBID_TAGS, h) : {}, yt = "FORBID_ATTR" in t ? i({}, t.FORBID_ATTR, h) : {}, P = "USE_PROFILES" in t ? t.USE_PROFILES : !1, Gt = t.ALLOW_ARIA_ATTR !== !1, bt = t.ALLOW_DATA_ATTR !== !1, Wt = t.ALLOW_UNKNOWN_PROTOCOLS || !1, qt = t.ALLOW_SELF_CLOSE_IN_ATTR !== !1, H = t.SAFE_FOR_TEMPLATES || !1, Tt = t.SAFE_FOR_XML !== !1, M = t.WHOLE_DOCUMENT || !1, z = t.RETURN_DOM || !1, J = t.RETURN_DOM_FRAGMENT || !1, Q = t.RETURN_TRUSTED_TYPE || !1, vt = t.FORCE_BODY || !1, $t = t.SANITIZE_DOM !== !1, Yt = t.SANITIZE_NAMED_PROPS || !1, Et = t.KEEP_CONTENT !== !1, q = t.IN_PLACE || !1, gt = t.ALLOWED_URI_REGEXP || gt, B = t.NAMESPACE || O, s = t.CUSTOM_ELEMENT_HANDLING || {}, t.CUSTOM_ELEMENT_HANDLING && Jt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (s.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && Jt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (s.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (s.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), H && (bt = !1), J && (z = !0), P && (p = i({}, w(me)), d = [], P.html === !0 && (i(p, fe), i(d, pe)), P.svg === !0 && (i(p, Ct), i(d, Mt), i(d, ot)), P.svgFilters === !0 && (i(p, Dt), i(d, Mt), i(d, ot)), P.mathMl === !0 && (i(p, Rt), i(d, de), i(d, ot))), t.ADD_TAGS && (p === jt && (p = U(p)), i(p, t.ADD_TAGS, h)), t.ADD_ATTR && (d === Bt && (d = U(d)), i(d, t.ADD_ATTR, h)), t.ADD_URI_SAFE_ATTR && i(At, t.ADD_URI_SAFE_ATTR, h), t.FORBID_CONTENTS && (j === Kt && (j = U(j)), i(j, t.FORBID_CONTENTS, h)), Et && (p["#text"] = !0), M && i(p, ["html", "head", "body"]), p.table && (i(p, ["tbody"]), delete W.tbody), y && y(t), G = t);
  }, Qt = i({}, ["mi", "mo", "mn", "ms", "mtext"]), te = i({}, ["annotation-xml"]), Fe = i({}, ["title", "style", "font", "a", "script"]), nt = i({}, Ct);
  i(nt, Dt), i(nt, Qe);
  var kt = i({}, Rt);
  i(kt, tn);
  var Ue = function(t) {
    var r = st(t);
    (!r || !r.tagName) && (r = {
      namespaceURI: B,
      tagName: "template"
    });
    var e = lt(t.tagName), c = lt(r.tagName);
    return _t[t.namespaceURI] ? t.namespaceURI === et ? r.namespaceURI === O ? e === "svg" : r.namespaceURI === tt ? e === "svg" && (c === "annotation-xml" || Qt[c]) : !!nt[e] : t.namespaceURI === tt ? r.namespaceURI === O ? e === "math" : r.namespaceURI === et ? e === "math" && te[c] : !!kt[e] : t.namespaceURI === O ? r.namespaceURI === et && !te[c] || r.namespaceURI === tt && !Qt[c] ? !1 : !kt[e] && (Fe[e] || !nt[e]) : !!(I === "application/xhtml+xml" && _t[t.namespaceURI]) : !1;
  }, F = function(t) {
    Y(a.removed, {
      element: t
    });
    try {
      t.parentNode.removeChild(t);
    } catch {
      try {
        t.outerHTML = ft;
      } catch {
        t.remove();
      }
    }
  }, rt = function(t, r) {
    try {
      Y(a.removed, {
        attribute: r.getAttributeNode(t),
        from: r
      });
    } catch {
      Y(a.removed, {
        attribute: null,
        from: r
      });
    }
    if (r.removeAttribute(t), t === "is" && !d[t]) if (z || J) try {
      F(r);
    } catch {
    }
    else try {
      r.setAttribute(t, "");
    } catch {
    }
  }, ee = function(t) {
    var r, e;
    if (vt) t = "<remove></remove>" + t;
    else {
      var c = ue(t, /^[\r\n\t ]+/);
      e = c && c[0];
    }
    I === "application/xhtml+xml" && B === O && (t = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + t + "</body></html>");
    var u = S ? S.createHTML(t) : t;
    if (B === O) try {
      r = new Te().parseFromString(u, I);
    } catch {
    }
    if (!r || !r.documentElement) {
      r = mt.createDocument(B, "template", null);
      try {
        r.documentElement.innerHTML = St ? ft : u;
      } catch {
      }
    }
    var N = r.body || r.documentElement;
    return t && e && N.insertBefore(l.createTextNode(e), N.childNodes[0] || null), B === O ? _e.call(r, M ? "html" : "body")[0] : M ? r.documentElement : N;
  }, ne = function(t) {
    return Ae.call(
      t.ownerDocument || t,
      t,
      // eslint-disable-next-line no-bitwise
      C.SHOW_ELEMENT | C.SHOW_COMMENT | C.SHOW_TEXT | C.SHOW_PROCESSING_INSTRUCTION | C.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, xt = function(t) {
    return t instanceof be && (typeof t.nodeName != "string" || typeof t.textContent != "string" || typeof t.removeChild != "function" || !(t.attributes instanceof ye) || typeof t.removeAttribute != "function" || typeof t.setAttribute != "function" || typeof t.namespaceURI != "string" || typeof t.insertBefore != "function" || typeof t.hasChildNodes != "function");
  }, $ = function(t) {
    return R(A) === "object" ? t instanceof A : t && R(t) === "object" && typeof t.nodeType == "number" && typeof t.nodeName == "string";
  }, L = function(t, r, e) {
    k[t] && Ve(k[t], function(c) {
      c.call(a, r, e, G);
    });
  }, re = function(t) {
    var r;
    if (L("beforeSanitizeElements", t, null), xt(t) || g(/[\u0080-\uFFFF]/, t.nodeName)) return F(t), !0;
    var e = h(t.nodeName);
    if (L("uponSanitizeElement", t, {
      tagName: e,
      allowedTags: p
    }), t.hasChildNodes() && !$(t.firstElementChild) && (!$(t.content) || !$(t.content.firstElementChild)) && g(/<[/\w]/g, t.innerHTML) && g(/<[/\w]/g, t.textContent) || e === "select" && g(/<template/i, t.innerHTML) || t.nodeType === 7 || Tt && t.nodeType === 8 && g(/<[/\w]/g, t.data)) return F(t), !0;
    if (!p[e] || W[e]) {
      if (!W[e] && oe(e) && (s.tagNameCheck instanceof RegExp && g(s.tagNameCheck, e) || s.tagNameCheck instanceof Function && s.tagNameCheck(e))) return !1;
      if (Et && !j[e]) {
        var c = st(t) || t.parentNode, u = Ee(t) || t.childNodes;
        if (u && c) for (var N = u.length, f = N - 1; f >= 0; --f) {
          var D = Ne(u[f], !0);
          D.__removalCount = (t.__removalCount || 0) + 1, c.insertBefore(D, ve(t));
        }
      }
      return F(t), !0;
    }
    return t instanceof K && !Ue(t) || (e === "noscript" || e === "noembed" || e === "noframes") && g(/<\/no(script|embed|frames)/i, t.innerHTML) ? (F(t), !0) : (H && t.nodeType === 3 && (r = t.textContent, r = _(r, pt, " "), r = _(r, dt, " "), r = _(r, ht, " "), t.textContent !== r && (Y(a.removed, {
      element: t.cloneNode()
    }), t.textContent = r)), L("afterSanitizeElements", t, null), !1);
  }, ae = function(t, r, e) {
    if ($t && (r === "id" || r === "name") && (e in l || e in Ie)) return !1;
    if (!(bt && !yt[r] && g(ke, r)) && !(Gt && g(xe, r))) {
      if (!d[r] || yt[r]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(oe(t) && (s.tagNameCheck instanceof RegExp && g(s.tagNameCheck, t) || s.tagNameCheck instanceof Function && s.tagNameCheck(t)) && (s.attributeNameCheck instanceof RegExp && g(s.attributeNameCheck, r) || s.attributeNameCheck instanceof Function && s.attributeNameCheck(r)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          r === "is" && s.allowCustomizedBuiltInElements && (s.tagNameCheck instanceof RegExp && g(s.tagNameCheck, e) || s.tagNameCheck instanceof Function && s.tagNameCheck(e)))
        ) return !1;
      } else if (!At[r] && !g(gt, _(e, Pt, "")) && !((r === "src" || r === "xlink:href" || r === "href") && t !== "script" && Xe(e, "data:") === 0 && Vt[t]) && !(Wt && !g(Oe, _(e, Pt, ""))) && e)
        return !1;
    }
    return !0;
  }, oe = function(t) {
    return t !== "annotation-xml" && ue(t, Le);
  }, ie = function(t) {
    var r, e, c, u;
    L("beforeSanitizeAttributes", t, null);
    var N = t.attributes;
    if (!(!N || xt(t))) {
      var f = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: d
      };
      for (u = N.length; u--; ) {
        r = N[u];
        var D = r, x = D.name, T = D.namespaceURI;
        if (e = x === "value" ? r.value : Ze(r.value), c = h(x), f.attrName = c, f.attrValue = e, f.keepAttr = !0, f.forceKeepAttr = void 0, L("uponSanitizeAttribute", t, f), e = f.attrValue, !f.forceKeepAttr && (rt(x, t), !!f.keepAttr)) {
          if (!qt && g(/\/>/i, e)) {
            rt(x, t);
            continue;
          }
          H && (e = _(e, pt, " "), e = _(e, dt, " "), e = _(e, ht, " "));
          var le = h(t.nodeName);
          if (ae(le, c, e)) {
            if (Yt && (c === "id" || c === "name") && (rt(x, t), e = Ce + e), Tt && g(/((--!?|])>)|<\/(style|title)/i, e)) {
              rt(x, t);
              continue;
            }
            if (S && R(V) === "object" && typeof V.getAttributeType == "function" && !T) switch (V.getAttributeType(le, c)) {
              case "TrustedHTML": {
                e = S.createHTML(e);
                break;
              }
              case "TrustedScriptURL": {
                e = S.createScriptURL(e);
                break;
              }
            }
            try {
              T ? t.setAttributeNS(T, x, e) : t.setAttribute(x, e), xt(t) ? F(t) : se(a.removed);
            } catch {
            }
          }
        }
      }
      L("afterSanitizeAttributes", t, null);
    }
  }, He = function t(r) {
    var e, c = ne(r);
    for (L("beforeSanitizeShadowDOM", r, null); e = c.nextNode(); ) L("uponSanitizeShadowNode", e, null), re(e), ie(e), e.content instanceof m && t(e.content);
    L("afterSanitizeShadowDOM", r, null);
  };
  return a.sanitize = function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e, c, u, N, f;
    if (St = !t, St && (t = "<!-->"), typeof t != "string" && !$(t)) if (typeof t.toString == "function") {
      if (t = t.toString(), typeof t != "string") throw Lt("dirty is not a string, aborting");
    } else throw Lt("toString is not a function");
    if (!a.isSupported) {
      if (R(n.toStaticHTML) === "object" || typeof n.toStaticHTML == "function") {
        if (typeof t == "string") return n.toStaticHTML(t);
        if ($(t)) return n.toStaticHTML(t.outerHTML);
      }
      return t;
    }
    if (Nt || wt(r), a.removed = [], typeof t == "string" && (q = !1), q) {
      if (t.nodeName) {
        var D = h(t.nodeName);
        if (!p[D] || W[D]) throw Lt("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (t instanceof A) e = ee("<!---->"), c = e.ownerDocument.importNode(t, !0), c.nodeType === 1 && c.nodeName === "BODY" || c.nodeName === "HTML" ? e = c : e.appendChild(c);
    else {
      if (!z && !H && !M && // eslint-disable-next-line unicorn/prefer-includes
      t.indexOf("<") === -1) return S && Q ? S.createHTML(t) : t;
      if (e = ee(t), !e) return z ? null : Q ? ft : "";
    }
    e && vt && F(e.firstChild);
    for (var x = ne(q ? t : e); u = x.nextNode(); ) u.nodeType === 3 && u === N || (re(u), ie(u), u.content instanceof m && He(u.content), N = u);
    if (N = null, q) return t;
    if (z) {
      if (J) for (f = Se.call(e.ownerDocument); e.firstChild; ) f.appendChild(e.firstChild);
      else f = e;
      return (d.shadowroot || d.shadowrootmod) && (f = we.call(o, f, !0)), f;
    }
    var T = M ? e.outerHTML : e.innerHTML;
    return M && p["!doctype"] && e.ownerDocument && e.ownerDocument.doctype && e.ownerDocument.doctype.name && g(un, e.ownerDocument.doctype.name) && (T = "<!DOCTYPE " + e.ownerDocument.doctype.name + `>
` + T), H && (T = _(T, pt, " "), T = _(T, dt, " "), T = _(T, ht, " ")), S && Q ? S.createHTML(T) : T;
  }, a.setConfig = function(t) {
    wt(t), Nt = !0;
  }, a.clearConfig = function() {
    G = null, Nt = !1;
  }, a.isValidAttribute = function(t, r, e) {
    G || wt({});
    var c = h(t), u = h(r);
    return ae(c, u, e);
  }, a.addHook = function(t, r) {
    typeof r == "function" && (k[t] = k[t] || [], Y(k[t], r));
  }, a.removeHook = function(t) {
    if (k[t]) return se(k[t]);
  }, a.removeHooks = function(t) {
    k[t] && (k[t] = []);
  }, a.removeAllHooks = function() {
    k = {};
  }, a;
}
var dn = ge();
export {
  dn as default
};
