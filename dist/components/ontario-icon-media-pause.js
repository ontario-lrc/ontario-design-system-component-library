import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { I as IconColours, l as lib } from './index2.js';
import { C as ConsoleMessageClass } from './console-message.js';
import { a as validateValueAgainstArray } from './validation-functions.js';

const ontarioIconCss =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const OntarioIconMediaPauseStyle0 = ontarioIconCss;

const OntarioIconMediaPause$1 = /*@__PURE__*/ proxyCustomElement(
	class OntarioIconMediaPause extends HTMLElement {
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
					.addMonospaceText(' <ontario-icon-media-pause> ')
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
				.addMonospaceText(' <ontario-icon-media-pause> ')
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
					key: 'b7bc856e176aebc076fe331a688655f06c20d476',
					class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
					style: { width: `${this.iconWidthState}px` },
				},
				h(
					'svg',
					{
						key: '97c6ff34f0577ac48cc33073b4324cd9da417cf0',
						class: 'svg-icon',
						style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
						role: 'img',
						xmlns: 'http://www.w3.org/2000/svg',
						viewBox: '0 0 24 24',
						id: 'media-pause',
					},
					h('path', { key: '9824ed09819841897039685cf0bbc488e28a734c', d: 'M6 19h4V5H6v14zm8-14v14h4V5h-4z' }),
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
			return OntarioIconMediaPauseStyle0;
		}
	},
	[
		1,
		'ontario-icon-media-pause',
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
	const components = ['ontario-icon-media-pause'];
	components.forEach((tagName) => {
		switch (tagName) {
			case 'ontario-icon-media-pause':
				if (!customElements.get(tagName)) {
					customElements.define(tagName, OntarioIconMediaPause$1);
				}
				break;
		}
	});
}

const OntarioIconMediaPause = OntarioIconMediaPause$1;
const defineCustomElement = defineCustomElement$1;

export { OntarioIconMediaPause, defineCustomElement };

//# sourceMappingURL=ontario-icon-media-pause.js.map
