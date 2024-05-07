import { FunctionalComponent } from '../../../stencil-public-runtime';
import { FooterColumnData } from '../ontario-footer-interface';
import { FooterSocialLinksProps } from './footer-social-links';
export type FooterColumnProps = {
	data: FooterColumnData;
	socialLinks?: FooterSocialLinksProps;
	isThreeColLayout?: boolean;
	isFullWidthInMediumLayout?: boolean;
};
export declare const FooterColumn: FunctionalComponent<FooterColumnProps>;
