import { fetchExerciseLog, FETCH_EXERCISELOG_SUCCESS, fetchExerciseLogSuccess } from './index';

describe('fetchExerciseLog', () => {
  it('Should dispatch fetchExerciseLogSuccess', () => {
    const log = {
      exerciseLog: []
    };
    // const action = fetchExerciseLogSuccess(log);
    // expect(action.type).toEqual(FETCH_EXERCISELOG_SUCCESS);
    // expect(action.log).toEqual(log);

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json() {
          return log;
        }
      })
    );

    const dispatch = jest.fn();
    return fetchExerciseLog()(dispatch).then(() => {
      expect(fetch).toHaveBeenCalledWith('/exercise-log');
      expect(dispatch).toHaveBeenCalledWith(fetchExerciseLogSuccess(log))
    })
  });
});
