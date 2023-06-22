import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { I as Input } from './input.js';
import {
	h as handleInputEvent,
	c as constructHintTextObject,
	I as InputCaption,
	E as EventType,
} from './event-handler.js';
import { a as validateLanguage, b as validatePropExists, c as validateObjectExists } from './validation-functions.js';
import { C as ConsoleMessageClass } from './console-message.js';
import { t as translations } from './global.i18n.js';
import { d as defineCustomElement$5 } from './ontario-hint-expander2.js';
import { d as defineCustomElement$4 } from './ontario-hint-text2.js';
import { d as defineCustomElement$3 } from './ontario-icon-chevron-down2.js';
import { d as defineCustomElement$2 } from './ontario-icon-chevron-up2.js';

const ontarioRadioButtonsCss =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}.ontario-radios__input:focus+.ontario-radios__label:before{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;font-size:inherit;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-radios__item{position:relative;display:block;margin:0 0 1rem;padding:0 2rem 0}.ontario-radios__input{cursor:pointer;margin:0;position:absolute;opacity:0;top:-2px;left:-2px;width:36px;height:36px;z-index:0}@media screen and (max-width: 40em){.ontario-radios__input{width:40px;height:40px;top:-1.5px;left:-1.5px}}.ontario-radios__label{cursor:pointer;color:#1a1a1a;display:inline-block;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:700;line-height:1.5;margin:0.2rem 0;max-width:38.75em;padding:0 0.75rem;-ms-touch-action:manipulation;touch-action:manipulation;white-space:normal;width:auto;white-space:normal}@media screen and (max-width: 40em){.ontario-radios__label{margin:0.3rem 0;padding:0 1rem}}.ontario-radios__label:before{content:"";border:2px solid #1a1a1a;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;top:0;left:0;width:32px;height:32px;-webkit-transition:border 0.1s ease-in-out;transition:border 0.1s ease-in-out}@media screen and (max-width: 40em){.ontario-radios__label:before{width:36px;height:36px}}.ontario-radios__label:after{content:"";border-radius:50%;border:10px solid #1a1a1a;position:absolute;top:0;left:0;-webkit-transform:translate(6px, 6px);transform:translate(6px, 6px);opacity:0}@media screen and (max-width: 40em){.ontario-radios__label:after{border:12px solid #1a1a1a}}.ontario-radios__input:focus+.ontario-radios__label:before{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:#009ADB}.ontario-radios__input:checked+.ontario-radios__label:after{opacity:1}.ontario-radios__hint-expander{margin:0.75rem 0 0 0.5rem}@media screen and (max-width: 40em){.ontario-radios__hint-expander{margin-top:1rem}}';

const OntarioRadioButtons$1 = /*@__PURE__*/ proxyCustomElement(
	class extends HTMLElement {
		constructor() {
			super();
			this.__registerHost();
			this.__attachShadow();
			this.radioOnChange = createEvent(this, 'radioOnChange', 7);
			this.radioOnBlur = createEvent(this, 'radioOnBlur', 7);
			this.radioOnFocus = createEvent(this, 'radioOnFocus', 7);
			/**
			 * Function to handle radio buttons events and the information pertaining to the radio buttons to emit.
			 */
			this.handleEvent = (ev, eventType) => {
				var _a;
				const input = ev.target;
				if (input) {
					input.checked = (_a = input.checked) !== null && _a !== void 0 ? _a : '';
				}
				handleInputEvent(
					ev,
					eventType,
					input,
					this.radioOnChange,
					this.radioOnFocus,
					this.radioOnBlur,
					'radio',
					this.customOnChange,
					this.customOnFocus,
					this.customOnBlur,
				);
			};
			this.caption = undefined;
			this.language = 'en';
			this.name = undefined;
			this.hintText = undefined;
			this.hintExpander = undefined;
			this.required = false;
			this.options = undefined;
			this.customOnChange = undefined;
			this.customOnBlur = undefined;
			this.customOnFocus = undefined;
			this.hintTextId = undefined;
			this.internalHintText = undefined;
			this.internalHintExpander = undefined;
			this.internalOptions = undefined;
			this.captionState = undefined;
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
		/**
		 * Watch for changes to the `hintText` prop.
		 *
		 * If a `hintText` prop is passed, the `constructHintTextObject` function will convert it to the correct format, and set the result to the `internalHintText` state.
		 */
		parseHintText() {
			if (this.hintText) {
				const hintTextObject = constructHintTextObject(this.hintText);
				this.internalHintText = hintTextObject;
			}
		}
		/**
		 * Watch for changes to the `hintExpander` prop.
		 *
		 * If a `hintExpander` prop is passed, it will be parsed (if it is a string), and the result will be set to the `internalHintExpander` state.
		 */
		parseHintExpander() {
			const hintExpander = this.hintExpander;
			if (hintExpander) {
				if (typeof hintExpander === 'string') this.internalHintExpander = JSON.parse(hintExpander);
				else this.internalHintExpander = hintExpander;
			}
		}
		/**
		 * Watch for changes to the `options` prop.
		 *
		 * If an `options` prop is passed, it will be parsed (if it is a string), and the result will be set to the `internalOptions` state. The result will be run through a validation function.
		 */
		parseOptions() {
			if (typeof this.options !== 'undefined') {
				if (!Array.isArray(this.options)) {
					this.internalOptions = JSON.parse(this.options);
				} else {
					this.internalOptions = this.options;
				}
			}
		}
		/*
		 * Watch for changes in the `name` prop for validation purposes.
		 *
		 * Validate the `name` and make sure the `name` prop has a value.
		 * Log a warning if user doesn't input a value for the `name`.
		 */
		validateName(newValue) {
			if (validatePropExists(newValue)) {
				const message = new ConsoleMessageClass();
				message
					.addDesignSystemTag()
					.addMonospaceText(' name ')
					.addRegularText('for')
					.addMonospaceText(' <ontario-radio-buttons> ')
					.addRegularText('was not provided')
					.printMessage();
			}
		}
		/*
   * Watch for changes in the `options` prop for validation purposes.

   * Validate the `options` and make sure the `options` prop has a value.
   * Log a warning if user doesn't input a value for the `options`.
   */
		validateOptions(newValue) {
			if (validateObjectExists(newValue)) {
				const message = new ConsoleMessageClass();
				message
					.addDesignSystemTag()
					.addMonospaceText(' options ')
					.addRegularText('for')
					.addMonospaceText(' <ontario-radio-buttons> ')
					.addRegularText('was not provided')
					.printMessage();
			}
		}
		/**
		 * Watch for changes to the `caption` prop.
		 *
		 * The caption will be run through the InputCaption constructor to convert it to the correct format, and set the result to the `captionState` state.
		 * @param newValue: Caption | string
		 */
		updateCaptionState(newValue) {
			this.captionState = new InputCaption(
				this.element.tagName,
				newValue,
				translations,
				this.language,
				true,
				this.required,
			);
		}
		/**
		 * Watch for changes to the `language` prop to render either the English or French translations
		 */
		updateLanguage() {
			this.updateCaptionState(this.caption);
		}
		/**
		 * If a `hintText` prop is passed, the id generated from it will be set to the internal `hintTextId` state to match with the fieldset `aria-describedBy` attribute.
		 */
		async componentDidLoad() {
			var _a;
			this.hintTextId = await ((_a = this.hintTextRef) === null || _a === void 0 ? void 0 : _a.getHintTextId());
		}
		componentWillLoad() {
			this.updateCaptionState(this.caption);
			this.parseOptions();
			this.parseHintText();
			this.parseHintExpander();
			this.validateName(this.name);
			this.validateOptions(this.internalOptions);
			this.language = validateLanguage(this.language);
		}
		render() {
			var _a;
			return h(
				'div',
				{ class: 'ontario-form-group' },
				h(
					'fieldset',
					{ 'class': 'ontario-fieldset', 'aria-describedby': this.hintTextId },
					this.captionState.getCaption(undefined, !!this.internalHintExpander),
					this.internalHintText &&
						h('ontario-hint-text', {
							hint: this.internalHintText.hint,
							hintContentType: this.internalHintText.hintContentType,
							ref: (el) => (this.hintTextRef = el),
						}),
					h(
						'div',
						{ class: 'ontario-radios' },
						(_a = this.internalOptions) === null || _a === void 0
							? void 0
							: _a.map((radioOption) =>
									h(
										'div',
										{ class: 'ontario-radios__item' },
										h(Input, {
											className: 'ontario-radios__input',
											id: radioOption.elementId,
											name: this.name,
											type: 'radio',
											value: radioOption.value,
											required: !!this.required,
											onChange: (e) => this.handleEvent(e, EventType.Change),
											onBlur: (e) => this.handleEvent(e, EventType.Blur),
											onFocus: (e) => this.handleEvent(e, EventType.Focus),
										}),
										h(
											'label',
											{ class: 'ontario-radios__label', htmlFor: radioOption.elementId },
											radioOption.label,
											radioOption.hintExpander &&
												this.captionState.getHintExpanderAccessibilityText(radioOption.label, true),
										),
										h(
											'div',
											{ class: 'ontario-radios__hint-expander' },
											radioOption.hintExpander &&
												h('ontario-hint-expander', {
													'hint': radioOption.hintExpander.hint,
													'content': radioOption.hintExpander.content,
													'hintContentType': radioOption.hintExpander.hintContentType,
													'input-exists': true,
												}),
										),
									),
							  ),
						this.internalHintExpander &&
							h('ontario-hint-expander', {
								'hint': this.internalHintExpander.hint,
								'content': this.internalHintExpander.content,
								'hintContentType': this.internalHintExpander.hintContentType,
								'input-exists': true,
							}),
					),
				),
			);
		}
		get element() {
			return this;
		}
		static get watchers() {
			return {
				hintText: ['parseHintText'],
				hintExpander: ['parseHintExpander'],
				options: ['parseOptions', 'validateOptions'],
				name: ['validateName'],
				caption: ['updateCaptionState'],
				language: ['updateLanguage'],
			};
		}
		static get style() {
			return ontarioRadioButtonsCss;
		}
	},
	[
		1,
		'ontario-radio-buttons',
		{
			caption: [1],
			language: [1025],
			name: [1],
			hintText: [1, 'hint-text'],
			hintExpander: [1, 'hint-expander'],
			required: [4],
			options: [1],
			customOnChange: [16],
			customOnBlur: [16],
			customOnFocus: [16],
			hintTextId: [32],
			internalHintText: [32],
			internalHintExpander: [32],
			internalOptions: [32],
			captionState: [32],
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
	const components = [
		'ontario-radio-buttons',
		'ontario-hint-expander',
		'ontario-hint-text',
		'ontario-icon-chevron-down',
		'ontario-icon-chevron-up',
	];
	components.forEach((tagName) => {
		switch (tagName) {
			case 'ontario-radio-buttons':
				if (!customElements.get(tagName)) {
					customElements.define(tagName, OntarioRadioButtons$1);
				}
				break;
			case 'ontario-hint-expander':
				if (!customElements.get(tagName)) {
					defineCustomElement$5();
				}
				break;
			case 'ontario-hint-text':
				if (!customElements.get(tagName)) {
					defineCustomElement$4();
				}
				break;
			case 'ontario-icon-chevron-down':
				if (!customElements.get(tagName)) {
					defineCustomElement$3();
				}
				break;
			case 'ontario-icon-chevron-up':
				if (!customElements.get(tagName)) {
					defineCustomElement$2();
				}
				break;
		}
	});
}

const OntarioRadioButtons = OntarioRadioButtons$1;
const defineCustomElement = defineCustomElement$1;

export { OntarioRadioButtons, defineCustomElement };
