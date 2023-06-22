import { h, Fragment } from '@stencil/core';
import { validateLanguage } from '../../utils/validation/validation-functions';
import { default as translations } from '../../translations/global.i18n.json';
export class OntarioLanguageToggle {
	constructor() {
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
	static get is() {
		return 'ontario-language-toggle';
	}
	static get encapsulation() {
		return 'shadow';
	}
	static get originalStyleUrls() {
		return {
			$: ['ontario-language-toggle.scss'],
		};
	}
	static get styleUrls() {
		return {
			$: ['ontario-language-toggle.css'],
		};
	}
	static get properties() {
		return {
			language: {
				type: 'string',
				mutable: true,
				complexType: {
					original: 'Language | string',
					resolved: 'string',
					references: {
						Language: {
							location: 'import',
							path: '../../utils/common/language-types',
						},
					},
				},
				required: false,
				optional: false,
				docs: {
					tags: [],
					text: '',
				},
				attribute: 'language',
				reflect: false,
			},
			size: {
				type: 'string',
				mutable: false,
				complexType: {
					original: "'default' | 'small'",
					resolved: '"default" | "small" | undefined',
					references: {},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'The size of the language toggle button.\n\nIf no prop is passed, it will be set to the `default` size.',
				},
				attribute: 'size',
				reflect: false,
				defaultValue: "'default'",
			},
			url: {
				type: 'string',
				mutable: true,
				complexType: {
					original: 'string',
					resolved: 'string | undefined',
					references: {},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'The URL to change to when the language toggle button is clicked.\n\nThis is optional.',
				},
				attribute: 'url',
				reflect: false,
			},
			customLanguageToggle: {
				type: 'unknown',
				mutable: false,
				complexType: {
					original: 'Function',
					resolved: 'Function | undefined',
					references: {
						Function: {
							location: 'global',
						},
					},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'A custom function to pass to the language toggle button.\n\nThis is optional.',
				},
			},
		};
	}
	static get states() {
		return {
			translations: {},
		};
	}
	static get events() {
		return [
			{
				method: 'setAppLanguage',
				name: 'setAppLanguage',
				bubbles: true,
				cancelable: true,
				composed: true,
				docs: {
					tags: [],
					text: "An event to set the Document's HTML lang property, and emit the toggled language to other components.",
				},
				complexType: {
					original: 'string',
					resolved: 'string',
					references: {},
				},
			},
			{
				method: 'headerLanguageToggled',
				name: 'headerLanguageToggled',
				bubbles: true,
				cancelable: true,
				composed: true,
				docs: {
					tags: [],
					text: 'An event that emits to other components that the language toggle button has been toggled.',
				},
				complexType: {
					original: 'string',
					resolved: 'string',
					references: {},
				},
			},
		];
	}
	static get watchers() {
		return [
			{
				propName: 'language',
				methodName: 'updateLanguage',
			},
		];
	}
}
