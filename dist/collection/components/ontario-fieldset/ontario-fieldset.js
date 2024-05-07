import { h } from '@stencil/core';
import { CaptionTypes } from '../../utils/common/input-caption/input-caption.types';
import { ConsoleMessageClass } from '../../utils/console-message/console-message';
import { validatePropExists, validateValueAgainstArray } from '../../utils/validation/validation-functions';
export class OntarioFieldset {
	constructor() {
		this.legend = undefined;
		this.legendSize = 'default';
	}
	/**
	 * Watch for changes to the legendSize prop.
	 * This is for validation purposes to make sure the legendSize matches one of the CaptionTypes.
	 */
	validateLegendSize() {
		const isValid = validateValueAgainstArray(this.legendSize, CaptionTypes);
		if (isValid) {
			return this.legendSize;
		} else {
			const message = new ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(` legendSize ${this.legendSize} `)
				.addRegularText('for')
				.addMonospaceText(' <ontario-fieldset> ')
				.addRegularText('is not a valid type. A default size will be applied.')
				.printMessage();
			return 'default';
		}
	}
	/*
	 * Watch for changes in the `legend` prop for validation purposes.
	 */
	validateLegend() {
		this.validateLegendText(this.legend);
	}
	/**
	 * Print the legend warning message
	 */
	validateLegendText(newValue) {
		if (validatePropExists(newValue)) {
			const message = new ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' legend ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-fieldset> ')
				.addRegularText('was not provided')
				.printMessage();
		}
	}
	componentWillLoad() {
		this.validateLegend();
		this.validateLegendSize();
	}
	getClass() {
		switch (this.legendSize) {
			case 'large':
				return `ontario-fieldset__legend ontario-fieldset__legend--large`;
			case 'heading':
				return `ontario-fieldset__legend ontario-fieldset__legend--heading`;
			case 'default':
			default:
				return `ontario-fieldset__legend`;
		}
	}
	render() {
		return h(
			'div',
			{ key: '630e96f72b61db1d5c36c7af29969d5e9128dc9f', class: 'ontario-form-group' },
			h(
				'fieldset',
				{ key: 'c2ae48560e067ef9c197da8032ba848962baec7b', class: 'ontario-fieldset' },
				h(
					'legend',
					{ key: 'f7d514246a171fd752863c314fe5849a8276bd11', class: this.getClass() },
					this.legendSize === 'heading' ? h('h1', null, this.legend) : this.legend,
				),
				h('slot', { key: 'f6d4de75ed7b718dcd624da6d5303f474a28b77a' }),
			),
		);
	}
	static get is() {
		return 'ontario-fieldset';
	}
	static get encapsulation() {
		return 'shadow';
	}
	static get originalStyleUrls() {
		return {
			$: ['ontario-fieldset.scss'],
		};
	}
	static get styleUrls() {
		return {
			$: ['ontario-fieldset.css'],
		};
	}
	static get properties() {
		return {
			legend: {
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
					tags: [],
					text: 'The text value used for the legend of the fieldset.',
				},
				attribute: 'legend',
				reflect: false,
			},
			legendSize: {
				type: 'string',
				mutable: true,
				complexType: {
					original: 'CaptionType',
					resolved: '"default" | "heading" | "large"',
					references: {
						CaptionType: {
							location: 'import',
							path: '../../utils/common/input-caption/input-caption.types',
							id: 'src/utils/common/input-caption/input-caption.types.ts::CaptionType',
						},
					},
				},
				required: false,
				optional: false,
				docs: {
					tags: [],
					text: 'The size of the fieldset legend. If no prop is passed, it will be `default`.',
				},
				attribute: 'legend-size',
				reflect: false,
				defaultValue: "'default'",
			},
		};
	}
	static get watchers() {
		return [
			{
				propName: 'legendSize',
				methodName: 'validateLegendSize',
			},
			{
				propName: 'legend',
				methodName: 'validateLegend',
			},
		];
	}
}
//# sourceMappingURL=ontario-fieldset.js.map
