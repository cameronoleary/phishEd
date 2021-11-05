// External
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

// Internal
import copy from '../../copy';
import { ROUTES } from '../../constants';

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
        width: '100%',
        display: 'flex',
        margin: '1rem 0 1rem 0',
        justifyContent: 'center',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    paragraph: {
        color: 'white',
        fontSize: '1.125rem',
        marginBottom: '1rem',
        lineHeight: '1.875rem',
    },
});

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <span className={classes.paragraph}>
                {copy.landingPage.footer.paragraph}
            </span>
            <Link className={classes.button} to={ROUTES.QUIZ}>
                <button className={classes.button}>
                    {copy.landingPage.footer.buttonLabel}
                </button>
            </Link>
        </div>
    );
};

export default Footer;
