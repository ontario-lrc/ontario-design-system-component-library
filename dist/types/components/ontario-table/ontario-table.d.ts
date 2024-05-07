import { Table, TableColumnOptions, TableRowOptions } from './table.interface';
export declare class OntarioTable implements Table {
	element: HTMLElement;
	private tableScrollWrapper;
	private tableScrollDiv;
	private table;
	/**
	 * Specifies the caption (or title) of the table.
	 *
	 * This is optional.
	 */
	caption?: string | undefined;
	/**
	 * Used to define the columns of the table.
	 *
	 * @example;
	 * <ontario-table
	 *    table-columns='[
	 *      { "title": "Type of service", "key": "service" },
	 *      { "title": "Processing and delivery", "key": "processing" },
	 *      { "title": "Cost", "key": "cost", "type": "numeric" }
	 *    ]'
	 * >
	 * </ontario-table>
	 */
	tableColumns: string | TableColumnOptions[];
	/**
	 * Used to define the table body data. Note that the keys passed to the `data` object in the tableData should match the keys of the columns defined in the tableColumns prop.
	 *
	 * @example
	 * <ontario-table
	 *  table-data='[
	 *    {
	 *      "data": {
	 *        "service": "Regular service (online)",
	 *        "processing": "15 business days plus delivery by Canada Post",
	 *        "cost": "$15"
	 *      }
	 *    },
	 *    {
	 *      "data": {
	 *        "service": "Premium service (online)",
	 *        "cost": "$45",
	 *        "processing": "5 business days including delivery by courier"
	 *      }
	 *    }
	 *  ]'
	 * >
	 * </ontario-table>
	 */
	tableData: string | TableRowOptions[];
	/**
	 * Indicates whether or not the table data should have alternate row zebra striping.
	 *
	 * This is optional. By default, zebra striping will be added when the table rows extend 5 rows. If zebra striping is needed to table rows less than 5 rows, the prop should be set to “enabled”. If no zebra stripes are needed, it should be set to “disabled”.
	 *
	 * The default will be set to “auto”.
	 */
	zebraStripes?: 'auto' | 'disabled' | 'enabled' | undefined;
	/**
	 * Used to specify whether or not table data in cells should have reduced top and bottom padding. This is useful for pages with multiple data-heavy tables such as a budget or financial data.
	 *
	 * This is optional. By default it will be set to “false”.
	 */
	condensed?: boolean | undefined;
	/**
	 * Used to specify whether or not the table should extend the full width of its container.
	 *
	 * This is optional. By default, it will be set to “false”
	 */
	fullWidth?: boolean | undefined;
	private tableColumnsState;
	private tableDataState;
	private tableFooterState;
	private processTableColumns;
	private processTableData;
	private parseOptions;
	private transformTableData;
	private getZebraStripeClass;
	private getTableClasses;
	private getColumnClasses;
	private generateTableDataHTML;
	private applyScrollbar;
	componentDidLoad(): void;
	componentWillLoad(): void;
	render(): any;
}
