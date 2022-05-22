import { call, put, takeEvery } from "redux-saga/effects";
import { getPokemonWithDetails } from "../api/getPokemons";
import { setPokemon,toggleLoader } from "../actions";
import { FETCH_POKEMONS } from "../actions/type";

function* fetchPokemonWithDetails(action) {
  try {
    
    yield call(toggleLoader,action.payload);
    const response = yield call(getPokemonWithDetails,action.payload);
    yield call(toggleLoader,action.payload);
console.log(response)
     yield put(setPokemon(  response ));
   // console.log(response,'ss');
    //   yield put({ type: "FETCH_USER_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "FETCH_USER_FAILURE", payload: error });
  }
}

function* pokemonSaga() {
  yield takeEvery(FETCH_POKEMONS, fetchPokemonWithDetails);
}
export default pokemonSaga;
