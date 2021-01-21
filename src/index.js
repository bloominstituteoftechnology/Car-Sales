import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux"
import 'bulma/css/bulma.css';
import './styles.scss';
import { createStore } from "redux"
import { reducer } from "./components/reducer/reducer"


const ReactDevTools  = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    const store=createStore(reducer,ReactDevTools)





const rootElement = document.getElementById('root');
ReactDOM.render(
 <Provider
  store={store}>
  <App />
</Provider> ,  
rootElement);

