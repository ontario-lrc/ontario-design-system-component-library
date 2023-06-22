import type { Components, JSX } from '../types/components';

interface OntarioInput extends Components.OntarioInput, HTMLElement {}
export const OntarioInput: {
	prototype: OntarioInput;
	new (): OntarioInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
