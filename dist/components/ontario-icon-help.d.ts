import type { Components, JSX } from '../types/components';

interface OntarioIconHelp extends Components.OntarioIconHelp, HTMLElement {}
export const OntarioIconHelp: {
	prototype: OntarioIconHelp;
	new (): OntarioIconHelp;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
