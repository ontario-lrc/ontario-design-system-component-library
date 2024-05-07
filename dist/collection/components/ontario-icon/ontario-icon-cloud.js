// content automatically generated by `generate-icons.js` begins
import { h } from '@stencil/core';
import { IconColours } from './icon.types';
import { ConsoleMessageClass } from '../../utils/console-message/console-message';
import { validateValueAgainstArray } from '../../utils/validation/validation-functions';
import validateColor from 'validate-color';
export class OntarioIconCloud {
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
				.addMonospaceText(' <ontario-icon-cloud> ')
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
			.addMonospaceText(' <ontario-icon-cloud> ')
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
				key: '2cc0490da87ea372ed056219941f9d5b1053eefd',
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			h(
				'svg',
				{
					key: '4de261f0c9d0597591e17526edd6c4ae6325c224',
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'cloud',
				},
				h('path', {
					key: 'ae91092ae20edda7816621d81d4d96281ddfe393',
					d: 'M19.35 10.04A7.49 7.49 0 0 0 12 4C9.1 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.9 0 14c0 3.3 2.7 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z',
				}),
			),
		);
	}
	static get is() {
		return 'ontario-icon-cloud';
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
//# sourceMappingURL=ontario-icon-cloud.js.map
