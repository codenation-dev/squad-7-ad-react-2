import React from 'react';
import { mount } from 'enzyme';

import CardList from '../../components/cardList';

it('should render the CardList', () => {
  const wrapper = mount(<CardList />);

  expect(wrapper.find(CardList).exists()).toBe(true);
});
