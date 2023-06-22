let e,
	t,
	n = !1,
	l = !1;
const s = (e) => {
		const t = new URL(e, ie.t);
		return t.origin !== se.location.origin ? t.href : t.pathname;
	},
	o = 'http://www.w3.org/1999/xlink',
	i = {},
	r = (e) => 'object' == (e = typeof e) || 'function' === e,
	c = (e, t, ...n) => {
		let l = null,
			s = null,
			o = !1,
			i = !1;
		const c = [],
			u = (t) => {
				for (let n = 0; n < t.length; n++)
					(l = t[n]),
						Array.isArray(l)
							? u(l)
							: null != l &&
							  'boolean' != typeof l &&
							  ((o = 'function' != typeof e && !r(l)) && (l += ''),
							  o && i ? (c[c.length - 1].l += l) : c.push(o ? a(null, l) : l),
							  (i = o));
			};
		if ((u(n), t)) {
			t.key && (s = t.key);
			{
				const e = t.className || t.class;
				e &&
					(t.class =
						'object' != typeof e
							? e
							: Object.keys(e)
									.filter((t) => e[t])
									.join(' '));
			}
		}
		if ('function' == typeof e) return e(null === t ? {} : t, c, f);
		const p = a(e, null);
		return (p.o = t), c.length > 0 && (p.i = c), (p.u = s), p;
	},
	a = (e, t) => ({ p: 0, h: e, l: t, m: null, i: null, o: null, u: null }),
	u = {},
	f = { forEach: (e, t) => e.map(p).forEach(t), map: (e, t) => e.map(p).map(t).map(d) },
	p = (e) => ({ vattrs: e.o, vchildren: e.i, vkey: e.u, vname: e.$, vtag: e.h, vtext: e.l }),
	d = (e) => {
		if ('function' == typeof e.vtag) {
			const t = Object.assign({}, e.vattrs);
			return e.vkey && (t.key = e.vkey), e.vname && (t.name = e.vname), c(e.vtag, t, ...(e.vchildren || []));
		}
		const t = a(e.vtag, e.vtext);
		return (t.o = e.vattrs), (t.i = e.vchildren), (t.u = e.vkey), (t.$ = e.vname), t;
	},
	h = (e) => le.push(e),
	y = (e) => K(e).g,
	m = (e, t, n) => {
		const l = y(e);
		return { emit: (e) => $(l, t, { bubbles: !!(4 & n), composed: !!(2 & n), cancelable: !!(1 & n), detail: e }) };
	},
	$ = (e, t, n) => {
		const l = ie.ce(t, n);
		return e.dispatchEvent(l), l;
	},
	w = new WeakMap(),
	b = (e, t) => 'sc-' + (t && 32 & e.p ? e.v + '-' + t : e.v),
	g = (e, t, n, l, s, i) => {
		if (n !== l) {
			let c = Y(e, t),
				a = t.toLowerCase();
			if ('class' === t) {
				const t = e.classList,
					s = j(n),
					o = j(l);
				t.remove(...s.filter((e) => e && !o.includes(e))), t.add(...o.filter((e) => e && !s.includes(e)));
			} else if ('style' === t) {
				for (const t in n) (l && null != l[t]) || (t.includes('-') ? e.style.removeProperty(t) : (e.style[t] = ''));
				for (const t in l)
					(n && l[t] === n[t]) || (t.includes('-') ? e.style.setProperty(t, l[t]) : (e.style[t] = l[t]));
			} else if ('key' === t);
			else if ('ref' === t) l && l(e);
			else if (c || 'o' !== t[0] || 'n' !== t[1]) {
				const u = r(l);
				if ((c || (u && null !== l)) && !s)
					try {
						if (e.tagName.includes('-')) e[t] = l;
						else {
							const s = null == l ? '' : l;
							'list' === t ? (c = !1) : (null != n && e[t] == s) || (e[t] = s);
						}
					} catch (e) {}
				let f = !1;
				a !== (a = a.replace(/^xlink\:?/, '')) && ((t = a), (f = !0)),
					null == l || !1 === l
						? (!1 === l && '' !== e.getAttribute(t)) || (f ? e.removeAttributeNS(o, t) : e.removeAttribute(t))
						: (!c || 4 & i || s) &&
						  !u &&
						  ((l = !0 === l ? '' : l), f ? e.setAttributeNS(o, t, l) : e.setAttribute(t, l));
			} else
				(t = '-' === t[2] ? t.slice(3) : Y(se, a) ? a.slice(2) : a[2] + t.slice(3)),
					n && ie.rel(e, t, n, !1),
					l && ie.ael(e, t, l, !1);
		}
	},
	v = /\s/,
	j = (e) => (e ? e.split(v) : []),
	k = (e, t, n, l) => {
		const s = 11 === t.m.nodeType && t.m.host ? t.m.host : t.m,
			o = (e && e.o) || i,
			r = t.o || i;
		for (l in o) l in r || g(s, l, o[l], void 0, n, t.p);
		for (l in r) g(s, l, o[l], r[l], n, t.p);
	},
	S = (t, l, s) => {
		const o = l.i[s];
		let i,
			r,
			c = 0;
		if (null !== o.l) i = o.m = oe.createTextNode(o.l);
		else {
			if (
				(n || (n = 'svg' === o.h),
				(i = o.m = oe.createElementNS(n ? 'http://www.w3.org/2000/svg' : 'http://www.w3.org/1999/xhtml', o.h)),
				n && 'foreignObject' === o.h && (n = !1),
				k(null, o, n),
				null != e && i['s-si'] !== e && i.classList.add((i['s-si'] = e)),
				o.i)
			)
				for (c = 0; c < o.i.length; ++c) (r = S(t, o, c)), r && i.appendChild(r);
			'svg' === o.h ? (n = !1) : 'foreignObject' === i.tagName && (n = !0);
		}
		return i;
	},
	O = (e, n, l, s, o, i) => {
		let r,
			c = e;
		for (c.shadowRoot && c.tagName === t && (c = c.shadowRoot); o <= i; ++o)
			s[o] && ((r = S(null, l, o)), r && ((s[o].m = r), c.insertBefore(r, n)));
	},
	M = (e, t, n, l, s) => {
		for (; t <= n; ++t) (l = e[t]) && ((s = l.m), L(l), s.remove());
	},
	x = (e, t) => e.h === t.h && e.u === t.u,
	C = (e, t) => {
		const l = (t.m = e.m),
			s = e.i,
			o = t.i,
			i = t.h,
			r = t.l;
		null === r
			? ((n = 'svg' === i || ('foreignObject' !== i && n)),
			  'slot' === i || k(e, t, n),
			  null !== s && null !== o
					? ((e, t, n, l) => {
							let s,
								o,
								i = 0,
								r = 0,
								c = 0,
								a = 0,
								u = t.length - 1,
								f = t[0],
								p = t[u],
								d = l.length - 1,
								h = l[0],
								y = l[d];
							for (; i <= u && r <= d; )
								if (null == f) f = t[++i];
								else if (null == p) p = t[--u];
								else if (null == h) h = l[++r];
								else if (null == y) y = l[--d];
								else if (x(f, h)) C(f, h), (f = t[++i]), (h = l[++r]);
								else if (x(p, y)) C(p, y), (p = t[--u]), (y = l[--d]);
								else if (x(f, y)) C(f, y), e.insertBefore(f.m, p.m.nextSibling), (f = t[++i]), (y = l[--d]);
								else if (x(p, h)) C(p, h), e.insertBefore(p.m, f.m), (p = t[--u]), (h = l[++r]);
								else {
									for (c = -1, a = i; a <= u; ++a)
										if (t[a] && null !== t[a].u && t[a].u === h.u) {
											c = a;
											break;
										}
									c >= 0
										? ((o = t[c]),
										  o.h !== h.h ? (s = S(t && t[r], n, c)) : (C(o, h), (t[c] = void 0), (s = o.m)),
										  (h = l[++r]))
										: ((s = S(t && t[r], n, r)), (h = l[++r])),
										s && f.m.parentNode.insertBefore(s, f.m);
								}
							i > u ? O(e, null == l[d + 1] ? null : l[d + 1].m, n, l, r, d) : r > d && M(t, i, u);
					  })(l, s, t, o)
					: null !== o
					? (null !== e.l && (l.textContent = ''), O(l, null, t, o, 0, o.length - 1))
					: null !== s && M(s, 0, s.length - 1),
			  n && 'svg' === i && (n = !1))
			: e.l !== r && (l.data = r);
	},
	L = (e) => {
		e.o && e.o.ref && e.o.ref(null), e.i && e.i.map(L);
	},
	P = (e, t) => {
		t && !e.j && t['s-p'] && t['s-p'].push(new Promise((t) => (e.j = t)));
	},
	E = (e, t) => {
		if (((e.p |= 16), !(4 & e.p))) return P(e, e.k), ye(() => R(e, t));
		e.p |= 512;
	},
	R = (e, t) => {
		const n = e.S;
		let l;
		return (
			t && ((e.p |= 256), e.O && (e.O.map(([e, t]) => T(n, e, t)), (e.O = null)), (l = T(n, 'componentWillLoad'))),
			W(l, () => U(e, n, t))
		);
	},
	U = async (e, t, n) => {
		const l = e.g,
			s = l['s-rc'];
		n &&
			((e) => {
				const t = e.M,
					n = e.g,
					l = t.p,
					s = ((e, t, n) => {
						let l = b(t, n);
						const s = ne.get(l);
						if (((e = 11 === e.nodeType ? e : oe), s))
							if ('string' == typeof s) {
								let t,
									n = w.get((e = e.head || e));
								n || w.set(e, (n = new Set())),
									n.has(l) ||
										((t = oe.createElement('style')),
										(t.innerHTML = s),
										e.insertBefore(t, e.querySelector('link')),
										n && n.add(l));
							} else e.adoptedStyleSheets.includes(s) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, s]);
						return l;
					})(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t, e.C);
				10 & l && ((n['s-sc'] = s), n.classList.add(s + '-h'));
			})(e);
		D(e, t), s && (s.map((e) => e()), (l['s-rc'] = void 0));
		{
			const t = l['s-p'],
				n = () => F(e);
			0 === t.length ? n() : (Promise.all(t).then(n), (e.p |= 4), (t.length = 0));
		}
	},
	D = (n, l) => {
		try {
			(l = l.render()),
				(n.p &= -17),
				(n.p |= 2),
				((n, l) => {
					const s = n.g,
						o = n.L || a(null, null),
						i = ((e) => e && e.h === u)(l) ? l : c(null, null, l);
					(t = s.tagName),
						(i.h = null),
						(i.p |= 4),
						(n.L = i),
						(i.m = o.m = s.shadowRoot || s),
						(e = s['s-sc']),
						C(o, i);
				})(n, l);
		} catch (e) {
			Z(e, n.g);
		}
		return null;
	},
	F = (e) => {
		const t = e.g,
			n = e.S,
			l = e.k;
		T(n, 'componentDidRender'),
			64 & e.p ? T(n, 'componentDidUpdate') : ((e.p |= 64), A(t), T(n, 'componentDidLoad'), e.P(t), l || N()),
			e.R(t),
			e.j && (e.j(), (e.j = void 0)),
			512 & e.p && he(() => E(e, !1)),
			(e.p &= -517);
	},
	N = () => {
		A(oe.documentElement), he(() => $(se, 'appload', { detail: { namespace: 'ontario-design-system-components' } }));
	},
	T = (e, t, n) => {
		if (e && e[t])
			try {
				return e[t](n);
			} catch (e) {
				Z(e);
			}
	},
	W = (e, t) => (e && e.then ? e.then(t) : t()),
	A = (e) => e.classList.add('hydrated'),
	q = (e, t, n) => {
		if (t.U) {
			e.watchers && (t.D = e.watchers);
			const l = Object.entries(t.U),
				s = e.prototype;
			if (
				(l.map(([e, [l]]) => {
					31 & l || (2 & n && 32 & l)
						? Object.defineProperty(s, e, {
								get() {
									return ((e, t) => K(this).F.get(t))(0, e);
								},
								set(n) {
									((e, t, n, l) => {
										const s = K(e),
											o = s.g,
											i = s.F.get(t),
											c = s.p,
											a = s.S;
										if (
											((n = ((e, t) =>
												null == e || r(e)
													? e
													: 4 & t
													? 'false' !== e && ('' === e || !!e)
													: 2 & t
													? parseFloat(e)
													: 1 & t
													? e + ''
													: e)(n, l.U[t][0])),
											(!(8 & c) || void 0 === i) &&
												n !== i &&
												(!Number.isNaN(i) || !Number.isNaN(n)) &&
												(s.F.set(t, n), a))
										) {
											if (l.D && 128 & c) {
												const e = l.D[t];
												e &&
													e.map((e) => {
														try {
															a[e](n, i, t);
														} catch (e) {
															Z(e, o);
														}
													});
											}
											2 == (18 & c) && E(s, !1);
										}
									})(this, e, n, t);
								},
								configurable: !0,
								enumerable: !0,
						  })
						: 1 & n &&
						  64 & l &&
						  Object.defineProperty(s, e, {
								value(...t) {
									const n = K(this);
									return n.N.then(() => n.S[e](...t));
								},
						  });
				}),
				1 & n)
			) {
				const t = new Map();
				(s.attributeChangedCallback = function (e, n, l) {
					ie.jmp(() => {
						const n = t.get(e);
						if (this.hasOwnProperty(n)) (l = this[n]), delete this[n];
						else if (s.hasOwnProperty(n) && 'number' == typeof this[n] && this[n] == l) return;
						this[n] = (null !== l || 'boolean' != typeof this[n]) && l;
					});
				}),
					(e.observedAttributes = l
						.filter(([e, t]) => 15 & t[0])
						.map(([e, n]) => {
							const l = n[1] || e;
							return t.set(l, e), l;
						}));
			}
		}
		return e;
	},
	H = (e) => {
		T(e, 'connectedCallback');
	},
	V = (e, t = {}) => {
		const n = [],
			l = t.exclude || [],
			s = se.customElements,
			o = oe.head,
			i = o.querySelector('meta[charset]'),
			r = oe.createElement('style'),
			c = [];
		let a,
			u = !0;
		Object.assign(ie, t),
			(ie.t = new URL(t.resourcesUrl || './', oe.baseURI).href),
			e.map((e) => {
				e[1].map((t) => {
					const o = { p: t[0], v: t[1], U: t[2], T: t[3] };
					(o.U = t[2]), (o.T = t[3]), (o.D = {});
					const i = o.v,
						r = class extends HTMLElement {
							constructor(e) {
								super(e), X((e = this), o), 1 & o.p && e.attachShadow({ mode: 'open' });
							}
							connectedCallback() {
								a && (clearTimeout(a), (a = null)),
									u
										? c.push(this)
										: ie.jmp(() =>
												((e) => {
													if (0 == (1 & ie.p)) {
														const t = K(e),
															n = t.M,
															l = () => {};
														if (1 & t.p) z(e, t, n.T), H(t.S);
														else {
															t.p |= 1;
															{
																let n = e;
																for (; (n = n.parentNode || n.host); )
																	if (n['s-p']) {
																		P(t, (t.k = n));
																		break;
																	}
															}
															n.U &&
																Object.entries(n.U).map(([t, [n]]) => {
																	if (31 & n && e.hasOwnProperty(t)) {
																		const n = e[t];
																		delete e[t], (e[t] = n);
																	}
																}),
																(async (e, t, n, l, s) => {
																	if (0 == (32 & t.p)) {
																		{
																			if (((t.p |= 32), (s = te(n)).then)) {
																				const e = () => {};
																				(s = await s), e();
																			}
																			s.isProxied || ((n.D = s.watchers), q(s, n, 2), (s.isProxied = !0));
																			const e = () => {};
																			t.p |= 8;
																			try {
																				new s(t);
																			} catch (e) {
																				Z(e);
																			}
																			(t.p &= -9), (t.p |= 128), e(), H(t.S);
																		}
																		if (s.style) {
																			let l = s.style;
																			'string' != typeof l &&
																				(l = l[(t.C = ((e) => le.map((t) => t(e)).find((e) => !!e))(e))]);
																			const o = b(n, t.C);
																			if (!ne.has(o)) {
																				const e = () => {};
																				((e, t, n) => {
																					let l = ne.get(e);
																					ce && n
																						? ((l = l || new CSSStyleSheet()),
																						  'string' == typeof l ? (l = t) : l.replaceSync(t))
																						: (l = t),
																						ne.set(e, l);
																				})(o, l, !!(1 & n.p)),
																					e();
																			}
																		}
																	}
																	const o = t.k,
																		i = () => E(t, !0);
																	o && o['s-rc'] ? o['s-rc'].push(i) : i();
																})(e, t, n);
														}
														l();
													}
												})(this),
										  );
							}
							disconnectedCallback() {
								ie.jmp(() =>
									(() => {
										if (0 == (1 & ie.p)) {
											const e = K(this);
											e.W && (e.W.map((e) => e()), (e.W = void 0));
										}
									})(),
								);
							}
							componentOnReady() {
								return K(this).A;
							}
						};
					(o.q = e[0]), l.includes(i) || s.get(i) || (n.push(i), s.define(i, q(r, o, 1)));
				});
			}),
			(r.innerHTML = n + '{visibility:hidden}.hydrated{visibility:inherit}'),
			r.setAttribute('data-styles', ''),
			o.insertBefore(r, i ? i.nextSibling : o.firstChild),
			(u = !1),
			c.length ? c.map((e) => e.connectedCallback()) : ie.jmp(() => (a = setTimeout(N, 30)));
	},
	_ = (e, t) => t,
	z = (e, t, n) => {
		n &&
			n.map(([n, l, s]) => {
				const o = G(e, n),
					i = B(t, s),
					r = I(n);
				ie.ael(o, l, i, r), (t.W = t.W || []).push(() => ie.rel(o, l, i, r));
			});
	},
	B = (e, t) => (n) => {
		try {
			256 & e.p ? e.S[t](n) : (e.O = e.O || []).push([t, n]);
		} catch (e) {
			Z(e);
		}
	},
	G = (e, t) => (8 & t ? se : e),
	I = (e) => 0 != (2 & e),
	J = new WeakMap(),
	K = (e) => J.get(e),
	Q = (e, t) => J.set((t.S = e), t),
	X = (e, t) => {
		const n = { p: 0, g: e, M: t, F: new Map() };
		return (
			(n.N = new Promise((e) => (n.R = e))),
			(n.A = new Promise((e) => (n.P = e))),
			(e['s-p'] = []),
			(e['s-rc'] = []),
			z(e, n, t.T),
			J.set(e, n)
		);
	},
	Y = (e, t) => t in e,
	Z = (e, t) => (0, console.error)(e, t),
	ee = new Map(),
	te = (e) => {
		const t = e.v.replace(/-/g, '_'),
			n = e.q,
			l = ee.get(n);
		return l ? l[t] : import(`./${n}.entry.js`).then((e) => (ee.set(n, e), e[t]), Z);
		/*!__STENCIL_STATIC_IMPORT_SWITCH__*/
	},
	ne = new Map(),
	le = [],
	se = 'undefined' != typeof window ? window : {},
	oe = se.document || { head: {} },
	ie = {
		p: 0,
		t: '',
		jmp: (e) => e(),
		raf: (e) => requestAnimationFrame(e),
		ael: (e, t, n, l) => e.addEventListener(t, n, l),
		rel: (e, t, n, l) => e.removeEventListener(t, n, l),
		ce: (e, t) => new CustomEvent(e, t),
	},
	re = (e) => Promise.resolve(e),
	ce = (() => {
		try {
			return new CSSStyleSheet(), 'function' == typeof new CSSStyleSheet().replaceSync;
		} catch (e) {}
		return !1;
	})(),
	ae = [],
	ue = [],
	fe = (e, t) => (n) => {
		e.push(n), l || ((l = !0), t && 4 & ie.p ? he(de) : ie.raf(de));
	},
	pe = (e) => {
		for (let t = 0; t < e.length; t++)
			try {
				e[t](performance.now());
			} catch (e) {
				Z(e);
			}
		e.length = 0;
	},
	de = () => {
		pe(ae), pe(ue), (l = ae.length > 0) && ie.raf(de);
	},
	he = (e) => re().then(e),
	ye = fe(ue, !0);
export { _ as F, s as a, V as b, m as c, y as g, c as h, re as p, Q as r, h as s };
