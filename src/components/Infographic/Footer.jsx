// External
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/styles';

// Assets
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// Internal
import copy from '../../copy';
import { ROUTES } from '../../constants';

const useStyles = makeStyles({
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
        <Fade bottom>
            <div className={classes.container}>
                <span className={classes.paragraph}>
                    {copy.landingPage.footer.paragraph}
                </span>
                <Link className={classes.button} to={ROUTES.QUIZ}>
                    <Button variant='contained' endIcon={<NavigateNextIcon />}>
                        {copy.landingPage.footer.buttonLabel}
                    </Button>
                </Link>
            </div>
        </Fade>
    );
};

export default Footer;
