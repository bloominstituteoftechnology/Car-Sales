import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider} from 'react-redux'
import 'bulma/css/bulma.css';
import './styles.scss';
import featureReducer from './reducers/featureReducer'
import {createStore} from 'redux'

const store = createStore(
    featureReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
,rootElement
);
