import {
	CalloutAsideType,
	HeadingLevelOptions,
	HeadingContentType,
	HighlightColourOptions,
} from './callout-aside.interface';
export declare const isValidHighlightColour: (
	colour: HighlightColourOptions,
) => colour is 'teal' | 'gold' | 'yellow' | 'taupe' | 'green' | 'lime' | 'sky' | 'blue' | 'purple';
export declare const isValidHeadingLevel: (level: HeadingLevelOptions) => level is 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export declare const generateCalloutAside: (
	type: CalloutAsideType,
	headingType: HeadingLevelOptions,
	headingContentType: HeadingContentType,
	headingContent: string,
	content?: string | HTMLElement,
	highlightColour?: HighlightColourOptions,
) => any;
