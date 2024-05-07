import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { C as ConsoleMessageClass } from './console-message.js';

const ontarioCardCollectionCss =
	'.ontario-card-collection__container{display:flex;flex-wrap:wrap}.ontario-card-collecton--cards-per-row-4 ::slotted(ontario-card){width:calc(25% - 2rem)}.ontario-card-collecton--cards-per-row-4 ::slotted(ontario-card):nth-child(4n){margin-right:0}@media screen and (max-width: 73em){.ontario-card-collecton--cards-per-row-4 ::slotted(ontario-card){width:calc(50% - 1.25rem)}.ontario-card-collecton--cards-per-row-4 ::slotted(ontario-card):nth-child(2n){margin-right:0}}.ontario-card-collecton--cards-per-row-3 ::slotted(ontario-card){width:calc(33.3% - 1.75rem)}.ontario-card-collecton--cards-per-row-3 ::slotted(ontario-card):nth-child(3n){margin-right:0}.ontario-card-collecton--cards-per-row-2 ::slotted(ontario-card){width:calc(50% - 1.25rem)}.ontario-card-collecton--cards-per-row-2 ::slotted(ontario-card):nth-child(2n){margin-right:0}';
const OntarioCardCollectionStyle0 = ontarioCardCollectionCss;

const OntarioCardCollection$1 = /*@__PURE__*/ proxyCustomElement(
	class OntarioCardCollection extends HTMLElement {
		constructor() {
			super();
			this.__registerHost();
			this.__attachShadow();
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
		get host() {
			return this;
		}
		static get watchers() {
			return {
				cardsPerRow: ['validateCardsPerRow'],
			};
		}
		static get style() {
			return OntarioCardCollectionStyle0;
		}
	},
	[
		1,
		'ontario-card-collection',
		{
			cardsPerRow: [2, 'cards-per-row'],
			cardsPerRowState: [32],
		},
		undefined,
		{
			cardsPerRow: ['validateCardsPerRow'],
		},
	],
);
function defineCustomElement$1() {
	if (typeof customElements === 'undefined') {
		return;
	}
	const components = ['ontario-card-collection'];
	components.forEach((tagName) => {
		switch (tagName) {
			case 'ontario-card-collection':
				if (!customElements.get(tagName)) {
					customElements.define(tagName, OntarioCardCollection$1);
				}
				break;
		}
	});
}

const OntarioCardCollection = OntarioCardCollection$1;
const defineCustomElement = defineCustomElement$1;

export { OntarioCardCollection, defineCustomElement };

//# sourceMappingURL=ontario-card-collection.js.map
