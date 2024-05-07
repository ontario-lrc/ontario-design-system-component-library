import { h, getAssetPath } from '@stencil/core';
import { validateTableColumns, validateTableRowOptions } from './utils/ontario-table-validation';
import { ConsoleMessageClass } from '../../utils/console-message/console-message';
import { ConsoleType } from '../../utils/console-message/console-message.enum';
import { extractValuesByKey, organizeObjectKeys, removeObjectsBySpecificKey } from '../../utils/helper/utils';
export class OntarioTable {
	constructor() {
		this.transformTableData = (tableData) => {
			// get column keys
			const columns = extractValuesByKey(this.tableColumnsState, 'key').filter((column) => column !== undefined);
			// organize table data data object according to the order of the column keys
			const organizedTableData = organizeObjectKeys(tableData, columns);
			// remove the footer table data into it's own state so that it can be rendered in a `tfoot` element
			const [updatedTableData, tableFooterData] = removeObjectsBySpecificKey(organizedTableData, 'footer', true);
			this.tableDataState = updatedTableData;
			this.tableFooterState = tableFooterData;
		};
		this.getZebraStripeClass = () => {
			return this.zebraStripes === 'disabled'
				? `ontario-table--no-zebra-stripes`
				: this.zebraStripes === 'enabled'
				? `ontario-table--zebra-stripes-enabled`
				: ``;
		};
		this.getTableClasses = () => {
			let tableClass = '';
			if (this.condensed && this.fullWidth) {
				tableClass = `ontario-table--condensed ontario-table--full-container-width`;
			} else if (this.condensed) {
				tableClass = `ontario-table--condensed`;
			} else if (this.fullWidth) {
				tableClass = `ontario-table--full-container-width`;
			}
			const zebraStripesClass = this.getZebraStripeClass();
			if (tableClass) {
				tableClass = `${tableClass} ${zebraStripesClass}`;
			} else {
				tableClass = zebraStripesClass;
			}
			return tableClass;
		};
		this.getColumnClasses = (columnData) => {
			if (columnData.type === 'numeric' && columnData.colSpan) {
				return `ontario-table-cell--numeric ontario-table-header--column-span-${columnData.colSpan}`;
			} else if (columnData.type === 'numeric') {
				return `ontario-table-cell--numeric`;
			} else if (columnData.colSpan) {
				return `ontario-table-header--column-span-${columnData.colSpan}`;
			}
			return;
		};
		// A function used to generate the table header and table definitions for the table body and table footer sections.
		this.generateTableDataHTML = (dataType, rowData, columns, rowClass) => {
			return h(
				'tr',
				{ class: dataType === 'tableData' ? rowClass : '' },
				this.tableColumnsState.map((column, index) => {
					const type = column.type;
					const tdClass = type === 'numeric' ? `ontario-table-cell--numeric` : '';
					return index === 0
						? h(
								'th',
								{ scope: 'row', innerHTML: rowData.data[`${columns[0]}`] },
								dataType === 'tableData' &&
									rowData.highlight &&
									h('img', {
										class: 'ontario-table--highlight-indicator',
										src: getAssetPath('./assets/highlight-indicator.svg'),
									}),
						  )
						: h('td', { class: tdClass, innerHTML: rowData.data[`${columns[index]}`] });
				}),
			);
		};
		this.caption = undefined;
		this.tableColumns = undefined;
		this.tableData = undefined;
		this.zebraStripes = 'auto';
		this.condensed = false;
		this.fullWidth = false;
		this.tableColumnsState = undefined;
		this.tableDataState = undefined;
		this.tableFooterState = undefined;
	}
	processTableColumns() {
		this.tableColumns && this.parseOptions(this.tableColumns);
		validateTableColumns(this.tableColumnsState);
	}
	processTableData() {
		this.tableData && this.parseOptions(this.tableData);
		validateTableRowOptions(this.tableDataState);
	}
	// Parse the tableColumn & tableData options if they are strings
	// Transforms the data and stores it in respective state objects
	parseOptions(options) {
		const isString = typeof options === 'string';
		if (!options) {
			return;
		}
		try {
			if (options === this.tableColumns) {
				this.tableColumnsState = isString ? JSON.parse(options) : options;
			} else {
				this.tableDataState = isString ? JSON.parse(options) : options;
				this.transformTableData(this.tableDataState);
			}
		} catch (error) {
			const message = new ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addRegularText(' failed to parse props for ')
				.addMonospaceText('<ontario-table>')
				.addRegularText(' in ')
				.addMonospaceText('parseOptions()')
				.addRegularText(' method \n ')
				.addMonospaceText(error.stack)
				.printMessage(ConsoleType.Error);
		}
	}
	// Helper function to apply the scrollbar styles to the tops of tables
	applyScrollbar(tableElement, scrollerDiv) {
		scrollerDiv.style.visibility = 'visible';
		scrollerDiv.style.height = '20px';
		scrollerDiv.style.width = `${tableElement.scrollWidth}px`;
	}
	// The following logic adds scrollbar functionality to the tops of tables depending on their size.
	componentDidLoad() {
		const tables = this.table;
		const scrollerDivs = this.tableScrollDiv;
		const scrollerWrappers = this.tableScrollWrapper;
		let resizeObserver = new ResizeObserver(() => {
			this.applyScrollbar(tables, scrollerDivs);
		});
		this.applyScrollbar(tables, scrollerDivs);
		resizeObserver.observe(tables);
		tables.addEventListener('scroll', () => {
			this.applyScrollbar(tables, scrollerDivs);
			scrollerWrappers.scrollLeft = tables.scrollLeft;
		});
		scrollerWrappers.addEventListener('scroll', () => {
			this.applyScrollbar(tables, scrollerDivs);
			tables.scrollLeft = scrollerWrappers.scrollLeft;
		});
	}
	componentWillLoad() {
		this.processTableColumns();
		this.processTableData();
	}
	render() {
		const columns = extractValuesByKey(this.tableColumnsState, 'key');
		return h(
			'div',
			{ key: 'f2f1c8359a5b09b1f1812501f45617b8793d62c4', class: 'ontario-table-container' },
			h(
				'div',
				{
					key: 'f406a56cb585bc6afc47b6d2857cc81a6eaab30a',
					class: 'ontario-table-scroll--wrapper',
					ref: (el) => (this.tableScrollWrapper = el),
				},
				h('div', {
					key: 'dc0a7056f365450fc0196ccd5ccd231e6a258b16',
					class: 'ontario-table-scroll--div',
					ref: (el) => (this.tableScrollDiv = el),
				}),
			),
			h(
				'div',
				{ key: '6f9a07ab7d4914f0404cf95264ce122cb64605fc', class: 'ontario-table-div', ref: (el) => (this.table = el) },
				h(
					'table',
					{ key: 'b0c400ff0d59973556860dca7fa0b8dcbd85040d', class: this.getTableClasses() },
					this.caption && h('caption', null, this.caption),
					this.tableColumnsState &&
						h(
							'thead',
							null,
							h(
								'tr',
								null,
								this.tableColumnsState.map((columnData) => {
									const columnClass = this.getColumnClasses(columnData);
									return h('th', {
										'scope': 'col',
										'key': columnData.key,
										'data-type': columnData.type,
										'class': columnClass,
										'innerHTML': columnData.title,
									});
								}),
							),
						),
					this.tableDataState &&
						h(
							'tbody',
							null,
							this.tableDataState.map((rowData) => {
								const rowClass = rowData.highlight
									? `ontario-table-row--highlight`
									: rowData.subtotal
									? `ontario-table-row--subtotal`
									: undefined;
								return this.generateTableDataHTML('tableData', rowData, columns, rowClass);
							}),
						),
					!!this.tableFooterState.length &&
						h(
							'tfoot',
							null,
							this.tableFooterState.map((footerData) => {
								return this.generateTableDataHTML('tableData', footerData, columns, undefined);
							}),
						),
				),
			),
		);
	}
	static get is() {
		return 'ontario-table';
	}
	static get encapsulation() {
		return 'shadow';
	}
	static get originalStyleUrls() {
		return {
			$: ['ontario-table.scss'],
		};
	}
	static get styleUrls() {
		return {
			$: ['ontario-table.css'],
		};
	}
	static get assetsDirs() {
		return ['./assets'];
	}
	static get properties() {
		return {
			caption: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'string | undefined',
					resolved: 'string | undefined',
					references: {},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'Specifies the caption (or title) of the table.\n\nThis is optional.',
				},
				attribute: 'caption',
				reflect: false,
			},
			tableColumns: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'string | TableColumnOptions[]',
					resolved: 'TableColumnOptions[] | string',
					references: {
						TableColumnOptions: {
							location: 'import',
							path: './table.interface',
							id: 'src/components/ontario-table/table.interface.ts::TableColumnOptions',
						},
					},
				},
				required: false,
				optional: false,
				docs: {
					tags: [
						{
							name: 'example',
							text: ';\n<ontario-table\ntable-columns=\'[\n{ "title": "Type of service", "key": "service" },\n{ "title": "Processing and delivery", "key": "processing" },\n{ "title": "Cost", "key": "cost", "type": "numeric" }\n]\'\n>\n</ontario-table>',
						},
					],
					text: 'Used to define the columns of the table.',
				},
				attribute: 'table-columns',
				reflect: false,
			},
			tableData: {
				type: 'string',
				mutable: false,
				complexType: {
					original: 'string | TableRowOptions[]',
					resolved: 'TableRowOptions[] | string',
					references: {
						TableRowOptions: {
							location: 'import',
							path: './table.interface',
							id: 'src/components/ontario-table/table.interface.ts::TableRowOptions',
						},
					},
				},
				required: false,
				optional: false,
				docs: {
					tags: [
						{
							name: 'example',
							text: '<ontario-table\n table-data=\'[\n   {\n     "data": {\n       "service": "Regular service (online)",\n       "processing": "15 business days plus delivery by Canada Post",\n       "cost": "$15"\n     }\n   },\n   {\n     "data": {\n       "service": "Premium service (online)",\n       "cost": "$45",\n       "processing": "5 business days including delivery by courier"\n     }\n   }\n ]\'\n>\n</ontario-table>',
						},
					],
					text: 'Used to define the table body data. Note that the keys passed to the `data` object in the tableData should match the keys of the columns defined in the tableColumns prop.',
				},
				attribute: 'table-data',
				reflect: false,
			},
			zebraStripes: {
				type: 'string',
				mutable: false,
				complexType: {
					original: "'auto' | 'disabled' | 'enabled' | undefined",
					resolved: '"auto" | "disabled" | "enabled" | undefined',
					references: {},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'Indicates whether or not the table data should have alternate row zebra striping.\n\nThis is optional. By default, zebra striping will be added when the table rows extend 5 rows. If zebra striping is needed to table rows less than 5 rows, the prop should be set to \u201Cenabled\u201D. If no zebra stripes are needed, it should be set to \u201Cdisabled\u201D.\n\nThe default will be set to \u201Cauto\u201D.',
				},
				attribute: 'zebra-stripes',
				reflect: false,
				defaultValue: "'auto'",
			},
			condensed: {
				type: 'boolean',
				mutable: false,
				complexType: {
					original: 'boolean | undefined',
					resolved: 'boolean | undefined',
					references: {},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'Used to specify whether or not table data in cells should have reduced top and bottom padding. This is useful for pages with multiple data-heavy tables such as a budget or financial data.\n\nThis is optional. By default it will be set to \u201Cfalse\u201D.',
				},
				attribute: 'condensed',
				reflect: false,
				defaultValue: 'false',
			},
			fullWidth: {
				type: 'boolean',
				mutable: false,
				complexType: {
					original: 'boolean | undefined',
					resolved: 'boolean | undefined',
					references: {},
				},
				required: false,
				optional: true,
				docs: {
					tags: [],
					text: 'Used to specify whether or not the table should extend the full width of its container.\n\nThis is optional. By default, it will be set to \u201Cfalse\u201D',
				},
				attribute: 'full-width',
				reflect: false,
				defaultValue: 'false',
			},
		};
	}
	static get states() {
		return {
			tableColumnsState: {},
			tableDataState: {},
			tableFooterState: {},
		};
	}
	static get elementRef() {
		return 'element';
	}
	static get watchers() {
		return [
			{
				propName: 'tableColumns',
				methodName: 'processTableColumns',
			},
			{
				propName: 'tableData',
				methodName: 'processTableData',
			},
		];
	}
}
//# sourceMappingURL=ontario-table.js.map
