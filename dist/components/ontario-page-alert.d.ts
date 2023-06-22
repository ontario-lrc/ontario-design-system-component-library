import type { Components, JSX } from '../types/components';

interface OntarioPageAlert extends Components.OntarioPageAlert, HTMLElement {}
export const OntarioPageAlert: {
	prototype: OntarioPageAlert;
	new (): OntarioPageAlert;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
