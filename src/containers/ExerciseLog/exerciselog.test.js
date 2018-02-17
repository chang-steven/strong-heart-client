/* describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { ExerciseLog } from './index';

describe('<ExerciseLog />', () => {
  it('Should render without crashing', () => {
    shallow(<ExerciseLog />);
  });
});
