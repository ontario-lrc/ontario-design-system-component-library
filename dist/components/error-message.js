import { h } from '@stencil/core/internal/client';
import { i as isEmpty } from './utils.js';

const ErrorMessage = ({ message, error = false }) => {
	const hideError = !error || isEmpty(message);
	return h(
		'div',
		{ role: 'alert', class: `ontario-error-messaging ${hideError ? 'ontario-error__hidden' : ''}` },
		h('ontario-icon-alert-error', null),
		h('div', { class: 'ontario-error-messaging__content' }, message),
	);
};

export { ErrorMessage as E };

//# sourceMappingURL=error-message.js.map
