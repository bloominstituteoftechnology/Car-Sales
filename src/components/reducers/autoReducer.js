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
        switch(action.type){
          case 'ADD_FEATURE':
            return{
            ...state,
            features: [...state.car.features, state.store.id]
            }
            
          case 'ADD_FEATURE':
            return{
              ...state,
              features: [...state.car.features, state.store.id]
            }
        //   case 'REMOVE_FEATURE':
        //     //add to an array
        //     const newT = {
        //       task: action.payload,
        //       completed: false,
        //       id:Math.random()*10
        //     }
        //     return{
        //     ...state,
        //     todo: [...state.todo, newT]
        //       }
        //   case 'REMOVE_FEATURE':
        //       return{
        //         ...state,
        //         todo: state.todo.filter(item =>
        //         !item.completed)
        //       }
          default:
            return state;
        }
      }
      