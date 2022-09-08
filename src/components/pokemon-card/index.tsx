import {IPokemonResponse} from "../../entity/IPokemonResponse";
import {useQuery} from "react-query";
import {COLOR_POKEMON_TYPE, CONSTANTS, POKEMON_TYPE, QUERY_KEY} from "../../constants";
import {getPokemonInfo} from "../../service/pokemon";
import {useMemo} from "react";
import {get} from 'lodash';
import mix from 'mix-css-color'
import {IPokemonInfo} from "../../entity/IPokemonInfo";
import {API_URL} from "../../config";
import {usePokemonInfo} from "../../hook/usePokemonInfo";

interface IPokemonCardProps {
	pokemon: IPokemonResponse;
}

export const PokemonCard = ({pokemon}: IPokemonCardProps) => {
	const {pokemonId, backgroundCard} = usePokemonInfo(pokemon);

	return (
		<div className={`w-full h-[250px] rounded-2xl p-4 flex flex-col`} style={{backgroundColor: backgroundCard}} data-testid={`pokemon-${pokemon.name}`}>
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
