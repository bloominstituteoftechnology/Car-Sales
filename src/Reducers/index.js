export const reducer = (state, action) => {
  console.log("ACTION FROM OUR REDUCER", action);
  switch (action.type) {
    case "ADD_FEATURE":
      return {
        ...state,
        additionalFeatures: [...state.additionalFeatures, action.payload],
      };

    case "REMOVE_FEATURE":
      return {
        ...state,
        additionalPrice: (state.additionalPrice -= action.payload.price),
        car: {
          ...state.car,
          features: state.car.features.filter((item) => {
            return item.id !== action.payload.id;
          }),
        },
      };
    default:
      return state;
  }
};
