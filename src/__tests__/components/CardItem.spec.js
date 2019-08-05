import React from 'react';
import { mount } from 'enzyme';

import CardItem from '../../components/cardItem';

it('should render the CardItem', () => {
  const wrapper = mount(<CardItem />);

  expect(wrapper.find(CardItem).exists()).toBe(true);
});
