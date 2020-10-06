import { ADD_NEW_FEATURE } from "../actions/featureActions";

const initialState = {
    features: [
        { name: "paint job", featureStatus: true },
        { name: "chrome", featureStatus: false}
    ],
    header: "Features"
};

export const featureReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_FEATURE:
            return {
                ...state,
                features: [
                    ...state.features,
                    { name: action.payload, featureStatus: false }
                ]
            };
            default:
                return state;
        }
    };
