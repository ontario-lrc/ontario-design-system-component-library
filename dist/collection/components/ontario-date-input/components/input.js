import { h } from '@stencil/core';
import { Input as CommonInput } from '../../../utils/common/input/input';
export const Input = ({
	id,
	type,
	label,
	accessibilityLabel,
	placeholder,
	onInput,
	onChange,
	onFocus,
	onBlur,
	ariaDescribedBy,
	error = false,
	required = false,
}) => {
	const handleInputInput = (event) => {
		var _a, _b;
		const newValue =
			(_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
		onInput(newValue, type);
	};
	const handleInputChange = (event) => {
		var _a, _b;
		const newValue =
			(_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
		onChange(newValue, type);
	};
	const handleInputFocus = () => {
		onFocus(type);
	};
	const handleInputBlur = () => {
		onBlur(type);
	};
	return h(
		'div',
		{ class: `ontario-date__group-input ${error ? 'ontario-date--error' : ''}` },
		h('label', { htmlFor: id }, label, h('span', { class: 'ontario-show-for-sr' }, '(', accessibilityLabel, ')')),
		h(CommonInput, {
			className: 'ontario-input ontario-input--4-char-width',
			type: 'text',
			inputMode: 'numeric',
			id: id,
			required: !!required,
			placeholder: placeholder,
			onInput: handleInputInput,
			onChange: handleInputChange,
			onFocus: handleInputFocus,
			onBlur: handleInputBlur,
			ariaInvalid: error,
			ariaDescribedBy: ariaDescribedBy,
		}),
	);
};
//# sourceMappingURL=input.js.map
