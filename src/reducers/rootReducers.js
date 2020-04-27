// import { combineReducers } from 'redux'

// import { addFeature } from '../reducers/addFeature'
// import { deleteFeature } from '../reducers/deleteFeature'

// export const rootReducers = combineReducers({
//     addFeature,
//     deleteFeature
// });

export const rootReducers = (state = null, action) => {
    switch (action.type) {
        case 'ADD_FEATURE':
            return {
                ...state
            }
            case 'DELETE_FEATURE':
                return {
                    ...state
                }
        default: {
            return state
        }
    }
}