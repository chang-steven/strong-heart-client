/* describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import SectionContainer from './section-container';

describe('<SectionContainer />', () => {
  it('Should render without crashing', () => {
    shallow(<SectionContainer />);
  });
});
