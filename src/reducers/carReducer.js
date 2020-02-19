import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/actions';
import { statement } from '@babel/template';

const initialState = {
    price: 50000,
    name: "2020 Tesla Model S",
    image: 'https://www.teslarati.com/wp-content/uploads/2019/07/tesla-model-s-raven-2.jpg',
    features:[]
};



const carReducer = (staet = initialState, action) => {
    switch(action.type){
        case ADD_FEATURE:
            return {
                ...state,
                features: [...state.features, action.payload]
            };
        case REMOVE_FEATURE:
            return {
                ...state,
                features: state.features.filter(feature => feature.id !== action.payload.id)
            }
            default:
                return state;
    }
}

export carReducer;