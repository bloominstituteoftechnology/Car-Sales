const initialState = {
  additionalFeature: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],

     header: "tests"
}

export const additionalFeatureReducer = (state = initialState, action) => {
  console.log("reducer", state, action)
  switch (action.type) {
    case "ADD_FEATURE":
    default:
      return state
  }
}
