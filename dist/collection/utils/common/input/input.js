var __rest =
	(this && this.__rest) ||
	function (s, e) {
		var t = {};
		for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
		if (s != null && typeof Object.getOwnPropertySymbols === 'function')
			for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
				if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
			}
		return t;
	};
import { h } from '@stencil/core';
export const Input = (_a) => {
	var { autoComplete, className, id, name, type, value, required, onKeyDown, onInput, onChange, onBlur, onFocus, ref } =
			_a,
		props = __rest(_a, [
			'autoComplete',
			'className',
			'id',
			'name',
			'type',
			'value',
			'required',
			'onKeyDown',
			'onInput',
			'onChange',
			'onBlur',
			'onFocus',
			'ref',
		]);
	return h(
		'input',
		Object.assign(
			{
				autoComplete: autoComplete,
				class: className,
				id: id,
				name: name,
				type: type,
				value: value,
				required: !!required,
				onKeyDown: onKeyDown,
				onInput: onInput,
				onChange: onChange,
				onBlur: onBlur,
				onFocus: onFocus,
				ref: ref,
			},
			props,
		),
	);
};
