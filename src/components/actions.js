

export const ACTIONS ={
  ADD_FEATURES :"add-features",
  REMOVE_FEAT: "remove-feature",
  ADD_PRICE: "add-price",
  REMOVE_PRICE: "remove-price"

}








export const addFeatures = (features) =>{
    return {
        type: ACTIONS.ADD_FEATURES,
        payload: features
    }
}

export const removeFeat = (features) =>{
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