import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/featureAction"

export const initialState = {
	additionalPrice: 0,
	car: {
	  price: 26395,
	  name: '2019 Ford Mustang',
	  image:
	    'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
	  features: []
	},
	additionalFeatures: [
	  { id: 1, name: 'V-6 engine', price: 1500 },
	  { id: 2, name: 'Racing detail package', price: 1500 },
	  { id: 3, name: 'Premium sound system', price: 500 },
	  { id: 4, name: 'Rear spoiler', price: 250 }
	]
}

// HELPER FUNCTIONS



export const carReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FEATURE:
			const additionalFeatureIdentifier = state.additionalFeatures.filter(item => item.id === action.payload.id)[0];
			const remainingAdditionalFeatures = state.additionalFeatures.filter(item => item.id !== action.payload.id);
			const newAddedFeatures = [...state.car.features, additionalFeatureIdentifier];
			const newRemainingAdditionalFeatures = [...remainingAdditionalFeatures.filter(item => item.name !== newAddedFeatures.item)];
			return {
				...state,
				additionalPrice: state.additionalPrice + additionalFeatureIdentifier.price,
				car: {...state.car, features: newAddedFeatures}, 
				additionalFeatures: [...newRemainingAdditionalFeatures]
			};
		case REMOVE_FEATURE:
			const addedFeatureIdentifier = state.car.features.filter(item => item.id === action.payload.id)[0];
			const remainingAddedFeatures = state.car.features.filter(item => item.id !== action.payload.id);
			const newAdditionalFeatures = [...state.additionalFeatures, addedFeatureIdentifier];
			const newRemainingAddededFeatures = [...remainingAddedFeatures.filter(item => item.name !== newAdditionalFeatures.item)]
			return {
				...state,
				additionalPrice: state.additionalPrice - addedFeatureIdentifier.price,
				car: {...state.car, features: newRemainingAddededFeatures},
				additionalFeatures: [...newAdditionalFeatures]
			};
		default:
			return state;
	}
}