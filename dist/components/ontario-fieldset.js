import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { C as CaptionTypes } from './input-caption.types.js';
import { C as ConsoleMessageClass } from './console-message.js';
import { a as validateValueAgainstArray, b as validatePropExists } from './validation-functions.js';

const ontarioFieldsetCss =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1,h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1,h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul[class*=columns-] li:last-child,ol[class*=columns-] li:last-child{padding-bottom:0.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend--large{font-size:1.75rem}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}';
const OntarioFieldsetStyle0 = ontarioFieldsetCss;

const OntarioFieldset$1 = /*@__PURE__*/ proxyCustomElement(
	class OntarioFieldset extends HTMLElement {
		constructor() {
			super();
			this.__registerHost();
			this.__attachShadow();
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
		static get watchers() {
			return {
				legendSize: ['validateLegendSize'],
				legend: ['validateLegend'],
			};
		}
		static get style() {
			return OntarioFieldsetStyle0;
		}
	},
	[
		1,
		'ontario-fieldset',
		{
			legend: [1025],
			legendSize: [1025, 'legend-size'],
		},
		undefined,
		{
			legendSize: ['validateLegendSize'],
			legend: ['validateLegend'],
		},
	],
);
function defineCustomElement$1() {
	if (typeof customElements === 'undefined') {
		return;
	}
	const components = ['ontario-fieldset'];
	components.forEach((tagName) => {
		switch (tagName) {
			case 'ontario-fieldset':
				if (!customElements.get(tagName)) {
					customElements.define(tagName, OntarioFieldset$1);
				}
				break;
		}
	});
}

const OntarioFieldset = OntarioFieldset$1;
const defineCustomElement = defineCustomElement$1;

export { OntarioFieldset, defineCustomElement };

//# sourceMappingURL=ontario-fieldset.js.map
