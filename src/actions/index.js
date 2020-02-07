const ADD_FEATURE = "ADD_FEATURE";
const REMOVE_FEATURE = "REMOVE_FEATURE";

const ADD_FEATURE_PRICE = "ADD_FEATURE_PRICE";
const REMOVE_FEATURE_PRICE = "REMOVE_FEATURE_PRICE";

const UPDATE_TOTAL = "UPDATE_TOTAL";

export const addFeature = feature => {
    return{
        type: ADD_FEATURE,
        payload: feature
    }
}

export const removeFeature = feature => {
    return{
        type: REMOVE_FEATURE,
        payload: feature
    }
}

export const addFeaturePrice = featurePrice => {
    return{
        type: ADD_FEATURE_PRICE,
        payload: featurePrice
    }
}

export const removeFeaturePrice = featurePrice => {
    return{
        type: REMOVE_FEATURE_PRICE,
        payload: featurePrice
    };
};

export const updateTotal = total => {
    return {
        type: UPDATE_TOTAL,
        payload: total
    }
}