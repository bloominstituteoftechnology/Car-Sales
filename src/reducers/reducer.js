import {REMOVE_FEATURE,ADD_FEATURE} from '../reducers/onClickReducer'

export const initialState={
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
export const reducer = (state = initialState, action) => {
    switch(action.type){
        // case ADD_FEATURE:
        //     console.log('this is the payload',action.payload)
        //     const newArray = state.additionalFeatures.filter(feature => feature.id !== action.payload.id)
        //     console.log('this is the array',newArray)
        //         return {
        //             ...state,
        //             additionalPrice: state.additionalPrice + action.payload.price,
        //             car: {
        //                 ...state.car,
        //                 features: [...state.car.features, action.payload]
        //             },
        //                 ...state.additionalFeatures,
        //             additionalFeatures: newArray,
        //         }
        case ADD_FEATURE:
            console.log(action.payload)
            const addFeature = state.additionalFeatures.filter(feature => feature.id !== action.payload.id)
            return{
                ...state,
                additionalPrice:state.additionalPrice + action.payload.price,
                car:{
                    ...state.car,
                    features: [...state.car.features, action.payload]
                },
                ...state.additionalFeatures,
                additionalFeatures:addFeature,
            }
        case REMOVE_FEATURE:
            const removeFeature = state.car.features.filter(feature => feature.id!== action.payload.id)
            return{
                ...state,
                additionalPrice: state.additionalPrice - action.payload.price,
                car:{
                    ...state.car,
                    features:removeFeature
                },
                additionalFeatures:[...state.additionalFeatures, action.payload]
            }
        default:
          return state  
        }
      }