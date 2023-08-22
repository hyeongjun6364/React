import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import {createStore,applyMiddleware} from 'redux'
import loggerMiddleware from './lib/loggerMiddleware';
import {createLogger} from 'redux-logger';
import sample from './modules/sample';
import thunk from 'redux-thunk';
const logger = createLogger();
const store = createStore(rootReducer,applyMiddleware(logger,thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);

reportWebVitals();
