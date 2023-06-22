import { Hint, HintContentType } from '../../utils/common/common.interface';
export declare class OntarioHintText implements Hint {
	host: HTMLElement;
	/**
	 * The content type of the hint.
	 * If no prop is passed, it will default to a string.
	 * If the hint requires multiple lines or HTML, the `hintContentType` prop should be set to `html`.
	 */
	hintContentType?: HintContentType;
	/**
	 * Text to display as the hint text statement.
	 *
	 * Setting the hint can be done using the host element textContent or through setting this property.  This property will take precedence.
	 *
	 * @example
	 * <ontario-hint-text hint="Override Hint Text">Hint Text</ontario-button>
	 *
	 * The resulting hint text will display `"Override Hint Text"`.
	 */
	hint: string;
	elementId?: string;
	hintState: string;
	/**
	 * Watch for changes to the `hintContentType` prop for validation purposes.
	 * If none is provided, or the wrong type is provided, it will default to `string`.
	 */
	private checkHintContentType;
	private updateHintContent;
	validateHintContent(newValue: string): void;
	getId(): string;
	/**
	 * This method returns the ontario-hint-text id. It is used to make sure the hint text and `aria-describedby` value of other form components match when the internal hint text props are used.
	 *
	 * @returns Promise<string | undefined>
	 */
	getHintTextId(): Promise<string | undefined>;
	/**
	 * Set `hint` using internal component logic
	 */
	componentWillLoad(): void;
	/**
	 * This helper is used to help load translations for any slots + text content passed in by the user.
	 */
	componentDidLoad(): void;
	render(): any;
}
