import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { a as validateValueAgainstArray } from './validation-functions.js';
import { C as ConsoleMessageClass } from './console-message.js';

const CardTypes = ['basic', 'image', 'title', 'horizontal'];
const HeaderTypes = ['default', 'light', 'dark'];

const ontarioCardCss =
	'.ontario-card__heading{font-style:normal;font-weight:700;text-rendering:optimizeLegibility;margin-bottom:1rem;font-feature-settings:normal;font-family:"Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}.ontario-card__heading{font-size:1.25rem;letter-spacing:0.03rem;line-height:1.5;margin:0 0 0.75rem 0;max-width:48rem}@media screen and (min-width: 40em){.ontario-card__heading{font-size:1.5rem;letter-spacing:0.0313rem;line-height:1.5}}.ontario-card{box-shadow:0rem 0.1875rem 0.5rem 0.0625rem rgba(0, 0, 0, 0.4);border-radius:4px;margin:0 2.5rem 2.5rem 0;padding:0;list-style-type:none;transition:all 0.3s ease-in-out;position:relative;cursor:pointer}.ontario-card:hover{box-shadow:0rem 0.375rem 0.75rem 0.125rem rgba(0, 0, 0, 0.35)}.ontario-card:focus-within{box-shadow:0 0 0 4px #009ADB;outline:4px solid transparent;transition:box-shadow 0.1s ease-in-out}.ontario-card:active{box-shadow:0 0 0 4px #009ADB;background-color:#f2f2f2}@media screen and (max-width: 40em){.ontario-card{margin-bottom:3rem;width:100% !important;max-width:100%}}.ontario-card__card-type--horizontal{display:flex}@media screen and (max-width: 40em){.ontario-card__card-type--horizontal{width:100%;max-width:100%}}.ontario-card__card-type--horizontal .ontario-card__image-container,.ontario-card__card-type--horizontal .ontario-card__text-container{position:relative}.ontario-card__card-type--horizontal a:focus-within{box-shadow:none;outline:none}.ontario-card__card-type--horizontal a:active{box-shadow:none}.ontario-card__card-type--horizontal img{height:100%;position:absolute}.ontario-card__image-right{flex-direction:row-reverse}.ontario-card__heading{margin:0;border-radius:4px 4px 0 0;padding:1.25rem 1.5rem 0.5rem 1.5rem;transition:text-decoration 0.3s ease-in-out;background-color:#FFFFFF}.ontario-card:hover .ontario-card__heading{text-decoration-line:underline;text-decoration-color:#1a1a1a}.ontario-card__header-type--light .ontario-card__heading{background-color:#f2f2f2;padding-top:1rem;padding-bottom:1rem;padding-right:4rem;border-radius:4px 4px 0 0}.ontario-card__header-type--dark .ontario-card__heading{background-color:#1a1a1a;padding-top:1rem;padding-bottom:1rem;border-radius:4px 4px 0 0}.ontario-card__header-type--dark:hover .ontario-card__heading{text-decoration-line:underline;text-decoration-color:#FFFFFF}.ontario-card--no-description .ontario-card__heading{padding:1rem 1.5rem;border-radius:0 0 4px 4px}.ontario-card__heading a{color:#1a1a1a;text-decoration:none;outline:none}.ontario-card__header-type--dark .ontario-card__heading a{color:#FFFFFF}.ontario-card__heading a::after{content:"";position:absolute;left:0;top:0;right:0;bottom:0}.ontario-card__heading a:focus{box-shadow:none}.ontario-card__heading a:active{outline:none}@media screen and (max-width: 73em){.ontario-card__heading{font-size:1.25rem;padding-left:1rem;padding-right:1rem}}.ontario-card__card-type--horizontal .ontario-card__text-container{width:66.6%}.ontario-card__image-size-one-fourth .ontario-card__text-container{width:75%}.ontario-card--no-image .ontario-card__text-container{width:100%}.ontario-card__description{margin:0;padding:0.5rem 1.5rem 1.5rem 1.5rem;background-color:#FFFFFF;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.ontario-card__description p{margin-top:0}.ontario-card__description p:last-of-type{margin-bottom:0}.ontario-card__header-type--light .ontario-card__description,.ontario-card__header-type--dark .ontario-card__description{padding-top:1rem}@media screen and (max-width: 73em){.ontario-card__description{padding:0.5rem 1rem 1.5rem 1rem}.ontario-card__header-type--light .ontario-card__description,.ontario-card__header-type--dark .ontario-card__description{padding-top:1rem}}.ontario-card--position-vertical .ontario-card__image-container{margin-bottom:-0.5rem}.ontario-card__card-type--horizontal .ontario-card__image-container{width:33.3%}.ontario-card__image-size-one-fourth .ontario-card__image-container{width:25%}.ontario-card__image{width:100%;height:100%;object-fit:cover;background-size:100% 100%}.ontario-card--position-vertical .ontario-card__image{border-top-left-radius:4px;border-top-right-radius:4px}.ontario-card__image-right .ontario-card__image{border-top-right-radius:4px;border-bottom-right-radius:4px}.ontario-card__image-left .ontario-card__image{border-top-left-radius:4px;border-bottom-left-radius:4px}';
const OntarioCardStyle0 = ontarioCardCss;

const OntarioCard$1 = /*@__PURE__*/ proxyCustomElement(
	class OntarioCard extends HTMLElement {
		constructor() {
			super();
			this.__registerHost();
			this.__attachShadow();
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
		get host() {
			return this;
		}
		static get watchers() {
			return {
				cardType: ['validateCardType'],
				headerType: ['validateHeaderType'],
			};
		}
		static get style() {
			return OntarioCardStyle0;
		}
	},
	[
		1,
		'ontario-card',
		{
			label: [1],
			image: [1],
			description: [1],
			cardLink: [1, 'card-link'],
			cardType: [1, 'card-type'],
			headerType: [1, 'header-type'],
			horizontalImagePositionType: [1, 'horizontal-image-position-type'],
			horizontalImageSizeType: [1, 'horizontal-image-size-type'],
			ariaLabelText: [1, 'aria-label-text'],
			cardTypeState: [32],
			headerTypeState: [32],
		},
		undefined,
		{
			cardType: ['validateCardType'],
			headerType: ['validateHeaderType'],
		},
	],
);
function defineCustomElement$1() {
	if (typeof customElements === 'undefined') {
		return;
	}
	const components = ['ontario-card'];
	components.forEach((tagName) => {
		switch (tagName) {
			case 'ontario-card':
				if (!customElements.get(tagName)) {
					customElements.define(tagName, OntarioCard$1);
				}
				break;
		}
	});
}

const OntarioCard = OntarioCard$1;
const defineCustomElement = defineCustomElement$1;

export { OntarioCard, defineCustomElement };

//# sourceMappingURL=ontario-card.js.map
