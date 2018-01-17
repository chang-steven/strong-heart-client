import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { HeartStrongReducer } from './reducers';

export default createStore(
  combineReducers({
      form: formReducer,
      heartStrong: HeartStrongReducer
  })
);
