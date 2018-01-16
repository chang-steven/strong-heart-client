/* describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './index';
import SectionContainer from '../section-container';

describe('<Home />', () => {
  const props = {
    homeContent: [
      {content: 'This content'}
    ]
  };
  it('Should render without crashing', () => {
    shallow(<Home {...props}/>);
  });
});
