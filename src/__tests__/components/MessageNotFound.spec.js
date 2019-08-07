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

it('should be able to Change User Name', () => {
  const wrapper = mount(
    <Provider store={store}>
      <MessageNotFound />
    </Provider>
  );

  const input = wrapper.find('input');
  input.simulate('change', { target: { value: 'UserNameTest' } });
  const messageNotFoundWrapper = wrapper.find('MessageNotFound');
  const { username } = messageNotFoundWrapper.state();

  expect(username).toBe('UserNameTest');
});
