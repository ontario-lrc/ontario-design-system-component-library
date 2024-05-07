import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { C as ConsoleMessageClass } from './console-message.js';

const ontarioIconCss =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const OntarioIconDropdownArrowStyle0 = ontarioIconCss;

const OntarioIconDropdownArrow$1 = /*@__PURE__*/ proxyCustomElement(
	class OntarioIconDropdownArrow extends HTMLElement {
		constructor() {
			super();
			this.__registerHost();
			this.__attachShadow();
			this.iconWidth = 24;
			this.iconWidthState = undefined;
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
					.addMonospaceText(' <ontario-icon-dropdown-arrow> ')
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
				const message = new ConsoleMessageClass();
				message
					.addDesignSystemTag()
					.addMonospaceText(' colour ')
					.addRegularText('on')
					.addMonospaceText(' <ontario-icon-dropdown-arrow> ')
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
			return h(
				'div',
				{
					key: '86fbfa9837b226c4e3e99d0a339c2834f07e78d1',
					class: `ontario-icon ontario-icon--width-${this.iconWidthState}`,
					style: { width: `${this.iconWidthState}px` },
				},
				h(
					'svg',
					{
						key: 'd4476f244ff37643f6e6ebeaef6b687ec1ebd02e',
						class: 'svg-icon',
						role: 'img',
						xmlns: 'http://www.w3.org/2000/svg',
						fill: 'none',
						viewBox: '0 0 24 24',
						id: 'dropdown-arrow',
					},
					h('path', {
						key: '25c809e190f59835488573c5fec70fe9f096ab36',
						d: 'M7.965 10a.4.4 0 0 0-.37.247.4.4 0 0 0 .087.436l4.035 4.035a.4.4 0 0 0 .566 0l4.035-4.035a.4.4 0 0 0 .087-.436.4.4 0 0 0-.37-.247h-8.07z',
					}),
				),
			);
		}
		get host() {
			return this;
		}
		static get watchers() {
			return {
				iconWidth: ['validateWidth'],
			};
		}
		static get style() {
			return OntarioIconDropdownArrowStyle0;
		}
	},
	[
		1,
		'ontario-icon-dropdown-arrow',
		{
			iconWidth: [2, 'icon-width'],
			iconWidthState: [32],
		},
		undefined,
		{
			iconWidth: ['validateWidth'],
		},
	],
);
function defineCustomElement$1() {
	if (typeof customElements === 'undefined') {
		return;
	}
	const components = ['ontario-icon-dropdown-arrow'];
	components.forEach((tagName) => {
		switch (tagName) {
			case 'ontario-icon-dropdown-arrow':
				if (!customElements.get(tagName)) {
					customElements.define(tagName, OntarioIconDropdownArrow$1);
				}
				break;
		}
	});
}

const OntarioIconDropdownArrow = OntarioIconDropdownArrow$1;
const defineCustomElement = defineCustomElement$1;

export { OntarioIconDropdownArrow, defineCustomElement };

//# sourceMappingURL=ontario-icon-dropdown-arrow.js.map
