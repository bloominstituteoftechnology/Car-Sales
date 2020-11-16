import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import { reducer } from './reducers';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';


const store  = createStore(reducer)
//need to import reducer once it has been created

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store = {store}>
    <App />
    </Provider>, rootElement);
