import { IconWithColour } from './icon.interface';
import { IconSize, IconColour } from './icon.types';
export declare class OntarioIconVideo implements IconWithColour {
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
	 * Set the icon's colour.
	 */
	colour: IconColour | string;
	/**
	 * Mutable variable, for internal use only.
	 * Set the icon's colour based on validation result.
	 */
	iconColourState: string;
	/**
	 * Mutable variable, for internal use only.
	 * Set the icon's colour based on validation result.
	 */
	iconCustomColourState: string;
	/**
	 * Watch for changes in the `colour` variable for validation purpose.
	 * If the user input doesn't match one of the enum values then `colour` will be set to its default (`black`).
	 * If a match is found in one of the enum values then `colour` will be set to the matching enum value.
	 */
	validateColour(): void;
	/**
	 * Print the invalid colour warning message
	 * @returns default colour (black)
	 */
	private warnDefaultColour;
	/**
	 * Stencil component lifecycle method that is called once after the component is first connected to the DOM.
	 */
	componentWillLoad(): void;
	/**
	 * Returns the HTML code to be rendered into a custom element.
	 */
	render(): any;
}
