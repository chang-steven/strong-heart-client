/* describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import SignUp from './signup';

describe('<SignUp />', () => {
  it('Should render without crashing', () => {
    shallow(<SignUp />);
  });
});
