import { h, proxyCustomElement, HTMLElement, createEvent } from '@stencil/core/internal/client';
import { v as validateLanguage } from './validation-functions.js';
import { t as translations } from './global.i18n.js';
import { I as Input$1 } from './input.js';
import { i as isEmpty, a as isNumber } from './utils.js';
import { E as ErrorMessage } from './error-message.js';
import { a as ConsoleType, C as ConsoleMessageClass } from './console-message.js';
import { e as emitEvent, I as InputCaption } from './event-handler.js';
import { d as defineCustomElement$2 } from './ontario-icon-alert-error2.js';
import { v as v4 } from './v4.js';

const Input = ({
	id,
	type,
	label,
	accessibilityLabel,
	placeholder,
	onInput,
	onChange,
	onFocus,
	onBlur,
	ariaDescribedBy,
	error = false,
	required = false,
}) => {
	const handleInputInput = (event) => {
		var _a, _b;
		const newValue =
			(_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
		onInput(newValue, type);
	};
	const handleInputChange = (event) => {
		var _a, _b;
		const newValue =
			(_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
		onChange(newValue, type);
	};
	const handleInputFocus = () => {
		onFocus(type);
	};
	const handleInputBlur = () => {
		onBlur(type);
	};
	return h(
		'div',
		{ class: `ontario-date__group-input ${error ? 'ontario-date--error' : ''}` },
		h('label', { htmlFor: id }, label, h('span', { class: 'ontario-show-for-sr' }, '(', accessibilityLabel, ')')),
		h(Input$1, {
			className: 'ontario-input ontario-input--4-char-width',
			type: 'text',
			inputMode: 'numeric',
			id: id,
			required: !!required,
			placeholder: placeholder,
			onInput: handleInputInput,
			onChange: handleInputChange,
			onFocus: handleInputFocus,
			onBlur: handleInputBlur,
			ariaInvalid: error,
			ariaDescribedBy: ariaDescribedBy,
		}),
	);
};

const DAY_MIN_VALUE = 1;
const DAY_MAX_VALUE = 31;
const MONTH_MIN_VALUE = 1;
const MONTH_MAX_VALUE = 12;
const YEAR_MIN_VALUE = 999;
const YEAR_MAX_VALUE = 9999;

/*
 * Day field should be a number, not negative, no greater than “31”
 */
const isInvalidDay = (value) => {
	if (!isNumber(value)) {
		return true;
	}
	const day = Number(value);
	return day < DAY_MIN_VALUE || day > DAY_MAX_VALUE;
};
/*
 * Month field should be a number, not negative, no greater than “12”
 */
const isInvalidMonth = (value) => {
	if (!isNumber(value)) {
		return true;
	}
	const month = Number(value);
	return month < MONTH_MIN_VALUE || month > MONTH_MAX_VALUE;
};
/*
 * Year field should be a number, not negative, at length at least 4 digits
 */
const isInvalidYear = (value, minYear = YEAR_MIN_VALUE, maxYear = YEAR_MAX_VALUE) => {
	if (!isNumber(value)) {
		return true;
	}
	const year = Number(value);
	return year <= minYear || year > maxYear;
};
/**
 * Helper function to get error message for birthdate validation
 */
const getDateErrorMessage = ({
	dayValue,
	monthValue,
	yearValue,
	errorMessages,
	minYear,
	maxYear,
	dayVisible,
	monthVisible,
	yearVisible,
}) => {
	const {
		emptyDay,
		emptyMonth,
		emptyYear,
		emptyDayAndMonth,
		emptyDayAndYear,
		emptyMonthAndYear,
		invalidDate,
		invalidDay,
		invalidMonth,
		invalidYear,
	} = errorMessages;
	let error = '';
	let dayInvalid = false;
	let monthInvalid = false;
	let yearInvalid = false;
	const isDayEmpty = dayVisible && isEmpty(dayValue);
	const isMonthEmpty = monthVisible && isEmpty(monthValue);
	const isYearEmpty = yearVisible && isEmpty(yearValue);
	/*
	 *  If one ore more fields are valid but others are empty:
	 *  1 field empty:
	 *  Day as empty - “Enter the day.”
	 *  Month as empty - “Enter the month.”
	 *  Year as empty - “Enter the year.”
	 *  2 fields empty:
	 *  Month and day empty - “Enter the month and day.”
	 *  Year and day empty - “Enter the year and day.”
	 *  Year and month empty - “Enter the year and month.”
	 */
	if (isDayEmpty && isMonthEmpty && isYearEmpty) {
		error = invalidDate;
		dayInvalid = true;
		monthInvalid = true;
		yearInvalid = true;
	} else if (isDayEmpty && isMonthEmpty) {
		error = emptyDayAndMonth;
		dayInvalid = true;
		monthInvalid = true;
	} else if (isDayEmpty && isYearEmpty) {
		error = emptyDayAndYear;
		dayInvalid = true;
		yearInvalid = true;
	} else if (isMonthEmpty && isYearEmpty) {
		error = emptyMonthAndYear;
		yearInvalid = true;
		monthInvalid = true;
	} else if (isDayEmpty) {
		error = emptyDay;
		dayInvalid = true;
	} else if (isMonthEmpty) {
		error = emptyMonth;
		monthInvalid = true;
	} else if (isYearEmpty) {
		error = emptyYear;
		yearInvalid = true;
	}
	const isDayInvalid = dayVisible && isInvalidDay(dayValue);
	const isMonthInvalid = monthVisible && isInvalidMonth(monthValue);
	const isYearInvalid = yearVisible && isInvalidYear(yearValue, minYear, maxYear);
	/*
	 *  If only one error, specify where the error occurs
	 *  E.g. “Enter a valid day.”, “Enter a valid month.” Or “Enter a valid year.”
	 *  If 2 or more fields have error (or all 3), say “Enter a valid date.”
	 *  If one or more fields are invalid but the others are empty say: “Enter a valid date.”
	 */
	if (isEmpty(error)) {
		if (isDayInvalid && isMonthInvalid && isYearInvalid) {
			error = invalidDate;
			dayInvalid = true;
			monthInvalid = true;
			yearInvalid = true;
		} else if (isDayInvalid && isMonthInvalid) {
			error = invalidDate;
			dayInvalid = true;
			monthInvalid = true;
		} else if (isDayInvalid && isYearInvalid) {
			error = invalidDate;
			dayInvalid = true;
			yearInvalid = true;
		} else if (isMonthInvalid && isYearInvalid) {
			error = invalidDate;
			monthInvalid = true;
			yearInvalid = true;
		} else if (isYearInvalid) {
			error = invalidYear;
			yearInvalid = true;
		} else if (isMonthInvalid) {
			error = invalidMonth;
			monthInvalid = true;
		} else if (isDayInvalid) {
			error = invalidDay;
			dayInvalid = true;
		}
	}
	return { errorMessage: error, dayInvalid, monthInvalid, yearInvalid };
};

const getVisibleDateFields = (dateOptions) => {
	const dayVisible = dateOptions.includes('day');
	const monthVisible = dateOptions.includes('month');
	const yearVisible = dateOptions.includes('year');
	return { dayVisible, monthVisible, yearVisible };
};

const ontarioDateInputCss =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1>.ontario-label--heading,.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1>.ontario-label--heading,.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1,h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1>.ontario-label--heading,.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1,h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul[class*=columns-] li:last-child,ol[class*=columns-] li:last-child{padding-bottom:0.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend--large{font-size:1.75rem}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-label{cursor:pointer;color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;line-height:1.5;margin:0 0 1rem 0;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-label{font-size:1.125rem;line-height:1.56}}.ontario-label--large{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2;max-width:26.25em}@media screen and (max-width: 40em){.ontario-label--large{font-size:1.4375rem;line-height:1.39}}h1>.ontario-label--heading{display:inline-block;margin:0}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-input:focus,.ontario-input:active{box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:box-shadow 0.1s ease-in-out}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;width:100%;padding:0.625rem 1rem;transition:box-shadow 0.1s ease-in-out}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}.ontario-form-group:last-of-type{margin-bottom:2.5rem}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-error-messaging{display:flex;align-items:flex-start;margin:-0.25rem 0 0.5rem 0;color:#D81A21;max-width:48rem}.ontario-error-messaging__content{margin-left:0.5rem}.ontario-input__error{border-color:#D81A21 !important}.ontario-error__hidden{display:none}.ontario-date__group{display:flex}.ontario-date__group label{font-weight:600}.ontario-date__group input{margin-top:1rem}.ontario-date__group-input{display:flex;flex-direction:column;margin-right:1.5rem}.ontario-date--error input{border:0.125rem solid #CD0000}';
const OntarioDateInputStyle0 = ontarioDateInputCss;

const OntarioDateInput$1 = /*@__PURE__*/ proxyCustomElement(
	class OntarioDateInput extends HTMLElement {
		constructor() {
			super();
			this.__registerHost();
			this.__attachShadow();
			this.inputOnInput = createEvent(this, 'inputOnInput', 7);
			this.inputOnChange = createEvent(this, 'inputOnChange', 7);
			this.inputOnBlur = createEvent(this, 'inputOnBlur', 7);
			this.inputOnFocus = createEvent(this, 'inputOnFocus', 7);
			this.inputErrorOccurred = createEvent(this, 'inputErrorOccurred', 7);
			this.internals = this.attachInternals();
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
			this.elementId = (_a = this.elementId) !== null && _a !== void 0 ? _a : v4();
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
		static get formAssociated() {
			return true;
		}
		get element() {
			return this;
		}
		static get watchers() {
			return {
				errorMessage: ['broadcastInputErrorOccurredEvent'],
				caption: ['updateCaptionState'],
				language: ['updateLanguage'],
			};
		}
		static get style() {
			return OntarioDateInputStyle0;
		}
	},
	[
		65,
		'ontario-date-input',
		{
			language: [1025],
			required: [4],
			placeholder: [1],
			caption: [1],
			elementId: [1025, 'element-id'],
			minYear: [2, 'min-year'],
			maxYear: [2, 'max-year'],
			hintText: [1, 'hint-text'],
			dateOptions: [1, 'date-options'],
			dateValidator: [16],
			translations: [32],
			captionState: [32],
			isDateTyped: [32],
			dayInvalid: [32],
			monthInvalid: [32],
			yearInvalid: [32],
			errorMessage: [32],
			day: [32],
			month: [32],
			year: [32],
			placeholderState: [32],
			dateOptionsState: [32],
		},
		[
			[8, 'setAppLanguage', 'handleSetAppLanguage'],
			[8, 'headerLanguageToggled', 'handleHeaderLanguageToggled'],
			[2, 'blur', 'handleComponentBlur'],
		],
		{
			errorMessage: ['broadcastInputErrorOccurredEvent'],
			caption: ['updateCaptionState'],
			language: ['updateLanguage'],
		},
	],
);
function defineCustomElement$1() {
	if (typeof customElements === 'undefined') {
		return;
	}
	const components = ['ontario-date-input', 'ontario-icon-alert-error'];
	components.forEach((tagName) => {
		switch (tagName) {
			case 'ontario-date-input':
				if (!customElements.get(tagName)) {
					customElements.define(tagName, OntarioDateInput$1);
				}
				break;
			case 'ontario-icon-alert-error':
				if (!customElements.get(tagName)) {
					defineCustomElement$2();
				}
				break;
		}
	});
}

const OntarioDateInput = OntarioDateInput$1;
const defineCustomElement = defineCustomElement$1;

export { OntarioDateInput, defineCustomElement };

//# sourceMappingURL=ontario-date-input.js.map
