var __extends =
	(this && this.__extends) ||
	(function () {
		var e = function (t, r) {
			e =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function (e, t) {
						e.__proto__ = t;
					}) ||
				function (e, t) {
					for (var r in t) if (Object.prototype.hasOwnProperty.call(t, r)) e[r] = t[r];
				};
			return e(t, r);
		};
		return function (t, r) {
			if (typeof r !== 'function' && r !== null)
				throw new TypeError('Class extends value ' + String(r) + ' is not a constructor or null');
			e(t, r);
			function n() {
				this.constructor = t;
			}
			t.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
		};
	})();
var __awaiter =
	(this && this.__awaiter) ||
	function (e, t, r, n) {
		function a(e) {
			return e instanceof r
				? e
				: new r(function (t) {
						t(e);
				  });
		}
		return new (r || (r = Promise))(function (r, i) {
			function l(e) {
				try {
					o(n.next(e));
				} catch (e) {
					i(e);
				}
			}
			function s(e) {
				try {
					o(n['throw'](e));
				} catch (e) {
					i(e);
				}
			}
			function o(e) {
				e.done ? r(e.value) : a(e.value).then(l, s);
			}
			o((n = n.apply(e, t || [])).next());
		});
	};
var __generator =
	(this && this.__generator) ||
	function (e, t) {
		var r = {
				label: 0,
				sent: function () {
					if (i[0] & 1) throw i[1];
					return i[1];
				},
				trys: [],
				ops: [],
			},
			n,
			a,
			i,
			l;
		return (
			(l = { next: s(0), throw: s(1), return: s(2) }),
			typeof Symbol === 'function' &&
				(l[Symbol.iterator] = function () {
					return this;
				}),
			l
		);
		function s(e) {
			return function (t) {
				return o([e, t]);
			};
		}
		function o(l) {
			if (n) throw new TypeError('Generator is already executing.');
			while (r)
				try {
					if (
						((n = 1),
						a &&
							(i = l[0] & 2 ? a['return'] : l[0] ? a['throw'] || ((i = a['return']) && i.call(a), 0) : a.next) &&
							!(i = i.call(a, l[1])).done)
					)
						return i;
					if (((a = 0), i)) l = [l[0] & 2, i.value];
					switch (l[0]) {
						case 0:
						case 1:
							i = l;
							break;
						case 4:
							r.label++;
							return { value: l[1], done: false };
						case 5:
							r.label++;
							a = l[1];
							l = [0];
							continue;
						case 7:
							l = r.ops.pop();
							r.trys.pop();
							continue;
						default:
							if (!((i = r.trys), (i = i.length > 0 && i[i.length - 1])) && (l[0] === 6 || l[0] === 2)) {
								r = 0;
								continue;
							}
							if (l[0] === 3 && (!i || (l[1] > i[0] && l[1] < i[3]))) {
								r.label = l[1];
								break;
							}
							if (l[0] === 6 && r.label < i[1]) {
								r.label = i[1];
								i = l;
								break;
							}
							if (i && r.label < i[2]) {
								r.label = i[2];
								r.ops.push(l);
								break;
							}
							if (i[2]) r.ops.pop();
							r.trys.pop();
							continue;
					}
					l = t.call(e, r);
				} catch (e) {
					l = [6, e];
					a = 0;
				} finally {
					n = i = 0;
				}
			if (l[0] & 5) throw l[1];
			return { value: l[0] ? l[1] : void 0, done: true };
		}
	};
var __spreadArray =
	(this && this.__spreadArray) ||
	function (e, t, r) {
		if (r || arguments.length === 2)
			for (var n = 0, a = t.length, i; n < a; n++) {
				if (i || !(n in t)) {
					if (!i) i = Array.prototype.slice.call(t, 0, n);
					i[n] = t[n];
				}
			}
		return e.concat(i || Array.prototype.slice.call(t));
	};
System.register([], function (e, t) {
	'use strict';
	return {
		execute: function () {
			var r = this;
			var n = 'ontario-design-system-components';
			var a;
			var i;
			var l = false;
			var s = false;
			var o = e('a', function (e) {
				var t = new URL(e, je.$resourcesUrl$);
				return t.origin !== Re.location.origin ? t.href : t.pathname;
			});
			var f = function (e, t) {
				if (t === void 0) {
					t = '';
				}
				{
					return function () {
						return;
					};
				}
			};
			var u = function (e, t) {
				{
					return function () {
						return;
					};
				}
			};
			var $ = '{visibility:hidden}.hydrated{visibility:inherit}';
			var c = 'http://www.w3.org/1999/xlink';
			var v = {};
			var d = 'http://www.w3.org/2000/svg';
			var p = 'http://www.w3.org/1999/xhtml';
			var m = function (e) {
				return e != null;
			};
			var h = function (e) {
				e = typeof e;
				return e === 'object' || e === 'function';
			};
			var g = e('h', function (e, t) {
				var r = [];
				for (var n = 2; n < arguments.length; n++) {
					r[n - 2] = arguments[n];
				}
				var a = null;
				var i = null;
				var l = false;
				var s = false;
				var o = [];
				var f = function (t) {
					for (var r = 0; r < t.length; r++) {
						a = t[r];
						if (Array.isArray(a)) {
							f(a);
						} else if (a != null && typeof a !== 'boolean') {
							if ((l = typeof e !== 'function' && !h(a))) {
								a = String(a);
							}
							if (l && s) {
								o[o.length - 1].$text$ += a;
							} else {
								o.push(l ? y(null, a) : a);
							}
							s = l;
						}
					}
				};
				f(r);
				if (t) {
					if (t.key) {
						i = t.key;
					}
					{
						var u = t.className || t.class;
						if (u) {
							t.class =
								typeof u !== 'object'
									? u
									: Object.keys(u)
											.filter(function (e) {
												return u[e];
											})
											.join(' ');
						}
					}
				}
				if (typeof e === 'function') {
					return e(t === null ? {} : t, o, _);
				}
				var $ = y(e, null);
				$.$attrs$ = t;
				if (o.length > 0) {
					$.$children$ = o;
				}
				{
					$.$key$ = i;
				}
				return $;
			});
			var y = function (e, t) {
				var r = { $flags$: 0, $tag$: e, $text$: t, $elm$: null, $children$: null };
				{
					r.$attrs$ = null;
				}
				{
					r.$key$ = null;
				}
				return r;
			};
			var w = {};
			var b = function (e) {
				return e && e.$tag$ === w;
			};
			var _ = {
				forEach: function (e, t) {
					return e.map(S).forEach(t);
				},
				map: function (e, t) {
					return e.map(S).map(t).map(k);
				},
			};
			var S = function (e) {
				return {
					vattrs: e.$attrs$,
					vchildren: e.$children$,
					vkey: e.$key$,
					vname: e.$name$,
					vtag: e.$tag$,
					vtext: e.$text$,
				};
			};
			var k = function (e) {
				if (typeof e.vtag === 'function') {
					var t = Object.assign({}, e.vattrs);
					if (e.vkey) {
						t.key = e.vkey;
					}
					if (e.vname) {
						t.name = e.vname;
					}
					return g.apply(void 0, __spreadArray([e.vtag, t], e.vchildren || [], false));
				}
				var r = y(e.vtag, e.vtext);
				r.$attrs$ = e.vattrs;
				r.$children$ = e.vchildren;
				r.$key$ = e.vkey;
				r.$name$ = e.vname;
				return r;
			};
			var N = function (e) {
				return xe
					.map(function (t) {
						return t(e);
					})
					.find(function (e) {
						return !!e;
					});
			};
			var x = e('s', function (e) {
				return xe.push(e);
			});
			var R = function (e, t) {
				if (e != null && !h(e)) {
					if (t & 4) {
						return e === 'false' ? false : e === '' || !!e;
					}
					if (t & 2) {
						return parseFloat(e);
					}
					if (t & 1) {
						return String(e);
					}
					return e;
				}
				return e;
			};
			var L = e('g', function (e) {
				return ge(e).$hostElement$;
			});
			var j = e('c', function (e, t, r) {
				var n = L(e);
				return {
					emit: function (e) {
						return E(n, t, { bubbles: !!(r & 4), composed: !!(r & 2), cancelable: !!(r & 1), detail: e });
					},
				};
			});
			var E = function (e, t, r) {
				var n = je.ce(t, r);
				e.dispatchEvent(n);
				return n;
			};
			var P = new WeakMap();
			var C = function (e, t, r) {
				var n = Ne.get(e);
				if (Pe && r) {
					n = n || new CSSStyleSheet();
					if (typeof n === 'string') {
						n = t;
					} else {
						n.replaceSync(t);
					}
				} else {
					n = t;
				}
				Ne.set(e, n);
			};
			var O = function (e, t, r, n) {
				var a = I(t, r);
				var i = Ne.get(a);
				e = e.nodeType === 11 ? e : Le;
				if (i) {
					if (typeof i === 'string') {
						e = e.head || e;
						var l = P.get(e);
						var s = void 0;
						if (!l) {
							P.set(e, (l = new Set()));
						}
						if (!l.has(a)) {
							{
								{
									s = Le.createElement('style');
									s.innerHTML = i;
								}
								e.insertBefore(s, e.querySelector('link'));
							}
							if (l) {
								l.add(a);
							}
						}
					} else if (!e.adoptedStyleSheets.includes(i)) {
						e.adoptedStyleSheets = __spreadArray(__spreadArray([], e.adoptedStyleSheets, true), [i], false);
					}
				}
				return a;
			};
			var A = function (e) {
				var t = e.$cmpMeta$;
				var r = e.$hostElement$;
				var n = t.$flags$;
				var a = f('attachStyles', t.$tagName$);
				var i = O(r.shadowRoot ? r.shadowRoot : r.getRootNode(), t, e.$modeName$);
				if (n & 10) {
					r['s-sc'] = i;
					r.classList.add(i + '-h');
				}
				a();
			};
			var I = function (e, t) {
				return 'sc-' + (t && e.$flags$ & 32 ? e.$tagName$ + '-' + t : e.$tagName$);
			};
			var M = function (e, t, r, n, a, i) {
				if (r !== n) {
					var l = be(e, t);
					var s = t.toLowerCase();
					if (t === 'class') {
						var o = e.classList;
						var f = T(r);
						var u = T(n);
						o.remove.apply(
							o,
							f.filter(function (e) {
								return e && !u.includes(e);
							}),
						);
						o.add.apply(
							o,
							u.filter(function (e) {
								return e && !f.includes(e);
							}),
						);
					} else if (t === 'style') {
						{
							for (var $ in r) {
								if (!n || n[$] == null) {
									if ($.includes('-')) {
										e.style.removeProperty($);
									} else {
										e.style[$] = '';
									}
								}
							}
						}
						for (var $ in n) {
							if (!r || n[$] !== r[$]) {
								if ($.includes('-')) {
									e.style.setProperty($, n[$]);
								} else {
									e.style[$] = n[$];
								}
							}
						}
					} else if (t === 'key');
					else if (t === 'ref') {
						if (n) {
							n(e);
						}
					} else if (!l && t[0] === 'o' && t[1] === 'n') {
						if (t[2] === '-') {
							t = t.slice(3);
						} else if (be(Re, s)) {
							t = s.slice(2);
						} else {
							t = s[2] + t.slice(3);
						}
						if (r) {
							je.rel(e, t, r, false);
						}
						if (n) {
							je.ael(e, t, n, false);
						}
					} else {
						var v = h(n);
						if ((l || (v && n !== null)) && !a) {
							try {
								if (!e.tagName.includes('-')) {
									var d = n == null ? '' : n;
									if (t === 'list') {
										l = false;
									} else if (r == null || e[t] != d) {
										e[t] = d;
									}
								} else {
									e[t] = n;
								}
							} catch (e) {}
						}
						var p = false;
						{
							if (s !== (s = s.replace(/^xlink\:?/, ''))) {
								t = s;
								p = true;
							}
						}
						if (n == null || n === false) {
							if (n !== false || e.getAttribute(t) === '') {
								if (p) {
									e.removeAttributeNS(c, t);
								} else {
									e.removeAttribute(t);
								}
							}
						} else if ((!l || i & 4 || a) && !v) {
							n = n === true ? '' : n;
							if (p) {
								e.setAttributeNS(c, t, n);
							} else {
								e.setAttribute(t, n);
							}
						}
					}
				}
			};
			var z = /\s/;
			var T = function (e) {
				return !e ? [] : e.split(z);
			};
			var U = function (e, t, r, n) {
				var a = t.$elm$.nodeType === 11 && t.$elm$.host ? t.$elm$.host : t.$elm$;
				var i = (e && e.$attrs$) || v;
				var l = t.$attrs$ || v;
				{
					for (n in i) {
						if (!(n in l)) {
							M(a, n, i[n], undefined, r, t.$flags$);
						}
					}
				}
				for (n in l) {
					M(a, n, i[n], l[n], r, t.$flags$);
				}
			};
			var q = function (e, t, r, n) {
				var i = t.$children$[r];
				var s = 0;
				var o;
				var f;
				if (i.$text$ !== null) {
					o = i.$elm$ = Le.createTextNode(i.$text$);
				} else {
					if (!l) {
						l = i.$tag$ === 'svg';
					}
					o = i.$elm$ = Le.createElementNS(l ? d : p, i.$tag$);
					if (l && i.$tag$ === 'foreignObject') {
						l = false;
					}
					{
						U(null, i, l);
					}
					if (m(a) && o['s-si'] !== a) {
						o.classList.add((o['s-si'] = a));
					}
					if (i.$children$) {
						for (s = 0; s < i.$children$.length; ++s) {
							f = q(e, i, s);
							if (f) {
								o.appendChild(f);
							}
						}
					}
					{
						if (i.$tag$ === 'svg') {
							l = false;
						} else if (o.tagName === 'foreignObject') {
							l = true;
						}
					}
				}
				return o;
			};
			var B = function (e, t, r, n, a, l) {
				var s = e;
				var o;
				if (s.shadowRoot && s.tagName === i) {
					s = s.shadowRoot;
				}
				for (; a <= l; ++a) {
					if (n[a]) {
						o = q(null, r, a);
						if (o) {
							n[a].$elm$ = o;
							s.insertBefore(o, t);
						}
					}
				}
			};
			var V = function (e, t, r, n, a) {
				for (; t <= r; ++t) {
					if ((n = e[t])) {
						a = n.$elm$;
						W(n);
						a.remove();
					}
				}
			};
			var D = function (e, t, r, n) {
				var a = 0;
				var i = 0;
				var l = 0;
				var s = 0;
				var o = t.length - 1;
				var f = t[0];
				var u = t[o];
				var $ = n.length - 1;
				var c = n[0];
				var v = n[$];
				var d;
				var p;
				while (a <= o && i <= $) {
					if (f == null) {
						f = t[++a];
					} else if (u == null) {
						u = t[--o];
					} else if (c == null) {
						c = n[++i];
					} else if (v == null) {
						v = n[--$];
					} else if (F(f, c)) {
						H(f, c);
						f = t[++a];
						c = n[++i];
					} else if (F(u, v)) {
						H(u, v);
						u = t[--o];
						v = n[--$];
					} else if (F(f, v)) {
						H(f, v);
						e.insertBefore(f.$elm$, u.$elm$.nextSibling);
						f = t[++a];
						v = n[--$];
					} else if (F(u, c)) {
						H(u, c);
						e.insertBefore(u.$elm$, f.$elm$);
						u = t[--o];
						c = n[++i];
					} else {
						l = -1;
						{
							for (s = a; s <= o; ++s) {
								if (t[s] && t[s].$key$ !== null && t[s].$key$ === c.$key$) {
									l = s;
									break;
								}
							}
						}
						if (l >= 0) {
							p = t[l];
							if (p.$tag$ !== c.$tag$) {
								d = q(t && t[i], r, l);
							} else {
								H(p, c);
								t[l] = undefined;
								d = p.$elm$;
							}
							c = n[++i];
						} else {
							d = q(t && t[i], r, i);
							c = n[++i];
						}
						if (d) {
							{
								f.$elm$.parentNode.insertBefore(d, f.$elm$);
							}
						}
					}
				}
				if (a > o) {
					B(e, n[$ + 1] == null ? null : n[$ + 1].$elm$, r, n, i, $);
				} else if (i > $) {
					V(t, a, o);
				}
			};
			var F = function (e, t) {
				if (e.$tag$ === t.$tag$) {
					{
						return e.$key$ === t.$key$;
					}
				}
				return false;
			};
			var H = function (e, t) {
				var r = (t.$elm$ = e.$elm$);
				var n = e.$children$;
				var a = t.$children$;
				var i = t.$tag$;
				var s = t.$text$;
				if (s === null) {
					{
						l = i === 'svg' ? true : i === 'foreignObject' ? false : l;
					}
					{
						if (i === 'slot');
						else {
							U(e, t, l);
						}
					}
					if (n !== null && a !== null) {
						D(r, n, t, a);
					} else if (a !== null) {
						if (e.$text$ !== null) {
							r.textContent = '';
						}
						B(r, null, t, a, 0, a.length - 1);
					} else if (n !== null) {
						V(n, 0, n.length - 1);
					}
					if (l && i === 'svg') {
						l = false;
					}
				} else if (e.$text$ !== s) {
					r.data = s;
				}
			};
			var W = function (e) {
				{
					e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(null);
					e.$children$ && e.$children$.map(W);
				}
			};
			var G = function (e, t) {
				var r = e.$hostElement$;
				var n = e.$vnode$ || y(null, null);
				var l = b(t) ? t : g(null, null, t);
				i = r.tagName;
				l.$tag$ = null;
				l.$flags$ |= 4;
				e.$vnode$ = l;
				l.$elm$ = n.$elm$ = r.shadowRoot || r;
				{
					a = r['s-sc'];
				}
				H(n, l);
			};
			var J = function (e, t) {
				if (t && !e.$onRenderResolve$ && t['s-p']) {
					t['s-p'].push(
						new Promise(function (t) {
							return (e.$onRenderResolve$ = t);
						}),
					);
				}
			};
			var K = function (e, t) {
				{
					e.$flags$ |= 16;
				}
				if (e.$flags$ & 4) {
					e.$flags$ |= 512;
					return;
				}
				J(e, e.$ancestorComponent$);
				var r = function () {
					return Q(e, t);
				};
				return Te(r);
			};
			var Q = function (e, t) {
				var r = f('scheduleUpdate', e.$cmpMeta$.$tagName$);
				var n = e.$lazyInstance$;
				var a;
				if (t) {
					{
						e.$flags$ |= 256;
						if (e.$queuedListeners$) {
							e.$queuedListeners$.map(function (e) {
								var t = e[0],
									r = e[1];
								return te(n, t, r);
							});
							e.$queuedListeners$ = null;
						}
					}
					{
						a = te(n, 'componentWillLoad');
					}
				}
				r();
				return re(a, function () {
					return X(e, n, t);
				});
			};
			var X = function (e, t, n) {
				return __awaiter(r, void 0, void 0, function () {
					var r, a, i, l, s, o;
					return __generator(this, function (u) {
						r = e.$hostElement$;
						a = f('update', e.$cmpMeta$.$tagName$);
						i = r['s-rc'];
						if (n) {
							A(e);
						}
						l = f('render', e.$cmpMeta$.$tagName$);
						{
							Y(e, t);
						}
						if (i) {
							i.map(function (e) {
								return e();
							});
							r['s-rc'] = undefined;
						}
						l();
						a();
						{
							s = r['s-p'];
							o = function () {
								return Z(e);
							};
							if (s.length === 0) {
								o();
							} else {
								Promise.all(s).then(o);
								e.$flags$ |= 4;
								s.length = 0;
							}
						}
						return [2];
					});
				});
			};
			var Y = function (e, t, r) {
				try {
					t = t.render();
					{
						e.$flags$ &= ~16;
					}
					{
						e.$flags$ |= 2;
					}
					{
						{
							{
								G(e, t);
							}
						}
					}
				} catch (t) {
					_e(t, e.$hostElement$);
				}
				return null;
			};
			var Z = function (e) {
				var t = e.$cmpMeta$.$tagName$;
				var r = e.$hostElement$;
				var n = f('postUpdate', t);
				var a = e.$lazyInstance$;
				var i = e.$ancestorComponent$;
				{
					te(a, 'componentDidRender');
				}
				if (!(e.$flags$ & 64)) {
					e.$flags$ |= 64;
					{
						ne(r);
					}
					{
						te(a, 'componentDidLoad');
					}
					n();
					{
						e.$onReadyResolve$(r);
						if (!i) {
							ee();
						}
					}
				} else {
					{
						te(a, 'componentDidUpdate');
					}
					n();
				}
				{
					e.$onInstanceResolve$(r);
				}
				{
					if (e.$onRenderResolve$) {
						e.$onRenderResolve$();
						e.$onRenderResolve$ = undefined;
					}
					if (e.$flags$ & 512) {
						ze(function () {
							return K(e, false);
						});
					}
					e.$flags$ &= ~(4 | 512);
				}
			};
			var ee = function (e) {
				{
					ne(Le.documentElement);
				}
				ze(function () {
					return E(Re, 'appload', { detail: { namespace: n } });
				});
			};
			var te = function (e, t, r) {
				if (e && e[t]) {
					try {
						return e[t](r);
					} catch (e) {
						_e(e);
					}
				}
				return undefined;
			};
			var re = function (e, t) {
				return e && e.then ? e.then(t) : t();
			};
			var ne = function (e) {
				return e.classList.add('hydrated');
			};
			var ae = function (e, t) {
				return ge(e).$instanceValues$.get(t);
			};
			var ie = function (e, t, r, n) {
				var a = ge(e);
				var i = a.$hostElement$;
				var l = a.$instanceValues$.get(t);
				var s = a.$flags$;
				var o = a.$lazyInstance$;
				r = R(r, n.$members$[t][0]);
				var f = Number.isNaN(l) && Number.isNaN(r);
				var u = r !== l && !f;
				if ((!(s & 8) || l === undefined) && u) {
					a.$instanceValues$.set(t, r);
					if (o) {
						if (n.$watchers$ && s & 128) {
							var $ = n.$watchers$[t];
							if ($) {
								$.map(function (e) {
									try {
										o[e](r, l, t);
									} catch (e) {
										_e(e, i);
									}
								});
							}
						}
						if ((s & (2 | 16)) === 2) {
							K(a, false);
						}
					}
				}
			};
			var le = function (e, t, r) {
				if (t.$members$) {
					if (e.watchers) {
						t.$watchers$ = e.watchers;
					}
					var n = Object.entries(t.$members$);
					var a = e.prototype;
					n.map(function (e) {
						var n = e[0],
							i = e[1][0];
						if (i & 31 || (r & 2 && i & 32)) {
							Object.defineProperty(a, n, {
								get: function () {
									return ae(this, n);
								},
								set: function (e) {
									ie(this, n, e, t);
								},
								configurable: true,
								enumerable: true,
							});
						} else if (r & 1 && i & 64) {
							Object.defineProperty(a, n, {
								value: function () {
									var e = [];
									for (var t = 0; t < arguments.length; t++) {
										e[t] = arguments[t];
									}
									var r = ge(this);
									return r.$onInstancePromise$.then(function () {
										var t;
										return (t = r.$lazyInstance$)[n].apply(t, e);
									});
								},
							});
						}
					});
					if (r & 1) {
						var i = new Map();
						a.attributeChangedCallback = function (e, t, r) {
							var n = this;
							je.jmp(function () {
								var t = i.get(e);
								if (n.hasOwnProperty(t)) {
									r = n[t];
									delete n[t];
								} else if (a.hasOwnProperty(t) && typeof n[t] === 'number' && n[t] == r) {
									return;
								}
								n[t] = r === null && typeof n[t] === 'boolean' ? false : r;
							});
						};
						e.observedAttributes = n
							.filter(function (e) {
								var t = e[0],
									r = e[1];
								return r[0] & 15;
							})
							.map(function (e) {
								var t = e[0],
									r = e[1];
								var n = r[1] || t;
								i.set(n, t);
								return n;
							});
					}
				}
				return e;
			};
			var se = function (e, t, n, a, i) {
				return __awaiter(r, void 0, void 0, function () {
					var r, a, l, s, o, $, c;
					return __generator(this, function (v) {
						switch (v.label) {
							case 0:
								if (!((t.$flags$ & 32) === 0)) return [3, 3];
								t.$flags$ |= 32;
								i = ke(n);
								if (!i.then) return [3, 2];
								r = u();
								return [4, i];
							case 1:
								i = v.sent();
								r();
								v.label = 2;
							case 2:
								if (!i.isProxied) {
									{
										n.$watchers$ = i.watchers;
									}
									le(i, n, 2);
									i.isProxied = true;
								}
								a = f('createInstance', n.$tagName$);
								{
									t.$flags$ |= 8;
								}
								try {
									new i(t);
								} catch (e) {
									_e(e);
								}
								{
									t.$flags$ &= ~8;
								}
								{
									t.$flags$ |= 128;
								}
								a();
								oe(t.$lazyInstance$);
								if (i.style) {
									l = i.style;
									if (typeof l !== 'string') {
										l = l[(t.$modeName$ = N(e))];
									}
									s = I(n, t.$modeName$);
									if (!Ne.has(s)) {
										o = f('registerStyles', n.$tagName$);
										C(s, l, !!(n.$flags$ & 1));
										o();
									}
								}
								v.label = 3;
							case 3:
								$ = t.$ancestorComponent$;
								c = function () {
									return K(t, true);
								};
								if ($ && $['s-rc']) {
									$['s-rc'].push(c);
								} else {
									c();
								}
								return [2];
						}
					});
				});
			};
			var oe = function (e) {
				{
					te(e, 'connectedCallback');
				}
			};
			var fe = function (e) {
				if ((je.$flags$ & 1) === 0) {
					var t = ge(e);
					var r = t.$cmpMeta$;
					var n = f('connectedCallback', r.$tagName$);
					if (!(t.$flags$ & 1)) {
						t.$flags$ |= 1;
						{
							var a = e;
							while ((a = a.parentNode || a.host)) {
								if (a['s-p']) {
									J(t, (t.$ancestorComponent$ = a));
									break;
								}
							}
						}
						if (r.$members$) {
							Object.entries(r.$members$).map(function (t) {
								var r = t[0],
									n = t[1][0];
								if (n & 31 && e.hasOwnProperty(r)) {
									var a = e[r];
									delete e[r];
									e[r] = a;
								}
							});
						}
						{
							se(e, t, r);
						}
					} else {
						ve(e, t, r.$listeners$);
						oe(t.$lazyInstance$);
					}
					n();
				}
			};
			var ue = function (e) {
				if ((je.$flags$ & 1) === 0) {
					var t = ge(e);
					{
						if (t.$rmListeners$) {
							t.$rmListeners$.map(function (e) {
								return e();
							});
							t.$rmListeners$ = undefined;
						}
					}
				}
			};
			var $e = e('b', function (e, t) {
				if (t === void 0) {
					t = {};
				}
				var r = f();
				var n = [];
				var a = t.exclude || [];
				var i = Re.customElements;
				var l = Le.head;
				var s = l.querySelector('meta[charset]');
				var o = Le.createElement('style');
				var u = [];
				var c;
				var v = true;
				Object.assign(je, t);
				je.$resourcesUrl$ = new URL(t.resourcesUrl || './', Le.baseURI).href;
				e.map(function (e) {
					e[1].map(function (t) {
						var r = { $flags$: t[0], $tagName$: t[1], $members$: t[2], $listeners$: t[3] };
						{
							r.$members$ = t[2];
						}
						{
							r.$listeners$ = t[3];
						}
						{
							r.$watchers$ = {};
						}
						var l = r.$tagName$;
						var s = (function (e) {
							__extends(t, e);
							function t(t) {
								var n = e.call(this, t) || this;
								t = n;
								we(t, r);
								if (r.$flags$ & 1) {
									{
										{
											t.attachShadow({ mode: 'open' });
										}
									}
								}
								return n;
							}
							t.prototype.connectedCallback = function () {
								var e = this;
								if (c) {
									clearTimeout(c);
									c = null;
								}
								if (v) {
									u.push(this);
								} else {
									je.jmp(function () {
										return fe(e);
									});
								}
							};
							t.prototype.disconnectedCallback = function () {
								var e = this;
								je.jmp(function () {
									return ue(e);
								});
							};
							t.prototype.componentOnReady = function () {
								return ge(this).$onReadyPromise$;
							};
							return t;
						})(HTMLElement);
						r.$lazyBundleId$ = e[0];
						if (!a.includes(l) && !i.get(l)) {
							n.push(l);
							i.define(l, le(s, r, 1));
						}
					});
				});
				{
					o.innerHTML = n + $;
					o.setAttribute('data-styles', '');
					l.insertBefore(o, s ? s.nextSibling : l.firstChild);
				}
				v = false;
				if (u.length) {
					u.map(function (e) {
						return e.connectedCallback();
					});
				} else {
					{
						je.jmp(function () {
							return (c = setTimeout(ee, 30));
						});
					}
				}
				r();
			});
			var ce = e('F', function (e, t) {
				return t;
			});
			var ve = function (e, t, r, n) {
				if (r) {
					r.map(function (r) {
						var n = r[0],
							a = r[1],
							i = r[2];
						var l = pe(e, n);
						var s = de(t, i);
						var o = me(n);
						je.ael(l, a, s, o);
						(t.$rmListeners$ = t.$rmListeners$ || []).push(function () {
							return je.rel(l, a, s, o);
						});
					});
				}
			};
			var de = function (e, t) {
				return function (r) {
					try {
						{
							if (e.$flags$ & 256) {
								e.$lazyInstance$[t](r);
							} else {
								(e.$queuedListeners$ = e.$queuedListeners$ || []).push([t, r]);
							}
						}
					} catch (e) {
						_e(e);
					}
				};
			};
			var pe = function (e, t) {
				if (t & 8) return Re;
				return e;
			};
			var me = function (e) {
				return (e & 2) !== 0;
			};
			var he = new WeakMap();
			var ge = function (e) {
				return he.get(e);
			};
			var ye = e('r', function (e, t) {
				return he.set((t.$lazyInstance$ = e), t);
			});
			var we = function (e, t) {
				var r = { $flags$: 0, $hostElement$: e, $cmpMeta$: t, $instanceValues$: new Map() };
				{
					r.$onInstancePromise$ = new Promise(function (e) {
						return (r.$onInstanceResolve$ = e);
					});
				}
				{
					r.$onReadyPromise$ = new Promise(function (e) {
						return (r.$onReadyResolve$ = e);
					});
					e['s-p'] = [];
					e['s-rc'] = [];
				}
				ve(e, r, t.$listeners$);
				return he.set(e, r);
			};
			var be = function (e, t) {
				return t in e;
			};
			var _e = function (e, t) {
				return (0, console.error)(e, t);
			};
			var Se = new Map();
			var ke = function (e, r, n) {
				var a = e.$tagName$.replace(/-/g, '_');
				var i = e.$lazyBundleId$;
				var l = Se.get(i);
				if (l) {
					return l[a];
				}
				/*!__STENCIL_STATIC_IMPORT_SWITCH__*/ return t
					.import('./'.concat(i, '.entry.js').concat(''))
					.then(function (e) {
						{
							Se.set(i, e);
						}
						return e[a];
					}, _e);
			};
			var Ne = new Map();
			var xe = [];
			var Re = typeof window !== 'undefined' ? window : {};
			var Le = Re.document || { head: {} };
			var je = {
				$flags$: 0,
				$resourcesUrl$: '',
				jmp: function (e) {
					return e();
				},
				raf: function (e) {
					return requestAnimationFrame(e);
				},
				ael: function (e, t, r, n) {
					return e.addEventListener(t, r, n);
				},
				rel: function (e, t, r, n) {
					return e.removeEventListener(t, r, n);
				},
				ce: function (e, t) {
					return new CustomEvent(e, t);
				},
			};
			var Ee = e('p', function (e) {
				return Promise.resolve(e);
			});
			var Pe = (function () {
				try {
					new CSSStyleSheet();
					return typeof new CSSStyleSheet().replaceSync === 'function';
				} catch (e) {}
				return false;
			})();
			var Ce = [];
			var Oe = [];
			var Ae = function (e, t) {
				return function (r) {
					e.push(r);
					if (!s) {
						s = true;
						if (t && je.$flags$ & 4) {
							ze(Me);
						} else {
							je.raf(Me);
						}
					}
				};
			};
			var Ie = function (e) {
				for (var t = 0; t < e.length; t++) {
					try {
						e[t](performance.now());
					} catch (e) {
						_e(e);
					}
				}
				e.length = 0;
			};
			var Me = function () {
				Ie(Ce);
				{
					Ie(Oe);
					if ((s = Ce.length > 0)) {
						je.raf(Me);
					}
				}
			};
			var ze = function (e) {
				return Ee().then(e);
			};
			var Te = Ae(Oe, true);
		},
	};
});
