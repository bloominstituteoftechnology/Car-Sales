const initialState = { //give our components the initial state of our App
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  }
  
  export const reducer = (state = initialState, action) => { //state = initialState helps us see our state, we pass in this and 
                                                            //the action to be able to make our switch statement
  
    switch (action.type) {
      case 'ADD_ITEM':
        return {
          ...state, // return our existing state so we can modify a new state object with redux
          additionalPrice: state.additionalPrice + action.payload.price, //set the new price total (+)
          car: {
            ...state.car, //retain the car from state we are adding the features to
            features: [
              ...state.car.features, //retain our features we have already added or string if no features added
              action.payload //add new features to the car from the payload
            ]
          }
        }
  
      case 'REMOVE_ITEM':
        return {
          ...state, // return our existing state so we can modify a new state object with redux
          additionalPrice: state.additionalPrice - action.payload.price, //set the new price total (-)
          car: {
            ...state.car, //retain the car from state we are removing the features from
            features: [
              ...state.car.features.filter(item => item.id !== action.payload.id) //filtering removed features for render
            ]
          }
        }
  
      default: //set our default to state if none of the above criteria are met
        return state
    }
  }