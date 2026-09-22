import { _ as e, b as t, c as n, f as r, p as i, u as a, v as o } from "./array-utils-flat-DeB-J5jn.mjs";
import { C as s, E as c, S as l, T as u, _ as d, b as f, d as p, f as ee, g as m, h, l as g, m as _, p as v, s as y, u as b, w as x } from "./expression-CtaQKvTZ.mjs";
import { c as te, i as ne, l as re, n as S, o as ie, r as C, s as w, t as ae } from "./get-attribute-from-layouts-DqvACIaG.mjs";
//#region node_modules/@luma.gl/core/dist/adapter/resources/external-texture.js
var T = class e extends o {
	width;
	height;
	updateTimestamp;
	get [Symbol.toStringTag]() {
		return "ExternalTexture";
	}
	constructor(t, n) {
		super(t, n, e.defaultProps);
		let r = this.props.source ? t.getExternalImageSize(this.props.source) : null;
		this.width = this.props.width || r?.width || 0, this.height = this.props.height || r?.height || 0, this.updateTimestamp = t.incrementTimestamp();
	}
	static defaultProps = {
		...o.defaultProps,
		source: void 0,
		width: 0,
		height: 0,
		colorSpace: "srgb",
		sampler: {}
	};
}, oe = "#version 300 es\nout vec4 transform_output;\nvoid main() {\n  transform_output = vec4(0);\n}";
function se(e) {
	let { input: t, inputChannels: n, output: r } = e || {};
	if (!t) return oe;
	if (!n) throw Error("inputChannels");
	return `\
#version 300 es
in ${E(n)} ${t};
out vec4 ${r};
void main() {
  ${r} = ${D(t, n)};
}`;
}
function E(e) {
	switch (e) {
		case 1: return "float";
		case 2: return "vec2";
		case 3: return "vec3";
		case 4: return "vec4";
		default: throw Error(`invalid channels: ${e}`);
	}
}
function D(e, t) {
	switch (t) {
		case 1: return `vec4(${e}, 0.0, 0.0, 1.0)`;
		case 2: return `vec4(${e}, 0.0, 1.0)`;
		case 3: return `vec4(${e}, 1.0)`;
		case 4: return e;
		default: throw Error(`invalid channels: ${t}`);
	}
}
//#endregion
//#region node_modules/@luma.gl/engine/dist/geometry/geometry.js
var O = class {
	id;
	topology;
	vertexCount;
	indices;
	attributes;
	bufferLayout;
	userData = {};
	constructor(e) {
		let { attributes: t = {}, indices: n = null, vertexCount: r = null } = e;
		this.id = e.id || d("geometry"), this.topology = e.topology, n && (this.indices = ArrayBuffer.isView(n) ? {
			value: n,
			size: 1
		} : n), this.attributes = {};
		for (let [e, n] of Object.entries(t)) {
			let t = ArrayBuffer.isView(n) ? { value: n } : n;
			if (!ArrayBuffer.isView(t.value)) throw Error(`${this._print(e)}: must be typed array or object with value as typed array`);
			if ((e === "POSITION" || e === "positions") && !t.size && (t.size = 3), e === "indices") {
				if (this.indices) throw Error("Multiple indices detected");
				this.indices = t;
			} else {
				let n = k(e), r = Object.keys(this.attributes).find((e) => k(e) === n);
				r && delete this.attributes[r], this.attributes[e] = t;
			}
		}
		this.indices && this.indices.isIndexed !== void 0 && (this.indices = Object.assign({}, this.indices), delete this.indices.isIndexed), this.vertexCount = r || this._calculateVertexCount(this.attributes, this.indices), this.bufferLayout = e.bufferLayout || ce(this.attributes);
	}
	getVertexCount() {
		return this.vertexCount;
	}
	getAttributes() {
		return this.indices ? {
			indices: this.indices,
			...this.attributes
		} : this.attributes;
	}
	_print(e) {
		return `Geometry ${this.id} attribute ${e}`;
	}
	_setAttributes(e, t) {
		return this;
	}
	_calculateVertexCount(e, t) {
		if (t) return t.value.length;
		let n = Infinity;
		for (let t of Object.values(e)) {
			if (!t) continue;
			let { value: e, size: r, constant: i } = t;
			!i && e && r !== void 0 && r >= 1 && (n = Math.min(n, e.length / r));
		}
		return n;
	}
};
function k(e) {
	switch (e) {
		case "POSITION": return "positions";
		case "NORMAL": return "normals";
		case "TEXCOORD_0": return "texCoords";
		case "TEXCOORD_1": return "texCoords1";
		case "COLOR_0": return "colors";
		default: return e;
	}
}
function ce(e) {
	let t = [];
	for (let [n, i] of Object.entries(e)) {
		if (!i) continue;
		let { value: e, size: a, normalized: o } = i;
		if (a === void 0) throw Error(`Attribute ${n} is missing a size`);
		t.push({
			name: k(n),
			format: r.getVertexFormatFromAttribute(e, a, o)
		});
	}
	return t;
}
//#endregion
//#region node_modules/@luma.gl/engine/dist/geometry/geometry-utils.js
function A(e, t = {}) {
	let n = t.bufferName || "geometry";
	if (le(e, n)) return e;
	let i = t.minAttributeAlignment || 4, a = ue(e, t.attributes), o = [], s = 0, c = Infinity;
	for (let [e, t] of a) {
		if (!t) continue;
		if (t.constant) throw Error(`Attribute ${e} is constant`);
		let { value: n, size: a, normalized: l } = t;
		if (!ArrayBuffer.isView(n)) throw Error(`Attribute ${e} is missing typed array data`);
		if (a === void 0) throw Error(`Attribute ${e} is missing a size`);
		let u = r.getVertexFormatFromAttribute(n, a, l), d = r.getVertexFormatInfo(u);
		s = M(s, i), o.push({
			sourceName: e,
			attributeName: k(e),
			value: n,
			size: a,
			format: u,
			byteOffset: s,
			byteLength: d.byteLength
		}), s += d.byteLength;
		let f = n.length / a;
		if (!Number.isInteger(f)) throw Error(`Attribute ${e} length is not divisible by size`);
		c = Math.min(c, f);
	}
	if (o.length === 0 || !Number.isFinite(c)) throw Error(`Geometry ${e.id} has no interleavable attributes`);
	let l = M(s, i), u = new ArrayBuffer(c * l);
	for (let e of o) j(u, c, l, e);
	return new O({
		id: e.id,
		topology: e.topology || "triangle-list",
		vertexCount: e.vertexCount,
		indices: e.indices,
		attributes: { [n]: {
			value: new Uint8Array(u),
			size: l,
			byteStride: l
		} },
		bufferLayout: [{
			name: n,
			stepMode: "vertex",
			byteStride: l,
			attributes: o.map((e) => ({
				attribute: e.attributeName,
				format: e.format,
				byteOffset: e.byteOffset
			}))
		}]
	});
}
function le(e, t) {
	if (e.bufferLayout.length !== 1) return !1;
	let n = e.bufferLayout[0];
	return n.name === t && !!n.attributes?.length && !!e.attributes[t];
}
function ue(e, t) {
	return t ? t.map((t) => [t, e.attributes[t]]) : Object.entries(e.attributes);
}
function j(e, t, n, r) {
	let i = r.value.constructor, a = i.BYTES_PER_ELEMENT;
	if (r.byteOffset % a !== 0 || n % a !== 0) throw Error(`Attribute ${r.sourceName} is not aligned to its component type`);
	let o = new i(e), s = r.value, c = r.byteOffset / a, l = n / a;
	for (let e = 0; e < t; e++) {
		let t = e * r.size, n = e * l + c;
		for (let e = 0; e < r.size; e++) o[n + e] = s[t + e];
	}
}
function M(e, t) {
	return Math.ceil(e / t) * t;
}
//#endregion
//#region node_modules/@luma.gl/engine/dist/geometry/gpu-geometry.js
var N = class {
	id;
	userData = {};
	topology;
	bufferLayout = [];
	vertexCount;
	indices;
	attributes;
	constructor(t) {
		if (this.id = t.id || d("geometry"), this.topology = t.topology, this.indices = t.indices || null, this.attributes = t.attributes, this.vertexCount = t.vertexCount, this.bufferLayout = t.bufferLayout || [], this.indices && !(this.indices.usage & e.INDEX)) throw Error("Index buffer must have INDEX usage");
	}
	destroy() {
		this.indices?.destroy();
		for (let e of Object.values(this.attributes)) e.destroy();
	}
	getVertexCount() {
		return this.vertexCount;
	}
	getAttributes() {
		return this.attributes;
	}
	getIndexes() {
		return this.indices || null;
	}
	_calculateVertexCount(e) {
		return e.byteLength / 12;
	}
};
function P(e, t) {
	if (t instanceof N) return t;
	let n = A(t), r = F(e, n), { attributes: i, bufferLayout: a } = I(e, n);
	return new N({
		topology: n.topology || "triangle-list",
		bufferLayout: a,
		vertexCount: n.vertexCount,
		indices: r,
		attributes: i
	});
}
function F(t, n) {
	if (!n.indices) return;
	let r = n.indices.value;
	return t.createBuffer({
		usage: e.INDEX,
		data: r
	});
}
function I(e, t) {
	let n = {};
	for (let [r, i] of Object.entries(t.attributes)) {
		let a = t.bufferLayout.find((e) => e.name === r)?.name || k(r);
		i && (n[a] = e.createBuffer({
			data: i.value,
			id: `${r}-buffer`
		}));
	}
	return {
		attributes: n,
		bufferLayout: t.bufferLayout,
		vertexCount: t.vertexCount
	};
}
//#endregion
//#region node_modules/@luma.gl/engine/dist/debug/debug-shader-layout.js
function L(e, t) {
	let n = {}, r = "Values";
	if (e.attributes.length === 0 && !e.varyings?.length) return { "No attributes or varyings": { [r]: "N/A" } };
	for (let t of e.attributes) if (t) {
		let e = `${t.location} ${t.name}: ${t.type}`;
		n[`in ${e}`] = { [r]: t.stepMode || "vertex" };
	}
	for (let t of e.varyings || []) {
		let e = `${t.location} ${t.name}`;
		n[`out ${e}`] = { [r]: JSON.stringify(t) };
	}
	return n;
}
//#endregion
//#region node_modules/@luma.gl/engine/dist/debug/debug-framebuffer.js
var R = "__debugFramebufferState", z = 8;
function B(e, t, n) {
	if (e.device.type !== "webgl") return;
	let r = U(e.device);
	if (!r.flushing) {
		if (fe(e)) {
			V(e, n, r);
			return;
		}
		t && de(t) && t.handle !== null && (r.queuedFramebuffers.includes(t) || r.queuedFramebuffers.push(t));
	}
}
function V(e, t, n) {
	if (n.queuedFramebuffers.length === 0) return;
	let { gl: r } = e.device, i = r.getParameter(36010), a = r.getParameter(36006), [o, s] = e.device.getDefaultCanvasContext().getDrawingBufferSize(), c = W(t.top, z), l = W(t.left, z);
	n.flushing = !0;
	try {
		for (let e of n.queuedFramebuffers) {
			let [n, i, a, u, d] = H({
				framebuffer: e,
				targetWidth: o,
				targetHeight: s,
				topPx: c,
				leftPx: l,
				minimap: t.minimap
			});
			r.bindFramebuffer(36008, e.handle), r.bindFramebuffer(36009, null), r.blitFramebuffer(0, 0, e.width, e.height, n, i, a, u, 16384, 9728), c += d + z;
		}
	} finally {
		r.bindFramebuffer(36008, i), r.bindFramebuffer(36009, a), n.flushing = !1;
	}
}
function H(e) {
	let { framebuffer: t, targetWidth: n, targetHeight: r, topPx: i, leftPx: a, minimap: o } = e, s = o ? Math.max(Math.floor(n / 4), 1) : n, c = o ? Math.max(Math.floor(r / 4), 1) : r, l = Math.min(s / t.width, c / t.height), u = Math.max(Math.floor(t.width * l), 1), d = Math.max(Math.floor(t.height * l), 1), f = a, p = Math.max(r - i - d, 0);
	return [
		f,
		p,
		f + u,
		p + d,
		d
	];
}
function U(e) {
	return e.userData[R] ||= {
		flushing: !1,
		queuedFramebuffers: []
	}, e.userData[R];
}
function de(e) {
	return "colorAttachments" in e;
}
function fe(e) {
	let t = e.props.framebuffer;
	return !t || t.handle === null;
}
function W(e, t) {
	if (!e) return t;
	let n = Number.parseInt(e, 10);
	return Number.isFinite(n) ? n : t;
}
//#endregion
//#region node_modules/@luma.gl/engine/dist/utils/deep-equal.js
function G(e, t, n) {
	if (e === t) return !0;
	if (!n || !e || !t) return !1;
	if (Array.isArray(e)) {
		if (!Array.isArray(t) || e.length !== t.length) return !1;
		for (let r = 0; r < e.length; r++) if (!G(e[r], t[r], n - 1)) return !1;
		return !0;
	}
	if (Array.isArray(t)) return !1;
	if (typeof e == "object" && typeof t == "object") {
		let r = Object.keys(e), i = Object.keys(t);
		if (r.length !== i.length) return !1;
		for (let i of r) if (!t.hasOwnProperty(i) || !G(e[i], t[i], n - 1)) return !1;
		return !0;
	}
	return !1;
}
//#endregion
//#region node_modules/@luma.gl/engine/dist/utils/buffer-layout-helper.js
var K = class {
	bufferLayouts;
	constructor(e) {
		this.bufferLayouts = e;
	}
	getBufferLayout(e) {
		return this.bufferLayouts.find((t) => t.name === e) || null;
	}
	getAttributeNamesForBuffer(e) {
		return S(e);
	}
	mergeBufferLayouts(e, t) {
		let n = [...e];
		for (let e of t) {
			let t = n.findIndex((t) => t.name === e.name);
			t < 0 ? n.push(e) : n[t] = e;
		}
		return n;
	}
};
//#endregion
//#region node_modules/@luma.gl/engine/dist/utils/buffer-layout-order.js
function pe(e, t) {
	let n = ne(e), r = t.slice();
	return r.sort((e, t) => C(S(e).map((e) => n[e])) - C(S(t).map((e) => n[e]))), r;
}
//#endregion
//#region node_modules/@luma.gl/engine/dist/dynamic-texture/texture-binding-source.js
function q(e) {
	return typeof e == "object" && !!e && "resolveTextureBinding" in e && typeof e.resolveTextureBinding == "function";
}
function me(e) {
	return e?.type === "texture" || e?.type === "external-texture";
}
function J(e, t, n) {
	let r = ie(e, t, { ignoreWarnings: !0 });
	return me(r) ? r : e.bindings.length === 0 && n?.fallbackGroup !== void 0 ? {
		type: "texture",
		name: t,
		group: n.fallbackGroup,
		location: 0
	} : null;
}
//#endregion
//#region node_modules/@luma.gl/engine/dist/model/model.js
var Y = 2, he = 1e4, X = "render pipeline initialization failed", ge = [
	"stencil8",
	"depth16unorm",
	"depth24plus",
	"depth24plus-stencil8",
	"depth32float",
	"depth32float-stencil8"
], Z = class r {
	static defaultProps = {
		...n.defaultProps,
		source: void 0,
		vs: null,
		fs: null,
		id: "unnamed",
		handle: void 0,
		userData: {},
		defines: {},
		modules: [],
		plugins: [],
		geometry: null,
		indexBuffer: null,
		indexCount: void 0,
		firstVertex: 0,
		firstIndex: 0,
		attributes: {},
		constantAttributes: {},
		bindings: {},
		uniforms: {},
		varyings: [],
		isInstanced: void 0,
		instanceCount: 0,
		vertexCount: 0,
		shaderInputs: void 0,
		material: void 0,
		pipelineFactory: void 0,
		shaderFactory: void 0,
		transformFeedback: void 0,
		shaderAssembler: f.getDefaultShaderAssembler("glsl"),
		debugShaders: void 0,
		disableWarnings: void 0
	};
	device;
	id;
	source;
	vs;
	fs;
	pipelineFactory;
	shaderFactory;
	userData = {};
	parameters;
	topology;
	bufferLayout;
	isInstanced = void 0;
	instanceCount = 0;
	vertexCount;
	indexCount;
	firstVertex;
	firstIndex;
	indexBuffer = null;
	bufferAttributes = {};
	constantAttributes = {};
	bindings = {};
	vertexArray;
	transformFeedback = null;
	pipeline;
	shaderInputs;
	material = null;
	_uniformStore;
	_attributeInfos = {};
	_gpuGeometry = null;
	props;
	_dynamicIndexBufferSource = null;
	_dynamicAttributeBufferSources = {};
	_colorAttachmentFormats;
	_depthStencilAttachmentFormat;
	_pipelineNeedsUpdate = "newly created";
	_needsRedraw = "initializing";
	_drawBlockedReason = !1;
	_destroyed = !1;
	_lastDrawTimestamp = -1;
	_bindingTable = [];
	get [Symbol.toStringTag]() {
		return "Model";
	}
	toString() {
		return `Model(${this.id})`;
	}
	constructor(e, t) {
		let n = r.defaultProps.shaderAssembler;
		this.props = {
			...r.defaultProps,
			...t,
			shaderAssembler: t.shaderAssembler ?? (Q(n, e.info.shadingLanguage) ? n : f.getDefaultShaderAssembler(e.info.shadingLanguage))
		}, t = this.props, this.id = t.id || d("model"), this.device = e, Object.assign(this.userData, t.userData), this.material = t.material || null;
		let i = xe(e), o = s(this.props.plugins, i.shaderLanguage), m = l(this.props.modules, o.modules), g = Object.fromEntries(m.map((e) => [e.name, e])), y = t.shaderInputs || new p(g, { disableWarnings: this.props.disableWarnings });
		t.shaderInputs && o.modules.length > 0 && y.addModules(o.modules), this.setShaderInputs(y);
		let b = h(this.props.modules, y.getModules()), x = {
			...o.defines,
			...this.props.defines
		};
		if (this.device.type === "webgl" && (this.props._uniformBlockLayouts = ee(b)), this.props.shaderLayout = _(this.props.shaderLayout, b) || null, this.device.type === "webgpu" && this.props.source) {
			let t = this.props.shaderAssembler;
			a(Q(t, "wgsl"));
			let { source: n, getUniforms: r, bindingTable: s, shaderLayout: c } = t.assembleWGSLShader({
				platformInfo: i,
				...this.props,
				modules: b,
				defines: x,
				pluginInjections: o.injections,
				pluginVertexInputs: o.vertexInputs,
				pluginVaryings: o.varyings
			});
			this.source = n, this._getModuleUniforms = r, this._bindingTable = s;
			let l = _e(c ?? e.getShaderLayout?.(this.source), o.vertexInputs), u = v(this.props.shaderLayout, l, Object.keys(o.vertexInputs));
			this.props.shaderLayout = _(u || null, b) || null;
		} else {
			let e = this.props.shaderAssembler;
			a(Q(e, "glsl"));
			let { vs: t, fs: n, getUniforms: r } = e.assembleGLSLShaderPair({
				platformInfo: i,
				...this.props,
				modules: b,
				defines: x,
				pluginInjections: o.injections,
				pluginVertexInputs: o.vertexInputs,
				pluginVaryings: o.varyings
			});
			this.vs = t, this.fs = n, this._getModuleUniforms = r, this._bindingTable = [];
		}
		this.vertexCount = this.props.vertexCount, this.indexCount = this.props.indexCount, this.firstVertex = this.props.firstVertex, this.firstIndex = this.props.firstIndex, this.instanceCount = this.props.instanceCount, this.topology = this.props.topology, this.bufferLayout = this.props.bufferLayout, this.parameters = this.props.parameters, this._colorAttachmentFormats = this.props.colorAttachmentFormats, this._depthStencilAttachmentFormat = this.props.depthStencilAttachmentFormat, t.geometry && this.setGeometry(t.geometry), this.pipelineFactory = t.pipelineFactory || c.getDefaultPipelineFactory(this.device), this.shaderFactory = t.shaderFactory || u.getDefaultShaderFactory(this.device), this.pipeline = this._updatePipeline(), this.vertexArray = e.createVertexArray({
			shaderLayout: this.pipeline.shaderLayout,
			bufferLayout: this.pipeline.bufferLayout
		}), this._gpuGeometry && this._setGeometryAttributes(this._gpuGeometry), "isInstanced" in t && (this.isInstanced = t.isInstanced), t.instanceCount && this.setInstanceCount(t.instanceCount), t.vertexCount && this.setVertexCount(t.vertexCount), t.indexBuffer && this.setIndexBuffer(t.indexBuffer), t.attributes && this.setAttributes(t.attributes), t.constantAttributes && this.setConstantAttributes(t.constantAttributes), t.bindings && this.setBindings(t.bindings), t.transformFeedback && (this.transformFeedback = t.transformFeedback);
	}
	destroy() {
		this._destroyed ||= (this.pipelineFactory.release(this.pipeline), this.shaderFactory.release(this.pipeline.vs), this.pipeline.fs && this.pipeline.fs !== this.pipeline.vs && this.shaderFactory.release(this.pipeline.fs), this._uniformStore.destroy(), this._gpuGeometry?.destroy(), !0);
	}
	needsRedraw() {
		this._getBindingsUpdateTimestamp() > this._lastDrawTimestamp && this.setNeedsRedraw("contents of bound textures or buffers updated");
		let e = this._needsRedraw;
		return this._needsRedraw = !1, e;
	}
	setNeedsRedraw(e) {
		this._needsRedraw ||= e;
	}
	getBindingDebugTable() {
		return this._bindingTable;
	}
	predraw(e) {
		this._syncDynamicBuffers(), this.updateShaderInputs(e), this.material?.updateShaderInputs(e), this.pipeline = this._updatePipeline();
	}
	draw(e) {
		if (this._drawBlockedReason && !this._pipelineNeedsUpdate) return t.info(Y, `>>> DRAWING ABORTED ${this.id}: ${this._drawBlockedReason}`)(), !1;
		let n = this._areBindingsLoading();
		if (n) return t.info(Y, `>>> DRAWING ABORTED ${this.id}: ${n} not loaded`)(), !1;
		this._syncAttachmentFormats(e);
		try {
			e.pushDebugGroup(`${this}.predraw(${e})`), this.device.type === "webgpu" ? (this.updateShaderInputs(), this.material?.updateShaderInputs(), this._syncDynamicBuffers(), this.pipeline = this._updatePipeline()) : this.predraw(this.device.commandEncoder);
		} finally {
			e.popDebugGroup();
		}
		let r, i = this.pipeline.isErrored;
		try {
			if (e.pushDebugGroup(`${this}.draw(${e})`), this._logDrawCallStart(), this.pipeline = this._updatePipeline(), i = this.pipeline.isErrored, i) t.info(Y, `>>> DRAWING ABORTED ${this.id}: ${X}`)(), r = !1;
			else {
				let n = this.vertexArray.getDrawValidationError();
				if (n) t.info(Y, `>>> DRAWING ABORTED ${this.id}: ${n}`)(), this._drawBlockedReason = n, r = !1;
				else {
					let t = this._getCurrentShaderLayout(), n = this._getBindings(t), i = this._getBindGroups(t, n), { indexBuffer: a } = this.vertexArray, o = a ? this.indexCount ?? a.byteLength / (a.indexType === "uint32" ? 4 : 2) : void 0;
					e.setPipeline(this.pipeline), e.setBindings(i, { _bindGroupCacheKeys: this._getBindGroupCacheKeys() }), e.setVertexArray(this.vertexArray), r = this.isInstanced === !0 && this.instanceCount === 0 || e.draw({
						isInstanced: this.isInstanced,
						vertexCount: this.vertexCount,
						instanceCount: this.isInstanced ? this.instanceCount : void 0,
						indexCount: o,
						firstVertex: this.firstVertex,
						firstIndex: this.firstIndex,
						transformFeedback: this.transformFeedback || void 0,
						uniforms: this.props.uniforms,
						parameters: this.parameters,
						topology: this.topology
					});
				}
			}
		} finally {
			e.popDebugGroup(), this._logDrawCallEnd();
		}
		return this._logFramebuffer(e), r ? (this._lastDrawTimestamp = this.device.timestamp, this._needsRedraw = !1) : i ? (this._needsRedraw = X, this._drawBlockedReason = X) : this._needsRedraw = this._drawBlockedReason ? this._drawBlockedReason : "waiting for resource initialization", r;
	}
	setGeometry(e) {
		this._gpuGeometry?.destroy();
		let t = e && P(this.device, e);
		if (t) {
			this.setTopology(t.topology || "triangle-list");
			let e = new K(this.bufferLayout);
			this.bufferLayout = e.mergeBufferLayouts(t.bufferLayout, this.bufferLayout), this.vertexArray && this._setGeometryAttributes(t);
		}
		this._gpuGeometry = t;
	}
	setTopology(e) {
		e !== this.topology && (this.topology = e, this._setPipelineNeedsUpdate("topology"));
	}
	setBufferLayout(e) {
		let t = new K(this.bufferLayout), n = this._gpuGeometry ? t.mergeBufferLayouts(e, this._gpuGeometry.bufferLayout) : e;
		G(n, this.bufferLayout, -1) || (this.bufferLayout = n, this._setPipelineNeedsUpdate("bufferLayout"), this.pipeline = this._updatePipeline(), this.vertexArray = this.device.createVertexArray({
			shaderLayout: this.pipeline.shaderLayout,
			bufferLayout: this.pipeline.bufferLayout
		}), this._gpuGeometry && this._setGeometryAttributes(this._gpuGeometry));
	}
	setParameters(e) {
		G(e, this.parameters, 2) || (this.parameters = e, this._setPipelineNeedsUpdate("parameters"));
	}
	setInstanceCount(e) {
		this.instanceCount = e, this.isInstanced === void 0 && e > 0 && (this.isInstanced = !0), this.setNeedsRedraw("instanceCount");
	}
	setVertexCount(e) {
		this.vertexCount = e, this.setNeedsRedraw("vertexCount");
	}
	setIndexCount(e) {
		this.indexCount = e, this.setNeedsRedraw("indexCount");
	}
	setDrawOffsets({ firstVertex: e, firstIndex: t }) {
		this.firstVertex = e, this.firstIndex = t, this.setNeedsRedraw("drawOffsets");
	}
	setShaderInputs(e) {
		this.shaderInputs = e, this._uniformStore = new x(this.device, this.shaderInputs.modules);
		for (let [e, t] of Object.entries(this.shaderInputs.modules)) if (m(t) && !this.material?.ownsModule(e)) {
			let t = this._uniformStore.getManagedUniformBuffer(e);
			this.bindings[`${e}Uniforms`] = t;
		}
		this.setNeedsRedraw("shaderInputs");
	}
	setMaterial(e) {
		this.material = e, this.setNeedsRedraw("material");
	}
	updateShaderInputs(e) {
		this._uniformStore.setUniforms(this.shaderInputs.getUniformValues(), e), this.setBindings(this._getNonMaterialBindings(this.shaderInputs.getBindingValues())), this.setNeedsRedraw("shaderInputs");
	}
	setBindings(e) {
		Object.assign(this.bindings, e), this.setNeedsRedraw("bindings");
	}
	setTransformFeedback(e) {
		this.transformFeedback = e, this.setNeedsRedraw("transformFeedback");
	}
	setIndexBuffer(e) {
		let t = e instanceof y ? e.buffer : e;
		this.indexBuffer = t, this._dynamicIndexBufferSource = e instanceof y ? {
			source: e,
			generation: e.generation
		} : null, this.vertexArray.setIndexBuffer(t), this.setNeedsRedraw("indexBuffer");
	}
	setAttributes(e, n) {
		this._drawBlockedReason = !1;
		let r = n?.disableWarnings ?? this.props.disableWarnings;
		e.indices && t.warn(`Model:${this.id} setAttributes() - indexBuffer should be set using setIndexBuffer()`)(), this.bufferLayout = pe(this.pipeline.shaderLayout, this.bufferLayout);
		let i = new K(this.bufferLayout);
		for (let [n, a] of Object.entries(e)) {
			let e = a instanceof y ? a.buffer : a, o = i.getBufferLayout(n);
			if (!o) {
				r || t.warn(`Model(${this.id}): Missing layout for buffer "${n}".`)();
				continue;
			}
			let s = i.getAttributeNamesForBuffer(o), c = !1;
			for (let n of s) {
				let i = this._attributeInfos[n];
				if (i) {
					let n = this.device.type === "webgpu" ? this.vertexArray.getBufferSlot(i.bufferName) : i.location;
					if (n === null) {
						r || t.warn(`Model(${this.id}): Missing vertex array slot for buffer "${i.bufferName}".`)();
						continue;
					}
					this.vertexArray.setBuffer(n, e), a instanceof y ? this._dynamicAttributeBufferSources[n] = {
						source: a,
						generation: a.generation
					} : delete this._dynamicAttributeBufferSources[n], c = !0;
				}
			}
			!c && !r && t.warn(`Model(${this.id}): Ignoring buffer "${e.id}" for unknown attribute "${n}"`)();
		}
		this.setNeedsRedraw("attributes");
	}
	setConstantAttributes(e, n) {
		for (let [r, i] of Object.entries(e)) {
			let e = this._attributeInfos[r];
			e ? this.vertexArray.setConstantWebGL(e.location, i) : (n?.disableWarnings ?? this.props.disableWarnings) || t.warn(`Model "${this.id}: Ignoring constant supplied for unknown attribute "${r}"`)();
		}
		this.setNeedsRedraw("constants");
	}
	_areBindingsLoading() {
		for (let e of Object.values(this.bindings)) if (q(e) && !e.isReady) return e.id;
		for (let e of Object.values(this.material?.bindings || {})) if (q(e) && !e.isReady) return e.id;
		return !1;
	}
	_getBindings(e = this._getCurrentShaderLayout()) {
		let t = {};
		for (let [n, r] of Object.entries(this.bindings)) {
			let i = ve(n, r, e);
			i && (t[n] = i);
		}
		return t;
	}
	_getBindGroups(e = this._getCurrentShaderLayout(), t = this._getBindings(e)) {
		let n = e.bindings.length ? w(e, t) : { 0: t };
		if (!this.material) return n;
		for (let [t, r] of Object.entries(this.material.getBindingsByGroup(e))) {
			let e = Number(t);
			n[e] = {
				...n[e] || {},
				...r
			};
		}
		return n;
	}
	_getBindGroupCacheKeys() {
		let e = this.material?.getBindGroupCacheKey(3);
		return e ? { 3: e } : {};
	}
	_getBindingsUpdateTimestamp() {
		let t = 0;
		this._dynamicIndexBufferSource && (t = Math.max(t, this._dynamicIndexBufferSource.source.updateTimestamp));
		for (let e of Object.values(this._dynamicAttributeBufferSources)) t = Math.max(t, e.source.updateTimestamp);
		for (let n of Object.values(this.bindings)) n instanceof te ? t = Math.max(t, n.texture.updateTimestamp) : n instanceof e || n instanceof re || n instanceof T || n instanceof y ? t = Math.max(t, n.updateTimestamp) : q(n) ? t = n.isReady ? Math.max(t, n.updateTimestamp) : Infinity : g(n) && (t = Math.max(t, (n.buffer instanceof y, n.buffer.updateTimestamp)));
		return Math.max(t, this.material?.getBindingsUpdateTimestamp() || 0);
	}
	_setGeometryAttributes(e) {
		let t = { ...e.attributes };
		for (let [e] of Object.entries(t)) !this.pipeline.shaderLayout.attributes.find((t) => t.name === e) && e !== "positions" && delete t[e];
		this.vertexCount = e.vertexCount, this.setIndexBuffer(e.indices || null), this.setAttributes(e.attributes, { disableWarnings: !0 }), this.setAttributes(t, { disableWarnings: this.props.disableWarnings }), this.setNeedsRedraw("geometry attributes");
	}
	_setPipelineNeedsUpdate(e) {
		this._pipelineNeedsUpdate ||= e, this._drawBlockedReason = !1, this.setNeedsRedraw(e);
	}
	_updatePipeline() {
		if (this._pipelineNeedsUpdate) {
			let e = null, n = null;
			this.pipeline && (t.log(1, `Model ${this.id}: Recreating pipeline because "${this._pipelineNeedsUpdate}".`)(), e = this.pipeline.vs, n = this.pipeline.fs), this._pipelineNeedsUpdate = !1;
			let r = this.shaderFactory.createShader({
				id: `${this.id}-vertex`,
				stage: "vertex",
				source: this.source || this.vs,
				debugShaders: this.props.debugShaders
			}), i = null;
			this.source ? i = r : this.fs && (i = this.shaderFactory.createShader({
				id: `${this.id}-fragment`,
				stage: "fragment",
				source: this.source || this.fs,
				debugShaders: this.props.debugShaders
			})), this.pipeline = this.pipelineFactory.createRenderPipeline({
				...this.props,
				bindings: void 0,
				bufferLayout: this.bufferLayout,
				colorAttachmentFormats: this._colorAttachmentFormats,
				depthStencilAttachmentFormat: this._depthStencilAttachmentFormat,
				topology: this.topology,
				parameters: this.parameters,
				bindGroups: void 0,
				vs: r,
				fs: i
			}), this._attributeInfos = ae(this.pipeline.shaderLayout, this.bufferLayout), e && this.shaderFactory.release(e), n && n !== e && this.shaderFactory.release(n);
		}
		return this.pipeline;
	}
	_lastLogTime = 0;
	_logOpen = !1;
	_logDrawCallStart() {
		let e = t.level > 3 ? 0 : he;
		t.level < 2 || Date.now() - this._lastLogTime < e || (this._lastLogTime = Date.now(), this._logOpen = !0, t.group(Y, `>>> DRAWING MODEL ${this.id}`, { collapsed: t.level <= 2 })());
	}
	_logDrawCallEnd() {
		if (this._logOpen) {
			let e = L(this.pipeline.shaderLayout, this.id);
			t.table(Y, e)();
			let n = this.shaderInputs.getDebugTable();
			t.table(Y, n)();
			let r = this._getAttributeDebugTable();
			t.table(Y, this._attributeInfos)(), t.table(Y, r)(), t.groupEnd(Y)(), this._logOpen = !1;
		}
	}
	_drawCount = 0;
	_logFramebuffer(e) {
		let t = this.device.props.debugFramebuffers;
		if (this._drawCount++, !t) return;
		let n = e.props.framebuffer;
		B(e, n, {
			id: n?.id || `${this.id}-framebuffer`,
			minimap: !0
		});
	}
	_getAttributeDebugTable() {
		let e = {};
		for (let [t, n] of Object.entries(this._attributeInfos)) {
			let r = this.vertexArray.attributes[n.location];
			e[n.location] = {
				name: t,
				type: n.shaderType,
				values: r ? this._getBufferOrConstantValues(r, n.bufferDataType) : "null"
			};
		}
		if (this.vertexArray.indexBuffer) {
			let { indexBuffer: t } = this.vertexArray, n = t.indexType === "uint32" ? new Uint32Array(t.debugData) : new Uint16Array(t.debugData);
			e.indices = {
				name: "indices",
				type: t.indexType,
				values: n.toString()
			};
		}
		return e;
	}
	_getBufferOrConstantValues(t, n) {
		let r = i.getTypedArrayConstructor(n);
		return (t instanceof e ? new r(t.debugData) : t).toString();
	}
	_getNonMaterialBindings(e) {
		if (!this.material) return e;
		let t = {};
		for (let [n, r] of Object.entries(e)) this.material.ownsBinding(n) || (t[n] = r);
		return t;
	}
	_getCurrentShaderLayout() {
		return this.pipeline?.shaderLayout || this.props.shaderLayout || { bindings: [] };
	}
	_syncDynamicBuffers() {
		if (this._dynamicIndexBufferSource && this._dynamicIndexBufferSource.generation !== this._dynamicIndexBufferSource.source.generation) {
			let e = this._dynamicIndexBufferSource.source.buffer;
			this.indexBuffer = e, this.vertexArray.setIndexBuffer(e), this._dynamicIndexBufferSource.generation = this._dynamicIndexBufferSource.source.generation, this.setNeedsRedraw("dynamic index buffer");
		}
		for (let [e, t] of Object.entries(this._dynamicAttributeBufferSources)) t.generation !== t.source.generation && (this.vertexArray.setBuffer(Number(e), t.source.buffer), t.generation = t.source.generation, this.setNeedsRedraw("dynamic attribute buffer"));
	}
	_syncAttachmentFormats(e) {
		if (this.device.type !== "webgpu") return;
		let t = e.framebuffer || e.props.framebuffer, n = e.props, r = n.colorAttachmentFormats ?? t?.colorAttachments?.map((e) => ye(e?.texture?.format)), i = n.depthStencilAttachmentFormat === !1 ? void 0 : n.depthStencilAttachmentFormat ?? be(t?.depthStencilAttachment?.texture?.format);
		(!G(this._colorAttachmentFormats, r, 1) || this._depthStencilAttachmentFormat !== i) && (this._colorAttachmentFormats = r, this._depthStencilAttachmentFormat = i, this._setPipelineNeedsUpdate("attachment formats"));
	}
};
function Q(e, t) {
	return e.shaderLanguage !== void 0 && e.shaderLanguage !== t ? !1 : t === "glsl" ? "assembleGLSLShaderPair" in e && typeof e.assembleGLSLShaderPair == "function" : "assembleWGSLShader" in e && typeof e.assembleWGSLShader == "function";
}
function _e(e, t) {
	return !e || Object.keys(t).length === 0 ? e : {
		...e,
		attributes: e.attributes.map((e) => {
			let n = e.name.startsWith("_luma_") ? e.name.slice(6) : null;
			return n && t[n] ? {
				...e,
				name: n
			} : e;
		})
	};
}
function ve(e, t, n) {
	if (q(t)) {
		let r = J(n, e, { fallbackGroup: 0 });
		return r ? t.resolveTextureBinding(r) : null;
	}
	return t instanceof y ? t.buffer : g(t) ? b(t) : t;
}
function ye(e) {
	return e && !$(e) ? e : null;
}
function be(e) {
	return e && $(e) ? e : void 0;
}
function $(e) {
	return ge.includes(e);
}
function xe(e) {
	return {
		type: e.type,
		shaderLanguage: e.info.shadingLanguage,
		shaderLanguageVersion: e.info.shadingLanguageVersion,
		gpu: e.info.gpu,
		limits: e.limits,
		features: e.features
	};
}
//#endregion
//#region node_modules/@luma.gl/engine/dist/compute/buffer-transform.js
var Se = 35980, Ce = 35981, we = class t {
	device;
	model;
	transformFeedback;
	static defaultProps = {
		...Z.defaultProps,
		feedbackBufferMode: "separate",
		outputs: void 0,
		feedbackBuffers: void 0
	};
	static isSupported(e) {
		return e?.info?.type === "webgl";
	}
	constructor(e, n = t.defaultProps) {
		if (!t.isSupported(e)) throw Error("BufferTransform not yet implemented on WebGPU");
		this.device = e, this.model = new Z(this.device, {
			id: n.id || "buffer-transform-model",
			fs: n.fs || se(),
			topology: n.topology || "point-list",
			varyings: n.outputs || n.varyings,
			...n,
			bufferMode: n.bufferMode || (n.feedbackBufferMode === "interleaved" ? Se : Ce)
		}), this.transformFeedback = this.device.createTransformFeedback({
			layout: this.model.pipeline.shaderLayout,
			buffers: n.feedbackBuffers
		}), this.model.setTransformFeedback(this.transformFeedback);
	}
	destroy() {
		this.model && this.model.destroy();
	}
	delete() {
		this.destroy();
	}
	run(e) {
		e?.inputBuffers && this.model.setAttributes(e.inputBuffers), e?.outputBuffers && this.transformFeedback.setBuffers(e.outputBuffers);
		let t = this.device.beginRenderPass({
			discard: !0,
			...e
		});
		this.model.draw(t), t.end();
	}
	getBuffer(e) {
		return this.transformFeedback.getBuffer(e);
	}
	readAsync(t) {
		let n = this.getBuffer(t);
		if (!n) throw Error("BufferTransform#getBuffer");
		if (n instanceof e) return n.readAsync();
		let { buffer: r, byteOffset: i = 0, byteLength: a = r.byteLength } = n;
		return r.readAsync(i, a);
	}
};
//#endregion
export { A as a, q as i, Z as n, O as o, J as r, T as s, we as t };
