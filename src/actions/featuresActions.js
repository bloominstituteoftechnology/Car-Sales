

export const addFeature = () => {
    console.log("from addFeature")
    return{ type: "ADD_FEATURE" }
}

export const removeFeature = () => {
    return{ type: "REMOVE_FEATURE"}
}

export const updateTotal = () => {
    return{ type: "UPDATE_TOTAL"}
}