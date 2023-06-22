'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f1f89225.js');
const index$1 = require('./index-f4617e04.js');
const consoleMessage = require('./console-message-b252d5f7.js');

const HeadingLevel = ['h2', 'h3', 'h4', 'h5', 'h6'];
const HighlightColours = ['teal', 'gold', 'yellow', 'taupe', 'green', 'lime', 'sky', 'blue', 'purple'];
const HeadingContentTypes = ['string', 'html'];

const isValidHighlightColour = (colour) => HighlightColours.includes(colour);
const isValidHeadingLevel = (level) => HeadingLevel.includes(level);
const generateClasses = (type, highlightColor) => {
	const componentType = type === 'callout' ? `ontario-callout` : `ontario-aside`;
	const borderColor = `ontario-border-highlight--${highlightColor}`;
	return highlightColor ? `${componentType} ${borderColor}` : `${componentType}`;
};
const generateHeading = (type, headingType, headingContentType, headingContent) => {
	const headingContentIsHTML = headingContentType === 'html';
	switch (headingType) {
		case 'h2':
			return headingContentIsHTML
				? index.h('h2', { class: `ontario-${type}__title ontario-h5`, innerHTML: headingContent })
				: index.h('h2', { class: `ontario-${type}__title ontario-h5` }, headingContent);
		case 'h3':
			return headingContentIsHTML
				? index.h('h3', { class: `ontario-${type}__title ontario-h5`, innerHTML: headingContent })
				: index.h('h3', { class: `ontario-${type}__title ontario-h5` }, headingContent);
		case 'h4':
			return headingContentIsHTML
				? index.h('h4', { class: `ontario-${type}__title ontario-h5`, innerHTML: headingContent })
				: index.h('h4', { class: `ontario-${type}__title ontario-h5` }, headingContent);
		case 'h5':
			return headingContentIsHTML
				? index.h('h5', { class: `ontario-${type}__title ontario-h5`, innerHTML: headingContent })
				: index.h('h5', { class: `ontario-${type}__title ontario-h5` }, headingContent);
		case 'h6':
			return headingContentIsHTML
				? index.h('h6', { class: `ontario-${type}__title ontario-h5`, innerHTML: headingContent })
				: index.h('h6', { class: `ontario-${type}__title ontario-h5` }, headingContent);
		default:
			return headingContentIsHTML
				? index.h('h2', { class: `ontario-${type}__title ontario-h5`, innerHTML: headingContent })
				: index.h('h2', { class: `ontario-${type}__title ontario-h5` }, headingContent);
	}
};
const generateCalloutAside = (type, headingType, headingContentType, headingContent, content, highlightColour) => {
	const contentIsString = typeof content === 'string';
	return type === 'callout'
		? index.h(
				'div',
				{ class: generateClasses(type, highlightColour) },
				generateHeading(type, headingType, headingContentType, headingContent),
				contentIsString ? index.h('p', null, content) : index.h('slot', null),
		  )
		: index.h(
				'aside',
				{ class: generateClasses(type, highlightColour) },
				generateHeading(type, headingType, headingContentType, headingContent),
				contentIsString ? index.h('p', null, content) : index.h('slot', null),
		  );
};

const ontarioAsideCss =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-aside{border-left:0.25rem solid #367A76;padding:1.5rem;margin:2rem 0 2.5rem 2rem}.ontario-aside *{max-width:48rem}.ontario-aside *:last-child{margin-bottom:0.5rem}@media screen and (max-width: 40em){.ontario-aside .ontario-aside{margin:2rem 0 2.5rem 1rem}}.ontario-aside__title{margin:0 0 1rem}.ontario-border-highlight--teal{border-color:#367A76 !important}.ontario-border-highlight--gold{border-color:#86743D !important}.ontario-border-highlight--yellow{border-color:#8A600D !important}.ontario-border-highlight--taupe{border-color:#7B725C !important}.ontario-border-highlight--green{border-color:#2B8737 !important}.ontario-border-highlight--lime{border-color:#5F8129 !important}.ontario-border-highlight--sky{border-color:#1080A6 !important}.ontario-border-highlight--blue{border-color:#0369ac !important}.ontario-border-highlight--purple{border-color:#92278F !important}';

const OntarioAside = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.headingType = undefined;
		this.headingContentType = undefined;
		this.headingContent = undefined;
		this.content = undefined;
		this.highlightColour = 'teal';
	}
	/**
	 * Watch for changes to the `headingType` prop.
	 *
	 * This is for validation purposes to make sure the `headingType` matches one of the `HeadingLevelOptions`.
	 */
	validateHeadingType() {
		if (isValidHeadingLevel(this.headingType)) return this.headingType;
		const message = new consoleMessage.ConsoleMessageClass();
		return message
			.addDesignSystemTag()
			.addMonospaceText(` headingType ${this.headingType} `)
			.addRegularText('for')
			.addMonospaceText(' <ontario-aside> ')
			.addRegularText('is not a valid type. Please ensure your heading type matches one of the headingType types.')
			.printMessage();
	}
	/**
	 * Watch for changes in the `headingContentType` prop for validation purposes.
	 *
	 * If the user input doesn't match one of the array values then `headingContentType` will be set to its default (`string`).
	 * If a match is found in one of the array values then `headingContentType` will be set to the matching array key value.
	 */
	validateHeadingContentType() {
		const isValid = index$1.validateValueAgainstArray(this.headingContentType, HeadingContentTypes);
		if (isValid) {
			return this.headingContentType;
		} else {
			return this.warnDefaultType();
		}
	}
	/**
	 * Watch for changes in the `headingContent` prop for validation purposes.
	 *
	 * If no `headingContent` value is provided, a warning message will be printed.
	 */
	validateHeadingContent() {
		if (!this.headingContent) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' headingContent ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-aside> ')
				.addRegularText('was not provided.')
				.printMessage();
		}
	}
	/**
	 * Watch for changes to the `highlightColour` prop.
	 *
	 * If no `highlightColour` is passed, or if the `highlightColour` does not match the `highlightColour` options, a default value of 'teal' will be applied.
	 */
	validateHighlightColour() {
		if (this.highlightColour) {
			if (isValidHighlightColour(this.highlightColour)) return this.highlightColour;
			else {
				const message = new consoleMessage.ConsoleMessageClass();
				message
					.addDesignSystemTag()
					.addMonospaceText(` highlightColour ${this.highlightColour} `)
					.addRegularText('for')
					.addMonospaceText(' <ontario-aside> ')
					.addRegularText(
						'does not match one of the valid highlightColour types. A default colour of `teal` will be applied.',
					)
					.printMessage();
			}
		}
		// if no highlight colour is passed, return 'teal'
		return 'teal';
	}
	/**
	 * Print the invalid `type` warning message.
	 * @returns default type ('string')
	 */
	warnDefaultType() {
		const message = new consoleMessage.ConsoleMessageClass();
		message
			.addDesignSystemTag()
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
	}
	componentWillLoad() {
		this.validateHighlightColour();
		this.validateHeadingContent();
		this.validateHeadingType();
		this.validateHeadingContentType();
	}
	render() {
		return generateCalloutAside(
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
OntarioAside.style = ontarioAsideCss;

const OntarioIconArrowUp = `<svg class="ontario-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>
`;

const required = {
	en: 'required',
	fr: 'obligatoire',
};
const optional = {
	en: 'optional',
	fr: 'facultative',
};
const accessibility = {
	moreInfo: {
		en: 'More information on',
		fr: 'Des renseignements supplémentaires sur',
	},
	checkboxHintExpander: {
		en: 'is available after the last checkbox item.',
		fr: 'suivront à la dernière case à cocher.',
	},
	singleHintExpander: {
		en: 'field is available in the next element.',
		fr: 'suivront au prochain élément.',
	},
};
const backToTop = {
	top: {
		en: 'Top',
		fr: 'Haut',
	},
	ariaLabel: {
		en: 'Scroll back to the top',
		fr: 'Retour en haut de la page',
	},
};
const loading = {
	en: 'Loading',
	fr: 'Chargement',
};
const dropdownList = {
	select: {
		en: 'Select',
		fr: 'Sélectionner',
	},
};
const contactUs = {
	en: 'Contact us',
	fr: 'Contactez-nous',
};
const accessibilityLink = {
	text: {
		en: 'Accessibility',
		fr: 'Accessibilité',
	},
	link: {
		en: 'https://www.ontario.ca/page/accessibility',
		fr: 'https://www.ontario.ca/fr/page/accessibilite',
	},
};
const privacyLink = {
	text: {
		en: 'Privacy',
		fr: 'Confidentialité',
	},
	link: {
		en: 'https://www.ontario.ca/page/privacy-statement',
		fr: 'https://www.ontario.ca/fr/page/declaration-concernant-la-protection-de-la-vie-privee',
	},
};
const printerLink = {
	text: {
		en: "King's Printer for Ontario,",
		fr: 'Imprimeur du Roi pour l’Ontario,',
	},
	link: {
		en: 'https://www.ontario.ca/page/copyright-information',
		fr: 'https://www.ontario.ca/fr/page/droits-dauteur',
	},
};
const languageToggle = {
	ariaLabel: {
		en: 'Switch language to French',
		fr: 'Changer la langue en anglais',
	},
};
const stepIndicator = {
	back: {
		en: 'Back',
		fr: 'Retour',
	},
	step: {
		en: 'Step',
		fr: 'Étape',
	},
	of: {
		en: 'of',
		fr: 'sur',
	},
	complete: {
		en: 'complete',
		fr: 'complet',
	},
};
const translations = {
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

const ontarioBackToTopCss =
	'.ontario-back-to-top{position:fixed;bottom:5%;right:2%;visibility:hidden;opacity:0;-webkit-transition:0.1s ease-in-out;transition:0.1s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:3rem;padding:0.5rem 1rem 0.5rem 0.75rem;background:#e6e6e6;border:0.125rem solid #FFFFFF;border-radius:4px;-webkit-box-shadow:0 0.125rem 0.25rem rgba(26, 26, 26, 0.6);box-shadow:0 0.125rem 0.25rem rgba(26, 26, 26, 0.6);-webkit-box-sizing:border-box;box-sizing:border-box;color:#1a1a1a;line-height:1.25rem;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:600;z-index:10000;cursor:pointer}.ontario-back-to-top .ontario-icon{margin:0.125rem 0.5rem 0 0;width:2rem;height:2rem}.ontario-back-to-top:hover{background-color:#cccccc}.ontario-back-to-top:focus{background-color:#e6e6e6;-webkit-box-shadow:0 0 0 0.25rem #009ADB, 0 0.1875rem 0.3125rem 0.1875rem rgba(0, 0, 0, 0.6);box-shadow:0 0 0 0.25rem #009ADB, 0 0.1875rem 0.3125rem 0.1875rem rgba(0, 0, 0, 0.6);outline:0.25rem solid transparent;-webkit-transition:0.1s ease-in-out;transition:0.1s ease-in-out}.ontario-back-to-top:active{background-color:#b2b2b2;-webkit-box-shadow:0 0 0 0.25rem #009ADB, 0 0.3125rem 0.4375rem 0.1875rem rgba(0, 0, 0, 0.6);box-shadow:0 0 0 0.25rem #009ADB, 0 0.3125rem 0.4375rem 0.1875rem rgba(0, 0, 0, 0.6);outline:0.25rem solid transparent;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}@media screen and (max-width: 73em){.ontario-back-to-top{-ms-flex-direction:column;flex-direction:column;height:4.75rem;padding:0.375rem 0.75rem 0.5625rem 0.75rem}.ontario-back-to-top .ontario-icon{margin:0.0625rem 0 0.25rem 0;width:2rem;height:2rem}}@media screen and (max-width: 40em){.ontario-back-to-top{display:block;padding:0.25rem;font-size:0;width:3rem;height:3rem}.ontario-back-to-top .ontario-icon{margin:0.5rem 0 0 0}@-moz-document url-prefix(){.ontario-back-to-top .ontario-icon{margin-top:0.125rem}}}.ontario-back-to-top.active{visibility:visible;opacity:1}';

const OntarioBackToTop = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.language = 'en';
		this.translations = translations;
		this.displayBackToTop = false;
		this.scrollYValue = 200;
	}
	/**
	 * This listens for the window Y scroll value to be above 200 pixels. Once it is, the Back to Top button will toggle the `displayBackToTop` state which will set an active class to control the components' visibility.
	 */
	showBackToTopButton() {
		this.displayBackToTop = window.scrollY > this.scrollYValue;
	}
	/**
	 * This listens for the `setAppLanguage` event sent from the test language toggler when it is is connected to the DOM. It is used for the initial language when the input component loads.
	 */
	handleSetAppLanguage(event) {
		this.language = index$1.validateLanguage(event);
	}
	handleHeaderLanguageToggled(event) {
		this.language = index$1.validateLanguage(event);
	}
	/**
	 * Scroll to top functionality when the Back to Top button is clicked
	 */
	scrollToTop() {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}
	componentWillLoad() {
		this.language = index$1.validateLanguage(this.language);
	}
	render() {
		return index.h(
			'button',
			{
				'class': this.displayBackToTop ? `ontario-back-to-top active` : `ontario-back-to-top`,
				'onClick': this.scrollToTop,
				'aria-label': this.translations.backToTop.ariaLabel[`${this.language}`],
			},
			index.h('span', { 'aria-hidden': 'true', 'innerHTML': OntarioIconArrowUp }),
			this.translations.backToTop.top[`${this.language}`],
		);
	}
	get element() {
		return index.getElement(this);
	}
};
OntarioBackToTop.style = ontarioBackToTopCss;

const ontarioBlockquoteCss =
	'@charset "UTF-8";.ontario-blockquote{border-left:4px solid #4d4d4d;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:400;letter-spacing:0.025rem;line-height:1.56;max-width:48rem;margin:2rem;padding:1.5rem 0 1.5rem 1.5rem;quotes:"“" "”"}@media screen and (max-width: 40em){.ontario-blockquote{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.5;margin:1.5rem 0 2rem 0}}.ontario-blockquote p{margin:0 0 1.5rem 0}.ontario-blockquote p::before{content:open-quote}.ontario-blockquote p::after{content:close-quote}.ontario-blockquote--short{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.5}@media screen and (max-width: 40em){.ontario-blockquote--short{font-size:1.4375rem;line-height:1.43}}.ontario-blockquote__attribution,.ontario-blockquote__byline{display:block;font-size:1rem;letter-spacing:0.025rem;line-height:1.56;text-align:right}@media screen and (max-width: 40em){.ontario-blockquote__attribution,.ontario-blockquote__byline{letter-spacing:0.03rem;line-height:1.5}}.ontario-blockquote__attribution{font-style:normal;font-weight:700}.ontario-blockquote__attribution::before{content:"— "}html[lang=fr] blockquote{quotes:"« " " »"}';

const OntarioBlockquote = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.quote = undefined;
		this.attribution = undefined;
		this.byline = undefined;
		this.shortQuoteLength = 140;
		this.shortQuote = false;
		this.quoteState = undefined;
	}
	/*
	 * Watch for changes in the `quote` prop for validation purposes.
	 *
	 * If the `quote` prop is not provided, set the `quote` prop to the host textContent (if it exists).
	 * If the `quote` prop length is 140 characters or less, set the `shortQuote` state to true - this will add additonal classes for the blockquote styles.
	 */
	validateQuote() {
		var _a, _b, _c, _d;
		this.quoteState =
			(_b = (_a = this.quote) !== null && _a !== void 0 ? _a : this.host.textContent) !== null && _b !== void 0
				? _b
				: '';
		this.validateQuoteContent(this.quoteState);
		this.shortQuote =
			(_d = ((_c = this.quoteState) === null || _c === void 0 ? void 0 : _c.length) <= this.shortQuoteLength) !==
				null && _d !== void 0
				? _d
				: true;
	}
	/**
	 * Print the missing `quote` prop warning message
	 */
	validateQuoteContent(newValue) {
		if (index$1.validatePropExists(newValue)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' quote ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-blockquote> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	}
	componentWillLoad() {
		this.validateQuote();
	}
	/**
	 * This helper is used to help load translations for any slots + text content passed in by the user.
	 */
	componentDidLoad() {
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.type === 'attributes') {
					this.validateQuote();
				}
			});
		});
		const options = { attributes: true };
		observer.observe(this.host, options);
	}
	render() {
		return index.h(
			'blockquote',
			{ class: this.shortQuote ? `ontario-blockquote ontario-blockquote--short` : `ontario-blockquote` },
			index.h('p', null, this.quoteState),
			this.attribution && index.h('cite', { class: 'ontario-blockquote__attribution' }, this.attribution),
			this.byline && index.h('cite', { class: 'ontario-blockquote__byline' }, this.byline),
		);
	}
	get host() {
		return index.getElement(this);
	}
	static get watchers() {
		return {
			quote: ['validateQuote'],
		};
	}
};
OntarioBlockquote.style = ontarioBlockquoteCss;

const ButtonTypes = ['primary', 'secondary', 'tertiary', 'internalThemeDark'];
const HtmlTypes = ['button', 'reset', 'submit'];

const ontarioButtonCss =
	'.ontario-button:focus,.ontario-button:active{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button{border:none;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;display:inline-block;font-size:1.125rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:600;line-height:1.5555555556;margin:0 1.75rem 1.5rem 0;min-width:10rem;padding:0.625rem 1.5rem;text-align:center;text-decoration:none;cursor:pointer}@media screen and (max-width: 40em){.ontario-button{margin-right:0;display:block;width:100%}}.ontario-button .ontario-icon{margin-right:4px}.ontario-button--primary{background-color:#0066CC;color:#FFFFFF}.ontario-button--primary:hover{background-color:#00478F;color:#FFFFFF}.ontario-button--primary:focus{background-color:#00478F;color:#FFFFFF;-webkit-transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--primary:active{background-color:#002142;color:#FFFFFF;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--primary:visited{color:#FFFFFF}.ontario-button--secondary{background-color:#FFFFFF;border:2px solid #0066CC;color:#0066CC;padding-top:0.5rem;padding-bottom:0.5rem}.ontario-button--secondary:hover{background-color:#e0f0ff;border-color:#00478F;color:#00478F}.ontario-button--secondary:focus{background-color:#e0f0ff;border-color:#00478F;color:#00478F;-webkit-transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--secondary:active{background-color:#c2e0ff;border-color:#002142;color:#002142;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--secondary:visited{color:#0066CC}.ontario-button--tertiary{background-color:transparent;color:#0066CC;text-decoration:underline}.ontario-button--tertiary:hover{background-color:#e8e8e8;color:#00478F;text-decoration:underline}.ontario-button--tertiary:focus{background-color:#e8e8e8;color:#00478F;text-decoration:underline;-webkit-transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--tertiary:active{background-color:#d1d1d1;color:#002142;text-decoration:underline;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--tertiary:visited{color:#0066CC}.ontario-button--internalThemeDark{background-color:#1a1a1a;border:2px solid #FFFFFF;color:#FFFFFF}.ontario-button--internalThemeDark:hover{background-color:#4d4d4d}.ontario-button--internalThemeDark:focus{background-color:#4d4d4d;-webkit-transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--internalThemeDark:active{background-color:#4d4d4d;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--internalThemeDark:visited{color:#0066CC}';

const OntarioButton = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.type = 'secondary';
		this.htmlType = 'button';
		this.label = undefined;
		this.ariaLabelText = undefined;
		this.elementId = undefined;
		this.typeState = undefined;
		this.htmlTypeState = undefined;
		this.labelState = undefined;
	}
	/*
	 * Watch for changes to the `label` property for validation purposes.
	 *
	 * If  no `label` prop is provided, the `label` prop will be set to the host element textContent (if it exists).
	 */
	updateLabelContent() {
		var _a, _b;
		this.labelState =
			(_b = (_a = this.label) !== null && _a !== void 0 ? _a : this.host.textContent) !== null && _b !== void 0
				? _b
				: '';
		this.validateLabelContent(this.labelState);
	}
	/**
	 * Watch for changes to the `type` property for validation purposes.
	 *
	 * If the user input doesn't match one of the array values then `type` will be set to its default (`secondary`).
	 * If a match is found in one of the array values then `type` will be set to the matching array key value.
	 */
	validateType() {
		const isValid = index$1.validateValueAgainstArray(this.type, ButtonTypes);
		if (isValid) {
			this.typeState = this.type;
		} else {
			this.typeState = this.warnDefaultType();
		}
	}
	/**
	 *  Watch for changes to the `htmlType` property for validation purposes.
	 *
	 * If the user input doesn't match one of the array values then `htmlType` will be set to its default (`submit`).
	 * If a match is found in one of the array values then `htmlType` will be set to the matching array key value.
	 */
	validateHtmlType() {
		const isValid = index$1.validateValueAgainstArray(this.htmlType, HtmlTypes);
		if (isValid) {
			this.htmlTypeState = this.htmlType;
		} else {
			this.htmlTypeState = this.warnDefaultHtmlType();
		}
	}
	/**
	 * Print the missing `label` prop warning message
	 */
	validateLabelContent(newValue) {
		if (index$1.validatePropExists(newValue)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' label ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-button> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	}
	/**
	 * Print the invalid `type` prop warning message
	 * @returns default type (secondary)
	 */
	warnDefaultType() {
		const message = new consoleMessage.ConsoleMessageClass();
		message
			.addDesignSystemTag()
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
	}
	/**
	 * Print the invalid `htmlType` warning message
	 * @returns default htmlType (button)
	 */
	warnDefaultHtmlType() {
		const message = new consoleMessage.ConsoleMessageClass();
		message
			.addDesignSystemTag()
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
	}
	/**
	 * @returns the classes of the button based of the button's `type`.
	 */
	getClass() {
		return `ontario-button ontario-button--${this.typeState}`;
	}
	getId() {
		var _a;
		return (_a = this.elementId) !== null && _a !== void 0 ? _a : '';
	}
	/**
	 * Set `buttonId`, `label`, and `ariaLabel` using internal component logic.
	 */
	componentWillLoad() {
		var _a;
		this.updateLabelContent();
		this.validateHtmlType();
		this.validateType();
		this.ariaLabelText = (_a = this.ariaLabelText) !== null && _a !== void 0 ? _a : this.labelState;
	}
	/**
	 * This helper is used to help load translations for any slots + text content passed in by the user.
	 */
	componentDidLoad() {
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.type === 'attributes') {
					this.updateLabelContent();
				}
			});
		});
		const options = { attributes: true };
		observer.observe(this.host, options);
	}
	render() {
		return index.h(
			'button',
			{ 'type': this.htmlTypeState, 'class': this.getClass(), 'aria-label': this.ariaLabelText, 'id': this.getId() },
			this.labelState,
		);
	}
	get host() {
		return index.getElement(this);
	}
	static get watchers() {
		return {
			label: ['updateLabelContent'],
			type: ['validateType'],
			htmlType: ['validateHtmlType'],
		};
	}
};
OntarioButton.style = ontarioButtonCss;

const ontarioCalloutCss =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-callout{border-left:0.25rem solid #367A76;padding:1.5rem;margin:2rem 0 2.5rem 0;background-color:#f2f2f2}.ontario-callout *{max-width:48rem}.ontario-callout *:last-child{margin-bottom:0.5rem}.ontario-callout__title{margin:0 0 1rem}.ontario-border-highlight--teal{border-color:#367A76 !important}.ontario-border-highlight--gold{border-color:#86743D !important}.ontario-border-highlight--yellow{border-color:#8A600D !important}.ontario-border-highlight--taupe{border-color:#7B725C !important}.ontario-border-highlight--green{border-color:#2B8737 !important}.ontario-border-highlight--lime{border-color:#5F8129 !important}.ontario-border-highlight--sky{border-color:#1080A6 !important}.ontario-border-highlight--blue{border-color:#0369ac !important}.ontario-border-highlight--purple{border-color:#92278F !important}';

const OntarioCallout = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.headingType = undefined;
		this.headingContentType = 'string';
		this.headingContent = undefined;
		this.content = undefined;
		this.highlightColour = 'teal';
	}
	/**
	 * Watch for changes to the `headingType` prop.
	 * This is for validation purposes to make sure the `headingType` matches one of the `HeadingLevelOptions`.
	 */
	validateHeadingType() {
		if (isValidHeadingLevel(this.headingType)) return this.headingType;
		const message = new consoleMessage.ConsoleMessageClass();
		return message
			.addDesignSystemTag()
			.addMonospaceText(` headingType ${this.headingType} `)
			.addRegularText('for')
			.addMonospaceText(' <ontario-callout> ')
			.addRegularText('is not a valid type. Please ensure your heading type matches one of the headingType types.')
			.printMessage();
	}
	/**
	 * Watch for changes in the `headingContentType` variable for validation purposes.
	 *
	 * If the user input doesn't match one of the array values then `headingContentType` will be set to its default (`string`).
	 * If a match is found in one of the array values then `headingContentType` will be set to the matching array key value.
	 */
	validateHeadingContentType() {
		const isValid = index$1.validateValueAgainstArray(this.headingContentType, HeadingContentTypes);
		if (isValid) {
			return this.headingContentType;
		} else {
			return this.warnDefaultType();
		}
	}
	/**
	 * Watch for changes in the `headingContent` prop for validation purposes.
	 *
	 * If no `headingContent` value is provided, a warning message will be printed.
	 */
	validateHeadingContent() {
		if (!this.headingContent) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' headingContent ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-callout> ')
				.addRegularText('was not provided.')
				.printMessage();
		}
	}
	/**
	 * Watch for changes to the `highlightColour` prop.
	 *
	 * If no `highlightColour` is passed, or if the `highlightColour` does not match the `highlightColour` options, a default value of 'teal' will be applied.
	 */
	validateHighlightColour() {
		if (this.highlightColour) {
			if (isValidHighlightColour(this.highlightColour)) return this.highlightColour;
			else {
				const message = new consoleMessage.ConsoleMessageClass();
				message
					.addDesignSystemTag()
					.addMonospaceText(` highlightColour ${this.highlightColour} `)
					.addRegularText('for')
					.addMonospaceText(' <ontario-callout> ')
					.addRegularText(
						'does not match one of the valid highlightColour types. A default colour of `teal` will be applied.',
					)
					.printMessage();
			}
		}
		// if no highlight colour is passed, return 'teal'
		return 'teal';
	}
	/**
	 * Print the invalid `type` warning message.
	 * @returns default type ('string')
	 */
	warnDefaultType() {
		const message = new consoleMessage.ConsoleMessageClass();
		message
			.addDesignSystemTag()
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
	}
	componentWillLoad() {
		this.validateHighlightColour();
		this.validateHeadingContent();
		this.validateHeadingType();
		this.validateHeadingContentType();
	}
	render() {
		return generateCalloutAside(
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
OntarioCallout.style = ontarioCalloutCss;

var __rest =
	(undefined && undefined.__rest) ||
	function (s, e) {
		var t = {};
		for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
		if (s != null && typeof Object.getOwnPropertySymbols === 'function')
			for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
				if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
			}
		return t;
	};
const Input = (_a) => {
	var { autoComplete, className, id, name, type, value, required, onKeyDown, onInput, onChange, onBlur, onFocus, ref } =
			_a,
		props = __rest(_a, [
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
	return index.h(
		'input',
		Object.assign(
			{
				autoComplete: autoComplete,
				class: className,
				id: id,
				name: name,
				type: type,
				value: value,
				required: !!required,
				onKeyDown: onKeyDown,
				onInput: onInput,
				onChange: onChange,
				onBlur: onBlur,
				onFocus: onFocus,
				ref: ref,
			},
			props,
		),
	);
};

const CaptionTypes = ['default', 'large', 'heading'];

var MessageContentType;
(function (MessageContentType) {
	MessageContentType['UndefinedCaptionObject'] = 'undefinedCaptionObject';
	MessageContentType['UndefinedCaptionText'] = 'undefinedCaption';
	MessageContentType['EmptyCaptionText'] = 'emptyCaption';
	MessageContentType['UndefinedCaptionType'] = 'undefinedCaptionType';
	MessageContentType['IncorrectCaptionType'] = 'incorrectCaptionType';
})(MessageContentType || (MessageContentType = {}));

class InputCaption {
	/**
	 * Set the class members
	 * Output a console warning message if the provided `label` type is incorrect
	 * @param caption object containing the essential data to configure the input label
	 */
	constructor(componentTagName, caption, translations, language, isLegend = false, required = false) {
		/**
		 * The type of caption to render.
		 */
		this.captionType = 'default';
		/**
		 * Determine whether the input field is required.
		 */
		this.required = false;
		/**
		 * Determine whether the rendered element is a `<label>` or `<legend>`.
		 */
		this.isLegend = false;
		this.language = 'en';
		/**
		 * Return the `<label>` element for text inputs
		 * @param captionFor Set the `htmlFor` attribute
		 * @returns element containing the caption for the input
		 */
		this.getCaption = (captionFor, hasHintExpander = false) => {
			const captionText = this.captionText && this.captionText.toLowerCase();
			const captionContent = this.isLegend
				? index.h(
						'legend',
						{ class: this.getClass() },
						this.captionType === 'heading' ? index.h('h1', null, this.captionText) : this.captionText,
						this.getRequiredFlagElement(),
						hasHintExpander && this.getHintExpanderAccessibilityText(captionText, false),
				  )
				: index.h(
						'label',
						{ htmlFor: captionFor, class: this.getClass() },
						this.captionText,
						this.getRequiredFlagElement(),
						hasHintExpander && this.getHintExpanderAccessibilityText(captionText, false),
				  );
			// with `this.captionType` already set to one of the enum values, the comparison no longer needs the `toLowerCase()` transform
			return this.captionType === 'heading' && !this.isLegend ? index.h('h1', null, captionContent) : captionContent;
		};
		let captionObject;
		if (typeof caption === 'string') {
			try {
				captionObject = JSON.parse(caption);
			} catch (_a) {
				captionObject = { captionText: caption, captionType: 'default' };
			}
		} else {
			captionObject = caption;
		}
		this.componentTagName = componentTagName.toLocaleLowerCase();
		this.captionText = captionObject === null || captionObject === void 0 ? void 0 : captionObject.captionText;
		this.captionType =
			((captionObject === null || captionObject === void 0 ? void 0 : captionObject.captionType) &&
				CaptionTypes.find((type) => {
					var _a;
					return type === ((_a = captionObject.captionType) === null || _a === void 0 ? void 0 : _a.toLowerCase());
				})) ||
			'default';
		this.required = required;
		this.isLegend = isLegend;
		this.translations = translations;
		this.language = language;
		this.validateCaption(this);
	}
	getHintExpanderAccessibilityText(captionText, hasHintExpanderOnOption = false) {
		const multipleOptionsMessage = index.h(
			'span',
			{ class: 'ontario-show-for-sr' },
			this.translations.accessibility.moreInfo[this.language],
			' "',
			captionText.toLowerCase(),
			'"',
			' ',
			this.translations.accessibility.checkboxHintExpander[this.language],
		);
		const singleOptionMessage = index.h(
			'span',
			{ class: 'ontario-show-for-sr' },
			this.translations.accessibility.moreInfo[this.language],
			' "',
			captionText.toLowerCase(),
			'"',
			' ',
			this.translations.accessibility.singleHintExpander[this.language],
		);
		return this.componentTagName === 'ontario-checkboxes'
			? !hasHintExpanderOnOption
				? multipleOptionsMessage
				: singleOptionMessage
			: singleOptionMessage;
	}
	/**
	 * Determines which flag text to use between `required` and `optional`
	 * @returns `required` or `optional` flag text
	 */
	getRequiredFlagText() {
		return this.required
			? this.translations && `(${this.translations.required[this.language]})`
			: this.translations && `(${this.translations.optional[this.language]})`;
	}
	/**
	 * Get the HTML for the required/optional flag.
	 * @returns CSS class for the label/legend.
	 */
	getRequiredFlagElement() {
		return index.h('span', { class: 'ontario-label__flag' }, this.getRequiredFlagText());
	}
	/**
	 * Get the CSS class for the `label` element.
	 * @returns CSS class for the `label` element.
	 */
	getClass() {
		return this.captionType === 'large' || this.captionType === 'heading'
			? this.isLegend
				? `ontario-fieldset__legend ontario-fieldset__legend--${this.captionType}`
				: `ontario-label ontario-label--${this.captionType}`
			: this.isLegend
			? 'ontario-fieldset__legend'
			: 'ontario-label';
	}
	/**
	 * Validate caption input by user and output warning message to the console if:
	 * 1. the `caption` object is not provided
	 * 2. the `captionText` property of the `caption` object is not provided
	 * 3. the `captionText` property of the `caption` object is empty or contain only spaces
	 * 4. the `captionType` property of the `caption` object is not provided
	 * 5. the `captionType` property of the `caption` object is incorrect
	 */
	validateCaption(caption) {
		var _a;
		let messageType;
		// undefined `caption` object
		if (!caption || Object.keys(caption).length <= 0) {
			messageType = MessageContentType.UndefinedCaptionObject;
		} else {
			// undefined `captionText` property
			if (!caption.captionText) {
				messageType = MessageContentType.UndefinedCaptionText;
			} else {
				// `captionText` that is empty or contains only spaces
				if (/^\s*$/.test(caption.captionText)) {
					messageType = MessageContentType.EmptyCaptionText;
				}
			}
			// undefined `captionType`
			if (!caption.captionType) {
				messageType = MessageContentType.UndefinedCaptionType;
			} else {
				// incorrect `captionType`
				if (
					!CaptionTypes.includes(
						(_a = caption === null || caption === void 0 ? void 0 : caption.captionType) === null || _a === void 0
							? void 0
							: _a.toLowerCase(),
					)
				) {
					messageType = MessageContentType.IncorrectCaptionType;
				}
			}
		}
		if (messageType) {
			const message = new consoleMessage.ConsoleMessageClass().addDesignSystemTag();
			if (messageType !== MessageContentType.UndefinedCaptionObject) {
				message
					.addMonospaceText(
						` ${
							messageType === MessageContentType.EmptyCaptionText ||
							messageType === MessageContentType.UndefinedCaptionText
								? 'caption or captionText'
								: 'captionType'
						} `,
					)
					.addRegularText('object or property of');
			}
			message.addMonospaceText(' caption ').addRegularText('object on').addMonospaceText(` ${this.componentTagName} `);
			this.printConsoleMessage(messageType, message, this.getRequiredFlagText());
		}
	}
	/**
	 * Generate the content of warning message to be printed to the console
	 * @param messageType determine the content of warning message to output
	 * @param componentTagName the tag name of the component that's emitting the warning message
	 * @param requiredFlagText accepts a string value to be used as the required flag text and defaults to `(optional)` if not set
	 * @returns an array of `ConsoleMessage` objects containing the message and associated styles to be printed to the console
	 */
	printConsoleMessage(messageType, message, requiredFlagText = '(optional)') {
		switch (messageType) {
			// undefinedCaptionObject example: caption object on <ontario-input> is required but not defined. A blank followed by a (optional) flag is assumed.
			// undefinedCaptionText example: captionText property of caption object on <ontario-input> is required but not defined. A blank followed by a (optional) flag is assumed.
			// EmptyCaptionText example: captionText property of caption object on <ontario-input> is empty or contains only spaces. A blank followed by a (optional) flag is assumed.
			case MessageContentType.UndefinedCaptionObject:
			case MessageContentType.UndefinedCaptionText:
			case MessageContentType.EmptyCaptionText:
				message
					.addRegularText(
						`${
							messageType === MessageContentType.EmptyCaptionText
								? 'is empty or contains only spaces'
								: 'is required but not defined'
						}. A blank followed by a`,
					)
					.addMonospaceText(` ${requiredFlagText} `)
					.addRegularText('flag is assumed.');
				break;
			// UndefinedCaptionType example: captionType property of caption object on <ontario-input> is not defined. The default type is assumed.
			case MessageContentType.UndefinedCaptionType:
				message.addRegularText('is not defined. The').addMonospaceText(' default ').addRegularText('type is assumed.');
				break;
			// IncorrectCaptionType example: captionType property of caption object on <ontario-input> was set to an incorrect type; only default, heading or large type is allowed. The default type is assumed.
			case MessageContentType.IncorrectCaptionType:
				message
					.addRegularText('was set to an incorrect type; only')
					.addMonospaceText(' default, heading, ')
					.addRegularText('or')
					.addMonospaceText(' large ')
					.addRegularText('type is allowed. The')
					.addMonospaceText(' default ')
					.addRegularText('type is assumed.');
				break;
		}
		message.printMessage();
	}
}

const constructHintTextObject = (hintText) => {
	let hintTextObject = { hint: '', hintContentType: 'string' };
	if (hintText) {
		if (typeof hintText === 'string') {
			try {
				hintTextObject = JSON.parse(hintText);
			} catch (_a) {
				hintTextObject = { hint: hintText, hintContentType: 'string' };
			}
		} else {
			hintTextObject = hintText;
		}
	}
	return hintTextObject;
};

var EventType;
(function (EventType) {
	EventType['Change'] = 'change';
	EventType['Blur'] = 'blur';
	EventType['Focus'] = 'focus';
})(EventType || (EventType = {}));

const handleInputEvent = (
	ev,
	eventType,
	input,
	inputChangeEvent,
	inputFocusEvent,
	inputBlurEvent,
	type,
	customChangeFunction,
	customFocusFunction,
	customBlurFunction,
) => {
	if (eventType === 'change') {
		if (type === 'radio' || type === 'checkbox') {
			if (input instanceof HTMLInputElement) {
				inputChangeEvent.emit({
					checked: input === null || input === void 0 ? void 0 : input.checked,
					id: input === null || input === void 0 ? void 0 : input.id,
					value: input === null || input === void 0 ? void 0 : input.value,
				});
			}
		} else {
			inputChangeEvent.emit({
				id: input === null || input === void 0 ? void 0 : input.id,
				value: input === null || input === void 0 ? void 0 : input.value,
			});
		}
		customChangeFunction && customChangeFunction(ev);
	}
	if (eventType === 'focus') {
		inputFocusEvent.emit({
			id: input === null || input === void 0 ? void 0 : input.id,
			focused: true,
			value: input === null || input === void 0 ? void 0 : input.value,
		});
		customFocusFunction && customFocusFunction(ev);
	}
	if (eventType === 'blur') {
		inputBlurEvent.emit({
			id: input === null || input === void 0 ? void 0 : input.id,
			focused: false,
			value: input === null || input === void 0 ? void 0 : input.value,
		});
		customBlurFunction && customBlurFunction(ev);
	}
};

const ontarioCheckboxesCss =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;font-size:inherit;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-checkboxes{margin-bottom:2.5rem;max-width:48rem}.ontario-checkboxes__item{position:relative;margin:0 0 1rem;padding:0 0 0 2rem;min-height:28px;-webkit-box-sizing:content-box;box-sizing:content-box}.ontario-checkboxes__item:last-of-type{margin:0}@media screen and (max-width: 40em){.ontario-checkboxes__item{padding:0 0 0 2.5rem;min-height:32px}}.ontario-checkboxes__input{cursor:pointer;margin:0;position:absolute;top:-2px;left:-2px;opacity:0;width:36px;height:36px;z-index:0;-webkit-tap-highlight-color:transparent}@media screen and (max-width: 40em){.ontario-checkboxes__input{width:40px;height:40px}}.ontario-checkboxes__label{display:inline-block;cursor:pointer;line-height:1.5;margin:0.25rem 0;padding:0 1rem;width:auto;white-space:normal}@media screen and (max-width: 40em){.ontario-checkboxes__label{margin:0.33rem 0}}.ontario-checkboxes__label:before{content:"";border:2px solid #1a1a1a;border-radius:4px;position:absolute;top:0;left:0;width:32px;height:32px;-webkit-transition:border 0.1s ease-in-out;transition:border 0.1s ease-in-out;display:block}@media screen and (min-width: 40em){.ontario-checkboxes__label:before{width:28px;height:28px}}.ontario-checkboxes__label:after{content:"";background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M0 2.667C0 1.194 1.194 0 2.667 0h18.667C22.806 0 24 1.194 24 2.667v18.667C24 22.806 22.806 24 21.333 24H2.667C1.194 24 0 22.806 0 21.333V2.667z\' fill=\'%231a1a1a\'/%3E%3Cpath d=\'M2.667 12.616l6.667 6.718 12-12.092-1.88-1.908L9.333 15.53l-4.787-4.8-1.88 1.894z\' fill=\'%23fff\'/%3E%3C/svg%3E%0A");background-repeat:no-repeat;height:30px;width:30px;position:absolute;top:1px;left:1px;right:0;bottom:0;opacity:0;display:block}@media screen and (max-width: 40em){.ontario-checkboxes__label:after{height:34px;width:34px}}.ontario-checkboxes__input:focus+.ontario-checkboxes__label:before{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}.ontario-checkboxes__input:checked+.ontario-checkboxes__label:after{opacity:1}.ontario-checkboxes__input:checked+.ontario-checkboxes__label:before{background-color:#1a1a1a}.ontario-checkboxes__hint-expander{margin:0.75rem 0 0 0.5rem}@media screen and (max-width: 40em){.ontario-checkboxes__hint-expander{margin-top:1rem}}';

const OntarioCheckboxes = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.checkboxOnChange = index.createEvent(this, 'checkboxOnChange', 7);
		this.checkboxOnBlur = index.createEvent(this, 'checkboxOnBlur', 7);
		this.checkboxOnFocus = index.createEvent(this, 'checkboxOnFocus', 7);
		/**
		 * Function to handle checkbox events and the information pertaining to the checkbox to emit.
		 */
		this.handleEvent = (ev, eventType) => {
			var _a;
			const input = ev.target;
			if (input) {
				input.checked = (_a = input.checked) !== null && _a !== void 0 ? _a : '';
			}
			handleInputEvent(
				ev,
				eventType,
				input,
				this.checkboxOnChange,
				this.checkboxOnFocus,
				this.checkboxOnBlur,
				'checkbox',
				this.customOnChange,
				this.customOnFocus,
				this.customOnBlur,
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
	/**
	 * This listens for the `setAppLanguage` event sent from the test language toggler when it is is connected to the DOM. It is used for the initial language when the input component loads.
	 */
	handleSetAppLanguage(event) {
		this.language = index$1.validateLanguage(event);
	}
	handleHeaderLanguageToggled(event) {
		this.language = index$1.validateLanguage(event);
	}
	/**
	 * Watch for changes to the `hintText` prop.
	 *
	 * If a `hintText` prop is passed, the `constructHintTextObject` function will convert it to the correct format, and set the result to the `internalHintText` state.
	 */
	parseHintText() {
		if (this.hintText) {
			const hintTextObject = constructHintTextObject(this.hintText);
			this.internalHintText = hintTextObject;
		}
	}
	/**
	 * Watch for changes to the `hintExpander` prop.
	 *
	 * If a `hintExpander` prop is passed, it will be parsed (if it is a string), and the result will be set to the `internalHintExpander` state.
	 */
	parseHintExpander() {
		const hintExpander = this.hintExpander;
		if (hintExpander) {
			if (typeof hintExpander === 'string') this.internalHintExpander = JSON.parse(hintExpander);
			else this.internalHintExpander = hintExpander;
		}
	}
	/**
	 * Watch for changes to the `options` prop.
	 *
	 * If an `options` prop is passed, it will be parsed (if it is a string), and the result will be set to the `internalOptions` state. The result will be run through a validation function.
	 */
	parseOptions() {
		if (typeof this.options !== 'undefined') {
			if (!Array.isArray(this.options)) {
				this.internalOptions = JSON.parse(this.options);
			} else {
				this.internalOptions = this.options;
			}
		}
		this.validateOptions(this.internalOptions);
	}
	/**
	 * Validate the `options` and make sure the `options` prop has a value.
	 * Log a warning if user doesn't input a value for the `options`.
	 *
	 * @param newValue object to be validated
	 */
	validateOptions(newValue) {
		if (index$1.validateObjectExists(newValue)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' options ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-checkboxes> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	}
	/*
	 * Watch for changes in the `name` prop for validation purposes.
	 *
	 * Validate the `name` and make sure the `name` prop has a value.
	 * Log a warning if user doesn't input a value for the `name`.
	 */
	validateName(newValue) {
		if (index$1.validatePropExists(newValue)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' name ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-checkboxes> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	}
	/**
	 * Watch for changes to the `caption` prop.
	 *
	 * The caption will be run through the InputCaption constructor to convert it to the correct format, and set the result to the `captionState` state.
	 * @param newValue: Caption | string
	 */
	updateCaptionState(newValue) {
		this.captionState = new InputCaption(
			this.element.tagName,
			newValue,
			translations,
			this.language,
			true,
			this.required,
		);
	}
	/**
	 * Watch for changes to the `language` prop to render either the English or French translations
	 */
	updateLanguage() {
		this.updateCaptionState(this.caption);
	}
	/**
	 * If a `hintText` prop is passed, the id generated from it will be set to the internal `hintTextId` state to match with the fieldset `aria-describedBy` attribute.
	 */
	async componentDidLoad() {
		var _a;
		this.hintTextId = await ((_a = this.hintTextRef) === null || _a === void 0 ? void 0 : _a.getHintTextId());
	}
	componentWillLoad() {
		this.updateCaptionState(this.caption);
		this.parseOptions();
		this.parseHintExpander();
		this.parseHintText();
		this.validateName(this.name);
		this.language = index$1.validateLanguage(this.language);
	}
	render() {
		var _a;
		return index.h(
			'div',
			{ class: 'ontario-form-group' },
			index.h(
				'fieldset',
				{ 'class': 'ontario-fieldset', 'aria-describedby': this.hintTextId },
				this.captionState.getCaption(undefined, !!this.internalHintExpander),
				this.internalHintText &&
					index.h('ontario-hint-text', {
						hint: this.internalHintText.hint,
						hintContentType: this.internalHintText.hintContentType,
						ref: (el) => (this.hintTextRef = el),
					}),
				index.h(
					'div',
					{ class: 'ontario-checkboxes' },
					(_a = this.internalOptions) === null || _a === void 0
						? void 0
						: _a.map((checkbox) =>
								index.h(
									'div',
									{ class: 'ontario-checkboxes__item' },
									index.h(Input, {
										className: 'ontario-checkboxes__input',
										id: checkbox.elementId,
										name: this.name,
										type: 'checkbox',
										value: checkbox.value,
										required: !!this.required,
										onChange: (e) => this.handleEvent(e, EventType.Change),
										onBlur: (e) => this.handleEvent(e, EventType.Blur),
										onFocus: (e) => this.handleEvent(e, EventType.Focus),
									}),
									index.h(
										'label',
										{ class: 'ontario-checkboxes__label', htmlFor: checkbox.elementId },
										checkbox.label,
										checkbox.hintExpander && this.captionState.getHintExpanderAccessibilityText(checkbox.label, true),
									),
									index.h(
										'div',
										{ class: 'ontario-checkboxes__hint-expander' },
										checkbox.hintExpander &&
											index.h('ontario-hint-expander', {
												'hint': checkbox.hintExpander.hint,
												'content': checkbox.hintExpander.content,
												'hintContentType': checkbox.hintExpander.hintContentType,
												'input-exists': true,
											}),
									),
								),
						  ),
					this.internalHintExpander &&
						index.h('ontario-hint-expander', {
							'hint': this.internalHintExpander.hint,
							'content': this.internalHintExpander.content,
							'hintContentType': this.internalHintExpander.hintContentType,
							'input-exists': true,
						}),
				),
			),
		);
	}
	get element() {
		return index.getElement(this);
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
OntarioCheckboxes.style = ontarioCheckboxesCss;

const OntarioIconCriticalAlertWarning = `<svg class="svg-icon" role="img" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z" fill="white" />
	<rect x="11" y="10" width="2" height="4" fill="black" />
	<rect x="11" y="16" width="2" height="2" fill="black" />
</svg>
`;

const ontarioCriticalAlertCss =
	'.ontario-row{margin:0 auto;max-width:72rem;width:100%}.ontario-row:before,.ontario-row:after{content:"";display:table}.ontario-row:after{clear:both}.ontario-row.ontario-row--collapse>.ontario-column,.ontario-row.ontario-row--collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-row--collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row .ontario-row{margin:0 -1rem;max-width:none;width:auto}.ontario-row .ontario-row:before,.ontario-row .ontario-row:after{content:"";display:table}.ontario-row .ontario-row:after{clear:both}.ontario-row .ontario-row.ontario-row--collapse{margin:0;max-width:none;width:auto}.ontario-row .ontario-row.ontario-row--collapse:before,.ontario-row .ontario-row.ontario-row--collapse:after{content:"";display:table}.ontario-row .ontario-row.ontario-row--collapse:after{clear:both}.ontario-column,.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;float:left}.ontario-column+.ontario-column:last-child,.ontario-column+.ontario-columns:last-child,.ontario-columns+.ontario-column:last-child,.ontario-columns+.ontario-columns:last-child{float:right}.ontario-column+.ontario-column.ontario-end,.ontario-column+.ontario-columns.ontario-end,.ontario-columns+.ontario-column.ontario-end,.ontario-columns+.ontario-columns.ontario-end{float:left}@media only screen{.ontario-small-push-0{position:relative;left:0;right:auto}.ontario-small-pull-0{position:relative;right:0;left:auto}.ontario-small-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-small-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-small-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-small-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-small-push-3{position:relative;left:25%;right:auto}.ontario-small-pull-3{position:relative;right:25%;left:auto}.ontario-small-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-small-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-small-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-small-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-small-push-6{position:relative;left:50%;right:auto}.ontario-small-pull-6{position:relative;right:50%;left:auto}.ontario-small-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-small-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-small-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-small-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-small-push-9{position:relative;left:75%;right:auto}.ontario-small-pull-9{position:relative;right:75%;left:auto}.ontario-small-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-small-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-small-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-small-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-small-1{width:8.3333333333%}.ontario-small-2{width:16.6666666667%}.ontario-small-3{width:25%}.ontario-small-4{width:33.3333333333%}.ontario-small-5{width:41.6666666667%}.ontario-small-6{width:50%}.ontario-small-7{width:58.3333333333%}.ontario-small-8{width:66.6666666667%}.ontario-small-9{width:75%}.ontario-small-10{width:83.3333333333%}.ontario-small-11{width:91.6666666667%}.ontario-small-12{width:100%}.ontario-small-offset-0{margin-left:0 !important}.ontario-small-offset-1{margin-left:8.3333333333% !important}.ontario-small-offset-2{margin-left:16.6666666667% !important}.ontario-small-offset-3{margin-left:25% !important}.ontario-small-offset-4{margin-left:33.3333333333% !important}.ontario-small-offset-5{margin-left:41.6666666667% !important}.ontario-small-offset-6{margin-left:50% !important}.ontario-small-offset-7{margin-left:58.3333333333% !important}.ontario-small-offset-8{margin-left:66.6666666667% !important}.ontario-small-offset-9{margin-left:75% !important}.ontario-small-offset-10{margin-left:83.3333333333% !important}.ontario-small-offset-11{margin-left:91.6666666667% !important}.ontario-small-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-small-centered,.ontario-columns.ontario-small-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-small-uncentered,.ontario-columns.ontario-small-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-small-centered:last-child,.ontario-columns.ontario-small-centered:last-child{float:none}.ontario-column.ontario-small-uncentered:last-child,.ontario-columns.ontario-small-uncentered:last-child{float:left}.ontario-column.ontario-small-uncentered.ontario-opposite,.ontario-columns.ontario-small-uncentered.ontario-opposite{float:right}.ontario-row.ontario-small-collapse>.ontario-column,.ontario-row.ontario-small-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-small-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-small-uncollapse>.ontario-column,.ontario-row.ontario-small-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:40.063em){.ontario-medium-push-0{position:relative;left:0;right:auto}.ontario-medium-pull-0{position:relative;right:0;left:auto}.ontario-medium-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-medium-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-medium-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-medium-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-medium-push-3{position:relative;left:25%;right:auto}.ontario-medium-pull-3{position:relative;right:25%;left:auto}.ontario-medium-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-medium-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-medium-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-medium-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-medium-push-6{position:relative;left:50%;right:auto}.ontario-medium-pull-6{position:relative;right:50%;left:auto}.ontario-medium-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-medium-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-medium-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-medium-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-medium-push-9{position:relative;left:75%;right:auto}.ontario-medium-pull-9{position:relative;right:75%;left:auto}.ontario-medium-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-medium-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-medium-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-medium-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-medium-1{width:8.3333333333%}.ontario-medium-2{width:16.6666666667%}.ontario-medium-3{width:25%}.ontario-medium-4{width:33.3333333333%}.ontario-medium-5{width:41.6666666667%}.ontario-medium-6{width:50%}.ontario-medium-7{width:58.3333333333%}.ontario-medium-8{width:66.6666666667%}.ontario-medium-9{width:75%}.ontario-medium-10{width:83.3333333333%}.ontario-medium-11{width:91.6666666667%}.ontario-medium-12{width:100%}.ontario-medium-offset-0{margin-left:0 !important}.ontario-medium-offset-1{margin-left:8.3333333333% !important}.ontario-medium-offset-2{margin-left:16.6666666667% !important}.ontario-medium-offset-3{margin-left:25% !important}.ontario-medium-offset-4{margin-left:33.3333333333% !important}.ontario-medium-offset-5{margin-left:41.6666666667% !important}.ontario-medium-offset-6{margin-left:50% !important}.ontario-medium-offset-7{margin-left:58.3333333333% !important}.ontario-medium-offset-8{margin-left:66.6666666667% !important}.ontario-medium-offset-9{margin-left:75% !important}.ontario-medium-offset-10{margin-left:83.3333333333% !important}.ontario-medium-offset-11{margin-left:91.6666666667% !important}.ontario-medium-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-medium-centered,.ontario-columns.ontario-medium-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-medium-uncentered,.ontario-columns.ontario-medium-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-medium-centered:last-child,.ontario-columns.ontario-medium-centered:last-child{float:none}.ontario-column.ontario-medium-uncentered:last-child,.ontario-columns.ontario-medium-uncentered:last-child{float:left}.ontario-column.ontario-medium-uncentered.ontario-opposite,.ontario-columns.ontario-medium-uncentered.ontario-opposite{float:right}.ontario-row.ontario-medium-collapse>.ontario-column,.ontario-row.ontario-medium-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-medium-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-medium-uncollapse>.ontario-column,.ontario-row.ontario-medium-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:73.063em){.ontario-large-push-0{position:relative;left:0;right:auto}.ontario-large-pull-0{position:relative;right:0;left:auto}.ontario-large-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-large-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-large-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-large-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-large-push-3{position:relative;left:25%;right:auto}.ontario-large-pull-3{position:relative;right:25%;left:auto}.ontario-large-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-large-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-large-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-large-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-large-push-6{position:relative;left:50%;right:auto}.ontario-large-pull-6{position:relative;right:50%;left:auto}.ontario-large-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-large-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-large-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-large-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-large-push-9{position:relative;left:75%;right:auto}.ontario-large-pull-9{position:relative;right:75%;left:auto}.ontario-large-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-large-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-large-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-large-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-large-1{width:8.3333333333%}.ontario-large-2{width:16.6666666667%}.ontario-large-3{width:25%}.ontario-large-4{width:33.3333333333%}.ontario-large-5{width:41.6666666667%}.ontario-large-6{width:50%}.ontario-large-7{width:58.3333333333%}.ontario-large-8{width:66.6666666667%}.ontario-large-9{width:75%}.ontario-large-10{width:83.3333333333%}.ontario-large-11{width:91.6666666667%}.ontario-large-12{width:100%}.ontario-large-offset-0{margin-left:0 !important}.ontario-large-offset-1{margin-left:8.3333333333% !important}.ontario-large-offset-2{margin-left:16.6666666667% !important}.ontario-large-offset-3{margin-left:25% !important}.ontario-large-offset-4{margin-left:33.3333333333% !important}.ontario-large-offset-5{margin-left:41.6666666667% !important}.ontario-large-offset-6{margin-left:50% !important}.ontario-large-offset-7{margin-left:58.3333333333% !important}.ontario-large-offset-8{margin-left:66.6666666667% !important}.ontario-large-offset-9{margin-left:75% !important}.ontario-large-offset-10{margin-left:83.3333333333% !important}.ontario-large-offset-11{margin-left:91.6666666667% !important}.ontario-large-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-large-centered,.ontario-columns.ontario-large-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-large-uncentered,.ontario-columns.ontario-large-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-large-centered:last-child,.ontario-columns.ontario-large-centered:last-child{float:none}.ontario-column.ontario-large-uncentered:last-child,.ontario-columns.ontario-large-uncentered:last-child{float:left}.ontario-column.ontario-large-uncentered.ontario-opposite,.ontario-columns.ontario-large-uncentered.ontario-opposite{float:right}.ontario-row.ontario-large-collapse>.ontario-column,.ontario-row.ontario-large-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-large-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-large-uncollapse>.ontario-column,.ontario-row.ontario-large-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-push-0{position:relative;left:0;right:auto}.ontario-pull-0{position:relative;right:0;left:auto}.ontario-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-push-3{position:relative;left:25%;right:auto}.ontario-pull-3{position:relative;right:25%;left:auto}.ontario-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-push-6{position:relative;left:50%;right:auto}.ontario-pull-6{position:relative;right:50%;left:auto}.ontario-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-push-9{position:relative;left:75%;right:auto}.ontario-pull-9{position:relative;right:75%;left:auto}.ontario-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-pull-11{position:relative;right:91.6666666667%;left:auto}}@media only screen and (min-width:96.063em){.ontario-xlarge-push-0{position:relative;left:0;right:auto}.ontario-xlarge-pull-0{position:relative;right:0;left:auto}.ontario-xlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xlarge-push-3{position:relative;left:25%;right:auto}.ontario-xlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xlarge-push-6{position:relative;left:50%;right:auto}.ontario-xlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xlarge-push-9{position:relative;left:75%;right:auto}.ontario-xlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-xlarge-1{width:8.3333333333%}.ontario-xlarge-2{width:16.6666666667%}.ontario-xlarge-3{width:25%}.ontario-xlarge-4{width:33.3333333333%}.ontario-xlarge-5{width:41.6666666667%}.ontario-xlarge-6{width:50%}.ontario-xlarge-7{width:58.3333333333%}.ontario-xlarge-8{width:66.6666666667%}.ontario-xlarge-9{width:75%}.ontario-xlarge-10{width:83.3333333333%}.ontario-xlarge-11{width:91.6666666667%}.ontario-xlarge-12{width:100%}.ontario-xlarge-offset-0{margin-left:0 !important}.ontario-xlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xlarge-offset-3{margin-left:25% !important}.ontario-xlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xlarge-offset-6{margin-left:50% !important}.ontario-xlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xlarge-offset-9{margin-left:75% !important}.ontario-xlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xlarge-centered,.ontario-columns.ontario-xlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xlarge-uncentered,.ontario-columns.ontario-xlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xlarge-centered:last-child,.ontario-columns.ontario-xlarge-centered:last-child{float:none}.ontario-column.ontario-xlarge-uncentered:last-child,.ontario-columns.ontario-xlarge-uncentered:last-child{float:left}.ontario-column.ontario-xlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xlarge-collapse>.ontario-column,.ontario-row.ontario-xlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xlarge-uncollapse>.ontario-column,.ontario-row.ontario-xlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:120.063em){.ontario-xxlarge-push-0{position:relative;left:0;right:auto}.ontario-xxlarge-pull-0{position:relative;right:0;left:auto}.ontario-xxlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xxlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xxlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xxlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xxlarge-push-3{position:relative;left:25%;right:auto}.ontario-xxlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xxlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xxlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xxlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xxlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xxlarge-push-6{position:relative;left:50%;right:auto}.ontario-xxlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xxlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xxlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xxlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xxlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xxlarge-push-9{position:relative;left:75%;right:auto}.ontario-xxlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xxlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xxlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xxlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xxlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-xxlarge-1{width:8.3333333333%}.ontario-xxlarge-2{width:16.6666666667%}.ontario-xxlarge-3{width:25%}.ontario-xxlarge-4{width:33.3333333333%}.ontario-xxlarge-5{width:41.6666666667%}.ontario-xxlarge-6{width:50%}.ontario-xxlarge-7{width:58.3333333333%}.ontario-xxlarge-8{width:66.6666666667%}.ontario-xxlarge-9{width:75%}.ontario-xxlarge-10{width:83.3333333333%}.ontario-xxlarge-11{width:91.6666666667%}.ontario-xxlarge-12{width:100%}.ontario-xxlarge-offset-0{margin-left:0 !important}.ontario-xxlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xxlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xxlarge-offset-3{margin-left:25% !important}.ontario-xxlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xxlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xxlarge-offset-6{margin-left:50% !important}.ontario-xxlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xxlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xxlarge-offset-9{margin-left:75% !important}.ontario-xxlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xxlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xxlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xxlarge-centered,.ontario-columns.ontario-xxlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xxlarge-uncentered,.ontario-columns.ontario-xxlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xxlarge-centered:last-child,.ontario-columns.ontario-xxlarge-centered:last-child{float:none}.ontario-column.ontario-xxlarge-uncentered:last-child,.ontario-columns.ontario-xxlarge-uncentered:last-child{float:left}.ontario-column.ontario-xxlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xxlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xxlarge-collapse>.ontario-column,.ontario-row.ontario-xxlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xxlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xxlarge-uncollapse>.ontario-column,.ontario-row.ontario-xxlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}.ontario-critical-alert{background-color:#FFD440;font-weight:400;margin:0;padding:1rem 0;position:relative;z-index:10}.ontario-critical-alert__body{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.ontario-critical-alert__icon{display:-ms-flexbox;display:flex}.ontario-critical-alert__icon svg{width:28px;height:28px;margin:0 0.85rem 0 0}.ontario-critical-alert p{margin:0;padding:0;line-height:1.8}.ontario-critical-alert a{color:#1a1a1a;font-weight:700}.ontario-critical-alert a:hover,.ontario-critical-alert a:focus{text-decoration:none}.ontario-critical-alert a:visited{color:#1a1a1a}.ontario-critical-alert ::slotted(a){color:#1a1a1a !important;font-weight:700}.ontario-critical-alert ::slotted(a:hover),.ontario-critical-alert ::slotted(a:focus){text-decoration:none !important}.ontario-critical-alert ::slotted(a:visited){color:#1a1a1a}';

const OntarioCriticalAlert = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.content = undefined;
	}
	/**
	 * Watch for changes to the `content` prop value.
	 *
	 * If no `content` prop was passed, or no host element textContent exists, a warning message will be printed.
	 *
	 * @param newValue string | HTMLElement
	 */
	validateCriticalAlertContent(newValue) {
		// if no slot is passed, run the `validatePropExists` function
		if (!this.host.textContent) {
			if (index$1.validatePropExists(newValue)) {
				/**
				 * Print the quote warning message
				 */
				const message = new consoleMessage.ConsoleMessageClass();
				message
					.addDesignSystemTag()
					.addMonospaceText(' content ')
					.addRegularText('for')
					.addMonospaceText(' <ontario-critical-alert> ')
					.addRegularText('was not provided.')
					.printMessage();
			}
		}
	}
	renderContent() {
		const content = this.content;
		if (typeof content === 'string') {
			return content;
		}
		return index.h('slot', null);
	}
	componentWillLoad() {
		this.validateCriticalAlertContent(this.content);
	}
	render() {
		return index.h(
			'div',
			{ class: 'ontario-critical-alert' },
			index.h(
				'div',
				{ class: 'ontario-row' },
				index.h(
					'div',
					{ class: 'ontario-column ontario-small-12' },
					index.h(
						'div',
						{ class: 'ontario-critical-alert__body' },
						index.h('div', { class: 'ontario-critical-alert__icon', innerHTML: OntarioIconCriticalAlertWarning }),
						index.h('p', null, this.renderContent()),
					),
				),
			),
		);
	}
	get host() {
		return index.getElement(this);
	}
	static get watchers() {
		return {
			content: ['validateCriticalAlertContent'],
		};
	}
};
OntarioCriticalAlert.style = ontarioCriticalAlertCss;

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
	// lazy load so that environments that need to polyfill have a chance to do so
	if (!getRandomValues) {
		// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
		// find the complete implementation of crypto (msCrypto) on IE11.
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

const REGEX =
	/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
	return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
	byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
	var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	// Note: Be careful editing this code!  It's been tuned for performance
	// and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
	var uuid = (
		byteToHex[arr[offset + 0]] +
		byteToHex[arr[offset + 1]] +
		byteToHex[arr[offset + 2]] +
		byteToHex[arr[offset + 3]] +
		'-' +
		byteToHex[arr[offset + 4]] +
		byteToHex[arr[offset + 5]] +
		'-' +
		byteToHex[arr[offset + 6]] +
		byteToHex[arr[offset + 7]] +
		'-' +
		byteToHex[arr[offset + 8]] +
		byteToHex[arr[offset + 9]] +
		'-' +
		byteToHex[arr[offset + 10]] +
		byteToHex[arr[offset + 11]] +
		byteToHex[arr[offset + 12]] +
		byteToHex[arr[offset + 13]] +
		byteToHex[arr[offset + 14]] +
		byteToHex[arr[offset + 15]]
	).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
	// of the following:
	// - One or more input array values don't map to a hex octet (leading to
	// "undefined" in the uuid)
	// - Invalid input values for the RFC `version` or `variant` fields

	if (!validate(uuid)) {
		throw TypeError('Stringified UUID is invalid');
	}

	return uuid;
}

function v4(options, buf, offset) {
	options = options || {};
	var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

	rnds[6] = (rnds[6] & 0x0f) | 0x40;
	rnds[8] = (rnds[8] & 0x3f) | 0x80; // Copy bytes to buffer, if provided

	if (buf) {
		offset = offset || 0;

		for (var i = 0; i < 16; ++i) {
			buf[offset + i] = rnds[i];
		}

		return buf;
	}

	return stringify(rnds);
}

function hasMultipleTrueValues(arr, key) {
	let count = 0;
	for (const obj of arr) {
		if (obj[key] === true || obj[key] === 'true') {
			count++;
			if (count > 1) {
				return true;
			}
		}
	}
	return false;
}

const ontarioDropdownListCss =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1>.ontario-label--heading,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1>.ontario-label--heading,h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1>.ontario-label--heading,h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;font-size:inherit;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-label{cursor:pointer;color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;line-height:1.5;margin:0 0 1rem 0;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-label{font-size:1.125rem;line-height:1.56}}.ontario-label--large{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2;max-width:26.25em}@media screen and (max-width: 40em){.ontario-label--large{font-size:1.4375rem;line-height:1.39}}h1>.ontario-label--heading{display:inline-block;margin:0}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-input:focus,.ontario-input:active{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;width:100%;padding:0.625rem 1rem;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-dropdown{background-color:#FFFFFF;background-position:right 0.5rem center;background-repeat:no-repeat;background-size:2rem;padding-right:2.25rem;cursor:pointer}.ontario-dropdown.ontario-dropdown-hint-expander--true{margin-bottom:1rem}.ontario-dropdown::-ms-expand{display:none}.ontario-dropdown option{font-weight:normal}';

const OntarioDropdownList = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.dropdownOnChange = index.createEvent(this, 'dropdownOnChange', 7);
		this.dropdownOnBlur = index.createEvent(this, 'dropdownOnBlur', 7);
		this.dropdownOnFocus = index.createEvent(this, 'dropdownOnFocus', 7);
		/**
		 * Function to handle dropdown list events and the information pertaining to the dropdown list to emit.
		 */
		this.handleEvent = (ev, eventType) => {
			const input = ev.target;
			handleInputEvent(
				ev,
				eventType,
				input,
				this.dropdownOnChange,
				this.dropdownOnFocus,
				this.dropdownOnBlur,
				'dropdown',
				this.customOnChange,
				this.customOnFocus,
				this.customOnBlur,
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
	/**
	 * This listens for the `setAppLanguage` event sent from the test language toggler when it is is connected to the DOM. It is used for the initial language when the input component loads.
	 */
	handleSetAppLanguage(event) {
		this.language = index$1.validateLanguage(event);
	}
	handleHeaderLanguageToggled(event) {
		this.language = index$1.validateLanguage(event);
	}
	/*
	 * Watch for changes in the `name` prop for validation purposes.
	 *
	 * Validate the `name` and make sure the `name` prop has a value.
	 * Log a warning if user doesn't input a value for the `name`.
	 */
	validateName(newValue) {
		if (index$1.validatePropExists(newValue)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' name ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-dropdown-list> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	}
	/*
	 * Watch for changes in the `options` prop for validation purposes.
	 *
	 * Validate the `options` and make sure the `options` prop has a value.
	 * Log a warning if user doesn't input a value for the `options`.
	 */
	validateOptions(newValue) {
		if (index$1.validateObjectExists(newValue)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' options ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-dropdown-list> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	}
	/**
	 * Watch for changes to the `options` prop.
	 *
	 * If an `options` prop is passed, it will be parsed (if it is a string), and the result will be set to the `internalOptions` state. The result will be run through a validation function.
	 */
	parseOptions() {
		if (typeof this.options !== 'undefined') {
			if (!Array.isArray(this.options)) {
				this.internalOptions = JSON.parse(this.options);
			} else {
				this.internalOptions = this.options;
			}
		}
		// Check selected status of options
		this.validateSelectedOption(this.internalOptions);
	}
	/**
	 * Watch for changes to the `caption` prop.
	 *
	 * The caption will be run through the InputCaption constructor to convert it to the correct format, and set the result to the `captionState` state.
	 * @param newValue: Caption | string
	 */
	updateCaptionState(newValue) {
		this.captionState = new InputCaption(
			this.element.tagName,
			newValue,
			translations,
			this.language,
			false,
			this.required,
		);
	}
	/**
	 * Watch for changes to the `hintText` prop.
	 *
	 * If a `hintText` prop is passed, the `constructHintTextObject` function will convert it to the correct format, and set the result to the `internalHintText` state.
	 */
	parseHintText() {
		if (this.hintText) {
			const hintTextObject = constructHintTextObject(this.hintText);
			this.internalHintText = hintTextObject;
		}
	}
	/**
	 * Watch for changes to the `language` prop to render either the English or French translations
	 */
	updateLanguage() {
		this.updateCaptionState(this.caption);
	}
	/**
	 * Watch for changes to the `hintExpander` prop.
	 *
	 * If a `hintExpander` prop is passed, it will be parsed (if it is a string), and the result will be set to the `internalHintExpander` state.
	 */
	parseHintExpander() {
		const hintExpander = this.hintExpander;
		if (hintExpander) {
			if (typeof hintExpander === 'string') this.internalHintExpander = JSON.parse(hintExpander);
			else this.internalHintExpander = hintExpander;
		}
	}
	getId() {
		var _a;
		return (_a = this.elementId) !== null && _a !== void 0 ? _a : '';
	}
	/**
	 * This function will set a selected key to `false` for each dropdown if no selected value is passed.
	 *
	 * It will also pass a warning to the user if multiple `true` selected values are passed.
	 *
	 * @param options
	 * @returns options
	 */
	validateSelectedOption(options) {
		const selected = 'selected';
		options.forEach((singleOption) => {
			// if no selected key is passed, set a default key to false
			if (!singleOption.hasOwnProperty(selected)) {
				singleOption.selected = false;
			}
		});
		if (hasMultipleTrueValues(options, selected)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' There are duplicate truthy `selected` values ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-dropdown-list> ')
				.addRegularText('options. Please update options so only one truthy `selected` value exists.')
				.printMessage();
		}
		return options;
	}
	getDropdownArrow() {
		return {
			backgroundImage: `url(${index.getAssetPath('./assets/ontario-material-dropdown-arrow-48px.svg')})`,
		};
	}
	getClass() {
		return this.hintExpander
			? `ontario-input ontario-dropdown ontario-dropdown-hint-expander--true`
			: `ontario-input ontario-dropdown`;
	}
	/**
	 * If a `hintText` prop is passed, the id generated from it will be set to the internal `hintTextId` state to match with the select `aria-describedBy` attribute.
	 */
	async componentDidLoad() {
		var _a;
		this.hintTextId = await ((_a = this.hintTextRef) === null || _a === void 0 ? void 0 : _a.getHintTextId());
	}
	componentWillLoad() {
		var _a;
		this.updateCaptionState(this.caption);
		this.parseOptions();
		this.validateName(this.name);
		this.validateOptions(this.internalOptions);
		this.elementId = (_a = this.elementId) !== null && _a !== void 0 ? _a : v4();
		this.parseHintText();
		this.parseHintExpander();
		this.language = index$1.validateLanguage(this.language);
	}
	render() {
		var _a, _b;
		return index.h(
			'div',
			{ class: 'ontario-form-group' },
			this.captionState.getCaption(this.getId(), !!this.internalHintExpander),
			this.internalHintText &&
				index.h('ontario-hint-text', {
					hint: this.internalHintText.hint,
					hintContentType: this.internalHintText.hintContentType,
					ref: (el) => (this.hintTextRef = el),
				}),
			index.h(
				'select',
				{
					'class': this.getClass(),
					'aria-describedby': this.hintTextId,
					'id': this.getId(),
					'name': this.name,
					'style': this.getDropdownArrow(),
					'onChange': (e) => this.handleEvent(e, EventType.Change),
					'onBlur': (e) => this.handleEvent(e, EventType.Blur),
					'onFocus': (e) => this.handleEvent(e, EventType.Focus),
					'required': !!this.required,
				},
				this.isEmptyStartOption &&
					(this.isEmptyStartOption === true || this.isEmptyStartOption === 'true'
						? index.h('option', null, this.translations.dropdownList.select[`${this.language}`])
						: index.h('option', null, this.isEmptyStartOption)),
				(_b =
					(_a = this.internalOptions) === null || _a === void 0
						? void 0
						: _a.map((dropdown) =>
								index.h('option', { value: dropdown.value, selected: dropdown.selected }, dropdown.label),
						  )) !== null && _b !== void 0
					? _b
					: '',
			),
			this.internalHintExpander &&
				index.h('ontario-hint-expander', {
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
		return index.getElement(this);
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
OntarioDropdownList.style = ontarioDropdownListCss;

const ontarioFieldsetCss =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;font-size:inherit;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}';

const OntarioFieldset = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.legend = undefined;
		this.legendSize = 'default';
	}
	/**
	 * Watch for changes to the legendSize prop.
	 * This is for validation purposes to make sure the legendSize matches one of the CaptionTypes.
	 */
	validateLegendSize() {
		const isValid = index$1.validateValueAgainstArray(this.legendSize, CaptionTypes);
		if (isValid) {
			return this.legendSize;
		} else {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(` legendSize ${this.legendSize} `)
				.addRegularText('for')
				.addMonospaceText(' <ontario-fieldset> ')
				.addRegularText('is not a valid type. A default size will be applied.')
				.printMessage();
			return 'default';
		}
	}
	/*
	 * Watch for changes in the `legend` prop for validation purposes.
	 */
	validateLegend() {
		this.validateLegendText(this.legend);
	}
	/**
	 * Print the legend warning message
	 */
	validateLegendText(newValue) {
		if (index$1.validatePropExists(newValue)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' legend ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-fieldset> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	}
	componentWillLoad() {
		this.validateLegend();
		this.validateLegendSize();
	}
	getClass() {
		switch (this.legendSize) {
			case 'large':
				return `ontario-fieldset__legend ontario-fieldset__legend--large`;
			case 'heading':
				return `ontario-fieldset__legend ontario-fieldset__legend--heading`;
			case 'default':
			default:
				return `ontario-fieldset__legend`;
		}
	}
	render() {
		return index.h(
			'div',
			{ class: 'ontario-form-group' },
			index.h(
				'fieldset',
				{ class: 'ontario-fieldset' },
				index.h(
					'legend',
					{ class: this.getClass() },
					this.legendSize === 'heading' ? index.h('h1', null, this.legend) : this.legend,
				),
				index.h('slot', null),
			),
		);
	}
	static get watchers() {
		return {
			legendSize: ['validateLegendSize'],
			legend: ['validateLegend'],
		};
	}
};
OntarioFieldset.style = ontarioFieldsetCss;

const ICON_WIDTH = 32;
const FooterSocialLinks = ({ facebook, twitter, instagram, youtube }) => {
	return index.h(
		'ul',
		{ class: 'ontario-footer__links-container ontario-footer__links-container--social' },
		facebook &&
			index.h(
				'li',
				null,
				index.h(
					'a',
					{ 'class': 'ontario-footer__link', 'href': facebook, 'aria-label': 'Facebook' },
					index.h('ontario-icon-facebook', { 'colour': 'white', 'icon-width': ICON_WIDTH }),
				),
			),
		twitter &&
			index.h(
				'li',
				null,
				index.h(
					'a',
					{ 'class': 'ontario-footer__link', 'href': twitter, 'aria-label': 'Twitter' },
					index.h('ontario-icon-twitter', { 'colour': 'white', 'icon-width': ICON_WIDTH }),
				),
			),
		instagram &&
			index.h(
				'li',
				null,
				index.h(
					'a',
					{ 'class': 'ontario-footer__link', 'href': instagram, 'aria-label': 'Instagram' },
					index.h('ontario-icon-instagram', { 'colour': 'white', 'icon-width': ICON_WIDTH }),
				),
			),
		youtube &&
			index.h(
				'li',
				null,
				index.h(
					'a',
					{ 'class': 'ontario-footer__link', 'href': youtube, 'aria-label': 'Youtube' },
					index.h('ontario-icon-youtube', { 'colour': 'white', 'icon-width': ICON_WIDTH }),
				),
			),
	);
};

const enDash = '\u2013';
const SimpleFooter = ({ accessibilityLink, privacyLink, contactLink, printerLink, className }) => {
	return index.h(
		'div',
		{ class: `ontario-row ${className !== null && className !== void 0 ? className : ''}` },
		index.h(
			'div',
			{ class: 'ontario-columns ontario-small-12' },
			index.h(
				'ul',
				{ class: 'ontario-footer__links-container ontario-footer__links-container--inline' },
				index.h(
					'li',
					null,
					index.h('a', { class: 'ontario-footer__link', href: accessibilityLink.href }, accessibilityLink.text),
				),
				index.h('li', null, index.h('a', { class: 'ontario-footer__link', href: privacyLink.href }, privacyLink.text)),
				contactLink &&
					index.h(
						'li',
						null,
						index.h(
							'a',
							{
								class: 'ontario-footer__link',
								href: contactLink === null || contactLink === void 0 ? void 0 : contactLink.href,
							},
							contactLink === null || contactLink === void 0 ? void 0 : contactLink.text,
						),
					),
			),
			index.h(
				'div',
				{ class: 'ontario-footer__copyright' },
				index.h(
					'a',
					{
						class: 'ontario-footer__link',
						href: printerLink === null || printerLink === void 0 ? void 0 : printerLink.href,
					},
					'\u00A9 ',
					printerLink === null || printerLink === void 0 ? void 0 : printerLink.text,
					' ',
					index.h('span', { class: 'ontario-nbsp' }, '2012', enDash, String(new Date().getFullYear()).slice(-2)),
				),
			),
		),
	);
};

const ColumnContent = ({ content }) => {
	const { heading, headingLevel: Heading = 'h3', text, html, list, type = 'text' } = content;
	return index.h(
		index.Fragment,
		null,
		heading && index.h(Heading, { class: 'ontario-h5' }, heading),
		type === 'text' && index.h('p', null, text),
		type === 'html' && index.h('div', { class: 'ontario-footer__paragraph', innerHTML: html }),
		type === 'list' &&
			!!(list === null || list === void 0 ? void 0 : list.length) &&
			index.h(
				'ul',
				null,
				list.map((item) => index.h('li', { class: 'ontario-footer__list_item', innerHTML: item })),
			),
	);
};

const FooterColumn = ({ data, socialLinks, isThreeColLayout = false, isFullWidthInMediumLayout = false }) => {
	const { title, content, button, headingLevel: Heading = 'h2' } = data;
	const threeColumnLayoutClasses = isThreeColLayout ? 'ontario-large-4 ontario-expanded-footer__one-third-block' : '';
	const mediumLayoutClasses = isFullWidthInMediumLayout ? 'ontario-medium-12' : 'ontario-medium-6';
	return index.h(
		'div',
		{ class: `ontario-columns ontario-small-12 ${mediumLayoutClasses} ${threeColumnLayoutClasses}` },
		index.h(Heading, { class: 'ontario-h4' }, title),
		content.map((item) => index.h(ColumnContent, { content: item })),
		button &&
			index.h(
				'a',
				{ class: 'ontario-footer__button ontario-button ontario-margin-bottom-0-!', href: button.link },
				button.text,
			),
		socialLinks && index.h(FooterSocialLinks, Object.assign({}, socialLinks)),
	);
};

const ExpandedFooterWrapper = (props, children) => {
	const { topMargin, footerLinks } = props;
	const style = { '--imagePath': `url(${index.getAssetPath('./assets/footer-expanded-supergraphic-logo.svg')})` };
	const marginClass = !topMargin ? 'ontario-margin-top-0-!' : '';
	return index.h(
		'footer',
		{ class: `ontario-footer ontario-footer--expanded ${marginClass}`, style: style },
		index.h(
			'div',
			{ class: 'ontario-footer__expanded-top-section' },
			index.h('div', { class: 'ontario-row' }, children),
		),
		index.h(SimpleFooter, Object.assign({}, footerLinks, { className: 'ontario-footer__expanded-bottom-section' })),
	);
};

const isInvalidTwoColumnOptions = (options) => {
	var _a, _b, _c, _d;
	return (
		!options ||
		!((_a = options.column1) === null || _a === void 0 ? void 0 : _a.title) ||
		!((_b = options.column1) === null || _b === void 0 ? void 0 : _b.content) ||
		!((_c = options.column2) === null || _c === void 0 ? void 0 : _c.title) ||
		!((_d = options.column2) === null || _d === void 0 ? void 0 : _d.content)
	);
};
const isInvalidThreeColumnOptions = (options) => {
	var _a, _b, _c, _d, _e, _f;
	return (
		!options ||
		!((_a = options.column1) === null || _a === void 0 ? void 0 : _a.title) ||
		!((_b = options.column1) === null || _b === void 0 ? void 0 : _b.content) ||
		!((_c = options.column2) === null || _c === void 0 ? void 0 : _c.title) ||
		!((_d = options.column2) === null || _d === void 0 ? void 0 : _d.content) ||
		!((_e = options.column3) === null || _e === void 0 ? void 0 : _e.title) ||
		!((_f = options.column3) === null || _f === void 0 ? void 0 : _f.content)
	);
};

const ontarioFooterCss =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}.ontario-row{margin:0 auto;max-width:72rem;width:100%}.ontario-row:before,.ontario-row:after{content:"";display:table}.ontario-row:after{clear:both}.ontario-row.ontario-row--collapse>.ontario-column,.ontario-row.ontario-row--collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-row--collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row .ontario-row{margin:0 -1rem;max-width:none;width:auto}.ontario-row .ontario-row:before,.ontario-row .ontario-row:after{content:"";display:table}.ontario-row .ontario-row:after{clear:both}.ontario-row .ontario-row.ontario-row--collapse{margin:0;max-width:none;width:auto}.ontario-row .ontario-row.ontario-row--collapse:before,.ontario-row .ontario-row.ontario-row--collapse:after{content:"";display:table}.ontario-row .ontario-row.ontario-row--collapse:after{clear:both}.ontario-column,.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;float:left}.ontario-column+.ontario-column:last-child,.ontario-column+.ontario-columns:last-child,.ontario-columns+.ontario-column:last-child,.ontario-columns+.ontario-columns:last-child{float:right}.ontario-column+.ontario-column.ontario-end,.ontario-column+.ontario-columns.ontario-end,.ontario-columns+.ontario-column.ontario-end,.ontario-columns+.ontario-columns.ontario-end{float:left}@media only screen{.ontario-small-push-0{position:relative;left:0;right:auto}.ontario-small-pull-0{position:relative;right:0;left:auto}.ontario-small-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-small-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-small-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-small-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-small-push-3{position:relative;left:25%;right:auto}.ontario-small-pull-3{position:relative;right:25%;left:auto}.ontario-small-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-small-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-small-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-small-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-small-push-6{position:relative;left:50%;right:auto}.ontario-small-pull-6{position:relative;right:50%;left:auto}.ontario-small-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-small-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-small-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-small-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-small-push-9{position:relative;left:75%;right:auto}.ontario-small-pull-9{position:relative;right:75%;left:auto}.ontario-small-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-small-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-small-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-small-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-small-1{width:8.3333333333%}.ontario-small-2{width:16.6666666667%}.ontario-small-3{width:25%}.ontario-small-4{width:33.3333333333%}.ontario-small-5{width:41.6666666667%}.ontario-small-6{width:50%}.ontario-small-7{width:58.3333333333%}.ontario-small-8{width:66.6666666667%}.ontario-small-9{width:75%}.ontario-small-10{width:83.3333333333%}.ontario-small-11{width:91.6666666667%}.ontario-small-12{width:100%}.ontario-small-offset-0{margin-left:0 !important}.ontario-small-offset-1{margin-left:8.3333333333% !important}.ontario-small-offset-2{margin-left:16.6666666667% !important}.ontario-small-offset-3{margin-left:25% !important}.ontario-small-offset-4{margin-left:33.3333333333% !important}.ontario-small-offset-5{margin-left:41.6666666667% !important}.ontario-small-offset-6{margin-left:50% !important}.ontario-small-offset-7{margin-left:58.3333333333% !important}.ontario-small-offset-8{margin-left:66.6666666667% !important}.ontario-small-offset-9{margin-left:75% !important}.ontario-small-offset-10{margin-left:83.3333333333% !important}.ontario-small-offset-11{margin-left:91.6666666667% !important}.ontario-small-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-small-centered,.ontario-columns.ontario-small-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-small-uncentered,.ontario-columns.ontario-small-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-small-centered:last-child,.ontario-columns.ontario-small-centered:last-child{float:none}.ontario-column.ontario-small-uncentered:last-child,.ontario-columns.ontario-small-uncentered:last-child{float:left}.ontario-column.ontario-small-uncentered.ontario-opposite,.ontario-columns.ontario-small-uncentered.ontario-opposite{float:right}.ontario-row.ontario-small-collapse>.ontario-column,.ontario-row.ontario-small-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-small-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-small-uncollapse>.ontario-column,.ontario-row.ontario-small-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:40.063em){.ontario-medium-push-0{position:relative;left:0;right:auto}.ontario-medium-pull-0{position:relative;right:0;left:auto}.ontario-medium-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-medium-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-medium-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-medium-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-medium-push-3{position:relative;left:25%;right:auto}.ontario-medium-pull-3{position:relative;right:25%;left:auto}.ontario-medium-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-medium-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-medium-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-medium-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-medium-push-6{position:relative;left:50%;right:auto}.ontario-medium-pull-6{position:relative;right:50%;left:auto}.ontario-medium-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-medium-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-medium-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-medium-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-medium-push-9{position:relative;left:75%;right:auto}.ontario-medium-pull-9{position:relative;right:75%;left:auto}.ontario-medium-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-medium-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-medium-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-medium-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-medium-1{width:8.3333333333%}.ontario-medium-2{width:16.6666666667%}.ontario-medium-3{width:25%}.ontario-medium-4{width:33.3333333333%}.ontario-medium-5{width:41.6666666667%}.ontario-medium-6{width:50%}.ontario-medium-7{width:58.3333333333%}.ontario-medium-8{width:66.6666666667%}.ontario-medium-9{width:75%}.ontario-medium-10{width:83.3333333333%}.ontario-medium-11{width:91.6666666667%}.ontario-medium-12{width:100%}.ontario-medium-offset-0{margin-left:0 !important}.ontario-medium-offset-1{margin-left:8.3333333333% !important}.ontario-medium-offset-2{margin-left:16.6666666667% !important}.ontario-medium-offset-3{margin-left:25% !important}.ontario-medium-offset-4{margin-left:33.3333333333% !important}.ontario-medium-offset-5{margin-left:41.6666666667% !important}.ontario-medium-offset-6{margin-left:50% !important}.ontario-medium-offset-7{margin-left:58.3333333333% !important}.ontario-medium-offset-8{margin-left:66.6666666667% !important}.ontario-medium-offset-9{margin-left:75% !important}.ontario-medium-offset-10{margin-left:83.3333333333% !important}.ontario-medium-offset-11{margin-left:91.6666666667% !important}.ontario-medium-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-medium-centered,.ontario-columns.ontario-medium-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-medium-uncentered,.ontario-columns.ontario-medium-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-medium-centered:last-child,.ontario-columns.ontario-medium-centered:last-child{float:none}.ontario-column.ontario-medium-uncentered:last-child,.ontario-columns.ontario-medium-uncentered:last-child{float:left}.ontario-column.ontario-medium-uncentered.ontario-opposite,.ontario-columns.ontario-medium-uncentered.ontario-opposite{float:right}.ontario-row.ontario-medium-collapse>.ontario-column,.ontario-row.ontario-medium-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-medium-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-medium-uncollapse>.ontario-column,.ontario-row.ontario-medium-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:73.063em){.ontario-large-push-0{position:relative;left:0;right:auto}.ontario-large-pull-0{position:relative;right:0;left:auto}.ontario-large-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-large-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-large-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-large-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-large-push-3{position:relative;left:25%;right:auto}.ontario-large-pull-3{position:relative;right:25%;left:auto}.ontario-large-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-large-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-large-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-large-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-large-push-6{position:relative;left:50%;right:auto}.ontario-large-pull-6{position:relative;right:50%;left:auto}.ontario-large-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-large-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-large-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-large-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-large-push-9{position:relative;left:75%;right:auto}.ontario-large-pull-9{position:relative;right:75%;left:auto}.ontario-large-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-large-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-large-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-large-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-large-1{width:8.3333333333%}.ontario-large-2{width:16.6666666667%}.ontario-large-3{width:25%}.ontario-large-4{width:33.3333333333%}.ontario-large-5{width:41.6666666667%}.ontario-large-6{width:50%}.ontario-large-7{width:58.3333333333%}.ontario-large-8{width:66.6666666667%}.ontario-large-9{width:75%}.ontario-large-10{width:83.3333333333%}.ontario-large-11{width:91.6666666667%}.ontario-large-12{width:100%}.ontario-large-offset-0{margin-left:0 !important}.ontario-large-offset-1{margin-left:8.3333333333% !important}.ontario-large-offset-2{margin-left:16.6666666667% !important}.ontario-large-offset-3{margin-left:25% !important}.ontario-large-offset-4{margin-left:33.3333333333% !important}.ontario-large-offset-5{margin-left:41.6666666667% !important}.ontario-large-offset-6{margin-left:50% !important}.ontario-large-offset-7{margin-left:58.3333333333% !important}.ontario-large-offset-8{margin-left:66.6666666667% !important}.ontario-large-offset-9{margin-left:75% !important}.ontario-large-offset-10{margin-left:83.3333333333% !important}.ontario-large-offset-11{margin-left:91.6666666667% !important}.ontario-large-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-large-centered,.ontario-columns.ontario-large-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-large-uncentered,.ontario-columns.ontario-large-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-large-centered:last-child,.ontario-columns.ontario-large-centered:last-child{float:none}.ontario-column.ontario-large-uncentered:last-child,.ontario-columns.ontario-large-uncentered:last-child{float:left}.ontario-column.ontario-large-uncentered.ontario-opposite,.ontario-columns.ontario-large-uncentered.ontario-opposite{float:right}.ontario-row.ontario-large-collapse>.ontario-column,.ontario-row.ontario-large-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-large-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-large-uncollapse>.ontario-column,.ontario-row.ontario-large-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-push-0{position:relative;left:0;right:auto}.ontario-pull-0{position:relative;right:0;left:auto}.ontario-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-push-3{position:relative;left:25%;right:auto}.ontario-pull-3{position:relative;right:25%;left:auto}.ontario-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-push-6{position:relative;left:50%;right:auto}.ontario-pull-6{position:relative;right:50%;left:auto}.ontario-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-push-9{position:relative;left:75%;right:auto}.ontario-pull-9{position:relative;right:75%;left:auto}.ontario-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-pull-11{position:relative;right:91.6666666667%;left:auto}}@media only screen and (min-width:96.063em){.ontario-xlarge-push-0{position:relative;left:0;right:auto}.ontario-xlarge-pull-0{position:relative;right:0;left:auto}.ontario-xlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xlarge-push-3{position:relative;left:25%;right:auto}.ontario-xlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xlarge-push-6{position:relative;left:50%;right:auto}.ontario-xlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xlarge-push-9{position:relative;left:75%;right:auto}.ontario-xlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-xlarge-1{width:8.3333333333%}.ontario-xlarge-2{width:16.6666666667%}.ontario-xlarge-3{width:25%}.ontario-xlarge-4{width:33.3333333333%}.ontario-xlarge-5{width:41.6666666667%}.ontario-xlarge-6{width:50%}.ontario-xlarge-7{width:58.3333333333%}.ontario-xlarge-8{width:66.6666666667%}.ontario-xlarge-9{width:75%}.ontario-xlarge-10{width:83.3333333333%}.ontario-xlarge-11{width:91.6666666667%}.ontario-xlarge-12{width:100%}.ontario-xlarge-offset-0{margin-left:0 !important}.ontario-xlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xlarge-offset-3{margin-left:25% !important}.ontario-xlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xlarge-offset-6{margin-left:50% !important}.ontario-xlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xlarge-offset-9{margin-left:75% !important}.ontario-xlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xlarge-centered,.ontario-columns.ontario-xlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xlarge-uncentered,.ontario-columns.ontario-xlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xlarge-centered:last-child,.ontario-columns.ontario-xlarge-centered:last-child{float:none}.ontario-column.ontario-xlarge-uncentered:last-child,.ontario-columns.ontario-xlarge-uncentered:last-child{float:left}.ontario-column.ontario-xlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xlarge-collapse>.ontario-column,.ontario-row.ontario-xlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xlarge-uncollapse>.ontario-column,.ontario-row.ontario-xlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:120.063em){.ontario-xxlarge-push-0{position:relative;left:0;right:auto}.ontario-xxlarge-pull-0{position:relative;right:0;left:auto}.ontario-xxlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xxlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xxlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xxlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xxlarge-push-3{position:relative;left:25%;right:auto}.ontario-xxlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xxlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xxlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xxlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xxlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xxlarge-push-6{position:relative;left:50%;right:auto}.ontario-xxlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xxlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xxlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xxlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xxlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xxlarge-push-9{position:relative;left:75%;right:auto}.ontario-xxlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xxlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xxlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xxlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xxlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-xxlarge-1{width:8.3333333333%}.ontario-xxlarge-2{width:16.6666666667%}.ontario-xxlarge-3{width:25%}.ontario-xxlarge-4{width:33.3333333333%}.ontario-xxlarge-5{width:41.6666666667%}.ontario-xxlarge-6{width:50%}.ontario-xxlarge-7{width:58.3333333333%}.ontario-xxlarge-8{width:66.6666666667%}.ontario-xxlarge-9{width:75%}.ontario-xxlarge-10{width:83.3333333333%}.ontario-xxlarge-11{width:91.6666666667%}.ontario-xxlarge-12{width:100%}.ontario-xxlarge-offset-0{margin-left:0 !important}.ontario-xxlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xxlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xxlarge-offset-3{margin-left:25% !important}.ontario-xxlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xxlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xxlarge-offset-6{margin-left:50% !important}.ontario-xxlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xxlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xxlarge-offset-9{margin-left:75% !important}.ontario-xxlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xxlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xxlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xxlarge-centered,.ontario-columns.ontario-xxlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xxlarge-uncentered,.ontario-columns.ontario-xxlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xxlarge-centered:last-child,.ontario-columns.ontario-xxlarge-centered:last-child{float:none}.ontario-column.ontario-xxlarge-uncentered:last-child,.ontario-columns.ontario-xxlarge-uncentered:last-child{float:left}.ontario-column.ontario-xxlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xxlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xxlarge-collapse>.ontario-column,.ontario-row.ontario-xxlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xxlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xxlarge-uncollapse>.ontario-column,.ontario-row.ontario-xxlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-margin-top-0-\\!{margin-top:0}.ontario-padding-top-0-\\!{padding-top:0}.ontario-margin-bottom-0-\\!{margin-bottom:0}.ontario-padding-bottom-0-\\!{padding-bottom:0}.ontario-margin-left-0-\\!{margin-left:0}.ontario-padding-left-0-\\!{padding-left:0}.ontario-margin-right-0-\\!{margin-right:0}.ontario-padding-right-0-\\!{padding-right:0}.ontario-margin-top-4-\\!{margin-top:0.25rem}.ontario-padding-top-4-\\!{padding-top:0.25rem}.ontario-margin-bottom-4-\\!{margin-bottom:0.25rem}.ontario-padding-bottom-4-\\!{padding-bottom:0.25rem}.ontario-margin-left-4-\\!{margin-left:0.25rem}.ontario-padding-left-4-\\!{padding-left:0.25rem}.ontario-margin-right-4-\\!{margin-right:0.25rem}.ontario-padding-right-4-\\!{padding-right:0.25rem}.ontario-margin-top-8-\\!{margin-top:0.5rem}.ontario-padding-top-8-\\!{padding-top:0.5rem}.ontario-margin-bottom-8-\\!{margin-bottom:0.5rem}.ontario-padding-bottom-8-\\!{padding-bottom:0.5rem}.ontario-margin-left-8-\\!{margin-left:0.5rem}.ontario-padding-left-8-\\!{padding-left:0.5rem}.ontario-margin-right-8-\\!{margin-right:0.5rem}.ontario-padding-right-8-\\!{padding-right:0.5rem}.ontario-margin-top-12-\\!{margin-top:0.75rem}.ontario-padding-top-12-\\!{padding-top:0.75rem}.ontario-margin-bottom-12-\\!{margin-bottom:0.75rem}.ontario-padding-bottom-12-\\!{padding-bottom:0.75rem}.ontario-margin-left-12-\\!{margin-left:0.75rem}.ontario-padding-left-12-\\!{padding-left:0.75rem}.ontario-margin-right-12-\\!{margin-right:0.75rem}.ontario-padding-right-12-\\!{padding-right:0.75rem}.ontario-margin-top-16-\\!{margin-top:1rem}.ontario-padding-top-16-\\!{padding-top:1rem}.ontario-margin-bottom-16-\\!{margin-bottom:1rem}.ontario-padding-bottom-16-\\!{padding-bottom:1rem}.ontario-margin-left-16-\\!{margin-left:1rem}.ontario-padding-left-16-\\!{padding-left:1rem}.ontario-margin-right-16-\\!{margin-right:1rem}.ontario-padding-right-16-\\!{padding-right:1rem}.ontario-margin-top-24-\\!{margin-top:1.5rem}.ontario-padding-top-24-\\!{padding-top:1.5rem}.ontario-margin-bottom-24-\\!{margin-bottom:1.5rem}.ontario-padding-bottom-24-\\!{padding-bottom:1.5rem}.ontario-margin-left-24-\\!{margin-left:1.5rem}.ontario-padding-left-24-\\!{padding-left:1.5rem}.ontario-margin-right-24-\\!{margin-right:1.5rem}.ontario-padding-right-24-\\!{padding-right:1.5rem}.ontario-margin-top-32-\\!{margin-top:2rem}.ontario-padding-top-32-\\!{padding-top:2rem}.ontario-margin-bottom-32-\\!{margin-bottom:2rem}.ontario-padding-bottom-32-\\!{padding-bottom:2rem}.ontario-margin-left-32-\\!{margin-left:2rem}.ontario-padding-left-32-\\!{padding-left:2rem}.ontario-margin-right-32-\\!{margin-right:2rem}.ontario-padding-right-32-\\!{padding-right:2rem}.ontario-margin-top-40-\\!{margin-top:2.5rem}.ontario-padding-top-40-\\!{padding-top:2.5rem}.ontario-margin-bottom-40-\\!{margin-bottom:2.5rem}.ontario-padding-bottom-40-\\!{padding-bottom:2.5rem}.ontario-margin-left-40-\\!{margin-left:2.5rem}.ontario-padding-left-40-\\!{padding-left:2.5rem}.ontario-margin-right-40-\\!{margin-right:2.5rem}.ontario-padding-right-40-\\!{padding-right:2.5rem}.ontario-margin-top-48-\\!{margin-top:3rem}.ontario-padding-top-48-\\!{padding-top:3rem}.ontario-margin-bottom-48-\\!{margin-bottom:3rem}.ontario-padding-bottom-48-\\!{padding-bottom:3rem}.ontario-margin-left-48-\\!{margin-left:3rem}.ontario-padding-left-48-\\!{padding-left:3rem}.ontario-margin-right-48-\\!{margin-right:3rem}.ontario-padding-right-48-\\!{padding-right:3rem}.ontario-margin-top-64-\\!{margin-top:4rem}.ontario-padding-top-64-\\!{padding-top:4rem}.ontario-margin-bottom-64-\\!{margin-bottom:4rem}.ontario-padding-bottom-64-\\!{padding-bottom:4rem}.ontario-margin-left-64-\\!{margin-left:4rem}.ontario-padding-left-64-\\!{padding-left:4rem}.ontario-margin-right-64-\\!{margin-right:4rem}.ontario-padding-right-64-\\!{padding-right:4rem}.ontario-padding-top-0-\\!{padding-top:0 !important}.ontario-padding-bottom-0-\\!{padding-bottom:0 !important}.ontario-padding-right-0-\\!{padding-right:0 !important}.ontario-padding-left-0-\\!{padding-left:0 !important}.ontario-padding-top-4-\\!{padding-top:0.25rem !important}.ontario-padding-bottom-4-\\!{padding-bottom:0.25rem !important}.ontario-padding-right-4-\\!{padding-right:0.25rem !important}.ontario-padding-left-4-\\!{padding-left:0.25rem !important}.ontario-padding-top-8-\\!{padding-top:0.5rem !important}.ontario-padding-bottom-8-\\!{padding-bottom:0.5rem !important}.ontario-padding-right-8-\\!{padding-right:0.5rem !important}.ontario-padding-left-8-\\!{padding-left:0.5rem !important}.ontario-padding-top-12-\\!{padding-top:0.75rem !important}.ontario-padding-bottom-12-\\!{padding-bottom:0.75rem !important}.ontario-padding-right-12-\\!{padding-right:0.75rem !important}.ontario-padding-left-12-\\!{padding-left:0.75rem !important}.ontario-padding-top-16-\\!{padding-top:1rem !important}.ontario-padding-bottom-16-\\!{padding-bottom:1rem !important}.ontario-padding-right-16-\\!{padding-right:1rem !important}.ontario-padding-left-16-\\!{padding-left:1rem !important}.ontario-padding-top-24-\\!{padding-top:1.5rem !important}.ontario-padding-bottom-24-\\!{padding-bottom:1.5rem !important}.ontario-padding-right-24-\\!{padding-right:1.5rem !important}.ontario-padding-left-24-\\!{padding-left:1.5rem !important}.ontario-padding-top-32-\\!{padding-top:2rem !important}.ontario-padding-bottom-32-\\!{padding-bottom:2rem !important}.ontario-padding-right-32-\\!{padding-right:2rem !important}.ontario-padding-left-32-\\!{padding-left:2rem !important}.ontario-padding-top-40-\\!{padding-top:2.5rem !important}.ontario-padding-bottom-40-\\!{padding-bottom:2.5rem !important}.ontario-padding-right-40-\\!{padding-right:2.5rem !important}.ontario-padding-left-40-\\!{padding-left:2.5rem !important}.ontario-padding-top-48-\\!{padding-top:3rem !important}.ontario-padding-bottom-48-\\!{padding-bottom:3rem !important}.ontario-padding-right-48-\\!{padding-right:3rem !important}.ontario-padding-left-48-\\!{padding-left:3rem !important}.ontario-padding-top-64-\\!{padding-top:4rem !important}.ontario-padding-bottom-64-\\!{padding-bottom:4rem !important}.ontario-padding-right-64-\\!{padding-right:4rem !important}.ontario-padding-left-64-\\!{padding-left:4rem !important}.ontario-padding-top-80-\\!{padding-top:5rem !important}.ontario-padding-bottom-80-\\!{padding-bottom:5rem !important}.ontario-padding-right-80-\\!{padding-right:5rem !important}.ontario-padding-left-80-\\!{padding-left:5rem !important}.ontario-margin-top-0-\\!{margin-top:0 !important}.ontario-margin-bottom-0-\\!{margin-bottom:0 !important}.ontario-margin-right-0-\\!{margin-right:0 !important}.ontario-margin-left-0-\\!{margin-left:0 !important}.ontario-margin-top-4-\\!{margin-top:0.25rem !important}.ontario-margin-bottom-4-\\!{margin-bottom:0.25rem !important}.ontario-margin-right-4-\\!{margin-right:0.25rem !important}.ontario-margin-left-4-\\!{margin-left:0.25rem !important}.ontario-margin-top-8-\\!{margin-top:0.5rem !important}.ontario-margin-bottom-8-\\!{margin-bottom:0.5rem !important}.ontario-margin-right-8-\\!{margin-right:0.5rem !important}.ontario-margin-left-8-\\!{margin-left:0.5rem !important}.ontario-margin-top-12-\\!{margin-top:0.75rem !important}.ontario-margin-bottom-12-\\!{margin-bottom:0.75rem !important}.ontario-margin-right-12-\\!{margin-right:0.75rem !important}.ontario-margin-left-12-\\!{margin-left:0.75rem !important}.ontario-margin-top-16-\\!{margin-top:1rem !important}.ontario-margin-bottom-16-\\!{margin-bottom:1rem !important}.ontario-margin-right-16-\\!{margin-right:1rem !important}.ontario-margin-left-16-\\!{margin-left:1rem !important}.ontario-margin-top-24-\\!{margin-top:1.5rem !important}.ontario-margin-bottom-24-\\!{margin-bottom:1.5rem !important}.ontario-margin-right-24-\\!{margin-right:1.5rem !important}.ontario-margin-left-24-\\!{margin-left:1.5rem !important}.ontario-margin-top-32-\\!{margin-top:2rem !important}.ontario-margin-bottom-32-\\!{margin-bottom:2rem !important}.ontario-margin-right-32-\\!{margin-right:2rem !important}.ontario-margin-left-32-\\!{margin-left:2rem !important}.ontario-margin-top-40-\\!{margin-top:2.5rem !important}.ontario-margin-bottom-40-\\!{margin-bottom:2.5rem !important}.ontario-margin-right-40-\\!{margin-right:2.5rem !important}.ontario-margin-left-40-\\!{margin-left:2.5rem !important}.ontario-margin-top-48-\\!{margin-top:3rem !important}.ontario-margin-bottom-48-\\!{margin-bottom:3rem !important}.ontario-margin-right-48-\\!{margin-right:3rem !important}.ontario-margin-left-48-\\!{margin-left:3rem !important}.ontario-margin-top-64-\\!{margin-top:4rem !important}.ontario-margin-bottom-64-\\!{margin-bottom:4rem !important}.ontario-margin-right-64-\\!{margin-right:4rem !important}.ontario-margin-left-64-\\!{margin-left:4rem !important}.ontario-margin-top-80-\\!{margin-top:5rem !important}.ontario-margin-bottom-80-\\!{margin-bottom:5rem !important}.ontario-margin-right-80-\\!{margin-right:5rem !important}.ontario-margin-left-80-\\!{margin-left:5rem !important}.ontario-footer{color:#FFFFFF;margin-top:5rem;padding:4rem 0}.ontario-footer .ontario-columns *:last-child{margin-bottom:0}@media screen and (max-width: 73em){.ontario-footer .ontario-columns{margin-bottom:3rem}.ontario-footer .ontario-columns:last-of-type{margin-bottom:0}}.ontario-footer__links-container{list-style:none;margin:0 0 1rem 0}@media screen and (min-width: 73em){.ontario-footer__links-container{margin-bottom:0.5rem}}.ontario-footer__links-container--inline{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap}@media screen and (min-width: 40em){.ontario-footer__links-container--inline{-ms-flex-direction:row;flex-direction:row}}.ontario-footer__links-container--two-column-list{-webkit-column-count:1;-moz-column-count:1;column-count:1;display:block;margin:0}@media screen and (min-width: 40em){.ontario-footer__links-container--two-column-list{-webkit-column-count:2;-moz-column-count:2;column-count:2}.ontario-footer__links-container--two-column-list .ontario-footer__link{padding:0;margin:0 1rem 1rem 0}}.ontario-footer__links-container li{padding:0.25rem 0}.ontario-footer__link{color:#FFFFFF;display:inline-block;padding:0.5rem 0;margin:0;text-decoration:underline}.ontario-footer__link:hover,.ontario-footer__link:focus{text-decoration:none}.ontario-footer__link:visited,.ontario-footer__link:active,.ontario-footer__link:hover{color:#FFFFFF}@media screen and (min-width: 40em){.ontario-footer__link{padding:0;margin:0 3rem 1rem 0}}.ontario-footer__copyright a{margin:0}.ontario-footer__links-container--social{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.ontario-footer__links-container--social .ontario-footer__link{background:transparent;border-radius:45%;margin:0 1rem 0.75rem 0;padding:0;outline:none;height:3.5rem;width:3.5rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.ontario-footer__links-container--social .ontario-footer__link:hover,.ontario-footer__links-container--social .ontario-footer__link:focus{background-color:black}.ontario-footer__links-container--social .ontario-footer__link:hover .ontario-icon,.ontario-footer__links-container--social .ontario-footer__link:focus .ontario-icon{fill:#FFFFFF}@media screen and (min-width: 40em){.ontario-footer__links-container--social .ontario-footer__link{height:3rem;width:3rem}}.ontario-footer__links-container--social .ontario-footer__link .ontario-icon{fill:#FFFFFF;width:36px;height:36px}@media screen and (min-width: 40em){.ontario-footer__links-container--social .ontario-footer__link .ontario-icon{width:32px;height:32px}}.ontario-footer__paragraph{max-width:48rem;width:100%;margin-bottom:1.5rem}.ontario-footer p a,.ontario-footer__paragraph a,.ontario-footer__list_item a{color:#FFFFFF;font-weight:600}.ontario-footer p a:visited,.ontario-footer__paragraph a:visited,.ontario-footer__list_item a:visited{color:#FFFFFF}.ontario-footer p a:active,.ontario-footer__paragraph a:active,.ontario-footer__list_item a:active{color:#e6e6e6}.ontario-footer p a:focus,.ontario-footer p a:hover,.ontario-footer__paragraph a:focus,.ontario-footer__paragraph a:hover,.ontario-footer__list_item a:focus,.ontario-footer__list_item a:hover{text-decoration:none}.ontario-button.ontario-footer__button{background-color:#1a1a1a;border:2px solid #FFFFFF;border-color:#FFFFFF;color:#FFFFFF;margin-bottom:2rem;border-radius:0.25rem;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;display:inline-block;font-size:1.125rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:600;line-height:1.5555555556;margin:0 1.75rem 1.5rem 0;min-width:10rem;padding:0.625rem 1.5rem;text-align:center;text-decoration:none;cursor:pointer}.ontario-button.ontario-footer__button:hover{background-color:#4d4d4d}.ontario-button.ontario-footer__button:focus,.ontario-button.ontario-footer__button:active{background-color:#666666;-webkit-box-shadow:0 0 0 0.25rem #009ADB;box-shadow:0 0 0 0.25rem #009ADB;outline:0.25rem solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}.ontario-footer__button+.ontario-footer__links-container{margin-top:1.5rem}.ontario-footer--default,.ontario-footer__expanded-top-section{position:relative}.ontario-footer--default:before,.ontario-footer__expanded-top-section:before{background-color:#333333;background-repeat:no-repeat;content:"";position:absolute;top:0;left:0;width:100%;height:100%}.ontario-footer--default:before{background-image:var(--imagePath, url(""))}.ontario-footer__expanded-top-section:before{background-image:var(--imagePath, url(""))}.ontario-footer--default{background-color:#1a1a1a;border-bottom:0.25rem solid #4d4d4d}.ontario-footer--default:before{background-size:112.5rem;background-position:calc(50vw - 73.5rem) -64rem}@media screen and (min-width: 40em){.ontario-footer--default:before{background-size:180rem;background-position:calc(50vw - 120rem) -106rem}}@media screen and (min-width: 73em){.ontario-footer--default:before{background-size:275rem;background-position:calc(50vw - 187rem) -160rem}}.ontario-footer--expanded{padding-top:0;background-color:#1a1a1a;border-bottom:0.25rem solid #4d4d4d}.ontario-footer__expanded-top-section{background-color:#262626;padding:4rem 0}.ontario-footer__expanded-top-section:before{background-size:165rem;background-position:calc(50vw - 125rem) -64rem}@media screen and (min-width: 40em){.ontario-footer__expanded-top-section:before{background-size:250rem;background-position:calc(50vw - 195rem) -106rem}}@media screen and (min-width: 73em){.ontario-footer__expanded-top-section:before{background-size:305rem;background-position:calc(50vw - 222rem) -160rem}}.ontario-footer__expanded-top-section .ontario-footer__link{text-decoration:underline}.ontario-footer__expanded-top-section .ontario-footer__link:hover,.ontario-footer__expanded-top-section .ontario-footer__link:focus{text-decoration:none}.ontario-footer__expanded-top-section .ontario-footer__link:active{color:#e6e6e6}.ontario-footer__expanded-top-section ul{margin-bottom:0}.ontario-expanded-footer__one-third-block{margin-bottom:0}.ontario-expanded-footer__one-third-block:first-of-type,.ontario-expanded-footer__one-third-block:nth-child(2){margin-bottom:3rem}@media screen and (min-width: 40em){.ontario-expanded-footer__one-third-block{margin-bottom:0}.ontario-expanded-footer__one-third-block:first-of-type{margin-bottom:3rem}.ontario-expanded-footer__one-third-block:nth-child(2){margin-bottom:0}}@media screen and (min-width: 73em){.ontario-expanded-footer__one-third-block{margin-bottom:0}.ontario-expanded-footer__one-third-block:first-of-type{margin-bottom:0}}.ontario-footer__expanded-bottom-section{background-color:#1a1a1a;padding-top:4rem}';

const OntarioFooter = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.isTwoColumnLayout = () => this.type === 'twoColumn';
		this.isThreeColumnLayout = () => this.type === 'threeColumn';
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
	/**
	 * This listens for the `setAppLanguage` event sent from the test language toggler when it is
	 * connected to the DOM. It is used for the initial language when the input component loads.
	 */
	handleSetAppLanguage(event) {
		this.language = index$1.validateLanguage(event);
	}
	handleHeaderLanguageToggled(event) {
		this.language = index$1.validateLanguage(event);
	}
	processFooterLinks() {
		this.parseOptions(this.footerLinks);
	}
	processSocialLinks() {
		this.parseOptions(this.socialLinks);
	}
	processTwoColumnOptions() {
		this.twoColumnOptions && this.parseOptions(this.twoColumnOptions);
		this.verifyTwoColumnOptions();
	}
	processThreeColumnOptions() {
		this.threeColumnOptions && this.parseOptions(this.threeColumnOptions);
		this.verifyThreeColumnOptions();
	}
	verifyTwoColumnOptions() {
		if (this.isTwoColumnLayout() && isInvalidTwoColumnOptions(this.twoColumnState)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' twoColumnOptions ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-footer> ')
				.addRegularText('were not fully set. Please review your values and ensure all options are set.')
				.printMessage();
		}
	}
	verifyThreeColumnOptions() {
		if (this.isThreeColumnLayout() && isInvalidThreeColumnOptions(this.threeColumnState)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' threeColumnOptions ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-footer> ')
				.addRegularText('were not fully set. Please review your values and ensure all options are set.')
				.printMessage();
		}
	}
	parseOptions(optionType) {
		const options = optionType;
		const isString = typeof options === 'string';
		if (!options) {
			return;
		}
		try {
			if (options === this.footerLinks) {
				this.footerLinksState = isString ? JSON.parse(options) : options;
			} else if (options === this.socialLinks) {
				this.socialLinksState = isString ? JSON.parse(options) : options;
			} else if (options === this.twoColumnOptions) {
				this.twoColumnState = isString ? JSON.parse(options) : options;
			} else {
				this.threeColumnState = isString ? JSON.parse(options) : options;
			}
		} catch (error) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addRegularText(' failed to parse props for ')
				.addMonospaceText('<ontario-footer>')
				.addRegularText(' in ')
				.addMonospaceText('parseOptions()')
				.addRegularText(' method \n ')
				.addMonospaceText(error.stack)
				.printMessage(consoleMessage.ConsoleType.Error);
		}
	}
	getBackgroundImage() {
		return { '--imagePath': `url(${index.getAssetPath('./assets/footer-default-supergraphic-logo.svg')})` };
	}
	getFooterClasses() {
		let classes = 'ontario-footer ontario-footer--default';
		if (!this.topMargin) {
			classes = `${classes}  ontario-margin-top-0-!`;
		}
		return classes;
	}
	getFooterLinks() {
		var _a, _b, _c, _d, _e, _f, _g;
		const { language, translations, footerLinksState } = this;
		const { accessibilityLink, privacyLink, contactLink, printerLink } =
			footerLinksState !== null && footerLinksState !== void 0 ? footerLinksState : {};
		const links = {
			accessibilityLink: {
				href:
					(_a = accessibilityLink === null || accessibilityLink === void 0 ? void 0 : accessibilityLink.href) !==
						null && _a !== void 0
						? _a
						: translations.accessibilityLink.link[language],
				text:
					(_b = accessibilityLink === null || accessibilityLink === void 0 ? void 0 : accessibilityLink.text) !==
						null && _b !== void 0
						? _b
						: translations.accessibilityLink.text[language],
			},
			privacyLink: {
				href:
					(_c = privacyLink === null || privacyLink === void 0 ? void 0 : privacyLink.href) !== null && _c !== void 0
						? _c
						: translations.privacyLink.link[language],
				text:
					(_d = privacyLink === null || privacyLink === void 0 ? void 0 : privacyLink.text) !== null && _d !== void 0
						? _d
						: translations.privacyLink.text[language],
			},
			printerLink: {
				href:
					(_e = printerLink === null || printerLink === void 0 ? void 0 : printerLink.href) !== null && _e !== void 0
						? _e
						: translations.printerLink.link[language],
				text:
					(_f = printerLink === null || printerLink === void 0 ? void 0 : printerLink.text) !== null && _f !== void 0
						? _f
						: translations.printerLink.text[language],
			},
		};
		if (contactLink) {
			links['contactLink'] = {
				href: contactLink.href,
				text: (_g = contactLink.text) !== null && _g !== void 0 ? _g : translations.contactUs[language],
			};
		}
		return links;
	}
	componentWillLoad() {
		this.processFooterLinks();
		this.processSocialLinks();
		this.processTwoColumnOptions();
		this.processThreeColumnOptions();
		this.language = index$1.validateLanguage(this.language);
	}
	render() {
		const { socialLinksState, twoColumnState, threeColumnState, topMargin } = this;
		const footerLinks = this.getFooterLinks();
		if (this.isTwoColumnLayout()) {
			return index.h(
				ExpandedFooterWrapper,
				{ footerLinks: footerLinks, topMargin: topMargin },
				index.h(FooterColumn, { data: twoColumnState.column1 }),
				index.h(FooterColumn, { data: twoColumnState.column2, socialLinks: socialLinksState }),
			);
		}
		if (this.isThreeColumnLayout()) {
			return index.h(
				ExpandedFooterWrapper,
				{ footerLinks: footerLinks, topMargin: topMargin },
				index.h(FooterColumn, {
					data: threeColumnState.column1,
					isThreeColLayout: true,
					isFullWidthInMediumLayout: true,
				}),
				index.h(FooterColumn, { data: threeColumnState.column2, isThreeColLayout: true }),
				index.h(FooterColumn, {
					data: threeColumnState.column3,
					socialLinks: socialLinksState,
					isThreeColLayout: true,
				}),
			);
		}
		return index.h(
			'footer',
			{ class: this.getFooterClasses(), style: this.getBackgroundImage() },
			index.h(SimpleFooter, Object.assign({}, footerLinks)),
		);
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
OntarioFooter.style = ontarioFooterCss;

const OntarioIconClose = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 24 24"><path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6L19 6.4z" fill="#ffffff"/></svg>
`;

const OntarioIconMenu = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="#ffffff"/></svg>`;

const OntarioIconSearch = `<svg class="svg-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="none"><path d="M15.5 14h-.8l-.28-.27A6.47 6.47 0 0 0 16 9.5a6.5 6.5 0 1 0-13 0A6.5 6.5 0 0 0 9.5 16a6.47 6.47 0 0 0 4.23-1.57l.27.28v.8l5 5 1.5-1.5-5-5zm-6 0C7 14 5 12 5 9.5S7 5 9.5 5 14 7 14 9.5 12 14 9.5 14z"/></svg>
`;

const OntarioIconSearchWhite = `<svg class="svg-icon" role="img" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#ffffff"><path d="M15.5 14h-.8l-.28-.27A6.47 6.47 0 0 0 16 9.5a6.5 6.5 0 1 0-13 0A6.5 6.5 0 0 0 9.5 16a6.47 6.47 0 0 0 4.23-1.57l.27.28v.8l5 5 1.5-1.5-5-5zm-6 0C7 14 5 12 5 9.5S7 5 9.5 5 14 7 14 9.5 12 14 9.5 14z"/></svg>
`;

const OntarioHeaderDefaultData = [
	{
		title: 'Arts and Culture',
		href: 'https://www.ontario.ca/page/arts-and-culture',
	},
	{
		title: 'Business and economy',
		href: 'https://www.ontario.ca/page/business-and-economy',
	},
	{
		title: 'Driving and Roads',
		href: 'https://www.ontario.ca/page/driving-and-roads',
	},
	{
		title: 'Education and training',
		href: 'https://www.ontario.ca/page/education-and-training',
	},
	{
		title: 'Environment and energy',
		href: 'https://www.ontario.ca/page/environment-and-energy',
	},
	{
		title: 'Government',
		href: 'https://www.ontario.ca/page/government',
	},
	{
		title: 'Health and wellness',
		href: 'https://www.ontario.ca/page/health-care-ontario',
	},
	{
		title: 'Home and community',
		href: 'https://www.ontario.ca/page/home-and-community',
	},
	{
		title: 'Jobs and employment',
		href: 'https://www.ontario.ca/page/jobs-and-employment',
	},
	{
		title: 'Law and safety',
		href: 'https://www.ontario.ca/page/law-and-safety',
	},
	{
		title: 'Rural and north',
		href: 'https://www.ontario.ca/page/rural-and-north',
	},
	{
		title: 'Taxes and benefits',
		href: 'https://www.ontario.ca/page/taxes-and-benefits',
	},
	{
		title: 'Travel and recreation',
		href: 'https://www.ontario.ca/page/travel-and-recreation',
	},
];

const ontarioApplicationHeaderCss =
	'.ontario-application-subheader__heading{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}.ontario-application-subheader__heading{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){.ontario-application-subheader__heading{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}.ontario-application-navigation a:focus,.ontario-application-navigation a:active,.ontario-header-button:focus,.ontario-input:focus,.ontario-input:active{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-row{margin:0 auto;max-width:72rem;width:100%}.ontario-row:before,.ontario-row:after{content:"";display:table}.ontario-row:after{clear:both}.ontario-row.ontario-row--collapse>.ontario-column,.ontario-row.ontario-row--collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-row--collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row .ontario-row{margin:0 -1rem;max-width:none;width:auto}.ontario-row .ontario-row:before,.ontario-row .ontario-row:after{content:"";display:table}.ontario-row .ontario-row:after{clear:both}.ontario-row .ontario-row.ontario-row--collapse{margin:0;max-width:none;width:auto}.ontario-row .ontario-row.ontario-row--collapse:before,.ontario-row .ontario-row.ontario-row--collapse:after{content:"";display:table}.ontario-row .ontario-row.ontario-row--collapse:after{clear:both}.ontario-column,.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;float:left}.ontario-column+.ontario-column:last-child,.ontario-column+.ontario-columns:last-child,.ontario-columns+.ontario-column:last-child,.ontario-columns+.ontario-columns:last-child{float:right}.ontario-column+.ontario-column.ontario-end,.ontario-column+.ontario-columns.ontario-end,.ontario-columns+.ontario-column.ontario-end,.ontario-columns+.ontario-columns.ontario-end{float:left}@media only screen{.ontario-small-push-0{position:relative;left:0;right:auto}.ontario-small-pull-0{position:relative;right:0;left:auto}.ontario-small-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-small-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-small-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-small-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-small-push-3{position:relative;left:25%;right:auto}.ontario-small-pull-3{position:relative;right:25%;left:auto}.ontario-small-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-small-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-small-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-small-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-small-push-6{position:relative;left:50%;right:auto}.ontario-small-pull-6{position:relative;right:50%;left:auto}.ontario-small-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-small-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-small-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-small-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-small-push-9{position:relative;left:75%;right:auto}.ontario-small-pull-9{position:relative;right:75%;left:auto}.ontario-small-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-small-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-small-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-small-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-small-1{width:8.3333333333%}.ontario-small-2{width:16.6666666667%}.ontario-small-3{width:25%}.ontario-small-4{width:33.3333333333%}.ontario-small-5{width:41.6666666667%}.ontario-small-6{width:50%}.ontario-small-7{width:58.3333333333%}.ontario-small-8{width:66.6666666667%}.ontario-small-9{width:75%}.ontario-small-10{width:83.3333333333%}.ontario-small-11{width:91.6666666667%}.ontario-small-12{width:100%}.ontario-small-offset-0{margin-left:0 !important}.ontario-small-offset-1{margin-left:8.3333333333% !important}.ontario-small-offset-2{margin-left:16.6666666667% !important}.ontario-small-offset-3{margin-left:25% !important}.ontario-small-offset-4{margin-left:33.3333333333% !important}.ontario-small-offset-5{margin-left:41.6666666667% !important}.ontario-small-offset-6{margin-left:50% !important}.ontario-small-offset-7{margin-left:58.3333333333% !important}.ontario-small-offset-8{margin-left:66.6666666667% !important}.ontario-small-offset-9{margin-left:75% !important}.ontario-small-offset-10{margin-left:83.3333333333% !important}.ontario-small-offset-11{margin-left:91.6666666667% !important}.ontario-small-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-small-centered,.ontario-columns.ontario-small-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-small-uncentered,.ontario-columns.ontario-small-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-small-centered:last-child,.ontario-columns.ontario-small-centered:last-child{float:none}.ontario-column.ontario-small-uncentered:last-child,.ontario-columns.ontario-small-uncentered:last-child{float:left}.ontario-column.ontario-small-uncentered.ontario-opposite,.ontario-columns.ontario-small-uncentered.ontario-opposite{float:right}.ontario-row.ontario-small-collapse>.ontario-column,.ontario-row.ontario-small-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-small-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-small-uncollapse>.ontario-column,.ontario-row.ontario-small-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:40.063em){.ontario-medium-push-0{position:relative;left:0;right:auto}.ontario-medium-pull-0{position:relative;right:0;left:auto}.ontario-medium-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-medium-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-medium-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-medium-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-medium-push-3{position:relative;left:25%;right:auto}.ontario-medium-pull-3{position:relative;right:25%;left:auto}.ontario-medium-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-medium-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-medium-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-medium-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-medium-push-6{position:relative;left:50%;right:auto}.ontario-medium-pull-6{position:relative;right:50%;left:auto}.ontario-medium-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-medium-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-medium-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-medium-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-medium-push-9{position:relative;left:75%;right:auto}.ontario-medium-pull-9{position:relative;right:75%;left:auto}.ontario-medium-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-medium-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-medium-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-medium-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-medium-1{width:8.3333333333%}.ontario-medium-2{width:16.6666666667%}.ontario-medium-3{width:25%}.ontario-medium-4{width:33.3333333333%}.ontario-medium-5{width:41.6666666667%}.ontario-medium-6{width:50%}.ontario-medium-7{width:58.3333333333%}.ontario-medium-8{width:66.6666666667%}.ontario-medium-9{width:75%}.ontario-medium-10{width:83.3333333333%}.ontario-medium-11{width:91.6666666667%}.ontario-medium-12{width:100%}.ontario-medium-offset-0{margin-left:0 !important}.ontario-medium-offset-1{margin-left:8.3333333333% !important}.ontario-medium-offset-2{margin-left:16.6666666667% !important}.ontario-medium-offset-3{margin-left:25% !important}.ontario-medium-offset-4{margin-left:33.3333333333% !important}.ontario-medium-offset-5{margin-left:41.6666666667% !important}.ontario-medium-offset-6{margin-left:50% !important}.ontario-medium-offset-7{margin-left:58.3333333333% !important}.ontario-medium-offset-8{margin-left:66.6666666667% !important}.ontario-medium-offset-9{margin-left:75% !important}.ontario-medium-offset-10{margin-left:83.3333333333% !important}.ontario-medium-offset-11{margin-left:91.6666666667% !important}.ontario-medium-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-medium-centered,.ontario-columns.ontario-medium-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-medium-uncentered,.ontario-columns.ontario-medium-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-medium-centered:last-child,.ontario-columns.ontario-medium-centered:last-child{float:none}.ontario-column.ontario-medium-uncentered:last-child,.ontario-columns.ontario-medium-uncentered:last-child{float:left}.ontario-column.ontario-medium-uncentered.ontario-opposite,.ontario-columns.ontario-medium-uncentered.ontario-opposite{float:right}.ontario-row.ontario-medium-collapse>.ontario-column,.ontario-row.ontario-medium-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-medium-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-medium-uncollapse>.ontario-column,.ontario-row.ontario-medium-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:73.063em){.ontario-large-push-0{position:relative;left:0;right:auto}.ontario-large-pull-0{position:relative;right:0;left:auto}.ontario-large-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-large-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-large-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-large-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-large-push-3{position:relative;left:25%;right:auto}.ontario-large-pull-3{position:relative;right:25%;left:auto}.ontario-large-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-large-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-large-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-large-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-large-push-6{position:relative;left:50%;right:auto}.ontario-large-pull-6{position:relative;right:50%;left:auto}.ontario-large-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-large-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-large-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-large-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-large-push-9{position:relative;left:75%;right:auto}.ontario-large-pull-9{position:relative;right:75%;left:auto}.ontario-large-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-large-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-large-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-large-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-large-1{width:8.3333333333%}.ontario-large-2{width:16.6666666667%}.ontario-large-3{width:25%}.ontario-large-4{width:33.3333333333%}.ontario-large-5{width:41.6666666667%}.ontario-large-6{width:50%}.ontario-large-7{width:58.3333333333%}.ontario-large-8{width:66.6666666667%}.ontario-large-9{width:75%}.ontario-large-10{width:83.3333333333%}.ontario-large-11{width:91.6666666667%}.ontario-large-12{width:100%}.ontario-large-offset-0{margin-left:0 !important}.ontario-large-offset-1{margin-left:8.3333333333% !important}.ontario-large-offset-2{margin-left:16.6666666667% !important}.ontario-large-offset-3{margin-left:25% !important}.ontario-large-offset-4{margin-left:33.3333333333% !important}.ontario-large-offset-5{margin-left:41.6666666667% !important}.ontario-large-offset-6{margin-left:50% !important}.ontario-large-offset-7{margin-left:58.3333333333% !important}.ontario-large-offset-8{margin-left:66.6666666667% !important}.ontario-large-offset-9{margin-left:75% !important}.ontario-large-offset-10{margin-left:83.3333333333% !important}.ontario-large-offset-11{margin-left:91.6666666667% !important}.ontario-large-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-large-centered,.ontario-columns.ontario-large-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-large-uncentered,.ontario-columns.ontario-large-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-large-centered:last-child,.ontario-columns.ontario-large-centered:last-child{float:none}.ontario-column.ontario-large-uncentered:last-child,.ontario-columns.ontario-large-uncentered:last-child{float:left}.ontario-column.ontario-large-uncentered.ontario-opposite,.ontario-columns.ontario-large-uncentered.ontario-opposite{float:right}.ontario-row.ontario-large-collapse>.ontario-column,.ontario-row.ontario-large-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-large-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-large-uncollapse>.ontario-column,.ontario-row.ontario-large-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-push-0{position:relative;left:0;right:auto}.ontario-pull-0{position:relative;right:0;left:auto}.ontario-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-push-3{position:relative;left:25%;right:auto}.ontario-pull-3{position:relative;right:25%;left:auto}.ontario-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-push-6{position:relative;left:50%;right:auto}.ontario-pull-6{position:relative;right:50%;left:auto}.ontario-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-push-9{position:relative;left:75%;right:auto}.ontario-pull-9{position:relative;right:75%;left:auto}.ontario-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-pull-11{position:relative;right:91.6666666667%;left:auto}}@media only screen and (min-width:96.063em){.ontario-xlarge-push-0{position:relative;left:0;right:auto}.ontario-xlarge-pull-0{position:relative;right:0;left:auto}.ontario-xlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xlarge-push-3{position:relative;left:25%;right:auto}.ontario-xlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xlarge-push-6{position:relative;left:50%;right:auto}.ontario-xlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xlarge-push-9{position:relative;left:75%;right:auto}.ontario-xlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-xlarge-1{width:8.3333333333%}.ontario-xlarge-2{width:16.6666666667%}.ontario-xlarge-3{width:25%}.ontario-xlarge-4{width:33.3333333333%}.ontario-xlarge-5{width:41.6666666667%}.ontario-xlarge-6{width:50%}.ontario-xlarge-7{width:58.3333333333%}.ontario-xlarge-8{width:66.6666666667%}.ontario-xlarge-9{width:75%}.ontario-xlarge-10{width:83.3333333333%}.ontario-xlarge-11{width:91.6666666667%}.ontario-xlarge-12{width:100%}.ontario-xlarge-offset-0{margin-left:0 !important}.ontario-xlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xlarge-offset-3{margin-left:25% !important}.ontario-xlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xlarge-offset-6{margin-left:50% !important}.ontario-xlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xlarge-offset-9{margin-left:75% !important}.ontario-xlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xlarge-centered,.ontario-columns.ontario-xlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xlarge-uncentered,.ontario-columns.ontario-xlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xlarge-centered:last-child,.ontario-columns.ontario-xlarge-centered:last-child{float:none}.ontario-column.ontario-xlarge-uncentered:last-child,.ontario-columns.ontario-xlarge-uncentered:last-child{float:left}.ontario-column.ontario-xlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xlarge-collapse>.ontario-column,.ontario-row.ontario-xlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xlarge-uncollapse>.ontario-column,.ontario-row.ontario-xlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:120.063em){.ontario-xxlarge-push-0{position:relative;left:0;right:auto}.ontario-xxlarge-pull-0{position:relative;right:0;left:auto}.ontario-xxlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xxlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xxlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xxlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xxlarge-push-3{position:relative;left:25%;right:auto}.ontario-xxlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xxlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xxlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xxlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xxlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xxlarge-push-6{position:relative;left:50%;right:auto}.ontario-xxlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xxlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xxlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xxlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xxlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xxlarge-push-9{position:relative;left:75%;right:auto}.ontario-xxlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xxlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xxlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xxlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xxlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-xxlarge-1{width:8.3333333333%}.ontario-xxlarge-2{width:16.6666666667%}.ontario-xxlarge-3{width:25%}.ontario-xxlarge-4{width:33.3333333333%}.ontario-xxlarge-5{width:41.6666666667%}.ontario-xxlarge-6{width:50%}.ontario-xxlarge-7{width:58.3333333333%}.ontario-xxlarge-8{width:66.6666666667%}.ontario-xxlarge-9{width:75%}.ontario-xxlarge-10{width:83.3333333333%}.ontario-xxlarge-11{width:91.6666666667%}.ontario-xxlarge-12{width:100%}.ontario-xxlarge-offset-0{margin-left:0 !important}.ontario-xxlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xxlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xxlarge-offset-3{margin-left:25% !important}.ontario-xxlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xxlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xxlarge-offset-6{margin-left:50% !important}.ontario-xxlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xxlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xxlarge-offset-9{margin-left:75% !important}.ontario-xxlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xxlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xxlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xxlarge-centered,.ontario-columns.ontario-xxlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xxlarge-uncentered,.ontario-columns.ontario-xxlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xxlarge-centered:last-child,.ontario-columns.ontario-xxlarge-centered:last-child{float:none}.ontario-column.ontario-xxlarge-uncentered:last-child,.ontario-columns.ontario-xxlarge-uncentered:last-child{float:left}.ontario-column.ontario-xxlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xxlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xxlarge-collapse>.ontario-column,.ontario-row.ontario-xxlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xxlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xxlarge-uncollapse>.ontario-column,.ontario-row.ontario-xxlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;width:100%;padding:0.625rem 1rem;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-application-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:#1a1a1a;color:#FFFFFF;height:3.125rem;position:relative;z-index:5}.ontario-application-header>.ontario-row{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ontario-application-header-container{position:relative;width:100%}.ontario-header-button.ontario-application-navigation--open:hover{background-color:#666666}.ontario-header-button.ontario-application-navigation--closed:active{background-color:#1a1a1a}.ontario-header-button--with-outline{border:2px solid #FFFFFF;margin:0 0 0 1rem;padding:0.375rem 1rem}.ontario-application-subheader .ontario-header-button,.ontario-application-navigation .ontario-header-button{background-color:#4d4d4d}.ontario-header-button--closed:focus{-webkit-box-shadow:none;box-shadow:none;outline:none;-webkit-transition:none;transition:none}.ontario-application-header__logo,.ontario-application-header__logo a,.ontario-application-header__lang-toggle,.ontario-application-subheader__container,.ontario-application-subheader__menu-container,.ontario-application-subheader__menu{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;outline:none}.ontario-application-header__logo a:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}.ontario-application-header__logo svg{width:100px;height:25px}.ontario-application-header__lang-toggle{-ms-flex-pack:end;justify-content:flex-end}.ontario-application-header__lang-toggle a{font-size:1rem;line-height:1.375rem;height:auto;outline:none;padding:0.5rem 0.75rem}.ontario-application-subheader{padding:1.25rem 0;background-color:#404040;overflow:visible;position:relative;z-index:5}@media screen and (min-width: 73em){.ontario-application-subheader{z-index:0}}.ontario-application-subheader>.ontario-row{position:relative}.ontario-application-header-container{position:relative;z-index:5}.ontario-application-header>.ontario-row{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ontario-application-subheader .ontario-header-button{visibility:visible}.ontario-application-subheader .ontario-header-button,.ontario-application-navigation .ontario-header-button{background-color:#4d4d4d}.ontario-application-subheader .ontario-header-button:hover,.ontario-application-navigation .ontario-header-button:hover{background-color:#666666}.ontario-application-subheader .ontario-header-button:active,.ontario-application-navigation .ontario-header-button:active{background-color:#1a1a1a}.ontario-header-button--without-outline:hover{background-color:#4d4d4d}.ontario-header-button--without-outline:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}.ontario-application-subheader__heading{padding:0.375rem 0;margin-bottom:0;max-width:65%}.ontario-application-subheader__heading a{color:#FFFFFF;font-weight:600;text-decoration:none}.ontario-application-subheader__heading a:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}.ontario-application-subheader__heading a:hover,.ontario-application-subheader__heading a:active,.ontario-application-subheader__heading a:visited{color:#FFFFFF;text-decoration:underline}.ontario-application-subheader .ontario-header-button{visibility:visible;background-color:#4d4d4d}.ontario-application-subheader .ontario-header-button:hover{background-color:#666666}.ontario-application-subheader .ontario-header-button:active{background-color:#1a1a1a}.ontario-header__menu-toggler span{display:-ms-flexbox;display:flex}@media screen and (max-width: 20em){.ontario-header__menu-toggler span:last-of-type{display:none}}.ontario-header__menu-toggler svg{margin-right:6px}@media screen and (max-width: 20em){.ontario-header__menu-toggler svg{margin-right:0}}.ontario-application-subheader__container{-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.ontario-application-subheader__menu{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;list-style:none;margin:0;padding-left:0}.ontario-application-subheader__menu li{border-radius:4px;padding:0;margin:0 0 0 0.75rem;text-align:center}.ontario-application-subheader__menu-container a{-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:4px;color:#FFFFFF;display:inline-block;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.125rem;font-weight:600;height:48px;line-height:1.4375rem;outline:none;padding:0.75rem;text-align:left;text-decoration:none;white-space:nowrap}.ontario-application-subheader__menu-container a.ontario-link--active{border-radius:4px 4px 0 0;border-bottom:4px solid #FFFFFF}.ontario-application-subheader__menu-container a:hover{background-color:#666666;color:#FFFFFF}.ontario-application-subheader__menu-container a:active{background-color:#1a1a1a}.ontario-application-subheader__menu-container a:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}.ontario-application-navigation{position:absolute;width:100%}@media screen and (min-width: 73em){.ontario-application-navigation{position:relative;max-width:72rem;width:auto;margin:0 auto}}.ontario-application-navigation .ontario-header-button{visibility:hidden;position:absolute;top:-4.25rem;right:1rem;z-index:6}.ontario-application-navigation__container{background:#FFFFFF;position:absolute;top:0;width:100%;z-index:4}@media screen and (min-width: 40em){.ontario-application-navigation__container{background:#FFFFFF;position:absolute;z-index:4}}@media screen and (min-width: 73em){.ontario-application-navigation__container{-webkit-box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);border-radius:4px;position:absolute;right:0.75rem;top:-0.6rem;min-width:290px;max-width:30%;z-index:3;-webkit-transition:none !important;transition:none !important}}.ontario-application-navigation ul{list-style:none;padding:0.5rem 0;margin:0;border-bottom:1px solid #cccccc}@media screen and (min-width: 73em){.ontario-application-navigation ul{border-bottom:none}}.ontario-application-navigation li{border-top:1px solid #cccccc;padding:0;margin-bottom:0}.ontario-application-navigation li:last-of-type{border-bottom:1px solid #cccccc}.ontario-application-navigation a{color:#1a1a1a;display:block;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;text-decoration:none;padding:0.6730769231rem 1.5rem}.ontario-application-navigation a:hover{text-decoration:underline;background-color:#e5e5e5}.ontario-application-navigation a:active{text-decoration:underline;background-color:#cccccc}.ontario-application-navigation a:focus,.ontario-application-navigation a:active{-webkit-box-shadow:0 0 0 4px #009ADB inset;box-shadow:0 0 0 4px #009ADB inset}.ontario-application-navigation a.ontario-link--active{border-left:6px solid #1a1a1a;background-color:#f2f2f2}.ontario-navigation--open{visibility:visible;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform 0.4s ease-in-out;transition:-webkit-transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out}@media screen and (min-width: 73em){.ontario-navigation--open{z-index:5}}.ontario-navigation--closed{background:#FFFFFF;position:absolute;-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:transform 0.3s ease-in-out, visibility 0.1s ease;transition:transform 0.3s ease-in-out, visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;width:100%;visibility:hidden;z-index:4}.ontario-application-navigation.ontario-navigation--open .ontario-application-navigation__container{visibility:visible;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform 0.4s ease-in-out;transition:-webkit-transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out}@media screen and (min-width: 73em){.ontario-application-navigation.ontario-navigation--open .ontario-application-navigation__container{-webkit-transition:none;transition:none;display:block}}.ontario-overlay{position:fixed;top:0;left:0;background:rgba(0, 0, 0, 0.6);width:100%;height:100%;z-index:2}.ontario-header-button.ontario-navigation--open:hover{background-color:#666666}.ontario-header-button.ontario-navigation--open:active{background-color:#1a1a1a}.ontario-header-button.ontario-navigation--closed:active{background-color:#1a1a1a}.ontario-header-button{background-color:#1a1a1a;border:none;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;color:#FFFFFF;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;height:48px;line-height:1.5555555556;text-align:center;text-decoration:none}.ontario-header-button:hover,.ontario-header-button:focus,.ontario-header-button:visited{color:#FFFFFF}.ontario-header-button--with-outline,.ontario-header-button--without-outline{background-color:#1a1a1a;color:#FFFFFF}.ontario-header-button--with-outline:hover,.ontario-header-button--without-outline:hover{background-color:#4d4d4d}.ontario-header-button--with-outline:active,.ontario-header-button--without-outline:active{background-color:#666666}.ontario-header-button--with-outline:focus,.ontario-header-button--without-outline:focus{background-color:#4d4d4d}.ontario-header-button--with-outline{border:2px solid #FFFFFF;margin:0 0 0 1rem;padding:0.375rem 1rem}.ontario-header-button--with-outline:hover{border:2px solid #FFFFFF;color:#FFFFFF}.ontario-header-button--with-outline:focus{background-color:#4d4d4d}@media screen and (max-width: 20em){.ontario-header-button--with-outline{padding:0.375rem}}.ontario-header__menu-toggler{padding:0.375rem 1rem}@media screen and (max-width: 20em){.ontario-header__menu-toggler{padding-left:0.5rem;padding-right:0.5rem}}.ontario-header__menu-toggler span{display:-ms-flexbox;display:flex}@media screen and (max-width: 20em){.ontario-header__menu-toggler span{display:none}}.ontario-header__menu-toggler svg{margin-right:6px}@media screen and (max-width: 20em){.ontario-header__menu-toggler svg{margin-right:0}}.ontario-application-navigation__container{background:#FFFFFF;position:absolute;-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:transform 0.3s ease-in-out, visibility 0.1s ease;transition:transform 0.3s ease-in-out, visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;width:100%;visibility:hidden;z-index:4}@media screen and (min-width: 73em){.ontario-application-navigation__container{-webkit-box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);border-radius:4px;display:none;position:absolute;right:1rem;top:calc(100% - 0.5rem);min-width:290px;max-width:30%;z-index:5}}.ontario-application-navigation.ontario-navigation--open .ontario-application-navigation__container{background:#FFFFFF;visibility:visible;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform 0.4s ease-in-out;transition:-webkit-transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out}@media screen and (min-width: 73em){.ontario-application-navigation.ontario-navigation--open .ontario-application-navigation__container{-webkit-transition:none;transition:none;display:block}}.ontario-application-navigation.ontario-navigation--open{background:#FFFFFF;z-index:4}.ontario-application-navigation ul{list-style:none;padding:0.5rem 0;margin:0;border-bottom:1px solid #cccccc}@media screen and (min-width: 73em){.ontario-application-navigation ul{border-bottom:none}}.ontario-application-navigation li{border-top:1px solid #cccccc;padding:0;margin-bottom:0}.ontario-application-navigation li:last-of-type{border-bottom:1px solid #cccccc}.ontario-application-navigation a{color:#1a1a1a;display:block;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;text-decoration:none;padding:0.6730769231rem 1.5rem}.ontario-application-navigation a:hover{text-decoration:underline;background-color:#e5e5e5}.ontario-application-navigation a:active{text-decoration:underline;background-color:#cccccc}.ontario-application-navigation a:focus,.ontario-application-navigation a:active{-webkit-box-shadow:0 0 0 4px #009ADB inset;box-shadow:0 0 0 4px #009ADB inset}.ontario-application-navigation a.ontario-link--active{border-left:6px solid #1a1a1a;background-color:#f2f2f2}.ontario-overlay{position:fixed;top:0;left:0;background:rgba(0, 0, 0, 0.6);width:100%;height:100%;z-index:2}.ontario-header__icon-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}';

const ontarioHeaderCss =
	'.ontario-navigation a:focus,.ontario-navigation a:active,.ontario-header-button:focus,.ontario-input:focus,.ontario-input:active{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-row{margin:0 auto;max-width:72rem;width:100%}.ontario-row:before,.ontario-row:after{content:"";display:table}.ontario-row:after{clear:both}.ontario-row.ontario-row--collapse>.ontario-column,.ontario-row.ontario-row--collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-row--collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row .ontario-row{margin:0 -1rem;max-width:none;width:auto}.ontario-row .ontario-row:before,.ontario-row .ontario-row:after{content:"";display:table}.ontario-row .ontario-row:after{clear:both}.ontario-row .ontario-row.ontario-row--collapse{margin:0;max-width:none;width:auto}.ontario-row .ontario-row.ontario-row--collapse:before,.ontario-row .ontario-row.ontario-row--collapse:after{content:"";display:table}.ontario-row .ontario-row.ontario-row--collapse:after{clear:both}.ontario-column,.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;float:left}.ontario-column+.ontario-column:last-child,.ontario-column+.ontario-columns:last-child,.ontario-columns+.ontario-column:last-child,.ontario-columns+.ontario-columns:last-child{float:right}.ontario-column+.ontario-column.ontario-end,.ontario-column+.ontario-columns.ontario-end,.ontario-columns+.ontario-column.ontario-end,.ontario-columns+.ontario-columns.ontario-end{float:left}@media only screen{.ontario-small-push-0{position:relative;left:0;right:auto}.ontario-small-pull-0{position:relative;right:0;left:auto}.ontario-small-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-small-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-small-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-small-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-small-push-3{position:relative;left:25%;right:auto}.ontario-small-pull-3{position:relative;right:25%;left:auto}.ontario-small-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-small-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-small-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-small-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-small-push-6{position:relative;left:50%;right:auto}.ontario-small-pull-6{position:relative;right:50%;left:auto}.ontario-small-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-small-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-small-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-small-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-small-push-9{position:relative;left:75%;right:auto}.ontario-small-pull-9{position:relative;right:75%;left:auto}.ontario-small-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-small-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-small-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-small-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-small-1{width:8.3333333333%}.ontario-small-2{width:16.6666666667%}.ontario-small-3{width:25%}.ontario-small-4{width:33.3333333333%}.ontario-small-5{width:41.6666666667%}.ontario-small-6{width:50%}.ontario-small-7{width:58.3333333333%}.ontario-small-8{width:66.6666666667%}.ontario-small-9{width:75%}.ontario-small-10{width:83.3333333333%}.ontario-small-11{width:91.6666666667%}.ontario-small-12{width:100%}.ontario-small-offset-0{margin-left:0 !important}.ontario-small-offset-1{margin-left:8.3333333333% !important}.ontario-small-offset-2{margin-left:16.6666666667% !important}.ontario-small-offset-3{margin-left:25% !important}.ontario-small-offset-4{margin-left:33.3333333333% !important}.ontario-small-offset-5{margin-left:41.6666666667% !important}.ontario-small-offset-6{margin-left:50% !important}.ontario-small-offset-7{margin-left:58.3333333333% !important}.ontario-small-offset-8{margin-left:66.6666666667% !important}.ontario-small-offset-9{margin-left:75% !important}.ontario-small-offset-10{margin-left:83.3333333333% !important}.ontario-small-offset-11{margin-left:91.6666666667% !important}.ontario-small-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-small-centered,.ontario-columns.ontario-small-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-small-uncentered,.ontario-columns.ontario-small-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-small-centered:last-child,.ontario-columns.ontario-small-centered:last-child{float:none}.ontario-column.ontario-small-uncentered:last-child,.ontario-columns.ontario-small-uncentered:last-child{float:left}.ontario-column.ontario-small-uncentered.ontario-opposite,.ontario-columns.ontario-small-uncentered.ontario-opposite{float:right}.ontario-row.ontario-small-collapse>.ontario-column,.ontario-row.ontario-small-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-small-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-small-uncollapse>.ontario-column,.ontario-row.ontario-small-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:40.063em){.ontario-medium-push-0{position:relative;left:0;right:auto}.ontario-medium-pull-0{position:relative;right:0;left:auto}.ontario-medium-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-medium-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-medium-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-medium-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-medium-push-3{position:relative;left:25%;right:auto}.ontario-medium-pull-3{position:relative;right:25%;left:auto}.ontario-medium-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-medium-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-medium-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-medium-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-medium-push-6{position:relative;left:50%;right:auto}.ontario-medium-pull-6{position:relative;right:50%;left:auto}.ontario-medium-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-medium-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-medium-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-medium-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-medium-push-9{position:relative;left:75%;right:auto}.ontario-medium-pull-9{position:relative;right:75%;left:auto}.ontario-medium-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-medium-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-medium-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-medium-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-medium-1{width:8.3333333333%}.ontario-medium-2{width:16.6666666667%}.ontario-medium-3{width:25%}.ontario-medium-4{width:33.3333333333%}.ontario-medium-5{width:41.6666666667%}.ontario-medium-6{width:50%}.ontario-medium-7{width:58.3333333333%}.ontario-medium-8{width:66.6666666667%}.ontario-medium-9{width:75%}.ontario-medium-10{width:83.3333333333%}.ontario-medium-11{width:91.6666666667%}.ontario-medium-12{width:100%}.ontario-medium-offset-0{margin-left:0 !important}.ontario-medium-offset-1{margin-left:8.3333333333% !important}.ontario-medium-offset-2{margin-left:16.6666666667% !important}.ontario-medium-offset-3{margin-left:25% !important}.ontario-medium-offset-4{margin-left:33.3333333333% !important}.ontario-medium-offset-5{margin-left:41.6666666667% !important}.ontario-medium-offset-6{margin-left:50% !important}.ontario-medium-offset-7{margin-left:58.3333333333% !important}.ontario-medium-offset-8{margin-left:66.6666666667% !important}.ontario-medium-offset-9{margin-left:75% !important}.ontario-medium-offset-10{margin-left:83.3333333333% !important}.ontario-medium-offset-11{margin-left:91.6666666667% !important}.ontario-medium-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-medium-centered,.ontario-columns.ontario-medium-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-medium-uncentered,.ontario-columns.ontario-medium-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-medium-centered:last-child,.ontario-columns.ontario-medium-centered:last-child{float:none}.ontario-column.ontario-medium-uncentered:last-child,.ontario-columns.ontario-medium-uncentered:last-child{float:left}.ontario-column.ontario-medium-uncentered.ontario-opposite,.ontario-columns.ontario-medium-uncentered.ontario-opposite{float:right}.ontario-row.ontario-medium-collapse>.ontario-column,.ontario-row.ontario-medium-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-medium-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-medium-uncollapse>.ontario-column,.ontario-row.ontario-medium-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:73.063em){.ontario-large-push-0{position:relative;left:0;right:auto}.ontario-large-pull-0{position:relative;right:0;left:auto}.ontario-large-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-large-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-large-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-large-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-large-push-3{position:relative;left:25%;right:auto}.ontario-large-pull-3{position:relative;right:25%;left:auto}.ontario-large-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-large-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-large-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-large-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-large-push-6{position:relative;left:50%;right:auto}.ontario-large-pull-6{position:relative;right:50%;left:auto}.ontario-large-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-large-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-large-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-large-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-large-push-9{position:relative;left:75%;right:auto}.ontario-large-pull-9{position:relative;right:75%;left:auto}.ontario-large-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-large-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-large-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-large-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-large-1{width:8.3333333333%}.ontario-large-2{width:16.6666666667%}.ontario-large-3{width:25%}.ontario-large-4{width:33.3333333333%}.ontario-large-5{width:41.6666666667%}.ontario-large-6{width:50%}.ontario-large-7{width:58.3333333333%}.ontario-large-8{width:66.6666666667%}.ontario-large-9{width:75%}.ontario-large-10{width:83.3333333333%}.ontario-large-11{width:91.6666666667%}.ontario-large-12{width:100%}.ontario-large-offset-0{margin-left:0 !important}.ontario-large-offset-1{margin-left:8.3333333333% !important}.ontario-large-offset-2{margin-left:16.6666666667% !important}.ontario-large-offset-3{margin-left:25% !important}.ontario-large-offset-4{margin-left:33.3333333333% !important}.ontario-large-offset-5{margin-left:41.6666666667% !important}.ontario-large-offset-6{margin-left:50% !important}.ontario-large-offset-7{margin-left:58.3333333333% !important}.ontario-large-offset-8{margin-left:66.6666666667% !important}.ontario-large-offset-9{margin-left:75% !important}.ontario-large-offset-10{margin-left:83.3333333333% !important}.ontario-large-offset-11{margin-left:91.6666666667% !important}.ontario-large-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-large-centered,.ontario-columns.ontario-large-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-large-uncentered,.ontario-columns.ontario-large-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-large-centered:last-child,.ontario-columns.ontario-large-centered:last-child{float:none}.ontario-column.ontario-large-uncentered:last-child,.ontario-columns.ontario-large-uncentered:last-child{float:left}.ontario-column.ontario-large-uncentered.ontario-opposite,.ontario-columns.ontario-large-uncentered.ontario-opposite{float:right}.ontario-row.ontario-large-collapse>.ontario-column,.ontario-row.ontario-large-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-large-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-large-uncollapse>.ontario-column,.ontario-row.ontario-large-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-push-0{position:relative;left:0;right:auto}.ontario-pull-0{position:relative;right:0;left:auto}.ontario-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-push-3{position:relative;left:25%;right:auto}.ontario-pull-3{position:relative;right:25%;left:auto}.ontario-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-push-6{position:relative;left:50%;right:auto}.ontario-pull-6{position:relative;right:50%;left:auto}.ontario-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-push-9{position:relative;left:75%;right:auto}.ontario-pull-9{position:relative;right:75%;left:auto}.ontario-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-pull-11{position:relative;right:91.6666666667%;left:auto}}@media only screen and (min-width:96.063em){.ontario-xlarge-push-0{position:relative;left:0;right:auto}.ontario-xlarge-pull-0{position:relative;right:0;left:auto}.ontario-xlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xlarge-push-3{position:relative;left:25%;right:auto}.ontario-xlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xlarge-push-6{position:relative;left:50%;right:auto}.ontario-xlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xlarge-push-9{position:relative;left:75%;right:auto}.ontario-xlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-xlarge-1{width:8.3333333333%}.ontario-xlarge-2{width:16.6666666667%}.ontario-xlarge-3{width:25%}.ontario-xlarge-4{width:33.3333333333%}.ontario-xlarge-5{width:41.6666666667%}.ontario-xlarge-6{width:50%}.ontario-xlarge-7{width:58.3333333333%}.ontario-xlarge-8{width:66.6666666667%}.ontario-xlarge-9{width:75%}.ontario-xlarge-10{width:83.3333333333%}.ontario-xlarge-11{width:91.6666666667%}.ontario-xlarge-12{width:100%}.ontario-xlarge-offset-0{margin-left:0 !important}.ontario-xlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xlarge-offset-3{margin-left:25% !important}.ontario-xlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xlarge-offset-6{margin-left:50% !important}.ontario-xlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xlarge-offset-9{margin-left:75% !important}.ontario-xlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xlarge-centered,.ontario-columns.ontario-xlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xlarge-uncentered,.ontario-columns.ontario-xlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xlarge-centered:last-child,.ontario-columns.ontario-xlarge-centered:last-child{float:none}.ontario-column.ontario-xlarge-uncentered:last-child,.ontario-columns.ontario-xlarge-uncentered:last-child{float:left}.ontario-column.ontario-xlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xlarge-collapse>.ontario-column,.ontario-row.ontario-xlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xlarge-uncollapse>.ontario-column,.ontario-row.ontario-xlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}@media only screen and (min-width:120.063em){.ontario-xxlarge-push-0{position:relative;left:0;right:auto}.ontario-xxlarge-pull-0{position:relative;right:0;left:auto}.ontario-xxlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xxlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xxlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xxlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xxlarge-push-3{position:relative;left:25%;right:auto}.ontario-xxlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xxlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xxlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xxlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xxlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xxlarge-push-6{position:relative;left:50%;right:auto}.ontario-xxlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xxlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xxlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xxlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xxlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xxlarge-push-9{position:relative;left:75%;right:auto}.ontario-xxlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xxlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xxlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xxlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xxlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.ontario-xxlarge-1{width:8.3333333333%}.ontario-xxlarge-2{width:16.6666666667%}.ontario-xxlarge-3{width:25%}.ontario-xxlarge-4{width:33.3333333333%}.ontario-xxlarge-5{width:41.6666666667%}.ontario-xxlarge-6{width:50%}.ontario-xxlarge-7{width:58.3333333333%}.ontario-xxlarge-8{width:66.6666666667%}.ontario-xxlarge-9{width:75%}.ontario-xxlarge-10{width:83.3333333333%}.ontario-xxlarge-11{width:91.6666666667%}.ontario-xxlarge-12{width:100%}.ontario-xxlarge-offset-0{margin-left:0 !important}.ontario-xxlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xxlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xxlarge-offset-3{margin-left:25% !important}.ontario-xxlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xxlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xxlarge-offset-6{margin-left:50% !important}.ontario-xxlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xxlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xxlarge-offset-9{margin-left:75% !important}.ontario-xxlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xxlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xxlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xxlarge-centered,.ontario-columns.ontario-xxlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xxlarge-uncentered,.ontario-columns.ontario-xxlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xxlarge-centered:last-child,.ontario-columns.ontario-xxlarge-centered:last-child{float:none}.ontario-column.ontario-xxlarge-uncentered:last-child,.ontario-columns.ontario-xxlarge-uncentered:last-child{float:left}.ontario-column.ontario-xxlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xxlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xxlarge-collapse>.ontario-column,.ontario-row.ontario-xxlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xxlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xxlarge-uncollapse>.ontario-column,.ontario-row.ontario-xxlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;width:100%;padding:0.625rem 1rem;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-header__container{position:relative;z-index:5}@media screen and (min-width: 73em){.ontario-header__container{z-index:1}}.ontario-icon-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ontario-icon-container-reset{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ontario-icon-container-reset svg{fill:#1a1a1a}.ontario-subheader__menu a{border-radius:4px;color:#FFFFFF;display:inline;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.125rem;font-weight:600;height:48px;line-height:1.4375rem;padding:0.75rem 1rem;text-decoration:none;white-space:nowrap}.ontario-subheader__menu a.ontario-link--active{border-radius:4px 4px 0 0;border-bottom:4px solid #FFFFFF}.ontario-subheader__menu a:hover{background-color:#666666;color:#FFFFFF}.ontario-subheader__menu a:active{background-color:#1a1a1a}.ontario-subheader__menu a:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}.ontario-navigation{position:absolute;width:100%}@media screen and (min-width: 73em){.ontario-navigation{position:relative;max-width:72rem;width:auto;margin:0 auto}}.nav-ul-closed{background:white;position:absolute;-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:transform 0.3s ease-in-out, visibility 0.1s ease;transition:transform 0.3s ease-in-out, visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;width:100%;visibility:hidden;z-index:4}.nav-ul-opened{visibility:visible;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform 0.4s ease-in-out;transition:-webkit-transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out}@media screen and (min-width: 73em){.nav-ul-opened{z-index:5}}.ontario-navigation ul{list-style:none;padding:0.5rem 0;margin:0;border-bottom:1px solid #cccccc}@media screen and (min-width: 73em){.ontario-navigation ul{border-bottom:none}}.ontario-navigation li{border-top:1px solid #cccccc;padding:0;margin-bottom:0}.ontario-navigation li:last-of-type{border-bottom:1px solid #cccccc}.ontario-navigation a{color:#1a1a1a;display:block;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;text-decoration:none;padding:0.6730769231rem 1.5rem}.ontario-navigation a:hover{text-decoration:underline;background-color:#e6e6e6}.ontario-navigation a:active{text-decoration:underline;background-color:#cccccc}.ontario-navigation a:focus,.ontario-navigation a:active{-webkit-box-shadow:0 0 0 4px #009ADB inset;box-shadow:0 0 0 4px #009ADB inset}.ontario-navigation a.ontario-link--active{border-left:6px solid #1a1a1a;background-color:#f2f2f2}.ontario-overlay{position:fixed;top:0;left:0;background:rgba(0, 0, 0, 0.6);width:100%;height:100%;z-index:2}.ontario-header{position:relative;overflow:hidden;z-index:5;background-color:#1a1a1a;color:#FFFFFF;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:5.75rem}.ontario-header .ontario-row{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}.ontario-header svg{width:2rem;height:2rem;margin-bottom:0}.ontario-header__logo-container a{display:-ms-inline-flexbox;display:inline-flex;height:100%;outline:none}.ontario-header__logo-container a:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB}.ontario-header__logo-container a img{width:45px;height:46px}@media screen and (min-width: 40em){.ontario-header__logo-container a img{width:180px;height:46px}}.ontario-navigation__container.ontario-navigation--open{visibility:visible;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform 0.4s ease-in-out;transition:-webkit-transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out}@media screen and (min-width: 73em){.ontario-navigation__container.ontario-navigation--open{z-index:5}}.ontario-navigation__container.ontario-navigation--closed{background:#FFFFFF;position:absolute;-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:transform 0.3s ease-in-out, visibility 0.1s ease;transition:transform 0.3s ease-in-out, visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;width:100%;visibility:hidden;z-index:4}.ontario-header-button.ontario-navigation--open:hover{background-color:#666666}.ontario-header-button.ontario-navigation--open:active{background-color:#1a1a1a}.ontario-header-button.ontario-navigation--closed:active{background-color:#1a1a1a}.ontario-header__logo-container{height:46px}.ontario-header__logo-container svg{width:45px;height:46px}@media screen and (min-width: 40em){.ontario-header__logo-container svg{width:180px;height:46px}}.ontario-header__logo-container a{display:inline-block;height:100%}.ontario-header__logo-container a:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB}.ontario-header__search-container{position:relative;display:none}@media screen and (min-width: 73em){.ontario-header__search-container{display:-ms-flexbox;display:flex}}@media screen and (min-width: 40em){.ontario-header__search-container{padding-right:1rem}}.ontario-input.ontario-header__search-input{border-width:0;margin-bottom:0;height:48px;padding-left:0.75rem;padding-right:7.2rem}.ontario-input.ontario-header__search-input:invalid+input[type=reset]{display:none}.ontario-input.ontario-header__search-input:focus~.ontario-header__search-submit{background-color:#0066CC;color:#FFFFFF}.ontario-input.ontario-header__search-input:focus~.ontario-header__search-submit svg{fill:#FFFFFF}.ontario-input.ontario-header__search-input:focus~.ontario-header__search-submit:hover{background-color:#00478F;color:#FFFFFF}.ontario-input.ontario-header__search-input::-ms-clear{display:none;width:0;height:0}.ontario-input.ontario-header__search-input:invalid:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;-moz-box-shadow:none}.ontario-input.ontario-header__search-input:invalid:not(:focus){-webkit-box-shadow:none;box-shadow:none;-moz-box-shadow:none}@media screen and (min-width: 40em) and (max-width: 73em){.ontario-input.ontario-header__search-input{padding-left:1rem;padding-right:6.4rem}}.ontario-header__search-submit{border:0;border-radius:0 3px 3px 0;background-color:#f2f2f2;color:#1a1a1a;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:600;font-size:1.125rem;height:100%;line-height:1.56;position:absolute;right:1rem;top:0;cursor:pointer;padding-left:0.75rem;padding-right:0.75rem}.ontario-header__search-submit svg{fill:#1a1a1a}.ontario-header__search-submit:hover{background-color:#00478F;color:#FFFFFF}.ontario-header__search-submit:hover svg{fill:#FFFFFF}.ontario-header__search-submit:focus{outline:none;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;background-color:#00478F;color:#FFFFFF}.ontario-header__search-submit:focus svg{fill:#FFFFFF}.ontario-header__search-submit:active{background-color:#002142;color:#FFFFFF}.ontario-header__search-submit:active svg{fill:#FFFFFF}.ontario-header__search-submit svg{margin-right:0}input[type=reset].ontario-header__search-reset{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;top:11px;right:80px;height:28px;width:28px;color:#1a1a1a;margin:0;padding:0.5rem;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTE5IDYuNEwxNy42IDUgMTIgMTAuNiA2LjQgNSA1IDYuNGw1LjYgNS42TDUgMTcuNiA2LjQgMTlsNS42LTUuNiA1LjYgNS42IDEuNC0xLjQtNS42LTUuNkwxOSA2LjR6IiBmaWxsPSIjMDAwIi8+PC9zdmc+);background-position:center center;background-repeat:no-repeat;background-color:transparent;outline:none;border:none;cursor:pointer}input[type=reset].ontario-header__search-reset:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB}.ontario-header__nav-right-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}.ontario-header-button{background-color:#1a1a1a;border:none;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;color:#FFFFFF;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;height:48px;line-height:1.5555555556;text-align:center;text-decoration:none}.ontario-header-button:hover,.ontario-header-button:focus,.ontario-header-button:visited{color:#FFFFFF}.ontario-header-button--with-outline,.ontario-header-button--without-outline{background-color:#1a1a1a;color:#FFFFFF}.ontario-header-button--with-outline:hover,.ontario-header-button--without-outline:hover{background-color:#4d4d4d}.ontario-header-button--with-outline:active,.ontario-header-button--without-outline:active{background-color:#666666}.ontario-header-button--with-outline:focus,.ontario-header-button--without-outline:focus{background-color:#4d4d4d}.ontario-header-button--with-outline:active,.ontario-header-button--without-outline:active{background-color:#666666}.ontario-header-button--with-outline{border:2px solid #FFFFFF;margin:0 0 0 1rem;padding:0.375rem 1rem}.ontario-header-button--with-outline:hover{border:2px solid #FFFFFF;color:#FFFFFF}.ontario-header-button--with-outline:focus{background-color:#4d4d4d}@media screen and (max-width: 20em){.ontario-header-button--with-outline{padding:0.375rem}}.ontario-header-button--without-outline:focus{background-color:#4d4d4d}.ontario-header__menu-toggler{padding:0.375rem 1rem}@media screen and (max-width: 20em){.ontario-header__menu-toggler{padding-left:0.5rem;padding-right:0.5rem}}.ontario-header__menu-toggler span{display:-ms-flexbox;display:flex}@media screen and (max-width: 20em){.ontario-header__menu-toggler span{display:none}}.ontario-header__menu-toggler svg{margin-right:6px}@media screen and (max-width: 20em){.ontario-header__menu-toggler svg{margin-right:0}}.ontario-header__language-toggler{padding:0.75rem}.ontario-header__language-toggler abbr[title]{text-decoration:none}.ontario-header__search-toggler{padding:0.5rem 0.75rem;margin-left:1rem}@media screen and (min-width: 40em){.ontario-header__search-toggler svg{margin-right:0.25rem}}.ontario-header__search-close{-ms-flex-direction:column-reverse;flex-direction:column-reverse;font-weight:400;margin-right:1rem;padding:0.15rem 0.25rem;position:relative;height:60px;display:none}.ontario-header__search-close span{position:relative;top:-3px;font-size:1rem;margin-left:0}.ontario-header__search-close span:last-of-type{top:0;height:1.875rem}@media screen and (min-width: 39.9375em){.ontario-header__search-close span{margin-right:0.25rem}}.ontario-header__search-close span:hover,.ontario-header__search-close span:focus{outline:none;text-decoration:none}.ontario-header__search-close svg{top:0}@media screen and (min-width: 40em){.ontario-header__search-close{-ms-flex-direction:row;flex-direction:row;padding:0.25rem 0.5rem 0.25rem 1rem;height:48px}.ontario-header__search-close span{top:0}.ontario-header__search-close svg{position:relative;width:2.5rem;height:2.5rem}}@media screen and (min-width: 73em){.ontario-header--search-open .ontario-header__search-close{display:none}}.ontario-header__search-close-container{display:none;-ms-flex-pack:end;justify-content:flex-end;padding-right:0}@media screen and (max-width: 40em){.ontario-header__search-close-container{width:auto;padding-left:0;padding-right:0}}@media screen and (max-width: 73em){.ontario-header--search-open .ontario-header__logo-container,.ontario-header--search-open .ontario-header__nav-right-container{display:none}.ontario-header--search-open .ontario-header__search-close-container,.ontario-header--search-open .ontario-header__search-container,.ontario-header--search-open .ontario-header__search-close{display:-ms-flexbox;display:flex}}.ontario-navigation{position:absolute;width:100%}@media screen and (min-width: 73em){.ontario-navigation{position:relative;max-width:72rem;width:auto;margin:0 auto}}.ontario-navigation__container{background:#FFFFFF;position:absolute;-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;transition:transform 0.3s ease-in-out, visibility 0.1s ease;transition:transform 0.3s ease-in-out, visibility 0.1s ease, -webkit-transform 0.3s ease-in-out;width:100%;visibility:hidden;z-index:4}@media screen and (min-width: 73em){.ontario-navigation__container{-webkit-box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);border-radius:4px;display:none;position:absolute;right:1rem;top:calc(100% - 0.5rem);min-width:290px;max-width:30%;z-index:5}}.ontario-navigation ul{list-style:none;padding:0.5rem 0;margin:0;border-bottom:1px solid #cccccc}@media screen and (min-width: 73em){.ontario-navigation ul{border-bottom:none}}.ontario-header-navigation__menu-item{border-top:1px solid #cccccc;padding:0;margin-bottom:0}.ontario-header-navigation__menu-item:last-of-type{border-bottom:1px solid #cccccc}.ontario-navigation a{color:#1a1a1a;display:block;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;text-decoration:none;padding:0.6730769231rem 1.5rem}.ontario-navigation a:hover{text-decoration:underline;background-color:#e6e6e6}.ontario-navigation a:active{text-decoration:underline;background-color:#cccccc}.ontario-navigation a:focus,.ontario-navigation a:active{-webkit-box-shadow:0 0 0 4px #009ADB inset;box-shadow:0 0 0 4px #009ADB inset}.ontario-navigation a.ontario-link--active{border-left:6px solid #1a1a1a;background-color:#f2f2f2}.ontario-navigation.ontario-navigation--open .ontario-navigation__container{visibility:visible;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform 0.4s ease-in-out;transition:-webkit-transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out}@media screen and (min-width: 73em){.ontario-navigation.ontario-navigation--open .ontario-navigation__container{-webkit-transition:none;transition:none;display:block}}.ontario-overlay{position:fixed;top:0;left:0;background:rgba(0, 0, 0, 0.6);width:100%;height:100%;z-index:2}.ontario-header__icon-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}';

const OntarioHeader = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		/**
		 * Logic to handle the menu toggling
		 */
		this.handleMenuToggle = () => {
			this.menuToggle = !this.menuToggle;
			this.searchToggle = undefined;
		};
		/**
		 * Logic to handle the search toggling
		 */
		this.handleSearchToggle = () => {
			this.searchToggle = !this.searchToggle;
		};
		/**
		 * event.preventDefault(): https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
		 * location.href: https://developer.mozilla.org/en-US/docs/Web/API/Location/href
		 */
		this.handleSubmit = (event) => {
			event.preventDefault();
			location.href = `https://www.ontario.ca/search/search-results?query=${event.target[0].value}`;
		};
		/**
		 * Logic to make the focus go back to the menu button when the list ends
		 */
		this.trapMenuFocus = (e) => {
			var _a;
			let dataType = (_a = e.target) === null || _a === void 0 ? void 0 : _a.dataset.type;
			if (dataType === 'app-desktop') {
				this.menuButtonDesktop.focus();
			} else if (dataType === 'app-tablet') {
				this.menuButtonTablet.focus();
			} else if (dataType === 'app-mobile') {
				this.menuButtonMobile.focus();
			} else {
				this.menuButton.focus();
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
	parseApplicationHeaderInfo() {
		const applicationHeaderInfo = this.applicationHeaderInfo;
		if (applicationHeaderInfo) {
			if (typeof applicationHeaderInfo === 'string')
				this.applicationHeaderInfoState = JSON.parse(applicationHeaderInfo);
			else this.applicationHeaderInfoState = applicationHeaderInfo;
		}
	}
	parseMenuItems() {
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
	}
	parseLanguage() {
		const languageToggleOptions = this.languageToggleOptions;
		if (languageToggleOptions) {
			if (typeof languageToggleOptions === 'string') {
				this.languageState = JSON.parse(languageToggleOptions);
			} else {
				this.languageState = languageToggleOptions;
			}
		}
	}
	/**
	 * Logic to close the menu when anything outside the menu is clicked
	 */
	handleClick(event) {
		// if the button is clicked, return
		if (
			event.composedPath().includes(this.menuButton) ||
			event.composedPath().includes(this.menuButtonDesktop) ||
			event.composedPath().includes(this.menuButtonTablet) ||
			event.composedPath().includes(this.menuButtonMobile)
		) {
			return;
		}
		// If the click was outside the current component, do the following
		if (this.menuToggle) this.menuToggle = !this.menuToggle;
	}
	/**
	 * This listens for the `setAppLanguage` event sent from the test language toggler when it is is connected to the DOM. It is used for the initial language when the input component loads.
	 */
	handleSetAppLanguage(event) {
		this.language = index$1.validateLanguage(event);
	}
	/**
	 * Call to Ontario Menu API to fetch linksets to populate header component
	 */
	async fetchOntarioMenu() {
		// If menu has already been fetched and contains dynamic menu items, do not run fetch again
		if (!this.isDynamicMenu) {
			const apiUrl = process.env.ONTARIO_HEADER_API_URL;
			const response = await fetch(apiUrl)
				.then((response) => response.json())
				.then((json) => json.linkset[0].item)
				.catch(() => {
					console.error('Unable to retrieve data from Ontario Menu API');
					return [];
				});
			if (response.length > 0) {
				const externalMenuItems = response.map((item) => {
					return { href: item.href, title: item.title };
				});
				this.menuItemState = externalMenuItems;
				this.isDynamicMenu = true;
			}
		}
		return;
	}
	/**
	 * This function generates the menu items in a <li>, accordingly, to the given parameters.
	 *
	 * href and title are necessary, but rest are not.
	 *
	 * @param href - the href of the menu item
	 * @param title - the title of the menu item
	 * @param linkIsActive - when set to true, this will add the classes necessary to style the link in a way that indicates to the user what the active page/link is
	 * @param liClass - if there is a class that is related to the <a> portion of the menu item, put it here
	 * @param onClick - for any custon onClick event a user might want to add to their menu links
	 * @param onBlur - when set to true, it will call the function trapMenuFocus(), otherwise nothing is done (used in lastLink)
	 */
	generateMenuItem(href, title, linkIsActive, type, liClass, onClick, onBlur) {
		return index.h(
			'li',
			{ class: liClass },
			index.h(
				'a',
				{
					'class': linkIsActive === true ? `ontario-link--active` : ``,
					'href': href,
					'onClick': onClick,
					'onBlur': onBlur ? this.trapMenuFocus : undefined,
					'data-type': type,
				},
				title,
			),
		);
	}
	/**
	 * This function generates the menu dropdown button for the ontario header component.
	 *
	 * @param viewportSize - the size of the screen where the function is being called. It can either be set to `desktop`, `tablet` or `mobile`. This dictates the classes used on the menu button, as well as the ref to keep the focus trapped when the menu is open.
	 */
	renderMenuButton(viewportSize) {
		return index.h(
			'button',
			{
				'class':
					viewportSize === 'desktop'
						? 'ontario-header__menu-toggler ontario-header-button ontario-header-button--with-outline ontario-show-for-large'
						: viewportSize === 'tablet'
						? 'ontario-header__menu-toggler ontario-header-button ontario-header-button--with-outline ontario-hide-for-small ontario-show-for-medium ontario-hide-for-large'
						: viewportSize === 'mobile'
						? 'ontario-header__menu-toggler ontario-header-button ontario-header-button--with-outline ontario-show-for-small-only'
						: 'ontario-header__menu-toggler ontario-header-button ontario-header-button--with-outline',
				'id': this.type === 'ontario' ? 'ontario-header-menu-toggler' : 'ontario-application-header-menu-toggler',
				'aria-controls': 'ontario-navigation',
				'aria-label': this.menuToggle ? 'close menu' : 'open menu',
				'onClick': this.handleMenuToggle,
				'type': 'button',
				'ref':
					viewportSize === 'desktop'
						? (el) => (this.menuButtonDesktop = el)
						: viewportSize === 'tablet'
						? (el) => (this.menuButtonTablet = el)
						: viewportSize === 'mobile'
						? (el) => (this.menuButtonMobile = el)
						: (el) => (this.menuButton = el),
			},
			index.h('span', {
				class: 'ontario-header__icon-container',
				innerHTML: this.menuToggle ? OntarioIconClose : OntarioIconMenu,
			}),
			index.h('span', null, 'Menu'),
		);
	}
	/**
	 * A helper function to generate navigation dropdown links with onBlur functionality. This is used for the application header.
	 *
	 * @param item - the menu item to be looped over (contains the title and href)
	 * @param index
	 * @param links - the number of links associated with the maxSubheader[size]Links in the application header info prop. This will determine how many links should be displayed in the dropdown.
	 * @param viewportSize - the size of the viewport. It can be set to `desktop`, `tablet` or `mobile`.
	 * @returns
	 */
	generateNavigationLinks(item, index, links, viewportSize) {
		const lastLink =
			index + 1 === (links ? this.menuItemState.length - links : this.menuItemState.length) ? true : false;
		return this.generateMenuItem(
			item.href,
			item.title,
			item.linkIsActive,
			viewportSize,
			'',
			item.onClickHandler,
			lastLink,
		);
	}
	/**
	 * The onEscapePressed function clears the searchbar form when Escape is pressed
	 */
	onEscapePressed(event) {
		if (event.key === 'Escape') {
			event.path[0].value = '';
		}
	}
	componentWillLoad() {
		this.parseApplicationHeaderInfo();
		this.parseMenuItems();
		this.parseLanguage();
	}
	componentDidRender() {
		if (this.disableDynamicMenu === false && this.type === 'ontario') {
			this.fetchOntarioMenu();
		}
	}
	/**
	 * Handles the focus when menu/toggle button is clicked.
	 * When search button is clicked, the search bar is in focus,
	 * when the closed button is clicked, the search button is back into focus.
	 * When the menu is closed, the menu button should be out of focus.
	 */
	componentDidUpdate() {
		if (this.type == 'ontario') {
			if (this.searchToggle === true) this.searchBar.focus();
			if (this.searchToggle === false) this.searchButton.focus();
			if (this.menuToggle === false) this.menuButton.blur();
		}
	}
	render() {
		var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
		if (this.type == 'ontario') {
			return index.h(
				'div',
				null,
				index.h(
					'div',
					{ class: 'ontario-header__container', ref: (el) => (this.header = el) },
					index.h(
						'header',
						{
							class: this.searchToggle ? 'ontario-header ontario-header--search-open' : 'ontario-header',
							id: 'ontario-header',
						},
						index.h(
							'div',
							{ class: 'ontario-row' },
							index.h(
								'div',
								{
									class:
										'ontario-header__logo-container ontario-columns ontario-small-2 ontario-medium-4 ontario-large-3',
								},
								index.h(
									'a',
									{ href: 'https://www.ontario.ca/page/government-ontario' },
									index.h('img', {
										class: 'ontario-show-for-medium',
										src: index.getAssetPath('./assets/ontario-logo--desktop.svg'),
										alt: 'Government of Ontario',
									}),
									index.h('img', {
										class: 'ontario-show-for-small-only',
										src: index.getAssetPath('./assets/ontario-logo--mobile.svg'),
										alt: 'Government of Ontario',
									}),
								),
							),
							index.h(
								'form',
								{
									name: 'searchForm',
									id: 'ontario-search-form-container',
									onSubmit: this.handleSubmit,
									class:
										'ontario-header__search-container ontario-columns ontario-small-10 ontario-medium-offset-3 ontario-medium-6 ontario-large-offset-0 ontario-large-6',
									novalidate: true,
								},
								index.h('label', { htmlFor: 'ontario-search-input-field', class: 'ontario-show-for-sr' }, 'Search'),
								index.h(Input, {
									'type': 'text',
									'name': 'search',
									'id': 'ontario-search-input-field',
									'autoComplete': 'off',
									'aria-autocomplete': 'none',
									'className': 'ontario-input ontario-header__search-input',
									'required': true,
									'ref': (el) => (this.searchBar = el),
									'onKeyDown': this.onEscapePressed,
								}),
								index.h(Input, {
									'className': 'ontario-header__search-reset',
									'id': 'ontario-search-reset',
									'type': 'reset',
									'value': '',
									'aria-label': 'Clear field',
								}),
								index.h(
									'button',
									{ class: 'ontario-header__search-submit', id: 'ontario-search-submit', type: 'submit' },
									index.h('span', { class: 'ontario-show-for-sr' }, 'Submit'),
									index.h('span', { class: 'ontario-header__icon-container', innerHTML: OntarioIconSearch }),
								),
							),
							index.h(
								'div',
								{
									class:
										'ontario-header__nav-right-container ontario-columns ontario-small-10 ontario-medium-8 ontario-large-3',
								},
								index.h('ontario-language-toggle', {
									url:
										this.language === 'en'
											? (_a = this.languageState) === null || _a === void 0
												? void 0
												: _a.frenchLink
											: (_b = this.languageState) === null || _b === void 0
											? void 0
											: _b.englishLink,
									size: 'default',
									customLanguageToggle: this.customLanguageToggle,
								}),
								index.h(
									'button',
									{
										'class':
											'ontario-header__search-toggler ontario-header-button ontario-header-button--without-outline ontario-hide-for-large',
										'id': 'ontario-header-search-toggler',
										'aria-controls': 'ontario-search-form-container',
										'onClick': this.handleSearchToggle,
										'ref': (el) => (this.searchButton = el),
									},
									index.h('span', { class: 'ontario-header__icon-container', innerHTML: OntarioIconSearchWhite }),
									index.h('span', { class: 'ontario-show-for-medium ontario-show' }, 'Search'),
								),
								this.renderMenuButton('ontario-header'),
							),
							index.h(
								'div',
								{ class: 'ontario-header__search-close-container ontario-columns ontario-small-2 ontario-medium-3' },
								index.h(
									'button',
									{
										'class':
											'ontario-header__search-close ontario-header-button ontario-header-button--without-outline',
										'id': 'ontario-header-search-close',
										'aria-label': 'close search bar',
										'type': 'button',
										'onClick': this.handleSearchToggle,
									},
									index.h('span', { 'aria-hidden': `${!this.searchToggle}` }, 'close'),
									index.h('span', { class: 'ontario-header__icon-container', innerHTML: OntarioIconClose }),
								),
							),
						),
					),
					index.h(
						'nav',
						{
							role: 'navigation',
							class: this.menuToggle ? 'ontario-navigation ontario-navigation--open' : 'ontario-navigation',
							id: 'ontario-navigation',
						},
						index.h(
							'div',
							{ class: 'ontario-navigation__container' },
							index.h(
								'ul',
								null,
								(_c = this.menuItemState) === null || _c === void 0
									? void 0
									: _c.map((item, index) => {
											const lastLink = index + 1 === this.menuItemState.length;
											const activeLinkRegex = item.title.replace(/\s+/g, '-').toLowerCase();
											const linkIsActive = window.location.pathname.includes(activeLinkRegex);
											return this.isDynamicMenu
												? this.generateMenuItem(
														item.href,
														item.title,
														linkIsActive,
														'ontario-header',
														'ontario-header-navigation__menu-item',
														undefined,
														lastLink,
												  )
												: this.generateMenuItem(
														item.href,
														item.title,
														item.linkIsActive,
														'ontario-header',
														'ontario-header-navigation__menu-item',
														item.onClickHandler,
														lastLink,
												  );
									  }),
							),
						),
					),
				),
				this.menuToggle && index.h('div', { class: 'ontario-hide-for-large ontario-overlay' }),
			);
		} else {
			return index.h(
				'div',
				null,
				index.h(
					'div',
					{
						class: 'ontario-application-header-container',
						id: 'ontario-application-header',
						ref: (el) => (this.header = el),
					},
					index.h(
						'header',
						{ class: 'ontario-application-header', id: 'ontario-header' },
						index.h(
							'div',
							{ class: 'ontario-row' },
							index.h(
								'div',
								{ class: 'ontario-columns ontario-small-6 ontario-application-header__logo' },
								index.h(
									'a',
									{ href: 'https://www.ontario.ca/page/government-ontario' },
									index.h('img', {
										src: index.getAssetPath('./assets/ontario-logo-application-header.svg'),
										alt: 'Government of Ontario',
									}),
								),
							),
							index.h(
								'div',
								{ class: 'ontario-columns ontario-small-6 ontario-application-header__lang-toggle' },
								index.h('ontario-language-toggle', {
									size: 'small',
									url:
										this.language === 'en'
											? (_d = this.languageState) === null || _d === void 0
												? void 0
												: _d.frenchLink
											: (_e = this.languageState) === null || _e === void 0
											? void 0
											: _e.englishLink,
									customLanguageToggle: this.customLanguageToggle,
								}),
							),
						),
					),
					index.h(
						'div',
						{ class: 'ontario-application-subheader-menu__container' },
						index.h(
							'section',
							{ class: 'ontario-application-subheader' },
							index.h(
								'div',
								{ class: 'ontario-row' },
								index.h(
									'div',
									{ class: 'ontario-columns ontario-small-12 ontario-application-subheader__container' },
									index.h(
										'p',
										{ class: 'ontario-application-subheader__heading' },
										index.h(
											'a',
											{ href: (_f = this.applicationHeaderInfoState) === null || _f === void 0 ? void 0 : _f.href },
											(_g = this.applicationHeaderInfoState) === null || _g === void 0 ? void 0 : _g.title,
										),
									),
									index.h(
										'div',
										{ class: 'ontario-application-subheader__menu-container' },
										this.applicationHeaderInfoState.maxSubheaderDesktopLinks &&
											index.h(
												'ul',
												{ class: 'ontario-application-subheader__menu ontario-show-for-large' },
												(_h = this.menuItemState) === null || _h === void 0
													? void 0
													: _h
															.slice(0, this.applicationHeaderInfoState.maxSubheaderDesktopLinks)
															.map((item) =>
																this.generateMenuItem(
																	item.href,
																	item.title,
																	item.linkIsActive,
																	'app-desktop',
																	'',
																	item.onClickHandler,
																),
															),
											),
										this.applicationHeaderInfoState.maxSubheaderTabletLinks &&
											index.h(
												'ul',
												{
													class:
														'ontario-application-subheader__menu ontario-hide-for-small ontario-show-for-medium ontario-hide-for-large',
												},
												(_j = this.menuItemState) === null || _j === void 0
													? void 0
													: _j
															.slice(0, this.applicationHeaderInfoState.maxSubheaderTabletLinks)
															.map((item) =>
																this.generateMenuItem(
																	item.href,
																	item.title,
																	item.linkIsActive,
																	'app-tablet',
																	'',
																	item.onClickHandler,
																),
															),
											),
										this.applicationHeaderInfoState.maxSubheaderMobileLinks &&
											index.h(
												'ul',
												{ class: 'ontario-application-subheader__menu ontario-show-for-small-only' },
												(_k = this.menuItemState) === null || _k === void 0
													? void 0
													: _k
															.slice(0, this.applicationHeaderInfoState.maxSubheaderMobileLinks)
															.map((item) =>
																this.generateMenuItem(
																	item.href,
																	item.title,
																	item.linkIsActive,
																	'app-mobile',
																	'',
																	item.onClickHandler,
																),
															),
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
						index.h(
							'nav',
							{
								role: 'navigation',
								class:
									this.menuToggle === true
										? 'ontario-application-navigation ontario-navigation--open'
										: 'ontario-application-navigation',
								id: 'ontario-application-navigation',
							},
							index.h(
								'div',
								{ class: 'ontario-application-navigation__container' },
								index.h(
									'ul',
									{ class: 'ontario-show-for-large' },
									(_l = this.menuItemState) === null || _l === void 0
										? void 0
										: _l
												.slice(this.applicationHeaderInfoState.maxSubheaderDesktopLinks, this.menuItemState.length)
												.map((item, index) => {
													return this.generateNavigationLinks(
														item,
														index,
														this.applicationHeaderInfoState.maxSubheaderDesktopLinks,
														'app-desktop',
													);
												}),
								),
								index.h(
									'ul',
									{ class: 'ontario-show-for-medium ontario-hide-for-small ontario-hide-for-large' },
									(_m = this.menuItemState) === null || _m === void 0
										? void 0
										: _m
												.slice(this.applicationHeaderInfoState.maxSubheaderTabletLinks, this.menuItemState.length)
												.map((item, index) => {
													return this.generateNavigationLinks(
														item,
														index,
														this.applicationHeaderInfoState.maxSubheaderTabletLinks,
														'app-tablet',
													);
												}),
								),
								index.h(
									'ul',
									{ class: 'ontario-show-for-small-only' },
									(_o = this.menuItemState) === null || _o === void 0
										? void 0
										: _o
												.slice(this.applicationHeaderInfoState.maxSubheaderMobileLinks, this.menuItemState.length)
												.map((item, index) => {
													return this.generateNavigationLinks(
														item,
														index,
														this.applicationHeaderInfoState.maxSubheaderMobileLinks,
														'app-mobile',
													);
												}),
								),
							),
						),
					),
				),
				this.menuToggle && index.h('div', { class: 'ontario-hide-for-large ontario-overlay' }),
			);
		}
	}
	static get assetsDirs() {
		return ['./assets'];
	}
	get el() {
		return index.getElement(this);
	}
	static get watchers() {
		return {
			applicationHeaderInfo: ['parseApplicationHeaderInfo'],
			menuItems: ['parseMenuItems'],
			languageToggleOptions: ['parseLanguage'],
		};
	}
};
OntarioHeader.style = {
	application: ontarioApplicationHeaderCss,
	ontario: ontarioHeaderCss,
};

const ontarioHintExpanderCss =
	'.ontario-hint-expander__button:focus,.ontario-hint-expander__button:active{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-hint-expander__container{max-width:48rem}.ontario-hint-expander__button{color:#0066CC;cursor:pointer;background:none;border:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:400;font-size:1rem;text-align:left;margin:0 0 1rem 0;padding:0 0.25rem 0 0}.ontario-hint-expander__button-icon--close{display:none;margin-right:0.25rem}.ontario-hint-expander__button-icon--open{display:inline-block;margin-right:0.25rem}.ontario-hint-expander__button:hover{color:#00478F}.ontario-hint-expander__button:active{color:#002142}.ontario-hint-expander__button>*{pointer-events:none}.ontario-hint-expander__content{border-left:4px solid #cccccc;color:#1a1a1a;background-color:#f2f2f2;display:none;padding:1rem 1rem 1rem calc(1rem + 0.25rem);margin:0 0 1rem 0.25rem}.ontario-hint-expander__content *:first-child{margin-top:0}.ontario-hint-expander__content *:last-child{margin-bottom:0}.ontario-hint-expander__content img{width:100%}@media screen and (min-width: 40em){.ontario-hint-expander__content img{width:50%}}.ontario-hint-expander__content.ontario-expander__content--opened{display:block}.ontario-hint-expander__container.ontario-expander--active .ontario-hint-expander__button-icon--close{display:inline-block}.ontario-hint-expander__container.ontario-expander--active .ontario-hint-expander__button-icon--open{display:none}.ontario-hint-expander__checkbox-exists-true{margin:0.75rem 0 0 0.5rem}@media screen and (max-width: 40em){.ontario-hint-expander__checkbox-exists-true{margin-top:1rem}}';

const OntarioHintExpander = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.toggleExpanderEvent = index.createEvent(this, 'toggleExpanderEvent', 7);
		this.onClick = (ev) => {
			const hintExpander = ev.target;
			const hintExpanderParent = hintExpander === null || hintExpander === void 0 ? void 0 : hintExpander.parentElement;
			hintExpanderParent === null || hintExpanderParent === void 0
				? void 0
				: hintExpanderParent.classList.toggle('ontario-expander--active');
			let content =
				hintExpanderParent === null || hintExpanderParent === void 0
					? void 0
					: hintExpanderParent.querySelector("[data-toggle='ontario-expander-content']");
			content === null || content === void 0 ? void 0 : content.classList.toggle('ontario-expander__content--opened');
			(
				content === null || content === void 0
					? void 0
					: content.classList.contains('ontario-expander__content--opened')
			)
				? content.setAttribute('aria-hidden', 'false')
				: content === null || content === void 0
				? void 0
				: content.setAttribute('aria-hidden', 'true');
			(
				hintExpanderParent === null || hintExpanderParent === void 0
					? void 0
					: hintExpanderParent.classList.contains('ontario-expander--active')
			)
				? hintExpanderParent === null || hintExpanderParent === void 0
					? void 0
					: hintExpanderParent.setAttribute('aria-expanded', 'true')
				: hintExpanderParent === null || hintExpanderParent === void 0
				? void 0
				: hintExpanderParent.setAttribute('aria-expanded', 'false');
			this.toggleExpanderEvent.emit(ev);
		};
		this.hintContentType = 'string';
		this.hint = undefined;
		this.content = undefined;
		this.elementId = undefined;
		this.hintState = undefined;
	}
	/**
	 * Watch for changes to the `hintContentType` prop for validation purposes.
	 * If none is provided, or the wrong type is provided, it will default to `string`.
	 */
	checkHintContentType() {
		if (this.hintContentType !== 'string' && this.hintContentType !== 'html') {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' hintContentType ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-hint-text> ')
				.addRegularText('was not one of the permitted types. A default type of `string` will be applied.')
				.printMessage();
			return (this.hintContentType = 'string');
		}
		return this.hintContentType;
	}
	/*
	 * Watch for changes in the `hint` prop for validation purposes.
	 * If no `hint` prop is provided, the `hint` will be set to the host element textContent (if it exists).
	 */
	updateHintContent() {
		var _a, _b;
		this.hintState =
			(_b = (_a = this.hint) !== null && _a !== void 0 ? _a : this.host.textContent) !== null && _b !== void 0
				? _b
				: '';
		this.validateHint(this.hintState);
	}
	/*
	 * Watch for changes to the `content` prop for validation purposes.
	 *
	 * Validate the `content` and make sure the `content` has a value.
	 * Log a warning if user doesn't input a value for the `content` or element content.
	 */
	validateContent(newValue) {
		if (index$1.validatePropExists(newValue)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' content ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-hint-expander> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	}
	/*
	 * Watch for changes in the `hint` prop for validation purposes.
	 *
	 * Validate the `hint` and make sure the `hint` has a value.
	 * Log a warning if user doesn't input a value for the `hint`.
	 */
	validateHint(newValue) {
		if (index$1.validatePropExists(newValue)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' hint ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-hint-expander> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	}
	/**
	 * Set `hint` using internal component logic
	 */
	componentWillLoad() {
		var _a;
		this.elementId = (_a = this.elementId) !== null && _a !== void 0 ? _a : v4();
		this.updateHintContent();
		this.checkHintContentType();
		this.validateContent(this.content);
	}
	/**
	 * This helper is used to help load translations for any slots + text content passed in by the user.
	 */
	componentDidLoad() {
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.type === 'attributes') {
					this.updateHintContent();
				}
			});
		});
		const options = { attributes: true };
		observer.observe(this.host, options);
	}
	getId() {
		var _a;
		return (_a = this.elementId) !== null && _a !== void 0 ? _a : '';
	}
	render() {
		return index.h(
			'div',
			{ class: 'ontario-hint-expander__container' },
			index.h(
				'button',
				{
					'class': 'ontario-hint-expander__button',
					'onClick': this.onClick,
					'id': `hint-expander-button-${this.getId()}`,
					'aria-controls': `hint-expander-content-${this.getId()}`,
					'aria-expanded': 'false',
					'data-toggle': 'ontario-collapse',
				},
				index.h(
					'span',
					{ class: 'ontario-hint-expander__button-icon--close ontario-icon' },
					index.h('ontario-icon-chevron-up', null),
				),
				index.h(
					'span',
					{ class: 'ontario-hint-expander__button-icon--open' },
					index.h('ontario-icon-chevron-down', null),
				),
				this.hint,
			),
			index.h(
				'div',
				{
					'class': 'ontario-hint-expander__content',
					'id': `hint-expander-content-${this.getId()}`,
					'aria-labelledby': `hint-expander-button-${this.getId()}`,
					'aria-hidden': 'true',
					'data-toggle': 'ontario-expander-content',
				},
				this.hintContentType === 'string' ? this.content : index.h('span', { innerHTML: this.content }),
			),
		);
	}
	get host() {
		return index.getElement(this);
	}
	static get watchers() {
		return {
			hintContentType: ['checkHintContentType'],
			hint: ['updateHintContent'],
			content: ['validateContent'],
		};
	}
};
OntarioHintExpander.style = ontarioHintExpanderCss;

const ontarioHintTextCss =
	'.ontario-hint{color:#4d4d4d;display:inline-block;margin:0 0 1rem 0;width:100%;max-width:48rem}.ontario-hint p{margin-bottom:1rem}.ontario-hint p:first-of-type{margin-top:0}.ontario-hint p:last-of-type{margin-bottom:0}';

const OntarioHintText = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.hintContentType = 'string';
		this.hint = undefined;
		this.elementId = undefined;
		this.hintState = undefined;
	}
	/**
	 * Watch for changes to the `hintContentType` prop for validation purposes.
	 * If none is provided, or the wrong type is provided, it will default to `string`.
	 */
	checkHintContentType() {
		if (this.hintContentType !== 'string' && this.hintContentType !== 'html') {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' hintContentType ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-hint-text> ')
				.addRegularText('was not one of the permitted types. A default type of `string` will be applied.')
				.printMessage();
			return (this.hintContentType = 'string');
		}
		return this.hintContentType;
	}
	/*
	 * Watch for changes in the `hint` prop for validation purposes.
	 * If no `hint` prop is provided, the `hint` will be set to the host element textContent (if it exists).
	 */
	updateHintContent() {
		var _a, _b;
		this.hintState =
			(_b = (_a = this.hint) !== null && _a !== void 0 ? _a : this.host.textContent) !== null && _b !== void 0
				? _b
				: '';
		this.validateHintContent(this.hintState);
	}
	/*
	 * Validate the `hint` and make sure the `hint` has a value.
	 * Log a warning if user doesn't input a value for the `hint` or element content.
	 */
	validateHintContent(newValue) {
		// If element content is not provided, check whether prop exists
		if (!this.host.textContent) {
			if (index$1.validatePropExists(newValue)) {
				const message = new consoleMessage.ConsoleMessageClass();
				message
					.addDesignSystemTag()
					.addMonospaceText(' hint ')
					.addRegularText('for')
					.addMonospaceText(' <ontario-hint-text> ')
					.addRegularText('was not provided')
					.printMessage();
			}
		}
	}
	getId() {
		var _a;
		return (_a = this.elementId) !== null && _a !== void 0 ? _a : '';
	}
	/**
	 * This method returns the ontario-hint-text id. It is used to make sure the hint text and `aria-describedby` value of other form components match when the internal hint text props are used.
	 *
	 * @returns Promise<string | undefined>
	 */
	async getHintTextId() {
		return this.elementId;
	}
	/**
	 * Set `hint` using internal component logic
	 */
	componentWillLoad() {
		var _a;
		this.updateHintContent();
		this.checkHintContentType();
		this.elementId = (_a = this.elementId) !== null && _a !== void 0 ? _a : v4();
	}
	/**
	 * This helper is used to help load translations for any slots + text content passed in by the user.
	 */
	componentDidLoad() {
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.type === 'attributes') {
					this.updateHintContent();
				}
			});
		});
		const options = { attributes: true };
		observer.observe(this.host, options);
	}
	render() {
		return this.hintContentType === 'string'
			? index.h('p', { id: this.getId(), class: 'ontario-hint' }, this.hintState)
			: index.h('div', { id: this.getId(), class: 'ontario-hint', innerHTML: this.hintState });
	}
	get host() {
		return index.getElement(this);
	}
	static get watchers() {
		return {
			hintContentType: ['checkHintContentType'],
			hint: ['updateHintContent'],
		};
	}
};
OntarioHintText.style = ontarioHintTextCss;

const ontarioIconCss$g =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';

const OntarioIconAccessibility = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	/**
	 * Watch for changes in the `iconWidth` variable for validation purpose.
	 * If the user input is not a number or is a negative number then `iconWidth` will be set to its default (24).
	 */
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-accessibility> ')
				.addRegularText(
					`${
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number'
					}; only a positive number is allowed. The default size of`,
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	}
	/**
	 * Watch for changes in the `colour` variable for validation purpose.
	 * If the user input doesn't match one of the enum values then `colour` will be set to its default (`black`).
	 * If a match is found in one of the enum values then `colour` will be set to the matching enum value.
	 */
	validateColour() {
		const isValid = index$1.validateValueAgainstArray(this.colour, index$1.IconColours);
		if (isValid) {
			this.iconColourState = this.colour;
		} else {
			if (index$1.validateColor(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	}
	/**
	 * Print the invalid colour warning message
	 * @returns default colour (black)
	 */
	warnDefaultColour() {
		const message = new consoleMessage.ConsoleMessageClass();
		message
			.addDesignSystemTag()
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
	}
	/**
	 * Stencil component lifecycle method that is called once after the component is first connected to the DOM.
	 */
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	/**
	 * Returns the HTML code to be rendered into a custom element.
	 */
	render() {
		return index.h(
			'div',
			{
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			index.h(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'accessibility',
				},
				index.h('path', {
					d: 'M18.4 11.2l-4.1.2 2.3-2.6c.2-.3.3-.8.2-1.3-.1-.3-.2-.6-.5-.8l-5.4-3.2c-.4-.3-1-.2-1.4.1L6.8 6.1c-.5.5-.6 1.2-.1 1.7.4.5 1.2.5 1.7.1l2-1.8 1.9 1.1-4.2 4.3c-.1.1-.1.2-.2.2-.5.2-1 .4-1.4.7L8 13.9c.5-.2 1-.4 1.5-.4 1.9 0 3.5 1.6 3.5 3.5 0 .6-.1 1.1-.4 1.5l1.5 1.5a5.29 5.29 0 0 0 .9-3c0-1.2-.4-2.4-1.1-3.3l3.3-.3-.2 4.8c-.1.7.4 1.2 1.1 1.3h.1c.6 0 1.1-.5 1.2-1.1l.2-5.9c0-.3-.1-.7-.3-.9-.3-.3-.6-.4-.9-.4zM18 5.5a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2 2 2 0 0 0 2 2zm-5.5 16.1a5.29 5.29 0 0 1-3 .9C6.5 22.5 4 20 4 17a5.29 5.29 0 0 1 .9-3l1.5 1.5c-.2.5-.4 1-.4 1.5 0 1.9 1.6 3.5 3.5 3.5.6 0 1.1-.1 1.5-.4l1.5 1.5z',
				}),
			),
		);
	}
	static get watchers() {
		return {
			iconWidth: ['validateWidth'],
			colour: ['validateColour'],
		};
	}
};
OntarioIconAccessibility.style = ontarioIconCss$g;

const ontarioIconCss$f =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';

const OntarioIconAlertError = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
	}
	/**
	 * Watch for changes in the `iconWidth` variable for validation purpose.
	 * If the user input is not a number or is a negative number then `iconWidth` will be set to its default (24).
	 */
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-alert-error> ')
				.addRegularText(
					`${
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number'
					}; only a positive number is allowed. The default size of`,
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	}
	/**
	 * Validate that the `colour` attribute is not set by users
	 * Prints a warning message if the `colour` attribute is set
	 */
	validateColour() {
		if (this.host.hasAttribute('colour')) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-alert-error> ')
				.addRegularText('cannot be set. The provided colour is ignored.')
				.printMessage();
		}
	}
	/**
	 * Stencil component lifecycle method that is called once after the component is first connected to the DOM.
	 */
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	/**
	 * Returns the HTML code to be rendered into a custom element.
	 */
	render() {
		return index.h(
			'div',
			{
				class: `ontario-icon ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			index.h(
				'svg',
				{
					class: 'svg-icon',
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'alert-error',
				},
				index.h('path', {
					d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
					fill: '#cd0000',
				}),
				index.h('path', { d: 'M11 17h2v-2h-2v2zm0-4h2V7h-2v6z', fill: '#fff' }),
			),
		);
	}
	get host() {
		return index.getElement(this);
	}
	static get watchers() {
		return {
			iconWidth: ['validateWidth'],
		};
	}
};
OntarioIconAlertError.style = ontarioIconCss$f;

const ontarioIconCss$e =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';

const OntarioIconAlertInformation = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
	}
	/**
	 * Watch for changes in the `iconWidth` variable for validation purpose.
	 * If the user input is not a number or is a negative number then `iconWidth` will be set to its default (24).
	 */
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-alert-information> ')
				.addRegularText(
					`${
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number'
					}; only a positive number is allowed. The default size of`,
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	}
	/**
	 * Validate that the `colour` attribute is not set by users
	 * Prints a warning message if the `colour` attribute is set
	 */
	validateColour() {
		if (this.host.hasAttribute('colour')) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-alert-information> ')
				.addRegularText('cannot be set. The provided colour is ignored.')
				.printMessage();
		}
	}
	/**
	 * Stencil component lifecycle method that is called once after the component is first connected to the DOM.
	 */
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	/**
	 * Returns the HTML code to be rendered into a custom element.
	 */
	render() {
		return index.h(
			'div',
			{
				class: `ontario-icon ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			index.h(
				'svg',
				{
					class: 'svg-icon',
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'alert-information',
				},
				index.h('path', {
					d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
					fill: '#1080a6',
				}),
				index.h('path', { d: 'M11 17h2v-6h-2v6zm0-8h2V7h-2v2z', fill: '#fff' }),
			),
		);
	}
	get host() {
		return index.getElement(this);
	}
	static get watchers() {
		return {
			iconWidth: ['validateWidth'],
		};
	}
};
OntarioIconAlertInformation.style = ontarioIconCss$e;

const ontarioIconCss$d =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';

const OntarioIconAlertSuccess = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
	}
	/**
	 * Watch for changes in the `iconWidth` variable for validation purpose.
	 * If the user input is not a number or is a negative number then `iconWidth` will be set to its default (24).
	 */
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-alert-success> ')
				.addRegularText(
					`${
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number'
					}; only a positive number is allowed. The default size of`,
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	}
	/**
	 * Validate that the `colour` attribute is not set by users
	 * Prints a warning message if the `colour` attribute is set
	 */
	validateColour() {
		if (this.host.hasAttribute('colour')) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-alert-success> ')
				.addRegularText('cannot be set. The provided colour is ignored.')
				.printMessage();
		}
	}
	/**
	 * Stencil component lifecycle method that is called once after the component is first connected to the DOM.
	 */
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	/**
	 * Returns the HTML code to be rendered into a custom element.
	 */
	render() {
		return index.h(
			'div',
			{
				class: `ontario-icon ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			index.h(
				'svg',
				{
					class: 'svg-icon',
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'alert-success',
				},
				index.h('path', {
					d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.4-1.4 3.6 3.58L17.17 7l1.4 1.42L10 17z',
					fill: '#118847',
				}),
				index.h('path', { d: 'M5 12l5 5 8.58-8.58L17.17 7 10 14.17 6.4 10.6 5 12z', fill: '#fff' }),
			),
		);
	}
	get host() {
		return index.getElement(this);
	}
	static get watchers() {
		return {
			iconWidth: ['validateWidth'],
		};
	}
};
OntarioIconAlertSuccess.style = ontarioIconCss$d;

const ontarioIconCss$c =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';

const OntarioIconAlertWarning = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
	}
	/**
	 * Watch for changes in the `iconWidth` variable for validation purpose.
	 * If the user input is not a number or is a negative number then `iconWidth` will be set to its default (24).
	 */
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-alert-warning> ')
				.addRegularText(
					`${
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number'
					}; only a positive number is allowed. The default size of`,
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	}
	/**
	 * Validate that the `colour` attribute is not set by users
	 * Prints a warning message if the `colour` attribute is set
	 */
	validateColour() {
		if (this.host.hasAttribute('colour')) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-alert-warning> ')
				.addRegularText('cannot be set. The provided colour is ignored.')
				.printMessage();
		}
	}
	/**
	 * Stencil component lifecycle method that is called once after the component is first connected to the DOM.
	 */
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	/**
	 * Returns the HTML code to be rendered into a custom element.
	 */
	render() {
		return index.h(
			'div',
			{
				class: `ontario-icon ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			index.h(
				'svg',
				{
					class: 'svg-icon',
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'alert-warning',
				},
				index.h('path', { d: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z', fill: '#ffd440' }),
				index.h('path', { d: 'M11 10h2v4h-2zm0 6h2v2h-2z', fill: '#000' }),
			),
		);
	}
	get host() {
		return index.getElement(this);
	}
	static get watchers() {
		return {
			iconWidth: ['validateWidth'],
		};
	}
};
OntarioIconAlertWarning.style = ontarioIconCss$c;

const ontarioIconCss$b =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';

const OntarioIconCamera = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	/**
	 * Watch for changes in the `iconWidth` variable for validation purpose.
	 * If the user input is not a number or is a negative number then `iconWidth` will be set to its default (24).
	 */
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-camera> ')
				.addRegularText(
					`${
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number'
					}; only a positive number is allowed. The default size of`,
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	}
	/**
	 * Watch for changes in the `colour` variable for validation purpose.
	 * If the user input doesn't match one of the enum values then `colour` will be set to its default (`black`).
	 * If a match is found in one of the enum values then `colour` will be set to the matching enum value.
	 */
	validateColour() {
		const isValid = index$1.validateValueAgainstArray(this.colour, index$1.IconColours);
		if (isValid) {
			this.iconColourState = this.colour;
		} else {
			if (index$1.validateColor(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	}
	/**
	 * Print the invalid colour warning message
	 * @returns default colour (black)
	 */
	warnDefaultColour() {
		const message = new consoleMessage.ConsoleMessageClass();
		message
			.addDesignSystemTag()
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
	}
	/**
	 * Stencil component lifecycle method that is called once after the component is first connected to the DOM.
	 */
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	/**
	 * Returns the HTML code to be rendered into a custom element.
	 */
	render() {
		return index.h(
			'div',
			{
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			index.h(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'camera',
				},
				index.h('path', {
					d: 'M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1.8a3.2 3.2 0 0 0 0-6.4 3.2 3.2 0 1 0 0 6.4z',
				}),
			),
		);
	}
	static get watchers() {
		return {
			iconWidth: ['validateWidth'],
			colour: ['validateColour'],
		};
	}
};
OntarioIconCamera.style = ontarioIconCss$b;

const ontarioIconCss$a =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';

const OntarioIconChevronDown = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	/**
	 * Watch for changes in the `iconWidth` variable for validation purpose.
	 * If the user input is not a number or is a negative number then `iconWidth` will be set to its default (24).
	 */
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-chevron-down> ')
				.addRegularText(
					`${
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number'
					}; only a positive number is allowed. The default size of`,
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	}
	/**
	 * Watch for changes in the `colour` variable for validation purpose.
	 * If the user input doesn't match one of the enum values then `colour` will be set to its default (`black`).
	 * If a match is found in one of the enum values then `colour` will be set to the matching enum value.
	 */
	validateColour() {
		const isValid = index$1.validateValueAgainstArray(this.colour, index$1.IconColours);
		if (isValid) {
			this.iconColourState = this.colour;
		} else {
			if (index$1.validateColor(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	}
	/**
	 * Print the invalid colour warning message
	 * @returns default colour (black)
	 */
	warnDefaultColour() {
		const message = new consoleMessage.ConsoleMessageClass();
		message
			.addDesignSystemTag()
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
	}
	/**
	 * Stencil component lifecycle method that is called once after the component is first connected to the DOM.
	 */
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	/**
	 * Returns the HTML code to be rendered into a custom element.
	 */
	render() {
		return index.h(
			'div',
			{
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			index.h(
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
				index.h('path', { d: 'M7.4 8.6l4.6 4.58 4.6-4.58L18 10l-6 6-6-6 1.4-1.4z' }),
			),
		);
	}
	static get watchers() {
		return {
			iconWidth: ['validateWidth'],
			colour: ['validateColour'],
		};
	}
};
OntarioIconChevronDown.style = ontarioIconCss$a;

const ontarioIconCss$9 =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';

const OntarioIconChevronLeft = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	/**
	 * Watch for changes in the `iconWidth` variable for validation purpose.
	 * If the user input is not a number or is a negative number then `iconWidth` will be set to its default (24).
	 */
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-chevron-left> ')
				.addRegularText(
					`${
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number'
					}; only a positive number is allowed. The default size of`,
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	}
	/**
	 * Watch for changes in the `colour` variable for validation purpose.
	 * If the user input doesn't match one of the enum values then `colour` will be set to its default (`black`).
	 * If a match is found in one of the enum values then `colour` will be set to the matching enum value.
	 */
	validateColour() {
		const isValid = index$1.validateValueAgainstArray(this.colour, index$1.IconColours);
		if (isValid) {
			this.iconColourState = this.colour;
		} else {
			if (index$1.validateColor(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	}
	/**
	 * Print the invalid colour warning message
	 * @returns default colour (black)
	 */
	warnDefaultColour() {
		const message = new consoleMessage.ConsoleMessageClass();
		message
			.addDesignSystemTag()
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
	}
	/**
	 * Stencil component lifecycle method that is called once after the component is first connected to the DOM.
	 */
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	/**
	 * Returns the HTML code to be rendered into a custom element.
	 */
	render() {
		return index.h(
			'div',
			{
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			index.h(
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
				index.h('path', { d: 'M15.4 7.4L14 6l-6 6 6 6 1.4-1.4-4.58-4.6 4.58-4.6z' }),
			),
		);
	}
	static get watchers() {
		return {
			iconWidth: ['validateWidth'],
			colour: ['validateColour'],
		};
	}
};
OntarioIconChevronLeft.style = ontarioIconCss$9;

const ontarioIconCss$8 =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';

const OntarioIconChevronUp = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	/**
	 * Watch for changes in the `iconWidth` variable for validation purpose.
	 * If the user input is not a number or is a negative number then `iconWidth` will be set to its default (24).
	 */
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-chevron-up> ')
				.addRegularText(
					`${
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number'
					}; only a positive number is allowed. The default size of`,
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	}
	/**
	 * Watch for changes in the `colour` variable for validation purpose.
	 * If the user input doesn't match one of the enum values then `colour` will be set to its default (`black`).
	 * If a match is found in one of the enum values then `colour` will be set to the matching enum value.
	 */
	validateColour() {
		const isValid = index$1.validateValueAgainstArray(this.colour, index$1.IconColours);
		if (isValid) {
			this.iconColourState = this.colour;
		} else {
			if (index$1.validateColor(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	}
	/**
	 * Print the invalid colour warning message
	 * @returns default colour (black)
	 */
	warnDefaultColour() {
		const message = new consoleMessage.ConsoleMessageClass();
		message
			.addDesignSystemTag()
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
	}
	/**
	 * Stencil component lifecycle method that is called once after the component is first connected to the DOM.
	 */
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	/**
	 * Returns the HTML code to be rendered into a custom element.
	 */
	render() {
		return index.h(
			'div',
			{
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			index.h(
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
				index.h('path', { d: 'M7.4 15.4l4.6-4.58 4.6 4.58L18 14l-6-6-6 6 1.4 1.4z' }),
			),
		);
	}
	static get watchers() {
		return {
			iconWidth: ['validateWidth'],
			colour: ['validateColour'],
		};
	}
};
OntarioIconChevronUp.style = ontarioIconCss$8;

const ontarioIconCss$7 =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';

const OntarioIconEmail = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	/**
	 * Watch for changes in the `iconWidth` variable for validation purpose.
	 * If the user input is not a number or is a negative number then `iconWidth` will be set to its default (24).
	 */
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-email> ')
				.addRegularText(
					`${
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number'
					}; only a positive number is allowed. The default size of`,
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	}
	/**
	 * Watch for changes in the `colour` variable for validation purpose.
	 * If the user input doesn't match one of the enum values then `colour` will be set to its default (`black`).
	 * If a match is found in one of the enum values then `colour` will be set to the matching enum value.
	 */
	validateColour() {
		const isValid = index$1.validateValueAgainstArray(this.colour, index$1.IconColours);
		if (isValid) {
			this.iconColourState = this.colour;
		} else {
			if (index$1.validateColor(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	}
	/**
	 * Print the invalid colour warning message
	 * @returns default colour (black)
	 */
	warnDefaultColour() {
		const message = new consoleMessage.ConsoleMessageClass();
		message
			.addDesignSystemTag()
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
	}
	/**
	 * Stencil component lifecycle method that is called once after the component is first connected to the DOM.
	 */
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	/**
	 * Returns the HTML code to be rendered into a custom element.
	 */
	render() {
		return index.h(
			'div',
			{
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			index.h(
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
				index.h('path', {
					d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
				}),
			),
		);
	}
	static get watchers() {
		return {
			iconWidth: ['validateWidth'],
			colour: ['validateColour'],
		};
	}
};
OntarioIconEmail.style = ontarioIconCss$7;

const ontarioIconCss$6 =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';

const OntarioIconHelp = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	/**
	 * Watch for changes in the `iconWidth` variable for validation purpose.
	 * If the user input is not a number or is a negative number then `iconWidth` will be set to its default (24).
	 */
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-help> ')
				.addRegularText(
					`${
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number'
					}; only a positive number is allowed. The default size of`,
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	}
	/**
	 * Watch for changes in the `colour` variable for validation purpose.
	 * If the user input doesn't match one of the enum values then `colour` will be set to its default (`black`).
	 * If a match is found in one of the enum values then `colour` will be set to the matching enum value.
	 */
	validateColour() {
		const isValid = index$1.validateValueAgainstArray(this.colour, index$1.IconColours);
		if (isValid) {
			this.iconColourState = this.colour;
		} else {
			if (index$1.validateColor(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	}
	/**
	 * Print the invalid colour warning message
	 * @returns default colour (black)
	 */
	warnDefaultColour() {
		const message = new consoleMessage.ConsoleMessageClass();
		message
			.addDesignSystemTag()
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
	}
	/**
	 * Stencil component lifecycle method that is called once after the component is first connected to the DOM.
	 */
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	/**
	 * Returns the HTML code to be rendered into a custom element.
	 */
	render() {
		return index.h(
			'div',
			{
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			index.h(
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
				index.h('path', {
					d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.6-.86.6-1.4 0-1.1-.9-2-2-2s-2 .9-2 2H8a4 4 0 1 1 8 0 3.18 3.18 0 0 1-.93 2.25z',
				}),
			),
		);
	}
	static get watchers() {
		return {
			iconWidth: ['validateWidth'],
			colour: ['validateColour'],
		};
	}
};
OntarioIconHelp.style = ontarioIconCss$6;

const ontarioIconCss$5 =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';

const OntarioIconMastercard = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
	}
	/**
	 * Watch for changes in the `iconWidth` variable for validation purpose.
	 * If the user input is not a number or is a negative number then `iconWidth` will be set to its default (24).
	 */
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-mastercard> ')
				.addRegularText(
					`${
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number'
					}; only a positive number is allowed. The default size of`,
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	}
	/**
	 * Validate that the `colour` attribute is not set by users
	 * Prints a warning message if the `colour` attribute is set
	 */
	validateColour() {
		if (this.host.hasAttribute('colour')) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-mastercard> ')
				.addRegularText('cannot be set. The provided colour is ignored.')
				.printMessage();
		}
	}
	/**
	 * Stencil component lifecycle method that is called once after the component is first connected to the DOM.
	 */
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	/**
	 * Returns the HTML code to be rendered into a custom element.
	 */
	render() {
		return index.h(
			'div',
			{
				class: `ontario-icon ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			index.h(
				'svg',
				{ class: 'svg-icon', role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', id: 'mastercard' },
				index.h('circle', { cx: '8', cy: '12', r: '6.5', fill: '#eb001b' }),
				index.h('circle', { cx: '16', cy: '12', r: '6.5', fill: '#f79e1b' }),
				index.h('path', {
					d: 'M12 17.124S9.5 15.5 9.5 12 12 6.876 12 6.876 14.5 8.5 14.5 12 12 17.124 12 17.124z',
					fill: '#ff5f00',
				}),
				index.h('path', {
					d: 'M21.173 16.85v-.3h.125v-.06H21v.06h.117v.3h.055zm.578 0v-.35h-.1l-.105.25-.105-.25h-.1v.35h.065v-.265l.098.227h.067l.098-.227v.265h.063z',
					fill: '#f79e1b',
				}),
				index.h(
					'g',
					{ fill: '#231f20' },
					index.h('path', {
						d: 'M5.275 21.953v-1.098a.66.66 0 0 0-.187-.503.65.65 0 0 0-.501-.192.68.68 0 0 0-.35.072c-.108.055-.2.137-.265.24-.06-.1-.145-.18-.246-.235a.64.64 0 0 0-.332-.076.58.58 0 0 0-.513.26v-.216H2.5v1.75h.384V21c-.016-.12.023-.245.105-.333s.203-.138.324-.132c.253 0 .38.165.38.46v.974h.384V21c-.016-.12.024-.244.105-.333s.202-.138.323-.132c.26 0 .384.165.384.46v.974l.384-.007zm5.687-1.75h-.626v-.53h-.384v.53h-.348v.348h.355v.806c0 .406.157.648.608.648.168.001.333-.046.476-.136l-.1-.326c-.102.06-.218.095-.337.1-.183 0-.253-.117-.253-.293v-.798h.622l-.004-.348zm3.247-.044c-.186-.005-.368.096-.46.256v-.212h-.377v1.75h.38v-.98c0-.29.124-.45.366-.45a.62.62 0 0 1 .238.044l.117-.366c-.087-.03-.178-.047-.27-.048l.007.007zm-4.9.183a1.31 1.31 0 0 0-.714-.183c-.443 0-.732.212-.732.56 0 .286.212.46.604.516l.183.026c.21.03.308.084.308.183 0 .136-.14.212-.4.212a.93.93 0 0 1-.582-.183l-.183.297c.222.155.487.234.758.227.505 0 .798-.238.798-.57s-.23-.47-.61-.523l-.183-.026c-.165-.022-.297-.055-.297-.172s.124-.205.333-.205c.193.002.382.054.55.15l.168-.308zM19.5 20.16c-.186-.005-.368.096-.46.256v-.212h-.377v1.75h.38v-.98c0-.29.124-.45.366-.45a.62.62 0 0 1 .238.044l.117-.366c-.087-.03-.18-.047-.27-.048l.007.007zm-4.906.915c-.01.246.09.492.265.664s.423.265.67.25c.23.012.453-.063.63-.21l-.183-.308a.77.77 0 0 1-.458.158.56.56 0 0 1-.517-.56.56.56 0 0 1 .517-.56.77.77 0 0 1 .458.157l.183-.308c-.176-.146-.4-.22-.63-.21-.246-.014-.493.08-.67.25s-.274.418-.265.664v.007zm3.566 0v-.87h-.38v.212c-.13-.166-.34-.264-.55-.256-.243 0-.476.096-.647.268s-.268.404-.268.647.096.476.268.647.405.268.647.268c.21.008.42-.1.55-.256v.212h.38v-.87zm-1.417 0c.02-.323.338-.557.65-.484a.54.54 0 0 1 .4.422c.056.315-.195.62-.518.622-.3.004-.55-.264-.53-.56zm-4.595-.915c-.243.003-.474.103-.643.277s-.263.408-.26.65.103.474.277.643.408.262.65.26c.263.014.522-.07.727-.238l-.183-.282c-.145.116-.324.18-.51.183-.126.01-.25-.028-.35-.108s-.16-.195-.175-.32h1.3v-.146c0-.55-.34-.915-.83-.915l-.005-.004zm0 .34c.114-.003.227.042.31.12a.44.44 0 0 1 .133.304h-.915a.45.45 0 0 1 .465-.425h.007zm9.54.578V19.5h-.366v.915c-.13-.166-.34-.264-.55-.256-.243 0-.476.096-.647.268s-.268.404-.268.647.096.476.268.647.404.268.647.268c.21.008.42-.1.55-.256v.212h.366v-.868zm.635.62c.046-.001.092.017.126.05s.052.077.052.123-.02.1-.052.123-.08.05-.126.05c-.07-.001-.136-.043-.165-.106-.018-.043-.018-.093 0-.136a.18.18 0 0 1 .095-.091c.017-.007.072-.013.07-.013zm0 .31c.035 0 .07-.015.095-.04s.036-.058.036-.09c0-.05-.03-.1-.078-.12s-.112-.01-.15.03a.14.14 0 0 0 0 .183.14.14 0 0 0 .102.04h-.005zm-1.394-1.414c.315.074.49.43.365.723a.54.54 0 0 1-.484.321.54.54 0 0 1-.501-.347.54.54 0 0 1 .619-.697zm-13.505.484v-.875h-.38v.212c-.065-.083-.148-.15-.244-.194s-.2-.066-.306-.062c-.243 0-.476.096-.647.268s-.268.404-.268.647.096.476.268.647.404.268.647.268c.21.008.42-.1.55-.256v.212h.38v-.868zm-1.417 0c.02-.32.334-.558.65-.484a.54.54 0 0 1 .399.421c.056.315-.194.62-.518.623a.55.55 0 0 1-.535-.56h.004z',
					}),
					index.h('path', {
						d: 'M22.335 21.79c.017-.001.033.002.047.012.005.005.01.01.013.017s.004.014.003.02c-.005.023-.008.028-.013.032-.01.01-.024.015-.038.016l.052.06h-.04l-.048-.06h-.016v.06h-.034v-.158h.075zm-.04.03v.043h.04c.012 0 .023.002.023-.008v-.023c0-.01-.002-.013-.023-.012h-.04z',
					}),
				),
			),
		);
	}
	get host() {
		return index.getElement(this);
	}
	static get watchers() {
		return {
			iconWidth: ['validateWidth'],
		};
	}
};
OntarioIconMastercard.style = ontarioIconCss$5;

const ontarioIconCss$4 =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';

const OntarioIconNotification = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	/**
	 * Watch for changes in the `iconWidth` variable for validation purpose.
	 * If the user input is not a number or is a negative number then `iconWidth` will be set to its default (24).
	 */
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-notification> ')
				.addRegularText(
					`${
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number'
					}; only a positive number is allowed. The default size of`,
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	}
	/**
	 * Watch for changes in the `colour` variable for validation purpose.
	 * If the user input doesn't match one of the enum values then `colour` will be set to its default (`black`).
	 * If a match is found in one of the enum values then `colour` will be set to the matching enum value.
	 */
	validateColour() {
		const isValid = index$1.validateValueAgainstArray(this.colour, index$1.IconColours);
		if (isValid) {
			this.iconColourState = this.colour;
		} else {
			if (index$1.validateColor(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	}
	/**
	 * Print the invalid colour warning message
	 * @returns default colour (black)
	 */
	warnDefaultColour() {
		const message = new consoleMessage.ConsoleMessageClass();
		message
			.addDesignSystemTag()
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
	}
	/**
	 * Stencil component lifecycle method that is called once after the component is first connected to the DOM.
	 */
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	/**
	 * Returns the HTML code to be rendered into a custom element.
	 */
	render() {
		return index.h(
			'div',
			{
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			index.h(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'notification',
				},
				index.h('path', {
					d: 'M21 19v1H3v-1l2-2v-6a6.99 6.99 0 0 1 5-6.71V4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.3A6.99 6.99 0 0 1 19 11v6l2 2zm-7 2a2 2 0 0 1-2 2 2 2 0 0 1-2-2',
				}),
			),
		);
	}
	static get watchers() {
		return {
			iconWidth: ['validateWidth'],
			colour: ['validateColour'],
		};
	}
};
OntarioIconNotification.style = ontarioIconCss$4;

const ontarioIconCss$3 =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';

const OntarioIconPrint = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	/**
	 * Watch for changes in the `iconWidth` variable for validation purpose.
	 * If the user input is not a number or is a negative number then `iconWidth` will be set to its default (24).
	 */
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-print> ')
				.addRegularText(
					`${
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number'
					}; only a positive number is allowed. The default size of`,
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	}
	/**
	 * Watch for changes in the `colour` variable for validation purpose.
	 * If the user input doesn't match one of the enum values then `colour` will be set to its default (`black`).
	 * If a match is found in one of the enum values then `colour` will be set to the matching enum value.
	 */
	validateColour() {
		const isValid = index$1.validateValueAgainstArray(this.colour, index$1.IconColours);
		if (isValid) {
			this.iconColourState = this.colour;
		} else {
			if (index$1.validateColor(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	}
	/**
	 * Print the invalid colour warning message
	 * @returns default colour (black)
	 */
	warnDefaultColour() {
		const message = new consoleMessage.ConsoleMessageClass();
		message
			.addDesignSystemTag()
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
	}
	/**
	 * Stencil component lifecycle method that is called once after the component is first connected to the DOM.
	 */
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	/**
	 * Returns the HTML code to be rendered into a custom element.
	 */
	render() {
		return index.h(
			'div',
			{
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			index.h(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'print',
				},
				index.h('path', {
					d: 'M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z',
				}),
			),
		);
	}
	static get watchers() {
		return {
			iconWidth: ['validateWidth'],
			colour: ['validateColour'],
		};
	}
};
OntarioIconPrint.style = ontarioIconCss$3;

const ontarioIconCss$2 =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';

const OntarioIconSentiment5 = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	/**
	 * Watch for changes in the `iconWidth` variable for validation purpose.
	 * If the user input is not a number or is a negative number then `iconWidth` will be set to its default (24).
	 */
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-sentiment-5> ')
				.addRegularText(
					`${
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number'
					}; only a positive number is allowed. The default size of`,
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	}
	/**
	 * Watch for changes in the `colour` variable for validation purpose.
	 * If the user input doesn't match one of the enum values then `colour` will be set to its default (`black`).
	 * If a match is found in one of the enum values then `colour` will be set to the matching enum value.
	 */
	validateColour() {
		const isValid = index$1.validateValueAgainstArray(this.colour, index$1.IconColours);
		if (isValid) {
			this.iconColourState = this.colour;
		} else {
			if (index$1.validateColor(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	}
	/**
	 * Print the invalid colour warning message
	 * @returns default colour (black)
	 */
	warnDefaultColour() {
		const message = new consoleMessage.ConsoleMessageClass();
		message
			.addDesignSystemTag()
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
	}
	/**
	 * Stencil component lifecycle method that is called once after the component is first connected to the DOM.
	 */
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	/**
	 * Returns the HTML code to be rendered into a custom element.
	 */
	render() {
		return index.h(
			'div',
			{
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			index.h(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'sentiment-5',
				},
				index.h('path', {
					d: 'M12 2a10 10 0 1 0 0 20 10.01 10.01 0 0 0 10-10A10.01 10.01 0 0 0 11.99 2zm0 18a8 8 0 1 1 0-16 8 8 0 1 1 0 16zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7zm8.5-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 1 0 0 3zm-7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 1 0 0 3z',
				}),
			),
		);
	}
	static get watchers() {
		return {
			iconWidth: ['validateWidth'],
			colour: ['validateColour'],
		};
	}
};
OntarioIconSentiment5.style = ontarioIconCss$2;

const ontarioIconCss$1 =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';

const OntarioIconTextMessage = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	/**
	 * Watch for changes in the `iconWidth` variable for validation purpose.
	 * If the user input is not a number or is a negative number then `iconWidth` will be set to its default (24).
	 */
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-text-message> ')
				.addRegularText(
					`${
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number'
					}; only a positive number is allowed. The default size of`,
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	}
	/**
	 * Watch for changes in the `colour` variable for validation purpose.
	 * If the user input doesn't match one of the enum values then `colour` will be set to its default (`black`).
	 * If a match is found in one of the enum values then `colour` will be set to the matching enum value.
	 */
	validateColour() {
		const isValid = index$1.validateValueAgainstArray(this.colour, index$1.IconColours);
		if (isValid) {
			this.iconColourState = this.colour;
		} else {
			if (index$1.validateColor(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	}
	/**
	 * Print the invalid colour warning message
	 * @returns default colour (black)
	 */
	warnDefaultColour() {
		const message = new consoleMessage.ConsoleMessageClass();
		message
			.addDesignSystemTag()
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
	}
	/**
	 * Stencil component lifecycle method that is called once after the component is first connected to the DOM.
	 */
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	/**
	 * Returns the HTML code to be rendered into a custom element.
	 */
	render() {
		return index.h(
			'div',
			{
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			index.h(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'text-message',
				},
				index.h('path', {
					d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z',
				}),
			),
		);
	}
	static get watchers() {
		return {
			iconWidth: ['validateWidth'],
			colour: ['validateColour'],
		};
	}
};
OntarioIconTextMessage.style = ontarioIconCss$1;

const ontarioIconCss =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';

const OntarioIconTransportBus = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	/**
	 * Watch for changes in the `iconWidth` variable for validation purpose.
	 * If the user input is not a number or is a negative number then `iconWidth` will be set to its default (24).
	 */
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-transport-bus> ')
				.addRegularText(
					`${
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number'
					}; only a positive number is allowed. The default size of`,
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	}
	/**
	 * Watch for changes in the `colour` variable for validation purpose.
	 * If the user input doesn't match one of the enum values then `colour` will be set to its default (`black`).
	 * If a match is found in one of the enum values then `colour` will be set to the matching enum value.
	 */
	validateColour() {
		const isValid = index$1.validateValueAgainstArray(this.colour, index$1.IconColours);
		if (isValid) {
			this.iconColourState = this.colour;
		} else {
			if (index$1.validateColor(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	}
	/**
	 * Print the invalid colour warning message
	 * @returns default colour (black)
	 */
	warnDefaultColour() {
		const message = new consoleMessage.ConsoleMessageClass();
		message
			.addDesignSystemTag()
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
	}
	/**
	 * Stencil component lifecycle method that is called once after the component is first connected to the DOM.
	 */
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	/**
	 * Returns the HTML code to be rendered into a custom element.
	 */
	render() {
		return index.h(
			'div',
			{
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			index.h(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'transport-bus',
				},
				index.h('path', {
					d: 'M4 16c0 .88.4 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.6-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 1 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 1 1 0 3zm1.5-6H6V6h12v5z',
				}),
			),
		);
	}
	static get watchers() {
		return {
			iconWidth: ['validateWidth'],
			colour: ['validateColour'],
		};
	}
};
OntarioIconTransportBus.style = ontarioIconCss;

const ontarioInputCss =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1>.ontario-label--heading,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1>.ontario-label--heading,h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1>.ontario-label--heading,h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}.ontario-input:focus,.ontario-input:active{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;font-size:inherit;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-label{cursor:pointer;color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;line-height:1.5;margin:0 0 1rem 0;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-label{font-size:1.125rem;line-height:1.56}}.ontario-label--large{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2;max-width:26.25em}@media screen and (max-width: 40em){.ontario-label--large{font-size:1.4375rem;line-height:1.39}}h1>.ontario-label--heading{display:inline-block;margin:0}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;width:100%;padding:0.625rem 1rem;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;padding:0.625rem 1rem;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out;width:100%}.ontario-input-hint-expander--true{margin-bottom:1rem}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}';

const OntarioInput = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.inputOnChange = index.createEvent(this, 'inputOnChange', 7);
		this.inputOnBlur = index.createEvent(this, 'inputOnBlur', 7);
		this.inputOnFocus = index.createEvent(this, 'inputOnFocus', 7);
		/**
		 * Function to handle input events and the information pertaining to the input to emit.
		 */
		this.handleEvent = (ev, eventType) => {
			const input = ev.target;
			handleInputEvent(
				ev,
				eventType,
				input,
				this.inputOnChange,
				this.inputOnFocus,
				this.inputOnBlur,
				'input',
				this.customOnChange,
				this.customOnFocus,
				this.customOnBlur,
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
	/**
	 * This listens for the `setAppLanguage` event sent from the test language toggler when it is is connected to the DOM. It is used for the initial language when the input component loads.
	 */
	handleSetAppLanguage(event) {
		this.language = index$1.validateLanguage(event);
	}
	handleHeaderLanguageToggled(event) {
		this.language = index$1.validateLanguage(event);
	}
	/*
	 * Watch for changes in the `name` prop for validation purposes.
	 *
	 * Validate the `name` and make sure the `name` prop has a value.
	 * Log a warning if user doesn't input a value for the `name`.
	 */
	validateName(newValue) {
		if (index$1.validatePropExists(newValue)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' name ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-input> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	}
	/**
	 * Watch for changes to the `hintText` prop.
	 *
	 * If a `hintText` prop is passed, the `constructHintTextObject` function will convert it to the correct format, and set the result to the `internalHintText` state.
	 */
	parseHintText() {
		if (this.hintText) {
			const hintTextObject = constructHintTextObject(this.hintText);
			this.internalHintText = hintTextObject;
		}
	}
	/**
	 * Watch for changes to the `hintExpander` prop.
	 *
	 * If a `hintExpander` prop is passed, it will be parsed (if it is a string), and the result will be set to the `internalHintExpander` state.
	 */
	parseHintExpander() {
		const hintExpander = this.hintExpander;
		if (hintExpander) {
			if (typeof hintExpander === 'string') this.internalHintExpander = JSON.parse(hintExpander);
			else this.internalHintExpander = hintExpander;
		}
	}
	/**
	 * Watch for changes to the `caption` prop.
	 *
	 * The caption will be run through the InputCaption constructor to convert it to the correct format, and set the result to the `captionState` state.
	 * @param newValue: Caption | string
	 */
	updateCaptionState(newValue) {
		this.captionState = new InputCaption(
			this.element.tagName,
			newValue,
			translations,
			this.language,
			false,
			this.required,
		);
	}
	/**
	 * Watch for changes in the `language` prop to render either the English or French translations
	 */
	updateLanguage() {
		this.updateCaptionState(this.caption);
	}
	getId() {
		var _a;
		return (_a = this.elementId) !== null && _a !== void 0 ? _a : '';
	}
	getValue() {
		var _a;
		return (_a = this.value) !== null && _a !== void 0 ? _a : '';
	}
	getClass() {
		if (this.hintExpander) {
			return this.inputWidth === 'default'
				? `ontario-input ontario-input-hint-expander--true`
				: `ontario-input ontario-input--${this.inputWidth} ontario-input-hint-expander--true`;
		} else {
			return this.inputWidth === 'default' ? `ontario-input` : `ontario-input ontario-input--${this.inputWidth}`;
		}
	}
	/**
	 * If a `hintText` prop is passed, the id generated from it will be set to the internal `hintTextId` state to match with the input `aria-describedBy` attribute.
	 */
	async componentDidLoad() {
		var _a;
		this.hintTextId = await ((_a = this.hintTextRef) === null || _a === void 0 ? void 0 : _a.getHintTextId());
	}
	componentWillLoad() {
		var _a;
		this.updateCaptionState(this.caption);
		this.elementId = (_a = this.elementId) !== null && _a !== void 0 ? _a : v4();
		this.parseHintText();
		this.parseHintExpander();
		this.validateName(this.name);
		this.language = index$1.validateLanguage(this.language);
	}
	render() {
		return index.h(
			'div',
			{ class: 'ontario-form-group' },
			this.captionState.getCaption(this.getId(), !!this.internalHintExpander),
			this.internalHintText &&
				index.h('ontario-hint-text', {
					hint: this.internalHintText.hint,
					hintContentType: this.internalHintText.hintContentType,
					ref: (el) => (this.hintTextRef = el),
				}),
			index.h(Input, {
				'aria-describedBy': this.hintTextId,
				'className': this.getClass(),
				'id': this.getId(),
				'name': this.name,
				'onInput': (e) => this.handleEvent(e, EventType.Change),
				'onBlur': (e) => this.handleEvent(e, EventType.Blur),
				'onFocus': (e) => this.handleEvent(e, EventType.Focus),
				'type': this.type,
				'value': this.getValue(),
				'required': !!this.required,
			}),
			this.internalHintExpander &&
				index.h('ontario-hint-expander', {
					hint: this.internalHintExpander.hint,
					content: this.internalHintExpander.content,
					hintContentType: this.internalHintExpander.hintContentType,
				}),
		);
	}
	get element() {
		return index.getElement(this);
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
OntarioInput.style = ontarioInputCss;

const ontarioLanguageToggleCss =
	'.ontario-language-toggler:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-language-toggler{background-color:#1a1a1a;border:none;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;color:#FFFFFF;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;height:48px;line-height:1.5555555556;text-align:center;text-decoration:none}.ontario-language-toggler:hover{background-color:#4d4d4d}.ontario-language-toggler:active{background-color:#666666;color:#FFFFFF}.ontario-language-toggler:focus{background-color:#4d4d4d;color:#FFFFFF}.ontario-language-toggler:visited{color:#FFFFFF}.ontario-language-toggler abbr[title]{text-decoration:none}.ontario-language-toggler--default{padding:0.75rem}.ontario-language-toggler--small{font-size:1rem;line-height:1.375rem;height:auto;outline:none;padding:0.5rem 0.75rem}';

const OntarioLanguageToggle = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.setAppLanguage = index.createEvent(this, 'setAppLanguage', 7);
		this.headerLanguageToggled = index.createEvent(this, 'headerLanguageToggled', 7);
		this.updateHTMLLang = (lang) => {
			const htmlElement = document.firstElementChild;
			if ((htmlElement === null || htmlElement === void 0 ? void 0 : htmlElement.tagName.toLowerCase()) === 'html') {
				if (lang) {
					htmlElement.setAttribute('lang', lang);
				} else {
					htmlElement.setAttribute('lang', 'en');
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
	setAppLanguageHandler() {
		let lang;
		if (this.language) {
			lang = this.language;
		} else if (document.documentElement.lang) {
			lang = document.documentElement.lang;
		} else {
			lang = 'en';
		}
		this.language = lang;
		this.setAppLanguage.emit(lang);
		this.updateHTMLLang(lang);
	}
	handleHeaderLanguageToggled(language, e) {
		const toggledLanguage = language === 'en' ? 'fr' : 'en';
		this.language = toggledLanguage;
		this.headerLanguageToggled.emit(toggledLanguage);
		this.updateHTMLLang(toggledLanguage);
		if (this.customLanguageToggle) {
			this.customLanguageToggle(e);
		}
	}
	updateLanguage() {
		this.language = index$1.validateLanguage(this.language);
		this.setAppLanguageHandler();
	}
	connectedCallback() {
		this.updateLanguage();
	}
	render() {
		const language = this.language === 'en' ? 'Français' : 'English';
		const abbreviatedLanguage = this.language === 'en' ? 'FR' : 'EN';
		return index.h(
			'a',
			{
				'class':
					this.size === 'default'
						? 'ontario-language-toggler ontario-language-toggler--default'
						: 'ontario-language-toggler ontario-language-toggler--small',
				'href': this.url ? this.url : '#',
				'aria-label': this.translations.languageToggle.ariaLabel[`${this.language}`],
				'onClick': (e) => this.handleHeaderLanguageToggled(this.language, e),
			},
			this.size === 'small'
				? index.h('span', null, language)
				: index.h(
						index.Fragment,
						null,
						index.h('abbr', { title: language, class: 'ontario-show-for-small-only' }, abbreviatedLanguage),
						index.h('span', { class: 'ontario-show-for-medium' }, language),
				  ),
		);
	}
	static get watchers() {
		return {
			language: ['updateLanguage'],
		};
	}
};
OntarioLanguageToggle.style = ontarioLanguageToggleCss;

const ontarioLoadingIndicatorCss =
	'.ontario-loading-indicator__overlay,.ontario-loading-indicator__overlay--within-container{position:fixed;width:100%;left:0;right:0;top:0;bottom:0;background-color:rgba(255, 255, 255, 0.7);z-index:9999}.ontario-loading-indicator__overlay[aria-hidden=false],.ontario-loading-indicator__overlay--within-container[aria-hidden=false]{display:block}.ontario-loading-indicator__overlay[aria-hidden=true],.ontario-loading-indicator__overlay--within-container[aria-hidden=true]{display:none}.ontario-loading-indicator__overlay--within-container{position:absolute}.ontario-loading-indicator{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:100%;height:100%}.ontario-loading-indicator p{color:#4d4d4d;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;line-height:1.5;font-weight:700;word-spacing:0.025rem;margin:0.75rem 0 0}.ontario-loading-indicator__spinner{-webkit-animation:rotator 1.5s linear infinite;animation:rotator 1.5s linear infinite;width:3rem;height:3rem;overflow:visible}.ontario-loading-indicator__spinner circle{stroke-dasharray:1, 200;stroke-dashoffset:0;stroke-linecap:round;stroke:#4d4d4d;-webkit-animation:dash 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite}@-webkit-keyframes rotator{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotator{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1, 200;stroke-dashoffset:0}50%{stroke-dasharray:89, 200;stroke-dashoffset:-35px}100%{stroke-dasharray:89, 200;stroke-dashoffset:-124px}}@keyframes dash{0%{stroke-dasharray:1, 200;stroke-dashoffset:0}50%{stroke-dasharray:89, 200;stroke-dashoffset:-35px}100%{stroke-dasharray:89, 200;stroke-dashoffset:-124px}}';

const OntarioLoadingIndicator = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.type = 'large';
		this.isLoading = false;
		this.message = undefined;
		this.fullScreenOverlay = true;
		this.language = 'en';
		this.translations = translations;
		this.isLoadingState = undefined;
		this.typeState = undefined;
	}
	/**
	 * This listens for the `setAppLanguage` event sent from the test language toggler when it is is connected to the DOM. It is used for the initial language when the input component loads.
	 */
	handleSetAppLanguage(event) {
		this.language = index$1.validateLanguage(event);
	}
	handleHeaderLanguageToggled(event) {
		this.language = index$1.validateLanguage(event);
	}
	/**
	 * Watch for changes in the `type` variable for validation purposes.
	 *
	 * If the user input doesn't match one of the array values then `type` will be set to its default (`large`).
	 * If a match is found in one of the array values then `type` will be set to the matching array key value.
	 */
	validateType() {
		const isValid = index$1.validateValueAgainstArray(this.type, ['large', 'small']);
		if (isValid) {
			return (this.typeState = this.type);
		} else {
			this.warnDefaultType();
			return (this.typeState = 'large');
		}
	}
	/**
	 * Print the invalid `type` warning message.
	 * @returns default type ('large')
	 */
	warnDefaultType() {
		const message = new consoleMessage.ConsoleMessageClass();
		message
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
		this.language = index$1.validateLanguage(this.language);
		this.validateType();
		this.isLoadingState = this.isLoading;
	}
	render() {
		var _a;
		return this.typeState === 'large'
			? index.h(
					'div',
					{
						'class': this.fullScreenOverlay
							? `ontario-loading-indicator__overlay`
							: `ontario-loading-indicator__overlay--within-container`,
						'aria-hidden': this.isLoadingState ? 'false' : 'true',
						'role': 'alert',
						'aria-live': 'assertive',
					},
					index.h(
						'div',
						{ class: 'ontario-loading-indicator' },
						index.h(
							'svg',
							{
								class: 'ontario-loading-indicator__spinner',
								viewBox: '25 25 50 50',
								xmlns: 'http://www.w3.org/2000/svg',
							},
							index.h('circle', { 'cx': '50', 'cy': '50', 'r': '20', 'fill': 'none', 'stroke-width': '4' }),
						),
						index.h(
							'p',
							null,
							(_a = this.message) !== null && _a !== void 0 ? _a : this.translations.loading[`${this.language}`],
						),
					),
			  )
			: index.h('p', null, 'The small loading indicator is still under development.');
	}
	static get watchers() {
		return {
			type: ['validateType'],
		};
	}
};
OntarioLoadingIndicator.style = ontarioLoadingIndicatorCss;

const ontarioPageAlertCss =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-alert{border-width:0 0 0 0.25rem;border-style:solid;padding:1.5rem;margin:2rem 0 2.5rem 0}.ontario-alert__header{display:-webkit-box;display:-ms-flexbox;display:flex}.ontario-alert__header-icon{display:inline-block;vertical-align:top;margin-right:0.95rem}.ontario-alert__header-title{margin-bottom:0.75rem;padding-top:0.125rem}.ontario-alert__body{margin-left:3.25rem;max-width:48rem}@media screen and (max-width: 40em){.ontario-alert__body{margin-left:0}}.ontario-alert__body p{margin-top:0}.ontario-alert__body p:last-of-type{margin-bottom:0.5rem}.ontario-alert__body p:last-of-type+ul{margin-top:1rem}.ontario-alert__body ul:last-of-type{margin-bottom:0.5rem}.ontario-alert--error ul{margin-left:1.25rem}.ontario-alert--error ul:last-of-type{margin-bottom:0.5rem}.ontario-alert--informational{border-color:#1080A6;background-color:#E2F0F4}.ontario-alert--warning{border-color:#FFD440;background-color:#FEF6DC}.ontario-alert--success{border-color:#118847;background-color:#E5f0E9}.ontario-alert--error{border-color:#CD0000;background-color:#FCEFF0}.ontario-alert--error a{color:#CD0000}.ontario-alert--error a:hover,.ontario-alert--error a:focus{color:#6b0000}.ontario-alert--error a:active{color:#280000}';

const OntarioPageAlert = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.type = 'informational';
		this.heading = undefined;
		this.content = undefined;
	}
	/**
	 * @returns the classes of the page alert container based on the alert `type`.
	 */
	getClass() {
		return `ontario-alert ontario-alert--${this.type}`;
	}
	renderIcon() {
		const iconProps = { 'icon-width': 36 };
		switch (this.type) {
			case 'informational':
				return index.h('ontario-icon-alert-information', Object.assign({}, iconProps));
			case 'success':
				return index.h('ontario-icon-alert-success', Object.assign({}, iconProps));
			case 'warning':
				return index.h('ontario-icon-alert-warning', Object.assign({}, iconProps));
			case 'error':
				return index.h('ontario-icon-alert-error', Object.assign({}, iconProps));
		}
	}
	renderContent() {
		const body = this.content;
		if (typeof body === 'string') {
			return index.h('p', null, body);
		}
		return index.h('slot', null);
	}
	render() {
		return index.h(
			'div',
			{ class: this.getClass() },
			index.h(
				'div',
				{ class: 'ontario-alert__header' },
				index.h('div', { class: 'ontario-alert__header-icon' }, this.renderIcon()),
				index.h('h2', { class: 'ontario-alert__header-title ontario-h4' }, this.heading),
			),
			index.h('div', { class: 'ontario-alert__body' }, this.renderContent()),
		);
	}
};
OntarioPageAlert.style = ontarioPageAlertCss;

const ontarioRadioButtonsCss =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}.ontario-radios__input:focus+.ontario-radios__label:before{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;font-size:inherit;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-radios__item{position:relative;display:block;margin:0 0 1rem;padding:0 2rem 0}.ontario-radios__input{cursor:pointer;margin:0;position:absolute;opacity:0;top:-2px;left:-2px;width:36px;height:36px;z-index:0}@media screen and (max-width: 40em){.ontario-radios__input{width:40px;height:40px;top:-1.5px;left:-1.5px}}.ontario-radios__label{cursor:pointer;color:#1a1a1a;display:inline-block;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:700;line-height:1.5;margin:0.2rem 0;max-width:38.75em;padding:0 0.75rem;-ms-touch-action:manipulation;touch-action:manipulation;white-space:normal;width:auto;white-space:normal}@media screen and (max-width: 40em){.ontario-radios__label{margin:0.3rem 0;padding:0 1rem}}.ontario-radios__label:before{content:"";border:2px solid #1a1a1a;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;top:0;left:0;width:32px;height:32px;-webkit-transition:border 0.1s ease-in-out;transition:border 0.1s ease-in-out}@media screen and (max-width: 40em){.ontario-radios__label:before{width:36px;height:36px}}.ontario-radios__label:after{content:"";border-radius:50%;border:10px solid #1a1a1a;position:absolute;top:0;left:0;-webkit-transform:translate(6px, 6px);transform:translate(6px, 6px);opacity:0}@media screen and (max-width: 40em){.ontario-radios__label:after{border:12px solid #1a1a1a}}.ontario-radios__input:focus+.ontario-radios__label:before{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:#009ADB}.ontario-radios__input:checked+.ontario-radios__label:after{opacity:1}.ontario-radios__hint-expander{margin:0.75rem 0 0 0.5rem}@media screen and (max-width: 40em){.ontario-radios__hint-expander{margin-top:1rem}}';

const OntarioRadioButtons = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.radioOnChange = index.createEvent(this, 'radioOnChange', 7);
		this.radioOnBlur = index.createEvent(this, 'radioOnBlur', 7);
		this.radioOnFocus = index.createEvent(this, 'radioOnFocus', 7);
		/**
		 * Function to handle radio buttons events and the information pertaining to the radio buttons to emit.
		 */
		this.handleEvent = (ev, eventType) => {
			var _a;
			const input = ev.target;
			if (input) {
				input.checked = (_a = input.checked) !== null && _a !== void 0 ? _a : '';
			}
			handleInputEvent(
				ev,
				eventType,
				input,
				this.radioOnChange,
				this.radioOnFocus,
				this.radioOnBlur,
				'radio',
				this.customOnChange,
				this.customOnFocus,
				this.customOnBlur,
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
	/**
	 * This listens for the `setAppLanguage` event sent from the test language toggler when it is is connected to the DOM. It is used for the initial language when the input component loads.
	 */
	handleSetAppLanguage(event) {
		this.language = index$1.validateLanguage(event);
	}
	handleHeaderLanguageToggled(event) {
		this.language = index$1.validateLanguage(event);
	}
	/**
	 * Watch for changes to the `hintText` prop.
	 *
	 * If a `hintText` prop is passed, the `constructHintTextObject` function will convert it to the correct format, and set the result to the `internalHintText` state.
	 */
	parseHintText() {
		if (this.hintText) {
			const hintTextObject = constructHintTextObject(this.hintText);
			this.internalHintText = hintTextObject;
		}
	}
	/**
	 * Watch for changes to the `hintExpander` prop.
	 *
	 * If a `hintExpander` prop is passed, it will be parsed (if it is a string), and the result will be set to the `internalHintExpander` state.
	 */
	parseHintExpander() {
		const hintExpander = this.hintExpander;
		if (hintExpander) {
			if (typeof hintExpander === 'string') this.internalHintExpander = JSON.parse(hintExpander);
			else this.internalHintExpander = hintExpander;
		}
	}
	/**
	 * Watch for changes to the `options` prop.
	 *
	 * If an `options` prop is passed, it will be parsed (if it is a string), and the result will be set to the `internalOptions` state. The result will be run through a validation function.
	 */
	parseOptions() {
		if (typeof this.options !== 'undefined') {
			if (!Array.isArray(this.options)) {
				this.internalOptions = JSON.parse(this.options);
			} else {
				this.internalOptions = this.options;
			}
		}
	}
	/*
	 * Watch for changes in the `name` prop for validation purposes.
	 *
	 * Validate the `name` and make sure the `name` prop has a value.
	 * Log a warning if user doesn't input a value for the `name`.
	 */
	validateName(newValue) {
		if (index$1.validatePropExists(newValue)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' name ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-radio-buttons> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	}
	/*
   * Watch for changes in the `options` prop for validation purposes.

   * Validate the `options` and make sure the `options` prop has a value.
   * Log a warning if user doesn't input a value for the `options`.
   */
	validateOptions(newValue) {
		if (index$1.validateObjectExists(newValue)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' options ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-radio-buttons> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	}
	/**
	 * Watch for changes to the `caption` prop.
	 *
	 * The caption will be run through the InputCaption constructor to convert it to the correct format, and set the result to the `captionState` state.
	 * @param newValue: Caption | string
	 */
	updateCaptionState(newValue) {
		this.captionState = new InputCaption(
			this.element.tagName,
			newValue,
			translations,
			this.language,
			true,
			this.required,
		);
	}
	/**
	 * Watch for changes to the `language` prop to render either the English or French translations
	 */
	updateLanguage() {
		this.updateCaptionState(this.caption);
	}
	/**
	 * If a `hintText` prop is passed, the id generated from it will be set to the internal `hintTextId` state to match with the fieldset `aria-describedBy` attribute.
	 */
	async componentDidLoad() {
		var _a;
		this.hintTextId = await ((_a = this.hintTextRef) === null || _a === void 0 ? void 0 : _a.getHintTextId());
	}
	componentWillLoad() {
		this.updateCaptionState(this.caption);
		this.parseOptions();
		this.parseHintText();
		this.parseHintExpander();
		this.validateName(this.name);
		this.validateOptions(this.internalOptions);
		this.language = index$1.validateLanguage(this.language);
	}
	render() {
		var _a;
		return index.h(
			'div',
			{ class: 'ontario-form-group' },
			index.h(
				'fieldset',
				{ 'class': 'ontario-fieldset', 'aria-describedby': this.hintTextId },
				this.captionState.getCaption(undefined, !!this.internalHintExpander),
				this.internalHintText &&
					index.h('ontario-hint-text', {
						hint: this.internalHintText.hint,
						hintContentType: this.internalHintText.hintContentType,
						ref: (el) => (this.hintTextRef = el),
					}),
				index.h(
					'div',
					{ class: 'ontario-radios' },
					(_a = this.internalOptions) === null || _a === void 0
						? void 0
						: _a.map((radioOption) =>
								index.h(
									'div',
									{ class: 'ontario-radios__item' },
									index.h(Input, {
										className: 'ontario-radios__input',
										id: radioOption.elementId,
										name: this.name,
										type: 'radio',
										value: radioOption.value,
										required: !!this.required,
										onChange: (e) => this.handleEvent(e, EventType.Change),
										onBlur: (e) => this.handleEvent(e, EventType.Blur),
										onFocus: (e) => this.handleEvent(e, EventType.Focus),
									}),
									index.h(
										'label',
										{ class: 'ontario-radios__label', htmlFor: radioOption.elementId },
										radioOption.label,
										radioOption.hintExpander &&
											this.captionState.getHintExpanderAccessibilityText(radioOption.label, true),
									),
									index.h(
										'div',
										{ class: 'ontario-radios__hint-expander' },
										radioOption.hintExpander &&
											index.h('ontario-hint-expander', {
												'hint': radioOption.hintExpander.hint,
												'content': radioOption.hintExpander.content,
												'hintContentType': radioOption.hintExpander.hintContentType,
												'input-exists': true,
											}),
									),
								),
						  ),
					this.internalHintExpander &&
						index.h('ontario-hint-expander', {
							'hint': this.internalHintExpander.hint,
							'content': this.internalHintExpander.content,
							'hintContentType': this.internalHintExpander.hintContentType,
							'input-exists': true,
						}),
				),
			),
		);
	}
	get element() {
		return index.getElement(this);
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
OntarioRadioButtons.style = ontarioRadioButtonsCss;

const ontarioStepIndicatorCss =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-button:focus,.ontario-button:active{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button{border:none;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;display:inline-block;font-size:1.125rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:600;line-height:1.5555555556;margin:0 1.75rem 1.5rem 0;min-width:10rem;padding:0.625rem 1.5rem;text-align:center;text-decoration:none;cursor:pointer}@media screen and (max-width: 40em){.ontario-button{margin-right:0;display:block;width:100%}}.ontario-button .ontario-icon{margin-right:4px}.ontario-button--primary{background-color:#0066CC;color:#FFFFFF}.ontario-button--primary:hover{background-color:#00478F;color:#FFFFFF}.ontario-button--primary:focus{background-color:#00478F;color:#FFFFFF;-webkit-transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--primary:active{background-color:#002142;color:#FFFFFF;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--primary:visited{color:#FFFFFF}.ontario-button--secondary{background-color:#FFFFFF;border:2px solid #0066CC;color:#0066CC;padding-top:0.5rem;padding-bottom:0.5rem}.ontario-button--secondary:hover{background-color:#e0f0ff;border-color:#00478F;color:#00478F}.ontario-button--secondary:focus{background-color:#e0f0ff;border-color:#00478F;color:#00478F;-webkit-transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--secondary:active{background-color:#c2e0ff;border-color:#002142;color:#002142;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--secondary:visited{color:#0066CC}.ontario-button--tertiary{background-color:transparent;color:#0066CC;text-decoration:underline}.ontario-button--tertiary:hover{background-color:#e8e8e8;color:#00478F;text-decoration:underline}.ontario-button--tertiary:focus{background-color:#e8e8e8;color:#00478F;text-decoration:underline;-webkit-transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--tertiary:active{background-color:#d1d1d1;color:#002142;text-decoration:underline;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--tertiary:visited{color:#0066CC}.ontario-button--internalThemeDark{background-color:#1a1a1a;border:2px solid #FFFFFF;color:#FFFFFF}.ontario-button--internalThemeDark:hover{background-color:#4d4d4d}.ontario-button--internalThemeDark:focus{background-color:#4d4d4d;-webkit-transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--internalThemeDark:active{background-color:#4d4d4d;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--internalThemeDark:visited{color:#0066CC}.ontario-step-indicator .ontario-step-indicator--with-back-button--false,.ontario-step-indicator .ontario-step-indicator--with-back-button--true{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.ontario-step-indicator .ontario-step-indicator--with-back-button--false{-ms-flex-pack:end;justify-content:flex-end}.ontario-step-indicator .ontario-h4{margin:1.125rem 0}@media screen and (max-width: 40em){.ontario-step-indicator .ontario-h4{margin:1rem 0;text-align:right}}.ontario-step-indicator .ontario-button.ontario-button--tertiary{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:0.75rem 0;padding-left:0.5rem;padding-right:1rem;min-width:3rem}@media screen and (max-width: 40em){.ontario-step-indicator .ontario-button.ontario-button--tertiary{width:unset}}.ontario-step-indicator .ontario-button.ontario-button--tertiary .ontario-icon{margin:0 0.375rem 0 0;padding:0;min-width:24px;min-height:24px}.ontario-step-indicator hr{padding:0;margin:0}';

const OntarioStepIndicator = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.showBackButton = false;
		this.backButtonUrl = undefined;
		this.currentStep = undefined;
		this.numberOfSteps = undefined;
		this.percentageComplete = undefined;
		this.customOnClick = undefined;
		this.language = 'en';
		this.translations = translations;
	}
	/**
	 * This listens for the `setAppLanguage` event sent from the test language toggler when it is is connected to the DOM. It is used for the initial language when the input component loads.
	 */
	handleSetAppLanguage(event) {
		this.language = index$1.validateLanguage(event);
	}
	handleHeaderLanguageToggled(event) {
		this.language = index$1.validateLanguage(event);
	}
	componentWillLoad() {
		this.language = index$1.validateLanguage(this.language);
	}
	render() {
		return index.h(
			'div',
			{ class: 'ontario-step-indicator' },
			index.h(
				'div',
				{ class: 'ontario-row' },
				index.h(
					'div',
					{ class: 'ontario-columns ontario-small-12' },
					index.h(
						'div',
						{ class: `ontario-step-indicator--with-back-button--${this.showBackButton}` },
						this.showBackButton === true &&
							this.customOnClick &&
							!this.backButtonUrl &&
							index.h(
								'button',
								{
									class: 'ontario-button ontario-button--tertiary',
									onClick: (e) => this.customOnClick && this.customOnClick(e),
								},
								index.h('ontario-icon-chevron-left', { colour: 'blue' }),
								this.translations.stepIndicator.back[`${this.language}`],
							),
						this.showBackButton === true &&
							!this.customOnClick &&
							this.backButtonUrl &&
							index.h(
								'a',
								{ class: 'ontario-button ontario-button--tertiary', href: this.backButtonUrl },
								index.h('ontario-icon-chevron-left', { colour: 'blue' }),
								this.translations.stepIndicator.back[`${this.language}`],
							),
						this.percentageComplete
							? index.h(
									'span',
									{ class: 'ontario-h4' },
									this.percentageComplete,
									'\u00A0% ',
									this.translations.stepIndicator.complete[`${this.language}`],
							  )
							: index.h(
									'span',
									{ class: 'ontario-h4' },
									this.translations.stepIndicator.step[`${this.language}`],
									'\u00A0 ',
									this.currentStep,
									' ',
									this.translations.stepIndicator.of[`${this.language}`],
									'\u00A0 ',
									this.numberOfSteps,
							  ),
					),
					index.h('hr', null),
				),
			),
		);
	}
	get host() {
		return index.getElement(this);
	}
};
OntarioStepIndicator.style = ontarioStepIndicatorCss;

const ontarioTextareaCss =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1>.ontario-label--heading,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1>.ontario-label--heading,h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1>.ontario-label--heading,h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}.ontario-textarea:focus,.ontario-textarea:active,.ontario-input:focus,.ontario-input:active{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;font-size:inherit;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-label{cursor:pointer;color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;line-height:1.5;margin:0 0 1rem 0;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-label{font-size:1.125rem;line-height:1.56}}.ontario-label--large{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2;max-width:26.25em}@media screen and (max-width: 40em){.ontario-label--large{font-size:1.4375rem;line-height:1.39}}h1>.ontario-label--heading{display:inline-block;margin:0}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;width:100%;padding:0.625rem 1rem;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-textarea{border:2px solid #1a1a1a;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#1a1a1a;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;display:block;max-width:48rem;min-height:144px;margin:0 0 2.5rem;padding:0.625rem 1rem;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out;white-space:pre-wrap;width:100%}.ontario-textarea.ontario-textarea-hint-expander--true{margin-bottom:1rem}';

const OntarioTextarea = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.inputOnChange = index.createEvent(this, 'inputOnChange', 7);
		this.inputOnBlur = index.createEvent(this, 'inputOnBlur', 7);
		this.inputOnFocus = index.createEvent(this, 'inputOnFocus', 7);
		/**
		 * Function to handle textarea events and the information pertaining to the textarea to emit.
		 */
		this.handleEvent = (ev, eventType) => {
			const input = ev.target;
			handleInputEvent(
				ev,
				eventType,
				input,
				this.inputOnChange,
				this.inputOnFocus,
				this.inputOnBlur,
				'input',
				this.customOnChange,
				this.customOnFocus,
				this.customOnBlur,
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
	/**
	 * This listens for the `setAppLanguage` event sent from the test language toggler when it is is connected to the DOM. It is used for the initial language when the textarea component loads.
	 */
	handleSetAppLanguage(event) {
		this.language = index$1.validateLanguage(event);
	}
	handleHeaderLanguageToggled(event) {
		this.language = index$1.validateLanguage(event);
	}
	/**
	 * Watch for changes to the `hintText` prop.
	 *
	 * If a `hintText` prop is passed, the `constructHintTextObject` function will convert it to the correct format, and set the result to the `internalHintText` state.
	 */
	parseHintText() {
		if (this.hintText) {
			const hintTextObject = constructHintTextObject(this.hintText);
			this.internalHintText = hintTextObject;
		}
	}
	/**
	 * Watch for changes to the `hintExpander` prop.
	 *
	 * If a `hintExpander` prop is passed, it will be parsed (if it is a string), and the result will be set to the `internalHintExpander` state.
	 */
	parseHintExpander() {
		const hintExpander = this.hintExpander;
		if (hintExpander) {
			if (typeof hintExpander === 'string') this.internalHintExpander = JSON.parse(hintExpander);
			else this.internalHintExpander = hintExpander;
		}
	}
	/*
	 * Watch for changes in the `name` prop for validation purposes.
	 *
	 * Validate the `name` and make sure the `name` prop has a value.
	 * Log a warning if user doesn't input a value for the `name`.
	 */
	validateName(newValue) {
		if (index$1.validatePropExists(newValue)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' name ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-textarea> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	}
	/**
	 * Watch for changes to the `caption` prop.
	 *
	 * The caption will be run through the InputCaption constructor to convert it to the correct format, and set the result to the `captionState` state.
	 * @param newValue: Caption | string
	 */
	updateCaptionState(newValue) {
		this.captionState = new InputCaption(
			this.element.tagName,
			newValue,
			translations,
			this.language,
			false,
			this.required,
		);
	}
	/**
	 * Watch for changes to the `language` prop to render either the English or French translations
	 */
	updateLanguage() {
		this.updateCaptionState(this.caption);
	}
	getId() {
		var _a;
		return (_a = this.elementId) !== null && _a !== void 0 ? _a : '';
	}
	getValue() {
		var _a;
		return (_a = this.value) !== null && _a !== void 0 ? _a : '';
	}
	getClass() {
		return this.hintExpander ? `ontario-textarea ontario-textarea-hint-expander--true` : `ontario-textarea`;
	}
	/**
	 * If a `hintText` prop is passed, the id generated from it will be set to the internal `hintTextId` state to match with the textarea `aria-describedBy` attribute.
	 */
	async componentDidLoad() {
		var _a;
		this.hintTextId = await ((_a = this.hintTextRef) === null || _a === void 0 ? void 0 : _a.getHintTextId());
	}
	componentWillLoad() {
		var _a;
		this.updateCaptionState(this.caption);
		this.elementId = (_a = this.elementId) !== null && _a !== void 0 ? _a : v4();
		this.parseHintText();
		this.parseHintExpander();
		this.validateName(this.name);
		this.language = index$1.validateLanguage(this.language);
	}
	render() {
		return index.h(
			'div',
			{ class: 'ontario-form-group' },
			this.captionState.getCaption(this.getId(), !!this.internalHintExpander),
			this.internalHintText &&
				index.h('ontario-hint-text', {
					hint: this.internalHintText.hint,
					hintContentType: this.internalHintText.hintContentType,
					ref: (el) => (this.hintTextRef = el),
				}),
			index.h('textarea', {
				'aria-describedby': this.hintTextId,
				'class': this.getClass(),
				'id': this.getId(),
				'name': this.name,
				'value': this.getValue(),
				'onInput': (e) => this.handleEvent(e, EventType.Change),
				'onBlur': (e) => this.handleEvent(e, EventType.Blur),
				'onFocus': (e) => this.handleEvent(e, EventType.Focus),
				'required': !!this.required,
			}),
			this.internalHintExpander &&
				index.h('ontario-hint-expander', {
					'hint': this.internalHintExpander.hint,
					'content': this.internalHintExpander.content,
					'hintContentType': this.internalHintExpander.hintContentType,
					'input-exists': true,
				}),
		);
	}
	get element() {
		return index.getElement(this);
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
OntarioTextarea.style = ontarioTextareaCss;

exports.ontario_aside = OntarioAside;
exports.ontario_back_to_top = OntarioBackToTop;
exports.ontario_blockquote = OntarioBlockquote;
exports.ontario_button = OntarioButton;
exports.ontario_callout = OntarioCallout;
exports.ontario_checkboxes = OntarioCheckboxes;
exports.ontario_critical_alert = OntarioCriticalAlert;
exports.ontario_dropdown_list = OntarioDropdownList;
exports.ontario_fieldset = OntarioFieldset;
exports.ontario_footer = OntarioFooter;
exports.ontario_header = OntarioHeader;
exports.ontario_hint_expander = OntarioHintExpander;
exports.ontario_hint_text = OntarioHintText;
exports.ontario_icon_accessibility = OntarioIconAccessibility;
exports.ontario_icon_alert_error = OntarioIconAlertError;
exports.ontario_icon_alert_information = OntarioIconAlertInformation;
exports.ontario_icon_alert_success = OntarioIconAlertSuccess;
exports.ontario_icon_alert_warning = OntarioIconAlertWarning;
exports.ontario_icon_camera = OntarioIconCamera;
exports.ontario_icon_chevron_down = OntarioIconChevronDown;
exports.ontario_icon_chevron_left = OntarioIconChevronLeft;
exports.ontario_icon_chevron_up = OntarioIconChevronUp;
exports.ontario_icon_email = OntarioIconEmail;
exports.ontario_icon_help = OntarioIconHelp;
exports.ontario_icon_mastercard = OntarioIconMastercard;
exports.ontario_icon_notification = OntarioIconNotification;
exports.ontario_icon_print = OntarioIconPrint;
exports.ontario_icon_sentiment_5 = OntarioIconSentiment5;
exports.ontario_icon_text_message = OntarioIconTextMessage;
exports.ontario_icon_transport_bus = OntarioIconTransportBus;
exports.ontario_input = OntarioInput;
exports.ontario_language_toggle = OntarioLanguageToggle;
exports.ontario_loading_indicator = OntarioLoadingIndicator;
exports.ontario_page_alert = OntarioPageAlert;
exports.ontario_radio_buttons = OntarioRadioButtons;
exports.ontario_step_indicator = OntarioStepIndicator;
exports.ontario_textarea = OntarioTextarea;
