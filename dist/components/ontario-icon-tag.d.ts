import type { Components, JSX } from '../types/components';

interface OntarioIconTag extends Components.OntarioIconTag, HTMLElement {}
export const OntarioIconTag: {
	prototype: OntarioIconTag;
	new (): OntarioIconTag;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
