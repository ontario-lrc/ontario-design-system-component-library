import { h, getAssetPath } from '@stencil/core';
import { SimpleFooter } from './simple-footer';
export const ExpandedFooterWrapper = (props, children) => {
	const { topMargin, footerLinks } = props;
	const style = { '--imagePath': `url(${getAssetPath('./assets/footer-expanded-supergraphic-logo.svg')})` };
	const marginClass = !topMargin ? 'ontario-margin-top-0-!' : '';
	return h(
		'footer',
		{ class: `ontario-footer ontario-footer--expanded ${marginClass}`, style: style },
		h('div', { class: 'ontario-footer__expanded-top-section' }, h('div', { class: 'ontario-row' }, children)),
		h(SimpleFooter, Object.assign({}, footerLinks, { className: 'ontario-footer__expanded-bottom-section' })),
	);
};
