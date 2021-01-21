
export const addFeatures = (features) =>{
    return {
        type: ACTIONS.ADD_FEATURES,
        payload: features
    }
}

export const RemoveFeat = (features) =>{
return {
  type: ACTIONS.REMOVE_FEAT,
  payload: features,

}


}
export const addPrice = (price) =>{
return{
  type: ACTIONS.ADD_PRICE,
  payload: price
}
}
export const removePrice = (price) => {
  return{
    type:ACTIONS.REMOVE_PRICE,
    payload:price
  }
}