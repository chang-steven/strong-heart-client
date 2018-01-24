import { FETCH_EXERCISELOG_SUCCESS, ADD_EXERCISE_SUCCESS } from '../actions';

const initialState = {
  exerciseLog: [],
};

export const ExerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXERCISELOG_SUCCESS: {
      return {
        ...state,
        exerciseLog: action.response,
      }
    }

    case ADD_EXERCISE_SUCCESS: {
      console.log(action.response);
      alert('Successfully Added Exercise');
      return {
        ...state,
        exerciseLog: action.response,
      }
    }

    default: {
      return state;
    }
  }
};

export default ExerciseReducer;
