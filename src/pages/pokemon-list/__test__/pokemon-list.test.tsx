import {cleanup, render, screen} from '@testing-library/react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {PokemonList} from "../index";
import * as usePokemonList from "../../../hook/usePokemonList"
import {API_URL} from "../../../config";
import * as usePokemonInfo from "../../../hook/usePokemonInfo";

describe('Test action api', () => {
	afterEach(() => {
		cleanup();
		jest.resetAllMocks();
	});
	test('Able to render created pokeList', () => {
		setUp();
		expect(screen.queryByTestId('pokemon-test')).not.toBeNull();
	});

	test('snapshot test', () => {
		jest.spyOn(usePokemonList, 'usePokemonList').mockReturnValue({
			totalPokemonList: 1000,
			results: [{
				name: 'bulbasasur',
				url: `${API_URL.apiList}/1/`,
			}],
		});
		jest.spyOn(usePokemonInfo, 'usePokemonInfo').mockReturnValue({
			pokemonId : '1',
			backgroundCard: 'red'
		});
		const { asFragment } = render(
			<QueryClientProvider client={new QueryClient()}>
				<PokemonList />
			</QueryClientProvider>
		);
		// expect(asFragment()).toMatchSnapshot();
		expect(screen.queryByTestId('pokemon-bulbasasur')).not.toBeNull();
	});
});

const setUp = () => {
	render(
		<QueryClientProvider client={new QueryClient()}>
			<PokemonList />
		</QueryClientProvider>
	);
};
