export const initialState = {
  features: []
}

export const featuresReducer = (state = initialState, action) => {
  console.log('reducers: index: ', state, action)
}