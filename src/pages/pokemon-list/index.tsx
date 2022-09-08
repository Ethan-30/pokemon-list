import {useMutation} from "react-query";
import InfiniteScroll from 'react-infinite-scroll-component';
import {useEffect, useState} from "react";
import {IPokemonResponse, IPokemonResponseRequest} from "../../entity/IPokemonResponse";
import {PokemonCard} from "../../components/pokemon-card";
import {getListPokemon} from "../../service/pokemon";
import {AxiosResponse} from "axios";
import { CONSTANTS } from "../../constants";

export const PokemonList = () => {
	const [currentPage, setCurrentPage] = useState<number>(0)
	const [pokemonList, setPokemonList] = useState<Array<IPokemonResponse>>([]);
	const [totalPokemonList, setTotalPokemonList] = useState<number>(0);
	let counter = 0;

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

	useEffect(() => {
		if(counter > 0) return;
		counter ++;
		mutate(currentPage);
	}, [])

	const onNextPage = () => {
		setCurrentPage(_page => {
			mutate((++_page) * CONSTANTS.LIMIT_DEFAULT);
			return _page;
		});
	}

	return (
		<div className={"flex flex-col max-w-full px-4 md:max-w-[85rem] mx-auto my-10"} data-testid="pokemon-test">
			<InfiniteScroll
				dataLength={pokemonList.length + CONSTANTS.LIMIT_DEFAULT}
				next={() => onNextPage()}
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
				<div className={'grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 w-full h-full'}>
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
