var n;
(function (n) {
	n['Error'] = 'error';
	n['Info'] = 'info';
	n['Log'] = 'log';
	n['Warning'] = 'warning';
})(n || (n = {}));
var t;
(function (n) {
	n['Regular'] = 'regular';
	n['Code'] = 'code';
})(t || (t = {}));
const o = 'Ontario Design System';
const s = '12px';
const e = [
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
const i = ['font-family: sans-serif', `font-size: ${s}`].join(';');
const r = ['font-family: monospace', `font-size: ${s}`].join(';');
function a(n) {
	const t = '%c';
	return t.concat(n);
}
class c {
	constructor() {
		this.message = '';
		this.styles = [];
	}
	addDesignSystemTag() {
		this.message = a(o);
		this.styles.push(e);
		return this;
	}
	addRegularText(n) {
		this.addText(n, i);
		return this;
	}
	addMonospaceText(n) {
		this.addText(n, r);
		return this;
	}
	printMessage(t = n.Warning) {
		const o = [this.message, ...this.styles];
		switch (t) {
			case n.Error:
				console.error.apply(null, o);
				break;
			case n.Info:
				console.info.apply(null, o);
				break;
			case n.Warning:
				console.warn.apply(null, o);
				break;
			default:
				console.log.apply(null, o);
		}
	}
	addText(n, t) {
		if (n && (n === null || n === void 0 ? void 0 : n.trim().length) > 0) {
			this.message += a(n);
			this.styles.push(t);
		}
	}
}
export { c as C, n as a };
//# sourceMappingURL=p-55c48d50.js.map
