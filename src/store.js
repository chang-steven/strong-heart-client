import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './promise-middleware';


import { reducer as formReducer } from 'redux-form';
import { HeartStrongReducer } from './reducers';

export default createStore(
  combineReducers({
      form: formReducer,
      heartStrong: HeartStrongReducer
  }),
  applyMiddleware(thunk, promiseMiddleware)
);
