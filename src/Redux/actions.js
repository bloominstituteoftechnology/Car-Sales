//Add feature, remove feature, both should update price



const addFeature=(id)=>{
    console.log('id from action ',id)
    return({type:"ADD_FEATURE"})
};
export default addFeature;