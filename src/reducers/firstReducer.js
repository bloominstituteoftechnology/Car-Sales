export const initialState = {
    id: 5,
    name: "🚗",
    price: 100
}

export const firstReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}