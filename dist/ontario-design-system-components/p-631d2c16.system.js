var __spreadArray =
	(this && this.__spreadArray) ||
	function (r, t, n) {
		if (n || arguments.length === 2)
			for (var e = 0, o = t.length, a; e < o; e++) {
				if (a || !(e in t)) {
					if (!a) a = Array.prototype.slice.call(t, 0, e);
					a[e] = t[e];
				}
			}
		return r.concat(a || Array.prototype.slice.call(t));
	};
System.register([], function (r) {
	'use strict';
	return {
		execute: function () {
			r('a', void 0);
			var t;
			(function (r) {
				r['Error'] = 'error';
				r['Info'] = 'info';
				r['Log'] = 'log';
				r['Warning'] = 'warning';
			})(t || (t = r('a', {})));
			var n;
			(function (r) {
				r['Regular'] = 'regular';
				r['Code'] = 'code';
			})(n || (n = {}));
			var e = 'Ontario Design System';
			var o = '12px';
			var a = [
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
			var i = ['font-family: sans-serif', 'font-size: '.concat(o)].join(';');
			var s = ['font-family: monospace', 'font-size: '.concat(o)].join(';');
			function c(r) {
				var t = '%c';
				return t.concat(r);
			}
			var l = (function () {
				function r() {
					this.message = '';
					this.styles = [];
				}
				r.prototype.addDesignSystemTag = function () {
					this.message = c(e);
					this.styles.push(a);
					return this;
				};
				r.prototype.addRegularText = function (r) {
					this.addText(r, i);
					return this;
				};
				r.prototype.addMonospaceText = function (r) {
					this.addText(r, s);
					return this;
				};
				r.prototype.printMessage = function (r) {
					if (r === void 0) {
						r = t.Warning;
					}
					var n = __spreadArray([this.message], this.styles, true);
					switch (r) {
						case t.Error:
							console.error.apply(null, n);
							break;
						case t.Info:
							console.info.apply(null, n);
							break;
						case t.Warning:
							console.warn.apply(null, n);
							break;
						default:
							console.log.apply(null, n);
					}
				};
				r.prototype.addText = function (r, t) {
					if (r && (r === null || r === void 0 ? void 0 : r.trim().length) > 0) {
						this.message += c(r);
						this.styles.push(t);
					}
				};
				return r;
			})();
			r('C', l);
		},
	};
});
