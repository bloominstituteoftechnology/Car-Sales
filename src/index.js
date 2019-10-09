import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { reducer } from './reducers'
import { Provider } from 'react-redux'

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, 
    rootElement);