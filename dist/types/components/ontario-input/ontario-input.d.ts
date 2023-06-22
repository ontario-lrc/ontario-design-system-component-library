import { Event } from '../../stencil-public-runtime';
import { TextInput } from './input.interface';
import { HintExpander } from '../ontario-hint-expander/hint-expander.interface';
import { Hint } from '../../utils/common/common.interface';
import { Caption } from '../../utils/common/input-caption/caption.interface';
import { Language } from '../../utils/common/language-types';
import { InputFocusBlurEvent, EventType, InputChangeEvent } from '../../utils/events/event-handler.interface';
export declare class OntarioInput implements TextInput {
	element: HTMLElement;
	hintTextRef: HTMLOntarioHintTextElement | undefined;
	/**
	 * The text to display as the input label
	 *
	 * @example
	 * <ontario-input
	 *   caption='{
	 *     "captionText": "Address",
	 *     "captionType": "heading",
	 *   }
	 *   required="true"
	 *   ...>
	 * </ontario-input>
	 */
	caption: Caption | string;
	/**
	 * The unique identifier of the input. This is optional - if no ID is passed, one will be generated.
	 */
	elementId?: string;
	/**
	 * The width of the input field. If no value is assigned, it will present as the `default` input width.
	 */
	inputWidth:
		| '2-char-width'
		| '3-char-width'
		| '4-char-width'
		| '5-char-width'
		| '7-char-width'
		| '10-char-width'
		| '20-char-width'
		| 'default';
	/**
	 * The name assigned to the input. The name value is used to reference form data after a form is submitted.
	 */
	name: string;
	/**
	 * Used to include the ontario-hint-text component for the input.
	 * This is optional.
	 */
	hintText?: string | Hint;
	/**
	 * This is used to determine whether the input is required or not.
	 * This prop also gets passed to the InputCaption utility to display either an optional or required flag in the label.
	 * If no prop is set, it will default to false (optional).
	 */
	required?: boolean;
	/**
	 * The input type value.
	 *
	 * If no `type` is provided, it will default to 'text'.
	 */
	type: 'text' | 'tel' | 'email' | 'password';
	/**
	 * The input content value.
	 *
	 * This is optional.
	 */
	value?: string;
	/**
	 * The language of the component.
	 * This is used for translations, and is by default set through event listeners checking for a language property from the header. If no language is passed, it will default to English.
	 */
	language?: Language;
	/**
	 * Used to include the ontario-hint-expander component for the input component.
	 * This is passed in as an object with key-value pairs.
	 *
	 * This is optional.
	 *
	 * @example
	 * <ontario-input
	 *   caption='{
	 *     "caption": "Address",
	 *     "captionType": "heading",
	 *   }
	 *   hint-expander='{
	 *    "hint": "Hint expander",
	 *    "content": "This is the content"
	 *   }'
	 *   required="true"
	 * >
	 * </ontario-input>
	 */
	hintExpander?: HintExpander | string;
	/**
	 * Used for the `aria-describedby` value of the input. This will match with the id of the hint text.
	 */
	hintTextId: string | undefined;
	/**
	 * Used to add a custom function to the textarea onChange event.
	 */
	customOnChange?: Function;
	/**
	 * Used to add a custom function to the textarea onBlur event.
	 */
	customOnBlur?: Function;
	/**
	 * Used to add a custom function to the textarea onFocus event.
	 */
	customOnFocus?: Function;
	/**
	 * The hint text options are re-assigned to the internalHintText array.
	 */
	private internalHintText;
	/**
	 * The hint expander options are re-assigned to the internalHintExpander array.
	 */
	private internalHintExpander;
	/**
	 * Instantiate an InputCaption object for internal logic use
	 */
	private captionState;
	/**
	 * Emitted when a keyboard input or mouse event occurs when an input has been changed.
	 */
	inputOnChange: InputChangeEvent;
	/**
	 * Emitted when a keyboard input event occurs when an input has lost focus.
	 */
	inputOnBlur: InputFocusBlurEvent;
	/**
	 * Emitted when a keyboard input event occurs when an input has gained focus.
	 */
	inputOnFocus: InputFocusBlurEvent;
	/**
	 * This listens for the `setAppLanguage` event sent from the test language toggler when it is is connected to the DOM. It is used for the initial language when the input component loads.
	 */
	handleSetAppLanguage(event: CustomEvent<Language>): void;
	handleHeaderLanguageToggled(event: CustomEvent<Language>): void;
	validateName(newValue: string): void;
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
	/**
	 * Function to handle input events and the information pertaining to the input to emit.
	 */
	handleEvent: (ev: Event, eventType: EventType) => void;
	getId(): string;
	private getValue;
	private getClass;
	/**
	 * If a `hintText` prop is passed, the id generated from it will be set to the internal `hintTextId` state to match with the input `aria-describedBy` attribute.
	 */
	componentDidLoad(): Promise<void>;
	componentWillLoad(): void;
	render(): any;
}
