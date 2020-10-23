export const ADD_FEATURE ='ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature =newFeature=>{

    console.log('the feature added is ',newFeature);
    return {type: ADD_FEATURE ,payload: newFeature};
}



export const removeFeature = (item)=>{
return {type:REMOVE_FEATURE,payload: item}
}