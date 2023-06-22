import type { Components, JSX } from '../types/components';

interface OntarioDropdownList extends Components.OntarioDropdownList, HTMLElement {}
export const OntarioDropdownList: {
	prototype: OntarioDropdownList;
	new (): OntarioDropdownList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
