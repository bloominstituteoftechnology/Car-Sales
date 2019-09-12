export const addFeature = (feature, car) => {
    console.log('feature, car passed into addFeature: ', feature, car)
    return {
        type: 'ADD_FEATURE',
        payload: { feature, car }
    }
}

export const removeFeature = (feature, car) => {
    console.log('feature, car passed into removeFeature: ', feature, car)
    return {
        type: 'REMOVE_FEATURE',
        payload: { feature, car }
    }
}