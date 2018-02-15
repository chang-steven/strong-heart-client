import * as actions from './index';

describe('userSignUp', () => {
  it('Should return the action', () => {

  })
});

describe('fetchUserInfo', () => {
  it('Should return data for user', () => {
      const userInfo = {
        activities: [],
        currentUser: {},
        exerciseLog: [],
        exerciseStatistics: {},
      };

      global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({

        })
      )
    });
});
