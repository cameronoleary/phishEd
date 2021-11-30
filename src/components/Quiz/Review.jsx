// External
import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@material-ui/styles';

// Internal
import Email from './Email';
import copy from '../../copy';
import Button from '../Button';
import ContentBlock from '../Infographic/Content/ContentBlock';

// Assets
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        marginLeft: '1rem',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonContainer: {
        display: 'flex',
        marginTop: '1rem',
        justifyContent: 'space-evenly',
    },
    header: {
        color: 'black',
    },
});

const Review = ({ emails }) => {
    const { buttons, review } = copy.quiz;
    const classes = useStyles();
    const [next, setNext] = useState(0);

    if (!emails) return null;

    const handleNext = (inc) => {
        setNext(next + inc);
    };

    const descPrefix = emails[next].correct ? review.correct : review.incorrect;
    const description = `${descPrefix} ${emails[next].descriptionMarked}`;

    return (
        <div className={classes.container}>
            <Fade top>
                <ContentBlock
                    header={emails[next].name}
                    text={description}
                    list={emails[next].list}
                    className={{ header: classes.header }}
                >
                    <div className={classes.buttonContainer}>
                        <Stack spacing={2} direction='row'>
                            {next !== 0 && (
                                <Button
                                    startIcon={<NavigateBeforeIcon />}
                                    label={buttons.labels.previous}
                                    onClick={() => handleNext(-1)}
                                />
                            )}
                            {next !== emails.length - 1 && (
                                <Button
                                    endIcon={<NavigateNextIcon />}
                                    label={buttons.labels.next}
                                    onClick={() => handleNext(1)}
                                />
                            )}
                        </Stack>
                    </div>
                </ContentBlock>
                <Email src={emails[next].srcMarked} />
            </Fade>
        </div>
    );
};

export default Review;
