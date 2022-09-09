import {renderHook, waitFor, render} from "@testing-library/react";
import {QueryClient, QueryClientProvider} from "react-query";
import {usePokemonList} from "../usePokemonList";
import * as ReactQuery from 'react-query';
import {QUERY_KEY} from "../../constants";

describe('usePokemonList', () => {

	test('should render correct usePokemonList', async () => {
		const queryClient = new QueryClient();
		const wrapper = ({ children }:any) => (
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		);

		const { result } = renderHook(() => usePokemonList(0), { wrapper });

		await waitFor(() => expect(result.current).toBeDefined());
	});
});

describe('usePokemonList 2', () => {
	test('should render correct usePokemonList', async () => {
		const queryClient = new QueryClient();
		const wrapper = ({ children }:any) => (
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		);

		const { result } = renderHook(() => usePokemonList(0), { wrapper });
		await waitFor(() => expect(result.current.totalPokemonList).toEqual(1154));
	});

});
