export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_1500":
            return {...state, price: state.price + 1500};
        case "ADD_500":
            return {...state, price: state.price + 500};
        case "ADD_250":
            return {...state, price: state.price + 250};
        default:
            return state;        
    }
};

export const initialState = {price: 0}