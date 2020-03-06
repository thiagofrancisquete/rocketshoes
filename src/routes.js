import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CartPage from './pages/Cart';
import HomePage from './pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/cart" component={CartPage} />
    </Switch>
  );
}
