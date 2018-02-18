/* describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard } from './index';

describe('<Dashboard />', () => {
  it('Should render without crashing', () => {
    shallow(<Dashboard />);
  });
});
