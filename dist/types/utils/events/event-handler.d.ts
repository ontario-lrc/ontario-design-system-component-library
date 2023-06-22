import { EventEmitter } from '../../stencil-public-runtime';
import { InputType, EventType } from './event-handler.interface';
export declare const handleInputEvent: (
	ev: Event,
	eventType: EventType,
	input: InputType,
	inputChangeEvent: EventEmitter,
	inputFocusEvent: EventEmitter,
	inputBlurEvent: EventEmitter,
	type?: string,
	customChangeFunction?: Function,
	customFocusFunction?: Function,
	customBlurFunction?: Function,
) => void;
