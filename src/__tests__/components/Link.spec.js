import React from 'react';
import { mount } from 'enzyme';

import ExternalLink from '../../components/link';

it('should render the ExternalLink', () => {
  const wrapper = mount(<ExternalLink />);

  expect(wrapper.exists()).toBe(true);
});

it('should render the ExternalLink with type link', () => {
  const wrapper = mount(<ExternalLink type="link" />);

  expect(wrapper.exists()).toBe(true);
});

it('should render the ExternalLink with type email', () => {
  const wrapper = mount(<ExternalLink type="email" />);

  expect(wrapper.exists()).toBe(true);
});
