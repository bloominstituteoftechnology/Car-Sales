import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/featureActions';

const initialState = {
	additionalPrice: 0,
	car: {
		price: 26395,
		name: '2019 Ford Mustang',
		image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
		features: []
	},
	additionalFeatures: [
		{ id: 1, name: 'V-6 engine', price: 1500 },
		{ id: 2, name: 'Racing detail package', price: 1500 },
		{ id: 3, name: 'Premium sound system', price: 500 },
		{ id: 4, name: 'Rear spoiler', price: 250 }
	]
};

export const featureReducer = (state = initialState, action) => {
	console.log(state);
	switch (action.type) {
		case ADD_FEATURE:
			console.log('Add action is working!', action.payload);
			const newFeatureAdded = state.additionalFeatures.filter(feature => feature.id === action.payload);
			// console.log(newFeatureAdded);
			return {
				...state,
				additionalPrice: state.additionalPrice + newFeatureAdded[0].price,
				car: { ...state.car, features: [...state.car.features, newFeatureAdded] }
			};
		case REMOVE_FEATURE:
			console.log('Delete feature action is working!', action.payload);
			console.log(state);
			return {
				...state,
				additionalPrice: state.additionalPrice - action.payload.price,
				car: {
					...state.car,
					features: state.car.features.filter(item => item[0].id !== action.payload.id)
				}
			};
		default:
			return state;
	}
};
