// External
import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Internal
import Content from './Content/Content';
import Footer from './Footer';
import Header from './Header';

const useStyles = makeStyles({
    container: {
        maxWidth: '50rem',
    },
});

const ContentFrame = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Header />
            <Content />
            <Footer />
        </div>
    );
};

export default ContentFrame;
