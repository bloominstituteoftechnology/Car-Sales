const ADD_FEATURE = "ADD_FEATURE";
const ADD_FEATURE_PRICE = "ADD_FEATURE_PRICE";

const REMOVE_FEATURE = "REMOVE_FEATURE";
const REMOVE_FEATURE_PRICE = "REMOVE_FEATURE_PRICE";

const addFeature = feature => {
  return{
    type: ADD_FEATURE,
    payload: feature
  }
}

const addFeaturePrice = feature => {
  return{
    type: ADD_FEATURE_PRICE,
    payload: feature
  }
}

const removeFeature = featurePrice => {
  return{
    type: REMOVE_FEATURE,
    payload: featurePrice
  }
}

const removeFeaturePrice = featurePrice => {
  return {
    type: REMOVE_FEATURE_PRICE,
    payload: featurePrice
  };
};

export { ADD_FEATURE, 
         addFeature, 
         ADD_FEATURE_PRICE,
         addFeaturePrice,
         REMOVE_FEATURE, 
         removeFeature,
         REMOVE_FEATURE_PRICE,
         removeFeaturePrice };