export function format(first, middle, last) {
	return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
export function hasMultipleTrueValues(arr, key) {
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
