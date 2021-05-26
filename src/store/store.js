import { createStore } from "redux";
import carReducer from "../reducers/carReducer";
import { devToolsEnhancer } from "redux-devtools-extension";

const store = createStore(carReducer, devToolsEnhancer());

export default store;