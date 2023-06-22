import type { Components, JSX } from '../types/components';

interface OntarioButton extends Components.OntarioButton, HTMLElement {}
export const OntarioButton: {
	prototype: OntarioButton;
	new (): OntarioButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
