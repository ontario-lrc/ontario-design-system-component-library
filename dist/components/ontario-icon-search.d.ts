import type { Components, JSX } from '../types/components';

interface OntarioIconSearch extends Components.OntarioIconSearch, HTMLElement {}
export const OntarioIconSearch: {
	prototype: OntarioIconSearch;
	new (): OntarioIconSearch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
