import * as actions from '../actions';

const initialState = {
  error: false,
  loading: false,
  loggedIn: false,
  redirectToReferrer: false,
  currentUser: {},
  badges: [],
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_SIGNUP_TRIGGERED: {
      return {
        ...state,
        loading: true
      }
    }

    case actions.USER_SIGNUP_SUCCESS: {
      alert('Succesfully Signed Up!');
      return {
        ...state,
        loading: false
      }
    }

    case actions.USER_SIGNUP_FAILURE: {
      return {
        ...state,
        loading: true
      }
    }

    case actions.USER_LOGIN_SUCCESS: {
      return {
        ...state,
        currentUser: action.response.user,
        loggedIn: true,
        redirectToReferrer: true
      }
    }

    case actions.FETCH_BADGES_SUCCESS: {
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

export default UserReducer;
