import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import {Provider} from 'react-redux';

import{createStore} from 'redux';

import {reducer} from './components/reducer/reducer';

const store = createStore(
    reducer, 
    window._REDUX_DEVTOOLS_EXTENSIONS_&& window.REDUX_DEVTOOLS_EXTENSIONS_()
);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App />,</Provider>, rootElement);
