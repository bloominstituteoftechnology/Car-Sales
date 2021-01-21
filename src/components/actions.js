

export const ACTIONS ={
  ADD_FEATURE :"add-feature",
  REMOVE_FEAT: "remove-feature",
  ADD_PRICE: "add-price",
  REMOVE_PRICE: "remove-price"

}








export const addFeatures = (feature) =>{
    return {
        type: ACTIONS.ADD_FEATURE,
        payload: feature
    }
}

export const removeFeat = (feature) =>{
return {
  type: ACTIONS.REMOVE_FEATURE,
  payload: feature,

}


}
// export const addPrice = (price) =>{
// return{
//   type: ACTIONS.ADD_PRICE,
//   payload: price
// }
// }
// export const removePrice = (price) => {
//   return{
//     type:ACTIONS.REMOVE_PRICE,
//     payload:price
//   }
// }