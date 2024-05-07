'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88d5cf20.js');
const consoleMessage = require('./console-message-27a94faa.js');

const ontarioIconCss =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const OntarioIconInteracEnAltStyle0 = ontarioIconCss;

const OntarioIconInteracEnAlt = class {
	constructor(hostRef) {
		index.registerInstance(this, hostRef);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
	}
	/**
	 * Watch for changes in the `iconWidth` variable for validation purpose.
	 * If the user input is not a number or is a negative number then `iconWidth` will be set to its default (24).
	 */
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-interac-en-alt> ')
				.addRegularText(
					`${
						isNaN(this.iconWidth) ? 'was set to a non-numeric value' : 'was set to a negative number'
					}; only a positive number is allowed. The default size of`,
				)
				.addMonospaceText(' 24px ')
				.addRegularText('was assumed.')
				.printMessage();
			this.iconWidthState = 24;
		} else {
			this.iconWidthState = this.iconWidth;
		}
	}
	/**
	 * Validate that the `colour` attribute is not set by users
	 * Prints a warning message if the `colour` attribute is set
	 */
	validateColour() {
		if (this.host.hasAttribute('colour')) {
			const message = new consoleMessage.ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-interac-en-alt> ')
				.addRegularText('cannot be set. The provided colour is ignored.')
				.printMessage();
		}
	}
	/**
	 * Stencil component lifecycle method that is called once after the component is first connected to the DOM.
	 */
	componentWillLoad() {
		this.validateColour();
		this.validateWidth();
	}
	/**
	 * Returns the HTML code to be rendered into a custom element.
	 */
	render() {
		return index.h(
			'div',
			{
				key: '640bbcc8354d42cd9fe003a57a0a84e00591315a',
				class: `ontario-icon ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			index.h(
				'svg',
				{
					key: 'eaf464a7e29a4dc467cb8bff16ac2cbf10dfb42e',
					class: 'svg-icon',
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'interac-en-alt',
				},
				index.h('path', {
					key: '0bfd365d806f08241d0092043e28d6a8cf09cb17',
					d: 'M18.463 17.052H5.548a1.62 1.62 0 0 1-1.304-.693v5.093c0 .733.57 1.304 1.304 1.304h12.915c.733 0 1.304-.57 1.304-1.304V16.36c-.285.448-.774.693-1.304.693z',
					fill: '#636466',
				}),
				index.h('path', {
					key: 'aa56d328bfaf5e0352b0cf9d8e655c8627febba7',
					d: 'M5.548 16.808h12.915c.733 0 1.304-.57 1.304-1.304V2.59c0-.652-.49-1.222-1.14-1.304H5.59c-.733 0-1.304.57-1.304 1.304v12.915c-.04.733.53 1.304 1.263 1.304z',
					fill: '#ecaa20',
				}),
				index.h(
					'g',
					{ key: 'b8292c012ef1cdaa966d57917b2227e5aba22c63', fill: '#fff' },
					index.h('path', {
						key: '46ebe64ec4ade88b9c93f510cded1beed86c3a84',
						d: 'M18.463 1H5.548A1.55 1.55 0 0 0 4 2.548v18.904A1.55 1.55 0 0 0 5.548 23h12.915a1.55 1.55 0 0 0 1.548-1.548V2.548A1.55 1.55 0 0 0 18.463 1zM4.244 2.6c0-.733.57-1.304 1.304-1.304h13.037c.652.08 1.14.6 1.14 1.304v12.915c0 .733-.57 1.304-1.304 1.304H5.507c-.733 0-1.304-.57-1.304-1.304V2.6h.04zm15.522 18.904c0 .733-.57 1.304-1.304 1.304H5.548c-.733 0-1.304-.57-1.304-1.304V16.4a1.62 1.62 0 0 0 1.304.693h12.915a1.62 1.62 0 0 0 1.304-.693v5.093zM8.36 18.723c.774 0 .896.57.896 1.344s-.08 1.344-.896 1.344c-.774 0-.896-.57-.896-1.344 0-.815.08-1.344.896-1.344zm0 2.322c.326 0 .367-.285.367-.978s-.04-.978-.367-.978-.367.285-.367.978.04.978.367.978z',
					}),
					index.h('use', { key: 'bdc39602e53ba3ae9e2a986339cc20a0f94be479', href: '#B' }),
					index.h('path', {
						key: '98602d1ed1e566d4ae9a82c7dd5b8472e1f8b774',
						d: 'M11.985 18.763h-.5v2.607h.5v-2.607zm.448-.04h.5v.448h-.5v-.448zm0 .692h.5v1.956h-.5v-1.956z',
					}),
					index.h('use', { key: 'e66c1c664e96503f861e754c5f0aad1259e14d02', href: '#B', x: '3.748' }),
					index.h('path', {
						key: 'ee29b84135e9132c579d4d0661ba285dc26380e9',
						d: 'M15.652 20.473v.163c0 .245.08.448.244.448s.244-.122.285-.367h.448c0 .448-.244.693-.693.693-.733 0-.774-.57-.774-1.06 0-.53.082-1.018.774-1.018.57 0 .733.407.733.978v.122h-1.02v.04zm.49-.326c0-.285-.04-.448-.244-.448s-.244.204-.244.407v.08h.49v-.04z',
					}),
				),
				index.h(
					'g',
					{ key: 'f058edf71368c81cb7ec406f770b939d6f657887', fill: '#000' },
					index.h('path', {
						key: '99c756172701a5882fda16cedd7f382cc1e5ff6c',
						d: 'M6.526 10.004c-.204-.04-.367.04-.367.04V8.048l.733-.163v.326s.204-.448.733-.57c.57-.122.774.204.774.693v1.996l-.774.163V8.62c0-.285-.122-.367-.285-.326-.204.04-.367.285-.367.6v1.304c-.04-.04-.163-.204-.448-.204zm6.396-.774V6.46l.733-.163v.367s.204-.5.6-.57c.122-.04.204 0 .204 0v.693s-.163 0-.367.08c-.285.122-.407.326-.407.693v1.548l-.774.122z',
					}),
					index.h('path', {
						key: '27e756fe73671891d7f837424149f5aa7dc94a74',
						d: 'M9.093 10.126s-.122-.163-.122-.815V7.926l-.367.08v-.57l.367-.08v-.61l.774-.163v.61l.53-.122v.57l-.53.122V9.19c0 .652.163.774.163.774l-.815.163z',
					}),
					index.h('path', {
						key: '530f882819ef8bfe2498393407b5560441a26c71',
						d: 'M10.356 8.496c0-.5.08-.856.204-1.14.163-.326.5-.53.896-.652.856-.204 1.14.326 1.14.978v.367l-1.507.367v.04c0 .5.082.693.407.6.245-.04.326-.204.367-.407v-.122l.693-.163v.122c0 .285-.082.937-1.06 1.14-.896.244-1.14-.326-1.14-1.14zm1.14-1.263c-.244.04-.367.285-.367.693l.733-.163V7.64c.04-.326-.082-.448-.367-.407zm5.582-.367c-.04-.856.204-1.507 1.14-1.752.6-.122.815 0 .937.163s.163.326.163.6v.04l-.733.163v-.12c0-.326-.082-.448-.326-.367-.285.08-.407.326-.407.856v.244c0 .53.08.774.407.733.285-.04.326-.285.326-.53v-.122l.733-.163v.122c0 .693-.367 1.14-1.06 1.304-.978.244-1.18-.326-1.18-1.18zM14.5 8.048c0-.652.367-.856.937-1.1.53-.204.53-.326.53-.5s-.082-.285-.326-.204c-.244.04-.285.244-.326.367v.122l-.733.163s0-.204.04-.407c.122-.367.448-.652 1.06-.774.774-.163 1.018.163 1.018.693V7.64c0 .6.122.693.122.693l-.693.163s-.08-.122-.08-.244c0 0-.163.407-.693.53-.57.08-.856-.244-.856-.733zm1.467-.896s-.163.122-.367.204c-.245.122-.326.244-.326.5 0 .204.122.326.326.244.244-.04.367-.285.367-.57v-.367z',
					}),
					index.h('path', {
						'key': '5381822c005fd6a411ad39754bac2d520f67114d',
						'fill-rule': 'evenodd',
						'd': 'M7.178 11.184l1.222.856c.163.122.285.326.285.53v3.667H7.3a1.36 1.36 0 0 1-1.344-1.344v-4.155c0-.245.204-.49.49-.49a.47.47 0 0 1 .489.489v2.404c0 .08.04.122.122.122s.122-.04.122-.163v-1.915z',
					}),
					index.h('path', {
						key: '312aabe420160303b596a64ca1bdb406e4bc77d0',
						d: 'M4.693 11.47c-.04.082-.08.163-.08.244 0 .245.204.407.407.407h.08c.04 0 .326-.08.57-.122v-.733l-.978.204zm0 1.02c-.04.082-.08.163-.08.245 0 .244.204.407.407.407h.08c.04 0 .326-.082.57-.122v-.733l-.978.204zm0 1.018c-.04.082-.08.163-.08.244a.41.41 0 0 0 .407.408h.08c.04 0 .326-.082.57-.122v-.733l-.978.204zm.203-2.364v-4.48l.815-.204v4.482l-.815.204zM18.504 4.64c-.448 0-.767-.38-.767-.788a.77.77 0 0 1 .767-.774.75.75 0 0 1 .775.774c0 .407-.367.788-.775.788zm0-1.48c-.367 0-.693.326-.693.693s.326.693.693.693.693-.326.693-.693-.326-.693-.693-.693z',
					}),
					index.h('path', {
						key: '14db300b2de60557cabc38086bfb91975ceb3897',
						d: 'M18.22 3.404h.326c.122 0 .245.08.245.244 0 .122-.04.204-.163.244.08 0 .163.08.163.204V4.3c0 .04.04.08.04.08h-.163s-.04-.04-.04-.08v-.204c0-.122-.04-.163-.122-.163h-.122v.407h-.163v-.937zm.244.407c.08 0 .163-.04.163-.163s-.04-.163-.163-.163h-.122v.326h.122z',
					}),
				),
				index.h(
					'defs',
					{ key: 'cb6729b5f29fc8ef79090d760e698a520df15f53' },
					index.h('path', {
						key: '607d49bb6c72dc67bd3da2607bc7b78ad0608877',
						id: 'B',
						d: 'M9.582 19.414h.49v.244a.53.53 0 0 1 .489-.285c.326 0 .49.163.49.57v1.467h-.49v-1.344c0-.204-.082-.285-.204-.285-.163 0-.285.122-.285.326v1.304h-.49v-1.996z',
					}),
				),
			),
		);
	}
	get host() {
		return index.getElement(this);
	}
	static get watchers() {
		return {
			iconWidth: ['validateWidth'],
		};
	}
};
OntarioIconInteracEnAlt.style = OntarioIconInteracEnAltStyle0;

exports.ontario_icon_interac_en_alt = OntarioIconInteracEnAlt;

//# sourceMappingURL=ontario-icon-interac-en-alt.cjs.entry.js.map
