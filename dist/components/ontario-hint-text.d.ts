import type { Components, JSX } from '../types/components';

interface OntarioHintText extends Components.OntarioHintText, HTMLElement {}
export const OntarioHintText: {
	prototype: OntarioHintText;
	new (): OntarioHintText;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
