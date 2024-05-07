import { r as i, h as t } from './p-14fa9399.js';
import { a as o, I as e, l as s } from './p-314395de.js';
import { C as a } from './p-55c48d50.js';
const l =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const n = l;
const r = class {
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
				.addMonospaceText(' <ontario-icon-critical-alert-warning> ')
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
		const i = o(this.colour, e);
		if (i) {
			this.iconColourState = this.colour;
		} else {
			if (s(this.colour)) {
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
			.addMonospaceText(' <ontario-icon-critical-alert-warning> ')
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
				key: '6fc163a343878deee886d47ba551b4c232b5f48b',
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			t(
				'svg',
				{
					key: '80bc08c786f52a5d01e578859773c6d00cac76e4',
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					viewBox: '0 0 24 24',
					fill: 'none',
					xmlns: 'http://www.w3.org/2000/svg',
					id: 'critical-alert-warning',
				},
				t('path', {
					key: '4b8ca38e2973ceec15e5ab032d61f2707faa7486',
					d: 'M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z',
					fill: 'white',
				}),
				t('rect', {
					key: 'ba1752e3e663c54f65a018f8d3e19b5e7c71c424',
					x: '11',
					y: '10',
					width: '2',
					height: '4',
					fill: 'black',
				}),
				t('rect', {
					key: 'a528958341c31fe683b729e0714d6fd9df302041',
					x: '11',
					y: '16',
					width: '2',
					height: '2',
					fill: 'black',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
r.style = n;
export { r as ontario_icon_critical_alert_warning };
//# sourceMappingURL=p-ac5451d3.entry.js.map
