export const deleteFeature = (state = null, action) => {
    switch (action.type) {
        case 'DELETE_FEATURE':
            return {
                ...state
            }
        default: {
            return state
        }
    }
}