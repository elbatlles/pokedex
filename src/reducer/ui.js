import { fromJS } from "immutable";
//import Immutable from 'immutable';
import { SET_POKEMONS,TOOGLE_LOADER ,FAV_POKEMON} from "../actions/type";

const initialState = fromJS({
  
  loading: false,
  error: null,
  favorite:[]
});

const uiReducer = (state = initialState, action) => {
  
 // console.log( state.get('loading'));
  console.log(state
    .get('list'),'list');
  switch (action.type) {
    
     
     
      case TOOGLE_LOADER: 
      const isLoading = state.get('loading')
      return state.set('loading',!isLoading)
 
      default:
      return state
  }
};
export default uiReducer;
