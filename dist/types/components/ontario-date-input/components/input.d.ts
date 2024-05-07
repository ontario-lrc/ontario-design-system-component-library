import { FunctionalComponent } from '../../../stencil-public-runtime';
import { DateInputFieldType } from '../ontario-date-input-interface';
export type InputProps = {
	id: string;
	type: DateInputFieldType;
	label: string;
	accessibilityLabel: string;
	error?: boolean;
	onInput: (value: string, fieldType: DateInputFieldType) => void;
	onChange: (value: string, fieldType: DateInputFieldType) => void;
	onBlur: (fieldType: DateInputFieldType) => void;
	onFocus: (fieldType: DateInputFieldType) => void;
	placeholder?: string;
	required?: boolean;
	ariaDescribedBy?: string;
};
export declare const Input: FunctionalComponent<InputProps>;
