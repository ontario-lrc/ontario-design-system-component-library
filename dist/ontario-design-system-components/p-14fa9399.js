const t = 'ontario-design-system-components';
let e;
let n;
let s = false;
let o = false;
let l = false;
const c = (t) => {
	const e = new URL(t, Dt.t);
	return e.origin !== Lt.location.origin ? e.href : e.pathname;
};
const i = (t, e = '') => {
	{
		return () => {};
	}
};
const f = (t, e) => {
	{
		return () => {};
	}
};
const r = '{visibility:hidden}.hydrated{visibility:inherit}';
const u = 'slot-fb{display:contents}slot-fb[hidden]{display:none}';
const a = 'http://www.w3.org/1999/xlink';
const d = ['formAssociatedCallback', 'formResetCallback', 'formDisabledCallback', 'formStateRestoreCallback'];
const p = {};
const v = 'http://www.w3.org/2000/svg';
const y = 'http://www.w3.org/1999/xhtml';
const h = (t) => t != null;
const m = (t) => {
	t = typeof t;
	return t === 'object' || t === 'function';
};
function b(t) {
	var e, n, s;
	return (s =
		(n = (e = t.head) === null || e === void 0 ? void 0 : e.querySelector('meta[name="csp-nonce"]')) === null ||
		n === void 0
			? void 0
			: n.getAttribute('content')) !== null && s !== void 0
		? s
		: undefined;
}
const w = (t, e, ...n) => {
	let s = null;
	let o = null;
	let l = false;
	let c = false;
	const i = [];
	const f = (e) => {
		for (let n = 0; n < e.length; n++) {
			s = e[n];
			if (Array.isArray(s)) {
				f(s);
			} else if (s != null && typeof s !== 'boolean') {
				if ((l = typeof t !== 'function' && !m(s))) {
					s = String(s);
				}
				if (l && c) {
					i[i.length - 1].o += s;
				} else {
					i.push(l ? $(null, s) : s);
				}
				c = l;
			}
		}
	};
	f(n);
	if (e) {
		if (e.key) {
			o = e.key;
		}
		{
			const t = e.className || e.class;
			if (t) {
				e.class =
					typeof t !== 'object'
						? t
						: Object.keys(t)
								.filter((e) => t[e])
								.join(' ');
			}
		}
	}
	if (typeof t === 'function') {
		return t(e === null ? {} : e, i, j);
	}
	const r = $(t, null);
	r.l = e;
	if (i.length > 0) {
		r.i = i;
	}
	{
		r.u = o;
	}
	return r;
};
const $ = (t, e) => {
	const n = { p: 0, v: t, o: e, h: null, i: null };
	{
		n.l = null;
	}
	{
		n.u = null;
	}
	return n;
};
const g = {};
const S = (t) => t && t.v === g;
const j = { forEach: (t, e) => t.map(k).forEach(e), map: (t, e) => t.map(k).map(e).map(O) };
const k = (t) => ({ vattrs: t.l, vchildren: t.i, vkey: t.u, vname: t.m, vtag: t.v, vtext: t.o });
const O = (t) => {
	if (typeof t.vtag === 'function') {
		const e = Object.assign({}, t.vattrs);
		if (t.vkey) {
			e.key = t.vkey;
		}
		if (t.vname) {
			e.name = t.vname;
		}
		return w(t.vtag, e, ...(t.vchildren || []));
	}
	const e = $(t.vtag, t.vtext);
	e.l = t.vattrs;
	e.i = t.vchildren;
	e.u = t.vkey;
	e.m = t.vname;
	return e;
};
const C = (t) => Et.map((e) => e(t)).find((t) => !!t);
const x = (t) => Et.push(t);
const M = (t, e) => {
	if (t != null && !m(t)) {
		if (e & 4) {
			return t === 'false' ? false : t === '' || !!t;
		}
		if (e & 2) {
			return parseFloat(t);
		}
		if (e & 1) {
			return String(t);
		}
		return t;
	}
	return t;
};
const R = (t) => kt(t).$hostElement$;
const P = (t, e, n) => {
	const s = R(t);
	return { emit: (t) => U(s, e, { bubbles: !!(n & 4), composed: !!(n & 2), cancelable: !!(n & 1), detail: t }) };
};
const U = (t, e, n) => {
	const s = Dt.ce(e, n);
	t.dispatchEvent(s);
	return s;
};
const E = new WeakMap();
const L = (t, e, n) => {
	let s = Ut.get(t);
	if (Tt && n) {
		s = s || new CSSStyleSheet();
		if (typeof s === 'string') {
			s = e;
		} else {
			s.replaceSync(e);
		}
	} else {
		s = e;
	}
	Ut.set(t, s);
};
const A = (t, e, n) => {
	var s;
	const o = F(e, n);
	const l = Ut.get(o);
	t = t.nodeType === 11 ? t : At;
	if (l) {
		if (typeof l === 'string') {
			t = t.head || t;
			let n = E.get(t);
			let c;
			if (!n) {
				E.set(t, (n = new Set()));
			}
			if (!n.has(o)) {
				{
					c = At.createElement('style');
					c.innerHTML = l;
					const e = (s = Dt.$) !== null && s !== void 0 ? s : b(At);
					if (e != null) {
						c.setAttribute('nonce', e);
					}
					t.insertBefore(c, t.querySelector('link'));
				}
				if (e.p & 4) {
					c.innerHTML += u;
				}
				if (n) {
					n.add(o);
				}
			}
		} else if (!t.adoptedStyleSheets.includes(l)) {
			t.adoptedStyleSheets = [...t.adoptedStyleSheets, l];
		}
	}
	return o;
};
const D = (t) => {
	const e = t.S;
	const n = t.$hostElement$;
	const s = e.p;
	const o = i('attachStyles', e.j);
	const l = A(n.shadowRoot ? n.shadowRoot : n.getRootNode(), e, t.k);
	if (s & 10) {
		n['s-sc'] = l;
		n.classList.add(l + '-h');
	}
	o();
};
const F = (t, e) => 'sc-' + (e && t.p & 32 ? t.j + '-' + e : t.j);
const N = (t, e, n, s, o, l) => {
	if (n !== s) {
		let c = xt(t, e);
		let i = e.toLowerCase();
		if (e === 'class') {
			const e = t.classList;
			const o = W(n);
			const l = W(s);
			e.remove(...o.filter((t) => t && !l.includes(t)));
			e.add(...l.filter((t) => t && !o.includes(t)));
		} else if (e === 'style') {
			{
				for (const e in n) {
					if (!s || s[e] == null) {
						if (e.includes('-')) {
							t.style.removeProperty(e);
						} else {
							t.style[e] = '';
						}
					}
				}
			}
			for (const e in s) {
				if (!n || s[e] !== n[e]) {
					if (e.includes('-')) {
						t.style.setProperty(e, s[e]);
					} else {
						t.style[e] = s[e];
					}
				}
			}
		} else if (e === 'key');
		else if (e === 'ref') {
			if (s) {
				s(t);
			}
		} else if (!c && e[0] === 'o' && e[1] === 'n') {
			if (e[2] === '-') {
				e = e.slice(3);
			} else if (xt(Lt, i)) {
				e = i.slice(2);
			} else {
				e = i[2] + e.slice(3);
			}
			if (n || s) {
				const o = e.endsWith(q);
				e = e.replace(H, '');
				if (n) {
					Dt.rel(t, e, n, o);
				}
				if (s) {
					Dt.ael(t, e, s, o);
				}
			}
		} else {
			const f = m(s);
			if ((c || (f && s !== null)) && !o) {
				try {
					if (!t.tagName.includes('-')) {
						const o = s == null ? '' : s;
						if (e === 'list') {
							c = false;
						} else if (n == null || t[e] != o) {
							t[e] = o;
						}
					} else {
						t[e] = s;
					}
				} catch (t) {}
			}
			let r = false;
			{
				if (i !== (i = i.replace(/^xlink\:?/, ''))) {
					e = i;
					r = true;
				}
			}
			if (s == null || s === false) {
				if (s !== false || t.getAttribute(e) === '') {
					if (r) {
						t.removeAttributeNS(a, e);
					} else {
						t.removeAttribute(e);
					}
				}
			} else if ((!c || l & 4 || o) && !f) {
				s = s === true ? '' : s;
				if (r) {
					t.setAttributeNS(a, e, s);
				} else {
					t.setAttribute(e, s);
				}
			}
		}
	}
};
const T = /\s/;
const W = (t) => (!t ? [] : t.split(T));
const q = 'Capture';
const H = new RegExp(q + '$');
const I = (t, e, n, s) => {
	const o = e.h.nodeType === 11 && e.h.host ? e.h.host : e.h;
	const l = (t && t.l) || p;
	const c = e.l || p;
	{
		for (s in l) {
			if (!(s in c)) {
				N(o, s, l[s], undefined, n, e.p);
			}
		}
	}
	for (s in c) {
		N(o, s, l[s], c[s], n, e.p);
	}
};
const V = (t, s, l, c) => {
	const i = s.i[l];
	let f = 0;
	let r;
	let u;
	if (i.o !== null) {
		r = i.h = At.createTextNode(i.o);
	} else {
		if (!o) {
			o = i.v === 'svg';
		}
		r = i.h = At.createElementNS(o ? v : y, i.v);
		if (o && i.v === 'foreignObject') {
			o = false;
		}
		{
			I(null, i, o);
		}
		if (h(e) && r['s-si'] !== e) {
			r.classList.add((r['s-si'] = e));
		}
		if (i.i) {
			for (f = 0; f < i.i.length; ++f) {
				u = V(t, i, f);
				if (u) {
					r.appendChild(u);
				}
			}
		}
		{
			if (i.v === 'svg') {
				o = false;
			} else if (r.tagName === 'foreignObject') {
				o = true;
			}
		}
	}
	r['s-hn'] = n;
	return r;
};
const _ = (t, e, s, o, l, c) => {
	let i = t;
	let f;
	if (i.shadowRoot && i.tagName === n) {
		i = i.shadowRoot;
	}
	for (; l <= c; ++l) {
		if (o[l]) {
			f = V(null, s, l);
			if (f) {
				o[l].h = f;
				i.insertBefore(f, e);
			}
		}
	}
};
const z = (t, e, n) => {
	for (let s = e; s <= n; ++s) {
		const e = t[s];
		if (e) {
			const t = e.h;
			K(e);
			if (t) {
				t.remove();
			}
		}
	}
};
const B = (t, e, n, s, o = false) => {
	let l = 0;
	let c = 0;
	let i = 0;
	let f = 0;
	let r = e.length - 1;
	let u = e[0];
	let a = e[r];
	let d = s.length - 1;
	let p = s[0];
	let v = s[d];
	let y;
	let h;
	while (l <= r && c <= d) {
		if (u == null) {
			u = e[++l];
		} else if (a == null) {
			a = e[--r];
		} else if (p == null) {
			p = s[++c];
		} else if (v == null) {
			v = s[--d];
		} else if (G(u, p, o)) {
			J(u, p, o);
			u = e[++l];
			p = s[++c];
		} else if (G(a, v, o)) {
			J(a, v, o);
			a = e[--r];
			v = s[--d];
		} else if (G(u, v, o)) {
			J(u, v, o);
			t.insertBefore(u.h, a.h.nextSibling);
			u = e[++l];
			v = s[--d];
		} else if (G(a, p, o)) {
			J(a, p, o);
			t.insertBefore(a.h, u.h);
			a = e[--r];
			p = s[++c];
		} else {
			i = -1;
			{
				for (f = l; f <= r; ++f) {
					if (e[f] && e[f].u !== null && e[f].u === p.u) {
						i = f;
						break;
					}
				}
			}
			if (i >= 0) {
				h = e[i];
				if (h.v !== p.v) {
					y = V(e && e[c], n, i);
				} else {
					J(h, p, o);
					e[i] = undefined;
					y = h.h;
				}
				p = s[++c];
			} else {
				y = V(e && e[c], n, c);
				p = s[++c];
			}
			if (y) {
				{
					u.h.parentNode.insertBefore(y, u.h);
				}
			}
		}
	}
	if (l > r) {
		_(t, s[d + 1] == null ? null : s[d + 1].h, n, s, c, d);
	} else if (c > d) {
		z(e, l, r);
	}
};
const G = (t, e, n = false) => {
	if (t.v === e.v) {
		if (!n) {
			return t.u === e.u;
		}
		return true;
	}
	return false;
};
const J = (t, e, n = false) => {
	const l = (e.h = t.h);
	const c = t.i;
	const i = e.i;
	const f = e.v;
	const r = e.o;
	if (r === null) {
		{
			o = f === 'svg' ? true : f === 'foreignObject' ? false : o;
		}
		{
			if (f === 'slot' && !s);
			else {
				I(t, e, o);
			}
		}
		if (c !== null && i !== null) {
			B(l, c, e, i, n);
		} else if (i !== null) {
			if (t.o !== null) {
				l.textContent = '';
			}
			_(l, null, e, i, 0, i.length - 1);
		} else if (c !== null) {
			z(c, 0, c.length - 1);
		}
		if (o && f === 'svg') {
			o = false;
		}
	} else if (t.o !== r) {
		l.data = r;
	}
};
const K = (t) => {
	{
		t.l && t.l.ref && t.l.ref(null);
		t.i && t.i.map(K);
	}
};
const Q = (t, o, l = false) => {
	const c = t.$hostElement$;
	const i = t.S;
	const f = t.O || $(null, null);
	const r = S(o) ? o : w(null, null, o);
	n = c.tagName;
	if (l && r.l) {
		for (const t of Object.keys(r.l)) {
			if (c.hasAttribute(t) && !['key', 'ref', 'style', 'class'].includes(t)) {
				r.l[t] = c[t];
			}
		}
	}
	r.v = null;
	r.p |= 4;
	t.O = r;
	r.h = f.h = c.shadowRoot || c;
	{
		e = c['s-sc'];
	}
	s = (i.p & 1) !== 0;
	J(f, r, l);
};
const X = (t, e) => {
	if (e && !t.C && e['s-p']) {
		e['s-p'].push(new Promise((e) => (t.C = e)));
	}
};
const Y = (t, e) => {
	{
		t.p |= 16;
	}
	if (t.p & 4) {
		t.p |= 512;
		return;
	}
	X(t, t.M);
	const n = () => Z(t, e);
	return zt(n);
};
const Z = (t, e) => {
	const n = i('scheduleUpdate', t.S.j);
	const s = t.R;
	let o;
	if (e) {
		{
			t.p |= 256;
			if (t.P) {
				t.P.map(([t, e]) => ct(s, t, e));
				t.P = undefined;
			}
		}
		{
			o = ct(s, 'componentWillLoad');
		}
	}
	n();
	return tt(o, () => nt(t, s, e));
};
const tt = (t, e) => (et(t) ? t.then(e) : e());
const et = (t) => t instanceof Promise || (t && t.then && typeof t.then === 'function');
const nt = async (t, e, n) => {
	var s;
	const o = t.$hostElement$;
	const l = i('update', t.S.j);
	const c = o['s-rc'];
	if (n) {
		D(t);
	}
	const f = i('render', t.S.j);
	{
		st(t, e, o, n);
	}
	if (c) {
		c.map((t) => t());
		o['s-rc'] = undefined;
	}
	f();
	l();
	{
		const e = (s = o['s-p']) !== null && s !== void 0 ? s : [];
		const n = () => ot(t);
		if (e.length === 0) {
			n();
		} else {
			Promise.all(e).then(n);
			t.p |= 4;
			e.length = 0;
		}
	}
};
const st = (t, e, n, s) => {
	try {
		e = e.render();
		{
			t.p &= ~16;
		}
		{
			t.p |= 2;
		}
		{
			{
				{
					Q(t, e, s);
				}
			}
		}
	} catch (e) {
		Mt(e, t.$hostElement$);
	}
	return null;
};
const ot = (t) => {
	const e = t.S.j;
	const n = t.$hostElement$;
	const s = i('postUpdate', e);
	const o = t.R;
	const l = t.M;
	{
		ct(o, 'componentDidRender');
	}
	if (!(t.p & 64)) {
		t.p |= 64;
		{
			it(n);
		}
		{
			ct(o, 'componentDidLoad');
		}
		s();
		{
			t.U(n);
			if (!l) {
				lt();
			}
		}
	} else {
		{
			ct(o, 'componentDidUpdate');
		}
		s();
	}
	{
		t.L(n);
	}
	{
		if (t.C) {
			t.C();
			t.C = undefined;
		}
		if (t.p & 512) {
			_t(() => Y(t, false));
		}
		t.p &= ~(4 | 512);
	}
};
const lt = (e) => {
	{
		it(At.documentElement);
	}
	_t(() => U(Lt, 'appload', { detail: { namespace: t } }));
};
const ct = (t, e, n) => {
	if (t && t[e]) {
		try {
			return t[e](n);
		} catch (t) {
			Mt(t);
		}
	}
	return undefined;
};
const it = (t) => t.classList.add('hydrated');
const ft = (t, e) => kt(t).A.get(e);
const rt = (t, e, n, s) => {
	const o = kt(t);
	const l = o.$hostElement$;
	const c = o.A.get(e);
	const i = o.p;
	const f = o.R;
	n = M(n, s.D[e][0]);
	const r = Number.isNaN(c) && Number.isNaN(n);
	const u = n !== c && !r;
	if ((!(i & 8) || c === undefined) && u) {
		o.A.set(e, n);
		if (f) {
			if (s.F && i & 128) {
				const t = s.F[e];
				if (t) {
					t.map((t) => {
						try {
							f[t](n, c, e);
						} catch (t) {
							Mt(t, l);
						}
					});
				}
			}
			if ((i & (2 | 16)) === 2) {
				Y(o, false);
			}
		}
	}
};
const ut = (t, e, n) => {
	var s;
	const o = t.prototype;
	if (e.p & 64 && n & 1) {
		d.forEach((t) =>
			Object.defineProperty(o, t, {
				value(...e) {
					const n = kt(this);
					const s = n.R;
					if (!s) {
						n.N.then((n) => {
							const s = n[t];
							typeof s === 'function' && s.call(n, ...e);
						});
					} else {
						const n = s[t];
						typeof n === 'function' && n.call(s, ...e);
					}
				},
			}),
		);
	}
	if (e.D) {
		if (t.watchers) {
			e.F = t.watchers;
		}
		const l = Object.entries(e.D);
		l.map(([t, [s]]) => {
			if (s & 31 || (n & 2 && s & 32)) {
				Object.defineProperty(o, t, {
					get() {
						return ft(this, t);
					},
					set(n) {
						rt(this, t, n, e);
					},
					configurable: true,
					enumerable: true,
				});
			} else if (n & 1 && s & 64) {
				Object.defineProperty(o, t, {
					value(...e) {
						var n;
						const s = kt(this);
						return (n = s === null || s === void 0 ? void 0 : s.T) === null || n === void 0
							? void 0
							: n.then(() => {
									var n;
									return (n = s.R) === null || n === void 0 ? void 0 : n[t](...e);
							  });
					},
				});
			}
		});
		if (n & 1) {
			const n = new Map();
			o.attributeChangedCallback = function (t, s, l) {
				Dt.jmp(() => {
					var c;
					const i = n.get(t);
					if (this.hasOwnProperty(i)) {
						l = this[i];
						delete this[i];
					} else if (o.hasOwnProperty(i) && typeof this[i] === 'number' && this[i] == l) {
						return;
					} else if (i == null) {
						const n = kt(this);
						const o = n === null || n === void 0 ? void 0 : n.p;
						if (o && !(o & 8) && o & 128 && l !== s) {
							const o = n.R;
							const i = (c = e.F) === null || c === void 0 ? void 0 : c[t];
							i === null || i === void 0
								? void 0
								: i.forEach((e) => {
										if (o[e] != null) {
											o[e].call(o, l, s, t);
										}
								  });
						}
						return;
					}
					this[i] = l === null && typeof this[i] === 'boolean' ? false : l;
				});
			};
			t.observedAttributes = Array.from(
				new Set([
					...Object.keys((s = e.F) !== null && s !== void 0 ? s : {}),
					...l
						.filter(([t, e]) => e[0] & 15)
						.map(([t, e]) => {
							const s = e[1] || t;
							n.set(s, t);
							return s;
						}),
				]),
			);
		}
	}
	return t;
};
const at = async (t, e, n, s) => {
	let o;
	if ((e.p & 32) === 0) {
		e.p |= 32;
		{
			o = Pt(n);
			if (o.then) {
				const t = f();
				o = await o;
				t();
			}
			if (!o.isProxied) {
				{
					n.F = o.watchers;
				}
				ut(o, n, 2);
				o.isProxied = true;
			}
			const t = i('createInstance', n.j);
			{
				e.p |= 8;
			}
			try {
				new o(e);
			} catch (t) {
				Mt(t);
			}
			{
				e.p &= ~8;
			}
			{
				e.p |= 128;
			}
			t();
			dt(e.R);
		}
		if (o.style) {
			let s = o.style;
			if (typeof s !== 'string') {
				s = s[(e.k = C(t))];
			}
			const l = F(n, e.k);
			if (!Ut.has(l)) {
				const t = i('registerStyles', n.j);
				L(l, s, !!(n.p & 1));
				t();
			}
		}
	}
	const l = e.M;
	const c = () => Y(e, true);
	if (l && l['s-rc']) {
		l['s-rc'].push(c);
	} else {
		c();
	}
};
const dt = (t) => {
	{
		ct(t, 'connectedCallback');
	}
};
const pt = (t) => {
	if ((Dt.p & 1) === 0) {
		const e = kt(t);
		const n = e.S;
		const s = i('connectedCallback', n.j);
		if (!(e.p & 1)) {
			e.p |= 1;
			{
				let n = t;
				while ((n = n.parentNode || n.host)) {
					if (n['s-p']) {
						X(e, (e.M = n));
						break;
					}
				}
			}
			if (n.D) {
				Object.entries(n.D).map(([e, [n]]) => {
					if (n & 31 && t.hasOwnProperty(e)) {
						const n = t[e];
						delete t[e];
						t[e] = n;
					}
				});
			}
			{
				at(t, e, n);
			}
		} else {
			bt(t, e, n.W);
			if (e === null || e === void 0 ? void 0 : e.R) {
				dt(e.R);
			} else if (e === null || e === void 0 ? void 0 : e.N) {
				e.N.then(() => dt(e.R));
			}
		}
		s();
	}
};
const vt = (t) => {};
const yt = async (t) => {
	if ((Dt.p & 1) === 0) {
		const e = kt(t);
		{
			if (e.q) {
				e.q.map((t) => t());
				e.q = undefined;
			}
		}
		if (e === null || e === void 0 ? void 0 : e.R);
		else if (e === null || e === void 0 ? void 0 : e.N) {
			e.N.then(() => vt());
		}
	}
};
const ht = (t, e = {}) => {
	var n;
	const s = i();
	const o = [];
	const l = e.exclude || [];
	const c = Lt.customElements;
	const f = At.head;
	const a = f.querySelector('meta[charset]');
	const d = At.createElement('style');
	const p = [];
	let v;
	let y = true;
	Object.assign(Dt, e);
	Dt.t = new URL(e.resourcesUrl || './', At.baseURI).href;
	let h = false;
	t.map((t) => {
		t[1].map((e) => {
			var n;
			const s = { p: e[0], j: e[1], D: e[2], W: e[3] };
			if (s.p & 4) {
				h = true;
			}
			{
				s.D = e[2];
			}
			{
				s.W = e[3];
			}
			{
				s.F = (n = e[4]) !== null && n !== void 0 ? n : {};
			}
			const i = s.j;
			const f = class extends HTMLElement {
				constructor(t) {
					super(t);
					t = this;
					Ct(t, s);
					if (s.p & 1) {
						{
							{
								t.attachShadow({ mode: 'open' });
							}
						}
					}
				}
				connectedCallback() {
					if (v) {
						clearTimeout(v);
						v = null;
					}
					if (y) {
						p.push(this);
					} else {
						Dt.jmp(() => pt(this));
					}
				}
				disconnectedCallback() {
					Dt.jmp(() => yt(this));
				}
				componentOnReady() {
					return kt(this).N;
				}
			};
			if (s.p & 64) {
				f.formAssociated = true;
			}
			s.H = t[0];
			if (!l.includes(i) && !c.get(i)) {
				o.push(i);
				c.define(i, ut(f, s, 1));
			}
		});
	});
	if (o.length > 0) {
		if (h) {
			d.innerHTML += u;
		}
		{
			d.innerHTML += o + r;
		}
		if (d.innerHTML.length) {
			d.setAttribute('data-styles', '');
			const t = (n = Dt.$) !== null && n !== void 0 ? n : b(At);
			if (t != null) {
				d.setAttribute('nonce', t);
			}
			f.insertBefore(d, a ? a.nextSibling : f.firstChild);
		}
	}
	y = false;
	if (p.length) {
		p.map((t) => t.connectedCallback());
	} else {
		{
			Dt.jmp(() => (v = setTimeout(lt, 30)));
		}
	}
	s();
};
const mt = (t, e) => e;
const bt = (t, e, n, s) => {
	if (n) {
		n.map(([n, s, o]) => {
			const l = $t(t, n);
			const c = wt(e, o);
			const i = gt(n);
			Dt.ael(l, s, c, i);
			(e.q = e.q || []).push(() => Dt.rel(l, s, c, i));
		});
	}
};
const wt = (t, e) => (n) => {
	try {
		{
			if (t.p & 256) {
				t.R[e](n);
			} else {
				(t.P = t.P || []).push([e, n]);
			}
		}
	} catch (t) {
		Mt(t);
	}
};
const $t = (t, e) => {
	if (e & 8) return Lt;
	return t;
};
const gt = (t) => (Ft ? { passive: (t & 1) !== 0, capture: (t & 2) !== 0 } : (t & 2) !== 0);
const St = (t) => (Dt.$ = t);
const jt = new WeakMap();
const kt = (t) => jt.get(t);
const Ot = (t, e) => jt.set((e.R = t), e);
const Ct = (t, e) => {
	const n = { p: 0, $hostElement$: t, S: e, A: new Map() };
	{
		n.T = new Promise((t) => (n.L = t));
	}
	{
		n.N = new Promise((t) => (n.U = t));
		t['s-p'] = [];
		t['s-rc'] = [];
	}
	bt(t, n, e.W);
	return jt.set(t, n);
};
const xt = (t, e) => e in t;
const Mt = (t, e) => (0, console.error)(t, e);
const Rt = new Map();
const Pt = (t, e, n) => {
	const s = t.j.replace(/-/g, '_');
	const o = t.H;
	const l = Rt.get(o);
	if (l) {
		return l[s];
	}
	/*!__STENCIL_STATIC_IMPORT_SWITCH__*/ return import(`./${o}.entry.js${''}`).then((t) => {
		{
			Rt.set(o, t);
		}
		return t[s];
	}, Mt);
};
const Ut = new Map();
const Et = [];
const Lt = typeof window !== 'undefined' ? window : {};
const At = Lt.document || { head: {} };
const Dt = {
	p: 0,
	t: '',
	jmp: (t) => t(),
	raf: (t) => requestAnimationFrame(t),
	ael: (t, e, n, s) => t.addEventListener(e, n, s),
	rel: (t, e, n, s) => t.removeEventListener(e, n, s),
	ce: (t, e) => new CustomEvent(t, e),
};
const Ft = (() => {
	let t = false;
	try {
		At.addEventListener(
			'e',
			null,
			Object.defineProperty({}, 'passive', {
				get() {
					t = true;
				},
			}),
		);
	} catch (t) {}
	return t;
})();
const Nt = (t) => Promise.resolve(t);
const Tt = (() => {
	try {
		new CSSStyleSheet();
		return typeof new CSSStyleSheet().replaceSync === 'function';
	} catch (t) {}
	return false;
})();
const Wt = [];
const qt = [];
const Ht = (t, e) => (n) => {
	t.push(n);
	if (!l) {
		l = true;
		if (e && Dt.p & 4) {
			_t(Vt);
		} else {
			Dt.raf(Vt);
		}
	}
};
const It = (t) => {
	for (let e = 0; e < t.length; e++) {
		try {
			t[e](performance.now());
		} catch (t) {
			Mt(t);
		}
	}
	t.length = 0;
};
const Vt = () => {
	It(Wt);
	{
		It(qt);
		if ((l = Wt.length > 0)) {
			Dt.raf(Vt);
		}
	}
};
const _t = (t) => Nt().then(t);
const zt = Ht(qt, true);
export { mt as F, x as a, ht as b, P as c, c as d, R as g, w as h, Nt as p, Ot as r, St as s };
//# sourceMappingURL=p-14fa9399.js.map
