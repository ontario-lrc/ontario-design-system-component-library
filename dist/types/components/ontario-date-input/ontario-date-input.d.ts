import { EventEmitter } from '../../stencil-public-runtime';
import { Language } from '../../utils/common/language-types';
import { DateInputFieldType, DateInputPlaceholder, DateValidatorReturnType } from './ontario-date-input-interface';
import { Caption } from '../../utils/common/input-caption/caption.interface';
export declare class OntarioDateInput {
	element: HTMLElement;
	internals: ElementInternals;
	/**
	 * The language of the component.
	 * This is used for translations, and is by default set through event listeners checking for a language property from the header. If none are passed, it will default to English.
	 */
	language?: Language;
	/**
	 * A boolean value to determine whether or not the date input is required.
	 *
	 * This is optional. If no prop is passed, it will default to `false`.
	 */
	required?: boolean;
	/**
	 * An object value used to set the placeholder text for the day, month and year input fields. Any combination of the three input fields (i.e day, month, year)
	 * of the date component can be overridden.
	 *
	 * This is optional. If no prop is passed, it will not display any placeholder text.
	 */
	placeholder?: DateInputPlaceholder | string;
	/**
	 * The text to display as the input label
	 *
	 * @example
	 * <ontario-date-input
	 *   caption='{
	 *     "captionText": "Exact Date",
	 *     "captionType": "heading",
	 *   }
	 *   required="true"
	 *   ...>
	 * </ontario-date-input>
	 */
	caption: Caption | string;
	/**
	 * The unique identifier of the input. This is optional - if no ID is passed, one will be generated.
	 */
	elementId?: string;
	/**
	 * A number value indicating minimum value allowed for year input field of the date component.
	 *
	 * This is optional. If no prop is passed, it will default to `999`.
	 */
	minYear?: number;
	/**
	 * A number value indicating maximum value allowed for year input field of the date component.
	 *
	 * This is optional. If no prop is passed, it will default to `9999`.
	 */
	maxYear?: number;
	/**
	 * Used to include the ontario-hint-text component for the date input group.
	 *
	 * This is optional.
	 */
	hintText?: string;
	/**
	 * An array value used to display date options. For example, only the day and month fields can be displayed by
	 * specifying the dateOptions as `["day", "month"]`, etc.
	 *
	 * This is optional. If no prop for `dateOptions` is passed, it will default to `["day", "month", "year"]`.
	 */
	dateOptions?: string | Array<DateInputFieldType>;
	/**
	 * A function used to override internal date validation logic, which takes three arguments (i.e day, month and year) and returns
	 * an object of type `DateValidatorReturnType`
	 *
	 * This is optional. If no prop for `dateValidator` is passed, it will default to internal validation function to validate
	 * the date input.
	 */
	dateValidator?: (day: string, month: string, year: string) => DateValidatorReturnType;
	/**
	 * Emitted when an `input` event occurs within the component.
	 */
	inputOnInput: EventEmitter<{
		value: string;
		fieldType: 'day' | 'month' | 'year';
	}>;
	/**
	 * Emitted when a `change` event occurs within the component.
	 */
	inputOnChange: EventEmitter<{
		value: string;
		fieldType: 'day' | 'month' | 'year';
	}>;
	/**
	 * Emitted when a keyboard input event occurs when an input has lost focus.
	 */
	inputOnBlur: EventEmitter<'day' | 'month' | 'year'>;
	/**
	 * Emitted when a keyboard input event occurs when an input has gained focus.
	 */
	inputOnFocus: EventEmitter<'day' | 'month' | 'year'>;
	/**
	 * Emitted when an error message is reported to the component.
	 */
	inputErrorOccurred: EventEmitter<{
		inputId: string;
		errorMessage: string;
	}>;
	broadcastInputErrorOccurredEvent(): void;
	/**
	 * This listens for the `setAppLanguage` event sent from the test language toggler when it is is connected to the DOM. It is used for the initial language when the input component loads.
	 */
	handleSetAppLanguage(event: CustomEvent<Language>): void;
	handleHeaderLanguageToggled(event: CustomEvent<Language>): void;
	handleComponentBlur(): void;
	private translations;
	private captionState;
	private isDateTyped;
	private dayInvalid;
	private monthInvalid;
	private yearInvalid;
	private errorMessage;
	private day;
	private month;
	private year;
	private placeholderState;
	private dateOptionsState;
	/**
	 * Watch for changes to the `caption` prop.
	 *
	 * The caption will be run through the InputCaption constructor to convert it to the correct format, and set the result to the `captionState` state.
	 * @param newValue: Caption | string
	 */
	private updateCaptionState;
	/**
	 * Watch for changes in the `language` prop to render either the English or French translations
	 */
	updateLanguage(): void;
	private processPlaceholder;
	private processDateOptions;
	private parseOptions;
	private isInvalidDate;
	private resetErrorState;
	private updateDateState;
	private handleDateUpdates;
	private handleDateInput;
	private handleDateChanged;
	private handleDateFocus;
	private handleDateBlur;
	private getLanguage;
	private getCaption;
	private getId;
	private getHintTextId;
	private getInputIds;
	componentWillLoad(): void;
	render(): any;
}
