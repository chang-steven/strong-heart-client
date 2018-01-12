/* describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import SignUp from './index';

describe('<SignUp />', () => {
  it('Should render without crashing', () => {
    shallow(<SignUp />);
  });
});
