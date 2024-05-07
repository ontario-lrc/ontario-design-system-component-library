import { newE2EPage } from '@stencil/core/testing';
describe('ontario-dropdown-list', () => {
	it('renders dropdown-list', async () => {
		const page = await newE2EPage();
		await page.setContent('<ontario-dropdown-list></ontario-dropdown-list>');
		const component = await page.find('ontario-dropdown-list');
		const element = await page.find('ontario-dropdown-list >>> select');
		expect(component).toHaveClass('hydrated');
		expect(element).toHaveClasses(['ontario-input', 'ontario-dropdown']);
	});
	describe('render changes', () => {
		let page;
		let component;
		let element;
		beforeEach(async () => {
			page = await newE2EPage();
			await page.setContent(`<ontario-dropdown-list
                  name="dropdown-options"
                  element-id="dropdown-list",
                  is-empty-start-option="Please select"
                  caption='{"captionText": "Label"}'
				  options='[{ "value": "dropdown-option-1", "label": "Option 1" }]'
				></ontario-dropdown-list>`);
			component = await page.find('ontario-dropdown-list');
			element = await page.find('ontario-dropdown-list >>> select');
		});
		it('renders changes to the name property', async () => {
			component.setProperty('name', 'ontario-dropdown-name');
			await page.waitForChanges();
			expect(element).toEqualAttributes({
				name: 'ontario-dropdown-name',
			});
		});
	});
});
describe('events', () => {
	it('fires the onChange event', async () => {
		const page = await newE2EPage();
		await page.setContent('<ontario-dropdown-list></ontario-dropdown-list>');
		const changeEvent = await page.spyOnEvent('change');
		const component = await page.find('ontario-dropdown-list');
		component.triggerEvent('change');
		await page.waitForChanges();
		expect(changeEvent).toHaveReceivedEventTimes(1);
	});
});
//# sourceMappingURL=ontario-dropdown-list.e2e.js.map
