import { UserReducer } from './user.reducer';
import { userSignUp, userLogIn, addExercise, editExercise, addActivity, deleteExercise, fetchUserInfo } from '../actions';


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
  badges: [],
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
      // it('Should add new lists', () => {
      //     let state = initialState
      //     state = UserReducer(state, addList(list1Title));
      //     state = UserReducer(state, addList(list2Title));
      //     expect(state).toEqual({
      //         lists: [list1, list2]
      //     });
      // });
  });
