import { ConsoleType, MessageStyle } from './console-message.enum';
// system tag with formatting specifier
const designSystemTag = 'Ontario Design System';
// default font size for console messages
const fontSize = '12px';
// styles for the system tag in a string format
// the `background-color`, `color`, `padding` and `border-radius` values are hardcoded because
// they are specific for console message use case
const tagStyles = [
	'background-color: #367A76',
	'border: none',
	'color: white',
	'padding: 2px 5px',
	'text-align: center',
	'text-decoration: none',
	'display: inline-block',
	'cursor: pointer',
	'border-radius: 5px',
].join(';');
// styles for regular text in string format
const regularTextStyles = ['font-family: sans-serif', `font-size: ${fontSize}`].join(';');
// styles for code in string format
const monospaceTextStyles = ['font-family: monospace', `font-size: ${fontSize}`].join(';');
function addSpecifier(message) {
	const styleSpecifier = '%c';
	return styleSpecifier.concat(message);
}
// print message to console depending on the `ConsoleType`
export function printConsoleMessage(messages, consoleType = ConsoleType.Warning, hasDesignSystemTag = true) {
	// retrieve message from each object and concatenate them into one single string in order
	// if `hasSystemTag` is true then the message string will being with the value stored within `designSystemTag`.
	const message =
		typeof messages === 'string' // Note the TypeScript transpiler Stencil is using doesn't like this type guard as a const.
			? `${addSpecifier(designSystemTag)}${addSpecifier(` ${messages}`)}`
			: messages === null || messages === void 0
			? void 0
			: messages.reduce(
					(message, currentObject) => {
						var _a;
						return (message += (_a = addSpecifier(currentObject.message)) !== null && _a !== void 0 ? _a : '');
					},
					hasDesignSystemTag ? addSpecifier(designSystemTag) : '',
			  );
	// array of arguments to be passed into the the console function
	const messageArray = [];
	// push message into the array of arguments
	// depending on whether the system tag is used (i.e. `hasSystemTag` is true), push `tagStyles` into the array
	if (hasDesignSystemTag) {
		messageArray.push(message, tagStyles);
	} else {
		messageArray.push(message);
	}
	// Note the TypeScript transpiler Stencil is using doesn't like this type guard as a const.
	if (typeof messages === 'string') {
		messageArray.push(regularTextStyles);
	} else {
		// push style of each message into the array of arguments in order
		messages === null || messages === void 0
			? void 0
			: messages.forEach((message) => {
					messageArray.push(
						message.style && message.style === MessageStyle.Code ? monospaceTextStyles : regularTextStyles,
					);
			  });
	}
	// pass array of arguments into the console function for printing depending on `consoleType`
	// the `function.apply()` function handles array of arguments which allows list of arguments to be set programmatically
	switch (consoleType) {
		case ConsoleType.Error:
			return console.error.apply(null, messageArray);
		case ConsoleType.Info:
			return console.info.apply(null, messageArray);
		case ConsoleType.Warning:
			return console.warn.apply(null, messageArray);
		default:
			return console.log.apply(null, messageArray);
	}
}
// build and print console message with a fluent interface design
export class ConsoleMessageClass {
	constructor() {
		this.message = '';
		this.styles = [];
	}
	// add the `Ontario Design System` tag to the beginning of the message
	// the first call in the chain if a tag is required
	addDesignSystemTag() {
		this.message = addSpecifier(designSystemTag);
		this.styles.push(tagStyles);
		return this;
	}
	// build console message as regular text
	addRegularText(text) {
		this.addText(text, regularTextStyles);
		return this;
	}
	// build console message as monospace text
	addMonospaceText(text) {
		this.addText(text, monospaceTextStyles);
		return this;
	}
	// print message to console depending on the `ConsoleType`
	// the last function call in the chain
	printMessage(consoleType = ConsoleType.Warning) {
		const messageArray = [this.message, ...this.styles];
		// pass array of arguments into the console function for printing depending on `consoleType`
		// the `function.apply()` function handles array of arguments which allows list of arguments to be set programmatically
		switch (consoleType) {
			case ConsoleType.Error:
				console.error.apply(null, messageArray);
				break;
			case ConsoleType.Info:
				console.info.apply(null, messageArray);
				break;
			case ConsoleType.Warning:
				console.warn.apply(null, messageArray);
				break;
			default:
				console.log.apply(null, messageArray);
		}
	}
	// add text to the `message` property and associated styles into the `styles` array
	addText(text, style) {
		if (text && (text === null || text === void 0 ? void 0 : text.trim().length) > 0) {
			this.message += addSpecifier(text);
			this.styles.push(style);
		}
	}
}
//# sourceMappingURL=console-message.js.map
