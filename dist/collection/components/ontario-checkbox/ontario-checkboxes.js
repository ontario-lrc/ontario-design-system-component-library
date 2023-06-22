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
export class OntarioCheckboxes {
	constructor() {
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
		this.validateOptions(this.internalOptions);
	}
	/**
	 * Validate the `options` and make sure the `options` prop has a value.
	 * Log a warning if user doesn't input a value for the `options`.
	 *
	 * @param newValue object to be validated
	 */
	validateOptions(newValue) {
		if (validateObjectExists(newValue)) {
			const message = new ConsoleMessageClass();
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
		if (validatePropExists(newValue)) {
			const message = new ConsoleMessageClass();
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
					{ class: 'ontario-checkboxes' },
					(_a = this.internalOptions) === null || _a === void 0
						? void 0
						: _a.map((checkbox) =>
								h(
									'div',
									{ class: 'ontario-checkboxes__item' },
									h(Input, {
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
									h(
										'label',
										{ class: 'ontario-checkboxes__label', htmlFor: checkbox.elementId },
										checkbox.label,
										checkbox.hintExpander && this.captionState.getHintExpanderAccessibilityText(checkbox.label, true),
									),
									h(
										'div',
										{ class: 'ontario-checkboxes__hint-expander' },
										checkbox.hintExpander &&
											h('ontario-hint-expander', {
												'hint': checkbox.hintExpander.hint,
												'content': checkbox.hintExpander.content,
												'hintContentType': checkbox.hintExpander.hintContentType,
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
		return 'ontario-checkboxes';
	}
	static get encapsulation() {
		return 'shadow';
	}
	static get originalStyleUrls() {
		return {
			$: ['ontario-checkboxes.scss'],
		};
	}
	static get styleUrls() {
		return {
			$: ['ontario-checkboxes.css'],
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
							text: '<ontario-checkboxes\n  caption=\'{\n    "captionText": "Checkbox legend",\n    "captionType": "heading",\n  }\n  ...>\n</ontario-checkboxes>',
						},
					],
					text: 'The text to display for the checkbox legend.',
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
					text: 'The name for the checkboxes. The name value is used to reference form data after a form is submitted.',
				},
				attribute: 'name',
				reflect: false,
			},
			hintText: {
				type: 'string',
				mutable: true,
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
					text: 'Used to include the ontario-hint-text component for the checkbox group.\nThis is optional.',
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
							text: '<ontario-checkboxes\n  caption=\'{\n    "captionText": "Checkbox legend",\n    "captionType": "heading",\n  }\n  name=\'ontario-checkboxes\'\n  options=\'[\n\t{\n\t\t"value": "checkbox-option-1",\n\t\t"label": "Checkbox option 1 label",\n\t\t"elementId": "checkbox-1"\n\t}\n  }]\'\n  hint-expander=\'{\n   "hint": "Hint expander for the checkbox group",\n   "content": "Example hint expander content for the checkbox group"\n  }\'\n  required="true"\n>\n</ontario-checkboxes>',
						},
					],
					text: 'Used to include the ontario-hint-expander component for the checkbox group.\nThis is passed in as an object with key-value pairs.\n\nThis is optional.',
				},
				attribute: 'hint-expander',
				reflect: false,
			},
			options: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'CheckboxOption[] | string',
					resolved: 'CheckboxOption[] | string',
					references: {
						CheckboxOption: {
							location: 'import',
							path: './checkbox-option.interface',
						},
					},
				},
				required: false,
				optional: false,
				docs: {
					tags: [
						{
							name: 'example',
							text: '<ontario-checkboxes\n  caption=\'{\n\t"captionText": "Checkbox legend",\n\t"captionType": "heading",\n  }\n  name="ontario-checkboxes",\n  hint-text="Hint text for the checkbox group."\n  options=\'[\n\t{\n\t\t"value": "checkbox-option-1",\n\t\t"label": "Checkbox option 1 label"\n\t\t"elementId": "checkbox-1"\n    },\n    {\n       "value": "checkbox-option-2",\n       "label": "Checkbox option 2 label",\n\t\t  "elementId": "checkbox-2",\n      "hintExpander": {\n\t\t\t"hint": "Hint expander for checkbox option 2",\n             "content": "Example hint expander content for checkbox option 2"\n       }\n     }\n  ]\'\n  required="true"\n>\n</ontario-checkboxes>',
						},
					],
					text: 'The options for the checkbox group.\n\nEach property will be passed in through an object in the options array.\nThis can either be passed in as an object directly (if using react), or as a string in HTML.\nIf there are multiple checkboxes in a fieldset, each checkbox will be displayed as an option.\n\nIn the example below, the options are being passed in as a string and there are two checkboxes to be displayed in the fieldset.',
				},
				attribute: 'options',
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
					text: 'This is used to determine whether the checkbox is required or not.\nThis prop also gets passed to the InputCaption utility to display either an optional or required flag in the label.\nIf no prop is set, it will default to false (optional).',
				},
				attribute: 'required',
				reflect: false,
				defaultValue: 'false',
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
					text: 'Used to add a custom function to the checkbox onChange event.',
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
					text: 'Used to add a custom function to the checkbox onBlur event.',
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
					text: 'Used to add a custom function to the checkbox onFocus event.',
				},
			},
		};
	}
	static get states() {
		return {
			hintTextId: {},
			captionState: {},
			internalHintText: {},
			internalHintExpander: {},
			internalOptions: {},
		};
	}
	static get events() {
		return [
			{
				method: 'checkboxOnChange',
				name: 'checkboxOnChange',
				bubbles: true,
				cancelable: true,
				composed: true,
				docs: {
					tags: [],
					text: 'Emitted when a keyboard input or mouse event occurs when a checkbox option has been changed.',
				},
				complexType: {
					original: 'any',
					resolved: 'any',
					references: {},
				},
			},
			{
				method: 'checkboxOnBlur',
				name: 'checkboxOnBlur',
				bubbles: true,
				cancelable: true,
				composed: true,
				docs: {
					tags: [],
					text: 'Emitted when a keyboard input event occurs when a checkbox option has lost focus.',
				},
				complexType: {
					original: 'any',
					resolved: 'any',
					references: {},
				},
			},
			{
				method: 'checkboxOnFocus',
				name: 'checkboxOnFocus',
				bubbles: true,
				cancelable: true,
				composed: true,
				docs: {
					tags: [],
					text: 'Emitted when a keyboard input event occurs when a checkbox option has gained focus.',
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
