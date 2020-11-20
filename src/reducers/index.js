import { combineReducers } from "redux";
// import { titleReducer } from "./titleReducer";
// import { membersReducer } from "./membersReducer";
// The reducers the get combined here
// export default combineReducers({ titleState: titleReducer, membersReducer });

import { total } from './totalReducer';



export default combineReducers({totalState: total})


