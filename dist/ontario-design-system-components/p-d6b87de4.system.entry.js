System.register(['./p-612c708e.system.js', './p-ea38536e.system.js', './p-631d2c16.system.js'], function (o) {
	'use strict';
	var t, i, e, n, a, s;
	return {
		setters: [
			function (o) {
				t = o.r;
				i = o.h;
			},
			function (o) {
				e = o.v;
				n = o.I;
				a = o.d;
			},
			function (o) {
				s = o.C;
			},
		],
		execute: function () {
			var r =
				'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
			var c = o(
				'ontario_icon_microphone_off',
				(function () {
					function o(o) {
						t(this, o);
						this.iconWidth = 24;
						this.iconWidthState = undefined;
						this.colour = 'black';
						this.iconColourState = undefined;
						this.iconCustomColourState = undefined;
					}
					o.prototype.validateWidth = function () {
						if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
							var o = new s();
							o.addDesignSystemTag()
								.addMonospaceText(' icon-width ')
								.addRegularText('on')
								.addMonospaceText(' <ontario-icon-microphone-off> ')
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
						var o = e(this.colour, n);
						if (o) {
							this.iconColourState = this.colour;
						} else {
							if (a(this.colour)) {
								this.iconCustomColourState = this.colour;
							} else {
								this.iconColourState = this.warnDefaultColour();
							}
						}
					};
					o.prototype.warnDefaultColour = function () {
						var o = new s();
						o.addDesignSystemTag()
							.addMonospaceText(' colour ')
							.addRegularText('on')
							.addMonospaceText(' <ontario-icon-microphone-off> ')
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
									id: 'microphone-off',
								},
								i('path', {
									d: 'M19 11c0 1.2-.34 2.3-.9 3.28l-1.23-1.23c.27-.62.43-1.3.43-2.05H19zm-4 .16L9 5.18V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v6.16zM4.27 3L21 19.73 19.73 21l-4.2-4.2a7.03 7.03 0 0 1-2.54.91V21h-2v-3.28c-3.28-.5-6-3.3-6-6.72h1.7c0 3 2.54 5.1 5.3 5.1.8 0 1.6-.2 2.3-.52l-1.66-1.66L12 14a3 3 0 0 1-3-3v-.72l-6-6L4.27 3z',
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
				})(),
			);
			c.style = r;
		},
	};
});
