const constructHintTextObject = (hintText) => {
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

export { constructHintTextObject as c };

//# sourceMappingURL=hints.js.map
