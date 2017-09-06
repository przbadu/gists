import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navigation from '../components/navbar';
import { Gists, Gist } from '../components/gists';
import configureStore from '../config/store';

const store = configureStore();

function Routes() {
  return (
    <Provider store={store}>
      <Router>
        <div className="gists-wrapper">
          <Navigation />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Gists} />
              <Route exact path="/g/:gistId" component={Gist} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default Routes;
