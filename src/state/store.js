
import { combineReducers, createStore } from 'redux';

import * as reducers from '../state/reducers';

const rootReducer = combineReducers({
    vehicle: reducers.vehicleReducer,
  });

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);