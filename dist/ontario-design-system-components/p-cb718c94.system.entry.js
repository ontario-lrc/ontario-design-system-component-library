System.register(['./p-612c708e.system.js', './p-631d2c16.system.js'], function (t) {
	'use strict';
	var e, i, o, n;
	return {
		setters: [
			function (t) {
				e = t.r;
				i = t.h;
				o = t.g;
			},
			function (t) {
				n = t.C;
			},
		],
		execute: function () {
			var a =
				'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
			var r = t(
				'ontario_icon_mastercard_alt',
				(function () {
					function t(t) {
						e(this, t);
						this.iconWidth = 24;
						this.iconWidthState = undefined;
					}
					t.prototype.validateWidth = function () {
						if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
							var t = new n();
							t.addDesignSystemTag()
								.addMonospaceText(' icon-width ')
								.addRegularText('on')
								.addMonospaceText(' <ontario-icon-mastercard-alt> ')
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
							var t = new n();
							t.addDesignSystemTag()
								.addMonospaceText(' colour ')
								.addRegularText('on')
								.addMonospaceText(' <ontario-icon-mastercard-alt> ')
								.addRegularText('cannot be set. The provided colour is ignored.')
								.printMessage();
						}
					};
					t.prototype.componentWillLoad = function () {
						this.validateColour();
						this.validateWidth();
					};
					t.prototype.render = function () {
						return i(
							'div',
							{
								class: 'ontario-icon ontario-icon--width-'.concat(this.iconWidthState),
								style: { width: ''.concat(this.iconWidthState, 'px') },
							},
							i(
								'svg',
								{
									class: 'svg-icon',
									role: 'img',
									xmlns: 'http://www.w3.org/2000/svg',
									viewBox: '0 0 24 24',
									id: 'mastercard-alt',
								},
								i('circle', { cx: '8', cy: '12', r: '6.5', fill: '#eb001b' }),
								i('circle', { cx: '16', cy: '12', r: '6.5', fill: '#f79e1b' }),
								i('path', {
									d: 'M12 17.124S9.5 15.5 9.5 12 12 6.876 12 6.876 14.5 8.5 14.5 12 12 17.124 12 17.124z',
									fill: '#ff5f00',
								}),
								i('path', {
									d: 'M21.173 16.85v-.3h.125v-.06H21v.06h.117v.3h.055zm.578 0v-.35h-.1l-.105.25-.105-.25h-.1v.35h.065v-.265l.098.227h.067l.098-.227v.265h.063z',
									fill: '#f79e1b',
								}),
							),
						);
					};
					Object.defineProperty(t.prototype, 'host', {
						get: function () {
							return o(this);
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
				})(),
			);
			r.style = a;
		},
	};
});
