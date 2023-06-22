import { EventEmitter } from '../../stencil-public-runtime';
import { HintExpander } from './hint-expander.interface';
import { HintContentType } from '../../utils/common/common.interface';
export declare class OntarioHintExpander implements HintExpander {
	host: HTMLElement;
	/**
	 * The content type of the hint.
	 * If no prop is passed, it will default to a string.
	 * If the hint requires multiple lines or HTML, the `hintContentType` prop should be set to `html`.
	 */
	hintContentType?: HintContentType;
	/**
	 * Text to display as the hint expander question/statement
	 */
	hint: string;
	/**
	 * Content to display as the hint, once the expander is toggled open.
	 * Please note that any content that is passed into this prop will only be displayed as a string.
	 * If you would like to add HTML content, supply child content to the component.
	 *
	 * @example
	 * <ontario-hint-expander hint="This is the hint"
	 *   <img src="https://www.jquery-az.com/html/images/banana.jpg" title="Title of image" alt="alt text here"/>
	 *   <p> Here is the content beside the image </p>
	 * </ontario-hint-expander>
	 */
	content: string;
	/**
	 * Used to used to establish a relationship between hint text content and elements using aria-describedby. This is optional - if no ID is passed, one will be generated.
	 */
	elementId?: string;
	hintState: string;
	/**
	 * Emitted when a keyboard input or mouse event occurs.
	 */
	toggleExpanderEvent: EventEmitter<any>;
	/**
	 * Watch for changes to the `hintContentType` prop for validation purposes.
	 * If none is provided, or the wrong type is provided, it will default to `string`.
	 */
	private checkHintContentType;
	private updateHintContent;
	validateContent(newValue: string): void;
	private onClick;
	validateHint(newValue: string): void;
	/**
	 * Set `hint` using internal component logic
	 */
	componentWillLoad(): void;
	/**
	 * This helper is used to help load translations for any slots + text content passed in by the user.
	 */
	componentDidLoad(): void;
	getId(): string;
	render(): any;
}
