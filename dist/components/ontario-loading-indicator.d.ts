import type { Components, JSX } from '../types/components';

interface OntarioLoadingIndicator extends Components.OntarioLoadingIndicator, HTMLElement {}
export const OntarioLoadingIndicator: {
	prototype: OntarioLoadingIndicator;
	new (): OntarioLoadingIndicator;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
