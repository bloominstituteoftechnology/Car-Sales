// const { REMOVE_FEATURE } = require("../reducers/carReducer")
import {REMOVE_FEATURE}from '../reducers/carReducer'

export const removeFeature=(feature)=>{
    return{
        type: REMOVE_FEATURE,
        payload: feature
    };
};