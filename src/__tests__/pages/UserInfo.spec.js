import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';

import UserInfo from '../../pages/UserInfo';

it('should render the UserInfo', () => {
  const mockStore = createStore();

  const INITIAL_STATE = {
    repositories: {
      username: 'teste',
      userId: null,
      avatarUrl: '',
      email: '',
      blog: '',
      data: [
        {
          id: 1,
          language: 'javascript',
        },
      ],
      pageCount: 0,
      pageIndex: 0,
      error: false,
      loading: false,
    },
  };

  const store = mockStore(INITIAL_STATE);

  const wrapper = mount(
    <Provider store={store}>
      <UserInfo />
    </Provider>
  );

  expect(wrapper.find(UserInfo).exists()).toBe(true);
});

it('should render the loading UserInfo', () => {
  const mockStore = createStore();

  const INITIAL_STATE = {
    repositories: {
      username: '',
      userId: null,
      avatarUrl: '',
      email: '',
      blog: '',
      data: [
        {
          id: 1,
          language: 'javascript',
        },
      ],
      pageCount: 0,
      pageIndex: 0,
      error: false,
      loading: true,
    },
  };

  const store = mockStore(INITIAL_STATE);

  const wrapper = mount(
    <Provider store={store}>
      <UserInfo />
    </Provider>
  );

  expect(wrapper.find(UserInfo).exists()).toBe(true);
});
