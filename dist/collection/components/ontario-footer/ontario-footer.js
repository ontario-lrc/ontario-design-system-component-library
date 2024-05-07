import { h, getAssetPath } from '@stencil/core';
import { ExpandedFooterWrapper, FooterColumn, SimpleFooter } from './components';
import { isInvalidTwoColumnOptions, isInvalidThreeColumnOptions } from './utils';
import { validateLanguage } from '../../utils/validation/validation-functions';
import { ConsoleMessageClass } from '../../utils/console-message/console-message';
import { ConsoleType } from '../../utils/console-message/console-message.enum';
import translations from '../../translations/global.i18n.json';
export class OntarioFooter {
	constructor() {
		this.isTwoColumnLayout = () => this.type === 'twoColumn';
		this.isThreeColumnLayout = () => this.type === 'threeColumn';
		this.isExpandedLayout = () => this.isTwoColumnLayout() || this.isThreeColumnLayout();
		this.language = undefined;
		this.type = 'default';
		this.footerLinks = undefined;
		this.socialLinks = undefined;
		this.twoColumnOptions = undefined;
		this.threeColumnOptions = undefined;
		this.topMargin = true;
		this.assetBasePath = undefined;
		this.translations = translations;
		this.footerLinksState = undefined;
		this.socialLinksState = undefined;
		this.twoColumnState = undefined;
		this.threeColumnState = undefined;
	}
	/**
	 * This listens for the `setAppLanguage` event sent from the test language toggler when it is
	 * connected to the DOM. It is used for the initial language when the input component loads.
	 */
	handleSetAppLanguage(event) {
		if (!this.language) {
			this.language = validateLanguage(event);
		}
	}
	handleHeaderLanguageToggled(event) {
		this.language = validateLanguage(event);
	}
	processFooterLinks() {
		this.parseOptions(this.footerLinks);
	}
	processSocialLinks() {
		this.parseOptions(this.socialLinks);
	}
	processTwoColumnOptions() {
		this.twoColumnOptions && this.parseOptions(this.twoColumnOptions);
		this.verifyTwoColumnOptions();
	}
	processThreeColumnOptions() {
		this.threeColumnOptions && this.parseOptions(this.threeColumnOptions);
		this.verifyThreeColumnOptions();
	}
	verifyTwoColumnOptions() {
		if (this.isTwoColumnLayout() && isInvalidTwoColumnOptions(this.twoColumnState)) {
			const message = new ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' twoColumnOptions ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-footer> ')
				.addRegularText('were not fully set. Please review your values and ensure all options are set.')
				.printMessage();
		}
	}
	verifyThreeColumnOptions() {
		if (this.isThreeColumnLayout() && isInvalidThreeColumnOptions(this.threeColumnState)) {
			const message = new ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' threeColumnOptions ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-footer> ')
				.addRegularText('were not fully set. Please review your values and ensure all options are set.')
				.printMessage();
		}
	}
	parseOptions(optionType) {
		const options = optionType;
		const isString = typeof options === 'string';
		if (!options) {
			return;
		}
		try {
			if (options === this.footerLinks) {
				this.footerLinksState = isString ? JSON.parse(options) : options;
			} else if (options === this.socialLinks) {
				this.socialLinksState = isString ? JSON.parse(options) : options;
			} else if (options === this.twoColumnOptions) {
				this.twoColumnState = isString ? JSON.parse(options) : options;
			} else {
				this.threeColumnState = isString ? JSON.parse(options) : options;
			}
		} catch (error) {
			const message = new ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addRegularText(' failed to parse props for ')
				.addMonospaceText('<ontario-footer>')
				.addRegularText(' in ')
				.addMonospaceText('parseOptions()')
				.addRegularText(' method \n ')
				.addMonospaceText(error.stack)
				.printMessage(ConsoleType.Error);
		}
	}
	/**
	 * Generate a link to the given image based on the base asset path.
	 * @param imageName Name of the image to build the path to
	 * @returns Path to image with asset path
	 */
	getImageAssetSrcPath(imageName) {
		return `${this.assetBasePath ? this.assetBasePath : getAssetPath('./assets')}/${imageName}`;
	}
	/**
	 * Generate CSS url to the background image
	 * @returns path to the background image
	 */
	getBackgroundImagePath() {
		const supergraphicLogoFile = this.isExpandedLayout()
			? 'footer-expanded-supergraphic-logo.svg'
			: 'footer-default-supergraphic-logo.svg';
		return `url(${this.getImageAssetSrcPath(supergraphicLogoFile)})`;
	}
	getFooterClasses() {
		let classes = 'ontario-footer ontario-footer--default';
		if (!this.topMargin) {
			classes = `${classes}  ontario-margin-top-0-!`;
		}
		return classes;
	}
	getFooterLinks() {
		var _a, _b, _c, _d, _e, _f, _g;
		const { language, translations, footerLinksState } = this;
		const { accessibilityLink, privacyLink, contactLink, printerLink } =
			footerLinksState !== null && footerLinksState !== void 0 ? footerLinksState : {};
		const links = {
			accessibilityLink: {
				href:
					(_a = accessibilityLink === null || accessibilityLink === void 0 ? void 0 : accessibilityLink.href) !==
						null && _a !== void 0
						? _a
						: translations.accessibilityLink.link[language],
				text:
					(_b = accessibilityLink === null || accessibilityLink === void 0 ? void 0 : accessibilityLink.text) !==
						null && _b !== void 0
						? _b
						: translations.accessibilityLink.text[language],
			},
			privacyLink: {
				href:
					(_c = privacyLink === null || privacyLink === void 0 ? void 0 : privacyLink.href) !== null && _c !== void 0
						? _c
						: translations.privacyLink.link[language],
				text:
					(_d = privacyLink === null || privacyLink === void 0 ? void 0 : privacyLink.text) !== null && _d !== void 0
						? _d
						: translations.privacyLink.text[language],
			},
			printerLink: {
				href:
					(_e = printerLink === null || printerLink === void 0 ? void 0 : printerLink.href) !== null && _e !== void 0
						? _e
						: translations.printerLink.link[language],
				text:
					(_f = printerLink === null || printerLink === void 0 ? void 0 : printerLink.text) !== null && _f !== void 0
						? _f
						: translations.printerLink.text[language],
			},
		};
		if (contactLink) {
			links['contactLink'] = {
				href: contactLink.href,
				text: (_g = contactLink.text) !== null && _g !== void 0 ? _g : translations.contactUs[language],
			};
		}
		return links;
	}
	componentWillLoad() {
		this.processFooterLinks();
		this.processSocialLinks();
		this.processTwoColumnOptions();
		this.processThreeColumnOptions();
		this.language = validateLanguage(this.language);
	}
	render() {
		const { socialLinksState, twoColumnState, threeColumnState, topMargin } = this;
		const footerLinks = this.getFooterLinks();
		if (this.isTwoColumnLayout()) {
			return h(
				ExpandedFooterWrapper,
				{ footerLinks: footerLinks, topMargin: topMargin, backgroundImagePath: this.getBackgroundImagePath() },
				h(FooterColumn, { data: twoColumnState.column1 }),
				h(FooterColumn, { data: twoColumnState.column2, socialLinks: socialLinksState }),
			);
		}
		if (this.isThreeColumnLayout()) {
			return h(
				ExpandedFooterWrapper,
				{ footerLinks: footerLinks, topMargin: topMargin, backgroundImagePath: this.getBackgroundImagePath() },
				h(FooterColumn, { data: threeColumnState.column1, isThreeColLayout: true, isFullWidthInMediumLayout: true }),
				h(FooterColumn, { data: threeColumnState.column2, isThreeColLayout: true }),
				h(FooterColumn, { data: threeColumnState.column3, socialLinks: socialLinksState, isThreeColLayout: true }),
			);
		}
		return h(
			'footer',
			{ class: this.getFooterClasses(), style: { '--imagePath': this.getBackgroundImagePath() } },
			h(SimpleFooter, Object.assign({}, footerLinks)),
		);
	}
	static get is() {
		return 'ontario-footer';
	}
	static get encapsulation() {
		return 'shadow';
	}
	static get originalStyleUrls() {
		return {
			$: ['ontario-footer.scss'],
		};
	}
	static get styleUrls() {
		return {
			$: ['ontario-footer.css'],
		};
	}
	static get assetsDirs() {
		return ['assets'];
	}
	static get properties() {
		return {
			language: {
				type: 'string',
				mutable: true,
				complexType: {
					original: 'Language',
					resolved: '"en" | "fr"',
					references: {
						Language: {
							location: 'import',
							path: '../../utils/common/language-types',
							id: 'src/utils/common/language-types.ts::Language',
						},
					},
				},
				required: false,
				optional: false,
				docs: {
					tags: [],
					text: 'The language of the component.\nThis is used for translations, and is by default set through event listeners checking for a language property from the header. If no language is passed, it will default to English.',
				},
				attribute: 'language',
				reflect: false,
			},
			type: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'OntarioFooterType',
					resolved: '"default" | "threeColumn" | "twoColumn"',
					references: {
						OntarioFooterType: {
							location: 'import',
							path: './ontario-footer-interface',
							id: 'src/components/ontario-footer/ontario-footer-interface.tsx::OntarioFooterType',
						},
					},
				},
				required: false,
				optional: false,
				docs: {
					tags: [],
					text: "The type of footer to be rendered. If no prop is provided, it will default to the 'default' type.",
				},
				attribute: 'type',
				reflect: false,
				defaultValue: "'default'",
			},
			footerLinks: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'FooterLinks | string',
					resolved: 'FooterLinks | string',
					references: {
						FooterLinks: {
							location: 'import',
							path: './ontario-footer-interface',
							id: 'src/components/ontario-footer/ontario-footer-interface.tsx::FooterLinks',
						},
					},
				},
				required: false,
				optional: false,
				docs: {
					tags: [],
					text: "A prop that stores the required links for all footers.\nAvailable options are 'accessibilityLink', 'privacyLink', 'contactLink' and 'printerLink'",
				},
				attribute: 'footer-links',
				reflect: false,
			},
			socialLinks: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'FooterSocialLinksProps | string',
					resolved:
						'string | { facebook?: string | undefined; twitter?: string | undefined; instagram?: string | undefined; youtube?: string | undefined; }',
					references: {
						FooterSocialLinksProps: {
							location: 'import',
							path: './components',
							id: 'src/components/ontario-footer/components/index.ts::FooterSocialLinksProps',
						},
					},
				},
				required: false,
				optional: false,
				docs: {
					tags: [],
					text: "Social media links to render in the footer.\nAvailable options are 'facebook', 'twitter', 'instagram' and 'youtube'",
				},
				attribute: 'social-links',
				reflect: false,
			},
			twoColumnOptions: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'TwoColumnOptions | string',
					resolved: 'TwoColumnOptions | string | undefined',
					references: {
						TwoColumnOptions: {
							location: 'import',
							path: './ontario-footer-interface',
							id: 'src/components/ontario-footer/ontario-footer-interface.tsx::TwoColumnOptions',
						},
					},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'Stores the titles and content for the expanded two column footer.',
				},
				attribute: 'two-column-options',
				reflect: false,
			},
			threeColumnOptions: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'ThreeColumnOptions | string',
					resolved: 'ThreeColumnOptions | string | undefined',
					references: {
						ThreeColumnOptions: {
							location: 'import',
							path: './ontario-footer-interface',
							id: 'src/components/ontario-footer/ontario-footer-interface.tsx::ThreeColumnOptions',
						},
					},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'Stores the titles and content for the expanded three column footer.',
				},
				attribute: 'three-column-options',
				reflect: false,
			},
			topMargin: {
				type: 'boolean',
				mutable: false,
				complexType: {
					original: 'boolean',
					resolved: 'boolean',
					references: {},
				},
				required: false,
				optional: false,
				docs: {
					tags: [],
					text: 'Top margin for the footer. By default, this prop is set to `true`, which adds a margin top value of `5rem`.\nIf set to `false`, the top margin value will be set to zero.',
				},
				attribute: 'top-margin',
				reflect: false,
				defaultValue: 'true',
			},
			assetBasePath: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'string',
					resolved: 'string',
					references: {},
				},
				required: false,
				optional: false,
				docs: {
					tags: [],
					text: 'The base path to an assets folder containing the Design System assets',
				},
				attribute: 'asset-base-path',
				reflect: false,
			},
		};
	}
	static get states() {
		return {
			translations: {},
			footerLinksState: {},
			socialLinksState: {},
			twoColumnState: {},
			threeColumnState: {},
		};
	}
	static get watchers() {
		return [
			{
				propName: 'footerLinks',
				methodName: 'processFooterLinks',
			},
			{
				propName: 'socialLinks',
				methodName: 'processSocialLinks',
			},
			{
				propName: 'twoColumnOptions',
				methodName: 'processTwoColumnOptions',
			},
			{
				propName: 'threeColumnOptions',
				methodName: 'processThreeColumnOptions',
			},
		];
	}
	static get listeners() {
		return [
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
//# sourceMappingURL=ontario-footer.js.map
