import {combineReducers}from 'redux'
import {addedfeaturesReducer} from '../Reducers/addedfeaturesReducer'
import {additionalFeaturesReducer} from './additionalFeaturesReducer'

export default combineReducers({addingFeatures: addedfeaturesReducer, additionalFeaturesReducer})