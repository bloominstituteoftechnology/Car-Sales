import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import { store } from "redux";
import 'bulma/css/bulma.css';
import './styles.scss';
import { reducer } from './reducers/reducer';
export const store = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
