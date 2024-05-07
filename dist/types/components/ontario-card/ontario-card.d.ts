import { CardType, HeaderType, HorizontalImagePositionType, HorizontalImageSizeType } from './ontario-card-types';
export declare class OntarioCard {
	host: HTMLElement;
	/**
	 * Text to be displayed within the header.
	 *
	 * @example
	 *	<ontario-card
	 *		header-type="dark"
	 *		card-type="horizontal"
	 *		label="Card Title 1"
	 *		description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
	 *	>
	 */
	label: string;
	/**
	 * Image to be displayed within the card image container.
	 *
	 * This is optional.
	 */
	image?: string;
	/**
	 * Text to be displayed within the card description container.
	 *
	 * This is optional.
	 */
	description?: string;
	/**
	 * Action link for when the card is clicked.
	 *
	 * This is optional.
	 */
	cardLink?: string;
	/**
	 * The type of card to render.
	 *
	 * If no type is passed, it will default to 'basic'.
	 *
	 */
	cardType: CardType;
	/**
	 * The type of header to render.
	 *
	 * If no type is passed, it will default to 'default'.
	 */
	headerType: HeaderType;
	/**
	 * The position of the image when the card-type is set to 'horizontal'.
	 *
	 * This prop is only necessry when the card-type is set to 'horizontal'.
	 *
	 * @example
	 * 	<ontario-card
	 *		card-type="horizontal"
	 *		label="Card Title 1"
	 *		image="https://picsum.photos/200/300"
	 *		horizontal-image-position-type="left"
	 *		horizontal-image-size-type="one-fourth"
	 *	  description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
	 *	>
	 *	</ontario-card>
	 */
	horizontalImagePositionType?: HorizontalImagePositionType;
	/**
	 * The size of the image when the card-type is set to 'horizontal'.
	 *
	 * This prop is only necessry when the card-type is set to 'horizontal'.
	 *
	 * @example
	 * 	<ontario-card
	 *		card-type="horizontal"
	 *		label="Card Title 1"
	 *		image="https://picsum.photos/200/300"
	 *		horizontal-image-position-type="left"
	 *		horizontal-image-size-type="one-fourth"
	 *	  description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
	 *	>
	 *	</ontario-card>
	 */
	horizontalImageSizeType?: HorizontalImageSizeType;
	/**
	 * Provides more context as to what the card interaction is doing. This should only be used for accessibility purposes, if the card interaction requires more * * description than what the text provides.
	 *
	 * This is optional.
	 *
	 */
	ariaLabelText?: string;
	/**
	 * Mutable variable, for internal use only.
	 * Set the card's type depending on validation result.
	 */
	private cardTypeState;
	/**
	 * Mutable variable, for internal use only.
	 * Set the card's header type depending on validation result.
	 */
	private headerTypeState;
	/**
	 * Watch for changes to the `cardType` property for validation purposes.
	 *
	 * If the user input doesn't match one of the array values then `cardType` will be set to its default (`basic`).
	 * If a match is found in one of the array values then `cardType` will be set to the matching array key value.
	 */
	validateCardType(): void;
	/**
	 * Watch for changes to the `headerType` property for validation purposes.
	 *
	 * If the user input doesn't match one of the array values then `headerType` will be set to its default (`default`).
	 * If a match is found in one of the array values then `headerType` will be set to the matching array key value.
	 */
	validateHeaderType(): void;
	/**
	 * Print the invalid `cardType` prop warning message.
	 * @returns default type (basic).
	 */
	private warnDefaultCardType;
	/**
	 * Print the invalid `headerType` prop warning message.
	 * @returns default type (default).
	 */
	private warnDefaultHeaderType;
	/**
	 * @returns the classes of the ontario cards based off the `cardType` and `headerType`.
	 */
	private getClass;
	private getHref;
	componentWillLoad(): void;
	render(): any;
}
