import {useQuery} from "react-query";
import {getListPokemon} from "../service/pokemon";
import {AxiosResponse} from "axios";
import {IPokemonResponse, IPokemonResponseRequest} from "../entity/IPokemonResponse";
import {useEffect, useState} from "react";
import {QUERY_KEY} from "../constants";
import { log } from "console";

export const usePokemonList = (offset: number,initialValue: Array<IPokemonResponse> = []) => {
	const [count, setCount] = useState<number>(0);
	const [pokemonList, setPokemonList] = useState<Array<IPokemonResponse>>(initialValue);

 const {data}=	useQuery([QUERY_KEY.LIST_POKEMON, offset],() => getListPokemon(offset));

 useEffect(() =>{
	 setCount(data?.data?.count || 0 );
	 setPokemonList(oldValue => [...oldValue, ...(data?.data?.results ??[])]);
 },[data])


	return { totalPokemonList: count || 0, results: pokemonList}
}
