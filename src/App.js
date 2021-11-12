// External
import React from 'react';
import Wave from 'react-wavify';
import { makeStyles } from '@material-ui/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Internal
import { ROUTES } from './constants';
import Quiz from './components/Quiz';
import LandingPage from './components/LandingPage';

const useStyles = makeStyles({
    wave: {
        zIndex: '-1',
        height: '25rem',
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
                    amplitude: 50,
                    speed: 0.15,
                    points: 8,
                }}
            />
            <Router>
                <Switch>
                    <Route
                        exact
                        path={ROUTES.LANDING_PAGE}
                        component={LandingPage}
                    />
                    <Route path={ROUTES.QUIZ} component={Quiz} />
                </Switch>
            </Router>
        </>
    );
};

export default App;
