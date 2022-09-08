import {cleanup, render, screen} from '@testing-library/react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {BrowserRouter} from 'react-router-dom';
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
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</QueryClientProvider>
	);
};
