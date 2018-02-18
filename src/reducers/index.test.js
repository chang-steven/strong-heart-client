import { UserReducer } from './user.reducer';
import * as actions from '../actions';

const initialState = {
  errorSignUp: false,
  errorLogIn: false,
  errorAddActivity: false,
  errorMsg: null,
  successMsg: null,
  loading: false,
  loggedIn: false,
  activities: [],
  currentUser: {},
  exerciseLog: [],
  exerciseStatistics: {},
};

describe('UserReducer', () => {
  it('Should set the initial state when nothing is passed in', () => {
    const state = UserReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual(initialState);
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = UserReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });
});


describe('userSignUp', () => {
  it('Should change state when TRIGGERED', () => {
    let state = {
      loading: false,
      errorLogIn: false,
      errorSignUp: false,
      errorMsg: null,
      successMsg: null,
    }
    state = UserReducer(state, {type: actions.USER_SIGNUP_TRIGGERED});
    expect(state).toEqual({
      loading: true,
      errorLogIn: false,
      errorSignUp: false,
      errorMsg: null,
      successMsg: null,
    });
  });

  it('Should change state on SUCCESS', () => {
    let state = {
      loading: true,
      errorLogIn: false,
      errorSignUp: false,
      errorMsg: null,
      successMsg: null,
    }

    state = UserReducer(state, {type: actions.USER_SIGNUP_SUCCESS, response: {message: 'Success'}});
    expect(state).toEqual({
      loading: false,
      errorLogIn: false,
      errorSignUp: false,
      errorMsg: null,
      successMsg: 'Success',
    });
  });

  it('Should change state on FAILURE', () => {
    let state = {
      loading: true,
      errorLogIn: false,
      errorSignUp: false,
      errorMsg: null,
      successMsg: null,
    }

    state = UserReducer(state, {type: actions.USER_SIGNUP_FAILURE, error: {message: 'Error'}});
    expect(state).toEqual({
      loading: false,
      errorLogIn: false,
      errorSignUp: true,
      errorMsg: 'Error',
      successMsg: null,
    });
  });
});


describe('userLogIn', () => {
  it('Should change state when TRIGGERED', () => {
    let state = {
      loading: false,
      errorLogIn: false,
      errorSignUp: false,
      errorMsg: null,
      successMsg: null,
    }
    state = UserReducer(state, {type: actions.USER_LOGIN_TRIGGERED});
    expect(state).toEqual({
      loading: true,
      errorLogIn: false,
      errorSignUp: false,
      errorMsg: null,
      successMsg: null,
    });
  });

  it('Should change state on SUCCESS', () => {
    let state = {
      loading: true,
      errorLogIn: false,
      errorSignUp: false,
      errorMsg: null,
      loggedIn: false,
      activities: [],
      currentUser: {},
      exerciseLog: [],
      exerciseStatistics: {},
    }

    state = UserReducer(state, {type: actions.USER_LOGIN_SUCCESS, response: {
      activities: ['aerobics', 'basketball', 'running', 'tennis'],
      currentUser: {user: 'current-user'},
      exerciseLog: ['a', 'b', 'c'],
      exerciseStatistics: {avg: 25},
    }});
    expect(state).toEqual({
      loading: false,
      errorLogIn: false,
      errorSignUp: false,
      errorMsg: null,
      loggedIn: true,
      activities: ['aerobics', 'basketball', 'running', 'tennis'],
      currentUser: {user: 'current-user'},
      exerciseLog: ['a', 'b', 'c'],
      exerciseStatistics: {avg: 25},
    });
  });

  it('Should change state on FAILURE', () => {
    let state = {
      loading: true,
      errorLogIn: false,
      errorSignUp: false,
      errorMsg: null,
      successMsg: null,
    }

    state = UserReducer(state, {type: actions.USER_LOGIN_FAILURE, error: {message: 'Error'}});
    expect(state).toEqual({
      loading: false,
      errorLogIn: true,
      errorSignUp: false,
      errorMsg: 'Error',
      successMsg: null,
    });
  });
});


describe('addExercise', () => {
  it('Should change state on SUCCESS', () => {
    let state = {
      loading: false,
      errorLogIn: false,
      errorSignUp: false,
      errorMsg: null,
      loggedIn: true,
      activities: ['aerobics', 'basketball', 'running', 'tennis'],
      currentUser: {user: 'current-user'},
      exerciseLog: ['a', 'b', 'c'],
      exerciseStatistics: {avg: 25},
    }

    state = UserReducer(state, {type: actions.ADD_EXERCISE_SUCCESS, response: {
      exerciseLog: ['a', 'b', 'c', 'd'],
      exerciseStatistics: {avg: 45},
    }});
    expect(state).toEqual({
      loading: false,
      errorLogIn: false,
      errorSignUp: false,
      errorMsg: null,
      loggedIn: true,
      activities: ['aerobics', 'basketball', 'running', 'tennis'],
      currentUser: {user: 'current-user'},
      exerciseLog: ['a', 'b', 'c', 'd'],
      exerciseStatistics: {avg: 45},
    });
  });
});

describe('editExercise', () => {
  it('Should change state on SUCCESS', () => {
    let state = {
      loading: false,
      errorLogIn: false,
      errorSignUp: false,
      errorMsg: null,
      loggedIn: true,
      activities: ['aerobics', 'basketball', 'running', 'tennis'],
      currentUser: {user: 'current-user'},
      exerciseLog: ['a', 'b', 'c'],
      exerciseStatistics: {avg: 22},
    }

    state = UserReducer(state, {type: actions.EDIT_EXERCISE_SUCCESS, response: {
      exerciseLog: ['a', 'b', 'e'],
      exerciseStatistics: {avg: 45},
    }});
    expect(state).toEqual({
      loading: false,
      errorLogIn: false,
      errorSignUp: false,
      errorMsg: null,
      loggedIn: true,
      activities: ['aerobics', 'basketball', 'running', 'tennis'],
      currentUser: {user: 'current-user'},
      exerciseLog: ['a', 'b', 'e'],
      exerciseStatistics: {avg: 45},
    });
  });
});


describe('deleteExercise', () => {
  it('Should change state on SUCCESS', () => {
    let state = {
      loading: false,
      errorLogIn: false,
      errorSignUp: false,
      errorMsg: null,
      loggedIn: true,
      activities: ['aerobics', 'basketball', 'running', 'tennis'],
      currentUser: {user: 'current-user'},
      exerciseLog: ['a', 'b', 'c'],
      exerciseStatistics: {avg: 22},
    }

    state = UserReducer(state, {type: actions.DELETE_EXERCISE_SUCCESS, response: {
      exerciseLog: ['a', 'b'],
      exerciseStatistics: {avg: 41},
    }});
    expect(state).toEqual({
      loading: false,
      errorLogIn: false,
      errorSignUp: false,
      errorMsg: null,
      loggedIn: true,
      activities: ['aerobics', 'basketball', 'running', 'tennis'],
      currentUser: {user: 'current-user'},
      exerciseLog: ['a', 'b'],
      exerciseStatistics: {avg: 41},
    });
  });
});


describe('addActivity', () => {
  it('Should change state when TRIGGERED', () => {
    let state = {
      errorLogIn: false,
      errorSignUp: false,
      errorAddActivity: true,
      errorMsg: null,
      successMsg: null,
    }
    state = UserReducer(state, {type: actions.ADD_ACTIVITY_TRIGGERED});
    expect(state).toEqual({
      errorLogIn: false,
      errorSignUp: false,
      errorAddActivity: false,
      errorMsg: null,
      successMsg: null,
    });
  });

  it('Should change state on SUCCESS', () => {
    let state = {
      loading: false,
      errorLogIn: false,
      errorSignUp: false,
      errorAddActivity: false,
      errorMsg: null,
      activities: ['aerobics', 'basketball', 'running', 'tennis'],

    }

    state = UserReducer(state, {type: actions.ADD_ACTIVITY_SUCCESS, response: {
      activities: ['aerobics', 'basketball', 'running', 'tennis', 'bowling']
    }});
    expect(state).toEqual({
      loading: false,
      errorLogIn: false,
      errorSignUp: false,
      errorAddActivity: false,
      errorMsg: null,
      activities: ['aerobics', 'basketball', 'running', 'tennis', 'bowling']
    });
  });

  it('Should change state on FAILURE', () => {
    let state = {
      loading: false,
      errorLogIn: false,
      errorSignUp: false,
      errorAddActivity: false,
      errorMsg: null,
      successMsg: null,
      activities: ['aerobics', 'basketball', 'running', 'tennis'],
    }

    state = UserReducer(state, {type: actions.ADD_ACTIVITY_FAILURE, error: {message: 'Error'}});
    expect(state).toEqual({
      loading: false,
      errorLogIn: false,
      errorAddActivity: true,
      errorSignUp: false,
      errorMsg: 'Error',
      successMsg: null,
      activities: ['aerobics', 'basketball', 'running', 'tennis']
    });
  });
});


describe('fetchUserInfo', () => {
  it('Should change state when TRIGGERED', () => {
    let state = {
      loading: false
    }
    state = UserReducer(state, {type: actions.FETCH_USERINFO_TRIGGERED});
    expect(state).toEqual({
      loading: true
    });
  });

  it('Should change state on SUCCESS', () => {
    let state = {
      loading: true,
      loggedIn: false,
      activities: [],
      currentUser: {},
      exerciseLog: [],
      exerciseStatistics: {},
    }

    state = UserReducer(state, {type: actions.FETCH_USERINFO_SUCCESS, response: {
      activities: ['aerobics', 'basketball', 'running', 'tennis'],
      currentUser: {user: 'current-user'},
      exerciseLog: ['a', 'b', 'c'],
      exerciseStatistics: {avg: 25},
    }});
    expect(state).toEqual({
      loading: false,
      loggedIn: true,
      activities: ['aerobics', 'basketball', 'running', 'tennis'],
      currentUser: {user: 'current-user'},
      exerciseLog: ['a', 'b', 'c'],
      exerciseStatistics: {avg: 25},
    });
  });

  it('Should change state on FAILURE', () => {
    let state = {
      loading: true,
    }
    
    state = UserReducer(state, {type: actions.FETCH_USERINFO_FAILURE, error: {message: 'Error'}});
    expect(state).toEqual({
      loading: false,
    });
  });
});
