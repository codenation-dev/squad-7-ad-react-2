import React from 'react';
import './config/RectotronConfig';

import { Provider } from 'react-redux';
import store from './store';

import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
