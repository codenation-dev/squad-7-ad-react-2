import React from 'react';
import { mount } from 'enzyme';

import Summary from '../../components/summary';

const summary = [
  {
    year: '2019',
    count: 2,
  },
  {
    year: '2018',
    count: 3,
  },
];

it('should render the Summary', () => {
  const wrapper = mount(<Summary summary={summary} />);

  expect(wrapper.find(Summary).exists()).toBe(true);
});
