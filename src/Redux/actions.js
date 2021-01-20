//Add feature, remove feature, both should update price



const addFeature= ( feature ) =>{
    return({type:"ADD_FEATURE", payload:feature})
};
export default addFeature;