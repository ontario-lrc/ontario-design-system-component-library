import type { Components, JSX } from '../types/components';

interface OntarioCard extends Components.OntarioCard, HTMLElement {}
export const OntarioCard: {
	prototype: OntarioCard;
	new (): OntarioCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
