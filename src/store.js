import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import promiseMiddleware from './helpers/promise-middleware';
import reducers from './reducers';

export const history = createHistory();

const middlewares = [ thunk, promiseMiddleware, logger, routerMiddleware(history) ];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware( ...middlewares )
  ));

  export default store;
