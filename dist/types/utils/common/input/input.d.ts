import { FunctionalComponent } from '../../../stencil-public-runtime';
export declare type InputProps = {
	autoComplete?: string;
	className?: string;
	id: string;
	name?: string;
	type: string;
	value?: string | number;
	required?: boolean;
	onKeyDown?: ((event: Event) => void) | undefined;
	onInput?: ((event: Event) => void) | undefined;
	onChange?: ((event: Event) => void) | undefined;
	onBlur?: ((event: Event) => void) | undefined;
	onFocus?: ((event: Event) => void) | undefined;
	ref?: (el: any) => HTMLElement;
};
export declare const Input: FunctionalComponent<InputProps>;
