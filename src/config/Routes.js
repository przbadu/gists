import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from '../components/navbar';
import { Gists, Gist } from '../components/gists';

function Routes() {
  return (
    <Router>
      <div className="gists-wrapper">
        <Navigation />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Gists} />
            <Route path="/g/:gistId" component={Gist} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Routes;
