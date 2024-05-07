import { h } from '@stencil/core';
import OntarioIconArrowUp from '../ontario-icon/assets/ontario-icon-arrow-up.svg';
import { validateLanguage } from '../../utils/validation/validation-functions';
import translations from '../../translations/global.i18n.json';
export class OntarioBackToTop {
	constructor() {
		this.language = undefined;
		this.translations = translations;
		this.displayBackToTop = false;
		this.scrollYValue = 200;
	}
	/**
	 * This listens for the window Y scroll value to be above 200 pixels. Once it is, the Back to Top button will toggle the `displayBackToTop` state which will set an active class to control the components' visibility.
	 */
	showBackToTopButton() {
		this.displayBackToTop = window.scrollY > this.scrollYValue;
	}
	/**
	 * This listens for the `setAppLanguage` event sent from the test language toggler when it is is connected to the DOM. It is used for the initial language when the input component loads.
	 */
	handleSetAppLanguage(event) {
		if (!this.language) {
			this.language = validateLanguage(event);
		}
	}
	handleHeaderLanguageToggled(event) {
		this.language = validateLanguage(event);
	}
	/**
	 * Scroll to top functionality when the Back to Top button is clicked
	 */
	scrollToTop() {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}
	componentWillLoad() {
		this.language = validateLanguage(this.language);
	}
	render() {
		return h(
			'button',
			{
				'key': '28f085a23b68bb74b8874d03c900775fe5868ae7',
				'class': this.displayBackToTop ? `ontario-back-to-top active` : `ontario-back-to-top`,
				'onClick': this.scrollToTop,
				'aria-label': this.translations.backToTop.ariaLabel[`${this.language}`],
			},
			h('span', {
				'key': '8f88357f7064378065119f52bfc7a081318094da',
				'aria-hidden': 'true',
				'innerHTML': OntarioIconArrowUp,
			}),
			this.translations.backToTop.top[`${this.language}`],
		);
	}
	static get is() {
		return 'ontario-back-to-top';
	}
	static get encapsulation() {
		return 'shadow';
	}
	static get originalStyleUrls() {
		return {
			$: ['ontario-back-to-top.scss'],
		};
	}
	static get styleUrls() {
		return {
			$: ['ontario-back-to-top.css'],
		};
	}
	static get properties() {
		return {
			language: {
				type: 'string',
				mutable: true,
				complexType: {
					original: 'Language',
					resolved: '"en" | "fr" | undefined',
					references: {
						Language: {
							location: 'import',
							path: '../../utils/common/language-types',
							id: 'src/utils/common/language-types.ts::Language',
						},
					},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'The language of the component.\nThis is used for translations, and is by default set through event listeners checking for a language property from the header. If no language prop is passed, it will default to English.',
				},
				attribute: 'language',
				reflect: false,
			},
		};
	}
	static get states() {
		return {
			translations: {},
			displayBackToTop: {},
			scrollYValue: {},
		};
	}
	static get elementRef() {
		return 'element';
	}
	static get listeners() {
		return [
			{
				name: 'scroll',
				method: 'showBackToTopButton',
				target: 'window',
				capture: false,
				passive: true,
			},
			{
				name: 'setAppLanguage',
				method: 'handleSetAppLanguage',
				target: 'window',
				capture: false,
				passive: false,
			},
			{
				name: 'headerLanguageToggled',
				method: 'handleHeaderLanguageToggled',
				target: 'window',
				capture: false,
				passive: false,
			},
		];
	}
}
//# sourceMappingURL=ontario-back-to-top.js.map
