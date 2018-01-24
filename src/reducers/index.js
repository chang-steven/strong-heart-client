import { combineReducers } from 'redux';
import ExerciseReducer from './exercise.reducer';
import UserReducer from './user.reducer';
import { reducer as formReducer } from 'redux-form';

export const reducers = combineReducers({
    form: formReducer,
    user: UserReducer,
    exercise: ExerciseReducer
});

export default reducers;
