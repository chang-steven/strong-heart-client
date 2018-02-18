/* describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { EditExercise } from './index';

describe('<EditExercise />', () => {
  it('Should render without crashing', () => {
    const exercises = [{_id: '123', activity: 'basketball' }];
    const exerciseId = '123';

    shallow(<EditExercise
      exerciseLog={exercises}
      exerciseId={exerciseId}
    />);
  });
});
