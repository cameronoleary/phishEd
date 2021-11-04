// External
import React from 'react';
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

    return (
        <div className={classes.container}>
            <ContentFrame />
        </div>
    );
};

export default LandingPage;
