import { SET_POKEMONS, TOOGLE_LOADER, FAV_POKEMON } from "../actions/type";

const initialState = {
  list: [],
  loading: false,
  error: null,
  favorite: [],
};

const pokemonReducer = (state = initialState, action) => {
  console.log(action.payload);
  console.log("ssss");
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        list: action.payload,
      };

    case TOOGLE_LOADER:
      console.log("pasem pel toogle");
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
