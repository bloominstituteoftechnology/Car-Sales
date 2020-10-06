import { TOGGLE_FEATURE } from '../actions/featureActions.js'

export const initialState = {
  features: [
    {text: 'V-6 Engine', cost: 1500, added: false},
    {text: 'Racing detail Package', cost: 1500, added: false},
    {text: 'Premium sound system', cost: 500, added: false},
    {text: 'Rear spoiler', cost: 250, added: false}
  ],
}

export const featureReducer = (state = initialState, action) => {
  switch (action.type){
    case TOGGLE_FEATURE:
      return {
        ...state,
        features: state.features.map(v => {
          if (v.text === action.text){
            return {...v, added: !v.added}
          } else {
            return v
          }
        })
      }
    default:
      return state
  }
}