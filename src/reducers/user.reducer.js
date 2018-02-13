import * as actions from '../actions';

const initialState = {
  errorSignUp: false,
  errorLogIn: false,
  errorAddActivity: false,
  loading: false,
  loggedIn: false,
  activities: [],
  currentUser: {},
  exerciseLog: [],
  exerciseStatistics: {},
  badges: [],
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_SIGNUP_TRIGGERED: {
      return {
        ...state,
        loading: true,
        errorSignUp: false,
      }
    }

    case actions.USER_SIGNUP_SUCCESS: {
      return {
        ...state,
        loading: false,
      }
    }

    case actions.USER_SIGNUP_FAILURE: {
      return {
        ...state,
        loading: false,
        errorSignUp: true,
      }
    }

    case actions.USER_LOGIN_TRIGGERED: {
      return {
        ...state,
        loading: true,
        errorLogIn: false,
      }
    }

    case actions.USER_LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        loggedIn: true,
        activities: action.response.activities,
        currentUser: action.response.currentUser,
        exerciseLog: action.response.exerciseLog,
        exerciseStatistics: action.response.exerciseStatistics,
      }
    }

    case actions.USER_LOGIN_FAILURE: {
      return {
        ...state,
        loading: false,
        errorLogIn: true,
      }
    }

    case actions.USER_LOGOUT_SUCCESS: {
      return {
        ...state,
        loggedIn: false
      }
    }

    case actions.FETCH_USERINFO_TRIGGERED: {
      return {
        ...state,
        loading: true
      }
    }

    case actions.FETCH_USERINFO_SUCCESS: {
      return {
        ...state,
        loading: false,
        loggedIn: true,
        activities: action.response.activities,
        currentUser: action.response.currentUser,
        exerciseLog: action.response.exerciseLog,
        exerciseStatistics: action.response.exerciseStatistics,

      }
    }

    case actions.FETCH_USERINFO_FAILURE: {
      return {
        ...state,
        loading: false
      }
    }

    case actions.ADD_EXERCISE_SUCCESS: {
      return {
        ...state,
        exerciseLog: action.response.exerciseLog,
        exerciseStatistics: action.response.exerciseStatistics
      }
    }

    case actions.EDIT_EXERCISE_SUCCESS: {
      return {
        ...state,
        exerciseLog: action.response.exerciseLog,
        exerciseStatistics: action.response.exerciseStatistics
      }
    }

    case actions.DELETE_EXERCISE_SUCCESS: {
      return {
        ...state,
        exerciseLog: action.response.exerciseLog,
        exerciseStatistics: action.response.exerciseStatistics
      }
    }

    case actions.ADD_ACTIVITY_TRIGGERED: {
      return {
        ...state,
        errorAddActivity: false,
      }
    }

    case actions.ADD_ACTIVITY_SUCCESS: {
      return {
        ...state,
        activities: action.response.activities
      }
    }

    case actions.ADD_ACTIVITY_FAILURE: {
      return {
        ...state,
        errorAddActivity: true,
      }
    }

    default: {
      return state;
    }
  }
};

export default UserReducer;
