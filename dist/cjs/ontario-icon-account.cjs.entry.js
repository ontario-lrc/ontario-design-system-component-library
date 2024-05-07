'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88d5cf20.js');
const index$1 = require('./index-55e3f513.js');
const consoleMessage = require('./console-message-27a94faa.js');

const ontarioIconCss =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const OntarioIconAccountStyle0 = ontarioIconCss;

const OntarioIconAccount = class {
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
				.addMonospaceText(' <ontario-icon-account> ')
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
			if (index$1.lib(this.colour)) {
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
			.addMonospaceText(' <ontario-icon-account> ')
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
				key: 'e2dde01ec1fa93c4b7c99037162787245332fe0d',
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			index.h(
				'svg',
				{
					key: '63eb11b71d0ee20bdc4a7ec4a79001fc64efd4a0',
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'account',
				},
				index.h('path', {
					key: 'caaa5e4e5f9591a63959a84d17a5e26e2f5b835d',
					d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-2 4-3.08 6-3.08 2 0 5.97 1.1 6 3.08a7.2 7.2 0 0 1-6 3.22z',
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
OntarioIconAccount.style = OntarioIconAccountStyle0;

exports.ontario_icon_account = OntarioIconAccount;

//# sourceMappingURL=ontario-icon-account.cjs.entry.js.map
