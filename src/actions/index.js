export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const SUM_UP_TOTAL = "SUM_UP_TOTAL";


export function addFeature(featName) {

    return {type: ADD_FEATURE,
            payload: {name: featName } }

}


export function removeFeature() {

    return {type: REMOVE_FEATURE,
            payload: }

}

export function tallyTotal() {

    return {type: SUM_UP_TOTAL,
            payload: }

}