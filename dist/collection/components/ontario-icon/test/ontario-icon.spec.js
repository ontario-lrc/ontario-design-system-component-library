import { newSpecPage } from '@stencil/core/testing';
import { OntarioIconAccessibility } from '../ontario-icon-accessibility';
describe('ontario-icon', () => {
	describe('snapshot', () => {
		it('should render the expected html', async () => {
			const page = await newSpecPage({
				components: [OntarioIconAccessibility],
				html: `<ontario-icon-accessibility icon-width="36" colour="grey"></ontario-icon-accessibility>`,
			});
			expect(page.root).toMatchSnapshot();
		});
	});
	it('renders', async () => {
		const page = await newSpecPage({
			components: [OntarioIconAccessibility],
			html: `<ontario-icon-accessibility icon-width="36" colour="grey"></ontario-icon-accessibility>`,
		});
		expect(page.root).toEqualHtml(`
      <ontario-icon-accessibility icon-width="36" colour="grey">
        <mock:shadow-root>
          <div class="ontario-icon ontario-icon--grey ontario-icon--width-36" style="width: 36px;">
            <svg class="svg-icon" id="accessibility" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="fill: undefined; stroke: undefined;">
              <path d="M18.4 11.2l-4.1.2 2.3-2.6c.2-.3.3-.8.2-1.3-.1-.3-.2-.6-.5-.8l-5.4-3.2c-.4-.3-1-.2-1.4.1L6.8 6.1c-.5.5-.6 1.2-.1 1.7.4.5 1.2.5 1.7.1l2-1.8 1.9 1.1-4.2 4.3c-.1.1-.1.2-.2.2-.5.2-1 .4-1.4.7L8 13.9c.5-.2 1-.4 1.5-.4 1.9 0 3.5 1.6 3.5 3.5 0 .6-.1 1.1-.4 1.5l1.5 1.5a5.29 5.29 0 0 0 .9-3c0-1.2-.4-2.4-1.1-3.3l3.3-.3-.2 4.8c-.1.7.4 1.2 1.1 1.3h.1c.6 0 1.1-.5 1.2-1.1l.2-5.9c0-.3-.1-.7-.3-.9-.3-.3-.6-.4-.9-.4zM18 5.5a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2 2 2 0 0 0 2 2zm-5.5 16.1a5.29 5.29 0 0 1-3 .9C6.5 22.5 4 20 4 17a5.29 5.29 0 0 1 .9-3l1.5 1.5c-.2.5-.4 1-.4 1.5 0 1.9 1.6 3.5 3.5 3.5.6 0 1.1-.1 1.5-.4l1.5 1.5z"></path>
            </svg>
          </div>
        </mock:shadow-root>
      </ontario-icon-accessibility>
    `);
	});
});
//# sourceMappingURL=ontario-icon.spec.js.map
