const ADD_FEATURE = "ADD_FEATURE";
const REMOVE_FEATURE = "REMOVE_FEATURE";

const ADD_FEATURE_PRICE = "ADD_FEATURE_PRICE";
const REMOVE_FEATURE_PRICE = "REMOVE_FEATURE_PRICE";

const UPDATE_TOTAL = "UPDATE_TOTAL";

const addFeature = feature => {
    return{
        type: ADD_FEATURE,
        payload: feature
    }
}

const removeFeature = feature => {
    return{
        type: REMOVE_FEATURE,
        payload: feature
    }
}

const addFeaturePrice = featurePrice => {
    return{
        type: ADD_FEATURE_PRICE,
        payload: featurePrice
    }
}

const removeFeaturePrice = featurePrice => {
    return{
        type: REMOVE_FEATURE_PRICE,
        payload: featurePrice
    };
};

const updateTotal = total => {
    return {
        type: UPDATE_TOTAL,
        payload: total
    }
}

export {
    ADD_FEATURE,
    addFeature,
    REMOVE_FEATURE,
    removeFeature,
    ADD_FEATURE_PRICE,
    addFeaturePrice,
    REMOVE_FEATURE_PRICE,
    removeFeaturePrice
};