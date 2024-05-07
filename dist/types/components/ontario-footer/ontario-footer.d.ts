import { FooterLinks, OntarioFooterType, ThreeColumnOptions, TwoColumnOptions } from './ontario-footer-interface';
import { FooterSocialLinksProps } from './components';
import { Language } from '../../utils/common/language-types';
export declare class OntarioFooter {
	/**
	 * The language of the component.
	 * This is used for translations, and is by default set through event listeners checking for a language property from the header. If no language is passed, it will default to English.
	 */
	language: Language;
	/**
	 * The type of footer to be rendered. If no prop is provided, it will default to the 'default' type.
	 */
	type: OntarioFooterType;
	/**
	 * A prop that stores the required links for all footers.
	 * Available options are 'accessibilityLink', 'privacyLink', 'contactLink' and 'printerLink'
	 */
	footerLinks: FooterLinks | string;
	/**
	 * Social media links to render in the footer.
	 * Available options are 'facebook', 'twitter', 'instagram' and 'youtube'
	 */
	socialLinks: FooterSocialLinksProps | string;
	/**
	 * Stores the titles and content for the expanded two column footer.
	 */
	twoColumnOptions?: TwoColumnOptions | string;
	/**
	 * Stores the titles and content for the expanded three column footer.
	 */
	threeColumnOptions?: ThreeColumnOptions | string;
	/**
	 * Top margin for the footer. By default, this prop is set to `true`, which adds a margin top value of `5rem`.
	 * If set to `false`, the top margin value will be set to zero.
	 */
	topMargin: boolean;
	/**
	 * The base path to an assets folder containing the Design System assets
	 */
	assetBasePath: string;
	translations: any;
	private footerLinksState;
	private socialLinksState;
	private twoColumnState;
	private threeColumnState;
	/**
	 * This listens for the `setAppLanguage` event sent from the test language toggler when it is
	 * connected to the DOM. It is used for the initial language when the input component loads.
	 */
	handleSetAppLanguage(event: CustomEvent<Language>): void;
	handleHeaderLanguageToggled(event: CustomEvent<Language>): void;
	private processFooterLinks;
	private processSocialLinks;
	private processTwoColumnOptions;
	private processThreeColumnOptions;
	private isTwoColumnLayout;
	private isThreeColumnLayout;
	private isExpandedLayout;
	private verifyTwoColumnOptions;
	private verifyThreeColumnOptions;
	private parseOptions;
	/**
	 * Generate a link to the given image based on the base asset path.
	 * @param imageName Name of the image to build the path to
	 * @returns Path to image with asset path
	 */
	private getImageAssetSrcPath;
	/**
	 * Generate CSS url to the background image
	 * @returns path to the background image
	 */
	private getBackgroundImagePath;
	private getFooterClasses;
	private getFooterLinks;
	componentWillLoad(): void;
	render(): any;
}
