import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer/Reducer'
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer);
const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}> <App /> </Provider>, rootElement);
