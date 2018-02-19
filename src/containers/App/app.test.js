/* describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { App } from './index';

describe('<App />', () => {
  it('Should render without crashing', () => {
    shallow(<App />);
  });
});
