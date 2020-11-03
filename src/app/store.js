import { configureStore, combineReducers } from "@reduxjs/toolkit";

import carReducer from "../features/car/carSlice";
import featuresReducer from "../features/addFeatures/featuresSlice";
// import priceReducer from "../features/price/priceSlice";

const rootReducer = combineReducers({
	car: carReducer,
	features: featuresReducer,
	// price: priceReducer,
});

export default configureStore({
	reducer: rootReducer,
})