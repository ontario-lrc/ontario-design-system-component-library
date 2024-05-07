import { h } from '@stencil/core/internal/client';

const HeadingLevel = ['h2', 'h3', 'h4', 'h5', 'h6'];
const HighlightColours = ['teal', 'gold', 'yellow', 'taupe', 'green', 'lime', 'sky', 'blue', 'purple'];
const HeadingContentTypes = ['string', 'html'];

const isValidHighlightColour = (colour) => HighlightColours.includes(colour);
const isValidHeadingLevel = (level) => HeadingLevel.includes(level);
const generateClasses = (type, highlightColor) => {
	const componentType = type === 'callout' ? `ontario-callout` : `ontario-aside`;
	const borderColor = `ontario-border-highlight--${highlightColor}`;
	return highlightColor ? `${componentType} ${borderColor}` : `${componentType}`;
};
const generateHeading = (type, headingType, headingContentType, headingContent) => {
	const headingContentIsHTML = headingContentType === 'html';
	switch (headingType) {
		case 'h2':
			return headingContentIsHTML
				? h('h2', { class: `ontario-${type}__title ontario-h5`, innerHTML: headingContent })
				: h('h2', { class: `ontario-${type}__title ontario-h5` }, headingContent);
		case 'h3':
			return headingContentIsHTML
				? h('h3', { class: `ontario-${type}__title ontario-h5`, innerHTML: headingContent })
				: h('h3', { class: `ontario-${type}__title ontario-h5` }, headingContent);
		case 'h4':
			return headingContentIsHTML
				? h('h4', { class: `ontario-${type}__title ontario-h5`, innerHTML: headingContent })
				: h('h4', { class: `ontario-${type}__title ontario-h5` }, headingContent);
		case 'h5':
			return headingContentIsHTML
				? h('h5', { class: `ontario-${type}__title ontario-h5`, innerHTML: headingContent })
				: h('h5', { class: `ontario-${type}__title ontario-h5` }, headingContent);
		case 'h6':
			return headingContentIsHTML
				? h('h6', { class: `ontario-${type}__title ontario-h5`, innerHTML: headingContent })
				: h('h6', { class: `ontario-${type}__title ontario-h5` }, headingContent);
		default:
			return headingContentIsHTML
				? h('h2', { class: `ontario-${type}__title ontario-h5`, innerHTML: headingContent })
				: h('h2', { class: `ontario-${type}__title ontario-h5` }, headingContent);
	}
};
const generateCalloutAside = (type, headingType, headingContentType, headingContent, content, highlightColour) => {
	const contentIsString = typeof content === 'string';
	return type === 'callout'
		? h(
				'div',
				{ class: generateClasses(type, highlightColour) },
				generateHeading(type, headingType, headingContentType, headingContent),
				contentIsString ? h('p', null, content) : h('slot', null),
		  )
		: h(
				'aside',
				{ class: generateClasses(type, highlightColour) },
				generateHeading(type, headingType, headingContentType, headingContent),
				contentIsString ? h('p', null, content) : h('slot', null),
		  );
};

export { HeadingContentTypes as H, isValidHighlightColour as a, generateCalloutAside as g, isValidHeadingLevel as i };

//# sourceMappingURL=callout-aside-helpers.js.map
