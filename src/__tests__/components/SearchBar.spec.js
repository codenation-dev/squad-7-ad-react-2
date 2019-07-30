import React from 'react';
import { mount } from 'enzyme';

import SearchBar from '../../components/searchbar';
import { Form, SearchButton, Spinner } from '../../components/searchbar/style';

it('should render the SearchBar', () => {
  const wrapper = mount(<SearchBar />);

  expect(wrapper.exists()).toBe(true);
});

it('should render the SearchBar loading', () => {
  const wrapper = mount(<SearchBar isLoading />);

  expect(
    wrapper
      .find(Form)
      .find(SearchButton)
      .find(Spinner)
      .exists()
  ).toBe(true);
});
