import { HeadingContentTypes } from '../../utils/components/callout-aside/callout-aside.interface';
import {
	isValidHighlightColour,
	generateCalloutAside,
	isValidHeadingLevel,
} from '../../utils/components/callout-aside/callout-aside-helpers';
import { validateValueAgainstArray } from '../../utils/validation/validation-functions';
import { ConsoleMessageClass } from '../../utils/console-message/console-message';
export class OntarioAside {
	constructor() {
		this.headingType = undefined;
		this.headingContentType = undefined;
		this.headingContent = undefined;
		this.content = undefined;
		this.highlightColour = 'teal';
	}
	/**
	 * Watch for changes to the `headingType` prop.
	 *
	 * This is for validation purposes to make sure the `headingType` matches one of the `HeadingLevelOptions`.
	 */
	validateHeadingType() {
		if (isValidHeadingLevel(this.headingType)) return this.headingType;
		const message = new ConsoleMessageClass();
		return message
			.addDesignSystemTag()
			.addMonospaceText(` headingType ${this.headingType} `)
			.addRegularText('for')
			.addMonospaceText(' <ontario-aside> ')
			.addRegularText('is not a valid type. Please ensure your heading type matches one of the headingType types.')
			.printMessage();
	}
	/**
	 * Watch for changes in the `headingContentType` prop for validation purposes.
	 *
	 * If the user input doesn't match one of the array values then `headingContentType` will be set to its default (`string`).
	 * If a match is found in one of the array values then `headingContentType` will be set to the matching array key value.
	 */
	validateHeadingContentType() {
		const isValid = validateValueAgainstArray(this.headingContentType, HeadingContentTypes);
		if (isValid) {
			return this.headingContentType;
		} else {
			return this.warnDefaultType();
		}
	}
	/**
	 * Watch for changes in the `headingContent` prop for validation purposes.
	 *
	 * If no `headingContent` value is provided, a warning message will be printed.
	 */
	validateHeadingContent() {
		if (!this.headingContent) {
			const message = new ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' headingContent ')
				.addRegularText('for')
				.addMonospaceText(' <ontario-aside> ')
				.addRegularText('was not provided.')
				.printMessage();
		}
	}
	/**
	 * Watch for changes to the `highlightColour` prop.
	 *
	 * If no `highlightColour` is passed, or if the `highlightColour` does not match the `highlightColour` options, a default value of 'teal' will be applied.
	 */
	validateHighlightColour() {
		if (this.highlightColour) {
			if (isValidHighlightColour(this.highlightColour)) return this.highlightColour;
			else {
				const message = new ConsoleMessageClass();
				message
					.addDesignSystemTag()
					.addMonospaceText(` highlightColour ${this.highlightColour} `)
					.addRegularText('for')
					.addMonospaceText(' <ontario-aside> ')
					.addRegularText(
						'does not match one of the valid highlightColour types. A default colour of `teal` will be applied.',
					)
					.printMessage();
			}
		}
		// if no highlight colour is passed, return 'teal'
		return 'teal';
	}
	/**
	 * Print the invalid `type` warning message.
	 * @returns default type ('string')
	 */
	warnDefaultType() {
		const message = new ConsoleMessageClass();
		message
			.addDesignSystemTag()
			.addMonospaceText(' headingContentType ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-aside> ')
			.addRegularText('was set to an invalid type; only')
			.addMonospaceText(' string or html ')
			.addRegularText('are supported. The default type')
			.addMonospaceText(' string ')
			.addRegularText('is assumed.')
			.printMessage();
		return (this.headingContentType = 'string');
	}
	componentWillLoad() {
		this.validateHighlightColour();
		this.validateHeadingContent();
		this.validateHeadingType();
		this.validateHeadingContentType();
	}
	render() {
		return generateCalloutAside(
			'aside',
			this.headingType,
			this.headingContentType,
			this.headingContent,
			this.content,
			this.highlightColour,
		);
	}
	static get is() {
		return 'ontario-aside';
	}
	static get encapsulation() {
		return 'shadow';
	}
	static get originalStyleUrls() {
		return {
			$: ['ontario-aside.scss'],
		};
	}
	static get styleUrls() {
		return {
			$: ['ontario-aside.css'],
		};
	}
	static get properties() {
		return {
			headingType: {
				type: 'string',
				mutable: true,
				complexType: {
					original: 'HeadingLevelOptions',
					resolved: '"h2" | "h3" | "h4" | "h5" | "h6"',
					references: {
						HeadingLevelOptions: {
							location: 'import',
							path: '../../utils/components/callout-aside/callout-aside.interface',
						},
					},
				},
				required: false,
				optional: false,
				docs: {
					tags: [],
					text: 'The heading level of the aside heading.',
				},
				attribute: 'heading-type',
				reflect: false,
			},
			headingContentType: {
				type: 'string',
				mutable: true,
				complexType: {
					original: 'HeadingContentType',
					resolved: '"html" | "string"',
					references: {
						HeadingContentType: {
							location: 'import',
							path: '../../utils/components/callout-aside/callout-aside.interface',
						},
					},
				},
				required: false,
				optional: false,
				docs: {
					tags: [],
					text: 'The type of the heading content. If no prop is passed, it will default to string.',
				},
				attribute: 'heading-content-type',
				reflect: false,
			},
			headingContent: {
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
					text: 'Text or HTML to be displayed as the heading of the aside. If the heading content should be displayed as HTML, the `headingContentType` needs to be set to `html`.',
				},
				attribute: 'heading-content',
				reflect: false,
			},
			content: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'string',
					resolved: 'string | undefined',
					references: {},
				},
				required: false,
				optional: true,
				docs: {
					tags: [
						{
							name: 'example',
							text: "<ontario-aside headingType='h3' headingContent='This is the aside heading'><p>This is the first sentence of the aside content.</p><p>This is the second sentence of the aside content.</p></ontario-aside>",
						},
					],
					text: 'Optional text to be displayed as the content for the aside component. If a string is passed, it will automatically be nested in a paragraph tag.\n\nHTML content can also be passed as the child/children of the aside component if additional/different elements for the content are needed.',
				},
				attribute: 'content',
				reflect: false,
			},
			highlightColour: {
				type: 'string',
				mutable: true,
				complexType: {
					original: 'HighlightColourOptions',
					resolved: '"blue" | "gold" | "green" | "lime" | "purple" | "sky" | "taupe" | "teal" | "yellow" | undefined',
					references: {
						HighlightColourOptions: {
							location: 'import',
							path: '../../utils/components/callout-aside/callout-aside.interface',
						},
					},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'Optional prop to choose the border colour of the aside. If none is passed, the default colour will be teal.',
				},
				attribute: 'highlight-colour',
				reflect: false,
				defaultValue: "'teal'",
			},
		};
	}
	static get watchers() {
		return [
			{
				propName: 'headingType',
				methodName: 'validateHeadingType',
			},
			{
				propName: 'headingContentType',
				methodName: 'validateHeadingContentType',
			},
			{
				propName: 'headingContent',
				methodName: 'validateHeadingContent',
			},
			{
				propName: 'highlightColour',
				methodName: 'validateHighlightColour',
			},
		];
	}
}
