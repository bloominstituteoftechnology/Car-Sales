import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/actions';

const initialState = [
    {id: 1, name: 'solar glass', price: 5000 },
    {id: 2, name: 'additional charging unit', price: 2000 },
    {id: 3, name: 'self-driving functionality', price: 5000 },
    {id: 4, name: 'no-wash paint finish', price: 3000 }
]

const storeReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ADD_FEATURE:
            return state.filter(feature => feature.id !== action.payload.id);
        case REMOVE_FEATURE:
            return [...state, action.payload]
        default:
            return state;
    }
};

export default storeReducer;