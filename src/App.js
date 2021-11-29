// External
import React from 'react';
import Wave from 'react-wavify';
import { makeStyles } from '@material-ui/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Internal
import { ROUTES } from './constants';
import Quiz from './components/Quiz/Quiz';
import Review from './components/Quiz/Review';
import Preface from './components/Quiz/Preface';
import LandingPage from './components/LandingPage';

const useStyles = makeStyles({
    wave: {
        zIndex: '-1',
        height: '33.5rem',
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
                    <Route path={ROUTES.PREFACE} component={Preface} />
                    <Route path={ROUTES.QUIZ} component={Quiz} />
                    <Route path={ROUTES.REVIEW} component={Review} />
                </Switch>
            </Router>
        </>
    );
};

export default App;
