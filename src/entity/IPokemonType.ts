import {POKEMON_TYPE} from "../constants";

export interface IPokemonType  {
	slot: number;
	type: {
		name: POKEMON_TYPE;
		url: string;
	}
}
