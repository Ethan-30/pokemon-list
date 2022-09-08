import {act, renderHook, waitFor} from "@testing-library/react";
import {QueryClient, QueryClientProvider} from "react-query";
import {usePokemonInfo} from "../usePokemonInfo";
import {API_URL} from "../../config";
import {usePokemonList} from "../usePokemonList";
import {logger} from "react-query/types/react/logger";

describe('usePokemonList', () => {
	// setUp();

	test('should render correct usePokemonList', async () => {
		const queryClient = new QueryClient();
		const wrapper = ({ children }:any) => (
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		);

		const { result } = renderHook(() => usePokemonList(1), { wrapper });

		await waitFor(() => expect(result.current).toBeDefined());
	});
});
