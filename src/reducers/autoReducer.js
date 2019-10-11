import {ADD_FEATURE, REMOVE} from '../actions/index'

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
//state = initialState, initialstate is default, will not need to export state anymore
    export const autoReducer = (state = initialState, action) => {
      console.log(`reducer`, action)
        switch(action.type){
          case ADD_FEATURE:
            //action.payload is store.{} that was selected
            //destructure action.payload, pull out price
              if (!state.car.features.includes(action.payload)) {
                const { price } = action.payload;
                return {
                  ...state,
                  additionalPrice: (state.additionalPrice += price),
                  car: {
                    ...state.car,
                    features: [...state.car.features, action.payload]
                  },
                  store: state.store.filter(e => {
                    if(e.id === action.payload.id){
                      return false
                    } else {
                      return true
                    }
                  })
                };
              } else {
                return state;
              }
              case REMOVE:
              //if (!state.car.features.includes(action.payload)) {
                console.log(`payload`, action.payload)
                const { price, id } = action.payload;
              return {
                ...state,
                additionalPrice: (state.additionalPrice -= price),
                car: {
                  ...state.car,
                  features: state.car.features.filter(e => {
                    return (e.id !== action.payload.id)
                    })
                  },
                store: [
                ...state.store, action.payload]
              }
                // store: 
                // state.store.map
                //   state.store.push(e =>{
                //     if(e.id === action.payload.id){
                //       return false
                //     } else {
                //       return true
                //     }
                //   }
       
          default:
            return state;
        }
      }
  
      