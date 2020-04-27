export const addFeature = (state = null, action) => {
    switch (action.type) {
        case 'ADD_FEATURE':
            return {
                ...state
            }
        default: {
            return state
        }
    }
}