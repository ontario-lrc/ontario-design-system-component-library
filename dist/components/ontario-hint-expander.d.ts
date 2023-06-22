import type { Components, JSX } from '../types/components';

interface OntarioHintExpander extends Components.OntarioHintExpander, HTMLElement {}
export const OntarioHintExpander: {
	prototype: OntarioHintExpander;
	new (): OntarioHintExpander;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
