import type { Components, JSX } from '../types/components';

interface OntarioBackToTop extends Components.OntarioBackToTop, HTMLElement {}
export const OntarioBackToTop: {
	prototype: OntarioBackToTop;
	new (): OntarioBackToTop;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
