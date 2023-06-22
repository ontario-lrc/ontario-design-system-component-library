import type { Components, JSX } from '../types/components';

interface OntarioHeader extends Components.OntarioHeader, HTMLElement {}
export const OntarioHeader: {
	prototype: OntarioHeader;
	new (): OntarioHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
