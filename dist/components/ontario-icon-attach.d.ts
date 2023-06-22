import type { Components, JSX } from '../types/components';

interface OntarioIconAttach extends Components.OntarioIconAttach, HTMLElement {}
export const OntarioIconAttach: {
	prototype: OntarioIconAttach;
	new (): OntarioIconAttach;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
