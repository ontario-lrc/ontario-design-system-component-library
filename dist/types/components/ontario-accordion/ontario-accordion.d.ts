import { Accordion } from './accordion.interface';
import { ExpandCollapseButtonDetails } from './expandCollapseButtonDetails.interface';
import { Language } from '../../utils/common/language-types';
export declare class OntarioAccordion {
	host: HTMLElement;
	/**
	 * The name of the accordion component.
	 *
	 * This is not optional.
	 */
	name: string;
	/**
	 * Custom Expand/Collapse button text.
	 *
	 * @example
	 *  <ontario-accordion
	 *		name="My Accordion"
	 *		expand-collapse-button='{
	 *			"expandAllSectionsLabel": "Expand All",
	 *			"collapseAllSectionsLabel": "Collapse All"
	 *		}'
	 *		accordion-data='[
	 *			{"label": "Accordion 1", "content": ["Item 1", "Item 2", "Item 3"]},
	 *			{"label": "Accordion 2", "content": ["Item A", "Item B", "Item C"]}
	 *		]'
	 *	></ontario-accordion>
	 */
	expandCollapseButton?: string | ExpandCollapseButtonDetails;
	/**
	 * Used to include individual accordion data for the accordion component.
	 * This is passed in as an array of objects with key-value pairs.
	 *
	 * The `content` is expecting a string, that can either be written as HTML or a just a plain string, depending on the accordionContentType.
	 *
	 * @example
	 * 	<ontario-accordion
	 *		name="My Accordion"
	 *		accordion-data='[
	 *			{"label": "Accordion 1", "content": "This is a string"},
	 *			{"label": "Accordion 2", "accordionContentType": "html", "content": "<ul><li>List A</li><li>List B</li><li>List C</li></ul>"}
	 *		]'
	 *	></ontario-accordion>
	 */
	accordionData: string | Accordion[];
	/**
	 * Used to show whether the accordion is opened or closed.
	 */
	isOpen: boolean;
	/**
	 * The language of the component.
	 * This is used for translations, and is by default set through event listeners checking for a language property from the header. If none are passed, it will default to English.
	 */
	language?: Language;
	/**
	 * This listens for the `setAppLanguage` event sent from the test language toggler when it is is connected to the DOM. It is used for the initial language when the input component loads.
	 */
	handleSetAppLanguage(event: CustomEvent<Language>): void;
	/**
	 * Handle the language being toggled from the `<ontario-header>`.
	 * @param event Event object passed when the event is fired.
	 */
	handleHeaderLanguageToggled(event: CustomEvent<Language>): void;
	/**
	 * Store the translation dictionary for use within the component.
	 */
	translations: any;
	/**
	 * The label for the expand/collapse button.
	 * This is internal and udpdated dynamically.
	 */
	private expandCollapseLabel;
	/**
	 * Internal state of the expand/collapse label information.
	 */
	private internalExpandCollapseLabelDetails;
	/**
	 * Internal state containing the parsed Accordion Data
	 */
	private internalAccordionData;
	/**
	 * This state tracks which accordions are open.
	 */
	private openAccordionIndexes;
	/**
	 * Parse Accordion data, this is used to handle JSON strings from HTML.
	 */
	private parseAccordionData;
	/**
	 * Parse Expand/Collapse Button Details, this is used to handle JSON strings from HTML.
	 */
	private parseExpandCollapseButtonDetails;
	private toggleAccordion;
	/**
	 * Toggle all accordions open/close
	 */
	private toggleAll;
	/**
	 * Update the label based on the current accordion state
	 */
	private updateLabel;
	componentWillLoad(): void;
	render(): any;
}
