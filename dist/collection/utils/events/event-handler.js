import { EventType } from './event-handler.interface';
export const handleInputEvent = (
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
export const emitEvent = (element, name, detail) => {
	element.dispatchEvent(new CustomEvent(name, { composed: true, bubbles: true, detail }));
};
//# sourceMappingURL=event-handler.js.map
