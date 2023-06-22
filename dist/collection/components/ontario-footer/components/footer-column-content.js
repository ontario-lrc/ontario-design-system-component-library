import { h, Fragment } from '@stencil/core';
export const ColumnContent = ({ content }) => {
	const { heading, headingLevel: Heading = 'h3', text, html, list, type = 'text' } = content;
	return h(
		Fragment,
		null,
		heading && h(Heading, { class: 'ontario-h5' }, heading),
		type === 'text' && h('p', null, text),
		type === 'html' && h('div', { class: 'ontario-footer__paragraph', innerHTML: html }),
		type === 'list' &&
			!!(list === null || list === void 0 ? void 0 : list.length) &&
			h(
				'ul',
				null,
				list.map((item) => h('li', { class: 'ontario-footer__list_item', innerHTML: item })),
			),
	);
};
