import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';
import{Provider} from 'react-redux'
import {createStore} from 'redux'

import {autoReducer} from './components/reducers/autoReducer'
function reducer(){
  return{
      title: 'Hello'
  }
}

const store = createStore(autoReducer)

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>, rootElement);
