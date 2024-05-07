import { h } from '@stencil/core';
import { v4 as uuid } from 'uuid';
import { Input } from '../../utils/common/input/input';
import { InputCaption } from '../../utils/common/input-caption/input-caption';
import { validateLanguage, validatePropExists } from '../../utils/validation/validation-functions';
import { translations as globalTranslations } from '../../translations';
import { constructHintTextObject } from '../../utils/components/hints/hints';
import { EventType } from '../../utils/events/event-handler.interface';
import { handleInputEvent } from '../../utils/events/event-handler';
import { ConsoleMessageClass } from '../../utils/console-message/console-message';
import { ErrorMessage } from '../../utils/components/error-message/error-message';
export class OntarioInput {
	constructor() {
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
		this.translations = globalTranslations;
	}
	/**
	 * This listens for the `setAppLanguage` event sent from the test language toggler when it is is connected to the DOM. It is used for the initial language when the input component loads.
	 * @param event The language that has been selected.
	 */
	handleSetAppLanguage(event) {
		this.language = validateLanguage(event);
	}
	/**
	 * Handles an update to the language should the user request a language update from the language toggle.
	 * @param event The language that has been selected.
	 */
	handleHeaderLanguageToggled(event) {
		this.language = validateLanguage(event.detail.newLanguage);
	}
	/**
	 * Handle the change in the `value` property and validate if the input has been interacted with by
	 * the user to aid in determining if the required state should produce an error.
	 */
	handleValueChange() {
		this.hasBeenInteractedWith = this.hasBeenInteractedWith || !!this.value;
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
			this.translations,
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
	/**
	 * Handle the component being blurred and perform validation logic on the input.  Custom validation
	 * takes persistance, followed by validating the required state.
	 *
	 * Finally, an event is emitted to notify anything listening for the `inputErrorOccurred` that
	 * an error occurred.
	 */
	async handleComponentBlur() {
		if (this.enableLiveValidation) {
			// Call inputValidator function to perform custom validation
			const validationResult = this.inputValidator && this.inputValidator(this.value);
			await (validationResult === null || validationResult === void 0
				? void 0
				: validationResult.then((x) => (this.errorMessage = x === null || x === void 0 ? void 0 : x.errorMessage)));
			// Validate the `required` field
			// Only report a required error if no other error message is reported via validation
			if (this.required && this.hasBeenInteractedWith && !validationResult)
				if (!this.value)
					this.errorMessage =
						this.requiredValidationMessage || this.translations.input.requiredFieldError[this.getComponentLanguage()];
				else this.errorMessage = undefined;
		}
	}
	broadcastInputErrorOccurredEvent() {
		var _a;
		// Emit event to notify anyone who wants to listen for errors occurring
		this.inputErrorOccurred.emit({
			inputId: this.getId(),
			errorMessage: (_a = this.errorMessage) !== null && _a !== void 0 ? _a : '',
		});
	}
	/**
	 * Function to handle input events and the information pertaining to the input to emit.
	 */
	handleEvent(event, eventType) {
		var _a, _b, _c;
		const input = event.target;
		// Update the component value to match the value of the input element.
		this.value = input === null || input === void 0 ? void 0 : input.value;
		(_b = (_a = this.internals) === null || _a === void 0 ? void 0 : _a.setFormValue) === null || _b === void 0
			? void 0
			: _b.call(_a, (_c = this.value) !== null && _c !== void 0 ? _c : '');
		handleInputEvent(
			event,
			eventType,
			input,
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
		var _a;
		// A UUID is assigned in `componentWillLoad` if there is no given `elementId`.
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
	getComponentLanguage() {
		var _a;
		return (_a = this.language) !== null && _a !== void 0 ? _a : 'en';
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
		this.elementId = (_a = this.elementId) !== null && _a !== void 0 ? _a : uuid();
		this.parseHintText();
		this.parseHintExpander();
		this.validateName(this.name);
		this.language = validateLanguage(this.language);
	}
	render() {
		const error = !!this.errorMessage;
		return h(
			'div',
			{
				key: '6824b3fc596dd144fac82b9483d4a30e6cd0c164',
				class: `ontario-form-group ${error ? 'ontario-input--error' : ''}`,
			},
			this.captionState.getCaption(this.getId(), !!this.internalHintExpander),
			this.internalHintText &&
				h('ontario-hint-text', {
					hint: this.internalHintText.hint,
					hintContentType: this.internalHintText.hintContentType,
					ref: (el) => (this.hintTextRef = el),
				}),
			h(ErrorMessage, { key: 'd46e5883decc5d9bac5b322804d6d69dcf6952af', message: this.errorMessage, error: error }),
			h(Input, {
				'key': '64b93de051e0b52ce75d23b00166558b121558f3',
				'aria-describedBy': this.hintTextId,
				'className': this.getClass(),
				'id': this.getId(),
				'name': this.name,
				'onInput': (e) => this.handleEvent(e, EventType.Input),
				'onChange': (e) => this.handleEvent(e, EventType.Change),
				'onBlur': (e) => this.handleEvent(e, EventType.Blur),
				'onFocus': (e) => this.handleEvent(e, EventType.Focus),
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
	}
	static get is() {
		return 'ontario-input';
	}
	static get encapsulation() {
		return 'shadow';
	}
	static get formAssociated() {
		return true;
	}
	static get originalStyleUrls() {
		return {
			$: ['ontario-input.scss'],
		};
	}
	static get styleUrls() {
		return {
			$: ['ontario-input.css'],
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
							id: 'src/utils/common/input-caption/caption.interface.ts::Caption',
						},
					},
				},
				required: false,
				optional: false,
				docs: {
					tags: [
						{
							name: 'example',
							text: '<ontario-input\n  caption=\'{\n    "captionText": "Address",\n    "captionType": "heading",\n  }\n  required="true"\n  ...>\n</ontario-input>',
						},
					],
					text: 'The text to display as the input label',
				},
				attribute: 'caption',
				reflect: false,
			},
			elementId: {
				type: 'string',
				mutable: true,
				complexType: {
					original: 'string',
					resolved: 'string | undefined',
					references: {},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'The unique identifier of the input. This is optional - if no ID is passed, one will be generated.',
				},
				attribute: 'element-id',
				reflect: false,
			},
			inputWidth: {
				type: 'string',
				mutable: true,
				complexType: {
					original:
						"| '2-char-width'\n\t\t| '3-char-width'\n\t\t| '4-char-width'\n\t\t| '5-char-width'\n\t\t| '7-char-width'\n\t\t| '10-char-width'\n\t\t| '20-char-width'\n\t\t| 'default'",
					resolved:
						'"10-char-width" | "2-char-width" | "20-char-width" | "3-char-width" | "4-char-width" | "5-char-width" | "7-char-width" | "default"',
					references: {},
				},
				required: false,
				optional: false,
				docs: {
					tags: [],
					text: 'The width of the input field. If no value is assigned, it will present as the `default` input width.',
				},
				attribute: 'input-width',
				reflect: false,
				defaultValue: "'default'",
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
					text: 'The name assigned to the input. The name value is used to reference form data after a form is submitted.',
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
							id: 'src/utils/common/common.interface.ts::Hint',
						},
					},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'Used to include the ontario-hint-text component for the input.\nThis is optional.',
				},
				attribute: 'hint-text',
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
					tags: [
						{
							name: 'example',
							text: '<ontario-input\n\tid="address-line-1"\n\tcaption="Address line 1"\n\trequired\n\trequired-validation-message="Please enter an address, including street number and street name"\n\tname="address-line-1"\n\thint-text="Street and number or P.O. box."\n></ontario-input>',
						},
					],
					text: 'This is used to determine whether the input is required or not.\nThis prop also gets passed to the InputCaption utility to display either an optional or required flag in the label.\nIf no prop is set, it will default to false (optional).\n\n_Please add a validation messaging using `requiredValidationMessage` if setting this property._',
				},
				attribute: 'required',
				reflect: false,
				defaultValue: 'false',
			},
			type: {
				type: 'string',
				mutable: true,
				complexType: {
					original: "'text' | 'tel' | 'email' | 'password'",
					resolved: '"email" | "password" | "tel" | "text"',
					references: {},
				},
				required: false,
				optional: false,
				docs: {
					tags: [],
					text: "The input type value.\n\nIf no `type` is provided, it will default to 'text'.",
				},
				attribute: 'type',
				reflect: false,
				defaultValue: "'text'",
			},
			value: {
				type: 'string',
				mutable: true,
				complexType: {
					original: 'string',
					resolved: 'string | undefined',
					references: {},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'The input content value.\n\nThis is optional.',
				},
				attribute: 'value',
				reflect: false,
			},
			errorMessage: {
				type: 'string',
				mutable: true,
				complexType: {
					original: 'string',
					resolved: 'string | undefined',
					references: {},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'Set this to display an',
				},
				attribute: 'error-message',
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
							id: 'src/utils/common/language-types.ts::Language',
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
							id: 'src/components/ontario-hint-expander/hint-expander.interface.ts::HintExpander',
						},
					},
				},
				required: false,
				optional: true,
				docs: {
					tags: [
						{
							name: 'example',
							text: '<ontario-input\n  caption=\'{\n    "caption": "Address",\n    "captionType": "heading",\n  }\n  hint-expander=\'{\n   "hint": "Hint expander",\n   "content": "This is the content"\n  }\'\n  required="true"\n>\n</ontario-input>',
						},
					],
					text: 'Used to include the ontario-hint-expander component for the input component.\nThis is passed in as an object with key-value pairs.\n\nThis is optional.',
				},
				attribute: 'hint-expander',
				reflect: false,
			},
			enableLiveValidation: {
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
					text: 'Enable live validation on the input.  Custom live validation can be performed using an `inputValidator`\nvalidation function.  It will also validate the `required` state if no errors are returned from\nthe `inputValidator`.  Please set a `requiredValidationMessage` to report concisely to the end user what\nthey are required to set.',
				},
				attribute: 'enable-live-validation',
				reflect: false,
				defaultValue: 'false',
			},
			inputValidator: {
				type: 'unknown',
				mutable: false,
				complexType: {
					original: '(value?: string) => Promise<{ errorMessage?: string } | null | undefined>',
					resolved:
						'((value?: string | undefined) => Promise<{ errorMessage?: string | undefined; } | null | undefined>) | undefined',
					references: {
						Promise: {
							location: 'global',
							id: 'global::Promise',
						},
					},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'Validate the validity of the input value `onBlur`.  This `async` function should return a result\nto trigger an error message.  Returning `undefined` or `null` will clear it.',
				},
			},
			customOnInput: {
				type: 'unknown',
				mutable: false,
				complexType: {
					original: '(event: globalThis.Event) => void',
					resolved: '((event: Event) => void) | undefined',
					references: {
						globalThis: {
							location: 'global',
							id: 'global::globalThis',
						},
					},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'Used to add a custom function to the input onInput event.',
				},
			},
			customOnChange: {
				type: 'unknown',
				mutable: false,
				complexType: {
					original: '(event: globalThis.Event) => void',
					resolved: '((event: Event) => void) | undefined',
					references: {
						globalThis: {
							location: 'global',
							id: 'global::globalThis',
						},
					},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'Used to add a custom function to the input onChange event.',
				},
			},
			customOnBlur: {
				type: 'unknown',
				mutable: false,
				complexType: {
					original: '(event: globalThis.Event) => void',
					resolved: '((event: Event) => void) | undefined',
					references: {
						globalThis: {
							location: 'global',
							id: 'global::globalThis',
						},
					},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'Used to add a custom function to the input onBlur event.',
				},
			},
			customOnFocus: {
				type: 'unknown',
				mutable: false,
				complexType: {
					original: '(event: globalThis.Event) => void',
					resolved: '((event: Event) => void) | undefined',
					references: {
						globalThis: {
							location: 'global',
							id: 'global::globalThis',
						},
					},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'Used to add a custom function to the input onFocus event.',
				},
			},
			requiredValidationMessage: {
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
					text: 'Custom error message to display if a required field is not filled out.  _Please add a\ncustom message when setting an input as required_.',
				},
				attribute: 'required-validation-message',
				reflect: false,
			},
		};
	}
	static get states() {
		return {
			hintTextId: {},
			internalHintText: {},
			internalHintExpander: {},
			captionState: {},
			hasBeenInteractedWith: {},
			translations: {},
		};
	}
	static get events() {
		return [
			{
				method: 'inputOnInput',
				name: 'inputOnInput',
				bubbles: true,
				cancelable: true,
				composed: true,
				docs: {
					tags: [],
					text: 'Emitted when a input  occurs when an input has been changed.',
				},
				complexType: {
					original: 'InputInputEvent',
					resolved: 'InputInteractionEvent & { inputType?: string | undefined; }',
					references: {
						InputInputEvent: {
							location: 'import',
							path: '../../utils/events/event-handler.interface',
							id: 'src/utils/events/event-handler.interface.ts::InputInputEvent',
						},
					},
				},
			},
			{
				method: 'inputOnChange',
				name: 'inputOnChange',
				bubbles: true,
				cancelable: true,
				composed: true,
				docs: {
					tags: [],
					text: 'Emitted when a keyboard input or mouse event occurs when an input has been changed.',
				},
				complexType: {
					original: 'InputInteractionEvent',
					resolved: '{ id?: string | undefined; value?: string | undefined; }',
					references: {
						InputInteractionEvent: {
							location: 'import',
							path: '../../utils/events/event-handler.interface',
							id: 'src/utils/events/event-handler.interface.ts::InputInteractionEvent',
						},
					},
				},
			},
			{
				method: 'inputOnBlur',
				name: 'inputOnBlur',
				bubbles: true,
				cancelable: true,
				composed: true,
				docs: {
					tags: [],
					text: 'Emitted when a keyboard input event occurs when an input has lost focus.',
				},
				complexType: {
					original: 'InputFocusBlurEvent',
					resolved: 'InputInteractionEvent & { focused: boolean; }',
					references: {
						InputFocusBlurEvent: {
							location: 'import',
							path: '../../utils/events/event-handler.interface',
							id: 'src/utils/events/event-handler.interface.ts::InputFocusBlurEvent',
						},
					},
				},
			},
			{
				method: 'inputOnFocus',
				name: 'inputOnFocus',
				bubbles: true,
				cancelable: true,
				composed: true,
				docs: {
					tags: [],
					text: 'Emitted when a keyboard input event occurs when an input has gained focus.',
				},
				complexType: {
					original: 'InputFocusBlurEvent',
					resolved: 'InputInteractionEvent & { focused: boolean; }',
					references: {
						InputFocusBlurEvent: {
							location: 'import',
							path: '../../utils/events/event-handler.interface',
							id: 'src/utils/events/event-handler.interface.ts::InputFocusBlurEvent',
						},
					},
				},
			},
			{
				method: 'inputErrorOccurred',
				name: 'inputErrorOccurred',
				bubbles: true,
				cancelable: true,
				composed: true,
				docs: {
					tags: [],
					text: 'Emitted when an error message is reported to the component.',
				},
				complexType: {
					original: '{ inputId: string; errorMessage: string }',
					resolved: '{ inputId: string; errorMessage: string; }',
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
				propName: 'value',
				methodName: 'handleValueChange',
			},
			{
				propName: 'name',
				methodName: 'validateName',
			},
			{
				propName: 'hintText',
				methodName: 'parseHintText',
			},
			{
				propName: 'hintExpander',
				methodName: 'parseHintExpander',
			},
			{
				propName: 'caption',
				methodName: 'updateCaptionState',
			},
			{
				propName: 'language',
				methodName: 'updateLanguage',
			},
			{
				propName: 'errorMessage',
				methodName: 'broadcastInputErrorOccurredEvent',
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
			{
				name: 'blur',
				method: 'handleComponentBlur',
				target: undefined,
				capture: true,
				passive: false,
			},
		];
	}
	static get attachInternalsMemberName() {
		return 'internals';
	}
}
//# sourceMappingURL=ontario-input.js.map
