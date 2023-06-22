import { CaptionType } from './input-caption.types';
import { CaptionInfo, Caption } from './caption.interface';
export declare class InputCaption implements CaptionInfo {
	/**
	 * The text to display as caption.
	 */
	captionText: string;
	/**
	 * The type of caption to render.
	 */
	captionType?: CaptionType;
	/**
	 * Determine whether the input field is required.
	 */
	required?: boolean;
	/**
	 * Determine whether the rendered element is a `<label>` or `<legend>`.
	 */
	isLegend?: boolean;
	/**
	 * Name of the component instantiating the class.
	 * This is used for validation warning message.
	 */
	componentTagName: string;
	language: any;
	translations: any;
	/**
	 * Set the class members
	 * Output a console warning message if the provided `label` type is incorrect
	 * @param caption object containing the essential data to configure the input label
	 */
	constructor(
		componentTagName: string,
		caption: Caption | string,
		translations: any,
		language: any,
		isLegend?: boolean,
		required?: boolean,
	);
	/**
	 * Return the `<label>` element for text inputs
	 * @param captionFor Set the `htmlFor` attribute
	 * @returns element containing the caption for the input
	 */
	getCaption: (captionFor?: string | undefined, hasHintExpander?: boolean) => HTMLElement;
	getHintExpanderAccessibilityText(captionText: string, hasHintExpanderOnOption?: boolean): HTMLElement;
	/**
	 * Determines which flag text to use between `required` and `optional`
	 * @returns `required` or `optional` flag text
	 */
	private getRequiredFlagText;
	/**
	 * Get the HTML for the required/optional flag.
	 * @returns CSS class for the label/legend.
	 */
	private getRequiredFlagElement;
	/**
	 * Get the CSS class for the `label` element.
	 * @returns CSS class for the `label` element.
	 */
	private getClass;
	/**
	 * Validate caption input by user and output warning message to the console if:
	 * 1. the `caption` object is not provided
	 * 2. the `captionText` property of the `caption` object is not provided
	 * 3. the `captionText` property of the `caption` object is empty or contain only spaces
	 * 4. the `captionType` property of the `caption` object is not provided
	 * 5. the `captionType` property of the `caption` object is incorrect
	 */
	private validateCaption;
	/**
	 * Generate the content of warning message to be printed to the console
	 * @param messageType determine the content of warning message to output
	 * @param componentTagName the tag name of the component that's emitting the warning message
	 * @param requiredFlagText accepts a string value to be used as the required flag text and defaults to `(optional)` if not set
	 * @returns an array of `ConsoleMessage` objects containing the message and associated styles to be printed to the console
	 */
	private printConsoleMessage;
}
