import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import { Provider } from 'react-redux';

import { createStore } from 'redux';

import { addOrRemoveFeaturesReducer } from './reducers/addOrRemoveFeaturesReducer'

const store = createStore(addOrRemoveFeaturesReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  
console.log('******', store.getState());

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, rootElement);
