var __extends =
	(this && this.__extends) ||
	(function () {
		var e = function (t, n) {
			e =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function (e, t) {
						e.__proto__ = t;
					}) ||
				function (e, t) {
					for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) e[n] = t[n];
				};
			return e(t, n);
		};
		return function (t, n) {
			if (typeof n !== 'function' && n !== null)
				throw new TypeError('Class extends value ' + String(n) + ' is not a constructor or null');
			e(t, n);
			function r() {
				this.constructor = t;
			}
			t.prototype = n === null ? Object.create(n) : ((r.prototype = n.prototype), new r());
		};
	})();
var __awaiter =
	(this && this.__awaiter) ||
	function (e, t, n, r) {
		function a(e) {
			return e instanceof n
				? e
				: new n(function (t) {
						t(e);
				  });
		}
		return new (n || (n = Promise))(function (n, s) {
			function o(e) {
				try {
					l(r.next(e));
				} catch (e) {
					s(e);
				}
			}
			function i(e) {
				try {
					l(r['throw'](e));
				} catch (e) {
					s(e);
				}
			}
			function l(e) {
				e.done ? n(e.value) : a(e.value).then(o, i);
			}
			l((r = r.apply(e, t || [])).next());
		});
	};
var __generator =
	(this && this.__generator) ||
	function (e, t) {
		var n = {
				label: 0,
				sent: function () {
					if (s[0] & 1) throw s[1];
					return s[1];
				},
				trys: [],
				ops: [],
			},
			r,
			a,
			s,
			o;
		return (
			(o = { next: i(0), throw: i(1), return: i(2) }),
			typeof Symbol === 'function' &&
				(o[Symbol.iterator] = function () {
					return this;
				}),
			o
		);
		function i(e) {
			return function (t) {
				return l([e, t]);
			};
		}
		function l(o) {
			if (r) throw new TypeError('Generator is already executing.');
			while (n)
				try {
					if (
						((r = 1),
						a &&
							(s = o[0] & 2 ? a['return'] : o[0] ? a['throw'] || ((s = a['return']) && s.call(a), 0) : a.next) &&
							!(s = s.call(a, o[1])).done)
					)
						return s;
					if (((a = 0), s)) o = [o[0] & 2, s.value];
					switch (o[0]) {
						case 0:
						case 1:
							s = o;
							break;
						case 4:
							n.label++;
							return { value: o[1], done: false };
						case 5:
							n.label++;
							a = o[1];
							o = [0];
							continue;
						case 7:
							o = n.ops.pop();
							n.trys.pop();
							continue;
						default:
							if (!((s = n.trys), (s = s.length > 0 && s[s.length - 1])) && (o[0] === 6 || o[0] === 2)) {
								n = 0;
								continue;
							}
							if (o[0] === 3 && (!s || (o[1] > s[0] && o[1] < s[3]))) {
								n.label = o[1];
								break;
							}
							if (o[0] === 6 && n.label < s[1]) {
								n.label = s[1];
								s = o;
								break;
							}
							if (s && n.label < s[2]) {
								n.label = s[2];
								n.ops.push(o);
								break;
							}
							if (s[2]) n.ops.pop();
							n.trys.pop();
							continue;
					}
					o = t.call(e, n);
				} catch (e) {
					o = [6, e];
					a = 0;
				} finally {
					r = s = 0;
				}
			if (o[0] & 5) throw o[1];
			return { value: o[0] ? o[1] : void 0, done: true };
		}
	};
var __spreadArray =
	(this && this.__spreadArray) ||
	function (e, t, n) {
		if (n || arguments.length === 2)
			for (var r = 0, a = t.length, s; r < a; r++) {
				if (s || !(r in t)) {
					if (!s) s = Array.prototype.slice.call(t, 0, r);
					s[r] = t[r];
				}
			}
		return e.concat(s || Array.prototype.slice.call(t));
	};
var NAMESPACE = 'ontario-design-system-components';
var scopeId;
var hostTagName;
var isSvgMode = false;
var queuePending = false;
var getAssetPath = function (e) {
	var t = new URL(e, plt.$resourcesUrl$);
	return t.origin !== win.location.origin ? t.href : t.pathname;
};
var createTime = function (e, t) {
	if (t === void 0) {
		t = '';
	}
	{
		return function () {
			return;
		};
	}
};
var uniqueTime = function (e, t) {
	{
		return function () {
			return;
		};
	}
};
var HYDRATED_CSS = '{visibility:hidden}.hydrated{visibility:inherit}';
var XLINK_NS = 'http://www.w3.org/1999/xlink';
var EMPTY_OBJ = {};
var SVG_NS = 'http://www.w3.org/2000/svg';
var HTML_NS = 'http://www.w3.org/1999/xhtml';
var isDef = function (e) {
	return e != null;
};
var isComplexType = function (e) {
	e = typeof e;
	return e === 'object' || e === 'function';
};
var h = function (e, t) {
	var n = [];
	for (var r = 2; r < arguments.length; r++) {
		n[r - 2] = arguments[r];
	}
	var a = null;
	var s = null;
	var o = false;
	var i = false;
	var l = [];
	var u = function (t) {
		for (var n = 0; n < t.length; n++) {
			a = t[n];
			if (Array.isArray(a)) {
				u(a);
			} else if (a != null && typeof a !== 'boolean') {
				if ((o = typeof e !== 'function' && !isComplexType(a))) {
					a = String(a);
				}
				if (o && i) {
					l[l.length - 1].$text$ += a;
				} else {
					l.push(o ? newVNode(null, a) : a);
				}
				i = o;
			}
		}
	};
	u(n);
	if (t) {
		if (t.key) {
			s = t.key;
		}
		{
			var c = t.className || t.class;
			if (c) {
				t.class =
					typeof c !== 'object'
						? c
						: Object.keys(c)
								.filter(function (e) {
									return c[e];
								})
								.join(' ');
			}
		}
	}
	if (typeof e === 'function') {
		return e(t === null ? {} : t, l, vdomFnUtils);
	}
	var f = newVNode(e, null);
	f.$attrs$ = t;
	if (l.length > 0) {
		f.$children$ = l;
	}
	{
		f.$key$ = s;
	}
	return f;
};
var newVNode = function (e, t) {
	var n = { $flags$: 0, $tag$: e, $text$: t, $elm$: null, $children$: null };
	{
		n.$attrs$ = null;
	}
	{
		n.$key$ = null;
	}
	return n;
};
var Host = {};
var isHost = function (e) {
	return e && e.$tag$ === Host;
};
var vdomFnUtils = {
	forEach: function (e, t) {
		return e.map(convertToPublic).forEach(t);
	},
	map: function (e, t) {
		return e.map(convertToPublic).map(t).map(convertToPrivate);
	},
};
var convertToPublic = function (e) {
	return { vattrs: e.$attrs$, vchildren: e.$children$, vkey: e.$key$, vname: e.$name$, vtag: e.$tag$, vtext: e.$text$ };
};
var convertToPrivate = function (e) {
	if (typeof e.vtag === 'function') {
		var t = Object.assign({}, e.vattrs);
		if (e.vkey) {
			t.key = e.vkey;
		}
		if (e.vname) {
			t.name = e.vname;
		}
		return h.apply(void 0, __spreadArray([e.vtag, t], e.vchildren || [], false));
	}
	var n = newVNode(e.vtag, e.vtext);
	n.$attrs$ = e.vattrs;
	n.$children$ = e.vchildren;
	n.$key$ = e.vkey;
	n.$name$ = e.vname;
	return n;
};
var computeMode = function (e) {
	return modeResolutionChain
		.map(function (t) {
			return t(e);
		})
		.find(function (e) {
			return !!e;
		});
};
var setMode = function (e) {
	return modeResolutionChain.push(e);
};
var parsePropertyValue = function (e, t) {
	if (e != null && !isComplexType(e)) {
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
var getElement = function (e) {
	return getHostRef(e).$hostElement$;
};
var createEvent = function (e, t, n) {
	var r = getElement(e);
	return {
		emit: function (e) {
			return emitEvent(r, t, { bubbles: !!(n & 4), composed: !!(n & 2), cancelable: !!(n & 1), detail: e });
		},
	};
};
var emitEvent = function (e, t, n) {
	var r = plt.ce(t, n);
	e.dispatchEvent(r);
	return r;
};
var rootAppliedStyles = new WeakMap();
var registerStyle = function (e, t, n) {
	var r = styles.get(e);
	if (supportsConstructableStylesheets && n) {
		r = r || new CSSStyleSheet();
		if (typeof r === 'string') {
			r = t;
		} else {
			r.replaceSync(t);
		}
	} else {
		r = t;
	}
	styles.set(e, r);
};
var addStyle = function (e, t, n, r) {
	var a = getScopeId(t, n);
	var s = styles.get(a);
	e = e.nodeType === 11 ? e : doc;
	if (s) {
		if (typeof s === 'string') {
			e = e.head || e;
			var o = rootAppliedStyles.get(e);
			var i = void 0;
			if (!o) {
				rootAppliedStyles.set(e, (o = new Set()));
			}
			if (!o.has(a)) {
				{
					{
						i = doc.createElement('style');
						i.innerHTML = s;
					}
					e.insertBefore(i, e.querySelector('link'));
				}
				if (o) {
					o.add(a);
				}
			}
		} else if (!e.adoptedStyleSheets.includes(s)) {
			e.adoptedStyleSheets = __spreadArray(__spreadArray([], e.adoptedStyleSheets, true), [s], false);
		}
	}
	return a;
};
var attachStyles = function (e) {
	var t = e.$cmpMeta$;
	var n = e.$hostElement$;
	var r = t.$flags$;
	var a = createTime('attachStyles', t.$tagName$);
	var s = addStyle(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t, e.$modeName$);
	if (r & 10) {
		n['s-sc'] = s;
		n.classList.add(s + '-h');
	}
	a();
};
var getScopeId = function (e, t) {
	return 'sc-' + (t && e.$flags$ & 32 ? e.$tagName$ + '-' + t : e.$tagName$);
};
var setAccessor = function (e, t, n, r, a, s) {
	if (n !== r) {
		var o = isMemberInElement(e, t);
		var i = t.toLowerCase();
		if (t === 'class') {
			var l = e.classList;
			var u = parseClassList(n);
			var c = parseClassList(r);
			l.remove.apply(
				l,
				u.filter(function (e) {
					return e && !c.includes(e);
				}),
			);
			l.add.apply(
				l,
				c.filter(function (e) {
					return e && !u.includes(e);
				}),
			);
		} else if (t === 'style') {
			{
				for (var f in n) {
					if (!r || r[f] == null) {
						if (f.includes('-')) {
							e.style.removeProperty(f);
						} else {
							e.style[f] = '';
						}
					}
				}
			}
			for (var f in r) {
				if (!n || r[f] !== n[f]) {
					if (f.includes('-')) {
						e.style.setProperty(f, r[f]);
					} else {
						e.style[f] = r[f];
					}
				}
			}
		} else if (t === 'key');
		else if (t === 'ref') {
			if (r) {
				r(e);
			}
		} else if (!o && t[0] === 'o' && t[1] === 'n') {
			if (t[2] === '-') {
				t = t.slice(3);
			} else if (isMemberInElement(win, i)) {
				t = i.slice(2);
			} else {
				t = i[2] + t.slice(3);
			}
			if (n) {
				plt.rel(e, t, n, false);
			}
			if (r) {
				plt.ael(e, t, r, false);
			}
		} else {
			var $ = isComplexType(r);
			if ((o || ($ && r !== null)) && !a) {
				try {
					if (!e.tagName.includes('-')) {
						var v = r == null ? '' : r;
						if (t === 'list') {
							o = false;
						} else if (n == null || e[t] != v) {
							e[t] = v;
						}
					} else {
						e[t] = r;
					}
				} catch (e) {}
			}
			var d = false;
			{
				if (i !== (i = i.replace(/^xlink\:?/, ''))) {
					t = i;
					d = true;
				}
			}
			if (r == null || r === false) {
				if (r !== false || e.getAttribute(t) === '') {
					if (d) {
						e.removeAttributeNS(XLINK_NS, t);
					} else {
						e.removeAttribute(t);
					}
				}
			} else if ((!o || s & 4 || a) && !$) {
				r = r === true ? '' : r;
				if (d) {
					e.setAttributeNS(XLINK_NS, t, r);
				} else {
					e.setAttribute(t, r);
				}
			}
		}
	}
};
var parseClassListRegex = /\s/;
var parseClassList = function (e) {
	return !e ? [] : e.split(parseClassListRegex);
};
var updateElement = function (e, t, n, r) {
	var a = t.$elm$.nodeType === 11 && t.$elm$.host ? t.$elm$.host : t.$elm$;
	var s = (e && e.$attrs$) || EMPTY_OBJ;
	var o = t.$attrs$ || EMPTY_OBJ;
	{
		for (r in s) {
			if (!(r in o)) {
				setAccessor(a, r, s[r], undefined, n, t.$flags$);
			}
		}
	}
	for (r in o) {
		setAccessor(a, r, s[r], o[r], n, t.$flags$);
	}
};
var createElm = function (e, t, n, r) {
	var a = t.$children$[n];
	var s = 0;
	var o;
	var i;
	if (a.$text$ !== null) {
		o = a.$elm$ = doc.createTextNode(a.$text$);
	} else {
		if (!isSvgMode) {
			isSvgMode = a.$tag$ === 'svg';
		}
		o = a.$elm$ = doc.createElementNS(isSvgMode ? SVG_NS : HTML_NS, a.$tag$);
		if (isSvgMode && a.$tag$ === 'foreignObject') {
			isSvgMode = false;
		}
		{
			updateElement(null, a, isSvgMode);
		}
		if (isDef(scopeId) && o['s-si'] !== scopeId) {
			o.classList.add((o['s-si'] = scopeId));
		}
		if (a.$children$) {
			for (s = 0; s < a.$children$.length; ++s) {
				i = createElm(e, a, s);
				if (i) {
					o.appendChild(i);
				}
			}
		}
		{
			if (a.$tag$ === 'svg') {
				isSvgMode = false;
			} else if (o.tagName === 'foreignObject') {
				isSvgMode = true;
			}
		}
	}
	return o;
};
var addVnodes = function (e, t, n, r, a, s) {
	var o = e;
	var i;
	if (o.shadowRoot && o.tagName === hostTagName) {
		o = o.shadowRoot;
	}
	for (; a <= s; ++a) {
		if (r[a]) {
			i = createElm(null, n, a);
			if (i) {
				r[a].$elm$ = i;
				o.insertBefore(i, t);
			}
		}
	}
};
var removeVnodes = function (e, t, n, r, a) {
	for (; t <= n; ++t) {
		if ((r = e[t])) {
			a = r.$elm$;
			callNodeRefs(r);
			a.remove();
		}
	}
};
var updateChildren = function (e, t, n, r) {
	var a = 0;
	var s = 0;
	var o = 0;
	var i = 0;
	var l = t.length - 1;
	var u = t[0];
	var c = t[l];
	var f = r.length - 1;
	var $ = r[0];
	var v = r[f];
	var d;
	var p;
	while (a <= l && s <= f) {
		if (u == null) {
			u = t[++a];
		} else if (c == null) {
			c = t[--l];
		} else if ($ == null) {
			$ = r[++s];
		} else if (v == null) {
			v = r[--f];
		} else if (isSameVnode(u, $)) {
			patch(u, $);
			u = t[++a];
			$ = r[++s];
		} else if (isSameVnode(c, v)) {
			patch(c, v);
			c = t[--l];
			v = r[--f];
		} else if (isSameVnode(u, v)) {
			patch(u, v);
			e.insertBefore(u.$elm$, c.$elm$.nextSibling);
			u = t[++a];
			v = r[--f];
		} else if (isSameVnode(c, $)) {
			patch(c, $);
			e.insertBefore(c.$elm$, u.$elm$);
			c = t[--l];
			$ = r[++s];
		} else {
			o = -1;
			{
				for (i = a; i <= l; ++i) {
					if (t[i] && t[i].$key$ !== null && t[i].$key$ === $.$key$) {
						o = i;
						break;
					}
				}
			}
			if (o >= 0) {
				p = t[o];
				if (p.$tag$ !== $.$tag$) {
					d = createElm(t && t[s], n, o);
				} else {
					patch(p, $);
					t[o] = undefined;
					d = p.$elm$;
				}
				$ = r[++s];
			} else {
				d = createElm(t && t[s], n, s);
				$ = r[++s];
			}
			if (d) {
				{
					u.$elm$.parentNode.insertBefore(d, u.$elm$);
				}
			}
		}
	}
	if (a > l) {
		addVnodes(e, r[f + 1] == null ? null : r[f + 1].$elm$, n, r, s, f);
	} else if (s > f) {
		removeVnodes(t, a, l);
	}
};
var isSameVnode = function (e, t) {
	if (e.$tag$ === t.$tag$) {
		{
			return e.$key$ === t.$key$;
		}
	}
	return false;
};
var patch = function (e, t) {
	var n = (t.$elm$ = e.$elm$);
	var r = e.$children$;
	var a = t.$children$;
	var s = t.$tag$;
	var o = t.$text$;
	if (o === null) {
		{
			isSvgMode = s === 'svg' ? true : s === 'foreignObject' ? false : isSvgMode;
		}
		{
			if (s === 'slot');
			else {
				updateElement(e, t, isSvgMode);
			}
		}
		if (r !== null && a !== null) {
			updateChildren(n, r, t, a);
		} else if (a !== null) {
			if (e.$text$ !== null) {
				n.textContent = '';
			}
			addVnodes(n, null, t, a, 0, a.length - 1);
		} else if (r !== null) {
			removeVnodes(r, 0, r.length - 1);
		}
		if (isSvgMode && s === 'svg') {
			isSvgMode = false;
		}
	} else if (e.$text$ !== o) {
		n.data = o;
	}
};
var callNodeRefs = function (e) {
	{
		e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(null);
		e.$children$ && e.$children$.map(callNodeRefs);
	}
};
var renderVdom = function (e, t) {
	var n = e.$hostElement$;
	var r = e.$vnode$ || newVNode(null, null);
	var a = isHost(t) ? t : h(null, null, t);
	hostTagName = n.tagName;
	a.$tag$ = null;
	a.$flags$ |= 4;
	e.$vnode$ = a;
	a.$elm$ = r.$elm$ = n.shadowRoot || n;
	{
		scopeId = n['s-sc'];
	}
	patch(r, a);
};
var attachToAncestor = function (e, t) {
	if (t && !e.$onRenderResolve$ && t['s-p']) {
		t['s-p'].push(
			new Promise(function (t) {
				return (e.$onRenderResolve$ = t);
			}),
		);
	}
};
var scheduleUpdate = function (e, t) {
	{
		e.$flags$ |= 16;
	}
	if (e.$flags$ & 4) {
		e.$flags$ |= 512;
		return;
	}
	attachToAncestor(e, e.$ancestorComponent$);
	var n = function () {
		return dispatchHooks(e, t);
	};
	return writeTask(n);
};
var dispatchHooks = function (e, t) {
	var n = createTime('scheduleUpdate', e.$cmpMeta$.$tagName$);
	var r = e.$lazyInstance$;
	var a;
	if (t) {
		{
			e.$flags$ |= 256;
			if (e.$queuedListeners$) {
				e.$queuedListeners$.map(function (e) {
					var t = e[0],
						n = e[1];
					return safeCall(r, t, n);
				});
				e.$queuedListeners$ = null;
			}
		}
		{
			a = safeCall(r, 'componentWillLoad');
		}
	}
	n();
	return then(a, function () {
		return updateComponent(e, r, t);
	});
};
var updateComponent = function (e, t, n) {
	return __awaiter(void 0, void 0, void 0, function () {
		var r, a, s, o, i, l;
		return __generator(this, function (u) {
			r = e.$hostElement$;
			a = createTime('update', e.$cmpMeta$.$tagName$);
			s = r['s-rc'];
			if (n) {
				attachStyles(e);
			}
			o = createTime('render', e.$cmpMeta$.$tagName$);
			{
				callRender(e, t);
			}
			if (s) {
				s.map(function (e) {
					return e();
				});
				r['s-rc'] = undefined;
			}
			o();
			a();
			{
				i = r['s-p'];
				l = function () {
					return postUpdateComponent(e);
				};
				if (i.length === 0) {
					l();
				} else {
					Promise.all(i).then(l);
					e.$flags$ |= 4;
					i.length = 0;
				}
			}
			return [2];
		});
	});
};
var callRender = function (e, t, n) {
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
					renderVdom(e, t);
				}
			}
		}
	} catch (t) {
		consoleError(t, e.$hostElement$);
	}
	return null;
};
var postUpdateComponent = function (e) {
	var t = e.$cmpMeta$.$tagName$;
	var n = e.$hostElement$;
	var r = createTime('postUpdate', t);
	var a = e.$lazyInstance$;
	var s = e.$ancestorComponent$;
	{
		safeCall(a, 'componentDidRender');
	}
	if (!(e.$flags$ & 64)) {
		e.$flags$ |= 64;
		{
			addHydratedFlag(n);
		}
		{
			safeCall(a, 'componentDidLoad');
		}
		r();
		{
			e.$onReadyResolve$(n);
			if (!s) {
				appDidLoad();
			}
		}
	} else {
		{
			safeCall(a, 'componentDidUpdate');
		}
		r();
	}
	{
		e.$onInstanceResolve$(n);
	}
	{
		if (e.$onRenderResolve$) {
			e.$onRenderResolve$();
			e.$onRenderResolve$ = undefined;
		}
		if (e.$flags$ & 512) {
			nextTick(function () {
				return scheduleUpdate(e, false);
			});
		}
		e.$flags$ &= ~(4 | 512);
	}
};
var appDidLoad = function (e) {
	{
		addHydratedFlag(doc.documentElement);
	}
	nextTick(function () {
		return emitEvent(win, 'appload', { detail: { namespace: NAMESPACE } });
	});
};
var safeCall = function (e, t, n) {
	if (e && e[t]) {
		try {
			return e[t](n);
		} catch (e) {
			consoleError(e);
		}
	}
	return undefined;
};
var then = function (e, t) {
	return e && e.then ? e.then(t) : t();
};
var addHydratedFlag = function (e) {
	return e.classList.add('hydrated');
};
var getValue = function (e, t) {
	return getHostRef(e).$instanceValues$.get(t);
};
var setValue = function (e, t, n, r) {
	var a = getHostRef(e);
	var s = a.$hostElement$;
	var o = a.$instanceValues$.get(t);
	var i = a.$flags$;
	var l = a.$lazyInstance$;
	n = parsePropertyValue(n, r.$members$[t][0]);
	var u = Number.isNaN(o) && Number.isNaN(n);
	var c = n !== o && !u;
	if ((!(i & 8) || o === undefined) && c) {
		a.$instanceValues$.set(t, n);
		if (l) {
			if (r.$watchers$ && i & 128) {
				var f = r.$watchers$[t];
				if (f) {
					f.map(function (e) {
						try {
							l[e](n, o, t);
						} catch (e) {
							consoleError(e, s);
						}
					});
				}
			}
			if ((i & (2 | 16)) === 2) {
				scheduleUpdate(a, false);
			}
		}
	}
};
var proxyComponent = function (e, t, n) {
	if (t.$members$) {
		if (e.watchers) {
			t.$watchers$ = e.watchers;
		}
		var r = Object.entries(t.$members$);
		var a = e.prototype;
		r.map(function (e) {
			var r = e[0],
				s = e[1][0];
			if (s & 31 || (n & 2 && s & 32)) {
				Object.defineProperty(a, r, {
					get: function () {
						return getValue(this, r);
					},
					set: function (e) {
						setValue(this, r, e, t);
					},
					configurable: true,
					enumerable: true,
				});
			} else if (n & 1 && s & 64) {
				Object.defineProperty(a, r, {
					value: function () {
						var e = [];
						for (var t = 0; t < arguments.length; t++) {
							e[t] = arguments[t];
						}
						var n = getHostRef(this);
						return n.$onInstancePromise$.then(function () {
							var t;
							return (t = n.$lazyInstance$)[r].apply(t, e);
						});
					},
				});
			}
		});
		if (n & 1) {
			var s = new Map();
			a.attributeChangedCallback = function (e, t, n) {
				var r = this;
				plt.jmp(function () {
					var t = s.get(e);
					if (r.hasOwnProperty(t)) {
						n = r[t];
						delete r[t];
					} else if (a.hasOwnProperty(t) && typeof r[t] === 'number' && r[t] == n) {
						return;
					}
					r[t] = n === null && typeof r[t] === 'boolean' ? false : n;
				});
			};
			e.observedAttributes = r
				.filter(function (e) {
					var t = e[0],
						n = e[1];
					return n[0] & 15;
				})
				.map(function (e) {
					var t = e[0],
						n = e[1];
					var r = n[1] || t;
					s.set(r, t);
					return r;
				});
		}
	}
	return e;
};
var initializeComponent = function (e, t, n, r, a) {
	return __awaiter(void 0, void 0, void 0, function () {
		var r, s, o, i, l, u, c;
		return __generator(this, function (f) {
			switch (f.label) {
				case 0:
					if (!((t.$flags$ & 32) === 0)) return [3, 3];
					t.$flags$ |= 32;
					a = loadModule(n);
					if (!a.then) return [3, 2];
					r = uniqueTime();
					return [4, a];
				case 1:
					a = f.sent();
					r();
					f.label = 2;
				case 2:
					if (!a.isProxied) {
						{
							n.$watchers$ = a.watchers;
						}
						proxyComponent(a, n, 2);
						a.isProxied = true;
					}
					s = createTime('createInstance', n.$tagName$);
					{
						t.$flags$ |= 8;
					}
					try {
						new a(t);
					} catch (e) {
						consoleError(e);
					}
					{
						t.$flags$ &= ~8;
					}
					{
						t.$flags$ |= 128;
					}
					s();
					fireConnectedCallback(t.$lazyInstance$);
					if (a.style) {
						o = a.style;
						if (typeof o !== 'string') {
							o = o[(t.$modeName$ = computeMode(e))];
						}
						i = getScopeId(n, t.$modeName$);
						if (!styles.has(i)) {
							l = createTime('registerStyles', n.$tagName$);
							registerStyle(i, o, !!(n.$flags$ & 1));
							l();
						}
					}
					f.label = 3;
				case 3:
					u = t.$ancestorComponent$;
					c = function () {
						return scheduleUpdate(t, true);
					};
					if (u && u['s-rc']) {
						u['s-rc'].push(c);
					} else {
						c();
					}
					return [2];
			}
		});
	});
};
var fireConnectedCallback = function (e) {
	{
		safeCall(e, 'connectedCallback');
	}
};
var connectedCallback = function (e) {
	if ((plt.$flags$ & 1) === 0) {
		var t = getHostRef(e);
		var n = t.$cmpMeta$;
		var r = createTime('connectedCallback', n.$tagName$);
		if (!(t.$flags$ & 1)) {
			t.$flags$ |= 1;
			{
				var a = e;
				while ((a = a.parentNode || a.host)) {
					if (a['s-p']) {
						attachToAncestor(t, (t.$ancestorComponent$ = a));
						break;
					}
				}
			}
			if (n.$members$) {
				Object.entries(n.$members$).map(function (t) {
					var n = t[0],
						r = t[1][0];
					if (r & 31 && e.hasOwnProperty(n)) {
						var a = e[n];
						delete e[n];
						e[n] = a;
					}
				});
			}
			{
				initializeComponent(e, t, n);
			}
		} else {
			addHostEventListeners(e, t, n.$listeners$);
			fireConnectedCallback(t.$lazyInstance$);
		}
		r();
	}
};
var disconnectedCallback = function (e) {
	if ((plt.$flags$ & 1) === 0) {
		var t = getHostRef(e);
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
var bootstrapLazy = function (e, t) {
	if (t === void 0) {
		t = {};
	}
	var n = createTime();
	var r = [];
	var a = t.exclude || [];
	var s = win.customElements;
	var o = doc.head;
	var i = o.querySelector('meta[charset]');
	var l = doc.createElement('style');
	var u = [];
	var c;
	var f = true;
	Object.assign(plt, t);
	plt.$resourcesUrl$ = new URL(t.resourcesUrl || './', doc.baseURI).href;
	e.map(function (e) {
		e[1].map(function (t) {
			var n = { $flags$: t[0], $tagName$: t[1], $members$: t[2], $listeners$: t[3] };
			{
				n.$members$ = t[2];
			}
			{
				n.$listeners$ = t[3];
			}
			{
				n.$watchers$ = {};
			}
			var o = n.$tagName$;
			var i = (function (e) {
				__extends(t, e);
				function t(t) {
					var r = e.call(this, t) || this;
					t = r;
					registerHost(t, n);
					if (n.$flags$ & 1) {
						{
							{
								t.attachShadow({ mode: 'open' });
							}
						}
					}
					return r;
				}
				t.prototype.connectedCallback = function () {
					var e = this;
					if (c) {
						clearTimeout(c);
						c = null;
					}
					if (f) {
						u.push(this);
					} else {
						plt.jmp(function () {
							return connectedCallback(e);
						});
					}
				};
				t.prototype.disconnectedCallback = function () {
					var e = this;
					plt.jmp(function () {
						return disconnectedCallback(e);
					});
				};
				t.prototype.componentOnReady = function () {
					return getHostRef(this).$onReadyPromise$;
				};
				return t;
			})(HTMLElement);
			n.$lazyBundleId$ = e[0];
			if (!a.includes(o) && !s.get(o)) {
				r.push(o);
				s.define(o, proxyComponent(i, n, 1));
			}
		});
	});
	{
		l.innerHTML = r + HYDRATED_CSS;
		l.setAttribute('data-styles', '');
		o.insertBefore(l, i ? i.nextSibling : o.firstChild);
	}
	f = false;
	if (u.length) {
		u.map(function (e) {
			return e.connectedCallback();
		});
	} else {
		{
			plt.jmp(function () {
				return (c = setTimeout(appDidLoad, 30));
			});
		}
	}
	n();
};
var Fragment = function (e, t) {
	return t;
};
var addHostEventListeners = function (e, t, n, r) {
	if (n) {
		n.map(function (n) {
			var r = n[0],
				a = n[1],
				s = n[2];
			var o = getHostListenerTarget(e, r);
			var i = hostListenerProxy(t, s);
			var l = hostListenerOpts(r);
			plt.ael(o, a, i, l);
			(t.$rmListeners$ = t.$rmListeners$ || []).push(function () {
				return plt.rel(o, a, i, l);
			});
		});
	}
};
var hostListenerProxy = function (e, t) {
	return function (n) {
		try {
			{
				if (e.$flags$ & 256) {
					e.$lazyInstance$[t](n);
				} else {
					(e.$queuedListeners$ = e.$queuedListeners$ || []).push([t, n]);
				}
			}
		} catch (e) {
			consoleError(e);
		}
	};
};
var getHostListenerTarget = function (e, t) {
	if (t & 8) return win;
	return e;
};
var hostListenerOpts = function (e) {
	return (e & 2) !== 0;
};
var hostRefs = new WeakMap();
var getHostRef = function (e) {
	return hostRefs.get(e);
};
var registerInstance = function (e, t) {
	return hostRefs.set((t.$lazyInstance$ = e), t);
};
var registerHost = function (e, t) {
	var n = { $flags$: 0, $hostElement$: e, $cmpMeta$: t, $instanceValues$: new Map() };
	{
		n.$onInstancePromise$ = new Promise(function (e) {
			return (n.$onInstanceResolve$ = e);
		});
	}
	{
		n.$onReadyPromise$ = new Promise(function (e) {
			return (n.$onReadyResolve$ = e);
		});
		e['s-p'] = [];
		e['s-rc'] = [];
	}
	addHostEventListeners(e, n, t.$listeners$);
	return hostRefs.set(e, n);
};
var isMemberInElement = function (e, t) {
	return t in e;
};
var consoleError = function (e, t) {
	return (0, console.error)(e, t);
};
var cmpModules = new Map();
var loadModule = function (e, t, n) {
	var r = e.$tagName$.replace(/-/g, '_');
	var a = e.$lazyBundleId$;
	var s = cmpModules.get(a);
	if (s) {
		return s[r];
	}
	/*!__STENCIL_STATIC_IMPORT_SWITCH__*/ return import('./'.concat(a, '.entry.js').concat('')).then(function (e) {
		{
			cmpModules.set(a, e);
		}
		return e[r];
	}, consoleError);
};
var styles = new Map();
var modeResolutionChain = [];
var win = typeof window !== 'undefined' ? window : {};
var doc = win.document || { head: {} };
var plt = {
	$flags$: 0,
	$resourcesUrl$: '',
	jmp: function (e) {
		return e();
	},
	raf: function (e) {
		return requestAnimationFrame(e);
	},
	ael: function (e, t, n, r) {
		return e.addEventListener(t, n, r);
	},
	rel: function (e, t, n, r) {
		return e.removeEventListener(t, n, r);
	},
	ce: function (e, t) {
		return new CustomEvent(e, t);
	},
};
var promiseResolve = function (e) {
	return Promise.resolve(e);
};
var supportsConstructableStylesheets = (function () {
	try {
		new CSSStyleSheet();
		return typeof new CSSStyleSheet().replaceSync === 'function';
	} catch (e) {}
	return false;
})();
var queueDomReads = [];
var queueDomWrites = [];
var queueTask = function (e, t) {
	return function (n) {
		e.push(n);
		if (!queuePending) {
			queuePending = true;
			if (t && plt.$flags$ & 4) {
				nextTick(flush);
			} else {
				plt.raf(flush);
			}
		}
	};
};
var consume = function (e) {
	for (var t = 0; t < e.length; t++) {
		try {
			e[t](performance.now());
		} catch (e) {
			consoleError(e);
		}
	}
	e.length = 0;
};
var flush = function () {
	consume(queueDomReads);
	{
		consume(queueDomWrites);
		if ((queuePending = queueDomReads.length > 0)) {
			plt.raf(flush);
		}
	}
};
var nextTick = function (e) {
	return promiseResolve().then(e);
};
var writeTask = queueTask(queueDomWrites, true);
export {
	Fragment as F,
	getAssetPath as a,
	bootstrapLazy as b,
	createEvent as c,
	getElement as g,
	h,
	promiseResolve as p,
	registerInstance as r,
	setMode as s,
};
