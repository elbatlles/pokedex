import { CLEAR_ERROR, FETCH_POKEMONS, SET_ERROR, SET_POKEMONS } from "./type";
import { getPokemons } from "../api/getPokemons";
import axios from "axios";

export const setPokemon = (payload) => {
  return {
    type: SET_POKEMONS,
    payload: payload,
  };
};
export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const clearError = (payload) => ({
  type: CLEAR_ERROR,
  payload,
});

export const getPokemonWithDetails = () => (dispatch, getState) => {
  getPokemons().then((response) => {
    console.log("aa");
    // dispatch(setPokemon(response.results));
    const pokemonList = response.results;
    return Promise.all(
      pokemonList.map((pokemon) => axios.get(pokemon.url))
    ).then((Pokemonresponse) => {
      const pokemonData = Pokemonresponse.map((pokemon) => pokemon.data);
      console.log(Pokemonresponse);
      dispatch(setPokemon(pokemonData));
    });
  });
};
export const fetchPokemons = () => ({
  type: FETCH_POKEMONS,
});
/*  getPokemons().then((response) => {
      // dispatch(setPokemon(response.results));
      const pokemonList = response.results;
      return Promise.all(
        pokemonList.map((pokemon) => axios.get(pokemon.url))
      ).then((Pokemonresponse) => {
        const pokemonData = Pokemonresponse.map((pokemon) => pokemon.data);
        dispatch(setPokemon(pokemonData));
      });
    });*/
