import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';

import App from '../App';

const mockStore = createStore();

const INITIAL_STATE = {
  username: '',
  userId: null,
  avatarUrl: '',
  email: '',
  blog: '',
  data: [],
  pageCount: 0,
  pageIndex: 0,
  error: false,
  loading: false,
};

const store = mockStore(INITIAL_STATE);

it('should render the App', () => {
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(wrapper.find(App).exists()).toBe(true);
});
