import { _ as e, a as t, b as n, c as r, f as i, g as a, i as o, l as s, m as c, n as l, r as u, s as d, v as f, y as p } from "./array-utils-flat-DeB-J5jn.mjs";
//#region node_modules/@math.gl/types/dist/is-array.js
function m(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function h(e) {
	return Array.isArray(e) ? e.length === 0 || typeof e[0] == "number" : !1;
}
function g(e) {
	return m(e) || h(e);
}
//#endregion
//#region node_modules/@luma.gl/shadertools/dist/lib/shader-assembly/wgsl-binding-scan.js
var _ = "(?:var<\\s*(uniform|storage(?:\\s*,\\s*[A-Za-z_][A-Za-z0-9_]*)?)\\s*>|var)\\s+([A-Za-z_][A-Za-z0-9_]*)", v = "\\s*", y = [RegExp(`@binding\\(\\s*(auto|\\d+)\\s*\\)${v}@group\\(\\s*(\\d+)\\s*\\)${v}${_}`, "g"), RegExp(`@group\\(\\s*(\\d+)\\s*\\)${v}@binding\\(\\s*(auto|\\d+)\\s*\\)${v}${_}`, "g")], b = [RegExp(`@binding\\(\\s*(auto|\\d+)\\s*\\)${v}@group\\(\\s*(\\d+)\\s*\\)${v}${_}`, "g"), RegExp(`@group\\(\\s*(\\d+)\\s*\\)${v}@binding\\(\\s*(auto|\\d+)\\s*\\)${v}${_}`, "g")], x = [RegExp(`@binding\\(\\s*(\\d+)\\s*\\)${v}@group\\(\\s*(\\d+)\\s*\\)${v}${_}`, "g"), RegExp(`@group\\(\\s*(\\d+)\\s*\\)${v}@binding\\(\\s*(\\d+)\\s*\\)${v}${_}`, "g")], S = [
	RegExp(`@binding\\(\\s*(auto)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${_}`, "g"),
	RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto)\\s*\\)\\s*${_}`, "g"),
	RegExp(`@binding\\(\\s*(auto)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)(?:[\\s\\n\\r]*@[A-Za-z_][^\\n\\r]*)*[\\s\\n\\r]*${_}`, "g"),
	RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto)\\s*\\)(?:[\\s\\n\\r]*@[A-Za-z_][^\\n\\r]*)*[\\s\\n\\r]*${_}`, "g")
];
function C(e) {
	let t = e.split(""), n = 0, r = 0, i = !1, a = !1, o = !1;
	for (; n < e.length;) {
		let s = e[n], c = e[n + 1];
		if (a) {
			o ? o = !1 : s === "\\" ? o = !0 : s === "\"" && (a = !1), n++;
			continue;
		}
		if (i) {
			s === "\n" || s === "\r" ? i = !1 : t[n] = " ", n++;
			continue;
		}
		if (r > 0) {
			if (s === "/" && c === "*") {
				t[n] = " ", t[n + 1] = " ", r++, n += 2;
				continue;
			}
			if (s === "*" && c === "/") {
				t[n] = " ", t[n + 1] = " ", r--, n += 2;
				continue;
			}
			s !== "\n" && s !== "\r" && (t[n] = " "), n++;
			continue;
		}
		if (s === "\"") {
			a = !0, n++;
			continue;
		}
		if (s === "/" && c === "/") {
			t[n] = " ", t[n + 1] = " ", i = !0, n += 2;
			continue;
		}
		if (s === "/" && c === "*") {
			t[n] = " ", t[n + 1] = " ", r = 1, n += 2;
			continue;
		}
		n++;
	}
	return t.join("");
}
function w(e, t) {
	let n = C(e), r = [];
	for (let i of t) {
		i.lastIndex = 0;
		let a;
		for (a = i.exec(n); a;) {
			let o = i === t[0], s = a.index, c = a[0].length;
			r.push({
				match: e.slice(s, s + c),
				index: s,
				length: c,
				bindingToken: a[o ? 1 : 2],
				groupToken: a[o ? 2 : 1],
				accessDeclaration: a[3]?.trim(),
				name: a[4]
			}), a = i.exec(n);
		}
	}
	return r.sort((e, t) => e.index - t.index);
}
function ee(e, t, n) {
	let r = w(e, t);
	if (!r.length) return e;
	let i = "", a = 0;
	for (let t of r) i += e.slice(a, t.index), i += n(t), a = t.index + t.length;
	return i += e.slice(a), i;
}
function T(e) {
	return /@binding\(\s*auto\s*\)/.test(C(e));
}
function te(e, t) {
	return w(e, t === y || t === b ? S : t).find((e) => e.bindingToken === "auto");
}
//#endregion
//#region node_modules/@luma.gl/shadertools/dist/lib/shader-assembly/wgsl-interface-scan.js
function ne(e, t = {}) {
	let n = re(e), r = ie(n);
	if (!r) return null;
	let i = ae(n, r);
	if (!i) return null;
	let a = se(n, r, i);
	if (!a) return null;
	if (t.scanVertexAttributes === !1) return {
		attributes: [],
		bindings: a
	};
	let o = oe(n, r);
	if (!o) return null;
	let s = fe(n, r, i, o, t.vertexEntryPoint);
	return s ? {
		attributes: s,
		bindings: a
	} : null;
}
function re(e) {
	let t = C(e), n = /[A-Za-z_][A-Za-z0-9_]*|(?:0[xX][0-9A-Fa-f]+|\d+)|[@(){}<>\[\]:,;=]/g, r = [], i = n.exec(t);
	for (; i;) r.push({
		value: i[0],
		index: i.index
	}), i = n.exec(t);
	return r;
}
function ie(e) {
	let t = [], n = 0;
	for (let r of e) {
		if (r.value === "}" && n === 0) return null;
		t.push(n), r.value === "{" ? n++ : r.value === "}" && n--;
	}
	return n === 0 ? t : null;
}
function ae(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r = 0; r < e.length; r++) {
		if (t[r] !== 0 || e[r].value !== "alias") continue;
		let i = e[r + 1]?.value;
		if (!O(i) || e[r + 2]?.value !== "=" || n.has(i)) return null;
		let a = Ce(e, t, r + 3, ";");
		if (a < 0 || a === r + 3) return null;
		n.set(i, D(e.slice(r + 3, a))), r = a;
	}
	return n;
}
function oe(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r = 0; r < e.length; r++) {
		if (t[r] !== 0 || e[r].value !== "struct") continue;
		let i = e[r + 1]?.value, a = r + 2;
		if (!O(i) || n.has(i) || e[a]?.value !== "{") return null;
		let o = xe(e, a, "{", "}");
		if (o < 0) return null;
		n.set(i, e.slice(a + 1, o)), r = o;
	}
	return n;
}
function se(e, t, n) {
	let r = [], i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set();
	for (let o = 0; o < e.length; o++) {
		if (t[o] !== 0 || e[o].value !== "var") continue;
		let s = we(e, t, o), c = e.slice(s, o), l = ve(c, "group"), u = ve(c, "binding");
		if (l === null || u === null || l === void 0 != (u === void 0)) return null;
		if (l === void 0 || u === void 0) continue;
		let d = o + 1, f = [];
		if (e[d]?.value === "<") {
			let t = xe(e, d, "<", ">");
			if (t < 0) return null;
			let n = E(e.slice(d + 1, t), ",");
			if (!n) return null;
			f = n.map(D), d = t + 1;
		}
		let p = e[d]?.value;
		if (!O(p) || e[d + 1]?.value !== ":") return null;
		let m = Ce(e, t, d + 2, ";");
		if (m < 0 || m === d + 2) return null;
		let h = he(D(e.slice(d + 2, m)), n);
		if (!h) return null;
		let g = ce({
			name: p,
			group: l,
			location: u,
			addressSpace: f,
			resourceType: h
		}), _ = `${l}:${u}`;
		if (!g || i.has(_) || a.has(p)) return null;
		r.push(g), i.add(_), a.add(p), o = m;
	}
	return de(r), r.sort((e, t) => e.group - t.group || e.location - t.location || e.name.localeCompare(t.name));
}
function ce(e) {
	let { name: t, group: n, location: r, addressSpace: i, resourceType: a } = e, o = {
		name: t,
		group: n,
		location: r
	};
	if (i[0] === "uniform" && i.length === 1) return {
		...o,
		type: "uniform"
	};
	if (i[0] === "storage" && i.length <= 2) {
		let e = i[1] || "read";
		return e === "read" ? {
			...o,
			type: "read-only-storage"
		} : e === "read_write" ? {
			...o,
			type: "storage"
		} : null;
	}
	return i.length > 0 ? null : a === "sampler" || a === "sampler_comparison" ? {
		...o,
		type: "sampler",
		...a === "sampler_comparison" ? { samplerType: "comparison" } : {}
	} : a === "texture_external" ? {
		...o,
		type: "external-texture"
	} : le(o, a) || ue(o, a);
}
function le(e, t) {
	let n = /^texture_storage_(1d|2d|2d_array|3d)<([A-Za-z0-9_]+),(read|write|read_write)>$/.exec(t);
	if (!n) return null;
	let r = {
		read: "read-only",
		write: "write-only",
		read_write: "read-write"
	}[n[3]];
	return {
		...e,
		type: "storage",
		format: n[2],
		access: r,
		viewDimension: be(n[1])
	};
}
function ue(e, t) {
	let n = /^texture_(multisampled_)?(1d|2d|2d_array|cube|cube_array|3d)<(f32|i32|u32)>$/.exec(t);
	if (n) {
		if (n[1] && n[2] !== "2d") return null;
		let t = {
			f32: "float",
			i32: "sint",
			u32: "uint"
		}[n[3]];
		return {
			...e,
			type: "texture",
			viewDimension: be(n[2]),
			sampleType: t,
			multisampled: !!n[1]
		};
	}
	let r = /^texture_depth_(multisampled_)?(2d|2d_array|cube|cube_array)$/.exec(t);
	return !r || r[1] && r[2] !== "2d" ? null : {
		...e,
		type: "texture",
		viewDimension: be(r[2]),
		sampleType: "depth",
		multisampled: !!r[1]
	};
}
function de(e) {
	for (let t of e) {
		if (t.type !== "sampler" || t.samplerType || !t.name.endsWith("Sampler")) continue;
		let n = t.name.slice(0, -7);
		e.find((e) => e.type === "texture" && e.name === n && e.group === t.group)?.sampleType === "depth" && (t.samplerType = "non-filtering");
	}
}
function fe(e, t, n, r, i) {
	let a = pe(e, t);
	if (!a) return null;
	let o = a.filter((e) => e.vertex), s = i ? o.find((e) => e.name === i) : o.length === 1 ? o[0] : void 0;
	if (!s) return o.length === 0 && !i ? [] : null;
	let c = E(s.parameters, ",");
	if (!c) return null;
	let l = [], u = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set();
	for (let e of c) if (e.length > 0 && !me({
		declaration: e,
		aliases: n,
		structures: r,
		attributes: l,
		attributeLocations: u,
		attributeNames: d,
		visitedStructures: f
	})) return null;
	return l.sort((e, t) => e.location - t.location || e.name.localeCompare(t.name));
}
function pe(e, t) {
	let n = [], r = /* @__PURE__ */ new Set();
	for (let i = 0; i < e.length; i++) {
		if (t[i] !== 0 || e[i].value !== "fn") continue;
		let a = e[i + 1]?.value, o = i + 2;
		if (!O(a) || r.has(a) || e[o]?.value !== "(") return null;
		let s = xe(e, o, "(", ")");
		if (s < 0) return null;
		let c = we(e, t, i);
		n.push({
			name: a,
			vertex: ye(e.slice(c, i), "vertex"),
			parameters: e.slice(o + 1, s)
		}), r.add(a), i = s;
	}
	return n;
}
function me(e) {
	let { declaration: t, aliases: n, structures: r, attributes: i, attributeLocations: a, attributeNames: o, visitedStructures: s } = e, c = Se(t, ":");
	if (c < 1 || c === t.length - 1) return !1;
	let l = Te(t.slice(0, c)), u = ve(t.slice(0, c), "location"), d = ye(t.slice(0, c), "builtin"), f = he(D(t.slice(c + 1)), n);
	if (!l || u === null || !f || u !== void 0 && d) return !1;
	if (u !== void 0) {
		let e = _e(f);
		return !e || a.has(u) || o.has(l) ? !1 : (i.push({
			name: l,
			location: u,
			type: e
		}), a.add(u), o.add(l), !0);
	}
	if (d) return !0;
	let p = r.get(f);
	if (!p || s.has(f)) return !1;
	let m = E(p, ",");
	if (!m) return !1;
	s.add(f);
	for (let t of m) if (t.length > 0 && !me({
		...e,
		declaration: t
	})) return !1;
	return s.delete(f), !0;
}
function he(e, t, n = /* @__PURE__ */ new Set()) {
	let r = re(e), i = "";
	for (let e of r) {
		let r = t.get(e.value);
		if (!r) {
			i += ge(e.value);
			continue;
		}
		if (n.has(e.value)) return null;
		let a = new Set(n);
		a.add(e.value);
		let o = he(r, t, a);
		if (!o) return null;
		i += o;
	}
	return i;
}
function ge(e) {
	let t = /^(vec[234]|mat[234]x[234])([fiuh])$/.exec(e);
	if (!t) return e;
	let n = {
		f: "f32",
		i: "i32",
		u: "u32",
		h: "f16"
	}[t[2]];
	return `${t[1]}<${n}>`;
}
function _e(e) {
	return /^(?:i32|u32|f32|f16|vec[234]<(?:i32|u32|f32|f16)>)$/.test(e) ? e : null;
}
function ve(e, t) {
	let n;
	for (let r = 0; r < e.length; r++) if (e[r].value === "@" && e[r + 1]?.value === t) {
		if (n !== void 0 || e[r + 2]?.value !== "(" || !/^\d+$/.test(e[r + 3]?.value || "") || e[r + 4]?.value !== ")") return null;
		n = Number(e[r + 3].value);
	}
	return n;
}
function ye(e, t) {
	return e.some((n, r) => n.value === "@" && e[r + 1]?.value === t);
}
function be(e) {
	return e.replace("_", "-");
}
function xe(e, t, n, r) {
	let i = 0;
	for (let a = t; a < e.length; a++) if (e[a].value === n) i++;
	else if (e[a].value === r && --i === 0) return a;
	return -1;
}
function E(e, t) {
	let n = [], r = 0, i = {
		"(": 0,
		"<": 0,
		"[": 0,
		"{": 0
	}, a = Object.keys(i), o = {
		")": "(",
		">": "<",
		"]": "[",
		"}": "{"
	};
	for (let s = 0; s < e.length; s++) {
		let c = e[s].value;
		if (c === t && a.every((e) => i[e] === 0)) {
			n.push(e.slice(r, s)), r = s + 1;
			continue;
		}
		if (c in i) i[c]++;
		else if (c in o) {
			let e = o[c];
			if (i[e]--, i[e] < 0) return null;
		}
	}
	return a.every((e) => i[e] === 0) ? (n.push(e.slice(r)), n) : null;
}
function Se(e, t) {
	let n = E(e, t);
	return n && n.length === 2 ? n[0].length : -1;
}
function Ce(e, t, n, r) {
	for (let i = n; i < e.length; i++) if (t[i] === 0 && e[i].value === r) return i;
	return -1;
}
function we(e, t, n) {
	for (let r = n - 1; r >= 0; r--) if (e[r].value === ";" && t[r] === 0 || e[r].value === "}" && t[r] === 1) return r + 1;
	return 0;
}
function Te(e) {
	for (let t = e.length - 1; t >= 0; t--) if (O(e[t].value)) return e[t].value;
	return null;
}
function D(e) {
	return e.map((e) => e.value).join("");
}
function O(e) {
	return !!(e && /^[A-Za-z_][A-Za-z0-9_]*$/.test(e));
}
//#endregion
//#region node_modules/@luma.gl/shadertools/dist/lib/utils/assert.js
function k(e, t) {
	if (!e) {
		let e = Error(t || "shadertools: assertion failed.");
		throw Error.captureStackTrace?.(e, k), e;
	}
}
//#endregion
//#region node_modules/@luma.gl/shadertools/dist/lib/filters/prop-types.js
var Ee = {
	number: {
		type: "number",
		validate(e, t) {
			return Number.isFinite(e) && typeof t == "object" && (t.max === void 0 || e <= t.max) && (t.min === void 0 || e >= t.min);
		}
	},
	array: {
		type: "array",
		validate(e, t) {
			return Array.isArray(e) || ArrayBuffer.isView(e);
		}
	}
};
function De(e) {
	let t = {};
	for (let [n, r] of Object.entries(e)) t[n] = Oe(r);
	return t;
}
function Oe(e) {
	let t = ke(e);
	if (t !== "object") return {
		value: e,
		...Ee[t],
		type: t
	};
	if (typeof e == "object") return e ? e.type === void 0 ? e.value === void 0 ? {
		type: "object",
		value: e
	} : (t = ke(e.value), {
		...e,
		...Ee[t],
		type: t
	}) : {
		...e,
		...Ee[e.type],
		type: e.type
	} : {
		type: "object",
		value: null
	};
	throw Error("props");
}
function ke(e) {
	return Array.isArray(e) || ArrayBuffer.isView(e) ? "array" : typeof e;
}
//#endregion
//#region node_modules/@luma.gl/shadertools/dist/lib/shader-assembly/shader-injections.js
var Ae = {
	vertex: "#ifdef MODULE_LOGDEPTH\n  logdepth_adjustPosition(gl_Position);\n#endif\n",
	fragment: "#ifdef MODULE_MATERIAL\n  fragColor = material_filterColor(fragColor);\n#endif\n\n#ifdef MODULE_LIGHTING\n  fragColor = lighting_filterColor(fragColor);\n#endif\n\n#ifdef MODULE_FOG\n  fragColor = fog_filterColor(fragColor);\n#endif\n\n#ifdef MODULE_PICKING\n  fragColor = picking_filterHighlightColor(fragColor);\n  fragColor = picking_filterPickingColor(fragColor);\n#endif\n\n#ifdef MODULE_LOGDEPTH\n  logdepth_setFragDepth();\n#endif\n"
}, je = /void\s+main\s*\([^)]*\)\s*\{\n?/, Me = /}\n?[^{}]*$/, Ne = [], A = "__LUMA_INJECT_DECLARATIONS__";
function Pe(e) {
	let t = {
		vertex: {},
		fragment: {}
	};
	for (let n in e) {
		let r = e[n], i = Fe(n);
		typeof r == "string" && (r = {
			order: 0,
			injection: r
		}), t[i][n] = r;
	}
	return t;
}
function Fe(e) {
	let t = e.slice(0, 2);
	switch (t) {
		case "vs": return "vertex";
		case "fs": return "fragment";
		default: throw Error(t);
	}
}
function j(e, t, n, r = !1, i = "glsl", a = {}) {
	let o = t === "vertex";
	for (let t in n) {
		let r = n[t];
		r.sort((e, t) => e.order - t.order), Ne.length = r.length;
		for (let e = 0, t = r.length; e < t; ++e) Ne[e] = r[e].injection;
		let s = `${Ne.join("\n")}\n`;
		switch (t) {
			case "vs:#decl":
				(i === "wgsl" || o) && (e = e.replace(A, s));
				break;
			case "vs:#main-start":
				(i === "wgsl" || o) && (e = i === "wgsl" ? M(e, "vertex", s, "start", a.vertex) : e.replace(je, (e) => e + s));
				break;
			case "vs:#main-end":
				(i === "wgsl" || o) && (e = i === "wgsl" ? M(e, "vertex", s, "end", a.vertex) : e.replace(Me, (e) => s + e));
				break;
			case "fs:#decl":
				(i === "wgsl" || !o) && (e = e.replace(A, s));
				break;
			case "fs:#main-start":
				(i === "wgsl" || !o) && (e = i === "wgsl" ? M(e, "fragment", s, "start", a.fragment) : e.replace(je, (e) => e + s));
				break;
			case "fs:#main-end":
				(i === "wgsl" || !o) && (e = i === "wgsl" ? M(e, "fragment", s, "end", a.fragment) : e.replace(Me, (e) => s + e));
				break;
			default: e = e.replace(t, (e) => e + s);
		}
	}
	return e = e.replace(A, ""), r && (e = e.replace(/\}\s*$/, (e) => e + Ae[t])), e;
}
function M(e, t, n, r, i) {
	let a = Ie(e, t, i);
	if (!a) return e;
	if (r === "start") {
		let t = a.openBraceIndex + 1;
		return `${e.slice(0, t)}\n${n}${e.slice(t)}`;
	}
	return `${e.slice(0, a.closeBraceIndex)}${n}${e.slice(a.closeBraceIndex)}`;
}
function Ie(e, t, n) {
	let r = t === "vertex" ? "@vertex" : "@fragment", i = e.indexOf(r);
	if (i < 0) return null;
	let a = n ? e.search(RegExp(`\\bfn\\s+${Le(n)}\\s*\\(`)) : e.indexOf("fn", i);
	if (a < 0) return null;
	let o = e.indexOf("{", a);
	if (o < 0) return null;
	let s = 0;
	for (let t = o; t < e.length; t++) {
		let n = e[t];
		if (n === "{") s++;
		else if (n === "}" && (s--, s === 0)) return {
			openBraceIndex: o,
			closeBraceIndex: t
		};
	}
	return null;
}
function Le(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
//#endregion
//#region node_modules/@luma.gl/shadertools/dist/lib/shader-module/shader-module.js
function N(e) {
	e.map((e) => Re(e));
}
function Re(e) {
	if (e.instance) return;
	N(e.dependencies || []);
	let { propTypes: t = {}, deprecations: n = [], inject: r = {} } = e, i = {
		normalizedInjections: Pe(r),
		parsedDeprecations: Be(n)
	};
	t && (i.propValidators = De(t)), e.instance = i;
	let a = {};
	t && (a = Object.entries(t).reduce((e, [t, n]) => {
		let r = n?.value;
		return r && (e[t] = r), e;
	}, {})), e.defaultUniforms = {
		...e.defaultUniforms,
		...a
	};
}
function ze(e, t, n) {
	e.deprecations?.forEach((e) => {
		e.regex?.test(t) && (e.deprecated ? n.deprecated(e.old, e.new)() : n.removed(e.old, e.new)());
	});
}
function Be(e) {
	return e.forEach((e) => {
		switch (e.type) {
			case "function":
				e.regex = RegExp(`\\b${e.old}\\(`);
				break;
			default: e.regex = RegExp(`${e.type} ${e.old};`);
		}
	}), e;
}
//#endregion
//#region node_modules/@luma.gl/shadertools/dist/lib/shader-module/shader-module-dependencies.js
function P(e) {
	N(e);
	let t = {}, n = {};
	Ve({
		modules: e,
		level: 0,
		moduleMap: t,
		moduleDepth: n
	});
	let r = Object.keys(n).sort((e, t) => n[t] - n[e]).map((e) => t[e]);
	return N(r), r;
}
function Ve(e) {
	let { modules: t, level: n, moduleMap: r, moduleDepth: i } = e;
	if (n >= 5) throw Error("Possible loop in shader dependency graph");
	for (let e of t) r[e.name] = e, (i[e.name] === void 0 || i[e.name] < n) && (i[e.name] = n);
	for (let e of t) e.dependencies && Ve({
		modules: e.dependencies,
		level: n + 1,
		moduleMap: r,
		moduleDepth: i
	});
}
//#endregion
//#region node_modules/@luma.gl/core/dist/adapter/resources/compute-pipeline.js
var He = class e extends f {
	get [Symbol.toStringTag]() {
		return "ComputePipeline";
	}
	hash = "";
	shaderLayout;
	constructor(t, n) {
		super(t, n, e.defaultProps), this.shaderLayout = n.shaderLayout;
	}
	static defaultProps = {
		...f.defaultProps,
		shader: void 0,
		entryPoint: void 0,
		constants: {},
		shaderLayout: void 0
	};
}, Ue = class e {
	static defaultProps = { ...r.defaultProps };
	static getDefaultPipelineFactory(t) {
		let n = t.getModuleData("@luma.gl/core");
		return n.defaultPipelineFactory ||= new e(t), n.defaultPipelineFactory;
	}
	device;
	_hashCounter = 0;
	_hashes = {};
	_renderPipelineCache = {};
	_computePipelineCache = {};
	_sharedRenderPipelineCache = {};
	get [Symbol.toStringTag]() {
		return "PipelineFactory";
	}
	toString() {
		return `PipelineFactory(${this.device.id})`;
	}
	constructor(e) {
		this.device = e;
	}
	createRenderPipeline(e) {
		if (!this.device.props._cachePipelines) return this.device.createRenderPipeline(e);
		let t = {
			...r.defaultProps,
			...e
		}, i = this._renderPipelineCache, a = this._hashRenderPipeline(t), o = i[a]?.resource;
		if (o) i[a].useCount++, this.device.props.debugFactories && n.log(3, `${this}: ${i[a].resource} reused, count=${i[a].useCount}, (id=${e.id})`)();
		else {
			let e = this.device.type === "webgl" && this.device.props._sharePipelines ? this.createSharedRenderPipeline(t) : void 0;
			o = this.device.createRenderPipeline({
				...t,
				id: t.id ? `${t.id}-cached` : p("unnamed-cached"),
				_sharedRenderPipeline: e
			}), o.hash = a, i[a] = {
				resource: o,
				useCount: 1
			}, this.device.props.debugFactories && n.log(3, `${this}: ${o} created, count=${i[a].useCount}`)();
		}
		return o;
	}
	createComputePipeline(e) {
		if (!this.device.props._cachePipelines) return this.device.createComputePipeline(e);
		let t = {
			...He.defaultProps,
			...e
		}, r = this._computePipelineCache, i = this._hashComputePipeline(t), a = r[i]?.resource;
		return a ? (r[i].useCount++, this.device.props.debugFactories && n.log(3, `${this}: ${r[i].resource} reused, count=${r[i].useCount}, (id=${e.id})`)()) : (a = this.device.createComputePipeline({
			...t,
			id: t.id ? `${t.id}-cached` : void 0
		}), a.hash = i, r[i] = {
			resource: a,
			useCount: 1
		}, this.device.props.debugFactories && n.log(3, `${this}: ${a} created, count=${r[i].useCount}`)()), a;
	}
	release(e) {
		if (!this.device.props._cachePipelines) {
			e.destroy();
			return;
		}
		let t = this._getCache(e), r = e.hash;
		t[r].useCount--, t[r].useCount === 0 ? (this._destroyPipeline(e), this.device.props.debugFactories && n.log(3, `${this}: ${e} released and destroyed`)()) : t[r].useCount < 0 ? (n.error(`${this}: ${e} released, useCount < 0, resetting`)(), t[r].useCount = 0) : this.device.props.debugFactories && n.log(3, `${this}: ${e} released, count=${t[r].useCount}`)();
	}
	createSharedRenderPipeline(e) {
		let t = this._hashSharedRenderPipeline(e), n = this._sharedRenderPipelineCache[t];
		return n || (n = {
			resource: this.device._createSharedRenderPipelineWebGL(e),
			useCount: 0
		}, this._sharedRenderPipelineCache[t] = n), n.useCount++, n.resource;
	}
	releaseSharedRenderPipeline(e) {
		if (!e.sharedRenderPipeline) return;
		let t = this._hashSharedRenderPipeline(e.sharedRenderPipeline.props), n = this._sharedRenderPipelineCache[t];
		n && (n.useCount--, n.useCount === 0 && (n.resource.destroy(), delete this._sharedRenderPipelineCache[t]));
	}
	_destroyPipeline(e) {
		let t = this._getCache(e);
		return this.device.props._destroyPipelines ? (delete t[e.hash], e.destroy(), e instanceof r && this.releaseSharedRenderPipeline(e), !0) : !1;
	}
	_getCache(e) {
		let t;
		if (e instanceof He && (t = this._computePipelineCache), e instanceof r && (t = this._renderPipelineCache), !t) throw Error(`${this}`);
		if (!t[e.hash]) throw Error(`${this}: ${e} matched incorrect entry`);
		return t;
	}
	_hashComputePipeline(e) {
		let { type: t } = this.device;
		return `${t}/C/${this._getHash(e.shader.source)}SL${this._getHash(JSON.stringify(e.shaderLayout))}`;
	}
	_hashRenderPipeline(e) {
		let t = e.vs ? this._getHash(e.vs.source) : 0, n = e.fs ? this._getHash(e.fs.source) : 0, r = this._getWebGLVaryingHash(e), i = this._getHash(JSON.stringify(e.shaderLayout)), a = this._getHash(JSON.stringify(e._uniformBlockLayouts)), o = this._getHash(JSON.stringify(e.bufferLayout)), { type: s } = this.device;
		switch (s) {
			case "webgl":
				let c = this._getHash(JSON.stringify(e.parameters));
				return `${s}/R/${t}/${n}V${r}T${e.topology}P${c}SL${i}UBL${a}BL${o}`;
			default:
				let l = this._getHash(JSON.stringify({
					vertexEntryPoint: e.vertexEntryPoint,
					fragmentEntryPoint: e.fragmentEntryPoint
				})), u = this._getHash(JSON.stringify(e.parameters)), d = this._getWebGPUAttachmentHash(e);
				return `${s}/R/${t}/${n}V${r}T${e.topology}EP${l}P${u}SL${i}BL${o}A${d}`;
		}
	}
	_hashSharedRenderPipeline(e) {
		return `webgl/S/${e.vs ? this._getHash(e.vs.source) : 0}/${e.fs ? this._getHash(e.fs.source) : 0}V${this._getWebGLVaryingHash(e)}`;
	}
	_getHash(e) {
		return this._hashes[e] === void 0 && (this._hashes[e] = this._hashCounter++), this._hashes[e];
	}
	_getWebGLVaryingHash(e) {
		let { varyings: t = [], bufferMode: n = null } = e;
		return this._getHash(JSON.stringify({
			varyings: t,
			bufferMode: n
		}));
	}
	_getWebGPUAttachmentHash(e) {
		let t = e.colorAttachmentFormats ?? [this.device.preferredColorFormat], n = e.depthStencilAttachmentFormat ?? (e.parameters?.depthWriteEnabled ? this.device.preferredDepthFormat : null);
		return this._getHash(JSON.stringify({
			colorAttachmentFormats: t,
			depthStencilAttachmentFormat: n
		}));
	}
}, We = class e {
	static defaultProps = { ...s.defaultProps };
	static getDefaultShaderFactory(t) {
		let n = t.getModuleData("@luma.gl/core");
		return n.defaultShaderFactory ||= new e(t), n.defaultShaderFactory;
	}
	device;
	_cache = {};
	get [Symbol.toStringTag]() {
		return "ShaderFactory";
	}
	toString() {
		return `${this[Symbol.toStringTag]}(${this.device.id})`;
	}
	constructor(e) {
		this.device = e;
	}
	createShader(e) {
		if (!this.device.props._cacheShaders) return this.device.createShader(e);
		let t = this._hashShader(e), r = this._cache[t];
		if (r) r.useCount++, this.device.props.debugFactories && n.log(3, `${this}: Reusing shader ${r.resource.id} count=${r.useCount}`)();
		else {
			let i = this.device.createShader({
				...e,
				id: e.id ? `${e.id}-cached` : void 0
			});
			this._cache[t] = r = {
				resource: i,
				useCount: 1
			}, this.device.props.debugFactories && n.log(3, `${this}: Created new shader ${i.id}`)();
		}
		return r.resource;
	}
	release(e) {
		if (!this.device.props._cacheShaders) {
			e.destroy();
			return;
		}
		let t = this._hashShader(e), r = this._cache[t];
		if (r) {
			if (r.useCount--, r.useCount === 0) this.device.props._destroyShaders && (delete this._cache[t], r.resource.destroy(), this.device.props.debugFactories && n.log(3, `${this}: Releasing shader ${e.id}, destroyed`)());
			else if (r.useCount < 0) throw Error(`ShaderFactory: Shader ${e.id} released too many times`);
			else this.device.props.debugFactories && n.log(3, `${this}: Releasing shader ${e.id} count=${r.useCount}`)();
		}
	}
	_hashShader(e) {
		return `${e.stage}:${e.source}`;
	}
};
//#endregion
//#region node_modules/@luma.gl/core/dist/utils/is-array.js
function Ge(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function F(e) {
	return Array.isArray(e) ? e.length === 0 || typeof e[0] == "number" : Ge(e);
}
//#endregion
//#region node_modules/@luma.gl/core/dist/portable/shader-block-writer.js
var Ke = class {
	layout;
	constructor(e) {
		this.layout = e;
	}
	has(e) {
		return !!this.layout.fields[e];
	}
	get(e) {
		let t = this.layout.fields[e];
		return t ? {
			offset: t.offset,
			size: t.size
		} : void 0;
	}
	getFlatUniformValues(e) {
		let t = {};
		for (let [n, r] of Object.entries(e)) {
			let e = this.layout.uniformTypes[n];
			e ? this._flattenCompositeValue(t, n, e, r) : this.layout.fields[n] && (t[n] = r);
		}
		return t;
	}
	getData(e) {
		let t = l(this.layout.byteLength);
		new Uint8Array(t, 0, this.layout.byteLength).fill(0);
		let n = {
			i32: new Int32Array(t),
			u32: new Uint32Array(t),
			f32: new Float32Array(t),
			f16: new Uint16Array(t)
		}, r = this.getFlatUniformValues(e);
		for (let [e, t] of Object.entries(r)) this._writeLeafValue(n, e, t);
		return new Uint8Array(t, 0, this.layout.byteLength);
	}
	_flattenCompositeValue(e, t, r, i) {
		if (i !== void 0) {
			if (typeof r == "string" || this.layout.fields[t]) {
				e[t] = i;
				return;
			}
			if (Array.isArray(r)) {
				let a = r[0], o = r[1];
				if (Array.isArray(a)) throw Error(`Nested arrays are not supported for ${t}`);
				if (typeof a == "string" && F(i)) {
					this._flattenPackedArray(e, t, a, o, i);
					return;
				}
				if (!Array.isArray(i)) {
					n.warn(`Unsupported uniform array value for ${t}:`, i)();
					return;
				}
				for (let n = 0; n < Math.min(i.length, o); n++) {
					let r = i[n];
					r !== void 0 && this._flattenCompositeValue(e, `${t}[${n}]`, a, r);
				}
				return;
			}
			if (o(r) && qe(i)) {
				for (let [n, a] of Object.entries(i)) {
					if (a === void 0) continue;
					let i = `${t}.${n}`;
					this._flattenCompositeValue(e, i, r[n], a);
				}
				return;
			}
			n.warn(`Unsupported uniform value for ${t}:`, i)();
		}
	}
	_flattenPackedArray(e, t, n, r, i) {
		let a = i, o = u(n, this.layout.layout).components;
		for (let n = 0; n < r; n++) {
			let r = n * o;
			if (r >= a.length) break;
			o === 1 ? e[`${t}[${n}]`] = Number(a[r]) : e[`${t}[${n}]`] = Je(i, r, r + o);
		}
	}
	_writeLeafValue(e, t, r) {
		let i = this.layout.fields[t];
		if (!i) {
			n.warn(`Uniform ${t} not found in layout`)();
			return;
		}
		let { type: a, components: o, columns: s, rows: c, offset: l, columnStride: u } = i, d = e[a];
		if (o === 1) {
			d[l] = Number(r);
			return;
		}
		let f = r;
		if (s === 1) {
			for (let e = 0; e < o; e++) d[l + e] = Number(f[e] ?? 0);
			return;
		}
		let p = 0;
		for (let e = 0; e < s; e++) {
			let t = l + e * u;
			for (let e = 0; e < c; e++) d[t + e] = Number(f[p++] ?? 0);
		}
	}
};
function qe(e) {
	return !!e && typeof e == "object" && !Array.isArray(e) && !ArrayBuffer.isView(e);
}
function Je(e, t, n) {
	return Array.prototype.slice.call(e, t, n);
}
//#endregion
//#region node_modules/@luma.gl/core/dist/utils/array-equal.js
var Ye = 128;
function Xe(e, t, n = 16) {
	if (e === t) return !0;
	let r = e, i = t;
	if (!F(r) || !F(i) || r.length !== i.length) return !1;
	let a = Math.min(n, Ye);
	if (r.length > a) return !1;
	for (let e = 0; e < r.length; ++e) if (i[e] !== r[e]) return !1;
	return !0;
}
function Ze(e) {
	return F(e) ? e.slice() : e;
}
//#endregion
//#region node_modules/@luma.gl/core/dist/portable/uniform-block.js
var Qe = class {
	name;
	uniforms = {};
	modifiedUniforms = {};
	modified = !0;
	bindingLayout = {};
	needsRedraw = "initialized";
	constructor(e) {
		if (this.name = e?.name || "unnamed", e?.name && e?.shaderLayout) {
			let t = e?.shaderLayout.bindings?.find((t) => t.type === "uniform" && t.name === e?.name);
			if (!t) throw Error(e?.name);
			let n = t;
			for (let e of n.uniforms || []) this.bindingLayout[e.name] = e;
		}
	}
	setUniforms(e) {
		for (let [t, n] of Object.entries(e)) this._setUniform(t, n) && !this.needsRedraw && this.setNeedsRedraw(`${this.name}.${t}=${n}`);
	}
	setNeedsRedraw(e) {
		this.needsRedraw = this.needsRedraw || e;
	}
	getAllUniforms() {
		return this.modifiedUniforms = {}, this.needsRedraw = !1, this.uniforms || {};
	}
	_setUniform(e, t) {
		return !Xe(this.uniforms[e], t) && (this.uniforms[e] = Ze(t), this.modifiedUniforms[e] = !0, this.modified = !0, !0);
	}
}, $e = 1024, et = class {
	device;
	uniformBlocks = /* @__PURE__ */ new Map();
	shaderBlockLayouts = /* @__PURE__ */ new Map();
	shaderBlockWriters = /* @__PURE__ */ new Map();
	uniformBuffers = /* @__PURE__ */ new Map();
	constructor(e, n) {
		this.device = e;
		for (let [r, i] of Object.entries(n)) {
			let n = r, a = t(i.uniformTypes ?? {}, { layout: i.layout ?? tt(e) }), o = new Ke(a);
			this.shaderBlockLayouts.set(n, a), this.shaderBlockWriters.set(n, o);
			let s = new Qe({ name: r });
			s.setUniforms(o.getFlatUniformValues(i.defaultUniforms || {})), this.uniformBlocks.set(n, s);
		}
	}
	destroy() {
		for (let e of this.uniformBuffers.values()) e.destroy();
	}
	setUniforms(e, t) {
		for (let [t, n] of Object.entries(e)) {
			let e = t, r = this.shaderBlockWriters.get(e)?.getFlatUniformValues(n || {});
			this.uniformBlocks.get(e)?.setUniforms(r || {});
		}
		this.updateUniformBuffers(t);
	}
	getUniformBufferByteLength(e) {
		let t = this.shaderBlockLayouts.get(e)?.byteLength || 0;
		return Math.max(t, $e);
	}
	getUniformBufferData(e) {
		let t = this.uniformBlocks.get(e)?.getAllUniforms() || {};
		return this.shaderBlockWriters.get(e)?.getData(t) || /* @__PURE__ */ new Uint8Array();
	}
	createUniformBuffer(t, n) {
		n && this.setUniforms(n);
		let r = this.getUniformBufferByteLength(t), i = this.device.createBuffer({
			usage: e.UNIFORM | e.COPY_DST,
			byteLength: r
		}), a = this.getUniformBufferData(t);
		return i.write(a), i;
	}
	getManagedUniformBuffer(t) {
		if (!this.uniformBuffers.get(t)) {
			let n = this.getUniformBufferByteLength(t), r = this.device.createBuffer({
				usage: e.UNIFORM | e.COPY_DST,
				byteLength: n
			});
			this.uniformBuffers.set(t, r);
		}
		return this.uniformBuffers.get(t);
	}
	updateUniformBuffers(e) {
		let t = !1;
		for (let n of this.uniformBlocks.keys()) {
			let r = this.updateUniformBuffer(n, e);
			t ||= r;
		}
		return t && n.log(3, `UniformStore.updateUniformBuffers(): ${t}`)(), t;
	}
	updateUniformBuffer(e, t) {
		let r = this.uniformBlocks.get(e), i = this.uniformBuffers.get(e), a = !1;
		if (i && r?.needsRedraw) {
			a ||= r.needsRedraw;
			let o = this.getUniformBufferData(e);
			i = this.uniformBuffers.get(e), i && (t ? this.device.writeBufferViaCommandEncoder(t, i, o) : i.write(o));
			let s = this.uniformBlocks.get(e)?.getAllUniforms();
			n.log(4, `Writing to uniform buffer ${String(e)}`, o, s)();
		}
		return a;
	}
};
function tt(e) {
	return e.type === "webgpu" ? "wgsl-uniform" : "std140";
}
//#endregion
//#region node_modules/@luma.gl/shadertools/dist/lib/shader-plugin.js
var nt = /^(vs|fs):(?:#(?:decl|main-start|main-end)|[A-Za-z_][\w-]*)$/;
function rt(e = [], t) {
	let n = [], r = {}, i = {}, a = {}, o = {};
	for (let s of e) at({
		modules: n,
		defines: r,
		injections: i,
		vertexInputs: a,
		varyings: o
	}, s), at({
		modules: n,
		defines: r,
		injections: i,
		vertexInputs: a,
		varyings: o
	}, s[t]);
	for (let e of Object.keys(o)) if (a[e]) throw Error(`ShaderPlugin name "${e}" cannot be both a vertex input and a varying`);
	return {
		modules: n,
		defines: r,
		injections: i,
		vertexInputs: a,
		varyings: o
	};
}
function it(e = [], t = []) {
	let n = [...e], r = new Set(n.map((e) => e.name));
	for (let e of t) r.has(e.name) || (n.push(e), r.add(e.name));
	return n;
}
function at(e, t) {
	if (t) {
		t.modules?.length && e.modules.push(...t.modules), t.defines && Object.assign(e.defines, t.defines);
		for (let [n, r] of Object.entries(t.vertexInputs || {})) {
			ot(n, "vertex input");
			let t = e.vertexInputs[n];
			if (t && t !== r) throw Error(`ShaderPlugin vertex input "${n}" has conflicting types "${t}" and "${r}"`);
			e.vertexInputs[n] = r;
		}
		for (let [n, r] of Object.entries(t.varyings || {})) {
			ot(n, "varying");
			let t = st(n, r), i = e.varyings[n];
			if (i && (i.type !== t.type || i.interpolation !== t.interpolation)) throw Error(`ShaderPlugin varying "${n}" has conflicting declarations "${i.type}/${i.interpolation}" and "${t.type}/${t.interpolation}"`);
			e.varyings[n] = t;
		}
		for (let n of t.injections || []) ct(n.target), e.injections[n.target] || (e.injections[n.target] = []), e.injections[n.target].push({
			injection: n.injection,
			order: n.order ?? 0
		});
	}
}
function ot(e, t) {
	if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(e) || e.startsWith("_luma_")) throw Error(`ShaderPlugin ${t} "${e}" must be a valid non-reserved identifier`);
}
function st(e, t) {
	let { primitiveType: n } = d.getAttributeShaderTypeInfo(t.type), r = n === "i32" || n === "u32", i = t.interpolation || (r ? "flat" : "smooth");
	if (r && i === "smooth") throw Error(`ShaderPlugin integer varying "${e}" must use flat interpolation`);
	return {
		type: t.type,
		interpolation: i
	};
}
function ct(e) {
	if (!nt.test(e)) throw Error(`ShaderPlugin injection target "${e}" must be a named shader anchor or hook`);
}
//#endregion
//#region node_modules/@luma.gl/shadertools/dist/lib/shader-module/shader-module-uniform-layout.js
var lt = /^(?:uniform\s+)?(?:(?:lowp|mediump|highp)\s+)?[A-Za-z0-9_]+(?:<[^>]+>)?\s+([A-Za-z0-9_]+)(?:\s*\[[^\]]+\])?\s*;/, ut = /((?:layout\s*\([^)]*\)\s*)*)uniform\s+([A-Za-z_][A-Za-z0-9_]*)\s*\{([\s\S]*?)\}\s*([A-Za-z_][A-Za-z0-9_]*)?\s*;/g;
function dt(e) {
	return `${e.name}Uniforms`;
}
function ft(e, t) {
	let n = t === "wgsl" ? e.source : t === "vertex" ? e.vs : e.fs;
	if (!n) return null;
	let r = dt(e);
	return _t(n, t === "wgsl" ? "wgsl" : "glsl", r);
}
function pt(e, t) {
	let n = Object.keys(e.uniformTypes || {});
	if (!n.length) return null;
	let r = ft(e, t);
	return r ? {
		moduleName: e.name,
		uniformBlockName: dt(e),
		stage: t,
		expectedUniformNames: n,
		actualUniformNames: r,
		matches: bt(n, r)
	} : null;
}
function mt(e, t, n = {}) {
	let r = pt(e, t);
	if (!r || r.matches) return r;
	let i = xt(r);
	return n.log?.error?.(i, r)(), n.throwOnError !== !1 && k(!1, i), r;
}
function ht(e) {
	let t = [], n = St(e);
	for (let e of n.matchAll(ut)) {
		let n = e[1]?.trim() || null;
		t.push({
			blockName: e[2],
			body: e[3],
			instanceName: e[4] || null,
			layoutQualifier: n,
			hasLayoutQualifier: !!n,
			isStd140: !!(n && /\blayout\s*\([^)]*\bstd140\b[^)]*\)/.exec(n))
		});
	}
	return t;
}
function gt(e, t, n, r) {
	let i = ht(e).filter((e) => !e.isStd140), a = /* @__PURE__ */ new Set();
	for (let e of i) {
		if (a.has(e.blockName)) continue;
		a.add(e.blockName);
		let i = r?.label ? `${r.label} ` : "", o = e.hasLayoutQualifier ? `declares ${Ct(e.layoutQualifier)} instead of layout(std140)` : "does not declare layout(std140)", s = `${i}${t} shader uniform block ${e.blockName} ${o}. luma.gl host-side shader block packing assumes explicit layout(std140) for GLSL uniform blocks. Add \`layout(std140)\` to the block declaration.`;
		n?.warn?.(s, e)();
	}
	return i;
}
function _t(e, t, n) {
	let r = t === "wgsl" ? vt(e, n) : yt(e, n);
	if (!r) return null;
	let i = [];
	for (let e of r.split("\n")) {
		let n = e.replace(/\/\/.*$/, "").trim();
		if (!n || n.startsWith("#")) continue;
		let r = t === "wgsl" ? n.match(/^([A-Za-z0-9_]+)\s*:/) : n.match(lt);
		r && i.push(r[1]);
	}
	return i;
}
function vt(e, t) {
	let n = RegExp(`\\bstruct\\s+${t}\\b`, "m").exec(e);
	if (!n) return null;
	let r = e.indexOf("{", n.index);
	if (r < 0) return null;
	let i = 0;
	for (let t = r; t < e.length; t++) {
		let n = e[t];
		if (n === "{") {
			i++;
			continue;
		}
		if (n === "}" && (i--, i === 0)) return e.slice(r + 1, t);
	}
	return null;
}
function yt(e, t) {
	return ht(e).find((e) => e.blockName === t)?.body || null;
}
function bt(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function xt(e) {
	let { expectedUniformNames: t, actualUniformNames: n } = e, r = t.filter((e) => !n.includes(e)), i = n.filter((e) => !t.includes(e)), a = [`Expected ${t.length} fields, found ${n.length}.`], o = wt(t, n);
	return o && a.push(o), r.length && a.push(`Missing from shader block (${r.length}): ${Tt(r)}.`), i.length && a.push(`Unexpected in shader block (${i.length}): ${Tt(i)}.`), t.length <= 12 && n.length <= 12 && (r.length || i.length) && (a.push(`Expected: ${t.join(", ")}.`), a.push(`Actual: ${n.join(", ")}.`)), `${e.moduleName}: ${e.stage} shader uniform block ${e.uniformBlockName} does not match module.uniformTypes. ${a.join(" ")}`;
}
function St(e) {
	return e.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "");
}
function Ct(e) {
	return e.replace(/\s+/g, " ").trim();
}
function wt(e, t) {
	let n = Math.min(e.length, t.length);
	for (let r = 0; r < n; r++) if (e[r] !== t[r]) return `First mismatch at field ${r + 1}: expected ${e[r]}, found ${t[r]}.`;
	return e.length > t.length ? `Shader block ends after field ${t.length}; expected next field ${e[t.length]}.` : t.length > e.length ? `Shader block has extra field ${t.length}: ${t[e.length]}.` : null;
}
function Tt(e, t = 8) {
	if (e.length <= t) return e.join(", ");
	let n = e.length - t;
	return `${e.slice(0, t).join(", ")}, ... (${n} more)`;
}
//#endregion
//#region node_modules/@luma.gl/shadertools/dist/lib/shader-assembly/platform-defines.js
function Et(e) {
	switch (e?.gpu.toLowerCase()) {
		case "apple": return "#define APPLE_GPU\n// Apple optimizes away the calculation necessary for emulated fp64\n#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1\n#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1\n// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow\n#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1\n";
		case "nvidia": return "#define NVIDIA_GPU\n// Nvidia optimizes away the calculation necessary for emulated fp64\n#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1\n";
		case "intel": return "#define INTEL_GPU\n// Intel optimizes away the calculation necessary for emulated fp64\n#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1\n// Intel's built-in 'tan' function doesn't have acceptable precision\n#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1\n// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow\n#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1\n";
		case "amd": return "#define AMD_GPU\n";
		default: return "#define DEFAULT_GPU\n// Prevent driver from optimizing away the calculation necessary for emulated fp64\n#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1\n// Headless Chrome's software shader 'tan' function doesn't have acceptable precision\n#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1\n// If the GPU doesn't have full 32 bits precision, will causes overflow\n#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1\n";
	}
}
//#endregion
//#region node_modules/@luma.gl/shadertools/dist/lib/shader-transpiler/transpile-glsl-shader.js
function Dt(e, t) {
	if (Number(e.match(/^#version[ \t]+(\d+)/m)?.[1] || 100) !== 300) throw Error("luma.gl v9 only supports GLSL 3.00 shader sources");
	switch (t) {
		case "vertex": return e = jt(e, kt), e;
		case "fragment": return e = jt(e, At), e;
		default: throw Error(t);
	}
}
var Ot = [
	[/^(#version[ \t]+(100|300[ \t]+es))?[ \t]*\n/, "#version 300 es\n"],
	[/\btexture(2D|2DProj|Cube)Lod(EXT)?\(/g, "textureLod("],
	[/\btexture(2D|2DProj|Cube)(EXT)?\(/g, "texture("]
], kt = [
	...Ot,
	[Mt("attribute"), "in $1"],
	[Mt("varying"), "out $1"]
], At = [...Ot, [Mt("varying"), "in $1"]];
function jt(e, t) {
	for (let [n, r] of t) e = e.replace(n, r);
	return e;
}
function Mt(e) {
	return RegExp(`\\b${e}[ \\t]+(\\w+[ \\t]+\\w+(\\[\\w+\\])?;)`, "g");
}
//#endregion
//#region node_modules/@luma.gl/shadertools/dist/lib/shader-assembly/shader-hooks.js
function Nt(e, t, n = "glsl") {
	let r = "";
	for (let i in e) {
		let a = e[i];
		if (r += `${n === "wgsl" ? "fn" : "void"} ${a.signature} {\n`, a.header && (r += `  ${a.header}`), t[i]) {
			let e = t[i];
			e.sort((e, t) => e.order - t.order);
			for (let t of e) r += `  ${t.injection}\n`;
		}
		a.footer && (r += `  ${a.footer}`), r += "}\n";
	}
	return r;
}
function Pt(e) {
	let t = {
		vertex: {},
		fragment: {}
	};
	for (let n of e) {
		let e, r;
		typeof n == "string" ? (e = {}, r = n) : (e = n, r = e.hook), r = r.trim();
		let i = r.indexOf(":"), a = r.slice(0, i), o = r.slice(i + 1), s = r.replace(/\(.+/, ""), c = Object.assign(e, { signature: o });
		switch (a) {
			case "vs":
				t.vertex[s] = c;
				break;
			case "fs":
				t.fragment[s] = c;
				break;
			default: throw Error(a);
		}
	}
	return t;
}
//#endregion
//#region node_modules/@luma.gl/shadertools/dist/lib/glsl-utils/get-shader-info.js
function Ft(e, t) {
	return {
		name: It(e, t),
		language: "glsl",
		version: Lt(e)
	};
}
function It(e, t = "unnamed") {
	let n = /#define[^\S\r\n]*SHADER_NAME[^\S\r\n]*([A-Za-z0-9_-]+)\s*/.exec(e);
	return n ? n[1] : t;
}
function Lt(e) {
	let t = 100, n = e.match(/[^\s]+/g);
	if (n && n.length >= 2 && n[0] === "#version") {
		let e = parseInt(n[1], 10);
		Number.isFinite(e) && (t = e);
	}
	if (t !== 100 && t !== 300) throw Error(`Invalid GLSL version ${t}`);
	return t;
}
//#endregion
//#region node_modules/@luma.gl/shadertools/dist/lib/shader-assembly/wgsl-binding-debug.js
var Rt = [RegExp(`@binding\\(\\s*(\\d+)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${_}\\s*:\\s*([^;]+);`, "g"), RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(\\d+)\\s*\\)\\s*${_}\\s*:\\s*([^;]+);`, "g")];
function zt(e, t = []) {
	let n = C(e), r = /* @__PURE__ */ new Map();
	for (let e of t) r.set(Vt(e.name, e.group, e.location), e.moduleName);
	let i = [];
	for (let e of Rt) {
		e.lastIndex = 0;
		let t;
		for (t = e.exec(n); t;) {
			let a = e === Rt[0], o = Number(t[a ? 1 : 2]), s = Number(t[a ? 2 : 1]), c = t[3]?.trim(), l = t[4], u = t[5].trim(), d = r.get(Vt(l, s, o));
			i.push(Bt({
				name: l,
				group: s,
				binding: o,
				owner: d ? "module" : "application",
				moduleName: d,
				accessDeclaration: c,
				resourceType: u
			})), t = e.exec(n);
		}
	}
	return i.sort((e, t) => e.group === t.group ? e.binding === t.binding ? e.name.localeCompare(t.name) : e.binding - t.binding : e.group - t.group);
}
function Bt(e) {
	let t = {
		name: e.name,
		group: e.group,
		binding: e.binding,
		owner: e.owner,
		kind: "unknown",
		moduleName: e.moduleName,
		resourceType: e.resourceType
	};
	if (e.accessDeclaration) {
		let n = e.accessDeclaration.split(",").map((e) => e.trim());
		if (n[0] === "uniform") return {
			...t,
			kind: "uniform",
			access: "uniform"
		};
		if (n[0] === "storage") {
			let e = n[1] || "read_write";
			return {
				...t,
				kind: e === "read" ? "read-only-storage" : "storage",
				access: e
			};
		}
	}
	return e.resourceType === "sampler" || e.resourceType === "sampler_comparison" ? {
		...t,
		kind: "sampler",
		samplerKind: e.resourceType === "sampler_comparison" ? "comparison" : "filtering"
	} : e.resourceType.startsWith("texture_storage_") ? {
		...t,
		kind: "storage-texture",
		access: Wt(e.resourceType),
		viewDimension: Ht(e.resourceType)
	} : e.resourceType.startsWith("texture_") ? {
		...t,
		kind: "texture",
		viewDimension: Ht(e.resourceType),
		sampleType: Ut(e.resourceType),
		multisampled: e.resourceType.startsWith("texture_multisampled_")
	} : t;
}
function Vt(e, t, n) {
	return `${t}:${n}:${e}`;
}
function Ht(e) {
	if (e.includes("cube_array")) return "cube-array";
	if (e.includes("2d_array")) return "2d-array";
	if (e.includes("cube")) return "cube";
	if (e.includes("3d")) return "3d";
	if (e.includes("2d")) return "2d";
	if (e.includes("1d")) return "1d";
}
function Ut(e) {
	if (e.startsWith("texture_depth_")) return "depth";
	if (e.includes("<i32>")) return "sint";
	if (e.includes("<u32>")) return "uint";
	if (e.includes("<f32>")) return "float";
}
function Wt(e) {
	return /,\s*([A-Za-z_][A-Za-z0-9_]*)\s*>$/.exec(e)?.[1];
}
//#endregion
//#region node_modules/@luma.gl/shadertools/dist/lib/preprocessor/preprocessor.js
var I = "([a-zA-Z_][a-zA-Z0-9_]*)", Gt = /^\s*\#\s*if\s+(.+?)\s*(?:\/\/.*)?$/, Kt = RegExp(`^\\s*\\#\\s*ifdef\\s*${I}\\s*$`), qt = RegExp(`^\\s*\\#\\s*ifndef\\s*${I}\\s*(?:\\/\\/.*)?$`), Jt = /^\s*\#\s*else\s*(?:\/\/.*)?$/, Yt = /^\s*\#\s*endif\s*$/, Xt = RegExp(`^\\s*\\#\\s*ifdef\\s*${I}\\s*(?:\\/\\/.*)?$`), Zt = /^\s*\#\s*endif\s*(?:\/\/.*)?$/;
function L(e, t) {
	let n = e.split("\n"), r = [], i = [], a = !0;
	for (let e of n) {
		let n = e.match(Gt), o = e.match(Xt) || e.match(Kt), s = e.match(qt), c = e.match(Jt), l = e.match(Zt) || e.match(Yt);
		if (n) {
			let e = Qt(n[1], t?.defines || {}), r = a && e;
			i.push({
				parentActive: a,
				branchTaken: e,
				active: r
			}), a = r;
		} else if (o || s) {
			let e = (o || s)?.[1], n = !!t?.defines?.[e], r = o ? n : !n, c = a && r;
			i.push({
				parentActive: a,
				branchTaken: r,
				active: c
			}), a = c;
		} else if (c) {
			let e = i[i.length - 1];
			if (!e) throw Error("Encountered #else without matching #if, #ifdef or #ifndef");
			e.active = e.parentActive && !e.branchTaken, e.branchTaken = !0, a = e.active;
		} else l ? (i.pop(), a = !i.length || i[i.length - 1].active) : a && r.push(e);
	}
	if (i.length > 0) throw Error("Unterminated conditional block in shader source");
	return r.join("\n");
}
function Qt(e, t) {
	let n = e.trim();
	if (/^[+-]?\d+(?:\.\d+)?$/.test(n)) return Number(n) !== 0;
	if (n === "true") return !0;
	if (n === "false") return !1;
	let r = n.match(RegExp(`^!\\s*${I}$`));
	if (r) return !t[r[1]];
	let i = n.match(RegExp(`^${I}$`));
	if (i) return !!t[i[1]];
	let a = n.match(RegExp(`^defined\\s*\\(\\s*${I}\\s*\\)$`));
	if (a) return t[a[1]] !== void 0;
	let o = n.match(RegExp(`^!\\s*defined\\s*\\(\\s*${I}\\s*\\)$`));
	if (o) return t[o[1]] === void 0;
	throw Error(`Unsupported #if expression "${e}"`);
}
//#endregion
//#region node_modules/@luma.gl/shadertools/dist/lib/shader-assembly/shader-plugin-vertex-inputs.js
function $t(e, t) {
	let n = [];
	for (let [r, i] of Object.entries(t)) nn(e, r), n.push(`in ${tn(i)} ${r};`);
	return n.join("\n");
}
function en(e, t, n) {
	let r = Object.entries(n);
	if (r.length === 0) return {
		source: e,
		declarations: "",
		initialization: ""
	};
	let i = rn(e, t), a = e.slice(i.openParenthesis + 1, i.closeParenthesis), o = an(e, a), s = new Set(o.locations), c = [], l = [], u = [];
	for (let [t, n] of r) {
		if (o.names.has(t) || un(e, t)) throw Error(`ShaderPlugin vertex input "${t}" conflicts with an existing WGSL shader input or variable`);
		let r = dn(s);
		s.add(r);
		let i = `_luma_${t}`;
		c.push(`@location(${r}) ${i}: ${n}`), l.push(`var<private> ${t}: ${n};`), u.push(`${t} = ${i};`);
	}
	let d = a.trim() ? ",\n  " : "\n  ", f = a.trim() ? "" : "\n", p = `${a}${d}${c.join(",\n  ")}${f}`;
	return {
		source: e.slice(0, i.openParenthesis + 1) + p + e.slice(i.closeParenthesis),
		declarations: l.join("\n"),
		initialization: u.join("\n")
	};
}
function tn(e) {
	let { primitiveType: t, components: n } = d.getAttributeShaderTypeInfo(e), r = t === "i32" ? "int" : t === "u32" ? "uint" : "float";
	return n === 1 ? r : `${r === "int" ? "i" : r === "uint" ? "u" : ""}vec${n}`;
}
function nn(e, t) {
	let n = R(t);
	if (RegExp(`\\b(?:in|attribute)\\s+(?:(?:lowp|mediump|highp)\\s+)?[A-Za-z_][A-Za-z0-9_]*\\s+${n}\\s*(?:\\[|;)`).test(e)) throw Error(`ShaderPlugin vertex input "${t}" conflicts with an existing GLSL input`);
}
function rn(e, t) {
	let n = RegExp(`\\bfn\\s+${R(t)}\\s*\\(`, "g").exec(e);
	if (!n) throw Error(`ShaderPlugin vertex inputs require WGSL vertex entry point "${t}"`);
	let r = e.indexOf("(", n.index), i = fn(e, r, "(", ")");
	if (i < 0) throw Error(`Unable to parse WGSL vertex entry point "${t}" parameters`);
	return {
		openParenthesis: r,
		closeParenthesis: i
	};
}
function an(e, t) {
	let n = on(t), r = new Set(sn(t)), i = cn(t);
	for (let t of i) {
		let i = ln(e, t);
		if (i !== null) {
			n.push(...on(i));
			for (let e of sn(i)) r.add(e);
		}
	}
	return {
		locations: n,
		names: r
	};
}
function on(e) {
	let t = [], n = /@location\s*\(\s*(\d+)\s*\)/g, r = n.exec(e);
	for (; r;) t.push(Number(r[1])), r = n.exec(e);
	return t;
}
function sn(e) {
	let t = [], n = /(?:^|,)\s*(?:@[A-Za-z_][\w]*(?:\([^)]*\))?\s*)*([A-Za-z_][\w]*)\s*:/gm, r = n.exec(e);
	for (; r;) t.push(r[1]), r = n.exec(e);
	return t;
}
function cn(e) {
	let t = [], n = /:\s*([A-Za-z_][\w]*)\b/g, r = n.exec(e);
	for (; r;) t.push(r[1]), r = n.exec(e);
	return t;
}
function ln(e, t) {
	let n = RegExp(`\\bstruct\\s+${R(t)}\\s*\\{`, "g").exec(e);
	if (!n) return null;
	let r = e.indexOf("{", n.index), i = fn(e, r, "{", "}");
	return i < 0 ? null : e.slice(r + 1, i);
}
function un(e, t) {
	let n = R(t), r = RegExp(`\\b(?:var(?:<[^>]+>)?|let|const)\\s+${n}\\b`, "g"), i = r.exec(e);
	for (; i;) {
		if (pn(e, i.index) === 0) return !0;
		i = r.exec(e);
	}
	return !1;
}
function dn(e) {
	let t = 0;
	for (; e.has(t);) t++;
	return t;
}
function fn(e, t, n, r) {
	let i = 0, a = 0, o = !1;
	for (let s = t; s < e.length; s++) {
		let t = e[s], c = e[s + 1];
		if (o) {
			t === "\n" && (o = !1);
			continue;
		}
		if (a > 0) {
			t === "/" && c === "*" ? (a++, s++) : t === "*" && c === "/" && (a--, s++);
			continue;
		}
		if (t === "/" && c === "/") {
			o = !0, s++;
			continue;
		}
		if (t === "/" && c === "*") {
			a = 1, s++;
			continue;
		}
		if (t === n && i++, t === r && --i === 0) return s;
	}
	return -1;
}
function pn(e, t) {
	let n = 0, r = 0, i = !1;
	for (let a = 0; a < t; a++) {
		let t = e[a], o = e[a + 1];
		if (i) {
			t === "\n" && (i = !1);
			continue;
		}
		if (r > 0) {
			t === "/" && o === "*" ? (r++, a++) : t === "*" && o === "/" && (r--, a++);
			continue;
		}
		t === "/" && o === "/" ? (i = !0, a++) : t === "/" && o === "*" ? (r = 1, a++) : t === "{" ? n++ : t === "}" && n--;
	}
	return n;
}
function R(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
//#endregion
//#region node_modules/@luma.gl/shadertools/dist/lib/shader-assembly/shader-plugin-varyings.js
function mn(e, t, n) {
	let r = [], i = [];
	for (let [a, o] of Object.entries(n)) {
		Mn(e, a);
		let n = o.interpolation === "flat" ? "flat " : "", s = t === "vertex" ? "out" : "in";
		r.push(`${n}${s} ${tn(o.type)} ${a};`), t === "vertex" && i.push(`${a} = ${An(o.type)};`);
	}
	return {
		declarations: r.join("\n"),
		initialization: i.join("\n")
	};
}
function hn(e, t, n, r) {
	let i = Object.entries(r);
	if (i.length === 0) return {
		source: e,
		declarations: "",
		vertexInitialization: "",
		fragmentInitialization: ""
	};
	let a = e, o = z(a, t, "vertex"), s = gn(a, o), c = z(a, n, "fragment"), l = _n(a, c), u = vn(a, s), d = vn(a, l.type), f = /* @__PURE__ */ new Set([
		...B(o.parameters),
		...B(u.body),
		...B(c.parameters),
		...B(d.body)
	]), p = /* @__PURE__ */ new Set([...Dn(u.body), ...Dn(d.body)]), m = [], h = [], g = [], _ = [];
	for (let [e, t] of i) {
		if (f.has(e) || On(a, e)) throw Error(`ShaderPlugin varying "${e}" conflicts with existing WGSL stage I/O or a module variable`);
		let n = kn(p);
		p.add(n);
		let r = t.interpolation === "flat" ? " @interpolate(flat)" : "";
		m.push(`  @location(${n})${r} ${e}: ${t.type},`), h.push(`var<private> ${e}: ${t.type};`), g.push(`${e} = ${jn(t.type)};`), _.push(`${e} = ${l.name}.${e};`);
	}
	bn(a, s, o.openBrace, o.closeBrace), a = xn(a, s, o, i.map(([e]) => e)), o = z(a, t, "vertex"), a = Sn(a, o, i.map(([e]) => e));
	let v = (s === l.type ? [s] : [s, l.type]).map((e) => vn(a, e).closeBrace).sort((e, t) => t - e);
	for (let e of v) a = a.slice(0, e) + `${m.join("\n")}\n` + a.slice(e);
	if (c = z(a, n, "fragment"), !RegExp(`\\b${H(l.name)}\\s*:`).test(c.parameters)) throw Error(`Unable to preserve WGSL fragment input "${l.name}"`);
	return {
		source: a,
		declarations: h.join("\n"),
		vertexInitialization: g.join("\n"),
		fragmentInitialization: _.join("\n")
	};
}
function z(e, t, n) {
	let r = RegExp(`\\bfn\\s+${H(t)}\\s*\\(`, "g").exec(e);
	if (!r) throw Error(`ShaderPlugin varyings require WGSL ${n} entry point "${t}"`);
	let i = e.indexOf("(", r.index), a = V(e, i, "(", ")"), o = e.indexOf("{", a), s = V(e, o, "{", "}");
	if (a < 0 || o < 0 || s < 0) throw Error(`Unable to parse WGSL ${n} entry point "${t}"`);
	return {
		openParenthesis: i,
		closeParenthesis: a,
		openBrace: o,
		closeBrace: s,
		parameters: e.slice(i + 1, a)
	};
}
function gn(e, t) {
	let n = e.slice(t.closeParenthesis + 1, t.openBrace), r = /->\s*([A-Za-z_][\w]*)\s*$/.exec(n.trim());
	if (!r || yn(e, r[1]) === null) throw Error("ShaderPlugin varyings require the WGSL vertex entry point to return a named struct");
	return r[1];
}
function _n(e, t) {
	let n = [];
	for (let r of En(t.parameters, ",")) {
		let t = /(?:@[A-Za-z_][\w]*(?:\([^)]*\))?\s*)*([A-Za-z_][\w]*)\s*:\s*([A-Za-z_][\w]*)\s*$/.exec(r.trim());
		t && yn(e, t[2]) && n.push({
			name: t[1],
			type: t[2]
		});
	}
	if (n.length !== 1) throw Error(`ShaderPlugin varyings require exactly one named WGSL fragment input struct; found ${n.length}`);
	return n[0];
}
function vn(e, t) {
	let n = yn(e, t);
	if (!n) throw Error(`Unable to find WGSL stage I/O struct "${t}"`);
	return n;
}
function yn(e, t) {
	let n = RegExp(`\\bstruct\\s+${H(t)}\\s*\\{`, "g").exec(e);
	if (!n) return null;
	let r = e.indexOf("{", n.index), i = V(e, r, "{", "}");
	return i < 0 ? null : {
		openBrace: r,
		closeBrace: i,
		body: e.slice(r + 1, i)
	};
}
function bn(e, t, n, r) {
	let i = RegExp(`\\b${H(t)}\\s*\\(`, "g"), a = i.exec(e);
	for (; a;) {
		if (a.index < n || a.index > r) throw Error(`ShaderPlugin varying output struct "${t}" is constructed outside the selected vertex entry point`);
		a = i.exec(e);
	}
}
function xn(e, t, n, r) {
	let i = RegExp(`\\b${H(t)}\\s*\\(`, "g"), a = [], o = i.exec(e);
	for (; o;) {
		if (o.index > n.openBrace && o.index < n.closeBrace) {
			let r = e.indexOf("(", o.index), i = V(e, r, "(", ")");
			if (i < 0 || i > n.closeBrace) throw Error(`Unable to parse WGSL output constructor "${t}"`);
			a.push({
				openParenthesis: r,
				closeParenthesis: i
			});
		}
		o = i.exec(e);
	}
	for (let t of a.sort((e, t) => t.closeParenthesis - e.closeParenthesis)) {
		let n = e.slice(t.openParenthesis + 1, t.closeParenthesis).trim() ? ", " : "";
		e = e.slice(0, t.closeParenthesis) + n + r.join(", ") + e.slice(t.closeParenthesis);
	}
	return e;
}
function Sn(e, t, n) {
	let r = Cn(e, t.openBrace + 1, t.closeBrace);
	for (let t = r.length - 1; t >= 0; t--) {
		let i = r[t], a = e.slice(i.expressionStart, i.semicolon).trim();
		if (!a) throw Error("ShaderPlugin varying vertex entry point cannot use an empty return");
		let o = `_luma_vertexOutput${t}`, s = `{\nvar ${o} = ${a};\n${n.map((e) => `${o}.${e} = ${e};`).join("\n")}\nreturn ${o};\n}`;
		e = e.slice(0, i.start) + s + e.slice(i.semicolon + 1);
	}
	return e;
}
function Cn(e, t, n) {
	let r = [], i = t;
	for (; i < n;) if (i = Tn(e, i, n), e.slice(i, i + 6) === "return" && !/[A-Za-z0-9_]/.test(e[i + 6] || "")) {
		let t = i + 6, a = wn(e, t, n);
		if (a < 0) throw Error("Unable to parse WGSL return statement in selected vertex entry point");
		r.push({
			start: i,
			expressionStart: t,
			semicolon: a
		}), i = a + 1;
	} else i++;
	return r;
}
function wn(e, t, n) {
	let r = 0, i = 0;
	for (let a = t; a < n; a++) {
		let t = Tn(e, a, n);
		if (t !== a) {
			a = t - 1;
			continue;
		}
		let o = e[a];
		if (o === "(" && r++, o === ")" && r--, o === "[" && i++, o === "]" && i--, o === ";" && r === 0 && i === 0) return a;
	}
	return -1;
}
function Tn(e, t, n) {
	let r = t;
	if (e[r] === "/" && e[r + 1] === "/") {
		let t = e.indexOf("\n", r + 2);
		return t < 0 || t > n ? n : t + 1;
	}
	if (e[r] === "/" && e[r + 1] === "*") {
		let t = 1;
		for (r += 2; r < n && t > 0;) e[r] === "/" && e[r + 1] === "*" ? (t++, r += 2) : e[r] === "*" && e[r + 1] === "/" ? (t--, r += 2) : r++;
	}
	return r;
}
function En(e, t) {
	let n = [], r = 0, i = 0, a = 0;
	for (let o = 0; o < e.length; o++) {
		let s = e[o];
		s === "(" && i++, s === ")" && i--, s === "<" && a++, s === ">" && a--, s === t && i === 0 && a === 0 && (n.push(e.slice(r, o)), r = o + 1);
	}
	return n.push(e.slice(r)), n;
}
function Dn(e) {
	let t = [], n = /@location\s*\(\s*(\d+)\s*\)/g, r = n.exec(e);
	for (; r;) t.push(Number(r[1])), r = n.exec(e);
	return t;
}
function B(e) {
	let t = [], n = /(?:^|,)\s*(?:@[A-Za-z_][\w]*(?:\([^)]*\))?\s*)*([A-Za-z_][\w]*)\s*:/gm, r = n.exec(e);
	for (; r;) t.push(r[1]), r = n.exec(e);
	return t;
}
function On(e, t) {
	let n = RegExp(`\\b(?:var(?:<[^>]+>)?|let|const)\\s+${H(t)}\\b`, "g"), r = n.exec(e);
	for (; r;) {
		if (Nn(e, r.index) === 0) return !0;
		r = n.exec(e);
	}
	return !1;
}
function kn(e) {
	let t = 0;
	for (; e.has(t);) t++;
	return t;
}
function An(e) {
	let { primitiveType: t, components: n } = d.getAttributeShaderTypeInfo(e), r = t === "u32" ? "0u" : t === "i32" ? "0" : "0.0";
	return n === 1 ? r : `${tn(e)}(${r})`;
}
function jn(e) {
	let { primitiveType: t, components: n } = d.getAttributeShaderTypeInfo(e), r = `${t}(0)`;
	return n === 1 ? r : `${e}(${r})`;
}
function Mn(e, t) {
	if (RegExp(`\\b(?:flat\\s+|smooth\\s+)?(?:in|out|varying)\\s+(?:(?:lowp|mediump|highp)\\s+)?[A-Za-z_][A-Za-z0-9_]*\\s+${H(t)}\\s*(?:\\[|;)`).test(e)) throw Error(`ShaderPlugin varying "${t}" conflicts with existing GLSL stage I/O`);
}
function V(e, t, n, r) {
	let i = 0, a = 0, o = !1;
	for (let s = t; s < e.length; s++) {
		let t = e[s], c = e[s + 1];
		if (o) {
			t === "\n" && (o = !1);
			continue;
		}
		if (a > 0) {
			t === "/" && c === "*" ? (a++, s++) : t === "*" && c === "/" && (a--, s++);
			continue;
		}
		if (t === "/" && c === "/") {
			o = !0, s++;
			continue;
		}
		if (t === "/" && c === "*") {
			a = 1, s++;
			continue;
		}
		if (t === n && i++, t === r && --i === 0) return s;
	}
	return -1;
}
function Nn(e, t) {
	let n = 0;
	for (let r = 0; r < t; r++) {
		let i = Tn(e, r, t);
		if (i !== r) {
			r = i - 1;
			continue;
		}
		e[r] === "{" && n++, e[r] === "}" && n--;
	}
	return n;
}
function H(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
//#endregion
//#region node_modules/@luma.gl/shadertools/dist/lib/shader-assembly/assemble-shaders.js
var Pn = `\n\n${A}\n`, U = 100, Fn = "precision highp float;\n";
function In(e) {
	let t = P(e.modules || []), { source: n, bindingAssignments: r } = Rn(e.platformInfo, {
		...e,
		source: e.source,
		stage: "vertex",
		modules: t
	});
	return {
		source: n,
		getUniforms: Bn(t),
		bindingAssignments: r,
		bindingTable: zt(n, r),
		shaderLayout: ne(n, {
			vertexEntryPoint: e.vertexEntryPoint,
			scanVertexAttributes: e.scanVertexAttributes
		})
	};
}
function Ln(e) {
	let { vs: t, fs: n } = e, r = P(e.modules || []);
	return {
		vs: zn(e.platformInfo, {
			...e,
			source: t,
			stage: "vertex",
			modules: r
		}),
		fs: zn(e.platformInfo, {
			...e,
			source: n,
			stage: "fragment",
			modules: r
		}),
		getUniforms: Bn(r)
	};
}
function Rn(e, t) {
	let { source: n, stage: r, modules: i, defines: a = {}, hookFunctions: o = [], inject: s = {}, pluginInjections: c = {}, pluginVertexInputs: l = {}, pluginVaryings: u = {}, vertexEntryPoint: d = "vertexMain", fragmentEntryPoint: f = "fragmentMain", log: p } = t;
	k(typeof n == "string", "shader source must be a string");
	let m = en(L(n, { defines: a }), d, l), h = hn(m.source, d, f, u), g = h.source, _ = "", v = Pt(o), y = {}, b = {}, x = {};
	Vn(c, y, b, x);
	for (let e in s) {
		let t = typeof s[e] == "string" ? {
			injection: s[e],
			order: 0
		} : s[e], n = /^(v|f)s:(#)?([\w-]+)$/.exec(e);
		if (n) {
			let r = n[2], i = n[3];
			r ? i === "decl" ? b[e] = [t] : x[e] = [t] : y[e] = [t];
		} else x[e] = [t];
	}
	Hn(m.declarations, m.initialization, b, x), Un(h, b, x);
	let S = i, C = Xn(g), w = Yn(C.source), ee = er(S, t._bindingRegistry, w, a), T = [];
	for (let e of S) {
		p && ze(e, g, p);
		let n = Zn(L(Jn(e, "wgsl", p), { defines: a }), e, {
			usedBindingsByGroup: w,
			bindingRegistry: t._bindingRegistry,
			reservedBindingKeysByGroup: ee
		});
		T.push(...n.bindingAssignments);
		let r = n.source;
		_ += r;
		let i = Wn(e);
		for (let e in i) {
			let t = /^(v|f)s:#([\w-]+)$/.exec(e);
			if (t) {
				let n = t[2] === "decl" ? b : x;
				n[e] = n[e] || [], n[e].push(i[e]);
			} else y[e] = y[e] || [], y[e].push(i[e]);
		}
	}
	return _ += Pn, _ = j(_, r, Gn(b), !1, "wgsl", {
		vertex: d,
		fragment: f
	}), _ += Kn(v, y), _ += cr(T), _ += C.source, _ = j(_, r, x, !1, "wgsl", {
		vertex: d,
		fragment: f
	}), sr(_), {
		source: _,
		bindingAssignments: T
	};
}
function zn(e, t) {
	let { source: n, stage: r, language: i = "glsl", modules: a, defines: o = {}, hookFunctions: s = [], inject: c = {}, pluginInjections: l = {}, pluginVertexInputs: u = {}, pluginVaryings: d = {}, prologue: f = !0, log: p } = t;
	k(typeof n == "string", "shader source must be a string");
	let m = i === "glsl" ? Ft(n).version : -1, h = e.shaderLanguageVersion, g = m === 100 ? "#version 100" : "#version 300 es", _ = n.split("\n").slice(1).join("\n"), v = {};
	a.forEach((e) => {
		Object.assign(v, e.defines);
	}), Object.assign(v, o);
	let y = "";
	switch (i) {
		case "wgsl": break;
		case "glsl": y = f ? `\
${g}

// ----- PROLOGUE -------------------------
${`#define SHADER_TYPE_${r.toUpperCase()}`}

${Et(e)}
${r === "fragment" ? Fn : ""}

// ----- APPLICATION DEFINES -------------------------

${qn(v)}

` : `${g}
`;
	}
	let b = Pt(s), x = {}, S = {}, C = {};
	Vn(l, x, S, C);
	for (let e in c) {
		let t = typeof c[e] == "string" ? {
			injection: c[e],
			order: 0
		} : c[e], n = /^(v|f)s:(#)?([\w-]+)$/.exec(e);
		if (n) {
			let r = n[2], i = n[3];
			r ? i === "decl" ? S[e] = [t] : C[e] = [t] : x[e] = [t];
		} else C[e] = [t];
	}
	if (r === "vertex") {
		let e = $t(_, u);
		e && (S["vs:#decl"] = S["vs:#decl"] || [], S["vs:#decl"].push({
			injection: e,
			order: -(2 ** 53 - 1)
		}));
	}
	let w = mn(_, r, d);
	if (w.declarations) {
		let e = r === "vertex" ? "vs:#decl" : "fs:#decl";
		S[e] = S[e] || [], S[e].push({
			injection: w.declarations,
			order: -(2 ** 53 - 1)
		});
	}
	w.initialization && (C["vs:#main-start"] = C["vs:#main-start"] || [], C["vs:#main-start"].push({
		injection: w.initialization,
		order: -(2 ** 53 - 1)
	}));
	for (let e of a) {
		p && ze(e, _, p);
		let t = Jn(e, r, p);
		y += t;
		let n = e.instance?.normalizedInjections[r] || {};
		for (let e in n) {
			let t = /^(v|f)s:#([\w-]+)$/.exec(e);
			if (t) {
				let r = t[2] === "decl" ? S : C;
				r[e] = r[e] || [], r[e].push(n[e]);
			} else x[e] = x[e] || [], x[e].push(n[e]);
		}
	}
	return y += "// ----- MAIN SHADER SOURCE -------------------------", y += Pn, y = j(y, r, S), y += Nt(b[r], x), y += _, y = j(y, r, C), i === "glsl" && m !== h && (y = Dt(y, r)), i === "glsl" && gt(y, r, p), y.trim();
}
function Bn(e) {
	return function(t) {
		let n = {};
		for (let r of e) {
			let e = r.getUniforms?.(t, n);
			Object.assign(n, e);
		}
		return n;
	};
}
function Vn(e, t, n, r) {
	for (let i in e) {
		let a = /^(v|f)s:(#)?([\w-]+)$/.exec(i);
		if (a) {
			let o = a[2], s = a[3], c = o ? s === "decl" ? n : r : t;
			c[i] = c[i] || [], c[i].push(...e[i]);
		} else r[i] = r[i] || [], r[i].push(...e[i]);
	}
}
function Hn(e, t, n, r) {
	e && (n["vs:#decl"] = n["vs:#decl"] || [], n["vs:#decl"].push({
		injection: e,
		order: -(2 ** 53 - 1)
	})), t && (r["vs:#main-start"] = r["vs:#main-start"] || [], r["vs:#main-start"].push({
		injection: t,
		order: -(2 ** 53 - 1)
	}));
}
function Un(e, t, n) {
	e.declarations && (t["vs:#decl"] = t["vs:#decl"] || [], t["vs:#decl"].push({
		injection: e.declarations,
		order: -(2 ** 53 - 1)
	})), e.vertexInitialization && (n["vs:#main-start"] = n["vs:#main-start"] || [], n["vs:#main-start"].push({
		injection: e.vertexInitialization,
		order: -(2 ** 53 - 1)
	})), e.fragmentInitialization && (n["fs:#main-start"] = n["fs:#main-start"] || [], n["fs:#main-start"].push({
		injection: e.fragmentInitialization,
		order: -(2 ** 53 - 1)
	}));
}
function Wn(e) {
	return {
		...e.instance?.normalizedInjections.vertex || {},
		...e.instance?.normalizedInjections.fragment || {}
	};
}
function Gn(e) {
	let t = [...e["vs:#decl"] || [], ...e["fs:#decl"] || []];
	return t.length ? { "vs:#decl": t } : {};
}
function Kn(e, t) {
	return Nt(e.vertex, t, "wgsl") + Nt(e.fragment, t, "wgsl");
}
function qn(e = {}) {
	let t = "";
	for (let n in e) {
		let r = e[n];
		(r || Number.isFinite(r)) && (t += `#define ${n.toUpperCase()} ${e[n]}\n`);
	}
	return t;
}
function Jn(e, t, n) {
	let r;
	switch (t) {
		case "vertex":
			r = e.vs || "";
			break;
		case "fragment":
			r = e.fs || "";
			break;
		case "wgsl":
			r = e.source || "";
			break;
		default: k(!1);
	}
	if (!e.name) throw Error("Shader module must have a name");
	mt(e, t, { log: n });
	let i = e.name.toUpperCase().replace(/[^0-9a-z]/gi, "_"), a = `\
// ----- MODULE ${e.name} ---------------

`;
	return t !== "wgsl" && (a += `#define MODULE_${i}\n`), a += `${r}\n`, a;
}
function Yn(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of w(e, x)) {
		let e = Number(n.bindingToken), r = Number(n.groupToken);
		rr(r, e, n.name), W(t, r, e, `application binding "${n.name}"`);
	}
	return t;
}
function Xn(e) {
	let t = w(e, b), n = /* @__PURE__ */ new Map();
	for (let e of t) {
		if (e.bindingToken === "auto") continue;
		let t = Number(e.bindingToken), r = Number(e.groupToken);
		rr(r, t, e.name), W(n, r, t, `application binding "${e.name}"`);
	}
	let r = { sawSupportedBindingDeclaration: t.length > 0 }, i = ee(e, b, (e) => $n(e, n, r));
	if (T(e) && !r.sawSupportedBindingDeclaration) throw Error("Unsupported @binding(auto) declaration form in application WGSL. Use adjacent \"@group(N)\" and \"@binding(auto)\" decorators followed by a bindable \"var\" declaration.");
	return { source: i };
}
function Zn(e, t, n) {
	let r = [], i = {
		sawSupportedBindingDeclaration: w(e, y).length > 0,
		nextHintedBindingLocation: typeof t.firstBindingSlot == "number" ? t.firstBindingSlot : null
	}, a = ee(e, y, (e) => Qn(e, {
		module: t,
		context: n,
		bindingAssignments: r,
		relocationState: i
	}));
	if (T(e) && !i.sawSupportedBindingDeclaration) throw Error(`Unsupported @binding(auto) declaration form in module "${t.name}". Use adjacent "@group(N)" and "@binding(auto)" decorators followed by a bindable "var" declaration.`);
	return {
		source: a,
		bindingAssignments: r
	};
}
function Qn(e, t) {
	let { module: n, context: r, bindingAssignments: i, relocationState: a } = t, { match: o, bindingToken: s, groupToken: c, name: l } = e, u = Number(c);
	if (s === "auto") {
		let e = lr(u, n.name, l), t = r.bindingRegistry?.get(e), s = t === void 0 ? ar(u, r.usedBindingsByGroup, n.name, a.nextHintedBindingLocation ?? void 0, r.bindingRegistry) : t;
		return ir(n.name, u, s, l), t !== void 0 && tr(r.reservedBindingKeysByGroup, u, s, e) ? (i.push({
			moduleName: n.name,
			name: l,
			group: u,
			location: s
		}), o.replace(/@binding\(\s*auto\s*\)/, `@binding(${s})`)) : (W(r.usedBindingsByGroup, u, s, `module "${n.name}" binding "${l}"`), r.bindingRegistry?.set(e, s), i.push({
			moduleName: n.name,
			name: l,
			group: u,
			location: s
		}), a.nextHintedBindingLocation !== null && t === void 0 && (a.nextHintedBindingLocation = s + 1), o.replace(/@binding\(\s*auto\s*\)/, `@binding(${s})`));
	}
	let d = Number(s);
	return ir(n.name, u, d, l), W(r.usedBindingsByGroup, u, d, `module "${n.name}" binding "${l}"`), i.push({
		moduleName: n.name,
		name: l,
		group: u,
		location: d
	}), o;
}
function $n(e, t, n) {
	let { match: r, bindingToken: i, groupToken: a, name: o } = e, s = Number(a);
	if (i === "auto") {
		let e = or(s, t);
		return rr(s, e, o), W(t, s, e, `application binding "${o}"`), r.replace(/@binding\(\s*auto\s*\)/, `@binding(${e})`);
	}
	return n.sawSupportedBindingDeclaration = !0, r;
}
function er(e, t, n, r) {
	let i = /* @__PURE__ */ new Map();
	if (!t) return i;
	for (let a of e) for (let e of nr(a, r)) {
		let r = lr(e.group, a.name, e.name), o = t.get(r);
		if (o !== void 0) {
			let t = i.get(e.group) || /* @__PURE__ */ new Map(), a = t.get(o);
			if (a && a !== r) throw Error(`Duplicate WGSL binding reservation for modules "${a}" and "${r}": group ${e.group}, binding ${o}.`);
			W(n, e.group, o, `registered module binding "${r}"`), t.set(o, r), i.set(e.group, t);
		}
	}
	return i;
}
function tr(e, t, n, r) {
	let i = e.get(t);
	if (!i) return !1;
	let a = i.get(n);
	if (!a) return !1;
	if (a !== r) throw Error(`Registered module binding "${r}" collided with "${a}": group ${t}, binding ${n}.`);
	return !0;
}
function nr(e, t) {
	let n = [], r = L(e.source || "", { defines: t });
	for (let e of w(r, y)) n.push({
		name: e.name,
		group: Number(e.groupToken)
	});
	return n;
}
function rr(e, t, n) {
	if (e === 0 && t >= U) throw Error(`Application binding "${n}" in group 0 uses reserved binding ${t}. Application-owned explicit group-0 bindings must stay below ${U}.`);
}
function ir(e, t, n, r) {
	if (t === 0 && n < U) throw Error(`Module "${e}" binding "${r}" in group 0 uses reserved application binding ${n}. Module-owned explicit group-0 bindings must be ${U} or higher.`);
}
function W(e, t, n, r) {
	let i = e.get(t) || /* @__PURE__ */ new Set();
	if (i.has(n)) throw Error(`Duplicate WGSL binding assignment for ${r}: group ${t}, binding ${n}.`);
	i.add(n), e.set(t, i);
}
function ar(e, t, n, r, i) {
	let a = t.get(e) || /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), s = `${e}:`, c = `${s}${n}:`;
	for (let [e, t] of i || []) e.startsWith(c) && o.add(t);
	let l = r ?? (e === 0 ? U : a.size > 0 ? Math.max(...a) + 1 : 0);
	for (; a.has(l) || o.has(l);) l++;
	for (let [e, t] of i || []) t === l && e.startsWith(s) && i?.delete(e);
	return l;
}
function or(e, t) {
	let n = t.get(e) || /* @__PURE__ */ new Set(), r = 0;
	for (; n.has(r);) r++;
	return r;
}
function sr(e) {
	let t = te(e, y);
	if (!t) return;
	let n = ur(e, t.index);
	throw n ? Error(`Unresolved @binding(auto) for module "${n}" binding "${t.name}" remained in assembled WGSL source.`) : dr(e, t.index) ? Error(`Unresolved @binding(auto) for application binding "${t.name}" remained in assembled WGSL source.`) : Error(`Unresolved @binding(auto) remained in assembled WGSL source near "${fr(t.match)}".`);
}
function cr(e) {
	if (e.length === 0) return "";
	let t = "// ----- MODULE WGSL BINDING ASSIGNMENTS ---------------\n";
	for (let n of e) t += `// ${n.moduleName}.${n.name} -> @group(${n.group}) @binding(${n.location})\n`;
	return t += "\n", t;
}
function lr(e, t, n) {
	return `${e}:${t}:${n}`;
}
function ur(e, t) {
	let n = /^\/\/ ----- MODULE ([^\n]+) ---------------$/gm, r, i;
	for (i = n.exec(e); i && i.index <= t;) r = i[1], i = n.exec(e);
	return r;
}
function dr(e, t) {
	let n = e.indexOf(Pn);
	return n >= 0 ? t > n : !0;
}
function fr(e) {
	return e.replace(/\s+/g, " ").trim();
}
//#endregion
//#region node_modules/@luma.gl/shadertools/dist/lib/shader-assembler.js
var pr = class e {
	static defaultShaderAssemblers = {};
	_hookFunctions = [];
	_defaultModules = [];
	static getDefaultShaderAssembler(t) {
		return k(t === "glsl" || t === "wgsl"), t === "wgsl" ? (e.defaultShaderAssemblers.wgsl = e.defaultShaderAssemblers.wgsl || new hr(), e.defaultShaderAssemblers.wgsl) : (e.defaultShaderAssemblers.glsl = e.defaultShaderAssemblers.glsl || new mr(), e.defaultShaderAssemblers.glsl);
	}
	addDefaultModule(e) {
		this._defaultModules.find((t) => t.name === (typeof e == "string" ? e : e.name)) || this._defaultModules.push(e);
	}
	removeDefaultModule(e) {
		let t = typeof e == "string" ? e : e.name;
		this._defaultModules = this._defaultModules.filter((e) => e.name !== t);
	}
	addShaderHook(e, t) {
		t && (e = Object.assign(t, { hook: e })), this._hookFunctions.push(e);
	}
	_getModuleList(e = []) {
		let t = Array(this._defaultModules.length + e.length), n = {}, r = 0;
		for (let e = 0, i = this._defaultModules.length; e < i; ++e) {
			let i = this._defaultModules[e], a = i.name;
			t[r++] = i, n[a] = !0;
		}
		for (let i = 0, a = e.length; i < a; ++i) {
			let a = e[i], o = a.name;
			n[o] || (t[r++] = a, n[o] = !0);
		}
		return t.length = r, N(t), t;
	}
}, mr = class extends pr {
	shaderLanguage = "glsl";
	assembleGLSLShaderPair(e) {
		let t = this._getModuleList(e.modules), n = this._hookFunctions;
		return {
			...Ln({
				...e,
				vs: e.vs,
				fs: e.fs,
				modules: t,
				hookFunctions: n
			}),
			modules: t
		};
	}
}, hr = class e extends pr {
	shaderLanguage = "wgsl";
	_wgslBindingRegistry = /* @__PURE__ */ new Map();
	assembleWGSLShader(t) {
		let n = this._getModuleList(t.modules), r = this._hookFunctions, i = e.getShaderPreprocessorDefines(t, n), a = t.platformInfo.shaderLanguage === "wgsl" && t.source ? L(t.source, { defines: i }) : t.source, { source: o, getUniforms: s, bindingAssignments: c } = In({
			...t,
			source: a,
			defines: i,
			_bindingRegistry: this._wgslBindingRegistry,
			modules: n,
			hookFunctions: r
		}), l = t.platformInfo.shaderLanguage === "wgsl" ? L(o, { defines: i }) : o;
		return {
			source: l,
			getUniforms: s,
			modules: n,
			bindingAssignments: c,
			bindingTable: zt(l, c),
			shaderLayout: ne(l, {
				vertexEntryPoint: t.vertexEntryPoint,
				scanVertexAttributes: t.scanVertexAttributes
			})
		};
	}
	static getShaderPreprocessorDefines(t, n) {
		return {
			...e.getPlatformPreprocessorDefines(t.platformInfo),
			...n.reduce((e, t) => (Object.assign(e, t.defines), e), {}),
			...t.defines
		};
	}
	static getPlatformPreprocessorDefines(e) {
		let t = e.limits || {};
		return {
			LUMA_SUPPORTS_VERTEX_STORAGE_BUFFERS: e.type === "webgpu" && (t.maxStorageBuffersInVertexStage || 0) > 0,
			LUMA_FP32_TAN_PRECISION_WORKAROUND: e.type === "webgpu" && e.gpu.toLowerCase() !== "nvidia" && e.gpu.toLowerCase() !== "amd",
			LUMA_FP64_INTEGER_ARITHMETIC: e.type === "webgpu" && e.gpu.toLowerCase() === "apple"
		};
	}
}, gr = {
	name: "fp32",
	source: "#ifdef LUMA_FP32_TAN_PRECISION_WORKAROUND\nconst FP32_TWO_PI: f32 = 6.2831854820251465;\nconst FP32_PI_2: f32 = 1.5707963705062866;\nconst FP32_PI_16: f32 = 0.1963495463132858;\n\nconst FP32_SIN_TABLE_0: f32 = 0.19509032368659973;\nconst FP32_SIN_TABLE_1: f32 = 0.3826834261417389;\nconst FP32_SIN_TABLE_2: f32 = 0.5555702447891235;\nconst FP32_SIN_TABLE_3: f32 = 0.7071067690849304;\n\nconst FP32_COS_TABLE_0: f32 = 0.9807852506637573;\nconst FP32_COS_TABLE_1: f32 = 0.9238795042037964;\nconst FP32_COS_TABLE_2: f32 = 0.8314695954322815;\nconst FP32_COS_TABLE_3: f32 = 0.7071067690849304;\n\nconst FP32_INVERSE_FACTORIAL_3: f32 = 1.666666716337204e-01;\nconst FP32_INVERSE_FACTORIAL_5: f32 = 8.333333767950535e-03;\nconst FP32_INVERSE_FACTORIAL_7: f32 = 1.9841270113829523e-04;\nconst FP32_INVERSE_FACTORIAL_9: f32 = 2.75573188446287533e-06;\nconst FP32_OVERFLOW: f32 = 3.402823466e+38;\n\nfn sin_taylor_fp32(a: f32) -> f32 {\n  if (a == 0.0) {\n    return 0.0;\n  }\n\n  let x = -a * a;\n  var sum = a;\n  var term = a;\n\n  term = term * x;\n  sum = sum + term * FP32_INVERSE_FACTORIAL_3;\n  term = term * x;\n  sum = sum + term * FP32_INVERSE_FACTORIAL_5;\n  term = term * x;\n  sum = sum + term * FP32_INVERSE_FACTORIAL_7;\n  term = term * x;\n  sum = sum + term * FP32_INVERSE_FACTORIAL_9;\n\n  return sum;\n}\n\nfn tan_taylor_fp32(a: f32) -> f32 {\n  if (a == 0.0) {\n    return 0.0;\n  }\n\n  let z = floor(a / FP32_TWO_PI);\n  let reduced = a - FP32_TWO_PI * z;\n\n  var quadrantValue = floor(reduced / FP32_PI_2 + 0.5);\n  let quadrant = i32(quadrantValue);\n  if (quadrant < -2 || quadrant > 2) {\n    return FP32_OVERFLOW;\n  }\n\n  var angle = reduced - FP32_PI_2 * quadrantValue;\n  quadrantValue = floor(angle / FP32_PI_16 + 0.5);\n  let tableIndex = i32(quadrantValue);\n  let absoluteTableIndex = abs(tableIndex);\n  if (absoluteTableIndex > 4) {\n    return FP32_OVERFLOW;\n  }\n\n  angle = angle - FP32_PI_16 * quadrantValue;\n  let sinAngle = sin_taylor_fp32(angle);\n  let cosAngle = sqrt(1.0 - sinAngle * sinAngle);\n\n  var tableCos = 0.0;\n  var tableSin = 0.0;\n  if (absoluteTableIndex == 1) {\n    tableCos = FP32_COS_TABLE_0;\n    tableSin = FP32_SIN_TABLE_0;\n  } else if (absoluteTableIndex == 2) {\n    tableCos = FP32_COS_TABLE_1;\n    tableSin = FP32_SIN_TABLE_1;\n  } else if (absoluteTableIndex == 3) {\n    tableCos = FP32_COS_TABLE_2;\n    tableSin = FP32_SIN_TABLE_2;\n  } else if (absoluteTableIndex == 4) {\n    tableCos = FP32_COS_TABLE_3;\n    tableSin = FP32_SIN_TABLE_3;\n  }\n\n  var sinReduced = sinAngle;\n  var cosReduced = cosAngle;\n  if (tableIndex > 0) {\n    sinReduced = tableCos * sinAngle + tableSin * cosAngle;\n    cosReduced = tableCos * cosAngle - tableSin * sinAngle;\n  } else if (tableIndex < 0) {\n    sinReduced = tableCos * sinAngle - tableSin * cosAngle;\n    cosReduced = tableCos * cosAngle + tableSin * sinAngle;\n  }\n\n  var sinValue = 0.0;\n  var cosValue = 0.0;\n  if (quadrant == 0) {\n    sinValue = sinReduced;\n    cosValue = cosReduced;\n  } else if (quadrant == 1) {\n    sinValue = cosReduced;\n    cosValue = -sinReduced;\n  } else if (quadrant == -1) {\n    sinValue = -cosReduced;\n    cosValue = sinReduced;\n  } else {\n    sinValue = -sinReduced;\n    cosValue = -cosReduced;\n  }\n\n  return sinValue / cosValue;\n}\n\nfn tan_fp32(a: f32) -> f32 {\n  return tan_taylor_fp32(a);\n}\n#else\nfn tan_fp32(a: f32) -> f32 {\n  return tan(a);\n}\n#endif\n",
	vs: "#ifdef LUMA_FP32_TAN_PRECISION_WORKAROUND\n\n// All these functions are for substituting tan() function from Intel GPU only\nconst float TWO_PI = 6.2831854820251465;\nconst float PI_2 = 1.5707963705062866;\nconst float PI_16 = 0.1963495463132858;\n\nconst float SIN_TABLE_0 = 0.19509032368659973;\nconst float SIN_TABLE_1 = 0.3826834261417389;\nconst float SIN_TABLE_2 = 0.5555702447891235;\nconst float SIN_TABLE_3 = 0.7071067690849304;\n\nconst float COS_TABLE_0 = 0.9807852506637573;\nconst float COS_TABLE_1 = 0.9238795042037964;\nconst float COS_TABLE_2 = 0.8314695954322815;\nconst float COS_TABLE_3 = 0.7071067690849304;\n\nconst float INVERSE_FACTORIAL_3 = 1.666666716337204e-01; // 1/3!\nconst float INVERSE_FACTORIAL_5 = 8.333333767950535e-03; // 1/5!\nconst float INVERSE_FACTORIAL_7 = 1.9841270113829523e-04; // 1/7!\nconst float INVERSE_FACTORIAL_9 = 2.75573188446287533e-06; // 1/9!\n\nfloat sin_taylor_fp32(float a) {\n  float r, s, t, x;\n\n  if (a == 0.0) {\n    return 0.0;\n  }\n\n  x = -a * a;\n  s = a;\n  r = a;\n\n  r = r * x;\n  t = r * INVERSE_FACTORIAL_3;\n  s = s + t;\n\n  r = r * x;\n  t = r * INVERSE_FACTORIAL_5;\n  s = s + t;\n\n  r = r * x;\n  t = r * INVERSE_FACTORIAL_7;\n  s = s + t;\n\n  r = r * x;\n  t = r * INVERSE_FACTORIAL_9;\n  s = s + t;\n\n  return s;\n}\n\nvoid sincos_taylor_fp32(float a, out float sin_t, out float cos_t) {\n  if (a == 0.0) {\n    sin_t = 0.0;\n    cos_t = 1.0;\n  }\n  sin_t = sin_taylor_fp32(a);\n  cos_t = sqrt(1.0 - sin_t * sin_t);\n}\n\nfloat tan_taylor_fp32(float a) {\n    float sin_a;\n    float cos_a;\n\n    if (a == 0.0) {\n        return 0.0;\n    }\n\n    // 2pi range reduction\n    float z = floor(a / TWO_PI);\n    float r = a - TWO_PI * z;\n\n    float t;\n    float q = floor(r / PI_2 + 0.5);\n    int j = int(q);\n\n    if (j < -2 || j > 2) {\n        return 1.0 / 0.0;\n    }\n\n    t = r - PI_2 * q;\n\n    q = floor(t / PI_16 + 0.5);\n    int k = int(q);\n    int abs_k = int(abs(float(k)));\n\n    if (abs_k > 4) {\n        return 1.0 / 0.0;\n    } else {\n        t = t - PI_16 * q;\n    }\n\n    float u = 0.0;\n    float v = 0.0;\n\n    float sin_t, cos_t;\n    float s, c;\n    sincos_taylor_fp32(t, sin_t, cos_t);\n\n    if (k == 0) {\n        s = sin_t;\n        c = cos_t;\n    } else {\n        if (abs(float(abs_k) - 1.0) < 0.5) {\n            u = COS_TABLE_0;\n            v = SIN_TABLE_0;\n        } else if (abs(float(abs_k) - 2.0) < 0.5) {\n            u = COS_TABLE_1;\n            v = SIN_TABLE_1;\n        } else if (abs(float(abs_k) - 3.0) < 0.5) {\n            u = COS_TABLE_2;\n            v = SIN_TABLE_2;\n        } else if (abs(float(abs_k) - 4.0) < 0.5) {\n            u = COS_TABLE_3;\n            v = SIN_TABLE_3;\n        }\n        if (k > 0) {\n            s = u * sin_t + v * cos_t;\n            c = u * cos_t - v * sin_t;\n        } else {\n            s = u * sin_t - v * cos_t;\n            c = u * cos_t + v * sin_t;\n        }\n    }\n\n    if (j == 0) {\n        sin_a = s;\n        cos_a = c;\n    } else if (j == 1) {\n        sin_a = c;\n        cos_a = -s;\n    } else if (j == -1) {\n        sin_a = -c;\n        cos_a = s;\n    } else {\n        sin_a = -s;\n        cos_a = -c;\n    }\n    return sin_a / cos_a;\n}\n#endif\n\nfloat tan_fp32(float a) {\n#ifdef LUMA_FP32_TAN_PRECISION_WORKAROUND\n  return tan_taylor_fp32(a);\n#else\n  return tan(a);\n#endif\n}\n"
}, _r = {};
function vr(e = "id") {
	return _r[e] = _r[e] || 1, `${e}-${_r[e]++}`;
}
//#endregion
//#region node_modules/@luma.gl/engine/dist/utils/shader-module-utils.js
function yr(e, t) {
	if (!e || !t.some((e) => e.bindingLayout?.length)) return e;
	let n = {
		...e,
		bindings: e.bindings.map((e) => ({ ...e }))
	};
	"attributes" in (e || {}) && (n.attributes = e?.attributes || []);
	for (let e of t) for (let t of e.bindingLayout || []) for (let e of wr(t.name)) {
		let r = n.bindings.find((t) => t.name === e);
		r?.group === 0 && (r.group = t.group), r && t.visibility !== void 0 && (r.visibility = t.visibility);
	}
	return n;
}
function br(e, t, n = []) {
	return e ? t ? {
		...e,
		attributes: e.attributes.length ? Dr(e.attributes, t.attributes.filter((e) => n.includes(e.name))) : t.attributes,
		bindings: Er(e.bindings, t.bindings)
	} : e : t;
}
function xr(e) {
	return !(!e.uniformTypes || Tr(e.uniformTypes));
}
function Sr(e) {
	let t = [];
	for (let n of e) {
		let e = dt(n), r = new Set([n.vs, n.fs].flatMap((e) => e ? ht(e).filter((e) => e.isStd140).map((e) => e.blockName) : [])), i = r.has(e) ? e : r.size === 1 ? r.values().next().value : void 0;
		xr(n) && i && t.push({
			name: i,
			uniformTypes: n.uniformTypes
		});
	}
	return t;
}
function Cr(e, t) {
	let n = [], r = /* @__PURE__ */ new Set();
	for (let i of [...e || [], ...t || []]) r.has(i.name) || (r.add(i.name), n.push(i));
	return n;
}
function wr(e) {
	let t = /* @__PURE__ */ new Set([e, `${e}Uniforms`]);
	return e.endsWith("Uniforms") || t.add(`${e}Sampler`), [...t];
}
function Tr(e) {
	for (let t in e) return !1;
	return !0;
}
function Er(e, t) {
	let n = e.map((e) => ({ ...e })), r = new Set(e.map((e) => e.name)), i = new Set(e.map((e) => `${e.group}:${e.location}`));
	for (let e of t) {
		let t = `${e.group}:${e.location}`;
		!r.has(e.name) && !i.has(t) && n.push({ ...e });
	}
	return n;
}
function Dr(e, t) {
	let n = e.map((e) => ({ ...e })), r = new Map(e.map((e) => [e.name, e])), i = new Map(e.map((e) => [e.location, e]));
	for (let e of t) {
		let t = r.get(e.name);
		if (t) {
			if (t.type !== e.type || t.location !== e.location) throw Error(`Shader attribute "${e.name}" conflicts with its inferred type or location`);
			continue;
		}
		let a = i.get(e.location);
		if (a) throw Error(`Shader attributes "${a.name}" and "${e.name}" both use location ${e.location}`);
		n.push({ ...e });
	}
	return n;
}
//#endregion
//#region node_modules/@luma.gl/engine/dist/model/split-uniforms-and-bindings.js
function Or(e) {
	return g(e) || typeof e == "number" || typeof e == "boolean";
}
function kr(e, t = {}) {
	let n = {
		bindings: {},
		uniforms: {}
	};
	return Object.keys(e).forEach((r) => {
		let i = e[r];
		Object.prototype.hasOwnProperty.call(t, r) || Or(i) ? n.uniforms[r] = i : n.bindings[r] = i;
	}), n;
}
//#endregion
//#region node_modules/@luma.gl/engine/dist/shader-inputs.js
var Ar = class {
	options = { disableWarnings: !1 };
	modules;
	moduleUniforms;
	moduleBindings;
	directBindings = {};
	constructor(e, t) {
		Object.assign(this.options, t);
		let r = P(Object.values(e).filter(Fr));
		for (let t of r) e[t.name] = t;
		n.log(1, "Creating ShaderInputs with modules", Object.keys(e))(), this.modules = e, this.moduleUniforms = {}, this.moduleBindings = {};
		for (let [t, r] of Object.entries(e)) r && (this._addModule(r), r.name && t !== r.name && !this.options.disableWarnings && n.warn(`Module name: ${t} vs ${r.name}`)());
	}
	destroy() {}
	setProps(e) {
		e.bindings && Object.assign(this.directBindings, e.bindings);
		for (let t of Object.keys(e)) {
			if (t === "bindings") continue;
			let r = t, i = e[r] || {}, a = this.modules[r];
			if (!a) this.options.disableWarnings || n.warn(`Module ${t} not found`)();
			else {
				let e = this.moduleUniforms[r], t = this.moduleBindings[r], { uniforms: n, bindings: o } = kr(a.getUniforms?.(i, e) || i, a.uniformTypes);
				this.moduleUniforms[r] = jr(e, n, a.uniformTypes), this.moduleBindings[r] = {
					...t,
					...o
				};
			}
		}
	}
	getModules() {
		return Object.values(this.modules);
	}
	addModules(e) {
		let t = P(e);
		for (let e of t) {
			let t = e.name;
			this.modules[t] || (this.modules[t] = e, this._addModule(e));
		}
	}
	getUniformValues() {
		return this.moduleUniforms;
	}
	getBindingValues() {
		let e = {};
		for (let t of Object.values(this.moduleBindings)) Object.assign(e, t);
		return Object.assign(e, this.directBindings), e;
	}
	getModuleBindingValues(e) {
		let t = this.moduleBindings[e];
		return t ? { ...t } : {};
	}
	getDebugTable() {
		let e = {};
		for (let [t, n] of Object.entries(this.moduleUniforms)) for (let [r, i] of Object.entries(n)) e[`${t}.${r}`] = {
			type: this.modules[t].uniformTypes?.[r],
			value: String(i)
		};
		return e;
	}
	_addModule(e) {
		let t = e.name;
		this.moduleUniforms[t] = jr({}, e.defaultUniforms || {}, e.uniformTypes), this.moduleBindings[t] = {};
	}
};
function jr(e = {}, t = {}, n = {}) {
	let r = { ...e };
	for (let [i, a] of Object.entries(t)) a !== void 0 && (r[i] = Mr(e[i], a, n[i]));
	return r;
}
function Mr(e, t, n) {
	if (!n || typeof n == "string") return G(t);
	if (Array.isArray(n)) {
		if (Nr(t) || !Array.isArray(t)) return G(t);
		let r = Array.isArray(e) && !Nr(e) ? [...e] : [], i = r.slice();
		for (let e = 0; e < t.length; e++) {
			let a = t[e];
			a !== void 0 && (i[e] = Mr(r[e], a, n[0]));
		}
		return i;
	}
	if (!Pr(t)) return G(t);
	let r = n, i = Pr(e) ? e : {}, a = { ...i };
	for (let [e, n] of Object.entries(t)) n !== void 0 && (a[e] = Mr(i[e], n, r[e]));
	return a;
}
function G(e) {
	return ArrayBuffer.isView(e) ? Array.prototype.slice.call(e) : Array.isArray(e) ? Nr(e) ? e.slice() : e.map((e) => e === void 0 ? void 0 : G(e)) : Pr(e) ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, t === void 0 ? void 0 : G(t)])) : e;
}
function Nr(e) {
	return ArrayBuffer.isView(e) || Array.isArray(e) && (e.length === 0 || typeof e[0] == "number");
}
function Pr(e) {
	return !!e && typeof e == "object" && !Array.isArray(e) && !ArrayBuffer.isView(e);
}
function Fr(e) {
	return !!e?.dependencies;
}
//#endregion
//#region node_modules/@luma.gl/engine/dist/dynamic-buffer/dynamic-buffer.js
var Ir = e.DEBUG_DATA_MAX_LENGTH, K = class {
	device;
	id;
	ready;
	usage;
	props;
	isReady = !0;
	destroyed = !1;
	generation = 0;
	updateTimestamp;
	debugData = /* @__PURE__ */ new ArrayBuffer(0);
	_debugDataEnabled;
	_maxDebugDataByteLength;
	_ownsBuffer;
	_buffer;
	get buffer() {
		return this._buffer;
	}
	get byteLength() {
		return this._buffer.byteLength;
	}
	get [Symbol.toStringTag]() {
		return "DynamicBuffer";
	}
	toString() {
		return `DynamicBuffer:"${this.id}":${this.byteLength}B`;
	}
	toJSON() {
		return this.toString();
	}
	constructor(t, n) {
		let { debugData: r = !1, buffer: i, ownsBuffer: a = !0, ...o } = n;
		if (i && i.device !== t) throw Error("DynamicBuffer adopted buffers must belong to the supplied device");
		if (i && (o.byteLength !== void 0 || o.data !== void 0)) throw Error("DynamicBuffer cannot combine an adopted buffer with byteLength or data");
		let s = n.id || i?.id || vr("dynamic-buffer"), c = {
			...o,
			id: s,
			usage: o.usage ?? i?.usage,
			indexType: o.indexType ?? i?.indexType
		};
		(c.usage || 0) & e.INDEX && !c.indexType && (o.data instanceof Uint32Array ? c.indexType = "uint32" : o.data instanceof Uint16Array ? c.indexType = "uint16" : o.data instanceof Uint8Array && (c.indexType = "uint8")), delete c.data, delete c.byteOffset, this.device = t, this.id = s, this.props = c, this.usage = c.usage || 0, this._debugDataEnabled = !!r, this._maxDebugDataByteLength = typeof r == "object" && r.maxByteLength !== void 0 ? r.maxByteLength : Ir, this._ownsBuffer = a, this._buffer = i ?? this.device.createBuffer({
			...o,
			id: s
		}), this.ready = Promise.resolve(this._buffer), this.updateTimestamp = this._buffer.updateTimestamp, this._resetDebugData(this._buffer.byteLength), o.data && this._writeDebugData(o.data, o.byteOffset || 0);
	}
	write(e, t = 0) {
		this._buffer.write(e, t), this._touch(), this._writeDebugData(e, t);
	}
	async mapAndWriteAsync(e, t = 0, n = this.byteLength - t) {
		let r = null;
		await this._buffer.mapAndWriteAsync(async (t, i) => {
			await e(t, i), r = new Uint8Array(t.slice(0, n));
		}, t, n), this._touch(), r && this._writeDebugData(r, t);
	}
	async readAsync(e = 0, t = this.byteLength - e) {
		let n = await this._buffer.readAsync(e, t);
		return this._writeDebugData(n, e) && this._touch(), n;
	}
	async mapAndReadAsync(e, t = 0, n = this.byteLength - t) {
		let r = null, i = await this._buffer.mapAndReadAsync(async (t, n) => (r = new Uint8Array(t.slice(0)), await e(t, n)), t, n);
		return r && this._writeDebugData(r, t) && this._touch(), i;
	}
	resize(e) {
		let { byteLength: t, preserveData: n = !1 } = e;
		if (t === this.byteLength) return !1;
		let r = Math.min(e.copyByteLength ?? Math.min(this.byteLength, t), this.byteLength, t), i = this._buffer, a = this.debugData.slice(0), { data: o, byteOffset: s, ...c } = this.props, l = this.device.createBuffer({
			...c,
			byteLength: t
		});
		return n && r > 0 && this._copyBufferContents(i, l, r), this._buffer = l, this._resetDebugData(t), n && a.byteLength > 0 && this._writeDebugData(a, 0), this._ownsBuffer && i.destroy(), this._ownsBuffer = !0, this.generation++, this._touch(), !0;
	}
	ensureSize(e, t) {
		return e <= this.byteLength ? !1 : this.resize({
			byteLength: e,
			preserveData: t?.preserveData
		});
	}
	getBinding(e) {
		return e?.offset === void 0 && e?.size === void 0 ? this._buffer : {
			buffer: this._buffer,
			offset: e?.offset,
			size: e?.size
		};
	}
	destroy() {
		this.destroyed || (this._ownsBuffer && this._buffer.destroy(), this.destroyed = !0, this.debugData = /* @__PURE__ */ new ArrayBuffer(0));
	}
	_copyBufferContents(e, t, n) {
		let r = this.device.type === "webgpu" ? Math.ceil(n / 4) * 4 : n, i = this.device.createCommandEncoder();
		i.copyBufferToBuffer({
			sourceBuffer: e,
			destinationBuffer: t,
			size: r
		}), this.device.submit(i.finish());
	}
	_touch() {
		this.updateTimestamp = this.device.incrementTimestamp();
	}
	_resetDebugData(e) {
		if (!this._debugDataEnabled) {
			this.debugData = /* @__PURE__ */ new ArrayBuffer(0);
			return;
		}
		this.debugData = new ArrayBuffer(Math.min(e, this._maxDebugDataByteLength));
	}
	_writeDebugData(e, t) {
		if (!this._debugDataEnabled || this.debugData.byteLength === 0 || t >= this.debugData.byteLength) return !1;
		let n = ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e), r = new Uint8Array(this.debugData), i = Math.min(n.byteLength, r.byteLength - t);
		return r.set(n.subarray(0, i), t), i > 0;
	}
};
function Lr(e) {
	return typeof e == "object" && !!e && "buffer" in e;
}
function Rr(e) {
	return e instanceof K ? e : Lr(e) && e.buffer instanceof K ? e.buffer : null;
}
function zr(e) {
	return e instanceof K ? e.buffer : e;
}
function Br(e) {
	return {
		buffer: zr(e.buffer),
		offset: e.offset,
		size: e.size
	};
}
//#endregion
//#region node_modules/@luma.gl/gpgpu/dist/gpu-data/gpu-vector-format.js
var Vr = /^vertex-list<([^<>]+)>$/, Hr = /^value-list<([^<>]+)>$/;
function Ur(e) {
	return Vr.test(e);
}
function Wr(e) {
	return Hr.test(e);
}
function Gr(e) {
	let t = Vr.exec(e), n = Hr.exec(e), r = t?.[1] ?? n?.[1] ?? e;
	try {
		i.getVertexFormatInfo(r);
	} catch {
		throw Error(`Unsupported GPUVector format ${e}`);
	}
	return r;
}
function q(e) {
	let t = Gr(e), n = Ur(e), r = Wr(e), a = i.getVertexFormatInfo(t), o = a.type, s = a.normalized, c = Kr(o, s);
	return {
		format: e,
		elementFormat: t,
		vertexList: n,
		valueList: r,
		type: o,
		signedDataType: qr(t, o),
		primitiveType: c,
		components: a.components,
		byteLength: a.byteLength,
		integer: a.integer,
		signed: a.signed,
		normalized: s,
		...a.webglOnly ? { webglOnly: !0 } : {}
	};
}
function Kr(e, t) {
	if (t) return "f32";
	switch (e) {
		case "float32": return "f32";
		case "float16": return "f16";
		case "uint8":
		case "uint16":
		case "uint32": return "u32";
		case "sint8":
		case "sint16":
		case "sint32": return "i32";
		default: throw Error(`Unsupported GPUVector component type ${e}`);
	}
}
function qr(e, t) {
	if (e === "unorm10-10-10-2") return "uint32";
	switch (t) {
		case "unorm8": return "uint8";
		case "snorm8": return "sint8";
		case "unorm16": return "uint16";
		case "snorm16": return "sint16";
		default: return t;
	}
}
//#endregion
//#region node_modules/@luma.gl/gpgpu/dist/gpu-data/gpu-data-view.js
var J = class {
	buffer;
	format;
	length;
	byteOffset;
	byteStride;
	constructor(e) {
		let t = i.getVertexFormatInfo(e.format).byteLength, n = e.byteOffset ?? 0, r = e.byteStride ?? t;
		if (Jr(e.length, "GPUDataView length"), Jr(n, "GPUDataView byteOffset"), Jr(r, "GPUDataView byteStride"), r < t) throw Error(`GPUDataView byteStride ${r} is smaller than ${e.format} byte length ${t}`);
		let a = e.length === 0 ? 0 : (e.length - 1) * r + t, o = n + a;
		if (!Number.isSafeInteger(a) || !Number.isSafeInteger(o)) throw Error("GPUDataView byte range must use safe integers");
		if (o > e.buffer.byteLength) throw Error("GPUDataView exceeds its backing buffer byte length");
		this.buffer = e.buffer, this.format = e.format, this.length = e.length, this.byteOffset = n, this.byteStride = r;
	}
	get elementByteLength() {
		return i.getVertexFormatInfo(this.format).byteLength;
	}
	get byteLength() {
		return this.length === 0 ? 0 : (this.length - 1) * this.byteStride + this.elementByteLength;
	}
};
function Jr(e, t) {
	if (!Number.isSafeInteger(e) || e < 0) throw Error(`${t} must be a non-negative safe integer`);
}
//#endregion
//#region node_modules/@luma.gl/gpgpu/dist/gpu-data/gpu-data-format.js
function Yr(e) {
	return !!(e && typeof e == "object" && e.type === "struct");
}
function Xr(e, t) {
	let n = Object.entries(e);
	if (n.length === 0) throw Error("GPUData struct format must declare at least one field");
	return t === "packed" ? Zr(n) : Qr(n);
}
function Zr(e) {
	let t = [], n = 0, r = 0;
	for (let [a, o] of e) {
		let e = i.getVertexFormatInfo(o);
		if (e.webglOnly) throw Error(`Packed GPUData struct field "${a}" uses WebGL-only format ${o}`);
		n = ei(n, Math.min(4, e.byteLength)), t.push([a, Object.freeze({
			format: o,
			byteOffset: n,
			byteLength: e.byteLength
		})]), n += e.byteLength, r += e.components;
	}
	return Object.freeze({
		type: "struct",
		layout: "packed",
		fields: Object.freeze(Object.fromEntries(t)),
		components: r,
		byteStride: ei(n, 4),
		rowByteLength: n
	});
}
function Qr(e) {
	let n = Object.fromEntries(e.map(([e, t]) => [e, $r(t)])), r = t(n, { layout: "wgsl-storage" }), a = [], o = 0, s = 0;
	for (let [t, n] of e) {
		let e = i.getVertexFormatInfo(n), c = r.fields[t].offset * 4;
		a.push([t, Object.freeze({
			format: n,
			byteOffset: c,
			byteLength: e.byteLength
		})]), o = Math.max(o, c + e.byteLength), s += e.components;
	}
	return Object.freeze({
		type: "struct",
		layout: "wgsl-storage",
		fields: Object.freeze(Object.fromEntries(a)),
		components: s,
		byteStride: r.byteLength,
		rowByteLength: o
	});
}
function $r(e) {
	let t = i.getVertexFormatInfo(e);
	switch (t.type) {
		case "float32": return Y("f32", t.components);
		case "sint32": return Y("i32", t.components);
		case "uint32": return Y("u32", t.components);
		default: return Y("u32", Math.ceil(t.byteLength / 4));
	}
}
function Y(e, t) {
	return t === 1 ? e : `vec${t}<${e}>`;
}
function ei(e, t) {
	return Math.ceil(e / t) * t;
}
//#endregion
//#region node_modules/@luma.gl/gpgpu/dist/gpu-data/gpu-data.js
var ti = class {
	buffer;
	ownsDataBuffer;
	constructor(e, t) {
		this.buffer = e, this.ownsDataBuffer = t;
	}
	get ownsBuffer() {
		return this.ownsDataBuffer;
	}
	transferBufferOwnership(e) {
		if (e.buffer !== this.buffer) throw Error("GPUData ownership can only be transferred to the same buffer");
		e.ownsDataBuffer = this.ownsDataBuffer, this.ownsDataBuffer = !1;
	}
	destroy() {
		this.ownsDataBuffer &&= (this.buffer.destroy(), !1);
	}
}, ni = class extends ti {
	dataType;
	format;
	length;
	valueLength;
	stride;
	byteOffset;
	byteStride;
	rowByteLength;
	readbackMetadata;
	valueOffsets;
	nullBitmap;
	valueByteLength;
	constructor(e) {
		let { buffer: t, format: n, length: r, valueLength: i, stride: a, byteOffset: o = 0, byteStride: s, rowByteLength: c, ownsBuffer: l = !1, readbackMetadata: u, valueOffsets: d, nullBitmap: f, valueByteLength: p, dataType: m } = e;
		super(t, l);
		let h;
		h = n ? typeof n == "string" ? n : Xr(n, e.layout ?? "wgsl-storage") : void 0;
		let g = Yr(h) ? h : void 0, _ = typeof h == "string" ? q(h) : void 0;
		if (this.dataType = m, this.format = h, this.length = r, this.valueLength = i ?? r, this.stride = a ?? _?.components ?? g?.components ?? s ?? c ?? 1, this.byteOffset = o, this.rowByteLength = c ?? g?.rowByteLength ?? _?.byteLength ?? s ?? this.stride, this.byteStride = s ?? g?.byteStride ?? this.rowByteLength, g) {
			if (this.rowByteLength < g.rowByteLength) throw Error(`GPUData rowByteLength ${this.rowByteLength} is smaller than struct format row byte length ${g.rowByteLength}`);
			if (this.byteStride < Math.max(g.byteStride, this.rowByteLength)) throw Error(`GPUData byteStride ${this.byteStride} is smaller than its struct row layout`);
		}
		this.readbackMetadata = u, this.valueOffsets = d, this.nullBitmap = f, this.valueByteLength = p;
	}
	getChild(e) {
		if (!Yr(this.format)) return null;
		let t = this.format.fields[e];
		return t ? new J({
			buffer: this.buffer,
			format: t.format,
			length: this.length,
			byteOffset: this.byteOffset + t.byteOffset,
			byteStride: this.byteStride
		}) : null;
	}
	getChildAt(e) {
		if (!Yr(this.format)) return null;
		let t = Object.values(this.format.fields)[e];
		return t ? new J({
			buffer: this.buffer,
			format: t.format,
			length: this.length,
			byteOffset: this.byteOffset + t.byteOffset,
			byteStride: this.byteStride
		}) : null;
	}
}, X = class {
	name;
	dataType;
	format;
	length;
	valueLength;
	stride;
	byteOffset;
	byteStride;
	rowByteLength;
	bufferLayout;
	data = [];
	device;
	bufferProps;
	isAppendable = !1;
	ownsDataChunks = !0;
	ownedVectors = [];
	appendableByteLength = 0;
	constructor(e) {
		switch (e.type) {
			case "buffer": {
				let { name: t, buffer: n, format: r, length: i, valueLength: a = i, byteOffset: o = 0, ownsBuffer: s = !1 } = e, { stride: c, byteStride: l, rowByteLength: u } = ri(e);
				this.name = t, this.dataType = e.dataType, this.format = r, this.length = i, this.valueLength = a, this.stride = c, this.byteOffset = o, this.byteStride = l, this.rowByteLength = u, this.data.push(new ni({
					buffer: n,
					format: r,
					length: i,
					valueLength: a,
					stride: c,
					byteOffset: o,
					byteStride: l,
					rowByteLength: u,
					ownsBuffer: s,
					dataType: e.dataType
				}));
				return;
			}
			case "interleaved": {
				let { name: t, buffer: n, format: r, length: i, valueLength: a = i, byteOffset: o = 0, byteStride: s, attributes: c, ownsBuffer: l = !1 } = e;
				this.name = t, this.dataType = e.dataType, this.format = r, this.length = i, this.valueLength = a, this.stride = s, this.byteOffset = o, this.byteStride = s, this.rowByteLength = s, this.bufferLayout = {
					name: t,
					byteStride: s,
					attributes: c
				}, this.data.push(new ni({
					buffer: n,
					format: r,
					length: i,
					valueLength: a,
					stride: s,
					byteOffset: o,
					byteStride: s,
					rowByteLength: s,
					ownsBuffer: l,
					dataType: e.dataType
				}));
				return;
			}
			case "data": {
				let t = e.format ?? ii(e.data), n = t ? q(t) : void 0, { name: r, data: i, stride: a = i[0]?.stride ?? n?.components ?? 1, valueLength: o = i.reduce((e, t) => e + t.valueLength, 0), byteStride: s = i[0]?.byteStride ?? n?.byteLength, rowByteLength: c = i[0]?.rowByteLength ?? n?.byteLength, bufferLayout: l, ownsData: u = !1 } = e;
				if (s === void 0 || c === void 0) throw Error("GPUVector requires format or explicit byte layout metadata");
				t && ai(i, t), this.name = r, this.dataType = e.dataType, this.format = t, this.length = i.reduce((e, t) => e + t.length, 0), this.valueLength = o, this.stride = a, this.byteOffset = i.length === 1 ? i[0].byteOffset : 0, this.byteStride = s, this.rowByteLength = c, this.bufferLayout = l, this.ownsDataChunks = u, this.data.push(...i);
				return;
			}
			case "appendable": {
				let { name: t, device: n, format: r, valueLength: i = 0, bufferProps: a } = e, { stride: o, byteStride: s, rowByteLength: c } = ri(e);
				this.name = t, this.dataType = e.dataType, this.format = r, this.length = 0, this.valueLength = i, this.stride = o, this.byteOffset = 0, this.byteStride = s, this.rowByteLength = c, this.device = n, this.bufferProps = a, this.isAppendable = !0;
				return;
			}
		}
	}
	get ownsBuffer() {
		return this.ownsDataChunks && this.data.some((e) => e.ownsBuffer) || this.ownedVectors.some((e) => e.ownsBuffer);
	}
	get capacityRows() {
		return this.isAppendable ? this.length : void 0;
	}
	get appendedByteLength() {
		return this.appendableByteLength;
	}
	addData(e) {
		if (this.format && e.format !== this.format) throw Error("GPUVector.addData() requires matching formats");
		if (e.byteStride !== this.byteStride) throw Error("GPUVector.addData() requires matching byteStride");
		if (e.rowByteLength !== this.rowByteLength) throw Error("GPUVector.addData() requires matching rowByteLength");
		return this.data.push(e), this.length += e.length, this.valueLength += e.valueLength, this;
	}
	appendDataChunk(e, t = this.appendableByteLength + e.buffer.byteLength) {
		if (!this.isAppendable) throw Error("GPUVector.appendDataChunk() requires appendable vector storage");
		if (this.format && e.format !== this.format) throw Error("GPUVector.appendDataChunk() requires matching formats");
		if (e.byteStride !== this.byteStride || e.rowByteLength !== this.rowByteLength) throw Error("GPUVector.appendDataChunk() requires matching byte layout metadata");
		return this.data.push(e), this.length += e.length, this.valueLength += e.valueLength, this.appendableByteLength = t, this;
	}
	resetLastBatch() {
		if (!this.isAppendable) throw Error("GPUVector.resetLastBatch() requires appendable vector storage");
		for (let e of this.data.splice(0)) e.destroy();
		return this.length = 0, this.valueLength = 0, this.appendableByteLength = 0, this;
	}
	retainOwnedVectors(e) {
		return this.ownedVectors.push(...e), this;
	}
	transferBufferOwnership(e) {
		let t = this.data[0], n = e.data[0];
		if (!t || !n || t.buffer !== n.buffer) throw Error("GPUVector ownership can only be transferred to the same buffer");
		t.transferBufferOwnership(n);
	}
	destroy() {
		if (this.ownsDataChunks) for (let e of this.data) e.destroy();
		for (let e of this.ownedVectors.splice(0)) e.destroy();
	}
};
function ri(e) {
	let t = e.format ? q(e.format) : void 0, n = e.rowByteLength ?? e.byteStride ?? t?.byteLength;
	if (n === void 0) throw Error("GPUVector requires format or explicit rowByteLength");
	return {
		stride: e.stride ?? t?.components ?? 1,
		byteStride: e.byteStride ?? n,
		rowByteLength: n
	};
}
function ii(e) {
	return e[0]?.format;
}
function ai(e, t) {
	if (e.find((e) => e.format !== t)) throw Error("GPUVector data chunks must share the declared format");
}
var Z = new class {
	poolSize = 20;
	bufferPools;
	constructor() {
		this.bufferPools = /* @__PURE__ */ new Map();
	}
	createOrReuse(t, n) {
		if (n > t.limits.maxBufferSize) throw Error(`Buffer pool cannot allocate ${n} bytes: device.limits.maxBufferSize is ${t.limits.maxBufferSize}`);
		let r = this.bufferPools.get(t), i = r ? r.findIndex((e) => e.byteLength >= n) : -1;
		if (i < 0) return t.createBuffer({
			usage: e.VERTEX | e.STORAGE | e.COPY_DST | e.COPY_SRC,
			byteLength: n
		});
		let [a] = r.splice(i, 1);
		return a;
	}
	recycle(e) {
		let t = e.device;
		this.bufferPools.has(t) || this.bufferPools.set(t, []);
		let n = this.bufferPools.get(t), r = n.findIndex((t) => t.byteLength > e.byteLength);
		r < 0 ? n.push(e) : n.splice(r, 0, e), this.purge();
	}
	purge() {
		for (let [e, t] of this.bufferPools) {
			let n = e.isLost ? 0 : this.poolSize;
			for (; t.length > n;) t.shift().destroy();
			t.length === 0 && this.bufferPools.delete(e);
		}
	}
}(), Q = class e {
	static get bufferPoolSize() {
		return Z.poolSize;
	}
	static set bufferPoolSize(e) {
		if (!Number.isSafeInteger(e) || e < 0) throw Error("GPUDataEvaluator.bufferPoolSize must be a non-negative safe integer");
		Z.poolSize = e, Z.purge();
	}
	type;
	size;
	get offset() {
		return this._offset;
	}
	get stride() {
		return this._stride;
	}
	normalized;
	isConstant;
	length;
	get byteLength() {
		return this._byteLength;
	}
	ValueType;
	source = null;
	format;
	_id;
	_destroyed = !1;
	_value;
	_offset;
	_stride;
	_byteLength;
	_gpuVector;
	_bufferOwnership = "owned";
	_targetBuffer;
	static fromArray(t, { type: n, size: r = 1, offset: i = 0, stride: o = 0, normalized: s = !1 }) {
		let l = n, u;
		Array.isArray(t) ? (l ||= "float32", u = new (a(l))(t)) : t instanceof Float64Array ? (l = "uint32", r *= 2, i *= 2, o *= 2, u = new Uint32Array(t.buffer, t.byteOffset, t.byteLength / 4)) : (l ||= c(t), u = t);
		let d = `<${l} * ${r}>`;
		return new e({
			id: d,
			type: l,
			size: r,
			offset: i,
			stride: o,
			normalized: s,
			value: u
		});
	}
	static fromConstant(t, n = "float32") {
		let r = a(n), i;
		return Array.isArray(t) ? i = `[${t.join(",")}]` : (i = String(t), t = [t]), new e({
			id: i,
			isConstant: !0,
			type: n,
			size: t.length,
			value: new r(t)
		});
	}
	static fromGPUData(t, n = {}) {
		ci(t);
		let r = new J({
			buffer: t.buffer,
			format: t.format,
			length: t.length,
			byteOffset: t.byteOffset,
			byteStride: t.byteStride
		});
		return new e({
			...li(r),
			id: n.id,
			gpuData: t
		});
	}
	static fromGPUDataView(t, n = {}) {
		return new e({
			...li(t),
			id: n.id,
			buffer: t.buffer
		});
	}
	constructor(t) {
		let { id: n, value: r, buffer: i, gpuData: o, format: s, source: c = null, isConstant: l = !1 } = t;
		if (!c && !r && !i && !o) throw Error("GPUDataEvaluator must have a value source");
		let { type: u, size: d, offset: f, stride: p, normalized: m, length: h } = t;
		if (c instanceof e ? (u ??= c.type, d ??= c.size, f ??= c.offset, p ??= c.stride, m ??= c.normalized, h ??= c.length) : (d ??= 1, f ??= 0, m ??= !1, h = l ? 1 : h), !u) throw Error("GPUDataEvaluator: type not defined");
		if (this._id = n, this.type = u, this.size = d, this.ValueType = a(this.type), this._offset = f, this._stride = p || this.ValueType.BYTES_PER_ELEMENT * d, this.normalized = m, this.source = c, this.format = s, h === void 0) {
			if (l) h = 1;
			else {
				if (!r) throw Error("GPUDataEvaluator: length not defined");
				h = Math.ceil(r.byteLength / this.stride);
			}
		}
		this.isConstant = l, this.length = h;
		let g = this.ValueType.BYTES_PER_ELEMENT * this.size;
		this._byteLength = h === 0 ? 0 : (h - 1) * this.stride + g, this._value = r, this._bufferOwnership = c instanceof e || i || o ? "borrowed" : "owned", o ? this._gpuVector = new X({
			type: "data",
			name: this._id ?? "data",
			format: o.format,
			data: [o],
			stride: o.stride,
			byteStride: o.byteStride,
			rowByteLength: o.rowByteLength
		}) : i && (this._gpuVector = this.createGPUVectorView({
			buffer: i,
			name: this._id,
			format: this.format
		}));
	}
	get value() {
		return this._value || (this.source instanceof e ? this.source.value : void 0);
	}
	get evaluated() {
		return !!this._gpuVector;
	}
	get id() {
		return this._id;
	}
	get gpuVector() {
		if (!this._gpuVector) throw Error(`${this} not evaluated`);
		return this._gpuVector;
	}
	get buffer() {
		return $(this.gpuVector);
	}
	setTargetBuffer({ buffer: t, byteOffset: n = 0, byteStride: r = this.stride }) {
		if (this._destroyed) throw Error(`GPUDataEvaluator ${this} already destroyed`);
		if (this._gpuVector) throw Error(`GPUDataEvaluator ${this} already evaluated`);
		if (!this.source || this.source instanceof e) throw Error("GPUDataEvaluator target buffers require a deferred operation source");
		this._targetBuffer = {
			buffer: t,
			byteOffset: n,
			byteStride: r
		};
	}
	async evaluate(t, n = {}) {
		if (this._destroyed) throw Error(`GPUDataEvaluator ${this} already destroyed`);
		if (this._gpuVector) return this._gpuVector;
		let r;
		if (this.source instanceof e) {
			let e = await this.source.evaluate(t);
			return this._gpuVector = this.createGPUVectorView({
				...n,
				buffer: $(e)
			}), this._gpuVector;
		}
		if (r = this._getEvaluationBuffer(t), this._value) r.write(this._value);
		else {
			let e = await this.source.execute(t, r);
			if (!e.success) throw e.error || /* @__PURE__ */ Error(`${this.source} evaluation failed`);
			e.value && (this._value = e.value);
		}
		return this._gpuVector = this.createGPUVectorView({
			...n,
			buffer: r
		}), this._gpuVector;
	}
	evaluateSync(t, n = {}) {
		if (this._destroyed) throw Error(`GPUDataEvaluator ${this} already destroyed`);
		if (this._gpuVector) return this._gpuVector;
		let r;
		if (this.source instanceof e) {
			let e = this.source.evaluateSync(t);
			return this._gpuVector = this.createGPUVectorView({
				...n,
				buffer: $(e)
			}), this._gpuVector;
		}
		if (r = this._getEvaluationBuffer(t), this._value) r.write(this._value);
		else {
			let e = this.source.executeSync(t, r);
			if (!e.success) throw e.error || /* @__PURE__ */ Error(`${this.source} evaluation failed`);
			e.value && (this._value = e.value);
		}
		return this._gpuVector = this.createGPUVectorView({
			...n,
			buffer: r
		}), this._gpuVector;
	}
	createGPUVectorView(e) {
		let t = e.name ?? this._id ?? "vector", n = e.format ?? this.format ?? mi(this.type, this.size, this.normalized);
		if (e.interleaved) {
			let n = typeof e.interleaved == "object" && e.interleaved.attributes ? e.interleaved.attributes : di(this);
			return new X({
				type: "interleaved",
				name: t,
				buffer: e.buffer,
				format: e.format ?? this.format,
				length: this.length,
				byteOffset: this.offset,
				byteStride: this.stride,
				attributes: n,
				ownsBuffer: !1
			});
		}
		return new X({
			type: "buffer",
			name: t,
			buffer: e.buffer,
			format: n,
			length: this.length,
			stride: this.size,
			byteOffset: this.offset,
			byteStride: this.stride,
			rowByteLength: this.ValueType.BYTES_PER_ELEMENT * this.size,
			ownsBuffer: !1
		});
	}
	_getEvaluationBuffer(e) {
		let t = this._targetBuffer;
		if (!t) return Z.createOrReuse(e, this.byteLength);
		if (t.buffer.device !== e) throw Error("GPUDataEvaluator target buffer belongs to a different device");
		let n = this.ValueType.BYTES_PER_ELEMENT * this.size, r = this.length === 0 ? 0 : (this.length - 1) * t.byteStride + n;
		if (t.byteOffset + r > t.buffer.byteLength) throw Error("GPUDataEvaluator target buffer is too small for the output layout");
		return this._offset = t.byteOffset, this._stride = t.byteStride, this._byteLength = r, this._bufferOwnership = "borrowed", this._targetBuffer = void 0, t.buffer;
	}
	async readValue(e = 0, t) {
		let { ValueType: n } = this, { size: r, offset: i, stride: a, length: o } = this, s = n.BYTES_PER_ELEMENT * r;
		if (t ??= o, e = Math.max(0, Math.min(o, e)), t = Math.max(e, Math.min(o, t)), this._value) return oi(this, this._value, e, t);
		let c = t - e;
		if (c === 0) return new n(0);
		let l = i + e * a, u = a === s ? c * s : (c - 1) * a + s, d = await this.buffer.readAsync(l, u), f = new n(d.buffer, d.byteOffset, d.byteLength / n.BYTES_PER_ELEMENT);
		if (a === s) return f;
		let p = new Uint8Array(s * c);
		for (let e = 0; e < c; e++) {
			let t = e * a;
			p.set(d.subarray(t, t + s), e * s);
		}
		return new n(p.buffer);
	}
	async ensureCPUValue() {
		let e = this.value;
		if (e) return e;
		let t = await this.buffer.readAsync(0, this.offset + this.byteLength);
		if (t.byteLength % this.ValueType.BYTES_PER_ELEMENT !== 0) throw Error(`${this} backing buffer byte length is not aligned to its scalar type`);
		let n = t.slice();
		return this._value = new this.ValueType(n.buffer, n.byteOffset, n.byteLength / this.ValueType.BYTES_PER_ELEMENT), this._value;
	}
	ensureCPUValueSync() {
		let e = this.value;
		if (e) return e;
		throw Error(`${this} CPU value is not available for synchronous evaluation`);
	}
	toString() {
		return this._id ?? this.source?.toString() ?? this.constructor.name;
	}
	destroy() {
		this._gpuVector &&= (this._bufferOwnership === "owned" && Z.recycle($(this._gpuVector)), void 0), this._targetBuffer = void 0, this._destroyed = !0;
	}
};
function oi(e, t, n, r) {
	let { ValueType: i, size: a, offset: o, stride: s } = e, c = s / i.BYTES_PER_ELEMENT, l = o / i.BYTES_PER_ELEMENT, u = r - n;
	if (c === a) {
		let e = l + n * c;
		return t.subarray(e, e + u * a);
	}
	let d = new i(u * a);
	for (let e = 0; e < u; e++) {
		let r = l + (n + e) * c;
		d.set(t.subarray(r, r + a), e * a);
	}
	return d;
}
function si(e) {
	if (e instanceof Q) return e;
	if (typeof e == "number" || Array.isArray(e)) return Q.fromConstant(e);
	if (e instanceof ni) return Q.fromGPUData(e);
	if (e instanceof J) return Q.fromGPUDataView(e);
	throw Error("getGPUDataEvaluator() requires GPUDataEvaluator, GPUData, GPUDataView, number, or number[]");
}
function ci(e) {
	if (!e.format) throw Error("GPUDataEvaluator.fromGPUData() requires GPUData format metadata");
	if (Ur(e.format) || Wr(e.format)) throw Error("GPUDataEvaluator.fromGPUData() does not support variable-length input");
	let t = q(e.format).byteLength;
	if (e.rowByteLength !== t) throw Error(`GPUDataEvaluator.fromGPUData() requires rowByteLength ${t} for GPUData`);
}
function li(e) {
	let t = q(e.format), n = a(t.signedDataType), r = n.BYTES_PER_ELEMENT * t.components;
	if (t.byteLength !== r) throw Error(`GPUDataEvaluator does not support packed vertex format ${e.format}: ${t.byteLength} physical bytes cannot expose ${t.components} ${t.signedDataType} components`);
	if (e.byteOffset % n.BYTES_PER_ELEMENT !== 0 || e.byteStride % n.BYTES_PER_ELEMENT !== 0) throw Error(`GPUDataEvaluator requires ${e.format} offset and stride aligned to ${n.BYTES_PER_ELEMENT} bytes`);
	return {
		type: t.signedDataType,
		size: t.components,
		offset: e.byteOffset,
		stride: e.byteStride,
		normalized: t.normalized,
		length: e.length,
		format: e.format
	};
}
function $(e) {
	let t = ui(e).buffer;
	return t instanceof K ? t.buffer : t;
}
function ui(e) {
	let [t, ...n] = e.data;
	if (!t || n.length > 0) throw Error(`GPUDataEvaluator requires exactly one GPUData chunk for "${e.name}"`);
	return t;
}
function di(e) {
	let t = [];
	return fi(e, t, { byteOffset: 0 }), t;
}
function fi(e, t, n) {
	let r = e.source;
	if (r && !(r instanceof Q) && r.name === "interleave") {
		for (let e of Object.values(r.inputs)) e instanceof Q && fi(e, t, n);
		return;
	}
	t.push({
		attribute: e.id ?? e.toString(),
		format: pi(e.type, e.size, e.normalized),
		byteOffset: n.byteOffset
	}), n.byteOffset += e.ValueType.BYTES_PER_ELEMENT * e.size;
}
function pi(e, t, n = !1) {
	if (t < 1 || t > 4) throw Error(`Cannot synthesize a GPUVector vertex format with ${t} components`);
	let r = e;
	if (n) switch (e) {
		case "uint8":
			r = "unorm8";
			break;
		case "sint8":
			r = "snorm8";
			break;
		case "uint16":
			r = "unorm16";
			break;
		case "sint16":
			r = "snorm16";
			break;
		case "float32":
			r = "float32";
			break;
		default: throw Error(`Unsupported normalized vertex format for ${e}`);
	}
	return (r === "uint8" || r === "sint8" || r === "uint16" || r === "sint16" || r === "unorm8" || r === "snorm8" || r === "unorm16" || r === "snorm16") && t === 3 ? `${r}x3-webgl` : `${r}${t === 1 ? "" : `x${t}`}`;
}
function mi(e, t, n = !1) {
	return t >= 1 && t <= 4 ? pi(e, t, n) : void 0;
}
//#endregion
//#region node_modules/@luma.gl/gpgpu/dist/operations/arithmetic-expression.js
var hi = {
	add: {
		arity: 2,
		symbol: "arithmetic_add"
	},
	subtract: {
		arity: 2,
		symbol: "arithmetic_subtract"
	},
	multiply: {
		arity: 2,
		symbol: "arithmetic_multiply"
	},
	divide: {
		arity: 2,
		symbol: "arithmetic_divide"
	},
	pow: {
		arity: 2,
		symbol: "pow"
	},
	sqrt: {
		arity: 1,
		symbol: "sqrt"
	},
	abs: {
		arity: 1,
		symbol: "abs"
	},
	sin: {
		arity: 1,
		symbol: "sin"
	},
	cos: {
		arity: 1,
		symbol: "cos"
	},
	tan: {
		arity: 1,
		symbol: "arithmetic_tan"
	},
	exp: {
		arity: 1,
		symbol: "exp"
	},
	log: {
		arity: 1,
		symbol: "log"
	}
};
//#endregion
//#region node_modules/@luma.gl/gpgpu/dist/utils/expression.js
function gi(e, { operations: t, inputs: n }) {
	switch (e.kind) {
		case "input":
			if (!(e.name in n)) throw Error(`Unknown expression input '${e.name}'`);
			return;
		case "literal":
			if (Array.isArray(e.value)) {
				for (let t of e.value) if (!Number.isFinite(t)) throw Error(`Expression literal array must contain only finite values, got ${t}`);
			} else if (!Number.isFinite(e.value)) throw Error(`Expression literal must be finite, got ${e.value}`);
			return;
		case "call": {
			let r = t[e.op];
			if (!r) throw Error(`Unknown expression op '${e.op}'`);
			if (e.args.length !== r.arity) throw Error(`Expression op '${e.op}' expects ${r.arity} args, got ${e.args.length}`);
			for (let r of e.args) gi(r, {
				operations: t,
				inputs: n
			});
			return;
		}
		default: throw Error(`Unsupported expression node ${e.kind}`);
	}
}
function _i(e, t) {
	return gi(e, t), vi(e, t);
}
function vi(e, t) {
	switch (e.kind) {
		case "input": {
			let n = t.inputs[e.name];
			return t.laneIndex < n.size ? t.formatInput(e.name) : t.formatOutOfBoundsInput(e.name);
		}
		case "literal": return t.formatLiteral(e.value);
		case "call": {
			let n = t.operations[e.op], r = e.args.map((e) => vi(e, t));
			return t.formatCall(n.symbol, r);
		}
		default: throw Error(`Unsupported expression node ${e.kind}`);
	}
}
//#endregion
export { rt as C, He as D, Ue as E, g as O, it as S, We as T, vr as _, Z as a, pr as b, Rr as c, Ar as d, Sr as f, xr as g, Cr as h, si as i, Lr as l, yr as m, hi as n, X as o, br as p, Q as r, K as s, _i as t, Br as u, gr as v, et as w, hr as x, mr as y };
