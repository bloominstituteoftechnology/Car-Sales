import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { mainReducer } from './reducers/reducers'

import 'bulma/css/bulma.css';
import './styles.scss';

export const store = createStore(mainReducer);

console.log('log of store', store);


const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}> 
    <App />
 </Provider>, 
rootElement);
