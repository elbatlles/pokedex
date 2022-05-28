import { compose, createStore, applyMiddleware } from "redux";
//import pokemonReducer from "../reducer/pokemonReducer";
import { logaction, reportError } from "../middlewares";
import createsagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import pokemonSaga from "../sagas";
import rootReducer from "../reducer/rootReducers";
//const sagaMiddleware = createsagaMiddleware();
// const middlewares = [sagaMiddleware, logaction, reportError];
const middlewares = [thunk,logaction, reportError];
//applyMiddleware(thunk, sagaMiddleware, logaction, reportError)
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeAlt(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, composedEnhancers);
//sagaMiddleware.run(pokemonSaga);
