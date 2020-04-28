import { act } from "react-dom/test-utils";

export const inititalState = {
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


// nested objects pay attention
export const reducer = (state = inititalState, action) => {
    switch(action.type){
        case "ADD_FEATURE" :
            return {
                ...state,
                car: {
                    // Sample Data, hard coded data is being passed.
                    // ...state.car,
                    // features: [{id: 1, name: "V-6 engine", price: 1500}]
                    features: [...state.car.features, action.payload],
                    price: state.car.price + action.payload.price
                }
            }
        case "DELETE_FEATURE" :
            return {
                ...state,
                car: {
                    ...state.car.features.filter((item) => {
                        return item.id !== action.payload.id
                        
                    })
                }
            }
        default :
        return state
    }
}