import { combineReducers } from 'redux'
import { featureReducer } from './featureReducer.js'
import { checkoutReducer } from './checkoutReducer.js'

export const rootReducer = combineReducers({
  featureReducer,
  checkoutReducer
})