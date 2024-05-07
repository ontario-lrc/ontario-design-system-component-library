import { r as i, h as o } from './p-14fa9399.js';
import { a as t, I as s, l as e } from './p-314395de.js';
import { C as n } from './p-55c48d50.js';
const a =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const l = a;
const r = class {
	constructor(o) {
		i(this, o);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const i = new n();
			i.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-phone> ')
				.addRegularText(
					`${
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number'
					}; only a positive number is allowed. The default size of`,
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	}
	validateColour() {
		const i = t(this.colour, s);
		if (i) {
			this.iconColourState = this.colour;
		} else {
			if (e(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	}
	warnDefaultColour() {
		const i = new n();
		i.addDesignSystemTag()
			.addMonospaceText(' colour ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-icon-phone> ')
			.addRegularText('was set to an invalid colour; only')
			.addMonospaceText(' black, blue, grey or white ')
			.addRegularText('are supported. The default colour')
			.addMonospaceText(' black ')
			.addRegularText('is assumed.')
			.printMessage();
		return 'black';
	}
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	render() {
		return o(
			'div',
			{
				key: '4e50757a781b0217ef54ef16c48848f7226e1e4f',
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					key: 'e2036b6047f572fa7ab6ac2a133d9829a5d5ea47',
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'phone',
				},
				o('path', {
					key: '8797769dc22158bb7b7fb701e48bc3cfd44e9198',
					d: 'M20 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1 .24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.9-6.83l1.95-1.66a1.02 1.02 0 0 0 .24-1.02c-.37-1.1-.56-2.3-.56-3.53A1 1 0 0 0 7.65 3H4.2C3.65 3 3 3.24 3 4c0 9.3 7.73 17 17 17 .7 0 1-.63 1-1.18v-3.45a1 1 0 0 0-.99-.99z',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
r.style = l;
export { r as ontario_icon_phone };
//# sourceMappingURL=p-f91476fd.entry.js.map
