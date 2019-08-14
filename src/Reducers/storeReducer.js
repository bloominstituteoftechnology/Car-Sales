const initialState = {
    additionalPrice: 0,
    car: {
      price: 120000,
      name: 'Mercedes Maybach',
      image:
        '',
      features: []
    },
    store: [
      { id: 1, name: 'V-8 engine', price: 26000 },
      { id: 2, name: 'Leather interior', price: 5000 },
      { id: 3, name: 'Keyless Entry', price: 2000 },
      { id: 4, name: 'Extended Sound System', price: 1000 }
    ]
}

export const storeReducer = (state = initialState, action) => {
    const priceUpdate = [state.additionalPrice]
    
    switch( action.type ) {
        case "ADDED_FEATURE":
            console.log(state.car)
            const filterdStore = state.store.filter(feature => feature !== action.payload)
            return {
                ...state,
                car: {...state.car, features: [...state.car.features, action.payload]},
                store: filterdStore
            };
        case "ADDED_ADDITIONALPRICE":
            const reducer = ((num, total) => {return num + total})
            console.log(state.additionalPrice)
            return {
                ...state,
                additionalPrice: priceUpdate.reduce(reducer, action.payload) 
            };
        case "REMOVE_FEATURE":
              const newStore = [...state.store, action.payload];
            return {
                ...state,
                car:  { ...state.car, features: state.car.features.filter(feature =>{ return feature !== action.payload })},
                store: newStore
            }
        case "REMOVE_ADDITIONALPRICE":
            const reducer2 = ((num, total) => {return total - num})
            console.log(state.additionalPrice)
            return {
                ...state,
                additionalPrice: priceUpdate.reduce(reducer2, action.payload)
            }
        // case ""
        default: 
        return state;
    }
}