import { Blockquote } from './blockquote.interface';
export declare class OntarioBlockquote implements Blockquote {
	host: HTMLElement;
	/**
	 * Text to be displayed as the quote.
	 *
	 * Note that wrapping the quotes in quotations is not needed - this is handled through the component styles
	 */
	quote: string;
	/**
	 * Optional text to be displayed as the attribution (the author) of the quote.
	 */
	attribution?: string;
	/**
	 * Optional text to be displayed for additional information about the attribution/author.
	 */
	byline?: string;
	shortQuoteLength: number;
	shortQuote: boolean;
	private quoteState;
	validateQuote(): void;
	/**
	 * Print the missing `quote` prop warning message
	 */
	validateQuoteContent(newValue: string): void;
	componentWillLoad(): void;
	/**
	 * This helper is used to help load translations for any slots + text content passed in by the user.
	 */
	componentDidLoad(): void;
	render(): any;
}
