import {useQuery} from "react-query";
import {COLOR_POKEMON_TYPE, POKEMON_TYPE, QUERY_KEY} from "../constants";
import {getPokemonInfo} from "../service/pokemon";
import {useMemo} from "react";
import {get} from "lodash";
import {IPokemonInfo} from "../entity/IPokemonInfo";
import mix from "mix-css-color";
import {IPokemonResponse} from "../entity/IPokemonResponse";

export const usePokemonInfo = (pokemon: IPokemonResponse) => {
	const {data} = useQuery([QUERY_KEY.POKEMON, pokemon.url], () => getPokemonInfo(pokemon.url));
	const pokemonId = pokemon.url.slice(0, -1).split('/').pop();

	const backgroundCard = useMemo(() => {
		const pokemon = get(data, 'data') as IPokemonInfo;

		if (!pokemon?.types) {
			return COLOR_POKEMON_TYPE[POKEMON_TYPE.UNKNOWN];
		}
		const colors = pokemon.types.map(_item => COLOR_POKEMON_TYPE[_item.type.name]);

		if(colors.length > 1){
			return mix(colors[0], colors[1]).hex;
		}

		return colors[0];

	},[data]);

	return {pokemonId, backgroundCard}
}
