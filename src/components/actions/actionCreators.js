import * as actions from "./actions"

export const item = (id, state) => {
    // Filter by serched item
    const findItem = state.additionalFeatures.filter((n) => n.id === id);
    
    // Find price
   const convertPrice = parseInt(findItem.map((item) => {return item.price }), 10);

   // Find Name
    const getName = findItem.map((item) => {return item.name});

    return {
        type: actions.ADD_OPTION,
        payload: {
            price: convertPrice,
            name: getName.toString(),
        }
    }
}
