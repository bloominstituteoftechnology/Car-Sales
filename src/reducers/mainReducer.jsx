const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: "2019 Ford Mustang",
      image:
        "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
      features: [],
        price: 26395,
    
    },
    additionalFeatures: [
      { id: 1, name: "V-6 engine", price: 1500 },
      { id: 2, name: "Racing detail package", price: 1500 },
      { id: 3, name: "Premium sound system", price: 500 },
      { id: 4, name: "Rear spoiler", price: 250 }
      
    ]
  };
  
  const mainReducer = (state = initialState, action) => {
    switch (action.type) {
      case "Buy":
        return {
          ...state,
          car: {
            ...state.car,
            price: state.car.price + action.payload.price,
            features: [...state.car.features, action.payload]
          }
        };
      case "Delete":
        return {
          ...state,
          car: {
            ...state.car,
            price: state.car.price - action.payload.price,
            features: state.car.features.filter(
              item => item.id !== action.payload.id
            )
          }
        };

        
      default:
        return state;
    }
  };
  
  export default mainReducer;