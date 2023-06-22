import { CriticalAlert } from './ontario-critical-alert.interface';
export declare class OntarioCriticalAlert implements CriticalAlert {
	host: HTMLElement;
	/**
	 * Content for critical alert message. It can be either string or HTML content. The content is already wrapped in a paragraph tag, so if using HTML content, the paragraph tag can be ommitted.
	 *
	 * @example
	 * <ontario-critical-alert content="COVID-19 State of emergency extended until May 12, 2020."></ontario-critical-alert>
	 *
	 * or
	 *
	 * <ontario-critical-alert>
	 *  <a href="#">COVID-19 State of emergency</a> extended until May 12, 2020.
	 * </ontario-critical-alert>
	 */
	content: string | HTMLElement;
	/**
	 * Watch for changes to the `content` prop value.
	 *
	 * If no `content` prop was passed, or no host element textContent exists, a warning message will be printed.
	 *
	 * @param newValue string | HTMLElement
	 */
	validateCriticalAlertContent(newValue: string | HTMLElement): void;
	private renderContent;
	componentWillLoad(): void;
	render(): any;
}
