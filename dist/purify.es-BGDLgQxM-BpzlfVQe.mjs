/*! @license DOMPurify 3.2.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.4/LICENSE */
const {
  entries: mt,
  setPrototypeOf: nt,
  isFrozen: Wt,
  getPrototypeOf: Bt,
  getOwnPropertyDescriptor: Gt
} = Object;
let {
  freeze: A,
  seal: b,
  create: ft
} = Object, {
  apply: Le,
  construct: ve
} = typeof Reflect < "u" && Reflect;
A || (A = function(r) {
  return r;
});
b || (b = function(r) {
  return r;
});
Le || (Le = function(r, o, l) {
  return r.apply(o, l);
});
ve || (ve = function(r, o) {
  return new r(...o);
});
const ae = _(Array.prototype.forEach), Yt = _(Array.prototype.lastIndexOf), ot = _(Array.prototype.pop), j = _(Array.prototype.push), jt = _(Array.prototype.splice), le = _(String.prototype.toLowerCase), Se = _(String.prototype.toString), rt = _(String.prototype.match), X = _(String.prototype.replace), Xt = _(String.prototype.indexOf), qt = _(String.prototype.trim), S = _(Object.prototype.hasOwnProperty), E = _(RegExp.prototype.test), q = $t(TypeError);
function _(r) {
  return function(o) {
    for (var l = arguments.length, i = new Array(l > 1 ? l - 1 : 0), g = 1; g < l; g++) i[g - 1] = arguments[g];
    return Le(r, o, i);
  };
}
function $t(r) {
  return function() {
    for (var o = arguments.length, l = new Array(o), i = 0; i < o; i++) l[i] = arguments[i];
    return ve(r, l);
  };
}
function a(r, o) {
  let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : le;
  nt && nt(r, null);
  let i = o.length;
  for (; i--; ) {
    let g = o[i];
    if (typeof g == "string") {
      const R = l(g);
      R !== g && (Wt(o) || (o[i] = R), g = R);
    }
    r[g] = !0;
  }
  return r;
}
function Kt(r) {
  for (let o = 0; o < r.length; o++) S(r, o) || (r[o] = null);
  return r;
}
function x(r) {
  const o = ft(null);
  for (const [l, i] of mt(r)) S(r, l) && (Array.isArray(i) ? o[l] = Kt(i) : i && typeof i == "object" && i.constructor === Object ? o[l] = x(i) : o[l] = i);
  return o;
}
function $(r, o) {
  for (; r !== null; ) {
    const i = Gt(r, o);
    if (i) {
      if (i.get) return _(i.get);
      if (typeof i.value == "function") return _(i.value);
    }
    r = Bt(r);
  }
  function l() {
    return null;
  }
  return l;
}
const at = A(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Re = A(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), we = A(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Vt = A(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Oe = A(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Zt = A(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), it = A(["#text"]), lt = A(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), De = A(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), st = A(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ie = A(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Jt = b(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Qt = b(/<%[\w\W]*|[\w\W]*%>/gm), en = b(/\$\{[\w\W]*/gm), tn = b(/^data-[\-\w.\u00B7-\uFFFF]+$/), nn = b(/^aria-[\-\w]+$/), pt = b(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), on = b(/^(?:\w+script|data):/i), rn = b(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), dt = b(/^html$/i), an = b(/^[a-z][.\w]*(-[.\w]+)+$/i);
var ct = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: nn,
  ATTR_WHITESPACE: rn,
  CUSTOM_ELEMENT: an,
  DATA_ATTR: tn,
  DOCTYPE_NAME: dt,
  ERB_EXPR: Qt,
  IS_ALLOWED_URI: pt,
  IS_SCRIPT_OR_DATA: on,
  MUSTACHE_EXPR: Jt,
  TMPLIT_EXPR: en
});
const K = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, ln = function() {
  return typeof window > "u" ? null : window;
}, sn = function(r, o) {
  if (typeof r != "object" || typeof r.createPolicy != "function") return null;
  let l = null;
  const i = "data-tt-policy-suffix";
  o && o.hasAttribute(i) && (l = o.getAttribute(i));
  const g = "dompurify" + (l ? "#" + l : "");
  try {
    return r.createPolicy(g, {
      createHTML(R) {
        return R;
      },
      createScriptURL(R) {
        return R;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + g + " could not be created."), null;
  }
}, ut = function() {
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
function gt() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ln();
  const o = (e) => gt(e);
  if (o.version = "3.2.4", o.removed = [], !r || !r.document || r.document.nodeType !== K.document || !r.Element) return o.isSupported = !1, o;
  let {
    document: l
  } = r;
  const i = l, g = i.currentScript, {
    DocumentFragment: R,
    HTMLTemplateElement: ht,
    Node: se,
    Element: Ce,
    NodeFilter: H,
    NamedNodeMap: Tt = r.NamedNodeMap || r.MozNamedAttrMap,
    HTMLFormElement: yt,
    DOMParser: Et,
    trustedTypes: V
  } = r, F = Ce.prototype, At = $(F, "cloneNode"), _t = $(F, "remove"), Nt = $(F, "nextSibling"), bt = $(F, "childNodes"), Z = $(F, "parentNode");
  if (typeof ht == "function") {
    const e = l.createElement("template");
    e.content && e.content.ownerDocument && (l = e.content.ownerDocument);
  }
  let h, W = "";
  const {
    implementation: ce,
    createNodeIterator: St,
    createDocumentFragment: Rt,
    getElementsByTagName: wt
  } = l, {
    importNode: Ot
  } = i;
  let T = ut();
  o.isSupported = typeof mt == "function" && typeof Z == "function" && ce && ce.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: ue,
    ERB_EXPR: me,
    TMPLIT_EXPR: fe,
    DATA_ATTR: Dt,
    ARIA_ATTR: Lt,
    IS_SCRIPT_OR_DATA: vt,
    ATTR_WHITESPACE: xe,
    CUSTOM_ELEMENT: Ct
  } = ct;
  let {
    IS_ALLOWED_URI: Ie
  } = ct, m = null;
  const ke = a({}, [...at, ...Re, ...we, ...Oe, ...it]);
  let p = null;
  const Me = a({}, [...lt, ...De, ...st, ...ie]);
  let c = Object.seal(ft(null, {
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
  })), B = null, pe = null, Ue = !0, de = !0, Pe = !1, ze = !0, I = !1, ge = !0, v = !1, he = !1, Te = !1, k = !1, J = !1, Q = !1, He = !0, Fe = !1;
  const xt = "user-content-";
  let ye = !0, G = !1, M = {}, U = null;
  const We = a({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Be = null;
  const Ge = a({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ee = null;
  const Ye = a({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ee = "http://www.w3.org/1998/Math/MathML", te = "http://www.w3.org/2000/svg", O = "http://www.w3.org/1999/xhtml";
  let P = O, Ae = !1, _e = null;
  const It = a({}, [ee, te, O], Se);
  let ne = a({}, ["mi", "mo", "mn", "ms", "mtext"]), oe = a({}, ["annotation-xml"]);
  const kt = a({}, ["title", "style", "font", "a", "script"]);
  let Y = null;
  const Mt = ["application/xhtml+xml", "text/html"], Ut = "text/html";
  let f = null, z = null;
  const Pt = l.createElement("form"), je = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, Ne = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(z && z === e)) {
      if ((!e || typeof e != "object") && (e = {}), e = x(e), Y = // eslint-disable-next-line unicorn/prefer-includes
      Mt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? Ut : e.PARSER_MEDIA_TYPE, f = Y === "application/xhtml+xml" ? Se : le, m = S(e, "ALLOWED_TAGS") ? a({}, e.ALLOWED_TAGS, f) : ke, p = S(e, "ALLOWED_ATTR") ? a({}, e.ALLOWED_ATTR, f) : Me, _e = S(e, "ALLOWED_NAMESPACES") ? a({}, e.ALLOWED_NAMESPACES, Se) : It, Ee = S(e, "ADD_URI_SAFE_ATTR") ? a(x(Ye), e.ADD_URI_SAFE_ATTR, f) : Ye, Be = S(e, "ADD_DATA_URI_TAGS") ? a(x(Ge), e.ADD_DATA_URI_TAGS, f) : Ge, U = S(e, "FORBID_CONTENTS") ? a({}, e.FORBID_CONTENTS, f) : We, B = S(e, "FORBID_TAGS") ? a({}, e.FORBID_TAGS, f) : {}, pe = S(e, "FORBID_ATTR") ? a({}, e.FORBID_ATTR, f) : {}, M = S(e, "USE_PROFILES") ? e.USE_PROFILES : !1, Ue = e.ALLOW_ARIA_ATTR !== !1, de = e.ALLOW_DATA_ATTR !== !1, Pe = e.ALLOW_UNKNOWN_PROTOCOLS || !1, ze = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, I = e.SAFE_FOR_TEMPLATES || !1, ge = e.SAFE_FOR_XML !== !1, v = e.WHOLE_DOCUMENT || !1, k = e.RETURN_DOM || !1, J = e.RETURN_DOM_FRAGMENT || !1, Q = e.RETURN_TRUSTED_TYPE || !1, Te = e.FORCE_BODY || !1, He = e.SANITIZE_DOM !== !1, Fe = e.SANITIZE_NAMED_PROPS || !1, ye = e.KEEP_CONTENT !== !1, G = e.IN_PLACE || !1, Ie = e.ALLOWED_URI_REGEXP || pt, P = e.NAMESPACE || O, ne = e.MATHML_TEXT_INTEGRATION_POINTS || ne, oe = e.HTML_INTEGRATION_POINTS || oe, c = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && je(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (c.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && je(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (c.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (c.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), I && (de = !1), J && (k = !0), M && (m = a({}, it), p = [], M.html === !0 && (a(m, at), a(p, lt)), M.svg === !0 && (a(m, Re), a(p, De), a(p, ie)), M.svgFilters === !0 && (a(m, we), a(p, De), a(p, ie)), M.mathMl === !0 && (a(m, Oe), a(p, st), a(p, ie))), e.ADD_TAGS && (m === ke && (m = x(m)), a(m, e.ADD_TAGS, f)), e.ADD_ATTR && (p === Me && (p = x(p)), a(p, e.ADD_ATTR, f)), e.ADD_URI_SAFE_ATTR && a(Ee, e.ADD_URI_SAFE_ATTR, f), e.FORBID_CONTENTS && (U === We && (U = x(U)), a(U, e.FORBID_CONTENTS, f)), ye && (m["#text"] = !0), v && a(m, ["html", "head", "body"]), m.table && (a(m, ["tbody"]), delete B.tbody), e.TRUSTED_TYPES_POLICY) {
        if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function") throw q('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw q('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        h = e.TRUSTED_TYPES_POLICY, W = h.createHTML("");
      } else h === void 0 && (h = sn(V, g)), h !== null && typeof W == "string" && (W = h.createHTML(""));
      A && A(e), z = e;
    }
  }, Xe = a({}, [...Re, ...we, ...Vt]), qe = a({}, [...Oe, ...Zt]), zt = function(e) {
    let n = Z(e);
    (!n || !n.tagName) && (n = {
      namespaceURI: P,
      tagName: "template"
    });
    const t = le(e.tagName), s = le(n.tagName);
    return _e[e.namespaceURI] ? e.namespaceURI === te ? n.namespaceURI === O ? t === "svg" : n.namespaceURI === ee ? t === "svg" && (s === "annotation-xml" || ne[s]) : !!Xe[t] : e.namespaceURI === ee ? n.namespaceURI === O ? t === "math" : n.namespaceURI === te ? t === "math" && oe[s] : !!qe[t] : e.namespaceURI === O ? n.namespaceURI === te && !oe[s] || n.namespaceURI === ee && !ne[s] ? !1 : !qe[t] && (kt[t] || !Xe[t]) : !!(Y === "application/xhtml+xml" && _e[e.namespaceURI]) : !1;
  }, C = function(e) {
    j(o.removed, {
      element: e
    });
    try {
      Z(e).removeChild(e);
    } catch {
      _t(e);
    }
  }, re = function(e, n) {
    try {
      j(o.removed, {
        attribute: n.getAttributeNode(e),
        from: n
      });
    } catch {
      j(o.removed, {
        attribute: null,
        from: n
      });
    }
    if (n.removeAttribute(e), e === "is") if (k || J) try {
      C(n);
    } catch {
    }
    else try {
      n.setAttribute(e, "");
    } catch {
    }
  }, $e = function(e) {
    let n = null, t = null;
    if (Te) e = "<remove></remove>" + e;
    else {
      const u = rt(e, /^[\r\n\t ]+/);
      t = u && u[0];
    }
    Y === "application/xhtml+xml" && P === O && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    const s = h ? h.createHTML(e) : e;
    if (P === O) try {
      n = new Et().parseFromString(s, Y);
    } catch {
    }
    if (!n || !n.documentElement) {
      n = ce.createDocument(P, "template", null);
      try {
        n.documentElement.innerHTML = Ae ? W : s;
      } catch {
      }
    }
    const d = n.body || n.documentElement;
    return e && t && d.insertBefore(l.createTextNode(t), d.childNodes[0] || null), P === O ? wt.call(n, v ? "html" : "body")[0] : v ? n.documentElement : d;
  }, Ke = function(e) {
    return St.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      H.SHOW_ELEMENT | H.SHOW_COMMENT | H.SHOW_TEXT | H.SHOW_PROCESSING_INSTRUCTION | H.SHOW_CDATA_SECTION,
      null
    );
  }, be = function(e) {
    return e instanceof yt && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof Tt) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, Ve = function(e) {
    return typeof se == "function" && e instanceof se;
  };
  function D(e, n, t) {
    ae(e, (s) => {
      s.call(o, n, t, z);
    });
  }
  const Ze = function(e) {
    let n = null;
    if (D(T.beforeSanitizeElements, e, null), be(e)) return C(e), !0;
    const t = f(e.nodeName);
    if (D(T.uponSanitizeElement, e, {
      tagName: t,
      allowedTags: m
    }), e.hasChildNodes() && !Ve(e.firstElementChild) && E(/<[/\w]/g, e.innerHTML) && E(/<[/\w]/g, e.textContent) || e.nodeType === K.progressingInstruction || ge && e.nodeType === K.comment && E(/<[/\w]/g, e.data)) return C(e), !0;
    if (!m[t] || B[t]) {
      if (!B[t] && Qe(t) && (c.tagNameCheck instanceof RegExp && E(c.tagNameCheck, t) || c.tagNameCheck instanceof Function && c.tagNameCheck(t))) return !1;
      if (ye && !U[t]) {
        const s = Z(e) || e.parentNode, d = bt(e) || e.childNodes;
        if (d && s) {
          const u = d.length;
          for (let L = u - 1; L >= 0; --L) {
            const N = At(d[L], !0);
            N.__removalCount = (e.__removalCount || 0) + 1, s.insertBefore(N, Nt(e));
          }
        }
      }
      return C(e), !0;
    }
    return e instanceof Ce && !zt(e) || (t === "noscript" || t === "noembed" || t === "noframes") && E(/<\/no(script|embed|frames)/i, e.innerHTML) ? (C(e), !0) : (I && e.nodeType === K.text && (n = e.textContent, ae([ue, me, fe], (s) => {
      n = X(n, s, " ");
    }), e.textContent !== n && (j(o.removed, {
      element: e.cloneNode()
    }), e.textContent = n)), D(T.afterSanitizeElements, e, null), !1);
  }, Je = function(e, n, t) {
    if (He && (n === "id" || n === "name") && (t in l || t in Pt)) return !1;
    if (!(de && !pe[n] && E(Dt, n)) && !(Ue && E(Lt, n))) {
      if (!p[n] || pe[n]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Qe(e) && (c.tagNameCheck instanceof RegExp && E(c.tagNameCheck, e) || c.tagNameCheck instanceof Function && c.tagNameCheck(e)) && (c.attributeNameCheck instanceof RegExp && E(c.attributeNameCheck, n) || c.attributeNameCheck instanceof Function && c.attributeNameCheck(n)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          n === "is" && c.allowCustomizedBuiltInElements && (c.tagNameCheck instanceof RegExp && E(c.tagNameCheck, t) || c.tagNameCheck instanceof Function && c.tagNameCheck(t)))
        ) return !1;
      } else if (!Ee[n] && !E(Ie, X(t, xe, "")) && !((n === "src" || n === "xlink:href" || n === "href") && e !== "script" && Xt(t, "data:") === 0 && Be[e]) && !(Pe && !E(vt, X(t, xe, ""))) && t)
        return !1;
    }
    return !0;
  }, Qe = function(e) {
    return e !== "annotation-xml" && rt(e, Ct);
  }, et = function(e) {
    D(T.beforeSanitizeAttributes, e, null);
    const {
      attributes: n
    } = e;
    if (!n || be(e)) return;
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
        name: u,
        namespaceURI: L,
        value: N
      } = d, w = f(u);
      let y = u === "value" ? N : qt(N);
      if (t.attrName = w, t.attrValue = y, t.keepAttr = !0, t.forceKeepAttr = void 0, D(T.uponSanitizeAttribute, e, t), y = t.attrValue, Fe && (w === "id" || w === "name") && (re(u, e), y = xt + y), ge && E(/((--!?|])>)|<\/(style|title)/i, y)) {
        re(u, e);
        continue;
      }
      if (t.forceKeepAttr || (re(u, e), !t.keepAttr)) continue;
      if (!ze && E(/\/>/i, y)) {
        re(u, e);
        continue;
      }
      I && ae([ue, me, fe], (Ft) => {
        y = X(y, Ft, " ");
      });
      const tt = f(e.nodeName);
      if (Je(tt, w, y)) {
        if (h && typeof V == "object" && typeof V.getAttributeType == "function" && !L) switch (V.getAttributeType(tt, w)) {
          case "TrustedHTML": {
            y = h.createHTML(y);
            break;
          }
          case "TrustedScriptURL": {
            y = h.createScriptURL(y);
            break;
          }
        }
        try {
          L ? e.setAttributeNS(L, u, y) : e.setAttribute(u, y), be(e) ? C(e) : ot(o.removed);
        } catch {
        }
      }
    }
    D(T.afterSanitizeAttributes, e, null);
  }, Ht = function e(n) {
    let t = null;
    const s = Ke(n);
    for (D(T.beforeSanitizeShadowDOM, n, null); t = s.nextNode(); ) D(T.uponSanitizeShadowNode, t, null), Ze(t), et(t), t.content instanceof R && e(t.content);
    D(T.afterSanitizeShadowDOM, n, null);
  };
  return o.sanitize = function(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = null, s = null, d = null, u = null;
    if (Ae = !e, Ae && (e = "<!-->"), typeof e != "string" && !Ve(e)) if (typeof e.toString == "function") {
      if (e = e.toString(), typeof e != "string") throw q("dirty is not a string, aborting");
    } else throw q("toString is not a function");
    if (!o.isSupported) return e;
    if (he || Ne(n), o.removed = [], typeof e == "string" && (G = !1), G) {
      if (e.nodeName) {
        const w = f(e.nodeName);
        if (!m[w] || B[w]) throw q("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (e instanceof se) t = $e("<!---->"), s = t.ownerDocument.importNode(e, !0), s.nodeType === K.element && s.nodeName === "BODY" || s.nodeName === "HTML" ? t = s : t.appendChild(s);
    else {
      if (!k && !I && !v && // eslint-disable-next-line unicorn/prefer-includes
      e.indexOf("<") === -1) return h && Q ? h.createHTML(e) : e;
      if (t = $e(e), !t) return k ? null : Q ? W : "";
    }
    t && Te && C(t.firstChild);
    const L = Ke(G ? e : t);
    for (; d = L.nextNode(); ) Ze(d), et(d), d.content instanceof R && Ht(d.content);
    if (G) return e;
    if (k) {
      if (J) for (u = Rt.call(t.ownerDocument); t.firstChild; ) u.appendChild(t.firstChild);
      else u = t;
      return (p.shadowroot || p.shadowrootmode) && (u = Ot.call(i, u, !0)), u;
    }
    let N = v ? t.outerHTML : t.innerHTML;
    return v && m["!doctype"] && t.ownerDocument && t.ownerDocument.doctype && t.ownerDocument.doctype.name && E(dt, t.ownerDocument.doctype.name) && (N = "<!DOCTYPE " + t.ownerDocument.doctype.name + `>
` + N), I && ae([ue, me, fe], (w) => {
      N = X(N, w, " ");
    }), h && Q ? h.createHTML(N) : N;
  }, o.setConfig = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ne(e), he = !0;
  }, o.clearConfig = function() {
    z = null, he = !1;
  }, o.isValidAttribute = function(e, n, t) {
    z || Ne({});
    const s = f(e), d = f(n);
    return Je(s, d, t);
  }, o.addHook = function(e, n) {
    typeof n == "function" && j(T[e], n);
  }, o.removeHook = function(e, n) {
    if (n !== void 0) {
      const t = Yt(T[e], n);
      return t === -1 ? void 0 : jt(T[e], t, 1)[0];
    }
    return ot(T[e]);
  }, o.removeHooks = function(e) {
    T[e] = [];
  }, o.removeAllHooks = function() {
    T = ut();
  }, o;
}
var cn = gt();
export {
  cn as default
};
