import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Foods from '../pages/Foods';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/contact" component={Contact} />
    <Route path="/foods" component={Foods} />
    <Route
      path="/facebook"
      component={() => {
        window.location.href = '/';
        return null;
      }}
    />

    <Route
      path="/whatsapp"
      component={() => {
        window.location.href =
          '/';
        return null;
      }}
    />
  </Switch>
);

export default Routes;
