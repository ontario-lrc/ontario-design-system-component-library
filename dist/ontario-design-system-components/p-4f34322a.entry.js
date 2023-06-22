import { r as i, h as t } from './p-e870d905.js';
import { v as o, I as s, d as e } from './p-888a2bd3.js';
import { C as a } from './p-b5fbefe0.js';
const n = class {
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
			? (new a()
					.addDesignSystemTag()
					.addMonospaceText(' icon-width ')
					.addRegularText('on')
					.addMonospaceText(' <ontario-icon-sentiment-4> ')
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
			: e(this.colour)
			? (this.iconCustomColourState = this.colour)
			: (this.iconColourState = this.warnDefaultColour());
	}
	warnDefaultColour() {
		return (
			new a()
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-sentiment-4> ')
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
					id: 'sentiment-4',
				},
				t('path', {
					d: 'M12 2a10 10 0 1 0 0 20 10.01 10.01 0 0 0 10-10A10.01 10.01 0 0 0 11.99 2zm0 18a8 8 0 1 1 0-16 8 8 0 1 1 0 16zm0-2.5c2.33 0 4.32-1.45 5.12-3.5h-1.67c-.7 1.2-1.97 2-3.45 2s-2.75-.8-3.45-2H6.88c.8 2.05 2.8 3.5 5.12 3.5zm3.5-6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 1 0 0 3zm-7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 1 0 0 3z',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
n.style =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
export { n as ontario_icon_sentiment_4 };
