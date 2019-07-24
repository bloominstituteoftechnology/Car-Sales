import { createStore } from 'redux';
import { rooterReducer } from './reducer';

export const store = createStore(rooterReducer);
