import { MenuItem, ApplicationHeaderInfo, LanguageToggleOptions, OntarioHeaderType } from './ontario-header.interface';
import { Language } from '../../utils/common/language-types';
export declare class OntarioHeader {
	el: HTMLElement;
	/**
	 * The type of header.
	 */
	type?: OntarioHeaderType;
	/**
	 * Information pertaining to the application header. This is only necessary for the 'application' header type.
	 *
	 * This includes the application name, URL and optional props for the number of links in the subheader for desktop, tablet, and mobile views.
	 *
	 * @example
	 *  <ontario-header
	 *    type="application"
	 *    application-header-info='{
	 *      "title": "Application name",
	 *      "href": "/application-homepage",
	 *      "maxSubheaderDesktopLinks": "3",
	 *      "maxSubheaderTabletLinks": "2",
	 *      "maxSubheaderMobileLinks": "1"
	 *    }'>
	 *  </ontario-header>
	 */
	applicationHeaderInfo: ApplicationHeaderInfo | string;
	/**
	 * The items that will go inside the menu.
	 */
	menuItems: MenuItem[] | string;
	/**
	 * Option to disable fetching of the dynamic menu from the Ontario Header API
	 *
	 * @example
	 * 	<ontario-header
	 * 			type="ontario"
	 * 			disable-dynamic-menu="false"
	 *			menu-items='[{
	 *				"title": "Hint",
	 *				"href": "/ontario-hint"
	 *				"linkIsActive": "false"
	 *			},{
	 *				"title": "Hint",
	 *				"href": "/ontario-hint"
	 *				"linkIsActive": "false"
	 *			},{
	 *				"title": "Hint",
	 *				"href": "/ontario-hint"
	 *				"linkIsActive": "false"
	 *			},{
	 *				"title": "Hint",
	 *				"href": "/ontario-hint"
	 *				"linkIsActive": "false"
	 *			}]'>
	 *	</ontario-header>
	 */
	disableDynamicMenu: boolean;
	/**
	 * Information pertaining to the language toggle links.
	 *
	 * @example
	 * <ontario-header
	 * 	language-toggle-options='{
	 *    "englishLink": "/en",
	 *    "frenchLink": "/fr"
	 *  }'
	 *  ...
	 * >
	 * </ontario-header>
	 */
	languageToggleOptions?: LanguageToggleOptions | string;
	/**
	 * A custom function to pass to the language toggle button.
	 */
	customLanguageToggle?: (event: globalThis.Event) => void;
	/**
	 * The language of the component.
	 * This is used for translations, and is by default set through event listeners checking for a language property from the header. If none is passed, it will default to English.
	 */
	language?: Language;
	/**
	 * The base path to an assets folder containing the Design System assets
	 */
	assetBasePath: string;
	/**
	 * The application header information is reassigned to applicationHeaderInfoState for parsing
	 */
	private applicationHeaderInfoState;
	/**
	 * The menuItems is reassigned to itemState for parsing
	 *
	 * @example
	 * 	<ontario-header
	 * 			type="ontario"
	 * 			disable-dynamic-menu="true"
	 *			menu-items='[{
	 *				"title": "Hint",
	 *				"href": "/ontario-hint"
	 *				"linkIsActive": "false"
	 *			},{
	 *				"title": "Hint",
	 *				"href": "/ontario-hint"
	 *				"linkIsActive": "false"
	 *			},{
	 *				"title": "Hint",
	 *				"href": "/ontario-hint"
	 *				"linkIsActive": "false"
	 *			},{
	 *				"title": "Hint",
	 *				"href": "/ontario-hint"
	 *				"linkIsActive": "false"
	 *			}]'>
	 *	</ontario-header>
	 */
	private menuItemState;
	/**
	 * Check to see if menu is dynamic or static
	 */
	private isDynamicMenu;
	/**
	 * The languageToggleOptions is reassigned to languageState for parsing
	 *
	 * @example
	 * 	<ontario-header
	 *		language-toggle-options='{
	 *			"englishLink":"/en",
	 *			"frenchLink": "/fr"
	 *		}'
	 *	</ontario-header>
	 */
	private languageState;
	/**
	 * Toggler for the menu and the search button
	 */
	menuToggle: boolean;
	searchToggle?: boolean;
	/**
	 * Assigning values to elements to use them as ref
	 */
	header: HTMLElement;
	menuButton: HTMLElement;
	menuButtonDesktop: HTMLElement;
	menuButtonTablet: HTMLElement;
	menuButtonMobile: HTMLElement;
	searchBar: HTMLInputElement;
	searchButton: HTMLInputElement;
	translations: any;
	private parseApplicationHeaderInfo;
	parseMenuItems(): void;
	private parseLanguage;
	/**
	 * Logic to close the menu when anything outside the menu is clicked
	 */
	handleClick(event: any): void;
	/**
	 * This listens for the `setAppLanguage` event sent from the test language toggler when it is is connected to the DOM. It is used for the initial language when the input component loads.
	 */
	handleSetAppLanguage(event: CustomEvent<Language>): void;
	/**
	 * Logic to handle the menu toggling
	 */
	handleMenuToggle: () => void;
	/**
	 * Logic to handle the search toggling
	 */
	handleSearchToggle: () => void;
	/**
	 * event.preventDefault(): https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
	 * location.href: https://developer.mozilla.org/en-US/docs/Web/API/Location/href
	 */
	handleSubmit: (event: any) => void;
	/**
	 * Logic to make the focus go back to the menu button when the list ends
	 */
	trapMenuFocus: (e: any) => void;
	/**
	 * Call to Ontario Menu API to fetch linksets to populate header component
	 */
	fetchOntarioMenu(): Promise<void>;
	/**
	 * Generate a link to the given image based on the base asset path.
	 * @param imageName Name of the image to build the path to
	 * @returns Path to image with asset path
	 */
	private getImageAssetSrcPath;
	/**
	 * This function generates the menu items in a <li>, accordingly, to the given parameters.
	 *
	 * href and title are necessary, but rest are not.
	 *
	 * @param href - the href of the menu item
	 * @param title - the title of the menu item
	 * @param linkIsActive - when set to true, this will add the classes necessary to style the link in a way that indicates to the user what the active page/link is
	 * @param liClass - if there is a class that is related to the <a> portion of the menu item, put it here
	 * @param onClick - for any custom onClick event a user might want to add to their menu links
	 * @param onBlur - when set to true, it will call the function trapMenuFocus(), otherwise nothing is done (used in lastLink)
	 */
	private generateMenuItem;
	/**
	 * This function generates the menu dropdown button for the ontario header component.
	 *
	 * @param viewportSize - the size of the screen where the function is being called. It can either be set to `desktop`, `tablet` or `mobile`. This dictates the classes used on the menu button, as well as the ref to keep the focus trapped when the menu is open.
	 */
	private renderMenuButton;
	/**
	 * A helper function to generate navigation dropdown links with onBlur functionality. This is used for the application header.
	 *
	 * @param item - the menu item to be looped over (contains the title and href)
	 * @param index
	 * @param links - the number of links associated with the maxSubheader[size]Links in the application header info prop. This will determine how many links should be displayed in the dropdown.
	 * @param viewportSize - the size of the viewport. It can be set to `desktop`, `tablet` or `mobile`.
	 * @returns
	 */
	private generateNavigationLinks;
	/**
	 * The onEscapePressed function clears the searchbar form when Escape is pressed
	 */
	private onEscapePressed;
	private isMenuVisible;
	componentWillLoad(): void;
	componentDidRender(): void;
	/**
	 * Handles the focus when menu/toggle button is clicked.
	 * When search button is clicked, the search bar is in focus,
	 * when the closed button is clicked, the search button is back into focus.
	 * When the menu is closed, the menu button should be out of focus.
	 */
	componentDidUpdate(): void;
	render(): any;
}
