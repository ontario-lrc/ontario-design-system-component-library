import { h } from '@stencil/core';
import { validateLanguage } from '../../utils/validation/validation-functions';
import translations from '../../translations/global.i18n.json';
export class OntarioAccordion {
	constructor() {
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
	static get is() {
		return 'ontario-accordion';
	}
	static get encapsulation() {
		return 'shadow';
	}
	static get originalStyleUrls() {
		return {
			$: ['ontario-accordion.scss'],
		};
	}
	static get styleUrls() {
		return {
			$: ['ontario-accordion.css'],
		};
	}
	static get properties() {
		return {
			name: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'string',
					resolved: 'string',
					references: {},
				},
				required: false,
				optional: false,
				docs: {
					tags: [],
					text: 'The name of the accordion component.\n\nThis is not optional.',
				},
				attribute: 'name',
				reflect: false,
			},
			expandCollapseButton: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'string | ExpandCollapseButtonDetails',
					resolved: 'ExpandCollapseButtonDetails | string | undefined',
					references: {
						ExpandCollapseButtonDetails: {
							location: 'import',
							path: './expandCollapseButtonDetails.interface',
							id: 'src/components/ontario-accordion/expandCollapseButtonDetails.interface.ts::ExpandCollapseButtonDetails',
						},
					},
				},
				required: false,
				optional: true,
				docs: {
					tags: [
						{
							name: 'example',
							text: ' <ontario-accordion\n\tname="My Accordion"\n\texpand-collapse-button=\'{\n\t\t"expandAllSectionsLabel": "Expand All",\n\t\t"collapseAllSectionsLabel": "Collapse All"\n\t}\'\n\taccordion-data=\'[\n\t\t{"label": "Accordion 1", "content": ["Item 1", "Item 2", "Item 3"]},\n\t\t{"label": "Accordion 2", "content": ["Item A", "Item B", "Item C"]}\n\t]\'\n></ontario-accordion>',
						},
					],
					text: 'Custom Expand/Collapse button text.',
				},
				attribute: 'expand-collapse-button',
				reflect: false,
			},
			accordionData: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'string | Accordion[]',
					resolved: 'Accordion[] | string',
					references: {
						Accordion: {
							location: 'import',
							path: './accordion.interface',
							id: 'src/components/ontario-accordion/accordion.interface.ts::Accordion',
						},
					},
				},
				required: false,
				optional: false,
				docs: {
					tags: [
						{
							name: 'example',
							text: '\t<ontario-accordion\n\tname="My Accordion"\n\taccordion-data=\'[\n\t\t{"label": "Accordion 1", "content": "This is a string"},\n\t\t{"label": "Accordion 2", "accordionContentType": "html", "content": "<ul><li>List A</li><li>List B</li><li>List C</li></ul>"}\n\t]\'\n></ontario-accordion>',
						},
					],
					text: 'Used to include individual accordion data for the accordion component.\nThis is passed in as an array of objects with key-value pairs.\n\nThe `content` is expecting a string, that can either be written as HTML or a just a plain string, depending on the accordionContentType.',
				},
				attribute: 'accordion-data',
				reflect: false,
			},
			isOpen: {
				type: 'boolean',
				mutable: false,
				complexType: {
					original: 'boolean',
					resolved: 'boolean',
					references: {},
				},
				required: false,
				optional: false,
				docs: {
					tags: [],
					text: 'Used to show whether the accordion is opened or closed.',
				},
				attribute: 'is-open',
				reflect: false,
				defaultValue: 'false',
			},
			language: {
				type: 'string',
				mutable: true,
				complexType: {
					original: 'Language',
					resolved: '"en" | "fr" | undefined',
					references: {
						Language: {
							location: 'import',
							path: '../../utils/common/language-types',
							id: 'src/utils/common/language-types.ts::Language',
						},
					},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'The language of the component.\nThis is used for translations, and is by default set through event listeners checking for a language property from the header. If none are passed, it will default to English.',
				},
				attribute: 'language',
				reflect: false,
			},
		};
	}
	static get states() {
		return {
			translations: {},
			expandCollapseLabel: {},
			internalExpandCollapseLabelDetails: {},
			internalAccordionData: {},
			openAccordionIndexes: {},
		};
	}
	static get elementRef() {
		return 'host';
	}
	static get watchers() {
		return [
			{
				propName: 'accordionData',
				methodName: 'parseAccordionData',
			},
			{
				propName: 'expandCollapseButton',
				methodName: 'parseExpandCollapseButtonDetails',
			},
		];
	}
	static get listeners() {
		return [
			{
				name: 'setAppLanguage',
				method: 'handleSetAppLanguage',
				target: 'window',
				capture: false,
				passive: false,
			},
			{
				name: 'headerLanguageToggled',
				method: 'handleHeaderLanguageToggled',
				target: 'window',
				capture: false,
				passive: false,
			},
		];
	}
}
//# sourceMappingURL=ontario-accordion.js.map
