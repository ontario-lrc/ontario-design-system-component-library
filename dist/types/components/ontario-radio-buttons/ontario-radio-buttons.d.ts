import { Event } from '../../stencil-public-runtime';
import { RadioButtons } from './radio-buttons.interface';
import { RadioOption } from './radio-option.interface';
import { Hint } from '../../utils/common/common.interface';
import { Caption } from '../../utils/common/input-caption/caption.interface';
import { HintExpander } from '../ontario-hint-expander/hint-expander.interface';
import { Language } from '../../utils/common/language-types';
import {
	InputFocusBlurEvent,
	RadioAndCheckboxChangeEvent,
	EventType,
} from '../../utils/events/event-handler.interface';
export declare class OntarioRadioButtons implements RadioButtons {
	element: HTMLElement;
	hintTextRef: HTMLOntarioHintTextElement | undefined;
	/**
	 * The text to display for the radio button legend.
	 *
	 * @example
	 * <ontario-radio-buttons
	 *   caption='{
	 *     "captionText": "Radio legend",
	 *     "captionType": "heading",
	 *    }'
	 *   required="true"
	 *   ...>
	 * </ontario-radio-buttons>
	 */
	caption: Caption | string;
	/**
	 * The language of the component.
	 * This is used for translations, and is by default set through event listeners checking for a language property from the header. If no language is passed, it will default to English.
	 */
	language?: Language;
	/**
	 * The name assigned to the radio button. The name value is used to reference form data after a form is submitted.
	 */
	name: string;
	/**
	 * Used to include the ontario-hint-text component for radio button group.
	 * This is optional.
	 */
	hintText?: string | Hint;
	/**
	 * Used to include the ontario-hint-expander component for the radio button group.
	 * This is passed in as an object with key-value pairs.
	 *
	 * This is optional.
	 *
	 * @example
	 * <ontario-radio-buttons
	 *   caption='{
	 *     "captionText": "Radio legend",
	 *     "captionType": "heading",
	 *   }'
	 * 	 name="radios"
	 *   options='[
	 * 	   {
	 *        "value": "radio-option-1",
	 * 		  "elementId": "radio-1",
	 *        "label": "Radio option 1 label",
	 *        "hintExpander": {
	 *			  "hint": "Hint expander for radio option 1",
	 * 		      "content": "Example hint expander content for radio option 1."
	 *		  }
	 *     }
	 *   ]'
	 *   hint-expander='{
	 *     "hint": "Hint expander for the radio button group",
	 *     "content": "Example hint expander content for the radio button group."
	 *   }'
	 *   required="true"
	 * >
	 * </ontario-radio-buttons>
	 */
	hintExpander?: HintExpander | string;
	/**
	 * This is used to determine whether the radio button is required or not.
	 * This prop also gets passed to the InputCaption utility to display either an optional or required flag in the label.
	 * If no prop is set, it will default to false (optional).
	 */
	required?: boolean;
	/**
	 * The options for the radio button group.
	 *
	 * Each property will be passed in through an object in the options array.
	 * This can either be passed in as an object directly (if using react), or as a string in HTML.
	 * If there are multiple radio buttons in a group, each radio button will be displayed as an option.
	 *
	 * In the example below, the options are being passed in as a string and there are two radio buttons to be displayed in the group.
	 *
	 * @example
	 * <ontario-radio-buttons
	 *   caption='{
	 *     "captionText": "Radio legend",
	 *     "captionType": "heading",
	 *   }'
	 *   name="radios"
	 *   hint-text="Hint text for the radio button group."
	 *   options='[
	 *     {
	 *        "value": "radio-option-1",
	 * 		  "elementId": "radio-1",
	 *        "label": "Radio option 1 label"
	 *     },
	 *     {
	 *        "value": "radio-option-2",
	 * 		  "elementId": "radio-2",
	 *        "label": "Radio option 2 label",
	 *        "hintExpander": {
	 *			  "hint": "Hint expander for radio option 2",
	 * 		      "content": "Example hint expander content for radio option 2."
	 *		  }
	 *      }
	 *   ]'
	 *   required="true"
	 * >
	 * </ontario-radio-buttons>
	 */
	options: string | RadioOption[];
	/**
	 * Used to add a custom function to the radio input onChange event.
	 */
	customOnChange?: Function;
	/**
	 * Used to add a custom function to the radio input onBlur event.
	 */
	customOnBlur?: Function;
	/**
	 * Used to add a custom function to the radio input onFocus event.
	 */
	customOnFocus?: Function;
	/**
	 * Used for the `aria-describedby` value of the radio button group. This will match with the id of the hint text.
	 */
	hintTextId: string | null | undefined;
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
	 * Instantiate an InputCaption object for internal logic use
	 */
	private captionState;
	/**
	 * Emitted when a keyboard input or mouse event occurs when a radio option has been changed.
	 */
	radioOnChange: RadioAndCheckboxChangeEvent;
	/**
	 * Emitted when a keyboard input event occurs when a radio option has lost focus.
	 */
	radioOnBlur: InputFocusBlurEvent;
	/**
	 * Emitted when a keyboard input event occurs when a radio option has gained focus.
	 */
	radioOnFocus: InputFocusBlurEvent;
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
	validateName(newValue: string): void;
	validateOptions(newValue: object): void;
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
	 * Function to handle radio buttons events and the information pertaining to the radio buttons to emit.
	 */
	handleEvent: (ev: Event, eventType: EventType) => void;
	/**
	 * If a `hintText` prop is passed, the id generated from it will be set to the internal `hintTextId` state to match with the fieldset `aria-describedBy` attribute.
	 */
	componentDidLoad(): Promise<void>;
	componentWillLoad(): void;
	render(): any;
}
