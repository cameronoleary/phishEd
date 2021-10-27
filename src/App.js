// External
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Internal
import { ROUTES } from './constants';
import Quiz from './components/Quiz';
import LandingPage from './components/LandingPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.LANDING_PAGE} component={LandingPage} />
        <Route path={ROUTES.QUIZ} component={Quiz} />
      </Switch>
    </Router>
  );
}

export default App;
