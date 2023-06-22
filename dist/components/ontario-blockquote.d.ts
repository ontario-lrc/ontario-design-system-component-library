import type { Components, JSX } from '../types/components';

interface OntarioBlockquote extends Components.OntarioBlockquote, HTMLElement {}
export const OntarioBlockquote: {
	prototype: OntarioBlockquote;
	new (): OntarioBlockquote;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
