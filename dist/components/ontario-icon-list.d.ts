import type { Components, JSX } from '../types/components';

interface OntarioIconList extends Components.OntarioIconList, HTMLElement {}
export const OntarioIconList: {
	prototype: OntarioIconList;
	new (): OntarioIconList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
