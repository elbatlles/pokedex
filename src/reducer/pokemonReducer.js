import { SET_POKEMONS, TOOGLE_LOADER, FAV_POKEMON } from "../actions/type";

const initialState = {
  list: [],
  loading: false,
  error: null,
  favorite: [],
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        list: action.payload,
      };

    case TOOGLE_LOADER:
      return {
        ...state,
        loading: !state.loading,
      };

    case FAV_POKEMON:
      return {
        ...state,
        list: state.list.map((elem) =>
          elem.id === action.payload
            ? { ...elem, favorite: !elem.favorite }
            : elem
        ),
      };

    default:
      return state;
  }
};
export default pokemonReducer;
