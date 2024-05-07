import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { I as IconColours, l as lib } from './index2.js';
import { C as ConsoleMessageClass } from './console-message.js';
import { a as validateValueAgainstArray } from './validation-functions.js';

const ontarioIconCss =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const OntarioIconClockStyle0 = ontarioIconCss;

const OntarioIconClock$1 = /*@__PURE__*/ proxyCustomElement(
	class OntarioIconClock extends HTMLElement {
		constructor() {
			super();
			this.__registerHost();
			this.__attachShadow();
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
					.addMonospaceText(' <ontario-icon-clock> ')
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
				if (lib(this.colour)) {
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
				.addMonospaceText(' <ontario-icon-clock> ')
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
					key: 'd9b78f76e9be7aa252a1ea3ad32a9ee5de504e38',
					class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
					style: { width: `${this.iconWidthState}px` },
				},
				h(
					'svg',
					{
						key: '70db974eb9edede36ef8ff5fe7803a9f24de7aa1',
						class: 'svg-icon',
						style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
						role: 'img',
						xmlns: 'http://www.w3.org/2000/svg',
						viewBox: '0 0 24 24',
						id: 'clock',
					},
					h('path', {
						key: '27a098c3483c6f4d260a429a9f86b0aea49a3dcf',
						d: 'M12 2a10 10 0 0 0-7.071 2.929 10 10 0 0 0 0 14.142A10 10 0 0 0 12 22a10 10 0 0 0 10-10 10 10 0 0 0-2.929-7.071A10 10 0 0 0 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z',
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
		static get style() {
			return OntarioIconClockStyle0;
		}
	},
	[
		1,
		'ontario-icon-clock',
		{
			iconWidth: [2, 'icon-width'],
			colour: [1],
			iconWidthState: [32],
			iconColourState: [32],
			iconCustomColourState: [32],
		},
		undefined,
		{
			iconWidth: ['validateWidth'],
			colour: ['validateColour'],
		},
	],
);
function defineCustomElement$1() {
	if (typeof customElements === 'undefined') {
		return;
	}
	const components = ['ontario-icon-clock'];
	components.forEach((tagName) => {
		switch (tagName) {
			case 'ontario-icon-clock':
				if (!customElements.get(tagName)) {
					customElements.define(tagName, OntarioIconClock$1);
				}
				break;
		}
	});
}

const OntarioIconClock = OntarioIconClock$1;
const defineCustomElement = defineCustomElement$1;

export { OntarioIconClock, defineCustomElement };

//# sourceMappingURL=ontario-icon-clock.js.map
