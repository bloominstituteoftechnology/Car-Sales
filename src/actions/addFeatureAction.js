// const {ADD_FEATURE } = require("../reducers/carReducer")
import {ADD_FEATURE} from '../reducers/carReducer'


export const addFeature=(feature)=>{
    return{
        type: ADD_FEATURE, 
        payload:feature
    };
};