// External
import React from 'react';
import Wave from 'react-wavify'
import { makeStyles } from '@material-ui/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Internal
import { ROUTES } from './constants';
import Quiz from './components/Quiz';
import LandingPage from './components/LandingPage';

const useStyles = makeStyles({
  wave: {
      zIndex: '-1',
      height: '55vh',
      position: 'absolute',
      transform: 'rotate(180deg)',
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <>
      <Wave
        className={classes.wave}
        fill='#FFFFFF'
        paused={false}
        options={{
          height: 20,
          amplitude: 25,
          speed: 0.1,
          points: 5,
        }}
      />
      <Router>
        <Switch>
          <Route exact path={ROUTES.LANDING_PAGE} component={LandingPage} />
          <Route path={ROUTES.QUIZ} component={Quiz} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
