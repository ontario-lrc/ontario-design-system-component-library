var __awaiter =
	(this && this.__awaiter) ||
	function (t, o, e, i) {
		function a(t) {
			return t instanceof e
				? t
				: new e(function (o) {
						o(t);
				  });
		}
		return new (e || (e = Promise))(function (e, n) {
			function r(t) {
				try {
					s(i.next(t));
				} catch (t) {
					n(t);
				}
			}
			function l(t) {
				try {
					s(i['throw'](t));
				} catch (t) {
					n(t);
				}
			}
			function s(t) {
				t.done ? e(t.value) : a(t.value).then(r, l);
			}
			s((i = i.apply(t, o || [])).next());
		});
	};
var __generator =
	(this && this.__generator) ||
	function (t, o) {
		var e = {
				label: 0,
				sent: function () {
					if (n[0] & 1) throw n[1];
					return n[1];
				},
				trys: [],
				ops: [],
			},
			i,
			a,
			n,
			r;
		return (
			(r = { next: l(0), throw: l(1), return: l(2) }),
			typeof Symbol === 'function' &&
				(r[Symbol.iterator] = function () {
					return this;
				}),
			r
		);
		function l(t) {
			return function (o) {
				return s([t, o]);
			};
		}
		function s(r) {
			if (i) throw new TypeError('Generator is already executing.');
			while (e)
				try {
					if (
						((i = 1),
						a &&
							(n = r[0] & 2 ? a['return'] : r[0] ? a['throw'] || ((n = a['return']) && n.call(a), 0) : a.next) &&
							!(n = n.call(a, r[1])).done)
					)
						return n;
					if (((a = 0), n)) r = [r[0] & 2, n.value];
					switch (r[0]) {
						case 0:
						case 1:
							n = r;
							break;
						case 4:
							e.label++;
							return { value: r[1], done: false };
						case 5:
							e.label++;
							a = r[1];
							r = [0];
							continue;
						case 7:
							r = e.ops.pop();
							e.trys.pop();
							continue;
						default:
							if (!((n = e.trys), (n = n.length > 0 && n[n.length - 1])) && (r[0] === 6 || r[0] === 2)) {
								e = 0;
								continue;
							}
							if (r[0] === 3 && (!n || (r[1] > n[0] && r[1] < n[3]))) {
								e.label = r[1];
								break;
							}
							if (r[0] === 6 && e.label < n[1]) {
								e.label = n[1];
								n = r;
								break;
							}
							if (n && e.label < n[2]) {
								e.label = n[2];
								e.ops.push(r);
								break;
							}
							if (n[2]) e.ops.pop();
							e.trys.pop();
							continue;
					}
					r = o.call(t, e);
				} catch (t) {
					r = [6, t];
					a = 0;
				} finally {
					i = n = 0;
				}
			if (r[0] & 5) throw r[1];
			return { value: r[0] ? r[1] : void 0, done: true };
		}
	};
import {
	h,
	r as registerInstance,
	g as getElement,
	c as createEvent,
	a as getAssetPath,
	F as Fragment,
} from './index-3675b4ba.js';
import {
	v as validateValueAgainstArray,
	a as validateLanguage,
	b as validatePropExists,
	c as validateObjectExists,
	I as IconColours,
	d as validateColor,
} from './index-12fd087d.js';
import { C as ConsoleMessageClass, a as ConsoleType } from './console-message-b539abf6.js';
var HeadingLevel = ['h2', 'h3', 'h4', 'h5', 'h6'];
var HighlightColours = ['teal', 'gold', 'yellow', 'taupe', 'green', 'lime', 'sky', 'blue', 'purple'];
var HeadingContentTypes = ['string', 'html'];
var isValidHighlightColour = function (t) {
	return HighlightColours.includes(t);
};
var isValidHeadingLevel = function (t) {
	return HeadingLevel.includes(t);
};
var generateClasses = function (t, o) {
	var e = t === 'callout' ? 'ontario-callout' : 'ontario-aside';
	var i = 'ontario-border-highlight--'.concat(o);
	return o ? ''.concat(e, ' ').concat(i) : ''.concat(e);
};
var generateHeading = function (t, o, e, i) {
	var a = e === 'html';
	switch (o) {
		case 'h2':
			return a
				? h('h2', { class: 'ontario-'.concat(t, '__title ontario-h5'), innerHTML: i })
				: h('h2', { class: 'ontario-'.concat(t, '__title ontario-h5') }, i);
		case 'h3':
			return a
				? h('h3', { class: 'ontario-'.concat(t, '__title ontario-h5'), innerHTML: i })
				: h('h3', { class: 'ontario-'.concat(t, '__title ontario-h5') }, i);
		case 'h4':
			return a
				? h('h4', { class: 'ontario-'.concat(t, '__title ontario-h5'), innerHTML: i })
				: h('h4', { class: 'ontario-'.concat(t, '__title ontario-h5') }, i);
		case 'h5':
			return a
				? h('h5', { class: 'ontario-'.concat(t, '__title ontario-h5'), innerHTML: i })
				: h('h5', { class: 'ontario-'.concat(t, '__title ontario-h5') }, i);
		case 'h6':
			return a
				? h('h6', { class: 'ontario-'.concat(t, '__title ontario-h5'), innerHTML: i })
				: h('h6', { class: 'ontario-'.concat(t, '__title ontario-h5') }, i);
		default:
			return a
				? h('h2', { class: 'ontario-'.concat(t, '__title ontario-h5'), innerHTML: i })
				: h('h2', { class: 'ontario-'.concat(t, '__title ontario-h5') }, i);
	}
};
var generateCalloutAside = function (t, o, e, i, a, n) {
	var r = typeof a === 'string';
	return t === 'callout'
		? h('div', { class: generateClasses(t, n) }, generateHeading(t, o, e, i), r ? h('p', null, a) : h('slot', null))
		: h('aside', { class: generateClasses(t, n) }, generateHeading(t, o, e, i), r ? h('p', null, a) : h('slot', null));
};
var ontarioAsideCss =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-aside{border-left:0.25rem solid #367A76;padding:1.5rem;margin:2rem 0 2.5rem 2rem}.ontario-aside *{max-width:48rem}.ontario-aside *:last-child{margin-bottom:0.5rem}@media screen and (max-width: 40em){.ontario-aside .ontario-aside{margin:2rem 0 2.5rem 1rem}}.ontario-aside__title{margin:0 0 1rem}.ontario-border-highlight--teal{border-color:#367A76 !important}.ontario-border-highlight--gold{border-color:#86743D !important}.ontario-border-highlight--yellow{border-color:#8A600D !important}.ontario-border-highlight--taupe{border-color:#7B725C !important}.ontario-border-highlight--green{border-color:#2B8737 !important}.ontario-border-highlight--lime{border-color:#5F8129 !important}.ontario-border-highlight--sky{border-color:#1080A6 !important}.ontario-border-highlight--blue{border-color:#0369ac !important}.ontario-border-highlight--purple{border-color:#92278F !important}';
var OntarioAside = (function () {
	function t(t) {
		registerInstance(this, t);
		this.headingType = undefined;
		this.headingContentType = undefined;
		this.headingContent = undefined;
		this.content = undefined;
		this.highlightColour = 'teal';
	}
	t.prototype.validateHeadingType = function () {
		if (isValidHeadingLevel(this.headingType)) return this.headingType;
		var t = new ConsoleMessageClass();
		return t
			.addDesignSystemTag()
			.addMonospaceText(' headingType '.concat(this.headingType, ' '))
			.addRegularText('for')
			.addMonospaceText(' <ontario-aside> ')
			.addRegularText('is not a valid type. Please ensure your heading type matches one of the headingType types.')
			.printMessage();
	};
	t.prototype.validateHeadingContentType = function () {
		var t = validateValueAgainstArray(this.headingContentType, HeadingContentTypes);
		if (t) {
			return this.headingContentType;
		} else {
			return this.warnDefaultType();
		}
	};
	t.prototype.validateHeadingContent = function () {
		if (!this.headingContent) {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' headingContent ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-aside> ')
				.addRegularText('was not provided.')
				.printMessage();
		}
	};
	t.prototype.validateHighlightColour = function () {
		if (this.highlightColour) {
			if (isValidHighlightColour(this.highlightColour)) return this.highlightColour;
			else {
				var t = new ConsoleMessageClass();
				t.addDesignSystemTag()
					.addMonospaceText(' highlightColour '.concat(this.highlightColour, ' '))
					.addRegularText('for')
					.addMonospaceText(' <ontario-aside> ')
					.addRegularText(
						'does not match one of the valid highlightColour types. A default colour of `teal` will be applied.',
					)
					.printMessage();
			}
		}
		return 'teal';
	};
	t.prototype.warnDefaultType = function () {
		var t = new ConsoleMessageClass();
		t.addDesignSystemTag()
			.addMonospaceText(' headingContentType ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-aside> ')
			.addRegularText('was set to an invalid type; only')
			.addMonospaceText(' string or html ')
			.addRegularText('are supported. The default type')
			.addMonospaceText(' string ')
			.addRegularText('is assumed.')
			.printMessage();
		return (this.headingContentType = 'string');
	};
	t.prototype.componentWillLoad = function () {
		this.validateHighlightColour();
		this.validateHeadingContent();
		this.validateHeadingType();
		this.validateHeadingContentType();
	};
	t.prototype.render = function () {
		return generateCalloutAside(
			'aside',
			this.headingType,
			this.headingContentType,
			this.headingContent,
			this.content,
			this.highlightColour,
		);
	};
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return {
				headingType: ['validateHeadingType'],
				headingContentType: ['validateHeadingContentType'],
				headingContent: ['validateHeadingContent'],
				highlightColour: ['validateHighlightColour'],
			};
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioAside.style = ontarioAsideCss;
var OntarioIconArrowUp =
	'<svg class="ontario-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>\n';
var required = { en: 'required', fr: 'obligatoire' };
var optional = { en: 'optional', fr: 'facultative' };
var accessibility = {
	moreInfo: { en: 'More information on', fr: 'Des renseignements supplémentaires sur' },
	checkboxHintExpander: {
		en: 'is available after the last checkbox item.',
		fr: 'suivront à la dernière case à cocher.',
	},
	singleHintExpander: { en: 'field is available in the next element.', fr: 'suivront au prochain élément.' },
};
var backToTop = {
	top: { en: 'Top', fr: 'Haut' },
	ariaLabel: { en: 'Scroll back to the top', fr: 'Retour en haut de la page' },
};
var loading = { en: 'Loading', fr: 'Chargement' };
var dropdownList = { select: { en: 'Select', fr: 'Sélectionner' } };
var contactUs = { en: 'Contact us', fr: 'Contactez-nous' };
var accessibilityLink = {
	text: { en: 'Accessibility', fr: 'Accessibilité' },
	link: { en: 'https://www.ontario.ca/page/accessibility', fr: 'https://www.ontario.ca/fr/page/accessibilite' },
};
var privacyLink = {
	text: { en: 'Privacy', fr: 'Confidentialité' },
	link: {
		en: 'https://www.ontario.ca/page/privacy-statement',
		fr: 'https://www.ontario.ca/fr/page/declaration-concernant-la-protection-de-la-vie-privee',
	},
};
var printerLink = {
	text: { en: "King's Printer for Ontario,", fr: 'Imprimeur du Roi pour l’Ontario,' },
	link: {
		en: 'https://www.ontario.ca/page/copyright-information',
		fr: 'https://www.ontario.ca/fr/page/droits-dauteur',
	},
};
var languageToggle = { ariaLabel: { en: 'Switch language to French', fr: 'Changer la langue en anglais' } };
var stepIndicator = {
	back: { en: 'Back', fr: 'Retour' },
	step: { en: 'Step', fr: 'Étape' },
	of: { en: 'of', fr: 'sur' },
	complete: { en: 'complete', fr: 'complet' },
};
var translations = {
	required: required,
	optional: optional,
	accessibility: accessibility,
	backToTop: backToTop,
	loading: loading,
	dropdownList: dropdownList,
	contactUs: contactUs,
	accessibilityLink: accessibilityLink,
	privacyLink: privacyLink,
	printerLink: printerLink,
	languageToggle: languageToggle,
	stepIndicator: stepIndicator,
};
var ontarioBackToTopCss =
	'.ontario-back-to-top{position:fixed;bottom:5%;right:2%;visibility:hidden;opacity:0;-webkit-transition:0.1s ease-in-out;transition:0.1s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:3rem;padding:0.5rem 1rem 0.5rem 0.75rem;background:#e6e6e6;border:0.125rem solid #FFFFFF;border-radius:4px;-webkit-box-shadow:0 0.125rem 0.25rem rgba(26, 26, 26, 0.6);box-shadow:0 0.125rem 0.25rem rgba(26, 26, 26, 0.6);-webkit-box-sizing:border-box;box-sizing:border-box;color:#1a1a1a;line-height:1.25rem;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:600;z-index:10000;cursor:pointer}.ontario-back-to-top .ontario-icon{margin:0.125rem 0.5rem 0 0;width:2rem;height:2rem}.ontario-back-to-top:hover{background-color:#cccccc}.ontario-back-to-top:focus{background-color:#e6e6e6;-webkit-box-shadow:0 0 0 0.25rem #009ADB, 0 0.1875rem 0.3125rem 0.1875rem rgba(0, 0, 0, 0.6);box-shadow:0 0 0 0.25rem #009ADB, 0 0.1875rem 0.3125rem 0.1875rem rgba(0, 0, 0, 0.6);outline:0.25rem solid transparent;-webkit-transition:0.1s ease-in-out;transition:0.1s ease-in-out}.ontario-back-to-top:active{background-color:#b2b2b2;-webkit-box-shadow:0 0 0 0.25rem #009ADB, 0 0.3125rem 0.4375rem 0.1875rem rgba(0, 0, 0, 0.6);box-shadow:0 0 0 0.25rem #009ADB, 0 0.3125rem 0.4375rem 0.1875rem rgba(0, 0, 0, 0.6);outline:0.25rem solid transparent;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}@media screen and (max-width: 73em){.ontario-back-to-top{-ms-flex-direction:column;flex-direction:column;height:4.75rem;padding:0.375rem 0.75rem 0.5625rem 0.75rem}.ontario-back-to-top .ontario-icon{margin:0.0625rem 0 0.25rem 0;width:2rem;height:2rem}}@media screen and (max-width: 40em){.ontario-back-to-top{display:block;padding:0.25rem;font-size:0;width:3rem;height:3rem}.ontario-back-to-top .ontario-icon{margin:0.5rem 0 0 0}@-moz-document url-prefix(){.ontario-back-to-top .ontario-icon{margin-top:0.125rem}}}.ontario-back-to-top.active{visibility:visible;opacity:1}';
var OntarioBackToTop = (function () {
	function t(t) {
		registerInstance(this, t);
		this.language = 'en';
		this.translations = translations;
		this.displayBackToTop = false;
		this.scrollYValue = 200;
	}
	t.prototype.showBackToTopButton = function () {
		this.displayBackToTop = window.scrollY > this.scrollYValue;
	};
	t.prototype.handleSetAppLanguage = function (t) {
		this.language = validateLanguage(t);
	};
	t.prototype.handleHeaderLanguageToggled = function (t) {
		this.language = validateLanguage(t);
	};
	t.prototype.scrollToTop = function () {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	};
	t.prototype.componentWillLoad = function () {
		this.language = validateLanguage(this.language);
	};
	t.prototype.render = function () {
		return h(
			'button',
			{
				'class': this.displayBackToTop ? 'ontario-back-to-top active' : 'ontario-back-to-top',
				'onClick': this.scrollToTop,
				'aria-label': this.translations.backToTop.ariaLabel[''.concat(this.language)],
			},
			h('span', { 'aria-hidden': 'true', 'innerHTML': OntarioIconArrowUp }),
			this.translations.backToTop.top[''.concat(this.language)],
		);
	};
	Object.defineProperty(t.prototype, 'element', {
		get: function () {
			return getElement(this);
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioBackToTop.style = ontarioBackToTopCss;
var ontarioBlockquoteCss =
	'@charset "UTF-8";.ontario-blockquote{border-left:4px solid #4d4d4d;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:400;letter-spacing:0.025rem;line-height:1.56;max-width:48rem;margin:2rem;padding:1.5rem 0 1.5rem 1.5rem;quotes:"“" "”"}@media screen and (max-width: 40em){.ontario-blockquote{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.5;margin:1.5rem 0 2rem 0}}.ontario-blockquote p{margin:0 0 1.5rem 0}.ontario-blockquote p::before{content:open-quote}.ontario-blockquote p::after{content:close-quote}.ontario-blockquote--short{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.5}@media screen and (max-width: 40em){.ontario-blockquote--short{font-size:1.4375rem;line-height:1.43}}.ontario-blockquote__attribution,.ontario-blockquote__byline{display:block;font-size:1rem;letter-spacing:0.025rem;line-height:1.56;text-align:right}@media screen and (max-width: 40em){.ontario-blockquote__attribution,.ontario-blockquote__byline{letter-spacing:0.03rem;line-height:1.5}}.ontario-blockquote__attribution{font-style:normal;font-weight:700}.ontario-blockquote__attribution::before{content:"— "}html[lang=fr] blockquote{quotes:"« " " »"}';
var OntarioBlockquote = (function () {
	function t(t) {
		registerInstance(this, t);
		this.quote = undefined;
		this.attribution = undefined;
		this.byline = undefined;
		this.shortQuoteLength = 140;
		this.shortQuote = false;
		this.quoteState = undefined;
	}
	t.prototype.validateQuote = function () {
		var t, o, e, i;
		this.quoteState =
			(o = (t = this.quote) !== null && t !== void 0 ? t : this.host.textContent) !== null && o !== void 0 ? o : '';
		this.validateQuoteContent(this.quoteState);
		this.shortQuote =
			(i = ((e = this.quoteState) === null || e === void 0 ? void 0 : e.length) <= this.shortQuoteLength) !== null &&
			i !== void 0
				? i
				: true;
	};
	t.prototype.validateQuoteContent = function (t) {
		if (validatePropExists(t)) {
			var o = new ConsoleMessageClass();
			o.addDesignSystemTag()
				.addMonospaceText(' quote ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-blockquote> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	};
	t.prototype.componentWillLoad = function () {
		this.validateQuote();
	};
	t.prototype.componentDidLoad = function () {
		var t = this;
		var o = new MutationObserver(function (o) {
			o.forEach(function (o) {
				if (o.type === 'attributes') {
					t.validateQuote();
				}
			});
		});
		var e = { attributes: true };
		o.observe(this.host, e);
	};
	t.prototype.render = function () {
		return h(
			'blockquote',
			{ class: this.shortQuote ? 'ontario-blockquote ontario-blockquote--short' : 'ontario-blockquote' },
			h('p', null, this.quoteState),
			this.attribution && h('cite', { class: 'ontario-blockquote__attribution' }, this.attribution),
			this.byline && h('cite', { class: 'ontario-blockquote__byline' }, this.byline),
		);
	};
	Object.defineProperty(t.prototype, 'host', {
		get: function () {
			return getElement(this);
		},
		enumerable: false,
		configurable: true,
	});
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return { quote: ['validateQuote'] };
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioBlockquote.style = ontarioBlockquoteCss;
var ButtonTypes = ['primary', 'secondary', 'tertiary', 'internalThemeDark'];
var HtmlTypes = ['button', 'reset', 'submit'];
var ontarioButtonCss =
	'.ontario-button:focus,.ontario-button:active{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button{border:none;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;display:inline-block;font-size:1.125rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:600;line-height:1.5555555556;margin:0 1.75rem 1.5rem 0;min-width:10rem;padding:0.625rem 1.5rem;text-align:center;text-decoration:none;cursor:pointer}@media screen and (max-width: 40em){.ontario-button{margin-right:0;display:block;width:100%}}.ontario-button .ontario-icon{margin-right:4px}.ontario-button--primary{background-color:#0066CC;color:#FFFFFF}.ontario-button--primary:hover{background-color:#00478F;color:#FFFFFF}.ontario-button--primary:focus{background-color:#00478F;color:#FFFFFF;-webkit-transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--primary:active{background-color:#002142;color:#FFFFFF;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--primary:visited{color:#FFFFFF}.ontario-button--secondary{background-color:#FFFFFF;border:2px solid #0066CC;color:#0066CC;padding-top:0.5rem;padding-bottom:0.5rem}.ontario-button--secondary:hover{background-color:#e0f0ff;border-color:#00478F;color:#00478F}.ontario-button--secondary:focus{background-color:#e0f0ff;border-color:#00478F;color:#00478F;-webkit-transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--secondary:active{background-color:#c2e0ff;border-color:#002142;color:#002142;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--secondary:visited{color:#0066CC}.ontario-button--tertiary{background-color:transparent;color:#0066CC;text-decoration:underline}.ontario-button--tertiary:hover{background-color:#e8e8e8;color:#00478F;text-decoration:underline}.ontario-button--tertiary:focus{background-color:#e8e8e8;color:#00478F;text-decoration:underline;-webkit-transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--tertiary:active{background-color:#d1d1d1;color:#002142;text-decoration:underline;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--tertiary:visited{color:#0066CC}.ontario-button--internalThemeDark{background-color:#1a1a1a;border:2px solid #FFFFFF;color:#FFFFFF}.ontario-button--internalThemeDark:hover{background-color:#4d4d4d}.ontario-button--internalThemeDark:focus{background-color:#4d4d4d;-webkit-transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--internalThemeDark:active{background-color:#4d4d4d;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--internalThemeDark:visited{color:#0066CC}';
var OntarioButton = (function () {
	function t(t) {
		registerInstance(this, t);
		this.type = 'secondary';
		this.htmlType = 'button';
		this.label = undefined;
		this.ariaLabelText = undefined;
		this.elementId = undefined;
		this.typeState = undefined;
		this.htmlTypeState = undefined;
		this.labelState = undefined;
	}
	t.prototype.updateLabelContent = function () {
		var t, o;
		this.labelState =
			(o = (t = this.label) !== null && t !== void 0 ? t : this.host.textContent) !== null && o !== void 0 ? o : '';
		this.validateLabelContent(this.labelState);
	};
	t.prototype.validateType = function () {
		var t = validateValueAgainstArray(this.type, ButtonTypes);
		if (t) {
			this.typeState = this.type;
		} else {
			this.typeState = this.warnDefaultType();
		}
	};
	t.prototype.validateHtmlType = function () {
		var t = validateValueAgainstArray(this.htmlType, HtmlTypes);
		if (t) {
			this.htmlTypeState = this.htmlType;
		} else {
			this.htmlTypeState = this.warnDefaultHtmlType();
		}
	};
	t.prototype.validateLabelContent = function (t) {
		if (validatePropExists(t)) {
			var o = new ConsoleMessageClass();
			o.addDesignSystemTag()
				.addMonospaceText(' label ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-button> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	};
	t.prototype.warnDefaultType = function () {
		var t = new ConsoleMessageClass();
		t.addDesignSystemTag()
			.addMonospaceText(' type ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-button> ')
			.addRegularText('was set to an invalid type; only')
			.addMonospaceText(' primary, secondary, or tertiary ')
			.addRegularText('are supported. The default type')
			.addMonospaceText(' secondary ')
			.addRegularText('is assumed.')
			.printMessage();
		return 'secondary';
	};
	t.prototype.warnDefaultHtmlType = function () {
		var t = new ConsoleMessageClass();
		t.addDesignSystemTag()
			.addMonospaceText(' htmlType ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-button> ')
			.addRegularText('was set to an invalid htmlType; only')
			.addMonospaceText(' button, reset, or submit ')
			.addRegularText('are supported. The default type')
			.addMonospaceText(' button ')
			.addRegularText('is assumed.')
			.printMessage();
		return 'button';
	};
	t.prototype.getClass = function () {
		return 'ontario-button ontario-button--'.concat(this.typeState);
	};
	t.prototype.getId = function () {
		var t;
		return (t = this.elementId) !== null && t !== void 0 ? t : '';
	};
	t.prototype.componentWillLoad = function () {
		var t;
		this.updateLabelContent();
		this.validateHtmlType();
		this.validateType();
		this.ariaLabelText = (t = this.ariaLabelText) !== null && t !== void 0 ? t : this.labelState;
	};
	t.prototype.componentDidLoad = function () {
		var t = this;
		var o = new MutationObserver(function (o) {
			o.forEach(function (o) {
				if (o.type === 'attributes') {
					t.updateLabelContent();
				}
			});
		});
		var e = { attributes: true };
		o.observe(this.host, e);
	};
	t.prototype.render = function () {
		return h(
			'button',
			{ 'type': this.htmlTypeState, 'class': this.getClass(), 'aria-label': this.ariaLabelText, 'id': this.getId() },
			this.labelState,
		);
	};
	Object.defineProperty(t.prototype, 'host', {
		get: function () {
			return getElement(this);
		},
		enumerable: false,
		configurable: true,
	});
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return { label: ['updateLabelContent'], type: ['validateType'], htmlType: ['validateHtmlType'] };
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioButton.style = ontarioButtonCss;
var ontarioCalloutCss =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-callout{border-left:0.25rem solid #367A76;padding:1.5rem;margin:2rem 0 2.5rem 0;background-color:#f2f2f2}.ontario-callout *{max-width:48rem}.ontario-callout *:last-child{margin-bottom:0.5rem}.ontario-callout__title{margin:0 0 1rem}.ontario-border-highlight--teal{border-color:#367A76 !important}.ontario-border-highlight--gold{border-color:#86743D !important}.ontario-border-highlight--yellow{border-color:#8A600D !important}.ontario-border-highlight--taupe{border-color:#7B725C !important}.ontario-border-highlight--green{border-color:#2B8737 !important}.ontario-border-highlight--lime{border-color:#5F8129 !important}.ontario-border-highlight--sky{border-color:#1080A6 !important}.ontario-border-highlight--blue{border-color:#0369ac !important}.ontario-border-highlight--purple{border-color:#92278F !important}';
var OntarioCallout = (function () {
	function t(t) {
		registerInstance(this, t);
		this.headingType = undefined;
		this.headingContentType = 'string';
		this.headingContent = undefined;
		this.content = undefined;
		this.highlightColour = 'teal';
	}
	t.prototype.validateHeadingType = function () {
		if (isValidHeadingLevel(this.headingType)) return this.headingType;
		var t = new ConsoleMessageClass();
		return t
			.addDesignSystemTag()
			.addMonospaceText(' headingType '.concat(this.headingType, ' '))
			.addRegularText('for')
			.addMonospaceText(' <ontario-callout> ')
			.addRegularText('is not a valid type. Please ensure your heading type matches one of the headingType types.')
			.printMessage();
	};
	t.prototype.validateHeadingContentType = function () {
		var t = validateValueAgainstArray(this.headingContentType, HeadingContentTypes);
		if (t) {
			return this.headingContentType;
		} else {
			return this.warnDefaultType();
		}
	};
	t.prototype.validateHeadingContent = function () {
		if (!this.headingContent) {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' headingContent ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-callout> ')
				.addRegularText('was not provided.')
				.printMessage();
		}
	};
	t.prototype.validateHighlightColour = function () {
		if (this.highlightColour) {
			if (isValidHighlightColour(this.highlightColour)) return this.highlightColour;
			else {
				var t = new ConsoleMessageClass();
				t.addDesignSystemTag()
					.addMonospaceText(' highlightColour '.concat(this.highlightColour, ' '))
					.addRegularText('for')
					.addMonospaceText(' <ontario-callout> ')
					.addRegularText(
						'does not match one of the valid highlightColour types. A default colour of `teal` will be applied.',
					)
					.printMessage();
			}
		}
		return 'teal';
	};
	t.prototype.warnDefaultType = function () {
		var t = new ConsoleMessageClass();
		t.addDesignSystemTag()
			.addMonospaceText(' headingContentType ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-callout> ')
			.addRegularText('was set to an invalid type; only')
			.addMonospaceText(' string or html ')
			.addRegularText('are supported. The default type')
			.addMonospaceText(' string ')
			.addRegularText('is assumed.')
			.printMessage();
		return (this.headingContentType = 'string');
	};
	t.prototype.componentWillLoad = function () {
		this.validateHighlightColour();
		this.validateHeadingContent();
		this.validateHeadingType();
		this.validateHeadingContentType();
	};
	t.prototype.render = function () {
		return generateCalloutAside(
			'callout',
			this.headingType,
			this.headingContentType,
			this.headingContent,
			this.content,
			this.highlightColour,
		);
	};
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return {
				headingType: ['validateHeadingType'],
				headingContentType: ['validateHeadingContentType'],
				headingContent: ['validateHeadingContent'],
				highlightColour: ['validateHighlightColour'],
			};
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioCallout.style = ontarioCalloutCss;
var __rest =
	(undefined && undefined.__rest) ||
	function (t, o) {
		var e = {};
		for (var i in t) if (Object.prototype.hasOwnProperty.call(t, i) && o.indexOf(i) < 0) e[i] = t[i];
		if (t != null && typeof Object.getOwnPropertySymbols === 'function')
			for (var a = 0, i = Object.getOwnPropertySymbols(t); a < i.length; a++) {
				if (o.indexOf(i[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[a])) e[i[a]] = t[i[a]];
			}
		return e;
	};
var Input = function (t) {
	var o = t.autoComplete,
		e = t.className,
		i = t.id,
		a = t.name,
		n = t.type,
		r = t.value,
		l = t.required,
		s = t.onKeyDown,
		d = t.onInput,
		m = t.onChange,
		u = t.onBlur,
		c = t.onFocus,
		p = t.ref,
		g = __rest(t, [
			'autoComplete',
			'className',
			'id',
			'name',
			'type',
			'value',
			'required',
			'onKeyDown',
			'onInput',
			'onChange',
			'onBlur',
			'onFocus',
			'ref',
		]);
	return h(
		'input',
		Object.assign(
			{
				autoComplete: o,
				class: e,
				id: i,
				name: a,
				type: n,
				value: r,
				required: !!l,
				onKeyDown: s,
				onInput: d,
				onChange: m,
				onBlur: u,
				onFocus: c,
				ref: p,
			},
			g,
		),
	);
};
var CaptionTypes = ['default', 'large', 'heading'];
var MessageContentType;
(function (t) {
	t['UndefinedCaptionObject'] = 'undefinedCaptionObject';
	t['UndefinedCaptionText'] = 'undefinedCaption';
	t['EmptyCaptionText'] = 'emptyCaption';
	t['UndefinedCaptionType'] = 'undefinedCaptionType';
	t['IncorrectCaptionType'] = 'incorrectCaptionType';
})(MessageContentType || (MessageContentType = {}));
var InputCaption = (function () {
	function t(t, o, e, i, a, n) {
		if (a === void 0) {
			a = false;
		}
		if (n === void 0) {
			n = false;
		}
		var r = this;
		this.captionType = 'default';
		this.required = false;
		this.isLegend = false;
		this.language = 'en';
		this.getCaption = function (t, o) {
			if (o === void 0) {
				o = false;
			}
			var e = r.captionText && r.captionText.toLowerCase();
			var i = r.isLegend
				? h(
						'legend',
						{ class: r.getClass() },
						r.captionType === 'heading' ? h('h1', null, r.captionText) : r.captionText,
						r.getRequiredFlagElement(),
						o && r.getHintExpanderAccessibilityText(e, false),
				  )
				: h(
						'label',
						{ htmlFor: t, class: r.getClass() },
						r.captionText,
						r.getRequiredFlagElement(),
						o && r.getHintExpanderAccessibilityText(e, false),
				  );
			return r.captionType === 'heading' && !r.isLegend ? h('h1', null, i) : i;
		};
		var l;
		if (typeof o === 'string') {
			try {
				l = JSON.parse(o);
			} catch (t) {
				l = { captionText: o, captionType: 'default' };
			}
		} else {
			l = o;
		}
		this.componentTagName = t.toLocaleLowerCase();
		this.captionText = l === null || l === void 0 ? void 0 : l.captionText;
		this.captionType =
			((l === null || l === void 0 ? void 0 : l.captionType) &&
				CaptionTypes.find(function (t) {
					var o;
					return t === ((o = l.captionType) === null || o === void 0 ? void 0 : o.toLowerCase());
				})) ||
			'default';
		this.required = n;
		this.isLegend = a;
		this.translations = e;
		this.language = i;
		this.validateCaption(this);
	}
	t.prototype.getHintExpanderAccessibilityText = function (t, o) {
		if (o === void 0) {
			o = false;
		}
		var e = h(
			'span',
			{ class: 'ontario-show-for-sr' },
			this.translations.accessibility.moreInfo[this.language],
			' "',
			t.toLowerCase(),
			'"',
			' ',
			this.translations.accessibility.checkboxHintExpander[this.language],
		);
		var i = h(
			'span',
			{ class: 'ontario-show-for-sr' },
			this.translations.accessibility.moreInfo[this.language],
			' "',
			t.toLowerCase(),
			'"',
			' ',
			this.translations.accessibility.singleHintExpander[this.language],
		);
		return this.componentTagName === 'ontario-checkboxes' ? (!o ? e : i) : i;
	};
	t.prototype.getRequiredFlagText = function () {
		return this.required
			? this.translations && '('.concat(this.translations.required[this.language], ')')
			: this.translations && '('.concat(this.translations.optional[this.language], ')');
	};
	t.prototype.getRequiredFlagElement = function () {
		return h('span', { class: 'ontario-label__flag' }, this.getRequiredFlagText());
	};
	t.prototype.getClass = function () {
		return this.captionType === 'large' || this.captionType === 'heading'
			? this.isLegend
				? 'ontario-fieldset__legend ontario-fieldset__legend--'.concat(this.captionType)
				: 'ontario-label ontario-label--'.concat(this.captionType)
			: this.isLegend
			? 'ontario-fieldset__legend'
			: 'ontario-label';
	};
	t.prototype.validateCaption = function (t) {
		var o;
		var e;
		if (!t || Object.keys(t).length <= 0) {
			e = MessageContentType.UndefinedCaptionObject;
		} else {
			if (!t.captionText) {
				e = MessageContentType.UndefinedCaptionText;
			} else {
				if (/^\s*$/.test(t.captionText)) {
					e = MessageContentType.EmptyCaptionText;
				}
			}
			if (!t.captionType) {
				e = MessageContentType.UndefinedCaptionType;
			} else {
				if (
					!CaptionTypes.includes(
						(o = t === null || t === void 0 ? void 0 : t.captionType) === null || o === void 0
							? void 0
							: o.toLowerCase(),
					)
				) {
					e = MessageContentType.IncorrectCaptionType;
				}
			}
		}
		if (e) {
			var i = new ConsoleMessageClass().addDesignSystemTag();
			if (e !== MessageContentType.UndefinedCaptionObject) {
				i.addMonospaceText(
					' '.concat(
						e === MessageContentType.EmptyCaptionText || e === MessageContentType.UndefinedCaptionText
							? 'caption or captionText'
							: 'captionType',
						' ',
					),
				).addRegularText('object or property of');
			}
			i.addMonospaceText(' caption ')
				.addRegularText('object on')
				.addMonospaceText(' '.concat(this.componentTagName, ' '));
			this.printConsoleMessage(e, i, this.getRequiredFlagText());
		}
	};
	t.prototype.printConsoleMessage = function (t, o, e) {
		if (e === void 0) {
			e = '(optional)';
		}
		switch (t) {
			case MessageContentType.UndefinedCaptionObject:
			case MessageContentType.UndefinedCaptionText:
			case MessageContentType.EmptyCaptionText:
				o.addRegularText(
					''.concat(
						t === MessageContentType.EmptyCaptionText
							? 'is empty or contains only spaces'
							: 'is required but not defined',
						'. A blank followed by a',
					),
				)
					.addMonospaceText(' '.concat(e, ' '))
					.addRegularText('flag is assumed.');
				break;
			case MessageContentType.UndefinedCaptionType:
				o.addRegularText('is not defined. The').addMonospaceText(' default ').addRegularText('type is assumed.');
				break;
			case MessageContentType.IncorrectCaptionType:
				o.addRegularText('was set to an incorrect type; only')
					.addMonospaceText(' default, heading, ')
					.addRegularText('or')
					.addMonospaceText(' large ')
					.addRegularText('type is allowed. The')
					.addMonospaceText(' default ')
					.addRegularText('type is assumed.');
				break;
		}
		o.printMessage();
	};
	return t;
})();
var constructHintTextObject = function (t) {
	var o = { hint: '', hintContentType: 'string' };
	if (t) {
		if (typeof t === 'string') {
			try {
				o = JSON.parse(t);
			} catch (e) {
				o = { hint: t, hintContentType: 'string' };
			}
		} else {
			o = t;
		}
	}
	return o;
};
var EventType;
(function (t) {
	t['Change'] = 'change';
	t['Blur'] = 'blur';
	t['Focus'] = 'focus';
})(EventType || (EventType = {}));
var handleInputEvent = function (t, o, e, i, a, n, r, l, s, d) {
	if (o === 'change') {
		if (r === 'radio' || r === 'checkbox') {
			if (e instanceof HTMLInputElement) {
				i.emit({
					checked: e === null || e === void 0 ? void 0 : e.checked,
					id: e === null || e === void 0 ? void 0 : e.id,
					value: e === null || e === void 0 ? void 0 : e.value,
				});
			}
		} else {
			i.emit({ id: e === null || e === void 0 ? void 0 : e.id, value: e === null || e === void 0 ? void 0 : e.value });
		}
		l && l(t);
	}
	if (o === 'focus') {
		a.emit({
			id: e === null || e === void 0 ? void 0 : e.id,
			focused: true,
			value: e === null || e === void 0 ? void 0 : e.value,
		});
		s && s(t);
	}
	if (o === 'blur') {
		n.emit({
			id: e === null || e === void 0 ? void 0 : e.id,
			focused: false,
			value: e === null || e === void 0 ? void 0 : e.value,
		});
		d && d(t);
	}
};
var ontarioCheckboxesCss =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;font-size:inherit;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-checkboxes{margin-bottom:2.5rem;max-width:48rem}.ontario-checkboxes__item{position:relative;margin:0 0 1rem;padding:0 0 0 2rem;min-height:28px;-webkit-box-sizing:content-box;box-sizing:content-box}.ontario-checkboxes__item:last-of-type{margin:0}@media screen and (max-width: 40em){.ontario-checkboxes__item{padding:0 0 0 2.5rem;min-height:32px}}.ontario-checkboxes__input{cursor:pointer;margin:0;position:absolute;top:-2px;left:-2px;opacity:0;width:36px;height:36px;z-index:0;-webkit-tap-highlight-color:transparent}@media screen and (max-width: 40em){.ontario-checkboxes__input{width:40px;height:40px}}.ontario-checkboxes__label{display:inline-block;cursor:pointer;line-height:1.5;margin:0.25rem 0;padding:0 1rem;width:auto;white-space:normal}@media screen and (max-width: 40em){.ontario-checkboxes__label{margin:0.33rem 0}}.ontario-checkboxes__label:before{content:"";border:2px solid #1a1a1a;border-radius:4px;position:absolute;top:0;left:0;width:32px;height:32px;-webkit-transition:border 0.1s ease-in-out;transition:border 0.1s ease-in-out;display:block}@media screen and (min-width: 40em){.ontario-checkboxes__label:before{width:28px;height:28px}}.ontario-checkboxes__label:after{content:"";background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M0 2.667C0 1.194 1.194 0 2.667 0h18.667C22.806 0 24 1.194 24 2.667v18.667C24 22.806 22.806 24 21.333 24H2.667C1.194 24 0 22.806 0 21.333V2.667z\' fill=\'%231a1a1a\'/%3E%3Cpath d=\'M2.667 12.616l6.667 6.718 12-12.092-1.88-1.908L9.333 15.53l-4.787-4.8-1.88 1.894z\' fill=\'%23fff\'/%3E%3C/svg%3E%0A");background-repeat:no-repeat;height:30px;width:30px;position:absolute;top:1px;left:1px;right:0;bottom:0;opacity:0;display:block}@media screen and (max-width: 40em){.ontario-checkboxes__label:after{height:34px;width:34px}}.ontario-checkboxes__input:focus+.ontario-checkboxes__label:before{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}.ontario-checkboxes__input:checked+.ontario-checkboxes__label:after{opacity:1}.ontario-checkboxes__input:checked+.ontario-checkboxes__label:before{background-color:#1a1a1a}.ontario-checkboxes__hint-expander{margin:0.75rem 0 0 0.5rem}@media screen and (max-width: 40em){.ontario-checkboxes__hint-expander{margin-top:1rem}}';
var OntarioCheckboxes = (function () {
	function t(t) {
		var o = this;
		registerInstance(this, t);
		this.checkboxOnChange = createEvent(this, 'checkboxOnChange', 7);
		this.checkboxOnBlur = createEvent(this, 'checkboxOnBlur', 7);
		this.checkboxOnFocus = createEvent(this, 'checkboxOnFocus', 7);
		this.handleEvent = function (t, e) {
			var i;
			var a = t.target;
			if (a) {
				a.checked = (i = a.checked) !== null && i !== void 0 ? i : '';
			}
			handleInputEvent(
				t,
				e,
				a,
				o.checkboxOnChange,
				o.checkboxOnFocus,
				o.checkboxOnBlur,
				'checkbox',
				o.customOnChange,
				o.customOnFocus,
				o.customOnBlur,
			);
		};
		this.caption = undefined;
		this.language = 'en';
		this.name = undefined;
		this.hintText = undefined;
		this.hintExpander = undefined;
		this.options = undefined;
		this.required = false;
		this.customOnChange = undefined;
		this.customOnBlur = undefined;
		this.customOnFocus = undefined;
		this.hintTextId = undefined;
		this.captionState = undefined;
		this.internalHintText = undefined;
		this.internalHintExpander = undefined;
		this.internalOptions = undefined;
	}
	t.prototype.handleSetAppLanguage = function (t) {
		this.language = validateLanguage(t);
	};
	t.prototype.handleHeaderLanguageToggled = function (t) {
		this.language = validateLanguage(t);
	};
	t.prototype.parseHintText = function () {
		if (this.hintText) {
			var t = constructHintTextObject(this.hintText);
			this.internalHintText = t;
		}
	};
	t.prototype.parseHintExpander = function () {
		var t = this.hintExpander;
		if (t) {
			if (typeof t === 'string') this.internalHintExpander = JSON.parse(t);
			else this.internalHintExpander = t;
		}
	};
	t.prototype.parseOptions = function () {
		if (typeof this.options !== 'undefined') {
			if (!Array.isArray(this.options)) {
				this.internalOptions = JSON.parse(this.options);
			} else {
				this.internalOptions = this.options;
			}
		}
		this.validateOptions(this.internalOptions);
	};
	t.prototype.validateOptions = function (t) {
		if (validateObjectExists(t)) {
			var o = new ConsoleMessageClass();
			o.addDesignSystemTag()
				.addMonospaceText(' options ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-checkboxes> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	};
	t.prototype.validateName = function (t) {
		if (validatePropExists(t)) {
			var o = new ConsoleMessageClass();
			o.addDesignSystemTag()
				.addMonospaceText(' name ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-checkboxes> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	};
	t.prototype.updateCaptionState = function (t) {
		this.captionState = new InputCaption(this.element.tagName, t, translations, this.language, true, this.required);
	};
	t.prototype.updateLanguage = function () {
		this.updateCaptionState(this.caption);
	};
	t.prototype.componentDidLoad = function () {
		return __awaiter(this, void 0, void 0, function () {
			var t, o;
			return __generator(this, function (e) {
				switch (e.label) {
					case 0:
						o = this;
						return [4, (t = this.hintTextRef) === null || t === void 0 ? void 0 : t.getHintTextId()];
					case 1:
						o.hintTextId = e.sent();
						return [2];
				}
			});
		});
	};
	t.prototype.componentWillLoad = function () {
		this.updateCaptionState(this.caption);
		this.parseOptions();
		this.parseHintExpander();
		this.parseHintText();
		this.validateName(this.name);
		this.language = validateLanguage(this.language);
	};
	t.prototype.render = function () {
		var t = this;
		var o;
		return h(
			'div',
			{ class: 'ontario-form-group' },
			h(
				'fieldset',
				{ 'class': 'ontario-fieldset', 'aria-describedby': this.hintTextId },
				this.captionState.getCaption(undefined, !!this.internalHintExpander),
				this.internalHintText &&
					h('ontario-hint-text', {
						hint: this.internalHintText.hint,
						hintContentType: this.internalHintText.hintContentType,
						ref: function (o) {
							return (t.hintTextRef = o);
						},
					}),
				h(
					'div',
					{ class: 'ontario-checkboxes' },
					(o = this.internalOptions) === null || o === void 0
						? void 0
						: o.map(function (o) {
								return h(
									'div',
									{ class: 'ontario-checkboxes__item' },
									h(Input, {
										className: 'ontario-checkboxes__input',
										id: o.elementId,
										name: t.name,
										type: 'checkbox',
										value: o.value,
										required: !!t.required,
										onChange: function (o) {
											return t.handleEvent(o, EventType.Change);
										},
										onBlur: function (o) {
											return t.handleEvent(o, EventType.Blur);
										},
										onFocus: function (o) {
											return t.handleEvent(o, EventType.Focus);
										},
									}),
									h(
										'label',
										{ class: 'ontario-checkboxes__label', htmlFor: o.elementId },
										o.label,
										o.hintExpander && t.captionState.getHintExpanderAccessibilityText(o.label, true),
									),
									h(
										'div',
										{ class: 'ontario-checkboxes__hint-expander' },
										o.hintExpander &&
											h('ontario-hint-expander', {
												'hint': o.hintExpander.hint,
												'content': o.hintExpander.content,
												'hintContentType': o.hintExpander.hintContentType,
												'input-exists': true,
											}),
									),
								);
						  }),
					this.internalHintExpander &&
						h('ontario-hint-expander', {
							'hint': this.internalHintExpander.hint,
							'content': this.internalHintExpander.content,
							'hintContentType': this.internalHintExpander.hintContentType,
							'input-exists': true,
						}),
				),
			),
		);
	};
	Object.defineProperty(t.prototype, 'element', {
		get: function () {
			return getElement(this);
		},
		enumerable: false,
		configurable: true,
	});
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return {
				hintText: ['parseHintText'],
				hintExpander: ['parseHintExpander'],
				options: ['parseOptions'],
				name: ['validateName'],
				caption: ['updateCaptionState'],
				language: ['updateLanguage'],
			};
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioCheckboxes.style = ontarioCheckboxesCss;
var OntarioIconCriticalAlertWarning =
	'<svg class="svg-icon" role="img" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t<path d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z" fill="white" />\n\t<rect x="11" y="10" width="2" height="4" fill="black" />\n\t<rect x="11" y="16" width="2" height="2" fill="black" />\n</svg>\n';
var ontarioCriticalAlertCss =
	'.ontario-row{margin:0 auto;max-width:72rem;width:100%}.ontario-row:before,.ontario-row:after{content:"";display:table}.ontario-row:after{clear:both}.ontario-row.ontario-row--collapse>.ontario-column,.ontario-row.ontario-row--collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-row--collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row .ontario-row{margin:0 -1rem;max-width:none;width:auto}.ontario-row .ontario-row:before,.ontario-row .ontario-row:after{content:"";display:table}.ontario-row .ontario-row:after{clear:both}.ontario-row .ontario-row.ontario-row--collapse{margin:0;max-width:none;width:auto}.ontario-row .ontario-row.ontario-row--collapse:before,.ontario-row .ontario-row.ontario-row--collapse:after{content:"";display:table}.ontario-row .ontario-row.ontario-row--collapse:after{clear:both}.ontario-column,.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;float:left}.ontario-column+.ontario-column:last-child,.ontario-column+.ontario-columns:last-child,.ontario-columns+.ontario-column:last-child,.ontario-columns+.ontario-columns:last-child{float:right}.ontario-column+.ontario-column.ontario-end,.ontario-column+.ontario-columns.ontario-end,.ontario-columns+.ontario-column.ontario-end,.ontario-columns+.ontario-columns.ontario-end{float:left}@media only screen{.ontario-small-push-0{position:relative;left:0;right:auto}.ontario-small-pull-0{position:relative;right:0;left:auto}.ontario-small-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-small-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-small-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-small-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-small-push-3{position:relative;left:25%;right:auto}.ontario-small-pull-3{position:relative;right:25%;left:auto}.ontario-small-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-small-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-small-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-small-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-small-push-6{position:relative;left:50%;right:auto}.ontario-small-pull-6{position:relative;right:50%;left:auto}.ontario-small-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-small-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-small-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-small-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-small-push-9{position:relative;left:75%;right:auto}.ontario-small-pull-9{position:relative;right:75%;left:auto}.ontario-small-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-small-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-small-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-small-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-small-1{width:8.3333333333%}.ontario-small-2{width:16.6666666667%}.ontario-small-3{width:25%}.ontario-small-4{width:33.3333333333%}.ontario-small-5{width:41.6666666667%}.ontario-small-6{width:50%}.ontario-small-7{width:58.3333333333%}.ontario-small-8{width:66.6666666667%}.ontario-small-9{width:75%}.ontario-small-10{width:83.3333333333%}.ontario-small-11{width:91.6666666667%}.ontario-small-12{width:100%}.ontario-small-offset-0{margin-left:0 !important}.ontario-small-offset-1{margin-left:8.3333333333% !important}.ontario-small-offset-2{margin-left:16.6666666667% !important}.ontario-small-offset-3{margin-left:25% !important}.ontario-small-offset-4{margin-left:33.3333333333% !important}.ontario-small-offset-5{margin-left:41.6666666667% !important}.ontario-small-offset-6{margin-left:50% !important}.ontario-small-offset-7{margin-left:58.3333333333% !important}.ontario-small-offset-8{margin-left:66.6666666667% !important}.ontario-small-offset-9{margin-left:75% !important}.ontario-small-offset-10{margin-left:83.3333333333% !important}.ontario-small-offset-11{margin-left:91.6666666667% !important}.ontario-small-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-small-centered,.ontario-columns.ontario-small-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-small-uncentered,.ontario-columns.ontario-small-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-small-centered:last-child,.ontario-columns.ontario-small-centered:last-child{float:none}.ontario-column.ontario-small-uncentered:last-child,.ontario-columns.ontario-small-uncentered:last-child{float:left}.ontario-column.ontario-small-uncentered.ontario-opposite,.ontario-columns.ontario-small-uncentered.ontario-opposite{float:right}.ontario-row.ontario-small-collapse>.ontario-column,.ontario-row.ontario-small-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-small-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-small-uncollapse>.ontario-column,.ontario-row.ontario-small-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:40.063em){.ontario-medium-push-0{position:relative;left:0;right:auto}.ontario-medium-pull-0{position:relative;right:0;left:auto}.ontario-medium-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-medium-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-medium-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-medium-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-medium-push-3{position:relative;left:25%;right:auto}.ontario-medium-pull-3{position:relative;right:25%;left:auto}.ontario-medium-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-medium-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-medium-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-medium-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-medium-push-6{position:relative;left:50%;right:auto}.ontario-medium-pull-6{position:relative;right:50%;left:auto}.ontario-medium-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-medium-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-medium-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-medium-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-medium-push-9{position:relative;left:75%;right:auto}.ontario-medium-pull-9{position:relative;right:75%;left:auto}.ontario-medium-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-medium-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-medium-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-medium-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-medium-1{width:8.3333333333%}.ontario-medium-2{width:16.6666666667%}.ontario-medium-3{width:25%}.ontario-medium-4{width:33.3333333333%}.ontario-medium-5{width:41.6666666667%}.ontario-medium-6{width:50%}.ontario-medium-7{width:58.3333333333%}.ontario-medium-8{width:66.6666666667%}.ontario-medium-9{width:75%}.ontario-medium-10{width:83.3333333333%}.ontario-medium-11{width:91.6666666667%}.ontario-medium-12{width:100%}.ontario-medium-offset-0{margin-left:0 !important}.ontario-medium-offset-1{margin-left:8.3333333333% !important}.ontario-medium-offset-2{margin-left:16.6666666667% !important}.ontario-medium-offset-3{margin-left:25% !important}.ontario-medium-offset-4{margin-left:33.3333333333% !important}.ontario-medium-offset-5{margin-left:41.6666666667% !important}.ontario-medium-offset-6{margin-left:50% !important}.ontario-medium-offset-7{margin-left:58.3333333333% !important}.ontario-medium-offset-8{margin-left:66.6666666667% !important}.ontario-medium-offset-9{margin-left:75% !important}.ontario-medium-offset-10{margin-left:83.3333333333% !important}.ontario-medium-offset-11{margin-left:91.6666666667% !important}.ontario-medium-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-medium-centered,.ontario-columns.ontario-medium-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-medium-uncentered,.ontario-columns.ontario-medium-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-medium-centered:last-child,.ontario-columns.ontario-medium-centered:last-child{float:none}.ontario-column.ontario-medium-uncentered:last-child,.ontario-columns.ontario-medium-uncentered:last-child{float:left}.ontario-column.ontario-medium-uncentered.ontario-opposite,.ontario-columns.ontario-medium-uncentered.ontario-opposite{float:right}.ontario-row.ontario-medium-collapse>.ontario-column,.ontario-row.ontario-medium-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-medium-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-medium-uncollapse>.ontario-column,.ontario-row.ontario-medium-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:73.063em){.ontario-large-push-0{position:relative;left:0;right:auto}.ontario-large-pull-0{position:relative;right:0;left:auto}.ontario-large-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-large-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-large-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-large-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-large-push-3{position:relative;left:25%;right:auto}.ontario-large-pull-3{position:relative;right:25%;left:auto}.ontario-large-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-large-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-large-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-large-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-large-push-6{position:relative;left:50%;right:auto}.ontario-large-pull-6{position:relative;right:50%;left:auto}.ontario-large-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-large-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-large-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-large-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-large-push-9{position:relative;left:75%;right:auto}.ontario-large-pull-9{position:relative;right:75%;left:auto}.ontario-large-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-large-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-large-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-large-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-large-1{width:8.3333333333%}.ontario-large-2{width:16.6666666667%}.ontario-large-3{width:25%}.ontario-large-4{width:33.3333333333%}.ontario-large-5{width:41.6666666667%}.ontario-large-6{width:50%}.ontario-large-7{width:58.3333333333%}.ontario-large-8{width:66.6666666667%}.ontario-large-9{width:75%}.ontario-large-10{width:83.3333333333%}.ontario-large-11{width:91.6666666667%}.ontario-large-12{width:100%}.ontario-large-offset-0{margin-left:0 !important}.ontario-large-offset-1{margin-left:8.3333333333% !important}.ontario-large-offset-2{margin-left:16.6666666667% !important}.ontario-large-offset-3{margin-left:25% !important}.ontario-large-offset-4{margin-left:33.3333333333% !important}.ontario-large-offset-5{margin-left:41.6666666667% !important}.ontario-large-offset-6{margin-left:50% !important}.ontario-large-offset-7{margin-left:58.3333333333% !important}.ontario-large-offset-8{margin-left:66.6666666667% !important}.ontario-large-offset-9{margin-left:75% !important}.ontario-large-offset-10{margin-left:83.3333333333% !important}.ontario-large-offset-11{margin-left:91.6666666667% !important}.ontario-large-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-large-centered,.ontario-columns.ontario-large-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-large-uncentered,.ontario-columns.ontario-large-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-large-centered:last-child,.ontario-columns.ontario-large-centered:last-child{float:none}.ontario-column.ontario-large-uncentered:last-child,.ontario-columns.ontario-large-uncentered:last-child{float:left}.ontario-column.ontario-large-uncentered.ontario-opposite,.ontario-columns.ontario-large-uncentered.ontario-opposite{float:right}.ontario-row.ontario-large-collapse>.ontario-column,.ontario-row.ontario-large-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-large-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-large-uncollapse>.ontario-column,.ontario-row.ontario-large-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-push-0{position:relative;left:0;right:auto}.ontario-pull-0{position:relative;right:0;left:auto}.ontario-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-push-3{position:relative;left:25%;right:auto}.ontario-pull-3{position:relative;right:25%;left:auto}.ontario-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-push-6{position:relative;left:50%;right:auto}.ontario-pull-6{position:relative;right:50%;left:auto}.ontario-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-push-9{position:relative;left:75%;right:auto}.ontario-pull-9{position:relative;right:75%;left:auto}.ontario-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-pull-11{position:relative;right:91.6666666667%;left:auto}}@media only screen and (min-width:96.063em){.ontario-xlarge-push-0{position:relative;left:0;right:auto}.ontario-xlarge-pull-0{position:relative;right:0;left:auto}.ontario-xlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xlarge-push-3{position:relative;left:25%;right:auto}.ontario-xlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xlarge-push-6{position:relative;left:50%;right:auto}.ontario-xlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xlarge-push-9{position:relative;left:75%;right:auto}.ontario-xlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-xlarge-1{width:8.3333333333%}.ontario-xlarge-2{width:16.6666666667%}.ontario-xlarge-3{width:25%}.ontario-xlarge-4{width:33.3333333333%}.ontario-xlarge-5{width:41.6666666667%}.ontario-xlarge-6{width:50%}.ontario-xlarge-7{width:58.3333333333%}.ontario-xlarge-8{width:66.6666666667%}.ontario-xlarge-9{width:75%}.ontario-xlarge-10{width:83.3333333333%}.ontario-xlarge-11{width:91.6666666667%}.ontario-xlarge-12{width:100%}.ontario-xlarge-offset-0{margin-left:0 !important}.ontario-xlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xlarge-offset-3{margin-left:25% !important}.ontario-xlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xlarge-offset-6{margin-left:50% !important}.ontario-xlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xlarge-offset-9{margin-left:75% !important}.ontario-xlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xlarge-centered,.ontario-columns.ontario-xlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xlarge-uncentered,.ontario-columns.ontario-xlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xlarge-centered:last-child,.ontario-columns.ontario-xlarge-centered:last-child{float:none}.ontario-column.ontario-xlarge-uncentered:last-child,.ontario-columns.ontario-xlarge-uncentered:last-child{float:left}.ontario-column.ontario-xlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xlarge-collapse>.ontario-column,.ontario-row.ontario-xlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xlarge-uncollapse>.ontario-column,.ontario-row.ontario-xlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:120.063em){.ontario-xxlarge-push-0{position:relative;left:0;right:auto}.ontario-xxlarge-pull-0{position:relative;right:0;left:auto}.ontario-xxlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xxlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xxlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xxlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xxlarge-push-3{position:relative;left:25%;right:auto}.ontario-xxlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xxlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xxlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xxlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xxlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xxlarge-push-6{position:relative;left:50%;right:auto}.ontario-xxlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xxlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xxlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xxlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xxlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xxlarge-push-9{position:relative;left:75%;right:auto}.ontario-xxlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xxlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xxlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xxlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xxlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-xxlarge-1{width:8.3333333333%}.ontario-xxlarge-2{width:16.6666666667%}.ontario-xxlarge-3{width:25%}.ontario-xxlarge-4{width:33.3333333333%}.ontario-xxlarge-5{width:41.6666666667%}.ontario-xxlarge-6{width:50%}.ontario-xxlarge-7{width:58.3333333333%}.ontario-xxlarge-8{width:66.6666666667%}.ontario-xxlarge-9{width:75%}.ontario-xxlarge-10{width:83.3333333333%}.ontario-xxlarge-11{width:91.6666666667%}.ontario-xxlarge-12{width:100%}.ontario-xxlarge-offset-0{margin-left:0 !important}.ontario-xxlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xxlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xxlarge-offset-3{margin-left:25% !important}.ontario-xxlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xxlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xxlarge-offset-6{margin-left:50% !important}.ontario-xxlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xxlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xxlarge-offset-9{margin-left:75% !important}.ontario-xxlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xxlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xxlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xxlarge-centered,.ontario-columns.ontario-xxlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xxlarge-uncentered,.ontario-columns.ontario-xxlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xxlarge-centered:last-child,.ontario-columns.ontario-xxlarge-centered:last-child{float:none}.ontario-column.ontario-xxlarge-uncentered:last-child,.ontario-columns.ontario-xxlarge-uncentered:last-child{float:left}.ontario-column.ontario-xxlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xxlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xxlarge-collapse>.ontario-column,.ontario-row.ontario-xxlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xxlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xxlarge-uncollapse>.ontario-column,.ontario-row.ontario-xxlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}.ontario-critical-alert{background-color:#FFD440;font-weight:400;margin:0;padding:1rem 0;position:relative;z-index:10}.ontario-critical-alert__body{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.ontario-critical-alert__icon{display:-ms-flexbox;display:flex}.ontario-critical-alert__icon svg{width:28px;height:28px;margin:0 0.85rem 0 0}.ontario-critical-alert p{margin:0;padding:0;line-height:1.8}.ontario-critical-alert a{color:#1a1a1a;font-weight:700}.ontario-critical-alert a:hover,.ontario-critical-alert a:focus{text-decoration:none}.ontario-critical-alert a:visited{color:#1a1a1a}.ontario-critical-alert ::slotted(a){color:#1a1a1a !important;font-weight:700}.ontario-critical-alert ::slotted(a:hover),.ontario-critical-alert ::slotted(a:focus){text-decoration:none !important}.ontario-critical-alert ::slotted(a:visited){color:#1a1a1a}';
var OntarioCriticalAlert = (function () {
	function t(t) {
		registerInstance(this, t);
		this.content = undefined;
	}
	t.prototype.validateCriticalAlertContent = function (t) {
		if (!this.host.textContent) {
			if (validatePropExists(t)) {
				var o = new ConsoleMessageClass();
				o.addDesignSystemTag()
					.addMonospaceText(' content ')
					.addRegularText('for')
					.addMonospaceText(' <ontario-critical-alert> ')
					.addRegularText('was not provided.')
					.printMessage();
			}
		}
	};
	t.prototype.renderContent = function () {
		var t = this.content;
		if (typeof t === 'string') {
			return t;
		}
		return h('slot', null);
	};
	t.prototype.componentWillLoad = function () {
		this.validateCriticalAlertContent(this.content);
	};
	t.prototype.render = function () {
		return h(
			'div',
			{ class: 'ontario-critical-alert' },
			h(
				'div',
				{ class: 'ontario-row' },
				h(
					'div',
					{ class: 'ontario-column ontario-small-12' },
					h(
						'div',
						{ class: 'ontario-critical-alert__body' },
						h('div', { class: 'ontario-critical-alert__icon', innerHTML: OntarioIconCriticalAlertWarning }),
						h('p', null, this.renderContent()),
					),
				),
			),
		);
	};
	Object.defineProperty(t.prototype, 'host', {
		get: function () {
			return getElement(this);
		},
		enumerable: false,
		configurable: true,
	});
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return { content: ['validateCriticalAlertContent'] };
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioCriticalAlert.style = ontarioCriticalAlertCss;
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
	if (!getRandomValues) {
		getRandomValues =
			(typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
			(typeof msCrypto !== 'undefined' &&
				typeof msCrypto.getRandomValues === 'function' &&
				msCrypto.getRandomValues.bind(msCrypto));
		if (!getRandomValues) {
			throw new Error(
				'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported',
			);
		}
	}
	return getRandomValues(rnds8);
}
var REGEX =
	/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function validate(t) {
	return typeof t === 'string' && REGEX.test(t);
}
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
	byteToHex.push((i + 256).toString(16).substr(1));
}
function stringify(t) {
	var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var e = (
		byteToHex[t[o + 0]] +
		byteToHex[t[o + 1]] +
		byteToHex[t[o + 2]] +
		byteToHex[t[o + 3]] +
		'-' +
		byteToHex[t[o + 4]] +
		byteToHex[t[o + 5]] +
		'-' +
		byteToHex[t[o + 6]] +
		byteToHex[t[o + 7]] +
		'-' +
		byteToHex[t[o + 8]] +
		byteToHex[t[o + 9]] +
		'-' +
		byteToHex[t[o + 10]] +
		byteToHex[t[o + 11]] +
		byteToHex[t[o + 12]] +
		byteToHex[t[o + 13]] +
		byteToHex[t[o + 14]] +
		byteToHex[t[o + 15]]
	).toLowerCase();
	if (!validate(e)) {
		throw TypeError('Stringified UUID is invalid');
	}
	return e;
}
function v4(t, o, e) {
	t = t || {};
	var i = t.random || (t.rng || rng)();
	i[6] = (i[6] & 15) | 64;
	i[8] = (i[8] & 63) | 128;
	if (o) {
		e = e || 0;
		for (var a = 0; a < 16; ++a) {
			o[e + a] = i[a];
		}
		return o;
	}
	return stringify(i);
}
function hasMultipleTrueValues(t, o) {
	var e = 0;
	for (var i = 0, a = t; i < a.length; i++) {
		var n = a[i];
		if (n[o] === true || n[o] === 'true') {
			e++;
			if (e > 1) {
				return true;
			}
		}
	}
	return false;
}
var ontarioDropdownListCss =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1>.ontario-label--heading,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1>.ontario-label--heading,h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1>.ontario-label--heading,h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;font-size:inherit;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-label{cursor:pointer;color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;line-height:1.5;margin:0 0 1rem 0;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-label{font-size:1.125rem;line-height:1.56}}.ontario-label--large{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2;max-width:26.25em}@media screen and (max-width: 40em){.ontario-label--large{font-size:1.4375rem;line-height:1.39}}h1>.ontario-label--heading{display:inline-block;margin:0}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-input:focus,.ontario-input:active{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;width:100%;padding:0.625rem 1rem;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-dropdown{background-color:#FFFFFF;background-position:right 0.5rem center;background-repeat:no-repeat;background-size:2rem;padding-right:2.25rem;cursor:pointer}.ontario-dropdown.ontario-dropdown-hint-expander--true{margin-bottom:1rem}.ontario-dropdown::-ms-expand{display:none}.ontario-dropdown option{font-weight:normal}';
var OntarioDropdownList = (function () {
	function t(t) {
		var o = this;
		registerInstance(this, t);
		this.dropdownOnChange = createEvent(this, 'dropdownOnChange', 7);
		this.dropdownOnBlur = createEvent(this, 'dropdownOnBlur', 7);
		this.dropdownOnFocus = createEvent(this, 'dropdownOnFocus', 7);
		this.handleEvent = function (t, e) {
			var i = t.target;
			handleInputEvent(
				t,
				e,
				i,
				o.dropdownOnChange,
				o.dropdownOnFocus,
				o.dropdownOnBlur,
				'dropdown',
				o.customOnChange,
				o.customOnFocus,
				o.customOnBlur,
			);
		};
		this.caption = undefined;
		this.language = 'en';
		this.name = undefined;
		this.elementId = undefined;
		this.options = undefined;
		this.required = false;
		this.isEmptyStartOption = false;
		this.hintText = undefined;
		this.hintExpander = undefined;
		this.customOnChange = undefined;
		this.customOnBlur = undefined;
		this.customOnFocus = undefined;
		this.hintTextId = undefined;
		this.captionState = undefined;
		this.internalOptions = undefined;
		this.internalHintText = undefined;
		this.internalHintExpander = undefined;
		this.translations = translations;
	}
	t.prototype.handleSetAppLanguage = function (t) {
		this.language = validateLanguage(t);
	};
	t.prototype.handleHeaderLanguageToggled = function (t) {
		this.language = validateLanguage(t);
	};
	t.prototype.validateName = function (t) {
		if (validatePropExists(t)) {
			var o = new ConsoleMessageClass();
			o.addDesignSystemTag()
				.addMonospaceText(' name ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-dropdown-list> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	};
	t.prototype.validateOptions = function (t) {
		if (validateObjectExists(t)) {
			var o = new ConsoleMessageClass();
			o.addDesignSystemTag()
				.addMonospaceText(' options ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-dropdown-list> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	};
	t.prototype.parseOptions = function () {
		if (typeof this.options !== 'undefined') {
			if (!Array.isArray(this.options)) {
				this.internalOptions = JSON.parse(this.options);
			} else {
				this.internalOptions = this.options;
			}
		}
		this.validateSelectedOption(this.internalOptions);
	};
	t.prototype.updateCaptionState = function (t) {
		this.captionState = new InputCaption(this.element.tagName, t, translations, this.language, false, this.required);
	};
	t.prototype.parseHintText = function () {
		if (this.hintText) {
			var t = constructHintTextObject(this.hintText);
			this.internalHintText = t;
		}
	};
	t.prototype.updateLanguage = function () {
		this.updateCaptionState(this.caption);
	};
	t.prototype.parseHintExpander = function () {
		var t = this.hintExpander;
		if (t) {
			if (typeof t === 'string') this.internalHintExpander = JSON.parse(t);
			else this.internalHintExpander = t;
		}
	};
	t.prototype.getId = function () {
		var t;
		return (t = this.elementId) !== null && t !== void 0 ? t : '';
	};
	t.prototype.validateSelectedOption = function (t) {
		var o = 'selected';
		t.forEach(function (t) {
			if (!t.hasOwnProperty(o)) {
				t.selected = false;
			}
		});
		if (hasMultipleTrueValues(t, o)) {
			var e = new ConsoleMessageClass();
			e.addDesignSystemTag()
				.addMonospaceText(' There are duplicate truthy `selected` values ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-dropdown-list> ')
				.addRegularText('options. Please update options so only one truthy `selected` value exists.')
				.printMessage();
		}
		return t;
	};
	t.prototype.getDropdownArrow = function () {
		return { backgroundImage: 'url('.concat(getAssetPath('./assets/ontario-material-dropdown-arrow-48px.svg'), ')') };
	};
	t.prototype.getClass = function () {
		return this.hintExpander
			? 'ontario-input ontario-dropdown ontario-dropdown-hint-expander--true'
			: 'ontario-input ontario-dropdown';
	};
	t.prototype.componentDidLoad = function () {
		return __awaiter(this, void 0, void 0, function () {
			var t, o;
			return __generator(this, function (e) {
				switch (e.label) {
					case 0:
						o = this;
						return [4, (t = this.hintTextRef) === null || t === void 0 ? void 0 : t.getHintTextId()];
					case 1:
						o.hintTextId = e.sent();
						return [2];
				}
			});
		});
	};
	t.prototype.componentWillLoad = function () {
		var t;
		this.updateCaptionState(this.caption);
		this.parseOptions();
		this.validateName(this.name);
		this.validateOptions(this.internalOptions);
		this.elementId = (t = this.elementId) !== null && t !== void 0 ? t : v4();
		this.parseHintText();
		this.parseHintExpander();
		this.language = validateLanguage(this.language);
	};
	t.prototype.render = function () {
		var t = this;
		var o, e;
		return h(
			'div',
			{ class: 'ontario-form-group' },
			this.captionState.getCaption(this.getId(), !!this.internalHintExpander),
			this.internalHintText &&
				h('ontario-hint-text', {
					hint: this.internalHintText.hint,
					hintContentType: this.internalHintText.hintContentType,
					ref: function (o) {
						return (t.hintTextRef = o);
					},
				}),
			h(
				'select',
				{
					'class': this.getClass(),
					'aria-describedby': this.hintTextId,
					'id': this.getId(),
					'name': this.name,
					'style': this.getDropdownArrow(),
					'onChange': function (o) {
						return t.handleEvent(o, EventType.Change);
					},
					'onBlur': function (o) {
						return t.handleEvent(o, EventType.Blur);
					},
					'onFocus': function (o) {
						return t.handleEvent(o, EventType.Focus);
					},
					'required': !!this.required,
				},
				this.isEmptyStartOption &&
					(this.isEmptyStartOption === true || this.isEmptyStartOption === 'true'
						? h('option', null, this.translations.dropdownList.select[''.concat(this.language)])
						: h('option', null, this.isEmptyStartOption)),
				(e =
					(o = this.internalOptions) === null || o === void 0
						? void 0
						: o.map(function (t) {
								return h('option', { value: t.value, selected: t.selected }, t.label);
						  })) !== null && e !== void 0
					? e
					: '',
			),
			this.internalHintExpander &&
				h('ontario-hint-expander', {
					hint: this.internalHintExpander.hint,
					content: this.internalHintExpander.content,
					hintContentType: this.internalHintExpander.hintContentType,
				}),
		);
	};
	Object.defineProperty(t, 'assetsDirs', {
		get: function () {
			return ['./assets'];
		},
		enumerable: false,
		configurable: true,
	});
	Object.defineProperty(t.prototype, 'element', {
		get: function () {
			return getElement(this);
		},
		enumerable: false,
		configurable: true,
	});
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return {
				name: ['validateName'],
				options: ['validateOptions', 'parseOptions'],
				caption: ['updateCaptionState'],
				hintText: ['parseHintText'],
				language: ['updateLanguage'],
				hintExpander: ['parseHintExpander'],
			};
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioDropdownList.style = ontarioDropdownListCss;
var ontarioFieldsetCss =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;font-size:inherit;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}';
var OntarioFieldset = (function () {
	function t(t) {
		registerInstance(this, t);
		this.legend = undefined;
		this.legendSize = 'default';
	}
	t.prototype.validateLegendSize = function () {
		var t = validateValueAgainstArray(this.legendSize, CaptionTypes);
		if (t) {
			return this.legendSize;
		} else {
			var o = new ConsoleMessageClass();
			o.addDesignSystemTag()
				.addMonospaceText(' legendSize '.concat(this.legendSize, ' '))
				.addRegularText('for')
				.addMonospaceText(' <ontario-fieldset> ')
				.addRegularText('is not a valid type. A default size will be applied.')
				.printMessage();
			return 'default';
		}
	};
	t.prototype.validateLegend = function () {
		this.validateLegendText(this.legend);
	};
	t.prototype.validateLegendText = function (t) {
		if (validatePropExists(t)) {
			var o = new ConsoleMessageClass();
			o.addDesignSystemTag()
				.addMonospaceText(' legend ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-fieldset> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	};
	t.prototype.componentWillLoad = function () {
		this.validateLegend();
		this.validateLegendSize();
	};
	t.prototype.getClass = function () {
		switch (this.legendSize) {
			case 'large':
				return 'ontario-fieldset__legend ontario-fieldset__legend--large';
			case 'heading':
				return 'ontario-fieldset__legend ontario-fieldset__legend--heading';
			case 'default':
			default:
				return 'ontario-fieldset__legend';
		}
	};
	t.prototype.render = function () {
		return h(
			'div',
			{ class: 'ontario-form-group' },
			h(
				'fieldset',
				{ class: 'ontario-fieldset' },
				h(
					'legend',
					{ class: this.getClass() },
					this.legendSize === 'heading' ? h('h1', null, this.legend) : this.legend,
				),
				h('slot', null),
			),
		);
	};
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return { legendSize: ['validateLegendSize'], legend: ['validateLegend'] };
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioFieldset.style = ontarioFieldsetCss;
var ICON_WIDTH = 32;
var FooterSocialLinks = function (t) {
	var o = t.facebook,
		e = t.twitter,
		i = t.instagram,
		a = t.youtube;
	return h(
		'ul',
		{ class: 'ontario-footer__links-container ontario-footer__links-container--social' },
		o &&
			h(
				'li',
				null,
				h(
					'a',
					{ 'class': 'ontario-footer__link', 'href': o, 'aria-label': 'Facebook' },
					h('ontario-icon-facebook', { 'colour': 'white', 'icon-width': ICON_WIDTH }),
				),
			),
		e &&
			h(
				'li',
				null,
				h(
					'a',
					{ 'class': 'ontario-footer__link', 'href': e, 'aria-label': 'Twitter' },
					h('ontario-icon-twitter', { 'colour': 'white', 'icon-width': ICON_WIDTH }),
				),
			),
		i &&
			h(
				'li',
				null,
				h(
					'a',
					{ 'class': 'ontario-footer__link', 'href': i, 'aria-label': 'Instagram' },
					h('ontario-icon-instagram', { 'colour': 'white', 'icon-width': ICON_WIDTH }),
				),
			),
		a &&
			h(
				'li',
				null,
				h(
					'a',
					{ 'class': 'ontario-footer__link', 'href': a, 'aria-label': 'Youtube' },
					h('ontario-icon-youtube', { 'colour': 'white', 'icon-width': ICON_WIDTH }),
				),
			),
	);
};
var enDash = '–';
var SimpleFooter = function (t) {
	var o = t.accessibilityLink,
		e = t.privacyLink,
		i = t.contactLink,
		a = t.printerLink,
		n = t.className;
	return h(
		'div',
		{ class: 'ontario-row '.concat(n !== null && n !== void 0 ? n : '') },
		h(
			'div',
			{ class: 'ontario-columns ontario-small-12' },
			h(
				'ul',
				{ class: 'ontario-footer__links-container ontario-footer__links-container--inline' },
				h('li', null, h('a', { class: 'ontario-footer__link', href: o.href }, o.text)),
				h('li', null, h('a', { class: 'ontario-footer__link', href: e.href }, e.text)),
				i &&
					h(
						'li',
						null,
						h(
							'a',
							{ class: 'ontario-footer__link', href: i === null || i === void 0 ? void 0 : i.href },
							i === null || i === void 0 ? void 0 : i.text,
						),
					),
			),
			h(
				'div',
				{ class: 'ontario-footer__copyright' },
				h(
					'a',
					{ class: 'ontario-footer__link', href: a === null || a === void 0 ? void 0 : a.href },
					'© ',
					a === null || a === void 0 ? void 0 : a.text,
					' ',
					h('span', { class: 'ontario-nbsp' }, '2012', enDash, String(new Date().getFullYear()).slice(-2)),
				),
			),
		),
	);
};
var ColumnContent = function (t) {
	var o = t.content;
	var e = o.heading,
		i = o.headingLevel,
		a = i === void 0 ? 'h3' : i,
		n = o.text,
		r = o.html,
		l = o.list,
		s = o.type,
		d = s === void 0 ? 'text' : s;
	return h(
		Fragment,
		null,
		e && h(a, { class: 'ontario-h5' }, e),
		d === 'text' && h('p', null, n),
		d === 'html' && h('div', { class: 'ontario-footer__paragraph', innerHTML: r }),
		d === 'list' &&
			!!(l === null || l === void 0 ? void 0 : l.length) &&
			h(
				'ul',
				null,
				l.map(function (t) {
					return h('li', { class: 'ontario-footer__list_item', innerHTML: t });
				}),
			),
	);
};
var FooterColumn = function (t) {
	var o = t.data,
		e = t.socialLinks,
		i = t.isThreeColLayout,
		a = i === void 0 ? false : i,
		n = t.isFullWidthInMediumLayout,
		r = n === void 0 ? false : n;
	var l = o.title,
		s = o.content,
		d = o.button,
		m = o.headingLevel,
		u = m === void 0 ? 'h2' : m;
	var c = a ? 'ontario-large-4 ontario-expanded-footer__one-third-block' : '';
	var p = r ? 'ontario-medium-12' : 'ontario-medium-6';
	return h(
		'div',
		{ class: 'ontario-columns ontario-small-12 '.concat(p, ' ').concat(c) },
		h(u, { class: 'ontario-h4' }, l),
		s.map(function (t) {
			return h(ColumnContent, { content: t });
		}),
		d && h('a', { class: 'ontario-footer__button ontario-button ontario-margin-bottom-0-!', href: d.link }, d.text),
		e && h(FooterSocialLinks, Object.assign({}, e)),
	);
};
var ExpandedFooterWrapper = function (t, o) {
	var e = t.topMargin,
		i = t.footerLinks;
	var a = { '--imagePath': 'url('.concat(getAssetPath('./assets/footer-expanded-supergraphic-logo.svg'), ')') };
	var n = !e ? 'ontario-margin-top-0-!' : '';
	return h(
		'footer',
		{ class: 'ontario-footer ontario-footer--expanded '.concat(n), style: a },
		h('div', { class: 'ontario-footer__expanded-top-section' }, h('div', { class: 'ontario-row' }, o)),
		h(SimpleFooter, Object.assign({}, i, { className: 'ontario-footer__expanded-bottom-section' })),
	);
};
var isInvalidTwoColumnOptions = function (t) {
	var o, e, i, a;
	return (
		!t ||
		!((o = t.column1) === null || o === void 0 ? void 0 : o.title) ||
		!((e = t.column1) === null || e === void 0 ? void 0 : e.content) ||
		!((i = t.column2) === null || i === void 0 ? void 0 : i.title) ||
		!((a = t.column2) === null || a === void 0 ? void 0 : a.content)
	);
};
var isInvalidThreeColumnOptions = function (t) {
	var o, e, i, a, n, r;
	return (
		!t ||
		!((o = t.column1) === null || o === void 0 ? void 0 : o.title) ||
		!((e = t.column1) === null || e === void 0 ? void 0 : e.content) ||
		!((i = t.column2) === null || i === void 0 ? void 0 : i.title) ||
		!((a = t.column2) === null || a === void 0 ? void 0 : a.content) ||
		!((n = t.column3) === null || n === void 0 ? void 0 : n.title) ||
		!((r = t.column3) === null || r === void 0 ? void 0 : r.content)
	);
};
var ontarioFooterCss =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}.ontario-row{margin:0 auto;max-width:72rem;width:100%}.ontario-row:before,.ontario-row:after{content:"";display:table}.ontario-row:after{clear:both}.ontario-row.ontario-row--collapse>.ontario-column,.ontario-row.ontario-row--collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-row--collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row .ontario-row{margin:0 -1rem;max-width:none;width:auto}.ontario-row .ontario-row:before,.ontario-row .ontario-row:after{content:"";display:table}.ontario-row .ontario-row:after{clear:both}.ontario-row .ontario-row.ontario-row--collapse{margin:0;max-width:none;width:auto}.ontario-row .ontario-row.ontario-row--collapse:before,.ontario-row .ontario-row.ontario-row--collapse:after{content:"";display:table}.ontario-row .ontario-row.ontario-row--collapse:after{clear:both}.ontario-column,.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;float:left}.ontario-column+.ontario-column:last-child,.ontario-column+.ontario-columns:last-child,.ontario-columns+.ontario-column:last-child,.ontario-columns+.ontario-columns:last-child{float:right}.ontario-column+.ontario-column.ontario-end,.ontario-column+.ontario-columns.ontario-end,.ontario-columns+.ontario-column.ontario-end,.ontario-columns+.ontario-columns.ontario-end{float:left}@media only screen{.ontario-small-push-0{position:relative;left:0;right:auto}.ontario-small-pull-0{position:relative;right:0;left:auto}.ontario-small-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-small-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-small-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-small-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-small-push-3{position:relative;left:25%;right:auto}.ontario-small-pull-3{position:relative;right:25%;left:auto}.ontario-small-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-small-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-small-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-small-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-small-push-6{position:relative;left:50%;right:auto}.ontario-small-pull-6{position:relative;right:50%;left:auto}.ontario-small-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-small-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-small-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-small-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-small-push-9{position:relative;left:75%;right:auto}.ontario-small-pull-9{position:relative;right:75%;left:auto}.ontario-small-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-small-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-small-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-small-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-small-1{width:8.3333333333%}.ontario-small-2{width:16.6666666667%}.ontario-small-3{width:25%}.ontario-small-4{width:33.3333333333%}.ontario-small-5{width:41.6666666667%}.ontario-small-6{width:50%}.ontario-small-7{width:58.3333333333%}.ontario-small-8{width:66.6666666667%}.ontario-small-9{width:75%}.ontario-small-10{width:83.3333333333%}.ontario-small-11{width:91.6666666667%}.ontario-small-12{width:100%}.ontario-small-offset-0{margin-left:0 !important}.ontario-small-offset-1{margin-left:8.3333333333% !important}.ontario-small-offset-2{margin-left:16.6666666667% !important}.ontario-small-offset-3{margin-left:25% !important}.ontario-small-offset-4{margin-left:33.3333333333% !important}.ontario-small-offset-5{margin-left:41.6666666667% !important}.ontario-small-offset-6{margin-left:50% !important}.ontario-small-offset-7{margin-left:58.3333333333% !important}.ontario-small-offset-8{margin-left:66.6666666667% !important}.ontario-small-offset-9{margin-left:75% !important}.ontario-small-offset-10{margin-left:83.3333333333% !important}.ontario-small-offset-11{margin-left:91.6666666667% !important}.ontario-small-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-small-centered,.ontario-columns.ontario-small-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-small-uncentered,.ontario-columns.ontario-small-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-small-centered:last-child,.ontario-columns.ontario-small-centered:last-child{float:none}.ontario-column.ontario-small-uncentered:last-child,.ontario-columns.ontario-small-uncentered:last-child{float:left}.ontario-column.ontario-small-uncentered.ontario-opposite,.ontario-columns.ontario-small-uncentered.ontario-opposite{float:right}.ontario-row.ontario-small-collapse>.ontario-column,.ontario-row.ontario-small-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-small-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-small-uncollapse>.ontario-column,.ontario-row.ontario-small-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:40.063em){.ontario-medium-push-0{position:relative;left:0;right:auto}.ontario-medium-pull-0{position:relative;right:0;left:auto}.ontario-medium-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-medium-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-medium-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-medium-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-medium-push-3{position:relative;left:25%;right:auto}.ontario-medium-pull-3{position:relative;right:25%;left:auto}.ontario-medium-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-medium-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-medium-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-medium-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-medium-push-6{position:relative;left:50%;right:auto}.ontario-medium-pull-6{position:relative;right:50%;left:auto}.ontario-medium-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-medium-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-medium-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-medium-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-medium-push-9{position:relative;left:75%;right:auto}.ontario-medium-pull-9{position:relative;right:75%;left:auto}.ontario-medium-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-medium-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-medium-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-medium-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-medium-1{width:8.3333333333%}.ontario-medium-2{width:16.6666666667%}.ontario-medium-3{width:25%}.ontario-medium-4{width:33.3333333333%}.ontario-medium-5{width:41.6666666667%}.ontario-medium-6{width:50%}.ontario-medium-7{width:58.3333333333%}.ontario-medium-8{width:66.6666666667%}.ontario-medium-9{width:75%}.ontario-medium-10{width:83.3333333333%}.ontario-medium-11{width:91.6666666667%}.ontario-medium-12{width:100%}.ontario-medium-offset-0{margin-left:0 !important}.ontario-medium-offset-1{margin-left:8.3333333333% !important}.ontario-medium-offset-2{margin-left:16.6666666667% !important}.ontario-medium-offset-3{margin-left:25% !important}.ontario-medium-offset-4{margin-left:33.3333333333% !important}.ontario-medium-offset-5{margin-left:41.6666666667% !important}.ontario-medium-offset-6{margin-left:50% !important}.ontario-medium-offset-7{margin-left:58.3333333333% !important}.ontario-medium-offset-8{margin-left:66.6666666667% !important}.ontario-medium-offset-9{margin-left:75% !important}.ontario-medium-offset-10{margin-left:83.3333333333% !important}.ontario-medium-offset-11{margin-left:91.6666666667% !important}.ontario-medium-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-medium-centered,.ontario-columns.ontario-medium-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-medium-uncentered,.ontario-columns.ontario-medium-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-medium-centered:last-child,.ontario-columns.ontario-medium-centered:last-child{float:none}.ontario-column.ontario-medium-uncentered:last-child,.ontario-columns.ontario-medium-uncentered:last-child{float:left}.ontario-column.ontario-medium-uncentered.ontario-opposite,.ontario-columns.ontario-medium-uncentered.ontario-opposite{float:right}.ontario-row.ontario-medium-collapse>.ontario-column,.ontario-row.ontario-medium-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-medium-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-medium-uncollapse>.ontario-column,.ontario-row.ontario-medium-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:73.063em){.ontario-large-push-0{position:relative;left:0;right:auto}.ontario-large-pull-0{position:relative;right:0;left:auto}.ontario-large-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-large-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-large-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-large-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-large-push-3{position:relative;left:25%;right:auto}.ontario-large-pull-3{position:relative;right:25%;left:auto}.ontario-large-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-large-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-large-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-large-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-large-push-6{position:relative;left:50%;right:auto}.ontario-large-pull-6{position:relative;right:50%;left:auto}.ontario-large-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-large-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-large-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-large-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-large-push-9{position:relative;left:75%;right:auto}.ontario-large-pull-9{position:relative;right:75%;left:auto}.ontario-large-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-large-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-large-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-large-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-large-1{width:8.3333333333%}.ontario-large-2{width:16.6666666667%}.ontario-large-3{width:25%}.ontario-large-4{width:33.3333333333%}.ontario-large-5{width:41.6666666667%}.ontario-large-6{width:50%}.ontario-large-7{width:58.3333333333%}.ontario-large-8{width:66.6666666667%}.ontario-large-9{width:75%}.ontario-large-10{width:83.3333333333%}.ontario-large-11{width:91.6666666667%}.ontario-large-12{width:100%}.ontario-large-offset-0{margin-left:0 !important}.ontario-large-offset-1{margin-left:8.3333333333% !important}.ontario-large-offset-2{margin-left:16.6666666667% !important}.ontario-large-offset-3{margin-left:25% !important}.ontario-large-offset-4{margin-left:33.3333333333% !important}.ontario-large-offset-5{margin-left:41.6666666667% !important}.ontario-large-offset-6{margin-left:50% !important}.ontario-large-offset-7{margin-left:58.3333333333% !important}.ontario-large-offset-8{margin-left:66.6666666667% !important}.ontario-large-offset-9{margin-left:75% !important}.ontario-large-offset-10{margin-left:83.3333333333% !important}.ontario-large-offset-11{margin-left:91.6666666667% !important}.ontario-large-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-large-centered,.ontario-columns.ontario-large-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-large-uncentered,.ontario-columns.ontario-large-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-large-centered:last-child,.ontario-columns.ontario-large-centered:last-child{float:none}.ontario-column.ontario-large-uncentered:last-child,.ontario-columns.ontario-large-uncentered:last-child{float:left}.ontario-column.ontario-large-uncentered.ontario-opposite,.ontario-columns.ontario-large-uncentered.ontario-opposite{float:right}.ontario-row.ontario-large-collapse>.ontario-column,.ontario-row.ontario-large-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-large-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-large-uncollapse>.ontario-column,.ontario-row.ontario-large-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-push-0{position:relative;left:0;right:auto}.ontario-pull-0{position:relative;right:0;left:auto}.ontario-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-push-3{position:relative;left:25%;right:auto}.ontario-pull-3{position:relative;right:25%;left:auto}.ontario-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-push-6{position:relative;left:50%;right:auto}.ontario-pull-6{position:relative;right:50%;left:auto}.ontario-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-push-9{position:relative;left:75%;right:auto}.ontario-pull-9{position:relative;right:75%;left:auto}.ontario-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-pull-11{position:relative;right:91.6666666667%;left:auto}}@media only screen and (min-width:96.063em){.ontario-xlarge-push-0{position:relative;left:0;right:auto}.ontario-xlarge-pull-0{position:relative;right:0;left:auto}.ontario-xlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xlarge-push-3{position:relative;left:25%;right:auto}.ontario-xlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xlarge-push-6{position:relative;left:50%;right:auto}.ontario-xlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xlarge-push-9{position:relative;left:75%;right:auto}.ontario-xlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-xlarge-1{width:8.3333333333%}.ontario-xlarge-2{width:16.6666666667%}.ontario-xlarge-3{width:25%}.ontario-xlarge-4{width:33.3333333333%}.ontario-xlarge-5{width:41.6666666667%}.ontario-xlarge-6{width:50%}.ontario-xlarge-7{width:58.3333333333%}.ontario-xlarge-8{width:66.6666666667%}.ontario-xlarge-9{width:75%}.ontario-xlarge-10{width:83.3333333333%}.ontario-xlarge-11{width:91.6666666667%}.ontario-xlarge-12{width:100%}.ontario-xlarge-offset-0{margin-left:0 !important}.ontario-xlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xlarge-offset-3{margin-left:25% !important}.ontario-xlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xlarge-offset-6{margin-left:50% !important}.ontario-xlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xlarge-offset-9{margin-left:75% !important}.ontario-xlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xlarge-centered,.ontario-columns.ontario-xlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xlarge-uncentered,.ontario-columns.ontario-xlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xlarge-centered:last-child,.ontario-columns.ontario-xlarge-centered:last-child{float:none}.ontario-column.ontario-xlarge-uncentered:last-child,.ontario-columns.ontario-xlarge-uncentered:last-child{float:left}.ontario-column.ontario-xlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xlarge-collapse>.ontario-column,.ontario-row.ontario-xlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xlarge-uncollapse>.ontario-column,.ontario-row.ontario-xlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:120.063em){.ontario-xxlarge-push-0{position:relative;left:0;right:auto}.ontario-xxlarge-pull-0{position:relative;right:0;left:auto}.ontario-xxlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xxlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xxlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xxlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xxlarge-push-3{position:relative;left:25%;right:auto}.ontario-xxlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xxlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xxlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xxlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xxlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xxlarge-push-6{position:relative;left:50%;right:auto}.ontario-xxlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xxlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xxlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xxlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xxlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xxlarge-push-9{position:relative;left:75%;right:auto}.ontario-xxlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xxlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xxlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xxlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xxlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-xxlarge-1{width:8.3333333333%}.ontario-xxlarge-2{width:16.6666666667%}.ontario-xxlarge-3{width:25%}.ontario-xxlarge-4{width:33.3333333333%}.ontario-xxlarge-5{width:41.6666666667%}.ontario-xxlarge-6{width:50%}.ontario-xxlarge-7{width:58.3333333333%}.ontario-xxlarge-8{width:66.6666666667%}.ontario-xxlarge-9{width:75%}.ontario-xxlarge-10{width:83.3333333333%}.ontario-xxlarge-11{width:91.6666666667%}.ontario-xxlarge-12{width:100%}.ontario-xxlarge-offset-0{margin-left:0 !important}.ontario-xxlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xxlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xxlarge-offset-3{margin-left:25% !important}.ontario-xxlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xxlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xxlarge-offset-6{margin-left:50% !important}.ontario-xxlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xxlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xxlarge-offset-9{margin-left:75% !important}.ontario-xxlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xxlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xxlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xxlarge-centered,.ontario-columns.ontario-xxlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xxlarge-uncentered,.ontario-columns.ontario-xxlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xxlarge-centered:last-child,.ontario-columns.ontario-xxlarge-centered:last-child{float:none}.ontario-column.ontario-xxlarge-uncentered:last-child,.ontario-columns.ontario-xxlarge-uncentered:last-child{float:left}.ontario-column.ontario-xxlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xxlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xxlarge-collapse>.ontario-column,.ontario-row.ontario-xxlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xxlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xxlarge-uncollapse>.ontario-column,.ontario-row.ontario-xxlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-margin-top-0-\\!{margin-top:0}.ontario-padding-top-0-\\!{padding-top:0}.ontario-margin-bottom-0-\\!{margin-bottom:0}.ontario-padding-bottom-0-\\!{padding-bottom:0}.ontario-margin-left-0-\\!{margin-left:0}.ontario-padding-left-0-\\!{padding-left:0}.ontario-margin-right-0-\\!{margin-right:0}.ontario-padding-right-0-\\!{padding-right:0}.ontario-margin-top-4-\\!{margin-top:0.25rem}.ontario-padding-top-4-\\!{padding-top:0.25rem}.ontario-margin-bottom-4-\\!{margin-bottom:0.25rem}.ontario-padding-bottom-4-\\!{padding-bottom:0.25rem}.ontario-margin-left-4-\\!{margin-left:0.25rem}.ontario-padding-left-4-\\!{padding-left:0.25rem}.ontario-margin-right-4-\\!{margin-right:0.25rem}.ontario-padding-right-4-\\!{padding-right:0.25rem}.ontario-margin-top-8-\\!{margin-top:0.5rem}.ontario-padding-top-8-\\!{padding-top:0.5rem}.ontario-margin-bottom-8-\\!{margin-bottom:0.5rem}.ontario-padding-bottom-8-\\!{padding-bottom:0.5rem}.ontario-margin-left-8-\\!{margin-left:0.5rem}.ontario-padding-left-8-\\!{padding-left:0.5rem}.ontario-margin-right-8-\\!{margin-right:0.5rem}.ontario-padding-right-8-\\!{padding-right:0.5rem}.ontario-margin-top-12-\\!{margin-top:0.75rem}.ontario-padding-top-12-\\!{padding-top:0.75rem}.ontario-margin-bottom-12-\\!{margin-bottom:0.75rem}.ontario-padding-bottom-12-\\!{padding-bottom:0.75rem}.ontario-margin-left-12-\\!{margin-left:0.75rem}.ontario-padding-left-12-\\!{padding-left:0.75rem}.ontario-margin-right-12-\\!{margin-right:0.75rem}.ontario-padding-right-12-\\!{padding-right:0.75rem}.ontario-margin-top-16-\\!{margin-top:1rem}.ontario-padding-top-16-\\!{padding-top:1rem}.ontario-margin-bottom-16-\\!{margin-bottom:1rem}.ontario-padding-bottom-16-\\!{padding-bottom:1rem}.ontario-margin-left-16-\\!{margin-left:1rem}.ontario-padding-left-16-\\!{padding-left:1rem}.ontario-margin-right-16-\\!{margin-right:1rem}.ontario-padding-right-16-\\!{padding-right:1rem}.ontario-margin-top-24-\\!{margin-top:1.5rem}.ontario-padding-top-24-\\!{padding-top:1.5rem}.ontario-margin-bottom-24-\\!{margin-bottom:1.5rem}.ontario-padding-bottom-24-\\!{padding-bottom:1.5rem}.ontario-margin-left-24-\\!{margin-left:1.5rem}.ontario-padding-left-24-\\!{padding-left:1.5rem}.ontario-margin-right-24-\\!{margin-right:1.5rem}.ontario-padding-right-24-\\!{padding-right:1.5rem}.ontario-margin-top-32-\\!{margin-top:2rem}.ontario-padding-top-32-\\!{padding-top:2rem}.ontario-margin-bottom-32-\\!{margin-bottom:2rem}.ontario-padding-bottom-32-\\!{padding-bottom:2rem}.ontario-margin-left-32-\\!{margin-left:2rem}.ontario-padding-left-32-\\!{padding-left:2rem}.ontario-margin-right-32-\\!{margin-right:2rem}.ontario-padding-right-32-\\!{padding-right:2rem}.ontario-margin-top-40-\\!{margin-top:2.5rem}.ontario-padding-top-40-\\!{padding-top:2.5rem}.ontario-margin-bottom-40-\\!{margin-bottom:2.5rem}.ontario-padding-bottom-40-\\!{padding-bottom:2.5rem}.ontario-margin-left-40-\\!{margin-left:2.5rem}.ontario-padding-left-40-\\!{padding-left:2.5rem}.ontario-margin-right-40-\\!{margin-right:2.5rem}.ontario-padding-right-40-\\!{padding-right:2.5rem}.ontario-margin-top-48-\\!{margin-top:3rem}.ontario-padding-top-48-\\!{padding-top:3rem}.ontario-margin-bottom-48-\\!{margin-bottom:3rem}.ontario-padding-bottom-48-\\!{padding-bottom:3rem}.ontario-margin-left-48-\\!{margin-left:3rem}.ontario-padding-left-48-\\!{padding-left:3rem}.ontario-margin-right-48-\\!{margin-right:3rem}.ontario-padding-right-48-\\!{padding-right:3rem}.ontario-margin-top-64-\\!{margin-top:4rem}.ontario-padding-top-64-\\!{padding-top:4rem}.ontario-margin-bottom-64-\\!{margin-bottom:4rem}.ontario-padding-bottom-64-\\!{padding-bottom:4rem}.ontario-margin-left-64-\\!{margin-left:4rem}.ontario-padding-left-64-\\!{padding-left:4rem}.ontario-margin-right-64-\\!{margin-right:4rem}.ontario-padding-right-64-\\!{padding-right:4rem}.ontario-padding-top-0-\\!{padding-top:0 !important}.ontario-padding-bottom-0-\\!{padding-bottom:0 !important}.ontario-padding-right-0-\\!{padding-right:0 !important}.ontario-padding-left-0-\\!{padding-left:0 !important}.ontario-padding-top-4-\\!{padding-top:0.25rem !important}.ontario-padding-bottom-4-\\!{padding-bottom:0.25rem !important}.ontario-padding-right-4-\\!{padding-right:0.25rem !important}.ontario-padding-left-4-\\!{padding-left:0.25rem !important}.ontario-padding-top-8-\\!{padding-top:0.5rem !important}.ontario-padding-bottom-8-\\!{padding-bottom:0.5rem !important}.ontario-padding-right-8-\\!{padding-right:0.5rem !important}.ontario-padding-left-8-\\!{padding-left:0.5rem !important}.ontario-padding-top-12-\\!{padding-top:0.75rem !important}.ontario-padding-bottom-12-\\!{padding-bottom:0.75rem !important}.ontario-padding-right-12-\\!{padding-right:0.75rem !important}.ontario-padding-left-12-\\!{padding-left:0.75rem !important}.ontario-padding-top-16-\\!{padding-top:1rem !important}.ontario-padding-bottom-16-\\!{padding-bottom:1rem !important}.ontario-padding-right-16-\\!{padding-right:1rem !important}.ontario-padding-left-16-\\!{padding-left:1rem !important}.ontario-padding-top-24-\\!{padding-top:1.5rem !important}.ontario-padding-bottom-24-\\!{padding-bottom:1.5rem !important}.ontario-padding-right-24-\\!{padding-right:1.5rem !important}.ontario-padding-left-24-\\!{padding-left:1.5rem !important}.ontario-padding-top-32-\\!{padding-top:2rem !important}.ontario-padding-bottom-32-\\!{padding-bottom:2rem !important}.ontario-padding-right-32-\\!{padding-right:2rem !important}.ontario-padding-left-32-\\!{padding-left:2rem !important}.ontario-padding-top-40-\\!{padding-top:2.5rem !important}.ontario-padding-bottom-40-\\!{padding-bottom:2.5rem !important}.ontario-padding-right-40-\\!{padding-right:2.5rem !important}.ontario-padding-left-40-\\!{padding-left:2.5rem !important}.ontario-padding-top-48-\\!{padding-top:3rem !important}.ontario-padding-bottom-48-\\!{padding-bottom:3rem !important}.ontario-padding-right-48-\\!{padding-right:3rem !important}.ontario-padding-left-48-\\!{padding-left:3rem !important}.ontario-padding-top-64-\\!{padding-top:4rem !important}.ontario-padding-bottom-64-\\!{padding-bottom:4rem !important}.ontario-padding-right-64-\\!{padding-right:4rem !important}.ontario-padding-left-64-\\!{padding-left:4rem !important}.ontario-padding-top-80-\\!{padding-top:5rem !important}.ontario-padding-bottom-80-\\!{padding-bottom:5rem !important}.ontario-padding-right-80-\\!{padding-right:5rem !important}.ontario-padding-left-80-\\!{padding-left:5rem !important}.ontario-margin-top-0-\\!{margin-top:0 !important}.ontario-margin-bottom-0-\\!{margin-bottom:0 !important}.ontario-margin-right-0-\\!{margin-right:0 !important}.ontario-margin-left-0-\\!{margin-left:0 !important}.ontario-margin-top-4-\\!{margin-top:0.25rem !important}.ontario-margin-bottom-4-\\!{margin-bottom:0.25rem !important}.ontario-margin-right-4-\\!{margin-right:0.25rem !important}.ontario-margin-left-4-\\!{margin-left:0.25rem !important}.ontario-margin-top-8-\\!{margin-top:0.5rem !important}.ontario-margin-bottom-8-\\!{margin-bottom:0.5rem !important}.ontario-margin-right-8-\\!{margin-right:0.5rem !important}.ontario-margin-left-8-\\!{margin-left:0.5rem !important}.ontario-margin-top-12-\\!{margin-top:0.75rem !important}.ontario-margin-bottom-12-\\!{margin-bottom:0.75rem !important}.ontario-margin-right-12-\\!{margin-right:0.75rem !important}.ontario-margin-left-12-\\!{margin-left:0.75rem !important}.ontario-margin-top-16-\\!{margin-top:1rem !important}.ontario-margin-bottom-16-\\!{margin-bottom:1rem !important}.ontario-margin-right-16-\\!{margin-right:1rem !important}.ontario-margin-left-16-\\!{margin-left:1rem !important}.ontario-margin-top-24-\\!{margin-top:1.5rem !important}.ontario-margin-bottom-24-\\!{margin-bottom:1.5rem !important}.ontario-margin-right-24-\\!{margin-right:1.5rem !important}.ontario-margin-left-24-\\!{margin-left:1.5rem !important}.ontario-margin-top-32-\\!{margin-top:2rem !important}.ontario-margin-bottom-32-\\!{margin-bottom:2rem !important}.ontario-margin-right-32-\\!{margin-right:2rem !important}.ontario-margin-left-32-\\!{margin-left:2rem !important}.ontario-margin-top-40-\\!{margin-top:2.5rem !important}.ontario-margin-bottom-40-\\!{margin-bottom:2.5rem !important}.ontario-margin-right-40-\\!{margin-right:2.5rem !important}.ontario-margin-left-40-\\!{margin-left:2.5rem !important}.ontario-margin-top-48-\\!{margin-top:3rem !important}.ontario-margin-bottom-48-\\!{margin-bottom:3rem !important}.ontario-margin-right-48-\\!{margin-right:3rem !important}.ontario-margin-left-48-\\!{margin-left:3rem !important}.ontario-margin-top-64-\\!{margin-top:4rem !important}.ontario-margin-bottom-64-\\!{margin-bottom:4rem !important}.ontario-margin-right-64-\\!{margin-right:4rem !important}.ontario-margin-left-64-\\!{margin-left:4rem !important}.ontario-margin-top-80-\\!{margin-top:5rem !important}.ontario-margin-bottom-80-\\!{margin-bottom:5rem !important}.ontario-margin-right-80-\\!{margin-right:5rem !important}.ontario-margin-left-80-\\!{margin-left:5rem !important}.ontario-footer{color:#FFFFFF;margin-top:5rem;padding:4rem 0}.ontario-footer .ontario-columns *:last-child{margin-bottom:0}@media screen and (max-width: 73em){.ontario-footer .ontario-columns{margin-bottom:3rem}.ontario-footer .ontario-columns:last-of-type{margin-bottom:0}}.ontario-footer__links-container{list-style:none;margin:0 0 1rem 0}@media screen and (min-width: 73em){.ontario-footer__links-container{margin-bottom:0.5rem}}.ontario-footer__links-container--inline{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap}@media screen and (min-width: 40em){.ontario-footer__links-container--inline{-ms-flex-direction:row;flex-direction:row}}.ontario-footer__links-container--two-column-list{-webkit-column-count:1;-moz-column-count:1;column-count:1;display:block;margin:0}@media screen and (min-width: 40em){.ontario-footer__links-container--two-column-list{-webkit-column-count:2;-moz-column-count:2;column-count:2}.ontario-footer__links-container--two-column-list .ontario-footer__link{padding:0;margin:0 1rem 1rem 0}}.ontario-footer__links-container li{padding:0.25rem 0}.ontario-footer__link{color:#FFFFFF;display:inline-block;padding:0.5rem 0;margin:0;text-decoration:underline}.ontario-footer__link:hover,.ontario-footer__link:focus{text-decoration:none}.ontario-footer__link:visited,.ontario-footer__link:active,.ontario-footer__link:hover{color:#FFFFFF}@media screen and (min-width: 40em){.ontario-footer__link{padding:0;margin:0 3rem 1rem 0}}.ontario-footer__copyright a{margin:0}.ontario-footer__links-container--social{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.ontario-footer__links-container--social .ontario-footer__link{background:transparent;border-radius:45%;margin:0 1rem 0.75rem 0;padding:0;outline:none;height:3.5rem;width:3.5rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.ontario-footer__links-container--social .ontario-footer__link:hover,.ontario-footer__links-container--social .ontario-footer__link:focus{background-color:black}.ontario-footer__links-container--social .ontario-footer__link:hover .ontario-icon,.ontario-footer__links-container--social .ontario-footer__link:focus .ontario-icon{fill:#FFFFFF}@media screen and (min-width: 40em){.ontario-footer__links-container--social .ontario-footer__link{height:3rem;width:3rem}}.ontario-footer__links-container--social .ontario-footer__link .ontario-icon{fill:#FFFFFF;width:36px;height:36px}@media screen and (min-width: 40em){.ontario-footer__links-container--social .ontario-footer__link .ontario-icon{width:32px;height:32px}}.ontario-footer__paragraph{max-width:48rem;width:100%;margin-bottom:1.5rem}.ontario-footer p a,.ontario-footer__paragraph a,.ontario-footer__list_item a{color:#FFFFFF;font-weight:600}.ontario-footer p a:visited,.ontario-footer__paragraph a:visited,.ontario-footer__list_item a:visited{color:#FFFFFF}.ontario-footer p a:active,.ontario-footer__paragraph a:active,.ontario-footer__list_item a:active{color:#e6e6e6}.ontario-footer p a:focus,.ontario-footer p a:hover,.ontario-footer__paragraph a:focus,.ontario-footer__paragraph a:hover,.ontario-footer__list_item a:focus,.ontario-footer__list_item a:hover{text-decoration:none}.ontario-button.ontario-footer__button{background-color:#1a1a1a;border:2px solid #FFFFFF;border-color:#FFFFFF;color:#FFFFFF;margin-bottom:2rem;border-radius:0.25rem;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;display:inline-block;font-size:1.125rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:600;line-height:1.5555555556;margin:0 1.75rem 1.5rem 0;min-width:10rem;padding:0.625rem 1.5rem;text-align:center;text-decoration:none;cursor:pointer}.ontario-button.ontario-footer__button:hover{background-color:#4d4d4d}.ontario-button.ontario-footer__button:focus,.ontario-button.ontario-footer__button:active{background-color:#666666;-webkit-box-shadow:0 0 0 0.25rem #009ADB;box-shadow:0 0 0 0.25rem #009ADB;outline:0.25rem solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}.ontario-footer__button+.ontario-footer__links-container{margin-top:1.5rem}.ontario-footer--default,.ontario-footer__expanded-top-section{position:relative}.ontario-footer--default:before,.ontario-footer__expanded-top-section:before{background-color:#333333;background-repeat:no-repeat;content:"";position:absolute;top:0;left:0;width:100%;height:100%}.ontario-footer--default:before{background-image:var(--imagePath, url(""))}.ontario-footer__expanded-top-section:before{background-image:var(--imagePath, url(""))}.ontario-footer--default{background-color:#1a1a1a;border-bottom:0.25rem solid #4d4d4d}.ontario-footer--default:before{background-size:112.5rem;background-position:calc(50vw - 73.5rem) -64rem}@media screen and (min-width: 40em){.ontario-footer--default:before{background-size:180rem;background-position:calc(50vw - 120rem) -106rem}}@media screen and (min-width: 73em){.ontario-footer--default:before{background-size:275rem;background-position:calc(50vw - 187rem) -160rem}}.ontario-footer--expanded{padding-top:0;background-color:#1a1a1a;border-bottom:0.25rem solid #4d4d4d}.ontario-footer__expanded-top-section{background-color:#262626;padding:4rem 0}.ontario-footer__expanded-top-section:before{background-size:165rem;background-position:calc(50vw - 125rem) -64rem}@media screen and (min-width: 40em){.ontario-footer__expanded-top-section:before{background-size:250rem;background-position:calc(50vw - 195rem) -106rem}}@media screen and (min-width: 73em){.ontario-footer__expanded-top-section:before{background-size:305rem;background-position:calc(50vw - 222rem) -160rem}}.ontario-footer__expanded-top-section .ontario-footer__link{text-decoration:underline}.ontario-footer__expanded-top-section .ontario-footer__link:hover,.ontario-footer__expanded-top-section .ontario-footer__link:focus{text-decoration:none}.ontario-footer__expanded-top-section .ontario-footer__link:active{color:#e6e6e6}.ontario-footer__expanded-top-section ul{margin-bottom:0}.ontario-expanded-footer__one-third-block{margin-bottom:0}.ontario-expanded-footer__one-third-block:first-of-type,.ontario-expanded-footer__one-third-block:nth-child(2){margin-bottom:3rem}@media screen and (min-width: 40em){.ontario-expanded-footer__one-third-block{margin-bottom:0}.ontario-expanded-footer__one-third-block:first-of-type{margin-bottom:3rem}.ontario-expanded-footer__one-third-block:nth-child(2){margin-bottom:0}}@media screen and (min-width: 73em){.ontario-expanded-footer__one-third-block{margin-bottom:0}.ontario-expanded-footer__one-third-block:first-of-type{margin-bottom:0}}.ontario-footer__expanded-bottom-section{background-color:#1a1a1a;padding-top:4rem}';
var OntarioFooter = (function () {
	function t(t) {
		var o = this;
		registerInstance(this, t);
		this.isTwoColumnLayout = function () {
			return o.type === 'twoColumn';
		};
		this.isThreeColumnLayout = function () {
			return o.type === 'threeColumn';
		};
		this.language = 'en';
		this.type = 'default';
		this.footerLinks = undefined;
		this.socialLinks = undefined;
		this.twoColumnOptions = undefined;
		this.threeColumnOptions = undefined;
		this.topMargin = true;
		this.translations = translations;
		this.footerLinksState = undefined;
		this.socialLinksState = undefined;
		this.twoColumnState = undefined;
		this.threeColumnState = undefined;
	}
	t.prototype.handleSetAppLanguage = function (t) {
		this.language = validateLanguage(t);
	};
	t.prototype.handleHeaderLanguageToggled = function (t) {
		this.language = validateLanguage(t);
	};
	t.prototype.processFooterLinks = function () {
		this.parseOptions(this.footerLinks);
	};
	t.prototype.processSocialLinks = function () {
		this.parseOptions(this.socialLinks);
	};
	t.prototype.processTwoColumnOptions = function () {
		this.twoColumnOptions && this.parseOptions(this.twoColumnOptions);
		this.verifyTwoColumnOptions();
	};
	t.prototype.processThreeColumnOptions = function () {
		this.threeColumnOptions && this.parseOptions(this.threeColumnOptions);
		this.verifyThreeColumnOptions();
	};
	t.prototype.verifyTwoColumnOptions = function () {
		if (this.isTwoColumnLayout() && isInvalidTwoColumnOptions(this.twoColumnState)) {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' twoColumnOptions ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-footer> ')
				.addRegularText('were not fully set. Please review your values and ensure all options are set.')
				.printMessage();
		}
	};
	t.prototype.verifyThreeColumnOptions = function () {
		if (this.isThreeColumnLayout() && isInvalidThreeColumnOptions(this.threeColumnState)) {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' threeColumnOptions ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-footer> ')
				.addRegularText('were not fully set. Please review your values and ensure all options are set.')
				.printMessage();
		}
	};
	t.prototype.parseOptions = function (t) {
		var o = t;
		var e = typeof o === 'string';
		if (!o) {
			return;
		}
		try {
			if (o === this.footerLinks) {
				this.footerLinksState = e ? JSON.parse(o) : o;
			} else if (o === this.socialLinks) {
				this.socialLinksState = e ? JSON.parse(o) : o;
			} else if (o === this.twoColumnOptions) {
				this.twoColumnState = e ? JSON.parse(o) : o;
			} else {
				this.threeColumnState = e ? JSON.parse(o) : o;
			}
		} catch (t) {
			var i = new ConsoleMessageClass();
			i.addDesignSystemTag()
				.addRegularText(' failed to parse props for ')
				.addMonospaceText('<ontario-footer>')
				.addRegularText(' in ')
				.addMonospaceText('parseOptions()')
				.addRegularText(' method \n ')
				.addMonospaceText(t.stack)
				.printMessage(ConsoleType.Error);
		}
	};
	t.prototype.getBackgroundImage = function () {
		return { '--imagePath': 'url('.concat(getAssetPath('./assets/footer-default-supergraphic-logo.svg'), ')') };
	};
	t.prototype.getFooterClasses = function () {
		var t = 'ontario-footer ontario-footer--default';
		if (!this.topMargin) {
			t = ''.concat(t, '  ontario-margin-top-0-!');
		}
		return t;
	};
	t.prototype.getFooterLinks = function () {
		var t, o, e, i, a, n, r;
		var l = this,
			s = l.language,
			d = l.translations,
			h = l.footerLinksState;
		var m = h !== null && h !== void 0 ? h : {},
			u = m.accessibilityLink,
			c = m.privacyLink,
			p = m.contactLink,
			g = m.printerLink;
		var f = {
			accessibilityLink: {
				href:
					(t = u === null || u === void 0 ? void 0 : u.href) !== null && t !== void 0 ? t : d.accessibilityLink.link[s],
				text:
					(o = u === null || u === void 0 ? void 0 : u.text) !== null && o !== void 0 ? o : d.accessibilityLink.text[s],
			},
			privacyLink: {
				href: (e = c === null || c === void 0 ? void 0 : c.href) !== null && e !== void 0 ? e : d.privacyLink.link[s],
				text: (i = c === null || c === void 0 ? void 0 : c.text) !== null && i !== void 0 ? i : d.privacyLink.text[s],
			},
			printerLink: {
				href: (a = g === null || g === void 0 ? void 0 : g.href) !== null && a !== void 0 ? a : d.printerLink.link[s],
				text: (n = g === null || g === void 0 ? void 0 : g.text) !== null && n !== void 0 ? n : d.printerLink.text[s],
			},
		};
		if (p) {
			f['contactLink'] = { href: p.href, text: (r = p.text) !== null && r !== void 0 ? r : d.contactUs[s] };
		}
		return f;
	};
	t.prototype.componentWillLoad = function () {
		this.processFooterLinks();
		this.processSocialLinks();
		this.processTwoColumnOptions();
		this.processThreeColumnOptions();
		this.language = validateLanguage(this.language);
	};
	t.prototype.render = function () {
		var t = this,
			o = t.socialLinksState,
			e = t.twoColumnState,
			i = t.threeColumnState,
			a = t.topMargin;
		var n = this.getFooterLinks();
		if (this.isTwoColumnLayout()) {
			return h(
				ExpandedFooterWrapper,
				{ footerLinks: n, topMargin: a },
				h(FooterColumn, { data: e.column1 }),
				h(FooterColumn, { data: e.column2, socialLinks: o }),
			);
		}
		if (this.isThreeColumnLayout()) {
			return h(
				ExpandedFooterWrapper,
				{ footerLinks: n, topMargin: a },
				h(FooterColumn, { data: i.column1, isThreeColLayout: true, isFullWidthInMediumLayout: true }),
				h(FooterColumn, { data: i.column2, isThreeColLayout: true }),
				h(FooterColumn, { data: i.column3, socialLinks: o, isThreeColLayout: true }),
			);
		}
		return h(
			'footer',
			{ class: this.getFooterClasses(), style: this.getBackgroundImage() },
			h(SimpleFooter, Object.assign({}, n)),
		);
	};
	Object.defineProperty(t, 'assetsDirs', {
		get: function () {
			return ['assets'];
		},
		enumerable: false,
		configurable: true,
	});
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return {
				footerLinks: ['processFooterLinks'],
				socialLinks: ['processSocialLinks'],
				twoColumnOptions: ['processTwoColumnOptions'],
				threeColumnOptions: ['processThreeColumnOptions'],
			};
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioFooter.style = ontarioFooterCss;
var OntarioIconClose =
	'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 24 24"><path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6L19 6.4z" fill="#ffffff"/></svg>\n';
var OntarioIconMenu =
	'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="#ffffff"/></svg>';
var OntarioIconSearch =
	'<svg class="svg-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="none"><path d="M15.5 14h-.8l-.28-.27A6.47 6.47 0 0 0 16 9.5a6.5 6.5 0 1 0-13 0A6.5 6.5 0 0 0 9.5 16a6.47 6.47 0 0 0 4.23-1.57l.27.28v.8l5 5 1.5-1.5-5-5zm-6 0C7 14 5 12 5 9.5S7 5 9.5 5 14 7 14 9.5 12 14 9.5 14z"/></svg>\n';
var OntarioIconSearchWhite =
	'<svg class="svg-icon" role="img" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#ffffff"><path d="M15.5 14h-.8l-.28-.27A6.47 6.47 0 0 0 16 9.5a6.5 6.5 0 1 0-13 0A6.5 6.5 0 0 0 9.5 16a6.47 6.47 0 0 0 4.23-1.57l.27.28v.8l5 5 1.5-1.5-5-5zm-6 0C7 14 5 12 5 9.5S7 5 9.5 5 14 7 14 9.5 12 14 9.5 14z"/></svg>\n';
var OntarioHeaderDefaultData = [
	{ title: 'Arts and Culture', href: 'https://www.ontario.ca/page/arts-and-culture' },
	{ title: 'Business and economy', href: 'https://www.ontario.ca/page/business-and-economy' },
	{ title: 'Driving and Roads', href: 'https://www.ontario.ca/page/driving-and-roads' },
	{ title: 'Education and training', href: 'https://www.ontario.ca/page/education-and-training' },
	{ title: 'Environment and energy', href: 'https://www.ontario.ca/page/environment-and-energy' },
	{ title: 'Government', href: 'https://www.ontario.ca/page/government' },
	{ title: 'Health and wellness', href: 'https://www.ontario.ca/page/health-care-ontario' },
	{ title: 'Home and community', href: 'https://www.ontario.ca/page/home-and-community' },
	{ title: 'Jobs and employment', href: 'https://www.ontario.ca/page/jobs-and-employment' },
	{ title: 'Law and safety', href: 'https://www.ontario.ca/page/law-and-safety' },
	{ title: 'Rural and north', href: 'https://www.ontario.ca/page/rural-and-north' },
	{ title: 'Taxes and benefits', href: 'https://www.ontario.ca/page/taxes-and-benefits' },
	{ title: 'Travel and recreation', href: 'https://www.ontario.ca/page/travel-and-recreation' },
];
var ontarioApplicationHeaderCss =
	'.ontario-application-subheader__heading{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}.ontario-application-subheader__heading{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){.ontario-application-subheader__heading{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}.ontario-application-navigation a:focus,.ontario-application-navigation a:active,.ontario-header-button:focus,.ontario-input:focus,.ontario-input:active{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-row{margin:0 auto;max-width:72rem;width:100%}.ontario-row:before,.ontario-row:after{content:"";display:table}.ontario-row:after{clear:both}.ontario-row.ontario-row--collapse>.ontario-column,.ontario-row.ontario-row--collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-row--collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row .ontario-row{margin:0 -1rem;max-width:none;width:auto}.ontario-row .ontario-row:before,.ontario-row .ontario-row:after{content:"";display:table}.ontario-row .ontario-row:after{clear:both}.ontario-row .ontario-row.ontario-row--collapse{margin:0;max-width:none;width:auto}.ontario-row .ontario-row.ontario-row--collapse:before,.ontario-row .ontario-row.ontario-row--collapse:after{content:"";display:table}.ontario-row .ontario-row.ontario-row--collapse:after{clear:both}.ontario-column,.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;float:left}.ontario-column+.ontario-column:last-child,.ontario-column+.ontario-columns:last-child,.ontario-columns+.ontario-column:last-child,.ontario-columns+.ontario-columns:last-child{float:right}.ontario-column+.ontario-column.ontario-end,.ontario-column+.ontario-columns.ontario-end,.ontario-columns+.ontario-column.ontario-end,.ontario-columns+.ontario-columns.ontario-end{float:left}@media only screen{.ontario-small-push-0{position:relative;left:0;right:auto}.ontario-small-pull-0{position:relative;right:0;left:auto}.ontario-small-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-small-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-small-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-small-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-small-push-3{position:relative;left:25%;right:auto}.ontario-small-pull-3{position:relative;right:25%;left:auto}.ontario-small-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-small-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-small-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-small-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-small-push-6{position:relative;left:50%;right:auto}.ontario-small-pull-6{position:relative;right:50%;left:auto}.ontario-small-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-small-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-small-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-small-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-small-push-9{position:relative;left:75%;right:auto}.ontario-small-pull-9{position:relative;right:75%;left:auto}.ontario-small-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-small-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-small-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-small-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-small-1{width:8.3333333333%}.ontario-small-2{width:16.6666666667%}.ontario-small-3{width:25%}.ontario-small-4{width:33.3333333333%}.ontario-small-5{width:41.6666666667%}.ontario-small-6{width:50%}.ontario-small-7{width:58.3333333333%}.ontario-small-8{width:66.6666666667%}.ontario-small-9{width:75%}.ontario-small-10{width:83.3333333333%}.ontario-small-11{width:91.6666666667%}.ontario-small-12{width:100%}.ontario-small-offset-0{margin-left:0 !important}.ontario-small-offset-1{margin-left:8.3333333333% !important}.ontario-small-offset-2{margin-left:16.6666666667% !important}.ontario-small-offset-3{margin-left:25% !important}.ontario-small-offset-4{margin-left:33.3333333333% !important}.ontario-small-offset-5{margin-left:41.6666666667% !important}.ontario-small-offset-6{margin-left:50% !important}.ontario-small-offset-7{margin-left:58.3333333333% !important}.ontario-small-offset-8{margin-left:66.6666666667% !important}.ontario-small-offset-9{margin-left:75% !important}.ontario-small-offset-10{margin-left:83.3333333333% !important}.ontario-small-offset-11{margin-left:91.6666666667% !important}.ontario-small-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-small-centered,.ontario-columns.ontario-small-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-small-uncentered,.ontario-columns.ontario-small-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-small-centered:last-child,.ontario-columns.ontario-small-centered:last-child{float:none}.ontario-column.ontario-small-uncentered:last-child,.ontario-columns.ontario-small-uncentered:last-child{float:left}.ontario-column.ontario-small-uncentered.ontario-opposite,.ontario-columns.ontario-small-uncentered.ontario-opposite{float:right}.ontario-row.ontario-small-collapse>.ontario-column,.ontario-row.ontario-small-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-small-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-small-uncollapse>.ontario-column,.ontario-row.ontario-small-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:40.063em){.ontario-medium-push-0{position:relative;left:0;right:auto}.ontario-medium-pull-0{position:relative;right:0;left:auto}.ontario-medium-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-medium-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-medium-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-medium-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-medium-push-3{position:relative;left:25%;right:auto}.ontario-medium-pull-3{position:relative;right:25%;left:auto}.ontario-medium-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-medium-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-medium-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-medium-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-medium-push-6{position:relative;left:50%;right:auto}.ontario-medium-pull-6{position:relative;right:50%;left:auto}.ontario-medium-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-medium-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-medium-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-medium-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-medium-push-9{position:relative;left:75%;right:auto}.ontario-medium-pull-9{position:relative;right:75%;left:auto}.ontario-medium-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-medium-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-medium-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-medium-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-medium-1{width:8.3333333333%}.ontario-medium-2{width:16.6666666667%}.ontario-medium-3{width:25%}.ontario-medium-4{width:33.3333333333%}.ontario-medium-5{width:41.6666666667%}.ontario-medium-6{width:50%}.ontario-medium-7{width:58.3333333333%}.ontario-medium-8{width:66.6666666667%}.ontario-medium-9{width:75%}.ontario-medium-10{width:83.3333333333%}.ontario-medium-11{width:91.6666666667%}.ontario-medium-12{width:100%}.ontario-medium-offset-0{margin-left:0 !important}.ontario-medium-offset-1{margin-left:8.3333333333% !important}.ontario-medium-offset-2{margin-left:16.6666666667% !important}.ontario-medium-offset-3{margin-left:25% !important}.ontario-medium-offset-4{margin-left:33.3333333333% !important}.ontario-medium-offset-5{margin-left:41.6666666667% !important}.ontario-medium-offset-6{margin-left:50% !important}.ontario-medium-offset-7{margin-left:58.3333333333% !important}.ontario-medium-offset-8{margin-left:66.6666666667% !important}.ontario-medium-offset-9{margin-left:75% !important}.ontario-medium-offset-10{margin-left:83.3333333333% !important}.ontario-medium-offset-11{margin-left:91.6666666667% !important}.ontario-medium-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-medium-centered,.ontario-columns.ontario-medium-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-medium-uncentered,.ontario-columns.ontario-medium-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-medium-centered:last-child,.ontario-columns.ontario-medium-centered:last-child{float:none}.ontario-column.ontario-medium-uncentered:last-child,.ontario-columns.ontario-medium-uncentered:last-child{float:left}.ontario-column.ontario-medium-uncentered.ontario-opposite,.ontario-columns.ontario-medium-uncentered.ontario-opposite{float:right}.ontario-row.ontario-medium-collapse>.ontario-column,.ontario-row.ontario-medium-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-medium-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-medium-uncollapse>.ontario-column,.ontario-row.ontario-medium-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:73.063em){.ontario-large-push-0{position:relative;left:0;right:auto}.ontario-large-pull-0{position:relative;right:0;left:auto}.ontario-large-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-large-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-large-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-large-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-large-push-3{position:relative;left:25%;right:auto}.ontario-large-pull-3{position:relative;right:25%;left:auto}.ontario-large-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-large-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-large-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-large-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-large-push-6{position:relative;left:50%;right:auto}.ontario-large-pull-6{position:relative;right:50%;left:auto}.ontario-large-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-large-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-large-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-large-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-large-push-9{position:relative;left:75%;right:auto}.ontario-large-pull-9{position:relative;right:75%;left:auto}.ontario-large-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-large-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-large-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-large-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-large-1{width:8.3333333333%}.ontario-large-2{width:16.6666666667%}.ontario-large-3{width:25%}.ontario-large-4{width:33.3333333333%}.ontario-large-5{width:41.6666666667%}.ontario-large-6{width:50%}.ontario-large-7{width:58.3333333333%}.ontario-large-8{width:66.6666666667%}.ontario-large-9{width:75%}.ontario-large-10{width:83.3333333333%}.ontario-large-11{width:91.6666666667%}.ontario-large-12{width:100%}.ontario-large-offset-0{margin-left:0 !important}.ontario-large-offset-1{margin-left:8.3333333333% !important}.ontario-large-offset-2{margin-left:16.6666666667% !important}.ontario-large-offset-3{margin-left:25% !important}.ontario-large-offset-4{margin-left:33.3333333333% !important}.ontario-large-offset-5{margin-left:41.6666666667% !important}.ontario-large-offset-6{margin-left:50% !important}.ontario-large-offset-7{margin-left:58.3333333333% !important}.ontario-large-offset-8{margin-left:66.6666666667% !important}.ontario-large-offset-9{margin-left:75% !important}.ontario-large-offset-10{margin-left:83.3333333333% !important}.ontario-large-offset-11{margin-left:91.6666666667% !important}.ontario-large-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-large-centered,.ontario-columns.ontario-large-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-large-uncentered,.ontario-columns.ontario-large-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-large-centered:last-child,.ontario-columns.ontario-large-centered:last-child{float:none}.ontario-column.ontario-large-uncentered:last-child,.ontario-columns.ontario-large-uncentered:last-child{float:left}.ontario-column.ontario-large-uncentered.ontario-opposite,.ontario-columns.ontario-large-uncentered.ontario-opposite{float:right}.ontario-row.ontario-large-collapse>.ontario-column,.ontario-row.ontario-large-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-large-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-large-uncollapse>.ontario-column,.ontario-row.ontario-large-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-push-0{position:relative;left:0;right:auto}.ontario-pull-0{position:relative;right:0;left:auto}.ontario-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-push-3{position:relative;left:25%;right:auto}.ontario-pull-3{position:relative;right:25%;left:auto}.ontario-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-push-6{position:relative;left:50%;right:auto}.ontario-pull-6{position:relative;right:50%;left:auto}.ontario-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-push-9{position:relative;left:75%;right:auto}.ontario-pull-9{position:relative;right:75%;left:auto}.ontario-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-pull-11{position:relative;right:91.6666666667%;left:auto}}@media only screen and (min-width:96.063em){.ontario-xlarge-push-0{position:relative;left:0;right:auto}.ontario-xlarge-pull-0{position:relative;right:0;left:auto}.ontario-xlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xlarge-push-3{position:relative;left:25%;right:auto}.ontario-xlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xlarge-push-6{position:relative;left:50%;right:auto}.ontario-xlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xlarge-push-9{position:relative;left:75%;right:auto}.ontario-xlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-xlarge-1{width:8.3333333333%}.ontario-xlarge-2{width:16.6666666667%}.ontario-xlarge-3{width:25%}.ontario-xlarge-4{width:33.3333333333%}.ontario-xlarge-5{width:41.6666666667%}.ontario-xlarge-6{width:50%}.ontario-xlarge-7{width:58.3333333333%}.ontario-xlarge-8{width:66.6666666667%}.ontario-xlarge-9{width:75%}.ontario-xlarge-10{width:83.3333333333%}.ontario-xlarge-11{width:91.6666666667%}.ontario-xlarge-12{width:100%}.ontario-xlarge-offset-0{margin-left:0 !important}.ontario-xlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xlarge-offset-3{margin-left:25% !important}.ontario-xlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xlarge-offset-6{margin-left:50% !important}.ontario-xlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xlarge-offset-9{margin-left:75% !important}.ontario-xlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xlarge-centered,.ontario-columns.ontario-xlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xlarge-uncentered,.ontario-columns.ontario-xlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xlarge-centered:last-child,.ontario-columns.ontario-xlarge-centered:last-child{float:none}.ontario-column.ontario-xlarge-uncentered:last-child,.ontario-columns.ontario-xlarge-uncentered:last-child{float:left}.ontario-column.ontario-xlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xlarge-collapse>.ontario-column,.ontario-row.ontario-xlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xlarge-uncollapse>.ontario-column,.ontario-row.ontario-xlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:120.063em){.ontario-xxlarge-push-0{position:relative;left:0;right:auto}.ontario-xxlarge-pull-0{position:relative;right:0;left:auto}.ontario-xxlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xxlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xxlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xxlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xxlarge-push-3{position:relative;left:25%;right:auto}.ontario-xxlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xxlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xxlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xxlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xxlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xxlarge-push-6{position:relative;left:50%;right:auto}.ontario-xxlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xxlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xxlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xxlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xxlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xxlarge-push-9{position:relative;left:75%;right:auto}.ontario-xxlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xxlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xxlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xxlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xxlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-xxlarge-1{width:8.3333333333%}.ontario-xxlarge-2{width:16.6666666667%}.ontario-xxlarge-3{width:25%}.ontario-xxlarge-4{width:33.3333333333%}.ontario-xxlarge-5{width:41.6666666667%}.ontario-xxlarge-6{width:50%}.ontario-xxlarge-7{width:58.3333333333%}.ontario-xxlarge-8{width:66.6666666667%}.ontario-xxlarge-9{width:75%}.ontario-xxlarge-10{width:83.3333333333%}.ontario-xxlarge-11{width:91.6666666667%}.ontario-xxlarge-12{width:100%}.ontario-xxlarge-offset-0{margin-left:0 !important}.ontario-xxlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xxlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xxlarge-offset-3{margin-left:25% !important}.ontario-xxlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xxlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xxlarge-offset-6{margin-left:50% !important}.ontario-xxlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xxlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xxlarge-offset-9{margin-left:75% !important}.ontario-xxlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xxlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xxlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xxlarge-centered,.ontario-columns.ontario-xxlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xxlarge-uncentered,.ontario-columns.ontario-xxlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xxlarge-centered:last-child,.ontario-columns.ontario-xxlarge-centered:last-child{float:none}.ontario-column.ontario-xxlarge-uncentered:last-child,.ontario-columns.ontario-xxlarge-uncentered:last-child{float:left}.ontario-column.ontario-xxlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xxlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xxlarge-collapse>.ontario-column,.ontario-row.ontario-xxlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xxlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xxlarge-uncollapse>.ontario-column,.ontario-row.ontario-xxlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;width:100%;padding:0.625rem 1rem;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-application-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:#1a1a1a;color:#FFFFFF;height:3.125rem;position:relative;z-index:5}.ontario-application-header>.ontario-row{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ontario-application-header-container{position:relative;width:100%}.ontario-header-button.ontario-application-navigation--open:hover{background-color:#666666}.ontario-header-button.ontario-application-navigation--closed:active{background-color:#1a1a1a}.ontario-header-button--with-outline{border:2px solid #FFFFFF;margin:0 0 0 1rem;padding:0.375rem 1rem}.ontario-application-subheader .ontario-header-button,.ontario-application-navigation .ontario-header-button{background-color:#4d4d4d}.ontario-header-button--closed:focus{-webkit-box-shadow:none;box-shadow:none;outline:none;-webkit-transition:none;transition:none}.ontario-application-header__logo,.ontario-application-header__logo a,.ontario-application-header__lang-toggle,.ontario-application-subheader__container,.ontario-application-subheader__menu-container,.ontario-application-subheader__menu{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;outline:none}.ontario-application-header__logo a:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}.ontario-application-header__logo svg{width:100px;height:25px}.ontario-application-header__lang-toggle{-ms-flex-pack:end;justify-content:flex-end}.ontario-application-header__lang-toggle a{font-size:1rem;line-height:1.375rem;height:auto;outline:none;padding:0.5rem 0.75rem}.ontario-application-subheader{padding:1.25rem 0;background-color:#404040;overflow:visible;position:relative;z-index:5}@media screen and (min-width: 73em){.ontario-application-subheader{z-index:0}}.ontario-application-subheader>.ontario-row{position:relative}.ontario-application-header-container{position:relative;z-index:5}.ontario-application-header>.ontario-row{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ontario-application-subheader .ontario-header-button{visibility:visible}.ontario-application-subheader .ontario-header-button,.ontario-application-navigation .ontario-header-button{background-color:#4d4d4d}.ontario-application-subheader .ontario-header-button:hover,.ontario-application-navigation .ontario-header-button:hover{background-color:#666666}.ontario-application-subheader .ontario-header-button:active,.ontario-application-navigation .ontario-header-button:active{background-color:#1a1a1a}.ontario-header-button--without-outline:hover{background-color:#4d4d4d}.ontario-header-button--without-outline:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}.ontario-application-subheader__heading{padding:0.375rem 0;margin-bottom:0;max-width:65%}.ontario-application-subheader__heading a{color:#FFFFFF;font-weight:600;text-decoration:none}.ontario-application-subheader__heading a:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}.ontario-application-subheader__heading a:hover,.ontario-application-subheader__heading a:active,.ontario-application-subheader__heading a:visited{color:#FFFFFF;text-decoration:underline}.ontario-application-subheader .ontario-header-button{visibility:visible;background-color:#4d4d4d}.ontario-application-subheader .ontario-header-button:hover{background-color:#666666}.ontario-application-subheader .ontario-header-button:active{background-color:#1a1a1a}.ontario-header__menu-toggler span{display:-ms-flexbox;display:flex}@media screen and (max-width: 20em){.ontario-header__menu-toggler span:last-of-type{display:none}}.ontario-header__menu-toggler svg{margin-right:6px}@media screen and (max-width: 20em){.ontario-header__menu-toggler svg{margin-right:0}}.ontario-application-subheader__container{-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.ontario-application-subheader__menu{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;list-style:none;margin:0;padding-left:0}.ontario-application-subheader__menu li{border-radius:4px;padding:0;margin:0 0 0 0.75rem;text-align:center}.ontario-application-subheader__menu-container a{-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:4px;color:#FFFFFF;display:inline-block;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.125rem;font-weight:600;height:48px;line-height:1.4375rem;outline:none;padding:0.75rem;text-align:left;text-decoration:none;white-space:nowrap}.ontario-application-subheader__menu-container a.ontario-link--active{border-radius:4px 4px 0 0;border-bottom:4px solid #FFFFFF}.ontario-application-subheader__menu-container a:hover{background-color:#666666;color:#FFFFFF}.ontario-application-subheader__menu-container a:active{background-color:#1a1a1a}.ontario-application-subheader__menu-container a:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}.ontario-application-navigation{position:absolute;width:100%}@media screen and (min-width: 73em){.ontario-application-navigation{position:relative;max-width:72rem;width:auto;margin:0 auto}}.ontario-application-navigation .ontario-header-button{visibility:hidden;position:absolute;top:-4.25rem;right:1rem;z-index:6}.ontario-application-navigation__container{background:#FFFFFF;position:absolute;top:0;width:100%;z-index:4}@media screen and (min-width: 40em){.ontario-application-navigation__container{background:#FFFFFF;position:absolute;z-index:4}}@media screen and (min-width: 73em){.ontario-application-navigation__container{-webkit-box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);border-radius:4px;position:absolute;right:0.75rem;top:-0.6rem;min-width:290px;max-width:30%;z-index:3;-webkit-transition:none !important;transition:none !important}}.ontario-application-navigation ul{list-style:none;padding:0.5rem 0;margin:0;border-bottom:1px solid #cccccc}@media screen and (min-width: 73em){.ontario-application-navigation ul{border-bottom:none}}.ontario-application-navigation li{border-top:1px solid #cccccc;padding:0;margin-bottom:0}.ontario-application-navigation li:last-of-type{border-bottom:1px solid #cccccc}.ontario-application-navigation a{color:#1a1a1a;display:block;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;text-decoration:none;padding:0.6730769231rem 1.5rem}.ontario-application-navigation a:hover{text-decoration:underline;background-color:#e5e5e5}.ontario-application-navigation a:active{text-decoration:underline;background-color:#cccccc}.ontario-application-navigation a:focus,.ontario-application-navigation a:active{-webkit-box-shadow:0 0 0 4px #009ADB inset;box-shadow:0 0 0 4px #009ADB inset}.ontario-application-navigation a.ontario-link--active{border-left:6px solid #1a1a1a;background-color:#f2f2f2}.ontario-navigation--open{visibility:visible;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform 0.4s ease-in-out;transition:-webkit-transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out}@media screen and (min-width: 73em){.ontario-navigation--open{z-index:5}}.ontario-navigation--closed{background:#FFFFFF;position:absolute;-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:transform 0.3s ease-in-out, visibility 0.1s ease;transition:transform 0.3s ease-in-out, visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;width:100%;visibility:hidden;z-index:4}.ontario-application-navigation.ontario-navigation--open .ontario-application-navigation__container{visibility:visible;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform 0.4s ease-in-out;transition:-webkit-transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out}@media screen and (min-width: 73em){.ontario-application-navigation.ontario-navigation--open .ontario-application-navigation__container{-webkit-transition:none;transition:none;display:block}}.ontario-overlay{position:fixed;top:0;left:0;background:rgba(0, 0, 0, 0.6);width:100%;height:100%;z-index:2}.ontario-header-button.ontario-navigation--open:hover{background-color:#666666}.ontario-header-button.ontario-navigation--open:active{background-color:#1a1a1a}.ontario-header-button.ontario-navigation--closed:active{background-color:#1a1a1a}.ontario-header-button{background-color:#1a1a1a;border:none;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;color:#FFFFFF;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;height:48px;line-height:1.5555555556;text-align:center;text-decoration:none}.ontario-header-button:hover,.ontario-header-button:focus,.ontario-header-button:visited{color:#FFFFFF}.ontario-header-button--with-outline,.ontario-header-button--without-outline{background-color:#1a1a1a;color:#FFFFFF}.ontario-header-button--with-outline:hover,.ontario-header-button--without-outline:hover{background-color:#4d4d4d}.ontario-header-button--with-outline:active,.ontario-header-button--without-outline:active{background-color:#666666}.ontario-header-button--with-outline:focus,.ontario-header-button--without-outline:focus{background-color:#4d4d4d}.ontario-header-button--with-outline{border:2px solid #FFFFFF;margin:0 0 0 1rem;padding:0.375rem 1rem}.ontario-header-button--with-outline:hover{border:2px solid #FFFFFF;color:#FFFFFF}.ontario-header-button--with-outline:focus{background-color:#4d4d4d}@media screen and (max-width: 20em){.ontario-header-button--with-outline{padding:0.375rem}}.ontario-header__menu-toggler{padding:0.375rem 1rem}@media screen and (max-width: 20em){.ontario-header__menu-toggler{padding-left:0.5rem;padding-right:0.5rem}}.ontario-header__menu-toggler span{display:-ms-flexbox;display:flex}@media screen and (max-width: 20em){.ontario-header__menu-toggler span{display:none}}.ontario-header__menu-toggler svg{margin-right:6px}@media screen and (max-width: 20em){.ontario-header__menu-toggler svg{margin-right:0}}.ontario-application-navigation__container{background:#FFFFFF;position:absolute;-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:transform 0.3s ease-in-out, visibility 0.1s ease;transition:transform 0.3s ease-in-out, visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;width:100%;visibility:hidden;z-index:4}@media screen and (min-width: 73em){.ontario-application-navigation__container{-webkit-box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);border-radius:4px;display:none;position:absolute;right:1rem;top:calc(100% - 0.5rem);min-width:290px;max-width:30%;z-index:5}}.ontario-application-navigation.ontario-navigation--open .ontario-application-navigation__container{background:#FFFFFF;visibility:visible;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform 0.4s ease-in-out;transition:-webkit-transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out}@media screen and (min-width: 73em){.ontario-application-navigation.ontario-navigation--open .ontario-application-navigation__container{-webkit-transition:none;transition:none;display:block}}.ontario-application-navigation.ontario-navigation--open{background:#FFFFFF;z-index:4}.ontario-application-navigation ul{list-style:none;padding:0.5rem 0;margin:0;border-bottom:1px solid #cccccc}@media screen and (min-width: 73em){.ontario-application-navigation ul{border-bottom:none}}.ontario-application-navigation li{border-top:1px solid #cccccc;padding:0;margin-bottom:0}.ontario-application-navigation li:last-of-type{border-bottom:1px solid #cccccc}.ontario-application-navigation a{color:#1a1a1a;display:block;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;text-decoration:none;padding:0.6730769231rem 1.5rem}.ontario-application-navigation a:hover{text-decoration:underline;background-color:#e5e5e5}.ontario-application-navigation a:active{text-decoration:underline;background-color:#cccccc}.ontario-application-navigation a:focus,.ontario-application-navigation a:active{-webkit-box-shadow:0 0 0 4px #009ADB inset;box-shadow:0 0 0 4px #009ADB inset}.ontario-application-navigation a.ontario-link--active{border-left:6px solid #1a1a1a;background-color:#f2f2f2}.ontario-overlay{position:fixed;top:0;left:0;background:rgba(0, 0, 0, 0.6);width:100%;height:100%;z-index:2}.ontario-header__icon-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}';
var ontarioHeaderCss =
	'.ontario-navigation a:focus,.ontario-navigation a:active,.ontario-header-button:focus,.ontario-input:focus,.ontario-input:active{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-row{margin:0 auto;max-width:72rem;width:100%}.ontario-row:before,.ontario-row:after{content:"";display:table}.ontario-row:after{clear:both}.ontario-row.ontario-row--collapse>.ontario-column,.ontario-row.ontario-row--collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-row--collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row .ontario-row{margin:0 -1rem;max-width:none;width:auto}.ontario-row .ontario-row:before,.ontario-row .ontario-row:after{content:"";display:table}.ontario-row .ontario-row:after{clear:both}.ontario-row .ontario-row.ontario-row--collapse{margin:0;max-width:none;width:auto}.ontario-row .ontario-row.ontario-row--collapse:before,.ontario-row .ontario-row.ontario-row--collapse:after{content:"";display:table}.ontario-row .ontario-row.ontario-row--collapse:after{clear:both}.ontario-column,.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;float:left}.ontario-column+.ontario-column:last-child,.ontario-column+.ontario-columns:last-child,.ontario-columns+.ontario-column:last-child,.ontario-columns+.ontario-columns:last-child{float:right}.ontario-column+.ontario-column.ontario-end,.ontario-column+.ontario-columns.ontario-end,.ontario-columns+.ontario-column.ontario-end,.ontario-columns+.ontario-columns.ontario-end{float:left}@media only screen{.ontario-small-push-0{position:relative;left:0;right:auto}.ontario-small-pull-0{position:relative;right:0;left:auto}.ontario-small-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-small-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-small-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-small-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-small-push-3{position:relative;left:25%;right:auto}.ontario-small-pull-3{position:relative;right:25%;left:auto}.ontario-small-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-small-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-small-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-small-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-small-push-6{position:relative;left:50%;right:auto}.ontario-small-pull-6{position:relative;right:50%;left:auto}.ontario-small-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-small-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-small-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-small-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-small-push-9{position:relative;left:75%;right:auto}.ontario-small-pull-9{position:relative;right:75%;left:auto}.ontario-small-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-small-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-small-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-small-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-small-1{width:8.3333333333%}.ontario-small-2{width:16.6666666667%}.ontario-small-3{width:25%}.ontario-small-4{width:33.3333333333%}.ontario-small-5{width:41.6666666667%}.ontario-small-6{width:50%}.ontario-small-7{width:58.3333333333%}.ontario-small-8{width:66.6666666667%}.ontario-small-9{width:75%}.ontario-small-10{width:83.3333333333%}.ontario-small-11{width:91.6666666667%}.ontario-small-12{width:100%}.ontario-small-offset-0{margin-left:0 !important}.ontario-small-offset-1{margin-left:8.3333333333% !important}.ontario-small-offset-2{margin-left:16.6666666667% !important}.ontario-small-offset-3{margin-left:25% !important}.ontario-small-offset-4{margin-left:33.3333333333% !important}.ontario-small-offset-5{margin-left:41.6666666667% !important}.ontario-small-offset-6{margin-left:50% !important}.ontario-small-offset-7{margin-left:58.3333333333% !important}.ontario-small-offset-8{margin-left:66.6666666667% !important}.ontario-small-offset-9{margin-left:75% !important}.ontario-small-offset-10{margin-left:83.3333333333% !important}.ontario-small-offset-11{margin-left:91.6666666667% !important}.ontario-small-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-small-centered,.ontario-columns.ontario-small-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-small-uncentered,.ontario-columns.ontario-small-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-small-centered:last-child,.ontario-columns.ontario-small-centered:last-child{float:none}.ontario-column.ontario-small-uncentered:last-child,.ontario-columns.ontario-small-uncentered:last-child{float:left}.ontario-column.ontario-small-uncentered.ontario-opposite,.ontario-columns.ontario-small-uncentered.ontario-opposite{float:right}.ontario-row.ontario-small-collapse>.ontario-column,.ontario-row.ontario-small-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-small-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-small-uncollapse>.ontario-column,.ontario-row.ontario-small-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:40.063em){.ontario-medium-push-0{position:relative;left:0;right:auto}.ontario-medium-pull-0{position:relative;right:0;left:auto}.ontario-medium-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-medium-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-medium-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-medium-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-medium-push-3{position:relative;left:25%;right:auto}.ontario-medium-pull-3{position:relative;right:25%;left:auto}.ontario-medium-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-medium-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-medium-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-medium-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-medium-push-6{position:relative;left:50%;right:auto}.ontario-medium-pull-6{position:relative;right:50%;left:auto}.ontario-medium-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-medium-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-medium-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-medium-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-medium-push-9{position:relative;left:75%;right:auto}.ontario-medium-pull-9{position:relative;right:75%;left:auto}.ontario-medium-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-medium-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-medium-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-medium-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-medium-1{width:8.3333333333%}.ontario-medium-2{width:16.6666666667%}.ontario-medium-3{width:25%}.ontario-medium-4{width:33.3333333333%}.ontario-medium-5{width:41.6666666667%}.ontario-medium-6{width:50%}.ontario-medium-7{width:58.3333333333%}.ontario-medium-8{width:66.6666666667%}.ontario-medium-9{width:75%}.ontario-medium-10{width:83.3333333333%}.ontario-medium-11{width:91.6666666667%}.ontario-medium-12{width:100%}.ontario-medium-offset-0{margin-left:0 !important}.ontario-medium-offset-1{margin-left:8.3333333333% !important}.ontario-medium-offset-2{margin-left:16.6666666667% !important}.ontario-medium-offset-3{margin-left:25% !important}.ontario-medium-offset-4{margin-left:33.3333333333% !important}.ontario-medium-offset-5{margin-left:41.6666666667% !important}.ontario-medium-offset-6{margin-left:50% !important}.ontario-medium-offset-7{margin-left:58.3333333333% !important}.ontario-medium-offset-8{margin-left:66.6666666667% !important}.ontario-medium-offset-9{margin-left:75% !important}.ontario-medium-offset-10{margin-left:83.3333333333% !important}.ontario-medium-offset-11{margin-left:91.6666666667% !important}.ontario-medium-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-medium-centered,.ontario-columns.ontario-medium-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-medium-uncentered,.ontario-columns.ontario-medium-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-medium-centered:last-child,.ontario-columns.ontario-medium-centered:last-child{float:none}.ontario-column.ontario-medium-uncentered:last-child,.ontario-columns.ontario-medium-uncentered:last-child{float:left}.ontario-column.ontario-medium-uncentered.ontario-opposite,.ontario-columns.ontario-medium-uncentered.ontario-opposite{float:right}.ontario-row.ontario-medium-collapse>.ontario-column,.ontario-row.ontario-medium-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-medium-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-medium-uncollapse>.ontario-column,.ontario-row.ontario-medium-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:73.063em){.ontario-large-push-0{position:relative;left:0;right:auto}.ontario-large-pull-0{position:relative;right:0;left:auto}.ontario-large-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-large-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-large-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-large-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-large-push-3{position:relative;left:25%;right:auto}.ontario-large-pull-3{position:relative;right:25%;left:auto}.ontario-large-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-large-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-large-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-large-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-large-push-6{position:relative;left:50%;right:auto}.ontario-large-pull-6{position:relative;right:50%;left:auto}.ontario-large-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-large-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-large-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-large-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-large-push-9{position:relative;left:75%;right:auto}.ontario-large-pull-9{position:relative;right:75%;left:auto}.ontario-large-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-large-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-large-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-large-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-large-1{width:8.3333333333%}.ontario-large-2{width:16.6666666667%}.ontario-large-3{width:25%}.ontario-large-4{width:33.3333333333%}.ontario-large-5{width:41.6666666667%}.ontario-large-6{width:50%}.ontario-large-7{width:58.3333333333%}.ontario-large-8{width:66.6666666667%}.ontario-large-9{width:75%}.ontario-large-10{width:83.3333333333%}.ontario-large-11{width:91.6666666667%}.ontario-large-12{width:100%}.ontario-large-offset-0{margin-left:0 !important}.ontario-large-offset-1{margin-left:8.3333333333% !important}.ontario-large-offset-2{margin-left:16.6666666667% !important}.ontario-large-offset-3{margin-left:25% !important}.ontario-large-offset-4{margin-left:33.3333333333% !important}.ontario-large-offset-5{margin-left:41.6666666667% !important}.ontario-large-offset-6{margin-left:50% !important}.ontario-large-offset-7{margin-left:58.3333333333% !important}.ontario-large-offset-8{margin-left:66.6666666667% !important}.ontario-large-offset-9{margin-left:75% !important}.ontario-large-offset-10{margin-left:83.3333333333% !important}.ontario-large-offset-11{margin-left:91.6666666667% !important}.ontario-large-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-large-centered,.ontario-columns.ontario-large-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-large-uncentered,.ontario-columns.ontario-large-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-large-centered:last-child,.ontario-columns.ontario-large-centered:last-child{float:none}.ontario-column.ontario-large-uncentered:last-child,.ontario-columns.ontario-large-uncentered:last-child{float:left}.ontario-column.ontario-large-uncentered.ontario-opposite,.ontario-columns.ontario-large-uncentered.ontario-opposite{float:right}.ontario-row.ontario-large-collapse>.ontario-column,.ontario-row.ontario-large-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-large-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-large-uncollapse>.ontario-column,.ontario-row.ontario-large-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-push-0{position:relative;left:0;right:auto}.ontario-pull-0{position:relative;right:0;left:auto}.ontario-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-push-3{position:relative;left:25%;right:auto}.ontario-pull-3{position:relative;right:25%;left:auto}.ontario-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-push-6{position:relative;left:50%;right:auto}.ontario-pull-6{position:relative;right:50%;left:auto}.ontario-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-push-9{position:relative;left:75%;right:auto}.ontario-pull-9{position:relative;right:75%;left:auto}.ontario-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-pull-11{position:relative;right:91.6666666667%;left:auto}}@media only screen and (min-width:96.063em){.ontario-xlarge-push-0{position:relative;left:0;right:auto}.ontario-xlarge-pull-0{position:relative;right:0;left:auto}.ontario-xlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xlarge-push-3{position:relative;left:25%;right:auto}.ontario-xlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xlarge-push-6{position:relative;left:50%;right:auto}.ontario-xlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xlarge-push-9{position:relative;left:75%;right:auto}.ontario-xlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-xlarge-1{width:8.3333333333%}.ontario-xlarge-2{width:16.6666666667%}.ontario-xlarge-3{width:25%}.ontario-xlarge-4{width:33.3333333333%}.ontario-xlarge-5{width:41.6666666667%}.ontario-xlarge-6{width:50%}.ontario-xlarge-7{width:58.3333333333%}.ontario-xlarge-8{width:66.6666666667%}.ontario-xlarge-9{width:75%}.ontario-xlarge-10{width:83.3333333333%}.ontario-xlarge-11{width:91.6666666667%}.ontario-xlarge-12{width:100%}.ontario-xlarge-offset-0{margin-left:0 !important}.ontario-xlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xlarge-offset-3{margin-left:25% !important}.ontario-xlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xlarge-offset-6{margin-left:50% !important}.ontario-xlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xlarge-offset-9{margin-left:75% !important}.ontario-xlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xlarge-centered,.ontario-columns.ontario-xlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xlarge-uncentered,.ontario-columns.ontario-xlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xlarge-centered:last-child,.ontario-columns.ontario-xlarge-centered:last-child{float:none}.ontario-column.ontario-xlarge-uncentered:last-child,.ontario-columns.ontario-xlarge-uncentered:last-child{float:left}.ontario-column.ontario-xlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xlarge-collapse>.ontario-column,.ontario-row.ontario-xlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xlarge-uncollapse>.ontario-column,.ontario-row.ontario-xlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:120.063em){.ontario-xxlarge-push-0{position:relative;left:0;right:auto}.ontario-xxlarge-pull-0{position:relative;right:0;left:auto}.ontario-xxlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xxlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xxlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xxlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xxlarge-push-3{position:relative;left:25%;right:auto}.ontario-xxlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xxlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xxlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xxlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xxlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xxlarge-push-6{position:relative;left:50%;right:auto}.ontario-xxlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xxlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xxlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xxlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xxlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xxlarge-push-9{position:relative;left:75%;right:auto}.ontario-xxlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xxlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xxlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xxlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xxlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-xxlarge-1{width:8.3333333333%}.ontario-xxlarge-2{width:16.6666666667%}.ontario-xxlarge-3{width:25%}.ontario-xxlarge-4{width:33.3333333333%}.ontario-xxlarge-5{width:41.6666666667%}.ontario-xxlarge-6{width:50%}.ontario-xxlarge-7{width:58.3333333333%}.ontario-xxlarge-8{width:66.6666666667%}.ontario-xxlarge-9{width:75%}.ontario-xxlarge-10{width:83.3333333333%}.ontario-xxlarge-11{width:91.6666666667%}.ontario-xxlarge-12{width:100%}.ontario-xxlarge-offset-0{margin-left:0 !important}.ontario-xxlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xxlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xxlarge-offset-3{margin-left:25% !important}.ontario-xxlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xxlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xxlarge-offset-6{margin-left:50% !important}.ontario-xxlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xxlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xxlarge-offset-9{margin-left:75% !important}.ontario-xxlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xxlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xxlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xxlarge-centered,.ontario-columns.ontario-xxlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xxlarge-uncentered,.ontario-columns.ontario-xxlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xxlarge-centered:last-child,.ontario-columns.ontario-xxlarge-centered:last-child{float:none}.ontario-column.ontario-xxlarge-uncentered:last-child,.ontario-columns.ontario-xxlarge-uncentered:last-child{float:left}.ontario-column.ontario-xxlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xxlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xxlarge-collapse>.ontario-column,.ontario-row.ontario-xxlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xxlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xxlarge-uncollapse>.ontario-column,.ontario-row.ontario-xxlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;width:100%;padding:0.625rem 1rem;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-header__container{position:relative;z-index:5}@media screen and (min-width: 73em){.ontario-header__container{z-index:1}}.ontario-icon-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ontario-icon-container-reset{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ontario-icon-container-reset svg{fill:#1a1a1a}.ontario-subheader__menu a{border-radius:4px;color:#FFFFFF;display:inline;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.125rem;font-weight:600;height:48px;line-height:1.4375rem;padding:0.75rem 1rem;text-decoration:none;white-space:nowrap}.ontario-subheader__menu a.ontario-link--active{border-radius:4px 4px 0 0;border-bottom:4px solid #FFFFFF}.ontario-subheader__menu a:hover{background-color:#666666;color:#FFFFFF}.ontario-subheader__menu a:active{background-color:#1a1a1a}.ontario-subheader__menu a:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}.ontario-navigation{position:absolute;width:100%}@media screen and (min-width: 73em){.ontario-navigation{position:relative;max-width:72rem;width:auto;margin:0 auto}}.nav-ul-closed{background:white;position:absolute;-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:transform 0.3s ease-in-out, visibility 0.1s ease;transition:transform 0.3s ease-in-out, visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;width:100%;visibility:hidden;z-index:4}.nav-ul-opened{visibility:visible;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform 0.4s ease-in-out;transition:-webkit-transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out}@media screen and (min-width: 73em){.nav-ul-opened{z-index:5}}.ontario-navigation ul{list-style:none;padding:0.5rem 0;margin:0;border-bottom:1px solid #cccccc}@media screen and (min-width: 73em){.ontario-navigation ul{border-bottom:none}}.ontario-navigation li{border-top:1px solid #cccccc;padding:0;margin-bottom:0}.ontario-navigation li:last-of-type{border-bottom:1px solid #cccccc}.ontario-navigation a{color:#1a1a1a;display:block;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;text-decoration:none;padding:0.6730769231rem 1.5rem}.ontario-navigation a:hover{text-decoration:underline;background-color:#e6e6e6}.ontario-navigation a:active{text-decoration:underline;background-color:#cccccc}.ontario-navigation a:focus,.ontario-navigation a:active{-webkit-box-shadow:0 0 0 4px #009ADB inset;box-shadow:0 0 0 4px #009ADB inset}.ontario-navigation a.ontario-link--active{border-left:6px solid #1a1a1a;background-color:#f2f2f2}.ontario-overlay{position:fixed;top:0;left:0;background:rgba(0, 0, 0, 0.6);width:100%;height:100%;z-index:2}.ontario-header{position:relative;overflow:hidden;z-index:5;background-color:#1a1a1a;color:#FFFFFF;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:5.75rem}.ontario-header .ontario-row{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}.ontario-header svg{width:2rem;height:2rem;margin-bottom:0}.ontario-header__logo-container a{display:-ms-inline-flexbox;display:inline-flex;height:100%;outline:none}.ontario-header__logo-container a:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB}.ontario-header__logo-container a img{width:45px;height:46px}@media screen and (min-width: 40em){.ontario-header__logo-container a img{width:180px;height:46px}}.ontario-navigation__container.ontario-navigation--open{visibility:visible;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform 0.4s ease-in-out;transition:-webkit-transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out}@media screen and (min-width: 73em){.ontario-navigation__container.ontario-navigation--open{z-index:5}}.ontario-navigation__container.ontario-navigation--closed{background:#FFFFFF;position:absolute;-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:transform 0.3s ease-in-out, visibility 0.1s ease;transition:transform 0.3s ease-in-out, visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;width:100%;visibility:hidden;z-index:4}.ontario-header-button.ontario-navigation--open:hover{background-color:#666666}.ontario-header-button.ontario-navigation--open:active{background-color:#1a1a1a}.ontario-header-button.ontario-navigation--closed:active{background-color:#1a1a1a}.ontario-header__logo-container{height:46px}.ontario-header__logo-container svg{width:45px;height:46px}@media screen and (min-width: 40em){.ontario-header__logo-container svg{width:180px;height:46px}}.ontario-header__logo-container a{display:inline-block;height:100%}.ontario-header__logo-container a:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB}.ontario-header__search-container{position:relative;display:none}@media screen and (min-width: 73em){.ontario-header__search-container{display:-ms-flexbox;display:flex}}@media screen and (min-width: 40em){.ontario-header__search-container{padding-right:1rem}}.ontario-input.ontario-header__search-input{border-width:0;margin-bottom:0;height:48px;padding-left:0.75rem;padding-right:7.2rem}.ontario-input.ontario-header__search-input:invalid+input[type=reset]{display:none}.ontario-input.ontario-header__search-input:focus~.ontario-header__search-submit{background-color:#0066CC;color:#FFFFFF}.ontario-input.ontario-header__search-input:focus~.ontario-header__search-submit svg{fill:#FFFFFF}.ontario-input.ontario-header__search-input:focus~.ontario-header__search-submit:hover{background-color:#00478F;color:#FFFFFF}.ontario-input.ontario-header__search-input::-ms-clear{display:none;width:0;height:0}.ontario-input.ontario-header__search-input:invalid:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;-moz-box-shadow:none}.ontario-input.ontario-header__search-input:invalid:not(:focus){-webkit-box-shadow:none;box-shadow:none;-moz-box-shadow:none}@media screen and (min-width: 40em) and (max-width: 73em){.ontario-input.ontario-header__search-input{padding-left:1rem;padding-right:6.4rem}}.ontario-header__search-submit{border:0;border-radius:0 3px 3px 0;background-color:#f2f2f2;color:#1a1a1a;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:600;font-size:1.125rem;height:100%;line-height:1.56;position:absolute;right:1rem;top:0;cursor:pointer;padding-left:0.75rem;padding-right:0.75rem}.ontario-header__search-submit svg{fill:#1a1a1a}.ontario-header__search-submit:hover{background-color:#00478F;color:#FFFFFF}.ontario-header__search-submit:hover svg{fill:#FFFFFF}.ontario-header__search-submit:focus{outline:none;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;background-color:#00478F;color:#FFFFFF}.ontario-header__search-submit:focus svg{fill:#FFFFFF}.ontario-header__search-submit:active{background-color:#002142;color:#FFFFFF}.ontario-header__search-submit:active svg{fill:#FFFFFF}.ontario-header__search-submit svg{margin-right:0}input[type=reset].ontario-header__search-reset{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;top:11px;right:80px;height:28px;width:28px;color:#1a1a1a;margin:0;padding:0.5rem;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTE5IDYuNEwxNy42IDUgMTIgMTAuNiA2LjQgNSA1IDYuNGw1LjYgNS42TDUgMTcuNiA2LjQgMTlsNS42LTUuNiA1LjYgNS42IDEuNC0xLjQtNS42LTUuNkwxOSA2LjR6IiBmaWxsPSIjMDAwIi8+PC9zdmc+);background-position:center center;background-repeat:no-repeat;background-color:transparent;outline:none;border:none;cursor:pointer}input[type=reset].ontario-header__search-reset:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB}.ontario-header__nav-right-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}.ontario-header-button{background-color:#1a1a1a;border:none;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;color:#FFFFFF;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;height:48px;line-height:1.5555555556;text-align:center;text-decoration:none}.ontario-header-button:hover,.ontario-header-button:focus,.ontario-header-button:visited{color:#FFFFFF}.ontario-header-button--with-outline,.ontario-header-button--without-outline{background-color:#1a1a1a;color:#FFFFFF}.ontario-header-button--with-outline:hover,.ontario-header-button--without-outline:hover{background-color:#4d4d4d}.ontario-header-button--with-outline:active,.ontario-header-button--without-outline:active{background-color:#666666}.ontario-header-button--with-outline:focus,.ontario-header-button--without-outline:focus{background-color:#4d4d4d}.ontario-header-button--with-outline:active,.ontario-header-button--without-outline:active{background-color:#666666}.ontario-header-button--with-outline{border:2px solid #FFFFFF;margin:0 0 0 1rem;padding:0.375rem 1rem}.ontario-header-button--with-outline:hover{border:2px solid #FFFFFF;color:#FFFFFF}.ontario-header-button--with-outline:focus{background-color:#4d4d4d}@media screen and (max-width: 20em){.ontario-header-button--with-outline{padding:0.375rem}}.ontario-header-button--without-outline:focus{background-color:#4d4d4d}.ontario-header__menu-toggler{padding:0.375rem 1rem}@media screen and (max-width: 20em){.ontario-header__menu-toggler{padding-left:0.5rem;padding-right:0.5rem}}.ontario-header__menu-toggler span{display:-ms-flexbox;display:flex}@media screen and (max-width: 20em){.ontario-header__menu-toggler span{display:none}}.ontario-header__menu-toggler svg{margin-right:6px}@media screen and (max-width: 20em){.ontario-header__menu-toggler svg{margin-right:0}}.ontario-header__language-toggler{padding:0.75rem}.ontario-header__language-toggler abbr[title]{text-decoration:none}.ontario-header__search-toggler{padding:0.5rem 0.75rem;margin-left:1rem}@media screen and (min-width: 40em){.ontario-header__search-toggler svg{margin-right:0.25rem}}.ontario-header__search-close{-ms-flex-direction:column-reverse;flex-direction:column-reverse;font-weight:400;margin-right:1rem;padding:0.15rem 0.25rem;position:relative;height:60px;display:none}.ontario-header__search-close span{position:relative;top:-3px;font-size:1rem;margin-left:0}.ontario-header__search-close span:last-of-type{top:0;height:1.875rem}@media screen and (min-width: 39.9375em){.ontario-header__search-close span{margin-right:0.25rem}}.ontario-header__search-close span:hover,.ontario-header__search-close span:focus{outline:none;text-decoration:none}.ontario-header__search-close svg{top:0}@media screen and (min-width: 40em){.ontario-header__search-close{-ms-flex-direction:row;flex-direction:row;padding:0.25rem 0.5rem 0.25rem 1rem;height:48px}.ontario-header__search-close span{top:0}.ontario-header__search-close svg{position:relative;width:2.5rem;height:2.5rem}}@media screen and (min-width: 73em){.ontario-header--search-open .ontario-header__search-close{display:none}}.ontario-header__search-close-container{display:none;-ms-flex-pack:end;justify-content:flex-end;padding-right:0}@media screen and (max-width: 40em){.ontario-header__search-close-container{width:auto;padding-left:0;padding-right:0}}@media screen and (max-width: 73em){.ontario-header--search-open .ontario-header__logo-container,.ontario-header--search-open .ontario-header__nav-right-container{display:none}.ontario-header--search-open .ontario-header__search-close-container,.ontario-header--search-open .ontario-header__search-container,.ontario-header--search-open .ontario-header__search-close{display:-ms-flexbox;display:flex}}.ontario-navigation{position:absolute;width:100%}@media screen and (min-width: 73em){.ontario-navigation{position:relative;max-width:72rem;width:auto;margin:0 auto}}.ontario-navigation__container{background:#FFFFFF;position:absolute;-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:transform 0.3s ease-in-out, visibility 0.1s ease;transition:transform 0.3s ease-in-out, visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;width:100%;visibility:hidden;z-index:4}@media screen and (min-width: 73em){.ontario-navigation__container{-webkit-box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);border-radius:4px;display:none;position:absolute;right:1rem;top:calc(100% - 0.5rem);min-width:290px;max-width:30%;z-index:5}}.ontario-navigation ul{list-style:none;padding:0.5rem 0;margin:0;border-bottom:1px solid #cccccc}@media screen and (min-width: 73em){.ontario-navigation ul{border-bottom:none}}.ontario-header-navigation__menu-item{border-top:1px solid #cccccc;padding:0;margin-bottom:0}.ontario-header-navigation__menu-item:last-of-type{border-bottom:1px solid #cccccc}.ontario-navigation a{color:#1a1a1a;display:block;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;text-decoration:none;padding:0.6730769231rem 1.5rem}.ontario-navigation a:hover{text-decoration:underline;background-color:#e6e6e6}.ontario-navigation a:active{text-decoration:underline;background-color:#cccccc}.ontario-navigation a:focus,.ontario-navigation a:active{-webkit-box-shadow:0 0 0 4px #009ADB inset;box-shadow:0 0 0 4px #009ADB inset}.ontario-navigation a.ontario-link--active{border-left:6px solid #1a1a1a;background-color:#f2f2f2}.ontario-navigation.ontario-navigation--open .ontario-navigation__container{visibility:visible;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform 0.4s ease-in-out;transition:-webkit-transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out}@media screen and (min-width: 73em){.ontario-navigation.ontario-navigation--open .ontario-navigation__container{-webkit-transition:none;transition:none;display:block}}.ontario-overlay{position:fixed;top:0;left:0;background:rgba(0, 0, 0, 0.6);width:100%;height:100%;z-index:2}.ontario-header__icon-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}';
var OntarioHeader = (function () {
	function t(t) {
		var o = this;
		registerInstance(this, t);
		this.handleMenuToggle = function () {
			o.menuToggle = !o.menuToggle;
			o.searchToggle = undefined;
		};
		this.handleSearchToggle = function () {
			o.searchToggle = !o.searchToggle;
		};
		this.handleSubmit = function (t) {
			t.preventDefault();
			location.href = 'https://www.ontario.ca/search/search-results?query='.concat(t.target[0].value);
		};
		this.trapMenuFocus = function (t) {
			var e;
			var i = (e = t.target) === null || e === void 0 ? void 0 : e.dataset.type;
			if (i === 'app-desktop') {
				o.menuButtonDesktop.focus();
			} else if (i === 'app-tablet') {
				o.menuButtonTablet.focus();
			} else if (i === 'app-mobile') {
				o.menuButtonMobile.focus();
			} else {
				o.menuButton.focus();
			}
		};
		this.type = 'application';
		this.applicationHeaderInfo = undefined;
		this.menuItems = undefined;
		this.disableDynamicMenu = false;
		this.languageToggleOptions = undefined;
		this.customLanguageToggle = undefined;
		this.language = 'en';
		this.applicationHeaderInfoState = undefined;
		this.menuItemState = undefined;
		this.isDynamicMenu = false;
		this.languageState = undefined;
		this.menuToggle = false;
		this.searchToggle = false;
	}
	t.prototype.parseApplicationHeaderInfo = function () {
		var t = this.applicationHeaderInfo;
		if (t) {
			if (typeof t === 'string') this.applicationHeaderInfoState = JSON.parse(t);
			else this.applicationHeaderInfoState = t;
		}
	};
	t.prototype.parseMenuItems = function () {
		if (!Array.isArray(this.menuItems) && typeof this.menuItems === 'string') {
			this.menuItemState = JSON.parse(this.menuItems);
			this.isDynamicMenu = false;
		} else if (Array.isArray(this.menuItems) && this.type === 'application') {
			this.menuItemState = this.menuItems;
			this.isDynamicMenu = false;
		} else {
			this.menuItemState = OntarioHeaderDefaultData;
			this.isDynamicMenu = false;
		}
	};
	t.prototype.parseLanguage = function () {
		var t = this.languageToggleOptions;
		if (t) {
			if (typeof t === 'string') {
				this.languageState = JSON.parse(t);
			} else {
				this.languageState = t;
			}
		}
	};
	t.prototype.handleClick = function (t) {
		if (
			t.composedPath().includes(this.menuButton) ||
			t.composedPath().includes(this.menuButtonDesktop) ||
			t.composedPath().includes(this.menuButtonTablet) ||
			t.composedPath().includes(this.menuButtonMobile)
		) {
			return;
		}
		if (this.menuToggle) this.menuToggle = !this.menuToggle;
	};
	t.prototype.handleSetAppLanguage = function (t) {
		this.language = validateLanguage(t);
	};
	t.prototype.fetchOntarioMenu = function () {
		return __awaiter(this, void 0, void 0, function () {
			var t, o, e;
			return __generator(this, function (i) {
				switch (i.label) {
					case 0:
						if (!!this.isDynamicMenu) return [3, 2];
						t = process.env.ONTARIO_HEADER_API_URL;
						return [
							4,
							fetch(t)
								.then(function (t) {
									return t.json();
								})
								.then(function (t) {
									return t.linkset[0].item;
								})
								.catch(function () {
									console.error('Unable to retrieve data from Ontario Menu API');
									return [];
								}),
						];
					case 1:
						o = i.sent();
						if (o.length > 0) {
							e = o.map(function (t) {
								return { href: t.href, title: t.title };
							});
							this.menuItemState = e;
							this.isDynamicMenu = true;
						}
						i.label = 2;
					case 2:
						return [2];
				}
			});
		});
	};
	t.prototype.generateMenuItem = function (t, o, e, i, a, n, r) {
		return h(
			'li',
			{ class: a },
			h(
				'a',
				{
					'class': e === true ? 'ontario-link--active' : '',
					'href': t,
					'onClick': n,
					'onBlur': r ? this.trapMenuFocus : undefined,
					'data-type': i,
				},
				o,
			),
		);
	};
	t.prototype.renderMenuButton = function (t) {
		var o = this;
		return h(
			'button',
			{
				'class':
					t === 'desktop'
						? 'ontario-header__menu-toggler ontario-header-button ontario-header-button--with-outline ontario-show-for-large'
						: t === 'tablet'
						? 'ontario-header__menu-toggler ontario-header-button ontario-header-button--with-outline ontario-hide-for-small ontario-show-for-medium ontario-hide-for-large'
						: t === 'mobile'
						? 'ontario-header__menu-toggler ontario-header-button ontario-header-button--with-outline ontario-show-for-small-only'
						: 'ontario-header__menu-toggler ontario-header-button ontario-header-button--with-outline',
				'id': this.type === 'ontario' ? 'ontario-header-menu-toggler' : 'ontario-application-header-menu-toggler',
				'aria-controls': 'ontario-navigation',
				'aria-label': this.menuToggle ? 'close menu' : 'open menu',
				'onClick': this.handleMenuToggle,
				'type': 'button',
				'ref':
					t === 'desktop'
						? function (t) {
								return (o.menuButtonDesktop = t);
						  }
						: t === 'tablet'
						? function (t) {
								return (o.menuButtonTablet = t);
						  }
						: t === 'mobile'
						? function (t) {
								return (o.menuButtonMobile = t);
						  }
						: function (t) {
								return (o.menuButton = t);
						  },
			},
			h('span', {
				class: 'ontario-header__icon-container',
				innerHTML: this.menuToggle ? OntarioIconClose : OntarioIconMenu,
			}),
			h('span', null, 'Menu'),
		);
	};
	t.prototype.generateNavigationLinks = function (t, o, e, i) {
		var a = o + 1 === (e ? this.menuItemState.length - e : this.menuItemState.length) ? true : false;
		return this.generateMenuItem(t.href, t.title, t.linkIsActive, i, '', t.onClickHandler, a);
	};
	t.prototype.onEscapePressed = function (t) {
		if (t.key === 'Escape') {
			t.path[0].value = '';
		}
	};
	t.prototype.componentWillLoad = function () {
		this.parseApplicationHeaderInfo();
		this.parseMenuItems();
		this.parseLanguage();
	};
	t.prototype.componentDidRender = function () {
		if (this.disableDynamicMenu === false && this.type === 'ontario') {
			this.fetchOntarioMenu();
		}
	};
	t.prototype.componentDidUpdate = function () {
		if (this.type == 'ontario') {
			if (this.searchToggle === true) this.searchBar.focus();
			if (this.searchToggle === false) this.searchButton.focus();
			if (this.menuToggle === false) this.menuButton.blur();
		}
	};
	t.prototype.render = function () {
		var t = this;
		var o, e, i, a, n, r, l, s, d, m, u, c, p;
		if (this.type == 'ontario') {
			return h(
				'div',
				null,
				h(
					'div',
					{
						class: 'ontario-header__container',
						ref: function (o) {
							return (t.header = o);
						},
					},
					h(
						'header',
						{
							class: this.searchToggle ? 'ontario-header ontario-header--search-open' : 'ontario-header',
							id: 'ontario-header',
						},
						h(
							'div',
							{ class: 'ontario-row' },
							h(
								'div',
								{
									class:
										'ontario-header__logo-container ontario-columns ontario-small-2 ontario-medium-4 ontario-large-3',
								},
								h(
									'a',
									{ href: 'https://www.ontario.ca/page/government-ontario' },
									h('img', {
										class: 'ontario-show-for-medium',
										src: getAssetPath('./assets/ontario-logo--desktop.svg'),
										alt: 'Government of Ontario',
									}),
									h('img', {
										class: 'ontario-show-for-small-only',
										src: getAssetPath('./assets/ontario-logo--mobile.svg'),
										alt: 'Government of Ontario',
									}),
								),
							),
							h(
								'form',
								{
									name: 'searchForm',
									id: 'ontario-search-form-container',
									onSubmit: this.handleSubmit,
									class:
										'ontario-header__search-container ontario-columns ontario-small-10 ontario-medium-offset-3 ontario-medium-6 ontario-large-offset-0 ontario-large-6',
									novalidate: true,
								},
								h('label', { htmlFor: 'ontario-search-input-field', class: 'ontario-show-for-sr' }, 'Search'),
								h(Input, {
									'type': 'text',
									'name': 'search',
									'id': 'ontario-search-input-field',
									'autoComplete': 'off',
									'aria-autocomplete': 'none',
									'className': 'ontario-input ontario-header__search-input',
									'required': true,
									'ref': function (o) {
										return (t.searchBar = o);
									},
									'onKeyDown': this.onEscapePressed,
								}),
								h(Input, {
									'className': 'ontario-header__search-reset',
									'id': 'ontario-search-reset',
									'type': 'reset',
									'value': '',
									'aria-label': 'Clear field',
								}),
								h(
									'button',
									{ class: 'ontario-header__search-submit', id: 'ontario-search-submit', type: 'submit' },
									h('span', { class: 'ontario-show-for-sr' }, 'Submit'),
									h('span', { class: 'ontario-header__icon-container', innerHTML: OntarioIconSearch }),
								),
							),
							h(
								'div',
								{
									class:
										'ontario-header__nav-right-container ontario-columns ontario-small-10 ontario-medium-8 ontario-large-3',
								},
								h('ontario-language-toggle', {
									url:
										this.language === 'en'
											? (o = this.languageState) === null || o === void 0
												? void 0
												: o.frenchLink
											: (e = this.languageState) === null || e === void 0
											? void 0
											: e.englishLink,
									size: 'default',
									customLanguageToggle: this.customLanguageToggle,
								}),
								h(
									'button',
									{
										'class':
											'ontario-header__search-toggler ontario-header-button ontario-header-button--without-outline ontario-hide-for-large',
										'id': 'ontario-header-search-toggler',
										'aria-controls': 'ontario-search-form-container',
										'onClick': this.handleSearchToggle,
										'ref': function (o) {
											return (t.searchButton = o);
										},
									},
									h('span', { class: 'ontario-header__icon-container', innerHTML: OntarioIconSearchWhite }),
									h('span', { class: 'ontario-show-for-medium ontario-show' }, 'Search'),
								),
								this.renderMenuButton('ontario-header'),
							),
							h(
								'div',
								{ class: 'ontario-header__search-close-container ontario-columns ontario-small-2 ontario-medium-3' },
								h(
									'button',
									{
										'class':
											'ontario-header__search-close ontario-header-button ontario-header-button--without-outline',
										'id': 'ontario-header-search-close',
										'aria-label': 'close search bar',
										'type': 'button',
										'onClick': this.handleSearchToggle,
									},
									h('span', { 'aria-hidden': ''.concat(!this.searchToggle) }, 'close'),
									h('span', { class: 'ontario-header__icon-container', innerHTML: OntarioIconClose }),
								),
							),
						),
					),
					h(
						'nav',
						{
							role: 'navigation',
							class: this.menuToggle ? 'ontario-navigation ontario-navigation--open' : 'ontario-navigation',
							id: 'ontario-navigation',
						},
						h(
							'div',
							{ class: 'ontario-navigation__container' },
							h(
								'ul',
								null,
								(i = this.menuItemState) === null || i === void 0
									? void 0
									: i.map(function (o, e) {
											var i = e + 1 === t.menuItemState.length;
											var a = o.title.replace(/\s+/g, '-').toLowerCase();
											var n = window.location.pathname.includes(a);
											return t.isDynamicMenu
												? t.generateMenuItem(
														o.href,
														o.title,
														n,
														'ontario-header',
														'ontario-header-navigation__menu-item',
														undefined,
														i,
												  )
												: t.generateMenuItem(
														o.href,
														o.title,
														o.linkIsActive,
														'ontario-header',
														'ontario-header-navigation__menu-item',
														o.onClickHandler,
														i,
												  );
									  }),
							),
						),
					),
				),
				this.menuToggle && h('div', { class: 'ontario-hide-for-large ontario-overlay' }),
			);
		} else {
			return h(
				'div',
				null,
				h(
					'div',
					{
						class: 'ontario-application-header-container',
						id: 'ontario-application-header',
						ref: function (o) {
							return (t.header = o);
						},
					},
					h(
						'header',
						{ class: 'ontario-application-header', id: 'ontario-header' },
						h(
							'div',
							{ class: 'ontario-row' },
							h(
								'div',
								{ class: 'ontario-columns ontario-small-6 ontario-application-header__logo' },
								h(
									'a',
									{ href: 'https://www.ontario.ca/page/government-ontario' },
									h('img', {
										src: getAssetPath('./assets/ontario-logo-application-header.svg'),
										alt: 'Government of Ontario',
									}),
								),
							),
							h(
								'div',
								{ class: 'ontario-columns ontario-small-6 ontario-application-header__lang-toggle' },
								h('ontario-language-toggle', {
									size: 'small',
									url:
										this.language === 'en'
											? (a = this.languageState) === null || a === void 0
												? void 0
												: a.frenchLink
											: (n = this.languageState) === null || n === void 0
											? void 0
											: n.englishLink,
									customLanguageToggle: this.customLanguageToggle,
								}),
							),
						),
					),
					h(
						'div',
						{ class: 'ontario-application-subheader-menu__container' },
						h(
							'section',
							{ class: 'ontario-application-subheader' },
							h(
								'div',
								{ class: 'ontario-row' },
								h(
									'div',
									{ class: 'ontario-columns ontario-small-12 ontario-application-subheader__container' },
									h(
										'p',
										{ class: 'ontario-application-subheader__heading' },
										h(
											'a',
											{ href: (r = this.applicationHeaderInfoState) === null || r === void 0 ? void 0 : r.href },
											(l = this.applicationHeaderInfoState) === null || l === void 0 ? void 0 : l.title,
										),
									),
									h(
										'div',
										{ class: 'ontario-application-subheader__menu-container' },
										this.applicationHeaderInfoState.maxSubheaderDesktopLinks &&
											h(
												'ul',
												{ class: 'ontario-application-subheader__menu ontario-show-for-large' },
												(s = this.menuItemState) === null || s === void 0
													? void 0
													: s.slice(0, this.applicationHeaderInfoState.maxSubheaderDesktopLinks).map(function (o) {
															return t.generateMenuItem(
																o.href,
																o.title,
																o.linkIsActive,
																'app-desktop',
																'',
																o.onClickHandler,
															);
													  }),
											),
										this.applicationHeaderInfoState.maxSubheaderTabletLinks &&
											h(
												'ul',
												{
													class:
														'ontario-application-subheader__menu ontario-hide-for-small ontario-show-for-medium ontario-hide-for-large',
												},
												(d = this.menuItemState) === null || d === void 0
													? void 0
													: d.slice(0, this.applicationHeaderInfoState.maxSubheaderTabletLinks).map(function (o) {
															return t.generateMenuItem(
																o.href,
																o.title,
																o.linkIsActive,
																'app-tablet',
																'',
																o.onClickHandler,
															);
													  }),
											),
										this.applicationHeaderInfoState.maxSubheaderMobileLinks &&
											h(
												'ul',
												{ class: 'ontario-application-subheader__menu ontario-show-for-small-only' },
												(m = this.menuItemState) === null || m === void 0
													? void 0
													: m.slice(0, this.applicationHeaderInfoState.maxSubheaderMobileLinks).map(function (o) {
															return t.generateMenuItem(
																o.href,
																o.title,
																o.linkIsActive,
																'app-mobile',
																'',
																o.onClickHandler,
															);
													  }),
											),
										this.menuItemState !== undefined &&
											this.applicationHeaderInfoState.maxSubheaderDesktopLinks !== this.menuItemState.length &&
											this.renderMenuButton('desktop'),
										this.menuItemState !== undefined &&
											this.applicationHeaderInfoState.maxSubheaderTabletLinks !== this.menuItemState.length &&
											this.renderMenuButton('tablet'),
										this.menuItemState !== undefined &&
											this.applicationHeaderInfoState.maxSubheaderMobileLinks !== this.menuItemState.length &&
											this.renderMenuButton('mobile'),
									),
								),
							),
						),
						h(
							'nav',
							{
								role: 'navigation',
								class:
									this.menuToggle === true
										? 'ontario-application-navigation ontario-navigation--open'
										: 'ontario-application-navigation',
								id: 'ontario-application-navigation',
							},
							h(
								'div',
								{ class: 'ontario-application-navigation__container' },
								h(
									'ul',
									{ class: 'ontario-show-for-large' },
									(u = this.menuItemState) === null || u === void 0
										? void 0
										: u
												.slice(this.applicationHeaderInfoState.maxSubheaderDesktopLinks, this.menuItemState.length)
												.map(function (o, e) {
													return t.generateNavigationLinks(
														o,
														e,
														t.applicationHeaderInfoState.maxSubheaderDesktopLinks,
														'app-desktop',
													);
												}),
								),
								h(
									'ul',
									{ class: 'ontario-show-for-medium ontario-hide-for-small ontario-hide-for-large' },
									(c = this.menuItemState) === null || c === void 0
										? void 0
										: c
												.slice(this.applicationHeaderInfoState.maxSubheaderTabletLinks, this.menuItemState.length)
												.map(function (o, e) {
													return t.generateNavigationLinks(
														o,
														e,
														t.applicationHeaderInfoState.maxSubheaderTabletLinks,
														'app-tablet',
													);
												}),
								),
								h(
									'ul',
									{ class: 'ontario-show-for-small-only' },
									(p = this.menuItemState) === null || p === void 0
										? void 0
										: p
												.slice(this.applicationHeaderInfoState.maxSubheaderMobileLinks, this.menuItemState.length)
												.map(function (o, e) {
													return t.generateNavigationLinks(
														o,
														e,
														t.applicationHeaderInfoState.maxSubheaderMobileLinks,
														'app-mobile',
													);
												}),
								),
							),
						),
					),
				),
				this.menuToggle && h('div', { class: 'ontario-hide-for-large ontario-overlay' }),
			);
		}
	};
	Object.defineProperty(t, 'assetsDirs', {
		get: function () {
			return ['./assets'];
		},
		enumerable: false,
		configurable: true,
	});
	Object.defineProperty(t.prototype, 'el', {
		get: function () {
			return getElement(this);
		},
		enumerable: false,
		configurable: true,
	});
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return {
				applicationHeaderInfo: ['parseApplicationHeaderInfo'],
				menuItems: ['parseMenuItems'],
				languageToggleOptions: ['parseLanguage'],
			};
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioHeader.style = { application: ontarioApplicationHeaderCss, ontario: ontarioHeaderCss };
var ontarioHintExpanderCss =
	'.ontario-hint-expander__button:focus,.ontario-hint-expander__button:active{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-hint-expander__container{max-width:48rem}.ontario-hint-expander__button{color:#0066CC;cursor:pointer;background:none;border:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:400;font-size:1rem;text-align:left;margin:0 0 1rem 0;padding:0 0.25rem 0 0}.ontario-hint-expander__button-icon--close{display:none;margin-right:0.25rem}.ontario-hint-expander__button-icon--open{display:inline-block;margin-right:0.25rem}.ontario-hint-expander__button:hover{color:#00478F}.ontario-hint-expander__button:active{color:#002142}.ontario-hint-expander__button>*{pointer-events:none}.ontario-hint-expander__content{border-left:4px solid #cccccc;color:#1a1a1a;background-color:#f2f2f2;display:none;padding:1rem 1rem 1rem calc(1rem + 0.25rem);margin:0 0 1rem 0.25rem}.ontario-hint-expander__content *:first-child{margin-top:0}.ontario-hint-expander__content *:last-child{margin-bottom:0}.ontario-hint-expander__content img{width:100%}@media screen and (min-width: 40em){.ontario-hint-expander__content img{width:50%}}.ontario-hint-expander__content.ontario-expander__content--opened{display:block}.ontario-hint-expander__container.ontario-expander--active .ontario-hint-expander__button-icon--close{display:inline-block}.ontario-hint-expander__container.ontario-expander--active .ontario-hint-expander__button-icon--open{display:none}.ontario-hint-expander__checkbox-exists-true{margin:0.75rem 0 0 0.5rem}@media screen and (max-width: 40em){.ontario-hint-expander__checkbox-exists-true{margin-top:1rem}}';
var OntarioHintExpander = (function () {
	function t(t) {
		var o = this;
		registerInstance(this, t);
		this.toggleExpanderEvent = createEvent(this, 'toggleExpanderEvent', 7);
		this.onClick = function (t) {
			var e = t.target;
			var i = e === null || e === void 0 ? void 0 : e.parentElement;
			i === null || i === void 0 ? void 0 : i.classList.toggle('ontario-expander--active');
			var a = i === null || i === void 0 ? void 0 : i.querySelector("[data-toggle='ontario-expander-content']");
			a === null || a === void 0 ? void 0 : a.classList.toggle('ontario-expander__content--opened');
			(a === null || a === void 0 ? void 0 : a.classList.contains('ontario-expander__content--opened'))
				? a.setAttribute('aria-hidden', 'false')
				: a === null || a === void 0
				? void 0
				: a.setAttribute('aria-hidden', 'true');
			(i === null || i === void 0 ? void 0 : i.classList.contains('ontario-expander--active'))
				? i === null || i === void 0
					? void 0
					: i.setAttribute('aria-expanded', 'true')
				: i === null || i === void 0
				? void 0
				: i.setAttribute('aria-expanded', 'false');
			o.toggleExpanderEvent.emit(t);
		};
		this.hintContentType = 'string';
		this.hint = undefined;
		this.content = undefined;
		this.elementId = undefined;
		this.hintState = undefined;
	}
	t.prototype.checkHintContentType = function () {
		if (this.hintContentType !== 'string' && this.hintContentType !== 'html') {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' hintContentType ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-hint-text> ')
				.addRegularText('was not one of the permitted types. A default type of `string` will be applied.')
				.printMessage();
			return (this.hintContentType = 'string');
		}
		return this.hintContentType;
	};
	t.prototype.updateHintContent = function () {
		var t, o;
		this.hintState =
			(o = (t = this.hint) !== null && t !== void 0 ? t : this.host.textContent) !== null && o !== void 0 ? o : '';
		this.validateHint(this.hintState);
	};
	t.prototype.validateContent = function (t) {
		if (validatePropExists(t)) {
			var o = new ConsoleMessageClass();
			o.addDesignSystemTag()
				.addMonospaceText(' content ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-hint-expander> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	};
	t.prototype.validateHint = function (t) {
		if (validatePropExists(t)) {
			var o = new ConsoleMessageClass();
			o.addDesignSystemTag()
				.addMonospaceText(' hint ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-hint-expander> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	};
	t.prototype.componentWillLoad = function () {
		var t;
		this.elementId = (t = this.elementId) !== null && t !== void 0 ? t : v4();
		this.updateHintContent();
		this.checkHintContentType();
		this.validateContent(this.content);
	};
	t.prototype.componentDidLoad = function () {
		var t = this;
		var o = new MutationObserver(function (o) {
			o.forEach(function (o) {
				if (o.type === 'attributes') {
					t.updateHintContent();
				}
			});
		});
		var e = { attributes: true };
		o.observe(this.host, e);
	};
	t.prototype.getId = function () {
		var t;
		return (t = this.elementId) !== null && t !== void 0 ? t : '';
	};
	t.prototype.render = function () {
		return h(
			'div',
			{ class: 'ontario-hint-expander__container' },
			h(
				'button',
				{
					'class': 'ontario-hint-expander__button',
					'onClick': this.onClick,
					'id': 'hint-expander-button-'.concat(this.getId()),
					'aria-controls': 'hint-expander-content-'.concat(this.getId()),
					'aria-expanded': 'false',
					'data-toggle': 'ontario-collapse',
				},
				h(
					'span',
					{ class: 'ontario-hint-expander__button-icon--close ontario-icon' },
					h('ontario-icon-chevron-up', null),
				),
				h('span', { class: 'ontario-hint-expander__button-icon--open' }, h('ontario-icon-chevron-down', null)),
				this.hint,
			),
			h(
				'div',
				{
					'class': 'ontario-hint-expander__content',
					'id': 'hint-expander-content-'.concat(this.getId()),
					'aria-labelledby': 'hint-expander-button-'.concat(this.getId()),
					'aria-hidden': 'true',
					'data-toggle': 'ontario-expander-content',
				},
				this.hintContentType === 'string' ? this.content : h('span', { innerHTML: this.content }),
			),
		);
	};
	Object.defineProperty(t.prototype, 'host', {
		get: function () {
			return getElement(this);
		},
		enumerable: false,
		configurable: true,
	});
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return { hintContentType: ['checkHintContentType'], hint: ['updateHintContent'], content: ['validateContent'] };
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioHintExpander.style = ontarioHintExpanderCss;
var ontarioHintTextCss =
	'.ontario-hint{color:#4d4d4d;display:inline-block;margin:0 0 1rem 0;width:100%;max-width:48rem}.ontario-hint p{margin-bottom:1rem}.ontario-hint p:first-of-type{margin-top:0}.ontario-hint p:last-of-type{margin-bottom:0}';
var OntarioHintText = (function () {
	function t(t) {
		registerInstance(this, t);
		this.hintContentType = 'string';
		this.hint = undefined;
		this.elementId = undefined;
		this.hintState = undefined;
	}
	t.prototype.checkHintContentType = function () {
		if (this.hintContentType !== 'string' && this.hintContentType !== 'html') {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' hintContentType ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-hint-text> ')
				.addRegularText('was not one of the permitted types. A default type of `string` will be applied.')
				.printMessage();
			return (this.hintContentType = 'string');
		}
		return this.hintContentType;
	};
	t.prototype.updateHintContent = function () {
		var t, o;
		this.hintState =
			(o = (t = this.hint) !== null && t !== void 0 ? t : this.host.textContent) !== null && o !== void 0 ? o : '';
		this.validateHintContent(this.hintState);
	};
	t.prototype.validateHintContent = function (t) {
		if (!this.host.textContent) {
			if (validatePropExists(t)) {
				var o = new ConsoleMessageClass();
				o.addDesignSystemTag()
					.addMonospaceText(' hint ')
					.addRegularText('for')
					.addMonospaceText(' <ontario-hint-text> ')
					.addRegularText('was not provided')
					.printMessage();
			}
		}
	};
	t.prototype.getId = function () {
		var t;
		return (t = this.elementId) !== null && t !== void 0 ? t : '';
	};
	t.prototype.getHintTextId = function () {
		return __awaiter(this, void 0, void 0, function () {
			return __generator(this, function (t) {
				return [2, this.elementId];
			});
		});
	};
	t.prototype.componentWillLoad = function () {
		var t;
		this.updateHintContent();
		this.checkHintContentType();
		this.elementId = (t = this.elementId) !== null && t !== void 0 ? t : v4();
	};
	t.prototype.componentDidLoad = function () {
		var t = this;
		var o = new MutationObserver(function (o) {
			o.forEach(function (o) {
				if (o.type === 'attributes') {
					t.updateHintContent();
				}
			});
		});
		var e = { attributes: true };
		o.observe(this.host, e);
	};
	t.prototype.render = function () {
		return this.hintContentType === 'string'
			? h('p', { id: this.getId(), class: 'ontario-hint' }, this.hintState)
			: h('div', { id: this.getId(), class: 'ontario-hint', innerHTML: this.hintState });
	};
	Object.defineProperty(t.prototype, 'host', {
		get: function () {
			return getElement(this);
		},
		enumerable: false,
		configurable: true,
	});
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return { hintContentType: ['checkHintContentType'], hint: ['updateHintContent'] };
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioHintText.style = ontarioHintTextCss;
var ontarioIconCss$g =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
var OntarioIconAccessibility = (function () {
	function t(t) {
		registerInstance(this, t);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	t.prototype.validateWidth = function () {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-accessibility> ')
				.addRegularText(
					''.concat(
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number',
						'; only a positive number is allowed. The default size of',
					),
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	};
	t.prototype.validateColour = function () {
		var t = validateValueAgainstArray(this.colour, IconColours);
		if (t) {
			this.iconColourState = this.colour;
		} else {
			if (validateColor(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	};
	t.prototype.warnDefaultColour = function () {
		var t = new ConsoleMessageClass();
		t.addDesignSystemTag()
			.addMonospaceText(' colour ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-icon-accessibility> ')
			.addRegularText('was set to an invalid colour; only')
			.addMonospaceText(' black, blue, grey or white ')
			.addRegularText('are supported. The default colour')
			.addMonospaceText(' black ')
			.addRegularText('is assumed.')
			.printMessage();
		return 'black';
	};
	t.prototype.componentWillLoad = function () {
		this.validateColour();
		this.validateWidth();
	};
	t.prototype.render = function () {
		return h(
			'div',
			{
				class: 'ontario-icon ontario-icon--'
					.concat(this.iconColourState, ' ontario-icon--width-')
					.concat(this.iconWidthState),
				style: { width: ''.concat(this.iconWidthState, 'px') },
			},
			h(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: ''.concat(this.iconCustomColourState), stroke: ''.concat(this.iconCustomColourState) },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'accessibility',
				},
				h('path', {
					d: 'M18.4 11.2l-4.1.2 2.3-2.6c.2-.3.3-.8.2-1.3-.1-.3-.2-.6-.5-.8l-5.4-3.2c-.4-.3-1-.2-1.4.1L6.8 6.1c-.5.5-.6 1.2-.1 1.7.4.5 1.2.5 1.7.1l2-1.8 1.9 1.1-4.2 4.3c-.1.1-.1.2-.2.2-.5.2-1 .4-1.4.7L8 13.9c.5-.2 1-.4 1.5-.4 1.9 0 3.5 1.6 3.5 3.5 0 .6-.1 1.1-.4 1.5l1.5 1.5a5.29 5.29 0 0 0 .9-3c0-1.2-.4-2.4-1.1-3.3l3.3-.3-.2 4.8c-.1.7.4 1.2 1.1 1.3h.1c.6 0 1.1-.5 1.2-1.1l.2-5.9c0-.3-.1-.7-.3-.9-.3-.3-.6-.4-.9-.4zM18 5.5a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2 2 2 0 0 0 2 2zm-5.5 16.1a5.29 5.29 0 0 1-3 .9C6.5 22.5 4 20 4 17a5.29 5.29 0 0 1 .9-3l1.5 1.5c-.2.5-.4 1-.4 1.5 0 1.9 1.6 3.5 3.5 3.5.6 0 1.1-.1 1.5-.4l1.5 1.5z',
				}),
			),
		);
	};
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioIconAccessibility.style = ontarioIconCss$g;
var ontarioIconCss$f =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
var OntarioIconAlertError = (function () {
	function t(t) {
		registerInstance(this, t);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
	}
	t.prototype.validateWidth = function () {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-alert-error> ')
				.addRegularText(
					''.concat(
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number',
						'; only a positive number is allowed. The default size of',
					),
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	};
	t.prototype.validateColour = function () {
		if (this.host.hasAttribute('colour')) {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-alert-error> ')
				.addRegularText('cannot be set. The provided colour is ignored.')
				.printMessage();
		}
	};
	t.prototype.componentWillLoad = function () {
		this.validateColour();
		this.validateWidth();
	};
	t.prototype.render = function () {
		return h(
			'div',
			{
				class: 'ontario-icon ontario-icon--width-'.concat(this.iconWidthState),
				style: { width: ''.concat(this.iconWidthState, 'px') },
			},
			h(
				'svg',
				{
					class: 'svg-icon',
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'alert-error',
				},
				h('path', {
					d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
					fill: '#cd0000',
				}),
				h('path', { d: 'M11 17h2v-2h-2v2zm0-4h2V7h-2v6z', fill: '#fff' }),
			),
		);
	};
	Object.defineProperty(t.prototype, 'host', {
		get: function () {
			return getElement(this);
		},
		enumerable: false,
		configurable: true,
	});
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return { iconWidth: ['validateWidth'] };
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioIconAlertError.style = ontarioIconCss$f;
var ontarioIconCss$e =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
var OntarioIconAlertInformation = (function () {
	function t(t) {
		registerInstance(this, t);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
	}
	t.prototype.validateWidth = function () {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-alert-information> ')
				.addRegularText(
					''.concat(
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number',
						'; only a positive number is allowed. The default size of',
					),
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	};
	t.prototype.validateColour = function () {
		if (this.host.hasAttribute('colour')) {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-alert-information> ')
				.addRegularText('cannot be set. The provided colour is ignored.')
				.printMessage();
		}
	};
	t.prototype.componentWillLoad = function () {
		this.validateColour();
		this.validateWidth();
	};
	t.prototype.render = function () {
		return h(
			'div',
			{
				class: 'ontario-icon ontario-icon--width-'.concat(this.iconWidthState),
				style: { width: ''.concat(this.iconWidthState, 'px') },
			},
			h(
				'svg',
				{
					class: 'svg-icon',
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'alert-information',
				},
				h('path', {
					d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
					fill: '#1080a6',
				}),
				h('path', { d: 'M11 17h2v-6h-2v6zm0-8h2V7h-2v2z', fill: '#fff' }),
			),
		);
	};
	Object.defineProperty(t.prototype, 'host', {
		get: function () {
			return getElement(this);
		},
		enumerable: false,
		configurable: true,
	});
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return { iconWidth: ['validateWidth'] };
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioIconAlertInformation.style = ontarioIconCss$e;
var ontarioIconCss$d =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
var OntarioIconAlertSuccess = (function () {
	function t(t) {
		registerInstance(this, t);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
	}
	t.prototype.validateWidth = function () {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-alert-success> ')
				.addRegularText(
					''.concat(
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number',
						'; only a positive number is allowed. The default size of',
					),
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	};
	t.prototype.validateColour = function () {
		if (this.host.hasAttribute('colour')) {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-alert-success> ')
				.addRegularText('cannot be set. The provided colour is ignored.')
				.printMessage();
		}
	};
	t.prototype.componentWillLoad = function () {
		this.validateColour();
		this.validateWidth();
	};
	t.prototype.render = function () {
		return h(
			'div',
			{
				class: 'ontario-icon ontario-icon--width-'.concat(this.iconWidthState),
				style: { width: ''.concat(this.iconWidthState, 'px') },
			},
			h(
				'svg',
				{
					class: 'svg-icon',
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'alert-success',
				},
				h('path', {
					d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.4-1.4 3.6 3.58L17.17 7l1.4 1.42L10 17z',
					fill: '#118847',
				}),
				h('path', { d: 'M5 12l5 5 8.58-8.58L17.17 7 10 14.17 6.4 10.6 5 12z', fill: '#fff' }),
			),
		);
	};
	Object.defineProperty(t.prototype, 'host', {
		get: function () {
			return getElement(this);
		},
		enumerable: false,
		configurable: true,
	});
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return { iconWidth: ['validateWidth'] };
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioIconAlertSuccess.style = ontarioIconCss$d;
var ontarioIconCss$c =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
var OntarioIconAlertWarning = (function () {
	function t(t) {
		registerInstance(this, t);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
	}
	t.prototype.validateWidth = function () {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-alert-warning> ')
				.addRegularText(
					''.concat(
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number',
						'; only a positive number is allowed. The default size of',
					),
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	};
	t.prototype.validateColour = function () {
		if (this.host.hasAttribute('colour')) {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-alert-warning> ')
				.addRegularText('cannot be set. The provided colour is ignored.')
				.printMessage();
		}
	};
	t.prototype.componentWillLoad = function () {
		this.validateColour();
		this.validateWidth();
	};
	t.prototype.render = function () {
		return h(
			'div',
			{
				class: 'ontario-icon ontario-icon--width-'.concat(this.iconWidthState),
				style: { width: ''.concat(this.iconWidthState, 'px') },
			},
			h(
				'svg',
				{
					class: 'svg-icon',
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'alert-warning',
				},
				h('path', { d: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z', fill: '#ffd440' }),
				h('path', { d: 'M11 10h2v4h-2zm0 6h2v2h-2z', fill: '#000' }),
			),
		);
	};
	Object.defineProperty(t.prototype, 'host', {
		get: function () {
			return getElement(this);
		},
		enumerable: false,
		configurable: true,
	});
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return { iconWidth: ['validateWidth'] };
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioIconAlertWarning.style = ontarioIconCss$c;
var ontarioIconCss$b =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
var OntarioIconCamera = (function () {
	function t(t) {
		registerInstance(this, t);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	t.prototype.validateWidth = function () {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-camera> ')
				.addRegularText(
					''.concat(
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number',
						'; only a positive number is allowed. The default size of',
					),
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	};
	t.prototype.validateColour = function () {
		var t = validateValueAgainstArray(this.colour, IconColours);
		if (t) {
			this.iconColourState = this.colour;
		} else {
			if (validateColor(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	};
	t.prototype.warnDefaultColour = function () {
		var t = new ConsoleMessageClass();
		t.addDesignSystemTag()
			.addMonospaceText(' colour ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-icon-camera> ')
			.addRegularText('was set to an invalid colour; only')
			.addMonospaceText(' black, blue, grey or white ')
			.addRegularText('are supported. The default colour')
			.addMonospaceText(' black ')
			.addRegularText('is assumed.')
			.printMessage();
		return 'black';
	};
	t.prototype.componentWillLoad = function () {
		this.validateColour();
		this.validateWidth();
	};
	t.prototype.render = function () {
		return h(
			'div',
			{
				class: 'ontario-icon ontario-icon--'
					.concat(this.iconColourState, ' ontario-icon--width-')
					.concat(this.iconWidthState),
				style: { width: ''.concat(this.iconWidthState, 'px') },
			},
			h(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: ''.concat(this.iconCustomColourState), stroke: ''.concat(this.iconCustomColourState) },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'camera',
				},
				h('path', {
					d: 'M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1.8a3.2 3.2 0 0 0 0-6.4 3.2 3.2 0 1 0 0 6.4z',
				}),
			),
		);
	};
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioIconCamera.style = ontarioIconCss$b;
var ontarioIconCss$a =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
var OntarioIconChevronDown = (function () {
	function t(t) {
		registerInstance(this, t);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	t.prototype.validateWidth = function () {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-chevron-down> ')
				.addRegularText(
					''.concat(
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number',
						'; only a positive number is allowed. The default size of',
					),
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	};
	t.prototype.validateColour = function () {
		var t = validateValueAgainstArray(this.colour, IconColours);
		if (t) {
			this.iconColourState = this.colour;
		} else {
			if (validateColor(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	};
	t.prototype.warnDefaultColour = function () {
		var t = new ConsoleMessageClass();
		t.addDesignSystemTag()
			.addMonospaceText(' colour ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-icon-chevron-down> ')
			.addRegularText('was set to an invalid colour; only')
			.addMonospaceText(' black, blue, grey or white ')
			.addRegularText('are supported. The default colour')
			.addMonospaceText(' black ')
			.addRegularText('is assumed.')
			.printMessage();
		return 'black';
	};
	t.prototype.componentWillLoad = function () {
		this.validateColour();
		this.validateWidth();
	};
	t.prototype.render = function () {
		return h(
			'div',
			{
				class: 'ontario-icon ontario-icon--'
					.concat(this.iconColourState, ' ontario-icon--width-')
					.concat(this.iconWidthState),
				style: { width: ''.concat(this.iconWidthState, 'px') },
			},
			h(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: ''.concat(this.iconCustomColourState), stroke: ''.concat(this.iconCustomColourState) },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'chevron-down',
				},
				h('path', { d: 'M7.4 8.6l4.6 4.58 4.6-4.58L18 10l-6 6-6-6 1.4-1.4z' }),
			),
		);
	};
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioIconChevronDown.style = ontarioIconCss$a;
var ontarioIconCss$9 =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
var OntarioIconChevronLeft = (function () {
	function t(t) {
		registerInstance(this, t);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	t.prototype.validateWidth = function () {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-chevron-left> ')
				.addRegularText(
					''.concat(
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number',
						'; only a positive number is allowed. The default size of',
					),
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	};
	t.prototype.validateColour = function () {
		var t = validateValueAgainstArray(this.colour, IconColours);
		if (t) {
			this.iconColourState = this.colour;
		} else {
			if (validateColor(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	};
	t.prototype.warnDefaultColour = function () {
		var t = new ConsoleMessageClass();
		t.addDesignSystemTag()
			.addMonospaceText(' colour ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-icon-chevron-left> ')
			.addRegularText('was set to an invalid colour; only')
			.addMonospaceText(' black, blue, grey or white ')
			.addRegularText('are supported. The default colour')
			.addMonospaceText(' black ')
			.addRegularText('is assumed.')
			.printMessage();
		return 'black';
	};
	t.prototype.componentWillLoad = function () {
		this.validateColour();
		this.validateWidth();
	};
	t.prototype.render = function () {
		return h(
			'div',
			{
				class: 'ontario-icon ontario-icon--'
					.concat(this.iconColourState, ' ontario-icon--width-')
					.concat(this.iconWidthState),
				style: { width: ''.concat(this.iconWidthState, 'px') },
			},
			h(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: ''.concat(this.iconCustomColourState), stroke: ''.concat(this.iconCustomColourState) },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'chevron-left',
				},
				h('path', { d: 'M15.4 7.4L14 6l-6 6 6 6 1.4-1.4-4.58-4.6 4.58-4.6z' }),
			),
		);
	};
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioIconChevronLeft.style = ontarioIconCss$9;
var ontarioIconCss$8 =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
var OntarioIconChevronUp = (function () {
	function t(t) {
		registerInstance(this, t);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	t.prototype.validateWidth = function () {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-chevron-up> ')
				.addRegularText(
					''.concat(
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number',
						'; only a positive number is allowed. The default size of',
					),
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	};
	t.prototype.validateColour = function () {
		var t = validateValueAgainstArray(this.colour, IconColours);
		if (t) {
			this.iconColourState = this.colour;
		} else {
			if (validateColor(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	};
	t.prototype.warnDefaultColour = function () {
		var t = new ConsoleMessageClass();
		t.addDesignSystemTag()
			.addMonospaceText(' colour ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-icon-chevron-up> ')
			.addRegularText('was set to an invalid colour; only')
			.addMonospaceText(' black, blue, grey or white ')
			.addRegularText('are supported. The default colour')
			.addMonospaceText(' black ')
			.addRegularText('is assumed.')
			.printMessage();
		return 'black';
	};
	t.prototype.componentWillLoad = function () {
		this.validateColour();
		this.validateWidth();
	};
	t.prototype.render = function () {
		return h(
			'div',
			{
				class: 'ontario-icon ontario-icon--'
					.concat(this.iconColourState, ' ontario-icon--width-')
					.concat(this.iconWidthState),
				style: { width: ''.concat(this.iconWidthState, 'px') },
			},
			h(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: ''.concat(this.iconCustomColourState), stroke: ''.concat(this.iconCustomColourState) },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'chevron-up',
				},
				h('path', { d: 'M7.4 15.4l4.6-4.58 4.6 4.58L18 14l-6-6-6 6 1.4 1.4z' }),
			),
		);
	};
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioIconChevronUp.style = ontarioIconCss$8;
var ontarioIconCss$7 =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
var OntarioIconEmail = (function () {
	function t(t) {
		registerInstance(this, t);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	t.prototype.validateWidth = function () {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-email> ')
				.addRegularText(
					''.concat(
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number',
						'; only a positive number is allowed. The default size of',
					),
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	};
	t.prototype.validateColour = function () {
		var t = validateValueAgainstArray(this.colour, IconColours);
		if (t) {
			this.iconColourState = this.colour;
		} else {
			if (validateColor(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	};
	t.prototype.warnDefaultColour = function () {
		var t = new ConsoleMessageClass();
		t.addDesignSystemTag()
			.addMonospaceText(' colour ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-icon-email> ')
			.addRegularText('was set to an invalid colour; only')
			.addMonospaceText(' black, blue, grey or white ')
			.addRegularText('are supported. The default colour')
			.addMonospaceText(' black ')
			.addRegularText('is assumed.')
			.printMessage();
		return 'black';
	};
	t.prototype.componentWillLoad = function () {
		this.validateColour();
		this.validateWidth();
	};
	t.prototype.render = function () {
		return h(
			'div',
			{
				class: 'ontario-icon ontario-icon--'
					.concat(this.iconColourState, ' ontario-icon--width-')
					.concat(this.iconWidthState),
				style: { width: ''.concat(this.iconWidthState, 'px') },
			},
			h(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: ''.concat(this.iconCustomColourState), stroke: ''.concat(this.iconCustomColourState) },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'email',
				},
				h('path', {
					d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
				}),
			),
		);
	};
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioIconEmail.style = ontarioIconCss$7;
var ontarioIconCss$6 =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
var OntarioIconHelp = (function () {
	function t(t) {
		registerInstance(this, t);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	t.prototype.validateWidth = function () {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-help> ')
				.addRegularText(
					''.concat(
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number',
						'; only a positive number is allowed. The default size of',
					),
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	};
	t.prototype.validateColour = function () {
		var t = validateValueAgainstArray(this.colour, IconColours);
		if (t) {
			this.iconColourState = this.colour;
		} else {
			if (validateColor(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	};
	t.prototype.warnDefaultColour = function () {
		var t = new ConsoleMessageClass();
		t.addDesignSystemTag()
			.addMonospaceText(' colour ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-icon-help> ')
			.addRegularText('was set to an invalid colour; only')
			.addMonospaceText(' black, blue, grey or white ')
			.addRegularText('are supported. The default colour')
			.addMonospaceText(' black ')
			.addRegularText('is assumed.')
			.printMessage();
		return 'black';
	};
	t.prototype.componentWillLoad = function () {
		this.validateColour();
		this.validateWidth();
	};
	t.prototype.render = function () {
		return h(
			'div',
			{
				class: 'ontario-icon ontario-icon--'
					.concat(this.iconColourState, ' ontario-icon--width-')
					.concat(this.iconWidthState),
				style: { width: ''.concat(this.iconWidthState, 'px') },
			},
			h(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: ''.concat(this.iconCustomColourState), stroke: ''.concat(this.iconCustomColourState) },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'help',
				},
				h('path', {
					d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.6-.86.6-1.4 0-1.1-.9-2-2-2s-2 .9-2 2H8a4 4 0 1 1 8 0 3.18 3.18 0 0 1-.93 2.25z',
				}),
			),
		);
	};
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioIconHelp.style = ontarioIconCss$6;
var ontarioIconCss$5 =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
var OntarioIconMastercard = (function () {
	function t(t) {
		registerInstance(this, t);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
	}
	t.prototype.validateWidth = function () {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-mastercard> ')
				.addRegularText(
					''.concat(
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number',
						'; only a positive number is allowed. The default size of',
					),
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	};
	t.prototype.validateColour = function () {
		if (this.host.hasAttribute('colour')) {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-mastercard> ')
				.addRegularText('cannot be set. The provided colour is ignored.')
				.printMessage();
		}
	};
	t.prototype.componentWillLoad = function () {
		this.validateColour();
		this.validateWidth();
	};
	t.prototype.render = function () {
		return h(
			'div',
			{
				class: 'ontario-icon ontario-icon--width-'.concat(this.iconWidthState),
				style: { width: ''.concat(this.iconWidthState, 'px') },
			},
			h(
				'svg',
				{ class: 'svg-icon', role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', id: 'mastercard' },
				h('circle', { cx: '8', cy: '12', r: '6.5', fill: '#eb001b' }),
				h('circle', { cx: '16', cy: '12', r: '6.5', fill: '#f79e1b' }),
				h('path', {
					d: 'M12 17.124S9.5 15.5 9.5 12 12 6.876 12 6.876 14.5 8.5 14.5 12 12 17.124 12 17.124z',
					fill: '#ff5f00',
				}),
				h('path', {
					d: 'M21.173 16.85v-.3h.125v-.06H21v.06h.117v.3h.055zm.578 0v-.35h-.1l-.105.25-.105-.25h-.1v.35h.065v-.265l.098.227h.067l.098-.227v.265h.063z',
					fill: '#f79e1b',
				}),
				h(
					'g',
					{ fill: '#231f20' },
					h('path', {
						d: 'M5.275 21.953v-1.098a.66.66 0 0 0-.187-.503.65.65 0 0 0-.501-.192.68.68 0 0 0-.35.072c-.108.055-.2.137-.265.24-.06-.1-.145-.18-.246-.235a.64.64 0 0 0-.332-.076.58.58 0 0 0-.513.26v-.216H2.5v1.75h.384V21c-.016-.12.023-.245.105-.333s.203-.138.324-.132c.253 0 .38.165.38.46v.974h.384V21c-.016-.12.024-.244.105-.333s.202-.138.323-.132c.26 0 .384.165.384.46v.974l.384-.007zm5.687-1.75h-.626v-.53h-.384v.53h-.348v.348h.355v.806c0 .406.157.648.608.648.168.001.333-.046.476-.136l-.1-.326c-.102.06-.218.095-.337.1-.183 0-.253-.117-.253-.293v-.798h.622l-.004-.348zm3.247-.044c-.186-.005-.368.096-.46.256v-.212h-.377v1.75h.38v-.98c0-.29.124-.45.366-.45a.62.62 0 0 1 .238.044l.117-.366c-.087-.03-.178-.047-.27-.048l.007.007zm-4.9.183a1.31 1.31 0 0 0-.714-.183c-.443 0-.732.212-.732.56 0 .286.212.46.604.516l.183.026c.21.03.308.084.308.183 0 .136-.14.212-.4.212a.93.93 0 0 1-.582-.183l-.183.297c.222.155.487.234.758.227.505 0 .798-.238.798-.57s-.23-.47-.61-.523l-.183-.026c-.165-.022-.297-.055-.297-.172s.124-.205.333-.205c.193.002.382.054.55.15l.168-.308zM19.5 20.16c-.186-.005-.368.096-.46.256v-.212h-.377v1.75h.38v-.98c0-.29.124-.45.366-.45a.62.62 0 0 1 .238.044l.117-.366c-.087-.03-.18-.047-.27-.048l.007.007zm-4.906.915c-.01.246.09.492.265.664s.423.265.67.25c.23.012.453-.063.63-.21l-.183-.308a.77.77 0 0 1-.458.158.56.56 0 0 1-.517-.56.56.56 0 0 1 .517-.56.77.77 0 0 1 .458.157l.183-.308c-.176-.146-.4-.22-.63-.21-.246-.014-.493.08-.67.25s-.274.418-.265.664v.007zm3.566 0v-.87h-.38v.212c-.13-.166-.34-.264-.55-.256-.243 0-.476.096-.647.268s-.268.404-.268.647.096.476.268.647.405.268.647.268c.21.008.42-.1.55-.256v.212h.38v-.87zm-1.417 0c.02-.323.338-.557.65-.484a.54.54 0 0 1 .4.422c.056.315-.195.62-.518.622-.3.004-.55-.264-.53-.56zm-4.595-.915c-.243.003-.474.103-.643.277s-.263.408-.26.65.103.474.277.643.408.262.65.26c.263.014.522-.07.727-.238l-.183-.282c-.145.116-.324.18-.51.183-.126.01-.25-.028-.35-.108s-.16-.195-.175-.32h1.3v-.146c0-.55-.34-.915-.83-.915l-.005-.004zm0 .34c.114-.003.227.042.31.12a.44.44 0 0 1 .133.304h-.915a.45.45 0 0 1 .465-.425h.007zm9.54.578V19.5h-.366v.915c-.13-.166-.34-.264-.55-.256-.243 0-.476.096-.647.268s-.268.404-.268.647.096.476.268.647.404.268.647.268c.21.008.42-.1.55-.256v.212h.366v-.868zm.635.62c.046-.001.092.017.126.05s.052.077.052.123-.02.1-.052.123-.08.05-.126.05c-.07-.001-.136-.043-.165-.106-.018-.043-.018-.093 0-.136a.18.18 0 0 1 .095-.091c.017-.007.072-.013.07-.013zm0 .31c.035 0 .07-.015.095-.04s.036-.058.036-.09c0-.05-.03-.1-.078-.12s-.112-.01-.15.03a.14.14 0 0 0 0 .183.14.14 0 0 0 .102.04h-.005zm-1.394-1.414c.315.074.49.43.365.723a.54.54 0 0 1-.484.321.54.54 0 0 1-.501-.347.54.54 0 0 1 .619-.697zm-13.505.484v-.875h-.38v.212c-.065-.083-.148-.15-.244-.194s-.2-.066-.306-.062c-.243 0-.476.096-.647.268s-.268.404-.268.647.096.476.268.647.404.268.647.268c.21.008.42-.1.55-.256v.212h.38v-.868zm-1.417 0c.02-.32.334-.558.65-.484a.54.54 0 0 1 .399.421c.056.315-.194.62-.518.623a.55.55 0 0 1-.535-.56h.004z',
					}),
					h('path', {
						d: 'M22.335 21.79c.017-.001.033.002.047.012.005.005.01.01.013.017s.004.014.003.02c-.005.023-.008.028-.013.032-.01.01-.024.015-.038.016l.052.06h-.04l-.048-.06h-.016v.06h-.034v-.158h.075zm-.04.03v.043h.04c.012 0 .023.002.023-.008v-.023c0-.01-.002-.013-.023-.012h-.04z',
					}),
				),
			),
		);
	};
	Object.defineProperty(t.prototype, 'host', {
		get: function () {
			return getElement(this);
		},
		enumerable: false,
		configurable: true,
	});
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return { iconWidth: ['validateWidth'] };
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioIconMastercard.style = ontarioIconCss$5;
var ontarioIconCss$4 =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
var OntarioIconNotification = (function () {
	function t(t) {
		registerInstance(this, t);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	t.prototype.validateWidth = function () {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-notification> ')
				.addRegularText(
					''.concat(
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number',
						'; only a positive number is allowed. The default size of',
					),
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	};
	t.prototype.validateColour = function () {
		var t = validateValueAgainstArray(this.colour, IconColours);
		if (t) {
			this.iconColourState = this.colour;
		} else {
			if (validateColor(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	};
	t.prototype.warnDefaultColour = function () {
		var t = new ConsoleMessageClass();
		t.addDesignSystemTag()
			.addMonospaceText(' colour ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-icon-notification> ')
			.addRegularText('was set to an invalid colour; only')
			.addMonospaceText(' black, blue, grey or white ')
			.addRegularText('are supported. The default colour')
			.addMonospaceText(' black ')
			.addRegularText('is assumed.')
			.printMessage();
		return 'black';
	};
	t.prototype.componentWillLoad = function () {
		this.validateColour();
		this.validateWidth();
	};
	t.prototype.render = function () {
		return h(
			'div',
			{
				class: 'ontario-icon ontario-icon--'
					.concat(this.iconColourState, ' ontario-icon--width-')
					.concat(this.iconWidthState),
				style: { width: ''.concat(this.iconWidthState, 'px') },
			},
			h(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: ''.concat(this.iconCustomColourState), stroke: ''.concat(this.iconCustomColourState) },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'notification',
				},
				h('path', {
					d: 'M21 19v1H3v-1l2-2v-6a6.99 6.99 0 0 1 5-6.71V4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.3A6.99 6.99 0 0 1 19 11v6l2 2zm-7 2a2 2 0 0 1-2 2 2 2 0 0 1-2-2',
				}),
			),
		);
	};
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioIconNotification.style = ontarioIconCss$4;
var ontarioIconCss$3 =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
var OntarioIconPrint = (function () {
	function t(t) {
		registerInstance(this, t);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	t.prototype.validateWidth = function () {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-print> ')
				.addRegularText(
					''.concat(
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number',
						'; only a positive number is allowed. The default size of',
					),
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	};
	t.prototype.validateColour = function () {
		var t = validateValueAgainstArray(this.colour, IconColours);
		if (t) {
			this.iconColourState = this.colour;
		} else {
			if (validateColor(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	};
	t.prototype.warnDefaultColour = function () {
		var t = new ConsoleMessageClass();
		t.addDesignSystemTag()
			.addMonospaceText(' colour ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-icon-print> ')
			.addRegularText('was set to an invalid colour; only')
			.addMonospaceText(' black, blue, grey or white ')
			.addRegularText('are supported. The default colour')
			.addMonospaceText(' black ')
			.addRegularText('is assumed.')
			.printMessage();
		return 'black';
	};
	t.prototype.componentWillLoad = function () {
		this.validateColour();
		this.validateWidth();
	};
	t.prototype.render = function () {
		return h(
			'div',
			{
				class: 'ontario-icon ontario-icon--'
					.concat(this.iconColourState, ' ontario-icon--width-')
					.concat(this.iconWidthState),
				style: { width: ''.concat(this.iconWidthState, 'px') },
			},
			h(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: ''.concat(this.iconCustomColourState), stroke: ''.concat(this.iconCustomColourState) },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'print',
				},
				h('path', {
					d: 'M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z',
				}),
			),
		);
	};
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioIconPrint.style = ontarioIconCss$3;
var ontarioIconCss$2 =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
var OntarioIconSentiment5 = (function () {
	function t(t) {
		registerInstance(this, t);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	t.prototype.validateWidth = function () {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-sentiment-5> ')
				.addRegularText(
					''.concat(
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number',
						'; only a positive number is allowed. The default size of',
					),
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	};
	t.prototype.validateColour = function () {
		var t = validateValueAgainstArray(this.colour, IconColours);
		if (t) {
			this.iconColourState = this.colour;
		} else {
			if (validateColor(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	};
	t.prototype.warnDefaultColour = function () {
		var t = new ConsoleMessageClass();
		t.addDesignSystemTag()
			.addMonospaceText(' colour ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-icon-sentiment-5> ')
			.addRegularText('was set to an invalid colour; only')
			.addMonospaceText(' black, blue, grey or white ')
			.addRegularText('are supported. The default colour')
			.addMonospaceText(' black ')
			.addRegularText('is assumed.')
			.printMessage();
		return 'black';
	};
	t.prototype.componentWillLoad = function () {
		this.validateColour();
		this.validateWidth();
	};
	t.prototype.render = function () {
		return h(
			'div',
			{
				class: 'ontario-icon ontario-icon--'
					.concat(this.iconColourState, ' ontario-icon--width-')
					.concat(this.iconWidthState),
				style: { width: ''.concat(this.iconWidthState, 'px') },
			},
			h(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: ''.concat(this.iconCustomColourState), stroke: ''.concat(this.iconCustomColourState) },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'sentiment-5',
				},
				h('path', {
					d: 'M12 2a10 10 0 1 0 0 20 10.01 10.01 0 0 0 10-10A10.01 10.01 0 0 0 11.99 2zm0 18a8 8 0 1 1 0-16 8 8 0 1 1 0 16zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7zm8.5-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 1 0 0 3zm-7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 1 0 0 3z',
				}),
			),
		);
	};
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioIconSentiment5.style = ontarioIconCss$2;
var ontarioIconCss$1 =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
var OntarioIconTextMessage = (function () {
	function t(t) {
		registerInstance(this, t);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	t.prototype.validateWidth = function () {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-text-message> ')
				.addRegularText(
					''.concat(
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number',
						'; only a positive number is allowed. The default size of',
					),
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	};
	t.prototype.validateColour = function () {
		var t = validateValueAgainstArray(this.colour, IconColours);
		if (t) {
			this.iconColourState = this.colour;
		} else {
			if (validateColor(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	};
	t.prototype.warnDefaultColour = function () {
		var t = new ConsoleMessageClass();
		t.addDesignSystemTag()
			.addMonospaceText(' colour ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-icon-text-message> ')
			.addRegularText('was set to an invalid colour; only')
			.addMonospaceText(' black, blue, grey or white ')
			.addRegularText('are supported. The default colour')
			.addMonospaceText(' black ')
			.addRegularText('is assumed.')
			.printMessage();
		return 'black';
	};
	t.prototype.componentWillLoad = function () {
		this.validateColour();
		this.validateWidth();
	};
	t.prototype.render = function () {
		return h(
			'div',
			{
				class: 'ontario-icon ontario-icon--'
					.concat(this.iconColourState, ' ontario-icon--width-')
					.concat(this.iconWidthState),
				style: { width: ''.concat(this.iconWidthState, 'px') },
			},
			h(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: ''.concat(this.iconCustomColourState), stroke: ''.concat(this.iconCustomColourState) },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'text-message',
				},
				h('path', {
					d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z',
				}),
			),
		);
	};
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioIconTextMessage.style = ontarioIconCss$1;
var ontarioIconCss =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
var OntarioIconTransportBus = (function () {
	function t(t) {
		registerInstance(this, t);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	t.prototype.validateWidth = function () {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-transport-bus> ')
				.addRegularText(
					''.concat(
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number',
						'; only a positive number is allowed. The default size of',
					),
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	};
	t.prototype.validateColour = function () {
		var t = validateValueAgainstArray(this.colour, IconColours);
		if (t) {
			this.iconColourState = this.colour;
		} else {
			if (validateColor(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	};
	t.prototype.warnDefaultColour = function () {
		var t = new ConsoleMessageClass();
		t.addDesignSystemTag()
			.addMonospaceText(' colour ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-icon-transport-bus> ')
			.addRegularText('was set to an invalid colour; only')
			.addMonospaceText(' black, blue, grey or white ')
			.addRegularText('are supported. The default colour')
			.addMonospaceText(' black ')
			.addRegularText('is assumed.')
			.printMessage();
		return 'black';
	};
	t.prototype.componentWillLoad = function () {
		this.validateColour();
		this.validateWidth();
	};
	t.prototype.render = function () {
		return h(
			'div',
			{
				class: 'ontario-icon ontario-icon--'
					.concat(this.iconColourState, ' ontario-icon--width-')
					.concat(this.iconWidthState),
				style: { width: ''.concat(this.iconWidthState, 'px') },
			},
			h(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: ''.concat(this.iconCustomColourState), stroke: ''.concat(this.iconCustomColourState) },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'transport-bus',
				},
				h('path', {
					d: 'M4 16c0 .88.4 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.6-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 1 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 1 1 0 3zm1.5-6H6V6h12v5z',
				}),
			),
		);
	};
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioIconTransportBus.style = ontarioIconCss;
var ontarioInputCss =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1>.ontario-label--heading,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1>.ontario-label--heading,h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1>.ontario-label--heading,h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}.ontario-input:focus,.ontario-input:active{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;font-size:inherit;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-label{cursor:pointer;color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;line-height:1.5;margin:0 0 1rem 0;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-label{font-size:1.125rem;line-height:1.56}}.ontario-label--large{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2;max-width:26.25em}@media screen and (max-width: 40em){.ontario-label--large{font-size:1.4375rem;line-height:1.39}}h1>.ontario-label--heading{display:inline-block;margin:0}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;width:100%;padding:0.625rem 1rem;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;padding:0.625rem 1rem;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out;width:100%}.ontario-input-hint-expander--true{margin-bottom:1rem}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}';
var OntarioInput = (function () {
	function t(t) {
		var o = this;
		registerInstance(this, t);
		this.inputOnChange = createEvent(this, 'inputOnChange', 7);
		this.inputOnBlur = createEvent(this, 'inputOnBlur', 7);
		this.inputOnFocus = createEvent(this, 'inputOnFocus', 7);
		this.handleEvent = function (t, e) {
			var i = t.target;
			handleInputEvent(
				t,
				e,
				i,
				o.inputOnChange,
				o.inputOnFocus,
				o.inputOnBlur,
				'input',
				o.customOnChange,
				o.customOnFocus,
				o.customOnBlur,
			);
		};
		this.caption = undefined;
		this.elementId = undefined;
		this.inputWidth = 'default';
		this.name = undefined;
		this.hintText = undefined;
		this.required = false;
		this.type = 'text';
		this.value = undefined;
		this.language = 'en';
		this.hintExpander = undefined;
		this.hintTextId = undefined;
		this.customOnChange = undefined;
		this.customOnBlur = undefined;
		this.customOnFocus = undefined;
		this.internalHintText = undefined;
		this.internalHintExpander = undefined;
		this.captionState = undefined;
	}
	t.prototype.handleSetAppLanguage = function (t) {
		this.language = validateLanguage(t);
	};
	t.prototype.handleHeaderLanguageToggled = function (t) {
		this.language = validateLanguage(t);
	};
	t.prototype.validateName = function (t) {
		if (validatePropExists(t)) {
			var o = new ConsoleMessageClass();
			o.addDesignSystemTag()
				.addMonospaceText(' name ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-input> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	};
	t.prototype.parseHintText = function () {
		if (this.hintText) {
			var t = constructHintTextObject(this.hintText);
			this.internalHintText = t;
		}
	};
	t.prototype.parseHintExpander = function () {
		var t = this.hintExpander;
		if (t) {
			if (typeof t === 'string') this.internalHintExpander = JSON.parse(t);
			else this.internalHintExpander = t;
		}
	};
	t.prototype.updateCaptionState = function (t) {
		this.captionState = new InputCaption(this.element.tagName, t, translations, this.language, false, this.required);
	};
	t.prototype.updateLanguage = function () {
		this.updateCaptionState(this.caption);
	};
	t.prototype.getId = function () {
		var t;
		return (t = this.elementId) !== null && t !== void 0 ? t : '';
	};
	t.prototype.getValue = function () {
		var t;
		return (t = this.value) !== null && t !== void 0 ? t : '';
	};
	t.prototype.getClass = function () {
		if (this.hintExpander) {
			return this.inputWidth === 'default'
				? 'ontario-input ontario-input-hint-expander--true'
				: 'ontario-input ontario-input--'.concat(this.inputWidth, ' ontario-input-hint-expander--true');
		} else {
			return this.inputWidth === 'default' ? 'ontario-input' : 'ontario-input ontario-input--'.concat(this.inputWidth);
		}
	};
	t.prototype.componentDidLoad = function () {
		return __awaiter(this, void 0, void 0, function () {
			var t, o;
			return __generator(this, function (e) {
				switch (e.label) {
					case 0:
						o = this;
						return [4, (t = this.hintTextRef) === null || t === void 0 ? void 0 : t.getHintTextId()];
					case 1:
						o.hintTextId = e.sent();
						return [2];
				}
			});
		});
	};
	t.prototype.componentWillLoad = function () {
		var t;
		this.updateCaptionState(this.caption);
		this.elementId = (t = this.elementId) !== null && t !== void 0 ? t : v4();
		this.parseHintText();
		this.parseHintExpander();
		this.validateName(this.name);
		this.language = validateLanguage(this.language);
	};
	t.prototype.render = function () {
		var t = this;
		return h(
			'div',
			{ class: 'ontario-form-group' },
			this.captionState.getCaption(this.getId(), !!this.internalHintExpander),
			this.internalHintText &&
				h('ontario-hint-text', {
					hint: this.internalHintText.hint,
					hintContentType: this.internalHintText.hintContentType,
					ref: function (o) {
						return (t.hintTextRef = o);
					},
				}),
			h(Input, {
				'aria-describedBy': this.hintTextId,
				'className': this.getClass(),
				'id': this.getId(),
				'name': this.name,
				'onInput': function (o) {
					return t.handleEvent(o, EventType.Change);
				},
				'onBlur': function (o) {
					return t.handleEvent(o, EventType.Blur);
				},
				'onFocus': function (o) {
					return t.handleEvent(o, EventType.Focus);
				},
				'type': this.type,
				'value': this.getValue(),
				'required': !!this.required,
			}),
			this.internalHintExpander &&
				h('ontario-hint-expander', {
					hint: this.internalHintExpander.hint,
					content: this.internalHintExpander.content,
					hintContentType: this.internalHintExpander.hintContentType,
				}),
		);
	};
	Object.defineProperty(t.prototype, 'element', {
		get: function () {
			return getElement(this);
		},
		enumerable: false,
		configurable: true,
	});
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return {
				name: ['validateName'],
				hintText: ['parseHintText'],
				hintExpander: ['parseHintExpander'],
				caption: ['updateCaptionState'],
				language: ['updateLanguage'],
			};
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioInput.style = ontarioInputCss;
var ontarioLanguageToggleCss =
	'.ontario-language-toggler:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-language-toggler{background-color:#1a1a1a;border:none;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;color:#FFFFFF;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;height:48px;line-height:1.5555555556;text-align:center;text-decoration:none}.ontario-language-toggler:hover{background-color:#4d4d4d}.ontario-language-toggler:active{background-color:#666666;color:#FFFFFF}.ontario-language-toggler:focus{background-color:#4d4d4d;color:#FFFFFF}.ontario-language-toggler:visited{color:#FFFFFF}.ontario-language-toggler abbr[title]{text-decoration:none}.ontario-language-toggler--default{padding:0.75rem}.ontario-language-toggler--small{font-size:1rem;line-height:1.375rem;height:auto;outline:none;padding:0.5rem 0.75rem}';
var OntarioLanguageToggle = (function () {
	function t(t) {
		registerInstance(this, t);
		this.setAppLanguage = createEvent(this, 'setAppLanguage', 7);
		this.headerLanguageToggled = createEvent(this, 'headerLanguageToggled', 7);
		this.updateHTMLLang = function (t) {
			var o = document.firstElementChild;
			if ((o === null || o === void 0 ? void 0 : o.tagName.toLowerCase()) === 'html') {
				if (t) {
					o.setAttribute('lang', t);
				} else {
					o.setAttribute('lang', 'en');
				}
			}
			return;
		};
		this.language = undefined;
		this.size = 'default';
		this.url = undefined;
		this.customLanguageToggle = undefined;
		this.translations = translations;
	}
	t.prototype.setAppLanguageHandler = function () {
		var t;
		if (this.language) {
			t = this.language;
		} else if (document.documentElement.lang) {
			t = document.documentElement.lang;
		} else {
			t = 'en';
		}
		this.language = t;
		this.setAppLanguage.emit(t);
		this.updateHTMLLang(t);
	};
	t.prototype.handleHeaderLanguageToggled = function (t, o) {
		var e = t === 'en' ? 'fr' : 'en';
		this.language = e;
		this.headerLanguageToggled.emit(e);
		this.updateHTMLLang(e);
		if (this.customLanguageToggle) {
			this.customLanguageToggle(o);
		}
	};
	t.prototype.updateLanguage = function () {
		this.language = validateLanguage(this.language);
		this.setAppLanguageHandler();
	};
	t.prototype.connectedCallback = function () {
		this.updateLanguage();
	};
	t.prototype.render = function () {
		var t = this;
		var o = this.language === 'en' ? 'Français' : 'English';
		var e = this.language === 'en' ? 'FR' : 'EN';
		return h(
			'a',
			{
				'class':
					this.size === 'default'
						? 'ontario-language-toggler ontario-language-toggler--default'
						: 'ontario-language-toggler ontario-language-toggler--small',
				'href': this.url ? this.url : '#',
				'aria-label': this.translations.languageToggle.ariaLabel[''.concat(this.language)],
				'onClick': function (o) {
					return t.handleHeaderLanguageToggled(t.language, o);
				},
			},
			this.size === 'small'
				? h('span', null, o)
				: h(
						Fragment,
						null,
						h('abbr', { title: o, class: 'ontario-show-for-small-only' }, e),
						h('span', { class: 'ontario-show-for-medium' }, o),
				  ),
		);
	};
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return { language: ['updateLanguage'] };
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioLanguageToggle.style = ontarioLanguageToggleCss;
var ontarioLoadingIndicatorCss =
	'.ontario-loading-indicator__overlay,.ontario-loading-indicator__overlay--within-container{position:fixed;width:100%;left:0;right:0;top:0;bottom:0;background-color:rgba(255, 255, 255, 0.7);z-index:9999}.ontario-loading-indicator__overlay[aria-hidden=false],.ontario-loading-indicator__overlay--within-container[aria-hidden=false]{display:block}.ontario-loading-indicator__overlay[aria-hidden=true],.ontario-loading-indicator__overlay--within-container[aria-hidden=true]{display:none}.ontario-loading-indicator__overlay--within-container{position:absolute}.ontario-loading-indicator{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:100%;height:100%}.ontario-loading-indicator p{color:#4d4d4d;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;line-height:1.5;font-weight:700;word-spacing:0.025rem;margin:0.75rem 0 0}.ontario-loading-indicator__spinner{-webkit-animation:rotator 1.5s linear infinite;animation:rotator 1.5s linear infinite;width:3rem;height:3rem;overflow:visible}.ontario-loading-indicator__spinner circle{stroke-dasharray:1, 200;stroke-dashoffset:0;stroke-linecap:round;stroke:#4d4d4d;-webkit-animation:dash 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite}@-webkit-keyframes rotator{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotator{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1, 200;stroke-dashoffset:0}50%{stroke-dasharray:89, 200;stroke-dashoffset:-35px}100%{stroke-dasharray:89, 200;stroke-dashoffset:-124px}}@keyframes dash{0%{stroke-dasharray:1, 200;stroke-dashoffset:0}50%{stroke-dasharray:89, 200;stroke-dashoffset:-35px}100%{stroke-dasharray:89, 200;stroke-dashoffset:-124px}}';
var OntarioLoadingIndicator = (function () {
	function t(t) {
		registerInstance(this, t);
		this.type = 'large';
		this.isLoading = false;
		this.message = undefined;
		this.fullScreenOverlay = true;
		this.language = 'en';
		this.translations = translations;
		this.isLoadingState = undefined;
		this.typeState = undefined;
	}
	t.prototype.handleSetAppLanguage = function (t) {
		this.language = validateLanguage(t);
	};
	t.prototype.handleHeaderLanguageToggled = function (t) {
		this.language = validateLanguage(t);
	};
	t.prototype.validateType = function () {
		var t = validateValueAgainstArray(this.type, ['large', 'small']);
		if (t) {
			return (this.typeState = this.type);
		} else {
			this.warnDefaultType();
			return (this.typeState = 'large');
		}
	};
	t.prototype.warnDefaultType = function () {
		var t = new ConsoleMessageClass();
		t.addDesignSystemTag()
			.addMonospaceText(' type ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-loading-indicator> ')
			.addRegularText('was set to an invalid type; only')
			.addMonospaceText(' large or small ')
			.addRegularText('are supported. The default type')
			.addMonospaceText(' large ')
			.addRegularText('is assumed.')
			.printMessage();
	};
	t.prototype.componentWillLoad = function () {
		this.language = validateLanguage(this.language);
		this.validateType();
		this.isLoadingState = this.isLoading;
	};
	t.prototype.render = function () {
		var t;
		return this.typeState === 'large'
			? h(
					'div',
					{
						'class': this.fullScreenOverlay
							? 'ontario-loading-indicator__overlay'
							: 'ontario-loading-indicator__overlay--within-container',
						'aria-hidden': this.isLoadingState ? 'false' : 'true',
						'role': 'alert',
						'aria-live': 'assertive',
					},
					h(
						'div',
						{ class: 'ontario-loading-indicator' },
						h(
							'svg',
							{
								class: 'ontario-loading-indicator__spinner',
								viewBox: '25 25 50 50',
								xmlns: 'http://www.w3.org/2000/svg',
							},
							h('circle', { 'cx': '50', 'cy': '50', 'r': '20', 'fill': 'none', 'stroke-width': '4' }),
						),
						h(
							'p',
							null,
							(t = this.message) !== null && t !== void 0 ? t : this.translations.loading[''.concat(this.language)],
						),
					),
			  )
			: h('p', null, 'The small loading indicator is still under development.');
	};
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return { type: ['validateType'] };
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioLoadingIndicator.style = ontarioLoadingIndicatorCss;
var ontarioPageAlertCss =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-alert{border-width:0 0 0 0.25rem;border-style:solid;padding:1.5rem;margin:2rem 0 2.5rem 0}.ontario-alert__header{display:-webkit-box;display:-ms-flexbox;display:flex}.ontario-alert__header-icon{display:inline-block;vertical-align:top;margin-right:0.95rem}.ontario-alert__header-title{margin-bottom:0.75rem;padding-top:0.125rem}.ontario-alert__body{margin-left:3.25rem;max-width:48rem}@media screen and (max-width: 40em){.ontario-alert__body{margin-left:0}}.ontario-alert__body p{margin-top:0}.ontario-alert__body p:last-of-type{margin-bottom:0.5rem}.ontario-alert__body p:last-of-type+ul{margin-top:1rem}.ontario-alert__body ul:last-of-type{margin-bottom:0.5rem}.ontario-alert--error ul{margin-left:1.25rem}.ontario-alert--error ul:last-of-type{margin-bottom:0.5rem}.ontario-alert--informational{border-color:#1080A6;background-color:#E2F0F4}.ontario-alert--warning{border-color:#FFD440;background-color:#FEF6DC}.ontario-alert--success{border-color:#118847;background-color:#E5f0E9}.ontario-alert--error{border-color:#CD0000;background-color:#FCEFF0}.ontario-alert--error a{color:#CD0000}.ontario-alert--error a:hover,.ontario-alert--error a:focus{color:#6b0000}.ontario-alert--error a:active{color:#280000}';
var OntarioPageAlert = (function () {
	function t(t) {
		registerInstance(this, t);
		this.type = 'informational';
		this.heading = undefined;
		this.content = undefined;
	}
	t.prototype.getClass = function () {
		return 'ontario-alert ontario-alert--'.concat(this.type);
	};
	t.prototype.renderIcon = function () {
		var t = { 'icon-width': 36 };
		switch (this.type) {
			case 'informational':
				return h('ontario-icon-alert-information', Object.assign({}, t));
			case 'success':
				return h('ontario-icon-alert-success', Object.assign({}, t));
			case 'warning':
				return h('ontario-icon-alert-warning', Object.assign({}, t));
			case 'error':
				return h('ontario-icon-alert-error', Object.assign({}, t));
		}
	};
	t.prototype.renderContent = function () {
		var t = this.content;
		if (typeof t === 'string') {
			return h('p', null, t);
		}
		return h('slot', null);
	};
	t.prototype.render = function () {
		return h(
			'div',
			{ class: this.getClass() },
			h(
				'div',
				{ class: 'ontario-alert__header' },
				h('div', { class: 'ontario-alert__header-icon' }, this.renderIcon()),
				h('h2', { class: 'ontario-alert__header-title ontario-h4' }, this.heading),
			),
			h('div', { class: 'ontario-alert__body' }, this.renderContent()),
		);
	};
	return t;
})();
OntarioPageAlert.style = ontarioPageAlertCss;
var ontarioRadioButtonsCss =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}.ontario-radios__input:focus+.ontario-radios__label:before{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;font-size:inherit;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-radios__item{position:relative;display:block;margin:0 0 1rem;padding:0 2rem 0}.ontario-radios__input{cursor:pointer;margin:0;position:absolute;opacity:0;top:-2px;left:-2px;width:36px;height:36px;z-index:0}@media screen and (max-width: 40em){.ontario-radios__input{width:40px;height:40px;top:-1.5px;left:-1.5px}}.ontario-radios__label{cursor:pointer;color:#1a1a1a;display:inline-block;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:700;line-height:1.5;margin:0.2rem 0;max-width:38.75em;padding:0 0.75rem;-ms-touch-action:manipulation;touch-action:manipulation;white-space:normal;width:auto;white-space:normal}@media screen and (max-width: 40em){.ontario-radios__label{margin:0.3rem 0;padding:0 1rem}}.ontario-radios__label:before{content:"";border:2px solid #1a1a1a;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;top:0;left:0;width:32px;height:32px;-webkit-transition:border 0.1s ease-in-out;transition:border 0.1s ease-in-out}@media screen and (max-width: 40em){.ontario-radios__label:before{width:36px;height:36px}}.ontario-radios__label:after{content:"";border-radius:50%;border:10px solid #1a1a1a;position:absolute;top:0;left:0;-webkit-transform:translate(6px, 6px);transform:translate(6px, 6px);opacity:0}@media screen and (max-width: 40em){.ontario-radios__label:after{border:12px solid #1a1a1a}}.ontario-radios__input:focus+.ontario-radios__label:before{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:#009ADB}.ontario-radios__input:checked+.ontario-radios__label:after{opacity:1}.ontario-radios__hint-expander{margin:0.75rem 0 0 0.5rem}@media screen and (max-width: 40em){.ontario-radios__hint-expander{margin-top:1rem}}';
var OntarioRadioButtons = (function () {
	function t(t) {
		var o = this;
		registerInstance(this, t);
		this.radioOnChange = createEvent(this, 'radioOnChange', 7);
		this.radioOnBlur = createEvent(this, 'radioOnBlur', 7);
		this.radioOnFocus = createEvent(this, 'radioOnFocus', 7);
		this.handleEvent = function (t, e) {
			var i;
			var a = t.target;
			if (a) {
				a.checked = (i = a.checked) !== null && i !== void 0 ? i : '';
			}
			handleInputEvent(
				t,
				e,
				a,
				o.radioOnChange,
				o.radioOnFocus,
				o.radioOnBlur,
				'radio',
				o.customOnChange,
				o.customOnFocus,
				o.customOnBlur,
			);
		};
		this.caption = undefined;
		this.language = 'en';
		this.name = undefined;
		this.hintText = undefined;
		this.hintExpander = undefined;
		this.required = false;
		this.options = undefined;
		this.customOnChange = undefined;
		this.customOnBlur = undefined;
		this.customOnFocus = undefined;
		this.hintTextId = undefined;
		this.internalHintText = undefined;
		this.internalHintExpander = undefined;
		this.internalOptions = undefined;
		this.captionState = undefined;
	}
	t.prototype.handleSetAppLanguage = function (t) {
		this.language = validateLanguage(t);
	};
	t.prototype.handleHeaderLanguageToggled = function (t) {
		this.language = validateLanguage(t);
	};
	t.prototype.parseHintText = function () {
		if (this.hintText) {
			var t = constructHintTextObject(this.hintText);
			this.internalHintText = t;
		}
	};
	t.prototype.parseHintExpander = function () {
		var t = this.hintExpander;
		if (t) {
			if (typeof t === 'string') this.internalHintExpander = JSON.parse(t);
			else this.internalHintExpander = t;
		}
	};
	t.prototype.parseOptions = function () {
		if (typeof this.options !== 'undefined') {
			if (!Array.isArray(this.options)) {
				this.internalOptions = JSON.parse(this.options);
			} else {
				this.internalOptions = this.options;
			}
		}
	};
	t.prototype.validateName = function (t) {
		if (validatePropExists(t)) {
			var o = new ConsoleMessageClass();
			o.addDesignSystemTag()
				.addMonospaceText(' name ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-radio-buttons> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	};
	t.prototype.validateOptions = function (t) {
		if (validateObjectExists(t)) {
			var o = new ConsoleMessageClass();
			o.addDesignSystemTag()
				.addMonospaceText(' options ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-radio-buttons> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	};
	t.prototype.updateCaptionState = function (t) {
		this.captionState = new InputCaption(this.element.tagName, t, translations, this.language, true, this.required);
	};
	t.prototype.updateLanguage = function () {
		this.updateCaptionState(this.caption);
	};
	t.prototype.componentDidLoad = function () {
		return __awaiter(this, void 0, void 0, function () {
			var t, o;
			return __generator(this, function (e) {
				switch (e.label) {
					case 0:
						o = this;
						return [4, (t = this.hintTextRef) === null || t === void 0 ? void 0 : t.getHintTextId()];
					case 1:
						o.hintTextId = e.sent();
						return [2];
				}
			});
		});
	};
	t.prototype.componentWillLoad = function () {
		this.updateCaptionState(this.caption);
		this.parseOptions();
		this.parseHintText();
		this.parseHintExpander();
		this.validateName(this.name);
		this.validateOptions(this.internalOptions);
		this.language = validateLanguage(this.language);
	};
	t.prototype.render = function () {
		var t = this;
		var o;
		return h(
			'div',
			{ class: 'ontario-form-group' },
			h(
				'fieldset',
				{ 'class': 'ontario-fieldset', 'aria-describedby': this.hintTextId },
				this.captionState.getCaption(undefined, !!this.internalHintExpander),
				this.internalHintText &&
					h('ontario-hint-text', {
						hint: this.internalHintText.hint,
						hintContentType: this.internalHintText.hintContentType,
						ref: function (o) {
							return (t.hintTextRef = o);
						},
					}),
				h(
					'div',
					{ class: 'ontario-radios' },
					(o = this.internalOptions) === null || o === void 0
						? void 0
						: o.map(function (o) {
								return h(
									'div',
									{ class: 'ontario-radios__item' },
									h(Input, {
										className: 'ontario-radios__input',
										id: o.elementId,
										name: t.name,
										type: 'radio',
										value: o.value,
										required: !!t.required,
										onChange: function (o) {
											return t.handleEvent(o, EventType.Change);
										},
										onBlur: function (o) {
											return t.handleEvent(o, EventType.Blur);
										},
										onFocus: function (o) {
											return t.handleEvent(o, EventType.Focus);
										},
									}),
									h(
										'label',
										{ class: 'ontario-radios__label', htmlFor: o.elementId },
										o.label,
										o.hintExpander && t.captionState.getHintExpanderAccessibilityText(o.label, true),
									),
									h(
										'div',
										{ class: 'ontario-radios__hint-expander' },
										o.hintExpander &&
											h('ontario-hint-expander', {
												'hint': o.hintExpander.hint,
												'content': o.hintExpander.content,
												'hintContentType': o.hintExpander.hintContentType,
												'input-exists': true,
											}),
									),
								);
						  }),
					this.internalHintExpander &&
						h('ontario-hint-expander', {
							'hint': this.internalHintExpander.hint,
							'content': this.internalHintExpander.content,
							'hintContentType': this.internalHintExpander.hintContentType,
							'input-exists': true,
						}),
				),
			),
		);
	};
	Object.defineProperty(t.prototype, 'element', {
		get: function () {
			return getElement(this);
		},
		enumerable: false,
		configurable: true,
	});
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return {
				hintText: ['parseHintText'],
				hintExpander: ['parseHintExpander'],
				options: ['parseOptions', 'validateOptions'],
				name: ['validateName'],
				caption: ['updateCaptionState'],
				language: ['updateLanguage'],
			};
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioRadioButtons.style = ontarioRadioButtonsCss;
var ontarioStepIndicatorCss =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-button:focus,.ontario-button:active{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button{border:none;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;display:inline-block;font-size:1.125rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:600;line-height:1.5555555556;margin:0 1.75rem 1.5rem 0;min-width:10rem;padding:0.625rem 1.5rem;text-align:center;text-decoration:none;cursor:pointer}@media screen and (max-width: 40em){.ontario-button{margin-right:0;display:block;width:100%}}.ontario-button .ontario-icon{margin-right:4px}.ontario-button--primary{background-color:#0066CC;color:#FFFFFF}.ontario-button--primary:hover{background-color:#00478F;color:#FFFFFF}.ontario-button--primary:focus{background-color:#00478F;color:#FFFFFF;-webkit-transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--primary:active{background-color:#002142;color:#FFFFFF;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--primary:visited{color:#FFFFFF}.ontario-button--secondary{background-color:#FFFFFF;border:2px solid #0066CC;color:#0066CC;padding-top:0.5rem;padding-bottom:0.5rem}.ontario-button--secondary:hover{background-color:#e0f0ff;border-color:#00478F;color:#00478F}.ontario-button--secondary:focus{background-color:#e0f0ff;border-color:#00478F;color:#00478F;-webkit-transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--secondary:active{background-color:#c2e0ff;border-color:#002142;color:#002142;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--secondary:visited{color:#0066CC}.ontario-button--tertiary{background-color:transparent;color:#0066CC;text-decoration:underline}.ontario-button--tertiary:hover{background-color:#e8e8e8;color:#00478F;text-decoration:underline}.ontario-button--tertiary:focus{background-color:#e8e8e8;color:#00478F;text-decoration:underline;-webkit-transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--tertiary:active{background-color:#d1d1d1;color:#002142;text-decoration:underline;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--tertiary:visited{color:#0066CC}.ontario-button--internalThemeDark{background-color:#1a1a1a;border:2px solid #FFFFFF;color:#FFFFFF}.ontario-button--internalThemeDark:hover{background-color:#4d4d4d}.ontario-button--internalThemeDark:focus{background-color:#4d4d4d;-webkit-transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--internalThemeDark:active{background-color:#4d4d4d;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--internalThemeDark:visited{color:#0066CC}.ontario-step-indicator .ontario-step-indicator--with-back-button--false,.ontario-step-indicator .ontario-step-indicator--with-back-button--true{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.ontario-step-indicator .ontario-step-indicator--with-back-button--false{-ms-flex-pack:end;justify-content:flex-end}.ontario-step-indicator .ontario-h4{margin:1.125rem 0}@media screen and (max-width: 40em){.ontario-step-indicator .ontario-h4{margin:1rem 0;text-align:right}}.ontario-step-indicator .ontario-button.ontario-button--tertiary{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:0.75rem 0;padding-left:0.5rem;padding-right:1rem;min-width:3rem}@media screen and (max-width: 40em){.ontario-step-indicator .ontario-button.ontario-button--tertiary{width:unset}}.ontario-step-indicator .ontario-button.ontario-button--tertiary .ontario-icon{margin:0 0.375rem 0 0;padding:0;min-width:24px;min-height:24px}.ontario-step-indicator hr{padding:0;margin:0}';
var OntarioStepIndicator = (function () {
	function t(t) {
		registerInstance(this, t);
		this.showBackButton = false;
		this.backButtonUrl = undefined;
		this.currentStep = undefined;
		this.numberOfSteps = undefined;
		this.percentageComplete = undefined;
		this.customOnClick = undefined;
		this.language = 'en';
		this.translations = translations;
	}
	t.prototype.handleSetAppLanguage = function (t) {
		this.language = validateLanguage(t);
	};
	t.prototype.handleHeaderLanguageToggled = function (t) {
		this.language = validateLanguage(t);
	};
	t.prototype.componentWillLoad = function () {
		this.language = validateLanguage(this.language);
	};
	t.prototype.render = function () {
		var t = this;
		return h(
			'div',
			{ class: 'ontario-step-indicator' },
			h(
				'div',
				{ class: 'ontario-row' },
				h(
					'div',
					{ class: 'ontario-columns ontario-small-12' },
					h(
						'div',
						{ class: 'ontario-step-indicator--with-back-button--'.concat(this.showBackButton) },
						this.showBackButton === true &&
							this.customOnClick &&
							!this.backButtonUrl &&
							h(
								'button',
								{
									class: 'ontario-button ontario-button--tertiary',
									onClick: function (o) {
										return t.customOnClick && t.customOnClick(o);
									},
								},
								h('ontario-icon-chevron-left', { colour: 'blue' }),
								this.translations.stepIndicator.back[''.concat(this.language)],
							),
						this.showBackButton === true &&
							!this.customOnClick &&
							this.backButtonUrl &&
							h(
								'a',
								{ class: 'ontario-button ontario-button--tertiary', href: this.backButtonUrl },
								h('ontario-icon-chevron-left', { colour: 'blue' }),
								this.translations.stepIndicator.back[''.concat(this.language)],
							),
						this.percentageComplete
							? h(
									'span',
									{ class: 'ontario-h4' },
									this.percentageComplete,
									' % ',
									this.translations.stepIndicator.complete[''.concat(this.language)],
							  )
							: h(
									'span',
									{ class: 'ontario-h4' },
									this.translations.stepIndicator.step[''.concat(this.language)],
									'  ',
									this.currentStep,
									' ',
									this.translations.stepIndicator.of[''.concat(this.language)],
									'  ',
									this.numberOfSteps,
							  ),
					),
					h('hr', null),
				),
			),
		);
	};
	Object.defineProperty(t.prototype, 'host', {
		get: function () {
			return getElement(this);
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioStepIndicator.style = ontarioStepIndicatorCss;
var ontarioTextareaCss =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1>.ontario-label--heading,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1>.ontario-label--heading,h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1>.ontario-label--heading,h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}.ontario-textarea:focus,.ontario-textarea:active,.ontario-input:focus,.ontario-input:active{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;font-size:inherit;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-label{cursor:pointer;color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;line-height:1.5;margin:0 0 1rem 0;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-label{font-size:1.125rem;line-height:1.56}}.ontario-label--large{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2;max-width:26.25em}@media screen and (max-width: 40em){.ontario-label--large{font-size:1.4375rem;line-height:1.39}}h1>.ontario-label--heading{display:inline-block;margin:0}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;width:100%;padding:0.625rem 1rem;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-textarea{border:2px solid #1a1a1a;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#1a1a1a;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;display:block;max-width:48rem;min-height:144px;margin:0 0 2.5rem;padding:0.625rem 1rem;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out;white-space:pre-wrap;width:100%}.ontario-textarea.ontario-textarea-hint-expander--true{margin-bottom:1rem}';
var OntarioTextarea = (function () {
	function t(t) {
		var o = this;
		registerInstance(this, t);
		this.inputOnChange = createEvent(this, 'inputOnChange', 7);
		this.inputOnBlur = createEvent(this, 'inputOnBlur', 7);
		this.inputOnFocus = createEvent(this, 'inputOnFocus', 7);
		this.handleEvent = function (t, e) {
			var i = t.target;
			handleInputEvent(
				t,
				e,
				i,
				o.inputOnChange,
				o.inputOnFocus,
				o.inputOnBlur,
				'input',
				o.customOnChange,
				o.customOnFocus,
				o.customOnBlur,
			);
		};
		this.caption = undefined;
		this.name = undefined;
		this.elementId = undefined;
		this.required = false;
		this.value = undefined;
		this.hintText = undefined;
		this.hintExpander = undefined;
		this.language = 'en';
		this.customOnChange = undefined;
		this.customOnBlur = undefined;
		this.customOnFocus = undefined;
		this.hintTextId = undefined;
		this.internalHintText = undefined;
		this.internalHintExpander = undefined;
		this.captionState = undefined;
	}
	t.prototype.handleSetAppLanguage = function (t) {
		this.language = validateLanguage(t);
	};
	t.prototype.handleHeaderLanguageToggled = function (t) {
		this.language = validateLanguage(t);
	};
	t.prototype.parseHintText = function () {
		if (this.hintText) {
			var t = constructHintTextObject(this.hintText);
			this.internalHintText = t;
		}
	};
	t.prototype.parseHintExpander = function () {
		var t = this.hintExpander;
		if (t) {
			if (typeof t === 'string') this.internalHintExpander = JSON.parse(t);
			else this.internalHintExpander = t;
		}
	};
	t.prototype.validateName = function (t) {
		if (validatePropExists(t)) {
			var o = new ConsoleMessageClass();
			o.addDesignSystemTag()
				.addMonospaceText(' name ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-textarea> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	};
	t.prototype.updateCaptionState = function (t) {
		this.captionState = new InputCaption(this.element.tagName, t, translations, this.language, false, this.required);
	};
	t.prototype.updateLanguage = function () {
		this.updateCaptionState(this.caption);
	};
	t.prototype.getId = function () {
		var t;
		return (t = this.elementId) !== null && t !== void 0 ? t : '';
	};
	t.prototype.getValue = function () {
		var t;
		return (t = this.value) !== null && t !== void 0 ? t : '';
	};
	t.prototype.getClass = function () {
		return this.hintExpander ? 'ontario-textarea ontario-textarea-hint-expander--true' : 'ontario-textarea';
	};
	t.prototype.componentDidLoad = function () {
		return __awaiter(this, void 0, void 0, function () {
			var t, o;
			return __generator(this, function (e) {
				switch (e.label) {
					case 0:
						o = this;
						return [4, (t = this.hintTextRef) === null || t === void 0 ? void 0 : t.getHintTextId()];
					case 1:
						o.hintTextId = e.sent();
						return [2];
				}
			});
		});
	};
	t.prototype.componentWillLoad = function () {
		var t;
		this.updateCaptionState(this.caption);
		this.elementId = (t = this.elementId) !== null && t !== void 0 ? t : v4();
		this.parseHintText();
		this.parseHintExpander();
		this.validateName(this.name);
		this.language = validateLanguage(this.language);
	};
	t.prototype.render = function () {
		var t = this;
		return h(
			'div',
			{ class: 'ontario-form-group' },
			this.captionState.getCaption(this.getId(), !!this.internalHintExpander),
			this.internalHintText &&
				h('ontario-hint-text', {
					hint: this.internalHintText.hint,
					hintContentType: this.internalHintText.hintContentType,
					ref: function (o) {
						return (t.hintTextRef = o);
					},
				}),
			h('textarea', {
				'aria-describedby': this.hintTextId,
				'class': this.getClass(),
				'id': this.getId(),
				'name': this.name,
				'value': this.getValue(),
				'onInput': function (o) {
					return t.handleEvent(o, EventType.Change);
				},
				'onBlur': function (o) {
					return t.handleEvent(o, EventType.Blur);
				},
				'onFocus': function (o) {
					return t.handleEvent(o, EventType.Focus);
				},
				'required': !!this.required,
			}),
			this.internalHintExpander &&
				h('ontario-hint-expander', {
					'hint': this.internalHintExpander.hint,
					'content': this.internalHintExpander.content,
					'hintContentType': this.internalHintExpander.hintContentType,
					'input-exists': true,
				}),
		);
	};
	Object.defineProperty(t.prototype, 'element', {
		get: function () {
			return getElement(this);
		},
		enumerable: false,
		configurable: true,
	});
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return {
				hintText: ['parseHintText'],
				hintExpander: ['parseHintExpander'],
				name: ['validateName'],
				caption: ['updateCaptionState'],
				language: ['updateLanguage'],
			};
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioTextarea.style = ontarioTextareaCss;
export {
	OntarioAside as ontario_aside,
	OntarioBackToTop as ontario_back_to_top,
	OntarioBlockquote as ontario_blockquote,
	OntarioButton as ontario_button,
	OntarioCallout as ontario_callout,
	OntarioCheckboxes as ontario_checkboxes,
	OntarioCriticalAlert as ontario_critical_alert,
	OntarioDropdownList as ontario_dropdown_list,
	OntarioFieldset as ontario_fieldset,
	OntarioFooter as ontario_footer,
	OntarioHeader as ontario_header,
	OntarioHintExpander as ontario_hint_expander,
	OntarioHintText as ontario_hint_text,
	OntarioIconAccessibility as ontario_icon_accessibility,
	OntarioIconAlertError as ontario_icon_alert_error,
	OntarioIconAlertInformation as ontario_icon_alert_information,
	OntarioIconAlertSuccess as ontario_icon_alert_success,
	OntarioIconAlertWarning as ontario_icon_alert_warning,
	OntarioIconCamera as ontario_icon_camera,
	OntarioIconChevronDown as ontario_icon_chevron_down,
	OntarioIconChevronLeft as ontario_icon_chevron_left,
	OntarioIconChevronUp as ontario_icon_chevron_up,
	OntarioIconEmail as ontario_icon_email,
	OntarioIconHelp as ontario_icon_help,
	OntarioIconMastercard as ontario_icon_mastercard,
	OntarioIconNotification as ontario_icon_notification,
	OntarioIconPrint as ontario_icon_print,
	OntarioIconSentiment5 as ontario_icon_sentiment_5,
	OntarioIconTextMessage as ontario_icon_text_message,
	OntarioIconTransportBus as ontario_icon_transport_bus,
	OntarioInput as ontario_input,
	OntarioLanguageToggle as ontario_language_toggle,
	OntarioLoadingIndicator as ontario_loading_indicator,
	OntarioPageAlert as ontario_page_alert,
	OntarioRadioButtons as ontario_radio_buttons,
	OntarioStepIndicator as ontario_step_indicator,
	OntarioTextarea as ontario_textarea,
};
