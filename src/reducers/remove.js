import { ADD_ITEM, REMOVE_FEATURE } from '../actions/remove';

const initialState = {
    removeFeatures: false
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                removeFeatures: !state.removeFeatures
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