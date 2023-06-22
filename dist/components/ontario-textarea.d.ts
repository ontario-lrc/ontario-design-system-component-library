import type { Components, JSX } from '../types/components';

interface OntarioTextarea extends Components.OntarioTextarea, HTMLElement {}
export const OntarioTextarea: {
	prototype: OntarioTextarea;
	new (): OntarioTextarea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
