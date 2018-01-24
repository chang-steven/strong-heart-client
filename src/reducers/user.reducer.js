import { USER_SIGNUP_SUCCESS, USER_LOGIN_SUCCESS, FETCH_BADGES_SUCCESS } from '../actions';

const initialState = {
  badges: [],
};

export const UserReducer = (state = initialState, action) => {
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

export default UserReducer;
