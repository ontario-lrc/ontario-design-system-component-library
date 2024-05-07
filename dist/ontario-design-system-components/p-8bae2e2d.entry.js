import { r as t, h as i } from './p-14fa9399.js';
import { a as o, I as s, l as e } from './p-314395de.js';
import { C as a } from './p-55c48d50.js';
const n =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const r = n;
const l = class {
	constructor(i) {
		t(this, i);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const t = new a();
			t.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-twitter-alt> ')
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
		const t = o(this.colour, s);
		if (t) {
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
		const t = new a();
		t.addDesignSystemTag()
			.addMonospaceText(' colour ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-icon-twitter-alt> ')
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
				key: '892750485893f028cb2ed9644f9c9c480a6edd0f',
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			i(
				'svg',
				{
					key: '9f54581445cdfa3fd262ca440402e9b1d65f6d1c',
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'twitter-alt',
				},
				i('path', {
					key: 'c599dc2e9c8e7233d09e54891b396f8a314e26f7',
					d: 'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm12.7 6.33c.48-.4 1.04-.88 1.3-1.4-.4.2-.9.34-1.44.4.5-.36.9-.83 1.12-1.47-.52.28-1.05.52-1.7.64-1.55-1.87-5.26-.35-4.6 2.45-2.6-.16-4.2-1.34-5.52-2.8-.75 1.22-.1 3.07.8 3.58-.46-.03-.8-.17-1.14-.33.04 1.54.9 2.28 2.08 2.68-.36.07-.76.1-1.14.03C7.8 14.2 8.58 14.86 9.9 15c-.9.76-2.56 1.3-3.9 1.08 1.15.73 2.46 1.3 4.28 1.23 4.4-.2 7.36-3.36 7.43-7.98z',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
l.style = r;
export { l as ontario_icon_twitter_alt };
//# sourceMappingURL=p-8bae2e2d.entry.js.map
