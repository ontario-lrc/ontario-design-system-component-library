import {
	CalloutAside,
	HeadingLevelOptions,
	HeadingContentType,
	HighlightColourOptions,
} from '../../utils/components/callout-aside/callout-aside.interface';
export declare class OntarioAside implements CalloutAside {
	/**
	 * The heading level of the aside heading.
	 */
	headingType: HeadingLevelOptions;
	/**
	 * The type of the heading content. If no prop is passed, it will default to string.
	 */
	headingContentType: HeadingContentType;
	/**
	 * Text or HTML to be displayed as the heading of the aside. If the heading content should be displayed as HTML, the `headingContentType` needs to be set to `html`.
	 */
	headingContent: string;
	/**
	 * Optional text to be displayed as the content for the aside component. If a string is passed, it will automatically be nested in a paragraph tag.
	 *
	 * HTML content can also be passed as the child/children of the aside component if additional/different elements for the content are needed.
	 *
	 * @example
	 * <ontario-aside headingType='h3' headingContent='This is the aside heading'><p>This is the first sentence of the aside content.</p><p>This is the second sentence of the aside content.</p></ontario-aside>
	 */
	content?: string;
	/**
	 * Optional prop to choose the border colour of the aside. If none is passed, the default colour will be teal.
	 */
	highlightColour?: HighlightColourOptions;
	/**
	 * Watch for changes to the `headingType` prop.
	 *
	 * This is for validation purposes to make sure the `headingType` matches one of the `HeadingLevelOptions`.
	 */
	validateHeadingType(): void | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	/**
	 * Watch for changes in the `headingContentType` prop for validation purposes.
	 *
	 * If the user input doesn't match one of the array values then `headingContentType` will be set to its default (`string`).
	 * If a match is found in one of the array values then `headingContentType` will be set to the matching array key value.
	 */
	validateHeadingContentType(): string;
	/**
	 * Watch for changes in the `headingContent` prop for validation purposes.
	 *
	 * If no `headingContent` value is provided, a warning message will be printed.
	 */
	validateHeadingContent(): void;
	/**
	 * Watch for changes to the `highlightColour` prop.
	 *
	 * If no `highlightColour` is passed, or if the `highlightColour` does not match the `highlightColour` options, a default value of 'teal' will be applied.
	 */
	validateHighlightColour(): 'teal' | 'gold' | 'yellow' | 'taupe' | 'green' | 'lime' | 'sky' | 'blue' | 'purple';
	/**
	 * Print the invalid `type` warning message.
	 * @returns default type ('string')
	 */
	private warnDefaultType;
	componentWillLoad(): void;
	render(): any;
}
