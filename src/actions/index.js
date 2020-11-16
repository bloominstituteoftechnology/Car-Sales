export const ADD_FEATURE ="ADD_FEATURE";
export const REMOVE_FEATURE= "REMOVE_FEATURE"


export const addFeature = (feature) =>{//action creator (creates actions)
    console.log("kh:actions:index.js:addMovie: ====>",feature)
    return{//action (performs action)
        type:ADD_FEATURE,
        payload:feature
    }
}

export const removeFeature = (feature) =>{
    console.log("kh:actions:index.js:removeFeature: ====>",feature)

    return{
        type:REMOVE_FEATURE,
        payload:feature
    }
}