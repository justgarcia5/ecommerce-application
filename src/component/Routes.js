import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import App from '../pages/App';
import ProductView from '../pages/ProductView'

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/product/:id" component={ProductView} />
        </Switch>
      </div>
    </Router>
  );
}
