import type { Components, JSX } from '../types/components';

interface OntarioCriticalAlert extends Components.OntarioCriticalAlert, HTMLElement {}
export const OntarioCriticalAlert: {
	prototype: OntarioCriticalAlert;
	new (): OntarioCriticalAlert;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
