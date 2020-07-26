import React from 'react';
import AddedFeature from '../AddedFeature';

export const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    AdditionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500, removed: false },
        { id: 2, name: 'Racing detail package', price: 1500, removed: false },
        { id: 3, name: 'Premium sound system', price: 500, removed: false },
        { id: 4, name: 'Rear spoiler', price: 250, removed: false }
    ]
};

export const addFeatReducer = (state = initialState, action) => {
    console.log('from AFR', state);

    switch (action.type) {
        case 'ADD_FEATURE':
            return
            (...state) => <AddedFeature key={state.id} feature={state} />

        case 'REMOVE_FEATURE':
            return {
                AdditionalFeatures: state.AdditionalFeatures.map((item) =>
                    item.id === action.payload ? { ...item, removed: !item.removed } : item)

            }

        case 'ADD_PRICE':
            return {
                additionalPrice(e => { [e.target.name]: e.target.value }
            }
        default:
return state;
    }
}