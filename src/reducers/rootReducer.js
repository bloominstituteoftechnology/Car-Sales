import { ADD_FEATURE, SUBTRACT_FEATURE, addFeature} from '../actions/rootActions';


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

  export const rootReducer = ( state = initialState, action ) => {
      switch(action.type){
          case ADD_FEATURE: 
          
        const checkIfFeatureExistsArrary = state.car.features.filter(feature => {
             return feature.id === action.payload 
        })
        if(checkIfFeatureExistsArrary.length >0) {
            return state
        } else {
            const featureToAdd = state.additionalFeatures.filter(feature => {
                return feature.id === action.payload 
            })[0]}        

            return {
                ...state,
                car: { 
                    ...state.car,
                    features: [...state.car.features, addFeature]
                    },
                    additionalPrice: state.additionalPrice + addFeature.price
                }
        
            case SUBTRACT_FEATURE: 
            return {
                car: {
                    ...state.car,
                    features: state.car.features.filter(feature => {
                        return feature.id !== action.payload.id
                    })
                },
                additionalPrice: state.additionalPrice - action.payload.price
            };
            default: 
                return state 
        }
    }

               