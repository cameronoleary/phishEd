// External
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@material-ui/styles';

// Internal
import copy from '../../copy';
import Button from '../Button';
import { ROUTES } from '../../constants';
import ContentBlock from '../Infographic/Content/ContentBlock';

// Assets
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const useStyles = makeStyles({
    buttonContainer: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '1rem',
        justifyContent: 'center',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'center',
        justifyContent: 'center',
    },
});

const Preface = () => {
    const classes = useStyles();

    const { nav, preface } = copy;

    return (
        <Fade top>
            <div className={classes.container}>
                <ContentBlock
                    icon={<LightbulbIcon fontSize='large' />}
                    {...preface}
                >
                    <div className={classes.buttonContainer}>
                        <Stack spacing={2} direction='row'>
                            <Link to={ROUTES.LANDING_PAGE}>
                                <Button
                                    startIcon={<NavigateBeforeIcon />}
                                    label={nav.back}
                                />
                            </Link>
                            <Link to={ROUTES.QUIZ}>
                                <Button
                                    endIcon={<NavigateNextIcon />}
                                    label={preface.buttonLabel}
                                />
                            </Link>
                        </Stack>
                    </div>
                </ContentBlock>
            </div>
        </Fade>
    );
};

export default Preface;