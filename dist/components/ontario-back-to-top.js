import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { a as validateLanguage } from './validation-functions.js';
import { t as translations } from './global.i18n.js';

const OntarioIconArrowUp = `<svg class="ontario-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>
`;

const ontarioBackToTopCss =
	'.ontario-back-to-top{position:fixed;bottom:5%;right:2%;visibility:hidden;opacity:0;-webkit-transition:0.1s ease-in-out;transition:0.1s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:3rem;padding:0.5rem 1rem 0.5rem 0.75rem;background:#e6e6e6;border:0.125rem solid #FFFFFF;border-radius:4px;-webkit-box-shadow:0 0.125rem 0.25rem rgba(26, 26, 26, 0.6);box-shadow:0 0.125rem 0.25rem rgba(26, 26, 26, 0.6);-webkit-box-sizing:border-box;box-sizing:border-box;color:#1a1a1a;line-height:1.25rem;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:600;z-index:10000;cursor:pointer}.ontario-back-to-top .ontario-icon{margin:0.125rem 0.5rem 0 0;width:2rem;height:2rem}.ontario-back-to-top:hover{background-color:#cccccc}.ontario-back-to-top:focus{background-color:#e6e6e6;-webkit-box-shadow:0 0 0 0.25rem #009ADB, 0 0.1875rem 0.3125rem 0.1875rem rgba(0, 0, 0, 0.6);box-shadow:0 0 0 0.25rem #009ADB, 0 0.1875rem 0.3125rem 0.1875rem rgba(0, 0, 0, 0.6);outline:0.25rem solid transparent;-webkit-transition:0.1s ease-in-out;transition:0.1s ease-in-out}.ontario-back-to-top:active{background-color:#b2b2b2;-webkit-box-shadow:0 0 0 0.25rem #009ADB, 0 0.3125rem 0.4375rem 0.1875rem rgba(0, 0, 0, 0.6);box-shadow:0 0 0 0.25rem #009ADB, 0 0.3125rem 0.4375rem 0.1875rem rgba(0, 0, 0, 0.6);outline:0.25rem solid transparent;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}@media screen and (max-width: 73em){.ontario-back-to-top{-ms-flex-direction:column;flex-direction:column;height:4.75rem;padding:0.375rem 0.75rem 0.5625rem 0.75rem}.ontario-back-to-top .ontario-icon{margin:0.0625rem 0 0.25rem 0;width:2rem;height:2rem}}@media screen and (max-width: 40em){.ontario-back-to-top{display:block;padding:0.25rem;font-size:0;width:3rem;height:3rem}.ontario-back-to-top .ontario-icon{margin:0.5rem 0 0 0}@-moz-document url-prefix(){.ontario-back-to-top .ontario-icon{margin-top:0.125rem}}}.ontario-back-to-top.active{visibility:visible;opacity:1}';

const OntarioBackToTop$1 = /*@__PURE__*/ proxyCustomElement(
	class extends HTMLElement {
		constructor() {
			super();
			this.__registerHost();
			this.__attachShadow();
			this.language = 'en';
			this.translations = translations;
			this.displayBackToTop = false;
			this.scrollYValue = 200;
		}
		/**
		 * This listens for the window Y scroll value to be above 200 pixels. Once it is, the Back to Top button will toggle the `displayBackToTop` state which will set an active class to control the components' visibility.
		 */
		showBackToTopButton() {
			this.displayBackToTop = window.scrollY > this.scrollYValue;
		}
		/**
		 * This listens for the `setAppLanguage` event sent from the test language toggler when it is is connected to the DOM. It is used for the initial language when the input component loads.
		 */
		handleSetAppLanguage(event) {
			this.language = validateLanguage(event);
		}
		handleHeaderLanguageToggled(event) {
			this.language = validateLanguage(event);
		}
		/**
		 * Scroll to top functionality when the Back to Top button is clicked
		 */
		scrollToTop() {
			window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
		}
		componentWillLoad() {
			this.language = validateLanguage(this.language);
		}
		render() {
			return h(
				'button',
				{
					'class': this.displayBackToTop ? `ontario-back-to-top active` : `ontario-back-to-top`,
					'onClick': this.scrollToTop,
					'aria-label': this.translations.backToTop.ariaLabel[`${this.language}`],
				},
				h('span', { 'aria-hidden': 'true', 'innerHTML': OntarioIconArrowUp }),
				this.translations.backToTop.top[`${this.language}`],
			);
		}
		get element() {
			return this;
		}
		static get style() {
			return ontarioBackToTopCss;
		}
	},
	[
		1,
		'ontario-back-to-top',
		{
			language: [1025],
			translations: [32],
			displayBackToTop: [32],
			scrollYValue: [32],
		},
		[
			[9, 'scroll', 'showBackToTopButton'],
			[8, 'setAppLanguage', 'handleSetAppLanguage'],
			[8, 'headerLanguageToggled', 'handleHeaderLanguageToggled'],
		],
	],
);
function defineCustomElement$1() {
	if (typeof customElements === 'undefined') {
		return;
	}
	const components = ['ontario-back-to-top'];
	components.forEach((tagName) => {
		switch (tagName) {
			case 'ontario-back-to-top':
				if (!customElements.get(tagName)) {
					customElements.define(tagName, OntarioBackToTop$1);
				}
				break;
		}
	});
}

const OntarioBackToTop = OntarioBackToTop$1;
const defineCustomElement = defineCustomElement$1;

export { OntarioBackToTop, defineCustomElement };
