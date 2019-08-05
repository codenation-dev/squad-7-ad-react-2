import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';

import MessageNotFound from '../../components/messageNotFound';

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

it('should render the MessageNotFound', () => {
  const wrapper = mount(
    <Provider store={store}>
      <MessageNotFound />
    </Provider>
  );

  expect(wrapper.find(MessageNotFound).exists()).toBe(true);
});
