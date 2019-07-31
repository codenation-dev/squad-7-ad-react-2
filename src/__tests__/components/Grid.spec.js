import React from 'react';
import { mount } from 'enzyme';

import { Container, Row, Column } from '../../components/grid';

it('should render the Container', () => {
  const wrapper = mount(<Container />);

  expect(wrapper.exists()).toBe(true);
});

it('should render the Container Fluid', () => {
  const wrapper = mount(<Container fluid />);

  expect(wrapper.exists()).toBe(true);
});

it('should render the Row', () => {
  const wrapper = mount(<Row />);

  expect(wrapper.exists()).toBe(true);
});

it('should render the Column', () => {
  const wrapper = mount(<Column />);

  expect(wrapper.exists()).toBe(true);
});
