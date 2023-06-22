import { h as o, r as t, g as i, c as e, a, F as n } from './p-e870d905.js';
import { v as r, a as l, b as s, c as h, I as d, d as m } from './p-888a2bd3.js';
import { C as g, a as p } from './p-b5fbefe0.js';
const c = ['h2', 'h3', 'h4', 'h5', 'h6'],
	u = ['teal', 'gold', 'yellow', 'taupe', 'green', 'lime', 'sky', 'blue', 'purple'],
	f = ['string', 'html'],
	b = (o) => u.includes(o),
	w = (o) => c.includes(o),
	x = (o, t) => {
		const i = 'callout' === o ? 'ontario-callout' : 'ontario-aside';
		return t ? `${i} ontario-border-highlight--${t}` : `${i}`;
	},
	v = (t, i, e, a, n, r) => {
		const l = 'string' == typeof n;
		return o(
			'callout' === t ? 'div' : 'aside',
			{ class: x(t, r) },
			((t, i, e, a) => {
				const n = 'html' === e;
				switch (i) {
					case 'h2':
						return n
							? o('h2', { class: `ontario-${t}__title ontario-h5`, innerHTML: a })
							: o('h2', { class: `ontario-${t}__title ontario-h5` }, a);
					case 'h3':
						return n
							? o('h3', { class: `ontario-${t}__title ontario-h5`, innerHTML: a })
							: o('h3', { class: `ontario-${t}__title ontario-h5` }, a);
					case 'h4':
						return n
							? o('h4', { class: `ontario-${t}__title ontario-h5`, innerHTML: a })
							: o('h4', { class: `ontario-${t}__title ontario-h5` }, a);
					case 'h5':
						return n
							? o('h5', { class: `ontario-${t}__title ontario-h5`, innerHTML: a })
							: o('h5', { class: `ontario-${t}__title ontario-h5` }, a);
					case 'h6':
						return n
							? o('h6', { class: `ontario-${t}__title ontario-h5`, innerHTML: a })
							: o('h6', { class: `ontario-${t}__title ontario-h5` }, a);
					default:
						return n
							? o('h2', { class: `ontario-${t}__title ontario-h5`, innerHTML: a })
							: o('h2', { class: `ontario-${t}__title ontario-h5` }, a);
				}
			})(t, i, e, a),
			l ? o('p', null, n) : o('slot', null),
		);
	},
	k = class {
		constructor(o) {
			t(this, o),
				(this.headingType = void 0),
				(this.headingContentType = void 0),
				(this.headingContent = void 0),
				(this.content = void 0),
				(this.highlightColour = 'teal');
		}
		validateHeadingType() {
			return w(this.headingType)
				? this.headingType
				: new g()
						.addDesignSystemTag()
						.addMonospaceText(` headingType ${this.headingType} `)
						.addRegularText('for')
						.addMonospaceText(' <ontario-aside> ')
						.addRegularText(
							'is not a valid type. Please ensure your heading type matches one of the headingType types.',
						)
						.printMessage();
		}
		validateHeadingContentType() {
			return r(this.headingContentType, f) ? this.headingContentType : this.warnDefaultType();
		}
		validateHeadingContent() {
			this.headingContent ||
				new g()
					.addDesignSystemTag()
					.addMonospaceText(' headingContent ')
					.addRegularText('for')
					.addMonospaceText(' <ontario-aside> ')
					.addRegularText('was not provided.')
					.printMessage();
		}
		validateHighlightColour() {
			if (this.highlightColour) {
				if (b(this.highlightColour)) return this.highlightColour;
				new g()
					.addDesignSystemTag()
					.addMonospaceText(` highlightColour ${this.highlightColour} `)
					.addRegularText('for')
					.addMonospaceText(' <ontario-aside> ')
					.addRegularText(
						'does not match one of the valid highlightColour types. A default colour of `teal` will be applied.',
					)
					.printMessage();
			}
			return 'teal';
		}
		warnDefaultType() {
			return (
				new g()
					.addDesignSystemTag()
					.addMonospaceText(' headingContentType ')
					.addRegularText('on')
					.addMonospaceText(' <ontario-aside> ')
					.addRegularText('was set to an invalid type; only')
					.addMonospaceText(' string or html ')
					.addRegularText('are supported. The default type')
					.addMonospaceText(' string ')
					.addRegularText('is assumed.')
					.printMessage(),
				(this.headingContentType = 'string')
			);
		}
		componentWillLoad() {
			this.validateHighlightColour(),
				this.validateHeadingContent(),
				this.validateHeadingType(),
				this.validateHeadingContentType();
		}
		render() {
			return v(
				'aside',
				this.headingType,
				this.headingContentType,
				this.headingContent,
				this.content,
				this.highlightColour,
			);
		}
		static get watchers() {
			return {
				headingType: ['validateHeadingType'],
				headingContentType: ['validateHeadingContentType'],
				headingContent: ['validateHeadingContent'],
				highlightColour: ['validateHighlightColour'],
			};
		}
	};
k.style =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-aside{border-left:0.25rem solid #367A76;padding:1.5rem;margin:2rem 0 2.5rem 2rem}.ontario-aside *{max-width:48rem}.ontario-aside *:last-child{margin-bottom:0.5rem}@media screen and (max-width: 40em){.ontario-aside .ontario-aside{margin:2rem 0 2.5rem 1rem}}.ontario-aside__title{margin:0 0 1rem}.ontario-border-highlight--teal{border-color:#367A76 !important}.ontario-border-highlight--gold{border-color:#86743D !important}.ontario-border-highlight--yellow{border-color:#8A600D !important}.ontario-border-highlight--taupe{border-color:#7B725C !important}.ontario-border-highlight--green{border-color:#2B8737 !important}.ontario-border-highlight--lime{border-color:#5F8129 !important}.ontario-border-highlight--sky{border-color:#1080A6 !important}.ontario-border-highlight--blue{border-color:#0369ac !important}.ontario-border-highlight--purple{border-color:#92278F !important}';
const y = {
		required: { en: 'required', fr: 'obligatoire' },
		optional: { en: 'optional', fr: 'facultative' },
		accessibility: {
			moreInfo: { en: 'More information on', fr: 'Des renseignements supplémentaires sur' },
			checkboxHintExpander: {
				en: 'is available after the last checkbox item.',
				fr: 'suivront à la dernière case à cocher.',
			},
			singleHintExpander: { en: 'field is available in the next element.', fr: 'suivront au prochain élément.' },
		},
		backToTop: {
			top: { en: 'Top', fr: 'Haut' },
			ariaLabel: { en: 'Scroll back to the top', fr: 'Retour en haut de la page' },
		},
		loading: { en: 'Loading', fr: 'Chargement' },
		dropdownList: { select: { en: 'Select', fr: 'Sélectionner' } },
		contactUs: { en: 'Contact us', fr: 'Contactez-nous' },
		accessibilityLink: {
			text: { en: 'Accessibility', fr: 'Accessibilité' },
			link: { en: 'https://www.ontario.ca/page/accessibility', fr: 'https://www.ontario.ca/fr/page/accessibilite' },
		},
		privacyLink: {
			text: { en: 'Privacy', fr: 'Confidentialité' },
			link: {
				en: 'https://www.ontario.ca/page/privacy-statement',
				fr: 'https://www.ontario.ca/fr/page/declaration-concernant-la-protection-de-la-vie-privee',
			},
		},
		printerLink: {
			text: { en: "King's Printer for Ontario,", fr: 'Imprimeur du Roi pour l’Ontario,' },
			link: {
				en: 'https://www.ontario.ca/page/copyright-information',
				fr: 'https://www.ontario.ca/fr/page/droits-dauteur',
			},
		},
		languageToggle: { ariaLabel: { en: 'Switch language to French', fr: 'Changer la langue en anglais' } },
		stepIndicator: {
			back: { en: 'Back', fr: 'Retour' },
			step: { en: 'Step', fr: 'Étape' },
			of: { en: 'of', fr: 'sur' },
			complete: { en: 'complete', fr: 'complet' },
		},
	},
	_ = class {
		constructor(o) {
			t(this, o),
				(this.language = 'en'),
				(this.translations = y),
				(this.displayBackToTop = !1),
				(this.scrollYValue = 200);
		}
		showBackToTopButton() {
			this.displayBackToTop = window.scrollY > this.scrollYValue;
		}
		handleSetAppLanguage(o) {
			this.language = l(o);
		}
		handleHeaderLanguageToggled(o) {
			this.language = l(o);
		}
		scrollToTop() {
			window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
		}
		componentWillLoad() {
			this.language = l(this.language);
		}
		render() {
			return o(
				'button',
				{
					'class': this.displayBackToTop ? 'ontario-back-to-top active' : 'ontario-back-to-top',
					'onClick': this.scrollToTop,
					'aria-label': this.translations.backToTop.ariaLabel[`${this.language}`],
				},
				o('span', {
					'aria-hidden': 'true',
					'innerHTML':
						'<svg class="ontario-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>\n',
				}),
				this.translations.backToTop.top[`${this.language}`],
			);
		}
		get element() {
			return i(this);
		}
	};
_.style =
	'.ontario-back-to-top{position:fixed;bottom:5%;right:2%;visibility:hidden;opacity:0;-webkit-transition:0.1s ease-in-out;transition:0.1s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:3rem;padding:0.5rem 1rem 0.5rem 0.75rem;background:#e6e6e6;border:0.125rem solid #FFFFFF;border-radius:4px;-webkit-box-shadow:0 0.125rem 0.25rem rgba(26, 26, 26, 0.6);box-shadow:0 0.125rem 0.25rem rgba(26, 26, 26, 0.6);-webkit-box-sizing:border-box;box-sizing:border-box;color:#1a1a1a;line-height:1.25rem;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:600;z-index:10000;cursor:pointer}.ontario-back-to-top .ontario-icon{margin:0.125rem 0.5rem 0 0;width:2rem;height:2rem}.ontario-back-to-top:hover{background-color:#cccccc}.ontario-back-to-top:focus{background-color:#e6e6e6;-webkit-box-shadow:0 0 0 0.25rem #009ADB, 0 0.1875rem 0.3125rem 0.1875rem rgba(0, 0, 0, 0.6);box-shadow:0 0 0 0.25rem #009ADB, 0 0.1875rem 0.3125rem 0.1875rem rgba(0, 0, 0, 0.6);outline:0.25rem solid transparent;-webkit-transition:0.1s ease-in-out;transition:0.1s ease-in-out}.ontario-back-to-top:active{background-color:#b2b2b2;-webkit-box-shadow:0 0 0 0.25rem #009ADB, 0 0.3125rem 0.4375rem 0.1875rem rgba(0, 0, 0, 0.6);box-shadow:0 0 0 0.25rem #009ADB, 0 0.3125rem 0.4375rem 0.1875rem rgba(0, 0, 0, 0.6);outline:0.25rem solid transparent;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}@media screen and (max-width: 73em){.ontario-back-to-top{-ms-flex-direction:column;flex-direction:column;height:4.75rem;padding:0.375rem 0.75rem 0.5625rem 0.75rem}.ontario-back-to-top .ontario-icon{margin:0.0625rem 0 0.25rem 0;width:2rem;height:2rem}}@media screen and (max-width: 40em){.ontario-back-to-top{display:block;padding:0.25rem;font-size:0;width:3rem;height:3rem}.ontario-back-to-top .ontario-icon{margin:0.5rem 0 0 0}@-moz-document url-prefix(){.ontario-back-to-top .ontario-icon{margin-top:0.125rem}}}.ontario-back-to-top.active{visibility:visible;opacity:1}';
const F = class {
	constructor(o) {
		t(this, o),
			(this.quote = void 0),
			(this.attribution = void 0),
			(this.byline = void 0),
			(this.shortQuoteLength = 140),
			(this.shortQuote = !1),
			(this.quoteState = void 0);
	}
	validateQuote() {
		var o, t, i, e;
		(this.quoteState =
			null !== (t = null !== (o = this.quote) && void 0 !== o ? o : this.host.textContent) && void 0 !== t ? t : ''),
			this.validateQuoteContent(this.quoteState),
			(this.shortQuote =
				null === (e = (null === (i = this.quoteState) || void 0 === i ? void 0 : i.length) <= this.shortQuoteLength) ||
				void 0 === e ||
				e);
	}
	validateQuoteContent(o) {
		s(o) &&
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' quote ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-blockquote> ')
				.addRegularText('was not provided')
				.printMessage();
	}
	componentWillLoad() {
		this.validateQuote();
	}
	componentDidLoad() {
		new MutationObserver((o) => {
			o.forEach((o) => {
				'attributes' === o.type && this.validateQuote();
			});
		}).observe(this.host, { attributes: !0 });
	}
	render() {
		return o(
			'blockquote',
			{ class: this.shortQuote ? 'ontario-blockquote ontario-blockquote--short' : 'ontario-blockquote' },
			o('p', null, this.quoteState),
			this.attribution && o('cite', { class: 'ontario-blockquote__attribution' }, this.attribution),
			this.byline && o('cite', { class: 'ontario-blockquote__byline' }, this.byline),
		);
	}
	get host() {
		return i(this);
	}
	static get watchers() {
		return { quote: ['validateQuote'] };
	}
};
F.style =
	'@charset "UTF-8";.ontario-blockquote{border-left:4px solid #4d4d4d;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:400;letter-spacing:0.025rem;line-height:1.56;max-width:48rem;margin:2rem;padding:1.5rem 0 1.5rem 1.5rem;quotes:"“" "”"}@media screen and (max-width: 40em){.ontario-blockquote{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.5;margin:1.5rem 0 2rem 0}}.ontario-blockquote p{margin:0 0 1.5rem 0}.ontario-blockquote p::before{content:open-quote}.ontario-blockquote p::after{content:close-quote}.ontario-blockquote--short{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.5}@media screen and (max-width: 40em){.ontario-blockquote--short{font-size:1.4375rem;line-height:1.43}}.ontario-blockquote__attribution,.ontario-blockquote__byline{display:block;font-size:1rem;letter-spacing:0.025rem;line-height:1.56;text-align:right}@media screen and (max-width: 40em){.ontario-blockquote__attribution,.ontario-blockquote__byline{letter-spacing:0.03rem;line-height:1.5}}.ontario-blockquote__attribution{font-style:normal;font-weight:700}.ontario-blockquote__attribution::before{content:"— "}html[lang=fr] blockquote{quotes:"« " " »"}';
const z = ['primary', 'secondary', 'tertiary', 'internalThemeDark'],
	C = ['button', 'reset', 'submit'],
	A = class {
		constructor(o) {
			t(this, o),
				(this.type = 'secondary'),
				(this.htmlType = 'button'),
				(this.label = void 0),
				(this.ariaLabelText = void 0),
				(this.elementId = void 0),
				(this.typeState = void 0),
				(this.htmlTypeState = void 0),
				(this.labelState = void 0);
		}
		updateLabelContent() {
			var o, t;
			(this.labelState =
				null !== (t = null !== (o = this.label) && void 0 !== o ? o : this.host.textContent) && void 0 !== t ? t : ''),
				this.validateLabelContent(this.labelState);
		}
		validateType() {
			const o = r(this.type, z);
			this.typeState = o ? this.type : this.warnDefaultType();
		}
		validateHtmlType() {
			const o = r(this.htmlType, C);
			this.htmlTypeState = o ? this.htmlType : this.warnDefaultHtmlType();
		}
		validateLabelContent(o) {
			s(o) &&
				new g()
					.addDesignSystemTag()
					.addMonospaceText(' label ')
					.addRegularText('for')
					.addMonospaceText(' <ontario-button> ')
					.addRegularText('was not provided')
					.printMessage();
		}
		warnDefaultType() {
			return (
				new g()
					.addDesignSystemTag()
					.addMonospaceText(' type ')
					.addRegularText('on')
					.addMonospaceText(' <ontario-button> ')
					.addRegularText('was set to an invalid type; only')
					.addMonospaceText(' primary, secondary, or tertiary ')
					.addRegularText('are supported. The default type')
					.addMonospaceText(' secondary ')
					.addRegularText('is assumed.')
					.printMessage(),
				'secondary'
			);
		}
		warnDefaultHtmlType() {
			return (
				new g()
					.addDesignSystemTag()
					.addMonospaceText(' htmlType ')
					.addRegularText('on')
					.addMonospaceText(' <ontario-button> ')
					.addRegularText('was set to an invalid htmlType; only')
					.addMonospaceText(' button, reset, or submit ')
					.addRegularText('are supported. The default type')
					.addMonospaceText(' button ')
					.addRegularText('is assumed.')
					.printMessage(),
				'button'
			);
		}
		getClass() {
			return `ontario-button ontario-button--${this.typeState}`;
		}
		getId() {
			var o;
			return null !== (o = this.elementId) && void 0 !== o ? o : '';
		}
		componentWillLoad() {
			var o;
			this.updateLabelContent(),
				this.validateHtmlType(),
				this.validateType(),
				(this.ariaLabelText = null !== (o = this.ariaLabelText) && void 0 !== o ? o : this.labelState);
		}
		componentDidLoad() {
			new MutationObserver((o) => {
				o.forEach((o) => {
					'attributes' === o.type && this.updateLabelContent();
				});
			}).observe(this.host, { attributes: !0 });
		}
		render() {
			return o(
				'button',
				{ 'type': this.htmlTypeState, 'class': this.getClass(), 'aria-label': this.ariaLabelText, 'id': this.getId() },
				this.labelState,
			);
		}
		get host() {
			return i(this);
		}
		static get watchers() {
			return { label: ['updateLabelContent'], type: ['validateType'], htmlType: ['validateHtmlType'] };
		}
	};
A.style =
	'.ontario-button:focus,.ontario-button:active{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button{border:none;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;display:inline-block;font-size:1.125rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:600;line-height:1.5555555556;margin:0 1.75rem 1.5rem 0;min-width:10rem;padding:0.625rem 1.5rem;text-align:center;text-decoration:none;cursor:pointer}@media screen and (max-width: 40em){.ontario-button{margin-right:0;display:block;width:100%}}.ontario-button .ontario-icon{margin-right:4px}.ontario-button--primary{background-color:#0066CC;color:#FFFFFF}.ontario-button--primary:hover{background-color:#00478F;color:#FFFFFF}.ontario-button--primary:focus{background-color:#00478F;color:#FFFFFF;-webkit-transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--primary:active{background-color:#002142;color:#FFFFFF;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--primary:visited{color:#FFFFFF}.ontario-button--secondary{background-color:#FFFFFF;border:2px solid #0066CC;color:#0066CC;padding-top:0.5rem;padding-bottom:0.5rem}.ontario-button--secondary:hover{background-color:#e0f0ff;border-color:#00478F;color:#00478F}.ontario-button--secondary:focus{background-color:#e0f0ff;border-color:#00478F;color:#00478F;-webkit-transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--secondary:active{background-color:#c2e0ff;border-color:#002142;color:#002142;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--secondary:visited{color:#0066CC}.ontario-button--tertiary{background-color:transparent;color:#0066CC;text-decoration:underline}.ontario-button--tertiary:hover{background-color:#e8e8e8;color:#00478F;text-decoration:underline}.ontario-button--tertiary:focus{background-color:#e8e8e8;color:#00478F;text-decoration:underline;-webkit-transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--tertiary:active{background-color:#d1d1d1;color:#002142;text-decoration:underline;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--tertiary:visited{color:#0066CC}.ontario-button--internalThemeDark{background-color:#1a1a1a;border:2px solid #FFFFFF;color:#FFFFFF}.ontario-button--internalThemeDark:hover{background-color:#4d4d4d}.ontario-button--internalThemeDark:focus{background-color:#4d4d4d;-webkit-transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--internalThemeDark:active{background-color:#4d4d4d;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--internalThemeDark:visited{color:#0066CC}';
const H = class {
	constructor(o) {
		t(this, o),
			(this.headingType = void 0),
			(this.headingContentType = 'string'),
			(this.headingContent = void 0),
			(this.content = void 0),
			(this.highlightColour = 'teal');
	}
	validateHeadingType() {
		return w(this.headingType)
			? this.headingType
			: new g()
					.addDesignSystemTag()
					.addMonospaceText(` headingType ${this.headingType} `)
					.addRegularText('for')
					.addMonospaceText(' <ontario-callout> ')
					.addRegularText('is not a valid type. Please ensure your heading type matches one of the headingType types.')
					.printMessage();
	}
	validateHeadingContentType() {
		return r(this.headingContentType, f) ? this.headingContentType : this.warnDefaultType();
	}
	validateHeadingContent() {
		this.headingContent ||
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' headingContent ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-callout> ')
				.addRegularText('was not provided.')
				.printMessage();
	}
	validateHighlightColour() {
		if (this.highlightColour) {
			if (b(this.highlightColour)) return this.highlightColour;
			new g()
				.addDesignSystemTag()
				.addMonospaceText(` highlightColour ${this.highlightColour} `)
				.addRegularText('for')
				.addMonospaceText(' <ontario-callout> ')
				.addRegularText(
					'does not match one of the valid highlightColour types. A default colour of `teal` will be applied.',
				)
				.printMessage();
		}
		return 'teal';
	}
	warnDefaultType() {
		return (
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' headingContentType ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-callout> ')
				.addRegularText('was set to an invalid type; only')
				.addMonospaceText(' string or html ')
				.addRegularText('are supported. The default type')
				.addMonospaceText(' string ')
				.addRegularText('is assumed.')
				.printMessage(),
			(this.headingContentType = 'string')
		);
	}
	componentWillLoad() {
		this.validateHighlightColour(),
			this.validateHeadingContent(),
			this.validateHeadingType(),
			this.validateHeadingContentType();
	}
	render() {
		return v(
			'callout',
			this.headingType,
			this.headingContentType,
			this.headingContent,
			this.content,
			this.highlightColour,
		);
	}
	static get watchers() {
		return {
			headingType: ['validateHeadingType'],
			headingContentType: ['validateHeadingContentType'],
			headingContent: ['validateHeadingContent'],
			highlightColour: ['validateHighlightColour'],
		};
	}
};
H.style =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-callout{border-left:0.25rem solid #367A76;padding:1.5rem;margin:2rem 0 2.5rem 0;background-color:#f2f2f2}.ontario-callout *{max-width:48rem}.ontario-callout *:last-child{margin-bottom:0.5rem}.ontario-callout__title{margin:0 0 1rem}.ontario-border-highlight--teal{border-color:#367A76 !important}.ontario-border-highlight--gold{border-color:#86743D !important}.ontario-border-highlight--yellow{border-color:#8A600D !important}.ontario-border-highlight--taupe{border-color:#7B725C !important}.ontario-border-highlight--green{border-color:#2B8737 !important}.ontario-border-highlight--lime{border-color:#5F8129 !important}.ontario-border-highlight--sky{border-color:#1080A6 !important}.ontario-border-highlight--blue{border-color:#0369ac !important}.ontario-border-highlight--purple{border-color:#92278F !important}';
const N = (t) => {
		var {
				autoComplete: i,
				className: e,
				id: a,
				name: n,
				type: r,
				value: l,
				required: s,
				onKeyDown: h,
				onInput: d,
				onChange: m,
				onBlur: g,
				onFocus: p,
				ref: c,
			} = t,
			u = (function (o, t) {
				var i = {};
				for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && t.indexOf(e) < 0 && (i[e] = o[e]);
				if (null != o && 'function' == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (e = Object.getOwnPropertySymbols(o); a < e.length; a++)
						t.indexOf(e[a]) < 0 && Object.prototype.propertyIsEnumerable.call(o, e[a]) && (i[e[a]] = o[e[a]]);
				}
				return i;
			})(t, [
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
		return o(
			'input',
			Object.assign(
				{
					autoComplete: i,
					class: e,
					id: a,
					name: n,
					type: r,
					value: l,
					required: !!s,
					onKeyDown: h,
					onInput: d,
					onChange: m,
					onBlur: g,
					onFocus: p,
					ref: c,
				},
				u,
			),
		);
	},
	T = ['default', 'large', 'heading'];
var L;
!(function (o) {
	(o.UndefinedCaptionObject = 'undefinedCaptionObject'),
		(o.UndefinedCaptionText = 'undefinedCaption'),
		(o.EmptyCaptionText = 'emptyCaption'),
		(o.UndefinedCaptionType = 'undefinedCaptionType'),
		(o.IncorrectCaptionType = 'incorrectCaptionType');
})(L || (L = {}));
class O {
	constructor(t, i, e, a, n = !1, r = !1) {
		let l;
		if (
			((this.captionType = 'default'),
			(this.required = !1),
			(this.isLegend = !1),
			(this.language = 'en'),
			(this.getCaption = (t, i = !1) => {
				const e = this.captionText && this.captionText.toLowerCase(),
					a = this.isLegend
						? o(
								'legend',
								{ class: this.getClass() },
								'heading' === this.captionType ? o('h1', null, this.captionText) : this.captionText,
								this.getRequiredFlagElement(),
								i && this.getHintExpanderAccessibilityText(e, !1),
						  )
						: o(
								'label',
								{ htmlFor: t, class: this.getClass() },
								this.captionText,
								this.getRequiredFlagElement(),
								i && this.getHintExpanderAccessibilityText(e, !1),
						  );
				return 'heading' !== this.captionType || this.isLegend ? a : o('h1', null, a);
			}),
			'string' == typeof i)
		)
			try {
				l = JSON.parse(i);
			} catch (o) {
				l = { captionText: i, captionType: 'default' };
			}
		else l = i;
		(this.componentTagName = t.toLocaleLowerCase()),
			(this.captionText = null == l ? void 0 : l.captionText),
			(this.captionType =
				((null == l ? void 0 : l.captionType) &&
					T.find((o) => {
						var t;
						return o === (null === (t = l.captionType) || void 0 === t ? void 0 : t.toLowerCase());
					})) ||
				'default'),
			(this.required = r),
			(this.isLegend = n),
			(this.translations = e),
			(this.language = a),
			this.validateCaption(this);
	}
	getHintExpanderAccessibilityText(t, i = !1) {
		const e = o(
				'span',
				{ class: 'ontario-show-for-sr' },
				this.translations.accessibility.moreInfo[this.language],
				' "',
				t.toLowerCase(),
				'"',
				' ',
				this.translations.accessibility.checkboxHintExpander[this.language],
			),
			a = o(
				'span',
				{ class: 'ontario-show-for-sr' },
				this.translations.accessibility.moreInfo[this.language],
				' "',
				t.toLowerCase(),
				'"',
				' ',
				this.translations.accessibility.singleHintExpander[this.language],
			);
		return 'ontario-checkboxes' === this.componentTagName ? (i ? a : e) : a;
	}
	getRequiredFlagText() {
		return this.required
			? this.translations && `(${this.translations.required[this.language]})`
			: this.translations && `(${this.translations.optional[this.language]})`;
	}
	getRequiredFlagElement() {
		return o('span', { class: 'ontario-label__flag' }, this.getRequiredFlagText());
	}
	getClass() {
		return 'large' === this.captionType || 'heading' === this.captionType
			? this.isLegend
				? `ontario-fieldset__legend ontario-fieldset__legend--${this.captionType}`
				: `ontario-label ontario-label--${this.captionType}`
			: this.isLegend
			? 'ontario-fieldset__legend'
			: 'ontario-label';
	}
	validateCaption(o) {
		var t;
		let i;
		if (
			(!o || Object.keys(o).length <= 0
				? (i = L.UndefinedCaptionObject)
				: (o.captionText ? /^\s*$/.test(o.captionText) && (i = L.EmptyCaptionText) : (i = L.UndefinedCaptionText),
				  o.captionType
						? T.includes(
								null === (t = null == o ? void 0 : o.captionType) || void 0 === t ? void 0 : t.toLowerCase(),
						  ) || (i = L.IncorrectCaptionType)
						: (i = L.UndefinedCaptionType)),
			i)
		) {
			const o = new g().addDesignSystemTag();
			i !== L.UndefinedCaptionObject &&
				o
					.addMonospaceText(
						` ${i === L.EmptyCaptionText || i === L.UndefinedCaptionText ? 'caption or captionText' : 'captionType'} `,
					)
					.addRegularText('object or property of'),
				o.addMonospaceText(' caption ').addRegularText('object on').addMonospaceText(` ${this.componentTagName} `),
				this.printConsoleMessage(i, o, this.getRequiredFlagText());
		}
	}
	printConsoleMessage(o, t, i = '(optional)') {
		switch (o) {
			case L.UndefinedCaptionObject:
			case L.UndefinedCaptionText:
			case L.EmptyCaptionText:
				t.addRegularText(
					(o === L.EmptyCaptionText ? 'is empty or contains only spaces' : 'is required but not defined') +
						'. A blank followed by a',
				)
					.addMonospaceText(` ${i} `)
					.addRegularText('flag is assumed.');
				break;
			case L.UndefinedCaptionType:
				t.addRegularText('is not defined. The').addMonospaceText(' default ').addRegularText('type is assumed.');
				break;
			case L.IncorrectCaptionType:
				t.addRegularText('was set to an incorrect type; only')
					.addMonospaceText(' default, heading, ')
					.addRegularText('or')
					.addMonospaceText(' large ')
					.addRegularText('type is allowed. The')
					.addMonospaceText(' default ')
					.addRegularText('type is assumed.');
		}
		t.printMessage();
	}
}
const D = (o) => {
	let t = { hint: '', hintContentType: 'string' };
	if (o)
		if ('string' == typeof o)
			try {
				t = JSON.parse(o);
			} catch (i) {
				t = { hint: o, hintContentType: 'string' };
			}
		else t = o;
	return t;
};
var S;
!(function (o) {
	(o.Change = 'change'), (o.Blur = 'blur'), (o.Focus = 'focus');
})(S || (S = {}));
const B = (o, t, i, e, a, n, r, l, s, h) => {
		'change' === t &&
			('radio' === r || 'checkbox' === r
				? i instanceof HTMLInputElement &&
				  e.emit({
						checked: null == i ? void 0 : i.checked,
						id: null == i ? void 0 : i.id,
						value: null == i ? void 0 : i.value,
				  })
				: e.emit({ id: null == i ? void 0 : i.id, value: null == i ? void 0 : i.value }),
			l && l(o)),
			'focus' === t &&
				(a.emit({ id: null == i ? void 0 : i.id, focused: !0, value: null == i ? void 0 : i.value }), s && s(o)),
			'blur' === t &&
				(n.emit({ id: null == i ? void 0 : i.id, focused: !1, value: null == i ? void 0 : i.value }), h && h(o));
	},
	$ = class {
		constructor(o) {
			t(this, o),
				(this.checkboxOnChange = e(this, 'checkboxOnChange', 7)),
				(this.checkboxOnBlur = e(this, 'checkboxOnBlur', 7)),
				(this.checkboxOnFocus = e(this, 'checkboxOnFocus', 7)),
				(this.handleEvent = (o, t) => {
					var i;
					const e = o.target;
					e && (e.checked = null !== (i = e.checked) && void 0 !== i ? i : ''),
						B(
							o,
							t,
							e,
							this.checkboxOnChange,
							this.checkboxOnFocus,
							this.checkboxOnBlur,
							'checkbox',
							this.customOnChange,
							this.customOnFocus,
							this.customOnBlur,
						);
				}),
				(this.caption = void 0),
				(this.language = 'en'),
				(this.name = void 0),
				(this.hintText = void 0),
				(this.hintExpander = void 0),
				(this.options = void 0),
				(this.required = !1),
				(this.customOnChange = void 0),
				(this.customOnBlur = void 0),
				(this.customOnFocus = void 0),
				(this.hintTextId = void 0),
				(this.captionState = void 0),
				(this.internalHintText = void 0),
				(this.internalHintExpander = void 0),
				(this.internalOptions = void 0);
		}
		handleSetAppLanguage(o) {
			this.language = l(o);
		}
		handleHeaderLanguageToggled(o) {
			this.language = l(o);
		}
		parseHintText() {
			if (this.hintText) {
				const o = D(this.hintText);
				this.internalHintText = o;
			}
		}
		parseHintExpander() {
			const o = this.hintExpander;
			o && (this.internalHintExpander = 'string' == typeof o ? JSON.parse(o) : o);
		}
		parseOptions() {
			void 0 !== this.options &&
				(this.internalOptions = Array.isArray(this.options) ? this.options : JSON.parse(this.options)),
				this.validateOptions(this.internalOptions);
		}
		validateOptions(o) {
			h(o) &&
				new g()
					.addDesignSystemTag()
					.addMonospaceText(' options ')
					.addRegularText('for')
					.addMonospaceText(' <ontario-checkboxes> ')
					.addRegularText('was not provided')
					.printMessage();
		}
		validateName(o) {
			s(o) &&
				new g()
					.addDesignSystemTag()
					.addMonospaceText(' name ')
					.addRegularText('for')
					.addMonospaceText(' <ontario-checkboxes> ')
					.addRegularText('was not provided')
					.printMessage();
		}
		updateCaptionState(o) {
			this.captionState = new O(this.element.tagName, o, y, this.language, !0, this.required);
		}
		updateLanguage() {
			this.updateCaptionState(this.caption);
		}
		async componentDidLoad() {
			var o;
			this.hintTextId = await (null === (o = this.hintTextRef) || void 0 === o ? void 0 : o.getHintTextId());
		}
		componentWillLoad() {
			this.updateCaptionState(this.caption),
				this.parseOptions(),
				this.parseHintExpander(),
				this.parseHintText(),
				this.validateName(this.name),
				(this.language = l(this.language));
		}
		render() {
			var t;
			return o(
				'div',
				{ class: 'ontario-form-group' },
				o(
					'fieldset',
					{ 'class': 'ontario-fieldset', 'aria-describedby': this.hintTextId },
					this.captionState.getCaption(void 0, !!this.internalHintExpander),
					this.internalHintText &&
						o('ontario-hint-text', {
							hint: this.internalHintText.hint,
							hintContentType: this.internalHintText.hintContentType,
							ref: (o) => (this.hintTextRef = o),
						}),
					o(
						'div',
						{ class: 'ontario-checkboxes' },
						null === (t = this.internalOptions) || void 0 === t
							? void 0
							: t.map((t) =>
									o(
										'div',
										{ class: 'ontario-checkboxes__item' },
										o(N, {
											className: 'ontario-checkboxes__input',
											id: t.elementId,
											name: this.name,
											type: 'checkbox',
											value: t.value,
											required: !!this.required,
											onChange: (o) => this.handleEvent(o, S.Change),
											onBlur: (o) => this.handleEvent(o, S.Blur),
											onFocus: (o) => this.handleEvent(o, S.Focus),
										}),
										o(
											'label',
											{ class: 'ontario-checkboxes__label', htmlFor: t.elementId },
											t.label,
											t.hintExpander && this.captionState.getHintExpanderAccessibilityText(t.label, !0),
										),
										o(
											'div',
											{ class: 'ontario-checkboxes__hint-expander' },
											t.hintExpander &&
												o('ontario-hint-expander', {
													'hint': t.hintExpander.hint,
													'content': t.hintExpander.content,
													'hintContentType': t.hintExpander.hintContentType,
													'input-exists': !0,
												}),
										),
									),
							  ),
						this.internalHintExpander &&
							o('ontario-hint-expander', {
								'hint': this.internalHintExpander.hint,
								'content': this.internalHintExpander.content,
								'hintContentType': this.internalHintExpander.hintContentType,
								'input-exists': !0,
							}),
					),
				),
			);
		}
		get element() {
			return i(this);
		}
		static get watchers() {
			return {
				hintText: ['parseHintText'],
				hintExpander: ['parseHintExpander'],
				options: ['parseOptions'],
				name: ['validateName'],
				caption: ['updateCaptionState'],
				language: ['updateLanguage'],
			};
		}
	};
$.style =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;font-size:inherit;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-checkboxes{margin-bottom:2.5rem;max-width:48rem}.ontario-checkboxes__item{position:relative;margin:0 0 1rem;padding:0 0 0 2rem;min-height:28px;-webkit-box-sizing:content-box;box-sizing:content-box}.ontario-checkboxes__item:last-of-type{margin:0}@media screen and (max-width: 40em){.ontario-checkboxes__item{padding:0 0 0 2.5rem;min-height:32px}}.ontario-checkboxes__input{cursor:pointer;margin:0;position:absolute;top:-2px;left:-2px;opacity:0;width:36px;height:36px;z-index:0;-webkit-tap-highlight-color:transparent}@media screen and (max-width: 40em){.ontario-checkboxes__input{width:40px;height:40px}}.ontario-checkboxes__label{display:inline-block;cursor:pointer;line-height:1.5;margin:0.25rem 0;padding:0 1rem;width:auto;white-space:normal}@media screen and (max-width: 40em){.ontario-checkboxes__label{margin:0.33rem 0}}.ontario-checkboxes__label:before{content:"";border:2px solid #1a1a1a;border-radius:4px;position:absolute;top:0;left:0;width:32px;height:32px;-webkit-transition:border 0.1s ease-in-out;transition:border 0.1s ease-in-out;display:block}@media screen and (min-width: 40em){.ontario-checkboxes__label:before{width:28px;height:28px}}.ontario-checkboxes__label:after{content:"";background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M0 2.667C0 1.194 1.194 0 2.667 0h18.667C22.806 0 24 1.194 24 2.667v18.667C24 22.806 22.806 24 21.333 24H2.667C1.194 24 0 22.806 0 21.333V2.667z\' fill=\'%231a1a1a\'/%3E%3Cpath d=\'M2.667 12.616l6.667 6.718 12-12.092-1.88-1.908L9.333 15.53l-4.787-4.8-1.88 1.894z\' fill=\'%23fff\'/%3E%3C/svg%3E%0A");background-repeat:no-repeat;height:30px;width:30px;position:absolute;top:1px;left:1px;right:0;bottom:0;opacity:0;display:block}@media screen and (max-width: 40em){.ontario-checkboxes__label:after{height:34px;width:34px}}.ontario-checkboxes__input:focus+.ontario-checkboxes__label:before{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}.ontario-checkboxes__input:checked+.ontario-checkboxes__label:after{opacity:1}.ontario-checkboxes__input:checked+.ontario-checkboxes__label:before{background-color:#1a1a1a}.ontario-checkboxes__hint-expander{margin:0.75rem 0 0 0.5rem}@media screen and (max-width: 40em){.ontario-checkboxes__hint-expander{margin-top:1rem}}';
const W = class {
	constructor(o) {
		t(this, o), (this.content = void 0);
	}
	validateCriticalAlertContent(o) {
		!this.host.textContent &&
			s(o) &&
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' content ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-critical-alert> ')
				.addRegularText('was not provided.')
				.printMessage();
	}
	renderContent() {
		const t = this.content;
		return 'string' == typeof t ? t : o('slot', null);
	}
	componentWillLoad() {
		this.validateCriticalAlertContent(this.content);
	}
	render() {
		return o(
			'div',
			{ class: 'ontario-critical-alert' },
			o(
				'div',
				{ class: 'ontario-row' },
				o(
					'div',
					{ class: 'ontario-column ontario-small-12' },
					o(
						'div',
						{ class: 'ontario-critical-alert__body' },
						o('div', {
							class: 'ontario-critical-alert__icon',
							innerHTML:
								'<svg class="svg-icon" role="img" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t<path d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z" fill="white" />\n\t<rect x="11" y="10" width="2" height="4" fill="black" />\n\t<rect x="11" y="16" width="2" height="2" fill="black" />\n</svg>\n',
						}),
						o('p', null, this.renderContent()),
					),
				),
			),
		);
	}
	get host() {
		return i(this);
	}
	static get watchers() {
		return { content: ['validateCriticalAlertContent'] };
	}
};
var M;
W.style =
	'.ontario-row{margin:0 auto;max-width:72rem;width:100%}.ontario-row:before,.ontario-row:after{content:"";display:table}.ontario-row:after{clear:both}.ontario-row.ontario-row--collapse>.ontario-column,.ontario-row.ontario-row--collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-row--collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row .ontario-row{margin:0 -1rem;max-width:none;width:auto}.ontario-row .ontario-row:before,.ontario-row .ontario-row:after{content:"";display:table}.ontario-row .ontario-row:after{clear:both}.ontario-row .ontario-row.ontario-row--collapse{margin:0;max-width:none;width:auto}.ontario-row .ontario-row.ontario-row--collapse:before,.ontario-row .ontario-row.ontario-row--collapse:after{content:"";display:table}.ontario-row .ontario-row.ontario-row--collapse:after{clear:both}.ontario-column,.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;float:left}.ontario-column+.ontario-column:last-child,.ontario-column+.ontario-columns:last-child,.ontario-columns+.ontario-column:last-child,.ontario-columns+.ontario-columns:last-child{float:right}.ontario-column+.ontario-column.ontario-end,.ontario-column+.ontario-columns.ontario-end,.ontario-columns+.ontario-column.ontario-end,.ontario-columns+.ontario-columns.ontario-end{float:left}@media only screen{.ontario-small-push-0{position:relative;left:0;right:auto}.ontario-small-pull-0{position:relative;right:0;left:auto}.ontario-small-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-small-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-small-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-small-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-small-push-3{position:relative;left:25%;right:auto}.ontario-small-pull-3{position:relative;right:25%;left:auto}.ontario-small-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-small-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-small-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-small-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-small-push-6{position:relative;left:50%;right:auto}.ontario-small-pull-6{position:relative;right:50%;left:auto}.ontario-small-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-small-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-small-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-small-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-small-push-9{position:relative;left:75%;right:auto}.ontario-small-pull-9{position:relative;right:75%;left:auto}.ontario-small-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-small-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-small-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-small-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-small-1{width:8.3333333333%}.ontario-small-2{width:16.6666666667%}.ontario-small-3{width:25%}.ontario-small-4{width:33.3333333333%}.ontario-small-5{width:41.6666666667%}.ontario-small-6{width:50%}.ontario-small-7{width:58.3333333333%}.ontario-small-8{width:66.6666666667%}.ontario-small-9{width:75%}.ontario-small-10{width:83.3333333333%}.ontario-small-11{width:91.6666666667%}.ontario-small-12{width:100%}.ontario-small-offset-0{margin-left:0 !important}.ontario-small-offset-1{margin-left:8.3333333333% !important}.ontario-small-offset-2{margin-left:16.6666666667% !important}.ontario-small-offset-3{margin-left:25% !important}.ontario-small-offset-4{margin-left:33.3333333333% !important}.ontario-small-offset-5{margin-left:41.6666666667% !important}.ontario-small-offset-6{margin-left:50% !important}.ontario-small-offset-7{margin-left:58.3333333333% !important}.ontario-small-offset-8{margin-left:66.6666666667% !important}.ontario-small-offset-9{margin-left:75% !important}.ontario-small-offset-10{margin-left:83.3333333333% !important}.ontario-small-offset-11{margin-left:91.6666666667% !important}.ontario-small-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-small-centered,.ontario-columns.ontario-small-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-small-uncentered,.ontario-columns.ontario-small-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-small-centered:last-child,.ontario-columns.ontario-small-centered:last-child{float:none}.ontario-column.ontario-small-uncentered:last-child,.ontario-columns.ontario-small-uncentered:last-child{float:left}.ontario-column.ontario-small-uncentered.ontario-opposite,.ontario-columns.ontario-small-uncentered.ontario-opposite{float:right}.ontario-row.ontario-small-collapse>.ontario-column,.ontario-row.ontario-small-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-small-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-small-uncollapse>.ontario-column,.ontario-row.ontario-small-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:40.063em){.ontario-medium-push-0{position:relative;left:0;right:auto}.ontario-medium-pull-0{position:relative;right:0;left:auto}.ontario-medium-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-medium-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-medium-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-medium-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-medium-push-3{position:relative;left:25%;right:auto}.ontario-medium-pull-3{position:relative;right:25%;left:auto}.ontario-medium-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-medium-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-medium-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-medium-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-medium-push-6{position:relative;left:50%;right:auto}.ontario-medium-pull-6{position:relative;right:50%;left:auto}.ontario-medium-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-medium-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-medium-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-medium-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-medium-push-9{position:relative;left:75%;right:auto}.ontario-medium-pull-9{position:relative;right:75%;left:auto}.ontario-medium-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-medium-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-medium-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-medium-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-medium-1{width:8.3333333333%}.ontario-medium-2{width:16.6666666667%}.ontario-medium-3{width:25%}.ontario-medium-4{width:33.3333333333%}.ontario-medium-5{width:41.6666666667%}.ontario-medium-6{width:50%}.ontario-medium-7{width:58.3333333333%}.ontario-medium-8{width:66.6666666667%}.ontario-medium-9{width:75%}.ontario-medium-10{width:83.3333333333%}.ontario-medium-11{width:91.6666666667%}.ontario-medium-12{width:100%}.ontario-medium-offset-0{margin-left:0 !important}.ontario-medium-offset-1{margin-left:8.3333333333% !important}.ontario-medium-offset-2{margin-left:16.6666666667% !important}.ontario-medium-offset-3{margin-left:25% !important}.ontario-medium-offset-4{margin-left:33.3333333333% !important}.ontario-medium-offset-5{margin-left:41.6666666667% !important}.ontario-medium-offset-6{margin-left:50% !important}.ontario-medium-offset-7{margin-left:58.3333333333% !important}.ontario-medium-offset-8{margin-left:66.6666666667% !important}.ontario-medium-offset-9{margin-left:75% !important}.ontario-medium-offset-10{margin-left:83.3333333333% !important}.ontario-medium-offset-11{margin-left:91.6666666667% !important}.ontario-medium-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-medium-centered,.ontario-columns.ontario-medium-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-medium-uncentered,.ontario-columns.ontario-medium-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-medium-centered:last-child,.ontario-columns.ontario-medium-centered:last-child{float:none}.ontario-column.ontario-medium-uncentered:last-child,.ontario-columns.ontario-medium-uncentered:last-child{float:left}.ontario-column.ontario-medium-uncentered.ontario-opposite,.ontario-columns.ontario-medium-uncentered.ontario-opposite{float:right}.ontario-row.ontario-medium-collapse>.ontario-column,.ontario-row.ontario-medium-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-medium-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-medium-uncollapse>.ontario-column,.ontario-row.ontario-medium-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:73.063em){.ontario-large-push-0{position:relative;left:0;right:auto}.ontario-large-pull-0{position:relative;right:0;left:auto}.ontario-large-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-large-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-large-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-large-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-large-push-3{position:relative;left:25%;right:auto}.ontario-large-pull-3{position:relative;right:25%;left:auto}.ontario-large-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-large-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-large-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-large-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-large-push-6{position:relative;left:50%;right:auto}.ontario-large-pull-6{position:relative;right:50%;left:auto}.ontario-large-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-large-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-large-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-large-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-large-push-9{position:relative;left:75%;right:auto}.ontario-large-pull-9{position:relative;right:75%;left:auto}.ontario-large-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-large-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-large-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-large-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-large-1{width:8.3333333333%}.ontario-large-2{width:16.6666666667%}.ontario-large-3{width:25%}.ontario-large-4{width:33.3333333333%}.ontario-large-5{width:41.6666666667%}.ontario-large-6{width:50%}.ontario-large-7{width:58.3333333333%}.ontario-large-8{width:66.6666666667%}.ontario-large-9{width:75%}.ontario-large-10{width:83.3333333333%}.ontario-large-11{width:91.6666666667%}.ontario-large-12{width:100%}.ontario-large-offset-0{margin-left:0 !important}.ontario-large-offset-1{margin-left:8.3333333333% !important}.ontario-large-offset-2{margin-left:16.6666666667% !important}.ontario-large-offset-3{margin-left:25% !important}.ontario-large-offset-4{margin-left:33.3333333333% !important}.ontario-large-offset-5{margin-left:41.6666666667% !important}.ontario-large-offset-6{margin-left:50% !important}.ontario-large-offset-7{margin-left:58.3333333333% !important}.ontario-large-offset-8{margin-left:66.6666666667% !important}.ontario-large-offset-9{margin-left:75% !important}.ontario-large-offset-10{margin-left:83.3333333333% !important}.ontario-large-offset-11{margin-left:91.6666666667% !important}.ontario-large-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-large-centered,.ontario-columns.ontario-large-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-large-uncentered,.ontario-columns.ontario-large-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-large-centered:last-child,.ontario-columns.ontario-large-centered:last-child{float:none}.ontario-column.ontario-large-uncentered:last-child,.ontario-columns.ontario-large-uncentered:last-child{float:left}.ontario-column.ontario-large-uncentered.ontario-opposite,.ontario-columns.ontario-large-uncentered.ontario-opposite{float:right}.ontario-row.ontario-large-collapse>.ontario-column,.ontario-row.ontario-large-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-large-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-large-uncollapse>.ontario-column,.ontario-row.ontario-large-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-push-0{position:relative;left:0;right:auto}.ontario-pull-0{position:relative;right:0;left:auto}.ontario-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-push-3{position:relative;left:25%;right:auto}.ontario-pull-3{position:relative;right:25%;left:auto}.ontario-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-push-6{position:relative;left:50%;right:auto}.ontario-pull-6{position:relative;right:50%;left:auto}.ontario-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-push-9{position:relative;left:75%;right:auto}.ontario-pull-9{position:relative;right:75%;left:auto}.ontario-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-pull-11{position:relative;right:91.6666666667%;left:auto}}@media only screen and (min-width:96.063em){.ontario-xlarge-push-0{position:relative;left:0;right:auto}.ontario-xlarge-pull-0{position:relative;right:0;left:auto}.ontario-xlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xlarge-push-3{position:relative;left:25%;right:auto}.ontario-xlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xlarge-push-6{position:relative;left:50%;right:auto}.ontario-xlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xlarge-push-9{position:relative;left:75%;right:auto}.ontario-xlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-xlarge-1{width:8.3333333333%}.ontario-xlarge-2{width:16.6666666667%}.ontario-xlarge-3{width:25%}.ontario-xlarge-4{width:33.3333333333%}.ontario-xlarge-5{width:41.6666666667%}.ontario-xlarge-6{width:50%}.ontario-xlarge-7{width:58.3333333333%}.ontario-xlarge-8{width:66.6666666667%}.ontario-xlarge-9{width:75%}.ontario-xlarge-10{width:83.3333333333%}.ontario-xlarge-11{width:91.6666666667%}.ontario-xlarge-12{width:100%}.ontario-xlarge-offset-0{margin-left:0 !important}.ontario-xlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xlarge-offset-3{margin-left:25% !important}.ontario-xlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xlarge-offset-6{margin-left:50% !important}.ontario-xlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xlarge-offset-9{margin-left:75% !important}.ontario-xlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xlarge-centered,.ontario-columns.ontario-xlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xlarge-uncentered,.ontario-columns.ontario-xlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xlarge-centered:last-child,.ontario-columns.ontario-xlarge-centered:last-child{float:none}.ontario-column.ontario-xlarge-uncentered:last-child,.ontario-columns.ontario-xlarge-uncentered:last-child{float:left}.ontario-column.ontario-xlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xlarge-collapse>.ontario-column,.ontario-row.ontario-xlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xlarge-uncollapse>.ontario-column,.ontario-row.ontario-xlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:120.063em){.ontario-xxlarge-push-0{position:relative;left:0;right:auto}.ontario-xxlarge-pull-0{position:relative;right:0;left:auto}.ontario-xxlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xxlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xxlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xxlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xxlarge-push-3{position:relative;left:25%;right:auto}.ontario-xxlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xxlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xxlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xxlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xxlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xxlarge-push-6{position:relative;left:50%;right:auto}.ontario-xxlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xxlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xxlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xxlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xxlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xxlarge-push-9{position:relative;left:75%;right:auto}.ontario-xxlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xxlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xxlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xxlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xxlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-xxlarge-1{width:8.3333333333%}.ontario-xxlarge-2{width:16.6666666667%}.ontario-xxlarge-3{width:25%}.ontario-xxlarge-4{width:33.3333333333%}.ontario-xxlarge-5{width:41.6666666667%}.ontario-xxlarge-6{width:50%}.ontario-xxlarge-7{width:58.3333333333%}.ontario-xxlarge-8{width:66.6666666667%}.ontario-xxlarge-9{width:75%}.ontario-xxlarge-10{width:83.3333333333%}.ontario-xxlarge-11{width:91.6666666667%}.ontario-xxlarge-12{width:100%}.ontario-xxlarge-offset-0{margin-left:0 !important}.ontario-xxlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xxlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xxlarge-offset-3{margin-left:25% !important}.ontario-xxlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xxlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xxlarge-offset-6{margin-left:50% !important}.ontario-xxlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xxlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xxlarge-offset-9{margin-left:75% !important}.ontario-xxlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xxlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xxlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xxlarge-centered,.ontario-columns.ontario-xxlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xxlarge-uncentered,.ontario-columns.ontario-xxlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xxlarge-centered:last-child,.ontario-columns.ontario-xxlarge-centered:last-child{float:none}.ontario-column.ontario-xxlarge-uncentered:last-child,.ontario-columns.ontario-xxlarge-uncentered:last-child{float:left}.ontario-column.ontario-xxlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xxlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xxlarge-collapse>.ontario-column,.ontario-row.ontario-xxlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xxlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xxlarge-uncollapse>.ontario-column,.ontario-row.ontario-xxlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}.ontario-critical-alert{background-color:#FFD440;font-weight:400;margin:0;padding:1rem 0;position:relative;z-index:10}.ontario-critical-alert__body{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.ontario-critical-alert__icon{display:-ms-flexbox;display:flex}.ontario-critical-alert__icon svg{width:28px;height:28px;margin:0 0.85rem 0 0}.ontario-critical-alert p{margin:0;padding:0;line-height:1.8}.ontario-critical-alert a{color:#1a1a1a;font-weight:700}.ontario-critical-alert a:hover,.ontario-critical-alert a:focus{text-decoration:none}.ontario-critical-alert a:visited{color:#1a1a1a}.ontario-critical-alert ::slotted(a){color:#1a1a1a !important;font-weight:700}.ontario-critical-alert ::slotted(a:hover),.ontario-critical-alert ::slotted(a:focus){text-decoration:none !important}.ontario-critical-alert ::slotted(a:visited){color:#1a1a1a}';
var q = new Uint8Array(16);
function I() {
	if (
		!M &&
		!(M =
			('undefined' != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
			('undefined' != typeof msCrypto &&
				'function' == typeof msCrypto.getRandomValues &&
				msCrypto.getRandomValues.bind(msCrypto)))
	)
		throw new Error(
			'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported',
		);
	return M(q);
}
const j =
	/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function E(o) {
	return 'string' == typeof o && j.test(o);
}
for (var R = [], V = 0; V < 256; ++V) R.push((V + 256).toString(16).substr(1));
function Y(o, t, i) {
	var e = (o = o || {}).random || (o.rng || I)();
	if (((e[6] = (15 & e[6]) | 64), (e[8] = (63 & e[8]) | 128), t)) {
		i = i || 0;
		for (var a = 0; a < 16; ++a) t[i + a] = e[a];
		return t;
	}
	return (function (o) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
			i = (
				R[o[t + 0]] +
				R[o[t + 1]] +
				R[o[t + 2]] +
				R[o[t + 3]] +
				'-' +
				R[o[t + 4]] +
				R[o[t + 5]] +
				'-' +
				R[o[t + 6]] +
				R[o[t + 7]] +
				'-' +
				R[o[t + 8]] +
				R[o[t + 9]] +
				'-' +
				R[o[t + 10]] +
				R[o[t + 11]] +
				R[o[t + 12]] +
				R[o[t + 13]] +
				R[o[t + 14]] +
				R[o[t + 15]]
			).toLowerCase();
		if (!E(i)) throw TypeError('Stringified UUID is invalid');
		return i;
	})(e);
}
const U = class {
	constructor(o) {
		t(this, o),
			(this.dropdownOnChange = e(this, 'dropdownOnChange', 7)),
			(this.dropdownOnBlur = e(this, 'dropdownOnBlur', 7)),
			(this.dropdownOnFocus = e(this, 'dropdownOnFocus', 7)),
			(this.handleEvent = (o, t) => {
				B(
					o,
					t,
					o.target,
					this.dropdownOnChange,
					this.dropdownOnFocus,
					this.dropdownOnBlur,
					'dropdown',
					this.customOnChange,
					this.customOnFocus,
					this.customOnBlur,
				);
			}),
			(this.caption = void 0),
			(this.language = 'en'),
			(this.name = void 0),
			(this.elementId = void 0),
			(this.options = void 0),
			(this.required = !1),
			(this.isEmptyStartOption = !1),
			(this.hintText = void 0),
			(this.hintExpander = void 0),
			(this.customOnChange = void 0),
			(this.customOnBlur = void 0),
			(this.customOnFocus = void 0),
			(this.hintTextId = void 0),
			(this.captionState = void 0),
			(this.internalOptions = void 0),
			(this.internalHintText = void 0),
			(this.internalHintExpander = void 0),
			(this.translations = y);
	}
	handleSetAppLanguage(o) {
		this.language = l(o);
	}
	handleHeaderLanguageToggled(o) {
		this.language = l(o);
	}
	validateName(o) {
		s(o) &&
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' name ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-dropdown-list> ')
				.addRegularText('was not provided')
				.printMessage();
	}
	validateOptions(o) {
		h(o) &&
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' options ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-dropdown-list> ')
				.addRegularText('was not provided')
				.printMessage();
	}
	parseOptions() {
		void 0 !== this.options &&
			(this.internalOptions = Array.isArray(this.options) ? this.options : JSON.parse(this.options)),
			this.validateSelectedOption(this.internalOptions);
	}
	updateCaptionState(o) {
		this.captionState = new O(this.element.tagName, o, y, this.language, !1, this.required);
	}
	parseHintText() {
		if (this.hintText) {
			const o = D(this.hintText);
			this.internalHintText = o;
		}
	}
	updateLanguage() {
		this.updateCaptionState(this.caption);
	}
	parseHintExpander() {
		const o = this.hintExpander;
		o && (this.internalHintExpander = 'string' == typeof o ? JSON.parse(o) : o);
	}
	getId() {
		var o;
		return null !== (o = this.elementId) && void 0 !== o ? o : '';
	}
	validateSelectedOption(o) {
		const t = 'selected';
		return (
			o.forEach((o) => {
				o.hasOwnProperty(t) || (o.selected = !1);
			}),
			(function (o, t) {
				let i = 0;
				for (const e of o) if ((!0 === e[t] || 'true' === e[t]) && (i++, i > 1)) return !0;
				return !1;
			})(o, t) &&
				new g()
					.addDesignSystemTag()
					.addMonospaceText(' There are duplicate truthy `selected` values ')
					.addRegularText('for')
					.addMonospaceText(' <ontario-dropdown-list> ')
					.addRegularText('options. Please update options so only one truthy `selected` value exists.')
					.printMessage(),
			o
		);
	}
	getDropdownArrow() {
		return { backgroundImage: `url(${a('./assets/ontario-material-dropdown-arrow-48px.svg')})` };
	}
	getClass() {
		return this.hintExpander
			? 'ontario-input ontario-dropdown ontario-dropdown-hint-expander--true'
			: 'ontario-input ontario-dropdown';
	}
	async componentDidLoad() {
		var o;
		this.hintTextId = await (null === (o = this.hintTextRef) || void 0 === o ? void 0 : o.getHintTextId());
	}
	componentWillLoad() {
		var o;
		this.updateCaptionState(this.caption),
			this.parseOptions(),
			this.validateName(this.name),
			this.validateOptions(this.internalOptions),
			(this.elementId = null !== (o = this.elementId) && void 0 !== o ? o : Y()),
			this.parseHintText(),
			this.parseHintExpander(),
			(this.language = l(this.language));
	}
	render() {
		var t, i;
		return o(
			'div',
			{ class: 'ontario-form-group' },
			this.captionState.getCaption(this.getId(), !!this.internalHintExpander),
			this.internalHintText &&
				o('ontario-hint-text', {
					hint: this.internalHintText.hint,
					hintContentType: this.internalHintText.hintContentType,
					ref: (o) => (this.hintTextRef = o),
				}),
			o(
				'select',
				{
					'class': this.getClass(),
					'aria-describedby': this.hintTextId,
					'id': this.getId(),
					'name': this.name,
					'style': this.getDropdownArrow(),
					'onChange': (o) => this.handleEvent(o, S.Change),
					'onBlur': (o) => this.handleEvent(o, S.Blur),
					'onFocus': (o) => this.handleEvent(o, S.Focus),
					'required': !!this.required,
				},
				this.isEmptyStartOption &&
					o(
						'option',
						null,
						!0 === this.isEmptyStartOption || 'true' === this.isEmptyStartOption
							? this.translations.dropdownList.select[`${this.language}`]
							: this.isEmptyStartOption,
					),
				null !==
					(i =
						null === (t = this.internalOptions) || void 0 === t
							? void 0
							: t.map((t) => o('option', { value: t.value, selected: t.selected }, t.label))) && void 0 !== i
					? i
					: '',
			),
			this.internalHintExpander &&
				o('ontario-hint-expander', {
					hint: this.internalHintExpander.hint,
					content: this.internalHintExpander.content,
					hintContentType: this.internalHintExpander.hintContentType,
				}),
		);
	}
	static get assetsDirs() {
		return ['./assets'];
	}
	get element() {
		return i(this);
	}
	static get watchers() {
		return {
			name: ['validateName'],
			options: ['validateOptions', 'parseOptions'],
			caption: ['updateCaptionState'],
			hintText: ['parseHintText'],
			language: ['updateLanguage'],
			hintExpander: ['parseHintExpander'],
		};
	}
};
U.style =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1>.ontario-label--heading,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1>.ontario-label--heading,h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1>.ontario-label--heading,h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;font-size:inherit;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-label{cursor:pointer;color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;line-height:1.5;margin:0 0 1rem 0;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-label{font-size:1.125rem;line-height:1.56}}.ontario-label--large{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2;max-width:26.25em}@media screen and (max-width: 40em){.ontario-label--large{font-size:1.4375rem;line-height:1.39}}h1>.ontario-label--heading{display:inline-block;margin:0}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-input:focus,.ontario-input:active{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;width:100%;padding:0.625rem 1rem;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-dropdown{background-color:#FFFFFF;background-position:right 0.5rem center;background-repeat:no-repeat;background-size:2rem;padding-right:2.25rem;cursor:pointer}.ontario-dropdown.ontario-dropdown-hint-expander--true{margin-bottom:1rem}.ontario-dropdown::-ms-expand{display:none}.ontario-dropdown option{font-weight:normal}';
const P = class {
	constructor(o) {
		t(this, o), (this.legend = void 0), (this.legendSize = 'default');
	}
	validateLegendSize() {
		return r(this.legendSize, T)
			? this.legendSize
			: (new g()
					.addDesignSystemTag()
					.addMonospaceText(` legendSize ${this.legendSize} `)
					.addRegularText('for')
					.addMonospaceText(' <ontario-fieldset> ')
					.addRegularText('is not a valid type. A default size will be applied.')
					.printMessage(),
			  'default');
	}
	validateLegend() {
		this.validateLegendText(this.legend);
	}
	validateLegendText(o) {
		s(o) &&
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' legend ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-fieldset> ')
				.addRegularText('was not provided')
				.printMessage();
	}
	componentWillLoad() {
		this.validateLegend(), this.validateLegendSize();
	}
	getClass() {
		switch (this.legendSize) {
			case 'large':
				return 'ontario-fieldset__legend ontario-fieldset__legend--large';
			case 'heading':
				return 'ontario-fieldset__legend ontario-fieldset__legend--heading';
			case 'default':
			default:
				return 'ontario-fieldset__legend';
		}
	}
	render() {
		return o(
			'div',
			{ class: 'ontario-form-group' },
			o(
				'fieldset',
				{ class: 'ontario-fieldset' },
				o(
					'legend',
					{ class: this.getClass() },
					'heading' === this.legendSize ? o('h1', null, this.legend) : this.legend,
				),
				o('slot', null),
			),
		);
	}
	static get watchers() {
		return { legendSize: ['validateLegendSize'], legend: ['validateLegend'] };
	}
};
P.style =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;font-size:inherit;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}';
const J = ({ facebook: t, twitter: i, instagram: e, youtube: a }) =>
		o(
			'ul',
			{ class: 'ontario-footer__links-container ontario-footer__links-container--social' },
			t &&
				o(
					'li',
					null,
					o(
						'a',
						{ 'class': 'ontario-footer__link', 'href': t, 'aria-label': 'Facebook' },
						o('ontario-icon-facebook', { 'colour': 'white', 'icon-width': 32 }),
					),
				),
			i &&
				o(
					'li',
					null,
					o(
						'a',
						{ 'class': 'ontario-footer__link', 'href': i, 'aria-label': 'Twitter' },
						o('ontario-icon-twitter', { 'colour': 'white', 'icon-width': 32 }),
					),
				),
			e &&
				o(
					'li',
					null,
					o(
						'a',
						{ 'class': 'ontario-footer__link', 'href': e, 'aria-label': 'Instagram' },
						o('ontario-icon-instagram', { 'colour': 'white', 'icon-width': 32 }),
					),
				),
			a &&
				o(
					'li',
					null,
					o(
						'a',
						{ 'class': 'ontario-footer__link', 'href': a, 'aria-label': 'Youtube' },
						o('ontario-icon-youtube', { 'colour': 'white', 'icon-width': 32 }),
					),
				),
		),
	Z = ({ accessibilityLink: t, privacyLink: i, contactLink: e, printerLink: a, className: n }) =>
		o(
			'div',
			{ class: `ontario-row ${null != n ? n : ''}` },
			o(
				'div',
				{ class: 'ontario-columns ontario-small-12' },
				o(
					'ul',
					{ class: 'ontario-footer__links-container ontario-footer__links-container--inline' },
					o('li', null, o('a', { class: 'ontario-footer__link', href: t.href }, t.text)),
					o('li', null, o('a', { class: 'ontario-footer__link', href: i.href }, i.text)),
					e &&
						o(
							'li',
							null,
							o('a', { class: 'ontario-footer__link', href: null == e ? void 0 : e.href }, null == e ? void 0 : e.text),
						),
				),
				o(
					'div',
					{ class: 'ontario-footer__copyright' },
					o(
						'a',
						{ class: 'ontario-footer__link', href: null == a ? void 0 : a.href },
						'© ',
						null == a ? void 0 : a.text,
						' ',
						o('span', { class: 'ontario-nbsp' }, '2012', '–', String(new Date().getFullYear()).slice(-2)),
					),
				),
			),
		),
	G = ({ content: t }) => {
		const { heading: i, headingLevel: e = 'h3', text: a, html: r, list: l, type: s = 'text' } = t;
		return o(
			n,
			null,
			i && o(e, { class: 'ontario-h5' }, i),
			'text' === s && o('p', null, a),
			'html' === s && o('div', { class: 'ontario-footer__paragraph', innerHTML: r }),
			'list' === s &&
				!!(null == l ? void 0 : l.length) &&
				o(
					'ul',
					null,
					l.map((t) => o('li', { class: 'ontario-footer__list_item', innerHTML: t })),
				),
		);
	},
	Q = ({ data: t, socialLinks: i, isThreeColLayout: e = !1, isFullWidthInMediumLayout: a = !1 }) => {
		const { title: n, content: r, button: l, headingLevel: s = 'h2' } = t;
		return o(
			'div',
			{
				class: `ontario-columns ontario-small-12 ${a ? 'ontario-medium-12' : 'ontario-medium-6'} ${
					e ? 'ontario-large-4 ontario-expanded-footer__one-third-block' : ''
				}`,
			},
			o(s, { class: 'ontario-h4' }, n),
			r.map((t) => o(G, { content: t })),
			l && o('a', { class: 'ontario-footer__button ontario-button ontario-margin-bottom-0-!', href: l.link }, l.text),
			i && o(J, Object.assign({}, i)),
		);
	},
	K = (t, i) => {
		const { topMargin: e, footerLinks: n } = t,
			r = { '--imagePath': `url(${a('./assets/footer-expanded-supergraphic-logo.svg')})` };
		return o(
			'footer',
			{ class: 'ontario-footer ontario-footer--expanded ' + (e ? '' : 'ontario-margin-top-0-!'), style: r },
			o('div', { class: 'ontario-footer__expanded-top-section' }, o('div', { class: 'ontario-row' }, i)),
			o(Z, Object.assign({}, n, { className: 'ontario-footer__expanded-bottom-section' })),
		);
	},
	X = class {
		constructor(o) {
			t(this, o),
				(this.isTwoColumnLayout = () => 'twoColumn' === this.type),
				(this.isThreeColumnLayout = () => 'threeColumn' === this.type),
				(this.language = 'en'),
				(this.type = 'default'),
				(this.footerLinks = void 0),
				(this.socialLinks = void 0),
				(this.twoColumnOptions = void 0),
				(this.threeColumnOptions = void 0),
				(this.topMargin = !0),
				(this.translations = y),
				(this.footerLinksState = void 0),
				(this.socialLinksState = void 0),
				(this.twoColumnState = void 0),
				(this.threeColumnState = void 0);
		}
		handleSetAppLanguage(o) {
			this.language = l(o);
		}
		handleHeaderLanguageToggled(o) {
			this.language = l(o);
		}
		processFooterLinks() {
			this.parseOptions(this.footerLinks);
		}
		processSocialLinks() {
			this.parseOptions(this.socialLinks);
		}
		processTwoColumnOptions() {
			this.twoColumnOptions && this.parseOptions(this.twoColumnOptions), this.verifyTwoColumnOptions();
		}
		processThreeColumnOptions() {
			this.threeColumnOptions && this.parseOptions(this.threeColumnOptions), this.verifyThreeColumnOptions();
		}
		verifyTwoColumnOptions() {
			var o, t, i, e, a;
			!this.isTwoColumnLayout() ||
				((o = this.twoColumnState) &&
					(null === (t = o.column1) || void 0 === t ? void 0 : t.title) &&
					(null === (i = o.column1) || void 0 === i ? void 0 : i.content) &&
					(null === (e = o.column2) || void 0 === e ? void 0 : e.title) &&
					(null === (a = o.column2) || void 0 === a ? void 0 : a.content)) ||
				new g()
					.addDesignSystemTag()
					.addMonospaceText(' twoColumnOptions ')
					.addRegularText('for')
					.addMonospaceText(' <ontario-footer> ')
					.addRegularText('were not fully set. Please review your values and ensure all options are set.')
					.printMessage();
		}
		verifyThreeColumnOptions() {
			var o, t, i, e, a, n, r;
			!this.isThreeColumnLayout() ||
				((o = this.threeColumnState) &&
					(null === (t = o.column1) || void 0 === t ? void 0 : t.title) &&
					(null === (i = o.column1) || void 0 === i ? void 0 : i.content) &&
					(null === (e = o.column2) || void 0 === e ? void 0 : e.title) &&
					(null === (a = o.column2) || void 0 === a ? void 0 : a.content) &&
					(null === (n = o.column3) || void 0 === n ? void 0 : n.title) &&
					(null === (r = o.column3) || void 0 === r ? void 0 : r.content)) ||
				new g()
					.addDesignSystemTag()
					.addMonospaceText(' threeColumnOptions ')
					.addRegularText('for')
					.addMonospaceText(' <ontario-footer> ')
					.addRegularText('were not fully set. Please review your values and ensure all options are set.')
					.printMessage();
		}
		parseOptions(o) {
			const t = o,
				i = 'string' == typeof t;
			if (t)
				try {
					t === this.footerLinks
						? (this.footerLinksState = i ? JSON.parse(t) : t)
						: t === this.socialLinks
						? (this.socialLinksState = i ? JSON.parse(t) : t)
						: t === this.twoColumnOptions
						? (this.twoColumnState = i ? JSON.parse(t) : t)
						: (this.threeColumnState = i ? JSON.parse(t) : t);
				} catch (o) {
					new g()
						.addDesignSystemTag()
						.addRegularText(' failed to parse props for ')
						.addMonospaceText('<ontario-footer>')
						.addRegularText(' in ')
						.addMonospaceText('parseOptions()')
						.addRegularText(' method \n ')
						.addMonospaceText(o.stack)
						.printMessage(p.Error);
				}
		}
		getBackgroundImage() {
			return { '--imagePath': `url(${a('./assets/footer-default-supergraphic-logo.svg')})` };
		}
		getFooterClasses() {
			let o = 'ontario-footer ontario-footer--default';
			return this.topMargin || (o = `${o}  ontario-margin-top-0-!`), o;
		}
		getFooterLinks() {
			var o, t, i, e, a, n, r;
			const { language: l, translations: s, footerLinksState: h } = this,
				{ accessibilityLink: d, privacyLink: m, contactLink: g, printerLink: p } = null != h ? h : {},
				c = {
					accessibilityLink: {
						href: null !== (o = null == d ? void 0 : d.href) && void 0 !== o ? o : s.accessibilityLink.link[l],
						text: null !== (t = null == d ? void 0 : d.text) && void 0 !== t ? t : s.accessibilityLink.text[l],
					},
					privacyLink: {
						href: null !== (i = null == m ? void 0 : m.href) && void 0 !== i ? i : s.privacyLink.link[l],
						text: null !== (e = null == m ? void 0 : m.text) && void 0 !== e ? e : s.privacyLink.text[l],
					},
					printerLink: {
						href: null !== (a = null == p ? void 0 : p.href) && void 0 !== a ? a : s.printerLink.link[l],
						text: null !== (n = null == p ? void 0 : p.text) && void 0 !== n ? n : s.printerLink.text[l],
					},
				};
			return (
				g && (c.contactLink = { href: g.href, text: null !== (r = g.text) && void 0 !== r ? r : s.contactUs[l] }), c
			);
		}
		componentWillLoad() {
			this.processFooterLinks(),
				this.processSocialLinks(),
				this.processTwoColumnOptions(),
				this.processThreeColumnOptions(),
				(this.language = l(this.language));
		}
		render() {
			const { socialLinksState: t, twoColumnState: i, threeColumnState: e, topMargin: a } = this,
				n = this.getFooterLinks();
			return this.isTwoColumnLayout()
				? o(K, { footerLinks: n, topMargin: a }, o(Q, { data: i.column1 }), o(Q, { data: i.column2, socialLinks: t }))
				: this.isThreeColumnLayout()
				? o(
						K,
						{ footerLinks: n, topMargin: a },
						o(Q, { data: e.column1, isThreeColLayout: !0, isFullWidthInMediumLayout: !0 }),
						o(Q, { data: e.column2, isThreeColLayout: !0 }),
						o(Q, { data: e.column3, socialLinks: t, isThreeColLayout: !0 }),
				  )
				: o('footer', { class: this.getFooterClasses(), style: this.getBackgroundImage() }, o(Z, Object.assign({}, n)));
		}
		static get assetsDirs() {
			return ['assets'];
		}
		static get watchers() {
			return {
				footerLinks: ['processFooterLinks'],
				socialLinks: ['processSocialLinks'],
				twoColumnOptions: ['processTwoColumnOptions'],
				threeColumnOptions: ['processThreeColumnOptions'],
			};
		}
	};
X.style =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}.ontario-row{margin:0 auto;max-width:72rem;width:100%}.ontario-row:before,.ontario-row:after{content:"";display:table}.ontario-row:after{clear:both}.ontario-row.ontario-row--collapse>.ontario-column,.ontario-row.ontario-row--collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-row--collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row .ontario-row{margin:0 -1rem;max-width:none;width:auto}.ontario-row .ontario-row:before,.ontario-row .ontario-row:after{content:"";display:table}.ontario-row .ontario-row:after{clear:both}.ontario-row .ontario-row.ontario-row--collapse{margin:0;max-width:none;width:auto}.ontario-row .ontario-row.ontario-row--collapse:before,.ontario-row .ontario-row.ontario-row--collapse:after{content:"";display:table}.ontario-row .ontario-row.ontario-row--collapse:after{clear:both}.ontario-column,.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;float:left}.ontario-column+.ontario-column:last-child,.ontario-column+.ontario-columns:last-child,.ontario-columns+.ontario-column:last-child,.ontario-columns+.ontario-columns:last-child{float:right}.ontario-column+.ontario-column.ontario-end,.ontario-column+.ontario-columns.ontario-end,.ontario-columns+.ontario-column.ontario-end,.ontario-columns+.ontario-columns.ontario-end{float:left}@media only screen{.ontario-small-push-0{position:relative;left:0;right:auto}.ontario-small-pull-0{position:relative;right:0;left:auto}.ontario-small-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-small-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-small-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-small-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-small-push-3{position:relative;left:25%;right:auto}.ontario-small-pull-3{position:relative;right:25%;left:auto}.ontario-small-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-small-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-small-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-small-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-small-push-6{position:relative;left:50%;right:auto}.ontario-small-pull-6{position:relative;right:50%;left:auto}.ontario-small-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-small-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-small-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-small-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-small-push-9{position:relative;left:75%;right:auto}.ontario-small-pull-9{position:relative;right:75%;left:auto}.ontario-small-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-small-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-small-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-small-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-small-1{width:8.3333333333%}.ontario-small-2{width:16.6666666667%}.ontario-small-3{width:25%}.ontario-small-4{width:33.3333333333%}.ontario-small-5{width:41.6666666667%}.ontario-small-6{width:50%}.ontario-small-7{width:58.3333333333%}.ontario-small-8{width:66.6666666667%}.ontario-small-9{width:75%}.ontario-small-10{width:83.3333333333%}.ontario-small-11{width:91.6666666667%}.ontario-small-12{width:100%}.ontario-small-offset-0{margin-left:0 !important}.ontario-small-offset-1{margin-left:8.3333333333% !important}.ontario-small-offset-2{margin-left:16.6666666667% !important}.ontario-small-offset-3{margin-left:25% !important}.ontario-small-offset-4{margin-left:33.3333333333% !important}.ontario-small-offset-5{margin-left:41.6666666667% !important}.ontario-small-offset-6{margin-left:50% !important}.ontario-small-offset-7{margin-left:58.3333333333% !important}.ontario-small-offset-8{margin-left:66.6666666667% !important}.ontario-small-offset-9{margin-left:75% !important}.ontario-small-offset-10{margin-left:83.3333333333% !important}.ontario-small-offset-11{margin-left:91.6666666667% !important}.ontario-small-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-small-centered,.ontario-columns.ontario-small-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-small-uncentered,.ontario-columns.ontario-small-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-small-centered:last-child,.ontario-columns.ontario-small-centered:last-child{float:none}.ontario-column.ontario-small-uncentered:last-child,.ontario-columns.ontario-small-uncentered:last-child{float:left}.ontario-column.ontario-small-uncentered.ontario-opposite,.ontario-columns.ontario-small-uncentered.ontario-opposite{float:right}.ontario-row.ontario-small-collapse>.ontario-column,.ontario-row.ontario-small-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-small-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-small-uncollapse>.ontario-column,.ontario-row.ontario-small-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:40.063em){.ontario-medium-push-0{position:relative;left:0;right:auto}.ontario-medium-pull-0{position:relative;right:0;left:auto}.ontario-medium-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-medium-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-medium-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-medium-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-medium-push-3{position:relative;left:25%;right:auto}.ontario-medium-pull-3{position:relative;right:25%;left:auto}.ontario-medium-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-medium-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-medium-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-medium-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-medium-push-6{position:relative;left:50%;right:auto}.ontario-medium-pull-6{position:relative;right:50%;left:auto}.ontario-medium-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-medium-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-medium-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-medium-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-medium-push-9{position:relative;left:75%;right:auto}.ontario-medium-pull-9{position:relative;right:75%;left:auto}.ontario-medium-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-medium-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-medium-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-medium-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-medium-1{width:8.3333333333%}.ontario-medium-2{width:16.6666666667%}.ontario-medium-3{width:25%}.ontario-medium-4{width:33.3333333333%}.ontario-medium-5{width:41.6666666667%}.ontario-medium-6{width:50%}.ontario-medium-7{width:58.3333333333%}.ontario-medium-8{width:66.6666666667%}.ontario-medium-9{width:75%}.ontario-medium-10{width:83.3333333333%}.ontario-medium-11{width:91.6666666667%}.ontario-medium-12{width:100%}.ontario-medium-offset-0{margin-left:0 !important}.ontario-medium-offset-1{margin-left:8.3333333333% !important}.ontario-medium-offset-2{margin-left:16.6666666667% !important}.ontario-medium-offset-3{margin-left:25% !important}.ontario-medium-offset-4{margin-left:33.3333333333% !important}.ontario-medium-offset-5{margin-left:41.6666666667% !important}.ontario-medium-offset-6{margin-left:50% !important}.ontario-medium-offset-7{margin-left:58.3333333333% !important}.ontario-medium-offset-8{margin-left:66.6666666667% !important}.ontario-medium-offset-9{margin-left:75% !important}.ontario-medium-offset-10{margin-left:83.3333333333% !important}.ontario-medium-offset-11{margin-left:91.6666666667% !important}.ontario-medium-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-medium-centered,.ontario-columns.ontario-medium-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-medium-uncentered,.ontario-columns.ontario-medium-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-medium-centered:last-child,.ontario-columns.ontario-medium-centered:last-child{float:none}.ontario-column.ontario-medium-uncentered:last-child,.ontario-columns.ontario-medium-uncentered:last-child{float:left}.ontario-column.ontario-medium-uncentered.ontario-opposite,.ontario-columns.ontario-medium-uncentered.ontario-opposite{float:right}.ontario-row.ontario-medium-collapse>.ontario-column,.ontario-row.ontario-medium-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-medium-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-medium-uncollapse>.ontario-column,.ontario-row.ontario-medium-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:73.063em){.ontario-large-push-0{position:relative;left:0;right:auto}.ontario-large-pull-0{position:relative;right:0;left:auto}.ontario-large-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-large-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-large-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-large-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-large-push-3{position:relative;left:25%;right:auto}.ontario-large-pull-3{position:relative;right:25%;left:auto}.ontario-large-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-large-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-large-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-large-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-large-push-6{position:relative;left:50%;right:auto}.ontario-large-pull-6{position:relative;right:50%;left:auto}.ontario-large-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-large-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-large-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-large-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-large-push-9{position:relative;left:75%;right:auto}.ontario-large-pull-9{position:relative;right:75%;left:auto}.ontario-large-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-large-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-large-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-large-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-large-1{width:8.3333333333%}.ontario-large-2{width:16.6666666667%}.ontario-large-3{width:25%}.ontario-large-4{width:33.3333333333%}.ontario-large-5{width:41.6666666667%}.ontario-large-6{width:50%}.ontario-large-7{width:58.3333333333%}.ontario-large-8{width:66.6666666667%}.ontario-large-9{width:75%}.ontario-large-10{width:83.3333333333%}.ontario-large-11{width:91.6666666667%}.ontario-large-12{width:100%}.ontario-large-offset-0{margin-left:0 !important}.ontario-large-offset-1{margin-left:8.3333333333% !important}.ontario-large-offset-2{margin-left:16.6666666667% !important}.ontario-large-offset-3{margin-left:25% !important}.ontario-large-offset-4{margin-left:33.3333333333% !important}.ontario-large-offset-5{margin-left:41.6666666667% !important}.ontario-large-offset-6{margin-left:50% !important}.ontario-large-offset-7{margin-left:58.3333333333% !important}.ontario-large-offset-8{margin-left:66.6666666667% !important}.ontario-large-offset-9{margin-left:75% !important}.ontario-large-offset-10{margin-left:83.3333333333% !important}.ontario-large-offset-11{margin-left:91.6666666667% !important}.ontario-large-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-large-centered,.ontario-columns.ontario-large-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-large-uncentered,.ontario-columns.ontario-large-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-large-centered:last-child,.ontario-columns.ontario-large-centered:last-child{float:none}.ontario-column.ontario-large-uncentered:last-child,.ontario-columns.ontario-large-uncentered:last-child{float:left}.ontario-column.ontario-large-uncentered.ontario-opposite,.ontario-columns.ontario-large-uncentered.ontario-opposite{float:right}.ontario-row.ontario-large-collapse>.ontario-column,.ontario-row.ontario-large-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-large-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-large-uncollapse>.ontario-column,.ontario-row.ontario-large-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-push-0{position:relative;left:0;right:auto}.ontario-pull-0{position:relative;right:0;left:auto}.ontario-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-push-3{position:relative;left:25%;right:auto}.ontario-pull-3{position:relative;right:25%;left:auto}.ontario-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-push-6{position:relative;left:50%;right:auto}.ontario-pull-6{position:relative;right:50%;left:auto}.ontario-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-push-9{position:relative;left:75%;right:auto}.ontario-pull-9{position:relative;right:75%;left:auto}.ontario-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-pull-11{position:relative;right:91.6666666667%;left:auto}}@media only screen and (min-width:96.063em){.ontario-xlarge-push-0{position:relative;left:0;right:auto}.ontario-xlarge-pull-0{position:relative;right:0;left:auto}.ontario-xlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xlarge-push-3{position:relative;left:25%;right:auto}.ontario-xlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xlarge-push-6{position:relative;left:50%;right:auto}.ontario-xlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xlarge-push-9{position:relative;left:75%;right:auto}.ontario-xlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-xlarge-1{width:8.3333333333%}.ontario-xlarge-2{width:16.6666666667%}.ontario-xlarge-3{width:25%}.ontario-xlarge-4{width:33.3333333333%}.ontario-xlarge-5{width:41.6666666667%}.ontario-xlarge-6{width:50%}.ontario-xlarge-7{width:58.3333333333%}.ontario-xlarge-8{width:66.6666666667%}.ontario-xlarge-9{width:75%}.ontario-xlarge-10{width:83.3333333333%}.ontario-xlarge-11{width:91.6666666667%}.ontario-xlarge-12{width:100%}.ontario-xlarge-offset-0{margin-left:0 !important}.ontario-xlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xlarge-offset-3{margin-left:25% !important}.ontario-xlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xlarge-offset-6{margin-left:50% !important}.ontario-xlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xlarge-offset-9{margin-left:75% !important}.ontario-xlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xlarge-centered,.ontario-columns.ontario-xlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xlarge-uncentered,.ontario-columns.ontario-xlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xlarge-centered:last-child,.ontario-columns.ontario-xlarge-centered:last-child{float:none}.ontario-column.ontario-xlarge-uncentered:last-child,.ontario-columns.ontario-xlarge-uncentered:last-child{float:left}.ontario-column.ontario-xlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xlarge-collapse>.ontario-column,.ontario-row.ontario-xlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xlarge-uncollapse>.ontario-column,.ontario-row.ontario-xlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:120.063em){.ontario-xxlarge-push-0{position:relative;left:0;right:auto}.ontario-xxlarge-pull-0{position:relative;right:0;left:auto}.ontario-xxlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xxlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xxlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xxlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xxlarge-push-3{position:relative;left:25%;right:auto}.ontario-xxlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xxlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xxlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xxlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xxlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xxlarge-push-6{position:relative;left:50%;right:auto}.ontario-xxlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xxlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xxlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xxlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xxlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xxlarge-push-9{position:relative;left:75%;right:auto}.ontario-xxlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xxlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xxlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xxlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xxlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-xxlarge-1{width:8.3333333333%}.ontario-xxlarge-2{width:16.6666666667%}.ontario-xxlarge-3{width:25%}.ontario-xxlarge-4{width:33.3333333333%}.ontario-xxlarge-5{width:41.6666666667%}.ontario-xxlarge-6{width:50%}.ontario-xxlarge-7{width:58.3333333333%}.ontario-xxlarge-8{width:66.6666666667%}.ontario-xxlarge-9{width:75%}.ontario-xxlarge-10{width:83.3333333333%}.ontario-xxlarge-11{width:91.6666666667%}.ontario-xxlarge-12{width:100%}.ontario-xxlarge-offset-0{margin-left:0 !important}.ontario-xxlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xxlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xxlarge-offset-3{margin-left:25% !important}.ontario-xxlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xxlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xxlarge-offset-6{margin-left:50% !important}.ontario-xxlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xxlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xxlarge-offset-9{margin-left:75% !important}.ontario-xxlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xxlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xxlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xxlarge-centered,.ontario-columns.ontario-xxlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xxlarge-uncentered,.ontario-columns.ontario-xxlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xxlarge-centered:last-child,.ontario-columns.ontario-xxlarge-centered:last-child{float:none}.ontario-column.ontario-xxlarge-uncentered:last-child,.ontario-columns.ontario-xxlarge-uncentered:last-child{float:left}.ontario-column.ontario-xxlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xxlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xxlarge-collapse>.ontario-column,.ontario-row.ontario-xxlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xxlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xxlarge-uncollapse>.ontario-column,.ontario-row.ontario-xxlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-margin-top-0-\\!{margin-top:0}.ontario-padding-top-0-\\!{padding-top:0}.ontario-margin-bottom-0-\\!{margin-bottom:0}.ontario-padding-bottom-0-\\!{padding-bottom:0}.ontario-margin-left-0-\\!{margin-left:0}.ontario-padding-left-0-\\!{padding-left:0}.ontario-margin-right-0-\\!{margin-right:0}.ontario-padding-right-0-\\!{padding-right:0}.ontario-margin-top-4-\\!{margin-top:0.25rem}.ontario-padding-top-4-\\!{padding-top:0.25rem}.ontario-margin-bottom-4-\\!{margin-bottom:0.25rem}.ontario-padding-bottom-4-\\!{padding-bottom:0.25rem}.ontario-margin-left-4-\\!{margin-left:0.25rem}.ontario-padding-left-4-\\!{padding-left:0.25rem}.ontario-margin-right-4-\\!{margin-right:0.25rem}.ontario-padding-right-4-\\!{padding-right:0.25rem}.ontario-margin-top-8-\\!{margin-top:0.5rem}.ontario-padding-top-8-\\!{padding-top:0.5rem}.ontario-margin-bottom-8-\\!{margin-bottom:0.5rem}.ontario-padding-bottom-8-\\!{padding-bottom:0.5rem}.ontario-margin-left-8-\\!{margin-left:0.5rem}.ontario-padding-left-8-\\!{padding-left:0.5rem}.ontario-margin-right-8-\\!{margin-right:0.5rem}.ontario-padding-right-8-\\!{padding-right:0.5rem}.ontario-margin-top-12-\\!{margin-top:0.75rem}.ontario-padding-top-12-\\!{padding-top:0.75rem}.ontario-margin-bottom-12-\\!{margin-bottom:0.75rem}.ontario-padding-bottom-12-\\!{padding-bottom:0.75rem}.ontario-margin-left-12-\\!{margin-left:0.75rem}.ontario-padding-left-12-\\!{padding-left:0.75rem}.ontario-margin-right-12-\\!{margin-right:0.75rem}.ontario-padding-right-12-\\!{padding-right:0.75rem}.ontario-margin-top-16-\\!{margin-top:1rem}.ontario-padding-top-16-\\!{padding-top:1rem}.ontario-margin-bottom-16-\\!{margin-bottom:1rem}.ontario-padding-bottom-16-\\!{padding-bottom:1rem}.ontario-margin-left-16-\\!{margin-left:1rem}.ontario-padding-left-16-\\!{padding-left:1rem}.ontario-margin-right-16-\\!{margin-right:1rem}.ontario-padding-right-16-\\!{padding-right:1rem}.ontario-margin-top-24-\\!{margin-top:1.5rem}.ontario-padding-top-24-\\!{padding-top:1.5rem}.ontario-margin-bottom-24-\\!{margin-bottom:1.5rem}.ontario-padding-bottom-24-\\!{padding-bottom:1.5rem}.ontario-margin-left-24-\\!{margin-left:1.5rem}.ontario-padding-left-24-\\!{padding-left:1.5rem}.ontario-margin-right-24-\\!{margin-right:1.5rem}.ontario-padding-right-24-\\!{padding-right:1.5rem}.ontario-margin-top-32-\\!{margin-top:2rem}.ontario-padding-top-32-\\!{padding-top:2rem}.ontario-margin-bottom-32-\\!{margin-bottom:2rem}.ontario-padding-bottom-32-\\!{padding-bottom:2rem}.ontario-margin-left-32-\\!{margin-left:2rem}.ontario-padding-left-32-\\!{padding-left:2rem}.ontario-margin-right-32-\\!{margin-right:2rem}.ontario-padding-right-32-\\!{padding-right:2rem}.ontario-margin-top-40-\\!{margin-top:2.5rem}.ontario-padding-top-40-\\!{padding-top:2.5rem}.ontario-margin-bottom-40-\\!{margin-bottom:2.5rem}.ontario-padding-bottom-40-\\!{padding-bottom:2.5rem}.ontario-margin-left-40-\\!{margin-left:2.5rem}.ontario-padding-left-40-\\!{padding-left:2.5rem}.ontario-margin-right-40-\\!{margin-right:2.5rem}.ontario-padding-right-40-\\!{padding-right:2.5rem}.ontario-margin-top-48-\\!{margin-top:3rem}.ontario-padding-top-48-\\!{padding-top:3rem}.ontario-margin-bottom-48-\\!{margin-bottom:3rem}.ontario-padding-bottom-48-\\!{padding-bottom:3rem}.ontario-margin-left-48-\\!{margin-left:3rem}.ontario-padding-left-48-\\!{padding-left:3rem}.ontario-margin-right-48-\\!{margin-right:3rem}.ontario-padding-right-48-\\!{padding-right:3rem}.ontario-margin-top-64-\\!{margin-top:4rem}.ontario-padding-top-64-\\!{padding-top:4rem}.ontario-margin-bottom-64-\\!{margin-bottom:4rem}.ontario-padding-bottom-64-\\!{padding-bottom:4rem}.ontario-margin-left-64-\\!{margin-left:4rem}.ontario-padding-left-64-\\!{padding-left:4rem}.ontario-margin-right-64-\\!{margin-right:4rem}.ontario-padding-right-64-\\!{padding-right:4rem}.ontario-padding-top-0-\\!{padding-top:0 !important}.ontario-padding-bottom-0-\\!{padding-bottom:0 !important}.ontario-padding-right-0-\\!{padding-right:0 !important}.ontario-padding-left-0-\\!{padding-left:0 !important}.ontario-padding-top-4-\\!{padding-top:0.25rem !important}.ontario-padding-bottom-4-\\!{padding-bottom:0.25rem !important}.ontario-padding-right-4-\\!{padding-right:0.25rem !important}.ontario-padding-left-4-\\!{padding-left:0.25rem !important}.ontario-padding-top-8-\\!{padding-top:0.5rem !important}.ontario-padding-bottom-8-\\!{padding-bottom:0.5rem !important}.ontario-padding-right-8-\\!{padding-right:0.5rem !important}.ontario-padding-left-8-\\!{padding-left:0.5rem !important}.ontario-padding-top-12-\\!{padding-top:0.75rem !important}.ontario-padding-bottom-12-\\!{padding-bottom:0.75rem !important}.ontario-padding-right-12-\\!{padding-right:0.75rem !important}.ontario-padding-left-12-\\!{padding-left:0.75rem !important}.ontario-padding-top-16-\\!{padding-top:1rem !important}.ontario-padding-bottom-16-\\!{padding-bottom:1rem !important}.ontario-padding-right-16-\\!{padding-right:1rem !important}.ontario-padding-left-16-\\!{padding-left:1rem !important}.ontario-padding-top-24-\\!{padding-top:1.5rem !important}.ontario-padding-bottom-24-\\!{padding-bottom:1.5rem !important}.ontario-padding-right-24-\\!{padding-right:1.5rem !important}.ontario-padding-left-24-\\!{padding-left:1.5rem !important}.ontario-padding-top-32-\\!{padding-top:2rem !important}.ontario-padding-bottom-32-\\!{padding-bottom:2rem !important}.ontario-padding-right-32-\\!{padding-right:2rem !important}.ontario-padding-left-32-\\!{padding-left:2rem !important}.ontario-padding-top-40-\\!{padding-top:2.5rem !important}.ontario-padding-bottom-40-\\!{padding-bottom:2.5rem !important}.ontario-padding-right-40-\\!{padding-right:2.5rem !important}.ontario-padding-left-40-\\!{padding-left:2.5rem !important}.ontario-padding-top-48-\\!{padding-top:3rem !important}.ontario-padding-bottom-48-\\!{padding-bottom:3rem !important}.ontario-padding-right-48-\\!{padding-right:3rem !important}.ontario-padding-left-48-\\!{padding-left:3rem !important}.ontario-padding-top-64-\\!{padding-top:4rem !important}.ontario-padding-bottom-64-\\!{padding-bottom:4rem !important}.ontario-padding-right-64-\\!{padding-right:4rem !important}.ontario-padding-left-64-\\!{padding-left:4rem !important}.ontario-padding-top-80-\\!{padding-top:5rem !important}.ontario-padding-bottom-80-\\!{padding-bottom:5rem !important}.ontario-padding-right-80-\\!{padding-right:5rem !important}.ontario-padding-left-80-\\!{padding-left:5rem !important}.ontario-margin-top-0-\\!{margin-top:0 !important}.ontario-margin-bottom-0-\\!{margin-bottom:0 !important}.ontario-margin-right-0-\\!{margin-right:0 !important}.ontario-margin-left-0-\\!{margin-left:0 !important}.ontario-margin-top-4-\\!{margin-top:0.25rem !important}.ontario-margin-bottom-4-\\!{margin-bottom:0.25rem !important}.ontario-margin-right-4-\\!{margin-right:0.25rem !important}.ontario-margin-left-4-\\!{margin-left:0.25rem !important}.ontario-margin-top-8-\\!{margin-top:0.5rem !important}.ontario-margin-bottom-8-\\!{margin-bottom:0.5rem !important}.ontario-margin-right-8-\\!{margin-right:0.5rem !important}.ontario-margin-left-8-\\!{margin-left:0.5rem !important}.ontario-margin-top-12-\\!{margin-top:0.75rem !important}.ontario-margin-bottom-12-\\!{margin-bottom:0.75rem !important}.ontario-margin-right-12-\\!{margin-right:0.75rem !important}.ontario-margin-left-12-\\!{margin-left:0.75rem !important}.ontario-margin-top-16-\\!{margin-top:1rem !important}.ontario-margin-bottom-16-\\!{margin-bottom:1rem !important}.ontario-margin-right-16-\\!{margin-right:1rem !important}.ontario-margin-left-16-\\!{margin-left:1rem !important}.ontario-margin-top-24-\\!{margin-top:1.5rem !important}.ontario-margin-bottom-24-\\!{margin-bottom:1.5rem !important}.ontario-margin-right-24-\\!{margin-right:1.5rem !important}.ontario-margin-left-24-\\!{margin-left:1.5rem !important}.ontario-margin-top-32-\\!{margin-top:2rem !important}.ontario-margin-bottom-32-\\!{margin-bottom:2rem !important}.ontario-margin-right-32-\\!{margin-right:2rem !important}.ontario-margin-left-32-\\!{margin-left:2rem !important}.ontario-margin-top-40-\\!{margin-top:2.5rem !important}.ontario-margin-bottom-40-\\!{margin-bottom:2.5rem !important}.ontario-margin-right-40-\\!{margin-right:2.5rem !important}.ontario-margin-left-40-\\!{margin-left:2.5rem !important}.ontario-margin-top-48-\\!{margin-top:3rem !important}.ontario-margin-bottom-48-\\!{margin-bottom:3rem !important}.ontario-margin-right-48-\\!{margin-right:3rem !important}.ontario-margin-left-48-\\!{margin-left:3rem !important}.ontario-margin-top-64-\\!{margin-top:4rem !important}.ontario-margin-bottom-64-\\!{margin-bottom:4rem !important}.ontario-margin-right-64-\\!{margin-right:4rem !important}.ontario-margin-left-64-\\!{margin-left:4rem !important}.ontario-margin-top-80-\\!{margin-top:5rem !important}.ontario-margin-bottom-80-\\!{margin-bottom:5rem !important}.ontario-margin-right-80-\\!{margin-right:5rem !important}.ontario-margin-left-80-\\!{margin-left:5rem !important}.ontario-footer{color:#FFFFFF;margin-top:5rem;padding:4rem 0}.ontario-footer .ontario-columns *:last-child{margin-bottom:0}@media screen and (max-width: 73em){.ontario-footer .ontario-columns{margin-bottom:3rem}.ontario-footer .ontario-columns:last-of-type{margin-bottom:0}}.ontario-footer__links-container{list-style:none;margin:0 0 1rem 0}@media screen and (min-width: 73em){.ontario-footer__links-container{margin-bottom:0.5rem}}.ontario-footer__links-container--inline{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap}@media screen and (min-width: 40em){.ontario-footer__links-container--inline{-ms-flex-direction:row;flex-direction:row}}.ontario-footer__links-container--two-column-list{-webkit-column-count:1;-moz-column-count:1;column-count:1;display:block;margin:0}@media screen and (min-width: 40em){.ontario-footer__links-container--two-column-list{-webkit-column-count:2;-moz-column-count:2;column-count:2}.ontario-footer__links-container--two-column-list .ontario-footer__link{padding:0;margin:0 1rem 1rem 0}}.ontario-footer__links-container li{padding:0.25rem 0}.ontario-footer__link{color:#FFFFFF;display:inline-block;padding:0.5rem 0;margin:0;text-decoration:underline}.ontario-footer__link:hover,.ontario-footer__link:focus{text-decoration:none}.ontario-footer__link:visited,.ontario-footer__link:active,.ontario-footer__link:hover{color:#FFFFFF}@media screen and (min-width: 40em){.ontario-footer__link{padding:0;margin:0 3rem 1rem 0}}.ontario-footer__copyright a{margin:0}.ontario-footer__links-container--social{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.ontario-footer__links-container--social .ontario-footer__link{background:transparent;border-radius:45%;margin:0 1rem 0.75rem 0;padding:0;outline:none;height:3.5rem;width:3.5rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.ontario-footer__links-container--social .ontario-footer__link:hover,.ontario-footer__links-container--social .ontario-footer__link:focus{background-color:black}.ontario-footer__links-container--social .ontario-footer__link:hover .ontario-icon,.ontario-footer__links-container--social .ontario-footer__link:focus .ontario-icon{fill:#FFFFFF}@media screen and (min-width: 40em){.ontario-footer__links-container--social .ontario-footer__link{height:3rem;width:3rem}}.ontario-footer__links-container--social .ontario-footer__link .ontario-icon{fill:#FFFFFF;width:36px;height:36px}@media screen and (min-width: 40em){.ontario-footer__links-container--social .ontario-footer__link .ontario-icon{width:32px;height:32px}}.ontario-footer__paragraph{max-width:48rem;width:100%;margin-bottom:1.5rem}.ontario-footer p a,.ontario-footer__paragraph a,.ontario-footer__list_item a{color:#FFFFFF;font-weight:600}.ontario-footer p a:visited,.ontario-footer__paragraph a:visited,.ontario-footer__list_item a:visited{color:#FFFFFF}.ontario-footer p a:active,.ontario-footer__paragraph a:active,.ontario-footer__list_item a:active{color:#e6e6e6}.ontario-footer p a:focus,.ontario-footer p a:hover,.ontario-footer__paragraph a:focus,.ontario-footer__paragraph a:hover,.ontario-footer__list_item a:focus,.ontario-footer__list_item a:hover{text-decoration:none}.ontario-button.ontario-footer__button{background-color:#1a1a1a;border:2px solid #FFFFFF;border-color:#FFFFFF;color:#FFFFFF;margin-bottom:2rem;border-radius:0.25rem;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;display:inline-block;font-size:1.125rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:600;line-height:1.5555555556;margin:0 1.75rem 1.5rem 0;min-width:10rem;padding:0.625rem 1.5rem;text-align:center;text-decoration:none;cursor:pointer}.ontario-button.ontario-footer__button:hover{background-color:#4d4d4d}.ontario-button.ontario-footer__button:focus,.ontario-button.ontario-footer__button:active{background-color:#666666;-webkit-box-shadow:0 0 0 0.25rem #009ADB;box-shadow:0 0 0 0.25rem #009ADB;outline:0.25rem solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}.ontario-footer__button+.ontario-footer__links-container{margin-top:1.5rem}.ontario-footer--default,.ontario-footer__expanded-top-section{position:relative}.ontario-footer--default:before,.ontario-footer__expanded-top-section:before{background-color:#333333;background-repeat:no-repeat;content:"";position:absolute;top:0;left:0;width:100%;height:100%}.ontario-footer--default:before{background-image:var(--imagePath, url(""))}.ontario-footer__expanded-top-section:before{background-image:var(--imagePath, url(""))}.ontario-footer--default{background-color:#1a1a1a;border-bottom:0.25rem solid #4d4d4d}.ontario-footer--default:before{background-size:112.5rem;background-position:calc(50vw - 73.5rem) -64rem}@media screen and (min-width: 40em){.ontario-footer--default:before{background-size:180rem;background-position:calc(50vw - 120rem) -106rem}}@media screen and (min-width: 73em){.ontario-footer--default:before{background-size:275rem;background-position:calc(50vw - 187rem) -160rem}}.ontario-footer--expanded{padding-top:0;background-color:#1a1a1a;border-bottom:0.25rem solid #4d4d4d}.ontario-footer__expanded-top-section{background-color:#262626;padding:4rem 0}.ontario-footer__expanded-top-section:before{background-size:165rem;background-position:calc(50vw - 125rem) -64rem}@media screen and (min-width: 40em){.ontario-footer__expanded-top-section:before{background-size:250rem;background-position:calc(50vw - 195rem) -106rem}}@media screen and (min-width: 73em){.ontario-footer__expanded-top-section:before{background-size:305rem;background-position:calc(50vw - 222rem) -160rem}}.ontario-footer__expanded-top-section .ontario-footer__link{text-decoration:underline}.ontario-footer__expanded-top-section .ontario-footer__link:hover,.ontario-footer__expanded-top-section .ontario-footer__link:focus{text-decoration:none}.ontario-footer__expanded-top-section .ontario-footer__link:active{color:#e6e6e6}.ontario-footer__expanded-top-section ul{margin-bottom:0}.ontario-expanded-footer__one-third-block{margin-bottom:0}.ontario-expanded-footer__one-third-block:first-of-type,.ontario-expanded-footer__one-third-block:nth-child(2){margin-bottom:3rem}@media screen and (min-width: 40em){.ontario-expanded-footer__one-third-block{margin-bottom:0}.ontario-expanded-footer__one-third-block:first-of-type{margin-bottom:3rem}.ontario-expanded-footer__one-third-block:nth-child(2){margin-bottom:0}}@media screen and (min-width: 73em){.ontario-expanded-footer__one-third-block{margin-bottom:0}.ontario-expanded-footer__one-third-block:first-of-type{margin-bottom:0}}.ontario-footer__expanded-bottom-section{background-color:#1a1a1a;padding-top:4rem}';
const oo =
		'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 24 24"><path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6L19 6.4z" fill="#ffffff"/></svg>\n',
	to = [
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
	],
	io = class {
		constructor(o) {
			t(this, o),
				(this.handleMenuToggle = () => {
					(this.menuToggle = !this.menuToggle), (this.searchToggle = void 0);
				}),
				(this.handleSearchToggle = () => {
					this.searchToggle = !this.searchToggle;
				}),
				(this.handleSubmit = (o) => {
					o.preventDefault(),
						(location.href = `https://www.ontario.ca/search/search-results?query=${o.target[0].value}`);
				}),
				(this.trapMenuFocus = (o) => {
					var t;
					let i = null === (t = o.target) || void 0 === t ? void 0 : t.dataset.type;
					'app-desktop' === i
						? this.menuButtonDesktop.focus()
						: 'app-tablet' === i
						? this.menuButtonTablet.focus()
						: 'app-mobile' === i
						? this.menuButtonMobile.focus()
						: this.menuButton.focus();
				}),
				(this.type = 'application'),
				(this.applicationHeaderInfo = void 0),
				(this.menuItems = void 0),
				(this.disableDynamicMenu = !1),
				(this.languageToggleOptions = void 0),
				(this.customLanguageToggle = void 0),
				(this.language = 'en'),
				(this.applicationHeaderInfoState = void 0),
				(this.menuItemState = void 0),
				(this.isDynamicMenu = !1),
				(this.languageState = void 0),
				(this.menuToggle = !1),
				(this.searchToggle = !1);
		}
		parseApplicationHeaderInfo() {
			const o = this.applicationHeaderInfo;
			o && (this.applicationHeaderInfoState = 'string' == typeof o ? JSON.parse(o) : o);
		}
		parseMenuItems() {
			Array.isArray(this.menuItems) || 'string' != typeof this.menuItems
				? Array.isArray(this.menuItems) && 'application' === this.type
					? ((this.menuItemState = this.menuItems), (this.isDynamicMenu = !1))
					: ((this.menuItemState = to), (this.isDynamicMenu = !1))
				: ((this.menuItemState = JSON.parse(this.menuItems)), (this.isDynamicMenu = !1));
		}
		parseLanguage() {
			const o = this.languageToggleOptions;
			o && (this.languageState = 'string' == typeof o ? JSON.parse(o) : o);
		}
		handleClick(o) {
			o.composedPath().includes(this.menuButton) ||
				o.composedPath().includes(this.menuButtonDesktop) ||
				o.composedPath().includes(this.menuButtonTablet) ||
				o.composedPath().includes(this.menuButtonMobile) ||
				(this.menuToggle && (this.menuToggle = !this.menuToggle));
		}
		handleSetAppLanguage(o) {
			this.language = l(o);
		}
		async fetchOntarioMenu() {
			if (!this.isDynamicMenu) {
				const o = process.env.ONTARIO_HEADER_API_URL,
					t = await fetch(o)
						.then((o) => o.json())
						.then((o) => o.linkset[0].item)
						.catch(() => (console.error('Unable to retrieve data from Ontario Menu API'), []));
				if (t.length > 0) {
					const o = t.map((o) => ({ href: o.href, title: o.title }));
					(this.menuItemState = o), (this.isDynamicMenu = !0);
				}
			}
		}
		generateMenuItem(t, i, e, a, n, r, l) {
			return o(
				'li',
				{ class: n },
				o(
					'a',
					{
						'class': !0 === e ? 'ontario-link--active' : '',
						'href': t,
						'onClick': r,
						'onBlur': l ? this.trapMenuFocus : void 0,
						'data-type': a,
					},
					i,
				),
			);
		}
		renderMenuButton(t) {
			return o(
				'button',
				{
					'class':
						'desktop' === t
							? 'ontario-header__menu-toggler ontario-header-button ontario-header-button--with-outline ontario-show-for-large'
							: 'tablet' === t
							? 'ontario-header__menu-toggler ontario-header-button ontario-header-button--with-outline ontario-hide-for-small ontario-show-for-medium ontario-hide-for-large'
							: 'mobile' === t
							? 'ontario-header__menu-toggler ontario-header-button ontario-header-button--with-outline ontario-show-for-small-only'
							: 'ontario-header__menu-toggler ontario-header-button ontario-header-button--with-outline',
					'id': 'ontario' === this.type ? 'ontario-header-menu-toggler' : 'ontario-application-header-menu-toggler',
					'aria-controls': 'ontario-navigation',
					'aria-label': this.menuToggle ? 'close menu' : 'open menu',
					'onClick': this.handleMenuToggle,
					'type': 'button',
					'ref':
						'desktop' === t
							? (o) => (this.menuButtonDesktop = o)
							: 'tablet' === t
							? (o) => (this.menuButtonTablet = o)
							: 'mobile' === t
							? (o) => (this.menuButtonMobile = o)
							: (o) => (this.menuButton = o),
				},
				o('span', {
					class: 'ontario-header__icon-container',
					innerHTML: this.menuToggle
						? oo
						: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="#ffffff"/></svg>',
				}),
				o('span', null, 'Menu'),
			);
		}
		generateNavigationLinks(o, t, i, e) {
			return this.generateMenuItem(
				o.href,
				o.title,
				o.linkIsActive,
				e,
				'',
				o.onClickHandler,
				t + 1 === (i ? this.menuItemState.length - i : this.menuItemState.length),
			);
		}
		onEscapePressed(o) {
			'Escape' === o.key && (o.path[0].value = '');
		}
		componentWillLoad() {
			this.parseApplicationHeaderInfo(), this.parseMenuItems(), this.parseLanguage();
		}
		componentDidRender() {
			!1 === this.disableDynamicMenu && 'ontario' === this.type && this.fetchOntarioMenu();
		}
		componentDidUpdate() {
			'ontario' == this.type &&
				(!0 === this.searchToggle && this.searchBar.focus(),
				!1 === this.searchToggle && this.searchButton.focus(),
				!1 === this.menuToggle && this.menuButton.blur());
		}
		render() {
			var t, i, e, n, r, l, s, h, d, m, g, p, c;
			return o(
				'div',
				null,
				'ontario' == this.type
					? o(
							'div',
							{ class: 'ontario-header__container', ref: (o) => (this.header = o) },
							o(
								'header',
								{
									class: this.searchToggle ? 'ontario-header ontario-header--search-open' : 'ontario-header',
									id: 'ontario-header',
								},
								o(
									'div',
									{ class: 'ontario-row' },
									o(
										'div',
										{
											class:
												'ontario-header__logo-container ontario-columns ontario-small-2 ontario-medium-4 ontario-large-3',
										},
										o(
											'a',
											{ href: 'https://www.ontario.ca/page/government-ontario' },
											o('img', {
												class: 'ontario-show-for-medium',
												src: a('./assets/ontario-logo--desktop.svg'),
												alt: 'Government of Ontario',
											}),
											o('img', {
												class: 'ontario-show-for-small-only',
												src: a('./assets/ontario-logo--mobile.svg'),
												alt: 'Government of Ontario',
											}),
										),
									),
									o(
										'form',
										{
											name: 'searchForm',
											id: 'ontario-search-form-container',
											onSubmit: this.handleSubmit,
											class:
												'ontario-header__search-container ontario-columns ontario-small-10 ontario-medium-offset-3 ontario-medium-6 ontario-large-offset-0 ontario-large-6',
											novalidate: !0,
										},
										o('label', { htmlFor: 'ontario-search-input-field', class: 'ontario-show-for-sr' }, 'Search'),
										o(N, {
											'type': 'text',
											'name': 'search',
											'id': 'ontario-search-input-field',
											'autoComplete': 'off',
											'aria-autocomplete': 'none',
											'className': 'ontario-input ontario-header__search-input',
											'required': !0,
											'ref': (o) => (this.searchBar = o),
											'onKeyDown': this.onEscapePressed,
										}),
										o(N, {
											'className': 'ontario-header__search-reset',
											'id': 'ontario-search-reset',
											'type': 'reset',
											'value': '',
											'aria-label': 'Clear field',
										}),
										o(
											'button',
											{ class: 'ontario-header__search-submit', id: 'ontario-search-submit', type: 'submit' },
											o('span', { class: 'ontario-show-for-sr' }, 'Submit'),
											o('span', {
												class: 'ontario-header__icon-container',
												innerHTML:
													'<svg class="svg-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="none"><path d="M15.5 14h-.8l-.28-.27A6.47 6.47 0 0 0 16 9.5a6.5 6.5 0 1 0-13 0A6.5 6.5 0 0 0 9.5 16a6.47 6.47 0 0 0 4.23-1.57l.27.28v.8l5 5 1.5-1.5-5-5zm-6 0C7 14 5 12 5 9.5S7 5 9.5 5 14 7 14 9.5 12 14 9.5 14z"/></svg>\n',
											}),
										),
									),
									o(
										'div',
										{
											class:
												'ontario-header__nav-right-container ontario-columns ontario-small-10 ontario-medium-8 ontario-large-3',
										},
										o('ontario-language-toggle', {
											url:
												'en' === this.language
													? null === (t = this.languageState) || void 0 === t
														? void 0
														: t.frenchLink
													: null === (i = this.languageState) || void 0 === i
													? void 0
													: i.englishLink,
											size: 'default',
											customLanguageToggle: this.customLanguageToggle,
										}),
										o(
											'button',
											{
												'class':
													'ontario-header__search-toggler ontario-header-button ontario-header-button--without-outline ontario-hide-for-large',
												'id': 'ontario-header-search-toggler',
												'aria-controls': 'ontario-search-form-container',
												'onClick': this.handleSearchToggle,
												'ref': (o) => (this.searchButton = o),
											},
											o('span', {
												class: 'ontario-header__icon-container',
												innerHTML:
													'<svg class="svg-icon" role="img" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#ffffff"><path d="M15.5 14h-.8l-.28-.27A6.47 6.47 0 0 0 16 9.5a6.5 6.5 0 1 0-13 0A6.5 6.5 0 0 0 9.5 16a6.47 6.47 0 0 0 4.23-1.57l.27.28v.8l5 5 1.5-1.5-5-5zm-6 0C7 14 5 12 5 9.5S7 5 9.5 5 14 7 14 9.5 12 14 9.5 14z"/></svg>\n',
											}),
											o('span', { class: 'ontario-show-for-medium ontario-show' }, 'Search'),
										),
										this.renderMenuButton('ontario-header'),
									),
									o(
										'div',
										{
											class: 'ontario-header__search-close-container ontario-columns ontario-small-2 ontario-medium-3',
										},
										o(
											'button',
											{
												'class':
													'ontario-header__search-close ontario-header-button ontario-header-button--without-outline',
												'id': 'ontario-header-search-close',
												'aria-label': 'close search bar',
												'type': 'button',
												'onClick': this.handleSearchToggle,
											},
											o('span', { 'aria-hidden': `${!this.searchToggle}` }, 'close'),
											o('span', { class: 'ontario-header__icon-container', innerHTML: oo }),
										),
									),
								),
							),
							o(
								'nav',
								{
									role: 'navigation',
									class: this.menuToggle ? 'ontario-navigation ontario-navigation--open' : 'ontario-navigation',
									id: 'ontario-navigation',
								},
								o(
									'div',
									{ class: 'ontario-navigation__container' },
									o(
										'ul',
										null,
										null === (e = this.menuItemState) || void 0 === e
											? void 0
											: e.map((o, t) => {
													const i = t + 1 === this.menuItemState.length,
														e = o.title.replace(/\s+/g, '-').toLowerCase(),
														a = window.location.pathname.includes(e);
													return this.isDynamicMenu
														? this.generateMenuItem(
																o.href,
																o.title,
																a,
																'ontario-header',
																'ontario-header-navigation__menu-item',
																void 0,
																i,
														  )
														: this.generateMenuItem(
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
					  )
					: o(
							'div',
							{
								class: 'ontario-application-header-container',
								id: 'ontario-application-header',
								ref: (o) => (this.header = o),
							},
							o(
								'header',
								{ class: 'ontario-application-header', id: 'ontario-header' },
								o(
									'div',
									{ class: 'ontario-row' },
									o(
										'div',
										{ class: 'ontario-columns ontario-small-6 ontario-application-header__logo' },
										o(
											'a',
											{ href: 'https://www.ontario.ca/page/government-ontario' },
											o('img', {
												src: a('./assets/ontario-logo-application-header.svg'),
												alt: 'Government of Ontario',
											}),
										),
									),
									o(
										'div',
										{ class: 'ontario-columns ontario-small-6 ontario-application-header__lang-toggle' },
										o('ontario-language-toggle', {
											size: 'small',
											url:
												'en' === this.language
													? null === (n = this.languageState) || void 0 === n
														? void 0
														: n.frenchLink
													: null === (r = this.languageState) || void 0 === r
													? void 0
													: r.englishLink,
											customLanguageToggle: this.customLanguageToggle,
										}),
									),
								),
							),
							o(
								'div',
								{ class: 'ontario-application-subheader-menu__container' },
								o(
									'section',
									{ class: 'ontario-application-subheader' },
									o(
										'div',
										{ class: 'ontario-row' },
										o(
											'div',
											{ class: 'ontario-columns ontario-small-12 ontario-application-subheader__container' },
											o(
												'p',
												{ class: 'ontario-application-subheader__heading' },
												o(
													'a',
													{ href: null === (l = this.applicationHeaderInfoState) || void 0 === l ? void 0 : l.href },
													null === (s = this.applicationHeaderInfoState) || void 0 === s ? void 0 : s.title,
												),
											),
											o(
												'div',
												{ class: 'ontario-application-subheader__menu-container' },
												this.applicationHeaderInfoState.maxSubheaderDesktopLinks &&
													o(
														'ul',
														{ class: 'ontario-application-subheader__menu ontario-show-for-large' },
														null === (h = this.menuItemState) || void 0 === h
															? void 0
															: h
																	.slice(0, this.applicationHeaderInfoState.maxSubheaderDesktopLinks)
																	.map((o) =>
																		this.generateMenuItem(
																			o.href,
																			o.title,
																			o.linkIsActive,
																			'app-desktop',
																			'',
																			o.onClickHandler,
																		),
																	),
													),
												this.applicationHeaderInfoState.maxSubheaderTabletLinks &&
													o(
														'ul',
														{
															class:
																'ontario-application-subheader__menu ontario-hide-for-small ontario-show-for-medium ontario-hide-for-large',
														},
														null === (d = this.menuItemState) || void 0 === d
															? void 0
															: d
																	.slice(0, this.applicationHeaderInfoState.maxSubheaderTabletLinks)
																	.map((o) =>
																		this.generateMenuItem(
																			o.href,
																			o.title,
																			o.linkIsActive,
																			'app-tablet',
																			'',
																			o.onClickHandler,
																		),
																	),
													),
												this.applicationHeaderInfoState.maxSubheaderMobileLinks &&
													o(
														'ul',
														{ class: 'ontario-application-subheader__menu ontario-show-for-small-only' },
														null === (m = this.menuItemState) || void 0 === m
															? void 0
															: m
																	.slice(0, this.applicationHeaderInfoState.maxSubheaderMobileLinks)
																	.map((o) =>
																		this.generateMenuItem(
																			o.href,
																			o.title,
																			o.linkIsActive,
																			'app-mobile',
																			'',
																			o.onClickHandler,
																		),
																	),
													),
												void 0 !== this.menuItemState &&
													this.applicationHeaderInfoState.maxSubheaderDesktopLinks !== this.menuItemState.length &&
													this.renderMenuButton('desktop'),
												void 0 !== this.menuItemState &&
													this.applicationHeaderInfoState.maxSubheaderTabletLinks !== this.menuItemState.length &&
													this.renderMenuButton('tablet'),
												void 0 !== this.menuItemState &&
													this.applicationHeaderInfoState.maxSubheaderMobileLinks !== this.menuItemState.length &&
													this.renderMenuButton('mobile'),
											),
										),
									),
								),
								o(
									'nav',
									{
										role: 'navigation',
										class:
											!0 === this.menuToggle
												? 'ontario-application-navigation ontario-navigation--open'
												: 'ontario-application-navigation',
										id: 'ontario-application-navigation',
									},
									o(
										'div',
										{ class: 'ontario-application-navigation__container' },
										o(
											'ul',
											{ class: 'ontario-show-for-large' },
											null === (g = this.menuItemState) || void 0 === g
												? void 0
												: g
														.slice(this.applicationHeaderInfoState.maxSubheaderDesktopLinks, this.menuItemState.length)
														.map((o, t) =>
															this.generateNavigationLinks(
																o,
																t,
																this.applicationHeaderInfoState.maxSubheaderDesktopLinks,
																'app-desktop',
															),
														),
										),
										o(
											'ul',
											{ class: 'ontario-show-for-medium ontario-hide-for-small ontario-hide-for-large' },
											null === (p = this.menuItemState) || void 0 === p
												? void 0
												: p
														.slice(this.applicationHeaderInfoState.maxSubheaderTabletLinks, this.menuItemState.length)
														.map((o, t) =>
															this.generateNavigationLinks(
																o,
																t,
																this.applicationHeaderInfoState.maxSubheaderTabletLinks,
																'app-tablet',
															),
														),
										),
										o(
											'ul',
											{ class: 'ontario-show-for-small-only' },
											null === (c = this.menuItemState) || void 0 === c
												? void 0
												: c
														.slice(this.applicationHeaderInfoState.maxSubheaderMobileLinks, this.menuItemState.length)
														.map((o, t) =>
															this.generateNavigationLinks(
																o,
																t,
																this.applicationHeaderInfoState.maxSubheaderMobileLinks,
																'app-mobile',
															),
														),
										),
									),
								),
							),
					  ),
				this.menuToggle && o('div', { class: 'ontario-hide-for-large ontario-overlay' }),
			);
		}
		static get assetsDirs() {
			return ['./assets'];
		}
		get el() {
			return i(this);
		}
		static get watchers() {
			return {
				applicationHeaderInfo: ['parseApplicationHeaderInfo'],
				menuItems: ['parseMenuItems'],
				languageToggleOptions: ['parseLanguage'],
			};
		}
	};
io.style = {
	application:
		'.ontario-application-subheader__heading{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}.ontario-application-subheader__heading{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){.ontario-application-subheader__heading{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}.ontario-application-navigation a:focus,.ontario-application-navigation a:active,.ontario-header-button:focus,.ontario-input:focus,.ontario-input:active{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-row{margin:0 auto;max-width:72rem;width:100%}.ontario-row:before,.ontario-row:after{content:"";display:table}.ontario-row:after{clear:both}.ontario-row.ontario-row--collapse>.ontario-column,.ontario-row.ontario-row--collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-row--collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row .ontario-row{margin:0 -1rem;max-width:none;width:auto}.ontario-row .ontario-row:before,.ontario-row .ontario-row:after{content:"";display:table}.ontario-row .ontario-row:after{clear:both}.ontario-row .ontario-row.ontario-row--collapse{margin:0;max-width:none;width:auto}.ontario-row .ontario-row.ontario-row--collapse:before,.ontario-row .ontario-row.ontario-row--collapse:after{content:"";display:table}.ontario-row .ontario-row.ontario-row--collapse:after{clear:both}.ontario-column,.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;float:left}.ontario-column+.ontario-column:last-child,.ontario-column+.ontario-columns:last-child,.ontario-columns+.ontario-column:last-child,.ontario-columns+.ontario-columns:last-child{float:right}.ontario-column+.ontario-column.ontario-end,.ontario-column+.ontario-columns.ontario-end,.ontario-columns+.ontario-column.ontario-end,.ontario-columns+.ontario-columns.ontario-end{float:left}@media only screen{.ontario-small-push-0{position:relative;left:0;right:auto}.ontario-small-pull-0{position:relative;right:0;left:auto}.ontario-small-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-small-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-small-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-small-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-small-push-3{position:relative;left:25%;right:auto}.ontario-small-pull-3{position:relative;right:25%;left:auto}.ontario-small-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-small-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-small-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-small-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-small-push-6{position:relative;left:50%;right:auto}.ontario-small-pull-6{position:relative;right:50%;left:auto}.ontario-small-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-small-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-small-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-small-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-small-push-9{position:relative;left:75%;right:auto}.ontario-small-pull-9{position:relative;right:75%;left:auto}.ontario-small-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-small-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-small-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-small-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-small-1{width:8.3333333333%}.ontario-small-2{width:16.6666666667%}.ontario-small-3{width:25%}.ontario-small-4{width:33.3333333333%}.ontario-small-5{width:41.6666666667%}.ontario-small-6{width:50%}.ontario-small-7{width:58.3333333333%}.ontario-small-8{width:66.6666666667%}.ontario-small-9{width:75%}.ontario-small-10{width:83.3333333333%}.ontario-small-11{width:91.6666666667%}.ontario-small-12{width:100%}.ontario-small-offset-0{margin-left:0 !important}.ontario-small-offset-1{margin-left:8.3333333333% !important}.ontario-small-offset-2{margin-left:16.6666666667% !important}.ontario-small-offset-3{margin-left:25% !important}.ontario-small-offset-4{margin-left:33.3333333333% !important}.ontario-small-offset-5{margin-left:41.6666666667% !important}.ontario-small-offset-6{margin-left:50% !important}.ontario-small-offset-7{margin-left:58.3333333333% !important}.ontario-small-offset-8{margin-left:66.6666666667% !important}.ontario-small-offset-9{margin-left:75% !important}.ontario-small-offset-10{margin-left:83.3333333333% !important}.ontario-small-offset-11{margin-left:91.6666666667% !important}.ontario-small-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-small-centered,.ontario-columns.ontario-small-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-small-uncentered,.ontario-columns.ontario-small-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-small-centered:last-child,.ontario-columns.ontario-small-centered:last-child{float:none}.ontario-column.ontario-small-uncentered:last-child,.ontario-columns.ontario-small-uncentered:last-child{float:left}.ontario-column.ontario-small-uncentered.ontario-opposite,.ontario-columns.ontario-small-uncentered.ontario-opposite{float:right}.ontario-row.ontario-small-collapse>.ontario-column,.ontario-row.ontario-small-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-small-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-small-uncollapse>.ontario-column,.ontario-row.ontario-small-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:40.063em){.ontario-medium-push-0{position:relative;left:0;right:auto}.ontario-medium-pull-0{position:relative;right:0;left:auto}.ontario-medium-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-medium-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-medium-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-medium-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-medium-push-3{position:relative;left:25%;right:auto}.ontario-medium-pull-3{position:relative;right:25%;left:auto}.ontario-medium-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-medium-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-medium-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-medium-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-medium-push-6{position:relative;left:50%;right:auto}.ontario-medium-pull-6{position:relative;right:50%;left:auto}.ontario-medium-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-medium-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-medium-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-medium-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-medium-push-9{position:relative;left:75%;right:auto}.ontario-medium-pull-9{position:relative;right:75%;left:auto}.ontario-medium-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-medium-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-medium-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-medium-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-medium-1{width:8.3333333333%}.ontario-medium-2{width:16.6666666667%}.ontario-medium-3{width:25%}.ontario-medium-4{width:33.3333333333%}.ontario-medium-5{width:41.6666666667%}.ontario-medium-6{width:50%}.ontario-medium-7{width:58.3333333333%}.ontario-medium-8{width:66.6666666667%}.ontario-medium-9{width:75%}.ontario-medium-10{width:83.3333333333%}.ontario-medium-11{width:91.6666666667%}.ontario-medium-12{width:100%}.ontario-medium-offset-0{margin-left:0 !important}.ontario-medium-offset-1{margin-left:8.3333333333% !important}.ontario-medium-offset-2{margin-left:16.6666666667% !important}.ontario-medium-offset-3{margin-left:25% !important}.ontario-medium-offset-4{margin-left:33.3333333333% !important}.ontario-medium-offset-5{margin-left:41.6666666667% !important}.ontario-medium-offset-6{margin-left:50% !important}.ontario-medium-offset-7{margin-left:58.3333333333% !important}.ontario-medium-offset-8{margin-left:66.6666666667% !important}.ontario-medium-offset-9{margin-left:75% !important}.ontario-medium-offset-10{margin-left:83.3333333333% !important}.ontario-medium-offset-11{margin-left:91.6666666667% !important}.ontario-medium-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-medium-centered,.ontario-columns.ontario-medium-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-medium-uncentered,.ontario-columns.ontario-medium-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-medium-centered:last-child,.ontario-columns.ontario-medium-centered:last-child{float:none}.ontario-column.ontario-medium-uncentered:last-child,.ontario-columns.ontario-medium-uncentered:last-child{float:left}.ontario-column.ontario-medium-uncentered.ontario-opposite,.ontario-columns.ontario-medium-uncentered.ontario-opposite{float:right}.ontario-row.ontario-medium-collapse>.ontario-column,.ontario-row.ontario-medium-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-medium-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-medium-uncollapse>.ontario-column,.ontario-row.ontario-medium-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:73.063em){.ontario-large-push-0{position:relative;left:0;right:auto}.ontario-large-pull-0{position:relative;right:0;left:auto}.ontario-large-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-large-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-large-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-large-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-large-push-3{position:relative;left:25%;right:auto}.ontario-large-pull-3{position:relative;right:25%;left:auto}.ontario-large-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-large-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-large-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-large-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-large-push-6{position:relative;left:50%;right:auto}.ontario-large-pull-6{position:relative;right:50%;left:auto}.ontario-large-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-large-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-large-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-large-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-large-push-9{position:relative;left:75%;right:auto}.ontario-large-pull-9{position:relative;right:75%;left:auto}.ontario-large-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-large-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-large-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-large-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-large-1{width:8.3333333333%}.ontario-large-2{width:16.6666666667%}.ontario-large-3{width:25%}.ontario-large-4{width:33.3333333333%}.ontario-large-5{width:41.6666666667%}.ontario-large-6{width:50%}.ontario-large-7{width:58.3333333333%}.ontario-large-8{width:66.6666666667%}.ontario-large-9{width:75%}.ontario-large-10{width:83.3333333333%}.ontario-large-11{width:91.6666666667%}.ontario-large-12{width:100%}.ontario-large-offset-0{margin-left:0 !important}.ontario-large-offset-1{margin-left:8.3333333333% !important}.ontario-large-offset-2{margin-left:16.6666666667% !important}.ontario-large-offset-3{margin-left:25% !important}.ontario-large-offset-4{margin-left:33.3333333333% !important}.ontario-large-offset-5{margin-left:41.6666666667% !important}.ontario-large-offset-6{margin-left:50% !important}.ontario-large-offset-7{margin-left:58.3333333333% !important}.ontario-large-offset-8{margin-left:66.6666666667% !important}.ontario-large-offset-9{margin-left:75% !important}.ontario-large-offset-10{margin-left:83.3333333333% !important}.ontario-large-offset-11{margin-left:91.6666666667% !important}.ontario-large-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-large-centered,.ontario-columns.ontario-large-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-large-uncentered,.ontario-columns.ontario-large-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-large-centered:last-child,.ontario-columns.ontario-large-centered:last-child{float:none}.ontario-column.ontario-large-uncentered:last-child,.ontario-columns.ontario-large-uncentered:last-child{float:left}.ontario-column.ontario-large-uncentered.ontario-opposite,.ontario-columns.ontario-large-uncentered.ontario-opposite{float:right}.ontario-row.ontario-large-collapse>.ontario-column,.ontario-row.ontario-large-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-large-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-large-uncollapse>.ontario-column,.ontario-row.ontario-large-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-push-0{position:relative;left:0;right:auto}.ontario-pull-0{position:relative;right:0;left:auto}.ontario-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-push-3{position:relative;left:25%;right:auto}.ontario-pull-3{position:relative;right:25%;left:auto}.ontario-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-push-6{position:relative;left:50%;right:auto}.ontario-pull-6{position:relative;right:50%;left:auto}.ontario-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-push-9{position:relative;left:75%;right:auto}.ontario-pull-9{position:relative;right:75%;left:auto}.ontario-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-pull-11{position:relative;right:91.6666666667%;left:auto}}@media only screen and (min-width:96.063em){.ontario-xlarge-push-0{position:relative;left:0;right:auto}.ontario-xlarge-pull-0{position:relative;right:0;left:auto}.ontario-xlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xlarge-push-3{position:relative;left:25%;right:auto}.ontario-xlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xlarge-push-6{position:relative;left:50%;right:auto}.ontario-xlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xlarge-push-9{position:relative;left:75%;right:auto}.ontario-xlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-xlarge-1{width:8.3333333333%}.ontario-xlarge-2{width:16.6666666667%}.ontario-xlarge-3{width:25%}.ontario-xlarge-4{width:33.3333333333%}.ontario-xlarge-5{width:41.6666666667%}.ontario-xlarge-6{width:50%}.ontario-xlarge-7{width:58.3333333333%}.ontario-xlarge-8{width:66.6666666667%}.ontario-xlarge-9{width:75%}.ontario-xlarge-10{width:83.3333333333%}.ontario-xlarge-11{width:91.6666666667%}.ontario-xlarge-12{width:100%}.ontario-xlarge-offset-0{margin-left:0 !important}.ontario-xlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xlarge-offset-3{margin-left:25% !important}.ontario-xlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xlarge-offset-6{margin-left:50% !important}.ontario-xlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xlarge-offset-9{margin-left:75% !important}.ontario-xlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xlarge-centered,.ontario-columns.ontario-xlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xlarge-uncentered,.ontario-columns.ontario-xlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xlarge-centered:last-child,.ontario-columns.ontario-xlarge-centered:last-child{float:none}.ontario-column.ontario-xlarge-uncentered:last-child,.ontario-columns.ontario-xlarge-uncentered:last-child{float:left}.ontario-column.ontario-xlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xlarge-collapse>.ontario-column,.ontario-row.ontario-xlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xlarge-uncollapse>.ontario-column,.ontario-row.ontario-xlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:120.063em){.ontario-xxlarge-push-0{position:relative;left:0;right:auto}.ontario-xxlarge-pull-0{position:relative;right:0;left:auto}.ontario-xxlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xxlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xxlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xxlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xxlarge-push-3{position:relative;left:25%;right:auto}.ontario-xxlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xxlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xxlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xxlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xxlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xxlarge-push-6{position:relative;left:50%;right:auto}.ontario-xxlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xxlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xxlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xxlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xxlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xxlarge-push-9{position:relative;left:75%;right:auto}.ontario-xxlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xxlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xxlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xxlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xxlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-xxlarge-1{width:8.3333333333%}.ontario-xxlarge-2{width:16.6666666667%}.ontario-xxlarge-3{width:25%}.ontario-xxlarge-4{width:33.3333333333%}.ontario-xxlarge-5{width:41.6666666667%}.ontario-xxlarge-6{width:50%}.ontario-xxlarge-7{width:58.3333333333%}.ontario-xxlarge-8{width:66.6666666667%}.ontario-xxlarge-9{width:75%}.ontario-xxlarge-10{width:83.3333333333%}.ontario-xxlarge-11{width:91.6666666667%}.ontario-xxlarge-12{width:100%}.ontario-xxlarge-offset-0{margin-left:0 !important}.ontario-xxlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xxlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xxlarge-offset-3{margin-left:25% !important}.ontario-xxlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xxlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xxlarge-offset-6{margin-left:50% !important}.ontario-xxlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xxlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xxlarge-offset-9{margin-left:75% !important}.ontario-xxlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xxlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xxlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xxlarge-centered,.ontario-columns.ontario-xxlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xxlarge-uncentered,.ontario-columns.ontario-xxlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xxlarge-centered:last-child,.ontario-columns.ontario-xxlarge-centered:last-child{float:none}.ontario-column.ontario-xxlarge-uncentered:last-child,.ontario-columns.ontario-xxlarge-uncentered:last-child{float:left}.ontario-column.ontario-xxlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xxlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xxlarge-collapse>.ontario-column,.ontario-row.ontario-xxlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xxlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xxlarge-uncollapse>.ontario-column,.ontario-row.ontario-xxlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;width:100%;padding:0.625rem 1rem;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-application-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:#1a1a1a;color:#FFFFFF;height:3.125rem;position:relative;z-index:5}.ontario-application-header>.ontario-row{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ontario-application-header-container{position:relative;width:100%}.ontario-header-button.ontario-application-navigation--open:hover{background-color:#666666}.ontario-header-button.ontario-application-navigation--closed:active{background-color:#1a1a1a}.ontario-header-button--with-outline{border:2px solid #FFFFFF;margin:0 0 0 1rem;padding:0.375rem 1rem}.ontario-application-subheader .ontario-header-button,.ontario-application-navigation .ontario-header-button{background-color:#4d4d4d}.ontario-header-button--closed:focus{-webkit-box-shadow:none;box-shadow:none;outline:none;-webkit-transition:none;transition:none}.ontario-application-header__logo,.ontario-application-header__logo a,.ontario-application-header__lang-toggle,.ontario-application-subheader__container,.ontario-application-subheader__menu-container,.ontario-application-subheader__menu{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;outline:none}.ontario-application-header__logo a:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}.ontario-application-header__logo svg{width:100px;height:25px}.ontario-application-header__lang-toggle{-ms-flex-pack:end;justify-content:flex-end}.ontario-application-header__lang-toggle a{font-size:1rem;line-height:1.375rem;height:auto;outline:none;padding:0.5rem 0.75rem}.ontario-application-subheader{padding:1.25rem 0;background-color:#404040;overflow:visible;position:relative;z-index:5}@media screen and (min-width: 73em){.ontario-application-subheader{z-index:0}}.ontario-application-subheader>.ontario-row{position:relative}.ontario-application-header-container{position:relative;z-index:5}.ontario-application-header>.ontario-row{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ontario-application-subheader .ontario-header-button{visibility:visible}.ontario-application-subheader .ontario-header-button,.ontario-application-navigation .ontario-header-button{background-color:#4d4d4d}.ontario-application-subheader .ontario-header-button:hover,.ontario-application-navigation .ontario-header-button:hover{background-color:#666666}.ontario-application-subheader .ontario-header-button:active,.ontario-application-navigation .ontario-header-button:active{background-color:#1a1a1a}.ontario-header-button--without-outline:hover{background-color:#4d4d4d}.ontario-header-button--without-outline:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}.ontario-application-subheader__heading{padding:0.375rem 0;margin-bottom:0;max-width:65%}.ontario-application-subheader__heading a{color:#FFFFFF;font-weight:600;text-decoration:none}.ontario-application-subheader__heading a:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}.ontario-application-subheader__heading a:hover,.ontario-application-subheader__heading a:active,.ontario-application-subheader__heading a:visited{color:#FFFFFF;text-decoration:underline}.ontario-application-subheader .ontario-header-button{visibility:visible;background-color:#4d4d4d}.ontario-application-subheader .ontario-header-button:hover{background-color:#666666}.ontario-application-subheader .ontario-header-button:active{background-color:#1a1a1a}.ontario-header__menu-toggler span{display:-ms-flexbox;display:flex}@media screen and (max-width: 20em){.ontario-header__menu-toggler span:last-of-type{display:none}}.ontario-header__menu-toggler svg{margin-right:6px}@media screen and (max-width: 20em){.ontario-header__menu-toggler svg{margin-right:0}}.ontario-application-subheader__container{-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.ontario-application-subheader__menu{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;list-style:none;margin:0;padding-left:0}.ontario-application-subheader__menu li{border-radius:4px;padding:0;margin:0 0 0 0.75rem;text-align:center}.ontario-application-subheader__menu-container a{-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:4px;color:#FFFFFF;display:inline-block;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.125rem;font-weight:600;height:48px;line-height:1.4375rem;outline:none;padding:0.75rem;text-align:left;text-decoration:none;white-space:nowrap}.ontario-application-subheader__menu-container a.ontario-link--active{border-radius:4px 4px 0 0;border-bottom:4px solid #FFFFFF}.ontario-application-subheader__menu-container a:hover{background-color:#666666;color:#FFFFFF}.ontario-application-subheader__menu-container a:active{background-color:#1a1a1a}.ontario-application-subheader__menu-container a:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}.ontario-application-navigation{position:absolute;width:100%}@media screen and (min-width: 73em){.ontario-application-navigation{position:relative;max-width:72rem;width:auto;margin:0 auto}}.ontario-application-navigation .ontario-header-button{visibility:hidden;position:absolute;top:-4.25rem;right:1rem;z-index:6}.ontario-application-navigation__container{background:#FFFFFF;position:absolute;top:0;width:100%;z-index:4}@media screen and (min-width: 40em){.ontario-application-navigation__container{background:#FFFFFF;position:absolute;z-index:4}}@media screen and (min-width: 73em){.ontario-application-navigation__container{-webkit-box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);border-radius:4px;position:absolute;right:0.75rem;top:-0.6rem;min-width:290px;max-width:30%;z-index:3;-webkit-transition:none !important;transition:none !important}}.ontario-application-navigation ul{list-style:none;padding:0.5rem 0;margin:0;border-bottom:1px solid #cccccc}@media screen and (min-width: 73em){.ontario-application-navigation ul{border-bottom:none}}.ontario-application-navigation li{border-top:1px solid #cccccc;padding:0;margin-bottom:0}.ontario-application-navigation li:last-of-type{border-bottom:1px solid #cccccc}.ontario-application-navigation a{color:#1a1a1a;display:block;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;text-decoration:none;padding:0.6730769231rem 1.5rem}.ontario-application-navigation a:hover{text-decoration:underline;background-color:#e5e5e5}.ontario-application-navigation a:active{text-decoration:underline;background-color:#cccccc}.ontario-application-navigation a:focus,.ontario-application-navigation a:active{-webkit-box-shadow:0 0 0 4px #009ADB inset;box-shadow:0 0 0 4px #009ADB inset}.ontario-application-navigation a.ontario-link--active{border-left:6px solid #1a1a1a;background-color:#f2f2f2}.ontario-navigation--open{visibility:visible;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform 0.4s ease-in-out;transition:-webkit-transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out}@media screen and (min-width: 73em){.ontario-navigation--open{z-index:5}}.ontario-navigation--closed{background:#FFFFFF;position:absolute;-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:transform 0.3s ease-in-out, visibility 0.1s ease;transition:transform 0.3s ease-in-out, visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;width:100%;visibility:hidden;z-index:4}.ontario-application-navigation.ontario-navigation--open .ontario-application-navigation__container{visibility:visible;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform 0.4s ease-in-out;transition:-webkit-transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out}@media screen and (min-width: 73em){.ontario-application-navigation.ontario-navigation--open .ontario-application-navigation__container{-webkit-transition:none;transition:none;display:block}}.ontario-overlay{position:fixed;top:0;left:0;background:rgba(0, 0, 0, 0.6);width:100%;height:100%;z-index:2}.ontario-header-button.ontario-navigation--open:hover{background-color:#666666}.ontario-header-button.ontario-navigation--open:active{background-color:#1a1a1a}.ontario-header-button.ontario-navigation--closed:active{background-color:#1a1a1a}.ontario-header-button{background-color:#1a1a1a;border:none;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;color:#FFFFFF;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;height:48px;line-height:1.5555555556;text-align:center;text-decoration:none}.ontario-header-button:hover,.ontario-header-button:focus,.ontario-header-button:visited{color:#FFFFFF}.ontario-header-button--with-outline,.ontario-header-button--without-outline{background-color:#1a1a1a;color:#FFFFFF}.ontario-header-button--with-outline:hover,.ontario-header-button--without-outline:hover{background-color:#4d4d4d}.ontario-header-button--with-outline:active,.ontario-header-button--without-outline:active{background-color:#666666}.ontario-header-button--with-outline:focus,.ontario-header-button--without-outline:focus{background-color:#4d4d4d}.ontario-header-button--with-outline{border:2px solid #FFFFFF;margin:0 0 0 1rem;padding:0.375rem 1rem}.ontario-header-button--with-outline:hover{border:2px solid #FFFFFF;color:#FFFFFF}.ontario-header-button--with-outline:focus{background-color:#4d4d4d}@media screen and (max-width: 20em){.ontario-header-button--with-outline{padding:0.375rem}}.ontario-header__menu-toggler{padding:0.375rem 1rem}@media screen and (max-width: 20em){.ontario-header__menu-toggler{padding-left:0.5rem;padding-right:0.5rem}}.ontario-header__menu-toggler span{display:-ms-flexbox;display:flex}@media screen and (max-width: 20em){.ontario-header__menu-toggler span{display:none}}.ontario-header__menu-toggler svg{margin-right:6px}@media screen and (max-width: 20em){.ontario-header__menu-toggler svg{margin-right:0}}.ontario-application-navigation__container{background:#FFFFFF;position:absolute;-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:transform 0.3s ease-in-out, visibility 0.1s ease;transition:transform 0.3s ease-in-out, visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;width:100%;visibility:hidden;z-index:4}@media screen and (min-width: 73em){.ontario-application-navigation__container{-webkit-box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);border-radius:4px;display:none;position:absolute;right:1rem;top:calc(100% - 0.5rem);min-width:290px;max-width:30%;z-index:5}}.ontario-application-navigation.ontario-navigation--open .ontario-application-navigation__container{background:#FFFFFF;visibility:visible;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform 0.4s ease-in-out;transition:-webkit-transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out}@media screen and (min-width: 73em){.ontario-application-navigation.ontario-navigation--open .ontario-application-navigation__container{-webkit-transition:none;transition:none;display:block}}.ontario-application-navigation.ontario-navigation--open{background:#FFFFFF;z-index:4}.ontario-application-navigation ul{list-style:none;padding:0.5rem 0;margin:0;border-bottom:1px solid #cccccc}@media screen and (min-width: 73em){.ontario-application-navigation ul{border-bottom:none}}.ontario-application-navigation li{border-top:1px solid #cccccc;padding:0;margin-bottom:0}.ontario-application-navigation li:last-of-type{border-bottom:1px solid #cccccc}.ontario-application-navigation a{color:#1a1a1a;display:block;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;text-decoration:none;padding:0.6730769231rem 1.5rem}.ontario-application-navigation a:hover{text-decoration:underline;background-color:#e5e5e5}.ontario-application-navigation a:active{text-decoration:underline;background-color:#cccccc}.ontario-application-navigation a:focus,.ontario-application-navigation a:active{-webkit-box-shadow:0 0 0 4px #009ADB inset;box-shadow:0 0 0 4px #009ADB inset}.ontario-application-navigation a.ontario-link--active{border-left:6px solid #1a1a1a;background-color:#f2f2f2}.ontario-overlay{position:fixed;top:0;left:0;background:rgba(0, 0, 0, 0.6);width:100%;height:100%;z-index:2}.ontario-header__icon-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}',
	ontario:
		'.ontario-navigation a:focus,.ontario-navigation a:active,.ontario-header-button:focus,.ontario-input:focus,.ontario-input:active{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-row{margin:0 auto;max-width:72rem;width:100%}.ontario-row:before,.ontario-row:after{content:"";display:table}.ontario-row:after{clear:both}.ontario-row.ontario-row--collapse>.ontario-column,.ontario-row.ontario-row--collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-row--collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row .ontario-row{margin:0 -1rem;max-width:none;width:auto}.ontario-row .ontario-row:before,.ontario-row .ontario-row:after{content:"";display:table}.ontario-row .ontario-row:after{clear:both}.ontario-row .ontario-row.ontario-row--collapse{margin:0;max-width:none;width:auto}.ontario-row .ontario-row.ontario-row--collapse:before,.ontario-row .ontario-row.ontario-row--collapse:after{content:"";display:table}.ontario-row .ontario-row.ontario-row--collapse:after{clear:both}.ontario-column,.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;float:left}.ontario-column+.ontario-column:last-child,.ontario-column+.ontario-columns:last-child,.ontario-columns+.ontario-column:last-child,.ontario-columns+.ontario-columns:last-child{float:right}.ontario-column+.ontario-column.ontario-end,.ontario-column+.ontario-columns.ontario-end,.ontario-columns+.ontario-column.ontario-end,.ontario-columns+.ontario-columns.ontario-end{float:left}@media only screen{.ontario-small-push-0{position:relative;left:0;right:auto}.ontario-small-pull-0{position:relative;right:0;left:auto}.ontario-small-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-small-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-small-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-small-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-small-push-3{position:relative;left:25%;right:auto}.ontario-small-pull-3{position:relative;right:25%;left:auto}.ontario-small-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-small-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-small-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-small-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-small-push-6{position:relative;left:50%;right:auto}.ontario-small-pull-6{position:relative;right:50%;left:auto}.ontario-small-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-small-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-small-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-small-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-small-push-9{position:relative;left:75%;right:auto}.ontario-small-pull-9{position:relative;right:75%;left:auto}.ontario-small-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-small-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-small-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-small-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-small-1{width:8.3333333333%}.ontario-small-2{width:16.6666666667%}.ontario-small-3{width:25%}.ontario-small-4{width:33.3333333333%}.ontario-small-5{width:41.6666666667%}.ontario-small-6{width:50%}.ontario-small-7{width:58.3333333333%}.ontario-small-8{width:66.6666666667%}.ontario-small-9{width:75%}.ontario-small-10{width:83.3333333333%}.ontario-small-11{width:91.6666666667%}.ontario-small-12{width:100%}.ontario-small-offset-0{margin-left:0 !important}.ontario-small-offset-1{margin-left:8.3333333333% !important}.ontario-small-offset-2{margin-left:16.6666666667% !important}.ontario-small-offset-3{margin-left:25% !important}.ontario-small-offset-4{margin-left:33.3333333333% !important}.ontario-small-offset-5{margin-left:41.6666666667% !important}.ontario-small-offset-6{margin-left:50% !important}.ontario-small-offset-7{margin-left:58.3333333333% !important}.ontario-small-offset-8{margin-left:66.6666666667% !important}.ontario-small-offset-9{margin-left:75% !important}.ontario-small-offset-10{margin-left:83.3333333333% !important}.ontario-small-offset-11{margin-left:91.6666666667% !important}.ontario-small-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-small-centered,.ontario-columns.ontario-small-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-small-uncentered,.ontario-columns.ontario-small-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-small-centered:last-child,.ontario-columns.ontario-small-centered:last-child{float:none}.ontario-column.ontario-small-uncentered:last-child,.ontario-columns.ontario-small-uncentered:last-child{float:left}.ontario-column.ontario-small-uncentered.ontario-opposite,.ontario-columns.ontario-small-uncentered.ontario-opposite{float:right}.ontario-row.ontario-small-collapse>.ontario-column,.ontario-row.ontario-small-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-small-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-small-uncollapse>.ontario-column,.ontario-row.ontario-small-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:40.063em){.ontario-medium-push-0{position:relative;left:0;right:auto}.ontario-medium-pull-0{position:relative;right:0;left:auto}.ontario-medium-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-medium-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-medium-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-medium-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-medium-push-3{position:relative;left:25%;right:auto}.ontario-medium-pull-3{position:relative;right:25%;left:auto}.ontario-medium-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-medium-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-medium-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-medium-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-medium-push-6{position:relative;left:50%;right:auto}.ontario-medium-pull-6{position:relative;right:50%;left:auto}.ontario-medium-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-medium-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-medium-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-medium-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-medium-push-9{position:relative;left:75%;right:auto}.ontario-medium-pull-9{position:relative;right:75%;left:auto}.ontario-medium-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-medium-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-medium-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-medium-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-medium-1{width:8.3333333333%}.ontario-medium-2{width:16.6666666667%}.ontario-medium-3{width:25%}.ontario-medium-4{width:33.3333333333%}.ontario-medium-5{width:41.6666666667%}.ontario-medium-6{width:50%}.ontario-medium-7{width:58.3333333333%}.ontario-medium-8{width:66.6666666667%}.ontario-medium-9{width:75%}.ontario-medium-10{width:83.3333333333%}.ontario-medium-11{width:91.6666666667%}.ontario-medium-12{width:100%}.ontario-medium-offset-0{margin-left:0 !important}.ontario-medium-offset-1{margin-left:8.3333333333% !important}.ontario-medium-offset-2{margin-left:16.6666666667% !important}.ontario-medium-offset-3{margin-left:25% !important}.ontario-medium-offset-4{margin-left:33.3333333333% !important}.ontario-medium-offset-5{margin-left:41.6666666667% !important}.ontario-medium-offset-6{margin-left:50% !important}.ontario-medium-offset-7{margin-left:58.3333333333% !important}.ontario-medium-offset-8{margin-left:66.6666666667% !important}.ontario-medium-offset-9{margin-left:75% !important}.ontario-medium-offset-10{margin-left:83.3333333333% !important}.ontario-medium-offset-11{margin-left:91.6666666667% !important}.ontario-medium-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-medium-centered,.ontario-columns.ontario-medium-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-medium-uncentered,.ontario-columns.ontario-medium-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-medium-centered:last-child,.ontario-columns.ontario-medium-centered:last-child{float:none}.ontario-column.ontario-medium-uncentered:last-child,.ontario-columns.ontario-medium-uncentered:last-child{float:left}.ontario-column.ontario-medium-uncentered.ontario-opposite,.ontario-columns.ontario-medium-uncentered.ontario-opposite{float:right}.ontario-row.ontario-medium-collapse>.ontario-column,.ontario-row.ontario-medium-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-medium-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-medium-uncollapse>.ontario-column,.ontario-row.ontario-medium-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:73.063em){.ontario-large-push-0{position:relative;left:0;right:auto}.ontario-large-pull-0{position:relative;right:0;left:auto}.ontario-large-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-large-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-large-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-large-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-large-push-3{position:relative;left:25%;right:auto}.ontario-large-pull-3{position:relative;right:25%;left:auto}.ontario-large-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-large-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-large-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-large-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-large-push-6{position:relative;left:50%;right:auto}.ontario-large-pull-6{position:relative;right:50%;left:auto}.ontario-large-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-large-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-large-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-large-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-large-push-9{position:relative;left:75%;right:auto}.ontario-large-pull-9{position:relative;right:75%;left:auto}.ontario-large-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-large-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-large-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-large-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-large-1{width:8.3333333333%}.ontario-large-2{width:16.6666666667%}.ontario-large-3{width:25%}.ontario-large-4{width:33.3333333333%}.ontario-large-5{width:41.6666666667%}.ontario-large-6{width:50%}.ontario-large-7{width:58.3333333333%}.ontario-large-8{width:66.6666666667%}.ontario-large-9{width:75%}.ontario-large-10{width:83.3333333333%}.ontario-large-11{width:91.6666666667%}.ontario-large-12{width:100%}.ontario-large-offset-0{margin-left:0 !important}.ontario-large-offset-1{margin-left:8.3333333333% !important}.ontario-large-offset-2{margin-left:16.6666666667% !important}.ontario-large-offset-3{margin-left:25% !important}.ontario-large-offset-4{margin-left:33.3333333333% !important}.ontario-large-offset-5{margin-left:41.6666666667% !important}.ontario-large-offset-6{margin-left:50% !important}.ontario-large-offset-7{margin-left:58.3333333333% !important}.ontario-large-offset-8{margin-left:66.6666666667% !important}.ontario-large-offset-9{margin-left:75% !important}.ontario-large-offset-10{margin-left:83.3333333333% !important}.ontario-large-offset-11{margin-left:91.6666666667% !important}.ontario-large-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-large-centered,.ontario-columns.ontario-large-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-large-uncentered,.ontario-columns.ontario-large-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-large-centered:last-child,.ontario-columns.ontario-large-centered:last-child{float:none}.ontario-column.ontario-large-uncentered:last-child,.ontario-columns.ontario-large-uncentered:last-child{float:left}.ontario-column.ontario-large-uncentered.ontario-opposite,.ontario-columns.ontario-large-uncentered.ontario-opposite{float:right}.ontario-row.ontario-large-collapse>.ontario-column,.ontario-row.ontario-large-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-large-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-large-uncollapse>.ontario-column,.ontario-row.ontario-large-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-push-0{position:relative;left:0;right:auto}.ontario-pull-0{position:relative;right:0;left:auto}.ontario-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-push-3{position:relative;left:25%;right:auto}.ontario-pull-3{position:relative;right:25%;left:auto}.ontario-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-push-6{position:relative;left:50%;right:auto}.ontario-pull-6{position:relative;right:50%;left:auto}.ontario-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-push-9{position:relative;left:75%;right:auto}.ontario-pull-9{position:relative;right:75%;left:auto}.ontario-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-pull-11{position:relative;right:91.6666666667%;left:auto}}@media only screen and (min-width:96.063em){.ontario-xlarge-push-0{position:relative;left:0;right:auto}.ontario-xlarge-pull-0{position:relative;right:0;left:auto}.ontario-xlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xlarge-push-3{position:relative;left:25%;right:auto}.ontario-xlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xlarge-push-6{position:relative;left:50%;right:auto}.ontario-xlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xlarge-push-9{position:relative;left:75%;right:auto}.ontario-xlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-xlarge-1{width:8.3333333333%}.ontario-xlarge-2{width:16.6666666667%}.ontario-xlarge-3{width:25%}.ontario-xlarge-4{width:33.3333333333%}.ontario-xlarge-5{width:41.6666666667%}.ontario-xlarge-6{width:50%}.ontario-xlarge-7{width:58.3333333333%}.ontario-xlarge-8{width:66.6666666667%}.ontario-xlarge-9{width:75%}.ontario-xlarge-10{width:83.3333333333%}.ontario-xlarge-11{width:91.6666666667%}.ontario-xlarge-12{width:100%}.ontario-xlarge-offset-0{margin-left:0 !important}.ontario-xlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xlarge-offset-3{margin-left:25% !important}.ontario-xlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xlarge-offset-6{margin-left:50% !important}.ontario-xlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xlarge-offset-9{margin-left:75% !important}.ontario-xlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xlarge-centered,.ontario-columns.ontario-xlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xlarge-uncentered,.ontario-columns.ontario-xlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xlarge-centered:last-child,.ontario-columns.ontario-xlarge-centered:last-child{float:none}.ontario-column.ontario-xlarge-uncentered:last-child,.ontario-columns.ontario-xlarge-uncentered:last-child{float:left}.ontario-column.ontario-xlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xlarge-collapse>.ontario-column,.ontario-row.ontario-xlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xlarge-uncollapse>.ontario-column,.ontario-row.ontario-xlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:120.063em){.ontario-xxlarge-push-0{position:relative;left:0;right:auto}.ontario-xxlarge-pull-0{position:relative;right:0;left:auto}.ontario-xxlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xxlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xxlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xxlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xxlarge-push-3{position:relative;left:25%;right:auto}.ontario-xxlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xxlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xxlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xxlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xxlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xxlarge-push-6{position:relative;left:50%;right:auto}.ontario-xxlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xxlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xxlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xxlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xxlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xxlarge-push-9{position:relative;left:75%;right:auto}.ontario-xxlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xxlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xxlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xxlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xxlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-xxlarge-1{width:8.3333333333%}.ontario-xxlarge-2{width:16.6666666667%}.ontario-xxlarge-3{width:25%}.ontario-xxlarge-4{width:33.3333333333%}.ontario-xxlarge-5{width:41.6666666667%}.ontario-xxlarge-6{width:50%}.ontario-xxlarge-7{width:58.3333333333%}.ontario-xxlarge-8{width:66.6666666667%}.ontario-xxlarge-9{width:75%}.ontario-xxlarge-10{width:83.3333333333%}.ontario-xxlarge-11{width:91.6666666667%}.ontario-xxlarge-12{width:100%}.ontario-xxlarge-offset-0{margin-left:0 !important}.ontario-xxlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xxlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xxlarge-offset-3{margin-left:25% !important}.ontario-xxlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xxlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xxlarge-offset-6{margin-left:50% !important}.ontario-xxlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xxlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xxlarge-offset-9{margin-left:75% !important}.ontario-xxlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xxlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xxlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xxlarge-centered,.ontario-columns.ontario-xxlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xxlarge-uncentered,.ontario-columns.ontario-xxlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xxlarge-centered:last-child,.ontario-columns.ontario-xxlarge-centered:last-child{float:none}.ontario-column.ontario-xxlarge-uncentered:last-child,.ontario-columns.ontario-xxlarge-uncentered:last-child{float:left}.ontario-column.ontario-xxlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xxlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xxlarge-collapse>.ontario-column,.ontario-row.ontario-xxlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xxlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xxlarge-uncollapse>.ontario-column,.ontario-row.ontario-xxlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;width:100%;padding:0.625rem 1rem;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-header__container{position:relative;z-index:5}@media screen and (min-width: 73em){.ontario-header__container{z-index:1}}.ontario-icon-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ontario-icon-container-reset{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ontario-icon-container-reset svg{fill:#1a1a1a}.ontario-subheader__menu a{border-radius:4px;color:#FFFFFF;display:inline;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.125rem;font-weight:600;height:48px;line-height:1.4375rem;padding:0.75rem 1rem;text-decoration:none;white-space:nowrap}.ontario-subheader__menu a.ontario-link--active{border-radius:4px 4px 0 0;border-bottom:4px solid #FFFFFF}.ontario-subheader__menu a:hover{background-color:#666666;color:#FFFFFF}.ontario-subheader__menu a:active{background-color:#1a1a1a}.ontario-subheader__menu a:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}.ontario-navigation{position:absolute;width:100%}@media screen and (min-width: 73em){.ontario-navigation{position:relative;max-width:72rem;width:auto;margin:0 auto}}.nav-ul-closed{background:white;position:absolute;-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:transform 0.3s ease-in-out, visibility 0.1s ease;transition:transform 0.3s ease-in-out, visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;width:100%;visibility:hidden;z-index:4}.nav-ul-opened{visibility:visible;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform 0.4s ease-in-out;transition:-webkit-transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out}@media screen and (min-width: 73em){.nav-ul-opened{z-index:5}}.ontario-navigation ul{list-style:none;padding:0.5rem 0;margin:0;border-bottom:1px solid #cccccc}@media screen and (min-width: 73em){.ontario-navigation ul{border-bottom:none}}.ontario-navigation li{border-top:1px solid #cccccc;padding:0;margin-bottom:0}.ontario-navigation li:last-of-type{border-bottom:1px solid #cccccc}.ontario-navigation a{color:#1a1a1a;display:block;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;text-decoration:none;padding:0.6730769231rem 1.5rem}.ontario-navigation a:hover{text-decoration:underline;background-color:#e6e6e6}.ontario-navigation a:active{text-decoration:underline;background-color:#cccccc}.ontario-navigation a:focus,.ontario-navigation a:active{-webkit-box-shadow:0 0 0 4px #009ADB inset;box-shadow:0 0 0 4px #009ADB inset}.ontario-navigation a.ontario-link--active{border-left:6px solid #1a1a1a;background-color:#f2f2f2}.ontario-overlay{position:fixed;top:0;left:0;background:rgba(0, 0, 0, 0.6);width:100%;height:100%;z-index:2}.ontario-header{position:relative;overflow:hidden;z-index:5;background-color:#1a1a1a;color:#FFFFFF;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:5.75rem}.ontario-header .ontario-row{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}.ontario-header svg{width:2rem;height:2rem;margin-bottom:0}.ontario-header__logo-container a{display:-ms-inline-flexbox;display:inline-flex;height:100%;outline:none}.ontario-header__logo-container a:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB}.ontario-header__logo-container a img{width:45px;height:46px}@media screen and (min-width: 40em){.ontario-header__logo-container a img{width:180px;height:46px}}.ontario-navigation__container.ontario-navigation--open{visibility:visible;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform 0.4s ease-in-out;transition:-webkit-transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out}@media screen and (min-width: 73em){.ontario-navigation__container.ontario-navigation--open{z-index:5}}.ontario-navigation__container.ontario-navigation--closed{background:#FFFFFF;position:absolute;-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:transform 0.3s ease-in-out, visibility 0.1s ease;transition:transform 0.3s ease-in-out, visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;width:100%;visibility:hidden;z-index:4}.ontario-header-button.ontario-navigation--open:hover{background-color:#666666}.ontario-header-button.ontario-navigation--open:active{background-color:#1a1a1a}.ontario-header-button.ontario-navigation--closed:active{background-color:#1a1a1a}.ontario-header__logo-container{height:46px}.ontario-header__logo-container svg{width:45px;height:46px}@media screen and (min-width: 40em){.ontario-header__logo-container svg{width:180px;height:46px}}.ontario-header__logo-container a{display:inline-block;height:100%}.ontario-header__logo-container a:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB}.ontario-header__search-container{position:relative;display:none}@media screen and (min-width: 73em){.ontario-header__search-container{display:-ms-flexbox;display:flex}}@media screen and (min-width: 40em){.ontario-header__search-container{padding-right:1rem}}.ontario-input.ontario-header__search-input{border-width:0;margin-bottom:0;height:48px;padding-left:0.75rem;padding-right:7.2rem}.ontario-input.ontario-header__search-input:invalid+input[type=reset]{display:none}.ontario-input.ontario-header__search-input:focus~.ontario-header__search-submit{background-color:#0066CC;color:#FFFFFF}.ontario-input.ontario-header__search-input:focus~.ontario-header__search-submit svg{fill:#FFFFFF}.ontario-input.ontario-header__search-input:focus~.ontario-header__search-submit:hover{background-color:#00478F;color:#FFFFFF}.ontario-input.ontario-header__search-input::-ms-clear{display:none;width:0;height:0}.ontario-input.ontario-header__search-input:invalid:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;-moz-box-shadow:none}.ontario-input.ontario-header__search-input:invalid:not(:focus){-webkit-box-shadow:none;box-shadow:none;-moz-box-shadow:none}@media screen and (min-width: 40em) and (max-width: 73em){.ontario-input.ontario-header__search-input{padding-left:1rem;padding-right:6.4rem}}.ontario-header__search-submit{border:0;border-radius:0 3px 3px 0;background-color:#f2f2f2;color:#1a1a1a;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:600;font-size:1.125rem;height:100%;line-height:1.56;position:absolute;right:1rem;top:0;cursor:pointer;padding-left:0.75rem;padding-right:0.75rem}.ontario-header__search-submit svg{fill:#1a1a1a}.ontario-header__search-submit:hover{background-color:#00478F;color:#FFFFFF}.ontario-header__search-submit:hover svg{fill:#FFFFFF}.ontario-header__search-submit:focus{outline:none;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;background-color:#00478F;color:#FFFFFF}.ontario-header__search-submit:focus svg{fill:#FFFFFF}.ontario-header__search-submit:active{background-color:#002142;color:#FFFFFF}.ontario-header__search-submit:active svg{fill:#FFFFFF}.ontario-header__search-submit svg{margin-right:0}input[type=reset].ontario-header__search-reset{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;top:11px;right:80px;height:28px;width:28px;color:#1a1a1a;margin:0;padding:0.5rem;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTE5IDYuNEwxNy42IDUgMTIgMTAuNiA2LjQgNSA1IDYuNGw1LjYgNS42TDUgMTcuNiA2LjQgMTlsNS42LTUuNiA1LjYgNS42IDEuNC0xLjQtNS42LTUuNkwxOSA2LjR6IiBmaWxsPSIjMDAwIi8+PC9zdmc+);background-position:center center;background-repeat:no-repeat;background-color:transparent;outline:none;border:none;cursor:pointer}input[type=reset].ontario-header__search-reset:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB}.ontario-header__nav-right-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}.ontario-header-button{background-color:#1a1a1a;border:none;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;color:#FFFFFF;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;height:48px;line-height:1.5555555556;text-align:center;text-decoration:none}.ontario-header-button:hover,.ontario-header-button:focus,.ontario-header-button:visited{color:#FFFFFF}.ontario-header-button--with-outline,.ontario-header-button--without-outline{background-color:#1a1a1a;color:#FFFFFF}.ontario-header-button--with-outline:hover,.ontario-header-button--without-outline:hover{background-color:#4d4d4d}.ontario-header-button--with-outline:active,.ontario-header-button--without-outline:active{background-color:#666666}.ontario-header-button--with-outline:focus,.ontario-header-button--without-outline:focus{background-color:#4d4d4d}.ontario-header-button--with-outline:active,.ontario-header-button--without-outline:active{background-color:#666666}.ontario-header-button--with-outline{border:2px solid #FFFFFF;margin:0 0 0 1rem;padding:0.375rem 1rem}.ontario-header-button--with-outline:hover{border:2px solid #FFFFFF;color:#FFFFFF}.ontario-header-button--with-outline:focus{background-color:#4d4d4d}@media screen and (max-width: 20em){.ontario-header-button--with-outline{padding:0.375rem}}.ontario-header-button--without-outline:focus{background-color:#4d4d4d}.ontario-header__menu-toggler{padding:0.375rem 1rem}@media screen and (max-width: 20em){.ontario-header__menu-toggler{padding-left:0.5rem;padding-right:0.5rem}}.ontario-header__menu-toggler span{display:-ms-flexbox;display:flex}@media screen and (max-width: 20em){.ontario-header__menu-toggler span{display:none}}.ontario-header__menu-toggler svg{margin-right:6px}@media screen and (max-width: 20em){.ontario-header__menu-toggler svg{margin-right:0}}.ontario-header__language-toggler{padding:0.75rem}.ontario-header__language-toggler abbr[title]{text-decoration:none}.ontario-header__search-toggler{padding:0.5rem 0.75rem;margin-left:1rem}@media screen and (min-width: 40em){.ontario-header__search-toggler svg{margin-right:0.25rem}}.ontario-header__search-close{-ms-flex-direction:column-reverse;flex-direction:column-reverse;font-weight:400;margin-right:1rem;padding:0.15rem 0.25rem;position:relative;height:60px;display:none}.ontario-header__search-close span{position:relative;top:-3px;font-size:1rem;margin-left:0}.ontario-header__search-close span:last-of-type{top:0;height:1.875rem}@media screen and (min-width: 39.9375em){.ontario-header__search-close span{margin-right:0.25rem}}.ontario-header__search-close span:hover,.ontario-header__search-close span:focus{outline:none;text-decoration:none}.ontario-header__search-close svg{top:0}@media screen and (min-width: 40em){.ontario-header__search-close{-ms-flex-direction:row;flex-direction:row;padding:0.25rem 0.5rem 0.25rem 1rem;height:48px}.ontario-header__search-close span{top:0}.ontario-header__search-close svg{position:relative;width:2.5rem;height:2.5rem}}@media screen and (min-width: 73em){.ontario-header--search-open .ontario-header__search-close{display:none}}.ontario-header__search-close-container{display:none;-ms-flex-pack:end;justify-content:flex-end;padding-right:0}@media screen and (max-width: 40em){.ontario-header__search-close-container{width:auto;padding-left:0;padding-right:0}}@media screen and (max-width: 73em){.ontario-header--search-open .ontario-header__logo-container,.ontario-header--search-open .ontario-header__nav-right-container{display:none}.ontario-header--search-open .ontario-header__search-close-container,.ontario-header--search-open .ontario-header__search-container,.ontario-header--search-open .ontario-header__search-close{display:-ms-flexbox;display:flex}}.ontario-navigation{position:absolute;width:100%}@media screen and (min-width: 73em){.ontario-navigation{position:relative;max-width:72rem;width:auto;margin:0 auto}}.ontario-navigation__container{background:#FFFFFF;position:absolute;-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:transform 0.3s ease-in-out, visibility 0.1s ease;transition:transform 0.3s ease-in-out, visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;width:100%;visibility:hidden;z-index:4}@media screen and (min-width: 73em){.ontario-navigation__container{-webkit-box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);border-radius:4px;display:none;position:absolute;right:1rem;top:calc(100% - 0.5rem);min-width:290px;max-width:30%;z-index:5}}.ontario-navigation ul{list-style:none;padding:0.5rem 0;margin:0;border-bottom:1px solid #cccccc}@media screen and (min-width: 73em){.ontario-navigation ul{border-bottom:none}}.ontario-header-navigation__menu-item{border-top:1px solid #cccccc;padding:0;margin-bottom:0}.ontario-header-navigation__menu-item:last-of-type{border-bottom:1px solid #cccccc}.ontario-navigation a{color:#1a1a1a;display:block;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;text-decoration:none;padding:0.6730769231rem 1.5rem}.ontario-navigation a:hover{text-decoration:underline;background-color:#e6e6e6}.ontario-navigation a:active{text-decoration:underline;background-color:#cccccc}.ontario-navigation a:focus,.ontario-navigation a:active{-webkit-box-shadow:0 0 0 4px #009ADB inset;box-shadow:0 0 0 4px #009ADB inset}.ontario-navigation a.ontario-link--active{border-left:6px solid #1a1a1a;background-color:#f2f2f2}.ontario-navigation.ontario-navigation--open .ontario-navigation__container{visibility:visible;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform 0.4s ease-in-out;transition:-webkit-transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out}@media screen and (min-width: 73em){.ontario-navigation.ontario-navigation--open .ontario-navigation__container{-webkit-transition:none;transition:none;display:block}}.ontario-overlay{position:fixed;top:0;left:0;background:rgba(0, 0, 0, 0.6);width:100%;height:100%;z-index:2}.ontario-header__icon-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}',
};
const eo = class {
	constructor(o) {
		t(this, o),
			(this.toggleExpanderEvent = e(this, 'toggleExpanderEvent', 7)),
			(this.onClick = (o) => {
				const t = o.target,
					i = null == t ? void 0 : t.parentElement;
				null == i || i.classList.toggle('ontario-expander--active');
				let e = null == i ? void 0 : i.querySelector("[data-toggle='ontario-expander-content']");
				null == e || e.classList.toggle('ontario-expander__content--opened'),
					(null == e ? void 0 : e.classList.contains('ontario-expander__content--opened'))
						? e.setAttribute('aria-hidden', 'false')
						: null == e || e.setAttribute('aria-hidden', 'true'),
					(null == i ? void 0 : i.classList.contains('ontario-expander--active'))
						? null == i || i.setAttribute('aria-expanded', 'true')
						: null == i || i.setAttribute('aria-expanded', 'false'),
					this.toggleExpanderEvent.emit(o);
			}),
			(this.hintContentType = 'string'),
			(this.hint = void 0),
			(this.content = void 0),
			(this.elementId = void 0),
			(this.hintState = void 0);
	}
	checkHintContentType() {
		return 'string' !== this.hintContentType && 'html' !== this.hintContentType
			? (new g()
					.addDesignSystemTag()
					.addMonospaceText(' hintContentType ')
					.addRegularText('for')
					.addMonospaceText(' <ontario-hint-text> ')
					.addRegularText('was not one of the permitted types. A default type of `string` will be applied.')
					.printMessage(),
			  (this.hintContentType = 'string'))
			: this.hintContentType;
	}
	updateHintContent() {
		var o, t;
		(this.hintState =
			null !== (t = null !== (o = this.hint) && void 0 !== o ? o : this.host.textContent) && void 0 !== t ? t : ''),
			this.validateHint(this.hintState);
	}
	validateContent(o) {
		s(o) &&
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' content ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-hint-expander> ')
				.addRegularText('was not provided')
				.printMessage();
	}
	validateHint(o) {
		s(o) &&
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' hint ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-hint-expander> ')
				.addRegularText('was not provided')
				.printMessage();
	}
	componentWillLoad() {
		var o;
		(this.elementId = null !== (o = this.elementId) && void 0 !== o ? o : Y()),
			this.updateHintContent(),
			this.checkHintContentType(),
			this.validateContent(this.content);
	}
	componentDidLoad() {
		new MutationObserver((o) => {
			o.forEach((o) => {
				'attributes' === o.type && this.updateHintContent();
			});
		}).observe(this.host, { attributes: !0 });
	}
	getId() {
		var o;
		return null !== (o = this.elementId) && void 0 !== o ? o : '';
	}
	render() {
		return o(
			'div',
			{ class: 'ontario-hint-expander__container' },
			o(
				'button',
				{
					'class': 'ontario-hint-expander__button',
					'onClick': this.onClick,
					'id': `hint-expander-button-${this.getId()}`,
					'aria-controls': `hint-expander-content-${this.getId()}`,
					'aria-expanded': 'false',
					'data-toggle': 'ontario-collapse',
				},
				o(
					'span',
					{ class: 'ontario-hint-expander__button-icon--close ontario-icon' },
					o('ontario-icon-chevron-up', null),
				),
				o('span', { class: 'ontario-hint-expander__button-icon--open' }, o('ontario-icon-chevron-down', null)),
				this.hint,
			),
			o(
				'div',
				{
					'class': 'ontario-hint-expander__content',
					'id': `hint-expander-content-${this.getId()}`,
					'aria-labelledby': `hint-expander-button-${this.getId()}`,
					'aria-hidden': 'true',
					'data-toggle': 'ontario-expander-content',
				},
				'string' === this.hintContentType ? this.content : o('span', { innerHTML: this.content }),
			),
		);
	}
	get host() {
		return i(this);
	}
	static get watchers() {
		return { hintContentType: ['checkHintContentType'], hint: ['updateHintContent'], content: ['validateContent'] };
	}
};
eo.style =
	'.ontario-hint-expander__button:focus,.ontario-hint-expander__button:active{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-hint-expander__container{max-width:48rem}.ontario-hint-expander__button{color:#0066CC;cursor:pointer;background:none;border:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:400;font-size:1rem;text-align:left;margin:0 0 1rem 0;padding:0 0.25rem 0 0}.ontario-hint-expander__button-icon--close{display:none;margin-right:0.25rem}.ontario-hint-expander__button-icon--open{display:inline-block;margin-right:0.25rem}.ontario-hint-expander__button:hover{color:#00478F}.ontario-hint-expander__button:active{color:#002142}.ontario-hint-expander__button>*{pointer-events:none}.ontario-hint-expander__content{border-left:4px solid #cccccc;color:#1a1a1a;background-color:#f2f2f2;display:none;padding:1rem 1rem 1rem calc(1rem + 0.25rem);margin:0 0 1rem 0.25rem}.ontario-hint-expander__content *:first-child{margin-top:0}.ontario-hint-expander__content *:last-child{margin-bottom:0}.ontario-hint-expander__content img{width:100%}@media screen and (min-width: 40em){.ontario-hint-expander__content img{width:50%}}.ontario-hint-expander__content.ontario-expander__content--opened{display:block}.ontario-hint-expander__container.ontario-expander--active .ontario-hint-expander__button-icon--close{display:inline-block}.ontario-hint-expander__container.ontario-expander--active .ontario-hint-expander__button-icon--open{display:none}.ontario-hint-expander__checkbox-exists-true{margin:0.75rem 0 0 0.5rem}@media screen and (max-width: 40em){.ontario-hint-expander__checkbox-exists-true{margin-top:1rem}}';
const ao = class {
	constructor(o) {
		t(this, o),
			(this.hintContentType = 'string'),
			(this.hint = void 0),
			(this.elementId = void 0),
			(this.hintState = void 0);
	}
	checkHintContentType() {
		return 'string' !== this.hintContentType && 'html' !== this.hintContentType
			? (new g()
					.addDesignSystemTag()
					.addMonospaceText(' hintContentType ')
					.addRegularText('for')
					.addMonospaceText(' <ontario-hint-text> ')
					.addRegularText('was not one of the permitted types. A default type of `string` will be applied.')
					.printMessage(),
			  (this.hintContentType = 'string'))
			: this.hintContentType;
	}
	updateHintContent() {
		var o, t;
		(this.hintState =
			null !== (t = null !== (o = this.hint) && void 0 !== o ? o : this.host.textContent) && void 0 !== t ? t : ''),
			this.validateHintContent(this.hintState);
	}
	validateHintContent(o) {
		!this.host.textContent &&
			s(o) &&
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' hint ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-hint-text> ')
				.addRegularText('was not provided')
				.printMessage();
	}
	getId() {
		var o;
		return null !== (o = this.elementId) && void 0 !== o ? o : '';
	}
	async getHintTextId() {
		return this.elementId;
	}
	componentWillLoad() {
		var o;
		this.updateHintContent(),
			this.checkHintContentType(),
			(this.elementId = null !== (o = this.elementId) && void 0 !== o ? o : Y());
	}
	componentDidLoad() {
		new MutationObserver((o) => {
			o.forEach((o) => {
				'attributes' === o.type && this.updateHintContent();
			});
		}).observe(this.host, { attributes: !0 });
	}
	render() {
		return 'string' === this.hintContentType
			? o('p', { id: this.getId(), class: 'ontario-hint' }, this.hintState)
			: o('div', { id: this.getId(), class: 'ontario-hint', innerHTML: this.hintState });
	}
	get host() {
		return i(this);
	}
	static get watchers() {
		return { hintContentType: ['checkHintContentType'], hint: ['updateHintContent'] };
	}
};
ao.style =
	'.ontario-hint{color:#4d4d4d;display:inline-block;margin:0 0 1rem 0;width:100%;max-width:48rem}.ontario-hint p{margin-bottom:1rem}.ontario-hint p:first-of-type{margin-top:0}.ontario-hint p:last-of-type{margin-bottom:0}';
const no = class {
	constructor(o) {
		t(this, o),
			(this.iconWidth = 24),
			(this.iconWidthState = void 0),
			(this.colour = 'black'),
			(this.iconColourState = void 0),
			(this.iconCustomColourState = void 0);
	}
	validateWidth() {
		isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)
			? (new g()
					.addDesignSystemTag()
					.addMonospaceText(' icon-width ')
					.addRegularText('on')
					.addMonospaceText(' <ontario-icon-accessibility> ')
					.addRegularText(
						(isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number') +
							'; only a positive number is allowed. The default size of',
					)
					.addMonospaceText(' 24px ')
					.addRegularText('was assumed.')
					.printMessage(),
			  (this.iconWidthState = 24))
			: (this.iconWidthState = this.iconWidth);
	}
	validateColour() {
		r(this.colour, d)
			? (this.iconColourState = this.colour)
			: m(this.colour)
			? (this.iconCustomColourState = this.colour)
			: (this.iconColourState = this.warnDefaultColour());
	}
	warnDefaultColour() {
		return (
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-accessibility> ')
				.addRegularText('was set to an invalid colour; only')
				.addMonospaceText(' black, blue, grey or white ')
				.addRegularText('are supported. The default colour')
				.addMonospaceText(' black ')
				.addRegularText('is assumed.')
				.printMessage(),
			'black'
		);
	}
	componentWillLoad() {
		this.validateColour(), this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'accessibility',
				},
				o('path', {
					d: 'M18.4 11.2l-4.1.2 2.3-2.6c.2-.3.3-.8.2-1.3-.1-.3-.2-.6-.5-.8l-5.4-3.2c-.4-.3-1-.2-1.4.1L6.8 6.1c-.5.5-.6 1.2-.1 1.7.4.5 1.2.5 1.7.1l2-1.8 1.9 1.1-4.2 4.3c-.1.1-.1.2-.2.2-.5.2-1 .4-1.4.7L8 13.9c.5-.2 1-.4 1.5-.4 1.9 0 3.5 1.6 3.5 3.5 0 .6-.1 1.1-.4 1.5l1.5 1.5a5.29 5.29 0 0 0 .9-3c0-1.2-.4-2.4-1.1-3.3l3.3-.3-.2 4.8c-.1.7.4 1.2 1.1 1.3h.1c.6 0 1.1-.5 1.2-1.1l.2-5.9c0-.3-.1-.7-.3-.9-.3-.3-.6-.4-.9-.4zM18 5.5a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2 2 2 0 0 0 2 2zm-5.5 16.1a5.29 5.29 0 0 1-3 .9C6.5 22.5 4 20 4 17a5.29 5.29 0 0 1 .9-3l1.5 1.5c-.2.5-.4 1-.4 1.5 0 1.9 1.6 3.5 3.5 3.5.6 0 1.1-.1 1.5-.4l1.5 1.5z',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
no.style =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const ro = class {
	constructor(o) {
		t(this, o), (this.iconWidth = 24), (this.iconWidthState = void 0);
	}
	validateWidth() {
		isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)
			? (new g()
					.addDesignSystemTag()
					.addMonospaceText(' icon-width ')
					.addRegularText('on')
					.addMonospaceText(' <ontario-icon-alert-error> ')
					.addRegularText(
						(isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number') +
							'; only a positive number is allowed. The default size of',
					)
					.addMonospaceText(' 24px ')
					.addRegularText('was assumed.')
					.printMessage(),
			  (this.iconWidthState = 24))
			: (this.iconWidthState = this.iconWidth);
	}
	validateColour() {
		this.host.hasAttribute('colour') &&
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-alert-error> ')
				.addRegularText('cannot be set. The provided colour is ignored.')
				.printMessage();
	}
	componentWillLoad() {
		this.validateColour(), this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				class: `ontario-icon ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					class: 'svg-icon',
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'alert-error',
				},
				o('path', {
					d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
					fill: '#cd0000',
				}),
				o('path', { d: 'M11 17h2v-2h-2v2zm0-4h2V7h-2v6z', fill: '#fff' }),
			),
		);
	}
	get host() {
		return i(this);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'] };
	}
};
ro.style =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const lo = class {
	constructor(o) {
		t(this, o), (this.iconWidth = 24), (this.iconWidthState = void 0);
	}
	validateWidth() {
		isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)
			? (new g()
					.addDesignSystemTag()
					.addMonospaceText(' icon-width ')
					.addRegularText('on')
					.addMonospaceText(' <ontario-icon-alert-information> ')
					.addRegularText(
						(isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number') +
							'; only a positive number is allowed. The default size of',
					)
					.addMonospaceText(' 24px ')
					.addRegularText('was assumed.')
					.printMessage(),
			  (this.iconWidthState = 24))
			: (this.iconWidthState = this.iconWidth);
	}
	validateColour() {
		this.host.hasAttribute('colour') &&
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-alert-information> ')
				.addRegularText('cannot be set. The provided colour is ignored.')
				.printMessage();
	}
	componentWillLoad() {
		this.validateColour(), this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				class: `ontario-icon ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					class: 'svg-icon',
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'alert-information',
				},
				o('path', {
					d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
					fill: '#1080a6',
				}),
				o('path', { d: 'M11 17h2v-6h-2v6zm0-8h2V7h-2v2z', fill: '#fff' }),
			),
		);
	}
	get host() {
		return i(this);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'] };
	}
};
lo.style =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const so = class {
	constructor(o) {
		t(this, o), (this.iconWidth = 24), (this.iconWidthState = void 0);
	}
	validateWidth() {
		isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)
			? (new g()
					.addDesignSystemTag()
					.addMonospaceText(' icon-width ')
					.addRegularText('on')
					.addMonospaceText(' <ontario-icon-alert-success> ')
					.addRegularText(
						(isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number') +
							'; only a positive number is allowed. The default size of',
					)
					.addMonospaceText(' 24px ')
					.addRegularText('was assumed.')
					.printMessage(),
			  (this.iconWidthState = 24))
			: (this.iconWidthState = this.iconWidth);
	}
	validateColour() {
		this.host.hasAttribute('colour') &&
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-alert-success> ')
				.addRegularText('cannot be set. The provided colour is ignored.')
				.printMessage();
	}
	componentWillLoad() {
		this.validateColour(), this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				class: `ontario-icon ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					class: 'svg-icon',
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'alert-success',
				},
				o('path', {
					d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.4-1.4 3.6 3.58L17.17 7l1.4 1.42L10 17z',
					fill: '#118847',
				}),
				o('path', { d: 'M5 12l5 5 8.58-8.58L17.17 7 10 14.17 6.4 10.6 5 12z', fill: '#fff' }),
			),
		);
	}
	get host() {
		return i(this);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'] };
	}
};
so.style =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const ho = class {
	constructor(o) {
		t(this, o), (this.iconWidth = 24), (this.iconWidthState = void 0);
	}
	validateWidth() {
		isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)
			? (new g()
					.addDesignSystemTag()
					.addMonospaceText(' icon-width ')
					.addRegularText('on')
					.addMonospaceText(' <ontario-icon-alert-warning> ')
					.addRegularText(
						(isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number') +
							'; only a positive number is allowed. The default size of',
					)
					.addMonospaceText(' 24px ')
					.addRegularText('was assumed.')
					.printMessage(),
			  (this.iconWidthState = 24))
			: (this.iconWidthState = this.iconWidth);
	}
	validateColour() {
		this.host.hasAttribute('colour') &&
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-alert-warning> ')
				.addRegularText('cannot be set. The provided colour is ignored.')
				.printMessage();
	}
	componentWillLoad() {
		this.validateColour(), this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				class: `ontario-icon ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					class: 'svg-icon',
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'alert-warning',
				},
				o('path', { d: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z', fill: '#ffd440' }),
				o('path', { d: 'M11 10h2v4h-2zm0 6h2v2h-2z', fill: '#000' }),
			),
		);
	}
	get host() {
		return i(this);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'] };
	}
};
ho.style =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const mo = class {
	constructor(o) {
		t(this, o),
			(this.iconWidth = 24),
			(this.iconWidthState = void 0),
			(this.colour = 'black'),
			(this.iconColourState = void 0),
			(this.iconCustomColourState = void 0);
	}
	validateWidth() {
		isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)
			? (new g()
					.addDesignSystemTag()
					.addMonospaceText(' icon-width ')
					.addRegularText('on')
					.addMonospaceText(' <ontario-icon-camera> ')
					.addRegularText(
						(isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number') +
							'; only a positive number is allowed. The default size of',
					)
					.addMonospaceText(' 24px ')
					.addRegularText('was assumed.')
					.printMessage(),
			  (this.iconWidthState = 24))
			: (this.iconWidthState = this.iconWidth);
	}
	validateColour() {
		r(this.colour, d)
			? (this.iconColourState = this.colour)
			: m(this.colour)
			? (this.iconCustomColourState = this.colour)
			: (this.iconColourState = this.warnDefaultColour());
	}
	warnDefaultColour() {
		return (
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-camera> ')
				.addRegularText('was set to an invalid colour; only')
				.addMonospaceText(' black, blue, grey or white ')
				.addRegularText('are supported. The default colour')
				.addMonospaceText(' black ')
				.addRegularText('is assumed.')
				.printMessage(),
			'black'
		);
	}
	componentWillLoad() {
		this.validateColour(), this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'camera',
				},
				o('path', {
					d: 'M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1.8a3.2 3.2 0 0 0 0-6.4 3.2 3.2 0 1 0 0 6.4z',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
mo.style =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const go = class {
	constructor(o) {
		t(this, o),
			(this.iconWidth = 24),
			(this.iconWidthState = void 0),
			(this.colour = 'black'),
			(this.iconColourState = void 0),
			(this.iconCustomColourState = void 0);
	}
	validateWidth() {
		isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)
			? (new g()
					.addDesignSystemTag()
					.addMonospaceText(' icon-width ')
					.addRegularText('on')
					.addMonospaceText(' <ontario-icon-chevron-down> ')
					.addRegularText(
						(isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number') +
							'; only a positive number is allowed. The default size of',
					)
					.addMonospaceText(' 24px ')
					.addRegularText('was assumed.')
					.printMessage(),
			  (this.iconWidthState = 24))
			: (this.iconWidthState = this.iconWidth);
	}
	validateColour() {
		r(this.colour, d)
			? (this.iconColourState = this.colour)
			: m(this.colour)
			? (this.iconCustomColourState = this.colour)
			: (this.iconColourState = this.warnDefaultColour());
	}
	warnDefaultColour() {
		return (
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-chevron-down> ')
				.addRegularText('was set to an invalid colour; only')
				.addMonospaceText(' black, blue, grey or white ')
				.addRegularText('are supported. The default colour')
				.addMonospaceText(' black ')
				.addRegularText('is assumed.')
				.printMessage(),
			'black'
		);
	}
	componentWillLoad() {
		this.validateColour(), this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'chevron-down',
				},
				o('path', { d: 'M7.4 8.6l4.6 4.58 4.6-4.58L18 10l-6 6-6-6 1.4-1.4z' }),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
go.style =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const po = class {
	constructor(o) {
		t(this, o),
			(this.iconWidth = 24),
			(this.iconWidthState = void 0),
			(this.colour = 'black'),
			(this.iconColourState = void 0),
			(this.iconCustomColourState = void 0);
	}
	validateWidth() {
		isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)
			? (new g()
					.addDesignSystemTag()
					.addMonospaceText(' icon-width ')
					.addRegularText('on')
					.addMonospaceText(' <ontario-icon-chevron-left> ')
					.addRegularText(
						(isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number') +
							'; only a positive number is allowed. The default size of',
					)
					.addMonospaceText(' 24px ')
					.addRegularText('was assumed.')
					.printMessage(),
			  (this.iconWidthState = 24))
			: (this.iconWidthState = this.iconWidth);
	}
	validateColour() {
		r(this.colour, d)
			? (this.iconColourState = this.colour)
			: m(this.colour)
			? (this.iconCustomColourState = this.colour)
			: (this.iconColourState = this.warnDefaultColour());
	}
	warnDefaultColour() {
		return (
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-chevron-left> ')
				.addRegularText('was set to an invalid colour; only')
				.addMonospaceText(' black, blue, grey or white ')
				.addRegularText('are supported. The default colour')
				.addMonospaceText(' black ')
				.addRegularText('is assumed.')
				.printMessage(),
			'black'
		);
	}
	componentWillLoad() {
		this.validateColour(), this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'chevron-left',
				},
				o('path', { d: 'M15.4 7.4L14 6l-6 6 6 6 1.4-1.4-4.58-4.6 4.58-4.6z' }),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
po.style =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const co = class {
	constructor(o) {
		t(this, o),
			(this.iconWidth = 24),
			(this.iconWidthState = void 0),
			(this.colour = 'black'),
			(this.iconColourState = void 0),
			(this.iconCustomColourState = void 0);
	}
	validateWidth() {
		isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)
			? (new g()
					.addDesignSystemTag()
					.addMonospaceText(' icon-width ')
					.addRegularText('on')
					.addMonospaceText(' <ontario-icon-chevron-up> ')
					.addRegularText(
						(isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number') +
							'; only a positive number is allowed. The default size of',
					)
					.addMonospaceText(' 24px ')
					.addRegularText('was assumed.')
					.printMessage(),
			  (this.iconWidthState = 24))
			: (this.iconWidthState = this.iconWidth);
	}
	validateColour() {
		r(this.colour, d)
			? (this.iconColourState = this.colour)
			: m(this.colour)
			? (this.iconCustomColourState = this.colour)
			: (this.iconColourState = this.warnDefaultColour());
	}
	warnDefaultColour() {
		return (
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-chevron-up> ')
				.addRegularText('was set to an invalid colour; only')
				.addMonospaceText(' black, blue, grey or white ')
				.addRegularText('are supported. The default colour')
				.addMonospaceText(' black ')
				.addRegularText('is assumed.')
				.printMessage(),
			'black'
		);
	}
	componentWillLoad() {
		this.validateColour(), this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'chevron-up',
				},
				o('path', { d: 'M7.4 15.4l4.6-4.58 4.6 4.58L18 14l-6-6-6 6 1.4 1.4z' }),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
co.style =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const uo = class {
	constructor(o) {
		t(this, o),
			(this.iconWidth = 24),
			(this.iconWidthState = void 0),
			(this.colour = 'black'),
			(this.iconColourState = void 0),
			(this.iconCustomColourState = void 0);
	}
	validateWidth() {
		isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)
			? (new g()
					.addDesignSystemTag()
					.addMonospaceText(' icon-width ')
					.addRegularText('on')
					.addMonospaceText(' <ontario-icon-email> ')
					.addRegularText(
						(isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number') +
							'; only a positive number is allowed. The default size of',
					)
					.addMonospaceText(' 24px ')
					.addRegularText('was assumed.')
					.printMessage(),
			  (this.iconWidthState = 24))
			: (this.iconWidthState = this.iconWidth);
	}
	validateColour() {
		r(this.colour, d)
			? (this.iconColourState = this.colour)
			: m(this.colour)
			? (this.iconCustomColourState = this.colour)
			: (this.iconColourState = this.warnDefaultColour());
	}
	warnDefaultColour() {
		return (
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-email> ')
				.addRegularText('was set to an invalid colour; only')
				.addMonospaceText(' black, blue, grey or white ')
				.addRegularText('are supported. The default colour')
				.addMonospaceText(' black ')
				.addRegularText('is assumed.')
				.printMessage(),
			'black'
		);
	}
	componentWillLoad() {
		this.validateColour(), this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'email',
				},
				o('path', {
					d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
uo.style =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const fo = class {
	constructor(o) {
		t(this, o),
			(this.iconWidth = 24),
			(this.iconWidthState = void 0),
			(this.colour = 'black'),
			(this.iconColourState = void 0),
			(this.iconCustomColourState = void 0);
	}
	validateWidth() {
		isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)
			? (new g()
					.addDesignSystemTag()
					.addMonospaceText(' icon-width ')
					.addRegularText('on')
					.addMonospaceText(' <ontario-icon-help> ')
					.addRegularText(
						(isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number') +
							'; only a positive number is allowed. The default size of',
					)
					.addMonospaceText(' 24px ')
					.addRegularText('was assumed.')
					.printMessage(),
			  (this.iconWidthState = 24))
			: (this.iconWidthState = this.iconWidth);
	}
	validateColour() {
		r(this.colour, d)
			? (this.iconColourState = this.colour)
			: m(this.colour)
			? (this.iconCustomColourState = this.colour)
			: (this.iconColourState = this.warnDefaultColour());
	}
	warnDefaultColour() {
		return (
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-help> ')
				.addRegularText('was set to an invalid colour; only')
				.addMonospaceText(' black, blue, grey or white ')
				.addRegularText('are supported. The default colour')
				.addMonospaceText(' black ')
				.addRegularText('is assumed.')
				.printMessage(),
			'black'
		);
	}
	componentWillLoad() {
		this.validateColour(), this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'help',
				},
				o('path', {
					d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.6-.86.6-1.4 0-1.1-.9-2-2-2s-2 .9-2 2H8a4 4 0 1 1 8 0 3.18 3.18 0 0 1-.93 2.25z',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
fo.style =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const bo = class {
	constructor(o) {
		t(this, o), (this.iconWidth = 24), (this.iconWidthState = void 0);
	}
	validateWidth() {
		isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)
			? (new g()
					.addDesignSystemTag()
					.addMonospaceText(' icon-width ')
					.addRegularText('on')
					.addMonospaceText(' <ontario-icon-mastercard> ')
					.addRegularText(
						(isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number') +
							'; only a positive number is allowed. The default size of',
					)
					.addMonospaceText(' 24px ')
					.addRegularText('was assumed.')
					.printMessage(),
			  (this.iconWidthState = 24))
			: (this.iconWidthState = this.iconWidth);
	}
	validateColour() {
		this.host.hasAttribute('colour') &&
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-mastercard> ')
				.addRegularText('cannot be set. The provided colour is ignored.')
				.printMessage();
	}
	componentWillLoad() {
		this.validateColour(), this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				class: `ontario-icon ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{ class: 'svg-icon', role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', id: 'mastercard' },
				o('circle', { cx: '8', cy: '12', r: '6.5', fill: '#eb001b' }),
				o('circle', { cx: '16', cy: '12', r: '6.5', fill: '#f79e1b' }),
				o('path', {
					d: 'M12 17.124S9.5 15.5 9.5 12 12 6.876 12 6.876 14.5 8.5 14.5 12 12 17.124 12 17.124z',
					fill: '#ff5f00',
				}),
				o('path', {
					d: 'M21.173 16.85v-.3h.125v-.06H21v.06h.117v.3h.055zm.578 0v-.35h-.1l-.105.25-.105-.25h-.1v.35h.065v-.265l.098.227h.067l.098-.227v.265h.063z',
					fill: '#f79e1b',
				}),
				o(
					'g',
					{ fill: '#231f20' },
					o('path', {
						d: 'M5.275 21.953v-1.098a.66.66 0 0 0-.187-.503.65.65 0 0 0-.501-.192.68.68 0 0 0-.35.072c-.108.055-.2.137-.265.24-.06-.1-.145-.18-.246-.235a.64.64 0 0 0-.332-.076.58.58 0 0 0-.513.26v-.216H2.5v1.75h.384V21c-.016-.12.023-.245.105-.333s.203-.138.324-.132c.253 0 .38.165.38.46v.974h.384V21c-.016-.12.024-.244.105-.333s.202-.138.323-.132c.26 0 .384.165.384.46v.974l.384-.007zm5.687-1.75h-.626v-.53h-.384v.53h-.348v.348h.355v.806c0 .406.157.648.608.648.168.001.333-.046.476-.136l-.1-.326c-.102.06-.218.095-.337.1-.183 0-.253-.117-.253-.293v-.798h.622l-.004-.348zm3.247-.044c-.186-.005-.368.096-.46.256v-.212h-.377v1.75h.38v-.98c0-.29.124-.45.366-.45a.62.62 0 0 1 .238.044l.117-.366c-.087-.03-.178-.047-.27-.048l.007.007zm-4.9.183a1.31 1.31 0 0 0-.714-.183c-.443 0-.732.212-.732.56 0 .286.212.46.604.516l.183.026c.21.03.308.084.308.183 0 .136-.14.212-.4.212a.93.93 0 0 1-.582-.183l-.183.297c.222.155.487.234.758.227.505 0 .798-.238.798-.57s-.23-.47-.61-.523l-.183-.026c-.165-.022-.297-.055-.297-.172s.124-.205.333-.205c.193.002.382.054.55.15l.168-.308zM19.5 20.16c-.186-.005-.368.096-.46.256v-.212h-.377v1.75h.38v-.98c0-.29.124-.45.366-.45a.62.62 0 0 1 .238.044l.117-.366c-.087-.03-.18-.047-.27-.048l.007.007zm-4.906.915c-.01.246.09.492.265.664s.423.265.67.25c.23.012.453-.063.63-.21l-.183-.308a.77.77 0 0 1-.458.158.56.56 0 0 1-.517-.56.56.56 0 0 1 .517-.56.77.77 0 0 1 .458.157l.183-.308c-.176-.146-.4-.22-.63-.21-.246-.014-.493.08-.67.25s-.274.418-.265.664v.007zm3.566 0v-.87h-.38v.212c-.13-.166-.34-.264-.55-.256-.243 0-.476.096-.647.268s-.268.404-.268.647.096.476.268.647.405.268.647.268c.21.008.42-.1.55-.256v.212h.38v-.87zm-1.417 0c.02-.323.338-.557.65-.484a.54.54 0 0 1 .4.422c.056.315-.195.62-.518.622-.3.004-.55-.264-.53-.56zm-4.595-.915c-.243.003-.474.103-.643.277s-.263.408-.26.65.103.474.277.643.408.262.65.26c.263.014.522-.07.727-.238l-.183-.282c-.145.116-.324.18-.51.183-.126.01-.25-.028-.35-.108s-.16-.195-.175-.32h1.3v-.146c0-.55-.34-.915-.83-.915l-.005-.004zm0 .34c.114-.003.227.042.31.12a.44.44 0 0 1 .133.304h-.915a.45.45 0 0 1 .465-.425h.007zm9.54.578V19.5h-.366v.915c-.13-.166-.34-.264-.55-.256-.243 0-.476.096-.647.268s-.268.404-.268.647.096.476.268.647.404.268.647.268c.21.008.42-.1.55-.256v.212h.366v-.868zm.635.62c.046-.001.092.017.126.05s.052.077.052.123-.02.1-.052.123-.08.05-.126.05c-.07-.001-.136-.043-.165-.106-.018-.043-.018-.093 0-.136a.18.18 0 0 1 .095-.091c.017-.007.072-.013.07-.013zm0 .31c.035 0 .07-.015.095-.04s.036-.058.036-.09c0-.05-.03-.1-.078-.12s-.112-.01-.15.03a.14.14 0 0 0 0 .183.14.14 0 0 0 .102.04h-.005zm-1.394-1.414c.315.074.49.43.365.723a.54.54 0 0 1-.484.321.54.54 0 0 1-.501-.347.54.54 0 0 1 .619-.697zm-13.505.484v-.875h-.38v.212c-.065-.083-.148-.15-.244-.194s-.2-.066-.306-.062c-.243 0-.476.096-.647.268s-.268.404-.268.647.096.476.268.647.404.268.647.268c.21.008.42-.1.55-.256v.212h.38v-.868zm-1.417 0c.02-.32.334-.558.65-.484a.54.54 0 0 1 .399.421c.056.315-.194.62-.518.623a.55.55 0 0 1-.535-.56h.004z',
					}),
					o('path', {
						d: 'M22.335 21.79c.017-.001.033.002.047.012.005.005.01.01.013.017s.004.014.003.02c-.005.023-.008.028-.013.032-.01.01-.024.015-.038.016l.052.06h-.04l-.048-.06h-.016v.06h-.034v-.158h.075zm-.04.03v.043h.04c.012 0 .023.002.023-.008v-.023c0-.01-.002-.013-.023-.012h-.04z',
					}),
				),
			),
		);
	}
	get host() {
		return i(this);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'] };
	}
};
bo.style =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const wo = class {
	constructor(o) {
		t(this, o),
			(this.iconWidth = 24),
			(this.iconWidthState = void 0),
			(this.colour = 'black'),
			(this.iconColourState = void 0),
			(this.iconCustomColourState = void 0);
	}
	validateWidth() {
		isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)
			? (new g()
					.addDesignSystemTag()
					.addMonospaceText(' icon-width ')
					.addRegularText('on')
					.addMonospaceText(' <ontario-icon-notification> ')
					.addRegularText(
						(isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number') +
							'; only a positive number is allowed. The default size of',
					)
					.addMonospaceText(' 24px ')
					.addRegularText('was assumed.')
					.printMessage(),
			  (this.iconWidthState = 24))
			: (this.iconWidthState = this.iconWidth);
	}
	validateColour() {
		r(this.colour, d)
			? (this.iconColourState = this.colour)
			: m(this.colour)
			? (this.iconCustomColourState = this.colour)
			: (this.iconColourState = this.warnDefaultColour());
	}
	warnDefaultColour() {
		return (
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-notification> ')
				.addRegularText('was set to an invalid colour; only')
				.addMonospaceText(' black, blue, grey or white ')
				.addRegularText('are supported. The default colour')
				.addMonospaceText(' black ')
				.addRegularText('is assumed.')
				.printMessage(),
			'black'
		);
	}
	componentWillLoad() {
		this.validateColour(), this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'notification',
				},
				o('path', {
					d: 'M21 19v1H3v-1l2-2v-6a6.99 6.99 0 0 1 5-6.71V4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.3A6.99 6.99 0 0 1 19 11v6l2 2zm-7 2a2 2 0 0 1-2 2 2 2 0 0 1-2-2',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
wo.style =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const xo = class {
	constructor(o) {
		t(this, o),
			(this.iconWidth = 24),
			(this.iconWidthState = void 0),
			(this.colour = 'black'),
			(this.iconColourState = void 0),
			(this.iconCustomColourState = void 0);
	}
	validateWidth() {
		isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)
			? (new g()
					.addDesignSystemTag()
					.addMonospaceText(' icon-width ')
					.addRegularText('on')
					.addMonospaceText(' <ontario-icon-print> ')
					.addRegularText(
						(isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number') +
							'; only a positive number is allowed. The default size of',
					)
					.addMonospaceText(' 24px ')
					.addRegularText('was assumed.')
					.printMessage(),
			  (this.iconWidthState = 24))
			: (this.iconWidthState = this.iconWidth);
	}
	validateColour() {
		r(this.colour, d)
			? (this.iconColourState = this.colour)
			: m(this.colour)
			? (this.iconCustomColourState = this.colour)
			: (this.iconColourState = this.warnDefaultColour());
	}
	warnDefaultColour() {
		return (
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-print> ')
				.addRegularText('was set to an invalid colour; only')
				.addMonospaceText(' black, blue, grey or white ')
				.addRegularText('are supported. The default colour')
				.addMonospaceText(' black ')
				.addRegularText('is assumed.')
				.printMessage(),
			'black'
		);
	}
	componentWillLoad() {
		this.validateColour(), this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'print',
				},
				o('path', {
					d: 'M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
xo.style =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const vo = class {
	constructor(o) {
		t(this, o),
			(this.iconWidth = 24),
			(this.iconWidthState = void 0),
			(this.colour = 'black'),
			(this.iconColourState = void 0),
			(this.iconCustomColourState = void 0);
	}
	validateWidth() {
		isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)
			? (new g()
					.addDesignSystemTag()
					.addMonospaceText(' icon-width ')
					.addRegularText('on')
					.addMonospaceText(' <ontario-icon-sentiment-5> ')
					.addRegularText(
						(isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number') +
							'; only a positive number is allowed. The default size of',
					)
					.addMonospaceText(' 24px ')
					.addRegularText('was assumed.')
					.printMessage(),
			  (this.iconWidthState = 24))
			: (this.iconWidthState = this.iconWidth);
	}
	validateColour() {
		r(this.colour, d)
			? (this.iconColourState = this.colour)
			: m(this.colour)
			? (this.iconCustomColourState = this.colour)
			: (this.iconColourState = this.warnDefaultColour());
	}
	warnDefaultColour() {
		return (
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-sentiment-5> ')
				.addRegularText('was set to an invalid colour; only')
				.addMonospaceText(' black, blue, grey or white ')
				.addRegularText('are supported. The default colour')
				.addMonospaceText(' black ')
				.addRegularText('is assumed.')
				.printMessage(),
			'black'
		);
	}
	componentWillLoad() {
		this.validateColour(), this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'sentiment-5',
				},
				o('path', {
					d: 'M12 2a10 10 0 1 0 0 20 10.01 10.01 0 0 0 10-10A10.01 10.01 0 0 0 11.99 2zm0 18a8 8 0 1 1 0-16 8 8 0 1 1 0 16zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7zm8.5-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 1 0 0 3zm-7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 1 0 0 3z',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
vo.style =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const ko = class {
	constructor(o) {
		t(this, o),
			(this.iconWidth = 24),
			(this.iconWidthState = void 0),
			(this.colour = 'black'),
			(this.iconColourState = void 0),
			(this.iconCustomColourState = void 0);
	}
	validateWidth() {
		isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)
			? (new g()
					.addDesignSystemTag()
					.addMonospaceText(' icon-width ')
					.addRegularText('on')
					.addMonospaceText(' <ontario-icon-text-message> ')
					.addRegularText(
						(isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number') +
							'; only a positive number is allowed. The default size of',
					)
					.addMonospaceText(' 24px ')
					.addRegularText('was assumed.')
					.printMessage(),
			  (this.iconWidthState = 24))
			: (this.iconWidthState = this.iconWidth);
	}
	validateColour() {
		r(this.colour, d)
			? (this.iconColourState = this.colour)
			: m(this.colour)
			? (this.iconCustomColourState = this.colour)
			: (this.iconColourState = this.warnDefaultColour());
	}
	warnDefaultColour() {
		return (
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-text-message> ')
				.addRegularText('was set to an invalid colour; only')
				.addMonospaceText(' black, blue, grey or white ')
				.addRegularText('are supported. The default colour')
				.addMonospaceText(' black ')
				.addRegularText('is assumed.')
				.printMessage(),
			'black'
		);
	}
	componentWillLoad() {
		this.validateColour(), this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'text-message',
				},
				o('path', {
					d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
ko.style =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const yo = class {
	constructor(o) {
		t(this, o),
			(this.iconWidth = 24),
			(this.iconWidthState = void 0),
			(this.colour = 'black'),
			(this.iconColourState = void 0),
			(this.iconCustomColourState = void 0);
	}
	validateWidth() {
		isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)
			? (new g()
					.addDesignSystemTag()
					.addMonospaceText(' icon-width ')
					.addRegularText('on')
					.addMonospaceText(' <ontario-icon-transport-bus> ')
					.addRegularText(
						(isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number') +
							'; only a positive number is allowed. The default size of',
					)
					.addMonospaceText(' 24px ')
					.addRegularText('was assumed.')
					.printMessage(),
			  (this.iconWidthState = 24))
			: (this.iconWidthState = this.iconWidth);
	}
	validateColour() {
		r(this.colour, d)
			? (this.iconColourState = this.colour)
			: m(this.colour)
			? (this.iconCustomColourState = this.colour)
			: (this.iconColourState = this.warnDefaultColour());
	}
	warnDefaultColour() {
		return (
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-transport-bus> ')
				.addRegularText('was set to an invalid colour; only')
				.addMonospaceText(' black, blue, grey or white ')
				.addRegularText('are supported. The default colour')
				.addMonospaceText(' black ')
				.addRegularText('is assumed.')
				.printMessage(),
			'black'
		);
	}
	componentWillLoad() {
		this.validateColour(), this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'transport-bus',
				},
				o('path', {
					d: 'M4 16c0 .88.4 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.6-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 1 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 1 1 0 3zm1.5-6H6V6h12v5z',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
yo.style =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const _o = class {
	constructor(o) {
		t(this, o),
			(this.inputOnChange = e(this, 'inputOnChange', 7)),
			(this.inputOnBlur = e(this, 'inputOnBlur', 7)),
			(this.inputOnFocus = e(this, 'inputOnFocus', 7)),
			(this.handleEvent = (o, t) => {
				B(
					o,
					t,
					o.target,
					this.inputOnChange,
					this.inputOnFocus,
					this.inputOnBlur,
					'input',
					this.customOnChange,
					this.customOnFocus,
					this.customOnBlur,
				);
			}),
			(this.caption = void 0),
			(this.elementId = void 0),
			(this.inputWidth = 'default'),
			(this.name = void 0),
			(this.hintText = void 0),
			(this.required = !1),
			(this.type = 'text'),
			(this.value = void 0),
			(this.language = 'en'),
			(this.hintExpander = void 0),
			(this.hintTextId = void 0),
			(this.customOnChange = void 0),
			(this.customOnBlur = void 0),
			(this.customOnFocus = void 0),
			(this.internalHintText = void 0),
			(this.internalHintExpander = void 0),
			(this.captionState = void 0);
	}
	handleSetAppLanguage(o) {
		this.language = l(o);
	}
	handleHeaderLanguageToggled(o) {
		this.language = l(o);
	}
	validateName(o) {
		s(o) &&
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' name ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-input> ')
				.addRegularText('was not provided')
				.printMessage();
	}
	parseHintText() {
		if (this.hintText) {
			const o = D(this.hintText);
			this.internalHintText = o;
		}
	}
	parseHintExpander() {
		const o = this.hintExpander;
		o && (this.internalHintExpander = 'string' == typeof o ? JSON.parse(o) : o);
	}
	updateCaptionState(o) {
		this.captionState = new O(this.element.tagName, o, y, this.language, !1, this.required);
	}
	updateLanguage() {
		this.updateCaptionState(this.caption);
	}
	getId() {
		var o;
		return null !== (o = this.elementId) && void 0 !== o ? o : '';
	}
	getValue() {
		var o;
		return null !== (o = this.value) && void 0 !== o ? o : '';
	}
	getClass() {
		return this.hintExpander
			? 'default' === this.inputWidth
				? 'ontario-input ontario-input-hint-expander--true'
				: `ontario-input ontario-input--${this.inputWidth} ontario-input-hint-expander--true`
			: 'default' === this.inputWidth
			? 'ontario-input'
			: `ontario-input ontario-input--${this.inputWidth}`;
	}
	async componentDidLoad() {
		var o;
		this.hintTextId = await (null === (o = this.hintTextRef) || void 0 === o ? void 0 : o.getHintTextId());
	}
	componentWillLoad() {
		var o;
		this.updateCaptionState(this.caption),
			(this.elementId = null !== (o = this.elementId) && void 0 !== o ? o : Y()),
			this.parseHintText(),
			this.parseHintExpander(),
			this.validateName(this.name),
			(this.language = l(this.language));
	}
	render() {
		return o(
			'div',
			{ class: 'ontario-form-group' },
			this.captionState.getCaption(this.getId(), !!this.internalHintExpander),
			this.internalHintText &&
				o('ontario-hint-text', {
					hint: this.internalHintText.hint,
					hintContentType: this.internalHintText.hintContentType,
					ref: (o) => (this.hintTextRef = o),
				}),
			o(N, {
				'aria-describedBy': this.hintTextId,
				'className': this.getClass(),
				'id': this.getId(),
				'name': this.name,
				'onInput': (o) => this.handleEvent(o, S.Change),
				'onBlur': (o) => this.handleEvent(o, S.Blur),
				'onFocus': (o) => this.handleEvent(o, S.Focus),
				'type': this.type,
				'value': this.getValue(),
				'required': !!this.required,
			}),
			this.internalHintExpander &&
				o('ontario-hint-expander', {
					hint: this.internalHintExpander.hint,
					content: this.internalHintExpander.content,
					hintContentType: this.internalHintExpander.hintContentType,
				}),
		);
	}
	get element() {
		return i(this);
	}
	static get watchers() {
		return {
			name: ['validateName'],
			hintText: ['parseHintText'],
			hintExpander: ['parseHintExpander'],
			caption: ['updateCaptionState'],
			language: ['updateLanguage'],
		};
	}
};
_o.style =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1>.ontario-label--heading,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1>.ontario-label--heading,h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1>.ontario-label--heading,h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}.ontario-input:focus,.ontario-input:active{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;font-size:inherit;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-label{cursor:pointer;color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;line-height:1.5;margin:0 0 1rem 0;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-label{font-size:1.125rem;line-height:1.56}}.ontario-label--large{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2;max-width:26.25em}@media screen and (max-width: 40em){.ontario-label--large{font-size:1.4375rem;line-height:1.39}}h1>.ontario-label--heading{display:inline-block;margin:0}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;width:100%;padding:0.625rem 1rem;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;padding:0.625rem 1rem;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out;width:100%}.ontario-input-hint-expander--true{margin-bottom:1rem}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}';
const Fo = class {
	constructor(o) {
		t(this, o),
			(this.setAppLanguage = e(this, 'setAppLanguage', 7)),
			(this.headerLanguageToggled = e(this, 'headerLanguageToggled', 7)),
			(this.updateHTMLLang = (o) => {
				const t = document.firstElementChild;
				'html' === (null == t ? void 0 : t.tagName.toLowerCase()) && t.setAttribute('lang', o || 'en');
			}),
			(this.language = void 0),
			(this.size = 'default'),
			(this.url = void 0),
			(this.customLanguageToggle = void 0),
			(this.translations = y);
	}
	setAppLanguageHandler() {
		let o;
		(o = this.language ? this.language : document.documentElement.lang ? document.documentElement.lang : 'en'),
			(this.language = o),
			this.setAppLanguage.emit(o),
			this.updateHTMLLang(o);
	}
	handleHeaderLanguageToggled(o, t) {
		const i = 'en' === o ? 'fr' : 'en';
		(this.language = i),
			this.headerLanguageToggled.emit(i),
			this.updateHTMLLang(i),
			this.customLanguageToggle && this.customLanguageToggle(t);
	}
	updateLanguage() {
		(this.language = l(this.language)), this.setAppLanguageHandler();
	}
	connectedCallback() {
		this.updateLanguage();
	}
	render() {
		const t = 'en' === this.language ? 'Français' : 'English',
			i = 'en' === this.language ? 'FR' : 'EN';
		return o(
			'a',
			{
				'class':
					'default' === this.size
						? 'ontario-language-toggler ontario-language-toggler--default'
						: 'ontario-language-toggler ontario-language-toggler--small',
				'href': this.url ? this.url : '#',
				'aria-label': this.translations.languageToggle.ariaLabel[`${this.language}`],
				'onClick': (o) => this.handleHeaderLanguageToggled(this.language, o),
			},
			'small' === this.size
				? o('span', null, t)
				: o(
						n,
						null,
						o('abbr', { title: t, class: 'ontario-show-for-small-only' }, i),
						o('span', { class: 'ontario-show-for-medium' }, t),
				  ),
		);
	}
	static get watchers() {
		return { language: ['updateLanguage'] };
	}
};
Fo.style =
	'.ontario-language-toggler:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-language-toggler{background-color:#1a1a1a;border:none;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;color:#FFFFFF;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;height:48px;line-height:1.5555555556;text-align:center;text-decoration:none}.ontario-language-toggler:hover{background-color:#4d4d4d}.ontario-language-toggler:active{background-color:#666666;color:#FFFFFF}.ontario-language-toggler:focus{background-color:#4d4d4d;color:#FFFFFF}.ontario-language-toggler:visited{color:#FFFFFF}.ontario-language-toggler abbr[title]{text-decoration:none}.ontario-language-toggler--default{padding:0.75rem}.ontario-language-toggler--small{font-size:1rem;line-height:1.375rem;height:auto;outline:none;padding:0.5rem 0.75rem}';
const zo = class {
	constructor(o) {
		t(this, o),
			(this.type = 'large'),
			(this.isLoading = !1),
			(this.message = void 0),
			(this.fullScreenOverlay = !0),
			(this.language = 'en'),
			(this.translations = y),
			(this.isLoadingState = void 0),
			(this.typeState = void 0);
	}
	handleSetAppLanguage(o) {
		this.language = l(o);
	}
	handleHeaderLanguageToggled(o) {
		this.language = l(o);
	}
	validateType() {
		return r(this.type, ['large', 'small'])
			? (this.typeState = this.type)
			: (this.warnDefaultType(), (this.typeState = 'large'));
	}
	warnDefaultType() {
		new g()
			.addDesignSystemTag()
			.addMonospaceText(' type ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-loading-indicator> ')
			.addRegularText('was set to an invalid type; only')
			.addMonospaceText(' large or small ')
			.addRegularText('are supported. The default type')
			.addMonospaceText(' large ')
			.addRegularText('is assumed.')
			.printMessage();
	}
	componentWillLoad() {
		(this.language = l(this.language)), this.validateType(), (this.isLoadingState = this.isLoading);
	}
	render() {
		var t;
		return 'large' === this.typeState
			? o(
					'div',
					{
						'class': this.fullScreenOverlay
							? 'ontario-loading-indicator__overlay'
							: 'ontario-loading-indicator__overlay--within-container',
						'aria-hidden': this.isLoadingState ? 'false' : 'true',
						'role': 'alert',
						'aria-live': 'assertive',
					},
					o(
						'div',
						{ class: 'ontario-loading-indicator' },
						o(
							'svg',
							{
								class: 'ontario-loading-indicator__spinner',
								viewBox: '25 25 50 50',
								xmlns: 'http://www.w3.org/2000/svg',
							},
							o('circle', { 'cx': '50', 'cy': '50', 'r': '20', 'fill': 'none', 'stroke-width': '4' }),
						),
						o(
							'p',
							null,
							null !== (t = this.message) && void 0 !== t ? t : this.translations.loading[`${this.language}`],
						),
					),
			  )
			: o('p', null, 'The small loading indicator is still under development.');
	}
	static get watchers() {
		return { type: ['validateType'] };
	}
};
zo.style =
	'.ontario-loading-indicator__overlay,.ontario-loading-indicator__overlay--within-container{position:fixed;width:100%;left:0;right:0;top:0;bottom:0;background-color:rgba(255, 255, 255, 0.7);z-index:9999}.ontario-loading-indicator__overlay[aria-hidden=false],.ontario-loading-indicator__overlay--within-container[aria-hidden=false]{display:block}.ontario-loading-indicator__overlay[aria-hidden=true],.ontario-loading-indicator__overlay--within-container[aria-hidden=true]{display:none}.ontario-loading-indicator__overlay--within-container{position:absolute}.ontario-loading-indicator{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:100%;height:100%}.ontario-loading-indicator p{color:#4d4d4d;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;line-height:1.5;font-weight:700;word-spacing:0.025rem;margin:0.75rem 0 0}.ontario-loading-indicator__spinner{-webkit-animation:rotator 1.5s linear infinite;animation:rotator 1.5s linear infinite;width:3rem;height:3rem;overflow:visible}.ontario-loading-indicator__spinner circle{stroke-dasharray:1, 200;stroke-dashoffset:0;stroke-linecap:round;stroke:#4d4d4d;-webkit-animation:dash 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite}@-webkit-keyframes rotator{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotator{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1, 200;stroke-dashoffset:0}50%{stroke-dasharray:89, 200;stroke-dashoffset:-35px}100%{stroke-dasharray:89, 200;stroke-dashoffset:-124px}}@keyframes dash{0%{stroke-dasharray:1, 200;stroke-dashoffset:0}50%{stroke-dasharray:89, 200;stroke-dashoffset:-35px}100%{stroke-dasharray:89, 200;stroke-dashoffset:-124px}}';
const Co = class {
	constructor(o) {
		t(this, o), (this.type = 'informational'), (this.heading = void 0), (this.content = void 0);
	}
	getClass() {
		return `ontario-alert ontario-alert--${this.type}`;
	}
	renderIcon() {
		const t = { 'icon-width': 36 };
		switch (this.type) {
			case 'informational':
				return o('ontario-icon-alert-information', Object.assign({}, t));
			case 'success':
				return o('ontario-icon-alert-success', Object.assign({}, t));
			case 'warning':
				return o('ontario-icon-alert-warning', Object.assign({}, t));
			case 'error':
				return o('ontario-icon-alert-error', Object.assign({}, t));
		}
	}
	renderContent() {
		const t = this.content;
		return 'string' == typeof t ? o('p', null, t) : o('slot', null);
	}
	render() {
		return o(
			'div',
			{ class: this.getClass() },
			o(
				'div',
				{ class: 'ontario-alert__header' },
				o('div', { class: 'ontario-alert__header-icon' }, this.renderIcon()),
				o('h2', { class: 'ontario-alert__header-title ontario-h4' }, this.heading),
			),
			o('div', { class: 'ontario-alert__body' }, this.renderContent()),
		);
	}
};
Co.style =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-alert{border-width:0 0 0 0.25rem;border-style:solid;padding:1.5rem;margin:2rem 0 2.5rem 0}.ontario-alert__header{display:-webkit-box;display:-ms-flexbox;display:flex}.ontario-alert__header-icon{display:inline-block;vertical-align:top;margin-right:0.95rem}.ontario-alert__header-title{margin-bottom:0.75rem;padding-top:0.125rem}.ontario-alert__body{margin-left:3.25rem;max-width:48rem}@media screen and (max-width: 40em){.ontario-alert__body{margin-left:0}}.ontario-alert__body p{margin-top:0}.ontario-alert__body p:last-of-type{margin-bottom:0.5rem}.ontario-alert__body p:last-of-type+ul{margin-top:1rem}.ontario-alert__body ul:last-of-type{margin-bottom:0.5rem}.ontario-alert--error ul{margin-left:1.25rem}.ontario-alert--error ul:last-of-type{margin-bottom:0.5rem}.ontario-alert--informational{border-color:#1080A6;background-color:#E2F0F4}.ontario-alert--warning{border-color:#FFD440;background-color:#FEF6DC}.ontario-alert--success{border-color:#118847;background-color:#E5f0E9}.ontario-alert--error{border-color:#CD0000;background-color:#FCEFF0}.ontario-alert--error a{color:#CD0000}.ontario-alert--error a:hover,.ontario-alert--error a:focus{color:#6b0000}.ontario-alert--error a:active{color:#280000}';
const Ao = class {
	constructor(o) {
		t(this, o),
			(this.radioOnChange = e(this, 'radioOnChange', 7)),
			(this.radioOnBlur = e(this, 'radioOnBlur', 7)),
			(this.radioOnFocus = e(this, 'radioOnFocus', 7)),
			(this.handleEvent = (o, t) => {
				var i;
				const e = o.target;
				e && (e.checked = null !== (i = e.checked) && void 0 !== i ? i : ''),
					B(
						o,
						t,
						e,
						this.radioOnChange,
						this.radioOnFocus,
						this.radioOnBlur,
						'radio',
						this.customOnChange,
						this.customOnFocus,
						this.customOnBlur,
					);
			}),
			(this.caption = void 0),
			(this.language = 'en'),
			(this.name = void 0),
			(this.hintText = void 0),
			(this.hintExpander = void 0),
			(this.required = !1),
			(this.options = void 0),
			(this.customOnChange = void 0),
			(this.customOnBlur = void 0),
			(this.customOnFocus = void 0),
			(this.hintTextId = void 0),
			(this.internalHintText = void 0),
			(this.internalHintExpander = void 0),
			(this.internalOptions = void 0),
			(this.captionState = void 0);
	}
	handleSetAppLanguage(o) {
		this.language = l(o);
	}
	handleHeaderLanguageToggled(o) {
		this.language = l(o);
	}
	parseHintText() {
		if (this.hintText) {
			const o = D(this.hintText);
			this.internalHintText = o;
		}
	}
	parseHintExpander() {
		const o = this.hintExpander;
		o && (this.internalHintExpander = 'string' == typeof o ? JSON.parse(o) : o);
	}
	parseOptions() {
		void 0 !== this.options &&
			(this.internalOptions = Array.isArray(this.options) ? this.options : JSON.parse(this.options));
	}
	validateName(o) {
		s(o) &&
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' name ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-radio-buttons> ')
				.addRegularText('was not provided')
				.printMessage();
	}
	validateOptions(o) {
		h(o) &&
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' options ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-radio-buttons> ')
				.addRegularText('was not provided')
				.printMessage();
	}
	updateCaptionState(o) {
		this.captionState = new O(this.element.tagName, o, y, this.language, !0, this.required);
	}
	updateLanguage() {
		this.updateCaptionState(this.caption);
	}
	async componentDidLoad() {
		var o;
		this.hintTextId = await (null === (o = this.hintTextRef) || void 0 === o ? void 0 : o.getHintTextId());
	}
	componentWillLoad() {
		this.updateCaptionState(this.caption),
			this.parseOptions(),
			this.parseHintText(),
			this.parseHintExpander(),
			this.validateName(this.name),
			this.validateOptions(this.internalOptions),
			(this.language = l(this.language));
	}
	render() {
		var t;
		return o(
			'div',
			{ class: 'ontario-form-group' },
			o(
				'fieldset',
				{ 'class': 'ontario-fieldset', 'aria-describedby': this.hintTextId },
				this.captionState.getCaption(void 0, !!this.internalHintExpander),
				this.internalHintText &&
					o('ontario-hint-text', {
						hint: this.internalHintText.hint,
						hintContentType: this.internalHintText.hintContentType,
						ref: (o) => (this.hintTextRef = o),
					}),
				o(
					'div',
					{ class: 'ontario-radios' },
					null === (t = this.internalOptions) || void 0 === t
						? void 0
						: t.map((t) =>
								o(
									'div',
									{ class: 'ontario-radios__item' },
									o(N, {
										className: 'ontario-radios__input',
										id: t.elementId,
										name: this.name,
										type: 'radio',
										value: t.value,
										required: !!this.required,
										onChange: (o) => this.handleEvent(o, S.Change),
										onBlur: (o) => this.handleEvent(o, S.Blur),
										onFocus: (o) => this.handleEvent(o, S.Focus),
									}),
									o(
										'label',
										{ class: 'ontario-radios__label', htmlFor: t.elementId },
										t.label,
										t.hintExpander && this.captionState.getHintExpanderAccessibilityText(t.label, !0),
									),
									o(
										'div',
										{ class: 'ontario-radios__hint-expander' },
										t.hintExpander &&
											o('ontario-hint-expander', {
												'hint': t.hintExpander.hint,
												'content': t.hintExpander.content,
												'hintContentType': t.hintExpander.hintContentType,
												'input-exists': !0,
											}),
									),
								),
						  ),
					this.internalHintExpander &&
						o('ontario-hint-expander', {
							'hint': this.internalHintExpander.hint,
							'content': this.internalHintExpander.content,
							'hintContentType': this.internalHintExpander.hintContentType,
							'input-exists': !0,
						}),
				),
			),
		);
	}
	get element() {
		return i(this);
	}
	static get watchers() {
		return {
			hintText: ['parseHintText'],
			hintExpander: ['parseHintExpander'],
			options: ['parseOptions', 'validateOptions'],
			name: ['validateName'],
			caption: ['updateCaptionState'],
			language: ['updateLanguage'],
		};
	}
};
Ao.style =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}.ontario-radios__input:focus+.ontario-radios__label:before{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;font-size:inherit;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-radios__item{position:relative;display:block;margin:0 0 1rem;padding:0 2rem 0}.ontario-radios__input{cursor:pointer;margin:0;position:absolute;opacity:0;top:-2px;left:-2px;width:36px;height:36px;z-index:0}@media screen and (max-width: 40em){.ontario-radios__input{width:40px;height:40px;top:-1.5px;left:-1.5px}}.ontario-radios__label{cursor:pointer;color:#1a1a1a;display:inline-block;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:700;line-height:1.5;margin:0.2rem 0;max-width:38.75em;padding:0 0.75rem;-ms-touch-action:manipulation;touch-action:manipulation;white-space:normal;width:auto;white-space:normal}@media screen and (max-width: 40em){.ontario-radios__label{margin:0.3rem 0;padding:0 1rem}}.ontario-radios__label:before{content:"";border:2px solid #1a1a1a;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;top:0;left:0;width:32px;height:32px;-webkit-transition:border 0.1s ease-in-out;transition:border 0.1s ease-in-out}@media screen and (max-width: 40em){.ontario-radios__label:before{width:36px;height:36px}}.ontario-radios__label:after{content:"";border-radius:50%;border:10px solid #1a1a1a;position:absolute;top:0;left:0;-webkit-transform:translate(6px, 6px);transform:translate(6px, 6px);opacity:0}@media screen and (max-width: 40em){.ontario-radios__label:after{border:12px solid #1a1a1a}}.ontario-radios__input:focus+.ontario-radios__label:before{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:#009ADB}.ontario-radios__input:checked+.ontario-radios__label:after{opacity:1}.ontario-radios__hint-expander{margin:0.75rem 0 0 0.5rem}@media screen and (max-width: 40em){.ontario-radios__hint-expander{margin-top:1rem}}';
const Ho = class {
	constructor(o) {
		t(this, o),
			(this.showBackButton = !1),
			(this.backButtonUrl = void 0),
			(this.currentStep = void 0),
			(this.numberOfSteps = void 0),
			(this.percentageComplete = void 0),
			(this.customOnClick = void 0),
			(this.language = 'en'),
			(this.translations = y);
	}
	handleSetAppLanguage(o) {
		this.language = l(o);
	}
	handleHeaderLanguageToggled(o) {
		this.language = l(o);
	}
	componentWillLoad() {
		this.language = l(this.language);
	}
	render() {
		return o(
			'div',
			{ class: 'ontario-step-indicator' },
			o(
				'div',
				{ class: 'ontario-row' },
				o(
					'div',
					{ class: 'ontario-columns ontario-small-12' },
					o(
						'div',
						{ class: `ontario-step-indicator--with-back-button--${this.showBackButton}` },
						!0 === this.showBackButton &&
							this.customOnClick &&
							!this.backButtonUrl &&
							o(
								'button',
								{
									class: 'ontario-button ontario-button--tertiary',
									onClick: (o) => this.customOnClick && this.customOnClick(o),
								},
								o('ontario-icon-chevron-left', { colour: 'blue' }),
								this.translations.stepIndicator.back[`${this.language}`],
							),
						!0 === this.showBackButton &&
							!this.customOnClick &&
							this.backButtonUrl &&
							o(
								'a',
								{ class: 'ontario-button ontario-button--tertiary', href: this.backButtonUrl },
								o('ontario-icon-chevron-left', { colour: 'blue' }),
								this.translations.stepIndicator.back[`${this.language}`],
							),
						this.percentageComplete
							? o(
									'span',
									{ class: 'ontario-h4' },
									this.percentageComplete,
									' % ',
									this.translations.stepIndicator.complete[`${this.language}`],
							  )
							: o(
									'span',
									{ class: 'ontario-h4' },
									this.translations.stepIndicator.step[`${this.language}`],
									'  ',
									this.currentStep,
									' ',
									this.translations.stepIndicator.of[`${this.language}`],
									'  ',
									this.numberOfSteps,
							  ),
					),
					o('hr', null),
				),
			),
		);
	}
	get host() {
		return i(this);
	}
};
Ho.style =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-button:focus,.ontario-button:active{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button{border:none;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;display:inline-block;font-size:1.125rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:600;line-height:1.5555555556;margin:0 1.75rem 1.5rem 0;min-width:10rem;padding:0.625rem 1.5rem;text-align:center;text-decoration:none;cursor:pointer}@media screen and (max-width: 40em){.ontario-button{margin-right:0;display:block;width:100%}}.ontario-button .ontario-icon{margin-right:4px}.ontario-button--primary{background-color:#0066CC;color:#FFFFFF}.ontario-button--primary:hover{background-color:#00478F;color:#FFFFFF}.ontario-button--primary:focus{background-color:#00478F;color:#FFFFFF;-webkit-transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--primary:active{background-color:#002142;color:#FFFFFF;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--primary:visited{color:#FFFFFF}.ontario-button--secondary{background-color:#FFFFFF;border:2px solid #0066CC;color:#0066CC;padding-top:0.5rem;padding-bottom:0.5rem}.ontario-button--secondary:hover{background-color:#e0f0ff;border-color:#00478F;color:#00478F}.ontario-button--secondary:focus{background-color:#e0f0ff;border-color:#00478F;color:#00478F;-webkit-transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--secondary:active{background-color:#c2e0ff;border-color:#002142;color:#002142;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--secondary:visited{color:#0066CC}.ontario-button--tertiary{background-color:transparent;color:#0066CC;text-decoration:underline}.ontario-button--tertiary:hover{background-color:#e8e8e8;color:#00478F;text-decoration:underline}.ontario-button--tertiary:focus{background-color:#e8e8e8;color:#00478F;text-decoration:underline;-webkit-transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--tertiary:active{background-color:#d1d1d1;color:#002142;text-decoration:underline;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--tertiary:visited{color:#0066CC}.ontario-button--internalThemeDark{background-color:#1a1a1a;border:2px solid #FFFFFF;color:#FFFFFF}.ontario-button--internalThemeDark:hover{background-color:#4d4d4d}.ontario-button--internalThemeDark:focus{background-color:#4d4d4d;-webkit-transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--internalThemeDark:active{background-color:#4d4d4d;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--internalThemeDark:visited{color:#0066CC}.ontario-step-indicator .ontario-step-indicator--with-back-button--false,.ontario-step-indicator .ontario-step-indicator--with-back-button--true{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.ontario-step-indicator .ontario-step-indicator--with-back-button--false{-ms-flex-pack:end;justify-content:flex-end}.ontario-step-indicator .ontario-h4{margin:1.125rem 0}@media screen and (max-width: 40em){.ontario-step-indicator .ontario-h4{margin:1rem 0;text-align:right}}.ontario-step-indicator .ontario-button.ontario-button--tertiary{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:0.75rem 0;padding-left:0.5rem;padding-right:1rem;min-width:3rem}@media screen and (max-width: 40em){.ontario-step-indicator .ontario-button.ontario-button--tertiary{width:unset}}.ontario-step-indicator .ontario-button.ontario-button--tertiary .ontario-icon{margin:0 0.375rem 0 0;padding:0;min-width:24px;min-height:24px}.ontario-step-indicator hr{padding:0;margin:0}';
const No = class {
	constructor(o) {
		t(this, o),
			(this.inputOnChange = e(this, 'inputOnChange', 7)),
			(this.inputOnBlur = e(this, 'inputOnBlur', 7)),
			(this.inputOnFocus = e(this, 'inputOnFocus', 7)),
			(this.handleEvent = (o, t) => {
				B(
					o,
					t,
					o.target,
					this.inputOnChange,
					this.inputOnFocus,
					this.inputOnBlur,
					'input',
					this.customOnChange,
					this.customOnFocus,
					this.customOnBlur,
				);
			}),
			(this.caption = void 0),
			(this.name = void 0),
			(this.elementId = void 0),
			(this.required = !1),
			(this.value = void 0),
			(this.hintText = void 0),
			(this.hintExpander = void 0),
			(this.language = 'en'),
			(this.customOnChange = void 0),
			(this.customOnBlur = void 0),
			(this.customOnFocus = void 0),
			(this.hintTextId = void 0),
			(this.internalHintText = void 0),
			(this.internalHintExpander = void 0),
			(this.captionState = void 0);
	}
	handleSetAppLanguage(o) {
		this.language = l(o);
	}
	handleHeaderLanguageToggled(o) {
		this.language = l(o);
	}
	parseHintText() {
		if (this.hintText) {
			const o = D(this.hintText);
			this.internalHintText = o;
		}
	}
	parseHintExpander() {
		const o = this.hintExpander;
		o && (this.internalHintExpander = 'string' == typeof o ? JSON.parse(o) : o);
	}
	validateName(o) {
		s(o) &&
			new g()
				.addDesignSystemTag()
				.addMonospaceText(' name ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-textarea> ')
				.addRegularText('was not provided')
				.printMessage();
	}
	updateCaptionState(o) {
		this.captionState = new O(this.element.tagName, o, y, this.language, !1, this.required);
	}
	updateLanguage() {
		this.updateCaptionState(this.caption);
	}
	getId() {
		var o;
		return null !== (o = this.elementId) && void 0 !== o ? o : '';
	}
	getValue() {
		var o;
		return null !== (o = this.value) && void 0 !== o ? o : '';
	}
	getClass() {
		return this.hintExpander ? 'ontario-textarea ontario-textarea-hint-expander--true' : 'ontario-textarea';
	}
	async componentDidLoad() {
		var o;
		this.hintTextId = await (null === (o = this.hintTextRef) || void 0 === o ? void 0 : o.getHintTextId());
	}
	componentWillLoad() {
		var o;
		this.updateCaptionState(this.caption),
			(this.elementId = null !== (o = this.elementId) && void 0 !== o ? o : Y()),
			this.parseHintText(),
			this.parseHintExpander(),
			this.validateName(this.name),
			(this.language = l(this.language));
	}
	render() {
		return o(
			'div',
			{ class: 'ontario-form-group' },
			this.captionState.getCaption(this.getId(), !!this.internalHintExpander),
			this.internalHintText &&
				o('ontario-hint-text', {
					hint: this.internalHintText.hint,
					hintContentType: this.internalHintText.hintContentType,
					ref: (o) => (this.hintTextRef = o),
				}),
			o('textarea', {
				'aria-describedby': this.hintTextId,
				'class': this.getClass(),
				'id': this.getId(),
				'name': this.name,
				'value': this.getValue(),
				'onInput': (o) => this.handleEvent(o, S.Change),
				'onBlur': (o) => this.handleEvent(o, S.Blur),
				'onFocus': (o) => this.handleEvent(o, S.Focus),
				'required': !!this.required,
			}),
			this.internalHintExpander &&
				o('ontario-hint-expander', {
					'hint': this.internalHintExpander.hint,
					'content': this.internalHintExpander.content,
					'hintContentType': this.internalHintExpander.hintContentType,
					'input-exists': !0,
				}),
		);
	}
	get element() {
		return i(this);
	}
	static get watchers() {
		return {
			hintText: ['parseHintText'],
			hintExpander: ['parseHintExpander'],
			name: ['validateName'],
			caption: ['updateCaptionState'],
			language: ['updateLanguage'],
		};
	}
};
No.style =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1>.ontario-label--heading,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1>.ontario-label--heading,h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1>.ontario-label--heading,h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}.ontario-textarea:focus,.ontario-textarea:active,.ontario-input:focus,.ontario-input:active{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;font-size:inherit;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-label{cursor:pointer;color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;line-height:1.5;margin:0 0 1rem 0;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-label{font-size:1.125rem;line-height:1.56}}.ontario-label--large{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2;max-width:26.25em}@media screen and (max-width: 40em){.ontario-label--large{font-size:1.4375rem;line-height:1.39}}h1>.ontario-label--heading{display:inline-block;margin:0}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;width:100%;padding:0.625rem 1rem;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-textarea{border:2px solid #1a1a1a;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#1a1a1a;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;display:block;max-width:48rem;min-height:144px;margin:0 0 2.5rem;padding:0.625rem 1rem;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out;white-space:pre-wrap;width:100%}.ontario-textarea.ontario-textarea-hint-expander--true{margin-bottom:1rem}';
export {
	k as ontario_aside,
	_ as ontario_back_to_top,
	F as ontario_blockquote,
	A as ontario_button,
	H as ontario_callout,
	$ as ontario_checkboxes,
	W as ontario_critical_alert,
	U as ontario_dropdown_list,
	P as ontario_fieldset,
	X as ontario_footer,
	io as ontario_header,
	eo as ontario_hint_expander,
	ao as ontario_hint_text,
	no as ontario_icon_accessibility,
	ro as ontario_icon_alert_error,
	lo as ontario_icon_alert_information,
	so as ontario_icon_alert_success,
	ho as ontario_icon_alert_warning,
	mo as ontario_icon_camera,
	go as ontario_icon_chevron_down,
	po as ontario_icon_chevron_left,
	co as ontario_icon_chevron_up,
	uo as ontario_icon_email,
	fo as ontario_icon_help,
	bo as ontario_icon_mastercard,
	wo as ontario_icon_notification,
	xo as ontario_icon_print,
	vo as ontario_icon_sentiment_5,
	ko as ontario_icon_text_message,
	yo as ontario_icon_transport_bus,
	_o as ontario_input,
	Fo as ontario_language_toggle,
	zo as ontario_loading_indicator,
	Co as ontario_page_alert,
	Ao as ontario_radio_buttons,
	Ho as ontario_step_indicator,
	No as ontario_textarea,
};
