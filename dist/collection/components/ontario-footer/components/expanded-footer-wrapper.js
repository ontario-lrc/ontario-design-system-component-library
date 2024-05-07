import { h } from '@stencil/core';
import { SimpleFooter } from './simple-footer';
export const ExpandedFooterWrapper = (props, children) => {
	const { topMargin, footerLinks, backgroundImagePath } = props;
	const style = { '--imagePath': backgroundImagePath };
	const marginClass = !topMargin ? 'ontario-margin-top-0-!' : '';
	return h(
		'footer',
		{ class: `ontario-footer ontario-footer--expanded ${marginClass}`, style: style },
		h('div', { class: 'ontario-footer__expanded-top-section' }, h('div', { class: 'ontario-row' }, children)),
		h(SimpleFooter, Object.assign({}, footerLinks, { className: 'ontario-footer__expanded-bottom-section' })),
	);
};
//# sourceMappingURL=expanded-footer-wrapper.js.map
