import React from 'react';
import { mount } from 'enzyme';

import NavBar from '../../components/navbar';

it('should render the NavBar', () => {
  const wrapper = mount(<NavBar />);

  expect(wrapper.exists()).toBe(true);
});
