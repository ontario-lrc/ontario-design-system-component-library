import { h } from '@stencil/core';
import { validateLanguage } from '../../utils/validation/validation-functions';
import translations from '../../translations/global.i18n.json';
export class OntarioStepIndicator {
	constructor() {
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
		this.language = validateLanguage(event);
	}
	handleHeaderLanguageToggled(event) {
		this.language = validateLanguage(event);
	}
	componentWillLoad() {
		this.language = validateLanguage(this.language);
	}
	render() {
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
						{ class: `ontario-step-indicator--with-back-button--${this.showBackButton}` },
						this.showBackButton === true &&
							this.customOnClick &&
							!this.backButtonUrl &&
							h(
								'button',
								{
									class: 'ontario-button ontario-button--tertiary',
									onClick: (e) => this.customOnClick && this.customOnClick(e),
								},
								h('ontario-icon-chevron-left', { colour: 'blue' }),
								this.translations.stepIndicator.back[`${this.language}`],
							),
						this.showBackButton === true &&
							!this.customOnClick &&
							this.backButtonUrl &&
							h(
								'a',
								{ class: 'ontario-button ontario-button--tertiary', href: this.backButtonUrl },
								h('ontario-icon-chevron-left', { colour: 'blue' }),
								this.translations.stepIndicator.back[`${this.language}`],
							),
						this.percentageComplete
							? h(
									'span',
									{ class: 'ontario-h4' },
									this.percentageComplete,
									'\u00A0% ',
									this.translations.stepIndicator.complete[`${this.language}`],
							  )
							: h(
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
					h('hr', null),
				),
			),
		);
	}
	static get is() {
		return 'ontario-step-indicator';
	}
	static get encapsulation() {
		return 'shadow';
	}
	static get originalStyleUrls() {
		return {
			$: ['ontario-step-indicator.scss'],
		};
	}
	static get styleUrls() {
		return {
			$: ['ontario-step-indicator.css'],
		};
	}
	static get properties() {
		return {
			showBackButton: {
				type: 'boolean',
				mutable: false,
				complexType: {
					original: 'boolean',
					resolved: 'boolean | undefined',
					references: {},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'A boolean value to determine whether or not the back button is displayed for the step indicator.\n\nThis is optional. If no prop is passed, it will default to `false`.',
				},
				attribute: 'show-back-button',
				reflect: false,
				defaultValue: 'false',
			},
			backButtonUrl: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'string',
					resolved: 'string | undefined',
					references: {},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'URL for the back element to set a path for where the link will lead.\n\nIf a URL is passed in, the back element will display as an anchor tag.\nThe back element will require either the backButtonURL prop or the customOnClick prop to be passed in order for the back element to display.',
				},
				attribute: 'back-button-url',
				reflect: false,
			},
			currentStep: {
				type: 'number',
				mutable: false,
				complexType: {
					original: 'number',
					resolved: 'number | undefined',
					references: {},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'A number value to indicate which step the user is currently on.',
				},
				attribute: 'current-step',
				reflect: false,
			},
			numberOfSteps: {
				type: 'number',
				mutable: false,
				complexType: {
					original: 'number',
					resolved: 'number | undefined',
					references: {},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'A number value to indicate to the user the total number of steps the form has.',
				},
				attribute: 'number-of-steps',
				reflect: false,
			},
			percentageComplete: {
				type: 'number',
				mutable: false,
				complexType: {
					original: 'number',
					resolved: 'number | undefined',
					references: {},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'A number value to indicate to the user the percentage of the form that has been completed.',
				},
				attribute: 'percentage-complete',
				reflect: false,
			},
			customOnClick: {
				type: 'unknown',
				mutable: false,
				complexType: {
					original: 'Function',
					resolved: 'Function | undefined',
					references: {
						Function: {
							location: 'global',
						},
					},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'Used to add a custom function to the back button onClick event.\n\nIf this function is passed in, the back element will display as a button.\nThe back element will require either the backButtonURL prop or the customOnClick prop to be passed in order for the back element to display.',
				},
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
				defaultValue: "'en'",
			},
		};
	}
	static get states() {
		return {
			translations: {},
		};
	}
	static get elementRef() {
		return 'host';
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
