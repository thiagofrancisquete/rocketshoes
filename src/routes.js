import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CartPage from './pages/Cart/index';
import HomePage from './pages/Home/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/cart" component={CartPage} />
    </Switch>
  );
}
