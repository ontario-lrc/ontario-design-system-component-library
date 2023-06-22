import { h, getAssetPath } from '@stencil/core';
import { v4 as uuid } from 'uuid';
import { InputCaption } from '../../utils/common/input-caption/input-caption';
import {
	validateObjectExists,
	validatePropExists,
	validateLanguage,
} from '../../utils/validation/validation-functions';
import { ConsoleMessageClass } from '../../utils/console-message/console-message';
import { hasMultipleTrueValues } from '../../utils/helper/utils';
import { constructHintTextObject } from '../../utils/components/hints/hints';
import { EventType } from '../../utils/events/event-handler.interface';
import { handleInputEvent } from '../../utils/events/event-handler';
import { default as translations } from '../../translations/global.i18n.json';
export class OntarioDropdownList {
	constructor() {
		/**
		 * Function to handle dropdown list events and the information pertaining to the dropdown list to emit.
		 */
		this.handleEvent = (ev, eventType) => {
			const input = ev.target;
			handleInputEvent(
				ev,
				eventType,
				input,
				this.dropdownOnChange,
				this.dropdownOnFocus,
				this.dropdownOnBlur,
				'dropdown',
				this.customOnChange,
				this.customOnFocus,
				this.customOnBlur,
			);
		};
		this.caption = undefined;
		this.language = 'en';
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
				.addMonospaceText(' <ontario-dropdown-list> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	}
	/*
	 * Watch for changes in the `options` prop for validation purposes.
	 *
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
				.addMonospaceText(' <ontario-dropdown-list> ')
				.addRegularText('was not provided')
				.printMessage();
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
		// Check selected status of options
		this.validateSelectedOption(this.internalOptions);
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
	 * Watch for changes to the `language` prop to render either the English or French translations
	 */
	updateLanguage() {
		this.updateCaptionState(this.caption);
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
	getId() {
		var _a;
		return (_a = this.elementId) !== null && _a !== void 0 ? _a : '';
	}
	/**
	 * This function will set a selected key to `false` for each dropdown if no selected value is passed.
	 *
	 * It will also pass a warning to the user if multiple `true` selected values are passed.
	 *
	 * @param options
	 * @returns options
	 */
	validateSelectedOption(options) {
		const selected = 'selected';
		options.forEach((singleOption) => {
			// if no selected key is passed, set a default key to false
			if (!singleOption.hasOwnProperty(selected)) {
				singleOption.selected = false;
			}
		});
		if (hasMultipleTrueValues(options, selected)) {
			const message = new ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' There are duplicate truthy `selected` values ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-dropdown-list> ')
				.addRegularText('options. Please update options so only one truthy `selected` value exists.')
				.printMessage();
		}
		return options;
	}
	getDropdownArrow() {
		return {
			backgroundImage: `url(${getAssetPath('./assets/ontario-material-dropdown-arrow-48px.svg')})`,
		};
	}
	getClass() {
		return this.hintExpander
			? `ontario-input ontario-dropdown ontario-dropdown-hint-expander--true`
			: `ontario-input ontario-dropdown`;
	}
	/**
	 * If a `hintText` prop is passed, the id generated from it will be set to the internal `hintTextId` state to match with the select `aria-describedBy` attribute.
	 */
	async componentDidLoad() {
		var _a;
		this.hintTextId = await ((_a = this.hintTextRef) === null || _a === void 0 ? void 0 : _a.getHintTextId());
	}
	componentWillLoad() {
		var _a;
		this.updateCaptionState(this.caption);
		this.parseOptions();
		this.validateName(this.name);
		this.validateOptions(this.internalOptions);
		this.elementId = (_a = this.elementId) !== null && _a !== void 0 ? _a : uuid();
		this.parseHintText();
		this.parseHintExpander();
		this.language = validateLanguage(this.language);
	}
	render() {
		var _a, _b;
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
			h(
				'select',
				{
					'class': this.getClass(),
					'aria-describedby': this.hintTextId,
					'id': this.getId(),
					'name': this.name,
					'style': this.getDropdownArrow(),
					'onChange': (e) => this.handleEvent(e, EventType.Change),
					'onBlur': (e) => this.handleEvent(e, EventType.Blur),
					'onFocus': (e) => this.handleEvent(e, EventType.Focus),
					'required': !!this.required,
				},
				this.isEmptyStartOption &&
					(this.isEmptyStartOption === true || this.isEmptyStartOption === 'true'
						? h('option', null, this.translations.dropdownList.select[`${this.language}`])
						: h('option', null, this.isEmptyStartOption)),
				(_b =
					(_a = this.internalOptions) === null || _a === void 0
						? void 0
						: _a.map((dropdown) =>
								h('option', { value: dropdown.value, selected: dropdown.selected }, dropdown.label),
						  )) !== null && _b !== void 0
					? _b
					: '',
			),
			this.internalHintExpander &&
				h('ontario-hint-expander', {
					hint: this.internalHintExpander.hint,
					content: this.internalHintExpander.content,
					hintContentType: this.internalHintExpander.hintContentType,
				}),
		);
	}
	static get is() {
		return 'ontario-dropdown-list';
	}
	static get encapsulation() {
		return 'shadow';
	}
	static get originalStyleUrls() {
		return {
			$: ['ontario-dropdown-list.scss'],
		};
	}
	static get styleUrls() {
		return {
			$: ['ontario-dropdown-list.css'],
		};
	}
	static get assetsDirs() {
		return ['./assets'];
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
							text: '<ontario-dropdown-list\n  name="ontario-dropdown-list"\n  caption=\'{\n    "captionText": "Label",\n    "captionType": "heading",\n  }\'\n  ...>\n</ontario-dropdown-list>',
						},
					],
					text: 'The text to display for the dropdown list label.',
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
					text: 'The name for the dropdown list. The name value is used to reference form data after a form is submitted.',
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
					text: 'The ID for the dropdown list.\nIf no ID is provided, one will be generated.',
				},
				attribute: 'element-id',
				reflect: false,
			},
			options: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'string | DropdownOption[]',
					resolved: 'DropdownOption[] | string',
					references: {
						DropdownOption: {
							location: 'import',
							path: './dropdown-option.interface',
						},
					},
				},
				required: false,
				optional: false,
				docs: {
					tags: [
						{
							name: 'example',
							text: '<ontario-dropdown-list\n  caption=\'{\n    "captionText": "Label",\n    "captionType": "heading",\n  }\'\n  name="ontario-dropdown-list"\n  options=\'[\n    {\n      "value": "dropdown-option-1",\n      "label": "Option 1",\n      "selected": "true"\n    },\n    {\n      "value": "dropdown-option-2",\n      "label": "Option 2"\n    },\n    {\n      "value": "dropdown-option-3",\n      "label": "Option 3"\n    }\n  ]\'\n>\n</ontario-dropdown-list>',
						},
					],
					text: 'The options for dropdown list.\n\nEach option will be passed in through an object in the options array.\nThis can either be passed in as an object directly (if using react), or as a string in HTML.\n\nIn the example below, the options are being passed in as a string and there are three dropdown options displayed.',
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
					text: 'This is used to determine whether the dropdown list is required or not.\nThis prop also gets passed to the InputCaption utility to display either an optional or required flag in the label.\nIf no prop is set, it will default to false (optional).',
				},
				attribute: 'required',
				reflect: false,
				defaultValue: 'false',
			},
			isEmptyStartOption: {
				type: 'any',
				mutable: false,
				complexType: {
					original: 'boolean | string',
					resolved: 'boolean | string | undefined',
					references: {},
				},
				required: false,
				optional: true,
				docs: {
					tags: [
						{
							name: 'example',
							text: '<ontario-dropdown-list is-empty-start-option="true"></ontario-dropdown-list>\n\nor\n\n<ontario-dropdown-list is-empty-start-option="Please select"></ontario-dropdown-list>',
						},
					],
					text: 'This prop is used to determine whether or not the initial option displayed is empty.\nIf set to `true`, it will render the default \u201Cselect\u201D text.\nIf set to a string, it will render the string value.',
				},
				attribute: 'is-empty-start-option',
				reflect: false,
				defaultValue: 'false',
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
					text: 'Used to include the ontario-hint-text component for the dropdown list.\nThis is optional.',
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
							text: '<ontario-dropdown-list\n  caption=\'{\n    "caption": "What province do you live in?",\n    "captionType": "heading",\n  }\n  name="ontario-dropdown-list"\n  options=\'[\n    {\n      "value": "dropdown-option-1",\n      "label": "Option 1",\n      "selected": "true"\n    },\n    {\n      "value": "dropdown-option-2",\n      "label": "Option 2"\n    },\n    {\n      "value": "dropdown-option-3",\n      "label": "Option 3"\n    }\n  ]\'\n  hint-expander=\'{\n   "hint": "Hint expander for the dropdown list",\n   "content": "Example hint expander content for the dropdown list."\n  }\'\n>\n</ontario-dropdown-list>',
						},
					],
					text: 'Used to include the ontario-hint-expander component for the dropdown list component.\nThis is passed in as an object with key-value pairs.\n\nThis is optional.',
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
					text: 'Used to add a custom function to the dropdown onChange event.',
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
					text: 'Used to add a custom function to the dropdown onBlur event.',
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
					text: 'Used to add a custom function to the dropdown onFocus event.',
				},
			},
		};
	}
	static get states() {
		return {
			hintTextId: {},
			captionState: {},
			internalOptions: {},
			internalHintText: {},
			internalHintExpander: {},
			translations: {},
		};
	}
	static get events() {
		return [
			{
				method: 'dropdownOnChange',
				name: 'dropdownOnChange',
				bubbles: true,
				cancelable: true,
				composed: true,
				docs: {
					tags: [],
					text: 'Emitted when a keyboard input or mouse event occurs when a dropdown list has been changed.',
				},
				complexType: {
					original: 'any',
					resolved: 'any',
					references: {},
				},
			},
			{
				method: 'dropdownOnBlur',
				name: 'dropdownOnBlur',
				bubbles: true,
				cancelable: true,
				composed: true,
				docs: {
					tags: [],
					text: 'Emitted when a keyboard input event occurs when a dropdown list has lost focus.',
				},
				complexType: {
					original: 'any',
					resolved: 'any',
					references: {},
				},
			},
			{
				method: 'dropdownOnFocus',
				name: 'dropdownOnFocus',
				bubbles: true,
				cancelable: true,
				composed: true,
				docs: {
					tags: [],
					text: 'Emitted when a keyboard input event occurs when a dropdown list has gained focus.',
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
				propName: 'options',
				methodName: 'validateOptions',
			},
			{
				propName: 'options',
				methodName: 'parseOptions',
			},
			{
				propName: 'caption',
				methodName: 'updateCaptionState',
			},
			{
				propName: 'hintText',
				methodName: 'parseHintText',
			},
			{
				propName: 'language',
				methodName: 'updateLanguage',
			},
			{
				propName: 'hintExpander',
				methodName: 'parseHintExpander',
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
