import { r as registerInstance, h } from './index-3675b4ba.js';
import { v as validateValueAgainstArray, I as IconColours, d as validateColor } from './index-12fd087d.js';
import { C as ConsoleMessageClass } from './console-message-b539abf6.js';
var ontarioIconCss =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
var OntarioIconShare = (function () {
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
				.addMonospaceText(' <ontario-icon-share> ')
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
			.addMonospaceText(' <ontario-icon-share> ')
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
					id: 'share',
				},
				h('path', {
					d: 'M18 16.08c-.76 0-1.44.3-1.96.77L8.9 12.7c.05-.23.1-.46.1-.7s-.04-.47-.1-.7l7.05-4.1c.54.5 1.25.8 2.04.8 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.1.7L8.04 9.8C7.5 9.3 6.8 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.8 0 1.5-.3 2.04-.8l7.12 4.16a2.82 2.82 0 0 0-.08.65c0 1.6 1.3 2.92 2.92 2.92s2.92-1.3 2.92-2.92-1.3-2.92-2.92-2.92z',
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
OntarioIconShare.style = ontarioIconCss;
export { OntarioIconShare as ontario_icon_share };
