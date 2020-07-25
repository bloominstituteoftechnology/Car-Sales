export const initialState = {
    AdditionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const addFeatReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_Feature':
            return {
                ...state,
                AdditionalFeatures: [{
                    ...state.AdditionalFeatures,
                    name: action.payload
                }]
            };
        default:
            return state;
    }


}