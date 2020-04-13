import {REMOVE_FEATURE} from "../Actions/AddedFeature"

export const addedFeatureReducer = (state, action) =>{
    switch(action.type){
      case REMOVE_FEATURE:{
        return state
    };
      default:
        return state;
  }
  }