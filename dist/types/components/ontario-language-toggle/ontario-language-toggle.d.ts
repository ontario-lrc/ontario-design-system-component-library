import { EventEmitter } from '../../stencil-public-runtime';
import { Language } from '../../utils/common/language-types';
import { HeaderLanguageToggleEventDetails } from '../../utils/events/common-events.interface';
export declare class OntarioLanguageToggle {
	language: Language | string;
	/**
	 * The size of the language toggle button.
	 *
	 * If no prop is passed, it will be set to the `default` size.
	 */
	size?: 'default' | 'small';
	/**
	 * The URL to change to when the language toggle button is clicked.
	 *
	 * This is optional.
	 */
	url?: string;
	/**
	 * A custom function to pass to the language toggle button.
	 *
	 * This is optional.
	 */
	customLanguageToggle?: (event: globalThis.Event) => void;
	translations: any;
	/**
	 * An event to set the Document's HTML lang property, and emit the toggled language to other components.
	 */
	setAppLanguage: EventEmitter<string>;
	setAppLanguageHandler(): void;
	/**
	 * An event that emits to other components that the language toggle button has been toggled.
	 */
	headerLanguageToggled: EventEmitter<HeaderLanguageToggleEventDetails>;
	handleHeaderLanguageToggled(language: string, event?: globalThis.Event): void;
	updateLanguage(): void;
	updateHTMLLang: (lang: string) => void;
	connectedCallback(): void;
	render(): any;
}
