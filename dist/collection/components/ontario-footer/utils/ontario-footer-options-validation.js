export const isInvalidTwoColumnOptions = (options) => {
	var _a, _b, _c, _d;
	return (
		!options ||
		!((_a = options.column1) === null || _a === void 0 ? void 0 : _a.title) ||
		!((_b = options.column1) === null || _b === void 0 ? void 0 : _b.content) ||
		!((_c = options.column2) === null || _c === void 0 ? void 0 : _c.title) ||
		!((_d = options.column2) === null || _d === void 0 ? void 0 : _d.content)
	);
};
export const isInvalidThreeColumnOptions = (options) => {
	var _a, _b, _c, _d, _e, _f;
	return (
		!options ||
		!((_a = options.column1) === null || _a === void 0 ? void 0 : _a.title) ||
		!((_b = options.column1) === null || _b === void 0 ? void 0 : _b.content) ||
		!((_c = options.column2) === null || _c === void 0 ? void 0 : _c.title) ||
		!((_d = options.column2) === null || _d === void 0 ? void 0 : _d.content) ||
		!((_e = options.column3) === null || _e === void 0 ? void 0 : _e.title) ||
		!((_f = options.column3) === null || _f === void 0 ? void 0 : _f.content)
	);
};
