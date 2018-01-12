/* describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import Footer from './index';

describe('<Footer />', () => {
  it('Should render without crashing', () => {
    shallow(<Footer />);
  });
});
