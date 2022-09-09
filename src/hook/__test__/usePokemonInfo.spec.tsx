import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { usePokemonInfo } from "../usePokemonInfo";
import { API_URL } from "../../config";

describe("usePokemonInfo", () => {

	test("should render correct usePokemonInfo", async () => {
		const queryClient = new QueryClient();
		const wrapper = ({ children }: any) => (
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		);

		const { result } = renderHook(() => usePokemonInfo({
			name: "bulbasasur",
			url: `${API_URL.apiList}/1/`
		}), { wrapper });

		await waitFor(() => expect(result.current).toEqual({
			isLoading: false,
			"backgroundCard": "#5593a5",
			"pokemonId": "1"
		}));
	});
});

describe('usePokemonInfo 2', () => {
	test('should render correct usePokemonInfo', async () => {
		const queryClient = new QueryClient();
		const wrapper = ({ children }:any) => (
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		);

		const { result } = renderHook(() => usePokemonInfo({
			name: "charmander",
			url: `${API_URL.apiList}/4/`
		}), { wrapper });

		await waitFor(() => expect(result.current).toEqual({
			isLoading: false,
			"backgroundCard": "#B18260",
			"pokemonId": "4"
		}));
	});
});

describe('usePokemonInfo 3', () => {
	test('should render correct usePokemonInfo', async () => {
		const queryClient = new QueryClient();
		const wrapper = ({ children }:any) => (
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		);

		const { result } = renderHook(() => usePokemonInfo({
			name: 'charmander',
			url: '44',
		}), { wrapper });

		await waitFor(() => expect(result.current).toEqual({
			"isLoading": true,
			"backgroundCard": "#BLACK",
			"pokemonId": "44"
		}));
	});
});
