import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import rootReducer, {rootSaga} from './modules';
import {createStore,applyMiddleware} from 'redux'
import loggerMiddleware from './lib/loggerMiddleware';
import {createLogger} from 'redux-logger';
import sample from './modules/sample';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk,sagaMiddleware)));
sagaMiddleware.run(rootSaga)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);

reportWebVitals();
