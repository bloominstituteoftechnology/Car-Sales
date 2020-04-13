import {ADD_FEATURE} from "../Actions/AddtionalFeature"
import {REMOVE_FEATURE} from "../Actions/AddedFeature"



export const startState = {
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




const initialState = startState

export const additionalFeatureReducer = (state = initialState, action)=>{
    let carValue = {
      id:0,
      name:"",
      price:0
    }
  
    switch(action.type){
        case ADD_FEATURE:{
          // console.log("adding to features PROPS",state )
          state.additionalFeatures.map(function(value,index){
          
            if(value.id === action.payload){
              
              carValue.id = value.id;
              carValue.name = value.name;
              carValue.price = value.price;
              console.log("CARVALUE", carValue)
              
            }
            
          })
            return {
             ...state,
                  additionalPrice: 
                      carValue.price + state.additionalPrice,
                   car:{
                    ...state.car,
                            
                          features:[
                            ...state.car.features,
                            {
                              id:carValue.id,
                              name:carValue.name, 
                              price:carValue.price
                            }
                          ]
                  }
              
              
            }
          }
         case REMOVE_FEATURE:{
          console.log("removing feature from PROPS",state.car.features )
          function idCompare(id){
            return id.id !== action.payload
          }
          state.car.features.map(function(value,index){
            if(value.id === action.payload){
              carValue.price = value.price
            }
          })
          return{
            ...state,
                  additionalPrice: state.additionalPrice-carValue.price ,
               
                car:{
                  ...state.car,
                      features:[
                        ...state.car.features.filter(idCompare)
                        
                      ]
                }
          }
        }    
        ;
        default:
            return state;
    }
}

