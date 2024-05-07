import type { Components, JSX } from '../types/components';

interface OntarioAccordion extends Components.OntarioAccordion, HTMLElement {}
export const OntarioAccordion: {
	prototype: OntarioAccordion;
	new (): OntarioAccordion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
