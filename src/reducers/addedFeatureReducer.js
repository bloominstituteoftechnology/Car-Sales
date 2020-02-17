// import {
//   removeFeature, 
//   REMOVE_FEATURE,
//   buyItem,
//   BUY_ITEM,
// } from '../actions';

// const initialState = {
//   additionalPrice: 0,
//   additionalFeatures: [
//     { id: 1, name: 'V-6 engine', price: 1500 },
//     { id: 2, name: 'Racing detail package', price: 1500 },
//     { id: 3, name: 'Premium sound system', price: 500 },
//     { id: 4, name: 'Rear spoiler', price: 250 }  
//   ],
// }

// const addedFeatureReducer = (state = initialState, action) => {
//   switch(action.type) {
//     case BUY_ITEM: 
//     return {
//       ...state,
//       additionalPrice: state.additionalPrice + action.payload.price,
//       additionalFeatures: state.additionalFeatures.filter(
//         feature => feature.id !== action.payload.id
//       ),
//     };
//     case REMOVE_FEATURE:
//       return {
//         ...state,
//         additionalPrice: state.additionalPrice - action.payload.price,
//         additionalFeatures: [...state.additionalFeatures, action.payload],
//       };

//     default: 
//       return state;
//   }
// };

// export default addedFeatureReducer;