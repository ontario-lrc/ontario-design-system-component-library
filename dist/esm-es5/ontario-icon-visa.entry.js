import { r as registerInstance, h, g as getElement } from './index-3675b4ba.js';
import { C as ConsoleMessageClass } from './console-message-b539abf6.js';
var ontarioIconCss =
	'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
var OntarioIconVisa = (function () {
	function t(t) {
		registerInstance(this, t);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
	}
	t.prototype.validateWidth = function () {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-visa> ')
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
	t.prototype.validateColour = function () {
		if (this.host.hasAttribute('colour')) {
			var t = new ConsoleMessageClass();
			t.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-visa> ')
				.addRegularText('cannot be set. The provided colour is ignored.')
				.printMessage();
		}
	};
	t.prototype.componentWillLoad = function () {
		this.validateColour();
		this.validateWidth();
	};
	t.prototype.render = function () {
		return h(
			'div',
			{
				class: 'ontario-icon ontario-icon--width-'.concat(this.iconWidthState),
				style: { width: ''.concat(this.iconWidthState, 'px') },
			},
			h(
				'svg',
				{ class: 'svg-icon', role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', id: 'visa' },
				h('path', { d: 'M23 5H1v13.974h22V5z', fill: '#fff' }),
				h('path', { d: 'M22.633 16.703H1.367v1.905h21.267v-1.905z', fill: '#fcb316' }),
				h('path', {
					d: 'M22.633 5.367H1.367v1.905h21.267V5.367zM9.882 9.37l-2.2 5.245H6.245l-1.08-4.186c-.06-.255-.122-.357-.326-.458-.326-.173-.866-.346-1.334-.448l.03-.153h2.312a.62.62 0 0 1 .621.53l.57 3.045L8.445 9.38H9.88v-.01zm5.612 3.534c.01-1.385-1.915-1.457-1.895-2.078 0-.183.183-.387.57-.438a2.65 2.65 0 0 1 1.334.234l.234-1.1a3.55 3.55 0 0 0-1.273-.234c-1.344 0-2.28.713-2.292 1.73-.01.754.672 1.17 1.18 1.426.53.255.703.418.703.652 0 .356-.418.5-.815.5-.682.01-1.08-.183-1.395-.336l-.245 1.15c.316.143.906.275 1.507.275 1.446.01 2.383-.693 2.383-1.782zm3.544 1.7h1.253l-1.1-5.245h-1.16a.62.62 0 0 0-.58.387l-2.037 4.858h1.426l.285-.784h1.742l.173.784zM17.52 12.76l.713-1.966.407 1.966h-1.12zm-5.703-3.4l-1.12 5.245H9.342l1.12-5.245h1.355z',
					fill: '#10357f',
				}),
			),
		);
	};
	Object.defineProperty(t.prototype, 'host', {
		get: function () {
			return getElement(this);
		},
		enumerable: false,
		configurable: true,
	});
	Object.defineProperty(t, 'watchers', {
		get: function () {
			return { iconWidth: ['validateWidth'] };
		},
		enumerable: false,
		configurable: true,
	});
	return t;
})();
OntarioIconVisa.style = ontarioIconCss;
export { OntarioIconVisa as ontario_icon_visa };
