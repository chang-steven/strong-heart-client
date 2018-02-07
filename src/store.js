import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promiseMiddleware from './promise-middleware';
import reducers from './reducers';

import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
export const history = createHistory();

const middlewares = [ thunk, promiseMiddleware, logger, routerMiddleware(history) ];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware( ...middlewares )
  ));

export default store;
