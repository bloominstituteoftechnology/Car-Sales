import { configureStore, combineReducers } from "@reduxjs/toolkit";

import carReducer from "../features/car/carSlice";
import featuresReducer from "../features/addFeatures/featuresSlice";

const rootReducer = combineReducers({
	car: carReducer,
	features: featuresReducer,
});

export default configureStore({
	reducer: rootReducer,
})