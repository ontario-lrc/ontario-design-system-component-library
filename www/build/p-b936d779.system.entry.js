System.register(['./p-612c708e.system.js', './p-ea38536e.system.js', './p-631d2c16.system.js'], function (t) {
	'use strict';
	var o, e, i, n, a, s;
	return {
		setters: [
			function (t) {
				o = t.r;
				e = t.h;
			},
			function (t) {
				i = t.v;
				n = t.I;
				a = t.d;
			},
			function (t) {
				s = t.C;
			},
		],
		execute: function () {
			var r =
				'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
			var c = t(
				'ontario_icon_phone',
				(function () {
					function t(t) {
						o(this, t);
						this.iconWidth = 24;
						this.iconWidthState = undefined;
						this.colour = 'black';
						this.iconColourState = undefined;
						this.iconCustomColourState = undefined;
					}
					t.prototype.validateWidth = function () {
						if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
							var t = new s();
							t.addDesignSystemTag()
								.addMonospaceText(' icon-width ')
								.addRegularText('on')
								.addMonospaceText(' <ontario-icon-phone> ')
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
						var t = i(this.colour, n);
						if (t) {
							this.iconColourState = this.colour;
						} else {
							if (a(this.colour)) {
								this.iconCustomColourState = this.colour;
							} else {
								this.iconColourState = this.warnDefaultColour();
							}
						}
					};
					t.prototype.warnDefaultColour = function () {
						var t = new s();
						t.addDesignSystemTag()
							.addMonospaceText(' colour ')
							.addRegularText('on')
							.addMonospaceText(' <ontario-icon-phone> ')
							.addRegularText('was set to an invalid colour; only')
							.addMonospaceText(' black, blue, grey or white ')
							.addRegularText('are supported. The default colour')
							.addMonospaceText(' black ')
							.addRegularText('is assumed.')
							.printMessage();
						return 'black';
					};
					t.prototype.componentWillLoad = function () {
						this.validateColour();
						this.validateWidth();
					};
					t.prototype.render = function () {
						return e(
							'div',
							{
								class: 'ontario-icon ontario-icon--'
									.concat(this.iconColourState, ' ontario-icon--width-')
									.concat(this.iconWidthState),
								style: { width: ''.concat(this.iconWidthState, 'px') },
							},
							e(
								'svg',
								{
									class: 'svg-icon',
									style: { fill: ''.concat(this.iconCustomColourState), stroke: ''.concat(this.iconCustomColourState) },
									role: 'img',
									xmlns: 'http://www.w3.org/2000/svg',
									fill: 'none',
									viewBox: '0 0 24 24',
									id: 'phone',
								},
								e('path', {
									d: 'M20 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1 .24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.9-6.83l1.95-1.66a1.02 1.02 0 0 0 .24-1.02c-.37-1.1-.56-2.3-.56-3.53A1 1 0 0 0 7.65 3H4.2C3.65 3 3 3.24 3 4c0 9.3 7.73 17 17 17 .7 0 1-.63 1-1.18v-3.45a1 1 0 0 0-.99-.99z',
								}),
							),
						);
					};
					Object.defineProperty(t, 'watchers', {
						get: function () {
							return { iconWidth: ['validateWidth'], colour: ['validateColour'] };
						},
						enumerable: false,
						configurable: true,
					});
					return t;
				})(),
			);
			c.style = r;
		},
	};
});
