import { r as o, h as i } from './p-e870d905.js';
import { v as s, I as t, d as r } from './p-888a2bd3.js';
import { C as a } from './p-b5fbefe0.js';
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
			? (new a()
					.addDesignSystemTag()
					.addMonospaceText(' icon-width ')
					.addRegularText('on')
					.addMonospaceText(' <ontario-icon-password-show> ')
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
		s(this.colour, t)
			? (this.iconColourState = this.colour)
			: r(this.colour)
			? (this.iconCustomColourState = this.colour)
			: (this.iconColourState = this.warnDefaultColour());
	}
	warnDefaultColour() {
		return (
			new a()
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-password-show> ')
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
					id: 'password-show',
				},
				i('path', {
					d: 'M12 4.5C7 4.5 2.73 7.6 1 12c1.73 4.4 6 7.5 11 7.5s9.27-3.1 11-7.5c-1.73-4.4-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
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
export { e as ontario_icon_password_show };
