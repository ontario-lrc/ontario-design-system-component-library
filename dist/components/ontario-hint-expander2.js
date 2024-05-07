import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { b as validatePropExists } from './validation-functions.js';
import { C as ConsoleMessageClass } from './console-message.js';
import { d as defineCustomElement$2 } from './ontario-icon-chevron-down2.js';
import { d as defineCustomElement$1 } from './ontario-icon-chevron-up2.js';
import { v as v4 } from './v4.js';

const ontarioHintExpanderCss =
	'.ontario-hint-expander__button:focus,.ontario-hint-expander__button:active{box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:box-shadow 0.1s ease-in-out}.ontario-hint-expander__container{max-width:48rem}.ontario-hint-expander__button{color:#0066CC;cursor:pointer;background:none;border:none;display:flex;align-items:center;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:400;font-size:1rem;text-align:left;margin:0 0 1rem 0;padding:0 0.25rem 0 0}.ontario-hint-expander__button-icon--close{display:none;margin-right:0.25rem}.ontario-hint-expander__button-icon--open{display:inline-block;margin-right:0.25rem}.ontario-hint-expander__button:hover{color:#00478F}.ontario-hint-expander__button:active{color:#002142}.ontario-hint-expander__button>*{pointer-events:none}.ontario-hint-expander__content{border-left:4px solid #cccccc;color:#1a1a1a;background-color:#f2f2f2;display:none;padding:1rem 1rem 1rem calc(1rem + 0.25rem);margin:0 0 1rem 0.25rem}.ontario-hint-expander__content *:first-child{margin-top:0}.ontario-hint-expander__content *:last-child{margin-bottom:0}.ontario-hint-expander__content img{width:100%}@media screen and (min-width: 40em){.ontario-hint-expander__content img{width:50%}}.ontario-hint-expander__content.ontario-expander__content--opened{display:block}.ontario-hint-expander__container.ontario-expander--active .ontario-hint-expander__button-icon--close{display:inline-block}.ontario-hint-expander__container.ontario-expander--active .ontario-hint-expander__button-icon--open{display:none}.ontario-hint-expander__checkbox-exists-true{margin:0.75rem 0 0 0.5rem}@media screen and (max-width: 40em){.ontario-hint-expander__checkbox-exists-true{margin-top:1rem}}.ontario-input+.ontario-hint-expander__container{margin-top:-1.5rem !important}.ontario-checkboxes__item .ontario-hint-expander__container,.ontario-radios__item .ontario-hint-expander__container{margin-left:0.5rem}.ontario-checkboxes__label+.ontario-hint-expander__container,.ontario-radios__label+.ontario-hint-expander__container{margin-top:0.75rem}@media screen and (max-width: 40em){.ontario-checkboxes__label+.ontario-hint-expander__container,.ontario-radios__label+.ontario-hint-expander__container{margin-top:1rem}}';
const OntarioHintExpanderStyle0 = ontarioHintExpanderCss;

const OntarioHintExpander = /*@__PURE__*/ proxyCustomElement(
	class OntarioHintExpander extends HTMLElement {
		constructor() {
			super();
			this.__registerHost();
			this.__attachShadow();
			this.toggleExpanderEvent = createEvent(this, 'toggleExpanderEvent', 7);
			this.onClick = (ev) => {
				const hintExpander = ev.target;
				const hintExpanderParent =
					hintExpander === null || hintExpander === void 0 ? void 0 : hintExpander.parentElement;
				hintExpanderParent === null || hintExpanderParent === void 0
					? void 0
					: hintExpanderParent.classList.toggle('ontario-expander--active');
				let content =
					hintExpanderParent === null || hintExpanderParent === void 0
						? void 0
						: hintExpanderParent.querySelector("[data-toggle='ontario-expander-content']");
				content === null || content === void 0 ? void 0 : content.classList.toggle('ontario-expander__content--opened');
				(
					content === null || content === void 0
						? void 0
						: content.classList.contains('ontario-expander__content--opened')
				)
					? content.setAttribute('aria-hidden', 'false')
					: content === null || content === void 0
					? void 0
					: content.setAttribute('aria-hidden', 'true');
				(
					hintExpanderParent === null || hintExpanderParent === void 0
						? void 0
						: hintExpanderParent.classList.contains('ontario-expander--active')
				)
					? hintExpanderParent === null || hintExpanderParent === void 0
						? void 0
						: hintExpanderParent.setAttribute('aria-expanded', 'true')
					: hintExpanderParent === null || hintExpanderParent === void 0
					? void 0
					: hintExpanderParent.setAttribute('aria-expanded', 'false');
				this.toggleExpanderEvent.emit(ev);
			};
			this.hintContentType = 'string';
			this.hint = undefined;
			this.content = undefined;
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
			this.validateHint(this.hintState);
		}
		/*
		 * Watch for changes to the `content` prop for validation purposes.
		 *
		 * Validate the `content` and make sure the `content` has a value.
		 * Log a warning if user doesn't input a value for the `content` or element content.
		 */
		validateContent(newValue) {
			if (validatePropExists(newValue)) {
				const message = new ConsoleMessageClass();
				message
					.addDesignSystemTag()
					.addMonospaceText(' content ')
					.addRegularText('for')
					.addMonospaceText(' <ontario-hint-expander> ')
					.addRegularText('was not provided')
					.printMessage();
			}
		}
		/*
		 * Watch for changes in the `hint` prop for validation purposes.
		 *
		 * Validate the `hint` and make sure the `hint` has a value.
		 * Log a warning if user doesn't input a value for the `hint`.
		 */
		validateHint(newValue) {
			if (validatePropExists(newValue)) {
				const message = new ConsoleMessageClass();
				message
					.addDesignSystemTag()
					.addMonospaceText(' hint ')
					.addRegularText('for')
					.addMonospaceText(' <ontario-hint-expander> ')
					.addRegularText('was not provided')
					.printMessage();
			}
		}
		/**
		 * Set `hint` using internal component logic
		 */
		componentWillLoad() {
			var _a;
			this.elementId = (_a = this.elementId) !== null && _a !== void 0 ? _a : v4();
			this.updateHintContent();
			this.checkHintContentType();
			this.validateContent(this.content);
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
		getId() {
			var _a;
			return (_a = this.elementId) !== null && _a !== void 0 ? _a : '';
		}
		render() {
			return h(
				'div',
				{ key: 'de5d2b0a0639a3e14fdf9cd34b6781123ebf13a9', class: 'ontario-hint-expander__container' },
				h(
					'button',
					{
						'key': 'c586376903b31fb1b538404ae5b4259102df500a',
						'class': 'ontario-hint-expander__button',
						'onClick': this.onClick,
						'id': `hint-expander-button-${this.getId()}`,
						'aria-controls': `hint-expander-content-${this.getId()}`,
						'aria-expanded': 'false',
						'data-toggle': 'ontario-collapse',
					},
					h(
						'span',
						{
							key: 'b689528264cebabec3c09e2df78d4d9a9e75146c',
							class: 'ontario-hint-expander__button-icon--close ontario-icon',
						},
						h('ontario-icon-chevron-up', { key: 'bf7c9b5056e86ca9c1c9dc212b4f9442db826981', colour: 'inherit' }),
					),
					h(
						'span',
						{ key: 'f67fca9ae4a6de2df5410d1294cf2735dcb8f594', class: 'ontario-hint-expander__button-icon--open' },
						h('ontario-icon-chevron-down', { key: '8b9e57741ce0a0e93128a0f2d850b3f3eca0cb49', colour: 'inherit' }),
					),
					this.hint,
				),
				h(
					'div',
					{
						'key': 'bd9dda3470cf492efdf50601262da71b28d35201',
						'class': 'ontario-hint-expander__content',
						'id': `hint-expander-content-${this.getId()}`,
						'aria-labelledby': `hint-expander-button-${this.getId()}`,
						'aria-hidden': 'true',
						'data-toggle': 'ontario-expander-content',
					},
					this.hintContentType === 'string' ? this.content : h('span', { innerHTML: this.content }),
				),
			);
		}
		get host() {
			return this;
		}
		static get watchers() {
			return {
				hintContentType: ['checkHintContentType'],
				hint: ['updateHintContent'],
				content: ['validateContent'],
			};
		}
		static get style() {
			return OntarioHintExpanderStyle0;
		}
	},
	[
		1,
		'ontario-hint-expander',
		{
			hintContentType: [1025, 'hint-content-type'],
			hint: [1],
			content: [1025],
			elementId: [1025, 'element-id'],
			hintState: [32],
		},
		undefined,
		{
			hintContentType: ['checkHintContentType'],
			hint: ['updateHintContent'],
			content: ['validateContent'],
		},
	],
);
function defineCustomElement() {
	if (typeof customElements === 'undefined') {
		return;
	}
	const components = ['ontario-hint-expander', 'ontario-icon-chevron-down', 'ontario-icon-chevron-up'];
	components.forEach((tagName) => {
		switch (tagName) {
			case 'ontario-hint-expander':
				if (!customElements.get(tagName)) {
					customElements.define(tagName, OntarioHintExpander);
				}
				break;
			case 'ontario-icon-chevron-down':
				if (!customElements.get(tagName)) {
					defineCustomElement$2();
				}
				break;
			case 'ontario-icon-chevron-up':
				if (!customElements.get(tagName)) {
					defineCustomElement$1();
				}
				break;
		}
	});
}

export { OntarioHintExpander as O, defineCustomElement as d };

//# sourceMappingURL=ontario-hint-expander2.js.map
