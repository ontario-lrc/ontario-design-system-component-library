import { r as i, h as t } from './p-14fa9399.js';
import { a as o, I as s, l as e } from './p-314395de.js';
import { C as a } from './p-55c48d50.js';
const n =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const r = n;
const c = class {
	constructor(t) {
		i(this, t);
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
				.addMonospaceText(' <ontario-icon-twitter> ')
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
		const i = o(this.colour, s);
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
			.addMonospaceText(' <ontario-icon-twitter> ')
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
		return t(
			'div',
			{
				key: 'a6eaf1d0ec21548046c7b9e3141c85dbfa226591',
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			t(
				'svg',
				{
					key: 'd37159c22c1018d4ea97d8872625fac897e8a6bf',
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'twitter',
				},
				t('path', {
					key: 'ea5f6c57717ebeca4b05859ac123cbba209a79c0',
					d: 'M22.46 6c-.77.35-1.6.58-2.46.7a4.3 4.3 0 0 0 1.88-2.38 8.64 8.64 0 0 1-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.3a4.46 4.46 0 0 0 .11.98C8.28 9.1 5.1 7.38 3 4.8c-.37.63-.58 1.37-.58 2.15 0 1.5.75 2.8 1.9 3.56-.7 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.2a4.22 4.22 0 0 1-1.13.15c-.27 0-.54-.03-.8-.08a4.28 4.28 0 0 0 4 2.98c-1.46 1.16-3.3 1.84-5.33 1.84-.34 0-.68-.02-1.02-.06C3.44 20.3 5.7 21 8.12 21c7.88 0 12.2-6.54 12.2-12.2 0-.2 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
c.style = r;
export { c as ontario_icon_twitter };
//# sourceMappingURL=p-131d1f76.entry.js.map
