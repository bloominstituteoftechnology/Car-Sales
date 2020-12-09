export const ADD_FEATURE = 'ADD_FEATURE';

export const addFeature = (featureId) =>{
    return ({type: ADD_FEATURE, payload: featureId});
}