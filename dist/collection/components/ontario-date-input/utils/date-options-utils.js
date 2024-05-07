export const getVisibleDateFields = (dateOptions) => {
	const dayVisible = dateOptions.includes('day');
	const monthVisible = dateOptions.includes('month');
	const yearVisible = dateOptions.includes('year');
	return { dayVisible, monthVisible, yearVisible };
};
//# sourceMappingURL=date-options-utils.js.map
