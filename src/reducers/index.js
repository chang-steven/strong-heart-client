import { combineReducers } from 'redux';
import UserReducer from './user.reducer';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'

export const reducers = combineReducers({
    form: formReducer,
    user: UserReducer,
    routing: routerReducer
});

export default reducers;
