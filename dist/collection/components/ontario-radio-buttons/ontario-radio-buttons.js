import { h } from '@stencil/core';
import { Input } from '../../utils/common/input/input';
import { InputCaption } from '../../utils/common/input-caption/input-caption';
import {
	validateObjectExists,
	validatePropExists,
	validateLanguage,
} from '../../utils/validation/validation-functions';
import { ConsoleMessageClass } from '../../utils/console-message/console-message';
import { constructHintTextObject } from '../../utils/components/hints/hints';
import { EventType } from '../../utils/events/event-handler.interface';
import { handleInputEvent } from '../../utils/events/event-handler';
import { default as translations } from '../../translations/global.i18n.json';
export class OntarioRadioButtons {
	constructor() {
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
		this.language = validateLanguage(event);
	}
	handleHeaderLanguageToggled(event) {
		this.language = validateLanguage(event);
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
		if (validatePropExists(newValue)) {
			const message = new ConsoleMessageClass();
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
		if (validateObjectExists(newValue)) {
			const message = new ConsoleMessageClass();
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
		this.language = validateLanguage(this.language);
	}
	render() {
		var _a;
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
						ref: (el) => (this.hintTextRef = el),
					}),
				h(
					'div',
					{ class: 'ontario-radios' },
					(_a = this.internalOptions) === null || _a === void 0
						? void 0
						: _a.map((radioOption) =>
								h(
									'div',
									{ class: 'ontario-radios__item' },
									h(Input, {
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
									h(
										'label',
										{ class: 'ontario-radios__label', htmlFor: radioOption.elementId },
										radioOption.label,
										radioOption.hintExpander &&
											this.captionState.getHintExpanderAccessibilityText(radioOption.label, true),
									),
									h(
										'div',
										{ class: 'ontario-radios__hint-expander' },
										radioOption.hintExpander &&
											h('ontario-hint-expander', {
												'hint': radioOption.hintExpander.hint,
												'content': radioOption.hintExpander.content,
												'hintContentType': radioOption.hintExpander.hintContentType,
												'input-exists': true,
											}),
									),
								),
						  ),
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
	}
	static get is() {
		return 'ontario-radio-buttons';
	}
	static get encapsulation() {
		return 'shadow';
	}
	static get originalStyleUrls() {
		return {
			$: ['ontario-radio-buttons.scss'],
		};
	}
	static get styleUrls() {
		return {
			$: ['ontario-radio-buttons.css'],
		};
	}
	static get properties() {
		return {
			caption: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'Caption | string',
					resolved: 'Caption | string',
					references: {
						Caption: {
							location: 'import',
							path: '../../utils/common/input-caption/caption.interface',
						},
					},
				},
				required: false,
				optional: false,
				docs: {
					tags: [
						{
							name: 'example',
							text: '<ontario-radio-buttons\n  caption=\'{\n    "captionText": "Radio legend",\n    "captionType": "heading",\n   }\'\n  required="true"\n  ...>\n</ontario-radio-buttons>',
						},
					],
					text: 'The text to display for the radio button legend.',
				},
				attribute: 'caption',
				reflect: false,
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
					text: 'The name assigned to the radio button. The name value is used to reference form data after a form is submitted.',
				},
				attribute: 'name',
				reflect: false,
			},
			hintText: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'string | Hint',
					resolved: 'Hint | string | undefined',
					references: {
						Hint: {
							location: 'import',
							path: '../../utils/common/common.interface',
						},
					},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'Used to include the ontario-hint-text component for radio button group.\nThis is optional.',
				},
				attribute: 'hint-text',
				reflect: false,
			},
			hintExpander: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'HintExpander | string',
					resolved: 'HintExpander | string | undefined',
					references: {
						HintExpander: {
							location: 'import',
							path: '../ontario-hint-expander/hint-expander.interface',
						},
					},
				},
				required: false,
				optional: true,
				docs: {
					tags: [
						{
							name: 'example',
							text: '<ontario-radio-buttons\n  caption=\'{\n    "captionText": "Radio legend",\n    "captionType": "heading",\n  }\'\n\t name="radios"\n  options=\'[\n\t   {\n       "value": "radio-option-1",\n\t\t  "elementId": "radio-1",\n       "label": "Radio option 1 label",\n       "hintExpander": {\n\t\t  "hint": "Hint expander for radio option 1",\n\t\t      "content": "Example hint expander content for radio option 1."\n\t  }\n    }\n  ]\'\n  hint-expander=\'{\n    "hint": "Hint expander for the radio button group",\n    "content": "Example hint expander content for the radio button group."\n  }\'\n  required="true"\n>\n</ontario-radio-buttons>',
						},
					],
					text: 'Used to include the ontario-hint-expander component for the radio button group.\nThis is passed in as an object with key-value pairs.\n\nThis is optional.',
				},
				attribute: 'hint-expander',
				reflect: false,
			},
			required: {
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
					text: 'This is used to determine whether the radio button is required or not.\nThis prop also gets passed to the InputCaption utility to display either an optional or required flag in the label.\nIf no prop is set, it will default to false (optional).',
				},
				attribute: 'required',
				reflect: false,
				defaultValue: 'false',
			},
			options: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'string | RadioOption[]',
					resolved: 'RadioOption[] | string',
					references: {
						RadioOption: {
							location: 'import',
							path: './radio-option.interface',
						},
					},
				},
				required: false,
				optional: false,
				docs: {
					tags: [
						{
							name: 'example',
							text: '<ontario-radio-buttons\n  caption=\'{\n    "captionText": "Radio legend",\n    "captionType": "heading",\n  }\'\n  name="radios"\n  hint-text="Hint text for the radio button group."\n  options=\'[\n    {\n       "value": "radio-option-1",\n\t\t  "elementId": "radio-1",\n       "label": "Radio option 1 label"\n    },\n    {\n       "value": "radio-option-2",\n\t\t  "elementId": "radio-2",\n       "label": "Radio option 2 label",\n       "hintExpander": {\n\t\t  "hint": "Hint expander for radio option 2",\n\t\t      "content": "Example hint expander content for radio option 2."\n\t  }\n     }\n  ]\'\n  required="true"\n>\n</ontario-radio-buttons>',
						},
					],
					text: 'The options for the radio button group.\n\nEach property will be passed in through an object in the options array.\nThis can either be passed in as an object directly (if using react), or as a string in HTML.\nIf there are multiple radio buttons in a group, each radio button will be displayed as an option.\n\nIn the example below, the options are being passed in as a string and there are two radio buttons to be displayed in the group.',
				},
				attribute: 'options',
				reflect: false,
			},
			customOnChange: {
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
					text: 'Used to add a custom function to the radio input onChange event.',
				},
			},
			customOnBlur: {
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
					text: 'Used to add a custom function to the radio input onBlur event.',
				},
			},
			customOnFocus: {
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
					text: 'Used to add a custom function to the radio input onFocus event.',
				},
			},
		};
	}
	static get states() {
		return {
			hintTextId: {},
			internalHintText: {},
			internalHintExpander: {},
			internalOptions: {},
			captionState: {},
		};
	}
	static get events() {
		return [
			{
				method: 'radioOnChange',
				name: 'radioOnChange',
				bubbles: true,
				cancelable: true,
				composed: true,
				docs: {
					tags: [],
					text: 'Emitted when a keyboard input or mouse event occurs when a radio option has been changed.',
				},
				complexType: {
					original: 'any',
					resolved: 'any',
					references: {},
				},
			},
			{
				method: 'radioOnBlur',
				name: 'radioOnBlur',
				bubbles: true,
				cancelable: true,
				composed: true,
				docs: {
					tags: [],
					text: 'Emitted when a keyboard input event occurs when a radio option has lost focus.',
				},
				complexType: {
					original: 'any',
					resolved: 'any',
					references: {},
				},
			},
			{
				method: 'radioOnFocus',
				name: 'radioOnFocus',
				bubbles: true,
				cancelable: true,
				composed: true,
				docs: {
					tags: [],
					text: 'Emitted when a keyboard input event occurs when a radio option has gained focus.',
				},
				complexType: {
					original: 'any',
					resolved: 'any',
					references: {},
				},
			},
		];
	}
	static get elementRef() {
		return 'element';
	}
	static get watchers() {
		return [
			{
				propName: 'hintText',
				methodName: 'parseHintText',
			},
			{
				propName: 'hintExpander',
				methodName: 'parseHintExpander',
			},
			{
				propName: 'options',
				methodName: 'parseOptions',
			},
			{
				propName: 'name',
				methodName: 'validateName',
			},
			{
				propName: 'options',
				methodName: 'validateOptions',
			},
			{
				propName: 'caption',
				methodName: 'updateCaptionState',
			},
			{
				propName: 'language',
				methodName: 'updateLanguage',
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
