import { TOTALUP } from "../actions/totalupAction"

const initState = {
    total: 0,
    add: 0

}

export const totalReducer = (state = initState, action) =>{
console.log(`NAL: totalReducer.js`, action)
switch(action.type){
    case TOTALUP:
        return {
            ...state,
            total: action.payload,
            add: action.payload
        };

    default: 
        return state;
}


}

