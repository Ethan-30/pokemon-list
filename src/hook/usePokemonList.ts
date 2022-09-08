import {useMutation} from "react-query";
import {getListPokemon} from "../service/pokemon";
import {AxiosResponse} from "axios";
import {IPokemonResponse, IPokemonResponseRequest} from "../entity/IPokemonResponse";
import {useState} from "react";

export const usePokemonList = () => {
	const [pokemonList, setPokemonList] = useState<Array<IPokemonResponse>>([]);
	const [totalPokemonList, setTotalPokemonList] = useState<number>(0);

	const {mutate} = useMutation((offset: number) => getListPokemon(offset), {
		onSuccess: (response: AxiosResponse<IPokemonResponseRequest>) => {
			if (!response) {
				return;
			}
			const data = response.data;
			setTotalPokemonList(data.count);
			setPokemonList(_pokemonList => [..._pokemonList, ...data.results])
		},
		onError: (response) => {
			console.log(response)
		}
	})
	return {pokemonList, totalPokemonList}
}
