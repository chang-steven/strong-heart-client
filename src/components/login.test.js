/* describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import Login from './login';

describe('<Login />', () => {
  it('Should render without crashing', () => {
    shallow(<Login />);
  });
});
