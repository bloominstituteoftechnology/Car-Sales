import { ADD_NEW_FEATURE, REMOVE_FEATURE } from "../actions/featureActions";

const initialState = {
    features: [
        { name: "paint job", featureStatus: true },
        { name: "chrome", featureStatus: false}
    ],
    header: "Features"
};

function newFeature(name) {
    return { id: Date.now(), name: name, complete: false }
}

export const featureReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_NEW_FEATURE:
            return [...features, newFeature(action.payload.name)]
             

        case REMOVE_FEATURE:
            return features.filter(feature =>
                feature.id !== action.payload.id)
            
            default:
                return features
        }
    };
