export const TOTALUP = "TOTALUP"

export const totalup = (add) =>{
    return {
        type: TOTALUP,
        payload: add
    };
};