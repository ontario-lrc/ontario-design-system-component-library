import { EventEmitter } from '../../stencil-public-runtime';
import {
	InputType,
	EventType,
	InputFocusBlurEvent,
	InputInteractionEvent,
	RadioAndCheckboxChangeEvent,
	InputInputEvent,
} from './event-handler.interface';
export declare const handleInputEvent: (
	event: Event,
	eventType: EventType,
	input: InputType,
	inputChangeEvent: EventEmitter<InputInteractionEvent | RadioAndCheckboxChangeEvent>,
	inputFocusEvent: EventEmitter<InputFocusBlurEvent>,
	inputBlurEvent: EventEmitter<InputFocusBlurEvent>,
	inputInputEvent?: EventEmitter<InputInputEvent>,
	type?: string,
	customChangeFunction?: ((event: Event) => void) | undefined,
	customFocusFunction?: ((event: Event) => void) | undefined,
	customBlurFunction?: ((event: Event) => void) | undefined,
	customInputFunction?: ((event: Event) => void) | undefined,
	hostElement?: HTMLElement,
) => void;
/**
 * Emit a custom event that can be subscribed to by an event listener.
 *
 * @param element Component host element, see https://stenciljs.com/docs/host-element
 * @param name name of the event
 * @param detail any relevant details, like the original event
 */
export declare const emitEvent: (element: HTMLElement, name: string, detail?: any) => void;
