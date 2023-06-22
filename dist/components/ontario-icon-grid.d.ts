import type { Components, JSX } from '../types/components';

interface OntarioIconGrid extends Components.OntarioIconGrid, HTMLElement {}
export const OntarioIconGrid: {
	prototype: OntarioIconGrid;
	new (): OntarioIconGrid;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
