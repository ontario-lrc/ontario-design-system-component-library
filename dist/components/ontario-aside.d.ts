import type { Components, JSX } from '../types/components';

interface OntarioAside extends Components.OntarioAside, HTMLElement {}
export const OntarioAside: {
	prototype: OntarioAside;
	new (): OntarioAside;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
