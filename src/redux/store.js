import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from '../redux/car-features/carFeaturesReducer';
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;