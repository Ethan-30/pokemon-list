import InfiniteScroll from 'react-infinite-scroll-component';
import {useState} from "react";
import {IPokemonResponse} from "../../entity/IPokemonResponse";
import {PokemonCard} from "../../components/pokemon-card";
import {CONSTANTS} from "../../constants";
import {usePokemonList} from "../../hook/usePokemonList";

export const PokemonList = () => {
	const [currentPage, setCurrentPage] = useState<number>(0);
	const {totalPokemonList, results: pokemonList} = usePokemonList(currentPage * CONSTANTS.LIMIT_DEFAULT);

	return (
		<div className={"flex flex-col max-w-full px-4 md:max-w-[85rem] mx-auto my-10"} data-testid="pokemon-test">
			<InfiniteScroll
				dataLength={pokemonList.length + CONSTANTS.LIMIT_DEFAULT}
				next={() => setCurrentPage(_oldPage => ++_oldPage)}
				hasMore={pokemonList.length < totalPokemonList}
				loader={null}
				endMessage={null}
				refreshFunction={() => {
				}}
				pullDownToRefresh
				pullDownToRefreshThreshold={50}
				pullDownToRefreshContent={null}
				releaseToRefreshContent={null}
			>
				<div
					className={'grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 w-full h-full'}>
					{pokemonList.map((_pokemon: IPokemonResponse) => {
						return (
							<PokemonCard key={`${_pokemon.name}-${_pokemon.url}`} pokemon={_pokemon}/>
						)
					})}
				</div>
			</InfiniteScroll>
		</div>
	)
}
