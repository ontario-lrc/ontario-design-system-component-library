// content automatically generated by `generate-icons.js` begins
import { h } from '@stencil/core';
import { IconColours } from './icon.types';
import { ConsoleMessageClass } from '../../utils/console-message/console-message';
import { validateValueAgainstArray } from '../../utils/validation/validation-functions';
import validateColor from 'validate-color';
export class OntarioIconMoreVertical {
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
				.addMonospaceText(' <ontario-icon-more-vertical> ')
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
			.addMonospaceText(' <ontario-icon-more-vertical> ')
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
				key: '1269fcb76510298a18bf93fed5244343fe782d9c',
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			h(
				'svg',
				{
					key: '7b5ce34ac092d74b1eaaf7c31c4808a605a1364b',
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'more-vertical',
				},
				h('path', {
					key: '8fa94868cb4c43b26612468c348cfbc9971ed0d6',
					d: 'M12 16a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2zm0-6a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2zm0-6a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2z',
				}),
			),
		);
	}
	static get is() {
		return 'ontario-icon-more-vertical';
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
//# sourceMappingURL=ontario-icon-more-vertical.js.map
