import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { I as IconColours, l as lib } from './index2.js';
import { C as ConsoleMessageClass } from './console-message.js';
import { a as validateValueAgainstArray } from './validation-functions.js';

const ontarioIconCss =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const OntarioIconAccessibilityStyle0 = ontarioIconCss;

const OntarioIconAccessibility$1 = /*@__PURE__*/ proxyCustomElement(
	class OntarioIconAccessibility extends HTMLElement {
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
					.addMonospaceText(' <ontario-icon-accessibility> ')
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
				.addMonospaceText(' <ontario-icon-accessibility> ')
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
					key: '21e86f03593f9a949ac6158810b5fb4d86afb532',
					class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
					style: { width: `${this.iconWidthState}px` },
				},
				h(
					'svg',
					{
						key: 'def0e58d001e15b7bbe147b07ecadee40a1e660b',
						class: 'svg-icon',
						style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
						role: 'img',
						xmlns: 'http://www.w3.org/2000/svg',
						viewBox: '0 0 24 24',
						id: 'accessibility',
					},
					h('path', {
						key: 'c2bc439610dc69d7d072793417d3126d9b670942',
						d: 'M18.4 11.2l-4.1.2 2.3-2.6c.2-.3.3-.8.2-1.3-.1-.3-.2-.6-.5-.8l-5.4-3.2c-.4-.3-1-.2-1.4.1L6.8 6.1c-.5.5-.6 1.2-.1 1.7.4.5 1.2.5 1.7.1l2-1.8 1.9 1.1-4.2 4.3c-.1.1-.1.2-.2.2-.5.2-1 .4-1.4.7L8 13.9c.5-.2 1-.4 1.5-.4 1.9 0 3.5 1.6 3.5 3.5 0 .6-.1 1.1-.4 1.5l1.5 1.5a5.29 5.29 0 0 0 .9-3c0-1.2-.4-2.4-1.1-3.3l3.3-.3-.2 4.8c-.1.7.4 1.2 1.1 1.3h.1c.6 0 1.1-.5 1.2-1.1l.2-5.9c0-.3-.1-.7-.3-.9-.3-.3-.6-.4-.9-.4zM18 5.5a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2 2 2 0 0 0 2 2zm-5.5 16.1a5.29 5.29 0 0 1-3 .9C6.5 22.5 4 20 4 17a5.29 5.29 0 0 1 .9-3l1.5 1.5c-.2.5-.4 1-.4 1.5 0 1.9 1.6 3.5 3.5 3.5.6 0 1.1-.1 1.5-.4l1.5 1.5z',
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
			return OntarioIconAccessibilityStyle0;
		}
	},
	[
		1,
		'ontario-icon-accessibility',
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
	const components = ['ontario-icon-accessibility'];
	components.forEach((tagName) => {
		switch (tagName) {
			case 'ontario-icon-accessibility':
				if (!customElements.get(tagName)) {
					customElements.define(tagName, OntarioIconAccessibility$1);
				}
				break;
		}
	});
}

const OntarioIconAccessibility = OntarioIconAccessibility$1;
const defineCustomElement = defineCustomElement$1;

export { OntarioIconAccessibility, defineCustomElement };

//# sourceMappingURL=ontario-icon-accessibility.js.map
