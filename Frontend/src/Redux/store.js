import { combineReducers, legacy_createStore } from "redux";

import CartReducer from "./CartReducer/reducer";

const rootReducer = combineReducers({ CartReducer });

const store = legacy_createStore(rootReducer);

export { store };
