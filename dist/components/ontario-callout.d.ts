import type { Components, JSX } from '../types/components';

interface OntarioCallout extends Components.OntarioCallout, HTMLElement {}
export const OntarioCallout: {
	prototype: OntarioCallout;
	new (): OntarioCallout;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
