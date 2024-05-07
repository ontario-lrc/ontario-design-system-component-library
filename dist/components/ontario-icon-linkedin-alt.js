import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { I as IconColours, l as lib } from './index2.js';
import { C as ConsoleMessageClass } from './console-message.js';
import { a as validateValueAgainstArray } from './validation-functions.js';

const ontarioIconCss =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const OntarioIconLinkedinAltStyle0 = ontarioIconCss;

const OntarioIconLinkedinAlt$1 = /*@__PURE__*/ proxyCustomElement(
	class OntarioIconLinkedinAlt extends HTMLElement {
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
					.addMonospaceText(' <ontario-icon-linkedin-alt> ')
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
				.addMonospaceText(' <ontario-icon-linkedin-alt> ')
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
					key: 'bf01b602e678abeea69e1c26aeb3b39f550c046d',
					class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
					style: { width: `${this.iconWidthState}px` },
				},
				h(
					'svg',
					{
						key: '24094d328aa09eab39fd5e8e21386e4285aa56d4',
						class: 'svg-icon',
						style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
						role: 'img',
						xmlns: 'http://www.w3.org/2000/svg',
						viewBox: '0 0 24 24',
						id: 'linkedin-alt',
					},
					h('path', {
						key: 'c740793d2ab66e5d71dcae03b36195456fb7b6a6',
						d: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26 2.9 2.9 0 0 0-2.32 1.3v-1.1h-2.8v8.37h2.8v-4.93c0-.77.62-1.4 1.4-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.8zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.7-1.68-1.7a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.7 1.68zm1.4 9.94v-8.37H5.5v8.37h2.77z',
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
			return OntarioIconLinkedinAltStyle0;
		}
	},
	[
		1,
		'ontario-icon-linkedin-alt',
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
	const components = ['ontario-icon-linkedin-alt'];
	components.forEach((tagName) => {
		switch (tagName) {
			case 'ontario-icon-linkedin-alt':
				if (!customElements.get(tagName)) {
					customElements.define(tagName, OntarioIconLinkedinAlt$1);
				}
				break;
		}
	});
}

const OntarioIconLinkedinAlt = OntarioIconLinkedinAlt$1;
const defineCustomElement = defineCustomElement$1;

export { OntarioIconLinkedinAlt, defineCustomElement };

//# sourceMappingURL=ontario-icon-linkedin-alt.js.map
