import { setMode } from '@stencil/core/internal/client';
export { getAssetPath, setAssetPath, setNonce, setPlatformOptions } from '@stencil/core/internal/client';

setMode((elm) => {
	// NOTE: you can write whatever you want here - it's up to you. This
	// function must return one of the style "modes" defined in step 1.
	return elm.type;
});

//# sourceMappingURL=index.js.map
