import { Language } from '../common/language-types';
export declare function validatePropExists(newValue: string | HTMLElement): boolean;
/**
 * Validate value against enumType
 * T must extends String to gain access to the `toLowerCase()` function
 * @param value value to be compared against enumType
 * @param enumType list of enum values provided by caller
 * @returns enum value if a match is found or undefined if no matches are found
 */
export declare function validateValueAgainstEnum<T extends String, E extends Object>(value: T, enumType: E): T;
export declare function validateObjectExists(newValue: object): boolean;
/**
 * Validate value against keys
 * @param value value to be compared against keys
 * @param keys of values provided by caller
 * @returns true if a match is found or false if no matches are found
 */
export declare function validateValueAgainstArray<T extends string>(value: T, keys: ReadonlyArray<string>): boolean;
export declare function validateLanguage(language: CustomEvent<Language> | string | undefined): 'en' | 'fr';
