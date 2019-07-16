import React from 'react';
import './config/RectotronConfig';

import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  );
}

export default App;
