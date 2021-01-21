
export const ACTIONS ={
    ADD_FEATURES :"add-features",
    REMOVE_FEAT: "remove-feature",
    ADD_PRICE: "add-price",
    REMOVE_PRICE: "remove-price"

}

const InitialState = {
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
 };







export const reducer = (state=InitialState,action) => {
        switch(action.type){
            case ACTIONS.ADD_FEATURES:
                return {
                    ...state, 
                    features: [...state.features, action.payload],
                    additionalPrice: state.additionalPrice + action.payload.price
                }  
                 case(ACTIONS.REMOVE_FEAT):
                  return {
                    ...state,
                    features: [...state.features, action.payload],
                    ...car.features,
                    features: state.car.features.filter(feature => feature.id !==action.payload.id),
                    additionalPrice: state.additionalPrice - action.payload.price
                  }
                     
                           default:
                             return state




                      }
                    


        }
        
      
