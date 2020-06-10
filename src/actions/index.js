export const addFeature = (para) => {
    return { type: "ADD_FEATURE", payload: para}
}

export const removeFeature = (para) => {
    return { type: "REMOVE_FEATURE", payload: para}
}