import { Language } from '../../utils/common/language-types';
export declare class OntarioLoadingIndicator {
	/**
	 * The type of loading indicator to render.
	 */
	type: 'small' | 'large';
	/**
	 * A boolean value to determine whether or not the loading indicator is loading (i.e: is visible) or not.
	 */
	isLoading: boolean;
	/**
	 * The message that tells the user what is happening or why the user is waiting.
	 * If no message prop is passed, it will default to "Loading". Translations for this default message are included.
	 *
	 * This is optional.
	 */
	message?: string;
	/**
	 * A boolean value to determine whether the loading indicator overlay covers the full page or not. By default, this is set to `true`.
	 *
	 * If set to `false`, the loading indicator overlay will be positioned absolutely relative to its container. Note that this will only work if the containing element has a style rule specifying it to be positioned relatively.
	 */
	fullScreenOverlay?: boolean;
	/**
	 * The language of the component.
	 * This is used for translations, and is by default set through event listeners checking for a language property from the header. If no language is passed, it will default to English.
	 */
	language?: Language;
	translations: any;
	/**
	 * Mutable variables, for internal use only.
	 */
	private isLoadingState;
	private typeState;
	/**
	 * This listens for the `setAppLanguage` event sent from the test language toggler when it is is connected to the DOM. It is used for the initial language when the input component loads.
	 */
	handleSetAppLanguage(event: CustomEvent<Language>): void;
	handleHeaderLanguageToggled(event: CustomEvent<Language>): void;
	/**
	 * Watch for changes in the `type` variable for validation purposes.
	 *
	 * If the user input doesn't match one of the array values then `type` will be set to its default (`large`).
	 * If a match is found in one of the array values then `type` will be set to the matching array key value.
	 */
	validateType(): 'small' | 'large';
	/**
	 * Print the invalid `type` warning message.
	 * @returns default type ('large')
	 */
	private warnDefaultType;
	componentWillLoad(): void;
	render(): any;
}
