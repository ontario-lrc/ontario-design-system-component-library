import type { Components, JSX } from '../types/components';

interface OntarioIconAccessibility extends Components.OntarioIconAccessibility, HTMLElement {}
export const OntarioIconAccessibility: {
	prototype: OntarioIconAccessibility;
	new (): OntarioIconAccessibility;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
