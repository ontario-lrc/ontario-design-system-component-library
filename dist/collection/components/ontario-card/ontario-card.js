import { h } from '@stencil/core';
import { CardTypes, HeaderTypes } from './ontario-card-types';
import { validateValueAgainstArray } from '../../utils/validation/validation-functions';
import { ConsoleMessageClass } from '../../utils/console-message/console-message';
export class OntarioCard {
	constructor() {
		this.label = undefined;
		this.image = undefined;
		this.description = undefined;
		this.cardLink = undefined;
		this.cardType = 'basic';
		this.headerType = 'default';
		this.horizontalImagePositionType = 'left';
		this.horizontalImageSizeType = 'one-third';
		this.ariaLabelText = undefined;
		this.cardTypeState = undefined;
		this.headerTypeState = undefined;
	}
	/**
	 * Watch for changes to the `cardType` property for validation purposes.
	 *
	 * If the user input doesn't match one of the array values then `cardType` will be set to its default (`basic`).
	 * If a match is found in one of the array values then `cardType` will be set to the matching array key value.
	 */
	validateCardType() {
		const isValid = validateValueAgainstArray(this.cardType, CardTypes);
		if (isValid) {
			this.cardTypeState = this.cardType;
		} else {
			this.cardTypeState = this.warnDefaultCardType();
		}
	}
	/**
	 * Watch for changes to the `headerType` property for validation purposes.
	 *
	 * If the user input doesn't match one of the array values then `headerType` will be set to its default (`default`).
	 * If a match is found in one of the array values then `headerType` will be set to the matching array key value.
	 */
	validateHeaderType() {
		const isValid = validateValueAgainstArray(this.headerType, HeaderTypes);
		if (isValid) {
			this.headerTypeState = this.headerType;
		} else {
			this.headerTypeState = this.warnDefaultHeaderType();
		}
	}
	/**
	 * Print the invalid `cardType` prop warning message.
	 * @returns default type (basic).
	 */
	warnDefaultCardType() {
		const message = new ConsoleMessageClass();
		message
			.addDesignSystemTag()
			.addMonospaceText(' card-type ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-card> ')
			.addRegularText('was set to an invalid type; only')
			.addMonospaceText(' basic, image, label, horizontal ')
			.addRegularText('are supported. The default type')
			.addMonospaceText(' basic ')
			.addRegularText('is assumed.')
			.printMessage();
		return 'basic';
	}
	/**
	 * Print the invalid `headerType` prop warning message.
	 * @returns default type (default).
	 */
	warnDefaultHeaderType() {
		const message = new ConsoleMessageClass();
		message
			.addDesignSystemTag()
			.addMonospaceText(' header-type ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-card> ')
			.addRegularText('was set to an invalid type; only')
			.addMonospaceText(' default, light, dark')
			.addRegularText('are supported. The default type')
			.addMonospaceText(' default ')
			.addRegularText('is assumed.')
			.printMessage();
		return 'default';
	}
	/**
	 * @returns the classes of the ontario cards based off the `cardType` and `headerType`.
	 */
	getClass() {
		if (this.cardTypeState === 'horizontal') {
			return `ontario-card ontario-card__card-type--horizontal ontario-card__image-${this.horizontalImagePositionType} ontario-card__image-size-${this.horizontalImageSizeType}`;
		} else {
			// Return other classes when cardTypeState is not 'horizontal'
			return `ontario-card ontario-card__header-type--${this.headerTypeState} ontario-card__card-type--${this.cardTypeState}`;
		}
	}
	getHref() {
		return this.cardLink ? this.cardLink : '#';
	}
	componentWillLoad() {
		this.validateCardType();
		this.validateHeaderType();
	}
	render() {
		return h(
			'li',
			{ key: '43864d4b172f51caf49428ec366874c4e793f8a9', class: this.getClass() },
			this.image &&
				h(
					'div',
					{ class: 'ontario-card__image-container' },
					h(
						'a',
						{ 'href': this.getHref(), 'aria-label': this.ariaLabelText },
						h('img', { class: 'ontario-card__image', src: this.image }),
					),
				),
			h(
				'div',
				{
					key: 'eb343e41b3c8980b5c6f746f5ec97be768def9db',
					class: `ontario-card__text-container ${this.image ? 'ontario-card--image-true' : ''}`,
				},
				h(
					'h2',
					{ key: '784052b4a3631039d99850589da0b023e4458a33', class: 'ontario-card__heading' },
					h(
						'a',
						{
							'key': '7a02e9452244a8e1e76637b5c74872d5af29706c',
							'href': this.getHref(),
							'aria-label': this.ariaLabelText,
						},
						this.label,
					),
				),
				this.description && h('div', { class: 'ontario-card__description' }, h('p', null, this.description)),
			),
		);
	}
	static get is() {
		return 'ontario-card';
	}
	static get encapsulation() {
		return 'shadow';
	}
	static get originalStyleUrls() {
		return {
			$: ['ontario-card.scss'],
		};
	}
	static get styleUrls() {
		return {
			$: ['ontario-card.css'],
		};
	}
	static get properties() {
		return {
			label: {
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
					tags: [
						{
							name: 'example',
							text: '<ontario-card\n\theader-type="dark"\n\tcard-type="horizontal"\n\tlabel="Card Title 1"\n\tdescription="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"\n>',
						},
					],
					text: 'Text to be displayed within the header.',
				},
				attribute: 'label',
				reflect: false,
			},
			image: {
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
					tags: [],
					text: 'Image to be displayed within the card image container.\n\nThis is optional.',
				},
				attribute: 'image',
				reflect: false,
			},
			description: {
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
					tags: [],
					text: 'Text to be displayed within the card description container.\n\nThis is optional.',
				},
				attribute: 'description',
				reflect: false,
			},
			cardLink: {
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
					tags: [],
					text: 'Action link for when the card is clicked.\n\nThis is optional.',
				},
				attribute: 'card-link',
				reflect: false,
			},
			cardType: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'CardType',
					resolved: '"basic" | "horizontal" | "image" | "title"',
					references: {
						CardType: {
							location: 'import',
							path: './ontario-card-types',
							id: 'src/components/ontario-card/ontario-card-types.tsx::CardType',
						},
					},
				},
				required: false,
				optional: false,
				docs: {
					tags: [],
					text: "The type of card to render.\n\nIf no type is passed, it will default to 'basic'.",
				},
				attribute: 'card-type',
				reflect: false,
				defaultValue: "'basic'",
			},
			headerType: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'HeaderType',
					resolved: '"dark" | "default" | "light"',
					references: {
						HeaderType: {
							location: 'import',
							path: './ontario-card-types',
							id: 'src/components/ontario-card/ontario-card-types.tsx::HeaderType',
						},
					},
				},
				required: false,
				optional: false,
				docs: {
					tags: [],
					text: "The type of header to render.\n\nIf no type is passed, it will default to 'default'.",
				},
				attribute: 'header-type',
				reflect: false,
				defaultValue: "'default'",
			},
			horizontalImagePositionType: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'HorizontalImagePositionType',
					resolved: '"left" | "right" | undefined',
					references: {
						HorizontalImagePositionType: {
							location: 'import',
							path: './ontario-card-types',
							id: 'src/components/ontario-card/ontario-card-types.tsx::HorizontalImagePositionType',
						},
					},
				},
				required: false,
				optional: true,
				docs: {
					tags: [
						{
							name: 'example',
							text: '\t<ontario-card\n\tcard-type="horizontal"\n\tlabel="Card Title 1"\n\timage="https://picsum.photos/200/300"\n\thorizontal-image-position-type="left"\n\thorizontal-image-size-type="one-fourth"\n  description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"\n>\n</ontario-card>',
						},
					],
					text: "The position of the image when the card-type is set to 'horizontal'.\n\nThis prop is only necessry when the card-type is set to 'horizontal'.",
				},
				attribute: 'horizontal-image-position-type',
				reflect: false,
				defaultValue: "'left'",
			},
			horizontalImageSizeType: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'HorizontalImageSizeType',
					resolved: '"one-fourth" | "one-third" | undefined',
					references: {
						HorizontalImageSizeType: {
							location: 'import',
							path: './ontario-card-types',
							id: 'src/components/ontario-card/ontario-card-types.tsx::HorizontalImageSizeType',
						},
					},
				},
				required: false,
				optional: true,
				docs: {
					tags: [
						{
							name: 'example',
							text: '\t<ontario-card\n\tcard-type="horizontal"\n\tlabel="Card Title 1"\n\timage="https://picsum.photos/200/300"\n\thorizontal-image-position-type="left"\n\thorizontal-image-size-type="one-fourth"\n  description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"\n>\n</ontario-card>',
						},
					],
					text: "The size of the image when the card-type is set to 'horizontal'.\n\nThis prop is only necessry when the card-type is set to 'horizontal'.",
				},
				attribute: 'horizontal-image-size-type',
				reflect: false,
				defaultValue: "'one-third'",
			},
			ariaLabelText: {
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
					tags: [],
					text: 'Provides more context as to what the card interaction is doing. This should only be used for accessibility purposes, if the card interaction requires more * * description than what the text provides.\n\nThis is optional.',
				},
				attribute: 'aria-label-text',
				reflect: false,
			},
		};
	}
	static get states() {
		return {
			cardTypeState: {},
			headerTypeState: {},
		};
	}
	static get elementRef() {
		return 'host';
	}
	static get watchers() {
		return [
			{
				propName: 'cardType',
				methodName: 'validateCardType',
			},
			{
				propName: 'headerType',
				methodName: 'validateHeaderType',
			},
		];
	}
}
//# sourceMappingURL=ontario-card.js.map
