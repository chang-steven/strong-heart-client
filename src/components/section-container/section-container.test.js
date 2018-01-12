/* describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import SectionContainer from './index';

describe('<SectionContainer />', () => {
  it('Should render without crashing', () => {
    shallow(<SectionContainer />);
  });
});
