import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import {
	i as isValidHeadingLevel,
	H as HeadingContentTypes,
	a as isValidHighlightColour,
	g as generateCalloutAside,
} from './callout-aside-helpers.js';
import { a as validateValueAgainstArray } from './validation-functions.js';
import { C as ConsoleMessageClass } from './console-message.js';

const ontarioCalloutCss =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul[class*=columns-] li:last-child,ol[class*=columns-] li:last-child{padding-bottom:0.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-callout{border-left:0.25rem solid #367A76;padding:1.5rem;margin:2rem 0 2.5rem 0;background-color:#f2f2f2}.ontario-callout *{max-width:48rem}.ontario-callout *:last-child{margin-bottom:0.5rem}.ontario-callout__title{margin:0 0 1rem}.ontario-border-highlight--teal{border-color:#367A76 !important}.ontario-border-highlight--gold{border-color:#86743D !important}.ontario-border-highlight--yellow{border-color:#8A600D !important}.ontario-border-highlight--taupe{border-color:#7B725C !important}.ontario-border-highlight--green{border-color:#2B8737 !important}.ontario-border-highlight--lime{border-color:#5F8129 !important}.ontario-border-highlight--sky{border-color:#1080A6 !important}.ontario-border-highlight--blue{border-color:#0369ac !important}.ontario-border-highlight--purple{border-color:#92278F !important}';
const OntarioCalloutStyle0 = ontarioCalloutCss;

const OntarioCallout$1 = /*@__PURE__*/ proxyCustomElement(
	class OntarioCallout extends HTMLElement {
		constructor() {
			super();
			this.__registerHost();
			this.__attachShadow();
			this.headingType = undefined;
			this.headingContentType = 'string';
			this.headingContent = undefined;
			this.content = undefined;
			this.highlightColour = 'teal';
		}
		/**
		 * Watch for changes to the `headingType` prop.
		 * This is for validation purposes to make sure the `headingType` matches one of the `HeadingLevelOptions`.
		 */
		validateHeadingType() {
			if (isValidHeadingLevel(this.headingType)) return this.headingType;
			const message = new ConsoleMessageClass();
			return message
				.addDesignSystemTag()
				.addMonospaceText(` headingType ${this.headingType} `)
				.addRegularText('for')
				.addMonospaceText(' <ontario-callout> ')
				.addRegularText('is not a valid type. Please ensure your heading type matches one of the headingType types.')
				.printMessage();
		}
		/**
		 * Watch for changes in the `headingContentType` variable for validation purposes.
		 *
		 * If the user input doesn't match one of the array values then `headingContentType` will be set to its default (`string`).
		 * If a match is found in one of the array values then `headingContentType` will be set to the matching array key value.
		 */
		validateHeadingContentType() {
			const isValid = validateValueAgainstArray(this.headingContentType, HeadingContentTypes);
			if (isValid) {
				return this.headingContentType;
			} else {
				return this.warnDefaultType();
			}
		}
		/**
		 * Watch for changes in the `headingContent` prop for validation purposes.
		 *
		 * If no `headingContent` value is provided, a warning message will be printed.
		 */
		validateHeadingContent() {
			if (!this.headingContent) {
				const message = new ConsoleMessageClass();
				message
					.addDesignSystemTag()
					.addMonospaceText(' headingContent ')
					.addRegularText('for')
					.addMonospaceText(' <ontario-callout> ')
					.addRegularText('was not provided.')
					.printMessage();
			}
		}
		/**
		 * Watch for changes to the `highlightColour` prop.
		 *
		 * If no `highlightColour` is passed, or if the `highlightColour` does not match the `highlightColour` options, a default value of 'teal' will be applied.
		 */
		validateHighlightColour() {
			if (this.highlightColour) {
				if (isValidHighlightColour(this.highlightColour)) return this.highlightColour;
				else {
					const message = new ConsoleMessageClass();
					message
						.addDesignSystemTag()
						.addMonospaceText(` highlightColour ${this.highlightColour} `)
						.addRegularText('for')
						.addMonospaceText(' <ontario-callout> ')
						.addRegularText(
							'does not match one of the valid highlightColour types. A default colour of `teal` will be applied.',
						)
						.printMessage();
				}
			}
			// if no highlight colour is passed, return 'teal'
			return 'teal';
		}
		/**
		 * Print the invalid `type` warning message.
		 * @returns default type ('string')
		 */
		warnDefaultType() {
			const message = new ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' headingContentType ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-callout> ')
				.addRegularText('was set to an invalid type; only')
				.addMonospaceText(' string or html ')
				.addRegularText('are supported. The default type')
				.addMonospaceText(' string ')
				.addRegularText('is assumed.')
				.printMessage();
			return (this.headingContentType = 'string');
		}
		componentWillLoad() {
			this.validateHighlightColour();
			this.validateHeadingContent();
			this.validateHeadingType();
			this.validateHeadingContentType();
		}
		render() {
			return generateCalloutAside(
				'callout',
				this.headingType,
				this.headingContentType,
				this.headingContent,
				this.content,
				this.highlightColour,
			);
		}
		static get watchers() {
			return {
				headingType: ['validateHeadingType'],
				headingContentType: ['validateHeadingContentType'],
				headingContent: ['validateHeadingContent'],
				highlightColour: ['validateHighlightColour'],
			};
		}
		static get style() {
			return OntarioCalloutStyle0;
		}
	},
	[
		1,
		'ontario-callout',
		{
			headingType: [1025, 'heading-type'],
			headingContentType: [1025, 'heading-content-type'],
			headingContent: [1, 'heading-content'],
			content: [1],
			highlightColour: [1025, 'highlight-colour'],
		},
		undefined,
		{
			headingType: ['validateHeadingType'],
			headingContentType: ['validateHeadingContentType'],
			headingContent: ['validateHeadingContent'],
			highlightColour: ['validateHighlightColour'],
		},
	],
);
function defineCustomElement$1() {
	if (typeof customElements === 'undefined') {
		return;
	}
	const components = ['ontario-callout'];
	components.forEach((tagName) => {
		switch (tagName) {
			case 'ontario-callout':
				if (!customElements.get(tagName)) {
					customElements.define(tagName, OntarioCallout$1);
				}
				break;
		}
	});
}

const OntarioCallout = OntarioCallout$1;
const defineCustomElement = defineCustomElement$1;

export { OntarioCallout, defineCustomElement };

//# sourceMappingURL=ontario-callout.js.map
