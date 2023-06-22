import { r as i, h as o } from './p-e870d905.js';
import { v as t, I as s, d as a } from './p-888a2bd3.js';
import { C as l } from './p-b5fbefe0.js';
const e = class {
	constructor(o) {
		i(this, o),
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
					.addMonospaceText(' <ontario-icon-pin-location-off> ')
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
				.addMonospaceText(' <ontario-icon-pin-location-off> ')
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
		return o(
			'div',
			{
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'pin-location-off',
				},
				o('path', {
					d: 'M16.37 16.1l-4.73-4.74L3.27 3 2 4.27l3.18 3.18C5.06 7.95 5 8.46 5 9c0 5.25 7 13 7 13s1.67-1.85 3.37-4.35L18.73 21 20 19.72l-3.63-3.62zM12 6.5A2.5 2.5 0 0 1 14.5 9c0 .73-.33 1.4-.83 1.85l3.63 3.65c.98-1.88 1.7-3.82 1.7-5.5a7 7 0 0 0-7-7c-2 0-3.76.82-5.04 2.14l3.2 3.2A2.47 2.47 0 0 1 12 6.5z',
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
export { e as ontario_icon_pin_location_off };
