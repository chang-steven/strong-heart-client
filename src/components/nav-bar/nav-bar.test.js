/* describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './index';

describe('<NavBar />', () => {
  it('Should render without crashing', () => {
    shallow(<NavBar />);
  });
});
