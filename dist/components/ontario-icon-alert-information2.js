import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { C as ConsoleMessageClass } from './console-message.js';

const ontarioIconCss =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const OntarioIconAlertInformationStyle0 = ontarioIconCss;

const OntarioIconAlertInformation = /*@__PURE__*/ proxyCustomElement(
	class OntarioIconAlertInformation extends HTMLElement {
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
					.addMonospaceText(' <ontario-icon-alert-information> ')
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
					.addMonospaceText(' <ontario-icon-alert-information> ')
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
					key: '228c22b0e4badd20f6bd80aa13e1806c2168f663',
					class: `ontario-icon ontario-icon--width-${this.iconWidthState}`,
					style: { width: `${this.iconWidthState}px` },
				},
				h(
					'svg',
					{
						key: '73a72898e1a5f581f8fcec957fa2e94061a50288',
						class: 'svg-icon',
						role: 'img',
						xmlns: 'http://www.w3.org/2000/svg',
						fill: 'none',
						viewBox: '0 0 24 24',
						id: 'alert-information',
					},
					h('path', {
						key: '60a6660cb15f5ecaf52a37d1f941ad176ea34c67',
						d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
						fill: '#1080a6',
					}),
					h('path', {
						key: '055426b1d03ac1146758907c3c6e8564bf82f898',
						d: 'M11 17h2v-6h-2v6zm0-8h2V7h-2v2z',
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
			return OntarioIconAlertInformationStyle0;
		}
	},
	[
		1,
		'ontario-icon-alert-information',
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
	const components = ['ontario-icon-alert-information'];
	components.forEach((tagName) => {
		switch (tagName) {
			case 'ontario-icon-alert-information':
				if (!customElements.get(tagName)) {
					customElements.define(tagName, OntarioIconAlertInformation);
				}
				break;
		}
	});
}

export { OntarioIconAlertInformation as O, defineCustomElement as d };

//# sourceMappingURL=ontario-icon-alert-information2.js.map
