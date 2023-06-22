import { r as o, h as i } from './p-e870d905.js';
import { v as t, I as s, d as a } from './p-888a2bd3.js';
import { C as l } from './p-b5fbefe0.js';
const e = class {
	constructor(i) {
		o(this, i),
			(this.iconWidth = 24),
			(this.iconWidthState = void 0),
			(this.colour = 'black'),
			(this.iconColourState = void 0),
			(this.iconCustomColourState = void 0);
	}
	validateWidth() {
		isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)
			? (new l()
					.addDesignSystemTag()
					.addMonospaceText(' icon-width ')
					.addRegularText('on')
					.addMonospaceText(' <ontario-icon-location-off> ')
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
		t(this.colour, s)
			? (this.iconColourState = this.colour)
			: a(this.colour)
			? (this.iconCustomColourState = this.colour)
			: (this.iconColourState = this.warnDefaultColour());
	}
	warnDefaultColour() {
		return (
			new l()
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-location-off> ')
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
		return i(
			'div',
			{
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			i(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'location-off',
				},
				i('path', {
					d: 'M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06c-1.13.12-2.2.46-3.16.97l1.5 1.5C10.16 5.2 11.06 5 12 5c3.87 0 7 3.13 7 7a7.03 7.03 0 0 1-.52 2.65l1.5 1.5c.5-.96.84-2.02.97-3.15H23v-2h-2.06zM3 4.27L5.04 6.3c-1.07 1.3-1.8 2.92-1.98 4.7H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c1.77-.2 3.38-.9 4.7-1.98L19.73 21 21 19.73 4.27 3 3 4.27zm13.27 13.27C15.1 18.45 13.6 19 12 19c-3.87 0-7-3.13-7-7 0-1.6.55-3.1 1.46-4.27l9.8 9.8z',
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
export { e as ontario_icon_location_off };
