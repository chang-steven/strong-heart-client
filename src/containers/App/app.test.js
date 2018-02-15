/* describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { App } from './index';

describe('<App />', () => {
  const testLinks = [
    {title: 'why', link: '/why'},
    {title: 'how it works', link: '/how-it-works'},
    {title: 'analysis', link: '/analysis'}
  ];

  it('Should render without crashing', () => {
    shallow(<App links={testLinks}/>);
  });
});
