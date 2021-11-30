// External
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

// Internal
import ContentFrame from './Infographic/ContentFrame';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '2.5rem',
        textAlign: 'center',
        justifyContent: 'center',
    },
});

const LandingPage = () => {
    const classes = useStyles();

    useEffect(() => {
        // Always scroll to the top of the landing page when visited.
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={classes.container}>
            <ContentFrame />
        </div>
    );
};

export default LandingPage;
