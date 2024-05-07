import { h } from '@stencil/core';
import { v4 as uuid } from 'uuid';
import { InputCaption } from '../../utils/common/input-caption/input-caption';
import { validatePropExists, validateLanguage } from '../../utils/validation/validation-functions';
import { ConsoleMessageClass } from '../../utils/console-message/console-message';
import { constructHintTextObject } from '../../utils/components/hints/hints';
import { EventType } from '../../utils/events/event-handler.interface';
import { handleInputEvent } from '../../utils/events/event-handler';
import { default as translations } from '../../translations/global.i18n.json';
export class OntarioTextarea {
	constructor() {
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
	/**
	 * This listens for the `setAppLanguage` event sent from the test language toggler when it is is connected to the DOM. It is used for the initial language when the textarea component loads.
	 */
	handleSetAppLanguage(event) {
		if (!this.language) {
			this.language = validateLanguage(event);
		}
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
	/**
	 * Function to handle textarea events and the information pertaining to the textarea to emit.
	 */
	handleEvent(event, eventType) {
		var _a, _b, _c;
		const input = event.target;
		(_b = (_a = this.internals) === null || _a === void 0 ? void 0 : _a.setFormValue) === null || _b === void 0
			? void 0
			: _b.call(
					_a,
					(_c = input === null || input === void 0 ? void 0 : input.value) !== null && _c !== void 0 ? _c : '',
			  );
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
		this.elementId = (_a = this.elementId) !== null && _a !== void 0 ? _a : uuid();
		this.parseHintText();
		this.parseHintExpander();
		this.validateName(this.name);
		this.language = validateLanguage(this.language);
	}
	render() {
		return h(
			'div',
			{ key: 'ca65ae6963ca2bf19e4285413494b31cac66fbc5', class: 'ontario-form-group' },
			this.captionState.getCaption(this.getId(), !!this.internalHintExpander),
			this.internalHintText &&
				h('ontario-hint-text', {
					hint: this.internalHintText.hint,
					hintContentType: this.internalHintText.hintContentType,
					ref: (el) => (this.hintTextRef = el),
				}),
			h('textarea', {
				'key': '9b20c5156e0977b440786d3a3cf8bbabf9f69649',
				'aria-describedby': this.hintTextId,
				'class': this.getClass(),
				'id': this.getId(),
				'name': this.name,
				'value': this.getValue(),
				'onInput': (e) => this.handleEvent(e, EventType.Input),
				'onChange': (e) => this.handleEvent(e, EventType.Change),
				'onBlur': (e) => this.handleEvent(e, EventType.Blur),
				'onFocus': (e) => this.handleEvent(e, EventType.Focus),
				'required': !!this.required,
			}),
			this.internalHintExpander &&
				h('ontario-hint-expander', {
					'hint': this.internalHintExpander.hint,
					'content': this.internalHintExpander.content,
					'hintContentType': this.internalHintExpander.hintContentType,
					'input-exists': true,
				}),
		);
	}
	static get is() {
		return 'ontario-textarea';
	}
	static get encapsulation() {
		return 'shadow';
	}
	static get formAssociated() {
		return true;
	}
	static get originalStyleUrls() {
		return {
			$: ['ontario-textarea.scss'],
		};
	}
	static get styleUrls() {
		return {
			$: ['ontario-textarea.css'],
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
							text: '<ontario-input\n  caption=\'{\n    "captionText": "Address",\n    "captionType": "heading",\n  }\'\n  required="true"\n  ...>\n</ontario-input>',
						},
					],
					text: 'The text to display as the textarea label.',
				},
				attribute: 'caption',
				reflect: false,
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
					text: 'The name assigned to the textarea. The name value is used to reference form data after a form is submitted.',
				},
				attribute: 'name',
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
					text: 'The unique identifier of the textarea. This is optional - if no ID is passed, one will be generated.',
				},
				attribute: 'element-id',
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
					text: 'This is used to determine whether the textarea is required or not.\nThis prop also gets passed to the InputCaption utility to display either an optional or required flag in the label.\nIf no prop is set, it will default to false (optional).',
				},
				attribute: 'required',
				reflect: false,
				defaultValue: 'false',
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
					text: 'The textarea content value.',
				},
				attribute: 'value',
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
					text: 'Used to include the ontario-hint-text component for the textarea.\nThis is optional.',
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
							text: '<ontario-textarea\n  caption=\'{\n    "captionText": "What are your thoughts",\n    "captionType": "heading",\n  }\'\n\t name: "textarea"\n  hint-expander=\'{\n    "hint": "This is the hint expander",\n    "content": "This is the content for the hint expander"\n  }\'\n  required="true"\n>\n</ontario-textarea>',
						},
					],
					text: 'Used to include the ontario-hint-expander component for the textarea component.\nThis is passed in as an object with key-value pairs.\n\nThis is optional.',
				},
				attribute: 'hint-expander',
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
					text: 'Used to add a custom function to the textarea onInput event.',
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
					text: 'Used to add a custom function to the textarea onChange event.',
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
					text: 'Used to add a custom function to the textarea onBlur event.',
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
					text: 'Used to add a custom function to the textarea onFocus event.',
				},
			},
		};
	}
	static get states() {
		return {
			hintTextId: {},
			internalHintText: {},
			internalHintExpander: {},
			captionState: {},
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
					text: 'Emitted when a input event occurs when an input has been changed.',
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
	static get attachInternalsMemberName() {
		return 'internals';
	}
}
//# sourceMappingURL=ontario-textarea.js.map
