import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { setError, toggleLoading } from './ui';
import { getPokemons, getPokemonsWithDetails } from '../api/getPokemons';
const initialState = {
    list: [],
}
export const fetchPokemons = createAsyncThunk(
    'pokemon/fetchPokemons',
    async (_, { dispatch }) => {
      try {
        dispatch(toggleLoading());
        const response = await getPokemons();
        const pokemonsWithDetails = await getPokemonsWithDetails(
          response.results
        );
        console.log(pokemonsWithDetails);
        dispatch(setPokemons(pokemonsWithDetails));
        dispatch(toggleLoading());
      } catch (err) {
        dispatch(setError({ error: err, message: 'Error fetching pokemons' }));
        dispatch(toggleLoading());
      }
    }
  );

export const pokemonSlice = createSlice({
name: "pokemon",
initialState,
reducers: {
    setPokemons: (state, action) => {
        state.list = action.payload;
    },
    setFavorite: (state, action) => {
        const currentPokemonIndex = state.list.findIndex(
          (elem) => elem.id === action.payload
        );
        if (currentPokemonIndex >= 0) {
          state.list[currentPokemonIndex].favorite =
            !state.list[currentPokemonIndex].favorite;
        }
      },
    },
});

export const { setPokemons, setFavorite } = pokemonSlice.actions;

export default pokemonSlice.reducer;