import { proxyCustomElement, HTMLElement, h, getAssetPath } from '@stencil/core/internal/client';
import { a as ConsoleType, C as ConsoleMessageClass } from './console-message.js';
import { e as extractValuesByKey, o as organizeObjectKeys, r as removeObjectsBySpecificKey } from './utils.js';

const minimumGridColumns = 1;
const maximumGridColumns = 12;

function validateTableColumns(columns) {
	for (const column of columns) {
		if (!column.title || !column.key) {
			const message = new ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addRegularText(' The required keys for ')
				.addMonospaceText('title')
				.addRegularText(' and/or ')
				.addMonospaceText('key')
				.addRegularText(' in the ')
				.addMonospaceText('<ontario-table> tableColumns')
				.addRegularText(' options were not provided. ')
				.printMessage(ConsoleType.Error);
			return false; // Required keys are missing
		}
		if (column.type && column.type !== 'string' && column.type !== 'numeric') {
			const message = new ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addRegularText(' The ')
				.addMonospaceText('type')
				.addRegularText(' key in the ')
				.addMonospaceText('<ontario-table> tableColumns')
				.addRegularText(' options is not a valid type. A default type of `string` will be applied.')
				.printMessage();
			return false; // Invalid type for 'type' key
		}
		if (column.colSpan && !(column.colSpan >= minimumGridColumns && column.colSpan <= maximumGridColumns)) {
			const message = new ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addRegularText(' The ')
				.addMonospaceText('colSpan')
				.addRegularText(' in the ')
				.addMonospaceText('<ontario-table> tableColumns')
				.addRegularText(' options is not a valid type. The default colSpan value will be applied.')
				.printMessage();
			return false; // Invalid value for 'colSpan' key
		}
	}
	return true; // All validations passed
}
function validateTableRowOptions(options) {
	for (const option of options) {
		if (!option.data || Object.keys(option.data).length === 0) {
			const message = new ConsoleMessageClass();
			message
				.addDesignSystemTag()
				.addRegularText(' The required key for ')
				.addMonospaceText('data')
				.addRegularText(' in the ')
				.addMonospaceText('<ontario-table> tableData')
				.addRegularText(' options was not provided. ')
				.printMessage(ConsoleType.Error);
			return false; // Required key 'data' is missing
		}
	}
	return true; // All validations passed
}

const ontarioTableCss =
	'.ontario-table-container{position:relative;margin:0.5rem 0 2.5rem}.ontario-table-div{background:linear-gradient(to right, #FFFFFF 30%, rgba(255, 255, 255, 0)), linear-gradient(to right, rgba(255, 255, 255, 0), #FFFFFF 70%) 0 100%, linear-gradient(to right, rgba(0, 0, 0, 0.2) 0%, rgba(252, 0, 0, 0) 100.01%), linear-gradient(to left, rgba(0, 0, 0, 0.2) 0%, rgba(252, 0, 0, 0) 100.01%);background-repeat:no-repeat;background-size:2.5rem 100%, 2.5rem 100%, 0.875rem 100%, 0.875rem 100%;background-position:0 0, 100%, 0 0, 100%;background-attachment:local, local, scroll, scroll;overflow-x:auto}@media screen and (max-width: 40em){.ontario-table-div{overflow-x:scroll}}.ontario-table-scroll--wrapper{height:20px;overflow-x:auto;overflow-y:hidden;display:block}.ontario-table-container table{border-collapse:collapse;display:table;font-size:1.0625rem;font-weight:400;line-height:1.625rem}.ontario-table-container table.ontario-table--full-container-width{display:table;width:100%}.ontario-table-container table.ontario-table--zebra-stripes-enabled tbody tr:nth-child(even){background-color:rgba(0, 0, 0, 0.0509803922)}.ontario-table-container table:not(.ontario-table--no-zebra-stripes) tbody tr:first-child:nth-last-child(n+6):nth-child(even),.ontario-table-container table:not(.ontario-table--no-zebra-stripes) tbody tr:first-child:nth-last-child(n+6)~tr:nth-child(even){background-color:rgba(0, 0, 0, 0.0509803922)}@media screen and (max-width: 40em){.ontario-table-container table{font-size:1rem}}.ontario-table-container caption{background-color:rgba(0, 0, 0, 0.1019607843);display:table-caption;font-size:1.375rem;font-weight:700;line-height:2.1875rem;padding:1.125rem 1rem 1.125rem 1.5rem;text-align:left}@media screen and (max-width: 40em){.ontario-table-container caption{font-size:1.25rem;line-height:1.875rem;padding-left:1rem}}.ontario-table-container table thead{border:solid;border-width:0.1875rem 0;border-color:#1a1a1a;vertical-align:text-top}.ontario-table-container table thead th{font-size:1.125rem;line-height:1.5;margin:0;padding:1.75rem 1rem 1.75rem 1.5rem;text-align:left;text-size-adjust:none;-webkit-text-size-adjust:none}@media screen and (max-width: 40em){.ontario-table-container table thead th{font-size:1rem;line-height:1.3125rem;padding:1.5rem 0.5rem 1.5rem 1rem}}.ontario-table-container table thead th.ontario-table-cell--numeric{padding:1.75rem 1.5rem 1.75rem 1rem;text-align:right}@media screen and (max-width: 40em){.ontario-table-container table thead th.ontario-table-cell--numeric{padding:1.5rem 1rem 1.5rem 0.5rem}}.ontario-table-container table tbody{font-size:1rem;vertical-align:text-top}.ontario-table-container table tbody tr{border:solid;border-width:0.0625rem 0;border-color:rgba(0, 0, 0, 0.3019607843)}.ontario-table-container table tbody tr:last-child{border-width:0.1875rem 0;border-top-width:0;border-color:#1a1a1a}.ontario-table-container table tbody tr.ontario-table-row--highlight{background-color:rgba(225, 145, 0, 0.2352941176) !important}.ontario-table-container table tbody tr.ontario-table-row--highlight th{padding-left:1.5rem;display:flex;position:relative}.ontario-table-container table tbody tr.ontario-table-row--highlight th img.ontario-table--highlight-indicator{width:0.5rem;position:absolute;top:1.5rem;left:0}.ontario-table-container table tbody tr.ontario-table-row--subtotal{background-color:rgba(0, 123, 158, 0.1137254902) !important}.ontario-table-container tbody th,.ontario-table-container tfoot th,.ontario-table-container table td{padding:1.1875rem 1rem 1.1875rem 1.5rem;text-align:left;letter-spacing:0.025rem}.ontario-table-container tbody th,.ontario-table-container tfoot th{font-weight:700}@media screen and (max-width: 40em){.ontario-table-container tbody th,.ontario-table-container tfoot th{font-size:1rem;line-height:1.625rem;padding-right:0.5rem;padding-left:1rem}}.ontario-table-container table td img{vertical-align:top}@media screen and (max-width: 40em){.ontario-table-container table td img{max-width:none}}.ontario-table-container table td.ontario-table-cell--numeric{font-family:"Courier Prime", Courier, "Courier New", monospace;font-size:1.0625rem;padding:1.1875rem 1.5rem 1.1875rem 1rem;text-align:right}.ontario-table-container table td.ontario-table-cell--numeric strong{font-family:"Courier Prime", Courier, "Courier New", monospace}.ontario-table-container tbody tr.ontario-table-row--subtotal,.ontario-table-container tfoot tr{border:solid;border-width:0.1875rem 0;font-size:1rem;border-color:#1a1a1a}.ontario-table-container tbody tr.ontario-table-row--subtotal th,.ontario-table-container tfoot tr th{padding:1.4375rem 1rem 1.4375rem 1.5rem}.ontario-table-container tbody tr.ontario-table-row--subtotal td,.ontario-table-container tfoot tr td{font-weight:700;padding:1.4375rem 1rem 1.4375rem 1.5rem}.ontario-table-container tfoot{vertical-align:text-top}.ontario-table-container tfoot tr{background-color:rgba(0, 119, 160, 0.337254902) !important}.ontario-table-header--column-span-1{min-width:8.33333vw}.ontario-table-header--column-span-2{min-width:16.66666vw}.ontario-table-header--column-span-3{min-width:25vw}.ontario-table-header--column-span-4{min-width:33.33333vw}.ontario-table-header--column-span-5{min-width:41.66666vw}.ontario-table-header--column-span-6{min-width:50vw}.ontario-table-header--column-span-7{min-width:58.33333vw}.ontario-table-header--column-span-8{min-width:66.66666vw}.ontario-table-header--column-span-9{min-width:75vw}.ontario-table-header--column-span-10{min-width:83.33333vw}.ontario-table-header--column-span-11{min-width:91.66666vw}.ontario-table-header--column-span-12{min-width:100vw}.ontario-table-container .ontario-table--condensed td{padding:0.75rem 1rem 0.75rem 1.5rem;text-align:left}.ontario-table-container .ontario-table--condensed td.ontario-table-cell--numeric{padding:0.75rem 1.5rem 0.75rem 1rem;font-size:1.0625rem;text-align:right}.ontario-table-container .ontario-table--condensed tbody th,.ontario-table-container .ontario-table--condensed tfoot th{padding:0.75rem 1rem 0.75rem 1.5rem}.ontario-table-container .ontario-table--condensed tr.ontario-table-row--highlight th img.ontario-table--highlight-indicator{top:1.0625rem}.ontario-table-container .ontario-table--condensed tr.ontario-table-row--subtotal th,.ontario-table-container .ontario-table--condensed tr.ontario-table-row--subtotal td,.ontario-table-container .ontario-table--condensed tfoot tr th,.ontario-table-container .ontario-table--condensed tfoot tr td{padding:1rem 1rem 1rem 1.5rem}.ontario-table-container .ontario-table--condensed tr.ontario-table-row--subtotal td.ontario-table-cell--numeric,.ontario-table-container .ontario-table--condensed tfoot tr td.ontario-table-cell--numeric{text-align:right;padding:1rem 1.5rem 1rem 1rem}@media screen and (max-width: 40em){.ontario-table-container .ontario-table--condensed td{padding:0.75rem 0.5rem 0.75rem 1rem;font-size:1rem}.ontario-table-container .ontario-table--condensed td.ontario-table-cell--numeric{padding:0.75rem 1rem 0.75rem 0.5rem}.ontario-table-container .ontario-table--condensed tbody th{padding:0.75rem 0.5rem 0.75rem 1rem}.ontario-table-container .ontario-table--condensed tr.ontario-table-row--subtotal th,.ontario-table-container .ontario-table--condensed tr.ontario-table-row--subtotal td,.ontario-table-container .ontario-table--condensed tfoot tr th,.ontario-table-container .ontario-table--condensed tfoot tr td{padding:1rem 0.5rem 1rem 1rem}.ontario-table-container .ontario-table--condensed tr.ontario-table-row--subtotal td.ontario-table-cell--numeric,.ontario-table-container .ontario-table--condensed tfoot tr td.ontario-table-cell--numeric{text-align:right;padding:1rem 1rem 1rem 0.5rem}}';
const OntarioTableStyle0 = ontarioTableCss;

const OntarioTable$1 = /*@__PURE__*/ proxyCustomElement(
	class OntarioTable extends HTMLElement {
		constructor() {
			super();
			this.__registerHost();
			this.__attachShadow();
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
					{
						key: '6f9a07ab7d4914f0404cf95264ce122cb64605fc',
						class: 'ontario-table-div',
						ref: (el) => (this.table = el),
					},
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
		static get assetsDirs() {
			return ['./assets'];
		}
		get element() {
			return this;
		}
		static get watchers() {
			return {
				tableColumns: ['processTableColumns'],
				tableData: ['processTableData'],
			};
		}
		static get style() {
			return OntarioTableStyle0;
		}
	},
	[
		1,
		'ontario-table',
		{
			caption: [1],
			tableColumns: [1, 'table-columns'],
			tableData: [1, 'table-data'],
			zebraStripes: [1, 'zebra-stripes'],
			condensed: [4],
			fullWidth: [4, 'full-width'],
			tableColumnsState: [32],
			tableDataState: [32],
			tableFooterState: [32],
		},
		undefined,
		{
			tableColumns: ['processTableColumns'],
			tableData: ['processTableData'],
		},
	],
);
function defineCustomElement$1() {
	if (typeof customElements === 'undefined') {
		return;
	}
	const components = ['ontario-table'];
	components.forEach((tagName) => {
		switch (tagName) {
			case 'ontario-table':
				if (!customElements.get(tagName)) {
					customElements.define(tagName, OntarioTable$1);
				}
				break;
		}
	});
}

const OntarioTable = OntarioTable$1;
const defineCustomElement = defineCustomElement$1;

export { OntarioTable, defineCustomElement };

//# sourceMappingURL=ontario-table.js.map
