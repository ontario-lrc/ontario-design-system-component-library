import { r as registerInstance, h } from './index-3675b4ba.js';
import { v as validateValueAgainstArray, I as IconColours, d as validateColor } from './index-12fd087d.js';
import { C as ConsoleMessageClass } from './console-message-b539abf6.js';
var ontarioIconCss =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
var OntarioIconTransportBicycle = (function () {
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
				.addMonospaceText(' <ontario-icon-transport-bicycle> ')
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
			.addMonospaceText(' <ontario-icon-transport-bicycle> ')
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
					id: 'transport-bicycle',
				},
				h('path', {
					d: 'M15.208 6.167a1.84 1.84 0 0 0 1.833-1.833A1.84 1.84 0 0 0 15.208 2.5a1.84 1.84 0 0 0-1.833 1.833 1.84 1.84 0 0 0 1.833 1.833zm-9.625 5.958C3.017 12.125 1 14.142 1 16.708s2.017 4.583 4.583 4.583 4.583-2.017 4.583-4.583-2.017-4.583-4.583-4.583zm0 7.792a3.25 3.25 0 0 1-3.208-3.208A3.25 3.25 0 0 1 5.583 13.5a3.25 3.25 0 0 1 3.208 3.208 3.25 3.25 0 0 1-3.208 3.208zM10.9 10.75l2.2-2.2.733.733a6.42 6.42 0 0 0 4.675 1.925V9.375c-1.375 0-2.475-.55-3.3-1.375l-1.742-1.742c-.458-.367-.917-.55-1.467-.55a1.71 1.71 0 0 0-1.283.55L8.15 8.825a1.81 1.81 0 0 0-.55 1.283c0 .55.183 1.008.55 1.283l2.933 2.567v4.583h1.833v-5.683L10.9 10.75zm7.517 1.375c-2.567 0-4.583 2.017-4.583 4.583s2.017 4.583 4.583 4.583S23 19.275 23 16.708s-2.017-4.583-4.583-4.583zm0 7.792a3.25 3.25 0 0 1-3.208-3.208 3.25 3.25 0 0 1 3.208-3.208 3.25 3.25 0 0 1 3.208 3.208 3.25 3.25 0 0 1-3.208 3.208z',
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
OntarioIconTransportBicycle.style = ontarioIconCss;
export { OntarioIconTransportBicycle as ontario_icon_transport_bicycle };
