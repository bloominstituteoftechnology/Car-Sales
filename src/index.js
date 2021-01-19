import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { carSalesReducer } from './reducers/carSalesReducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(carSalesReducer)
const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
