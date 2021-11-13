// External
import React from 'react';
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/styles';

// Internal
import copy from '../../copy';
import Logo from '../Logo';

const useStyles = makeStyles({
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

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Fade left>
                <Logo />
            </Fade>
            <Fade right>
                <span className={classes.title}>{copy.title}</span>
            </Fade>
            <Fade bottom>
                <span className={classes.paragraph}>
                    {copy.landingPage.header.about}
                </span>
            </Fade>
        </div>
    );
};

export default Header;
