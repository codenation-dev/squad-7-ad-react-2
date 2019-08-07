import React from 'react';
import { mount } from 'enzyme';

import UserAbout from '../../components/userAbout';
import { CardHeader, StyledCard } from '../../components/card';
import UserProfile from '../../components/userAbout/userProfile';

it('should render the UserAbout', () => {
  const profile = {
    blog: 'blogteste',
    email: 'emailteste',
  };

  const wrapper = mount(<UserAbout profile={profile} />);

  expect(wrapper.find(StyledCard).exists()).toBe(true);
  expect(wrapper.find(CardHeader).exists()).toBe(true);
  expect(wrapper.find(UserProfile).exists()).toBe(true);
});
