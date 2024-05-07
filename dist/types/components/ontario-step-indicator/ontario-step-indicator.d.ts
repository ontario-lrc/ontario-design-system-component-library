import { Language } from '../../utils/common/language-types';
export declare class OntarioStepIndicator {
	host: HTMLElement;
	/**
	 * A boolean value to determine whether or not the back button is displayed for the step indicator.
	 *
	 * This is optional. If no prop is passed, it will default to `false`.
	 */
	showBackButton?: boolean;
	/**
	 * URL for the back element to set a path for where the link will lead.
	 *
	 * If a URL is passed in, the back element will display as an anchor tag.
	 * The back element will require either the backButtonURL prop or the customOnClick prop to be passed in order for the back element to display.
	 */
	backButtonUrl?: string;
	/**
	 * A number value to indicate which step the user is currently on.
	 */
	currentStep?: number;
	/**
	 * A number value to indicate to the user the total number of steps the form has.
	 */
	numberOfSteps?: number;
	/**
	 * A number value to indicate to the user the percentage of the form that has been completed.
	 */
	percentageComplete?: number;
	/**
	 * Used to add a custom function to the back button onClick event.
	 *
	 * If this function is passed in, the back element will display as a button.
	 * The back element will require either the backButtonURL prop or the customOnClick prop to be passed in order for the back element to display.
	 */
	customOnClick?: (event: globalThis.Event) => void;
	/**
	 * The language of the component.
	 * This is used for translations, and is by default set through event listeners checking for a language property from the header. If none are passed, it will default to English.
	 */
	language?: Language;
	/**
	 * This listens for the `setAppLanguage` event sent from the test language toggler when it is is connected to the DOM. It is used for the initial language when the input component loads.
	 */
	handleSetAppLanguage(event: CustomEvent<Language>): void;
	handleHeaderLanguageToggled(event: CustomEvent<Language>): void;
	translations: any;
	private handleCustomOnClick;
	componentWillLoad(): void;
	render(): any;
}
