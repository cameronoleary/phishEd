// External
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

// Internal
import copy from '../copy';
import { ROUTES } from '../constants';

const useStyles = makeStyles({
    button: {
        width: '8rem',
        height: '2rem',
        cursor: 'pointer',
        marginRight: '1rem',
        borderRadius: '.313rem',
        '&:last-child': {
            marginRight: 0,
        },
    },
    buttonContainer: {
        display: 'flex',
        width: '100%',
        margin: '1rem 0 1rem 0',
        justifyContent: 'center',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'center',
        justifyContent: 'center',
    },
    paragraph: {
        width: '100%',
    },
});

const LandingPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <p>{copy.landingPage.quiz.paragraph}</p>
            <Link className={classes.button} to={ROUTES.QUIZ}>
                <button className={classes.button}>{copy.landingPage.quiz.buttonLabel}</button>
            </Link>
        </div>
    );
};

export default LandingPage;