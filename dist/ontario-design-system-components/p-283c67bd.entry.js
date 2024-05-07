import { r as o, h as i, g as t } from './p-14fa9399.js';
import { C as e } from './p-55c48d50.js';
const s =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const n = s;
const r = class {
	constructor(i) {
		o(this, i);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
	}
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const o = new e();
			o.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-dropdown-arrow> ')
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
		if (this.host.hasAttribute('colour')) {
			const o = new e();
			o.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-dropdown-arrow> ')
				.addRegularText('cannot be set. The provided colour is ignored.')
				.printMessage();
		}
	}
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	render() {
		return i(
			'div',
			{
				key: '86fbfa9837b226c4e3e99d0a339c2834f07e78d1',
				class: `ontario-icon ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			i(
				'svg',
				{
					key: 'd4476f244ff37643f6e6ebeaef6b687ec1ebd02e',
					class: 'svg-icon',
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'dropdown-arrow',
				},
				i('path', {
					key: '25c809e190f59835488573c5fec70fe9f096ab36',
					d: 'M7.965 10a.4.4 0 0 0-.37.247.4.4 0 0 0 .087.436l4.035 4.035a.4.4 0 0 0 .566 0l4.035-4.035a.4.4 0 0 0 .087-.436.4.4 0 0 0-.37-.247h-8.07z',
				}),
			),
		);
	}
	get host() {
		return t(this);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'] };
	}
};
r.style = n;
export { r as ontario_icon_dropdown_arrow };
//# sourceMappingURL=p-283c67bd.entry.js.map
