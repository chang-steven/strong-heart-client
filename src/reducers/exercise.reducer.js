import * as actions from '../actions';

const initialState = {
  loading: false,
  exerciseLog: [],
};

export const ExerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_EXERCISELOG_SUCCESS: {
      return {
        ...state,
        exerciseLog: action.response,
      }
    }

    case actions.ADD_EXERCISE_SUCCESS: {
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
