import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';
import { Provider } from 'react-redux';


// const store = createStore(featureReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider><App /></Provider>, rootElement);
