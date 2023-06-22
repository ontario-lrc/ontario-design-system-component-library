function validatePropExists(newValue) {
	// Check if new value that is passed in is a string and is not empty
	const isNewValueBlank = typeof newValue !== 'string' || newValue === '';
	// Return true if new value is both a string and is not empty
	return isNewValueBlank;
}
function validateObjectExists(newValue) {
	// Check if new value that is passed in is a string and is not empty
	const isNewValueBlank = typeof newValue !== 'object';
	// Return true if new value is both a string and is not empty
	return isNewValueBlank;
}
/**
 * Validate value against keys
 * @param value value to be compared against keys
 * @param keys of values provided by caller
 * @returns true if a match is found or false if no matches are found
 */
function validateValueAgainstArray(value, keys) {
	return keys.includes(value);
}
function validateLanguage(language) {
	if (language) {
		const toggledLanguage = typeof language !== 'string' ? language.detail : language;
		if (toggledLanguage && (toggledLanguage === 'en' || toggledLanguage === 'fr')) return toggledLanguage;
		else return 'en';
	}
	return 'en';
}

const IconColours = ['black', 'blue', 'grey', 'white'];

function getDefaultExportFromCjs(x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return (
		(module = {
			path: basedir,
			exports: {},
			require: function (path, base) {
				return commonjsRequire();
			},
		}),
		fn(module, module.exports),
		module.exports
	);
}

function commonjsRequire() {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var lib = createCommonjsModule(function (module) {
	module.exports = (function (e) {
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
					return l;
				}),
				t.d(r, 'validateHTMLColorSpecialName', function () {
					return i;
				}),
				t.d(r, 'validateHTMLColorHex', function () {
					return u;
				}),
				t.d(r, 'validateHTMLColorRgb', function () {
					return g;
				}),
				t.d(r, 'validateHTMLColorHsl', function () {
					return y;
				}),
				t.d(r, 'validateHTMLColorHwb', function () {
					return L;
				}),
				t.d(r, 'validateHTMLColorLab', function () {
					return S;
				}),
				t.d(r, 'validateHTMLColorLch', function () {
					return m;
				}),
				t.d(r, 'validateHTMLColor', function () {
					return G;
				});
			const n = (e) => e && 'string' == typeof e,
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
				l = (e) => {
					let r = !1;
					return n(e) && a.map((t) => (e.toLowerCase() === t.toLowerCase() && (r = !0), null)), r;
				},
				i = (e) => {
					let r = !1;
					return n(e) && o.map((t) => (e.toLowerCase() === t.toLowerCase() && (r = !0), null)), r;
				},
				u = (e) => {
					if (n(e)) {
						const r = /^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$/i;
						return e && r.test(e);
					}
					return !1;
				},
				d = '(([\\d]{0,5})((\\.([\\d]{1,5}))?))',
				s = `(${d}%)`,
				c = '(([0-9]|[1-9][0-9]|100)%)',
				f = `(${c}|(0?((\\.([\\d]{1,5}))?))|1)`,
				h = `([\\s]{0,5})\\)?)(([\\s]{0,5})(\\/?)([\\s]{1,5})${`(((${c}))|(0?((\\.([\\d]{1,5}))?))|1))?`}([\\s]{0,5})\\)`,
				$ = '(-?(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-5][0-9])((\\.([\\d]{1,5}))?)|360)(deg)?)',
				g = (e) => {
					if (n(e)) {
						const r = '([\\s]{0,5})([\\d]{1,5})%?([\\s]{0,5}),?',
							t = '((([\\s]{0,5}),?([\\s]{0,5}))|(([\\s]{1,5})))',
							n = new RegExp(
								`^(rgb)a?\\(${`${r}${t}`}${`${r}${t}`}${`${r}${t}`}(${'(\\/?([\\s]{0,5})(0?\\.?([\\d]{1,5})%?([\\s]{0,5}))?|1|0)'})?\\)$`,
							);
						return e && n.test(e);
					}
					return !1;
				},
				y = (e) => {
					if (n(e)) {
						const r = new RegExp(
							`^(hsl)a?\\((([\\s]{0,5})(${$}|${'(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-9][0-9]|400)grad)'}|${'((([0-5])?\\.([\\d]{1,5})|6\\.([0-9]|1[0-9]|2[0-8])|[0-6])rad)'}|${'((0?((\\.([\\d]{1,5}))?)|1)turn)'})((([\\s]{0,5}),([\\s]{0,5}))|(([\\s]{1,5}))))(([\\s]{0,5})(0|${c})((([\\s]{0,5}),([\\s]{0,5}))|(([\\s]{1,5}))))(([\\s]{0,5})(0|${c})([\\s]{0,5})\\)?)(([\\s]{0,5})(\\/?|,?)([\\s]{0,5})(((${c}))|(0?((\\.([\\d]{1,5}))?))|1))?\\)$`,
						);
						return e && r.test(e);
					}
					return !1;
				},
				L = (e) => {
					if (n(e)) {
						const r = new RegExp(`^(hwb\\(([\\s]{0,5})${$}([\\s]{1,5}))((0|${c})([\\s]{1,5}))((0|${c})${h}$`);
						return e && r.test(e);
					}
					return !1;
				},
				S = (e) => {
					if (n(e)) {
						const r = '(-?(([0-9]|[1-9][0-9]|1[0-5][0-9])((\\.([\\d]{1,5}))?)?|160))',
							t = new RegExp(`^(lab\\(([\\s]{0,5})${s}([\\s]{1,5})${r}([\\s]{1,5})${r}${h}$`);
						return e && t.test(e);
					}
					return !1;
				},
				m = (e) => {
					if (n(e)) {
						const r = '((([0-9]|[1-9][0-9])?((\\.([\\d]{1,5}))?)|100)(%)?)',
							t = '' + d,
							n = `((${$})|(0|${f})|(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-5][0-9])((\\.([\\d]{1,5}))?)|360))`,
							a = `(\\/([\\s]{0,5})${f})`,
							o = new RegExp(`^lch\\(${`(([\\s]{0,5})${r}([\\s]{1,5})${t}([\\s]{1,5})${n}([\\s]{0,5})(${a})?)`}\\)$`);
						return e && o.test(e);
					}
					return !1;
				},
				G = (e) => !!((e && u(e)) || g(e) || y(e) || L(e) || S(e) || m(e));
			r.default = (e) => !!((e && u(e)) || l(e) || i(e) || g(e) || y(e) || L(e) || S(e) || m(e));
		},
	]);
});

const validateColor = /*@__PURE__*/ getDefaultExportFromCjs(lib);

export {
	IconColours as I,
	validateLanguage as a,
	validatePropExists as b,
	validateObjectExists as c,
	validateColor as d,
	validateValueAgainstArray as v,
};
