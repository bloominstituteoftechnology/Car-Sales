import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as addReducer } from './reducers/add';
import { reducer as removeReducer } from './reducers/remove';

import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const rootReducer = combineReducers({
    add: addReducer,
    remove: removeReducer
})

const store = createStore(rootReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
    </Provider>,
     rootElement);
