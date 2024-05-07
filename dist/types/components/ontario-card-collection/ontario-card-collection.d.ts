import { CardsPerRow } from './ontario-collection-card-types';
export declare class OntarioCardCollection {
	host: HTMLElement;
	/**
	 * The number of cards to display per row.
	 *
	 * If no number is passed, it will default to 3.
	 */
	cardsPerRow: CardsPerRow;
	/**
	 * Mutable variable, for internal use only.
	 *
	 * Set number of cards per row depending on validation result.
	 */
	private cardsPerRowState;
	/**
	 * Watch for changes to the `cardsPerRow` property for validation purposes.
	 *
	 * If the user input is not a number or is a negative number then `cardsPerRow` will be set to its default (3).
	 */
	validateCardsPerRow(): void;
	/**
	 * @returns the classes of the ontario cards based off the `cardType` and number of cards per row.
	 */
	private getClass;
	componentWillLoad(): void;
	render(): any;
}
