import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/rootReducer";
import { logaction, reportError } from "../middlewares";

import thunk from "redux-thunk";
const middlewares = [thunk, logaction, reportError];
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeAlt(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, composedEnhancers);
