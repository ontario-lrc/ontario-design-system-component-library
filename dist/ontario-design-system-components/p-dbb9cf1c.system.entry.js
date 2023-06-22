System.register(['./p-612c708e.system.js', './p-ea38536e.system.js', './p-631d2c16.system.js'], function (t) {
	'use strict';
	var o, i, e, n, a, s;
	return {
		setters: [
			function (t) {
				o = t.r;
				i = t.h;
			},
			function (t) {
				e = t.v;
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
				'ontario_icon_list',
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
								.addMonospaceText(' <ontario-icon-list> ')
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
						var t = e(this.colour, n);
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
							.addMonospaceText(' <ontario-icon-list> ')
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
						return i(
							'div',
							{
								class: 'ontario-icon ontario-icon--'
									.concat(this.iconColourState, ' ontario-icon--width-')
									.concat(this.iconWidthState),
								style: { width: ''.concat(this.iconWidthState, 'px') },
							},
							i(
								'svg',
								{
									class: 'svg-icon',
									style: { fill: ''.concat(this.iconCustomColourState), stroke: ''.concat(this.iconCustomColourState) },
									role: 'img',
									xmlns: 'http://www.w3.org/2000/svg',
									viewBox: '0 0 24 24',
									id: 'list',
								},
								i('path', {
									d: 'M4 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3zm0-6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3zm0 12c-.83 0-1.5.68-1.5 1.5A1.51 1.51 0 0 0 4 19.5 1.51 1.51 0 0 0 5.5 18c0-.82-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z',
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
