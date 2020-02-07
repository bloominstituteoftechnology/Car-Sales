import { BUY_ITEM, REMOVE_ITEM } from "../actions";

export const initialState = {
         additionalPrice: 0,
         car: {
           price: 26395,
           name: "2019 Ford Mustang",
           image:
             "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
           features: []
         },
         additionalFeatures: [
           { id: 1, name: "V-6 engine", price: 1500 },
           { id: 2, name: "Racing detail package", price: 1500 },
           { id: 3, name: "Premium sound system", price: 500 },
           { id: 4, name: "Rear spoiler", price: 250 }
         ]
       };


export const carReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case REMOVE_ITEM: {
        console.log("From inside remove item", action.payload.item, state.car.features[0].id)
        let newFeatures = state.car.features.filter(feature => feature.id !== action.payload.item.id)
        console.log("newFeatures: ", newFeatures)

        
        return {
            ...state,
            car: {
                ...state.car,
                features: newFeatures
            }
        }
    }
    case BUY_ITEM: {
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload.item]
        
      }
    }
    }
    default:
      return state;
  }
};

