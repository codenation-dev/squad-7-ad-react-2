import React from 'react';
import { mount } from 'enzyme';

import UserProfile from '../../components/userAbout/userProfile';
import {
  Avatar,
  Wrapper,
  Title,
} from '../../components/userAbout/userProfile/style';

it('should render the UserProfile', () => {
  const wrapper = mount(<UserProfile />);

  expect(wrapper.find(Wrapper).exists()).toBe(true);
  expect(wrapper.find(Avatar).exists()).toBe(true);
  expect(wrapper.find(Title).exists()).toBe(true);

});


it('should have default props', () => {
  const wrapper = mount(<UserProfile />);
  const props = wrapper.props();
  expect(props.avatarUrl).toBe('https://avatars2.githubusercontent.com/u/42302?v=4');
  expect(props.name).toBe('');
});