import type { Components, JSX } from '../types/components';

interface OntarioIconMap extends Components.OntarioIconMap, HTMLElement {}
export const OntarioIconMap: {
	prototype: OntarioIconMap;
	new (): OntarioIconMap;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
