System.register(['./p-612c708e.system.js', './p-631d2c16.system.js'], function (t) {
	'use strict';
	var o, e, i, n;
	return {
		setters: [
			function (t) {
				o = t.r;
				e = t.h;
				i = t.g;
			},
			function (t) {
				n = t.C;
			},
		],
		execute: function () {
			var a =
				'.ontario-icon svg{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
			var r = t(
				'ontario_icon_dropdown_arrow',
				(function () {
					function t(t) {
						o(this, t);
						this.iconWidth = 24;
						this.iconWidthState = undefined;
					}
					t.prototype.validateWidth = function () {
						if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
							var t = new n();
							t.addDesignSystemTag()
								.addMonospaceText(' icon-width ')
								.addRegularText('on')
								.addMonospaceText(' <ontario-icon-dropdown-arrow> ')
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
								.addMonospaceText(' <ontario-icon-dropdown-arrow> ')
								.addRegularText('cannot be set. The provided colour is ignored.')
								.printMessage();
						}
					};
					t.prototype.componentWillLoad = function () {
						this.validateColour();
						this.validateWidth();
					};
					t.prototype.render = function () {
						return e(
							'div',
							{
								class: 'ontario-icon ontario-icon--width-'.concat(this.iconWidthState),
								style: { width: ''.concat(this.iconWidthState, 'px') },
							},
							e(
								'svg',
								{
									class: 'svg-icon',
									role: 'img',
									xmlns: 'http://www.w3.org/2000/svg',
									fill: 'none',
									viewBox: '0 0 24 24',
									id: 'dropdown-arrow',
								},
								e('path', {
									d: 'M7.965 10a.4.4 0 0 0-.37.247.4.4 0 0 0 .087.436l4.035 4.035a.4.4 0 0 0 .566 0l4.035-4.035a.4.4 0 0 0 .087-.436.4.4 0 0 0-.37-.247h-8.07z',
								}),
							),
						);
					};
					Object.defineProperty(t.prototype, 'host', {
						get: function () {
							return i(this);
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
