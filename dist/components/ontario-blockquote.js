import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { b as validatePropExists } from './validation-functions.js';
import { C as ConsoleMessageClass } from './console-message.js';

const ontarioBlockquoteCss =
	'@charset "UTF-8";.ontario-blockquote{border-left:4px solid #4d4d4d;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:400;letter-spacing:0.025rem;line-height:1.56;max-width:48rem;margin:2rem;padding:1.5rem 0 1.5rem 1.5rem;quotes:"“" "”"}@media screen and (max-width: 40em){.ontario-blockquote{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.5;margin:1.5rem 0 2rem 0}}.ontario-blockquote p{margin:0 0 1.5rem 0}.ontario-blockquote p::before{content:open-quote}.ontario-blockquote p::after{content:close-quote}.ontario-blockquote--short{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.5}@media screen and (max-width: 40em){.ontario-blockquote--short{font-size:1.4375rem;line-height:1.43}}.ontario-blockquote__attribution,.ontario-blockquote__byline{display:block;font-size:1rem;letter-spacing:0.025rem;line-height:1.56;text-align:right}@media screen and (max-width: 40em){.ontario-blockquote__attribution,.ontario-blockquote__byline{letter-spacing:0.03rem;line-height:1.5}}.ontario-blockquote__attribution{font-style:normal;font-weight:700}.ontario-blockquote__attribution::before{content:"— "}html[lang=fr] blockquote{quotes:"« " " »"}';

const OntarioBlockquote$1 = /*@__PURE__*/ proxyCustomElement(
	class extends HTMLElement {
		constructor() {
			super();
			this.__registerHost();
			this.__attachShadow();
			this.quote = undefined;
			this.attribution = undefined;
			this.byline = undefined;
			this.shortQuoteLength = 140;
			this.shortQuote = false;
			this.quoteState = undefined;
		}
		/*
		 * Watch for changes in the `quote` prop for validation purposes.
		 *
		 * If the `quote` prop is not provided, set the `quote` prop to the host textContent (if it exists).
		 * If the `quote` prop length is 140 characters or less, set the `shortQuote` state to true - this will add additonal classes for the blockquote styles.
		 */
		validateQuote() {
			var _a, _b, _c, _d;
			this.quoteState =
				(_b = (_a = this.quote) !== null && _a !== void 0 ? _a : this.host.textContent) !== null && _b !== void 0
					? _b
					: '';
			this.validateQuoteContent(this.quoteState);
			this.shortQuote =
				(_d = ((_c = this.quoteState) === null || _c === void 0 ? void 0 : _c.length) <= this.shortQuoteLength) !==
					null && _d !== void 0
					? _d
					: true;
		}
		/**
		 * Print the missing `quote` prop warning message
		 */
		validateQuoteContent(newValue) {
			if (validatePropExists(newValue)) {
				const message = new ConsoleMessageClass();
				message
					.addDesignSystemTag()
					.addMonospaceText(' quote ')
					.addRegularText('for')
					.addMonospaceText(' <ontario-blockquote> ')
					.addRegularText('was not provided')
					.printMessage();
			}
		}
		componentWillLoad() {
			this.validateQuote();
		}
		/**
		 * This helper is used to help load translations for any slots + text content passed in by the user.
		 */
		componentDidLoad() {
			const observer = new MutationObserver((mutations) => {
				mutations.forEach((mutation) => {
					if (mutation.type === 'attributes') {
						this.validateQuote();
					}
				});
			});
			const options = { attributes: true };
			observer.observe(this.host, options);
		}
		render() {
			return h(
				'blockquote',
				{ class: this.shortQuote ? `ontario-blockquote ontario-blockquote--short` : `ontario-blockquote` },
				h('p', null, this.quoteState),
				this.attribution && h('cite', { class: 'ontario-blockquote__attribution' }, this.attribution),
				this.byline && h('cite', { class: 'ontario-blockquote__byline' }, this.byline),
			);
		}
		get host() {
			return this;
		}
		static get watchers() {
			return {
				quote: ['validateQuote'],
			};
		}
		static get style() {
			return ontarioBlockquoteCss;
		}
	},
	[
		1,
		'ontario-blockquote',
		{
			quote: [1025],
			attribution: [1],
			byline: [1],
			shortQuoteLength: [32],
			shortQuote: [32],
			quoteState: [32],
		},
	],
);
function defineCustomElement$1() {
	if (typeof customElements === 'undefined') {
		return;
	}
	const components = ['ontario-blockquote'];
	components.forEach((tagName) => {
		switch (tagName) {
			case 'ontario-blockquote':
				if (!customElements.get(tagName)) {
					customElements.define(tagName, OntarioBlockquote$1);
				}
				break;
		}
	});
}

const OntarioBlockquote = OntarioBlockquote$1;
const defineCustomElement = defineCustomElement$1;

export { OntarioBlockquote, defineCustomElement };
