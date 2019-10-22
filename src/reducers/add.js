import { ADD_ITEM } from '../actions/add'

const initialState = {
    addItems: 
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                addItems: !state.addItems
            };
            default:
                return state;
    }
}