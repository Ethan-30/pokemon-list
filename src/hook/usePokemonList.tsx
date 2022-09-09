import { useQuery } from "react-query";
import { getListPokemon } from "../service/pokemon";
import { IPokemonResponse } from "../entity/IPokemonResponse";
import { useEffect, useState } from "react";
import { QUERY_KEY } from "../constants";

export const usePokemonList = (offset: number, initialValue: Array<IPokemonResponse> = []) => {
	const [pokemonList, setPokemonList] = useState<Array<IPokemonResponse>>(initialValue);

	const { data, isLoading } = useQuery([QUERY_KEY.LIST_POKEMON, offset], () => getListPokemon(offset));

	useEffect(() => {
		setPokemonList(oldValue => [...oldValue, ...(data?.data?.results ?? [])]);
	}, [data]);


	return { isLoading, totalPokemonList: data?.data?.count || 0, results: pokemonList };
}
