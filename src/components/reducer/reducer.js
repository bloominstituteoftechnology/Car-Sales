import * as actions from "../actions/actions";

export default function reducer(state, action) {
    switch(action.type) {
        case actions.ADD_OPTION:
            return {
                ...state,
                additionalPrice: action.payload.price.price + state.additionalPrice,
                car: {...state.car, features: [...state.car.features, action.payload.name]}, 
            };
        case actions.REMOVE_OPTION:
            return {
                ...state,
                additionalPrice: action.payload.price.price - state.additionalPrice,
                car: {...state.car, features: [state.car.features.filter(feature => feature !==action.payload.name)]} 
            };
        default: 
            return state;
    }
}