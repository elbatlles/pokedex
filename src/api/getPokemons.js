import axios from "../services/axios";

export const getPokemons = () => {
  return axios({
    method: "GET",
    url: "/pokemon?limit=151?offset=151",
  }).then((response) => {
    return response.data;
  });
};
export const getPokemonWithDetails = () => {

  return getPokemons().then((response) => {

    // dispatch(setPokemon(response.results));
    const pokemonList = response.results;

    return Promise.all(
      pokemonList.map((pokemon) => axios.get(pokemon.url))
    ).then((Pokemonresponse) => {
       return Pokemonresponse.map((pokemon) => pokemon.data);

    });
  });
};
