import {
ADD_FEATURE, 
REMOVE_FEATURE
} from "../actions/index"

const initialState = {
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

export const carSalesReducer = (state = initialState,action) =>{
    console.log("ACTION FROM OUR REDUCER ====>", action)
    switch(action.type){
        case ADD_FEATURE:
        //do something... add out payload and replace state
        return{
        ...state,
        price:state.price + action.payload.price,
        
        car:{
            ...state.car,
            price:state.car.price + action.payload.price,
            features:[
                ...state.car.features, 
                action.payload
            ]//printing added feature to screen
        }
        
    }
        
        case REMOVE_FEATURE:
        //do something
        return{
            ...state,
        price:(state.price -= action.payload.price),//takes the price that was added to the original price and subtracts the added feature
        car:{
            ...state.car,
            price: state.car.price - action.payload.price,//takes price of that car and subtracts it from the additional features price
            features: state.car.features.filter(
                (feature) => feature.id !== action.payload.id//targets the additional features inside "features" array and filters it removing it from the list
            )
        }
    }
    default: return state; //returning back to original state
}
}

export default carSalesReducer;