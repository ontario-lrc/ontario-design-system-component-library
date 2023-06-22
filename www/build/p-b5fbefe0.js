var n, e;
!(function (n) {
	(n.Error = 'error'), (n.Info = 'info'), (n.Log = 'log'), (n.Warning = 'warning');
})(n || (n = {})),
	(function (n) {
		(n.Regular = 'regular'), (n.Code = 'code');
	})(e || (e = {}));
const t = [
		'background-color: #367A76',
		'border: none',
		'color: white',
		'padding: 2px 5px',
		'text-align: center',
		'text-decoration: none',
		'display: inline-block',
		'cursor: pointer',
		'border-radius: 5px',
	].join(';'),
	o = ['font-family: sans-serif', 'font-size: 12px'].join(';'),
	s = ['font-family: monospace', 'font-size: 12px'].join(';');
function i(n) {
	return '%c'.concat(n);
}
class r {
	constructor() {
		(this.message = ''), (this.styles = []);
	}
	addDesignSystemTag() {
		return (this.message = i('Ontario Design System')), this.styles.push(t), this;
	}
	addRegularText(n) {
		return this.addText(n, o), this;
	}
	addMonospaceText(n) {
		return this.addText(n, s), this;
	}
	printMessage(e = n.Warning) {
		const t = [this.message, ...this.styles];
		switch (e) {
			case n.Error:
				console.error.apply(null, t);
				break;
			case n.Info:
				console.info.apply(null, t);
				break;
			case n.Warning:
				console.warn.apply(null, t);
				break;
			default:
				console.log.apply(null, t);
		}
	}
	addText(n, e) {
		n && (null == n ? void 0 : n.trim().length) > 0 && ((this.message += i(n)), this.styles.push(e));
	}
}
export { r as C, n as a };
