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
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_FEAT':
			const filteraditional = state.additionalFeatures.filter(
				f => action.payload.id !== f.id
			);

			return {
				...state,
				car: {
					...state.car,
					price: state.car.price + action.payload.price,
					features: [...state.car.features, action.payload]
				},
				additionalFeatures:
					//returns new array of products with != id
					filteraditional
			};
		case 'REMOVE_FEAT':
			const filteradded = state.car.features.filter(
				f => action.payload.id !== f.id
			);
			console.log('its working');
			return {
				...state,
				car: {
					...state.car,
					price: state.car.price - action.payload.price,
					features: filteradded
				},
				additionalFeatures: [...state.additionalFeatures, action.payload]
			};

		default:
			return state;
	}
};
