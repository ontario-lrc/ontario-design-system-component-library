import type { Components, JSX } from '../types/components';

interface OntarioIconTimer extends Components.OntarioIconTimer, HTMLElement {}
export const OntarioIconTimer: {
	prototype: OntarioIconTimer;
	new (): OntarioIconTimer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
