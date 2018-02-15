import * as actions from './index';
import API_BASE_URL from '../config';

describe('userSignUp', () => {
  it('Should return the action', () => {

  })
});

// describe('fetchUserInfo', () => {
//   it('Should return data for user', () => {
//       const userInfo = {
//         activities: [],
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
//      return actions.fetchUserInfo()(dispatch).then(() => {
//          expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/user`);
//          expect(dispatch).toHaveBeenCalledWith(actions.FETCH_USERINFO_TRIGGERED);
//          expect(dispatch).toHaveBeenCalledWith(actions.FETCH_USERINFO_SUCCESS);
//     });
//   });
// });
