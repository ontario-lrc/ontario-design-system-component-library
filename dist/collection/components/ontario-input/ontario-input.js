import { h } from '@stencil/core';
import { v4 as uuid } from 'uuid';
import { Input } from '../../utils/common/input/input';
import { InputCaption } from '../../utils/common/input-caption/input-caption';
import { validateLanguage, validatePropExists } from '../../utils/validation/validation-functions';
import { constructHintTextObject } from '../../utils/components/hints/hints';
import { EventType } from '../../utils/events/event-handler.interface';
import { handleInputEvent } from '../../utils/events/event-handler';
import { ConsoleMessageClass } from '../../utils/console-message/console-message';
import { default as translations } from '../../translations/global.i18n.json';
export class OntarioInput {
	constructor() {
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
		this.language = validateLanguage(event);
	}
	handleHeaderLanguageToggled(event) {
		this.language = validateLanguage(event);
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
		this.elementId = (_a = this.elementId) !== null && _a !== void 0 ? _a : uuid();
		this.parseHintText();
		this.parseHintExpander();
		this.validateName(this.name);
		this.language = validateLanguage(this.language);
	}
	render() {
		return h(
			'div',
			{ class: 'ontario-form-group' },
			this.captionState.getCaption(this.getId(), !!this.internalHintExpander),
			this.internalHintText &&
				h('ontario-hint-text', {
					hint: this.internalHintText.hint,
					hintContentType: this.internalHintText.hintContentType,
					ref: (el) => (this.hintTextRef = el),
				}),
			h(Input, {
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
					tags: [],
					text: 'This is used to determine whether the input is required or not.\nThis prop also gets passed to the InputCaption utility to display either an optional or required flag in the label.\nIf no prop is set, it will default to false (optional).',
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
							text: '<ontario-input\n  caption=\'{\n    "caption": "Address",\n    "captionType": "heading",\n  }\n  hint-expander=\'{\n   "hint": "Hint expander",\n   "content": "This is the content"\n  }\'\n  required="true"\n>\n</ontario-input>',
						},
					],
					text: 'Used to include the ontario-hint-expander component for the input component.\nThis is passed in as an object with key-value pairs.\n\nThis is optional.',
				},
				attribute: 'hint-expander',
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
					text: 'Used to add a custom function to the textarea onChange event.',
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
					text: 'Used to add a custom function to the textarea onBlur event.',
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
					original: 'any',
					resolved: 'any',
					references: {},
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
					original: 'any',
					resolved: 'any',
					references: {},
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
