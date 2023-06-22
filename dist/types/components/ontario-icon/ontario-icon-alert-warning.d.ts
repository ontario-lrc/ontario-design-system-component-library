import { Icon } from './icon.interface';
import { IconSize } from './icon.types';
export declare class OntarioIconAlertWarning implements Icon {
	/**
	 * The icon width will autogenerate the height since the icons are in square format, thus preserving
	 * the aspect ratio.
	 */
	iconWidth: IconSize;
	/**
	 * Mutable variable, for internal use only.
	 * Set the icon's width depending on validation result.
	 */
	iconWidthState: number;
	/**
	 * Watch for changes in the `iconWidth` variable for validation purpose.
	 * If the user input is not a number or is a negative number then `iconWidth` will be set to its default (24).
	 */
	validateWidth(): void;
	/**
	 * Reference to the host element
	 * Use to check if the host element has the `colour` attribute set
	 */
	host: HTMLElement;
	/**
	 * Validate that the `colour` attribute is not set by users
	 * Prints a warning message if the `colour` attribute is set
	 */
	validateColour(): void;
	/**
	 * Stencil component lifecycle method that is called once after the component is first connected to the DOM.
	 */
	componentWillLoad(): void;
	/**
	 * Returns the HTML code to be rendered into a custom element.
	 */
	render(): any;
}
