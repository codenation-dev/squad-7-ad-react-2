import React from 'react';
import { mount } from 'enzyme';

import Card from '../../components/card';
import {
  StyledCard,
  CardHeader,
  CardContent,
} from '../../components/card/style';

it('should render the StyledCard', () => {
  const wrapper = mount(<Card />);

  expect(wrapper.find(StyledCard).exists()).toBe(true);
});

it('should render the CardHeader', () => {
  const wrapper = mount(<Card />);

  expect(wrapper.find(CardHeader).exists()).toBe(true);
});

it('should render the CardContent', () => {
  const wrapper = mount(<Card />);

  expect(wrapper.find(CardContent).exists()).toBe(true);
});
