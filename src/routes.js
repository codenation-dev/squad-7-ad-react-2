import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import UserInfo from './pages/UserInfo';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/details" exact component={UserInfo} />
    </Switch>
  );
}
