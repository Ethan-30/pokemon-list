import {renderHook, waitFor} from "@testing-library/react";
import {QueryClient, QueryClientProvider} from "react-query";
import {usePokemonInfo} from "../usePokemonInfo";
import {API_URL} from "../../config";

describe('usePokemonInfo', () => {
	// setUp();

	test('should render correct usePokemonInfo', async () => {
		const queryClient = new QueryClient();
		const wrapper = ({ children }:any) => (
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		);

		const { result } = renderHook(() => usePokemonInfo({
			name: 'bulbasasur',
			url: `${API_URL.apiList}/1/`,
		}), { wrapper });

		await waitFor(() => expect(result.current).toEqual({"backgroundCard": "#5593a5", "pokemonId": "1"}));
	});
});
