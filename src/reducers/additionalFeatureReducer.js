import { TOGGLE_ADDITIONAL_FEATURE } from "../actions/additionalFeatureAction";

const initialState = {
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
      ]
};

export const additionalFeatureReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ADDITIONAL_FEATURE:
        return {
            ...state,
            additionalFeatures: state.additionalFeatures.map((feature) => {
                if (feature.id === action.payload) {
                    return {
                        price: feature.price,
                    };
                } else {
                    return feature;
                }
            }),
        };
        default:
            return state;
    }
};