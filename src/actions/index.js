export const BUY_ITEM = "BUY_ITEM"; // Action Type
export const REMOVE_ITEM = "REMOVE_ITEM";

export const buyItem = item => {
    // Action Creator
    return {
        type: BUY_ITEM,
        payload: item
    }
}

export const removeItem = item => {

    return {
        type: REMOVE_ITEM,
        payload: item
    }
}