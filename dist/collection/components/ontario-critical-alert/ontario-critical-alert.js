import { h } from '@stencil/core';
import OntarioIconCriticalAlertWarning from '../ontario-icon/assets/ontario-icon-critical-alert-warning.svg';
import { validatePropExists } from '../../utils/validation/validation-functions';
import { ConsoleMessageClass } from '../../utils/console-message/console-message';
export class OntarioCriticalAlert {
	constructor() {
		this.content = undefined;
	}
	/**
	 * Watch for changes to the `content` prop value.
	 *
	 * If no `content` prop was passed, or no host element textContent exists, a warning message will be printed.
	 *
	 * @param newValue string | HTMLElement
	 */
	validateCriticalAlertContent(newValue) {
		// if no slot is passed, run the `validatePropExists` function
		if (!this.host.textContent) {
			if (validatePropExists(newValue)) {
				/**
				 * Print the quote warning message
				 */
				const message = new ConsoleMessageClass();
				message
					.addDesignSystemTag()
					.addMonospaceText(' content ')
					.addRegularText('for')
					.addMonospaceText(' <ontario-critical-alert> ')
					.addRegularText('was not provided.')
					.printMessage();
			}
		}
	}
	renderContent() {
		const content = this.content;
		if (typeof content === 'string') {
			return content;
		}
		return h('slot', null);
	}
	componentWillLoad() {
		this.validateCriticalAlertContent(this.content);
	}
	render() {
		return h(
			'div',
			{ class: 'ontario-critical-alert' },
			h(
				'div',
				{ class: 'ontario-row' },
				h(
					'div',
					{ class: 'ontario-column ontario-small-12' },
					h(
						'div',
						{ class: 'ontario-critical-alert__body' },
						h('div', { class: 'ontario-critical-alert__icon', innerHTML: OntarioIconCriticalAlertWarning }),
						h('p', null, this.renderContent()),
					),
				),
			),
		);
	}
	static get is() {
		return 'ontario-critical-alert';
	}
	static get encapsulation() {
		return 'shadow';
	}
	static get originalStyleUrls() {
		return {
			$: ['ontario-critical-alert.scss'],
		};
	}
	static get styleUrls() {
		return {
			$: ['ontario-critical-alert.css'],
		};
	}
	static get properties() {
		return {
			content: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'string | HTMLElement',
					resolved: 'HTMLElement | string',
					references: {
						HTMLElement: {
							location: 'global',
						},
					},
				},
				required: false,
				optional: false,
				docs: {
					tags: [
						{
							name: 'example',
							text: '<ontario-critical-alert content="COVID-19 State of emergency extended until May 12, 2020."></ontario-critical-alert>\n\nor\n\n<ontario-critical-alert>\n <a href="#">COVID-19 State of emergency</a> extended until May 12, 2020.\n</ontario-critical-alert>',
						},
					],
					text: 'Content for critical alert message. It can be either string or HTML content. The content is already wrapped in a paragraph tag, so if using HTML content, the paragraph tag can be ommitted.',
				},
				attribute: 'content',
				reflect: false,
			},
		};
	}
	static get elementRef() {
		return 'host';
	}
	static get watchers() {
		return [
			{
				propName: 'content',
				methodName: 'validateCriticalAlertContent',
			},
		];
	}
}
