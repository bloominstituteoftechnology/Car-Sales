import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/featuresActions';

export const featureReducer = (state, action) => {
    switch(action.type) {
        case ADD_FEATURE:
            return {
                ...state,
                feature: [...state.feature, action.payload]
            }
        case REMOVE_FEATURE:
            return {
                state
            }
        default:
            return state
    }
}