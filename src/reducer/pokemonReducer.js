 import { fromJS } from "immutable";
//import Immutable from 'immutable';
import { SET_POKEMONS,TOOGLE_LOADER ,FAV_POKEMON} from "../actions/type";

const initialState = fromJS({
  list: [],
  loading: false,
  error: null,
  favorite:[]
});

const pokemonReducer = (state = initialState, action) => {
  
 // console.log( state.get('loading'));
  console.log('ssss')
  switch (action.type) {
    
    case SET_POKEMONS:
      return state.setIn(['list'], fromJS(action.payload));// return {
      //   ...state,
      //   list: action.payload,
      // }; 
      case FAV_POKEMON:
      const currentPokemonIndex = state
        .get('list')
        .findIndex((elem) => elem.get('id') === action.payload);
        console.log(action.payload,'idddd');
      const isFavorite = state
        .get('list')
        .get(currentPokemonIndex)
        .get('favorite');
    console.log(isFavorite, 'isFavorite');
      return state.setIn(
        ['list', currentPokemonIndex, 'favorite'],
        !isFavorite
      );
      case TOOGLE_LOADER: 
      const isLoading = state.get('loading')
      return state.set('loading',!isLoading)
 
      default:
      return state
  }
};
export default pokemonReducer;
