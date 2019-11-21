import { ADD_FEATURE, REMOVE_FEATURE } from "../actions";

const initialState = [
  { id: 1, name: "V-6 engine", price: 1500 },
  { id: 2, name: "Racing detail package", price: 1500 },
  { id: 3, name: "Premium sound system", price: 500 },
  { id: 4, name: "Rear spoiler", price: 250 }
];

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      return state.filter(feature => feature.id !== action.payload.id);
    case REMOVE_FEATURE:
      return [...state, action.payload]
    default:
      return state;
  }
};

export default storeReducer;