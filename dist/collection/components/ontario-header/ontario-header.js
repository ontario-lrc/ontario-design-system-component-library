import { h, getAssetPath } from '@stencil/core';
import { Input } from '../../utils/common/input/input';
import OntarioIconClose from '../ontario-icon/assets/ontario-icon-close-header.svg';
import OntarioIconMenu from '../ontario-icon/assets/ontario-icon-menu-header.svg';
import OntarioIconSearch from '../ontario-icon/assets/ontario-icon-search.svg';
import OntarioIconSearchWhite from '../ontario-icon/assets/ontario-icon-search-white.svg';
import OntarioHeaderDefaultData from './ontario-header-default-data.json';
import { validateLanguage } from '../../utils/validation/validation-functions';
import translations from '../../translations/global.i18n.json';
import config from '../../config.json';
export class OntarioHeader {
	constructor() {
		/**
		 * Logic to handle the menu toggling
		 */
		this.handleMenuToggle = () => {
			this.menuToggle = !this.menuToggle;
			this.searchToggle = undefined;
		};
		/**
		 * Logic to handle the search toggling
		 */
		this.handleSearchToggle = () => {
			this.searchToggle = !this.searchToggle;
		};
		/**
		 * event.preventDefault(): https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
		 * location.href: https://developer.mozilla.org/en-US/docs/Web/API/Location/href
		 */
		this.handleSubmit = (event) => {
			event.preventDefault();
			location.href = `${this.translations.header.ontarioSearchURL[`${this.language}`]}${event.target[0].value}`;
		};
		/**
		 * Logic to make the focus go back to the menu button when the list ends
		 */
		this.trapMenuFocus = (e) => {
			var _a;
			let dataType = (_a = e.target) === null || _a === void 0 ? void 0 : _a.dataset.type;
			if (dataType === 'app-desktop') {
				this.menuButtonDesktop.focus();
			} else if (dataType === 'app-tablet') {
				this.menuButtonTablet.focus();
			} else if (dataType === 'app-mobile') {
				this.menuButtonMobile.focus();
			} else {
				this.menuButton.focus();
			}
		};
		this.type = 'application';
		this.applicationHeaderInfo = undefined;
		this.menuItems = undefined;
		this.disableDynamicMenu = false;
		this.languageToggleOptions = undefined;
		this.customLanguageToggle = undefined;
		this.language = 'en';
		this.assetBasePath = undefined;
		this.applicationHeaderInfoState = undefined;
		this.menuItemState = undefined;
		this.isDynamicMenu = false;
		this.languageState = undefined;
		this.menuToggle = false;
		this.searchToggle = false;
		this.translations = translations;
	}
	parseApplicationHeaderInfo() {
		const applicationHeaderInfo = this.applicationHeaderInfo;
		if (applicationHeaderInfo) {
			if (typeof applicationHeaderInfo === 'string')
				this.applicationHeaderInfoState = JSON.parse(applicationHeaderInfo);
			else this.applicationHeaderInfoState = applicationHeaderInfo;
		}
	}
	parseMenuItems() {
		const isEnglish = this.language === 'en';
		if (!Array.isArray(this.menuItems) && typeof this.menuItems === 'string') {
			this.menuItemState = JSON.parse(this.menuItems);
			this.isDynamicMenu = false;
		} else if (Array.isArray(this.menuItems) && this.type === 'application') {
			this.menuItemState = this.menuItems;
			this.isDynamicMenu = false;
		} else {
			this.menuItemState = isEnglish ? OntarioHeaderDefaultData.en : OntarioHeaderDefaultData.fr;
			this.isDynamicMenu = false;
		}
	}
	parseLanguage() {
		const languageToggleOptions = this.languageToggleOptions;
		if (languageToggleOptions) {
			if (typeof languageToggleOptions === 'string') {
				this.languageState = JSON.parse(languageToggleOptions);
			} else {
				this.languageState = languageToggleOptions;
			}
		}
	}
	/**
	 * Logic to close the menu when anything outside the menu is clicked
	 */
	handleClick(event) {
		// if the button is clicked, return
		if (
			event.composedPath().includes(this.menuButton) ||
			event.composedPath().includes(this.menuButtonDesktop) ||
			event.composedPath().includes(this.menuButtonTablet) ||
			event.composedPath().includes(this.menuButtonMobile)
		) {
			return;
		}
		// If the click was outside the current component, do the following
		if (this.menuToggle) this.menuToggle = !this.menuToggle;
	}
	/**
	 * This listens for the `setAppLanguage` event sent from the test language toggler when it is is connected to the DOM. It is used for the initial language when the input component loads.
	 */
	handleSetAppLanguage(event) {
		this.language = validateLanguage(event);
	}
	/**
	 * Call to Ontario Menu API to fetch linksets to populate header component
	 */
	async fetchOntarioMenu() {
		const isEnglish = this.language === 'en';
		// If menu has already been fetched and contains dynamic menu items, do not run fetch again
		if (!this.isDynamicMenu) {
			const apiUrl = isEnglish ? config.ONTARIO_HEADER_API_URL_EN : config.ONTARIO_HEADER_API_URL_FR;
			const response = await fetch(apiUrl)
				.then((response) => response.json())
				.then((json) => json.linkset[0].item)
				.catch(() => {
					console.error('Unable to retrieve data from Ontario Menu API');
					return [];
				});
			if (response.length > 0) {
				const externalMenuItems = response.map((item) => {
					return { href: item.href, title: item.title };
				});
				this.menuItemState = externalMenuItems;
				this.isDynamicMenu = true;
			}
		}
		return;
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
	generateMenuItem(href, title, linkIsActive, type, liClass, onClick, onBlur) {
		return h(
			'li',
			{ class: liClass },
			h(
				'a',
				{
					'class': linkIsActive === true ? `ontario-link--active` : ``,
					'href': href,
					'onClick': onClick,
					'onBlur': onBlur ? this.trapMenuFocus : undefined,
					'data-type': type,
				},
				title,
			),
		);
	}
	/**
	 * This function generates the menu dropdown button for the ontario header component.
	 *
	 * @param viewportSize - the size of the screen where the function is being called. It can either be set to `desktop`, `tablet` or `mobile`. This dictates the classes used on the menu button, as well as the ref to keep the focus trapped when the menu is open.
	 */
	renderMenuButton(viewportSize) {
		if (!this.isMenuVisible(viewportSize)) {
			return;
		}
		return h(
			'button',
			{
				'class':
					viewportSize === 'desktop'
						? 'ontario-header__menu-toggler ontario-header-button ontario-header-button--with-outline ontario-show-for-large'
						: viewportSize === 'tablet'
						? 'ontario-header__menu-toggler ontario-header-button ontario-header-button--with-outline ontario-hide-for-small ontario-show-for-medium ontario-hide-for-large'
						: viewportSize === 'mobile'
						? 'ontario-header__menu-toggler ontario-header-button ontario-header-button--with-outline ontario-show-for-small-only'
						: 'ontario-header__menu-toggler ontario-header-button ontario-header-button--with-outline',
				'id': this.type === 'ontario' ? 'ontario-header-menu-toggler' : 'ontario-application-header-menu-toggler',
				'aria-controls': 'ontario-navigation',
				'aria-label': this.menuToggle
					? this.translations.header.closeMenu[`${this.language}`]
					: this.translations.header.openMenu[`${this.language}`],
				'onClick': this.handleMenuToggle,
				'type': 'button',
				'ref':
					viewportSize === 'desktop'
						? (el) => (this.menuButtonDesktop = el)
						: viewportSize === 'tablet'
						? (el) => (this.menuButtonTablet = el)
						: viewportSize === 'mobile'
						? (el) => (this.menuButtonMobile = el)
						: (el) => (this.menuButton = el),
			},
			h('span', {
				class: 'ontario-header__icon-container',
				innerHTML: this.menuToggle ? OntarioIconClose : OntarioIconMenu,
			}),
			h('span', null, 'Menu'),
		);
	}
	/**
	 * A helper function to generate navigation dropdown links with onBlur functionality. This is used for the application header.
	 *
	 * @param item - the menu item to be looped over (contains the title and href)
	 * @param index
	 * @param links - the number of links associated with the maxSubheader[size]Links in the application header info prop. This will determine how many links should be displayed in the dropdown.
	 * @param viewportSize - the size of the viewport. It can be set to `desktop`, `tablet` or `mobile`.
	 * @returns
	 */
	generateNavigationLinks(item, index, links, viewportSize) {
		const lastLink =
			index + 1 === (links ? this.menuItemState.length - links : this.menuItemState.length) ? true : false;
		return this.generateMenuItem(
			item.href,
			item.title,
			item.linkIsActive,
			viewportSize,
			'',
			item.onClickHandler,
			lastLink,
		);
	}
	/**
	 * The onEscapePressed function clears the searchbar form when Escape is pressed
	 */
	onEscapePressed(event) {
		if (event.key === 'Escape') {
			event.path[0].value = '';
		}
	}
	isMenuVisible(viewportSize) {
		var _a;
		const { menuItemState, applicationHeaderInfoState } = this;
		const { maxSubheaderMobileLinks, maxSubheaderTabletLinks, maxSubheaderDesktopLinks } =
			applicationHeaderInfoState !== null && applicationHeaderInfoState !== void 0 ? applicationHeaderInfoState : {};
		const numOfMenuItems =
			(_a = menuItemState === null || menuItemState === void 0 ? void 0 : menuItemState.length) !== null &&
			_a !== void 0
				? _a
				: 0;
		if (numOfMenuItems <= 0) {
			return false;
		}
		if (viewportSize === 'mobile') {
			return maxSubheaderMobileLinks && numOfMenuItems - maxSubheaderMobileLinks > 0;
		}
		if (viewportSize === 'tablet') {
			return maxSubheaderTabletLinks && numOfMenuItems - maxSubheaderTabletLinks > 0;
		}
		if (viewportSize === 'desktop') {
			return maxSubheaderDesktopLinks && numOfMenuItems - maxSubheaderDesktopLinks > 0;
		}
		return true;
	}
	componentWillLoad() {
		this.parseApplicationHeaderInfo();
		this.parseMenuItems();
		this.parseLanguage();
	}
	componentDidRender() {
		if (this.disableDynamicMenu === false && this.type === 'ontario') {
			this.fetchOntarioMenu();
		}
	}
	/**
	 * Handles the focus when menu/toggle button is clicked.
	 * When search button is clicked, the search bar is in focus,
	 * when the closed button is clicked, the search button is back into focus.
	 * When the menu is closed, the menu button should be out of focus.
	 */
	componentDidUpdate() {
		if (this.type == 'ontario') {
			if (this.searchToggle === true) this.searchBar.focus();
			if (this.searchToggle === false) this.searchButton.focus();
			if (this.menuToggle === false) this.menuButton.blur();
		}
	}
	render() {
		var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
		const isServiceOntarioType = this.type === 'serviceOntario';
		if (this.type == 'ontario') {
			return h(
				'div',
				null,
				h(
					'div',
					{ class: 'ontario-header__container', ref: (el) => (this.header = el) },
					h(
						'header',
						{
							class: this.searchToggle ? 'ontario-header ontario-header--search-open' : 'ontario-header',
							id: 'ontario-header',
						},
						h(
							'div',
							{ class: 'ontario-row' },
							h(
								'div',
								{
									class:
										'ontario-header__logo-container ontario-columns ontario-small-2 ontario-medium-4 ontario-large-3',
								},
								h(
									'a',
									{ href: this.translations.header.logoLink[`${this.language}`] },
									h('img', {
										class: 'ontario-show-for-medium',
										src: this.getImageAssetSrcPath('ontario-logo--desktop.svg'),
										alt: this.translations.header.logoAltText[`${this.language}`],
									}),
									h('img', {
										class: 'ontario-show-for-small-only',
										src: this.getImageAssetSrcPath('ontario-logo--mobile.svg'),
										alt: this.translations.header.logoAltText[`${this.language}`],
									}),
								),
							),
							h(
								'form',
								{
									name: 'searchForm',
									id: 'ontario-search-form-container',
									onSubmit: this.handleSubmit,
									class:
										'ontario-header__search-container ontario-columns ontario-small-10 ontario-medium-offset-3 ontario-medium-6 ontario-large-offset-0 ontario-large-6',
									novalidate: true,
								},
								h(
									'label',
									{ htmlFor: 'ontario-search-input-field', class: 'ontario-show-for-sr' },
									this.translations.header.search[`${this.language}`],
								),
								h(Input, {
									'type': 'text',
									'name': 'search',
									'id': 'ontario-search-input-field',
									'autoComplete': 'off',
									'aria-autocomplete': 'none',
									'className': 'ontario-input ontario-header__search-input',
									'required': true,
									'ref': (el) => (this.searchBar = el),
									'onKeyDown': this.onEscapePressed,
								}),
								h(Input, {
									'className': 'ontario-header__search-reset',
									'id': 'ontario-search-reset',
									'type': 'reset',
									'value': '',
									'aria-label': this.translations.header.clearSearchField[`${this.language}`],
								}),
								h(
									'button',
									{ class: 'ontario-header__search-submit', id: 'ontario-search-submit', type: 'submit' },
									h('span', { class: 'ontario-show-for-sr' }, this.translations.header.submit[`${this.language}`]),
									h('span', { class: 'ontario-header__icon-container', innerHTML: OntarioIconSearch }),
								),
							),
							h(
								'div',
								{
									class:
										'ontario-header__nav-right-container ontario-columns ontario-small-10 ontario-medium-8 ontario-large-3',
								},
								h('ontario-language-toggle', {
									url:
										this.language === 'en'
											? (_a = this.languageState) === null || _a === void 0
												? void 0
												: _a.frenchLink
											: (_b = this.languageState) === null || _b === void 0
											? void 0
											: _b.englishLink,
									size: 'default',
									customLanguageToggle: this.customLanguageToggle,
									language: this.language,
								}),
								h(
									'button',
									{
										'class':
											'ontario-header__search-toggler ontario-header-button ontario-header-button--without-outline ontario-hide-for-large',
										'id': 'ontario-header-search-toggler',
										'aria-controls': 'ontario-search-form-container',
										'onClick': this.handleSearchToggle,
										'ref': (el) => (this.searchButton = el),
									},
									h('span', { class: 'ontario-header__icon-container', innerHTML: OntarioIconSearchWhite }),
									h(
										'span',
										{ class: 'ontario-show-for-medium ontario-show' },
										this.translations.header.search[`${this.language}`],
									),
								),
								this.renderMenuButton('ontario-header'),
							),
							h(
								'div',
								{ class: 'ontario-header__search-close-container ontario-columns ontario-small-2 ontario-medium-3' },
								h(
									'button',
									{
										'class':
											'ontario-header__search-close ontario-header-button ontario-header-button--without-outline',
										'id': 'ontario-header-search-close',
										'aria-label': this.translations.header.closeSearch[`${this.language}`],
										'type': 'button',
										'onClick': this.handleSearchToggle,
									},
									h(
										'span',
										{ 'aria-hidden': `${!this.searchToggle}` },
										this.translations.header.close[`${this.language}`],
									),
									h('span', { class: 'ontario-header__icon-container', innerHTML: OntarioIconClose }),
								),
							),
						),
					),
					h(
						'nav',
						{
							role: 'navigation',
							class: this.menuToggle ? 'ontario-navigation ontario-navigation--open' : 'ontario-navigation',
							id: 'ontario-navigation',
						},
						h(
							'div',
							{ class: 'ontario-navigation__container' },
							h(
								'ul',
								null,
								(_c = this.menuItemState) === null || _c === void 0
									? void 0
									: _c.map((item, index) => {
											const lastLink = index + 1 === this.menuItemState.length;
											const activeLinkRegex = item.title.replace(/\s+/g, '-').toLowerCase();
											const linkIsActive = window.location.pathname.includes(activeLinkRegex);
											return this.isDynamicMenu
												? this.generateMenuItem(
														item.href,
														item.title,
														linkIsActive,
														'ontario-header',
														'ontario-header-navigation__menu-item',
														undefined,
														lastLink,
												  )
												: this.generateMenuItem(
														item.href,
														item.title,
														item.linkIsActive,
														'ontario-header',
														'ontario-header-navigation__menu-item',
														item.onClickHandler,
														lastLink,
												  );
									  }),
							),
						),
					),
				),
				this.menuToggle && h('div', { class: 'ontario-hide-for-large ontario-overlay' }),
			);
		} else {
			return h(
				'div',
				null,
				h(
					'div',
					{
						class: 'ontario-application-header-container',
						id: 'ontario-application-header',
						ref: (el) => (this.header = el),
					},
					h(
						'header',
						{ class: 'ontario-application-header', id: 'ontario-header' },
						h(
							'div',
							{ class: 'ontario-row' },
							h(
								'div',
								{ class: 'ontario-columns ontario-small-6 ontario-application-header__logo' },
								h(
									'a',
									{ href: this.translations.header.logoLink[`${this.language}`] },
									h('img', {
										src: this.getImageAssetSrcPath('ontario-logo--desktop.svg'),
										alt: this.translations.header.logoAltText[`${this.language}`],
									}),
								),
							),
							h(
								'div',
								{ class: 'ontario-columns ontario-small-6 ontario-application-header__lang-toggle' },
								h('ontario-language-toggle', {
									size: 'small',
									url:
										this.language === 'en'
											? (_d = this.languageState) === null || _d === void 0
												? void 0
												: _d.frenchLink
											: (_e = this.languageState) === null || _e === void 0
											? void 0
											: _e.englishLink,
									customLanguageToggle: this.customLanguageToggle,
									language: this.language,
								}),
							),
						),
					),
					h(
						'div',
						{ class: 'ontario-application-subheader-menu__container' },
						h(
							'section',
							{ class: `ontario-application-subheader ${isServiceOntarioType ? 'ontario-service-subheader' : ''}` },
							h(
								'div',
								{ class: 'ontario-row' },
								h(
									'div',
									{ class: 'ontario-columns ontario-small-12 ontario-application-subheader__container' },
									!isServiceOntarioType
										? h(
												'p',
												{ class: 'ontario-application-subheader__heading' },
												h(
													'a',
													{ href: (_f = this.applicationHeaderInfoState) === null || _f === void 0 ? void 0 : _f.href },
													(_g = this.applicationHeaderInfoState) === null || _g === void 0 ? void 0 : _g.title,
												),
										  )
										: h(
												'a',
												{
													href: (_h = this.applicationHeaderInfoState) === null || _h === void 0 ? void 0 : _h.href,
													class: 'ontario-service-subheader__link',
												},
												h(
													'div',
													{ class: 'ontario-service-subheader__heading-container' },
													h(
														'p',
														{ class: 'ontario-service-subheader__heading' },
														this.translations.header.serviceOntario[`${this.language}`],
													),
													h(
														'p',
														{ class: 'ontario-service-subheader__description' },
														(_j = this.applicationHeaderInfoState) === null || _j === void 0 ? void 0 : _j.title,
													),
												),
										  ),
									h(
										'div',
										{ class: 'ontario-application-subheader__menu-container' },
										((_k = this.applicationHeaderInfoState) === null || _k === void 0
											? void 0
											: _k.maxSubheaderDesktopLinks) &&
											h(
												'ul',
												{
													class: `${
														isServiceOntarioType
															? 'ontario-service-subheader__menu'
															: 'ontario-application-subheader__menu'
													} ontario-show-for-large`,
												},
												(_l = this.menuItemState) === null || _l === void 0
													? void 0
													: _l
															.slice(
																0,
																(_m = this.applicationHeaderInfoState) === null || _m === void 0
																	? void 0
																	: _m.maxSubheaderDesktopLinks,
															)
															.map((item) =>
																this.generateMenuItem(
																	item.href,
																	item.title,
																	item.linkIsActive,
																	'app-desktop',
																	'',
																	item.onClickHandler,
																),
															),
											),
										((_o = this.applicationHeaderInfoState) === null || _o === void 0
											? void 0
											: _o.maxSubheaderTabletLinks) &&
											h(
												'ul',
												{
													class:
														'ontario-application-subheader__menu ontario-hide-for-small ontario-show-for-medium ontario-hide-for-large',
												},
												(_p = this.menuItemState) === null || _p === void 0
													? void 0
													: _p
															.slice(
																0,
																(_q = this.applicationHeaderInfoState) === null || _q === void 0
																	? void 0
																	: _q.maxSubheaderTabletLinks,
															)
															.map((item) =>
																this.generateMenuItem(
																	item.href,
																	item.title,
																	item.linkIsActive,
																	'app-tablet',
																	'',
																	item.onClickHandler,
																),
															),
											),
										((_r = this.applicationHeaderInfoState) === null || _r === void 0
											? void 0
											: _r.maxSubheaderMobileLinks) &&
											h(
												'ul',
												{ class: 'ontario-application-subheader__menu ontario-show-for-small-only' },
												(_s = this.menuItemState) === null || _s === void 0
													? void 0
													: _s
															.slice(0, this.applicationHeaderInfoState.maxSubheaderMobileLinks)
															.map((item) =>
																this.generateMenuItem(
																	item.href,
																	item.title,
																	item.linkIsActive,
																	'app-mobile',
																	'',
																	item.onClickHandler,
																),
															),
											),
										this.menuItemState !== undefined &&
											((_t = this.applicationHeaderInfoState) === null || _t === void 0
												? void 0
												: _t.maxSubheaderDesktopLinks) !== this.menuItemState.length &&
											this.renderMenuButton('desktop'),
										this.menuItemState !== undefined &&
											((_u = this.applicationHeaderInfoState) === null || _u === void 0
												? void 0
												: _u.maxSubheaderTabletLinks) !== this.menuItemState.length &&
											this.renderMenuButton('tablet'),
										this.menuItemState !== undefined &&
											((_v = this.applicationHeaderInfoState) === null || _v === void 0
												? void 0
												: _v.maxSubheaderMobileLinks) !== this.menuItemState.length &&
											this.renderMenuButton('mobile'),
									),
								),
							),
						),
						h(
							'nav',
							{
								role: 'navigation',
								class:
									this.menuToggle === true
										? 'ontario-application-navigation ontario-navigation--open'
										: 'ontario-application-navigation',
								id: 'ontario-application-navigation',
							},
							h(
								'div',
								{ class: 'ontario-application-navigation__container' },
								h(
									'ul',
									{ class: 'ontario-show-for-large' },
									(_w = this.menuItemState) === null || _w === void 0
										? void 0
										: _w
												.slice(
													(_x = this.applicationHeaderInfoState) === null || _x === void 0
														? void 0
														: _x.maxSubheaderDesktopLinks,
													this.menuItemState.length,
												)
												.map((item, index) => {
													var _a;
													return this.generateNavigationLinks(
														item,
														index,
														(_a = this.applicationHeaderInfoState) === null || _a === void 0
															? void 0
															: _a.maxSubheaderDesktopLinks,
														'app-desktop',
													);
												}),
								),
								h(
									'ul',
									{ class: 'ontario-show-for-medium ontario-hide-for-small ontario-hide-for-large' },
									(_y = this.menuItemState) === null || _y === void 0
										? void 0
										: _y
												.slice(
													(_z = this.applicationHeaderInfoState) === null || _z === void 0
														? void 0
														: _z.maxSubheaderTabletLinks,
													this.menuItemState.length,
												)
												.map((item, index) => {
													var _a;
													return this.generateNavigationLinks(
														item,
														index,
														(_a = this.applicationHeaderInfoState) === null || _a === void 0
															? void 0
															: _a.maxSubheaderTabletLinks,
														'app-tablet',
													);
												}),
								),
								h(
									'ul',
									{ class: 'ontario-show-for-small-only' },
									(_0 = this.menuItemState) === null || _0 === void 0
										? void 0
										: _0
												.slice(
													(_1 = this.applicationHeaderInfoState) === null || _1 === void 0
														? void 0
														: _1.maxSubheaderMobileLinks,
													this.menuItemState.length,
												)
												.map((item, index) => {
													var _a;
													return this.generateNavigationLinks(
														item,
														index,
														(_a = this.applicationHeaderInfoState) === null || _a === void 0
															? void 0
															: _a.maxSubheaderMobileLinks,
														'app-mobile',
													);
												}),
								),
							),
						),
					),
				),
				this.menuToggle && h('div', { class: 'ontario-hide-for-large ontario-overlay' }),
			);
		}
	}
	static get is() {
		return 'ontario-header';
	}
	static get encapsulation() {
		return 'shadow';
	}
	static get originalStyleUrls() {
		return {
			ontario: ['ontario-header.scss'],
			application: ['ontario-application-header.scss'],
			serviceOntario: ['service-ontario-header.scss'],
		};
	}
	static get styleUrls() {
		return {
			ontario: ['ontario-header.css'],
			application: ['ontario-application-header.css'],
			serviceOntario: ['service-ontario-header.css'],
		};
	}
	static get assetsDirs() {
		return ['./assets'];
	}
	static get properties() {
		return {
			type: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'OntarioHeaderType',
					resolved: '"application" | "ontario" | "serviceOntario" | undefined',
					references: {
						OntarioHeaderType: {
							location: 'import',
							path: './ontario-header.interface',
							id: 'src/components/ontario-header/ontario-header.interface.ts::OntarioHeaderType',
						},
					},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'The type of header.',
				},
				attribute: 'type',
				reflect: false,
				defaultValue: "'application'",
			},
			applicationHeaderInfo: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'ApplicationHeaderInfo | string',
					resolved: 'ApplicationHeaderInfo | string',
					references: {
						ApplicationHeaderInfo: {
							location: 'import',
							path: './ontario-header.interface',
							id: 'src/components/ontario-header/ontario-header.interface.ts::ApplicationHeaderInfo',
						},
					},
				},
				required: false,
				optional: false,
				docs: {
					tags: [
						{
							name: 'example',
							text: ' <ontario-header\n   type="application"\n   application-header-info=\'{\n     "title": "Application name",\n     "href": "/application-homepage",\n     "maxSubheaderDesktopLinks": "3",\n     "maxSubheaderTabletLinks": "2",\n     "maxSubheaderMobileLinks": "1"\n   }\'>\n </ontario-header>',
						},
					],
					text: "Information pertaining to the application header. This is only necessary for the 'application' header type.\n\nThis includes the application name, URL and optional props for the number of links in the subheader for desktop, tablet, and mobile views.",
				},
				attribute: 'application-header-info',
				reflect: false,
			},
			menuItems: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'MenuItem[] | string',
					resolved: 'MenuItem[] | string',
					references: {
						MenuItem: {
							location: 'import',
							path: './ontario-header.interface',
							id: 'src/components/ontario-header/ontario-header.interface.ts::MenuItem',
						},
					},
				},
				required: false,
				optional: false,
				docs: {
					tags: [],
					text: 'The items that will go inside the menu.',
				},
				attribute: 'menu-items',
				reflect: false,
			},
			disableDynamicMenu: {
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
					tags: [
						{
							name: 'example',
							text: '\t<ontario-header\n\t\t\ttype="ontario"\n\t\t\tdisable-dynamic-menu="false"\n\t\tmenu-items=\'[{\n\t\t\t"title": "Hint",\n\t\t\t"href": "/ontario-hint"\n\t\t\t"linkIsActive": "false"\n\t\t},{\n\t\t\t"title": "Hint",\n\t\t\t"href": "/ontario-hint"\n\t\t\t"linkIsActive": "false"\n\t\t},{\n\t\t\t"title": "Hint",\n\t\t\t"href": "/ontario-hint"\n\t\t\t"linkIsActive": "false"\n\t\t},{\n\t\t\t"title": "Hint",\n\t\t\t"href": "/ontario-hint"\n\t\t\t"linkIsActive": "false"\n\t\t}]\'>\n</ontario-header>',
						},
					],
					text: 'Option to disable fetching of the dynamic menu from the Ontario Header API',
				},
				attribute: 'disable-dynamic-menu',
				reflect: false,
				defaultValue: 'false',
			},
			languageToggleOptions: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'LanguageToggleOptions | string',
					resolved: 'LanguageToggleOptions | string | undefined',
					references: {
						LanguageToggleOptions: {
							location: 'import',
							path: './ontario-header.interface',
							id: 'src/components/ontario-header/ontario-header.interface.ts::LanguageToggleOptions',
						},
					},
				},
				required: false,
				optional: true,
				docs: {
					tags: [
						{
							name: 'example',
							text: '<ontario-header\n\tlanguage-toggle-options=\'{\n   "englishLink": "/en",\n   "frenchLink": "/fr"\n }\'\n ...\n>\n</ontario-header>',
						},
					],
					text: 'Information pertaining to the language toggle links.',
				},
				attribute: 'language-toggle-options',
				reflect: false,
			},
			customLanguageToggle: {
				type: 'unknown',
				mutable: false,
				complexType: {
					original: '(event: globalThis.Event) => void',
					resolved: '((event: Event) => void) | undefined',
					references: {
						globalThis: {
							location: 'global',
							id: 'global::globalThis',
						},
					},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'A custom function to pass to the language toggle button.',
				},
			},
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
					text: 'The language of the component.\nThis is used for translations, and is by default set through event listeners checking for a language property from the header. If none is passed, it will default to English.',
				},
				attribute: 'language',
				reflect: false,
				defaultValue: "'en'",
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
			applicationHeaderInfoState: {},
			menuItemState: {},
			isDynamicMenu: {},
			languageState: {},
			menuToggle: {},
			searchToggle: {},
			translations: {},
		};
	}
	static get elementRef() {
		return 'el';
	}
	static get watchers() {
		return [
			{
				propName: 'applicationHeaderInfo',
				methodName: 'parseApplicationHeaderInfo',
			},
			{
				propName: 'menuItems',
				methodName: 'parseMenuItems',
			},
			{
				propName: 'languageToggleOptions',
				methodName: 'parseLanguage',
			},
		];
	}
	static get listeners() {
		return [
			{
				name: 'click',
				method: 'handleClick',
				target: 'window',
				capture: true,
				passive: false,
			},
			{
				name: 'setAppLanguage',
				method: 'handleSetAppLanguage',
				target: 'window',
				capture: false,
				passive: false,
			},
		];
	}
}
//# sourceMappingURL=ontario-header.js.map
