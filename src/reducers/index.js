// index.js files help you "index" and organize all the files in a directory
// One place to export all the files in a directory
// we can now import from the directory instead of the file 😃
import { combineReducers } from 'redux';

import {autoReducer} from './autoReducer';

// export const reducer = combineReducers({})

export default combineReducers({
  autoReducer
  // otherReducers
});
