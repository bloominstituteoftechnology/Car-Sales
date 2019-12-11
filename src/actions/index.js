export const addFeature = feature => {
  // console.log(feature)
  return{
      type: 'ADD_FEATURE',
      payload: feature
  }
}

export const removeFeature = feature => {
  // console.log(feature)
  return{
      type: 'REMOVE_FEATURE',
      payload: feature
  }
}