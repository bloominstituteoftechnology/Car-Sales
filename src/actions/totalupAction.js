export const TOTALUP = "TOTALUP"

export const totalup = (add) =>{
    return dispatch => {
        dispatch({type: TOTALUP,
            payload: add});
    }
};