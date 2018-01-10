/* describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './nav-bar';

describe('<NavBar />', () => {
  it('Should render without crashing', () => {
    shallow(<NavBar />);
  })
})
