import { ADD_FEATURE, REMOVE_FEATURE } from "../actions";

const initialState = {
	additionalPrice: 0,
	car: {
		price: 26395,
		name: "2019 Ford Mustang",
		image:
			"https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
		features: [],
	},
	additionalFeatures: [
		{ id: 1, name: "V-6 engine", price: 1500 },
		{ id: 2, name: "Racing detail package", price: 1500 },
		{ id: 3, name: "Premium sound system", price: 500 },
		{ id: 4, name: "Rear spoiler", price: 250 },
	],
};

export const featuresReducer = (state = initialState, action) => {
	console.log("ACTION FROM REDUCER =====> ", action);
	//  TODO switch (1)
	switch (action.type) {
		case ADD_FEATURE:
			return {
				//  TODO state (1)
				...state,
				additionalPrice:
					state.additionalPrice + action.payload.price,
				car: {
					...state.car,
					features: [...state.car.features, action.payload],
				},
			};
		// TODO switch (2)
		case REMOVE_FEATURE:
			return {
				// TODO state (2)
				...state,
				additionalPrice:
					state.additionalPrice - action.payload.price,
				car: {
					...state.car,
					features: state.car.features.filter((item) => {
						if (action.payload !== item) {
							return {
								...item,
							};
						}
					}),
				},
			};
		//  TODO default return
		default:
			return state;
	}
};
