import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { I as IconColours, l as lib } from './index2.js';
import { C as ConsoleMessageClass } from './console-message.js';
import { a as validateValueAgainstArray } from './validation-functions.js';

const ontarioIconCss =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const OntarioIconSentiment1Style0 = ontarioIconCss;

const OntarioIconSentiment1$1 = /*@__PURE__*/ proxyCustomElement(
	class OntarioIconSentiment1 extends HTMLElement {
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
					.addMonospaceText(' <ontario-icon-sentiment-1> ')
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
				.addMonospaceText(' <ontario-icon-sentiment-1> ')
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
					key: '93333765c1558cac740dbbb9d2778ea9c0bfa583',
					class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
					style: { width: `${this.iconWidthState}px` },
				},
				h(
					'svg',
					{
						key: 'f2dba70425c7f8919f74b0df783a4cb8b02b9f63',
						class: 'svg-icon',
						style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
						role: 'img',
						xmlns: 'http://www.w3.org/2000/svg',
						viewBox: '0 0 24 24',
						id: 'sentiment-1',
					},
					h('path', {
						key: 'a4d386b255ac371078451dbf9bd19248e348f22b',
						d: 'M12 2a10 10 0 1 0 0 20 10.01 10.01 0 0 0 10-10A10.01 10.01 0 0 0 11.99 2zm0 18a8 8 0 1 1 0-16 8 8 0 1 1 0 16zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.7-1.2 1.97-2 3.45-2s2.75.8 3.45 2h1.67c-.8-2.05-2.8-3.5-5.12-3.5zm3.5-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 1 0 0 3zm-7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 1 0 0 3z',
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
			return OntarioIconSentiment1Style0;
		}
	},
	[
		1,
		'ontario-icon-sentiment-1',
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
	const components = ['ontario-icon-sentiment-1'];
	components.forEach((tagName) => {
		switch (tagName) {
			case 'ontario-icon-sentiment-1':
				if (!customElements.get(tagName)) {
					customElements.define(tagName, OntarioIconSentiment1$1);
				}
				break;
		}
	});
}

const OntarioIconSentiment1 = OntarioIconSentiment1$1;
const defineCustomElement = defineCustomElement$1;

export { OntarioIconSentiment1, defineCustomElement };

//# sourceMappingURL=ontario-icon-sentiment-1.js.map
