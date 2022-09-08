export interface IPokemonResponse {
	name: string;
	url: string;
}

export interface IPokemonResponseRequest {
	count: number;
	next: string;
	previous: string;
	results: Array<IPokemonResponse>
}
