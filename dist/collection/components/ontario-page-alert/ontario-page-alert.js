import { h } from '@stencil/core';
export class OntarioPageAlert {
	constructor() {
		this.type = 'informational';
		this.heading = undefined;
		this.content = undefined;
	}
	/**
	 * @returns the classes of the page alert container based on the alert `type`.
	 */
	getClass() {
		return `ontario-alert ontario-alert--${this.type}`;
	}
	renderIcon() {
		const iconProps = { 'icon-width': 36 };
		switch (this.type) {
			case 'informational':
				return h('ontario-icon-alert-information', Object.assign({}, iconProps));
			case 'success':
				return h('ontario-icon-alert-success', Object.assign({}, iconProps));
			case 'warning':
				return h('ontario-icon-alert-warning', Object.assign({}, iconProps));
			case 'error':
				return h('ontario-icon-alert-error', Object.assign({}, iconProps));
		}
	}
	renderContent() {
		const body = this.content;
		if (typeof body === 'string') {
			return h('p', null, body);
		}
		return h('slot', null);
	}
	render() {
		return h(
			'div',
			{ class: this.getClass() },
			h(
				'div',
				{ class: 'ontario-alert__header' },
				h('div', { class: 'ontario-alert__header-icon' }, this.renderIcon()),
				h('h2', { class: 'ontario-alert__header-title ontario-h4' }, this.heading),
			),
			h('div', { class: 'ontario-alert__body' }, this.renderContent()),
		);
	}
	static get is() {
		return 'ontario-page-alert';
	}
	static get encapsulation() {
		return 'shadow';
	}
	static get originalStyleUrls() {
		return {
			$: ['ontario-page-alert.scss'],
		};
	}
	static get styleUrls() {
		return {
			$: ['ontario-page-alert.css'],
		};
	}
	static get properties() {
		return {
			type: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'PageAlertType',
					resolved: '"error" | "informational" | "success" | "warning"',
					references: {
						PageAlertType: {
							location: 'import',
							path: './ontario-page-alert.interface',
						},
					},
				},
				required: false,
				optional: false,
				docs: {
					tags: [
						{
							name: 'example',
							text: '<ontario-page-alert type="error">\n</ontario-page-alert>',
						},
					],
					text: 'The type of page alert to render. If no value is provided, the `informational` type alert would be rendered.\n\nThere are four possible values for page alert: `informational`, `warning`, `success` or `error`.',
				},
				attribute: 'type',
				reflect: false,
				defaultValue: "'informational'",
			},
			heading: {
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
							text: '<ontario-page-alert heading="Licence plates">\n</ontario-page-alert>',
						},
					],
					text: 'The heading for the page alert.',
				},
				attribute: 'heading',
				reflect: false,
			},
			content: {
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
							text: '<ontario-page-alert content="Please look out for an email confirmation with your receipt and order number.">\n</ontario-page-alert>\n\nor\n\n<ontario-page-alert>\n <p>This is a sample page alert component using slots. <a href="#">Learn more</a>.</p>\n</ontario-page-alert>',
						},
					],
					text: 'The main content for the page alert. This can be rendered as either string or HTML content.',
				},
				attribute: 'content',
				reflect: false,
			},
		};
	}
}
