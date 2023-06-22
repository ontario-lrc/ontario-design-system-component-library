export const handleInputEvent = (
	ev,
	eventType,
	input,
	inputChangeEvent,
	inputFocusEvent,
	inputBlurEvent,
	type,
	customChangeFunction,
	customFocusFunction,
	customBlurFunction,
) => {
	if (eventType === 'change') {
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
		customChangeFunction && customChangeFunction(ev);
	}
	if (eventType === 'focus') {
		inputFocusEvent.emit({
			id: input === null || input === void 0 ? void 0 : input.id,
			focused: true,
			value: input === null || input === void 0 ? void 0 : input.value,
		});
		customFocusFunction && customFocusFunction(ev);
	}
	if (eventType === 'blur') {
		inputBlurEvent.emit({
			id: input === null || input === void 0 ? void 0 : input.id,
			focused: false,
			value: input === null || input === void 0 ? void 0 : input.value,
		});
		customBlurFunction && customBlurFunction(ev);
	}
};
