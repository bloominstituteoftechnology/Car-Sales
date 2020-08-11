import { ADD_FEATURE } from "./addFeat";

export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature = (input) => {
    return {
        type: ADD_FEATURE,
        payload: input
    }
}