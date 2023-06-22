import type { Components, JSX } from '../types/components';

interface OntarioIconMenu extends Components.OntarioIconMenu, HTMLElement {}
export const OntarioIconMenu: {
	prototype: OntarioIconMenu;
	new (): OntarioIconMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
