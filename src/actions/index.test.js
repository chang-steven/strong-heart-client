import 'jest-localstorage-mock';
import configureStore from 'redux-mock-store';
import asyncMiddleware from 'redux-thunk';
import promiseMiddleware from '../helpers/promise-middleware';

import * as actions from './index';
import {
  userSignUp,
  userLogIn,
  addExercise,
  editExercise,
  addActivity,
  deleteExercise,
  fetchUserInfo
} from './index';
import { API_BASE_URL } from '../config';

const middlewares = [
  asyncMiddleware,
  promiseMiddleware,
];

const mockStore = configureStore(middlewares);

describe('HEARTSTRONG action creators', () => {
  afterEach(() => {
    // Clear session storage, mock store and mock fetch requests
    sessionStorage.clear();
    // store.clearActions()
    fetch.resetMocks();
  });

  describe('userSignUp', () => {
    it('Should dispatch actions to sign up a new user', () => {
      const store = mockStore({});
      const newUser = {
        email: 'user@test.com',
        password: 'testtest'
      };
      const response = {
        message: 'Success',
      };

      fetch.mockResponseOnce(JSON.stringify(response))

      return store.dispatch(userSignUp(newUser))
      .then(() => {
        const dispatchedActions = store.getActions()
        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/signup`,   {
          method: 'POST',
          body: JSON.stringify(newUser),
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        });
        expect(dispatchedActions[0]).toEqual({ type: actions.USER_SIGNUP_TRIGGERED });
        expect(dispatchedActions[1]).toEqual({ type: actions.USER_SIGNUP_SUCCESS, response});
      });
    });
  });


  describe('userLogIn', () => {

    it('Should dispatch actions to login an existing user', () => {
      const store = mockStore({});
      const user = {
        email: 'user@test.com',
        password: 'testtest',
      };
      const token = 'token';
      const response = {
        message: 'Successfully logged in',
        activities: ['aerobics', 'basketball', 'running', 'tennis'],
        currentUser: {user: 'current-user'},
        exerciseLog: ['a', 'b', 'c'],
        exerciseStatistics: {avg: 25},
        authToken: token,
        isTesting: true

      };
      const callback = jest.fn();
      fetch.mockResponseOnce(JSON.stringify(response));

      return store.dispatch(userLogIn(user, callback))
      .then(() => {
        const storedActions = store.getActions();
        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/user`,   {
          method: 'POST',
          body: JSON.stringify(user),
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        });
        expect(storedActions[0]).toEqual({ type: actions.USER_LOGIN_TRIGGERED });
      });
    });
  });


  describe('fetchUserInfo', () => {
    it('Should dispatch actions to fetch user info if token stored in session storage', () => {
      const store = mockStore({});
      const token = '12345';
      const response = {
        activities: ['aerobics', 'basketball', 'running', 'tennis'],
        currentUser: {},
        exerciseLog: [],
        exerciseStatistics: {},
      };

      sessionStorage.setItem('token', '12345');
      fetch.mockResponseOnce(JSON.stringify(response));

      return store.dispatch(fetchUserInfo())
      .then(() => {
        const storedActions = store.getActions();
        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/user`, {
          method: 'GET',
          headers: new Headers({
            Authorization: `Bearer ${token}`
          })
        });
        expect(storedActions[0]).toEqual({ type: actions.FETCH_USERINFO_TRIGGERED });
        expect(storedActions[1]).toEqual({ type: actions.FETCH_USERINFO_SUCCESS, response});
      });
    });
  });


  describe('addExercise', () => {
    it('Should dispatch actions to add exercise for a logged in user', () => {
      const store = mockStore({});
      const token = '12345';
      const exercise = {
        userId: '123',
        date: '1/23/13',
        activity: 'bowling',
        duration: 32,
      };

      const response = {
        exerciseLog: ['a', 'b', 'c'],
        exerciseStatistics: {avg: 25},
      }

      sessionStorage.setItem('token', '12345');
      fetch.mockResponseOnce(JSON.stringify(response));

      return store.dispatch(addExercise(exercise))
      .then(() => {
        const storedActions = store.getActions();
        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/exercise`, {
          method: 'POST',
          body: JSON.stringify(exercise),
          headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          })
        });
        expect(storedActions[0]).toEqual({ type: actions.ADD_EXERCISE_TRIGGERED });
        expect(storedActions[1]).toEqual({ type: actions.ADD_EXERCISE_SUCCESS, response});
      });
    });
  });

  describe('editExercise', () => {
    it('Should dispatch actions to edit an exercise session for a logged in user', () => {
      const store = mockStore({});
      const token = '12345';
      const exercise = {
        userId: '123',
        date: '1/23/13',
        activity: 'bowling',
        duration: 32,
      };

      const response = {
        userId: '123',
        date: '1/23/13',
        activity: 'tennis',
        duration: 32,
      };

      sessionStorage.setItem('token', '12345');
      fetch.mockResponseOnce(JSON.stringify(response));

      return store.dispatch(editExercise(exercise))
      .then(() => {
        const storedActions = store.getActions();
        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/exercise`, {
          method: 'PUT',
          body: JSON.stringify(exercise),
          headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          })
        });
        expect(storedActions[0]).toEqual({ type: actions.EDIT_EXERCISE_TRIGGERED });
        expect(storedActions[1]).toEqual({ type: actions.EDIT_EXERCISE_SUCCESS, response});
      });
    });
  });


  describe('deleteExercise', () => {
    it('Should dispatch actions to delete an exercise session for a logged in user', () => {
      const store = mockStore({});
      const token = '12345';

      const exercise = {
        id: '123'
      };
      const response = {
        message: 'Deleted',
        isTesting: true
      };

      sessionStorage.setItem('token', '12345');
      fetch.mockResponseOnce(JSON.stringify(response));

      return store.dispatch(deleteExercise(exercise))
      .then(() => {
        const storedActions = store.getActions();
        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/exercise`, {
          method: 'DELETE',
          body: JSON.stringify(exercise),
          headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          })
        });
        expect(storedActions[0]).toEqual({ type: actions.DELETE_EXERCISE_TRIGGERED });
      });
    });
  });


  describe('addActivity', () => {
    it('Should dispatch actions to add an activity for a logged in user', () => {
      const store = mockStore({});
      const token = '12345';
      const activity = {
        activity: 'tennis'
      };
      const response = {
        message: 'Success',
      };
      sessionStorage.setItem('token', '12345');
      fetch.mockResponseOnce(JSON.stringify(response));

      return store.dispatch(addActivity(activity))
      .then(() => {
        const storedActions = store.getActions();
        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/activity`, {
          method: 'POST',
          body: JSON.stringify(activity),
          headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          })
        });
        expect(storedActions[0]).toEqual({ type: actions.ADD_ACTIVITY_TRIGGERED });
        expect(storedActions[1]).toEqual({ type: actions.ADD_ACTIVITY_SUCCESS, response});
      });
    });
  });
});
