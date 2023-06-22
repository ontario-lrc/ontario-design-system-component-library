import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { b as validatePropExists } from './validation-functions.js';
import { C as ConsoleMessageClass } from './console-message.js';
import { v as v4 } from './v4.js';

const ontarioHintTextCss =
	'.ontario-hint{color:#4d4d4d;display:inline-block;margin:0 0 1rem 0;width:100%;max-width:48rem}.ontario-hint p{margin-bottom:1rem}.ontario-hint p:first-of-type{margin-top:0}.ontario-hint p:last-of-type{margin-bottom:0}';

const OntarioHintText = /*@__PURE__*/ proxyCustomElement(
	class extends HTMLElement {
		constructor() {
			super();
			this.__registerHost();
			this.__attachShadow();
			this.hintContentType = 'string';
			this.hint = undefined;
			this.elementId = undefined;
			this.hintState = undefined;
		}
		/**
		 * Watch for changes to the `hintContentType` prop for validation purposes.
		 * If none is provided, or the wrong type is provided, it will default to `string`.
		 */
		checkHintContentType() {
			if (this.hintContentType !== 'string' && this.hintContentType !== 'html') {
				const message = new ConsoleMessageClass();
				message
					.addDesignSystemTag()
					.addMonospaceText(' hintContentType ')
					.addRegularText('for')
					.addMonospaceText(' <ontario-hint-text> ')
					.addRegularText('was not one of the permitted types. A default type of `string` will be applied.')
					.printMessage();
				return (this.hintContentType = 'string');
			}
			return this.hintContentType;
		}
		/*
		 * Watch for changes in the `hint` prop for validation purposes.
		 * If no `hint` prop is provided, the `hint` will be set to the host element textContent (if it exists).
		 */
		updateHintContent() {
			var _a, _b;
			this.hintState =
				(_b = (_a = this.hint) !== null && _a !== void 0 ? _a : this.host.textContent) !== null && _b !== void 0
					? _b
					: '';
			this.validateHintContent(this.hintState);
		}
		/*
		 * Validate the `hint` and make sure the `hint` has a value.
		 * Log a warning if user doesn't input a value for the `hint` or element content.
		 */
		validateHintContent(newValue) {
			// If element content is not provided, check whether prop exists
			if (!this.host.textContent) {
				if (validatePropExists(newValue)) {
					const message = new ConsoleMessageClass();
					message
						.addDesignSystemTag()
						.addMonospaceText(' hint ')
						.addRegularText('for')
						.addMonospaceText(' <ontario-hint-text> ')
						.addRegularText('was not provided')
						.printMessage();
				}
			}
		}
		getId() {
			var _a;
			return (_a = this.elementId) !== null && _a !== void 0 ? _a : '';
		}
		/**
		 * This method returns the ontario-hint-text id. It is used to make sure the hint text and `aria-describedby` value of other form components match when the internal hint text props are used.
		 *
		 * @returns Promise<string | undefined>
		 */
		async getHintTextId() {
			return this.elementId;
		}
		/**
		 * Set `hint` using internal component logic
		 */
		componentWillLoad() {
			var _a;
			this.updateHintContent();
			this.checkHintContentType();
			this.elementId = (_a = this.elementId) !== null && _a !== void 0 ? _a : v4();
		}
		/**
		 * This helper is used to help load translations for any slots + text content passed in by the user.
		 */
		componentDidLoad() {
			const observer = new MutationObserver((mutations) => {
				mutations.forEach((mutation) => {
					if (mutation.type === 'attributes') {
						this.updateHintContent();
					}
				});
			});
			const options = { attributes: true };
			observer.observe(this.host, options);
		}
		render() {
			return this.hintContentType === 'string'
				? h('p', { id: this.getId(), class: 'ontario-hint' }, this.hintState)
				: h('div', { id: this.getId(), class: 'ontario-hint', innerHTML: this.hintState });
		}
		get host() {
			return this;
		}
		static get watchers() {
			return {
				hintContentType: ['checkHintContentType'],
				hint: ['updateHintContent'],
			};
		}
		static get style() {
			return ontarioHintTextCss;
		}
	},
	[
		1,
		'ontario-hint-text',
		{
			hintContentType: [1025, 'hint-content-type'],
			hint: [1],
			elementId: [1025, 'element-id'],
			hintState: [32],
			getHintTextId: [64],
		},
	],
);
function defineCustomElement() {
	if (typeof customElements === 'undefined') {
		return;
	}
	const components = ['ontario-hint-text'];
	components.forEach((tagName) => {
		switch (tagName) {
			case 'ontario-hint-text':
				if (!customElements.get(tagName)) {
					customElements.define(tagName, OntarioHintText);
				}
				break;
		}
	});
}

export { OntarioHintText as O, defineCustomElement as d };
