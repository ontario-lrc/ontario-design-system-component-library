import type { Components, JSX } from '../types/components';

interface OntarioFooter extends Components.OntarioFooter, HTMLElement {}
export const OntarioFooter: {
	prototype: OntarioFooter;
	new (): OntarioFooter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
