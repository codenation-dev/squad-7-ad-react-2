import React from 'react';
import './config/RectotronConfig';

import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';

import GlobalStyle from './styles/global';
import NavBar from './components/navbar';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <NavBar />
      <Routes />
    </Provider>
  );
};

export default App;
