import { newSpecPage } from '@stencil/core/testing';
import { OntarioCheckboxes } from '../ontario-checkboxes';
describe('ontario-checkbox', () => {
	it('renders', async () => {
		const page = await newSpecPage({
			components: [OntarioCheckboxes],
			html: `<ontario-checkboxes></ontario-checkboxes>`,
		});
		expect(page.root).toEqualHtml(`
      <ontario-checkboxes>
        <mock:shadow-root>
          <div class="ontario-form-group">
            <fieldset class="ontario-fieldset">
              <legend class="ontario-fieldset__legend">
                <span class="ontario-label__flag">
                  (optional)
                </span>
              </legend>
              <div class="ontario-checkboxes"></div>
            </fieldset>
          </div>
        </mock:shadow-root>
      </ontario-checkboxes>
    `);
	});
});
//# sourceMappingURL=ontario-checkboxes.spec.js.map
