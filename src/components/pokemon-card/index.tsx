import {IPokemonResponse} from "../../entity/IPokemonResponse";
import {useQuery} from "react-query";
import {COLOR_POKEMON_TYPE, CONSTANTS, POKEMON_TYPE, QUERY_KEY} from "../../constants";
import {getPokemonInfo} from "../../service/pokemon";
import {useMemo} from "react";
import {get} from 'lodash';
import mix from 'mix-css-color'
import {IPokemonInfo} from "../../entity/IPokemonInfo";
import {API_URL} from "../../config";

interface IPokemonCardProps {
	pokemon: IPokemonResponse;
}

export const PokemonCard = ({pokemon}: IPokemonCardProps) => {
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

	return (
		<div className={`w-full h-[250px] rounded-2xl p-4 flex flex-col`} style={{backgroundColor: backgroundCard}}>
			<img
				className={"w-full h-full object-contain max-h-[180px]"}
				src={`${API_URL.apiImage}${pokemonId}.png`}
				onError={({ currentTarget }) => {
					currentTarget.onerror = null;
					currentTarget.src=CONSTANTS.HTML_CODE_IMAGE_NOT_FOUND
				}}
				alt={pokemon.name}
			/>
			<span className={"text-white font-medium text-center"}>{pokemon.name}</span>
		</div>
	)
}
