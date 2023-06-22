import type { Components, JSX } from '../types/components';

interface OntarioCheckboxes extends Components.OntarioCheckboxes, HTMLElement {}
export const OntarioCheckboxes: {
	prototype: OntarioCheckboxes;
	new (): OntarioCheckboxes;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
