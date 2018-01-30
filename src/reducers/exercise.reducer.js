import * as actions from '../actions';

const initialState = {
  loading: false,
  exerciseLog: [],
  exerciseStatistics: {},
};

export const ExerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_EXERCISELOG_SUCCESS: {
      return {
        ...state,
        exerciseLog: action.response.exerciseLog,
        exerciseStatistics: action.response.statistics,
      }
    }

    case actions.ADD_EXERCISE_SUCCESS: {
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
