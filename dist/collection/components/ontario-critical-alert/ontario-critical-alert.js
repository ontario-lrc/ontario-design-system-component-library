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
			{ key: '841c4ff6a936664a93111409d051c833a578454c', class: 'ontario-critical-alert' },
			h(
				'div',
				{ key: '1086dd05bbbd7b3a8bd0c7befbbe63e60474a03d', class: 'ontario-row' },
				h(
					'div',
					{ key: '75f974793fa516fe893c6843db567d93eb146fc0', class: 'ontario-column ontario-small-12' },
					h(
						'div',
						{ key: '5de3756f99c4d11da66d1427b505753df872cf7a', class: 'ontario-critical-alert__body' },
						h('div', {
							key: '8ff2551b474a794a1134d6fc04e9bffe6072f252',
							class: 'ontario-critical-alert__icon',
							innerHTML: OntarioIconCriticalAlertWarning,
						}),
						h('p', { key: 'a63626aa08b991dbc8651b56a6aa08b6e285b1a7' }, this.renderContent()),
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
							id: 'global::HTMLElement',
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
//# sourceMappingURL=ontario-critical-alert.js.map
