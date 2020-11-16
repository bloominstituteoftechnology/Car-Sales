export const ADD_FEATURE ="ADD_FEATURE";
export const REMOVE_FEATURE= "REMOVE_FEATURE"


export const addFeature = (newFeature) =>{//action creator (creates actions)
    console.log("kh:actions:index.js:addMovie: ====>",newFeature)
    return{//action (performs action)
        type:ADD_FEATURE,
        payload:newFeature
    }
}

export const removeFeature = (feature) =>{
    console.log("kh:actions:index.js:removeFeature: ====>",feature)

    return{
        type:REMOVE_FEATURE,
        payload:feature
    }
}