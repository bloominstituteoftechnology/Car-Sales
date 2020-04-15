
export const BUY_ITEM = "BUY_ITEM" 

export const removeFeature = item => {
    return {type: "REMOVE FEATURE", payload:item.id}
  };

export const buyItem = item => {
  
    return {type: "BUY_ITEM", payload:item.id}
  };