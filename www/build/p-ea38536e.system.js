System.register([], function (e) {
	'use strict';
	return {
		execute: function () {
			e({ a: o, b: r, c: n, v: t });
			function r(e) {
				var r = typeof e !== 'string' || e === '';
				return r;
			}
			function n(e) {
				var r = typeof e !== 'object';
				return r;
			}
			function t(e, r) {
				return r.includes(e);
			}
			function o(e) {
				if (e) {
					var r = typeof e !== 'string' ? e.detail : e;
					if (r && (r === 'en' || r === 'fr')) return r;
					else return 'en';
				}
				return 'en';
			}
			var a = e('I', ['black', 'blue', 'grey', 'white']);
			function u(e) {
				return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e['default'] : e;
			}
			function i(e, r, n) {
				return (
					(n = {
						path: r,
						exports: {},
						require: function (e, r) {
							return c();
						},
					}),
					e(n, n.exports),
					n.exports
				);
			}
			function c() {
				throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
			}
			var l = i(function (e) {
				e.exports = (function (e) {
					var r = {};
					function n(t) {
						if (r[t]) return r[t].exports;
						var o = (r[t] = { i: t, l: !1, exports: {} });
						return e[t].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
					}
					return (
						(n.m = e),
						(n.c = r),
						(n.d = function (e, r, t) {
							n.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t });
						}),
						(n.r = function (e) {
							'undefined' != typeof Symbol &&
								Symbol.toStringTag &&
								Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
								Object.defineProperty(e, '__esModule', { value: !0 });
						}),
						(n.t = function (e, r) {
							if ((1 & r && (e = n(e)), 8 & r)) return e;
							if (4 & r && 'object' == typeof e && e && e.__esModule) return e;
							var t = Object.create(null);
							if (
								(n.r(t),
								Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
								2 & r && 'string' != typeof e)
							)
								for (var o in e)
									n.d(
										t,
										o,
										function (r) {
											return e[r];
										}.bind(null, o),
									);
							return t;
						}),
						(n.n = function (e) {
							var r =
								e && e.__esModule
									? function () {
											return e.default;
									  }
									: function () {
											return e;
									  };
							return n.d(r, 'a', r), r;
						}),
						(n.o = function (e, r) {
							return Object.prototype.hasOwnProperty.call(e, r);
						}),
						(n.p = ''),
						n((n.s = 0))
					);
				})([
					function (e, r, n) {
						n.r(r),
							n.d(r, 'validateHTMLColorName', function () {
								return u;
							}),
							n.d(r, 'validateHTMLColorSpecialName', function () {
								return i;
							}),
							n.d(r, 'validateHTMLColorHex', function () {
								return c;
							}),
							n.d(r, 'validateHTMLColorRgb', function () {
								return p;
							}),
							n.d(r, 'validateHTMLColorHsl', function () {
								return g;
							}),
							n.d(r, 'validateHTMLColorHwb', function () {
								return v;
							}),
							n.d(r, 'validateHTMLColorLab', function () {
								return m;
							}),
							n.d(r, 'validateHTMLColorLch', function () {
								return S;
							}),
							n.d(r, 'validateHTMLColor', function () {
								return L;
							});
						var t = function (e) {
								return e && 'string' == typeof e;
							},
							o = [
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
							a = ['currentColor', 'inherit', 'transparent'],
							u = function (e) {
								var r = !1;
								return (
									t(e) &&
										o.map(function (n) {
											return e.toLowerCase() === n.toLowerCase() && (r = !0), null;
										}),
									r
								);
							},
							i = function (e) {
								var r = !1;
								return (
									t(e) &&
										a.map(function (n) {
											return e.toLowerCase() === n.toLowerCase() && (r = !0), null;
										}),
									r
								);
							},
							c = function (e) {
								if (t(e)) {
									var r = /^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$/i;
									return e && r.test(e);
								}
								return !1;
							},
							l = '(([\\d]{0,5})((\\.([\\d]{1,5}))?))',
							d = '('.concat(l, '%)'),
							s = '(([0-9]|[1-9][0-9]|100)%)',
							f = '('.concat(s, '|(0?((\\.([\\d]{1,5}))?))|1)'),
							y = '([\\s]{0,5})\\)?)(([\\s]{0,5})(\\/?)([\\s]{1,5})'.concat(
								'((('.concat(s, '))|(0?((\\.([\\d]{1,5}))?))|1))?'),
								'([\\s]{0,5})\\)',
							),
							h = '(-?(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-5][0-9])((\\.([\\d]{1,5}))?)|360)(deg)?)',
							p = function (e) {
								if (t(e)) {
									var r = '([\\s]{0,5})([\\d]{1,5})%?([\\s]{0,5}),?',
										n = '((([\\s]{0,5}),?([\\s]{0,5}))|(([\\s]{1,5})))',
										o = new RegExp(
											'^(rgb)a?\\('
												.concat(''.concat(r).concat(n))
												.concat(''.concat(r).concat(n))
												.concat(''.concat(r).concat(n), '(')
												.concat('(\\/?([\\s]{0,5})(0?\\.?([\\d]{1,5})%?([\\s]{0,5}))?|1|0)', ')?\\)$'),
										);
									return e && o.test(e);
								}
								return !1;
							},
							g = function (e) {
								if (t(e)) {
									var r = new RegExp(
										'^(hsl)a?\\((([\\s]{0,5})('
											.concat(h, '|')
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
							v = function (e) {
								if (t(e)) {
									var r = new RegExp(
										'^(hwb\\(([\\s]{0,5})'
											.concat(h, '([\\s]{1,5}))((0|')
											.concat(s, ')([\\s]{1,5}))((0|')
											.concat(s, ')')
											.concat(y, '$'),
									);
									return e && r.test(e);
								}
								return !1;
							},
							m = function (e) {
								if (t(e)) {
									var r = '(-?(([0-9]|[1-9][0-9]|1[0-5][0-9])((\\.([\\d]{1,5}))?)?|160))',
										n = new RegExp(
											'^(lab\\(([\\s]{0,5})'
												.concat(d, '([\\s]{1,5})')
												.concat(r, '([\\s]{1,5})')
												.concat(r)
												.concat(y, '$'),
										);
									return e && n.test(e);
								}
								return !1;
							},
							S = function (e) {
								if (t(e)) {
									var r = '((([0-9]|[1-9][0-9])?((\\.([\\d]{1,5}))?)|100)(%)?)',
										n = '' + l,
										o = '(('
											.concat(h, ')|(0|')
											.concat(f, ')|(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-5][0-9])((\\.([\\d]{1,5}))?)|360))'),
										a = '(\\/([\\s]{0,5})'.concat(f, ')'),
										u = new RegExp(
											'^lch\\('.concat(
												'(([\\s]{0,5})'
													.concat(r, '([\\s]{1,5})')
													.concat(n, '([\\s]{1,5})')
													.concat(o, '([\\s]{0,5})(')
													.concat(a, ')?)'),
												'\\)$',
											),
										);
									return e && u.test(e);
								}
								return !1;
							},
							L = function (e) {
								return !!((e && c(e)) || p(e) || g(e) || v(e) || m(e) || S(e));
							};
						r.default = function (e) {
							return !!((e && c(e)) || u(e) || i(e) || p(e) || g(e) || v(e) || m(e) || S(e));
						};
					},
				]);
			});
			var d = e('d', u(l));
		},
	};
});
