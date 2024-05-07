import { h } from '@stencil/core';
import { v4 as uuid } from 'uuid';
import { validatePropExists } from '../../utils/validation/validation-functions';
import { ConsoleMessageClass } from '../../utils/console-message/console-message';
export class OntarioHintExpander {
	constructor() {
		this.onClick = (ev) => {
			const hintExpander = ev.target;
			const hintExpanderParent = hintExpander === null || hintExpander === void 0 ? void 0 : hintExpander.parentElement;
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
		this.elementId = (_a = this.elementId) !== null && _a !== void 0 ? _a : uuid();
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
	static get is() {
		return 'ontario-hint-expander';
	}
	static get encapsulation() {
		return 'shadow';
	}
	static get originalStyleUrls() {
		return {
			$: ['ontario-hint-expander.scss'],
		};
	}
	static get styleUrls() {
		return {
			$: ['ontario-hint-expander.css'],
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
							id: 'src/utils/common/common.interface.ts::HintContentType',
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
					tags: [],
					text: 'Text to display as the hint expander question/statement',
				},
				attribute: 'hint',
				reflect: false,
			},
			content: {
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
					tags: [
						{
							name: 'example',
							text: '<ontario-hint-expander hint="This is the hint"\n  <img src="https://www.jquery-az.com/html/images/banana.jpg" title="Title of image" alt="alt text here"/>\n  <p> Here is the content beside the image </p>\n</ontario-hint-expander>',
						},
					],
					text: 'Content to display as the hint, once the expander is toggled open.\nPlease note that any content that is passed into this prop will only be displayed as a string.\nIf you would like to add HTML content, supply child content to the component.',
				},
				attribute: 'content',
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
					text: 'Used to used to establish a relationship between hint text content and elements using aria-describedby. This is optional - if no ID is passed, one will be generated.',
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
	static get events() {
		return [
			{
				method: 'toggleExpanderEvent',
				name: 'toggleExpanderEvent',
				bubbles: true,
				cancelable: true,
				composed: true,
				docs: {
					tags: [],
					text: 'Emitted when a keyboard input or mouse event occurs.',
				},
				complexType: {
					original: 'MouseEvent | KeyboardEvent',
					resolved: 'KeyboardEvent | MouseEvent',
					references: {
						MouseEvent: {
							location: 'global',
							id: 'global::MouseEvent',
						},
						KeyboardEvent: {
							location: 'global',
							id: 'global::KeyboardEvent',
						},
					},
				},
			},
		];
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
			{
				propName: 'content',
				methodName: 'validateContent',
			},
		];
	}
}
//# sourceMappingURL=ontario-hint-expander.js.map
