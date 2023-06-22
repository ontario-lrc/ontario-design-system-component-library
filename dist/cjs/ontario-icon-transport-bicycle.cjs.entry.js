'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f1f89225.js');
const index$1 = require('./index-f4617e04.js');
const consoleMessage = require('./console-message-b252d5f7.js');

const ontarioIconCss =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';

const OntarioIconTransportBicycle = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
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
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-transport-bicycle> ')
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
		const isValid = index$1.validateValueAgainstArray(this.colour, index$1.IconColours);
		if (isValid) {
			this.iconColourState = this.colour;
		} else {
			if (index$1.validateColor(this.colour)) {
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
		const message = new consoleMessage.ConsoleMessageClass();
		message
			.addDesignSystemTag()
			.addMonospaceText(' colour ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-icon-transport-bicycle> ')
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
		return index.h(
			'div',
			{
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			index.h(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'transport-bicycle',
				},
				index.h('path', {
					d: 'M15.208 6.167a1.84 1.84 0 0 0 1.833-1.833A1.84 1.84 0 0 0 15.208 2.5a1.84 1.84 0 0 0-1.833 1.833 1.84 1.84 0 0 0 1.833 1.833zm-9.625 5.958C3.017 12.125 1 14.142 1 16.708s2.017 4.583 4.583 4.583 4.583-2.017 4.583-4.583-2.017-4.583-4.583-4.583zm0 7.792a3.25 3.25 0 0 1-3.208-3.208A3.25 3.25 0 0 1 5.583 13.5a3.25 3.25 0 0 1 3.208 3.208 3.25 3.25 0 0 1-3.208 3.208zM10.9 10.75l2.2-2.2.733.733a6.42 6.42 0 0 0 4.675 1.925V9.375c-1.375 0-2.475-.55-3.3-1.375l-1.742-1.742c-.458-.367-.917-.55-1.467-.55a1.71 1.71 0 0 0-1.283.55L8.15 8.825a1.81 1.81 0 0 0-.55 1.283c0 .55.183 1.008.55 1.283l2.933 2.567v4.583h1.833v-5.683L10.9 10.75zm7.517 1.375c-2.567 0-4.583 2.017-4.583 4.583s2.017 4.583 4.583 4.583S23 19.275 23 16.708s-2.017-4.583-4.583-4.583zm0 7.792a3.25 3.25 0 0 1-3.208-3.208 3.25 3.25 0 0 1 3.208-3.208 3.25 3.25 0 0 1 3.208 3.208 3.25 3.25 0 0 1-3.208 3.208z',
				}),
			),
		);
	}
	static get watchers() {
		return {
			iconWidth: ['validateWidth'],
			colour: ['validateColour'],
		};
	}
};
OntarioIconTransportBicycle.style = ontarioIconCss;

exports.ontario_icon_transport_bicycle = OntarioIconTransportBicycle;
