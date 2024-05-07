import { h } from '@stencil/core/internal/client';
import { C as CaptionTypes } from './input-caption.types.js';
import { C as ConsoleMessageClass } from './console-message.js';

var MessageContentType;
(function (MessageContentType) {
	MessageContentType['UndefinedCaptionObject'] = 'undefinedCaptionObject';
	MessageContentType['UndefinedCaptionText'] = 'undefinedCaption';
	MessageContentType['EmptyCaptionText'] = 'emptyCaption';
	MessageContentType['UndefinedCaptionType'] = 'undefinedCaptionType';
	MessageContentType['IncorrectCaptionType'] = 'incorrectCaptionType';
})(MessageContentType || (MessageContentType = {}));

class InputCaption {
	/**
	 * Set the class members
	 * Output a console warning message if the provided `label` type is incorrect
	 * @param caption object containing the essential data to configure the input label
	 */
	constructor(componentTagName, caption, translations, language, isLegend = false, required = false) {
		/**
		 * The type of caption to render.
		 */
		this.captionType = 'default';
		/**
		 * Determine whether the input field is required.
		 */
		this.required = false;
		/**
		 * Determine whether the rendered element is a `<label>` or `<legend>`.
		 */
		this.isLegend = false;
		this.language = 'en';
		/**
		 * Return the `<label>` element for text inputs
		 * @param captionFor Set the `htmlFor` attribute
		 * @returns element containing the caption for the input
		 */
		this.getCaption = (captionFor, hasHintExpander = false) => {
			const captionText = this.captionText && this.captionText.toLowerCase();
			const captionContent = this.isLegend
				? h(
						'legend',
						{ class: this.getClass() },
						this.captionType === 'heading' ? h('h1', null, this.captionText) : this.captionText,
						this.getRequiredFlagElement(),
						hasHintExpander && this.getHintExpanderAccessibilityText(captionText, false),
				  )
				: h(
						'label',
						{ htmlFor: captionFor, class: this.getClass() },
						this.captionText,
						this.getRequiredFlagElement(),
						hasHintExpander && this.getHintExpanderAccessibilityText(captionText, false),
				  );
			// with `this.captionType` already set to one of the enum values, the comparison no longer needs the `toLowerCase()` transform
			return this.captionType === 'heading' && !this.isLegend ? h('h1', null, captionContent) : captionContent;
		};
		let captionObject;
		if (typeof caption === 'string') {
			try {
				captionObject = JSON.parse(caption);
			} catch (_a) {
				captionObject = { captionText: caption, captionType: 'default' };
			}
		} else {
			captionObject = caption;
		}
		this.componentTagName = componentTagName.toLocaleLowerCase();
		this.captionText = captionObject === null || captionObject === void 0 ? void 0 : captionObject.captionText;
		this.captionType =
			((captionObject === null || captionObject === void 0 ? void 0 : captionObject.captionType) &&
				CaptionTypes.find((type) => {
					var _a;
					return type === ((_a = captionObject.captionType) === null || _a === void 0 ? void 0 : _a.toLowerCase());
				})) ||
			'default';
		this.required = required;
		this.isLegend = isLegend;
		this.translations = translations;
		this.language = language;
		this.validateCaption(this);
	}
	getHintExpanderAccessibilityText(captionText, hasHintExpanderOnOption = false) {
		const multipleOptionsMessage = h(
			'span',
			{ class: 'ontario-show-for-sr' },
			this.translations.accessibility.moreInfo[this.language],
			' "',
			captionText.toLowerCase(),
			'"',
			' ',
			this.translations.accessibility.checkboxHintExpander[this.language],
		);
		const singleOptionMessage = h(
			'span',
			{ class: 'ontario-show-for-sr' },
			this.translations.accessibility.moreInfo[this.language],
			' "',
			captionText.toLowerCase(),
			'"',
			' ',
			this.translations.accessibility.singleHintExpander[this.language],
		);
		return this.componentTagName === 'ontario-checkboxes'
			? !hasHintExpanderOnOption
				? multipleOptionsMessage
				: singleOptionMessage
			: singleOptionMessage;
	}
	/**
	 * Determines which flag text to use between `required` and `optional`
	 * @returns `required` or `optional` flag text
	 */
	getRequiredFlagText() {
		return this.required
			? this.translations && `(${this.translations.required[this.language]})`
			: this.translations && `(${this.translations.optional[this.language]})`;
	}
	/**
	 * Get the HTML for the required/optional flag.
	 * @returns CSS class for the label/legend.
	 */
	getRequiredFlagElement() {
		return h('span', { class: 'ontario-label__flag' }, this.getRequiredFlagText());
	}
	/**
	 * Get the CSS class for the `label` element.
	 * @returns CSS class for the `label` element.
	 */
	getClass() {
		return this.captionType === 'large' || this.captionType === 'heading'
			? this.isLegend
				? `ontario-fieldset__legend ontario-fieldset__legend--${this.captionType}`
				: `ontario-label ontario-label--${this.captionType}`
			: this.isLegend
			? 'ontario-fieldset__legend'
			: 'ontario-label';
	}
	/**
	 * Validate caption input by user and output warning message to the console if:
	 * 1. the `caption` object is not provided
	 * 2. the `captionText` property of the `caption` object is not provided
	 * 3. the `captionText` property of the `caption` object is empty or contain only spaces
	 * 4. the `captionType` property of the `caption` object is not provided
	 * 5. the `captionType` property of the `caption` object is incorrect
	 */
	validateCaption(caption) {
		var _a;
		let messageType;
		// undefined `caption` object
		if (!caption || Object.keys(caption).length <= 0) {
			messageType = MessageContentType.UndefinedCaptionObject;
		} else {
			// undefined `captionText` property
			if (!caption.captionText) {
				messageType = MessageContentType.UndefinedCaptionText;
			} else {
				// `captionText` that is empty or contains only spaces
				if (/^\s*$/.test(caption.captionText)) {
					messageType = MessageContentType.EmptyCaptionText;
				}
			}
			// undefined `captionType`
			if (!caption.captionType) {
				messageType = MessageContentType.UndefinedCaptionType;
			} else {
				// incorrect `captionType`
				if (
					!CaptionTypes.includes(
						(_a = caption === null || caption === void 0 ? void 0 : caption.captionType) === null || _a === void 0
							? void 0
							: _a.toLowerCase(),
					)
				) {
					messageType = MessageContentType.IncorrectCaptionType;
				}
			}
		}
		if (messageType) {
			const message = new ConsoleMessageClass().addDesignSystemTag();
			if (messageType !== MessageContentType.UndefinedCaptionObject) {
				message
					.addMonospaceText(
						` ${
							messageType === MessageContentType.EmptyCaptionText ||
							messageType === MessageContentType.UndefinedCaptionText
								? 'caption or captionText'
								: 'captionType'
						} `,
					)
					.addRegularText('object or property of');
			}
			message.addMonospaceText(' caption ').addRegularText('object on').addMonospaceText(` ${this.componentTagName} `);
			this.printConsoleMessage(messageType, message, this.getRequiredFlagText());
		}
	}
	/**
	 * Generate the content of warning message to be printed to the console
	 * @param messageType determine the content of warning message to output
	 * @param componentTagName the tag name of the component that's emitting the warning message
	 * @param requiredFlagText accepts a string value to be used as the required flag text and defaults to `(optional)` if not set
	 * @returns an array of `ConsoleMessage` objects containing the message and associated styles to be printed to the console
	 */
	printConsoleMessage(messageType, message, requiredFlagText = '(optional)') {
		switch (messageType) {
			// undefinedCaptionObject example: caption object on <ontario-input> is required but not defined. A blank followed by a (optional) flag is assumed.
			// undefinedCaptionText example: captionText property of caption object on <ontario-input> is required but not defined. A blank followed by a (optional) flag is assumed.
			// EmptyCaptionText example: captionText property of caption object on <ontario-input> is empty or contains only spaces. A blank followed by a (optional) flag is assumed.
			case MessageContentType.UndefinedCaptionObject:
			case MessageContentType.UndefinedCaptionText:
			case MessageContentType.EmptyCaptionText:
				message
					.addRegularText(
						`${
							messageType === MessageContentType.EmptyCaptionText
								? 'is empty or contains only spaces'
								: 'is required but not defined'
						}. A blank followed by a`,
					)
					.addMonospaceText(` ${requiredFlagText} `)
					.addRegularText('flag is assumed.');
				break;
			// UndefinedCaptionType example: captionType property of caption object on <ontario-input> is not defined. The default type is assumed.
			case MessageContentType.UndefinedCaptionType:
				message.addRegularText('is not defined. The').addMonospaceText(' default ').addRegularText('type is assumed.');
				break;
			// IncorrectCaptionType example: captionType property of caption object on <ontario-input> was set to an incorrect type; only default, heading or large type is allowed. The default type is assumed.
			case MessageContentType.IncorrectCaptionType:
				message
					.addRegularText('was set to an incorrect type; only')
					.addMonospaceText(' default, heading, ')
					.addRegularText('or')
					.addMonospaceText(' large ')
					.addRegularText('type is allowed. The')
					.addMonospaceText(' default ')
					.addRegularText('type is assumed.');
				break;
		}
		message.printMessage();
	}
}

var EventType;
(function (EventType) {
	EventType['Change'] = 'change';
	EventType['Blur'] = 'blur';
	EventType['Focus'] = 'focus';
	EventType['Input'] = 'input';
})(EventType || (EventType = {}));

const handleInputEvent = (
	event,
	eventType,
	input,
	inputChangeEvent,
	inputFocusEvent,
	inputBlurEvent,
	inputInputEvent,
	type,
	customChangeFunction,
	customFocusFunction,
	customBlurFunction,
	customInputFunction,
	hostElement,
) => {
	var _a;
	if (eventType === EventType.Input) {
		inputInputEvent === null || inputInputEvent === void 0
			? void 0
			: inputInputEvent.emit({
					id: input === null || input === void 0 ? void 0 : input.id,
					value: (_a = event.data) !== null && _a !== void 0 ? _a : undefined,
					inputType: event.inputType,
			  });
		customInputFunction && customInputFunction(event);
	}
	if (eventType === EventType.Change) {
		if (type === 'radio' || type === 'checkbox') {
			if (input instanceof HTMLInputElement) {
				inputChangeEvent.emit({
					checked: input === null || input === void 0 ? void 0 : input.checked,
					id: input === null || input === void 0 ? void 0 : input.id,
					value: input === null || input === void 0 ? void 0 : input.value,
				});
			}
		} else {
			inputChangeEvent.emit({
				id: input === null || input === void 0 ? void 0 : input.id,
				value: input === null || input === void 0 ? void 0 : input.value,
			});
		}
		customChangeFunction && customChangeFunction(event);
		// Note: Change events don't have composable set to true and don't cross the ShadowDOM boundary.
		// This will emit an event so the normal `onChange` event pattern is maintained.
		hostElement && emitEvent(hostElement, eventType, event);
	}
	if (eventType === EventType.Focus) {
		inputFocusEvent.emit({
			id: input === null || input === void 0 ? void 0 : input.id,
			focused: true,
			value: input === null || input === void 0 ? void 0 : input.value,
		});
		customFocusFunction && customFocusFunction(event);
	}
	if (eventType === EventType.Blur) {
		inputBlurEvent.emit({
			id: input === null || input === void 0 ? void 0 : input.id,
			focused: false,
			value: input === null || input === void 0 ? void 0 : input.value,
		});
		customBlurFunction && customBlurFunction(event);
	}
};
/**
 * Emit a custom event that can be subscribed to by an event listener.
 *
 * @param element Component host element, see https://stenciljs.com/docs/host-element
 * @param name name of the event
 * @param detail any relevant details, like the original event
 */
const emitEvent = (element, name, detail) => {
	element.dispatchEvent(new CustomEvent(name, { composed: true, bubbles: true, detail }));
};

export { EventType as E, InputCaption as I, emitEvent as e, handleInputEvent as h };

//# sourceMappingURL=event-handler.js.map
