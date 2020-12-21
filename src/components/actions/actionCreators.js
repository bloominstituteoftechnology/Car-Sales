import * as actions from "./actions"

export const item = (id, state) => {
    // Find price
   const findItem = state.additionalFeatures.filter((n) => n.id === id);
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
