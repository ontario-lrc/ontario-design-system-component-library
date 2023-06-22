import { ConsoleMessage } from './console-message.interface';
import { ConsoleType } from './console-message.enum';
export declare function printConsoleMessage(
	messages: ConsoleMessage[] | string,
	consoleType?: ConsoleType,
	hasDesignSystemTag?: boolean,
): any;
export declare class ConsoleMessageClass {
	message: string;
	styles: string[];
	constructor();
	addDesignSystemTag(): this;
	addRegularText(text: string): this;
	addMonospaceText(text: string): this;
	printMessage(consoleType?: ConsoleType): void;
	private addText;
}
