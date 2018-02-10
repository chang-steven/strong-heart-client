/* describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import { App } from './index';

describe('<App />', () => {
  const testLinks = [
    {title: 'about', link: '/about'},
    {title: 'how it works', link: '/how-it-works'},
    {title: 'analysis', link: '/analysis'}
  ];
  
  it('Should render without crashing', () => {
    shallow(<App links={testLinks}/>);
  });
});
