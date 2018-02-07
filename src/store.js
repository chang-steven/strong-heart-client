import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promiseMiddleware from './promise-middleware';
import reducers from './reducers';

import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
export const history = createHistory();

// import {loadAuthToken} from './local-storage';

const middlewares = [ thunk, promiseMiddleware, logger, routerMiddleware(history) ];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware( ...middlewares )
  ));

  // Hydrate the authToken from localStorage if it exist
// const authToken = loadAuthToken();
// if (authToken) {
//     const token = authToken;
//     store.dispatch(setAuthToken(token));
//     store.dispatch(refreshAuthToken());
// }

export default store;
