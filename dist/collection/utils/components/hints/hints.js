export const constructHintTextObject = (hintText) => {
	let hintTextObject = { hint: '', hintContentType: 'string' };
	if (hintText) {
		if (typeof hintText === 'string') {
			try {
				hintTextObject = JSON.parse(hintText);
			} catch (_a) {
				hintTextObject = { hint: hintText, hintContentType: 'string' };
			}
		} else {
			hintTextObject = hintText;
		}
	}
	return hintTextObject;
};
//# sourceMappingURL=hints.js.map
