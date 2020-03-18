import { REMOVE_FEATURE, ADD_FEATURE } from "../actions/featuresActions";

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const featuresReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_FEATURE: 
            return {
                ...state,
                car: {
                    ...state.car,
                    features: state.car.features.filter(f => action.payload.id != f.id )
                },
                additionalPrice: state.additionalPrice - action.payload.price
            }
        case ADD_FEATURE: 
            const newState= {
                ...state,
                car: {
                    ...state.car,
                    features: [...state.car.features, action.payload]
                },
                additionalPrice: state.additionalPrice + action.payload.price
            }
            console.log(newState);
            return newState;
        
        default:
            return state;
    }
};
