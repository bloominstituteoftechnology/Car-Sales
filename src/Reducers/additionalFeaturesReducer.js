import { ADD_NEW_FEATURE } from "../Actions/additionalNewFeaturesAction"

const initialState = {
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
  header: "test",
}

export const additionalFeaturesReducer = (state = initialState, action) => {
  console.log("Redux is calling Reducer with: ", state, action)
  switch (action.type) {
    case "ADD_NEW_FEATURE":
      return {
        ...state,
        additionalFeatures: [...state.additionalFeatures, { name: action.payload, price: action.payload }],
      }
    default:
      return state
  }
}
