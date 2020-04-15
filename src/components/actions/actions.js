
export const BUY_ITEM = "BUY_ITEM" 
export const REMOVE_FEATURE = "REMOVE_FEATURE" 

export const removeFeature = item => {
    return {type: REMOVE_FEATURE, payload:item.id}
  };

export const buyItem = item => {
    console.log(item)
    return {type: BUY_ITEM, payload:item.id}
  };