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
import API_BASE_URL from '../config';

const middlewares = [
    asyncMiddleware,
    promiseMiddleware,
];

const mockStore = configureStore(middlewares);


describe('actions for HEARTSTRONG', () => {



  beforeEach(() => {
    // const initialState = {
    //   errorSignUp: false,
    //   errorLogIn: false,
    //   errorAddActivity: false,
    //   errorMsg: null,
    //   successMsg: null,
    //   loading: false,
    //   loggedIn: false,
    //   activities: [],
    //   currentUser: {},
    //   exerciseLog: [],
    //   exerciseStatistics: {},
    // };
    //
    // const store = mockStore(initialState);
  });

  afterEach(() => {
    // mockStore(getState?: Object,Function) => store: Function
  });

  describe('userSignUp', () => {
    it('Should create a new user in the database', () => {

      const store = mockStore({});

      const newUser = {
        email: 'user@test.com',
        password: 'testtest'
      };
      const response = {
        message: 'Success'
      };

      const dispatch = jest.fn();
      global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
            json() {
              return response
            }
        })
      );

      const mockFetchBoardAction = {
          type: 'FETCH_BOARD'
      };
      jest.mock('../actions', () => Object.assign({},
          require.requireActual('../actions'),
          {
              fetchBoard: jest.fn().mockImplementation(() => {
                  return mockFetchBoardAction;
              })
          }
      ));






    return store.dispatch(userSignUp(newUser))
      .then((response) => {
        console.log(response);
        const actions = store.getActions()
        console.log(actions);
        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/signup`);
        expect(dispatch).toHaveBeenCalledWith(actions.USER_SIGNUP_TRIGGERED);
        expect(dispatch).toHaveBeenCalledWith(actions.USER_SIGNUP_SUCCESS);
    });


    // return store.dispatch(userSignUp(newUser))
    //   .then((response) => {
    //     console.log(response);
    //     const actions = store.getActions()
    //     console.log(actions);
    //   });


      // return userSignUp(newUser)(dispatch).then(() => {
      //     expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/signup`);
      //     expect(dispatch).toHaveBeenCalledWith(actions.USER_SIGNUP_TRIGGERED);
      //     expect(dispatch).toHaveBeenCalledWith(actions.USER_SIGNUP_SUCCESS);
      // });

    });
  });


  // describe('userLogIn', () => {
  //   it('Should log an exisiting user and respond with data from the mock API', () => {
  //     const user = {
  //       email: 'user@test.com',
  //       password: 'testtest'
  //     };
  //     const response = {
  //       message: 'Successfully logged in',
  //       activities: ['aerobics', 'basketball', 'running', 'tennis'],
  //       currentUser: {user: 'current-user'},
  //       exerciseLog: ['a', 'b', 'c'],
  //       exerciseStatistics: {avg: 25}
  //     };
  //     const dispatch = jest.fn();
  //     global.fetch = jest.fn().mockImplementation(() =>
  //       Promise.resolve({
  //           json() {
  //             return response
  //           }
  //       })
  //     );
  //
  //     return userLogIn(user)(dispatch).then(() => {
  //         expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/user`);
  //         expect(dispatch).toHaveBeenCalledWith(actions.USER_LOGIN_TRIGGERED);
  //         expect(dispatch).toHaveBeenCalledWith(actions.USER_LOGIN_SUCCESS);
  //     })
  //   });
  // });
  //
  //
  // describe('fetchUserInfo', () => {
  //   it('Should return data for user', () => {
  //       const userInfo = {
  //         activities: ['aerobics', 'basketball', 'running', 'tennis'],
  //         currentUser: {},
  //         exerciseLog: [],
  //         exerciseStatistics: {},
  //       };
  //
  //       const dispatch = jest.fn();
  //       global.fetch = jest.fn().mockImplementation(() =>
  //         Promise.resolve({
  //             json() {
  //               return userInfo
  //             }
  //         })
  //       );
  //
  //      return fetchUserInfo()(dispatch).then(() => {
  //          expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/user`);
  //          expect(dispatch).toHaveBeenCalledWith(actions.FETCH_USERINFO_TRIGGERED);
  //          expect(dispatch).toHaveBeenCalledWith(actions.FETCH_USERINFO_SUCCESS);
  //     });
  //   });
  // });
  //
  //
  // describe('addExercise', () => {
  //   it('Should add a new exercise for logged in user', () => {
  //       const exercise = {
  //         userId: '123',
  //         date: '1/23/13',
  //         activity: 'bowling',
  //         duration: 32,
  //       };
  //
  //       const dispatch = jest.fn();
  //       global.fetch = jest.fn().mockImplementation(() =>
  //         Promise.resolve({
  //             json() {
  //               return exercise
  //             }
  //         })
  //       );
  //
  //      return addExercise(exercise)(dispatch).then(() => {
  //          expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/exercise`);
  //          expect(dispatch).toHaveBeenCalledWith(actions.ADD_EXERCISE_TRIGGERED);
  //          expect(dispatch).toHaveBeenCalledWith(actions.ADD_EXERCISE_SUCCESS);
  //     });
  //   });
  // });
  //
  // describe('editExercise', () => {
  //   it('Should edit an exisiting exercise', () => {
  //     const exercise = {
  //       userId: '123',
  //       date: '1/23/13',
  //       activity: 'bowling',
  //       duration: 32,
  //     };
  //
  //       const dispatch = jest.fn();
  //       global.fetch = jest.fn().mockImplementation(() =>
  //         Promise.resolve({
  //             json() {
  //               return exercise
  //             }
  //         })
  //       );
  //
  //      return editExercise(exercise)(dispatch).then(() => {
  //          expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/exercise`);
  //          expect(dispatch).toHaveBeenCalledWith(actions.EDIT_EXERCISE_TRIGGERED);
  //          expect(dispatch).toHaveBeenCalledWith(actions.EDIT_EXERCISE_SUCCESS);
  //     });
  //   });
  // });
  //
  //
  // describe('deleteExercise', () => {
  //   it('Should delete an exisiting exercise', () => {
  //     const exercise = {
  //       id: '123'
  //     };
  //
  //       const dispatch = jest.fn();
  //       global.fetch = jest.fn().mockImplementation(() =>
  //         Promise.resolve({
  //             json() {
  //               return exercise
  //             }
  //         })
  //       );
  //
  //      return deleteExercise(exercise)(dispatch).then(() => {
  //          expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/exercise`);
  //          expect(dispatch).toHaveBeenCalledWith(actions.DELETE_EXERCISE_TRIGGERED);
  //          expect(dispatch).toHaveBeenCalledWith(actions.DELETE_EXERCISE_SUCCESS);
  //     });
  //   });
  // });
  //
  //
  // describe('addActivity', () => {
  //   it('Should edit an exisiting exercise', () => {
  //     const { activity } = 'tennis';
  //       const dispatch = jest.fn();
  //       global.fetch = jest.fn().mockImplementation(() =>
  //         Promise.resolve({
  //             json() {
  //               return activity
  //             }
  //         })
  //       );
  //
  //      return addActivity(activity)(dispatch).then(() => {
  //          expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/activity`);
  //          expect(dispatch).toHaveBeenCalledWith(actions.ADD_ACTIVITY_TRIGGERED);
  //          expect(dispatch).toHaveBeenCalledWith(actions.ADD_ACTIVITY_SUCCESS);
  //     });
  //   });
  // });
});
