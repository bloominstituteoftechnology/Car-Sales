const log = console.log;

//1. set initialState
const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

//2. create a features reducer that takes in initialState, sets it equal to state, and takes in an action
export const featuresReducer = (state = initialState, action) => {
  //3. initialize switch statement
  switch (action.type) {
    case "ADD_FEATURE":
      //3. Get the selected feature.......
      const selectedFeature = state.additionalFeatures.filter(
        (feature) => feature.id === action.payload
      );
      //4. Return spreads state of car, goes into car...
      return {
        ...state,
        car: {
          ...state.car,
          //5. Spreads state.car and adds the feature to the spread car state
          features: [...state.car.features, selectedFeature[0]],
        },
        //6. also adds price to the features price list.
        additionalPrice: state.additionalPrice + selectedFeature[0].price,
      };
    case "REMOVE_FEATURE":
      //7. filter to find feature to be removed...
      const removedFeature = state.car.features.filter(
        (feature) => feature.id === action.payload
      );
      log(removedFeature[0].price);
      //8. return creates shallow copy of state...
      return {
        ...state,
        //9. Filters out selected feature from the list
        car: {
          //10. creates shallow copy of state.car
          ...state.car,
          features: state.car.features.filter(
            (feature) => feature.id !== action.payload
          ),
        },
        //11. removes price of feature from additional features total
        additionalPrice: state.additionalPrice - removedFeature[0].price,
      };
    default:
      return state;
  }
};
