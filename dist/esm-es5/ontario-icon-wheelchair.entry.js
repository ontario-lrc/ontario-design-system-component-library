import { r as registerInstance, h } from './index-3675b4ba.js';
import { v as validateValueAgainstArray, I as IconColours, d as validateColor } from './index-12fd087d.js';
import { C as ConsoleMessageClass } from './console-message-b539abf6.js';
var ontarioIconCss =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
var OntarioIconWheelchair = (function () {
	function o(o) {
		registerInstance(this, o);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
		this.colour = 'black';
		this.iconColourState = undefined;
		this.iconCustomColourState = undefined;
	}
	o.prototype.validateWidth = function () {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			var o = new ConsoleMessageClass();
			o.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-wheelchair> ')
				.addRegularText(
					''.concat(
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number',
						'; only a positive number is allowed. The default size of',
					),
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	};
	o.prototype.validateColour = function () {
		var o = validateValueAgainstArray(this.colour, IconColours);
		if (o) {
			this.iconColourState = this.colour;
		} else {
			if (validateColor(this.colour)) {
				this.iconCustomColourState = this.colour;
			} else {
				this.iconColourState = this.warnDefaultColour();
			}
		}
	};
	o.prototype.warnDefaultColour = function () {
		var o = new ConsoleMessageClass();
		o.addDesignSystemTag()
			.addMonospaceText(' colour ')
			.addRegularText('on')
			.addMonospaceText(' <ontario-icon-wheelchair> ')
			.addRegularText('was set to an invalid colour; only')
			.addMonospaceText(' black, blue, grey or white ')
			.addRegularText('are supported. The default colour')
			.addMonospaceText(' black ')
			.addRegularText('is assumed.')
			.printMessage();
		return 'black';
	};
	o.prototype.componentWillLoad = function () {
		this.validateColour();
		this.validateWidth();
	};
	o.prototype.render = function () {
		return h(
			'div',
			{
				class: 'ontario-icon ontario-icon--'
					.concat(this.iconColourState, ' ontario-icon--width-')
					.concat(this.iconWidthState),
				style: { width: ''.concat(this.iconWidthState, 'px') },
			},
			h(
				'svg',
				{
					class: 'svg-icon',
					style: { fill: ''.concat(this.iconCustomColourState), stroke: ''.concat(this.iconCustomColourState) },
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'wheelchair',
				},
				h('path', {
					d: 'M19 13v-2c-1.54.02-3.1-.75-4.07-1.83l-1.3-1.43c-.25-.24-.4-.316-.64-.46a2.01 2.01 0 0 0-1.2-.26c-1.05.1-1.8 1.02-1.8 2.07V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.3 1.07 3.25 1.94 5 1.95zm-6.17 5c-.4 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.3.84-2.4 2-2.83V12.1A5 5 0 0 0 5 17c0 2.76 2.24 5 5 5a5 5 0 0 0 4.9-4h-2.07zM12 6a2 2 0 1 0 0-4 2 2 0 1 0 0 4z',
				}),
			),
		);
	};
	Object.defineProperty(o, 'watchers', {
		get: function () {
			return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
		},
		enumerable: false,
		configurable: true,
	});
	return o;
})();
OntarioIconWheelchair.style = ontarioIconCss;
export { OntarioIconWheelchair as ontario_icon_wheelchair };
