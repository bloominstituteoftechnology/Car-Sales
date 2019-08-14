const defaultState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

export default function(state = defaultState, action) {
    switch(action.type){
        case "ADD_FEATURE":
            {
                const filteredStore = state.store.filter(feature => feature !== action.payload );
                const priceAdded = state.additionalPrice + action.payload.price;
                const features = [...state.car.features]
                features.push(action.payload);

                return {
                    additionalPrice:priceAdded,
                    car:{
                        ...state.car,
                        features:features
                    },
                    store:filteredStore,
                 }
            }
        case "REMOVE_FEATURE":
            {
                const newStore = [...state.store]; newStore.push(action.payload);
                const priceRemoved = state.additionalPrice - action.payload.price;
                const featuresFiltered = state.car.features.filter(feature => feature !== action.payload);
                return {
                    additionalPrice:priceRemoved,
                    car:{
                        ...state.car,
                        features:featuresFiltered
                    },
                    store:newStore,
                }
            }
        default:
            return state;
    }
}
