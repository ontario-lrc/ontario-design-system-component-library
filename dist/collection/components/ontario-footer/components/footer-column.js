import { h } from '@stencil/core';
import { ColumnContent } from './footer-column-content';
import { FooterSocialLinks } from './footer-social-links';
export const FooterColumn = ({ data, socialLinks, isThreeColLayout = false, isFullWidthInMediumLayout = false }) => {
	const { title, content, button, headingLevel: Heading = 'h2' } = data;
	const threeColumnLayoutClasses = isThreeColLayout ? 'ontario-large-4 ontario-expanded-footer__one-third-block' : '';
	const mediumLayoutClasses = isFullWidthInMediumLayout ? 'ontario-medium-12' : 'ontario-medium-6';
	return h(
		'div',
		{ class: `ontario-columns ontario-small-12 ${mediumLayoutClasses} ${threeColumnLayoutClasses}` },
		h(Heading, { class: 'ontario-h4' }, title),
		content.map((item) => h(ColumnContent, { content: item })),
		button &&
			h(
				'a',
				{ class: 'ontario-footer__button ontario-button ontario-margin-bottom-0-!', href: button.link },
				button.text,
			),
		socialLinks && h(FooterSocialLinks, Object.assign({}, socialLinks)),
	);
};
//# sourceMappingURL=footer-column.js.map
