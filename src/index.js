import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//style
import 'bulma/css/bulma.css';
import './styles.scss';

//reducer
import {carReducer} from "./reducers"

const store = createStore(carReducer);


const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    rootElement);
