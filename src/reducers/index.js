import { USER_SIGNUP_SUCCESS, USER_LOGIN_SUCCESS, FETCH_EXERCISELOG_SUCCESS, ADD_EXERCISE_SUCCESS, FETCH_BADGES_SUCCESS } from '../actions';

const initialState = {
  badges: [],
  exerciseLog: [],
};

export const HeartStrongReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP_SUCCESS: {
      console.log(action.response);
      alert('Succesfully Signed Up!');
      return state;
    }

    case USER_LOGIN_SUCCESS: {
      console.log(action.response);
      alert('Succesfully Logged in!');
      return {
        ...state,
        user: action.response,
      }
    }

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
