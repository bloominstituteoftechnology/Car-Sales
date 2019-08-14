const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  store: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

export const carReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'REMOVE_FEATURE': {
      const filtered = state.store.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        store: filtered
        //add to features to add
      }
    };
    case 'ADD_FEATURE': {
      return {
        ...state,
        features: [...state.features, action.payload]
        //add to features to remove
      }
    };
    case 'BUY_ITEM': {
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload
        //fix this
      }
    };
    default: {
      return state;
    }
  }
}
