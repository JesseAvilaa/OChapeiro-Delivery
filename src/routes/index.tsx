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
        window.location.href = 'https://www.facebook.com/ochapeirooficial/';
        return null;
      }}
    />

    <Route
      path="/whatsapp"
      component={() => {
        window.location.href =
          'https://chat.whatsapp.com/JO5Ej9MCu8SLJw3ST7xCKs';
        return null;
      }}
    />
  </Switch>
);

export default Routes;
