/* describe, it */

import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './index';

describe('<NavBar />', () => {
  const testLinks = [  
    {title: 'about', link: '/about'},
    {title: 'how it works', link: '/how-it-works'},
    {title: 'analysis', link: '/analysis'}
  ];

  it('Should render without crashing', () => {
    shallow(<NavBar links={testLinks}/>);
  });
});
