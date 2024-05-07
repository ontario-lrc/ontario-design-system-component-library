import { EventEmitter } from '../../stencil-public-runtime';
import { CheckboxOption } from './checkbox-option.interface';
import { Checkboxes } from './checkboxes.interface';
import { HintExpander } from '../ontario-hint-expander/hint-expander.interface';
import { Hint } from '../../utils/common/common.interface';
import { Caption } from '../../utils/common/input-caption/caption.interface';
import { Language } from '../../utils/common/language-types';
import { InputFocusBlurEvent, RadioAndCheckboxChangeEvent } from '../../utils/events/event-handler.interface';
export declare class OntarioCheckboxes implements Checkboxes {
	element: HTMLElement;
	internals: ElementInternals;
	hintTextRef: HTMLOntarioHintTextElement | undefined;
	/**
	 * The text to display for the checkbox legend.
	 *
	 * @example
	 * <ontario-checkboxes
	 *   caption='{
	 *     "captionText": "Checkbox legend",
	 *     "captionType": "heading",
	 *   }
	 *   ...>
	 * </ontario-checkboxes>
	 */
	caption: Caption | string;
	/**
	 * The language of the component.
	 * This is used for translations, and is by default set through event listeners checking for a language property from the header. If no language is passed, it will default to English.
	 */
	language?: Language;
	/**
	 * The name for the checkboxes. The name value is used to reference form data after a form is submitted.
	 */
	name: string;
	/**
	 * Used to include the ontario-hint-text component for the checkbox group.
	 * This is optional.
	 */
	hintText?: string | Hint;
	/**
	 * Used to include the ontario-hint-expander component for the checkbox group.
	 * This is passed in as an object with key-value pairs.
	 *
	 * This is optional.
	 *
	 * @example
	 * <ontario-checkboxes
	 *   caption='{
	 *     "captionText": "Checkbox legend",
	 *     "captionType": "heading",
	 *   }
	 *   name='ontario-checkboxes'
	 *   options='[
	 *		{
	 *			"value": "checkbox-option-1",
	 *			"label": "Checkbox option 1 label",
	 *			"elementId": "checkbox-1"
	 *		}
	 *   }]'
	 *   hint-expander='{
	 *    "hint": "Hint expander for the checkbox group",
	 *    "content": "Example hint expander content for the checkbox group"
	 *   }'
	 *   required="true"
	 * >
	 * </ontario-checkboxes>
	 */
	hintExpander?: HintExpander | string;
	/**
	 * The options for the checkbox group.
	 *
	 * Each property will be passed in through an object in the options array.
	 * This can either be passed in as an object directly (if using react), or as a string in HTML.
	 * If there are multiple checkboxes in a fieldset, each checkbox will be displayed as an option.
	 *
	 * In the example below, the options are being passed in as a string and there are two checkboxes to be displayed in the fieldset.
	 *
	 * @example
	 * <ontario-checkboxes
	 *   caption='{
	 *		"captionText": "Checkbox legend",
	 *		"captionType": "heading",
	 *   }
	 *   name="ontario-checkboxes",
	 *   hint-text="Hint text for the checkbox group."
	 *   options='[
	 *		{
	 *			"value": "checkbox-option-1",
	 *			"label": "Checkbox option 1 label"
	 *			"elementId": "checkbox-1"
	 *     },
	 *     {
	 *        "value": "checkbox-option-2",
	 *        "label": "Checkbox option 2 label",
	 * 		  "elementId": "checkbox-2",
	 *	      "hintExpander": {
	 *				"hint": "Hint expander for checkbox option 2",
	 *              "content": "Example hint expander content for checkbox option 2"
	 *        }
	 *      }
	 *   ]'
	 *   required="true"
	 * >
	 * </ontario-checkboxes>
	 */
	options: CheckboxOption[] | string;
	/**
	 * This is used to determine whether the checkbox is required or not.
	 * This prop also gets passed to the InputCaption utility to display either an optional or required flag in the label.
	 * If no prop is set, it will default to false (optional).
	 */
	required?: boolean;
	/**
	 * Used to add a custom function to the checkbox onChange event.
	 */
	customOnChange?: (event: globalThis.Event) => void;
	/**
	 * Used to add a custom function to the checkbox onBlur event.
	 */
	customOnBlur?: (event: globalThis.Event) => void;
	/**
	 * Used to add a custom function to the checkbox onFocus event.
	 */
	customOnFocus?: (event: globalThis.Event) => void;
	/**
	 * Used for the `aria-describedby` value of the checkbox fieldset. This will match with the id of the hint text.
	 */
	hintTextId: string | null | undefined;
	/**
	 * Instantiate an InputCaption object for internal logic use
	 */
	private captionState;
	/**
	 * The hint text options are re-assigned to the internalHintText array.
	 */
	private internalHintText;
	/**
	 * The hint expander options are re-assigned to the internalHintExpander array.
	 */
	private internalHintExpander;
	/**
	 * The options are re-assigned to the internalOptions array.
	 */
	private internalOptions;
	/**
	 * Emitted when a keyboard input or mouse event occurs when a checkbox option has been changed.
	 */
	checkboxOnChange: EventEmitter<RadioAndCheckboxChangeEvent>;
	/**
	 * Emitted when a keyboard input event occurs when a checkbox option has lost focus.
	 */
	checkboxOnBlur: EventEmitter<InputFocusBlurEvent>;
	/**
	 * Emitted when a keyboard input event occurs when a checkbox option has gained focus.
	 */
	checkboxOnFocus: EventEmitter<InputFocusBlurEvent>;
	/**
	 * This listens for the `setAppLanguage` event sent from the test language toggler when it is is connected to the DOM. It is used for the initial language when the input component loads.
	 */
	handleSetAppLanguage(event: CustomEvent<Language>): void;
	handleHeaderLanguageToggled(event: CustomEvent<Language>): void;
	/**
	 * Watch for changes to the `hintText` prop.
	 *
	 * If a `hintText` prop is passed, the `constructHintTextObject` function will convert it to the correct format, and set the result to the `internalHintText` state.
	 */
	private parseHintText;
	/**
	 * Watch for changes to the `hintExpander` prop.
	 *
	 * If a `hintExpander` prop is passed, it will be parsed (if it is a string), and the result will be set to the `internalHintExpander` state.
	 */
	private parseHintExpander;
	/**
	 * Watch for changes to the `options` prop.
	 *
	 * If an `options` prop is passed, it will be parsed (if it is a string), and the result will be set to the `internalOptions` state. The result will be run through a validation function.
	 */
	parseOptions(): void;
	/**
	 * Validate the `options` and make sure the `options` prop has a value.
	 * Log a warning if user doesn't input a value for the `options`.
	 *
	 * @param newValue object to be validated
	 */
	validateOptions(newValue: object): void;
	validateName(newValue: string): void;
	/**
	 * Watch for changes to the `caption` prop.
	 *
	 * The caption will be run through the InputCaption constructor to convert it to the correct format, and set the result to the `captionState` state.
	 * @param newValue: Caption | string
	 */
	updateCaptionState(newValue: Caption | string): void;
	/**
	 * Watch for changes to the `language` prop to render either the English or French translations
	 */
	updateLanguage(): void;
	/**
	 * Function to handle checkbox events and the information pertaining to the checkbox to emit.
	 */
	private handleEvent;
	/**
	 * If a `hintText` prop is passed, the id generated from it will be set to the internal `hintTextId` state to match with the fieldset `aria-describedBy` attribute.
	 */
	componentDidLoad(): Promise<void>;
	componentWillLoad(): void;
	render(): any;
}
