import { r as a, h as i } from './p-e870d905.js';
import { v as t, I as o, d as s } from './p-888a2bd3.js';
import { C as e } from './p-b5fbefe0.js';
const l = class {
	constructor(i) {
		a(this, i),
			(this.iconWidth = 24),
			(this.iconWidthState = void 0),
			(this.colour = 'black'),
			(this.iconColourState = void 0),
			(this.iconCustomColourState = void 0);
	}
	validateWidth() {
		isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)
			? (new e()
					.addDesignSystemTag()
					.addMonospaceText(' icon-width ')
					.addRegularText('on')
					.addMonospaceText(' <ontario-icon-tty> ')
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
		t(this.colour, o)
			? (this.iconColourState = this.colour)
			: s(this.colour)
			? (this.iconCustomColourState = this.colour)
			: (this.iconColourState = this.warnDefaultColour());
	}
	warnDefaultColour() {
		return (
			new e()
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-tty> ')
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
					fill: 'none',
					viewBox: '0 0 24 24',
					id: 'tty',
				},
				i('path', {
					d: 'M2.2 6.056c5.41-5.41 14.177-5.403 19.58 0 .237.237.276.605.1.886l-1.688 2.7c-.09.142-.225.25-.385.3s-.333.047-.488-.016l-3.376-1.35c-.144-.058-.266-.16-.346-.293s-.116-.288-.1-.443l.232-2.325a11.07 11.07 0 0 0-7.48 0l.233 2.325c.015.155-.02.3-.1.443s-.202.236-.346.293L4.67 9.928c-.156.062-.33.068-.488.016s-.296-.16-.385-.3L2.11 6.94c-.086-.137-.123-.3-.104-.46s.09-.31.205-.425zm3.54 7.976V12.47A.47.47 0 0 0 5.281 12H3.72a.47.47 0 0 0-.469.469v1.563a.47.47 0 0 0 .469.469H5.28a.47.47 0 0 0 .469-.469zm3.75 0V12.47A.47.47 0 0 0 9.031 12H7.47a.47.47 0 0 0-.469.469v1.563a.47.47 0 0 0 .469.469H9.03a.47.47 0 0 0 .469-.469zm3.75 0V12.47a.47.47 0 0 0-.469-.469H11.22a.47.47 0 0 0-.469.469v1.563a.47.47 0 0 0 .469.469h1.563a.47.47 0 0 0 .469-.469zm3.75 0V12.47a.47.47 0 0 0-.469-.469H14.97a.47.47 0 0 0-.469.469v1.563a.47.47 0 0 0 .469.469h1.563a.47.47 0 0 0 .469-.469zm3.75 0V12.47a.47.47 0 0 0-.469-.469H18.72a.47.47 0 0 0-.469.469v1.563a.47.47 0 0 0 .469.469h1.563a.47.47 0 0 0 .469-.469zM7.625 17.78V16.22a.47.47 0 0 0-.469-.469H5.594a.47.47 0 0 0-.469.469v1.563a.47.47 0 0 0 .469.469h1.563a.47.47 0 0 0 .469-.469zm3.75 0V16.22a.47.47 0 0 0-.469-.469H9.344a.47.47 0 0 0-.469.469v1.563a.47.47 0 0 0 .469.469h1.563a.47.47 0 0 0 .469-.469zm3.75 0V16.22a.47.47 0 0 0-.469-.469h-1.562a.47.47 0 0 0-.469.469v1.563a.47.47 0 0 0 .469.469h1.563a.47.47 0 0 0 .469-.469zm3.75 0V16.22a.47.47 0 0 0-.469-.469h-1.562a.47.47 0 0 0-.469.469v1.563a.47.47 0 0 0 .469.469h1.563a.47.47 0 0 0 .469-.469zM5.75 21.53V19.97a.47.47 0 0 0-.469-.469H3.72a.47.47 0 0 0-.469.469v1.563a.47.47 0 0 0 .469.469H5.28a.47.47 0 0 0 .469-.469zm11.25 0V19.97a.47.47 0 0 0-.469-.469H7.47a.47.47 0 0 0-.469.469v1.563a.47.47 0 0 0 .469.469h9.063a.47.47 0 0 0 .469-.469zm3.75 0V19.97a.47.47 0 0 0-.469-.469H18.72a.47.47 0 0 0-.469.469v1.563a.47.47 0 0 0 .469.469h1.563a.47.47 0 0 0 .469-.469z',
				}),
			),
		);
	}
	static get watchers() {
		return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
	}
};
l.style =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
export { l as ontario_icon_tty };
