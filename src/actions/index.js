import { API_BASE_URL } from '../config';
import { push } from 'react-router-redux';
import { loadAuthToken, saveAuthToken, clearAuthToken } from '../helpers/local-storage';


//User Sign Up
export const USER_SIGNUP_TRIGGERED = 'USER_SIGNUP_TRIGGERED'
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAILURE = 'USER_SIGNUP_FAILURE';

export function userSignUp(data) {
    const promise = fetch(`${API_BASE_URL}/signup`,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
    return {
        onRequest: USER_SIGNUP_TRIGGERED,
        onSuccess: USER_SIGNUP_SUCCESS,
        onFailure: USER_SIGNUP_FAILURE,
        promise,
    };
}

//User Log In
export const USER_LOGIN_TRIGGERED = 'USER_LOGIN_TRIGGERED'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
const handleSuccessUserAuthentication = (cb, response, dispatch) => {
    saveAuthToken(response.authToken);
    dispatch({
        type: USER_LOGIN_SUCCESS,
        response,
    });
    cb();
    dispatch(push('/dashboard'));
};

export function userLogIn(data, cb) {
    const promise = fetch(`${API_BASE_URL}/login`,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
    return {
        onRequest: USER_LOGIN_TRIGGERED,
        onSuccess: handleSuccessUserAuthentication.bind(null, cb),
        onFailure: USER_LOGIN_FAILURE,
        promise,
    };
}

//User Log Out
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const userLogOut = () => (dispatch) => {
  clearAuthToken();
  dispatch(push('/'));
  dispatch({
      type: USER_LOGOUT_SUCCESS
  });
}

//Add Exercise
export const ADD_EXERCISE_TRIGGERED = 'ADD_EXERCISE_TRIGGERED'
export const ADD_EXERCISE_SUCCESS = 'ADD_EXERCISE_SUCCESS';
export const ADD_EXERCISE_FAILURE = 'ADD_EXERCISE_FAILURE';

export function addExercise(data) {
    const token = loadAuthToken();
    const promise = fetch(`${API_BASE_URL}/add-exercise`,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    });
    return {
        onRequest: ADD_EXERCISE_TRIGGERED,
        onSuccess: ADD_EXERCISE_SUCCESS,
        onFailure: ADD_EXERCISE_FAILURE,
        promise,
    };
}

//Edit Exercise
export const EDIT_EXERCISE_TRIGGERED = 'EDIT_EXERCISE_TRIGGERED'
export const EDIT_EXERCISE_SUCCESS = 'EDIT_EXERCISE_SUCCESS';
export const EDIT_EXERCISE_FAILURE = 'EDIT_EXERCISE_FAILURE';

export function editExercise(data) {
    const token = loadAuthToken();
    const promise = fetch(`${API_BASE_URL}/edit-exercise`,
    {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    });
    return {
        onRequest: EDIT_EXERCISE_TRIGGERED,
        onSuccess: EDIT_EXERCISE_SUCCESS,
        onFailure: EDIT_EXERCISE_FAILURE,
        promise,
    };
}

//Add Activity
export const ADD_ACTIVITY_TRIGGERED = 'ADD_ACTIVITY_TRIGGERED'
export const ADD_ACTIVITY_SUCCESS = 'ADD_ACTIVITY_SUCCESS';
export const ADD_ACTIVITY_FAILURE = 'ADD_ACTIVITY_FAILURE';
const handleAddActivitySuccess = (response, dispatch) => {
  dispatch({
      type: ADD_ACTIVITY_SUCCESS,
      response
  });
}

export function addActivity(data) {
    const token = loadAuthToken();
    const promise = fetch(`${API_BASE_URL}/activity`,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    });
    return {
        onRequest: ADD_ACTIVITY_TRIGGERED,
        onSuccess: handleAddActivitySuccess,
        onFailure: ADD_ACTIVITY_FAILURE,
        promise,
    };
}

//Delete Activity
export const DELETE_EXERCISE_TRIGGERED = 'DELETE_EXERCISE_TRIGGERED'
export const DELETE_EXERCISE_SUCCESS = 'DELETE_EXERCISE_SUCCESS';
export const DELETE_EXERCISE_FAILURE = 'DELETE_EXERCISE_FAILURE';
const handleSuccessDeleteExercise = (cb, response, dispatch) => {
    dispatch({
        type: DELETE_EXERCISE_SUCCESS,
        response,
    });
    cb();
};

export function deleteExercise(data, cb) {
    const token = loadAuthToken();
    const promise = fetch(`${API_BASE_URL}/delete`,
    {
      method: 'DELETE',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    });
    return {
        onRequest: DELETE_EXERCISE_TRIGGERED,
        onSuccess: handleSuccessDeleteExercise.bind(null, cb),
        onFailure: DELETE_EXERCISE_FAILURE,
        promise,
    };
}

//Fetch Exercise Log
export const FETCH_USERINFO_TRIGGERED = 'FETCH_USERINFO_TRIGGERED'
export const FETCH_USERINFO_SUCCESS = 'FETCH_USERINFO_SUCCESS';
export const FETCH_USERINFO_FAILURE = 'FETCH_USERINFO_FAILURE';

export function fetchUserInfo() {
    const token = loadAuthToken();
    const promise = fetch(`${API_BASE_URL}/user-info`,
      {
        method: 'GET',
        headers: new Headers({
          Authorization: `Bearer ${token}`
        })
      })

    return {
        onRequest: FETCH_USERINFO_TRIGGERED,
        onSuccess: FETCH_USERINFO_SUCCESS,
        onFailure: FETCH_USERINFO_FAILURE,
        promise,
    };
}
