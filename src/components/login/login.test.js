/* describe, it */

import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Login } from './index';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('<Login />', () => {
  it('Should render without crashing', () => {
    shallow(<Login />);
  });

  // it('should fire the onSubmit callback when the form is submitted', () => {
  //   const store = mockStore({});
  //   const callback = jest.fn();
  //   const wrapper = mount(<Login onSubmit={callback}/>);
  //   const value = 'Foobar';
  //   wrapper.find('input[type="text"]').instance().value = value;
  //     wrapper.simulate('submit');
  //     expect(callback).toHaveBeenCalledWith(value);
  // });
});
