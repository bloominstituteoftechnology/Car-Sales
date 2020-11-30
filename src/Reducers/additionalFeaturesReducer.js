const initialState ={ additionalFeatures:[
  { id: 1, name: 'V-6 engine', price: 1500 },
  { id: 2, name: 'Racing detail package', price: 1500 },
  { id: 3, name: 'Premium sound system', price: 500 },
  { id: 4, name: 'Rear spoiler', price: 250 }
]

}

export const additionalFeaturesReducer = (state = initialState, action) => {
    switch(action.type){
      default:
        return state
    }
}