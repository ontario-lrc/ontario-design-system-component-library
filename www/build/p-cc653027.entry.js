import { r as o, h as i } from './p-14fa9399.js';
import { a as t, I as s, l as e } from './p-314395de.js';
import { C as a } from './p-55c48d50.js';
const n =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const l = n;
const r = class {
	constructor(i) {
		o(this, i);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const o = new a();
			o.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-download> ')
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
		const o = t(this.colour, s);
		if (o) {
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
		const o = new a();
		o.addDesignSystemTag()
			.addMonospaceText(' colour ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-icon-download> ')
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
		return i(
			'div',
			{
				key: '6b6b9bae4572be82f6c9775650e8f259ee21ffa4',
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			i(
				'svg',
				{
					key: 'ba553ccb58c5e4669b33ee3805a06f5d3361ac9d',
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'download',
				},
				i('path', { key: 'f5e0a944ceb2b634a38970ae2056715ddbd3566a', d: 'M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z' }),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
r.style = l;
export { r as ontario_icon_download };
//# sourceMappingURL=p-cc653027.entry.js.map
