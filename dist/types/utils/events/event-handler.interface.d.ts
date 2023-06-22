export declare enum EventType {
	Change = 'change',
	Blur = 'blur',
	Focus = 'focus',
}
export declare type RadioAndCheckboxChangeEvent = {
	checked: boolean;
	id: string;
	value: string;
	emit: any;
};
export declare type InputChangeEvent = {
	id: string;
	value: string;
	emit: any;
};
export declare type InputFocusBlurEvent = {
	focused: boolean;
	id: string;
	value: string;
	emit: any;
};
export declare type InputType = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
