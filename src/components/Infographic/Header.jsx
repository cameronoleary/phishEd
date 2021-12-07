// External
import React from 'react';
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/styles';

// Internal
import Logo from '../Logo';
import copy from '../../copy';
import ContentBlock from './Content/ContentBlock';

const useStyles = makeStyles({
    card: {
        margin: '0 0 8rem',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    paragraph: {
        fontSize: '1.125rem',
        lineHeight: '1.875rem',
        marginBottom: '5rem',
    },
    title: {
        top: '-1.875rem',
        fontSize: '5rem',
        fontWeight: 'bold',
        marginLeft: '1rem',
        position: 'relative',
        fontFamily: 'Rock Salt',
    },
});

// A reusable component for the app logo, name, and introduction.
const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Fade left>
                <Logo />
            </Fade>
            <Fade right>
                <span data-testid='header-title' className={classes.title}>
                    {copy.title}
                </span>
            </Fade>
            <Fade bottom>
                <ContentBlock
                    text={copy.landingPage.header.about}
                    className={{ card: classes.card }}
                />
            </Fade>
        </div>
    );
};

export default Header;
