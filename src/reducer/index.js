import { TOGGLE_FEATURE, ADD_FEATURE, REMOVE_FEATURE } from "../actions/index";

export const initialState = {
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
		{ id: 2, name: "Racing detail package", price: 1500, selected: false },
		{ id: 3, name: "Premium sound system", price: 500, selected: false },
		{ id: 4, name: "Rear spoiler", price: 250, selected: false },
	],
};

export const reducer = (state = initialState, action) => {
	const costArray = [];
	switch (action.type) {
		case TOGGLE_FEATURE:
			return {
				...state,
				additionalFeatures: [
					...state.additionalFeatures,
					{ selected: !state.additionalFeatures.selected },
				],
			};
		case ADD_FEATURE:
			return {
				...state,
				additionalPrice: () => {
					const reducer = (acc, currentValue) => acc + currentValue;
					costArray.push(state.additionalPrice, action.payload.price);
					return costArray.reduce(reducer);
				},
				features: [...state.car.features, { features: action.payload }],
			};
		case REMOVE_FEATURE:
			return {
				...state,
				additionalPrice: () => {
					const reducer = (acc, currentValue) => acc - currentValue;
					costArray.push(state.additionalPrice, action.payload.price);
					return costArray.reduce(reducer);
				},
			};
		default:
			return state;
	}
};
