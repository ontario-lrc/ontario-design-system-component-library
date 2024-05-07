import { h } from '@stencil/core';
import { isEmpty } from '../../../utils/helper/utils';
export const ErrorMessage = ({ message, error = false }) => {
	const hideError = !error || isEmpty(message);
	return h(
		'div',
		{ role: 'alert', class: `ontario-error-messaging ${hideError ? 'ontario-error__hidden' : ''}` },
		h('ontario-icon-alert-error', null),
		h('div', { class: 'ontario-error-messaging__content' }, message),
	);
};
//# sourceMappingURL=error-message.js.map
