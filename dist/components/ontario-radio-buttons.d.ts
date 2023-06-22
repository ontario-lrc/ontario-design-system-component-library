import type { Components, JSX } from '../types/components';

interface OntarioRadioButtons extends Components.OntarioRadioButtons, HTMLElement {}
export const OntarioRadioButtons: {
	prototype: OntarioRadioButtons;
	new (): OntarioRadioButtons;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
