import { r as o, h as i, g as t } from './p-e870d905.js';
import { C as r } from './p-b5fbefe0.js';
const s = class {
	constructor(i) {
		o(this, i), (this.iconWidth = 24), (this.iconWidthState = void 0);
	}
	validateWidth() {
		isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)
			? (new r()
					.addDesignSystemTag()
					.addMonospaceText(' icon-width ')
					.addRegularText('on')
					.addMonospaceText(' <ontario-icon-dropdown-arrow> ')
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
		this.host.hasAttribute('colour') &&
			new r()
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-dropdown-arrow> ')
				.addRegularText('cannot be set. The provided colour is ignored.')
				.printMessage();
	}
	componentWillLoad() {
		this.validateColour(), this.validateWidth();
	}
	render() {
		return i(
			'div',
			{
				class: `ontario-icon ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			i(
				'svg',
				{
					class: 'svg-icon',
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'dropdown-arrow',
				},
				i('path', {
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
s.style =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
export { s as ontario_icon_dropdown_arrow };
