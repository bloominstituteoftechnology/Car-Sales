export const ADD_FEATURE ='ADD_FEATURE';
export const addFeature =newFeature=>{
    console.log('addFeatue called');
    return {type: ADD_FEATURE ,payload: newFeature};
}