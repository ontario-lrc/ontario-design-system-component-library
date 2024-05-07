import { r as registerInstance, h, g as getElement } from './index-603026f7.js';
import { C as ConsoleMessageClass } from './console-message-0b8e564e.js';

const ontarioIconCss =
	'.ontario-icon svg,.ontario-icon{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:middle;overflow:hidden}.ontario-icon--blue svg{stroke:#0066CC;fill:#0066CC}.ontario-icon--grey svg{stroke:#666666;fill:#666666}.ontario-icon--black svg{stroke:#1A1A1A;fill:#1A1A1A}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}.ontario-icon--white svg{stroke:#FFFFFF;fill:#FFFFFF}';
const OntarioIconInteracFrAltStyle0 = ontarioIconCss;

const OntarioIconInteracFrAlt = class {
	constructor(hostRef) {
		registerInstance(this, hostRef);
		this.iconWidth = 24;
		this.iconWidthState = undefined;
	}
	/**
	 * Watch for changes in the `iconWidth` variable for validation purpose.
	 * If the user input is not a number or is a negative number then `iconWidth` will be set to its default (24).
	 */
	validateWidth() {
		if (isNaN(this.iconWidth) || (!isNaN(this.iconWidth) && this.iconWidth <= 0)) {
			const message = new ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' icon-width ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-interac-fr-alt> ')
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
			const message = new ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addMonospaceText(' colour ')
				.addRegularText('on')
				.addMonospaceText(' <ontario-icon-interac-fr-alt> ')
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
		return h(
			'div',
			{
				key: '7834971559387f57d1c664c894f41c8ac9c17029',
				class: `ontario-icon ontario-icon--width-${this.iconWidthState}`,
				style: { width: `${this.iconWidthState}px` },
			},
			h(
				'svg',
				{
					key: '16ed182057d2b726ec5b53c720f26b1e16c51866',
					class: 'svg-icon',
					role: 'img',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					id: 'interac-fr-alt',
				},
				h('path', {
					key: 'bdb3ae5d30ab2824f2b7da5488e2269cf8200b3d',
					d: 'M18.463 17.052H5.548a1.62 1.62 0 0 1-1.304-.693v5.093c0 .733.57 1.304 1.304 1.304h12.915c.733 0 1.304-.57 1.304-1.304V16.36c-.285.448-.774.693-1.304.693z',
					fill: '#636466',
				}),
				h('path', {
					key: 'f4abbdb7c27ce31153940918414467d663e18642',
					d: 'M5.548 16.807h12.915c.733 0 1.304-.57 1.304-1.304V2.59c0-.652-.49-1.222-1.14-1.304H5.548c-.733 0-1.304.57-1.304 1.304v12.915c0 .733.57 1.304 1.304 1.304z',
					fill: '#ecaa20',
				}),
				h(
					'g',
					{ key: 'a39c353de39e9e72fce49ff0b2d4f0116db95f01', fill: '#fff' },
					h('path', {
						key: 'b1ecc2cbbbdcb140cd5bfaffc11d569ba2021505',
						d: 'M18.463 1H5.548A1.55 1.55 0 0 0 4 2.548v18.904A1.55 1.55 0 0 0 5.548 23h12.915a1.55 1.55 0 0 0 1.548-1.548V2.548C20.052 1.693 19.36 1 18.463 1zM4.244 2.6c0-.733.57-1.304 1.304-1.304h13.037c.652.08 1.14.6 1.14 1.304v12.915c0 .733-.57 1.304-1.304 1.304H5.548c-.733 0-1.304-.57-1.304-1.304V2.6zm15.522 18.904c0 .733-.57 1.304-1.304 1.304H5.548c-.733 0-1.304-.57-1.304-1.304V16.4a1.62 1.62 0 0 0 1.304.693h12.915a1.62 1.62 0 0 0 1.304-.693v5.093zM7.83 18.764v.407h-.937v.6h.856v.448h-.856v.693h.937v.448H6.363v-2.607H7.83zm.326.65h.5v.244a.53.53 0 0 1 .489-.285c.326 0 .5.163.5.57V21.4h-.5v-1.344c0-.204-.08-.285-.204-.285-.163 0-.285.122-.285.326V21.4h-.5v-1.996zm3.137-.65h-.5v2.607h.5v-2.607zm.447-.04h.5v.448h-.5v-.448zm0 .692h.5v1.956h-.5v-1.956zm2.364.001V21.3c0 .53-.244.774-.815.774-.407 0-.652-.204-.652-.53h.5c0 .082.04.122.082.163s.122.04.163.04c.204 0 .285-.163.285-.367v-.285c-.122.163-.245.245-.407.245-.407 0-.6-.285-.6-.978 0-.448.08-1.018.6-1.018.122 0 .326.082.407.285v-.204h.448zm-.733 1.548c.204 0 .285-.244.285-.57 0-.5-.082-.652-.245-.652-.204 0-.244.163-.244.693-.082.285-.04.53.204.53z',
					}),
					h('path', {
						key: '2a70a3a66e1e78e529dea9be7fe476169498c662',
						d: 'M14.5 19.414h.5v.244a.53.53 0 0 1 .489-.285c.326 0 .5.163.5.57V21.4h-.5v-1.344c0-.204-.08-.285-.204-.285-.163 0-.285.122-.285.326V21.4h-.5v-1.996zm2.323 1.06v.163c0 .244.08.448.244.448s.244-.122.285-.367h.448c0 .448-.244.693-.692.693-.733 0-.774-.57-.774-1.06 0-.53.122-1.018.774-1.018.57 0 .733.407.733.978v.122h-1.018v.04zm.53-.326c0-.285-.04-.448-.244-.448s-.245.204-.245.407v.08h.5v-.04z',
					}),
				),
				h(
					'g',
					{ key: '1ce9619f78a5c66db5cfa5bc37bb78723d22ec49', fill: '#000' },
					h('path', {
						key: '24ab26ef3ec099bcb9404c1e300c5c1913694853',
						d: 'M6.567 10.004c-.204 0-.367.04-.367.04V8.048l.733-.163v.326s.204-.448.733-.57c.57-.122.774.204.774.693v1.996l-.774.163V8.62c0-.285-.122-.367-.285-.326-.204.04-.367.285-.367.6v1.304c-.08-.04-.204-.204-.448-.204zm6.355-.774V6.46l.733-.163v.367s.204-.5.6-.57c.122-.04.204 0 .204 0v.693s-.163 0-.367.08c-.285.122-.407.326-.407.693v1.548l-.774.122z',
					}),
					h('path', {
						key: '5512817094e6f9ffe20ce6b0aa479cc3468fb2d1',
						d: 'M9.093 10.127s-.122-.163-.122-.815V7.926l-.367.08v-.57l.367-.08v-.61l.774-.163v.61l.53-.122v.57l-.53.122V9.19c0 .652.163.774.163.774l-.815.163z',
					}),
					h('path', {
						key: '5b2a0d2e260fad90e943ed837cfc411772a34153',
						d: 'M10.356 8.495c0-.5.08-.856.204-1.14.163-.326.5-.53.896-.652.856-.204 1.14.326 1.14.978v.367l-1.507.367v.04c0 .5.082.693.407.6.245-.04.326-.204.367-.407v-.122l.693-.163v.122c0 .285-.082.937-1.06 1.14-.896.204-1.14-.326-1.14-1.14zm1.18-1.263c-.245.04-.367.285-.367.693l.733-.163V7.64c0-.326-.08-.448-.367-.407zm5.542-.366c-.04-.856.204-1.507 1.14-1.752.6-.122.815 0 .937.163s.163.326.163.6v.04l-.733.163v-.12c0-.326-.082-.448-.326-.367-.285.08-.407.326-.407.856v.244c0 .53.08.774.407.733.285-.04.326-.285.326-.53v-.122l.733-.163v.122c0 .693-.367 1.14-1.06 1.304-.978.244-1.14-.326-1.18-1.18zM14.5 8.048c0-.652.367-.856.937-1.1.53-.204.53-.326.53-.5s-.082-.285-.326-.204c-.244.04-.285.244-.326.367v.122l-.733.163s0-.204.04-.407c.122-.367.448-.652 1.06-.774.774-.163 1.018.163 1.018.693V7.64c0 .6.122.693.122.693l-.693.122s-.08-.122-.08-.244c0 0-.163.407-.693.53s-.856-.204-.856-.693zm1.467-.896s-.163.122-.367.204c-.244.122-.326.244-.326.5 0 .204.122.326.326.244.245-.04.367-.285.367-.57v-.367z',
					}),
					h('path', {
						'key': 'abe48a3673d3a3f36b53ce10464e80ce99ab569e',
						'fill-rule': 'evenodd',
						'd': 'M7.218 11.185l1.222.855c.163.122.285.326.285.53v3.667H7.34a1.36 1.36 0 0 1-1.344-1.344v-4.156c0-.244.204-.49.49-.49a.47.47 0 0 1 .489.489v2.404c0 .082.04.122.122.122s.122-.04.122-.163v-1.915z',
					}),
					h('use', { key: 'd6828c955c7c78cdf87251929a1161d568c7f91b', href: '#B2' }),
					h('path', {
						key: '319293d55800c269cf6b7b370182324b849b4ab6',
						d: 'M4.693 12.49c-.04.08-.08.163-.08.244 0 .245.204.407.407.407h.08c.04 0 .326-.082.57-.122v-.733l-.978.204z',
					}),
					h('use', { key: '3baf26f66cfef267d5181bd221bec5d7c57d7086', href: '#B2', y: '2.036' }),
					h('path', {
						key: 'd38872600ad9613e59d818fe1bdc085ccd80b3ab',
						d: 'M4.896 11.144v-4.48l.815-.204v4.482l-.815.204zM17.7 3.484h.244l.163.733.163-.733h.244v.978h-.163v-.815l-.163.815h-.163l-.163-.815h-.04v.815H17.7v-.978z',
					}),
					h('path', {
						key: '75b2072568cfd89cce6d60a8e7679a3a94cb2e67',
						d: 'M18.667 3.484h.285c.285 0 .326.204.326.49s-.04.49-.326.49h-.285v-.978zm.163.856h.122c.122 0 .163-.08.163-.367s-.04-.367-.163-.367h-.122v.733z',
					}),
				),
				h(
					'defs',
					{ key: '8a93f26fcbc42599a0fd45c4b5000c1af78ff989' },
					h('path', {
						key: 'f6e6508dd562c961abd28239f562ab4090390882',
						id: 'B2',
						d: 'M4.693 11.47c-.04.082-.08.163-.08.245 0 .244.204.407.407.407h.08c.04 0 .326-.082.57-.122v-.733l-.978.204z',
					}),
				),
			),
		);
	}
	get host() {
		return getElement(this);
	}
	static get watchers() {
		return {
			iconWidth: ['validateWidth'],
		};
	}
};
OntarioIconInteracFrAlt.style = OntarioIconInteracFrAltStyle0;

export { OntarioIconInteracFrAlt as ontario_icon_interac_fr_alt };

//# sourceMappingURL=ontario-icon-interac-fr-alt.entry.js.map
