import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Provider from 'react-redux/lib/components/Provider';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './redux/combineReducer';
// import App from './App';
import AirlinesDesk from './containers';
import './index.css';

const middlewares = [
  thunk,
  promiseMiddleware({
    promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'],
  }),
];
let devTools;

const env = process.env.NODE_ENV || false; /* eslint-disable-line no-alert */

if (env === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
  devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
} else {
  devTools = f => f;
}


const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middlewares),
    devTools,
  )
);

function AppRoot() {
  return (
    <Provider store={store}>
      <AirlinesDesk />
    </Provider>
  );
}

ReactDOM.render(<AppRoot />, document.getElementById('root'));
