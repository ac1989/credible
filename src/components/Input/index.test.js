import React from 'react';
import { shallow } from 'enzyme';
import Input from './index';

it('renders a single input', () => {
  const wrapper = shallow(<Input />);
  expect(wrapper.dive().name()).toEqual('input');
  expect(wrapper.dive().find('input').length).toEqual(1);
});
