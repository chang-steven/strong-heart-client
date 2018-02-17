/* describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { AddExercise } from './index';

describe('<AddExercise />', () => {
  it('Should render without crashing', () => {
    shallow(<AddExercise />);
  });
});
