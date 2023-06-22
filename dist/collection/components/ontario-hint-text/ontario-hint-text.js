import { h } from '@stencil/core';
import { v4 as uuid } from 'uuid';
import { validatePropExists } from '../../utils/validation/validation-functions';
import { ConsoleMessageClass } from '../../utils/console-message/console-message';
export class OntarioHintText {
	constructor() {
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
		this.elementId = (_a = this.elementId) !== null && _a !== void 0 ? _a : uuid();
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
	static get is() {
		return 'ontario-hint-text';
	}
	static get encapsulation() {
		return 'shadow';
	}
	static get originalStyleUrls() {
		return {
			$: ['ontario-hint-text.scss'],
		};
	}
	static get styleUrls() {
		return {
			$: ['ontario-hint-text.css'],
		};
	}
	static get properties() {
		return {
			hintContentType: {
				type: 'string',
				mutable: true,
				complexType: {
					original: 'HintContentType',
					resolved: '"html" | "string" | undefined',
					references: {
						HintContentType: {
							location: 'import',
							path: '../../utils/common/common.interface',
						},
					},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'The content type of the hint.\nIf no prop is passed, it will default to a string.\nIf the hint requires multiple lines or HTML, the `hintContentType` prop should be set to `html`.',
				},
				attribute: 'hint-content-type',
				reflect: false,
				defaultValue: "'string'",
			},
			hint: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'string',
					resolved: 'string',
					references: {},
				},
				required: false,
				optional: false,
				docs: {
					tags: [
						{
							name: 'example',
							text: '<ontario-hint-text hint="Override Hint Text">Hint Text</ontario-button>\n\nThe resulting hint text will display `"Override Hint Text"`.',
						},
					],
					text: 'Text to display as the hint text statement.\n\nSetting the hint can be done using the host element textContent or through setting this property.  This property will take precedence.',
				},
				attribute: 'hint',
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
					text: 'The unique identifier of the element. This is optional - if no ID is passed, one will be generated.',
				},
				attribute: 'element-id',
				reflect: false,
			},
		};
	}
	static get states() {
		return {
			hintState: {},
		};
	}
	static get methods() {
		return {
			getHintTextId: {
				complexType: {
					signature: '() => Promise<string | undefined>',
					parameters: [],
					references: {
						Promise: {
							location: 'global',
						},
					},
					return: 'Promise<string | undefined>',
				},
				docs: {
					text: 'This method returns the ontario-hint-text id. It is used to make sure the hint text and `aria-describedby` value of other form components match when the internal hint text props are used.',
					tags: [
						{
							name: 'returns',
							text: 'Promise<string | undefined>',
						},
					],
				},
			},
		};
	}
	static get elementRef() {
		return 'host';
	}
	static get watchers() {
		return [
			{
				propName: 'hintContentType',
				methodName: 'checkHintContentType',
			},
			{
				propName: 'hint',
				methodName: 'updateHintContent',
			},
		];
	}
}
