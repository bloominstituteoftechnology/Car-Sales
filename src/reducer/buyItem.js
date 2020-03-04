import { initialState } from ".";

export const buyItem = (state, initialState, action) => {
    console.log("buyItem", state, action);

    switch(action.type) {
        case "BUY_ITEM":
            return {
                ...state,
            }

        default:
            return state;
    }
}