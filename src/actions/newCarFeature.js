export const ADD_NEW_CAR_FEATURE = "ADD_NEW_CAR_FEATURE"

export const addNewCarFeature = (carFeature) => {
    return{
        type: 'ADD_NEW_CAR_FEATURE',
        payload: carFeature
    }
}