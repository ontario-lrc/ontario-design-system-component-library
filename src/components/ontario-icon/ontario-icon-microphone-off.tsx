// content automatically generated by `generate-icons.js` begins
import { Component, Prop, h, Watch, State } from '@stencil/core';
import { IconWithColour } from './icon.interface';
import { IconSize, IconColour, IconColours } from './icon.types';
import { ConsoleMessageClass } from '../../utils/console-message/console-message';
import { validateValueAgainstArray } from '../../utils/validation/validation-functions';
import validateColor from 'validate-color';

@Component({
	tag: 'ontario-icon-microphone-off',
	styleUrl: 'ontario-icon.scss',
	shadow: true,
})
export class OntarioIconMicrophoneOff implements IconWithColour {
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
				.addMonospaceText(' <ontario-icon-microphone-off> ')
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
			.addMonospaceText(' <ontario-icon-microphone-off> ')
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
					class="svg-icon"
					style={{ fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` }}
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					id="microphone-off"
				>
					<path d="M19 11c0 1.2-.34 2.3-.9 3.28l-1.23-1.23c.27-.62.43-1.3.43-2.05H19zm-4 .16L9 5.18V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v6.16zM4.27 3L21 19.73 19.73 21l-4.2-4.2a7.03 7.03 0 0 1-2.54.91V21h-2v-3.28c-3.28-.5-6-3.3-6-6.72h1.7c0 3 2.54 5.1 5.3 5.1.8 0 1.6-.2 2.3-.52l-1.66-1.66L12 14a3 3 0 0 1-3-3v-.72l-6-6L4.27 3z" />
				</svg>
			</div>
		);
	}
}
// content automatically generated by `generate-icons.js` ends
