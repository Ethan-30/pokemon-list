import {IPokemonType} from "./IPokemonType";

export interface IPokemonInfo {
	id: string;
	height: number;
	weight: number;
	name: string;
	types: Array<IPokemonType>
}
