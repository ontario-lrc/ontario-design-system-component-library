// content automatically generated by `generate-icons.js` begins
import { h } from '@stencil/core';
import { ConsoleMessageClass } from '../../utils/console-message/console-message';
export class OntarioIconAlertWarning {
	constructor() {
		this.iconWidth = 24;
		this.iconWidthState = undefined;
	}
	/**
	 * Watch for changes in the `iconWidth` variable for validation purpose.
	 * If the user input is not a number or is a negative number then `iconWidth` will be set to its default (24).
	 */
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const message = new ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-alert-warning> ')
				.addRegularText(
					`${
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number'
					}; only a positive number is allowed. The default size of`,
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	}
	/**
	 * Validate that the `colour` attribute is not set by users
	 * Prints a warning message if the `colour` attribute is set
	 */
	validateColour() {
		if (this.host.hasAttribute('colour')) {
			const message = new ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-alert-warning> ')
				.addRegularText('cannot be set. The provided colour is ignored.')
				.printMessage();
		}
	}
	/**
	 * Stencil component lifecycle method that is called once after the component is first connected to the DOM.
	 */
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	/**
	 * Returns the HTML code to be rendered into a custom element.
	 */
	render() {
		return h(
			'div',
			{
				key: '8bf04faecab04b29cd220120e59953bd4f9d6f22',
				class: `ontario-icon ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			h(
				'svg',
				{
					key: 'd0686a61e3ef54717d175b5c433797c3cc944a10',
					class: 'svg-icon',
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'alert-warning',
				},
				h('path', {
					key: '68ca96d0828d201b8abf86b393cd8e6c9ab82d65',
					d: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z',
					fill: '#ffd440',
				}),
				h('path', { key: '2830b87f820ec3f81e31c6ae765fa8287be26378', d: 'M11 10h2v4h-2zm0 6h2v2h-2z', fill: '#000' }),
			),
		);
	}
	static get is() {
		return 'ontario-icon-alert-warning';
	}
	static get encapsulation() {
		return 'shadow';
	}
	static get originalStyleUrls() {
		return {
			$: ['ontario-icon.scss'],
		};
	}
	static get styleUrls() {
		return {
			$: ['ontario-icon.css'],
		};
	}
	static get properties() {
		return {
			iconWidth: {
				type: 'number',
				mutable: false,
				complexType: {
					original: 'IconSize',
					resolved: '16 | 24 | 32 | 48',
					references: {
						IconSize: {
							location: 'import',
							path: './icon.types',
							id: 'src/components/ontario-icon/icon.types.ts::IconSize',
						},
					},
				},
				required: false,
				optional: false,
				docs: {
					tags: [],
					text: 'The icon width will autogenerate the height since the icons are in square format, thus preserving\nthe aspect ratio.',
				},
				attribute: 'icon-width',
				reflect: false,
				defaultValue: '24',
			},
		};
	}
	static get states() {
		return {
			iconWidthState: {},
		};
	}
	static get elementRef() {
		return 'host';
	}
	static get watchers() {
		return [
			{
				propName: 'iconWidth',
				methodName: 'validateWidth',
			},
		];
	}
}
// content automatically generated by `generate-icons.js` ends
//# sourceMappingURL=ontario-icon-alert-warning.js.map
