import React from 'react';
import { mount } from 'enzyme';

import UserAbout from '../../components/userAbout';
import { CardHeader, StyledCard } from '../../components/card/style';
import UserProfile from '../../components/userAbout/userProfile';
import ExternalLink from '../../components/link';

it('should render the UserAbout', () => {
  const wrapper = mount(<UserAbout />);
  console.log(wrapper);
  expect(wrapper.find(StyledCard).exists()).toBe(true);
  expect(wrapper.find(CardHeader).exists()).toBe(true);
  expect(wrapper.find(ExternalLink).exists()).toBe(true);
  expect(wrapper.find(UserProfile).exists()).toBe(true);
});
