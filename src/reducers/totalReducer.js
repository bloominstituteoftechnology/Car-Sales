export const initialState = {
    title: "Total",
    editing: false
};

export const totalReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_TOTAL":
            return {
                ...state,
                title: action.payload,
                editing: false
            };
    }
}