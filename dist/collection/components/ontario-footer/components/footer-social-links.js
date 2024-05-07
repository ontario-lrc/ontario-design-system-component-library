import { h } from '@stencil/core';
const ICON_WIDTH = 32;
export const FooterSocialLinks = ({ facebook, twitter, instagram, youtube }) => {
	return h(
		'ul',
		{ class: 'ontario-footer__links-container ontario-footer__links-container--social' },
		facebook &&
			h(
				'li',
				null,
				h(
					'a',
					{ 'class': 'ontario-footer__link', 'href': facebook, 'aria-label': 'Facebook' },
					h('ontario-icon-facebook', { 'colour': 'white', 'icon-width': ICON_WIDTH }),
				),
			),
		twitter &&
			h(
				'li',
				null,
				h(
					'a',
					{ 'class': 'ontario-footer__link', 'href': twitter, 'aria-label': 'Twitter' },
					h('ontario-icon-twitter', { 'colour': 'white', 'icon-width': ICON_WIDTH }),
				),
			),
		instagram &&
			h(
				'li',
				null,
				h(
					'a',
					{ 'class': 'ontario-footer__link', 'href': instagram, 'aria-label': 'Instagram' },
					h('ontario-icon-instagram', { 'colour': 'white', 'icon-width': ICON_WIDTH }),
				),
			),
		youtube &&
			h(
				'li',
				null,
				h(
					'a',
					{ 'class': 'ontario-footer__link', 'href': youtube, 'aria-label': 'Youtube' },
					h('ontario-icon-youtube', { 'colour': 'white', 'icon-width': ICON_WIDTH }),
				),
			),
	);
};
//# sourceMappingURL=footer-social-links.js.map
