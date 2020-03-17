import { createStore, applyMiddleware } from "redux";
import { carReducer } from "./reducers/carReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  carReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
