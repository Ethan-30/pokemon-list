import {IPokemonResponse} from "../../entity/IPokemonResponse";
import {CONSTANTS} from "../../constants";
import {API_URL} from "../../config";
import {usePokemonInfo} from "../../hook/usePokemonInfo";

interface IPokemonCardProps {
	pokemon: IPokemonResponse;
}

export const PokemonCard = ({pokemon}: IPokemonCardProps) => {
	const {isLoading, pokemonId, backgroundCard} = usePokemonInfo(pokemon);

	return (
		<div
			className={`w-full h-[250px] rounded-2xl p-4 flex flex-col ${isLoading ? 'animate-pulse bg-slate-700' : ''}`}
			style={{backgroundColor: backgroundCard}} data-testid={`pokemon-${pokemon.name}`}>
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
