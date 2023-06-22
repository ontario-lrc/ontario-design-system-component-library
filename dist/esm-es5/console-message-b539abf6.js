var __spreadArray =
	(this && this.__spreadArray) ||
	function (e, o, t) {
		if (t || arguments.length === 2)
			for (var n = 0, s = o.length, r; n < s; n++) {
				if (r || !(n in o)) {
					if (!r) r = Array.prototype.slice.call(o, 0, n);
					r[n] = o[n];
				}
			}
		return e.concat(r || Array.prototype.slice.call(o));
	};
var ConsoleType;
(function (e) {
	e['Error'] = 'error';
	e['Info'] = 'info';
	e['Log'] = 'log';
	e['Warning'] = 'warning';
})(ConsoleType || (ConsoleType = {}));
var MessageStyle;
(function (e) {
	e['Regular'] = 'regular';
	e['Code'] = 'code';
})(MessageStyle || (MessageStyle = {}));
var designSystemTag = 'Ontario Design System';
var fontSize = '12px';
var tagStyles = [
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
var regularTextStyles = ['font-family: sans-serif', 'font-size: '.concat(fontSize)].join(';');
var monospaceTextStyles = ['font-family: monospace', 'font-size: '.concat(fontSize)].join(';');
function addSpecifier(e) {
	var o = '%c';
	return o.concat(e);
}
var ConsoleMessageClass = (function () {
	function e() {
		this.message = '';
		this.styles = [];
	}
	e.prototype.addDesignSystemTag = function () {
		this.message = addSpecifier(designSystemTag);
		this.styles.push(tagStyles);
		return this;
	};
	e.prototype.addRegularText = function (e) {
		this.addText(e, regularTextStyles);
		return this;
	};
	e.prototype.addMonospaceText = function (e) {
		this.addText(e, monospaceTextStyles);
		return this;
	};
	e.prototype.printMessage = function (e) {
		if (e === void 0) {
			e = ConsoleType.Warning;
		}
		var o = __spreadArray([this.message], this.styles, true);
		switch (e) {
			case ConsoleType.Error:
				console.error.apply(null, o);
				break;
			case ConsoleType.Info:
				console.info.apply(null, o);
				break;
			case ConsoleType.Warning:
				console.warn.apply(null, o);
				break;
			default:
				console.log.apply(null, o);
		}
	};
	e.prototype.addText = function (e, o) {
		if (e && (e === null || e === void 0 ? void 0 : e.trim().length) > 0) {
			this.message += addSpecifier(e);
			this.styles.push(o);
		}
	};
	return e;
})();
export { ConsoleMessageClass as C, ConsoleType as a };
