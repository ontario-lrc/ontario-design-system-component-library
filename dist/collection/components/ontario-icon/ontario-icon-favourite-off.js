// content automatically generated by `generate-icons.js` begins
import { h } from '@stencil/core';
import { IconColours } from './icon.types';
import { ConsoleMessageClass } from '../../utils/console-message/console-message';
import { validateValueAgainstArray } from '../../utils/validation/validation-functions';
import validateColor from 'validate-color';
export class OntarioIconFavouriteOff {
	constructor() {
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	/**
	 * Watch for changes in the `iconWidth` variable for validation purpose.
	 * If the user input is not a number or is a negative number then `iconWidth` will be set to its default (24).
	 */
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const message = new ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-favourite-off> ')
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
	 * Watch for changes in the `colour` variable for validation purpose.
	 * If the user input doesn't match one of the enum values then `colour` will be set to its default (`black`).
	 * If a match is found in one of the enum values then `colour` will be set to the matching enum value.
	 */
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
	warnDefaultColour() {
		const message = new ConsoleMessageClass();
		message
			.addDesignSystemTag()
			.addMonospaceText(' colour ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-icon-favourite-off> ')
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
		return h(
			'div',
			{
				key: '1c8a25e2d118476606e05a29404ab4cabf57432b',
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			h(
				'svg',
				{
					key: '890e395045596294dbc5b5a1a010dc244e115a62',
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'favourite-off',
				},
				h('path', {
					key: 'cd674c51f400e27bfe94ab66c192c26b296ad743',
					d: 'M12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.4 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.9-3.14 5.74-7.9 10.05zM16.5 3c-1.74 0-3.4.8-4.5 2.08C10.9 3.8 9.24 3 7.5 3 4.42 3 2 5.4 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5 22 5.4 19.58 3 16.5 3z',
				}),
			),
		);
	}
	static get is() {
		return 'ontario-icon-favourite-off';
	}
	static get encapsulation() {
		return 'shadow';
	}
	static get originalStyleUrls() {
		return {
			$: ['ontario-icon.scss'],
		};
	}
	static get styleUrls() {
		return {
			$: ['ontario-icon.css'],
		};
	}
	static get properties() {
		return {
			iconWidth: {
				type: 'number',
				mutable: false,
				complexType: {
					original: 'IconSize',
					resolved: '16 | 24 | 32 | 48',
					references: {
						IconSize: {
							location: 'import',
							path: './icon.types',
							id: 'src/components/ontario-icon/icon.types.ts::IconSize',
						},
					},
				},
				required: false,
				optional: false,
				docs: {
					tags: [],
					text: 'The icon width will autogenerate the height since the icons are in square format, thus preserving\nthe aspect ratio.',
				},
				attribute: 'icon-width',
				reflect: false,
				defaultValue: '24',
			},
			colour: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'IconColour',
					resolved: '"black" | "blue" | "grey" | "inherit" | "white"',
					references: {
						IconColour: {
							location: 'import',
							path: './icon.types',
							id: 'src/components/ontario-icon/icon.types.ts::IconColour',
						},
					},
				},
				required: false,
				optional: false,
				docs: {
					tags: [],
					text: "Set the icon's colour.",
				},
				attribute: 'colour',
				reflect: false,
				defaultValue: "'black'",
			},
		};
	}
	static get states() {
		return {
			iconWidthState: {},
			iconColourState: {},
			iconCustomColourState: {},
		};
	}
	static get watchers() {
		return [
			{
				propName: 'iconWidth',
				methodName: 'validateWidth',
			},
			{
				propName: 'colour',
				methodName: 'validateColour',
			},
		];
	}
}
// content automatically generated by `generate-icons.js` ends
//# sourceMappingURL=ontario-icon-favourite-off.js.map
