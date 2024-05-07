import { r as t, h as o, g as i, c as e, d as a, F as n } from './p-14fa9399.js';
import { v as r, a as l, b as s, c as d, I as h, l as m } from './p-314395de.js';
import { C as c, a as g } from './p-55c48d50.js';
const p = { en: 'required', fr: 'obligatoire' };
const u = { en: 'optional', fr: 'facultative' };
const f = {
	moreInfo: { en: 'More information on', fr: 'Des renseignements supplémentaires sur' },
	checkboxHintExpander: {
		en: 'is available after the last checkbox item.',
		fr: 'suivront à la dernière case à cocher.',
	},
	singleHintExpander: { en: 'field is available in the next element.', fr: 'suivront au prochain élément.' },
};
const b = {
	top: { en: 'Top', fr: 'Haut' },
	ariaLabel: { en: 'Scroll back to the top', fr: 'Retour en haut de la page' },
};
const w = { en: 'Loading', fr: 'Chargement' };
const v = { select: { en: 'Select', fr: 'Sélectionner' } };
const x = { en: 'Contact us', fr: 'Contactez-nous' };
const _ = {
	text: { en: 'Accessibility', fr: 'Accessibilité' },
	link: { en: 'https://www.ontario.ca/page/accessibility', fr: 'https://www.ontario.ca/fr/page/accessibilite' },
};
const y = {
	text: { en: 'Privacy', fr: 'Confidentialité' },
	link: {
		en: 'https://www.ontario.ca/page/privacy-statement',
		fr: 'https://www.ontario.ca/fr/page/declaration-concernant-la-protection-de-la-vie-privee',
	},
};
const F = {
	text: { en: "King's Printer for Ontario,", fr: 'Imprimeur du Roi pour l’Ontario,' },
	link: {
		en: 'https://www.ontario.ca/page/copyright-information',
		fr: 'https://www.ontario.ca/fr/page/droits-dauteur',
	},
};
const k = { ariaLabel: { en: 'Click to switch language to French', fr: 'Cliquez pour changer de langue en anglais' } };
const z = {
	back: { en: 'Back', fr: 'Retour' },
	step: { en: 'Step', fr: 'Étape' },
	of: { en: 'of', fr: 'sur' },
	complete: { en: 'complete', fr: 'complet' },
};
const C = {
	ontarioSearchURL: {
		en: 'https://www.ontario.ca/search/search-results?query=',
		fr: 'https://www.ontario.ca/fr/recherche/resultats-de-recherche/?query=',
	},
	logoLink: {
		en: 'https://www.ontario.ca/page/government-ontario',
		fr: 'https://www.ontario.ca/fr/page/gouvernement-de-lontario',
	},
	logoAltText: { en: 'Ontario.ca homepage', fr: 'Page d’accueil Ontario.ca' },
	clearSearchField: { en: 'Clear field', fr: 'Vider le champ' },
	submit: { en: 'Submit', fr: 'Soumission' },
	search: { en: 'Search', fr: 'Rechercher' },
	serviceOntario: { en: 'ServiceOntario', fr: 'ServiceOntario' },
	openMenu: { en: 'Show navigation menu', fr: 'Ouvrir le menu de navigation' },
	closeMenu: { en: 'Hide navigation menu', fr: 'Fermer le menu de navigation' },
	close: { en: 'close', fr: 'fermer' },
	closeSearch: { en: 'Close search bar', fr: 'Fermer la barre de recherche' },
};
const A = { requiredFieldError: { en: 'This is a required field.', fr: 'Ce champ est obligatoire.' } };
const H = {
	caption: { en: 'Exact date', fr: 'Dates exactes' },
	day: { label: { en: 'Day', fr: 'Jour' }, accessibility: { en: '4 digits', fr: '4 chiffres' } },
	month: { label: { en: 'Month', fr: 'Mois' }, accessibility: { en: '1 or 2 digits', fr: '1 ou 2 chiffres' } },
	year: { label: { en: 'Year', fr: 'Année' }, accessibility: { en: '1 or 2 digits', fr: '1 ou 2 chiffres' } },
	error: {
		en: {
			emptyDay: 'Enter the day.',
			emptyMonth: 'Enter the month.',
			emptyYear: 'Enter the year.',
			emptyDayAndMonth: 'Enter the month and day.',
			emptyDayAndYear: 'Enter the year and day.',
			emptyMonthAndYear: 'Enter the year and month.',
			invalidDate: 'Enter a valid date.',
			invalidDay: 'Enter a valid day.',
			invalidMonth: 'Enter a valid month.',
			invalidYear: 'Enter a valid year.',
		},
		fr: {
			emptyDay: 'Saisissez le jour.',
			emptyMonth: 'Saisissez le mois.',
			emptyYear: 'Saisissez l’année.',
			emptyDayAndMonth: 'Saisissez le mois et le jour.',
			emptyDayAndYear: 'Saisissez l’année et le jour.',
			emptyMonthAndYear: 'Saisissez l’année et le mois.',
			invalidDate: 'Saisissez une date valide.',
			invalidDay: 'Saisissez un jour valide.',
			invalidMonth: 'Saisissez un mois valide.',
			invalidYear: 'Saisissez une année valide.',
		},
	},
};
const N = {
	expand: { en: 'Expand all', fr: 'Agrandir tout' },
	collapse: { en: 'Collapse all', fr: 'Réduire tout' },
	expandCollapseAriaLabel: { en: 'Expand or collapse the accordion', fr: "Agrandissez ou réduisez l'accordéon" },
};
const T = {
	required: p,
	optional: u,
	accessibility: f,
	backToTop: b,
	loading: w,
	dropdownList: v,
	contactUs: x,
	accessibilityLink: _,
	privacyLink: y,
	printerLink: F,
	languageToggle: k,
	stepIndicator: z,
	header: C,
	input: A,
	dateInput: H,
	accordion: N,
};
const L =
	'.ontario-accordion__button--expand-all:focus,.ontario-accordion__button:focus{box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:box-shadow 0.1s ease-in-out}.ontario-accordion__button{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}.ontario-accordion__button{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){.ontario-accordion__button{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}.ontario-accordions__container{max-width:48rem;width:100%}.ontario-accordion{border-top:2px solid #cccccc}.ontario-accordion:last-of-type{border-bottom:2px solid #cccccc}.ontario-accordion__controls{display:flex;justify-content:flex-end}.ontario-accordion__button,.ontario-accordion__button--expand-all{background:none;border:0;box-sizing:border-box}.ontario-accordion__button--expand-all{font-size:1rem;margin-bottom:0.5rem;color:#0066CC;cursor:pointer}.ontario-accordion__button--expand-all:focus,.ontario-accordion__button--expand-all:hover{color:#00478F;text-decoration:underline}.ontario-accordion__button--expand-all:active{color:#002142;text-decoration:underline}.ontario-accordion--expand-close-all{display:none}.ontario-accordion__controls--active .ontario-accordion--expand-close-all{display:block}.ontario-accordion__controls--active .ontario-accordion--expand-open-all{display:none}.ontario-accordion__button{display:flex;align-items:flex-start;color:#0066CC;cursor:pointer;padding:0.75rem 0.5rem;text-align:left;width:100%;margin-bottom:0}.ontario-accordion__button .ontario-accordion__button-icon--close,.ontario-accordion__button .ontario-accordion__button-icon--open{margin-right:0.5rem}.ontario-accordion__button .ontario-icon{width:1.75rem;height:1.75rem}.ontario-accordion__button:focus,.ontario-accordion__button:hover{background-color:#f2f2f2;color:#00478F}.ontario-accordion__button:focus{box-shadow:0 0 0 4px #009ADB inset}.ontario-accordion__button:active{color:#002142}.ontario-accordion__content{display:none;padding:0.75rem 0.75rem 2rem 0.75rem;margin-left:0}@media screen and (min-width: 40em){.ontario-accordion__content{margin-left:2rem}}.ontario-accordion__content *{margin-top:0;max-width:48rem;width:100%}.ontario-accordion__content ul,.ontario-accordion__content ol{max-width:calc(100% - 3rem)}.ontario-accordion__content>:last-child{margin-bottom:0}.ontario-accordion__button-icon--close,.ontario-expander--active .ontario-accordion__button-icon--open{display:none}.ontario-expander--active~.ontario-accordion__content,.ontario-expander--active .ontario-accordion__button-icon--close{display:block}.ontario-accordions__container .ontario-h1,.ontario-accordions__container .ontario-h2,.ontario-accordions__container .ontario-h3,.ontario-accordions__container .ontario-h4,.ontario-accordions__container .ontario-h5,.ontario-accordions__container p,.ontario-accordions__container h1,.ontario-accordions__container h2,.ontario-accordions__container h3,.ontario-accordions__container h4,.ontario-accordions__container h5,.ontario-accordions__container h6{margin:0}';
const O = L;
const S = class {
	constructor(o) {
		t(this, o);
		this.name = undefined;
		this.expandCollapseButton = undefined;
		this.accordionData = undefined;
		this.isOpen = false;
		this.language = undefined;
		this.translations = T;
		this.expandCollapseLabel = undefined;
		this.internalExpandCollapseLabelDetails = undefined;
		this.internalAccordionData = [];
		this.openAccordionIndexes = [];
	}
	handleSetAppLanguage(t) {
		if (!this.language) {
			this.language = r(t);
		}
	}
	handleHeaderLanguageToggled(t) {
		this.language = r(t);
	}
	parseAccordionData() {
		if (typeof this.accordionData !== 'undefined') {
			this.internalAccordionData = Array.isArray(this.accordionData)
				? this.accordionData
				: JSON.parse(this.accordionData);
		}
		this.updateLabel();
	}
	parseExpandCollapseButtonDetails() {
		if (typeof this.expandCollapseButton !== 'undefined') {
			this.internalExpandCollapseLabelDetails =
				typeof this.expandCollapseButton === 'string'
					? JSON.parse(this.expandCollapseButton)
					: this.expandCollapseButton;
		}
	}
	toggleAccordion(t) {
		if (this.openAccordionIndexes.includes(t)) {
			this.openAccordionIndexes = this.openAccordionIndexes.filter((o) => o !== t);
		} else {
			this.openAccordionIndexes = [...this.openAccordionIndexes, t];
		}
		this.updateLabel();
	}
	toggleAll() {
		if (this.openAccordionIndexes.length === this.internalAccordionData.length) {
			this.openAccordionIndexes = [];
		} else {
			this.openAccordionIndexes = this.internalAccordionData.map((t, o) => o);
		}
		this.updateLabel();
	}
	updateLabel() {
		const t = this.internalAccordionData.every((t, o) => this.openAccordionIndexes.includes(o));
		if (t) {
			this.expandCollapseLabel = 'collapse';
		} else {
			this.expandCollapseLabel = 'expand';
		}
	}
	componentWillLoad() {
		this.parseAccordionData();
		this.parseExpandCollapseButtonDetails();
		this.language = r(this.language);
	}
	render() {
		var t, i, e, a, n, r;
		return o(
			'div',
			{ key: '3d024ea02e809459320c06b2952a45dcddba4f46' },
			o('h2', { key: 'e12b9f0940111c6467a5451fe9bd4fbd2bd5ffc3' }, this.name),
			o(
				'div',
				{ key: '52cb77f0c1b3df890b65fad742b94d7e353e8bd3', class: 'ontario-accordions__container' },
				o(
					'div',
					{ key: '7c19c5bec0ff393075ffde690770a9e77f9c8eb9', class: 'ontario-accordion__controls' },
					o(
						'button',
						{
							'key': 'dfc002b4a720909c9284827fcd86f85b9598ee33',
							'class': 'ontario-accordion__button--expand-all',
							'onClick': () => this.toggleAll(),
							'aria-expanded':
								this.openAccordionIndexes.length === this.internalAccordionData.length ? 'true' : 'false',
							'aria-label':
								(t = this.internalExpandCollapseLabelDetails) === null || t === void 0 ? void 0 : t.ariaLabelText,
						},
						o(
							'span',
							{ key: '302cb41727337a1ae7156b3aa6f3d145c726e611', class: 'ontario-accordion--expand-open-all' },
							this.expandCollapseLabel === 'expand'
								? o(
										'div',
										null,
										(e =
											(i = this.internalExpandCollapseLabelDetails) === null || i === void 0
												? void 0
												: i.expandAllSectionsLabel) !== null && e !== void 0
											? e
											: this.translations.accordion.expand[`${this.language}`],
								  )
								: o(
										'div',
										null,
										(n =
											(a = this.internalExpandCollapseLabelDetails) === null || a === void 0
												? void 0
												: a.collapseAllSectionsLabel) !== null && n !== void 0
											? n
											: this.translations.accordion.collapse[`${this.language}`],
								  ),
						),
					),
				),
				(r = this.internalAccordionData) === null || r === void 0
					? void 0
					: r.map((t, i) =>
							o(
								'div',
								{
									class: `ontario-accordion ${this.openAccordionIndexes.includes(i) ? 'open' : ''}`,
									key: `accordion-${i}`,
								},
								o(
									'h3',
									{
										class: `ontario-accordion__heading ${
											this.openAccordionIndexes.includes(i) ? 'ontario-expander--active' : ''
										}`,
									},
									o(
										'button',
										{
											'class': 'ontario-accordion__button',
											'aria-expanded': this.openAccordionIndexes.includes(i) ? 'true' : 'false',
											'data-toggle': 'ontario-collapse',
											'onClick': () => this.toggleAccordion(i),
											'aria-label': t.ariaLabelText,
										},
										o(
											'span',
											{ class: 'ontario-accordion__button-icon--close' },
											o('ontario-icon-chevron-up', { colour: 'blue' }),
										),
										o(
											'span',
											{ class: 'ontario-accordion__button-icon--open' },
											o('ontario-icon-chevron-down', { colour: 'blue' }),
										),
										t.label,
									),
								),
								o(
									'section',
									{
										'class': `ontario-accordion__content ${
											this.openAccordionIndexes.includes(i)
												? 'ontario-accordion__content--opened'
												: 'ontario-accordion__content--closed'
										}`,
										'aria-hidden': !this.openAccordionIndexes.includes(i),
										'data-toggle': 'ontario-expander-content',
									},
									t.accordionContentType === 'html' ? o('div', { innerHTML: t.content }) : o('div', null, t.content),
								),
							),
					  ),
			),
		);
	}
	get host() {
		return i(this);
	}
	static get watchers() {
		return { accordionData: ['parseAccordionData'], expandCollapseButton: ['parseExpandCollapseButtonDetails'] };
	}
};
S.style = O;
const D = ['h2', 'h3', 'h4', 'h5', 'h6'];
const $ = ['teal', 'gold', 'yellow', 'taupe', 'green', 'lime', 'sky', 'blue', 'purple'];
const B = ['string', 'html'];
const M = (t) => $.includes(t);
const I = (t) => D.includes(t);
const W = (t, o) => {
	const i = t === 'callout' ? `ontario-callout` : `ontario-aside`;
	const e = `ontario-border-highlight--${o}`;
	return o ? `${i} ${e}` : `${i}`;
};
const E = (t, i, e, a) => {
	const n = e === 'html';
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
};
const q = (t, i, e, a, n, r) => {
	const l = typeof n === 'string';
	return t === 'callout'
		? o('div', { class: W(t, r) }, E(t, i, e, a), l ? o('p', null, n) : o('slot', null))
		: o('aside', { class: W(t, r) }, E(t, i, e, a), l ? o('p', null, n) : o('slot', null));
};
const V =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul[class*=columns-] li:last-child,ol[class*=columns-] li:last-child{padding-bottom:0.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-aside{border-left:0.25rem solid #367A76;padding:1.5rem;margin:2rem 0 2.5rem 2rem}.ontario-aside *{max-width:48rem}.ontario-aside *:last-child{margin-bottom:0.5rem}@media screen and (max-width: 40em){.ontario-aside .ontario-aside{margin:2rem 0 2.5rem 1rem}}.ontario-aside__title{margin:0 0 1rem}.ontario-border-highlight--teal{border-color:#367A76 !important}.ontario-border-highlight--gold{border-color:#86743D !important}.ontario-border-highlight--yellow{border-color:#8A600D !important}.ontario-border-highlight--taupe{border-color:#7B725C !important}.ontario-border-highlight--green{border-color:#2B8737 !important}.ontario-border-highlight--lime{border-color:#5F8129 !important}.ontario-border-highlight--sky{border-color:#1080A6 !important}.ontario-border-highlight--blue{border-color:#0369ac !important}.ontario-border-highlight--purple{border-color:#92278F !important}';
const R = V;
const j = class {
	constructor(o) {
		t(this, o);
		this.headingType = undefined;
		this.headingContentType = undefined;
		this.headingContent = undefined;
		this.content = undefined;
		this.highlightColour = 'teal';
	}
	validateHeadingType() {
		if (I(this.headingType)) return this.headingType;
		const t = new c();
		return t
			.addDesignSystemTag()
			.addMonospaceText(` headingType ${this.headingType} `)
			.addRegularText('for')
			.addMonospaceText(' <ontario-aside> ')
			.addRegularText('is not a valid type. Please ensure your heading type matches one of the headingType types.')
			.printMessage();
	}
	validateHeadingContentType() {
		const t = l(this.headingContentType, B);
		if (t) {
			return this.headingContentType;
		} else {
			return this.warnDefaultType();
		}
	}
	validateHeadingContent() {
		if (!this.headingContent) {
			const t = new c();
			t.addDesignSystemTag()
				.addMonospaceText(' headingContent ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-aside> ')
				.addRegularText('was not provided.')
				.printMessage();
		}
	}
	validateHighlightColour() {
		if (this.highlightColour) {
			if (M(this.highlightColour)) return this.highlightColour;
			else {
				const t = new c();
				t.addDesignSystemTag()
					.addMonospaceText(` highlightColour ${this.highlightColour} `)
					.addRegularText('for')
					.addMonospaceText(' <ontario-aside> ')
					.addRegularText(
						'does not match one of the valid highlightColour types. A default colour of `teal` will be applied.',
					)
					.printMessage();
			}
		}
		return 'teal';
	}
	warnDefaultType() {
		const t = new c();
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
	}
	componentWillLoad() {
		this.validateHighlightColour();
		this.validateHeadingContent();
		this.validateHeadingType();
		this.validateHeadingContentType();
	}
	render() {
		return q(
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
j.style = R;
const Y = `<svg class="ontario-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>\n`;
const P =
	'.ontario-back-to-top,.ontario-back-to-top--default{position:fixed;bottom:5%;right:2%;visibility:hidden;opacity:0;transition:0.1s ease-in-out;display:flex;justify-content:center;align-items:center;height:3rem;padding:0.5rem 1rem 0.5rem 0.75rem;background:#e6e6e6;border:0.125rem solid #FFFFFF;border-radius:4px;box-shadow:0 0.125rem 0.25rem rgba(26, 26, 26, 0.6);box-sizing:border-box;color:#1a1a1a;line-height:1.25rem;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:600;z-index:10000;cursor:pointer}.ontario-back-to-top .ontario-icon,.ontario-back-to-top--default .ontario-icon{margin:0.125rem 0.5rem 0 0;width:2rem;height:2rem}.ontario-back-to-top:hover,.ontario-back-to-top--default:hover{background-color:#cccccc}.ontario-back-to-top:focus,.ontario-back-to-top--default:focus{background-color:#e6e6e6;box-shadow:0 0 0 0.25rem #009ADB, 0 0.1875rem 0.3125rem 0.1875rem rgba(0, 0, 0, 0.6);outline:0.25rem solid transparent;transition:0.1s ease-in-out}.ontario-back-to-top:active,.ontario-back-to-top--default:active{background-color:#b2b2b2;box-shadow:0 0 0 0.25rem #009ADB, 0 0.3125rem 0.4375rem 0.1875rem rgba(0, 0, 0, 0.6);outline:0.25rem solid transparent;transition:background-color 0s, box-shadow 0.1s ease-in-out}@media screen and (max-width: 73em){.ontario-back-to-top,.ontario-back-to-top--default{flex-direction:column;height:4.75rem;padding:0.375rem 0.75rem 0.5625rem 0.75rem}.ontario-back-to-top .ontario-icon,.ontario-back-to-top--default .ontario-icon{margin:0.0625rem 0 0.25rem 0;width:2rem;height:2rem}}@media screen and (max-width: 40em){.ontario-back-to-top,.ontario-back-to-top--default{display:block;padding:0.25rem;font-size:0;width:3rem;height:3rem}.ontario-back-to-top .ontario-icon,.ontario-back-to-top--default .ontario-icon{margin:0.5rem 0 0 0}@-moz-document url-prefix(){.ontario-back-to-top .ontario-icon,.ontario-back-to-top--default .ontario-icon{margin-top:0.125rem}}}.ontario-back-to-top.active,.ontario-back-to-top--default.active{visibility:visible;opacity:1}';
const U = P;
const J = class {
	constructor(o) {
		t(this, o);
		this.language = undefined;
		this.translations = T;
		this.displayBackToTop = false;
		this.scrollYValue = 200;
	}
	showBackToTopButton() {
		this.displayBackToTop = window.scrollY > this.scrollYValue;
	}
	handleSetAppLanguage(t) {
		if (!this.language) {
			this.language = r(t);
		}
	}
	handleHeaderLanguageToggled(t) {
		this.language = r(t);
	}
	scrollToTop() {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}
	componentWillLoad() {
		this.language = r(this.language);
	}
	render() {
		return o(
			'button',
			{
				'key': '28f085a23b68bb74b8874d03c900775fe5868ae7',
				'class': this.displayBackToTop ? `ontario-back-to-top active` : `ontario-back-to-top`,
				'onClick': this.scrollToTop,
				'aria-label': this.translations.backToTop.ariaLabel[`${this.language}`],
			},
			o('span', { 'key': '8f88357f7064378065119f52bfc7a081318094da', 'aria-hidden': 'true', 'innerHTML': Y }),
			this.translations.backToTop.top[`${this.language}`],
		);
	}
	get element() {
		return i(this);
	}
};
J.style = U;
const Z =
	'@charset "UTF-8";.ontario-blockquote{border-left:4px solid #4d4d4d;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:400;letter-spacing:0.025rem;line-height:1.56;max-width:48rem;margin:2rem;padding:1.5rem 0 1.5rem 1.5rem;quotes:"“" "”"}@media screen and (max-width: 40em){.ontario-blockquote{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.5;margin:1.5rem 0 2rem 0}}.ontario-blockquote p{margin:0 0 1.5rem 0}.ontario-blockquote p::before{content:open-quote}.ontario-blockquote p::after{content:close-quote}.ontario-blockquote--short{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.5}@media screen and (max-width: 40em){.ontario-blockquote--short{font-size:1.4375rem;line-height:1.43}}.ontario-blockquote__attribution,.ontario-blockquote__byline{display:block;font-size:1rem;letter-spacing:0.025rem;line-height:1.56;text-align:right}@media screen and (max-width: 40em){.ontario-blockquote__attribution,.ontario-blockquote__byline{letter-spacing:0.03rem;line-height:1.5}}.ontario-blockquote__attribution{font-style:normal;font-weight:700}.ontario-blockquote__attribution::before{content:"— "}html[lang=fr] blockquote{quotes:"« " " »"}';
const Q = Z;
const G = class {
	constructor(o) {
		t(this, o);
		this.quote = undefined;
		this.attribution = undefined;
		this.byline = undefined;
		this.shortQuoteLength = 140;
		this.shortQuote = false;
		this.quoteState = undefined;
	}
	validateQuote() {
		var t, o, i, e;
		this.quoteState =
			(o = (t = this.quote) !== null && t !== void 0 ? t : this.host.textContent) !== null && o !== void 0 ? o : '';
		this.validateQuoteContent(this.quoteState);
		this.shortQuote =
			(e = ((i = this.quoteState) === null || i === void 0 ? void 0 : i.length) <= this.shortQuoteLength) !== null &&
			e !== void 0
				? e
				: true;
	}
	validateQuoteContent(t) {
		if (s(t)) {
			const t = new c();
			t.addDesignSystemTag()
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
	componentDidLoad() {
		const t = new MutationObserver((t) => {
			t.forEach((t) => {
				if (t.type === 'attributes') {
					this.validateQuote();
				}
			});
		});
		const o = { attributes: true };
		t.observe(this.host, o);
	}
	render() {
		return o(
			'blockquote',
			{
				key: '10d7b83d6b3984b8b321c9757fb6fb5ffca89ee3',
				class: this.shortQuote ? `ontario-blockquote ontario-blockquote--short` : `ontario-blockquote`,
			},
			o('p', { key: '6b557c47534fb2c50f0f7eb31967bc21f4969043' }, this.quoteState),
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
G.style = Q;
const K = ['primary', 'secondary', 'tertiary', 'internalThemeDark'];
const X = ['button', 'reset', 'submit'];
const tt =
	'.ontario-button:focus,.ontario-button:active{box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:box-shadow 0.1s ease-in-out}.ontario-button{border:none;border-radius:4px;box-sizing:border-box;box-shadow:none;display:inline-block;font-size:1.125rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:600;line-height:1.5555555556;margin:0 1.75rem 1.5rem 0;min-width:10rem;padding:0.625rem 1.5rem;text-align:center;text-decoration:none;cursor:pointer}@media screen and (max-width: 40em){.ontario-button{margin-right:0;display:block;width:100%}}.ontario-button .ontario-icon{margin-right:4px}.ontario-button--primary{background-color:#0066CC;color:#FFFFFF}.ontario-button--primary:hover{background-color:#00478F;color:#FFFFFF}.ontario-button--primary:focus{background-color:#00478F;color:#FFFFFF;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out}.ontario-button--primary:active{background-color:#002142;color:#FFFFFF;transition:background-color 0s, box-shadow 0.1s ease-in-out}.ontario-button--primary:visited{color:#FFFFFF}.ontario-button--secondary{background-color:#FFFFFF;border:2px solid #0066CC;color:#0066CC;padding-top:0.5rem;padding-bottom:0.5rem}.ontario-button--secondary:hover{background-color:#e0f0ff;border-color:#00478F;color:#00478F}.ontario-button--secondary:focus{background-color:#e0f0ff;border-color:#00478F;color:#00478F;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out}.ontario-button--secondary:active{background-color:#c2e0ff;border-color:#002142;color:#002142;transition:background-color 0s, box-shadow 0.1s ease-in-out}.ontario-button--secondary:visited{color:#0066CC}.ontario-button--tertiary{background-color:transparent;color:#0066CC;text-decoration:underline}.ontario-button--tertiary:hover{background-color:#e8e8e8;color:#00478F;text-decoration:underline}.ontario-button--tertiary:focus{background-color:#e8e8e8;color:#00478F;text-decoration:underline;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out}.ontario-button--tertiary:active{background-color:#d1d1d1;color:#002142;text-decoration:underline;transition:background-color 0s, box-shadow 0.1s ease-in-out}.ontario-button--tertiary:visited{color:#0066CC}.ontario-button--internalThemeDark{background-color:#1a1a1a;border:2px solid #FFFFFF;color:#FFFFFF}.ontario-button--internalThemeDark:hover{background-color:#4d4d4d}.ontario-button--internalThemeDark:focus{background-color:#4d4d4d;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out}.ontario-button--internalThemeDark:active{background-color:#4d4d4d;transition:background-color 0s, box-shadow 0.1s ease-in-out}.ontario-button--internalThemeDark:visited{color:#0066CC}';
const ot = tt;
const it = class {
	constructor(o) {
		t(this, o);
		if (o.$hostElement$['s-ei']) {
			this.internals = o.$hostElement$['s-ei'];
		} else {
			this.internals = o.$hostElement$.attachInternals();
			o.$hostElement$['s-ei'] = this.internals;
		}
		this.type = 'secondary';
		this.htmlType = 'button';
		this.label = undefined;
		this.ariaLabelText = undefined;
		this.elementId = undefined;
		this.typeState = undefined;
		this.htmlTypeState = undefined;
		this.labelState = undefined;
	}
	updateLabelContent() {
		var t, o;
		this.labelState =
			(o = (t = this.label) !== null && t !== void 0 ? t : this.host.textContent) !== null && o !== void 0 ? o : '';
		this.validateLabelContent(this.labelState);
	}
	validateType() {
		const t = l(this.type, K);
		if (t) {
			this.typeState = this.type;
		} else {
			this.typeState = this.warnDefaultType();
		}
	}
	validateHtmlType() {
		const t = l(this.htmlType, X);
		if (t) {
			this.htmlTypeState = this.htmlType;
		} else {
			this.htmlTypeState = this.warnDefaultHtmlType();
		}
	}
	validateLabelContent(t) {
		if (s(t)) {
			const t = new c();
			t.addDesignSystemTag()
				.addMonospaceText(' label ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-button> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	}
	warnDefaultType() {
		const t = new c();
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
	}
	warnDefaultHtmlType() {
		const t = new c();
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
	}
	getClass() {
		return `ontario-button ontario-button--${this.typeState}`;
	}
	getId() {
		var t;
		return (t = this.elementId) !== null && t !== void 0 ? t : '';
	}
	componentWillLoad() {
		var t;
		this.updateLabelContent();
		this.validateHtmlType();
		this.validateType();
		this.ariaLabelText = (t = this.ariaLabelText) !== null && t !== void 0 ? t : this.labelState;
	}
	componentDidLoad() {
		const t = new MutationObserver((t) => {
			t.forEach((t) => {
				if (t.type === 'attributes') {
					this.updateLabelContent();
				}
			});
		});
		const o = { attributes: true };
		t.observe(this.host, o);
		if (this.htmlTypeState === 'submit') {
			const { form: t } = this.internals;
			this.buttonRef.addEventListener('click', () =>
				t === null || t === void 0 ? void 0 : t.dispatchEvent(new Event('submit', { cancelable: true })),
			);
		}
	}
	render() {
		return o(
			'button',
			{
				'key': 'ceb1e505af5185139f76215012d1217ee6102356',
				'ref': (t) => (this.buttonRef = t),
				'type': this.htmlTypeState,
				'class': this.getClass(),
				'aria-label': this.ariaLabelText,
				'id': this.getId(),
			},
			this.labelState,
		);
	}
	static get formAssociated() {
		return true;
	}
	get host() {
		return i(this);
	}
	static get watchers() {
		return { label: ['updateLabelContent'], type: ['validateType'], htmlType: ['validateHtmlType'] };
	}
};
it.style = ot;
const et =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul[class*=columns-] li:last-child,ol[class*=columns-] li:last-child{padding-bottom:0.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-callout{border-left:0.25rem solid #367A76;padding:1.5rem;margin:2rem 0 2.5rem 0;background-color:#f2f2f2}.ontario-callout *{max-width:48rem}.ontario-callout *:last-child{margin-bottom:0.5rem}.ontario-callout__title{margin:0 0 1rem}.ontario-border-highlight--teal{border-color:#367A76 !important}.ontario-border-highlight--gold{border-color:#86743D !important}.ontario-border-highlight--yellow{border-color:#8A600D !important}.ontario-border-highlight--taupe{border-color:#7B725C !important}.ontario-border-highlight--green{border-color:#2B8737 !important}.ontario-border-highlight--lime{border-color:#5F8129 !important}.ontario-border-highlight--sky{border-color:#1080A6 !important}.ontario-border-highlight--blue{border-color:#0369ac !important}.ontario-border-highlight--purple{border-color:#92278F !important}';
const at = et;
const nt = class {
	constructor(o) {
		t(this, o);
		this.headingType = undefined;
		this.headingContentType = 'string';
		this.headingContent = undefined;
		this.content = undefined;
		this.highlightColour = 'teal';
	}
	validateHeadingType() {
		if (I(this.headingType)) return this.headingType;
		const t = new c();
		return t
			.addDesignSystemTag()
			.addMonospaceText(` headingType ${this.headingType} `)
			.addRegularText('for')
			.addMonospaceText(' <ontario-callout> ')
			.addRegularText('is not a valid type. Please ensure your heading type matches one of the headingType types.')
			.printMessage();
	}
	validateHeadingContentType() {
		const t = l(this.headingContentType, B);
		if (t) {
			return this.headingContentType;
		} else {
			return this.warnDefaultType();
		}
	}
	validateHeadingContent() {
		if (!this.headingContent) {
			const t = new c();
			t.addDesignSystemTag()
				.addMonospaceText(' headingContent ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-callout> ')
				.addRegularText('was not provided.')
				.printMessage();
		}
	}
	validateHighlightColour() {
		if (this.highlightColour) {
			if (M(this.highlightColour)) return this.highlightColour;
			else {
				const t = new c();
				t.addDesignSystemTag()
					.addMonospaceText(` highlightColour ${this.highlightColour} `)
					.addRegularText('for')
					.addMonospaceText(' <ontario-callout> ')
					.addRegularText(
						'does not match one of the valid highlightColour types. A default colour of `teal` will be applied.',
					)
					.printMessage();
			}
		}
		return 'teal';
	}
	warnDefaultType() {
		const t = new c();
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
	}
	componentWillLoad() {
		this.validateHighlightColour();
		this.validateHeadingContent();
		this.validateHeadingType();
		this.validateHeadingContentType();
	}
	render() {
		return q(
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
nt.style = at;
const rt = ['basic', 'image', 'title', 'horizontal'];
const lt = ['default', 'light', 'dark'];
const st =
	'.ontario-card__heading{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}.ontario-card__heading{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){.ontario-card__heading{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}.ontario-card{box-shadow:0rem 0.1875rem 0.5rem 0.0625rem rgba(0, 0, 0, 0.4);border-radius:4px;margin:0 2.5rem 2.5rem 0;padding:0;list-style-type:none;transition:all 0.3s ease-in-out;position:relative;cursor:pointer}.ontario-card:hover{box-shadow:0rem 0.375rem 0.75rem 0.125rem rgba(0, 0, 0, 0.35)}.ontario-card:focus-within{box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:box-shadow 0.1s ease-in-out}.ontario-card:active{box-shadow:0 0 0 4px #009ADB;background-color:#f2f2f2}@media screen and (max-width: 40em){.ontario-card{margin-bottom:3rem;width:100% !important;max-width:100%}}.ontario-card__card-type--horizontal{display:flex}@media screen and (max-width: 40em){.ontario-card__card-type--horizontal{width:100%;max-width:100%}}.ontario-card__card-type--horizontal .ontario-card__image-container,.ontario-card__card-type--horizontal .ontario-card__text-container{position:relative}.ontario-card__card-type--horizontal a:focus-within{box-shadow:none;outline:none}.ontario-card__card-type--horizontal a:active{box-shadow:none}.ontario-card__card-type--horizontal img{height:100%;position:absolute}.ontario-card__image-right{flex-direction:row-reverse}.ontario-card__heading{margin:0;border-radius:4px 4px 0 0;padding:1.25rem 1.5rem 0.5rem 1.5rem;transition:text-decoration 0.3s ease-in-out;background-color:#FFFFFF}.ontario-card:hover .ontario-card__heading{text-decoration-line:underline;text-decoration-color:#1a1a1a}.ontario-card__header-type--light .ontario-card__heading{background-color:#f2f2f2;padding-top:1rem;padding-bottom:1rem;padding-right:4rem;border-radius:4px 4px 0 0}.ontario-card__header-type--dark .ontario-card__heading{background-color:#1a1a1a;padding-top:1rem;padding-bottom:1rem;border-radius:4px 4px 0 0}.ontario-card__header-type--dark:hover .ontario-card__heading{text-decoration-line:underline;text-decoration-color:#FFFFFF}.ontario-card--no-description .ontario-card__heading{padding:1rem 1.5rem;border-radius:0 0 4px 4px}.ontario-card__heading a{color:#1a1a1a;text-decoration:none;outline:none}.ontario-card__header-type--dark .ontario-card__heading a{color:#FFFFFF}.ontario-card__heading a::after{content:"";position:absolute;left:0;top:0;right:0;bottom:0}.ontario-card__heading a:focus{box-shadow:none}.ontario-card__heading a:active{outline:none}@media screen and (max-width: 73em){.ontario-card__heading{font-size:1.25rem;padding-left:1rem;padding-right:1rem}}.ontario-card__card-type--horizontal .ontario-card__text-container{width:66.6%}.ontario-card__image-size-one-fourth .ontario-card__text-container{width:75%}.ontario-card--no-image .ontario-card__text-container{width:100%}.ontario-card__description{margin:0;padding:0.5rem 1.5rem 1.5rem 1.5rem;background-color:#FFFFFF;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.ontario-card__description p{margin-top:0}.ontario-card__description p:last-of-type{margin-bottom:0}.ontario-card__header-type--light .ontario-card__description,.ontario-card__header-type--dark .ontario-card__description{padding-top:1rem}@media screen and (max-width: 73em){.ontario-card__description{padding:0.5rem 1rem 1.5rem 1rem}.ontario-card__header-type--light .ontario-card__description,.ontario-card__header-type--dark .ontario-card__description{padding-top:1rem}}.ontario-card--position-vertical .ontario-card__image-container{margin-bottom:-0.5rem}.ontario-card__card-type--horizontal .ontario-card__image-container{width:33.3%}.ontario-card__image-size-one-fourth .ontario-card__image-container{width:25%}.ontario-card__image{width:100%;height:100%;object-fit:cover;background-size:100% 100%}.ontario-card--position-vertical .ontario-card__image{border-top-left-radius:4px;border-top-right-radius:4px}.ontario-card__image-right .ontario-card__image{border-top-right-radius:4px;border-bottom-right-radius:4px}.ontario-card__image-left .ontario-card__image{border-top-left-radius:4px;border-bottom-left-radius:4px}';
const dt = st;
const ht = class {
	constructor(o) {
		t(this, o);
		this.label = undefined;
		this.image = undefined;
		this.description = undefined;
		this.cardLink = undefined;
		this.cardType = 'basic';
		this.headerType = 'default';
		this.horizontalImagePositionType = 'left';
		this.horizontalImageSizeType = 'one-third';
		this.ariaLabelText = undefined;
		this.cardTypeState = undefined;
		this.headerTypeState = undefined;
	}
	validateCardType() {
		const t = l(this.cardType, rt);
		if (t) {
			this.cardTypeState = this.cardType;
		} else {
			this.cardTypeState = this.warnDefaultCardType();
		}
	}
	validateHeaderType() {
		const t = l(this.headerType, lt);
		if (t) {
			this.headerTypeState = this.headerType;
		} else {
			this.headerTypeState = this.warnDefaultHeaderType();
		}
	}
	warnDefaultCardType() {
		const t = new c();
		t.addDesignSystemTag()
			.addMonospaceText(' card-type ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-card> ')
			.addRegularText('was set to an invalid type; only')
			.addMonospaceText(' basic, image, label, horizontal ')
			.addRegularText('are supported. The default type')
			.addMonospaceText(' basic ')
			.addRegularText('is assumed.')
			.printMessage();
		return 'basic';
	}
	warnDefaultHeaderType() {
		const t = new c();
		t.addDesignSystemTag()
			.addMonospaceText(' header-type ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-card> ')
			.addRegularText('was set to an invalid type; only')
			.addMonospaceText(' default, light, dark')
			.addRegularText('are supported. The default type')
			.addMonospaceText(' default ')
			.addRegularText('is assumed.')
			.printMessage();
		return 'default';
	}
	getClass() {
		if (this.cardTypeState === 'horizontal') {
			return `ontario-card ontario-card__card-type--horizontal ontario-card__image-${this.horizontalImagePositionType} ontario-card__image-size-${this.horizontalImageSizeType}`;
		} else {
			return `ontario-card ontario-card__header-type--${this.headerTypeState} ontario-card__card-type--${this.cardTypeState}`;
		}
	}
	getHref() {
		return this.cardLink ? this.cardLink : '#';
	}
	componentWillLoad() {
		this.validateCardType();
		this.validateHeaderType();
	}
	render() {
		return o(
			'li',
			{ key: '43864d4b172f51caf49428ec366874c4e793f8a9', class: this.getClass() },
			this.image &&
				o(
					'div',
					{ class: 'ontario-card__image-container' },
					o(
						'a',
						{ 'href': this.getHref(), 'aria-label': this.ariaLabelText },
						o('img', { class: 'ontario-card__image', src: this.image }),
					),
				),
			o(
				'div',
				{
					key: 'eb343e41b3c8980b5c6f746f5ec97be768def9db',
					class: `ontario-card__text-container ${this.image ? 'ontario-card--image-true' : ''}`,
				},
				o(
					'h2',
					{ key: '784052b4a3631039d99850589da0b023e4458a33', class: 'ontario-card__heading' },
					o(
						'a',
						{
							'key': '7a02e9452244a8e1e76637b5c74872d5af29706c',
							'href': this.getHref(),
							'aria-label': this.ariaLabelText,
						},
						this.label,
					),
				),
				this.description && o('div', { class: 'ontario-card__description' }, o('p', null, this.description)),
			),
		);
	}
	get host() {
		return i(this);
	}
	static get watchers() {
		return { cardType: ['validateCardType'], headerType: ['validateHeaderType'] };
	}
};
ht.style = dt;
const mt =
	'.ontario-card-collection__container{display:flex;flex-wrap:wrap}.ontario-card-collecton--cards-per-row-4 ::slotted(ontario-card){width:calc(25% - 2rem)}.ontario-card-collecton--cards-per-row-4 ::slotted(ontario-card):nth-child(4n){margin-right:0}@media screen and (max-width: 73em){.ontario-card-collecton--cards-per-row-4 ::slotted(ontario-card){width:calc(50% - 1.25rem)}.ontario-card-collecton--cards-per-row-4 ::slotted(ontario-card):nth-child(2n){margin-right:0}}.ontario-card-collecton--cards-per-row-3 ::slotted(ontario-card){width:calc(33.3% - 1.75rem)}.ontario-card-collecton--cards-per-row-3 ::slotted(ontario-card):nth-child(3n){margin-right:0}.ontario-card-collecton--cards-per-row-2 ::slotted(ontario-card){width:calc(50% - 1.25rem)}.ontario-card-collecton--cards-per-row-2 ::slotted(ontario-card):nth-child(2n){margin-right:0}';
const ct = mt;
const gt = class {
	constructor(o) {
		t(this, o);
		this.cardsPerRow = 3;
		this.cardsPerRowState = undefined;
	}
	validateCardsPerRow() {
		if (isNaN(this.cardsPerRow) || (!isNaN(this.cardsPerRow) && this.cardsPerRow <= 0)) {
			const t = new c();
			t.addDesignSystemTag()
				.addMonospaceText(' cards-per-row ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-card> ')
				.addRegularText(
					`${
						isNaN(this.cardsPerRow) ? 'was set to a non-numeric value' : 'was set to a negative number'
					}; only a positive number is allowed. The default number of cards per row: `,
				)
				.addMonospaceText(' 3 ')
				.addRegularText('was assumed.')
				.printMessage();
			this.cardsPerRowState = 3;
		} else {
			this.cardsPerRowState = this.cardsPerRow;
		}
	}
	getClass() {
		return `\n      ontario-card-collection__container\n      ontario-card-collecton--cards-per-row-${this.cardsPerRowState}\n    `.trim();
	}
	componentWillLoad() {
		this.validateCardsPerRow();
	}
	render() {
		return o(
			'ul',
			{ key: '102a3c830422df29dd3ab8cf05aa660d110fe353', class: this.getClass() },
			o('slot', { key: 'e6089ac94f85b231eca6df2f3743432d807a09e4' }),
		);
	}
	get host() {
		return i(this);
	}
	static get watchers() {
		return { cardsPerRow: ['validateCardsPerRow'] };
	}
};
gt.style = ct;
var pt =
	(undefined && undefined.__rest) ||
	function (t, o) {
		var i = {};
		for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e) && o.indexOf(e) < 0) i[e] = t[e];
		if (t != null && typeof Object.getOwnPropertySymbols === 'function')
			for (var a = 0, e = Object.getOwnPropertySymbols(t); a < e.length; a++) {
				if (o.indexOf(e[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, e[a])) i[e[a]] = t[e[a]];
			}
		return i;
	};
const ut = (t) => {
	var {
			autoComplete: i,
			className: e,
			id: a,
			name: n,
			placeholder: r,
			type: l,
			value: s,
			checked: d,
			required: h,
			onKeyDown: m,
			onInput: c,
			onChange: g,
			onBlur: p,
			onFocus: u,
			ariaInvalid: f,
			ariaDescribedBy: b,
			ref: w,
			inputMode: v,
		} = t,
		x = pt(t, [
			'autoComplete',
			'className',
			'id',
			'name',
			'placeholder',
			'type',
			'value',
			'checked',
			'required',
			'onKeyDown',
			'onInput',
			'onChange',
			'onBlur',
			'onFocus',
			'ariaInvalid',
			'ariaDescribedBy',
			'ref',
			'inputMode',
		]);
	return o(
		'input',
		Object.assign(
			{
				'autoComplete': i,
				'class': e,
				'id': a,
				'name': n,
				'type': l,
				'value': s,
				'checked': d,
				'placeholder': r,
				'required': !!h,
				'onKeyDown': m,
				'onInput': c,
				'onChange': g,
				'onBlur': p,
				'onFocus': u,
				'inputMode': v,
				'ref': w,
				'aria-invalid': f,
				'aria-describedby': b,
			},
			x,
		),
	);
};
const ft = ['default', 'large', 'heading'];
var bt;
(function (t) {
	t['UndefinedCaptionObject'] = 'undefinedCaptionObject';
	t['UndefinedCaptionText'] = 'undefinedCaption';
	t['EmptyCaptionText'] = 'emptyCaption';
	t['UndefinedCaptionType'] = 'undefinedCaptionType';
	t['IncorrectCaptionType'] = 'incorrectCaptionType';
})(bt || (bt = {}));
class wt {
	constructor(t, i, e, a, n = false, r = false) {
		this.captionType = 'default';
		this.required = false;
		this.isLegend = false;
		this.language = 'en';
		this.getCaption = (t, i = false) => {
			const e = this.captionText && this.captionText.toLowerCase();
			const a = this.isLegend
				? o(
						'legend',
						{ class: this.getClass() },
						this.captionType === 'heading' ? o('h1', null, this.captionText) : this.captionText,
						this.getRequiredFlagElement(),
						i && this.getHintExpanderAccessibilityText(e, false),
				  )
				: o(
						'label',
						{ htmlFor: t, class: this.getClass() },
						this.captionText,
						this.getRequiredFlagElement(),
						i && this.getHintExpanderAccessibilityText(e, false),
				  );
			return this.captionType === 'heading' && !this.isLegend ? o('h1', null, a) : a;
		};
		let l;
		if (typeof i === 'string') {
			try {
				l = JSON.parse(i);
			} catch (t) {
				l = { captionText: i, captionType: 'default' };
			}
		} else {
			l = i;
		}
		this.componentTagName = t.toLocaleLowerCase();
		this.captionText = l === null || l === void 0 ? void 0 : l.captionText;
		this.captionType =
			((l === null || l === void 0 ? void 0 : l.captionType) &&
				ft.find((t) => {
					var o;
					return t === ((o = l.captionType) === null || o === void 0 ? void 0 : o.toLowerCase());
				})) ||
			'default';
		this.required = r;
		this.isLegend = n;
		this.translations = e;
		this.language = a;
		this.validateCaption(this);
	}
	getHintExpanderAccessibilityText(t, i = false) {
		const e = o(
			'span',
			{ class: 'ontario-show-for-sr' },
			this.translations.accessibility.moreInfo[this.language],
			' "',
			t.toLowerCase(),
			'"',
			' ',
			this.translations.accessibility.checkboxHintExpander[this.language],
		);
		const a = o(
			'span',
			{ class: 'ontario-show-for-sr' },
			this.translations.accessibility.moreInfo[this.language],
			' "',
			t.toLowerCase(),
			'"',
			' ',
			this.translations.accessibility.singleHintExpander[this.language],
		);
		return this.componentTagName === 'ontario-checkboxes' ? (!i ? e : a) : a;
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
		return this.captionType === 'large' || this.captionType === 'heading'
			? this.isLegend
				? `ontario-fieldset__legend ontario-fieldset__legend--${this.captionType}`
				: `ontario-label ontario-label--${this.captionType}`
			: this.isLegend
			? 'ontario-fieldset__legend'
			: 'ontario-label';
	}
	validateCaption(t) {
		var o;
		let i;
		if (!t || Object.keys(t).length <= 0) {
			i = bt.UndefinedCaptionObject;
		} else {
			if (!t.captionText) {
				i = bt.UndefinedCaptionText;
			} else {
				if (/^\s*$/.test(t.captionText)) {
					i = bt.EmptyCaptionText;
				}
			}
			if (!t.captionType) {
				i = bt.UndefinedCaptionType;
			} else {
				if (
					!ft.includes(
						(o = t === null || t === void 0 ? void 0 : t.captionType) === null || o === void 0
							? void 0
							: o.toLowerCase(),
					)
				) {
					i = bt.IncorrectCaptionType;
				}
			}
		}
		if (i) {
			const t = new c().addDesignSystemTag();
			if (i !== bt.UndefinedCaptionObject) {
				t.addMonospaceText(
					` ${i === bt.EmptyCaptionText || i === bt.UndefinedCaptionText ? 'caption or captionText' : 'captionType'} `,
				).addRegularText('object or property of');
			}
			t.addMonospaceText(' caption ').addRegularText('object on').addMonospaceText(` ${this.componentTagName} `);
			this.printConsoleMessage(i, t, this.getRequiredFlagText());
		}
	}
	printConsoleMessage(t, o, i = '(optional)') {
		switch (t) {
			case bt.UndefinedCaptionObject:
			case bt.UndefinedCaptionText:
			case bt.EmptyCaptionText:
				o.addRegularText(
					`${
						t === bt.EmptyCaptionText ? 'is empty or contains only spaces' : 'is required but not defined'
					}. A blank followed by a`,
				)
					.addMonospaceText(` ${i} `)
					.addRegularText('flag is assumed.');
				break;
			case bt.UndefinedCaptionType:
				o.addRegularText('is not defined. The').addMonospaceText(' default ').addRegularText('type is assumed.');
				break;
			case bt.IncorrectCaptionType:
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
	}
}
const vt = (t) => {
	let o = { hint: '', hintContentType: 'string' };
	if (t) {
		if (typeof t === 'string') {
			try {
				o = JSON.parse(t);
			} catch (i) {
				o = { hint: t, hintContentType: 'string' };
			}
		} else {
			o = t;
		}
	}
	return o;
};
var xt;
(function (t) {
	t['Change'] = 'change';
	t['Blur'] = 'blur';
	t['Focus'] = 'focus';
	t['Input'] = 'input';
})(xt || (xt = {}));
const _t = (t, o, i, e, a, n, r, l, s, d, h, m, c) => {
	var g;
	if (o === xt.Input) {
		r === null || r === void 0
			? void 0
			: r.emit({
					id: i === null || i === void 0 ? void 0 : i.id,
					value: (g = t.data) !== null && g !== void 0 ? g : undefined,
					inputType: t.inputType,
			  });
		m && m(t);
	}
	if (o === xt.Change) {
		if (l === 'radio' || l === 'checkbox') {
			if (i instanceof HTMLInputElement) {
				e.emit({
					checked: i === null || i === void 0 ? void 0 : i.checked,
					id: i === null || i === void 0 ? void 0 : i.id,
					value: i === null || i === void 0 ? void 0 : i.value,
				});
			}
		} else {
			e.emit({ id: i === null || i === void 0 ? void 0 : i.id, value: i === null || i === void 0 ? void 0 : i.value });
		}
		s && s(t);
		c && yt(c, o, t);
	}
	if (o === xt.Focus) {
		a.emit({
			id: i === null || i === void 0 ? void 0 : i.id,
			focused: true,
			value: i === null || i === void 0 ? void 0 : i.value,
		});
		d && d(t);
	}
	if (o === xt.Blur) {
		n.emit({
			id: i === null || i === void 0 ? void 0 : i.id,
			focused: false,
			value: i === null || i === void 0 ? void 0 : i.value,
		});
		h && h(t);
	}
};
const yt = (t, o, i) => {
	t.dispatchEvent(new CustomEvent(o, { composed: true, bubbles: true, detail: i }));
};
const Ft =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1,h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1,h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul[class*=columns-] li:last-child,ol[class*=columns-] li:last-child{padding-bottom:0.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend--large{font-size:1.75rem}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-checkboxes{margin-bottom:2.5rem;max-width:48rem}.ontario-checkboxes__item{position:relative;margin:0 0 1rem;padding:0 0 0 2rem;min-height:28px;box-sizing:content-box}.ontario-checkboxes__item:last-of-type{margin:0}@media screen and (max-width: 40em){.ontario-checkboxes__item{padding:0 0 0 2.5rem;min-height:32px}}.ontario-checkboxes__input{cursor:pointer;margin:0;position:absolute;top:-2px;left:-2px;opacity:0;width:36px;height:36px;z-index:0;-webkit-tap-highlight-color:transparent}@media screen and (max-width: 40em){.ontario-checkboxes__input{width:40px;height:40px}}.ontario-checkboxes__label{display:inline-block;cursor:pointer;line-height:1.5;margin:0.25rem 0;padding:0 1rem;width:auto;white-space:normal}@media screen and (max-width: 40em){.ontario-checkboxes__label{margin:0.33rem 0}}.ontario-checkboxes__label:before{content:"";border:2px solid #1a1a1a;border-radius:4px;position:absolute;top:0;left:0;width:32px;height:32px;transition:border 0.1s ease-in-out;display:block}@media screen and (min-width: 40em){.ontario-checkboxes__label:before{width:28px;height:28px}}.ontario-checkboxes__label:after{content:"";background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M0 2.667C0 1.194 1.194 0 2.667 0h18.667C22.806 0 24 1.194 24 2.667v18.667C24 22.806 22.806 24 21.333 24H2.667C1.194 24 0 22.806 0 21.333V2.667z\' fill=\'%231a1a1a\'/%3E%3Cpath d=\'M2.667 12.616l6.667 6.718 12-12.092-1.88-1.908L9.333 15.53l-4.787-4.8-1.88 1.894z\' fill=\'%23fff\'/%3E%3C/svg%3E%0A");background-repeat:no-repeat;height:30px;width:30px;position:absolute;top:1px;left:1px;right:0;bottom:0;opacity:0;display:block}@media screen and (max-width: 40em){.ontario-checkboxes__label:after{height:34px;width:34px}}.ontario-checkboxes__input:focus+.ontario-checkboxes__label:before{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:all 0.1s ease-in-out}.ontario-checkboxes__input:checked+.ontario-checkboxes__label:after{opacity:1}.ontario-checkboxes__input:checked+.ontario-checkboxes__label:before{background-color:#1a1a1a}.ontario-checkboxes__hint-expander{margin:0.75rem 0 0 0.5rem}@media screen and (max-width: 40em){.ontario-checkboxes__hint-expander{margin-top:1rem}}';
const kt = Ft;
const zt = class {
	constructor(o) {
		t(this, o);
		this.checkboxOnChange = e(this, 'checkboxOnChange', 7);
		this.checkboxOnBlur = e(this, 'checkboxOnBlur', 7);
		this.checkboxOnFocus = e(this, 'checkboxOnFocus', 7);
		if (o.$hostElement$['s-ei']) {
			this.internals = o.$hostElement$['s-ei'];
		} else {
			this.internals = o.$hostElement$.attachInternals();
			o.$hostElement$['s-ei'] = this.internals;
		}
		this.caption = undefined;
		this.language = undefined;
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
	handleSetAppLanguage(t) {
		if (!this.language) {
			this.language = r(t);
		}
	}
	handleHeaderLanguageToggled(t) {
		this.language = r(t);
	}
	parseHintText() {
		if (this.hintText) {
			const t = vt(this.hintText);
			this.internalHintText = t;
		}
	}
	parseHintExpander() {
		const t = this.hintExpander;
		if (t) {
			if (typeof t === 'string') this.internalHintExpander = JSON.parse(t);
			else this.internalHintExpander = t;
		}
	}
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
	validateOptions(t) {
		if (d(t)) {
			const t = new c();
			t.addDesignSystemTag()
				.addMonospaceText(' options ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-checkboxes> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	}
	validateName(t) {
		if (s(t)) {
			const t = new c();
			t.addDesignSystemTag()
				.addMonospaceText(' name ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-checkboxes> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	}
	updateCaptionState(t) {
		this.captionState = new wt(this.element.tagName, t, T, this.language, true, this.required);
	}
	updateLanguage() {
		this.updateCaptionState(this.caption);
	}
	handleEvent(t, o) {
		var i, e, a;
		const n = t.target;
		if (n) {
			n.checked = (i = n.checked) !== null && i !== void 0 ? i : '';
		}
		const r = this.internalOptions.find((t) => t.value === (n === null || n === void 0 ? void 0 : n.value));
		if (r) r.checked = !(r === null || r === void 0 ? void 0 : r.checked);
		(a = (e = this.internals) === null || e === void 0 ? void 0 : e.setFormValue) === null || a === void 0
			? void 0
			: a.call(
					e,
					this.internalOptions
						.filter((t) => !!t.checked)
						.reduce((t, o) => {
							t.append(this.name, o.value);
							return t;
						}, new FormData()),
			  );
		_t(
			t,
			o,
			n,
			this.checkboxOnChange,
			this.checkboxOnFocus,
			this.checkboxOnBlur,
			undefined,
			'checkbox',
			this.customOnChange,
			this.customOnFocus,
			this.customOnBlur,
			undefined,
			this.element,
		);
	}
	async componentDidLoad() {
		var t;
		this.hintTextId = await ((t = this.hintTextRef) === null || t === void 0 ? void 0 : t.getHintTextId());
	}
	componentWillLoad() {
		this.updateCaptionState(this.caption);
		this.parseOptions();
		this.parseHintExpander();
		this.parseHintText();
		this.validateName(this.name);
		this.language = r(this.language);
	}
	render() {
		var t;
		return o(
			'div',
			{ key: 'f2755e535c2dde010f2331c9dafa820e89d4be82', class: 'ontario-form-group' },
			o(
				'fieldset',
				{
					'key': 'cd86b4bcb0c761ba4e4b0cee72152aa918386545',
					'class': 'ontario-fieldset',
					'aria-describedby': this.hintTextId,
				},
				this.captionState.getCaption(undefined, !!this.internalHintExpander),
				this.internalHintText &&
					o('ontario-hint-text', {
						hint: this.internalHintText.hint,
						hintContentType: this.internalHintText.hintContentType,
						ref: (t) => (this.hintTextRef = t),
					}),
				o(
					'div',
					{ key: '6f208be5ac3271821e9266a50b60e958b505186e', class: 'ontario-checkboxes' },
					(t = this.internalOptions) === null || t === void 0
						? void 0
						: t.map((t) =>
								o(
									'div',
									{ class: 'ontario-checkboxes__item' },
									o(ut, {
										className: 'ontario-checkboxes__input',
										id: t.elementId,
										name: this.name,
										type: 'checkbox',
										value: t.value,
										required: !!this.required,
										checked: !!t.checked,
										onChange: (t) => this.handleEvent(t, xt.Change),
										onBlur: (t) => this.handleEvent(t, xt.Blur),
										onFocus: (t) => this.handleEvent(t, xt.Focus),
									}),
									o(
										'label',
										{ class: 'ontario-checkboxes__label', htmlFor: t.elementId },
										t.label,
										t.hintExpander && this.captionState.getHintExpanderAccessibilityText(t.label, true),
									),
									t.hintExpander &&
										o(
											'div',
											{ class: 'ontario-checkboxes__hint-expander' },
											o('ontario-hint-expander', {
												'hint': t.hintExpander.hint,
												'content': t.hintExpander.content,
												'hintContentType': t.hintExpander.hintContentType,
												'input-exists': true,
											}),
										),
								),
						  ),
					this.internalHintExpander &&
						o(
							'div',
							{ class: 'ontario-checkboxes__hint-expander' },
							o('ontario-hint-expander', {
								'hint': this.internalHintExpander.hint,
								'content': this.internalHintExpander.content,
								'hintContentType': this.internalHintExpander.hintContentType,
								'input-exists': true,
							}),
						),
				),
			),
		);
	}
	static get formAssociated() {
		return true;
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
zt.style = kt;
const Ct = `<svg class="svg-icon" role="img" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t<path d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z" fill="white" />\n\t<rect x="11" y="10" width="2" height="4" fill="black" />\n\t<rect x="11" y="16" width="2" height="2" fill="black" />\n</svg>\n`;
const At =
	'.ontario-row{margin:0 auto;max-width:72rem;width:100%}.ontario-row:before,.ontario-row:after{content:"";display:table}.ontario-row:after{clear:both}.ontario-row.ontario-row--collapse>.ontario-column,.ontario-row.ontario-row--collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-row--collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row .ontario-row{margin:0 -1rem;max-width:none;width:auto}.ontario-row .ontario-row:before,.ontario-row .ontario-row:after{content:"";display:table}.ontario-row .ontario-row:after{clear:both}.ontario-row .ontario-row.ontario-row--collapse{margin:0;max-width:none;width:auto}.ontario-row .ontario-row.ontario-row--collapse:before,.ontario-row .ontario-row.ontario-row--collapse:after{content:"";display:table}.ontario-row .ontario-row.ontario-row--collapse:after{clear:both}.ontario-column,.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;width:100%;float:left}.ontario-column+.ontario-column:last-child,.ontario-column+.ontario-columns:last-child,.ontario-columns+.ontario-column:last-child,.ontario-columns+.ontario-columns:last-child{float:right}.ontario-column+.ontario-column.ontario-end,.ontario-column+.ontario-columns.ontario-end,.ontario-columns+.ontario-column.ontario-end,.ontario-columns+.ontario-columns.ontario-end{float:left}@media only screen{.ontario-small-push-0{position:relative;left:0;right:auto}.ontario-small-pull-0{position:relative;right:0;left:auto}.ontario-small-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-small-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-small-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-small-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-small-push-3{position:relative;left:25%;right:auto}.ontario-small-pull-3{position:relative;right:25%;left:auto}.ontario-small-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-small-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-small-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-small-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-small-push-6{position:relative;left:50%;right:auto}.ontario-small-pull-6{position:relative;right:50%;left:auto}.ontario-small-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-small-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-small-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-small-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-small-push-9{position:relative;left:75%;right:auto}.ontario-small-pull-9{position:relative;right:75%;left:auto}.ontario-small-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-small-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-small-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-small-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-small-1{width:8.3333333333%}.ontario-small-2{width:16.6666666667%}.ontario-small-3{width:25%}.ontario-small-4{width:33.3333333333%}.ontario-small-5{width:41.6666666667%}.ontario-small-6{width:50%}.ontario-small-7{width:58.3333333333%}.ontario-small-8{width:66.6666666667%}.ontario-small-9{width:75%}.ontario-small-10{width:83.3333333333%}.ontario-small-11{width:91.6666666667%}.ontario-small-12{width:100%}.ontario-small-offset-0{margin-left:0 !important}.ontario-small-offset-1{margin-left:8.3333333333% !important}.ontario-small-offset-2{margin-left:16.6666666667% !important}.ontario-small-offset-3{margin-left:25% !important}.ontario-small-offset-4{margin-left:33.3333333333% !important}.ontario-small-offset-5{margin-left:41.6666666667% !important}.ontario-small-offset-6{margin-left:50% !important}.ontario-small-offset-7{margin-left:58.3333333333% !important}.ontario-small-offset-8{margin-left:66.6666666667% !important}.ontario-small-offset-9{margin-left:75% !important}.ontario-small-offset-10{margin-left:83.3333333333% !important}.ontario-small-offset-11{margin-left:91.6666666667% !important}.ontario-small-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-small-centered,.ontario-columns.ontario-small-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-small-uncentered,.ontario-columns.ontario-small-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-small-centered:last-child,.ontario-columns.ontario-small-centered:last-child{float:none}.ontario-column.ontario-small-uncentered:last-child,.ontario-columns.ontario-small-uncentered:last-child{float:left}.ontario-column.ontario-small-uncentered.ontario-opposite,.ontario-columns.ontario-small-uncentered.ontario-opposite{float:right}.ontario-row.ontario-small-collapse>.ontario-column,.ontario-row.ontario-small-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-small-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-small-uncollapse>.ontario-column,.ontario-row.ontario-small-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}}@media only screen and (min-width:40.063em){.ontario-medium-push-0{position:relative;left:0;right:auto}.ontario-medium-pull-0{position:relative;right:0;left:auto}.ontario-medium-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-medium-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-medium-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-medium-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-medium-push-3{position:relative;left:25%;right:auto}.ontario-medium-pull-3{position:relative;right:25%;left:auto}.ontario-medium-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-medium-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-medium-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-medium-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-medium-push-6{position:relative;left:50%;right:auto}.ontario-medium-pull-6{position:relative;right:50%;left:auto}.ontario-medium-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-medium-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-medium-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-medium-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-medium-push-9{position:relative;left:75%;right:auto}.ontario-medium-pull-9{position:relative;right:75%;left:auto}.ontario-medium-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-medium-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-medium-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-medium-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-medium-1{width:8.3333333333%}.ontario-medium-2{width:16.6666666667%}.ontario-medium-3{width:25%}.ontario-medium-4{width:33.3333333333%}.ontario-medium-5{width:41.6666666667%}.ontario-medium-6{width:50%}.ontario-medium-7{width:58.3333333333%}.ontario-medium-8{width:66.6666666667%}.ontario-medium-9{width:75%}.ontario-medium-10{width:83.3333333333%}.ontario-medium-11{width:91.6666666667%}.ontario-medium-12{width:100%}.ontario-medium-offset-0{margin-left:0 !important}.ontario-medium-offset-1{margin-left:8.3333333333% !important}.ontario-medium-offset-2{margin-left:16.6666666667% !important}.ontario-medium-offset-3{margin-left:25% !important}.ontario-medium-offset-4{margin-left:33.3333333333% !important}.ontario-medium-offset-5{margin-left:41.6666666667% !important}.ontario-medium-offset-6{margin-left:50% !important}.ontario-medium-offset-7{margin-left:58.3333333333% !important}.ontario-medium-offset-8{margin-left:66.6666666667% !important}.ontario-medium-offset-9{margin-left:75% !important}.ontario-medium-offset-10{margin-left:83.3333333333% !important}.ontario-medium-offset-11{margin-left:91.6666666667% !important}.ontario-medium-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-medium-centered,.ontario-columns.ontario-medium-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-medium-uncentered,.ontario-columns.ontario-medium-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-medium-centered:last-child,.ontario-columns.ontario-medium-centered:last-child{float:none}.ontario-column.ontario-medium-uncentered:last-child,.ontario-columns.ontario-medium-uncentered:last-child{float:left}.ontario-column.ontario-medium-uncentered.ontario-opposite,.ontario-columns.ontario-medium-uncentered.ontario-opposite{float:right}.ontario-row.ontario-medium-collapse>.ontario-column,.ontario-row.ontario-medium-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-medium-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-medium-uncollapse>.ontario-column,.ontario-row.ontario-medium-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}}@media only screen and (min-width:73.063em){.ontario-large-push-0{position:relative;left:0;right:auto}.ontario-large-pull-0{position:relative;right:0;left:auto}.ontario-large-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-large-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-large-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-large-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-large-push-3{position:relative;left:25%;right:auto}.ontario-large-pull-3{position:relative;right:25%;left:auto}.ontario-large-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-large-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-large-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-large-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-large-push-6{position:relative;left:50%;right:auto}.ontario-large-pull-6{position:relative;right:50%;left:auto}.ontario-large-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-large-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-large-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-large-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-large-push-9{position:relative;left:75%;right:auto}.ontario-large-pull-9{position:relative;right:75%;left:auto}.ontario-large-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-large-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-large-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-large-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-large-1{width:8.3333333333%}.ontario-large-2{width:16.6666666667%}.ontario-large-3{width:25%}.ontario-large-4{width:33.3333333333%}.ontario-large-5{width:41.6666666667%}.ontario-large-6{width:50%}.ontario-large-7{width:58.3333333333%}.ontario-large-8{width:66.6666666667%}.ontario-large-9{width:75%}.ontario-large-10{width:83.3333333333%}.ontario-large-11{width:91.6666666667%}.ontario-large-12{width:100%}.ontario-large-offset-0{margin-left:0 !important}.ontario-large-offset-1{margin-left:8.3333333333% !important}.ontario-large-offset-2{margin-left:16.6666666667% !important}.ontario-large-offset-3{margin-left:25% !important}.ontario-large-offset-4{margin-left:33.3333333333% !important}.ontario-large-offset-5{margin-left:41.6666666667% !important}.ontario-large-offset-6{margin-left:50% !important}.ontario-large-offset-7{margin-left:58.3333333333% !important}.ontario-large-offset-8{margin-left:66.6666666667% !important}.ontario-large-offset-9{margin-left:75% !important}.ontario-large-offset-10{margin-left:83.3333333333% !important}.ontario-large-offset-11{margin-left:91.6666666667% !important}.ontario-large-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-large-centered,.ontario-columns.ontario-large-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-large-uncentered,.ontario-columns.ontario-large-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-large-centered:last-child,.ontario-columns.ontario-large-centered:last-child{float:none}.ontario-column.ontario-large-uncentered:last-child,.ontario-columns.ontario-large-uncentered:last-child{float:left}.ontario-column.ontario-large-uncentered.ontario-opposite,.ontario-columns.ontario-large-uncentered.ontario-opposite{float:right}.ontario-row.ontario-large-collapse>.ontario-column,.ontario-row.ontario-large-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-large-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-large-uncollapse>.ontario-column,.ontario-row.ontario-large-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-push-0{position:relative;left:0;right:auto}.ontario-pull-0{position:relative;right:0;left:auto}.ontario-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-push-3{position:relative;left:25%;right:auto}.ontario-pull-3{position:relative;right:25%;left:auto}.ontario-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-push-6{position:relative;left:50%;right:auto}.ontario-pull-6{position:relative;right:50%;left:auto}.ontario-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-push-9{position:relative;left:75%;right:auto}.ontario-pull-9{position:relative;right:75%;left:auto}.ontario-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-pull-11{position:relative;right:91.6666666667%;left:auto}}@media only screen and (min-width:96.063em){.ontario-xlarge-push-0{position:relative;left:0;right:auto}.ontario-xlarge-pull-0{position:relative;right:0;left:auto}.ontario-xlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xlarge-push-3{position:relative;left:25%;right:auto}.ontario-xlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xlarge-push-6{position:relative;left:50%;right:auto}.ontario-xlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xlarge-push-9{position:relative;left:75%;right:auto}.ontario-xlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-xlarge-1{width:8.3333333333%}.ontario-xlarge-2{width:16.6666666667%}.ontario-xlarge-3{width:25%}.ontario-xlarge-4{width:33.3333333333%}.ontario-xlarge-5{width:41.6666666667%}.ontario-xlarge-6{width:50%}.ontario-xlarge-7{width:58.3333333333%}.ontario-xlarge-8{width:66.6666666667%}.ontario-xlarge-9{width:75%}.ontario-xlarge-10{width:83.3333333333%}.ontario-xlarge-11{width:91.6666666667%}.ontario-xlarge-12{width:100%}.ontario-xlarge-offset-0{margin-left:0 !important}.ontario-xlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xlarge-offset-3{margin-left:25% !important}.ontario-xlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xlarge-offset-6{margin-left:50% !important}.ontario-xlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xlarge-offset-9{margin-left:75% !important}.ontario-xlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xlarge-centered,.ontario-columns.ontario-xlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xlarge-uncentered,.ontario-columns.ontario-xlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xlarge-centered:last-child,.ontario-columns.ontario-xlarge-centered:last-child{float:none}.ontario-column.ontario-xlarge-uncentered:last-child,.ontario-columns.ontario-xlarge-uncentered:last-child{float:left}.ontario-column.ontario-xlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xlarge-collapse>.ontario-column,.ontario-row.ontario-xlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xlarge-uncollapse>.ontario-column,.ontario-row.ontario-xlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}}@media only screen and (min-width:120.063em){.ontario-xxlarge-push-0{position:relative;left:0;right:auto}.ontario-xxlarge-pull-0{position:relative;right:0;left:auto}.ontario-xxlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xxlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xxlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xxlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xxlarge-push-3{position:relative;left:25%;right:auto}.ontario-xxlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xxlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xxlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xxlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xxlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xxlarge-push-6{position:relative;left:50%;right:auto}.ontario-xxlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xxlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xxlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xxlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xxlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xxlarge-push-9{position:relative;left:75%;right:auto}.ontario-xxlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xxlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xxlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xxlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xxlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-xxlarge-1{width:8.3333333333%}.ontario-xxlarge-2{width:16.6666666667%}.ontario-xxlarge-3{width:25%}.ontario-xxlarge-4{width:33.3333333333%}.ontario-xxlarge-5{width:41.6666666667%}.ontario-xxlarge-6{width:50%}.ontario-xxlarge-7{width:58.3333333333%}.ontario-xxlarge-8{width:66.6666666667%}.ontario-xxlarge-9{width:75%}.ontario-xxlarge-10{width:83.3333333333%}.ontario-xxlarge-11{width:91.6666666667%}.ontario-xxlarge-12{width:100%}.ontario-xxlarge-offset-0{margin-left:0 !important}.ontario-xxlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xxlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xxlarge-offset-3{margin-left:25% !important}.ontario-xxlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xxlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xxlarge-offset-6{margin-left:50% !important}.ontario-xxlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xxlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xxlarge-offset-9{margin-left:75% !important}.ontario-xxlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xxlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xxlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xxlarge-centered,.ontario-columns.ontario-xxlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xxlarge-uncentered,.ontario-columns.ontario-xxlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xxlarge-centered:last-child,.ontario-columns.ontario-xxlarge-centered:last-child{float:none}.ontario-column.ontario-xxlarge-uncentered:last-child,.ontario-columns.ontario-xxlarge-uncentered:last-child{float:left}.ontario-column.ontario-xxlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xxlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xxlarge-collapse>.ontario-column,.ontario-row.ontario-xxlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xxlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xxlarge-uncollapse>.ontario-column,.ontario-row.ontario-xxlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}}.ontario-critical-alert{background-color:#FFD440;font-weight:400;margin:0;padding:1rem 0;position:relative;z-index:10}.ontario-critical-alert__body{display:flex;flex-wrap:nowrap}.ontario-critical-alert__icon{display:flex}.ontario-critical-alert__icon svg{width:28px;height:28px;margin:0 0.85rem 0 0}.ontario-critical-alert p{margin:0;padding:0;line-height:1.8}.ontario-critical-alert a{color:#1a1a1a;font-weight:700}.ontario-critical-alert a:hover,.ontario-critical-alert a:focus{text-decoration:none}.ontario-critical-alert a:visited{color:#1a1a1a}.ontario-critical-alert ::slotted(a){color:#1a1a1a !important;font-weight:700}.ontario-critical-alert ::slotted(a:hover),.ontario-critical-alert ::slotted(a:focus){text-decoration:none !important}.ontario-critical-alert ::slotted(a:visited){color:#1a1a1a}';
const Ht = At;
const Nt = class {
	constructor(o) {
		t(this, o);
		this.content = undefined;
	}
	validateCriticalAlertContent(t) {
		if (!this.host.textContent) {
			if (s(t)) {
				const t = new c();
				t.addDesignSystemTag()
					.addMonospaceText(' content ')
					.addRegularText('for')
					.addMonospaceText(' <ontario-critical-alert> ')
					.addRegularText('was not provided.')
					.printMessage();
			}
		}
	}
	renderContent() {
		const t = this.content;
		if (typeof t === 'string') {
			return t;
		}
		return o('slot', null);
	}
	componentWillLoad() {
		this.validateCriticalAlertContent(this.content);
	}
	render() {
		return o(
			'div',
			{ key: '841c4ff6a936664a93111409d051c833a578454c', class: 'ontario-critical-alert' },
			o(
				'div',
				{ key: '1086dd05bbbd7b3a8bd0c7befbbe63e60474a03d', class: 'ontario-row' },
				o(
					'div',
					{ key: '75f974793fa516fe893c6843db567d93eb146fc0', class: 'ontario-column ontario-small-12' },
					o(
						'div',
						{ key: '5de3756f99c4d11da66d1427b505753df872cf7a', class: 'ontario-critical-alert__body' },
						o('div', {
							key: '8ff2551b474a794a1134d6fc04e9bffe6072f252',
							class: 'ontario-critical-alert__icon',
							innerHTML: Ct,
						}),
						o('p', { key: 'a63626aa08b991dbc8651b56a6aa08b6e285b1a7' }, this.renderContent()),
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
Nt.style = Ht;
var Tt;
var Lt = new Uint8Array(16);
function Ot() {
	if (!Tt) {
		Tt =
			(typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
			(typeof msCrypto !== 'undefined' &&
				typeof msCrypto.getRandomValues === 'function' &&
				msCrypto.getRandomValues.bind(msCrypto));
		if (!Tt) {
			throw new Error(
				'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported',
			);
		}
	}
	return Tt(Lt);
}
const St =
	/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Dt(t) {
	return typeof t === 'string' && St.test(t);
}
var $t = [];
for (var Bt = 0; Bt < 256; ++Bt) {
	$t.push((Bt + 256).toString(16).substr(1));
}
function Mt(t) {
	var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var i = (
		$t[t[o + 0]] +
		$t[t[o + 1]] +
		$t[t[o + 2]] +
		$t[t[o + 3]] +
		'-' +
		$t[t[o + 4]] +
		$t[t[o + 5]] +
		'-' +
		$t[t[o + 6]] +
		$t[t[o + 7]] +
		'-' +
		$t[t[o + 8]] +
		$t[t[o + 9]] +
		'-' +
		$t[t[o + 10]] +
		$t[t[o + 11]] +
		$t[t[o + 12]] +
		$t[t[o + 13]] +
		$t[t[o + 14]] +
		$t[t[o + 15]]
	).toLowerCase();
	if (!Dt(i)) {
		throw TypeError('Stringified UUID is invalid');
	}
	return i;
}
function It(t, o, i) {
	t = t || {};
	var e = t.random || (t.rng || Ot)();
	e[6] = (e[6] & 15) | 64;
	e[8] = (e[8] & 63) | 128;
	if (o) {
		i = i || 0;
		for (var a = 0; a < 16; ++a) {
			o[i + a] = e[a];
		}
		return o;
	}
	return Mt(e);
}
const Wt = ({
	id: t,
	type: i,
	label: e,
	accessibilityLabel: a,
	placeholder: n,
	onInput: r,
	onChange: l,
	onFocus: s,
	onBlur: d,
	ariaDescribedBy: h,
	error: m = false,
	required: c = false,
}) => {
	const g = (t) => {
		var o, e;
		const a = (e = (o = t.target) === null || o === void 0 ? void 0 : o.value) !== null && e !== void 0 ? e : '';
		r(a, i);
	};
	const p = (t) => {
		var o, e;
		const a = (e = (o = t.target) === null || o === void 0 ? void 0 : o.value) !== null && e !== void 0 ? e : '';
		l(a, i);
	};
	const u = () => {
		s(i);
	};
	const f = () => {
		d(i);
	};
	return o(
		'div',
		{ class: `ontario-date__group-input ${m ? 'ontario-date--error' : ''}` },
		o('label', { htmlFor: t }, e, o('span', { class: 'ontario-show-for-sr' }, '(', a, ')')),
		o(ut, {
			className: 'ontario-input ontario-input--4-char-width',
			type: 'text',
			inputMode: 'numeric',
			id: t,
			required: !!c,
			placeholder: n,
			onInput: g,
			onChange: p,
			onFocus: u,
			onBlur: f,
			ariaInvalid: m,
			ariaDescribedBy: h,
		}),
	);
};
const Et = 1;
const qt = 31;
const Vt = 1;
const Rt = 12;
const jt = 999;
const Yt = 9999;
function Pt(t, o) {
	let i = 0;
	for (const e of t) {
		if (e[o] === true || e[o] === 'true') {
			i++;
			if (i > 1) {
				return true;
			}
		}
	}
	return false;
}
function Ut(t, o) {
	return t.map((t) => t[o]);
}
function Jt(t, o) {
	return t.map((t) => {
		const i = {};
		const e = {};
		Object.keys(t).forEach((a) => {
			if (a === 'data') {
				o.forEach((o) => {
					if (o in t.data) {
						i[o] = t.data[o];
					}
				});
			} else {
				e[a] = t[a];
			}
		});
		return Object.assign({ data: i }, e);
	});
}
function Zt(t, o, i) {
	const e = [];
	const a = t.filter((t) => {
		if (t[o] === i) {
			e.push(t);
			return false;
		}
		return true;
	});
	return [a, e];
}
function Qt(t) {
	const o = /^\d+\.?\d*$/;
	return o.test(t);
}
function Gt(t) {
	return !t || (t === null || t === void 0 ? void 0 : t.length) <= 0;
}
const Kt = (t) => {
	if (!Qt(t)) {
		return true;
	}
	const o = Number(t);
	return o < Et || o > qt;
};
const Xt = (t) => {
	if (!Qt(t)) {
		return true;
	}
	const o = Number(t);
	return o < Vt || o > Rt;
};
const to = (t, o = jt, i = Yt) => {
	if (!Qt(t)) {
		return true;
	}
	const e = Number(t);
	return e <= o || e > i;
};
const oo = ({
	dayValue: t,
	monthValue: o,
	yearValue: i,
	errorMessages: e,
	minYear: a,
	maxYear: n,
	dayVisible: r,
	monthVisible: l,
	yearVisible: s,
}) => {
	const {
		emptyDay: d,
		emptyMonth: h,
		emptyYear: m,
		emptyDayAndMonth: c,
		emptyDayAndYear: g,
		emptyMonthAndYear: p,
		invalidDate: u,
		invalidDay: f,
		invalidMonth: b,
		invalidYear: w,
	} = e;
	let v = '';
	let x = false;
	let _ = false;
	let y = false;
	const F = r && Gt(t);
	const k = l && Gt(o);
	const z = s && Gt(i);
	if (F && k && z) {
		v = u;
		x = true;
		_ = true;
		y = true;
	} else if (F && k) {
		v = c;
		x = true;
		_ = true;
	} else if (F && z) {
		v = g;
		x = true;
		y = true;
	} else if (k && z) {
		v = p;
		y = true;
		_ = true;
	} else if (F) {
		v = d;
		x = true;
	} else if (k) {
		v = h;
		_ = true;
	} else if (z) {
		v = m;
		y = true;
	}
	const C = r && Kt(t);
	const A = l && Xt(o);
	const H = s && to(i, a, n);
	if (Gt(v)) {
		if (C && A && H) {
			v = u;
			x = true;
			_ = true;
			y = true;
		} else if (C && A) {
			v = u;
			x = true;
			_ = true;
		} else if (C && H) {
			v = u;
			x = true;
			y = true;
		} else if (A && H) {
			v = u;
			_ = true;
			y = true;
		} else if (H) {
			v = w;
			y = true;
		} else if (A) {
			v = b;
			_ = true;
		} else if (C) {
			v = f;
			x = true;
		}
	}
	return { errorMessage: v, dayInvalid: x, monthInvalid: _, yearInvalid: y };
};
const io = (t) => {
	const o = t.includes('day');
	const i = t.includes('month');
	const e = t.includes('year');
	return { dayVisible: o, monthVisible: i, yearVisible: e };
};
const eo = ({ message: t, error: i = false }) => {
	const e = !i || Gt(t);
	return o(
		'div',
		{ role: 'alert', class: `ontario-error-messaging ${e ? 'ontario-error__hidden' : ''}` },
		o('ontario-icon-alert-error', null),
		o('div', { class: 'ontario-error-messaging__content' }, t),
	);
};
const ao =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1>.ontario-label--heading,.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1>.ontario-label--heading,.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1,h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1>.ontario-label--heading,.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1,h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul[class*=columns-] li:last-child,ol[class*=columns-] li:last-child{padding-bottom:0.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend--large{font-size:1.75rem}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-label{cursor:pointer;color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;line-height:1.5;margin:0 0 1rem 0;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-label{font-size:1.125rem;line-height:1.56}}.ontario-label--large{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2;max-width:26.25em}@media screen and (max-width: 40em){.ontario-label--large{font-size:1.4375rem;line-height:1.39}}h1>.ontario-label--heading{display:inline-block;margin:0}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-input:focus,.ontario-input:active{box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:box-shadow 0.1s ease-in-out}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;width:100%;padding:0.625rem 1rem;transition:box-shadow 0.1s ease-in-out}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}.ontario-form-group:last-of-type{margin-bottom:2.5rem}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-error-messaging{display:flex;align-items:flex-start;margin:-0.25rem 0 0.5rem 0;color:#D81A21;max-width:48rem}.ontario-error-messaging__content{margin-left:0.5rem}.ontario-input__error{border-color:#D81A21 !important}.ontario-error__hidden{display:none}.ontario-date__group{display:flex}.ontario-date__group label{font-weight:600}.ontario-date__group input{margin-top:1rem}.ontario-date__group-input{display:flex;flex-direction:column;margin-right:1.5rem}.ontario-date--error input{border:0.125rem solid #CD0000}';
const no = ao;
const ro = class {
	constructor(o) {
		t(this, o);
		this.inputOnInput = e(this, 'inputOnInput', 7);
		this.inputOnChange = e(this, 'inputOnChange', 7);
		this.inputOnBlur = e(this, 'inputOnBlur', 7);
		this.inputOnFocus = e(this, 'inputOnFocus', 7);
		this.inputErrorOccurred = e(this, 'inputErrorOccurred', 7);
		if (o.$hostElement$['s-ei']) {
			this.internals = o.$hostElement$['s-ei'];
		} else {
			this.internals = o.$hostElement$.attachInternals();
			o.$hostElement$['s-ei'] = this.internals;
		}
		this.isInvalidDate = () => this.dayInvalid || this.monthInvalid || this.yearInvalid;
		this.resetErrorState = () => {
			if (!this.isInvalidDate()) {
				return;
			}
			this.dayInvalid = false;
			this.monthInvalid = false;
			this.yearInvalid = false;
			this.errorMessage = '';
		};
		this.updateDateState = (t, o) => {
			switch (o) {
				case 'day':
					this.day = t;
					break;
				case 'month':
					this.month = t;
					break;
				case 'year':
					this.year = t;
					break;
			}
		};
		this.handleDateUpdates = (t, o) => {
			var i, e;
			if (!this.isDateTyped) {
				this.isDateTyped = true;
			}
			this.resetErrorState();
			this.updateDateState(t, o);
			if (this.year && this.month && this.day) {
				const t = new Date(Date.UTC(parseInt(this.year), parseInt(this.month) - 1, parseInt(this.day), 0, 0, 0, 0));
				(e = (i = this.internals) === null || i === void 0 ? void 0 : i.setFormValue) === null || e === void 0
					? void 0
					: e.call(i, t.toISOString());
			}
		};
		this.handleDateInput = (t, o) => {
			this.handleDateUpdates(t, o);
			this.inputOnInput.emit({ value: t, fieldType: o });
		};
		this.handleDateChanged = (t, o) => {
			this.handleDateUpdates(t, o);
			this.inputOnChange.emit({ value: t, fieldType: o });
			yt(this.element, 'change', { value: t, fieldType: o });
		};
		this.handleDateFocus = (t) => {
			this.inputOnFocus.emit(t);
		};
		this.handleDateBlur = (t) => {
			this.inputOnBlur.emit(t);
		};
		this.language = undefined;
		this.required = false;
		this.placeholder = undefined;
		this.caption = undefined;
		this.elementId = undefined;
		this.minYear = undefined;
		this.maxYear = undefined;
		this.hintText = undefined;
		this.dateOptions = ['day', 'month', 'year'];
		this.dateValidator = undefined;
		this.translations = T;
		this.captionState = undefined;
		this.isDateTyped = false;
		this.dayInvalid = false;
		this.monthInvalid = false;
		this.yearInvalid = false;
		this.errorMessage = undefined;
		this.day = '';
		this.month = '';
		this.year = '';
		this.placeholderState = undefined;
		this.dateOptionsState = undefined;
	}
	broadcastInputErrorOccurredEvent() {
		var t;
		this.inputErrorOccurred.emit({
			inputId: this.getId(),
			errorMessage: (t = this.errorMessage) !== null && t !== void 0 ? t : '',
		});
	}
	handleSetAppLanguage(t) {
		if (!this.language) {
			this.language = r(t);
		}
	}
	handleHeaderLanguageToggled(t) {
		this.language = r(t);
	}
	handleComponentBlur() {
		const { day: t, month: o, year: i, minYear: e, maxYear: a, dateValidator: n, dateOptionsState: r } = this;
		const { dayVisible: l, monthVisible: s, yearVisible: d } = io(r);
		if (!this.isDateTyped) {
			return;
		}
		const h = T.dateInput.error[this.getLanguage()];
		const {
			dayInvalid: m,
			monthInvalid: c,
			yearInvalid: g,
			errorMessage: p,
		} = n
			? n(t, o, i)
			: oo({
					dayValue: t,
					monthValue: o,
					yearValue: i,
					errorMessages: h,
					minYear: e,
					maxYear: a,
					dayVisible: l,
					monthVisible: s,
					yearVisible: d,
			  });
		this.dayInvalid = m;
		this.monthInvalid = c;
		this.yearInvalid = g;
		this.errorMessage = p;
	}
	updateCaptionState(t) {
		this.captionState = new wt(this.element.tagName, t, T, this.language, true, this.required);
	}
	updateLanguage() {
		this.updateCaptionState(this.caption);
	}
	processPlaceholder() {
		this.parseOptions(this.placeholder);
	}
	processDateOptions() {
		this.parseOptions(this.dateOptions);
	}
	parseOptions(t) {
		const o = typeof t === 'string';
		if (!t) {
			return;
		}
		try {
			if (t === this.placeholder) {
				this.placeholderState = o ? JSON.parse(t) : t;
			} else if (t === this.dateOptions) {
				this.dateOptionsState = o ? JSON.parse(t) : t;
			}
		} catch (t) {
			const o = new c();
			o.addDesignSystemTag()
				.addRegularText(' failed to parse props for ')
				.addMonospaceText('<ontario-date-input>')
				.addRegularText(' in ')
				.addMonospaceText('parseOptions()')
				.addRegularText(' method \n ')
				.addMonospaceText(t.stack)
				.printMessage(g.Error);
		}
	}
	getLanguage() {
		var t;
		return (t = this.language) !== null && t !== void 0 ? t : 'en';
	}
	getCaption() {
		var t;
		const o = this.getLanguage();
		const i = T.dateInput.caption[o];
		return (t = this.caption) !== null && t !== void 0 ? t : { captionText: i, captionType: 'default' };
	}
	getId() {
		var t;
		return (t = this.elementId) !== null && t !== void 0 ? t : '';
	}
	getHintTextId() {
		return `date-input-hint-${this.getId()}`;
	}
	getInputIds() {
		const t = this.getId();
		const o = `day-${t}`;
		const i = `month-${t}`;
		const e = `year-${t}`;
		return { dayId: o, monthId: i, yearId: e };
	}
	componentWillLoad() {
		var t;
		this.processPlaceholder();
		this.processDateOptions();
		this.updateCaptionState(this.getCaption());
		this.elementId = (t = this.elementId) !== null && t !== void 0 ? t : It();
		this.language = r(this.language);
	}
	render() {
		const { dateOptionsState: t, required: i, translations: e, hintText: a, placeholderState: n } = this;
		const r = this.getLanguage();
		const l = e.dateInput;
		const s = n !== null && n !== void 0 ? n : {};
		const { dayVisible: d, monthVisible: h, yearVisible: m } = io(t);
		const { dayId: c, monthId: g, yearId: p } = this.getInputIds();
		const u = this.getHintTextId();
		return o(
			'div',
			{ key: '0a751d8a1bd2e3a068e1683d046be12bfaf5ef4c', class: 'ontario-form-group' },
			o(
				'fieldset',
				{ key: '2abea67d43b6b831d9a297b1632cd74d0cb8793b', role: 'group', class: 'ontario-fieldset' },
				this.captionState.getCaption(),
				!!a && o('p', { id: u, class: 'ontario-hint' }, a),
				o(eo, {
					key: '2b290216a519f540d526832b55777c356924cc2f',
					message: this.errorMessage,
					error: this.isInvalidDate(),
				}),
				o(
					'div',
					{ key: 'a380db549b58eadf8dfda3936b4c3714db5b72b0', class: 'ontario-date__group' },
					m &&
						o(Wt, {
							id: p,
							type: 'year',
							label: l.year.label[r],
							accessibilityLabel: l.year.accessibility[r],
							required: !!i,
							error: this.yearInvalid,
							placeholder: s.year,
							onInput: this.handleDateInput,
							onChange: this.handleDateChanged,
							onBlur: this.handleDateBlur,
							onFocus: this.handleDateFocus,
							ariaDescribedBy: u,
						}),
					h &&
						o(Wt, {
							id: g,
							type: 'month',
							label: l.month.label[r],
							accessibilityLabel: l.month.accessibility[r],
							required: !!i,
							error: this.monthInvalid,
							placeholder: s.month,
							onInput: this.handleDateInput,
							onChange: this.handleDateChanged,
							onBlur: this.handleDateBlur,
							onFocus: this.handleDateFocus,
							ariaDescribedBy: u,
						}),
					d &&
						o(Wt, {
							id: c,
							type: 'day',
							label: l.day.label[r],
							accessibilityLabel: l.day.accessibility[r],
							required: !!i,
							error: this.dayInvalid,
							placeholder: s.day,
							onInput: this.handleDateInput,
							onChange: this.handleDateChanged,
							onBlur: this.handleDateBlur,
							onFocus: this.handleDateFocus,
							ariaDescribedBy: u,
						}),
				),
			),
		);
	}
	static get formAssociated() {
		return true;
	}
	get element() {
		return i(this);
	}
	static get watchers() {
		return {
			errorMessage: ['broadcastInputErrorOccurredEvent'],
			caption: ['updateCaptionState'],
			language: ['updateLanguage'],
		};
	}
};
ro.style = no;
const lo =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1>.ontario-label--heading,.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1>.ontario-label--heading,.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1,h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1>.ontario-label--heading,.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1,h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul[class*=columns-] li:last-child,ol[class*=columns-] li:last-child{padding-bottom:0.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend--large{font-size:1.75rem}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-label{cursor:pointer;color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;line-height:1.5;margin:0 0 1rem 0;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-label{font-size:1.125rem;line-height:1.56}}.ontario-label--large{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2;max-width:26.25em}@media screen and (max-width: 40em){.ontario-label--large{font-size:1.4375rem;line-height:1.39}}h1>.ontario-label--heading{display:inline-block;margin:0}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-input:focus,.ontario-input:active{box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:box-shadow 0.1s ease-in-out}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;width:100%;padding:0.625rem 1rem;transition:box-shadow 0.1s ease-in-out}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}.ontario-form-group:last-of-type{margin-bottom:2.5rem}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-dropdown{background-color:#FFFFFF;background-position:right 0.5rem center;background-repeat:no-repeat;background-size:2rem;padding-right:2.25rem;cursor:pointer}.ontario-dropdown.ontario-dropdown-hint-expander--true{margin-bottom:1rem}.ontario-dropdown::-ms-expand{display:none}.ontario-dropdown option{font-weight:normal}';
const so = lo;
const ho = class {
	constructor(o) {
		t(this, o);
		this.dropdownOnChange = e(this, 'dropdownOnChange', 7);
		this.dropdownOnBlur = e(this, 'dropdownOnBlur', 7);
		this.dropdownOnFocus = e(this, 'dropdownOnFocus', 7);
		if (o.$hostElement$['s-ei']) {
			this.internals = o.$hostElement$['s-ei'];
		} else {
			this.internals = o.$hostElement$.attachInternals();
			o.$hostElement$['s-ei'] = this.internals;
		}
		this.caption = undefined;
		this.language = undefined;
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
		this.translations = T;
	}
	handleSetAppLanguage(t) {
		if (!this.language) {
			this.language = r(t);
		}
	}
	handleHeaderLanguageToggled(t) {
		this.language = r(t);
	}
	validateName(t) {
		if (s(t)) {
			const t = new c();
			t.addDesignSystemTag()
				.addMonospaceText(' name ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-dropdown-list> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	}
	validateOptions(t) {
		if (d(t)) {
			const t = new c();
			t.addDesignSystemTag()
				.addMonospaceText(' options ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-dropdown-list> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	}
	parseOptions() {
		if (typeof this.options !== 'undefined') {
			if (!Array.isArray(this.options)) {
				this.internalOptions = JSON.parse(this.options);
			} else {
				this.internalOptions = this.options;
			}
		}
		this.validateSelectedOption(this.internalOptions);
	}
	updateCaptionState(t) {
		this.captionState = new wt(this.element.tagName, t, T, this.language, false, this.required);
	}
	parseHintText() {
		if (this.hintText) {
			const t = vt(this.hintText);
			this.internalHintText = t;
		}
	}
	updateLanguage() {
		this.updateCaptionState(this.caption);
	}
	parseHintExpander() {
		const t = this.hintExpander;
		if (t) {
			if (typeof t === 'string') this.internalHintExpander = JSON.parse(t);
			else this.internalHintExpander = t;
		}
	}
	handleEvent(t, o) {
		var i, e, a;
		const n = t.target;
		(e = (i = this.internals) === null || i === void 0 ? void 0 : i.setFormValue) === null || e === void 0
			? void 0
			: e.call(i, (a = n === null || n === void 0 ? void 0 : n.value) !== null && a !== void 0 ? a : '');
		_t(
			t,
			o,
			n,
			this.dropdownOnChange,
			this.dropdownOnFocus,
			this.dropdownOnBlur,
			undefined,
			'dropdown',
			this.customOnChange,
			this.customOnFocus,
			this.customOnBlur,
			undefined,
			this.element,
		);
	}
	getId() {
		var t;
		return (t = this.elementId) !== null && t !== void 0 ? t : '';
	}
	validateSelectedOption(t) {
		const o = 'selected';
		t.forEach((t) => {
			if (!t.hasOwnProperty(o)) {
				t.selected = false;
			}
		});
		if (Pt(t, o)) {
			const t = new c();
			t.addDesignSystemTag()
				.addMonospaceText(' There are duplicate truthy `selected` values ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-dropdown-list> ')
				.addRegularText('options. Please update options so only one truthy `selected` value exists.')
				.printMessage();
		}
		return t;
	}
	getDropdownArrow() {
		return { backgroundImage: `url(${a('./assets/ontario-material-dropdown-arrow-48px.svg')})` };
	}
	getClass() {
		return this.hintExpander
			? `ontario-input ontario-dropdown ontario-dropdown-hint-expander--true`
			: `ontario-input ontario-dropdown`;
	}
	async componentDidLoad() {
		var t;
		this.hintTextId = await ((t = this.hintTextRef) === null || t === void 0 ? void 0 : t.getHintTextId());
	}
	componentWillLoad() {
		var t;
		this.updateCaptionState(this.caption);
		this.parseOptions();
		this.validateName(this.name);
		this.validateOptions(this.internalOptions);
		this.elementId = (t = this.elementId) !== null && t !== void 0 ? t : It();
		this.parseHintText();
		this.parseHintExpander();
		this.language = r(this.language);
	}
	render() {
		var t, i;
		return o(
			'div',
			{ key: '47fd0fdb85aaf653302295aa5df2011e4b232be9', class: 'ontario-form-group' },
			this.captionState.getCaption(this.getId(), !!this.internalHintExpander),
			this.internalHintText &&
				o('ontario-hint-text', {
					hint: this.internalHintText.hint,
					hintContentType: this.internalHintText.hintContentType,
					ref: (t) => (this.hintTextRef = t),
				}),
			o(
				'select',
				{
					'key': 'e9fbdecebe37aaecff87ca27a75743b56fd38522',
					'class': this.getClass(),
					'aria-describedby': this.hintTextId,
					'id': this.getId(),
					'name': this.name,
					'style': this.getDropdownArrow(),
					'onChange': (t) => this.handleEvent(t, xt.Change),
					'onBlur': (t) => this.handleEvent(t, xt.Blur),
					'onFocus': (t) => this.handleEvent(t, xt.Focus),
					'required': !!this.required,
				},
				this.isEmptyStartOption &&
					(this.isEmptyStartOption === true || this.isEmptyStartOption === 'true'
						? o('option', null, this.translations.dropdownList.select[`${this.language}`])
						: o('option', null, this.isEmptyStartOption)),
				(i =
					(t = this.internalOptions) === null || t === void 0
						? void 0
						: t.map((t) => o('option', { value: t.value, selected: t.selected }, t.label))) !== null && i !== void 0
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
	static get formAssociated() {
		return true;
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
ho.style = so;
const mo =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1,h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1,h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul[class*=columns-] li:last-child,ol[class*=columns-] li:last-child{padding-bottom:0.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend--large{font-size:1.75rem}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}';
const co = mo;
const go = class {
	constructor(o) {
		t(this, o);
		this.legend = undefined;
		this.legendSize = 'default';
	}
	validateLegendSize() {
		const t = l(this.legendSize, ft);
		if (t) {
			return this.legendSize;
		} else {
			const t = new c();
			t.addDesignSystemTag()
				.addMonospaceText(` legendSize ${this.legendSize} `)
				.addRegularText('for')
				.addMonospaceText(' <ontario-fieldset> ')
				.addRegularText('is not a valid type. A default size will be applied.')
				.printMessage();
			return 'default';
		}
	}
	validateLegend() {
		this.validateLegendText(this.legend);
	}
	validateLegendText(t) {
		if (s(t)) {
			const t = new c();
			t.addDesignSystemTag()
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
		return o(
			'div',
			{ key: '630e96f72b61db1d5c36c7af29969d5e9128dc9f', class: 'ontario-form-group' },
			o(
				'fieldset',
				{ key: 'c2ae48560e067ef9c197da8032ba848962baec7b', class: 'ontario-fieldset' },
				o(
					'legend',
					{ key: 'f7d514246a171fd752863c314fe5849a8276bd11', class: this.getClass() },
					this.legendSize === 'heading' ? o('h1', null, this.legend) : this.legend,
				),
				o('slot', { key: 'f6d4de75ed7b718dcd624da6d5303f474a28b77a' }),
			),
		);
	}
	static get watchers() {
		return { legendSize: ['validateLegendSize'], legend: ['validateLegend'] };
	}
};
go.style = co;
const po = 32;
const uo = ({ facebook: t, twitter: i, instagram: e, youtube: a }) =>
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
					o('ontario-icon-facebook', { 'colour': 'white', 'icon-width': po }),
				),
			),
		i &&
			o(
				'li',
				null,
				o(
					'a',
					{ 'class': 'ontario-footer__link', 'href': i, 'aria-label': 'Twitter' },
					o('ontario-icon-twitter', { 'colour': 'white', 'icon-width': po }),
				),
			),
		e &&
			o(
				'li',
				null,
				o(
					'a',
					{ 'class': 'ontario-footer__link', 'href': e, 'aria-label': 'Instagram' },
					o('ontario-icon-instagram', { 'colour': 'white', 'icon-width': po }),
				),
			),
		a &&
			o(
				'li',
				null,
				o(
					'a',
					{ 'class': 'ontario-footer__link', 'href': a, 'aria-label': 'Youtube' },
					o('ontario-icon-youtube', { 'colour': 'white', 'icon-width': po }),
				),
			),
	);
const fo = '–';
const bo = ({ accessibilityLink: t, privacyLink: i, contactLink: e, printerLink: a, className: n }) =>
	o(
		'div',
		{ class: `ontario-row ${n !== null && n !== void 0 ? n : ''}` },
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
						o(
							'a',
							{ class: 'ontario-footer__link', href: e === null || e === void 0 ? void 0 : e.href },
							e === null || e === void 0 ? void 0 : e.text,
						),
					),
			),
			o(
				'div',
				{ class: 'ontario-footer__copyright' },
				o(
					'a',
					{ class: 'ontario-footer__link', href: a === null || a === void 0 ? void 0 : a.href },
					'© ',
					a === null || a === void 0 ? void 0 : a.text,
					' ',
					o('span', { class: 'ontario-nbsp' }, '2012', fo, String(new Date().getFullYear()).slice(-2)),
				),
			),
		),
	);
const wo = ({ content: t }) => {
	const { heading: i, headingLevel: e = 'h3', text: a, html: r, list: l, type: s = 'text' } = t;
	return o(
		n,
		null,
		i && o(e, { class: 'ontario-h5' }, i),
		s === 'text' && o('p', null, a),
		s === 'html' && o('div', { class: 'ontario-footer__paragraph', innerHTML: r }),
		s === 'list' &&
			!!(l === null || l === void 0 ? void 0 : l.length) &&
			o(
				'ul',
				null,
				l.map((t) => o('li', { class: 'ontario-footer__list_item', innerHTML: t })),
			),
	);
};
const vo = ({ data: t, socialLinks: i, isThreeColLayout: e = false, isFullWidthInMediumLayout: a = false }) => {
	const { title: n, content: r, button: l, headingLevel: s = 'h2' } = t;
	const d = e ? 'ontario-large-4 ontario-expanded-footer__one-third-block' : '';
	const h = a ? 'ontario-medium-12' : 'ontario-medium-6';
	return o(
		'div',
		{ class: `ontario-columns ontario-small-12 ${h} ${d}` },
		o(s, { class: 'ontario-h4' }, n),
		r.map((t) => o(wo, { content: t })),
		l && o('a', { class: 'ontario-footer__button ontario-button ontario-margin-bottom-0-!', href: l.link }, l.text),
		i && o(uo, Object.assign({}, i)),
	);
};
const xo = (t, i) => {
	const { topMargin: e, footerLinks: a, backgroundImagePath: n } = t;
	const r = { '--imagePath': n };
	const l = !e ? 'ontario-margin-top-0-!' : '';
	return o(
		'footer',
		{ class: `ontario-footer ontario-footer--expanded ${l}`, style: r },
		o('div', { class: 'ontario-footer__expanded-top-section' }, o('div', { class: 'ontario-row' }, i)),
		o(bo, Object.assign({}, a, { className: 'ontario-footer__expanded-bottom-section' })),
	);
};
const _o = (t) => {
	var o, i, e, a;
	return (
		!t ||
		!((o = t.column1) === null || o === void 0 ? void 0 : o.title) ||
		!((i = t.column1) === null || i === void 0 ? void 0 : i.content) ||
		!((e = t.column2) === null || e === void 0 ? void 0 : e.title) ||
		!((a = t.column2) === null || a === void 0 ? void 0 : a.content)
	);
};
const yo = (t) => {
	var o, i, e, a, n, r;
	return (
		!t ||
		!((o = t.column1) === null || o === void 0 ? void 0 : o.title) ||
		!((i = t.column1) === null || i === void 0 ? void 0 : i.content) ||
		!((e = t.column2) === null || e === void 0 ? void 0 : e.title) ||
		!((a = t.column2) === null || a === void 0 ? void 0 : a.content) ||
		!((n = t.column3) === null || n === void 0 ? void 0 : n.title) ||
		!((r = t.column3) === null || r === void 0 ? void 0 : r.content)
	);
};
const Fo =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}.ontario-row{margin:0 auto;max-width:72rem;width:100%}.ontario-row:before,.ontario-row:after{content:"";display:table}.ontario-row:after{clear:both}.ontario-row.ontario-row--collapse>.ontario-column,.ontario-row.ontario-row--collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-row--collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row .ontario-row{margin:0 -1rem;max-width:none;width:auto}.ontario-row .ontario-row:before,.ontario-row .ontario-row:after{content:"";display:table}.ontario-row .ontario-row:after{clear:both}.ontario-row .ontario-row.ontario-row--collapse{margin:0;max-width:none;width:auto}.ontario-row .ontario-row.ontario-row--collapse:before,.ontario-row .ontario-row.ontario-row--collapse:after{content:"";display:table}.ontario-row .ontario-row.ontario-row--collapse:after{clear:both}.ontario-column,.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;width:100%;float:left}.ontario-column+.ontario-column:last-child,.ontario-column+.ontario-columns:last-child,.ontario-columns+.ontario-column:last-child,.ontario-columns+.ontario-columns:last-child{float:right}.ontario-column+.ontario-column.ontario-end,.ontario-column+.ontario-columns.ontario-end,.ontario-columns+.ontario-column.ontario-end,.ontario-columns+.ontario-columns.ontario-end{float:left}@media only screen{.ontario-small-push-0{position:relative;left:0;right:auto}.ontario-small-pull-0{position:relative;right:0;left:auto}.ontario-small-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-small-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-small-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-small-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-small-push-3{position:relative;left:25%;right:auto}.ontario-small-pull-3{position:relative;right:25%;left:auto}.ontario-small-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-small-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-small-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-small-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-small-push-6{position:relative;left:50%;right:auto}.ontario-small-pull-6{position:relative;right:50%;left:auto}.ontario-small-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-small-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-small-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-small-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-small-push-9{position:relative;left:75%;right:auto}.ontario-small-pull-9{position:relative;right:75%;left:auto}.ontario-small-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-small-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-small-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-small-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-small-1{width:8.3333333333%}.ontario-small-2{width:16.6666666667%}.ontario-small-3{width:25%}.ontario-small-4{width:33.3333333333%}.ontario-small-5{width:41.6666666667%}.ontario-small-6{width:50%}.ontario-small-7{width:58.3333333333%}.ontario-small-8{width:66.6666666667%}.ontario-small-9{width:75%}.ontario-small-10{width:83.3333333333%}.ontario-small-11{width:91.6666666667%}.ontario-small-12{width:100%}.ontario-small-offset-0{margin-left:0 !important}.ontario-small-offset-1{margin-left:8.3333333333% !important}.ontario-small-offset-2{margin-left:16.6666666667% !important}.ontario-small-offset-3{margin-left:25% !important}.ontario-small-offset-4{margin-left:33.3333333333% !important}.ontario-small-offset-5{margin-left:41.6666666667% !important}.ontario-small-offset-6{margin-left:50% !important}.ontario-small-offset-7{margin-left:58.3333333333% !important}.ontario-small-offset-8{margin-left:66.6666666667% !important}.ontario-small-offset-9{margin-left:75% !important}.ontario-small-offset-10{margin-left:83.3333333333% !important}.ontario-small-offset-11{margin-left:91.6666666667% !important}.ontario-small-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-small-centered,.ontario-columns.ontario-small-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-small-uncentered,.ontario-columns.ontario-small-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-small-centered:last-child,.ontario-columns.ontario-small-centered:last-child{float:none}.ontario-column.ontario-small-uncentered:last-child,.ontario-columns.ontario-small-uncentered:last-child{float:left}.ontario-column.ontario-small-uncentered.ontario-opposite,.ontario-columns.ontario-small-uncentered.ontario-opposite{float:right}.ontario-row.ontario-small-collapse>.ontario-column,.ontario-row.ontario-small-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-small-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-small-uncollapse>.ontario-column,.ontario-row.ontario-small-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}}@media only screen and (min-width:40.063em){.ontario-medium-push-0{position:relative;left:0;right:auto}.ontario-medium-pull-0{position:relative;right:0;left:auto}.ontario-medium-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-medium-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-medium-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-medium-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-medium-push-3{position:relative;left:25%;right:auto}.ontario-medium-pull-3{position:relative;right:25%;left:auto}.ontario-medium-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-medium-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-medium-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-medium-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-medium-push-6{position:relative;left:50%;right:auto}.ontario-medium-pull-6{position:relative;right:50%;left:auto}.ontario-medium-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-medium-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-medium-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-medium-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-medium-push-9{position:relative;left:75%;right:auto}.ontario-medium-pull-9{position:relative;right:75%;left:auto}.ontario-medium-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-medium-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-medium-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-medium-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-medium-1{width:8.3333333333%}.ontario-medium-2{width:16.6666666667%}.ontario-medium-3{width:25%}.ontario-medium-4{width:33.3333333333%}.ontario-medium-5{width:41.6666666667%}.ontario-medium-6{width:50%}.ontario-medium-7{width:58.3333333333%}.ontario-medium-8{width:66.6666666667%}.ontario-medium-9{width:75%}.ontario-medium-10{width:83.3333333333%}.ontario-medium-11{width:91.6666666667%}.ontario-medium-12{width:100%}.ontario-medium-offset-0{margin-left:0 !important}.ontario-medium-offset-1{margin-left:8.3333333333% !important}.ontario-medium-offset-2{margin-left:16.6666666667% !important}.ontario-medium-offset-3{margin-left:25% !important}.ontario-medium-offset-4{margin-left:33.3333333333% !important}.ontario-medium-offset-5{margin-left:41.6666666667% !important}.ontario-medium-offset-6{margin-left:50% !important}.ontario-medium-offset-7{margin-left:58.3333333333% !important}.ontario-medium-offset-8{margin-left:66.6666666667% !important}.ontario-medium-offset-9{margin-left:75% !important}.ontario-medium-offset-10{margin-left:83.3333333333% !important}.ontario-medium-offset-11{margin-left:91.6666666667% !important}.ontario-medium-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-medium-centered,.ontario-columns.ontario-medium-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-medium-uncentered,.ontario-columns.ontario-medium-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-medium-centered:last-child,.ontario-columns.ontario-medium-centered:last-child{float:none}.ontario-column.ontario-medium-uncentered:last-child,.ontario-columns.ontario-medium-uncentered:last-child{float:left}.ontario-column.ontario-medium-uncentered.ontario-opposite,.ontario-columns.ontario-medium-uncentered.ontario-opposite{float:right}.ontario-row.ontario-medium-collapse>.ontario-column,.ontario-row.ontario-medium-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-medium-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-medium-uncollapse>.ontario-column,.ontario-row.ontario-medium-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}}@media only screen and (min-width:73.063em){.ontario-large-push-0{position:relative;left:0;right:auto}.ontario-large-pull-0{position:relative;right:0;left:auto}.ontario-large-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-large-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-large-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-large-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-large-push-3{position:relative;left:25%;right:auto}.ontario-large-pull-3{position:relative;right:25%;left:auto}.ontario-large-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-large-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-large-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-large-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-large-push-6{position:relative;left:50%;right:auto}.ontario-large-pull-6{position:relative;right:50%;left:auto}.ontario-large-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-large-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-large-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-large-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-large-push-9{position:relative;left:75%;right:auto}.ontario-large-pull-9{position:relative;right:75%;left:auto}.ontario-large-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-large-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-large-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-large-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-large-1{width:8.3333333333%}.ontario-large-2{width:16.6666666667%}.ontario-large-3{width:25%}.ontario-large-4{width:33.3333333333%}.ontario-large-5{width:41.6666666667%}.ontario-large-6{width:50%}.ontario-large-7{width:58.3333333333%}.ontario-large-8{width:66.6666666667%}.ontario-large-9{width:75%}.ontario-large-10{width:83.3333333333%}.ontario-large-11{width:91.6666666667%}.ontario-large-12{width:100%}.ontario-large-offset-0{margin-left:0 !important}.ontario-large-offset-1{margin-left:8.3333333333% !important}.ontario-large-offset-2{margin-left:16.6666666667% !important}.ontario-large-offset-3{margin-left:25% !important}.ontario-large-offset-4{margin-left:33.3333333333% !important}.ontario-large-offset-5{margin-left:41.6666666667% !important}.ontario-large-offset-6{margin-left:50% !important}.ontario-large-offset-7{margin-left:58.3333333333% !important}.ontario-large-offset-8{margin-left:66.6666666667% !important}.ontario-large-offset-9{margin-left:75% !important}.ontario-large-offset-10{margin-left:83.3333333333% !important}.ontario-large-offset-11{margin-left:91.6666666667% !important}.ontario-large-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-large-centered,.ontario-columns.ontario-large-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-large-uncentered,.ontario-columns.ontario-large-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-large-centered:last-child,.ontario-columns.ontario-large-centered:last-child{float:none}.ontario-column.ontario-large-uncentered:last-child,.ontario-columns.ontario-large-uncentered:last-child{float:left}.ontario-column.ontario-large-uncentered.ontario-opposite,.ontario-columns.ontario-large-uncentered.ontario-opposite{float:right}.ontario-row.ontario-large-collapse>.ontario-column,.ontario-row.ontario-large-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-large-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-large-uncollapse>.ontario-column,.ontario-row.ontario-large-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-push-0{position:relative;left:0;right:auto}.ontario-pull-0{position:relative;right:0;left:auto}.ontario-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-push-3{position:relative;left:25%;right:auto}.ontario-pull-3{position:relative;right:25%;left:auto}.ontario-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-push-6{position:relative;left:50%;right:auto}.ontario-pull-6{position:relative;right:50%;left:auto}.ontario-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-push-9{position:relative;left:75%;right:auto}.ontario-pull-9{position:relative;right:75%;left:auto}.ontario-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-pull-11{position:relative;right:91.6666666667%;left:auto}}@media only screen and (min-width:96.063em){.ontario-xlarge-push-0{position:relative;left:0;right:auto}.ontario-xlarge-pull-0{position:relative;right:0;left:auto}.ontario-xlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xlarge-push-3{position:relative;left:25%;right:auto}.ontario-xlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xlarge-push-6{position:relative;left:50%;right:auto}.ontario-xlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xlarge-push-9{position:relative;left:75%;right:auto}.ontario-xlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-xlarge-1{width:8.3333333333%}.ontario-xlarge-2{width:16.6666666667%}.ontario-xlarge-3{width:25%}.ontario-xlarge-4{width:33.3333333333%}.ontario-xlarge-5{width:41.6666666667%}.ontario-xlarge-6{width:50%}.ontario-xlarge-7{width:58.3333333333%}.ontario-xlarge-8{width:66.6666666667%}.ontario-xlarge-9{width:75%}.ontario-xlarge-10{width:83.3333333333%}.ontario-xlarge-11{width:91.6666666667%}.ontario-xlarge-12{width:100%}.ontario-xlarge-offset-0{margin-left:0 !important}.ontario-xlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xlarge-offset-3{margin-left:25% !important}.ontario-xlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xlarge-offset-6{margin-left:50% !important}.ontario-xlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xlarge-offset-9{margin-left:75% !important}.ontario-xlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xlarge-centered,.ontario-columns.ontario-xlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xlarge-uncentered,.ontario-columns.ontario-xlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xlarge-centered:last-child,.ontario-columns.ontario-xlarge-centered:last-child{float:none}.ontario-column.ontario-xlarge-uncentered:last-child,.ontario-columns.ontario-xlarge-uncentered:last-child{float:left}.ontario-column.ontario-xlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xlarge-collapse>.ontario-column,.ontario-row.ontario-xlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xlarge-uncollapse>.ontario-column,.ontario-row.ontario-xlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}}@media only screen and (min-width:120.063em){.ontario-xxlarge-push-0{position:relative;left:0;right:auto}.ontario-xxlarge-pull-0{position:relative;right:0;left:auto}.ontario-xxlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xxlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xxlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xxlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xxlarge-push-3{position:relative;left:25%;right:auto}.ontario-xxlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xxlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xxlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xxlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xxlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xxlarge-push-6{position:relative;left:50%;right:auto}.ontario-xxlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xxlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xxlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xxlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xxlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xxlarge-push-9{position:relative;left:75%;right:auto}.ontario-xxlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xxlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xxlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xxlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xxlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-xxlarge-1{width:8.3333333333%}.ontario-xxlarge-2{width:16.6666666667%}.ontario-xxlarge-3{width:25%}.ontario-xxlarge-4{width:33.3333333333%}.ontario-xxlarge-5{width:41.6666666667%}.ontario-xxlarge-6{width:50%}.ontario-xxlarge-7{width:58.3333333333%}.ontario-xxlarge-8{width:66.6666666667%}.ontario-xxlarge-9{width:75%}.ontario-xxlarge-10{width:83.3333333333%}.ontario-xxlarge-11{width:91.6666666667%}.ontario-xxlarge-12{width:100%}.ontario-xxlarge-offset-0{margin-left:0 !important}.ontario-xxlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xxlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xxlarge-offset-3{margin-left:25% !important}.ontario-xxlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xxlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xxlarge-offset-6{margin-left:50% !important}.ontario-xxlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xxlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xxlarge-offset-9{margin-left:75% !important}.ontario-xxlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xxlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xxlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xxlarge-centered,.ontario-columns.ontario-xxlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xxlarge-uncentered,.ontario-columns.ontario-xxlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xxlarge-centered:last-child,.ontario-columns.ontario-xxlarge-centered:last-child{float:none}.ontario-column.ontario-xxlarge-uncentered:last-child,.ontario-columns.ontario-xxlarge-uncentered:last-child{float:left}.ontario-column.ontario-xxlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xxlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xxlarge-collapse>.ontario-column,.ontario-row.ontario-xxlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xxlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xxlarge-uncollapse>.ontario-column,.ontario-row.ontario-xxlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul[class*=columns-] li:last-child,ol[class*=columns-] li:last-child{padding-bottom:0.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-margin-top-0-\\!{margin-top:0}.ontario-padding-top-0-\\!{padding-top:0}.ontario-margin-bottom-0-\\!{margin-bottom:0}.ontario-padding-bottom-0-\\!{padding-bottom:0}.ontario-margin-left-0-\\!{margin-left:0}.ontario-padding-left-0-\\!{padding-left:0}.ontario-margin-right-0-\\!{margin-right:0}.ontario-padding-right-0-\\!{padding-right:0}.ontario-margin-top-4-\\!{margin-top:0.25rem}.ontario-padding-top-4-\\!{padding-top:0.25rem}.ontario-margin-bottom-4-\\!{margin-bottom:0.25rem}.ontario-padding-bottom-4-\\!{padding-bottom:0.25rem}.ontario-margin-left-4-\\!{margin-left:0.25rem}.ontario-padding-left-4-\\!{padding-left:0.25rem}.ontario-margin-right-4-\\!{margin-right:0.25rem}.ontario-padding-right-4-\\!{padding-right:0.25rem}.ontario-margin-top-8-\\!{margin-top:0.5rem}.ontario-padding-top-8-\\!{padding-top:0.5rem}.ontario-margin-bottom-8-\\!{margin-bottom:0.5rem}.ontario-padding-bottom-8-\\!{padding-bottom:0.5rem}.ontario-margin-left-8-\\!{margin-left:0.5rem}.ontario-padding-left-8-\\!{padding-left:0.5rem}.ontario-margin-right-8-\\!{margin-right:0.5rem}.ontario-padding-right-8-\\!{padding-right:0.5rem}.ontario-margin-top-12-\\!{margin-top:0.75rem}.ontario-padding-top-12-\\!{padding-top:0.75rem}.ontario-margin-bottom-12-\\!{margin-bottom:0.75rem}.ontario-padding-bottom-12-\\!{padding-bottom:0.75rem}.ontario-margin-left-12-\\!{margin-left:0.75rem}.ontario-padding-left-12-\\!{padding-left:0.75rem}.ontario-margin-right-12-\\!{margin-right:0.75rem}.ontario-padding-right-12-\\!{padding-right:0.75rem}.ontario-margin-top-16-\\!{margin-top:1rem}.ontario-padding-top-16-\\!{padding-top:1rem}.ontario-margin-bottom-16-\\!{margin-bottom:1rem}.ontario-padding-bottom-16-\\!{padding-bottom:1rem}.ontario-margin-left-16-\\!{margin-left:1rem}.ontario-padding-left-16-\\!{padding-left:1rem}.ontario-margin-right-16-\\!{margin-right:1rem}.ontario-padding-right-16-\\!{padding-right:1rem}.ontario-margin-top-24-\\!{margin-top:1.5rem}.ontario-padding-top-24-\\!{padding-top:1.5rem}.ontario-margin-bottom-24-\\!{margin-bottom:1.5rem}.ontario-padding-bottom-24-\\!{padding-bottom:1.5rem}.ontario-margin-left-24-\\!{margin-left:1.5rem}.ontario-padding-left-24-\\!{padding-left:1.5rem}.ontario-margin-right-24-\\!{margin-right:1.5rem}.ontario-padding-right-24-\\!{padding-right:1.5rem}.ontario-margin-top-32-\\!{margin-top:2rem}.ontario-padding-top-32-\\!{padding-top:2rem}.ontario-margin-bottom-32-\\!{margin-bottom:2rem}.ontario-padding-bottom-32-\\!{padding-bottom:2rem}.ontario-margin-left-32-\\!{margin-left:2rem}.ontario-padding-left-32-\\!{padding-left:2rem}.ontario-margin-right-32-\\!{margin-right:2rem}.ontario-padding-right-32-\\!{padding-right:2rem}.ontario-margin-top-40-\\!{margin-top:2.5rem}.ontario-padding-top-40-\\!{padding-top:2.5rem}.ontario-margin-bottom-40-\\!{margin-bottom:2.5rem}.ontario-padding-bottom-40-\\!{padding-bottom:2.5rem}.ontario-margin-left-40-\\!{margin-left:2.5rem}.ontario-padding-left-40-\\!{padding-left:2.5rem}.ontario-margin-right-40-\\!{margin-right:2.5rem}.ontario-padding-right-40-\\!{padding-right:2.5rem}.ontario-margin-top-48-\\!{margin-top:3rem}.ontario-padding-top-48-\\!{padding-top:3rem}.ontario-margin-bottom-48-\\!{margin-bottom:3rem}.ontario-padding-bottom-48-\\!{padding-bottom:3rem}.ontario-margin-left-48-\\!{margin-left:3rem}.ontario-padding-left-48-\\!{padding-left:3rem}.ontario-margin-right-48-\\!{margin-right:3rem}.ontario-padding-right-48-\\!{padding-right:3rem}.ontario-margin-top-64-\\!{margin-top:4rem}.ontario-padding-top-64-\\!{padding-top:4rem}.ontario-margin-bottom-64-\\!{margin-bottom:4rem}.ontario-padding-bottom-64-\\!{padding-bottom:4rem}.ontario-margin-left-64-\\!{margin-left:4rem}.ontario-padding-left-64-\\!{padding-left:4rem}.ontario-margin-right-64-\\!{margin-right:4rem}.ontario-padding-right-64-\\!{padding-right:4rem}.ontario-padding-top-0-\\!{padding-top:0 !important}.ontario-padding-bottom-0-\\!{padding-bottom:0 !important}.ontario-padding-right-0-\\!{padding-right:0 !important}.ontario-padding-left-0-\\!{padding-left:0 !important}.ontario-padding-top-4-\\!{padding-top:0.25rem !important}.ontario-padding-bottom-4-\\!{padding-bottom:0.25rem !important}.ontario-padding-right-4-\\!{padding-right:0.25rem !important}.ontario-padding-left-4-\\!{padding-left:0.25rem !important}.ontario-padding-top-8-\\!{padding-top:0.5rem !important}.ontario-padding-bottom-8-\\!{padding-bottom:0.5rem !important}.ontario-padding-right-8-\\!{padding-right:0.5rem !important}.ontario-padding-left-8-\\!{padding-left:0.5rem !important}.ontario-padding-top-12-\\!{padding-top:0.75rem !important}.ontario-padding-bottom-12-\\!{padding-bottom:0.75rem !important}.ontario-padding-right-12-\\!{padding-right:0.75rem !important}.ontario-padding-left-12-\\!{padding-left:0.75rem !important}.ontario-padding-top-16-\\!{padding-top:1rem !important}.ontario-padding-bottom-16-\\!{padding-bottom:1rem !important}.ontario-padding-right-16-\\!{padding-right:1rem !important}.ontario-padding-left-16-\\!{padding-left:1rem !important}.ontario-padding-top-24-\\!{padding-top:1.5rem !important}.ontario-padding-bottom-24-\\!{padding-bottom:1.5rem !important}.ontario-padding-right-24-\\!{padding-right:1.5rem !important}.ontario-padding-left-24-\\!{padding-left:1.5rem !important}.ontario-padding-top-32-\\!{padding-top:2rem !important}.ontario-padding-bottom-32-\\!{padding-bottom:2rem !important}.ontario-padding-right-32-\\!{padding-right:2rem !important}.ontario-padding-left-32-\\!{padding-left:2rem !important}.ontario-padding-top-40-\\!{padding-top:2.5rem !important}.ontario-padding-bottom-40-\\!{padding-bottom:2.5rem !important}.ontario-padding-right-40-\\!{padding-right:2.5rem !important}.ontario-padding-left-40-\\!{padding-left:2.5rem !important}.ontario-padding-top-48-\\!{padding-top:3rem !important}.ontario-padding-bottom-48-\\!{padding-bottom:3rem !important}.ontario-padding-right-48-\\!{padding-right:3rem !important}.ontario-padding-left-48-\\!{padding-left:3rem !important}.ontario-padding-top-64-\\!{padding-top:4rem !important}.ontario-padding-bottom-64-\\!{padding-bottom:4rem !important}.ontario-padding-right-64-\\!{padding-right:4rem !important}.ontario-padding-left-64-\\!{padding-left:4rem !important}.ontario-padding-top-80-\\!{padding-top:5rem !important}.ontario-padding-bottom-80-\\!{padding-bottom:5rem !important}.ontario-padding-right-80-\\!{padding-right:5rem !important}.ontario-padding-left-80-\\!{padding-left:5rem !important}.ontario-margin-top-0-\\!{margin-top:0 !important}.ontario-margin-bottom-0-\\!{margin-bottom:0 !important}.ontario-margin-right-0-\\!{margin-right:0 !important}.ontario-margin-left-0-\\!{margin-left:0 !important}.ontario-margin-top-4-\\!{margin-top:0.25rem !important}.ontario-margin-bottom-4-\\!{margin-bottom:0.25rem !important}.ontario-margin-right-4-\\!{margin-right:0.25rem !important}.ontario-margin-left-4-\\!{margin-left:0.25rem !important}.ontario-margin-top-8-\\!{margin-top:0.5rem !important}.ontario-margin-bottom-8-\\!{margin-bottom:0.5rem !important}.ontario-margin-right-8-\\!{margin-right:0.5rem !important}.ontario-margin-left-8-\\!{margin-left:0.5rem !important}.ontario-margin-top-12-\\!{margin-top:0.75rem !important}.ontario-margin-bottom-12-\\!{margin-bottom:0.75rem !important}.ontario-margin-right-12-\\!{margin-right:0.75rem !important}.ontario-margin-left-12-\\!{margin-left:0.75rem !important}.ontario-margin-top-16-\\!{margin-top:1rem !important}.ontario-margin-bottom-16-\\!{margin-bottom:1rem !important}.ontario-margin-right-16-\\!{margin-right:1rem !important}.ontario-margin-left-16-\\!{margin-left:1rem !important}.ontario-margin-top-24-\\!{margin-top:1.5rem !important}.ontario-margin-bottom-24-\\!{margin-bottom:1.5rem !important}.ontario-margin-right-24-\\!{margin-right:1.5rem !important}.ontario-margin-left-24-\\!{margin-left:1.5rem !important}.ontario-margin-top-32-\\!{margin-top:2rem !important}.ontario-margin-bottom-32-\\!{margin-bottom:2rem !important}.ontario-margin-right-32-\\!{margin-right:2rem !important}.ontario-margin-left-32-\\!{margin-left:2rem !important}.ontario-margin-top-40-\\!{margin-top:2.5rem !important}.ontario-margin-bottom-40-\\!{margin-bottom:2.5rem !important}.ontario-margin-right-40-\\!{margin-right:2.5rem !important}.ontario-margin-left-40-\\!{margin-left:2.5rem !important}.ontario-margin-top-48-\\!{margin-top:3rem !important}.ontario-margin-bottom-48-\\!{margin-bottom:3rem !important}.ontario-margin-right-48-\\!{margin-right:3rem !important}.ontario-margin-left-48-\\!{margin-left:3rem !important}.ontario-margin-top-64-\\!{margin-top:4rem !important}.ontario-margin-bottom-64-\\!{margin-bottom:4rem !important}.ontario-margin-right-64-\\!{margin-right:4rem !important}.ontario-margin-left-64-\\!{margin-left:4rem !important}.ontario-margin-top-80-\\!{margin-top:5rem !important}.ontario-margin-bottom-80-\\!{margin-bottom:5rem !important}.ontario-margin-right-80-\\!{margin-right:5rem !important}.ontario-margin-left-80-\\!{margin-left:5rem !important}.ontario-footer{color:#FFFFFF;margin-top:5rem;padding:4rem 0}.ontario-footer .ontario-columns *:last-child{margin-bottom:0}@media screen and (max-width: 73em){.ontario-footer .ontario-columns{margin-bottom:3rem}.ontario-footer .ontario-columns:last-of-type{margin-bottom:0}}.ontario-footer__links-container{list-style:none;margin:0 0 1rem 0}@media screen and (min-width: 73em){.ontario-footer__links-container{margin-bottom:0.5rem}}.ontario-footer__links-container--inline{display:flex;flex-direction:column;flex-wrap:wrap}@media screen and (min-width: 40em){.ontario-footer__links-container--inline{flex-direction:row}}.ontario-footer__links-container--two-column-list{column-count:1;display:block;margin:0}@media screen and (min-width: 40em){.ontario-footer__links-container--two-column-list{column-count:2}.ontario-footer__links-container--two-column-list .ontario-footer__link{padding:0;margin:0 1rem 1rem 0}}.ontario-footer__links-container li{padding:0.25rem 0}.ontario-footer__link{color:#FFFFFF;display:inline-block;padding:0.5rem 0;margin:0;text-decoration:underline}.ontario-footer__link:hover,.ontario-footer__link:focus{text-decoration:none}.ontario-footer__link:visited,.ontario-footer__link:active,.ontario-footer__link:hover{color:#FFFFFF}@media screen and (min-width: 40em){.ontario-footer__link{padding:0;margin:0 3rem 1rem 0}}.ontario-footer__copyright a{margin:0}.ontario-footer__links-container--social{display:flex;flex-direction:row;flex-wrap:wrap}.ontario-footer__links-container--social .ontario-footer__link{background:transparent;border-radius:45%;margin:0 1rem 0.75rem 0;padding:0;outline:none;height:3.5rem;width:3.5rem;display:flex;justify-content:center;align-items:center}.ontario-footer__links-container--social .ontario-footer__link:hover,.ontario-footer__links-container--social .ontario-footer__link:focus{background-color:black}.ontario-footer__links-container--social .ontario-footer__link:hover .ontario-icon,.ontario-footer__links-container--social .ontario-footer__link:focus .ontario-icon{fill:#FFFFFF}@media screen and (min-width: 40em){.ontario-footer__links-container--social .ontario-footer__link{height:3rem;width:3rem}}.ontario-footer__links-container--social .ontario-footer__link .ontario-icon{fill:#FFFFFF;width:36px;height:36px}@media screen and (min-width: 40em){.ontario-footer__links-container--social .ontario-footer__link .ontario-icon{width:32px;height:32px}}.ontario-footer__paragraph{max-width:48rem;width:100%;margin-bottom:1.5rem}.ontario-footer p a,.ontario-footer__paragraph a,.ontario-footer__list_item a{color:#FFFFFF;font-weight:600}.ontario-footer p a:visited,.ontario-footer__paragraph a:visited,.ontario-footer__list_item a:visited{color:#FFFFFF}.ontario-footer p a:active,.ontario-footer__paragraph a:active,.ontario-footer__list_item a:active{color:#e6e6e6}.ontario-footer p a:focus,.ontario-footer p a:hover,.ontario-footer__paragraph a:focus,.ontario-footer__paragraph a:hover,.ontario-footer__list_item a:focus,.ontario-footer__list_item a:hover{text-decoration:none}.ontario-button.ontario-footer__button{background-color:#1a1a1a;border:2px solid #FFFFFF;border-color:#FFFFFF;color:#FFFFFF;margin-bottom:2rem;border-radius:0.25rem;box-sizing:border-box;box-shadow:none;display:inline-block;font-size:1.125rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:600;line-height:1.5555555556;margin:0 1.75rem 1.5rem 0;min-width:10rem;padding:0.625rem 1.5rem;text-align:center;text-decoration:none;cursor:pointer}.ontario-button.ontario-footer__button:hover{background-color:#4d4d4d}.ontario-button.ontario-footer__button:focus,.ontario-button.ontario-footer__button:active{background-color:#666666;box-shadow:0 0 0 0.25rem #009ADB;outline:0.25rem solid transparent;transition:all 0.1s ease-in-out}.ontario-footer__button+.ontario-footer__links-container{margin-top:1.5rem}.ontario-footer--default,.ontario-footer__expanded-top-section{position:relative}.ontario-footer--default:before,.ontario-footer__expanded-top-section:before{background-color:#333333;background-repeat:no-repeat;content:"";position:absolute;top:0;left:0;width:100%;height:100%}.ontario-footer--default:before{background-image:var(--imagePath, url(""))}.ontario-footer__expanded-top-section:before{background-image:var(--imagePath, url(""))}.ontario-footer--default{background-color:#1a1a1a;border-bottom:0.25rem solid #4d4d4d}.ontario-footer--default:before{background-size:112.5rem;background-position:calc(50vw - 73.5rem) -64rem}@media screen and (min-width: 40em){.ontario-footer--default:before{background-size:180rem;background-position:calc(50vw - 120rem) -106rem}}@media screen and (min-width: 73em){.ontario-footer--default:before{background-size:275rem;background-position:calc(50vw - 187rem) -160rem}}.ontario-footer--expanded{padding-top:0;background-color:#1a1a1a;border-bottom:0.25rem solid #4d4d4d}.ontario-footer__expanded-top-section{background-color:#262626;padding:4rem 0}.ontario-footer__expanded-top-section:before{background-size:165rem;background-position:calc(50vw - 125rem) -64rem}@media screen and (min-width: 40em){.ontario-footer__expanded-top-section:before{background-size:250rem;background-position:calc(50vw - 195rem) -106rem}}@media screen and (min-width: 73em){.ontario-footer__expanded-top-section:before{background-size:305rem;background-position:calc(50vw - 222rem) -160rem}}.ontario-footer__expanded-top-section .ontario-footer__link{text-decoration:underline}.ontario-footer__expanded-top-section .ontario-footer__link:hover,.ontario-footer__expanded-top-section .ontario-footer__link:focus{text-decoration:none}.ontario-footer__expanded-top-section .ontario-footer__link:active{color:#e6e6e6}.ontario-footer__expanded-top-section ul{margin-bottom:0}.ontario-expanded-footer__one-third-block{margin-bottom:0}.ontario-expanded-footer__one-third-block:first-of-type,.ontario-expanded-footer__one-third-block:nth-child(2){margin-bottom:3rem}@media screen and (min-width: 40em){.ontario-expanded-footer__one-third-block{margin-bottom:0}.ontario-expanded-footer__one-third-block:first-of-type{margin-bottom:3rem}.ontario-expanded-footer__one-third-block:nth-child(2){margin-bottom:0}}@media screen and (min-width: 73em){.ontario-expanded-footer__one-third-block{margin-bottom:0}.ontario-expanded-footer__one-third-block:first-of-type{margin-bottom:0}}.ontario-footer__expanded-bottom-section{background-color:#1a1a1a;padding-top:4rem}';
const ko = Fo;
const zo = class {
	constructor(o) {
		t(this, o);
		this.isTwoColumnLayout = () => this.type === 'twoColumn';
		this.isThreeColumnLayout = () => this.type === 'threeColumn';
		this.isExpandedLayout = () => this.isTwoColumnLayout() || this.isThreeColumnLayout();
		this.language = undefined;
		this.type = 'default';
		this.footerLinks = undefined;
		this.socialLinks = undefined;
		this.twoColumnOptions = undefined;
		this.threeColumnOptions = undefined;
		this.topMargin = true;
		this.assetBasePath = undefined;
		this.translations = T;
		this.footerLinksState = undefined;
		this.socialLinksState = undefined;
		this.twoColumnState = undefined;
		this.threeColumnState = undefined;
	}
	handleSetAppLanguage(t) {
		if (!this.language) {
			this.language = r(t);
		}
	}
	handleHeaderLanguageToggled(t) {
		this.language = r(t);
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
		if (this.isTwoColumnLayout() && _o(this.twoColumnState)) {
			const t = new c();
			t.addDesignSystemTag()
				.addMonospaceText(' twoColumnOptions ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-footer> ')
				.addRegularText('were not fully set. Please review your values and ensure all options are set.')
				.printMessage();
		}
	}
	verifyThreeColumnOptions() {
		if (this.isThreeColumnLayout() && yo(this.threeColumnState)) {
			const t = new c();
			t.addDesignSystemTag()
				.addMonospaceText(' threeColumnOptions ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-footer> ')
				.addRegularText('were not fully set. Please review your values and ensure all options are set.')
				.printMessage();
		}
	}
	parseOptions(t) {
		const o = t;
		const i = typeof o === 'string';
		if (!o) {
			return;
		}
		try {
			if (o === this.footerLinks) {
				this.footerLinksState = i ? JSON.parse(o) : o;
			} else if (o === this.socialLinks) {
				this.socialLinksState = i ? JSON.parse(o) : o;
			} else if (o === this.twoColumnOptions) {
				this.twoColumnState = i ? JSON.parse(o) : o;
			} else {
				this.threeColumnState = i ? JSON.parse(o) : o;
			}
		} catch (t) {
			const o = new c();
			o.addDesignSystemTag()
				.addRegularText(' failed to parse props for ')
				.addMonospaceText('<ontario-footer>')
				.addRegularText(' in ')
				.addMonospaceText('parseOptions()')
				.addRegularText(' method \n ')
				.addMonospaceText(t.stack)
				.printMessage(g.Error);
		}
	}
	getImageAssetSrcPath(t) {
		return `${this.assetBasePath ? this.assetBasePath : a('./assets')}/${t}`;
	}
	getBackgroundImagePath() {
		const t = this.isExpandedLayout()
			? 'footer-expanded-supergraphic-logo.svg'
			: 'footer-default-supergraphic-logo.svg';
		return `url(${this.getImageAssetSrcPath(t)})`;
	}
	getFooterClasses() {
		let t = 'ontario-footer ontario-footer--default';
		if (!this.topMargin) {
			t = `${t}  ontario-margin-top-0-!`;
		}
		return t;
	}
	getFooterLinks() {
		var t, o, i, e, a, n, r;
		const { language: l, translations: s, footerLinksState: d } = this;
		const {
			accessibilityLink: h,
			privacyLink: m,
			contactLink: c,
			printerLink: g,
		} = d !== null && d !== void 0 ? d : {};
		const p = {
			accessibilityLink: {
				href:
					(t = h === null || h === void 0 ? void 0 : h.href) !== null && t !== void 0 ? t : s.accessibilityLink.link[l],
				text:
					(o = h === null || h === void 0 ? void 0 : h.text) !== null && o !== void 0 ? o : s.accessibilityLink.text[l],
			},
			privacyLink: {
				href: (i = m === null || m === void 0 ? void 0 : m.href) !== null && i !== void 0 ? i : s.privacyLink.link[l],
				text: (e = m === null || m === void 0 ? void 0 : m.text) !== null && e !== void 0 ? e : s.privacyLink.text[l],
			},
			printerLink: {
				href: (a = g === null || g === void 0 ? void 0 : g.href) !== null && a !== void 0 ? a : s.printerLink.link[l],
				text: (n = g === null || g === void 0 ? void 0 : g.text) !== null && n !== void 0 ? n : s.printerLink.text[l],
			},
		};
		if (c) {
			p['contactLink'] = { href: c.href, text: (r = c.text) !== null && r !== void 0 ? r : s.contactUs[l] };
		}
		return p;
	}
	componentWillLoad() {
		this.processFooterLinks();
		this.processSocialLinks();
		this.processTwoColumnOptions();
		this.processThreeColumnOptions();
		this.language = r(this.language);
	}
	render() {
		const { socialLinksState: t, twoColumnState: i, threeColumnState: e, topMargin: a } = this;
		const n = this.getFooterLinks();
		if (this.isTwoColumnLayout()) {
			return o(
				xo,
				{ footerLinks: n, topMargin: a, backgroundImagePath: this.getBackgroundImagePath() },
				o(vo, { data: i.column1 }),
				o(vo, { data: i.column2, socialLinks: t }),
			);
		}
		if (this.isThreeColumnLayout()) {
			return o(
				xo,
				{ footerLinks: n, topMargin: a, backgroundImagePath: this.getBackgroundImagePath() },
				o(vo, { data: e.column1, isThreeColLayout: true, isFullWidthInMediumLayout: true }),
				o(vo, { data: e.column2, isThreeColLayout: true }),
				o(vo, { data: e.column3, socialLinks: t, isThreeColLayout: true }),
			);
		}
		return o(
			'footer',
			{ class: this.getFooterClasses(), style: { '--imagePath': this.getBackgroundImagePath() } },
			o(bo, Object.assign({}, n)),
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
zo.style = ko;
const Co = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 24 24"><path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6L19 6.4z" fill="#ffffff"/></svg>\n`;
const Ao = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="#ffffff"/></svg>`;
const Ho = `<svg class="svg-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="none"><path d="M15.5 14h-.8l-.28-.27A6.47 6.47 0 0 0 16 9.5a6.5 6.5 0 1 0-13 0A6.5 6.5 0 0 0 9.5 16a6.47 6.47 0 0 0 4.23-1.57l.27.28v.8l5 5 1.5-1.5-5-5zm-6 0C7 14 5 12 5 9.5S7 5 9.5 5 14 7 14 9.5 12 14 9.5 14z"/></svg>\n`;
const No = `<svg class="svg-icon" role="img" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#ffffff"><path d="M15.5 14h-.8l-.28-.27A6.47 6.47 0 0 0 16 9.5a6.5 6.5 0 1 0-13 0A6.5 6.5 0 0 0 9.5 16a6.47 6.47 0 0 0 4.23-1.57l.27.28v.8l5 5 1.5-1.5-5-5zm-6 0C7 14 5 12 5 9.5S7 5 9.5 5 14 7 14 9.5 12 14 9.5 14z"/></svg>\n`;
const To = [
	{ title: 'Arts and Culture', href: 'https://www.ontario.ca/page/arts-and-culture' },
	{ title: 'Business and economy', href: 'https://www.ontario.ca/page/business-and-economy' },
	{ title: 'COVID-19', href: 'https://www.ontario.ca/page/covid-19-coronavirus' },
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
const Lo = [
	{ title: 'Affaires et économie', href: 'https://www.ontario.ca/fr/page/affaires-et-economie' },
	{ title: 'Arts et culture', href: 'https://www.ontario.ca/fr/page/arts-et-culture' },
	{ title: 'Conduite et routes', href: 'https://www.ontario.ca/fr/page/conduite-et-routes' },
	{ title: 'COVID-19', href: 'https://www.ontario.ca/fr/page/covid-19-le-coronavirus' },
	{ title: 'Domicile et communauté', href: 'https://www.ontario.ca/fr/page/domicile-et-communaute' },
	{ title: 'Éducation et formation', href: 'https://www.ontario.ca/fr/page/education-et-formation' },
	{ title: 'Environnement et énergie', href: 'https://www.ontario.ca/fr/page/environnement-et-energie' },
	{ title: 'Gouvernement', href: 'https://www.ontario.ca/fr/page/gouvernement' },
	{ title: 'Impôts et avantages fiscaux', href: 'https://www.ontario.ca/fr/page/impots-et-avantages-fiscaux' },
	{ title: 'Lois et sécurité', href: 'https://www.ontario.ca/fr/page/lois-et-securite' },
	{ title: 'Régions rurales et du Nord', href: 'https://www.ontario.ca/fr/page/regions-rurales-et-du-nord' },
	{ title: 'Santé et bien-être', href: 'https://www.ontario.ca/fr/page/les-soins-de-sante-en-ontario' },
	{ title: 'Travail et emploi', href: 'https://www.ontario.ca/fr/page/travail-et-emploi' },
	{ title: 'Voyage et loisirs', href: 'https://www.ontario.ca/fr/page/voyage-et-loisirs' },
];
const Oo = { en: To, fr: Lo };
const So = 'https://www.ontario.ca/system/menu/main/linkset';
const Do = 'https://www.ontario.ca/system/menu/main-fr/linkset';
const $o = { ONTARIO_HEADER_API_URL_EN: So, ONTARIO_HEADER_API_URL_FR: Do };
const Bo =
	'.ontario-application-subheader__heading{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}.ontario-application-subheader__heading{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){.ontario-application-subheader__heading{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}.ontario-application-navigation a:focus,.ontario-application-navigation a:active,.ontario-header-button:focus,.ontario-input:focus,.ontario-input:active{box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:box-shadow 0.1s ease-in-out}.ontario-row{margin:0 auto;max-width:72rem;width:100%}.ontario-row:before,.ontario-row:after{content:"";display:table}.ontario-row:after{clear:both}.ontario-row.ontario-row--collapse>.ontario-column,.ontario-row.ontario-row--collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-row--collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row .ontario-row{margin:0 -1rem;max-width:none;width:auto}.ontario-row .ontario-row:before,.ontario-row .ontario-row:after{content:"";display:table}.ontario-row .ontario-row:after{clear:both}.ontario-row .ontario-row.ontario-row--collapse{margin:0;max-width:none;width:auto}.ontario-row .ontario-row.ontario-row--collapse:before,.ontario-row .ontario-row.ontario-row--collapse:after{content:"";display:table}.ontario-row .ontario-row.ontario-row--collapse:after{clear:both}.ontario-column,.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;width:100%;float:left}.ontario-column+.ontario-column:last-child,.ontario-column+.ontario-columns:last-child,.ontario-columns+.ontario-column:last-child,.ontario-columns+.ontario-columns:last-child{float:right}.ontario-column+.ontario-column.ontario-end,.ontario-column+.ontario-columns.ontario-end,.ontario-columns+.ontario-column.ontario-end,.ontario-columns+.ontario-columns.ontario-end{float:left}@media only screen{.ontario-small-push-0{position:relative;left:0;right:auto}.ontario-small-pull-0{position:relative;right:0;left:auto}.ontario-small-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-small-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-small-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-small-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-small-push-3{position:relative;left:25%;right:auto}.ontario-small-pull-3{position:relative;right:25%;left:auto}.ontario-small-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-small-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-small-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-small-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-small-push-6{position:relative;left:50%;right:auto}.ontario-small-pull-6{position:relative;right:50%;left:auto}.ontario-small-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-small-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-small-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-small-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-small-push-9{position:relative;left:75%;right:auto}.ontario-small-pull-9{position:relative;right:75%;left:auto}.ontario-small-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-small-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-small-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-small-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-small-1{width:8.3333333333%}.ontario-small-2{width:16.6666666667%}.ontario-small-3{width:25%}.ontario-small-4{width:33.3333333333%}.ontario-small-5{width:41.6666666667%}.ontario-small-6{width:50%}.ontario-small-7{width:58.3333333333%}.ontario-small-8{width:66.6666666667%}.ontario-small-9{width:75%}.ontario-small-10{width:83.3333333333%}.ontario-small-11{width:91.6666666667%}.ontario-small-12{width:100%}.ontario-small-offset-0{margin-left:0 !important}.ontario-small-offset-1{margin-left:8.3333333333% !important}.ontario-small-offset-2{margin-left:16.6666666667% !important}.ontario-small-offset-3{margin-left:25% !important}.ontario-small-offset-4{margin-left:33.3333333333% !important}.ontario-small-offset-5{margin-left:41.6666666667% !important}.ontario-small-offset-6{margin-left:50% !important}.ontario-small-offset-7{margin-left:58.3333333333% !important}.ontario-small-offset-8{margin-left:66.6666666667% !important}.ontario-small-offset-9{margin-left:75% !important}.ontario-small-offset-10{margin-left:83.3333333333% !important}.ontario-small-offset-11{margin-left:91.6666666667% !important}.ontario-small-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-small-centered,.ontario-columns.ontario-small-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-small-uncentered,.ontario-columns.ontario-small-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-small-centered:last-child,.ontario-columns.ontario-small-centered:last-child{float:none}.ontario-column.ontario-small-uncentered:last-child,.ontario-columns.ontario-small-uncentered:last-child{float:left}.ontario-column.ontario-small-uncentered.ontario-opposite,.ontario-columns.ontario-small-uncentered.ontario-opposite{float:right}.ontario-row.ontario-small-collapse>.ontario-column,.ontario-row.ontario-small-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-small-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-small-uncollapse>.ontario-column,.ontario-row.ontario-small-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}}@media only screen and (min-width:40.063em){.ontario-medium-push-0{position:relative;left:0;right:auto}.ontario-medium-pull-0{position:relative;right:0;left:auto}.ontario-medium-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-medium-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-medium-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-medium-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-medium-push-3{position:relative;left:25%;right:auto}.ontario-medium-pull-3{position:relative;right:25%;left:auto}.ontario-medium-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-medium-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-medium-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-medium-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-medium-push-6{position:relative;left:50%;right:auto}.ontario-medium-pull-6{position:relative;right:50%;left:auto}.ontario-medium-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-medium-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-medium-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-medium-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-medium-push-9{position:relative;left:75%;right:auto}.ontario-medium-pull-9{position:relative;right:75%;left:auto}.ontario-medium-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-medium-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-medium-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-medium-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-medium-1{width:8.3333333333%}.ontario-medium-2{width:16.6666666667%}.ontario-medium-3{width:25%}.ontario-medium-4{width:33.3333333333%}.ontario-medium-5{width:41.6666666667%}.ontario-medium-6{width:50%}.ontario-medium-7{width:58.3333333333%}.ontario-medium-8{width:66.6666666667%}.ontario-medium-9{width:75%}.ontario-medium-10{width:83.3333333333%}.ontario-medium-11{width:91.6666666667%}.ontario-medium-12{width:100%}.ontario-medium-offset-0{margin-left:0 !important}.ontario-medium-offset-1{margin-left:8.3333333333% !important}.ontario-medium-offset-2{margin-left:16.6666666667% !important}.ontario-medium-offset-3{margin-left:25% !important}.ontario-medium-offset-4{margin-left:33.3333333333% !important}.ontario-medium-offset-5{margin-left:41.6666666667% !important}.ontario-medium-offset-6{margin-left:50% !important}.ontario-medium-offset-7{margin-left:58.3333333333% !important}.ontario-medium-offset-8{margin-left:66.6666666667% !important}.ontario-medium-offset-9{margin-left:75% !important}.ontario-medium-offset-10{margin-left:83.3333333333% !important}.ontario-medium-offset-11{margin-left:91.6666666667% !important}.ontario-medium-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-medium-centered,.ontario-columns.ontario-medium-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-medium-uncentered,.ontario-columns.ontario-medium-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-medium-centered:last-child,.ontario-columns.ontario-medium-centered:last-child{float:none}.ontario-column.ontario-medium-uncentered:last-child,.ontario-columns.ontario-medium-uncentered:last-child{float:left}.ontario-column.ontario-medium-uncentered.ontario-opposite,.ontario-columns.ontario-medium-uncentered.ontario-opposite{float:right}.ontario-row.ontario-medium-collapse>.ontario-column,.ontario-row.ontario-medium-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-medium-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-medium-uncollapse>.ontario-column,.ontario-row.ontario-medium-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}}@media only screen and (min-width:73.063em){.ontario-large-push-0{position:relative;left:0;right:auto}.ontario-large-pull-0{position:relative;right:0;left:auto}.ontario-large-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-large-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-large-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-large-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-large-push-3{position:relative;left:25%;right:auto}.ontario-large-pull-3{position:relative;right:25%;left:auto}.ontario-large-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-large-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-large-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-large-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-large-push-6{position:relative;left:50%;right:auto}.ontario-large-pull-6{position:relative;right:50%;left:auto}.ontario-large-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-large-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-large-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-large-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-large-push-9{position:relative;left:75%;right:auto}.ontario-large-pull-9{position:relative;right:75%;left:auto}.ontario-large-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-large-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-large-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-large-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-large-1{width:8.3333333333%}.ontario-large-2{width:16.6666666667%}.ontario-large-3{width:25%}.ontario-large-4{width:33.3333333333%}.ontario-large-5{width:41.6666666667%}.ontario-large-6{width:50%}.ontario-large-7{width:58.3333333333%}.ontario-large-8{width:66.6666666667%}.ontario-large-9{width:75%}.ontario-large-10{width:83.3333333333%}.ontario-large-11{width:91.6666666667%}.ontario-large-12{width:100%}.ontario-large-offset-0{margin-left:0 !important}.ontario-large-offset-1{margin-left:8.3333333333% !important}.ontario-large-offset-2{margin-left:16.6666666667% !important}.ontario-large-offset-3{margin-left:25% !important}.ontario-large-offset-4{margin-left:33.3333333333% !important}.ontario-large-offset-5{margin-left:41.6666666667% !important}.ontario-large-offset-6{margin-left:50% !important}.ontario-large-offset-7{margin-left:58.3333333333% !important}.ontario-large-offset-8{margin-left:66.6666666667% !important}.ontario-large-offset-9{margin-left:75% !important}.ontario-large-offset-10{margin-left:83.3333333333% !important}.ontario-large-offset-11{margin-left:91.6666666667% !important}.ontario-large-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-large-centered,.ontario-columns.ontario-large-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-large-uncentered,.ontario-columns.ontario-large-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-large-centered:last-child,.ontario-columns.ontario-large-centered:last-child{float:none}.ontario-column.ontario-large-uncentered:last-child,.ontario-columns.ontario-large-uncentered:last-child{float:left}.ontario-column.ontario-large-uncentered.ontario-opposite,.ontario-columns.ontario-large-uncentered.ontario-opposite{float:right}.ontario-row.ontario-large-collapse>.ontario-column,.ontario-row.ontario-large-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-large-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-large-uncollapse>.ontario-column,.ontario-row.ontario-large-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-push-0{position:relative;left:0;right:auto}.ontario-pull-0{position:relative;right:0;left:auto}.ontario-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-push-3{position:relative;left:25%;right:auto}.ontario-pull-3{position:relative;right:25%;left:auto}.ontario-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-push-6{position:relative;left:50%;right:auto}.ontario-pull-6{position:relative;right:50%;left:auto}.ontario-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-push-9{position:relative;left:75%;right:auto}.ontario-pull-9{position:relative;right:75%;left:auto}.ontario-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-pull-11{position:relative;right:91.6666666667%;left:auto}}@media only screen and (min-width:96.063em){.ontario-xlarge-push-0{position:relative;left:0;right:auto}.ontario-xlarge-pull-0{position:relative;right:0;left:auto}.ontario-xlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xlarge-push-3{position:relative;left:25%;right:auto}.ontario-xlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xlarge-push-6{position:relative;left:50%;right:auto}.ontario-xlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xlarge-push-9{position:relative;left:75%;right:auto}.ontario-xlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-xlarge-1{width:8.3333333333%}.ontario-xlarge-2{width:16.6666666667%}.ontario-xlarge-3{width:25%}.ontario-xlarge-4{width:33.3333333333%}.ontario-xlarge-5{width:41.6666666667%}.ontario-xlarge-6{width:50%}.ontario-xlarge-7{width:58.3333333333%}.ontario-xlarge-8{width:66.6666666667%}.ontario-xlarge-9{width:75%}.ontario-xlarge-10{width:83.3333333333%}.ontario-xlarge-11{width:91.6666666667%}.ontario-xlarge-12{width:100%}.ontario-xlarge-offset-0{margin-left:0 !important}.ontario-xlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xlarge-offset-3{margin-left:25% !important}.ontario-xlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xlarge-offset-6{margin-left:50% !important}.ontario-xlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xlarge-offset-9{margin-left:75% !important}.ontario-xlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xlarge-centered,.ontario-columns.ontario-xlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xlarge-uncentered,.ontario-columns.ontario-xlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xlarge-centered:last-child,.ontario-columns.ontario-xlarge-centered:last-child{float:none}.ontario-column.ontario-xlarge-uncentered:last-child,.ontario-columns.ontario-xlarge-uncentered:last-child{float:left}.ontario-column.ontario-xlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xlarge-collapse>.ontario-column,.ontario-row.ontario-xlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xlarge-uncollapse>.ontario-column,.ontario-row.ontario-xlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}}@media only screen and (min-width:120.063em){.ontario-xxlarge-push-0{position:relative;left:0;right:auto}.ontario-xxlarge-pull-0{position:relative;right:0;left:auto}.ontario-xxlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xxlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xxlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xxlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xxlarge-push-3{position:relative;left:25%;right:auto}.ontario-xxlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xxlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xxlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xxlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xxlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xxlarge-push-6{position:relative;left:50%;right:auto}.ontario-xxlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xxlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xxlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xxlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xxlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xxlarge-push-9{position:relative;left:75%;right:auto}.ontario-xxlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xxlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xxlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xxlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xxlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-xxlarge-1{width:8.3333333333%}.ontario-xxlarge-2{width:16.6666666667%}.ontario-xxlarge-3{width:25%}.ontario-xxlarge-4{width:33.3333333333%}.ontario-xxlarge-5{width:41.6666666667%}.ontario-xxlarge-6{width:50%}.ontario-xxlarge-7{width:58.3333333333%}.ontario-xxlarge-8{width:66.6666666667%}.ontario-xxlarge-9{width:75%}.ontario-xxlarge-10{width:83.3333333333%}.ontario-xxlarge-11{width:91.6666666667%}.ontario-xxlarge-12{width:100%}.ontario-xxlarge-offset-0{margin-left:0 !important}.ontario-xxlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xxlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xxlarge-offset-3{margin-left:25% !important}.ontario-xxlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xxlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xxlarge-offset-6{margin-left:50% !important}.ontario-xxlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xxlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xxlarge-offset-9{margin-left:75% !important}.ontario-xxlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xxlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xxlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xxlarge-centered,.ontario-columns.ontario-xxlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xxlarge-uncentered,.ontario-columns.ontario-xxlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xxlarge-centered:last-child,.ontario-columns.ontario-xxlarge-centered:last-child{float:none}.ontario-column.ontario-xxlarge-uncentered:last-child,.ontario-columns.ontario-xxlarge-uncentered:last-child{float:left}.ontario-column.ontario-xxlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xxlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xxlarge-collapse>.ontario-column,.ontario-row.ontario-xxlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xxlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xxlarge-uncollapse>.ontario-column,.ontario-row.ontario-xxlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;width:100%;padding:0.625rem 1rem;transition:box-shadow 0.1s ease-in-out}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}.ontario-form-group:last-of-type{margin-bottom:2.5rem}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-application-header{display:flex;align-items:center;background-color:#1a1a1a;color:#FFFFFF;height:3.125rem !important;position:relative;z-index:5}.ontario-application-header>.ontario-row{display:flex;align-items:center}.ontario-application-header-container{position:relative;width:100%}.ontario-header-button.ontario-application-navigation--open:hover{background-color:#666666}.ontario-header-button.ontario-application-navigation--closed:active{background-color:#1a1a1a}.ontario-header-button--with-outline{border:2px solid #FFFFFF;margin:0 0 0 1rem;padding:0.375rem 1rem}.ontario-application-subheader .ontario-header-button,.ontario-application-navigation .ontario-header-button{background-color:#4d4d4d}.ontario-header-button--closed:focus{box-shadow:none;outline:none;transition:none}.ontario-application-header__logo,.ontario-application-header__logo a,.ontario-application-header__lang-toggle,.ontario-application-subheader__container,.ontario-application-subheader__menu-container,.ontario-application-subheader__menu{display:flex;align-items:center;outline:none}.ontario-application-header__logo a:focus{box-shadow:0 0 0 4px #009ADB;transition:all 0.1s ease-in-out}.ontario-application-header__logo svg,.ontario-application-header__logo img{width:100px;height:25px}.ontario-application-header__lang-toggle{justify-content:flex-end}.ontario-application-header__lang-toggle a{font-size:1rem;line-height:1.375rem;height:auto;outline:none;padding:0.5rem 0.75rem}.ontario-application-subheader{padding:1.25rem 0;background-color:#404040;overflow:visible;position:relative;z-index:5}@media screen and (min-width: 73em){.ontario-application-subheader{z-index:0}}.ontario-application-subheader>.ontario-row{position:relative}.ontario-application-header-container{position:relative;z-index:5}.ontario-application-header>.ontario-row{display:flex;align-items:center}.ontario-application-subheader .ontario-header-button{visibility:visible}.ontario-application-subheader .ontario-header-button,.ontario-application-navigation .ontario-header-button{background-color:#4d4d4d}.ontario-application-subheader .ontario-header-button:hover,.ontario-application-navigation .ontario-header-button:hover{background-color:#666666}.ontario-application-subheader .ontario-header-button:active,.ontario-application-navigation .ontario-header-button:active{background-color:#1a1a1a}.ontario-header-button--without-outline:hover{background-color:#4d4d4d}.ontario-header-button--without-outline:focus{box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:all 0.1s ease-in-out}.ontario-application-subheader__heading{padding:0.375rem 0;margin-bottom:0;max-width:65%}.ontario-application-subheader__heading a{color:#FFFFFF;font-weight:600;text-decoration:none}.ontario-application-subheader__heading a:focus{box-shadow:0 0 0 4px #009ADB;transition:all 0.1s ease-in-out}.ontario-application-subheader__heading a:hover,.ontario-application-subheader__heading a:active,.ontario-application-subheader__heading a:visited{color:#FFFFFF;text-decoration:underline}.ontario-application-subheader .ontario-header-button{visibility:visible;background-color:#4d4d4d}.ontario-application-subheader .ontario-header-button:hover{background-color:#666666}.ontario-application-subheader .ontario-header-button:active{background-color:#1a1a1a}.ontario-header__menu-toggler span{display:flex}@media screen and (max-width: 20em){.ontario-header__menu-toggler span:last-of-type{display:none}}.ontario-header__menu-toggler svg{margin-right:6px}@media screen and (max-width: 20em){.ontario-header__menu-toggler svg{margin-right:0}}.ontario-application-subheader__container{align-items:center;justify-content:space-between}.ontario-application-subheader__menu{display:flex;align-items:center;list-style:none;margin:0;padding-left:0}.ontario-application-subheader__menu li{border-radius:4px;padding:0;margin:0 0 0 0.75rem;text-align:center}.ontario-application-subheader__menu-container a{box-sizing:border-box;border-radius:4px;color:#FFFFFF;display:inline-block;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.125rem;font-weight:600;height:48px;line-height:1.4375rem;outline:none;padding:0.75rem;text-align:left;text-decoration:none;white-space:nowrap}.ontario-application-subheader__menu-container a.ontario-link--active{border-radius:4px 4px 0 0;border-bottom:4px solid #FFFFFF}.ontario-application-subheader__menu-container a:hover{background-color:#666666;color:#FFFFFF}.ontario-application-subheader__menu-container a:active{background-color:#1a1a1a}.ontario-application-subheader__menu-container a:focus{box-shadow:0 0 0 4px #009ADB;transition:all 0.1s ease-in-out}.ontario-application-navigation{position:absolute;width:100%}@media screen and (min-width: 73em){.ontario-application-navigation{position:relative;max-width:72rem;width:auto;margin:0 auto}}.ontario-application-navigation .ontario-header-button{visibility:hidden;position:absolute;top:-4.25rem;right:1rem;z-index:6}.ontario-application-navigation__container{background:#FFFFFF;position:absolute;top:0;width:100%;z-index:4}@media screen and (min-width: 40em){.ontario-application-navigation__container{background:#FFFFFF;position:absolute;z-index:4}}@media screen and (min-width: 73em){.ontario-application-navigation__container{box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);border-radius:4px;position:absolute;right:0.75rem;top:-0.6rem;min-width:290px;max-width:30%;z-index:3;transition:none !important}}.ontario-application-navigation ul{list-style:none;padding:0.5rem 0;margin:0;border-bottom:1px solid #cccccc}@media screen and (min-width: 73em){.ontario-application-navigation ul{border-bottom:none}}.ontario-application-navigation li{border-top:1px solid #cccccc;padding:0;margin-bottom:0}.ontario-application-navigation li:last-of-type{border-bottom:1px solid #cccccc}.ontario-application-navigation a{color:#1a1a1a;display:block;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;text-decoration:none;padding:0.6730769231rem 1.5rem}.ontario-application-navigation a:hover{text-decoration:underline;background-color:#e5e5e5}.ontario-application-navigation a:active{text-decoration:underline;background-color:#cccccc}.ontario-application-navigation a:focus,.ontario-application-navigation a:active{box-shadow:0 0 0 4px #009ADB inset}.ontario-application-navigation a.ontario-link--active{border-left:6px solid #1a1a1a;background-color:#f2f2f2}.ontario-navigation--open{visibility:visible;transform:translateY(0);transition:transform 0.4s ease-in-out}@media screen and (min-width: 73em){.ontario-navigation--open{z-index:5}}.ontario-navigation--closed{background:#FFFFFF;position:absolute;transform:translateY(-100%);transition:transform 0.3s ease-in-out, visibility 0.1s ease;width:100%;visibility:hidden;z-index:4}.ontario-application-navigation.ontario-navigation--open .ontario-application-navigation__container{visibility:visible;transform:translateY(0);transition:transform 0.4s ease-in-out}@media screen and (min-width: 73em){.ontario-application-navigation.ontario-navigation--open .ontario-application-navigation__container{transition:none;display:block}}.ontario-overlay{position:fixed;top:0;left:0;background:rgba(0, 0, 0, 0.6);width:100%;height:100%;z-index:2}.ontario-header-button.ontario-navigation--open:hover{background-color:#666666}.ontario-header-button.ontario-navigation--open:active{background-color:#1a1a1a}.ontario-header-button.ontario-navigation--closed:active{background-color:#1a1a1a}.ontario-header-button{background-color:#1a1a1a;border:none;border-radius:4px;box-sizing:border-box;box-shadow:none;color:#FFFFFF;cursor:pointer;display:flex;align-items:center;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;height:48px;line-height:1.5555555556;text-align:center;text-decoration:none}.ontario-header-button:hover,.ontario-header-button:focus,.ontario-header-button:visited{color:#FFFFFF}.ontario-header-button--with-outline,.ontario-header-button--without-outline{background-color:#1a1a1a;color:#FFFFFF}.ontario-header-button--with-outline:hover,.ontario-header-button--without-outline:hover{background-color:#4d4d4d}.ontario-header-button--with-outline:active,.ontario-header-button--without-outline:active{background-color:#666666}.ontario-header-button--with-outline:focus,.ontario-header-button--without-outline:focus{background-color:#4d4d4d}.ontario-header-button--with-outline{border:2px solid #FFFFFF;margin:0 0 0 1rem;padding:0.375rem 1rem}.ontario-header-button--with-outline:hover{border:2px solid #FFFFFF;color:#FFFFFF}.ontario-header-button--with-outline:focus{background-color:#4d4d4d}@media screen and (max-width: 20em){.ontario-header-button--with-outline{padding:0.375rem}}.ontario-header__menu-toggler{padding:0.375rem 1rem}@media screen and (max-width: 20em){.ontario-header__menu-toggler{padding-left:0.5rem;padding-right:0.5rem}}.ontario-header__menu-toggler span{display:flex}@media screen and (max-width: 20em){.ontario-header__menu-toggler span{display:none}}.ontario-header__menu-toggler svg{margin-right:6px}@media screen and (max-width: 20em){.ontario-header__menu-toggler svg{margin-right:0}}.ontario-application-navigation__container{background:#FFFFFF;position:absolute;transform:translateY(-100%);transition:transform 0.3s ease-in-out, visibility 0.1s ease;width:100%;visibility:hidden;z-index:4}@media screen and (min-width: 73em){.ontario-application-navigation__container{box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);border-radius:4px;display:none;position:absolute;right:1rem;top:calc(100% - 0.5rem);min-width:290px;max-width:30%;z-index:5}}.ontario-application-navigation.ontario-navigation--open .ontario-application-navigation__container{background:#FFFFFF;visibility:visible;transform:translateY(0);transition:transform 0.4s ease-in-out}@media screen and (min-width: 73em){.ontario-application-navigation.ontario-navigation--open .ontario-application-navigation__container{transition:none;display:block}}.ontario-application-navigation.ontario-navigation--open{background:#FFFFFF;z-index:4}.ontario-application-navigation ul{list-style:none;padding:0.5rem 0;margin:0;border-bottom:1px solid #cccccc}@media screen and (min-width: 73em){.ontario-application-navigation ul{border-bottom:none}}.ontario-application-navigation li{border-top:1px solid #cccccc;padding:0;margin-bottom:0}.ontario-application-navigation li:last-of-type{border-bottom:1px solid #cccccc}.ontario-application-navigation a{color:#1a1a1a;display:block;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;text-decoration:none;padding:0.6730769231rem 1.5rem}.ontario-application-navigation a:hover{text-decoration:underline;background-color:#e5e5e5}.ontario-application-navigation a:active{text-decoration:underline;background-color:#cccccc}.ontario-application-navigation a:focus,.ontario-application-navigation a:active{box-shadow:0 0 0 4px #009ADB inset}.ontario-application-navigation a.ontario-link--active{border-left:6px solid #1a1a1a;background-color:#f2f2f2}.ontario-overlay{position:fixed;top:0;left:0;background:rgba(0, 0, 0, 0.6);width:100%;height:100%;z-index:2}.ontario-header__icon-container{display:flex;align-items:center}';
const Mo = Bo;
const Io =
	'.ontario-navigation a:focus,.ontario-navigation a:active,.ontario-header-button:focus,.ontario-input:focus,.ontario-input:active{box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:box-shadow 0.1s ease-in-out}.ontario-row{margin:0 auto;max-width:72rem;width:100%}.ontario-row:before,.ontario-row:after{content:"";display:table}.ontario-row:after{clear:both}.ontario-row.ontario-row--collapse>.ontario-column,.ontario-row.ontario-row--collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-row--collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row .ontario-row{margin:0 -1rem;max-width:none;width:auto}.ontario-row .ontario-row:before,.ontario-row .ontario-row:after{content:"";display:table}.ontario-row .ontario-row:after{clear:both}.ontario-row .ontario-row.ontario-row--collapse{margin:0;max-width:none;width:auto}.ontario-row .ontario-row.ontario-row--collapse:before,.ontario-row .ontario-row.ontario-row--collapse:after{content:"";display:table}.ontario-row .ontario-row.ontario-row--collapse:after{clear:both}.ontario-column,.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;width:100%;float:left}.ontario-column+.ontario-column:last-child,.ontario-column+.ontario-columns:last-child,.ontario-columns+.ontario-column:last-child,.ontario-columns+.ontario-columns:last-child{float:right}.ontario-column+.ontario-column.ontario-end,.ontario-column+.ontario-columns.ontario-end,.ontario-columns+.ontario-column.ontario-end,.ontario-columns+.ontario-columns.ontario-end{float:left}@media only screen{.ontario-small-push-0{position:relative;left:0;right:auto}.ontario-small-pull-0{position:relative;right:0;left:auto}.ontario-small-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-small-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-small-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-small-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-small-push-3{position:relative;left:25%;right:auto}.ontario-small-pull-3{position:relative;right:25%;left:auto}.ontario-small-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-small-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-small-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-small-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-small-push-6{position:relative;left:50%;right:auto}.ontario-small-pull-6{position:relative;right:50%;left:auto}.ontario-small-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-small-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-small-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-small-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-small-push-9{position:relative;left:75%;right:auto}.ontario-small-pull-9{position:relative;right:75%;left:auto}.ontario-small-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-small-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-small-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-small-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-small-1{width:8.3333333333%}.ontario-small-2{width:16.6666666667%}.ontario-small-3{width:25%}.ontario-small-4{width:33.3333333333%}.ontario-small-5{width:41.6666666667%}.ontario-small-6{width:50%}.ontario-small-7{width:58.3333333333%}.ontario-small-8{width:66.6666666667%}.ontario-small-9{width:75%}.ontario-small-10{width:83.3333333333%}.ontario-small-11{width:91.6666666667%}.ontario-small-12{width:100%}.ontario-small-offset-0{margin-left:0 !important}.ontario-small-offset-1{margin-left:8.3333333333% !important}.ontario-small-offset-2{margin-left:16.6666666667% !important}.ontario-small-offset-3{margin-left:25% !important}.ontario-small-offset-4{margin-left:33.3333333333% !important}.ontario-small-offset-5{margin-left:41.6666666667% !important}.ontario-small-offset-6{margin-left:50% !important}.ontario-small-offset-7{margin-left:58.3333333333% !important}.ontario-small-offset-8{margin-left:66.6666666667% !important}.ontario-small-offset-9{margin-left:75% !important}.ontario-small-offset-10{margin-left:83.3333333333% !important}.ontario-small-offset-11{margin-left:91.6666666667% !important}.ontario-small-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-small-centered,.ontario-columns.ontario-small-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-small-uncentered,.ontario-columns.ontario-small-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-small-centered:last-child,.ontario-columns.ontario-small-centered:last-child{float:none}.ontario-column.ontario-small-uncentered:last-child,.ontario-columns.ontario-small-uncentered:last-child{float:left}.ontario-column.ontario-small-uncentered.ontario-opposite,.ontario-columns.ontario-small-uncentered.ontario-opposite{float:right}.ontario-row.ontario-small-collapse>.ontario-column,.ontario-row.ontario-small-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-small-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-small-uncollapse>.ontario-column,.ontario-row.ontario-small-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}}@media only screen and (min-width:40.063em){.ontario-medium-push-0{position:relative;left:0;right:auto}.ontario-medium-pull-0{position:relative;right:0;left:auto}.ontario-medium-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-medium-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-medium-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-medium-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-medium-push-3{position:relative;left:25%;right:auto}.ontario-medium-pull-3{position:relative;right:25%;left:auto}.ontario-medium-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-medium-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-medium-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-medium-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-medium-push-6{position:relative;left:50%;right:auto}.ontario-medium-pull-6{position:relative;right:50%;left:auto}.ontario-medium-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-medium-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-medium-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-medium-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-medium-push-9{position:relative;left:75%;right:auto}.ontario-medium-pull-9{position:relative;right:75%;left:auto}.ontario-medium-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-medium-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-medium-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-medium-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-medium-1{width:8.3333333333%}.ontario-medium-2{width:16.6666666667%}.ontario-medium-3{width:25%}.ontario-medium-4{width:33.3333333333%}.ontario-medium-5{width:41.6666666667%}.ontario-medium-6{width:50%}.ontario-medium-7{width:58.3333333333%}.ontario-medium-8{width:66.6666666667%}.ontario-medium-9{width:75%}.ontario-medium-10{width:83.3333333333%}.ontario-medium-11{width:91.6666666667%}.ontario-medium-12{width:100%}.ontario-medium-offset-0{margin-left:0 !important}.ontario-medium-offset-1{margin-left:8.3333333333% !important}.ontario-medium-offset-2{margin-left:16.6666666667% !important}.ontario-medium-offset-3{margin-left:25% !important}.ontario-medium-offset-4{margin-left:33.3333333333% !important}.ontario-medium-offset-5{margin-left:41.6666666667% !important}.ontario-medium-offset-6{margin-left:50% !important}.ontario-medium-offset-7{margin-left:58.3333333333% !important}.ontario-medium-offset-8{margin-left:66.6666666667% !important}.ontario-medium-offset-9{margin-left:75% !important}.ontario-medium-offset-10{margin-left:83.3333333333% !important}.ontario-medium-offset-11{margin-left:91.6666666667% !important}.ontario-medium-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-medium-centered,.ontario-columns.ontario-medium-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-medium-uncentered,.ontario-columns.ontario-medium-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-medium-centered:last-child,.ontario-columns.ontario-medium-centered:last-child{float:none}.ontario-column.ontario-medium-uncentered:last-child,.ontario-columns.ontario-medium-uncentered:last-child{float:left}.ontario-column.ontario-medium-uncentered.ontario-opposite,.ontario-columns.ontario-medium-uncentered.ontario-opposite{float:right}.ontario-row.ontario-medium-collapse>.ontario-column,.ontario-row.ontario-medium-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-medium-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-medium-uncollapse>.ontario-column,.ontario-row.ontario-medium-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}}@media only screen and (min-width:73.063em){.ontario-large-push-0{position:relative;left:0;right:auto}.ontario-large-pull-0{position:relative;right:0;left:auto}.ontario-large-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-large-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-large-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-large-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-large-push-3{position:relative;left:25%;right:auto}.ontario-large-pull-3{position:relative;right:25%;left:auto}.ontario-large-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-large-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-large-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-large-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-large-push-6{position:relative;left:50%;right:auto}.ontario-large-pull-6{position:relative;right:50%;left:auto}.ontario-large-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-large-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-large-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-large-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-large-push-9{position:relative;left:75%;right:auto}.ontario-large-pull-9{position:relative;right:75%;left:auto}.ontario-large-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-large-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-large-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-large-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-large-1{width:8.3333333333%}.ontario-large-2{width:16.6666666667%}.ontario-large-3{width:25%}.ontario-large-4{width:33.3333333333%}.ontario-large-5{width:41.6666666667%}.ontario-large-6{width:50%}.ontario-large-7{width:58.3333333333%}.ontario-large-8{width:66.6666666667%}.ontario-large-9{width:75%}.ontario-large-10{width:83.3333333333%}.ontario-large-11{width:91.6666666667%}.ontario-large-12{width:100%}.ontario-large-offset-0{margin-left:0 !important}.ontario-large-offset-1{margin-left:8.3333333333% !important}.ontario-large-offset-2{margin-left:16.6666666667% !important}.ontario-large-offset-3{margin-left:25% !important}.ontario-large-offset-4{margin-left:33.3333333333% !important}.ontario-large-offset-5{margin-left:41.6666666667% !important}.ontario-large-offset-6{margin-left:50% !important}.ontario-large-offset-7{margin-left:58.3333333333% !important}.ontario-large-offset-8{margin-left:66.6666666667% !important}.ontario-large-offset-9{margin-left:75% !important}.ontario-large-offset-10{margin-left:83.3333333333% !important}.ontario-large-offset-11{margin-left:91.6666666667% !important}.ontario-large-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-large-centered,.ontario-columns.ontario-large-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-large-uncentered,.ontario-columns.ontario-large-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-large-centered:last-child,.ontario-columns.ontario-large-centered:last-child{float:none}.ontario-column.ontario-large-uncentered:last-child,.ontario-columns.ontario-large-uncentered:last-child{float:left}.ontario-column.ontario-large-uncentered.ontario-opposite,.ontario-columns.ontario-large-uncentered.ontario-opposite{float:right}.ontario-row.ontario-large-collapse>.ontario-column,.ontario-row.ontario-large-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-large-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-large-uncollapse>.ontario-column,.ontario-row.ontario-large-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-push-0{position:relative;left:0;right:auto}.ontario-pull-0{position:relative;right:0;left:auto}.ontario-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-push-3{position:relative;left:25%;right:auto}.ontario-pull-3{position:relative;right:25%;left:auto}.ontario-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-push-6{position:relative;left:50%;right:auto}.ontario-pull-6{position:relative;right:50%;left:auto}.ontario-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-push-9{position:relative;left:75%;right:auto}.ontario-pull-9{position:relative;right:75%;left:auto}.ontario-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-pull-11{position:relative;right:91.6666666667%;left:auto}}@media only screen and (min-width:96.063em){.ontario-xlarge-push-0{position:relative;left:0;right:auto}.ontario-xlarge-pull-0{position:relative;right:0;left:auto}.ontario-xlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xlarge-push-3{position:relative;left:25%;right:auto}.ontario-xlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xlarge-push-6{position:relative;left:50%;right:auto}.ontario-xlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xlarge-push-9{position:relative;left:75%;right:auto}.ontario-xlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-xlarge-1{width:8.3333333333%}.ontario-xlarge-2{width:16.6666666667%}.ontario-xlarge-3{width:25%}.ontario-xlarge-4{width:33.3333333333%}.ontario-xlarge-5{width:41.6666666667%}.ontario-xlarge-6{width:50%}.ontario-xlarge-7{width:58.3333333333%}.ontario-xlarge-8{width:66.6666666667%}.ontario-xlarge-9{width:75%}.ontario-xlarge-10{width:83.3333333333%}.ontario-xlarge-11{width:91.6666666667%}.ontario-xlarge-12{width:100%}.ontario-xlarge-offset-0{margin-left:0 !important}.ontario-xlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xlarge-offset-3{margin-left:25% !important}.ontario-xlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xlarge-offset-6{margin-left:50% !important}.ontario-xlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xlarge-offset-9{margin-left:75% !important}.ontario-xlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xlarge-centered,.ontario-columns.ontario-xlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xlarge-uncentered,.ontario-columns.ontario-xlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xlarge-centered:last-child,.ontario-columns.ontario-xlarge-centered:last-child{float:none}.ontario-column.ontario-xlarge-uncentered:last-child,.ontario-columns.ontario-xlarge-uncentered:last-child{float:left}.ontario-column.ontario-xlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xlarge-collapse>.ontario-column,.ontario-row.ontario-xlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xlarge-uncollapse>.ontario-column,.ontario-row.ontario-xlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}}@media only screen and (min-width:120.063em){.ontario-xxlarge-push-0{position:relative;left:0;right:auto}.ontario-xxlarge-pull-0{position:relative;right:0;left:auto}.ontario-xxlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xxlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xxlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xxlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xxlarge-push-3{position:relative;left:25%;right:auto}.ontario-xxlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xxlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xxlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xxlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xxlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xxlarge-push-6{position:relative;left:50%;right:auto}.ontario-xxlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xxlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xxlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xxlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xxlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xxlarge-push-9{position:relative;left:75%;right:auto}.ontario-xxlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xxlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xxlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xxlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xxlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-xxlarge-1{width:8.3333333333%}.ontario-xxlarge-2{width:16.6666666667%}.ontario-xxlarge-3{width:25%}.ontario-xxlarge-4{width:33.3333333333%}.ontario-xxlarge-5{width:41.6666666667%}.ontario-xxlarge-6{width:50%}.ontario-xxlarge-7{width:58.3333333333%}.ontario-xxlarge-8{width:66.6666666667%}.ontario-xxlarge-9{width:75%}.ontario-xxlarge-10{width:83.3333333333%}.ontario-xxlarge-11{width:91.6666666667%}.ontario-xxlarge-12{width:100%}.ontario-xxlarge-offset-0{margin-left:0 !important}.ontario-xxlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xxlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xxlarge-offset-3{margin-left:25% !important}.ontario-xxlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xxlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xxlarge-offset-6{margin-left:50% !important}.ontario-xxlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xxlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xxlarge-offset-9{margin-left:75% !important}.ontario-xxlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xxlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xxlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xxlarge-centered,.ontario-columns.ontario-xxlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xxlarge-uncentered,.ontario-columns.ontario-xxlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xxlarge-centered:last-child,.ontario-columns.ontario-xxlarge-centered:last-child{float:none}.ontario-column.ontario-xxlarge-uncentered:last-child,.ontario-columns.ontario-xxlarge-uncentered:last-child{float:left}.ontario-column.ontario-xxlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xxlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xxlarge-collapse>.ontario-column,.ontario-row.ontario-xxlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xxlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xxlarge-uncollapse>.ontario-column,.ontario-row.ontario-xxlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;width:100%;padding:0.625rem 1rem;transition:box-shadow 0.1s ease-in-out}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}.ontario-form-group:last-of-type{margin-bottom:2.5rem}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-header__container{position:relative;z-index:5}@media screen and (min-width: 73em){.ontario-header__container{z-index:1}}.ontario-icon-container{display:flex;align-items:center}.ontario-icon-container-reset{display:flex;align-items:center}.ontario-icon-container-reset svg{fill:#1a1a1a}.ontario-subheader__menu a{border-radius:4px;color:#FFFFFF;display:inline;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.125rem;font-weight:600;height:48px;line-height:1.4375rem;padding:0.75rem 1rem;text-decoration:none;white-space:nowrap}.ontario-subheader__menu a.ontario-link--active{border-radius:4px 4px 0 0;border-bottom:4px solid #FFFFFF}.ontario-subheader__menu a:hover{background-color:#666666;color:#FFFFFF}.ontario-subheader__menu a:active{background-color:#1a1a1a}.ontario-subheader__menu a:focus{box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:all 0.1s ease-in-out}.ontario-navigation{position:absolute;width:100%}@media screen and (min-width: 73em){.ontario-navigation{position:relative;max-width:72rem;width:auto;margin:0 auto}}.nav-ul-closed{background:white;position:absolute;transform:translateY(-100%);transition:transform 0.3s ease-in-out, visibility 0.1s ease;width:100%;visibility:hidden;z-index:4}.nav-ul-opened{visibility:visible;transform:translateY(0);transition:transform 0.4s ease-in-out}@media screen and (min-width: 73em){.nav-ul-opened{z-index:5}}.ontario-navigation ul{list-style:none;padding:0.5rem 0;margin:0;border-bottom:1px solid #cccccc}@media screen and (min-width: 73em){.ontario-navigation ul{border-bottom:none}}.ontario-navigation li{border-top:1px solid #cccccc;padding:0;margin-bottom:0}.ontario-navigation li:last-of-type{border-bottom:1px solid #cccccc}.ontario-navigation a{color:#1a1a1a;display:block;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;text-decoration:none;padding:0.6730769231rem 1.5rem}.ontario-navigation a:hover{text-decoration:underline;background-color:#e6e6e6}.ontario-navigation a:active{text-decoration:underline;background-color:#cccccc}.ontario-navigation a:focus,.ontario-navigation a:active{box-shadow:0 0 0 4px #009ADB inset}.ontario-navigation a.ontario-link--active{border-left:6px solid #1a1a1a;background-color:#f2f2f2}.ontario-overlay{position:fixed;top:0;left:0;background:rgba(0, 0, 0, 0.6);width:100%;height:100%;z-index:2}.ontario-header{position:relative;overflow:hidden;z-index:5;background-color:#1a1a1a;color:#FFFFFF;display:flex;align-items:center;height:5.75rem}.ontario-header .ontario-row{display:flex;align-items:center;justify-content:flex-end}.ontario-header svg{width:2rem;height:2rem;margin-bottom:0}.ontario-header__logo-container a{display:inline-flex;height:100%;outline:none}.ontario-header__logo-container a:focus{box-shadow:0 0 0 4px #009ADB}.ontario-header__logo-container a img{width:45px;height:46px}@media screen and (min-width: 40em){.ontario-header__logo-container a img{width:180px;height:46px}}.ontario-navigation__container.ontario-navigation--open{visibility:visible;transform:translateY(0);transition:transform 0.4s ease-in-out}@media screen and (min-width: 73em){.ontario-navigation__container.ontario-navigation--open{z-index:5}}.ontario-navigation__container.ontario-navigation--closed{background:#FFFFFF;position:absolute;transform:translateY(-100%);transition:transform 0.3s ease-in-out, visibility 0.1s ease;width:100%;visibility:hidden;z-index:4}.ontario-header-button.ontario-navigation--open:hover{background-color:#666666}.ontario-header-button.ontario-navigation--open:active{background-color:#1a1a1a}.ontario-header-button.ontario-navigation--closed:active{background-color:#1a1a1a}.ontario-header__logo-container{height:46px}.ontario-header__logo-container svg{width:45px;height:46px}@media screen and (min-width: 40em){.ontario-header__logo-container svg{width:180px;height:46px}}.ontario-header__logo-container a{display:inline-block;height:100%}.ontario-header__logo-container a:focus{box-shadow:0 0 0 4px #009ADB}.ontario-header__search-container{position:relative;display:none}@media screen and (min-width: 73em){.ontario-header__search-container{display:flex}}@media screen and (min-width: 40em){.ontario-header__search-container{padding-right:1rem}}.ontario-input.ontario-header__search-input{border-width:0;margin-bottom:0;height:48px;padding-left:0.75rem;padding-right:7.2rem}.ontario-input.ontario-header__search-input:invalid+input[type=reset]{display:none}.ontario-input.ontario-header__search-input:focus~.ontario-header__search-submit{background-color:#0066CC;color:#FFFFFF}.ontario-input.ontario-header__search-input:focus~.ontario-header__search-submit svg{fill:#FFFFFF}.ontario-input.ontario-header__search-input:focus~.ontario-header__search-submit:hover{background-color:#00478F;color:#FFFFFF}.ontario-input.ontario-header__search-input::-ms-clear{display:none;width:0;height:0}.ontario-input.ontario-header__search-input:invalid:focus{box-shadow:0 0 0 4px #009ADB;-moz-box-shadow:none}.ontario-input.ontario-header__search-input:invalid:not(:focus){box-shadow:none;-moz-box-shadow:none}@media screen and (min-width: 40em) and (max-width: 73em){.ontario-input.ontario-header__search-input{padding-left:1rem;padding-right:6.4rem}}.ontario-header__search-submit{border:0;border-radius:0 3px 3px 0;background-color:#f2f2f2;color:#1a1a1a;display:flex;justify-content:center;align-items:center;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:600;font-size:1.125rem;height:100%;line-height:1.56;position:absolute;right:1rem;top:0;cursor:pointer;padding-left:0.75rem;padding-right:0.75rem}.ontario-header__search-submit svg{fill:#1a1a1a}.ontario-header__search-submit:hover{background-color:#00478F;color:#FFFFFF}.ontario-header__search-submit:hover svg{fill:#FFFFFF}.ontario-header__search-submit:focus{outline:none;box-shadow:0 0 0 4px #009ADB;background-color:#00478F;color:#FFFFFF}.ontario-header__search-submit:focus svg{fill:#FFFFFF}.ontario-header__search-submit:active{background-color:#002142;color:#FFFFFF}.ontario-header__search-submit:active svg{fill:#FFFFFF}.ontario-header__search-submit svg{margin-right:0}input[type=reset].ontario-header__search-reset{position:absolute;display:flex;align-items:center;top:11px;right:80px;height:28px;width:28px;color:#1a1a1a;margin:0;padding:0.5rem;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTE5IDYuNEwxNy42IDUgMTIgMTAuNiA2LjQgNSA1IDYuNGw1LjYgNS42TDUgMTcuNiA2LjQgMTlsNS42LTUuNiA1LjYgNS42IDEuNC0xLjQtNS42LTUuNkwxOSA2LjR6IiBmaWxsPSIjMDAwIi8+PC9zdmc+);background-position:center center;background-repeat:no-repeat;background-color:transparent;outline:none;border:none;cursor:pointer}input[type=reset].ontario-header__search-reset:focus{box-shadow:0 0 0 4px #009ADB}.ontario-header__nav-right-container{display:flex;align-items:center;justify-content:flex-end}.ontario-header-button{background-color:#1a1a1a;border:none;border-radius:4px;box-sizing:border-box;box-shadow:none;color:#FFFFFF;cursor:pointer;display:flex;align-items:center;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;height:48px;line-height:1.5555555556;text-align:center;text-decoration:none}.ontario-header-button:hover,.ontario-header-button:focus,.ontario-header-button:visited{color:#FFFFFF}.ontario-header-button--with-outline,.ontario-header-button--without-outline{background-color:#1a1a1a;color:#FFFFFF}.ontario-header-button--with-outline:hover,.ontario-header-button--without-outline:hover{background-color:#4d4d4d}.ontario-header-button--with-outline:active,.ontario-header-button--without-outline:active{background-color:#666666}.ontario-header-button--with-outline:focus,.ontario-header-button--without-outline:focus{background-color:#4d4d4d}.ontario-header-button--with-outline:active,.ontario-header-button--without-outline:active{background-color:#666666}.ontario-header-button--with-outline{border:2px solid #FFFFFF;margin:0 0 0 1rem;padding:0.375rem 1rem}.ontario-header-button--with-outline:hover{border:2px solid #FFFFFF;color:#FFFFFF}.ontario-header-button--with-outline:focus{background-color:#4d4d4d}@media screen and (max-width: 20em){.ontario-header-button--with-outline{padding:0.375rem}}.ontario-header-button--without-outline:focus{background-color:#4d4d4d}.ontario-header__menu-toggler{padding:0.375rem 1rem}@media screen and (max-width: 20em){.ontario-header__menu-toggler{padding-left:0.5rem;padding-right:0.5rem}}.ontario-header__menu-toggler span{display:flex}@media screen and (max-width: 20em){.ontario-header__menu-toggler span{display:none}}.ontario-header__menu-toggler svg{margin-right:6px}@media screen and (max-width: 20em){.ontario-header__menu-toggler svg{margin-right:0}}.ontario-header__language-toggler{padding:0.75rem}.ontario-header__language-toggler abbr[title]{text-decoration:none}.ontario-header__search-toggler{padding:0.5rem 0.75rem;margin-left:1rem}@media screen and (min-width: 40em){.ontario-header__search-toggler svg{margin-right:0.25rem}}.ontario-header__search-close{flex-direction:column-reverse;font-weight:400;margin-right:1rem;padding:0.15rem 0.25rem;position:relative;height:60px;display:none}.ontario-header__search-close span{position:relative;top:-3px;font-size:1rem;margin-left:0}.ontario-header__search-close span:last-of-type{top:0;height:1.875rem}@media screen and (min-width: 39.9375em){.ontario-header__search-close span{margin-right:0.25rem}}.ontario-header__search-close span:hover,.ontario-header__search-close span:focus{outline:none;text-decoration:none}.ontario-header__search-close svg{top:0}@media screen and (min-width: 40em){.ontario-header__search-close{flex-direction:row;padding:0.25rem 0.5rem 0.25rem 1rem;height:48px}.ontario-header__search-close span{top:0}.ontario-header__search-close svg{position:relative;width:2.5rem;height:2.5rem}}@media screen and (min-width: 73em){.ontario-header--search-open .ontario-header__search-close{display:none}}.ontario-header__search-close-container{display:none;justify-content:flex-end;padding-right:0}@media screen and (max-width: 40em){.ontario-header__search-close-container{width:auto;padding-left:0;padding-right:0}}@media screen and (max-width: 73em){.ontario-header--search-open .ontario-header__logo-container,.ontario-header--search-open .ontario-header__nav-right-container{display:none}.ontario-header--search-open .ontario-header__search-close-container,.ontario-header--search-open .ontario-header__search-container,.ontario-header--search-open .ontario-header__search-close{display:flex}}.ontario-navigation{position:absolute;width:100%}@media screen and (min-width: 73em){.ontario-navigation{position:relative;max-width:72rem;width:auto;margin:0 auto}}.ontario-navigation__container{background:#FFFFFF;position:absolute;transform:translateY(-100%);transition:transform 0.3s ease-in-out, visibility 0.1s ease;width:100%;visibility:hidden;z-index:4}@media screen and (min-width: 73em){.ontario-navigation__container{box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);border-radius:4px;display:none;position:absolute;right:1rem;top:calc(100% - 0.5rem);min-width:290px;max-width:30%;z-index:5}}.ontario-navigation ul{list-style:none;padding:0.5rem 0;margin:0;border-bottom:1px solid #cccccc}@media screen and (min-width: 73em){.ontario-navigation ul{border-bottom:none}}.ontario-header-navigation__menu-item{border-top:1px solid #cccccc;padding:0;margin-bottom:0}.ontario-header-navigation__menu-item:last-of-type{border-bottom:1px solid #cccccc}.ontario-navigation a{color:#1a1a1a;display:block;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;text-decoration:none;padding:0.6730769231rem 1.5rem}.ontario-navigation a:hover{text-decoration:underline;background-color:#e6e6e6}.ontario-navigation a:active{text-decoration:underline;background-color:#cccccc}.ontario-navigation a:focus,.ontario-navigation a:active{box-shadow:0 0 0 4px #009ADB inset}.ontario-navigation a.ontario-link--active{border-left:6px solid #1a1a1a;background-color:#f2f2f2}.ontario-navigation.ontario-navigation--open .ontario-navigation__container{visibility:visible;transform:translateY(0);transition:transform 0.4s ease-in-out}@media screen and (min-width: 73em){.ontario-navigation.ontario-navigation--open .ontario-navigation__container{transition:none;display:block}}.ontario-overlay{position:fixed;top:0;left:0;background:rgba(0, 0, 0, 0.6);width:100%;height:100%;z-index:2}.ontario-header__icon-container{display:flex;align-items:center}.ontario-navigation .ontario-header-button{visibility:hidden;position:absolute;right:1rem;z-index:6}.ontario-navigation .ontario-header-button svg{width:2rem;height:2rem;margin-bottom:0}.ontario-navigation--open .ontario-navigation .ontario-header-button{visibility:visible}.ontario-header+.ontario-navigation .ontario-header-button{top:-4.35rem}';
const Wo = Io;
const Eo =
	'.ontario-service-subheader__description,.ontario-application-subheader__heading,.ontario-service-subheader__heading{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}.ontario-service-subheader__heading{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){.ontario-service-subheader__heading{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}.ontario-application-subheader__heading{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){.ontario-application-subheader__heading{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}.ontario-service-subheader__description{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){.ontario-service-subheader__description{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-application-navigation a:focus,.ontario-application-navigation a:active,.ontario-header-button:focus,.ontario-input:focus,.ontario-input:active{box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:box-shadow 0.1s ease-in-out}.ontario-row{margin:0 auto;max-width:72rem;width:100%}.ontario-row:before,.ontario-row:after{content:"";display:table}.ontario-row:after{clear:both}.ontario-row.ontario-row--collapse>.ontario-column,.ontario-row.ontario-row--collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-row--collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row .ontario-row{margin:0 -1rem;max-width:none;width:auto}.ontario-row .ontario-row:before,.ontario-row .ontario-row:after{content:"";display:table}.ontario-row .ontario-row:after{clear:both}.ontario-row .ontario-row.ontario-row--collapse{margin:0;max-width:none;width:auto}.ontario-row .ontario-row.ontario-row--collapse:before,.ontario-row .ontario-row.ontario-row--collapse:after{content:"";display:table}.ontario-row .ontario-row.ontario-row--collapse:after{clear:both}.ontario-column,.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;width:100%;float:left}.ontario-column+.ontario-column:last-child,.ontario-column+.ontario-columns:last-child,.ontario-columns+.ontario-column:last-child,.ontario-columns+.ontario-columns:last-child{float:right}.ontario-column+.ontario-column.ontario-end,.ontario-column+.ontario-columns.ontario-end,.ontario-columns+.ontario-column.ontario-end,.ontario-columns+.ontario-columns.ontario-end{float:left}@media only screen{.ontario-small-push-0{position:relative;left:0;right:auto}.ontario-small-pull-0{position:relative;right:0;left:auto}.ontario-small-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-small-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-small-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-small-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-small-push-3{position:relative;left:25%;right:auto}.ontario-small-pull-3{position:relative;right:25%;left:auto}.ontario-small-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-small-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-small-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-small-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-small-push-6{position:relative;left:50%;right:auto}.ontario-small-pull-6{position:relative;right:50%;left:auto}.ontario-small-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-small-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-small-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-small-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-small-push-9{position:relative;left:75%;right:auto}.ontario-small-pull-9{position:relative;right:75%;left:auto}.ontario-small-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-small-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-small-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-small-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-small-1{width:8.3333333333%}.ontario-small-2{width:16.6666666667%}.ontario-small-3{width:25%}.ontario-small-4{width:33.3333333333%}.ontario-small-5{width:41.6666666667%}.ontario-small-6{width:50%}.ontario-small-7{width:58.3333333333%}.ontario-small-8{width:66.6666666667%}.ontario-small-9{width:75%}.ontario-small-10{width:83.3333333333%}.ontario-small-11{width:91.6666666667%}.ontario-small-12{width:100%}.ontario-small-offset-0{margin-left:0 !important}.ontario-small-offset-1{margin-left:8.3333333333% !important}.ontario-small-offset-2{margin-left:16.6666666667% !important}.ontario-small-offset-3{margin-left:25% !important}.ontario-small-offset-4{margin-left:33.3333333333% !important}.ontario-small-offset-5{margin-left:41.6666666667% !important}.ontario-small-offset-6{margin-left:50% !important}.ontario-small-offset-7{margin-left:58.3333333333% !important}.ontario-small-offset-8{margin-left:66.6666666667% !important}.ontario-small-offset-9{margin-left:75% !important}.ontario-small-offset-10{margin-left:83.3333333333% !important}.ontario-small-offset-11{margin-left:91.6666666667% !important}.ontario-small-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-small-centered,.ontario-columns.ontario-small-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-small-uncentered,.ontario-columns.ontario-small-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-small-centered:last-child,.ontario-columns.ontario-small-centered:last-child{float:none}.ontario-column.ontario-small-uncentered:last-child,.ontario-columns.ontario-small-uncentered:last-child{float:left}.ontario-column.ontario-small-uncentered.ontario-opposite,.ontario-columns.ontario-small-uncentered.ontario-opposite{float:right}.ontario-row.ontario-small-collapse>.ontario-column,.ontario-row.ontario-small-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-small-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-small-uncollapse>.ontario-column,.ontario-row.ontario-small-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}}@media only screen and (min-width:40.063em){.ontario-medium-push-0{position:relative;left:0;right:auto}.ontario-medium-pull-0{position:relative;right:0;left:auto}.ontario-medium-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-medium-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-medium-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-medium-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-medium-push-3{position:relative;left:25%;right:auto}.ontario-medium-pull-3{position:relative;right:25%;left:auto}.ontario-medium-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-medium-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-medium-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-medium-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-medium-push-6{position:relative;left:50%;right:auto}.ontario-medium-pull-6{position:relative;right:50%;left:auto}.ontario-medium-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-medium-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-medium-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-medium-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-medium-push-9{position:relative;left:75%;right:auto}.ontario-medium-pull-9{position:relative;right:75%;left:auto}.ontario-medium-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-medium-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-medium-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-medium-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-medium-1{width:8.3333333333%}.ontario-medium-2{width:16.6666666667%}.ontario-medium-3{width:25%}.ontario-medium-4{width:33.3333333333%}.ontario-medium-5{width:41.6666666667%}.ontario-medium-6{width:50%}.ontario-medium-7{width:58.3333333333%}.ontario-medium-8{width:66.6666666667%}.ontario-medium-9{width:75%}.ontario-medium-10{width:83.3333333333%}.ontario-medium-11{width:91.6666666667%}.ontario-medium-12{width:100%}.ontario-medium-offset-0{margin-left:0 !important}.ontario-medium-offset-1{margin-left:8.3333333333% !important}.ontario-medium-offset-2{margin-left:16.6666666667% !important}.ontario-medium-offset-3{margin-left:25% !important}.ontario-medium-offset-4{margin-left:33.3333333333% !important}.ontario-medium-offset-5{margin-left:41.6666666667% !important}.ontario-medium-offset-6{margin-left:50% !important}.ontario-medium-offset-7{margin-left:58.3333333333% !important}.ontario-medium-offset-8{margin-left:66.6666666667% !important}.ontario-medium-offset-9{margin-left:75% !important}.ontario-medium-offset-10{margin-left:83.3333333333% !important}.ontario-medium-offset-11{margin-left:91.6666666667% !important}.ontario-medium-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-medium-centered,.ontario-columns.ontario-medium-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-medium-uncentered,.ontario-columns.ontario-medium-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-medium-centered:last-child,.ontario-columns.ontario-medium-centered:last-child{float:none}.ontario-column.ontario-medium-uncentered:last-child,.ontario-columns.ontario-medium-uncentered:last-child{float:left}.ontario-column.ontario-medium-uncentered.ontario-opposite,.ontario-columns.ontario-medium-uncentered.ontario-opposite{float:right}.ontario-row.ontario-medium-collapse>.ontario-column,.ontario-row.ontario-medium-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-medium-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-medium-uncollapse>.ontario-column,.ontario-row.ontario-medium-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}}@media only screen and (min-width:73.063em){.ontario-large-push-0{position:relative;left:0;right:auto}.ontario-large-pull-0{position:relative;right:0;left:auto}.ontario-large-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-large-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-large-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-large-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-large-push-3{position:relative;left:25%;right:auto}.ontario-large-pull-3{position:relative;right:25%;left:auto}.ontario-large-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-large-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-large-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-large-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-large-push-6{position:relative;left:50%;right:auto}.ontario-large-pull-6{position:relative;right:50%;left:auto}.ontario-large-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-large-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-large-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-large-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-large-push-9{position:relative;left:75%;right:auto}.ontario-large-pull-9{position:relative;right:75%;left:auto}.ontario-large-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-large-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-large-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-large-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-large-1{width:8.3333333333%}.ontario-large-2{width:16.6666666667%}.ontario-large-3{width:25%}.ontario-large-4{width:33.3333333333%}.ontario-large-5{width:41.6666666667%}.ontario-large-6{width:50%}.ontario-large-7{width:58.3333333333%}.ontario-large-8{width:66.6666666667%}.ontario-large-9{width:75%}.ontario-large-10{width:83.3333333333%}.ontario-large-11{width:91.6666666667%}.ontario-large-12{width:100%}.ontario-large-offset-0{margin-left:0 !important}.ontario-large-offset-1{margin-left:8.3333333333% !important}.ontario-large-offset-2{margin-left:16.6666666667% !important}.ontario-large-offset-3{margin-left:25% !important}.ontario-large-offset-4{margin-left:33.3333333333% !important}.ontario-large-offset-5{margin-left:41.6666666667% !important}.ontario-large-offset-6{margin-left:50% !important}.ontario-large-offset-7{margin-left:58.3333333333% !important}.ontario-large-offset-8{margin-left:66.6666666667% !important}.ontario-large-offset-9{margin-left:75% !important}.ontario-large-offset-10{margin-left:83.3333333333% !important}.ontario-large-offset-11{margin-left:91.6666666667% !important}.ontario-large-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-large-centered,.ontario-columns.ontario-large-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-large-uncentered,.ontario-columns.ontario-large-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-large-centered:last-child,.ontario-columns.ontario-large-centered:last-child{float:none}.ontario-column.ontario-large-uncentered:last-child,.ontario-columns.ontario-large-uncentered:last-child{float:left}.ontario-column.ontario-large-uncentered.ontario-opposite,.ontario-columns.ontario-large-uncentered.ontario-opposite{float:right}.ontario-row.ontario-large-collapse>.ontario-column,.ontario-row.ontario-large-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-large-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-large-uncollapse>.ontario-column,.ontario-row.ontario-large-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-push-0{position:relative;left:0;right:auto}.ontario-pull-0{position:relative;right:0;left:auto}.ontario-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-push-3{position:relative;left:25%;right:auto}.ontario-pull-3{position:relative;right:25%;left:auto}.ontario-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-push-6{position:relative;left:50%;right:auto}.ontario-pull-6{position:relative;right:50%;left:auto}.ontario-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-push-9{position:relative;left:75%;right:auto}.ontario-pull-9{position:relative;right:75%;left:auto}.ontario-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-pull-11{position:relative;right:91.6666666667%;left:auto}}@media only screen and (min-width:96.063em){.ontario-xlarge-push-0{position:relative;left:0;right:auto}.ontario-xlarge-pull-0{position:relative;right:0;left:auto}.ontario-xlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xlarge-push-3{position:relative;left:25%;right:auto}.ontario-xlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xlarge-push-6{position:relative;left:50%;right:auto}.ontario-xlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xlarge-push-9{position:relative;left:75%;right:auto}.ontario-xlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-xlarge-1{width:8.3333333333%}.ontario-xlarge-2{width:16.6666666667%}.ontario-xlarge-3{width:25%}.ontario-xlarge-4{width:33.3333333333%}.ontario-xlarge-5{width:41.6666666667%}.ontario-xlarge-6{width:50%}.ontario-xlarge-7{width:58.3333333333%}.ontario-xlarge-8{width:66.6666666667%}.ontario-xlarge-9{width:75%}.ontario-xlarge-10{width:83.3333333333%}.ontario-xlarge-11{width:91.6666666667%}.ontario-xlarge-12{width:100%}.ontario-xlarge-offset-0{margin-left:0 !important}.ontario-xlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xlarge-offset-3{margin-left:25% !important}.ontario-xlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xlarge-offset-6{margin-left:50% !important}.ontario-xlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xlarge-offset-9{margin-left:75% !important}.ontario-xlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xlarge-centered,.ontario-columns.ontario-xlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xlarge-uncentered,.ontario-columns.ontario-xlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xlarge-centered:last-child,.ontario-columns.ontario-xlarge-centered:last-child{float:none}.ontario-column.ontario-xlarge-uncentered:last-child,.ontario-columns.ontario-xlarge-uncentered:last-child{float:left}.ontario-column.ontario-xlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xlarge-collapse>.ontario-column,.ontario-row.ontario-xlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xlarge-uncollapse>.ontario-column,.ontario-row.ontario-xlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}}@media only screen and (min-width:120.063em){.ontario-xxlarge-push-0{position:relative;left:0;right:auto}.ontario-xxlarge-pull-0{position:relative;right:0;left:auto}.ontario-xxlarge-push-1{position:relative;left:8.3333333333%;right:auto}.ontario-xxlarge-pull-1{position:relative;right:8.3333333333%;left:auto}.ontario-xxlarge-push-2{position:relative;left:16.6666666667%;right:auto}.ontario-xxlarge-pull-2{position:relative;right:16.6666666667%;left:auto}.ontario-xxlarge-push-3{position:relative;left:25%;right:auto}.ontario-xxlarge-pull-3{position:relative;right:25%;left:auto}.ontario-xxlarge-push-4{position:relative;left:33.3333333333%;right:auto}.ontario-xxlarge-pull-4{position:relative;right:33.3333333333%;left:auto}.ontario-xxlarge-push-5{position:relative;left:41.6666666667%;right:auto}.ontario-xxlarge-pull-5{position:relative;right:41.6666666667%;left:auto}.ontario-xxlarge-push-6{position:relative;left:50%;right:auto}.ontario-xxlarge-pull-6{position:relative;right:50%;left:auto}.ontario-xxlarge-push-7{position:relative;left:58.3333333333%;right:auto}.ontario-xxlarge-pull-7{position:relative;right:58.3333333333%;left:auto}.ontario-xxlarge-push-8{position:relative;left:66.6666666667%;right:auto}.ontario-xxlarge-pull-8{position:relative;right:66.6666666667%;left:auto}.ontario-xxlarge-push-9{position:relative;left:75%;right:auto}.ontario-xxlarge-pull-9{position:relative;right:75%;left:auto}.ontario-xxlarge-push-10{position:relative;left:83.3333333333%;right:auto}.ontario-xxlarge-pull-10{position:relative;right:83.3333333333%;left:auto}.ontario-xxlarge-push-11{position:relative;left:91.6666666667%;right:auto}.ontario-xxlarge-pull-11{position:relative;right:91.6666666667%;left:auto}.ontario-column,.ontario-columns{position:relative;padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}.ontario-xxlarge-1{width:8.3333333333%}.ontario-xxlarge-2{width:16.6666666667%}.ontario-xxlarge-3{width:25%}.ontario-xxlarge-4{width:33.3333333333%}.ontario-xxlarge-5{width:41.6666666667%}.ontario-xxlarge-6{width:50%}.ontario-xxlarge-7{width:58.3333333333%}.ontario-xxlarge-8{width:66.6666666667%}.ontario-xxlarge-9{width:75%}.ontario-xxlarge-10{width:83.3333333333%}.ontario-xxlarge-11{width:91.6666666667%}.ontario-xxlarge-12{width:100%}.ontario-xxlarge-offset-0{margin-left:0 !important}.ontario-xxlarge-offset-1{margin-left:8.3333333333% !important}.ontario-xxlarge-offset-2{margin-left:16.6666666667% !important}.ontario-xxlarge-offset-3{margin-left:25% !important}.ontario-xxlarge-offset-4{margin-left:33.3333333333% !important}.ontario-xxlarge-offset-5{margin-left:41.6666666667% !important}.ontario-xxlarge-offset-6{margin-left:50% !important}.ontario-xxlarge-offset-7{margin-left:58.3333333333% !important}.ontario-xxlarge-offset-8{margin-left:66.6666666667% !important}.ontario-xxlarge-offset-9{margin-left:75% !important}.ontario-xxlarge-offset-10{margin-left:83.3333333333% !important}.ontario-xxlarge-offset-11{margin-left:91.6666666667% !important}.ontario-xxlarge-reset-order{float:left;left:auto;margin-left:0;margin-right:0;right:auto}.ontario-column.ontario-xxlarge-centered,.ontario-columns.ontario-xxlarge-centered{margin-left:auto;margin-right:auto;float:none}.ontario-column.ontario-xxlarge-uncentered,.ontario-columns.ontario-xxlarge-uncentered{float:left;margin-left:0;margin-right:0}.ontario-column.ontario-xxlarge-centered:last-child,.ontario-columns.ontario-xxlarge-centered:last-child{float:none}.ontario-column.ontario-xxlarge-uncentered:last-child,.ontario-columns.ontario-xxlarge-uncentered:last-child{float:left}.ontario-column.ontario-xxlarge-uncentered.ontario-opposite,.ontario-columns.ontario-xxlarge-uncentered.ontario-opposite{float:right}.ontario-row.ontario-xxlarge-collapse>.ontario-column,.ontario-row.ontario-xxlarge-collapse>.ontario-columns{padding-left:0;padding-right:0}.ontario-row.ontario-xxlarge-collapse .ontario-row{margin-left:0;margin-right:0}.ontario-row.ontario-xxlarge-uncollapse>.ontario-column,.ontario-row.ontario-xxlarge-uncollapse>.ontario-columns{padding-left:1rem;padding-right:1rem;box-sizing:border-box;float:left}}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;width:100%;padding:0.625rem 1rem;transition:box-shadow 0.1s ease-in-out}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}.ontario-form-group:last-of-type{margin-bottom:2.5rem}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-application-header{display:flex;align-items:center;background-color:#1a1a1a;color:#FFFFFF;height:3.125rem !important;position:relative;z-index:5}.ontario-application-header>.ontario-row{display:flex;align-items:center}.ontario-application-header-container{position:relative;width:100%}.ontario-header-button.ontario-application-navigation--open:hover{background-color:#666666}.ontario-header-button.ontario-application-navigation--closed:active{background-color:#1a1a1a}.ontario-header-button--with-outline{border:2px solid #FFFFFF;margin:0 0 0 1rem;padding:0.375rem 1rem}.ontario-application-subheader .ontario-header-button,.ontario-application-navigation .ontario-header-button{background-color:#4d4d4d}.ontario-header-button--closed:focus{box-shadow:none;outline:none;transition:none}.ontario-application-header__logo,.ontario-application-header__logo a,.ontario-application-header__lang-toggle,.ontario-application-subheader__container,.ontario-application-subheader__menu-container,.ontario-application-subheader__menu{display:flex;align-items:center;outline:none}.ontario-application-header__logo a:focus{box-shadow:0 0 0 4px #009ADB;transition:all 0.1s ease-in-out}.ontario-application-header__logo svg,.ontario-application-header__logo img{width:100px;height:25px}.ontario-application-header__lang-toggle{justify-content:flex-end}.ontario-application-header__lang-toggle a{font-size:1rem;line-height:1.375rem;height:auto;outline:none;padding:0.5rem 0.75rem}.ontario-application-subheader{padding:1.25rem 0;background-color:#404040;overflow:visible;position:relative;z-index:5}@media screen and (min-width: 73em){.ontario-application-subheader{z-index:0}}.ontario-application-subheader>.ontario-row{position:relative}.ontario-application-header-container{position:relative;z-index:5}.ontario-application-header>.ontario-row{display:flex;align-items:center}.ontario-application-subheader .ontario-header-button{visibility:visible}.ontario-application-subheader .ontario-header-button,.ontario-application-navigation .ontario-header-button{background-color:#4d4d4d}.ontario-application-subheader .ontario-header-button:hover,.ontario-application-navigation .ontario-header-button:hover{background-color:#666666}.ontario-application-subheader .ontario-header-button:active,.ontario-application-navigation .ontario-header-button:active{background-color:#1a1a1a}.ontario-header-button--without-outline:hover{background-color:#4d4d4d}.ontario-header-button--without-outline:focus{box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:all 0.1s ease-in-out}.ontario-application-subheader__heading{padding:0.375rem 0;margin-bottom:0;max-width:65%}.ontario-application-subheader__heading a{color:#FFFFFF;font-weight:600;text-decoration:none}.ontario-application-subheader__heading a:focus{box-shadow:0 0 0 4px #009ADB;transition:all 0.1s ease-in-out}.ontario-application-subheader__heading a:hover,.ontario-application-subheader__heading a:active,.ontario-application-subheader__heading a:visited{color:#FFFFFF;text-decoration:underline}.ontario-application-subheader .ontario-header-button{visibility:visible;background-color:#4d4d4d}.ontario-application-subheader .ontario-header-button:hover{background-color:#666666}.ontario-application-subheader .ontario-header-button:active{background-color:#1a1a1a}.ontario-header__menu-toggler span{display:flex}@media screen and (max-width: 20em){.ontario-header__menu-toggler span:last-of-type{display:none}}.ontario-header__menu-toggler svg{margin-right:6px}@media screen and (max-width: 20em){.ontario-header__menu-toggler svg{margin-right:0}}.ontario-application-subheader__container{align-items:center;justify-content:space-between}.ontario-application-subheader__menu{display:flex;align-items:center;list-style:none;margin:0;padding-left:0}.ontario-application-subheader__menu li{border-radius:4px;padding:0;margin:0 0 0 0.75rem;text-align:center}.ontario-application-subheader__menu-container a{box-sizing:border-box;border-radius:4px;color:#FFFFFF;display:inline-block;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.125rem;font-weight:600;height:48px;line-height:1.4375rem;outline:none;padding:0.75rem;text-align:left;text-decoration:none;white-space:nowrap}.ontario-application-subheader__menu-container a.ontario-link--active{border-radius:4px 4px 0 0;border-bottom:4px solid #FFFFFF}.ontario-application-subheader__menu-container a:hover{background-color:#666666;color:#FFFFFF}.ontario-application-subheader__menu-container a:active{background-color:#1a1a1a}.ontario-application-subheader__menu-container a:focus{box-shadow:0 0 0 4px #009ADB;transition:all 0.1s ease-in-out}.ontario-application-navigation{position:absolute;width:100%}@media screen and (min-width: 73em){.ontario-application-navigation{position:relative;max-width:72rem;width:auto;margin:0 auto}}.ontario-application-navigation .ontario-header-button{visibility:hidden;position:absolute;top:-4.25rem;right:1rem;z-index:6}.ontario-application-navigation__container{background:#FFFFFF;position:absolute;top:0;width:100%;z-index:4}@media screen and (min-width: 40em){.ontario-application-navigation__container{background:#FFFFFF;position:absolute;z-index:4}}@media screen and (min-width: 73em){.ontario-application-navigation__container{box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);border-radius:4px;position:absolute;right:0.75rem;top:-0.6rem;min-width:290px;max-width:30%;z-index:3;transition:none !important}}.ontario-application-navigation ul{list-style:none;padding:0.5rem 0;margin:0;border-bottom:1px solid #cccccc}@media screen and (min-width: 73em){.ontario-application-navigation ul{border-bottom:none}}.ontario-application-navigation li{border-top:1px solid #cccccc;padding:0;margin-bottom:0}.ontario-application-navigation li:last-of-type{border-bottom:1px solid #cccccc}.ontario-application-navigation a{color:#1a1a1a;display:block;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;text-decoration:none;padding:0.6730769231rem 1.5rem}.ontario-application-navigation a:hover{text-decoration:underline;background-color:#e5e5e5}.ontario-application-navigation a:active{text-decoration:underline;background-color:#cccccc}.ontario-application-navigation a:focus,.ontario-application-navigation a:active{box-shadow:0 0 0 4px #009ADB inset}.ontario-application-navigation a.ontario-link--active{border-left:6px solid #1a1a1a;background-color:#f2f2f2}.ontario-navigation--open{visibility:visible;transform:translateY(0);transition:transform 0.4s ease-in-out}@media screen and (min-width: 73em){.ontario-navigation--open{z-index:5}}.ontario-navigation--closed{background:#FFFFFF;position:absolute;transform:translateY(-100%);transition:transform 0.3s ease-in-out, visibility 0.1s ease;width:100%;visibility:hidden;z-index:4}.ontario-application-navigation.ontario-navigation--open .ontario-application-navigation__container{visibility:visible;transform:translateY(0);transition:transform 0.4s ease-in-out}@media screen and (min-width: 73em){.ontario-application-navigation.ontario-navigation--open .ontario-application-navigation__container{transition:none;display:block}}.ontario-overlay{position:fixed;top:0;left:0;background:rgba(0, 0, 0, 0.6);width:100%;height:100%;z-index:2}.ontario-header-button.ontario-navigation--open:hover{background-color:#666666}.ontario-header-button.ontario-navigation--open:active{background-color:#1a1a1a}.ontario-header-button.ontario-navigation--closed:active{background-color:#1a1a1a}.ontario-header-button{background-color:#1a1a1a;border:none;border-radius:4px;box-sizing:border-box;box-shadow:none;color:#FFFFFF;cursor:pointer;display:flex;align-items:center;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;height:48px;line-height:1.5555555556;text-align:center;text-decoration:none}.ontario-header-button:hover,.ontario-header-button:focus,.ontario-header-button:visited{color:#FFFFFF}.ontario-header-button--with-outline,.ontario-header-button--without-outline{background-color:#1a1a1a;color:#FFFFFF}.ontario-header-button--with-outline:hover,.ontario-header-button--without-outline:hover{background-color:#4d4d4d}.ontario-header-button--with-outline:active,.ontario-header-button--without-outline:active{background-color:#666666}.ontario-header-button--with-outline:focus,.ontario-header-button--without-outline:focus{background-color:#4d4d4d}.ontario-header-button--with-outline{border:2px solid #FFFFFF;margin:0 0 0 1rem;padding:0.375rem 1rem}.ontario-header-button--with-outline:hover{border:2px solid #FFFFFF;color:#FFFFFF}.ontario-header-button--with-outline:focus{background-color:#4d4d4d}@media screen and (max-width: 20em){.ontario-header-button--with-outline{padding:0.375rem}}.ontario-header__menu-toggler{padding:0.375rem 1rem}@media screen and (max-width: 20em){.ontario-header__menu-toggler{padding-left:0.5rem;padding-right:0.5rem}}.ontario-header__menu-toggler span{display:flex}@media screen and (max-width: 20em){.ontario-header__menu-toggler span{display:none}}.ontario-header__menu-toggler svg{margin-right:6px}@media screen and (max-width: 20em){.ontario-header__menu-toggler svg{margin-right:0}}.ontario-application-navigation__container{background:#FFFFFF;position:absolute;transform:translateY(-100%);transition:transform 0.3s ease-in-out, visibility 0.1s ease;width:100%;visibility:hidden;z-index:4}@media screen and (min-width: 73em){.ontario-application-navigation__container{box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);border-radius:4px;display:none;position:absolute;right:1rem;top:calc(100% - 0.5rem);min-width:290px;max-width:30%;z-index:5}}.ontario-application-navigation.ontario-navigation--open .ontario-application-navigation__container{background:#FFFFFF;visibility:visible;transform:translateY(0);transition:transform 0.4s ease-in-out}@media screen and (min-width: 73em){.ontario-application-navigation.ontario-navigation--open .ontario-application-navigation__container{transition:none;display:block}}.ontario-application-navigation.ontario-navigation--open{background:#FFFFFF;z-index:4}.ontario-application-navigation ul{list-style:none;padding:0.5rem 0;margin:0;border-bottom:1px solid #cccccc}@media screen and (min-width: 73em){.ontario-application-navigation ul{border-bottom:none}}.ontario-application-navigation li{border-top:1px solid #cccccc;padding:0;margin-bottom:0}.ontario-application-navigation li:last-of-type{border-bottom:1px solid #cccccc}.ontario-application-navigation a{color:#1a1a1a;display:block;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;text-decoration:none;padding:0.6730769231rem 1.5rem}.ontario-application-navigation a:hover{text-decoration:underline;background-color:#e5e5e5}.ontario-application-navigation a:active{text-decoration:underline;background-color:#cccccc}.ontario-application-navigation a:focus,.ontario-application-navigation a:active{box-shadow:0 0 0 4px #009ADB inset}.ontario-application-navigation a.ontario-link--active{border-left:6px solid #1a1a1a;background-color:#f2f2f2}.ontario-overlay{position:fixed;top:0;left:0;background:rgba(0, 0, 0, 0.6);width:100%;height:100%;z-index:2}.ontario-header__icon-container{display:flex;align-items:center}.ontario-service-header{height:3.125rem;z-index:5}.ontario-service-header__logo,.ontario-service-header__logo a,.ontario-service-header__lang-toggle,.ontario-service-subheader__container,.ontario-service-subheader__menu-container,.ontario-service-subheader__menu{display:flex}.ontario-service-header__logo img{width:100px;height:25px}.ontario-service-header__lang-toggle{justify-content:flex-end}.ontario-service-header__lang-toggle a{font-size:1rem;line-height:1.375rem;height:auto;padding:0.5rem 0.75rem}.ontario-service-subheader{padding:1rem 0;background-color:#03713D;overflow:hidden;position:relative;z-index:5}@media screen and (min-width: 73em){.ontario-service-subheader{z-index:0}}.ontario-service-subheader>.ontario-row{position:relative}.ontario-service-subheader .ontario-header-button{display:flex}.ontario-service-subheader .ontario-header-button:last-of-type{display:none}.ontario-service-subheader .ontario-header-button{background-color:#03713D}.ontario-service-subheader .ontario-header-button .ontario-icon{width:2rem;height:2rem;margin-bottom:0}.ontario-service-subheader .ontario-header-button:hover{background-color:#048B4B}.ontario-service-subheader .ontario-header-button:active{background-color:#024122}.ontario-service-subheader .ontario-header-button:focus{box-shadow:0 0 0 4px #42C7FF}.ontario-service-subheader__link{text-decoration:none}a .ontario-service-subheader__heading-container{color:#FFFFFF;font-weight:600;text-decoration:none}a .ontario-service-subheader__heading-container:hover,a .ontario-service-subheader__heading-container:active,a .ontario-service-subheader__heading-container:visited{color:#FFFFFF;text-decoration:underline}a .ontario-service-subheader__heading-container:focus{box-shadow:0 0 0 4px #42C7FF}.ontario-service-subheader__heading{font-weight:600;padding:0 0 0.125rem 0;margin-bottom:0;text-decoration:none}.ontario-service-subheader__description{padding:0.125rem 0 0.25rem 0;margin-bottom:0;color:#FFFFFF;font-weight:600;text-decoration:none}.ontario-service-subheader__container{align-items:center;justify-content:space-between}.ontario-service-subheader__menu{list-style:none;margin:0;padding-left:0;align-items:center}.ontario-service-subheader__menu li{padding:0;margin-left:1rem}.ontario-service-subheader__menu a{border-radius:4px;color:#FFFFFF;display:block;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.125rem;font-weight:600;height:48px;line-height:1.4375rem;padding:0.75rem;text-decoration:none;white-space:nowrap}.ontario-service-subheader__menu a.ontario-link--active{border-radius:4px 4px 0 0;border-bottom:0.25rem solid #FFFFFF}.ontario-service-subheader__menu a:hover{color:#FFFFFF;background-color:#048B4B}.ontario-service-subheader__menu a:active{color:#FFFFFF;background-color:#024122}.ontario-service-subheader__menu a:focus{box-shadow:0 0 0 4px #42C7FF}.ontario-overlay{display:none;position:fixed;top:0;left:0;background:rgba(26, 26, 26, 0.6);width:100%;height:100%;z-index:2}.ontario-navigation--open .ontario-service-subheader .ontario-header-button:first-of-type{display:none}.ontario-navigation--open .ontario-service-subheader .ontario-header-button:last-of-type{display:flex}@media screen and (max-width: 73em){.ontario-navigation--open .ontario-service-subheader-menu__container{position:relative;z-index:3}}.ontario-navigation--open .ontario-overlay{display:block}@media screen and (min-width: 73em){.ontario-navigation--open .ontario-overlay{display:none}}.ontario-colour-service-ontario-header-brand{background-color:#03713D}.ontario-colour-service-ontario-header-focus{background-color:#42C7FF}.ontario-colour-service-ontario-header-hover{background-color:#048B4B}.ontario-colour-service-ontario-header-active{background-color:#024122}';
const qo = Eo;
const Vo = class {
	constructor(o) {
		t(this, o);
		this.handleMenuToggle = () => {
			this.menuToggle = !this.menuToggle;
			this.searchToggle = undefined;
		};
		this.handleSearchToggle = () => {
			this.searchToggle = !this.searchToggle;
		};
		this.handleSubmit = (t) => {
			t.preventDefault();
			location.href = `${this.translations.header.ontarioSearchURL[`${this.language}`]}${t.target[0].value}`;
		};
		this.trapMenuFocus = (t) => {
			var o;
			let i = (o = t.target) === null || o === void 0 ? void 0 : o.dataset.type;
			if (i === 'app-desktop') {
				this.menuButtonDesktop.focus();
			} else if (i === 'app-tablet') {
				this.menuButtonTablet.focus();
			} else if (i === 'app-mobile') {
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
		this.assetBasePath = undefined;
		this.applicationHeaderInfoState = undefined;
		this.menuItemState = undefined;
		this.isDynamicMenu = false;
		this.languageState = undefined;
		this.menuToggle = false;
		this.searchToggle = false;
		this.translations = T;
	}
	parseApplicationHeaderInfo() {
		const t = this.applicationHeaderInfo;
		if (t) {
			if (typeof t === 'string') this.applicationHeaderInfoState = JSON.parse(t);
			else this.applicationHeaderInfoState = t;
		}
	}
	parseMenuItems() {
		const t = this.language === 'en';
		if (!Array.isArray(this.menuItems) && typeof this.menuItems === 'string') {
			this.menuItemState = JSON.parse(this.menuItems);
			this.isDynamicMenu = false;
		} else if (Array.isArray(this.menuItems) && this.type === 'application') {
			this.menuItemState = this.menuItems;
			this.isDynamicMenu = false;
		} else {
			this.menuItemState = t ? Oo.en : Oo.fr;
			this.isDynamicMenu = false;
		}
	}
	parseLanguage() {
		const t = this.languageToggleOptions;
		if (t) {
			if (typeof t === 'string') {
				this.languageState = JSON.parse(t);
			} else {
				this.languageState = t;
			}
		}
	}
	handleClick(t) {
		if (
			t.composedPath().includes(this.menuButton) ||
			t.composedPath().includes(this.menuButtonDesktop) ||
			t.composedPath().includes(this.menuButtonTablet) ||
			t.composedPath().includes(this.menuButtonMobile)
		) {
			return;
		}
		if (this.menuToggle) this.menuToggle = !this.menuToggle;
	}
	handleSetAppLanguage(t) {
		this.language = r(t);
	}
	async fetchOntarioMenu() {
		const t = this.language === 'en';
		if (!this.isDynamicMenu) {
			const o = t ? $o.ONTARIO_HEADER_API_URL_EN : $o.ONTARIO_HEADER_API_URL_FR;
			const i = await fetch(o)
				.then((t) => t.json())
				.then((t) => t.linkset[0].item)
				.catch(() => {
					console.error('Unable to retrieve data from Ontario Menu API');
					return [];
				});
			if (i.length > 0) {
				const t = i.map((t) => ({ href: t.href, title: t.title }));
				this.menuItemState = t;
				this.isDynamicMenu = true;
			}
		}
		return;
	}
	getImageAssetSrcPath(t) {
		return `${this.assetBasePath ? this.assetBasePath : a('./assets')}/${t}`;
	}
	generateMenuItem(t, i, e, a, n, r, l) {
		return o(
			'li',
			{ class: n },
			o(
				'a',
				{
					'class': e === true ? `ontario-link--active` : ``,
					'href': t,
					'onClick': r,
					'onBlur': l ? this.trapMenuFocus : undefined,
					'data-type': a,
				},
				i,
			),
		);
	}
	renderMenuButton(t) {
		if (!this.isMenuVisible(t)) {
			return;
		}
		return o(
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
				'aria-label': this.menuToggle
					? this.translations.header.closeMenu[`${this.language}`]
					: this.translations.header.openMenu[`${this.language}`],
				'onClick': this.handleMenuToggle,
				'type': 'button',
				'ref':
					t === 'desktop'
						? (t) => (this.menuButtonDesktop = t)
						: t === 'tablet'
						? (t) => (this.menuButtonTablet = t)
						: t === 'mobile'
						? (t) => (this.menuButtonMobile = t)
						: (t) => (this.menuButton = t),
			},
			o('span', { class: 'ontario-header__icon-container', innerHTML: this.menuToggle ? Co : Ao }),
			o('span', null, 'Menu'),
		);
	}
	generateNavigationLinks(t, o, i, e) {
		const a = o + 1 === (i ? this.menuItemState.length - i : this.menuItemState.length) ? true : false;
		return this.generateMenuItem(t.href, t.title, t.linkIsActive, e, '', t.onClickHandler, a);
	}
	onEscapePressed(t) {
		if (t.key === 'Escape') {
			t.path[0].value = '';
		}
	}
	isMenuVisible(t) {
		var o;
		const { menuItemState: i, applicationHeaderInfoState: e } = this;
		const {
			maxSubheaderMobileLinks: a,
			maxSubheaderTabletLinks: n,
			maxSubheaderDesktopLinks: r,
		} = e !== null && e !== void 0 ? e : {};
		const l = (o = i === null || i === void 0 ? void 0 : i.length) !== null && o !== void 0 ? o : 0;
		if (l <= 0) {
			return false;
		}
		if (t === 'mobile') {
			return a && l - a > 0;
		}
		if (t === 'tablet') {
			return n && l - n > 0;
		}
		if (t === 'desktop') {
			return r && l - r > 0;
		}
		return true;
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
	componentDidUpdate() {
		if (this.type == 'ontario') {
			if (this.searchToggle === true) this.searchBar.focus();
			if (this.searchToggle === false) this.searchButton.focus();
			if (this.menuToggle === false) this.menuButton.blur();
		}
	}
	render() {
		var t, i, e, a, n, r, l, s, d, h, m, c, g, p, u, f, b, w, v, x, _, y, F, k, z, C;
		const A = this.type === 'serviceOntario';
		if (this.type == 'ontario') {
			return o(
				'div',
				null,
				o(
					'div',
					{ class: 'ontario-header__container', ref: (t) => (this.header = t) },
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
									{ href: this.translations.header.logoLink[`${this.language}`] },
									o('img', {
										class: 'ontario-show-for-medium',
										src: this.getImageAssetSrcPath('ontario-logo--desktop.svg'),
										alt: this.translations.header.logoAltText[`${this.language}`],
									}),
									o('img', {
										class: 'ontario-show-for-small-only',
										src: this.getImageAssetSrcPath('ontario-logo--mobile.svg'),
										alt: this.translations.header.logoAltText[`${this.language}`],
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
									novalidate: true,
								},
								o(
									'label',
									{ htmlFor: 'ontario-search-input-field', class: 'ontario-show-for-sr' },
									this.translations.header.search[`${this.language}`],
								),
								o(ut, {
									'type': 'text',
									'name': 'search',
									'id': 'ontario-search-input-field',
									'autoComplete': 'off',
									'aria-autocomplete': 'none',
									'className': 'ontario-input ontario-header__search-input',
									'required': true,
									'ref': (t) => (this.searchBar = t),
									'onKeyDown': this.onEscapePressed,
								}),
								o(ut, {
									'className': 'ontario-header__search-reset',
									'id': 'ontario-search-reset',
									'type': 'reset',
									'value': '',
									'aria-label': this.translations.header.clearSearchField[`${this.language}`],
								}),
								o(
									'button',
									{ class: 'ontario-header__search-submit', id: 'ontario-search-submit', type: 'submit' },
									o('span', { class: 'ontario-show-for-sr' }, this.translations.header.submit[`${this.language}`]),
									o('span', { class: 'ontario-header__icon-container', innerHTML: Ho }),
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
										this.language === 'en'
											? (t = this.languageState) === null || t === void 0
												? void 0
												: t.frenchLink
											: (i = this.languageState) === null || i === void 0
											? void 0
											: i.englishLink,
									size: 'default',
									customLanguageToggle: this.customLanguageToggle,
									language: this.language,
								}),
								o(
									'button',
									{
										'class':
											'ontario-header__search-toggler ontario-header-button ontario-header-button--without-outline ontario-hide-for-large',
										'id': 'ontario-header-search-toggler',
										'aria-controls': 'ontario-search-form-container',
										'onClick': this.handleSearchToggle,
										'ref': (t) => (this.searchButton = t),
									},
									o('span', { class: 'ontario-header__icon-container', innerHTML: No }),
									o(
										'span',
										{ class: 'ontario-show-for-medium ontario-show' },
										this.translations.header.search[`${this.language}`],
									),
								),
								this.renderMenuButton('ontario-header'),
							),
							o(
								'div',
								{ class: 'ontario-header__search-close-container ontario-columns ontario-small-2 ontario-medium-3' },
								o(
									'button',
									{
										'class':
											'ontario-header__search-close ontario-header-button ontario-header-button--without-outline',
										'id': 'ontario-header-search-close',
										'aria-label': this.translations.header.closeSearch[`${this.language}`],
										'type': 'button',
										'onClick': this.handleSearchToggle,
									},
									o(
										'span',
										{ 'aria-hidden': `${!this.searchToggle}` },
										this.translations.header.close[`${this.language}`],
									),
									o('span', { class: 'ontario-header__icon-container', innerHTML: Co }),
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
								(e = this.menuItemState) === null || e === void 0
									? void 0
									: e.map((t, o) => {
											const i = o + 1 === this.menuItemState.length;
											const e = t.title.replace(/\s+/g, '-').toLowerCase();
											const a = window.location.pathname.includes(e);
											return this.isDynamicMenu
												? this.generateMenuItem(
														t.href,
														t.title,
														a,
														'ontario-header',
														'ontario-header-navigation__menu-item',
														undefined,
														i,
												  )
												: this.generateMenuItem(
														t.href,
														t.title,
														t.linkIsActive,
														'ontario-header',
														'ontario-header-navigation__menu-item',
														t.onClickHandler,
														i,
												  );
									  }),
							),
						),
					),
				),
				this.menuToggle && o('div', { class: 'ontario-hide-for-large ontario-overlay' }),
			);
		} else {
			return o(
				'div',
				null,
				o(
					'div',
					{
						class: 'ontario-application-header-container',
						id: 'ontario-application-header',
						ref: (t) => (this.header = t),
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
									{ href: this.translations.header.logoLink[`${this.language}`] },
									o('img', {
										src: this.getImageAssetSrcPath('ontario-logo--desktop.svg'),
										alt: this.translations.header.logoAltText[`${this.language}`],
									}),
								),
							),
							o(
								'div',
								{ class: 'ontario-columns ontario-small-6 ontario-application-header__lang-toggle' },
								o('ontario-language-toggle', {
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
									language: this.language,
								}),
							),
						),
					),
					o(
						'div',
						{ class: 'ontario-application-subheader-menu__container' },
						o(
							'section',
							{ class: `ontario-application-subheader ${A ? 'ontario-service-subheader' : ''}` },
							o(
								'div',
								{ class: 'ontario-row' },
								o(
									'div',
									{ class: 'ontario-columns ontario-small-12 ontario-application-subheader__container' },
									!A
										? o(
												'p',
												{ class: 'ontario-application-subheader__heading' },
												o(
													'a',
													{ href: (r = this.applicationHeaderInfoState) === null || r === void 0 ? void 0 : r.href },
													(l = this.applicationHeaderInfoState) === null || l === void 0 ? void 0 : l.title,
												),
										  )
										: o(
												'a',
												{
													href: (s = this.applicationHeaderInfoState) === null || s === void 0 ? void 0 : s.href,
													class: 'ontario-service-subheader__link',
												},
												o(
													'div',
													{ class: 'ontario-service-subheader__heading-container' },
													o(
														'p',
														{ class: 'ontario-service-subheader__heading' },
														this.translations.header.serviceOntario[`${this.language}`],
													),
													o(
														'p',
														{ class: 'ontario-service-subheader__description' },
														(d = this.applicationHeaderInfoState) === null || d === void 0 ? void 0 : d.title,
													),
												),
										  ),
									o(
										'div',
										{ class: 'ontario-application-subheader__menu-container' },
										((h = this.applicationHeaderInfoState) === null || h === void 0
											? void 0
											: h.maxSubheaderDesktopLinks) &&
											o(
												'ul',
												{
													class: `${
														A ? 'ontario-service-subheader__menu' : 'ontario-application-subheader__menu'
													} ontario-show-for-large`,
												},
												(m = this.menuItemState) === null || m === void 0
													? void 0
													: m
															.slice(
																0,
																(c = this.applicationHeaderInfoState) === null || c === void 0
																	? void 0
																	: c.maxSubheaderDesktopLinks,
															)
															.map((t) =>
																this.generateMenuItem(
																	t.href,
																	t.title,
																	t.linkIsActive,
																	'app-desktop',
																	'',
																	t.onClickHandler,
																),
															),
											),
										((g = this.applicationHeaderInfoState) === null || g === void 0
											? void 0
											: g.maxSubheaderTabletLinks) &&
											o(
												'ul',
												{
													class:
														'ontario-application-subheader__menu ontario-hide-for-small ontario-show-for-medium ontario-hide-for-large',
												},
												(p = this.menuItemState) === null || p === void 0
													? void 0
													: p
															.slice(
																0,
																(u = this.applicationHeaderInfoState) === null || u === void 0
																	? void 0
																	: u.maxSubheaderTabletLinks,
															)
															.map((t) =>
																this.generateMenuItem(
																	t.href,
																	t.title,
																	t.linkIsActive,
																	'app-tablet',
																	'',
																	t.onClickHandler,
																),
															),
											),
										((f = this.applicationHeaderInfoState) === null || f === void 0
											? void 0
											: f.maxSubheaderMobileLinks) &&
											o(
												'ul',
												{ class: 'ontario-application-subheader__menu ontario-show-for-small-only' },
												(b = this.menuItemState) === null || b === void 0
													? void 0
													: b
															.slice(0, this.applicationHeaderInfoState.maxSubheaderMobileLinks)
															.map((t) =>
																this.generateMenuItem(
																	t.href,
																	t.title,
																	t.linkIsActive,
																	'app-mobile',
																	'',
																	t.onClickHandler,
																),
															),
											),
										this.menuItemState !== undefined &&
											((w = this.applicationHeaderInfoState) === null || w === void 0
												? void 0
												: w.maxSubheaderDesktopLinks) !== this.menuItemState.length &&
											this.renderMenuButton('desktop'),
										this.menuItemState !== undefined &&
											((v = this.applicationHeaderInfoState) === null || v === void 0
												? void 0
												: v.maxSubheaderTabletLinks) !== this.menuItemState.length &&
											this.renderMenuButton('tablet'),
										this.menuItemState !== undefined &&
											((x = this.applicationHeaderInfoState) === null || x === void 0
												? void 0
												: x.maxSubheaderMobileLinks) !== this.menuItemState.length &&
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
									this.menuToggle === true
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
									(_ = this.menuItemState) === null || _ === void 0
										? void 0
										: _.slice(
												(y = this.applicationHeaderInfoState) === null || y === void 0
													? void 0
													: y.maxSubheaderDesktopLinks,
												this.menuItemState.length,
										  ).map((t, o) => {
												var i;
												return this.generateNavigationLinks(
													t,
													o,
													(i = this.applicationHeaderInfoState) === null || i === void 0
														? void 0
														: i.maxSubheaderDesktopLinks,
													'app-desktop',
												);
										  }),
								),
								o(
									'ul',
									{ class: 'ontario-show-for-medium ontario-hide-for-small ontario-hide-for-large' },
									(F = this.menuItemState) === null || F === void 0
										? void 0
										: F.slice(
												(k = this.applicationHeaderInfoState) === null || k === void 0
													? void 0
													: k.maxSubheaderTabletLinks,
												this.menuItemState.length,
										  ).map((t, o) => {
												var i;
												return this.generateNavigationLinks(
													t,
													o,
													(i = this.applicationHeaderInfoState) === null || i === void 0
														? void 0
														: i.maxSubheaderTabletLinks,
													'app-tablet',
												);
										  }),
								),
								o(
									'ul',
									{ class: 'ontario-show-for-small-only' },
									(z = this.menuItemState) === null || z === void 0
										? void 0
										: z
												.slice(
													(C = this.applicationHeaderInfoState) === null || C === void 0
														? void 0
														: C.maxSubheaderMobileLinks,
													this.menuItemState.length,
												)
												.map((t, o) => {
													var i;
													return this.generateNavigationLinks(
														t,
														o,
														(i = this.applicationHeaderInfoState) === null || i === void 0
															? void 0
															: i.maxSubheaderMobileLinks,
														'app-mobile',
													);
												}),
								),
							),
						),
					),
				),
				this.menuToggle && o('div', { class: 'ontario-hide-for-large ontario-overlay' }),
			);
		}
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
Vo.style = { application: Mo, ontario: Wo, serviceOntario: qo };
const Ro =
	'.ontario-hint-expander__button:focus,.ontario-hint-expander__button:active{box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:box-shadow 0.1s ease-in-out}.ontario-hint-expander__container{max-width:48rem}.ontario-hint-expander__button{color:#0066CC;cursor:pointer;background:none;border:none;display:flex;align-items:center;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:400;font-size:1rem;text-align:left;margin:0 0 1rem 0;padding:0 0.25rem 0 0}.ontario-hint-expander__button-icon--close{display:none;margin-right:0.25rem}.ontario-hint-expander__button-icon--open{display:inline-block;margin-right:0.25rem}.ontario-hint-expander__button:hover{color:#00478F}.ontario-hint-expander__button:active{color:#002142}.ontario-hint-expander__button>*{pointer-events:none}.ontario-hint-expander__content{border-left:4px solid #cccccc;color:#1a1a1a;background-color:#f2f2f2;display:none;padding:1rem 1rem 1rem calc(1rem + 0.25rem);margin:0 0 1rem 0.25rem}.ontario-hint-expander__content *:first-child{margin-top:0}.ontario-hint-expander__content *:last-child{margin-bottom:0}.ontario-hint-expander__content img{width:100%}@media screen and (min-width: 40em){.ontario-hint-expander__content img{width:50%}}.ontario-hint-expander__content.ontario-expander__content--opened{display:block}.ontario-hint-expander__container.ontario-expander--active .ontario-hint-expander__button-icon--close{display:inline-block}.ontario-hint-expander__container.ontario-expander--active .ontario-hint-expander__button-icon--open{display:none}.ontario-hint-expander__checkbox-exists-true{margin:0.75rem 0 0 0.5rem}@media screen and (max-width: 40em){.ontario-hint-expander__checkbox-exists-true{margin-top:1rem}}.ontario-input+.ontario-hint-expander__container{margin-top:-1.5rem !important}.ontario-checkboxes__item .ontario-hint-expander__container,.ontario-radios__item .ontario-hint-expander__container{margin-left:0.5rem}.ontario-checkboxes__label+.ontario-hint-expander__container,.ontario-radios__label+.ontario-hint-expander__container{margin-top:0.75rem}@media screen and (max-width: 40em){.ontario-checkboxes__label+.ontario-hint-expander__container,.ontario-radios__label+.ontario-hint-expander__container{margin-top:1rem}}';
const jo = Ro;
const Yo = class {
	constructor(o) {
		t(this, o);
		this.toggleExpanderEvent = e(this, 'toggleExpanderEvent', 7);
		this.onClick = (t) => {
			const o = t.target;
			const i = o === null || o === void 0 ? void 0 : o.parentElement;
			i === null || i === void 0 ? void 0 : i.classList.toggle('ontario-expander--active');
			let e = i === null || i === void 0 ? void 0 : i.querySelector("[data-toggle='ontario-expander-content']");
			e === null || e === void 0 ? void 0 : e.classList.toggle('ontario-expander__content--opened');
			(e === null || e === void 0 ? void 0 : e.classList.contains('ontario-expander__content--opened'))
				? e.setAttribute('aria-hidden', 'false')
				: e === null || e === void 0
				? void 0
				: e.setAttribute('aria-hidden', 'true');
			(i === null || i === void 0 ? void 0 : i.classList.contains('ontario-expander--active'))
				? i === null || i === void 0
					? void 0
					: i.setAttribute('aria-expanded', 'true')
				: i === null || i === void 0
				? void 0
				: i.setAttribute('aria-expanded', 'false');
			this.toggleExpanderEvent.emit(t);
		};
		this.hintContentType = 'string';
		this.hint = undefined;
		this.content = undefined;
		this.elementId = undefined;
		this.hintState = undefined;
	}
	checkHintContentType() {
		if (this.hintContentType !== 'string' && this.hintContentType !== 'html') {
			const t = new c();
			t.addDesignSystemTag()
				.addMonospaceText(' hintContentType ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-hint-text> ')
				.addRegularText('was not one of the permitted types. A default type of `string` will be applied.')
				.printMessage();
			return (this.hintContentType = 'string');
		}
		return this.hintContentType;
	}
	updateHintContent() {
		var t, o;
		this.hintState =
			(o = (t = this.hint) !== null && t !== void 0 ? t : this.host.textContent) !== null && o !== void 0 ? o : '';
		this.validateHint(this.hintState);
	}
	validateContent(t) {
		if (s(t)) {
			const t = new c();
			t.addDesignSystemTag()
				.addMonospaceText(' content ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-hint-expander> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	}
	validateHint(t) {
		if (s(t)) {
			const t = new c();
			t.addDesignSystemTag()
				.addMonospaceText(' hint ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-hint-expander> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	}
	componentWillLoad() {
		var t;
		this.elementId = (t = this.elementId) !== null && t !== void 0 ? t : It();
		this.updateHintContent();
		this.checkHintContentType();
		this.validateContent(this.content);
	}
	componentDidLoad() {
		const t = new MutationObserver((t) => {
			t.forEach((t) => {
				if (t.type === 'attributes') {
					this.updateHintContent();
				}
			});
		});
		const o = { attributes: true };
		t.observe(this.host, o);
	}
	getId() {
		var t;
		return (t = this.elementId) !== null && t !== void 0 ? t : '';
	}
	render() {
		return o(
			'div',
			{ key: 'de5d2b0a0639a3e14fdf9cd34b6781123ebf13a9', class: 'ontario-hint-expander__container' },
			o(
				'button',
				{
					'key': 'c586376903b31fb1b538404ae5b4259102df500a',
					'class': 'ontario-hint-expander__button',
					'onClick': this.onClick,
					'id': `hint-expander-button-${this.getId()}`,
					'aria-controls': `hint-expander-content-${this.getId()}`,
					'aria-expanded': 'false',
					'data-toggle': 'ontario-collapse',
				},
				o(
					'span',
					{
						key: 'b689528264cebabec3c09e2df78d4d9a9e75146c',
						class: 'ontario-hint-expander__button-icon--close ontario-icon',
					},
					o('ontario-icon-chevron-up', { key: 'bf7c9b5056e86ca9c1c9dc212b4f9442db826981', colour: 'inherit' }),
				),
				o(
					'span',
					{ key: 'f67fca9ae4a6de2df5410d1294cf2735dcb8f594', class: 'ontario-hint-expander__button-icon--open' },
					o('ontario-icon-chevron-down', { key: '8b9e57741ce0a0e93128a0f2d850b3f3eca0cb49', colour: 'inherit' }),
				),
				this.hint,
			),
			o(
				'div',
				{
					'key': 'bd9dda3470cf492efdf50601262da71b28d35201',
					'class': 'ontario-hint-expander__content',
					'id': `hint-expander-content-${this.getId()}`,
					'aria-labelledby': `hint-expander-button-${this.getId()}`,
					'aria-hidden': 'true',
					'data-toggle': 'ontario-expander-content',
				},
				this.hintContentType === 'string' ? this.content : o('span', { innerHTML: this.content }),
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
Yo.style = jo;
const Po =
	'.ontario-hint{color:#4d4d4d;display:inline-block;margin:0 0 1rem 0;width:100%;max-width:48rem}.ontario-hint p{margin-bottom:1rem}.ontario-hint p:first-of-type{margin-top:0}.ontario-hint p:last-of-type{margin-bottom:0}.ontario-hint a[x-apple-data-detectors]{color:inherit;cursor:none;text-decoration:none}';
const Uo = Po;
const Jo = class {
	constructor(o) {
		t(this, o);
		this.hintContentType = 'string';
		this.hint = undefined;
		this.elementId = undefined;
		this.hintState = undefined;
	}
	checkHintContentType() {
		if (this.hintContentType !== 'string' && this.hintContentType !== 'html') {
			const t = new c();
			t.addDesignSystemTag()
				.addMonospaceText(' hintContentType ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-hint-text> ')
				.addRegularText('was not one of the permitted types. A default type of `string` will be applied.')
				.printMessage();
			return (this.hintContentType = 'string');
		}
		return this.hintContentType;
	}
	updateHintContent() {
		var t, o;
		this.hintState =
			(o = (t = this.hint) !== null && t !== void 0 ? t : this.host.textContent) !== null && o !== void 0 ? o : '';
		this.validateHintContent(this.hintState);
	}
	validateHintContent(t) {
		if (!this.host.textContent) {
			if (s(t)) {
				const t = new c();
				t.addDesignSystemTag()
					.addMonospaceText(' hint ')
					.addRegularText('for')
					.addMonospaceText(' <ontario-hint-text> ')
					.addRegularText('was not provided')
					.printMessage();
			}
		}
	}
	getId() {
		var t;
		return (t = this.elementId) !== null && t !== void 0 ? t : '';
	}
	async getHintTextId() {
		return this.elementId;
	}
	componentWillLoad() {
		var t;
		this.updateHintContent();
		this.checkHintContentType();
		this.elementId = (t = this.elementId) !== null && t !== void 0 ? t : It();
	}
	componentDidLoad() {
		const t = new MutationObserver((t) => {
			t.forEach((t) => {
				if (t.type === 'attributes') {
					this.updateHintContent();
				}
			});
		});
		const o = { attributes: true };
		t.observe(this.host, o);
	}
	render() {
		return this.hintContentType === 'string'
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
Jo.style = Uo;
const Zo =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const Qo = Zo;
const Go = class {
	constructor(o) {
		t(this, o);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const t = new c();
			t.addDesignSystemTag()
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
	validateColour() {
		const t = l(this.colour, h);
		if (t) {
			this.iconColourState = this.colour;
		} else {
			if (m(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	}
	warnDefaultColour() {
		const t = new c();
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
	}
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				key: '21e86f03593f9a949ac6158810b5fb4d86afb532',
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					key: 'def0e58d001e15b7bbe147b07ecadee40a1e660b',
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'accessibility',
				},
				o('path', {
					key: 'c2bc439610dc69d7d072793417d3126d9b670942',
					d: 'M18.4 11.2l-4.1.2 2.3-2.6c.2-.3.3-.8.2-1.3-.1-.3-.2-.6-.5-.8l-5.4-3.2c-.4-.3-1-.2-1.4.1L6.8 6.1c-.5.5-.6 1.2-.1 1.7.4.5 1.2.5 1.7.1l2-1.8 1.9 1.1-4.2 4.3c-.1.1-.1.2-.2.2-.5.2-1 .4-1.4.7L8 13.9c.5-.2 1-.4 1.5-.4 1.9 0 3.5 1.6 3.5 3.5 0 .6-.1 1.1-.4 1.5l1.5 1.5a5.29 5.29 0 0 0 .9-3c0-1.2-.4-2.4-1.1-3.3l3.3-.3-.2 4.8c-.1.7.4 1.2 1.1 1.3h.1c.6 0 1.1-.5 1.2-1.1l.2-5.9c0-.3-.1-.7-.3-.9-.3-.3-.6-.4-.9-.4zM18 5.5a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2 2 2 0 0 0 2 2zm-5.5 16.1a5.29 5.29 0 0 1-3 .9C6.5 22.5 4 20 4 17a5.29 5.29 0 0 1 .9-3l1.5 1.5c-.2.5-.4 1-.4 1.5 0 1.9 1.6 3.5 3.5 3.5.6 0 1.1-.1 1.5-.4l1.5 1.5z',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
Go.style = Qo;
const Ko =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const Xo = Ko;
const ti = class {
	constructor(o) {
		t(this, o);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
	}
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const t = new c();
			t.addDesignSystemTag()
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
	validateColour() {
		if (this.host.hasAttribute('colour')) {
			const t = new c();
			t.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-alert-error> ')
				.addRegularText('cannot be set. The provided colour is ignored.')
				.printMessage();
		}
	}
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				key: '1f567714a30e715741dde95549be1dd474ff5ade',
				class: `ontario-icon ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					key: '61cae731a47f779100df108a453c0e9d6f47cc72',
					class: 'svg-icon',
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'alert-error',
				},
				o('path', {
					key: 'a6aa67a4c3b00e67e0f363c5b811d6bb7c1606be',
					d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
					fill: '#cd0000',
				}),
				o('path', {
					key: '8cc25d5d3ad68d8bdc5686b7b5436f93472adc90',
					d: 'M11 17h2v-2h-2v2zm0-4h2V7h-2v6z',
					fill: '#fff',
				}),
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
ti.style = Xo;
const oi =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const ii = oi;
const ei = class {
	constructor(o) {
		t(this, o);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
	}
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const t = new c();
			t.addDesignSystemTag()
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
	validateColour() {
		if (this.host.hasAttribute('colour')) {
			const t = new c();
			t.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-alert-information> ')
				.addRegularText('cannot be set. The provided colour is ignored.')
				.printMessage();
		}
	}
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				key: '228c22b0e4badd20f6bd80aa13e1806c2168f663',
				class: `ontario-icon ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					key: '73a72898e1a5f581f8fcec957fa2e94061a50288',
					class: 'svg-icon',
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'alert-information',
				},
				o('path', {
					key: '60a6660cb15f5ecaf52a37d1f941ad176ea34c67',
					d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
					fill: '#1080a6',
				}),
				o('path', {
					key: '055426b1d03ac1146758907c3c6e8564bf82f898',
					d: 'M11 17h2v-6h-2v6zm0-8h2V7h-2v2z',
					fill: '#fff',
				}),
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
ei.style = ii;
const ai =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const ni = ai;
const ri = class {
	constructor(o) {
		t(this, o);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
	}
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const t = new c();
			t.addDesignSystemTag()
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
	validateColour() {
		if (this.host.hasAttribute('colour')) {
			const t = new c();
			t.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-alert-success> ')
				.addRegularText('cannot be set. The provided colour is ignored.')
				.printMessage();
		}
	}
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				key: 'ac6e3d40c154f61cb6c231bab55b5be7c752d450',
				class: `ontario-icon ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					key: 'db1e754ae44cc9bbaac9add82fd6d659a5ddbf1a',
					class: 'svg-icon',
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'alert-success',
				},
				o('path', {
					key: '99cce0f53756a22bd45ac7543f3d4ee859f0e17a',
					d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.4-1.4 3.6 3.58L17.17 7l1.4 1.42L10 17z',
					fill: '#118847',
				}),
				o('path', {
					key: 'b0a02e484015d05f4d4347d1eaed13017f63b11d',
					d: 'M5 12l5 5 8.58-8.58L17.17 7 10 14.17 6.4 10.6 5 12z',
					fill: '#fff',
				}),
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
ri.style = ni;
const li =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const si = li;
const di = class {
	constructor(o) {
		t(this, o);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
	}
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const t = new c();
			t.addDesignSystemTag()
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
	validateColour() {
		if (this.host.hasAttribute('colour')) {
			const t = new c();
			t.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-alert-warning> ')
				.addRegularText('cannot be set. The provided colour is ignored.')
				.printMessage();
		}
	}
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				key: '8bf04faecab04b29cd220120e59953bd4f9d6f22',
				class: `ontario-icon ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					key: 'd0686a61e3ef54717d175b5c433797c3cc944a10',
					class: 'svg-icon',
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'alert-warning',
				},
				o('path', {
					key: '68ca96d0828d201b8abf86b393cd8e6c9ab82d65',
					d: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z',
					fill: '#ffd440',
				}),
				o('path', { key: '2830b87f820ec3f81e31c6ae765fa8287be26378', d: 'M11 10h2v4h-2zm0 6h2v2h-2z', fill: '#000' }),
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
di.style = si;
const hi =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const mi = hi;
const ci = class {
	constructor(o) {
		t(this, o);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const t = new c();
			t.addDesignSystemTag()
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
	validateColour() {
		const t = l(this.colour, h);
		if (t) {
			this.iconColourState = this.colour;
		} else {
			if (m(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	}
	warnDefaultColour() {
		const t = new c();
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
	}
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				key: '791a65564039f8b92d1c76c317ead75eb0cee6f3',
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					key: '7b4a146d6aa82ac97848f08d49bbbeb8a0bf4a95',
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'camera',
				},
				o('path', {
					key: 'c41fac1c32dd5a3edef1c148e6a3120adc380e2f',
					d: 'M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1.8a3.2 3.2 0 0 0 0-6.4 3.2 3.2 0 1 0 0 6.4z',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
ci.style = mi;
const gi =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const pi = gi;
const ui = class {
	constructor(o) {
		t(this, o);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const t = new c();
			t.addDesignSystemTag()
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
	validateColour() {
		const t = l(this.colour, h);
		if (t) {
			this.iconColourState = this.colour;
		} else {
			if (m(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	}
	warnDefaultColour() {
		const t = new c();
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
	}
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				key: '81938d4248e8898f0dba3de4900cb9a54ed307dc',
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					key: 'bbcecd8820740564608842881efb7f99de52f908',
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'chevron-down',
				},
				o('path', {
					key: '7dc04ce8629bbaac2f0a1539d2f57735e206c7aa',
					d: 'M7.4 8.6l4.6 4.58 4.6-4.58L18 10l-6 6-6-6 1.4-1.4z',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
ui.style = pi;
const fi =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const bi = fi;
const wi = class {
	constructor(o) {
		t(this, o);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const t = new c();
			t.addDesignSystemTag()
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
	validateColour() {
		const t = l(this.colour, h);
		if (t) {
			this.iconColourState = this.colour;
		} else {
			if (m(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	}
	warnDefaultColour() {
		const t = new c();
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
	}
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				key: '482f0f6afe7dac86dd1a7b682b331f9f59aa7455',
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					key: 'c5a57bdcd9d8ffd527f2b49bbb9363fd080cbd62',
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'chevron-left',
				},
				o('path', {
					key: '7233bd17adcc780e47ae2caa16a4c6b2ea8bda4e',
					d: 'M15.4 7.4L14 6l-6 6 6 6 1.4-1.4-4.58-4.6 4.58-4.6z',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
wi.style = bi;
const vi =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const xi = vi;
const _i = class {
	constructor(o) {
		t(this, o);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const t = new c();
			t.addDesignSystemTag()
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
	validateColour() {
		const t = l(this.colour, h);
		if (t) {
			this.iconColourState = this.colour;
		} else {
			if (m(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	}
	warnDefaultColour() {
		const t = new c();
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
	}
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				key: '174c066deb9c77aa2e0e1913511ca29732ef5a42',
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					key: 'f4710ac898cacd0c18bdde80309ceeb2a28d06ec',
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'chevron-up',
				},
				o('path', {
					key: '53bca349d90425cf751671faadb12fded308c17a',
					d: 'M7.4 15.4l4.6-4.58 4.6 4.58L18 14l-6-6-6 6 1.4 1.4z',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
_i.style = xi;
const yi =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const Fi = yi;
const ki = class {
	constructor(o) {
		t(this, o);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const t = new c();
			t.addDesignSystemTag()
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
	validateColour() {
		const t = l(this.colour, h);
		if (t) {
			this.iconColourState = this.colour;
		} else {
			if (m(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	}
	warnDefaultColour() {
		const t = new c();
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
	}
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				key: '3d1bfe0f9327579fde0e5a13a6942f0dfc7d6c4c',
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					key: 'bd281675a163f2a3fb3473882e29d350378e3702',
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'email',
				},
				o('path', {
					key: '059aad96fa88fca0c871e0006b56a005dea612b7',
					d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
ki.style = Fi;
const zi =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const Ci = zi;
const Ai = class {
	constructor(o) {
		t(this, o);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const t = new c();
			t.addDesignSystemTag()
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
	validateColour() {
		const t = l(this.colour, h);
		if (t) {
			this.iconColourState = this.colour;
		} else {
			if (m(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	}
	warnDefaultColour() {
		const t = new c();
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
	}
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				key: '0c0e91078c2906379b761762902fed77c65240a0',
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					key: '721905d80b2ea75f48acf0fe0afa650ab6cf1a5d',
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'help',
				},
				o('path', {
					key: '78436415fe966668e1a4db7303f560a5cc249715',
					d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.6-.86.6-1.4 0-1.1-.9-2-2-2s-2 .9-2 2H8a4 4 0 1 1 8 0 3.18 3.18 0 0 1-.93 2.25z',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
Ai.style = Ci;
const Hi =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const Ni = Hi;
const Ti = class {
	constructor(o) {
		t(this, o);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
	}
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const t = new c();
			t.addDesignSystemTag()
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
	validateColour() {
		if (this.host.hasAttribute('colour')) {
			const t = new c();
			t.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-mastercard> ')
				.addRegularText('cannot be set. The provided colour is ignored.')
				.printMessage();
		}
	}
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				key: '35cf463f9bcb85ac4240660cde6d0bf4a6153b1f',
				class: `ontario-icon ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					key: 'a15d064ac1a1b4225c39bd87bb96ea8e07dbe3ba',
					class: 'svg-icon',
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'mastercard',
				},
				o('circle', { key: '8142c650fd638b0419a5c0f3243e102f381ff8fa', cx: '8', cy: '12', r: '6.5', fill: '#eb001b' }),
				o('circle', { key: '7ea8bbf4d455dd82155294b078446ba2ba778b96', cx: '16', cy: '12', r: '6.5', fill: '#f79e1b' }),
				o('path', {
					key: '51301b1041655ee5a5b8b6d744714433e7dc05b9',
					d: 'M12 17.124S9.5 15.5 9.5 12 12 6.876 12 6.876 14.5 8.5 14.5 12 12 17.124 12 17.124z',
					fill: '#ff5f00',
				}),
				o('path', {
					key: 'b4d4aac6bf1c902f21fdc604275aa194d4140aa9',
					d: 'M21.173 16.85v-.3h.125v-.06H21v.06h.117v.3h.055zm.578 0v-.35h-.1l-.105.25-.105-.25h-.1v.35h.065v-.265l.098.227h.067l.098-.227v.265h.063z',
					fill: '#f79e1b',
				}),
				o(
					'g',
					{ key: 'ebb5fa2a9ed2d88c139c793faddd7a253a46fd25', fill: '#231f20' },
					o('path', {
						key: '5c8c3891dad554a650890a0cd3fc50d170362483',
						d: 'M5.275 21.953v-1.098a.66.66 0 0 0-.187-.503.65.65 0 0 0-.501-.192.68.68 0 0 0-.35.072c-.108.055-.2.137-.265.24-.06-.1-.145-.18-.246-.235a.64.64 0 0 0-.332-.076.58.58 0 0 0-.513.26v-.216H2.5v1.75h.384V21c-.016-.12.023-.245.105-.333s.203-.138.324-.132c.253 0 .38.165.38.46v.974h.384V21c-.016-.12.024-.244.105-.333s.202-.138.323-.132c.26 0 .384.165.384.46v.974l.384-.007zm5.687-1.75h-.626v-.53h-.384v.53h-.348v.348h.355v.806c0 .406.157.648.608.648.168.001.333-.046.476-.136l-.1-.326c-.102.06-.218.095-.337.1-.183 0-.253-.117-.253-.293v-.798h.622l-.004-.348zm3.247-.044c-.186-.005-.368.096-.46.256v-.212h-.377v1.75h.38v-.98c0-.29.124-.45.366-.45a.62.62 0 0 1 .238.044l.117-.366c-.087-.03-.178-.047-.27-.048l.007.007zm-4.9.183a1.31 1.31 0 0 0-.714-.183c-.443 0-.732.212-.732.56 0 .286.212.46.604.516l.183.026c.21.03.308.084.308.183 0 .136-.14.212-.4.212a.93.93 0 0 1-.582-.183l-.183.297c.222.155.487.234.758.227.505 0 .798-.238.798-.57s-.23-.47-.61-.523l-.183-.026c-.165-.022-.297-.055-.297-.172s.124-.205.333-.205c.193.002.382.054.55.15l.168-.308zM19.5 20.16c-.186-.005-.368.096-.46.256v-.212h-.377v1.75h.38v-.98c0-.29.124-.45.366-.45a.62.62 0 0 1 .238.044l.117-.366c-.087-.03-.18-.047-.27-.048l.007.007zm-4.906.915c-.01.246.09.492.265.664s.423.265.67.25c.23.012.453-.063.63-.21l-.183-.308a.77.77 0 0 1-.458.158.56.56 0 0 1-.517-.56.56.56 0 0 1 .517-.56.77.77 0 0 1 .458.157l.183-.308c-.176-.146-.4-.22-.63-.21-.246-.014-.493.08-.67.25s-.274.418-.265.664v.007zm3.566 0v-.87h-.38v.212c-.13-.166-.34-.264-.55-.256-.243 0-.476.096-.647.268s-.268.404-.268.647.096.476.268.647.405.268.647.268c.21.008.42-.1.55-.256v.212h.38v-.87zm-1.417 0c.02-.323.338-.557.65-.484a.54.54 0 0 1 .4.422c.056.315-.195.62-.518.622-.3.004-.55-.264-.53-.56zm-4.595-.915c-.243.003-.474.103-.643.277s-.263.408-.26.65.103.474.277.643.408.262.65.26c.263.014.522-.07.727-.238l-.183-.282c-.145.116-.324.18-.51.183-.126.01-.25-.028-.35-.108s-.16-.195-.175-.32h1.3v-.146c0-.55-.34-.915-.83-.915l-.005-.004zm0 .34c.114-.003.227.042.31.12a.44.44 0 0 1 .133.304h-.915a.45.45 0 0 1 .465-.425h.007zm9.54.578V19.5h-.366v.915c-.13-.166-.34-.264-.55-.256-.243 0-.476.096-.647.268s-.268.404-.268.647.096.476.268.647.404.268.647.268c.21.008.42-.1.55-.256v.212h.366v-.868zm.635.62c.046-.001.092.017.126.05s.052.077.052.123-.02.1-.052.123-.08.05-.126.05c-.07-.001-.136-.043-.165-.106-.018-.043-.018-.093 0-.136a.18.18 0 0 1 .095-.091c.017-.007.072-.013.07-.013zm0 .31c.035 0 .07-.015.095-.04s.036-.058.036-.09c0-.05-.03-.1-.078-.12s-.112-.01-.15.03a.14.14 0 0 0 0 .183.14.14 0 0 0 .102.04h-.005zm-1.394-1.414c.315.074.49.43.365.723a.54.54 0 0 1-.484.321.54.54 0 0 1-.501-.347.54.54 0 0 1 .619-.697zm-13.505.484v-.875h-.38v.212c-.065-.083-.148-.15-.244-.194s-.2-.066-.306-.062c-.243 0-.476.096-.647.268s-.268.404-.268.647.096.476.268.647.404.268.647.268c.21.008.42-.1.55-.256v.212h.38v-.868zm-1.417 0c.02-.32.334-.558.65-.484a.54.54 0 0 1 .399.421c.056.315-.194.62-.518.623a.55.55 0 0 1-.535-.56h.004z',
					}),
					o('path', {
						key: '9d1e4b73a2e32f7aa93542f79ceef4ecbb1a8ed7',
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
Ti.style = Ni;
const Li =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const Oi = Li;
const Si = class {
	constructor(o) {
		t(this, o);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const t = new c();
			t.addDesignSystemTag()
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
	validateColour() {
		const t = l(this.colour, h);
		if (t) {
			this.iconColourState = this.colour;
		} else {
			if (m(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	}
	warnDefaultColour() {
		const t = new c();
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
	}
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				key: 'f6040ea045686e5fbb371f60f9ce9ce496121622',
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					key: '5378abb8975b93c3fccdad389a323187932ea817',
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'notification',
				},
				o('path', {
					key: '73eee5bae0c6dcdd4979439e9aded84aa9f79ce1',
					d: 'M21 19v1H3v-1l2-2v-6a6.99 6.99 0 0 1 5-6.71V4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.3A6.99 6.99 0 0 1 19 11v6l2 2zm-7 2a2 2 0 0 1-2 2 2 2 0 0 1-2-2',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
Si.style = Oi;
const Di =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const $i = Di;
const Bi = class {
	constructor(o) {
		t(this, o);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const t = new c();
			t.addDesignSystemTag()
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
	validateColour() {
		const t = l(this.colour, h);
		if (t) {
			this.iconColourState = this.colour;
		} else {
			if (m(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	}
	warnDefaultColour() {
		const t = new c();
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
	}
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				key: '44b03f57bde1b439999ede721aa84f3a8f0b0d6b',
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					key: 'af4719971f48e101b4b4b8357cb5035ac6e848e0',
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'print',
				},
				o('path', {
					key: '5b5de64604393ed990ae82a14c53887dfea761cd',
					d: 'M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
Bi.style = $i;
const Mi =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const Ii = Mi;
const Wi = class {
	constructor(o) {
		t(this, o);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const t = new c();
			t.addDesignSystemTag()
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
	validateColour() {
		const t = l(this.colour, h);
		if (t) {
			this.iconColourState = this.colour;
		} else {
			if (m(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	}
	warnDefaultColour() {
		const t = new c();
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
	}
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				key: '8355fbe38d3a0ced4fc84d51f736e21c857c6bc0',
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					key: 'dc59cf462e0f6941a2d5fe7fa31818b977e54d99',
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'sentiment-5',
				},
				o('path', {
					key: '547b44fe5e4a87c7a029443aa6209a941d284dcd',
					d: 'M12 2a10 10 0 1 0 0 20 10.01 10.01 0 0 0 10-10A10.01 10.01 0 0 0 11.99 2zm0 18a8 8 0 1 1 0-16 8 8 0 1 1 0 16zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7zm8.5-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 1 0 0 3zm-7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 1 0 0 3z',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
Wi.style = Ii;
const Ei =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const qi = Ei;
const Vi = class {
	constructor(o) {
		t(this, o);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const t = new c();
			t.addDesignSystemTag()
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
	validateColour() {
		const t = l(this.colour, h);
		if (t) {
			this.iconColourState = this.colour;
		} else {
			if (m(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	}
	warnDefaultColour() {
		const t = new c();
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
	}
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				key: '68b3b5f69314fdcd232b964699679dcada2d9ee8',
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					key: 'cd918acb0f1346b58128ea5cfe8c4e7c0acb1dcc',
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'text-message',
				},
				o('path', {
					key: '9efb9504912edff13dde30d82071740b3808cdd8',
					d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
Vi.style = qi;
const Ri =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const ji = Ri;
const Yi = class {
	constructor(o) {
		t(this, o);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const t = new c();
			t.addDesignSystemTag()
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
	validateColour() {
		const t = l(this.colour, h);
		if (t) {
			this.iconColourState = this.colour;
		} else {
			if (m(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	}
	warnDefaultColour() {
		const t = new c();
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
	}
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				key: '3193c79aaf33532b68e377e50aab9bb1ae58c52d',
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					key: '693cd8985c5ef1eed4838ccc02fcc639c66b41f6',
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'transport-bus',
				},
				o('path', {
					key: '1d87aa223a65513ddbce196b6894738c1dd21c23',
					d: 'M4 16c0 .88.4 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.6-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 1 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 1 1 0 3zm1.5-6H6V6h12v5z',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
Yi.style = ji;
const Pi =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1>.ontario-label--heading,.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1>.ontario-label--heading,.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1,h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1>.ontario-label--heading,.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1,h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}.ontario-input:focus,.ontario-input:active{box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:box-shadow 0.1s ease-in-out}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul[class*=columns-] li:last-child,ol[class*=columns-] li:last-child{padding-bottom:0.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend--large{font-size:1.75rem}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-label{cursor:pointer;color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;line-height:1.5;margin:0 0 1rem 0;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-label{font-size:1.125rem;line-height:1.56}}.ontario-label--large{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2;max-width:26.25em}@media screen and (max-width: 40em){.ontario-label--large{font-size:1.4375rem;line-height:1.39}}h1>.ontario-label--heading{display:inline-block;margin:0}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;width:100%;padding:0.625rem 1rem;transition:box-shadow 0.1s ease-in-out}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}.ontario-form-group:last-of-type{margin-bottom:2.5rem}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-error-messaging{display:flex;align-items:flex-start;margin:-0.25rem 0 0.5rem 0;color:#D81A21;max-width:48rem}.ontario-error-messaging__content{margin-left:0.5rem}.ontario-input__error{border-color:#D81A21 !important}.ontario-error__hidden{display:none}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;padding:0.625rem 1rem;transition:box-shadow 0.1s ease-in-out;width:100%}.ontario-input-hint-expander--true{margin-bottom:1rem}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}.ontario-input--error input{border:0.125rem solid #CD0000}';
const Ui = Pi;
const Ji = class {
	constructor(o) {
		t(this, o);
		this.inputOnInput = e(this, 'inputOnInput', 7);
		this.inputOnChange = e(this, 'inputOnChange', 7);
		this.inputOnBlur = e(this, 'inputOnBlur', 7);
		this.inputOnFocus = e(this, 'inputOnFocus', 7);
		this.inputErrorOccurred = e(this, 'inputErrorOccurred', 7);
		if (o.$hostElement$['s-ei']) {
			this.internals = o.$hostElement$['s-ei'];
		} else {
			this.internals = o.$hostElement$.attachInternals();
			o.$hostElement$['s-ei'] = this.internals;
		}
		this.caption = undefined;
		this.elementId = undefined;
		this.inputWidth = 'default';
		this.name = undefined;
		this.hintText = undefined;
		this.required = false;
		this.type = 'text';
		this.value = undefined;
		this.errorMessage = undefined;
		this.language = 'en';
		this.hintExpander = undefined;
		this.hintTextId = undefined;
		this.enableLiveValidation = false;
		this.inputValidator = undefined;
		this.customOnInput = undefined;
		this.customOnChange = undefined;
		this.customOnBlur = undefined;
		this.customOnFocus = undefined;
		this.requiredValidationMessage = undefined;
		this.internalHintText = undefined;
		this.internalHintExpander = undefined;
		this.captionState = undefined;
		this.hasBeenInteractedWith = false;
		this.translations = T;
	}
	handleSetAppLanguage(t) {
		this.language = r(t);
	}
	handleHeaderLanguageToggled(t) {
		this.language = r(t.detail.newLanguage);
	}
	handleValueChange() {
		this.hasBeenInteractedWith = this.hasBeenInteractedWith || !!this.value;
	}
	validateName(t) {
		if (s(t)) {
			const t = new c();
			t.addDesignSystemTag()
				.addMonospaceText(' name ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-input> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	}
	parseHintText() {
		if (this.hintText) {
			const t = vt(this.hintText);
			this.internalHintText = t;
		}
	}
	parseHintExpander() {
		const t = this.hintExpander;
		if (t) {
			if (typeof t === 'string') this.internalHintExpander = JSON.parse(t);
			else this.internalHintExpander = t;
		}
	}
	updateCaptionState(t) {
		this.captionState = new wt(this.element.tagName, t, this.translations, this.language, false, this.required);
	}
	updateLanguage() {
		this.updateCaptionState(this.caption);
	}
	async handleComponentBlur() {
		if (this.enableLiveValidation) {
			const t = this.inputValidator && this.inputValidator(this.value);
			await (t === null || t === void 0
				? void 0
				: t.then((t) => (this.errorMessage = t === null || t === void 0 ? void 0 : t.errorMessage)));
			if (this.required && this.hasBeenInteractedWith && !t)
				if (!this.value)
					this.errorMessage =
						this.requiredValidationMessage || this.translations.input.requiredFieldError[this.getComponentLanguage()];
				else this.errorMessage = undefined;
		}
	}
	broadcastInputErrorOccurredEvent() {
		var t;
		this.inputErrorOccurred.emit({
			inputId: this.getId(),
			errorMessage: (t = this.errorMessage) !== null && t !== void 0 ? t : '',
		});
	}
	handleEvent(t, o) {
		var i, e, a;
		const n = t.target;
		this.value = n === null || n === void 0 ? void 0 : n.value;
		(e = (i = this.internals) === null || i === void 0 ? void 0 : i.setFormValue) === null || e === void 0
			? void 0
			: e.call(i, (a = this.value) !== null && a !== void 0 ? a : '');
		_t(
			t,
			o,
			n,
			this.inputOnChange,
			this.inputOnFocus,
			this.inputOnBlur,
			this.inputOnInput,
			'input',
			this.customOnChange,
			this.customOnFocus,
			this.customOnBlur,
			this.customOnInput,
			this.element,
		);
	}
	getId() {
		var t;
		return (t = this.elementId) !== null && t !== void 0 ? t : '';
	}
	getValue() {
		var t;
		return (t = this.value) !== null && t !== void 0 ? t : '';
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
	getComponentLanguage() {
		var t;
		return (t = this.language) !== null && t !== void 0 ? t : 'en';
	}
	async componentDidLoad() {
		var t;
		this.hintTextId = await ((t = this.hintTextRef) === null || t === void 0 ? void 0 : t.getHintTextId());
	}
	componentWillLoad() {
		var t;
		this.updateCaptionState(this.caption);
		this.elementId = (t = this.elementId) !== null && t !== void 0 ? t : It();
		this.parseHintText();
		this.parseHintExpander();
		this.validateName(this.name);
		this.language = r(this.language);
	}
	render() {
		const t = !!this.errorMessage;
		return o(
			'div',
			{
				key: '6824b3fc596dd144fac82b9483d4a30e6cd0c164',
				class: `ontario-form-group ${t ? 'ontario-input--error' : ''}`,
			},
			this.captionState.getCaption(this.getId(), !!this.internalHintExpander),
			this.internalHintText &&
				o('ontario-hint-text', {
					hint: this.internalHintText.hint,
					hintContentType: this.internalHintText.hintContentType,
					ref: (t) => (this.hintTextRef = t),
				}),
			o(eo, { key: 'd46e5883decc5d9bac5b322804d6d69dcf6952af', message: this.errorMessage, error: t }),
			o(ut, {
				'key': '64b93de051e0b52ce75d23b00166558b121558f3',
				'aria-describedBy': this.hintTextId,
				'className': this.getClass(),
				'id': this.getId(),
				'name': this.name,
				'onInput': (t) => this.handleEvent(t, xt.Input),
				'onChange': (t) => this.handleEvent(t, xt.Change),
				'onBlur': (t) => this.handleEvent(t, xt.Blur),
				'onFocus': (t) => this.handleEvent(t, xt.Focus),
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
	static get formAssociated() {
		return true;
	}
	get element() {
		return i(this);
	}
	static get watchers() {
		return {
			value: ['handleValueChange'],
			name: ['validateName'],
			hintText: ['parseHintText'],
			hintExpander: ['parseHintExpander'],
			caption: ['updateCaptionState'],
			language: ['updateLanguage'],
			errorMessage: ['broadcastInputErrorOccurredEvent'],
		};
	}
};
Ji.style = Ui;
const Zi =
	'.ontario-language-toggler:focus{box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:box-shadow 0.1s ease-in-out}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-language-toggler{background-color:#1a1a1a;border:none;border-radius:4px;box-sizing:border-box;box-shadow:none;color:#FFFFFF;cursor:pointer;display:flex;align-items:center;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;height:48px;line-height:1.5555555556;text-align:center;text-decoration:none}.ontario-language-toggler:hover{background-color:#4d4d4d}.ontario-language-toggler:active{background-color:#666666;color:#FFFFFF}.ontario-language-toggler:focus{background-color:#4d4d4d;color:#FFFFFF}.ontario-language-toggler:visited{color:#FFFFFF}.ontario-language-toggler abbr[title]{text-decoration:none}.ontario-language-toggler--default{padding:0.75rem}.ontario-language-toggler--small{font-size:1rem;line-height:1.375rem;height:auto;outline:none;padding:0.5rem 0.75rem}';
const Qi = Zi;
const Gi = class {
	constructor(o) {
		t(this, o);
		this.setAppLanguage = e(this, 'setAppLanguage', 7);
		this.headerLanguageToggled = e(this, 'headerLanguageToggled', 7);
		this.updateHTMLLang = (t) => {
			const o = document.firstElementChild;
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
		this.translations = T;
	}
	setAppLanguageHandler() {
		let t;
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
	}
	handleHeaderLanguageToggled(t, o) {
		const i = t === 'en' ? 'fr' : 'en';
		this.language = i;
		this.headerLanguageToggled.emit({ oldLanguage: t, newLanguage: i });
		this.updateHTMLLang(i);
		if (this.customLanguageToggle && o) {
			this.customLanguageToggle(o);
		}
	}
	updateLanguage() {
		this.language = r(this.language);
		this.setAppLanguageHandler();
	}
	connectedCallback() {
		this.updateLanguage();
	}
	render() {
		const t = this.language === 'en' ? 'Français' : 'English';
		const i = this.language === 'en' ? 'FR' : 'EN';
		return o(
			'a',
			{
				'key': '8f86da95ae38c7dccea2f86898a14aa81fa45d86',
				'class':
					this.size === 'default'
						? 'ontario-language-toggler ontario-language-toggler--default'
						: 'ontario-language-toggler ontario-language-toggler--small',
				'href': this.url ? this.url : '#',
				'aria-label': this.translations.languageToggle.ariaLabel[`${this.language}`],
				'onClick': (t) => this.handleHeaderLanguageToggled(this.language, t),
			},
			this.size === 'small'
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
Gi.style = Qi;
const Ki =
	'.ontario-loading-indicator__overlay,.ontario-loading-indicator__overlay--within-container{position:fixed;width:100%;left:0;right:0;top:0;bottom:0;background-color:rgba(255, 255, 255, 0.7);z-index:9999}.ontario-loading-indicator__overlay[aria-hidden=false],.ontario-loading-indicator__overlay--within-container[aria-hidden=false]{display:block}.ontario-loading-indicator__overlay[aria-hidden=true],.ontario-loading-indicator__overlay--within-container[aria-hidden=true]{display:none}.ontario-loading-indicator__overlay--within-container{position:absolute}.ontario-loading-indicator{display:flex;flex-direction:column;align-items:center;justify-content:center;position:absolute;top:50%;transform:translateY(-50%);width:100%;height:100%}.ontario-loading-indicator p{color:#4d4d4d;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;line-height:1.5;font-weight:700;word-spacing:0.025rem;margin:0.75rem 0 0}.ontario-loading-indicator__spinner{animation:rotator 1.5s linear infinite;width:3rem;height:3rem;overflow:visible}.ontario-loading-indicator__spinner circle{stroke-dasharray:1, 200;stroke-dashoffset:0;stroke-linecap:round;stroke:#4d4d4d;animation:dash 1.5s ease-in-out infinite}@keyframes rotator{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1, 200;stroke-dashoffset:0}50%{stroke-dasharray:89, 200;stroke-dashoffset:-35px}100%{stroke-dasharray:89, 200;stroke-dashoffset:-124px}}';
const Xi = Ki;
const te = class {
	constructor(o) {
		t(this, o);
		this.type = 'large';
		this.isLoading = false;
		this.message = undefined;
		this.fullScreenOverlay = true;
		this.language = undefined;
		this.translations = T;
		this.isLoadingState = undefined;
		this.typeState = undefined;
	}
	handleSetAppLanguage(t) {
		if (!this.language) {
			this.language = r(t);
		}
	}
	handleHeaderLanguageToggled(t) {
		this.language = r(t);
	}
	isLoadingChanged(t) {
		this.isLoadingState = t;
	}
	validateType() {
		const t = l(this.type, ['large', 'small']);
		if (t) {
			return (this.typeState = this.type);
		} else {
			this.warnDefaultType();
			return (this.typeState = 'large');
		}
	}
	warnDefaultType() {
		const t = new c();
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
	}
	componentWillLoad() {
		this.language = r(this.language);
		this.validateType();
		this.isLoadingState = this.isLoading;
	}
	render() {
		var t;
		return this.typeState === 'large'
			? o(
					'div',
					{
						'class': this.fullScreenOverlay
							? `ontario-loading-indicator__overlay`
							: `ontario-loading-indicator__overlay--within-container`,
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
							(t = this.message) !== null && t !== void 0 ? t : this.translations.loading[`${this.language}`],
						),
					),
			  )
			: o('p', null, 'The small loading indicator is still under development.');
	}
	static get watchers() {
		return { isLoading: ['isLoadingChanged'], type: ['validateType'] };
	}
};
te.style = Xi;
const oe =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul[class*=columns-] li:last-child,ol[class*=columns-] li:last-child{padding-bottom:0.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-alert{border-width:0 0 0 0.25rem;border-style:solid;padding:1.5rem;margin:2rem 0 2.5rem 0}.ontario-alert__header{display:-webkit-box;display:-ms-flexbox;display:flex}.ontario-alert__header-icon{display:inline-block;vertical-align:top;margin-right:0.95rem}.ontario-alert__header-title{margin-bottom:0.75rem;padding-top:0.125rem}.ontario-alert__body{margin-left:3.25rem;max-width:48rem}@media screen and (max-width: 40em){.ontario-alert__body{margin-left:0}}.ontario-alert__body p{margin-top:0}.ontario-alert__body p:last-of-type{margin-bottom:0.5rem}.ontario-alert__body p:last-of-type+ul{margin-top:1rem}.ontario-alert__body ul:last-of-type{margin-bottom:0.5rem}.ontario-alert--error ul{margin-left:1.25rem}.ontario-alert--error ul:last-of-type{margin-bottom:0.5rem}.ontario-alert--informational{border-color:#1080A6;background-color:#E2F0F4}.ontario-alert--warning{border-color:#FFD440;background-color:#FEF6DC}.ontario-alert--success{border-color:#118847;background-color:#E5f0E9}.ontario-alert--error{border-color:#CD0000;background-color:#FCEFF0}.ontario-alert--error a{color:#CD0000}.ontario-alert--error a:hover,.ontario-alert--error a:focus{color:#6b0000}.ontario-alert--error a:active{color:#280000}';
const ie = oe;
const ee = class {
	constructor(o) {
		t(this, o);
		this.type = 'informational';
		this.heading = undefined;
		this.content = undefined;
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
		if (typeof t === 'string') {
			return o('p', null, t);
		}
		return o('slot', null);
	}
	render() {
		return o(
			'div',
			{ key: '8d9ce139b254b12b7b718695fa033ca38370a49c', class: this.getClass() },
			o(
				'div',
				{ key: '1a64f71f87f6f21da11d9354f800a2bcb4ddbeda', class: 'ontario-alert__header' },
				o(
					'div',
					{ key: '1a5566b6f44fa1fbf8a6358d9670bd9d85ebf569', class: 'ontario-alert__header-icon' },
					this.renderIcon(),
				),
				o(
					'h2',
					{ key: '19f4f2ae3faa8b8c9ab1281b46b653d2b2a43d46', class: 'ontario-alert__header-title ontario-h4' },
					this.heading,
				),
			),
			o('div', { key: 'cebd1ecddd5419b454dcd36512dbc4e1a3dcb684', class: 'ontario-alert__body' }, this.renderContent()),
		);
	}
};
ee.style = ie;
const ae =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1,h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1,h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}.ontario-radios__input:focus+.ontario-radios__label:before{box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:box-shadow 0.1s ease-in-out}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul[class*=columns-] li:last-child,ol[class*=columns-] li:last-child{padding-bottom:0.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend--large{font-size:1.75rem}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-radios__item{position:relative;display:block;margin:0 0 1rem;padding:0 2rem 0}.ontario-radios__item:last-of-type{margin-bottom:0}.ontario-radios__input{cursor:pointer;margin:0;position:absolute;opacity:0;top:-2px;left:-2px;width:36px;height:36px;z-index:0}@media screen and (max-width: 40em){.ontario-radios__input{width:40px;height:40px;top:-1.5px;left:-1.5px}}.ontario-radios__label{cursor:pointer;color:#1a1a1a;display:inline-block;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:700;line-height:1.5;margin:0.2rem 0;max-width:38.75em;padding:0 0.75rem;touch-action:manipulation;white-space:normal;width:auto;white-space:normal}@media screen and (max-width: 40em){.ontario-radios__label{margin:0.3rem 0;padding:0 1rem}}.ontario-radios__label:before{content:"";border:2px solid #1a1a1a;border-radius:50%;box-sizing:border-box;position:absolute;top:0;left:0;width:32px;height:32px;transition:border 0.1s ease-in-out}@media screen and (max-width: 40em){.ontario-radios__label:before{width:36px;height:36px}}.ontario-radios__label:after{content:"";border-radius:50%;border:10px solid #1a1a1a;position:absolute;top:0;left:0;transform:translate(6px, 6px);opacity:0}@media screen and (max-width: 40em){.ontario-radios__label:after{border:12px solid #1a1a1a}}.ontario-radios__input:focus+.ontario-radios__label:before{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:#009ADB}.ontario-radios__input:checked+.ontario-radios__label:after{opacity:1}.ontario-radios__hint-expander{margin:0.75rem 0 0 0.5rem}@media screen and (max-width: 40em){.ontario-radios__hint-expander{margin-top:1rem}}';
const ne = ae;
const re = class {
	constructor(o) {
		t(this, o);
		this.radioOnChange = e(this, 'radioOnChange', 7);
		this.radioOnBlur = e(this, 'radioOnBlur', 7);
		this.radioOnFocus = e(this, 'radioOnFocus', 7);
		if (o.$hostElement$['s-ei']) {
			this.internals = o.$hostElement$['s-ei'];
		} else {
			this.internals = o.$hostElement$.attachInternals();
			o.$hostElement$['s-ei'] = this.internals;
		}
		this.caption = undefined;
		this.language = undefined;
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
	handleSetAppLanguage(t) {
		if (!this.language) {
			this.language = r(t);
		}
	}
	handleHeaderLanguageToggled(t) {
		this.language = r(t);
	}
	parseHintText() {
		if (this.hintText) {
			const t = vt(this.hintText);
			this.internalHintText = t;
		}
	}
	parseHintExpander() {
		const t = this.hintExpander;
		if (t) {
			if (typeof t === 'string') this.internalHintExpander = JSON.parse(t);
			else this.internalHintExpander = t;
		}
	}
	parseOptions() {
		if (typeof this.options !== 'undefined') {
			if (!Array.isArray(this.options)) {
				this.internalOptions = JSON.parse(this.options);
			} else {
				this.internalOptions = this.options;
			}
		}
	}
	validateName(t) {
		if (s(t)) {
			const t = new c();
			t.addDesignSystemTag()
				.addMonospaceText(' name ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-radio-buttons> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	}
	validateOptions(t) {
		if (d(t)) {
			const t = new c();
			t.addDesignSystemTag()
				.addMonospaceText(' options ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-radio-buttons> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	}
	updateCaptionState(t) {
		this.captionState = new wt(this.element.tagName, t, T, this.language, true, this.required);
	}
	updateLanguage() {
		this.updateCaptionState(this.caption);
	}
	handleEvent(t, o) {
		var i, e;
		const a = t.target;
		const n = this.internalOptions
			.map((t) => {
				t.checked = false;
				return t;
			})
			.find((t) => t.value === (a === null || a === void 0 ? void 0 : a.value));
		if (n) n.checked = !(n === null || n === void 0 ? void 0 : n.checked);
		(e = (i = this.internals) === null || i === void 0 ? void 0 : i.setFormValue) === null || e === void 0
			? void 0
			: e.call(
					i,
					this.internalOptions
						.filter((t) => !!t.checked)
						.reduce((t, o) => {
							t.append(this.name, o.value);
							return t;
						}, new FormData()),
			  );
		_t(
			t,
			o,
			a,
			this.radioOnChange,
			this.radioOnFocus,
			this.radioOnBlur,
			undefined,
			'radio',
			this.customOnChange,
			this.customOnFocus,
			this.customOnBlur,
			undefined,
			this.element,
		);
	}
	async componentDidLoad() {
		var t;
		this.hintTextId = await ((t = this.hintTextRef) === null || t === void 0 ? void 0 : t.getHintTextId());
	}
	componentWillLoad() {
		this.updateCaptionState(this.caption);
		this.parseOptions();
		this.parseHintText();
		this.parseHintExpander();
		this.validateName(this.name);
		this.validateOptions(this.internalOptions);
		this.language = r(this.language);
	}
	render() {
		var t;
		return o(
			'div',
			{ key: '9fd6c87b909d245e3882608e88643b67f1a41e73', class: 'ontario-form-group' },
			o(
				'fieldset',
				{
					'key': '27803aa186170a926e5708daa44b9e316a308099',
					'class': 'ontario-fieldset',
					'aria-describedby': this.hintTextId,
				},
				this.captionState.getCaption(undefined, !!this.internalHintExpander),
				this.internalHintText &&
					o('ontario-hint-text', {
						hint: this.internalHintText.hint,
						hintContentType: this.internalHintText.hintContentType,
						ref: (t) => (this.hintTextRef = t),
					}),
				o(
					'div',
					{ key: '34e4053d111ea70f6b5f841ba9cbbaab240334a3', class: 'ontario-radios' },
					(t = this.internalOptions) === null || t === void 0
						? void 0
						: t.map((t) =>
								o(
									'div',
									{ class: 'ontario-radios__item' },
									o(ut, {
										className: 'ontario-radios__input',
										id: t.elementId,
										name: this.name,
										type: 'radio',
										value: t.value,
										required: !!this.required,
										checked: !!t.checked,
										onChange: (t) => this.handleEvent(t, xt.Change),
										onBlur: (t) => this.handleEvent(t, xt.Blur),
										onFocus: (t) => this.handleEvent(t, xt.Focus),
									}),
									o(
										'label',
										{ class: 'ontario-radios__label', htmlFor: t.elementId },
										t.label,
										t.hintExpander && this.captionState.getHintExpanderAccessibilityText(t.label, true),
									),
									t.hintExpander &&
										o(
											'div',
											{ class: 'ontario-radios__hint-expander' },
											o('ontario-hint-expander', {
												'hint': t.hintExpander.hint,
												'content': t.hintExpander.content,
												'hintContentType': t.hintExpander.hintContentType,
												'input-exists': true,
											}),
										),
								),
						  ),
					this.internalHintExpander &&
						o(
							'div',
							{ class: 'ontario-radios__hint-expander' },
							o('ontario-hint-expander', {
								'hint': this.internalHintExpander.hint,
								'content': this.internalHintExpander.content,
								'hintContentType': this.internalHintExpander.hintContentType,
								'input-exists': true,
							}),
						),
				),
			),
		);
	}
	static get formAssociated() {
		return true;
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
re.style = ne;
const le =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul[class*=columns-] li:last-child,ol[class*=columns-] li:last-child{padding-bottom:0.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-button:focus,.ontario-button:active{box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:box-shadow 0.1s ease-in-out}.ontario-button{border:none;border-radius:4px;box-sizing:border-box;box-shadow:none;display:inline-block;font-size:1.125rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:600;line-height:1.5555555556;margin:0 1.75rem 1.5rem 0;min-width:10rem;padding:0.625rem 1.5rem;text-align:center;text-decoration:none;cursor:pointer}@media screen and (max-width: 40em){.ontario-button{margin-right:0;display:block;width:100%}}.ontario-button .ontario-icon{margin-right:4px}.ontario-button--primary{background-color:#0066CC;color:#FFFFFF}.ontario-button--primary:hover{background-color:#00478F;color:#FFFFFF}.ontario-button--primary:focus{background-color:#00478F;color:#FFFFFF;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out}.ontario-button--primary:active{background-color:#002142;color:#FFFFFF;transition:background-color 0s, box-shadow 0.1s ease-in-out}.ontario-button--primary:visited{color:#FFFFFF}.ontario-button--secondary{background-color:#FFFFFF;border:2px solid #0066CC;color:#0066CC;padding-top:0.5rem;padding-bottom:0.5rem}.ontario-button--secondary:hover{background-color:#e0f0ff;border-color:#00478F;color:#00478F}.ontario-button--secondary:focus{background-color:#e0f0ff;border-color:#00478F;color:#00478F;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out}.ontario-button--secondary:active{background-color:#c2e0ff;border-color:#002142;color:#002142;transition:background-color 0s, box-shadow 0.1s ease-in-out}.ontario-button--secondary:visited{color:#0066CC}.ontario-button--tertiary{background-color:transparent;color:#0066CC;text-decoration:underline}.ontario-button--tertiary:hover{background-color:#e8e8e8;color:#00478F;text-decoration:underline}.ontario-button--tertiary:focus{background-color:#e8e8e8;color:#00478F;text-decoration:underline;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out}.ontario-button--tertiary:active{background-color:#d1d1d1;color:#002142;text-decoration:underline;transition:background-color 0s, box-shadow 0.1s ease-in-out}.ontario-button--tertiary:visited{color:#0066CC}.ontario-button--internalThemeDark{background-color:#1a1a1a;border:2px solid #FFFFFF;color:#FFFFFF}.ontario-button--internalThemeDark:hover{background-color:#4d4d4d}.ontario-button--internalThemeDark:focus{background-color:#4d4d4d;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out}.ontario-button--internalThemeDark:active{background-color:#4d4d4d;transition:background-color 0s, box-shadow 0.1s ease-in-out}.ontario-button--internalThemeDark:visited{color:#0066CC}.ontario-step-indicator{margin-bottom:2.5rem}.ontario-step-indicator .ontario-step-indicator--with-back-button--false,.ontario-step-indicator .ontario-step-indicator--with-back-button--true,.ontario-step-indicator .ontario-step-indicator--without-back-button,.ontario-step-indicator .ontario-step-indicator--with-back-button{display:flex;align-items:center;justify-content:space-between}.ontario-step-indicator .ontario-step-indicator--with-back-button--false,.ontario-step-indicator .ontario-step-indicator--without-back-button{justify-content:flex-end}.ontario-step-indicator .ontario-h4{margin:1.25rem 0}@media screen and (max-width: 40em){.ontario-step-indicator .ontario-h4{margin:1rem 0;text-align:right}}.ontario-step-indicator .ontario-button.ontario-button--tertiary{display:flex;align-items:center;margin:0.75rem 0;padding-left:0.5rem;padding-right:1rem;min-width:3rem}@media screen and (max-width: 40em){.ontario-step-indicator .ontario-button.ontario-button--tertiary{width:unset}}.ontario-step-indicator .ontario-button.ontario-button--tertiary .ontario-icon{margin:0 0.375rem 0 0;padding:0;min-width:24px;min-height:24px}.ontario-step-indicator hr{padding:0;margin:0}';
const se = le;
const de = class {
	constructor(o) {
		t(this, o);
		this.handleCustomOnClick = (t) => {
			this.customOnClick && this.customOnClick(t);
		};
		this.showBackButton = false;
		this.backButtonUrl = undefined;
		this.currentStep = undefined;
		this.numberOfSteps = undefined;
		this.percentageComplete = undefined;
		this.customOnClick = undefined;
		this.language = undefined;
		this.translations = T;
	}
	handleSetAppLanguage(t) {
		if (!this.language) {
			this.language = r(t);
		}
	}
	handleHeaderLanguageToggled(t) {
		this.language = r(t);
	}
	componentWillLoad() {
		this.language = r(this.language);
	}
	render() {
		return o(
			'div',
			{ key: 'd0409bc6e29e154adc63b98808d0763946cbffaf', class: 'ontario-step-indicator' },
			o(
				'div',
				{ key: '04dbd24ee41638675a0b3ece3a2ef8c479235b78', class: 'ontario-row' },
				o(
					'div',
					{ key: 'faa631380f1f0cb18ca72bf2fbb31221292d04f2', class: 'ontario-columns ontario-small-12' },
					o(
						'div',
						{
							key: 'a5f0eae9768f9bce57db3d31cc016e79e83ce73d',
							class: `ontario-step-indicator--with-back-button--${this.showBackButton}`,
						},
						this.showBackButton === true &&
							!this.backButtonUrl &&
							o(
								'button',
								{ class: 'ontario-button ontario-button--tertiary', onClick: (t) => this.handleCustomOnClick(t) },
								o('ontario-icon-chevron-left', { colour: 'blue' }),
								this.translations.stepIndicator.back[`${this.language}`],
							),
						this.showBackButton === true &&
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
									this.language === 'en' ? '%' : o('span', null, ' %'),
									' ',
									this.translations.stepIndicator.complete[`${this.language}`],
							  )
							: o(
									'span',
									{ class: 'ontario-h4' },
									this.translations.stepIndicator.step[`${this.language}`],
									' ',
									this.currentStep,
									' ',
									this.translations.stepIndicator.of[`${this.language}`],
									' ',
									this.numberOfSteps,
							  ),
					),
					o('hr', { key: '10575f02752bf93aefff4ce1bc8eaf02d5a78c08' }),
				),
			),
		);
	}
	get host() {
		return i(this);
	}
};
de.style = se;
const he = 1;
const me = 12;
function ce(t) {
	for (const o of t) {
		if (!o.title || !o.key) {
			const t = new c();
			t.addDesignSystemTag()
				.addRegularText(' The required keys for ')
				.addMonospaceText('title')
				.addRegularText(' and/or ')
				.addMonospaceText('key')
				.addRegularText(' in the ')
				.addMonospaceText('<ontario-table> tableColumns')
				.addRegularText(' options were not provided. ')
				.printMessage(g.Error);
			return false;
		}
		if (o.type && o.type !== 'string' && o.type !== 'numeric') {
			const t = new c();
			t.addDesignSystemTag()
				.addRegularText(' The ')
				.addMonospaceText('type')
				.addRegularText(' key in the ')
				.addMonospaceText('<ontario-table> tableColumns')
				.addRegularText(' options is not a valid type. A default type of `string` will be applied.')
				.printMessage();
			return false;
		}
		if (o.colSpan && !(o.colSpan >= he && o.colSpan <= me)) {
			const t = new c();
			t.addDesignSystemTag()
				.addRegularText(' The ')
				.addMonospaceText('colSpan')
				.addRegularText(' in the ')
				.addMonospaceText('<ontario-table> tableColumns')
				.addRegularText(' options is not a valid type. The default colSpan value will be applied.')
				.printMessage();
			return false;
		}
	}
	return true;
}
function ge(t) {
	for (const o of t) {
		if (!o.data || Object.keys(o.data).length === 0) {
			const t = new c();
			t.addDesignSystemTag()
				.addRegularText(' The required key for ')
				.addMonospaceText('data')
				.addRegularText(' in the ')
				.addMonospaceText('<ontario-table> tableData')
				.addRegularText(' options was not provided. ')
				.printMessage(g.Error);
			return false;
		}
	}
	return true;
}
const pe =
	'.ontario-table-container{position:relative;margin:0.5rem 0 2.5rem}.ontario-table-div{background:linear-gradient(to right, #FFFFFF 30%, rgba(255, 255, 255, 0)), linear-gradient(to right, rgba(255, 255, 255, 0), #FFFFFF 70%) 0 100%, linear-gradient(to right, rgba(0, 0, 0, 0.2) 0%, rgba(252, 0, 0, 0) 100.01%), linear-gradient(to left, rgba(0, 0, 0, 0.2) 0%, rgba(252, 0, 0, 0) 100.01%);background-repeat:no-repeat;background-size:2.5rem 100%, 2.5rem 100%, 0.875rem 100%, 0.875rem 100%;background-position:0 0, 100%, 0 0, 100%;background-attachment:local, local, scroll, scroll;overflow-x:auto}@media screen and (max-width: 40em){.ontario-table-div{overflow-x:scroll}}.ontario-table-scroll--wrapper{height:20px;overflow-x:auto;overflow-y:hidden;display:block}.ontario-table-container table{border-collapse:collapse;display:table;font-size:1.0625rem;font-weight:400;line-height:1.625rem}.ontario-table-container table.ontario-table--full-container-width{display:table;width:100%}.ontario-table-container table.ontario-table--zebra-stripes-enabled tbody tr:nth-child(even){background-color:rgba(0, 0, 0, 0.0509803922)}.ontario-table-container table:not(.ontario-table--no-zebra-stripes) tbody tr:first-child:nth-last-child(n+6):nth-child(even),.ontario-table-container table:not(.ontario-table--no-zebra-stripes) tbody tr:first-child:nth-last-child(n+6)~tr:nth-child(even){background-color:rgba(0, 0, 0, 0.0509803922)}@media screen and (max-width: 40em){.ontario-table-container table{font-size:1rem}}.ontario-table-container caption{background-color:rgba(0, 0, 0, 0.1019607843);display:table-caption;font-size:1.375rem;font-weight:700;line-height:2.1875rem;padding:1.125rem 1rem 1.125rem 1.5rem;text-align:left}@media screen and (max-width: 40em){.ontario-table-container caption{font-size:1.25rem;line-height:1.875rem;padding-left:1rem}}.ontario-table-container table thead{border:solid;border-width:0.1875rem 0;border-color:#1a1a1a;vertical-align:text-top}.ontario-table-container table thead th{font-size:1.125rem;line-height:1.5;margin:0;padding:1.75rem 1rem 1.75rem 1.5rem;text-align:left;text-size-adjust:none;-webkit-text-size-adjust:none}@media screen and (max-width: 40em){.ontario-table-container table thead th{font-size:1rem;line-height:1.3125rem;padding:1.5rem 0.5rem 1.5rem 1rem}}.ontario-table-container table thead th.ontario-table-cell--numeric{padding:1.75rem 1.5rem 1.75rem 1rem;text-align:right}@media screen and (max-width: 40em){.ontario-table-container table thead th.ontario-table-cell--numeric{padding:1.5rem 1rem 1.5rem 0.5rem}}.ontario-table-container table tbody{font-size:1rem;vertical-align:text-top}.ontario-table-container table tbody tr{border:solid;border-width:0.0625rem 0;border-color:rgba(0, 0, 0, 0.3019607843)}.ontario-table-container table tbody tr:last-child{border-width:0.1875rem 0;border-top-width:0;border-color:#1a1a1a}.ontario-table-container table tbody tr.ontario-table-row--highlight{background-color:rgba(225, 145, 0, 0.2352941176) !important}.ontario-table-container table tbody tr.ontario-table-row--highlight th{padding-left:1.5rem;display:flex;position:relative}.ontario-table-container table tbody tr.ontario-table-row--highlight th img.ontario-table--highlight-indicator{width:0.5rem;position:absolute;top:1.5rem;left:0}.ontario-table-container table tbody tr.ontario-table-row--subtotal{background-color:rgba(0, 123, 158, 0.1137254902) !important}.ontario-table-container tbody th,.ontario-table-container tfoot th,.ontario-table-container table td{padding:1.1875rem 1rem 1.1875rem 1.5rem;text-align:left;letter-spacing:0.025rem}.ontario-table-container tbody th,.ontario-table-container tfoot th{font-weight:700}@media screen and (max-width: 40em){.ontario-table-container tbody th,.ontario-table-container tfoot th{font-size:1rem;line-height:1.625rem;padding-right:0.5rem;padding-left:1rem}}.ontario-table-container table td img{vertical-align:top}@media screen and (max-width: 40em){.ontario-table-container table td img{max-width:none}}.ontario-table-container table td.ontario-table-cell--numeric{font-family:"Courier Prime", Courier, "Courier New", monospace;font-size:1.0625rem;padding:1.1875rem 1.5rem 1.1875rem 1rem;text-align:right}.ontario-table-container table td.ontario-table-cell--numeric strong{font-family:"Courier Prime", Courier, "Courier New", monospace}.ontario-table-container tbody tr.ontario-table-row--subtotal,.ontario-table-container tfoot tr{border:solid;border-width:0.1875rem 0;font-size:1rem;border-color:#1a1a1a}.ontario-table-container tbody tr.ontario-table-row--subtotal th,.ontario-table-container tfoot tr th{padding:1.4375rem 1rem 1.4375rem 1.5rem}.ontario-table-container tbody tr.ontario-table-row--subtotal td,.ontario-table-container tfoot tr td{font-weight:700;padding:1.4375rem 1rem 1.4375rem 1.5rem}.ontario-table-container tfoot{vertical-align:text-top}.ontario-table-container tfoot tr{background-color:rgba(0, 119, 160, 0.337254902) !important}.ontario-table-header--column-span-1{min-width:8.33333vw}.ontario-table-header--column-span-2{min-width:16.66666vw}.ontario-table-header--column-span-3{min-width:25vw}.ontario-table-header--column-span-4{min-width:33.33333vw}.ontario-table-header--column-span-5{min-width:41.66666vw}.ontario-table-header--column-span-6{min-width:50vw}.ontario-table-header--column-span-7{min-width:58.33333vw}.ontario-table-header--column-span-8{min-width:66.66666vw}.ontario-table-header--column-span-9{min-width:75vw}.ontario-table-header--column-span-10{min-width:83.33333vw}.ontario-table-header--column-span-11{min-width:91.66666vw}.ontario-table-header--column-span-12{min-width:100vw}.ontario-table-container .ontario-table--condensed td{padding:0.75rem 1rem 0.75rem 1.5rem;text-align:left}.ontario-table-container .ontario-table--condensed td.ontario-table-cell--numeric{padding:0.75rem 1.5rem 0.75rem 1rem;font-size:1.0625rem;text-align:right}.ontario-table-container .ontario-table--condensed tbody th,.ontario-table-container .ontario-table--condensed tfoot th{padding:0.75rem 1rem 0.75rem 1.5rem}.ontario-table-container .ontario-table--condensed tr.ontario-table-row--highlight th img.ontario-table--highlight-indicator{top:1.0625rem}.ontario-table-container .ontario-table--condensed tr.ontario-table-row--subtotal th,.ontario-table-container .ontario-table--condensed tr.ontario-table-row--subtotal td,.ontario-table-container .ontario-table--condensed tfoot tr th,.ontario-table-container .ontario-table--condensed tfoot tr td{padding:1rem 1rem 1rem 1.5rem}.ontario-table-container .ontario-table--condensed tr.ontario-table-row--subtotal td.ontario-table-cell--numeric,.ontario-table-container .ontario-table--condensed tfoot tr td.ontario-table-cell--numeric{text-align:right;padding:1rem 1.5rem 1rem 1rem}@media screen and (max-width: 40em){.ontario-table-container .ontario-table--condensed td{padding:0.75rem 0.5rem 0.75rem 1rem;font-size:1rem}.ontario-table-container .ontario-table--condensed td.ontario-table-cell--numeric{padding:0.75rem 1rem 0.75rem 0.5rem}.ontario-table-container .ontario-table--condensed tbody th{padding:0.75rem 0.5rem 0.75rem 1rem}.ontario-table-container .ontario-table--condensed tr.ontario-table-row--subtotal th,.ontario-table-container .ontario-table--condensed tr.ontario-table-row--subtotal td,.ontario-table-container .ontario-table--condensed tfoot tr th,.ontario-table-container .ontario-table--condensed tfoot tr td{padding:1rem 0.5rem 1rem 1rem}.ontario-table-container .ontario-table--condensed tr.ontario-table-row--subtotal td.ontario-table-cell--numeric,.ontario-table-container .ontario-table--condensed tfoot tr td.ontario-table-cell--numeric{text-align:right;padding:1rem 1rem 1rem 0.5rem}}';
const ue = pe;
const fe = class {
	constructor(i) {
		t(this, i);
		this.transformTableData = (t) => {
			const o = Ut(this.tableColumnsState, 'key').filter((t) => t !== undefined);
			const i = Jt(t, o);
			const [e, a] = Zt(i, 'footer', true);
			this.tableDataState = e;
			this.tableFooterState = a;
		};
		this.getZebraStripeClass = () =>
			this.zebraStripes === 'disabled'
				? `ontario-table--no-zebra-stripes`
				: this.zebraStripes === 'enabled'
				? `ontario-table--zebra-stripes-enabled`
				: ``;
		this.getTableClasses = () => {
			let t = '';
			if (this.condensed && this.fullWidth) {
				t = `ontario-table--condensed ontario-table--full-container-width`;
			} else if (this.condensed) {
				t = `ontario-table--condensed`;
			} else if (this.fullWidth) {
				t = `ontario-table--full-container-width`;
			}
			const o = this.getZebraStripeClass();
			if (t) {
				t = `${t} ${o}`;
			} else {
				t = o;
			}
			return t;
		};
		this.getColumnClasses = (t) => {
			if (t.type === 'numeric' && t.colSpan) {
				return `ontario-table-cell--numeric ontario-table-header--column-span-${t.colSpan}`;
			} else if (t.type === 'numeric') {
				return `ontario-table-cell--numeric`;
			} else if (t.colSpan) {
				return `ontario-table-header--column-span-${t.colSpan}`;
			}
			return;
		};
		this.generateTableDataHTML = (t, i, e, n) =>
			o(
				'tr',
				{ class: t === 'tableData' ? n : '' },
				this.tableColumnsState.map((n, r) => {
					const l = n.type;
					const s = l === 'numeric' ? `ontario-table-cell--numeric` : '';
					return r === 0
						? o(
								'th',
								{ scope: 'row', innerHTML: i.data[`${e[0]}`] },
								t === 'tableData' &&
									i.highlight &&
									o('img', { class: 'ontario-table--highlight-indicator', src: a('./assets/highlight-indicator.svg') }),
						  )
						: o('td', { class: s, innerHTML: i.data[`${e[r]}`] });
				}),
			);
		this.caption = undefined;
		this.tableColumns = undefined;
		this.tableData = undefined;
		this.zebraStripes = 'auto';
		this.condensed = false;
		this.fullWidth = false;
		this.tableColumnsState = undefined;
		this.tableDataState = undefined;
		this.tableFooterState = undefined;
	}
	processTableColumns() {
		this.tableColumns && this.parseOptions(this.tableColumns);
		ce(this.tableColumnsState);
	}
	processTableData() {
		this.tableData && this.parseOptions(this.tableData);
		ge(this.tableDataState);
	}
	parseOptions(t) {
		const o = typeof t === 'string';
		if (!t) {
			return;
		}
		try {
			if (t === this.tableColumns) {
				this.tableColumnsState = o ? JSON.parse(t) : t;
			} else {
				this.tableDataState = o ? JSON.parse(t) : t;
				this.transformTableData(this.tableDataState);
			}
		} catch (t) {
			const o = new c();
			o.addDesignSystemTag()
				.addRegularText(' failed to parse props for ')
				.addMonospaceText('<ontario-table>')
				.addRegularText(' in ')
				.addMonospaceText('parseOptions()')
				.addRegularText(' method \n ')
				.addMonospaceText(t.stack)
				.printMessage(g.Error);
		}
	}
	applyScrollbar(t, o) {
		o.style.visibility = 'visible';
		o.style.height = '20px';
		o.style.width = `${t.scrollWidth}px`;
	}
	componentDidLoad() {
		const t = this.table;
		const o = this.tableScrollDiv;
		const i = this.tableScrollWrapper;
		let e = new ResizeObserver(() => {
			this.applyScrollbar(t, o);
		});
		this.applyScrollbar(t, o);
		e.observe(t);
		t.addEventListener('scroll', () => {
			this.applyScrollbar(t, o);
			i.scrollLeft = t.scrollLeft;
		});
		i.addEventListener('scroll', () => {
			this.applyScrollbar(t, o);
			t.scrollLeft = i.scrollLeft;
		});
	}
	componentWillLoad() {
		this.processTableColumns();
		this.processTableData();
	}
	render() {
		const t = Ut(this.tableColumnsState, 'key');
		return o(
			'div',
			{ key: 'f2f1c8359a5b09b1f1812501f45617b8793d62c4', class: 'ontario-table-container' },
			o(
				'div',
				{
					key: 'f406a56cb585bc6afc47b6d2857cc81a6eaab30a',
					class: 'ontario-table-scroll--wrapper',
					ref: (t) => (this.tableScrollWrapper = t),
				},
				o('div', {
					key: 'dc0a7056f365450fc0196ccd5ccd231e6a258b16',
					class: 'ontario-table-scroll--div',
					ref: (t) => (this.tableScrollDiv = t),
				}),
			),
			o(
				'div',
				{ key: '6f9a07ab7d4914f0404cf95264ce122cb64605fc', class: 'ontario-table-div', ref: (t) => (this.table = t) },
				o(
					'table',
					{ key: 'b0c400ff0d59973556860dca7fa0b8dcbd85040d', class: this.getTableClasses() },
					this.caption && o('caption', null, this.caption),
					this.tableColumnsState &&
						o(
							'thead',
							null,
							o(
								'tr',
								null,
								this.tableColumnsState.map((t) => {
									const i = this.getColumnClasses(t);
									return o('th', {
										'scope': 'col',
										'key': t.key,
										'data-type': t.type,
										'class': i,
										'innerHTML': t.title,
									});
								}),
							),
						),
					this.tableDataState &&
						o(
							'tbody',
							null,
							this.tableDataState.map((o) => {
								const i = o.highlight
									? `ontario-table-row--highlight`
									: o.subtotal
									? `ontario-table-row--subtotal`
									: undefined;
								return this.generateTableDataHTML('tableData', o, t, i);
							}),
						),
					!!this.tableFooterState.length &&
						o(
							'tfoot',
							null,
							this.tableFooterState.map((o) => this.generateTableDataHTML('tableData', o, t, undefined)),
						),
				),
			),
		);
	}
	static get assetsDirs() {
		return ['./assets'];
	}
	get element() {
		return i(this);
	}
	static get watchers() {
		return { tableColumns: ['processTableColumns'], tableData: ['processTableData'] };
	}
};
fe.style = ue;
const be =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1>.ontario-label--heading,.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1>.ontario-label--heading,.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1,h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1>.ontario-label--heading,.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1,h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}.ontario-textarea:focus,.ontario-textarea:active,.ontario-input:focus,.ontario-input:active{box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:box-shadow 0.1s ease-in-out}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul[class*=columns-] li:last-child,ol[class*=columns-] li:last-child{padding-bottom:0.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend--large{font-size:1.75rem}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-label{cursor:pointer;color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;line-height:1.5;margin:0 0 1rem 0;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-label{font-size:1.125rem;line-height:1.56}}.ontario-label--large{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2;max-width:26.25em}@media screen and (max-width: 40em){.ontario-label--large{font-size:1.4375rem;line-height:1.39}}h1>.ontario-label--heading{display:inline-block;margin:0}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;width:100%;padding:0.625rem 1rem;transition:box-shadow 0.1s ease-in-out}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}.ontario-form-group:last-of-type{margin-bottom:2.5rem}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-textarea{border:2px solid #1a1a1a;border-radius:4px;box-sizing:border-box;color:#1a1a1a;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;display:block;max-width:48rem;min-height:144px;margin:0 0 2.5rem;padding:0.625rem 1rem;transition:box-shadow 0.1s ease-in-out;white-space:pre-wrap;width:100%}.ontario-textarea.ontario-textarea-hint-expander--true{margin-bottom:1rem}';
const we = be;
const ve = class {
	constructor(o) {
		t(this, o);
		this.inputOnInput = e(this, 'inputOnInput', 7);
		this.inputOnChange = e(this, 'inputOnChange', 7);
		this.inputOnBlur = e(this, 'inputOnBlur', 7);
		this.inputOnFocus = e(this, 'inputOnFocus', 7);
		if (o.$hostElement$['s-ei']) {
			this.internals = o.$hostElement$['s-ei'];
		} else {
			this.internals = o.$hostElement$.attachInternals();
			o.$hostElement$['s-ei'] = this.internals;
		}
		this.caption = undefined;
		this.name = undefined;
		this.elementId = undefined;
		this.required = false;
		this.value = undefined;
		this.hintText = undefined;
		this.hintExpander = undefined;
		this.language = undefined;
		this.customOnInput = undefined;
		this.customOnChange = undefined;
		this.customOnBlur = undefined;
		this.customOnFocus = undefined;
		this.hintTextId = undefined;
		this.internalHintText = undefined;
		this.internalHintExpander = undefined;
		this.captionState = undefined;
	}
	handleSetAppLanguage(t) {
		if (!this.language) {
			this.language = r(t);
		}
	}
	handleHeaderLanguageToggled(t) {
		this.language = r(t);
	}
	parseHintText() {
		if (this.hintText) {
			const t = vt(this.hintText);
			this.internalHintText = t;
		}
	}
	parseHintExpander() {
		const t = this.hintExpander;
		if (t) {
			if (typeof t === 'string') this.internalHintExpander = JSON.parse(t);
			else this.internalHintExpander = t;
		}
	}
	validateName(t) {
		if (s(t)) {
			const t = new c();
			t.addDesignSystemTag()
				.addMonospaceText(' name ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-textarea> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	}
	updateCaptionState(t) {
		this.captionState = new wt(this.element.tagName, t, T, this.language, false, this.required);
	}
	updateLanguage() {
		this.updateCaptionState(this.caption);
	}
	handleEvent(t, o) {
		var i, e, a;
		const n = t.target;
		(e = (i = this.internals) === null || i === void 0 ? void 0 : i.setFormValue) === null || e === void 0
			? void 0
			: e.call(i, (a = n === null || n === void 0 ? void 0 : n.value) !== null && a !== void 0 ? a : '');
		_t(
			t,
			o,
			n,
			this.inputOnChange,
			this.inputOnFocus,
			this.inputOnBlur,
			this.inputOnInput,
			'input',
			this.customOnChange,
			this.customOnFocus,
			this.customOnBlur,
			this.customOnInput,
			this.element,
		);
	}
	getId() {
		var t;
		return (t = this.elementId) !== null && t !== void 0 ? t : '';
	}
	getValue() {
		var t;
		return (t = this.value) !== null && t !== void 0 ? t : '';
	}
	getClass() {
		return this.hintExpander ? `ontario-textarea ontario-textarea-hint-expander--true` : `ontario-textarea`;
	}
	async componentDidLoad() {
		var t;
		this.hintTextId = await ((t = this.hintTextRef) === null || t === void 0 ? void 0 : t.getHintTextId());
	}
	componentWillLoad() {
		var t;
		this.updateCaptionState(this.caption);
		this.elementId = (t = this.elementId) !== null && t !== void 0 ? t : It();
		this.parseHintText();
		this.parseHintExpander();
		this.validateName(this.name);
		this.language = r(this.language);
	}
	render() {
		return o(
			'div',
			{ key: 'ca65ae6963ca2bf19e4285413494b31cac66fbc5', class: 'ontario-form-group' },
			this.captionState.getCaption(this.getId(), !!this.internalHintExpander),
			this.internalHintText &&
				o('ontario-hint-text', {
					hint: this.internalHintText.hint,
					hintContentType: this.internalHintText.hintContentType,
					ref: (t) => (this.hintTextRef = t),
				}),
			o('textarea', {
				'key': '9b20c5156e0977b440786d3a3cf8bbabf9f69649',
				'aria-describedby': this.hintTextId,
				'class': this.getClass(),
				'id': this.getId(),
				'name': this.name,
				'value': this.getValue(),
				'onInput': (t) => this.handleEvent(t, xt.Input),
				'onChange': (t) => this.handleEvent(t, xt.Change),
				'onBlur': (t) => this.handleEvent(t, xt.Blur),
				'onFocus': (t) => this.handleEvent(t, xt.Focus),
				'required': !!this.required,
			}),
			this.internalHintExpander &&
				o('ontario-hint-expander', {
					'hint': this.internalHintExpander.hint,
					'content': this.internalHintExpander.content,
					'hintContentType': this.internalHintExpander.hintContentType,
					'input-exists': true,
				}),
		);
	}
	static get formAssociated() {
		return true;
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
ve.style = we;
export {
	S as ontario_accordion,
	j as ontario_aside,
	J as ontario_back_to_top,
	G as ontario_blockquote,
	it as ontario_button,
	nt as ontario_callout,
	ht as ontario_card,
	gt as ontario_card_collection,
	zt as ontario_checkboxes,
	Nt as ontario_critical_alert,
	ro as ontario_date_input,
	ho as ontario_dropdown_list,
	go as ontario_fieldset,
	zo as ontario_footer,
	Vo as ontario_header,
	Yo as ontario_hint_expander,
	Jo as ontario_hint_text,
	Go as ontario_icon_accessibility,
	ti as ontario_icon_alert_error,
	ei as ontario_icon_alert_information,
	ri as ontario_icon_alert_success,
	di as ontario_icon_alert_warning,
	ci as ontario_icon_camera,
	ui as ontario_icon_chevron_down,
	wi as ontario_icon_chevron_left,
	_i as ontario_icon_chevron_up,
	ki as ontario_icon_email,
	Ai as ontario_icon_help,
	Ti as ontario_icon_mastercard,
	Si as ontario_icon_notification,
	Bi as ontario_icon_print,
	Wi as ontario_icon_sentiment_5,
	Vi as ontario_icon_text_message,
	Yi as ontario_icon_transport_bus,
	Ji as ontario_input,
	Gi as ontario_language_toggle,
	te as ontario_loading_indicator,
	ee as ontario_page_alert,
	re as ontario_radio_buttons,
	de as ontario_step_indicator,
	fe as ontario_table,
	ve as ontario_textarea,
};
//# sourceMappingURL=p-c290df94.entry.js.map
