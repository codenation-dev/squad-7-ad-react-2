import React from 'react';
import { mount } from 'enzyme';
import { KeyboardArrowRight } from 'styled-icons/material';
import CardLink from '../../components/cardLink';
import { StyledCardLink, Title } from '../../components/cardLink/style';

it('should render the UserProfile', () => {
  const wrapper = mount(<CardLink />);

  expect(wrapper.find(StyledCardLink).exists()).toBe(true);
  expect(wrapper.find(Title).exists()).toBe(true);
  expect(wrapper.find(KeyboardArrowRight).exists()).toBe(true);
});
