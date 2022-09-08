import {CONSTANTS} from "../constants";
import {sendGetRequest} from "./index";
import {API_URL} from "../config";

export const getListPokemon = (offset: number, limit: number = CONSTANTS.LIMIT_DEFAULT) => {
	return sendGetRequest(`${API_URL.apiList}?limit=${limit}&offset=${offset}`);
}

export const getPokemonInfo = (url: string) => {
	return sendGetRequest(url)
}
