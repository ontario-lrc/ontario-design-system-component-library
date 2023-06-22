import { Language } from '../../utils/common/language-types';
export declare class OntarioBackToTop {
	element: HTMLElement;
	/**
	 * The language of the component.
	 * This is used for translations, and is by default set through event listeners checking for a language property from the header. If no language prop is passed, it will default to English.
	 */
	language?: Language;
	translations: any;
	private displayBackToTop;
	private scrollYValue;
	/**
	 * This listens for the window Y scroll value to be above 200 pixels. Once it is, the Back to Top button will toggle the `displayBackToTop` state which will set an active class to control the components' visibility.
	 */
	showBackToTopButton(): void;
	/**
	 * This listens for the `setAppLanguage` event sent from the test language toggler when it is is connected to the DOM. It is used for the initial language when the input component loads.
	 */
	handleSetAppLanguage(event: CustomEvent<Language>): void;
	handleHeaderLanguageToggled(event: CustomEvent<Language>): void;
	/**
	 * Scroll to top functionality when the Back to Top button is clicked
	 */
	private scrollToTop;
	componentWillLoad(): void;
	render(): any;
}
