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
import ContentBlock from './Content/ContentBlock';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    paragraph: {
        fontSize: '1.125rem',
        marginBottom: '1rem',
        lineHeight: '1.875rem',
    },
});

const Footer = () => {
    const classes = useStyles();

    return (
        <Fade bottom>
            <ContentBlock>
                <div className={classes.container}>
                    <span className={classes.paragraph}>
                        {copy.landingPage.footer.paragraph}
                    </span>
                    <Link to={ROUTES.QUIZ}>
                        <Button
                            sx={{
                                backgroundColor: '#f26721',
                            }}
                            variant='contained'
                            endIcon={<NavigateNextIcon />}
                        >
                            {copy.landingPage.footer.buttonLabel}
                        </Button>
                    </Link>
                </div>
            </ContentBlock>
        </Fade>
    );
};

export default Footer;
