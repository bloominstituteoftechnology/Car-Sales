import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/index";

const initialState = {
  additionalFeatures: [],
  additionalPrice: 0,
};

const appReducer = (state = initialState, action) => {
  //   console.log(action.payload);
  //   console.log(state);
  switch (action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        additionalFeatures: [...state.additionalFeatures, action.payload],
        additionalPrice: state.additionalPrice + action.payload.price,
      };
    case REMOVE_FEATURE:
      return {
        ...state,
        additionalFeatures: state.additionalFeatures.filter(
          (feature) => feature.name !== action.payload.name
        ),
        additionalPrice: state.additionalPrice - action.payload.price,
      };
    default:
      return state;
  }
};

export default appReducer;
