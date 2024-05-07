import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { C as ConsoleMessageClass } from './console-message.js';

const ontarioIconCss =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const OntarioIconAlertSuccessStyle0 = ontarioIconCss;

const OntarioIconAlertSuccess = /*@__PURE__*/ proxyCustomElement(
	class OntarioIconAlertSuccess extends HTMLElement {
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
					.addMonospaceText(' <ontario-icon-alert-success> ')
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
					.addMonospaceText(' <ontario-icon-alert-success> ')
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
					key: 'ac6e3d40c154f61cb6c231bab55b5be7c752d450',
					class: `ontario-icon ontario-icon--width-${this.iconWidthState}`,
					style: { width: `${this.iconWidthState}px` },
				},
				h(
					'svg',
					{
						key: 'db1e754ae44cc9bbaac9add82fd6d659a5ddbf1a',
						class: 'svg-icon',
						role: 'img',
						xmlns: 'http://www.w3.org/2000/svg',
						fill: 'none',
						viewBox: '0 0 24 24',
						id: 'alert-success',
					},
					h('path', {
						key: '99cce0f53756a22bd45ac7543f3d4ee859f0e17a',
						d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.4-1.4 3.6 3.58L17.17 7l1.4 1.42L10 17z',
						fill: '#118847',
					}),
					h('path', {
						key: 'b0a02e484015d05f4d4347d1eaed13017f63b11d',
						d: 'M5 12l5 5 8.58-8.58L17.17 7 10 14.17 6.4 10.6 5 12z',
						fill: '#fff',
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
			return OntarioIconAlertSuccessStyle0;
		}
	},
	[
		1,
		'ontario-icon-alert-success',
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
function defineCustomElement() {
	if (typeof customElements === 'undefined') {
		return;
	}
	const components = ['ontario-icon-alert-success'];
	components.forEach((tagName) => {
		switch (tagName) {
			case 'ontario-icon-alert-success':
				if (!customElements.get(tagName)) {
					customElements.define(tagName, OntarioIconAlertSuccess);
				}
				break;
		}
	});
}

export { OntarioIconAlertSuccess as O, defineCustomElement as d };

//# sourceMappingURL=ontario-icon-alert-success2.js.map
