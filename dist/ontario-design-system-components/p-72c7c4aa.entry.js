import { r as i, h as o } from './p-14fa9399.js';
import { a as t, I as s, l as e } from './p-314395de.js';
import { C as a } from './p-55c48d50.js';
const n =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const r = n;
const l = class {
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
			const i = new a();
			i.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-previous> ')
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
		const i = new a();
		i.addDesignSystemTag()
			.addMonospaceText(' colour ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-icon-previous> ')
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
				key: '62f734f9ffce3a6fcb5e2c80d6b45cd9fa425d7e',
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			o(
				'svg',
				{
					key: '5ea9cb55d9c00960f3efeb35374c6a5016dbf4cd',
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'previous',
				},
				o('path', {
					key: '1dec4321e0f048e0b5349c231bf48b08a5891caa',
					d: 'M22 12a10 10 0 0 1-10 10 10 10 0 0 1-7.071-2.929 10 10 0 0 1 0-14.142 10 10 0 0 1 10.898-2.168 10 10 0 0 1 5.412 5.412A10 10 0 0 1 22 12zm-6.6 4.6L10.8 12l4.6-4.6L14 6l-6 6 6 6 1.4-1.4z',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
l.style = r;
export { l as ontario_icon_previous };
//# sourceMappingURL=p-72c7c4aa.entry.js.map
