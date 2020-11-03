import { configureStore } from "@reduxjs/toolkit";

// const rootReducer = combineReducers({});
import carReducer from "../features/car/carSlice";
export default configureStore({
	reducer: {
		car: carReducer,
	}
})