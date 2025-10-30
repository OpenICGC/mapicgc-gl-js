/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */
const {
  entries: ft,
  setPrototypeOf: ot,
  isFrozen: Bt,
  getPrototypeOf: Gt,
  getOwnPropertyDescriptor: Yt
} = Object;
let {
  freeze: A,
  seal: N,
  create: pt
} = Object, {
  apply: Ce,
  construct: De
} = typeof Reflect < "u" && Reflect;
A || (A = function(r) {
  return r;
});
N || (N = function(r) {
  return r;
});
Ce || (Ce = function(r, o, l) {
  return r.apply(o, l);
});
De || (De = function(r, o) {
  return new r(...o);
});
const ie = _(Array.prototype.forEach), jt = _(Array.prototype.lastIndexOf), rt = _(Array.prototype.pop), X = _(Array.prototype.push), Xt = _(Array.prototype.splice), se = _(String.prototype.toLowerCase), Re = _(String.prototype.toString), at = _(String.prototype.match), q = _(String.prototype.replace), qt = _(String.prototype.indexOf), $t = _(String.prototype.trim), b = _(Object.prototype.hasOwnProperty), E = _(RegExp.prototype.test), $ = Kt(TypeError);
function _(r) {
  return function(o) {
    o instanceof RegExp && (o.lastIndex = 0);
    for (var l = arguments.length, i = new Array(l > 1 ? l - 1 : 0), h = 1; h < l; h++) i[h - 1] = arguments[h];
    return Ce(r, o, i);
  };
}
function Kt(r) {
  return function() {
    for (var o = arguments.length, l = new Array(o), i = 0; i < o; i++) l[i] = arguments[i];
    return De(r, l);
  };
}
function a(r, o) {
  let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : se;
  ot && ot(r, null);
  let i = o.length;
  for (; i--; ) {
    let h = o[i];
    if (typeof h == "string") {
      const R = l(h);
      R !== h && (Bt(o) || (o[i] = R), h = R);
    }
    r[h] = !0;
  }
  return r;
}
function Vt(r) {
  for (let o = 0; o < r.length; o++) b(r, o) || (r[o] = null);
  return r;
}
function C(r) {
  const o = pt(null);
  for (const [l, i] of ft(r)) b(r, l) && (Array.isArray(i) ? o[l] = Vt(i) : i && typeof i == "object" && i.constructor === Object ? o[l] = C(i) : o[l] = i);
  return o;
}
function K(r, o) {
  for (; r !== null; ) {
    const i = Yt(r, o);
    if (i) {
      if (i.get) return _(i.get);
      if (typeof i.value == "function") return _(i.value);
    }
    r = Gt(r);
  }
  function l() {
    return null;
  }
  return l;
}
const it = A(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), we = A(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Oe = A(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Zt = A(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Le = A(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Jt = A(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), lt = A(["#text"]), st = A(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ve = A(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ct = A(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), le = A(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Qt = N(/\{\{[\w\W]*|[\w\W]*\}\}/gm), en = N(/<%[\w\W]*|[\w\W]*%>/gm), tn = N(/\$\{[\w\W]*/gm), nn = N(/^data-[\-\w.\u00B7-\uFFFF]+$/), on = N(/^aria-[\-\w]+$/), dt = N(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), rn = N(/^(?:\w+script|data):/i), an = N(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), gt = N(/^html$/i), ln = N(/^[a-z][.\w]*(-[.\w]+)+$/i);
var ut = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: on,
  ATTR_WHITESPACE: an,
  CUSTOM_ELEMENT: ln,
  DATA_ATTR: nn,
  DOCTYPE_NAME: gt,
  ERB_EXPR: en,
  IS_ALLOWED_URI: dt,
  IS_SCRIPT_OR_DATA: rn,
  MUSTACHE_EXPR: Qt,
  TMPLIT_EXPR: tn
});
const V = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, sn = function() {
  return typeof window > "u" ? null : window;
}, cn = function(r, o) {
  if (typeof r != "object" || typeof r.createPolicy != "function") return null;
  let l = null;
  const i = "data-tt-policy-suffix";
  o && o.hasAttribute(i) && (l = o.getAttribute(i));
  const h = "dompurify" + (l ? "#" + l : "");
  try {
    return r.createPolicy(h, {
      createHTML(R) {
        return R;
      },
      createScriptURL(R) {
        return R;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + h + " could not be created."), null;
  }
}, mt = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function ht() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : sn();
  const o = (e) => ht(e);
  if (o.version = "3.2.6", o.removed = [], !r || !r.document || r.document.nodeType !== V.document || !r.Element) return o.isSupported = !1, o;
  let {
    document: l
  } = r;
  const i = l, h = i.currentScript, {
    DocumentFragment: R,
    HTMLTemplateElement: Tt,
    Node: ce,
    Element: xe,
    NodeFilter: F,
    NamedNodeMap: yt = r.NamedNodeMap || r.MozNamedAttrMap,
    HTMLFormElement: Et,
    DOMParser: At,
    trustedTypes: Z
  } = r, W = xe.prototype, _t = K(W, "cloneNode"), Nt = K(W, "remove"), St = K(W, "nextSibling"), bt = K(W, "childNodes"), J = K(W, "parentNode");
  if (typeof Tt == "function") {
    const e = l.createElement("template");
    e.content && e.content.ownerDocument && (l = e.content.ownerDocument);
  }
  let T, B = "";
  const {
    implementation: ue,
    createNodeIterator: Rt,
    createDocumentFragment: wt,
    getElementsByTagName: Ot
  } = l, {
    importNode: Lt
  } = i;
  let y = mt();
  o.isSupported = typeof ft == "function" && typeof J == "function" && ue && ue.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: me,
    ERB_EXPR: fe,
    TMPLIT_EXPR: pe,
    DATA_ATTR: vt,
    ARIA_ATTR: Ct,
    IS_SCRIPT_OR_DATA: Dt,
    ATTR_WHITESPACE: Ie,
    CUSTOM_ELEMENT: xt
  } = ut;
  let {
    IS_ALLOWED_URI: ke
  } = ut, m = null;
  const Me = a({}, [...it, ...we, ...Oe, ...Le, ...lt]);
  let p = null;
  const Ue = a({}, [...st, ...ve, ...ct, ...le]);
  let u = Object.seal(pt(null, {
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
  })), G = null, de = null, Pe = !0, ge = !0, ze = !1, He = !0, I = !1, Q = !0, D = !1, he = !1, Te = !1, k = !1, ee = !1, te = !1, Fe = !0, We = !1;
  const It = "user-content-";
  let ye = !0, Y = !1, M = {}, U = null;
  const Be = a({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Ge = null;
  const Ye = a({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ee = null;
  const je = a({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ne = "http://www.w3.org/1998/Math/MathML", oe = "http://www.w3.org/2000/svg", O = "http://www.w3.org/1999/xhtml";
  let P = O, Ae = !1, _e = null;
  const kt = a({}, [ne, oe, O], Re);
  let re = a({}, ["mi", "mo", "mn", "ms", "mtext"]), ae = a({}, ["annotation-xml"]);
  const Mt = a({}, ["title", "style", "font", "a", "script"]);
  let j = null;
  const Ut = ["application/xhtml+xml", "text/html"], Pt = "text/html";
  let f = null, z = null;
  const zt = l.createElement("form"), Xe = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, Ne = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(z && z === e)) {
      if ((!e || typeof e != "object") && (e = {}), e = C(e), j = // eslint-disable-next-line unicorn/prefer-includes
      Ut.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? Pt : e.PARSER_MEDIA_TYPE, f = j === "application/xhtml+xml" ? Re : se, m = b(e, "ALLOWED_TAGS") ? a({}, e.ALLOWED_TAGS, f) : Me, p = b(e, "ALLOWED_ATTR") ? a({}, e.ALLOWED_ATTR, f) : Ue, _e = b(e, "ALLOWED_NAMESPACES") ? a({}, e.ALLOWED_NAMESPACES, Re) : kt, Ee = b(e, "ADD_URI_SAFE_ATTR") ? a(C(je), e.ADD_URI_SAFE_ATTR, f) : je, Ge = b(e, "ADD_DATA_URI_TAGS") ? a(C(Ye), e.ADD_DATA_URI_TAGS, f) : Ye, U = b(e, "FORBID_CONTENTS") ? a({}, e.FORBID_CONTENTS, f) : Be, G = b(e, "FORBID_TAGS") ? a({}, e.FORBID_TAGS, f) : C({}), de = b(e, "FORBID_ATTR") ? a({}, e.FORBID_ATTR, f) : C({}), M = b(e, "USE_PROFILES") ? e.USE_PROFILES : !1, Pe = e.ALLOW_ARIA_ATTR !== !1, ge = e.ALLOW_DATA_ATTR !== !1, ze = e.ALLOW_UNKNOWN_PROTOCOLS || !1, He = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, I = e.SAFE_FOR_TEMPLATES || !1, Q = e.SAFE_FOR_XML !== !1, D = e.WHOLE_DOCUMENT || !1, k = e.RETURN_DOM || !1, ee = e.RETURN_DOM_FRAGMENT || !1, te = e.RETURN_TRUSTED_TYPE || !1, Te = e.FORCE_BODY || !1, Fe = e.SANITIZE_DOM !== !1, We = e.SANITIZE_NAMED_PROPS || !1, ye = e.KEEP_CONTENT !== !1, Y = e.IN_PLACE || !1, ke = e.ALLOWED_URI_REGEXP || dt, P = e.NAMESPACE || O, re = e.MATHML_TEXT_INTEGRATION_POINTS || re, ae = e.HTML_INTEGRATION_POINTS || ae, u = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && Xe(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (u.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && Xe(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (u.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (u.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), I && (ge = !1), ee && (k = !0), M && (m = a({}, lt), p = [], M.html === !0 && (a(m, it), a(p, st)), M.svg === !0 && (a(m, we), a(p, ve), a(p, le)), M.svgFilters === !0 && (a(m, Oe), a(p, ve), a(p, le)), M.mathMl === !0 && (a(m, Le), a(p, ct), a(p, le))), e.ADD_TAGS && (m === Me && (m = C(m)), a(m, e.ADD_TAGS, f)), e.ADD_ATTR && (p === Ue && (p = C(p)), a(p, e.ADD_ATTR, f)), e.ADD_URI_SAFE_ATTR && a(Ee, e.ADD_URI_SAFE_ATTR, f), e.FORBID_CONTENTS && (U === Be && (U = C(U)), a(U, e.FORBID_CONTENTS, f)), ye && (m["#text"] = !0), D && a(m, ["html", "head", "body"]), m.table && (a(m, ["tbody"]), delete G.tbody), e.TRUSTED_TYPES_POLICY) {
        if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function") throw $('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw $('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        T = e.TRUSTED_TYPES_POLICY, B = T.createHTML("");
      } else T === void 0 && (T = cn(Z, h)), T !== null && typeof B == "string" && (B = T.createHTML(""));
      A && A(e), z = e;
    }
  }, qe = a({}, [...we, ...Oe, ...Zt]), $e = a({}, [...Le, ...Jt]), Ht = function(e) {
    let n = J(e);
    (!n || !n.tagName) && (n = {
      namespaceURI: P,
      tagName: "template"
    });
    const t = se(e.tagName), s = se(n.tagName);
    return _e[e.namespaceURI] ? e.namespaceURI === oe ? n.namespaceURI === O ? t === "svg" : n.namespaceURI === ne ? t === "svg" && (s === "annotation-xml" || re[s]) : !!qe[t] : e.namespaceURI === ne ? n.namespaceURI === O ? t === "math" : n.namespaceURI === oe ? t === "math" && ae[s] : !!$e[t] : e.namespaceURI === O ? n.namespaceURI === oe && !ae[s] || n.namespaceURI === ne && !re[s] ? !1 : !$e[t] && (Mt[t] || !qe[t]) : !!(j === "application/xhtml+xml" && _e[e.namespaceURI]) : !1;
  }, x = function(e) {
    X(o.removed, {
      element: e
    });
    try {
      J(e).removeChild(e);
    } catch {
      Nt(e);
    }
  }, H = function(e, n) {
    try {
      X(o.removed, {
        attribute: n.getAttributeNode(e),
        from: n
      });
    } catch {
      X(o.removed, {
        attribute: null,
        from: n
      });
    }
    if (n.removeAttribute(e), e === "is") if (k || ee) try {
      x(n);
    } catch {
    }
    else try {
      n.setAttribute(e, "");
    } catch {
    }
  }, Ke = function(e) {
    let n = null, t = null;
    if (Te) e = "<remove></remove>" + e;
    else {
      const c = at(e, /^[\r\n\t ]+/);
      t = c && c[0];
    }
    j === "application/xhtml+xml" && P === O && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    const s = T ? T.createHTML(e) : e;
    if (P === O) try {
      n = new At().parseFromString(s, j);
    } catch {
    }
    if (!n || !n.documentElement) {
      n = ue.createDocument(P, "template", null);
      try {
        n.documentElement.innerHTML = Ae ? B : s;
      } catch {
      }
    }
    const d = n.body || n.documentElement;
    return e && t && d.insertBefore(l.createTextNode(t), d.childNodes[0] || null), P === O ? Ot.call(n, D ? "html" : "body")[0] : D ? n.documentElement : d;
  }, Ve = function(e) {
    return Rt.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      F.SHOW_ELEMENT | F.SHOW_COMMENT | F.SHOW_TEXT | F.SHOW_PROCESSING_INSTRUCTION | F.SHOW_CDATA_SECTION,
      null
    );
  }, Se = function(e) {
    return e instanceof Et && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof yt) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, Ze = function(e) {
    return typeof ce == "function" && e instanceof ce;
  };
  function L(e, n, t) {
    ie(e, (s) => {
      s.call(o, n, t, z);
    });
  }
  const Je = function(e) {
    let n = null;
    if (L(y.beforeSanitizeElements, e, null), Se(e)) return x(e), !0;
    const t = f(e.nodeName);
    if (L(y.uponSanitizeElement, e, {
      tagName: t,
      allowedTags: m
    }), Q && e.hasChildNodes() && !Ze(e.firstElementChild) && E(/<[/\w!]/g, e.innerHTML) && E(/<[/\w!]/g, e.textContent) || e.nodeType === V.progressingInstruction || Q && e.nodeType === V.comment && E(/<[/\w]/g, e.data)) return x(e), !0;
    if (!m[t] || G[t]) {
      if (!G[t] && et(t) && (u.tagNameCheck instanceof RegExp && E(u.tagNameCheck, t) || u.tagNameCheck instanceof Function && u.tagNameCheck(t))) return !1;
      if (ye && !U[t]) {
        const s = J(e) || e.parentNode, d = bt(e) || e.childNodes;
        if (d && s) {
          const c = d.length;
          for (let v = c - 1; v >= 0; --v) {
            const S = _t(d[v], !0);
            S.__removalCount = (e.__removalCount || 0) + 1, s.insertBefore(S, St(e));
          }
        }
      }
      return x(e), !0;
    }
    return e instanceof xe && !Ht(e) || (t === "noscript" || t === "noembed" || t === "noframes") && E(/<\/no(script|embed|frames)/i, e.innerHTML) ? (x(e), !0) : (I && e.nodeType === V.text && (n = e.textContent, ie([me, fe, pe], (s) => {
      n = q(n, s, " ");
    }), e.textContent !== n && (X(o.removed, {
      element: e.cloneNode()
    }), e.textContent = n)), L(y.afterSanitizeElements, e, null), !1);
  }, Qe = function(e, n, t) {
    if (Fe && (n === "id" || n === "name") && (t in l || t in zt)) return !1;
    if (!(ge && !de[n] && E(vt, n)) && !(Pe && E(Ct, n))) {
      if (!p[n] || de[n]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(et(e) && (u.tagNameCheck instanceof RegExp && E(u.tagNameCheck, e) || u.tagNameCheck instanceof Function && u.tagNameCheck(e)) && (u.attributeNameCheck instanceof RegExp && E(u.attributeNameCheck, n) || u.attributeNameCheck instanceof Function && u.attributeNameCheck(n)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          n === "is" && u.allowCustomizedBuiltInElements && (u.tagNameCheck instanceof RegExp && E(u.tagNameCheck, t) || u.tagNameCheck instanceof Function && u.tagNameCheck(t)))
        ) return !1;
      } else if (!Ee[n] && !E(ke, q(t, Ie, "")) && !((n === "src" || n === "xlink:href" || n === "href") && e !== "script" && qt(t, "data:") === 0 && Ge[e]) && !(ze && !E(Dt, q(t, Ie, ""))) && t)
        return !1;
    }
    return !0;
  }, et = function(e) {
    return e !== "annotation-xml" && at(e, xt);
  }, tt = function(e) {
    L(y.beforeSanitizeAttributes, e, null);
    const {
      attributes: n
    } = e;
    if (!n || Se(e)) return;
    const t = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: p,
      forceKeepAttr: void 0
    };
    let s = n.length;
    for (; s--; ) {
      const d = n[s], {
        name: c,
        namespaceURI: v,
        value: S
      } = d, w = f(c), be = S;
      let g = c === "value" ? be : $t(be);
      if (t.attrName = w, t.attrValue = g, t.keepAttr = !0, t.forceKeepAttr = void 0, L(y.uponSanitizeAttribute, e, t), g = t.attrValue, We && (w === "id" || w === "name") && (H(c, e), g = It + g), Q && E(/((--!?|])>)|<\/(style|title)/i, g)) {
        H(c, e);
        continue;
      }
      if (t.forceKeepAttr) continue;
      if (!t.keepAttr) {
        H(c, e);
        continue;
      }
      if (!He && E(/\/>/i, g)) {
        H(c, e);
        continue;
      }
      I && ie([me, fe, pe], (Wt) => {
        g = q(g, Wt, " ");
      });
      const nt = f(e.nodeName);
      if (!Qe(nt, w, g)) {
        H(c, e);
        continue;
      }
      if (T && typeof Z == "object" && typeof Z.getAttributeType == "function" && !v) switch (Z.getAttributeType(nt, w)) {
        case "TrustedHTML": {
          g = T.createHTML(g);
          break;
        }
        case "TrustedScriptURL": {
          g = T.createScriptURL(g);
          break;
        }
      }
      if (g !== be) try {
        v ? e.setAttributeNS(v, c, g) : e.setAttribute(c, g), Se(e) ? x(e) : rt(o.removed);
      } catch {
        H(c, e);
      }
    }
    L(y.afterSanitizeAttributes, e, null);
  }, Ft = function e(n) {
    let t = null;
    const s = Ve(n);
    for (L(y.beforeSanitizeShadowDOM, n, null); t = s.nextNode(); ) L(y.uponSanitizeShadowNode, t, null), Je(t), tt(t), t.content instanceof R && e(t.content);
    L(y.afterSanitizeShadowDOM, n, null);
  };
  return o.sanitize = function(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = null, s = null, d = null, c = null;
    if (Ae = !e, Ae && (e = "<!-->"), typeof e != "string" && !Ze(e)) if (typeof e.toString == "function") {
      if (e = e.toString(), typeof e != "string") throw $("dirty is not a string, aborting");
    } else throw $("toString is not a function");
    if (!o.isSupported) return e;
    if (he || Ne(n), o.removed = [], typeof e == "string" && (Y = !1), Y) {
      if (e.nodeName) {
        const w = f(e.nodeName);
        if (!m[w] || G[w]) throw $("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (e instanceof ce) t = Ke("<!---->"), s = t.ownerDocument.importNode(e, !0), s.nodeType === V.element && s.nodeName === "BODY" || s.nodeName === "HTML" ? t = s : t.appendChild(s);
    else {
      if (!k && !I && !D && // eslint-disable-next-line unicorn/prefer-includes
      e.indexOf("<") === -1) return T && te ? T.createHTML(e) : e;
      if (t = Ke(e), !t) return k ? null : te ? B : "";
    }
    t && Te && x(t.firstChild);
    const v = Ve(Y ? e : t);
    for (; d = v.nextNode(); ) Je(d), tt(d), d.content instanceof R && Ft(d.content);
    if (Y) return e;
    if (k) {
      if (ee) for (c = wt.call(t.ownerDocument); t.firstChild; ) c.appendChild(t.firstChild);
      else c = t;
      return (p.shadowroot || p.shadowrootmode) && (c = Lt.call(i, c, !0)), c;
    }
    let S = D ? t.outerHTML : t.innerHTML;
    return D && m["!doctype"] && t.ownerDocument && t.ownerDocument.doctype && t.ownerDocument.doctype.name && E(gt, t.ownerDocument.doctype.name) && (S = "<!DOCTYPE " + t.ownerDocument.doctype.name + `>
` + S), I && ie([me, fe, pe], (w) => {
      S = q(S, w, " ");
    }), T && te ? T.createHTML(S) : S;
  }, o.setConfig = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ne(e), he = !0;
  }, o.clearConfig = function() {
    z = null, he = !1;
  }, o.isValidAttribute = function(e, n, t) {
    z || Ne({});
    const s = f(e), d = f(n);
    return Qe(s, d, t);
  }, o.addHook = function(e, n) {
    typeof n == "function" && X(y[e], n);
  }, o.removeHook = function(e, n) {
    if (n !== void 0) {
      const t = jt(y[e], n);
      return t === -1 ? void 0 : Xt(y[e], t, 1)[0];
    }
    return rt(y[e]);
  }, o.removeHooks = function(e) {
    y[e] = [];
  }, o.removeAllHooks = function() {
    y = mt();
  }, o;
}
var un = ht();
export {
  un as default
};
