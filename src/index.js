import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { reducer } from './reducer/Reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'bulma/css/bulma.css';
import './styles.scss';

// Actions from reducer can be used within App.js
const store = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
