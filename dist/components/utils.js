function hasMultipleTrueValues(arr, key) {
	let count = 0;
	for (const obj of arr) {
		if (obj[key] === true || obj[key] === 'true') {
			count++;
			if (count > 1) {
				return true;
			}
		}
	}
	return false;
}
function extractValuesByKey(objects, key) {
	return objects.map((obj) => obj[key]);
}
function organizeObjectKeys(data, columns) {
	return data.map((item) => {
		const newData = {};
		const otherKeys = {};
		// Iterate through each key in the item
		Object.keys(item).forEach((key) => {
			if (key === 'data') {
				// Organize keys in the 'data' object
				columns.forEach((column) => {
					if (column in item.data) {
						newData[column] = item.data[column];
					}
				});
			} else {
				// Preserve other keys
				otherKeys[key] = item[key];
			}
		});
		return Object.assign({ data: newData }, otherKeys);
	});
}
function removeObjectsBySpecificKey(objects, key, value) {
	const removedObjects = [];
	const filteredObjects = objects.filter((obj) => {
		if (obj[key] === value) {
			removedObjects.push(obj);
			return false;
		}
		return true;
	});
	return [filteredObjects, removedObjects];
}
function isNumber(str) {
	const pattern = /^\d+\.?\d*$/;
	return pattern.test(str);
}
function isEmpty(str) {
	return !str || (str === null || str === void 0 ? void 0 : str.length) <= 0;
}

export {
	isNumber as a,
	extractValuesByKey as e,
	hasMultipleTrueValues as h,
	isEmpty as i,
	organizeObjectKeys as o,
	removeObjectsBySpecificKey as r,
};

//# sourceMappingURL=utils.js.map
