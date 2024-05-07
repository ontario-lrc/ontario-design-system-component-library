'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88d5cf20.js');
const index$1 = require('./index-55e3f513.js');
const consoleMessage = require('./console-message-27a94faa.js');

const ontarioIconCss =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const OntarioIconMediaFastRewindStyle0 = ontarioIconCss;

const OntarioIconMediaFastRewind = class {
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
				.addMonospaceText(' <ontario-icon-media-fast-rewind> ')
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
			.addMonospaceText(' <ontario-icon-media-fast-rewind> ')
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
				key: '24f3b3879345b22523bff8d2f4828899341d701f',
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			index.h(
				'svg',
				{
					key: '19c37d8ea58d4e25256807c2cdeeb93b546da917',
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'media-fast-rewind',
				},
				index.h('path', {
					key: 'e41e7719e3604f1532e4ac78832e11f4211bc7b4',
					d: 'M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z',
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
OntarioIconMediaFastRewind.style = OntarioIconMediaFastRewindStyle0;

exports.ontario_icon_media_fast_rewind = OntarioIconMediaFastRewind;

//# sourceMappingURL=ontario-icon-media-fast-rewind.cjs.entry.js.map
