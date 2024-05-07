import { newSpecPage } from '@stencil/core/testing';
import { OntarioLoadingIndicator } from '../ontario-loading-indicator';
describe('ontario-loading-indicator', () => {
	it('should render the expected html', async () => {
		const page = await newSpecPage({
			components: [OntarioLoadingIndicator],
			html: `<ontario-loading-indicator></ontario-loading-indicator>`,
		});
		expect(page.root).toMatchSnapshot();
	});
	it('renders', async () => {
		const page = await newSpecPage({
			components: [OntarioLoadingIndicator],
			html: `<ontario-loading-indicator></ontario-loading-indicator>`,
		});
		expect(page.root).toEqualHtml(`
			<ontario-loading-indicator>
				<mock:shadow-root>
					<div aria-hidden="true" aria-live="assertive" class="ontario-loading-indicator__overlay" role="alert">
						<div class="ontario-loading-indicator">
							<svg class="ontario-loading-indicator__spinner" viewBox="25 25 50 50" xmlns="http://www.w3.org/2000/svg">
								<circle cx="50" cy="50" fill="none" r="20" stroke-width="4"></circle>
							</svg>
							<p>Loading</p>
						</div>
					</div>
				</mock:shadow-root>
			</ontario-loading-indicator>
		`);
	});
});
//# sourceMappingURL=ontario-loading-indicator.spec.js.map
