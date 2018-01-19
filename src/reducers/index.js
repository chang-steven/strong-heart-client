import { FETCH_EXERCISELOG_SUCCESS, FETCH_BADGES_SUCCESS } from '../actions';

const initialState = {
  badges: [],
  exerciseLog: [],
};

export const HeartStrongReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXERCISELOG_SUCCESS: {
      return {
        ...state,
        exerciseLog: action.response,
      }
    }

    case FETCH_BADGES_SUCCESS: {
      return {
        ...state,
        badges: action.response,
      }
    }

    default: {
      return state;
    }
  }
};
