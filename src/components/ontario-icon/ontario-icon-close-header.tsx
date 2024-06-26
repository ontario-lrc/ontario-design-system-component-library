// content automatically generated by `generate-icons.js` begins
import { Component, Prop, h, Watch, State } from '@stencil/core';
import { IconWithColour } from './icon.interface';
import { IconSize, IconColour, IconColours } from './icon.types';
import { ConsoleMessageClass } from '../../utils/console-message/console-message';
import { validateValueAgainstArray } from '../../utils/validation/validation-functions';
import validateColor from 'validate-color';

@Component({
	tag: 'ontario-icon-close-header',
	styleUrl: 'ontario-icon.scss',
	shadow: true,
})
export class OntarioIconCloseHeader implements IconWithColour {
	/**
	 * The icon width will autogenerate the height since the icons are in square format, thus preserving
	 * the aspect ratio.
	 */
	@Prop() iconWidth: IconSize = 24;

	/**
	 * Mutable variable, for internal use only.
	 * Set the icon's width depending on validation result.
	 */
	@State() iconWidthState: number;

	/**
	 * Watch for changes in the `iconWidth` variable for validation purpose.
	 * If the user input is not a number or is a negative number then `iconWidth` will be set to its default (24).
	 */
	@Watch('iconWidth')
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const message = new ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-close-header> ')
				.addRegularText(
					`${
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number'
					}; only a positive number is allowed. The default size of`,
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	}

	/**
	 * Set the icon's colour.
	 */
	@Prop() colour: IconColour = 'black';

	/**
	 * Mutable variable, for internal use only.
	 * Set the icon's colour based on validation result.
	 */
	@State() iconColourState: string;

	/**
	 * Mutable variable, for internal use only.
	 * Set the icon's colour based on validation result.
	 */
	@State() iconCustomColourState: string;

	/**
	 * Watch for changes in the `colour` variable for validation purpose.
	 * If the user input doesn't match one of the enum values then `colour` will be set to its default (`black`).
	 * If a match is found in one of the enum values then `colour` will be set to the matching enum value.
	 */
	@Watch('colour')
	validateColour() {
		const isValid = validateValueAgainstArray(this.colour, IconColours);
		if (isValid) {
			this.iconColourState = this.colour;
		} else {
			if (validateColor(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	}

	/**
	 * Print the invalid colour warning message
	 * @returns default colour (black)
	 */
	private warnDefaultColour(): IconColour {
		const message = new ConsoleMessageClass();
		message
			.addDesignSystemTag()
			.addMonospaceText(' colour ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-icon-close-header> ')
			.addRegularText('was set to an invalid colour; only')
			.addMonospaceText(' black, blue, grey or white ')
			.addRegularText('are supported. The default colour')
			.addMonospaceText(' black ')
			.addRegularText('is assumed.')
			.printMessage();
		return 'black';
	}

	/**
	 * Stencil component lifecycle method that is called once after the component is first connected to the DOM.
	 */
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}

	/**
	 * Returns the HTML code to be rendered into a custom element.
	 */
	render() {
		return (
			<div
				class={`ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`}
				style={{ width: `${this.iconWidthState}px` }}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="#000000"
					viewBox="0 0 24 24"
					id="close-header"
				>
					<path
						d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6L19 6.4z"
						fill="#ffffff"
					/>
				</svg>
			</div>
		);
	}
}
// content automatically generated by `generate-icons.js` ends
