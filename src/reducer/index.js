import { combineReducers } from "redux";

import { buyItem } from "./buyItem";
import { removeFeature } from "./removeFeature";

export const rootReducer = combineReducers({
    buyItem,
    removeFeature
});

