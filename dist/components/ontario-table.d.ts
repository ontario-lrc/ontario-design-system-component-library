import type { Components, JSX } from '../types/components';

interface OntarioTable extends Components.OntarioTable, HTMLElement {}
export const OntarioTable: {
	prototype: OntarioTable;
	new (): OntarioTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
