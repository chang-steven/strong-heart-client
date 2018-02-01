import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promiseMiddleware from './promise-middleware';
// import {loadAuthToken} from './local-storage';
import reducers from './reducers';

const middlewares = [ thunk, promiseMiddleware, logger ];
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
