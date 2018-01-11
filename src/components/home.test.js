/* describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import Home from './home';

describe('<Home />', () => {
  it('Should render without crashing', () => {
    shallow(<Home />);
  });
});
