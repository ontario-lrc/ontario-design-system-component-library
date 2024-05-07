import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { v as validateLanguage, a as validateValueAgainstArray } from './validation-functions.js';
import { C as ConsoleMessageClass } from './console-message.js';
import { t as translations } from './global.i18n.js';

const ontarioLoadingIndicatorCss =
	'.ontario-loading-indicator__overlay,.ontario-loading-indicator__overlay--within-container{position:fixed;width:100%;left:0;right:0;top:0;bottom:0;background-color:rgba(255, 255, 255, 0.7);z-index:9999}.ontario-loading-indicator__overlay[aria-hidden=false],.ontario-loading-indicator__overlay--within-container[aria-hidden=false]{display:block}.ontario-loading-indicator__overlay[aria-hidden=true],.ontario-loading-indicator__overlay--within-container[aria-hidden=true]{display:none}.ontario-loading-indicator__overlay--within-container{position:absolute}.ontario-loading-indicator{display:flex;flex-direction:column;align-items:center;justify-content:center;position:absolute;top:50%;transform:translateY(-50%);width:100%;height:100%}.ontario-loading-indicator p{color:#4d4d4d;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;line-height:1.5;font-weight:700;word-spacing:0.025rem;margin:0.75rem 0 0}.ontario-loading-indicator__spinner{animation:rotator 1.5s linear infinite;width:3rem;height:3rem;overflow:visible}.ontario-loading-indicator__spinner circle{stroke-dasharray:1, 200;stroke-dashoffset:0;stroke-linecap:round;stroke:#4d4d4d;animation:dash 1.5s ease-in-out infinite}@keyframes rotator{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1, 200;stroke-dashoffset:0}50%{stroke-dasharray:89, 200;stroke-dashoffset:-35px}100%{stroke-dasharray:89, 200;stroke-dashoffset:-124px}}';
const OntarioLoadingIndicatorStyle0 = ontarioLoadingIndicatorCss;

const OntarioLoadingIndicator$1 = /*@__PURE__*/ proxyCustomElement(
	class OntarioLoadingIndicator extends HTMLElement {
		constructor() {
			super();
			this.__registerHost();
			this.__attachShadow();
			this.type = 'large';
			this.isLoading = false;
			this.message = undefined;
			this.fullScreenOverlay = true;
			this.language = undefined;
			this.translations = translations;
			this.isLoadingState = undefined;
			this.typeState = undefined;
		}
		/**
		 * This listens for the `setAppLanguage` event sent from the test language toggler when it is is connected to the DOM. It is used for the initial language when the input component loads.
		 */
		handleSetAppLanguage(event) {
			if (!this.language) {
				this.language = validateLanguage(event);
			}
		}
		handleHeaderLanguageToggled(event) {
			this.language = validateLanguage(event);
		}
		/**
		 * Watch for changes in the `isLoading` prop.
		 */
		isLoadingChanged(newIsLoading) {
			this.isLoadingState = newIsLoading;
		}
		/**
		 * Watch for changes in the `type` variable for validation purposes.
		 *
		 * If the user input doesn't match one of the array values then `type` will be set to its default (`large`).
		 * If a match is found in one of the array values then `type` will be set to the matching array key value.
		 */
		validateType() {
			const isValid = validateValueAgainstArray(this.type, ['large', 'small']);
			if (isValid) {
				return (this.typeState = this.type);
			} else {
				this.warnDefaultType();
				return (this.typeState = 'large');
			}
		}
		/**
		 * Print the invalid `type` warning message.
		 * @returns default type ('large')
		 */
		warnDefaultType() {
			const message = new ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' type ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-loading-indicator> ')
				.addRegularText('was set to an invalid type; only')
				.addMonospaceText(' large or small ')
				.addRegularText('are supported. The default type')
				.addMonospaceText(' large ')
				.addRegularText('is assumed.')
				.printMessage();
		}
		componentWillLoad() {
			this.language = validateLanguage(this.language);
			this.validateType();
			this.isLoadingState = this.isLoading;
		}
		render() {
			var _a;
			return this.typeState === 'large'
				? h(
						'div',
						{
							'class': this.fullScreenOverlay
								? `ontario-loading-indicator__overlay`
								: `ontario-loading-indicator__overlay--within-container`,
							'aria-hidden': this.isLoadingState ? 'false' : 'true',
							'role': 'alert',
							'aria-live': 'assertive',
						},
						h(
							'div',
							{ class: 'ontario-loading-indicator' },
							h(
								'svg',
								{
									class: 'ontario-loading-indicator__spinner',
									viewBox: '25 25 50 50',
									xmlns: 'http://www.w3.org/2000/svg',
								},
								h('circle', { 'cx': '50', 'cy': '50', 'r': '20', 'fill': 'none', 'stroke-width': '4' }),
							),
							h(
								'p',
								null,
								(_a = this.message) !== null && _a !== void 0 ? _a : this.translations.loading[`${this.language}`],
							),
						),
				  )
				: h('p', null, 'The small loading indicator is still under development.');
		}
		static get watchers() {
			return {
				isLoading: ['isLoadingChanged'],
				type: ['validateType'],
			};
		}
		static get style() {
			return OntarioLoadingIndicatorStyle0;
		}
	},
	[
		1,
		'ontario-loading-indicator',
		{
			type: [1],
			isLoading: [4, 'is-loading'],
			message: [1],
			fullScreenOverlay: [4, 'full-screen-overlay'],
			language: [1025],
			translations: [32],
			isLoadingState: [32],
			typeState: [32],
		},
		[
			[8, 'setAppLanguage', 'handleSetAppLanguage'],
			[8, 'headerLanguageToggled', 'handleHeaderLanguageToggled'],
		],
		{
			isLoading: ['isLoadingChanged'],
			type: ['validateType'],
		},
	],
);
function defineCustomElement$1() {
	if (typeof customElements === 'undefined') {
		return;
	}
	const components = ['ontario-loading-indicator'];
	components.forEach((tagName) => {
		switch (tagName) {
			case 'ontario-loading-indicator':
				if (!customElements.get(tagName)) {
					customElements.define(tagName, OntarioLoadingIndicator$1);
				}
				break;
		}
	});
}

const OntarioLoadingIndicator = OntarioLoadingIndicator$1;
const defineCustomElement = defineCustomElement$1;

export { OntarioLoadingIndicator, defineCustomElement };

//# sourceMappingURL=ontario-loading-indicator.js.map
