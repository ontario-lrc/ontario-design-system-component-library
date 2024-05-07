export const mutationObserverMock = jest.fn().mockImplementation(() => {
	return {
		observe: jest.fn(),
		disconnect: jest.fn(),
		takeRecords: jest.fn(),
	};
});
//# sourceMappingURL=mutation-observer.mock.js.map
