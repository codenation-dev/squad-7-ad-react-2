import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../../components/navbar';

const mockStore = createStore();

const INITIAL_STATE = {
  repositories: {
    data: [],
    loading: false,
  },
};

const store = mockStore(INITIAL_STATE);

it('should render the NavBar', () => {
  const wrapper = mount(
    <BrowserRouter>
      <Provider store={store}>
        <NavBar />
      </Provider>
    </BrowserRouter>
  );

  expect(wrapper.exists()).toBe(true);
});
