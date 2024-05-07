import { Button } from './button.interface';
import { ButtonType, HtmlType } from './ontario-button.types';
export declare class OntarioButton implements Button {
	host: HTMLElement;
	internals: ElementInternals;
	/**
	 * The type of button to render.
	 *
	 * If no type is passed, it will default to 'secondary'.
	 */
	type: ButtonType;
	/**
	 * The native HTML button type the button should use.
	 *
	 * If no htmlType is passed, it will default to 'button'.
	 */
	htmlType: HtmlType;
	/**
	 * Text to be displayed within the button. This will override the text provided through the host element textContent.
	 *
	 * @example
	 * <ontario-button label="Label Text">Text</ontario-button>
	 *
	 * The resulting button will have the label `"Label Text"`.
	 */
	label?: string;
	/**
	 * Provides more context as to what the button interaction is doing. This should only be used for accessibility purposes, if the button interaction requires more description than what the text provides.
	 *
	 *  This is optional.
	 *
	 * @example
	 * <ontario-button aria-label-text="Click button to open map">Open</ontario button>
	 */
	ariaLabelText?: string;
	/**
	 * The unique identifier of the button. This is optional - if no ID is passed, one will be generated.
	 */
	elementId?: string;
	/**
	 * Mutable variable, for internal use only.
	 * Set the button's type depending on validation result.
	 */
	private typeState;
	/**
	 * Mutable variable, for internal use only.
	 * Set the native HTML button type depending on validation result.
	 */
	private htmlTypeState;
	private labelState;
	/**
	 * A reference to the internal button element.
	 */
	private buttonRef;
	private updateLabelContent;
	/**
	 * Watch for changes to the `type` property for validation purposes.
	 *
	 * If the user input doesn't match one of the array values then `type` will be set to its default (`secondary`).
	 * If a match is found in one of the array values then `type` will be set to the matching array key value.
	 */
	validateType(): void;
	/**
	 *  Watch for changes to the `htmlType` property for validation purposes.
	 *
	 * If the user input doesn't match one of the array values then `htmlType` will be set to its default (`submit`).
	 * If a match is found in one of the array values then `htmlType` will be set to the matching array key value.
	 */
	validateHtmlType(): void;
	/**
	 * Print the missing `label` prop warning message
	 */
	validateLabelContent(newValue: string): void;
	/**
	 * Print the invalid `type` prop warning message
	 * @returns default type (secondary)
	 */
	private warnDefaultType;
	/**
	 * Print the invalid `htmlType` warning message
	 * @returns default htmlType (button)
	 */
	private warnDefaultHtmlType;
	/**
	 * @returns the classes of the button based of the button's `type`.
	 */
	private getClass;
	getId(): string;
	/**
	 * Set `buttonId`, `label`, and `ariaLabel` using internal component logic.
	 */
	componentWillLoad(): void;
	componentDidLoad(): void;
	render(): any;
}
