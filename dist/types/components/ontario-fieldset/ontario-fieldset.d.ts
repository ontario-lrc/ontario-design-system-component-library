import { Fieldset } from './ontario-fieldset.interface';
import { CaptionType } from '../../utils/common/input-caption/input-caption.types';
export declare class OntarioFieldset implements Fieldset {
	/**
	 * The text value used for the legend of the fieldset.
	 */
	legend: string;
	/**
	 * The size of the fieldset legend. If no prop is passed, it will be `default`.
	 */
	legendSize: CaptionType;
	/**
	 * Watch for changes to the legendSize prop.
	 * This is for validation purposes to make sure the legendSize matches one of the CaptionTypes.
	 */
	validateLegendSize(): 'default' | 'large' | 'heading';
	validateLegend(): void;
	/**
	 * Print the legend warning message
	 */
	validateLegendText(newValue: string): void;
	componentWillLoad(): void;
	private getClass;
	render(): any;
}
