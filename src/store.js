import { createStore } from "redux";
import reducer from "./components/reducer/reducer.js";

const store = createStore(reducer);

export default store;
