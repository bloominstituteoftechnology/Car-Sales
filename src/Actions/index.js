export const addNewFeature = (item) => {
    return {type: "ADDED_FEATURE", payload: item}
}

export const addAdditionalPrice = (item) => {
    return {type: "ADDED_ADDITIONALPRICE", payload: item}
}

export const removeAFeature = (feature) => {
    return {type: "REMOVE_FEATURE", payload: feature}
}

export const removeAdditionalPrice = (feature) => {
    return {type: "REMOVE_ADDITIONALPRICE", payload: feature}
}