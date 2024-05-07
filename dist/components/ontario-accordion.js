import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { v as validateLanguage } from './validation-functions.js';
import { t as translations } from './global.i18n.js';
import { d as defineCustomElement$3 } from './ontario-icon-chevron-down2.js';
import { d as defineCustomElement$2 } from './ontario-icon-chevron-up2.js';

const ontarioAccordionCss =
	'.ontario-accordion__button--expand-all:focus,.ontario-accordion__button:focus{box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:box-shadow 0.1s ease-in-out}.ontario-accordion__button{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}.ontario-accordion__button{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){.ontario-accordion__button{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}.ontario-accordions__container{max-width:48rem;width:100%}.ontario-accordion{border-top:2px solid #cccccc}.ontario-accordion:last-of-type{border-bottom:2px solid #cccccc}.ontario-accordion__controls{display:flex;justify-content:flex-end}.ontario-accordion__button,.ontario-accordion__button--expand-all{background:none;border:0;box-sizing:border-box}.ontario-accordion__button--expand-all{font-size:1rem;margin-bottom:0.5rem;color:#0066CC;cursor:pointer}.ontario-accordion__button--expand-all:focus,.ontario-accordion__button--expand-all:hover{color:#00478F;text-decoration:underline}.ontario-accordion__button--expand-all:active{color:#002142;text-decoration:underline}.ontario-accordion--expand-close-all{display:none}.ontario-accordion__controls--active .ontario-accordion--expand-close-all{display:block}.ontario-accordion__controls--active .ontario-accordion--expand-open-all{display:none}.ontario-accordion__button{display:flex;align-items:flex-start;color:#0066CC;cursor:pointer;padding:0.75rem 0.5rem;text-align:left;width:100%;margin-bottom:0}.ontario-accordion__button .ontario-accordion__button-icon--close,.ontario-accordion__button .ontario-accordion__button-icon--open{margin-right:0.5rem}.ontario-accordion__button .ontario-icon{width:1.75rem;height:1.75rem}.ontario-accordion__button:focus,.ontario-accordion__button:hover{background-color:#f2f2f2;color:#00478F}.ontario-accordion__button:focus{box-shadow:0 0 0 4px #009ADB inset}.ontario-accordion__button:active{color:#002142}.ontario-accordion__content{display:none;padding:0.75rem 0.75rem 2rem 0.75rem;margin-left:0}@media screen and (min-width: 40em){.ontario-accordion__content{margin-left:2rem}}.ontario-accordion__content *{margin-top:0;max-width:48rem;width:100%}.ontario-accordion__content ul,.ontario-accordion__content ol{max-width:calc(100% - 3rem)}.ontario-accordion__content>:last-child{margin-bottom:0}.ontario-accordion__button-icon--close,.ontario-expander--active .ontario-accordion__button-icon--open{display:none}.ontario-expander--active~.ontario-accordion__content,.ontario-expander--active .ontario-accordion__button-icon--close{display:block}.ontario-accordions__container .ontario-h1,.ontario-accordions__container .ontario-h2,.ontario-accordions__container .ontario-h3,.ontario-accordions__container .ontario-h4,.ontario-accordions__container .ontario-h5,.ontario-accordions__container p,.ontario-accordions__container h1,.ontario-accordions__container h2,.ontario-accordions__container h3,.ontario-accordions__container h4,.ontario-accordions__container h5,.ontario-accordions__container h6{margin:0}';
const OntarioAccordionStyle0 = ontarioAccordionCss;

const OntarioAccordion$1 = /*@__PURE__*/ proxyCustomElement(
	class OntarioAccordion extends HTMLElement {
		constructor() {
			super();
			this.__registerHost();
			this.__attachShadow();
			this.name = undefined;
			this.expandCollapseButton = undefined;
			this.accordionData = undefined;
			this.isOpen = false;
			this.language = undefined;
			this.translations = translations;
			this.expandCollapseLabel = undefined;
			this.internalExpandCollapseLabelDetails = undefined;
			this.internalAccordionData = [];
			this.openAccordionIndexes = [];
		}
		/**
		 * This listens for the `setAppLanguage` event sent from the test language toggler when it is is connected to the DOM. It is used for the initial language when the input component loads.
		 */
		handleSetAppLanguage(event) {
			if (!this.language) {
				this.language = validateLanguage(event);
			}
		}
		/**
		 * Handle the language being toggled from the `<ontario-header>`.
		 * @param event Event object passed when the event is fired.
		 */
		handleHeaderLanguageToggled(event) {
			this.language = validateLanguage(event);
		}
		/**
		 * Parse Accordion data, this is used to handle JSON strings from HTML.
		 */
		parseAccordionData() {
			if (typeof this.accordionData !== 'undefined') {
				this.internalAccordionData = Array.isArray(this.accordionData)
					? this.accordionData
					: JSON.parse(this.accordionData);
			}
			// Initialize the label based on the initial accordion state
			this.updateLabel();
		}
		/**
		 * Parse Expand/Collapse Button Details, this is used to handle JSON strings from HTML.
		 */
		parseExpandCollapseButtonDetails() {
			if (typeof this.expandCollapseButton !== 'undefined') {
				this.internalExpandCollapseLabelDetails =
					typeof this.expandCollapseButton === 'string'
						? JSON.parse(this.expandCollapseButton)
						: this.expandCollapseButton;
			}
		}
		// Toggle the accordion state when it's clicked
		toggleAccordion(index) {
			if (this.openAccordionIndexes.includes(index)) {
				// If the accordion is already open, close it
				this.openAccordionIndexes = this.openAccordionIndexes.filter((i) => i !== index);
			} else {
				// If the accordion is closed, open it
				this.openAccordionIndexes = [...this.openAccordionIndexes, index];
			}
			this.updateLabel();
		}
		/**
		 * Toggle all accordions open/close
		 */
		toggleAll() {
			if (this.openAccordionIndexes.length === this.internalAccordionData.length) {
				// All accordions are open, close all
				this.openAccordionIndexes = [];
			} else {
				// At least one accordion is closed, open all
				this.openAccordionIndexes = this.internalAccordionData.map((_, index) => index);
			}
			this.updateLabel();
		}
		/**
		 * Update the label based on the current accordion state
		 */
		updateLabel() {
			const allOpen = this.internalAccordionData.every((_, index) => this.openAccordionIndexes.includes(index));
			if (allOpen) {
				// All accordions are open, set label to "Collapse all"
				this.expandCollapseLabel = 'collapse';
			} else {
				// At least one accordion is closed, set label to "Expand all"
				this.expandCollapseLabel = 'expand';
			}
		}
		componentWillLoad() {
			this.parseAccordionData();
			this.parseExpandCollapseButtonDetails();
			this.language = validateLanguage(this.language);
		}
		render() {
			var _a, _b, _c, _d, _e, _f;
			return h(
				'div',
				{ key: '3d024ea02e809459320c06b2952a45dcddba4f46' },
				h('h2', { key: 'e12b9f0940111c6467a5451fe9bd4fbd2bd5ffc3' }, this.name),
				h(
					'div',
					{ key: '52cb77f0c1b3df890b65fad742b94d7e353e8bd3', class: 'ontario-accordions__container' },
					h(
						'div',
						{ key: '7c19c5bec0ff393075ffde690770a9e77f9c8eb9', class: 'ontario-accordion__controls' },
						h(
							'button',
							{
								'key': 'dfc002b4a720909c9284827fcd86f85b9598ee33',
								'class': 'ontario-accordion__button--expand-all',
								'onClick': () => this.toggleAll(),
								'aria-expanded':
									this.openAccordionIndexes.length === this.internalAccordionData.length ? 'true' : 'false',
								'aria-label':
									(_a = this.internalExpandCollapseLabelDetails) === null || _a === void 0 ? void 0 : _a.ariaLabelText,
							},
							h(
								'span',
								{ key: '302cb41727337a1ae7156b3aa6f3d145c726e611', class: 'ontario-accordion--expand-open-all' },
								this.expandCollapseLabel === 'expand'
									? h(
											'div',
											null,
											(_c =
												(_b = this.internalExpandCollapseLabelDetails) === null || _b === void 0
													? void 0
													: _b.expandAllSectionsLabel) !== null && _c !== void 0
												? _c
												: this.translations.accordion.expand[`${this.language}`],
									  )
									: h(
											'div',
											null,
											(_e =
												(_d = this.internalExpandCollapseLabelDetails) === null || _d === void 0
													? void 0
													: _d.collapseAllSectionsLabel) !== null && _e !== void 0
												? _e
												: this.translations.accordion.collapse[`${this.language}`],
									  ),
							),
						),
					),
					(_f = this.internalAccordionData) === null || _f === void 0
						? void 0
						: _f.map((accordion, index) =>
								h(
									'div',
									{
										class: `ontario-accordion ${this.openAccordionIndexes.includes(index) ? 'open' : ''}`,
										key: `accordion-${index}`,
									},
									h(
										'h3',
										{
											class: `ontario-accordion__heading ${
												this.openAccordionIndexes.includes(index) ? 'ontario-expander--active' : ''
											}`,
										},
										h(
											'button',
											{
												'class': 'ontario-accordion__button',
												'aria-expanded': this.openAccordionIndexes.includes(index) ? 'true' : 'false',
												'data-toggle': 'ontario-collapse',
												'onClick': () => this.toggleAccordion(index),
												'aria-label': accordion.ariaLabelText,
											},
											h(
												'span',
												{ class: 'ontario-accordion__button-icon--close' },
												h('ontario-icon-chevron-up', { colour: 'blue' }),
											),
											h(
												'span',
												{ class: 'ontario-accordion__button-icon--open' },
												h('ontario-icon-chevron-down', { colour: 'blue' }),
											),
											accordion.label,
										),
									),
									h(
										'section',
										{
											'class': `ontario-accordion__content ${
												this.openAccordionIndexes.includes(index)
													? 'ontario-accordion__content--opened'
													: 'ontario-accordion__content--closed'
											}`,
											'aria-hidden': !this.openAccordionIndexes.includes(index),
											'data-toggle': 'ontario-expander-content',
										},
										accordion.accordionContentType === 'html'
											? h('div', { innerHTML: accordion.content }) // Render HTML content
											: h('div', null, accordion.content),
									),
								),
						  ),
				),
			);
		}
		get host() {
			return this;
		}
		static get watchers() {
			return {
				accordionData: ['parseAccordionData'],
				expandCollapseButton: ['parseExpandCollapseButtonDetails'],
			};
		}
		static get style() {
			return OntarioAccordionStyle0;
		}
	},
	[
		1,
		'ontario-accordion',
		{
			name: [1],
			expandCollapseButton: [1, 'expand-collapse-button'],
			accordionData: [1, 'accordion-data'],
			isOpen: [4, 'is-open'],
			language: [1025],
			translations: [32],
			expandCollapseLabel: [32],
			internalExpandCollapseLabelDetails: [32],
			internalAccordionData: [32],
			openAccordionIndexes: [32],
		},
		[
			[8, 'setAppLanguage', 'handleSetAppLanguage'],
			[8, 'headerLanguageToggled', 'handleHeaderLanguageToggled'],
		],
		{
			accordionData: ['parseAccordionData'],
			expandCollapseButton: ['parseExpandCollapseButtonDetails'],
		},
	],
);
function defineCustomElement$1() {
	if (typeof customElements === 'undefined') {
		return;
	}
	const components = ['ontario-accordion', 'ontario-icon-chevron-down', 'ontario-icon-chevron-up'];
	components.forEach((tagName) => {
		switch (tagName) {
			case 'ontario-accordion':
				if (!customElements.get(tagName)) {
					customElements.define(tagName, OntarioAccordion$1);
				}
				break;
			case 'ontario-icon-chevron-down':
				if (!customElements.get(tagName)) {
					defineCustomElement$3();
				}
				break;
			case 'ontario-icon-chevron-up':
				if (!customElements.get(tagName)) {
					defineCustomElement$2();
				}
				break;
		}
	});
}

const OntarioAccordion = OntarioAccordion$1;
const defineCustomElement = defineCustomElement$1;

export { OntarioAccordion, defineCustomElement };

//# sourceMappingURL=ontario-accordion.js.map
