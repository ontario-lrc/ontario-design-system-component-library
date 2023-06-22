import { Event } from '../../stencil-public-runtime';
import { DropdownOption } from './dropdown-option.interface';
import { Dropdown } from './dropdown.interface';
import { HintExpander } from '../ontario-hint-expander/hint-expander.interface';
import { Hint } from '../../utils/common/common.interface';
import { Caption } from '../../utils/common/input-caption/caption.interface';
import { Language } from '../../utils/common/language-types';
import { InputFocusBlurEvent, EventType, InputChangeEvent } from '../../utils/events/event-handler.interface';
export declare class OntarioDropdownList implements Dropdown {
	element: HTMLElement;
	hintTextRef: HTMLOntarioHintTextElement | undefined;
	/**
	 * The text to display for the dropdown list label.
	 *
	 * @example
	 * <ontario-dropdown-list
	 *   name="ontario-dropdown-list"
	 *   caption='{
	 *     "captionText": "Label",
	 *     "captionType": "heading",
	 *   }'
	 *   ...>
	 * </ontario-dropdown-list>
	 */
	caption: Caption | string;
	/**
	 * The language of the component.
	 * This is used for translations, and is by default set through event listeners checking for a language property from the header. If no language is passed, it will default to English.
	 */
	language?: Language;
	/**
	 * The name for the dropdown list. The name value is used to reference form data after a form is submitted.
	 */
	name: string;
	/**
	 * The ID for the dropdown list.
	 * If no ID is provided, one will be generated.
	 */
	elementId?: string;
	/**
	 * The options for dropdown list.
	 *
	 * Each option will be passed in through an object in the options array.
	 * This can either be passed in as an object directly (if using react), or as a string in HTML.
	 *
	 * In the example below, the options are being passed in as a string and there are three dropdown options displayed.
	 *
	 * @example
	 * <ontario-dropdown-list
	 *   caption='{
	 *     "captionText": "Label",
	 *     "captionType": "heading",
	 *   }'
	 *   name="ontario-dropdown-list"
	 *   options='[
	 *     {
	 *       "value": "dropdown-option-1",
	 *       "label": "Option 1",
	 *       "selected": "true"
	 *     },
	 *     {
	 *       "value": "dropdown-option-2",
	 *       "label": "Option 2"
	 *     },
	 *     {
	 *       "value": "dropdown-option-3",
	 *       "label": "Option 3"
	 *     }
	 *   ]'
	 * >
	 * </ontario-dropdown-list>
	 */
	options: string | DropdownOption[];
	/**
	 * This is used to determine whether the dropdown list is required or not.
	 * This prop also gets passed to the InputCaption utility to display either an optional or required flag in the label.
	 * If no prop is set, it will default to false (optional).
	 */
	required?: boolean;
	/**
	 * This prop is used to determine whether or not the initial option displayed is empty.
	 * If set to `true`, it will render the default “select” text.
	 * If set to a string, it will render the string value.
	 *
	 * @example
	 * <ontario-dropdown-list is-empty-start-option="true"></ontario-dropdown-list>
	 *
	 * or
	 *
	 * <ontario-dropdown-list is-empty-start-option="Please select"></ontario-dropdown-list>
	 */
	isEmptyStartOption?: boolean | string;
	/**
	 * Used to include the ontario-hint-text component for the dropdown list.
	 * This is optional.
	 */
	hintText?: string | Hint;
	/**
	 * Used to include the ontario-hint-expander component for the dropdown list component.
	 * This is passed in as an object with key-value pairs.
	 *
	 * This is optional.
	 *
	 * @example
	 * <ontario-dropdown-list
	 *   caption='{
	 *     "caption": "What province do you live in?",
	 *     "captionType": "heading",
	 *   }
	 *   name="ontario-dropdown-list"
	 *   options='[
	 *     {
	 *       "value": "dropdown-option-1",
	 *       "label": "Option 1",
	 *       "selected": "true"
	 *     },
	 *     {
	 *       "value": "dropdown-option-2",
	 *       "label": "Option 2"
	 *     },
	 *     {
	 *       "value": "dropdown-option-3",
	 *       "label": "Option 3"
	 *     }
	 *   ]'
	 *   hint-expander='{
	 *    "hint": "Hint expander for the dropdown list",
	 *    "content": "Example hint expander content for the dropdown list."
	 *   }'
	 * >
	 * </ontario-dropdown-list>
	 */
	hintExpander?: HintExpander | string;
	/**
	 * Used to add a custom function to the dropdown onChange event.
	 */
	customOnChange?: Function;
	/**
	 * Used to add a custom function to the dropdown onBlur event.
	 */
	customOnBlur?: Function;
	/**
	 * Used to add a custom function to the dropdown onFocus event.
	 */
	customOnFocus?: Function;
	/**
	 * Used for the `aria-describedby` value of the dropdown list. This will match with the id of the hint text.
	 */
	hintTextId: string | null | undefined;
	/**
	 * Instantiate an InputCaption object for internal logic use
	 */
	private captionState;
	/**
	 * The options are re-assigned to the internalOptions array.
	 */
	private internalOptions;
	/**
	 * The hint text options are re-assigned to the internalHintText array.
	 */
	private internalHintText;
	/**
	 * The hint expander options are re-assigned to the internalHintExpander array.
	 */
	private internalHintExpander;
	translations: any;
	/**
	 * Emitted when a keyboard input or mouse event occurs when a dropdown list has been changed.
	 */
	dropdownOnChange: InputChangeEvent;
	/**
	 * Emitted when a keyboard input event occurs when a dropdown list has lost focus.
	 */
	dropdownOnBlur: InputFocusBlurEvent;
	/**
	 * Emitted when a keyboard input event occurs when a dropdown list has gained focus.
	 */
	dropdownOnFocus: InputFocusBlurEvent;
	/**
	 * This listens for the `setAppLanguage` event sent from the test language toggler when it is is connected to the DOM. It is used for the initial language when the input component loads.
	 */
	handleSetAppLanguage(event: CustomEvent<Language>): void;
	handleHeaderLanguageToggled(event: CustomEvent<Language>): void;
	validateName(newValue: string): void;
	validateOptions(newValue: object): void;
	/**
	 * Watch for changes to the `options` prop.
	 *
	 * If an `options` prop is passed, it will be parsed (if it is a string), and the result will be set to the `internalOptions` state. The result will be run through a validation function.
	 */
	parseOptions(): void;
	/**
	 * Watch for changes to the `caption` prop.
	 *
	 * The caption will be run through the InputCaption constructor to convert it to the correct format, and set the result to the `captionState` state.
	 * @param newValue: Caption | string
	 */
	private updateCaptionState;
	/**
	 * Watch for changes to the `hintText` prop.
	 *
	 * If a `hintText` prop is passed, the `constructHintTextObject` function will convert it to the correct format, and set the result to the `internalHintText` state.
	 */
	private parseHintText;
	/**
	 * Watch for changes to the `language` prop to render either the English or French translations
	 */
	updateLanguage(): void;
	/**
	 * Watch for changes to the `hintExpander` prop.
	 *
	 * If a `hintExpander` prop is passed, it will be parsed (if it is a string), and the result will be set to the `internalHintExpander` state.
	 */
	private parseHintExpander;
	/**
	 * Function to handle dropdown list events and the information pertaining to the dropdown list to emit.
	 */
	handleEvent: (ev: Event, eventType: EventType) => void;
	getId(): string;
	/**
	 * This function will set a selected key to `false` for each dropdown if no selected value is passed.
	 *
	 * It will also pass a warning to the user if multiple `true` selected values are passed.
	 *
	 * @param options
	 * @returns options
	 */
	private validateSelectedOption;
	private getDropdownArrow;
	private getClass;
	/**
	 * If a `hintText` prop is passed, the id generated from it will be set to the internal `hintTextId` state to match with the select `aria-describedBy` attribute.
	 */
	componentDidLoad(): Promise<void>;
	componentWillLoad(): void;
	render(): any;
}
