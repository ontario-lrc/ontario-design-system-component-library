import { h } from '@stencil/core';
import { validateLanguage } from '../../utils/validation/validation-functions';
import { validateValueAgainstArray } from '../../utils/validation/validation-functions';
import { ConsoleMessageClass } from '../../utils/console-message/console-message';
import translations from '../../translations/global.i18n.json';
export class OntarioLoadingIndicator {
	constructor() {
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
		this.language = validateLanguage(event);
	}
	handleHeaderLanguageToggled(event) {
		this.language = validateLanguage(event);
	}
	/**
	 * Watch for changes in the `type` variable for validation purposes.
	 *
	 * If the user input doesn't match one of the array values then `type` will be set to its default (`large`).
	 * If a match is found in one of the array values then `type` will be set to the matching array key value.
	 */
	validateType() {
		const isValid = validateValueAgainstArray(this.type, ['large', 'small']);
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
		const message = new ConsoleMessageClass();
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
		this.language = validateLanguage(this.language);
		this.validateType();
		this.isLoadingState = this.isLoading;
	}
	render() {
		var _a;
		return this.typeState === 'large'
			? h(
					'div',
					{
						'class': this.fullScreenOverlay
							? `ontario-loading-indicator__overlay`
							: `ontario-loading-indicator__overlay--within-container`,
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
							(_a = this.message) !== null && _a !== void 0 ? _a : this.translations.loading[`${this.language}`],
						),
					),
			  )
			: h('p', null, 'The small loading indicator is still under development.');
	}
	static get is() {
		return 'ontario-loading-indicator';
	}
	static get encapsulation() {
		return 'shadow';
	}
	static get originalStyleUrls() {
		return {
			$: ['ontario-loading-indicator.scss'],
		};
	}
	static get styleUrls() {
		return {
			$: ['ontario-loading-indicator.css'],
		};
	}
	static get properties() {
		return {
			type: {
				type: 'string',
				mutable: false,
				complexType: {
					original: "'small' | 'large'",
					resolved: '"large" | "small"',
					references: {},
				},
				required: false,
				optional: false,
				docs: {
					tags: [],
					text: 'The type of loading indicator to render.',
				},
				attribute: 'type',
				reflect: false,
				defaultValue: "'large'",
			},
			isLoading: {
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
					text: 'A boolean value to determine whether or not the loading indicator is loading (i.e: is visible) or not.',
				},
				attribute: 'is-loading',
				reflect: false,
				defaultValue: 'false',
			},
			message: {
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
					text: 'The message that tells the user what is happening or why the user is waiting.\nIf no message prop is passed, it will default to "Loading". Translations for this default message are included.\n\nThis is optional.',
				},
				attribute: 'message',
				reflect: false,
			},
			fullScreenOverlay: {
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
					text: 'A boolean value to determine whether the loading indicator overlay covers the full page or not. By default, this is set to `true`.\n\nIf set to `false`, the loading indicator overlay will be positioned absolutely relative to its container. Note that this will only work if the containing element has a style rule specifying it to be positioned relatively.',
				},
				attribute: 'full-screen-overlay',
				reflect: false,
				defaultValue: 'true',
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
					text: 'The language of the component.\nThis is used for translations, and is by default set through event listeners checking for a language property from the header. If no language is passed, it will default to English.',
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
			isLoadingState: {},
			typeState: {},
		};
	}
	static get watchers() {
		return [
			{
				propName: 'type',
				methodName: 'validateType',
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
