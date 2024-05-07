import { h } from '@stencil/core';
import { ConsoleMessageClass } from '../../utils/console-message/console-message';
export class OntarioCardCollection {
	constructor() {
		this.cardsPerRow = 3;
		this.cardsPerRowState = undefined;
	}
	/**
	 * Watch for changes to the `cardsPerRow` property for validation purposes.
	 *
	 * If the user input is not a number or is a negative number then `cardsPerRow` will be set to its default (3).
	 */
	validateCardsPerRow() {
		if (isNaN(this.cardsPerRow) || (!isNaN(this.cardsPerRow) && this.cardsPerRow <= 0)) {
			const message = new ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' cards-per-row ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-card> ')
				.addRegularText(
					`${
						isNaN(this.cardsPerRow) ? 'was set to a non-numeric value' : 'was set to a negative number'
					}; only a positive number is allowed. The default number of cards per row: `,
				)
				.addMonospaceText(' 3 ')
				.addRegularText('was assumed.')
				.printMessage();
			this.cardsPerRowState = 3;
		} else {
			this.cardsPerRowState = this.cardsPerRow;
		}
	}
	/**
	 * @returns the classes of the ontario cards based off the `cardType` and number of cards per row.
	 */
	getClass() {
		return `
      ontario-card-collection__container
      ontario-card-collecton--cards-per-row-${this.cardsPerRowState}
    `.trim();
	}
	componentWillLoad() {
		this.validateCardsPerRow();
	}
	render() {
		return h(
			'ul',
			{ key: '102a3c830422df29dd3ab8cf05aa660d110fe353', class: this.getClass() },
			h('slot', { key: 'e6089ac94f85b231eca6df2f3743432d807a09e4' }),
		);
	}
	static get is() {
		return 'ontario-card-collection';
	}
	static get encapsulation() {
		return 'shadow';
	}
	static get originalStyleUrls() {
		return {
			$: ['ontario-card-collection.scss'],
		};
	}
	static get styleUrls() {
		return {
			$: ['ontario-card-collection.css'],
		};
	}
	static get properties() {
		return {
			cardsPerRow: {
				type: 'number',
				mutable: false,
				complexType: {
					original: 'CardsPerRow',
					resolved: '2 | 3 | 4',
					references: {
						CardsPerRow: {
							location: 'import',
							path: './ontario-collection-card-types',
							id: 'src/components/ontario-card-collection/ontario-collection-card-types.ts::CardsPerRow',
						},
					},
				},
				required: false,
				optional: false,
				docs: {
					tags: [],
					text: 'The number of cards to display per row.\n\nIf no number is passed, it will default to 3.',
				},
				attribute: 'cards-per-row',
				reflect: false,
				defaultValue: '3',
			},
		};
	}
	static get states() {
		return {
			cardsPerRowState: {},
		};
	}
	static get elementRef() {
		return 'host';
	}
	static get watchers() {
		return [
			{
				propName: 'cardsPerRow',
				methodName: 'validateCardsPerRow',
			},
		];
	}
}
//# sourceMappingURL=ontario-card-collection.js.map
