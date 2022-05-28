import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/rootReducer";
import { logaction, reportError } from "../middlewares";
import createsagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import pokemonSaga from "../sagas";
//const sagaMiddleware = createsagaMiddleware();
// const middlewares = [sagaMiddleware, logaction, reportError];
const middlewares = [thunk,logaction, reportError];
//applyMiddleware(thunk, sagaMiddleware, logaction, reportError)
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeAlt(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, composedEnhancers);
//sagaMiddleware.run(pokemonSaga);
