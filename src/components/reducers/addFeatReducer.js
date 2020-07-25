import React from 'react';
import AddedFeature from '../AddedFeature';

export const initialState = {
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
            return {
                AdditionalFeatures: state.AdditionalFeatures.map((item) =>
                    item.id === action.payload) ? <AddedFeature key={state.item.id} feature={state.item.name} /> && state.item.price + state.item.additionalPrice : <p>You can purchase items from the store.</p>
            }

        case 'REMOVE_FEATURE':
            return {
                AdditionalFeatures: state.AdditionalFeatures.map((item) =>
                    item.id === action.payload ? { ...item, removed: !item.removed } : item)

            }
        default:
            return state;
            console.log('from outgoing AFR', state)
    }
}