import { h } from '@stencil/core';
const enDash = '\u2013';
export const SimpleFooter = ({ accessibilityLink, privacyLink, contactLink, printerLink, className }) => {
	return h(
		'div',
		{ class: `ontario-row ${className !== null && className !== void 0 ? className : ''}` },
		h(
			'div',
			{ class: 'ontario-columns ontario-small-12' },
			h(
				'ul',
				{ class: 'ontario-footer__links-container ontario-footer__links-container--inline' },
				h('li', null, h('a', { class: 'ontario-footer__link', href: accessibilityLink.href }, accessibilityLink.text)),
				h('li', null, h('a', { class: 'ontario-footer__link', href: privacyLink.href }, privacyLink.text)),
				contactLink &&
					h(
						'li',
						null,
						h(
							'a',
							{
								class: 'ontario-footer__link',
								href: contactLink === null || contactLink === void 0 ? void 0 : contactLink.href,
							},
							contactLink === null || contactLink === void 0 ? void 0 : contactLink.text,
						),
					),
			),
			h(
				'div',
				{ class: 'ontario-footer__copyright' },
				h(
					'a',
					{
						class: 'ontario-footer__link',
						href: printerLink === null || printerLink === void 0 ? void 0 : printerLink.href,
					},
					'\u00A9 ',
					printerLink === null || printerLink === void 0 ? void 0 : printerLink.text,
					' ',
					h('span', { class: 'ontario-nbsp' }, '2012', enDash, String(new Date().getFullYear()).slice(-2)),
				),
			),
		),
	);
};
//# sourceMappingURL=simple-footer.js.map
