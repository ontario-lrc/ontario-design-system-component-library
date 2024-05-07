import { h } from '@stencil/core';
import { ButtonTypes, HtmlTypes } from './ontario-button.types';
import { validatePropExists, validateValueAgainstArray } from '../../utils/validation/validation-functions';
import { ConsoleMessageClass } from '../../utils/console-message/console-message';
export class OntarioButton {
	constructor() {
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
	static get is() {
		return 'ontario-button';
	}
	static get encapsulation() {
		return 'shadow';
	}
	static get formAssociated() {
		return true;
	}
	static get originalStyleUrls() {
		return {
			$: ['ontario-button.scss'],
		};
	}
	static get styleUrls() {
		return {
			$: ['ontario-button.css'],
		};
	}
	static get properties() {
		return {
			type: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'ButtonType',
					resolved: '"internalThemeDark" | "primary" | "secondary" | "tertiary"',
					references: {
						ButtonType: {
							location: 'import',
							path: './ontario-button.types',
							id: 'src/components/ontario-button/ontario-button.types.ts::ButtonType',
						},
					},
				},
				required: false,
				optional: false,
				docs: {
					tags: [],
					text: "The type of button to render.\n\nIf no type is passed, it will default to 'secondary'.",
				},
				attribute: 'type',
				reflect: false,
				defaultValue: "'secondary'",
			},
			htmlType: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'HtmlType',
					resolved: '"button" | "reset" | "submit"',
					references: {
						HtmlType: {
							location: 'import',
							path: './ontario-button.types',
							id: 'src/components/ontario-button/ontario-button.types.ts::HtmlType',
						},
					},
				},
				required: false,
				optional: false,
				docs: {
					tags: [],
					text: "The native HTML button type the button should use.\n\nIf no htmlType is passed, it will default to 'button'.",
				},
				attribute: 'html-type',
				reflect: false,
				defaultValue: "'button'",
			},
			label: {
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
					tags: [
						{
							name: 'example',
							text: '<ontario-button label="Label Text">Text</ontario-button>\n\nThe resulting button will have the label `"Label Text"`.',
						},
					],
					text: 'Text to be displayed within the button. This will override the text provided through the host element textContent.',
				},
				attribute: 'label',
				reflect: false,
			},
			ariaLabelText: {
				type: 'string',
				mutable: true,
				complexType: {
					original: 'string',
					resolved: 'string | undefined',
					references: {},
				},
				required: false,
				optional: true,
				docs: {
					tags: [
						{
							name: 'example',
							text: '<ontario-button aria-label-text="Click button to open map">Open</ontario button>',
						},
					],
					text: 'Provides more context as to what the button interaction is doing. This should only be used for accessibility purposes, if the button interaction requires more description than what the text provides.\n\n This is optional.',
				},
				attribute: 'aria-label-text',
				reflect: false,
			},
			elementId: {
				type: 'string',
				mutable: true,
				complexType: {
					original: 'string',
					resolved: 'string | undefined',
					references: {},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'The unique identifier of the button. This is optional - if no ID is passed, one will be generated.',
				},
				attribute: 'element-id',
				reflect: false,
			},
		};
	}
	static get states() {
		return {
			typeState: {},
			htmlTypeState: {},
			labelState: {},
		};
	}
	static get elementRef() {
		return 'host';
	}
	static get watchers() {
		return [
			{
				propName: 'label',
				methodName: 'updateLabelContent',
			},
			{
				propName: 'type',
				methodName: 'validateType',
			},
			{
				propName: 'htmlType',
				methodName: 'validateHtmlType',
			},
		];
	}
	static get attachInternalsMemberName() {
		return 'internals';
	}
}
//# sourceMappingURL=ontario-button.js.map
