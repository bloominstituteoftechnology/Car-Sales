import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import 'bulma/css/bulma.css';
import './styles.scss';
import {reducer} from './reducer/feature';
import {Provider} from 'react-redux'

const store = createStore(reducer);


const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store ={store}><App /></Provider>, rootElement);
