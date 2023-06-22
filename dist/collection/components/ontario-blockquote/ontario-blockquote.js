import { h } from '@stencil/core';
import { validatePropExists } from '../../utils/validation/validation-functions';
import { ConsoleMessageClass } from '../../utils/console-message/console-message';
export class OntarioBlockquote {
	constructor() {
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
	static get is() {
		return 'ontario-blockquote';
	}
	static get encapsulation() {
		return 'shadow';
	}
	static get originalStyleUrls() {
		return {
			$: ['ontario-blockquote.scss'],
		};
	}
	static get styleUrls() {
		return {
			$: ['ontario-blockquote.css'],
		};
	}
	static get properties() {
		return {
			quote: {
				type: 'string',
				mutable: true,
				complexType: {
					original: 'string',
					resolved: 'string',
					references: {},
				},
				required: false,
				optional: false,
				docs: {
					tags: [],
					text: 'Text to be displayed as the quote.\n\nNote that wrapping the quotes in quotations is not needed - this is handled through the component styles',
				},
				attribute: 'quote',
				reflect: false,
			},
			attribution: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'string',
					resolved: 'string | undefined',
					references: {},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'Optional text to be displayed as the attribution (the author) of the quote.',
				},
				attribute: 'attribution',
				reflect: false,
			},
			byline: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'string',
					resolved: 'string | undefined',
					references: {},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'Optional text to be displayed for additional information about the attribution/author.',
				},
				attribute: 'byline',
				reflect: false,
			},
		};
	}
	static get states() {
		return {
			shortQuoteLength: {},
			shortQuote: {},
			quoteState: {},
		};
	}
	static get elementRef() {
		return 'host';
	}
	static get watchers() {
		return [
			{
				propName: 'quote',
				methodName: 'validateQuote',
			},
		];
	}
}
