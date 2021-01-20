//Add feature, remove feature, both should update price



export default function addFeature( feature ){
    return({type:"ADD_FEATURE", payload:feature})
};

export  const  removeFeature=(feature)=>{
    return({type:"REMOVE_FEATURE", payload:feature})
};
