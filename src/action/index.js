export const addItem = (item) =>{
   
    return {type: "ADD_FEAT", payload:item}
}

export const deleteItem = (item) =>{
   
    return {type: "DEL_FEAT", payload:item}
}