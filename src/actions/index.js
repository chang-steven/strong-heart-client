import { API_BASE_URL } from '../config';

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

export function userLogIn(data) {
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
        onSuccess: USER_LOGIN_SUCCESS,
        onFailure: USER_LOGIN_FAILURE,
        promise,
    };
}


//Fetch Exercise Log
export const FETCH_EXERCISELOG_TRIGGERED = 'FETCH_EXERCISELOG_TRIGGERED'
export const FETCH_EXERCISELOG_SUCCESS = 'FETCH_EXERCISELOG_SUCCESS';
export const FETCH_EXERCISELOG_FAILURE = 'FETCH_EXERCISELOG_FAILURE';

export function fetchExerciseLog() {
    const promise = fetch(`${API_BASE_URL}/exercise-log`);
    return {
        onRequest: FETCH_EXERCISELOG_TRIGGERED,
        onSuccess: FETCH_EXERCISELOG_SUCCESS,
        onFailure: FETCH_EXERCISELOG_FAILURE,
        promise,
    };
}

//Add Exercise
export const ADD_EXERCISE_TRIGGERED = 'ADD_EXERCISE_TRIGGERED'
export const ADD_EXERCISE_SUCCESS = 'ADD_EXERCISE_SUCCESS';
export const ADD_EXERCISE_FAILURE = 'ADD_EXERCISE_FAILURE';

export function addExercise(data) {
    const promise = fetch(`${API_BASE_URL}/add-exercise`,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
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
    const promise = fetch(`${API_BASE_URL}/edit-exercise`,
    {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
    return {
        onRequest: EDIT_EXERCISE_TRIGGERED,
        onSuccess: EDIT_EXERCISE_SUCCESS,
        onFailure: EDIT_EXERCISE_FAILURE,
        promise,
    };
}



//Fetch Badges
export const FETCH_BADGES_TRIGGERED = 'FETCH_BADGES_TRIGGERED';
export const FETCH_BADGES_SUCCESS = 'FETCH_BADGES_SUCCESS';
export const FETCH_BADGES_FAILURE = 'FETCH_BADGES_FAILURE';

export function fetchBadges() {
    const promise = fetch(`${API_BASE_URL}/badges`);
    return {
        onRequest: FETCH_BADGES_TRIGGERED,
        onSuccess: FETCH_BADGES_SUCCESS,
        onFailure: FETCH_BADGES_FAILURE,
        promise,
    };
}
