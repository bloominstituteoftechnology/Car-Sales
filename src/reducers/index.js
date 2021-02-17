import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/featureActions"


const initialState = {
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
    console.log("action type:", action.type);
    console.log("action payload:", action.payload);

    switch (action.type){
        case ADD_FEATURE:
            if(!state.car.features.includes(action.payload)){
            return {
                //copy state and reduce the price 
                ...state,
                additionalPrice: state.additionalPrice + action.payload.price,
                car: {
                    //copy state of car, set car.features equal to current features in copy of state, with payload feature.
                    ...state.car,
                    features: [state.car.features, action.payload]
                },
                additionalFeatures: [
                    //return copy of state where features remaining are not features with the payload id. Successfully removes from addtl.
                    ...state.additionalFeatures.filter(
                        feature => feature.id !== action.payload.id
                    )
                ]
            }} else {
                return state
            }
        default:
            return state
    }

  }

  export default reducer;