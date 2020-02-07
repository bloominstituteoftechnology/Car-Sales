
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import {reducer} from "./reducers/VehicleReducer.js"
import { Provider } from 'react-redux';

import 'bulma/css/bulma.css';
import './styles.scss';

const rootElement = document.getElementById('root');

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
