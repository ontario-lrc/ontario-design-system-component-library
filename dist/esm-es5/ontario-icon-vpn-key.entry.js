import { r as registerInstance, h } from './index-3675b4ba.js';
import { v as validateValueAgainstArray, I as IconColours, d as validateColor } from './index-12fd087d.js';
import { C as ConsoleMessageClass } from './console-message-b539abf6.js';
var ontarioIconCss =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
var OntarioIconVpnKey = (function () {
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
				.addMonospaceText(' <ontario-icon-vpn-key> ')
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
			.addMonospaceText(' <ontario-icon-vpn-key> ')
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
					id: 'vpn-key',
				},
				h('path', {
					d: 'M12.65 10A5.99 5.99 0 0 0 7 6c-3.3 0-6 2.7-6 6s2.7 6 6 6a5.99 5.99 0 0 0 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
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
OntarioIconVpnKey.style = ontarioIconCss;
export { OntarioIconVpnKey as ontario_icon_vpn_key };
