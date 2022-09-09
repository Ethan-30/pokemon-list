import {cleanup, render, screen} from '@testing-library/react';
import {QueryClient, QueryClientProvider} from 'react-query';
import App from '../App';

describe('Test action api', () => {
	afterEach(() => {
		cleanup();
		jest.resetAllMocks();
	});

	test('Able to render created pokeList', () => {
		setUp();
		expect(screen.queryByTestId('pokemon-test')).not.toBeNull();
	});
});

const setUp = () => {
	render(
		<QueryClientProvider client={new QueryClient()}>
			<App />
		</QueryClientProvider>
	);
};
