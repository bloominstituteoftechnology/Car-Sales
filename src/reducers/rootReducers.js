import { combineReducers } from 'redux'

import { addFeature } from '../reducers/addFeature'
import { deleteFeature } from '../reducers/deleteFeature'

export const rootReducers = combineReducers({
    addFeature,
    deleteFeature
});
