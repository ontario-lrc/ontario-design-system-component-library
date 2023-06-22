import { r as i, h as t } from './p-e870d905.js';
import { v as o, I as s, d as a } from './p-888a2bd3.js';
import { C as r } from './p-b5fbefe0.js';
const e = class {
	constructor(t) {
		i(this, t),
			(this.iconWidth = 24),
			(this.iconWidthState = void 0),
			(this.colour = 'black'),
			(this.iconColourState = void 0),
			(this.iconCustomColourState = void 0);
	}
	validateWidth() {
		isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)
			? (new r()
					.addDesignSystemTag()
					.addMonospaceText(' icon-width ')
					.addRegularText('on')
					.addMonospaceText(' <ontario-icon-transport-bicycle> ')
					.addRegularText(
						(isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number') +
							'; only a positive number is allowed. The default size of',
					)
					.addMonospaceText(' 24px ')
					.addRegularText('was assumed.')
					.printMessage(),
			  (this.iconWidthState = 24))
			: (this.iconWidthState = this.iconWidth);
	}
	validateColour() {
		o(this.colour, s)
			? (this.iconColourState = this.colour)
			: a(this.colour)
			? (this.iconCustomColourState = this.colour)
			: (this.iconColourState = this.warnDefaultColour());
	}
	warnDefaultColour() {
		return (
			new r()
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-transport-bicycle> ')
				.addRegularText('was set to an invalid colour; only')
				.addMonospaceText(' black, blue, grey or white ')
				.addRegularText('are supported. The default colour')
				.addMonospaceText(' black ')
				.addRegularText('is assumed.')
				.printMessage(),
			'black'
		);
	}
	componentWillLoad() {
		this.validateColour(), this.validateWidth();
	}
	render() {
		return t(
			'div',
			{
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			t(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'transport-bicycle',
				},
				t('path', {
					d: 'M15.208 6.167a1.84 1.84 0 0 0 1.833-1.833A1.84 1.84 0 0 0 15.208 2.5a1.84 1.84 0 0 0-1.833 1.833 1.84 1.84 0 0 0 1.833 1.833zm-9.625 5.958C3.017 12.125 1 14.142 1 16.708s2.017 4.583 4.583 4.583 4.583-2.017 4.583-4.583-2.017-4.583-4.583-4.583zm0 7.792a3.25 3.25 0 0 1-3.208-3.208A3.25 3.25 0 0 1 5.583 13.5a3.25 3.25 0 0 1 3.208 3.208 3.25 3.25 0 0 1-3.208 3.208zM10.9 10.75l2.2-2.2.733.733a6.42 6.42 0 0 0 4.675 1.925V9.375c-1.375 0-2.475-.55-3.3-1.375l-1.742-1.742c-.458-.367-.917-.55-1.467-.55a1.71 1.71 0 0 0-1.283.55L8.15 8.825a1.81 1.81 0 0 0-.55 1.283c0 .55.183 1.008.55 1.283l2.933 2.567v4.583h1.833v-5.683L10.9 10.75zm7.517 1.375c-2.567 0-4.583 2.017-4.583 4.583s2.017 4.583 4.583 4.583S23 19.275 23 16.708s-2.017-4.583-4.583-4.583zm0 7.792a3.25 3.25 0 0 1-3.208-3.208 3.25 3.25 0 0 1 3.208-3.208 3.25 3.25 0 0 1 3.208 3.208 3.25 3.25 0 0 1-3.208 3.208z',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
e.style =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
export { e as ontario_icon_transport_bicycle };
