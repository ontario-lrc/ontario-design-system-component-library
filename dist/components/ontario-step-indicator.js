import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { a as validateLanguage } from './validation-functions.js';
import { t as translations } from './global.i18n.js';
import { d as defineCustomElement$2 } from './ontario-icon-chevron-left2.js';

const ontarioStepIndicatorCss =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-button:focus,.ontario-button:active{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button{border:none;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;display:inline-block;font-size:1.125rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:600;line-height:1.5555555556;margin:0 1.75rem 1.5rem 0;min-width:10rem;padding:0.625rem 1.5rem;text-align:center;text-decoration:none;cursor:pointer}@media screen and (max-width: 40em){.ontario-button{margin-right:0;display:block;width:100%}}.ontario-button .ontario-icon{margin-right:4px}.ontario-button--primary{background-color:#0066CC;color:#FFFFFF}.ontario-button--primary:hover{background-color:#00478F;color:#FFFFFF}.ontario-button--primary:focus{background-color:#00478F;color:#FFFFFF;-webkit-transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--primary:active{background-color:#002142;color:#FFFFFF;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--primary:visited{color:#FFFFFF}.ontario-button--secondary{background-color:#FFFFFF;border:2px solid #0066CC;color:#0066CC;padding-top:0.5rem;padding-bottom:0.5rem}.ontario-button--secondary:hover{background-color:#e0f0ff;border-color:#00478F;color:#00478F}.ontario-button--secondary:focus{background-color:#e0f0ff;border-color:#00478F;color:#00478F;-webkit-transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--secondary:active{background-color:#c2e0ff;border-color:#002142;color:#002142;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--secondary:visited{color:#0066CC}.ontario-button--tertiary{background-color:transparent;color:#0066CC;text-decoration:underline}.ontario-button--tertiary:hover{background-color:#e8e8e8;color:#00478F;text-decoration:underline}.ontario-button--tertiary:focus{background-color:#e8e8e8;color:#00478F;text-decoration:underline;-webkit-transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--tertiary:active{background-color:#d1d1d1;color:#002142;text-decoration:underline;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--tertiary:visited{color:#0066CC}.ontario-button--internalThemeDark{background-color:#1a1a1a;border:2px solid #FFFFFF;color:#FFFFFF}.ontario-button--internalThemeDark:hover{background-color:#4d4d4d}.ontario-button--internalThemeDark:focus{background-color:#4d4d4d;-webkit-transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out;transition:background-color 0.2s ease-out, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--internalThemeDark:active{background-color:#4d4d4d;-webkit-transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, -webkit-box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out;transition:background-color 0s, box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-button--internalThemeDark:visited{color:#0066CC}.ontario-step-indicator .ontario-step-indicator--with-back-button--false,.ontario-step-indicator .ontario-step-indicator--with-back-button--true{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.ontario-step-indicator .ontario-step-indicator--with-back-button--false{-ms-flex-pack:end;justify-content:flex-end}.ontario-step-indicator .ontario-h4{margin:1.125rem 0}@media screen and (max-width: 40em){.ontario-step-indicator .ontario-h4{margin:1rem 0;text-align:right}}.ontario-step-indicator .ontario-button.ontario-button--tertiary{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:0.75rem 0;padding-left:0.5rem;padding-right:1rem;min-width:3rem}@media screen and (max-width: 40em){.ontario-step-indicator .ontario-button.ontario-button--tertiary{width:unset}}.ontario-step-indicator .ontario-button.ontario-button--tertiary .ontario-icon{margin:0 0.375rem 0 0;padding:0;min-width:24px;min-height:24px}.ontario-step-indicator hr{padding:0;margin:0}';

const OntarioStepIndicator$1 = /*@__PURE__*/ proxyCustomElement(
	class extends HTMLElement {
		constructor() {
			super();
			this.__registerHost();
			this.__attachShadow();
			this.showBackButton = false;
			this.backButtonUrl = undefined;
			this.currentStep = undefined;
			this.numberOfSteps = undefined;
			this.percentageComplete = undefined;
			this.customOnClick = undefined;
			this.language = 'en';
			this.translations = translations;
		}
		/**
		 * This listens for the `setAppLanguage` event sent from the test language toggler when it is is connected to the DOM. It is used for the initial language when the input component loads.
		 */
		handleSetAppLanguage(event) {
			this.language = validateLanguage(event);
		}
		handleHeaderLanguageToggled(event) {
			this.language = validateLanguage(event);
		}
		componentWillLoad() {
			this.language = validateLanguage(this.language);
		}
		render() {
			return h(
				'div',
				{ class: 'ontario-step-indicator' },
				h(
					'div',
					{ class: 'ontario-row' },
					h(
						'div',
						{ class: 'ontario-columns ontario-small-12' },
						h(
							'div',
							{ class: `ontario-step-indicator--with-back-button--${this.showBackButton}` },
							this.showBackButton === true &&
								this.customOnClick &&
								!this.backButtonUrl &&
								h(
									'button',
									{
										class: 'ontario-button ontario-button--tertiary',
										onClick: (e) => this.customOnClick && this.customOnClick(e),
									},
									h('ontario-icon-chevron-left', { colour: 'blue' }),
									this.translations.stepIndicator.back[`${this.language}`],
								),
							this.showBackButton === true &&
								!this.customOnClick &&
								this.backButtonUrl &&
								h(
									'a',
									{ class: 'ontario-button ontario-button--tertiary', href: this.backButtonUrl },
									h('ontario-icon-chevron-left', { colour: 'blue' }),
									this.translations.stepIndicator.back[`${this.language}`],
								),
							this.percentageComplete
								? h(
										'span',
										{ class: 'ontario-h4' },
										this.percentageComplete,
										'\u00A0% ',
										this.translations.stepIndicator.complete[`${this.language}`],
								  )
								: h(
										'span',
										{ class: 'ontario-h4' },
										this.translations.stepIndicator.step[`${this.language}`],
										'\u00A0 ',
										this.currentStep,
										' ',
										this.translations.stepIndicator.of[`${this.language}`],
										'\u00A0 ',
										this.numberOfSteps,
								  ),
						),
						h('hr', null),
					),
				),
			);
		}
		get host() {
			return this;
		}
		static get style() {
			return ontarioStepIndicatorCss;
		}
	},
	[
		1,
		'ontario-step-indicator',
		{
			showBackButton: [4, 'show-back-button'],
			backButtonUrl: [1, 'back-button-url'],
			currentStep: [2, 'current-step'],
			numberOfSteps: [2, 'number-of-steps'],
			percentageComplete: [2, 'percentage-complete'],
			customOnClick: [16],
			language: [1025],
			translations: [32],
		},
		[
			[8, 'setAppLanguage', 'handleSetAppLanguage'],
			[8, 'headerLanguageToggled', 'handleHeaderLanguageToggled'],
		],
	],
);
function defineCustomElement$1() {
	if (typeof customElements === 'undefined') {
		return;
	}
	const components = ['ontario-step-indicator', 'ontario-icon-chevron-left'];
	components.forEach((tagName) => {
		switch (tagName) {
			case 'ontario-step-indicator':
				if (!customElements.get(tagName)) {
					customElements.define(tagName, OntarioStepIndicator$1);
				}
				break;
			case 'ontario-icon-chevron-left':
				if (!customElements.get(tagName)) {
					defineCustomElement$2();
				}
				break;
		}
	});
}

const OntarioStepIndicator = OntarioStepIndicator$1;
const defineCustomElement = defineCustomElement$1;

export { OntarioStepIndicator, defineCustomElement };
