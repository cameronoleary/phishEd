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
        fontSize: '6rem',
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginBottom: '2.5rem',
    },
});

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Fade top>
                <Logo />
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
