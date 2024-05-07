'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88d5cf20.js');
const consoleMessage = require('./console-message-27a94faa.js');

const ontarioIconCss =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const OntarioIconMastercardAltStyle0 = ontarioIconCss;

const OntarioIconMastercardAlt = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
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
				.addMonospaceText(' <ontario-icon-mastercard-alt> ')
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
	 * Validate that the `colour` attribute is not set by users
	 * Prints a warning message if the `colour` attribute is set
	 */
	validateColour() {
		if (this.host.hasAttribute('colour')) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-mastercard-alt> ')
				.addRegularText('cannot be set. The provided colour is ignored.')
				.printMessage();
		}
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
				key: '3c950c0e019f42cd4c6d98aa87e57176cad8e982',
				class: `ontario-icon ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			index.h(
				'svg',
				{
					key: 'f383ff75d766af6b0023da7ab695044c44047ad9',
					class: 'svg-icon',
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'mastercard-alt',
				},
				index.h('circle', {
					key: 'fdf29b3867a2768b800cbeb4c804c3303f400d6c',
					cx: '8',
					cy: '12',
					r: '6.5',
					fill: '#eb001b',
				}),
				index.h('circle', {
					key: '8706642f7a057d040567fa1af2effb0931f39adf',
					cx: '16',
					cy: '12',
					r: '6.5',
					fill: '#f79e1b',
				}),
				index.h('path', {
					key: '3159b0ae6a09ff612e583007c53d386acfdab5d4',
					d: 'M12 17.124S9.5 15.5 9.5 12 12 6.876 12 6.876 14.5 8.5 14.5 12 12 17.124 12 17.124z',
					fill: '#ff5f00',
				}),
				index.h('path', {
					key: '895157bd75ce27e3da5261ea192a79faceac76f0',
					d: 'M21.173 16.85v-.3h.125v-.06H21v.06h.117v.3h.055zm.578 0v-.35h-.1l-.105.25-.105-.25h-.1v.35h.065v-.265l.098.227h.067l.098-.227v.265h.063z',
					fill: '#f79e1b',
				}),
			),
		);
	}
	get host() {
		return index.getElement(this);
	}
	static get watchers() {
		return {
			iconWidth: ['validateWidth'],
		};
	}
};
OntarioIconMastercardAlt.style = OntarioIconMastercardAltStyle0;

exports.ontario_icon_mastercard_alt = OntarioIconMastercardAlt;

//# sourceMappingURL=ontario-icon-mastercard-alt.cjs.entry.js.map
