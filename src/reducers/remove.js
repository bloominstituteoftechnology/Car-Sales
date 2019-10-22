import { ADD_ITEM, REMOVE_FEATURE } from '../actions/remove';

const initialState = {
    removeFeatures:
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state
            }
            case REMOVE_FEATURE:
                return {
                    ...state,
                    feature: action.payload
            }
        default:
            return state;
    }
}