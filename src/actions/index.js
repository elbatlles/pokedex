import { CLEAR_ERROR, FAV_POKEMON, FETCH_POKEMONS, SET_ERROR, SET_POKEMONS, TOOGLE_LOADER } from "./type";
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
  dispatch(toggleLoader());
  getPokemons().then((response) => {
    
    const pokemonList = response.results;
    return Promise.all(
      pokemonList.map((pokemon) => axios.get(pokemon.url))
    ).then((Pokemonresponse) => {
      const pokemonData = Pokemonresponse.map((pokemon) => pokemon.data);
      console.log(Pokemonresponse);
       dispatch(setPokemon(pokemonData));
       dispatch(toggleLoader());
    });
  });
  
};

export const favPokemon = (payload) => {
  console.log('aaa',payload);
   
  return {
    type: FAV_POKEMON,
    payload
  };

};

export const fetchPokemons = () => ({
  type: FETCH_POKEMONS,
});

export const toggleLoader = () => ({
  type: TOOGLE_LOADER,
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
