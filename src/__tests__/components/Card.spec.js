import React from 'react';
import { mount } from 'enzyme';

import { StyledCard, CardHeader, CardContent } from '../../components/card';

it('should render the StyledCard', () => {
  const wrapper = mount(<StyledCard />);

  expect(wrapper.find(StyledCard).exists()).toBe(true);
});

it('should render the CardHeader', () => {
  const wrapper = mount(<CardHeader />);

  expect(wrapper.find(CardHeader).exists()).toBe(true);
});

it('should render the CardContent', () => {
  const wrapper = mount(<CardContent />);

  expect(wrapper.find(CardContent).exists()).toBe(true);
});
