import type { Components, JSX } from '../types/components';

interface OntarioCardCollection extends Components.OntarioCardCollection, HTMLElement {}
export const OntarioCardCollection: {
	prototype: OntarioCardCollection;
	new (): OntarioCardCollection;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
