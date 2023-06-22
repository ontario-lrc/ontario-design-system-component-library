import type { Components, JSX } from '../types/components';

interface OntarioIconSettings extends Components.OntarioIconSettings, HTMLElement {}
export const OntarioIconSettings: {
	prototype: OntarioIconSettings;
	new (): OntarioIconSettings;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
