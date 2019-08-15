import React, { useReducer } from 'react'

export const initialState = {
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
    { id: 2, name: 'Racing detail package', price: 1500},
    { id: 3, name: 'Premium sound system', price: 500},
    { id: 4, name: 'Rear spoiler', price: 250}
  ]
}
// Initial object is established

// We will use the same reducer we created in the previous section
export function todoReducer(state = initialState, action) {
console.log('in reducer',action)
  let newFeatures = {features: []}
switch (action.type) {
    case 'BUY_FEATURE':
      console.log('in buy feature',action)
      for (let i=0;i<state.car.features.length;i++)
    {if(state.car.features[i].id === action.payload)
      { return state}
    }
    for (let i=0;i<state.car.features.length;i++)
    {newFeatures.features.push({id: state.car.features[i].id,
      name: state.car.features[i].name,
      price: state.car.features[i].price
    }) }
  for (let i=0;i<state.store.length;i++)
      {
        if(state.store.id === action.payload)
      {newFeatures.features.push({id: state.store[i].id,
        name: state.store[i].name,
        price: state.store[i].price
    }) }}
    return { ...state, car: {features: newFeatures}}
    case 'REMOVE_FEATURE':
        console.log('in remove',action)
        for (let i=0;i<state.car.features.length;i++)
        {
          if(state.car.features[i].id !== action.payload )
          newFeatures.features.push({id: state.car.features[i].id,
                              name: state.car.features[i].name,
                              price: state.car.features[i].price
                            }) }
        return { ...state, car: {features: newFeatures}}
          default:
              console.log('in reducer default',action)

      return state
  }
}


