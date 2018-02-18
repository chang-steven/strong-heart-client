import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'
import UserReducer from './user.reducer';

export const reducers = combineReducers({
  form: formReducer,
  user: UserReducer,
  routing: routerReducer
});

export default reducers;
