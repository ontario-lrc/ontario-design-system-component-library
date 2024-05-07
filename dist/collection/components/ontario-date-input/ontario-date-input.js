import { h } from '@stencil/core';
import { v4 as uuid } from 'uuid';
import { validateLanguage } from '../../utils/validation/validation-functions';
import { translations } from '../../translations';
import { Input } from './components';
import { getDateErrorMessage, getVisibleDateFields } from './utils';
import { ErrorMessage } from '../../utils/components/error-message/error-message';
import { ConsoleMessageClass } from '../../utils/console-message/console-message';
import { ConsoleType } from '../../utils/console-message/console-message.enum';
import { InputCaption } from '../../utils/common/input-caption/input-caption';
import { emitEvent } from '../../utils/events/event-handler';
export class OntarioDateInput {
	constructor() {
		this.isInvalidDate = () => {
			return this.dayInvalid || this.monthInvalid || this.yearInvalid;
		};
		this.resetErrorState = () => {
			if (!this.isInvalidDate()) {
				return;
			}
			this.dayInvalid = false;
			this.monthInvalid = false;
			this.yearInvalid = false;
			this.errorMessage = '';
		};
		this.updateDateState = (value, inputFieldType) => {
			switch (inputFieldType) {
				case 'day':
					this.day = value;
					break;
				case 'month':
					this.month = value;
					break;
				case 'year':
					this.year = value;
					break;
			}
		};
		this.handleDateUpdates = (value, fieldType) => {
			var _a, _b;
			// set boolean indicating user interaction with the component for validation
			if (!this.isDateTyped) {
				this.isDateTyped = true;
			}
			// reset error state when user starts typing
			this.resetErrorState();
			// update date state
			this.updateDateState(value, fieldType);
			// TODO: verify are all the values numbers?
			if (this.year && this.month && this.day) {
				const desiredDate = new Date(
					Date.UTC(parseInt(this.year), parseInt(this.month) - 1, parseInt(this.day), 0, 0, 0, 0),
				);
				(_b = (_a = this.internals) === null || _a === void 0 ? void 0 : _a.setFormValue) === null || _b === void 0
					? void 0
					: _b.call(_a, desiredDate.toISOString());
			}
		};
		this.handleDateInput = (value, fieldType) => {
			this.handleDateUpdates(value, fieldType);
			// emit date change event
			this.inputOnInput.emit({ value, fieldType });
		};
		this.handleDateChanged = (value, fieldType) => {
			this.handleDateUpdates(value, fieldType);
			// emit date change event
			this.inputOnChange.emit({ value, fieldType });
			// emit change event
			emitEvent(this.element, 'change', { value, fieldType });
		};
		this.handleDateFocus = (fieldType) => {
			// emit date field focus event
			this.inputOnFocus.emit(fieldType);
		};
		this.handleDateBlur = (fieldType) => {
			// emit date field focus event
			this.inputOnBlur.emit(fieldType);
		};
		this.language = undefined;
		this.required = false;
		this.placeholder = undefined;
		this.caption = undefined;
		this.elementId = undefined;
		this.minYear = undefined;
		this.maxYear = undefined;
		this.hintText = undefined;
		this.dateOptions = ['day', 'month', 'year'];
		this.dateValidator = undefined;
		this.translations = translations;
		this.captionState = undefined;
		this.isDateTyped = false;
		this.dayInvalid = false;
		this.monthInvalid = false;
		this.yearInvalid = false;
		this.errorMessage = undefined;
		this.day = '';
		this.month = '';
		this.year = '';
		this.placeholderState = undefined;
		this.dateOptionsState = undefined;
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
	 * This listens for the `setAppLanguage` event sent from the test language toggler when it is is connected to the DOM. It is used for the initial language when the input component loads.
	 */
	handleSetAppLanguage(event) {
		if (!this.language) {
			this.language = validateLanguage(event);
		}
	}
	handleHeaderLanguageToggled(event) {
		this.language = validateLanguage(event);
	}
	handleComponentBlur() {
		const { day, month, year, minYear, maxYear, dateValidator, dateOptionsState } = this;
		const { dayVisible, monthVisible, yearVisible } = getVisibleDateFields(dateOptionsState);
		// if user has not interacted with the component, skip validation
		if (!this.isDateTyped) {
			return;
		}
		const errorMessages = translations.dateInput.error[this.getLanguage()];
		const { dayInvalid, monthInvalid, yearInvalid, errorMessage } = dateValidator
			? dateValidator(day, month, year)
			: getDateErrorMessage({
					dayValue: day,
					monthValue: month,
					yearValue: year,
					errorMessages,
					minYear,
					maxYear,
					dayVisible,
					monthVisible,
					yearVisible,
			  });
		this.dayInvalid = dayInvalid;
		this.monthInvalid = monthInvalid;
		this.yearInvalid = yearInvalid;
		this.errorMessage = errorMessage;
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
	 * Watch for changes in the `language` prop to render either the English or French translations
	 */
	updateLanguage() {
		this.updateCaptionState(this.caption);
	}
	processPlaceholder() {
		this.parseOptions(this.placeholder);
	}
	processDateOptions() {
		this.parseOptions(this.dateOptions);
	}
	parseOptions(options) {
		const isString = typeof options === 'string';
		if (!options) {
			return;
		}
		try {
			if (options === this.placeholder) {
				this.placeholderState = isString ? JSON.parse(options) : options;
			} else if (options === this.dateOptions) {
				this.dateOptionsState = isString ? JSON.parse(options) : options;
			}
		} catch (error) {
			const message = new ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addRegularText(' failed to parse props for ')
				.addMonospaceText('<ontario-date-input>')
				.addRegularText(' in ')
				.addMonospaceText('parseOptions()')
				.addRegularText(' method \n ')
				.addMonospaceText(error.stack)
				.printMessage(ConsoleType.Error);
		}
	}
	getLanguage() {
		var _a;
		return (_a = this.language) !== null && _a !== void 0 ? _a : 'en';
	}
	getCaption() {
		var _a;
		const language = this.getLanguage();
		const captionText = translations.dateInput.caption[language];
		return (_a = this.caption) !== null && _a !== void 0 ? _a : { captionText, captionType: 'default' };
	}
	getId() {
		var _a;
		return (_a = this.elementId) !== null && _a !== void 0 ? _a : '';
	}
	getHintTextId() {
		return `date-input-hint-${this.getId()}`;
	}
	getInputIds() {
		const id = this.getId();
		const dayId = `day-${id}`;
		const monthId = `month-${id}`;
		const yearId = `year-${id}`;
		return { dayId, monthId, yearId };
	}
	componentWillLoad() {
		var _a;
		this.processPlaceholder();
		this.processDateOptions();
		this.updateCaptionState(this.getCaption());
		this.elementId = (_a = this.elementId) !== null && _a !== void 0 ? _a : uuid();
		this.language = validateLanguage(this.language);
	}
	render() {
		const { dateOptionsState, required, translations, hintText, placeholderState } = this;
		const language = this.getLanguage();
		const dateStrings = translations.dateInput;
		const placeholderText = placeholderState !== null && placeholderState !== void 0 ? placeholderState : {};
		const { dayVisible, monthVisible, yearVisible } = getVisibleDateFields(dateOptionsState);
		const { dayId, monthId, yearId } = this.getInputIds();
		const hintTextId = this.getHintTextId();
		return h(
			'div',
			{ key: '0a751d8a1bd2e3a068e1683d046be12bfaf5ef4c', class: 'ontario-form-group' },
			h(
				'fieldset',
				{ key: '2abea67d43b6b831d9a297b1632cd74d0cb8793b', role: 'group', class: 'ontario-fieldset' },
				this.captionState.getCaption(),
				!!hintText && h('p', { id: hintTextId, class: 'ontario-hint' }, hintText),
				h(ErrorMessage, {
					key: '2b290216a519f540d526832b55777c356924cc2f',
					message: this.errorMessage,
					error: this.isInvalidDate(),
				}),
				h(
					'div',
					{ key: 'a380db549b58eadf8dfda3936b4c3714db5b72b0', class: 'ontario-date__group' },
					yearVisible &&
						h(Input, {
							id: yearId,
							type: 'year',
							label: dateStrings.year.label[language],
							accessibilityLabel: dateStrings.year.accessibility[language],
							required: !!required,
							error: this.yearInvalid,
							placeholder: placeholderText.year,
							onInput: this.handleDateInput,
							onChange: this.handleDateChanged,
							onBlur: this.handleDateBlur,
							onFocus: this.handleDateFocus,
							ariaDescribedBy: hintTextId,
						}),
					monthVisible &&
						h(Input, {
							id: monthId,
							type: 'month',
							label: dateStrings.month.label[language],
							accessibilityLabel: dateStrings.month.accessibility[language],
							required: !!required,
							error: this.monthInvalid,
							placeholder: placeholderText.month,
							onInput: this.handleDateInput,
							onChange: this.handleDateChanged,
							onBlur: this.handleDateBlur,
							onFocus: this.handleDateFocus,
							ariaDescribedBy: hintTextId,
						}),
					dayVisible &&
						h(Input, {
							id: dayId,
							type: 'day',
							label: dateStrings.day.label[language],
							accessibilityLabel: dateStrings.day.accessibility[language],
							required: !!required,
							error: this.dayInvalid,
							placeholder: placeholderText.day,
							onInput: this.handleDateInput,
							onChange: this.handleDateChanged,
							onBlur: this.handleDateBlur,
							onFocus: this.handleDateFocus,
							ariaDescribedBy: hintTextId,
						}),
				),
			),
		);
	}
	static get is() {
		return 'ontario-date-input';
	}
	static get encapsulation() {
		return 'shadow';
	}
	static get formAssociated() {
		return true;
	}
	static get originalStyleUrls() {
		return {
			$: ['ontario-date-input.scss'],
		};
	}
	static get styleUrls() {
		return {
			$: ['ontario-date-input.css'],
		};
	}
	static get properties() {
		return {
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
					text: 'A boolean value to determine whether or not the date input is required.\n\nThis is optional. If no prop is passed, it will default to `false`.',
				},
				attribute: 'required',
				reflect: false,
				defaultValue: 'false',
			},
			placeholder: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'DateInputPlaceholder | string',
					resolved:
						'string | undefined | { day?: string | undefined; month?: string | undefined; year?: string | undefined; }',
					references: {
						DateInputPlaceholder: {
							location: 'import',
							path: './ontario-date-input-interface',
							id: 'src/components/ontario-date-input/ontario-date-input-interface.ts::DateInputPlaceholder',
						},
					},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'An object value used to set the placeholder text for the day, month and year input fields. Any combination of the three input fields (i.e day, month, year)\nof the date component can be overridden.\n\nThis is optional. If no prop is passed, it will not display any placeholder text.',
				},
				attribute: 'placeholder',
				reflect: false,
			},
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
							text: '<ontario-date-input\n  caption=\'{\n    "captionText": "Exact Date",\n    "captionType": "heading",\n  }\n  required="true"\n  ...>\n</ontario-date-input>',
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
			minYear: {
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
					text: 'A number value indicating minimum value allowed for year input field of the date component.\n\nThis is optional. If no prop is passed, it will default to `999`.',
				},
				attribute: 'min-year',
				reflect: false,
			},
			maxYear: {
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
					text: 'A number value indicating maximum value allowed for year input field of the date component.\n\nThis is optional. If no prop is passed, it will default to `9999`.',
				},
				attribute: 'max-year',
				reflect: false,
			},
			hintText: {
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
					text: 'Used to include the ontario-hint-text component for the date input group.\n\nThis is optional.',
				},
				attribute: 'hint-text',
				reflect: false,
			},
			dateOptions: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'string | Array<DateInputFieldType>',
					resolved: 'DateInputFieldType[] | string | undefined',
					references: {
						Array: {
							location: 'global',
							id: 'global::Array',
						},
						DateInputFieldType: {
							location: 'import',
							path: './ontario-date-input-interface',
							id: 'src/components/ontario-date-input/ontario-date-input-interface.ts::DateInputFieldType',
						},
					},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'An array value used to display date options. For example, only the day and month fields can be displayed by\nspecifying the dateOptions as `["day", "month"]`, etc.\n\nThis is optional. If no prop for `dateOptions` is passed, it will default to `["day", "month", "year"]`.',
				},
				attribute: 'date-options',
				reflect: false,
				defaultValue: "['day', 'month', 'year']",
			},
			dateValidator: {
				type: 'unknown',
				mutable: false,
				complexType: {
					original: '(day: string, month: string, year: string) => DateValidatorReturnType',
					resolved: '((day: string, month: string, year: string) => DateValidatorReturnType) | undefined',
					references: {
						DateValidatorReturnType: {
							location: 'import',
							path: './ontario-date-input-interface',
							id: 'src/components/ontario-date-input/ontario-date-input-interface.ts::DateValidatorReturnType',
						},
					},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'A function used to override internal date validation logic, which takes three arguments (i.e day, month and year) and returns\nan object of type `DateValidatorReturnType`\n\nThis is optional. If no prop for `dateValidator` is passed, it will default to internal validation function to validate\nthe date input.',
				},
			},
		};
	}
	static get states() {
		return {
			translations: {},
			captionState: {},
			isDateTyped: {},
			dayInvalid: {},
			monthInvalid: {},
			yearInvalid: {},
			errorMessage: {},
			day: {},
			month: {},
			year: {},
			placeholderState: {},
			dateOptionsState: {},
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
					text: 'Emitted when an `input` event occurs within the component.',
				},
				complexType: {
					original: "{\n\t\tvalue: string;\n\t\tfieldType: 'day' | 'month' | 'year';\n\t}",
					resolved: '{ value: string; fieldType: "day" | "month" | "year"; }',
					references: {},
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
					text: 'Emitted when a `change` event occurs within the component.',
				},
				complexType: {
					original: "{\n\t\tvalue: string;\n\t\tfieldType: 'day' | 'month' | 'year';\n\t}",
					resolved: '{ value: string; fieldType: "day" | "month" | "year"; }',
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
					original: "'day' | 'month' | 'year'",
					resolved: '"day" | "month" | "year"',
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
					original: "'day' | 'month' | 'year'",
					resolved: '"day" | "month" | "year"',
					references: {},
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
				propName: 'errorMessage',
				methodName: 'broadcastInputErrorOccurredEvent',
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
//# sourceMappingURL=ontario-date-input.js.map
