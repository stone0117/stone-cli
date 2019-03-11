import React                          from 'react';
import ReactDOM                       from 'react-dom';
import './index.css';
import * as serviceWorker             from './serviceWorker';
// redux 相关
import {composeWithDevTools}          from 'redux-devtools-extension'; // 引入工具插件
import {applyMiddleware, createStore} from 'redux';
import {Provider}                     from 'react-redux';
import reducers                       from './reducers';
import thunk                          from 'redux-thunk';

// 组件
import App from './App';

console.log(`\x1b[32m${process.env.NODE_ENV === 'development' ? '开发环境' : '生产环境'}\x1b[0m`);

let middlewares = [thunk];

let store;

if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger');
  let logger             = createLogger({ collapsed: false });
  // noinspection JSCheckFunctionSignatures
  middlewares.push(logger);
  store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));
} else {
  // 生产环境
  store = createStore(reducers, applyMiddleware(...middlewares));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

