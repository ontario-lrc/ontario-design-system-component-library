import type { Components, JSX } from '../types/components';

interface OntarioFieldset extends Components.OntarioFieldset, HTMLElement {}
export const OntarioFieldset: {
	prototype: OntarioFieldset;
	new (): OntarioFieldset;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
