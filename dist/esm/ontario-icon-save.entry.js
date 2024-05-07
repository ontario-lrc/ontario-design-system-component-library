import { r as registerInstance, h } from './index-603026f7.js';
import { a as validateValueAgainstArray, I as IconColours, l as lib } from './index-500b6334.js';
import { C as ConsoleMessageClass } from './console-message-0b8e564e.js';

const ontarioIconCss =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const OntarioIconSaveStyle0 = ontarioIconCss;

const OntarioIconSave = class {
	constructor(hostRef) {
		registerInstance(this, hostRef);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	/**
	 * Watch for changes in the `iconWidth` variable for validation purpose.
	 * If the user input is not a number or is a negative number then `iconWidth` will be set to its default (24).
	 */
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const message = new ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-save> ')
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
	/**
	 * Watch for changes in the `colour` variable for validation purpose.
	 * If the user input doesn't match one of the enum values then `colour` will be set to its default (`black`).
	 * If a match is found in one of the enum values then `colour` will be set to the matching enum value.
	 */
	validateColour() {
		const isValid = validateValueAgainstArray(this.colour, IconColours);
		if (isValid) {
			this.iconColourState = this.colour;
		} else {
			if (lib(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	}
	/**
	 * Print the invalid colour warning message
	 * @returns default colour (black)
	 */
	warnDefaultColour() {
		const message = new ConsoleMessageClass();
		message
			.addDesignSystemTag()
			.addMonospaceText(' colour ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-icon-save> ')
			.addRegularText('was set to an invalid colour; only')
			.addMonospaceText(' black, blue, grey or white ')
			.addRegularText('are supported. The default colour')
			.addMonospaceText(' black ')
			.addRegularText('is assumed.')
			.printMessage();
		return 'black';
	}
	/**
	 * Stencil component lifecycle method that is called once after the component is first connected to the DOM.
	 */
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	/**
	 * Returns the HTML code to be rendered into a custom element.
	 */
	render() {
		return h(
			'div',
			{
				key: 'ea448ac100a6f359260adc3eddc007ac4ecaf912',
				class: `ontario-icon ontario-icon--${this.iconColourState} ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			h(
				'svg',
				{
					key: 'be3e95bb2b3fd807e42eae0eb553df90c57a7b7e',
					class: 'svg-icon',
					style: { fill: `${this.iconCustomColourState}`, stroke: `${this.iconCustomColourState}` },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'save',
				},
				h('path', {
					key: '1886192f9fed1fc5270cc766682f92dc13ec6ebc',
					d: 'M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z',
				}),
			),
		);
	}
	static get watchers() {
		return {
			iconWidth: ['validateWidth'],
			colour: ['validateColour'],
		};
	}
};
OntarioIconSave.style = OntarioIconSaveStyle0;

export { OntarioIconSave as ontario_icon_save };

//# sourceMappingURL=ontario-icon-save.entry.js.map
