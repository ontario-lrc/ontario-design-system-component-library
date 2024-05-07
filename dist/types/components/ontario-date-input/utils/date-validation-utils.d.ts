import { DateValidatorReturnType } from '../ontario-date-input-interface';
import { Translations } from '../../../translations';
type GetDateErrorArg = {
	dayValue: string;
	monthValue: string;
	yearValue: string;
	errorMessages: Translations['dateInput']['error']['en'];
	minYear?: number;
	maxYear?: number;
	dayVisible: boolean;
	monthVisible: boolean;
	yearVisible: boolean;
};
/**
 * Helper function to get error message for birthdate validation
 */
export declare const getDateErrorMessage: ({
	dayValue,
	monthValue,
	yearValue,
	errorMessages,
	minYear,
	maxYear,
	dayVisible,
	monthVisible,
	yearVisible,
}: GetDateErrorArg) => DateValidatorReturnType;
export {};
