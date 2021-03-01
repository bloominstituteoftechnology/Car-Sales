export const ADD_FEATURE = "ADD_FEATURE";
export const DELETE_FEATURE = "DELETE_FEATURE";

export const addFeature = (id) => {
  console.log("add feature action created")
    return {type: ADD_FEATURE, payload: id}
}

export const deleteFeature = (id) => {
  return {type: DELETE_FEATURE, payload: id}
}