import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore } from "redux"
import { Provider} from "react-redux"
import reducer from "./components/reducer/index"

 
import 'bulma/css/bulma.css';
import './styles.scss';


const ReactDevTools  = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore( reducer,ReactDevTools)


const rootElement = document.getElementById('root');


ReactDOM.render(
<Provider store={store}><App /></Provider>
, rootElement);
