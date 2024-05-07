function validatePropExists(newValue) {
	// Check if new value that is passed in is a string and is not empty
	const isNewValueBlank = typeof newValue !== 'string' || newValue === '';
	// Return true if new value is both a string and is not empty
	return isNewValueBlank;
}
function validateObjectExists(newValue) {
	// Check if new value that is passed in is a string and is not empty
	const isNewValueBlank = typeof newValue !== 'object';
	// Return true if new value is both a string and is not empty
	return isNewValueBlank;
}
/**
 * Validate value against keys
 * @param value value to be compared against keys
 * @param keys of values provided by caller
 * @returns true if a match is found or false if no matches are found
 */
function validateValueAgainstArray(value, keys) {
	return keys.includes(value);
}
function validateLanguage(language) {
	if (language) {
		const toggledLanguage = typeof language !== 'string' ? language.detail : language;
		if (toggledLanguage && (toggledLanguage === 'en' || toggledLanguage === 'fr')) return toggledLanguage;
		else return 'en';
	}
	return 'en';
}

export { validateValueAgainstArray as a, validatePropExists as b, validateObjectExists as c, validateLanguage as v };

//# sourceMappingURL=validation-functions.js.map
