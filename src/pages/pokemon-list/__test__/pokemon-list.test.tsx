import {cleanup, render, screen} from '@testing-library/react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {PokemonList} from "../index";


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
		// jest.spyOn(useInfinity, 'useInfiniteList').mockReturnValue({
		// 	data: {
		// 		pages: [
		// 			{
		// 				results: [
		// 					{
		// 						name: 'bulbasasur',
		// 						url: `${process.env.POKE_BASE_URL}/pokemon/1/`,
		// 					},
		// 				],
		// 			},
		// 		],
		// 		pageParams: [],
		// 	},
		// 	isLoading: false,
		// 	hasNextPage: false,
		// 	fetchNextPage: jest.fn(),
		// });
		// jest.spyOn(useQuery, 'useQueryGetPokeType').mockReturnValue({
		// 	isLoading: false,
		// 	data: {
		// 		results: [
		// 			{
		// 				name: 'normal',
		// 				url: `${process.env.POKE_BASE_URL}/type/1/`,
		// 			},
		// 		],
		// 	},
		// 	error: undefined,
		// });
		const { asFragment } = render(
			<QueryClientProvider client={new QueryClient()}>
				<PokemonList />
			</QueryClientProvider>
		);

		expect(asFragment()).toMatchSnapshot();
	});
});

const setUp = () => {
	render(
		<QueryClientProvider client={new QueryClient()}>
			<PokemonList />
		</QueryClientProvider>
	);
};
