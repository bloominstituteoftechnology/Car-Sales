import React from 'react';
import ReactDOM from 'react-dom';
//  import Apple from './Apple';
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import Header from "./components/Header"
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import rootReducer from "./reducers";
import Apps from "./Apps";

import 'bulma/css/bulma.css';
import './styles.scss';

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log(`preve state: `, store.getState());
  console.log(`action: `, action);
  next(action);
  console.log("new state: ", store.getState());
  console.groupEnd();
};

const store = createStore(rootReducer, applyMiddleware(logger));


function App(){
    return (
        <div className="boxes">
          <Apps />
        </div>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , rootElement);
