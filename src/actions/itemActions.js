export const ADD_ITEM = "ADD_ITEM"

export const addItem = (item) => {
    console.log(item)
    return{
        type: ADD_ITEM,
        payload: item

    }
}