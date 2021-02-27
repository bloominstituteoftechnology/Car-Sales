const initialState = {
    addFeature: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_FEATURE':
            return {
                ...state,
                addFeature: [...state.addFeature, action.payload]
            };

            case 'REMOVE_FEATURE':
                return {
                    ...state,
                    addFeature: state.addFeature.filter(addFeature => addFeature.id !== addFeature.payload)
                };
                default: 
                return state;
    }
}

export default reducer;