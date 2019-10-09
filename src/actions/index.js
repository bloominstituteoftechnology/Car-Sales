export const BUY_ITEM = 'BUY_ITEM' //action type to avoid string issues in other areas
export const REMOVE_FEATURE = 'REMOVE_FEATURE'

export const buyItem = item => { //action creator, creates the action we are taking
    console.log(item, 'in buyitem in index.actions')
    return {
        type: BUY_ITEM,
        payload: item
    }//action itself, this is what we're doing
}

export const removeFeature = feature => {
    console.log(feature, 'in removefeat in index.actions')
    return {
        type: REMOVE_FEATURE,
        payload: feature
    }
}