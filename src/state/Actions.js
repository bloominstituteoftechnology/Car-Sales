import {BUY_ITEM, REMOVE_FEATURE} from "./Types"

export const buyItem = (item) => {
    console.log(item)
    return{
        type: BUY_ITEM,
        payload: item
    };
};

export const removeFeature = (item) => {
    console.log(item)
        return{
        type: REMOVE_FEATURE,
        payload: item
    };
}
    