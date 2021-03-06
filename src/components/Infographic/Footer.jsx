// External
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

// Internal
import copy from '../../copy';
import Button from '../Button';
import { ROUTES } from '../../constants';
import ContentBlock from './Content/ContentBlock';

// Assets
import QuizIcon from '@mui/icons-material/Quiz';

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
    const { footer } = copy.landingPage;

    return (
        <Fade bottom>
            <ContentBlock icon={<QuizIcon fontSize='large' />}>
                <div className={classes.container}>
                    <span
                        data-testid='footer-paragraph'
                        className={classes.paragraph}
                    >
                        {footer.paragraph}
                    </span>
                    <Link to={ROUTES.PREFACE}>
                        <Button label={footer.buttonLabel} />
                    </Link>
                </div>
            </ContentBlock>
        </Fade>
    );
};

export default Footer;
