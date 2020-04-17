// an action creator is a function that "creates" actions!
// aka a function that returns an action object

// action creator
export const addFeatures = (item) => {
    console.log("Add_Features, item", item);
    // the returned object is an action
    return { type: 'ADD_FEATURES', payload:item };
  };

export const removeFeatures = (item) => {
  return {type: "REMOVE_FEATURES", payload:item}
}
  
//   export const updateTitle = newTitle => {
//     return { type: 'UPDATE_TITLE', payload: newTitle };
//   };
  