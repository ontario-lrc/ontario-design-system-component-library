import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { C as ConsoleMessageClass } from './console-message.js';

const ontarioIconCss =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const OntarioIconAlertWarningStyle0 = ontarioIconCss;

const OntarioIconAlertWarning = /*@__PURE__*/ proxyCustomElement(
	class OntarioIconAlertWarning extends HTMLElement {
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
					.addMonospaceText(' <ontario-icon-alert-warning> ')
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
					.addMonospaceText(' <ontario-icon-alert-warning> ')
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
					key: '8bf04faecab04b29cd220120e59953bd4f9d6f22',
					class: `ontario-icon ontario-icon--width-${this.iconWidthState}`,
					style: { width: `${this.iconWidthState}px` },
				},
				h(
					'svg',
					{
						key: 'd0686a61e3ef54717d175b5c433797c3cc944a10',
						class: 'svg-icon',
						role: 'img',
						xmlns: 'http://www.w3.org/2000/svg',
						fill: 'none',
						viewBox: '0 0 24 24',
						id: 'alert-warning',
					},
					h('path', {
						key: '68ca96d0828d201b8abf86b393cd8e6c9ab82d65',
						d: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z',
						fill: '#ffd440',
					}),
					h('path', { key: '2830b87f820ec3f81e31c6ae765fa8287be26378', d: 'M11 10h2v4h-2zm0 6h2v2h-2z', fill: '#000' }),
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
			return OntarioIconAlertWarningStyle0;
		}
	},
	[
		1,
		'ontario-icon-alert-warning',
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
	const components = ['ontario-icon-alert-warning'];
	components.forEach((tagName) => {
		switch (tagName) {
			case 'ontario-icon-alert-warning':
				if (!customElements.get(tagName)) {
					customElements.define(tagName, OntarioIconAlertWarning);
				}
				break;
		}
	});
}

export { OntarioIconAlertWarning as O, defineCustomElement as d };

//# sourceMappingURL=ontario-icon-alert-warning2.js.map
