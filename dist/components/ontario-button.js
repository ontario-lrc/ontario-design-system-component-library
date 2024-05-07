import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { a as validateValueAgainstArray, b as validatePropExists } from './validation-functions.js';
import { C as ConsoleMessageClass } from './console-message.js';

const ButtonTypes = ['primary', 'secondary', 'tertiary', 'internalThemeDark'];
const HtmlTypes = ['button', 'reset', 'submit'];

const ontarioButtonCss =
	'.ontario-button:focus,.ontario-button:active{box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:box-shadow 0.1s ease-in-out}.ontario-button{border:none;border-radius:4px;box-sizing:border-box;box-shadow:none;display:inline-block;font-size:1.125rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:600;line-height:1.5555555556;margin:0 1.75rem 1.5rem 0;min-width:10rem;padding:0.625rem 1.5rem;text-align:center;text-decoration:none;cursor:pointer}@media screen and (max-width: 40em){.ontario-button{margin-right:0;display:block;width:100%}}.ontario-button .ontario-icon{margin-right:4px}.ontario-button--primary{background-color:#0066CC;color:#FFFFFF}.ontario-button--primary:hover{background-color:#00478F;color:#FFFFFF}.ontario-button--primary:focus{background-color:#00478F;color:#FFFFFF;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out}.ontario-button--primary:active{background-color:#002142;color:#FFFFFF;transition:background-color 0s, box-shadow 0.1s ease-in-out}.ontario-button--primary:visited{color:#FFFFFF}.ontario-button--secondary{background-color:#FFFFFF;border:2px solid #0066CC;color:#0066CC;padding-top:0.5rem;padding-bottom:0.5rem}.ontario-button--secondary:hover{background-color:#e0f0ff;border-color:#00478F;color:#00478F}.ontario-button--secondary:focus{background-color:#e0f0ff;border-color:#00478F;color:#00478F;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out}.ontario-button--secondary:active{background-color:#c2e0ff;border-color:#002142;color:#002142;transition:background-color 0s, box-shadow 0.1s ease-in-out}.ontario-button--secondary:visited{color:#0066CC}.ontario-button--tertiary{background-color:transparent;color:#0066CC;text-decoration:underline}.ontario-button--tertiary:hover{background-color:#e8e8e8;color:#00478F;text-decoration:underline}.ontario-button--tertiary:focus{background-color:#e8e8e8;color:#00478F;text-decoration:underline;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out}.ontario-button--tertiary:active{background-color:#d1d1d1;color:#002142;text-decoration:underline;transition:background-color 0s, box-shadow 0.1s ease-in-out}.ontario-button--tertiary:visited{color:#0066CC}.ontario-button--internalThemeDark{background-color:#1a1a1a;border:2px solid #FFFFFF;color:#FFFFFF}.ontario-button--internalThemeDark:hover{background-color:#4d4d4d}.ontario-button--internalThemeDark:focus{background-color:#4d4d4d;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out}.ontario-button--internalThemeDark:active{background-color:#4d4d4d;transition:background-color 0s, box-shadow 0.1s ease-in-out}.ontario-button--internalThemeDark:visited{color:#0066CC}';
const OntarioButtonStyle0 = ontarioButtonCss;

const OntarioButton$1 = /*@__PURE__*/ proxyCustomElement(
	class OntarioButton extends HTMLElement {
		constructor() {
			super();
			this.__registerHost();
			this.__attachShadow();
			this.internals = this.attachInternals();
			this.type = 'secondary';
			this.htmlType = 'button';
			this.label = undefined;
			this.ariaLabelText = undefined;
			this.elementId = undefined;
			this.typeState = undefined;
			this.htmlTypeState = undefined;
			this.labelState = undefined;
		}
		/*
		 * Watch for changes to the `label` property for validation purposes.
		 *
		 * If  no `label` prop is provided, the `label` prop will be set to the host element textContent (if it exists).
		 */
		updateLabelContent() {
			var _a, _b;
			this.labelState =
				(_b = (_a = this.label) !== null && _a !== void 0 ? _a : this.host.textContent) !== null && _b !== void 0
					? _b
					: '';
			this.validateLabelContent(this.labelState);
		}
		/**
		 * Watch for changes to the `type` property for validation purposes.
		 *
		 * If the user input doesn't match one of the array values then `type` will be set to its default (`secondary`).
		 * If a match is found in one of the array values then `type` will be set to the matching array key value.
		 */
		validateType() {
			const isValid = validateValueAgainstArray(this.type, ButtonTypes);
			if (isValid) {
				this.typeState = this.type;
			} else {
				this.typeState = this.warnDefaultType();
			}
		}
		/**
		 *  Watch for changes to the `htmlType` property for validation purposes.
		 *
		 * If the user input doesn't match one of the array values then `htmlType` will be set to its default (`submit`).
		 * If a match is found in one of the array values then `htmlType` will be set to the matching array key value.
		 */
		validateHtmlType() {
			const isValid = validateValueAgainstArray(this.htmlType, HtmlTypes);
			if (isValid) {
				this.htmlTypeState = this.htmlType;
			} else {
				this.htmlTypeState = this.warnDefaultHtmlType();
			}
		}
		/**
		 * Print the missing `label` prop warning message
		 */
		validateLabelContent(newValue) {
			if (validatePropExists(newValue)) {
				const message = new ConsoleMessageClass();
				message
					.addDesignSystemTag()
					.addMonospaceText(' label ')
					.addRegularText('for')
					.addMonospaceText(' <ontario-button> ')
					.addRegularText('was not provided')
					.printMessage();
			}
		}
		/**
		 * Print the invalid `type` prop warning message
		 * @returns default type (secondary)
		 */
		warnDefaultType() {
			const message = new ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' type ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-button> ')
				.addRegularText('was set to an invalid type; only')
				.addMonospaceText(' primary, secondary, or tertiary ')
				.addRegularText('are supported. The default type')
				.addMonospaceText(' secondary ')
				.addRegularText('is assumed.')
				.printMessage();
			return 'secondary';
		}
		/**
		 * Print the invalid `htmlType` warning message
		 * @returns default htmlType (button)
		 */
		warnDefaultHtmlType() {
			const message = new ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' htmlType ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-button> ')
				.addRegularText('was set to an invalid htmlType; only')
				.addMonospaceText(' button, reset, or submit ')
				.addRegularText('are supported. The default type')
				.addMonospaceText(' button ')
				.addRegularText('is assumed.')
				.printMessage();
			return 'button';
		}
		/**
		 * @returns the classes of the button based of the button's `type`.
		 */
		getClass() {
			return `ontario-button ontario-button--${this.typeState}`;
		}
		getId() {
			var _a;
			return (_a = this.elementId) !== null && _a !== void 0 ? _a : '';
		}
		/**
		 * Set `buttonId`, `label`, and `ariaLabel` using internal component logic.
		 */
		componentWillLoad() {
			var _a;
			this.updateLabelContent();
			this.validateHtmlType();
			this.validateType();
			this.ariaLabelText = (_a = this.ariaLabelText) !== null && _a !== void 0 ? _a : this.labelState;
		}
		componentDidLoad() {
			// Used to help load translations for any slots + text content passed in by the user.
			const observer = new MutationObserver((mutations) => {
				mutations.forEach((mutation) => {
					if (mutation.type === 'attributes') {
						this.updateLabelContent();
					}
				});
			});
			const options = { attributes: true };
			observer.observe(this.host, options);
			// Add a click event listener to handle submitting a form
			if (this.htmlTypeState === 'submit') {
				const { form } = this.internals;
				// Based off a comment within this bug about preventDefault(): https://bugzilla.mozilla.org/show_bug.cgi?id=1370630
				this.buttonRef.addEventListener('click', () =>
					form === null || form === void 0 ? void 0 : form.dispatchEvent(new Event('submit', { cancelable: true })),
				);
			}
		}
		render() {
			return h(
				'button',
				{
					'key': 'ceb1e505af5185139f76215012d1217ee6102356',
					'ref': (el) => (this.buttonRef = el),
					'type': this.htmlTypeState,
					'class': this.getClass(),
					'aria-label': this.ariaLabelText,
					'id': this.getId(),
				},
				this.labelState,
			);
		}
		static get formAssociated() {
			return true;
		}
		get host() {
			return this;
		}
		static get watchers() {
			return {
				label: ['updateLabelContent'],
				type: ['validateType'],
				htmlType: ['validateHtmlType'],
			};
		}
		static get style() {
			return OntarioButtonStyle0;
		}
	},
	[
		65,
		'ontario-button',
		{
			type: [1],
			htmlType: [1, 'html-type'],
			label: [1],
			ariaLabelText: [1025, 'aria-label-text'],
			elementId: [1025, 'element-id'],
			typeState: [32],
			htmlTypeState: [32],
			labelState: [32],
		},
		undefined,
		{
			label: ['updateLabelContent'],
			type: ['validateType'],
			htmlType: ['validateHtmlType'],
		},
	],
);
function defineCustomElement$1() {
	if (typeof customElements === 'undefined') {
		return;
	}
	const components = ['ontario-button'];
	components.forEach((tagName) => {
		switch (tagName) {
			case 'ontario-button':
				if (!customElements.get(tagName)) {
					customElements.define(tagName, OntarioButton$1);
				}
				break;
		}
	});
}

const OntarioButton = OntarioButton$1;
const defineCustomElement = defineCustomElement$1;

export { OntarioButton, defineCustomElement };

//# sourceMappingURL=ontario-button.js.map
