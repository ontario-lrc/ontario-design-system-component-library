function validatePropExists(e) {
	var r = typeof e !== 'string' || e === '';
	return r;
}
function validateObjectExists(e) {
	var r = typeof e !== 'object';
	return r;
}
function validateValueAgainstArray(e, r) {
	return r.includes(e);
}
function validateLanguage(e) {
	if (e) {
		var r = typeof e !== 'string' ? e.detail : e;
		if (r && (r === 'en' || r === 'fr')) return r;
		else return 'en';
	}
	return 'en';
}
var IconColours = ['black', 'blue', 'grey', 'white'];
function getDefaultExportFromCjs(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e['default'] : e;
}
function createCommonjsModule(e, r, t) {
	return (
		(t = {
			path: r,
			exports: {},
			require: function (e, r) {
				return commonjsRequire();
			},
		}),
		e(t, t.exports),
		t.exports
	);
}
function commonjsRequire() {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}
var lib = createCommonjsModule(function (e) {
	e.exports = (function (e) {
		var r = {};
		function t(n) {
			if (r[n]) return r[n].exports;
			var a = (r[n] = { i: n, l: !1, exports: {} });
			return e[n].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
		}
		return (
			(t.m = e),
			(t.c = r),
			(t.d = function (e, r, n) {
				t.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: n });
			}),
			(t.r = function (e) {
				'undefined' != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
					Object.defineProperty(e, '__esModule', { value: !0 });
			}),
			(t.t = function (e, r) {
				if ((1 & r && (e = t(e)), 8 & r)) return e;
				if (4 & r && 'object' == typeof e && e && e.__esModule) return e;
				var n = Object.create(null);
				if ((t.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: e }), 2 & r && 'string' != typeof e))
					for (var a in e)
						t.d(
							n,
							a,
							function (r) {
								return e[r];
							}.bind(null, a),
						);
				return n;
			}),
			(t.n = function (e) {
				var r =
					e && e.__esModule
						? function () {
								return e.default;
						  }
						: function () {
								return e;
						  };
				return t.d(r, 'a', r), r;
			}),
			(t.o = function (e, r) {
				return Object.prototype.hasOwnProperty.call(e, r);
			}),
			(t.p = ''),
			t((t.s = 0))
		);
	})([
		function (e, r, t) {
			t.r(r),
				t.d(r, 'validateHTMLColorName', function () {
					return i;
				}),
				t.d(r, 'validateHTMLColorSpecialName', function () {
					return u;
				}),
				t.d(r, 'validateHTMLColorHex', function () {
					return l;
				}),
				t.d(r, 'validateHTMLColorRgb', function () {
					return y;
				}),
				t.d(r, 'validateHTMLColorHsl', function () {
					return v;
				}),
				t.d(r, 'validateHTMLColorHwb', function () {
					return h;
				}),
				t.d(r, 'validateHTMLColorLab', function () {
					return m;
				}),
				t.d(r, 'validateHTMLColorLch', function () {
					return L;
				}),
				t.d(r, 'validateHTMLColor', function () {
					return S;
				});
			var n = function (e) {
					return e && 'string' == typeof e;
				},
				a = [
					'AliceBlue',
					'AntiqueWhite',
					'Aqua',
					'Aquamarine',
					'Azure',
					'Beige',
					'Bisque',
					'Black',
					'BlanchedAlmond',
					'Blue',
					'BlueViolet',
					'Brown',
					'BurlyWood',
					'CadetBlue',
					'Chartreuse',
					'Chocolate',
					'Coral',
					'CornflowerBlue',
					'Cornsilk',
					'Crimson',
					'Cyan',
					'DarkBlue',
					'DarkCyan',
					'DarkGoldenrod',
					'DarkGray',
					'DarkGrey',
					'DarkGreen',
					'DarkKhaki',
					'DarkMagenta',
					'DarkOliveGreen',
					'DarkOrange',
					'DarkOrchid',
					'DarkRed',
					'DarkSalmon',
					'DarkSeaGreen',
					'DarkSlateBlue',
					'DarkSlateGray',
					'DarkSlateGrey',
					'DarkTurquoise',
					'DarkViolet',
					'DeepPink',
					'DeepSkyBlue',
					'DimGray',
					'DimGrey',
					'DodgerBlue',
					'FireBrick',
					'FloralWhite',
					'ForestGreen',
					'Fuchsia',
					'Gainsboro',
					'GhostWhite',
					'Gold',
					'Goldenrod',
					'Gray',
					'Grey',
					'Green',
					'GreenYellow',
					'HoneyDew',
					'HotPink',
					'IndianRed',
					'Indigo',
					'Ivory',
					'Khaki',
					'Lavender',
					'LavenderBlush',
					'LawnGreen',
					'LemonChiffon',
					'LightBlue',
					'LightCoral',
					'LightCyan',
					'LightGoldenrodYellow',
					'LightGray',
					'LightGrey',
					'LightGreen',
					'LightPink',
					'LightSalmon',
					'LightSalmon',
					'LightSeaGreen',
					'LightSkyBlue',
					'LightSlateGray',
					'LightSlateGrey',
					'LightSteelBlue',
					'LightYellow',
					'Lime',
					'LimeGreen',
					'Linen',
					'Magenta',
					'Maroon',
					'MediumAquamarine',
					'MediumBlue',
					'MediumOrchid',
					'MediumPurple',
					'MediumSeaGreen',
					'MediumSlateBlue',
					'MediumSlateBlue',
					'MediumSpringGreen',
					'MediumTurquoise',
					'MediumVioletRed',
					'MidnightBlue',
					'MintCream',
					'MistyRose',
					'Moccasin',
					'NavajoWhite',
					'Navy',
					'OldLace',
					'Olive',
					'OliveDrab',
					'Orange',
					'OrangeRed',
					'Orchid',
					'PaleGoldenrod',
					'PaleGreen',
					'PaleTurquoise',
					'PaleVioletRed',
					'PapayaWhip',
					'PeachPuff',
					'Peru',
					'Pink',
					'Plum',
					'PowderBlue',
					'Purple',
					'RebeccaPurple',
					'Red',
					'RosyBrown',
					'RoyalBlue',
					'SaddleBrown',
					'Salmon',
					'SandyBrown',
					'SeaGreen',
					'SeaShell',
					'Sienna',
					'Silver',
					'SkyBlue',
					'SlateBlue',
					'SlateGray',
					'SlateGrey',
					'Snow',
					'SpringGreen',
					'SteelBlue',
					'Tan',
					'Teal',
					'Thistle',
					'Tomato',
					'Turquoise',
					'Violet',
					'Wheat',
					'White',
					'WhiteSmoke',
					'Yellow',
					'YellowGreen',
				],
				o = ['currentColor', 'inherit', 'transparent'],
				i = function (e) {
					var r = !1;
					return (
						n(e) &&
							a.map(function (t) {
								return e.toLowerCase() === t.toLowerCase() && (r = !0), null;
							}),
						r
					);
				},
				u = function (e) {
					var r = !1;
					return (
						n(e) &&
							o.map(function (t) {
								return e.toLowerCase() === t.toLowerCase() && (r = !0), null;
							}),
						r
					);
				},
				l = function (e) {
					if (n(e)) {
						var r = /^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$/i;
						return e && r.test(e);
					}
					return !1;
				},
				c = '(([\\d]{0,5})((\\.([\\d]{1,5}))?))',
				d = '('.concat(c, '%)'),
				s = '(([0-9]|[1-9][0-9]|100)%)',
				f = '('.concat(s, '|(0?((\\.([\\d]{1,5}))?))|1)'),
				g = '([\\s]{0,5})\\)?)(([\\s]{0,5})(\\/?)([\\s]{1,5})'.concat(
					'((('.concat(s, '))|(0?((\\.([\\d]{1,5}))?))|1))?'),
					'([\\s]{0,5})\\)',
				),
				p = '(-?(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-5][0-9])((\\.([\\d]{1,5}))?)|360)(deg)?)',
				y = function (e) {
					if (n(e)) {
						var r = '([\\s]{0,5})([\\d]{1,5})%?([\\s]{0,5}),?',
							t = '((([\\s]{0,5}),?([\\s]{0,5}))|(([\\s]{1,5})))',
							a = new RegExp(
								'^(rgb)a?\\('
									.concat(''.concat(r).concat(t))
									.concat(''.concat(r).concat(t))
									.concat(''.concat(r).concat(t), '(')
									.concat('(\\/?([\\s]{0,5})(0?\\.?([\\d]{1,5})%?([\\s]{0,5}))?|1|0)', ')?\\)$'),
							);
						return e && a.test(e);
					}
					return !1;
				},
				v = function (e) {
					if (n(e)) {
						var r = new RegExp(
							'^(hsl)a?\\((([\\s]{0,5})('
								.concat(p, '|')
								.concat('(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-9][0-9]|400)grad)', '|')
								.concat('((([0-5])?\\.([\\d]{1,5})|6\\.([0-9]|1[0-9]|2[0-8])|[0-6])rad)', '|')
								.concat(
									'((0?((\\.([\\d]{1,5}))?)|1)turn)',
									')((([\\s]{0,5}),([\\s]{0,5}))|(([\\s]{1,5}))))(([\\s]{0,5})(0|',
								)
								.concat(s, ')((([\\s]{0,5}),([\\s]{0,5}))|(([\\s]{1,5}))))(([\\s]{0,5})(0|')
								.concat(s, ')([\\s]{0,5})\\)?)(([\\s]{0,5})(\\/?|,?)([\\s]{0,5})(((')
								.concat(s, '))|(0?((\\.([\\d]{1,5}))?))|1))?\\)$'),
						);
						return e && r.test(e);
					}
					return !1;
				},
				h = function (e) {
					if (n(e)) {
						var r = new RegExp(
							'^(hwb\\(([\\s]{0,5})'
								.concat(p, '([\\s]{1,5}))((0|')
								.concat(s, ')([\\s]{1,5}))((0|')
								.concat(s, ')')
								.concat(g, '$'),
						);
						return e && r.test(e);
					}
					return !1;
				},
				m = function (e) {
					if (n(e)) {
						var r = '(-?(([0-9]|[1-9][0-9]|1[0-5][0-9])((\\.([\\d]{1,5}))?)?|160))',
							t = new RegExp(
								'^(lab\\(([\\s]{0,5})'.concat(d, '([\\s]{1,5})').concat(r, '([\\s]{1,5})').concat(r).concat(g, '$'),
							);
						return e && t.test(e);
					}
					return !1;
				},
				L = function (e) {
					if (n(e)) {
						var r = '((([0-9]|[1-9][0-9])?((\\.([\\d]{1,5}))?)|100)(%)?)',
							t = '' + c,
							a = '(('
								.concat(p, ')|(0|')
								.concat(f, ')|(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-5][0-9])((\\.([\\d]{1,5}))?)|360))'),
							o = '(\\/([\\s]{0,5})'.concat(f, ')'),
							i = new RegExp(
								'^lch\\('.concat(
									'(([\\s]{0,5})'
										.concat(r, '([\\s]{1,5})')
										.concat(t, '([\\s]{1,5})')
										.concat(a, '([\\s]{0,5})(')
										.concat(o, ')?)'),
									'\\)$',
								),
							);
						return e && i.test(e);
					}
					return !1;
				},
				S = function (e) {
					return !!((e && l(e)) || y(e) || v(e) || h(e) || m(e) || L(e));
				};
			r.default = function (e) {
				return !!((e && l(e)) || i(e) || u(e) || y(e) || v(e) || h(e) || m(e) || L(e));
			};
		},
	]);
});
var validateColor = getDefaultExportFromCjs(lib);
export {
	IconColours as I,
	validateLanguage as a,
	validatePropExists as b,
	validateObjectExists as c,
	validateColor as d,
	validateValueAgainstArray as v,
};
