import { ADD_FEATURE } from "./addFeat";

export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const removeFeature = (input) => {
    return {
        type: ADD_FEATURE,
        payload: input
    }
}