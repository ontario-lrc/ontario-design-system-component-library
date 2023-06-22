import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { I as Input } from './input.js';
import {
	h as handleInputEvent,
	c as constructHintTextObject,
	I as InputCaption,
	E as EventType,
} from './event-handler.js';
import { a as validateLanguage, b as validatePropExists } from './validation-functions.js';
import { C as ConsoleMessageClass } from './console-message.js';
import { t as translations } from './global.i18n.js';
import { d as defineCustomElement$5 } from './ontario-hint-expander2.js';
import { d as defineCustomElement$4 } from './ontario-hint-text2.js';
import { d as defineCustomElement$3 } from './ontario-icon-chevron-down2.js';
import { d as defineCustomElement$2 } from './ontario-icon-chevron-up2.js';
import { v as v4 } from './v4.js';

const ontarioInputCss =
	'@charset "UTF-8";h6,.ontario-h6,h5,.ontario-h5,h4,.ontario-h4,h3,.ontario-h3,h2,.ontario-h2,h1>.ontario-label--heading,h1,.ontario-h1{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}h1>.ontario-label--heading,h1,.ontario-h1{font-size:2rem;letter-spacing:0.04rem;line-height:1.29;margin:2.5rem 0 1.5rem 0;max-width:70rem}@media screen and (min-width: 40em){h1>.ontario-label--heading,h1,.ontario-h1{font-size:2.5rem;letter-spacing:0.04rem;line-height:1.2}}h2,.ontario-h2{font-size:1.6875rem;letter-spacing:0.03rem;line-height:1.37;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h2,.ontario-h2{font-size:2.0625rem;letter-spacing:0.02rem;line-height:1.33}}h3,.ontario-h3{font-size:1.4375rem;letter-spacing:0.02rem;line-height:1.39;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h3,.ontario-h3{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.43}}h4,.ontario-h4{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h4,.ontario-h4{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}h5,.ontario-h5{font-size:1.125rem;letter-spacing:0.03rem;line-height:1.56;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){h5,.ontario-h5{font-size:1.1875rem;letter-spacing:0.025rem;line-height:1.5}}h6,.ontario-h6{font-size:1rem;line-height:1.56;letter-spacing:0.03rem;max-width:48rem;margin:0 0 0.75rem 0}@media screen and (min-width: 40em){h6,.ontario-h6{font-size:1rem;letter-spacing:0.025rem;line-height:1.5}}.ontario-lead-statement{font-size:1.25rem;line-height:1.6;max-width:70rem}@media screen and (min-width: 40em){.ontario-lead-statement{font-size:1.375rem}}.ontario-input:focus,.ontario-input:active{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}html{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem}body{font-size:1rem;line-height:1.6;background-color:#FFFFFF;color:#1a1a1a;margin:0}p{font-size:inherit;margin-bottom:1.25rem;text-rendering:optimizeLegibility;margin:0 0 1.5rem 0}cite{font-style:italic;line-height:inherit}strong{font-weight:700;line-height:inherit}*,*::before,*::after{-webkit-box-sizing:inherit;box-sizing:inherit}main p,main p:not(.ontario-lead-statement),main dd,main li{max-width:48rem}hr{border:0;padding:0;margin:2.5rem 0;border-bottom:4px solid #cccccc}hr.ontario-hr--dark{border-bottom:4px solid #1a1a1a}a{color:#0066CC;text-decoration:underline}a:visited{color:#551A8B}a:hover{color:#00478F}a:active{color:#002142}a:focus{-moz-box-shadow:0 0 0 4px #009ADB;-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}​p{margin:0 0 1.5rem 0}​p+h1,p+h2,p+h3,p+h4,p+h5,p+h6,ul+h1,ul+h2,ul+h3,ul+h4,ul+h5,ul+h6,ol+h1,ol+h2,ol+h3,ol+h4,ol+h5,ol+h6,h1+h2,h2+h3,h3+h4,h4+h5,h5+h6{margin-top:2rem}p code,td code,li code{line-height:2.25rem}input[type=text],input[type=number],input[type=email],input[type=date],input[type=color],input[type=search],input[type=tel],textarea{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}input[type=checkbox]+label,input[type=radio]+label{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;margin-left:0;margin-right:0}fieldset{border:0;margin:0;padding:0;page-break-inside:avoid}legend,label{display:block;margin:0}select{background-origin:initial;height:auto;-webkit-appearance:none;-moz-appearance:none}ul,ol{padding:0}ul{margin-left:2rem}ul li{padding:0 0 0.75rem 0}ol{margin-left:1.75rem}ol li{padding:0 0 0.75rem 0.25rem}ul li:last-child,ol li:last-child{padding-bottom:0}ul ul,ol ul{margin:0.5rem 0 0.5rem 2rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 1.75rem}p+ul,p+ol{margin-top:-0.75rem}@media screen and (min-width: 40em){ul{margin:0.5rem 0 1.5rem 3rem}ol{margin:0.5rem 0 1.5rem 2.75rem}ul ul,ol ul{margin:0.5rem 0 0.5rem 3rem}ul ol,ol ol{margin:0.5rem 0 0.5rem 2.75rem}}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-fieldset__legend{color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;margin:0 0 1rem 0;line-height:1.5;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-fieldset__legend{font-size:1.125rem;line-height:1.56}}.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2}.ontario-fieldset__legend--large h1,.ontario-fieldset__legend--heading h1{display:inline-block;font-size:inherit;margin:0}@media screen and (max-width: 40em){.ontario-fieldset__legend--large,.ontario-fieldset__legend--heading{font-size:1.4375rem;line-height:1.39}}.ontario-fieldset__legend-required-flag,.ontario-fieldset__legend-optional-flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-fieldset__legend-required-flag:before,.ontario-fieldset__legend-optional-flag:before{content:" "}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-label{cursor:pointer;color:#1a1a1a;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1.1875rem;font-weight:700;line-height:1.5;margin:0 0 1rem 0;max-width:38.75em;white-space:normal;width:100%}@media screen and (max-width: 40em){.ontario-label{font-size:1.125rem;line-height:1.56}}.ontario-label--large{font-size:1.75rem;letter-spacing:0.02rem;line-height:1.2;max-width:26.25em}@media screen and (max-width: 40em){.ontario-label--large{font-size:1.4375rem;line-height:1.39}}h1>.ontario-label--heading{display:inline-block;margin:0}.ontario-label__flag{font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400}.ontario-label__flag:before{content:" "}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;width:100%;padding:0.625rem 1rem;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}.ontario-form-group:last-of-type{margin-bottom:3rem}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-input{border:2px solid #1a1a1a;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#1a1a1a;display:block;font-size:1rem;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;line-height:1.5;margin:0 0 2.5rem;max-width:48rem;padding:0.625rem 1rem;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out;width:100%}.ontario-input-hint-expander--true{margin-bottom:1rem}.ontario-input--2-char-width{max-width:8ex}.ontario-input--3-char-width{max-width:10ex}.ontario-input--4-char-width{max-width:12ex}.ontario-input--5-char-width{max-width:14ex}.ontario-input--7-char-width{max-width:17ex}.ontario-input--10-char-width{max-width:23ex}.ontario-input--20-char-width{max-width:41ex}';

const OntarioInput$1 = /*@__PURE__*/ proxyCustomElement(
	class extends HTMLElement {
		constructor() {
			super();
			this.__registerHost();
			this.__attachShadow();
			this.inputOnChange = createEvent(this, 'inputOnChange', 7);
			this.inputOnBlur = createEvent(this, 'inputOnBlur', 7);
			this.inputOnFocus = createEvent(this, 'inputOnFocus', 7);
			/**
			 * Function to handle input events and the information pertaining to the input to emit.
			 */
			this.handleEvent = (ev, eventType) => {
				const input = ev.target;
				handleInputEvent(
					ev,
					eventType,
					input,
					this.inputOnChange,
					this.inputOnFocus,
					this.inputOnBlur,
					'input',
					this.customOnChange,
					this.customOnFocus,
					this.customOnBlur,
				);
			};
			this.caption = undefined;
			this.elementId = undefined;
			this.inputWidth = 'default';
			this.name = undefined;
			this.hintText = undefined;
			this.required = false;
			this.type = 'text';
			this.value = undefined;
			this.language = 'en';
			this.hintExpander = undefined;
			this.hintTextId = undefined;
			this.customOnChange = undefined;
			this.customOnBlur = undefined;
			this.customOnFocus = undefined;
			this.internalHintText = undefined;
			this.internalHintExpander = undefined;
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
					.addMonospaceText(' <ontario-input> ')
					.addRegularText('was not provided')
					.printMessage();
			}
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
				false,
				this.required,
			);
		}
		/**
		 * Watch for changes in the `language` prop to render either the English or French translations
		 */
		updateLanguage() {
			this.updateCaptionState(this.caption);
		}
		getId() {
			var _a;
			return (_a = this.elementId) !== null && _a !== void 0 ? _a : '';
		}
		getValue() {
			var _a;
			return (_a = this.value) !== null && _a !== void 0 ? _a : '';
		}
		getClass() {
			if (this.hintExpander) {
				return this.inputWidth === 'default'
					? `ontario-input ontario-input-hint-expander--true`
					: `ontario-input ontario-input--${this.inputWidth} ontario-input-hint-expander--true`;
			} else {
				return this.inputWidth === 'default' ? `ontario-input` : `ontario-input ontario-input--${this.inputWidth}`;
			}
		}
		/**
		 * If a `hintText` prop is passed, the id generated from it will be set to the internal `hintTextId` state to match with the input `aria-describedBy` attribute.
		 */
		async componentDidLoad() {
			var _a;
			this.hintTextId = await ((_a = this.hintTextRef) === null || _a === void 0 ? void 0 : _a.getHintTextId());
		}
		componentWillLoad() {
			var _a;
			this.updateCaptionState(this.caption);
			this.elementId = (_a = this.elementId) !== null && _a !== void 0 ? _a : v4();
			this.parseHintText();
			this.parseHintExpander();
			this.validateName(this.name);
			this.language = validateLanguage(this.language);
		}
		render() {
			return h(
				'div',
				{ class: 'ontario-form-group' },
				this.captionState.getCaption(this.getId(), !!this.internalHintExpander),
				this.internalHintText &&
					h('ontario-hint-text', {
						hint: this.internalHintText.hint,
						hintContentType: this.internalHintText.hintContentType,
						ref: (el) => (this.hintTextRef = el),
					}),
				h(Input, {
					'aria-describedBy': this.hintTextId,
					'className': this.getClass(),
					'id': this.getId(),
					'name': this.name,
					'onInput': (e) => this.handleEvent(e, EventType.Change),
					'onBlur': (e) => this.handleEvent(e, EventType.Blur),
					'onFocus': (e) => this.handleEvent(e, EventType.Focus),
					'type': this.type,
					'value': this.getValue(),
					'required': !!this.required,
				}),
				this.internalHintExpander &&
					h('ontario-hint-expander', {
						hint: this.internalHintExpander.hint,
						content: this.internalHintExpander.content,
						hintContentType: this.internalHintExpander.hintContentType,
					}),
			);
		}
		get element() {
			return this;
		}
		static get watchers() {
			return {
				name: ['validateName'],
				hintText: ['parseHintText'],
				hintExpander: ['parseHintExpander'],
				caption: ['updateCaptionState'],
				language: ['updateLanguage'],
			};
		}
		static get style() {
			return ontarioInputCss;
		}
	},
	[
		1,
		'ontario-input',
		{
			caption: [1],
			elementId: [1025, 'element-id'],
			inputWidth: [1025, 'input-width'],
			name: [1],
			hintText: [1, 'hint-text'],
			required: [4],
			type: [1025],
			value: [1025],
			language: [1025],
			hintExpander: [1, 'hint-expander'],
			customOnChange: [16],
			customOnBlur: [16],
			customOnFocus: [16],
			hintTextId: [32],
			internalHintText: [32],
			internalHintExpander: [32],
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
		'ontario-input',
		'ontario-hint-expander',
		'ontario-hint-text',
		'ontario-icon-chevron-down',
		'ontario-icon-chevron-up',
	];
	components.forEach((tagName) => {
		switch (tagName) {
			case 'ontario-input':
				if (!customElements.get(tagName)) {
					customElements.define(tagName, OntarioInput$1);
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

const OntarioInput = OntarioInput$1;
const defineCustomElement = defineCustomElement$1;

export { OntarioInput, defineCustomElement };
