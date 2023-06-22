import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { a as validateLanguage } from './validation-functions.js';
import { t as translations } from './global.i18n.js';

const ontarioLanguageToggleCss =
	'.ontario-language-toggler:focus{-webkit-box-shadow:0 0 0 4px #009ADB;box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;-webkit-transition:-webkit-box-shadow 0.1s ease-in-out;transition:-webkit-box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out;transition:box-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out}.ontario-hide{display:none !important}.ontario-invisible{visibility:hidden !important}@media screen and (max-width: 39.937em){.ontario-hide-for-small-only{display:none !important}}@media screen and (max-width: 0em), screen and (min-width: 40em){.ontario-show-for-small-only{display:none !important}}@media print, screen and (min-width: 40em){.ontario-hide-for-medium{display:none !important}}@media screen and (max-width: 39.937em){.ontario-show-for-medium{display:none !important}}@media screen and (min-width: 40em) and (max-width: 72.937em){.ontario-hide-for-medium-only{display:none !important}}@media screen and (max-width: 39.937em), screen and (min-width: 73em){.ontario-show-for-medium-only{display:none !important}}@media print, screen and (min-width: 73em){.ontario-hide-for-large{display:none !important}}@media screen and (max-width: 72.937em){.ontario-show-for-large{display:none !important}}@media screen and (min-width: 73em) and (max-width: 95.937em){.ontario-hide-for-large-only{display:none !important}}@media screen and (max-width: 72.937em), screen and (min-width: 96em){.ontario-show-for-large-only{display:none !important}}.ontario-show-for-sr,.ontario-show-on-focus{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0)}.ontario-show-on-focus:active,.ontario-show-on-focus:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto}.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}@media screen and (orientation: landscape){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:block !important}}@media screen and (orientation: portrait){.ontario-show-for-landscape,.ontario-hide-for-portrait{display:none !important}}.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}@media screen and (orientation: landscape){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:none !important}}@media screen and (orientation: portrait){.ontario-hide-for-landscape,.ontario-show-for-portrait{display:block !important}}.ontario-language-toggler{background-color:#1a1a1a;border:none;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;color:#FFFFFF;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:1.125rem;font-weight:600;font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;height:48px;line-height:1.5555555556;text-align:center;text-decoration:none}.ontario-language-toggler:hover{background-color:#4d4d4d}.ontario-language-toggler:active{background-color:#666666;color:#FFFFFF}.ontario-language-toggler:focus{background-color:#4d4d4d;color:#FFFFFF}.ontario-language-toggler:visited{color:#FFFFFF}.ontario-language-toggler abbr[title]{text-decoration:none}.ontario-language-toggler--default{padding:0.75rem}.ontario-language-toggler--small{font-size:1rem;line-height:1.375rem;height:auto;outline:none;padding:0.5rem 0.75rem}';

const OntarioLanguageToggle = /*@__PURE__*/ proxyCustomElement(
	class extends HTMLElement {
		constructor() {
			super();
			this.__registerHost();
			this.__attachShadow();
			this.setAppLanguage = createEvent(this, 'setAppLanguage', 7);
			this.headerLanguageToggled = createEvent(this, 'headerLanguageToggled', 7);
			this.updateHTMLLang = (lang) => {
				const htmlElement = document.firstElementChild;
				if ((htmlElement === null || htmlElement === void 0 ? void 0 : htmlElement.tagName.toLowerCase()) === 'html') {
					if (lang) {
						htmlElement.setAttribute('lang', lang);
					} else {
						htmlElement.setAttribute('lang', 'en');
					}
				}
				return;
			};
			this.language = undefined;
			this.size = 'default';
			this.url = undefined;
			this.customLanguageToggle = undefined;
			this.translations = translations;
		}
		setAppLanguageHandler() {
			let lang;
			if (this.language) {
				lang = this.language;
			} else if (document.documentElement.lang) {
				lang = document.documentElement.lang;
			} else {
				lang = 'en';
			}
			this.language = lang;
			this.setAppLanguage.emit(lang);
			this.updateHTMLLang(lang);
		}
		handleHeaderLanguageToggled(language, e) {
			const toggledLanguage = language === 'en' ? 'fr' : 'en';
			this.language = toggledLanguage;
			this.headerLanguageToggled.emit(toggledLanguage);
			this.updateHTMLLang(toggledLanguage);
			if (this.customLanguageToggle) {
				this.customLanguageToggle(e);
			}
		}
		updateLanguage() {
			this.language = validateLanguage(this.language);
			this.setAppLanguageHandler();
		}
		connectedCallback() {
			this.updateLanguage();
		}
		render() {
			const language = this.language === 'en' ? 'Français' : 'English';
			const abbreviatedLanguage = this.language === 'en' ? 'FR' : 'EN';
			return h(
				'a',
				{
					'class':
						this.size === 'default'
							? 'ontario-language-toggler ontario-language-toggler--default'
							: 'ontario-language-toggler ontario-language-toggler--small',
					'href': this.url ? this.url : '#',
					'aria-label': this.translations.languageToggle.ariaLabel[`${this.language}`],
					'onClick': (e) => this.handleHeaderLanguageToggled(this.language, e),
				},
				this.size === 'small'
					? h('span', null, language)
					: h(
							Fragment,
							null,
							h('abbr', { title: language, class: 'ontario-show-for-small-only' }, abbreviatedLanguage),
							h('span', { class: 'ontario-show-for-medium' }, language),
					  ),
			);
		}
		static get watchers() {
			return {
				language: ['updateLanguage'],
			};
		}
		static get style() {
			return ontarioLanguageToggleCss;
		}
	},
	[
		1,
		'ontario-language-toggle',
		{
			language: [1025],
			size: [1],
			url: [1025],
			customLanguageToggle: [16],
			translations: [32],
		},
	],
);
function defineCustomElement() {
	if (typeof customElements === 'undefined') {
		return;
	}
	const components = ['ontario-language-toggle'];
	components.forEach((tagName) => {
		switch (tagName) {
			case 'ontario-language-toggle':
				if (!customElements.get(tagName)) {
					customElements.define(tagName, OntarioLanguageToggle);
				}
				break;
		}
	});
}

export { OntarioLanguageToggle as O, defineCustomElement as d };
